export const id = 200;
export const ids = [200];
export const modules = {
  39322: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => dt,
      g: () => Dt
    });
    var Ot = Vt(4204);
    let qt = null;

    function Dt(tt) {
      return null !== qt && tt === qt
    }

    function mt() {
      this.PU = !1, this.stopPropagation = !1, this.kU = !1, this.disabled = !1
    }
    class dt {
      constructor(tt, et) {
        this.version = "0.7.0";
        var Vt = Object.assign({}, new mt, et || {});
        this.element = tt || document, this.PU = !!Vt.PU, this.stopPropagation = !!Vt.stopPropagation, this.kU = !!Vt.kU, this.disabled = !!Vt.disabled, this.filterEvents = (tt, et) => !0, this.ignoreEvent = tt => !1, this.down = new Ot.EventEmitter, this.up = new Ot.EventEmitter, this.state = {}, this.rU = {
          dx: 0,
          dy: 0,
          Ket: 0,
          het: 0,
          Wet: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? Ht(this) : document.addEventListener("DOMContentLoaded", (tt => {
          Ht(this)
        }), {
          once: !0
        })
      }
      bind(tt) {
        for (var et = arguments.length, Vt = new Array(et > 1 ? et - 1 : 0), Ot = 1; Ot < et; Ot++) Vt[Ot - 1] = arguments[Ot];
        Vt.forEach((et => {
          var Vt = this._keyBindmap[et] || [];
          Vt.includes(tt) || (Vt.push(tt), this._keyBindmap[et] = Vt)
        })), this.state[tt] = !!this.state[tt], this.pressCount[tt] = this.pressCount[tt] || 0, this.releaseCount[tt] = this.releaseCount[tt] || 0
      }
      unbind(tt) {
        for (var et in this._keyBindmap) {
          var Vt = this._keyBindmap[et],
            Ot = Vt.indexOf(tt);
          Ot > -1 && Vt.splice(Ot, 1)
        }
      }
      getBindings() {
        var tt = {};
        for (var et in this._keyBindmap) {
          this._keyBindmap[et].forEach((Vt => {
            tt[Vt] = tt[Vt] || [], tt[Vt].push(et)
          }))
        }
        return tt
      }
      BQ() {
        jt(this.rU), jt(this.pressCount), jt(this.releaseCount)
      }
    }

    function jt(tt) {
      for (var et in tt) tt[et] = 0
    }

    function Ht(tt) {
      window.addEventListener("keydown", yt.bind(null, tt, !0), !1), window.addEventListener("keyup", yt.bind(null, tt, !1), !1);
      var et = {
        passive: !0
      };
      tt.element.addEventListener("touchstart", Et.bind(void 0, tt), {
        passive: !1
      }), tt.element.addEventListener("touchend", wt.bind(void 0, tt), et), tt.element.addEventListener("mousedown", Nt.bind(null, tt, !0), et), window.document.addEventListener("mouseup", Nt.bind(null, tt, !1), et), tt.element.addEventListener("touchmove", Mt.bind(null, tt), et), tt.element.addEventListener("mousemove", Mt.bind(null, tt), et), window.PointerEvent, tt.element.addEventListener("wheel", bt.bind(null, tt), et), tt.element.addEventListener("contextmenu", Jt.bind(null, tt), !1), window.addEventListener("blur", Kt.bind(null, tt), !1)
    }
    var Xt = 0,
      Qt = 0,
      lt = null;

    function Et(tt, et) {
      et.preventDefault(), ft(et)
    }

    function ft(tt) {
      let et = !1;
      for (let Vt = 0; Vt < tt.touches.length; ++Vt)
        if (tt.touches[Vt].identifier === lt) {
          et = !0;
          break
        } if (!et) {
        const et = tt.changedTouches[0];
        Xt = et.clientX, Qt = et.clientY, lt = et.identifier
      }
    }

    function wt(tt, et) {
      for (var Vt = et.changedTouches, Ot = 0; Ot < Vt.length; ++Ot) Vt[Ot].identifier === lt && (lt = null)
    }

    function yt(tt, et, Vt) {
      if (!tt.ignoreEvent(Vt)) try {
        ht(tt, Vt), et && Vt.isTrusted && !Vt.repeat && tt._keyStates[Vt.code] && vt(tt, Vt.code)
      } finally {
        Wt(Vt.code, et, tt, Vt)
      }
    }

    function Nt(tt, et, Vt) {
      if (!tt.ignoreEvent(Vt)) try {
        ht(tt, Vt)
      } finally {
        ! function(tt, et, Vt) {
          if ("pointerId" in Vt)
            if (et) {
              if (null !== tt._touches.currID) return;
              tt._touches.currID = Vt.pointerId
            } else {
              if (tt._touches.currID !== Vt.pointerId) return;
              tt._touches.currID = null
            } var Ot = "button" in Vt ? Vt.button + 1 : 1;
          Wt("Mouse" + Ot, et, tt, Vt)
        }(tt, et, Vt)
      }
    }

    function Mt(tt, et) {
      var Vt = et.movementX || et.mozMovementX || 0,
        Ot = et.movementY || et.mozMovementY || 0;
      if (et.touches && 0 === (Vt | Ot)) {
        var qt = function(tt) {
          ft(tt);
          for (let et = 0; et < tt.changedTouches.length; ++et)
            if (tt.changedTouches[et].identifier == lt) {
              const Vt = tt.changedTouches[et],
                Ot = [Vt.clientX - Xt, Vt.clientY - Qt];
              return Xt = Vt.clientX, Qt = Vt.clientY, Ot
            } return console.error(`Did not find touch id ${lt}`), [0, 0]
        }(et);
        Vt = qt[0], Ot = qt[1]
      }
      tt.rU.dx += Vt, tt.rU.dy += Ot
    }

    function bt(tt, et) {
      ht(tt, et);
      var Vt = 1;
      switch (et.deltaMode) {
        case 0:
          Vt = 1;
          break;
        case 1:
          Vt = 12;
          break;
        case 2:
          Vt = tt.element.clientHeight || window.innerHeight
      }
      tt.rU.Ket += (et.deltaX || 0) * Vt, tt.rU.het += (et.deltaY || 0) * Vt, tt.rU.Wet += (et.deltaZ || 0) * Vt
    }

    function Jt(tt, et) {
      if (!tt.kU) return et.preventDefault(), !1
    }
    var Ct = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function ut(tt, et) {
      return !!tt[Ct[et]] || ("AltRight" === et || "ControlLeft" === et) && "function" === typeof tt.getModifierState && !0 === tt.getModifierState("AltGraph")
    }

    function Kt(tt, et) {
      for (var Vt in tt._modifiersHeldThroughBlur = {}, Ct) tt._keyStates[Vt] && (tt._modifiersHeldThroughBlur[Vt] = !0);
      et && et.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (tt) {
          return !0
        }
      }() && (clearTimeout(tt._blurRelease), tt._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var et in tt._modifiersHeldThroughBlur = {}, tt._keyStates) tt._keyStates[et] && !/^Mouse\d/.test(et) && vt(tt, et)
      }), 0))
    }

    function ht(tt, et) {
      var Vt = tt._modifiersHeldThroughBlur;
      if (Vt && et.isTrusted && document.hasFocus())
        for (var Ot in Vt) delete Vt[Ot], tt._keyStates[Ot] && Ot !== et.code && (ut(et, Ot) || vt(tt, Ot))
    }

    function vt(tt, et) {
      const Vt = {
          code: et,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        Ot = qt;
      qt = Vt;
      try {
        Wt(et, !1, tt, Vt)
      } finally {
        qt = Ot
      }
    }

    function Wt(tt, et, Vt, Ot) {
      var qt = Vt._keyBindmap[tt];
      qt && (St(Vt._keyStates[tt], et) && (Vt._keyStates[tt] = et, qt.forEach((tt => {
        (!Vt.filterEvents || Vt.filterEvents(Ot, tt)) && function(tt, et, Vt, Ot) {
          var qt = et ? Vt.pressCount : Vt.releaseCount;
          qt[tt] = (qt[tt] || 0) + 1;
          var Dt = Vt._bindPressCount[tt] || 0;
          (Dt += et ? 1 : -1) < 0 && (Dt = 0);
          Vt._bindPressCount[tt] = Dt;
          var mt = Vt.state[tt];
          if (St(mt, Dt)) {
            Vt.state[tt] = Dt > 0;
            var dt = et ? Vt.down : Vt.up;
            Vt.disabled || dt.emit(tt, Ot)
          }
        }(tt, et, Vt, Ot)
      }))), "button" in Ot || (Vt.PU && !Ot.defaultPrevented && Ot.preventDefault(), Vt.stopPropagation && Ot.stopPropagation()))
    }

    function St(tt, et) {
      return tt ? !et : et
    }
  },
  36925: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => wt,
      g: () => yt
    });
    var Ot = Vt(63),
      qt = Vt(1554),
      Dt = Vt(2063),
      mt = Vt(36880),
      dt = Vt(710),
      jt = Vt(1140),
      Ht = Vt.n(jt),
      Xt = Vt(1188);
    const Qt = [lt()];

    function lt() {
      return {
        source: null,
        direction: null,
        Vk: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function Et(tt) {
      return Qt.find((et => null !== et.source && et.source === tt))
    }

    function ft(tt) {
      clearTimeout(tt.timeout), tt.source = null, tt.direction = null, tt.writtenAngle = null, tt.Vk && (tt.Vk.style.rotate = "")
    }
    const wt = (0, Ot.memo)((function() {
      const [, tt] = (0, Ot.useReducer)((tt => tt + 1), 0);
      return (0, qt.f)("damagedByOtherPlayer", (et => {
        let {
          WV: Vt,
          direction: Ot
        } = et;
        const qt = Vt || "nonDirectional",
          Dt = function(tt) {
            var et;
            const Vt = null !== (et = Et(tt)) && void 0 !== et ? et : Qt.find((tt => null === tt.source));
            if (Vt) return Vt;
            const Ot = {
              source: null,
              direction: null,
              Vk: null,
              timeout: void 0,
              writtenAngle: null
            };
            return Qt.push(Ot), Ot
          }(qt);
        clearTimeout(Dt.timeout), Dt.source = qt, Dt.direction = Ot, Dt.timeout = setTimeout((() => {
          ft(Dt), tt()
        }), 800), tt()
      })), (0, Dt.e)("kill", (et => {
        let {
          killer: Vt,
          victim: Ot
        } = et;
        const qt = Vt.local && Et(Ot.id);
        qt && (ft(qt), tt())
      })), (0, Ot.useEffect)((() => {
        const tt = (0, mt.h)("turnDamageIndicators", yt);
        return () => {
          tt(), Qt.forEach(ft)
        }
      }), []), (0, Xt.jsx)("div", {
        className: "DirectionalDamage",
        children: Qt.map(((tt, et) => (0, Xt.jsx)("div", {
          ref: et => {
            tt.Vk = et
          },
          className: Ht()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, dt.B)(tt.direction),
            DamageIndicatorIdle: null === tt.source
          })
        }, et)))
      })
    }));

    function yt(tt) {
      for (const et of Qt) {
        if (null === et.source || (0, dt.B)(et.direction)) continue;
        const Vt = et.direction - tt;
        Vt !== et.writtenAngle && (et.writtenAngle = Vt, et.Vk.style.rotate = `${Vt}rad`)
      }
    }
  },
  36745: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt,
      g: () => Dt
    });
    let Ot = !1;

    function qt() {
      return Ot
    }

    function Dt(tt) {
      return Ot !== tt && (Ot = tt, !0)
    }
  },
  34333: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Dt,
      h: () => qt
    });
    var Ot = Vt(26);

    function qt(tt, et) {
      return tt && !et
    }

    function Dt() {
      return qt(Ot.b.get("isTouchScreen"), Ot.b.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  40865: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      startPadGameplay: () => Ct
    });
    Vt(40724);
    var Ot = Vt(40730),
      qt = Vt(3820),
      Dt = Vt(26),
      mt = Vt(39278),
      dt = Vt(3751),
      jt = Vt(39313),
      Ht = Vt(31),
      Xt = Vt(2848),
      Qt = Vt(38649),
      lt = Vt(9068),
      Et = Vt(40735);
    const ft = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var wt = Vt(40752),
      yt = Vt(9052),
      Nt = Vt(39316);
    const Mt = tt => tt.padSneakToggled || !!Dt.b.get("clientEscMenuOptions").crouchIsToggle && tt.crouchToggled,
      bt = () => {
        const tt = (() => {
          const tt = (0, lt.c)();
          let et = ft;
          const Vt = new Et.b;
          let Ot = !1,
            qt = 0;
          const Dt = () => {
            const Vt = performance.now(),
              Dt = 0 === qt ? 0 : Vt - qt;
            if (qt = Vt, !Ot) return tt.discardPending(), null;
            const mt = (0, Et.j)(et, Dt),
              dt = tt.drainLookDelta(),
              jt = (0, Qt.g)();
            return {
              JR: (mt.JR + dt.JR) * jt,
              uR: (mt.uR + dt.uR) * jt
            }
          };
          return {
            update: (tt, qt, mt, dt) => {
              tt.camera.JB !== Dt && (tt.camera.JB = Dt), Ot = !0, et = (0, Et.k)(Vt, qt, mt, dt, performance.now())
            },
            release: () => {
              Ot = !1, et = ft, Vt.reset()
            },
            uninstall: tt => {
              tt.camera.JB === Dt && (tt.camera.JB = null)
            }
          }
        })();
        return {
          update: (et, Vt, Ot) => {
            tt.update((0, Xt.e)(), et, Vt, Ot)
          },
          release: tt.release,
          uninstall: () => {
            const et = (0, Xt.e)();
            et && tt.uninstall(et)
          }
        }
      };
    var Jt = Vt(40745);
    Vt(37951), Vt(8959);
    Vt(8980).b;
    const Ct = () => {
      const tt = (0, Jt.d)((() => {
          const tt = {
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
            bodies: () => (0, mt.d)(),
            look: bt(),
            move: (et, Vt) => {
              const Ot = (0, Xt.e)(),
                qt = Ot.mJ.hVt();
              if (tt.x = et.x, tt.y = et.y, tt.magnitude = et.magnitude, tt.headingOffset = et.headingOffset, tt.jumpHeld = et.jumpHeld, et.jumpPressed && (tt.jumpPressedSinceTick = !0), tt.running = et.running, tt.sprintHeld = et.sprintHeld, Vt) {
                const et = (0, wt.h)({
                  ...Vt,
                  descending: Ot.mJ.fet(Ot.lL).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!Ot.OJ.canCrouch,
                  toggled: Mt(qt)
                });
                tt.crouchHeld = et.crouchHeld, qt.padSneakToggled = et.toggled, qt.crouchToggled = !1, (0, yt.d)(et.toggled)
              }
              qt.gamepad = tt
            },
            stopMoving: () => {
              var et;
              Object.assign(tt, {
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
              const Vt = null === (et = (0, Xt.e)()) || void 0 === et ? void 0 : et.mJ.hVt();
              (null === Vt || void 0 === Vt ? void 0 : Vt.gamepad) === tt && (Vt.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: tt => {
              const et = (0, Xt.e)(),
                Vt = null === et || void 0 === et ? void 0 : et.mJ.hVt();
              "touch" === tt ? ((0, yt.d)(!1), null !== Vt && void 0 !== Vt && Vt.padSneakToggled && (Vt.padSneakToggled = !1, Vt.isTouchscreen && !Vt.gamepad && et.mJ.xet(et.lL).setCrouching(!!et.OJ.canCrouch && Vt.touchCrouch))) : "gamepad" === tt && Vt && (0, yt.d)(Mt(Vt))
            },
            hasPlayer: () => {
              var tt;
              return !(null === (tt = (0, Xt.e)()) || void 0 === tt || !tt.lL)
            },
            isPlayerDead: () => {
              var tt;
              const et = (0, Xt.e)();
              return !1 === (null === (tt = et.mJ.aVt(et.lL)) || void 0 === tt ? void 0 : tt.isAlive)
            },
            isReplayMode: () => {
              var tt, et;
              return !(null === (tt = (0, Xt.c)()) || void 0 === tt || null === (et = tt.client) || void 0 === et || !et.isReplayMode())
            },
            isFreeCameraOn: () => {
              var tt, et, Vt;
              return !(null === (tt = (0, Xt.c)()) || void 0 === tt || null === (et = tt.client) || void 0 === et || null === (Vt = et.freeCameraController) || void 0 === Vt || !Vt.isEnabled())
            },
            targetsBlock: () => !!(0, Xt.e)().Itt,
            selectedSlotEmpty: () => {
              var tt;
              const et = (0, Xt.e)();
              return !(null !== (tt = et.mJ.tVt(et.lL)) && void 0 !== tt && tt.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const tt = (0, Xt.e)().OJ;
              return !!tt.creative && !!tt.canPickBlocks
            },
            scrollHotbar: tt => {
              Ht.j.sw("ScrollInventorySlot", tt)
            },
            hasFullInventory: () => (0, jt.d)((0, Xt.e)()),
            hasLobbyTab: () => (0, Nt.d)((0, Xt.e)().OJ),
            contextActionInputs: () => {
              var tt, et, Vt, Ot;
              const qt = (0, Xt.e)();
              return {
                holdingGun: !(null === (tt = qt.mJ.MVt(qt.lL)) || void 0 === tt || null === (et = tt.LJ) || void 0 === et || !et.isGun()),
                customButtons: null !== (Vt = qt.OJ.customButtons) && void 0 !== Vt ? Vt : null,
                touchscreenActionButton: null !== (Ot = qt.OJ.touchscreenActionButton) && void 0 !== Ot ? Ot : null
              }
            },
            pressTouchButton: tt => {
              (0, dt.sendColyMessage)(qt.Kj, tt)
            }
          }
        })()),
        et = (0, Ot.b)(),
        Vt = null,
        Dt = null;
      return () => {
        tt(), et(), null === Vt || void 0 === Vt || Vt(), null === Dt || void 0 === Dt || Dt()
      }
    }
  },
  36867: (tt, et, Vt) => {
    Vt.d(et, {
      A: () => ft,
      E: () => Mt,
      d: () => Dt,
      f: () => wt,
      j: () => yt,
      n: () => dt,
      q: () => lt,
      t: () => Nt,
      w: () => Qt,
      y: () => bt
    });
    var Ot = Vt(26),
      qt = Vt(31);
    const Dt = "clientGameInventoryButtonsChanged",
      mt = new Map;

    function dt() {
      return [...mt.values()].sort(((tt, et) => {
        var Vt, Ot;
        return (null !== (Vt = tt.order) && void 0 !== Vt ? Vt : 0) - (null !== (Ot = et.order) && void 0 !== Ot ? Ot : 0)
      }))
    }
    let jt = null;

    function Ht(tt) {
      jt = tt
    }
    let Xt = !1;

    function Qt(tt) {
      Xt = !0;
      try {
        tt.onClick()
      } finally {
        Xt = !1
      }
      tt.panel && "clientGame" === Ot.b.get("openInGameMenuName") && Ht(tt.id)
    }

    function lt() {
      return Xt
    }

    function Et() {
      return dt().filter((tt => tt.panel && !tt.disabled))
    }

    function ft(tt) {
      const et = Et(),
        Vt = et.findIndex((tt => tt.id === jt));
      return !(Vt < 0 || et.length < 2) && (Qt(et[(Vt + tt + et.length) % et.length]), !0)
    }

    function wt() {
      return null !== jt && Et().length > 1
    }

    function yt() {
      Ht(null)
    }

    function Nt() {
      "inventory" !== Ot.b.get("openInGameMenuName") && Ht(null)
    }

    function Mt() {
      const tt = jt;
      return Ht(null), tt
    }

    function bt(tt) {
      return mt.set(tt.id, tt), qt.j.sw(Dt, dt(), !0), () => {
        mt.get(tt.id) === tt && (mt.delete(tt.id), qt.j.sw(Dt, dt()))
      }
    }
  },
  36861: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => dt,
      c: () => yt,
      g: () => Nt,
      i: () => lt,
      l: () => Ht,
      m: () => wt,
      o: () => Et,
      q: () => Xt
    });
    var Ot = Vt(26),
      qt = Vt(31),
      Dt = Vt(1387),
      mt = Vt(36867);
    const dt = "clientGameUiChanged";
    let jt = null;

    function Ht() {
      return jt
    }

    function Xt(tt, et) {
      const Vt = {
        content: tt,
        menu: et
      };
      return jt = Vt, qt.j.sw(dt, jt, !0), () => {
        jt === Vt && (jt = null, ft = !1, yt(), qt.j.sw(dt, null))
      }
    }
    let Qt = null;

    function lt() {
      return Qt
    }

    function Et(tt) {
      return Qt = tt, () => {
        Qt === tt && (Qt = null)
      }
    }
    let ft = !1;

    function wt() {
      const tt = Ot.b.get("openInGameMenuName");
      "clientGame" !== tt && (ft = "inventory" === tt), (0, mt.q)() || (0, mt.j)(), (0, Dt.p)(Dt.c), Ot.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function yt() {
      Mt(!1)
    }

    function Nt() {
      Mt(ft)
    }

    function Mt(tt) {
      "clientGame" === Ot.b.get("openInGameMenuName") && Ot.b.set({
        openInGameMenuName: tt ? "inventory" : null
      }), tt || (0, mt.j)(), ft = !1
    }
  },
  36742: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => jt
    });
    var Ot = Vt(377),
      qt = Vt(26),
      Dt = Vt(36745),
      mt = Vt(1732),
      dt = Vt(2074);

    function jt(tt, et) {
      var Vt, jt, Ht;
      if (!qt.b.get("isKeydownEnabled") || tt.repeat) return;
      const Xt = tt.code;
      "Escape" === tt.key ? (0, mt.h)(tt) : null !== (Vt = dt.r.OpenSettings) && void 0 !== Vt && Vt.includes(Xt) ? (0, mt.y)(tt, Ot.o.SETTINGS) : null !== (jt = dt.r.OpenCharacterCustomization) && void 0 !== jt && jt.includes(Xt) ? (0, Dt.e)() || (0, mt.y)(tt, Ot.o.CUSTOMISATION, et()) : null !== (Ht = dt.r.ShowDebugOverlay) && void 0 !== Ht && Ht.includes(Xt) && qt.b.set({
        showDebugOverlay: !qt.b.get("showDebugOverlay")
      })
    }
  },
  39177: (tt, et, Vt) => {
    function Ot(tt, et, Vt, Ot, qt) {
      var Dt = {};
      return Object.keys(Ot).forEach((function(tt) {
        Dt[tt] = Ot[tt]
      })), Dt.enumerable = !!Dt.enumerable, Dt.configurable = !!Dt.configurable, ("value" in Dt || Dt.initializer) && (Dt.writable = !0), Dt = Vt.slice().reverse().reduce((function(Vt, Ot) {
        return Ot(tt, et, Vt) || Vt
      }), Dt), qt && void 0 !== Dt.initializer && (Dt.value = Dt.initializer ? Dt.initializer.call(qt) : void 0, Dt.initializer = void 0), void 0 === Dt.initializer && (Object.defineProperty(tt, et, Dt), Dt = null), Dt
    }
    Vt.d(et, {
      e: () => Ot
    })
  },
  39169: (tt, et, Vt) => {
    function Ot(tt, et, Vt, Ot) {
      Vt && Object.defineProperty(tt, et, {
        enumerable: Vt.enumerable,
        configurable: Vt.configurable,
        writable: Vt.writable,
        value: Vt.initializer ? Vt.initializer.call(Ot) : void 0
      })
    }
    Vt.d(et, {
      b: () => Ot
    })
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);