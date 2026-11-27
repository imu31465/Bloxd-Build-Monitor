export const id = 123;
export const ids = [123];
export const modules = {
  40675: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Ir,
      d: () => ar
    });
    var Zr = Qr(2839);
    let Wr = null;

    function ar(rr) {
      return null !== Wr && rr === Wr
    }

    function jr() {
      this.XF = !1, this.stopPropagation = !1, this.kF = !1, this.disabled = !1
    }
    class Ir {
      constructor(rr, Sr) {
        this.version = "0.7.0";
        var Qr = Object.assign({}, new jr, Sr || {});
        this.element = rr || document, this.XF = !!Qr.XF, this.stopPropagation = !!Qr.stopPropagation, this.kF = !!Qr.kF, this.disabled = !!Qr.disabled, this.filterEvents = (rr, Sr) => !0, this.ignoreEvent = rr => !1, this.down = new Zr.EventEmitter, this.up = new Zr.EventEmitter, this.state = {}, this.JF = {
          dx: 0,
          dy: 0,
          cSr: 0,
          FSr: 0,
          oSr: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? Er(this) : document.addEventListener("DOMContentLoaded", (rr => {
          Er(this)
        }), {
          once: !0
        })
      }
      bind(rr) {
        for (var Sr = arguments.length, Qr = new Array(Sr > 1 ? Sr - 1 : 0), Zr = 1; Zr < Sr; Zr++) Qr[Zr - 1] = arguments[Zr];
        Qr.forEach((Sr => {
          var Qr = this._keyBindmap[Sr] || [];
          Qr.includes(rr) || (Qr.push(rr), this._keyBindmap[Sr] = Qr)
        })), this.state[rr] = !!this.state[rr], this.pressCount[rr] = this.pressCount[rr] || 0, this.releaseCount[rr] = this.releaseCount[rr] || 0
      }
      unbind(rr) {
        for (var Sr in this._keyBindmap) {
          var Qr = this._keyBindmap[Sr],
            Zr = Qr.indexOf(rr);
          Zr > -1 && Qr.splice(Zr, 1)
        }
      }
      getBindings() {
        var rr = {};
        for (var Sr in this._keyBindmap) {
          this._keyBindmap[Sr].forEach((Qr => {
            rr[Qr] = rr[Qr] || [], rr[Qr].push(Sr)
          }))
        }
        return rr
      }
      lx() {
        fr(this.JF), fr(this.pressCount), fr(this.releaseCount)
      }
    }

    function fr(rr) {
      for (var Sr in rr) rr[Sr] = 0
    }

    function Er(rr) {
      window.addEventListener("keydown", hr.bind(null, rr, !0), !1), window.addEventListener("keyup", hr.bind(null, rr, !1), !1);
      var Sr = {
        passive: !0
      };
      rr.element.addEventListener("touchstart", Nr.bind(void 0, rr), {
        passive: !1
      }), rr.element.addEventListener("touchend", tr.bind(void 0, rr), Sr), rr.element.addEventListener("mousedown", zr.bind(null, rr, !0), Sr), window.document.addEventListener("mouseup", zr.bind(null, rr, !1), Sr), rr.element.addEventListener("touchmove", Yr.bind(null, rr), Sr), rr.element.addEventListener("mousemove", Yr.bind(null, rr), Sr), window.PointerEvent, rr.element.addEventListener("wheel", nr.bind(null, rr), Sr), rr.element.addEventListener("contextmenu", er.bind(null, rr), !1), window.addEventListener("blur", Br.bind(null, rr), !1)
    }
    var pr = 0,
      xr = 0,
      mr = null;

    function Nr(rr, Sr) {
      Sr.preventDefault(), Ur(Sr)
    }

    function Ur(rr) {
      let Sr = !1;
      for (let Qr = 0; Qr < rr.touches.length; ++Qr)
        if (rr.touches[Qr].identifier === mr) {
          Sr = !0;
          break
        } if (!Sr) {
        const Sr = rr.changedTouches[0];
        pr = Sr.clientX, xr = Sr.clientY, mr = Sr.identifier
      }
    }

    function tr(rr, Sr) {
      for (var Qr = Sr.changedTouches, Zr = 0; Zr < Qr.length; ++Zr) Qr[Zr].identifier === mr && (mr = null)
    }

    function hr(rr, Sr, Qr) {
      if (!rr.ignoreEvent(Qr)) try {
        Tr(rr, Qr), Sr && Qr.isTrusted && !Qr.repeat && rr._keyStates[Qr.code] && vr(rr, Qr.code)
      } finally {
        Or(Qr.code, Sr, rr, Qr)
      }
    }

    function zr(rr, Sr, Qr) {
      if (!rr.ignoreEvent(Qr)) try {
        Tr(rr, Qr)
      } finally {
        ! function(rr, Sr, Qr) {
          if ("pointerId" in Qr)
            if (Sr) {
              if (null !== rr._touches.currID) return;
              rr._touches.currID = Qr.pointerId
            } else {
              if (rr._touches.currID !== Qr.pointerId) return;
              rr._touches.currID = null
            } var Zr = "button" in Qr ? Qr.button + 1 : 1;
          Or("Mouse" + Zr, Sr, rr, Qr)
        }(rr, Sr, Qr)
      }
    }

    function Yr(rr, Sr) {
      var Qr = Sr.movementX || Sr.mozMovementX || 0,
        Zr = Sr.movementY || Sr.mozMovementY || 0;
      if (Sr.touches && 0 === (Qr | Zr)) {
        var Wr = function(rr) {
          Ur(rr);
          for (let Sr = 0; Sr < rr.changedTouches.length; ++Sr)
            if (rr.changedTouches[Sr].identifier == mr) {
              const Qr = rr.changedTouches[Sr],
                Zr = [Qr.clientX - pr, Qr.clientY - xr];
              return pr = Qr.clientX, xr = Qr.clientY, Zr
            } return console.error(`Did not find touch id ${mr}`), [0, 0]
        }(Sr);
        Qr = Wr[0], Zr = Wr[1]
      }
      rr.JF.dx += Qr, rr.JF.dy += Zr
    }

    function nr(rr, Sr) {
      Tr(rr, Sr);
      var Qr = 1;
      switch (Sr.deltaMode) {
        case 0:
          Qr = 1;
          break;
        case 1:
          Qr = 12;
          break;
        case 2:
          Qr = rr.element.clientHeight || window.innerHeight
      }
      rr.JF.cSr += (Sr.deltaX || 0) * Qr, rr.JF.FSr += (Sr.deltaY || 0) * Qr, rr.JF.oSr += (Sr.deltaZ || 0) * Qr
    }

    function er(rr, Sr) {
      if (!rr.kF) return Sr.preventDefault(), !1
    }
    var Kr = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function yr(rr, Sr) {
      return !!rr[Kr[Sr]] || ("AltRight" === Sr || "ControlLeft" === Sr) && "function" === typeof rr.getModifierState && !0 === rr.getModifierState("AltGraph")
    }

    function Br(rr, Sr) {
      for (var Qr in rr._modifiersHeldThroughBlur = {}, Kr) rr._keyStates[Qr] && (rr._modifiersHeldThroughBlur[Qr] = !0);
      Sr && Sr.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (rr) {
          return !0
        }
      }() && (clearTimeout(rr._blurRelease), rr._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var Sr in rr._modifiersHeldThroughBlur = {}, rr._keyStates) rr._keyStates[Sr] && !/^Mouse\d/.test(Sr) && vr(rr, Sr)
      }), 0))
    }

    function Tr(rr, Sr) {
      var Qr = rr._modifiersHeldThroughBlur;
      if (Qr && Sr.isTrusted && document.hasFocus())
        for (var Zr in Qr) delete Qr[Zr], rr._keyStates[Zr] && Zr !== Sr.code && (yr(Sr, Zr) || vr(rr, Zr))
    }

    function vr(rr, Sr) {
      const Qr = {
          code: Sr,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        Zr = Wr;
      Wr = Qr;
      try {
        Or(Sr, !1, rr, Qr)
      } finally {
        Wr = Zr
      }
    }

    function Or(rr, Sr, Qr, Zr) {
      var Wr = Qr._keyBindmap[rr];
      Wr && (Lr(Qr._keyStates[rr], Sr) && (Qr._keyStates[rr] = Sr, Wr.forEach((rr => {
        (!Qr.filterEvents || Qr.filterEvents(Zr, rr)) && function(rr, Sr, Qr, Zr) {
          var Wr = Sr ? Qr.pressCount : Qr.releaseCount;
          Wr[rr] = (Wr[rr] || 0) + 1;
          var ar = Qr._bindPressCount[rr] || 0;
          (ar += Sr ? 1 : -1) < 0 && (ar = 0);
          Qr._bindPressCount[rr] = ar;
          var jr = Qr.state[rr];
          if (Lr(jr, ar)) {
            Qr.state[rr] = ar > 0;
            var Ir = Sr ? Qr.down : Qr.up;
            Qr.disabled || Ir.emit(rr, Zr)
          }
        }(rr, Sr, Qr, Zr)
      }))), "button" in Zr || (Qr.XF && !Zr.defaultPrevented && Zr.preventDefault(), Qr.stopPropagation && Zr.stopPropagation()))
    }

    function Lr(rr, Sr) {
      return rr ? !Sr : Sr
    }
  },
  38197: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => tr,
      f: () => hr
    });
    var Zr = Qr(72),
      Wr = Qr(1573),
      ar = Qr(2128),
      jr = Qr(38193),
      Ir = Qr(688),
      fr = Qr(1155),
      Er = Qr.n(fr),
      pr = Qr(1338);
    const xr = [mr()];

    function mr() {
      return {
        source: null,
        direction: null,
        Vk: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function Nr(rr) {
      return xr.find((Sr => null !== Sr.source && Sr.source === rr))
    }

    function Ur(rr) {
      clearTimeout(rr.timeout), rr.source = null, rr.direction = null, rr.writtenAngle = null, rr.Vk && (rr.Vk.style.rotate = "")
    }
    const tr = (0, Zr.memo)((function() {
      const [, rr] = (0, Zr.useReducer)((rr => rr + 1), 0);
      return (0, Wr.c)("damagedByOtherPlayer", (Sr => {
        let {
          BW: Qr,
          direction: Zr
        } = Sr;
        const Wr = Qr || "nonDirectional",
          ar = function(rr) {
            var Sr;
            const Qr = null !== (Sr = Nr(rr)) && void 0 !== Sr ? Sr : xr.find((rr => null === rr.source));
            if (Qr) return Qr;
            const Zr = {
              source: null,
              direction: null,
              Vk: null,
              timeout: void 0,
              writtenAngle: null
            };
            return xr.push(Zr), Zr
          }(Wr);
        clearTimeout(ar.timeout), ar.source = Wr, ar.direction = Zr, ar.timeout = setTimeout((() => {
          Ur(ar), rr()
        }), 800), rr()
      })), (0, ar.d)("kill", (Sr => {
        let {
          killer: Qr,
          victim: Zr
        } = Sr;
        const Wr = Qr.local && Nr(Zr.id);
        Wr && (Ur(Wr), rr())
      })), (0, Zr.useEffect)((() => {
        const rr = (0, jr.e)("turnDamageIndicators", hr);
        return () => {
          rr(), xr.forEach(Ur)
        }
      }), []), (0, pr.jsx)("div", {
        className: "DirectionalDamage",
        children: xr.map(((rr, Sr) => (0, pr.jsx)("div", {
          ref: Sr => {
            rr.Vk = Sr
          },
          className: Er()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, Ir.L)(rr.direction),
            DamageIndicatorIdle: null === rr.source
          })
        }, Sr)))
      })
    }));

    function hr(rr) {
      for (const Sr of xr) {
        if (null === Sr.source || (0, Ir.L)(Sr.direction)) continue;
        const Qr = Sr.direction - rr;
        Qr !== Sr.writtenAngle && (Sr.writtenAngle = Qr, Sr.Vk.style.rotate = `${Qr}rad`)
      }
    }
  },
  38200: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Lr,
      i: () => vr
    });
    var Zr = Qr(72),
      Wr = Qr(26),
      ar = Qr(38193),
      jr = Qr(38207),
      Ir = Qr(37915),
      fr = Qr(38056),
      Er = Qr(2089),
      pr = Qr(2128),
      xr = Qr(1338);
    const mr = 20 * Math.PI / 180,
      Nr = new Map,
      Ur = 25 * Math.PI / 180,
      tr = Array.from({
        length: 6
      }, (() => ({
        kind: null,
        direction: 0,
        shownAt: 0,
        Vk: null,
        fade: null,
        timeout: void 0,
        writtenAngle: null,
        away: !1
      })));
    let hr = null,
      zr = null,
      Yr = [];
    const nr = 2;

    function er(rr) {
      const Sr = "combat" === rr.kind || "explosion" === rr.kind,
        Qr = null !== zr && null !== rr.writtenAngle && function(rr, Sr, Qr, Zr) {
          const Wr = Sr.width / 3.8,
            ar = (Zr ? .7 : .35) * Wr + 1,
            jr = (Zr ? .175 : .1) * Wr + 1,
            Ir = Sr.width / 2 - jr,
            fr = Math.sin(rr),
            Er = Math.cos(rr),
            pr = Sr.left + Sr.width / 2 + fr * Ir,
            xr = Sr.top + Sr.height / 2 - Er * Ir,
            mr = Math.abs(Er) * ar + Math.abs(fr) * jr,
            Nr = Math.abs(fr) * ar + Math.abs(Er) * jr;
          return Qr.some((rr => pr + mr > rr.left - nr && pr - mr < rr.right + nr && xr + Nr > rr.top - nr && xr - Nr < rr.bottom + nr))
        }(rr.writtenAngle, zr, Yr, Sr);
      Qr !== rr.away && rr.Vk && (rr.away = Qr, rr.Vk.classList.toggle("SoundCueAway", Qr))
    }
    let Kr = 0;

    function yr(rr) {
      var Sr;
      clearTimeout(rr.timeout), null === (Sr = rr.fade) || void 0 === Sr || Sr.cancel(), rr.fade = null, rr.kind = null, rr.writtenAngle = null, rr.away = !1, rr.Vk && (rr.Vk.className = "SoundCue SoundCueIdle", rr.Vk.style.rotate = "")
    }

    function Br(rr, Sr) {
      var Qr, Zr, Wr;
      const ar = performance.now();
      if (Math.abs((0, jr.r)(Kr, Sr)) < mr || ar - (null !== (Qr = Nr.get(rr)) && void 0 !== Qr ? Qr : -1 / 0) < 250) return;
      Nr.set(rr, ar), null === (Zr = hr) || void 0 === Zr || Zr();
      const Ir = function(rr, Sr) {
          const Qr = tr.find((Qr => Qr.kind === rr && Math.abs((0, jr.r)(Qr.direction, Sr)) < Ur));
          if (Qr) return Qr;
          return tr.find((rr => null === rr.kind)) || tr.reduce(((rr, Sr) => Sr.shownAt < rr.shownAt ? Sr : rr))
        }(rr, Sr),
        fr = Ir.Vk;
      fr && (clearTimeout(Ir.timeout), null === (Wr = Ir.fade) || void 0 === Wr || Wr.cancel(), Ir.kind = rr, Ir.direction = Sr, Ir.shownAt = ar, fr.className = `SoundCue SoundCue-${rr}`, Ir.away = !1, Tr(Ir, Kr), er(Ir), Ir.fade = fr.animate([{
        opacity: 1
      }, {
        opacity: 1,
        offset: .5
      }, {
        opacity: 0
      }], {
        duration: 1200,
        fill: "forwards"
      }), Ir.timeout = setTimeout((() => {
        yr(Ir)
      }), 1200))
    }

    function Tr(rr, Sr) {
      const Qr = rr.direction - Sr;
      Qr !== rr.writtenAngle && rr.Vk && (rr.writtenAngle = Qr, rr.Vk.style.rotate = `${Qr}rad`, er(rr))
    }

    function vr(rr) {
      Kr = rr;
      for (const Sr of tr) null !== Sr.kind && Tr(Sr, rr)
    }
    const Or = (0, Zr.memo)((function() {
        const rr = (0, Zr.useRef)(null);
        return (0, Zr.useEffect)((() => {
          const Sr = rr.current,
            Qr = () => {
              const {
                anywhere: rr,
                boxes: Qr
              } = (0, fr.d)();
              Sr.classList.toggle("SoundDirectionsHidden", rr), zr = Sr.getBoundingClientRect(), Yr = Qr;
              for (const Sr of tr) er(Sr)
            };
          let Zr = 0;
          const Wr = () => {
            cancelAnimationFrame(Zr), Zr = requestAnimationFrame((() => {
              Zr = requestAnimationFrame(Qr)
            }))
          };
          Qr(), hr = Qr, window.addEventListener("resize", Wr);
          const ar = (0, fr.k)(Qr),
            jr = new ResizeObserver(Qr);
          return jr.observe(Sr), () => {
            jr.disconnect(), ar(), window.removeEventListener("resize", Wr), cancelAnimationFrame(Zr), hr = null, zr = null, Yr = []
          }
        }), []), (0, Zr.useEffect)((() => {
          const rr = (0, ar.e)("turnSoundCues", vr),
            Sr = (0, Ir.e)(Br);
          return () => {
            Sr(), rr(), tr.forEach(yr), Nr.clear()
          }
        }), []), (0, xr.jsx)("div", {
          ref: rr,
          className: "SoundDirections",
          children: tr.map(((rr, Sr) => (0, xr.jsx)("div", {
            ref: Sr => {
              rr.Vk = Sr
            },
            className: "SoundCue SoundCueIdle"
          }, Sr)))
        })
      })),
      Lr = (0, Zr.memo)((function() {
        const {
          clientEscMenuOptions: rr
        } = (0, Wr.n)(["clientEscMenuOptions"]);
        return rr.showSoundDirections ? (0, xr.jsxs)(xr.Fragment, {
          children: [(0, xr.jsx)(Or, {}), (0, xr.jsx)(lr, {})]
        }) : null
      })),
      lr = (0, Zr.memo)((function() {
        const [rr, Sr] = (0, Zr.useState)((() => {
          var rr;
          return null === (rr = Er.gameBridge.latest("localPlayerAlive")) || void 0 === rr || rr
        }));
        return (0, pr.d)("localPlayerAliveSet", Sr), (0, fr.h)(!rr), null
      }))
  },
  38056: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => fr,
      h: () => Ir,
      k: () => Er
    });
    var Zr = Qr(72);
    const Wr = new Set,
      ar = new Set;

    function jr() {
      for (const rr of ar) rr()
    }

    function Ir(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      (0, Zr.useEffect)((() => rr ? function() {
        const rr = {
          element: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
        };
        return Wr.add(rr), jr(), () => {
          Wr.delete(rr) && jr()
        }
      }(Sr) : void 0), [rr, Sr]), (0, Zr.useEffect)((() => {
        rr && jr()
      }), [rr, Qr])
    }

    function fr() {
      const rr = [];
      for (const {
          element: Qr
        }
        of Wr) {
        var Sr;
        if (null === Qr) return {
          anywhere: !0,
          boxes: []
        };
        const Zr = null === (Sr = Qr.current) || void 0 === Sr ? void 0 : Sr.getBoundingClientRect();
        Zr && Zr.width > 0 && rr.push(Zr)
      }
      return {
        anywhere: !1,
        boxes: rr
      }
    }

    function Er(rr) {
      return ar.add(rr), () => {
        ar.delete(rr)
      }
    }
  },
  38031: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Wr,
      f: () => ar
    });
    let Zr = !1;

    function Wr() {
      return Zr
    }

    function ar(rr) {
      return Zr !== rr && (Zr = rr, !0)
    }
  },
  42533: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      startPadGameplay: () => Kr
    });
    Qr(42398);
    var Zr = Qr(42404),
      Wr = Qr(2484),
      ar = Qr(26),
      jr = Qr(40635),
      Ir = Qr(2364),
      fr = Qr(40662),
      Er = Qr(34),
      pr = Qr(2383),
      xr = Qr(39926),
      mr = Qr(9971),
      Nr = Qr(42412);
    const Ur = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var tr = Qr(42429),
      hr = Qr(9946),
      zr = Qr(40670);
    const Yr = rr => rr.padSneakToggled || !!ar.c.get("clientEscMenuOptions").crouchIsToggle && rr.crouchToggled,
      nr = () => {
        const rr = (() => {
          const rr = (0, mr.b)();
          let Sr = Ur;
          const Qr = new Nr.c;
          let Zr = !1,
            Wr = 0;
          const ar = () => {
            const Qr = performance.now(),
              ar = 0 === Wr ? 0 : Qr - Wr;
            if (Wr = Qr, !Zr) return rr.discardPending(), null;
            const jr = (0, Nr.m)(Sr, ar),
              Ir = rr.drainLookDelta(),
              fr = (0, xr.h)();
            return {
              xR: (jr.xR + Ir.xR) * fr,
              yR: (jr.yR + Ir.yR) * fr
            }
          };
          return {
            update: (rr, Wr, jr, Ir) => {
              rr.camera.eD !== ar && (rr.camera.eD = ar), Zr = !0, Sr = (0, Nr.q)(Qr, Wr, jr, Ir, performance.now())
            },
            release: () => {
              Zr = !1, Sr = Ur, Qr.reset()
            },
            uninstall: rr => {
              rr.camera.eD === ar && (rr.camera.eD = null)
            }
          }
        })();
        return {
          update: (Sr, Qr, Zr) => {
            rr.update((0, pr.e)(), Sr, Qr, Zr)
          },
          release: rr.release,
          uninstall: () => {
            const Sr = (0, pr.e)();
            Sr && rr.uninstall(Sr)
          }
        }
      };
    var er = Qr(42424);
    Qr(39198), Qr(9837);
    Qr(9859).c;
    const Kr = () => {
      const rr = (0, er.c)((() => {
          const rr = {
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
            bodies: () => (0, jr.b)(),
            look: nr(),
            move: (Sr, Qr) => {
              const Zr = (0, pr.e)(),
                Wr = Zr.YB.gQr();
              if (rr.x = Sr.x, rr.y = Sr.y, rr.magnitude = Sr.magnitude, rr.headingOffset = Sr.headingOffset, rr.jumpHeld = Sr.jumpHeld, Sr.jumpPressed && (rr.jumpPressedSinceTick = !0), rr.running = Sr.running, rr.sprintHeld = Sr.sprintHeld, Qr) {
                const Sr = (0, tr.c)({
                  ...Qr,
                  descending: Zr.YB.ASr(Zr.fC).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!Zr.NK.canCrouch,
                  toggled: Yr(Wr)
                });
                rr.crouchHeld = Sr.crouchHeld, Wr.padSneakToggled = Sr.toggled, Wr.crouchToggled = !1, (0, hr.d)(Sr.toggled)
              }
              Wr.gamepad = rr
            },
            stopMoving: () => {
              var Sr;
              Object.assign(rr, {
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
              const Qr = null === (Sr = (0, pr.e)()) || void 0 === Sr ? void 0 : Sr.YB.gQr();
              (null === Qr || void 0 === Qr ? void 0 : Qr.gamepad) === rr && (Qr.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: rr => {
              const Sr = (0, pr.e)(),
                Qr = null === Sr || void 0 === Sr ? void 0 : Sr.YB.gQr();
              "touch" === rr ? ((0, hr.d)(!1), null !== Qr && void 0 !== Qr && Qr.padSneakToggled && (Qr.padSneakToggled = !1, Qr.isTouchscreen && !Qr.gamepad && Sr.YB.jQr(Sr.fC).setCrouching(!!Sr.NK.canCrouch && Qr.touchCrouch))) : "gamepad" === rr && Qr && (0, hr.d)(Yr(Qr))
            },
            hasPlayer: () => {
              var rr;
              return !(null === (rr = (0, pr.e)()) || void 0 === rr || !rr.fC)
            },
            isPlayerDead: () => {
              var rr;
              const Sr = (0, pr.e)();
              return !1 === (null === (rr = Sr.YB.LQr(Sr.fC)) || void 0 === rr ? void 0 : rr.isAlive)
            },
            isReplayMode: () => {
              var rr, Sr;
              return !(null === (rr = (0, pr.c)()) || void 0 === rr || null === (Sr = rr.client) || void 0 === Sr || !Sr.isReplayMode())
            },
            isFreeCameraOn: () => {
              var rr, Sr, Qr;
              return !(null === (rr = (0, pr.c)()) || void 0 === rr || null === (Sr = rr.client) || void 0 === Sr || null === (Qr = Sr.freeCameraController) || void 0 === Qr || !Qr.isEnabled())
            },
            targetsBlock: () => !!(0, pr.e)().xSr,
            selectedSlotEmpty: () => {
              var rr;
              const Sr = (0, pr.e)();
              return !(null !== (rr = Sr.YB.fQr(Sr.fC)) && void 0 !== rr && rr.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const rr = (0, pr.e)().NK;
              return !!rr.creative && !!rr.canPickBlocks
            },
            zoomAllowed: () => !!(0, pr.e)().NK.canUseZoomKey,
            scrollHotbar: rr => {
              Er.i.Jp("ScrollInventorySlot", rr)
            },
            hasFullInventory: () => (0, fr.b)((0, pr.e)()),
            hasLobbyTab: () => (0, zr.c)((0, pr.e)().NK),
            contextActionInputs: () => {
              var rr, Sr, Qr, Zr;
              const Wr = (0, pr.e)();
              return {
                holdingGun: !(null === (rr = Wr.YB.lQr(Wr.fC)) || void 0 === rr || null === (Sr = rr.jB) || void 0 === Sr || !Sr.isGun()),
                customButtons: null !== (Qr = Wr.NK.customButtons) && void 0 !== Qr ? Qr : null,
                touchscreenActionButton: null !== (Zr = Wr.NK.touchscreenActionButton) && void 0 !== Zr ? Zr : null
              }
            },
            pressTouchButton: rr => {
              (0, Ir.sendColyMessage)(Wr.Xj, rr)
            }
          }
        })()),
        Sr = (0, Zr.c)(),
        Qr = null,
        ar = null;
      return () => {
        rr(), Sr(), null === Qr || void 0 === Qr || Qr(), null === ar || void 0 === ar || ar()
      }
    }
  },
  38207: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr,
      f: () => mr,
      i: () => xr,
      j: () => jr,
      l: () => Ur,
      n: () => fr,
      p: () => tr,
      q: () => Er,
      r: () => Ir,
      v: () => pr
    });
    const Zr = Math.PI / 2 - .001,
      Wr = 2 * Math.PI,
      ar = 1e-9;

    function jr(rr, Sr) {
      Sr.heading = rr.heading, Sr.pitch = rr.pitch
    }

    function Ir(rr, Sr) {
      const Qr = Sr - rr;
      return Qr - Wr * Math.floor((Qr + Math.PI) / Wr)
    }

    function fr(rr, Sr, Qr) {
      return rr + Ir(rr, Sr) * Qr
    }

    function Er(rr) {
      if (!Number.isFinite(rr)) return rr;
      const Sr = rr - Wr * Math.floor(rr / Wr);
      return Sr < Wr ? Sr : 0
    }

    function pr(rr, Sr) {
      return rr + Ir(rr, Sr)
    }

    function xr(rr) {
      return Math.max(-Zr, Math.min(Zr, rr))
    }

    function mr(rr, Sr, Qr) {
      const Zr = Math.cos(Sr);
      return Qr[0] = Zr * Math.sin(rr), Qr[1] = -Math.sin(Sr), Qr[2] = Zr * Math.cos(rr), Qr
    }

    function Nr(rr, Sr, Qr, Zr) {
      const Wr = Math.sqrt(rr * rr + Qr * Qr);
      return Wr < ar && Math.abs(Sr) < ar || (Wr >= ar && (Zr.heading = Math.atan2(rr, Qr)), Zr.pitch = xr(Math.atan2(-Sr, Wr) + 0)), Zr
    }

    function Ur(rr, Sr) {
      return Nr(rr[0], rr[1], rr[2], Sr)
    }

    function tr(rr, Sr, Qr) {
      return Nr(Sr[0] - rr[0], Sr[1] - rr[1], Sr[2] - rr[2], Qr)
    }
  },
  38026: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => fr
    });
    var Zr = Qr(360),
      Wr = Qr(26),
      ar = Qr(38031),
      jr = Qr(1758),
      Ir = Qr(2135);

    function fr(rr, Sr) {
      var Qr, fr, Er;
      if (!Wr.c.get("isKeydownEnabled") || rr.repeat) return;
      const pr = rr.code;
      "Escape" === rr.key ? (0, jr.g)(rr) : null !== (Qr = Ir.q.OpenSettings) && void 0 !== Qr && Qr.includes(pr) ? (0, jr.s)(rr, Zr.q.SETTINGS) : null !== (fr = Ir.q.OpenCharacterCustomization) && void 0 !== fr && fr.includes(pr) ? (0, ar.e)() || (0, jr.s)(rr, Zr.q.CUSTOMISATION, Sr()) : null !== (Er = Ir.q.ShowDebugOverlay) && void 0 !== Er && Er.includes(pr) && Wr.c.set({
        showDebugOverlay: !Wr.c.get("showDebugOverlay")
      })
    }
  },
  38001: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => mr,
      h: () => pr,
      l: () => Nr,
      o: () => xr
    });
    var Zr = Qr(379),
      Wr = Qr(723),
      ar = Qr(731),
      jr = Qr(43);
    const Ir = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      fr = "playSessionGameNameWithVariation",
      Er = "wasMatchmakePlayer";

    function pr() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jr.n;
      (0, ar.h)(rr, Ir)
    }

    function xr() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jr.n).setItem(Er, !0)
    }

    function mr() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jr.n;
      return (0, ar.d)(rr, Ir)
    }

    function Nr(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jr.n;
      const Qr = (0, ar.d)(Sr, Ir),
        pr = function(rr) {
          const Sr = rr.getItem(fr);
          return "string" !== typeof Sr ? null : Sr
        }(Sr),
        xr = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jr.n).getItem(Er)
        }(Sr);
      let mr;
      return mr = null !== Qr && null !== pr && (0, ar.e)(Sr, Ir) && function(rr, Sr, Qr) {
          const Wr = (0, Zr.Mb)(rr),
            ar = (0, Zr.Mb)(Sr),
            jr = (0, Zr.Hb)(rr),
            Ir = (0, Zr.Hb)(Sr);
          return !(Wr !== ar || !Qr) || Wr === ar && jr === Ir
        }(pr, rr, xr) ? Qr : (0, Wr.f)(), (0, ar.l)(Sr, Ir, mr), Sr.setItem(fr, rr),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jr.n).removeItem(Er)
        }(Sr), mr
    }
  },
  37992: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Kr,
      f: () => yr
    });
    var Zr = Qr(1127),
      Wr = Qr(215),
      ar = Qr(374),
      jr = Qr(692),
      Ir = Qr(379),
      fr = Qr(1131),
      Er = Qr(712),
      pr = Qr(750),
      xr = Qr(5287),
      mr = Qr(109),
      Nr = Qr(139),
      Ur = Qr(1885),
      tr = Qr(124),
      hr = Qr(38001),
      zr = Qr(43),
      Yr = Qr(727),
      nr = Qr(696),
      er = Qr(38006);

    function Kr() {
      var rr, Sr;
      return [...null !== (rr = navigator.languages) && void 0 !== rr ? rr : [null !== (Sr = navigator.language) && void 0 !== Sr ? Sr : "none"], "EN-gb"]
    }

    function yr(rr, Sr, Qr, yr, Br) {
      const Tr = (0, Zr.l)(Sr) ? (0, Zr.q)(Sr) : null,
        vr = rr.isLoggedIn() && void 0 !== (0, Wr.b)(ar.n, Nr.siteUsed) ? (0, nr.e)() : null,
        Or = {
          cookies: (0, Ur.getAllCookiesForGameNameWithVariation)(Sr),
          isMobile: (0, mr.isMobile)(),
          isUsingCustomGameTexturePack: null !== Tr && Br(Tr),
          generalCookies: {
            joinDiscord: !!zr.j.getItem("DiscordPressed"),
            newGo: xr.e,
            ...rr.getMetricsCookies(),
            trafficCode: yr,
            compliance: mr.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, mr.getBrowserName)(),
            version: (0, mr.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, mr.getPlatformType)(),
            deviceType: (0, tr.b)()
          },
          isLoggedIn: rr.isLoggedIn(),
          lobbyName: Qr,
          languages: Kr(),
          version: jr.e,
          siteUsed: Nr.siteUsed,
          subsiteUsed: Nr.subsiteUsed,
          playSessionId: (0, hr.l)(Sr),
          visitSessionId: (0, Yr.getVisitSessionId)(),
          clientReason: Er.B.reason,
          budgetBasis: (0, er.j)(),
          ...null !== pr.q && {
            diagClaim: pr.q.claimId
          },
          ...null !== vr && {
            webGpuLoss: vr
          }
        };
      return null !== Tr && (0, Ir.Ac)(Tr) ? (Or.lobbyName = (0, Zr.i)(Tr, (0, Zr.m)(Sr), Qr), {
        roomName: `classic_${fr.h}`,
        joinOptions: Or
      }) : {
        roomName: Sr,
        joinOptions: Or
      }
    }
  },
  5767: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => ar,
      h: () => mr,
      l: () => fr,
      o: () => Ur,
      q: () => Er,
      t: () => Nr
    });
    var Zr = Qr(5774),
      Wr = Qr(5779);
    const ar = !1,
      jr = Zr.i.map((rr => {
        const Sr = [];
        for (let ar = 1; ar <= rr.reach; ar++) Sr.push(Wr.j[(0, Zr.e)(rr.source, ar)].id);
        const Qr = "water" === rr.family;
        return Object.freeze({
          name: rr.kind,
          family: rr.family,
          reach: rr.reach,
          stepTicks: Qr ? 5 : 10,
          slopeDistance: Qr ? 4 : 2,
          sourceId: Wr.j[rr.source].id,
          fallingId: Wr.j[(0, Zr.b)(rr.source)].id,
          flowingIds: Object.freeze(Sr),
          makesSources: Qr,
          stillId: Wr.j[rr.still].id
        })
      })),
      Ir = new Map;
    for (const tr of jr) Ir.set(tr.sourceId, Object.freeze({
      kind: tr,
      state: "source",
      distance: 0
    })), Ir.set(tr.fallingId, Object.freeze({
      kind: tr,
      state: "falling",
      distance: 0
    })), tr.flowingIds.forEach(((rr, Sr) => {
      Ir.set(rr, Object.freeze({
        kind: tr,
        state: "flowing",
        distance: Sr + 1
      }))
    }));

    function fr(rr) {
      return jr.find((Sr => Sr.name === rr))
    }

    function Er(rr) {
      return null === rr ? void 0 : Ir.get(rr)
    }
    const pr = new Uint8Array(65536);
    for (const [tr, hr] of Ir) pr[tr] = "source" === hr.state ? 1 : 2;
    const xr = new Map;
    for (const tr of jr) xr.set(tr.stillId, tr.family);

    function mr(rr) {
      var Sr, Qr;
      return null !== (Sr = null === (Qr = Er(rr)) || void 0 === Qr ? void 0 : Qr.kind.family) && void 0 !== Sr ? Sr : Nr(rr)
    }

    function Nr(rr) {
      var Sr;
      return null === rr ? null : null !== (Sr = xr.get(rr)) && void 0 !== Sr ? Sr : null
    }
    Wr.j.Obsidian.id, Wr.j["Messy Stone"].id;

    function Ur() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
        let rr = 0;
        for (const Sr of jr) rr = Math.max(rr, Sr.stillId, Sr.sourceId, Sr.fallingId, ...Sr.flowingIds);
        return rr
      }() + 1;
      const Sr = new Uint8Array(rr);
      for (const Qr of jr) {
        const Zr = ("water" === Qr.family ? 1 : 2) << 4;
        for (const Wr of [Qr.stillId, Qr.sourceId, Qr.fallingId, ...Qr.flowingIds]) Wr < rr && (Sr[Wr] = Zr)
      }
      return Sr
    }
  },
  40556: (rr, Sr, Qr) => {
    function Zr(rr, Sr, Qr, Zr, Wr) {
      var ar = {};
      return Object.keys(Zr).forEach((function(rr) {
        ar[rr] = Zr[rr]
      })), ar.enumerable = !!ar.enumerable, ar.configurable = !!ar.configurable, ("value" in ar || ar.initializer) && (ar.writable = !0), ar = Qr.slice().reverse().reduce((function(Qr, Zr) {
        return Zr(rr, Sr, Qr) || Qr
      }), ar), Wr && void 0 !== ar.initializer && (ar.value = ar.initializer ? ar.initializer.call(Wr) : void 0, ar.initializer = void 0), void 0 === ar.initializer && (Object.defineProperty(rr, Sr, ar), ar = null), ar
    }
    Qr.d(Sr, {
      c: () => Zr
    })
  },
  40552: (rr, Sr, Qr) => {
    function Zr(rr, Sr, Qr, Zr) {
      Qr && Object.defineProperty(rr, Sr, {
        enumerable: Qr.enumerable,
        configurable: Qr.configurable,
        writable: Qr.writable,
        value: Qr.initializer ? Qr.initializer.call(Zr) : void 0
      })
    }
    Qr.d(Sr, {
      c: () => Zr
    })
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);