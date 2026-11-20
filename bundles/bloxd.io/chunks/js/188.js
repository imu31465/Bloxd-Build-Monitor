export const id = 188;
export const ids = [188];
export const modules = {
  38738: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => bk,
      h: () => ak
    });
    var Rk = Bk(3852);
    let tk = null;

    function ak(kk) {
      return null !== tk && kk === tk
    }

    function Xk() {
      this.pD = !1, this.stopPropagation = !1, this.jD = !1, this.disabled = !1
    }
    class bk {
      constructor(kk, Fk) {
        this.version = "0.7.0";
        var Bk = Object.assign({}, new Xk, Fk || {});
        this.element = kk || document, this.pD = !!Bk.pD, this.stopPropagation = !!Bk.stopPropagation, this.jD = !!Bk.jD, this.disabled = !!Bk.disabled, this.filterEvents = (kk, Fk) => !0, this.down = new Rk.EventEmitter, this.up = new Rk.EventEmitter, this.state = {}, this.nD = {
          dx: 0,
          dy: 0,
          Dkk: 0,
          zkk: 0,
          Pkk: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? dk(this) : document.addEventListener("DOMContentLoaded", (kk => {
          dk(this)
        }), {
          once: !0
        })
      }
      bind(kk) {
        for (var Fk = arguments.length, Bk = new Array(Fk > 1 ? Fk - 1 : 0), Rk = 1; Rk < Fk; Rk++) Bk[Rk - 1] = arguments[Rk];
        Bk.forEach((Fk => {
          var Bk = this._keyBindmap[Fk] || [];
          Bk.includes(kk) || (Bk.push(kk), this._keyBindmap[Fk] = Bk)
        })), this.state[kk] = !!this.state[kk], this.pressCount[kk] = this.pressCount[kk] || 0, this.releaseCount[kk] = this.releaseCount[kk] || 0
      }
      unbind(kk) {
        for (var Fk in this._keyBindmap) {
          var Bk = this._keyBindmap[Fk],
            Rk = Bk.indexOf(kk);
          Rk > -1 && Bk.splice(Rk, 1)
        }
      }
      getBindings() {
        var kk = {};
        for (var Fk in this._keyBindmap) {
          this._keyBindmap[Fk].forEach((Bk => {
            kk[Bk] = kk[Bk] || [], kk[Bk].push(Fk)
          }))
        }
        return kk
      }
      yJ() {
        wk(this.nD), wk(this.pressCount), wk(this.releaseCount)
      }
    }

    function wk(kk) {
      for (var Fk in kk) kk[Fk] = 0
    }

    function dk(kk) {
      window.addEventListener("keydown", fk.bind(null, kk, !0), !1), window.addEventListener("keyup", fk.bind(null, kk, !1), !1);
      var Fk = {
        passive: !0
      };
      kk.element.addEventListener("touchstart", Ak.bind(void 0, kk), {
        passive: !1
      }), kk.element.addEventListener("touchend", yk.bind(void 0, kk), Fk), kk.element.addEventListener("mousedown", mk.bind(null, kk, !0), Fk), window.document.addEventListener("mouseup", mk.bind(null, kk, !1), Fk), kk.element.addEventListener("touchmove", Wk.bind(null, kk), Fk), kk.element.addEventListener("mousemove", Wk.bind(null, kk), Fk), window.PointerEvent, kk.element.addEventListener("wheel", vk.bind(null, kk), Fk), kk.element.addEventListener("contextmenu", ik.bind(null, kk), !1), window.addEventListener("blur", Ok.bind(null, kk), !1)
    }
    var sk = 0,
      Vk = 0,
      Jk = null;

    function Ak(kk, Fk) {
      Fk.preventDefault(), ek(Fk)
    }

    function ek(kk) {
      let Fk = !1;
      for (let Bk = 0; Bk < kk.touches.length; ++Bk)
        if (kk.touches[Bk].identifier === Jk) {
          Fk = !0;
          break
        } if (!Fk) {
        const Fk = kk.changedTouches[0];
        sk = Fk.clientX, Vk = Fk.clientY, Jk = Fk.identifier
      }
    }

    function yk(kk, Fk) {
      for (var Bk = Fk.changedTouches, Rk = 0; Rk < Bk.length; ++Rk) Bk[Rk].identifier === Jk && (Jk = null)
    }

    function fk(kk, Fk, Bk) {
      try {
        Ek(kk, Bk), Fk && Bk.isTrusted && !Bk.repeat && kk._keyStates[Bk.code] && Sk(kk, Bk.code)
      } finally {
        Nk(Bk.code, Fk, kk, Bk)
      }
    }

    function mk(kk, Fk, Bk) {
      try {
        Ek(kk, Bk)
      } finally {
        ! function(kk, Fk, Bk) {
          if ("pointerId" in Bk)
            if (Fk) {
              if (null !== kk._touches.currID) return;
              kk._touches.currID = Bk.pointerId
            } else {
              if (kk._touches.currID !== Bk.pointerId) return;
              kk._touches.currID = null
            } var Rk = "button" in Bk ? Bk.button + 1 : 1;
          Nk("Mouse" + Rk, Fk, kk, Bk)
        }(kk, Fk, Bk)
      }
    }

    function Wk(kk, Fk) {
      var Bk = Fk.movementX || Fk.mozMovementX || 0,
        Rk = Fk.movementY || Fk.mozMovementY || 0;
      if (Fk.touches && 0 === (Bk | Rk)) {
        var tk = function(kk) {
          ek(kk);
          for (let Fk = 0; Fk < kk.changedTouches.length; ++Fk)
            if (kk.changedTouches[Fk].identifier == Jk) {
              const Bk = kk.changedTouches[Fk],
                Rk = [Bk.clientX - sk, Bk.clientY - Vk];
              return sk = Bk.clientX, Vk = Bk.clientY, Rk
            } return console.error(`Did not find touch id ${Jk}`), [0, 0]
        }(Fk);
        Bk = tk[0], Rk = tk[1]
      }
      kk.nD.dx += Bk, kk.nD.dy += Rk
    }

    function vk(kk, Fk) {
      Ek(kk, Fk);
      var Bk = 1;
      switch (Fk.deltaMode) {
        case 0:
          Bk = 1;
          break;
        case 1:
          Bk = 12;
          break;
        case 2:
          Bk = kk.element.clientHeight || window.innerHeight
      }
      kk.nD.Dkk += (Fk.deltaX || 0) * Bk, kk.nD.zkk += (Fk.deltaY || 0) * Bk, kk.nD.Pkk += (Fk.deltaZ || 0) * Bk
    }

    function ik(kk, Fk) {
      if (!kk.jD) return Fk.preventDefault(), !1
    }
    var Yk = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function Lk(kk, Fk) {
      return !!kk[Yk[Fk]] || ("AltRight" === Fk || "ControlLeft" === Fk) && "function" === typeof kk.getModifierState && !0 === kk.getModifierState("AltGraph")
    }

    function Ok(kk, Fk) {
      for (var Bk in kk._modifiersHeldThroughBlur = {}, Yk) kk._keyStates[Bk] && (kk._modifiersHeldThroughBlur[Bk] = !0);
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

    function Ek(kk, Fk) {
      var Bk = kk._modifiersHeldThroughBlur;
      if (Bk && Fk.isTrusted && document.hasFocus())
        for (var Rk in Bk) delete Bk[Rk], kk._keyStates[Rk] && Rk !== Fk.code && (Lk(Fk, Rk) || Sk(kk, Rk))
    }

    function Sk(kk, Fk) {
      const Bk = {
          code: Fk,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        Rk = tk;
      tk = Bk;
      try {
        Nk(Fk, !1, kk, Bk)
      } finally {
        tk = Rk
      }
    }

    function Nk(kk, Fk, Bk, Rk) {
      var tk = Bk._keyBindmap[kk];
      tk && (Hk(Bk._keyStates[kk], Fk) && (Bk._keyStates[kk] = Fk, tk.forEach((kk => {
        (!Bk.filterEvents || Bk.filterEvents(Rk, kk)) && function(kk, Fk, Bk, Rk) {
          var tk = Fk ? Bk.pressCount : Bk.releaseCount;
          tk[kk] = (tk[kk] || 0) + 1;
          var ak = Bk._bindPressCount[kk] || 0;
          (ak += Fk ? 1 : -1) < 0 && (ak = 0);
          Bk._bindPressCount[kk] = ak;
          var Xk = Bk.state[kk];
          if (Hk(Xk, ak)) {
            Bk.state[kk] = ak > 0;
            var bk = Fk ? Bk.down : Bk.up;
            Bk.disabled || bk.emit(kk, Rk)
          }
        }(kk, Fk, Bk, Rk)
      }))), "button" in Rk || (Bk.pD && !Rk.defaultPrevented && Rk.preventDefault(), Bk.stopPropagation && Rk.stopPropagation()))
    }

    function Hk(kk, Fk) {
      return kk ? !Fk : Fk
    }
  },
  36414: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Ak,
      g: () => ek
    });
    var Rk = Bk(61),
      tk = Bk(2789),
      ak = Bk(1387),
      Xk = Bk(1876),
      bk = Bk(36359),
      wk = Bk(606),
      dk = Bk(1020),
      sk = Bk.n(dk),
      Vk = Bk(1069);
    const Jk = {},
      Ak = (0, Rk.memo)((function() {
        const kk = (0, tk.b)();
        return (0, ak.f)("damagedByOtherPlayer", (Fk => {
          let {
            xB: Bk,
            direction: Rk
          } = Fk;
          const tk = Bk || "nonDirectional";
          if (Jk[tk]) {
            const Fk = Jk[tk];
            clearTimeout(Fk.timeout), Fk.direction = Rk, Fk.timeout = setTimeout((() => {
              delete Jk[tk], kk()
            }), 800)
          } else Jk[tk] = {
            direction: Rk,
            vU: null,
            timeout: setTimeout((() => {
              delete Jk[tk], kk()
            }), 800)
          };
          kk()
        })), (0, Xk.b)("kill", (Fk => {
          let {
            killer: Bk,
            victim: Rk
          } = Fk;
          const tk = Rk.id;
          Bk.local && tk && tk in Jk && (clearTimeout(Jk[tk].timeout), delete Jk[tk], kk())
        })), (0, Rk.useEffect)((() => {
          const kk = (0, bk.g)("turnDamageIndicators", ek);
          return () => {
            kk();
            for (const kk in Jk) clearTimeout(Jk[kk].timeout), delete Jk[kk]
          }
        }), []), (0, Vk.jsx)("div", {
          className: "DirectionalDamage",
          children: Object.entries(Jk).map((kk => {
            let [Fk, Bk] = kk;
            const Rk = (0, wk.F)(Bk.direction);
            return (0, Vk.jsx)("div", {
              ref: kk => {
                Jk[Fk] && (Jk[Fk].vU = kk)
              },
              className: sk()("DamageIndicator", {
                DamageIndicatorFullCircle: Rk
              })
            }, Fk)
          }))
        })
      }));

    function ek(kk) {
      for (const Fk in Jk) {
        const {
          direction: Bk,
          vU: Rk
        } = Jk[Fk];
        if ((0, wk.F)(Bk)) continue;
        const tk = Bk - kk;
        Rk.style.rotate = `${tk}rad`
      }
    }
  },
  36232: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => tk,
      f: () => ak
    });
    let Rk = !1;

    function tk() {
      return Rk
    }

    function ak(kk) {
      return Rk !== kk && (Rk = kk, !0)
    }
  },
  8941: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => ak,
      g: () => tk
    });
    var Rk = Bk(22);

    function tk(kk, Fk) {
      return kk && !Fk
    }

    function ak() {
      return tk(Rk.c.get("isTouchScreen"), Rk.c.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  40089: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      startPadGameplay: () => ik
    });
    Bk(39957);
    var Rk = Bk(39962),
      tk = Bk(3546),
      ak = Bk(22),
      Xk = Bk(38710),
      bk = Bk(3478),
      wk = Bk(38729),
      dk = Bk(29),
      sk = Bk(2626),
      Vk = Bk(38077),
      Jk = Bk(8529),
      Ak = Bk(39970);
    const ek = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var yk = Bk(39993),
      fk = Bk(8509);
    const mk = kk => kk.padSneakToggled || !!ak.c.get("clientEscMenuOptions").crouchIsToggle && kk.crouchToggled,
      Wk = () => {
        const kk = (() => {
          const kk = (0, Jk.e)();
          let Fk = ek;
          const Bk = new Ak.b;
          let Rk = !1,
            tk = 0;
          const ak = () => {
            const Bk = performance.now(),
              ak = 0 === tk ? 0 : Bk - tk;
            if (tk = Bk, !Rk) return kk.discardPending(), null;
            const Xk = (0, Ak.j)(Fk, ak),
              bk = kk.drainLookDelta(),
              wk = (0, Vk.h)();
            return {
              ZE: (Xk.ZE + bk.ZE) * wk,
              pE: (Xk.pE + bk.pE) * wk
            }
          };
          return {
            update: (kk, tk, Xk, bk) => {
              kk.camera.rC !== ak && (kk.camera.rC = ak), Rk = !0, Fk = (0, Ak.m)(Bk, tk, Xk, bk, performance.now())
            },
            release: () => {
              Rk = !1, Fk = ek, Bk.reset()
            },
            uninstall: kk => {
              kk.camera.rC === ak && (kk.camera.rC = null)
            }
          }
        })();
        return {
          update: (Fk, Bk, Rk) => {
            kk.update((0, sk.d)(), Fk, Bk, Rk)
          },
          release: kk.release,
          uninstall: () => {
            const Fk = (0, sk.d)();
            Fk && kk.uninstall(Fk)
          }
        }
      };
    var vk = Bk(39984);
    Bk(37345), Bk(8388);
    Bk(8407).c;
    const ik = () => {
      const kk = (0, vk.e)((() => {
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
            bodies: () => (0, Xk.b)(),
            look: Wk(),
            move: (Fk, Bk) => {
              const Rk = (0, sk.d)(),
                tk = Rk.Tv.HFk();
              if (kk.x = Fk.x, kk.y = Fk.y, kk.magnitude = Fk.magnitude, kk.headingOffset = Fk.headingOffset, kk.jumpHeld = Fk.jumpHeld, Fk.jumpPressed && (kk.jumpPressedSinceTick = !0), kk.running = Fk.running, kk.sprintHeld = Fk.sprintHeld, Bk) {
                const Fk = (0, yk.f)({
                  ...Bk,
                  descending: Rk.Tv.ckk(Rk.DH).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!Rk.Fv.canCrouch,
                  toggled: mk(tk)
                });
                kk.crouchHeld = Fk.crouchHeld, tk.padSneakToggled = Fk.toggled, tk.crouchToggled = !1, (0, fk.c)(Fk.toggled)
              }
              tk.gamepad = kk
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
              const Bk = null === (Fk = (0, sk.d)()) || void 0 === Fk ? void 0 : Fk.Tv.HFk();
              (null === Bk || void 0 === Bk ? void 0 : Bk.gamepad) === kk && (Bk.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: kk => {
              const Fk = (0, sk.d)(),
                Bk = null === Fk || void 0 === Fk ? void 0 : Fk.Tv.HFk();
              "touch" === kk ? ((0, fk.c)(!1), null !== Bk && void 0 !== Bk && Bk.padSneakToggled && (Bk.padSneakToggled = !1, Bk.isTouchscreen && !Bk.gamepad && Fk.Tv.FFk(Fk.DH).setCrouching(!!Fk.Fv.canCrouch && Bk.touchCrouch))) : "gamepad" === kk && Bk && (0, fk.c)(mk(Bk))
            },
            hasPlayer: () => {
              var kk;
              return !(null === (kk = (0, sk.d)()) || void 0 === kk || !kk.DH)
            },
            isPlayerDead: () => {
              var kk;
              const Fk = (0, sk.d)();
              return !1 === (null === (kk = Fk.Tv.YFk(Fk.DH)) || void 0 === kk ? void 0 : kk.isAlive)
            },
            isReplayMode: () => {
              var kk, Fk;
              return !(null === (kk = (0, sk.b)()) || void 0 === kk || null === (Fk = kk.client) || void 0 === Fk || !Fk.isReplayMode())
            },
            isFreeCameraOn: () => {
              var kk, Fk, Bk;
              return !(null === (kk = (0, sk.b)()) || void 0 === kk || null === (Fk = kk.client) || void 0 === Fk || null === (Bk = Fk.freeCameraController) || void 0 === Bk || !Bk.isEnabled())
            },
            targetsBlock: () => !!(0, sk.d)().tkk,
            selectedSlotEmpty: () => {
              var kk;
              const Fk = (0, sk.d)();
              return !(null !== (kk = Fk.Tv.RFk(Fk.DH)) && void 0 !== kk && kk.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const kk = (0, sk.d)().Fv;
              return !!kk.creative && !!kk.canPickBlocks
            },
            scrollHotbar: kk => {
              dk.o.Hf("ScrollInventorySlot", kk)
            },
            hasFullInventory: () => (0, wk.c)((0, sk.d)()),
            hasLobbyLeaderboard: () => !!(0, sk.d)().Fv.lobbyLeaderboardInfo,
            contextActionInputs: () => {
              var kk, Fk, Bk, Rk;
              const tk = (0, sk.d)();
              return {
                holdingGun: !(null === (kk = tk.Tv.oFk(tk.DH)) || void 0 === kk || null === (Fk = kk.TY) || void 0 === Fk || !Fk.isGun()),
                customButtons: null !== (Bk = tk.Fv.customButtons) && void 0 !== Bk ? Bk : null,
                touchscreenActionButton: null !== (Rk = tk.Fv.touchscreenActionButton) && void 0 !== Rk ? Rk : null
              }
            },
            pressTouchButton: kk => {
              (0, bk.sendColyMessage)(tk.Xj, kk)
            }
          }
        })()),
        Fk = (0, Rk.d)(),
        Bk = null,
        ak = null;
      return () => {
        kk(), Fk(), null === Bk || void 0 === Bk || Bk(), null === ak || void 0 === ak || ak()
      }
    }
  },
  36340: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      C: () => ek,
      G: () => Wk,
      d: () => ak,
      h: () => yk,
      l: () => fk,
      p: () => bk,
      s: () => Jk,
      u: () => mk,
      w: () => Vk,
      z: () => vk
    });
    var Rk = Bk(22),
      tk = Bk(29);
    const ak = "clientGameInventoryButtonsChanged",
      Xk = new Map;

    function bk() {
      return [...Xk.values()].sort(((kk, Fk) => {
        var Bk, Rk;
        return (null !== (Bk = kk.order) && void 0 !== Bk ? Bk : 0) - (null !== (Rk = Fk.order) && void 0 !== Rk ? Rk : 0)
      }))
    }
    let wk = null;

    function dk(kk) {
      wk = kk
    }
    let sk = !1;

    function Vk(kk) {
      sk = !0;
      try {
        kk.onClick()
      } finally {
        sk = !1
      }
      kk.panel && "clientGame" === Rk.c.get("openInGameMenuName") && dk(kk.id)
    }

    function Jk() {
      return sk
    }

    function Ak() {
      return bk().filter((kk => kk.panel && !kk.disabled))
    }

    function ek(kk) {
      const Fk = Ak(),
        Bk = Fk.findIndex((kk => kk.id === wk));
      return !(Bk < 0 || Fk.length < 2) && (Vk(Fk[(Bk + kk + Fk.length) % Fk.length]), !0)
    }

    function yk() {
      return null !== wk && Ak().length > 1
    }

    function fk() {
      dk(null)
    }

    function mk() {
      "inventory" !== Rk.c.get("openInGameMenuName") && dk(null)
    }

    function Wk() {
      const kk = wk;
      return dk(null), kk
    }

    function vk(kk) {
      return Xk.set(kk.id, kk), tk.o.Hf(ak, bk(), !0), () => {
        Xk.get(kk.id) === kk && (Xk.delete(kk.id), tk.o.Hf(ak, bk()))
      }
    }
  },
  36332: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => bk,
      f: () => fk,
      i: () => mk,
      l: () => Jk,
      o: () => dk,
      q: () => yk,
      s: () => Ak,
      w: () => sk
    });
    var Rk = Bk(22),
      tk = Bk(29),
      ak = Bk(1239),
      Xk = Bk(36340);
    const bk = "clientGameUiChanged";
    let wk = null;

    function dk() {
      return wk
    }

    function sk(kk, Fk) {
      const Bk = {
        content: kk,
        menu: Fk
      };
      return wk = Bk, tk.o.Hf(bk, wk, !0), () => {
        wk === Bk && (wk = null, ek = !1, fk(), tk.o.Hf(bk, null))
      }
    }
    let Vk = null;

    function Jk() {
      return Vk
    }

    function Ak(kk) {
      return Vk = kk, () => {
        Vk === kk && (Vk = null)
      }
    }
    let ek = !1;

    function yk() {
      const kk = Rk.c.get("openInGameMenuName");
      "clientGame" !== kk && (ek = "inventory" === kk), (0, Xk.s)() || (0, Xk.l)(), (0, ak.m)(ak.e), Rk.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function fk() {
      Wk(!1)
    }

    function mk() {
      Wk(ek)
    }

    function Wk(kk) {
      "clientGame" === Rk.c.get("openInGameMenuName") && Rk.c.set({
        openInGameMenuName: kk ? "inventory" : null
      }), kk || (0, Xk.l)(), ek = !1
    }
  },
  36225: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => wk
    });
    var Rk = Bk(279),
      tk = Bk(22),
      ak = Bk(36232),
      Xk = Bk(1585),
      bk = Bk(1881);

    function wk(kk, Fk) {
      var Bk, wk, dk;
      if (!tk.c.get("isKeydownEnabled") || kk.repeat) return;
      const sk = kk.code;
      "Escape" === kk.key ? (0, Xk.g)(kk) : null !== (Bk = bk.s.OpenSettings) && void 0 !== Bk && Bk.includes(sk) ? (0, Xk.x)(kk, Rk.p.SETTINGS) : null !== (wk = bk.s.OpenCharacterCustomization) && void 0 !== wk && wk.includes(sk) ? (0, ak.d)() || (0, Xk.x)(kk, Rk.p.CUSTOMISATION, Fk()) : null !== (dk = bk.s.ShowDebugOverlay) && void 0 !== dk && dk.includes(sk) && tk.c.set({
        showDebugOverlay: !tk.c.get("showDebugOverlay")
      })
    }
  },
  36202: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Jk,
      i: () => sk,
      j: () => Ak,
      k: () => Vk
    });
    var Rk = Bk(291),
      tk = Bk(631),
      ak = Bk(637),
      Xk = Bk(42);
    const bk = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      wk = "playSessionGameNameWithVariation",
      dk = "wasMatchmakePlayer";

    function sk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xk.j;
      (0, ak.g)(kk, bk)
    }

    function Vk() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xk.j).setItem(dk, !0)
    }

    function Jk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xk.j;
      return (0, ak.c)(kk, bk)
    }

    function Ak(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xk.j;
      const Bk = (0, ak.c)(Fk, bk),
        sk = function(kk) {
          const Fk = kk.getItem(wk);
          return "string" !== typeof Fk ? null : Fk
        }(Fk),
        Vk = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xk.j).getItem(dk)
        }(Fk);
      let Jk;
      return Jk = null !== Bk && null !== sk && (0, ak.f)(Fk, bk) && function(kk, Fk, Bk) {
          const tk = (0, Rk.Vb)(kk),
            ak = (0, Rk.Vb)(Fk),
            Xk = (0, Rk.Rb)(kk),
            bk = (0, Rk.Rb)(Fk);
          return !(tk !== ak || !Bk) || tk === ak && Xk === bk
        }(sk, kk, Vk) ? Bk : (0, tk.d)(), (0, ak.j)(Fk, bk, Jk), Fk.setItem(wk, kk),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xk.j).removeItem(dk)
        }(Fk), Jk
    }
  },
  36194: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Wk,
      f: () => vk
    });
    var Rk = Bk(994),
      tk = Bk(608),
      ak = Bk(291),
      Xk = Bk(1e3),
      bk = Bk(624),
      wk = Bk(646),
      dk = Bk(4258),
      sk = Bk(98),
      Vk = Bk(132),
      Jk = Bk(1650),
      Ak = Bk(112),
      ek = Bk(36202),
      yk = Bk(42),
      fk = Bk(633),
      mk = Bk(36204);

    function Wk() {
      var kk, Fk;
      return [...null !== (kk = navigator.languages) && void 0 !== kk ? kk : [null !== (Fk = navigator.language) && void 0 !== Fk ? Fk : "none"], "en-Gb"]
    }

    function vk(kk, Fk, Bk, vk, ik) {
      const Yk = (0, Rk.n)(Fk) ? (0, Rk.v)(Fk) : null,
        Lk = {
          cookies: (0, Jk.getAllCookiesForGameNameWithVariation)(Fk),
          isMobile: (0, sk.isMobile)(),
          isUsingCustomGameTexturePack: null !== Yk && ik(Yk),
          generalCookies: {
            joinDiscord: !!yk.i.getItem("DiscordPressed"),
            newGo: dk.b,
            ...kk.getMetricsCookies(),
            trafficCode: vk,
            compliance: sk.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, sk.getBrowserName)(),
            version: (0, sk.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, sk.getPlatformType)(),
            deviceType: (0, Ak.c)()
          },
          isLoggedIn: kk.isLoggedIn(),
          lobbyName: Bk,
          languages: Wk(),
          version: tk.e,
          siteUsed: Vk.q,
          subsiteUsed: Vk.z,
          playSessionId: (0, ek.j)(Fk),
          visitSessionId: (0, fk.e)(),
          clientReason: bk.i.reason,
          budgetBasis: (0, mk.g)(),
          ...null !== wk.l && {
            diagClaim: wk.l.claimId
          }
        };
      return null !== Yk && (0, ak.Gc)(Yk) ? (Lk.lobbyName = (0, Rk.j)(Yk, (0, Rk.r)(Fk), Bk), {
        roomName: `classic_${Xk.c}`,
        joinOptions: Lk
      }) : {
        roomName: Fk,
        joinOptions: Lk
      }
    }
  },
  36217: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Rk,
      e: () => tk,
      f: () => ak
    });
    const Rk = 1024,
      tk = 1024 * Rk;

    function ak(kk) {
      return (kk / tk).toFixed(1)
    }
  },
  36209: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => ak,
      e: () => bk,
      f: () => Xk,
      i: () => wk,
      l: () => dk
    });
    var Rk = Bk(182);
    const tk = 32 * Bk(36217).e,
      ak = 6144,
      Xk = 4608,
      bk = 512;

    function wk(kk) {
      return Math.floor(tk * kk / ak)
    }

    function dk(kk) {
      const Fk = kk - Math.floor(kk / 6);
      let Bk = Rk.h.maxChunkHorizAddDistance,
        tk = Rk.h.maxChunkVertAddDistance;
      if (sk(Bk + 1, tk + 1) <= Fk) return null;
      for (; sk(Bk + 1, tk + 1) > Fk && (Bk > 0 || tk > 0);) Bk > tk ? Bk-- : tk--;
      return {
        horizontal: Bk,
        vertical: tk
      }
    }

    function sk(kk, Fk) {
      const Bk = Math.max(kk, Fk);
      let Rk = 0;
      for (let tk = -Bk; tk <= Bk; tk++)
        for (let ak = -Bk; ak <= Bk; ak++)
          for (let Xk = -Bk; Xk <= Bk; Xk++) Vk(kk, Fk, tk, ak, Xk) && Rk++;
      return Rk
    }

    function Vk(kk, Fk, Bk, Rk, tk) {
      const ak = Bk * Bk + tk * tk;
      return kk === Fk ? ak + Rk * Rk <= kk * kk : kk > Fk ? Math.abs(Rk) <= Fk && ak + Rk * Rk <= kk * kk : ak <= kk * kk && ak + Rk * Rk <= Fk * Fk
    }
  },
  36204: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Lk,
      g: () => Yk,
      k: () => ik
    });
    var Rk = Bk(182),
      tk = Bk(98),
      ak = Bk(2722),
      Xk = Bk(4143),
      bk = Bk(629),
      wk = Bk(36209);
    const dk = 1048576,
      sk = 1024 * dk,
      Vk = 400 * dk,
      Jk = 147456,
      Ak = .5,
      ek = 1.5 * sk,
      yk = 768 * dk;

    function fk(kk) {
      return Vk + kk * Jk
    }

    function mk(kk, Fk, Bk) {
      var tk, Xk;
      let {
        footprintBytes: bk,
        basis: dk,
        namesLimit: mk
      } = function(kk) {
        const {
          os: Fk,
          deviceMemory: Bk
        } = kk;
        if ("ios" === Fk) switch ((0, ak.d)(kk)) {
          case "ipad_m":
            return {
              footprintBytes: fk(wk.b), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: yk, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: ek, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: yk, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof Bk && Number.isFinite(Bk) && Bk > 0 ? {
          footprintBytes: Bk * sk * Ak,
          basis: `memory-${Bk}`,
          namesLimit: !0
        } : "android" === Fk ? {
          footprintBytes: yk,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: fk(wk.f),
          basis: "unreported",
          namesLimit: !1
        }
      }(kk);
      if (Bk) {
        const kk = Math.min(bk, fk(wk.b));
        bk = Vk + Math.max(0, kk - Vk) / 2, dk += "+killed", mk = !0
      }
      null !== Fk && fk(Fk) < bk && (bk = fk(Fk), dk += "+learned", mk = !0);
      const Wk = function(kk) {
          const Fk = Math.floor((kk - Vk) / Jk);
          return Math.min(wk.b, Math.max(wk.e, Fk))
        }(bk),
        vk = (0, wk.l)(Wk);
      return {
        footprintBytes: bk,
        shedFootprintBytes: mk ? Math.max(bk, fk(Wk)) : null,
        chunkCap: Wk,
        maxHorizDistance: null !== (tk = null === vk || void 0 === vk ? void 0 : vk.horizontal) && void 0 !== tk ? tk : Rk.h.maxChunkHorizAddDistance,
        maxVertDistance: null !== (Xk = null === vk || void 0 === vk ? void 0 : vk.vertical) && void 0 !== Xk ? Xk : Rk.h.maxChunkVertAddDistance,
        basis: dk
      }
    }
    let Wk = null;

    function vk() {
      return mk({
        os: (0, tk.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, ak.g)()
      }, (0, Xk.g)(), (0, bk.I)("wasm").length > 0)
    }

    function ik() {
      return Wk ??= vk(), Wk
    }

    function Yk() {
      var kk;
      return (null !== (kk = Wk) && void 0 !== kk ? kk : vk()).basis
    }

    function Lk(kk, Fk) {
      return kk.setChunkCap(Fk.chunkCap)
    }
  },
  36536: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => tk,
      f: () => ak,
      g: () => Jk,
      i: () => bk,
      k: () => wk,
      o: () => dk,
      q: () => Vk,
      t: () => sk,
      v: () => Xk
    });
    var Rk = Bk(1192);
    let tk = function(kk) {
        return kk[kk.Join = 0] = "Join", kk[kk.Leave = 1] = "Leave", kk[kk.Push = 2] = "Push", kk[kk.Cursor = 3] = "Cursor", kk[kk.Submit = 4] = "Submit", kk[kk.ReloadAsVariation = 5] = "ReloadAsVariation", kk[kk.CreateFile = 6] = "CreateFile", kk[kk.RenameFile = 7] = "RenameFile", kk[kk.DeleteFile = 8] = "DeleteFile", kk[kk.SetEngine = 9] = "SetEngine", kk[kk.RenameFolder = 10] = "RenameFolder", kk
      }({}),
      ak = function(kk) {
        return kk[kk.Joined = 0] = "Joined", kk[kk.Updates = 1] = "Updates", kk[kk.Presence = 2] = "Presence", kk[kk.RemoteCursor = 3] = "RemoteCursor", kk[kk.ForceClose = 4] = "ForceClose", kk[kk.LobbyFilesChanged = 5] = "LobbyFilesChanged", kk[kk.EngineSettings = 6] = "EngineSettings", kk
      }({});

    function Xk(kk) {
      return "lobby" === kk.kind ? `lobby:${kk.path}` : `codeBlock:${kk.pos[0]},${kk.pos[1]},${kk.pos[2]}`
    }

    function bk(kk) {
      if ("lobby" === kk) return {
        kind: "lobby",
        path: Rk.h
      };
      if (kk.startsWith("lobby:")) {
        const Fk = kk.slice(6);
        return Vk(Fk) ? {
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

    function wk(kk) {
      return kk.endsWith(".d.ts")
    }

    function dk(kk) {
      return kk.endsWith(".ts") && !wk(kk)
    }
    const sk = 64;

    function Vk(kk) {
      if (!kk || kk !== kk.trim()) return !1;
      if (kk.length > sk) return !1;
      if (kk.startsWith("/") || kk.includes("\\") || kk.includes("\0")) return !1;
      if (!wk(kk) && !dk(kk) && ! function(kk) {
          return kk.endsWith(".js") && !kk.endsWith(".min.js") && !kk.endsWith(".bundle.js")
        }(kk)) return !1;
      const Fk = kk.split("/");
      for (const Bk of Fk)
        if ("" === Bk || "." === Bk || ".." === Bk) return !1;
      return !0
    }
    const Jk = 14e3
  },
  38677: (kk, Fk, Bk) => {
    function Rk(kk, Fk, Bk, Rk, tk) {
      var ak = {};
      return Object.keys(Rk).forEach((function(kk) {
        ak[kk] = Rk[kk]
      })), ak.enumerable = !!ak.enumerable, ak.configurable = !!ak.configurable, ("value" in ak || ak.initializer) && (ak.writable = !0), ak = Bk.slice().reverse().reduce((function(Bk, Rk) {
        return Rk(kk, Fk, Bk) || Bk
      }), ak), tk && void 0 !== ak.initializer && (ak.value = ak.initializer ? ak.initializer.call(tk) : void 0, ak.initializer = void 0), void 0 === ak.initializer && (Object.defineProperty(kk, Fk, ak), ak = null), ak
    }
    Bk.d(Fk, {
      c: () => Rk
    })
  },
  38674: (kk, Fk, Bk) => {
    function Rk(kk, Fk, Bk, Rk) {
      Bk && Object.defineProperty(kk, Fk, {
        enumerable: Bk.enumerable,
        configurable: Bk.configurable,
        writable: Bk.writable,
        value: Bk.initializer ? Bk.initializer.call(Rk) : void 0
      })
    }
    Bk.d(Fk, {
      b: () => Rk
    })
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);