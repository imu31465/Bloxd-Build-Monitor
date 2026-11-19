export const id = 188;
export const ids = [188];
export const modules = {
  38463: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Mz,
      f: () => iz
    });
    var Ez = bz(3874);
    let nz = null;

    function iz(zz) {
      return null !== nz && zz === nz
    }

    function lz() {
      this.PU = !1, this.stopPropagation = !1, this.aU = !1, this.disabled = !1
    }
    class Mz {
      constructor(zz, uz) {
        this.version = "0.7.0";
        var bz = Object.assign({}, new lz, uz || {});
        this.element = zz || document, this.PU = !!bz.PU, this.stopPropagation = !!bz.stopPropagation, this.aU = !!bz.aU, this.disabled = !!bz.disabled, this.filterEvents = (zz, uz) => !0, this.down = new Ez.EventEmitter, this.up = new Ez.EventEmitter, this.state = {}, this.WU = {
          dx: 0,
          dy: 0,
          dzz: 0,
          Fzz: 0,
          Rzz: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? Hz(this) : document.addEventListener("DOMContentLoaded", (zz => {
          Hz(this)
        }), {
          once: !0
        })
      }
      bind(zz) {
        for (var uz = arguments.length, bz = new Array(uz > 1 ? uz - 1 : 0), Ez = 1; Ez < uz; Ez++) bz[Ez - 1] = arguments[Ez];
        bz.forEach((uz => {
          var bz = this._keyBindmap[uz] || [];
          bz.includes(zz) || (bz.push(zz), this._keyBindmap[uz] = bz)
        })), this.state[zz] = !!this.state[zz], this.pressCount[zz] = this.pressCount[zz] || 0, this.releaseCount[zz] = this.releaseCount[zz] || 0
      }
      unbind(zz) {
        for (var uz in this._keyBindmap) {
          var bz = this._keyBindmap[uz],
            Ez = bz.indexOf(zz);
          Ez > -1 && bz.splice(Ez, 1)
        }
      }
      getBindings() {
        var zz = {};
        for (var uz in this._keyBindmap) {
          this._keyBindmap[uz].forEach((bz => {
            zz[bz] = zz[bz] || [], zz[bz].push(uz)
          }))
        }
        return zz
      }
      sd() {
        tz(this.WU), tz(this.pressCount), tz(this.releaseCount)
      }
    }

    function tz(zz) {
      for (var uz in zz) zz[uz] = 0
    }

    function Hz(zz) {
      window.addEventListener("keydown", Kz.bind(null, zz, !0), !1), window.addEventListener("keyup", Kz.bind(null, zz, !1), !1);
      var uz = {
        passive: !0
      };
      zz.element.addEventListener("touchstart", Fz.bind(void 0, zz), {
        passive: !1
      }), zz.element.addEventListener("touchend", Rz.bind(void 0, zz), uz), zz.element.addEventListener("mousedown", wz.bind(null, zz, !0), uz), window.document.addEventListener("mouseup", wz.bind(null, zz, !1), uz), zz.element.addEventListener("touchmove", Xz.bind(null, zz), uz), zz.element.addEventListener("mousemove", Xz.bind(null, zz), uz), window.PointerEvent, zz.element.addEventListener("wheel", fz.bind(null, zz), uz), zz.element.addEventListener("contextmenu", sz.bind(null, zz), !1), window.addEventListener("blur", Nz.bind(null, zz), !1)
    }
    var Oz = 0,
      pz = 0,
      dz = null;

    function Fz(zz, uz) {
      uz.preventDefault(), Zz(uz)
    }

    function Zz(zz) {
      let uz = !1;
      for (let bz = 0; bz < zz.touches.length; ++bz)
        if (zz.touches[bz].identifier === dz) {
          uz = !0;
          break
        } if (!uz) {
        const uz = zz.changedTouches[0];
        Oz = uz.clientX, pz = uz.clientY, dz = uz.identifier
      }
    }

    function Rz(zz, uz) {
      for (var bz = uz.changedTouches, Ez = 0; Ez < bz.length; ++Ez) bz[Ez].identifier === dz && (dz = null)
    }

    function Kz(zz, uz, bz) {
      try {
        vz(zz, bz), uz && bz.isTrusted && !bz.repeat && zz._keyStates[bz.code] && xz(zz, bz.code)
      } finally {
        Jz(bz.code, uz, zz, bz)
      }
    }

    function wz(zz, uz, bz) {
      try {
        vz(zz, bz)
      } finally {
        ! function(zz, uz, bz) {
          if ("pointerId" in bz)
            if (uz) {
              if (null !== zz._touches.currID) return;
              zz._touches.currID = bz.pointerId
            } else {
              if (zz._touches.currID !== bz.pointerId) return;
              zz._touches.currID = null
            } var Ez = "button" in bz ? bz.button + 1 : 1;
          Jz("Mouse" + Ez, uz, zz, bz)
        }(zz, uz, bz)
      }
    }

    function Xz(zz, uz) {
      var bz = uz.movementX || uz.mozMovementX || 0,
        Ez = uz.movementY || uz.mozMovementY || 0;
      if (uz.touches && 0 === (bz | Ez)) {
        var nz = function(zz) {
          Zz(zz);
          for (let uz = 0; uz < zz.changedTouches.length; ++uz)
            if (zz.changedTouches[uz].identifier == dz) {
              const bz = zz.changedTouches[uz],
                Ez = [bz.clientX - Oz, bz.clientY - pz];
              return Oz = bz.clientX, pz = bz.clientY, Ez
            } return console.error(`Did not find touch id ${dz}`), [0, 0]
        }(uz);
        bz = nz[0], Ez = nz[1]
      }
      zz.WU.dx += bz, zz.WU.dy += Ez
    }

    function fz(zz, uz) {
      vz(zz, uz);
      var bz = 1;
      switch (uz.deltaMode) {
        case 0:
          bz = 1;
          break;
        case 1:
          bz = 12;
          break;
        case 2:
          bz = zz.element.clientHeight || window.innerHeight
      }
      zz.WU.dzz += (uz.deltaX || 0) * bz, zz.WU.Fzz += (uz.deltaY || 0) * bz, zz.WU.Rzz += (uz.deltaZ || 0) * bz
    }

    function sz(zz, uz) {
      if (!zz.aU) return uz.preventDefault(), !1
    }
    var rz = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function oz(zz, uz) {
      return !!zz[rz[uz]] || ("AltRight" === uz || "ControlLeft" === uz) && "function" === typeof zz.getModifierState && !0 === zz.getModifierState("AltGraph")
    }

    function Nz(zz, uz) {
      for (var bz in zz._modifiersHeldThroughBlur = {}, rz) zz._keyStates[bz] && (zz._modifiersHeldThroughBlur[bz] = !0);
      uz && uz.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (zz) {
          return !0
        }
      }() && (clearTimeout(zz._blurRelease), zz._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var uz in zz._modifiersHeldThroughBlur = {}, zz._keyStates) zz._keyStates[uz] && !/^Mouse\d/.test(uz) && xz(zz, uz)
      }), 0))
    }

    function vz(zz, uz) {
      var bz = zz._modifiersHeldThroughBlur;
      if (bz && uz.isTrusted && document.hasFocus())
        for (var Ez in bz) delete bz[Ez], zz._keyStates[Ez] && Ez !== uz.code && (oz(uz, Ez) || xz(zz, Ez))
    }

    function xz(zz, uz) {
      const bz = {
          code: uz,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        Ez = nz;
      nz = bz;
      try {
        Jz(uz, !1, zz, bz)
      } finally {
        nz = Ez
      }
    }

    function Jz(zz, uz, bz, Ez) {
      var nz = bz._keyBindmap[zz];
      nz && (Az(bz._keyStates[zz], uz) && (bz._keyStates[zz] = uz, nz.forEach((zz => {
        (!bz.filterEvents || bz.filterEvents(Ez, zz)) && function(zz, uz, bz, Ez) {
          var nz = uz ? bz.pressCount : bz.releaseCount;
          nz[zz] = (nz[zz] || 0) + 1;
          var iz = bz._bindPressCount[zz] || 0;
          (iz += uz ? 1 : -1) < 0 && (iz = 0);
          bz._bindPressCount[zz] = iz;
          var lz = bz.state[zz];
          if (Az(lz, iz)) {
            bz.state[zz] = iz > 0;
            var Mz = uz ? bz.down : bz.up;
            bz.disabled || Mz.emit(zz, Ez)
          }
        }(zz, uz, bz, Ez)
      }))), "button" in Ez || (bz.PU && !Ez.defaultPrevented && Ez.preventDefault(), bz.stopPropagation && Ez.stopPropagation()))
    }

    function Az(zz, uz) {
      return zz ? !uz : uz
    }
  },
  36156: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Fz,
      d: () => Zz
    });
    var Ez = bz(56),
      nz = bz(2756),
      iz = bz(1417),
      lz = bz(1912),
      Mz = bz(36103),
      tz = bz(588),
      Hz = bz(1038),
      Oz = bz.n(Hz),
      pz = bz(1089);
    const dz = {},
      Fz = (0, Ez.memo)((function() {
        const zz = (0, nz.c)();
        return (0, iz.g)("damagedByOtherPlayer", (uz => {
          let {
            nE: bz,
            direction: Ez
          } = uz;
          const nz = bz || "nonDirectional";
          if (dz[nz]) {
            const uz = dz[nz];
            clearTimeout(uz.timeout), uz.direction = Ez, uz.timeout = setTimeout((() => {
              delete dz[nz], zz()
            }), 800)
          } else dz[nz] = {
            direction: Ez,
            KV: null,
            timeout: setTimeout((() => {
              delete dz[nz], zz()
            }), 800)
          };
          zz()
        })), (0, lz.d)("kill", (uz => {
          let {
            killer: bz,
            victim: Ez
          } = uz;
          const nz = Ez.id;
          bz.local && nz && nz in dz && (clearTimeout(dz[nz].timeout), delete dz[nz], zz())
        })), (0, Ez.useEffect)((() => {
          const zz = (0, Mz.g)("turnDamageIndicators", Zz);
          return () => {
            zz();
            for (const zz in dz) clearTimeout(dz[zz].timeout), delete dz[zz]
          }
        }), []), (0, pz.jsx)("div", {
          className: "DirectionalDamage",
          children: Object.entries(dz).map((zz => {
            let [uz, bz] = zz;
            const Ez = (0, tz.F)(bz.direction);
            return (0, pz.jsx)("div", {
              ref: zz => {
                dz[uz] && (dz[uz].KV = zz)
              },
              className: Oz()("DamageIndicator", {
                DamageIndicatorFullCircle: Ez
              })
            }, uz)
          }))
        })
      }));

    function Zz(zz) {
      for (const uz in dz) {
        const {
          direction: bz,
          KV: Ez
        } = dz[uz];
        if ((0, tz.F)(bz)) continue;
        const nz = bz - zz;
        Ez.style.rotate = `${nz}rad`
      }
    }
  },
  35970: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => nz,
      e: () => iz
    });
    let Ez = !1;

    function nz() {
      return Ez
    }

    function iz(zz) {
      return Ez !== zz && (Ez = zz, !0)
    }
  },
  8920: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => iz,
      g: () => nz
    });
    var Ez = bz(20);

    function nz(zz, uz) {
      return zz && !uz
    }

    function iz() {
      return nz(Ez.e.get("isTouchScreen"), Ez.e.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  39834: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      startPadGameplay: () => sz
    });
    bz(39704);
    var Ez = bz(39708),
      nz = bz(3521),
      iz = bz(20),
      lz = bz(38436),
      Mz = bz(3437),
      tz = bz(38454),
      Hz = bz(22),
      Oz = bz(2623),
      pz = bz(37824),
      dz = bz(8530),
      Fz = bz(39712);
    const Zz = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var Rz = bz(39731),
      Kz = bz(8507);
    const wz = zz => zz.padSneakToggled || !!iz.e.get("clientEscMenuOptions").crouchIsToggle && zz.crouchToggled,
      Xz = () => {
        const zz = (() => {
          const zz = (0, dz.e)();
          let uz = Zz;
          const bz = new Fz.e;
          let Ez = !1,
            nz = 0;
          const iz = () => {
            const bz = performance.now(),
              iz = 0 === nz ? 0 : bz - nz;
            if (nz = bz, !Ez) return zz.discardPending(), null;
            const lz = (0, Fz.p)(uz, iz),
              Mz = zz.drainLookDelta(),
              tz = (0, pz.k)();
            return {
              QJ: (lz.QJ + Mz.QJ) * tz,
              eJ: (lz.eJ + Mz.eJ) * tz
            }
          };
          return {
            update: (zz, nz, lz, Mz) => {
              zz.camera.mD !== iz && (zz.camera.mD = iz), Ez = !0, uz = (0, Fz.t)(bz, nz, lz, Mz, performance.now())
            },
            release: () => {
              Ez = !1, uz = Zz, bz.reset()
            },
            uninstall: zz => {
              zz.camera.mD === iz && (zz.camera.mD = null)
            }
          }
        })();
        return {
          update: (uz, bz, Ez) => {
            zz.update((0, Oz.g)(), uz, bz, Ez)
          },
          release: zz.release,
          uninstall: () => {
            const uz = (0, Oz.g)();
            uz && zz.uninstall(uz)
          }
        }
      };
    var fz = bz(39724);
    bz(37139), bz(8387);
    bz(8407).b;
    const sz = () => {
      const zz = (0, fz.d)((() => {
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
            bodies: () => (0, lz.e)(),
            look: Xz(),
            move: (uz, bz) => {
              const Ez = (0, Oz.g)(),
                nz = Ez.zN.puz();
              if (zz.x = uz.x, zz.y = uz.y, zz.magnitude = uz.magnitude, zz.headingOffset = uz.headingOffset, zz.jumpHeld = uz.jumpHeld, uz.jumpPressed && (zz.jumpPressedSinceTick = !0), zz.running = uz.running, zz.sprintHeld = uz.sprintHeld, bz) {
                const uz = (0, Rz.i)({
                  ...bz,
                  descending: Ez.zN.tzz(Ez.iG).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!Ez.Vr.canCrouch,
                  toggled: wz(nz)
                });
                zz.crouchHeld = uz.crouchHeld, nz.padSneakToggled = uz.toggled, nz.crouchToggled = !1, (0, Kz.e)(uz.toggled)
              }
              nz.gamepad = zz
            },
            stopMoving: () => {
              var uz;
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
              const bz = null === (uz = (0, Oz.g)()) || void 0 === uz ? void 0 : uz.zN.puz();
              (null === bz || void 0 === bz ? void 0 : bz.gamepad) === zz && (bz.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: zz => {
              const uz = (0, Oz.g)(),
                bz = null === uz || void 0 === uz ? void 0 : uz.zN.puz();
              "touch" === zz ? ((0, Kz.e)(!1), null !== bz && void 0 !== bz && bz.padSneakToggled && (bz.padSneakToggled = !1, bz.isTouchscreen && !bz.gamepad && uz.zN.Vzz(uz.iG).setCrouching(!!uz.Vr.canCrouch && bz.touchCrouch))) : "gamepad" === zz && bz && (0, Kz.e)(wz(bz))
            },
            hasPlayer: () => {
              var zz;
              return !(null === (zz = (0, Oz.g)()) || void 0 === zz || !zz.iG)
            },
            isPlayerDead: () => {
              var zz;
              const uz = (0, Oz.g)();
              return !1 === (null === (zz = uz.zN.nuz(uz.iG)) || void 0 === zz ? void 0 : zz.isAlive)
            },
            isReplayMode: () => {
              var zz, uz;
              return !(null === (zz = (0, Oz.d)()) || void 0 === zz || null === (uz = zz.client) || void 0 === uz || !uz.isReplayMode())
            },
            isFreeCameraOn: () => {
              var zz, uz, bz;
              return !(null === (zz = (0, Oz.d)()) || void 0 === zz || null === (uz = zz.client) || void 0 === uz || null === (bz = uz.freeCameraController) || void 0 === bz || !bz.isEnabled())
            },
            targetsBlock: () => !!(0, Oz.g)().U3,
            selectedSlotEmpty: () => {
              var zz;
              const uz = (0, Oz.g)();
              return !(null !== (zz = uz.zN.hzz(uz.iG)) && void 0 !== zz && zz.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const zz = (0, Oz.g)().Vr;
              return !!zz.creative && !!zz.canPickBlocks
            },
            scrollHotbar: zz => {
              Hz.k.sK("ScrollInventorySlot", zz)
            },
            hasFullInventory: () => (0, tz.c)((0, Oz.g)()),
            hasLobbyLeaderboard: () => !!(0, Oz.g)().Vr.lobbyLeaderboardInfo,
            contextActionInputs: () => {
              var zz, uz, bz, Ez;
              const nz = (0, Oz.g)();
              return {
                holdingGun: !(null === (zz = nz.zN.iuz(nz.iG)) || void 0 === zz || null === (uz = zz.Fv) || void 0 === uz || !uz.isGun()),
                customButtons: null !== (bz = nz.Vr.customButtons) && void 0 !== bz ? bz : null,
                touchscreenActionButton: null !== (Ez = nz.Vr.touchscreenActionButton) && void 0 !== Ez ? Ez : null
              }
            },
            pressTouchButton: zz => {
              (0, Mz.sendColyMessage)(nz.Qj, zz)
            }
          }
        })()),
        uz = (0, Ez.e)(),
        bz = null,
        iz = null;
      return () => {
        zz(), uz(), null === bz || void 0 === bz || bz(), null === iz || void 0 === iz || iz()
      }
    }
  },
  36080: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => iz,
      d: () => Rz,
      g: () => Kz,
      h: () => Mz,
      i: () => dz,
      j: () => wz,
      n: () => pz,
      q: () => fz,
      u: () => Zz,
      x: () => Xz
    });
    var Ez = bz(20),
      nz = bz(22);
    const iz = "clientGameInventoryButtonsChanged",
      lz = new Map;

    function Mz() {
      return [...lz.values()].sort(((zz, uz) => {
        var bz, Ez;
        return (null !== (bz = zz.order) && void 0 !== bz ? bz : 0) - (null !== (Ez = uz.order) && void 0 !== Ez ? Ez : 0)
      }))
    }
    let tz = null;

    function Hz(zz) {
      tz = zz
    }
    let Oz = !1;

    function pz(zz) {
      Oz = !0;
      try {
        zz.onClick()
      } finally {
        Oz = !1
      }
      zz.panel && "clientGame" === Ez.e.get("openInGameMenuName") && Hz(zz.id)
    }

    function dz() {
      return Oz
    }

    function Fz() {
      return Mz().filter((zz => zz.panel && !zz.disabled))
    }

    function Zz(zz) {
      const uz = Fz(),
        bz = uz.findIndex((zz => zz.id === tz));
      return !(bz < 0 || uz.length < 2) && (pz(uz[(bz + zz + uz.length) % uz.length]), !0)
    }

    function Rz() {
      return null !== tz && Fz().length > 1
    }

    function Kz() {
      Hz(null)
    }

    function wz() {
      "inventory" !== Ez.e.get("openInGameMenuName") && Hz(null)
    }

    function Xz() {
      const zz = tz;
      return Hz(null), zz
    }

    function fz(zz) {
      return lz.set(zz.id, zz), nz.k.sK(iz, Mz(), !0), () => {
        lz.get(zz.id) === zz && (lz.delete(zz.id), nz.k.sK(iz, Mz()))
      }
    }
  },
  36071: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Mz,
      i: () => Kz,
      l: () => wz,
      n: () => dz,
      o: () => Hz,
      p: () => Rz,
      t: () => Fz,
      x: () => Oz
    });
    var Ez = bz(20),
      nz = bz(22),
      iz = bz(1269),
      lz = bz(36080);
    const Mz = "clientGameUiChanged";
    let tz = null;

    function Hz() {
      return tz
    }

    function Oz(zz, uz) {
      const bz = {
        content: zz,
        menu: uz
      };
      return tz = bz, nz.k.sK(Mz, tz, !0), () => {
        tz === bz && (tz = null, Zz = !1, Kz(), nz.k.sK(Mz, null))
      }
    }
    let pz = null;

    function dz() {
      return pz
    }

    function Fz(zz) {
      return pz = zz, () => {
        pz === zz && (pz = null)
      }
    }
    let Zz = !1;

    function Rz() {
      const zz = Ez.e.get("openInGameMenuName");
      "clientGame" !== zz && (Zz = "inventory" === zz), (0, lz.i)() || (0, lz.g)(), (0, iz.m)(iz.b), Ez.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Kz() {
      Xz(!1)
    }

    function wz() {
      Xz(Zz)
    }

    function Xz(zz) {
      "clientGame" === Ez.e.get("openInGameMenuName") && Ez.e.set({
        openInGameMenuName: zz ? "inventory" : null
      }), zz || (0, lz.g)(), Zz = !1
    }
  },
  35965: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => tz
    });
    var Ez = bz(316),
      nz = bz(20),
      iz = bz(35970),
      lz = bz(1595),
      Mz = bz(1923);

    function tz(zz, uz) {
      var bz, tz, Hz;
      if (!nz.e.get("isKeydownEnabled") || zz.repeat) return;
      const Oz = zz.code;
      "Escape" === zz.key ? (0, lz.d)(zz) : null !== (bz = Mz.s.OpenSettings) && void 0 !== bz && bz.includes(Oz) ? (0, lz.t)(zz, Ez.r.SETTINGS) : null !== (tz = Mz.s.OpenCharacterCustomization) && void 0 !== tz && tz.includes(Oz) ? (0, iz.d)() || (0, lz.t)(zz, Ez.r.CUSTOMISATION, uz()) : null !== (Hz = Mz.s.ShowDebugOverlay) && void 0 !== Hz && Hz.includes(Oz) && nz.e.set({
        showDebugOverlay: !nz.e.get("showDebugOverlay")
      })
    }
  },
  35952: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => dz,
      c: () => Oz,
      g: () => Fz,
      j: () => pz
    });
    var Ez = bz(328),
      nz = bz(621),
      iz = bz(633),
      lz = bz(33);
    const Mz = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      tz = "playSessionGameNameWithVariation",
      Hz = "wasMatchmakePlayer";

    function Oz() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lz.h;
      (0, iz.j)(zz, Mz)
    }

    function pz() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lz.h).setItem(Hz, !0)
    }

    function dz() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lz.h;
      return (0, iz.d)(zz, Mz)
    }

    function Fz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lz.h;
      const bz = (0, iz.d)(uz, Mz),
        Oz = function(zz) {
          const uz = zz.getItem(tz);
          return "string" !== typeof uz ? null : uz
        }(uz),
        pz = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lz.h).getItem(Hz)
        }(uz);
      let dz;
      return dz = null !== bz && null !== Oz && (0, iz.g)(uz, Mz) && function(zz, uz, bz) {
          const nz = (0, Ez.Sb)(zz),
            iz = (0, Ez.Sb)(uz),
            lz = (0, Ez.Nb)(zz),
            Mz = (0, Ez.Nb)(uz);
          return !(nz !== iz || !bz) || nz === iz && lz === Mz
        }(Oz, zz, pz) ? bz : (0, nz.d)(), (0, iz.n)(uz, Mz, dz), uz.setItem(tz, zz),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lz.h).removeItem(Hz)
        }(uz), dz
    }
  },
  35945: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Xz,
      e: () => fz
    });
    var Ez = bz(994),
      nz = bz(597),
      iz = bz(328),
      lz = bz(1e3),
      Mz = bz(606),
      tz = bz(646),
      Hz = bz(4286),
      Oz = bz(96),
      pz = bz(128),
      dz = bz(1673),
      Fz = bz(111),
      Zz = bz(35952),
      Rz = bz(33),
      Kz = bz(627),
      wz = bz(35954);

    function Xz() {
      var zz, uz;
      return [...null !== (zz = navigator.languages) && void 0 !== zz ? zz : [null !== (uz = navigator.language) && void 0 !== uz ? uz : "none"], "en-Gb"]
    }

    function fz(zz, uz, bz, fz, sz) {
      const rz = (0, Ez.k)(uz) ? (0, Ez.q)(uz) : null,
        oz = {
          cookies: (0, dz.getAllCookiesForGameNameWithVariation)(uz),
          isMobile: (0, Oz.isMobile)(),
          isUsingCustomGameTexturePack: null !== rz && sz(rz),
          generalCookies: {
            joinDiscord: !!Rz.g.getItem("DiscordPressed"),
            newGo: Hz.b,
            ...zz.getMetricsCookies(),
            trafficCode: fz,
            compliance: Oz.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, Oz.getBrowserName)(),
            version: (0, Oz.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, Oz.getPlatformType)(),
            deviceType: (0, Fz.e)()
          },
          isLoggedIn: zz.isLoggedIn(),
          lobbyName: bz,
          languages: Xz(),
          version: nz.c,
          siteUsed: pz.x,
          subsiteUsed: pz.E,
          playSessionId: (0, Zz.g)(uz),
          visitSessionId: (0, Kz.d)(),
          clientReason: Mz.o.reason,
          budgetBasis: (0, wz.f)(),
          ...null !== tz.q && {
            diagClaim: tz.q.claimId
          }
        };
      return null !== rz && (0, iz.Fc)(rz) ? (oz.lobbyName = (0, Ez.g)(rz, (0, Ez.m)(uz), bz), {
        roomName: `classic_${lz.e}`,
        joinOptions: oz
      }) : {
        roomName: uz,
        joinOptions: oz
      }
    }
  },
  35959: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Ez,
      i: () => nz,
      j: () => iz
    });
    const Ez = 1024,
      nz = 1024 * Ez;

    function iz(zz) {
      return (zz / nz).toFixed(1)
    }
  },
  35956: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => iz,
      g: () => Mz,
      j: () => lz,
      l: () => tz,
      p: () => Hz
    });
    var Ez = bz(195);
    const nz = 32 * bz(35959).i,
      iz = 6144,
      lz = 4608,
      Mz = 512;

    function tz(zz) {
      return Math.floor(nz * zz / iz)
    }

    function Hz(zz) {
      const uz = zz - Math.floor(zz / 6);
      let bz = Ez.e.maxChunkHorizAddDistance,
        nz = Ez.e.maxChunkVertAddDistance;
      if (Oz(bz + 1, nz + 1) <= uz) return null;
      for (; Oz(bz + 1, nz + 1) > uz && (bz > 0 || nz > 0);) bz > nz ? bz-- : nz--;
      return {
        horizontal: bz,
        vertical: nz
      }
    }

    function Oz(zz, uz) {
      const bz = Math.max(zz, uz);
      let Ez = 0;
      for (let nz = -bz; nz <= bz; nz++)
        for (let iz = -bz; iz <= bz; iz++)
          for (let lz = -bz; lz <= bz; lz++) pz(zz, uz, nz, iz, lz) && Ez++;
      return Ez
    }

    function pz(zz, uz, bz, Ez, nz) {
      const iz = bz * bz + nz * nz;
      return zz === uz ? iz + Ez * Ez <= zz * zz : zz > uz ? Math.abs(Ez) <= uz && iz + Ez * Ez <= zz * zz : iz <= zz * zz && iz + Ez * Ez <= uz * uz
    }
  },
  35954: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => oz,
      f: () => rz,
      h: () => sz
    });
    var Ez = bz(195),
      nz = bz(96),
      iz = bz(2706),
      lz = bz(4169),
      Mz = bz(615),
      tz = bz(35956);
    const Hz = 1048576,
      Oz = 1024 * Hz,
      pz = 400 * Hz,
      dz = 147456,
      Fz = .5,
      Zz = 1.5 * Oz,
      Rz = 768 * Hz;

    function Kz(zz) {
      return pz + zz * dz
    }

    function wz(zz, uz, bz) {
      var nz, lz;
      let {
        footprintBytes: Mz,
        basis: Hz,
        namesLimit: wz
      } = function(zz) {
        const {
          os: uz,
          deviceMemory: bz
        } = zz;
        if ("ios" === uz) switch ((0, iz.f)(zz)) {
          case "ipad_m":
            return {
              footprintBytes: Kz(tz.c), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: Rz, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: Zz, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: Rz, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof bz && Number.isFinite(bz) && bz > 0 ? {
          footprintBytes: bz * Oz * Fz,
          basis: `memory-${bz}`,
          namesLimit: !0
        } : "android" === uz ? {
          footprintBytes: Rz,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: Kz(tz.j),
          basis: "unreported",
          namesLimit: !1
        }
      }(zz);
      if (bz) {
        const zz = Math.min(Mz, Kz(tz.c));
        Mz = pz + Math.max(0, zz - pz) / 2, Hz += "+killed", wz = !0
      }
      null !== uz && Kz(uz) < Mz && (Mz = Kz(uz), Hz += "+learned", wz = !0);
      const Xz = function(zz) {
          const uz = Math.floor((zz - pz) / dz);
          return Math.min(tz.c, Math.max(tz.g, uz))
        }(Mz),
        fz = (0, tz.p)(Xz);
      return {
        footprintBytes: Mz,
        shedFootprintBytes: wz ? Math.max(Mz, Kz(Xz)) : null,
        chunkCap: Xz,
        maxHorizDistance: null !== (nz = null === fz || void 0 === fz ? void 0 : fz.horizontal) && void 0 !== nz ? nz : Ez.e.maxChunkHorizAddDistance,
        maxVertDistance: null !== (lz = null === fz || void 0 === fz ? void 0 : fz.vertical) && void 0 !== lz ? lz : Ez.e.maxChunkVertAddDistance,
        basis: Hz
      }
    }
    let Xz = null;

    function fz() {
      return wz({
        os: (0, nz.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, iz.i)()
      }, (0, lz.i)(), (0, Mz.G)("wasm").length > 0)
    }

    function sz() {
      return Xz ??= fz(), Xz
    }

    function rz() {
      var zz;
      return (null !== (zz = Xz) && void 0 !== zz ? zz : fz()).basis
    }

    function oz(zz, uz) {
      return zz.setChunkCap(uz.chunkCap)
    }
  },
  36297: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => nz,
      h: () => iz,
      l: () => dz,
      m: () => Mz,
      o: () => tz,
      s: () => Hz,
      t: () => pz,
      v: () => Oz,
      z: () => lz
    });
    var Ez = bz(1226);
    let nz = function(zz) {
        return zz[zz.Join = 0] = "Join", zz[zz.Leave = 1] = "Leave", zz[zz.Push = 2] = "Push", zz[zz.Cursor = 3] = "Cursor", zz[zz.Submit = 4] = "Submit", zz[zz.ReloadAsVariation = 5] = "ReloadAsVariation", zz[zz.CreateFile = 6] = "CreateFile", zz[zz.RenameFile = 7] = "RenameFile", zz[zz.DeleteFile = 8] = "DeleteFile", zz[zz.SetEngine = 9] = "SetEngine", zz[zz.RenameFolder = 10] = "RenameFolder", zz
      }({}),
      iz = function(zz) {
        return zz[zz.Joined = 0] = "Joined", zz[zz.Updates = 1] = "Updates", zz[zz.Presence = 2] = "Presence", zz[zz.RemoteCursor = 3] = "RemoteCursor", zz[zz.ForceClose = 4] = "ForceClose", zz[zz.LobbyFilesChanged = 5] = "LobbyFilesChanged", zz[zz.EngineSettings = 6] = "EngineSettings", zz
      }({});

    function lz(zz) {
      return "lobby" === zz.kind ? `lobby:${zz.path}` : `codeBlock:${zz.pos[0]},${zz.pos[1]},${zz.pos[2]}`
    }

    function Mz(zz) {
      if ("lobby" === zz) return {
        kind: "lobby",
        path: Ez.i
      };
      if (zz.startsWith("lobby:")) {
        const uz = zz.slice(6);
        return pz(uz) ? {
          kind: "lobby",
          path: uz
        } : null
      }
      const uz = zz.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return uz ? {
        kind: "codeBlock",
        pos: [parseInt(uz[1]), parseInt(uz[2]), parseInt(uz[3])]
      } : null
    }

    function tz(zz) {
      return zz.endsWith(".d.ts")
    }

    function Hz(zz) {
      return zz.endsWith(".ts") && !tz(zz)
    }
    const Oz = 64;

    function pz(zz) {
      if (!zz || zz !== zz.trim()) return !1;
      if (zz.length > Oz) return !1;
      if (zz.startsWith("/") || zz.includes("\\") || zz.includes("\0")) return !1;
      if (!tz(zz) && !Hz(zz) && ! function(zz) {
          return zz.endsWith(".js") && !zz.endsWith(".min.js") && !zz.endsWith(".bundle.js")
        }(zz)) return !1;
      const uz = zz.split("/");
      for (const bz of uz)
        if ("" === bz || "." === bz || ".." === bz) return !1;
      return !0
    }
    const dz = 14e3
  },
  38401: (zz, uz, bz) => {
    function Ez(zz, uz, bz, Ez, nz) {
      var iz = {};
      return Object.keys(Ez).forEach((function(zz) {
        iz[zz] = Ez[zz]
      })), iz.enumerable = !!iz.enumerable, iz.configurable = !!iz.configurable, ("value" in iz || iz.initializer) && (iz.writable = !0), iz = bz.slice().reverse().reduce((function(bz, Ez) {
        return Ez(zz, uz, bz) || bz
      }), iz), nz && void 0 !== iz.initializer && (iz.value = iz.initializer ? iz.initializer.call(nz) : void 0, iz.initializer = void 0), void 0 === iz.initializer && (Object.defineProperty(zz, uz, iz), iz = null), iz
    }
    bz.d(uz, {
      d: () => Ez
    })
  },
  38393: (zz, uz, bz) => {
    function Ez(zz, uz, bz, Ez) {
      bz && Object.defineProperty(zz, uz, {
        enumerable: bz.enumerable,
        configurable: bz.configurable,
        writable: bz.writable,
        value: bz.initializer ? bz.initializer.call(Ez) : void 0
      })
    }
    bz.d(uz, {
      c: () => Ez
    })
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);