export const id = 224;
export const ids = [224];
export const modules = {
  37025: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Qm,
      g: () => Km
    });
    var hm = fm(4192),
      Am = fm(1449),
      am = fm(59),
      xm = fm(6451),
      wm = fm(4180),
      Dm = fm(1286),
      im = fm(1905),
      Rm = fm(1884),
      pm = fm(1454),
      Em = fm(1208),
      om = fm(37032),
      Om = fm(1080),
      Ym = fm.n(Om),
      qm = fm(1309),
      jm = fm(1089),
      Vm = fm(1281),
      Im = fm(1135);
    const Km = "SleepingOverlay";

    function Qm() {
      const {
        t: mm
      } = (0, Em.A)(), [Tm, fm] = (0, am.useState)(!1), [Om, Qm] = (0, am.useState)(null), [Jm, cm] = (0, am.useState)(1), [zm, Zm] = (0, am.useState)(!1), [km, bm] = (0, am.useState)(!1), Sm = (0, am.useRef)(0), em = (0, am.useRef)(!1), Nm = (0, am.useRef)(!1), Gm = (0, am.useRef)(), Xm = (0, am.useRef)(null);

      function Pm() {
        const mm = null !== Om && void 0 !== Om ? Om : "Rested Speed";
        im.gameBridge.send("wakeUp", km ? mm : null), Xm.current = null, fm(!1), Qm(null), cm(1), Zm(!1), bm(!1)
      }

      function Hm() {
        return !zm && (Pm(), !0)
      }
      return (0, Am.g)("PlayerPhysicsTypeUpdate", (mm => {
        mm !== Xm.current && (Xm.current = mm, mm === xm.m.SLEEPING ? (Nm.current || (Sm.current = im.gameBridge.lookup("cameraZoom", null), Nm.current = !0), em.current = !0, im.gameBridge.send("setCameraZoom", 3), fm(!0), cm(function() {
          for (const mm of im.gameBridge.lookup("blocksStandingOn", null)) {
            if (om.e.leafBeds.includes(mm)) return console.log(`Found leaf bed: ${mm}`), 1;
            if (om.e.woolBeds.includes(mm)) return console.log(`Found woold bed: ${mm}`), 2;
            if (om.e.strongBeds.includes(mm)) return console.log(`Found strong bed ${mm}`), 3
          }
          return 1
        }())) : (Nm.current = !1, fm(!1), Qm(null), cm(1)))
      })), (0, am.useEffect)((() => () => {
        (0, Dm.l)(Km)
      }), []), (0, am.useEffect)((() => {
        Tm ? (0, Dm.p)(Km) : ((0, Dm.l)(Km), em.current && (im.gameBridge.send("setCameraZoom", Sm.current), em.current = !1))
      }), [Tm]), (0, Vm.s)("overlay", Gm, Hm, Tm), (0, Im.jsx)(hm.b, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: Tm,
        timeout: 300,
        nodeRef: Gm,
        unmountOnExit: !0,
        children: (0, Im.jsx)("div", {
          ref: Gm,
          onClick: mm => {
            Hm() && mm.stopPropagation()
          },
          children: (0, Im.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, Im.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: wm.k.map((Tm => (0, Im.jsxs)(nm, {
                restedEffect: Tm,
                aR: Om,
                setChosenRestedEffect: Qm,
                children: [(0, Im.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, Im.jsx)(Rm.b, {
                    text: [{
                      icon: Tm
                    }]
                  }), wm.h[Tm].shortName]
                }), (0, Im.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: mm(wm.h[Tm].description, {
                    time: wm.h[Tm].effectLevelDurations[Jm] / 6e4
                  })
                })]
              }, Tm)))
            }), (0, Im.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, Im.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, Im.jsxs)(pm.e, {
                className: "SleepingOverlayWakeUpButton",
                onClick: mm => {
                  km ? Pm() : (Zm(!0), (0, qm._)((() => {
                    Zm(!1), bm(!0)
                  }), !0)), mm.stopPropagation()
                },
                loading: zm,
                children: [!km && (0, Im.jsxs)(Im.Fragment, {
                  children: [(0, Im.jsx)(jm.c, {
                    name: "film"
                  }), " ", mm("classicGame:watchAdToGetRestedPerk")]
                }), km && mm("classicGame:wakeUp")]
              }), (0, Im.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, Im.jsx)("div", {
                  className: Ym()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === Jm
                  }),
                  children: (0, Im.jsx)(Rm.b, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, Im.jsx)("div", {
                  className: Ym()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === Jm
                  }),
                  children: (0, Im.jsx)(Rm.b, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, Im.jsx)("div", {
                  className: Ym()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === Jm
                  }),
                  children: (0, Im.jsx)(Rm.b, {
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
    const nm = (0, am.memo)((function(mm) {
      let {
        children: Tm,
        restedEffect: fm,
        aR: hm,
        setChosenRestedEffect: Am
      } = mm;
      return fm === hm ? (0, Im.jsx)(pm.m, {
        onClick: mm => {
          mm.stopPropagation()
        },
        children: Tm
      }) : (0, Im.jsx)(pm.g, {
        onClick: mm => {
          Am(fm), mm.stopPropagation()
        },
        children: Tm
      })
    }))
  },
  40648: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => dm
    });
    var hm = fm(23),
      Am = fm(31),
      am = fm(4210),
      xm = fm(339),
      wm = fm(1635),
      Dm = fm(8080),
      im = fm(4216),
      Rm = fm(8639),
      pm = fm(8110),
      Em = fm(8088),
      om = fm(8118),
      Om = fm(1678),
      Ym = fm(8120),
      qm = fm(8585),
      jm = fm(8745),
      Vm = fm(8652),
      Im = fm(8752),
      Km = fm(1905),
      Qm = fm(8066),
      nm = fm(8672),
      Jm = fm(8668),
      cm = fm(8646);
    class zm {
      constructor() {
        this.lostAtMs = null
      }
      update(mm, Tm) {
        return mm ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= Tm, Tm - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class Zm {
      constructor(mm, Tm) {
        this.press = mm, this.release = Tm, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(mm, Tm, fm, hm) {
        if (mm && null === this.downAtMs) return this.downAtMs = fm, this.latched = hm, void(this.token = this.press());
        null !== this.downAtMs && (this.latched ? mm && this.end() : !Tm && fm - this.downAtMs >= 40 && this.end())
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
        const mm = this.token;
        this.downAtMs = null, this.token = null, this.latched = !1, this.release(mm)
      }
    }
    const km = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      bm = mm => {
        let Tm = null;
        const fm = new cm.b,
          hm = () => {
            Tm && (((mm, Tm, fm) => {
              switch (fm.kind) {
                case "reload":
                  return void Tm.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void Tm.specialActionUp(fm.action);
                case "customButton":
                  return void Km.gameBridge.send("pressCustomButton", {
                    id: fm.id,
                    down: !1
                  });
                case "touchButton":
                  mm.pressTouchButton(!1)
              }
            })(mm, Tm.bodies, Tm.action), Tm = null)
          },
          am = (fm, Am, am, xm) => {
            hm(), Tm = {
              action: Am,
              bodies: fm,
              heldBy: am,
              atMs: xm
            }, ((mm, Tm, fm) => {
              switch (fm.kind) {
                case "reload":
                  return Tm.reloadGun(), void Tm.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void Tm.specialActionDown(fm.action);
                case "customButton":
                  return void Km.gameBridge.send("pressCustomButton", {
                    id: fm.id,
                    down: !0
                  });
                case "touchButton":
                  mm.pressTouchButton(!0)
              }
            })(mm, fm, Am)
          };
        return {
          update: (xm, wm, im, Rm) => {
            var Em;
            const om = (0, nm.l)(mm.contextActionInputs()),
              Om = null !== (Em = om[0]) && void 0 !== Em ? Em : km;
            (0, Jm.d)((0, nm.e)(Om) ? Om : null);
            const Ym = (0, nm.c)(om);
            (0, Jm.h)(Ym);
            const qm = (0, Dm.k)("actionButton");
            if (Ym) {
              const mm = fm.update(wm.wasPressed(qm), wm.isHeld(qm), im, Rm);
              "tap" === mm ? am(xm, Om, [qm], im) : "hold" === mm && (pm.d.consumeButton(qm), Am.j.gp(Im.l, om))
            } else fm.release(), wm.wasPressed(qm) && am(xm, Om, [qm], im);
            Tm && im - Tm.atMs >= 40 && !Tm.heldBy.some((mm => (0, Qm.N)(wm.frame.values, mm))) && hm()
          },
          pressPicked: (mm, Tm) => {
            am(mm, Tm, [(0, Dm.k)("menuConfirm"), (0, Dm.k)("actionButton")], performance.now())
          },
          release: () => {
            fm.release(), hm(), (0, Jm.d)(null), (0, Jm.h)(!1)
          }
        }
      };
    var Sm = fm(8059);
    var em = fm(40646),
      Nm = fm(8683),
      Gm = fm(8107),
      Xm = fm(8788);
    var Pm = fm(40641),
      Hm = fm(8792),
      ym = fm(40654),
      Cm = fm(8778),
      rm = fm(8688),
      sm = fm(8697),
      lm = fm(8699),
      Mm = fm(8593),
      um = fm(8663);
    const Bm = () => Mm.c[(0, Em.f)().tapHoldTime].wheelMs,
      Lm = () => ((0, Rm.b)(), (0, um.b)("controllerMenuKey")),
      tm = (mm, Tm, fm) => new Zm((() => {
        const fm = mm.bodies();
        return {
          bodies: fm,
          press: Tm(fm)
        }
      }), (mm => {
        let {
          bodies: Tm,
          press: hm
        } = mm;
        fm(Tm, hm)
      })),
      Um = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      dm = mm => {
        const Tm = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let fm = Um;
        const Rm = new ym.b,
          Km = Am.j.subscribe("appManagerUpdated|activeInputDevice", (Tm => {
            mm.deviceChanged(Tm)
          }));
        let nm = null,
          Jm = 0;
        const Zm = () => {
          nm = null, (0, rm.c)(null)
        };
        let km = !1;
        const um = new zm,
          dm = mm.look,
          gm = new cm.b,
          Wm = new cm.b,
          Fm = bm(mm),
          mT = Am.j.subscribe(Im.p, (Tm => {
            Fm.pressPicked(mm.bodies(), Tm)
          })),
          TT = tm(mm, (mm => mm.primaryFireDown()), ((mm, Tm) => {
            mm.primaryFireUp(Tm)
          })),
          fT = tm(mm, (mm => mm.altFireDown()), ((mm, Tm) => {
            mm.altFireUp(Tm)
          }));
        let hT = !1,
          AT = !1,
          aT = !1;
        const xT = (0, qm.c)(Qm.ab),
          wT = (0, qm.c)(Qm.ab),
          DT = new cm.b;
        let iT = !1;
        const RT = () => {
            xT.reset(), wT.reset(), DT.release(), (0, lm.h)(!1), dm.release(), TT.cancel(), (0, sm.g)(!1), fT.cancel(), Fm.release(), gm.release(), Wm.release(), Zm()
          },
          pT = function() {
            let hm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            RT(), AT = !1, hm || (hT = !1, fm = Um, Object.assign(Tm, {
              x: 0,
              y: 0,
              magnitude: 0,
              headingOffset: 0,
              jumpHeld: !1,
              jumpPressed: !1,
              running: !1,
              sprintHeld: !1
            }), mm.stopMoving())
          },
          ET = function(hm, Am, am) {
            let xm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const wm = (0, Em.f)(),
              im = (0, Pm.c)(Am, wm.moveDeadzone),
              pm = (0, Dm.k)("sprint");
            fm = (0, Pm.p)(fm, {
              sprintPressed: hm.wasPressed(pm),
              magnitude: im.magnitude,
              autoSprint: wm.autoSprint,
              nowMs: am
            }), Tm.running = fm.running, Tm.sprintHeld = hm.isHeld(pm), Tm.x = im.x, Tm.y = im.y, Tm.magnitude = im.speed, Tm.headingOffset = im.headingOffset, hT = im.magnitude > 0;
            const om = (0, Dm.k)("jump");
            if (Tm.jumpHeld = hm.isHeld(om), Tm.jumpPressed = hm.wasPressed(om), Tm.jumpPressed && mm.bodies().jumpDown(), xm) return void mm.move(Tm, null);
            const Om = (0, Dm.k)("sneak"),
              Ym = Rm.filter({
                sneakHeld: hm.isHeld(Om),
                sneakPressed: hm.wasPressed(Om),
                sneakTogglePressed: hm.wasPressed((0, Dm.k)("sneakToggle"))
              }, am);
            mm.move(Tm, {
              ...Ym,
              mode: wm.sneakMode
            })
          },
          oT = (mm, Tm) => {
            const fm = (0, Dm.k)("chat");
            if ("off" === (0, Em.f)().quickChat) return void(mm.wasPressed(fm) && (pm.d.consumeButton(fm), Am.j.gp(Nm.b)));
            const hm = gm.update(mm.wasPressed(fm), mm.isHeld(fm), Tm, Bm());
            "tap" === hm || "hold" === hm && null === (0, Om.c)() ? Am.j.gp(Nm.b) : "hold" === hm && (pm.d.consumeButton(fm), Am.j.gp(Vm.n))
          },
          OT = (Tm, fm) => {
            ((mm, Tm) => {
              const fm = (0, jm.b)(),
                hm = (0, Dm.k)("emoteWheel");
              if ("wheel" === (0, Em.f)().emoteButton) return mm.wasPressed(hm) && (pm.d.consumeButton(hm), Am.j.gp("requestEmoteWheelPadOpen", !0)), (0, jm.b)() !== fm;
              const am = Wm.update(mm.wasPressed(hm), mm.isHeld(hm), Tm, Bm());
              return "tap" === am ? Am.j.gp("requestEmoteRepeatLast") : "hold" === am && (pm.d.consumeButton(hm), Am.j.gp("requestEmoteWheelPadOpen", !1)), (0, jm.b)() !== fm
            })(Tm, fm) || oT(Tm, fm), Tm.wasPressed((0, Dm.k)("inventory")) && (pm.d.consumeButton((0, Dm.k)("inventory")), (0, wm.v)(Lm(), "inventory", mm.hasFullInventory())), Tm.wasPressed((0, Dm.k)("pause")) && (pm.d.consumeButton((0, Dm.k)("pause")), (0, im.b)() === xm.n.SOCIAL ? (0, wm.t)(Lm(), xm.n.SOCIAL) : (0, wm.f)(Lm())), Tm.wasPressed((0, Dm.k)("leaderboard")) && !(0, am.e)() && (pm.d.consumeButton((0, Dm.k)("leaderboard")), ((mm, Tm) => {
              if ("shop" === (0, Gm.d)()) return Am.j.gp(Xm.g), void(0, wm.t)(mm, xm.n.SHOP, !0);
              (0, wm.t)(mm, xm.n.LOBBY_LEADERBOARD, Tm)
            })(Lm(), mm.hasLobbyTab()))
          },
          YT = (Tm, fm) => {
            const hm = mm.bodies();
            ((Tm, fm) => {
              const hm = (0, Dm.k)("attack"),
                Am = Tm.wasPressed(hm);
              Am && !TT.isLatched() && (km = mm.targetsBlock()), TT.update(Am, Tm.isHeld(hm), fm, "toggle" === (0, Em.f)().attackMode), TT.isLatched() && km ? um.update(mm.targetsBlock(), fm) && TT.unlatch() : um.reset(), (0, sm.g)(TT.isLatched())
            })(Tm, fm), fT.update(Tm.wasPressed((0, Dm.k)("use")), Tm.isHeld((0, Dm.k)("use")), fm, !1), xT.update(Tm.isHeld((0, Dm.k)("hotbarPrevious")), fm) && mm.scrollHotbar(-1), wT.update(Tm.isHeld((0, Dm.k)("hotbarNext")), fm) && mm.scrollHotbar(1), ((Tm, fm, hm) => {
              const Am = (0, Dm.k)("perspective"),
                am = (0, Dm.k)("pickBlock"),
                xm = mm.pickBlockAllowed();
              (0, lm.h)(xm && !iT && mm.targetsBlock());
              const wm = () => {
                fm.pickBlock() && (iT = !0, (0, lm.h)(!1))
              };
              if (!xm || am !== Am) return DT.release(), Tm.wasPressed(Am) && fm.swapCameraZoom(), void(xm && Tm.wasPressed(am) && wm());
              const im = DT.update(Tm.wasPressed(am), Tm.isHeld(am), hm, Bm());
              "tap" === im ? wm() : "hold" === im && fm.swapCameraZoom()
            })(Tm, hm, fm), ((Tm, fm, hm) => {
              const Am = (0, Dm.k)("drop");
              if (Tm.wasPressed(Am)) {
                fm.dropItem(!1);
                const mm = (0, Em.f)();
                "off" !== mm.buttonRepeat && (nm = hm, Jm = Mm.c[mm.tapHoldTime].dropStackMs, (0, rm.c)(Jm))
              }
              null !== nm && (!Tm.isHeld(Am) || mm.selectedSlotEmpty() ? Zm() : hm - nm >= Jm && (Zm(), fm.dropItem(!0)))
            })(Tm, hm, fm), Fm.update(hm, Tm, fm, Bm()), OT(Tm, fm)
          },
          qT = pm.d.register({
            name: "gameplay",
            isActive: () => {
              const Tm = hT && "keyboardMouse" === hm.c.get("activeInputDevice") && !(0, om.F)(),
                fm = (0, om.m)() ? [em.c] : [];
              return ((0, om.m)() || Tm) && (0, Ym.g)(fm) && mm.hasPlayer()
            },
            onFrame: mm => {
              const Tm = performance.now(),
                fm = (0, Em.f)(),
                hm = (0, Pm.q)(mm, (0, Pm.h)(fm, (0, Dm.k)("pause"), (0, Hm.b)().isSupported())),
                Am = (0, Pm.g)(hm, fm.swapSticks);
              return (0, om.m)() ? (AT = !1, (0, Ym.g)() ? (aT = !1, dm.update(Am.look, fm, hm.isHeld((0, Dm.k)("use"))), ET(hm, Am.move, Tm), void YT(hm, Tm)) : (aT || (aT = !0, Rm.lostToPadScreen(), pT()), void oT(hm, Tm))) : (AT || (RT(), AT = !0), void ET(hm, Am.move, Tm))
            },
            onDeactivate: mm => {
              (0, om.m)() && Rm.lostToPadScreen(), pT(mm)
            },
            onPeekFrame: Tm => {
              (0, om.m)() && (0, Ym.g)(em.j) && mm.hasPlayer() ? ET(Tm, (0, Pm.g)(Tm, (0, Em.f)().swapSticks).move, performance.now(), !0) : pT()
            }
          }),
          jT = (0, em.f)(mm),
          VT = (() => {
            const mm = Am.j.subscribe(Sm.c, (mm => {
              !mm && (0, om.m)() && "inGame" === hm.c.get("gameState") && Am.j.gp("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              Am.j.unsubscribe(mm)
            }
          })();
        return () => {
          pT(), mm.uninstall(), (0, Cm.f)(!1), (0, lm.h)(!1), Am.j.unsubscribe(Km), Am.j.unsubscribe(mT), qT(), jT(), VT(), dm.uninstall()
        }
      }
  },
  40646: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Om,
      f: () => qm,
      j: () => om
    });
    var hm = fm(1286),
      Am = fm(4210),
      am = fm(8726),
      xm = fm(37025),
      wm = fm(1698),
      Dm = fm(1201),
      im = fm(8120),
      Rm = fm(8652),
      pm = fm(8752);
    const Em = {
        emoteWheel: am.g,
        quickChatWheel: Rm.c,
        actionWheel: pm.s
      },
      om = Object.keys(Em),
      Om = "dead",
      Ym = mm => (0, hm.i)().includes(mm),
      qm = mm => {
        const Tm = [(0, im.j)(Om, (() => mm.hasPlayer() && mm.isPlayerDead())), (0, im.j)("sleeping", (() => Ym(xm.g))), (0, im.j)("turnstile", (() => Ym(Dm.f))), (0, im.j)("videoAd", wm.e), (0, im.j)("replay", (() => (0, Am.e)() || mm.isReplayMode())), (0, im.j)("freeCamera", (() => mm.isFreeCameraOn())), ...Object.entries(Em).map((mm => {
          let [Tm, fm] = mm;
          return (0, im.j)(Tm, fm)
        }))];
        return () => {
          for (const mm of Tm) mm()
        }
      }
  },
  40641: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Am,
      c: () => Dm,
      g: () => wm,
      h: () => Rm,
      k: () => xm,
      m: () => am,
      p: () => im,
      q: () => pm
    });
    var hm = fm(8066);
    class Am {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(mm, Tm, fm) {
        const Am = (0, hm.n)(mm, Tm.lookDeadzone);
        if (Math.hypot(Am.x, Am.y) < .9 || Math.abs(Am.x) < Math.abs(Am.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = fm);
        const am = (xm = Tm.lookSensitivityX, Math.min(1, 100 / xm));
        var xm;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (fm - this.fullTiltSinceMs - 250 * am) / (200 * am)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const am = (mm, Tm, fm, Am, am) => {
        let xm = 1;
        return "boost" === fm.lookCurve ? xm = mm.update(Tm, fm, am) : mm.reset(),
          function(mm, Tm) {
            let {
              yawBoost: fm = 1,
              aiming: Am = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const am = (0, hm.l)((0, hm.n)(mm, Tm.lookDeadzone), Tm.lookCurve),
              xm = 220 * Math.PI / 180,
              wm = Am ? Tm.aimLookSensitivity / 100 : 1,
              Dm = Tm.lookSensitivityX / 100 * wm,
              im = Tm.lookSensitivityY / 100 * wm;
            return {
              yawRadPerSec: am.x * xm * Dm * fm * (Tm.invertLookX ? -1 : 1),
              pitchRadPerSec: am.y * xm * .7 * im * (Tm.invertLookY ? -1 : 1)
            }
          }(Tm, fm, {
            yawBoost: xm,
            aiming: Am
          })
      },
      xm = (mm, Tm) => {
        const fm = Math.max(0, Math.min(250, Tm)) / 1e3;
        return {
          XN: mm.yawRadPerSec * fm,
          yN: mm.pitchRadPerSec * fm
        }
      },
      wm = (mm, Tm) => Tm ? {
        move: mm.rightStick,
        look: mm.leftStick
      } : {
        move: mm.leftStick,
        look: mm.rightStick
      },
      Dm = (mm, Tm) => {
        const fm = (0, hm.n)(mm, Tm),
          Am = Math.min(1, Math.hypot(fm.x, fm.y));
        return {
          magnitude: Am,
          speed: Math.min(1, Am / .8),
          headingOffset: 0 === Am ? 0 : Math.atan2(fm.x, -fm.y),
          x: fm.x,
          y: fm.y
        }
      },
      im = (mm, Tm) => {
        let {
          sprintPressed: fm,
          magnitude: hm,
          autoSprint: Am,
          nowMs: am
        } = Tm;
        const xm = fm ? am : mm.latchedAtMs,
          wm = (mm => {
            let {
              running: Tm,
              magnitude: fm,
              sprintPressed: hm,
              autoSprint: Am
            } = mm;
            return !(fm < .5) && (!!hm || !!(Am && fm >= .9) || Tm)
          })({
            running: mm.running,
            magnitude: hm,
            sprintPressed: am - xm <= 1e3,
            autoSprint: Am
          });
        return {
          running: wm,
          latchedAtMs: wm ? -1 / 0 : xm
        }
      },
      Rm = (mm, Tm, fm) => fm && mm.gyroAiming && "button" === mm.gyroActivation && mm.gyroButton !== Tm ? mm.gyroButton : null,
      pm = (mm, Tm) => Tm ? {
        ...mm,
        isHeld: fm => fm !== Tm && mm.isHeld(fm),
        wasPressed: fm => fm !== Tm && mm.wasPressed(fm),
        wasReleased: fm => fm !== Tm && mm.wasReleased(fm),
        value: fm => fm === Tm ? 0 : mm.value(fm)
      } : mm
  },
  40654: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Am,
      c: () => hm
    });
    const hm = mm => {
      let {
        mode: Tm,
        sneakHeld: fm,
        sneakPressed: hm,
        sneakTogglePressed: Am,
        descending: am,
        canCrouch: xm,
        toggled: wm
      } = mm;
      return xm ? am ? {
        crouchHeld: fm,
        toggled: !1
      } : "hold" === Tm ? {
        crouchHeld: fm,
        toggled: Am ? !wm : wm
      } : {
        crouchHeld: !1,
        toggled: hm || Am ? !wm : wm
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class Am {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(mm, Tm) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = Tm, this.graceEndsMs = Tm + 500);
        const fm = Tm < this.graceEndsMs;
        return fm && (mm.sneakPressed || mm.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, Tm + 300))), mm.sneakHeld ? fm && mm.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: mm.sneakHeld && !this.ignoringHeld,
          sneakPressed: mm.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: mm.sneakTogglePressed && !fm
        }
      }
    }
  },
  40633: (mm, Tm, fm) => {
    fm(8792)
  },
  40639: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Im
    });
    var hm = fm(31),
      Am = fm(8726),
      am = fm(8739),
      xm = fm(8080),
      wm = fm(8110),
      Dm = fm(8088),
      im = fm(40641),
      Rm = fm(40646),
      pm = fm(8120),
      Em = fm(8066),
      om = fm(8652),
      Om = fm(8752);
    const Ym = [{
        isOpen: Am.k,
        openButton: () => (0, xm.k)("emoteWheel"),
        aim: mm => {
          hm.j.gp("emoteWheelPadAim", mm)
        },
        commit: mm => {
          hm.j.gp("requestEmoteWheelPadCommit", mm)
        },
        close: () => {
          hm.j.gp("requestEmoteWheelClose")
        }
      }, {
        isOpen: om.c,
        openButton: () => (0, xm.k)("chat"),
        aim: mm => {
          hm.j.gp(om.g, mm)
        },
        commit: mm => {
          hm.j.gp(om.l, mm)
        },
        close: () => {
          hm.j.gp(om.i)
        },
        keptOpenBy: [Rm.c]
      }, {
        isOpen: Om.s,
        openButton: () => (0, xm.k)("actionButton"),
        aim: mm => {
          hm.j.gp(Om.c, mm)
        },
        commit: mm => {
          hm.j.gp(Om.h, mm)
        },
        close: () => {
          hm.j.gp(Om.d)
        }
      }],
      qm = () => {
        var mm;
        return null !== (mm = Ym.find((mm => mm.isOpen()))) && void 0 !== mm ? mm : null
      },
      jm = mm => (0, xm.P)(mm.openButton()),
      Vm = (mm, Tm) => !(0, Em.N)(mm.frame.values, Tm),
      Im = () => {
        let mm = null,
          Tm = !1,
          fm = !1;
        return wm.d.register({
          name: "wheel",
          isActive: () => null !== qm(),
          peek: () => {
            const mm = qm();
            return mm && jm(mm) ? null : {
              over: "gameplay",
              stick: (0, Dm.f)().swapSticks ? "right" : "left"
            }
          },
          onFrame: hm => {
            var Am;
            const Em = qm();
            if (!Em) return;
            if (null !== (0, pm.c)([...Rm.j, ...null !== (Am = Em.keptOpenBy) && void 0 !== Am ? Am : []])) return void Em.close();
            const om = Em.openButton(),
              Om = (0, im.g)(hm.frame, (0, Dm.f)().swapSticks),
              Ym = jm(Em) ? Om.move : Om.look;
            mm !== Em ? (mm = Em, Tm = !Vm(hm, om) || Math.hypot(Ym.x, Ym.y) >= am.A, fm = !1) : fm && (fm = !1, Vm(hm, om) && (Tm = !1)), Em.aim(Ym);
            const Im = (0, xm.k)("menuConfirm"),
              Km = (0, xm.k)("menuBack");
            return hm.wasPressed(Km) ? (wm.d.consumeButton(Km), void Em.close()) : hm.wasPressed(Im) || hm.wasPressed(om) ? (wm.d.consumeButton(Im), wm.d.consumeButton(om), void Em.commit(!1)) : void(Tm && Vm(hm, om) && (Tm = !1, Em.commit(!0)))
          },
          onDeactivate: () => {
            fm = null !== mm && qm() === mm, fm || (mm = null, Tm = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);