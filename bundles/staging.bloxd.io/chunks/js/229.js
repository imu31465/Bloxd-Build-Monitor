export const id = 229;
export const ids = [229];
export const modules = {
  37274: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => oG,
      i: () => EG
    });
    var wG = ZG(4272),
      SG = ZG(1389),
      LG = ZG(51),
      yG = ZG(6488),
      kG = ZG(4261),
      UG = ZG(1251),
      YG = ZG(1895),
      VG = ZG(1876),
      pG = ZG(1393),
      fG = ZG(1151),
      QG = ZG(37283),
      KG = ZG(1006),
      hG = ZG.n(KG),
      dG = ZG(1275),
      JG = ZG(1016),
      rG = ZG(1239),
      zG = ZG(1067);
    const EG = "SleepingOverlay";

    function oG() {
      const {
        t: GG
      } = (0, fG.w)(), [bG, ZG] = (0, LG.useState)(!1), [KG, oG] = (0, LG.useState)(null), [uG, iG] = (0, LG.useState)(1), [CG, WG] = (0, LG.useState)(!1), [mG, IG] = (0, LG.useState)(!1), FG = (0, LG.useRef)(0), vG = (0, LG.useRef)(!1), aG = (0, LG.useRef)(!1), cG = (0, LG.useRef)(), lG = (0, LG.useRef)(null);

      function jG() {
        const GG = null !== KG && void 0 !== KG ? KG : "Rested Speed";
        YG.gameBridge.send("wakeUp", mG ? GG : null), lG.current = null, ZG(!1), oG(null), iG(1), WG(!1), IG(!1)
      }

      function PG() {
        return !CG && (jG(), !0)
      }
      return (0, SG.g)("PlayerPhysicsTypeUpdate", (GG => {
        GG !== lG.current && (lG.current = GG, GG === yG.q.SLEEPING ? (aG.current || (FG.current = YG.gameBridge.lookup("cameraZoom", null), aG.current = !0), vG.current = !0, YG.gameBridge.send("setCameraZoom", 3), ZG(!0), iG(function() {
          for (const GG of YG.gameBridge.lookup("blocksStandingOn", null)) {
            if (QG.c.leafBeds.includes(GG)) return console.log(`Found leaf bed: ${GG}`), 1;
            if (QG.c.woolBeds.includes(GG)) return console.log(`Found woold bed: ${GG}`), 2;
            if (QG.c.strongBeds.includes(GG)) return console.log(`Found strong bed ${GG}`), 3
          }
          return 1
        }())) : (aG.current = !1, ZG(!1), oG(null), iG(1)))
      })), (0, LG.useEffect)((() => () => {
        (0, UG.w)(EG)
      }), []), (0, LG.useEffect)((() => {
        bG ? (0, UG.z)(EG) : ((0, UG.w)(EG), vG.current && (YG.gameBridge.send("setCameraZoom", FG.current), vG.current = !1))
      }), [bG]), (0, rG.w)("overlay", cG, PG, bG), (0, zG.jsx)(wG.e, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: bG,
        timeout: 300,
        nodeRef: cG,
        unmountOnExit: !0,
        children: (0, zG.jsx)("div", {
          ref: cG,
          onClick: GG => {
            PG() && GG.stopPropagation()
          },
          children: (0, zG.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, zG.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: kG.h.map((bG => (0, zG.jsxs)(XG, {
                restedEffect: bG,
                WU: KG,
                setChosenRestedEffect: oG,
                children: [(0, zG.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, zG.jsx)(VG.c, {
                    text: [{
                      icon: bG
                    }]
                  }), kG.g[bG].shortName]
                }), (0, zG.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: GG(kG.g[bG].description, {
                    time: kG.g[bG].effectLevelDurations[uG] / 6e4
                  })
                })]
              }, bG)))
            }), (0, zG.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, zG.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, zG.jsxs)(pG.d, {
                className: "SleepingOverlayWakeUpButton",
                onClick: GG => {
                  mG ? jG() : (WG(!0), (0, dG.bb)((() => {
                    WG(!1), IG(!0)
                  }), !0)), GG.stopPropagation()
                },
                loading: CG,
                children: [!mG && (0, zG.jsxs)(zG.Fragment, {
                  children: [(0, zG.jsx)(JG.c, {
                    name: "film"
                  }), " ", GG("classicGame:watchAdToGetRestedPerk")]
                }), mG && GG("classicGame:wakeUp")]
              }), (0, zG.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, zG.jsx)("div", {
                  className: hG()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === uG
                  }),
                  children: (0, zG.jsx)(VG.c, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, zG.jsx)("div", {
                  className: hG()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === uG
                  }),
                  children: (0, zG.jsx)(VG.c, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, zG.jsx)("div", {
                  className: hG()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === uG
                  }),
                  children: (0, zG.jsx)(VG.c, {
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
    const XG = (0, LG.memo)((function(GG) {
      let {
        children: bG,
        restedEffect: ZG,
        WU: wG,
        setChosenRestedEffect: SG
      } = GG;
      return ZG === wG ? (0, zG.jsx)(pG.k, {
        onClick: GG => {
          GG.stopPropagation()
        },
        children: bG
      }) : (0, zG.jsx)(pG.h, {
        onClick: GG => {
          SG(ZG), GG.stopPropagation()
        },
        children: bG
      })
    }))
  },
  40947: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => NG
    });
    var wG = ZG(17),
      SG = ZG(19),
      LG = ZG(4293),
      yG = ZG(333),
      kG = ZG(1579),
      UG = ZG(8214),
      YG = ZG(4298),
      VG = ZG(8740),
      pG = ZG(8248),
      fG = ZG(8222),
      QG = ZG(8250),
      KG = ZG(1343),
      hG = ZG(1626),
      dG = ZG(8254),
      JG = ZG(8707),
      rG = ZG(8849),
      zG = ZG(8750),
      EG = ZG(8854),
      oG = ZG(1895),
      XG = ZG(8205),
      uG = ZG(8784),
      iG = ZG(8776),
      CG = ZG(8742);
    class WG {
      constructor() {
        this.lostAtMs = null
      }
      update(GG, bG) {
        return GG ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= bG, bG - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class mG {
      constructor(GG, bG) {
        this.press = GG, this.release = bG, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(GG, bG, ZG, wG) {
        if (GG && null === this.downAtMs) return this.downAtMs = ZG, this.latched = wG, void(this.token = this.press(wG));
        null !== this.downAtMs && (this.latched ? GG && this.end() : !bG && ZG - this.downAtMs >= 40 && this.end())
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
        const GG = this.token;
        this.downAtMs = null, this.token = null, this.latched = !1, this.release(GG)
      }
    }
    const IG = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      FG = GG => {
        let bG = null;
        const ZG = new CG.c,
          wG = () => {
            bG && (((GG, bG, ZG) => {
              switch (ZG.kind) {
                case "reload":
                  return void bG.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void bG.specialActionUp(ZG.action);
                case "customButton":
                  return void oG.gameBridge.send("pressCustomButton", {
                    id: ZG.id,
                    down: !1
                  });
                case "touchButton":
                  GG.pressTouchButton(!1)
              }
            })(GG, bG.bodies, bG.action), bG = null)
          },
          LG = (ZG, SG, LG, yG) => {
            wG(), bG = {
              action: SG,
              bodies: ZG,
              heldBy: LG,
              atMs: yG
            }, ((GG, bG, ZG) => {
              switch (ZG.kind) {
                case "reload":
                  return bG.reloadGun(), void bG.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void bG.specialActionDown(ZG.action);
                case "customButton":
                  return void oG.gameBridge.send("pressCustomButton", {
                    id: ZG.id,
                    down: !0
                  });
                case "touchButton":
                  GG.pressTouchButton(!0)
              }
            })(GG, ZG, SG)
          };
        return {
          update: (yG, kG, YG, VG) => {
            var fG;
            const QG = (0, uG.k)(GG.contextActionInputs()),
              KG = null !== (fG = QG[0]) && void 0 !== fG ? fG : IG;
            (0, iG.e)((0, uG.i)(KG) ? KG : null);
            const hG = (0, uG.e)(QG);
            (0, iG.f)(hG);
            const dG = (0, UG.j)("actionButton");
            if (hG) {
              const GG = ZG.update(kG.wasPressed(dG), kG.isHeld(dG), YG, VG);
              "tap" === GG ? LG(yG, KG, [dG], YG) : "hold" === GG && (pG.b.consumeButton(dG), SG.l.xh(EG.g, QG))
            } else ZG.release(), kG.wasPressed(dG) && LG(yG, KG, [dG], YG);
            bG && YG - bG.atMs >= 40 && !bG.heldBy.some((GG => (0, XG.F)(kG.frame.values, GG))) && wG()
          },
          pressPicked: (GG, bG) => {
            LG(GG, bG, [(0, UG.j)("menuConfirm"), (0, UG.j)("actionButton")], performance.now())
          },
          release: () => {
            ZG.release(), wG(), (0, iG.e)(null), (0, iG.f)(!1)
          }
        }
      };
    var vG = ZG(8202);
    var aG = ZG(40942),
      cG = ZG(8800),
      lG = ZG(8241),
      jG = ZG(8882);
    var PG = ZG(40935),
      MG = ZG(8889),
      AG = ZG(40950),
      sG = ZG(8866),
      qG = ZG(8809),
      nG = ZG(8816),
      gG = ZG(8823),
      eG = ZG(8710),
      RG = ZG(8764);
    const TG = () => eG.e[(0, fG.i)().tapHoldTime].wheelMs,
      HG = () => ((0, VG.e)(), (0, RG.c)("controllerMenuKey")),
      tG = (GG, bG, ZG) => new mG((ZG => {
        const wG = GG.bodies();
        return {
          bodies: wG,
          press: bG(wG, ZG)
        }
      }), (GG => {
        let {
          bodies: bG,
          press: wG
        } = GG;
        ZG(bG, wG)
      })),
      DG = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      NG = GG => {
        const bG = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let ZG = DG;
        const VG = new AG.d,
          oG = SG.l.subscribe("appManagerUpdated|activeInputDevice", (bG => {
            GG.deviceChanged(bG)
          }));
        let uG = null,
          iG = 0;
        const mG = () => {
          uG = null, (0, qG.d)(null)
        };
        let IG = !1;
        const RG = new WG,
          NG = GG.look,
          OG = new CG.c,
          xG = new CG.c,
          BG = FG(GG),
          Gb = SG.l.subscribe(EG.j, (bG => {
            BG.pressPicked(GG.bodies(), bG)
          })),
          bb = tG(GG, ((GG, bG) => GG.primaryFireDown(!bG)), ((GG, bG) => {
            GG.primaryFireUp(bG)
          })),
          Zb = tG(GG, (GG => GG.altFireDown()), ((GG, bG) => {
            GG.altFireUp(bG)
          }));
        let wb = !1,
          Sb = !1,
          Lb = !1;
        const yb = (0, JG.d)(XG.Y),
          kb = (0, JG.d)(XG.Y),
          Ub = new CG.c;
        let Yb = !1;
        const Vb = () => {
            yb.reset(), kb.reset(), Ub.release(), (0, gG.f)(!1), NG.release(), bb.cancel(), (0, nG.f)(!1), Zb.cancel(), BG.release(), OG.release(), xG.release(), mG()
          },
          pb = function() {
            let wG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            Vb(), Sb = !1, wG || (wb = !1, ZG = DG, Object.assign(bG, {
              x: 0,
              y: 0,
              magnitude: 0,
              headingOffset: 0,
              jumpHeld: !1,
              jumpPressed: !1,
              running: !1,
              sprintHeld: !1
            }), GG.stopMoving())
          };
        let fb = !1;
        const Qb = function(wG, SG, LG) {
            let yG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (!(0, KG.i)()) return void(fb || (fb = !0, wb = !1, GG.stopMoving()));
            fb = !1;
            const kG = (0, fG.i)(),
              YG = (0, PG.i)(SG, kG.moveDeadzone),
              pG = (0, UG.j)("sprint");
            ZG = (0, PG.u)(ZG, {
              sprintPressed: wG.wasPressed(pG),
              magnitude: YG.magnitude,
              autoSprint: kG.autoSprint,
              nowMs: LG
            }), bG.running = ZG.running, bG.sprintHeld = wG.isHeld(pG), bG.x = YG.x, bG.y = YG.y, bG.magnitude = YG.speed, bG.headingOffset = YG.headingOffset, wb = YG.magnitude > 0;
            const QG = (0, UG.j)("jump");
            if (bG.jumpHeld = wG.isHeld(QG), bG.jumpPressed = wG.wasPressed(QG), bG.jumpPressed && GG.bodies().jumpDown(), yG) return void GG.move(bG, null);
            const hG = (0, UG.j)("sneak"),
              dG = VG.filter({
                sneakHeld: wG.isHeld(hG),
                sneakPressed: wG.wasPressed(hG),
                sneakTogglePressed: wG.wasPressed((0, UG.j)("sneakToggle"))
              }, LG);
            GG.move(bG, {
              ...dG,
              mode: kG.sneakMode
            })
          },
          Kb = (GG, bG) => {
            const ZG = (0, UG.j)("chat");
            if ("off" === (0, fG.i)().quickChat) return void(GG.wasPressed(ZG) && (pG.b.consumeButton(ZG), SG.l.xh(cG.d)));
            const wG = OG.update(GG.wasPressed(ZG), GG.isHeld(ZG), bG, TG());
            "tap" === wG || "hold" === wG && null === (0, hG.b)() ? SG.l.xh(cG.d) : "hold" === wG && (pG.b.consumeButton(ZG), SG.l.xh(zG.l))
          },
          hb = (bG, ZG) => {
            ((GG, bG) => {
              const ZG = (0, rG.c)(),
                wG = (0, UG.j)("emoteWheel");
              if ("wheel" === (0, fG.i)().emoteButton) return GG.wasPressed(wG) && (pG.b.consumeButton(wG), SG.l.xh("requestEmoteWheelPadOpen", !0)), (0, rG.c)() !== ZG;
              const LG = xG.update(GG.wasPressed(wG), GG.isHeld(wG), bG, TG());
              return "tap" === LG ? SG.l.xh("requestEmoteRepeatLast") : "hold" === LG && (pG.b.consumeButton(wG), SG.l.xh("requestEmoteWheelPadOpen", !1)), (0, rG.c)() !== ZG
            })(bG, ZG) || Kb(bG, ZG), bG.wasPressed((0, UG.j)("inventory")) && (pG.b.consumeButton((0, UG.j)("inventory")), (0, kG.z)(HG(), "inventory", GG.hasFullInventory())), bG.wasPressed((0, UG.j)("pause")) && (pG.b.consumeButton((0, UG.j)("pause")), (0, YG.e)() === yG.u.SOCIAL ? (0, kG.x)(HG(), yG.u.SOCIAL) : (0, kG.k)(HG())), bG.wasPressed((0, UG.j)("leaderboard")) && !(0, LG.e)() && (pG.b.consumeButton((0, UG.j)("leaderboard")), ((GG, bG) => {
              if ("shop" === (0, lG.c)()) return SG.l.xh(jG.m), void(0, kG.x)(GG, yG.u.SHOP, !0);
              (0, kG.x)(GG, yG.u.LOBBY_LEADERBOARD, bG)
            })(HG(), GG.hasLobbyTab()))
          },
          db = (bG, ZG) => {
            const wG = GG.bodies();
            ((bG, ZG) => {
              const wG = (0, UG.j)("attack"),
                SG = bG.wasPressed(wG);
              SG && !bb.isLatched() && (IG = GG.targetsBlock()), bb.update(SG, bG.isHeld(wG), ZG, "toggle" === (0, fG.i)().attackMode), bb.isLatched() && IG ? RG.update(GG.targetsBlock(), ZG) && bb.unlatch() : RG.reset(), (0, nG.f)(bb.isLatched())
            })(bG, ZG), Zb.update(bG.wasPressed((0, UG.j)("use")), bG.isHeld((0, UG.j)("use")), ZG, !1), yb.update(bG.isHeld((0, UG.j)("hotbarPrevious")), ZG) && GG.scrollHotbar(-1), kb.update(bG.isHeld((0, UG.j)("hotbarNext")), ZG) && GG.scrollHotbar(1), ((bG, ZG, wG) => {
              const SG = (0, UG.j)("perspective"),
                LG = (0, UG.j)("pickBlock"),
                yG = GG.pickBlockAllowed();
              (0, gG.f)(yG && !Yb && GG.targetsBlock());
              const kG = () => {
                ZG.pickBlock() && (Yb = !0, (0, gG.f)(!1))
              };
              if (!yG || LG !== SG) return Ub.release(), bG.wasPressed(SG) && ZG.swapCameraZoom(), void(yG && bG.wasPressed(LG) && kG());
              const YG = Ub.update(bG.wasPressed(LG), bG.isHeld(LG), wG, TG());
              "tap" === YG ? kG() : "hold" === YG && ZG.swapCameraZoom()
            })(bG, wG, ZG), ((bG, ZG, wG) => {
              const SG = (0, UG.j)("drop");
              if (bG.wasPressed(SG)) {
                ZG.dropItem(!1);
                const GG = (0, fG.i)();
                "off" !== GG.buttonRepeat && (uG = wG, iG = eG.e[GG.tapHoldTime].dropStackMs, (0, qG.d)(iG))
              }
              null !== uG && (!bG.isHeld(SG) || GG.selectedSlotEmpty() ? mG() : wG - uG >= iG && (mG(), ZG.dropItem(!0)))
            })(bG, wG, ZG), BG.update(wG, bG, ZG, TG()), hb(bG, ZG)
          },
          Jb = pG.b.register({
            name: "gameplay",
            isActive: () => {
              const bG = wb && "keyboardMouse" === wG.e.get("activeInputDevice") && !(0, QG.H)(),
                ZG = (0, QG.l)() ? [aG.e] : [];
              return ((0, QG.l)() || bG) && (0, dG.e)(ZG) && GG.hasPlayer()
            },
            onFrame: GG => {
              const bG = performance.now(),
                ZG = (0, fG.i)(),
                wG = (0, PG.v)(GG, (0, PG.o)(ZG, (0, UG.j)("pause"), (0, MG.b)().isSupported())),
                SG = (0, PG.l)(wG, ZG.swapSticks);
              return (0, QG.l)() ? (Sb = !1, (0, dG.e)() ? (Lb = !1, NG.update(SG.look, ZG, wG.isHeld((0, UG.j)("use"))), Qb(wG, SG.move, bG), void db(wG, bG)) : (Lb || (Lb = !0, VG.lostToPadScreen(), pb()), void Kb(wG, bG))) : (Sb || (Vb(), Sb = !0), void Qb(wG, SG.move, bG))
            },
            onDeactivate: GG => {
              (0, QG.l)() && VG.lostToPadScreen(), pb(GG)
            },
            onPeekFrame: bG => {
              (0, QG.l)() && (0, dG.e)(aG.i) && GG.hasPlayer() ? Qb(bG, (0, PG.l)(bG, (0, fG.i)().swapSticks).move, performance.now(), !0) : pb()
            }
          }),
          rb = (0, aG.f)(GG),
          zb = (() => {
            const GG = SG.l.subscribe(vG.c, (GG => {
              !GG && (0, QG.l)() && "inGame" === wG.e.get("gameState") && SG.l.xh("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              SG.l.unsubscribe(GG)
            }
          })();
        return () => {
          pb(), GG.uninstall(), (0, sG.f)(!1), (0, gG.f)(!1), SG.l.unsubscribe(oG), SG.l.unsubscribe(Gb), Jb(), rb(), zb(), NG.uninstall()
        }
      }
  },
  40942: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => KG,
      f: () => dG,
      i: () => QG
    });
    var wG = ZG(1251),
      SG = ZG(4293),
      LG = ZG(8837),
      yG = ZG(37274),
      kG = ZG(1682),
      UG = ZG(1148),
      YG = ZG(8254),
      VG = ZG(8750),
      pG = ZG(8854);
    const fG = {
        emoteWheel: LG.g,
        quickChatWheel: VG.c,
        actionWheel: pG.m
      },
      QG = Object.keys(fG),
      KG = "dead",
      hG = GG => (0, wG.t)().includes(GG),
      dG = GG => {
        const bG = [(0, YG.j)(KG, (() => GG.hasPlayer() && GG.isPlayerDead())), (0, YG.j)("sleeping", (() => hG(yG.i))), (0, YG.j)("turnstile", (() => hG(UG.f))), (0, YG.j)("videoAd", kG.g), (0, YG.j)("replay", (() => (0, SG.e)() || GG.isReplayMode())), (0, YG.j)("freeCamera", (() => GG.isFreeCameraOn())), ...Object.entries(fG).map((GG => {
          let [bG, ZG] = GG;
          return (0, YG.j)(bG, ZG)
        }))];
        return () => {
          for (const GG of bG) GG()
        }
      }
  },
  40935: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => SG,
      i: () => UG,
      l: () => kG,
      o: () => VG,
      s: () => yG,
      t: () => LG,
      u: () => YG,
      v: () => pG
    });
    var wG = ZG(8205);
    class SG {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(GG, bG, ZG) {
        const SG = (0, wG.i)(GG, bG.lookDeadzone);
        if (Math.hypot(SG.x, SG.y) < .9 || Math.abs(SG.x) < Math.abs(SG.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = ZG);
        const LG = (yG = bG.lookSensitivityX, Math.min(1, 100 / yG));
        var yG;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (ZG - this.fullTiltSinceMs - 250 * LG) / (200 * LG)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const LG = (GG, bG, ZG, SG, LG) => {
        let yG = 1;
        return "boost" === ZG.lookCurve ? yG = GG.update(bG, ZG, LG) : GG.reset(),
          function(GG, bG) {
            let {
              yawBoost: ZG = 1,
              aiming: SG = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const LG = (0, wG.g)((0, wG.i)(GG, bG.lookDeadzone), bG.lookCurve),
              yG = 220 * Math.PI / 180,
              kG = SG ? bG.aimLookSensitivity / 100 : 1,
              UG = bG.lookSensitivityX / 100 * kG,
              YG = bG.lookSensitivityY / 100 * kG;
            return {
              yawRadPerSec: LG.x * yG * UG * ZG * (bG.invertLookX ? -1 : 1),
              pitchRadPerSec: LG.y * yG * .7 * YG * (bG.invertLookY ? -1 : 1)
            }
          }(bG, ZG, {
            yawBoost: yG,
            aiming: SG
          })
      },
      yG = (GG, bG) => {
        const ZG = Math.max(0, Math.min(250, bG)) / 1e3;
        return {
          SF: GG.yawRadPerSec * ZG,
          kF: GG.pitchRadPerSec * ZG
        }
      },
      kG = (GG, bG) => bG ? {
        move: GG.rightStick,
        look: GG.leftStick
      } : {
        move: GG.leftStick,
        look: GG.rightStick
      },
      UG = (GG, bG) => {
        const ZG = (0, wG.i)(GG, bG),
          SG = Math.min(1, Math.hypot(ZG.x, ZG.y));
        return {
          magnitude: SG,
          speed: Math.min(1, SG / .8),
          headingOffset: 0 === SG ? 0 : Math.atan2(ZG.x, -ZG.y),
          x: ZG.x,
          y: ZG.y
        }
      },
      YG = (GG, bG) => {
        let {
          sprintPressed: ZG,
          magnitude: wG,
          autoSprint: SG,
          nowMs: LG
        } = bG;
        const yG = ZG ? LG : GG.latchedAtMs,
          kG = (GG => {
            let {
              running: bG,
              magnitude: ZG,
              sprintPressed: wG,
              autoSprint: SG
            } = GG;
            return !(ZG < .5) && (!!wG || !!(SG && ZG >= .9) || bG)
          })({
            running: GG.running,
            magnitude: wG,
            sprintPressed: LG - yG <= 1e3,
            autoSprint: SG
          });
        return {
          running: kG,
          latchedAtMs: kG ? -1 / 0 : yG
        }
      },
      VG = (GG, bG, ZG) => ZG && GG.gyroAiming && "button" === GG.gyroActivation && GG.gyroButton !== bG ? GG.gyroButton : null,
      pG = (GG, bG) => bG ? {
        ...GG,
        isHeld: ZG => ZG !== bG && GG.isHeld(ZG),
        wasPressed: ZG => ZG !== bG && GG.wasPressed(ZG),
        wasReleased: ZG => ZG !== bG && GG.wasReleased(ZG),
        value: ZG => ZG === bG ? 0 : GG.value(ZG)
      } : GG
  },
  40950: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => SG,
      e: () => wG
    });
    const wG = GG => {
      let {
        mode: bG,
        sneakHeld: ZG,
        sneakPressed: wG,
        sneakTogglePressed: SG,
        descending: LG,
        canCrouch: yG,
        toggled: kG
      } = GG;
      return yG ? LG ? {
        crouchHeld: ZG,
        toggled: !1
      } : "hold" === bG ? {
        crouchHeld: ZG,
        toggled: SG ? !kG : kG
      } : {
        crouchHeld: !1,
        toggled: wG || SG ? !kG : kG
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class SG {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(GG, bG) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = bG, this.graceEndsMs = bG + 500);
        const ZG = bG < this.graceEndsMs;
        return ZG && (GG.sneakPressed || GG.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, bG + 300))), GG.sneakHeld ? ZG && GG.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: GG.sneakHeld && !this.ignoringHeld,
          sneakPressed: GG.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: GG.sneakTogglePressed && !ZG
        }
      }
    }
  },
  40929: (GG, bG, ZG) => {
    ZG(8889)
  },
  40932: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => zG
    });
    var wG = ZG(19),
      SG = ZG(8837),
      LG = ZG(8842),
      yG = ZG(8214),
      kG = ZG(8248),
      UG = ZG(8222),
      YG = ZG(40935),
      VG = ZG(40942),
      pG = ZG(8254),
      fG = ZG(8205),
      QG = ZG(8750),
      KG = ZG(8854);
    const hG = [{
        isOpen: SG.k,
        openButton: () => (0, yG.j)("emoteWheel"),
        aim: GG => {
          wG.l.xh("emoteWheelPadAim", GG)
        },
        commit: GG => {
          wG.l.xh("requestEmoteWheelPadCommit", GG)
        },
        close: () => {
          wG.l.xh("requestEmoteWheelClose")
        }
      }, {
        isOpen: QG.c,
        openButton: () => (0, yG.j)("chat"),
        aim: GG => {
          wG.l.xh(QG.f, GG)
        },
        commit: GG => {
          wG.l.xh(QG.j, GG)
        },
        close: () => {
          wG.l.xh(QG.i)
        },
        keptOpenBy: [VG.e]
      }, {
        isOpen: KG.m,
        openButton: () => (0, yG.j)("actionButton"),
        aim: GG => {
          wG.l.xh(KG.b, GG)
        },
        commit: GG => {
          wG.l.xh(KG.e, GG)
        },
        close: () => {
          wG.l.xh(KG.c)
        }
      }],
      dG = () => {
        var GG;
        return null !== (GG = hG.find((GG => GG.isOpen()))) && void 0 !== GG ? GG : null
      },
      JG = GG => (0, yG.N)(GG.openButton()),
      rG = (GG, bG) => !(0, fG.F)(GG.frame.values, bG),
      zG = () => {
        let GG = null,
          bG = !1,
          ZG = !1;
        return kG.b.register({
          name: "wheel",
          isActive: () => null !== dG(),
          peek: () => {
            const GG = dG();
            return GG && JG(GG) ? null : {
              over: "gameplay",
              stick: (0, UG.i)().swapSticks ? "right" : "left"
            }
          },
          onFrame: wG => {
            var SG;
            const fG = dG();
            if (!fG) return;
            if (null !== (0, pG.c)([...VG.i, ...null !== (SG = fG.keptOpenBy) && void 0 !== SG ? SG : []])) return void fG.close();
            const QG = fG.openButton(),
              KG = (0, YG.l)(wG.frame, (0, UG.i)().swapSticks),
              hG = JG(fG) ? KG.move : KG.look;
            GG !== fG ? (GG = fG, bG = !rG(wG, QG) || Math.hypot(hG.x, hG.y) >= LG.C, ZG = !1) : ZG && (ZG = !1, rG(wG, QG) && (bG = !1)), fG.aim(hG);
            const zG = (0, yG.j)("menuConfirm"),
              EG = (0, yG.j)("menuBack");
            return wG.wasPressed(EG) ? (kG.b.consumeButton(EG), void fG.close()) : wG.wasPressed(zG) || wG.wasPressed(QG) ? (kG.b.consumeButton(zG), kG.b.consumeButton(QG), void fG.commit(!1)) : void(bG && rG(wG, QG) && (bG = !1, fG.commit(!0)))
          },
          onDeactivate: () => {
            ZG = null !== GG && dG() === GG, ZG || (GG = null, bG = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);