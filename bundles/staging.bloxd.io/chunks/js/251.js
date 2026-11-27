export const id = 251;
export const ids = [251];
export const modules = {
  37761: (ee, ie, He) => {
    He.d(ie, {
      d: () => ge,
      e: () => Ee
    });
    var ye = He(4607),
      be = He(1432),
      Me = He(59),
      Ke = He(7083),
      Ue = He(4603),
      Fe = He(1246),
      Je = He(1983),
      oe = He(1956),
      Re = He(1438),
      ke = He(1127),
      qe = He(37765),
      fe = He(1053),
      Te = He.n(fe),
      pe = He(1294),
      Xe = He(1323),
      ze = He(1215),
      Be = He(1228);
    const Ee = "SleepingOverlay";

    function ge() {
      const {
        t: ee
      } = (0, ke.v)(), [ie, He] = (0, Me.useState)(!1), [fe, ge] = (0, Me.useState)(null), [de, We] = (0, Me.useState)(1), [te, Ze] = (0, Me.useState)(!1), [we, De] = (0, Me.useState)(!1), Pe = (0, Me.useRef)(0), Ae = (0, Me.useRef)(!1), Ye = (0, Me.useRef)(!1), Ve = (0, Me.useRef)(), ae = (0, Me.useRef)(null);

      function ce() {
        const ee = null !== fe && void 0 !== fe ? fe : "Rested Speed";
        Je.gameBridge.send("wakeUp", we ? ee : null), ae.current = null, He(!1), ge(null), We(1), Ze(!1), De(!1)
      }

      function xe() {
        return !te && (ce(), !0)
      }
      return (0, be.f)("PlayerPhysicsTypeUpdate", (ee => {
        ee !== ae.current && (ae.current = ee, ee === Ke.s.SLEEPING ? (Ye.current || (Pe.current = Je.gameBridge.lookup("cameraZoom", null), Ye.current = !0), Ae.current = !0, Je.gameBridge.send("setCameraZoom", 3), He(!0), We(function() {
          for (const ee of Je.gameBridge.lookup("blocksStandingOn", null)) {
            if (qe.d.leafBeds.includes(ee)) return console.log(`Found leaf bed: ${ee}`), 1;
            if (qe.d.woolBeds.includes(ee)) return console.log(`Found woold bed: ${ee}`), 2;
            if (qe.d.strongBeds.includes(ee)) return console.log(`Found strong bed ${ee}`), 3
          }
          return 1
        }())) : (Ye.current = !1, He(!1), ge(null), We(1)))
      })), (0, Me.useEffect)((() => () => {
        (0, Fe.v)(Ee)
      }), []), (0, Me.useEffect)((() => {
        ie ? (0, Fe.w)(Ee) : ((0, Fe.v)(Ee), Ae.current && (Je.gameBridge.send("setCameraZoom", Pe.current), Ae.current = !1))
      }), [ie]), (0, ze.t)("overlay", Ve, xe, ie), (0, Be.jsx)(ye.e, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: ie,
        timeout: 300,
        nodeRef: Ve,
        unmountOnExit: !0,
        children: (0, Be.jsx)("div", {
          ref: Ve,
          onClick: ee => {
            xe() && ee.stopPropagation()
          },
          children: (0, Be.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, Be.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: Ue.l.map((ie => (0, Be.jsxs)(Oe, {
                restedEffect: ie,
                XJ: fe,
                setChosenRestedEffect: ge,
                children: [(0, Be.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, Be.jsx)(oe.e, {
                    text: [{
                      icon: ie
                    }]
                  }), Ue.h[ie].shortName]
                }), (0, Be.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: ee(Ue.h[ie].description, {
                    time: Ue.h[ie].effectLevelDurations[de] / 6e4
                  })
                })]
              }, ie)))
            }), (0, Be.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, Be.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, Be.jsxs)(Re.c, {
                className: "SleepingOverlayWakeUpButton",
                onClick: ee => {
                  we ? ce() : (Ze(!0), (0, pe.bb)((() => {
                    Ze(!1), De(!0)
                  }), !0)), ee.stopPropagation()
                },
                loading: te,
                children: [!we && (0, Be.jsxs)(Be.Fragment, {
                  children: [(0, Be.jsx)(Xe.e, {
                    name: "film"
                  }), " ", ee("classicGame:watchAdToGetRestedPerk")]
                }), we && ee("classicGame:wakeUp")]
              }), (0, Be.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, Be.jsx)("div", {
                  className: Te()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === de
                  }),
                  children: (0, Be.jsx)(oe.e, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, Be.jsx)("div", {
                  className: Te()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === de
                  }),
                  children: (0, Be.jsx)(oe.e, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, Be.jsx)("div", {
                  className: Te()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === de
                  }),
                  children: (0, Be.jsx)(oe.e, {
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
    const Oe = (0, Me.memo)((function(ee) {
      let {
        children: ie,
        restedEffect: He,
        XJ: ye,
        setChosenRestedEffect: be
      } = ee;
      return He === ye ? (0, Be.jsx)(Re.m, {
        onClick: ee => {
          ee.stopPropagation()
        },
        children: ie
      }) : (0, Be.jsx)(Re.e, {
        onClick: ee => {
          be(He), ee.stopPropagation()
        },
        children: ie
      })
    }))
  },
  41688: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ne
    });
    var ye = He(18),
      be = He(27),
      Me = He(4623),
      Ke = He(335),
      Ue = He(1620),
      Fe = He(8926),
      Je = He(4653),
      oe = He(9434),
      Re = He(8954),
      ke = He(8935),
      qe = He(8962),
      fe = He(1385),
      Te = He(1677),
      pe = He(8971),
      Xe = He(9392),
      ze = He(9531),
      Be = He(9443),
      Ee = He(9539),
      ge = He(1983),
      Oe = He(8912),
      de = He(9469),
      We = He(9461),
      te = He(9440);
    class Ze {
      constructor() {
        this.lostAtMs = null
      }
      update(ee, ie) {
        return ee ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= ie, ie - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class we {
      constructor(ee, ie) {
        this.press = ee, this.release = ie, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(ee, ie, He, ye) {
        if (ee && null === this.downAtMs) return this.downAtMs = He, this.latched = ye, void(this.token = this.press(ye));
        null !== this.downAtMs && (this.latched ? ee && this.end() : !ie && He - this.downAtMs >= 40 && this.end())
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
        const ee = this.token;
        this.downAtMs = null, this.token = null, this.latched = !1, this.release(ee)
      }
    }
    const De = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      Pe = ee => {
        let ie = null;
        const He = new te.c,
          ye = () => {
            ie && (((ee, ie, He) => {
              switch (He.kind) {
                case "reload":
                  return void ie.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void ie.specialActionUp(He.action);
                case "customButton":
                  return void ge.gameBridge.send("pressCustomButton", {
                    id: He.id,
                    down: !1
                  });
                case "touchButton":
                  ee.pressTouchButton(!1)
              }
            })(ee, ie.bodies, ie.action), ie = null)
          },
          Me = (He, be, Me, Ke) => {
            ye(), ie = {
              action: be,
              bodies: He,
              heldBy: Me,
              atMs: Ke
            }, ((ee, ie, He) => {
              switch (He.kind) {
                case "reload":
                  return ie.reloadGun(), void ie.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void ie.specialActionDown(He.action);
                case "customButton":
                  return void ge.gameBridge.send("pressCustomButton", {
                    id: He.id,
                    down: !0
                  });
                case "touchButton":
                  ee.pressTouchButton(!0)
              }
            })(ee, He, be)
          };
        return {
          update: (Ke, Ue, Je, oe) => {
            var ke;
            const qe = (0, de.j)(ee.contextActionInputs()),
              fe = null !== (ke = qe[0]) && void 0 !== ke ? ke : De;
            (0, We.b)((0, de.e)(fe) ? fe : null);
            const Te = (0, de.d)(qe);
            (0, We.c)(Te);
            const pe = (0, Fe.j)("actionButton");
            if (Te) {
              const ee = He.update(Ue.wasPressed(pe), Ue.isHeld(pe), Je, oe);
              "tap" === ee ? Me(Ke, fe, [pe], Je) : "hold" === ee && (Re.d.consumeButton(pe), be.h.yR(Ee.m, qe))
            } else He.release(), Ue.wasPressed(pe) && Me(Ke, fe, [pe], Je);
            ie && Je - ie.atMs >= 40 && !ie.heldBy.some((ee => (0, Oe.L)(Ue.frame.values, ee))) && ye()
          },
          pressPicked: (ee, ie) => {
            Me(ee, ie, [(0, Fe.j)("menuConfirm"), (0, Fe.j)("actionButton")], performance.now())
          },
          release: () => {
            He.release(), ye(), (0, We.b)(null), (0, We.c)(!1)
          }
        }
      };
    var Ae = He(8907);
    var Ye = He(41686),
      Ve = He(9483),
      ae = He(8946),
      ce = He(9575);
    var xe = He(41679),
      Le = He(9584),
      Ce = He(41690),
      ve = He(9558),
      ue = He(9487),
      me = He(9495),
      le = He(9499),
      Se = He(9400),
      ne = He(9451);
    const je = () => Se.d[(0, ke.h)().tapHoldTime].wheelMs,
      se = () => ((0, oe.d)(), (0, ne.d)("controllerMenuKey")),
      Ie = (ee, ie, He) => new we((He => {
        const ye = ee.bodies();
        return {
          bodies: ye,
          press: ie(ye, He)
        }
      }), (ee => {
        let {
          bodies: ie,
          press: ye
        } = ee;
        He(ie, ye)
      })),
      he = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      Ne = ee => {
        const ie = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let He = he;
        const oe = new Ce.e,
          ge = be.h.subscribe("appManagerUpdated|activeInputDevice", (ie => {
            ee.deviceChanged(ie)
          }));
        let de = null,
          We = 0;
        const we = () => {
          de = null, (0, ue.h)(null)
        };
        let De = !1;
        const ne = new Ze,
          Ne = ee.look,
          Ge = new te.c,
          re = new te.c,
          Qe = Pe(ee),
          ei = be.h.subscribe(Ee.o, (ie => {
            Qe.pressPicked(ee.bodies(), ie)
          })),
          ii = Ie(ee, ((ee, ie) => ee.primaryFireDown(!ie)), ((ee, ie) => {
            ee.primaryFireUp(ie)
          })),
          Hi = Ie(ee, (ee => ee.altFireDown()), ((ee, ie) => {
            ee.altFireUp(ie)
          }));
        let yi = !1,
          bi = -1 / 0,
          Mi = !1,
          Ki = !1;
        const Ui = (0, Xe.b)(Oe.Z),
          Fi = (0, Xe.b)(Oe.Z),
          Ji = new te.c;
        let oi = !1;
        const Ri = () => {
            Ui.reset(), Fi.reset(), Ji.release(), (0, le.e)(!1), Ne.release(), ii.cancel(), (0, me.e)(!1), Hi.cancel(), Qe.release(), Ge.release(), re.release(), we()
          },
          ki = function() {
            let ye = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            Ri(), Mi = !1, ye || (yi = !1, He = he, Object.assign(ie, {
              x: 0,
              y: 0,
              magnitude: 0,
              headingOffset: 0,
              jumpHeld: !1,
              jumpPressed: !1,
              running: !1,
              sprintHeld: !1
            }), ee.stopMoving())
          };
        let qi = !1;
        const fi = function(ye, Me, Ke) {
            let Ue = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (!(0, fe.k)()) return void(qi || (qi = !0, yi = !1, ee.stopMoving()));
            qi = !1;
            const Je = (0, ke.h)(),
              Re = (0, xe.h)(Me, Je.moveDeadzone),
              qe = (0, Fe.j)("sprint");
            He = (0, xe.v)(He, {
              sprintPressed: ye.wasPressed(qe),
              magnitude: Re.magnitude,
              autoSprint: Je.autoSprint,
              nowMs: Ke
            }), ie.running = He.running, ie.sprintHeld = ye.isHeld(qe), ie.x = Re.x, ie.y = Re.y, ie.magnitude = Re.speed, ie.headingOffset = Re.headingOffset, Re.magnitude > 0 && (!yi || Ke - bi >= 1e3) && (bi = Ke, be.h.yR("stickMoved")), yi = Re.magnitude > 0;
            const Te = (0, Fe.j)("jump");
            if (ie.jumpHeld = ye.isHeld(Te), ie.jumpPressed = ye.wasPressed(Te), ie.jumpPressed && ee.bodies().jumpDown(), Ue) return void ee.move(ie, null);
            const pe = (0, Fe.j)("sneak"),
              Xe = oe.filter({
                sneakHeld: ye.isHeld(pe),
                sneakPressed: ye.wasPressed(pe),
                sneakTogglePressed: ye.wasPressed((0, Fe.j)("sneakToggle"))
              }, Ke);
            ee.move(ie, {
              ...Xe,
              mode: Je.sneakMode
            })
          },
          Ti = (ee, ie) => {
            const He = (0, Fe.j)("chat");
            if ("off" === (0, ke.h)().quickChat) return void(ee.wasPressed(He) && (Re.d.consumeButton(He), be.h.yR(Ve.e)));
            const ye = Ge.update(ee.wasPressed(He), ee.isHeld(He), ie, je());
            "tap" === ye || "hold" === ye && null === (0, Te.e)() ? be.h.yR(Ve.e) : "hold" === ye && (Re.d.consumeButton(He), be.h.yR(Be.o))
          },
          Xi = (ie, He) => {
            ((ee, ie) => {
              const He = (0, ze.c)(),
                ye = (0, Fe.j)("emoteWheel");
              if ("wheel" === (0, ke.h)().emoteButton) return ee.wasPressed(ye) && (Re.d.consumeButton(ye), be.h.yR("requestEmoteWheelPadOpen", !0)), (0, ze.c)() !== He;
              const Me = re.update(ee.wasPressed(ye), ee.isHeld(ye), ie, je());
              return "tap" === Me ? be.h.yR("requestEmoteRepeatLast") : "hold" === Me && (Re.d.consumeButton(ye), be.h.yR("requestEmoteWheelPadOpen", !1)), (0, ze.c)() !== He
            })(ie, He) || Ti(ie, He), ie.wasPressed((0, Fe.j)("inventory")) && (Re.d.consumeButton((0, Fe.j)("inventory")), (0, Ue.w)(se(), "inventory", ee.hasFullInventory())), ie.wasPressed((0, Fe.j)("pause")) && (Re.d.consumeButton((0, Fe.j)("pause")), (0, Je.b)() === Ke.r.SOCIAL ? (0, Ue.u)(se(), Ke.r.SOCIAL) : (0, Ue.g)(se())), ie.wasPressed((0, Fe.j)("leaderboard")) && !(0, Me.d)() && (Re.d.consumeButton((0, Fe.j)("leaderboard")), ((ee, ie) => {
              if ("shop" === (0, ae.c)()) return be.h.yR(ce.m), void(0, Ue.u)(ee, Ke.r.SHOP, !0);
              (0, Ue.u)(ee, Ke.r.LOBBY_LEADERBOARD, ie)
            })(se(), ee.hasLobbyTab()))
          },
          zi = (ie, He) => {
            const ye = ee.bodies();
            ((ie, He) => {
              const ye = (0, Fe.j)("attack"),
                be = ie.wasPressed(ye);
              be && !ii.isLatched() && (De = ee.targetsBlock()), ii.update(be, ie.isHeld(ye), He, "toggle" === (0, ke.h)().attackMode), ii.isLatched() && De ? ne.update(ee.targetsBlock(), He) && ii.unlatch() : ne.reset(), (0, me.e)(ii.isLatched())
            })(ie, He), Hi.update(ie.wasPressed((0, Fe.j)("use")), ie.isHeld((0, Fe.j)("use")), He, !1), Ui.update(ie.isHeld((0, Fe.j)("hotbarPrevious")), He) && ee.scrollHotbar(-1), Fi.update(ie.isHeld((0, Fe.j)("hotbarNext")), He) && ee.scrollHotbar(1), ((ie, He, ye) => {
              const be = (0, Fe.j)("perspective"),
                Me = (0, Fe.j)("pickBlock"),
                Ke = ee.pickBlockAllowed();
              (0, le.e)(Ke && !oi && ee.targetsBlock());
              const Ue = () => {
                He.pickBlock() && (oi = !0, (0, le.e)(!1))
              };
              if (!Ke || Me !== be) return Ji.release(), ie.wasPressed(be) && He.swapCameraZoom(), void(Ke && ie.wasPressed(Me) && Ue());
              const Je = Ji.update(ie.wasPressed(Me), ie.isHeld(Me), ye, je());
              "tap" === Je ? Ue() : "hold" === Je && He.swapCameraZoom()
            })(ie, ye, He), ((ie, He, ye) => {
              const be = (0, Fe.j)("drop");
              if (ie.wasPressed(be)) {
                He.dropItem(!1);
                const ee = (0, ke.h)();
                "off" !== ee.buttonRepeat && (de = ye, We = Se.d[ee.tapHoldTime].dropStackMs, (0, ue.h)(We))
              }
              null !== de && (!ie.isHeld(be) || ee.selectedSlotEmpty() ? we() : ye - de >= We && (we(), He.dropItem(!0)))
            })(ie, ye, He), Qe.update(ye, ie, He, je()), Xi(ie, He)
          },
          Bi = Re.d.register({
            name: "gameplay",
            isActive: () => {
              const ie = yi && "keyboardMouse" === ye.e.get("activeInputDevice") && !(0, qe.E)(),
                He = (0, qe.l)() ? [Ye.c] : [];
              return ((0, qe.l)() || ie) && (0, pe.d)(He) && ee.hasPlayer()
            },
            onFrame: ee => {
              const ie = performance.now(),
                He = (0, ke.h)(),
                ye = (0, xe.y)(ee, (0, xe.p)(He, (0, Fe.j)("pause"), (0, Le.d)().isSupported())),
                be = (0, xe.l)(ye, He.swapSticks);
              return (0, qe.l)() ? (Mi = !1, (0, pe.d)() ? (Ki = !1, Ne.update(be.look, He, ye.isHeld((0, Fe.j)("use"))), fi(ye, be.move, ie), void zi(ye, ie)) : (Ki || (Ki = !0, oe.lostToPadScreen(), ki()), void Ti(ye, ie))) : (Mi || (Ri(), Mi = !0), void fi(ye, be.move, ie))
            },
            onDeactivate: ee => {
              (0, qe.l)() && oe.lostToPadScreen(), ki(ee)
            },
            onPeekFrame: ie => {
              (0, qe.l)() && (0, pe.d)(Ye.h) && ee.hasPlayer() ? fi(ie, (0, xe.l)(ie, (0, ke.h)().swapSticks).move, performance.now(), !0) : ki()
            }
          }),
          Ei = (0, Ye.e)(ee),
          gi = (() => {
            const ee = be.h.subscribe(Ae.c, (ee => {
              !ee && (0, qe.l)() && "inGame" === ye.e.get("gameState") && be.h.yR("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              be.h.unsubscribe(ee)
            }
          })();
        return () => {
          ki(), ee.uninstall(), (0, ve.f)(!1), (0, le.e)(!1), be.h.unsubscribe(ge), be.h.unsubscribe(ei), Bi(), Ei(), gi(), Ne.uninstall()
        }
      }
  },
  41686: (ee, ie, He) => {
    He.d(ie, {
      c: () => fe,
      e: () => pe,
      h: () => qe
    });
    var ye = He(1246),
      be = He(4623),
      Me = He(9518),
      Ke = He(37761),
      Ue = He(1728),
      Fe = He(1121),
      Je = He(8971),
      oe = He(9443),
      Re = He(9539);
    const ke = {
        emoteWheel: Me.f,
        quickChatWheel: oe.e,
        actionWheel: Re.q
      },
      qe = Object.keys(ke),
      fe = "dead",
      Te = ee => (0, ye.s)().includes(ee),
      pe = ee => {
        const ie = [(0, Je.g)(fe, (() => ee.hasPlayer() && ee.isPlayerDead())), (0, Je.g)("sleeping", (() => Te(Ke.e))), (0, Je.g)("turnstile", (() => Te(Fe.g))), (0, Je.g)("videoAd", Ue.g), (0, Je.g)("replay", (() => (0, be.d)() || ee.isReplayMode())), (0, Je.g)("freeCamera", (() => ee.isFreeCameraOn())), ...Object.entries(ke).map((ee => {
          let [ie, He] = ee;
          return (0, Je.g)(ie, He)
        }))];
        return () => {
          for (const ee of ie) ee()
        }
      }
  },
  41679: (ee, ie, He) => {
    He.d(ie, {
      d: () => be,
      h: () => Fe,
      l: () => Ue,
      p: () => oe,
      r: () => Ke,
      u: () => Me,
      v: () => Je,
      y: () => Re
    });
    var ye = He(8912);
    class be {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(ee, ie, He) {
        const be = (0, ye.k)(ee, ie.lookDeadzone);
        if (Math.hypot(be.x, be.y) < .9 || Math.abs(be.x) < Math.abs(be.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = He);
        const Me = (Ke = ie.lookSensitivityX, Math.min(1, 100 / Ke));
        var Ke;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (He - this.fullTiltSinceMs - 250 * Me) / (200 * Me)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const Me = (ee, ie, He, be, Me) => {
        let Ke = 1;
        return "boost" === He.lookCurve ? Ke = ee.update(ie, He, Me) : ee.reset(),
          function(ee, ie) {
            let {
              yawBoost: He = 1,
              aiming: be = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const Me = (0, ye.g)((0, ye.k)(ee, ie.lookDeadzone), ie.lookCurve),
              Ke = 220 * Math.PI / 180,
              Ue = be ? ie.aimLookSensitivity / 100 : 1,
              Fe = ie.lookSensitivityX / 100 * Ue,
              Je = ie.lookSensitivityY / 100 * Ue;
            return {
              yawRadPerSec: Me.x * Ke * Fe * He * (ie.invertLookX ? -1 : 1),
              pitchRadPerSec: Me.y * Ke * .7 * Je * (ie.invertLookY ? -1 : 1)
            }
          }(ie, He, {
            yawBoost: Ke,
            aiming: be
          })
      },
      Ke = (ee, ie) => {
        const He = Math.max(0, Math.min(250, ie)) / 1e3;
        return {
          XV: ee.yawRadPerSec * He,
          zV: ee.pitchRadPerSec * He
        }
      },
      Ue = (ee, ie) => ie ? {
        move: ee.rightStick,
        look: ee.leftStick
      } : {
        move: ee.leftStick,
        look: ee.rightStick
      },
      Fe = (ee, ie) => {
        const He = (0, ye.k)(ee, ie),
          be = Math.min(1, Math.hypot(He.x, He.y));
        return {
          magnitude: be,
          speed: Math.min(1, be / .8),
          headingOffset: 0 === be ? 0 : Math.atan2(He.x, -He.y),
          x: He.x,
          y: He.y
        }
      },
      Je = (ee, ie) => {
        let {
          sprintPressed: He,
          magnitude: ye,
          autoSprint: be,
          nowMs: Me
        } = ie;
        const Ke = He ? Me : ee.latchedAtMs,
          Ue = (ee => {
            let {
              running: ie,
              magnitude: He,
              sprintPressed: ye,
              autoSprint: be
            } = ee;
            return !(He < .5) && (!!ye || !!(be && He >= .9) || ie)
          })({
            running: ee.running,
            magnitude: ye,
            sprintPressed: Me - Ke <= 1e3,
            autoSprint: be
          });
        return {
          running: Ue,
          latchedAtMs: Ue ? -1 / 0 : Ke
        }
      },
      oe = (ee, ie, He) => He && ee.gyroAiming && "button" === ee.gyroActivation && ee.gyroButton !== ie ? ee.gyroButton : null,
      Re = (ee, ie) => ie ? {
        ...ee,
        isHeld: He => He !== ie && ee.isHeld(He),
        wasPressed: He => He !== ie && ee.wasPressed(He),
        wasReleased: He => He !== ie && ee.wasReleased(He),
        value: He => He === ie ? 0 : ee.value(He)
      } : ee
  },
  41690: (ee, ie, He) => {
    He.d(ie, {
      e: () => be,
      h: () => ye
    });
    const ye = ee => {
      let {
        mode: ie,
        sneakHeld: He,
        sneakPressed: ye,
        sneakTogglePressed: be,
        descending: Me,
        canCrouch: Ke,
        toggled: Ue
      } = ee;
      return Ke ? Me ? {
        crouchHeld: He,
        toggled: !1
      } : "hold" === ie ? {
        crouchHeld: He,
        toggled: be ? !Ue : Ue
      } : {
        crouchHeld: !1,
        toggled: ye || be ? !Ue : Ue
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class be {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(ee, ie) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = ie, this.graceEndsMs = ie + 500);
        const He = ie < this.graceEndsMs;
        return He && (ee.sneakPressed || ee.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, ie + 300))), ee.sneakHeld ? He && ee.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: ee.sneakHeld && !this.ignoringHeld,
          sneakPressed: ee.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: ee.sneakTogglePressed && !He
        }
      }
    }
  },
  41666: (ee, ie, He) => {
    He(9584)
  },
  41670: (ee, ie, He) => {
    He.d(ie, {
      b: () => Be
    });
    var ye = He(27),
      be = He(9518),
      Me = He(9529),
      Ke = He(8926),
      Ue = He(8954),
      Fe = He(8935),
      Je = He(41679),
      oe = He(41686),
      Re = He(8971),
      ke = He(8912),
      qe = He(9443),
      fe = He(9539);
    const Te = [{
        isOpen: be.g,
        openButton: () => (0, Ke.j)("emoteWheel"),
        aim: ee => {
          ye.h.yR("emoteWheelPadAim", ee)
        },
        commit: ee => {
          ye.h.yR("requestEmoteWheelPadCommit", ee)
        },
        close: () => {
          ye.h.yR("requestEmoteWheelClose")
        }
      }, {
        isOpen: qe.e,
        openButton: () => (0, Ke.j)("chat"),
        aim: ee => {
          ye.h.yR(qe.g, ee)
        },
        commit: ee => {
          ye.h.yR(qe.m, ee)
        },
        close: () => {
          ye.h.yR(qe.k)
        },
        keptOpenBy: [oe.c]
      }, {
        isOpen: fe.q,
        openButton: () => (0, Ke.j)("actionButton"),
        aim: ee => {
          ye.h.yR(fe.d, ee)
        },
        commit: ee => {
          ye.h.yR(fe.i, ee)
        },
        close: () => {
          ye.h.yR(fe.f)
        }
      }],
      pe = () => {
        var ee;
        return null !== (ee = Te.find((ee => ee.isOpen()))) && void 0 !== ee ? ee : null
      },
      Xe = ee => (0, Ke.H)(ee.openButton()),
      ze = (ee, ie) => !(0, ke.L)(ee.frame.values, ie),
      Be = () => {
        let ee = null,
          ie = !1,
          He = !1;
        return Ue.d.register({
          name: "wheel",
          isActive: () => null !== pe(),
          peek: () => {
            const ee = pe();
            return ee && Xe(ee) ? null : {
              over: "gameplay",
              stick: (0, Fe.h)().swapSticks ? "right" : "left"
            }
          },
          onFrame: ye => {
            var be;
            const ke = pe();
            if (!ke) return;
            if (null !== (0, Re.c)([...oe.h, ...null !== (be = ke.keptOpenBy) && void 0 !== be ? be : []])) return void ke.close();
            const qe = ke.openButton(),
              fe = (0, Je.l)(ye.frame, (0, Fe.h)().swapSticks),
              Te = Xe(ke) ? fe.move : fe.look;
            ee !== ke ? (ee = ke, ie = !ze(ye, qe) || Math.hypot(Te.x, Te.y) >= Me.A, He = !1) : He && (He = !1, ze(ye, qe) && (ie = !1)), ke.aim(Te);
            const Be = (0, Ke.j)("menuConfirm"),
              Ee = (0, Ke.j)("menuBack");
            return ye.wasPressed(Ee) ? (Ue.d.consumeButton(Ee), void ke.close()) : ye.wasPressed(Be) || ye.wasPressed(qe) ? (Ue.d.consumeButton(Be), Ue.d.consumeButton(qe), void ke.commit(!1)) : void(ie && ze(ye, qe) && (ie = !1, ke.commit(!0)))
          },
          onDeactivate: () => {
            He = null !== ee && pe() === ee, He || (ee = null, ie = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);