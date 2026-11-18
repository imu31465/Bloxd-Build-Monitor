export const id = 83;
export const ids = [81, 83];
export const modules = {
  37767: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => cb,
      g: () => fy
    });
    var Uy = Wy(3384);
    let hy = null;

    function fy(yb) {
      return null !== hy && yb === hy
    }

    function Zy() {
      this.nUy = !1, this.stopPropagation = !1, this.uUy = !1, this.disabled = !1
    }
    class cb {
      constructor(yb, bb) {
        this.version = "0.7.0";
        var Wy = Object.assign({}, new Zy, bb || {});
        this.element = yb || document, this.nUy = !!Wy.nUy, this.stopPropagation = !!Wy.stopPropagation, this.uUy = !!Wy.uUy, this.disabled = !!Wy.disabled, this.filterEvents = (yb, bb) => !0, this.down = new Uy.EventEmitter, this.up = new Uy.EventEmitter, this.state = {}, this.HUy = {
          dx: 0,
          dy: 0,
          Qcy: 0,
          jPy: 0,
          Dcy: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? oy(this) : document.addEventListener("DOMContentLoaded", (yb => {
          oy(this)
        }), {
          once: !0
        })
      }
      bind(yb) {
        for (var bb = arguments.length, Wy = new Array(bb > 1 ? bb - 1 : 0), Uy = 1; Uy < bb; Uy++) Wy[Uy - 1] = arguments[Uy];
        Wy.forEach((bb => {
          var Wy = this._keyBindmap[bb] || [];
          Wy.includes(yb) || (Wy.push(yb), this._keyBindmap[bb] = Wy)
        })), this.state[yb] = !!this.state[yb], this.pressCount[yb] = this.pressCount[yb] || 0, this.releaseCount[yb] = this.releaseCount[yb] || 0
      }
      unbind(yb) {
        for (var bb in this._keyBindmap) {
          var Wy = this._keyBindmap[bb],
            Uy = Wy.indexOf(yb);
          Uy > -1 && Wy.splice(Uy, 1)
        }
      }
      getBindings() {
        var yb = {};
        for (var bb in this._keyBindmap) {
          this._keyBindmap[bb].forEach((Wy => {
            yb[Wy] = yb[Wy] || [], yb[Wy].push(bb)
          }))
        }
        return yb
      }
      Zb() {
        Py(this.HUy), Py(this.pressCount), Py(this.releaseCount)
      }
    }

    function Py(yb) {
      for (var bb in yb) yb[bb] = 0
    }

    function oy(yb) {
      window.addEventListener("keydown", Ey.bind(null, yb, !0), !1), window.addEventListener("keyup", Ey.bind(null, yb, !1), !1);
      var bb = {
        passive: !0
      };
      yb.element.addEventListener("touchstart", qb.bind(void 0, yb), {
        passive: !1
      }), yb.element.addEventListener("touchend", Sy.bind(void 0, yb), bb), yb.element.addEventListener("mousedown", ly.bind(null, yb, !0), bb), window.document.addEventListener("mouseup", ly.bind(null, yb, !1), bb), yb.element.addEventListener("touchmove", mb.bind(null, yb), bb), yb.element.addEventListener("mousemove", mb.bind(null, yb), bb), window.PointerEvent, yb.element.addEventListener("wheel", Cy.bind(null, yb), bb), yb.element.addEventListener("contextmenu", Ty.bind(null, yb), !1), window.addEventListener("blur", gb.bind(null, yb), !1)
    }
    var By = 0,
      Ky = 0,
      ey = null;

    function qb(yb, bb) {
      bb.preventDefault(), sy(bb)
    }

    function sy(yb) {
      let bb = !1;
      for (let Wy = 0; Wy < yb.touches.length; ++Wy)
        if (yb.touches[Wy].identifier === ey) {
          bb = !0;
          break
        } if (!bb) {
        const bb = yb.changedTouches[0];
        By = bb.clientX, Ky = bb.clientY, ey = bb.identifier
      }
    }

    function Sy(yb, bb) {
      for (var Wy = bb.changedTouches, Uy = 0; Uy < Wy.length; ++Uy) Wy[Uy].identifier === ey && (ey = null)
    }

    function Ey(yb, bb, Wy) {
      try {
        Gy(yb, Wy), bb && Wy.isTrusted && !Wy.repeat && yb._keyStates[Wy.code] && Oy(yb, Wy.code)
      } finally {
        Ry(Wy.code, bb, yb, Wy)
      }
    }

    function ly(yb, bb, Wy) {
      try {
        Gy(yb, Wy)
      } finally {
        ! function(yb, bb, Wy) {
          if ("pointerId" in Wy)
            if (bb) {
              if (null !== yb._touches.currID) return;
              yb._touches.currID = Wy.pointerId
            } else {
              if (yb._touches.currID !== Wy.pointerId) return;
              yb._touches.currID = null
            } var Uy = "button" in Wy ? Wy.button + 1 : 1;
          Ry("Mouse" + Uy, bb, yb, Wy)
        }(yb, bb, Wy)
      }
    }

    function mb(yb, bb) {
      var Wy = bb.movementX || bb.mozMovementX || 0,
        Uy = bb.movementY || bb.mozMovementY || 0;
      if (bb.touches && 0 === (Wy | Uy)) {
        var hy = function(yb) {
          sy(yb);
          for (let bb = 0; bb < yb.changedTouches.length; ++bb)
            if (yb.changedTouches[bb].identifier == ey) {
              const Wy = yb.changedTouches[bb],
                Uy = [Wy.clientX - By, Wy.clientY - Ky];
              return By = Wy.clientX, Ky = Wy.clientY, Uy
            } return console.error(`Did not find touch id ${ey}`), [0, 0]
        }(bb);
        Wy = hy[0], Uy = hy[1]
      }
      yb.HUy.dx += Wy, yb.HUy.dy += Uy
    }

    function Cy(yb, bb) {
      Gy(yb, bb);
      var Wy = 1;
      switch (bb.deltaMode) {
        case 0:
          Wy = 1;
          break;
        case 1:
          Wy = 12;
          break;
        case 2:
          Wy = yb.element.clientHeight || window.innerHeight
      }
      yb.HUy.Qcy += (bb.deltaX || 0) * Wy, yb.HUy.jPy += (bb.deltaY || 0) * Wy, yb.HUy.Dcy += (bb.deltaZ || 0) * Wy
    }

    function Ty(yb, bb) {
      if (!yb.uUy) return bb.preventDefault(), !1
    }
    var Vy = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function Jy(yb, bb) {
      return !!yb[Vy[bb]] || ("AltRight" === bb || "ControlLeft" === bb) && "function" === typeof yb.getModifierState && !0 === yb.getModifierState("AltGraph")
    }

    function gb(yb, bb) {
      for (var Wy in yb._modifiersHeldThroughBlur = {}, Vy) yb._keyStates[Wy] && (yb._modifiersHeldThroughBlur[Wy] = !0);
      bb && bb.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (yb) {
          return !0
        }
      }() && (clearTimeout(yb._blurRelease), yb._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var bb in yb._modifiersHeldThroughBlur = {}, yb._keyStates) yb._keyStates[bb] && !/^Mouse\d/.test(bb) && Oy(yb, bb)
      }), 0))
    }

    function Gy(yb, bb) {
      var Wy = yb._modifiersHeldThroughBlur;
      if (Wy && bb.isTrusted && document.hasFocus())
        for (var Uy in Wy) delete Wy[Uy], yb._keyStates[Uy] && Uy !== bb.code && (Jy(bb, Uy) || Oy(yb, Uy))
    }

    function Oy(yb, bb) {
      const Wy = {
          code: bb,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        Uy = hy;
      hy = Wy;
      try {
        Ry(bb, !1, yb, Wy)
      } finally {
        hy = Uy
      }
    }

    function Ry(yb, bb, Wy, Uy) {
      var hy = Wy._keyBindmap[yb];
      hy && (vb(Wy._keyStates[yb], bb) && (Wy._keyStates[yb] = bb, hy.forEach((yb => {
        (!Wy.filterEvents || Wy.filterEvents(Uy, yb)) && function(yb, bb, Wy, Uy) {
          var hy = bb ? Wy.pressCount : Wy.releaseCount;
          hy[yb] = (hy[yb] || 0) + 1;
          var fy = Wy._bindPressCount[yb] || 0;
          (fy += bb ? 1 : -1) < 0 && (fy = 0);
          Wy._bindPressCount[yb] = fy;
          var Zy = Wy.state[yb];
          if (vb(Zy, fy)) {
            Wy.state[yb] = fy > 0;
            var cb = bb ? Wy.down : Wy.up;
            Wy.disabled || cb.emit(yb, Uy)
          }
        }(yb, bb, Wy, Uy)
      }))), "button" in Uy || (Wy.nUy && !Uy.defaultPrevented && Uy.preventDefault(), Wy.stopPropagation && Uy.stopPropagation()))
    }

    function vb(yb, bb) {
      return yb ? !bb : bb
    }
  },
  35471: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => qb,
      h: () => sy
    });
    var Uy = Wy(55),
      hy = Wy(2332),
      fy = Wy(1268),
      Zy = Wy(1612),
      cb = Wy(35406),
      Py = Wy(547),
      oy = Wy(898),
      By = Wy.n(oy),
      Ky = Wy(952);
    const ey = {},
      qb = (0, Uy.memo)((function() {
        const yb = (0, hy.e)();
        return (0, fy.i)("damagedByOtherPlayer", (bb => {
          let {
            xyy: Wy,
            direction: Uy
          } = bb;
          const hy = Wy || "nonDirectional";
          if (ey[hy]) {
            const bb = ey[hy];
            clearTimeout(bb.timeout), bb.direction = Uy, bb.timeout = setTimeout((() => {
              delete ey[hy], yb()
            }), 800)
          } else ey[hy] = {
            direction: Uy,
            rUy: null,
            timeout: setTimeout((() => {
              delete ey[hy], yb()
            }), 800)
          };
          yb()
        })), (0, Zy.e)("kill", (bb => {
          let {
            killer: Wy,
            victim: Uy
          } = bb;
          const hy = Uy.id;
          Wy.local && hy && hy in ey && (clearTimeout(ey[hy].timeout), delete ey[hy], yb())
        })), (0, Uy.useEffect)((() => {
          const yb = (0, cb.d)("turnDamageIndicators", sy);
          return () => {
            yb();
            for (const yb in ey) clearTimeout(ey[yb].timeout), delete ey[yb]
          }
        }), []), (0, Ky.jsx)("div", {
          className: "DirectionalDamage",
          children: Object.entries(ey).map((yb => {
            let [bb, Wy] = yb;
            const Uy = (0, Py.D)(Wy.direction);
            return (0, Ky.jsx)("div", {
              ref: yb => {
                ey[bb] && (ey[bb].rUy = yb)
              },
              className: By()("DamageIndicator", {
                DamageIndicatorFullCircle: Uy
              })
            }, bb)
          }))
        })
      }));

    function sy(yb) {
      for (const bb in ey) {
        const {
          direction: Wy,
          rUy: Uy
        } = ey[bb];
        if ((0, Py.D)(Wy)) continue;
        const hy = Wy - yb;
        Uy.style.rotate = `${hy}rad`
      }
    }
  },
  35362: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Py,
      d: () => oy
    });
    const Uy = .1,
      hy = .35,
      fy = .85,
      Zy = .06,
      cb = .22;

    function Py(yb) {
      if (yb < Uy) return 0;
      if (yb < hy) {
        const bb = (yb - Uy) / (hy - Uy);
        return Zy + (cb - Zy) * bb * bb
      }
      return yb < fy ? cb + (1 - cb) * (yb - hy) / (fy - hy) : 1
    }

    function oy(yb) {
      return yb.touchEdgeGuard && yb.touchSpeedCurve
    }
  },
  35397: (yb, bb, Wy) => {
    function Uy(yb, bb, Wy, Uy) {
      return !(Wy && !yb.aimable) && (!bb || yb.gun && "head" !== Uy)
    }

    function hy(yb) {
      return Math.max(.1 * yb, 1)
    }
    Wy.d(bb, {
      d: () => hy,
      g: () => Uy
    })
  },
  35406: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => cb,
      d: () => Zy
    });
    let Uy = null;
    const hy = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      fy = {
        crosshairAccuracy: yb => {
          const bb = hy.crosshairAccuracy.at(-1);
          bb ? bb.hook(yb) : Uy = yb
        },
        turnDamageIndicators: yb => {
          var bb;
          null === (bb = hy.turnDamageIndicators.at(-1)) || void 0 === bb || bb.hook(yb)
        }
      };

    function Zy(yb, bb) {
      const Wy = {
          hook: bb
        },
        Zy = hy[yb];
      if (Zy.push(Wy), "crosshairAccuracy" === yb && null !== Uy) {
        const yb = Uy;
        Uy = null, fy.crosshairAccuracy(yb)
      }
      return () => {
        const yb = Zy.indexOf(Wy); - 1 !== yb && Zy.splice(yb, 1)
      }
    }

    function cb() {
      return fy
    }
  },
  35411: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => fy,
      f: () => hy
    });
    var Uy = Wy(19);

    function hy(yb, bb) {
      return yb && !bb
    }

    function fy() {
      return hy(Uy.d.get("isTouchScreen"), Uy.d.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  39182: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      startPadGameplay: () => Ty
    });
    Wy(39051);
    var Uy = Wy(39060),
      hy = Wy(3050),
      fy = Wy(19),
      Zy = Wy(37750),
      cb = Wy(2977),
      Py = Wy(37759),
      oy = Wy(23),
      By = Wy(2234),
      Ky = Wy(37123),
      ey = Wy(7993),
      qb = Wy(39068);
    const sy = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var Sy = Wy(39090),
      Ey = Wy(7968);
    const ly = yb => yb.padSneakToggled || !!fy.d.get("clientEscMenuOptions").crouchIsToggle && yb.crouchToggled,
      mb = () => {
        const yb = (() => {
          const yb = (0, ey.b)();
          let bb = sy;
          const Wy = new qb.b;
          let Uy = !1,
            hy = 0;
          const fy = () => {
            const Wy = performance.now(),
              fy = 0 === hy ? 0 : Wy - hy;
            if (hy = Wy, !Uy) return yb.discardPending(), null;
            const Zy = (0, qb.i)(bb, fy),
              cb = yb.drainLookDelta(),
              Py = (0, Ky.f)();
            return {
              aWy: (Zy.aWy + cb.aWy) * Py,
              Fby: (Zy.Fby + cb.Fby) * Py
            }
          };
          return {
            update: (yb, hy, Zy, cb) => {
              yb.camera.lhy !== fy && (yb.camera.lhy = fy), Uy = !0, bb = (0, qb.k)(Wy, hy, Zy, cb, performance.now())
            },
            release: () => {
              Uy = !1, bb = sy, Wy.reset()
            },
            uninstall: yb => {
              yb.camera.lhy === fy && (yb.camera.lhy = null)
            }
          }
        })();
        return {
          update: (bb, Wy, Uy) => {
            yb.update((0, By.g)(), bb, Wy, Uy)
          },
          release: yb.release,
          uninstall: () => {
            const bb = (0, By.g)();
            bb && yb.uninstall(bb)
          }
        }
      };
    var Cy = Wy(39081);
    Wy(36313), Wy(7846);
    Wy(7864).d;
    const Ty = () => {
      const yb = (0, Cy.e)((() => {
          const yb = {
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
            bodies: () => (0, Zy.e)(),
            look: mb(),
            move: (bb, Wy) => {
              const Uy = (0, By.g)(),
                hy = Uy.Km.HPy();
              if (yb.x = bb.x, yb.y = bb.y, yb.magnitude = bb.magnitude, yb.headingOffset = bb.headingOffset, yb.jumpHeld = bb.jumpHeld, bb.jumpPressed && (yb.jumpPressedSinceTick = !0), yb.running = bb.running, yb.sprintHeld = bb.sprintHeld, Wy) {
                const bb = (0, Sy.i)({
                  ...Wy,
                  descending: Uy.Km.aPy(Uy.eWy).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!Uy.bC.canCrouch,
                  toggled: ly(hy)
                });
                yb.crouchHeld = bb.crouchHeld, hy.padSneakToggled = bb.toggled, hy.crouchToggled = !1, (0, Ey.e)(bb.toggled)
              }
              hy.gamepad = yb
            },
            stopMoving: () => {
              var bb;
              Object.assign(yb, {
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
              const Wy = null === (bb = (0, By.g)()) || void 0 === bb ? void 0 : bb.Km.HPy();
              (null === Wy || void 0 === Wy ? void 0 : Wy.gamepad) === yb && (Wy.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: yb => {
              const bb = (0, By.g)(),
                Wy = null === bb || void 0 === bb ? void 0 : bb.Km.HPy();
              "touch" === yb ? ((0, Ey.e)(!1), null !== Wy && void 0 !== Wy && Wy.padSneakToggled && (Wy.padSneakToggled = !1, Wy.isTouchscreen && !Wy.gamepad && bb.Km.coy(bb.eWy).setCrouching(!!bb.bC.canCrouch && Wy.touchCrouch))) : "gamepad" === yb && Wy && (0, Ey.e)(ly(Wy))
            },
            hasPlayer: () => {
              var yb;
              return !(null === (yb = (0, By.g)()) || void 0 === yb || !yb.eWy)
            },
            isPlayerDead: () => {
              var yb;
              const bb = (0, By.g)();
              return !1 === (null === (yb = bb.Km.voy(bb.eWy)) || void 0 === yb ? void 0 : yb.isAlive)
            },
            isReplayMode: () => {
              var yb, bb;
              return !(null === (yb = (0, By.e)()) || void 0 === yb || null === (bb = yb.client) || void 0 === bb || !bb.isReplayMode())
            },
            isFreeCameraOn: () => {
              var yb, bb, Wy;
              return !(null === (yb = (0, By.e)()) || void 0 === yb || null === (bb = yb.client) || void 0 === bb || null === (Wy = bb.freeCameraController) || void 0 === Wy || !Wy.isEnabled())
            },
            targetsBlock: () => !!(0, By.g)().Kcy,
            selectedSlotEmpty: () => {
              var yb;
              const bb = (0, By.g)();
              return !(null !== (yb = bb.Km.oPy(bb.eWy)) && void 0 !== yb && yb.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const yb = (0, By.g)().bC;
              return !!yb.creative && !!yb.canPickBlocks
            },
            scrollHotbar: yb => {
              oy.g.EZ("ScrollInventorySlot", yb)
            },
            hasFullInventory: () => (0, Py.d)((0, By.g)()),
            hasLobbyLeaderboard: () => !!(0, By.g)().bC.lobbyLeaderboardInfo,
            contextActionInputs: () => {
              var yb, bb, Wy, Uy;
              const hy = (0, By.g)();
              return {
                holdingGun: !(null === (yb = hy.Km.ioy(hy.eWy)) || void 0 === yb || null === (bb = yb.OJ) || void 0 === bb || !bb.isGun()),
                customButtons: null !== (Wy = hy.bC.customButtons) && void 0 !== Wy ? Wy : null,
                touchscreenActionButton: null !== (Uy = hy.bC.touchscreenActionButton) && void 0 !== Uy ? Uy : null
              }
            },
            pressTouchButton: yb => {
              (0, cb.sendColyMessage)(hy.Oj, yb)
            }
          }
        })()),
        bb = (0, Uy.d)(),
        Wy = null,
        fy = null;
      return () => {
        yb(), bb(), null === Wy || void 0 === Wy || Wy(), null === fy || void 0 === fy || fy()
      }
    }
  },
  35383: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => fy,
      e: () => Sy,
      g: () => Ey,
      j: () => cb,
      k: () => ey,
      l: () => ly,
      p: () => Ky,
      s: () => Cy,
      t: () => sy,
      w: () => mb
    });
    var Uy = Wy(19),
      hy = Wy(23);
    const fy = "clientGameInventoryButtonsChanged",
      Zy = new Map;

    function cb() {
      return [...Zy.values()].sort(((yb, bb) => {
        var Wy, Uy;
        return (null !== (Wy = yb.order) && void 0 !== Wy ? Wy : 0) - (null !== (Uy = bb.order) && void 0 !== Uy ? Uy : 0)
      }))
    }
    let Py = null;

    function oy(yb) {
      Py = yb
    }
    let By = !1;

    function Ky(yb) {
      By = !0;
      try {
        yb.onClick()
      } finally {
        By = !1
      }
      yb.panel && "clientGame" === Uy.d.get("openInGameMenuName") && oy(yb.id)
    }

    function ey() {
      return By
    }

    function qb() {
      return cb().filter((yb => yb.panel && !yb.disabled))
    }

    function sy(yb) {
      const bb = qb(),
        Wy = bb.findIndex((yb => yb.id === Py));
      return !(Wy < 0 || bb.length < 2) && (Ky(bb[(Wy + yb + bb.length) % bb.length]), !0)
    }

    function Sy() {
      return null !== Py && qb().length > 1
    }

    function Ey() {
      oy(null)
    }

    function ly() {
      "inventory" !== Uy.d.get("openInGameMenuName") && oy(null)
    }

    function mb() {
      const yb = Py;
      return oy(null), yb
    }

    function Cy(yb) {
      return Zy.set(yb.id, yb), hy.g.EZ(fy, cb(), !0), () => {
        Zy.get(yb.id) === yb && (Zy.delete(yb.id), hy.g.EZ(fy, cb()))
      }
    }
  },
  35379: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => cb,
      h: () => Ey,
      k: () => ly,
      o: () => ey,
      s: () => oy,
      t: () => Sy,
      v: () => qb,
      z: () => By
    });
    var Uy = Wy(19),
      hy = Wy(23),
      fy = Wy(1145),
      Zy = Wy(35383);
    const cb = "clientGameUiChanged";
    let Py = null;

    function oy() {
      return Py
    }

    function By(yb, bb) {
      const Wy = {
        content: yb,
        menu: bb
      };
      return Py = Wy, hy.g.EZ(cb, Py, !0), () => {
        Py === Wy && (Py = null, sy = !1, Ey(), hy.g.EZ(cb, null))
      }
    }
    let Ky = null;

    function ey() {
      return Ky
    }

    function qb(yb) {
      return Ky = yb, () => {
        Ky === yb && (Ky = null)
      }
    }
    let sy = !1;

    function Sy() {
      const yb = Uy.d.get("openInGameMenuName");
      "clientGame" !== yb && (sy = "inventory" === yb), (0, Zy.k)() || (0, Zy.g)(), (0, fy.h)("InGameMenu"), Uy.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Ey() {
      mb(!1)
    }

    function ly() {
      mb(sy)
    }

    function mb(yb) {
      "clientGame" === Uy.d.get("openInGameMenuName") && Uy.d.set({
        openInGameMenuName: yb ? "inventory" : null
      }), yb || (0, Zy.g)(), sy = !1
    }
  },
  35277: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Py
    });
    var Uy = Wy(248),
      hy = Wy(19),
      fy = Wy(35279),
      Zy = Wy(1458),
      cb = Wy(1620);

    function Py(yb, bb) {
      var Wy, Py, oy;
      if (!hy.d.get("isKeydownEnabled") || yb.repeat) return;
      const By = yb.code;
      "Escape" === yb.key ? (0, Zy.i)(yb) : null !== (Wy = cb.w.OpenSettings) && void 0 !== Wy && Wy.includes(By) ? (0, Zy.r)(yb, Uy.o.SETTINGS) : null !== (Py = cb.w.OpenCharacterCustomization) && void 0 !== Py && Py.includes(By) ? (0, fy.e)() || (0, Zy.r)(yb, Uy.o.CUSTOMISATION, bb()) : null !== (oy = cb.w.ShowDebugOverlay) && void 0 !== oy && oy.includes(By) && hy.d.set({
        showDebugOverlay: !hy.d.get("showDebugOverlay")
      })
    }
  },
  4068: (yb, bb, Wy) => {
    Wy.d(bb, {
      Howl: () => Uy.Howl,
      d: () => Uy.Howler
    });
    var Uy = Wy(4072);
    Uy.Howler._mobileUnloaded = !0
  },
  35269: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Ey,
      g: () => ly
    });
    var Uy = Wy(865),
      hy = Wy(552),
      fy = Wy(258),
      Zy = Wy(873),
      cb = Wy(562),
      Py = Wy(3725),
      oy = Wy(94),
      By = Wy(139),
      Ky = Wy(1496),
      ey = Wy(105),
      qb = Wy(35272),
      sy = Wy(33),
      Sy = Wy(942);

    function Ey() {
      var yb, bb;
      return [...null !== (yb = navigator.languages) && void 0 !== yb ? yb : [null !== (bb = navigator.language) && void 0 !== bb ? bb : "none"], "En-GB"]
    }

    function ly(yb, bb, Wy, ly, mb) {
      const Cy = (0, Uy.p)(bb) ? (0, Uy.v)(bb) : null,
        Ty = {
          cookies: (0, Ky.getAllCookiesForGameNameWithVariation)(bb),
          isMobile: (0, oy.isMobile)(),
          isUsingCustomGameTexturePack: null !== Cy && mb(Cy),
          generalCookies: {
            joinDiscord: !!sy.e.getItem("DiscordPressed"),
            newGo: Py.c,
            ...yb.getMetricsCookies(),
            trafficCode: ly,
            compliance: oy.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, oy.getBrowserName)(),
            version: (0, oy.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, oy.getPlatformType)(),
            deviceType: (0, ey.b)()
          },
          isLoggedIn: yb.isLoggedIn(),
          lobbyName: Wy,
          languages: Ey(),
          version: hy.b,
          siteUsed: By.u,
          subsiteUsed: By.B,
          playSessionId: (0, qb.l)(bb),
          visitSessionId: (0, Sy.d)(),
          clientReason: cb.h.reason
        };
      return null !== Cy && (0, fy.yc)(Cy) ? (Ty.lobbyName = (0, Uy.l)(Cy, (0, Uy.r)(bb), Wy), {
        roomName: `classic_${Zy.e}`,
        joinOptions: Ty
      }) : {
        roomName: bb,
        joinOptions: Ty
      }
    }
  },
  35527: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Zy,
      e: () => hy,
      f: () => Uy
    });

    function Uy(yb) {
      return yb.replace(/[_\-\s]*\d+$/, "") || yb
    }

    function hy(yb, bb, Wy) {
      return Wy <= 0 ? 0 : yb * Wy / Math.max(bb, Wy)
    }

    function fy(yb, bb) {
      const Wy = yb.getDurationMs();
      return Wy > 0 ? yb.loudness * Math.max(0, 1 - (bb - yb.startMs) / Wy) : 0
    }
    class Zy {
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = yb, this.maxPerGroup = bb, this.voices = []
      }
      admit(yb) {
        if (this.voices = this.voices.filter((yb => yb.isAlive())), null !== yb.group) {
          const bb = this.voices.filter((bb => bb.group === yb.group));
          if (bb.length >= this.maxPerGroup && !this.dropLeastWorth(bb, yb)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, yb)) && (this.voices.push(yb), !0)
      }
      dropLeastWorth(yb, bb) {
        let Wy = null,
          Uy = 1 / 0;
        for (const hy of yb) {
          if (!hy.canStop()) continue;
          const yb = fy(hy, bb.startMs);
          yb < Uy && (Wy = hy, Uy = yb)
        }
        return !(!Wy || bb.loudness < Uy) && (this.voices.splice(this.voices.indexOf(Wy), 1), Wy.stop(), !0)
      }
    }
  },
  35540: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => fy,
      f: () => Zy,
      j: () => Uy
    });
    class Uy {
      constructor(yb) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = yb
      }
      setMultiplierType(yb, bb) {
        var Wy;
        this.multipliers[yb] = bb, null === (Wy = this._onUpdate) || void 0 === Wy || Wy.call(this)
      }
      removeMultiplier(yb) {
        var bb;
        delete this.multipliers[yb], null === (bb = this._onUpdate) || void 0 === bb || bb.call(this)
      }
      getMultiplierType(yb) {
        return this.multipliers[yb]
      }
      getTotalMultipliedVal() {
        let yb = 1;
        for (const bb in this.multipliers) yb *= this.multipliers[bb];
        return yb
      }
    }
    class hy {
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = yb
      }
      setBooleanType(yb, bb) {
        const Wy = this._getTotalBooleanVal();
        this.booleans[yb] = !!bb;
        const Uy = this.getTotalBooleanVal();
        var hy;
        Uy !== Wy && (null === (hy = this._onUpdate) || void 0 === hy || hy.call(this, Uy, this.booleans));
        return Uy
      }
      removeBoolean(yb) {
        const bb = this._getTotalBooleanVal();
        delete this.booleans[yb];
        const Wy = this._getTotalBooleanVal();
        var Uy;
        null !== Wy && Wy !== bb && (null === (Uy = this._onUpdate) || void 0 === Uy || Uy.call(this, Wy, this.booleans));
        return null !== Wy && void 0 !== Wy && Wy
      }
      getBooleanType(yb) {
        return this.booleans[yb]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var yb;
        null === (yb = this._onUpdate) || void 0 === yb || yb.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class fy extends hy {
      getTotalBooleanVal() {
        const yb = this._getTotalBooleanVal();
        if (null === yb) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return yb
      }
      _getTotalBooleanVal() {
        let yb = !1,
          bb = !0;
        for (const Wy in this.booleans) yb = !0, bb &&= this.booleans[Wy];
        return yb ? bb : null
      }
    }
    class Zy extends hy {
      getTotalBooleanVal() {
        const yb = this._getTotalBooleanVal();
        if (null === yb) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return yb
      }
      _getTotalBooleanVal() {
        let yb = !1,
          bb = !1;
        for (const Wy in this.booleans) yb = !0, bb ||= this.booleans[Wy];
        return yb ? bb : null
      }
    }
  },
  35533: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => fy,
      e: () => Uy,
      g: () => hy
    });
    const Uy = 15,
      hy = 3,
      fy = 30
  },
  37711: (yb, bb, Wy) => {
    function Uy(yb, bb, Wy, Uy, hy) {
      var fy = {};
      return Object.keys(Uy).forEach((function(yb) {
        fy[yb] = Uy[yb]
      })), fy.enumerable = !!fy.enumerable, fy.configurable = !!fy.configurable, ("value" in fy || fy.initializer) && (fy.writable = !0), fy = Wy.slice().reverse().reduce((function(Wy, Uy) {
        return Uy(yb, bb, Wy) || Wy
      }), fy), hy && void 0 !== fy.initializer && (fy.value = fy.initializer ? fy.initializer.call(hy) : void 0, fy.initializer = void 0), void 0 === fy.initializer && (Object.defineProperty(yb, bb, fy), fy = null), fy
    }
    Wy.d(bb, {
      e: () => Uy
    })
  },
  37709: (yb, bb, Wy) => {
    function Uy(yb, bb, Wy, Uy) {
      Wy && Object.defineProperty(yb, bb, {
        enumerable: Wy.enumerable,
        configurable: Wy.configurable,
        writable: Wy.writable,
        value: Wy.initializer ? Wy.initializer.call(Uy) : void 0
      })
    }
    Wy.d(bb, {
      e: () => Uy
    })
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);