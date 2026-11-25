export const id = 229;
export const ids = [229];
export const modules = {
  37155: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ct,
      f: () => Jt
    });
    var Ot = Vt(4354),
      qt = Vt(1554),
      Dt = Vt(63),
      mt = Vt(6667),
      dt = Vt(4345),
      jt = Vt(1387),
      Ht = Vt(2024),
      Xt = Vt(2001),
      Qt = Vt(1556),
      lt = Vt(1286),
      Et = Vt(37164),
      ft = Vt(1140),
      wt = Vt.n(ft),
      yt = Vt(1410),
      Nt = Vt(1152),
      Mt = Vt(1371),
      bt = Vt(1188);
    const Jt = "SleepingOverlay";

    function Ct() {
      const {
        t: tt
      } = (0, lt.H)(), [et, Vt] = (0, Dt.useState)(!1), [ft, Ct] = (0, Dt.useState)(null), [Kt, ht] = (0, Dt.useState)(1), [vt, Wt] = (0, Dt.useState)(!1), [St, ct] = (0, Dt.useState)(!1), Rt = (0, Dt.useRef)(0), It = (0, Dt.useRef)(!1), Pt = (0, Dt.useRef)(!1), Zt = (0, Dt.useRef)(), Lt = (0, Dt.useRef)(null);

      function Ft() {
        const tt = null !== ft && void 0 !== ft ? ft : "Rested Speed";
        Ht.gameBridge.send("wakeUp", St ? tt : null), Lt.current = null, Vt(!1), Ct(null), ht(1), Wt(!1), ct(!1)
      }

      function kt() {
        return !vt && (Ft(), !0)
      }
      return (0, qt.f)("PlayerPhysicsTypeUpdate", (tt => {
        tt !== Lt.current && (Lt.current = tt, tt === mt.n.SLEEPING ? (Pt.current || (Rt.current = Ht.gameBridge.lookup("cameraZoom", null), Pt.current = !0), It.current = !0, Ht.gameBridge.send("setCameraZoom", 3), Vt(!0), ht(function() {
          for (const tt of Ht.gameBridge.lookup("blocksStandingOn", null)) {
            if (Et.b.leafBeds.includes(tt)) return console.log(`Found leaf bed: ${tt}`), 1;
            if (Et.b.woolBeds.includes(tt)) return console.log(`Found woold bed: ${tt}`), 2;
            if (Et.b.strongBeds.includes(tt)) return console.log(`Found strong bed ${tt}`), 3
          }
          return 1
        }())) : (Pt.current = !1, Vt(!1), Ct(null), ht(1)))
      })), (0, Dt.useEffect)((() => () => {
        (0, jt.m)(Jt)
      }), []), (0, Dt.useEffect)((() => {
        et ? (0, jt.p)(Jt) : ((0, jt.m)(Jt), It.current && (Ht.gameBridge.send("setCameraZoom", Rt.current), It.current = !1))
      }), [et]), (0, Mt.w)("overlay", Zt, kt, et), (0, bt.jsx)(Ot.b, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: et,
        timeout: 300,
        nodeRef: Zt,
        unmountOnExit: !0,
        children: (0, bt.jsx)("div", {
          ref: Zt,
          onClick: tt => {
            kt() && tt.stopPropagation()
          },
          children: (0, bt.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, bt.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: dt.h.map((et => (0, bt.jsxs)(ut, {
                restedEffect: et,
                Zj: ft,
                setChosenRestedEffect: Ct,
                children: [(0, bt.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, bt.jsx)(Xt.e, {
                    text: [{
                      icon: et
                    }]
                  }), dt.f[et].shortName]
                }), (0, bt.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: tt(dt.f[et].description, {
                    time: dt.f[et].effectLevelDurations[Kt] / 6e4
                  })
                })]
              }, et)))
            }), (0, bt.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, bt.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, bt.jsxs)(Qt.f, {
                className: "SleepingOverlayWakeUpButton",
                onClick: tt => {
                  St ? Ft() : (Wt(!0), (0, yt.$)((() => {
                    Wt(!1), ct(!0)
                  }), !0)), tt.stopPropagation()
                },
                loading: vt,
                children: [!St && (0, bt.jsxs)(bt.Fragment, {
                  children: [(0, bt.jsx)(Nt.b, {
                    name: "film"
                  }), " ", tt("classicGame:watchAdToGetRestedPerk")]
                }), St && tt("classicGame:wakeUp")]
              }), (0, bt.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, bt.jsx)("div", {
                  className: wt()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === Kt
                  }),
                  children: (0, bt.jsx)(Xt.e, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, bt.jsx)("div", {
                  className: wt()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === Kt
                  }),
                  children: (0, bt.jsx)(Xt.e, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, bt.jsx)("div", {
                  className: wt()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === Kt
                  }),
                  children: (0, bt.jsx)(Xt.e, {
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
    const ut = (0, Dt.memo)((function(tt) {
      let {
        children: et,
        restedEffect: Vt,
        Zj: Ot,
        setChosenRestedEffect: qt
      } = tt;
      return Vt === Ot ? (0, bt.jsx)(Qt.m, {
        onClick: tt => {
          tt.stopPropagation()
        },
        children: et
      }) : (0, bt.jsx)(Qt.g, {
        onClick: tt => {
          qt(Vt), tt.stopPropagation()
        },
        children: et
      })
    }))
  },
  40745: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => gt
    });
    var Ot = Vt(26),
      qt = Vt(31),
      Dt = Vt(4376),
      mt = Vt(377),
      dt = Vt(1732),
      jt = Vt(8390),
      Ht = Vt(4392),
      Xt = Vt(8919),
      Qt = Vt(8414),
      lt = Vt(8397),
      Et = Vt(8420),
      ft = Vt(1492),
      wt = Vt(1779),
      yt = Vt(8426),
      Nt = Vt(8861),
      Mt = Vt(9037),
      bt = Vt(8929),
      Jt = Vt(9039),
      Ct = Vt(2024),
      ut = Vt(8377),
      Kt = Vt(8964),
      ht = Vt(8959),
      vt = Vt(8927);
    class Wt {
      constructor() {
        this.lostAtMs = null
      }
      update(tt, et) {
        return tt ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= et, et - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class St {
      constructor(tt, et) {
        this.press = tt, this.release = et, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(tt, et, Vt, Ot) {
        if (tt && null === this.downAtMs) return this.downAtMs = Vt, this.latched = Ot, void(this.token = this.press(Ot));
        null !== this.downAtMs && (this.latched ? tt && this.end() : !et && Vt - this.downAtMs >= 40 && this.end())
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
        const tt = this.token;
        this.downAtMs = null, this.token = null, this.latched = !1, this.release(tt)
      }
    }
    const ct = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      Rt = tt => {
        let et = null;
        const Vt = new vt.b,
          Ot = () => {
            et && (((tt, et, Vt) => {
              switch (Vt.kind) {
                case "reload":
                  return void et.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void et.specialActionUp(Vt.action);
                case "customButton":
                  return void Ct.gameBridge.send("pressCustomButton", {
                    id: Vt.id,
                    down: !1
                  });
                case "touchButton":
                  tt.pressTouchButton(!1)
              }
            })(tt, et.bodies, et.action), et = null)
          },
          Dt = (Vt, qt, Dt, mt) => {
            Ot(), et = {
              action: qt,
              bodies: Vt,
              heldBy: Dt,
              atMs: mt
            }, ((tt, et, Vt) => {
              switch (Vt.kind) {
                case "reload":
                  return et.reloadGun(), void et.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void et.specialActionDown(Vt.action);
                case "customButton":
                  return void Ct.gameBridge.send("pressCustomButton", {
                    id: Vt.id,
                    down: !0
                  });
                case "touchButton":
                  tt.pressTouchButton(!0)
              }
            })(tt, Vt, qt)
          };
        return {
          update: (mt, dt, Ht, Xt) => {
            var lt;
            const Et = (0, Kt.m)(tt.contextActionInputs()),
              ft = null !== (lt = Et[0]) && void 0 !== lt ? lt : ct;
            (0, ht.e)((0, Kt.g)(ft) ? ft : null);
            const wt = (0, Kt.d)(Et);
            (0, ht.h)(wt);
            const yt = (0, jt.i)("actionButton");
            if (wt) {
              const tt = Vt.update(dt.wasPressed(yt), dt.isHeld(yt), Ht, Xt);
              "tap" === tt ? Dt(mt, ft, [yt], Ht) : "hold" === tt && (Qt.c.consumeButton(yt), qt.j.sw(Jt.i, Et))
            } else Vt.release(), dt.wasPressed(yt) && Dt(mt, ft, [yt], Ht);
            et && Ht - et.atMs >= 40 && !et.heldBy.some((tt => (0, ut.J)(dt.frame.values, tt))) && Ot()
          },
          pressPicked: (tt, et) => {
            Dt(tt, et, [(0, jt.i)("menuConfirm"), (0, jt.i)("actionButton")], performance.now())
          },
          release: () => {
            Vt.release(), Ot(), (0, ht.e)(null), (0, ht.h)(!1)
          }
        }
      };
    var It = Vt(8375);
    var Pt = Vt(40741),
      Zt = Vt(8980),
      Lt = Vt(8411),
      Ft = Vt(9065);
    var kt = Vt(40735),
      Gt = Vt(9068),
      zt = Vt(40752),
      ot = Vt(9052),
      rt = Vt(8982),
      Ut = Vt(8989),
      At = Vt(8998),
      it = Vt(8868),
      Yt = Vt(8943);
    const Bt = () => it.b[(0, lt.i)().tapHoldTime].wheelMs,
      pt = () => ((0, Xt.c)(), (0, Yt.b)("controllerMenuKey")),
      xt = (tt, et, Vt) => new St((Vt => {
        const Ot = tt.bodies();
        return {
          bodies: Ot,
          press: et(Ot, Vt)
        }
      }), (tt => {
        let {
          bodies: et,
          press: Ot
        } = tt;
        Vt(et, Ot)
      })),
      Tt = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      gt = tt => {
        const et = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let Vt = Tt;
        const Xt = new zt.e,
          Ct = qt.j.subscribe("appManagerUpdated|activeInputDevice", (et => {
            tt.deviceChanged(et)
          }));
        let Kt = null,
          ht = 0;
        const St = () => {
          Kt = null, (0, rt.d)(null)
        };
        let ct = !1;
        const Yt = new Wt,
          gt = tt.look,
          st = new vt.b,
          nt = new vt.b,
          te = Rt(tt),
          ee = qt.j.subscribe(Jt.l, (et => {
            te.pressPicked(tt.bodies(), et)
          })),
          Ve = xt(tt, ((tt, et) => tt.primaryFireDown(!et)), ((tt, et) => {
            tt.primaryFireUp(et)
          })),
          Oe = xt(tt, (tt => tt.altFireDown()), ((tt, et) => {
            tt.altFireUp(et)
          }));
        let qe = !1,
          De = !1,
          me = !1;
        const de = (0, Nt.c)(ut._),
          je = (0, Nt.c)(ut._),
          He = new vt.b;
        let Xe = !1;
        const Qe = () => {
            de.reset(), je.reset(), He.release(), (0, At.d)(!1), gt.release(), Ve.cancel(), (0, Ut.h)(!1), Oe.cancel(), te.release(), st.release(), nt.release(), St()
          },
          le = function() {
            let Ot = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            Qe(), De = !1, Ot || (qe = !1, Vt = Tt, Object.assign(et, {
              x: 0,
              y: 0,
              magnitude: 0,
              headingOffset: 0,
              jumpHeld: !1,
              jumpPressed: !1,
              running: !1,
              sprintHeld: !1
            }), tt.stopMoving())
          };
        let Ee = !1;
        const fe = function(Ot, qt, Dt) {
            let mt = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (!(0, ft.f)()) return void(Ee || (Ee = !0, qe = !1, tt.stopMoving()));
            Ee = !1;
            const dt = (0, lt.i)(),
              Ht = (0, kt.e)(qt, dt.moveDeadzone),
              Qt = (0, jt.i)("sprint");
            Vt = (0, kt.l)(Vt, {
              sprintPressed: Ot.wasPressed(Qt),
              magnitude: Ht.magnitude,
              autoSprint: dt.autoSprint,
              nowMs: Dt
            }), et.running = Vt.running, et.sprintHeld = Ot.isHeld(Qt), et.x = Ht.x, et.y = Ht.y, et.magnitude = Ht.speed, et.headingOffset = Ht.headingOffset, qe = Ht.magnitude > 0;
            const Et = (0, jt.i)("jump");
            if (et.jumpHeld = Ot.isHeld(Et), et.jumpPressed = Ot.wasPressed(Et), et.jumpPressed && tt.bodies().jumpDown(), mt) return void tt.move(et, null);
            const wt = (0, jt.i)("sneak"),
              yt = Xt.filter({
                sneakHeld: Ot.isHeld(wt),
                sneakPressed: Ot.wasPressed(wt),
                sneakTogglePressed: Ot.wasPressed((0, jt.i)("sneakToggle"))
              }, Dt);
            tt.move(et, {
              ...yt,
              mode: dt.sneakMode
            })
          },
          we = (tt, et) => {
            const Vt = (0, jt.i)("chat");
            if ("off" === (0, lt.i)().quickChat) return void(tt.wasPressed(Vt) && (Qt.c.consumeButton(Vt), qt.j.sw(Zt.b)));
            const Ot = st.update(tt.wasPressed(Vt), tt.isHeld(Vt), et, Bt());
            "tap" === Ot || "hold" === Ot && null === (0, wt.d)() ? qt.j.sw(Zt.b) : "hold" === Ot && (Qt.c.consumeButton(Vt), qt.j.sw(bt.j))
          },
          ye = (et, Vt) => {
            ((tt, et) => {
              const Vt = (0, Mt.d)(),
                Ot = (0, jt.i)("emoteWheel");
              if ("wheel" === (0, lt.i)().emoteButton) return tt.wasPressed(Ot) && (Qt.c.consumeButton(Ot), qt.j.sw("requestEmoteWheelPadOpen", !0)), (0, Mt.d)() !== Vt;
              const Dt = nt.update(tt.wasPressed(Ot), tt.isHeld(Ot), et, Bt());
              return "tap" === Dt ? qt.j.sw("requestEmoteRepeatLast") : "hold" === Dt && (Qt.c.consumeButton(Ot), qt.j.sw("requestEmoteWheelPadOpen", !1)), (0, Mt.d)() !== Vt
            })(et, Vt) || we(et, Vt), et.wasPressed((0, jt.i)("inventory")) && (Qt.c.consumeButton((0, jt.i)("inventory")), (0, dt.C)(pt(), "inventory", tt.hasFullInventory())), et.wasPressed((0, jt.i)("pause")) && (Qt.c.consumeButton((0, jt.i)("pause")), (0, Ht.b)() === mt.o.SOCIAL ? (0, dt.y)(pt(), mt.o.SOCIAL) : (0, dt.h)(pt())), et.wasPressed((0, jt.i)("leaderboard")) && !(0, Dt.e)() && (Qt.c.consumeButton((0, jt.i)("leaderboard")), ((tt, et) => {
              if ("shop" === (0, Lt.b)()) return qt.j.sw(Ft.j), void(0, dt.y)(tt, mt.o.SHOP, !0);
              (0, dt.y)(tt, mt.o.LOBBY_LEADERBOARD, et)
            })(pt(), tt.hasLobbyTab()))
          },
          Ne = (et, Vt) => {
            const Ot = tt.bodies();
            ((et, Vt) => {
              const Ot = (0, jt.i)("attack"),
                qt = et.wasPressed(Ot);
              qt && !Ve.isLatched() && (ct = tt.targetsBlock()), Ve.update(qt, et.isHeld(Ot), Vt, "toggle" === (0, lt.i)().attackMode), Ve.isLatched() && ct ? Yt.update(tt.targetsBlock(), Vt) && Ve.unlatch() : Yt.reset(), (0, Ut.h)(Ve.isLatched())
            })(et, Vt), Oe.update(et.wasPressed((0, jt.i)("use")), et.isHeld((0, jt.i)("use")), Vt, !1), de.update(et.isHeld((0, jt.i)("hotbarPrevious")), Vt) && tt.scrollHotbar(-1), je.update(et.isHeld((0, jt.i)("hotbarNext")), Vt) && tt.scrollHotbar(1), ((et, Vt, Ot) => {
              const qt = (0, jt.i)("perspective"),
                Dt = (0, jt.i)("pickBlock"),
                mt = tt.pickBlockAllowed();
              (0, At.d)(mt && !Xe && tt.targetsBlock());
              const dt = () => {
                Vt.pickBlock() && (Xe = !0, (0, At.d)(!1))
              };
              if (!mt || Dt !== qt) return He.release(), et.wasPressed(qt) && Vt.swapCameraZoom(), void(mt && et.wasPressed(Dt) && dt());
              const Ht = He.update(et.wasPressed(Dt), et.isHeld(Dt), Ot, Bt());
              "tap" === Ht ? dt() : "hold" === Ht && Vt.swapCameraZoom()
            })(et, Ot, Vt), ((et, Vt, Ot) => {
              const qt = (0, jt.i)("drop");
              if (et.wasPressed(qt)) {
                Vt.dropItem(!1);
                const tt = (0, lt.i)();
                "off" !== tt.buttonRepeat && (Kt = Ot, ht = it.b[tt.tapHoldTime].dropStackMs, (0, rt.d)(ht))
              }
              null !== Kt && (!et.isHeld(qt) || tt.selectedSlotEmpty() ? St() : Ot - Kt >= ht && (St(), Vt.dropItem(!0)))
            })(et, Ot, Vt), te.update(Ot, et, Vt, Bt()), ye(et, Vt)
          },
          ae = Qt.c.register({
            name: "gameplay",
            isActive: () => {
              const et = qe && "keyboardMouse" === Ot.b.get("activeInputDevice") && !(0, Et.H)(),
                Vt = (0, Et.k)() ? [Pt.c] : [];
              return ((0, Et.k)() || et) && (0, yt.e)(Vt) && tt.hasPlayer()
            },
            onFrame: tt => {
              const et = performance.now(),
                Vt = (0, lt.i)(),
                Ot = (0, kt.o)(tt, (0, kt.h)(Vt, (0, jt.i)("pause"), (0, Gt.c)().isSupported())),
                qt = (0, kt.f)(Ot, Vt.swapSticks);
              return (0, Et.k)() ? (De = !1, (0, yt.e)() ? (me = !1, gt.update(qt.look, Vt, Ot.isHeld((0, jt.i)("use"))), fe(Ot, qt.move, et), void Ne(Ot, et)) : (me || (me = !0, Xt.lostToPadScreen(), le()), void we(Ot, et))) : (De || (Qe(), De = !0), void fe(Ot, qt.move, et))
            },
            onDeactivate: tt => {
              (0, Et.k)() && Xt.lostToPadScreen(), le(tt)
            },
            onPeekFrame: et => {
              (0, Et.k)() && (0, yt.e)(Pt.g) && tt.hasPlayer() ? fe(et, (0, kt.f)(et, (0, lt.i)().swapSticks).move, performance.now(), !0) : le()
            }
          }),
          Me = (0, Pt.d)(tt),
          be = (() => {
            const tt = qt.j.subscribe(It.d, (tt => {
              !tt && (0, Et.k)() && "inGame" === Ot.b.get("gameState") && qt.j.sw("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              qt.j.unsubscribe(tt)
            }
          })();
        return () => {
          le(), tt.uninstall(), (0, ot.d)(!1), (0, At.d)(!1), qt.j.unsubscribe(Ct), qt.j.unsubscribe(ee), ae(), Me(), be(), gt.uninstall()
        }
      }
  },
  40741: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => ft,
      d: () => yt,
      g: () => Et
    });
    var Ot = Vt(1387),
      qt = Vt(4376),
      Dt = Vt(9023),
      mt = Vt(37155),
      dt = Vt(1820),
      jt = Vt(1277),
      Ht = Vt(8426),
      Xt = Vt(8929),
      Qt = Vt(9039);
    const lt = {
        emoteWheel: Dt.e,
        quickChatWheel: Xt.b,
        actionWheel: Qt.o
      },
      Et = Object.keys(lt),
      ft = "dead",
      wt = tt => (0, Ot.k)().includes(tt),
      yt = tt => {
        const et = [(0, Ht.i)(ft, (() => tt.hasPlayer() && tt.isPlayerDead())), (0, Ht.i)("sleeping", (() => wt(mt.f))), (0, Ht.i)("turnstile", (() => wt(jt.h))), (0, Ht.i)("videoAd", dt.h), (0, Ht.i)("replay", (() => (0, qt.e)() || tt.isReplayMode())), (0, Ht.i)("freeCamera", (() => tt.isFreeCameraOn())), ...Object.entries(lt).map((tt => {
          let [et, Vt] = tt;
          return (0, Ht.i)(et, Vt)
        }))];
        return () => {
          for (const tt of et) tt()
        }
      }
  },
  40735: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => qt,
      e: () => jt,
      f: () => dt,
      h: () => Xt,
      j: () => mt,
      k: () => Dt,
      l: () => Ht,
      o: () => Qt
    });
    var Ot = Vt(8377);
    class qt {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(tt, et, Vt) {
        const qt = (0, Ot.k)(tt, et.lookDeadzone);
        if (Math.hypot(qt.x, qt.y) < .9 || Math.abs(qt.x) < Math.abs(qt.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = Vt);
        const Dt = (mt = et.lookSensitivityX, Math.min(1, 100 / mt));
        var mt;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (Vt - this.fullTiltSinceMs - 250 * Dt) / (200 * Dt)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const Dt = (tt, et, Vt, qt, Dt) => {
        let mt = 1;
        return "boost" === Vt.lookCurve ? mt = tt.update(et, Vt, Dt) : tt.reset(),
          function(tt, et) {
            let {
              yawBoost: Vt = 1,
              aiming: qt = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const Dt = (0, Ot.i)((0, Ot.k)(tt, et.lookDeadzone), et.lookCurve),
              mt = 220 * Math.PI / 180,
              dt = qt ? et.aimLookSensitivity / 100 : 1,
              jt = et.lookSensitivityX / 100 * dt,
              Ht = et.lookSensitivityY / 100 * dt;
            return {
              yawRadPerSec: Dt.x * mt * jt * Vt * (et.invertLookX ? -1 : 1),
              pitchRadPerSec: Dt.y * mt * .7 * Ht * (et.invertLookY ? -1 : 1)
            }
          }(et, Vt, {
            yawBoost: mt,
            aiming: qt
          })
      },
      mt = (tt, et) => {
        const Vt = Math.max(0, Math.min(250, et)) / 1e3;
        return {
          JR: tt.yawRadPerSec * Vt,
          uR: tt.pitchRadPerSec * Vt
        }
      },
      dt = (tt, et) => et ? {
        move: tt.rightStick,
        look: tt.leftStick
      } : {
        move: tt.leftStick,
        look: tt.rightStick
      },
      jt = (tt, et) => {
        const Vt = (0, Ot.k)(tt, et),
          qt = Math.min(1, Math.hypot(Vt.x, Vt.y));
        return {
          magnitude: qt,
          speed: Math.min(1, qt / .8),
          headingOffset: 0 === qt ? 0 : Math.atan2(Vt.x, -Vt.y),
          x: Vt.x,
          y: Vt.y
        }
      },
      Ht = (tt, et) => {
        let {
          sprintPressed: Vt,
          magnitude: Ot,
          autoSprint: qt,
          nowMs: Dt
        } = et;
        const mt = Vt ? Dt : tt.latchedAtMs,
          dt = (tt => {
            let {
              running: et,
              magnitude: Vt,
              sprintPressed: Ot,
              autoSprint: qt
            } = tt;
            return !(Vt < .5) && (!!Ot || !!(qt && Vt >= .9) || et)
          })({
            running: tt.running,
            magnitude: Ot,
            sprintPressed: Dt - mt <= 1e3,
            autoSprint: qt
          });
        return {
          running: dt,
          latchedAtMs: dt ? -1 / 0 : mt
        }
      },
      Xt = (tt, et, Vt) => Vt && tt.gyroAiming && "button" === tt.gyroActivation && tt.gyroButton !== et ? tt.gyroButton : null,
      Qt = (tt, et) => et ? {
        ...tt,
        isHeld: Vt => Vt !== et && tt.isHeld(Vt),
        wasPressed: Vt => Vt !== et && tt.wasPressed(Vt),
        wasReleased: Vt => Vt !== et && tt.wasReleased(Vt),
        value: Vt => Vt === et ? 0 : tt.value(Vt)
      } : tt
  },
  40752: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt,
      h: () => Ot
    });
    const Ot = tt => {
      let {
        mode: et,
        sneakHeld: Vt,
        sneakPressed: Ot,
        sneakTogglePressed: qt,
        descending: Dt,
        canCrouch: mt,
        toggled: dt
      } = tt;
      return mt ? Dt ? {
        crouchHeld: Vt,
        toggled: !1
      } : "hold" === et ? {
        crouchHeld: Vt,
        toggled: qt ? !dt : dt
      } : {
        crouchHeld: !1,
        toggled: Ot || qt ? !dt : dt
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class qt {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(tt, et) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = et, this.graceEndsMs = et + 500);
        const Vt = et < this.graceEndsMs;
        return Vt && (tt.sneakPressed || tt.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, et + 300))), tt.sneakHeld ? Vt && tt.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: tt.sneakHeld && !this.ignoringHeld,
          sneakPressed: tt.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: tt.sneakTogglePressed && !Vt
        }
      }
    }
  },
  40724: (tt, et, Vt) => {
    Vt(9068)
  },
  40730: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => bt
    });
    var Ot = Vt(31),
      qt = Vt(9023),
      Dt = Vt(9035),
      mt = Vt(8390),
      dt = Vt(8414),
      jt = Vt(8397),
      Ht = Vt(40735),
      Xt = Vt(40741),
      Qt = Vt(8426),
      lt = Vt(8377),
      Et = Vt(8929),
      ft = Vt(9039);
    const wt = [{
        isOpen: qt.h,
        openButton: () => (0, mt.i)("emoteWheel"),
        aim: tt => {
          Ot.j.sw("emoteWheelPadAim", tt)
        },
        commit: tt => {
          Ot.j.sw("requestEmoteWheelPadCommit", tt)
        },
        close: () => {
          Ot.j.sw("requestEmoteWheelClose")
        }
      }, {
        isOpen: Et.b,
        openButton: () => (0, mt.i)("chat"),
        aim: tt => {
          Ot.j.sw(Et.d, tt)
        },
        commit: tt => {
          Ot.j.sw(Et.g, tt)
        },
        close: () => {
          Ot.j.sw(Et.e)
        },
        keptOpenBy: [Xt.c]
      }, {
        isOpen: ft.o,
        openButton: () => (0, mt.i)("actionButton"),
        aim: tt => {
          Ot.j.sw(ft.d, tt)
        },
        commit: tt => {
          Ot.j.sw(ft.h, tt)
        },
        close: () => {
          Ot.j.sw(ft.g)
        }
      }],
      yt = () => {
        var tt;
        return null !== (tt = wt.find((tt => tt.isOpen()))) && void 0 !== tt ? tt : null
      },
      Nt = tt => (0, mt.O)(tt.openButton()),
      Mt = (tt, et) => !(0, lt.J)(tt.frame.values, et),
      bt = () => {
        let tt = null,
          et = !1,
          Vt = !1;
        return dt.c.register({
          name: "wheel",
          isActive: () => null !== yt(),
          peek: () => {
            const tt = yt();
            return tt && Nt(tt) ? null : {
              over: "gameplay",
              stick: (0, jt.i)().swapSticks ? "right" : "left"
            }
          },
          onFrame: Ot => {
            var qt;
            const lt = yt();
            if (!lt) return;
            if (null !== (0, Qt.d)([...Xt.g, ...null !== (qt = lt.keptOpenBy) && void 0 !== qt ? qt : []])) return void lt.close();
            const Et = lt.openButton(),
              ft = (0, Ht.f)(Ot.frame, (0, jt.i)().swapSticks),
              wt = Nt(lt) ? ft.move : ft.look;
            tt !== lt ? (tt = lt, et = !Mt(Ot, Et) || Math.hypot(wt.x, wt.y) >= Dt.B, Vt = !1) : Vt && (Vt = !1, Mt(Ot, Et) && (et = !1)), lt.aim(wt);
            const bt = (0, mt.i)("menuConfirm"),
              Jt = (0, mt.i)("menuBack");
            return Ot.wasPressed(Jt) ? (dt.c.consumeButton(Jt), void lt.close()) : Ot.wasPressed(bt) || Ot.wasPressed(Et) ? (dt.c.consumeButton(bt), dt.c.consumeButton(Et), void lt.commit(!1)) : void(et && Mt(Ot, Et) && (et = !1, lt.commit(!0)))
          },
          onDeactivate: () => {
            Vt = null !== tt && yt() === tt, Vt || (tt = null, et = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);