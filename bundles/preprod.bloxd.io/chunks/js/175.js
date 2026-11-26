export const id = 175;
export const ids = [175];
export const modules = {
  40038: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => tH,
      f: () => SH
    });
    var AH = LH(4477);
    let rH = null;

    function SH(HH) {
      return null !== rH && HH === rH
    }

    function hH() {
      this.Qp = !1, this.stopPropagation = !1, this.kp = !1, this.disabled = !1
    }
    class tH {
      constructor(HH, BH) {
        this.version = "0.7.0";
        var LH = Object.assign({}, new hH, BH || {});
        this.element = HH || document, this.Qp = !!LH.Qp, this.stopPropagation = !!LH.stopPropagation, this.kp = !!LH.kp, this.disabled = !!LH.disabled, this.filterEvents = (HH, BH) => !0, this.ignoreEvent = HH => !1, this.down = new AH.EventEmitter, this.up = new AH.EventEmitter, this.state = {}, this.mp = {
          dx: 0,
          dy: 0,
          uLH: 0,
          QLH: 0,
          WLH: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? CH(this) : document.addEventListener("DOMContentLoaded", (HH => {
          CH(this)
        }), {
          once: !0
        })
      }
      bind(HH) {
        for (var BH = arguments.length, LH = new Array(BH > 1 ? BH - 1 : 0), AH = 1; AH < BH; AH++) LH[AH - 1] = arguments[AH];
        LH.forEach((BH => {
          var LH = this._keyBindmap[BH] || [];
          LH.includes(HH) || (LH.push(HH), this._keyBindmap[BH] = LH)
        })), this.state[HH] = !!this.state[HH], this.pressCount[HH] = this.pressCount[HH] || 0, this.releaseCount[HH] = this.releaseCount[HH] || 0
      }
      unbind(HH) {
        for (var BH in this._keyBindmap) {
          var LH = this._keyBindmap[BH],
            AH = LH.indexOf(HH);
          AH > -1 && LH.splice(AH, 1)
        }
      }
      getBindings() {
        var HH = {};
        for (var BH in this._keyBindmap) {
          this._keyBindmap[BH].forEach((LH => {
            HH[LH] = HH[LH] || [], HH[LH].push(BH)
          }))
        }
        return HH
      }
      IX() {
        zH(this.mp), zH(this.pressCount), zH(this.releaseCount)
      }
    }

    function zH(HH) {
      for (var BH in HH) HH[BH] = 0
    }

    function CH(HH) {
      window.addEventListener("keydown", WH.bind(null, HH, !0), !1), window.addEventListener("keyup", WH.bind(null, HH, !1), !1);
      var BH = {
        passive: !0
      };
      HH.element.addEventListener("touchstart", YH.bind(void 0, HH), {
        passive: !1
      }), HH.element.addEventListener("touchend", QH.bind(void 0, HH), BH), HH.element.addEventListener("mousedown", MH.bind(null, HH, !0), BH), window.document.addEventListener("mouseup", MH.bind(null, HH, !1), BH), HH.element.addEventListener("touchmove", xH.bind(null, HH), BH), HH.element.addEventListener("mousemove", xH.bind(null, HH), BH), window.PointerEvent, HH.element.addEventListener("wheel", vH.bind(null, HH), BH), HH.element.addEventListener("contextmenu", PH.bind(null, HH), !1), window.addEventListener("blur", VH.bind(null, HH), !1)
    }
    var EH = 0,
      XH = 0,
      GH = null;

    function YH(HH, BH) {
      BH.preventDefault(), uH(BH)
    }

    function uH(HH) {
      let BH = !1;
      for (let LH = 0; LH < HH.touches.length; ++LH)
        if (HH.touches[LH].identifier === GH) {
          BH = !0;
          break
        } if (!BH) {
        const BH = HH.changedTouches[0];
        EH = BH.clientX, XH = BH.clientY, GH = BH.identifier
      }
    }

    function QH(HH, BH) {
      for (var LH = BH.changedTouches, AH = 0; AH < LH.length; ++AH) LH[AH].identifier === GH && (GH = null)
    }

    function WH(HH, BH, LH) {
      if (!HH.ignoreEvent(LH)) try {
        OH(HH, LH), BH && LH.isTrusted && !LH.repeat && HH._keyStates[LH.code] && bH(HH, LH.code)
      } finally {
        kH(LH.code, BH, HH, LH)
      }
    }

    function MH(HH, BH, LH) {
      if (!HH.ignoreEvent(LH)) try {
        OH(HH, LH)
      } finally {
        ! function(HH, BH, LH) {
          if ("pointerId" in LH)
            if (BH) {
              if (null !== HH._touches.currID) return;
              HH._touches.currID = LH.pointerId
            } else {
              if (HH._touches.currID !== LH.pointerId) return;
              HH._touches.currID = null
            } var AH = "button" in LH ? LH.button + 1 : 1;
          kH("Mouse" + AH, BH, HH, LH)
        }(HH, BH, LH)
      }
    }

    function xH(HH, BH) {
      var LH = BH.movementX || BH.mozMovementX || 0,
        AH = BH.movementY || BH.mozMovementY || 0;
      if (BH.touches && 0 === (LH | AH)) {
        var rH = function(HH) {
          uH(HH);
          for (let BH = 0; BH < HH.changedTouches.length; ++BH)
            if (HH.changedTouches[BH].identifier == GH) {
              const LH = HH.changedTouches[BH],
                AH = [LH.clientX - EH, LH.clientY - XH];
              return EH = LH.clientX, XH = LH.clientY, AH
            } return console.error(`Did not find touch id ${GH}`), [0, 0]
        }(BH);
        LH = rH[0], AH = rH[1]
      }
      HH.mp.dx += LH, HH.mp.dy += AH
    }

    function vH(HH, BH) {
      OH(HH, BH);
      var LH = 1;
      switch (BH.deltaMode) {
        case 0:
          LH = 1;
          break;
        case 1:
          LH = 12;
          break;
        case 2:
          LH = HH.element.clientHeight || window.innerHeight
      }
      HH.mp.uLH += (BH.deltaX || 0) * LH, HH.mp.QLH += (BH.deltaY || 0) * LH, HH.mp.WLH += (BH.deltaZ || 0) * LH
    }

    function PH(HH, BH) {
      if (!HH.kp) return BH.preventDefault(), !1
    }
    var TH = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function UH(HH, BH) {
      return !!HH[TH[BH]] || ("AltRight" === BH || "ControlLeft" === BH) && "function" === typeof HH.getModifierState && !0 === HH.getModifierState("AltGraph")
    }

    function VH(HH, BH) {
      for (var LH in HH._modifiersHeldThroughBlur = {}, TH) HH._keyStates[LH] && (HH._modifiersHeldThroughBlur[LH] = !0);
      BH && BH.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (HH) {
          return !0
        }
      }() && (clearTimeout(HH._blurRelease), HH._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var BH in HH._modifiersHeldThroughBlur = {}, HH._keyStates) HH._keyStates[BH] && !/^Mouse\d/.test(BH) && bH(HH, BH)
      }), 0))
    }

    function OH(HH, BH) {
      var LH = HH._modifiersHeldThroughBlur;
      if (LH && BH.isTrusted && document.hasFocus())
        for (var AH in LH) delete LH[AH], HH._keyStates[AH] && AH !== BH.code && (UH(BH, AH) || bH(HH, AH))
    }

    function bH(HH, BH) {
      const LH = {
          code: BH,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        AH = rH;
      rH = LH;
      try {
        kH(BH, !1, HH, LH)
      } finally {
        rH = AH
      }
    }

    function kH(HH, BH, LH, AH) {
      var rH = LH._keyBindmap[HH];
      rH && (mH(LH._keyStates[HH], BH) && (LH._keyStates[HH] = BH, rH.forEach((HH => {
        (!LH.filterEvents || LH.filterEvents(AH, HH)) && function(HH, BH, LH, AH) {
          var rH = BH ? LH.pressCount : LH.releaseCount;
          rH[HH] = (rH[HH] || 0) + 1;
          var SH = LH._bindPressCount[HH] || 0;
          (SH += BH ? 1 : -1) < 0 && (SH = 0);
          LH._bindPressCount[HH] = SH;
          var hH = LH.state[HH];
          if (mH(hH, SH)) {
            LH.state[HH] = SH > 0;
            var tH = BH ? LH.down : LH.up;
            LH.disabled || tH.emit(HH, AH)
          }
        }(HH, BH, LH, AH)
      }))), "button" in AH || (LH.Qp && !AH.defaultPrevented && AH.preventDefault(), LH.stopPropagation && AH.stopPropagation()))
    }

    function mH(HH, BH) {
      return HH ? !BH : BH
    }
  },
  37560: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => QH,
      d: () => WH
    });
    var AH = LH(45),
      rH = LH(1450),
      SH = LH(2051),
      hH = LH(37504),
      tH = LH(619),
      zH = LH(1038),
      CH = LH.n(zH),
      EH = LH(1225);
    const XH = [GH()];

    function GH() {
      return {
        source: null,
        direction: null,
        Cw: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function YH(HH) {
      return XH.find((BH => null !== BH.source && BH.source === HH))
    }

    function uH(HH) {
      clearTimeout(HH.timeout), HH.source = null, HH.direction = null, HH.writtenAngle = null, HH.Cw && (HH.Cw.style.rotate = "")
    }
    const QH = (0, AH.memo)((function() {
      const [, HH] = (0, AH.useReducer)((HH => HH + 1), 0);
      return (0, rH.d)("damagedByOtherPlayer", (BH => {
        let {
          DS: LH,
          direction: AH
        } = BH;
        const rH = LH || "nonDirectional",
          SH = function(HH) {
            var BH;
            const LH = null !== (BH = YH(HH)) && void 0 !== BH ? BH : XH.find((HH => null === HH.source));
            if (LH) return LH;
            const AH = {
              source: null,
              direction: null,
              Cw: null,
              timeout: void 0,
              writtenAngle: null
            };
            return XH.push(AH), AH
          }(rH);
        clearTimeout(SH.timeout), SH.source = rH, SH.direction = AH, SH.timeout = setTimeout((() => {
          uH(SH), HH()
        }), 800), HH()
      })), (0, SH.b)("kill", (BH => {
        let {
          killer: LH,
          victim: AH
        } = BH;
        const rH = LH.local && YH(AH.id);
        rH && (uH(rH), HH())
      })), (0, AH.useEffect)((() => {
        const HH = (0, hH.i)("turnDamageIndicators", WH);
        return () => {
          HH(), XH.forEach(uH)
        }
      }), []), (0, EH.jsx)("div", {
        className: "DirectionalDamage",
        children: XH.map(((HH, BH) => (0, EH.jsx)("div", {
          ref: BH => {
            HH.Cw = BH
          },
          className: CH()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, tH.M)(HH.direction),
            DamageIndicatorIdle: null === HH.source
          })
        }, BH)))
      })
    }));

    function WH(HH) {
      for (const BH of XH) {
        if (null === BH.source || (0, tH.M)(BH.direction)) continue;
        const LH = BH.direction - HH;
        LH !== BH.writtenAngle && (BH.writtenAngle = LH, BH.Cw.style.rotate = `${LH}rad`)
      }
    }
  },
  37373: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => rH,
      e: () => SH
    });
    let AH = !1;

    function rH() {
      return AH
    }

    function SH(HH) {
      return AH !== HH && (AH = HH, !0)
    }
  },
  41992: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      startPadGameplay: () => TH
    });
    LH(41860);
    var AH = LH(41864),
      rH = LH(4113),
      SH = LH(15),
      hH = LH(4e4),
      tH = LH(4061),
      zH = LH(40032),
      CH = LH(18),
      EH = LH(3038),
      XH = LH(39306),
      GH = LH(9543),
      YH = LH(41871);
    const uH = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var QH = LH(41889),
      WH = LH(9522),
      MH = LH(40035);
    const xH = HH => HH.padSneakToggled || !!SH.c.get("clientEscMenuOptions").crouchIsToggle && HH.crouchToggled,
      vH = () => {
        const HH = (() => {
          const HH = (0, GH.d)();
          let BH = uH;
          const LH = new YH.b;
          let AH = !1,
            rH = 0;
          const SH = () => {
            const LH = performance.now(),
              SH = 0 === rH ? 0 : LH - rH;
            if (rH = LH, !AH) return HH.discardPending(), null;
            const hH = (0, YH.p)(BH, SH),
              tH = HH.drainLookDelta(),
              zH = (0, XH.g)();
            return {
              lq: (hH.lq + tH.lq) * zH,
              Fq: (hH.Fq + tH.Fq) * zH
            }
          };
          return {
            update: (HH, rH, hH, tH) => {
              HH.camera.A_ !== SH && (HH.camera.A_ = SH), AH = !0, BH = (0, YH.q)(LH, rH, hH, tH, performance.now())
            },
            release: () => {
              AH = !1, BH = uH, LH.reset()
            },
            uninstall: HH => {
              HH.camera.A_ === SH && (HH.camera.A_ = null)
            }
          }
        })();
        return {
          update: (BH, LH, AH) => {
            HH.update((0, EH.c)(), BH, LH, AH)
          },
          release: HH.release,
          uninstall: () => {
            const BH = (0, EH.c)();
            BH && HH.uninstall(BH)
          }
        }
      };
    var PH = LH(41884);
    LH(38527), LH(9433);
    LH(9450).c;
    const TH = () => {
      const HH = (0, PH.d)((() => {
          const HH = {
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
            bodies: () => (0, hH.c)(),
            look: vH(),
            move: (BH, LH) => {
              const AH = (0, EH.c)(),
                rH = AH.pT.SAH();
              if (HH.x = BH.x, HH.y = BH.y, HH.magnitude = BH.magnitude, HH.headingOffset = BH.headingOffset, HH.jumpHeld = BH.jumpHeld, BH.jumpPressed && (HH.jumpPressedSinceTick = !0), HH.running = BH.running, HH.sprintHeld = BH.sprintHeld, LH) {
                const BH = (0, QH.d)({
                  ...LH,
                  descending: AH.pT.ELH(AH.lF).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!AH.wT.canCrouch,
                  toggled: xH(rH)
                });
                HH.crouchHeld = BH.crouchHeld, rH.padSneakToggled = BH.toggled, rH.crouchToggled = !1, (0, WH.h)(BH.toggled)
              }
              rH.gamepad = HH
            },
            stopMoving: () => {
              var BH;
              Object.assign(HH, {
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
              const LH = null === (BH = (0, EH.c)()) || void 0 === BH ? void 0 : BH.pT.SAH();
              (null === LH || void 0 === LH ? void 0 : LH.gamepad) === HH && (LH.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: HH => {
              const BH = (0, EH.c)(),
                LH = null === BH || void 0 === BH ? void 0 : BH.pT.SAH();
              "touch" === HH ? ((0, WH.h)(!1), null !== LH && void 0 !== LH && LH.padSneakToggled && (LH.padSneakToggled = !1, LH.isTouchscreen && !LH.gamepad && BH.pT.ILH(BH.lF).setCrouching(!!BH.wT.canCrouch && LH.touchCrouch))) : "gamepad" === HH && LH && (0, WH.h)(xH(LH))
            },
            hasPlayer: () => {
              var HH;
              return !(null === (HH = (0, EH.c)()) || void 0 === HH || !HH.lF)
            },
            isPlayerDead: () => {
              var HH;
              const BH = (0, EH.c)();
              return !1 === (null === (HH = BH.pT.iLH(BH.lF)) || void 0 === HH ? void 0 : HH.isAlive)
            },
            isReplayMode: () => {
              var HH, BH;
              return !(null === (HH = (0, EH.b)()) || void 0 === HH || null === (BH = HH.client) || void 0 === BH || !BH.isReplayMode())
            },
            isFreeCameraOn: () => {
              var HH, BH, LH;
              return !(null === (HH = (0, EH.b)()) || void 0 === HH || null === (BH = HH.client) || void 0 === BH || null === (LH = BH.freeCameraController) || void 0 === LH || !LH.isEnabled())
            },
            targetsBlock: () => !!(0, EH.c)().cBH,
            selectedSlotEmpty: () => {
              var HH;
              const BH = (0, EH.c)();
              return !(null !== (HH = BH.pT.lLH(BH.lF)) && void 0 !== HH && HH.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const HH = (0, EH.c)().wT;
              return !!HH.creative && !!HH.canPickBlocks
            },
            scrollHotbar: HH => {
              CH.k.AX("ScrollInventorySlot", HH)
            },
            hasFullInventory: () => (0, zH.e)((0, EH.c)()),
            hasLobbyTab: () => (0, MH.e)((0, EH.c)().wT),
            contextActionInputs: () => {
              var HH, BH, LH, AH;
              const rH = (0, EH.c)();
              return {
                holdingGun: !(null === (HH = rH.pT.pLH(rH.lF)) || void 0 === HH || null === (BH = HH.pU) || void 0 === BH || !BH.isGun()),
                customButtons: null !== (LH = rH.wT.customButtons) && void 0 !== LH ? LH : null,
                touchscreenActionButton: null !== (AH = rH.wT.touchscreenActionButton) && void 0 !== AH ? AH : null
              }
            },
            pressTouchButton: HH => {
              (0, tH.sendColyMessage)(rH.Fj, HH)
            }
          }
        })()),
        BH = (0, AH.e)(),
        LH = null,
        SH = null;
      return () => {
        HH(), BH(), null === LH || void 0 === LH || LH(), null === SH || void 0 === SH || SH()
      }
    }
  },
  37479: (HH, BH, LH) => {
    LH.d(BH, {
      A: () => uH,
      C: () => xH,
      c: () => SH,
      g: () => QH,
      j: () => WH,
      k: () => tH,
      n: () => GH,
      r: () => MH,
      t: () => XH,
      x: () => vH
    });
    var AH = LH(15),
      rH = LH(18);
    const SH = "clientGameInventoryButtonsChanged",
      hH = new Map;

    function tH() {
      return [...hH.values()].sort(((HH, BH) => {
        var LH, AH;
        return (null !== (LH = HH.order) && void 0 !== LH ? LH : 0) - (null !== (AH = BH.order) && void 0 !== AH ? AH : 0)
      }))
    }
    let zH = null;

    function CH(HH) {
      zH = HH
    }
    let EH = !1;

    function XH(HH) {
      EH = !0;
      try {
        HH.onClick()
      } finally {
        EH = !1
      }
      HH.panel && "clientGame" === AH.c.get("openInGameMenuName") && CH(HH.id)
    }

    function GH() {
      return EH
    }

    function YH() {
      return tH().filter((HH => HH.panel && !HH.disabled))
    }

    function uH(HH) {
      const BH = YH(),
        LH = BH.findIndex((HH => HH.id === zH));
      return !(LH < 0 || BH.length < 2) && (XH(BH[(LH + HH + BH.length) % BH.length]), !0)
    }

    function QH() {
      return null !== zH && YH().length > 1
    }

    function WH() {
      CH(null)
    }

    function MH() {
      "inventory" !== AH.c.get("openInGameMenuName") && CH(null)
    }

    function xH() {
      const HH = zH;
      return CH(null), HH
    }

    function vH(HH) {
      return hH.set(HH.id, HH), rH.k.AX(SH, tH(), !0), () => {
        hH.get(HH.id) === HH && (hH.delete(HH.id), rH.k.AX(SH, tH()))
      }
    }
  },
  37474: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => tH,
      c: () => xH,
      g: () => WH,
      j: () => MH,
      n: () => GH,
      p: () => CH,
      t: () => QH,
      u: () => YH,
      v: () => EH
    });
    var AH = LH(15),
      rH = LH(18),
      SH = LH(1241),
      hH = LH(37479);
    const tH = "clientGameUiChanged";
    let zH = null;

    function CH() {
      return zH
    }

    function EH(HH, BH) {
      const LH = {
        content: HH,
        menu: BH
      };
      return zH = LH, rH.k.AX(tH, zH, !0), () => {
        zH === LH && (zH = null, uH = !1, WH(), rH.k.AX(tH, null))
      }
    }
    let XH = null;

    function GH() {
      return XH
    }

    function YH(HH) {
      return XH = HH, () => {
        XH === HH && (XH = null)
      }
    }
    let uH = !1;

    function QH() {
      const HH = AH.c.get("openInGameMenuName");
      "clientGame" !== HH && (uH = "inventory" === HH), (0, hH.n)() || (0, hH.j)(), (0, SH.x)(SH.d), AH.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function WH() {
      vH(!1)
    }

    function MH() {
      vH(uH)
    }

    function xH() {
      uH && vH(!1)
    }

    function vH(HH) {
      "clientGame" === AH.c.get("openInGameMenuName") && AH.c.set({
        openInGameMenuName: HH ? "inventory" : null
      }), HH || (0, hH.j)(), uH = !1
    }
  },
  37368: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => zH
    });
    var AH = LH(304),
      rH = LH(15),
      SH = LH(37373),
      hH = LH(1659),
      tH = LH(2064);

    function zH(HH, BH) {
      var LH, zH, CH;
      if (!rH.c.get("isKeydownEnabled") || HH.repeat) return;
      const EH = HH.code;
      "Escape" === HH.key ? (0, hH.j)(HH) : null !== (LH = tH.w.OpenSettings) && void 0 !== LH && LH.includes(EH) ? (0, hH.B)(HH, AH.o.SETTINGS) : null !== (zH = tH.w.OpenCharacterCustomization) && void 0 !== zH && zH.includes(EH) ? (0, SH.c)() || (0, hH.B)(HH, AH.o.CUSTOMISATION, BH()) : null !== (CH = tH.w.ShowDebugOverlay) && void 0 !== CH && CH.includes(EH) && rH.c.set({
        showDebugOverlay: !rH.c.get("showDebugOverlay")
      })
    }
  },
  39983: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => zH
    });
    var AH = LH(9627),
      rH = LH(37366),
      SH = LH(39991);
    const hH = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      tH = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function zH(HH, BH) {
      if (HH instanceof rH.c) return {
        at: hH[BH],
        code: 0
      };
      const LH = (0, AH.e)(HH),
        zH = "number" === typeof LH ? LH : 0;
      return null !== (0, SH.l)(zH).name ? {
        at: "refused",
        code: zH
      } : {
        at: tH[BH],
        code: zH
      }
    }
  },
  9627: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => SH,
      e: () => hH,
      f: () => tH,
      j: () => CH,
      l: () => zH
    });
    var AH = LH(176),
      rH = LH(5037);

    function SH(HH) {
      return hH(HH) === AH.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function hH(HH) {
      return "object" === typeof HH && null !== HH ? HH.code : void 0
    }

    function tH(HH) {
      var BH;
      return null !== (BH = Object.keys(rH.d).find((BH => rH.d[BH] === HH))) && void 0 !== BH ? BH : null
    }

    function zH(HH) {
      return "notWhitelisted" === HH ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const CH = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  37345: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => GH,
      g: () => EH,
      i: () => YH,
      j: () => XH
    });
    var AH = LH(317),
      rH = LH(648),
      SH = LH(659),
      hH = LH(30);
    const tH = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      zH = "playSessionGameNameWithVariation",
      CH = "wasMatchmakePlayer";

    function EH() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hH.f;
      (0, SH.k)(HH, tH)
    }

    function XH() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hH.f).setItem(CH, !0)
    }

    function GH() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hH.f;
      return (0, SH.e)(HH, tH)
    }

    function YH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hH.f;
      const LH = (0, SH.e)(BH, tH),
        EH = function(HH) {
          const BH = HH.getItem(zH);
          return "string" !== typeof BH ? null : BH
        }(BH),
        XH = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hH.f).getItem(CH)
        }(BH);
      let GH;
      return GH = null !== LH && null !== EH && (0, SH.i)(BH, tH) && function(HH, BH, LH) {
          const rH = (0, AH.Wb)(HH),
            SH = (0, AH.Wb)(BH),
            hH = (0, AH.Ob)(HH),
            tH = (0, AH.Ob)(BH);
          return !(rH !== SH || !LH) || rH === SH && hH === tH
        }(EH, HH, XH) ? LH : (0, rH.b)(), (0, SH.o)(BH, tH, GH), BH.setItem(zH, HH),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hH.f).removeItem(CH)
        }(BH), GH
    }
  },
  37341: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => TH,
      i: () => UH
    });
    var AH = LH(1005),
      rH = LH(186),
      SH = LH(314),
      hH = LH(625),
      tH = LH(317),
      zH = LH(1011),
      CH = LH(642),
      EH = LH(673),
      XH = LH(4928),
      GH = LH(81),
      YH = LH(120),
      uH = LH(1789),
      QH = LH(101),
      WH = LH(37345),
      MH = LH(30),
      xH = LH(656),
      vH = LH(628),
      PH = LH(37347);

    function TH() {
      var HH, BH;
      return [...null !== (HH = navigator.languages) && void 0 !== HH ? HH : [null !== (BH = navigator.language) && void 0 !== BH ? BH : "none"], "en-Gb"]
    }

    function UH(HH, BH, LH, UH, VH) {
      const OH = (0, AH.l)(BH) ? (0, AH.q)(BH) : null,
        bH = HH.isLoggedIn() && void 0 !== (0, rH.d)(SH.o, YH.siteUsed) ? (0, vH.e)() : null,
        kH = {
          cookies: (0, uH.getAllCookiesForGameNameWithVariation)(BH),
          isMobile: (0, GH.isMobile)(),
          isUsingCustomGameTexturePack: null !== OH && VH(OH),
          generalCookies: {
            joinDiscord: !!MH.e.getItem("DiscordPressed"),
            newGo: XH.c,
            ...HH.getMetricsCookies(),
            trafficCode: UH,
            compliance: GH.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, GH.getBrowserName)(),
            version: (0, GH.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, GH.getPlatformType)(),
            deviceType: (0, QH.d)()
          },
          isLoggedIn: HH.isLoggedIn(),
          lobbyName: LH,
          languages: TH(),
          version: hH.d,
          siteUsed: YH.siteUsed,
          subsiteUsed: YH.subsiteUsed,
          playSessionId: (0, WH.i)(BH),
          visitSessionId: (0, xH.c)(),
          clientReason: CH.A.reason,
          budgetBasis: (0, PH.f)(),
          ...null !== EH.r && {
            diagClaim: EH.r.claimId
          },
          ...null !== bH && {
            webGpuLoss: bH
          }
        };
      return null !== OH && (0, tH.Ic)(OH) ? (kH.lobbyName = (0, AH.h)(OH, (0, AH.m)(BH), LH), {
        roomName: `classic_${zH.i}`,
        joinOptions: kH
      }) : {
        roomName: BH,
        joinOptions: kH
      }
    }
  },
  39991: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => rH,
      e: () => SH,
      h: () => tH,
      l: () => EH,
      p: () => zH,
      t: () => hH
    });
    var AH = LH(176);
    const rH = 3e3,
      SH = 15e3;

    function hH(HH) {
      const BH = HH.endsWith(AH.n);
      return {
        text: (BH ? HH.slice(0, -AH.n.length) : HH) || null,
        dropsCache: BH
      }
    }
    const tH = "Either your internet isn't working or this is a bug.";

    function zH(HH, BH) {
      const LH = EH(HH);
      return null !== LH.name && "" === AH.e[LH.name].text && null !== BH ? BH : LH.reason
    }
    const CH = "You were removed from the game.";

    function EH(HH) {
      var BH;
      let LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const rH = null !== (BH = Object.keys(AH.e).find((BH => AH.e[BH].code === HH))) && void 0 !== BH ? BH : null;
      if (null === rH) return {
        code: HH,
        name: rH,
        reason: null !== LH && void 0 !== LH ? LH : `${tH}\nCode: ${HH}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: SH,
        canReconnect: hH = !1
      } = AH.e[rH], zH = HH === AH.e.outdatedVersion.code || HH === AH.e.loadRecaptchaError.code;
      return {
        code: HH,
        name: rH,
        reason: "" !== SH ? SH : null !== LH && void 0 !== LH ? LH : HH === AH.e.gameOrPluginKick.code ? CH : `Code: ${HH}`,
        canReconnect: hH,
        automaticallyReconnect: HH === AH.e.customGameUpdated.code || HH === AH.e.duplicateLobbyNameError.code,
        requiresRefresh: zH
      }
    }
  },
  39903: (HH, BH, LH) => {
    function AH(HH, BH, LH, AH, rH) {
      var SH = {};
      return Object.keys(AH).forEach((function(HH) {
        SH[HH] = AH[HH]
      })), SH.enumerable = !!SH.enumerable, SH.configurable = !!SH.configurable, ("value" in SH || SH.initializer) && (SH.writable = !0), SH = LH.slice().reverse().reduce((function(LH, AH) {
        return AH(HH, BH, LH) || LH
      }), SH), rH && void 0 !== SH.initializer && (SH.value = SH.initializer ? SH.initializer.call(rH) : void 0, SH.initializer = void 0), void 0 === SH.initializer && (Object.defineProperty(HH, BH, SH), SH = null), SH
    }
    LH.d(BH, {
      b: () => AH
    })
  },
  39899: (HH, BH, LH) => {
    function AH(HH, BH, LH, AH) {
      LH && Object.defineProperty(HH, BH, {
        enumerable: LH.enumerable,
        configurable: LH.configurable,
        writable: LH.writable,
        value: LH.initializer ? LH.initializer.call(AH) : void 0
      })
    }
    LH.d(BH, {
      c: () => AH
    })
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);