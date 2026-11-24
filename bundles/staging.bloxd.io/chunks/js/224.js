export const id = 224;
export const ids = [224];
export const modules = {
  36884: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => JD,
      d: () => OD
    });
    var pD = wD(4272),
      sD = wD(1442),
      KD = wD(58),
      rD = wD(6520),
      LD = wD(4260),
      cD = wD(1299),
      gD = wD(1925),
      RD = wD(1895),
      AD = wD(1447),
      UD = wD(1200),
      fD = wD(36891),
      ID = wD(1044),
      BD = wD.n(ID),
      GD = wD(1324),
      hD = wD(1057),
      nD = wD(1282),
      MD = wD(1096);
    const OD = "SleepingOverlay";

    function JD() {
      const {
        t: DD
      } = (0, UD.E)(), [zD, wD] = (0, KD.useState)(!1), [ID, JD] = (0, KD.useState)(null), [QD, XD] = (0, KD.useState)(1), [VD, PD] = (0, KD.useState)(!1), [CD, xD] = (0, KD.useState)(!1), TD = (0, KD.useRef)(0), bD = (0, KD.useRef)(!1), jD = (0, KD.useRef)(!1), dD = (0, KD.useRef)(), SD = (0, KD.useRef)(null);

      function iD() {
        const DD = null !== ID && void 0 !== ID ? ID : "Rested Speed";
        gD.gameBridge.send("wakeUp", CD ? DD : null), SD.current = null, wD(!1), JD(null), XD(1), PD(!1), xD(!1)
      }

      function lD() {
        return !VD && (iD(), !0)
      }
      return (0, sD.g)("PlayerPhysicsTypeUpdate", (DD => {
        DD !== SD.current && (SD.current = DD, DD === rD.q.SLEEPING ? (jD.current || (TD.current = gD.gameBridge.lookup("cameraZoom", null), jD.current = !0), bD.current = !0, gD.gameBridge.send("setCameraZoom", 3), wD(!0), XD(function() {
          for (const DD of gD.gameBridge.lookup("blocksStandingOn", null)) {
            if (fD.b.leafBeds.includes(DD)) return console.log(`Found leaf bed: ${DD}`), 1;
            if (fD.b.woolBeds.includes(DD)) return console.log(`Found woold bed: ${DD}`), 2;
            if (fD.b.strongBeds.includes(DD)) return console.log(`Found strong bed ${DD}`), 3
          }
          return 1
        }())) : (jD.current = !1, wD(!1), JD(null), XD(1)))
      })), (0, KD.useEffect)((() => () => {
        (0, cD.o)(OD)
      }), []), (0, KD.useEffect)((() => {
        zD ? (0, cD.p)(OD) : ((0, cD.o)(OD), bD.current && (gD.gameBridge.send("setCameraZoom", TD.current), bD.current = !1))
      }), [zD]), (0, nD.u)("overlay", dD, lD, zD), (0, MD.jsx)(pD.b, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: zD,
        timeout: 300,
        nodeRef: dD,
        unmountOnExit: !0,
        children: (0, MD.jsx)("div", {
          ref: dD,
          onClick: DD => {
            lD() && DD.stopPropagation()
          },
          children: (0, MD.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, MD.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: LD.h.map((zD => (0, MD.jsxs)(ED, {
                restedEffect: zD,
                wR: ID,
                setChosenRestedEffect: JD,
                children: [(0, MD.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, MD.jsx)(RD.e, {
                    text: [{
                      icon: zD
                    }]
                  }), LD.g[zD].shortName]
                }), (0, MD.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: DD(LD.g[zD].description, {
                    time: LD.g[zD].effectLevelDurations[QD] / 6e4
                  })
                })]
              }, zD)))
            }), (0, MD.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, MD.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, MD.jsxs)(AD.f, {
                className: "SleepingOverlayWakeUpButton",
                onClick: DD => {
                  CD ? iD() : (PD(!0), (0, GD.db)((() => {
                    PD(!1), xD(!0)
                  }), !0)), DD.stopPropagation()
                },
                loading: VD,
                children: [!CD && (0, MD.jsxs)(MD.Fragment, {
                  children: [(0, MD.jsx)(hD.e, {
                    name: "film"
                  }), " ", DD("classicGame:watchAdToGetRestedPerk")]
                }), CD && DD("classicGame:wakeUp")]
              }), (0, MD.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, MD.jsx)("div", {
                  className: BD()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === QD
                  }),
                  children: (0, MD.jsx)(RD.e, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, MD.jsx)("div", {
                  className: BD()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === QD
                  }),
                  children: (0, MD.jsx)(RD.e, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, MD.jsx)("div", {
                  className: BD()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === QD
                  }),
                  children: (0, MD.jsx)(RD.e, {
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
    const ED = (0, KD.memo)((function(DD) {
      let {
        children: zD,
        restedEffect: wD,
        wR: pD,
        setChosenRestedEffect: sD
      } = DD;
      return wD === pD ? (0, MD.jsx)(AD.o, {
        onClick: DD => {
          DD.stopPropagation()
        },
        children: zD
      }) : (0, MD.jsx)(AD.g, {
        onClick: DD => {
          sD(wD), DD.stopPropagation()
        },
        children: zD
      })
    }))
  },
  40495: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => tD
    });
    var pD = wD(20),
      sD = wD(25),
      KD = wD(4295),
      rD = wD(338),
      LD = wD(1648),
      cD = wD(8196),
      gD = wD(4305),
      RD = wD(8713),
      AD = wD(8226),
      UD = wD(8208),
      fD = wD(8230),
      ID = wD(1694),
      BD = wD(8237),
      GD = wD(8658),
      hD = wD(8816),
      nD = wD(8723),
      MD = wD(8824),
      OD = wD(1925),
      JD = wD(8184),
      ED = wD(8748),
      QD = wD(8745),
      XD = wD(8717);
    class VD {
      constructor() {
        this.lostAtMs = null
      }
      update(DD, zD) {
        return DD ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= zD, zD - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class PD {
      constructor(DD, zD) {
        this.press = DD, this.release = zD, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(DD, zD, wD, pD) {
        if (DD && null === this.downAtMs) return this.downAtMs = wD, this.latched = pD, void(this.token = this.press());
        null !== this.downAtMs && (this.latched ? DD && this.end() : !zD && wD - this.downAtMs >= 40 && this.end())
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
    const CD = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      xD = DD => {
        let zD = null;
        const wD = new XD.d,
          pD = () => {
            zD && (((DD, zD, wD) => {
              switch (wD.kind) {
                case "reload":
                  return void zD.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void zD.specialActionUp(wD.action);
                case "customButton":
                  return void OD.gameBridge.send("pressCustomButton", {
                    id: wD.id,
                    down: !1
                  });
                case "touchButton":
                  DD.pressTouchButton(!1)
              }
            })(DD, zD.bodies, zD.action), zD = null)
          },
          KD = (wD, sD, KD, rD) => {
            pD(), zD = {
              action: sD,
              bodies: wD,
              heldBy: KD,
              atMs: rD
            }, ((DD, zD, wD) => {
              switch (wD.kind) {
                case "reload":
                  return zD.reloadGun(), void zD.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void zD.specialActionDown(wD.action);
                case "customButton":
                  return void OD.gameBridge.send("pressCustomButton", {
                    id: wD.id,
                    down: !0
                  });
                case "touchButton":
                  DD.pressTouchButton(!0)
              }
            })(DD, wD, sD)
          };
        return {
          update: (rD, LD, gD, RD) => {
            var UD;
            const fD = (0, ED.n)(DD.contextActionInputs()),
              ID = null !== (UD = fD[0]) && void 0 !== UD ? UD : CD;
            (0, QD.e)((0, ED.h)(ID) ? ID : null);
            const BD = (0, ED.d)(fD);
            (0, QD.i)(BD);
            const GD = (0, cD.g)("actionButton");
            if (BD) {
              const DD = wD.update(LD.wasPressed(GD), LD.isHeld(GD), gD, RD);
              "tap" === DD ? KD(rD, ID, [GD], gD) : "hold" === DD && (AD.e.consumeButton(GD), sD.l.KG(MD.k, fD))
            } else wD.release(), LD.wasPressed(GD) && KD(rD, ID, [GD], gD);
            zD && gD - zD.atMs >= 40 && !zD.heldBy.some((DD => (0, JD.D)(LD.frame.values, DD))) && pD()
          },
          pressPicked: (DD, zD) => {
            KD(DD, zD, [(0, cD.g)("menuConfirm"), (0, cD.g)("actionButton")], performance.now())
          },
          release: () => {
            wD.release(), pD(), (0, QD.e)(null), (0, QD.i)(!1)
          }
        }
      };
    var TD = wD(8178);
    var bD = wD(40487),
      jD = wD(8765),
      dD = wD(8223),
      SD = wD(8849);
    var iD = wD(40483),
      lD = wD(8855),
      WD = wD(40499),
      ND = wD(8833),
      ZD = wD(8768),
      yD = wD(8776),
      kD = wD(8779),
      mD = wD(8664),
      eD = wD(8732);
    const oD = () => mD.d[(0, UD.g)().tapHoldTime].wheelMs,
      aD = () => ((0, RD.d)(), (0, eD.e)("controllerMenuKey")),
      uD = (DD, zD, wD) => new PD((() => {
        const wD = DD.bodies();
        return {
          bodies: wD,
          press: zD(wD)
        }
      }), (DD => {
        let {
          bodies: zD,
          press: pD
        } = DD;
        wD(zD, pD)
      })),
      vD = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      tD = DD => {
        const zD = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let wD = vD;
        const RD = new WD.c,
          OD = sD.l.subscribe("appManagerUpdated|activeInputDevice", (zD => {
            DD.deviceChanged(zD)
          }));
        let ED = null,
          QD = 0;
        const PD = () => {
          ED = null, (0, ZD.h)(null)
        };
        let CD = !1;
        const eD = new VD,
          tD = DD.look,
          FD = new XD.d,
          YD = new XD.d,
          HD = xD(DD),
          qD = sD.l.subscribe(MD.o, (zD => {
            HD.pressPicked(DD.bodies(), zD)
          })),
          Dz = uD(DD, (DD => DD.primaryFireDown()), ((DD, zD) => {
            DD.primaryFireUp(zD)
          })),
          zz = uD(DD, (DD => DD.altFireDown()), ((DD, zD) => {
            DD.altFireUp(zD)
          }));
        let wz = !1,
          pz = !1,
          sz = !1;
        const Kz = (0, GD.b)(JD.W),
          rz = (0, GD.b)(JD.W),
          Lz = new XD.d;
        let cz = !1;
        const gz = () => {
            Kz.reset(), rz.reset(), Lz.release(), (0, kD.e)(!1), tD.release(), Dz.cancel(), (0, yD.i)(!1), zz.cancel(), HD.release(), FD.release(), YD.release(), PD()
          },
          Rz = function() {
            let pD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            gz(), pz = !1, pD || (wz = !1, wD = vD, Object.assign(zD, {
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
          Az = function(pD, sD, KD) {
            let rD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const LD = (0, UD.g)(),
              gD = (0, iD.i)(sD, LD.moveDeadzone),
              AD = (0, cD.g)("sprint");
            wD = (0, iD.w)(wD, {
              sprintPressed: pD.wasPressed(AD),
              magnitude: gD.magnitude,
              autoSprint: LD.autoSprint,
              nowMs: KD
            }), zD.running = wD.running, zD.sprintHeld = pD.isHeld(AD), zD.x = gD.x, zD.y = gD.y, zD.magnitude = gD.speed, zD.headingOffset = gD.headingOffset, wz = gD.magnitude > 0;
            const fD = (0, cD.g)("jump");
            if (zD.jumpHeld = pD.isHeld(fD), zD.jumpPressed = pD.wasPressed(fD), zD.jumpPressed && DD.bodies().jumpDown(), rD) return void DD.move(zD, null);
            const ID = (0, cD.g)("sneak"),
              BD = RD.filter({
                sneakHeld: pD.isHeld(ID),
                sneakPressed: pD.wasPressed(ID),
                sneakTogglePressed: pD.wasPressed((0, cD.g)("sneakToggle"))
              }, KD);
            DD.move(zD, {
              ...BD,
              mode: LD.sneakMode
            })
          },
          Uz = (DD, zD) => {
            const wD = (0, cD.g)("chat");
            if ("off" === (0, UD.g)().quickChat) return void(DD.wasPressed(wD) && (AD.e.consumeButton(wD), sD.l.KG(jD.d)));
            const pD = FD.update(DD.wasPressed(wD), DD.isHeld(wD), zD, oD());
            "tap" === pD || "hold" === pD && null === (0, ID.d)() ? sD.l.KG(jD.d) : "hold" === pD && (AD.e.consumeButton(wD), sD.l.KG(nD.k))
          },
          fz = (zD, wD) => {
            ((DD, zD) => {
              const wD = (0, hD.b)(),
                pD = (0, cD.g)("emoteWheel");
              if ("wheel" === (0, UD.g)().emoteButton) return DD.wasPressed(pD) && (AD.e.consumeButton(pD), sD.l.KG("requestEmoteWheelPadOpen", !0)), (0, hD.b)() !== wD;
              const KD = YD.update(DD.wasPressed(pD), DD.isHeld(pD), zD, oD());
              return "tap" === KD ? sD.l.KG("requestEmoteRepeatLast") : "hold" === KD && (AD.e.consumeButton(pD), sD.l.KG("requestEmoteWheelPadOpen", !1)), (0, hD.b)() !== wD
            })(zD, wD) || Uz(zD, wD), zD.wasPressed((0, cD.g)("inventory")) && (AD.e.consumeButton((0, cD.g)("inventory")), (0, LD.y)(aD(), "inventory", DD.hasFullInventory())), zD.wasPressed((0, cD.g)("pause")) && (AD.e.consumeButton((0, cD.g)("pause")), (0, gD.d)() === rD.l.SOCIAL ? (0, LD.w)(aD(), rD.l.SOCIAL) : (0, LD.l)(aD())), zD.wasPressed((0, cD.g)("leaderboard")) && !(0, KD.f)() && (AD.e.consumeButton((0, cD.g)("leaderboard")), ((DD, zD) => {
              if ("shop" === (0, dD.b)()) return sD.l.KG(SD.j), void(0, LD.w)(DD, rD.l.SHOP, !0);
              (0, LD.w)(DD, rD.l.LOBBY_LEADERBOARD, zD)
            })(aD(), DD.hasLobbyTab()))
          },
          Iz = (zD, wD) => {
            const pD = DD.bodies();
            ((zD, wD) => {
              const pD = (0, cD.g)("attack"),
                sD = zD.wasPressed(pD);
              sD && !Dz.isLatched() && (CD = DD.targetsBlock()), Dz.update(sD, zD.isHeld(pD), wD, "toggle" === (0, UD.g)().attackMode), Dz.isLatched() && CD ? eD.update(DD.targetsBlock(), wD) && Dz.unlatch() : eD.reset(), (0, yD.i)(Dz.isLatched())
            })(zD, wD), zz.update(zD.wasPressed((0, cD.g)("use")), zD.isHeld((0, cD.g)("use")), wD, !1), Kz.update(zD.isHeld((0, cD.g)("hotbarPrevious")), wD) && DD.scrollHotbar(-1), rz.update(zD.isHeld((0, cD.g)("hotbarNext")), wD) && DD.scrollHotbar(1), ((zD, wD, pD) => {
              const sD = (0, cD.g)("perspective"),
                KD = (0, cD.g)("pickBlock"),
                rD = DD.pickBlockAllowed();
              (0, kD.e)(rD && !cz && DD.targetsBlock());
              const LD = () => {
                wD.pickBlock() && (cz = !0, (0, kD.e)(!1))
              };
              if (!rD || KD !== sD) return Lz.release(), zD.wasPressed(sD) && wD.swapCameraZoom(), void(rD && zD.wasPressed(KD) && LD());
              const gD = Lz.update(zD.wasPressed(KD), zD.isHeld(KD), pD, oD());
              "tap" === gD ? LD() : "hold" === gD && wD.swapCameraZoom()
            })(zD, pD, wD), ((zD, wD, pD) => {
              const sD = (0, cD.g)("drop");
              if (zD.wasPressed(sD)) {
                wD.dropItem(!1);
                const DD = (0, UD.g)();
                "off" !== DD.buttonRepeat && (ED = pD, QD = mD.d[DD.tapHoldTime].dropStackMs, (0, ZD.h)(QD))
              }
              null !== ED && (!zD.isHeld(sD) || DD.selectedSlotEmpty() ? PD() : pD - ED >= QD && (PD(), wD.dropItem(!0)))
            })(zD, pD, wD), HD.update(pD, zD, wD, oD()), fz(zD, wD)
          },
          Bz = AD.e.register({
            name: "gameplay",
            isActive: () => {
              const zD = wz && "keyboardMouse" === pD.e.get("activeInputDevice") && !(0, fD.K)(),
                wD = (0, fD.o)() ? [bD.c] : [];
              return ((0, fD.o)() || zD) && (0, BD.f)(wD) && DD.hasPlayer()
            },
            onFrame: DD => {
              const zD = performance.now(),
                wD = (0, UD.g)(),
                pD = (0, iD.A)(DD, (0, iD.o)(wD, (0, cD.g)("pause"), (0, lD.c)().isSupported())),
                sD = (0, iD.l)(pD, wD.swapSticks);
              return (0, fD.o)() ? (pz = !1, (0, BD.f)() ? (sz = !1, tD.update(sD.look, wD, pD.isHeld((0, cD.g)("use"))), Az(pD, sD.move, zD), void Iz(pD, zD)) : (sz || (sz = !0, RD.lostToPadScreen(), Rz()), void Uz(pD, zD))) : (pz || (gz(), pz = !0), void Az(pD, sD.move, zD))
            },
            onDeactivate: DD => {
              (0, fD.o)() && RD.lostToPadScreen(), Rz(DD)
            },
            onPeekFrame: zD => {
              (0, fD.o)() && (0, BD.f)(bD.j) && DD.hasPlayer() ? Az(zD, (0, iD.l)(zD, (0, UD.g)().swapSticks).move, performance.now(), !0) : Rz()
            }
          }),
          Gz = (0, bD.g)(DD),
          hz = (() => {
            const DD = sD.l.subscribe(TD.d, (DD => {
              !DD && (0, fD.o)() && "inGame" === pD.e.get("gameState") && sD.l.KG("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              sD.l.unsubscribe(DD)
            }
          })();
        return () => {
          Rz(), DD.uninstall(), (0, ND.e)(!1), (0, kD.e)(!1), sD.l.unsubscribe(OD), sD.l.unsubscribe(qD), Bz(), Gz(), hz(), tD.uninstall()
        }
      }
  },
  40487: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => ID,
      g: () => GD,
      j: () => fD
    });
    var pD = wD(1299),
      sD = wD(4295),
      KD = wD(8803),
      rD = wD(36884),
      LD = wD(1727),
      cD = wD(1191),
      gD = wD(8237),
      RD = wD(8723),
      AD = wD(8824);
    const UD = {
        emoteWheel: KD.f,
        quickChatWheel: RD.e,
        actionWheel: AD.p
      },
      fD = Object.keys(UD),
      ID = "dead",
      BD = DD => (0, pD.k)().includes(DD),
      GD = DD => {
        const zD = [(0, gD.j)(ID, (() => DD.hasPlayer() && DD.isPlayerDead())), (0, gD.j)("sleeping", (() => BD(rD.d))), (0, gD.j)("turnstile", (() => BD(cD.e))), (0, gD.j)("videoAd", LD.e), (0, gD.j)("replay", (() => (0, sD.f)() || DD.isReplayMode())), (0, gD.j)("freeCamera", (() => DD.isFreeCameraOn())), ...Object.entries(UD).map((DD => {
          let [zD, wD] = DD;
          return (0, gD.j)(zD, wD)
        }))];
        return () => {
          for (const DD of zD) DD()
        }
      }
  },
  40483: (DD, zD, wD) => {
    wD.d(zD, {
      A: () => AD,
      e: () => sD,
      i: () => cD,
      l: () => LD,
      o: () => RD,
      r: () => rD,
      t: () => KD,
      w: () => gD
    });
    var pD = wD(8184);
    class sD {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(DD, zD, wD) {
        const sD = (0, pD.i)(DD, zD.lookDeadzone);
        if (Math.hypot(sD.x, sD.y) < .9 || Math.abs(sD.x) < Math.abs(sD.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = wD);
        const KD = (rD = zD.lookSensitivityX, Math.min(1, 100 / rD));
        var rD;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (wD - this.fullTiltSinceMs - 250 * KD) / (200 * KD)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const KD = (DD, zD, wD, sD, KD) => {
        let rD = 1;
        return "boost" === wD.lookCurve ? rD = DD.update(zD, wD, KD) : DD.reset(),
          function(DD, zD) {
            let {
              yawBoost: wD = 1,
              aiming: sD = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const KD = (0, pD.g)((0, pD.i)(DD, zD.lookDeadzone), zD.lookCurve),
              rD = 220 * Math.PI / 180,
              LD = sD ? zD.aimLookSensitivity / 100 : 1,
              cD = zD.lookSensitivityX / 100 * LD,
              gD = zD.lookSensitivityY / 100 * LD;
            return {
              yawRadPerSec: KD.x * rD * cD * wD * (zD.invertLookX ? -1 : 1),
              pitchRadPerSec: KD.y * rD * .7 * gD * (zD.invertLookY ? -1 : 1)
            }
          }(zD, wD, {
            yawBoost: rD,
            aiming: sD
          })
      },
      rD = (DD, zD) => {
        const wD = Math.max(0, Math.min(250, zD)) / 1e3;
        return {
          aT: DD.yawRadPerSec * wD,
          qT: DD.pitchRadPerSec * wD
        }
      },
      LD = (DD, zD) => zD ? {
        move: DD.rightStick,
        look: DD.leftStick
      } : {
        move: DD.leftStick,
        look: DD.rightStick
      },
      cD = (DD, zD) => {
        const wD = (0, pD.i)(DD, zD),
          sD = Math.min(1, Math.hypot(wD.x, wD.y));
        return {
          magnitude: sD,
          speed: Math.min(1, sD / .8),
          headingOffset: 0 === sD ? 0 : Math.atan2(wD.x, -wD.y),
          x: wD.x,
          y: wD.y
        }
      },
      gD = (DD, zD) => {
        let {
          sprintPressed: wD,
          magnitude: pD,
          autoSprint: sD,
          nowMs: KD
        } = zD;
        const rD = wD ? KD : DD.latchedAtMs,
          LD = (DD => {
            let {
              running: zD,
              magnitude: wD,
              sprintPressed: pD,
              autoSprint: sD
            } = DD;
            return !(wD < .5) && (!!pD || !!(sD && wD >= .9) || zD)
          })({
            running: DD.running,
            magnitude: pD,
            sprintPressed: KD - rD <= 1e3,
            autoSprint: sD
          });
        return {
          running: LD,
          latchedAtMs: LD ? -1 / 0 : rD
        }
      },
      RD = (DD, zD, wD) => wD && DD.gyroAiming && "button" === DD.gyroActivation && DD.gyroButton !== zD ? DD.gyroButton : null,
      AD = (DD, zD) => zD ? {
        ...DD,
        isHeld: wD => wD !== zD && DD.isHeld(wD),
        wasPressed: wD => wD !== zD && DD.wasPressed(wD),
        wasReleased: wD => wD !== zD && DD.wasReleased(wD),
        value: wD => wD === zD ? 0 : DD.value(wD)
      } : DD
  },
  40499: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => sD,
      e: () => pD
    });
    const pD = DD => {
      let {
        mode: zD,
        sneakHeld: wD,
        sneakPressed: pD,
        sneakTogglePressed: sD,
        descending: KD,
        canCrouch: rD,
        toggled: LD
      } = DD;
      return rD ? KD ? {
        crouchHeld: wD,
        toggled: !1
      } : "hold" === zD ? {
        crouchHeld: wD,
        toggled: sD ? !LD : LD
      } : {
        crouchHeld: !1,
        toggled: pD || sD ? !LD : LD
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class sD {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(DD, zD) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = zD, this.graceEndsMs = zD + 500);
        const wD = zD < this.graceEndsMs;
        return wD && (DD.sneakPressed || DD.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, zD + 300))), DD.sneakHeld ? wD && DD.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: DD.sneakHeld && !this.ignoringHeld,
          sneakPressed: DD.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: DD.sneakTogglePressed && !wD
        }
      }
    }
  },
  40468: (DD, zD, wD) => {
    wD(8855)
  },
  40477: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => MD
    });
    var pD = wD(25),
      sD = wD(8803),
      KD = wD(8810),
      rD = wD(8196),
      LD = wD(8226),
      cD = wD(8208),
      gD = wD(40483),
      RD = wD(40487),
      AD = wD(8237),
      UD = wD(8184),
      fD = wD(8723),
      ID = wD(8824);
    const BD = [{
        isOpen: sD.j,
        openButton: () => (0, rD.g)("emoteWheel"),
        aim: DD => {
          pD.l.KG("emoteWheelPadAim", DD)
        },
        commit: DD => {
          pD.l.KG("requestEmoteWheelPadCommit", DD)
        },
        close: () => {
          pD.l.KG("requestEmoteWheelClose")
        }
      }, {
        isOpen: fD.e,
        openButton: () => (0, rD.g)("chat"),
        aim: DD => {
          pD.l.KG(fD.g, DD)
        },
        commit: DD => {
          pD.l.KG(fD.i, DD)
        },
        close: () => {
          pD.l.KG(fD.h)
        },
        keptOpenBy: [RD.c]
      }, {
        isOpen: ID.p,
        openButton: () => (0, rD.g)("actionButton"),
        aim: DD => {
          pD.l.KG(ID.b, DD)
        },
        commit: DD => {
          pD.l.KG(ID.i, DD)
        },
        close: () => {
          pD.l.KG(ID.f)
        }
      }],
      GD = () => {
        var DD;
        return null !== (DD = BD.find((DD => DD.isOpen()))) && void 0 !== DD ? DD : null
      },
      hD = DD => (0, rD.O)(DD.openButton()),
      nD = (DD, zD) => !(0, UD.D)(DD.frame.values, zD),
      MD = () => {
        let DD = null,
          zD = !1,
          wD = !1;
        return LD.e.register({
          name: "wheel",
          isActive: () => null !== GD(),
          peek: () => {
            const DD = GD();
            return DD && hD(DD) ? null : {
              over: "gameplay",
              stick: (0, cD.g)().swapSticks ? "right" : "left"
            }
          },
          onFrame: pD => {
            var sD;
            const UD = GD();
            if (!UD) return;
            if (null !== (0, AD.d)([...RD.j, ...null !== (sD = UD.keptOpenBy) && void 0 !== sD ? sD : []])) return void UD.close();
            const fD = UD.openButton(),
              ID = (0, gD.l)(pD.frame, (0, cD.g)().swapSticks),
              BD = hD(UD) ? ID.move : ID.look;
            DD !== UD ? (DD = UD, zD = !nD(pD, fD) || Math.hypot(BD.x, BD.y) >= KD.y, wD = !1) : wD && (wD = !1, nD(pD, fD) && (zD = !1)), UD.aim(BD);
            const MD = (0, rD.g)("menuConfirm"),
              OD = (0, rD.g)("menuBack");
            return pD.wasPressed(OD) ? (LD.e.consumeButton(OD), void UD.close()) : pD.wasPressed(MD) || pD.wasPressed(fD) ? (LD.e.consumeButton(MD), LD.e.consumeButton(fD), void UD.commit(!1)) : void(zD && nD(pD, fD) && (zD = !1, UD.commit(!0)))
          },
          onDeactivate: () => {
            wD = null !== DD && GD() === DD, wD || (DD = null, zD = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);