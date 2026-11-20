export const id = 188;
export const ids = [188];
export const modules = {
  38521: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => oz,
      d: () => Xz
    });
    var Fz = sz(3786);
    let Wz = null;

    function Xz(zz) {
      return null !== Wz && zz === Wz
    }

    function Oz() {
      this.FQ = !1, this.stopPropagation = !1, this.EQ = !1, this.disabled = !1
    }
    class oz {
      constructor(zz, tz) {
        this.version = "0.7.0";
        var sz = Object.assign({}, new Oz, tz || {});
        this.element = zz || document, this.FQ = !!sz.FQ, this.stopPropagation = !!sz.stopPropagation, this.EQ = !!sz.EQ, this.disabled = !!sz.disabled, this.filterEvents = (zz, tz) => !0, this.down = new Fz.EventEmitter, this.up = new Fz.EventEmitter, this.state = {}, this.Fk = {
          dx: 0,
          dy: 0,
          Gzz: 0,
          Tzz: 0,
          czz: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? Uz(this) : document.addEventListener("DOMContentLoaded", (zz => {
          Uz(this)
        }), {
          once: !0
        })
      }
      bind(zz) {
        for (var tz = arguments.length, sz = new Array(tz > 1 ? tz - 1 : 0), Fz = 1; Fz < tz; Fz++) sz[Fz - 1] = arguments[Fz];
        sz.forEach((tz => {
          var sz = this._keyBindmap[tz] || [];
          sz.includes(zz) || (sz.push(zz), this._keyBindmap[tz] = sz)
        })), this.state[zz] = !!this.state[zz], this.pressCount[zz] = this.pressCount[zz] || 0, this.releaseCount[zz] = this.releaseCount[zz] || 0
      }
      unbind(zz) {
        for (var tz in this._keyBindmap) {
          var sz = this._keyBindmap[tz],
            Fz = sz.indexOf(zz);
          Fz > -1 && sz.splice(Fz, 1)
        }
      }
      getBindings() {
        var zz = {};
        for (var tz in this._keyBindmap) {
          this._keyBindmap[tz].forEach((sz => {
            zz[sz] = zz[sz] || [], zz[sz].push(tz)
          }))
        }
        return zz
      }
      wN() {
        vz(this.Fk), vz(this.pressCount), vz(this.releaseCount)
      }
    }

    function vz(zz) {
      for (var tz in zz) zz[tz] = 0
    }

    function Uz(zz) {
      window.addEventListener("keydown", gz.bind(null, zz, !0), !1), window.addEventListener("keyup", gz.bind(null, zz, !1), !1);
      var tz = {
        passive: !0
      };
      zz.element.addEventListener("touchstart", bz.bind(void 0, zz), {
        passive: !1
      }), zz.element.addEventListener("touchend", Dz.bind(void 0, zz), tz), zz.element.addEventListener("mousedown", Hz.bind(null, zz, !0), tz), window.document.addEventListener("mouseup", Hz.bind(null, zz, !1), tz), zz.element.addEventListener("touchmove", Bz.bind(null, zz), tz), zz.element.addEventListener("mousemove", Bz.bind(null, zz), tz), window.PointerEvent, zz.element.addEventListener("wheel", Pz.bind(null, zz), tz), zz.element.addEventListener("contextmenu", rz.bind(null, zz), !1), window.addEventListener("blur", mz.bind(null, zz), !1)
    }
    var Kz = 0,
      uz = 0,
      Nz = null;

    function bz(zz, tz) {
      tz.preventDefault(), wz(tz)
    }

    function wz(zz) {
      let tz = !1;
      for (let sz = 0; sz < zz.touches.length; ++sz)
        if (zz.touches[sz].identifier === Nz) {
          tz = !0;
          break
        } if (!tz) {
        const tz = zz.changedTouches[0];
        Kz = tz.clientX, uz = tz.clientY, Nz = tz.identifier
      }
    }

    function Dz(zz, tz) {
      for (var sz = tz.changedTouches, Fz = 0; Fz < sz.length; ++Fz) sz[Fz].identifier === Nz && (Nz = null)
    }

    function gz(zz, tz, sz) {
      try {
        Jz(zz, sz), tz && sz.isTrusted && !sz.repeat && zz._keyStates[sz.code] && Iz(zz, sz.code)
      } finally {
        Cz(sz.code, tz, zz, sz)
      }
    }

    function Hz(zz, tz, sz) {
      try {
        Jz(zz, sz)
      } finally {
        ! function(zz, tz, sz) {
          if ("pointerId" in sz)
            if (tz) {
              if (null !== zz._touches.currID) return;
              zz._touches.currID = sz.pointerId
            } else {
              if (zz._touches.currID !== sz.pointerId) return;
              zz._touches.currID = null
            } var Fz = "button" in sz ? sz.button + 1 : 1;
          Cz("Mouse" + Fz, tz, zz, sz)
        }(zz, tz, sz)
      }
    }

    function Bz(zz, tz) {
      var sz = tz.movementX || tz.mozMovementX || 0,
        Fz = tz.movementY || tz.mozMovementY || 0;
      if (tz.touches && 0 === (sz | Fz)) {
        var Wz = function(zz) {
          wz(zz);
          for (let tz = 0; tz < zz.changedTouches.length; ++tz)
            if (zz.changedTouches[tz].identifier == Nz) {
              const sz = zz.changedTouches[tz],
                Fz = [sz.clientX - Kz, sz.clientY - uz];
              return Kz = sz.clientX, uz = sz.clientY, Fz
            } return console.error(`Did not find touch id ${Nz}`), [0, 0]
        }(tz);
        sz = Wz[0], Fz = Wz[1]
      }
      zz.Fk.dx += sz, zz.Fk.dy += Fz
    }

    function Pz(zz, tz) {
      Jz(zz, tz);
      var sz = 1;
      switch (tz.deltaMode) {
        case 0:
          sz = 1;
          break;
        case 1:
          sz = 12;
          break;
        case 2:
          sz = zz.element.clientHeight || window.innerHeight
      }
      zz.Fk.Gzz += (tz.deltaX || 0) * sz, zz.Fk.Tzz += (tz.deltaY || 0) * sz, zz.Fk.czz += (tz.deltaZ || 0) * sz
    }

    function rz(zz, tz) {
      if (!zz.EQ) return tz.preventDefault(), !1
    }
    var Yz = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function xz(zz, tz) {
      return !!zz[Yz[tz]] || ("AltRight" === tz || "ControlLeft" === tz) && "function" === typeof zz.getModifierState && !0 === zz.getModifierState("AltGraph")
    }

    function mz(zz, tz) {
      for (var sz in zz._modifiersHeldThroughBlur = {}, Yz) zz._keyStates[sz] && (zz._modifiersHeldThroughBlur[sz] = !0);
      tz && tz.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (zz) {
          return !0
        }
      }() && (clearTimeout(zz._blurRelease), zz._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var tz in zz._modifiersHeldThroughBlur = {}, zz._keyStates) zz._keyStates[tz] && !/^Mouse\d/.test(tz) && Iz(zz, tz)
      }), 0))
    }

    function Jz(zz, tz) {
      var sz = zz._modifiersHeldThroughBlur;
      if (sz && tz.isTrusted && document.hasFocus())
        for (var Fz in sz) delete sz[Fz], zz._keyStates[Fz] && Fz !== tz.code && (xz(tz, Fz) || Iz(zz, Fz))
    }

    function Iz(zz, tz) {
      const sz = {
          code: tz,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        Fz = Wz;
      Wz = sz;
      try {
        Cz(tz, !1, zz, sz)
      } finally {
        Wz = Fz
      }
    }

    function Cz(zz, tz, sz, Fz) {
      var Wz = sz._keyBindmap[zz];
      Wz && (ez(sz._keyStates[zz], tz) && (sz._keyStates[zz] = tz, Wz.forEach((zz => {
        (!sz.filterEvents || sz.filterEvents(Fz, zz)) && function(zz, tz, sz, Fz) {
          var Wz = tz ? sz.pressCount : sz.releaseCount;
          Wz[zz] = (Wz[zz] || 0) + 1;
          var Xz = sz._bindPressCount[zz] || 0;
          (Xz += tz ? 1 : -1) < 0 && (Xz = 0);
          sz._bindPressCount[zz] = Xz;
          var Oz = sz.state[zz];
          if (ez(Oz, Xz)) {
            sz.state[zz] = Xz > 0;
            var oz = tz ? sz.down : sz.up;
            sz.disabled || oz.emit(zz, Fz)
          }
        }(zz, tz, sz, Fz)
      }))), "button" in Fz || (sz.FQ && !Fz.defaultPrevented && Fz.preventDefault(), sz.stopPropagation && Fz.stopPropagation()))
    }

    function ez(zz, tz) {
      return zz ? !tz : tz
    }
  },
  36161: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => bz,
      f: () => wz
    });
    var Fz = sz(65),
      Wz = sz(2735),
      Xz = sz(1416),
      Oz = sz(1901),
      oz = sz(36112),
      vz = sz(580),
      Uz = sz(1020),
      Kz = sz.n(Uz),
      uz = sz(1087);
    const Nz = {},
      bz = (0, Fz.memo)((function() {
        const zz = (0, Wz.b)();
        return (0, Xz.g)("damagedByOtherPlayer", (tz => {
          let {
            PF: sz,
            direction: Fz
          } = tz;
          const Wz = sz || "nonDirectional";
          if (Nz[Wz]) {
            const tz = Nz[Wz];
            clearTimeout(tz.timeout), tz.direction = Fz, tz.timeout = setTimeout((() => {
              delete Nz[Wz], zz()
            }), 800)
          } else Nz[Wz] = {
            direction: Fz,
            iZ: null,
            timeout: setTimeout((() => {
              delete Nz[Wz], zz()
            }), 800)
          };
          zz()
        })), (0, Oz.d)("kill", (tz => {
          let {
            killer: sz,
            victim: Fz
          } = tz;
          const Wz = Fz.id;
          sz.local && Wz && Wz in Nz && (clearTimeout(Nz[Wz].timeout), delete Nz[Wz], zz())
        })), (0, Fz.useEffect)((() => {
          const zz = (0, oz.i)("turnDamageIndicators", wz);
          return () => {
            zz();
            for (const zz in Nz) clearTimeout(Nz[zz].timeout), delete Nz[zz]
          }
        }), []), (0, uz.jsx)("div", {
          className: "DirectionalDamage",
          children: Object.entries(Nz).map((zz => {
            let [tz, sz] = zz;
            const Fz = (0, vz.G)(sz.direction);
            return (0, uz.jsx)("div", {
              ref: zz => {
                Nz[tz] && (Nz[tz].iZ = zz)
              },
              className: Kz()("DamageIndicator", {
                DamageIndicatorFullCircle: Fz
              })
            }, tz)
          }))
        })
      }));

    function wz(zz) {
      for (const tz in Nz) {
        const {
          direction: sz,
          iZ: Fz
        } = Nz[tz];
        if ((0, vz.G)(sz)) continue;
        const Wz = sz - zz;
        Fz.style.rotate = `${Wz}rad`
      }
    }
  },
  35983: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Wz,
      i: () => Xz
    });
    let Fz = !1;

    function Wz() {
      return Fz
    }

    function Xz(zz) {
      return Fz !== zz && (Fz = zz, !0)
    }
  },
  8779: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Xz,
      i: () => Wz
    });
    var Fz = sz(30);

    function Wz(zz, tz) {
      return zz && !tz
    }

    function Xz() {
      return Wz(Fz.b.get("isTouchScreen"), Fz.b.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  39800: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      startPadGameplay: () => rz
    });
    sz(39683);
    var Fz = sz(39686),
      Wz = sz(3433),
      Xz = sz(30),
      Oz = sz(38485),
      oz = sz(3348),
      vz = sz(38505),
      Uz = sz(34),
      Kz = sz(2555),
      uz = sz(37853),
      Nz = sz(8351),
      bz = sz(39688);
    const wz = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var Dz = sz(39707),
      gz = sz(8325);
    const Hz = zz => zz.padSneakToggled || !!Xz.b.get("clientEscMenuOptions").crouchIsToggle && zz.crouchToggled,
      Bz = () => {
        const zz = (() => {
          const zz = (0, Nz.b)();
          let tz = wz;
          const sz = new bz.d;
          let Fz = !1,
            Wz = 0;
          const Xz = () => {
            const sz = performance.now(),
              Xz = 0 === Wz ? 0 : sz - Wz;
            if (Wz = sz, !Fz) return zz.discardPending(), null;
            const Oz = (0, bz.k)(tz, Xz),
              oz = zz.drainLookDelta(),
              vz = (0, uz.j)();
            return {
              mJ: (Oz.mJ + oz.mJ) * vz,
              eJ: (Oz.eJ + oz.eJ) * vz
            }
          };
          return {
            update: (zz, Wz, Oz, oz) => {
              zz.camera.zq !== Xz && (zz.camera.zq = Xz), Fz = !0, tz = (0, bz.o)(sz, Wz, Oz, oz, performance.now())
            },
            release: () => {
              Fz = !1, tz = wz, sz.reset()
            },
            uninstall: zz => {
              zz.camera.zq === Xz && (zz.camera.zq = null)
            }
          }
        })();
        return {
          update: (tz, sz, Fz) => {
            zz.update((0, Kz.e)(), tz, sz, Fz)
          },
          release: zz.release,
          uninstall: () => {
            const tz = (0, Kz.e)();
            tz && zz.uninstall(tz)
          }
        }
      };
    var Pz = sz(39702);
    sz(37070), sz(8253);
    sz(8261).d;
    const rz = () => {
      const zz = (0, Pz.c)((() => {
          const zz = {
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
            bodies: () => (0, Oz.e)(),
            look: Bz(),
            move: (tz, sz) => {
              const Fz = (0, Kz.e)(),
                Wz = Fz.Qr.Ctz();
              if (zz.x = tz.x, zz.y = tz.y, zz.magnitude = tz.magnitude, zz.headingOffset = tz.headingOffset, zz.jumpHeld = tz.jumpHeld, tz.jumpPressed && (zz.jumpPressedSinceTick = !0), zz.running = tz.running, zz.sprintHeld = tz.sprintHeld, sz) {
                const tz = (0, Dz.f)({
                  ...sz,
                  descending: Fz.Qr.mzz(Fz.gC).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!Fz.Kr.canCrouch,
                  toggled: Hz(Wz)
                });
                zz.crouchHeld = tz.crouchHeld, Wz.padSneakToggled = tz.toggled, Wz.crouchToggled = !1, (0, gz.g)(tz.toggled)
              }
              Wz.gamepad = zz
            },
            stopMoving: () => {
              var tz;
              Object.assign(zz, {
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
              const sz = null === (tz = (0, Kz.e)()) || void 0 === tz ? void 0 : tz.Qr.Ctz();
              (null === sz || void 0 === sz ? void 0 : sz.gamepad) === zz && (sz.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: zz => {
              const tz = (0, Kz.e)(),
                sz = null === tz || void 0 === tz ? void 0 : tz.Qr.Ctz();
              "touch" === zz ? ((0, gz.g)(!1), null !== sz && void 0 !== sz && sz.padSneakToggled && (sz.padSneakToggled = !1, sz.isTouchscreen && !sz.gamepad && tz.Qr.Vzz(tz.gC).setCrouching(!!tz.Kr.canCrouch && sz.touchCrouch))) : "gamepad" === zz && sz && (0, gz.g)(Hz(sz))
            },
            hasPlayer: () => {
              var zz;
              return !(null === (zz = (0, Kz.e)()) || void 0 === zz || !zz.gC)
            },
            isPlayerDead: () => {
              var zz;
              const tz = (0, Kz.e)();
              return !1 === (null === (zz = tz.Qr.Btz(tz.gC)) || void 0 === zz ? void 0 : zz.isAlive)
            },
            isReplayMode: () => {
              var zz, tz;
              return !(null === (zz = (0, Kz.d)()) || void 0 === zz || null === (tz = zz.client) || void 0 === tz || !tz.isReplayMode())
            },
            isFreeCameraOn: () => {
              var zz, tz, sz;
              return !(null === (zz = (0, Kz.d)()) || void 0 === zz || null === (tz = zz.client) || void 0 === tz || null === (sz = tz.freeCameraController) || void 0 === sz || !sz.isEnabled())
            },
            targetsBlock: () => !!(0, Kz.e)().W4,
            selectedSlotEmpty: () => {
              var zz;
              const tz = (0, Kz.e)();
              return !(null !== (zz = tz.Qr.pzz(tz.gC)) && void 0 !== zz && zz.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const zz = (0, Kz.e)().Kr;
              return !!zz.creative && !!zz.canPickBlocks
            },
            scrollHotbar: zz => {
              Uz.o.Yg("ScrollInventorySlot", zz)
            },
            hasFullInventory: () => (0, vz.e)((0, Kz.e)()),
            hasLobbyLeaderboard: () => !!(0, Kz.e)().Kr.lobbyLeaderboardInfo,
            contextActionInputs: () => {
              var zz, tz, sz, Fz;
              const Wz = (0, Kz.e)();
              return {
                holdingGun: !(null === (zz = Wz.Qr.Ptz(Wz.gC)) || void 0 === zz || null === (tz = zz.qY) || void 0 === tz || !tz.isGun()),
                customButtons: null !== (sz = Wz.Kr.customButtons) && void 0 !== sz ? sz : null,
                touchscreenActionButton: null !== (Fz = Wz.Kr.touchscreenActionButton) && void 0 !== Fz ? Fz : null
              }
            },
            pressTouchButton: zz => {
              (0, oz.sendColyMessage)(Wz.kj, zz)
            }
          }
        })()),
        tz = (0, Fz.c)(),
        sz = null,
        Xz = null;
      return () => {
        zz(), tz(), null === sz || void 0 === sz || sz(), null === Xz || void 0 === Xz || Xz()
      }
    }
  },
  36090: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz,
      e: () => Dz,
      i: () => gz,
      k: () => oz,
      m: () => Nz,
      p: () => Hz,
      r: () => uz,
      t: () => Pz,
      w: () => wz,
      z: () => Bz
    });
    var Fz = sz(30),
      Wz = sz(34);
    const Xz = "clientGameInventoryButtonsChanged",
      Oz = new Map;

    function oz() {
      return [...Oz.values()].sort(((zz, tz) => {
        var sz, Fz;
        return (null !== (sz = zz.order) && void 0 !== sz ? sz : 0) - (null !== (Fz = tz.order) && void 0 !== Fz ? Fz : 0)
      }))
    }
    let vz = null;

    function Uz(zz) {
      vz = zz
    }
    let Kz = !1;

    function uz(zz) {
      Kz = !0;
      try {
        zz.onClick()
      } finally {
        Kz = !1
      }
      zz.panel && "clientGame" === Fz.b.get("openInGameMenuName") && Uz(zz.id)
    }

    function Nz() {
      return Kz
    }

    function bz() {
      return oz().filter((zz => zz.panel && !zz.disabled))
    }

    function wz(zz) {
      const tz = bz(),
        sz = tz.findIndex((zz => zz.id === vz));
      return !(sz < 0 || tz.length < 2) && (uz(tz[(sz + zz + tz.length) % tz.length]), !0)
    }

    function Dz() {
      return null !== vz && bz().length > 1
    }

    function gz() {
      Uz(null)
    }

    function Hz() {
      "inventory" !== Fz.b.get("openInGameMenuName") && Uz(null)
    }

    function Bz() {
      const zz = vz;
      return Uz(null), zz
    }

    function Pz(zz) {
      return Oz.set(zz.id, zz), Wz.o.Yg(Xz, oz(), !0), () => {
        Oz.get(zz.id) === zz && (Oz.delete(zz.id), Wz.o.Yg(Xz, oz()))
      }
    }
  },
  36086: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => oz,
      h: () => gz,
      j: () => Hz,
      l: () => Nz,
      o: () => Uz,
      s: () => Dz,
      w: () => bz,
      x: () => Kz
    });
    var Fz = sz(30),
      Wz = sz(34),
      Xz = sz(1269),
      Oz = sz(36090);
    const oz = "clientGameUiChanged";
    let vz = null;

    function Uz() {
      return vz
    }

    function Kz(zz, tz) {
      const sz = {
        content: zz,
        menu: tz
      };
      return vz = sz, Wz.o.Yg(oz, vz, !0), () => {
        vz === sz && (vz = null, wz = !1, gz(), Wz.o.Yg(oz, null))
      }
    }
    let uz = null;

    function Nz() {
      return uz
    }

    function bz(zz) {
      return uz = zz, () => {
        uz === zz && (uz = null)
      }
    }
    let wz = !1;

    function Dz() {
      const zz = Fz.b.get("openInGameMenuName");
      "clientGame" !== zz && (wz = "inventory" === zz), (0, Oz.m)() || (0, Oz.i)(), (0, Xz.n)(Xz.c), Fz.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function gz() {
      Bz(!1)
    }

    function Hz() {
      Bz(wz)
    }

    function Bz(zz) {
      "clientGame" === Fz.b.get("openInGameMenuName") && Fz.b.set({
        openInGameMenuName: zz ? "inventory" : null
      }), zz || (0, Oz.i)(), wz = !1
    }
  },
  35981: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => vz
    });
    var Fz = sz(308),
      Wz = sz(30),
      Xz = sz(35983),
      Oz = sz(1571),
      oz = sz(1910);

    function vz(zz, tz) {
      var sz, vz, Uz;
      if (!Wz.b.get("isKeydownEnabled") || zz.repeat) return;
      const Kz = zz.code;
      "Escape" === zz.key ? (0, Oz.j)(zz) : null !== (sz = oz.x.OpenSettings) && void 0 !== sz && sz.includes(Kz) ? (0, Oz.w)(zz, Fz.r.SETTINGS) : null !== (vz = oz.x.OpenCharacterCustomization) && void 0 !== vz && vz.includes(Kz) ? (0, Xz.e)() || (0, Oz.w)(zz, Fz.r.CUSTOMISATION, tz()) : null !== (Uz = oz.x.ShowDebugOverlay) && void 0 !== Uz && Uz.includes(Kz) && Wz.b.set({
        showDebugOverlay: !Wz.b.get("showDebugOverlay")
      })
    }
  },
  35970: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Nz,
      c: () => Kz,
      g: () => bz,
      j: () => uz
    });
    var Fz = sz(321),
      Wz = sz(616),
      Xz = sz(627),
      Oz = sz(44);
    const oz = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      vz = "playSessionGameNameWithVariation",
      Uz = "wasMatchmakePlayer";

    function Kz() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oz.j;
      (0, Xz.h)(zz, oz)
    }

    function uz() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oz.j).setItem(Uz, !0)
    }

    function Nz() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oz.j;
      return (0, Xz.d)(zz, oz)
    }

    function bz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Oz.j;
      const sz = (0, Xz.d)(tz, oz),
        Kz = function(zz) {
          const tz = zz.getItem(vz);
          return "string" !== typeof tz ? null : tz
        }(tz),
        uz = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oz.j).getItem(Uz)
        }(tz);
      let Nz;
      return Nz = null !== sz && null !== Kz && (0, Xz.g)(tz, oz) && function(zz, tz, sz) {
          const Wz = (0, Fz.Tb)(zz),
            Xz = (0, Fz.Tb)(tz),
            Oz = (0, Fz.Mb)(zz),
            oz = (0, Fz.Mb)(tz);
          return !(Wz !== Xz || !sz) || Wz === Xz && Oz === oz
        }(Kz, zz, uz) ? sz : (0, Wz.c)(), (0, Xz.i)(tz, oz, Nz), tz.setItem(vz, zz),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oz.j).removeItem(Uz)
        }(tz), Nz
    }
  },
  35962: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Bz,
      d: () => Pz
    });
    var Fz = sz(991),
      Wz = sz(585),
      Xz = sz(321),
      Oz = sz(993),
      oz = sz(601),
      vz = sz(644),
      Uz = sz(4165),
      Kz = sz(106),
      uz = sz(133),
      Nz = sz(1664),
      bz = sz(119),
      wz = sz(35970),
      Dz = sz(44),
      gz = sz(624),
      Hz = sz(35972);

    function Bz() {
      var zz, tz;
      return [...null !== (zz = navigator.languages) && void 0 !== zz ? zz : [null !== (tz = navigator.language) && void 0 !== tz ? tz : "none"], "en-Gb"]
    }

    function Pz(zz, tz, sz, Pz, rz) {
      const Yz = (0, Fz.n)(tz) ? (0, Fz.r)(tz) : null,
        xz = {
          cookies: (0, Nz.getAllCookiesForGameNameWithVariation)(tz),
          isMobile: (0, Kz.isMobile)(),
          isUsingCustomGameTexturePack: null !== Yz && rz(Yz),
          generalCookies: {
            joinDiscord: !!Dz.f.getItem("DiscordPressed"),
            newGo: Uz.d,
            ...zz.getMetricsCookies(),
            trafficCode: Pz,
            compliance: Kz.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, Kz.getBrowserName)(),
            version: (0, Kz.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, Kz.getPlatformType)(),
            deviceType: (0, bz.c)()
          },
          isLoggedIn: zz.isLoggedIn(),
          lobbyName: sz,
          languages: Bz(),
          version: Wz.e,
          siteUsed: uz.t,
          subsiteUsed: uz.x,
          playSessionId: (0, wz.g)(tz),
          visitSessionId: (0, gz.e)(),
          clientReason: oz.j.reason,
          budgetBasis: (0, Hz.c)(),
          ...null !== vz.q && {
            diagClaim: vz.q.claimId
          }
        };
      return null !== Yz && (0, Xz.zc)(Yz) ? (xz.lobbyName = (0, Fz.j)(Yz, (0, Fz.p)(tz), sz), {
        roomName: `classic_${Oz.h}`,
        joinOptions: xz
      }) : {
        roomName: tz,
        joinOptions: xz
      }
    }
  },
  35800: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Fz,
      e: () => Wz,
      i: () => Xz,
      j: () => Oz
    });
    const Fz = 1024,
      Wz = 1024 * Fz;

    function Xz(zz) {
      return 2 ** Math.floor(Math.log2(Math.max(1, zz / Wz)))
    }

    function Oz(zz) {
      return (zz / Wz).toFixed(1)
    }
  },
  35974: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Xz,
      h: () => oz,
      j: () => Oz,
      n: () => vz,
      q: () => Uz,
      u: () => Kz
    });
    var Fz = sz(201);
    const Wz = 32 * sz(35800).e,
      Xz = 6144,
      Oz = 4608,
      oz = 512;

    function vz(zz) {
      return Math.floor(Wz * zz / Xz)
    }

    function Uz(zz) {
      const tz = zz - Math.floor(zz / 6);
      let sz = Fz.d.maxChunkHorizAddDistance,
        Wz = Fz.d.maxChunkVertAddDistance;
      if (Kz(sz + 1, Wz + 1) <= tz) return null;
      for (; Kz(sz + 1, Wz + 1) > tz && (sz > 0 || Wz > 0);) sz > Wz ? sz-- : Wz--;
      return {
        horizontal: sz,
        vertical: Wz
      }
    }

    function Kz(zz, tz) {
      const sz = Math.max(zz, tz);
      let Fz = 0;
      for (let Wz = -sz; Wz <= sz; Wz++)
        for (let Xz = -sz; Xz <= sz; Xz++)
          for (let Oz = -sz; Oz <= sz; Oz++) uz(zz, tz, Wz, Xz, Oz) && Fz++;
      return Fz
    }

    function uz(zz, tz, sz, Fz, Wz) {
      const Xz = sz * sz + Wz * Wz;
      return zz === tz ? Xz + Fz * Fz <= zz * zz : zz > tz ? Math.abs(Fz) <= tz && Xz + Fz * Fz <= zz * zz : Xz <= zz * zz && Xz + Fz * Fz <= tz * tz
    }
  },
  35972: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => xz,
      c: () => Yz,
      d: () => rz
    });
    var Fz = sz(201),
      Wz = sz(106),
      Xz = sz(2653),
      Oz = sz(4038),
      oz = sz(607),
      vz = sz(35974);
    const Uz = 1048576,
      Kz = 1024 * Uz,
      uz = 400 * Uz,
      Nz = 147456,
      bz = .5,
      wz = 1.5 * Kz,
      Dz = 768 * Uz;

    function gz(zz) {
      return uz + zz * Nz
    }

    function Hz(zz, tz, sz) {
      var Wz, Oz;
      let {
        footprintBytes: oz,
        basis: Uz,
        namesLimit: Hz
      } = function(zz) {
        const {
          os: tz,
          deviceMemory: sz
        } = zz;
        if ("ios" === tz) switch ((0, Xz.e)(zz)) {
          case "ipad_m":
            return {
              footprintBytes: gz(vz.e), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: Dz, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: wz, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: Dz, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof sz && Number.isFinite(sz) && sz > 0 ? {
          footprintBytes: sz * Kz * bz,
          basis: `memory-${sz}`,
          namesLimit: !0
        } : "android" === tz ? {
          footprintBytes: Dz,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: gz(vz.j),
          basis: "unreported",
          namesLimit: !1
        }
      }(zz);
      if (sz) {
        const zz = Math.min(oz, gz(vz.e));
        oz = uz + Math.max(0, zz - uz) / 2, Uz += "+killed", Hz = !0
      }
      null !== tz && gz(tz) < oz && (oz = gz(tz), Uz += "+learned", Hz = !0);
      const Bz = function(zz) {
          const tz = Math.floor((zz - uz) / Nz);
          return Math.min(vz.e, Math.max(vz.h, tz))
        }(oz),
        Pz = (0, vz.q)(Bz);
      return {
        footprintBytes: oz,
        shedFootprintBytes: Hz ? Math.max(oz, gz(Bz)) : null,
        chunkCap: Bz,
        maxHorizDistance: null !== (Wz = null === Pz || void 0 === Pz ? void 0 : Pz.horizontal) && void 0 !== Wz ? Wz : Fz.d.maxChunkHorizAddDistance,
        maxVertDistance: null !== (Oz = null === Pz || void 0 === Pz ? void 0 : Pz.vertical) && void 0 !== Oz ? Oz : Fz.d.maxChunkVertAddDistance,
        basis: Uz
      }
    }
    let Bz = null;

    function Pz() {
      return Hz({
        os: (0, Wz.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, Xz.f)()
      }, (0, Oz.f)(), (0, oz.F)("wasm").length > 0)
    }

    function rz() {
      return Bz ??= Pz(), Bz
    }

    function Yz() {
      var zz;
      return (null !== (zz = Bz) && void 0 !== zz ? zz : Pz()).basis
    }

    function xz(zz, tz) {
      return zz.setChunkCap(tz.chunkCap)
    }
  },
  36283: (zz, tz, sz) => {
    sz.d(tz, {
      D: () => Oz,
      e: () => Wz,
      h: () => Xz,
      k: () => Nz,
      o: () => oz,
      r: () => vz,
      u: () => Uz,
      x: () => uz,
      z: () => Kz
    });
    var Fz = sz(1223);
    let Wz = function(zz) {
        return zz[zz.Join = 0] = "Join", zz[zz.Leave = 1] = "Leave", zz[zz.Push = 2] = "Push", zz[zz.Cursor = 3] = "Cursor", zz[zz.Submit = 4] = "Submit", zz[zz.ReloadAsVariation = 5] = "ReloadAsVariation", zz[zz.CreateFile = 6] = "CreateFile", zz[zz.RenameFile = 7] = "RenameFile", zz[zz.DeleteFile = 8] = "DeleteFile", zz[zz.SetEngine = 9] = "SetEngine", zz[zz.RenameFolder = 10] = "RenameFolder", zz
      }({}),
      Xz = function(zz) {
        return zz[zz.Joined = 0] = "Joined", zz[zz.Updates = 1] = "Updates", zz[zz.Presence = 2] = "Presence", zz[zz.RemoteCursor = 3] = "RemoteCursor", zz[zz.ForceClose = 4] = "ForceClose", zz[zz.LobbyFilesChanged = 5] = "LobbyFilesChanged", zz[zz.EngineSettings = 6] = "EngineSettings", zz
      }({});

    function Oz(zz) {
      return "lobby" === zz.kind ? `lobby:${zz.path}` : `codeBlock:${zz.pos[0]},${zz.pos[1]},${zz.pos[2]}`
    }

    function oz(zz) {
      if ("lobby" === zz) return {
        kind: "lobby",
        path: Fz.j
      };
      if (zz.startsWith("lobby:")) {
        const tz = zz.slice(6);
        return uz(tz) ? {
          kind: "lobby",
          path: tz
        } : null
      }
      const tz = zz.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return tz ? {
        kind: "codeBlock",
        pos: [parseInt(tz[1]), parseInt(tz[2]), parseInt(tz[3])]
      } : null
    }

    function vz(zz) {
      return zz.endsWith(".d.ts")
    }

    function Uz(zz) {
      return zz.endsWith(".ts") && !vz(zz)
    }
    const Kz = 64;

    function uz(zz) {
      if (!zz || zz !== zz.trim()) return !1;
      if (zz.length > Kz) return !1;
      if (zz.startsWith("/") || zz.includes("\\") || zz.includes("\0")) return !1;
      if (!vz(zz) && !Uz(zz) && ! function(zz) {
          return zz.endsWith(".js") && !zz.endsWith(".min.js") && !zz.endsWith(".bundle.js")
        }(zz)) return !1;
      const tz = zz.split("/");
      for (const sz of tz)
        if ("" === sz || "." === sz || ".." === sz) return !1;
      return !0
    }
    const Nz = 14e3
  },
  38442: (zz, tz, sz) => {
    function Fz(zz, tz, sz, Fz, Wz) {
      var Xz = {};
      return Object.keys(Fz).forEach((function(zz) {
        Xz[zz] = Fz[zz]
      })), Xz.enumerable = !!Xz.enumerable, Xz.configurable = !!Xz.configurable, ("value" in Xz || Xz.initializer) && (Xz.writable = !0), Xz = sz.slice().reverse().reduce((function(sz, Fz) {
        return Fz(zz, tz, sz) || sz
      }), Xz), Wz && void 0 !== Xz.initializer && (Xz.value = Xz.initializer ? Xz.initializer.call(Wz) : void 0, Xz.initializer = void 0), void 0 === Xz.initializer && (Object.defineProperty(zz, tz, Xz), Xz = null), Xz
    }
    sz.d(tz, {
      b: () => Fz
    })
  },
  38437: (zz, tz, sz) => {
    function Fz(zz, tz, sz, Fz) {
      sz && Object.defineProperty(zz, tz, {
        enumerable: sz.enumerable,
        configurable: sz.configurable,
        writable: sz.writable,
        value: sz.initializer ? sz.initializer.call(Fz) : void 0
      })
    }
    sz.d(tz, {
      e: () => Fz
    })
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);