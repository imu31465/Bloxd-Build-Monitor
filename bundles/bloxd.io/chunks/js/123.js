export const id = 123;
export const ids = [123];
export const modules = {
  40433: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => gb,
      f: () => pb
    });
    var eb = Mb(2919);
    let Hb = null;

    function pb(bb) {
      return null !== Hb && bb === Hb
    }

    function Vb() {
      this.qT = !1, this.stopPropagation = !1, this.aT = !1, this.disabled = !1
    }
    class gb {
      constructor(bb, wb) {
        this.version = "0.7.0";
        var Mb = Object.assign({}, new Vb, wb || {});
        this.element = bb || document, this.qT = !!Mb.qT, this.stopPropagation = !!Mb.stopPropagation, this.aT = !!Mb.aT, this.disabled = !!Mb.disabled, this.filterEvents = (bb, wb) => !0, this.ignoreEvent = bb => !1, this.down = new eb.EventEmitter, this.up = new eb.EventEmitter, this.state = {}, this.Hk = {
          dx: 0,
          dy: 0,
          XMb: 0,
          xMb: 0,
          jMb: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? Lb(this) : document.addEventListener("DOMContentLoaded", (bb => {
          Lb(this)
        }), {
          once: !0
        })
      }
      bind(bb) {
        for (var wb = arguments.length, Mb = new Array(wb > 1 ? wb - 1 : 0), eb = 1; eb < wb; eb++) Mb[eb - 1] = arguments[eb];
        Mb.forEach((wb => {
          var Mb = this._keyBindmap[wb] || [];
          Mb.includes(bb) || (Mb.push(bb), this._keyBindmap[wb] = Mb)
        })), this.state[bb] = !!this.state[bb], this.pressCount[bb] = this.pressCount[bb] || 0, this.releaseCount[bb] = this.releaseCount[bb] || 0
      }
      unbind(bb) {
        for (var wb in this._keyBindmap) {
          var Mb = this._keyBindmap[wb],
            eb = Mb.indexOf(bb);
          eb > -1 && Mb.splice(eb, 1)
        }
      }
      getBindings() {
        var bb = {};
        for (var wb in this._keyBindmap) {
          this._keyBindmap[wb].forEach((Mb => {
            bb[Mb] = bb[Mb] || [], bb[Mb].push(wb)
          }))
        }
        return bb
      }
      sO() {
        lb(this.Hk), lb(this.pressCount), lb(this.releaseCount)
      }
    }

    function lb(bb) {
      for (var wb in bb) bb[wb] = 0
    }

    function Lb(bb) {
      window.addEventListener("keydown", Fb.bind(null, bb, !0), !1), window.addEventListener("keyup", Fb.bind(null, bb, !1), !1);
      var wb = {
        passive: !0
      };
      bb.element.addEventListener("touchstart", tb.bind(void 0, bb), {
        passive: !1
      }), bb.element.addEventListener("touchend", Eb.bind(void 0, bb), wb), bb.element.addEventListener("mousedown", Bb.bind(null, bb, !0), wb), window.document.addEventListener("mouseup", Bb.bind(null, bb, !1), wb), bb.element.addEventListener("touchmove", sb.bind(null, bb), wb), bb.element.addEventListener("mousemove", sb.bind(null, bb), wb), window.PointerEvent, bb.element.addEventListener("wheel", mb.bind(null, bb), wb), bb.element.addEventListener("contextmenu", hb.bind(null, bb), !1), window.addEventListener("blur", xb.bind(null, bb), !1)
    }
    var Ib = 0,
      Ob = 0,
      Ub = null;

    function tb(bb, wb) {
      wb.preventDefault(), Cb(wb)
    }

    function Cb(bb) {
      let wb = !1;
      for (let Mb = 0; Mb < bb.touches.length; ++Mb)
        if (bb.touches[Mb].identifier === Ub) {
          wb = !0;
          break
        } if (!wb) {
        const wb = bb.changedTouches[0];
        Ib = wb.clientX, Ob = wb.clientY, Ub = wb.identifier
      }
    }

    function Eb(bb, wb) {
      for (var Mb = wb.changedTouches, eb = 0; eb < Mb.length; ++eb) Mb[eb].identifier === Ub && (Ub = null)
    }

    function Fb(bb, wb, Mb) {
      if (!bb.ignoreEvent(Mb)) try {
        jb(bb, Mb), wb && Mb.isTrusted && !Mb.repeat && bb._keyStates[Mb.code] && Kb(bb, Mb.code)
      } finally {
        rb(Mb.code, wb, bb, Mb)
      }
    }

    function Bb(bb, wb, Mb) {
      if (!bb.ignoreEvent(Mb)) try {
        jb(bb, Mb)
      } finally {
        ! function(bb, wb, Mb) {
          if ("pointerId" in Mb)
            if (wb) {
              if (null !== bb._touches.currID) return;
              bb._touches.currID = Mb.pointerId
            } else {
              if (bb._touches.currID !== Mb.pointerId) return;
              bb._touches.currID = null
            } var eb = "button" in Mb ? Mb.button + 1 : 1;
          rb("Mouse" + eb, wb, bb, Mb)
        }(bb, wb, Mb)
      }
    }

    function sb(bb, wb) {
      var Mb = wb.movementX || wb.mozMovementX || 0,
        eb = wb.movementY || wb.mozMovementY || 0;
      if (wb.touches && 0 === (Mb | eb)) {
        var Hb = function(bb) {
          Cb(bb);
          for (let wb = 0; wb < bb.changedTouches.length; ++wb)
            if (bb.changedTouches[wb].identifier == Ub) {
              const Mb = bb.changedTouches[wb],
                eb = [Mb.clientX - Ib, Mb.clientY - Ob];
              return Ib = Mb.clientX, Ob = Mb.clientY, eb
            } return console.error(`Did not find touch id ${Ub}`), [0, 0]
        }(wb);
        Mb = Hb[0], eb = Hb[1]
      }
      bb.Hk.dx += Mb, bb.Hk.dy += eb
    }

    function mb(bb, wb) {
      jb(bb, wb);
      var Mb = 1;
      switch (wb.deltaMode) {
        case 0:
          Mb = 1;
          break;
        case 1:
          Mb = 12;
          break;
        case 2:
          Mb = bb.element.clientHeight || window.innerHeight
      }
      bb.Hk.XMb += (wb.deltaX || 0) * Mb, bb.Hk.xMb += (wb.deltaY || 0) * Mb, bb.Hk.jMb += (wb.deltaZ || 0) * Mb
    }

    function hb(bb, wb) {
      if (!bb.aT) return wb.preventDefault(), !1
    }
    var zb = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function Xb(bb, wb) {
      return !!bb[zb[wb]] || ("AltRight" === wb || "ControlLeft" === wb) && "function" === typeof bb.getModifierState && !0 === bb.getModifierState("AltGraph")
    }

    function xb(bb, wb) {
      for (var Mb in bb._modifiersHeldThroughBlur = {}, zb) bb._keyStates[Mb] && (bb._modifiersHeldThroughBlur[Mb] = !0);
      wb && wb.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (bb) {
          return !0
        }
      }() && (clearTimeout(bb._blurRelease), bb._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var wb in bb._modifiersHeldThroughBlur = {}, bb._keyStates) bb._keyStates[wb] && !/^Mouse\d/.test(wb) && Kb(bb, wb)
      }), 0))
    }

    function jb(bb, wb) {
      var Mb = bb._modifiersHeldThroughBlur;
      if (Mb && wb.isTrusted && document.hasFocus())
        for (var eb in Mb) delete Mb[eb], bb._keyStates[eb] && eb !== wb.code && (Xb(wb, eb) || Kb(bb, eb))
    }

    function Kb(bb, wb) {
      const Mb = {
          code: wb,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        eb = Hb;
      Hb = Mb;
      try {
        rb(wb, !1, bb, Mb)
      } finally {
        Hb = eb
      }
    }

    function rb(bb, wb, Mb, eb) {
      var Hb = Mb._keyBindmap[bb];
      Hb && (Rb(Mb._keyStates[bb], wb) && (Mb._keyStates[bb] = wb, Hb.forEach((bb => {
        (!Mb.filterEvents || Mb.filterEvents(eb, bb)) && function(bb, wb, Mb, eb) {
          var Hb = wb ? Mb.pressCount : Mb.releaseCount;
          Hb[bb] = (Hb[bb] || 0) + 1;
          var pb = Mb._bindPressCount[bb] || 0;
          (pb += wb ? 1 : -1) < 0 && (pb = 0);
          Mb._bindPressCount[bb] = pb;
          var Vb = Mb.state[bb];
          if (Rb(Vb, pb)) {
            Mb.state[bb] = pb > 0;
            var gb = wb ? Mb.down : Mb.up;
            Mb.disabled || gb.emit(bb, eb)
          }
        }(bb, wb, Mb, eb)
      }))), "button" in eb || (Mb.qT && !eb.defaultPrevented && eb.preventDefault(), Mb.stopPropagation && eb.stopPropagation()))
    }

    function Rb(bb, wb) {
      return bb ? !wb : wb
    }
  },
  37938: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Eb,
      f: () => Fb
    });
    var eb = Mb(64),
      Hb = Mb(1611),
      pb = Mb(2183),
      Vb = Mb(37936),
      gb = Mb(661),
      lb = Mb(1159),
      Lb = Mb.n(lb),
      Ib = Mb(1364);
    const Ob = [Ub()];

    function Ub() {
      return {
        source: null,
        direction: null,
        xG: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function tb(bb) {
      return Ob.find((wb => null !== wb.source && wb.source === bb))
    }

    function Cb(bb) {
      clearTimeout(bb.timeout), bb.source = null, bb.direction = null, bb.writtenAngle = null, bb.xG && (bb.xG.style.rotate = "")
    }
    const Eb = (0, eb.memo)((function() {
      const [, bb] = (0, eb.useReducer)((bb => bb + 1), 0);
      return (0, Hb.e)("damagedByOtherPlayer", (wb => {
        let {
          xH: Mb,
          direction: eb
        } = wb;
        const Hb = Mb || "nonDirectional",
          pb = function(bb) {
            var wb;
            const Mb = null !== (wb = tb(bb)) && void 0 !== wb ? wb : Ob.find((bb => null === bb.source));
            if (Mb) return Mb;
            const eb = {
              source: null,
              direction: null,
              xG: null,
              timeout: void 0,
              writtenAngle: null
            };
            return Ob.push(eb), eb
          }(Hb);
        clearTimeout(pb.timeout), pb.source = Hb, pb.direction = eb, pb.timeout = setTimeout((() => {
          Cb(pb), bb()
        }), 800), bb()
      })), (0, pb.b)("kill", (wb => {
        let {
          killer: Mb,
          victim: eb
        } = wb;
        const Hb = Mb.local && tb(eb.id);
        Hb && (Cb(Hb), bb())
      })), (0, eb.useEffect)((() => {
        const bb = (0, Vb.e)("turnDamageIndicators", Fb);
        return () => {
          bb(), Ob.forEach(Cb)
        }
      }), []), (0, Ib.jsx)("div", {
        className: "DirectionalDamage",
        children: Ob.map(((bb, wb) => (0, Ib.jsx)("div", {
          ref: wb => {
            bb.xG = wb
          },
          className: Lb()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, gb.K)(bb.direction),
            DamageIndicatorIdle: null === bb.source
          })
        }, wb)))
      })
    }));

    function Fb(bb) {
      for (const wb of Ob) {
        if (null === wb.source || (0, gb.K)(wb.direction)) continue;
        const Mb = wb.direction - bb;
        Mb !== wb.writtenAngle && (wb.writtenAngle = Mb, wb.xG.style.rotate = `${Mb}rad`)
      }
    }
  },
  37943: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Rb,
      h: () => Kb
    });
    var eb = Mb(64),
      Hb = Mb(26),
      pb = Mb(37936),
      Vb = Mb(37947),
      gb = Mb(37687),
      lb = Mb(37797),
      Lb = Mb(2142),
      Ib = Mb(2183),
      Ob = Mb(1364);
    const Ub = 20 * Math.PI / 180,
      tb = new Map,
      Cb = 25 * Math.PI / 180,
      Eb = Array.from({
        length: 6
      }, (() => ({
        kind: null,
        direction: 0,
        shownAt: 0,
        xG: null,
        fade: null,
        timeout: void 0,
        writtenAngle: null,
        away: !1
      })));
    let Fb = null,
      Bb = null,
      sb = [];
    const mb = 2;

    function hb(bb) {
      const wb = "combat" === bb.kind || "explosion" === bb.kind,
        Mb = null !== Bb && null !== bb.writtenAngle && function(bb, wb, Mb, eb) {
          const Hb = wb.width / 3.8,
            pb = (eb ? .7 : .35) * Hb + 1,
            Vb = (eb ? .175 : .1) * Hb + 1,
            gb = wb.width / 2 - Vb,
            lb = Math.sin(bb),
            Lb = Math.cos(bb),
            Ib = wb.left + wb.width / 2 + lb * gb,
            Ob = wb.top + wb.height / 2 - Lb * gb,
            Ub = Math.abs(Lb) * pb + Math.abs(lb) * Vb,
            tb = Math.abs(lb) * pb + Math.abs(Lb) * Vb;
          return Mb.some((bb => Ib + Ub > bb.left - mb && Ib - Ub < bb.right + mb && Ob + tb > bb.top - mb && Ob - tb < bb.bottom + mb))
        }(bb.writtenAngle, Bb, sb, wb);
      Mb !== bb.away && bb.xG && (bb.away = Mb, bb.xG.classList.toggle("SoundCueAway", Mb))
    }
    let zb = 0;

    function Xb(bb) {
      var wb;
      clearTimeout(bb.timeout), null === (wb = bb.fade) || void 0 === wb || wb.cancel(), bb.fade = null, bb.kind = null, bb.writtenAngle = null, bb.away = !1, bb.xG && (bb.xG.className = "SoundCue SoundCueIdle", bb.xG.style.rotate = "")
    }

    function xb(bb, wb) {
      var Mb, eb, Hb;
      const pb = performance.now();
      if (Math.abs((0, Vb.v)(zb, wb)) < Ub || pb - (null !== (Mb = tb.get(bb)) && void 0 !== Mb ? Mb : -1 / 0) < 250) return;
      tb.set(bb, pb), null === (eb = Fb) || void 0 === eb || eb();
      const gb = function(bb, wb) {
          const Mb = Eb.find((Mb => Mb.kind === bb && Math.abs((0, Vb.v)(Mb.direction, wb)) < Cb));
          if (Mb) return Mb;
          return Eb.find((bb => null === bb.kind)) || Eb.reduce(((bb, wb) => wb.shownAt < bb.shownAt ? wb : bb))
        }(bb, wb),
        lb = gb.xG;
      lb && (clearTimeout(gb.timeout), null === (Hb = gb.fade) || void 0 === Hb || Hb.cancel(), gb.kind = bb, gb.direction = wb, gb.shownAt = pb, lb.className = `SoundCue SoundCue-${bb}`, gb.away = !1, jb(gb, zb), hb(gb), gb.fade = lb.animate([{
        opacity: 1
      }, {
        opacity: 1,
        offset: .5
      }, {
        opacity: 0
      }], {
        duration: 1200,
        fill: "forwards"
      }), gb.timeout = setTimeout((() => {
        Xb(gb)
      }), 1200))
    }

    function jb(bb, wb) {
      const Mb = bb.direction - wb;
      Mb !== bb.writtenAngle && bb.xG && (bb.writtenAngle = Mb, bb.xG.style.rotate = `${Mb}rad`, hb(bb))
    }

    function Kb(bb) {
      zb = bb;
      for (const wb of Eb) null !== wb.kind && jb(wb, bb)
    }
    const rb = (0, eb.memo)((function() {
        const bb = (0, eb.useRef)(null);
        return (0, eb.useEffect)((() => {
          const wb = bb.current,
            Mb = () => {
              const {
                anywhere: bb,
                boxes: Mb
              } = (0, lb.b)();
              wb.classList.toggle("SoundDirectionsHidden", bb), Bb = wb.getBoundingClientRect(), sb = Mb;
              for (const wb of Eb) hb(wb)
            };
          let eb = 0;
          const Hb = () => {
            cancelAnimationFrame(eb), eb = requestAnimationFrame((() => {
              eb = requestAnimationFrame(Mb)
            }))
          };
          Mb(), Fb = Mb, window.addEventListener("resize", Hb);
          const pb = (0, lb.i)(Mb),
            Vb = new ResizeObserver(Mb);
          return Vb.observe(wb), () => {
            Vb.disconnect(), pb(), window.removeEventListener("resize", Hb), cancelAnimationFrame(eb), Fb = null, Bb = null, sb = []
          }
        }), []), (0, eb.useEffect)((() => {
          const bb = (0, pb.e)("turnSoundCues", Kb),
            wb = (0, gb.b)(xb);
          return () => {
            wb(), bb(), Eb.forEach(Xb), tb.clear()
          }
        }), []), (0, Ob.jsx)("div", {
          ref: bb,
          className: "SoundDirections",
          children: Eb.map(((bb, wb) => (0, Ob.jsx)("div", {
            ref: wb => {
              bb.xG = wb
            },
            className: "SoundCue SoundCueIdle"
          }, wb)))
        })
      })),
      Rb = (0, eb.memo)((function() {
        const {
          clientEscMenuOptions: bb
        } = (0, Hb.o)(["clientEscMenuOptions"]);
        return bb.showSoundDirections ? (0, Ob.jsxs)(Ob.Fragment, {
          children: [(0, Ob.jsx)(rb, {}), (0, Ob.jsx)(Db, {})]
        }) : null
      })),
      Db = (0, eb.memo)((function() {
        const [bb, wb] = (0, eb.useState)((() => {
          var bb;
          return null === (bb = Lb.gameBridge.latest("localPlayerAlive")) || void 0 === bb || bb
        }));
        return (0, Ib.b)("localPlayerAliveSet", wb), (0, lb.f)(!bb), null
      }))
  },
  37797: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => lb,
      f: () => gb,
      i: () => Lb
    });
    var eb = Mb(64);
    const Hb = new Set,
      pb = new Set;

    function Vb() {
      for (const bb of pb) bb()
    }

    function gb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      (0, eb.useEffect)((() => bb ? function() {
        const bb = {
          element: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
        };
        return Hb.add(bb), Vb(), () => {
          Hb.delete(bb) && Vb()
        }
      }(wb) : void 0), [bb, wb]), (0, eb.useEffect)((() => {
        bb && Vb()
      }), [bb, Mb])
    }

    function lb() {
      const bb = [];
      for (const {
          element: Mb
        }
        of Hb) {
        var wb;
        if (null === Mb) return {
          anywhere: !0,
          boxes: []
        };
        const eb = null === (wb = Mb.current) || void 0 === wb ? void 0 : wb.getBoundingClientRect();
        eb && eb.width > 0 && bb.push(eb)
      }
      return {
        anywhere: !1,
        boxes: bb
      }
    }

    function Lb(bb) {
      return pb.add(bb), () => {
        pb.delete(bb)
      }
    }
  },
  37781: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Hb,
      f: () => pb
    });
    let eb = !1;

    function Hb() {
      return eb
    }

    function pb(bb) {
      return eb !== bb && (eb = bb, !0)
    }
  },
  42339: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      startPadGameplay: () => zb
    });
    Mb(42222);
    var eb = Mb(42230),
      Hb = Mb(2550),
      pb = Mb(26),
      Vb = Mb(40391),
      gb = Mb(2434),
      lb = Mb(40419),
      Lb = Mb(29),
      Ib = Mb(2451),
      Ob = Mb(39645),
      Ub = Mb(10183),
      tb = Mb(42236);
    const Cb = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var Eb = Mb(42251),
      Fb = Mb(10160),
      Bb = Mb(40427);
    const sb = bb => bb.padSneakToggled || !!pb.c.get("clientEscMenuOptions").crouchIsToggle && bb.crouchToggled,
      mb = () => {
        const bb = (() => {
          const bb = (0, Ub.c)();
          let wb = Cb;
          const Mb = new tb.b;
          let eb = !1,
            Hb = 0;
          const pb = () => {
            const Mb = performance.now(),
              pb = 0 === Hb ? 0 : Mb - Hb;
            if (Hb = Mb, !eb) return bb.discardPending(), null;
            const Vb = (0, tb.p)(wb, pb),
              gb = bb.drainLookDelta(),
              lb = (0, Ob.k)();
            return {
              DW: (Vb.DW + gb.DW) * lb,
              cW: (Vb.cW + gb.cW) * lb
            }
          };
          return {
            update: (bb, Hb, Vb, gb) => {
              bb.camera.B_ !== pb && (bb.camera.B_ = pb), eb = !0, wb = (0, tb.s)(Mb, Hb, Vb, gb, performance.now())
            },
            release: () => {
              eb = !1, wb = Cb, Mb.reset()
            },
            uninstall: bb => {
              bb.camera.B_ === pb && (bb.camera.B_ = null)
            }
          }
        })();
        return {
          update: (wb, Mb, eb) => {
            bb.update((0, Ib.h)(), wb, Mb, eb)
          },
          release: bb.release,
          uninstall: () => {
            const wb = (0, Ib.h)();
            wb && bb.uninstall(wb)
          }
        }
      };
    var hb = Mb(42249);
    Mb(38920), Mb(10077);
    Mb(10091).c;
    const zb = () => {
      const bb = (0, hb.b)((() => {
          const bb = {
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
            bodies: () => (0, Vb.d)(),
            look: mb(),
            move: (wb, Mb) => {
              const eb = (0, Ib.h)(),
                Hb = eb.pR.Ceb();
              if (bb.x = wb.x, bb.y = wb.y, bb.magnitude = wb.magnitude, bb.headingOffset = wb.headingOffset, bb.jumpHeld = wb.jumpHeld, wb.jumpPressed && (bb.jumpPressedSinceTick = !0), bb.running = wb.running, bb.sprintHeld = wb.sprintHeld, Mb) {
                const wb = (0, Eb.c)({
                  ...Mb,
                  descending: eb.pR.sMb(eb.VJ).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!eb.BX.canCrouch,
                  toggled: sb(Hb)
                });
                bb.crouchHeld = wb.crouchHeld, Hb.padSneakToggled = wb.toggled, Hb.crouchToggled = !1, (0, Fb.c)(wb.toggled)
              }
              Hb.gamepad = bb
            },
            stopMoving: () => {
              var wb;
              Object.assign(bb, {
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
              const Mb = null === (wb = (0, Ib.h)()) || void 0 === wb ? void 0 : wb.pR.Ceb();
              (null === Mb || void 0 === Mb ? void 0 : Mb.gamepad) === bb && (Mb.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: bb => {
              const wb = (0, Ib.h)(),
                Mb = null === wb || void 0 === wb ? void 0 : wb.pR.Ceb();
              "touch" === bb ? ((0, Fb.c)(!1), null !== Mb && void 0 !== Mb && Mb.padSneakToggled && (Mb.padSneakToggled = !1, Mb.isTouchscreen && !Mb.gamepad && wb.pR.NMb(wb.VJ).setCrouching(!!wb.BX.canCrouch && Mb.touchCrouch))) : "gamepad" === bb && Mb && (0, Fb.c)(sb(Mb))
            },
            hasPlayer: () => {
              var bb;
              return !(null === (bb = (0, Ib.h)()) || void 0 === bb || !bb.VJ)
            },
            isPlayerDead: () => {
              var bb;
              const wb = (0, Ib.h)();
              return !1 === (null === (bb = wb.pR.geb(wb.VJ)) || void 0 === bb ? void 0 : bb.isAlive)
            },
            isReplayMode: () => {
              var bb, wb;
              return !(null === (bb = (0, Ib.e)()) || void 0 === bb || null === (wb = bb.client) || void 0 === wb || !wb.isReplayMode())
            },
            isFreeCameraOn: () => {
              var bb, wb, Mb;
              return !(null === (bb = (0, Ib.e)()) || void 0 === bb || null === (wb = bb.client) || void 0 === wb || null === (Mb = wb.freeCameraController) || void 0 === Mb || !Mb.isEnabled())
            },
            targetsBlock: () => !!(0, Ib.h)().awb,
            selectedSlotEmpty: () => {
              var bb;
              const wb = (0, Ib.h)();
              return !(null !== (bb = wb.pR.QMb(wb.VJ)) && void 0 !== bb && bb.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const bb = (0, Ib.h)().BX;
              return !!bb.creative && !!bb.canPickBlocks
            },
            zoomAllowed: () => !!(0, Ib.h)().BX.canUseZoomKey,
            scrollHotbar: bb => {
              Lb.k.iI("ScrollInventorySlot", bb)
            },
            hasFullInventory: () => (0, lb.b)((0, Ib.h)()),
            hasLobbyTab: () => (0, Bb.b)((0, Ib.h)().BX),
            contextActionInputs: () => {
              var bb, wb, Mb, eb;
              const Hb = (0, Ib.h)();
              return {
                holdingGun: !(null === (bb = Hb.pR.leb(Hb.VJ)) || void 0 === bb || null === (wb = bb.NK) || void 0 === wb || !wb.isGun()),
                customButtons: null !== (Mb = Hb.BX.customButtons) && void 0 !== Mb ? Mb : null,
                touchscreenActionButton: null !== (eb = Hb.BX.touchscreenActionButton) && void 0 !== eb ? eb : null
              }
            },
            pressTouchButton: bb => {
              (0, gb.sendColyMessage)(Hb.qj, bb)
            }
          }
        })()),
        wb = (0, eb.d)(),
        Mb = null,
        pb = null;
      return () => {
        bb(), wb(), null === Mb || void 0 === Mb || Mb(), null === pb || void 0 === pb || pb()
      }
    }
  },
  37947: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb,
      d: () => Ub,
      f: () => Ob,
      i: () => Vb,
      l: () => Cb,
      o: () => lb,
      q: () => Eb,
      u: () => Lb,
      v: () => gb,
      z: () => Ib
    });
    const eb = Math.PI / 2 - .001,
      Hb = 2 * Math.PI,
      pb = 1e-9;

    function Vb(bb, wb) {
      wb.heading = bb.heading, wb.pitch = bb.pitch
    }

    function gb(bb, wb) {
      const Mb = wb - bb;
      return Mb - Hb * Math.floor((Mb + Math.PI) / Hb)
    }

    function lb(bb, wb, Mb) {
      return bb + gb(bb, wb) * Mb
    }

    function Lb(bb) {
      if (!Number.isFinite(bb)) return bb;
      const wb = bb - Hb * Math.floor(bb / Hb);
      return wb < Hb ? wb : 0
    }

    function Ib(bb, wb) {
      return bb + gb(bb, wb)
    }

    function Ob(bb) {
      return Math.max(-eb, Math.min(eb, bb))
    }

    function Ub(bb, wb, Mb) {
      const eb = Math.cos(wb);
      return Mb[0] = eb * Math.sin(bb), Mb[1] = -Math.sin(wb), Mb[2] = eb * Math.cos(bb), Mb
    }

    function tb(bb, wb, Mb, eb) {
      const Hb = Math.sqrt(bb * bb + Mb * Mb);
      return Hb < pb && Math.abs(wb) < pb || (Hb >= pb && (eb.heading = Math.atan2(bb, Mb)), eb.pitch = Ob(Math.atan2(-wb, Hb) + 0)), eb
    }

    function Cb(bb, wb) {
      return tb(bb[0], bb[1], bb[2], wb)
    }

    function Eb(bb, wb, Mb) {
      return tb(wb[0] - bb[0], wb[1] - bb[1], wb[2] - bb[2], Mb)
    }
  },
  37776: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => lb
    });
    var eb = Mb(366),
      Hb = Mb(26),
      pb = Mb(37781),
      Vb = Mb(1821),
      gb = Mb(2194);

    function lb(bb, wb) {
      var Mb, lb, Lb;
      if (!Hb.c.get("isKeydownEnabled") || bb.repeat) return;
      const Ib = bb.code;
      "Escape" === bb.key ? (0, Vb.i)(bb) : null !== (Mb = gb.p.OpenSettings) && void 0 !== Mb && Mb.includes(Ib) ? (0, Vb.x)(bb, eb.l.SETTINGS) : null !== (lb = gb.p.OpenCharacterCustomization) && void 0 !== lb && lb.includes(Ib) ? (0, pb.e)() || (0, Vb.x)(bb, eb.l.CUSTOMISATION, wb()) : null !== (Lb = gb.p.ShowDebugOverlay) && void 0 !== Lb && Lb.includes(Ib) && Hb.c.set({
        showDebugOverlay: !Hb.c.get("showDebugOverlay")
      })
    }
  },
  37751: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Ub,
      e: () => Ib,
      f: () => tb,
      g: () => Ob
    });
    var eb = Mb(382),
      Hb = Mb(707),
      pb = Mb(720),
      Vb = Mb(43);
    const gb = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      lb = "playSessionGameNameWithVariation",
      Lb = "wasMatchmakePlayer";

    function Ib() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vb.j;
      (0, pb.h)(bb, gb)
    }

    function Ob() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vb.j).setItem(Lb, !0)
    }

    function Ub() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vb.j;
      return (0, pb.e)(bb, gb)
    }

    function tb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Vb.j;
      const Mb = (0, pb.e)(wb, gb),
        Ib = function(bb) {
          const wb = bb.getItem(lb);
          return "string" !== typeof wb ? null : wb
        }(wb),
        Ob = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vb.j).getItem(Lb)
        }(wb);
      let Ub;
      return Ub = null !== Mb && null !== Ib && (0, pb.g)(wb, gb) && function(bb, wb, Mb) {
          const Hb = (0, eb.Zb)(bb),
            pb = (0, eb.Zb)(wb),
            Vb = (0, eb.Sb)(bb),
            gb = (0, eb.Sb)(wb);
          return !(Hb !== pb || !Mb) || Hb === pb && Vb === gb
        }(Ib, bb, Ob) ? Mb : (0, Hb.d)(), (0, pb.j)(wb, gb, Ub), wb.setItem(lb, bb),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vb.j).removeItem(Lb)
        }(wb), Ub
    }
  },
  37746: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => zb,
      h: () => Xb
    });
    var eb = Mb(1126),
      Hb = Mb(236),
      pb = Mb(375),
      Vb = Mb(667),
      gb = Mb(382),
      lb = Mb(1129),
      Lb = Mb(698),
      Ib = Mb(737),
      Ob = Mb(5371),
      Ub = Mb(110),
      tb = Mb(160),
      Cb = Mb(1965),
      Eb = Mb(126),
      Fb = Mb(37751),
      Bb = Mb(43),
      sb = Mb(715),
      mb = Mb(676),
      hb = Mb(37754);

    function zb() {
      var bb, wb;
      return [...null !== (bb = navigator.languages) && void 0 !== bb ? bb : [null !== (wb = navigator.language) && void 0 !== wb ? wb : "none"], "EN-gb"]
    }

    function Xb(bb, wb, Mb, Xb, xb) {
      const jb = (0, eb.j)(wb) ? (0, eb.o)(wb) : null,
        Kb = bb.isLoggedIn() && void 0 !== (0, Hb.c)(pb.o, tb.siteUsed) ? (0, mb.e)() : null,
        rb = {
          cookies: (0, Cb.getAllCookiesForGameNameWithVariation)(wb),
          isMobile: (0, Ub.isMobile)(),
          isUsingCustomGameTexturePack: null !== jb && xb(jb),
          generalCookies: {
            joinDiscord: !!Bb.i.getItem("DiscordPressed"),
            newGo: Ob.c,
            ...bb.getMetricsCookies(),
            trafficCode: Xb,
            compliance: Ub.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, Ub.getBrowserName)(),
            version: (0, Ub.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, Ub.getPlatformType)(),
            deviceType: (0, Eb.e)()
          },
          isLoggedIn: bb.isLoggedIn(),
          lobbyName: Mb,
          languages: zb(),
          version: Vb.e,
          siteUsed: tb.siteUsed,
          subsiteUsed: tb.subsiteUsed,
          playSessionId: (0, Fb.f)(wb),
          visitSessionId: (0, sb.getVisitSessionId)(),
          clientReason: Lb.A.reason,
          budgetBasis: (0, hb.g)(),
          ...null !== Ib.u && {
            diagClaim: Ib.u.claimId
          },
          ...null !== Kb && {
            webGpuLoss: Kb
          }
        };
      return null !== jb && (0, gb.Rc)(jb) ? (rb.lobbyName = (0, eb.i)(jb, (0, eb.m)(wb), Mb), {
        roomName: `classic_${lb.h}`,
        joinOptions: rb
      }) : {
        roomName: wb,
        joinOptions: rb
      }
    }
  },
  5857: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb,
      e: () => Ub,
      g: () => lb,
      h: () => Cb,
      i: () => Lb,
      j: () => tb
    });
    var eb = Mb(5859),
      Hb = Mb(5868);
    const pb = !1,
      Vb = eb.k.map((bb => {
        const wb = [];
        for (let pb = 1; pb <= bb.reach; pb++) wb.push(Hb.g[(0, eb.h)(bb.source, pb)].id);
        const Mb = "water" === bb.family;
        return Object.freeze({
          name: bb.kind,
          family: bb.family,
          reach: bb.reach,
          stepTicks: Mb ? 5 : 10,
          slopeDistance: Mb ? 4 : 2,
          sourceId: Hb.g[bb.source].id,
          fallingId: Hb.g[(0, eb.e)(bb.source)].id,
          flowingIds: Object.freeze(wb),
          makesSources: Mb,
          stillId: Hb.g[bb.still].id
        })
      })),
      gb = new Map;
    for (const Eb of Vb) gb.set(Eb.sourceId, Object.freeze({
      kind: Eb,
      state: "source",
      distance: 0
    })), gb.set(Eb.fallingId, Object.freeze({
      kind: Eb,
      state: "falling",
      distance: 0
    })), Eb.flowingIds.forEach(((bb, wb) => {
      gb.set(bb, Object.freeze({
        kind: Eb,
        state: "flowing",
        distance: wb + 1
      }))
    }));

    function lb(bb) {
      return Vb.find((wb => wb.name === bb))
    }

    function Lb(bb) {
      return null === bb ? void 0 : gb.get(bb)
    }
    const Ib = new Uint8Array(65536);
    for (const [Eb, Fb] of gb) Ib[Eb] = "source" === Fb.state ? 1 : 2;
    const Ob = new Map;
    for (const Eb of Vb) Ob.set(Eb.stillId, Eb.family);

    function Ub(bb) {
      var wb, Mb;
      return null !== (wb = null === (Mb = Lb(bb)) || void 0 === Mb ? void 0 : Mb.kind.family) && void 0 !== wb ? wb : tb(bb)
    }

    function tb(bb) {
      var wb;
      return null === bb ? null : null !== (wb = Ob.get(bb)) && void 0 !== wb ? wb : null
    }
    Hb.g.Obsidian.id, Hb.g["Messy Stone"].id;

    function Cb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
        let bb = 0;
        for (const wb of Vb) bb = Math.max(bb, wb.stillId, wb.sourceId, wb.fallingId, ...wb.flowingIds);
        return bb
      }() + 1;
      const wb = new Uint8Array(bb);
      for (const Mb of Vb) {
        const eb = ("water" === Mb.family ? 1 : 2) << 4;
        for (const Hb of [Mb.stillId, Mb.sourceId, Mb.fallingId, ...Mb.flowingIds]) Hb < bb && (wb[Hb] = eb)
      }
      return wb
    }
  },
  40291: (bb, wb, Mb) => {
    function eb(bb, wb, Mb, eb, Hb) {
      var pb = {};
      return Object.keys(eb).forEach((function(bb) {
        pb[bb] = eb[bb]
      })), pb.enumerable = !!pb.enumerable, pb.configurable = !!pb.configurable, ("value" in pb || pb.initializer) && (pb.writable = !0), pb = Mb.slice().reverse().reduce((function(Mb, eb) {
        return eb(bb, wb, Mb) || Mb
      }), pb), Hb && void 0 !== pb.initializer && (pb.value = pb.initializer ? pb.initializer.call(Hb) : void 0, pb.initializer = void 0), void 0 === pb.initializer && (Object.defineProperty(bb, wb, pb), pb = null), pb
    }
    Mb.d(wb, {
      b: () => eb
    })
  },
  40282: (bb, wb, Mb) => {
    function eb(bb, wb, Mb, eb) {
      Mb && Object.defineProperty(bb, wb, {
        enumerable: Mb.enumerable,
        configurable: Mb.configurable,
        writable: Mb.writable,
        value: Mb.initializer ? Mb.initializer.call(eb) : void 0
      })
    }
    Mb.d(wb, {
      e: () => eb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);