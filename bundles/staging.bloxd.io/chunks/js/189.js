export const id = 189;
export const ids = [189];
export const modules = {
  39254: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Zd,
      d: () => Wd
    });
    var pd = kd(3946);
    let Nd = null;

    function Wd(dd) {
      return null !== Nd && dd === Nd
    }

    function Pd() {
      this.Qr = !1, this.stopPropagation = !1, this.Vr = !1, this.disabled = !1
    }
    class Zd {
      constructor(dd, Jd) {
        this.version = "0.7.0";
        var kd = Object.assign({}, new Pd, Jd || {});
        this.element = dd || document, this.Qr = !!kd.Qr, this.stopPropagation = !!kd.stopPropagation, this.Vr = !!kd.Vr, this.disabled = !!kd.disabled, this.filterEvents = (dd, Jd) => !0, this.ignoreEvent = dd => !1, this.down = new pd.EventEmitter, this.up = new pd.EventEmitter, this.state = {}, this.ku = {
          dx: 0,
          dy: 0,
          xJd: 0,
          qJd: 0,
          BJd: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? Cd(this) : document.addEventListener("DOMContentLoaded", (dd => {
          Cd(this)
        }), {
          once: !0
        })
      }
      bind(dd) {
        for (var Jd = arguments.length, kd = new Array(Jd > 1 ? Jd - 1 : 0), pd = 1; pd < Jd; pd++) kd[pd - 1] = arguments[pd];
        kd.forEach((Jd => {
          var kd = this._keyBindmap[Jd] || [];
          kd.includes(dd) || (kd.push(dd), this._keyBindmap[Jd] = kd)
        })), this.state[dd] = !!this.state[dd], this.pressCount[dd] = this.pressCount[dd] || 0, this.releaseCount[dd] = this.releaseCount[dd] || 0
      }
      unbind(dd) {
        for (var Jd in this._keyBindmap) {
          var kd = this._keyBindmap[Jd],
            pd = kd.indexOf(dd);
          pd > -1 && kd.splice(pd, 1)
        }
      }
      getBindings() {
        var dd = {};
        for (var Jd in this._keyBindmap) {
          this._keyBindmap[Jd].forEach((kd => {
            dd[kd] = dd[kd] || [], dd[kd].push(Jd)
          }))
        }
        return dd
      }
      Do() {
        gd(this.ku), gd(this.pressCount), gd(this.releaseCount)
      }
    }

    function gd(dd) {
      for (var Jd in dd) dd[Jd] = 0
    }

    function Cd(dd) {
      window.addEventListener("keydown", ed.bind(null, dd, !0), !1), window.addEventListener("keyup", ed.bind(null, dd, !1), !1);
      var Jd = {
        passive: !0
      };
      dd.element.addEventListener("touchstart", Qd.bind(void 0, dd), {
        passive: !1
      }), dd.element.addEventListener("touchend", Od.bind(void 0, dd), Jd), dd.element.addEventListener("mousedown", Rd.bind(null, dd, !0), Jd), window.document.addEventListener("mouseup", Rd.bind(null, dd, !1), Jd), dd.element.addEventListener("touchmove", Id.bind(null, dd), Jd), dd.element.addEventListener("mousemove", Id.bind(null, dd), Jd), window.PointerEvent, dd.element.addEventListener("wheel", Gd.bind(null, dd), Jd), dd.element.addEventListener("contextmenu", vd.bind(null, dd), !1), window.addEventListener("blur", Bd.bind(null, dd), !1)
    }
    var Kd = 0,
      od = 0,
      ld = null;

    function Qd(dd, Jd) {
      Jd.preventDefault(), Ld(Jd)
    }

    function Ld(dd) {
      let Jd = !1;
      for (let kd = 0; kd < dd.touches.length; ++kd)
        if (dd.touches[kd].identifier === ld) {
          Jd = !0;
          break
        } if (!Jd) {
        const Jd = dd.changedTouches[0];
        Kd = Jd.clientX, od = Jd.clientY, ld = Jd.identifier
      }
    }

    function Od(dd, Jd) {
      for (var kd = Jd.changedTouches, pd = 0; pd < kd.length; ++pd) kd[pd].identifier === ld && (ld = null)
    }

    function ed(dd, Jd, kd) {
      if (!dd.ignoreEvent(kd)) try {
        sd(dd, kd), Jd && kd.isTrusted && !kd.repeat && dd._keyStates[kd.code] && ad(dd, kd.code)
      } finally {
        Md(kd.code, Jd, dd, kd)
      }
    }

    function Rd(dd, Jd, kd) {
      if (!dd.ignoreEvent(kd)) try {
        sd(dd, kd)
      } finally {
        ! function(dd, Jd, kd) {
          if ("pointerId" in kd)
            if (Jd) {
              if (null !== dd._touches.currID) return;
              dd._touches.currID = kd.pointerId
            } else {
              if (dd._touches.currID !== kd.pointerId) return;
              dd._touches.currID = null
            } var pd = "button" in kd ? kd.button + 1 : 1;
          Md("Mouse" + pd, Jd, dd, kd)
        }(dd, Jd, kd)
      }
    }

    function Id(dd, Jd) {
      var kd = Jd.movementX || Jd.mozMovementX || 0,
        pd = Jd.movementY || Jd.mozMovementY || 0;
      if (Jd.touches && 0 === (kd | pd)) {
        var Nd = function(dd) {
          Ld(dd);
          for (let Jd = 0; Jd < dd.changedTouches.length; ++Jd)
            if (dd.changedTouches[Jd].identifier == ld) {
              const kd = dd.changedTouches[Jd],
                pd = [kd.clientX - Kd, kd.clientY - od];
              return Kd = kd.clientX, od = kd.clientY, pd
            } return console.error(`Did not find touch id ${ld}`), [0, 0]
        }(Jd);
        kd = Nd[0], pd = Nd[1]
      }
      dd.ku.dx += kd, dd.ku.dy += pd
    }

    function Gd(dd, Jd) {
      sd(dd, Jd);
      var kd = 1;
      switch (Jd.deltaMode) {
        case 0:
          kd = 1;
          break;
        case 1:
          kd = 12;
          break;
        case 2:
          kd = dd.element.clientHeight || window.innerHeight
      }
      dd.ku.xJd += (Jd.deltaX || 0) * kd, dd.ku.qJd += (Jd.deltaY || 0) * kd, dd.ku.BJd += (Jd.deltaZ || 0) * kd
    }

    function vd(dd, Jd) {
      if (!dd.Vr) return Jd.preventDefault(), !1
    }
    var xd = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function qd(dd, Jd) {
      return !!dd[xd[Jd]] || ("AltRight" === Jd || "ControlLeft" === Jd) && "function" === typeof dd.getModifierState && !0 === dd.getModifierState("AltGraph")
    }

    function Bd(dd, Jd) {
      for (var kd in dd._modifiersHeldThroughBlur = {}, xd) dd._keyStates[kd] && (dd._modifiersHeldThroughBlur[kd] = !0);
      Jd && Jd.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (dd) {
          return !0
        }
      }() && (clearTimeout(dd._blurRelease), dd._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var Jd in dd._modifiersHeldThroughBlur = {}, dd._keyStates) dd._keyStates[Jd] && !/^Mouse\d/.test(Jd) && ad(dd, Jd)
      }), 0))
    }

    function sd(dd, Jd) {
      var kd = dd._modifiersHeldThroughBlur;
      if (kd && Jd.isTrusted && document.hasFocus())
        for (var pd in kd) delete kd[pd], dd._keyStates[pd] && pd !== Jd.code && (qd(Jd, pd) || ad(dd, pd))
    }

    function ad(dd, Jd) {
      const kd = {
          code: Jd,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        pd = Nd;
      Nd = kd;
      try {
        Md(Jd, !1, dd, kd)
      } finally {
        Nd = pd
      }
    }

    function Md(dd, Jd, kd, pd) {
      var Nd = kd._keyBindmap[dd];
      Nd && (Fd(kd._keyStates[dd], Jd) && (kd._keyStates[dd] = Jd, Nd.forEach((dd => {
        (!kd.filterEvents || kd.filterEvents(pd, dd)) && function(dd, Jd, kd, pd) {
          var Nd = Jd ? kd.pressCount : kd.releaseCount;
          Nd[dd] = (Nd[dd] || 0) + 1;
          var Wd = kd._bindPressCount[dd] || 0;
          (Wd += Jd ? 1 : -1) < 0 && (Wd = 0);
          kd._bindPressCount[dd] = Wd;
          var Pd = kd.state[dd];
          if (Fd(Pd, Wd)) {
            kd.state[dd] = Wd > 0;
            var Zd = Jd ? kd.down : kd.up;
            kd.disabled || Zd.emit(dd, pd)
          }
        }(dd, Jd, kd, pd)
      }))), "button" in pd || (kd.Qr && !pd.defaultPrevented && pd.preventDefault(), kd.stopPropagation && pd.stopPropagation()))
    }

    function Fd(dd, Jd) {
      return dd ? !Jd : Jd
    }
  },
  36848: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Od,
      e: () => ed
    });
    var pd = kd(56),
      Nd = kd(1459),
      Wd = kd(1968),
      Pd = kd(36798),
      Zd = kd(610),
      gd = kd(1044),
      Cd = kd.n(gd),
      Kd = kd(1103);
    const od = [ld()];

    function ld() {
      return {
        source: null,
        direction: null,
        dD: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function Qd(dd) {
      return od.find((Jd => null !== Jd.source && Jd.source === dd))
    }

    function Ld(dd) {
      clearTimeout(dd.timeout), dd.source = null, dd.direction = null, dd.writtenAngle = null, dd.dD && (dd.dD.style.rotate = "")
    }
    const Od = (0, pd.memo)((function() {
      const [, dd] = (0, pd.useReducer)((dd => dd + 1), 0);
      return (0, Nd.h)("damagedByOtherPlayer", (Jd => {
        let {
          Yp: kd,
          direction: pd
        } = Jd;
        const Nd = kd || "nonDirectional",
          Wd = function(dd) {
            var Jd;
            const kd = null !== (Jd = Qd(dd)) && void 0 !== Jd ? Jd : od.find((dd => null === dd.source));
            if (kd) return kd;
            const pd = {
              source: null,
              direction: null,
              dD: null,
              timeout: void 0,
              writtenAngle: null
            };
            return od.push(pd), pd
          }(Nd);
        clearTimeout(Wd.timeout), Wd.source = Nd, Wd.direction = pd, Wd.timeout = setTimeout((() => {
          Ld(Wd), dd()
        }), 800), dd()
      })), (0, Wd.d)("kill", (Jd => {
        let {
          killer: kd,
          victim: pd
        } = Jd;
        const Nd = kd.local && Qd(pd.id);
        Nd && (Ld(Nd), dd())
      })), (0, pd.useEffect)((() => {
        const dd = (0, Pd.i)("turnDamageIndicators", ed);
        return () => {
          dd(), od.forEach(Ld)
        }
      }), []), (0, Kd.jsx)("div", {
        className: "DirectionalDamage",
        children: od.map(((dd, Jd) => (0, Kd.jsx)("div", {
          ref: Jd => {
            dd.dD = Jd
          },
          className: Cd()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, Zd.I)(dd.direction),
            DamageIndicatorIdle: null === dd.source
          })
        }, Jd)))
      })
    }));

    function ed(dd) {
      for (const Jd of od) {
        if (null === Jd.source || (0, Zd.I)(Jd.direction)) continue;
        const kd = Jd.direction - dd;
        kd !== Jd.writtenAngle && (Jd.writtenAngle = kd, Jd.dD.style.rotate = `${kd}rad`)
      }
    }
  },
  36660: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Nd,
      i: () => Wd
    });
    let pd = !1;

    function Nd() {
      return pd
    }

    function Wd(dd) {
      return pd !== dd && (pd = dd, !0)
    }
  },
  9176: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Wd,
      i: () => Nd
    });
    var pd = kd(22);

    function Nd(dd, Jd) {
      return dd && !Jd
    }

    function Wd() {
      return Nd(pd.d.get("isTouchScreen"), pd.d.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  40661: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      startPadGameplay: () => xd
    });
    kd(40537);
    var pd = kd(40543),
      Nd = kd(3624),
      Wd = kd(22),
      Pd = kd(39224),
      Zd = kd(3566),
      gd = kd(39240),
      Cd = kd(29),
      Kd = kd(2634),
      od = kd(38574),
      ld = kd(8771),
      Qd = kd(40548);
    const Ld = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var Od = kd(40566),
      ed = kd(8740),
      Rd = kd(39252);
    const Id = dd => dd.padSneakToggled || !!Wd.d.get("clientEscMenuOptions").crouchIsToggle && dd.crouchToggled,
      Gd = () => {
        const dd = (() => {
          const dd = (0, ld.e)();
          let Jd = Ld;
          const kd = new Qd.d;
          let pd = !1,
            Nd = 0;
          const Wd = () => {
            const kd = performance.now(),
              Wd = 0 === Nd ? 0 : kd - Nd;
            if (Nd = kd, !pd) return dd.discardPending(), null;
            const Pd = (0, Qd.q)(Jd, Wd),
              Zd = dd.drainLookDelta(),
              gd = (0, od.i)();
            return {
              bY: (Pd.bY + Zd.bY) * gd,
              fY: (Pd.fY + Zd.fY) * gd
            }
          };
          return {
            update: (dd, Nd, Pd, Zd) => {
              dd.camera.ZH !== Wd && (dd.camera.ZH = Wd), pd = !0, Jd = (0, Qd.s)(kd, Nd, Pd, Zd, performance.now())
            },
            release: () => {
              pd = !1, Jd = Ld, kd.reset()
            },
            uninstall: dd => {
              dd.camera.ZH === Wd && (dd.camera.ZH = null)
            }
          }
        })();
        return {
          update: (Jd, kd, pd) => {
            dd.update((0, Kd.e)(), Jd, kd, pd)
          },
          release: dd.release,
          uninstall: () => {
            const Jd = (0, Kd.e)();
            Jd && dd.uninstall(Jd)
          }
        }
      };
    var vd = kd(40558);
    kd(37886), kd(8630);
    kd(8646).d;
    const xd = () => {
      const dd = (0, vd.c)((() => {
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
            bodies: () => (0, Pd.b)(),
            look: Gd(),
            move: (Jd, kd) => {
              const pd = (0, Kd.e)(),
                Nd = pd.vG.okd();
              if (dd.x = Jd.x, dd.y = Jd.y, dd.magnitude = Jd.magnitude, dd.headingOffset = Jd.headingOffset, dd.jumpHeld = Jd.jumpHeld, Jd.jumpPressed && (dd.jumpPressedSinceTick = !0), dd.running = Jd.running, dd.sprintHeld = Jd.sprintHeld, kd) {
                const Jd = (0, Od.d)({
                  ...kd,
                  descending: pd.vG.RJd(pd.kU).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!pd.lG.canCrouch,
                  toggled: Id(Nd)
                });
                dd.crouchHeld = Jd.crouchHeld, Nd.padSneakToggled = Jd.toggled, Nd.crouchToggled = !1, (0, ed.e)(Jd.toggled)
              }
              Nd.gamepad = dd
            },
            stopMoving: () => {
              var Jd;
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
              const kd = null === (Jd = (0, Kd.e)()) || void 0 === Jd ? void 0 : Jd.vG.okd();
              (null === kd || void 0 === kd ? void 0 : kd.gamepad) === dd && (kd.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: dd => {
              const Jd = (0, Kd.e)(),
                kd = null === Jd || void 0 === Jd ? void 0 : Jd.vG.okd();
              "touch" === dd ? ((0, ed.e)(!1), null !== kd && void 0 !== kd && kd.padSneakToggled && (kd.padSneakToggled = !1, kd.isTouchscreen && !kd.gamepad && Jd.vG.nJd(Jd.kU).setCrouching(!!Jd.lG.canCrouch && kd.touchCrouch))) : "gamepad" === dd && kd && (0, ed.e)(Id(kd))
            },
            hasPlayer: () => {
              var dd;
              return !(null === (dd = (0, Kd.e)()) || void 0 === dd || !dd.kU)
            },
            isPlayerDead: () => {
              var dd;
              const Jd = (0, Kd.e)();
              return !1 === (null === (dd = Jd.vG.Nkd(Jd.kU)) || void 0 === dd ? void 0 : dd.isAlive)
            },
            isReplayMode: () => {
              var dd, Jd;
              return !(null === (dd = (0, Kd.d)()) || void 0 === dd || null === (Jd = dd.client) || void 0 === Jd || !Jd.isReplayMode())
            },
            isFreeCameraOn: () => {
              var dd, Jd, kd;
              return !(null === (dd = (0, Kd.d)()) || void 0 === dd || null === (Jd = dd.client) || void 0 === Jd || null === (kd = Jd.freeCameraController) || void 0 === kd || !kd.isEnabled())
            },
            targetsBlock: () => !!(0, Kd.e)().Ddd,
            selectedSlotEmpty: () => {
              var dd;
              const Jd = (0, Kd.e)();
              return !(null !== (dd = Jd.vG.yJd(Jd.kU)) && void 0 !== dd && dd.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const dd = (0, Kd.e)().lG;
              return !!dd.creative && !!dd.canPickBlocks
            },
            scrollHotbar: dd => {
              Cd.j.nO("ScrollInventorySlot", dd)
            },
            hasFullInventory: () => (0, gd.c)((0, Kd.e)()),
            hasLobbyTab: () => (0, Rd.e)((0, Kd.e)().lG),
            contextActionInputs: () => {
              var dd, Jd, kd, pd;
              const Nd = (0, Kd.e)();
              return {
                holdingGun: !(null === (dd = Nd.vG.Wkd(Nd.kU)) || void 0 === dd || null === (Jd = dd.Dv) || void 0 === Jd || !Jd.isGun()),
                customButtons: null !== (kd = Nd.lG.customButtons) && void 0 !== kd ? kd : null,
                touchscreenActionButton: null !== (pd = Nd.lG.touchscreenActionButton) && void 0 !== pd ? pd : null
              }
            },
            pressTouchButton: dd => {
              (0, Zd.sendColyMessage)(Nd.Uj, dd)
            }
          }
        })()),
        Jd = (0, pd.e)(),
        kd = null,
        Wd = null;
      return () => {
        dd(), Jd(), null === kd || void 0 === kd || kd(), null === Wd || void 0 === Wd || Wd()
      }
    }
  },
  36783: (dd, Jd, kd) => {
    kd.d(Jd, {
      B: () => Ld,
      D: () => Id,
      e: () => Wd,
      h: () => Od,
      i: () => ed,
      m: () => Zd,
      o: () => ld,
      s: () => Rd,
      w: () => od,
      x: () => Gd
    });
    var pd = kd(22),
      Nd = kd(29);
    const Wd = "clientGameInventoryButtonsChanged",
      Pd = new Map;

    function Zd() {
      return [...Pd.values()].sort(((dd, Jd) => {
        var kd, pd;
        return (null !== (kd = dd.order) && void 0 !== kd ? kd : 0) - (null !== (pd = Jd.order) && void 0 !== pd ? pd : 0)
      }))
    }
    let gd = null;

    function Cd(dd) {
      gd = dd
    }
    let Kd = !1;

    function od(dd) {
      Kd = !0;
      try {
        dd.onClick()
      } finally {
        Kd = !1
      }
      dd.panel && "clientGame" === pd.d.get("openInGameMenuName") && Cd(dd.id)
    }

    function ld() {
      return Kd
    }

    function Qd() {
      return Zd().filter((dd => dd.panel && !dd.disabled))
    }

    function Ld(dd) {
      const Jd = Qd(),
        kd = Jd.findIndex((dd => dd.id === gd));
      return !(kd < 0 || Jd.length < 2) && (od(Jd[(kd + dd + Jd.length) % Jd.length]), !0)
    }

    function Od() {
      return null !== gd && Qd().length > 1
    }

    function ed() {
      Cd(null)
    }

    function Rd() {
      "inventory" !== pd.d.get("openInGameMenuName") && Cd(null)
    }

    function Id() {
      const dd = gd;
      return Cd(null), dd
    }

    function Gd(dd) {
      return Pd.set(dd.id, dd), Nd.j.nO(Wd, Zd(), !0), () => {
        Pd.get(dd.id) === dd && (Pd.delete(dd.id), Nd.j.nO(Wd, Zd()))
      }
    }
  },
  36779: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Zd,
      g: () => ed,
      j: () => Rd,
      m: () => ld,
      o: () => Cd,
      p: () => Od,
      t: () => Qd,
      w: () => Kd
    });
    var pd = kd(22),
      Nd = kd(29),
      Wd = kd(1307),
      Pd = kd(36783);
    const Zd = "clientGameUiChanged";
    let gd = null;

    function Cd() {
      return gd
    }

    function Kd(dd, Jd) {
      const kd = {
        content: dd,
        menu: Jd
      };
      return gd = kd, Nd.j.nO(Zd, gd, !0), () => {
        gd === kd && (gd = null, Ld = !1, ed(), Nd.j.nO(Zd, null))
      }
    }
    let od = null;

    function ld() {
      return od
    }

    function Qd(dd) {
      return od = dd, () => {
        od === dd && (od = null)
      }
    }
    let Ld = !1;

    function Od() {
      const dd = pd.d.get("openInGameMenuName");
      "clientGame" !== dd && (Ld = "inventory" === dd), (0, Pd.o)() || (0, Pd.i)(), (0, Wd.p)(Wd.d), pd.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function ed() {
      Id(!1)
    }

    function Rd() {
      Id(Ld)
    }

    function Id(dd) {
      "clientGame" === pd.d.get("openInGameMenuName") && pd.d.set({
        openInGameMenuName: dd ? "inventory" : null
      }), dd || (0, Pd.i)(), Ld = !1
    }
  },
  36657: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => gd
    });
    var pd = kd(300),
      Nd = kd(22),
      Wd = kd(36660),
      Pd = kd(1670),
      Zd = kd(1975);

    function gd(dd, Jd) {
      var kd, gd, Cd;
      if (!Nd.d.get("isKeydownEnabled") || dd.repeat) return;
      const Kd = dd.code;
      "Escape" === dd.key ? (0, Pd.i)(dd) : null !== (kd = Zd.x.OpenSettings) && void 0 !== kd && kd.includes(Kd) ? (0, Pd.t)(dd, pd.s.SETTINGS) : null !== (gd = Zd.x.OpenCharacterCustomization) && void 0 !== gd && gd.includes(Kd) ? (0, Wd.e)() || (0, Pd.t)(dd, pd.s.CUSTOMISATION, Jd()) : null !== (Cd = Zd.x.ShowDebugOverlay) && void 0 !== Cd && Cd.includes(Kd) && Nd.d.set({
        showDebugOverlay: !Nd.d.get("showDebugOverlay")
      })
    }
  },
  36640: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => ld,
      g: () => Kd,
      k: () => Qd,
      n: () => od
    });
    var pd = kd(313),
      Nd = kd(638),
      Wd = kd(648),
      Pd = kd(33);
    const Zd = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      gd = "playSessionGameNameWithVariation",
      Cd = "wasMatchmakePlayer";

    function Kd() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pd.k;
      (0, Wd.i)(dd, Zd)
    }

    function od() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pd.k).setItem(Cd, !0)
    }

    function ld() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pd.k;
      return (0, Wd.d)(dd, Zd)
    }

    function Qd(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Pd.k;
      const kd = (0, Wd.d)(Jd, Zd),
        Kd = function(dd) {
          const Jd = dd.getItem(gd);
          return "string" !== typeof Jd ? null : Jd
        }(Jd),
        od = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pd.k).getItem(Cd)
        }(Jd);
      let ld;
      return ld = null !== kd && null !== Kd && (0, Wd.g)(Jd, Zd) && function(dd, Jd, kd) {
          const Nd = (0, pd._b)(dd),
            Wd = (0, pd._b)(Jd),
            Pd = (0, pd.Vb)(dd),
            Zd = (0, pd.Vb)(Jd);
          return !(Nd !== Wd || !kd) || Nd === Wd && Pd === Zd
        }(Kd, dd, od) ? kd : (0, Nd.e)(), (0, Wd.j)(Jd, Zd, ld), Jd.setItem(gd, dd),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pd.k).removeItem(Cd)
        }(Jd), ld
    }
  },
  36631: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Id,
      g: () => Gd
    });
    var pd = kd(1013),
      Nd = kd(614),
      Wd = kd(313),
      Pd = kd(1016),
      Zd = kd(626),
      gd = kd(661),
      Cd = kd(4379),
      Kd = kd(95),
      od = kd(126),
      ld = kd(1753),
      Qd = kd(108),
      Ld = kd(36640),
      Od = kd(33),
      ed = kd(645),
      Rd = kd(36645);

    function Id() {
      var dd, Jd;
      return [...null !== (dd = navigator.languages) && void 0 !== dd ? dd : [null !== (Jd = navigator.language) && void 0 !== Jd ? Jd : "none"], "EN-gb"]
    }

    function Gd(dd, Jd, kd, Gd, vd) {
      const xd = (0, pd.i)(Jd) ? (0, pd.o)(Jd) : null,
        qd = {
          cookies: (0, ld.getAllCookiesForGameNameWithVariation)(Jd),
          isMobile: (0, Kd.isMobile)(),
          isUsingCustomGameTexturePack: null !== xd && vd(xd),
          generalCookies: {
            joinDiscord: !!Od.i.getItem("DiscordPressed"),
            newGo: Cd.b,
            ...dd.getMetricsCookies(),
            trafficCode: Gd,
            compliance: Kd.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, Kd.getBrowserName)(),
            version: (0, Kd.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, Kd.getPlatformType)(),
            deviceType: (0, Qd.e)()
          },
          isLoggedIn: dd.isLoggedIn(),
          lobbyName: kd,
          languages: Id(),
          version: Nd.c,
          siteUsed: od.t,
          subsiteUsed: od.A,
          playSessionId: (0, Ld.k)(Jd),
          visitSessionId: (0, ed.d)(),
          clientReason: Zd.l.reason,
          budgetBasis: (0, Rd.h)(),
          ...null !== gd.n && {
            diagClaim: gd.n.claimId
          }
        };
      return null !== xd && (0, Wd.Kc)(xd) ? (qd.lobbyName = (0, pd.g)(xd, (0, pd.l)(Jd), kd), {
        roomName: `classic_${Pd.d}`,
        joinOptions: qd
      }) : {
        roomName: Jd,
        joinOptions: qd
      }
    }
  },
  36453: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => pd,
      f: () => Nd,
      j: () => Wd,
      l: () => Pd
    });
    const pd = 1024,
      Nd = 1024 * pd;

    function Wd(dd) {
      return 2 ** Math.floor(Math.log2(Math.max(1, dd / Nd)))
    }

    function Pd(dd) {
      return (dd / Nd).toFixed(1)
    }
  },
  36651: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Wd,
      e: () => Zd,
      h: () => Pd,
      j: () => gd,
      l: () => Cd,
      m: () => Kd
    });
    var pd = kd(193);
    const Nd = 32 * kd(36453).f,
      Wd = 6144,
      Pd = 4608,
      Zd = 512;

    function gd(dd) {
      return Math.floor(Nd * dd / Wd)
    }

    function Cd(dd) {
      const Jd = dd - Math.floor(dd / 6);
      let kd = pd.g.maxChunkHorizAddDistance,
        Nd = pd.g.maxChunkVertAddDistance;
      if (Kd(kd + 1, Nd + 1) <= Jd) return null;
      for (; Kd(kd + 1, Nd + 1) > Jd && (kd > 0 || Nd > 0);) kd > Nd ? kd-- : Nd--;
      return {
        horizontal: kd,
        vertical: Nd
      }
    }

    function Kd(dd, Jd) {
      const kd = Math.max(dd, Jd);
      let pd = 0;
      for (let Nd = -kd; Nd <= kd; Nd++)
        for (let Wd = -kd; Wd <= kd; Wd++)
          for (let Pd = -kd; Pd <= kd; Pd++) od(dd, Jd, Nd, Wd, Pd) && pd++;
      return pd
    }

    function od(dd, Jd, kd, pd, Nd) {
      const Wd = kd * kd + Nd * Nd;
      return dd === Jd ? Wd + pd * pd <= dd * dd : dd > Jd ? Math.abs(pd) <= Jd && Wd + pd * pd <= dd * dd : Wd <= dd * dd && Wd + pd * pd <= Jd * Jd
    }
  },
  36645: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => qd,
      h: () => xd,
      i: () => vd
    });
    var pd = kd(193),
      Nd = kd(95),
      Wd = kd(2788),
      Pd = kd(4242),
      Zd = kd(632),
      gd = kd(36651);
    const Cd = 1048576,
      Kd = 1024 * Cd,
      od = 400 * Cd,
      ld = 147456,
      Qd = .5,
      Ld = 1.5 * Kd,
      Od = 768 * Cd;

    function ed(dd) {
      return od + dd * ld
    }

    function Rd(dd, Jd, kd) {
      var Nd, Pd;
      let {
        footprintBytes: Zd,
        basis: Cd,
        namesLimit: Rd
      } = function(dd) {
        const {
          os: Jd,
          deviceMemory: kd
        } = dd;
        if ("ios" === Jd) switch ((0, Wd.g)(dd)) {
          case "ipad_m":
            return {
              footprintBytes: ed(gd.d), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: Od, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: Ld, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: Od, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof kd && Number.isFinite(kd) && kd > 0 ? {
          footprintBytes: kd * Kd * Qd,
          basis: `memory-${kd}`,
          namesLimit: !0
        } : "android" === Jd ? {
          footprintBytes: Od,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: ed(gd.h),
          basis: "unreported",
          namesLimit: !1
        }
      }(dd);
      if (kd) {
        const dd = Math.min(Zd, ed(gd.d));
        Zd = od + Math.max(0, dd - od) / 2, Cd += "+killed", Rd = !0
      }
      null !== Jd && ed(Jd) < Zd && (Zd = ed(Jd), Cd += "+learned", Rd = !0);
      const Id = function(dd) {
          const Jd = Math.floor((dd - od) / ld);
          return Math.min(gd.d, Math.max(gd.e, Jd))
        }(Zd),
        Gd = (0, gd.l)(Id);
      return {
        footprintBytes: Zd,
        shedFootprintBytes: Rd ? Math.max(Zd, ed(Id)) : null,
        chunkCap: Id,
        maxHorizDistance: null !== (Nd = null === Gd || void 0 === Gd ? void 0 : Gd.horizontal) && void 0 !== Nd ? Nd : pd.g.maxChunkHorizAddDistance,
        maxVertDistance: null !== (Pd = null === Gd || void 0 === Gd ? void 0 : Gd.vertical) && void 0 !== Pd ? Pd : pd.g.maxChunkVertAddDistance,
        basis: Cd
      }
    }
    let Id = null;

    function Gd() {
      return Rd({
        os: (0, Nd.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, Wd.i)()
      }, (0, Pd.d)(), (0, Zd.F)("wasm").length > 0)
    }

    function vd() {
      return Id ??= Gd(), Id
    }

    function xd() {
      var dd;
      return (null !== (dd = Id) && void 0 !== dd ? dd : Gd()).basis
    }

    function qd(dd, Jd) {
      return dd.setChunkCap(Jd.chunkCap)
    }
  },
  37041: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Nd,
      d: () => Wd,
      e: () => ld,
      f: () => Zd,
      j: () => gd,
      n: () => Cd,
      p: () => od,
      s: () => Kd,
      v: () => Pd
    });
    var pd = kd(1260);
    let Nd = function(dd) {
        return dd[dd.Join = 0] = "Join", dd[dd.Leave = 1] = "Leave", dd[dd.Push = 2] = "Push", dd[dd.Cursor = 3] = "Cursor", dd[dd.Submit = 4] = "Submit", dd[dd.ReloadAsVariation = 5] = "ReloadAsVariation", dd[dd.CreateFile = 6] = "CreateFile", dd[dd.RenameFile = 7] = "RenameFile", dd[dd.DeleteFile = 8] = "DeleteFile", dd[dd.SetEngine = 9] = "SetEngine", dd[dd.RenameFolder = 10] = "RenameFolder", dd
      }({}),
      Wd = function(dd) {
        return dd[dd.Joined = 0] = "Joined", dd[dd.Updates = 1] = "Updates", dd[dd.Presence = 2] = "Presence", dd[dd.RemoteCursor = 3] = "RemoteCursor", dd[dd.ForceClose = 4] = "ForceClose", dd[dd.LobbyFilesChanged = 5] = "LobbyFilesChanged", dd[dd.EngineSettings = 6] = "EngineSettings", dd
      }({});

    function Pd(dd) {
      return "lobby" === dd.kind ? `lobby:${dd.path}` : `codeBlock:${dd.pos[0]},${dd.pos[1]},${dd.pos[2]}`
    }

    function Zd(dd) {
      if ("lobby" === dd) return {
        kind: "lobby",
        path: pd.h
      };
      if (dd.startsWith("lobby:")) {
        const Jd = dd.slice(6);
        return od(Jd) ? {
          kind: "lobby",
          path: Jd
        } : null
      }
      const Jd = dd.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return Jd ? {
        kind: "codeBlock",
        pos: [parseInt(Jd[1]), parseInt(Jd[2]), parseInt(Jd[3])]
      } : null
    }

    function gd(dd) {
      return dd.endsWith(".d.ts")
    }

    function Cd(dd) {
      return dd.endsWith(".ts") && !gd(dd)
    }
    const Kd = 64;

    function od(dd) {
      if (!dd || dd !== dd.trim()) return !1;
      if (dd.length > Kd) return !1;
      if (dd.startsWith("/") || dd.includes("\\") || dd.includes("\0")) return !1;
      if (!gd(dd) && !Cd(dd) && ! function(dd) {
          return dd.endsWith(".js") && !dd.endsWith(".min.js") && !dd.endsWith(".bundle.js")
        }(dd)) return !1;
      const Jd = dd.split("/");
      for (const kd of Jd)
        if ("" === kd || "." === kd || ".." === kd) return !1;
      return !0
    }
    const ld = 14e3
  },
  39188: (dd, Jd, kd) => {
    function pd(dd, Jd, kd, pd, Nd) {
      var Wd = {};
      return Object.keys(pd).forEach((function(dd) {
        Wd[dd] = pd[dd]
      })), Wd.enumerable = !!Wd.enumerable, Wd.configurable = !!Wd.configurable, ("value" in Wd || Wd.initializer) && (Wd.writable = !0), Wd = kd.slice().reverse().reduce((function(kd, pd) {
        return pd(dd, Jd, kd) || kd
      }), Wd), Nd && void 0 !== Wd.initializer && (Wd.value = Wd.initializer ? Wd.initializer.call(Nd) : void 0, Wd.initializer = void 0), void 0 === Wd.initializer && (Object.defineProperty(dd, Jd, Wd), Wd = null), Wd
    }
    kd.d(Jd, {
      d: () => pd
    })
  },
  39184: (dd, Jd, kd) => {
    function pd(dd, Jd, kd, pd) {
      kd && Object.defineProperty(dd, Jd, {
        enumerable: kd.enumerable,
        configurable: kd.configurable,
        writable: kd.writable,
        value: kd.initializer ? kd.initializer.call(pd) : void 0
      })
    }
    kd.d(Jd, {
      b: () => pd
    })
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);