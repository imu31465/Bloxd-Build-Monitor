export const id = 123;
export const ids = [123];
export const modules = {
  40362: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => qR,
      h: () => uR
    });
    var yR = GR(2845);
    let tR = null;

    function uR(RR) {
      return null !== tR && RR === tR
    }

    function ZR() {
      this.sF = !1, this.stopPropagation = !1, this.qT = !1, this.disabled = !1
    }
    class qR {
      constructor(RR, JR) {
        this.version = "0.7.0";
        var GR = Object.assign({}, new ZR, JR || {});
        this.element = RR || document, this.sF = !!GR.sF, this.stopPropagation = !!GR.stopPropagation, this.qT = !!GR.qT, this.disabled = !!GR.disabled, this.filterEvents = (RR, JR) => !0, this.ignoreEvent = RR => !1, this.down = new yR.EventEmitter, this.up = new yR.EventEmitter, this.state = {}, this.wT = {
          dx: 0,
          dy: 0,
          WGR: 0,
          AGR: 0,
          CGR: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? fR(this) : document.addEventListener("DOMContentLoaded", (RR => {
          fR(this)
        }), {
          once: !0
        })
      }
      bind(RR) {
        for (var JR = arguments.length, GR = new Array(JR > 1 ? JR - 1 : 0), yR = 1; yR < JR; yR++) GR[yR - 1] = arguments[yR];
        GR.forEach((JR => {
          var GR = this._keyBindmap[JR] || [];
          GR.includes(RR) || (GR.push(RR), this._keyBindmap[JR] = GR)
        })), this.state[RR] = !!this.state[RR], this.pressCount[RR] = this.pressCount[RR] || 0, this.releaseCount[RR] = this.releaseCount[RR] || 0
      }
      unbind(RR) {
        for (var JR in this._keyBindmap) {
          var GR = this._keyBindmap[JR],
            yR = GR.indexOf(RR);
          yR > -1 && GR.splice(yR, 1)
        }
      }
      getBindings() {
        var RR = {};
        for (var JR in this._keyBindmap) {
          this._keyBindmap[JR].forEach((GR => {
            RR[GR] = RR[GR] || [], RR[GR].push(JR)
          }))
        }
        return RR
      }
      gK() {
        iR(this.wT), iR(this.pressCount), iR(this.releaseCount)
      }
    }

    function iR(RR) {
      for (var JR in RR) RR[JR] = 0
    }

    function fR(RR) {
      window.addEventListener("keydown", LR.bind(null, RR, !0), !1), window.addEventListener("keyup", LR.bind(null, RR, !1), !1);
      var JR = {
        passive: !0
      };
      RR.element.addEventListener("touchstart", rR.bind(void 0, RR), {
        passive: !1
      }), RR.element.addEventListener("touchend", aR.bind(void 0, RR), JR), RR.element.addEventListener("mousedown", nR.bind(null, RR, !0), JR), window.document.addEventListener("mouseup", nR.bind(null, RR, !1), JR), RR.element.addEventListener("touchmove", UR.bind(null, RR), JR), RR.element.addEventListener("mousemove", UR.bind(null, RR), JR), window.PointerEvent, RR.element.addEventListener("wheel", WR.bind(null, RR), JR), RR.element.addEventListener("contextmenu", AR.bind(null, RR), !1), window.addEventListener("blur", MR.bind(null, RR), !1)
    }
    var VR = 0,
      KR = 0,
      wR = null;

    function rR(RR, JR) {
      JR.preventDefault(), eR(JR)
    }

    function eR(RR) {
      let JR = !1;
      for (let GR = 0; GR < RR.touches.length; ++GR)
        if (RR.touches[GR].identifier === wR) {
          JR = !0;
          break
        } if (!JR) {
        const JR = RR.changedTouches[0];
        VR = JR.clientX, KR = JR.clientY, wR = JR.identifier
      }
    }

    function aR(RR, JR) {
      for (var GR = JR.changedTouches, yR = 0; yR < GR.length; ++yR) GR[yR].identifier === wR && (wR = null)
    }

    function LR(RR, JR, GR) {
      if (!RR.ignoreEvent(GR)) try {
        BR(RR, GR), JR && GR.isTrusted && !GR.repeat && RR._keyStates[GR.code] && lR(RR, GR.code)
      } finally {
        pR(GR.code, JR, RR, GR)
      }
    }

    function nR(RR, JR, GR) {
      if (!RR.ignoreEvent(GR)) try {
        BR(RR, GR)
      } finally {
        ! function(RR, JR, GR) {
          if ("pointerId" in GR)
            if (JR) {
              if (null !== RR._touches.currID) return;
              RR._touches.currID = GR.pointerId
            } else {
              if (RR._touches.currID !== GR.pointerId) return;
              RR._touches.currID = null
            } var yR = "button" in GR ? GR.button + 1 : 1;
          pR("Mouse" + yR, JR, RR, GR)
        }(RR, JR, GR)
      }
    }

    function UR(RR, JR) {
      var GR = JR.movementX || JR.mozMovementX || 0,
        yR = JR.movementY || JR.mozMovementY || 0;
      if (JR.touches && 0 === (GR | yR)) {
        var tR = function(RR) {
          eR(RR);
          for (let JR = 0; JR < RR.changedTouches.length; ++JR)
            if (RR.changedTouches[JR].identifier == wR) {
              const GR = RR.changedTouches[JR],
                yR = [GR.clientX - VR, GR.clientY - KR];
              return VR = GR.clientX, KR = GR.clientY, yR
            } return console.error(`Did not find touch id ${wR}`), [0, 0]
        }(JR);
        GR = tR[0], yR = tR[1]
      }
      RR.wT.dx += GR, RR.wT.dy += yR
    }

    function WR(RR, JR) {
      BR(RR, JR);
      var GR = 1;
      switch (JR.deltaMode) {
        case 0:
          GR = 1;
          break;
        case 1:
          GR = 12;
          break;
        case 2:
          GR = RR.element.clientHeight || window.innerHeight
      }
      RR.wT.WGR += (JR.deltaX || 0) * GR, RR.wT.AGR += (JR.deltaY || 0) * GR, RR.wT.CGR += (JR.deltaZ || 0) * GR
    }

    function AR(RR, JR) {
      if (!RR.qT) return JR.preventDefault(), !1
    }
    var CR = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function XR(RR, JR) {
      return !!RR[CR[JR]] || ("AltRight" === JR || "ControlLeft" === JR) && "function" === typeof RR.getModifierState && !0 === RR.getModifierState("AltGraph")
    }

    function MR(RR, JR) {
      for (var GR in RR._modifiersHeldThroughBlur = {}, CR) RR._keyStates[GR] && (RR._modifiersHeldThroughBlur[GR] = !0);
      JR && JR.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (RR) {
          return !0
        }
      }() && (clearTimeout(RR._blurRelease), RR._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var JR in RR._modifiersHeldThroughBlur = {}, RR._keyStates) RR._keyStates[JR] && !/^Mouse\d/.test(JR) && lR(RR, JR)
      }), 0))
    }

    function BR(RR, JR) {
      var GR = RR._modifiersHeldThroughBlur;
      if (GR && JR.isTrusted && document.hasFocus())
        for (var yR in GR) delete GR[yR], RR._keyStates[yR] && yR !== JR.code && (XR(JR, yR) || lR(RR, yR))
    }

    function lR(RR, JR) {
      const GR = {
          code: JR,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        yR = tR;
      tR = GR;
      try {
        pR(JR, !1, RR, GR)
      } finally {
        tR = yR
      }
    }

    function pR(RR, JR, GR, yR) {
      var tR = GR._keyBindmap[RR];
      tR && (gR(GR._keyStates[RR], JR) && (GR._keyStates[RR] = JR, tR.forEach((RR => {
        (!GR.filterEvents || GR.filterEvents(yR, RR)) && function(RR, JR, GR, yR) {
          var tR = JR ? GR.pressCount : GR.releaseCount;
          tR[RR] = (tR[RR] || 0) + 1;
          var uR = GR._bindPressCount[RR] || 0;
          (uR += JR ? 1 : -1) < 0 && (uR = 0);
          GR._bindPressCount[RR] = uR;
          var ZR = GR.state[RR];
          if (gR(ZR, uR)) {
            GR.state[RR] = uR > 0;
            var qR = JR ? GR.down : GR.up;
            GR.disabled || qR.emit(RR, yR)
          }
        }(RR, JR, GR, yR)
      }))), "button" in yR || (GR.sF && !yR.defaultPrevented && yR.preventDefault(), GR.stopPropagation && yR.stopPropagation()))
    }

    function gR(RR, JR) {
      return RR ? !JR : JR
    }
  },
  37838: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => aR,
      c: () => LR
    });
    var yR = GR(66),
      tR = GR(1581),
      uR = GR(2173),
      ZR = GR(37829),
      qR = GR(679),
      iR = GR(1163),
      fR = GR.n(iR),
      VR = GR(1378);
    const KR = [wR()];

    function wR() {
      return {
        source: null,
        direction: null,
        sE: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function rR(RR) {
      return KR.find((JR => null !== JR.source && JR.source === RR))
    }

    function eR(RR) {
      clearTimeout(RR.timeout), RR.source = null, RR.direction = null, RR.writtenAngle = null, RR.sE && (RR.sE.style.rotate = "")
    }
    const aR = (0, yR.memo)((function() {
      const [, RR] = (0, yR.useReducer)((RR => RR + 1), 0);
      return (0, tR.f)("damagedByOtherPlayer", (JR => {
        let {
          gt: GR,
          direction: yR
        } = JR;
        const tR = GR || "nonDirectional",
          uR = function(RR) {
            var JR;
            const GR = null !== (JR = rR(RR)) && void 0 !== JR ? JR : KR.find((RR => null === RR.source));
            if (GR) return GR;
            const yR = {
              source: null,
              direction: null,
              sE: null,
              timeout: void 0,
              writtenAngle: null
            };
            return KR.push(yR), yR
          }(tR);
        clearTimeout(uR.timeout), uR.source = tR, uR.direction = yR, uR.timeout = setTimeout((() => {
          eR(uR), RR()
        }), 800), RR()
      })), (0, uR.c)("kill", (JR => {
        let {
          killer: GR,
          victim: yR
        } = JR;
        const tR = GR.local && rR(yR.id);
        tR && (eR(tR), RR())
      })), (0, yR.useEffect)((() => {
        const RR = (0, ZR.e)("turnDamageIndicators", LR);
        return () => {
          RR(), KR.forEach(eR)
        }
      }), []), (0, VR.jsx)("div", {
        className: "DirectionalDamage",
        children: KR.map(((RR, JR) => (0, VR.jsx)("div", {
          ref: JR => {
            RR.sE = JR
          },
          className: fR()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, qR.I)(RR.direction),
            DamageIndicatorIdle: null === RR.source
          })
        }, JR)))
      })
    }));

    function LR(RR) {
      for (const JR of KR) {
        if (null === JR.source || (0, qR.I)(JR.direction)) continue;
        const GR = JR.direction - RR;
        GR !== JR.writtenAngle && (JR.writtenAngle = GR, JR.sE.style.rotate = `${GR}rad`)
      }
    }
  },
  37840: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => gR,
      f: () => lR
    });
    var yR = GR(66),
      tR = GR(25),
      uR = GR(37829),
      ZR = GR(37845),
      qR = GR(37528),
      iR = GR(37685),
      fR = GR(2134),
      VR = GR(2173),
      KR = GR(1378);
    const wR = 20 * Math.PI / 180,
      rR = new Map,
      eR = 25 * Math.PI / 180,
      aR = Array.from({
        length: 6
      }, (() => ({
        kind: null,
        direction: 0,
        shownAt: 0,
        sE: null,
        fade: null,
        timeout: void 0,
        writtenAngle: null,
        away: !1
      })));
    let LR = null,
      nR = null,
      UR = [];
    const WR = 2;

    function AR(RR) {
      const JR = "combat" === RR.kind || "explosion" === RR.kind,
        GR = null !== nR && null !== RR.writtenAngle && function(RR, JR, GR, yR) {
          const tR = JR.width / 3.8,
            uR = (yR ? .7 : .35) * tR + 1,
            ZR = (yR ? .175 : .1) * tR + 1,
            qR = JR.width / 2 - ZR,
            iR = Math.sin(RR),
            fR = Math.cos(RR),
            VR = JR.left + JR.width / 2 + iR * qR,
            KR = JR.top + JR.height / 2 - fR * qR,
            wR = Math.abs(fR) * uR + Math.abs(iR) * ZR,
            rR = Math.abs(iR) * uR + Math.abs(fR) * ZR;
          return GR.some((RR => VR + wR > RR.left - WR && VR - wR < RR.right + WR && KR + rR > RR.top - WR && KR - rR < RR.bottom + WR))
        }(RR.writtenAngle, nR, UR, JR);
      GR !== RR.away && RR.sE && (RR.away = GR, RR.sE.classList.toggle("SoundCueAway", GR))
    }
    let CR = 0;

    function XR(RR) {
      var JR;
      clearTimeout(RR.timeout), null === (JR = RR.fade) || void 0 === JR || JR.cancel(), RR.fade = null, RR.kind = null, RR.writtenAngle = null, RR.away = !1, RR.sE && (RR.sE.className = "SoundCue SoundCueIdle", RR.sE.style.rotate = "")
    }

    function MR(RR, JR) {
      var GR, yR, tR;
      const uR = performance.now();
      if (Math.abs((0, ZR.x)(CR, JR)) < wR || uR - (null !== (GR = rR.get(RR)) && void 0 !== GR ? GR : -1 / 0) < 250) return;
      rR.set(RR, uR), null === (yR = LR) || void 0 === yR || yR();
      const qR = function(RR, JR) {
          const GR = aR.find((GR => GR.kind === RR && Math.abs((0, ZR.x)(GR.direction, JR)) < eR));
          if (GR) return GR;
          return aR.find((RR => null === RR.kind)) || aR.reduce(((RR, JR) => JR.shownAt < RR.shownAt ? JR : RR))
        }(RR, JR),
        iR = qR.sE;
      iR && (clearTimeout(qR.timeout), null === (tR = qR.fade) || void 0 === tR || tR.cancel(), qR.kind = RR, qR.direction = JR, qR.shownAt = uR, iR.className = `SoundCue SoundCue-${RR}`, qR.away = !1, BR(qR, CR), AR(qR), qR.fade = iR.animate([{
        opacity: 1
      }, {
        opacity: 1,
        offset: .5
      }, {
        opacity: 0
      }], {
        duration: 1200,
        fill: "forwards"
      }), qR.timeout = setTimeout((() => {
        XR(qR)
      }), 1200))
    }

    function BR(RR, JR) {
      const GR = RR.direction - JR;
      GR !== RR.writtenAngle && RR.sE && (RR.writtenAngle = GR, RR.sE.style.rotate = `${GR}rad`, AR(RR))
    }

    function lR(RR) {
      CR = RR;
      for (const JR of aR) null !== JR.kind && BR(JR, RR)
    }
    const pR = (0, yR.memo)((function() {
        const RR = (0, yR.useRef)(null);
        return (0, yR.useEffect)((() => {
          const JR = RR.current,
            GR = () => {
              const {
                anywhere: RR,
                boxes: GR
              } = (0, iR.d)();
              JR.classList.toggle("SoundDirectionsHidden", RR), nR = JR.getBoundingClientRect(), UR = GR;
              for (const JR of aR) AR(JR)
            };
          let yR = 0;
          const tR = () => {
            cancelAnimationFrame(yR), yR = requestAnimationFrame((() => {
              yR = requestAnimationFrame(GR)
            }))
          };
          GR(), LR = GR, window.addEventListener("resize", tR);
          const uR = (0, iR.j)(GR),
            ZR = new ResizeObserver(GR);
          return ZR.observe(JR), () => {
            ZR.disconnect(), uR(), window.removeEventListener("resize", tR), cancelAnimationFrame(yR), LR = null, nR = null, UR = []
          }
        }), []), (0, yR.useEffect)((() => {
          const RR = (0, uR.e)("turnSoundCues", lR),
            JR = (0, qR.d)(MR);
          return () => {
            JR(), RR(), aR.forEach(XR), rR.clear()
          }
        }), []), (0, KR.jsx)("div", {
          ref: RR,
          className: "SoundDirections",
          children: aR.map(((RR, JR) => (0, KR.jsx)("div", {
            ref: JR => {
              RR.sE = JR
            },
            className: "SoundCue SoundCueIdle"
          }, JR)))
        })
      })),
      gR = (0, yR.memo)((function() {
        const {
          clientEscMenuOptions: RR
        } = (0, tR.o)(["clientEscMenuOptions"]);
        return RR.showSoundDirections ? (0, KR.jsxs)(KR.Fragment, {
          children: [(0, KR.jsx)(pR, {}), (0, KR.jsx)(bR, {})]
        }) : null
      })),
      bR = (0, yR.memo)((function() {
        const [RR, JR] = (0, yR.useState)((() => {
          var RR;
          return null === (RR = fR.gameBridge.latest("localPlayerAlive")) || void 0 === RR || RR
        }));
        return (0, VR.c)("localPlayerAliveSet", JR), (0, iR.f)(!RR), null
      }))
  },
  37685: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => iR,
      f: () => qR,
      j: () => fR
    });
    var yR = GR(66);
    const tR = new Set,
      uR = new Set;

    function ZR() {
      for (const RR of uR) RR()
    }

    function qR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      (0, yR.useEffect)((() => RR ? function() {
        const RR = {
          element: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
        };
        return tR.add(RR), ZR(), () => {
          tR.delete(RR) && ZR()
        }
      }(JR) : void 0), [RR, JR]), (0, yR.useEffect)((() => {
        RR && ZR()
      }), [RR, GR])
    }

    function iR() {
      const RR = [];
      for (const {
          element: GR
        }
        of tR) {
        var JR;
        if (null === GR) return {
          anywhere: !0,
          boxes: []
        };
        const yR = null === (JR = GR.current) || void 0 === JR ? void 0 : JR.getBoundingClientRect();
        yR && yR.width > 0 && RR.push(yR)
      }
      return {
        anywhere: !1,
        boxes: RR
      }
    }

    function fR(RR) {
      return uR.add(RR), () => {
        uR.delete(RR)
      }
    }
  },
  37651: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR,
      i: () => uR
    });
    let yR = !1;

    function tR() {
      return yR
    }

    function uR(RR) {
      return yR !== RR && (yR = RR, !0)
    }
  },
  42201: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      startPadGameplay: () => CR
    });
    GR(42078);
    var yR = GR(42086),
      tR = GR(2532),
      uR = GR(25),
      ZR = GR(40323),
      qR = GR(2421),
      iR = GR(40353),
      fR = GR(32),
      VR = GR(2435),
      KR = GR(39594),
      wR = GR(10203),
      rR = GR(42088);
    const eR = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var aR = GR(42103),
      LR = GR(10181),
      nR = GR(40356);
    const UR = RR => RR.padSneakToggled || !!uR.d.get("clientEscMenuOptions").crouchIsToggle && RR.crouchToggled,
      WR = () => {
        const RR = (() => {
          const RR = (0, wR.e)();
          let JR = eR;
          const GR = new rR.e;
          let yR = !1,
            tR = 0;
          const uR = () => {
            const GR = performance.now(),
              uR = 0 === tR ? 0 : GR - tR;
            if (tR = GR, !yR) return RR.discardPending(), null;
            const ZR = (0, rR.q)(JR, uR),
              qR = RR.drainLookDelta(),
              iR = (0, KR.i)();
            return {
              bD: (ZR.bD + qR.bD) * iR,
              PD: (ZR.PD + qR.PD) * iR
            }
          };
          return {
            update: (RR, tR, ZR, qR) => {
              RR.camera.A_ !== uR && (RR.camera.A_ = uR), yR = !0, JR = (0, rR.r)(GR, tR, ZR, qR, performance.now())
            },
            release: () => {
              yR = !1, JR = eR, GR.reset()
            },
            uninstall: RR => {
              RR.camera.A_ === uR && (RR.camera.A_ = null)
            }
          }
        })();
        return {
          update: (JR, GR, yR) => {
            RR.update((0, VR.i)(), JR, GR, yR)
          },
          release: RR.release,
          uninstall: () => {
            const JR = (0, VR.i)();
            JR && RR.uninstall(JR)
          }
        }
      };
    var AR = GR(42097);
    GR(38853), GR(10072);
    GR(10094).e;
    const CR = () => {
      const RR = (0, AR.b)((() => {
          const RR = {
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
            bodies: () => (0, ZR.d)(),
            look: WR(),
            move: (JR, GR) => {
              const yR = (0, VR.i)(),
                tR = yR.zC.VyR();
              if (RR.x = JR.x, RR.y = JR.y, RR.magnitude = JR.magnitude, RR.headingOffset = JR.headingOffset, RR.jumpHeld = JR.jumpHeld, JR.jumpPressed && (RR.jumpPressedSinceTick = !0), RR.running = JR.running, RR.sprintHeld = JR.sprintHeld, GR) {
                const JR = (0, aR.e)({
                  ...GR,
                  descending: yR.zC.aGR(yR.WH).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!yR.jW.canCrouch,
                  toggled: UR(tR)
                });
                RR.crouchHeld = JR.crouchHeld, tR.padSneakToggled = JR.toggled, tR.crouchToggled = !1, (0, LR.f)(JR.toggled)
              }
              tR.gamepad = RR
            },
            stopMoving: () => {
              var JR;
              Object.assign(RR, {
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
              const GR = null === (JR = (0, VR.i)()) || void 0 === JR ? void 0 : JR.zC.VyR();
              (null === GR || void 0 === GR ? void 0 : GR.gamepad) === RR && (GR.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: RR => {
              const JR = (0, VR.i)(),
                GR = null === JR || void 0 === JR ? void 0 : JR.zC.VyR();
              "touch" === RR ? ((0, LR.f)(!1), null !== GR && void 0 !== GR && GR.padSneakToggled && (GR.padSneakToggled = !1, GR.isTouchscreen && !GR.gamepad && JR.zC.oGR(JR.WH).setCrouching(!!JR.jW.canCrouch && GR.touchCrouch))) : "gamepad" === RR && GR && (0, LR.f)(UR(GR))
            },
            hasPlayer: () => {
              var RR;
              return !(null === (RR = (0, VR.i)()) || void 0 === RR || !RR.WH)
            },
            isPlayerDead: () => {
              var RR;
              const JR = (0, VR.i)();
              return !1 === (null === (RR = JR.zC.yyR(JR.WH)) || void 0 === RR ? void 0 : RR.isAlive)
            },
            isReplayMode: () => {
              var RR, JR;
              return !(null === (RR = (0, VR.e)()) || void 0 === RR || null === (JR = RR.client) || void 0 === JR || !JR.isReplayMode())
            },
            isFreeCameraOn: () => {
              var RR, JR, GR;
              return !(null === (RR = (0, VR.e)()) || void 0 === RR || null === (JR = RR.client) || void 0 === JR || null === (GR = JR.freeCameraController) || void 0 === GR || !GR.isEnabled())
            },
            targetsBlock: () => !!(0, VR.i)().IJR,
            selectedSlotEmpty: () => {
              var RR;
              const JR = (0, VR.i)();
              return !(null !== (RR = JR.zC.PGR(JR.WH)) && void 0 !== RR && RR.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const RR = (0, VR.i)().jW;
              return !!RR.creative && !!RR.canPickBlocks
            },
            zoomAllowed: () => !!(0, VR.i)().jW.canUseZoomKey,
            scrollHotbar: RR => {
              fR.n.JK("ScrollInventorySlot", RR)
            },
            hasFullInventory: () => (0, iR.b)((0, VR.i)()),
            hasLobbyTab: () => (0, nR.b)((0, VR.i)().jW),
            contextActionInputs: () => {
              var RR, JR, GR, yR;
              const tR = (0, VR.i)();
              return {
                holdingGun: !(null === (RR = tR.zC.tyR(tR.WH)) || void 0 === RR || null === (JR = RR.gC) || void 0 === JR || !JR.isGun()),
                customButtons: null !== (GR = tR.jW.customButtons) && void 0 !== GR ? GR : null,
                touchscreenActionButton: null !== (yR = tR.jW.touchscreenActionButton) && void 0 !== yR ? yR : null
              }
            },
            pressTouchButton: RR => {
              (0, qR.sendColyMessage)(tR.Rj, RR)
            }
          }
        })()),
        JR = (0, yR.c)(),
        GR = null,
        uR = null;
      return () => {
        RR(), JR(), null === GR || void 0 === GR || GR(), null === uR || void 0 === uR || uR()
      }
    }
  },
  37845: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => yR,
      e: () => wR,
      h: () => KR,
      l: () => ZR,
      o: () => eR,
      s: () => iR,
      t: () => aR,
      v: () => fR,
      x: () => qR,
      y: () => VR
    });
    const yR = Math.PI / 2 - .001,
      tR = 2 * Math.PI,
      uR = 1e-9;

    function ZR(RR, JR) {
      JR.heading = RR.heading, JR.pitch = RR.pitch
    }

    function qR(RR, JR) {
      const GR = JR - RR;
      return GR - tR * Math.floor((GR + Math.PI) / tR)
    }

    function iR(RR, JR, GR) {
      return RR + qR(RR, JR) * GR
    }

    function fR(RR) {
      if (!Number.isFinite(RR)) return RR;
      const JR = RR - tR * Math.floor(RR / tR);
      return JR < tR ? JR : 0
    }

    function VR(RR, JR) {
      return RR + qR(RR, JR)
    }

    function KR(RR) {
      return Math.max(-yR, Math.min(yR, RR))
    }

    function wR(RR, JR, GR) {
      const yR = Math.cos(JR);
      return GR[0] = yR * Math.sin(RR), GR[1] = -Math.sin(JR), GR[2] = yR * Math.cos(RR), GR
    }

    function rR(RR, JR, GR, yR) {
      const tR = Math.sqrt(RR * RR + GR * GR);
      return tR < uR && Math.abs(JR) < uR || (tR >= uR && (yR.heading = Math.atan2(RR, GR)), yR.pitch = KR(Math.atan2(-JR, tR) + 0)), yR
    }

    function eR(RR, JR) {
      return rR(RR[0], RR[1], RR[2], JR)
    }

    function aR(RR, JR, GR) {
      return rR(JR[0] - RR[0], JR[1] - RR[1], JR[2] - RR[2], GR)
    }
  },
  37644: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => iR
    });
    var yR = GR(359),
      tR = GR(25),
      uR = GR(37651),
      ZR = GR(1800),
      qR = GR(2194);

    function iR(RR, JR) {
      var GR, iR, fR;
      if (!tR.d.get("isKeydownEnabled") || RR.repeat) return;
      const VR = RR.code;
      "Escape" === RR.key ? (0, ZR.f)(RR) : null !== (GR = qR.t.OpenSettings) && void 0 !== GR && GR.includes(VR) ? (0, ZR.v)(RR, yR.o.SETTINGS) : null !== (iR = qR.t.OpenCharacterCustomization) && void 0 !== iR && iR.includes(VR) ? (0, uR.e)() || (0, ZR.v)(RR, yR.o.CUSTOMISATION, JR()) : null !== (fR = qR.t.ShowDebugOverlay) && void 0 !== fR && fR.includes(VR) && tR.d.set({
        showDebugOverlay: !tR.d.get("showDebugOverlay")
      })
    }
  },
  37620: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => wR,
      e: () => VR,
      h: () => rR,
      i: () => KR
    });
    var yR = GR(377),
      tR = GR(717),
      uR = GR(729),
      ZR = GR(46);
    const qR = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      iR = "playSessionGameNameWithVariation",
      fR = "wasMatchmakePlayer";

    function VR() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZR.k;
      (0, uR.j)(RR, qR)
    }

    function KR() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZR.k).setItem(fR, !0)
    }

    function wR() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZR.k;
      return (0, uR.d)(RR, qR)
    }

    function rR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ZR.k;
      const GR = (0, uR.d)(JR, qR),
        VR = function(RR) {
          const JR = RR.getItem(iR);
          return "string" !== typeof JR ? null : JR
        }(JR),
        KR = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZR.k).getItem(fR)
        }(JR);
      let wR;
      return wR = null !== GR && null !== VR && (0, uR.h)(JR, qR) && function(RR, JR, GR) {
          const tR = (0, yR.Sb)(RR),
            uR = (0, yR.Sb)(JR),
            ZR = (0, yR.Mb)(RR),
            qR = (0, yR.Mb)(JR);
          return !(tR !== uR || !GR) || tR === uR && ZR === qR
        }(VR, RR, KR) ? GR : (0, tR.c)(), (0, uR.m)(JR, qR, wR), JR.setItem(iR, RR),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZR.k).removeItem(fR)
        }(JR), wR
    }
  },
  37616: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => CR,
      g: () => XR
    });
    var yR = GR(1127),
      tR = GR(216),
      uR = GR(371),
      ZR = GR(688),
      qR = GR(377),
      iR = GR(1136),
      fR = GR(709),
      VR = GR(743),
      KR = GR(5326),
      wR = GR(103),
      rR = GR(134),
      eR = GR(1943),
      aR = GR(116),
      LR = GR(37620),
      nR = GR(46),
      UR = GR(726),
      WR = GR(696),
      AR = GR(37622);

    function CR() {
      var RR, JR;
      return [...null !== (RR = navigator.languages) && void 0 !== RR ? RR : [null !== (JR = navigator.language) && void 0 !== JR ? JR : "none"], "EN-gb"]
    }

    function XR(RR, JR, GR, XR, MR) {
      const BR = (0, yR.n)(JR) ? (0, yR.s)(JR) : null,
        lR = RR.isLoggedIn() && void 0 !== (0, tR.b)(uR.o, rR.siteUsed) ? (0, WR.f)() : null,
        pR = {
          cookies: (0, eR.getAllCookiesForGameNameWithVariation)(JR),
          isMobile: (0, wR.isMobile)(),
          isUsingCustomGameTexturePack: null !== BR && MR(BR),
          generalCookies: {
            joinDiscord: !!nR.i.getItem("DiscordPressed"),
            newGo: KR.c,
            ...RR.getMetricsCookies(),
            trafficCode: XR,
            compliance: wR.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, wR.getBrowserName)(),
            version: (0, wR.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, wR.getPlatformType)(),
            deviceType: (0, aR.c)()
          },
          isLoggedIn: RR.isLoggedIn(),
          lobbyName: GR,
          languages: CR(),
          version: ZR.d,
          siteUsed: rR.siteUsed,
          subsiteUsed: rR.subsiteUsed,
          playSessionId: (0, LR.h)(JR),
          visitSessionId: (0, UR.getVisitSessionId)(),
          clientReason: fR.z.reason,
          budgetBasis: (0, AR.k)(),
          ...null !== VR.p && {
            diagClaim: VR.p.claimId
          },
          ...null !== lR && {
            webGpuLoss: lR
          }
        };
      return null !== BR && (0, qR.Ac)(BR) ? (pR.lobbyName = (0, yR.l)(BR, (0, yR.p)(JR), GR), {
        roomName: `classic_${iR.h}`,
        joinOptions: pR
      }) : {
        roomName: JR,
        joinOptions: pR
      }
    }
  },
  5836: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR,
      f: () => wR,
      g: () => iR,
      i: () => eR,
      j: () => fR,
      k: () => rR
    });
    var yR = GR(5839),
      tR = GR(5844);
    const uR = !1,
      ZR = yR.j.map((RR => {
        const JR = [];
        for (let uR = 1; uR <= RR.reach; uR++) JR.push(tR.l[(0, yR.h)(RR.source, uR)].id);
        const GR = "water" === RR.family;
        return Object.freeze({
          name: RR.kind,
          family: RR.family,
          reach: RR.reach,
          stepTicks: GR ? 5 : 10,
          slopeDistance: GR ? 4 : 2,
          sourceId: tR.l[RR.source].id,
          fallingId: tR.l[(0, yR.d)(RR.source)].id,
          flowingIds: Object.freeze(JR),
          makesSources: GR,
          stillId: tR.l[RR.still].id
        })
      })),
      qR = new Map;
    for (const aR of ZR) qR.set(aR.sourceId, Object.freeze({
      kind: aR,
      state: "source",
      distance: 0
    })), qR.set(aR.fallingId, Object.freeze({
      kind: aR,
      state: "falling",
      distance: 0
    })), aR.flowingIds.forEach(((RR, JR) => {
      qR.set(RR, Object.freeze({
        kind: aR,
        state: "flowing",
        distance: JR + 1
      }))
    }));

    function iR(RR) {
      return ZR.find((JR => JR.name === RR))
    }

    function fR(RR) {
      return null === RR ? void 0 : qR.get(RR)
    }
    const VR = new Uint8Array(65536);
    for (const [aR, LR] of qR) VR[aR] = "source" === LR.state ? 1 : 2;
    const KR = new Map;
    for (const aR of ZR) KR.set(aR.stillId, aR.family);

    function wR(RR) {
      var JR, GR;
      return null !== (JR = null === (GR = fR(RR)) || void 0 === GR ? void 0 : GR.kind.family) && void 0 !== JR ? JR : rR(RR)
    }

    function rR(RR) {
      var JR;
      return null === RR ? null : null !== (JR = KR.get(RR)) && void 0 !== JR ? JR : null
    }
    tR.l.Obsidian.id, tR.l["Messy Stone"].id;

    function eR() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
        let RR = 0;
        for (const JR of ZR) RR = Math.max(RR, JR.stillId, JR.sourceId, JR.fallingId, ...JR.flowingIds);
        return RR
      }() + 1;
      const JR = new Uint8Array(RR);
      for (const GR of ZR) {
        const yR = ("water" === GR.family ? 1 : 2) << 4;
        for (const tR of [GR.stillId, GR.sourceId, GR.fallingId, ...GR.flowingIds]) tR < RR && (JR[tR] = yR)
      }
      return JR
    }
  },
  40231: (RR, JR, GR) => {
    function yR(RR, JR, GR, yR, tR) {
      var uR = {};
      return Object.keys(yR).forEach((function(RR) {
        uR[RR] = yR[RR]
      })), uR.enumerable = !!uR.enumerable, uR.configurable = !!uR.configurable, ("value" in uR || uR.initializer) && (uR.writable = !0), uR = GR.slice().reverse().reduce((function(GR, yR) {
        return yR(RR, JR, GR) || GR
      }), uR), tR && void 0 !== uR.initializer && (uR.value = uR.initializer ? uR.initializer.call(tR) : void 0, uR.initializer = void 0), void 0 === uR.initializer && (Object.defineProperty(RR, JR, uR), uR = null), uR
    }
    GR.d(JR, {
      b: () => yR
    })
  },
  40223: (RR, JR, GR) => {
    function yR(RR, JR, GR, yR) {
      GR && Object.defineProperty(RR, JR, {
        enumerable: GR.enumerable,
        configurable: GR.configurable,
        writable: GR.writable,
        value: GR.initializer ? GR.initializer.call(yR) : void 0
      })
    }
    GR.d(JR, {
      b: () => yR
    })
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);