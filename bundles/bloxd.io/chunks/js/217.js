export const id = 217;
export const ids = [217];
export const modules = {
  36285: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => mD,
      g: () => XD
    });
    var ID = cD(4102),
      pD = cD(1440),
      iD = cD(53),
      fD = cD(6212),
      bD = cD(4089),
      QD = cD(1284),
      wD = cD(1905),
      SD = cD(1872),
      BD = cD(1442),
      yD = cD(1192),
      MD = cD(36292),
      tD = cD(1049),
      ZD = cD.n(tD),
      oD = cD(1305),
      vD = cD(1064),
      ND = cD(1280),
      gD = cD(1093);
    const XD = "SleepingOverlay";

    function mD() {
      const {
        t: DD
      } = (0, yD.F)(), [CD, cD] = (0, iD.useState)(!1), [tD, mD] = (0, iD.useState)(null), [OD, PD] = (0, iD.useState)(1), [HD, UD] = (0, iD.useState)(!1), [xD, qD] = (0, iD.useState)(!1), JD = (0, iD.useRef)(0), KD = (0, iD.useRef)(!1), aD = (0, iD.useRef)(!1), VD = (0, iD.useRef)(), zD = (0, iD.useRef)(null);

      function jD() {
        const DD = null !== tD && void 0 !== tD ? tD : "Rested Speed";
        wD.gameBridge.send("wakeUp", xD ? DD : null), zD.current = null, cD(!1), mD(null), PD(1), UD(!1), qD(!1)
      }

      function lD() {
        return !HD && (jD(), !0)
      }
      return (0, pD.f)("PlayerPhysicsTypeUpdate", (DD => {
        DD !== zD.current && (zD.current = DD, DD === fD.p.SLEEPING ? (aD.current || (JD.current = wD.gameBridge.lookup("cameraZoom", null), aD.current = !0), KD.current = !0, wD.gameBridge.send("setCameraZoom", 3), cD(!0), PD(function() {
          for (const DD of wD.gameBridge.lookup("blocksStandingOn", null)) {
            if (MD.b.leafBeds.includes(DD)) return console.log(`Found leaf bed: ${DD}`), 1;
            if (MD.b.woolBeds.includes(DD)) return console.log(`Found woold bed: ${DD}`), 2;
            if (MD.b.strongBeds.includes(DD)) return console.log(`Found strong bed ${DD}`), 3
          }
          return 1
        }())) : (aD.current = !1, cD(!1), mD(null), PD(1)))
      })), (0, iD.useEffect)((() => () => {
        (0, QD.l)(XD)
      }), []), (0, iD.useEffect)((() => {
        CD ? (0, QD.p)(XD) : ((0, QD.l)(XD), KD.current && (wD.gameBridge.send("setCameraZoom", JD.current), KD.current = !1))
      }), [CD]), (0, ND.t)("overlay", VD, lD, CD), (0, gD.jsx)(ID.e, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: CD,
        timeout: 300,
        nodeRef: VD,
        unmountOnExit: !0,
        children: (0, gD.jsx)("div", {
          ref: VD,
          onClick: DD => {
            lD() && DD.stopPropagation()
          },
          children: (0, gD.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, gD.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: bD.i.map((CD => (0, gD.jsxs)(nD, {
                restedEffect: CD,
                qb: tD,
                setChosenRestedEffect: mD,
                children: [(0, gD.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, gD.jsx)(SD.c, {
                    text: [{
                      icon: CD
                    }]
                  }), bD.g[CD].shortName]
                }), (0, gD.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: DD(bD.g[CD].description, {
                    time: bD.g[CD].effectLevelDurations[OD] / 6e4
                  })
                })]
              }, CD)))
            }), (0, gD.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, gD.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, gD.jsxs)(BD.i, {
                className: "SleepingOverlayWakeUpButton",
                onClick: DD => {
                  xD ? jD() : (UD(!0), (0, oD.Z)((() => {
                    UD(!1), qD(!0)
                  }), !0)), DD.stopPropagation()
                },
                loading: HD,
                children: [!xD && (0, gD.jsxs)(gD.Fragment, {
                  children: [(0, gD.jsx)(vD.c, {
                    name: "film"
                  }), " ", DD("classicGame:watchAdToGetRestedPerk")]
                }), xD && DD("classicGame:wakeUp")]
              }), (0, gD.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, gD.jsx)("div", {
                  className: ZD()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === OD
                  }),
                  children: (0, gD.jsx)(SD.c, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, gD.jsx)("div", {
                  className: ZD()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === OD
                  }),
                  children: (0, gD.jsx)(SD.c, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, gD.jsx)("div", {
                  className: ZD()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === OD
                  }),
                  children: (0, gD.jsx)(SD.c, {
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
    const nD = (0, iD.memo)((function(DD) {
      let {
        children: CD,
        restedEffect: cD,
        qb: ID,
        setChosenRestedEffect: pD
      } = DD;
      return cD === ID ? (0, gD.jsx)(BD.o, {
        onClick: DD => {
          DD.stopPropagation()
        },
        children: CD
      }) : (0, gD.jsx)(BD.k, {
        onClick: DD => {
          pD(cD), DD.stopPropagation()
        },
        children: CD
      })
    }))
  },
  39674: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => eD
    });
    var ID = cD(16),
      pD = cD(20),
      iD = cD(4119),
      fD = cD(312),
      bD = cD(1627),
      QD = cD(7851),
      wD = cD(4134),
      SD = cD(8379),
      BD = cD(7890),
      yD = cD(7865),
      MD = cD(7893),
      tD = cD(1660),
      ZD = cD(7899),
      oD = cD(8339),
      vD = cD(8497),
      ND = cD(8391),
      gD = cD(8506),
      XD = cD(1905),
      mD = cD(7839),
      nD = cD(8413),
      OD = cD(8409),
      PD = cD(8384);
    class HD {
      constructor() {
        this.lostAtMs = null
      }
      update(DD, CD) {
        return DD ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= CD, CD - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class UD {
      constructor(DD, CD) {
        this.press = DD, this.release = CD, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(DD, CD, cD, ID) {
        if (DD && null === this.downAtMs) return this.downAtMs = cD, this.latched = ID, void(this.token = this.press());
        null !== this.downAtMs && (this.latched ? DD && this.end() : !CD && cD - this.downAtMs >= 40 && this.end())
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
        const DD = this.token;
        this.downAtMs = null, this.token = null, this.latched = !1, this.release(DD)
      }
    }
    const xD = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      qD = DD => {
        let CD = null;
        const cD = new PD.e,
          ID = () => {
            CD && (((DD, CD, cD) => {
              switch (cD.kind) {
                case "reload":
                  return void CD.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void CD.specialActionUp(cD.action);
                case "customButton":
                  return void XD.gameBridge.send("pressCustomButton", {
                    id: cD.id,
                    down: !1
                  });
                case "touchButton":
                  DD.pressTouchButton(!1)
              }
            })(DD, CD.bodies, CD.action), CD = null)
          },
          iD = (cD, pD, iD, fD) => {
            ID(), CD = {
              action: pD,
              bodies: cD,
              heldBy: iD,
              atMs: fD
            }, ((DD, CD, cD) => {
              switch (cD.kind) {
                case "reload":
                  return CD.reloadGun(), void CD.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void CD.specialActionDown(cD.action);
                case "customButton":
                  return void XD.gameBridge.send("pressCustomButton", {
                    id: cD.id,
                    down: !0
                  });
                case "touchButton":
                  DD.pressTouchButton(!0)
              }
            })(DD, cD, pD)
          };
        return {
          update: (fD, bD, wD, SD) => {
            var yD;
            const MD = (0, nD.j)(DD.contextActionInputs()),
              tD = null !== (yD = MD[0]) && void 0 !== yD ? yD : xD;
            (0, OD.e)((0, nD.h)(tD) ? tD : null);
            const ZD = (0, nD.e)(MD);
            (0, OD.f)(ZD);
            const oD = (0, QD.h)("actionButton");
            if (ZD) {
              const DD = cD.update(bD.wasPressed(oD), bD.isHeld(oD), wD, SD);
              "tap" === DD ? iD(fD, tD, [oD], wD) : "hold" === DD && (BD.d.consumeButton(oD), pD.i.Uo(gD.k, MD))
            } else cD.release(), bD.wasPressed(oD) && iD(fD, tD, [oD], wD);
            CD && wD - CD.atMs >= 40 && !CD.heldBy.some((DD => (0, mD.D)(bD.frame.values, DD))) && ID()
          },
          pressPicked: (DD, CD) => {
            iD(DD, CD, [(0, QD.h)("menuConfirm"), (0, QD.h)("actionButton")], performance.now())
          },
          release: () => {
            cD.release(), ID(), (0, OD.e)(null), (0, OD.f)(!1)
          }
        }
      };
    var JD = cD(7834);
    var KD = cD(39671),
      aD = cD(8428),
      VD = cD(7883),
      zD = cD(8548);
    var jD = cD(39668),
      lD = cD(8555),
      LD = cD(39678),
      TD = cD(8534),
      GD = cD(8430),
      RD = cD(8439),
      kD = cD(8448),
      dD = cD(8347);
    const YD = () => dD.c[(0, yD.h)().tapHoldTime].wheelMs,
      WD = () => ((0, SD.d)(), new Event("controllerMenuKey")),
      sD = (DD, CD, cD) => new UD((() => {
        const cD = DD.bodies();
        return {
          bodies: cD,
          press: CD(cD)
        }
      }), (DD => {
        let {
          bodies: CD,
          press: ID
        } = DD;
        cD(CD, ID)
      })),
      ED = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      eD = DD => {
        const CD = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let cD = ED;
        const SD = new LD.b,
          XD = pD.i.subscribe("appManagerUpdated|activeInputDevice", (CD => {
            DD.deviceChanged(CD)
          }));
        let nD = null,
          OD = 0;
        const UD = () => {
          nD = null, (0, GD.f)(null)
        };
        let xD = !1;
        const eD = new HD,
          uD = DD.look,
          hD = new PD.e,
          rD = new PD.e,
          AD = qD(DD),
          FD = pD.i.subscribe(gD.o, (CD => {
            AD.pressPicked(DD.bodies(), CD)
          })),
          DC = sD(DD, (DD => DD.primaryFireDown()), ((DD, CD) => {
            DD.primaryFireUp(CD)
          })),
          CC = sD(DD, (DD => DD.altFireDown()), ((DD, CD) => {
            DD.altFireUp(CD)
          }));
        let cC = !1,
          IC = !1,
          pC = !1;
        const iC = (0, oD.b)(mD.X),
          fC = (0, oD.b)(mD.X),
          bC = new PD.e;
        let QC = !1;
        const wC = () => {
            iC.reset(), fC.reset(), bC.release(), (0, kD.d)(!1), uD.release(), DC.cancel(), (0, RD.f)(!1), CC.cancel(), AD.release(), hD.release(), rD.release(), UD()
          },
          SC = function() {
            let ID = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            wC(), IC = !1, ID || (cC = !1, cD = ED, Object.assign(CD, {
              x: 0,
              y: 0,
              magnitude: 0,
              headingOffset: 0,
              jumpHeld: !1,
              jumpPressed: !1,
              running: !1,
              sprintHeld: !1
            }), DD.stopMoving())
          },
          BC = function(ID, pD, iD) {
            let fD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const bD = (0, yD.h)(),
              wD = (0, jD.e)(pD, bD.moveDeadzone),
              BD = (0, QD.h)("sprint");
            cD = (0, jD.v)(cD, {
              sprintPressed: ID.wasPressed(BD),
              magnitude: wD.magnitude,
              autoSprint: bD.autoSprint,
              nowMs: iD
            }), CD.running = cD.running, CD.sprintHeld = ID.isHeld(BD), CD.x = wD.x, CD.y = wD.y, CD.magnitude = wD.speed, CD.headingOffset = wD.headingOffset, cC = wD.magnitude > 0;
            const MD = (0, QD.h)("jump");
            if (CD.jumpHeld = ID.isHeld(MD), CD.jumpPressed = ID.wasPressed(MD), CD.jumpPressed && DD.bodies().jumpDown(), fD) return void DD.move(CD, null);
            const tD = (0, QD.h)("sneak"),
              ZD = SD.filter({
                sneakHeld: ID.isHeld(tD),
                sneakPressed: ID.wasPressed(tD),
                sneakTogglePressed: ID.wasPressed((0, QD.h)("sneakToggle"))
              }, iD);
            DD.move(CD, {
              ...ZD,
              mode: bD.sneakMode
            })
          },
          yC = (DD, CD) => {
            const cD = (0, QD.h)("chat");
            if ("off" === (0, yD.h)().quickChat) return void(DD.wasPressed(cD) && (BD.d.consumeButton(cD), pD.i.Uo(aD.e)));
            const ID = hD.update(DD.wasPressed(cD), DD.isHeld(cD), CD, YD());
            "tap" === ID || "hold" === ID && null === (0, tD.c)() ? pD.i.Uo(aD.e) : "hold" === ID && (BD.d.consumeButton(cD), pD.i.Uo(ND.o))
          },
          MC = (CD, cD) => {
            ((DD, CD) => {
              const cD = (0, vD.b)(),
                ID = (0, QD.h)("emoteWheel");
              if ("wheel" === (0, yD.h)().emoteButton) return DD.wasPressed(ID) && (BD.d.consumeButton(ID), pD.i.Uo("requestEmoteWheelPadOpen", !0)), (0, vD.b)() !== cD;
              const iD = rD.update(DD.wasPressed(ID), DD.isHeld(ID), CD, YD());
              return "tap" === iD ? pD.i.Uo("requestEmoteRepeatLast") : "hold" === iD && (BD.d.consumeButton(ID), pD.i.Uo("requestEmoteWheelPadOpen", !1)), (0, vD.b)() !== cD
            })(CD, cD) || yC(CD, cD), CD.wasPressed((0, QD.h)("inventory")) && (BD.d.consumeButton((0, QD.h)("inventory")), (0, bD.z)(WD(), "inventory", DD.hasFullInventory())), CD.wasPressed((0, QD.h)("pause")) && (BD.d.consumeButton((0, QD.h)("pause")), (0, wD.b)() === fD.q.SOCIAL ? (0, bD.y)(WD(), fD.q.SOCIAL) : (0, bD.k)(WD())), CD.wasPressed((0, QD.h)("leaderboard")) && !(0, iD.i)() && (BD.d.consumeButton((0, QD.h)("leaderboard")), ((DD, CD) => {
              if ("shop" === (0, VD.b)()) return pD.i.Uo(zD.j), void(0, bD.y)(DD, fD.q.SHOP, !0);
              (0, bD.y)(DD, fD.q.LOBBY_LEADERBOARD, CD)
            })(WD(), DD.hasLobbyLeaderboard()))
          },
          tC = (CD, cD) => {
            const ID = DD.bodies();
            ((CD, cD) => {
              const ID = (0, QD.h)("attack"),
                pD = CD.wasPressed(ID);
              pD && !DC.isLatched() && (xD = DD.targetsBlock()), DC.update(pD, CD.isHeld(ID), cD, "toggle" === (0, yD.h)().attackMode), DC.isLatched() && xD ? eD.update(DD.targetsBlock(), cD) && DC.unlatch() : eD.reset(), (0, RD.f)(DC.isLatched())
            })(CD, cD), CC.update(CD.wasPressed((0, QD.h)("use")), CD.isHeld((0, QD.h)("use")), cD, !1), iC.update(CD.isHeld((0, QD.h)("hotbarPrevious")), cD) && DD.scrollHotbar(-1), fC.update(CD.isHeld((0, QD.h)("hotbarNext")), cD) && DD.scrollHotbar(1), ((CD, cD, ID) => {
              const pD = (0, QD.h)("perspective"),
                iD = (0, QD.h)("pickBlock"),
                fD = DD.pickBlockAllowed();
              (0, kD.d)(fD && !QC && DD.targetsBlock());
              const bD = () => {
                cD.pickBlock() && (QC = !0, (0, kD.d)(!1))
              };
              if (!fD || iD !== pD) return bC.release(), CD.wasPressed(pD) && cD.swapCameraZoom(), void(fD && CD.wasPressed(iD) && bD());
              const wD = bC.update(CD.wasPressed(iD), CD.isHeld(iD), ID, YD());
              "tap" === wD ? bD() : "hold" === wD && cD.swapCameraZoom()
            })(CD, ID, cD), ((CD, cD, ID) => {
              const pD = (0, QD.h)("drop");
              if (CD.wasPressed(pD)) {
                cD.dropItem(!1);
                const DD = (0, yD.h)();
                "off" !== DD.buttonRepeat && (nD = ID, OD = dD.c[DD.tapHoldTime].dropStackMs, (0, GD.f)(OD))
              }
              null !== nD && (!CD.isHeld(pD) || DD.selectedSlotEmpty() ? UD() : ID - nD >= OD && (UD(), cD.dropItem(!0)))
            })(CD, ID, cD), AD.update(ID, CD, cD, YD()), MC(CD, cD)
          },
          ZC = BD.d.register({
            name: "gameplay",
            isActive: () => {
              const CD = cC && "keyboardMouse" === ID.d.get("activeInputDevice") && !(0, MD.G)(),
                cD = (0, MD.i)() ? [KD.d] : [];
              return ((0, MD.i)() || CD) && (0, ZD.i)(cD) && DD.hasPlayer()
            },
            onFrame: DD => {
              const CD = performance.now(),
                cD = (0, yD.h)(),
                ID = (0, jD.z)(DD, (0, jD.l)(cD, (0, QD.h)("pause"), (0, lD.c)().isSupported())),
                pD = (0, jD.i)(ID, cD.swapSticks);
              return (0, MD.i)() ? (IC = !1, (0, ZD.i)() ? (pC = !1, uD.update(pD.look, cD, ID.isHeld((0, QD.h)("use"))), BC(ID, pD.move, CD), void tC(ID, CD)) : (pC || (pC = !0, SD.lostToPadScreen(), SC()), void yC(ID, CD))) : (IC || (wC(), IC = !0), void BC(ID, pD.move, CD))
            },
            onDeactivate: DD => {
              (0, MD.i)() && SD.lostToPadScreen(), SC(DD)
            },
            onPeekFrame: CD => {
              (0, MD.i)() && (0, ZD.i)(KD.k) && DD.hasPlayer() ? BC(CD, (0, jD.i)(CD, (0, yD.h)().swapSticks).move, performance.now(), !0) : SC()
            }
          }),
          oC = (0, KD.g)(DD),
          vC = (() => {
            const DD = pD.i.subscribe(JD.c, (DD => {
              !DD && (0, MD.i)() && "inGame" === ID.d.get("gameState") && pD.i.Uo("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              pD.i.unsubscribe(DD)
            }
          })();
        return () => {
          SC(), DD.uninstall(), (0, TD.g)(!1), (0, kD.d)(!1), pD.i.unsubscribe(XD), pD.i.unsubscribe(FD), ZC(), oC(), vC(), uD.uninstall()
        }
      }
  },
  39671: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => tD,
      g: () => oD,
      k: () => MD
    });
    var ID = cD(1284),
      pD = cD(4119),
      iD = cD(8482),
      fD = cD(36285),
      bD = cD(1694),
      QD = cD(1185),
      wD = cD(7899),
      SD = cD(8391),
      BD = cD(8506);
    const yD = {
        emoteWheel: iD.g,
        quickChatWheel: SD.e,
        actionWheel: BD.q
      },
      MD = Object.keys(yD),
      tD = "dead",
      ZD = DD => (0, ID.i)().includes(DD),
      oD = DD => {
        const CD = [(0, wD.p)(tD, (() => DD.hasPlayer() && DD.isPlayerDead())), (0, wD.p)("sleeping", (() => ZD(fD.g))), (0, wD.p)("turnstile", (() => ZD(QD.f))), (0, wD.p)("videoAd", bD.e), (0, wD.p)("replay", (() => (0, pD.i)() || DD.isReplayMode())), (0, wD.p)("freeCamera", (() => DD.isFreeCameraOn())), ...Object.entries(yD).map((DD => {
          let [CD, cD] = DD;
          return (0, wD.p)(CD, cD)
        }))];
        return () => {
          for (const DD of CD) DD()
        }
      }
  },
  39668: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD,
      e: () => QD,
      i: () => bD,
      l: () => SD,
      p: () => fD,
      t: () => iD,
      v: () => wD,
      z: () => BD
    });
    var ID = cD(7839);
    class pD {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(DD, CD, cD) {
        const pD = (0, ID.i)(DD, CD.lookDeadzone);
        if (Math.hypot(pD.x, pD.y) < .9 || Math.abs(pD.x) < Math.abs(pD.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = cD);
        const iD = (fD = CD.lookSensitivityX, Math.min(1, 100 / fD));
        var fD;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (cD - this.fullTiltSinceMs - 250 * iD) / (200 * iD)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const iD = (DD, CD, cD, pD, iD) => {
        let fD = 1;
        return "boost" === cD.lookCurve ? fD = DD.update(CD, cD, iD) : DD.reset(),
          function(DD, CD) {
            let {
              yawBoost: cD = 1,
              aiming: pD = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const iD = (0, ID.f)((0, ID.i)(DD, CD.lookDeadzone), CD.lookCurve),
              fD = 220 * Math.PI / 180,
              bD = pD ? CD.aimLookSensitivity / 100 : 1,
              QD = CD.lookSensitivityX / 100 * bD,
              wD = CD.lookSensitivityY / 100 * bD;
            return {
              yawRadPerSec: iD.x * fD * QD * cD * (CD.invertLookX ? -1 : 1),
              pitchRadPerSec: iD.y * fD * .7 * wD * (CD.invertLookY ? -1 : 1)
            }
          }(CD, cD, {
            yawBoost: fD,
            aiming: pD
          })
      },
      fD = (DD, CD) => {
        const cD = Math.max(0, Math.min(250, CD)) / 1e3;
        return {
          Qq: DD.yawRadPerSec * cD,
          wq: DD.pitchRadPerSec * cD
        }
      },
      bD = (DD, CD) => CD ? {
        move: DD.rightStick,
        look: DD.leftStick
      } : {
        move: DD.leftStick,
        look: DD.rightStick
      },
      QD = (DD, CD) => {
        const cD = (0, ID.i)(DD, CD),
          pD = Math.min(1, Math.hypot(cD.x, cD.y));
        return {
          magnitude: pD,
          speed: Math.min(1, pD / .8),
          headingOffset: 0 === pD ? 0 : Math.atan2(cD.x, -cD.y),
          x: cD.x,
          y: cD.y
        }
      },
      wD = (DD, CD) => {
        let {
          sprintPressed: cD,
          magnitude: ID,
          autoSprint: pD,
          nowMs: iD
        } = CD;
        const fD = cD ? iD : DD.latchedAtMs,
          bD = (DD => {
            let {
              running: CD,
              magnitude: cD,
              sprintPressed: ID,
              autoSprint: pD
            } = DD;
            return !(cD < .5) && (!!ID || !!(pD && cD >= .9) || CD)
          })({
            running: DD.running,
            magnitude: ID,
            sprintPressed: iD - fD <= 1e3,
            autoSprint: pD
          });
        return {
          running: bD,
          latchedAtMs: bD ? -1 / 0 : fD
        }
      },
      SD = (DD, CD, cD) => cD && DD.gyroAiming && "button" === DD.gyroActivation && DD.gyroButton !== CD ? DD.gyroButton : null,
      BD = (DD, CD) => CD ? {
        ...DD,
        isHeld: cD => cD !== CD && DD.isHeld(cD),
        wasPressed: cD => cD !== CD && DD.wasPressed(cD),
        wasReleased: cD => cD !== CD && DD.wasReleased(cD),
        value: cD => cD === CD ? 0 : DD.value(cD)
      } : DD
  },
  39678: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => pD,
      d: () => ID
    });
    const ID = DD => {
      let {
        mode: CD,
        sneakHeld: cD,
        sneakPressed: ID,
        sneakTogglePressed: pD,
        descending: iD,
        canCrouch: fD,
        toggled: bD
      } = DD;
      return fD ? iD ? {
        crouchHeld: cD,
        toggled: !1
      } : "hold" === CD ? {
        crouchHeld: cD,
        toggled: pD ? !bD : bD
      } : {
        crouchHeld: !1,
        toggled: ID || pD ? !bD : bD
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class pD {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(DD, CD) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = CD, this.graceEndsMs = CD + 500);
        const cD = CD < this.graceEndsMs;
        return cD && (DD.sneakPressed || DD.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, CD + 300))), DD.sneakHeld ? cD && DD.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: DD.sneakHeld && !this.ignoringHeld,
          sneakPressed: DD.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: DD.sneakTogglePressed && !cD
        }
      }
    }
  },
  39652: (DD, CD, cD) => {
    cD(8555)
  },
  39661: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => gD
    });
    var ID = cD(20),
      pD = cD(8482),
      iD = cD(8492),
      fD = cD(7851),
      bD = cD(7890),
      QD = cD(7865),
      wD = cD(39668),
      SD = cD(39671),
      BD = cD(7899),
      yD = cD(7839),
      MD = cD(8391),
      tD = cD(8506);
    const ZD = [{
        isOpen: pD.k,
        openButton: () => (0, fD.h)("emoteWheel"),
        aim: DD => {
          ID.i.Uo("emoteWheelPadAim", DD)
        },
        commit: DD => {
          ID.i.Uo("requestEmoteWheelPadCommit", DD)
        },
        close: () => {
          ID.i.Uo("requestEmoteWheelClose")
        }
      }, {
        isOpen: MD.e,
        openButton: () => (0, fD.h)("chat"),
        aim: DD => {
          ID.i.Uo(MD.g, DD)
        },
        commit: DD => {
          ID.i.Uo(MD.l, DD)
        },
        close: () => {
          ID.i.Uo(MD.j)
        },
        keptOpenBy: [SD.d]
      }, {
        isOpen: tD.q,
        openButton: () => (0, fD.h)("actionButton"),
        aim: DD => {
          ID.i.Uo(tD.e, DD)
        },
        commit: DD => {
          ID.i.Uo(tD.i, DD)
        },
        close: () => {
          ID.i.Uo(tD.g)
        }
      }],
      oD = () => {
        var DD;
        return null !== (DD = ZD.find((DD => DD.isOpen()))) && void 0 !== DD ? DD : null
      },
      vD = DD => (0, fD.M)(DD.openButton()),
      ND = (DD, CD) => !(0, yD.D)(DD.frame.values, CD),
      gD = () => {
        let DD = null,
          CD = !1,
          cD = !1;
        return bD.d.register({
          name: "wheel",
          isActive: () => null !== oD(),
          peek: () => {
            const DD = oD();
            return DD && vD(DD) ? null : {
              over: "gameplay",
              stick: (0, QD.h)().swapSticks ? "right" : "left"
            }
          },
          onFrame: ID => {
            var pD;
            const yD = oD();
            if (!yD) return;
            if (null !== (0, BD.e)([...SD.k, ...null !== (pD = yD.keptOpenBy) && void 0 !== pD ? pD : []])) return void yD.close();
            const MD = yD.openButton(),
              tD = (0, wD.i)(ID.frame, (0, QD.h)().swapSticks),
              ZD = vD(yD) ? tD.move : tD.look;
            DD !== yD ? (DD = yD, CD = !ND(ID, MD) || Math.hypot(ZD.x, ZD.y) >= iD.C, cD = !1) : cD && (cD = !1, ND(ID, MD) && (CD = !1)), yD.aim(ZD);
            const gD = (0, fD.h)("menuConfirm"),
              XD = (0, fD.h)("menuBack");
            return ID.wasPressed(XD) ? (bD.d.consumeButton(XD), void yD.close()) : ID.wasPressed(gD) || ID.wasPressed(MD) ? (bD.d.consumeButton(gD), bD.d.consumeButton(MD), void yD.commit(!1)) : void(CD && ND(ID, MD) && (CD = !1, yD.commit(!0)))
          },
          onDeactivate: () => {
            cD = null !== DD && oD() === DD, cD || (DD = null, CD = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);