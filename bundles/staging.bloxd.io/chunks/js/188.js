export const id = 188;
export const ids = [188];
export const modules = {
  38660: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => TU,
      d: () => EU
    });
    var tU = gU(3785);
    let pU = null;

    function EU(UU) {
      return null !== pU && UU === pU
    }

    function PU() {
      this.Ws = !1, this.stopPropagation = !1, this.Xs = !1, this.disabled = !1
    }
    class TU {
      constructor(UU, RU) {
        this.version = "0.7.0";
        var gU = Object.assign({}, new PU, RU || {});
        this.element = UU || document, this.Ws = !!gU.Ws, this.stopPropagation = !!gU.stopPropagation, this.Xs = !!gU.Xs, this.disabled = !!gU.disabled, this.filterEvents = (UU, RU) => !0, this.down = new tU.EventEmitter, this.up = new tU.EventEmitter, this.state = {}, this.Fs = {
          dx: 0,
          dy: 0,
          YUU: 0,
          BUU: 0,
          VUU: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? KU(this) : document.addEventListener("DOMContentLoaded", (UU => {
          KU(this)
        }), {
          once: !0
        })
      }
      bind(UU) {
        for (var RU = arguments.length, gU = new Array(RU > 1 ? RU - 1 : 0), tU = 1; tU < RU; tU++) gU[tU - 1] = arguments[tU];
        gU.forEach((RU => {
          var gU = this._keyBindmap[RU] || [];
          gU.includes(UU) || (gU.push(UU), this._keyBindmap[RU] = gU)
        })), this.state[UU] = !!this.state[UU], this.pressCount[UU] = this.pressCount[UU] || 0, this.releaseCount[UU] = this.releaseCount[UU] || 0
      }
      unbind(UU) {
        for (var RU in this._keyBindmap) {
          var gU = this._keyBindmap[RU],
            tU = gU.indexOf(UU);
          tU > -1 && gU.splice(tU, 1)
        }
      }
      getBindings() {
        var UU = {};
        for (var RU in this._keyBindmap) {
          this._keyBindmap[RU].forEach((gU => {
            UU[gU] = UU[gU] || [], UU[gU].push(RU)
          }))
        }
        return UU
      }
      HG() {
        qU(this.Fs), qU(this.pressCount), qU(this.releaseCount)
      }
    }

    function qU(UU) {
      for (var RU in UU) UU[RU] = 0
    }

    function KU(UU) {
      window.addEventListener("keydown", QU.bind(null, UU, !0), !1), window.addEventListener("keyup", QU.bind(null, UU, !1), !1);
      var RU = {
        passive: !0
      };
      UU.element.addEventListener("touchstart", uU.bind(void 0, UU), {
        passive: !1
      }), UU.element.addEventListener("touchend", hU.bind(void 0, UU), RU), UU.element.addEventListener("mousedown", eU.bind(null, UU, !0), RU), window.document.addEventListener("mouseup", eU.bind(null, UU, !1), RU), UU.element.addEventListener("touchmove", WU.bind(null, UU), RU), UU.element.addEventListener("mousemove", WU.bind(null, UU), RU), window.PointerEvent, UU.element.addEventListener("wheel", fU.bind(null, UU), RU), UU.element.addEventListener("contextmenu", xU.bind(null, UU), !1), window.addEventListener("blur", JU.bind(null, UU), !1)
    }
    var cU = 0,
      GU = 0,
      jU = null;

    function uU(UU, RU) {
      RU.preventDefault(), CU(RU)
    }

    function CU(UU) {
      let RU = !1;
      for (let gU = 0; gU < UU.touches.length; ++gU)
        if (UU.touches[gU].identifier === jU) {
          RU = !0;
          break
        } if (!RU) {
        const RU = UU.changedTouches[0];
        cU = RU.clientX, GU = RU.clientY, jU = RU.identifier
      }
    }

    function hU(UU, RU) {
      for (var gU = RU.changedTouches, tU = 0; tU < gU.length; ++tU) gU[tU].identifier === jU && (jU = null)
    }

    function QU(UU, RU, gU) {
      try {
        wU(UU, gU), RU && gU.isTrusted && !gU.repeat && UU._keyStates[gU.code] && nU(UU, gU.code)
      } finally {
        bU(gU.code, RU, UU, gU)
      }
    }

    function eU(UU, RU, gU) {
      try {
        wU(UU, gU)
      } finally {
        ! function(UU, RU, gU) {
          if ("pointerId" in gU)
            if (RU) {
              if (null !== UU._touches.currID) return;
              UU._touches.currID = gU.pointerId
            } else {
              if (UU._touches.currID !== gU.pointerId) return;
              UU._touches.currID = null
            } var tU = "button" in gU ? gU.button + 1 : 1;
          bU("Mouse" + tU, RU, UU, gU)
        }(UU, RU, gU)
      }
    }

    function WU(UU, RU) {
      var gU = RU.movementX || RU.mozMovementX || 0,
        tU = RU.movementY || RU.mozMovementY || 0;
      if (RU.touches && 0 === (gU | tU)) {
        var pU = function(UU) {
          CU(UU);
          for (let RU = 0; RU < UU.changedTouches.length; ++RU)
            if (UU.changedTouches[RU].identifier == jU) {
              const gU = UU.changedTouches[RU],
                tU = [gU.clientX - cU, gU.clientY - GU];
              return cU = gU.clientX, GU = gU.clientY, tU
            } return console.error(`Did not find touch id ${jU}`), [0, 0]
        }(RU);
        gU = pU[0], tU = pU[1]
      }
      UU.Fs.dx += gU, UU.Fs.dy += tU
    }

    function fU(UU, RU) {
      wU(UU, RU);
      var gU = 1;
      switch (RU.deltaMode) {
        case 0:
          gU = 1;
          break;
        case 1:
          gU = 12;
          break;
        case 2:
          gU = UU.element.clientHeight || window.innerHeight
      }
      UU.Fs.YUU += (RU.deltaX || 0) * gU, UU.Fs.BUU += (RU.deltaY || 0) * gU, UU.Fs.VUU += (RU.deltaZ || 0) * gU
    }

    function xU(UU, RU) {
      if (!UU.Xs) return RU.preventDefault(), !1
    }
    var mU = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function IU(UU, RU) {
      return !!UU[mU[RU]] || ("AltRight" === RU || "ControlLeft" === RU) && "function" === typeof UU.getModifierState && !0 === UU.getModifierState("AltGraph")
    }

    function JU(UU, RU) {
      for (var gU in UU._modifiersHeldThroughBlur = {}, mU) UU._keyStates[gU] && (UU._modifiersHeldThroughBlur[gU] = !0);
      RU && RU.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (UU) {
          return !0
        }
      }() && (clearTimeout(UU._blurRelease), UU._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var RU in UU._modifiersHeldThroughBlur = {}, UU._keyStates) UU._keyStates[RU] && !/^Mouse\d/.test(RU) && nU(UU, RU)
      }), 0))
    }

    function wU(UU, RU) {
      var gU = UU._modifiersHeldThroughBlur;
      if (gU && RU.isTrusted && document.hasFocus())
        for (var tU in gU) delete gU[tU], UU._keyStates[tU] && tU !== RU.code && (IU(RU, tU) || nU(UU, tU))
    }

    function nU(UU, RU) {
      const gU = {
          code: RU,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        tU = pU;
      pU = gU;
      try {
        bU(RU, !1, UU, gU)
      } finally {
        pU = tU
      }
    }

    function bU(UU, RU, gU, tU) {
      var pU = gU._keyBindmap[UU];
      pU && (oU(gU._keyStates[UU], RU) && (gU._keyStates[UU] = RU, pU.forEach((UU => {
        (!gU.filterEvents || gU.filterEvents(tU, UU)) && function(UU, RU, gU, tU) {
          var pU = RU ? gU.pressCount : gU.releaseCount;
          pU[UU] = (pU[UU] || 0) + 1;
          var EU = gU._bindPressCount[UU] || 0;
          (EU += RU ? 1 : -1) < 0 && (EU = 0);
          gU._bindPressCount[UU] = EU;
          var PU = gU.state[UU];
          if (oU(PU, EU)) {
            gU.state[UU] = EU > 0;
            var TU = RU ? gU.down : gU.up;
            gU.disabled || TU.emit(UU, tU)
          }
        }(UU, RU, gU, tU)
      }))), "button" in tU || (gU.Ws && !tU.defaultPrevented && tU.preventDefault(), gU.stopPropagation && tU.stopPropagation()))
    }

    function oU(UU, RU) {
      return UU ? !RU : RU
    }
  },
  36266: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => uU,
      g: () => CU
    });
    var tU = gU(56),
      pU = gU(2691),
      EU = gU(1410),
      PU = gU(1834),
      TU = gU(36209),
      qU = gU(581),
      KU = gU(1037),
      cU = gU.n(KU),
      GU = gU(1090);
    const jU = {},
      uU = (0, tU.memo)((function() {
        const UU = (0, pU.b)();
        return (0, EU.e)("damagedByOtherPlayer", (RU => {
          let {
            yg: gU,
            direction: tU
          } = RU;
          const pU = gU || "nonDirectional";
          if (jU[pU]) {
            const RU = jU[pU];
            clearTimeout(RU.timeout), RU.direction = tU, RU.timeout = setTimeout((() => {
              delete jU[pU], UU()
            }), 800)
          } else jU[pU] = {
            direction: tU,
            mV: null,
            timeout: setTimeout((() => {
              delete jU[pU], UU()
            }), 800)
          };
          UU()
        })), (0, PU.d)("kill", (RU => {
          let {
            killer: gU,
            victim: tU
          } = RU;
          const pU = tU.id;
          gU.local && pU && pU in jU && (clearTimeout(jU[pU].timeout), delete jU[pU], UU())
        })), (0, tU.useEffect)((() => {
          const UU = (0, TU.f)("turnDamageIndicators", CU);
          return () => {
            UU();
            for (const UU in jU) clearTimeout(jU[UU].timeout), delete jU[UU]
          }
        }), []), (0, GU.jsx)("div", {
          className: "DirectionalDamage",
          children: Object.entries(jU).map((UU => {
            let [RU, gU] = UU;
            const tU = (0, qU.E)(gU.direction);
            return (0, GU.jsx)("div", {
              ref: UU => {
                jU[RU] && (jU[RU].mV = UU)
              },
              className: cU()("DamageIndicator", {
                DamageIndicatorFullCircle: tU
              })
            }, RU)
          }))
        })
      }));

    function CU(UU) {
      for (const RU in jU) {
        const {
          direction: gU,
          mV: tU
        } = jU[RU];
        if ((0, qU.E)(gU)) continue;
        const pU = gU - UU;
        tU.style.rotate = `${pU}rad`
      }
    }
  },
  36072: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => pU,
      d: () => EU
    });
    let tU = !1;

    function pU() {
      return tU
    }

    function EU(UU) {
      return tU !== UU && (tU = UU, !0)
    }
  },
  8925: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => EU,
      h: () => pU
    });
    var tU = gU(21);

    function pU(UU, RU) {
      return UU && !RU
    }

    function EU() {
      return pU(tU.b.get("isTouchScreen"), tU.b.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  40054: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      startPadGameplay: () => xU
    });
    gU(39924);
    var tU = gU(39928),
      pU = gU(3420),
      EU = gU(21),
      PU = gU(38628),
      TU = gU(3349),
      qU = gU(38646),
      KU = gU(24),
      cU = gU(2551),
      GU = gU(37992),
      jU = gU(8480),
      uU = gU(39934);
    const CU = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var hU = gU(39949),
      QU = gU(8457);
    const eU = UU => UU.padSneakToggled || !!EU.b.get("clientEscMenuOptions").crouchIsToggle && UU.crouchToggled,
      WU = () => {
        const UU = (() => {
          const UU = (0, jU.c)();
          let RU = CU;
          const gU = new uU.d;
          let tU = !1,
            pU = 0;
          const EU = () => {
            const gU = performance.now(),
              EU = 0 === pU ? 0 : gU - pU;
            if (pU = gU, !tU) return UU.discardPending(), null;
            const PU = (0, uU.o)(RU, EU),
              TU = UU.drainLookDelta(),
              qU = (0, GU.k)();
            return {
              Xw: (PU.Xw + TU.Xw) * qU,
              Ow: (PU.Ow + TU.Ow) * qU
            }
          };
          return {
            update: (UU, pU, PU, TU) => {
              UU.camera.SF !== EU && (UU.camera.SF = EU), tU = !0, RU = (0, uU.p)(gU, pU, PU, TU, performance.now())
            },
            release: () => {
              tU = !1, RU = CU, gU.reset()
            },
            uninstall: UU => {
              UU.camera.SF === EU && (UU.camera.SF = null)
            }
          }
        })();
        return {
          update: (RU, gU, tU) => {
            UU.update((0, cU.g)(), RU, gU, tU)
          },
          release: UU.release,
          uninstall: () => {
            const RU = (0, cU.g)();
            RU && UU.uninstall(RU)
          }
        }
      };
    var fU = gU(39942);
    gU(37186), gU(8355);
    gU(8376).c;
    const xU = () => {
      const UU = (0, fU.d)((() => {
          const UU = {
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
            bodies: () => (0, PU.b)(),
            look: WU(),
            move: (RU, gU) => {
              const tU = (0, cU.g)(),
                pU = tU.Im.JRU();
              if (UU.x = RU.x, UU.y = RU.y, UU.magnitude = RU.magnitude, UU.headingOffset = RU.headingOffset, UU.jumpHeld = RU.jumpHeld, RU.jumpPressed && (UU.jumpPressedSinceTick = !0), UU.running = RU.running, UU.sprintHeld = RU.sprintHeld, gU) {
                const RU = (0, hU.f)({
                  ...gU,
                  descending: tU.Im.bUU(tU.AY).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!tU.Qm.canCrouch,
                  toggled: eU(pU)
                });
                UU.crouchHeld = RU.crouchHeld, pU.padSneakToggled = RU.toggled, pU.crouchToggled = !1, (0, QU.h)(RU.toggled)
              }
              pU.gamepad = UU
            },
            stopMoving: () => {
              var RU;
              Object.assign(UU, {
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
              const gU = null === (RU = (0, cU.g)()) || void 0 === RU ? void 0 : RU.Im.JRU();
              (null === gU || void 0 === gU ? void 0 : gU.gamepad) === UU && (gU.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: UU => {
              const RU = (0, cU.g)(),
                gU = null === RU || void 0 === RU ? void 0 : RU.Im.JRU();
              "touch" === UU ? ((0, QU.h)(!1), null !== gU && void 0 !== gU && gU.padSneakToggled && (gU.padSneakToggled = !1, gU.isTouchscreen && !gU.gamepad && RU.Im.MUU(RU.AY).setCrouching(!!RU.Qm.canCrouch && gU.touchCrouch))) : "gamepad" === UU && gU && (0, QU.h)(eU(gU))
            },
            hasPlayer: () => {
              var UU;
              return !(null === (UU = (0, cU.g)()) || void 0 === UU || !UU.AY)
            },
            isPlayerDead: () => {
              var UU;
              const RU = (0, cU.g)();
              return !1 === (null === (UU = RU.Im.CRU(RU.AY)) || void 0 === UU ? void 0 : UU.isAlive)
            },
            isReplayMode: () => {
              var UU, RU;
              return !(null === (UU = (0, cU.c)()) || void 0 === UU || null === (RU = UU.client) || void 0 === RU || !RU.isReplayMode())
            },
            isFreeCameraOn: () => {
              var UU, RU, gU;
              return !(null === (UU = (0, cU.c)()) || void 0 === UU || null === (RU = UU.client) || void 0 === RU || null === (gU = RU.freeCameraController) || void 0 === gU || !gU.isEnabled())
            },
            targetsBlock: () => !!(0, cU.g)().N9,
            selectedSlotEmpty: () => {
              var UU;
              const RU = (0, cU.g)();
              return !(null !== (UU = RU.Im.LUU(RU.AY)) && void 0 !== UU && UU.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const UU = (0, cU.g)().Qm;
              return !!UU.creative && !!UU.canPickBlocks
            },
            scrollHotbar: UU => {
              KU.p.yh("ScrollInventorySlot", UU)
            },
            hasFullInventory: () => (0, qU.c)((0, cU.g)()),
            hasLobbyLeaderboard: () => !!(0, cU.g)().Qm.lobbyLeaderboardInfo,
            contextActionInputs: () => {
              var UU, RU, gU, tU;
              const pU = (0, cU.g)();
              return {
                holdingGun: !(null === (UU = pU.Im.hRU(pU.AY)) || void 0 === UU || null === (RU = UU.yI) || void 0 === RU || !RU.isGun()),
                customButtons: null !== (gU = pU.Qm.customButtons) && void 0 !== gU ? gU : null,
                touchscreenActionButton: null !== (tU = pU.Qm.touchscreenActionButton) && void 0 !== tU ? tU : null
              }
            },
            pressTouchButton: UU => {
              (0, TU.sendColyMessage)(pU.wj, UU)
            }
          }
        })()),
        RU = (0, tU.e)(),
        gU = null,
        EU = null;
      return () => {
        UU(), RU(), null === gU || void 0 === gU || gU(), null === EU || void 0 === EU || EU()
      }
    }
  },
  36197: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => EU,
      e: () => hU,
      g: () => QU,
      j: () => TU,
      n: () => jU,
      q: () => eU,
      r: () => GU,
      t: () => fU,
      w: () => CU,
      x: () => WU
    });
    var tU = gU(21),
      pU = gU(24);
    const EU = "clientGameInventoryButtonsChanged",
      PU = new Map;

    function TU() {
      return [...PU.values()].sort(((UU, RU) => {
        var gU, tU;
        return (null !== (gU = UU.order) && void 0 !== gU ? gU : 0) - (null !== (tU = RU.order) && void 0 !== tU ? tU : 0)
      }))
    }
    let qU = null;

    function KU(UU) {
      qU = UU
    }
    let cU = !1;

    function GU(UU) {
      cU = !0;
      try {
        UU.onClick()
      } finally {
        cU = !1
      }
      UU.panel && "clientGame" === tU.b.get("openInGameMenuName") && KU(UU.id)
    }

    function jU() {
      return cU
    }

    function uU() {
      return TU().filter((UU => UU.panel && !UU.disabled))
    }

    function CU(UU) {
      const RU = uU(),
        gU = RU.findIndex((UU => UU.id === qU));
      return !(gU < 0 || RU.length < 2) && (GU(RU[(gU + UU + RU.length) % RU.length]), !0)
    }

    function hU() {
      return null !== qU && uU().length > 1
    }

    function QU() {
      KU(null)
    }

    function eU() {
      "inventory" !== tU.b.get("openInGameMenuName") && KU(null)
    }

    function WU() {
      const UU = qU;
      return KU(null), UU
    }

    function fU(UU) {
      return PU.set(UU.id, UU), pU.p.yh(EU, TU(), !0), () => {
        PU.get(UU.id) === UU && (PU.delete(UU.id), pU.p.yh(EU, TU()))
      }
    }
  },
  36191: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => TU,
      h: () => QU,
      l: () => eU,
      p: () => jU,
      t: () => KU,
      w: () => hU,
      x: () => uU,
      y: () => cU
    });
    var tU = gU(21),
      pU = gU(24),
      EU = gU(1287),
      PU = gU(36197);
    const TU = "clientGameUiChanged";
    let qU = null;

    function KU() {
      return qU
    }

    function cU(UU, RU) {
      const gU = {
        content: UU,
        menu: RU
      };
      return qU = gU, pU.p.yh(TU, qU, !0), () => {
        qU === gU && (qU = null, CU = !1, QU(), pU.p.yh(TU, null))
      }
    }
    let GU = null;

    function jU() {
      return GU
    }

    function uU(UU) {
      return GU = UU, () => {
        GU === UU && (GU = null)
      }
    }
    let CU = !1;

    function hU() {
      const UU = tU.b.get("openInGameMenuName");
      "clientGame" !== UU && (CU = "inventory" === UU), (0, PU.n)() || (0, PU.g)(), (0, EU.o)(EU.c), tU.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function QU() {
      WU(!1)
    }

    function eU() {
      WU(CU)
    }

    function WU(UU) {
      "clientGame" === tU.b.get("openInGameMenuName") && tU.b.set({
        openInGameMenuName: UU ? "inventory" : null
      }), UU || (0, PU.g)(), CU = !1
    }
  },
  36066: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => qU
    });
    var tU = gU(299),
      pU = gU(21),
      EU = gU(36072),
      PU = gU(1567),
      TU = gU(1844);

    function qU(UU, RU) {
      var gU, qU, KU;
      if (!pU.b.get("isKeydownEnabled") || UU.repeat) return;
      const cU = UU.code;
      "Escape" === UU.key ? (0, PU.g)(UU) : null !== (gU = TU.r.OpenSettings) && void 0 !== gU && gU.includes(cU) ? (0, PU.w)(UU, tU.n.SETTINGS) : null !== (qU = TU.r.OpenCharacterCustomization) && void 0 !== qU && qU.includes(cU) ? (0, EU.c)() || (0, PU.w)(UU, tU.n.CUSTOMISATION, RU()) : null !== (KU = TU.r.ShowDebugOverlay) && void 0 !== KU && KU.includes(cU) && pU.b.set({
        showDebugOverlay: !pU.b.get("showDebugOverlay")
      })
    }
  },
  36033: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => jU,
      d: () => cU,
      f: () => uU,
      i: () => GU
    });
    var tU = gU(311),
      pU = gU(616),
      EU = gU(631),
      PU = gU(34);
    const TU = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      qU = "playSessionGameNameWithVariation",
      KU = "wasMatchmakePlayer";

    function cU() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PU.l;
      (0, EU.k)(UU, TU)
    }

    function GU() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PU.l).setItem(KU, !0)
    }

    function jU() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PU.l;
      return (0, EU.d)(UU, TU)
    }

    function uU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PU.l;
      const gU = (0, EU.d)(RU, TU),
        cU = function(UU) {
          const RU = UU.getItem(qU);
          return "string" !== typeof RU ? null : RU
        }(RU),
        GU = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PU.l).getItem(KU)
        }(RU);
      let jU;
      return jU = null !== gU && null !== cU && (0, EU.g)(RU, TU) && function(UU, RU, gU) {
          const pU = (0, tU.Wb)(UU),
            EU = (0, tU.Wb)(RU),
            PU = (0, tU.Sb)(UU),
            TU = (0, tU.Sb)(RU);
          return !(pU !== EU || !gU) || pU === EU && PU === TU
        }(cU, UU, GU) ? gU : (0, pU.e)(), (0, EU.l)(RU, TU, jU), RU.setItem(qU, UU),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PU.l).removeItem(KU)
        }(RU), jU
    }
  },
  36027: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => WU,
      d: () => fU
    });
    var tU = gU(994),
      pU = gU(587),
      EU = gU(311),
      PU = gU(1002),
      TU = gU(603),
      qU = gU(641),
      KU = gU(4187),
      cU = gU(96),
      GU = gU(135),
      jU = gU(1637),
      uU = gU(115),
      CU = gU(36033),
      hU = gU(34),
      QU = gU(623),
      eU = gU(36042);

    function WU() {
      var UU, RU;
      return [...null !== (UU = navigator.languages) && void 0 !== UU ? UU : [null !== (RU = navigator.language) && void 0 !== RU ? RU : "none"], "en-Gb"]
    }

    function fU(UU, RU, gU, fU, xU) {
      const mU = (0, tU.m)(RU) ? (0, tU.q)(RU) : null,
        IU = {
          cookies: (0, jU.getAllCookiesForGameNameWithVariation)(RU),
          isMobile: (0, cU.isMobile)(),
          isUsingCustomGameTexturePack: null !== mU && xU(mU),
          generalCookies: {
            joinDiscord: !!hU.k.getItem("DiscordPressed"),
            newGo: KU.c,
            ...UU.getMetricsCookies(),
            trafficCode: fU,
            compliance: cU.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, cU.getBrowserName)(),
            version: (0, cU.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, cU.getPlatformType)(),
            deviceType: (0, uU.b)()
          },
          isLoggedIn: UU.isLoggedIn(),
          lobbyName: gU,
          languages: WU(),
          version: pU.d,
          siteUsed: GU.t,
          subsiteUsed: GU.A,
          playSessionId: (0, CU.f)(RU),
          visitSessionId: (0, QU.c)(),
          clientReason: TU.n.reason,
          budgetBasis: (0, eU.g)(),
          ...null !== qU.q && {
            diagClaim: qU.q.claimId
          }
        };
      return null !== mU && (0, EU.Fc)(mU) ? (IU.lobbyName = (0, tU.k)(mU, (0, tU.p)(RU), gU), {
        roomName: `classic_${PU.f}`,
        joinOptions: IU
      }) : {
        roomName: RU,
        joinOptions: IU
      }
    }
  },
  36058: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU,
      e: () => pU,
      h: () => EU
    });
    const tU = 1024,
      pU = 1024 * tU;

    function EU(UU) {
      return (UU / pU).toFixed(1)
    }
  },
  36050: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => EU,
      h: () => TU,
      j: () => PU,
      n: () => qU,
      p: () => KU
    });
    var tU = gU(189);
    const pU = 32 * gU(36058).e,
      EU = 6144,
      PU = 4608,
      TU = 512;

    function qU(UU) {
      return Math.floor(pU * UU / EU)
    }

    function KU(UU) {
      const RU = UU - Math.floor(UU / 6);
      let gU = tU.e.maxChunkHorizAddDistance,
        pU = tU.e.maxChunkVertAddDistance;
      if (cU(gU + 1, pU + 1) <= RU) return null;
      for (; cU(gU + 1, pU + 1) > RU && (gU > 0 || pU > 0);) gU > pU ? gU-- : pU--;
      return {
        horizontal: gU,
        vertical: pU
      }
    }

    function cU(UU, RU) {
      const gU = Math.max(UU, RU);
      let tU = 0;
      for (let pU = -gU; pU <= gU; pU++)
        for (let EU = -gU; EU <= gU; EU++)
          for (let PU = -gU; PU <= gU; PU++) GU(UU, RU, pU, EU, PU) && tU++;
      return tU
    }

    function GU(UU, RU, gU, tU, pU) {
      const EU = gU * gU + pU * pU;
      return UU === RU ? EU + tU * tU <= UU * UU : UU > RU ? Math.abs(tU) <= RU && EU + tU * tU <= UU * UU : EU <= UU * UU && EU + tU * tU <= RU * RU
    }
  },
  36042: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => IU,
      g: () => mU,
      h: () => xU
    });
    var tU = gU(189),
      pU = gU(96),
      EU = gU(2636),
      PU = gU(4062),
      TU = gU(607),
      qU = gU(36050);
    const KU = 1048576,
      cU = 1024 * KU,
      GU = 400 * KU,
      jU = 147456,
      uU = .5,
      CU = 1.5 * cU,
      hU = 768 * KU;

    function QU(UU) {
      return GU + UU * jU
    }

    function eU(UU, RU, gU) {
      var pU, PU;
      let {
        footprintBytes: TU,
        basis: KU,
        namesLimit: eU
      } = function(UU) {
        const {
          os: RU,
          deviceMemory: gU
        } = UU;
        if ("ios" === RU) switch ((0, EU.f)(UU)) {
          case "ipad_m":
            return {
              footprintBytes: QU(qU.e), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: hU, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: CU, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: hU, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof gU && Number.isFinite(gU) && gU > 0 ? {
          footprintBytes: gU * cU * uU,
          basis: `memory-${gU}`,
          namesLimit: !0
        } : "android" === RU ? {
          footprintBytes: hU,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: QU(qU.j),
          basis: "unreported",
          namesLimit: !1
        }
      }(UU);
      if (gU) {
        const UU = Math.min(TU, QU(qU.e));
        TU = GU + Math.max(0, UU - GU) / 2, KU += "+killed", eU = !0
      }
      null !== RU && QU(RU) < TU && (TU = QU(RU), KU += "+learned", eU = !0);
      const WU = function(UU) {
          const RU = Math.floor((UU - GU) / jU);
          return Math.min(qU.e, Math.max(qU.h, RU))
        }(TU),
        fU = (0, qU.p)(WU);
      return {
        footprintBytes: TU,
        shedFootprintBytes: eU ? Math.max(TU, QU(WU)) : null,
        chunkCap: WU,
        maxHorizDistance: null !== (pU = null === fU || void 0 === fU ? void 0 : fU.horizontal) && void 0 !== pU ? pU : tU.e.maxChunkHorizAddDistance,
        maxVertDistance: null !== (PU = null === fU || void 0 === fU ? void 0 : fU.vertical) && void 0 !== PU ? PU : tU.e.maxChunkVertAddDistance,
        basis: KU
      }
    }
    let WU = null;

    function fU() {
      return eU({
        os: (0, pU.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, EU.g)()
      }, (0, PU.f)(), (0, TU.D)("wasm").length > 0)
    }

    function xU() {
      return WU ??= fU(), WU
    }

    function mU() {
      var UU;
      return (null !== (UU = WU) && void 0 !== UU ? UU : fU()).basis
    }

    function IU(UU, RU) {
      return UU.setChunkCap(RU.chunkCap)
    }
  },
  36413: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => pU,
      c: () => EU,
      d: () => jU,
      e: () => TU,
      h: () => qU,
      j: () => KU,
      l: () => GU,
      o: () => cU,
      q: () => PU
    });
    var tU = gU(1238);
    let pU = function(UU) {
        return UU[UU.Join = 0] = "Join", UU[UU.Leave = 1] = "Leave", UU[UU.Push = 2] = "Push", UU[UU.Cursor = 3] = "Cursor", UU[UU.Submit = 4] = "Submit", UU[UU.ReloadAsVariation = 5] = "ReloadAsVariation", UU[UU.CreateFile = 6] = "CreateFile", UU[UU.RenameFile = 7] = "RenameFile", UU[UU.DeleteFile = 8] = "DeleteFile", UU[UU.SetEngine = 9] = "SetEngine", UU[UU.RenameFolder = 10] = "RenameFolder", UU
      }({}),
      EU = function(UU) {
        return UU[UU.Joined = 0] = "Joined", UU[UU.Updates = 1] = "Updates", UU[UU.Presence = 2] = "Presence", UU[UU.RemoteCursor = 3] = "RemoteCursor", UU[UU.ForceClose = 4] = "ForceClose", UU[UU.LobbyFilesChanged = 5] = "LobbyFilesChanged", UU[UU.EngineSettings = 6] = "EngineSettings", UU
      }({});

    function PU(UU) {
      return "lobby" === UU.kind ? `lobby:${UU.path}` : `codeBlock:${UU.pos[0]},${UU.pos[1]},${UU.pos[2]}`
    }

    function TU(UU) {
      if ("lobby" === UU) return {
        kind: "lobby",
        path: tU.d
      };
      if (UU.startsWith("lobby:")) {
        const RU = UU.slice(6);
        return GU(RU) ? {
          kind: "lobby",
          path: RU
        } : null
      }
      const RU = UU.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return RU ? {
        kind: "codeBlock",
        pos: [parseInt(RU[1]), parseInt(RU[2]), parseInt(RU[3])]
      } : null
    }

    function qU(UU) {
      return UU.endsWith(".d.ts")
    }

    function KU(UU) {
      return UU.endsWith(".ts") && !qU(UU)
    }
    const cU = 64;

    function GU(UU) {
      if (!UU || UU !== UU.trim()) return !1;
      if (UU.length > cU) return !1;
      if (UU.startsWith("/") || UU.includes("\\") || UU.includes("\0")) return !1;
      if (!qU(UU) && !KU(UU) && ! function(UU) {
          return UU.endsWith(".js") && !UU.endsWith(".min.js") && !UU.endsWith(".bundle.js")
        }(UU)) return !1;
      const RU = UU.split("/");
      for (const gU of RU)
        if ("" === gU || "." === gU || ".." === gU) return !1;
      return !0
    }
    const jU = 14e3
  },
  38584: (UU, RU, gU) => {
    function tU(UU, RU, gU, tU, pU) {
      var EU = {};
      return Object.keys(tU).forEach((function(UU) {
        EU[UU] = tU[UU]
      })), EU.enumerable = !!EU.enumerable, EU.configurable = !!EU.configurable, ("value" in EU || EU.initializer) && (EU.writable = !0), EU = gU.slice().reverse().reduce((function(gU, tU) {
        return tU(UU, RU, gU) || gU
      }), EU), pU && void 0 !== EU.initializer && (EU.value = EU.initializer ? EU.initializer.call(pU) : void 0, EU.initializer = void 0), void 0 === EU.initializer && (Object.defineProperty(UU, RU, EU), EU = null), EU
    }
    gU.d(RU, {
      c: () => tU
    })
  },
  38578: (UU, RU, gU) => {
    function tU(UU, RU, gU, tU) {
      gU && Object.defineProperty(UU, RU, {
        enumerable: gU.enumerable,
        configurable: gU.configurable,
        writable: gU.writable,
        value: gU.initializer ? gU.initializer.call(tU) : void 0
      })
    }
    gU.d(RU, {
      d: () => tU
    })
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);