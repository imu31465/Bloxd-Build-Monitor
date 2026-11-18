export const id = 103;
export const ids = [103];
export const modules = {
  39045: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      startWasmPadGameplay: () => ab
    });
    Wy(39051);
    var Uy = Wy(39060),
      hy = Wy(39081),
      fy = Wy(1595),
      Zy = Wy(39097),
      cb = Wy(4001),
      Py = Wy(3991),
      oy = Wy(39102),
      By = Wy(39108),
      Ky = Wy(4013),
      ey = Wy(39179),
      qb = Wy(1983),
      sy = Wy(7993),
      Sy = Wy(39068),
      Ey = Wy(7968);
    const ly = yb => {
        const bb = Ky.b.indexOf(yb);
        if (bb < 0) throw new Error(`No core action "${yb}"`);
        return bb
      },
      mb = ly("primary-fire"),
      Cy = ly("alt-fire"),
      Ty = ly("mid-fire"),
      Vy = ly("jump"),
      Jy = ly("ReloadGun"),
      gb = ly("SwapCameraZoom"),
      Gy = ly("TouchAction1"),
      Oy = {
        SpecialAction1: ly("SpecialAction1"),
        SpecialAction2: ly("SpecialAction2")
      },
      Ry = (yb, bb) => {
        (0, qb.v)(cb.z.PadAction, yb, 0, 0, (0, qb.s)(bb, performance.now()))
      },
      vb = yb => {
        Ry(yb, Zy.Bd.Down)
      },
      ib = yb => {
        Ry(yb, 0)
      },
      My = yb => {
        vb(yb), ib(yb)
      },
      Yy = () => {
        const yb = (0, By.i)();
        return null !== yb && void 0 !== yb && yb.isCoreRunning ? yb : null
      },
      Xy = yb => Zy.s.playerFlags(yb.api.apiView, 0),
      ny = yb => null !== yb && Zy.s.targetBlockId(yb.api.apiView, 0) !== Zy.kd,
      uy = () => {
        const yb = (0, sy.b)(),
          bb = new Sy.b;
        let Wy = !1;
        const Uy = (yb, bb) => {
            (0, qb.v)(cb.z.PadLook, Zy.Jd.Rate, yb, bb, 0)
          },
          hy = () => {
            Wy = !1, bb.reset(), Uy(0, 0)
          };
        return {
          update: (hy, fy, Py) => {
            Wy || (yb.discardPending(), Wy = !0);
            const oy = (0, Sy.k)(bb, hy, fy, Py, performance.now());
            Uy(oy.yawRadPerSec, oy.pitchRadPerSec);
            const By = yb.drainLookDelta();
            0 === By.aWy && 0 === By.Fby || (0, qb.v)(cb.z.PadLook, Zy.Jd.Gyro, By.aWy, By.Fby, 0)
          },
          release: hy,
          uninstall: hy
        }
      },
      rb = () => {
        const yb = Yy();
        return null !== yb && 0 !== (Xy(yb) & Zy.Od.PadSneakToggled)
      },
      Hy = () => {
        const yb = (yb => {
          const bb = yb => function() {
            return (0, ey.e)(), yb(...arguments)
          };
          return {
            primaryFireDown: bb((() => (vb(mb), 0))),
            primaryFireUp: bb((() => {
              ib(mb)
            })),
            altFireDown: bb((() => (vb(Cy), 0))),
            altFireUp: bb((() => {
              ib(Cy)
            })),
            jumpDown: bb((() => {
              My(Vy)
            })),
            specialActionDown: bb((yb => {
              vb(Oy[yb])
            })),
            specialActionUp: bb((yb => {
              ib(Oy[yb])
            })),
            reloadGun: bb((() => {
              My(Jy)
            })),
            dropItem: bb((yb => {
              Ry(Zy.Ed.Drop, Zy.Bd.Down | (yb ? Zy.Bd.Stack : 0))
            })),
            swapCameraZoom: bb((() => {
              My(gb)
            })),
            Fq: bb((() => (My(Ty), ny(yb()))))
          }
        })(Yy);
        let bb = !1,
          Wy = null;
        const Uy = () => {
          var yb;
          null === (yb = Wy) || void 0 === yb || yb(), Wy = null
        };
        return {
          bodies: () => yb,
          look: uy(),
          move: (yb, Wy) => {
            var hy;
            Uy();
            const {
              bits: fy,
              flips: cb
            } = (yb => {
              if (null === yb) return {
                bits: Zy.Hd.Peek,
                flips: 0
              };
              const bb = yb.sneakHeld ? Zy.Hd.SneakHeld : 0;
              return "hold" === yb.mode ? {
                bits: bb | Zy.Hd.SneakHoldMode,
                flips: yb.sneakTogglePressed ? 1 : 0
              } : {
                bits: bb,
                flips: yb.sneakPressed || yb.sneakTogglePressed ? 1 : 0
              }
            })(Wy);
            null !== (hy = Yy()) && void 0 !== hy && hy.padMove(yb.x, yb.y, yb.magnitude, yb.headingOffset, (yb => Zy.Hd.Active | (yb.jumpHeld ? Zy.Hd.JumpHeld : 0) | (yb.jumpPressed ? Zy.Hd.JumpPressed : 0) | (yb.running ? Zy.Hd.Running : 0) | (yb.sprintHeld ? Zy.Hd.SprintHeld : 0))(yb) | fy, cb) && (bb = !0), (0, Ey.e)(rb())
          },
          stopMoving: () => {
            var yb;
            bb && (bb = !(null !== (yb = Yy()) && void 0 !== yb && yb.padMove(0, 0, 0, 0, 0, 0)), Uy(), Wy = (0, Py.z)((() => {
              Uy(), (0, Ey.e)(rb())
            })))
          },
          uninstall: Uy,
          deviceChanged: yb => {
            var Wy;
            "touch" === yb ? ((0, Ey.e)(!1), null !== (Wy = Yy()) && void 0 !== Wy && Wy.padMove(0, 0, 0, 0, Zy.Hd.EndToggle, 0) && (bb = !1)) : "gamepad" === yb && (0, Ey.e)(rb())
          },
          hasPlayer: () => null !== Yy(),
          isPlayerDead: () => {
            var yb;
            return !1 === (null === (yb = Yy()) || void 0 === yb ? void 0 : yb.localPlayerAlive())
          },
          isReplayMode: () => {
            const yb = Yy();
            return null !== yb && 0 !== (Xy(yb) & Zy.Od.Replay)
          },
          isFreeCameraOn: () => {
            const yb = Yy();
            return null !== yb && 0 !== (Xy(yb) & Zy.Od.FreeCam)
          },
          targetsBlock: () => ny(Yy()),
          selectedSlotEmpty: () => {
            var yb;
            return !(null !== (yb = Yy()) && void 0 !== yb && yb.items.kW())
          },
          pickBlockAllowed: () => !!fy.c.get("creative") && !!fy.c.get("canPickBlocks"),
          scrollHotbar: yb => {
            Ry(Zy.Ed.Hotbar, Zy.Bd.Down | (yb > 0 ? Zy.Bd.Next : 0))
          },
          hasFullInventory: oy.k,
          hasLobbyLeaderboard: () => !!fy.c.get("lobbyLeaderboardInfo"),
          contextActionInputs: () => {
            var yb, bb, Wy, Uy;
            const hy = Yy();
            return {
              holdingGun: !1 !== (null === hy || void 0 === hy ? void 0 : hy.localPlayerAlive()) && "Gun" === (null === hy || void 0 === hy || null === (yb = hy.items.kW()) || void 0 === yb || null === (bb = yb.typeObj) || void 0 === bb ? void 0 : bb.type),
              customButtons: null !== (Wy = fy.c.get("customButtons")) && void 0 !== Wy ? Wy : null,
              touchscreenActionButton: null !== (Uy = fy.c.get("touchscreenActionButton")) && void 0 !== Uy ? Uy : null
            }
          },
          pressTouchButton: yb => {
            yb ? vb(Gy) : ib(Gy)
          }
        }
      },
      ab = () => {
        const yb = (0, hy.e)(Hy()),
          bb = (0, Uy.d)(),
          Wy = null;
        return () => {
          yb(), bb(), null === Wy || void 0 === Wy || Wy()
        }
      }
  },
  39179: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Zy,
      f: () => fy,
      i: () => hy
    });
    let Uy = null;

    function hy(yb) {
      Uy = yb
    }

    function fy(yb) {
      Uy === yb && (Uy = null)
    }

    function Zy() {
      var yb;
      null === (yb = Uy) || void 0 === yb || yb()
    }
  },
  8556: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => hy,
      g: () => fy
    });
    var Uy = Wy(8504);
    const hy = "Air",
      fy = Object.freeze(new Uy.h(hy, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  35662: (yb, bb, Wy) => {
    function Uy(yb) {
      return yb.includes("Leaf Bed")
    }

    function hy(yb) {
      return / Bed(?: Head)?(?:\||$)/.test(yb) && !Uy(yb)
    }

    function fy(yb) {
      return yb.includes(" Strongbed")
    }

    function Zy(yb) {
      return Uy(yb) || hy(yb) || fy(yb)
    }
    Wy.d(bb, {
      e: () => Zy,
      f: () => Uy,
      g: () => fy,
      k: () => hy
    })
  },
  35658: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => oy
    });
    var Uy = Wy(35662),
      hy = Wy(8459);
    const fy = [],
      Zy = [],
      cb = [],
      Py = [];
    for (const By of Object.keys(hy.m))(0, Uy.f)(By) ? fy.push(By) : (0, Uy.k)(By) && Zy.push(By), (0, Uy.g)(By) && cb.push(By), (By.includes(" Bed Head") || By.includes(" Strongbed Head")) && Py.push(By);
    const oy = {
      leafBeds: fy,
      woolBeds: Zy,
      strongBeds: cb,
      beds: [...fy, ...Zy, ...cb],
      bedHeads: Py,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  5736: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Zy,
      g: () => hy,
      k: () => Py,
      l: () => fy,
      m: () => oy,
      q: () => Uy,
      t: () => cb
    });
    let Uy = function(yb) {
        return yb[yb.DEFAULT = 0] = "DEFAULT", yb[yb.BOAT = 1] = "BOAT", yb[yb.GLIDER = 2] = "GLIDER", yb[yb.BALLOON = 3] = "BALLOON", yb[yb.SLEEPING = 4] = "SLEEPING", yb[yb.RIDING_MOB = 5] = "RIDING_MOB", yb[yb.CAR = 6] = "CAR", yb[yb.HOVERCRAFT = 7] = "HOVERCRAFT", yb
      }({}),
      hy = function(yb) {
        return yb[yb.WOOD = 0] = "WOOD", yb[yb.OBSIDIAN = 1] = "OBSIDIAN", yb[yb.SPEED = 2] = "SPEED", yb
      }({}),
      fy = function(yb) {
        return yb[yb.WOOD = 0] = "WOOD", yb[yb.IRON = 1] = "IRON", yb[yb.GOLD = 2] = "GOLD", yb[yb.DIAMOND = 3] = "DIAMOND", yb
      }({}),
      Zy = function(yb) {
        return yb[yb.YELLOW = 0] = "YELLOW", yb[yb.WHITE = 1] = "WHITE", yb[yb.RED = 2] = "RED", yb[yb.PURPLE = 3] = "PURPLE", yb[yb.PINK = 4] = "PINK", yb[yb.ORANGE = 5] = "ORANGE", yb[yb.MAGENTA = 6] = "MAGENTA", yb[yb.LIME = 7] = "LIME", yb[yb.LIGHT_GRAY = 8] = "LIGHT_GRAY", yb[yb.LIGHT_BLUE = 9] = "LIGHT_BLUE", yb[yb.GREEN = 10] = "GREEN", yb[yb.GRAY = 11] = "GRAY", yb[yb.CYAN = 12] = "CYAN", yb[yb.BROWN = 13] = "BROWN", yb[yb.BLUE = 14] = "BLUE", yb[yb.BLACK = 15] = "BLACK", yb
      }({}),
      cb = function(yb) {
        return yb[yb.ROTATION_1 = 0] = "ROTATION_1", yb[yb.ROTATION_2 = 1] = "ROTATION_2", yb[yb.ROTATION_3 = 2] = "ROTATION_3", yb[yb.ROTATION_4 = 3] = "ROTATION_4", yb
      }({}),
      Py = function(yb) {
        return yb[yb.KART = 0] = "KART", yb[yb.OFF_ROADER = 1] = "OFF_ROADER", yb[yb.CAR = 2] = "CAR", yb[yb.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", yb[yb.ARMORED_CAR = 4] = "ARMORED_CAR", yb[yb.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", yb[yb.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", yb[yb.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", yb
      }({});
    Uy.DEFAULT, Uy.BOAT, hy.SPEED, Uy.GLIDER, fy.DIAMOND, Uy.BALLOON, Zy.BLACK, Uy.SLEEPING, cb.ROTATION_4, Uy.RIDING_MOB, Uy.CAR, Py.MOONSTONE_MINING_DRILL, Uy.HOVERCRAFT;
    let oy = function(yb) {
      return yb[yb.NORMAL = 0] = "NORMAL", yb[yb.GLIDING = 1] = "GLIDING", yb[yb.FLOATING = 2] = "FLOATING", yb
    }({})
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);