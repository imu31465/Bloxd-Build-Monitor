export const id = 219;
export const ids = [219];
export const modules = {
  36974: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Qq,
      g: () => Pq
    });
    var Yq = gq(4111),
      lq = gq(1416),
      Oq = gq(57),
      mq = gq(6348),
      xq = gq(4098),
      Aq = gq(1274),
      cq = gq(1904),
      uq = gq(1876),
      Bq = gq(1422),
      Wq = gq(1183),
      Nq = gq(36979),
      aq = gq(1018),
      Vq = gq.n(aq),
      dq = gq(1298),
      jq = gq(1025),
      Hq = gq(1267),
      oq = gq(1070);
    const Pq = "SleepingOverlay";

    function Qq() {
      const {
        t: qq
      } = (0, Wq.v)(), [Eq, gq] = (0, Oq.useState)(!1), [aq, Qq] = (0, Oq.useState)(null), [tq, rq] = (0, Oq.useState)(1), [vq, hq] = (0, Oq.useState)(!1), [nq, bq] = (0, Oq.useState)(!1), iq = (0, Oq.useRef)(0), Zq = (0, Oq.useRef)(!1), fq = (0, Oq.useRef)(!1), Mq = (0, Oq.useRef)(), Tq = (0, Oq.useRef)(null);

      function zq() {
        const qq = null !== aq && void 0 !== aq ? aq : "Rested Speed";
        cq.gameBridge.send("wakeUp", nq ? qq : null), Tq.current = null, gq(!1), Qq(null), rq(1), hq(!1), bq(!1)
      }

      function Sq() {
        return !vq && (zq(), !0)
      }
      return (0, lq.f)("PlayerPhysicsTypeUpdate", (qq => {
        qq !== Tq.current && (Tq.current = qq, qq === mq.t.SLEEPING ? (fq.current || (iq.current = cq.gameBridge.lookup("cameraZoom", null), fq.current = !0), Zq.current = !0, cq.gameBridge.send("setCameraZoom", 3), gq(!0), rq(function() {
          for (const qq of cq.gameBridge.lookup("blocksStandingOn", null)) {
            if (Nq.e.leafBeds.includes(qq)) return console.log(`Found leaf bed: ${qq}`), 1;
            if (Nq.e.woolBeds.includes(qq)) return console.log(`Found woold bed: ${qq}`), 2;
            if (Nq.e.strongBeds.includes(qq)) return console.log(`Found strong bed ${qq}`), 3
          }
          return 1
        }())) : (fq.current = !1, gq(!1), Qq(null), rq(1)))
      })), (0, Oq.useEffect)((() => () => {
        (0, Aq.j)(Pq)
      }), []), (0, Oq.useEffect)((() => {
        Eq ? (0, Aq.m)(Pq) : ((0, Aq.j)(Pq), Zq.current && (cq.gameBridge.send("setCameraZoom", iq.current), Zq.current = !1))
      }), [Eq]), (0, Hq.w)("overlay", Mq, Sq, Eq), (0, oq.jsx)(Yq.c, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: Eq,
        timeout: 300,
        nodeRef: Mq,
        unmountOnExit: !0,
        children: (0, oq.jsx)("div", {
          ref: Mq,
          onClick: qq => {
            Sq() && qq.stopPropagation()
          },
          children: (0, oq.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, oq.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: xq.f.map((Eq => (0, oq.jsxs)(yq, {
                restedEffect: Eq,
                Bm: aq,
                setChosenRestedEffect: Qq,
                children: [(0, oq.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, oq.jsx)(uq.c, {
                    text: [{
                      icon: Eq
                    }]
                  }), xq.c[Eq].shortName]
                }), (0, oq.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: qq(xq.c[Eq].description, {
                    time: xq.c[Eq].effectLevelDurations[tq] / 6e4
                  })
                })]
              }, Eq)))
            }), (0, oq.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, oq.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, oq.jsxs)(Bq.g, {
                className: "SleepingOverlayWakeUpButton",
                onClick: qq => {
                  nq ? zq() : (hq(!0), (0, dq.kb)((() => {
                    hq(!1), bq(!0)
                  }), !0)), qq.stopPropagation()
                },
                loading: vq,
                children: [!nq && (0, oq.jsxs)(oq.Fragment, {
                  children: [(0, oq.jsx)(jq.d, {
                    name: "film"
                  }), " ", qq("classicGame:watchAdToGetRestedPerk")]
                }), nq && qq("classicGame:wakeUp")]
              }), (0, oq.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, oq.jsx)("div", {
                  className: Vq()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === tq
                  }),
                  children: (0, oq.jsx)(uq.c, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, oq.jsx)("div", {
                  className: Vq()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === tq
                  }),
                  children: (0, oq.jsx)(uq.c, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, oq.jsx)("div", {
                  className: Vq()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === tq
                  }),
                  children: (0, oq.jsx)(uq.c, {
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
    const yq = (0, Oq.memo)((function(qq) {
      let {
        children: Eq,
        restedEffect: gq,
        Bm: Yq,
        setChosenRestedEffect: lq
      } = qq;
      return gq === Yq ? (0, oq.jsx)(Bq.p, {
        onClick: qq => {
          qq.stopPropagation()
        },
        children: Eq
      }) : (0, oq.jsx)(Bq.i, {
        onClick: qq => {
          lq(gq), qq.stopPropagation()
        },
        children: Eq
      })
    }))
  },
  40309: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => wq
    });
    var Yq = gq(24),
      lq = gq(31),
      Oq = gq(4135),
      mq = gq(296),
      xq = gq(1622),
      Aq = gq(8073),
      cq = gq(4144),
      uq = gq(8646),
      Bq = gq(8118),
      Wq = gq(8090),
      Nq = gq(8120),
      aq = gq(1668),
      Vq = gq(8123),
      dq = gq(8594),
      jq = gq(8773),
      Hq = gq(8662),
      oq = gq(8780),
      Pq = gq(1904),
      Qq = gq(8061),
      yq = gq(8695),
      tq = gq(8686),
      rq = gq(8655);
    class vq {
      constructor() {
        this.lostAtMs = null
      }
      update(qq, Eq) {
        return qq ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= Eq, Eq - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class hq {
      constructor(qq, Eq) {
        this.press = qq, this.release = Eq, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(qq, Eq, gq, Yq) {
        if (qq && null === this.downAtMs) return this.downAtMs = gq, this.latched = Yq, void(this.token = this.press());
        null !== this.downAtMs && (this.latched ? qq && this.end() : !Eq && gq - this.downAtMs >= 40 && this.end())
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
        const qq = this.token;
        this.downAtMs = null, this.token = null, this.latched = !1, this.release(qq)
      }
    }
    const nq = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      bq = qq => {
        let Eq = null;
        const gq = new rq.d,
          Yq = () => {
            Eq && (((qq, Eq, gq) => {
              switch (gq.kind) {
                case "reload":
                  return void Eq.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void Eq.specialActionUp(gq.action);
                case "customButton":
                  return void Pq.gameBridge.send("pressCustomButton", {
                    id: gq.id,
                    down: !1
                  });
                case "touchButton":
                  qq.pressTouchButton(!1)
              }
            })(qq, Eq.bodies, Eq.action), Eq = null)
          },
          Oq = (gq, lq, Oq, mq) => {
            Yq(), Eq = {
              action: lq,
              bodies: gq,
              heldBy: Oq,
              atMs: mq
            }, ((qq, Eq, gq) => {
              switch (gq.kind) {
                case "reload":
                  return Eq.reloadGun(), void Eq.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void Eq.specialActionDown(gq.action);
                case "customButton":
                  return void Pq.gameBridge.send("pressCustomButton", {
                    id: gq.id,
                    down: !0
                  });
                case "touchButton":
                  qq.pressTouchButton(!0)
              }
            })(qq, gq, lq)
          };
        return {
          update: (mq, xq, cq, uq) => {
            var Wq;
            const Nq = (0, yq.m)(qq.contextActionInputs()),
              aq = null !== (Wq = Nq[0]) && void 0 !== Wq ? Wq : nq;
            (0, tq.b)((0, yq.g)(aq) ? aq : null);
            const Vq = (0, yq.c)(Nq);
            (0, tq.e)(Vq);
            const dq = (0, Aq.i)("actionButton");
            if (Vq) {
              const qq = gq.update(xq.wasPressed(dq), xq.isHeld(dq), cq, uq);
              "tap" === qq ? Oq(mq, aq, [dq], cq) : "hold" === qq && (Bq.c.consumeButton(dq), lq.i.TV(oq.m, Nq))
            } else gq.release(), xq.wasPressed(dq) && Oq(mq, aq, [dq], cq);
            Eq && cq - Eq.atMs >= 40 && !Eq.heldBy.some((qq => (0, Qq.J)(xq.frame.values, qq))) && Yq()
          },
          pressPicked: (qq, Eq) => {
            Oq(qq, Eq, [(0, Aq.i)("menuConfirm"), (0, Aq.i)("actionButton")], performance.now())
          },
          release: () => {
            gq.release(), Yq(), (0, tq.b)(null), (0, tq.e)(!1)
          }
        }
      };
    var iq = gq(8057);
    var Zq = gq(40304),
      fq = gq(8704),
      Mq = gq(8110),
      Tq = gq(8823);
    var zq = gq(40301),
      Sq = gq(8826),
      pq = gq(40314),
      Gq = gq(8803),
      Lq = gq(8709),
      Jq = gq(8712),
      kq = gq(8718),
      Rq = gq(8599);
    const Uq = () => Rq.d[(0, Wq.i)().tapHoldTime].wheelMs,
      Fq = () => ((0, uq.c)(), new Event("controllerMenuKey")),
      sq = (qq, Eq, gq) => new hq((() => {
        const gq = qq.bodies();
        return {
          bodies: gq,
          press: Eq(gq)
        }
      }), (qq => {
        let {
          bodies: Eq,
          press: Yq
        } = qq;
        gq(Eq, Yq)
      })),
      Xq = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      wq = qq => {
        const Eq = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let gq = Xq;
        const uq = new pq.b,
          Pq = lq.i.subscribe("appManagerUpdated|activeInputDevice", (Eq => {
            qq.deviceChanged(Eq)
          }));
        let yq = null,
          tq = 0;
        const hq = () => {
          yq = null, (0, Lq.h)(null)
        };
        let nq = !1;
        const wq = new vq,
          Kq = qq.look,
          Cq = new rq.d,
          Iq = new rq.d,
          eq = bq(qq),
          Dq = lq.i.subscribe(oq.p, (Eq => {
            eq.pressPicked(qq.bodies(), Eq)
          })),
          qE = sq(qq, (qq => qq.primaryFireDown()), ((qq, Eq) => {
            qq.primaryFireUp(Eq)
          })),
          EE = sq(qq, (qq => qq.altFireDown()), ((qq, Eq) => {
            qq.altFireUp(Eq)
          }));
        let gE = !1,
          YE = !1,
          lE = !1;
        const OE = (0, dq.b)(Qq.ab),
          mE = (0, dq.b)(Qq.ab),
          xE = new rq.d;
        let AE = !1;
        const cE = () => {
            OE.reset(), mE.reset(), xE.release(), (0, kq.g)(!1), Kq.release(), qE.cancel(), (0, Jq.d)(!1), EE.cancel(), eq.release(), Cq.release(), Iq.release(), hq()
          },
          uE = function() {
            let Yq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            cE(), YE = !1, Yq || (gE = !1, gq = Xq, Object.assign(Eq, {
              x: 0,
              y: 0,
              magnitude: 0,
              headingOffset: 0,
              jumpHeld: !1,
              jumpPressed: !1,
              running: !1,
              sprintHeld: !1
            }), qq.stopMoving())
          },
          BE = function(Yq, lq, Oq) {
            let mq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const xq = (0, Wq.i)(),
              cq = (0, zq.h)(lq, xq.moveDeadzone),
              Bq = (0, Aq.i)("sprint");
            gq = (0, zq.s)(gq, {
              sprintPressed: Yq.wasPressed(Bq),
              magnitude: cq.magnitude,
              autoSprint: xq.autoSprint,
              nowMs: Oq
            }), Eq.running = gq.running, Eq.sprintHeld = Yq.isHeld(Bq), Eq.x = cq.x, Eq.y = cq.y, Eq.magnitude = cq.speed, Eq.headingOffset = cq.headingOffset, gE = cq.magnitude > 0;
            const Nq = (0, Aq.i)("jump");
            if (Eq.jumpHeld = Yq.isHeld(Nq), Eq.jumpPressed = Yq.wasPressed(Nq), Eq.jumpPressed && qq.bodies().jumpDown(), mq) return void qq.move(Eq, null);
            const aq = (0, Aq.i)("sneak"),
              Vq = uq.filter({
                sneakHeld: Yq.isHeld(aq),
                sneakPressed: Yq.wasPressed(aq),
                sneakTogglePressed: Yq.wasPressed((0, Aq.i)("sneakToggle"))
              }, Oq);
            qq.move(Eq, {
              ...Vq,
              mode: xq.sneakMode
            })
          },
          WE = (qq, Eq) => {
            const gq = (0, Aq.i)("chat");
            if ("off" === (0, Wq.i)().quickChat) return void(qq.wasPressed(gq) && (Bq.c.consumeButton(gq), lq.i.TV(fq.b)));
            const Yq = Cq.update(qq.wasPressed(gq), qq.isHeld(gq), Eq, Uq());
            "tap" === Yq || "hold" === Yq && null === (0, aq.b)() ? lq.i.TV(fq.b) : "hold" === Yq && (Bq.c.consumeButton(gq), lq.i.TV(Hq.k))
          },
          NE = (Eq, gq) => {
            ((qq, Eq) => {
              const gq = (0, jq.e)(),
                Yq = (0, Aq.i)("emoteWheel");
              if ("wheel" === (0, Wq.i)().emoteButton) return qq.wasPressed(Yq) && (Bq.c.consumeButton(Yq), lq.i.TV("requestEmoteWheelPadOpen", !0)), (0, jq.e)() !== gq;
              const Oq = Iq.update(qq.wasPressed(Yq), qq.isHeld(Yq), Eq, Uq());
              return "tap" === Oq ? lq.i.TV("requestEmoteRepeatLast") : "hold" === Oq && (Bq.c.consumeButton(Yq), lq.i.TV("requestEmoteWheelPadOpen", !1)), (0, jq.e)() !== gq
            })(Eq, gq) || WE(Eq, gq), Eq.wasPressed((0, Aq.i)("inventory")) && (Bq.c.consumeButton((0, Aq.i)("inventory")), (0, xq.v)(Fq(), "inventory", qq.hasFullInventory())), Eq.wasPressed((0, Aq.i)("pause")) && (Bq.c.consumeButton((0, Aq.i)("pause")), (0, cq.b)() === mq.p.SOCIAL ? (0, xq.u)(Fq(), mq.p.SOCIAL) : (0, xq.h)(Fq())), Eq.wasPressed((0, Aq.i)("leaderboard")) && !(0, Oq.i)() && (Bq.c.consumeButton((0, Aq.i)("leaderboard")), ((qq, Eq) => {
              if ("shop" === (0, Mq.c)()) return lq.i.TV(Tq.m), void(0, xq.u)(qq, mq.p.SHOP, !0);
              (0, xq.u)(qq, mq.p.LOBBY_LEADERBOARD, Eq)
            })(Fq(), qq.hasLobbyTab()))
          },
          aE = (Eq, gq) => {
            const Yq = qq.bodies();
            ((Eq, gq) => {
              const Yq = (0, Aq.i)("attack"),
                lq = Eq.wasPressed(Yq);
              lq && !qE.isLatched() && (nq = qq.targetsBlock()), qE.update(lq, Eq.isHeld(Yq), gq, "toggle" === (0, Wq.i)().attackMode), qE.isLatched() && nq ? wq.update(qq.targetsBlock(), gq) && qE.unlatch() : wq.reset(), (0, Jq.d)(qE.isLatched())
            })(Eq, gq), EE.update(Eq.wasPressed((0, Aq.i)("use")), Eq.isHeld((0, Aq.i)("use")), gq, !1), OE.update(Eq.isHeld((0, Aq.i)("hotbarPrevious")), gq) && qq.scrollHotbar(-1), mE.update(Eq.isHeld((0, Aq.i)("hotbarNext")), gq) && qq.scrollHotbar(1), ((Eq, gq, Yq) => {
              const lq = (0, Aq.i)("perspective"),
                Oq = (0, Aq.i)("pickBlock"),
                mq = qq.pickBlockAllowed();
              (0, kq.g)(mq && !AE && qq.targetsBlock());
              const xq = () => {
                gq.pickBlock() && (AE = !0, (0, kq.g)(!1))
              };
              if (!mq || Oq !== lq) return xE.release(), Eq.wasPressed(lq) && gq.swapCameraZoom(), void(mq && Eq.wasPressed(Oq) && xq());
              const cq = xE.update(Eq.wasPressed(Oq), Eq.isHeld(Oq), Yq, Uq());
              "tap" === cq ? xq() : "hold" === cq && gq.swapCameraZoom()
            })(Eq, Yq, gq), ((Eq, gq, Yq) => {
              const lq = (0, Aq.i)("drop");
              if (Eq.wasPressed(lq)) {
                gq.dropItem(!1);
                const qq = (0, Wq.i)();
                "off" !== qq.buttonRepeat && (yq = Yq, tq = Rq.d[qq.tapHoldTime].dropStackMs, (0, Lq.h)(tq))
              }
              null !== yq && (!Eq.isHeld(lq) || qq.selectedSlotEmpty() ? hq() : Yq - yq >= tq && (hq(), gq.dropItem(!0)))
            })(Eq, Yq, gq), eq.update(Yq, Eq, gq, Uq()), NE(Eq, gq)
          },
          VE = Bq.c.register({
            name: "gameplay",
            isActive: () => {
              const Eq = gE && "keyboardMouse" === Yq.b.get("activeInputDevice") && !(0, Nq.E)(),
                gq = (0, Nq.k)() ? [Zq.b] : [];
              return ((0, Nq.k)() || Eq) && (0, Vq.d)(gq) && qq.hasPlayer()
            },
            onFrame: qq => {
              const Eq = performance.now(),
                gq = (0, Wq.i)(),
                Yq = (0, zq.u)(qq, (0, zq.l)(gq, (0, Aq.i)("pause"), (0, Sq.b)().isSupported())),
                lq = (0, zq.i)(Yq, gq.swapSticks);
              return (0, Nq.k)() ? (YE = !1, (0, Vq.d)() ? (lE = !1, Kq.update(lq.look, gq, Yq.isHeld((0, Aq.i)("use"))), BE(Yq, lq.move, Eq), void aE(Yq, Eq)) : (lE || (lE = !0, uq.lostToPadScreen(), uE()), void WE(Yq, Eq))) : (YE || (cE(), YE = !0), void BE(Yq, lq.move, Eq))
            },
            onDeactivate: qq => {
              (0, Nq.k)() && uq.lostToPadScreen(), uE(qq)
            },
            onPeekFrame: Eq => {
              (0, Nq.k)() && (0, Vq.d)(Zq.d) && qq.hasPlayer() ? BE(Eq, (0, zq.i)(Eq, (0, Wq.i)().swapSticks).move, performance.now(), !0) : uE()
            }
          }),
          dE = (0, Zq.c)(qq),
          jE = (() => {
            const qq = lq.i.subscribe(iq.d, (qq => {
              !qq && (0, Nq.k)() && "inGame" === Yq.b.get("gameState") && lq.i.TV("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              lq.i.unsubscribe(qq)
            }
          })();
        return () => {
          uE(), qq.uninstall(), (0, Gq.f)(!1), (0, kq.g)(!1), lq.i.unsubscribe(Pq), lq.i.unsubscribe(Dq), VE(), dE(), jE(), Kq.uninstall()
        }
      }
  },
  40304: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => aq,
      c: () => dq,
      d: () => Nq
    });
    var Yq = gq(1274),
      lq = gq(4135),
      Oq = gq(8750),
      mq = gq(36974),
      xq = gq(1702),
      Aq = gq(1174),
      cq = gq(8123),
      uq = gq(8662),
      Bq = gq(8780);
    const Wq = {
        emoteWheel: Oq.e,
        quickChatWheel: uq.d,
        actionWheel: Bq.r
      },
      Nq = Object.keys(Wq),
      aq = "dead",
      Vq = qq => (0, Yq.i)().includes(qq),
      dq = qq => {
        const Eq = [(0, cq.i)(aq, (() => qq.hasPlayer() && qq.isPlayerDead())), (0, cq.i)("sleeping", (() => Vq(mq.g))), (0, cq.i)("turnstile", (() => Vq(Aq.e))), (0, cq.i)("videoAd", xq.d), (0, cq.i)("replay", (() => (0, lq.i)() || qq.isReplayMode())), (0, cq.i)("freeCamera", (() => qq.isFreeCameraOn())), ...Object.entries(Wq).map((qq => {
          let [Eq, gq] = qq;
          return (0, cq.i)(Eq, gq)
        }))];
        return () => {
          for (const qq of Eq) qq()
        }
      }
  },
  40301: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => lq,
      h: () => Aq,
      i: () => xq,
      l: () => uq,
      m: () => mq,
      o: () => Oq,
      s: () => cq,
      u: () => Bq
    });
    var Yq = gq(8061);
    class lq {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(qq, Eq, gq) {
        const lq = (0, Yq.j)(qq, Eq.lookDeadzone);
        if (Math.hypot(lq.x, lq.y) < .9 || Math.abs(lq.x) < Math.abs(lq.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = gq);
        const Oq = (mq = Eq.lookSensitivityX, Math.min(1, 100 / mq));
        var mq;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (gq - this.fullTiltSinceMs - 250 * Oq) / (200 * Oq)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const Oq = (qq, Eq, gq, lq, Oq) => {
        let mq = 1;
        return "boost" === gq.lookCurve ? mq = qq.update(Eq, gq, Oq) : qq.reset(),
          function(qq, Eq) {
            let {
              yawBoost: gq = 1,
              aiming: lq = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const Oq = (0, Yq.f)((0, Yq.j)(qq, Eq.lookDeadzone), Eq.lookCurve),
              mq = 220 * Math.PI / 180,
              xq = lq ? Eq.aimLookSensitivity / 100 : 1,
              Aq = Eq.lookSensitivityX / 100 * xq,
              cq = Eq.lookSensitivityY / 100 * xq;
            return {
              yawRadPerSec: Oq.x * mq * Aq * gq * (Eq.invertLookX ? -1 : 1),
              pitchRadPerSec: Oq.y * mq * .7 * cq * (Eq.invertLookY ? -1 : 1)
            }
          }(Eq, gq, {
            yawBoost: mq,
            aiming: lq
          })
      },
      mq = (qq, Eq) => {
        const gq = Math.max(0, Math.min(250, Eq)) / 1e3;
        return {
          VJ: qq.yawRadPerSec * gq,
          dJ: qq.pitchRadPerSec * gq
        }
      },
      xq = (qq, Eq) => Eq ? {
        move: qq.rightStick,
        look: qq.leftStick
      } : {
        move: qq.leftStick,
        look: qq.rightStick
      },
      Aq = (qq, Eq) => {
        const gq = (0, Yq.j)(qq, Eq),
          lq = Math.min(1, Math.hypot(gq.x, gq.y));
        return {
          magnitude: lq,
          speed: Math.min(1, lq / .8),
          headingOffset: 0 === lq ? 0 : Math.atan2(gq.x, -gq.y),
          x: gq.x,
          y: gq.y
        }
      },
      cq = (qq, Eq) => {
        let {
          sprintPressed: gq,
          magnitude: Yq,
          autoSprint: lq,
          nowMs: Oq
        } = Eq;
        const mq = gq ? Oq : qq.latchedAtMs,
          xq = (qq => {
            let {
              running: Eq,
              magnitude: gq,
              sprintPressed: Yq,
              autoSprint: lq
            } = qq;
            return !(gq < .5) && (!!Yq || !!(lq && gq >= .9) || Eq)
          })({
            running: qq.running,
            magnitude: Yq,
            sprintPressed: Oq - mq <= 1e3,
            autoSprint: lq
          });
        return {
          running: xq,
          latchedAtMs: xq ? -1 / 0 : mq
        }
      },
      uq = (qq, Eq, gq) => gq && qq.gyroAiming && "button" === qq.gyroActivation && qq.gyroButton !== Eq ? qq.gyroButton : null,
      Bq = (qq, Eq) => Eq ? {
        ...qq,
        isHeld: gq => gq !== Eq && qq.isHeld(gq),
        wasPressed: gq => gq !== Eq && qq.wasPressed(gq),
        wasReleased: gq => gq !== Eq && qq.wasReleased(gq),
        value: gq => gq === Eq ? 0 : qq.value(gq)
      } : qq
  },
  40314: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq,
      c: () => Yq
    });
    const Yq = qq => {
      let {
        mode: Eq,
        sneakHeld: gq,
        sneakPressed: Yq,
        sneakTogglePressed: lq,
        descending: Oq,
        canCrouch: mq,
        toggled: xq
      } = qq;
      return mq ? Oq ? {
        crouchHeld: gq,
        toggled: !1
      } : "hold" === Eq ? {
        crouchHeld: gq,
        toggled: lq ? !xq : xq
      } : {
        crouchHeld: !1,
        toggled: Yq || lq ? !xq : xq
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class lq {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(qq, Eq) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = Eq, this.graceEndsMs = Eq + 500);
        const gq = Eq < this.graceEndsMs;
        return gq && (qq.sneakPressed || qq.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, Eq + 300))), qq.sneakHeld ? gq && qq.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: qq.sneakHeld && !this.ignoringHeld,
          sneakPressed: qq.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: qq.sneakTogglePressed && !gq
        }
      }
    }
  },
  40293: (qq, Eq, gq) => {
    gq(8826)
  },
  40295: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => oq
    });
    var Yq = gq(31),
      lq = gq(8750),
      Oq = gq(8764),
      mq = gq(8073),
      xq = gq(8118),
      Aq = gq(8090),
      cq = gq(40301),
      uq = gq(40304),
      Bq = gq(8123),
      Wq = gq(8061),
      Nq = gq(8662),
      aq = gq(8780);
    const Vq = [{
        isOpen: lq.i,
        openButton: () => (0, mq.i)("emoteWheel"),
        aim: qq => {
          Yq.i.TV("emoteWheelPadAim", qq)
        },
        commit: qq => {
          Yq.i.TV("requestEmoteWheelPadCommit", qq)
        },
        close: () => {
          Yq.i.TV("requestEmoteWheelClose")
        }
      }, {
        isOpen: Nq.d,
        openButton: () => (0, mq.i)("chat"),
        aim: qq => {
          Yq.i.TV(Nq.g, qq)
        },
        commit: qq => {
          Yq.i.TV(Nq.i, qq)
        },
        close: () => {
          Yq.i.TV(Nq.h)
        },
        keptOpenBy: [uq.b]
      }, {
        isOpen: aq.r,
        openButton: () => (0, mq.i)("actionButton"),
        aim: qq => {
          Yq.i.TV(aq.c, qq)
        },
        commit: qq => {
          Yq.i.TV(aq.i, qq)
        },
        close: () => {
          Yq.i.TV(aq.g)
        }
      }],
      dq = () => {
        var qq;
        return null !== (qq = Vq.find((qq => qq.isOpen()))) && void 0 !== qq ? qq : null
      },
      jq = qq => (0, mq.G)(qq.openButton()),
      Hq = (qq, Eq) => !(0, Wq.J)(qq.frame.values, Eq),
      oq = () => {
        let qq = null,
          Eq = !1,
          gq = !1;
        return xq.c.register({
          name: "wheel",
          isActive: () => null !== dq(),
          peek: () => {
            const qq = dq();
            return qq && jq(qq) ? null : {
              over: "gameplay",
              stick: (0, Aq.i)().swapSticks ? "right" : "left"
            }
          },
          onFrame: Yq => {
            var lq;
            const Wq = dq();
            if (!Wq) return;
            if (null !== (0, Bq.c)([...uq.d, ...null !== (lq = Wq.keptOpenBy) && void 0 !== lq ? lq : []])) return void Wq.close();
            const Nq = Wq.openButton(),
              aq = (0, cq.i)(Yq.frame, (0, Aq.i)().swapSticks),
              Vq = jq(Wq) ? aq.move : aq.look;
            qq !== Wq ? (qq = Wq, Eq = !Hq(Yq, Nq) || Math.hypot(Vq.x, Vq.y) >= Oq.y, gq = !1) : gq && (gq = !1, Hq(Yq, Nq) && (Eq = !1)), Wq.aim(Vq);
            const oq = (0, mq.i)("menuConfirm"),
              Pq = (0, mq.i)("menuBack");
            return Yq.wasPressed(Pq) ? (xq.c.consumeButton(Pq), void Wq.close()) : Yq.wasPressed(oq) || Yq.wasPressed(Nq) ? (xq.c.consumeButton(oq), xq.c.consumeButton(Nq), void Wq.commit(!1)) : void(Eq && Hq(Yq, Nq) && (Eq = !1, Wq.commit(!0)))
          },
          onDeactivate: () => {
            gq = null !== qq && dq() === qq, gq || (qq = null, Eq = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);