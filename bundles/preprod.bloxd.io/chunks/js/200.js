export const id = 200;
export const ids = [200];
export const modules = {
  39283: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => xp,
      f: () => Ip
    });
    var Op = cp(4176);
    let op = null;

    function Ip(pp) {
      return null !== op && pp === op
    }

    function Sp() {
      this.YG = !1, this.stopPropagation = !1, this.WG = !1, this.disabled = !1
    }
    class xp {
      constructor(pp, ip) {
        this.version = "0.7.0";
        var cp = Object.assign({}, new Sp, ip || {});
        this.element = pp || document, this.YG = !!cp.YG, this.stopPropagation = !!cp.stopPropagation, this.WG = !!cp.WG, this.disabled = !!cp.disabled, this.filterEvents = (pp, ip) => !0, this.ignoreEvent = pp => !1, this.down = new Op.EventEmitter, this.up = new Op.EventEmitter, this.state = {}, this.yG = {
          dx: 0,
          dy: 0,
          Aip: 0,
          Wip: 0,
          yip: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? Yp(this) : document.addEventListener("DOMContentLoaded", (pp => {
          Yp(this)
        }), {
          once: !0
        })
      }
      bind(pp) {
        for (var ip = arguments.length, cp = new Array(ip > 1 ? ip - 1 : 0), Op = 1; Op < ip; Op++) cp[Op - 1] = arguments[Op];
        cp.forEach((ip => {
          var cp = this._keyBindmap[ip] || [];
          cp.includes(pp) || (cp.push(pp), this._keyBindmap[ip] = cp)
        })), this.state[pp] = !!this.state[pp], this.pressCount[pp] = this.pressCount[pp] || 0, this.releaseCount[pp] = this.releaseCount[pp] || 0
      }
      unbind(pp) {
        for (var ip in this._keyBindmap) {
          var cp = this._keyBindmap[ip],
            Op = cp.indexOf(pp);
          Op > -1 && cp.splice(Op, 1)
        }
      }
      getBindings() {
        var pp = {};
        for (var ip in this._keyBindmap) {
          this._keyBindmap[ip].forEach((cp => {
            pp[cp] = pp[cp] || [], pp[cp].push(ip)
          }))
        }
        return pp
      }
      LP() {
        Lp(this.yG), Lp(this.pressCount), Lp(this.releaseCount)
      }
    }

    function Lp(pp) {
      for (var ip in pp) pp[ip] = 0
    }

    function Yp(pp) {
      window.addEventListener("keydown", wp.bind(null, pp, !0), !1), window.addEventListener("keyup", wp.bind(null, pp, !1), !1);
      var ip = {
        passive: !0
      };
      pp.element.addEventListener("touchstart", Wp.bind(void 0, pp), {
        passive: !1
      }), pp.element.addEventListener("touchend", Up.bind(void 0, pp), ip), pp.element.addEventListener("mousedown", vp.bind(null, pp, !0), ip), window.document.addEventListener("mouseup", vp.bind(null, pp, !1), ip), pp.element.addEventListener("touchmove", tp.bind(null, pp), ip), pp.element.addEventListener("mousemove", tp.bind(null, pp), ip), window.PointerEvent, pp.element.addEventListener("wheel", Hp.bind(null, pp), ip), pp.element.addEventListener("contextmenu", dp.bind(null, pp), !1), window.addEventListener("blur", kp.bind(null, pp), !1)
    }
    var Dp = 0,
      Ap = 0,
      Pp = null;

    function Wp(pp, ip) {
      ip.preventDefault(), yp(ip)
    }

    function yp(pp) {
      let ip = !1;
      for (let cp = 0; cp < pp.touches.length; ++cp)
        if (pp.touches[cp].identifier === Pp) {
          ip = !0;
          break
        } if (!ip) {
        const ip = pp.changedTouches[0];
        Dp = ip.clientX, Ap = ip.clientY, Pp = ip.identifier
      }
    }

    function Up(pp, ip) {
      for (var cp = ip.changedTouches, Op = 0; Op < cp.length; ++Op) cp[Op].identifier === Pp && (Pp = null)
    }

    function wp(pp, ip, cp) {
      if (!pp.ignoreEvent(cp)) try {
        mp(pp, cp), ip && cp.isTrusted && !cp.repeat && pp._keyStates[cp.code] && Rp(pp, cp.code)
      } finally {
        qp(cp.code, ip, pp, cp)
      }
    }

    function vp(pp, ip, cp) {
      if (!pp.ignoreEvent(cp)) try {
        mp(pp, cp)
      } finally {
        ! function(pp, ip, cp) {
          if ("pointerId" in cp)
            if (ip) {
              if (null !== pp._touches.currID) return;
              pp._touches.currID = cp.pointerId
            } else {
              if (pp._touches.currID !== cp.pointerId) return;
              pp._touches.currID = null
            } var Op = "button" in cp ? cp.button + 1 : 1;
          qp("Mouse" + Op, ip, pp, cp)
        }(pp, ip, cp)
      }
    }

    function tp(pp, ip) {
      var cp = ip.movementX || ip.mozMovementX || 0,
        Op = ip.movementY || ip.mozMovementY || 0;
      if (ip.touches && 0 === (cp | Op)) {
        var op = function(pp) {
          yp(pp);
          for (let ip = 0; ip < pp.changedTouches.length; ++ip)
            if (pp.changedTouches[ip].identifier == Pp) {
              const cp = pp.changedTouches[ip],
                Op = [cp.clientX - Dp, cp.clientY - Ap];
              return Dp = cp.clientX, Ap = cp.clientY, Op
            } return console.error(`Did not find touch id ${Pp}`), [0, 0]
        }(ip);
        cp = op[0], Op = op[1]
      }
      pp.yG.dx += cp, pp.yG.dy += Op
    }

    function Hp(pp, ip) {
      mp(pp, ip);
      var cp = 1;
      switch (ip.deltaMode) {
        case 0:
          cp = 1;
          break;
        case 1:
          cp = 12;
          break;
        case 2:
          cp = pp.element.clientHeight || window.innerHeight
      }
      pp.yG.Aip += (ip.deltaX || 0) * cp, pp.yG.Wip += (ip.deltaY || 0) * cp, pp.yG.yip += (ip.deltaZ || 0) * cp
    }

    function dp(pp, ip) {
      if (!pp.WG) return ip.preventDefault(), !1
    }
    var ep = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function jp(pp, ip) {
      return !!pp[ep[ip]] || ("AltRight" === ip || "ControlLeft" === ip) && "function" === typeof pp.getModifierState && !0 === pp.getModifierState("AltGraph")
    }

    function kp(pp, ip) {
      for (var cp in pp._modifiersHeldThroughBlur = {}, ep) pp._keyStates[cp] && (pp._modifiersHeldThroughBlur[cp] = !0);
      ip && ip.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (pp) {
          return !0
        }
      }() && (clearTimeout(pp._blurRelease), pp._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var ip in pp._modifiersHeldThroughBlur = {}, pp._keyStates) pp._keyStates[ip] && !/^Mouse\d/.test(ip) && Rp(pp, ip)
      }), 0))
    }

    function mp(pp, ip) {
      var cp = pp._modifiersHeldThroughBlur;
      if (cp && ip.isTrusted && document.hasFocus())
        for (var Op in cp) delete cp[Op], pp._keyStates[Op] && Op !== ip.code && (jp(ip, Op) || Rp(pp, Op))
    }

    function Rp(pp, ip) {
      const cp = {
          code: ip,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        Op = op;
      op = cp;
      try {
        qp(ip, !1, pp, cp)
      } finally {
        op = Op
      }
    }

    function qp(pp, ip, cp, Op) {
      var op = cp._keyBindmap[pp];
      op && (Mp(cp._keyStates[pp], ip) && (cp._keyStates[pp] = ip, op.forEach((pp => {
        (!cp.filterEvents || cp.filterEvents(Op, pp)) && function(pp, ip, cp, Op) {
          var op = ip ? cp.pressCount : cp.releaseCount;
          op[pp] = (op[pp] || 0) + 1;
          var Ip = cp._bindPressCount[pp] || 0;
          (Ip += ip ? 1 : -1) < 0 && (Ip = 0);
          cp._bindPressCount[pp] = Ip;
          var Sp = cp.state[pp];
          if (Mp(Sp, Ip)) {
            cp.state[pp] = Ip > 0;
            var xp = ip ? cp.down : cp.up;
            cp.disabled || xp.emit(pp, Op)
          }
        }(pp, ip, cp, Op)
      }))), "button" in Op || (cp.YG && !Op.defaultPrevented && Op.preventDefault(), cp.stopPropagation && Op.stopPropagation()))
    }

    function Mp(pp, ip) {
      return pp ? !ip : ip
    }
  },
  36869: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Up,
      e: () => wp
    });
    var Op = cp(62),
      op = cp(1476),
      Ip = cp(2004),
      Sp = cp(36828),
      xp = cp(640),
      Lp = cp(1049),
      Yp = cp.n(Lp),
      Dp = cp(1112);
    const Ap = [Pp()];

    function Pp() {
      return {
        source: null,
        direction: null,
        oN: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function Wp(pp) {
      return Ap.find((ip => null !== ip.source && ip.source === pp))
    }

    function yp(pp) {
      clearTimeout(pp.timeout), pp.source = null, pp.direction = null, pp.writtenAngle = null, pp.oN && (pp.oN.style.rotate = "")
    }
    const Up = (0, Op.memo)((function() {
      const [, pp] = (0, Op.useReducer)((pp => pp + 1), 0);
      return (0, op.f)("damagedByOtherPlayer", (ip => {
        let {
          Ec: cp,
          direction: Op
        } = ip;
        const op = cp || "nonDirectional",
          Ip = function(pp) {
            var ip;
            const cp = null !== (ip = Wp(pp)) && void 0 !== ip ? ip : Ap.find((pp => null === pp.source));
            if (cp) return cp;
            const Op = {
              source: null,
              direction: null,
              oN: null,
              timeout: void 0,
              writtenAngle: null
            };
            return Ap.push(Op), Op
          }(op);
        clearTimeout(Ip.timeout), Ip.source = op, Ip.direction = Op, Ip.timeout = setTimeout((() => {
          yp(Ip), pp()
        }), 800), pp()
      })), (0, Ip.b)("kill", (ip => {
        let {
          killer: cp,
          victim: Op
        } = ip;
        const op = cp.local && Wp(Op.id);
        op && (yp(op), pp())
      })), (0, Op.useEffect)((() => {
        const pp = (0, Sp.i)("turnDamageIndicators", wp);
        return () => {
          pp(), Ap.forEach(yp)
        }
      }), []), (0, Dp.jsx)("div", {
        className: "DirectionalDamage",
        children: Ap.map(((pp, ip) => (0, Dp.jsx)("div", {
          ref: ip => {
            pp.oN = ip
          },
          className: Yp()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, xp.G)(pp.direction),
            DamageIndicatorIdle: null === pp.source
          })
        }, ip)))
      })
    }));

    function wp(pp) {
      for (const ip of Ap) {
        if (null === ip.source || (0, xp.G)(ip.direction)) continue;
        const cp = ip.direction - pp;
        cp !== ip.writtenAngle && (ip.writtenAngle = cp, ip.oN.style.rotate = `${cp}rad`)
      }
    }
  },
  36693: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => op,
      f: () => Ip
    });
    let Op = !1;

    function op() {
      return Op
    }

    function Ip(pp) {
      return Op !== pp && (Op = pp, !0)
    }
  },
  34386: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Ip,
      g: () => op
    });
    var Op = cp(25);

    function op(pp, ip) {
      return pp && !ip
    }

    function Ip() {
      return op(Op.c.get("isTouchScreen"), Op.c.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  40871: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      startPadGameplay: () => ep
    });
    cp(40736);
    var Op = cp(40739),
      op = cp(3837),
      Ip = cp(25),
      Sp = cp(39252),
      xp = cp(3774),
      Lp = cp(39278),
      Yp = cp(34),
      Dp = cp(2849),
      Ap = cp(38644),
      Pp = cp(8979),
      Wp = cp(40747);
    const yp = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var Up = cp(40763),
      wp = cp(8952),
      vp = cp(39281);
    const tp = pp => pp.padSneakToggled || !!Ip.c.get("clientEscMenuOptions").crouchIsToggle && pp.crouchToggled,
      Hp = () => {
        const pp = (() => {
          const pp = (0, Pp.e)();
          let ip = yp;
          const cp = new Wp.c;
          let Op = !1,
            op = 0;
          const Ip = () => {
            const cp = performance.now(),
              Ip = 0 === op ? 0 : cp - op;
            if (op = cp, !Op) return pp.discardPending(), null;
            const Sp = (0, Wp.m)(ip, Ip),
              xp = pp.drainLookDelta(),
              Lp = (0, Ap.k)();
            return {
              QE: (Sp.QE + xp.QE) * Lp,
              TE: (Sp.TE + xp.TE) * Lp
            }
          };
          return {
            update: (pp, op, Sp, xp) => {
              pp.camera.Xs !== Ip && (pp.camera.Xs = Ip), Op = !0, ip = (0, Wp.o)(cp, op, Sp, xp, performance.now())
            },
            release: () => {
              Op = !1, ip = yp, cp.reset()
            },
            uninstall: pp => {
              pp.camera.Xs === Ip && (pp.camera.Xs = null)
            }
          }
        })();
        return {
          update: (ip, cp, Op) => {
            pp.update((0, Dp.g)(), ip, cp, Op)
          },
          release: pp.release,
          uninstall: () => {
            const ip = (0, Dp.g)();
            ip && pp.uninstall(ip)
          }
        }
      };
    var dp = cp(40758);
    cp(37907), cp(8869);
    cp(8883).d;
    const ep = () => {
      const pp = (0, dp.d)((() => {
          const pp = {
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
            bodies: () => (0, Sp.e)(),
            look: Hp(),
            move: (ip, cp) => {
              const Op = (0, Dp.g)(),
                op = Op.Yk.wcp();
              if (pp.x = ip.x, pp.y = ip.y, pp.magnitude = ip.magnitude, pp.headingOffset = ip.headingOffset, pp.jumpHeld = ip.jumpHeld, ip.jumpPressed && (pp.jumpPressedSinceTick = !0), pp.running = ip.running, pp.sprintHeld = ip.sprintHeld, cp) {
                const ip = (0, Up.g)({
                  ...cp,
                  descending: Op.Yk.xip(Op.NJ).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!Op.Tu.canCrouch,
                  toggled: tp(op)
                });
                pp.crouchHeld = ip.crouchHeld, op.padSneakToggled = ip.toggled, op.crouchToggled = !1, (0, wp.e)(ip.toggled)
              }
              op.gamepad = pp
            },
            stopMoving: () => {
              var ip;
              Object.assign(pp, {
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
              const cp = null === (ip = (0, Dp.g)()) || void 0 === ip ? void 0 : ip.Yk.wcp();
              (null === cp || void 0 === cp ? void 0 : cp.gamepad) === pp && (cp.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: pp => {
              const ip = (0, Dp.g)(),
                cp = null === ip || void 0 === ip ? void 0 : ip.Yk.wcp();
              "touch" === pp ? ((0, wp.e)(!1), null !== cp && void 0 !== cp && cp.padSneakToggled && (cp.padSneakToggled = !1, cp.isTouchscreen && !cp.gamepad && ip.Yk.Jip(ip.NJ).setCrouching(!!ip.Tu.canCrouch && cp.touchCrouch))) : "gamepad" === pp && cp && (0, wp.e)(tp(cp))
            },
            hasPlayer: () => {
              var pp;
              return !(null === (pp = (0, Dp.g)()) || void 0 === pp || !pp.NJ)
            },
            isPlayerDead: () => {
              var pp;
              const ip = (0, Dp.g)();
              return !1 === (null === (pp = ip.Yk.Ycp(ip.NJ)) || void 0 === pp ? void 0 : pp.isAlive)
            },
            isReplayMode: () => {
              var pp, ip;
              return !(null === (pp = (0, Dp.d)()) || void 0 === pp || null === (ip = pp.client) || void 0 === ip || !ip.isReplayMode())
            },
            isFreeCameraOn: () => {
              var pp, ip, cp;
              return !(null === (pp = (0, Dp.d)()) || void 0 === pp || null === (ip = pp.client) || void 0 === ip || null === (cp = ip.freeCameraController) || void 0 === cp || !cp.isEnabled())
            },
            targetsBlock: () => !!(0, Dp.g)().Rpp,
            selectedSlotEmpty: () => {
              var pp;
              const ip = (0, Dp.g)();
              return !(null !== (pp = ip.Yk.Nip(ip.NJ)) && void 0 !== pp && pp.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const pp = (0, Dp.g)().Tu;
              return !!pp.creative && !!pp.canPickBlocks
            },
            scrollHotbar: pp => {
              Yp.m.GA("ScrollInventorySlot", pp)
            },
            hasFullInventory: () => (0, Lp.d)((0, Dp.g)()),
            hasLobbyTab: () => (0, vp.d)((0, Dp.g)().Tu),
            contextActionInputs: () => {
              var pp, ip, cp, Op;
              const op = (0, Dp.g)();
              return {
                holdingGun: !(null === (pp = op.Yk.Dcp(op.NJ)) || void 0 === pp || null === (ip = pp.qm) || void 0 === ip || !ip.isGun()),
                customButtons: null !== (cp = op.Tu.customButtons) && void 0 !== cp ? cp : null,
                touchscreenActionButton: null !== (Op = op.Tu.touchscreenActionButton) && void 0 !== Op ? Op : null
              }
            },
            pressTouchButton: pp => {
              (0, xp.sendColyMessage)(op.mj, pp)
            }
          }
        })()),
        ip = (0, Op.e)(),
        cp = null,
        Ip = null;
      return () => {
        pp(), ip(), null === cp || void 0 === cp || cp(), null === Ip || void 0 === Ip || Ip()
      }
    }
  },
  36804: (pp, ip, cp) => {
    cp.d(ip, {
      A: () => yp,
      E: () => tp,
      b: () => Ip,
      d: () => Up,
      f: () => wp,
      j: () => xp,
      n: () => Pp,
      q: () => vp,
      u: () => Ap,
      w: () => Hp
    });
    var Op = cp(25),
      op = cp(34);
    const Ip = "clientGameInventoryButtonsChanged",
      Sp = new Map;

    function xp() {
      return [...Sp.values()].sort(((pp, ip) => {
        var cp, Op;
        return (null !== (cp = pp.order) && void 0 !== cp ? cp : 0) - (null !== (Op = ip.order) && void 0 !== Op ? Op : 0)
      }))
    }
    let Lp = null;

    function Yp(pp) {
      Lp = pp
    }
    let Dp = !1;

    function Ap(pp) {
      Dp = !0;
      try {
        pp.onClick()
      } finally {
        Dp = !1
      }
      pp.panel && "clientGame" === Op.c.get("openInGameMenuName") && Yp(pp.id)
    }

    function Pp() {
      return Dp
    }

    function Wp() {
      return xp().filter((pp => pp.panel && !pp.disabled))
    }

    function yp(pp) {
      const ip = Wp(),
        cp = ip.findIndex((pp => pp.id === Lp));
      return !(cp < 0 || ip.length < 2) && (Ap(ip[(cp + pp + ip.length) % ip.length]), !0)
    }

    function Up() {
      return null !== Lp && Wp().length > 1
    }

    function wp() {
      Yp(null)
    }

    function vp() {
      "inventory" !== Op.c.get("openInGameMenuName") && Yp(null)
    }

    function tp() {
      const pp = Lp;
      return Yp(null), pp
    }

    function Hp(pp) {
      return Sp.set(pp.id, pp), op.m.GA(Ip, xp(), !0), () => {
        Sp.get(pp.id) === pp && (Sp.delete(pp.id), op.m.GA(Ip, xp()))
      }
    }
  },
  36799: (pp, ip, cp) => {
    cp.d(ip, {
      A: () => Dp,
      d: () => xp,
      h: () => wp,
      l: () => vp,
      o: () => Pp,
      s: () => Yp,
      t: () => Up,
      x: () => Wp
    });
    var Op = cp(25),
      op = cp(34),
      Ip = cp(1308),
      Sp = cp(36804);
    const xp = "clientGameUiChanged";
    let Lp = null;

    function Yp() {
      return Lp
    }

    function Dp(pp, ip) {
      const cp = {
        content: pp,
        menu: ip
      };
      return Lp = cp, op.m.GA(xp, Lp, !0), () => {
        Lp === cp && (Lp = null, yp = !1, wp(), op.m.GA(xp, null))
      }
    }
    let Ap = null;

    function Pp() {
      return Ap
    }

    function Wp(pp) {
      return Ap = pp, () => {
        Ap === pp && (Ap = null)
      }
    }
    let yp = !1;

    function Up() {
      const pp = Op.c.get("openInGameMenuName");
      "clientGame" !== pp && (yp = "inventory" === pp), (0, Sp.n)() || (0, Sp.f)(), (0, Ip.s)(Ip.c), Op.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function wp() {
      tp(!1)
    }

    function vp() {
      tp(yp)
    }

    function tp(pp) {
      "clientGame" === Op.c.get("openInGameMenuName") && Op.c.set({
        openInGameMenuName: pp ? "inventory" : null
      }), pp || (0, Sp.f)(), yp = !1
    }
  },
  36691: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Lp
    });
    var Op = cp(322),
      op = cp(25),
      Ip = cp(36693),
      Sp = cp(1650),
      xp = cp(2012);

    function Lp(pp, ip) {
      var cp, Lp, Yp;
      if (!op.c.get("isKeydownEnabled") || pp.repeat) return;
      const Dp = pp.code;
      "Escape" === pp.key ? (0, Sp.h)(pp) : null !== (cp = xp.t.OpenSettings) && void 0 !== cp && cp.includes(Dp) ? (0, Sp.q)(pp, Op.n.SETTINGS) : null !== (Lp = xp.t.OpenCharacterCustomization) && void 0 !== Lp && Lp.includes(Dp) ? (0, Ip.c)() || (0, Sp.q)(pp, Op.n.CUSTOMISATION, ip()) : null !== (Yp = xp.t.ShowDebugOverlay) && void 0 !== Yp && Yp.includes(Dp) && op.c.set({
        showDebugOverlay: !op.c.get("showDebugOverlay")
      })
    }
  },
  39169: (pp, ip, cp) => {
    function Op(pp, ip, cp, Op, op) {
      var Ip = {};
      return Object.keys(Op).forEach((function(pp) {
        Ip[pp] = Op[pp]
      })), Ip.enumerable = !!Ip.enumerable, Ip.configurable = !!Ip.configurable, ("value" in Ip || Ip.initializer) && (Ip.writable = !0), Ip = cp.slice().reverse().reduce((function(cp, Op) {
        return Op(pp, ip, cp) || cp
      }), Ip), op && void 0 !== Ip.initializer && (Ip.value = Ip.initializer ? Ip.initializer.call(op) : void 0, Ip.initializer = void 0), void 0 === Ip.initializer && (Object.defineProperty(pp, ip, Ip), Ip = null), Ip
    }
    cp.d(ip, {
      b: () => Op
    })
  },
  39164: (pp, ip, cp) => {
    function Op(pp, ip, cp, Op) {
      cp && Object.defineProperty(pp, ip, {
        enumerable: cp.enumerable,
        configurable: cp.configurable,
        writable: cp.writable,
        value: cp.initializer ? cp.initializer.call(Op) : void 0
      })
    }
    cp.d(ip, {
      c: () => Op
    })
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);