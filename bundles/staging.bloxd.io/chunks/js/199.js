export const id = 199;
export const ids = [199];
export const modules = {
  38682: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => rk,
      e: () => Sk
    });
    var Dk = ik(4019);
    let fk = null;

    function Sk(kk) {
      return null !== fk && kk === fk
    }

    function bk() {
      this.oB = !1, this.stopPropagation = !1, this.JB = !1, this.disabled = !1
    }
    class rk {
      constructor(kk, ek) {
        this.version = "0.7.0";
        var ik = Object.assign({}, new bk, ek || {});
        this.element = kk || document, this.oB = !!ik.oB, this.stopPropagation = !!ik.stopPropagation, this.JB = !!ik.JB, this.disabled = !!ik.disabled, this.filterEvents = (kk, ek) => !0, this.ignoreEvent = kk => !1, this.down = new Dk.EventEmitter, this.up = new Dk.EventEmitter, this.state = {}, this.wT = {
          dx: 0,
          dy: 0,
          Wkk: 0,
          tkk: 0,
          Xkk: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? mk(this) : document.addEventListener("DOMContentLoaded", (kk => {
          mk(this)
        }), {
          once: !0
        })
      }
      bind(kk) {
        for (var ek = arguments.length, ik = new Array(ek > 1 ? ek - 1 : 0), Dk = 1; Dk < ek; Dk++) ik[Dk - 1] = arguments[Dk];
        ik.forEach((ek => {
          var ik = this._keyBindmap[ek] || [];
          ik.includes(kk) || (ik.push(kk), this._keyBindmap[ek] = ik)
        })), this.state[kk] = !!this.state[kk], this.pressCount[kk] = this.pressCount[kk] || 0, this.releaseCount[kk] = this.releaseCount[kk] || 0
      }
      unbind(kk) {
        for (var ek in this._keyBindmap) {
          var ik = this._keyBindmap[ek],
            Dk = ik.indexOf(kk);
          Dk > -1 && ik.splice(Dk, 1)
        }
      }
      getBindings() {
        var kk = {};
        for (var ek in this._keyBindmap) {
          this._keyBindmap[ek].forEach((ik => {
            kk[ik] = kk[ik] || [], kk[ik].push(ek)
          }))
        }
        return kk
      }
      Px() {
        Pk(this.wT), Pk(this.pressCount), Pk(this.releaseCount)
      }
    }

    function Pk(kk) {
      for (var ek in kk) kk[ek] = 0
    }

    function mk(kk) {
      window.addEventListener("keydown", wk.bind(null, kk, !0), !1), window.addEventListener("keyup", wk.bind(null, kk, !1), !1);
      var ek = {
        passive: !0
      };
      kk.element.addEventListener("touchstart", nk.bind(void 0, kk), {
        passive: !1
      }), kk.element.addEventListener("touchend", Hk.bind(void 0, kk), ek), kk.element.addEventListener("mousedown", lk.bind(null, kk, !0), ek), window.document.addEventListener("mouseup", lk.bind(null, kk, !1), ek), kk.element.addEventListener("touchmove", pk.bind(null, kk), ek), kk.element.addEventListener("mousemove", pk.bind(null, kk), ek), window.PointerEvent, kk.element.addEventListener("wheel", yk.bind(null, kk), ek), kk.element.addEventListener("contextmenu", Yk.bind(null, kk), !1), window.addEventListener("blur", Ak.bind(null, kk), !1)
    }
    var Mk = 0,
      Kk = 0,
      xk = null;

    function nk(kk, ek) {
      ek.preventDefault(), Uk(ek)
    }

    function Uk(kk) {
      let ek = !1;
      for (let ik = 0; ik < kk.touches.length; ++ik)
        if (kk.touches[ik].identifier === xk) {
          ek = !0;
          break
        } if (!ek) {
        const ek = kk.changedTouches[0];
        Mk = ek.clientX, Kk = ek.clientY, xk = ek.identifier
      }
    }

    function Hk(kk, ek) {
      for (var ik = ek.changedTouches, Dk = 0; Dk < ik.length; ++Dk) ik[Dk].identifier === xk && (xk = null)
    }

    function wk(kk, ek, ik) {
      if (!kk.ignoreEvent(ik)) try {
        jk(kk, ik), ek && ik.isTrusted && !ik.repeat && kk._keyStates[ik.code] && sk(kk, ik.code)
      } finally {
        dk(ik.code, ek, kk, ik)
      }
    }

    function lk(kk, ek, ik) {
      if (!kk.ignoreEvent(ik)) try {
        jk(kk, ik)
      } finally {
        ! function(kk, ek, ik) {
          if ("pointerId" in ik)
            if (ek) {
              if (null !== kk._touches.currID) return;
              kk._touches.currID = ik.pointerId
            } else {
              if (kk._touches.currID !== ik.pointerId) return;
              kk._touches.currID = null
            } var Dk = "button" in ik ? ik.button + 1 : 1;
          dk("Mouse" + Dk, ek, kk, ik)
        }(kk, ek, ik)
      }
    }

    function pk(kk, ek) {
      var ik = ek.movementX || ek.mozMovementX || 0,
        Dk = ek.movementY || ek.mozMovementY || 0;
      if (ek.touches && 0 === (ik | Dk)) {
        var fk = function(kk) {
          Uk(kk);
          for (let ek = 0; ek < kk.changedTouches.length; ++ek)
            if (kk.changedTouches[ek].identifier == xk) {
              const ik = kk.changedTouches[ek],
                Dk = [ik.clientX - Mk, ik.clientY - Kk];
              return Mk = ik.clientX, Kk = ik.clientY, Dk
            } return console.error(`Did not find touch id ${xk}`), [0, 0]
        }(ek);
        ik = fk[0], Dk = fk[1]
      }
      kk.wT.dx += ik, kk.wT.dy += Dk
    }

    function yk(kk, ek) {
      jk(kk, ek);
      var ik = 1;
      switch (ek.deltaMode) {
        case 0:
          ik = 1;
          break;
        case 1:
          ik = 12;
          break;
        case 2:
          ik = kk.element.clientHeight || window.innerHeight
      }
      kk.wT.Wkk += (ek.deltaX || 0) * ik, kk.wT.tkk += (ek.deltaY || 0) * ik, kk.wT.Xkk += (ek.deltaZ || 0) * ik
    }

    function Yk(kk, ek) {
      if (!kk.JB) return ek.preventDefault(), !1
    }
    var Lk = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function Ck(kk, ek) {
      return !!kk[Lk[ek]] || ("AltRight" === ek || "ControlLeft" === ek) && "function" === typeof kk.getModifierState && !0 === kk.getModifierState("AltGraph")
    }

    function Ak(kk, ek) {
      for (var ik in kk._modifiersHeldThroughBlur = {}, Lk) kk._keyStates[ik] && (kk._modifiersHeldThroughBlur[ik] = !0);
      ek && ek.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (kk) {
          return !0
        }
      }() && (clearTimeout(kk._blurRelease), kk._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var ek in kk._modifiersHeldThroughBlur = {}, kk._keyStates) kk._keyStates[ek] && !/^Mouse\d/.test(ek) && sk(kk, ek)
      }), 0))
    }

    function jk(kk, ek) {
      var ik = kk._modifiersHeldThroughBlur;
      if (ik && ek.isTrusted && document.hasFocus())
        for (var Dk in ik) delete ik[Dk], kk._keyStates[Dk] && Dk !== ek.code && (Ck(ek, Dk) || sk(kk, Dk))
    }

    function sk(kk, ek) {
      const ik = {
          code: ek,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        Dk = fk;
      fk = ik;
      try {
        dk(ek, !1, kk, ik)
      } finally {
        fk = Dk
      }
    }

    function dk(kk, ek, ik, Dk) {
      var fk = ik._keyBindmap[kk];
      fk && (Vk(ik._keyStates[kk], ek) && (ik._keyStates[kk] = ek, fk.forEach((kk => {
        (!ik.filterEvents || ik.filterEvents(Dk, kk)) && function(kk, ek, ik, Dk) {
          var fk = ek ? ik.pressCount : ik.releaseCount;
          fk[kk] = (fk[kk] || 0) + 1;
          var Sk = ik._bindPressCount[kk] || 0;
          (Sk += ek ? 1 : -1) < 0 && (Sk = 0);
          ik._bindPressCount[kk] = Sk;
          var bk = ik.state[kk];
          if (Vk(bk, Sk)) {
            ik.state[kk] = Sk > 0;
            var rk = ek ? ik.down : ik.up;
            ik.disabled || rk.emit(kk, Dk)
          }
        }(kk, ek, ik, Dk)
      }))), "button" in Dk || (ik.oB && !Dk.defaultPrevented && Dk.preventDefault(), ik.stopPropagation && Dk.stopPropagation()))
    }

    function Vk(kk, ek) {
      return kk ? !ek : ek
    }
  },
  36233: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Hk,
      e: () => wk
    });
    var Dk = ik(60),
      fk = ik(1406),
      Sk = ik(1922),
      bk = ik(36167),
      rk = ik(594),
      Pk = ik(1021),
      mk = ik.n(Pk),
      Mk = ik(1066);
    const Kk = [xk()];

    function xk() {
      return {
        source: null,
        direction: null,
        Qv: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function nk(kk) {
      return Kk.find((ek => null !== ek.source && ek.source === kk))
    }

    function Uk(kk) {
      clearTimeout(kk.timeout), kk.source = null, kk.direction = null, kk.writtenAngle = null, kk.Qv && (kk.Qv.style.rotate = "")
    }
    const Hk = (0, Dk.memo)((function() {
      const [, kk] = (0, Dk.useReducer)((kk => kk + 1), 0);
      return (0, fk.c)("damagedByOtherPlayer", (ek => {
        let {
          MS: ik,
          direction: Dk
        } = ek;
        const fk = ik || "nonDirectional",
          Sk = function(kk) {
            var ek;
            const ik = null !== (ek = nk(kk)) && void 0 !== ek ? ek : Kk.find((kk => null === kk.source));
            if (ik) return ik;
            const Dk = {
              source: null,
              direction: null,
              Qv: null,
              timeout: void 0,
              writtenAngle: null
            };
            return Kk.push(Dk), Dk
          }(fk);
        clearTimeout(Sk.timeout), Sk.source = fk, Sk.direction = Dk, Sk.timeout = setTimeout((() => {
          Uk(Sk), kk()
        }), 800), kk()
      })), (0, Sk.c)("kill", (ek => {
        let {
          killer: ik,
          victim: Dk
        } = ek;
        const fk = ik.local && nk(Dk.id);
        fk && (Uk(fk), kk())
      })), (0, Dk.useEffect)((() => {
        const kk = (0, bk.g)("turnDamageIndicators", wk);
        return () => {
          kk(), Kk.forEach(Uk)
        }
      }), []), (0, Mk.jsx)("div", {
        className: "DirectionalDamage",
        children: Kk.map(((kk, ek) => (0, Mk.jsx)("div", {
          ref: ek => {
            kk.Qv = ek
          },
          className: mk()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, rk.F)(kk.direction),
            DamageIndicatorIdle: null === kk.source
          })
        }, ek)))
      })
    }));

    function wk(kk) {
      for (const ek of Kk) {
        if (null === ek.source || (0, rk.F)(ek.direction)) continue;
        const ik = ek.direction - kk;
        ik !== ek.writtenAngle && (ek.writtenAngle = ik, ek.Qv.style.rotate = `${ik}rad`)
      }
    }
  },
  36018: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => fk,
      g: () => Sk
    });
    let Dk = !1;

    function fk() {
      return Dk
    }

    function Sk(kk) {
      return Dk !== kk && (Dk = kk, !0)
    }
  },
  33723: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Sk,
      h: () => fk
    });
    var Dk = ik(22);

    function fk(kk, ek) {
      return kk && !ek
    }

    function Sk() {
      return fk(Dk.b.get("isTouchScreen"), Dk.b.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  40252: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      startPadGameplay: () => Lk
    });
    ik(40123);
    var Dk = ik(40130),
      fk = ik(3693),
      Sk = ik(22),
      bk = ik(38655),
      rk = ik(3642),
      Pk = ik(38666),
      mk = ik(26),
      Mk = ik(2704),
      Kk = ik(38021),
      xk = ik(8683),
      nk = ik(40133);
    const Uk = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var Hk = ik(40152),
      wk = ik(8665),
      lk = ik(38676);
    const pk = kk => kk.padSneakToggled || !!Sk.b.get("clientEscMenuOptions").crouchIsToggle && kk.crouchToggled,
      yk = () => {
        const kk = (() => {
          const kk = (0, xk.c)();
          let ek = Uk;
          const ik = new nk.b;
          let Dk = !1,
            fk = 0;
          const Sk = () => {
            const ik = performance.now(),
              Sk = 0 === fk ? 0 : ik - fk;
            if (fk = ik, !Dk) return kk.discardPending(), null;
            const bk = (0, nk.p)(ek, Sk),
              rk = kk.drainLookDelta(),
              Pk = (0, Kk.l)();
            return {
              SF: (bk.SF + rk.SF) * Pk,
              mF: (bk.mF + rk.mF) * Pk
            }
          };
          return {
            update: (kk, fk, bk, rk) => {
              kk.camera.QG !== Sk && (kk.camera.QG = Sk), Dk = !0, ek = (0, nk.r)(ik, fk, bk, rk, performance.now())
            },
            release: () => {
              Dk = !1, ek = Uk, ik.reset()
            },
            uninstall: kk => {
              kk.camera.QG === Sk && (kk.camera.QG = null)
            }
          }
        })();
        return {
          update: (ek, ik, Dk) => {
            kk.update((0, Mk.e)(), ek, ik, Dk)
          },
          release: kk.release,
          uninstall: () => {
            const ek = (0, Mk.e)();
            ek && kk.uninstall(ek)
          }
        }
      };
    var Yk = ik(40145);
    ik(37289), ik(8570);
    ik(8588).d;
    const Lk = () => {
      const kk = (0, Yk.d)((() => {
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
            bodies: () => (0, bk.e)(),
            look: yk(),
            move: (ek, ik) => {
              const Dk = (0, Mk.e)(),
                fk = Dk.mY.Iek();
              if (kk.x = ek.x, kk.y = ek.y, kk.magnitude = ek.magnitude, kk.headingOffset = ek.headingOffset, kk.jumpHeld = ek.jumpHeld, ek.jumpPressed && (kk.jumpPressedSinceTick = !0), kk.running = ek.running, kk.sprintHeld = ek.sprintHeld, ik) {
                const ek = (0, Hk.e)({
                  ...ik,
                  descending: Dk.mY.vkk(Dk.Qq).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!Dk.bY.canCrouch,
                  toggled: pk(fk)
                });
                kk.crouchHeld = ek.crouchHeld, fk.padSneakToggled = ek.toggled, fk.crouchToggled = !1, (0, wk.c)(ek.toggled)
              }
              fk.gamepad = kk
            },
            stopMoving: () => {
              var ek;
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
              const ik = null === (ek = (0, Mk.e)()) || void 0 === ek ? void 0 : ek.mY.Iek();
              (null === ik || void 0 === ik ? void 0 : ik.gamepad) === kk && (ik.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: kk => {
              const ek = (0, Mk.e)(),
                ik = null === ek || void 0 === ek ? void 0 : ek.mY.Iek();
              "touch" === kk ? ((0, wk.c)(!1), null !== ik && void 0 !== ik && ik.padSneakToggled && (ik.padSneakToggled = !1, ik.isTouchscreen && !ik.gamepad && ek.mY.eek(ek.Qq).setCrouching(!!ek.bY.canCrouch && ik.touchCrouch))) : "gamepad" === kk && ik && (0, wk.c)(pk(ik))
            },
            hasPlayer: () => {
              var kk;
              return !(null === (kk = (0, Mk.e)()) || void 0 === kk || !kk.Qq)
            },
            isPlayerDead: () => {
              var kk;
              const ek = (0, Mk.e)();
              return !1 === (null === (kk = ek.mY.Cek(ek.Qq)) || void 0 === kk ? void 0 : kk.isAlive)
            },
            isReplayMode: () => {
              var kk, ek;
              return !(null === (kk = (0, Mk.d)()) || void 0 === kk || null === (ek = kk.client) || void 0 === ek || !ek.isReplayMode())
            },
            isFreeCameraOn: () => {
              var kk, ek, ik;
              return !(null === (kk = (0, Mk.d)()) || void 0 === kk || null === (ek = kk.client) || void 0 === ek || null === (ik = ek.freeCameraController) || void 0 === ik || !ik.isEnabled())
            },
            targetsBlock: () => !!(0, Mk.e)().bkk,
            selectedSlotEmpty: () => {
              var kk;
              const ek = (0, Mk.e)();
              return !(null !== (kk = ek.mY.Dek(ek.Qq)) && void 0 !== kk && kk.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const kk = (0, Mk.e)().bY;
              return !!kk.creative && !!kk.canPickBlocks
            },
            scrollHotbar: kk => {
              mk.j.tm("ScrollInventorySlot", kk)
            },
            hasFullInventory: () => (0, Pk.e)((0, Mk.e)()),
            hasLobbyTab: () => (0, lk.c)((0, Mk.e)().bY),
            contextActionInputs: () => {
              var kk, ek, ik, Dk;
              const fk = (0, Mk.e)();
              return {
                holdingGun: !(null === (kk = fk.mY.Aek(fk.Qq)) || void 0 === kk || null === (ek = kk.JY) || void 0 === ek || !ek.isGun()),
                customButtons: null !== (ik = fk.bY.customButtons) && void 0 !== ik ? ik : null,
                touchscreenActionButton: null !== (Dk = fk.bY.touchscreenActionButton) && void 0 !== Dk ? Dk : null
              }
            },
            pressTouchButton: kk => {
              (0, rk.sendColyMessage)(fk._j, kk)
            }
          }
        })()),
        ek = (0, Dk.b)(),
        ik = null,
        Sk = null;
      return () => {
        kk(), ek(), null === ik || void 0 === ik || ik(), null === Sk || void 0 === Sk || Sk()
      }
    }
  },
  36151: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk,
      g: () => Hk,
      i: () => wk,
      m: () => rk,
      p: () => xk,
      t: () => lk,
      u: () => Kk,
      v: () => yk,
      w: () => Uk,
      x: () => pk
    });
    var Dk = ik(22),
      fk = ik(26);
    const Sk = "clientGameInventoryButtonsChanged",
      bk = new Map;

    function rk() {
      return [...bk.values()].sort(((kk, ek) => {
        var ik, Dk;
        return (null !== (ik = kk.order) && void 0 !== ik ? ik : 0) - (null !== (Dk = ek.order) && void 0 !== Dk ? Dk : 0)
      }))
    }
    let Pk = null;

    function mk(kk) {
      Pk = kk
    }
    let Mk = !1;

    function Kk(kk) {
      Mk = !0;
      try {
        kk.onClick()
      } finally {
        Mk = !1
      }
      kk.panel && "clientGame" === Dk.b.get("openInGameMenuName") && mk(kk.id)
    }

    function xk() {
      return Mk
    }

    function nk() {
      return rk().filter((kk => kk.panel && !kk.disabled))
    }

    function Uk(kk) {
      const ek = nk(),
        ik = ek.findIndex((kk => kk.id === Pk));
      return !(ik < 0 || ek.length < 2) && (Kk(ek[(ik + kk + ek.length) % ek.length]), !0)
    }

    function Hk() {
      return null !== Pk && nk().length > 1
    }

    function wk() {
      mk(null)
    }

    function lk() {
      "inventory" !== Dk.b.get("openInGameMenuName") && mk(null)
    }

    function pk() {
      const kk = Pk;
      return mk(null), kk
    }

    function yk(kk) {
      return bk.set(kk.id, kk), fk.j.tm(Sk, rk(), !0), () => {
        bk.get(kk.id) === kk && (bk.delete(kk.id), fk.j.tm(Sk, rk()))
      }
    }
  },
  36143: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => rk,
      d: () => wk,
      h: () => lk,
      j: () => xk,
      n: () => mk,
      r: () => Hk,
      v: () => nk,
      z: () => Mk
    });
    var Dk = ik(22),
      fk = ik(26),
      Sk = ik(1273),
      bk = ik(36151);
    const rk = "clientGameUiChanged";
    let Pk = null;

    function mk() {
      return Pk
    }

    function Mk(kk, ek) {
      const ik = {
        content: kk,
        menu: ek
      };
      return Pk = ik, fk.j.tm(rk, Pk, !0), () => {
        Pk === ik && (Pk = null, Uk = !1, wk(), fk.j.tm(rk, null))
      }
    }
    let Kk = null;

    function xk() {
      return Kk
    }

    function nk(kk) {
      return Kk = kk, () => {
        Kk === kk && (Kk = null)
      }
    }
    let Uk = !1;

    function Hk() {
      const kk = Dk.b.get("openInGameMenuName");
      "clientGame" !== kk && (Uk = "inventory" === kk), (0, bk.p)() || (0, bk.i)(), (0, Sk.s)(Sk.c), Dk.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function wk() {
      pk(!1)
    }

    function lk() {
      pk(Uk)
    }

    function pk(kk) {
      "clientGame" === Dk.b.get("openInGameMenuName") && Dk.b.set({
        openInGameMenuName: kk ? "inventory" : null
      }), kk || (0, bk.i)(), Uk = !1
    }
  },
  36015: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Pk
    });
    var Dk = ik(302),
      fk = ik(22),
      Sk = ik(36018),
      bk = ik(1614),
      rk = ik(1931);

    function Pk(kk, ek) {
      var ik, Pk, mk;
      if (!fk.b.get("isKeydownEnabled") || kk.repeat) return;
      const Mk = kk.code;
      "Escape" === kk.key ? (0, bk.k)(kk) : null !== (ik = rk.u.OpenSettings) && void 0 !== ik && ik.includes(Mk) ? (0, bk.A)(kk, Dk.r.SETTINGS) : null !== (Pk = rk.u.OpenCharacterCustomization) && void 0 !== Pk && Pk.includes(Mk) ? (0, Sk.c)() || (0, bk.A)(kk, Dk.r.CUSTOMISATION, ek()) : null !== (mk = rk.u.ShowDebugOverlay) && void 0 !== mk && mk.includes(Mk) && fk.b.set({
        showDebugOverlay: !fk.b.get("showDebugOverlay")
      })
    }
  },
  35841: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Dk,
      h: () => fk,
      k: () => Sk,
      l: () => bk
    });
    const Dk = 1024,
      fk = 1024 * Dk;

    function Sk(kk) {
      return 2 ** Math.floor(Math.log2(Math.max(1, kk / fk)))
    }

    function bk(kk) {
      return (kk / fk).toFixed(1)
    }
  },
  36463: (kk, ek, ik) => {
    ik.d(ek, {
      A: () => Mk,
      E: () => bk,
      e: () => fk,
      h: () => Sk,
      l: () => xk,
      p: () => rk,
      t: () => Pk,
      x: () => mk,
      z: () => Kk
    });
    var Dk = ik(1218);
    let fk = function(kk) {
        return kk[kk.Join = 0] = "Join", kk[kk.Leave = 1] = "Leave", kk[kk.Push = 2] = "Push", kk[kk.Cursor = 3] = "Cursor", kk[kk.Submit = 4] = "Submit", kk[kk.ReloadAsVariation = 5] = "ReloadAsVariation", kk[kk.CreateFile = 6] = "CreateFile", kk[kk.RenameFile = 7] = "RenameFile", kk[kk.DeleteFile = 8] = "DeleteFile", kk[kk.SetEngine = 9] = "SetEngine", kk[kk.RenameFolder = 10] = "RenameFolder", kk
      }({}),
      Sk = function(kk) {
        return kk[kk.Joined = 0] = "Joined", kk[kk.Updates = 1] = "Updates", kk[kk.Presence = 2] = "Presence", kk[kk.RemoteCursor = 3] = "RemoteCursor", kk[kk.ForceClose = 4] = "ForceClose", kk[kk.LobbyFilesChanged = 5] = "LobbyFilesChanged", kk[kk.EngineSettings = 6] = "EngineSettings", kk
      }({});

    function bk(kk) {
      return "lobby" === kk.kind ? `lobby:${kk.path}` : `codeBlock:${kk.pos[0]},${kk.pos[1]},${kk.pos[2]}`
    }

    function rk(kk) {
      if ("lobby" === kk) return {
        kind: "lobby",
        path: Dk.i
      };
      if (kk.startsWith("lobby:")) {
        const ek = kk.slice(6);
        return Kk(ek) ? {
          kind: "lobby",
          path: ek
        } : null
      }
      const ek = kk.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return ek ? {
        kind: "codeBlock",
        pos: [parseInt(ek[1]), parseInt(ek[2]), parseInt(ek[3])]
      } : null
    }

    function Pk(kk) {
      return kk.endsWith(".d.ts")
    }

    function mk(kk) {
      return kk.endsWith(".ts") && !Pk(kk)
    }
    const Mk = 64;

    function Kk(kk) {
      if (!kk || kk !== kk.trim()) return !1;
      if (kk.length > Mk) return !1;
      if (kk.startsWith("/") || kk.includes("\\") || kk.includes("\0")) return !1;
      if (!Pk(kk) && !mk(kk) && ! function(kk) {
          return kk.endsWith(".js") && !kk.endsWith(".min.js") && !kk.endsWith(".bundle.js")
        }(kk)) return !1;
      const ek = kk.split("/");
      for (const ik of ek)
        if ("" === ik || "." === ik || ".." === ik) return !1;
      return !0
    }
    const xk = 14e3
  },
  38565: (kk, ek, ik) => {
    function Dk(kk, ek, ik, Dk, fk) {
      var Sk = {};
      return Object.keys(Dk).forEach((function(kk) {
        Sk[kk] = Dk[kk]
      })), Sk.enumerable = !!Sk.enumerable, Sk.configurable = !!Sk.configurable, ("value" in Sk || Sk.initializer) && (Sk.writable = !0), Sk = ik.slice().reverse().reduce((function(ik, Dk) {
        return Dk(kk, ek, ik) || ik
      }), Sk), fk && void 0 !== Sk.initializer && (Sk.value = Sk.initializer ? Sk.initializer.call(fk) : void 0, Sk.initializer = void 0), void 0 === Sk.initializer && (Object.defineProperty(kk, ek, Sk), Sk = null), Sk
    }
    ik.d(ek, {
      b: () => Dk
    })
  },
  38558: (kk, ek, ik) => {
    function Dk(kk, ek, ik, Dk) {
      ik && Object.defineProperty(kk, ek, {
        enumerable: ik.enumerable,
        configurable: ik.configurable,
        writable: ik.writable,
        value: ik.initializer ? ik.initializer.call(Dk) : void 0
      })
    }
    ik.d(ek, {
      e: () => Dk
    })
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);