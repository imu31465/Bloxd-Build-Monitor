export const id = 202;
export const ids = [202];
export const modules = {
  35526: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => hc,
      f: () => pc
    });
    var Vc = nc(3461),
      Ic = nc(1252),
      rB = nc(73),
      uc = nc(5454),
      sc = nc(3443),
      Mc = nc(1142),
      Pc = nc(1566),
      qB = nc(1536),
      Oc = nc(1255),
      Tc = nc(1051),
      fc = nc(35531),
      mB = nc(912),
      ec = nc.n(mB),
      tB = nc(1164),
      Sc = nc(926),
      yB = nc(1134),
      zB = nc(957);
    const pc = "SleepingOverlay";

    function hc() {
      const {
        t: cB
      } = (0, Tc.x)(), [Bc, nc] = (0, rB.useState)(!1), [mB, hc] = (0, rB.useState)(null), [lc, Yc] = (0, rB.useState)(1), [Lc, gB] = (0, rB.useState)(!1), [Uc, bB] = (0, rB.useState)(!1), Zc = (0, rB.useRef)(0), Qc = (0, rB.useRef)(!1), Cc = (0, rB.useRef)(!1), vB = (0, rB.useRef)(), Dc = (0, rB.useRef)(null);

      function Nc() {
        const cB = null !== mB && void 0 !== mB ? mB : "Rested Speed";
        Pc.gameBridge.send("wakeUp", Uc ? cB : null), Dc.current = null, nc(!1), hc(null), Yc(1), gB(!1), bB(!1)
      }

      function Ec() {
        return !Lc && (Nc(), !0)
      }
      return (0, Ic.f)("PlayerPhysicsTypeUpdate", (cB => {
        cB !== Dc.current && (Dc.current = cB, cB === uc.o.SLEEPING ? (Cc.current || (Zc.current = Pc.gameBridge.lookup("cameraZoom", null), Cc.current = !0), Qc.current = !0, Pc.gameBridge.send("setCameraZoom", 3), nc(!0), Yc(function() {
          for (const cB of Pc.gameBridge.lookup("blocksStandingOn", null)) {
            if (fc.b.leafBeds.includes(cB)) return console.log(`Found leaf bed: ${cB}`), 1;
            if (fc.b.woolBeds.includes(cB)) return console.log(`Found woold bed: ${cB}`), 2;
            if (fc.b.strongBeds.includes(cB)) return console.log(`Found strong bed ${cB}`), 3
          }
          return 1
        }())) : (Cc.current = !1, nc(!1), hc(null), Yc(1)))
      })), (0, rB.useEffect)((() => () => {
        (0, Mc.l)(pc)
      }), []), (0, rB.useEffect)((() => {
        Bc ? (0, Mc.o)(pc) : ((0, Mc.l)(pc), Qc.current && (Pc.gameBridge.send("setCameraZoom", Zc.current), Qc.current = !1))
      }), [Bc]), (0, yB.v)("overlay", vB, Ec, Bc), (0, zB.jsx)(Vc.c, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: Bc,
        timeout: 300,
        nodeRef: vB,
        unmountOnExit: !0,
        children: (0, zB.jsx)("div", {
          ref: vB,
          onClick: cB => {
            Ec() && cB.stopPropagation()
          },
          children: (0, zB.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, zB.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: sc.i.map((Bc => (0, zB.jsxs)(aB, {
                restedEffect: Bc,
                OJ: mB,
                setChosenRestedEffect: hc,
                children: [(0, zB.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, zB.jsx)(qB.e, {
                    text: [{
                      icon: Bc
                    }]
                  }), sc.f[Bc].shortName]
                }), (0, zB.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: cB(sc.f[Bc].description, {
                    time: sc.f[Bc].effectLevelDurations[lc] / 6e4
                  })
                })]
              }, Bc)))
            }), (0, zB.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, zB.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, zB.jsxs)(Oc.d, {
                className: "SleepingOverlayWakeUpButton",
                onClick: cB => {
                  Uc ? Nc() : (gB(!0), (0, tB.bb)((() => {
                    gB(!1), bB(!0)
                  }), !0)), cB.stopPropagation()
                },
                loading: Lc,
                children: [!Uc && (0, zB.jsxs)(zB.Fragment, {
                  children: [(0, zB.jsx)(Sc.e, {
                    name: "film"
                  }), " ", cB("classicGame:watchAdToGetRestedPerk")]
                }), Uc && cB("classicGame:wakeUp")]
              }), (0, zB.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, zB.jsx)("div", {
                  className: ec()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === lc
                  }),
                  children: (0, zB.jsx)(qB.e, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, zB.jsx)("div", {
                  className: ec()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === lc
                  }),
                  children: (0, zB.jsx)(qB.e, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, zB.jsx)("div", {
                  className: ec()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === lc
                  }),
                  children: (0, zB.jsx)(qB.e, {
                    text: [{
                      icon: "Red Strongbed"
                    }]
                  })
                })]
              })]
            })]
          })
        })
      })
    }
    const aB = (0, rB.memo)((function(cB) {
      let {
        children: Bc,
        restedEffect: nc,
        OJ: Vc,
        setChosenRestedEffect: Ic
      } = cB;
      return nc === Vc ? (0, zB.jsx)(Oc.n, {
        onClick: cB => {
          cB.stopPropagation()
        },
        children: Bc
      }) : (0, zB.jsx)(Oc.g, {
        onClick: cB => {
          Ic(nc), cB.stopPropagation()
        },
        children: Bc
      })
    }))
  },
  38571: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => iB
    });
    var Vc = nc(27),
      Ic = nc(35),
      rB = nc(3487),
      uc = nc(244),
      sc = nc(1464),
      Mc = nc(7059),
      Pc = nc(3502),
      qB = nc(7670),
      Oc = nc(7090),
      Tc = nc(7064),
      fc = nc(7098),
      mB = nc(1492),
      ec = nc(7106),
      tB = nc(7569),
      Sc = nc(7714),
      yB = nc(7675),
      zB = nc(7718),
      pc = nc(1566),
      hc = nc(7044),
      aB = nc(7618),
      lc = nc(7613),
      Yc = nc(7672);
    class Lc {
      constructor() {
        this.lostAtMs = null
      }
      update(cB, Bc) {
        return cB ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= Bc, Bc - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class gB {
      constructor(cB, Bc) {
        this.press = cB, this.release = Bc, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(cB, Bc, nc, Vc) {
        if (cB && null === this.downAtMs) return this.downAtMs = nc, this.latched = Vc, void(this.token = this.press());
        null !== this.downAtMs && (this.latched ? cB && this.end() : !Bc && nc - this.downAtMs >= 40 && this.end())
      }
      isLatched() {
        return null !== this.downAtMs && this.latched
      }
      unlatch() {
        this.latched = !1
      }
      cancel() {
        null !== this.downAtMs && this.end()
      }
      end() {
        const cB = this.token;
        this.downAtMs = null, this.token = null, this.latched = !1, this.release(cB)
      }
    }
    const Uc = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      bB = cB => {
        let Bc = null;
        const nc = new Yc.b,
          Vc = () => {
            Bc && (((cB, Bc, nc) => {
              switch (nc.kind) {
                case "reload":
                  return void Bc.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void Bc.specialActionUp(nc.action);
                case "customButton":
                  return void pc.gameBridge.send("pressCustomButton", {
                    id: nc.id,
                    down: !1
                  });
                case "touchButton":
                  cB.pressTouchButton(!1)
              }
            })(cB, Bc.bodies, Bc.action), Bc = null)
          },
          rB = (nc, Ic, rB, uc) => {
            Vc(), Bc = {
              action: Ic,
              bodies: nc,
              heldBy: rB,
              atMs: uc
            }, ((cB, Bc, nc) => {
              switch (nc.kind) {
                case "reload":
                  return Bc.reloadGun(), void Bc.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void Bc.specialActionDown(nc.action);
                case "customButton":
                  return void pc.gameBridge.send("pressCustomButton", {
                    id: nc.id,
                    down: !0
                  });
                case "touchButton":
                  cB.pressTouchButton(!0)
              }
            })(cB, nc, Ic)
          };
        return {
          update: (uc, sc, Pc, qB) => {
            var Tc;
            const fc = (0, aB.l)(cB.contextActionInputs()),
              mB = null !== (Tc = fc[0]) && void 0 !== Tc ? Tc : Uc;
            (0, lc.c)((0, aB.g)(mB) ? mB : null);
            const ec = (0, aB.e)(fc);
            (0, lc.d)(ec);
            const tB = (0, Mc.g)("actionButton");
            if (ec) {
              const cB = nc.update(sc.wasPressed(tB), sc.isHeld(tB), Pc, qB);
              "tap" === cB ? rB(uc, mB, [tB], Pc) : "hold" === cB && (Oc.e.consumeButton(tB), Ic.i.Vu(zB.m, fc))
            } else nc.release(), sc.wasPressed(tB) && rB(uc, mB, [tB], Pc);
            Bc && Pc - Bc.atMs >= 40 && !Bc.heldBy.some((cB => (0, hc.V)(sc.frame.values, cB))) && Vc()
          },
          pressPicked: (cB, Bc) => {
            rB(cB, Bc, [(0, Mc.g)("menuConfirm"), (0, Mc.g)("actionButton")], performance.now())
          },
          release: () => {
            nc.release(), Vc(), (0, lc.c)(null), (0, lc.d)(!1)
          }
        }
      };
    var Zc = nc(7038);
    var Qc = nc(38562),
      Cc = nc(7634),
      vB = nc(7083),
      Dc = nc(7756);
    var Nc = nc(38554),
      Ec = nc(7760),
      oc = nc(38578),
      Wc = nc(7742),
      wc = nc(7638),
      kB = nc(7646),
      Xc = nc(7654),
      Hc = nc(7574);
    const Fc = () => Hc.d[(0, Tc.k)().tapHoldTime].wheelMs,
      Jc = () => ((0, qB.e)(), new Event("controllerMenuKey")),
      jB = (cB, Bc, nc) => new gB((() => {
        const nc = cB.bodies();
        return {
          bodies: nc,
          press: Bc(nc)
        }
      }), (cB => {
        let {
          bodies: Bc,
          press: Vc
        } = cB;
        nc(Bc, Vc)
      })),
      Rc = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      iB = cB => {
        const Bc = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let nc = Rc;
        const qB = new oc.d,
          pc = Ic.i.subscribe("appManagerUpdated|activeInputDevice", (Bc => {
            cB.deviceChanged(Bc)
          }));
        let aB = null,
          lc = 0;
        const gB = () => {
          aB = null, (0, wc.g)(null)
        };
        let Uc = !1;
        const iB = new Lc,
          Kc = cB.look,
          xB = new Yc.b,
          dc = new Yc.b,
          Ac = bB(cB),
          Gc = Ic.i.subscribe(zB.p, (Bc => {
            Ac.pressPicked(cB.bodies(), Bc)
          })),
          cn = jB(cB, (cB => cB.primaryFireDown()), ((cB, Bc) => {
            cB.primaryFireUp(Bc)
          })),
          BB = jB(cB, (cB => cB.altFireDown()), ((cB, Bc) => {
            cB.altFireUp(Bc)
          }));
        let nB = !1,
          VB = !1,
          IB = !1;
        const rn = (0, tB.c)(hc.nb),
          uB = (0, tB.c)(hc.nb),
          sB = new Yc.b;
        let MB = !1;
        const PB = () => {
            rn.reset(), uB.reset(), sB.release(), (0, Xc.h)(!1), Kc.release(), cn.cancel(), (0, kB.d)(!1), BB.cancel(), Ac.release(), xB.release(), dc.release(), gB()
          },
          qn = function() {
            let Vc = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            PB(), VB = !1, Vc || (nB = !1, nc = Rc, Object.assign(Bc, {
              x: 0,
              y: 0,
              magnitude: 0,
              headingOffset: 0,
              jumpHeld: !1,
              jumpPressed: !1,
              running: !1,
              sprintHeld: !1
            }), cB.stopMoving())
          },
          OB = function(Vc, Ic, rB) {
            let uc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const sc = (0, Tc.k)(),
              Pc = (0, Nc.g)(Ic, sc.moveDeadzone),
              Oc = (0, Mc.g)("sprint");
            nc = (0, Nc.q)(nc, {
              sprintPressed: Vc.wasPressed(Oc),
              magnitude: Pc.magnitude,
              autoSprint: sc.autoSprint,
              nowMs: rB
            }), Bc.running = nc.running, Bc.sprintHeld = Vc.isHeld(Oc), Bc.x = Pc.x, Bc.y = Pc.y, Bc.magnitude = Pc.speed, Bc.headingOffset = Pc.headingOffset, nB = Pc.magnitude > 0;
            const fc = (0, Mc.g)("jump");
            if (Bc.jumpHeld = Vc.isHeld(fc), Bc.jumpPressed = Vc.wasPressed(fc), Bc.jumpPressed && cB.bodies().jumpDown(), uc) return void cB.move(Bc, null);
            const mB = (0, Mc.g)("sneak"),
              ec = qB.filter({
                sneakHeld: Vc.isHeld(mB),
                sneakPressed: Vc.wasPressed(mB),
                sneakTogglePressed: Vc.wasPressed((0, Mc.g)("sneakToggle"))
              }, rB);
            cB.move(Bc, {
              ...ec,
              mode: sc.sneakMode
            })
          },
          TB = (cB, Bc) => {
            const nc = (0, Mc.g)("chat");
            if ("off" === (0, Tc.k)().quickChat) return void(cB.wasPressed(nc) && (Oc.e.consumeButton(nc), Ic.i.Vu(Cc.e)));
            const Vc = xB.update(cB.wasPressed(nc), cB.isHeld(nc), Bc, Fc());
            "tap" === Vc || "hold" === Vc && null === (0, mB.b)() ? Ic.i.Vu(Cc.e) : "hold" === Vc && (Oc.e.consumeButton(nc), Ic.i.Vu(yB.n))
          },
          fB = (Bc, nc) => {
            ((cB, Bc) => {
              const nc = (0, Sc.d)(),
                Vc = (0, Mc.g)("emoteWheel");
              if ("wheel" === (0, Tc.k)().emoteButton) return cB.wasPressed(Vc) && (Oc.e.consumeButton(Vc), Ic.i.Vu("requestEmoteWheelPadOpen", !0)), (0, Sc.d)() !== nc;
              const rB = dc.update(cB.wasPressed(Vc), cB.isHeld(Vc), Bc, Fc());
              return "tap" === rB ? Ic.i.Vu("requestEmoteRepeatLast") : "hold" === rB && (Oc.e.consumeButton(Vc), Ic.i.Vu("requestEmoteWheelPadOpen", !1)), (0, Sc.d)() !== nc
            })(Bc, nc) || TB(Bc, nc), Bc.wasPressed((0, Mc.g)("inventory")) && (Oc.e.consumeButton((0, Mc.g)("inventory")), (0, sc.z)(Jc(), "inventory", cB.hasFullInventory())), Bc.wasPressed((0, Mc.g)("pause")) && (Oc.e.consumeButton((0, Mc.g)("pause")), (0, Pc.d)() === uc.i.SOCIAL ? (0, sc.w)(Jc(), uc.i.SOCIAL) : (0, sc.h)(Jc())), Bc.wasPressed((0, Mc.g)("leaderboard")) && !(0, rB.h)() && (Oc.e.consumeButton((0, Mc.g)("leaderboard")), ((cB, Bc) => {
              if ("shop" === (0, vB.e)()) return Ic.i.Vu(Dc.j), void(0, sc.w)(cB, uc.i.SHOP, !0);
              (0, sc.w)(cB, uc.i.LOBBY_LEADERBOARD, Bc)
            })(Jc(), cB.hasLobbyLeaderboard()))
          },
          mn = (Bc, nc) => {
            const Vc = cB.bodies();
            ((Bc, nc) => {
              const Vc = (0, Mc.g)("attack"),
                Ic = Bc.wasPressed(Vc);
              Ic && !cn.isLatched() && (Uc = cB.targetsBlock()), cn.update(Ic, Bc.isHeld(Vc), nc, "toggle" === (0, Tc.k)().attackMode), cn.isLatched() && Uc ? iB.update(cB.targetsBlock(), nc) && cn.unlatch() : iB.reset(), (0, kB.d)(cn.isLatched())
            })(Bc, nc), BB.update(Bc.wasPressed((0, Mc.g)("use")), Bc.isHeld((0, Mc.g)("use")), nc, !1), rn.update(Bc.isHeld((0, Mc.g)("hotbarPrevious")), nc) && cB.scrollHotbar(-1), uB.update(Bc.isHeld((0, Mc.g)("hotbarNext")), nc) && cB.scrollHotbar(1), ((Bc, nc, Vc) => {
              const Ic = (0, Mc.g)("perspective"),
                rB = (0, Mc.g)("uL"),
                uc = cB.pickBlockAllowed();
              (0, Xc.h)(uc && !MB && cB.targetsBlock());
              const sc = () => {
                nc.uL() && (MB = !0, (0, Xc.h)(!1))
              };
              if (!uc || rB !== Ic) return sB.release(), Bc.wasPressed(Ic) && nc.swapCameraZoom(), void(uc && Bc.wasPressed(rB) && sc());
              const Pc = sB.update(Bc.wasPressed(rB), Bc.isHeld(rB), Vc, Fc());
              "tap" === Pc ? sc() : "hold" === Pc && nc.swapCameraZoom()
            })(Bc, Vc, nc), ((Bc, nc, Vc) => {
              const Ic = (0, Mc.g)("drop");
              if (Bc.wasPressed(Ic)) {
                nc.dropItem(!1);
                const cB = (0, Tc.k)();
                "off" !== cB.buttonRepeat && (aB = Vc, lc = Hc.d[cB.tapHoldTime].dropStackMs, (0, wc.g)(lc))
              }
              null !== aB && (!Bc.isHeld(Ic) || cB.selectedSlotEmpty() ? gB() : Vc - aB >= lc && (gB(), nc.dropItem(!0)))
            })(Bc, Vc, nc), Ac.update(Vc, Bc, nc, Fc()), fB(Bc, nc)
          },
          eB = Oc.e.register({
            name: "gameplay",
            isActive: () => {
              const Bc = nB && "keyboardMouse" === Vc.d.get("activeInputDevice") && !(0, fc.K)(),
                nc = (0, fc.k)() ? [Qc.d] : [];
              return ((0, fc.k)() || Bc) && (0, ec.d)(nc) && cB.hasPlayer()
            },
            onFrame: cB => {
              const Bc = performance.now(),
                nc = (0, Tc.k)(),
                Vc = (0, Nc.u)(cB, (0, Nc.k)(nc, (0, Mc.g)("pause"), (0, Ec.c)().isSupported())),
                Ic = (0, Nc.i)(Vc, nc.swapSticks);
              return (0, fc.k)() ? (VB = !1, (0, ec.d)() ? (IB = !1, Kc.update(Ic.look, nc, Vc.isHeld((0, Mc.g)("use"))), OB(Vc, Ic.move, Bc), void mn(Vc, Bc)) : (IB || (IB = !0, qB.lostToPadScreen(), qn()), void TB(Vc, Bc))) : (VB || (PB(), VB = !0), void OB(Vc, Ic.move, Bc))
            },
            onDeactivate: cB => {
              (0, fc.k)() && qB.lostToPadScreen(), qn(cB)
            },
            onPeekFrame: Bc => {
              (0, fc.k)() && (0, ec.d)(Qc.i) && cB.hasPlayer() ? OB(Bc, (0, Nc.i)(Bc, (0, Tc.k)().swapSticks).move, performance.now(), !0) : qn()
            }
          }),
          tn = (0, Qc.g)(cB),
          SB = (() => {
            const cB = Ic.i.subscribe(Zc.e, (cB => {
              !cB && (0, fc.k)() && "inGame" === Vc.d.get("gameState") && Ic.i.Vu("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              Ic.i.unsubscribe(cB)
            }
          })();
        return () => {
          qn(), cB.uninstall(), (0, Wc.f)(!1), (0, Xc.h)(!1), Ic.i.unsubscribe(pc), Ic.i.unsubscribe(Gc), eB(), tn(), SB(), Kc.uninstall()
        }
      }
  },
  38562: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => mB,
      g: () => tB,
      i: () => fc
    });
    var Vc = nc(1142),
      Ic = nc(3487),
      rB = nc(7699),
      uc = nc(35526),
      sc = nc(1164),
      Mc = nc(1049),
      Pc = nc(7106),
      qB = nc(7675),
      Oc = nc(7718);
    const Tc = {
        emoteWheel: rB.d,
        quickChatWheel: qB.e,
        actionWheel: Oc.q
      },
      fc = Object.keys(Tc),
      mB = "dead",
      ec = cB => (0, Vc.h)().includes(cB),
      tB = cB => {
        const Bc = [(0, Pc.i)(mB, (() => cB.hasPlayer() && cB.isPlayerDead())), (0, Pc.i)("sleeping", (() => ec(uc.f))), (0, Pc.i)("turnstile", (() => ec(Mc.e))), (0, Pc.i)("videoAd", sc.H), (0, Pc.i)("replay", (() => (0, Ic.h)() || cB.isReplayMode())), (0, Pc.i)("freeCamera", (() => cB.isFreeCameraOn())), ...Object.entries(Tc).map((cB => {
          let [Bc, nc] = cB;
          return (0, Pc.i)(Bc, nc)
        }))];
        return () => {
          for (const cB of Bc) cB()
        }
      }
  },
  38554: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Ic,
      g: () => Mc,
      i: () => sc,
      k: () => qB,
      o: () => uc,
      p: () => rB,
      q: () => Pc,
      u: () => Oc
    });
    var Vc = nc(7044);
    class Ic {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(cB, Bc, nc) {
        const Ic = (0, Vc.p)(cB, Bc.lookDeadzone);
        if (Math.hypot(Ic.x, Ic.y) < .9 || Math.abs(Ic.x) < Math.abs(Ic.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = nc);
        const rB = (uc = Bc.lookSensitivityX, Math.min(1, 100 / uc));
        var uc;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (nc - this.fullTiltSinceMs - 250 * rB) / (200 * rB)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const rB = (cB, Bc, nc, Ic, rB) => {
        let uc = 1;
        return "boost" === nc.lookCurve ? uc = cB.update(Bc, nc, rB) : cB.reset(),
          function(cB, Bc) {
            let {
              yawBoost: nc = 1,
              aiming: Ic = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const rB = (0, Vc.l)((0, Vc.p)(cB, Bc.lookDeadzone), Bc.lookCurve),
              uc = 220 * Math.PI / 180,
              sc = Ic ? Bc.aimLookSensitivity / 100 : 1,
              Mc = Bc.lookSensitivityX / 100 * sc,
              Pc = Bc.lookSensitivityY / 100 * sc;
            return {
              yawRadPerSec: rB.x * uc * Mc * nc * (Bc.invertLookX ? -1 : 1),
              pitchRadPerSec: rB.y * uc * .7 * Pc * (Bc.invertLookY ? -1 : 1)
            }
          }(Bc, nc, {
            yawBoost: uc,
            aiming: Ic
          })
      },
      uc = (cB, Bc) => {
        const nc = Math.max(0, Math.min(250, Bc)) / 1e3;
        return {
          QBc: cB.yawRadPerSec * nc,
          CBc: cB.pitchRadPerSec * nc
        }
      },
      sc = (cB, Bc) => Bc ? {
        move: cB.rightStick,
        look: cB.leftStick
      } : {
        move: cB.leftStick,
        look: cB.rightStick
      },
      Mc = (cB, Bc) => {
        const nc = (0, Vc.p)(cB, Bc),
          Ic = Math.min(1, Math.hypot(nc.x, nc.y));
        return {
          magnitude: Ic,
          speed: Math.min(1, Ic / .8),
          headingOffset: 0 === Ic ? 0 : Math.atan2(nc.x, -nc.y),
          x: nc.x,
          y: nc.y
        }
      },
      Pc = (cB, Bc) => {
        let {
          sprintPressed: nc,
          magnitude: Vc,
          autoSprint: Ic,
          nowMs: rB
        } = Bc;
        const uc = nc ? rB : cB.latchedAtMs,
          sc = (cB => {
            let {
              running: Bc,
              magnitude: nc,
              sprintPressed: Vc,
              autoSprint: Ic
            } = cB;
            return !(nc < .5) && (!!Vc || !!(Ic && nc >= .9) || Bc)
          })({
            running: cB.running,
            magnitude: Vc,
            sprintPressed: rB - uc <= 1e3,
            autoSprint: Ic
          });
        return {
          running: sc,
          latchedAtMs: sc ? -1 / 0 : uc
        }
      },
      qB = (cB, Bc, nc) => nc && cB.gyroAiming && "button" === cB.gyroActivation && cB.gyroButton !== Bc ? cB.gyroButton : null,
      Oc = (cB, Bc) => Bc ? {
        ...cB,
        isHeld: nc => nc !== Bc && cB.isHeld(nc),
        wasPressed: nc => nc !== Bc && cB.wasPressed(nc),
        wasReleased: nc => nc !== Bc && cB.wasReleased(nc),
        value: nc => nc === Bc ? 0 : cB.value(nc)
      } : cB
  },
  38578: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Ic,
      f: () => Vc
    });
    const Vc = cB => {
      let {
        mode: Bc,
        sneakHeld: nc,
        sneakPressed: Vc,
        sneakTogglePressed: Ic,
        descending: rB,
        canCrouch: uc,
        toggled: sc
      } = cB;
      return uc ? rB ? {
        crouchHeld: nc,
        toggled: !1
      } : "hold" === Bc ? {
        crouchHeld: nc,
        toggled: Ic ? !sc : sc
      } : {
        crouchHeld: !1,
        toggled: Vc || Ic ? !sc : sc
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class Ic {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(cB, Bc) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = Bc, this.graceEndsMs = Bc + 500);
        const nc = Bc < this.graceEndsMs;
        return nc && (cB.sneakPressed || cB.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, Bc + 300))), cB.sneakHeld ? nc && cB.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: cB.sneakHeld && !this.ignoringHeld,
          sneakPressed: cB.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: cB.sneakTogglePressed && !nc
        }
      }
    }
  },
  38543: (cB, Bc, nc) => {
    nc(7760)
  },
  38549: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => zB
    });
    var Vc = nc(35),
      Ic = nc(7699),
      rB = nc(7708),
      uc = nc(7059),
      sc = nc(7090),
      Mc = nc(7064),
      Pc = nc(38554),
      qB = nc(38562),
      Oc = nc(7106),
      Tc = nc(7044),
      fc = nc(7675),
      mB = nc(7718);
    const ec = [{
        isOpen: Ic.h,
        openButton: () => (0, uc.g)("emoteWheel"),
        aim: cB => {
          Vc.i.Vu("emoteWheelPadAim", cB)
        },
        commit: cB => {
          Vc.i.Vu("requestEmoteWheelPadCommit", cB)
        },
        close: () => {
          Vc.i.Vu("requestEmoteWheelClose")
        }
      }, {
        isOpen: fc.e,
        openButton: () => (0, uc.g)("chat"),
        aim: cB => {
          Vc.i.Vu(fc.g, cB)
        },
        commit: cB => {
          Vc.i.Vu(fc.m, cB)
        },
        close: () => {
          Vc.i.Vu(fc.k)
        },
        keptOpenBy: [qB.d]
      }, {
        isOpen: mB.q,
        openButton: () => (0, uc.g)("actionButton"),
        aim: cB => {
          Vc.i.Vu(mB.d, cB)
        },
        commit: cB => {
          Vc.i.Vu(mB.j, cB)
        },
        close: () => {
          Vc.i.Vu(mB.f)
        }
      }],
      tB = () => {
        var cB;
        return null !== (cB = ec.find((cB => cB.isOpen()))) && void 0 !== cB ? cB : null
      },
      Sc = cB => (0, uc.K)(cB.openButton()),
      yB = (cB, Bc) => !(0, Tc.V)(cB.frame.values, Bc),
      zB = () => {
        let cB = null,
          Bc = !1,
          nc = !1;
        return sc.e.register({
          name: "wheel",
          isActive: () => null !== tB(),
          peek: () => {
            const cB = tB();
            return cB && Sc(cB) ? null : {
              over: "gameplay",
              stick: (0, Mc.k)().swapSticks ? "right" : "left"
            }
          },
          onFrame: Vc => {
            var Ic;
            const Tc = tB();
            if (!Tc) return;
            if (null !== (0, Oc.c)([...qB.i, ...null !== (Ic = Tc.keptOpenBy) && void 0 !== Ic ? Ic : []])) return void Tc.close();
            const fc = Tc.openButton(),
              mB = (0, Pc.i)(Vc.frame, (0, Mc.k)().swapSticks),
              ec = Sc(Tc) ? mB.move : mB.look;
            cB !== Tc ? (cB = Tc, Bc = !yB(Vc, fc) || Math.hypot(ec.x, ec.y) >= rB.D, nc = !1) : nc && (nc = !1, yB(Vc, fc) && (Bc = !1)), Tc.aim(ec);
            const zB = (0, uc.g)("menuConfirm"),
              pc = (0, uc.g)("menuBack");
            return Vc.wasPressed(pc) ? (sc.e.consumeButton(pc), void Tc.close()) : Vc.wasPressed(zB) || Vc.wasPressed(fc) ? (sc.e.consumeButton(zB), sc.e.consumeButton(fc), void Tc.commit(!1)) : void(Bc && yB(Vc, fc) && (Bc = !1, Tc.commit(!0)))
          },
          onDeactivate: () => {
            nc = null !== cB && tB() === cB, nc || (cB = null, Bc = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);