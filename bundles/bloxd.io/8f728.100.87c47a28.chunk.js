export const id = 100;
export const ids = [100];
export const modules = {
  38536: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      startWasmPadGameplay: () => oc
    });
    nc(38543);
    var Vc = nc(38549),
      Ic = nc(38571),
      rB = nc(1594),
      uc = nc(38582),
      sc = nc(3846),
      Mc = nc(3828),
      Pc = nc(38590),
      qB = nc(38598),
      Oc = nc(3857),
      Tc = nc(38672),
      fc = nc(1934),
      mB = nc(7760),
      ec = nc(38554),
      tB = nc(7742);
    const Sc = cB => {
        const Bc = Oc.e.indexOf(cB);
        if (Bc < 0) throw new Error(`No core action "${cB}"`);
        return Bc
      },
      yB = Sc("primary-fire"),
      zB = Sc("alt-fire"),
      pc = Sc("mid-fire"),
      hc = Sc("jump"),
      aB = Sc("ReloadGun"),
      lc = Sc("SwapCameraZoom"),
      Yc = Sc("TouchAction1"),
      Lc = {
        SpecialAction1: Sc("SpecialAction1"),
        SpecialAction2: Sc("SpecialAction2")
      },
      gB = (cB, Bc) => {
        (0, fc.t)(sc.w.PadAction, cB, 0, 0, (0, fc.s)(Bc, performance.now()))
      },
      Uc = cB => {
        gB(cB, uc.jd.Down)
      },
      bB = cB => {
        gB(cB, 0)
      },
      Zc = cB => {
        Uc(cB), bB(cB)
      },
      Qc = () => {
        const cB = (0, qB.e)();
        return null !== cB && void 0 !== cB && cB.isCoreRunning ? cB : null
      },
      Cc = cB => uc.v.playerFlags(cB.api.apiView, 0),
      vB = cB => null !== cB && uc.v.targetBlockId(cB.api.apiView, 0) !== uc.Sc,
      Dc = () => {
        const cB = (0, mB.c)(),
          Bc = new ec.d;
        let nc = !1;
        const Vc = (cB, Bc) => {
            (0, fc.t)(sc.w.PadLook, uc.rd.Rate, cB, Bc, 0)
          },
          Ic = () => {
            nc = !1, Bc.reset(), Vc(0, 0)
          };
        return {
          update: (Ic, rB, Mc) => {
            nc || (cB.discardPending(), nc = !0);
            const Pc = (0, ec.p)(Bc, Ic, rB, Mc, performance.now());
            Vc(Pc.yawRadPerSec, Pc.pitchRadPerSec);
            const qB = cB.drainLookDelta();
            0 === qB.QBc && 0 === qB.CBc || (0, fc.t)(sc.w.PadLook, uc.rd.Gyro, qB.QBc, qB.CBc, 0)
          },
          release: Ic,
          uninstall: Ic
        }
      },
      Nc = () => {
        const cB = Qc();
        return null !== cB && 0 !== (Cc(cB) & uc.vd.PadSneakToggled)
      },
      Ec = () => {
        const cB = (cB => {
          const Bc = cB => function() {
            return (0, Tc.d)(), cB(...arguments)
          };
          return {
            primaryFireDown: Bc((() => (Uc(yB), 0))),
            primaryFireUp: Bc((() => {
              bB(yB)
            })),
            altFireDown: Bc((() => (Uc(zB), 0))),
            altFireUp: Bc((() => {
              bB(zB)
            })),
            jumpDown: Bc((() => {
              Zc(hc)
            })),
            specialActionDown: Bc((cB => {
              Uc(Lc[cB])
            })),
            specialActionUp: Bc((cB => {
              bB(Lc[cB])
            })),
            reloadGun: Bc((() => {
              Zc(aB)
            })),
            dropItem: Bc((cB => {
              gB(uc.nd.Drop, uc.jd.Down | (cB ? uc.jd.Stack : 0))
            })),
            swapCameraZoom: Bc((() => {
              Zc(lc)
            })),
            uL: Bc((() => (Zc(pc), vB(cB()))))
          }
        })(Qc);
        let Bc = !1,
          nc = null;
        const Vc = () => {
          var cB;
          null === (cB = nc) || void 0 === cB || cB(), nc = null
        };
        return {
          bodies: () => cB,
          look: Dc(),
          move: (cB, nc) => {
            var Ic;
            Vc();
            const {
              bits: rB,
              flips: sc
            } = (cB => {
              if (null === cB) return {
                bits: uc.pd.Peek,
                flips: 0
              };
              const Bc = cB.sneakHeld ? uc.pd.SneakHeld : 0;
              return "hold" === cB.mode ? {
                bits: Bc | uc.pd.SneakHoldMode,
                flips: cB.sneakTogglePressed ? 1 : 0
              } : {
                bits: Bc,
                flips: cB.sneakPressed || cB.sneakTogglePressed ? 1 : 0
              }
            })(nc);
            null !== (Ic = Qc()) && void 0 !== Ic && Ic.padMove(cB.x, cB.y, cB.magnitude, cB.headingOffset, (cB => uc.pd.Active | (cB.jumpHeld ? uc.pd.JumpHeld : 0) | (cB.jumpPressed ? uc.pd.JumpPressed : 0) | (cB.running ? uc.pd.Running : 0) | (cB.sprintHeld ? uc.pd.SprintHeld : 0))(cB) | rB, sc) && (Bc = !0), (0, tB.f)(Nc())
          },
          stopMoving: () => {
            var cB;
            Bc && (Bc = !(null !== (cB = Qc()) && void 0 !== cB && cB.padMove(0, 0, 0, 0, 0, 0)), Vc(), nc = (0, Mc.v)((() => {
              Vc(), (0, tB.f)(Nc())
            })))
          },
          uninstall: Vc,
          deviceChanged: cB => {
            var nc;
            "touch" === cB ? ((0, tB.f)(!1), null !== (nc = Qc()) && void 0 !== nc && nc.padMove(0, 0, 0, 0, uc.pd.EndToggle, 0) && (Bc = !1)) : "gamepad" === cB && (0, tB.f)(Nc())
          },
          hasPlayer: () => null !== Qc(),
          isPlayerDead: () => {
            var cB;
            return !1 === (null === (cB = Qc()) || void 0 === cB ? void 0 : cB.localPlayerAlive())
          },
          isReplayMode: () => {
            const cB = Qc();
            return null !== cB && 0 !== (Cc(cB) & uc.vd.Replay)
          },
          isFreeCameraOn: () => {
            const cB = Qc();
            return null !== cB && 0 !== (Cc(cB) & uc.vd.FreeCam)
          },
          targetsBlock: () => vB(Qc()),
          selectedSlotEmpty: () => {
            var cB;
            return !(null !== (cB = Qc()) && void 0 !== cB && cB.items.XB())
          },
          pickBlockAllowed: () => !!rB.d.get("creative") && !!rB.d.get("canPickBlocks"),
          scrollHotbar: cB => {
            gB(uc.nd.Hotbar, uc.jd.Down | (cB > 0 ? uc.jd.Next : 0))
          },
          hasFullInventory: Pc.m,
          hasLobbyLeaderboard: () => !!rB.d.get("lobbyLeaderboardInfo"),
          contextActionInputs: () => {
            var cB, Bc, nc, Vc;
            const Ic = Qc();
            return {
              holdingGun: !1 !== (null === Ic || void 0 === Ic ? void 0 : Ic.localPlayerAlive()) && "Gun" === (null === Ic || void 0 === Ic || null === (cB = Ic.items.XB()) || void 0 === cB || null === (Bc = cB.typeObj) || void 0 === Bc ? void 0 : Bc.type),
              customButtons: null !== (nc = rB.d.get("customButtons")) && void 0 !== nc ? nc : null,
              touchscreenActionButton: null !== (Vc = rB.d.get("touchscreenActionButton")) && void 0 !== Vc ? Vc : null
            }
          },
          pressTouchButton: cB => {
            cB ? Uc(Yc) : bB(Yc)
          }
        }
      },
      oc = () => {
        const cB = (0, Ic.c)(Ec()),
          Bc = (0, Vc.b)(),
          nc = null;
        return () => {
          cB(), Bc(), null === nc || void 0 === nc || nc()
        }
      }
  },
  38672: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => uc,
      g: () => rB,
      h: () => Ic
    });
    let Vc = null;

    function Ic(cB) {
      Vc = cB
    }

    function rB(cB) {
      Vc === cB && (Vc = null)
    }

    function uc() {
      var cB;
      null === (cB = Vc) || void 0 === cB || cB()
    }
  },
  8327: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Ic,
      f: () => rB
    });
    var Vc = nc(8290);
    const Ic = "Air",
      rB = Object.freeze(new Vc.f(Ic, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  35538: (cB, Bc, nc) => {
    function Vc(cB) {
      return cB.includes("Leaf Bed")
    }

    function Ic(cB) {
      return / Bed(?: Head)?(?:\||$)/.test(cB) && !Vc(cB)
    }

    function rB(cB) {
      return cB.includes(" Strongbed")
    }

    function uc(cB) {
      return Vc(cB) || Ic(cB) || rB(cB)
    }
    nc.d(Bc, {
      c: () => uc,
      g: () => Vc,
      k: () => rB,
      o: () => Ic
    })
  },
  35531: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Pc
    });
    var Vc = nc(35538),
      Ic = nc(8235);
    const rB = [],
      uc = [],
      sc = [],
      Mc = [];
    for (const qB of Object.keys(Ic.o))(0, Vc.g)(qB) ? rB.push(qB) : (0, Vc.o)(qB) && uc.push(qB), (0, Vc.k)(qB) && sc.push(qB), (qB.includes(" Bed Head") || qB.includes(" Strongbed Head")) && Mc.push(qB);
    const Pc = {
      leafBeds: rB,
      woolBeds: uc,
      strongBeds: sc,
      beds: [...rB, ...uc, ...sc],
      bedHeads: Mc,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  5454: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => uc,
      f: () => Ic,
      i: () => Mc,
      k: () => rB,
      n: () => Pc,
      o: () => Vc,
      s: () => sc
    });
    let Vc = function(cB) {
        return cB[cB.DEFAULT = 0] = "DEFAULT", cB[cB.BOAT = 1] = "BOAT", cB[cB.GLIDER = 2] = "GLIDER", cB[cB.BALLOON = 3] = "BALLOON", cB[cB.SLEEPING = 4] = "SLEEPING", cB[cB.RIDING_MOB = 5] = "RIDING_MOB", cB[cB.CAR = 6] = "CAR", cB[cB.HOVERCRAFT = 7] = "HOVERCRAFT", cB
      }({}),
      Ic = function(cB) {
        return cB[cB.WOOD = 0] = "WOOD", cB[cB.OBSIDIAN = 1] = "OBSIDIAN", cB[cB.SPEED = 2] = "SPEED", cB
      }({}),
      rB = function(cB) {
        return cB[cB.WOOD = 0] = "WOOD", cB[cB.IRON = 1] = "IRON", cB[cB.GOLD = 2] = "GOLD", cB[cB.DIAMOND = 3] = "DIAMOND", cB
      }({}),
      uc = function(cB) {
        return cB[cB.YELLOW = 0] = "YELLOW", cB[cB.WHITE = 1] = "WHITE", cB[cB.RED = 2] = "RED", cB[cB.PURPLE = 3] = "PURPLE", cB[cB.PINK = 4] = "PINK", cB[cB.ORANGE = 5] = "ORANGE", cB[cB.MAGENTA = 6] = "MAGENTA", cB[cB.LIME = 7] = "LIME", cB[cB.LIGHT_GRAY = 8] = "LIGHT_GRAY", cB[cB.LIGHT_BLUE = 9] = "LIGHT_BLUE", cB[cB.GREEN = 10] = "GREEN", cB[cB.GRAY = 11] = "GRAY", cB[cB.CYAN = 12] = "CYAN", cB[cB.BROWN = 13] = "BROWN", cB[cB.BLUE = 14] = "BLUE", cB[cB.BLACK = 15] = "BLACK", cB
      }({}),
      sc = function(cB) {
        return cB[cB.ROTATION_1 = 0] = "ROTATION_1", cB[cB.ROTATION_2 = 1] = "ROTATION_2", cB[cB.ROTATION_3 = 2] = "ROTATION_3", cB[cB.ROTATION_4 = 3] = "ROTATION_4", cB
      }({}),
      Mc = function(cB) {
        return cB[cB.KART = 0] = "KART", cB[cB.OFF_ROADER = 1] = "OFF_ROADER", cB[cB.CAR = 2] = "CAR", cB[cB.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", cB[cB.ARMORED_CAR = 4] = "ARMORED_CAR", cB[cB.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", cB[cB.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", cB[cB.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", cB
      }({});
    Vc.DEFAULT, Vc.BOAT, Ic.SPEED, Vc.GLIDER, rB.DIAMOND, Vc.BALLOON, uc.BLACK, Vc.SLEEPING, sc.ROTATION_4, Vc.RIDING_MOB, Vc.CAR, Mc.MOONSTONE_MINING_DRILL, Vc.HOVERCRAFT;
    let Pc = function(cB) {
      return cB[cB.NORMAL = 0] = "NORMAL", cB[cB.GLIDING = 1] = "GLIDING", cB[cB.FLOATING = 2] = "FLOATING", cB
    }({})
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);