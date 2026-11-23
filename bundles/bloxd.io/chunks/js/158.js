export const id = 158;
export const ids = [158];
export const modules = {
  39113: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => lk,
      c: () => ik
    });
    var Xk = Ik(4062);
    let Tk = null;

    function ik(kk) {
      return null !== Tk && kk === Tk
    }

    function yk() {
      this.dW = !1, this.stopPropagation = !1, this.rW = !1, this.disabled = !1
    }
    class lk {
      constructor(kk, Fk) {
        this.version = "0.7.0";
        var Ik = Object.assign({}, new yk, Fk || {});
        this.element = kk || document, this.dW = !!Ik.dW, this.stopPropagation = !!Ik.stopPropagation, this.rW = !!Ik.rW, this.disabled = !!Ik.disabled, this.filterEvents = (kk, Fk) => !0, this.ignoreEvent = kk => !1, this.down = new Xk.EventEmitter, this.up = new Xk.EventEmitter, this.state = {}, this.XB = {
          dx: 0,
          dy: 0,
          iFk: 0,
          yFk: 0,
          lFk: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? qk(this) : document.addEventListener("DOMContentLoaded", (kk => {
          qk(this)
        }), {
          once: !0
        })
      }
      bind(kk) {
        for (var Fk = arguments.length, Ik = new Array(Fk > 1 ? Fk - 1 : 0), Xk = 1; Xk < Fk; Xk++) Ik[Xk - 1] = arguments[Xk];
        Ik.forEach((Fk => {
          var Ik = this._keyBindmap[Fk] || [];
          Ik.includes(kk) || (Ik.push(kk), this._keyBindmap[Fk] = Ik)
        })), this.state[kk] = !!this.state[kk], this.pressCount[kk] = this.pressCount[kk] || 0, this.releaseCount[kk] = this.releaseCount[kk] || 0
      }
      unbind(kk) {
        for (var Fk in this._keyBindmap) {
          var Ik = this._keyBindmap[Fk],
            Xk = Ik.indexOf(kk);
          Xk > -1 && Ik.splice(Xk, 1)
        }
      }
      getBindings() {
        var kk = {};
        for (var Fk in this._keyBindmap) {
          this._keyBindmap[Fk].forEach((Ik => {
            kk[Ik] = kk[Ik] || [], kk[Ik].push(Fk)
          }))
        }
        return kk
      }
      Dt() {
        ak(this.XB), ak(this.pressCount), ak(this.releaseCount)
      }
    }

    function ak(kk) {
      for (var Fk in kk) kk[Fk] = 0
    }

    function qk(kk) {
      window.addEventListener("keydown", Hk.bind(null, kk, !0), !1), window.addEventListener("keyup", Hk.bind(null, kk, !1), !1);
      var Fk = {
        passive: !0
      };
      kk.element.addEventListener("touchstart", jk.bind(void 0, kk), {
        passive: !1
      }), kk.element.addEventListener("touchend", wk.bind(void 0, kk), Fk), kk.element.addEventListener("mousedown", Jk.bind(null, kk, !0), Fk), window.document.addEventListener("mouseup", Jk.bind(null, kk, !1), Fk), kk.element.addEventListener("touchmove", xk.bind(null, kk), Fk), kk.element.addEventListener("mousemove", xk.bind(null, kk), Fk), window.PointerEvent, kk.element.addEventListener("wheel", Pk.bind(null, kk), Fk), kk.element.addEventListener("contextmenu", Kk.bind(null, kk), !1), window.addEventListener("blur", Vk.bind(null, kk), !1)
    }
    var Lk = 0,
      tk = 0,
      Zk = null;

    function jk(kk, Fk) {
      Fk.preventDefault(), ek(Fk)
    }

    function ek(kk) {
      let Fk = !1;
      for (let Ik = 0; Ik < kk.touches.length; ++Ik)
        if (kk.touches[Ik].identifier === Zk) {
          Fk = !0;
          break
        } if (!Fk) {
        const Fk = kk.changedTouches[0];
        Lk = Fk.clientX, tk = Fk.clientY, Zk = Fk.identifier
      }
    }

    function wk(kk, Fk) {
      for (var Ik = Fk.changedTouches, Xk = 0; Xk < Ik.length; ++Xk) Ik[Xk].identifier === Zk && (Zk = null)
    }

    function Hk(kk, Fk, Ik) {
      if (!kk.ignoreEvent(Ik)) try {
        zk(kk, Ik), Fk && Ik.isTrusted && !Ik.repeat && kk._keyStates[Ik.code] && Sk(kk, Ik.code)
      } finally {
        vk(Ik.code, Fk, kk, Ik)
      }
    }

    function Jk(kk, Fk, Ik) {
      if (!kk.ignoreEvent(Ik)) try {
        zk(kk, Ik)
      } finally {
        ! function(kk, Fk, Ik) {
          if ("pointerId" in Ik)
            if (Fk) {
              if (null !== kk._touches.currID) return;
              kk._touches.currID = Ik.pointerId
            } else {
              if (kk._touches.currID !== Ik.pointerId) return;
              kk._touches.currID = null
            } var Xk = "button" in Ik ? Ik.button + 1 : 1;
          vk("Mouse" + Xk, Fk, kk, Ik)
        }(kk, Fk, Ik)
      }
    }

    function xk(kk, Fk) {
      var Ik = Fk.movementX || Fk.mozMovementX || 0,
        Xk = Fk.movementY || Fk.mozMovementY || 0;
      if (Fk.touches && 0 === (Ik | Xk)) {
        var Tk = function(kk) {
          ek(kk);
          for (let Fk = 0; Fk < kk.changedTouches.length; ++Fk)
            if (kk.changedTouches[Fk].identifier == Zk) {
              const Ik = kk.changedTouches[Fk],
                Xk = [Ik.clientX - Lk, Ik.clientY - tk];
              return Lk = Ik.clientX, tk = Ik.clientY, Xk
            } return console.error(`Did not find touch id ${Zk}`), [0, 0]
        }(Fk);
        Ik = Tk[0], Xk = Tk[1]
      }
      kk.XB.dx += Ik, kk.XB.dy += Xk
    }

    function Pk(kk, Fk) {
      zk(kk, Fk);
      var Ik = 1;
      switch (Fk.deltaMode) {
        case 0:
          Ik = 1;
          break;
        case 1:
          Ik = 12;
          break;
        case 2:
          Ik = kk.element.clientHeight || window.innerHeight
      }
      kk.XB.iFk += (Fk.deltaX || 0) * Ik, kk.XB.yFk += (Fk.deltaY || 0) * Ik, kk.XB.lFk += (Fk.deltaZ || 0) * Ik
    }

    function Kk(kk, Fk) {
      if (!kk.rW) return Fk.preventDefault(), !1
    }
    var Qk = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function sk(kk, Fk) {
      return !!kk[Qk[Fk]] || ("AltRight" === Fk || "ControlLeft" === Fk) && "function" === typeof kk.getModifierState && !0 === kk.getModifierState("AltGraph")
    }

    function Vk(kk, Fk) {
      for (var Ik in kk._modifiersHeldThroughBlur = {}, Qk) kk._keyStates[Ik] && (kk._modifiersHeldThroughBlur[Ik] = !0);
      Fk && Fk.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (kk) {
          return !0
        }
      }() && (clearTimeout(kk._blurRelease), kk._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var Fk in kk._modifiersHeldThroughBlur = {}, kk._keyStates) kk._keyStates[Fk] && !/^Mouse\d/.test(Fk) && Sk(kk, Fk)
      }), 0))
    }

    function zk(kk, Fk) {
      var Ik = kk._modifiersHeldThroughBlur;
      if (Ik && Fk.isTrusted && document.hasFocus())
        for (var Xk in Ik) delete Ik[Xk], kk._keyStates[Xk] && Xk !== Fk.code && (sk(Fk, Xk) || Sk(kk, Xk))
    }

    function Sk(kk, Fk) {
      const Ik = {
          code: Fk,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        Xk = Tk;
      Tk = Ik;
      try {
        vk(Fk, !1, kk, Ik)
      } finally {
        Tk = Xk
      }
    }

    function vk(kk, Fk, Ik, Xk) {
      var Tk = Ik._keyBindmap[kk];
      Tk && (Ek(Ik._keyStates[kk], Fk) && (Ik._keyStates[kk] = Fk, Tk.forEach((kk => {
        (!Ik.filterEvents || Ik.filterEvents(Xk, kk)) && function(kk, Fk, Ik, Xk) {
          var Tk = Fk ? Ik.pressCount : Ik.releaseCount;
          Tk[kk] = (Tk[kk] || 0) + 1;
          var ik = Ik._bindPressCount[kk] || 0;
          (ik += Fk ? 1 : -1) < 0 && (ik = 0);
          Ik._bindPressCount[kk] = ik;
          var yk = Ik.state[kk];
          if (Ek(yk, ik)) {
            Ik.state[kk] = ik > 0;
            var lk = Fk ? Ik.down : Ik.up;
            Ik.disabled || lk.emit(kk, Xk)
          }
        }(kk, Fk, Ik, Xk)
      }))), "button" in Xk || (Ik.dW && !Xk.defaultPrevented && Xk.preventDefault(), Ik.stopPropagation && Xk.stopPropagation()))
    }

    function Ek(kk, Fk) {
      return kk ? !Fk : Fk
    }
  },
  36675: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => wk,
      e: () => Hk
    });
    var Xk = Ik(58),
      Tk = Ik(1402),
      ik = Ik(1907),
      yk = Ik(36620),
      lk = Ik(628),
      ak = Ik(1055),
      qk = Ik.n(ak),
      Lk = Ik(1096);
    const tk = [Zk()];

    function Zk() {
      return {
        source: null,
        direction: null,
        ZC: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function jk(kk) {
      return tk.find((Fk => null !== Fk.source && Fk.source === kk))
    }

    function ek(kk) {
      clearTimeout(kk.timeout), kk.source = null, kk.direction = null, kk.writtenAngle = null, kk.ZC && (kk.ZC.style.rotate = "")
    }
    const wk = (0, Xk.memo)((function() {
      const [, kk] = (0, Xk.useReducer)((kk => kk + 1), 0);
      return (0, Tk.d)("damagedByOtherPlayer", (Fk => {
        let {
          Mk: Ik,
          direction: Xk
        } = Fk;
        const Tk = Ik || "nonDirectional",
          ik = function(kk) {
            var Fk;
            const Ik = null !== (Fk = jk(kk)) && void 0 !== Fk ? Fk : tk.find((kk => null === kk.source));
            if (Ik) return Ik;
            const Xk = {
              source: null,
              direction: null,
              ZC: null,
              timeout: void 0,
              writtenAngle: null
            };
            return tk.push(Xk), Xk
          }(Tk);
        clearTimeout(ik.timeout), ik.source = Tk, ik.direction = Xk, ik.timeout = setTimeout((() => {
          ek(ik), kk()
        }), 800), kk()
      })), (0, ik.e)("kill", (Fk => {
        let {
          killer: Ik,
          victim: Xk
        } = Fk;
        const Tk = Ik.local && jk(Xk.id);
        Tk && (ek(Tk), kk())
      })), (0, Xk.useEffect)((() => {
        const kk = (0, yk.g)("turnDamageIndicators", Hk);
        return () => {
          kk(), tk.forEach(ek)
        }
      }), []), (0, Lk.jsx)("div", {
        className: "DirectionalDamage",
        children: tk.map(((kk, Fk) => (0, Lk.jsx)("div", {
          ref: Fk => {
            kk.ZC = Fk
          },
          className: qk()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, lk.Q)(kk.direction),
            DamageIndicatorIdle: null === kk.source
          })
        }, Fk)))
      })
    }));

    function Hk(kk) {
      for (const Fk of tk) {
        if (null === Fk.source || (0, lk.Q)(Fk.direction)) continue;
        const Ik = Fk.direction - kk;
        Ik !== Fk.writtenAngle && (Fk.writtenAngle = Ik, Fk.ZC.style.rotate = `${Ik}rad`)
      }
    }
  },
  36498: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Tk,
      d: () => ik
    });
    let Xk = !1;

    function Tk() {
      return Xk
    }

    function ik(kk) {
      return Xk !== kk && (Xk = kk, !0)
    }
  },
  34119: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => ik,
      d: () => Tk
    });
    var Xk = Ik(25);

    function Tk(kk, Fk) {
      return kk && !Fk
    }

    function ik() {
      return Tk(Xk.d.get("isTouchScreen"), Xk.d.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  40677: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      startPadGameplay: () => Qk
    });
    Ik(40546);
    var Xk = Ik(40554),
      Tk = Ik(3702),
      ik = Ik(25),
      yk = Ik(39073),
      lk = Ik(3631),
      ak = Ik(39094),
      qk = Ik(34),
      Lk = Ik(2700),
      tk = Ik(38417),
      Zk = Ik(8833),
      jk = Ik(40560);
    const ek = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var wk = Ik(40577),
      Hk = Ik(8814),
      Jk = Ik(39109);
    const xk = kk => kk.padSneakToggled || !!ik.d.get("clientEscMenuOptions").crouchIsToggle && kk.crouchToggled,
      Pk = () => {
        const kk = (() => {
          const kk = (0, Zk.c)();
          let Fk = ek;
          const Ik = new jk.b;
          let Xk = !1,
            Tk = 0;
          const ik = () => {
            const Ik = performance.now(),
              ik = 0 === Tk ? 0 : Ik - Tk;
            if (Tk = Ik, !Xk) return kk.discardPending(), null;
            const yk = (0, jk.o)(Fk, ik),
              lk = kk.drainLookDelta(),
              ak = (0, tk.l)();
            return {
              JG: (yk.JG + lk.JG) * ak,
              xG: (yk.xG + lk.xG) * ak
            }
          };
          return {
            update: (kk, Tk, yk, lk) => {
              kk.camera.sA !== ik && (kk.camera.sA = ik), Xk = !0, Fk = (0, jk.s)(Ik, Tk, yk, lk, performance.now())
            },
            release: () => {
              Xk = !1, Fk = ek, Ik.reset()
            },
            uninstall: kk => {
              kk.camera.sA === ik && (kk.camera.sA = null)
            }
          }
        })();
        return {
          update: (Fk, Ik, Xk) => {
            kk.update((0, Lk.e)(), Fk, Ik, Xk)
          },
          release: kk.release,
          uninstall: () => {
            const Fk = (0, Lk.e)();
            Fk && kk.uninstall(Fk)
          }
        }
      };
    var Kk = Ik(40570);
    Ik(37712), Ik(8703);
    Ik(8715).d;
    const Qk = () => {
      const kk = (0, Kk.b)((() => {
          const kk = {
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
            bodies: () => (0, yk.d)(),
            look: Pk(),
            move: (Fk, Ik) => {
              const Xk = (0, Lk.e)(),
                Tk = Xk.MJ.mFk();
              if (kk.x = Fk.x, kk.y = Fk.y, kk.magnitude = Fk.magnitude, kk.headingOffset = Fk.headingOffset, kk.jumpHeld = Fk.jumpHeld, Fk.jumpPressed && (kk.jumpPressedSinceTick = !0), kk.running = Fk.running, kk.sprintHeld = Fk.sprintHeld, Ik) {
                const Fk = (0, wk.h)({
                  ...Ik,
                  descending: Xk.MJ.FFk(Xk.oR).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!Xk.gJ.canCrouch,
                  toggled: xk(Tk)
                });
                kk.crouchHeld = Fk.crouchHeld, Tk.padSneakToggled = Fk.toggled, Tk.crouchToggled = !1, (0, Hk.g)(Fk.toggled)
              }
              Tk.gamepad = kk
            },
            stopMoving: () => {
              var Fk;
              Object.assign(kk, {
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
              const Ik = null === (Fk = (0, Lk.e)()) || void 0 === Fk ? void 0 : Fk.MJ.mFk();
              (null === Ik || void 0 === Ik ? void 0 : Ik.gamepad) === kk && (Ik.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: kk => {
              const Fk = (0, Lk.e)(),
                Ik = null === Fk || void 0 === Fk ? void 0 : Fk.MJ.mFk();
              "touch" === kk ? ((0, Hk.g)(!1), null !== Ik && void 0 !== Ik && Ik.padSneakToggled && (Ik.padSneakToggled = !1, Ik.isTouchscreen && !Ik.gamepad && Fk.MJ.KFk(Fk.oR).setCrouching(!!Fk.gJ.canCrouch && Ik.touchCrouch))) : "gamepad" === kk && Ik && (0, Hk.g)(xk(Ik))
            },
            hasPlayer: () => {
              var kk;
              return !(null === (kk = (0, Lk.e)()) || void 0 === kk || !kk.oR)
            },
            isPlayerDead: () => {
              var kk;
              const Fk = (0, Lk.e)();
              return !1 === (null === (kk = Fk.MJ.WFk(Fk.oR)) || void 0 === kk ? void 0 : kk.isAlive)
            },
            isReplayMode: () => {
              var kk, Fk;
              return !(null === (kk = (0, Lk.c)()) || void 0 === kk || null === (Fk = kk.client) || void 0 === Fk || !Fk.isReplayMode())
            },
            isFreeCameraOn: () => {
              var kk, Fk, Ik;
              return !(null === (kk = (0, Lk.c)()) || void 0 === kk || null === (Fk = kk.client) || void 0 === Fk || null === (Ik = Fk.freeCameraController) || void 0 === Ik || !Ik.isEnabled())
            },
            targetsBlock: () => !!(0, Lk.e)().Vkk,
            selectedSlotEmpty: () => {
              var kk;
              const Fk = (0, Lk.e)();
              return !(null !== (kk = Fk.MJ.sFk(Fk.oR)) && void 0 !== kk && kk.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const kk = (0, Lk.e)().gJ;
              return !!kk.creative && !!kk.canPickBlocks
            },
            scrollHotbar: kk => {
              qk.g.GL("ScrollInventorySlot", kk)
            },
            hasFullInventory: () => (0, ak.e)((0, Lk.e)()),
            hasLobbyTab: () => (0, Jk.b)((0, Lk.e)().gJ),
            contextActionInputs: () => {
              var kk, Fk, Ik, Xk;
              const Tk = (0, Lk.e)();
              return {
                holdingGun: !(null === (kk = Tk.MJ.fFk(Tk.oR)) || void 0 === kk || null === (Fk = kk.VK) || void 0 === Fk || !Fk.isGun()),
                customButtons: null !== (Ik = Tk.gJ.customButtons) && void 0 !== Ik ? Ik : null,
                touchscreenActionButton: null !== (Xk = Tk.gJ.touchscreenActionButton) && void 0 !== Xk ? Xk : null
              }
            },
            pressTouchButton: kk => {
              (0, lk.sendColyMessage)(Tk.pj, kk)
            }
          }
        })()),
        Fk = (0, Xk.c)(),
        Ik = null,
        ik = null;
      return () => {
        kk(), Fk(), null === Ik || void 0 === Ik || Ik(), null === ik || void 0 === ik || ik()
      }
    }
  },
  36607: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      C: () => xk,
      e: () => ik,
      i: () => wk,
      k: () => Hk,
      o: () => lk,
      q: () => Zk,
      r: () => Jk,
      v: () => tk,
      x: () => Pk,
      y: () => ek
    });
    var Xk = Ik(25),
      Tk = Ik(34);
    const ik = "clientGameInventoryButtonsChanged",
      yk = new Map;

    function lk() {
      return [...yk.values()].sort(((kk, Fk) => {
        var Ik, Xk;
        return (null !== (Ik = kk.order) && void 0 !== Ik ? Ik : 0) - (null !== (Xk = Fk.order) && void 0 !== Xk ? Xk : 0)
      }))
    }
    let ak = null;

    function qk(kk) {
      ak = kk
    }
    let Lk = !1;

    function tk(kk) {
      Lk = !0;
      try {
        kk.onClick()
      } finally {
        Lk = !1
      }
      kk.panel && "clientGame" === Xk.d.get("openInGameMenuName") && qk(kk.id)
    }

    function Zk() {
      return Lk
    }

    function jk() {
      return lk().filter((kk => kk.panel && !kk.disabled))
    }

    function ek(kk) {
      const Fk = jk(),
        Ik = Fk.findIndex((kk => kk.id === ak));
      return !(Ik < 0 || Fk.length < 2) && (tk(Fk[(Ik + kk + Fk.length) % Fk.length]), !0)
    }

    function wk() {
      return null !== ak && jk().length > 1
    }

    function Hk() {
      qk(null)
    }

    function Jk() {
      "inventory" !== Xk.d.get("openInGameMenuName") && qk(null)
    }

    function xk() {
      const kk = ak;
      return qk(null), kk
    }

    function Pk(kk) {
      return yk.set(kk.id, kk), Tk.g.GL(ik, lk(), !0), () => {
        yk.get(kk.id) === kk && (yk.delete(kk.id), Tk.g.GL(ik, lk()))
      }
    }
  },
  36600: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => lk,
      e: () => Hk,
      f: () => Jk,
      j: () => Zk,
      m: () => qk,
      p: () => wk,
      r: () => jk,
      v: () => Lk
    });
    var Xk = Ik(25),
      Tk = Ik(34),
      ik = Ik(1270),
      yk = Ik(36607);
    const lk = "clientGameUiChanged";
    let ak = null;

    function qk() {
      return ak
    }

    function Lk(kk, Fk) {
      const Ik = {
        content: kk,
        menu: Fk
      };
      return ak = Ik, Tk.g.GL(lk, ak, !0), () => {
        ak === Ik && (ak = null, ek = !1, Hk(), Tk.g.GL(lk, null))
      }
    }
    let tk = null;

    function Zk() {
      return tk
    }

    function jk(kk) {
      return tk = kk, () => {
        tk === kk && (tk = null)
      }
    }
    let ek = !1;

    function wk() {
      const kk = Xk.d.get("openInGameMenuName");
      "clientGame" !== kk && (ek = "inventory" === kk), (0, yk.q)() || (0, yk.k)(), (0, ik.m)(ik.c), Xk.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Hk() {
      xk(!1)
    }

    function Jk() {
      xk(ek)
    }

    function xk(kk) {
      "clientGame" === Xk.d.get("openInGameMenuName") && Xk.d.set({
        openInGameMenuName: kk ? "inventory" : null
      }), kk || (0, yk.k)(), ek = !1
    }
  },
  36491: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => ak
    });
    var Xk = Ik(318),
      Tk = Ik(25),
      ik = Ik(36498),
      yk = Ik(1580),
      lk = Ik(1916);

    function ak(kk, Fk) {
      var Ik, ak, qk;
      if (!Tk.d.get("isKeydownEnabled") || kk.repeat) return;
      const Lk = kk.code;
      "Escape" === kk.key ? (0, yk.i)(kk) : null !== (Ik = lk.s.OpenSettings) && void 0 !== Ik && Ik.includes(Lk) ? (0, yk.z)(kk, Xk.r.SETTINGS) : null !== (ak = lk.s.OpenCharacterCustomization) && void 0 !== ak && ak.includes(Lk) ? (0, ik.c)() || (0, yk.z)(kk, Xk.r.CUSTOMISATION, Fk()) : null !== (qk = lk.s.ShowDebugOverlay) && void 0 !== qk && qk.includes(Lk) && Tk.d.set({
        showDebugOverlay: !Tk.d.get("showDebugOverlay")
      })
    }
  },
  39058: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ak
    });
    var Xk = Ik(8880),
      Tk = Ik(36486),
      ik = Ik(39066);
    const yk = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      lk = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function ak(kk, Fk) {
      if (kk instanceof Tk.f) return {
        at: yk[Fk],
        code: 0
      };
      const Ik = (0, Xk.g)(kk),
        ak = "number" === typeof Ik ? Ik : 0;
      return null !== (0, ik.l)(ak).name ? {
        at: "refused",
        code: ak
      } : {
        at: lk[Fk],
        code: ak
      }
    }
  },
  8880: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => ik,
      g: () => yk,
      j: () => lk,
      n: () => qk,
      p: () => ak
    });
    var Xk = Ik(187),
      Tk = Ik(4612);

    function ik(kk) {
      return yk(kk) === Xk.d.gameOrPluginOnPlayerAuthRejected.code
    }

    function yk(kk) {
      return "object" === typeof kk && null !== kk ? kk.code : void 0
    }

    function lk(kk) {
      var Fk;
      return null !== (Fk = Object.keys(Tk.b).find((Fk => Tk.b[Fk] === kk))) && void 0 !== Fk ? Fk : null
    }

    function ak(kk) {
      return "notWhitelisted" === kk ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const qk = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  36458: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Zk,
      g: () => Lk,
      j: () => jk,
      l: () => tk
    });
    var Xk = Ik(337),
      Tk = Ik(659),
      ik = Ik(672),
      yk = Ik(41);
    const lk = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      ak = "playSessionGameNameWithVariation",
      qk = "wasMatchmakePlayer";

    function Lk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yk.m;
      (0, ik.g)(kk, lk)
    }

    function tk() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yk.m).setItem(qk, !0)
    }

    function Zk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yk.m;
      return (0, ik.e)(kk, lk)
    }

    function jk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yk.m;
      const Ik = (0, ik.e)(Fk, lk),
        Lk = function(kk) {
          const Fk = kk.getItem(ak);
          return "string" !== typeof Fk ? null : Fk
        }(Fk),
        tk = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yk.m).getItem(qk)
        }(Fk);
      let Zk;
      return Zk = null !== Ik && null !== Lk && (0, ik.f)(Fk, lk) && function(kk, Fk, Ik) {
          const Tk = (0, Xk.dc)(kk),
            ik = (0, Xk.dc)(Fk),
            yk = (0, Xk.Xb)(kk),
            lk = (0, Xk.Xb)(Fk);
          return !(Tk !== ik || !Ik) || Tk === ik && yk === lk
        }(Lk, kk, tk) ? Ik : (0, Tk.c)(), (0, ik.i)(Fk, lk, Zk), Fk.setItem(ak, kk),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yk.m).removeItem(qk)
        }(Fk), Zk
    }
  },
  36449: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Qk,
      g: () => sk
    });
    var Xk = Ik(1018),
      Tk = Ik(198),
      ik = Ik(333),
      yk = Ik(633),
      lk = Ik(337),
      ak = Ik(1021),
      qk = Ik(646),
      Lk = Ik(684),
      tk = Ik(4508),
      Zk = Ik(95),
      jk = Ik(129),
      ek = Ik(1665),
      wk = Ik(111),
      Hk = Ik(36458),
      Jk = Ik(41),
      xk = Ik(667),
      Pk = Ik(309),
      Kk = Ik(36466);

    function Qk() {
      var kk, Fk;
      return [...null !== (kk = navigator.languages) && void 0 !== kk ? kk : [null !== (Fk = navigator.language) && void 0 !== Fk ? Fk : "none"], "en-gb"]
    }

    function sk(kk, Fk, Ik, sk, Vk) {
      const zk = (0, Xk.j)(Fk) ? (0, Xk.n)(Fk) : null,
        Sk = kk.isLoggedIn() && void 0 !== (0, Tk.d)(ik.i, jk.v) ? (0, Pk.x)() : null,
        vk = {
          cookies: (0, ek.getAllCookiesForGameNameWithVariation)(Fk),
          isMobile: (0, Zk.isMobile)(),
          isUsingCustomGameTexturePack: null !== zk && Vk(zk),
          generalCookies: {
            joinDiscord: !!Jk.j.getItem("DiscordPressed"),
            newGo: tk.b,
            ...kk.getMetricsCookies(),
            trafficCode: sk,
            compliance: Zk.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, Zk.getBrowserName)(),
            version: (0, Zk.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, Zk.getPlatformType)(),
            deviceType: (0, wk.e)()
          },
          isLoggedIn: kk.isLoggedIn(),
          lobbyName: Ik,
          languages: Qk(),
          version: yk.b,
          siteUsed: jk.v,
          subsiteUsed: jk.C,
          playSessionId: (0, Hk.j)(Fk),
          visitSessionId: (0, xk.h)(),
          clientReason: qk.o.reason,
          budgetBasis: (0, Kk.h)(),
          ...null !== Lk.t && {
            diagClaim: Lk.t.claimId
          },
          ...null !== Sk && {
            webGpuLoss: Sk
          }
        };
      return null !== zk && (0, lk.Kc)(zk) ? (vk.lobbyName = (0, Xk.i)(zk, (0, Xk.l)(Fk), Ik), {
        roomName: `classic_${ak.f}`,
        joinOptions: vk
      }) : {
        roomName: Fk,
        joinOptions: vk
      }
    }
  },
  39066: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Tk,
      e: () => ik,
      i: () => lk,
      l: () => Lk,
      n: () => ak,
      p: () => yk
    });
    var Xk = Ik(187);
    const Tk = 3e3,
      ik = 15e3;

    function yk(kk) {
      const Fk = kk.endsWith(Xk.m);
      return {
        text: (Fk ? kk.slice(0, -Xk.m.length) : kk) || null,
        dropsCache: Fk
      }
    }
    const lk = "Either your internet isn't working or this is a bug.";

    function ak(kk, Fk) {
      const Ik = Lk(kk);
      return null !== Ik.name && "" === Xk.d[Ik.name].text && null !== Fk ? Fk : Ik.reason
    }
    const qk = "You were removed from the game.";

    function Lk(kk) {
      var Fk;
      let Ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const Tk = null !== (Fk = Object.keys(Xk.d).find((Fk => Xk.d[Fk].code === kk))) && void 0 !== Fk ? Fk : null;
      if (null === Tk) return {
        code: kk,
        name: Tk,
        reason: null !== Ik && void 0 !== Ik ? Ik : `${lk}\nCode: ${kk}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: ik,
        canReconnect: yk = !1
      } = Xk.d[Tk], ak = kk === Xk.d.outdatedVersion.code || kk === Xk.d.loadRecaptchaError.code;
      return {
        code: kk,
        name: Tk,
        reason: "" !== ik ? ik : null !== Ik && void 0 !== Ik ? Ik : kk === Xk.d.gameOrPluginKick.code ? qk : `Code: ${kk}`,
        canReconnect: yk,
        automaticallyReconnect: kk === Xk.d.customGameUpdated.code || kk === Xk.d.duplicateLobbyNameError.code,
        requiresRefresh: ak
      }
    }
  },
  36899: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Tk,
      i: () => ik,
      l: () => Zk,
      p: () => lk,
      q: () => ak,
      r: () => qk,
      u: () => tk,
      v: () => Lk,
      z: () => yk
    });
    var Xk = Ik(1231);
    let Tk = function(kk) {
        return kk[kk.Join = 0] = "Join", kk[kk.Leave = 1] = "Leave", kk[kk.Push = 2] = "Push", kk[kk.Cursor = 3] = "Cursor", kk[kk.Submit = 4] = "Submit", kk[kk.ReloadAsVariation = 5] = "ReloadAsVariation", kk[kk.CreateFile = 6] = "CreateFile", kk[kk.RenameFile = 7] = "RenameFile", kk[kk.DeleteFile = 8] = "DeleteFile", kk[kk.SetEngine = 9] = "SetEngine", kk[kk.RenameFolder = 10] = "RenameFolder", kk
      }({}),
      ik = function(kk) {
        return kk[kk.Joined = 0] = "Joined", kk[kk.Updates = 1] = "Updates", kk[kk.Presence = 2] = "Presence", kk[kk.RemoteCursor = 3] = "RemoteCursor", kk[kk.ForceClose = 4] = "ForceClose", kk[kk.LobbyFilesChanged = 5] = "LobbyFilesChanged", kk[kk.EngineSettings = 6] = "EngineSettings", kk
      }({});

    function yk(kk) {
      return "lobby" === kk.kind ? `lobby:${kk.path}` : `codeBlock:${kk.pos[0]},${kk.pos[1]},${kk.pos[2]}`
    }

    function lk(kk) {
      if ("lobby" === kk) return {
        kind: "lobby",
        path: Xk.g
      };
      if (kk.startsWith("lobby:")) {
        const Fk = kk.slice(6);
        return tk(Fk) ? {
          kind: "lobby",
          path: Fk
        } : null
      }
      const Fk = kk.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return Fk ? {
        kind: "codeBlock",
        pos: [parseInt(Fk[1]), parseInt(Fk[2]), parseInt(Fk[3])]
      } : null
    }

    function ak(kk) {
      return kk.endsWith(".d.ts")
    }

    function qk(kk) {
      return kk.endsWith(".ts") && !ak(kk)
    }
    const Lk = 64;

    function tk(kk) {
      if (!kk || kk !== kk.trim()) return !1;
      if (kk.length > Lk) return !1;
      if (kk.startsWith("/") || kk.includes("\\") || kk.includes("\0")) return !1;
      if (!ak(kk) && !qk(kk) && ! function(kk) {
          return kk.endsWith(".js") && !kk.endsWith(".min.js") && !kk.endsWith(".bundle.js")
        }(kk)) return !1;
      const Fk = kk.split("/");
      for (const Ik of Fk)
        if ("" === Ik || "." === Ik || ".." === Ik) return !1;
      return !0
    }
    const Zk = 14e3
  },
  38967: (kk, Fk, Ik) => {
    function Xk(kk, Fk, Ik, Xk, Tk) {
      var ik = {};
      return Object.keys(Xk).forEach((function(kk) {
        ik[kk] = Xk[kk]
      })), ik.enumerable = !!ik.enumerable, ik.configurable = !!ik.configurable, ("value" in ik || ik.initializer) && (ik.writable = !0), ik = Ik.slice().reverse().reduce((function(Ik, Xk) {
        return Xk(kk, Fk, Ik) || Ik
      }), ik), Tk && void 0 !== ik.initializer && (ik.value = ik.initializer ? ik.initializer.call(Tk) : void 0, ik.initializer = void 0), void 0 === ik.initializer && (Object.defineProperty(kk, Fk, ik), ik = null), ik
    }
    Ik.d(Fk, {
      b: () => Xk
    })
  },
  38960: (kk, Fk, Ik) => {
    function Xk(kk, Fk, Ik, Xk) {
      Ik && Object.defineProperty(kk, Fk, {
        enumerable: Ik.enumerable,
        configurable: Ik.configurable,
        writable: Ik.writable,
        value: Ik.initializer ? Ik.initializer.call(Xk) : void 0
      })
    }
    Ik.d(Fk, {
      e: () => Xk
    })
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);