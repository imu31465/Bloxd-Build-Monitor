export const id = 80;
export const ids = [78, 80];
export const modules = {
  35330: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => fc,
      g: () => mB
    });
    var Vc = nc(73),
      Ic = nc(2258),
      rB = nc(1252),
      uc = nc(1609),
      sc = nc(35270),
      Mc = nc(569),
      Pc = nc(912),
      qB = nc.n(Pc),
      Oc = nc(957);
    const Tc = {},
      fc = (0, Vc.memo)((function() {
        const cB = (0, Ic.e)();
        return (0, rB.f)("damagedByOtherPlayer", (Bc => {
          let {
            K9: nc,
            direction: Vc
          } = Bc;
          const Ic = nc || "nonDirectional";
          if (Tc[Ic]) {
            const Bc = Tc[Ic];
            clearTimeout(Bc.timeout), Bc.direction = Vc, Bc.timeout = setTimeout((() => {
              delete Tc[Ic], cB()
            }), 800)
          } else Tc[Ic] = {
            direction: Vc,
            Cnc: null,
            timeout: setTimeout((() => {
              delete Tc[Ic], cB()
            }), 800)
          };
          cB()
        })), (0, uc.d)("kill", (Bc => {
          let {
            killer: nc,
            victim: Vc
          } = Bc;
          const Ic = Vc.id;
          nc.local && Ic && Ic in Tc && (clearTimeout(Tc[Ic].timeout), delete Tc[Ic], cB())
        })), (0, Vc.useEffect)((() => {
          const cB = (0, sc.e)("turnDamageIndicators", mB);
          return () => {
            cB();
            for (const cB in Tc) clearTimeout(Tc[cB].timeout), delete Tc[cB]
          }
        }), []), (0, Oc.jsx)("div", {
          className: "DirectionalDamage",
          children: Object.entries(Tc).map((cB => {
            let [Bc, nc] = cB;
            const Vc = (0, Mc.E)(nc.direction);
            return (0, Oc.jsx)("div", {
              ref: cB => {
                Tc[Bc] && (Tc[Bc].Cnc = cB)
              },
              className: qB()("DamageIndicator", {
                DamageIndicatorFullCircle: Vc
              })
            }, Bc)
          }))
        })
      }));

    function mB(cB) {
      for (const Bc in Tc) {
        const {
          direction: nc,
          Cnc: Vc
        } = Tc[Bc];
        if ((0, Mc.E)(nc)) continue;
        const Ic = nc - cB;
        Vc.style.rotate = `${Ic}rad`
      }
    }
  },
  35238: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Mc,
      d: () => Pc
    });
    const Vc = .1,
      Ic = .35,
      rB = .85,
      uc = .06,
      sc = .22;

    function Mc(cB) {
      if (cB < Vc) return 0;
      if (cB < Ic) {
        const Bc = (cB - Vc) / (Ic - Vc);
        return uc + (sc - uc) * Bc * Bc
      }
      return cB < rB ? sc + (1 - sc) * (cB - Ic) / (rB - Ic) : 1
    }

    function Pc(cB) {
      return cB.touchEdgeGuard && cB.touchSpeedCurve
    }
  },
  35267: (cB, Bc, nc) => {
    function Vc(cB, Bc, nc, Vc) {
      return !(nc && !cB.aimable) && (!Bc || cB.gun && "head" !== Vc)
    }

    function Ic(cB) {
      return Math.max(.1 * cB, 1)
    }
    nc.d(Bc, {
      c: () => Ic,
      f: () => Vc
    })
  },
  35270: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => sc,
      e: () => uc
    });
    let Vc = null;
    const Ic = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      rB = {
        crosshairAccuracy: cB => {
          const Bc = Ic.crosshairAccuracy.at(-1);
          Bc ? Bc.hook(cB) : Vc = cB
        },
        turnDamageIndicators: cB => {
          var Bc;
          null === (Bc = Ic.turnDamageIndicators.at(-1)) || void 0 === Bc || Bc.hook(cB)
        }
      };

    function uc(cB, Bc) {
      const nc = {
          hook: Bc
        },
        uc = Ic[cB];
      if (uc.push(nc), "crosshairAccuracy" === cB && null !== Vc) {
        const cB = Vc;
        Vc = null, rB.crosshairAccuracy(cB)
      }
      return () => {
        const cB = uc.indexOf(nc); - 1 !== cB && uc.splice(cB, 1)
      }
    }

    function sc() {
      return rB
    }
  },
  38681: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      startPadGameplay: () => pc
    });
    nc(38543);
    var Vc = nc(38549),
      Ic = nc(2903),
      rB = nc(27),
      uc = nc(37546),
      sc = nc(2848),
      Mc = nc(37567),
      Pc = nc(35),
      qB = nc(2187),
      Oc = nc(36981),
      Tc = nc(7760),
      fc = nc(38554);
    const mB = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var ec = nc(38578),
      tB = nc(7742);
    const Sc = cB => cB.padSneakToggled || !!rB.d.get("clientEscMenuOptions").crouchIsToggle && cB.crouchToggled,
      yB = () => {
        const cB = (() => {
          const cB = (0, Tc.c)();
          let Bc = mB;
          const nc = new fc.d;
          let Vc = !1,
            Ic = 0;
          const rB = () => {
            const nc = performance.now(),
              rB = 0 === Ic ? 0 : nc - Ic;
            if (Ic = nc, !Vc) return cB.discardPending(), null;
            const uc = (0, fc.o)(Bc, rB),
              sc = cB.drainLookDelta(),
              Mc = (0, Oc.g)();
            return {
              QBc: (uc.QBc + sc.QBc) * Mc,
              CBc: (uc.CBc + sc.CBc) * Mc
            }
          };
          return {
            update: (cB, Ic, uc, sc) => {
              cB.camera.nIc !== rB && (cB.camera.nIc = rB), Vc = !0, Bc = (0, fc.p)(nc, Ic, uc, sc, performance.now())
            },
            release: () => {
              Vc = !1, Bc = mB, nc.reset()
            },
            uninstall: cB => {
              cB.camera.nIc === rB && (cB.camera.nIc = null)
            }
          }
        })();
        return {
          update: (Bc, nc, Vc) => {
            cB.update((0, qB.g)(), Bc, nc, Vc)
          },
          release: cB.release,
          uninstall: () => {
            const Bc = (0, qB.g)();
            Bc && cB.uninstall(Bc)
          }
        }
      };
    var zB = nc(38571);
    nc(36223), nc(7613);
    nc(7634).e;
    const pc = () => {
      const cB = (0, zB.c)((() => {
          const cB = {
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
            bodies: () => (0, uc.b)(),
            look: yB(),
            move: (Bc, nc) => {
              const Vc = (0, qB.g)(),
                Ic = Vc.BC.bPc();
              if (cB.x = Bc.x, cB.y = Bc.y, cB.magnitude = Bc.magnitude, cB.headingOffset = Bc.headingOffset, cB.jumpHeld = Bc.jumpHeld, Bc.jumpPressed && (cB.jumpPressedSinceTick = !0), cB.running = Bc.running, cB.sprintHeld = Bc.sprintHeld, nc) {
                const Bc = (0, ec.f)({
                  ...nc,
                  descending: Vc.BC.Qsc(Vc.Pnc).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!Vc.gC.canCrouch,
                  toggled: Sc(Ic)
                });
                cB.crouchHeld = Bc.crouchHeld, Ic.padSneakToggled = Bc.toggled, Ic.crouchToggled = !1, (0, tB.f)(Bc.toggled)
              }
              Ic.gamepad = cB
            },
            stopMoving: () => {
              var Bc;
              Object.assign(cB, {
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
              const nc = null === (Bc = (0, qB.g)()) || void 0 === Bc ? void 0 : Bc.BC.bPc();
              (null === nc || void 0 === nc ? void 0 : nc.gamepad) === cB && (nc.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: cB => {
              const Bc = (0, qB.g)(),
                nc = null === Bc || void 0 === Bc ? void 0 : Bc.BC.bPc();
              "touch" === cB ? ((0, tB.f)(!1), null !== nc && void 0 !== nc && nc.padSneakToggled && (nc.padSneakToggled = !1, nc.isTouchscreen && !nc.gamepad && Bc.BC.cPc(Bc.Pnc).setCrouching(!!Bc.gC.canCrouch && nc.touchCrouch))) : "gamepad" === cB && nc && (0, tB.f)(Sc(nc))
            },
            hasPlayer: () => {
              var cB;
              return !(null === (cB = (0, qB.g)()) || void 0 === cB || !cB.Pnc)
            },
            isPlayerDead: () => {
              var cB;
              const Bc = (0, qB.g)();
              return !1 === (null === (cB = Bc.BC.hMc(Bc.Pnc)) || void 0 === cB ? void 0 : cB.isAlive)
            },
            isReplayMode: () => {
              var cB, Bc;
              return !(null === (cB = (0, qB.e)()) || void 0 === cB || null === (Bc = cB.client) || void 0 === Bc || !Bc.isReplayMode())
            },
            isFreeCameraOn: () => {
              var cB, Bc, nc;
              return !(null === (cB = (0, qB.e)()) || void 0 === cB || null === (Bc = cB.client) || void 0 === Bc || null === (nc = Bc.freeCameraController) || void 0 === nc || !nc.isEnabled())
            },
            targetsBlock: () => !!(0, qB.g)().Isc,
            selectedSlotEmpty: () => {
              var cB;
              const Bc = (0, qB.g)();
              return !(null !== (cB = Bc.BC.nMc(Bc.Pnc)) && void 0 !== cB && cB.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const cB = (0, qB.g)().gC;
              return !!cB.creative && !!cB.canPickBlocks
            },
            scrollHotbar: cB => {
              Pc.i.Vu("ScrollInventorySlot", cB)
            },
            hasFullInventory: () => (0, Mc.d)((0, qB.g)()),
            hasLobbyLeaderboard: () => !!(0, qB.g)().gC.lobbyLeaderboardInfo,
            contextActionInputs: () => {
              var cB, Bc, nc, Vc;
              const Ic = (0, qB.g)();
              return {
                holdingGun: !(null === (cB = Ic.BC.aPc(Ic.Pnc)) || void 0 === cB || null === (Bc = cB.vY) || void 0 === Bc || !Bc.isGun()),
                customButtons: null !== (nc = Ic.gC.customButtons) && void 0 !== nc ? nc : null,
                touchscreenActionButton: null !== (Vc = Ic.gC.touchscreenActionButton) && void 0 !== Vc ? Vc : null
              }
            },
            pressTouchButton: cB => {
              (0, sc.sendColyMessage)(Ic.Xi, cB)
            }
          }
        })()),
        Bc = (0, Vc.b)(),
        nc = null,
        rB = null;
      return () => {
        cB(), Bc(), null === nc || void 0 === nc || nc(), null === rB || void 0 === rB || rB()
      }
    }
  },
  35253: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => rB,
      h: () => ec,
      i: () => tB,
      m: () => sc,
      p: () => Tc,
      q: () => Sc,
      t: () => Oc,
      w: () => zB,
      x: () => mB,
      y: () => yB
    });
    var Vc = nc(27),
      Ic = nc(35);
    const rB = "clientGameInventoryButtonsChanged",
      uc = new Map;

    function sc() {
      return [...uc.values()].sort(((cB, Bc) => {
        var nc, Vc;
        return (null !== (nc = cB.order) && void 0 !== nc ? nc : 0) - (null !== (Vc = Bc.order) && void 0 !== Vc ? Vc : 0)
      }))
    }
    let Mc = null;

    function Pc(cB) {
      Mc = cB
    }
    let qB = !1;

    function Oc(cB) {
      qB = !0;
      try {
        cB.onClick()
      } finally {
        qB = !1
      }
      cB.panel && "clientGame" === Vc.d.get("openInGameMenuName") && Pc(cB.id)
    }

    function Tc() {
      return qB
    }

    function fc() {
      return sc().filter((cB => cB.panel && !cB.disabled))
    }

    function mB(cB) {
      const Bc = fc(),
        nc = Bc.findIndex((cB => cB.id === Mc));
      return !(nc < 0 || Bc.length < 2) && (Oc(Bc[(nc + cB + Bc.length) % Bc.length]), !0)
    }

    function ec() {
      return null !== Mc && fc().length > 1
    }

    function tB() {
      Pc(null)
    }

    function Sc() {
      "inventory" !== Vc.d.get("openInGameMenuName") && Pc(null)
    }

    function yB() {
      const cB = Mc;
      return Pc(null), cB
    }

    function zB(cB) {
      return uc.set(cB.id, cB), Ic.i.Vu(rB, sc(), !0), () => {
        uc.get(cB.id) === cB && (uc.delete(cB.id), Ic.i.Vu(rB, sc()))
      }
    }
  },
  35247: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => sc,
      f: () => tB,
      j: () => Sc,
      m: () => Tc,
      o: () => Pc,
      s: () => ec,
      w: () => fc,
      x: () => qB
    });
    var Vc = nc(27),
      Ic = nc(35),
      rB = nc(1142),
      uc = nc(35253);
    const sc = "clientGameUiChanged";
    let Mc = null;

    function Pc() {
      return Mc
    }

    function qB(cB, Bc) {
      const nc = {
        content: cB,
        menu: Bc
      };
      return Mc = nc, Ic.i.Vu(sc, Mc, !0), () => {
        Mc === nc && (Mc = null, mB = !1, tB(), Ic.i.Vu(sc, null))
      }
    }
    let Oc = null;

    function Tc() {
      return Oc
    }

    function fc(cB) {
      return Oc = cB, () => {
        Oc === cB && (Oc = null)
      }
    }
    let mB = !1;

    function ec() {
      const cB = Vc.d.get("openInGameMenuName");
      "clientGame" !== cB && (mB = "inventory" === cB), (0, uc.p)() || (0, uc.i)(), (0, rB.o)("InGameMenu"), Vc.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function tB() {
      yB(!1)
    }

    function Sc() {
      yB(mB)
    }

    function yB(cB) {
      "clientGame" === Vc.d.get("openInGameMenuName") && Vc.d.set({
        openInGameMenuName: cB ? "inventory" : null
      }), cB || (0, uc.i)(), mB = !1
    }
  },
  35132: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Mc
    });
    var Vc = nc(244),
      Ic = nc(27),
      rB = nc(35136),
      uc = nc(1464),
      sc = nc(1613);

    function Mc(cB, Bc) {
      var nc, Mc, Pc;
      if (!Ic.d.get("isKeydownEnabled") || cB.repeat) return;
      const qB = cB.code;
      "Escape" === cB.key ? (0, uc.h)(cB) : null !== (nc = sc.v.OpenSettings) && void 0 !== nc && nc.includes(qB) ? (0, uc.w)(cB, Vc.i.SETTINGS) : null !== (Mc = sc.v.OpenCharacterCustomization) && void 0 !== Mc && Mc.includes(qB) ? (0, rB.b)() || (0, uc.w)(cB, Vc.i.CUSTOMISATION, Bc()) : null !== (Pc = sc.v.ShowDebugOverlay) && void 0 !== Pc && Pc.includes(qB) && Ic.d.set({
        showDebugOverlay: !Ic.d.get("showDebugOverlay")
      })
    }
  },
  35167: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Vc,
      g: () => qB,
      k: () => Pc,
      m: () => Mc
    });
    const Vc = 45,
      Ic = 6,
      rB = 4;
    let uc = null,
      sc = !1;

    function Mc() {
      return sc || (window.addEventListener("resize", Pc), sc = !0), uc ??= function() {
        const cB = getComputedStyle(document.documentElement),
          Bc = parseFloat(cB.fontSize),
          nc = parseFloat(cB.getPropertyValue("--touch-hotbar-row-reach")) || Bc * rB;
        return Math.max(10, 50 - (Bc * Ic + nc) / window.innerHeight * 100)
      }(), uc
    }

    function Pc() {
      uc = null
    }

    function qB(cB, Bc, nc, Vc) {
      const Ic = Math.min(Math.abs(cB) > .001 ? nc / Math.abs(cB) : 1 / 0, Math.abs(Bc) > .001 ? Vc / Math.abs(Bc) : 1 / 0);
      return {
        x: 50 + cB * Ic,
        y: 50 + Bc * Ic
      }
    }
  },
  3907: (cB, Bc, nc) => {
    nc.d(Bc, {
      Howl: () => Vc.Howl,
      d: () => Vc.Howler
    });
    var Vc = nc(3909);
    Vc.Howler._mobileUnloaded = !0
  },
  35121: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => ec,
      d: () => tB
    });
    var Vc = nc(867),
      Ic = nc(283),
      rB = nc(302),
      uc = nc(876),
      sc = nc(3638),
      Mc = nc(107),
      Pc = nc(145),
      qB = nc(1495),
      Oc = nc(125),
      Tc = nc(35124),
      fc = nc(51),
      mB = nc(946);

    function ec() {
      var cB, Bc;
      return [...null !== (cB = navigator.languages) && void 0 !== cB ? cB : [null !== (Bc = navigator.language) && void 0 !== Bc ? Bc : "none"], "En-Gb"]
    }

    function tB(cB, Bc, nc, tB, Sc) {
      const yB = (0, Vc.k)(Bc) ? (0, Vc.r)(Bc) : null,
        zB = {
          cookies: (0, qB.getAllCookiesForGameNameWithVariation)(Bc),
          isMobile: (0, Mc.isMobile)(),
          isUsingCustomGameTexturePack: null !== yB && Sc(yB),
          generalCookies: {
            joinDiscord: !!fc.h.getItem("DiscordPressed"),
            newGo: sc.b,
            ...cB.getMetricsCookies(),
            trafficCode: tB,
            compliance: Mc.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, Mc.getBrowserName)(),
            version: (0, Mc.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, Mc.getPlatformType)(),
            deviceType: (0, Oc.b)()
          },
          isLoggedIn: cB.isLoggedIn(),
          lobbyName: nc,
          languages: ec(),
          version: Ic.c,
          siteUsed: Pc.r,
          subsiteUsed: Pc.A,
          playSessionId: (0, Tc.l)(Bc),
          visitSessionId: (0, mB.e)()
        };
      return null !== yB && (0, rB.gc)(yB) ? (zB.lobbyName = (0, Vc.g)(yB, (0, Vc.o)(Bc), nc), {
        roomName: `classic_${uc.c}`,
        joinOptions: zB
      }) : {
        roomName: Bc,
        joinOptions: zB
      }
    }
  },
  35383: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc,
      g: () => Ic,
      i: () => Vc
    });

    function Vc(cB) {
      return cB.replace(/[_\-\s]*\d+$/, "") || cB
    }

    function Ic(cB, Bc, nc) {
      return nc <= 0 ? 0 : cB * nc / Math.max(Bc, nc)
    }

    function rB(cB, Bc) {
      const nc = cB.getDurationMs();
      return nc > 0 ? cB.loudness * Math.max(0, 1 - (Bc - cB.startMs) / nc) : 0
    }
    class uc {
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = cB, this.maxPerGroup = Bc, this.voices = []
      }
      admit(cB) {
        if (this.voices = this.voices.filter((cB => cB.isAlive())), null !== cB.group) {
          const Bc = this.voices.filter((Bc => Bc.group === cB.group));
          if (Bc.length >= this.maxPerGroup && !this.dropLeastWorth(Bc, cB)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, cB)) && (this.voices.push(cB), !0)
      }
      dropLeastWorth(cB, Bc) {
        let nc = null,
          Vc = 1 / 0;
        for (const Ic of cB) {
          if (!Ic.canStop()) continue;
          const cB = rB(Ic, Bc.startMs);
          cB < Vc && (nc = Ic, Vc = cB)
        }
        return !(!nc || Bc.loudness < Vc) && (this.voices.splice(this.voices.indexOf(nc), 1), nc.stop(), !0)
      }
    }
  },
  35397: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => rB,
      g: () => uc,
      j: () => Vc
    });
    class Vc {
      constructor(cB) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = cB
      }
      setMultiplierType(cB, Bc) {
        var nc;
        this.multipliers[cB] = Bc, null === (nc = this._onUpdate) || void 0 === nc || nc.call(this)
      }
      removeMultiplier(cB) {
        var Bc;
        delete this.multipliers[cB], null === (Bc = this._onUpdate) || void 0 === Bc || Bc.call(this)
      }
      getMultiplierType(cB) {
        return this.multipliers[cB]
      }
      getTotalMultipliedVal() {
        let cB = 1;
        for (const Bc in this.multipliers) cB *= this.multipliers[Bc];
        return cB
      }
    }
    class Ic {
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = cB
      }
      setBooleanType(cB, Bc) {
        const nc = this._getTotalBooleanVal();
        this.booleans[cB] = !!Bc;
        const Vc = this.getTotalBooleanVal();
        var Ic;
        Vc !== nc && (null === (Ic = this._onUpdate) || void 0 === Ic || Ic.call(this, Vc, this.booleans));
        return Vc
      }
      removeBoolean(cB) {
        const Bc = this._getTotalBooleanVal();
        delete this.booleans[cB];
        const nc = this._getTotalBooleanVal();
        var Vc;
        null !== nc && nc !== Bc && (null === (Vc = this._onUpdate) || void 0 === Vc || Vc.call(this, nc, this.booleans));
        return null !== nc && void 0 !== nc && nc
      }
      getBooleanType(cB) {
        return this.booleans[cB]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var cB;
        null === (cB = this._onUpdate) || void 0 === cB || cB.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class rB extends Ic {
      getTotalBooleanVal() {
        const cB = this._getTotalBooleanVal();
        if (null === cB) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return cB
      }
      _getTotalBooleanVal() {
        let cB = !1,
          Bc = !0;
        for (const nc in this.booleans) cB = !0, Bc &&= this.booleans[nc];
        return cB ? Bc : null
      }
    }
    class uc extends Ic {
      getTotalBooleanVal() {
        const cB = this._getTotalBooleanVal();
        if (null === cB) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return cB
      }
      _getTotalBooleanVal() {
        let cB = !1,
          Bc = !1;
        for (const nc in this.booleans) cB = !0, Bc ||= this.booleans[nc];
        return cB ? Bc : null
      }
    }
  },
  35391: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => rB,
      e: () => Vc,
      g: () => Ic
    });
    const Vc = 15,
      Ic = 3,
      rB = 30
  },
  37573: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => sc,
      g: () => rB
    });
    var Vc = nc(3271);
    let Ic = null;

    function rB(cB) {
      return null !== Ic && cB === Ic
    }

    function uc() {
      this.tIc = !1, this.stopPropagation = !1, this.SVc = !1, this.disabled = !1
    }
    class sc {
      constructor(cB, Bc) {
        this.version = "0.7.0";
        var nc = Object.assign({}, new uc, Bc || {});
        this.element = cB || document, this.tIc = !!nc.tIc, this.stopPropagation = !!nc.stopPropagation, this.SVc = !!nc.SVc, this.disabled = !!nc.disabled, this.filterEvents = (cB, Bc) => !0, this.down = new Vc.EventEmitter, this.up = new Vc.EventEmitter, this.state = {}, this.FVc = {
          dx: 0,
          dy: 0,
          Nsc: 0,
          osc: 0,
          Wsc: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? Pc(this) : document.addEventListener("DOMContentLoaded", (cB => {
          Pc(this)
        }), {
          once: !0
        })
      }
      bind(cB) {
        for (var Bc = arguments.length, nc = new Array(Bc > 1 ? Bc - 1 : 0), Vc = 1; Vc < Bc; Vc++) nc[Vc - 1] = arguments[Vc];
        nc.forEach((Bc => {
          var nc = this._keyBindmap[Bc] || [];
          nc.includes(cB) || (nc.push(cB), this._keyBindmap[Bc] = nc)
        })), this.state[cB] = !!this.state[cB], this.pressCount[cB] = this.pressCount[cB] || 0, this.releaseCount[cB] = this.releaseCount[cB] || 0
      }
      unbind(cB) {
        for (var Bc in this._keyBindmap) {
          var nc = this._keyBindmap[Bc],
            Vc = nc.indexOf(cB);
          Vc > -1 && nc.splice(Vc, 1)
        }
      }
      getBindings() {
        var cB = {};
        for (var Bc in this._keyBindmap) {
          this._keyBindmap[Bc].forEach((nc => {
            cB[nc] = cB[nc] || [], cB[nc].push(Bc)
          }))
        }
        return cB
      }
      cn() {
        Mc(this.FVc), Mc(this.pressCount), Mc(this.releaseCount)
      }
    }

    function Mc(cB) {
      for (var Bc in cB) cB[Bc] = 0
    }

    function Pc(cB) {
      window.addEventListener("keydown", tB.bind(null, cB, !0), !1), window.addEventListener("keyup", tB.bind(null, cB, !1), !1);
      var Bc = {
        passive: !0
      };
      cB.element.addEventListener("touchstart", fc.bind(void 0, cB), {
        passive: !1
      }), cB.element.addEventListener("touchend", ec.bind(void 0, cB), Bc), cB.element.addEventListener("mousedown", Sc.bind(null, cB, !0), Bc), window.document.addEventListener("mouseup", Sc.bind(null, cB, !1), Bc), cB.element.addEventListener("touchmove", yB.bind(null, cB), Bc), cB.element.addEventListener("mousemove", yB.bind(null, cB), Bc), window.PointerEvent, cB.element.addEventListener("wheel", zB.bind(null, cB), Bc), cB.element.addEventListener("contextmenu", pc.bind(null, cB), !1), window.addEventListener("blur", lc.bind(null, cB), !1)
    }
    var qB = 0,
      Oc = 0,
      Tc = null;

    function fc(cB, Bc) {
      Bc.preventDefault(), mB(Bc)
    }

    function mB(cB) {
      let Bc = !1;
      for (let nc = 0; nc < cB.touches.length; ++nc)
        if (cB.touches[nc].identifier === Tc) {
          Bc = !0;
          break
        } if (!Bc) {
        const Bc = cB.changedTouches[0];
        qB = Bc.clientX, Oc = Bc.clientY, Tc = Bc.identifier
      }
    }

    function ec(cB, Bc) {
      for (var nc = Bc.changedTouches, Vc = 0; Vc < nc.length; ++Vc) nc[Vc].identifier === Tc && (Tc = null)
    }

    function tB(cB, Bc, nc) {
      try {
        Yc(cB, nc), Bc && nc.isTrusted && !nc.repeat && cB._keyStates[nc.code] && Lc(cB, nc.code)
      } finally {
        gB(nc.code, Bc, cB, nc)
      }
    }

    function Sc(cB, Bc, nc) {
      try {
        Yc(cB, nc)
      } finally {
        ! function(cB, Bc, nc) {
          if ("pointerId" in nc)
            if (Bc) {
              if (null !== cB._touches.currID) return;
              cB._touches.currID = nc.pointerId
            } else {
              if (cB._touches.currID !== nc.pointerId) return;
              cB._touches.currID = null
            } var Vc = "button" in nc ? nc.button + 1 : 1;
          gB("Mouse" + Vc, Bc, cB, nc)
        }(cB, Bc, nc)
      }
    }

    function yB(cB, Bc) {
      var nc = Bc.movementX || Bc.mozMovementX || 0,
        Vc = Bc.movementY || Bc.mozMovementY || 0;
      if (Bc.touches && 0 === (nc | Vc)) {
        var Ic = function(cB) {
          mB(cB);
          for (let Bc = 0; Bc < cB.changedTouches.length; ++Bc)
            if (cB.changedTouches[Bc].identifier == Tc) {
              const nc = cB.changedTouches[Bc],
                Vc = [nc.clientX - qB, nc.clientY - Oc];
              return qB = nc.clientX, Oc = nc.clientY, Vc
            } return console.error(`Did not find touch id ${Tc}`), [0, 0]
        }(Bc);
        nc = Ic[0], Vc = Ic[1]
      }
      cB.FVc.dx += nc, cB.FVc.dy += Vc
    }

    function zB(cB, Bc) {
      Yc(cB, Bc);
      var nc = 1;
      switch (Bc.deltaMode) {
        case 0:
          nc = 1;
          break;
        case 1:
          nc = 12;
          break;
        case 2:
          nc = cB.element.clientHeight || window.innerHeight
      }
      cB.FVc.Nsc += (Bc.deltaX || 0) * nc, cB.FVc.osc += (Bc.deltaY || 0) * nc, cB.FVc.Wsc += (Bc.deltaZ || 0) * nc
    }

    function pc(cB, Bc) {
      if (!cB.SVc) return Bc.preventDefault(), !1
    }
    var hc = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function aB(cB, Bc) {
      return !!cB[hc[Bc]] || ("AltRight" === Bc || "ControlLeft" === Bc) && "function" === typeof cB.getModifierState && !0 === cB.getModifierState("AltGraph")
    }

    function lc(cB) {
      for (var Bc in cB._modifiersHeldThroughBlur = {}, hc) cB._keyStates[Bc] && (cB._modifiersHeldThroughBlur[Bc] = !0)
    }

    function Yc(cB, Bc) {
      var nc = cB._modifiersHeldThroughBlur;
      if (nc && Bc.isTrusted && document.hasFocus())
        for (var Vc in nc) delete nc[Vc], cB._keyStates[Vc] && Vc !== Bc.code && (aB(Bc, Vc) || Lc(cB, Vc))
    }

    function Lc(cB, Bc) {
      const nc = {
          code: Bc,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        Vc = Ic;
      Ic = nc;
      try {
        gB(Bc, !1, cB, nc)
      } finally {
        Ic = Vc
      }
    }

    function gB(cB, Bc, nc, Vc) {
      var Ic = nc._keyBindmap[cB];
      Ic && (Uc(nc._keyStates[cB], Bc) && (nc._keyStates[cB] = Bc, Ic.forEach((cB => {
        (!nc.filterEvents || nc.filterEvents(Vc, cB)) && function(cB, Bc, nc, Vc) {
          var Ic = Bc ? nc.pressCount : nc.releaseCount;
          Ic[cB] = (Ic[cB] || 0) + 1;
          var rB = nc._bindPressCount[cB] || 0;
          (rB += Bc ? 1 : -1) < 0 && (rB = 0);
          nc._bindPressCount[cB] = rB;
          var uc = nc.state[cB];
          if (Uc(uc, rB)) {
            nc.state[cB] = rB > 0;
            var sc = Bc ? nc.down : nc.up;
            nc.disabled || sc.emit(cB, Vc)
          }
        }(cB, Bc, nc, Vc)
      }))), "button" in Vc || (nc.tIc && !Vc.defaultPrevented && Vc.preventDefault(), nc.stopPropagation && Vc.stopPropagation()))
    }

    function Uc(cB, Bc) {
      return cB ? !Bc : Bc
    }
  },
  37525: (cB, Bc, nc) => {
    function Vc(cB, Bc, nc, Vc, Ic) {
      var rB = {};
      return Object.keys(Vc).forEach((function(cB) {
        rB[cB] = Vc[cB]
      })), rB.enumerable = !!rB.enumerable, rB.configurable = !!rB.configurable, ("value" in rB || rB.initializer) && (rB.writable = !0), rB = nc.slice().reverse().reduce((function(nc, Vc) {
        return Vc(cB, Bc, nc) || nc
      }), rB), Ic && void 0 !== rB.initializer && (rB.value = rB.initializer ? rB.initializer.call(Ic) : void 0, rB.initializer = void 0), void 0 === rB.initializer && (Object.defineProperty(cB, Bc, rB), rB = null), rB
    }
    nc.d(Bc, {
      e: () => Vc
    })
  },
  37517: (cB, Bc, nc) => {
    function Vc(cB, Bc, nc, Vc) {
      nc && Object.defineProperty(cB, Bc, {
        enumerable: nc.enumerable,
        configurable: nc.configurable,
        writable: nc.writable,
        value: nc.initializer ? nc.initializer.call(Vc) : void 0
      })
    }
    nc.d(Bc, {
      c: () => Vc
    })
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);