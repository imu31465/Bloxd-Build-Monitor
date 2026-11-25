export const id = 200;
export const ids = [200];
export const modules = {
  39522: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => kG,
      d: () => LG
    });
    var wG = ZG(4105);
    let SG = null;

    function LG(GG) {
      return null !== SG && GG === SG
    }

    function yG() {
      this.bD = !1, this.stopPropagation = !1, this.ZD = !1, this.disabled = !1
    }
    class kG {
      constructor(GG, bG) {
        this.version = "0.7.0";
        var ZG = Object.assign({}, new yG, bG || {});
        this.element = GG || document, this.bD = !!ZG.bD, this.stopPropagation = !!ZG.stopPropagation, this.ZD = !!ZG.ZD, this.disabled = !!ZG.disabled, this.filterEvents = (GG, bG) => !0, this.ignoreEvent = GG => !1, this.down = new wG.EventEmitter, this.up = new wG.EventEmitter, this.state = {}, this.pD = {
          dx: 0,
          dy: 0,
          ibG: 0,
          CbG: 0,
          WbG: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? YG(this) : document.addEventListener("DOMContentLoaded", (GG => {
          YG(this)
        }), {
          once: !0
        })
      }
      bind(GG) {
        for (var bG = arguments.length, ZG = new Array(bG > 1 ? bG - 1 : 0), wG = 1; wG < bG; wG++) ZG[wG - 1] = arguments[wG];
        ZG.forEach((bG => {
          var ZG = this._keyBindmap[bG] || [];
          ZG.includes(GG) || (ZG.push(GG), this._keyBindmap[bG] = ZG)
        })), this.state[GG] = !!this.state[GG], this.pressCount[GG] = this.pressCount[GG] || 0, this.releaseCount[GG] = this.releaseCount[GG] || 0
      }
      unbind(GG) {
        for (var bG in this._keyBindmap) {
          var ZG = this._keyBindmap[bG],
            wG = ZG.indexOf(GG);
          wG > -1 && ZG.splice(wG, 1)
        }
      }
      getBindings() {
        var GG = {};
        for (var bG in this._keyBindmap) {
          this._keyBindmap[bG].forEach((ZG => {
            GG[ZG] = GG[ZG] || [], GG[ZG].push(bG)
          }))
        }
        return GG
      }
      Tp() {
        UG(this.pD), UG(this.pressCount), UG(this.releaseCount)
      }
    }

    function UG(GG) {
      for (var bG in GG) GG[bG] = 0
    }

    function YG(GG) {
      window.addEventListener("keydown", dG.bind(null, GG, !0), !1), window.addEventListener("keyup", dG.bind(null, GG, !1), !1);
      var bG = {
        passive: !0
      };
      GG.element.addEventListener("touchstart", QG.bind(void 0, GG), {
        passive: !1
      }), GG.element.addEventListener("touchend", hG.bind(void 0, GG), bG), GG.element.addEventListener("mousedown", JG.bind(null, GG, !0), bG), window.document.addEventListener("mouseup", JG.bind(null, GG, !1), bG), GG.element.addEventListener("touchmove", rG.bind(null, GG), bG), GG.element.addEventListener("mousemove", rG.bind(null, GG), bG), window.PointerEvent, GG.element.addEventListener("wheel", zG.bind(null, GG), bG), GG.element.addEventListener("contextmenu", EG.bind(null, GG), !1), window.addEventListener("blur", uG.bind(null, GG), !1)
    }
    var VG = 0,
      pG = 0,
      fG = null;

    function QG(GG, bG) {
      bG.preventDefault(), KG(bG)
    }

    function KG(GG) {
      let bG = !1;
      for (let ZG = 0; ZG < GG.touches.length; ++ZG)
        if (GG.touches[ZG].identifier === fG) {
          bG = !0;
          break
        } if (!bG) {
        const bG = GG.changedTouches[0];
        VG = bG.clientX, pG = bG.clientY, fG = bG.identifier
      }
    }

    function hG(GG, bG) {
      for (var ZG = bG.changedTouches, wG = 0; wG < ZG.length; ++wG) ZG[wG].identifier === fG && (fG = null)
    }

    function dG(GG, bG, ZG) {
      if (!GG.ignoreEvent(ZG)) try {
        iG(GG, ZG), bG && ZG.isTrusted && !ZG.repeat && GG._keyStates[ZG.code] && CG(GG, ZG.code)
      } finally {
        WG(ZG.code, bG, GG, ZG)
      }
    }

    function JG(GG, bG, ZG) {
      if (!GG.ignoreEvent(ZG)) try {
        iG(GG, ZG)
      } finally {
        ! function(GG, bG, ZG) {
          if ("pointerId" in ZG)
            if (bG) {
              if (null !== GG._touches.currID) return;
              GG._touches.currID = ZG.pointerId
            } else {
              if (GG._touches.currID !== ZG.pointerId) return;
              GG._touches.currID = null
            } var wG = "button" in ZG ? ZG.button + 1 : 1;
          WG("Mouse" + wG, bG, GG, ZG)
        }(GG, bG, ZG)
      }
    }

    function rG(GG, bG) {
      var ZG = bG.movementX || bG.mozMovementX || 0,
        wG = bG.movementY || bG.mozMovementY || 0;
      if (bG.touches && 0 === (ZG | wG)) {
        var SG = function(GG) {
          KG(GG);
          for (let bG = 0; bG < GG.changedTouches.length; ++bG)
            if (GG.changedTouches[bG].identifier == fG) {
              const ZG = GG.changedTouches[bG],
                wG = [ZG.clientX - VG, ZG.clientY - pG];
              return VG = ZG.clientX, pG = ZG.clientY, wG
            } return console.error(`Did not find touch id ${fG}`), [0, 0]
        }(bG);
        ZG = SG[0], wG = SG[1]
      }
      GG.pD.dx += ZG, GG.pD.dy += wG
    }

    function zG(GG, bG) {
      iG(GG, bG);
      var ZG = 1;
      switch (bG.deltaMode) {
        case 0:
          ZG = 1;
          break;
        case 1:
          ZG = 12;
          break;
        case 2:
          ZG = GG.element.clientHeight || window.innerHeight
      }
      GG.pD.ibG += (bG.deltaX || 0) * ZG, GG.pD.CbG += (bG.deltaY || 0) * ZG, GG.pD.WbG += (bG.deltaZ || 0) * ZG
    }

    function EG(GG, bG) {
      if (!GG.ZD) return bG.preventDefault(), !1
    }
    var oG = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function XG(GG, bG) {
      return !!GG[oG[bG]] || ("AltRight" === bG || "ControlLeft" === bG) && "function" === typeof GG.getModifierState && !0 === GG.getModifierState("AltGraph")
    }

    function uG(GG, bG) {
      for (var ZG in GG._modifiersHeldThroughBlur = {}, oG) GG._keyStates[ZG] && (GG._modifiersHeldThroughBlur[ZG] = !0);
      bG && bG.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (GG) {
          return !0
        }
      }() && (clearTimeout(GG._blurRelease), GG._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var bG in GG._modifiersHeldThroughBlur = {}, GG._keyStates) GG._keyStates[bG] && !/^Mouse\d/.test(bG) && CG(GG, bG)
      }), 0))
    }

    function iG(GG, bG) {
      var ZG = GG._modifiersHeldThroughBlur;
      if (ZG && bG.isTrusted && document.hasFocus())
        for (var wG in ZG) delete ZG[wG], GG._keyStates[wG] && wG !== bG.code && (XG(bG, wG) || CG(GG, wG))
    }

    function CG(GG, bG) {
      const ZG = {
          code: bG,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        wG = SG;
      SG = ZG;
      try {
        WG(bG, !1, GG, ZG)
      } finally {
        SG = wG
      }
    }

    function WG(GG, bG, ZG, wG) {
      var SG = ZG._keyBindmap[GG];
      SG && (mG(ZG._keyStates[GG], bG) && (ZG._keyStates[GG] = bG, SG.forEach((GG => {
        (!ZG.filterEvents || ZG.filterEvents(wG, GG)) && function(GG, bG, ZG, wG) {
          var SG = bG ? ZG.pressCount : ZG.releaseCount;
          SG[GG] = (SG[GG] || 0) + 1;
          var LG = ZG._bindPressCount[GG] || 0;
          (LG += bG ? 1 : -1) < 0 && (LG = 0);
          ZG._bindPressCount[GG] = LG;
          var yG = ZG.state[GG];
          if (mG(yG, LG)) {
            ZG.state[GG] = LG > 0;
            var kG = bG ? ZG.down : ZG.up;
            ZG.disabled || kG.emit(GG, wG)
          }
        }(GG, bG, ZG, wG)
      }))), "button" in wG || (ZG.bD && !wG.defaultPrevented && wG.preventDefault(), ZG.stopPropagation && wG.stopPropagation()))
    }

    function mG(GG, bG) {
      return GG ? !bG : bG
    }
  },
  37026: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => hG,
      h: () => dG
    });
    var wG = ZG(51),
      SG = ZG(1389),
      LG = ZG(1945),
      yG = ZG(36973),
      kG = ZG(604),
      UG = ZG(1006),
      YG = ZG.n(UG),
      VG = ZG(1067);
    const pG = [fG()];

    function fG() {
      return {
        source: null,
        direction: null,
        Mq: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function QG(GG) {
      return pG.find((bG => null !== bG.source && bG.source === GG))
    }

    function KG(GG) {
      clearTimeout(GG.timeout), GG.source = null, GG.direction = null, GG.writtenAngle = null, GG.Mq && (GG.Mq.style.rotate = "")
    }
    const hG = (0, wG.memo)((function() {
      const [, GG] = (0, wG.useReducer)((GG => GG + 1), 0);
      return (0, SG.g)("damagedByOtherPlayer", (bG => {
        let {
          rZ: ZG,
          direction: wG
        } = bG;
        const SG = ZG || "nonDirectional",
          LG = function(GG) {
            var bG;
            const ZG = null !== (bG = QG(GG)) && void 0 !== bG ? bG : pG.find((GG => null === GG.source));
            if (ZG) return ZG;
            const wG = {
              source: null,
              direction: null,
              Mq: null,
              timeout: void 0,
              writtenAngle: null
            };
            return pG.push(wG), wG
          }(SG);
        clearTimeout(LG.timeout), LG.source = SG, LG.direction = wG, LG.timeout = setTimeout((() => {
          KG(LG), GG()
        }), 800), GG()
      })), (0, LG.b)("kill", (bG => {
        let {
          killer: ZG,
          victim: wG
        } = bG;
        const SG = ZG.local && QG(wG.id);
        SG && (KG(SG), GG())
      })), (0, wG.useEffect)((() => {
        const GG = (0, yG.c)("turnDamageIndicators", dG);
        return () => {
          GG(), pG.forEach(KG)
        }
      }), []), (0, VG.jsx)("div", {
        className: "DirectionalDamage",
        children: pG.map(((GG, bG) => (0, VG.jsx)("div", {
          ref: bG => {
            GG.Mq = bG
          },
          className: YG()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, kG.L)(GG.direction),
            DamageIndicatorIdle: null === GG.source
          })
        }, bG)))
      })
    }));

    function dG(GG) {
      for (const bG of pG) {
        if (null === bG.source || (0, kG.L)(bG.direction)) continue;
        const ZG = bG.direction - GG;
        ZG !== bG.writtenAngle && (bG.writtenAngle = ZG, bG.Mq.style.rotate = `${ZG}rad`)
      }
    }
  },
  36836: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => SG,
      d: () => LG
    });
    let wG = !1;

    function SG() {
      return wG
    }

    function LG(GG) {
      return wG !== GG && (wG = GG, !0)
    }
  },
  34432: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => LG,
      f: () => SG
    });
    var wG = ZG(17);

    function SG(GG, bG) {
      return GG && !bG
    }

    function LG() {
      return SG(wG.e.get("isTouchScreen"), wG.e.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  41039: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      startPadGameplay: () => oG
    });
    ZG(40929);
    var wG = ZG(40932),
      SG = ZG(3766),
      LG = ZG(17),
      yG = ZG(39482),
      kG = ZG(3683),
      UG = ZG(39511),
      YG = ZG(19),
      VG = ZG(2751),
      pG = ZG(38839),
      fG = ZG(8889),
      QG = ZG(40935);
    const KG = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var hG = ZG(40950),
      dG = ZG(8866),
      JG = ZG(39519);
    const rG = GG => GG.padSneakToggled || !!LG.e.get("clientEscMenuOptions").crouchIsToggle && GG.crouchToggled,
      zG = () => {
        const GG = (() => {
          const GG = (0, fG.b)();
          let bG = KG;
          const ZG = new QG.e;
          let wG = !1,
            SG = 0;
          const LG = () => {
            const ZG = performance.now(),
              LG = 0 === SG ? 0 : ZG - SG;
            if (SG = ZG, !wG) return GG.discardPending(), null;
            const yG = (0, QG.s)(bG, LG),
              kG = GG.drainLookDelta(),
              UG = (0, pG.h)();
            return {
              SF: (yG.SF + kG.SF) * UG,
              kF: (yG.kF + kG.kF) * UG
            }
          };
          return {
            update: (GG, SG, yG, kG) => {
              GG.camera.LO !== LG && (GG.camera.LO = LG), wG = !0, bG = (0, QG.t)(ZG, SG, yG, kG, performance.now())
            },
            release: () => {
              wG = !1, bG = KG, ZG.reset()
            },
            uninstall: GG => {
              GG.camera.LO === LG && (GG.camera.LO = null)
            }
          }
        })();
        return {
          update: (bG, ZG, wG) => {
            GG.update((0, VG.i)(), bG, ZG, wG)
          },
          release: GG.release,
          uninstall: () => {
            const bG = (0, VG.i)();
            bG && GG.uninstall(bG)
          }
        }
      };
    var EG = ZG(40947);
    ZG(38090), ZG(8776);
    ZG(8800).d;
    const oG = () => {
      const GG = (0, EG.e)((() => {
          const GG = {
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
            bodies: () => (0, yG.e)(),
            look: zG(),
            move: (bG, ZG) => {
              const wG = (0, VG.i)(),
                SG = wG.Hr.KZG();
              if (GG.x = bG.x, GG.y = bG.y, GG.magnitude = bG.magnitude, GG.headingOffset = bG.headingOffset, GG.jumpHeld = bG.jumpHeld, bG.jumpPressed && (GG.jumpPressedSinceTick = !0), GG.running = bG.running, GG.sprintHeld = bG.sprintHeld, ZG) {
                const bG = (0, hG.e)({
                  ...ZG,
                  descending: wG.Hr.EbG(wG.sA).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!wG.Qr.canCrouch,
                  toggled: rG(SG)
                });
                GG.crouchHeld = bG.crouchHeld, SG.padSneakToggled = bG.toggled, SG.crouchToggled = !1, (0, dG.f)(bG.toggled)
              }
              SG.gamepad = GG
            },
            stopMoving: () => {
              var bG;
              Object.assign(GG, {
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
              const ZG = null === (bG = (0, VG.i)()) || void 0 === bG ? void 0 : bG.Hr.KZG();
              (null === ZG || void 0 === ZG ? void 0 : ZG.gamepad) === GG && (ZG.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: GG => {
              const bG = (0, VG.i)(),
                ZG = null === bG || void 0 === bG ? void 0 : bG.Hr.KZG();
              "touch" === GG ? ((0, dG.f)(!1), null !== ZG && void 0 !== ZG && ZG.padSneakToggled && (ZG.padSneakToggled = !1, ZG.isTouchscreen && !ZG.gamepad && bG.Hr.qbG(bG.sA).setCrouching(!!bG.Qr.canCrouch && ZG.touchCrouch))) : "gamepad" === GG && ZG && (0, dG.f)(rG(ZG))
            },
            hasPlayer: () => {
              var GG;
              return !(null === (GG = (0, VG.i)()) || void 0 === GG || !GG.sA)
            },
            isPlayerDead: () => {
              var GG;
              const bG = (0, VG.i)();
              return !1 === (null === (GG = bG.Hr.kZG(bG.sA)) || void 0 === GG ? void 0 : GG.isAlive)
            },
            isReplayMode: () => {
              var GG, bG;
              return !(null === (GG = (0, VG.e)()) || void 0 === GG || null === (bG = GG.client) || void 0 === bG || !bG.isReplayMode())
            },
            isFreeCameraOn: () => {
              var GG, bG, ZG;
              return !(null === (GG = (0, VG.e)()) || void 0 === GG || null === (bG = GG.client) || void 0 === bG || null === (ZG = bG.freeCameraController) || void 0 === ZG || !ZG.isEnabled())
            },
            targetsBlock: () => !!(0, VG.i)().RGG,
            selectedSlotEmpty: () => {
              var GG;
              const bG = (0, VG.i)();
              return !(null !== (GG = bG.Hr.gbG(bG.sA)) && void 0 !== GG && GG.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const GG = (0, VG.i)().Qr;
              return !!GG.creative && !!GG.canPickBlocks
            },
            scrollHotbar: GG => {
              YG.l.xh("ScrollInventorySlot", GG)
            },
            hasFullInventory: () => (0, UG.c)((0, VG.i)()),
            hasLobbyTab: () => (0, JG.b)((0, VG.i)().Qr),
            contextActionInputs: () => {
              var GG, bG, ZG, wG;
              const SG = (0, VG.i)();
              return {
                holdingGun: !(null === (GG = SG.Hr.UZG(SG.sA)) || void 0 === GG || null === (bG = GG.qE) || void 0 === bG || !bG.isGun()),
                customButtons: null !== (ZG = SG.Qr.customButtons) && void 0 !== ZG ? ZG : null,
                touchscreenActionButton: null !== (wG = SG.Qr.touchscreenActionButton) && void 0 !== wG ? wG : null
              }
            },
            pressTouchButton: GG => {
              (0, kG.sendColyMessage)(SG.ij, GG)
            }
          }
        })()),
        bG = (0, wG.c)(),
        ZG = null,
        LG = null;
      return () => {
        GG(), bG(), null === ZG || void 0 === ZG || ZG(), null === LG || void 0 === LG || LG()
      }
    }
  },
  36955: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => LG,
      f: () => hG,
      h: () => dG,
      j: () => kG,
      k: () => fG,
      m: () => JG,
      p: () => pG,
      r: () => zG,
      t: () => KG,
      x: () => rG
    });
    var wG = ZG(17),
      SG = ZG(19);
    const LG = "clientGameInventoryButtonsChanged",
      yG = new Map;

    function kG() {
      return [...yG.values()].sort(((GG, bG) => {
        var ZG, wG;
        return (null !== (ZG = GG.order) && void 0 !== ZG ? ZG : 0) - (null !== (wG = bG.order) && void 0 !== wG ? wG : 0)
      }))
    }
    let UG = null;

    function YG(GG) {
      UG = GG
    }
    let VG = !1;

    function pG(GG) {
      VG = !0;
      try {
        GG.onClick()
      } finally {
        VG = !1
      }
      GG.panel && "clientGame" === wG.e.get("openInGameMenuName") && YG(GG.id)
    }

    function fG() {
      return VG
    }

    function QG() {
      return kG().filter((GG => GG.panel && !GG.disabled))
    }

    function KG(GG) {
      const bG = QG(),
        ZG = bG.findIndex((GG => GG.id === UG));
      return !(ZG < 0 || bG.length < 2) && (pG(bG[(ZG + GG + bG.length) % bG.length]), !0)
    }

    function hG() {
      return null !== UG && QG().length > 1
    }

    function dG() {
      YG(null)
    }

    function JG() {
      "inventory" !== wG.e.get("openInGameMenuName") && YG(null)
    }

    function rG() {
      const GG = UG;
      return YG(null), GG
    }

    function zG(GG) {
      return yG.set(GG.id, GG), SG.l.xh(LG, kG(), !0), () => {
        yG.get(GG.id) === GG && (yG.delete(GG.id), SG.l.xh(LG, kG()))
      }
    }
  },
  36951: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => kG,
      f: () => dG,
      i: () => JG,
      j: () => fG,
      l: () => YG,
      m: () => hG,
      n: () => QG,
      q: () => VG
    });
    var wG = ZG(17),
      SG = ZG(19),
      LG = ZG(1251),
      yG = ZG(36955);
    const kG = "clientGameUiChanged";
    let UG = null;

    function YG() {
      return UG
    }

    function VG(GG, bG) {
      const ZG = {
        content: GG,
        menu: bG
      };
      return UG = ZG, SG.l.xh(kG, UG, !0), () => {
        UG === ZG && (UG = null, KG = !1, dG(), SG.l.xh(kG, null))
      }
    }
    let pG = null;

    function fG() {
      return pG
    }

    function QG(GG) {
      return pG = GG, () => {
        pG === GG && (pG = null)
      }
    }
    let KG = !1;

    function hG() {
      const GG = wG.e.get("openInGameMenuName");
      "clientGame" !== GG && (KG = "inventory" === GG), (0, yG.k)() || (0, yG.h)(), (0, LG.z)(LG.e), wG.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function dG() {
      rG(!1)
    }

    function JG() {
      rG(KG)
    }

    function rG(GG) {
      "clientGame" === wG.e.get("openInGameMenuName") && wG.e.set({
        openInGameMenuName: GG ? "inventory" : null
      }), GG || (0, yG.h)(), KG = !1
    }
  },
  36833: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => UG
    });
    var wG = ZG(333),
      SG = ZG(17),
      LG = ZG(36836),
      yG = ZG(1579),
      kG = ZG(1956);

    function UG(GG, bG) {
      var ZG, UG, YG;
      if (!SG.e.get("isKeydownEnabled") || GG.repeat) return;
      const VG = GG.code;
      "Escape" === GG.key ? (0, yG.k)(GG) : null !== (ZG = kG.B.OpenSettings) && void 0 !== ZG && ZG.includes(VG) ? (0, yG.x)(GG, wG.u.SETTINGS) : null !== (UG = kG.B.OpenCharacterCustomization) && void 0 !== UG && UG.includes(VG) ? (0, LG.b)() || (0, yG.x)(GG, wG.u.CUSTOMISATION, bG()) : null !== (YG = kG.B.ShowDebugOverlay) && void 0 !== YG && YG.includes(VG) && SG.e.set({
        showDebugOverlay: !SG.e.get("showDebugOverlay")
      })
    }
  },
  39376: (GG, bG, ZG) => {
    function wG(GG, bG, ZG, wG, SG) {
      var LG = {};
      return Object.keys(wG).forEach((function(GG) {
        LG[GG] = wG[GG]
      })), LG.enumerable = !!LG.enumerable, LG.configurable = !!LG.configurable, ("value" in LG || LG.initializer) && (LG.writable = !0), LG = ZG.slice().reverse().reduce((function(ZG, wG) {
        return wG(GG, bG, ZG) || ZG
      }), LG), SG && void 0 !== LG.initializer && (LG.value = LG.initializer ? LG.initializer.call(SG) : void 0, LG.initializer = void 0), void 0 === LG.initializer && (Object.defineProperty(GG, bG, LG), LG = null), LG
    }
    ZG.d(bG, {
      b: () => wG
    })
  },
  39368: (GG, bG, ZG) => {
    function wG(GG, bG, ZG, wG) {
      ZG && Object.defineProperty(GG, bG, {
        enumerable: ZG.enumerable,
        configurable: ZG.configurable,
        writable: ZG.writable,
        value: ZG.initializer ? ZG.initializer.call(wG) : void 0
      })
    }
    ZG.d(bG, {
      b: () => wG
    })
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);