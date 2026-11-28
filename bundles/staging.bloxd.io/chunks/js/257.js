export const id = 257;
export const ids = [257];
export const modules = {
  38465: (dd, Od, md) => {
    md.d(Od, {
      d: () => gd,
      g: () => Yd
    });
    var Wd = md(3024),
      Fd = md(1566),
      Rd = md(66),
      Xd = md(7410),
      Kd = md(2993),
      hd = md(1349),
      vd = md(2092),
      Qd = md(2060),
      td = md(1572),
      od = md(1238),
      Nd = md(38469),
      qd = md(1155),
      Hd = md.n(qd),
      yd = md(1406),
      bd = md(1443),
      Td = md(1333),
      pd = md(1341);
    const Yd = "SleepingOverlay";

    function gd() {
      const {
        t: dd
      } = (0, od.G)(), [Od, md] = (0, Rd.useState)(!1), [qd, gd] = (0, Rd.useState)(null), [Ed, Jd] = (0, Rd.useState)(1), [Ud, xd] = (0, Rd.useState)(!1), [Bd, Sd] = (0, Rd.useState)(!1), sd = (0, Rd.useRef)(0), ud = (0, Rd.useRef)(!1), Vd = (0, Rd.useRef)(!1), Ad = (0, Rd.useRef)(), rd = (0, Rd.useRef)(null);

      function Gd() {
        const dd = null !== qd && void 0 !== qd ? qd : "Rested Speed";
        vd.gameBridge.send("wakeUp", Bd ? dd : null), rd.current = null, md(!1), gd(null), Jd(1), xd(!1), Sd(!1)
      }

      function nd() {
        return !Ud && (Gd(), !0)
      }
      return (0, Fd.f)("PlayerPhysicsTypeUpdate", (dd => {
        dd !== rd.current && (rd.current = dd, dd === Xd.q.SLEEPING ? (Vd.current || (sd.current = vd.gameBridge.lookup("cameraZoom", null), Vd.current = !0), ud.current = !0, vd.gameBridge.send("setCameraZoom", 3), md(!0), Jd(function() {
          for (const dd of vd.gameBridge.lookup("blocksStandingOn", null)) {
            if (Nd.c.leafBeds.includes(dd)) return console.log(`Found leaf bed: ${dd}`), 1;
            if (Nd.c.woolBeds.includes(dd)) return console.log(`Found woold bed: ${dd}`), 2;
            if (Nd.c.strongBeds.includes(dd)) return console.log(`Found strong bed ${dd}`), 3
          }
          return 1
        }())) : (Vd.current = !1, md(!1), gd(null), Jd(1)))
      })), (0, Rd.useEffect)((() => () => {
        (0, hd.u)(Yd)
      }), []), (0, Rd.useEffect)((() => {
        Od ? (0, hd.v)(Yd) : ((0, hd.u)(Yd), ud.current && (vd.gameBridge.send("setCameraZoom", sd.current), ud.current = !1))
      }), [Od]), (0, Td.m)("overlay", Ad, nd, Od), (0, pd.jsx)(Wd.d, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: Od,
        timeout: 300,
        nodeRef: Ad,
        unmountOnExit: !0,
        children: (0, pd.jsx)("div", {
          ref: Ad,
          onClick: dd => {
            nd() && dd.stopPropagation()
          },
          children: (0, pd.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, pd.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: Kd.h.map((Od => (0, pd.jsxs)(wd, {
                restedEffect: Od,
                Iv: qd,
                setChosenRestedEffect: gd,
                children: [(0, pd.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, pd.jsx)(Qd.d, {
                    text: [{
                      icon: Od
                    }]
                  }), Kd.d[Od].shortName]
                }), (0, pd.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: dd(Kd.d[Od].description, {
                    time: Kd.d[Od].effectLevelDurations[Ed] / 6e4
                  })
                })]
              }, Od)))
            }), (0, pd.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, pd.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, pd.jsxs)(td.g, {
                className: "SleepingOverlayWakeUpButton",
                onClick: dd => {
                  Bd ? Gd() : (xd(!0), (0, yd.kb)((() => {
                    xd(!1), Sd(!0)
                  }), !0)), dd.stopPropagation()
                },
                loading: Ud,
                children: [!Bd && (0, pd.jsxs)(pd.Fragment, {
                  children: [(0, pd.jsx)(bd.c, {
                    name: "film"
                  }), " ", dd("classicGame:watchAdToGetRestedPerk")]
                }), Bd && dd("classicGame:wakeUp")]
              }), (0, pd.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, pd.jsx)("div", {
                  className: Hd()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === Ed
                  }),
                  children: (0, pd.jsx)(Qd.d, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, pd.jsx)("div", {
                  className: Hd()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === Ed
                  }),
                  children: (0, pd.jsx)(Qd.d, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, pd.jsx)("div", {
                  className: Hd()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === Ed
                  }),
                  children: (0, pd.jsx)(Qd.d, {
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
    const wd = (0, Rd.memo)((function(dd) {
      let {
        children: Od,
        restedEffect: md,
        Iv: Wd,
        setChosenRestedEffect: Fd
      } = dd;
      return md === Wd ? (0, pd.jsx)(td.m, {
        onClick: dd => {
          dd.stopPropagation()
        },
        children: Od
      }) : (0, pd.jsx)(td.i, {
        onClick: dd => {
          Fd(md), dd.stopPropagation()
        },
        children: Od
      })
    }))
  },
  42526: (dd, Od, md) => {
    md.d(Od, {
      c: () => dO
    });
    var Wd = md(29),
      Fd = md(32),
      Rd = md(4908),
      Xd = md(387),
      Kd = md(1765),
      hd = md(9305),
      vd = md(4929),
      Qd = md(9835),
      td = md(9331),
      od = md(9311),
      Nd = md(9333),
      qd = md(1498),
      Hd = md(1814),
      yd = md(9341),
      bd = md(9794),
      Td = md(9944),
      pd = md(9848),
      Yd = md(9953),
      gd = md(2092),
      wd = md(9287),
      Ed = md(9868),
      Jd = md(9864),
      Ud = md(9842);
    class xd {
      constructor() {
        this.lostAtMs = null
      }
      update(dd, Od) {
        return dd ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= Od, Od - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class Bd {
      constructor(dd, Od) {
        this.press = dd, this.release = Od, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(dd, Od, md, Wd) {
        if (dd && null === this.downAtMs) return this.downAtMs = md, this.latched = Wd, void(this.token = this.press(Wd));
        null !== this.downAtMs && (this.latched ? dd && this.end() : !Od && md - this.downAtMs >= 40 && this.end())
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
    const Sd = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      sd = dd => {
        let Od = null;
        const md = new Ud.e,
          Wd = () => {
            Od && (((dd, Od, md) => {
              switch (md.kind) {
                case "reload":
                  return void Od.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void Od.specialActionUp(md.action);
                case "customButton":
                  return void gd.gameBridge.send("pressCustomButton", {
                    id: md.id,
                    down: !1
                  });
                case "touchButton":
                  dd.pressTouchButton(!1)
              }
            })(dd, Od.bodies, Od.action), Od = null)
          },
          Rd = (md, Fd, Rd, Xd) => {
            Wd(), Od = {
              action: Fd,
              bodies: md,
              heldBy: Rd,
              atMs: Xd
            }, ((dd, Od, md) => {
              switch (md.kind) {
                case "reload":
                  return Od.reloadGun(), void Od.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void Od.specialActionDown(md.action);
                case "customButton":
                  return void gd.gameBridge.send("pressCustomButton", {
                    id: md.id,
                    down: !0
                  });
                case "touchButton":
                  dd.pressTouchButton(!0)
              }
            })(dd, md, Fd)
          };
        return {
          update: (Xd, Kd, vd, Qd) => {
            var od;
            const Nd = (0, Ed.l)(dd.contextActionInputs()),
              qd = null !== (od = Nd[0]) && void 0 !== od ? od : Sd;
            (0, Jd.b)((0, Ed.d)(qd) ? qd : null);
            const Hd = (0, Ed.c)(Nd);
            (0, Jd.e)(Hd);
            const yd = (0, hd.h)("actionButton");
            if (Hd) {
              const dd = md.update(Kd.wasPressed(yd), Kd.isHeld(yd), vd, Qd);
              "tap" === dd ? Rd(Xd, qd, [yd], vd) : "hold" === dd && (td.b.consumeButton(yd), Fd.j.lQ(Yd.m, Nd))
            } else md.release(), Kd.wasPressed(yd) && Rd(Xd, qd, [yd], vd);
            Od && vd - Od.atMs >= 40 && !Od.heldBy.some((dd => (0, wd.L)(Kd.frame.values, dd))) && Wd()
          },
          pressPicked: (dd, Od) => {
            Rd(dd, Od, [(0, hd.h)("menuConfirm"), (0, hd.h)("actionButton")], performance.now())
          },
          release: () => {
            md.release(), Wd(), (0, Jd.b)(null), (0, Jd.e)(!1)
          }
        }
      };
    var ud = md(9285);
    var Vd = md(42518),
      Ad = md(9885),
      rd = md(3428),
      Gd = md(9325),
      nd = md(9984);
    var Ld = md(42510),
      Pd = md(9989),
      zd = md(42535),
      cd = md(9967),
      jd = md(9894),
      Dd = md(9896),
      ed = md(9902);
    class Id {
      constructor(dd) {
        this.bodies = dd, this.gesture = new Ud.e, this.zoomBodies = null
      }
      update(dd, Od, md, Wd, Fd) {
        if (!Fd) return this.release(), dd.wasPressed(Od);
        if (null !== this.zoomBodies) return dd.isHeld(Od) || this.endZoom(), !1;
        const Rd = this.gesture.update(dd.wasPressed(Od), dd.isHeld(Od), md, Wd);
        return "hold" === Rd && dd.isHeld(Od) && (this.zoomBodies = this.bodies(), this.zoomBodies.zoom(!0)), "tap" === Rd
      }
      release() {
        this.gesture.release(), this.endZoom()
      }
      endZoom() {
        var dd;
        null === (dd = this.zoomBodies) || void 0 === dd || dd.zoom(!1), this.zoomBodies = null
      }
    }
    var ld = md(9797),
      Cd = md(9854);
    const Zd = () => ld.d[(0, od.f)().tapHoldTime].wheelMs,
      kd = () => ((0, Qd.b)(), (0, Cd.b)("controllerMenuKey")),
      fd = (dd, Od, md) => new Bd((md => {
        const Wd = dd.bodies();
        return {
          bodies: Wd,
          press: Od(Wd, md)
        }
      }), (dd => {
        let {
          bodies: Od,
          press: Wd
        } = dd;
        md(Od, Wd)
      })),
      Md = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      dO = dd => {
        const Od = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let md = Md;
        const Qd = new zd.b,
          gd = Fd.j.subscribe("appManagerUpdated|activeInputDevice", (Od => {
            dd.deviceChanged(Od)
          }));
        let Ed = null,
          Jd = 0;
        const Bd = () => {
          Ed = null, (0, jd.g)(null)
        };
        let Sd = !1;
        const Cd = new xd,
          dO = dd.look,
          OO = new Ud.e,
          mO = new Ud.e,
          WO = sd(dd),
          FO = Fd.j.subscribe(Yd.p, (Od => {
            WO.pressPicked(dd.bodies(), Od)
          })),
          RO = fd(dd, ((dd, Od) => dd.primaryFireDown(!Od)), ((dd, Od) => {
            dd.primaryFireUp(Od)
          })),
          XO = fd(dd, (dd => dd.altFireDown()), ((dd, Od) => {
            dd.altFireUp(Od)
          }));
        let KO = !1,
          hO = -1 / 0,
          vO = !1,
          QO = !1;
        const tO = (0, bd.e)(wd.eb),
          oO = (0, bd.e)(wd.eb),
          NO = new Ud.e;
        let qO = !1;
        const HO = new Id((() => dd.bodies())),
          yO = () => {
            tO.reset(), oO.reset(), NO.release(), HO.release(), (0, ed.g)(!1), dO.release(), RO.cancel(), (0, Dd.f)(!1), XO.cancel(), WO.release(), OO.release(), mO.release(), Bd()
          },
          bO = function() {
            let Wd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            yO(), vO = !1, Wd || (KO = !1, md = Md, Object.assign(Od, {
              x: 0,
              y: 0,
              magnitude: 0,
              headingOffset: 0,
              jumpHeld: !1,
              jumpPressed: !1,
              running: !1,
              sprintHeld: !1
            }), dd.stopMoving())
          };
        let TO = !1;
        const pO = function(Wd, Rd, Xd) {
            let Kd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (!(0, qd.i)()) return void(TO || (TO = !0, KO = !1, dd.stopMoving()));
            TO = !1;
            const vd = (0, od.f)(),
              td = (0, Ld.g)(Rd, vd.moveDeadzone),
              Nd = (0, hd.h)("sprint");
            md = (0, Ld.o)(md, {
              sprintPressed: Wd.wasPressed(Nd),
              magnitude: td.magnitude,
              autoSprint: vd.autoSprint,
              nowMs: Xd
            }), Od.running = md.running, Od.sprintHeld = Wd.isHeld(Nd), Od.x = td.x, Od.y = td.y, Od.magnitude = td.speed, Od.headingOffset = td.headingOffset, td.magnitude > 0 && (!KO || Xd - hO >= 1e3) && (hO = Xd, Fd.j.lQ("stickMoved")), KO = td.magnitude > 0;
            const Hd = (0, hd.h)("jump");
            if (Od.jumpHeld = Wd.isHeld(Hd), Od.jumpPressed = Wd.wasPressed(Hd), Od.jumpPressed && dd.bodies().jumpDown(), Kd) return void dd.move(Od, null);
            const yd = (0, hd.h)("sneak"),
              bd = Qd.filter({
                sneakHeld: Wd.isHeld(yd),
                sneakPressed: Wd.wasPressed(yd),
                sneakTogglePressed: HO.update(Wd, (0, hd.h)("sneakToggle"), Xd, Zd(), dd.zoomAllowed())
              }, Xd);
            dd.move(Od, {
              ...bd,
              mode: vd.sneakMode
            })
          },
          YO = (dd, Od) => {
            const md = (0, hd.h)("chat");
            if ("off" === (0, od.f)().quickChat) return void(dd.wasPressed(md) && (td.b.consumeButton(md), Fd.j.lQ(Ad.b)));
            const Wd = OO.update(dd.wasPressed(md), dd.isHeld(md), Od, Zd());
            "tap" === Wd || "hold" === Wd && null === (0, Hd.c)() ? Fd.j.lQ(Ad.b) : "hold" === Wd && (td.b.consumeButton(md), Fd.j.lQ(pd.k))
          },
          gO = (Od, md) => {
            ((dd, Od) => {
              const md = (0, Td.d)(),
                Wd = (0, hd.h)("emoteWheel");
              if ("wheel" === (0, od.f)().emoteButton) return dd.wasPressed(Wd) && (td.b.consumeButton(Wd), Fd.j.lQ("requestEmoteWheelPadOpen", !0)), (0, Td.d)() !== md;
              const Rd = mO.update(dd.wasPressed(Wd), dd.isHeld(Wd), Od, Zd());
              return "tap" === Rd ? Fd.j.lQ("requestEmoteRepeatLast") : "hold" === Rd && (td.b.consumeButton(Wd), Fd.j.lQ("requestEmoteWheelPadOpen", !1)), (0, Td.d)() !== md
            })(Od, md) || YO(Od, md), Od.wasPressed((0, hd.h)("inventory")) && (td.b.consumeButton((0, hd.h)("inventory")), (0, Kd.v)(kd(), "inventory", dd.hasFullInventory())), Od.wasPressed((0, hd.h)("pause")) && (td.b.consumeButton((0, hd.h)("pause")), (0, vd.b)() === Xd.m.SOCIAL ? (0, Kd.s)(kd(), Xd.m.SOCIAL) : (0, Kd.j)(kd())), Od.wasPressed((0, hd.h)("leaderboard")) && !(0, Rd.g)() && (td.b.consumeButton((0, hd.h)("leaderboard")), ((dd, Od) => {
              if ("shop" === (0, Gd.e)()) return Fd.j.lQ(nd.g), void(0, Kd.s)(dd, Xd.m.SHOP, !0);
              (0, Kd.x)(dd, Od, (0, rd.i)())
            })(kd(), dd.hasLobbyTab()))
          },
          wO = (Od, md) => {
            const Wd = dd.bodies();
            ((Od, md) => {
              const Wd = (0, hd.h)("attack"),
                Fd = Od.wasPressed(Wd);
              Fd && !RO.isLatched() && (Sd = dd.targetsBlock()), RO.update(Fd, Od.isHeld(Wd), md, "toggle" === (0, od.f)().attackMode), RO.isLatched() && Sd ? Cd.update(dd.targetsBlock(), md) && RO.unlatch() : Cd.reset(), (0, Dd.f)(RO.isLatched())
            })(Od, md), XO.update(Od.wasPressed((0, hd.h)("use")), Od.isHeld((0, hd.h)("use")), md, !1), tO.update(Od.isHeld((0, hd.h)("hotbarPrevious")), md) && dd.scrollHotbar(-1), oO.update(Od.isHeld((0, hd.h)("hotbarNext")), md) && dd.scrollHotbar(1), ((Od, md, Wd) => {
              const Fd = (0, hd.h)("perspective"),
                Rd = (0, hd.h)("pickBlock"),
                Xd = dd.pickBlockAllowed();
              (0, ed.g)(Xd && !qO && dd.targetsBlock());
              const Kd = () => {
                md.pickBlock() && (qO = !0, (0, ed.g)(!1))
              };
              if (!Xd || Rd !== Fd) return NO.release(), Od.wasPressed(Fd) && md.swapCameraZoom(), void(Xd && Od.wasPressed(Rd) && Kd());
              const vd = NO.update(Od.wasPressed(Rd), Od.isHeld(Rd), Wd, Zd());
              "tap" === vd ? Kd() : "hold" === vd && md.swapCameraZoom()
            })(Od, Wd, md), ((Od, md, Wd) => {
              const Fd = (0, hd.h)("drop");
              if (Od.wasPressed(Fd)) {
                md.dropItem(!1);
                const dd = (0, od.f)();
                "off" !== dd.buttonRepeat && (Ed = Wd, Jd = ld.d[dd.tapHoldTime].dropStackMs, (0, jd.g)(Jd))
              }
              null !== Ed && (!Od.isHeld(Fd) || dd.selectedSlotEmpty() ? Bd() : Wd - Ed >= Jd && (Bd(), md.dropItem(!0)))
            })(Od, Wd, md), WO.update(Wd, Od, md, Zd()), gO(Od, md)
          },
          aO = td.b.register({
            name: "gameplay",
            isActive: () => {
              const Od = KO && "keyboardMouse" === Wd.e.get("activeInputDevice") && !(0, Nd.D)(),
                md = (0, Nd.h)() ? [Vd.c] : [];
              return ((0, Nd.h)() || Od) && (0, yd.g)(md) && dd.hasPlayer()
            },
            onFrame: dd => {
              const Od = performance.now(),
                md = (0, od.f)(),
                Wd = (0, Ld.q)(dd, (0, Ld.i)(md, (0, hd.h)("pause"), (0, Pd.c)().isSupported())),
                Fd = (0, Ld.h)(Wd, md.swapSticks);
              return (0, Nd.h)() ? (vO = !1, (0, yd.g)() ? (QO = !1, dO.update(Fd.look, md, Wd.isHeld((0, hd.h)("use"))), pO(Wd, Fd.move, Od), void wO(Wd, Od)) : (QO || (QO = !0, Qd.lostToPadScreen(), bO()), void YO(Wd, Od))) : (vO || (yO(), vO = !0), void pO(Wd, Fd.move, Od))
            },
            onDeactivate: dd => {
              (0, Nd.h)() && Qd.lostToPadScreen(), bO(dd)
            },
            onPeekFrame: Od => {
              (0, Nd.h)() && (0, yd.g)(Vd.h) && dd.hasPlayer() ? pO(Od, (0, Ld.h)(Od, (0, od.f)().swapSticks).move, performance.now(), !0) : bO()
            }
          }),
          EO = (0, Vd.g)(dd),
          JO = (() => {
            const dd = Fd.j.subscribe(ud.c, (dd => {
              !dd && (0, Nd.h)() && "inGame" === Wd.e.get("gameState") && Fd.j.lQ("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              Fd.j.unsubscribe(dd)
            }
          })();
        return () => {
          bO(), dd.uninstall(), (0, cd.d)(!1), (0, ed.g)(!1), Fd.j.unsubscribe(gd), Fd.j.unsubscribe(FO), aO(), EO(), JO(), dO.uninstall()
        }
      }
  },
  42518: (dd, Od, md) => {
    md.d(Od, {
      c: () => qd,
      g: () => yd,
      h: () => Nd
    });
    var Wd = md(1349),
      Fd = md(4908),
      Rd = md(9935),
      Xd = md(38465),
      Kd = md(1860),
      hd = md(1234),
      vd = md(9341),
      Qd = md(9848),
      td = md(9953);
    const od = {
        emoteWheel: Rd.f,
        quickChatWheel: Qd.b,
        actionWheel: td.r
      },
      Nd = Object.keys(od),
      qd = "dead",
      Hd = dd => (0, Wd.q)().includes(dd),
      yd = dd => {
        const Od = [(0, vd.l)(qd, (() => dd.hasPlayer() && dd.isPlayerDead())), (0, vd.l)("sleeping", (() => Hd(Xd.g))), (0, vd.l)("turnstile", (() => Hd(hd.d))), (0, vd.l)("videoAd", Kd.f), (0, vd.l)("replay", (() => (0, Fd.g)() || dd.isReplayMode())), (0, vd.l)("freeCamera", (() => dd.isFreeCameraOn())), ...Object.entries(od).map((dd => {
          let [Od, md] = dd;
          return (0, vd.l)(Od, md)
        }))];
        return () => {
          for (const dd of Od) dd()
        }
      }
  },
  42510: (dd, Od, md) => {
    md.d(Od, {
      c: () => Fd,
      g: () => hd,
      h: () => Kd,
      i: () => Qd,
      j: () => Xd,
      n: () => Rd,
      o: () => vd,
      q: () => td
    });
    var Wd = md(9287);
    class Fd {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(dd, Od, md) {
        const Fd = (0, Wd.h)(dd, Od.lookDeadzone);
        if (Math.hypot(Fd.x, Fd.y) < .9 || Math.abs(Fd.x) < Math.abs(Fd.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = md);
        const Rd = (Xd = Od.lookSensitivityX, Math.min(1, 100 / Xd));
        var Xd;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (md - this.fullTiltSinceMs - 250 * Rd) / (200 * Rd)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const Rd = (dd, Od, md, Fd, Rd) => {
        let Xd = 1;
        return "boost" === md.lookCurve ? Xd = dd.update(Od, md, Rd) : dd.reset(),
          function(dd, Od) {
            let {
              yawBoost: md = 1,
              aiming: Fd = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const Rd = (0, Wd.g)((0, Wd.h)(dd, Od.lookDeadzone), Od.lookCurve),
              Xd = 220 * Math.PI / 180,
              Kd = Fd ? Od.aimLookSensitivity / 100 : 1,
              hd = Od.lookSensitivityX / 100 * Kd,
              vd = Od.lookSensitivityY / 100 * Kd;
            return {
              yawRadPerSec: Rd.x * Xd * hd * md * (Od.invertLookX ? -1 : 1),
              pitchRadPerSec: Rd.y * Xd * .7 * vd * (Od.invertLookY ? -1 : 1)
            }
          }(Od, md, {
            yawBoost: Xd,
            aiming: Fd
          })
      },
      Xd = (dd, Od) => {
        const md = Math.max(0, Math.min(250, Od)) / 1e3;
        return {
          mV: dd.yawRadPerSec * md,
          RV: dd.pitchRadPerSec * md
        }
      },
      Kd = (dd, Od) => Od ? {
        move: dd.rightStick,
        look: dd.leftStick
      } : {
        move: dd.leftStick,
        look: dd.rightStick
      },
      hd = (dd, Od) => {
        const md = (0, Wd.h)(dd, Od),
          Fd = Math.min(1, Math.hypot(md.x, md.y));
        return {
          magnitude: Fd,
          speed: Math.min(1, Fd / .8),
          headingOffset: 0 === Fd ? 0 : Math.atan2(md.x, -md.y),
          x: md.x,
          y: md.y
        }
      },
      vd = (dd, Od) => {
        let {
          sprintPressed: md,
          magnitude: Wd,
          autoSprint: Fd,
          nowMs: Rd
        } = Od;
        const Xd = md ? Rd : dd.latchedAtMs,
          Kd = (dd => {
            let {
              running: Od,
              magnitude: md,
              sprintPressed: Wd,
              autoSprint: Fd
            } = dd;
            return !(md < .5) && (!!Wd || !!(Fd && md >= .9) || Od)
          })({
            running: dd.running,
            magnitude: Wd,
            sprintPressed: Rd - Xd <= 1e3,
            autoSprint: Fd
          });
        return {
          running: Kd,
          latchedAtMs: Kd ? -1 / 0 : Xd
        }
      },
      Qd = (dd, Od, md) => md && dd.gyroAiming && "button" === dd.gyroActivation && dd.gyroButton !== Od ? dd.gyroButton : null,
      td = (dd, Od) => Od ? {
        ...dd,
        isHeld: md => md !== Od && dd.isHeld(md),
        wasPressed: md => md !== Od && dd.wasPressed(md),
        wasReleased: md => md !== Od && dd.wasReleased(md),
        value: md => md === Od ? 0 : dd.value(md)
      } : dd
  },
  42535: (dd, Od, md) => {
    md.d(Od, {
      b: () => Fd,
      e: () => Wd
    });
    const Wd = dd => {
      let {
        mode: Od,
        sneakHeld: md,
        sneakPressed: Wd,
        sneakTogglePressed: Fd,
        descending: Rd,
        canCrouch: Xd,
        toggled: Kd
      } = dd;
      return Xd ? Rd ? {
        crouchHeld: md,
        toggled: !1
      } : "hold" === Od ? {
        crouchHeld: md,
        toggled: Fd ? !Kd : Kd
      } : {
        crouchHeld: !1,
        toggled: Wd || Fd ? !Kd : Kd
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class Fd {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(dd, Od) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = Od, this.graceEndsMs = Od + 500);
        const md = Od < this.graceEndsMs;
        return md && (dd.sneakPressed || dd.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, Od + 300))), dd.sneakHeld ? md && dd.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: dd.sneakHeld && !this.ignoringHeld,
          sneakPressed: dd.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: dd.sneakTogglePressed && !md
        }
      }
    }
  },
  42494: (dd, Od, md) => {
    md(9989)
  },
  42501: (dd, Od, md) => {
    md.d(Od, {
      d: () => pd
    });
    var Wd = md(32),
      Fd = md(9935),
      Rd = md(9942),
      Xd = md(9305),
      Kd = md(9331),
      hd = md(9311),
      vd = md(42510),
      Qd = md(42518),
      td = md(9341),
      od = md(9287),
      Nd = md(9848),
      qd = md(9953);
    const Hd = [{
        isOpen: Fd.h,
        openButton: () => (0, Xd.h)("emoteWheel"),
        aim: dd => {
          Wd.j.lQ("emoteWheelPadAim", dd)
        },
        commit: dd => {
          Wd.j.lQ("requestEmoteWheelPadCommit", dd)
        },
        close: () => {
          Wd.j.lQ("requestEmoteWheelClose")
        }
      }, {
        isOpen: Nd.b,
        openButton: () => (0, Xd.h)("chat"),
        aim: dd => {
          Wd.j.lQ(Nd.c, dd)
        },
        commit: dd => {
          Wd.j.lQ(Nd.h, dd)
        },
        close: () => {
          Wd.j.lQ(Nd.g)
        },
        keptOpenBy: [Qd.c]
      }, {
        isOpen: qd.r,
        openButton: () => (0, Xd.h)("actionButton"),
        aim: dd => {
          Wd.j.lQ(qd.d, dd)
        },
        commit: dd => {
          Wd.j.lQ(qd.j, dd)
        },
        close: () => {
          Wd.j.lQ(qd.g)
        }
      }],
      yd = () => {
        var dd;
        return null !== (dd = Hd.find((dd => dd.isOpen()))) && void 0 !== dd ? dd : null
      },
      bd = dd => (0, Xd.N)(dd.openButton()),
      Td = (dd, Od) => !(0, od.L)(dd.frame.values, Od),
      pd = () => {
        let dd = null,
          Od = !1,
          md = !1;
        return Kd.b.register({
          name: "wheel",
          isActive: () => null !== yd(),
          peek: () => {
            const dd = yd();
            return dd && bd(dd) ? null : {
              over: "gameplay",
              stick: (0, hd.f)().swapSticks ? "right" : "left"
            }
          },
          onFrame: Wd => {
            var Fd;
            const od = yd();
            if (!od) return;
            if (null !== (0, td.e)([...Qd.h, ...null !== (Fd = od.keptOpenBy) && void 0 !== Fd ? Fd : []])) return void od.close();
            const Nd = od.openButton(),
              qd = (0, vd.h)(Wd.frame, (0, hd.f)().swapSticks),
              Hd = bd(od) ? qd.move : qd.look;
            dd !== od ? (dd = od, Od = !Td(Wd, Nd) || Math.hypot(Hd.x, Hd.y) >= Rd.F, md = !1) : md && (md = !1, Td(Wd, Nd) && (Od = !1)), od.aim(Hd);
            const pd = (0, Xd.h)("menuConfirm"),
              Yd = (0, Xd.h)("menuBack");
            return Wd.wasPressed(Yd) ? (Kd.b.consumeButton(Yd), void od.close()) : Wd.wasPressed(pd) || Wd.wasPressed(Nd) ? (Kd.b.consumeButton(pd), Kd.b.consumeButton(Nd), void od.commit(!1)) : void(Od && Td(Wd, Nd) && (Od = !1, od.commit(!0)))
          },
          onDeactivate: () => {
            md = null !== dd && yd() === dd, md || (dd = null, Od = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);