export const id = 93;
export const ids = [91, 93];
export const modules = {
  38068: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => XT,
      e: () => kT
    });
    var iT = IT(3655);
    let zT = null;

    function kT(TT) {
      return null !== zT && TT === zT
    }

    function WT() {
      this.lq = !1, this.stopPropagation = !1, this.bq = !1, this.disabled = !1
    }
    class XT {
      constructor(TT, oT) {
        this.version = "0.7.0";
        var IT = Object.assign({}, new WT, oT || {});
        this.element = TT || document, this.lq = !!IT.lq, this.stopPropagation = !!IT.stopPropagation, this.bq = !!IT.bq, this.disabled = !!IT.disabled, this.filterEvents = (TT, oT) => !0, this.down = new iT.EventEmitter, this.up = new iT.EventEmitter, this.state = {}, this.xZ = {
          dx: 0,
          dy: 0,
          YTT: 0,
          QTT: 0,
          HTT: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? FT(this) : document.addEventListener("DOMContentLoaded", (TT => {
          FT(this)
        }), {
          once: !0
        })
      }
      bind(TT) {
        for (var oT = arguments.length, IT = new Array(oT > 1 ? oT - 1 : 0), iT = 1; iT < oT; iT++) IT[iT - 1] = arguments[iT];
        IT.forEach((oT => {
          var IT = this._keyBindmap[oT] || [];
          IT.includes(TT) || (IT.push(TT), this._keyBindmap[oT] = IT)
        })), this.state[TT] = !!this.state[TT], this.pressCount[TT] = this.pressCount[TT] || 0, this.releaseCount[TT] = this.releaseCount[TT] || 0
      }
      unbind(TT) {
        for (var oT in this._keyBindmap) {
          var IT = this._keyBindmap[oT],
            iT = IT.indexOf(TT);
          iT > -1 && IT.splice(iT, 1)
        }
      }
      getBindings() {
        var TT = {};
        for (var oT in this._keyBindmap) {
          this._keyBindmap[oT].forEach((IT => {
            TT[IT] = TT[IT] || [], TT[IT].push(oT)
          }))
        }
        return TT
      }
      dD() {
        BT(this.xZ), BT(this.pressCount), BT(this.releaseCount)
      }
    }

    function BT(TT) {
      for (var oT in TT) TT[oT] = 0
    }

    function FT(TT) {
      window.addEventListener("keydown", MT.bind(null, TT, !0), !1), window.addEventListener("keyup", MT.bind(null, TT, !1), !1);
      var oT = {
        passive: !0
      };
      TT.element.addEventListener("touchstart", xT.bind(void 0, TT), {
        passive: !1
      }), TT.element.addEventListener("touchend", KT.bind(void 0, TT), oT), TT.element.addEventListener("mousedown", rT.bind(null, TT, !0), oT), window.document.addEventListener("mouseup", rT.bind(null, TT, !1), oT), TT.element.addEventListener("touchmove", AT.bind(null, TT), oT), TT.element.addEventListener("mousemove", AT.bind(null, TT), oT), window.PointerEvent, TT.element.addEventListener("wheel", gT.bind(null, TT), oT), TT.element.addEventListener("contextmenu", hT.bind(null, TT), !1), window.addEventListener("blur", eT.bind(null, TT), !1)
    }
    var ST = 0,
      DT = 0,
      LT = null;

    function xT(TT, oT) {
      oT.preventDefault(), cT(oT)
    }

    function cT(TT) {
      let oT = !1;
      for (let IT = 0; IT < TT.touches.length; ++IT)
        if (TT.touches[IT].identifier === LT) {
          oT = !0;
          break
        } if (!oT) {
        const oT = TT.changedTouches[0];
        ST = oT.clientX, DT = oT.clientY, LT = oT.identifier
      }
    }

    function KT(TT, oT) {
      for (var IT = oT.changedTouches, iT = 0; iT < IT.length; ++iT) IT[iT].identifier === LT && (LT = null)
    }

    function MT(TT, oT, IT) {
      try {
        RT(TT, IT), oT && IT.isTrusted && !IT.repeat && TT._keyStates[IT.code] && uT(TT, IT.code)
      } finally {
        vT(IT.code, oT, TT, IT)
      }
    }

    function rT(TT, oT, IT) {
      try {
        RT(TT, IT)
      } finally {
        ! function(TT, oT, IT) {
          if ("pointerId" in IT)
            if (oT) {
              if (null !== TT._touches.currID) return;
              TT._touches.currID = IT.pointerId
            } else {
              if (TT._touches.currID !== IT.pointerId) return;
              TT._touches.currID = null
            } var iT = "button" in IT ? IT.button + 1 : 1;
          vT("Mouse" + iT, oT, TT, IT)
        }(TT, oT, IT)
      }
    }

    function AT(TT, oT) {
      var IT = oT.movementX || oT.mozMovementX || 0,
        iT = oT.movementY || oT.mozMovementY || 0;
      if (oT.touches && 0 === (IT | iT)) {
        var zT = function(TT) {
          cT(TT);
          for (let oT = 0; oT < TT.changedTouches.length; ++oT)
            if (TT.changedTouches[oT].identifier == LT) {
              const IT = TT.changedTouches[oT],
                iT = [IT.clientX - ST, IT.clientY - DT];
              return ST = IT.clientX, DT = IT.clientY, iT
            } return console.error(`Did not find touch id ${LT}`), [0, 0]
        }(oT);
        IT = zT[0], iT = zT[1]
      }
      TT.xZ.dx += IT, TT.xZ.dy += iT
    }

    function gT(TT, oT) {
      RT(TT, oT);
      var IT = 1;
      switch (oT.deltaMode) {
        case 0:
          IT = 1;
          break;
        case 1:
          IT = 12;
          break;
        case 2:
          IT = TT.element.clientHeight || window.innerHeight
      }
      TT.xZ.YTT += (oT.deltaX || 0) * IT, TT.xZ.QTT += (oT.deltaY || 0) * IT, TT.xZ.HTT += (oT.deltaZ || 0) * IT
    }

    function hT(TT, oT) {
      if (!TT.bq) return oT.preventDefault(), !1
    }
    var wT = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function mT(TT, oT) {
      return !!TT[wT[oT]] || ("AltRight" === oT || "ControlLeft" === oT) && "function" === typeof TT.getModifierState && !0 === TT.getModifierState("AltGraph")
    }

    function eT(TT, oT) {
      for (var IT in TT._modifiersHeldThroughBlur = {}, wT) TT._keyStates[IT] && (TT._modifiersHeldThroughBlur[IT] = !0);
      oT && oT.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (TT) {
          return !0
        }
      }() && (clearTimeout(TT._blurRelease), TT._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var oT in TT._modifiersHeldThroughBlur = {}, TT._keyStates) TT._keyStates[oT] && !/^Mouse\d/.test(oT) && uT(TT, oT)
      }), 0))
    }

    function RT(TT, oT) {
      var IT = TT._modifiersHeldThroughBlur;
      if (IT && oT.isTrusted && document.hasFocus())
        for (var iT in IT) delete IT[iT], TT._keyStates[iT] && iT !== oT.code && (mT(oT, iT) || uT(TT, iT))
    }

    function uT(TT, oT) {
      const IT = {
          code: oT,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        iT = zT;
      zT = IT;
      try {
        vT(oT, !1, TT, IT)
      } finally {
        zT = iT
      }
    }

    function vT(TT, oT, IT, iT) {
      var zT = IT._keyBindmap[TT];
      zT && (ET(IT._keyStates[TT], oT) && (IT._keyStates[TT] = oT, zT.forEach((TT => {
        (!IT.filterEvents || IT.filterEvents(iT, TT)) && function(TT, oT, IT, iT) {
          var zT = oT ? IT.pressCount : IT.releaseCount;
          zT[TT] = (zT[TT] || 0) + 1;
          var kT = IT._bindPressCount[TT] || 0;
          (kT += oT ? 1 : -1) < 0 && (kT = 0);
          IT._bindPressCount[TT] = kT;
          var WT = IT.state[TT];
          if (ET(WT, kT)) {
            IT.state[TT] = kT > 0;
            var XT = oT ? IT.down : IT.up;
            IT.disabled || XT.emit(TT, iT)
          }
        }(TT, oT, IT, iT)
      }))), "button" in iT || (IT.lq && !iT.defaultPrevented && iT.preventDefault(), IT.stopPropagation && iT.stopPropagation()))
    }

    function ET(TT, oT) {
      return TT ? !oT : oT
    }
  },
  35676: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => xT,
      g: () => cT
    });
    var iT = IT(46),
      zT = IT(2610),
      kT = IT(1403),
      WT = IT(1784),
      XT = IT(35627),
      BT = IT(618),
      FT = IT(1042),
      ST = IT.n(FT),
      DT = IT(1083);
    const LT = {},
      xT = (0, iT.memo)((function() {
        const TT = (0, zT.c)();
        return (0, kT.g)("damagedByOtherPlayer", (oT => {
          let {
            Ri: IT,
            direction: iT
          } = oT;
          const zT = IT || "nonDirectional";
          if (LT[zT]) {
            const oT = LT[zT];
            clearTimeout(oT.timeout), oT.direction = iT, oT.timeout = setTimeout((() => {
              delete LT[zT], TT()
            }), 800)
          } else LT[zT] = {
            direction: iT,
            rY: null,
            timeout: setTimeout((() => {
              delete LT[zT], TT()
            }), 800)
          };
          TT()
        })), (0, WT.c)("kill", (oT => {
          let {
            killer: IT,
            victim: iT
          } = oT;
          const zT = iT.id;
          IT.local && zT && zT in LT && (clearTimeout(LT[zT].timeout), delete LT[zT], TT())
        })), (0, iT.useEffect)((() => {
          const TT = (0, XT.f)("turnDamageIndicators", cT);
          return () => {
            TT();
            for (const TT in LT) clearTimeout(LT[TT].timeout), delete LT[TT]
          }
        }), []), (0, DT.jsx)("div", {
          className: "DirectionalDamage",
          children: Object.entries(LT).map((TT => {
            let [oT, IT] = TT;
            const iT = (0, BT.K)(IT.direction);
            return (0, DT.jsx)("div", {
              ref: TT => {
                LT[oT] && (LT[oT].rY = TT)
              },
              className: ST()("DamageIndicator", {
                DamageIndicatorFullCircle: iT
              })
            }, oT)
          }))
        })
      }));

    function cT(TT) {
      for (const oT in LT) {
        const {
          direction: IT,
          rY: iT
        } = LT[oT];
        if ((0, BT.K)(IT)) continue;
        const zT = IT - TT;
        iT.style.rotate = `${zT}rad`
      }
    }
  },
  35618: (TT, oT, IT) => {
    function iT(TT, oT, IT, iT) {
      return !(IT && !TT.aimable) && (!oT || TT.gun && "head" !== iT)
    }

    function zT(TT) {
      return Math.max(.1 * TT, 1)
    }

    function kT(TT, oT) {
      return !TT && oT
    }
    IT.d(oT, {
      b: () => kT,
      c: () => zT,
      g: () => iT
    })
  },
  35627: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => XT,
      f: () => WT
    });
    let iT = null;
    const zT = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      kT = {
        crosshairAccuracy: TT => {
          const oT = zT.crosshairAccuracy.at(-1);
          oT ? oT.hook(TT) : iT = TT
        },
        turnDamageIndicators: TT => {
          var oT;
          null === (oT = zT.turnDamageIndicators.at(-1)) || void 0 === oT || oT.hook(TT)
        }
      };

    function WT(TT, oT) {
      const IT = {
          hook: oT
        },
        WT = zT[TT];
      if (WT.push(IT), "crosshairAccuracy" === TT && null !== iT) {
        const TT = iT;
        iT = null, kT.crosshairAccuracy(TT)
      }
      return () => {
        const TT = WT.indexOf(IT); - 1 !== TT && WT.splice(TT, 1)
      }
    }

    function XT() {
      return kT
    }
  },
  35498: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => zT,
      i: () => kT
    });
    let iT = !1;

    function zT() {
      return iT
    }

    function kT(TT) {
      return iT !== TT && (iT = TT, !0)
    }
  },
  8682: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => kT,
      e: () => zT
    });
    var iT = IT(12);

    function zT(TT, oT) {
      return TT && !oT
    }

    function kT() {
      return zT(iT.c.get("isTouchScreen"), iT.c.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  39454: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      startPadGameplay: () => hT
    });
    IT(39321);
    var iT = IT(39323),
      zT = IT(3330),
      kT = IT(12),
      WT = IT(38042),
      XT = IT(3251),
      BT = IT(38055),
      FT = IT(16),
      ST = IT(2465),
      DT = IT(37413),
      LT = IT(8280),
      xT = IT(39329);
    const cT = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var KT = IT(39346),
      MT = IT(8258);
    const rT = TT => TT.padSneakToggled || !!kT.c.get("clientEscMenuOptions").crouchIsToggle && TT.crouchToggled,
      AT = () => {
        const TT = (() => {
          const TT = (0, LT.e)();
          let oT = cT;
          const IT = new xT.b;
          let iT = !1,
            zT = 0;
          const kT = () => {
            const IT = performance.now(),
              kT = 0 === zT ? 0 : IT - zT;
            if (zT = IT, !iT) return TT.discardPending(), null;
            const WT = (0, xT.k)(oT, kT),
              XT = TT.drainLookDelta(),
              BT = (0, DT.i)();
            return {
              RC: (WT.RC + XT.RC) * BT,
              uC: (WT.uC + XT.uC) * BT
            }
          };
          return {
            update: (TT, zT, WT, XT) => {
              TT.camera.vG !== kT && (TT.camera.vG = kT), iT = !0, oT = (0, xT.m)(IT, zT, WT, XT, performance.now())
            },
            release: () => {
              iT = !1, oT = cT, IT.reset()
            },
            uninstall: TT => {
              TT.camera.vG === kT && (TT.camera.vG = null)
            }
          }
        })();
        return {
          update: (oT, IT, iT) => {
            TT.update((0, ST.i)(), oT, IT, iT)
          },
          release: TT.release,
          uninstall: () => {
            const oT = (0, ST.i)();
            oT && TT.uninstall(oT)
          }
        }
      };
    var gT = IT(39342);
    IT(36600), IT(8149);
    IT(8163).e;
    const hT = () => {
      const TT = (0, gT.c)((() => {
          const TT = {
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
            bodies: () => (0, WT.b)(),
            look: AT(),
            move: (oT, IT) => {
              const iT = (0, ST.i)(),
                zT = iT.qm.foT();
              if (TT.x = oT.x, TT.y = oT.y, TT.magnitude = oT.magnitude, TT.headingOffset = oT.headingOffset, TT.jumpHeld = oT.jumpHeld, oT.jumpPressed && (TT.jumpPressedSinceTick = !0), TT.running = oT.running, TT.sprintHeld = oT.sprintHeld, IT) {
                const oT = (0, KT.i)({
                  ...IT,
                  descending: iT.qm.jTT(iT.ZJ).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!iT.Qm.canCrouch,
                  toggled: rT(zT)
                });
                TT.crouchHeld = oT.crouchHeld, zT.padSneakToggled = oT.toggled, zT.crouchToggled = !1, (0, MT.g)(oT.toggled)
              }
              zT.gamepad = TT
            },
            stopMoving: () => {
              var oT;
              Object.assign(TT, {
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
              const IT = null === (oT = (0, ST.i)()) || void 0 === oT ? void 0 : oT.qm.foT();
              (null === IT || void 0 === IT ? void 0 : IT.gamepad) === TT && (IT.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: TT => {
              const oT = (0, ST.i)(),
                IT = null === oT || void 0 === oT ? void 0 : oT.qm.foT();
              "touch" === TT ? ((0, MT.g)(!1), null !== IT && void 0 !== IT && IT.padSneakToggled && (IT.padSneakToggled = !1, IT.isTouchscreen && !IT.gamepad && oT.qm.ToT(oT.ZJ).setCrouching(!!oT.Qm.canCrouch && IT.touchCrouch))) : "gamepad" === TT && IT && (0, MT.g)(rT(IT))
            },
            hasPlayer: () => {
              var TT;
              return !(null === (TT = (0, ST.i)()) || void 0 === TT || !TT.ZJ)
            },
            isPlayerDead: () => {
              var TT;
              const oT = (0, ST.i)();
              return !1 === (null === (TT = oT.qm.woT(oT.ZJ)) || void 0 === TT ? void 0 : TT.isAlive)
            },
            isReplayMode: () => {
              var TT, oT;
              return !(null === (TT = (0, ST.e)()) || void 0 === TT || null === (oT = TT.client) || void 0 === oT || !oT.isReplayMode())
            },
            isFreeCameraOn: () => {
              var TT, oT, IT;
              return !(null === (TT = (0, ST.e)()) || void 0 === TT || null === (oT = TT.client) || void 0 === oT || null === (IT = oT.freeCameraController) || void 0 === IT || !IT.isEnabled())
            },
            targetsBlock: () => !!(0, ST.i)().ITT,
            selectedSlotEmpty: () => {
              var TT;
              const oT = (0, ST.i)();
              return !(null !== (TT = oT.qm.IoT(oT.ZJ)) && void 0 !== TT && TT.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const TT = (0, ST.i)().Qm;
              return !!TT.creative && !!TT.canPickBlocks
            },
            scrollHotbar: TT => {
              FT.h.XM("ScrollInventorySlot", TT)
            },
            hasFullInventory: () => (0, BT.e)((0, ST.i)()),
            hasLobbyLeaderboard: () => !!(0, ST.i)().Qm.lobbyLeaderboardInfo,
            contextActionInputs: () => {
              var TT, oT, IT, iT;
              const zT = (0, ST.i)();
              return {
                holdingGun: !(null === (TT = zT.qm.moT(zT.ZJ)) || void 0 === TT || null === (oT = TT.Tu) || void 0 === oT || !oT.isGun()),
                customButtons: null !== (IT = zT.Qm.customButtons) && void 0 !== IT ? IT : null,
                touchscreenActionButton: null !== (iT = zT.Qm.touchscreenActionButton) && void 0 !== iT ? iT : null
              }
            },
            pressTouchButton: TT => {
              (0, XT.sendColyMessage)(zT.Oj, TT)
            }
          }
        })()),
        oT = (0, iT.d)(),
        IT = null,
        kT = null;
      return () => {
        TT(), oT(), null === IT || void 0 === IT || IT(), null === kT || void 0 === kT || kT()
      }
    }
  },
  35601: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => kT,
      g: () => KT,
      j: () => MT,
      m: () => XT,
      n: () => LT,
      r: () => rT,
      s: () => DT,
      w: () => gT,
      x: () => cT,
      y: () => AT
    });
    var iT = IT(12),
      zT = IT(16);
    const kT = "clientGameInventoryButtonsChanged",
      WT = new Map;

    function XT() {
      return [...WT.values()].sort(((TT, oT) => {
        var IT, iT;
        return (null !== (IT = TT.order) && void 0 !== IT ? IT : 0) - (null !== (iT = oT.order) && void 0 !== iT ? iT : 0)
      }))
    }
    let BT = null;

    function FT(TT) {
      BT = TT
    }
    let ST = !1;

    function DT(TT) {
      ST = !0;
      try {
        TT.onClick()
      } finally {
        ST = !1
      }
      TT.panel && "clientGame" === iT.c.get("openInGameMenuName") && FT(TT.id)
    }

    function LT() {
      return ST
    }

    function xT() {
      return XT().filter((TT => TT.panel && !TT.disabled))
    }

    function cT(TT) {
      const oT = xT(),
        IT = oT.findIndex((TT => TT.id === BT));
      return !(IT < 0 || oT.length < 2) && (DT(oT[(IT + TT + oT.length) % oT.length]), !0)
    }

    function KT() {
      return null !== BT && xT().length > 1
    }

    function MT() {
      FT(null)
    }

    function rT() {
      "inventory" !== iT.c.get("openInGameMenuName") && FT(null)
    }

    function AT() {
      const TT = BT;
      return FT(null), TT
    }

    function gT(TT) {
      return WT.set(TT.id, TT), zT.h.XM(kT, XT(), !0), () => {
        WT.get(TT.id) === TT && (WT.delete(TT.id), zT.h.XM(kT, XT()))
      }
    }
  },
  35599: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => XT,
      e: () => MT,
      h: () => rT,
      i: () => LT,
      k: () => FT,
      o: () => KT,
      s: () => xT,
      u: () => ST
    });
    var iT = IT(12),
      zT = IT(16),
      kT = IT(1253),
      WT = IT(35601);
    const XT = "clientGameUiChanged";
    let BT = null;

    function FT() {
      return BT
    }

    function ST(TT, oT) {
      const IT = {
        content: TT,
        menu: oT
      };
      return BT = IT, zT.h.XM(XT, BT, !0), () => {
        BT === IT && (BT = null, cT = !1, MT(), zT.h.XM(XT, null))
      }
    }
    let DT = null;

    function LT() {
      return DT
    }

    function xT(TT) {
      return DT = TT, () => {
        DT === TT && (DT = null)
      }
    }
    let cT = !1;

    function KT() {
      const TT = iT.c.get("openInGameMenuName");
      "clientGame" !== TT && (cT = "inventory" === TT), (0, WT.n)() || (0, WT.j)(), (0, kT.o)(kT.c), iT.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function MT() {
      AT(!1)
    }

    function rT() {
      AT(cT)
    }

    function AT(TT) {
      "clientGame" === iT.c.get("openInGameMenuName") && iT.c.set({
        openInGameMenuName: TT ? "inventory" : null
      }), TT || (0, WT.j)(), cT = !1
    }
  },
  35490: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => BT
    });
    var iT = IT(306),
      zT = IT(12),
      kT = IT(35498),
      WT = IT(1585),
      XT = IT(1794);

    function BT(TT, oT) {
      var IT, BT, FT;
      if (!zT.c.get("isKeydownEnabled") || TT.repeat) return;
      const ST = TT.code;
      "Escape" === TT.key ? (0, WT.k)(TT) : null !== (IT = XT.z.OpenSettings) && void 0 !== IT && IT.includes(ST) ? (0, WT.y)(TT, iT.q.SETTINGS) : null !== (BT = XT.z.OpenCharacterCustomization) && void 0 !== BT && BT.includes(ST) ? (0, kT.e)() || (0, WT.y)(TT, iT.q.CUSTOMISATION, oT()) : null !== (FT = XT.z.ShowDebugOverlay) && void 0 !== FT && FT.includes(ST) && zT.c.set({
        showDebugOverlay: !zT.c.get("showDebugOverlay")
      })
    }
  },
  4341: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      Howl: () => zT.Howl,
      Howler: () => zT.Howler,
      iosAudio: () => BT,
      musicOutput: () => MT,
      readyAudioContext: () => rT
    });
    var iT, zT = IT(4349),
      kT = IT(90);
    const WT = zT.Howler;
    let XT;

    function BT() {
      return XT ??= "ios" === (0, kT.getOperatingSystem)(), XT
    }

    function FT() {
      var TT, oT;
      if (WT.ctx || !WT.usingWebAudio || "undefined" === typeof AudioContext || !BT()) return;
      const IT = navigator.audioSession;
      let iT;
      "auto" === (null === IT || void 0 === IT ? void 0 : IT.type) && (IT.type = "ambient");
      try {
        iT = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const zT = iT.createGain();
      zT.gain.setValueAtTime(WT._muted ? 0 : null !== (TT = WT._volume) && void 0 !== TT ? TT : 1, iT.currentTime), zT.connect(iT.destination), WT.ctx = iT, WT.masterGain = zT, null === (oT = WT._setup) || void 0 === oT || oT.call(WT)
    }
    WT._mobileUnloaded = !0;
    const ST = WT.volume.bind(zT.Howler);
    WT.volume = function() {
      return FT(), ST(...arguments)
    };
    const DT = WT.mute.bind(zT.Howler);
    WT.mute = TT => (FT(), DT(TT));
    const LT = zT.Howl.prototype,
      xT = LT.init;
    LT.init = function(TT) {
      return FT(), xT.call(this, TT)
    };
    let cT = 0;
    const KT = null === (iT = WT._autoSuspend) || void 0 === iT ? void 0 : iT.bind(zT.Howler);

    function MT() {
      rT();
      const {
        ctx: TT,
        masterGain: oT
      } = WT;
      return TT && oT ? {
        ctx: TT,
        destination: oT,
        holdAwake: TT => {
          var oT, IT;
          (cT += TT ? 1 : -1, TT) ? null === (oT = WT._autoResume) || void 0 === oT || oT.call(WT): null === (IT = WT._autoSuspend) || void 0 === IT || IT.call(WT)
        },
        wake: () => {
          var oT;
          "running" !== TT.state && (null === (oT = WT._autoResume) || void 0 === oT || oT.call(WT), TT.resume().catch((() => {})))
        }
      } : null
    }

    function rT() {
      var TT;
      (WT.volume(), WT.ctx && WT.autoUnlock) && (null === (TT = WT._unlockAudio) || void 0 === TT || TT.call(WT))
    }
    KT && (WT._autoSuspend = () => cT > 0 ? zT.Howler : KT())
  },
  35468: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => LT,
      i: () => ST,
      j: () => xT,
      l: () => DT
    });
    var iT = IT(314),
      zT = IT(643),
      kT = IT(651),
      WT = IT(26);
    const XT = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      BT = "playSessionGameNameWithVariation",
      FT = "wasMatchmakePlayer";

    function ST() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WT.h;
      (0, kT.i)(TT, XT)
    }

    function DT() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WT.h).setItem(FT, !0)
    }

    function LT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WT.h;
      return (0, kT.c)(TT, XT)
    }

    function xT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WT.h;
      const IT = (0, kT.c)(oT, XT),
        ST = function(TT) {
          const oT = TT.getItem(BT);
          return "string" !== typeof oT ? null : oT
        }(oT),
        DT = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WT.h).getItem(FT)
        }(oT);
      let LT;
      return LT = null !== IT && null !== ST && (0, kT.f)(oT, XT) && function(TT, oT, IT) {
          const zT = (0, iT.Ib)(TT),
            kT = (0, iT.Ib)(oT),
            WT = (0, iT.Fb)(TT),
            XT = (0, iT.Fb)(oT);
          return !(zT !== kT || !IT) || zT === kT && WT === XT
        }(ST, TT, DT) ? IT : (0, zT.b)(), (0, kT.k)(oT, XT, LT), oT.setItem(BT, TT),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WT.h).removeItem(FT)
        }(oT), LT
    }
  },
  35465: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => AT,
      i: () => gT
    });
    var iT = IT(1007),
      zT = IT(623),
      kT = IT(314),
      WT = IT(1014),
      XT = IT(637),
      BT = IT(661),
      FT = IT(4041),
      ST = IT(90),
      DT = IT(139),
      LT = IT(1665),
      xT = IT(112),
      cT = IT(35468),
      KT = IT(26),
      MT = IT(648),
      rT = IT(35475);

    function AT() {
      var TT, oT;
      return [...null !== (TT = navigator.languages) && void 0 !== TT ? TT : [null !== (oT = navigator.language) && void 0 !== oT ? oT : "none"], "EN-gb"]
    }

    function gT(TT, oT, IT, gT, hT) {
      const wT = (0, iT.m)(oT) ? (0, iT.p)(oT) : null,
        mT = {
          cookies: (0, LT.getAllCookiesForGameNameWithVariation)(oT),
          isMobile: (0, ST.isMobile)(),
          isUsingCustomGameTexturePack: null !== wT && hT(wT),
          generalCookies: {
            joinDiscord: !!KT.e.getItem("DiscordPressed"),
            newGo: FT.b,
            ...TT.getMetricsCookies(),
            trafficCode: gT,
            compliance: ST.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, ST.getBrowserName)(),
            version: (0, ST.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, ST.getPlatformType)(),
            deviceType: (0, xT.b)()
          },
          isLoggedIn: TT.isLoggedIn(),
          lobbyName: IT,
          languages: AT(),
          version: zT.c,
          siteUsed: DT.p,
          subsiteUsed: DT.w,
          playSessionId: (0, cT.j)(oT),
          visitSessionId: (0, MT.e)(),
          clientReason: XT.n.reason,
          budgetBasis: (0, rT.h)(),
          ...null !== BT.t && {
            diagClaim: BT.t.claimId
          }
        };
      return null !== wT && (0, kT.rc)(wT) ? (mT.lobbyName = (0, iT.j)(wT, (0, iT.n)(oT), IT), {
        roomName: `classic_${WT.d}`,
        joinOptions: mT
      }) : {
        roomName: oT,
        joinOptions: mT
      }
    }
  },
  35729: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => WT,
      f: () => zT,
      j: () => iT
    });

    function iT(TT) {
      return TT.replace(/[_\-\s]*\d+$/, "") || TT
    }

    function zT(TT, oT, IT) {
      return IT <= 0 ? 0 : TT * IT / Math.max(oT, IT)
    }

    function kT(TT, oT) {
      const IT = TT.getDurationMs();
      return IT > 0 ? TT.loudness * Math.max(0, 1 - (oT - TT.startMs) / IT) : 0
    }
    class WT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = TT, this.maxPerGroup = oT, this.voices = []
      }
      admit(TT) {
        if (this.voices = this.voices.filter((TT => TT.isAlive())), null !== TT.group) {
          const oT = this.voices.filter((oT => oT.group === TT.group));
          if (oT.length >= this.maxPerGroup && !this.dropLeastWorth(oT, TT)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, TT)) && (this.voices.push(TT), !0)
      }
      dropLeastWorth(TT, oT) {
        let IT = null,
          iT = 1 / 0;
        for (const zT of TT) {
          if (!zT.canStop()) continue;
          const TT = kT(zT, oT.startMs);
          TT < iT && (IT = zT, iT = TT)
        }
        return !(!IT || oT.loudness < iT) && (this.voices.splice(this.voices.indexOf(IT), 1), IT.stop(), !0)
      }
    }
  },
  35488: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => iT,
      f: () => zT,
      h: () => kT
    });
    const iT = 1024,
      zT = 1024 * iT;

    function kT(TT) {
      return (TT / zT).toFixed(1)
    }
  },
  35479: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => kT,
      f: () => XT,
      g: () => WT,
      h: () => BT,
      i: () => FT
    });
    var iT = IT(193);
    const zT = 32 * IT(35488).f,
      kT = 6144,
      WT = 4608,
      XT = 512;

    function BT(TT) {
      return Math.floor(zT * TT / kT)
    }

    function FT(TT) {
      const oT = TT - Math.floor(TT / 6);
      let IT = iT.c.maxChunkHorizAddDistance,
        zT = iT.c.maxChunkVertAddDistance;
      if (ST(IT + 1, zT + 1) <= oT) return null;
      for (; ST(IT + 1, zT + 1) > oT && (IT > 0 || zT > 0);) IT > zT ? IT-- : zT--;
      return {
        horizontal: IT,
        vertical: zT
      }
    }

    function ST(TT, oT) {
      const IT = Math.max(TT, oT);
      let iT = 0;
      for (let zT = -IT; zT <= IT; zT++)
        for (let kT = -IT; kT <= IT; kT++)
          for (let WT = -IT; WT <= IT; WT++) DT(TT, oT, zT, kT, WT) && iT++;
      return iT
    }

    function DT(TT, oT, IT, iT, zT) {
      const kT = IT * IT + zT * zT;
      return TT === oT ? kT + iT * iT <= TT * TT : TT > oT ? Math.abs(iT) <= oT && kT + iT * iT <= TT * TT : kT <= TT * TT && kT + iT * iT <= oT * oT
    }
  },
  35475: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => mT,
      h: () => wT,
      j: () => hT
    });
    var iT = IT(193),
      zT = IT(90),
      kT = IT(2552),
      WT = IT(3916),
      XT = IT(641),
      BT = IT(35479);
    const FT = 1048576,
      ST = 1024 * FT,
      DT = 400 * FT,
      LT = 147456,
      xT = .5,
      cT = 1.5 * ST,
      KT = 768 * FT;

    function MT(TT) {
      return DT + TT * LT
    }

    function rT(TT, oT, IT) {
      var zT, WT;
      let {
        footprintBytes: XT,
        basis: FT,
        namesLimit: rT
      } = function(TT) {
        const {
          os: oT,
          deviceMemory: IT
        } = TT;
        if ("ios" === oT) switch ((0, kT.i)(TT)) {
          case "ipad_m":
            return {
              footprintBytes: MT(BT.c), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: KT, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: cT, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: KT, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof IT && Number.isFinite(IT) && IT > 0 ? {
          footprintBytes: IT * ST * xT,
          basis: `memory-${IT}`,
          namesLimit: !0
        } : "android" === oT ? {
          footprintBytes: KT,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: MT(BT.g),
          basis: "unreported",
          namesLimit: !1
        }
      }(TT);
      if (IT) {
        const TT = Math.min(XT, MT(BT.c));
        XT = DT + Math.max(0, TT - DT) / 2, FT += "+killed", rT = !0
      }
      null !== oT && MT(oT) < XT && (XT = MT(oT), FT += "+learned", rT = !0);
      const AT = function(TT) {
          const oT = Math.floor((TT - DT) / LT);
          return Math.min(BT.c, Math.max(BT.f, oT))
        }(XT),
        gT = (0, BT.i)(AT);
      return {
        footprintBytes: XT,
        shedFootprintBytes: rT ? Math.max(XT, MT(AT)) : null,
        chunkCap: AT,
        maxHorizDistance: null !== (zT = null === gT || void 0 === gT ? void 0 : gT.horizontal) && void 0 !== zT ? zT : iT.c.maxChunkHorizAddDistance,
        maxVertDistance: null !== (WT = null === gT || void 0 === gT ? void 0 : gT.vertical) && void 0 !== WT ? WT : iT.c.maxChunkVertAddDistance,
        basis: FT
      }
    }
    let AT = null;

    function gT() {
      return rT({
        os: (0, zT.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, kT.l)()
      }, (0, WT.g)(), (0, XT.F)("wasm").length > 0)
    }

    function hT() {
      return AT ??= gT(), AT
    }

    function wT() {
      var TT;
      return (null !== (TT = AT) && void 0 !== TT ? TT : gT()).basis
    }

    function mT(TT, oT) {
      return TT.setChunkCap(oT.chunkCap)
    }
  },
  35737: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => kT,
      h: () => WT,
      i: () => iT
    });
    class iT {
      constructor(TT) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = TT
      }
      setMultiplierType(TT, oT) {
        var IT;
        this.multipliers[TT] = oT, null === (IT = this._onUpdate) || void 0 === IT || IT.call(this)
      }
      removeMultiplier(TT) {
        var oT;
        delete this.multipliers[TT], null === (oT = this._onUpdate) || void 0 === oT || oT.call(this)
      }
      getMultiplierType(TT) {
        return this.multipliers[TT]
      }
      getTotalMultipliedVal() {
        let TT = 1;
        for (const oT in this.multipliers) TT *= this.multipliers[oT];
        return TT
      }
    }
    class zT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = TT
      }
      setBooleanType(TT, oT) {
        const IT = this._getTotalBooleanVal();
        this.booleans[TT] = !!oT;
        const iT = this.getTotalBooleanVal();
        var zT;
        iT !== IT && (null === (zT = this._onUpdate) || void 0 === zT || zT.call(this, iT, this.booleans));
        return iT
      }
      removeBoolean(TT) {
        const oT = this._getTotalBooleanVal();
        delete this.booleans[TT];
        const IT = this._getTotalBooleanVal();
        var iT;
        null !== IT && IT !== oT && (null === (iT = this._onUpdate) || void 0 === iT || iT.call(this, IT, this.booleans));
        return null !== IT && void 0 !== IT && IT
      }
      getBooleanType(TT) {
        return this.booleans[TT]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var TT;
        null === (TT = this._onUpdate) || void 0 === TT || TT.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class kT extends zT {
      getTotalBooleanVal() {
        const TT = this._getTotalBooleanVal();
        if (null === TT) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return TT
      }
      _getTotalBooleanVal() {
        let TT = !1,
          oT = !0;
        for (const IT in this.booleans) TT = !0, oT &&= this.booleans[IT];
        return TT ? oT : null
      }
    }
    class WT extends zT {
      getTotalBooleanVal() {
        const TT = this._getTotalBooleanVal();
        if (null === TT) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return TT
      }
      _getTotalBooleanVal() {
        let TT = !1,
          oT = !1;
        for (const IT in this.booleans) TT = !0, oT ||= this.booleans[IT];
        return TT ? oT : null
      }
    }
  },
  35732: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => kT,
      g: () => iT,
      k: () => zT
    });
    const iT = 15,
      zT = 3,
      kT = 30
  },
  35823: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => zT,
      h: () => kT,
      j: () => LT,
      m: () => XT,
      o: () => BT,
      p: () => FT,
      q: () => DT,
      r: () => ST,
      v: () => WT
    });
    var iT = IT(1214);
    let zT = function(TT) {
        return TT[TT.Join = 0] = "Join", TT[TT.Leave = 1] = "Leave", TT[TT.Push = 2] = "Push", TT[TT.Cursor = 3] = "Cursor", TT[TT.Submit = 4] = "Submit", TT[TT.ReloadAsVariation = 5] = "ReloadAsVariation", TT[TT.CreateFile = 6] = "CreateFile", TT[TT.RenameFile = 7] = "RenameFile", TT[TT.DeleteFile = 8] = "DeleteFile", TT[TT.SetEngine = 9] = "SetEngine", TT[TT.RenameFolder = 10] = "RenameFolder", TT
      }({}),
      kT = function(TT) {
        return TT[TT.Joined = 0] = "Joined", TT[TT.Updates = 1] = "Updates", TT[TT.Presence = 2] = "Presence", TT[TT.RemoteCursor = 3] = "RemoteCursor", TT[TT.ForceClose = 4] = "ForceClose", TT[TT.LobbyFilesChanged = 5] = "LobbyFilesChanged", TT[TT.EngineSettings = 6] = "EngineSettings", TT
      }({});

    function WT(TT) {
      return "lobby" === TT.kind ? `lobby:${TT.path}` : `codeBlock:${TT.pos[0]},${TT.pos[1]},${TT.pos[2]}`
    }

    function XT(TT) {
      if ("lobby" === TT) return {
        kind: "lobby",
        path: iT.h
      };
      if (TT.startsWith("lobby:")) {
        const oT = TT.slice(6);
        return DT(oT) ? {
          kind: "lobby",
          path: oT
        } : null
      }
      const oT = TT.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return oT ? {
        kind: "codeBlock",
        pos: [parseInt(oT[1]), parseInt(oT[2]), parseInt(oT[3])]
      } : null
    }

    function BT(TT) {
      return TT.endsWith(".d.ts")
    }

    function FT(TT) {
      return TT.endsWith(".ts") && !BT(TT)
    }
    const ST = 64;

    function DT(TT) {
      if (!TT || TT !== TT.trim()) return !1;
      if (TT.length > ST) return !1;
      if (TT.startsWith("/") || TT.includes("\\") || TT.includes("\0")) return !1;
      if (!BT(TT) && !FT(TT) && ! function(TT) {
          return TT.endsWith(".js") && !TT.endsWith(".min.js") && !TT.endsWith(".bundle.js")
        }(TT)) return !1;
      const oT = TT.split("/");
      for (const IT of oT)
        if ("" === IT || "." === IT || ".." === IT) return !1;
      return !0
    }
    const LT = 14e3
  },
  37997: (TT, oT, IT) => {
    function iT(TT, oT, IT, iT, zT) {
      var kT = {};
      return Object.keys(iT).forEach((function(TT) {
        kT[TT] = iT[TT]
      })), kT.enumerable = !!kT.enumerable, kT.configurable = !!kT.configurable, ("value" in kT || kT.initializer) && (kT.writable = !0), kT = IT.slice().reverse().reduce((function(IT, iT) {
        return iT(TT, oT, IT) || IT
      }), kT), zT && void 0 !== kT.initializer && (kT.value = kT.initializer ? kT.initializer.call(zT) : void 0, kT.initializer = void 0), void 0 === kT.initializer && (Object.defineProperty(TT, oT, kT), kT = null), kT
    }
    IT.d(oT, {
      e: () => iT
    })
  },
  37994: (TT, oT, IT) => {
    function iT(TT, oT, IT, iT) {
      IT && Object.defineProperty(TT, oT, {
        enumerable: IT.enumerable,
        configurable: IT.configurable,
        writable: IT.writable,
        value: IT.initializer ? IT.initializer.call(iT) : void 0
      })
    }
    IT.d(oT, {
      d: () => iT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);