export const id = 219;
export const ids = [219];
export const modules = {
  37095: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => xd,
      d: () => vd
    });
    var pd = kd(4107),
      Nd = kd(1459),
      Wd = kd(56),
      Pd = kd(6347),
      Zd = kd(4093),
      gd = kd(1307),
      Cd = kd(1932),
      Kd = kd(1904),
      od = kd(1461),
      ld = kd(1211),
      Qd = kd(37101),
      Ld = kd(1044),
      Od = kd.n(Ld),
      ed = kd(1332),
      Rd = kd(1059),
      Id = kd(1302),
      Gd = kd(1103);
    const vd = "SleepingOverlay";

    function xd() {
      const {
        t: dd
      } = (0, ld.B)(), [Jd, kd] = (0, Wd.useState)(!1), [Ld, xd] = (0, Wd.useState)(null), [Bd, sd] = (0, Wd.useState)(1), [ad, Md] = (0, Wd.useState)(!1), [Fd, Yd] = (0, Wd.useState)(!1), md = (0, Wd.useRef)(0), bd = (0, Wd.useRef)(!1), Sd = (0, Wd.useRef)(!1), jd = (0, Wd.useRef)(), Xd = (0, Wd.useRef)(null);

      function fd() {
        const dd = null !== Ld && void 0 !== Ld ? Ld : "Rested Speed";
        Cd.gameBridge.send("wakeUp", Fd ? dd : null), Xd.current = null, kd(!1), xd(null), sd(1), Md(!1), Yd(!1)
      }

      function nd() {
        return !ad && (fd(), !0)
      }
      return (0, Nd.h)("PlayerPhysicsTypeUpdate", (dd => {
        dd !== Xd.current && (Xd.current = dd, dd === Pd.k.SLEEPING ? (Sd.current || (md.current = Cd.gameBridge.lookup("cameraZoom", null), Sd.current = !0), bd.current = !0, Cd.gameBridge.send("setCameraZoom", 3), kd(!0), sd(function() {
          for (const dd of Cd.gameBridge.lookup("blocksStandingOn", null)) {
            if (Qd.e.leafBeds.includes(dd)) return console.log(`Found leaf bed: ${dd}`), 1;
            if (Qd.e.woolBeds.includes(dd)) return console.log(`Found woold bed: ${dd}`), 2;
            if (Qd.e.strongBeds.includes(dd)) return console.log(`Found strong bed ${dd}`), 3
          }
          return 1
        }())) : (Sd.current = !1, kd(!1), xd(null), sd(1)))
      })), (0, Wd.useEffect)((() => () => {
        (0, gd.o)(vd)
      }), []), (0, Wd.useEffect)((() => {
        Jd ? (0, gd.p)(vd) : ((0, gd.o)(vd), bd.current && (Cd.gameBridge.send("setCameraZoom", md.current), bd.current = !1))
      }), [Jd]), (0, Id.s)("overlay", jd, nd, Jd), (0, Gd.jsx)(pd.b, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: Jd,
        timeout: 300,
        nodeRef: jd,
        unmountOnExit: !0,
        children: (0, Gd.jsx)("div", {
          ref: jd,
          onClick: dd => {
            nd() && dd.stopPropagation()
          },
          children: (0, Gd.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, Gd.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: Zd.g.map((Jd => (0, Gd.jsxs)(qd, {
                restedEffect: Jd,
                qP: Ld,
                setChosenRestedEffect: xd,
                children: [(0, Gd.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, Gd.jsx)(Kd.c, {
                    text: [{
                      icon: Jd
                    }]
                  }), Zd.f[Jd].shortName]
                }), (0, Gd.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: dd(Zd.f[Jd].description, {
                    time: Zd.f[Jd].effectLevelDurations[Bd] / 6e4
                  })
                })]
              }, Jd)))
            }), (0, Gd.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, Gd.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, Gd.jsxs)(od.d, {
                className: "SleepingOverlayWakeUpButton",
                onClick: dd => {
                  Fd ? fd() : (Md(!0), (0, ed.R)((() => {
                    Md(!1), Yd(!0)
                  }), !0)), dd.stopPropagation()
                },
                loading: ad,
                children: [!Fd && (0, Gd.jsxs)(Gd.Fragment, {
                  children: [(0, Gd.jsx)(Rd.e, {
                    name: "film"
                  }), " ", dd("classicGame:watchAdToGetRestedPerk")]
                }), Fd && dd("classicGame:wakeUp")]
              }), (0, Gd.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, Gd.jsx)("div", {
                  className: Od()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === Bd
                  }),
                  children: (0, Gd.jsx)(Kd.c, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, Gd.jsx)("div", {
                  className: Od()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === Bd
                  }),
                  children: (0, Gd.jsx)(Kd.c, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, Gd.jsx)("div", {
                  className: Od()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === Bd
                  }),
                  children: (0, Gd.jsx)(Kd.c, {
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
    const qd = (0, Wd.memo)((function(dd) {
      let {
        children: Jd,
        restedEffect: kd,
        qP: pd,
        setChosenRestedEffect: Nd
      } = dd;
      return kd === pd ? (0, Gd.jsx)(od.j, {
        onClick: dd => {
          dd.stopPropagation()
        },
        children: Jd
      }) : (0, Gd.jsx)(od.f, {
        onClick: dd => {
          Nd(kd), dd.stopPropagation()
        },
        children: Jd
      })
    }))
  },
  40558: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Vd
    });
    var pd = kd(22),
      Nd = kd(29),
      Wd = kd(4131),
      Pd = kd(300),
      Zd = kd(1670),
      gd = kd(8031),
      Cd = kd(4144),
      Kd = kd(8603),
      od = kd(8077),
      ld = kd(8043),
      Qd = kd(8081),
      Ld = kd(1723),
      Od = kd(8084),
      ed = kd(8551),
      Rd = kd(8717),
      Id = kd(8613),
      Gd = kd(8724),
      vd = kd(1932),
      xd = kd(8020),
      qd = kd(8635),
      Bd = kd(8630),
      sd = kd(8605);
    class ad {
      constructor() {
        this.lostAtMs = null
      }
      update(dd, Jd) {
        return dd ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= Jd, Jd - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class Md {
      constructor(dd, Jd) {
        this.press = dd, this.release = Jd, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(dd, Jd, kd, pd) {
        if (dd && null === this.downAtMs) return this.downAtMs = kd, this.latched = pd, void(this.token = this.press());
        null !== this.downAtMs && (this.latched ? dd && this.end() : !Jd && kd - this.downAtMs >= 40 && this.end())
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
        const dd = this.token;
        this.downAtMs = null, this.token = null, this.latched = !1, this.release(dd)
      }
    }
    const Fd = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      Yd = dd => {
        let Jd = null;
        const kd = new sd.b,
          pd = () => {
            Jd && (((dd, Jd, kd) => {
              switch (kd.kind) {
                case "reload":
                  return void Jd.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void Jd.specialActionUp(kd.action);
                case "customButton":
                  return void vd.gameBridge.send("pressCustomButton", {
                    id: kd.id,
                    down: !1
                  });
                case "touchButton":
                  dd.pressTouchButton(!1)
              }
            })(dd, Jd.bodies, Jd.action), Jd = null)
          },
          Wd = (kd, Nd, Wd, Pd) => {
            pd(), Jd = {
              action: Nd,
              bodies: kd,
              heldBy: Wd,
              atMs: Pd
            }, ((dd, Jd, kd) => {
              switch (kd.kind) {
                case "reload":
                  return Jd.reloadGun(), void Jd.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void Jd.specialActionDown(kd.action);
                case "customButton":
                  return void vd.gameBridge.send("pressCustomButton", {
                    id: kd.id,
                    down: !0
                  });
                case "touchButton":
                  dd.pressTouchButton(!0)
              }
            })(dd, kd, Nd)
          };
        return {
          update: (Pd, Zd, Cd, Kd) => {
            var ld;
            const Qd = (0, qd.m)(dd.contextActionInputs()),
              Ld = null !== (ld = Qd[0]) && void 0 !== ld ? ld : Fd;
            (0, Bd.e)((0, qd.g)(Ld) ? Ld : null);
            const Od = (0, qd.d)(Qd);
            (0, Bd.i)(Od);
            const ed = (0, gd.j)("actionButton");
            if (Od) {
              const dd = kd.update(Zd.wasPressed(ed), Zd.isHeld(ed), Cd, Kd);
              "tap" === dd ? Wd(Pd, Ld, [ed], Cd) : "hold" === dd && (od.e.consumeButton(ed), Nd.j.nO(Gd.j, Qd))
            } else kd.release(), Zd.wasPressed(ed) && Wd(Pd, Ld, [ed], Cd);
            Jd && Cd - Jd.atMs >= 40 && !Jd.heldBy.some((dd => (0, xd.H)(Zd.frame.values, dd))) && pd()
          },
          pressPicked: (dd, Jd) => {
            Wd(dd, Jd, [(0, gd.j)("menuConfirm"), (0, gd.j)("actionButton")], performance.now())
          },
          release: () => {
            kd.release(), pd(), (0, Bd.e)(null), (0, Bd.i)(!1)
          }
        }
      };
    var md = kd(8016);
    var bd = kd(40553),
      Sd = kd(8646),
      jd = kd(8069),
      Xd = kd(8762);
    var fd = kd(40548),
      nd = kd(8771),
      Ud = kd(40566),
      yd = kd(8740),
      Dd = kd(8655),
      Td = kd(8664),
      Ed = kd(8666),
      cd = kd(8554);
    const hd = () => cd.d[(0, ld.k)().tapHoldTime].wheelMs,
      rd = () => ((0, Kd.b)(), new Event("controllerMenuKey")),
      ud = (dd, Jd, kd) => new Md((() => {
        const kd = dd.bodies();
        return {
          bodies: kd,
          press: Jd(kd)
        }
      }), (dd => {
        let {
          bodies: Jd,
          press: pd
        } = dd;
        kd(Jd, pd)
      })),
      td = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      Vd = dd => {
        const Jd = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let kd = td;
        const Kd = new Ud.c,
          vd = Nd.j.subscribe("appManagerUpdated|activeInputDevice", (Jd => {
            dd.deviceChanged(Jd)
          }));
        let qd = null,
          Bd = 0;
        const Md = () => {
          qd = null, (0, Dd.i)(null)
        };
        let Fd = !1;
        const Vd = new ad,
          zd = dd.look,
          Hd = new sd.b,
          wd = new sd.b,
          Ad = Yd(dd),
          dJ = Nd.j.subscribe(Gd.l, (Jd => {
            Ad.pressPicked(dd.bodies(), Jd)
          })),
          JJ = ud(dd, (dd => dd.primaryFireDown()), ((dd, Jd) => {
            dd.primaryFireUp(Jd)
          })),
          kJ = ud(dd, (dd => dd.altFireDown()), ((dd, Jd) => {
            dd.altFireUp(Jd)
          }));
        let pJ = !1,
          NJ = !1,
          WJ = !1;
        const PJ = (0, ed.c)(xd.Z),
          ZJ = (0, ed.c)(xd.Z),
          gJ = new sd.b;
        let CJ = !1;
        const KJ = () => {
            PJ.reset(), ZJ.reset(), gJ.release(), (0, Ed.h)(!1), zd.release(), JJ.cancel(), (0, Td.c)(!1), kJ.cancel(), Ad.release(), Hd.release(), wd.release(), Md()
          },
          oJ = function() {
            let pd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            KJ(), NJ = !1, pd || (pJ = !1, kd = td, Object.assign(Jd, {
              x: 0,
              y: 0,
              magnitude: 0,
              headingOffset: 0,
              jumpHeld: !1,
              jumpPressed: !1,
              running: !1,
              sprintHeld: !1
            }), dd.stopMoving())
          },
          lJ = function(pd, Nd, Wd) {
            let Pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const Zd = (0, ld.k)(),
              Cd = (0, fd.h)(Nd, Zd.moveDeadzone),
              od = (0, gd.j)("sprint");
            kd = (0, fd.u)(kd, {
              sprintPressed: pd.wasPressed(od),
              magnitude: Cd.magnitude,
              autoSprint: Zd.autoSprint,
              nowMs: Wd
            }), Jd.running = kd.running, Jd.sprintHeld = pd.isHeld(od), Jd.x = Cd.x, Jd.y = Cd.y, Jd.magnitude = Cd.speed, Jd.headingOffset = Cd.headingOffset, pJ = Cd.magnitude > 0;
            const Qd = (0, gd.j)("jump");
            if (Jd.jumpHeld = pd.isHeld(Qd), Jd.jumpPressed = pd.wasPressed(Qd), Jd.jumpPressed && dd.bodies().jumpDown(), Pd) return void dd.move(Jd, null);
            const Ld = (0, gd.j)("sneak"),
              Od = Kd.filter({
                sneakHeld: pd.isHeld(Ld),
                sneakPressed: pd.wasPressed(Ld),
                sneakTogglePressed: pd.wasPressed((0, gd.j)("sneakToggle"))
              }, Wd);
            dd.move(Jd, {
              ...Od,
              mode: Zd.sneakMode
            })
          },
          QJ = (dd, Jd) => {
            const kd = (0, gd.j)("chat");
            if ("off" === (0, ld.k)().quickChat) return void(dd.wasPressed(kd) && (od.e.consumeButton(kd), Nd.j.nO(Sd.d)));
            const pd = Hd.update(dd.wasPressed(kd), dd.isHeld(kd), Jd, hd());
            "tap" === pd || "hold" === pd && null === (0, Ld.c)() ? Nd.j.nO(Sd.d) : "hold" === pd && (od.e.consumeButton(kd), Nd.j.nO(Id.l))
          },
          LJ = (Jd, kd) => {
            ((dd, Jd) => {
              const kd = (0, Rd.e)(),
                pd = (0, gd.j)("emoteWheel");
              if ("wheel" === (0, ld.k)().emoteButton) return dd.wasPressed(pd) && (od.e.consumeButton(pd), Nd.j.nO("requestEmoteWheelPadOpen", !0)), (0, Rd.e)() !== kd;
              const Wd = wd.update(dd.wasPressed(pd), dd.isHeld(pd), Jd, hd());
              return "tap" === Wd ? Nd.j.nO("requestEmoteRepeatLast") : "hold" === Wd && (od.e.consumeButton(pd), Nd.j.nO("requestEmoteWheelPadOpen", !1)), (0, Rd.e)() !== kd
            })(Jd, kd) || QJ(Jd, kd), Jd.wasPressed((0, gd.j)("inventory")) && (od.e.consumeButton((0, gd.j)("inventory")), (0, Zd.x)(rd(), "inventory", dd.hasFullInventory())), Jd.wasPressed((0, gd.j)("pause")) && (od.e.consumeButton((0, gd.j)("pause")), (0, Cd.d)() === Pd.s.SOCIAL ? (0, Zd.t)(rd(), Pd.s.SOCIAL) : (0, Zd.i)(rd())), Jd.wasPressed((0, gd.j)("leaderboard")) && !(0, Wd.f)() && (od.e.consumeButton((0, gd.j)("leaderboard")), ((dd, Jd) => {
              if ("shop" === (0, jd.d)()) return Nd.j.nO(Xd.i), void(0, Zd.t)(dd, Pd.s.SHOP, !0);
              (0, Zd.t)(dd, Pd.s.LOBBY_LEADERBOARD, Jd)
            })(rd(), dd.hasLobbyTab()))
          },
          OJ = (Jd, kd) => {
            const pd = dd.bodies();
            ((Jd, kd) => {
              const pd = (0, gd.j)("attack"),
                Nd = Jd.wasPressed(pd);
              Nd && !JJ.isLatched() && (Fd = dd.targetsBlock()), JJ.update(Nd, Jd.isHeld(pd), kd, "toggle" === (0, ld.k)().attackMode), JJ.isLatched() && Fd ? Vd.update(dd.targetsBlock(), kd) && JJ.unlatch() : Vd.reset(), (0, Td.c)(JJ.isLatched())
            })(Jd, kd), kJ.update(Jd.wasPressed((0, gd.j)("use")), Jd.isHeld((0, gd.j)("use")), kd, !1), PJ.update(Jd.isHeld((0, gd.j)("hotbarPrevious")), kd) && dd.scrollHotbar(-1), ZJ.update(Jd.isHeld((0, gd.j)("hotbarNext")), kd) && dd.scrollHotbar(1), ((Jd, kd, pd) => {
              const Nd = (0, gd.j)("perspective"),
                Wd = (0, gd.j)("pickBlock"),
                Pd = dd.pickBlockAllowed();
              (0, Ed.h)(Pd && !CJ && dd.targetsBlock());
              const Zd = () => {
                kd.pickBlock() && (CJ = !0, (0, Ed.h)(!1))
              };
              if (!Pd || Wd !== Nd) return gJ.release(), Jd.wasPressed(Nd) && kd.swapCameraZoom(), void(Pd && Jd.wasPressed(Wd) && Zd());
              const Cd = gJ.update(Jd.wasPressed(Wd), Jd.isHeld(Wd), pd, hd());
              "tap" === Cd ? Zd() : "hold" === Cd && kd.swapCameraZoom()
            })(Jd, pd, kd), ((Jd, kd, pd) => {
              const Nd = (0, gd.j)("drop");
              if (Jd.wasPressed(Nd)) {
                kd.dropItem(!1);
                const dd = (0, ld.k)();
                "off" !== dd.buttonRepeat && (qd = pd, Bd = cd.d[dd.tapHoldTime].dropStackMs, (0, Dd.i)(Bd))
              }
              null !== qd && (!Jd.isHeld(Nd) || dd.selectedSlotEmpty() ? Md() : pd - qd >= Bd && (Md(), kd.dropItem(!0)))
            })(Jd, pd, kd), Ad.update(pd, Jd, kd, hd()), LJ(Jd, kd)
          },
          eJ = od.e.register({
            name: "gameplay",
            isActive: () => {
              const Jd = pJ && "keyboardMouse" === pd.d.get("activeInputDevice") && !(0, Qd.E)(),
                kd = (0, Qd.h)() ? [bd.d] : [];
              return ((0, Qd.h)() || Jd) && (0, Od.d)(kd) && dd.hasPlayer()
            },
            onFrame: dd => {
              const Jd = performance.now(),
                kd = (0, ld.k)(),
                pd = (0, fd.v)(dd, (0, fd.m)(kd, (0, gd.j)("pause"), (0, nd.e)().isSupported())),
                Nd = (0, fd.k)(pd, kd.swapSticks);
              return (0, Qd.h)() ? (NJ = !1, (0, Od.d)() ? (WJ = !1, zd.update(Nd.look, kd, pd.isHeld((0, gd.j)("use"))), lJ(pd, Nd.move, Jd), void OJ(pd, Jd)) : (WJ || (WJ = !0, Kd.lostToPadScreen(), oJ()), void QJ(pd, Jd))) : (NJ || (KJ(), NJ = !0), void lJ(pd, Nd.move, Jd))
            },
            onDeactivate: dd => {
              (0, Qd.h)() && Kd.lostToPadScreen(), oJ(dd)
            },
            onPeekFrame: Jd => {
              (0, Qd.h)() && (0, Od.d)(bd.j) && dd.hasPlayer() ? lJ(Jd, (0, fd.k)(Jd, (0, ld.k)().swapSticks).move, performance.now(), !0) : oJ()
            }
          }),
          RJ = (0, bd.f)(dd),
          IJ = (() => {
            const dd = Nd.j.subscribe(md.b, (dd => {
              !dd && (0, Qd.h)() && "inGame" === pd.d.get("gameState") && Nd.j.nO("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              Nd.j.unsubscribe(dd)
            }
          })();
        return () => {
          oJ(), dd.uninstall(), (0, yd.e)(!1), (0, Ed.h)(!1), Nd.j.unsubscribe(vd), Nd.j.unsubscribe(dJ), eJ(), RJ(), IJ(), zd.uninstall()
        }
      }
  },
  40553: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Ld,
      f: () => ed,
      j: () => Qd
    });
    var pd = kd(1307),
      Nd = kd(4131),
      Wd = kd(8699),
      Pd = kd(37095),
      Zd = kd(1751),
      gd = kd(1204),
      Cd = kd(8084),
      Kd = kd(8613),
      od = kd(8724);
    const ld = {
        emoteWheel: Wd.g,
        quickChatWheel: Kd.b,
        actionWheel: od.o
      },
      Qd = Object.keys(ld),
      Ld = "dead",
      Od = dd => (0, pd.k)().includes(dd),
      ed = dd => {
        const Jd = [(0, Cd.i)(Ld, (() => dd.hasPlayer() && dd.isPlayerDead())), (0, Cd.i)("sleeping", (() => Od(Pd.d))), (0, Cd.i)("turnstile", (() => Od(gd.g))), (0, Cd.i)("videoAd", Zd.h), (0, Cd.i)("replay", (() => (0, Nd.f)() || dd.isReplayMode())), (0, Cd.i)("freeCamera", (() => dd.isFreeCameraOn())), ...Object.entries(ld).map((dd => {
          let [Jd, kd] = dd;
          return (0, Cd.i)(Jd, kd)
        }))];
        return () => {
          for (const dd of Jd) dd()
        }
      }
  },
  40548: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Nd,
      h: () => gd,
      k: () => Zd,
      m: () => Kd,
      q: () => Pd,
      s: () => Wd,
      u: () => Cd,
      v: () => od
    });
    var pd = kd(8020);
    class Nd {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(dd, Jd, kd) {
        const Nd = (0, pd.i)(dd, Jd.lookDeadzone);
        if (Math.hypot(Nd.x, Nd.y) < .9 || Math.abs(Nd.x) < Math.abs(Nd.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = kd);
        const Wd = (Pd = Jd.lookSensitivityX, Math.min(1, 100 / Pd));
        var Pd;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (kd - this.fullTiltSinceMs - 250 * Wd) / (200 * Wd)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const Wd = (dd, Jd, kd, Nd, Wd) => {
        let Pd = 1;
        return "boost" === kd.lookCurve ? Pd = dd.update(Jd, kd, Wd) : dd.reset(),
          function(dd, Jd) {
            let {
              yawBoost: kd = 1,
              aiming: Nd = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const Wd = (0, pd.h)((0, pd.i)(dd, Jd.lookDeadzone), Jd.lookCurve),
              Pd = 220 * Math.PI / 180,
              Zd = Nd ? Jd.aimLookSensitivity / 100 : 1,
              gd = Jd.lookSensitivityX / 100 * Zd,
              Cd = Jd.lookSensitivityY / 100 * Zd;
            return {
              yawRadPerSec: Wd.x * Pd * gd * kd * (Jd.invertLookX ? -1 : 1),
              pitchRadPerSec: Wd.y * Pd * .7 * Cd * (Jd.invertLookY ? -1 : 1)
            }
          }(Jd, kd, {
            yawBoost: Pd,
            aiming: Nd
          })
      },
      Pd = (dd, Jd) => {
        const kd = Math.max(0, Math.min(250, Jd)) / 1e3;
        return {
          bY: dd.yawRadPerSec * kd,
          fY: dd.pitchRadPerSec * kd
        }
      },
      Zd = (dd, Jd) => Jd ? {
        move: dd.rightStick,
        look: dd.leftStick
      } : {
        move: dd.leftStick,
        look: dd.rightStick
      },
      gd = (dd, Jd) => {
        const kd = (0, pd.i)(dd, Jd),
          Nd = Math.min(1, Math.hypot(kd.x, kd.y));
        return {
          magnitude: Nd,
          speed: Math.min(1, Nd / .8),
          headingOffset: 0 === Nd ? 0 : Math.atan2(kd.x, -kd.y),
          x: kd.x,
          y: kd.y
        }
      },
      Cd = (dd, Jd) => {
        let {
          sprintPressed: kd,
          magnitude: pd,
          autoSprint: Nd,
          nowMs: Wd
        } = Jd;
        const Pd = kd ? Wd : dd.latchedAtMs,
          Zd = (dd => {
            let {
              running: Jd,
              magnitude: kd,
              sprintPressed: pd,
              autoSprint: Nd
            } = dd;
            return !(kd < .5) && (!!pd || !!(Nd && kd >= .9) || Jd)
          })({
            running: dd.running,
            magnitude: pd,
            sprintPressed: Wd - Pd <= 1e3,
            autoSprint: Nd
          });
        return {
          running: Zd,
          latchedAtMs: Zd ? -1 / 0 : Pd
        }
      },
      Kd = (dd, Jd, kd) => kd && dd.gyroAiming && "button" === dd.gyroActivation && dd.gyroButton !== Jd ? dd.gyroButton : null,
      od = (dd, Jd) => Jd ? {
        ...dd,
        isHeld: kd => kd !== Jd && dd.isHeld(kd),
        wasPressed: kd => kd !== Jd && dd.wasPressed(kd),
        wasReleased: kd => kd !== Jd && dd.wasReleased(kd),
        value: kd => kd === Jd ? 0 : dd.value(kd)
      } : dd
  },
  40566: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Nd,
      d: () => pd
    });
    const pd = dd => {
      let {
        mode: Jd,
        sneakHeld: kd,
        sneakPressed: pd,
        sneakTogglePressed: Nd,
        descending: Wd,
        canCrouch: Pd,
        toggled: Zd
      } = dd;
      return Pd ? Wd ? {
        crouchHeld: kd,
        toggled: !1
      } : "hold" === Jd ? {
        crouchHeld: kd,
        toggled: Nd ? !Zd : Zd
      } : {
        crouchHeld: !1,
        toggled: pd || Nd ? !Zd : Zd
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class Nd {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(dd, Jd) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = Jd, this.graceEndsMs = Jd + 500);
        const kd = Jd < this.graceEndsMs;
        return kd && (dd.sneakPressed || dd.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, Jd + 300))), dd.sneakHeld ? kd && dd.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: dd.sneakHeld && !this.ignoringHeld,
          sneakPressed: dd.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: dd.sneakTogglePressed && !kd
        }
      }
    }
  },
  40537: (dd, Jd, kd) => {
    kd(8771)
  },
  40543: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Gd
    });
    var pd = kd(29),
      Nd = kd(8699),
      Wd = kd(8712),
      Pd = kd(8031),
      Zd = kd(8077),
      gd = kd(8043),
      Cd = kd(40548),
      Kd = kd(40553),
      od = kd(8084),
      ld = kd(8020),
      Qd = kd(8613),
      Ld = kd(8724);
    const Od = [{
        isOpen: Nd.j,
        openButton: () => (0, Pd.j)("emoteWheel"),
        aim: dd => {
          pd.j.nO("emoteWheelPadAim", dd)
        },
        commit: dd => {
          pd.j.nO("requestEmoteWheelPadCommit", dd)
        },
        close: () => {
          pd.j.nO("requestEmoteWheelClose")
        }
      }, {
        isOpen: Qd.b,
        openButton: () => (0, Pd.j)("chat"),
        aim: dd => {
          pd.j.nO(Qd.d, dd)
        },
        commit: dd => {
          pd.j.nO(Qd.k, dd)
        },
        close: () => {
          pd.j.nO(Qd.g)
        },
        keptOpenBy: [Kd.d]
      }, {
        isOpen: Ld.o,
        openButton: () => (0, Pd.j)("actionButton"),
        aim: dd => {
          pd.j.nO(Ld.b, dd)
        },
        commit: dd => {
          pd.j.nO(Ld.f, dd)
        },
        close: () => {
          pd.j.nO(Ld.d)
        }
      }],
      ed = () => {
        var dd;
        return null !== (dd = Od.find((dd => dd.isOpen()))) && void 0 !== dd ? dd : null
      },
      Rd = dd => (0, Pd.N)(dd.openButton()),
      Id = (dd, Jd) => !(0, ld.H)(dd.frame.values, Jd),
      Gd = () => {
        let dd = null,
          Jd = !1,
          kd = !1;
        return Zd.e.register({
          name: "wheel",
          isActive: () => null !== ed(),
          peek: () => {
            const dd = ed();
            return dd && Rd(dd) ? null : {
              over: "gameplay",
              stick: (0, gd.k)().swapSticks ? "right" : "left"
            }
          },
          onFrame: pd => {
            var Nd;
            const ld = ed();
            if (!ld) return;
            if (null !== (0, od.c)([...Kd.j, ...null !== (Nd = ld.keptOpenBy) && void 0 !== Nd ? Nd : []])) return void ld.close();
            const Qd = ld.openButton(),
              Ld = (0, Cd.k)(pd.frame, (0, gd.k)().swapSticks),
              Od = Rd(ld) ? Ld.move : Ld.look;
            dd !== ld ? (dd = ld, Jd = !Id(pd, Qd) || Math.hypot(Od.x, Od.y) >= Wd.A, kd = !1) : kd && (kd = !1, Id(pd, Qd) && (Jd = !1)), ld.aim(Od);
            const Gd = (0, Pd.j)("menuConfirm"),
              vd = (0, Pd.j)("menuBack");
            return pd.wasPressed(vd) ? (Zd.e.consumeButton(vd), void ld.close()) : pd.wasPressed(Gd) || pd.wasPressed(Qd) ? (Zd.e.consumeButton(Gd), Zd.e.consumeButton(Qd), void ld.commit(!1)) : void(Jd && Id(pd, Qd) && (Jd = !1, ld.commit(!0)))
          },
          onDeactivate: () => {
            kd = null !== dd && ed() === dd, kd || (dd = null, Jd = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);