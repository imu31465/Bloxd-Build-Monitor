export const id = 189;
export const ids = [189];
export const modules = {
  39064: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => xq,
      g: () => Oq
    });
    var Yq = gq(3933);
    let lq = null;

    function Oq(qq) {
      return null !== lq && qq === lq
    }

    function mq() {
      this.IK = !1, this.stopPropagation = !1, this.gC = !1, this.disabled = !1
    }
    class xq {
      constructor(qq, Eq) {
        this.version = "0.7.0";
        var gq = Object.assign({}, new mq, Eq || {});
        this.element = qq || document, this.IK = !!gq.IK, this.stopPropagation = !!gq.stopPropagation, this.gC = !!gq.gC, this.disabled = !!gq.disabled, this.filterEvents = (qq, Eq) => !0, this.ignoreEvent = qq => !1, this.down = new Yq.EventEmitter, this.up = new Yq.EventEmitter, this.state = {}, this.lC = {
          dx: 0,
          dy: 0,
          hEq: 0,
          nEq: 0,
          bEq: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? cq(this) : document.addEventListener("DOMContentLoaded", (qq => {
          cq(this)
        }), {
          once: !0
        })
      }
      bind(qq) {
        for (var Eq = arguments.length, gq = new Array(Eq > 1 ? Eq - 1 : 0), Yq = 1; Yq < Eq; Yq++) gq[Yq - 1] = arguments[Yq];
        gq.forEach((Eq => {
          var gq = this._keyBindmap[Eq] || [];
          gq.includes(qq) || (gq.push(qq), this._keyBindmap[Eq] = gq)
        })), this.state[qq] = !!this.state[qq], this.pressCount[qq] = this.pressCount[qq] || 0, this.releaseCount[qq] = this.releaseCount[qq] || 0
      }
      unbind(qq) {
        for (var Eq in this._keyBindmap) {
          var gq = this._keyBindmap[Eq],
            Yq = gq.indexOf(qq);
          Yq > -1 && gq.splice(Yq, 1)
        }
      }
      getBindings() {
        var qq = {};
        for (var Eq in this._keyBindmap) {
          this._keyBindmap[Eq].forEach((gq => {
            qq[gq] = qq[gq] || [], qq[gq].push(Eq)
          }))
        }
        return qq
      }
      SB() {
        Aq(this.lC), Aq(this.pressCount), Aq(this.releaseCount)
      }
    }

    function Aq(qq) {
      for (var Eq in qq) qq[Eq] = 0
    }

    function cq(qq) {
      window.addEventListener("keydown", dq.bind(null, qq, !0), !1), window.addEventListener("keyup", dq.bind(null, qq, !1), !1);
      var Eq = {
        passive: !0
      };
      qq.element.addEventListener("touchstart", Nq.bind(void 0, qq), {
        passive: !1
      }), qq.element.addEventListener("touchend", Vq.bind(void 0, qq), Eq), qq.element.addEventListener("mousedown", jq.bind(null, qq, !0), Eq), window.document.addEventListener("mouseup", jq.bind(null, qq, !1), Eq), qq.element.addEventListener("touchmove", Hq.bind(null, qq), Eq), qq.element.addEventListener("mousemove", Hq.bind(null, qq), Eq), window.PointerEvent, qq.element.addEventListener("wheel", oq.bind(null, qq), Eq), qq.element.addEventListener("contextmenu", Pq.bind(null, qq), !1), window.addEventListener("blur", tq.bind(null, qq), !1)
    }
    var uq = 0,
      Bq = 0,
      Wq = null;

    function Nq(qq, Eq) {
      Eq.preventDefault(), aq(Eq)
    }

    function aq(qq) {
      let Eq = !1;
      for (let gq = 0; gq < qq.touches.length; ++gq)
        if (qq.touches[gq].identifier === Wq) {
          Eq = !0;
          break
        } if (!Eq) {
        const Eq = qq.changedTouches[0];
        uq = Eq.clientX, Bq = Eq.clientY, Wq = Eq.identifier
      }
    }

    function Vq(qq, Eq) {
      for (var gq = Eq.changedTouches, Yq = 0; Yq < gq.length; ++Yq) gq[Yq].identifier === Wq && (Wq = null)
    }

    function dq(qq, Eq, gq) {
      if (!qq.ignoreEvent(gq)) try {
        rq(qq, gq), Eq && gq.isTrusted && !gq.repeat && qq._keyStates[gq.code] && vq(qq, gq.code)
      } finally {
        hq(gq.code, Eq, qq, gq)
      }
    }

    function jq(qq, Eq, gq) {
      if (!qq.ignoreEvent(gq)) try {
        rq(qq, gq)
      } finally {
        ! function(qq, Eq, gq) {
          if ("pointerId" in gq)
            if (Eq) {
              if (null !== qq._touches.currID) return;
              qq._touches.currID = gq.pointerId
            } else {
              if (qq._touches.currID !== gq.pointerId) return;
              qq._touches.currID = null
            } var Yq = "button" in gq ? gq.button + 1 : 1;
          hq("Mouse" + Yq, Eq, qq, gq)
        }(qq, Eq, gq)
      }
    }

    function Hq(qq, Eq) {
      var gq = Eq.movementX || Eq.mozMovementX || 0,
        Yq = Eq.movementY || Eq.mozMovementY || 0;
      if (Eq.touches && 0 === (gq | Yq)) {
        var lq = function(qq) {
          aq(qq);
          for (let Eq = 0; Eq < qq.changedTouches.length; ++Eq)
            if (qq.changedTouches[Eq].identifier == Wq) {
              const gq = qq.changedTouches[Eq],
                Yq = [gq.clientX - uq, gq.clientY - Bq];
              return uq = gq.clientX, Bq = gq.clientY, Yq
            } return console.error(`Did not find touch id ${Wq}`), [0, 0]
        }(Eq);
        gq = lq[0], Yq = lq[1]
      }
      qq.lC.dx += gq, qq.lC.dy += Yq
    }

    function oq(qq, Eq) {
      rq(qq, Eq);
      var gq = 1;
      switch (Eq.deltaMode) {
        case 0:
          gq = 1;
          break;
        case 1:
          gq = 12;
          break;
        case 2:
          gq = qq.element.clientHeight || window.innerHeight
      }
      qq.lC.hEq += (Eq.deltaX || 0) * gq, qq.lC.nEq += (Eq.deltaY || 0) * gq, qq.lC.bEq += (Eq.deltaZ || 0) * gq
    }

    function Pq(qq, Eq) {
      if (!qq.gC) return Eq.preventDefault(), !1
    }
    var Qq = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function yq(qq, Eq) {
      return !!qq[Qq[Eq]] || ("AltRight" === Eq || "ControlLeft" === Eq) && "function" === typeof qq.getModifierState && !0 === qq.getModifierState("AltGraph")
    }

    function tq(qq, Eq) {
      for (var gq in qq._modifiersHeldThroughBlur = {}, Qq) qq._keyStates[gq] && (qq._modifiersHeldThroughBlur[gq] = !0);
      Eq && Eq.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (qq) {
          return !0
        }
      }() && (clearTimeout(qq._blurRelease), qq._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var Eq in qq._modifiersHeldThroughBlur = {}, qq._keyStates) qq._keyStates[Eq] && !/^Mouse\d/.test(Eq) && vq(qq, Eq)
      }), 0))
    }

    function rq(qq, Eq) {
      var gq = qq._modifiersHeldThroughBlur;
      if (gq && Eq.isTrusted && document.hasFocus())
        for (var Yq in gq) delete gq[Yq], qq._keyStates[Yq] && Yq !== Eq.code && (yq(Eq, Yq) || vq(qq, Yq))
    }

    function vq(qq, Eq) {
      const gq = {
          code: Eq,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        Yq = lq;
      lq = gq;
      try {
        hq(Eq, !1, qq, gq)
      } finally {
        lq = Yq
      }
    }

    function hq(qq, Eq, gq, Yq) {
      var lq = gq._keyBindmap[qq];
      lq && (nq(gq._keyStates[qq], Eq) && (gq._keyStates[qq] = Eq, lq.forEach((qq => {
        (!gq.filterEvents || gq.filterEvents(Yq, qq)) && function(qq, Eq, gq, Yq) {
          var lq = Eq ? gq.pressCount : gq.releaseCount;
          lq[qq] = (lq[qq] || 0) + 1;
          var Oq = gq._bindPressCount[qq] || 0;
          (Oq += Eq ? 1 : -1) < 0 && (Oq = 0);
          gq._bindPressCount[qq] = Oq;
          var mq = gq.state[qq];
          if (nq(mq, Oq)) {
            gq.state[qq] = Oq > 0;
            var xq = Eq ? gq.down : gq.up;
            gq.disabled || xq.emit(qq, Yq)
          }
        }(qq, Eq, gq, Yq)
      }))), "button" in Yq || (gq.IK && !Yq.defaultPrevented && Yq.preventDefault(), gq.stopPropagation && Yq.stopPropagation()))
    }

    function nq(qq, Eq) {
      return qq ? !Eq : Eq
    }
  },
  36734: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Vq,
      e: () => dq
    });
    var Yq = gq(57),
      lq = gq(1416),
      Oq = gq(1942),
      mq = gq(36681),
      xq = gq(598),
      Aq = gq(1018),
      cq = gq.n(Aq),
      uq = gq(1070);
    const Bq = [Wq()];

    function Wq() {
      return {
        source: null,
        direction: null,
        mF: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function Nq(qq) {
      return Bq.find((Eq => null !== Eq.source && Eq.source === qq))
    }

    function aq(qq) {
      clearTimeout(qq.timeout), qq.source = null, qq.direction = null, qq.writtenAngle = null, qq.mF && (qq.mF.style.rotate = "")
    }
    const Vq = (0, Yq.memo)((function() {
      const [, qq] = (0, Yq.useReducer)((qq => qq + 1), 0);
      return (0, lq.f)("damagedByOtherPlayer", (Eq => {
        let {
          jY: gq,
          direction: Yq
        } = Eq;
        const lq = gq || "nonDirectional",
          Oq = function(qq) {
            var Eq;
            const gq = null !== (Eq = Nq(qq)) && void 0 !== Eq ? Eq : Bq.find((qq => null === qq.source));
            if (gq) return gq;
            const Yq = {
              source: null,
              direction: null,
              mF: null,
              timeout: void 0,
              writtenAngle: null
            };
            return Bq.push(Yq), Yq
          }(lq);
        clearTimeout(Oq.timeout), Oq.source = lq, Oq.direction = Yq, Oq.timeout = setTimeout((() => {
          aq(Oq), qq()
        }), 800), qq()
      })), (0, Oq.d)("kill", (Eq => {
        let {
          killer: gq,
          victim: Yq
        } = Eq;
        const lq = gq.local && Nq(Yq.id);
        lq && (aq(lq), qq())
      })), (0, Yq.useEffect)((() => {
        const qq = (0, mq.h)("turnDamageIndicators", dq);
        return () => {
          qq(), Bq.forEach(aq)
        }
      }), []), (0, uq.jsx)("div", {
        className: "DirectionalDamage",
        children: Bq.map(((qq, Eq) => (0, uq.jsx)("div", {
          ref: Eq => {
            qq.mF = Eq
          },
          className: cq()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, xq.H)(qq.direction),
            DamageIndicatorIdle: null === qq.source
          })
        }, Eq)))
      })
    }));

    function dq(qq) {
      for (const Eq of Bq) {
        if (null === Eq.source || (0, xq.H)(Eq.direction)) continue;
        const gq = Eq.direction - qq;
        gq !== Eq.writtenAngle && (Eq.writtenAngle = gq, Eq.mF.style.rotate = `${gq}rad`)
      }
    }
  },
  36543: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => lq,
      h: () => Oq
    });
    let Yq = !1;

    function lq() {
      return Yq
    }

    function Oq(qq) {
      return Yq !== qq && (Yq = qq, !0)
    }
  },
  9207: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Oq,
      d: () => lq
    });
    var Yq = gq(24);

    function lq(qq, Eq) {
      return qq && !Eq
    }

    function Oq() {
      return lq(Yq.b.get("isTouchScreen"), Yq.b.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  40400: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      startPadGameplay: () => Qq
    });
    gq(40293);
    var Yq = gq(40295),
      lq = gq(3595),
      Oq = gq(24),
      mq = gq(39021),
      xq = gq(3545),
      Aq = gq(39040),
      cq = gq(31),
      uq = gq(2668),
      Bq = gq(38420),
      Wq = gq(8826),
      Nq = gq(40301);
    const aq = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var Vq = gq(40314),
      dq = gq(8803),
      jq = gq(39056);
    const Hq = qq => qq.padSneakToggled || !!Oq.b.get("clientEscMenuOptions").crouchIsToggle && qq.crouchToggled,
      oq = () => {
        const qq = (() => {
          const qq = (0, Wq.b)();
          let Eq = aq;
          const gq = new Nq.d;
          let Yq = !1,
            lq = 0;
          const Oq = () => {
            const gq = performance.now(),
              Oq = 0 === lq ? 0 : gq - lq;
            if (lq = gq, !Yq) return qq.discardPending(), null;
            const mq = (0, Nq.m)(Eq, Oq),
              xq = qq.drainLookDelta(),
              Aq = (0, Bq.i)();
            return {
              VJ: (mq.VJ + xq.VJ) * Aq,
              dJ: (mq.dJ + xq.dJ) * Aq
            }
          };
          return {
            update: (qq, lq, mq, xq) => {
              qq.camera.uD !== Oq && (qq.camera.uD = Oq), Yq = !0, Eq = (0, Nq.o)(gq, lq, mq, xq, performance.now())
            },
            release: () => {
              Yq = !1, Eq = aq, gq.reset()
            },
            uninstall: qq => {
              qq.camera.uD === Oq && (qq.camera.uD = null)
            }
          }
        })();
        return {
          update: (Eq, gq, Yq) => {
            qq.update((0, uq.e)(), Eq, gq, Yq)
          },
          release: qq.release,
          uninstall: () => {
            const Eq = (0, uq.e)();
            Eq && qq.uninstall(Eq)
          }
        }
      };
    var Pq = gq(40309);
    gq(37686), gq(8686);
    gq(8704).b;
    const Qq = () => {
      const qq = (0, Pq.d)((() => {
          const qq = {
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
            bodies: () => (0, mq.c)(),
            look: oq(),
            move: (Eq, gq) => {
              const Yq = (0, uq.e)(),
                lq = Yq.Iy.Hgq();
              if (qq.x = Eq.x, qq.y = Eq.y, qq.magnitude = Eq.magnitude, qq.headingOffset = Eq.headingOffset, qq.jumpHeld = Eq.jumpHeld, Eq.jumpPressed && (qq.jumpPressedSinceTick = !0), qq.running = Eq.running, qq.sprintHeld = Eq.sprintHeld, gq) {
                const Eq = (0, Vq.c)({
                  ...gq,
                  descending: Yq.Iy.yEq(Yq.oR).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!Yq.Uy.canCrouch,
                  toggled: Hq(lq)
                });
                qq.crouchHeld = Eq.crouchHeld, lq.padSneakToggled = Eq.toggled, lq.crouchToggled = !1, (0, dq.f)(Eq.toggled)
              }
              lq.gamepad = qq
            },
            stopMoving: () => {
              var Eq;
              Object.assign(qq, {
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
              const gq = null === (Eq = (0, uq.e)()) || void 0 === Eq ? void 0 : Eq.Iy.Hgq();
              (null === gq || void 0 === gq ? void 0 : gq.gamepad) === qq && (gq.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: qq => {
              const Eq = (0, uq.e)(),
                gq = null === Eq || void 0 === Eq ? void 0 : Eq.Iy.Hgq();
              "touch" === qq ? ((0, dq.f)(!1), null !== gq && void 0 !== gq && gq.padSneakToggled && (gq.padSneakToggled = !1, gq.isTouchscreen && !gq.gamepad && Eq.Iy.REq(Eq.oR).setCrouching(!!Eq.Uy.canCrouch && gq.touchCrouch))) : "gamepad" === qq && gq && (0, dq.f)(Hq(gq))
            },
            hasPlayer: () => {
              var qq;
              return !(null === (qq = (0, uq.e)()) || void 0 === qq || !qq.oR)
            },
            isPlayerDead: () => {
              var qq;
              const Eq = (0, uq.e)();
              return !1 === (null === (qq = Eq.Iy.Bgq(Eq.oR)) || void 0 === qq ? void 0 : qq.isAlive)
            },
            isReplayMode: () => {
              var qq, Eq;
              return !(null === (qq = (0, uq.b)()) || void 0 === qq || null === (Eq = qq.client) || void 0 === Eq || !Eq.isReplayMode())
            },
            isFreeCameraOn: () => {
              var qq, Eq, gq;
              return !(null === (qq = (0, uq.b)()) || void 0 === qq || null === (Eq = qq.client) || void 0 === Eq || null === (gq = Eq.freeCameraController) || void 0 === gq || !gq.isEnabled())
            },
            targetsBlock: () => !!(0, uq.e)().Kqq,
            selectedSlotEmpty: () => {
              var qq;
              const Eq = (0, uq.e)();
              return !(null !== (qq = Eq.Iy.sEq(Eq.oR)) && void 0 !== qq && qq.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const qq = (0, uq.e)().Uy;
              return !!qq.creative && !!qq.canPickBlocks
            },
            scrollHotbar: qq => {
              cq.i.TV("ScrollInventorySlot", qq)
            },
            hasFullInventory: () => (0, Aq.c)((0, uq.e)()),
            hasLobbyTab: () => (0, jq.d)((0, uq.e)().Uy),
            contextActionInputs: () => {
              var qq, Eq, gq, Yq;
              const lq = (0, uq.e)();
              return {
                holdingGun: !(null === (qq = lq.Iy.Wgq(lq.oR)) || void 0 === qq || null === (Eq = qq.aZ) || void 0 === Eq || !Eq.isGun()),
                customButtons: null !== (gq = lq.Uy.customButtons) && void 0 !== gq ? gq : null,
                touchscreenActionButton: null !== (Yq = lq.Uy.touchscreenActionButton) && void 0 !== Yq ? Yq : null
              }
            },
            pressTouchButton: qq => {
              (0, xq.sendColyMessage)(lq.fk, qq)
            }
          }
        })()),
        Eq = (0, Yq.e)(),
        gq = null,
        Oq = null;
      return () => {
        qq(), Eq(), null === gq || void 0 === gq || gq(), null === Oq || void 0 === Oq || Oq()
      }
    }
  },
  36662: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Oq,
      d: () => Vq,
      g: () => dq,
      h: () => xq,
      l: () => Wq,
      m: () => jq,
      o: () => Bq,
      p: () => oq,
      r: () => aq,
      v: () => Hq
    });
    var Yq = gq(24),
      lq = gq(31);
    const Oq = "clientGameInventoryButtonsChanged",
      mq = new Map;

    function xq() {
      return [...mq.values()].sort(((qq, Eq) => {
        var gq, Yq;
        return (null !== (gq = qq.order) && void 0 !== gq ? gq : 0) - (null !== (Yq = Eq.order) && void 0 !== Yq ? Yq : 0)
      }))
    }
    let Aq = null;

    function cq(qq) {
      Aq = qq
    }
    let uq = !1;

    function Bq(qq) {
      uq = !0;
      try {
        qq.onClick()
      } finally {
        uq = !1
      }
      qq.panel && "clientGame" === Yq.b.get("openInGameMenuName") && cq(qq.id)
    }

    function Wq() {
      return uq
    }

    function Nq() {
      return xq().filter((qq => qq.panel && !qq.disabled))
    }

    function aq(qq) {
      const Eq = Nq(),
        gq = Eq.findIndex((qq => qq.id === Aq));
      return !(gq < 0 || Eq.length < 2) && (Bq(Eq[(gq + qq + Eq.length) % Eq.length]), !0)
    }

    function Vq() {
      return null !== Aq && Nq().length > 1
    }

    function dq() {
      cq(null)
    }

    function jq() {
      "inventory" !== Yq.b.get("openInGameMenuName") && cq(null)
    }

    function Hq() {
      const qq = Aq;
      return cq(null), qq
    }

    function oq(qq) {
      return mq.set(qq.id, qq), lq.i.TV(Oq, xq(), !0), () => {
        mq.get(qq.id) === qq && (mq.delete(qq.id), lq.i.TV(Oq, xq()))
      }
    }
  },
  36657: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => xq,
      e: () => dq,
      h: () => jq,
      j: () => Wq,
      l: () => cq,
      m: () => Vq,
      n: () => Nq,
      r: () => uq
    });
    var Yq = gq(24),
      lq = gq(31),
      Oq = gq(1274),
      mq = gq(36662);
    const xq = "clientGameUiChanged";
    let Aq = null;

    function cq() {
      return Aq
    }

    function uq(qq, Eq) {
      const gq = {
        content: qq,
        menu: Eq
      };
      return Aq = gq, lq.i.TV(xq, Aq, !0), () => {
        Aq === gq && (Aq = null, aq = !1, dq(), lq.i.TV(xq, null))
      }
    }
    let Bq = null;

    function Wq() {
      return Bq
    }

    function Nq(qq) {
      return Bq = qq, () => {
        Bq === qq && (Bq = null)
      }
    }
    let aq = !1;

    function Vq() {
      const qq = Yq.b.get("openInGameMenuName");
      "clientGame" !== qq && (aq = "inventory" === qq), (0, mq.l)() || (0, mq.g)(), (0, Oq.m)(Oq.d), Yq.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function dq() {
      Hq(!1)
    }

    function jq() {
      Hq(aq)
    }

    function Hq(qq) {
      "clientGame" === Yq.b.get("openInGameMenuName") && Yq.b.set({
        openInGameMenuName: qq ? "inventory" : null
      }), qq || (0, mq.g)(), aq = !1
    }
  },
  36534: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Aq
    });
    var Yq = gq(296),
      lq = gq(24),
      Oq = gq(36543),
      mq = gq(1622),
      xq = gq(1952);

    function Aq(qq, Eq) {
      var gq, Aq, cq;
      if (!lq.b.get("isKeydownEnabled") || qq.repeat) return;
      const uq = qq.code;
      "Escape" === qq.key ? (0, mq.h)(qq) : null !== (gq = xq.u.OpenSettings) && void 0 !== gq && gq.includes(uq) ? (0, mq.u)(qq, Yq.p.SETTINGS) : null !== (Aq = xq.u.OpenCharacterCustomization) && void 0 !== Aq && Aq.includes(uq) ? (0, Oq.e)() || (0, mq.u)(qq, Yq.p.CUSTOMISATION, Eq()) : null !== (cq = xq.u.ShowDebugOverlay) && void 0 !== cq && cq.includes(uq) && lq.b.set({
        showDebugOverlay: !lq.b.get("showDebugOverlay")
      })
    }
  },
  36519: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Wq,
      f: () => uq,
      g: () => Nq,
      i: () => Bq
    });
    var Yq = gq(307),
      lq = gq(616),
      Oq = gq(632),
      mq = gq(38);
    const xq = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      Aq = "playSessionGameNameWithVariation",
      cq = "wasMatchmakePlayer";

    function uq() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mq.k;
      (0, Oq.f)(qq, xq)
    }

    function Bq() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mq.k).setItem(cq, !0)
    }

    function Wq() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mq.k;
      return (0, Oq.c)(qq, xq)
    }

    function Nq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mq.k;
      const gq = (0, Oq.c)(Eq, xq),
        uq = function(qq) {
          const Eq = qq.getItem(Aq);
          return "string" !== typeof Eq ? null : Eq
        }(Eq),
        Bq = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mq.k).getItem(cq)
        }(Eq);
      let Wq;
      return Wq = null !== gq && null !== uq && (0, Oq.d)(Eq, xq) && function(qq, Eq, gq) {
          const lq = (0, Yq.Yb)(qq),
            Oq = (0, Yq.Yb)(Eq),
            mq = (0, Yq.Tb)(qq),
            xq = (0, Yq.Tb)(Eq);
          return !(lq !== Oq || !gq) || lq === Oq && mq === xq
        }(uq, qq, Bq) ? gq : (0, lq.d)(), (0, Oq.h)(Eq, xq, Wq), Eq.setItem(Aq, qq),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mq.k).removeItem(cq)
        }(Eq), Wq
    }
  },
  36515: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Hq,
      c: () => oq
    });
    var Yq = gq(987),
      lq = gq(600),
      Oq = gq(307),
      mq = gq(989),
      xq = gq(611),
      Aq = gq(642),
      cq = gq(4346),
      uq = gq(96),
      Bq = gq(136),
      Wq = gq(1710),
      Nq = gq(114),
      aq = gq(36519),
      Vq = gq(38),
      dq = gq(623),
      jq = gq(36523);

    function Hq() {
      var qq, Eq;
      return [...null !== (qq = navigator.languages) && void 0 !== qq ? qq : [null !== (Eq = navigator.language) && void 0 !== Eq ? Eq : "none"], "EN-gb"]
    }

    function oq(qq, Eq, gq, oq, Pq) {
      const Qq = (0, Yq.j)(Eq) ? (0, Yq.o)(Eq) : null,
        yq = {
          cookies: (0, Wq.getAllCookiesForGameNameWithVariation)(Eq),
          isMobile: (0, uq.isMobile)(),
          isUsingCustomGameTexturePack: null !== Qq && Pq(Qq),
          generalCookies: {
            joinDiscord: !!Vq.i.getItem("DiscordPressed"),
            newGo: cq.b,
            ...qq.getMetricsCookies(),
            trafficCode: oq,
            compliance: uq.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, uq.getBrowserName)(),
            version: (0, uq.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, uq.getPlatformType)(),
            deviceType: (0, Nq.d)()
          },
          isLoggedIn: qq.isLoggedIn(),
          lobbyName: gq,
          languages: Hq(),
          version: lq.e,
          siteUsed: Bq.n,
          subsiteUsed: Bq.q,
          playSessionId: (0, aq.g)(Eq),
          visitSessionId: (0, dq.e)(),
          clientReason: xq.k.reason,
          budgetBasis: (0, jq.c)(),
          ...null !== Aq.r && {
            diagClaim: Aq.r.claimId
          }
        };
      return null !== Qq && (0, Oq.Pc)(Qq) ? (yq.lobbyName = (0, Yq.f)(Qq, (0, Yq.k)(Eq), gq), {
        roomName: `classic_${mq.i}`,
        joinOptions: yq
      }) : {
        roomName: Eq,
        joinOptions: yq
      }
    }
  },
  36350: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Yq,
      g: () => lq,
      j: () => Oq,
      k: () => mq
    });
    const Yq = 1024,
      lq = 1024 * Yq;

    function Oq(qq) {
      return 2 ** Math.floor(Math.log2(Math.max(1, qq / lq)))
    }

    function mq(qq) {
      return (qq / lq).toFixed(1)
    }
  },
  36528: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Oq,
      f: () => xq,
      g: () => mq,
      i: () => Aq,
      j: () => cq,
      k: () => uq
    });
    var Yq = gq(190);
    const lq = 32 * gq(36350).g,
      Oq = 6144,
      mq = 4608,
      xq = 512;

    function Aq(qq) {
      return Math.floor(lq * qq / Oq)
    }

    function cq(qq) {
      const Eq = qq - Math.floor(qq / 6);
      let gq = Yq.c.maxChunkHorizAddDistance,
        lq = Yq.c.maxChunkVertAddDistance;
      if (uq(gq + 1, lq + 1) <= Eq) return null;
      for (; uq(gq + 1, lq + 1) > Eq && (gq > 0 || lq > 0);) gq > lq ? gq-- : lq--;
      return {
        horizontal: gq,
        vertical: lq
      }
    }

    function uq(qq, Eq) {
      const gq = Math.max(qq, Eq);
      let Yq = 0;
      for (let lq = -gq; lq <= gq; lq++)
        for (let Oq = -gq; Oq <= gq; Oq++)
          for (let mq = -gq; mq <= gq; mq++) Bq(qq, Eq, lq, Oq, mq) && Yq++;
      return Yq
    }

    function Bq(qq, Eq, gq, Yq, lq) {
      const Oq = gq * gq + lq * lq;
      return qq === Eq ? Oq + Yq * Yq <= qq * qq : qq > Eq ? Math.abs(Yq) <= Eq && Oq + Yq * Yq <= qq * qq : Oq <= qq * qq && Oq + Yq * Yq <= Eq * Eq
    }
  },
  36523: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => yq,
      c: () => Qq,
      e: () => Pq
    });
    var Yq = gq(190),
      lq = gq(96),
      Oq = gq(2825),
      mq = gq(4231),
      xq = gq(614),
      Aq = gq(36528);
    const cq = 1048576,
      uq = 1024 * cq,
      Bq = 400 * cq,
      Wq = 147456,
      Nq = .5,
      aq = 1.5 * uq,
      Vq = 768 * cq;

    function dq(qq) {
      return Bq + qq * Wq
    }

    function jq(qq, Eq, gq) {
      var lq, mq;
      let {
        footprintBytes: xq,
        basis: cq,
        namesLimit: jq
      } = function(qq) {
        const {
          os: Eq,
          deviceMemory: gq
        } = qq;
        if ("ios" === Eq) switch ((0, Oq.h)(qq)) {
          case "ipad_m":
            return {
              footprintBytes: dq(Aq.c), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: Vq, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: aq, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: Vq, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof gq && Number.isFinite(gq) && gq > 0 ? {
          footprintBytes: gq * uq * Nq,
          basis: `memory-${gq}`,
          namesLimit: !0
        } : "android" === Eq ? {
          footprintBytes: Vq,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: dq(Aq.g),
          basis: "unreported",
          namesLimit: !1
        }
      }(qq);
      if (gq) {
        const qq = Math.min(xq, dq(Aq.c));
        xq = Bq + Math.max(0, qq - Bq) / 2, cq += "+killed", jq = !0
      }
      null !== Eq && dq(Eq) < xq && (xq = dq(Eq), cq += "+learned", jq = !0);
      const Hq = function(qq) {
          const Eq = Math.floor((qq - Bq) / Wq);
          return Math.min(Aq.c, Math.max(Aq.f, Eq))
        }(xq),
        oq = (0, Aq.j)(Hq);
      return {
        footprintBytes: xq,
        shedFootprintBytes: jq ? Math.max(xq, dq(Hq)) : null,
        chunkCap: Hq,
        maxHorizDistance: null !== (lq = null === oq || void 0 === oq ? void 0 : oq.horizontal) && void 0 !== lq ? lq : Yq.c.maxChunkHorizAddDistance,
        maxVertDistance: null !== (mq = null === oq || void 0 === oq ? void 0 : oq.vertical) && void 0 !== mq ? mq : Yq.c.maxChunkVertAddDistance,
        basis: cq
      }
    }
    let Hq = null;

    function oq() {
      return jq({
        os: (0, lq.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, Oq.k)()
      }, (0, mq.g)(), (0, xq.D)("wasm").length > 0)
    }

    function Pq() {
      return Hq ??= oq(), Hq
    }

    function Qq() {
      var qq;
      return (null !== (qq = Hq) && void 0 !== qq ? qq : oq()).basis
    }

    function yq(qq, Eq) {
      return qq.setChunkCap(Eq.chunkCap)
    }
  },
  36912: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => lq,
      f: () => Oq,
      h: () => Wq,
      j: () => xq,
      l: () => Aq,
      n: () => cq,
      o: () => Bq,
      q: () => uq,
      t: () => mq
    });
    var Yq = gq(1226);
    let lq = function(qq) {
        return qq[qq.Join = 0] = "Join", qq[qq.Leave = 1] = "Leave", qq[qq.Push = 2] = "Push", qq[qq.Cursor = 3] = "Cursor", qq[qq.Submit = 4] = "Submit", qq[qq.ReloadAsVariation = 5] = "ReloadAsVariation", qq[qq.CreateFile = 6] = "CreateFile", qq[qq.RenameFile = 7] = "RenameFile", qq[qq.DeleteFile = 8] = "DeleteFile", qq[qq.SetEngine = 9] = "SetEngine", qq[qq.RenameFolder = 10] = "RenameFolder", qq
      }({}),
      Oq = function(qq) {
        return qq[qq.Joined = 0] = "Joined", qq[qq.Updates = 1] = "Updates", qq[qq.Presence = 2] = "Presence", qq[qq.RemoteCursor = 3] = "RemoteCursor", qq[qq.ForceClose = 4] = "ForceClose", qq[qq.LobbyFilesChanged = 5] = "LobbyFilesChanged", qq[qq.EngineSettings = 6] = "EngineSettings", qq
      }({});

    function mq(qq) {
      return "lobby" === qq.kind ? `lobby:${qq.path}` : `codeBlock:${qq.pos[0]},${qq.pos[1]},${qq.pos[2]}`
    }

    function xq(qq) {
      if ("lobby" === qq) return {
        kind: "lobby",
        path: Yq.j
      };
      if (qq.startsWith("lobby:")) {
        const Eq = qq.slice(6);
        return Bq(Eq) ? {
          kind: "lobby",
          path: Eq
        } : null
      }
      const Eq = qq.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return Eq ? {
        kind: "codeBlock",
        pos: [parseInt(Eq[1]), parseInt(Eq[2]), parseInt(Eq[3])]
      } : null
    }

    function Aq(qq) {
      return qq.endsWith(".d.ts")
    }

    function cq(qq) {
      return qq.endsWith(".ts") && !Aq(qq)
    }
    const uq = 64;

    function Bq(qq) {
      if (!qq || qq !== qq.trim()) return !1;
      if (qq.length > uq) return !1;
      if (qq.startsWith("/") || qq.includes("\\") || qq.includes("\0")) return !1;
      if (!Aq(qq) && !cq(qq) && ! function(qq) {
          return qq.endsWith(".js") && !qq.endsWith(".min.js") && !qq.endsWith(".bundle.js")
        }(qq)) return !1;
      const Eq = qq.split("/");
      for (const gq of Eq)
        if ("" === gq || "." === gq || ".." === gq) return !1;
      return !0
    }
    const Wq = 14e3
  },
  38974: (qq, Eq, gq) => {
    function Yq(qq, Eq, gq, Yq, lq) {
      var Oq = {};
      return Object.keys(Yq).forEach((function(qq) {
        Oq[qq] = Yq[qq]
      })), Oq.enumerable = !!Oq.enumerable, Oq.configurable = !!Oq.configurable, ("value" in Oq || Oq.initializer) && (Oq.writable = !0), Oq = gq.slice().reverse().reduce((function(gq, Yq) {
        return Yq(qq, Eq, gq) || gq
      }), Oq), lq && void 0 !== Oq.initializer && (Oq.value = Oq.initializer ? Oq.initializer.call(lq) : void 0, Oq.initializer = void 0), void 0 === Oq.initializer && (Object.defineProperty(qq, Eq, Oq), Oq = null), Oq
    }
    gq.d(Eq, {
      c: () => Yq
    })
  },
  38968: (qq, Eq, gq) => {
    function Yq(qq, Eq, gq, Yq) {
      gq && Object.defineProperty(qq, Eq, {
        enumerable: gq.enumerable,
        configurable: gq.configurable,
        writable: gq.writable,
        value: gq.initializer ? gq.initializer.call(Yq) : void 0
      })
    }
    gq.d(Eq, {
      d: () => Yq
    })
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);