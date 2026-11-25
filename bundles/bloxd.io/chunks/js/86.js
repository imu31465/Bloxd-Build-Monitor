export const id = 86;
export const ids = [86];
export const modules = {
  36871: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => qG,
      d: () => AG
    });
    var wG = ZG(51),
      SG = ZG(1895),
      LG = ZG(36874),
      yG = ZG.n(LG),
      kG = ZG(4561),
      UG = ZG(1876),
      YG = ZG(1389),
      VG = ZG(80),
      pG = ZG(95),
      fG = ZG(352),
      QG = ZG(1006),
      KG = ZG.n(QG),
      hG = ZG(17),
      dG = ZG(1016),
      JG = ZG(1579),
      rG = ZG(1702),
      zG = ZG(1626),
      EG = ZG(1979),
      oG = ZG(1359),
      XG = ZG(2060),
      uG = ZG(1343),
      iG = ZG(3617),
      CG = ZG(36883),
      WG = ZG(36917),
      mG = ZG(1409),
      IG = ZG(2414),
      FG = ZG(1151),
      vG = ZG(36930);
    var aG = ZG(34425),
      cG = ZG(1242);
    var lG = ZG(1067);
    const jG = ZG(36932),
      PG = ["enter", "t", "/"];
    let MG = !1;

    function AG() {
      return MG || (0, rG.isTextEntry)(document.activeElement)
    }

    function sG() {
      var GG, bG;
      (0, XG.c)();
      const ZG = null !== (GG = null === (bG = (0, oG.h)()) || void 0 === bG ? void 0 : bG.getBoundButton("keyboardChannel")) && void 0 !== GG ? GG : null;
      return ZG ? (0, lG.jsx)(EG.b, {
        className: "ChatInputChannelGlyph",
        glyph: ZG
      }) : null
    }

    function qG() {
      const {
        t: GG
      } = (0, FG.w)(), {
        isTouchScreen: bG
      } = (0, hG.o)(["isTouchScreen"]), ZG = (0, uG.w)(), [LG, QG] = (0, wG.useState)(!1), EG = (0, wG.useRef)(LG), oG = (0, wG.useRef)(null), {
        messages: XG,
        reportedPlayers: AG,
        channel: qG
      } = (0, iG.n)(), gG = (0, wG.useRef)(0), eG = (0, wG.useRef)(""), RG = (0, wG.useRef)(null);
      var TG;
      TG = RG, (0, wG.useEffect)((() => {
        if (!(0, VG.isIOS)()) return;
        const GG = TG.current;
        let bG = null;
        const ZG = ZG => {
            const wG = ZG.changedTouches[0];
            bG = "none" === getComputedStyle(GG).pointerEvents ? {
              id: wG.identifier,
              y: wG.clientY
            } : null
          },
          wG = ZG => {
            const wG = bG,
              SG = wG && (0, vG.b)(ZG.changedTouches, wG.id);
            SG && (ZG.preventDefault(), GG.scrollBy({
              top: wG.y - SG.clientY,
              behavior: "instant"
            }), wG.y = SG.clientY)
          };
        return GG.addEventListener("touchstart", ZG, {
          passive: !0
        }), GG.addEventListener("touchmove", wG, {
          passive: !1
        }), () => {
          GG.removeEventListener("touchstart", ZG), GG.removeEventListener("touchmove", wG)
        }
      }), [TG]);
      const [HG, tG] = (0, wG.useState)(!1), [DG, NG] = (0, wG.useState)(!1), OG = (0, wG.useRef)(HG), xG = (0, wG.useRef)(null), BG = (0, wG.useRef)(!1), Gb = (0, wG.useRef)(null), bb = (0, wG.useRef)(null), Zb = (0, wG.useRef)(null), wb = (0, wG.useRef)(kb);
      wb.current = kb;
      const Sb = (0, IG.h)();

      function Lb() {
        EG.current = !1, QG(!1), bb.current.blur()
      }

      function yb(GG) {
        OG.current = GG, tG(GG)
      }

      function kb() {
        const GG = bb.current.value;
        bb.current.value = "", Ub(GG)
      }

      function Ub(GG) {
        (0, iG.m)(GG), gG.current = 0, yb(!1)
      }

      function Yb(GG, bG) {
        0 === gG.current && (eG.current = bb.current.value);
        const ZG = (0, iG.k)(gG.current + GG, bG);
        gG.current = ZG.stepsBack, bb.current.value = 0 === ZG.stepsBack ? eG.current : ZG.text, setTimeout((() => {
          bb.current && bb.current.setSelectionRange(-1, -1)
        }), 0)
      }

      function Vb() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        RG.current && (!GG && OG.current || (RG.current.scrollTop = 1e5))
      }
      return (0, kG.e)(!0, LG, "ChatComponent"), (0, wG.useEffect)((() => (MG = LG, () => {
          MG = !1
        })), [LG]), (0, YG.g)("appManagerUpdated|openEverythingMenuName", (() => {
          (0, JG.u)() && QG(!1)
        })), (0, wG.useEffect)((() => {
          bb.current.addEventListener("blur", (GG => {
            if (null === bb.current) return;
            Array.from(document.querySelectorAll(":hover")).some((GG => GG.classList.contains("ChatInputChannel") || GG.classList.contains("ChatMsgSelectWrapper"))) || ((0, VG.isMobile)() && EG.current && "" !== bb.current.value && wb.current(), QG(!1))
          }));
          const GG = GG => {
            oG.current.contains(GG.target) || (0, zG.g)(GG.target) || QG(!1)
          };
          document.addEventListener("touchstart", GG, {
            capture: !0
          });
          const bG = GG => {
            (0, WG.i)(GG.target) && (EG.current = !1, QG(!1))
          };
          document.addEventListener("mousedown", bG, {
            capture: !0
          });
          const ZG = () => {
              clearTimeout(xG.current), yb(!0)
            },
            wG = () => {
              clearTimeout(xG.current), xG.current = setTimeout((() => {
                yb(!1), Vb()
              }), 4e3)
            },
            LG = () => {
              document.pointerLockElement ? (QG(!1), NG(!0), BG.current = !1, yb(!1), Vb()) : NG(!1)
            };
          RG.current.addEventListener("pointermove", (GG => {
            "touch" === GG.pointerType || BG.current || document.pointerLockElement || (BG.current = !0, clearTimeout(xG.current))
          })), RG.current.addEventListener("pointerleave", (GG => {
            "touch" !== GG.pointerType && (BG.current = !1, OG.current && wG())
          })), RG.current.addEventListener("pointerdown", (GG => {
            "touch" === GG.pointerType || document.pointerLockElement || (BG.current = !0, ZG())
          })), RG.current.addEventListener("wheel", (GG => {
            document.pointerLockElement || GG.deltaY >= 0 && Math.abs(RG.current.scrollTop) < 1 || (ZG(), BG.current || (xG.current = setTimeout((() => {
              yb(!1)
            }), 4e3)))
          }), {
            passive: !0
          }), RG.current.addEventListener("touchstart", ZG), RG.current.addEventListener("touchend", wG), RG.current.addEventListener("touchcancel", wG), document.addEventListener("pointerlockchange", LG);
          const kG = GG => {
            if (Sb.shown && (EG.current || ! function(GG) {
                if ((0, rG.isTypingInInput)()) return !0;
                const bG = document.activeElement;
                return (bG instanceof HTMLButtonElement || "button" === (null === bG || void 0 === bG ? void 0 : bG.getAttribute("role"))) && ["Enter", " "].includes(GG.key)
              }(GG)) && "codeEditor" !== hG.e.get("openInGameMenuName") && "lobbyCodeEditor" !== hG.e.get("openInGameMenuName") && !SG.gameBridge.latest("connectedGame").replay)
              if (EG.current || !(0, JG.u)()) {
                if (EG.current) {
                  if ("ArrowUp" === GG.code || "ArrowDown" === GG.code) return Yb("ArrowUp" === GG.code ? 1 : -1, !1), void GG.stopPropagation();
                  if ("Tab" === GG.code) return iG.c.selectNextChannel(), GG.stopPropagation(), void GG.preventDefault();
                  if (GG.ctrlKey && nG.includes(jG[GG.keyCode])) return GG.preventDefault(), void GG.stopPropagation()
                }
                if ([...PG, "esc"].includes(yG()(GG)))
                  if ("esc" !== yG()(GG)) {
                    if (!EG.current || "/" !== yG()(GG)) {
                      if ("t" === yG()(GG)) {
                        if (EG.current) return void GG.stopPropagation();
                        GG.preventDefault()
                      }
                      EG.current && "" !== bb.current.value && wb.current(), GG.repeat || (EG.current || "/" === yG()(GG) && (bb.current.value = "/", GG.preventDefault()), QG(!EG.current))
                    }
                  } else EG.current && (QG(!1), GG.stopPropagation());
                else EG.current && GG.stopPropagation()
              } else PG.includes(yG()(GG)) && (GG.preventDefault(), GG.stopPropagation(), (0, JG.d)(GG))
          };
          document.addEventListener("keydown", kG, {
            capture: !0
          });
          const UG = RG.current;
          let YG = !1;
          const pG = new ResizeObserver((() => {
              YG && (YG = !1, Vb())
            })),
            fG = () => {
              YG = !0, pG.unobserve(UG), pG.observe(UG)
            };
          Gb.current = fG;
          const KG = new MutationObserver(fG);
          return KG.observe(UG, {
            childList: !0,
            subtree: !0
          }), () => {
            document.removeEventListener("keydown", kG, {
              capture: !0
            }), document.removeEventListener("touchstart", GG, {
              capture: !0
            }), document.removeEventListener("mousedown", bG, {
              capture: !0
            }), document.removeEventListener("pointerlockchange", LG), Gb.current = null, KG.disconnect(), pG.disconnect(), clearTimeout(xG.current)
          }
        }), []), (0, zG.n)(bb, {
          open: () => {
            QG(!0)
          },
          close: () => {
            Lb()
          },
          submit: () => {
            "" !== bb.current.value && kb(), Lb()
          },
          stepHistory: () => {
            Yb(1, !0)
          },
          sendLine: GG => {
            Ub(GG), Lb()
          },
          selectNextChannel: () => {
            iG.c.selectNextChannel()
          }
        }), (0, wG.useEffect)((() => {
          var GG;
          (EG.current = LG, bb.current) && (LG ? (gG.current = 0, bb.current.focus()) : (bb.current.blur(), null === (GG = Gb.current) || void 0 === GG || GG.call(Gb)))
        }), [LG]),
        function(GG, bG) {
          (0, wG.useLayoutEffect)((() => {
            if (!bG) return;
            aG.c.hold();
            const ZG = GG.current.closest(".InGameHeaderAndChat"),
              wG = (0, cG.d)((GG => {
                let {
                  top: bG,
                  height: wG
                } = GG;
                ZG.style.setProperty("--keyboard-top", `${bG+wG}px`)
              }));
            return () => {
              wG(), ZG.style.removeProperty("--keyboard-top"), aG.c.release()
            }
          }), [GG, bG])
        }(oG, LG && bG), (0, lG.jsx)(lG.Fragment, {
          children: (0, lG.jsxs)("div", {
            ref: oG,
            className: KG()("Chat", {
              Chatting: LG
            }),
            "data-camera-keeper": LG ? "" : void 0,
            children: [(0, lG.jsx)("div", {
              ref: RG,
              className: KG()("ChatMessages", {
                HideScrollbar: !HG && !LG,
                NoScrolling: !(0, VG.isMobile)() && DG
              }),
              children: (0, lG.jsx)(CG.c, {
                messages: XG,
                reportedPlayers: AG
              })
            }), bG && !LG && (0, lG.jsx)("button", {
              type: "button",
              className: "ChatIconWrapper SmallTextLight",
              "aria-label": GG("general:chat"),
              ...(0, mG.h)((() => {
                QG(!0), Zb.current.style.display = "flex", (0, VG.isIOS)() && bb.current.focus()
              }), "pointerup"),
              children: (0, lG.jsx)(dG.c, {
                name: "comment-dots",
                className: "ChatIcon"
              })
            }), (0, lG.jsxs)("div", {
              ref: Zb,
              className: "ChatInputWrapper",
              style: {
                display: "" + (LG ? "flex" : "none")
              },
              children: [qG && (0, lG.jsx)("button", {
                type: "button",
                className: "ChatInputChannel",
                style: {
                  backgroundColor: qG.elementBgColor
                },
                onClick: GG => {
                  iG.c.selectNextChannel(), bb.current.focus()
                },
                children: (0, lG.jsx)("span", {
                  className: "SmallTextBold",
                  children: (0, lG.jsx)(UG.c, {
                    text: qG.elementContent
                  })
                })
              }), qG && ZG && (0, lG.jsx)(sG, {}), (0, lG.jsx)("input", {
                className: "ChatInput",
                maxLength: fG.pd,
                ref: bb,
                spellCheck: "false",
                autoComplete: "off",
                autoCorrect: "off",
                "aria-label": GG("general:chat"),
                placeholder: qG ? `${qG.channelName} Chat${"touchOnly"===(0,pG.d)()||ZG?"":" [Tab]"}` : ""
              })]
            })]
          })
        })
    }
    const nG = ["W", "S", "D", "N", "T", "<tab>", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "<page-up>", "<page-down>", "B", "O", "H", "J", "F", "G", "J", "M", "<enter>", "L", "K", "E", "P", "R", "O", "U"]
  },
  36883: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => CG
    });
    var wG = ZG(51),
      SG = ZG(1006),
      LG = ZG.n(SG),
      yG = ZG(3621),
      kG = ZG(19),
      UG = ZG(2362),
      YG = ZG(3574),
      VG = ZG(2003),
      pG = ZG(17),
      fG = ZG(1876),
      QG = ZG(36891),
      KG = ZG(2157),
      hG = ZG(36898),
      dG = ZG(2613),
      JG = ZG(2587),
      rG = ZG(2580),
      zG = ZG(3590),
      EG = ZG(36904),
      oG = ZG(3104),
      XG = ZG(1945),
      uG = ZG(1067);

    function iG(GG) {
      for (let ZG = GG.length - 1; ZG >= 0; ZG--) {
        const wG = "string" === typeof(bG = GG[ZG]) ? bG : "str" in bG && "string" === typeof bG.str ? bG.str : "";
        if ("" !== wG.trim()) return wG
      }
      var bG;
      return ""
    }

    function CG(GG) {
      let {
        messages: bG,
        reportedPlayers: ZG
      } = GG;
      return (0, uG.jsx)(uG.Fragment, {
        children: bG.map((GG => (0, uG.jsx)(WG, {
          message: GG,
          reportedPlayers: ZG
        }, GG.clientChatMsgId)))
      })
    }
    const WG = (0, wG.memo)((function(GG) {
      var bG;
      let {
        message: ZG,
        reportedPlayers: SG
      } = GG;
      const CG = (0, wG.useRef)(null),
        [WG] = (0, wG.useState)(oG.j),
        {
          author: mG
        } = ZG,
        IG = null === mG || void 0 === mG ? void 0 : mG.id,
        FG = null !== (bG = null === mG || void 0 === mG ? void 0 : mG.name) && void 0 !== bG ? bG : void 0,
        vG = (0, VG.e)(FG),
        aG = null !== mG && void 0 !== mG && mG.profileEffect ? KG.c[mG.profileEffect] : void 0,
        cG = null !== mG && !mG.local,
        lG = null === mG && null !== ZG.serverChatMsgId,
        jG = (0, XG.c)("hiddenPlayerNames", (GG => (0, hG.f)(cG, FG, GG))),
        PG = null === ZG.serverChatMsgId || null === mG ? null : {
          text: iG(ZG.content),
          serverChatMsgId: ZG.serverChatMsgId,
          authorId: mG.id
        },
        MG = lG || null !== PG && !SG.includes(IG),
        AG = (0, YG.i)(cG && null !== FG && void 0 !== FG ? FG : null),
        sG = (0, rG.f)(CG);
      (0, wG.useEffect)((() => () => {
        rG.b.closeIfOwner(CG)
      }), []);
      const qG = () => {
          lG ? kG.l.xh("OpenReportMenu", {
            playerEId: null,
            playerName: void 0,
            vV: (0, yG.b)(ZG.content),
            serverChatMsgId: ZG.serverChatMsgId
          }) : null !== PG ? kG.l.xh("OpenReportMenu", {
            playerEId: IG,
            playerName: FG,
            vV: PG.text,
            serverChatMsgId: PG.serverChatMsgId
          }) : console.warn("Reporting a chat message the server never acknowledged")
        },
        nG = void 0 === FG ? [] : (0, zG.d)(AG, FG, PG);
      return (0, uG.jsxs)("div", {
        ref: CG,
        className: LG()("MessageWrapper", {
          ChatMsgSelectWrapper: IG,
          Still: WG
        }),
        onContextMenu: jG ? GG => {
          (0, dG.i)(CG, GG, {
            ...(0, hG.c)(IG, FG),
            showLocation: !1,
            status: null,
            extraActions: MG ? [{
              icon: "flag",
              text: "Report",
              onClick: qG
            }] : [],
            moderationActions: (0, EG.b)(FG),
            friendRequestSource: "chat"
          }, pG.e.get("isTouchScreen"))
        } : void 0,
        onPointerDown: jG ? GG => {
          (0, JG.d)(GG, (() => (0, hG.c)(IG, FG).playerSocialPreview))
        } : void 0,
        children: [aG && (0, uG.jsx)(aG, {
          className: "ChatMessageBackground",
          simple: !0
        }), (cG || lG) && !sG && (0, uG.jsx)(QG.d, {
          className: "ChatFloatingActions",
          triggerElementRef: CG,
          options: [{
            icon: "flag",
            text: "Report",
            onPointerDown: qG,
            show: MG
          }, ...nG, {
            icon: "user-plus",
            text: "socialBar:sendFriendRequest",
            onPointerDown: GG => {
              (0, UG.m)(FG, "chat")
            },
            analyticsClick: {
              id: "social.add_friend",
              value: "chat"
            },
            show: jG && "blocked" !== AG
          }]
        }), (0, uG.jsx)(fG.c, {
          text: ZG.content,
          friendBadgeFor: vG ? FG : void 0
        }, ZG.clientChatMsgId)]
      }, ZG.clientChatMsgId)
    }))
  },
  36946: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => QG,
      d: () => KG,
      g: () => fG,
      j: () => pG
    });
    var wG = ZG(34472),
      SG = ZG(36951),
      LG = ZG(36955),
      yG = ZG(8759),
      kG = ZG(1389),
      UG = ZG(51),
      YG = ZG(59),
      VG = ZG(1067);

    function pG() {
      var GG;
      return (0, kG.j)(SG.c, (0, SG.l)()), (0, VG.jsx)(VG.Fragment, {
        children: null === (GG = (0, SG.l)()) || void 0 === GG ? void 0 : GG.content
      })
    }

    function fG(GG) {
      var bG;
      let {
        show: ZG
      } = GG;
      (0, kG.j)(SG.c, (0, SG.l)());
      const YG = null === (bG = (0, SG.l)()) || void 0 === bG ? void 0 : bG.menu;
      return (0, UG.useEffect)((() => {
        var GG;
        ZG || (null === YG || void 0 === YG || null === (GG = YG.onClose) || void 0 === GG || GG.call(YG), (0, LG.m)())
      }), [ZG, YG]), (0, UG.useEffect)((() => ZG ? (0, yG.g)(LG.t, LG.f) : void 0), [ZG]), (0, VG.jsx)(wG.b, {
        showing: ZG,
        globallyUniqueKey: "clientGameMenu",
        children: null === YG || void 0 === YG ? void 0 : YG.content
      })
    }

    function QG(GG) {
      let {
        placement: bG = "bottom"
      } = GG;
      return (0, VG.jsx)("div", {
        id: `clientGameHud-${bG}`,
        style: {
          display: "contents"
        }
      })
    }

    function KG(GG) {
      let {
        children: bG,
        placement: ZG = "bottom"
      } = GG;
      const [wG, SG] = (0, UG.useState)(null);
      return (0, UG.useEffect)((() => {
        SG(document.getElementById(`clientGameHud-${ZG}`))
      }), [ZG]), wG ? (0, YG.createPortal)(bG, wG) : null
    }
  },
  37239: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => pG,
      c: () => VG
    });
    var wG = ZG(51),
      SG = ZG(1006),
      LG = ZG.n(SG),
      yG = ZG(1393),
      kG = ZG(1067);
    const UG = 200,
      YG = 160;

    function VG() {
      return window.matchMedia("(max-width: 900px)").matches
    }

    function pG(GG) {
      let {
        side: bG,
        defaultSize: ZG,
        covers: SG,
        onClose: VG,
        children: pG
      } = GG;
      const fG = (0, wG.useRef)(null),
        [QG, KG] = (0, wG.useState)(null),
        [hG, dG] = (0, wG.useState)(ZG);
      hG !== ZG && (dG(ZG), KG(null));
      const JG = (0, wG.useRef)(null),
        rG = "top" === bG,
        zG = GG => rG ? GG.clientY : GG.clientX,
        EG = () => {
          JG.current = null
        };
      return (0, kG.jsxs)("div", {
        ref: fG,
        className: LG()("ResizableSidePanel", bG && `ResizableSidePanel-${bG}`, {
          Covers: "always" === SG,
          CoversWhenNarrow: "narrow" === SG,
          Dragged: null !== QG
        }),
        style: {
          [rG ? "height" : "width"]: null !== QG && void 0 !== QG ? QG : ZG
        },
        children: [pG, bG && (0, kG.jsx)("div", {
          className: "ResizableSidePanelHandle",
          role: "separator",
          "aria-orientation": rG ? "horizontal" : "vertical",
          onPointerDown: GG => {
            if (0 !== GG.button) return;
            GG.preventDefault();
            const bG = fG.current,
              ZG = Array.from(bG.parentElement.children).reduce(((GG, ZG) => ZG !== bG && "0" !== getComputedStyle(ZG).flexGrow ? GG + (GG => rG ? GG.clientHeight : GG.clientWidth)(ZG) : GG), 0),
              wG = rG ? bG.offsetHeight : bG.offsetWidth,
              SG = Math.min(UG, wG),
              LG = Math.max(SG, wG + Math.max(0, ZG - YG));
            JG.current = {
              start: zG(GG),
              startSize: wG,
              minSize: SG,
              maxSize: LG
            }, GG.currentTarget.setPointerCapture(GG.pointerId)
          },
          onPointerMove: GG => {
            const ZG = JG.current;
            if (!ZG) return;
            const wG = "right" === bG ? ZG.start - GG.clientX : zG(GG) - ZG.start;
            KG(Math.min(ZG.maxSize, Math.max(ZG.minSize, ZG.startSize + wG)))
          },
          onPointerUp: EG,
          onPointerCancel: EG,
          onLostPointerCapture: EG
        }), VG && (0, kG.jsx)(yG.j, {
          className: "ResizableSidePanelClose",
          onClick: VG
        })]
      })
    }
  },
  37261: (GG, bG, ZG) => {
    ZG.d(bG, {
      A: () => iG,
      C: () => SG,
      G: () => uG,
      d: () => zG,
      f: () => dG,
      i: () => KG,
      l: () => QG,
      o: () => rG,
      p: () => CG,
      t: () => EG,
      v: () => XG,
      y: () => oG
    });
    var wG = ZG(51);
    const SG = 5e3,
      LG = 500,
      yG = 3e3;
    let kG = null,
      UG = null,
      YG = null;
    const VG = new Set;

    function pG(GG) {
      kG = GG;
      for (const bG of VG) bG()
    }

    function fG() {
      if (!kG || void 0 !== kG.endedAt) return;
      null !== UG && (clearTimeout(UG), UG = null), pG({
        ...kG,
        endedAt: Date.now()
      });
      const GG = YG;
      YG = null, null === GG || void 0 === GG || GG()
    }

    function QG(GG, bG) {
      let {
        submit: ZG,
        reopen: wG
      } = bG;
      null !== UG && clearTimeout(UG), YG = wG, pG({
        ...GG,
        startedAt: Date.now(),
        errors: []
      }), UG = setTimeout(fG, yG), ZG()
    }

    function KG() {
      kG && void 0 === kG.endedAt && void 0 === kG.ranAt && (null !== UG && clearTimeout(UG), pG({
        ...kG,
        ranAt: Date.now()
      }), UG = setTimeout(fG, SG))
    }
    const hG = 3;

    function dG(GG) {
      if (!kG || void 0 === kG.ranAt || void 0 !== kG.endedAt || kG.errors.includes(GG) || kG.errors.length >= hG) return;
      const bG = 0 === kG.errors.length;
      pG({
        ...kG,
        errors: [...kG.errors, GG]
      }), bG && (null !== UG && clearTimeout(UG), UG = setTimeout(fG, LG))
    }

    function JG(GG) {
      var bG;
      return (null === (bG = kG) || void 0 === bG ? void 0 : bG.chatKey) === GG ? kG : null
    }

    function rG(GG) {
      const bG = JG(GG);
      return bG && void 0 !== bG.endedAt ? (pG(null), bG) : null
    }

    function zG(GG) {
      var bG;
      (null === (bG = kG) || void 0 === bG ? void 0 : bG.chatKey) === GG && (null !== UG && (clearTimeout(UG), UG = null), YG = null, pG(null))
    }
    const EG = "These changes from your last answer didn't go in. Make them again.";

    function oG(GG) {
      const bG = [...new Set(GG)].slice(0, hG);
      return `Fix this in your change: when it ran, the world showed ${1===bG.length?"this error":"these errors"}: ${bG.join(" ")}`
    }

    function XG(GG) {
      return `Your change didn't go in, because the code wouldn't run at all: ${GG.join(" ")} Send the whole change again with that fixed.`
    }

    function uG(GG) {
      return `Fix this in your change: ${GG.join(" ")}`
    }

    function iG(GG) {
      var bG;
      if (void 0 === GG.ranAt) return {
        title: "Couldn't test it",
        text: "Your change didn't go into your world, so it couldn't be tested. Press Submit to try it."
      };
      const ZG = Math.max(1, Math.round(((null !== (bG = GG.endedAt) && void 0 !== bG ? bG : GG.ranAt) - GG.ranAt) / 1e3)),
        wG = `Your change ran in your world for ${ZG} ${1===ZG?"second":"seconds"}`;
      return 0 === GG.errors.length ? {
        title: "Tested: no errors",
        text: `${wG} without an error.`
      } : {
        title: 1 === GG.errors.length ? "Tested: it showed an error" : `Tested: it showed ${GG.errors.length} errors`,
        text: `${wG} and showed: ${GG.errors.join(" ")}`
      }
    }

    function CG(GG) {
      const [bG, ZG] = (0, wG.useState)((() => JG(GG)));
      return (0, wG.useEffect)((() => {
        const bG = () => {
          ZG(JG(GG))
        };
        return bG(), VG.add(bG), () => {
          VG.delete(bG)
        }
      }), [GG]), bG
    }
  },
  37265: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => SG,
      h: () => wG
    });
    const wG = {
      key: "worldCode",
      label: "World Code",
      codeBlock: !1
    };

    function SG(GG, bG, ZG) {
      return {
        key: GG,
        label: `Code block at ${bG.join(", ")}`,
        codeBlock: !0,
        pos: bG,
        canChangePos: ZG
      }
    }
  },
  37255: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => wG,
      d: () => LG,
      g: () => yG,
      j: () => SG
    });
    const wG = "code block",
      SG = "World Code/";

    function LG(GG) {
      return GG.trim().toLowerCase().startsWith(SG.toLowerCase())
    }

    function yG(GG) {
      return GG.trim().slice(SG.length).replace(/^\.?\//, "")
    }
  },
  37217: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => UG,
      e: () => YG,
      f: () => kG,
      h: () => VG
    });
    var wG = ZG(51),
      SG = ZG(29),
      LG = ZG(80);
    class yG {
      constructor(GG, bG) {
        let ZG = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.storageKey = GG, this.defaultValue = bG, this.canChange = ZG, this.value = null, this.listeners = new Set, this.get = () => {
          if (!this.canChange) return this.defaultValue;
          if (null === this.value) {
            const GG = SG.h.getItem(this.storageKey);
            this.value = "boolean" === typeof GG ? GG : this.defaultValue
          }
          return this.value
        }, this.set = GG => {
          this.value = GG, SG.h.setItem(this.storageKey, GG);
          for (const bG of this.listeners) bG(GG)
        }
      }
      subscribe(GG) {
        return this.listeners.add(GG), () => {
          this.listeners.delete(GG)
        }
      }
    }
    const kG = new yG("codeEditorLightMode", !1),
      UG = new yG("codeEditorAiHints", !0),
      YG = new yG("codeEditorAiKeySafetyCheck", !0, LG.featureFlags.isOwnTopLevelSite);

    function VG(GG) {
      const [bG, ZG] = (0, wG.useState)(GG.get);
      return (0, wG.useEffect)((() => {
        const bG = GG.subscribe(ZG);
        return ZG(GG.get()), bG
      }), [GG]), [bG, GG.set]
    }
  },
  37212: (GG, bG, ZG) => {
    ZG.d(bG, {
      C: () => dG,
      G: () => EG,
      I: () => IG,
      K: () => WG,
      N: () => fG,
      P: () => cG,
      S: () => iG,
      V: () => CG,
      X: () => aG,
      d: () => KG,
      h: () => UG,
      l: () => hG,
      o: () => mG,
      s: () => kG,
      w: () => VG,
      y: () => QG
    });
    var wG = ZG(2404),
      SG = ZG(37207);
    const LG = "bloxd-world-code-directory-sync",
      yG = "handles",
      kG = "[INVALID SCHEMATIC PLACEHOLDER]";

    function UG(GG, bG) {
      return `${GG}::${bG}`
    }
    const YG = new Set(["node_modules", ".git"]);

    function VG() {
      return "undefined" !== typeof window && "function" === typeof window.showDirectoryPicker
    }

    function pG() {
      return new Promise(((GG, bG) => {
        const ZG = indexedDB.open(LG, 1);
        ZG.onupgradeneeded = () => {
          const GG = ZG.result;
          GG.objectStoreNames.contains(yG) || GG.createObjectStore(yG)
        }, ZG.onsuccess = () => {
          GG(ZG.result)
        }, ZG.onerror = () => {
          var GG;
          bG(null !== (GG = ZG.error) && void 0 !== GG ? GG : new Error("Failed to open directory sync IndexedDB"))
        }
      }))
    }
    async function fG(GG, bG) {
      const ZG = await pG();
      try {
        await new Promise(((wG, SG) => {
          const LG = ZG.transaction(yG, "readwrite");
          LG.objectStore(yG).put(bG, GG), LG.oncomplete = () => {
            wG()
          }, LG.onerror = () => {
            var GG;
            SG(null !== (GG = LG.error) && void 0 !== GG ? GG : new Error("Failed to store directory handle"))
          }
        }))
      } finally {
        ZG.close()
      }
    }
    async function QG(GG) {
      const bG = await pG();
      try {
        return await new Promise(((ZG, wG) => {
          const SG = bG.transaction(yG, "readonly").objectStore(yG).get(GG);
          SG.onsuccess = () => {
            var GG;
            ZG(null !== (GG = SG.result) && void 0 !== GG ? GG : null)
          }, SG.onerror = () => {
            var GG;
            wG(null !== (GG = SG.error) && void 0 !== GG ? GG : new Error("Failed to load directory handle"))
          }
        }))
      } finally {
        bG.close()
      }
    }
    async function KG(GG) {
      const bG = await pG();
      try {
        await new Promise(((ZG, wG) => {
          const SG = bG.transaction(yG, "readwrite");
          SG.objectStore(yG).delete(GG), SG.oncomplete = () => {
            ZG()
          }, SG.onerror = () => {
            var GG;
            wG(null !== (GG = SG.error) && void 0 !== GG ? GG : new Error("Failed to clear directory handle"))
          }
        }))
      } finally {
        bG.close()
      }
    }
    async function hG(GG) {
      const bG = {
        mode: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readwrite"
      };
      return "granted" === await GG.queryPermission(bG) || "granted" === await GG.requestPermission(bG)
    }
    async function dG(GG) {
      if (!VG()) return null;
      try {
        const bG = await window.showDirectoryPicker({
          mode: "readwrite"
        });
        return await fG(GG, bG), bG
      } catch (bG) {
        if (function(GG) {
            return GG instanceof DOMException && "AbortError" === GG.name
          }(bG)) return null;
        throw bG
      }
    }

    function JG(GG) {
      return GG.startsWith(".") || YG.has(GG)
    }

    function rG(GG) {
      if (!GG) return !0;
      const bG = GG.split("/");
      for (const ZG of bG)
        if ("" === ZG || "." === ZG || ".." === ZG) return !1;
      return !0
    }
    async function zG(GG, bG, ZG) {
      for await (const [LG, yG] of GG.entries()) {
        if ("directory" === yG.kind) {
          if (JG(LG)) continue;
          const GG = bG ? `${bG}/${LG}` : LG;
          if (!rG(GG)) continue;
          await zG(yG, GG, ZG);
          continue
        }
        const GG = bG ? `${bG}/${LG}` : LG;
        if (!(0, wG.o)(GG) && !(0, SG.c)(GG)) continue;
        const kG = await yG.getFile();
        ZG[GG] = (0, SG.c)(GG) ? await FG(kG) : await kG.text()
      }
    }
    async function EG(GG) {
      const bG = {};
      return await zG(GG, "", bG), bG
    }

    function oG(GG) {
      return !(!GG || GG !== GG.trim() || GG.startsWith("/") || GG.includes("\\") || GG.includes("\0")) && rG(GG)
    }
    async function XG(GG, bG, ZG) {
      const wG = bG.split("/"),
        SG = wG[wG.length - 1];
      let LG = GG;
      for (let yG = 0; yG < wG.length - 1; yG++) LG = await LG.getDirectoryHandle(wG[yG], {
        create: ZG
      });
      return {
        dir: LG,
        fileName: SG
      }
    }
    async function uG(GG, bG, ZG) {
      if (!oG(bG)) throw new Error(`Refusing to write unsafe path: ${bG}`);
      const {
        dir: wG,
        fileName: SG
      } = await XG(GG, bG, !0), LG = await wG.getFileHandle(SG, {
        create: !0
      }), yG = await LG.createWritable();
      await yG.write(ZG), await yG.close()
    }
    async function iG(GG, bG, ZG) {
      const wG = await async function(GG, bG) {
        if (!oG(bG)) return null;
        try {
          const {
            dir: ZG,
            fileName: wG
          } = await XG(GG, bG, !1), SG = await ZG.getFileHandle(wG), LG = await SG.getFile();
          return await LG.text()
        } catch (ZG) {
          if (ZG instanceof DOMException && ("NotFoundError" === ZG.name || "NotAllowedError" === ZG.name)) return null;
          throw ZG
        }
      }(GG, bG);
      wG !== ZG && await uG(GG, bG, ZG)
    }
    async function CG(GG, bG, ZG) {
      if (!(0, wG.o)(bG) && !(0, SG.c)(bG)) throw new Error(`Refusing to write non-allowlisted path: ${bG}`);
      if ((0, SG.c)(bG)) {
        if (await vG(GG, bG) === kG) throw new Error(`Move the binary schematic ${bG} outside the linked folder before syncing its placeholder`)
      }
      await uG(GG, bG, ZG)
    }
    async function WG(GG, bG) {
      if (!oG(bG)) throw new Error(`Refusing to remove unsafe path: ${bG}`);
      try {
        const {
          dir: ZG,
          fileName: wG
        } = await XG(GG, bG, !1);
        await ZG.removeEntry(wG)
      } catch (ZG) {
        if (ZG instanceof DOMException && ("NotFoundError" === ZG.name || "NotAllowedError" === ZG.name)) return;
        throw ZG
      }
    }
    async function mG(GG, bG) {
      if (!oG(bG)) return null;
      try {
        const ZG = bG.split("/");
        let wG = GG;
        for (const GG of ZG) wG = await wG.getDirectoryHandle(GG);
        return wG
      } catch (ZG) {
        if (ZG instanceof DOMException && ("NotFoundError" === ZG.name || "NotAllowedError" === ZG.name)) return null;
        throw ZG
      }
    }
    async function IG(GG, bG) {
      if ((0, wG.o)(bG) || (0, SG.c)(bG)) {
        if ((0, SG.c)(bG)) {
          if (await vG(GG, bG) === kG) throw new Error(`Refusing to remove a binary schematic: ${bG}`)
        }
        await WG(GG, bG)
      }
    }
    async function FG(GG) {
      if (GG.size > 64) return kG;
      const bG = await GG.text();
      return Array.from(bG).some((GG => {
        const bG = GG.charCodeAt(0);
        return bG < 9 || bG > 13 && bG < 32 || 65533 === bG
      })) ? kG : bG
    }
    async function vG(GG, bG) {
      try {
        const {
          dir: ZG,
          fileName: wG
        } = await XG(GG, bG, !1);
        return await FG(await (await ZG.getFileHandle(wG)).getFile())
      } catch (ZG) {
        if (ZG instanceof DOMException && "NotFoundError" === ZG.name) return null;
        throw ZG
      }
    }
    async function aG(GG, bG) {
      const ZG = await EG(GG);
      for (const wG of Object.keys(ZG)) wG in bG || (0, SG.c)(wG) || await IG(GG, wG);
      for (const [LG, yG] of Object.entries(bG))((0, wG.o)(LG) || (0, SG.c)(LG)) && await CG(GG, LG, yG)
    }

    function cG(GG, bG) {
      var ZG, wG;
      let SG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const LG = null !== (ZG = SG.debounceMs) && void 0 !== ZG ? ZG : 300,
        yG = null !== (wG = SG.pollMs) && void 0 !== wG ? wG : 1e3;
      let kG = !1,
        UG = null,
        YG = null,
        VG = null;
      const pG = () => {
          kG || (UG && clearTimeout(UG), UG = setTimeout((() => {
            UG = null, fG()
          }), LG))
        },
        fG = async () => {
          if (!kG) try {
            if (!await hG(GG, "readwrite")) return;
            const ZG = await EG(GG);
            kG || bG(ZG)
          } catch (ZG) {
            console.error("[WorldCodeDirectorySync] Failed to read watched directory", ZG)
          }
        };
      fG();
      const QG = window.FileSystemObserver;
      if (QG) try {
        VG = new QG((() => {
          pG()
        })), VG.observe(GG, {
          recursive: !0
        })
      } catch (KG) {
        console.warn("[WorldCodeDirectorySync] FileSystemObserver unavailable, falling back to polling", KG), VG = null
      }
      return VG || (YG = setInterval((() => {
        pG()
      }), yG)), () => {
        kG = !0, UG && clearTimeout(UG), YG && clearInterval(YG), VG && VG.disconnect()
      }
    }
  },
  4851: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => dG,
      e: () => JG
    });
    var wG = ZG(1006),
      SG = ZG.n(wG),
      LG = ZG(51),
      yG = ZG(1151),
      kG = ZG(4858),
      UG = ZG(1876),
      YG = ZG(2409),
      VG = ZG(4864),
      pG = ZG(1067);
    const fG = new WeakMap;
    let QG = 0;

    function KG(GG) {
      let bG = fG.get(GG);
      return void 0 === bG && (bG = QG++, fG.set(GG, bG)), bG
    }

    function hG(GG) {
      let {
        piece: bG
      } = GG;
      return "space" === bG.kind ? (0, pG.jsx)(pG.Fragment, {
        children: bG.text
      }) : (0, pG.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${bG.delayMs}ms`
        },
        children: (0, pG.jsx)(kG.b, {
          text: "icon" === bG.kind ? `[[${bG.icon}]]` : bG.text
        })
      })
    }

    function dG(GG) {
      let {
        display: bG
      } = GG;
      const {
        selectedLanguage: ZG
      } = (0, yG.w)(), wG = (0, LG.useMemo)((() => (0, VG.d)((0, VG.f)(bG).plan.pieces)), [bG, ZG.code]);
      return (0, pG.jsxs)("div", {
        className: SG()("Dialogue", {
          DialogueAnimateIn: !1 !== bG.animateIn
        }),
        children: [bG.speakerName && (0, pG.jsx)(UG.c, {
          text: bG.speakerName,
          className: "DialogueSpeaker"
        }), (0, pG.jsx)("p", {
          className: "DialogueLine",
          children: wG.map(((GG, bG) => 1 === GG.length && "space" === GG[0].kind ? GG[0].text : (0, pG.jsx)("span", {
            className: "DialogueGlue",
            children: GG.map(((GG, bG) => (0, pG.jsx)(hG, {
              piece: GG
            }, bG)))
          }, bG)))
        })]
      })
    }
    const JG = (0, LG.memo)((function() {
      const GG = (0, YG.i)("dialogue");
      return (0, pG.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: GG && (0, pG.jsx)(dG, {
          display: GG
        }, KG(GG))
      })
    }))
  },
  37026: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => hG,
      h: () => dG
    });
    var wG = ZG(51),
      SG = ZG(1389),
      LG = ZG(1945),
      yG = ZG(36973),
      kG = ZG(604),
      UG = ZG(1006),
      YG = ZG.n(UG),
      VG = ZG(1067);
    const pG = [fG()];

    function fG() {
      return {
        source: null,
        direction: null,
        Mq: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function QG(GG) {
      return pG.find((bG => null !== bG.source && bG.source === GG))
    }

    function KG(GG) {
      clearTimeout(GG.timeout), GG.source = null, GG.direction = null, GG.writtenAngle = null, GG.Mq && (GG.Mq.style.rotate = "")
    }
    const hG = (0, wG.memo)((function() {
      const [, GG] = (0, wG.useReducer)((GG => GG + 1), 0);
      return (0, SG.g)("damagedByOtherPlayer", (bG => {
        let {
          rZ: ZG,
          direction: wG
        } = bG;
        const SG = ZG || "nonDirectional",
          LG = function(GG) {
            var bG;
            const ZG = null !== (bG = QG(GG)) && void 0 !== bG ? bG : pG.find((GG => null === GG.source));
            if (ZG) return ZG;
            const wG = {
              source: null,
              direction: null,
              Mq: null,
              timeout: void 0,
              writtenAngle: null
            };
            return pG.push(wG), wG
          }(SG);
        clearTimeout(LG.timeout), LG.source = SG, LG.direction = wG, LG.timeout = setTimeout((() => {
          KG(LG), GG()
        }), 800), GG()
      })), (0, LG.b)("kill", (bG => {
        let {
          killer: ZG,
          victim: wG
        } = bG;
        const SG = ZG.local && QG(wG.id);
        SG && (KG(SG), GG())
      })), (0, wG.useEffect)((() => {
        const GG = (0, yG.c)("turnDamageIndicators", dG);
        return () => {
          GG(), pG.forEach(KG)
        }
      }), []), (0, VG.jsx)("div", {
        className: "DirectionalDamage",
        children: pG.map(((GG, bG) => (0, VG.jsx)("div", {
          ref: bG => {
            GG.Mq = bG
          },
          className: YG()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, kG.L)(GG.direction),
            DamageIndicatorIdle: null === GG.source
          })
        }, bG)))
      })
    }));

    function dG(GG) {
      for (const bG of pG) {
        if (null === bG.source || (0, kG.L)(bG.direction)) continue;
        const ZG = bG.direction - GG;
        ZG !== bG.writtenAngle && (bG.writtenAngle = ZG, bG.Mq.style.rotate = `${ZG}rad`)
      }
    }
  },
  8837: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => vG,
      g: () => WG,
      k: () => mG
    });
    var wG = ZG(51),
      SG = ZG(4561),
      LG = ZG(1092),
      yG = ZG(1389),
      kG = ZG(19),
      UG = ZG(3406),
      YG = ZG(2228),
      VG = ZG(1198),
      pG = ZG(2537),
      fG = ZG(1895),
      QG = ZG(1945),
      KG = ZG(1151),
      hG = ZG(17),
      dG = ZG(1579),
      JG = ZG(1006),
      rG = ZG.n(JG),
      zG = ZG(8839),
      EG = ZG(8842),
      oG = ZG(8849),
      XG = ZG(8750),
      uG = ZG(8854),
      iG = (ZG(8860), ZG(1067));
    let CG = null;

    function WG() {
      return null !== CG
    }

    function mG() {
      return "pad" === CG
    }

    function IG() {
      return "inGame" === hG.e.get("gameState") && !(0, dG.t)()
    }

    function FG(GG) {
      return (0, EG.v)(GG, VG.r, EG.e, EG.i, EG.l)
    }
    const vG = (0, wG.memo)((function() {
      const {
        t: GG
      } = (0, KG.w)(), {
        userContext: bG
      } = (0, LG.e)(), [ZG, hG] = (0, wG.useState)(null), [JG, WG] = (0, wG.useState)(null), mG = (0, wG.useRef)(null), vG = (0, wG.useCallback)((GG => {
        mG.current = GG, WG(GG)
      }), []), aG = (0, wG.useRef)(0), cG = (0, wG.useRef)(null), lG = (0, wG.useRef)({
        x: 0,
        y: 0
      }), [jG, PG] = (0, wG.useState)(0), MG = (0, wG.useMemo)((() => function(GG) {
        const bG = [];
        for (let wG = 0; wG < VG.r; wG++) {
          var ZG;
          bG.push(null !== (ZG = GG[wG]) && void 0 !== ZG ? ZG : null)
        }
        return bG
      }((0, pG.k)(bG.getPlayerCosmetics().emote))), [bG, jG]);
      (0, QG.b)("cosmeticsUpdated", (GG => {
        GG.some((GG => GG.local && "emote" === GG.FL)) && PG((GG => GG + 1))
      }));
      const AG = (0, wG.useRef)(!1),
        sG = (0, wG.useCallback)((function(GG) {
          let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === GG && (0, oG.g)(), AG.current = bG, lG.current = {
            x: 0,
            y: 0
          }, vG(null), hG(GG)
        }), [vG]),
        qG = (0, wG.useCallback)((() => {
          hG(null), vG(null), lG.current = {
            x: 0,
            y: 0
          }
        }), [vG]),
        nG = (0, wG.useCallback)((GG => {
          if (Date.now() < aG.current) return;
          const bG = (0, YG.j)(GG),
            ZG = !!bG.holdUntilMove,
            wG = ZG ? 600 : Math.ceil(1e3 * bG.animation.animation_length / YG.d) + 200;
          aG.current = Date.now() + wG, cG.current = GG, fG.gameBridge.send("playEmote", GG), fG.gameBridge.send("applyTemporaryThirdPerson", ZG ? {} : {
            durationMs: wG
          })
        }), []);
      (0, yG.g)("requestToggleEmoteWheel", (() => {
        null === ZG ? IG() && sG("click") : qG()
      })), (0, yG.g)("requestEmoteWheelHoldOpen", (() => {
        null === ZG && IG() && sG((0, zG.c)() ? "hold" : "click")
      })), (0, yG.g)("requestEmoteWheelPadOpen", (GG => {
        null !== ZG || !IG() || (0, XG.c)() || (0, uG.m)() || sG("pad", GG)
      })), (0, yG.g)("requestEmoteRepeatLast", (() => {
        if (null !== ZG || !IG() || (0, XG.c)() || (0, uG.m)()) return;
        const GG = cG.current;
        null !== GG && MG.includes(GG) ? nG(GG) : sG("pad", !0)
      }));
      const gG = () => {
        const GG = mG.current,
          bG = null !== GG ? MG[GG] : null;
        null !== bG && "pad" === ZG && Date.now() < aG.current || (qG(), null !== bG && nG(bG))
      };
      (0, yG.g)("emoteWheelPadAim", (GG => {
        if ("pad" !== ZG) return;
        const bG = (0, EG.E)(GG, VG.r, mG.current);
        vG(null !== bG && null !== MG[bG] ? bG : null)
      })), (0, yG.g)("requestEmoteWheelPadCommit", (GG => {
        "pad" !== ZG || GG && AG.current || gG()
      })), (0, yG.g)("appManagerUpdated|activeInputDevice", (GG => {
        null !== ZG && "pad" === ZG !== ("gamepad" === GG) && qG()
      })), (0, wG.useLayoutEffect)((() => (CG = ZG, (0, UG.z)("emoteWheel", "pad" === ZG), kG.l.xh(UG.r), () => {
        CG = null, (0, UG.z)("emoteWheel", !1), kG.l.xh(UG.r)
      })), [ZG]), (0, yG.g)("requestEmoteWheelHoldRelease", (() => {
        "hold" === ZG && gG()
      })), (0, yG.g)("requestEmoteWheelClose", (() => {
        null !== ZG && qG()
      })), (0, yG.g)("appManagerUpdated|gameState", (GG => {
        "inGame" !== GG && qG()
      }));
      const eG = () => {
        (0, dG.t)() && qG()
      };
      if ((0, yG.g)("appManagerUpdated|openEverythingMenuName", eG), (0, yG.g)("appManagerUpdated|openInGameMenuName", eG), (0, yG.g)("pointerLockUpdate", (GG => {
          GG || "hold" !== ZG || qG()
        })), (0, wG.useEffect)((() => {
          if (null === ZG) return;
          const GG = GG => {
            "Escape" === GG.key && (GG.stopImmediatePropagation(), GG.preventDefault(), qG())
          };
          return document.addEventListener("keydown", GG, !0), () => {
            document.removeEventListener("keydown", GG, !0)
          }
        }), [ZG, qG]), (0, SG.e)(!0, "click" === ZG, "EmoteWheelOverlay"), (0, wG.useEffect)((() => {
          if ("hold" === ZG) return fG.gameBridge.send("holdEmoteWheel", !0), () => {
            fG.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [ZG]), (0, wG.useEffect)((() => {
          if ("hold" !== ZG) return;
          const GG = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            bG = EG.r * GG,
            wG = EG.n * GG,
            SG = GG => {
              let ZG = lG.current.x + GG.movementX,
                SG = lG.current.y + GG.movementY;
              const LG = Math.hypot(ZG, SG);
              if (LG > bG) {
                const GG = bG / LG;
                ZG *= GG, SG *= GG
              }
              lG.current = {
                x: ZG,
                y: SG
              }, vG(function(GG, bG, ZG, wG) {
                if (Math.hypot(GG, bG) < ZG) return null;
                const SG = (0, EG.z)(GG, bG, VG.r);
                return null === wG[SG] ? null : SG
              }(ZG, SG, wG, MG))
            };
          return document.addEventListener("mousemove", SG), () => {
            document.removeEventListener("mousemove", SG)
          }
        }), [ZG, MG, vG]), null === ZG) return null;
      const RG = "hold" === ZG || "pad" === ZG,
        TG = null !== JG ? MG[JG] : null,
        HG = null !== TG ? (0, YG.j)(TG).displayName : GG("emotes:pickEmote");
      return (0, iG.jsx)("div", {
        className: rG()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === ZG
        }),
        onMouseDown: GG => {
          GG.target === GG.currentTarget && qG()
        },
        children: (0, iG.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * EG.r + "rem",
            height: 2 * EG.r + "rem"
          },
          children: [(0, iG.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${EG.m} ${EG.m}`,
            children: [MG.map(((bG, ZG) => {
              const wG = null !== bG,
                SG = RG && ZG === JG;
              return (0, iG.jsx)("path", {
                d: FG(ZG),
                className: rG()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: SG,
                  EmoteWheelWedgeDisabled: !wG
                }),
                onClick: GG => {
                  GG.stopPropagation(), null !== bG && (GG => {
                    qG(), nG(GG)
                  })(bG)
                },
                "aria-label": null !== bG ? (0, YG.j)(bG).displayName : GG("emotes:emptySlot")
              }, ZG)
            })), (0, iG.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: EG.e,
              cy: EG.e,
              r: EG.l
            }), (0, iG.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: EG.e,
              cy: EG.e,
              r: EG.i
            }), RG && null !== JG && (0, iG.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: FG(JG)
            })]
          }), MG.map(((GG, bG) => {
            const ZG = null !== GG,
              wG = RG && bG === JG,
              SG = (0, EG.B)(bG, VG.r),
              LG = EG.c * Math.cos(SG),
              yG = EG.c * Math.sin(SG);
            return (0, iG.jsx)("div", {
              className: rG()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: wG,
                EmoteWheelSlotIconDisabled: !ZG
              }),
              style: {
                left: `calc(50% + ${LG}rem)`,
                top: `calc(50% + ${yG}rem)`,
                backgroundImage: ZG ? `url(/textures/charSkins/previews/emote_${GG}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, bG)
          })), (0, iG.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: HG
          })]
        })
      })
    }))
  },
  36891: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => dG
    });
    var wG = ZG(51),
      SG = ZG(59),
      LG = ZG(1151),
      yG = ZG(1006),
      kG = ZG.n(yG),
      UG = ZG(1702),
      YG = ZG(1016),
      VG = ZG(1239),
      pG = ZG(1415),
      fG = ZG(1606),
      QG = ZG(1409),
      KG = ZG(1067);
    const hG = 14;

    function dG(GG) {
      let {
        className: bG,
        triggerElementRef: ZG,
        options: yG
      } = GG;
      const {
        t: dG
      } = (0, LG.w)(), [JG, rG] = (0, wG.useState)(!1), [zG, EG] = (0, wG.useState)({
        x: 0,
        y: 0
      }), oG = (0, wG.useRef)(null);
      (0, wG.useEffect)((() => {
        let GG = null;
        const bG = bG => {
            GG = {
              x: bG.clientX,
              y: bG.clientY
            }
          },
          wG = bG => {
            if (null === GG || !(0, QG.e)(GG, bG)) return;
            GG = null;
            const ZG = hG * (0, UG.getRemInPx)();
            EG({
              x: Math.min(bG.clientX, window.innerWidth - ZG - 5),
              y: bG.clientY
            }), rG((GG => !GG))
          },
          SG = GG => {
            var bG;
            null !== (bG = oG.current) && void 0 !== bG && bG.contains(GG.relatedTarget) || rG(!1)
          },
          LG = ZG.current;
        return LG.addEventListener("pointerdown", bG), LG.addEventListener("pointerup", wG), LG.addEventListener("mouseleave", SG), () => {
          LG.removeEventListener("pointerdown", bG), LG.removeEventListener("pointerup", wG), LG.removeEventListener("mouseleave", SG)
        }
      }), [ZG]), (0, wG.useEffect)((() => {
        if (JG) return (0, fG.d)("pointerdown", (GG => {
          !oG.current || oG.current.contains(GG.target) || ZG.current.contains(GG.target) || rG(!1)
        }))
      }), [JG, ZG]), (0, wG.useLayoutEffect)((() => {
        if (!JG || !oG.current) return;
        const GG = oG.current.getBoundingClientRect().height,
          bG = Math.max(5, window.innerHeight - GG - 5);
        zG.y > bG && EG({
          x: zG.x,
          y: bG
        })
      }), [JG, zG]), (0, VG.w)("popup", oG, (() => {
        rG(!1)
      }), JG);
      const XG = yG.filter((GG => !1 !== GG.show));
      return JG && 0 !== XG.length ? (0, SG.createPortal)((0, KG.jsx)("div", {
        ref: oG,
        className: kG()("FloatingActions", {
          [bG]: bG
        }),
        style: {
          width: `${hG}rem`,
          top: zG.y,
          left: zG.x
        },
        children: XG.map((GG => {
          let {
            icon: bG,
            text: ZG,
            onPointerDown: wG,
            analyticsClick: SG
          } = GG;
          return (0, KG.jsxs)("div", {
            className: "FloatingAction",
            "data-pad-focusable": !0,
            onPointerUp: GG => {
              void 0 !== SG && (0, pG.reportAnalyticsClick)(SG), wG(GG), rG(!1), GG.stopPropagation()
            },
            children: [(0, KG.jsx)(YG.c, {
              name: bG
            }), (0, KG.jsx)("div", {
              children: dG(ZG)
            })]
          }, ZG)
        }))
      }), function() {
        var GG;
        return null !== (GG = document.querySelector(".WholeAppWrapperInner")) && void 0 !== GG ? GG : document.body
      }()) : null
    }
  },
  37044: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => Ly
    });
    var wG = ZG(36946),
      SG = ZG(51),
      LG = ZG(2053),
      yG = ZG(4549),
      kG = ZG(4558),
      UG = ZG(2409),
      YG = ZG(1895),
      VG = ZG(1067);

    function pG(GG) {
      let {
        className: bG,
        style: ZG,
        vw: wG,
        maxPx: SG,
        children: LG
      } = GG;
      console.assert("number" === typeof wG && "number" === typeof SG, "vw and maxPx passed to Text must be numbers");
      const yG = window.innerWidth * (wG / 100) > SG ? `${SG}px` : `${wG}vw`;
      return (0, VG.jsx)("div", {
        className: bG,
        style: {
          ...ZG,
          fontSize: yG
        },
        children: LG
      })
    }
    var fG = ZG(37052),
      QG = ZG(1393),
      KG = ZG(19),
      hG = ZG(1923),
      dG = ZG(1016);

    function JG(GG) {
      let {
        tasks: bG,
        lastDisplayedTasks: ZG
      } = GG;
      return (0, VG.jsx)(VG.Fragment, {
        children: Object.keys(bG).map((GG => (0, VG.jsx)(rG, {
          task: bG[GG],
          lastDisplayedAs: ZG[GG]
        }, bG[GG].text)))
      })
    }

    function rG(GG) {
      let {
        task: bG,
        lastDisplayedAs: ZG
      } = GG;
      const [wG, LG] = (0, SG.useState)(null !== ZG && void 0 !== ZG && ZG.progress ? ZG.progress / bG.goal : 0), [yG, kG] = (0, SG.useState)(!1), [UG, YG] = (0, SG.useState)(bG.claimed || !1);
      return (0, SG.useEffect)((() => {
        LG(bG.progress / bG.goal)
      }), [bG.progress, bG.goal]), UG ? null : (0, VG.jsxs)("div", {
        className: "Task",
        children: [(0, VG.jsx)("div", {
          className: "TaskDescDiv",
          children: (0, VG.jsx)(pG, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: bG.text
          })
        }), bG.progress < bG.goal ? (0, VG.jsxs)("div", {
          className: "TaskProgress",
          children: [0 !== wG ? (0, VG.jsx)("div", {
            className: "TaskProgressForeground",
            style: {
              width: 100 * wG + "%"
            }
          }) : null, (0, VG.jsx)("div", {
            className: "TaskProgressText",
            children: `${bG.progress}/${bG.goal}`
          })]
        }) : (0, VG.jsx)(QG.k, {
          className: "ClaimRewardButton",
          onClick: () => {
            kG(!0)
          },
          children: (0, VG.jsx)(pG, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: "Claim Reward"
          })
        }), yG ? (0, VG.jsx)(zG, {
          task: bG,
          close: () => {
            bG.claimed = !0, YG(!0), kG(!1)
          }
        }) : null]
      })
    }

    function zG(GG) {
      let {
        task: bG,
        close: ZG
      } = GG;
      const [wG, LG] = (0, SG.useState)({}), [yG, kG] = (0, SG.useState)("closed");
      (0, SG.useEffect)((() => {
        let GG;
        return "animStart" === yG && (GG = setTimeout((() => {
          kG("animEnd")
        }), 700)), () => {
          clearTimeout(GG)
        }
      }), [yG]), (0, fG.c)((() => {
        YG.gameBridge.send("completeTask", bG.text)
      }));
      const pG = (0, UG.i)("currencyAmounts");
      return (0, VG.jsxs)("div", {
        className: "RewardBackground",
        onClick: () => {
          if ("animEnd" === yG)
            if (0 === bG.rewards.length) ZG(), YG.gameBridge.send("completeTask", bG.text);
            else {
              const GG = {
                ...hG.c.get("currencyAmounts")
              };
              for (const bG in wG) GG[bG] = {
                ...GG[bG],
                amount: GG[bG].amount + wG[bG]
              };
              hG.c.apply({
                currencyAmounts: GG
              }), kG("closed")
            }
          else "closed" === yG && (LG(bG.rewards.pop()), kG("animStart"))
        },
        children: [(0, VG.jsx)("img", {
          className: "Chest",
          alt: "closed" !== yG ? "open chest" : "closed chest",
          src: `/textures/miscImages/Treasure Chest ${"closed"!==yG?"open":"closed"}.png`
        }), (0, VG.jsx)("div", {
          className: "Rewards",
          children: "closed" !== yG ? Object.keys(wG).map((GG => {
            const bG = null === pG || void 0 === pG ? void 0 : pG[GG];
            return !bG || bG.hidden ? null : (0, VG.jsxs)("div", {
              className: "Reward",
              children: [(0, VG.jsx)(dG.c, {
                name: bG.icon,
                className: "3x UiCurrencyIcon RewardIcon",
                style: {
                  color: bG.iconColour
                }
              }), (0, VG.jsx)("div", {
                className: "RewardAmountText",
                children: "animStart" === yG ? 0 : wG[GG]
              })]
            }, GG)
          })) : null
        }), "animStart" === yG ? (0, VG.jsx)(EG, {}) : null, (0, VG.jsx)("div", {
          className: "ChestsLeft",
          children: bG.rewards.length
        })]
      })
    }

    function EG() {
      const [GG, bG] = (0, SG.useState)(0);
      (0, SG.useEffect)((() => {
        bG(1)
      }), []);
      return (0, VG.jsx)(VG.Fragment, {
        children: Array.from({
          length: 40
        }).map(((bG, ZG) => (0, VG.jsx)(dG.c, {
          name: "star",
          className: "3x UiCurrencyIcon OpenStar",
          style: {
            bottom: 50 * GG * Math.cos(ZG / 40 * (2 * Math.PI)) + 50 + "vh",
            left: 50 * GG * Math.sin(ZG / 40 * (2 * Math.PI)) + "vh",
            opacity: 0 === GG ? 1 : 0
          }
        }, ZG)))
      })
    }
    KG.l.subscribe("requiredLibrariesLoaded", (() => {
      setTimeout((() => {
        const GG = new Image,
          bG = new Image;
        GG.src = "/textures/miscImages/Treasure Chest open.png", bG.src = "/textures/miscImages/Treasure Chest closed.png"
      }), 1e4)
    }));
    var oG = ZG(3113),
      XG = ZG(1092),
      uG = ZG(1876),
      iG = ZG(1389),
      CG = ZG(352),
      WG = ZG(1945),
      mG = ZG(1302);

    function IG(GG) {
      var bG, ZG;
      let {
        byId: wG,
        localId: SG
      } = GG;
      return null === SG ? null : null !== (bG = null === (ZG = wG[SG]) || void 0 === ZG ? void 0 : ZG.name) && void 0 !== bG ? bG : null
    }

    function FG(GG) {
      let {
        lbStats: bG,
        storedState: ZG = {}
      } = GG;
      const {
        userContext: wG
      } = (0, XG.e)(), LG = (0, WG.c)("players", IG), [yG, kG] = (0, SG.useState)(ZG.selectedCat || (null === bG || void 0 === bG ? void 0 : bG[0]) || null), [UG, pG] = (0, SG.useState)(ZG.selectedTimeframe || "Today"), [fG, QG] = (0, SG.useState)(null);
      (0, SG.useEffect)((() => {
        null === yG && null !== bG && bG.length > 0 && kG(bG[0])
      }), [bG, yG]);
      const [KG, hG] = (0, SG.useState)(ZG.seeingTop || !1), [dG, JG] = (0, SG.useState)(!1), rG = (0, SG.useCallback)((() => {
        null !== yG && null !== UG && (YG.gameBridge.send("requestLeaderboard", {
          category: yG.value,
          timeframe: UG,
          seeTop: KG
        }), EG(!0), cG && lG(null))
      }), [yG, UG, ZG, KG]);
      (0, SG.useEffect)((() => {
        rG(), ZG.selectedCat = yG, ZG.selectedTimeframe = UG, ZG.seeingTop = KG
      }), [yG, UG, ZG, KG, rG]), (0, SG.useEffect)((() => {
        if ((null === fG || void 0 === fG ? void 0 : fG.length) > 0)
          if (KG) KG && JG(null === FG(fG));
          else {
            for (const GG of fG)
              if (1 === GG.place) return void JG(!1);
            JG(!0)
          }
      }), [fG, KG]), (0, iG.g)("leaderboardResponse", (GG => {
        let {
          category: ZG,
          timeframe: wG,
          data: SG
        } = GG;
        for (let LG = 0; LG < bG; LG++)
          if (bG[LG].value === ZG) {
            kG(bG[LG]);
            break
          } pG(wG), QG(SG), EG(!1)
      }));
      const [zG, EG] = (0, SG.useState)(!0);

      function FG(GG) {
        const bG = IG(YG.gameBridge.latest("players"));
        for (let ZG = 0; ZG < GG.length; ZG++)
          if (GG[ZG].name === bG) return GG[ZG].place;
        return null
      }
      const [vG, aG] = (0, SG.useState)(!1), [cG, lG] = (0, SG.useState)(null);
      (0, SG.useEffect)((() => {
        if (fG && !vG) {
          const GG = FG(fG);
          GG < (ZG.lastSeenPlayerPlace || 0) && lG(ZG.lastSeenPlayerPlace - GG), aG(!0)
        }
      }), [fG, ZG, vG]), (0, SG.useEffect)((() => () => {
        fG && (ZG.lastSeenPlayerPlace = FG(fG))
      }), [fG, ZG]);
      const jG = (0, SG.useRef)(null),
        [PG, MG] = (0, SG.useState)(void 0);
      return (0, SG.useEffect)((() => {
        var GG, bG;
        PG !== (null === (GG = jG.current) || void 0 === GG ? void 0 : GG.offsetHeight) && MG(null === (bG = jG.current) || void 0 === bG ? void 0 : bG.offsetHeight)
      })), wG.isLoggedIn() ? (0, VG.jsxs)(VG.Fragment, {
        children: [(0, VG.jsxs)("div", {
          className: "LeaderboardSelectors",
          children: [(0, VG.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, VG.jsx)(oG.b, {
              options: bG.map((GG => ({
                label: GG.label,
                value: GG.value
              }))),
              value: yG,
              onChange: GG => {
                kG(GG)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), (0, VG.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, VG.jsx)(oG.b, {
              options: CG.ad.map((GG => ({
                value: GG,
                label: GG,
                className: "LBDropdownMenuItem"
              }))),
              value: UG,
              onChange: GG => {
                pG(GG.label)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), dG ? (0, VG.jsx)("div", {
            className: "SeeTopText",
            onClick: () => {
              hG(!KG)
            },
            children: KG ? "See Yourself" : "See Top"
          }) : null]
        }), (0, VG.jsx)("div", {
          className: "LBTableWrapper",
          children: zG ? (0, VG.jsx)("div", {
            className: "LoaderContainer",
            children: (0, VG.jsx)(mG.b, {})
          }) : null === cG ? (0, VG.jsx)(VG.Fragment, {
            children: (0, VG.jsxs)("table", {
              className: "LBTable",
              children: [(0, VG.jsx)("thead", {
                className: "LBTableTHead",
                ref: jG,
                children: (0, VG.jsxs)("tr", {
                  children: [(0, VG.jsx)("th", {
                    className: "LBTablePlaceTH LBTableTH",
                    children: "PLACE"
                  }), (0, VG.jsx)("th", {
                    className: "LBTablePlayerTH LBTableTH",
                    children: "PLAYER"
                  }), (0, VG.jsx)("th", {
                    className: "LBTableValueTH LBTableTH",
                    children: yG.label.toUpperCase()
                  })]
                })
              }), (0, VG.jsx)("tbody", {
                children: fG.map((GG => (0, VG.jsxs)("tr", {
                  className: "LBTableTR " + (GG.name === LG ? "LBTableTRYou" : ""),
                  children: [(0, VG.jsx)("td", {
                    className: "LBTableTD",
                    children: `#${GG.place}`
                  }), (0, VG.jsx)("td", {
                    className: "LBTableTD",
                    children: (0, VG.jsx)(uG.c, {
                      text: [{
                        entityName: GG.name
                      }]
                    })
                  }), (0, VG.jsx)("td", {
                    className: "LBTableTD",
                    children: GG.stat
                  })]
                }, GG.name)))
              })]
            })
          }) : (0, VG.jsx)("div", {
            className: "LBIncreaseWrapper",
            onClick: () => {
              lG(null)
            },
            children: (0, VG.jsxs)("div", {
              className: "LBIncreaseDiv",
              children: [(0, VG.jsx)("div", {
                className: "TriangleUp"
              }), (0, VG.jsx)("div", {
                className: "LBIncreaseText",
                children: `${cG} Place${cG>1?"s":""}`
              })]
            })
          })
        })]
      }) : (0, VG.jsxs)("div", {
        className: "LBLoginDiv",
        children: [(0, VG.jsx)("div", {
          className: "LBLoginInfo",
          children: "Login to see the leaderboard"
        }), (0, VG.jsx)("div", {
          className: "LBLoginInfo",
          children: "You can login from the top left homescreen"
        })]
      })
    }
    var vG = ZG(3100),
      aG = ZG(80),
      cG = ZG(29),
      lG = ZG(3404);
    const jG = (0, SG.memo)((function(GG) {
      let {
        show: bG,
        onClose: ZG
      } = GG;
      (0, vG.b)();
      const wG = (0, UG.i)("_tasks"),
        LG = (0, UG.i)("_availableLeaderboards"),
        [YG, pG] = (0, SG.useState)({});
      wG && Object.keys(wG).length > 0 && 0 === Object.keys(YG).length && pG(wG);
      const [fG] = (0, SG.useState)({
        tasks: {},
        leaderboard: {}
      }), QG = {
        tasks: {
          Title: "Tasks",
          getIsDefined: () => !!wG && Object.keys(wG).length > 0,
          content: (0, VG.jsx)(JG, {
            tasks: wG,
            lastDisplayedTasks: YG
          })
        },
        leaderboard: {
          Title: "Leaderboard",
          getIsDefined: () => (null === LG || void 0 === LG ? void 0 : LG.length) > 0,
          content: (0, VG.jsx)(FG, {
            lbStats: LG,
            storedState: fG.leaderboard
          })
        }
      };

      function KG() {
        for (const GG in QG)
          if (QG[GG].getIsDefined()) return GG;
        return null
      }
      const [hG, dG] = (0, SG.useState)(KG());

      function rG() {
        pG({
          ...wG
        }), ZG()
      }(0, SG.useEffect)((() => {
        hG || dG(KG())
      }), [KG()]), (0, kG.d)(!0, hG && bG), (0, SG.useEffect)((() => {
        bG && !hG && (console.log("CLOSE"), rG())
      }), [bG, hG]);
      const [zG, EG] = (0, SG.useState)(!1);
      return (0, SG.useEffect)((() => {
        bG && hG && !zG && EG(!0)
      }), [bG, zG, hG]), (0, SG.useEffect)((() => {
        !zG && wG && "tasks" !== hG && dG("tasks")
      }), [zG, wG, hG]), (0, VG.jsx)(VG.Fragment, {
        children: hG ? (0, VG.jsx)(lG.d, {
          className: "RetentionFeaturesWrapper",
          show: bG,
          children: (0, VG.jsxs)(yG.b, {
            close: rG,
            escDoesExit: !1,
            closeClassnameList: ["VerticalMenuScreenDiv"],
            togglePointerLock: !1,
            globallyUniqueKey: "RetentionFeaturesComponent",
            children: [(0, VG.jsxs)("div", {
              className: "VerticalMenuScreenDiv",
              children: [(0, VG.jsx)(MG, {}), (0, VG.jsxs)("div", {
                className: "MenuDiv",
                children: [(0, VG.jsx)(PG, {
                  setCategory: dG,
                  menuCategories: QG,
                  selectedCat: hG
                }), (0, VG.jsx)("div", {
                  className: "MenuCategoryContainer",
                  children: QG[hG].content
                })]
              })]
            }), (0, VG.jsx)("div", {
              className: "BottomScreenMenuWrapper",
              children: aG.featureFlags.useDiscord && (0, VG.jsx)("div", {
                className: "DiscordMenuDivDiv",
                children: (0, VG.jsx)("div", {
                  className: "DiscordMenuDiv",
                  children: (0, VG.jsx)(AG, {
                    tasks: wG
                  })
                })
              })
            })]
          })
        }) : null
      })
    }));

    function PG(GG) {
      let {
        selectedCat: bG,
        setCategory: ZG,
        menuCategories: wG
      } = GG;
      return (0, VG.jsx)("div", {
        className: "MenuHeader",
        children: Object.keys(wG).map((GG => wG[GG].getIsDefined() ? (0, VG.jsx)("div", {
          className: "MenuHeaderCategory " + (GG === bG ? "SelectedHeaderCat" : "UnselectedHeaderCat"),
          onClick: () => {
            ZG(GG)
          },
          children: wG[GG].Title
        }, GG) : null))
      })
    }

    function MG() {
      const GG = (0, UG.i)("currencyAmounts");
      return (0, VG.jsx)("div", {
        className: "TopScreenCurrencies",
        children: Object.keys(null !== GG && void 0 !== GG ? GG : {}).map((bG => {
          const ZG = GG[bG];
          return ZG.hidden ? null : (0, VG.jsxs)("div", {
            className: "TopScreenCurrencyDiv",
            children: [(0, VG.jsx)(dG.c, {
              name: ZG.icon,
              className: "3x UiCurrencyIcon",
              style: {
                color: ZG.iconColour
              }
            }), (0, VG.jsx)("div", {
              className: "UiCurrencyAmount",
              children: ZG.amount
            })]
          }, bG)
        }))
      })
    }

    function AG(GG) {
      let {
        tasks: bG
      } = GG;
      return (0, VG.jsxs)("a", {
        className: "MenuDiscordButtonWrapper",
        href: "https://discord.gg/playbloxd",
        target: "_blank",
        rel: "noreferrer",
        children: [(0, VG.jsx)(dG.c, {
          name: "discord",
          kit: "brands",
          className: "DiscordButton",
          onClick: () => {
            cG.h.setItem("DiscordPressed", !0), YG.gameBridge.send("setServerCookie", {
              key: "joinDiscord",
              value: "true"
            }), "joinDiscord" in bG && KG.l.xh("clientTaskProgress", {
              taskId: "joinDiscord",
              progress: 1
            })
          }
        }), (0, VG.jsx)(LG.e, {})]
      })
    }
    var sG = ZG(17),
      qG = ZG(1579),
      nG = ZG(36871),
      gG = ZG(34376),
      eG = ZG(4655),
      RG = ZG(140),
      TG = ZG(1173),
      HG = ZG(1320),
      tG = ZG(2632),
      DG = ZG(1151),
      NG = ZG(1583),
      OG = ZG(2369),
      xG = ZG(2362),
      BG = ZG(1827),
      Gb = ZG(2013),
      bb = ZG(1222),
      Zb = ZG(1415),
      wb = ZG(37055),
      Sb = ZG(37060),
      Lb = ZG(37067),
      yb = ZG(37071),
      kb = ZG(37079),
      Ub = ZG(2693);

    function Yb(GG) {
      let {
        playersHere: bG,
        exclude: ZG,
        Kr: wG
      } = GG;
      const {
        t: LG
      } = (0, DG.w)(), yG = (0, Ub.k)(Ub.h), [kG, UG] = (0, SG.useState)([]), YG = [], pG = (GG, bG) => {
        const wG = [...ZG, ...YG.map((GG => GG.player.name))];
        YG.length < 3 && !(0, Sb.e)(wG, GG.name) && YG.push({
          player: GG,
          status: bG
        })
      };
      for (const SG of bG) pG((0, kb.f)(SG.name, SG.cosmetics, SG.ranks), LG("worldSocial:inThisWorld"));
      if ("loaded" === yG.state.status)
        for (const SG of yG.state.recentPlayers) SG.preview.name && !SG.preview.isError && pG({
          ...SG.preview,
          location: {
            status: "offline"
          }
        }, LG("worldSocial:playedWithYou"));
      const fG = GG => {
        UG((bG => [...bG, GG])), wG(GG).finally((() => {
          UG((bG => bG.filter((bG => bG !== GG))))
        }))
      };
      return (0, VG.jsx)(VG.Fragment, {
        children: YG.map(((GG, bG) => {
          let {
            player: ZG,
            status: wG
          } = GG;
          return (0, VG.jsx)(kb.d, {
            zIndex: YG.length - bG,
            player: ZG,
            status: wG,
            onSendFriendRequest: () => {
              fG(ZG.name)
            },
            actions: (0, VG.jsx)(HG.h, {
              tooltipInner: (0, VG.jsx)(VG.Fragment, {
                children: LG("recentPlayers:addFriend")
              }),
              delayShow: 0,
              hoverOnly: !0,
              children: (0, VG.jsx)(QG.d, {
                className: "FriendRequestButton",
                disabled: kG.includes(ZG.name),
                ariaLabel: `${LG("recentPlayers:addFriend")} ${ZG.name}`,
                onClick: () => {
                  fG(ZG.name)
                },
                children: (0, VG.jsx)(dG.c, {
                  name: "user-plus"
                })
              })
            })
          }, `suggestion:${ZG.name}`)
        }))
      })
    }
    var Vb = ZG(37089),
      pb = ZG(37093),
      fb = ZG(1177),
      Qb = ZG(1428),
      Kb = ZG(4347),
      hb = ZG(283),
      db = ZG(4635);
    const Jb = ["auto", "auto_existing"];

    function rb(GG) {
      return Jb.includes(GG)
    }

    function zb(GG, bG) {
      const ZG = (0, fb.wb)(GG);
      return null !== bG && (0, fb.wb)(bG) === ZG || (0, db.b)().some((GG => (0, fb.wb)(GG.name) === ZG))
    }
    const Eb = new Set;

    function ob(GG) {
      return `worldSocialSeen:${GG}`
    }

    function Xb(GG) {
      return !GG || Eb.has(GG) || !0 === cG.h.getItem(ob(GG))
    }

    function ub(GG) {
      GG && !Eb.has(GG) && (Eb.add(GG), cG.h.setItem(ob(GG), !0))
    }
    var ib = ZG(2421),
      Cb = ZG(2428);

    function Wb(GG) {
      let {
        show: bG,
        onClose: ZG,
        opener: wG
      } = GG;
      const {
        lobbyName: LG,
        shownLobbyName: kG
      } = (0, WG.f)("connectedGame");
      return (0, SG.useEffect)((() => {
        bG && (0, Zb.reportAnalyticsClick)({
          id: "world_social.open",
          value: wG
        })
      }), [bG]), (0, VG.jsx)(yG.b, {
        show: bG && null !== LG,
        close: ZG,
        togglePointerLock: !1,
        className: "WorldSocialBackgroundScreen",
        globallyUniqueKey: "WorldSocialPopup",
        doGameplayStartStopOnShow: !0,
        ignorePressesAsShown: "icon" !== wG,
        children: bG && null !== LG && (0, VG.jsx)(mb, {
          lobbyName: LG,
          worldCode: null !== kG && void 0 !== kG ? kG : LG,
          onClose: ZG
        }, LG)
      })
    }

    function mb(GG) {
      var bG;
      let {
        lobbyName: ZG,
        worldCode: wG,
        onClose: LG
      } = GG;
      const {
        t: yG
      } = (0, DG.w)(), kG = (0, SG.useRef)(null), {
        settings: UG,
        loading: YG,
        answered: pG,
        change: fG,
        retry: KG
      } = (0, wb.j)(ZG), hG = (0, NG.k)(), JG = (0, WG.f)("players"), rG = (0, WG.f)("hiddenPlayerNames"), [zG, EG] = (0, SG.useState)([]), [oG, uG] = (0, SG.useState)([]), [iG, CG] = (0, SG.useState)(!1), IG = (0, ib.c)(), FG = (0, SG.useMemo)((() => {
        var GG, bG;
        const ZG = null === JG.localId ? null : null !== (GG = null === (bG = JG.byId[JG.localId]) || void 0 === bG ? void 0 : bG.name) && void 0 !== GG ? GG : null;
        return JG.ids.flatMap((GG => {
          const bG = JG.byId[GG];
          return null !== bG && void 0 !== bG && bG.name && bG.name !== ZG ? [{
            name: bG.name,
            cosmetics: bG.cosmetics,
            ranks: bG.ranks
          }] : []
        }))
      }), [JG]), vG = (0, SG.useMemo)((() => (0, Sb.d)(hG.friends, ZG, FG.map((GG => GG.name)))), [hG.friends, ZG, FG]), cG = aG.featureFlags.canSeeRealPlayerNames ? FG.filter((GG => null === (0, bb.e)(GG.name, rG))) : [], lG = null !== UG && void 0 !== UG && UG.canManage ? UG : null, jG = null !== lG, PG = null !== (bG = null === UG || void 0 === UG ? void 0 : UG.visibility) && void 0 !== bG ? bG : null, MG = "whitelist" === (null === lG || void 0 === lG ? void 0 : lG.visibility), AG = "private" === PG || "whitelist" === PG && !jG, {
        userContext: sG
      } = (0, XG.e)();
      (0, SG.useEffect)((() => {
        jG && zb(ZG, sG.getPersonalWorldLobbyName()) && ub(sG.whamm)
      }), [jG, ZG, sG]);
      const qG = AG ? yG("whitelist" === PG ? "socialBar:inviteWorldManagersOnly" : jG ? "worldSocial:privateLinkRow" : "socialBar:inviteWorldPrivate") : null,
        gG = null === qG;
      (0, SG.useEffect)((() => AG ? void 0 : BG.g.quietFriendAdded()), [AG]), (0, SG.useEffect)((() => BG.g.quietFriendRequests()), []);
      const Ub = (0, SG.useRef)(!1);
      (0, SG.useEffect)((() => {
        const GG = kG.current,
          bG = !Ub.current;
        Ub.current = !0;
        const ZG = null === document.activeElement || document.activeElement === document.body;
        null !== GG && void 0 !== GG && GG.contains(document.activeElement) || !bG && !ZG || (0, nG.d)() || null === GG || void 0 === GG || GG.focus({
          preventScroll: !0
        })
      }), [gG]), (0, SG.useEffect)((() => {
        const GG = GG => {
          "Escape" !== GG.key || null !== document.activeElement && document.activeElement !== document.body || LG()
        };
        return document.addEventListener("keydown", GG), () => {
          document.removeEventListener("keydown", GG)
        }
      }), [LG]);
      const fb = null === UG && !pG,
        Qb = (YG || hG.loading) && 0 === hG.friends.length,
        Kb = hG.friends.flatMap((GG => GG.name ? [GG.name] : [])),
        hb = zG.filter((GG => !(0, Sb.e)(Kb, GG))),
        db = vG.length + 3,
        Jb = hb.length + db,
        rb = iG ? hG.requests : hG.requests.slice(0, 1),
        Eb = async function(GG) {
          let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (const ZG of (0, Sb.f)(GG, eG.B)) {
            if (!await fG({
                whitelistAdd: ZG
              }, (GG => (0, Sb.k)(GG, ZG, !0)), {
                quiet: bG
              })) return !1
          }
          return !0
        }, ob = GG => {
          if (MG && lG) return {
            on: (0, Sb.e)(lG.whitelist, GG),
            onChange: bG => {
              (0, Zb.reportAnalyticsClick)({
                id: "world_social.whitelist_toggle",
                value: bG ? "on" : "off"
              }), fG(bG ? {
                whitelistAdd: [GG]
              } : {
                whitelistRemove: GG
              }, (ZG => (0, Sb.k)(ZG, [GG], bG)))
            }
          }
        }, Xb = async (GG, bG) => {
          (0, Zb.reportAnalyticsClick)({
            id: "world_social.add_friend",
            value: bG
          });
          const ZG = await (0, xG.j)(GG, "world_social");
          return (0, xG.d)(ZG, GG, {
            announceSent: !1
          }), "failed" !== ZG.kind && ("sent" === ZG.kind && EG((bG => (0, Sb.e)(bG, GG) ? bG : [...bG, GG])), MG && await Eb([GG]), !0)
        };
      return (0, VG.jsxs)("div", {
        ref: kG,
        className: "WorldSocialPopup AnimFadeInScaleUp",
        tabIndex: -1,
        onKeyDown: GG => {
          GG.target === GG.currentTarget && " " === GG.key && GG.preventDefault()
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "WorldSocialTitle",
        children: [(0, VG.jsxs)("div", {
          className: "WorldSocialHeader",
          children: [(0, VG.jsx)("h2", {
            id: "WorldSocialTitle",
            className: "WorldSocialTitle SmallTextBold",
            children: yG("worldSocial:title")
          }), (0, VG.jsx)(QG.j, {
            className: "WorldSocialClose",
            onClick: LG
          })]
        }), fb && (0, VG.jsx)("div", {
          className: "WorldSocialLoading",
          children: (0, VG.jsx)(mG.b, {})
        }), !fb && (0, VG.jsxs)(VG.Fragment, {
          children: [(0, VG.jsx)(Lb.d, {
            worldCode: wG,
            message: qG
          }), null === UG && !YG && (0, VG.jsx)("button", {
            type: "button",
            className: "WorldSocialLoadFailed",
            onClick: KG,
            children: yG("worldSocial:loadFailed")
          }), jG && null !== PG && (0, VG.jsx)(yb.c, {
            visibility: PG,
            onPick: GG => {
              (async GG => {
                if (GG === PG) return;
                (0, Zb.reportAnalyticsClick)({
                  id: "world_social.set_mode",
                  value: GG
                });
                const bG = [...(0, pb.e)(ZG), ...oG],
                  wG = "whitelist" === GG && UG ? (0, Sb.c)(vG, bG, UG.whitelist) : [];
                await fG({
                  setVisibility: GG
                }, (bG => ({
                  ...bG,
                  visibility: GG
                }))) && await Eb(wG)
              })(GG)
            }
          }), hG.requests.length > 0 && (0, VG.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, VG.jsx)(tG.e, {
              label: (0, VG.jsxs)(VG.Fragment, {
                children: [(0, VG.jsx)(dG.c, {
                  name: Gb.d
                }), " ", yG("socialBar:requests")]
              }),
              meta: (0, VG.jsxs)(VG.Fragment, {
                children: [hG.requests.length, hG.requests.length === TG.k && (0, VG.jsx)("span", {
                  className: "SocialSectionTitleLimit",
                  children: yG("socialBar:limitReached")
                }), !iG && hG.requests.length > 1 && (0, VG.jsx)("button", {
                  type: "button",
                  className: "WorldSocialMoreRequests",
                  onClick: () => {
                    CG(!0)
                  },
                  children: yG("worldSocial:moreRequests", {
                    count: hG.requests.length - 1
                  })
                })]
              })
            }), (0, VG.jsx)("div", {
              className: "PlayerRows",
              children: rb.map(((GG, bG) => (0, VG.jsx)(kb.d, {
                zIndex: rb.length - bG,
                player: GG,
                actions: (0, VG.jsxs)(VG.Fragment, {
                  children: [(0, VG.jsx)(HG.h, {
                    tooltipInner: (0, VG.jsx)(VG.Fragment, {
                      children: yG("general:accept")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, VG.jsx)(QG.d, {
                      className: "FriendRequestButton",
                      ariaLabel: `${yG("general:accept")} ${GG.name}`,
                      analyticsClick: {
                        id: "social.accept_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, xG.f)(GG.name, !0, {
                          source: "world_social"
                        })
                      },
                      children: (0, VG.jsx)(dG.c, {
                        name: "check"
                      })
                    })
                  }), (0, VG.jsx)(HG.h, {
                    tooltipInner: (0, VG.jsx)(VG.Fragment, {
                      children: yG("general:decline")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, VG.jsx)(QG.h, {
                      className: "FriendRequestButton",
                      ariaLabel: `${yG("general:decline")} ${GG.name}`,
                      analyticsClick: {
                        id: "social.decline_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, xG.f)(GG.name, !1, {
                          source: "world_social"
                        })
                      },
                      children: (0, VG.jsx)(dG.c, {
                        name: "xmark"
                      })
                    })
                  })]
                })
              }, `incoming:${GG.name}`)))
            })]
          }), (0, VG.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, VG.jsx)(tG.e, {
              label: (0, VG.jsxs)(VG.Fragment, {
                children: [(0, VG.jsx)(dG.c, {
                  name: Gb.c
                }), " ", yG("socialBar:friends")]
              }),
              meta: hG.loaded && !AG ? hG.friends.length : void 0
            }), (0, VG.jsx)(Vb.b, {
              label: yG("socialBar:sendRequest"),
              icon: "user-plus",
              placeholder: yG("worldSocial:addFriendPlaceholder"),
              onSubmit: async GG => await Xb(GG, "field") ? {
                ok: !0
              } : {
                ok: !1,
                error: null
              }
            }), Qb && (0, VG.jsx)("div", {
              className: "WorldSocialLoading",
              children: (0, VG.jsx)(mG.b, {})
            }), !Qb && (0, VG.jsxs)(VG.Fragment, {
              children: [(0, VG.jsxs)("div", {
                className: "PlayerRows",
                children: [hb.map(((GG, bG) => (0, VG.jsx)(kb.d, {
                  zIndex: Jb - bG,
                  player: (0, kb.f)(GG, null),
                  status: yG("worldSocial:requestSent"),
                  Tp: ob(GG)
                }, `request:${GG}`))), !AG && vG.map(((GG, bG) => (0, VG.jsx)(kb.c, {
                  zIndex: db - bG,
                  row: GG,
                  Tp: ob(GG.friend.name),
                  canInvite: (0, Sb.b)(UG) && "here" !== GG.place,
                  invited: oG.includes(GG.friend.name),
                  onInvite: () => {
                    (async GG => {
                      (0, Zb.reportAnalyticsClick)({
                        id: "world_social.invite",
                        value: "friend"
                      });
                      const bG = () => {
                        uG((bG => bG.filter((bG => bG !== GG))))
                      };
                      uG((bG => [...bG, GG]));
                      const wG = (0, Sb.g)(UG, GG);
                      if ("none" !== wG) {
                        const ZG = Eb([GG], "quiet" === wG);
                        if ("required" === wG && !await ZG) return void bG()
                      }
                      await (0, OG.p)(GG, "game", {
                        announceSent: !1,
                        source: "world_social"
                      }) ? ((0, pb.f)(ZG, GG), setTimeout(bG, RG.j)) : bG()
                    })(GG.friend.name)
                  }
                }, GG.friend.name))), hG.loaded && 0 === hG.friends.length && (0, VG.jsx)(Yb, {
                  playersHere: cG,
                  exclude: zG,
                  Kr: GG => Xb(GG, "suggestion")
                })]
              }), MG && hG.loaded && 0 === hG.friends.length && 0 === hb.length && (0, VG.jsx)("div", {
                className: "WorldSocialEmpty",
                children: yG("worldSocial:whitelistNoFriends")
              })]
            })]
          })]
        }), IG && (0, VG.jsxs)(QG.K, {
          className: "WorldSocialManageLobby SmallTextLight",
          onClick: () => {
            (0, Cb.e)({
              page: "players",
              source: "invite_popup"
            }), LG()
          },
          children: [(0, VG.jsx)(dG.c, {
            name: "users-gear"
          }), " ", yG("lobbyManageEntry:manageLobby")]
        })]
      })
    }
    var Ib = ZG(2445),
      Fb = ZG(2414);

    function vb(GG) {
      let {
        show: bG,
        onClose: ZG,
        option: wG
      } = GG;
      const LG = (0, WG.c)("connectedGame", (GG => (0, Ib.c)(GG) ? GG.lobbyName : null));
      return function(GG) {
        const {
          gameEntrySource: bG,
          loadingOverlayVisible: ZG
        } = (0, sG.o)(["gameEntrySource", "loadingOverlayVisible"]), {
          userContext: wG
        } = (0, XG.e)(), LG = (0, WG.f)("localPlayerAlive"), yG = (0, WG.c)("players", (GG => null !== GG.localId && void 0 !== GG.byId[GG.localId])), kG = (0, Fb.h)(), UG = (0, SG.useRef)(null), YG = (0, SG.useRef)(null), VG = "worldCreation" === bG, pG = wG.whamm, fG = wG.getPersonalWorldLobbyName();
        (0, SG.useEffect)((() => {
          var bG;
          null !== GG && (null === (bG = YG.current) || void 0 === bG ? void 0 : bG.lobbyName) !== GG && null !== jb(GG, VG, pG, fG) && (YG.current = (0, wb.g)(GG))
        }), [VG, GG, pG, fG]), (0, SG.useEffect)((() => {
          if (null !== GG && (!ZG && LG && yG)) return kG.whenShown((() => {
            var bG;
            const ZG = UG.current === GG ? null : jb(GG, VG, pG, fG);
            if (null === ZG) return;
            const wG = (null === (bG = YG.current) || void 0 === bG ? void 0 : bG.lobbyName) === GG ? YG.current : (0, wb.g)(GG);
            YG.current = null, UG.current = GG,
              function(GG, bG, ZG, wG) {
                const {
                  lobbyName: SG
                } = GG, LG = () => {
                  ! function(GG, bG) {
                    if (!qb()) return void bG(!0);
                    const ZG = performance.now() + Ab;
                    let wG = 0;
                    const SG = () => {
                      wG = qb() ? 0 : wG + 1, wG >= 2 ? bG(!0) : !sb(GG) || performance.now() > ZG ? bG(!1) : setTimeout(SG, Mb)
                    };
                    setTimeout(SG, Mb)
                  }(SG, (LG => {
                    wG();
                    const yG = "auto_existing" === bG && Xb(ZG);
                    LG && sb(SG) && !cb(SG) && !yG && (Pb(GG) ? lb(SG) : (lb(SG), ub(ZG), function(GG) {
                      const bG = hb.d.world_social_popup_v1;
                      return (0, hb.k)("world_social_popup_v1"), (0, Zb.reportAnalyticsClick)({
                        id: "world_social.auto_open",
                        value: `${bG}:${(0,Kb.e)()}:${GG}`
                      }), (0, Qb.flushClientAnalyticsEvents)(), "auto_open" === bG
                    }(bG) && ((0, wb.d)(GG), KG.l.xh("toggleMenu", `inviteLink|${bG}`), "inviteLink" !== sG.e.get("openInGameMenuName") && console.warn("World social popup: the auto-open asked for it, but it didn't open"))))
                  }))
                };
                if ("auto" === bG && !Pb(GG)) return void LG();
                GG.response.then((GG => {
                  if (!("error" in GG)) return GG.settings.canManage ? void LG() : (lb(SG), void wG());
                  wG()
                }))
              }(wG, ZG, pG, (() => {
                UG.current === GG && (UG.current = null)
              }))
          }))
        }), [kG, VG, ZG, GG, LG, yG, pG, fG])
      }(LG), (0, SG.useEffect)((() => {
        bG && null !== LG && lb(LG)
      }), [bG, LG]), null !== LG ? (0, VG.jsx)(Wb, {
        show: bG,
        onClose: ZG,
        opener: rb(wG) ? wG : "icon"
      }) : (0, VG.jsx)(gG.c, {
        show: bG,
        onClose: ZG
      })
    }
    const ab = new Set;

    function cb(GG) {
      return ab.has(GG) || !!cG.l.getItem(`worldSocialShown:${GG}`)
    }

    function lb(GG) {
      ab.add(GG), cG.l.setItem(`worldSocialShown:${GG}`, !0)
    }

    function jb(GG, bG, ZG, wG) {
      return cb(GG) ? null : function(GG) {
        let {
          justMade: bG,
          playerId: ZG,
          lobbyName: wG,
          personalWorld: SG
        } = GG;
        return bG ? "auto" : !Xb(ZG) && zb(wG, SG) ? "auto_existing" : null
      }({
        justMade: bG,
        playerId: ZG,
        lobbyName: GG,
        personalWorld: wG
      })
    }

    function Pb(GG) {
      let {
        answer: bG
      } = GG;
      return null !== bG && "settings" in bG && !bG.settings.canManage
    }
    const Mb = 500,
      Ab = 3e4;

    function sb(GG) {
      return "inGame" === sG.e.get("gameState") && YG.gameBridge.latest("connectedGame").lobbyName === GG
    }

    function qb() {
      return (0, nG.d)() || sG.e.get("loadingOverlayVisible") || (0, qG.t)()
    }
    var nb = ZG(37097),
      gb = ZG(3137),
      eb = ZG(1956),
      Rb = ZG(3135);

    function Tb(GG, bG, ZG) {
      return Rb.e.overridesTexture(GG) ? Rb.e.getTexture(GG, bG).url : ZG
    }
    var Hb = ZG(9989);
    const tb = (GG, bG) => {
        (0, SG.useEffect)((() => {
          setTimeout((() => {
            GG && GG.current && GG.current.focus()
          }), 1)
        }), [bG])
      },
      Db = (0, SG.memo)((function(GG) {
        let {
          isInputActive: bG,
          onClose: ZG,
          onChange: wG,
          textAreaRef: SG,
          fontSize: LG,
          lineHeight: yG,
          currText: kG
        } = GG;
        return (0, VG.jsxs)("div", {
          className: "WriteOnBoardWrapper",
          children: [(0, VG.jsx)("img", {
            src: Tb("board_full", gb.i.BLOCK, Hb),
            alt: "Board",
            className: "WriteOnBoardImg"
          }), (0, VG.jsx)("textarea", {
            className: "WriteOnBoardTextArea",
            value: kG,
            ref: SG,
            style: {
              fontSize: `${LG}rem`,
              lineHeight: `${yG}rem`
            },
            onKeyDown: GG => {
              var bG;
              "Escape" !== GG.key && (GG.stopPropagation(), "Tab" === GG.key && function(GG) {
                GG.preventDefault();
                const bG = GG.target,
                  {
                    value: ZG
                  } = bG;
                let wG = bG.selectionStart,
                  SG = bG.selectionEnd,
                  LG = ZG.slice(wG, SG);
                if (!LG.includes("\n") && !GG.shiftKey) return void document.execCommand("insertText", !1, "\t");
                for (; wG > 0 && "\n" !== ZG[wG - 1];) wG--;
                const yG = "\n" === ZG[SG - 1];
                yG && SG--;
                LG = ZG.slice(wG, SG);
                const kG = LG.split("\n").map((bG => GG.shiftKey ? bG.replace(/^\t/, "") : "\t" + bG)).join("\n");
                if (GG.shiftKey && ZG.slice(wG, SG) === kG) return;
                let {
                  selectionStart: UG
                } = bG;
                bG.setSelectionRange(wG, SG), UG > wG && (!GG.shiftKey || "\t" === LG[0]) && (UG += GG.shiftKey ? -1 : 1);
                SG = wG + kG.length + (yG ? 1 : 0), document.execCommand("insertText", !1, kG), bG.setSelectionRange(UG, SG)
              }(GG), /^F\d+$/i.test(GG.code) && null !== (bG = eb.B.OpenCodeEditor) && void 0 !== bG && bG.includes(GG.code) && ZG())
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: wG
          })]
        })
      }));

    function Nb(GG) {
      return 1.3 * GG
    }
    var Ob = ZG(1626);
    const xb = (0, SG.memo)((function(GG) {
        let {
          show: bG,
          onOpen: ZG,
          onClose: wG
        } = GG;
        const [LG, kG] = (0, SG.useState)(null), [UG, pG] = (0, SG.useState)(""), [fG, KG] = (0, SG.useState)(0), [hG, dG] = (0, SG.useState)(null), [JG, rG] = (0, SG.useState)({
          text: "",
          textSize: 0
        }), zG = (GG, bG) => hG ? (0, nb.q)(GG, bG, hG.width, hG.height) : (0, nb.e)(GG, bG), EG = GG => {
          pG(zG(UG, GG)), KG(GG), cG.h.setItem("lastBoardTextSize", GG)
        }, oG = () => {
          wG(), hG && UG === JG.text && fG === JG.textSize || YG.gameBridge.send("writeOnBoard", {
            pos: LG,
            text: UG,
            textSize: fG
          })
        };
        (0, WG.b)("boardEditRequested", (GG => {
          var SG, LG;
          if (!aG.featureFlags.canSeePlayerWrittenText) return;
          if (null === GG) return kG(null), void(bG && wG());
          const {
            pos: yG,
            noticeboardSpan: UG,
            text: YG
          } = GG;
          kG(yG), dG(UG), pG(YG);
          const VG = null !== (SG = null !== (LG = GG.textSize) && void 0 !== LG ? LG : cG.h.getItem("lastBoardTextSize")) && void 0 !== SG ? SG : 0;
          KG(VG), rG({
            text: YG,
            textSize: VG
          }), cG.h.setItem("lastBoardTextSize", VG), ZG()
        }));
        const XG = (0, SG.useRef)(null);
        tb(XG, bG), (0, Ob.q)(XG, {
          kind: "sign",
          submit: oG
        });
        const uG = function(GG, bG) {
            const ZG = nb.c[GG];
            if (!bG) return ZG.uiFontSize;
            const {
              numLines: wG,
              charsPerLine: SG
            } = (0, nb.y)(bG.width, bG.height, GG);
            return ZG.uiFontSize * Math.min(ZG.charsPerLine / SG, ZG.numLines / wG)
          }(fG, hG),
          iG = Nb(uG);
        return (0, VG.jsxs)(yG.b, {
          className: "WriteOnBoardBg",
          close: oG,
          escDoesExit: !0,
          show: bG,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, VG.jsx)(Db, {
            isInputActive: () => bG,
            onClose: oG,
            onChange: GG => {
              pG(zG(GG.target.value, fG))
            },
            textAreaRef: XG,
            fontSize: uG,
            lineHeight: iG,
            currText: UG
          }), (0, VG.jsx)("div", {
            className: "WriteOnBoardTextSizeHeader SmallTextBold",
            children: "Text Size"
          }), (0, VG.jsxs)("div", {
            className: "WriteOnBoardTextSizeButtons",
            children: [(0, VG.jsx)(QG.d, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                EG(0)
              },
              disabled: 0 === fG,
              children: "Small"
            }), (0, VG.jsx)(QG.d, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                EG(1)
              },
              disabled: 1 === fG,
              children: "Medium"
            }), (0, VG.jsx)(QG.d, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                EG(2)
              },
              disabled: 2 === fG,
              children: "Large"
            })]
          })]
        })
      })),
      Bb = (0, SG.memo)((function(GG) {
        let {
          show: bG,
          onOpen: ZG,
          onClose: wG
        } = GG;
        const [LG, kG] = (0, SG.useState)(""), UG = () => {
          wG(), YG.gameBridge.send("writeNameTag", LG)
        };
        (0, iG.g)("EditNameTag", (GG => {
          aG.featureFlags.canSeePlayerWrittenText && null !== GG && (kG(GG), ZG())
        }));
        const pG = (0, SG.useRef)(null);
        tb(pG, bG), (0, Ob.q)(pG, {
          kind: "nameTag",
          submit: UG
        });
        const fG = nb.J.nameTag.uiFontSize,
          KG = Nb(fG);
        return (0, VG.jsxs)(yG.b, {
          className: "WriteOnBoardBg",
          close: UG,
          escDoesExit: !0,
          show: bG,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, VG.jsx)("div", {
            className: "NameTagTrim",
            children: (0, VG.jsx)(Db, {
              isInputActive: () => bG,
              onClose: UG,
              onChange: GG => {
                const bG = GG.target.value.replaceAll("\n", "");
                kG((0, nb.u)(bG, "nameTag"))
              },
              textAreaRef: pG,
              fontSize: fG,
              lineHeight: KG,
              currText: LG
            })
          }), (0, VG.jsx)(QG.d, {
            onClick: UG,
            className: "WriteOnNameTagCloseButton",
            children: "Finish"
          })]
        })
      }));
    var GZ = ZG(18161);
    const bZ = (0, SG.memo)((function(GG) {
      let {
        show: bG,
        onOpen: ZG,
        onClose: wG
      } = GG;
      const [LG, kG] = (0, SG.useState)(""), [UG, pG] = (0, SG.useState)(0), [fG, KG] = (0, SG.useState)(!1), [hG, dG] = (0, SG.useState)(["", "", "", "", "", "", "", "", "", ""]), [JG, rG] = (0, SG.useState)("Title"), [zG, EG] = (0, SG.useState)(!0), [oG, XG] = (0, SG.useState)(!1);
      (0, iG.g)("EditBook", (GG => {
        let {
          pages: bG,
          title: wG,
          isPublished: SG
        } = GG;
        var LG;
        aG.featureFlags.canSeePlayerWrittenText && (null !== bG ? (dG(bG), kG(null !== (LG = bG[0]) && void 0 !== LG ? LG : ""), rG(wG), pG(0), KG(!1), EG(!SG), XG(!1), ZG()) : dG(["", "", "", "", "", "", "", "", "", ""]))
      }));
      const uG = (0, SG.useRef)(null),
        CG = (0, SG.useRef)(null);
      tb(uG, bG), (0, Ob.q)(uG, {
        kind: "book"
      }), (0, Ob.q)(CG, {
        kind: "Ny"
      });
      const WG = nb.J.book.uiFontSize,
        mG = Nb(WG),
        IG = () => {
          (zG || oG) && YG.gameBridge.send("writeBook", {
            pages: [...hG],
            title: JG,
            published: !zG && oG
          })
        },
        FG = GG => {
          fG && (hG[UG] = LG, KG(!1)), kG(hG[GG]), pG(GG)
        };
      return (0, VG.jsxs)(yG.b, {
        className: "WriteOnBoardBg",
        close: () => {
          wG(), hG[UG] = LG, IG()
        },
        escDoesExit: !0,
        show: bG,
        togglePointerLock: !1,
        globallyUniqueKey: "WriteOnBookComp",
        children: [(0, VG.jsxs)("div", {
          className: "WriteOnBookWrapper",
          children: [(0, VG.jsx)("textarea", {
            className: "BookTitleTextArea SmallTextLight",
            value: JG,
            ref: CG,
            style: {
              fontSize: "2.5rem",
              lineHeight: `${mG}rem`
            },
            onKeyDown: GG => {
              zG && GG.stopPropagation()
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: GG => {
              let bG = GG.target.value;
              bG = (0, nb.u)(bG, "Ny"), rG(bG)
            },
            readOnly: !zG
          }), (0, VG.jsx)("img", {
            src: Tb("book_page", gb.i.ITEM, GZ),
            alt: "book_page",
            className: "WriteOnBookPageImg"
          }), (0, VG.jsx)("div", {
            className: "BookTextAreaPadding",
            children: (0, VG.jsx)("textarea", {
              className: "WriteOnBookPageTextArea",
              value: LG,
              ref: uG,
              style: {
                fontSize: `${WG}rem`,
                lineHeight: `${mG}rem`
              },
              onKeyDown: GG => {
                zG && GG.stopPropagation()
              },
              spellCheck: "false",
              autoComplete: "off",
              onChange: GG => {
                const bG = GG.target.value;
                kG((0, nb.u)(bG, "book")), KG(!0)
              },
              readOnly: !zG
            })
          })]
        }), (0, VG.jsxs)("div", {
          className: "BookNavigationWrapper",
          children: [(0, VG.jsx)(QG.d, {
            disabled: 0 === UG,
            onClick: () => {
              FG(UG - 1)
            },
            className: "BookNavButton",
            children: "<"
          }), (0, VG.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, VG.jsx)(QG.d, {
            disabled: 9 === UG,
            onClick: () => {
              FG(UG + 1)
            },
            className: "BookNavButton",
            children: ">"
          }), (0, VG.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, VG.jsx)(QG.d, {
            onClick: () => {
              EG(!zG), XG(!0)
            },
            className: "BookNavButton",
            children: zG ? "Publish" : "Edit"
          })]
        })]
      })
    }));
    var ZZ = ZG(36955),
      wZ = ZG(8728),
      SZ = ZG(1343),
      LZ = ZG(1889);

    function yZ(GG) {
      let {
        show: bG,
        buttons: ZG
      } = GG;
      const {
        t: wG
      } = (0, DG.w)(), LG = (0, SG.useRef)(null);
      return (0, SG.useEffect)((() => {
        var GG, ZG;
        const wG = bG ? (0, ZZ.x)() : null;
        if (!wG || !(0, SZ.k)()) return;
        const SG = (0, ZZ.j)().findIndex((GG => GG.id === wG));
        (0, wZ.q)(null !== (GG = null === (ZG = LG.current) || void 0 === ZG ? void 0 : ZG.children[SG]) && void 0 !== GG ? GG : null)
      }), [bG]), 0 === ZG.length ? null : (0, VG.jsx)("div", {
        ref: LG,
        className: "ClientGameInventoryButtons",
        onPointerDown: GG => {
          GG.stopPropagation()
        },
        onPointerUp: GG => {
          GG.stopPropagation()
        },
        children: ZG.map((GG => {
          const bG = wG(GG.labelKey);
          return (0, VG.jsxs)(QG.k, {
            className: GG.className,
            disabled: GG.disabled,
            onClick: () => {
              (0, ZZ.p)(GG)
            },
            ariaLabel: GG.iconOnly ? bG : void 0,
            title: GG.iconOnly ? bG : void 0,
            children: [GG.icon && (0, VG.jsxs)("div", {
              className: "ClientGameInventoryButtonIcon",
              children: ["item" === GG.icon.kind && (0, VG.jsx)(LZ.b, {
                itemName: GG.icon.name,
                amount: 0
              }), "image" === GG.icon.kind && (0, VG.jsx)("img", {
                src: GG.icon.src,
                alt: "",
                draggable: !1
              }), "icon" === GG.icon.kind && (0, VG.jsx)(dG.c, {
                name: GG.icon.name
              })]
            }), !GG.iconOnly && bG]
          }, GG.id)
        }))
      })
    }
    var kZ = ZG(37102),
      UZ = ZG(2724),
      YZ = ZG(34489),
      VZ = ZG(36867),
      pZ = ZG(36860);
    let fZ = null;
    window.setShowInventoryAdsOverride = GG => {
      fZ = GG
    };
    const QZ = 24e4;
    var KZ = ZG(1893);

    function hZ(GG) {
      var bG;
      let {
        draggedInfo: {
          name: ZG,
          attributes: wG,
          amount: SG
        },
        toAddRef: LG
      } = GG;
      return (0, VG.jsx)("div", {
        className: "DraggedInvenItem",
        ref: LG,
        children: (0, VG.jsx)(LZ.b, {
          itemName: ZG,
          amount: SG,
          enchantmentTier: null === wG || void 0 === wG || null === (bG = wG.customAttributes) || void 0 === bG ? void 0 : bG.enchantmentTier,
          bar: (0, KZ.g)(wG)
        })
      })
    }

    function dZ(GG) {
      let {
        className: bG = "",
        displayInfo: ZG,
        domRef: wG
      } = GG;
      return (0, VG.jsxs)("div", {
        className: `InvenHoveredItemInfo SmallTextBold ${bG}`,
        ref: wG,
        children: [(0, VG.jsx)(uG.c, {
          text: (0, CG.Bb)(ZG.name, {
            fontStyle: ZG.fontStyle
          })
        }), (0, VG.jsx)("div", {
          className: "InvenHoveredItemInfoDescription",
          children: (0, VG.jsx)(uG.c, {
            text: ZG.desc
          })
        })]
      })
    }

    function JZ(GG) {
      let {
        info: bG,
        draggedInfo: ZG
      } = GG;
      const wG = (0, SG.useRef)(null);
      return (0, SG.useLayoutEffect)((() => {
        const GG = wG.current,
          {
            left: ZG,
            top: SG
          } = function(GG, bG, ZG, wG) {
            const SG = wG.left * ZG.width / 100 + 4,
              LG = ZG.width - wG.right * ZG.width / 100 - 4 - bG.width,
              yG = wG.top * ZG.height / 100 + 4,
              kG = ZG.height - 4 - bG.height;
            return {
              left: Math.max(SG, Math.min(GG.x - bG.width / 2, LG)),
              top: Math.max(yG, Math.min(GG.y - 48 - bG.height, kG))
            }
          }({
            x: bG.initTouchX,
            y: bG.initTouchY
          }, {
            width: GG.offsetWidth,
            height: GG.offsetHeight
          }, {
            width: window.innerWidth,
            height: window.innerHeight
          }, sG.e.get("notchSize"));
        GG.style.left = `${ZG}px`, GG.style.top = `${SG}px`
      }), [bG]), (0, VG.jsxs)("div", {
        className: "LongHoldSplitInfoUI SmallTextBold",
        ref: wG,
        children: [(0, VG.jsx)("div", {
          className: "LongHoldSplitInfoUIInner",
          style: {
            width: ZG.amount / bG.maxAmount * 100 + "%"
          }
        }), (0, VG.jsxs)("div", {
          className: "LongHoldSplitInfoUIText",
          children: [ZG.amount, "/", bG.maxAmount]
        })]
      })
    }
    var rZ = ZG(1006),
      zZ = ZG.n(rZ),
      EZ = ZG(188);
    const oZ = (0, SG.memo)((function(GG) {
      let {
        show: bG,
        onOpen: ZG,
        onClose: wG
      } = GG;
      const LG = (0, SG.useRef)({
          pos: null
        }),
        [kG, UG] = (0, SG.useState)([0, 0, 0, 0]),
        {
          userContext: pG
        } = (0, XG.e)();
      (0, WG.b)("ironChestOpenRequested", (GG => {
        let {
          pos: bG,
          ownerDbId: wG,
          cachedPasskey: SG
        } = GG;
        if (LG.current.pos = bG, wG !== pG.whamm) return null !== SG ? (UG(SG), void fG(SG)) : void ZG();
        fG(kG)
      })), (0, WG.b)("localEffectUpdated", (GG => {
        "Thief" === GG && wG()
      }));
      const fG = GG => {
        const {
          pos: bG
        } = LG.current;
        YG.gameBridge.send("openIronChest", {
          pos: bG,
          Wk: GG
        })
      };
      return (0, VG.jsx)(yG.b, {
        className: "IronChestPasskeyInputScreenOuter",
        close: wG,
        escDoesExit: !0,
        show: bG,
        togglePointerLock: !1,
        globallyUniqueKey: "IronChestPasskeyInputScreen",
        children: (0, VG.jsx)("div", {
          className: "IronChestPasskeyInputScreen",
          children: (0, VG.jsx)(XZ, {
            Wk: kG,
            onPasskeyUpdated: UG,
            confirmText: "ironChest:tryUnlock",
            onConfirm: () => {
              fG(kG)
            }
          })
        })
      })
    }));

    function XZ(GG) {
      let {
        className: bG = "",
        Wk: ZG,
        onPasskeyUpdated: wG,
        confirmText: SG,
        onConfirm: LG
      } = GG;
      const {
        t: yG
      } = (0, DG.w)();
      return (0, VG.jsxs)("div", {
        className: `${bG} IronChestPasskeyInput`,
        children: [(0, VG.jsx)("div", {
          className: "SmallTextBold IronChestPasskeyInputTitle",
          children: yG("ironChest:passkeyInputTitle")
        }), (0, VG.jsx)("div", {
          className: "IronChestPasskeyInputRow",
          children: new Array(EZ.d.ironChestPasskeyLength).fill(0).map(((GG, bG) => (0, VG.jsx)(uZ, {
            digit: ZG[bG],
            onPasskeyDigitUpdated: GG => {
              const SG = [...ZG];
              SG[bG] = GG, wG(SG)
            }
          }, bG)))
        }), (0, VG.jsx)(QG.k, {
          className: "IronChestPasskeyInputConfirmButton",
          onClick: LG,
          children: yG(SG)
        })]
      })
    }

    function uZ(GG) {
      let {
        digit: bG,
        onPasskeyDigitUpdated: ZG
      } = GG;
      return (0, VG.jsx)("div", {
        className: "IronChestPasskeyDigitInputWrapper",
        children: (0, VG.jsxs)("div", {
          className: "IronChestPasskeyDigitInput",
          children: [(0, VG.jsx)(QG.k, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              ZG(CG.c.mod(bG + 1, 10))
            },
            children: (0, VG.jsx)(dG.c, {
              name: "angle-up"
            })
          }), (0, VG.jsx)("div", {
            className: "SmallTextBold IronChestPasskeyDigit",
            children: bG
          }), (0, VG.jsx)(QG.k, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              ZG(CG.c.mod(bG - 1, 10))
            },
            children: (0, VG.jsx)(dG.c, {
              name: "angle-down"
            })
          })]
        })
      })
    }
    var iZ = ZG(34483),
      CZ = ZG(37158),
      WZ = ZG(36853);

    function mZ(GG) {
      let {
        specialItemInfo: bG,
        setHovered: ZG,
        pointerDown: wG,
        pointerUp: LG,
        enchantingTablePosition: yG,
        enchantingTableBlockName: kG
      } = GG;
      const {
        t: pG
      } = (0, DG.w)(), [fG, KG] = (0, SG.useState)(null), [hG, dG] = (0, SG.useState)(null), JG = (0, UG.i)("auraPerLevel"), rG = Math.floor((0, WG.f)("aura") / JG);
      (0, SG.useEffect)((() => {
        if (!bG) return void KG(null);
        let GG = !0;
        return YG.gameBridge.query("enchantingOffer", {
          slot: bG.idx,
          name: bG.name,
          blockName: kG
        }).then((ZG => {
          var wG, SG;
          let {
            perks: LG,
            options: yG
          } = ZG;
          if (!GG) return;
          const kG = {
            isEnchantable: LG.length > 0,
            possibleEnchantments: LG,
            options: yG.map((GG => {
              let {
                level: bG,
                odds: ZG
              } = GG;
              return {
                level: bG,
                possibilities: Object.fromEntries(ZG.map(((GG, bG) => [`Tier ${bG+1}`, GG])))
              }
            })),
            isAlreadyEnchanted: LG.length > 0 && void 0 !== (null === (wG = bG.attributes) || void 0 === wG || null === (SG = wG.customAttributes) || void 0 === SG ? void 0 : SG.enchantmentTier)
          };
          KG(kG), (GG => {
            const bG = GG.options.map((GG => Object.entries(GG.possibilities).map((GG => {
              let [bG, ZG] = GG;
              return {
                str: `${bG}: ${ZG>0?ZG<.01?ZG.toPrecision(1):ZG.toFixed(2):0}%\n`,
                style: {
                  color: CG.wb[bG]
                }
              }
            }))));
            dG(bG)
          })(kG)
        })), () => {
          GG = !1
        }
      }), [bG, yG, kG]);
      const zG = [];
      for (let SG = 0; SG < CZ.b; SG++) {
        const GG = null === fG || void 0 === fG ? void 0 : fG.options[SG],
          wG = !GG || GG.level > rG;
        zG.push((0, VG.jsx)(QG.d, {
          className: "EnchantmentButton",
          onPointerEnter: GG ? GG => null === ZG || void 0 === ZG ? void 0 : ZG()(!0, {
            name: "",
            desc: hG[SG]
          }, GG) : void 0,
          onPointerLeave: GG ? () => null === ZG || void 0 === ZG ? void 0 : ZG()(!1) : void 0,
          onClick: wG ? void 0 : () => {
            YG.gameBridge.send("enchantItem", {
              slot: bG.idx,
              level: GG.level,
              tablePos: yG
            }), KG(null)
          },
          disabled: wG,
          children: GG ? (0, VG.jsxs)(VG.Fragment, {
            children: [(0, VG.jsxs)("h1", {
              className: "EnchantmentLevels",
              children: [(0, VG.jsxs)("span", {
                className: "EnchantmentLevelsCost",
                children: [pG("enchantments:cost"), ": "]
              }), " ", pG("enchantments:levels", {
                level: GG.level
              })]
            }), (0, VG.jsxs)("div", {
              className: "EnchantmentPossibilities",
              children: [(0, VG.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, VG.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: pG("enchantments:tier")
                }), Object.entries(GG.possibilities).map((GG => {
                  let [bG, ZG] = GG;
                  return 0 === ZG ? null : (0, VG.jsx)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: CG.wb[bG]
                    },
                    children: bG
                  }, bG)
                }))]
              }), (0, VG.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, VG.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: pG("enchantments:odds")
                }), Object.entries(GG.possibilities).map((GG => {
                  let [bG, ZG] = GG;
                  return 0 === ZG ? null : (0, VG.jsxs)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: CG.wb[bG]
                    },
                    children: [ZG > 0 && ZG < .1 ? "<0.1" : ZG.toFixed(0 < ZG && ZG < .95 ? 1 : 0), "%"]
                  }, bG)
                }))]
              })]
            })]
          }) : !1 === (null === fG || void 0 === fG ? void 0 : fG.isEnchantable) ? (0, VG.jsx)("h1", {
            className: "EnchantmentLevels",
            children: pG("enchantments:notEnchantable")
          }) : (0, VG.jsx)("h1", {
            className: "EnchantmentLevels",
            children: pG("enchantments:enterItem")
          })
        }, SG))
      }
      return (0, VG.jsxs)("div", {
        className: "EnchantingTable",
        children: [(0, VG.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: kG
        }), (0, VG.jsxs)("div", {
          className: "EnchantingTableBody",
          children: [(0, VG.jsxs)("div", {
            className: "EnchantingTableLeft",
            children: [(0, VG.jsx)(WZ.b, {
              idx: pZ.h,
              setHovered: GG => {
                null === ZG || void 0 === ZG || ZG(pZ.h)(GG)
              },
              pointerDown: wG,
              pointerUp: LG,
              draggedInfo: null,
              specialItemInfo: bG,
              variation: "Enchanting Table"
            }), fG && fG.possibleEnchantments.length > 0 && (0, VG.jsxs)("div", {
              className: "PossibleEnchantments",
              children: [(0, VG.jsx)("h2", {
                children: "Possible Perks:"
              }), fG.possibleEnchantments.map((GG => (0, VG.jsxs)(SG.Fragment, {
                children: [(0, VG.jsxs)("div", {
                  className: "PossibleEnchantmentName",
                  children: [(0, VG.jsx)("div", {
                    className: "PossibleEnchantmentIcon",
                    children: (0, VG.jsx)(LZ.b, {
                      itemName: `${GG} Enchantment`,
                      amount: 1
                    })
                  }), (0, VG.jsx)("div", {
                    className: "PossibleEnchantmentNameText",
                    children: GG
                  })]
                }), (0, VG.jsx)("div", {
                  className: "PossibleEnchantmentDescription",
                  children: pG((0, iZ.l)(GG).translationKey)
                })]
              }, GG)))]
            })]
          }), (0, VG.jsxs)("div", {
            className: "EnchantmentOptions",
            children: [fG && fG.isAlreadyEnchanted && (0, VG.jsx)("div", {
              className: "AlreadyEnchantedWarning",
              children: pG("enchantments:alreadyEnchanted")
            }), zG]
          })]
        })]
      })
    }
    var IZ = ZG(37167);

    function FZ(GG) {
      var bG;
      let {
        specialItemInfo: ZG,
        setSpecialItemInfo: wG,
        setHovered: LG,
        pointerDown: yG,
        pointerUp: kG
      } = GG;
      const {
        t: UG
      } = (0, DG.w)(), pG = (0, WG.c)("inventory", (GG => GG.freeSlots)), [fG, KG] = (0, SG.useState)(null);
      (0, SG.useEffect)((() => {
        if (ZG) {
          const GG = (0, IZ.b)(ZG.name, ZG.amount);
          KG({
            salvageable: !!GG,
            produces: GG
          })
        } else KG(null)
      }), [ZG, null === ZG || void 0 === ZG ? void 0 : ZG.name, null === ZG || void 0 === ZG ? void 0 : ZG.amount]);
      const hG = !!ZG && !(null === fG || void 0 === fG || !fG.salvageable) && !(null !== (bG = fG.produces) && void 0 !== bG && bG.some((GG => {
        let {
          amt: bG
        } = GG;
        return bG < 1
      })));
      return (0, VG.jsxs)("div", {
        className: "SalvagingTable",
        children: [(0, VG.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: UG("item:salvagingTable")
        }), (0, VG.jsxs)("div", {
          className: "SalvagingTableBody",
          children: [(0, VG.jsx)("div", {
            className: "SalvagingTableLeft",
            children: (0, VG.jsx)(WZ.b, {
              idx: pZ.h,
              setHovered: GG => {
                null === LG || void 0 === LG || LG(pZ.h)(GG)
              },
              pointerDown: yG,
              pointerUp: kG,
              draggedInfo: null,
              specialItemInfo: ZG,
              variation: "Salvaging Table"
            })
          }), (0, VG.jsx)("div", {
            className: "SalvagingTableRight",
            children: (0, VG.jsx)(QG.d, {
              className: "SalvageButton",
              onClick: hG ? () => {
                const {
                  idx: GG,
                  name: bG,
                  amount: SG
                } = ZG;
                YG.gameBridge.send("salvageItem", {
                  slot: GG,
                  name: bG,
                  amount: SG
                }) && (KG(null), wG(null))
              } : void 0,
              disabled: !hG,
              children: fG ? fG.salvageable ? fG.produces.some((GG => {
                let {
                  amt: bG
                } = GG;
                return bG < 1
              })) ? (0, VG.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, VG.jsx)("div", {
                  className: "SalvageText Error",
                  children: UG("salvagingTable:notEnoughResources")
                })
              }) : pG < fG.produces.length ? (0, VG.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, VG.jsx)("div", {
                  className: "SalvageText Error",
                  children: UG("salvagingTable:notEnoughInventorySpace")
                })
              }) : (0, VG.jsxs)("div", {
                className: "SalvageButtonText",
                children: [(0, VG.jsx)("div", {
                  className: "SalvageText",
                  children: UG("salvagingTable:salvage")
                }), (0, VG.jsx)("div", {
                  className: "SalvageIcons",
                  children: fG.produces.map(((GG, bG) => {
                    let {
                      item: ZG,
                      amt: wG
                    } = GG;
                    return (0, VG.jsx)("div", {
                      className: "SalvageIcon",
                      children: (0, VG.jsx)(LZ.b, {
                        itemName: ZG,
                        amount: Math.floor(wG)
                      })
                    }, bG)
                  }))
                })]
              }) : (0, VG.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, VG.jsx)("div", {
                  className: "SalvageText Error",
                  children: UG("salvagingTable:unsalvageable")
                })
              }) : (0, VG.jsx)(VG.Fragment, {})
            })
          })]
        })]
      })
    }
    var vZ = ZG(200),
      aZ = ZG(9249),
      cZ = ZG(2684),
      lZ = ZG(1621),
      jZ = ZG(8736),
      PZ = ZG(8732),
      MZ = ZG(1606),
      AZ = ZG(1979),
      sZ = ZG(1359),
      qZ = ZG(2060);

    function nZ(GG, bG, ZG) {
      const wG = GG.trim().toLowerCase();
      if ("" === wG) return 0;
      let SG = null;
      for (const LG of bG) {
        const GG = LG.toLowerCase().indexOf(wG);
        if (0 === GG) return 0;
        GG > 0 && (SG = 1)
      }
      if (null !== SG) return SG;
      for (const LG of ZG)
        if (LG.toLowerCase().includes(wG)) return 2;
      return null
    }

    function gZ(GG) {
      return GG.map((GG => {
        var bG;
        return GG ? {
          name: GG.name,
          amount: null !== (bG = GG.amount) && void 0 !== bG ? bG : 1
        } : null
      }))
    }

    function eZ(GG) {
      return GG < 1e3 ? `${GG}` : GG < 1e4 ? Math.floor(GG / 100) / 10 + "k" : `${Math.floor(GG/1e3)}k`
    }
    var RZ = ZG(37171);
    const TZ = QG.d,
      HZ = {
        initialDelayMs: 400,
        intervalMs: 100
      },
      tZ = () => {
        const GG = (0, sZ.h)();
        return GG ? GG.getPadRepeatTiming(HZ) : HZ
      };

    function DZ(GG, bG, ZG) {
      var wG, SG;
      const LG = (0, YZ.v)(bG, GG);
      let yG = null === (wG = bG[GG]) || void 0 === wG ? void 0 : wG.description;
      if (ZG && (null === (SG = (0, RZ.f)().get(GG)) || void 0 === SG || !SG.hideIngredients)) {
        yG ? (yG = (0, CG.Bb)(yG), yG.push({
          str: "\n"
        })) : yG = [], yG.push({
          str: "\n"
        }), yG.push({
          str: "Can be crafted from:\n"
        });
        for (const GG of ZG) "string" === typeof GG && (yG.push({
          icon: GG,
          style: {
            fontSize: "1.5em"
          }
        }), yG.push({
          str: " "
        }), yG.push(...(0, CG.Bb)((0, YZ.v)(bG, GG))), yG.push({
          str: "\n"
        }))
      }
      return {
        name: LG,
        desc: yG
      }
    }

    function NZ(GG) {
      let {
        name: bG,
        XV: ZG
      } = GG;
      return `${bG}_${ZG}`
    }

    function OZ(GG) {
      var bG;
      let {
        onClick: ZG,
        itemName: wG,
        recipeId: LG,
        isSelected: yG,
        haveIngredients: kG,
        craftable: UG,
        setHovered: YG,
        padActions: pG,
        marked: fG,
        lock: QG,
        itemInfo: KG
      } = GG;
      const hG = (0, SG.useRef)(null);
      return (0, jZ.i)(hG, {
        press: GG => !kG || "secondary" === GG && !UG ? (pG.refuse(), !1) : "primary" === GG ? (pG.choose(), !0) : pG.craft(),
        release: pG.stopCraft,
        hints: {
          primary: "inventoryChooseRecipe",
          secondary: "inventoryCraft"
        }
      }), (0, VG.jsxs)("div", {
        ref: hG,
        className: zZ()("InvenItem", {
          CraftableItemNotEnoughIngredients: !kG && !QG,
          CraftableItemMarked: fG,
          CraftableItemLocked: void 0 !== QG,
          CraftableItemLockedFar: (null !== (bG = null === QG || void 0 === QG ? void 0 : QG.stepsAway) && void 0 !== bG ? bG : 1) > 1
        }),
        "data-recipe-key": LG,
        "data-pad-inventory-default": yG ? "" : void 0,
        onClick: ZG,
        style: {
          cursor: yG ? null : "pointer"
        },
        onPointerEnter: GG => {
          null === YG || void 0 === YG || YG(!0, DZ(wG, KG)), !yG && (0, MZ.r)(GG.nativeEvent) && (0, PZ.j)() && ZG()
        },
        onPointerLeave: () => {
          null === YG || void 0 === YG || YG(!1)
        },
        children: [(0, VG.jsx)(LZ.b, {
          itemName: wG,
          amount: 1
        }), fG && (0, VG.jsx)("span", {
          className: "CraftableItemMarkBadge",
          "aria-hidden": "true",
          children: "!"
        }), QG && (0, VG.jsxs)("span", {
          className: "CraftableItemLockTag",
          children: [(0, VG.jsx)(dG.c, {
            name: "lock"
          }), (0, VG.jsx)(uG.c, {
            text: QG.tag
          })]
        })]
      })
    }

    function xZ(GG) {
      let {
        idx: bG,
        status: ZG,
        shownItem: wG,
        dim: LG,
        onHoverStart: yG,
        onHoverEnd: kG,
        onPadBack: UG
      } = GG;
      const YG = (0, SG.useRef)(null);
      (0, jZ.i)(YG, {
        press: () => !1,
        back: UG,
        hints: {
          back: "inventoryBackToRecipes"
        }
      });
      const pG = ZG.need > 0 ? Math.min(ZG.have / ZG.need, 1) : 1;
      return (0, VG.jsxs)("div", {
        ref: YG,
        className: zZ()("CupTile", {
          Short: ZG.missing > 0
        }),
        style: {
          width: LG,
          height: LG
        },
        "data-craft-ingredient": bG,
        onPointerEnter: yG,
        onPointerLeave: kG,
        children: [(0, VG.jsx)("div", {
          className: "CupFill",
          style: {
            transform: `scaleY(${pG})`
          }
        }), (0, VG.jsx)(LZ.b, {
          itemName: wG,
          amount: 0
        }), (0, VG.jsxs)("div", {
          className: "CupCount SmallTextBold",
          children: [eZ(ZG.have), "/", eZ(ZG.need)]
        })]
      })
    }

    function BZ(GG) {
      var bG, ZG, wG, LG, yG;
      let {
        show: kG,
        recipeItem: {
          name: UG,
          XV: pG,
          requires: fG,
          produces: QG,
          haveIngredients: KG
        },
        detail: hG,
        onCraft: dG,
        setHovered: JG,
        craftButtonRef: rG,
        onPadBack: zG,
        showPadShortcut: EG,
        refusedCount: oG,
        lock: XG,
        itemInfo: iG
      } = GG;
      const {
        t: CG
      } = (0, DG.w)(), WG = null !== hG && !hG.roomForOne, mG = null !== (bG = null === hG || void 0 === hG ? void 0 : hG.craftAllTimes) && void 0 !== bG ? bG : 0, IG = function(GG, bG) {
        return GG.map((GG => {
          let {
            items: ZG,
            amt: wG
          } = GG, SG = 0;
          const LG = [];
          for (const yG of ZG) {
            const GG = bG(yG);
            SG += GG, GG > 0 && LG.push(yG)
          }
          return 0 === LG.length && LG.push(ZG[0]), {
            shownItems: LG,
            need: wG,
            have: SG,
            missing: Math.max(wG - SG, 0)
          }
        }))
      }(fG, (GG => {
        var bG;
        return null !== (bG = null === hG || void 0 === hG ? void 0 : hG.amounts[GG]) && void 0 !== bG ? bG : 0
      }));
      let FG = "4rem",
        vG = 4;
      3 === fG.length || 4 === fG.length ? FG = "3.75rem" : fG.length >= 5 && (FG = "3rem"), 4 === fG.length ? vG = 2 : fG.length <= 6 && (vG = 3);
      const aG = `calc(${vG} * ${FG} + ${vG-1} * 0.4rem + 1px)`,
        cG = (0, SG.useRef)(null),
        lG = (0, SG.useRef)(null);
      (0, SG.useLayoutEffect)((() => {
        cG.current.scrollTop = 0
      }), [UG, pG]);
      const jG = (0, SG.useRef)(oG);
      (0, SG.useEffect)((() => {
        if (oG === jG.current) return;
        jG.current = oG;
        const GG = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? [{
          opacity: 1
        }, {
          opacity: .4
        }, {
          opacity: 1
        }] : [{
          transform: "translateX(0)"
        }, {
          transform: "translateX(-0.25rem)"
        }, {
          transform: "translateX(0.25rem)"
        }, {
          transform: "translateX(-0.15rem)"
        }, {
          transform: "translateX(0)"
        }];
        for (const wG of null !== (bG = null === (ZG = cG.current) || void 0 === ZG ? void 0 : ZG.querySelectorAll(".CupTile.Short, .CantCraftInfo")) && void 0 !== bG ? bG : []) {
          var bG, ZG;
          wG.animate(GG, {
            duration: 280,
            easing: "ease-out"
          })
        }
      }), [oG]);
      const PG = (GG, bG, ZG) => {
          var wG;
          if ((0, RZ.f)().has(UG)) return void(ZG && clearInterval(MG.current));
          const SG = null !== (wG = null === hG || void 0 === hG ? void 0 : hG.resultStackable) && void 0 !== wG && wG,
            LG = gZ(YG.gameBridge.latest("inventory").player),
            {
              uV: yG,
              ZU: kG,
              amountAddedToSlot: VG
            } = YG.gameBridge.send("craftRecipe", {
              name: UG,
              XV: pG,
              times: bG || GG && SG ? null : 1
            });
          if (yG > 0) {
            const bG = [],
              wG = new Set(fG.flatMap((GG => {
                let {
                  items: bG
                } = GG;
                return bG
              }))),
              yG = function(GG, bG, ZG) {
                const wG = [];
                for (let SG = 0; SG < GG.length; SG++) {
                  const LG = GG[SG];
                  if (!LG || !ZG.has(LG.name)) continue;
                  const yG = bG[SG],
                    kG = (null === yG || void 0 === yG ? void 0 : yG.name) === LG.name ? yG.amount : 0;
                  kG < LG.amount && wG.push({
                    idx: SG,
                    itemName: LG.name,
                    amount: LG.amount - kG
                  })
                }
                return wG
              }(LG, gZ(YG.gameBridge.latest("inventory").player), wG).slice(0, 12),
              pG = ZG ? 0 : Math.min(50, 400 / yG.length),
              KG = ZG ? 220 : 320;
            for (const GG of yG) {
              var QG;
              const ZG = fG.findIndex((bG => {
                  let {
                    items: ZG
                  } = bG;
                  return ZG.includes(GG.itemName)
                })),
                wG = null === (QG = cG.current) || void 0 === QG ? void 0 : QG.querySelector(`[data-craft-ingredient="${ZG}"]`),
                SG = (0, YZ.h)(GG.idx);
              wG && SG && bG.push({
                kind: "ingredient",
                itemName: GG.itemName,
                amount: GG.amount,
                ZU: GG.idx,
                from: SG,
                to: (0, YZ.h)(wG),
                delayMs: Math.round(bG.length * pG),
                durationMs: KG
              })
            }
            let hG;
            if (null !== kG && VG > 0 && lG.current) {
              const GG = bG.length > 0 ? bG[bG.length - 1].delayMs + .6 * KG : 0;
              hG = {
                itemName: UG,
                amount: VG,
                ZU: kG,
                from: (0, YZ.h)(lG.current),
                delayMs: Math.round(GG)
              }
            }
            dG(hG, GG && !SG ? kG : null, bG), kZ.c.play("wood1", .5).rate(1.75)
          }
        },
        MG = (0, SG.useRef)(null);
      (0, SG.useEffect)((() => () => {
        clearInterval(MG.current)
      }), []);
      const AG = (GG, bG) => {
          PG(GG, !1, !1), clearInterval(MG.current), bG && (MG.current = setTimeout((() => {
            MG.current = setInterval((() => {
              PG(GG, !1, !0)
            }), bG.intervalMs)
          }), bG.initialDelayMs))
        },
        sG = () => {
          clearInterval(MG.current)
        },
        qG = !KG || WG || Boolean(XG),
        nG = (0, SG.useRef)(null),
        gG = null !== (ZG = null === (wG = (0, qZ.c)()) || void 0 === wG ? void 0 : wG.hideButtonHints) && void 0 !== ZG && ZG,
        eG = null !== (LG = null === (yG = (0, sZ.h)()) || void 0 === yG ? void 0 : yG.getBoundButton("inventorySecondary")) && void 0 !== LG ? LG : null,
        RG = () => !qG && (PG(!1, !0, !1), !0);
      (0, jZ.i)(rG, {
        press: GG => "secondary" === GG ? RG() : !qG && (AG(!1, tZ()), !0),
        release: sG,
        back: zG,
        hints: {
          primary: "inventoryCraft",
          secondary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      }), (0, jZ.i)(nG, {
        press: RG,
        back: zG,
        hints: {
          primary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      });
      const [TG, HG] = (0, SG.useState)(0), [tG, NG] = (0, SG.useState)(null);
      (0, SG.useEffect)((() => {
        if (!0 === kG) {
          HG(0);
          const GG = setInterval((() => {
            HG((GG => GG + 1))
          }), 1e3);
          return () => {
            clearInterval(GG)
          }
        }
        return () => {}
      }), [kG]);
      const OG = null === hG || void 0 === hG ? void 0 : hG.ingredientsCraftedFrom,
        xG = (0, SG.useRef)(JG);
      (0, SG.useEffect)((() => {
        xG.current = JG
      }), [JG]);
      const BG = !(null === XG || void 0 === XG || !XG.hideIngredients);
      (0, SG.useEffect)((() => {
        var GG, bG;
        if (!tG) return;
        if (BG) return NG(null), void(null === (bG = xG.current) || void 0 === bG || bG.call(xG, !1));
        const ZG = tG[TG % tG.length];
        null === (GG = xG.current) || void 0 === GG || GG.call(xG, !0, DZ(ZG, iG, null === OG || void 0 === OG ? void 0 : OG[ZG]))
      }), [tG, TG, iG, OG, BG]);
      const Gb = !!XG,
        bb = (0, SG.useRef)(!1);
      (0, SG.useEffect)((() => {
        var GG;
        Gb && (clearInterval(MG.current), BG && bb.current && (bb.current = !1, null === (GG = xG.current) || void 0 === GG || GG.call(xG, !1)))
      }), [Gb, BG]);
      const Zb = (0, YZ.v)(iG, UG);
      return (0, VG.jsxs)("div", {
        ref: cG,
        className: "CraftableInfo SmallTextBold",
        children: [(0, VG.jsx)("div", {
          className: "CraftableHeader",
          children: (0, VG.jsx)(uG.c, {
            text: Zb
          })
        }), !BG && (0, VG.jsx)("div", {
          className: zZ()("CraftableIngredients", {
            Compact: fG.length >= 5
          }),
          style: {
            maxWidth: aG
          },
          children: IG.map(((GG, bG) => {
            const ZG = GG.shownItems[TG % GG.shownItems.length];
            return (0, VG.jsx)(xZ, {
              idx: bG,
              status: GG,
              shownItem: ZG,
              dim: FG,
              onHoverStart: () => {
                NG(GG.shownItems)
              },
              onHoverEnd: () => {
                NG(null), null === JG || void 0 === JG || JG(!1)
              },
              onPadBack: zG
            }, bG)
          }))
        }), XG && (0, VG.jsx)("div", {
          className: "CantCraftInfo CraftableLockReason",
          children: (0, VG.jsx)(uG.c, {
            text: XG.reason
          })
        }), !XG && (!KG || WG) && (0, VG.jsxs)("div", {
          className: "CantCraftInfo",
          children: [!KG && "Missing ingredients", (0, VG.jsx)("br", {}), WG && "Inventory is full"]
        }), !BG && (0, VG.jsxs)(VG.Fragment, {
          children: [(0, VG.jsxs)(TZ, {
            ref: rG,
            className: "DoCraftButton",
            onPointerDown: GG => {
              AG((0, YZ.x)(GG), (0, MZ.r)(GG.nativeEvent) ? tZ() : HZ)
            },
            onPointerUp: sG,
            onPointerLeave: sG,
            disabled: qG,
            children: [EG && eG && !qG && !gG && (0, VG.jsx)(AZ.b, {
              className: "CraftShortcutGlyph",
              glyph: eG
            }), (0, VG.jsx)("div", {
              ref: lG,
              className: "DoCraftItem",
              onPointerEnter: () => {
                bb.current = !0, null === JG || void 0 === JG || JG(!0, DZ(UG, iG))
              },
              onPointerLeave: () => {
                bb.current = !1, null === JG || void 0 === JG || JG(!1)
              },
              children: (0, VG.jsx)(LZ.b, {
                itemName: UG,
                amount: QG
              })
            })]
          }), (0, VG.jsxs)(TZ, {
            ref: nG,
            className: "DoCraftAllButton",
            onPointerDown: GG => {
              PG((0, YZ.x)(GG), !0, !1)
            },
            disabled: qG,
            children: [(0, VG.jsx)("span", {
              className: "CraftAllLabel",
              children: CG("general:craftAll")
            }), mG > 0 && (0, VG.jsxs)("span", {
              className: "CraftAllCount",
              children: ["x", eZ(mG)]
            })]
          })]
        })]
      })
    }

    function Gw(GG) {
      let {
        selectedIdx: bG,
        hidden: ZG
      } = GG;
      const wG = (0, SZ.w)(),
        LG = (0, SG.useRef)(null);
      return (0, SG.useLayoutEffect)((() => {
        const GG = LG.current,
          wG = null === GG || void 0 === GG ? void 0 : GG.parentElement;
        if (!wG || !GG) return;
        const SG = wG.querySelector(".CraftableItems"),
          yG = () => {
            var LG, yG;
            if (ZG) return void(GG.style.opacity = "0");
            const kG = null === SG || void 0 === SG ? void 0 : SG.children[bG],
              UG = null === (LG = null !== (yG = null === kG || void 0 === kG ? void 0 : kG.querySelector(".InvenItem")) && void 0 !== yG ? yG : kG) || void 0 === LG ? void 0 : LG.getBoundingClientRect();
            if (!UG || 0 === UG.width) return void(GG.style.opacity = "0");
            const YG = wG.getBoundingClientRect();
            GG.style.opacity = "1", GG.style.width = `${UG.width}px`, GG.style.height = `${UG.height}px`, GG.style.transform = `translate(${UG.left-YG.left+wG.scrollLeft}px, ${UG.top-YG.top+wG.scrollTop}px)`
          };
        yG();
        const kG = new MutationObserver(yG),
          UG = new ResizeObserver(yG);
        return UG.observe(wG), SG && (kG.observe(SG, {
          childList: !0,
          subtree: !0
        }), UG.observe(SG)), () => {
          kG.disconnect(), UG.disconnect()
        }
      }), [bG, ZG]), (0, VG.jsx)("div", {
        ref: LG,
        className: zZ()("SelectionReticle", {
          Secondary: wG
        })
      })
    }

    function bw(GG, bG, ZG) {
      return GG ? (0, vZ.c)(aZ.l, GG) ? Zw(GG, bG, ZG) : GG : ZG("classicGame:handCrafting")
    }

    function Zw(GG, bG, ZG) {
      var wG;
      const SG = null === (wG = bG[GG]) || void 0 === wG ? void 0 : wG.displayName;
      if ("string" === typeof SG) return ZG(SG);
      const LG = YG.gameBridge.latest("hiddenPlayerNames");
      return Array.isArray(SG) ? SG.map((GG => {
        if ("string" === typeof GG) return GG;
        if ("translationKey" in GG) return ZG(GG.translationKey, (0, DG.k)(GG.params, LG));
        if ("str" in GG) {
          if ("string" === typeof GG.str) return GG.str;
          if ("translationKey" in GG.str) return ZG(GG.str.translationKey, (0, DG.k)(GG.str.params, LG))
        }
        return ""
      })).join("") : SG && "translationKey" in SG ? ZG(SG.translationKey, (0, DG.k)(SG.params, LG)) : GG
    }

    function ww(GG, bG) {
      return GG === bG || null !== GG && null !== bG && GG.name === bG.name && GG.XV === bG.XV
    }

    function Sw(GG) {
      var bG, ZG, wG;
      let {
        show: LG,
        onCraft: yG,
        dispatchSelectedCraftable: kG,
        selectedCraftable: UG,
        craftingStation: pG,
        setHovered: fG
      } = GG;
      const {
        t: QG
      } = (0, DG.w)(), [KG, hG] = (0, SG.useState)(""), [dG, JG] = (0, SG.useState)(0);
      (0, SG.useEffect)((() => {
        LG || (hG(""), JG((GG => GG + 1)))
      }), [LG]);
      const [rG, zG] = (0, SG.useState)(pG);
      rG !== pG && (zG(pG), "" !== KG && (hG(""), JG((GG => GG + 1))));
      const EG = (0, SG.useRef)(null),
        oG = (0, SG.useRef)(null),
        XG = (0, PZ.n)(),
        uG = XG.showing && "recipe" === XG.kind,
        [iG, CG] = (0, SG.useState)(0),
        mG = null !== pG && void 0 !== pG ? pG : null,
        IG = (0, SG.useRef)(null),
        FG = GG => {
          return !((bG = IG.current) === (ZG = GG) || null !== bG && null !== ZG && bG.station === ZG.station && ww(bG.recipe, ZG.recipe)) && (IG.current = GG, YG.gameBridge.send("focusCrafting", GG), !0);
          var bG, ZG
        };
      FG(LG ? {
        station: mG,
        recipe: (null === (bG = IG.current) || void 0 === bG ? void 0 : bG.station) === mG ? IG.current.recipe : null
      } : null);
      let vG = YG.gameBridge.latest("crafting");
      const aG = (0, WG.f)("itemInfo"),
        cG = "" !== KG.trim(),
        lG = (0, RZ.w)(),
        jG = (0, RZ.s)(),
        PG = (0, RZ.y)(),
        MG = function(GG, bG) {
          const [ZG, wG] = (0, SG.useState)(!1);
          (0, SG.useEffect)((() => {
            if (!GG) return void wG(!1);
            const bG = setTimeout((() => {
              wG(!0)
            }), 0);
            return () => {
              clearTimeout(bG)
            }
          }), [GG]);
          const LG = GG && ZG,
            yG = (0, SG.useRef)({
              station: bG,
              at: new Map
            });
          return (yG.current.station !== bG || !LG && yG.current.at.size > 0) && (yG.current = {
            station: bG,
            at: new Map
          }), LG ? yG.current.at : null
        }(LG, pG);
      let AG = vG.recipes.filter((GG => {
        let {
          listed: bG
        } = GG;
        return bG
      }));
      if (cG) {
        const GG = [];
        for (const bG of vG.recipes) {
          var sG;
          const ZG = null !== (sG = jG.get(bG.name)) && void 0 !== sG && sG.hideIngredients ? [] : bG.requires.flatMap((GG => {
              let {
                items: bG
              } = GG;
              return bG.flatMap((GG => [GG, Zw(GG, aG, QG)]))
            })),
            wG = nZ(KG, [bG.name, Zw(bG.name, aG, QG)], ZG);
          null !== wG && GG.push({
            item: bG,
            rank: wG
          })
        }
        GG.sort(((GG, bG) => GG.rank - bG.rank)), AG = GG.map((GG => {
          let {
            item: bG
          } = GG;
          return bG
        }))
      } else {
        if (MG && MG.size > 0) {
          const GG = vG.recipes.filter((GG => !GG.listed && MG.has(NZ(GG))));
          AG = AG.concat(GG)
        }
        AG = (0, RZ.i)(AG, lG, jG, PG), MG && (AG = (0, RZ.h)(AG, MG, NZ))
      }
      const qG = GG => AG.find((bG => NZ(bG) === GG)),
        nG = `${pG}|${KG}`,
        [gG, eG] = (0, SG.useState)(null),
        RG = (null === gG || void 0 === gG ? void 0 : gG.context) === nG ? gG.key : null,
        TG = UG ? NZ(UG) : null,
        HG = null !== (ZG = null !== (wG = qG(TG)) && void 0 !== wG ? wG : qG(RG)) && void 0 !== ZG ? ZG : AG[0],
        tG = HG ? NZ(HG) : null,
        NG = HG ? {
          name: HG.name,
          XV: HG.XV
        } : null;
      LG && FG({
        station: mG,
        recipe: NG
      }) && (vG = YG.gameBridge.latest("crafting")), tG !== TG && tG !== RG && eG(tG ? {
        context: nG,
        key: tG
      } : null), (0, SG.useEffect)((() => () => {
        IG.current = null, YG.gameBridge.send("focusCrafting", null)
      }), []);
      const OG = ww(vG.detail, NG) ? vG.detail : null,
        xG = null !== OG && !OG.roomForOne,
        BG = AG.findIndex((GG => NZ(GG) === NZ(HG))),
        Gb = () => oG.current ? (0, jZ.e)(oG.current) : null,
        bb = (0, SG.useRef)(null),
        Zb = (0, SG.useRef)(0);
      Zb.current++;
      const wb = Zb.current;
      (0, SG.useEffect)((() => {
        const GG = bb.current;
        if (!GG || wb <= GG.afterRender) return;
        if (bb.current = null, GG.key !== tG) return;
        const bG = Gb();
        var ZG;
        null !== bG && void 0 !== bG && bG.press("primary") && !GG.Ik && (null === (ZG = bG.release) || void 0 === ZG || ZG.call(bG))
      }));
      const Sb = GG => {
          const bG = {
            name: GG.name,
            XV: GG.XV
          };
          return {
            choose: () => {
              kG(bG), (0, wZ.q)(oG.current)
            },
            craft: () => {
              var GG, ZG;
              return kG(bG), NZ(bG) !== NZ(HG) ? (bb.current = {
                key: NZ(bG),
                Ik: !0,
                afterRender: Zb.current
              }, !0) : null !== (GG = null === (ZG = Gb()) || void 0 === ZG ? void 0 : ZG.press("primary")) && void 0 !== GG && GG
            },
            stopCraft: () => {
              var GG, bG;
              bb.current ? bb.current.Ik = !1 : null === (GG = Gb()) || void 0 === GG || null === (bG = GG.release) || void 0 === bG || bG.call(GG)
            },
            refuse: () => {
              NZ(bG) !== NZ(HG) && kG(bG), CG((GG => GG + 1))
            }
          }
        },
        Lb = () => {
          var GG, bG, ZG;
          (0, wZ.q)(null !== (GG = null === (bG = EG.current) || void 0 === bG || null === (ZG = bG.querySelector(".CraftableItems")) || void 0 === ZG ? void 0 : ZG.children[BG]) && void 0 !== GG ? GG : null)
        },
        yb = AG.map(NZ).join("|"),
        kb = (0, SG.useRef)(yb);
      return (0, SG.useEffect)((() => {
        kb.current !== yb && (kb.current = yb, uG && BG >= 0 && (0, PZ.j)() && Lb())
      })), (0, VG.jsxs)("div", {
        className: "Craftables",
        children: [(0, VG.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: bw(pG, aG, QG)
        }), (0, VG.jsxs)("div", {
          className: "CraftablesBody",
          children: [(0, VG.jsx)(lZ.b, {
            className: "CraftingSearch",
            placeholderText: QG("general:searchRecipes"),
            defaultValue: KG,
            maxLength: 100,
            onValueChange: GG => {
              hG(GG)
            },
            blurOnEnter: !0
          }, dG), 0 === AG.length && cG && (0, VG.jsx)("div", {
            className: "CraftingNoMatches SmallTextBold",
            children: QG("general:noRecipesMatchSearch")
          }), AG.length > 0 && (0, VG.jsxs)(VG.Fragment, {
            children: [(0, VG.jsxs)("div", {
              ref: EG,
              className: "CraftablesLeftSide",
              children: [(0, VG.jsx)(cZ.d, {
                lazyLoadedClassName: "CraftableItems",
                observerUpdateDeps: [JSON.stringify(AG.map((GG => {
                  let {
                    name: bG,
                    XV: ZG,
                    haveIngredients: wG
                  } = GG;
                  return {
                    name: bG,
                    XV: ZG,
                    haveIngredients: wG
                  }
                })))],
                observing: LG,
                children: AG.map((GG => {
                  const {
                    name: bG,
                    XV: ZG,
                    haveIngredients: wG
                  } = GG, SG = NZ(GG);
                  return (0, VG.jsx)(OZ, {
                    recipeId: SG,
                    itemName: bG,
                    onClick: () => {
                      kG({
                        name: bG,
                        XV: ZG
                      })
                    },
                    isSelected: NZ(HG) === SG,
                    haveIngredients: wG,
                    craftable: wG && !jG.has(bG) && !(NZ(HG) === SG && xG),
                    setHovered: fG,
                    padActions: Sb(GG),
                    marked: lG.has(bG),
                    lock: jG.get(bG),
                    itemInfo: aG
                  }, SG)
                }))
              }), (0, VG.jsx)(Gw, {
                selectedIdx: BG,
                hidden: uG && XG.steppingSlots
              })]
            }), (0, VG.jsx)(BZ, {
              show: LG,
              recipeItem: HG,
              detail: OG,
              onCraft: yG,
              setHovered: fG,
              craftButtonRef: oG,
              onPadBack: Lb,
              showPadShortcut: uG,
              refusedCount: iG,
              lock: jG.get(HG.name),
              itemInfo: aG
            })]
          })]
        })]
      })
    }
    var Lw = ZG(34492),
      yw = ZG(3267),
      kw = ZG(2091),
      Uw = ZG(8719);
    class Yw {
      constructor(GG, bG, ZG) {
        this.commit = GG, this.delayMs = bG, this.defers = ZG, this.pending = null, this.timer = void 0, this.Ik = !1, this.flush = () => {
          clearTimeout(this.timer);
          const GG = this.pending;
          null !== GG && (this.pending = null, this.commit(GG))
        }
      }
      type(GG) {
        this.pending = GG, clearTimeout(this.timer), this.Ik || this.defers() ? this.Ik || (this.timer = setTimeout(this.flush, this.delayMs)) : this.flush()
      }
      getTyped(GG) {
        var bG;
        return null !== (bG = this.pending) && void 0 !== bG ? bG : GG
      }
      isHeld() {
        return this.Ik
      }
      setHeld(GG) {
        this.Ik = GG, GG || this.flush()
      }
    }

    function Vw(GG) {
      return null === GG ? "creativeInventory:all" : `creativeInventory:${GG}`
    }

    function pw(GG) {
      let {
        category: bG
      } = GG;
      return null === bG ? (0, VG.jsx)(dG.c, {
        name: "layer-group"
      }) : (0, VG.jsx)(LZ.b, {
        itemName: Lw.creativeItemCategoryIcons[bG],
        amount: 0
      })
    }

    function fw(GG) {
      let {
        labelKey: bG,
        isSelected: ZG,
        onSelect: wG,
        setHovered: SG,
        children: LG
      } = GG;
      return (0, VG.jsx)("div", {
        className: zZ()("CreativeCategoryTab", {
          Selected: ZG
        }),
        onClick: wG,
        onPointerEnter: GG => {
          (0, YZ.t)(GG) || SG(!0, {
            name: {
              translationKey: bG
            },
            desc: ""
          })
        },
        onPointerLeave: () => {
          SG(!1)
        },
        children: LG
      })
    }

    function Qw(GG) {
      let {
        categories: bG,
        selectedCategory: ZG,
        onSelect: wG
      } = GG;
      const {
        t: LG
      } = (0, DG.w)(), [yG, kG] = (0, SG.useState)(!1), UG = (0, SG.useRef)(null), YG = (0, SG.useCallback)((() => {
        kG(!1)
      }), []);
      return (0, kw.b)(UG, YG), (0, VG.jsxs)("div", {
        className: "CreativeCategoryDropdown",
        ref: UG,
        children: [(0, VG.jsxs)("div", {
          className: "CreativeCategoryDropdownButton",
          onClick: () => {
            kG(!yG)
          },
          children: [(0, VG.jsx)("div", {
            className: "CreativeCategoryIcon",
            children: (0, VG.jsx)(pw, {
              category: ZG
            })
          }), (0, VG.jsx)("span", {
            children: LG(Vw(ZG))
          }), (0, VG.jsx)(dG.c, {
            name: yG ? "caret-up" : "caret-down"
          })]
        }), yG && (0, VG.jsx)("div", {
          className: "CreativeCategoryDropdownMenu",
          children: bG.map((GG => (0, VG.jsxs)("div", {
            className: zZ()("CreativeCategoryDropdownOption", {
              Selected: ZG === GG
            }),
            onClick: () => {
              wG(GG), kG(!1)
            },
            children: [(0, VG.jsx)("div", {
              className: "CreativeCategoryIcon",
              children: (0, VG.jsx)(pw, {
                category: GG
              })
            }), (0, VG.jsx)("span", {
              children: LG(Vw(GG))
            })]
          }, null !== GG && void 0 !== GG ? GG : "all")))
        })]
      })
    }
    const Kw = (0, SG.memo)((function(GG) {
      let {
        creativeScrollDiv: bG,
        playerInvenNumSlots: ZG,
        getSetHoveringForIdx: wG,
        getPointerDownForIdx: LG,
        getPointerUpForIdx: yG,
        creativeSearchVal: kG,
        setCreativeSearchVal: YG,
        creativeCategory: pG,
        setCreativeCategory: fG,
        show: QG
      } = GG;
      const {
        t: KG
      } = (0, DG.w)(), hG = (0, WG.f)("creativeVisibility"), {
        userContext: JG
      } = (0, XG.e)(), rG = (0, UG.i)("canUseDevCreativeItems"), zG = JG.playerHasRank("developer") || !!rG, EG = (0, SG.useMemo)((() => dw("", hG, zG)), [hG, zG]), oG = (0, SG.useMemo)((() => {
        const GG = (0, Lw.creativeItemIds)(),
          bG = new Set(EG.map((bG => (0, Lw.creativeCategoryOf)(GG[bG]))));
        return Lw.creativeItemCategories.filter((GG => bG.has(GG)))
      }), [EG]), uG = null !== pG && oG.includes(pG) ? pG : null, CG = (0, SG.useMemo)((() => "" === kG ? EG : dw(kG, hG, zG)), [EG, kG, hG, zG]), mG = (0, SG.useMemo)((() => {
        const GG = (0, Lw.creativeItemIds)();
        return null !== uG ? CG.filter((bG => (0, Lw.creativeCategoryOf)(GG[bG]) === uG)) : "" === kG ? CG.filter((bG => !(0, Lw.showOnlyInCreativeCategory)(GG[bG]))) : CG
      }), [CG, uG, kG]), IG = wG();

      function FG(GG) {
        fG(GG), bG.current.scrollTop = 0
      }
      const vG = [null, ...oG],
        {
          isTouchScreen: aG
        } = (0, sG.o)(["isTouchScreen"]),
        cG = !aG,
        lG = (0, SG.useRef)(null),
        [jG, PG] = (0, SG.useState)(0);
      (0, SG.useEffect)((() => {
        const GG = lG.current;
        if (!GG) return;
        const bG = new ResizeObserver((GG => {
          PG(GG[0].contentRect.height)
        }));
        return bG.observe(GG), () => {
          bG.disconnect()
        }
      }), [cG]);
      const MG = (0, SG.useRef)(null),
        AG = (0, SG.useCallback)((function GG() {
          "up" === MG.current ? bG.current.scrollTop -= 10 : "down" === MG.current && (bG.current.scrollTop += 10), MG.current && requestAnimationFrame(GG)
        }), [bG]),
        qG = (0, SG.useCallback)((function(GG) {
          MG.current || (MG.current = GG, AG())
        }), [AG]);

      function nG() {
        MG.current = null
      }
      const gG = (0, SG.useRef)({
        creativeSearchVal: kG,
        setCreativeSearchVal: YG
      });
      gG.current = {
        creativeSearchVal: kG,
        setCreativeSearchVal: YG
      };
      const [eG] = (0, SG.useState)((() => new Yw((GG => {
        gG.current.setCreativeSearchVal(GG)
      }), 250, SZ.k))), RG = GG => {
        var ZG;
        null === (ZG = bG.current) || void 0 === ZG || ZG.classList.toggle("CreativeItemSlotsStale", GG)
      };
      (0, iG.g)(Uw.b, (GG => {
        eG.setHeld(GG), GG || RG(!1)
      })), (0, SG.useEffect)((() => eG.flush), [eG]);
      const TG = (0, VG.jsx)(lZ.b, {
          className: "CreativeItemSlotsSearch",
          placeholderText: "Search",
          defaultValue: kG,
          maxLength: 1e4,
          onValueChange: (GG, bG) => {
            "" === eG.getTyped(gG.current.creativeSearchVal) && "" !== GG && fG(null), eG.type(GG), RG(eG.isHeld())
          },
          onEnter: eG.flush,
          blurOnEnter: !0
        }),
        HG = (0, VG.jsxs)("div", {
          className: "CreateItemSlotsScrollable",
          children: [aG && (0, VG.jsxs)("div", {
            className: "CreativeScrollButtons",
            children: [(0, VG.jsx)("div", {
              className: "CreativeScrollButton Up",
              onPointerDown: () => {
                qG("up")
              },
              onPointerLeave: nG,
              onPointerUp: nG,
              children: (0, VG.jsx)(dG.c, {
                name: "arrow-up"
              })
            }), (0, VG.jsx)("div", {
              className: "CreativeScrollButton Down",
              onPointerDown: () => {
                qG("down")
              },
              onPointerLeave: nG,
              onPointerUp: nG,
              children: (0, VG.jsx)(dG.c, {
                name: "arrow-up"
              })
            })]
          }), (0, VG.jsxs)("div", {
            className: "CreativeItemSlots",
            ref: bG,
            children: [0 === mG.length && "" !== kG && (0, VG.jsx)("div", {
              className: "CreativeItemSlotsEmpty",
              children: KG("general:noResults")
            }), (0, VG.jsx)(cZ.d, {
              lazyLoadedClassName: "CreativeItemSlotsInner",
              observerUpdateDeps: [kG, uG],
              observerRoot: "CreativeItemSlots",
              observing: QG,
              children: mG.map((GG => {
                const bG = ZG + GG;
                return (0, VG.jsx)(WZ.b, {
                  idx: bG,
                  draggedInfo: null,
                  specialItemInfo: null,
                  setHovered: wG(bG),
                  pointerDown: LG(bG),
                  pointerUp: yG(bG)
                }, bG)
              }))
            })]
          })]
        });
      return (0, VG.jsxs)("div", {
        className: zZ()("CreativeItemSlotsWrapper", cG ? "WithRail" : "WithDropdown"),
        children: [cG && (0, VG.jsx)("div", {
          className: "CreativeCategoryRail",
          ref: lG,
          style: {
            "--rail-height": jG > 0 ? `${jG}px` : void 0,
            "--tab-rows": Math.ceil(vG.length / 2)
          },
          children: vG.map((GG => (0, VG.jsx)(fw, {
            labelKey: Vw(GG),
            isSelected: uG === GG,
            onSelect: () => {
              FG(GG)
            },
            setHovered: IG,
            children: (0, VG.jsx)(pw, {
              category: GG
            })
          }, null !== GG && void 0 !== GG ? GG : "all")))
        }), (0, VG.jsxs)("div", {
          className: "CreativeItemSlotsMain",
          children: [(0, VG.jsxs)("div", {
            className: "CreativeItemSlotsSearchRow",
            children: [TG, !cG && (0, VG.jsx)(Qw, {
              categories: vG,
              selectedCategory: uG,
              onSelect: FG
            })]
          }), HG]
        })]
      })
    }));

    function hw(GG) {
      var bG;
      return null !== (bG = (0, yw.f)(GG)) && void 0 !== bG ? bG : ""
    }

    function dw(GG, bG, ZG) {
      let {
        publicLobby: wG,
        shownInGame: SG
      } = bG;
      const LG = GG.toLowerCase(),
        yG = (0, Lw.creativeItemIds)(),
        kG = GG => {
          var bG;
          const LG = yG[GG];
          return !(0, Lw.itemIsDisabled)(LG, wG, null === (bG = SG[hw(LG)]) || void 0 === bG || bG, ZG)
        };
      if ("" === LG) return yG.map(((GG, bG) => bG)).filter((GG => !(0, Lw.showOnlyInCreativeSearch)(yG[GG]))).filter(kG);
      const UG = [];
      for (let YG = 0; YG < yG.length; YG++) hw(yG[YG]).toLowerCase().includes(LG) && UG.push(YG);
      UG.sort(((GG, bG) => {
        const ZG = hw(yG[GG]).toLowerCase(),
          wG = hw(yG[bG]).toLowerCase();
        return ZG.indexOf(LG) - wG.indexOf(LG)
      }));
      for (const [YG, VG] of(0, Lw.creativeAltNames)())
        for (const GG of VG)
          if (GG.toLowerCase().includes(LG)) {
            const GG = yG.indexOf(YG);
            UG.includes(GG) || UG.push(GG)
          } return UG.filter(kG)
    }
    var Jw = ZG(37180),
      rw = ZG(604);

    function zw(GG) {
      return GG > rw.o
    }

    function Ew(GG) {
      const bG = GG / 2,
        ZG = [];
      for (let wG = 0; wG < bG / 6; wG++)
        for (let GG = 0; GG < 12; GG++) {
          const SG = GG < 6 ? 0 : bG;
          ZG.push(SG + 6 * wG + GG % 6)
        }
      return ZG
    }

    function ow(GG) {
      let {
        numSlots: bG,
        renderSlot: ZG
      } = GG;
      const {
        t: wG
      } = (0, DG.w)(), LG = (0, SG.useRef)(null);
      var yG;
      return yG = LG, (0, SG.useLayoutEffect)((() => {
        var GG;
        const bG = null === (GG = yG.current) || void 0 === GG ? void 0 : GG.closest(".InvenBody");
        if (!bG) return;
        const ZG = () => {
          bG.style.zoom = "";
          const GG = parseFloat(getComputedStyle(document.documentElement).fontSize),
            ZG = window.innerWidth - 2 * GG,
            wG = bG.getBoundingClientRect().width;
          wG > ZG && (bG.style.zoom = "" + ZG / wG)
        };
        return ZG(), window.addEventListener("resize", ZG), () => {
          window.removeEventListener("resize", ZG), bG.style.zoom = ""
        }
      }), [yG]), (0, VG.jsxs)("div", {
        ref: LG,
        className: "ChestItemSlots DoubleChestSlots",
        children: [(0, VG.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: wG("doubleChest:title")
        }), (0, VG.jsx)("div", {
          className: "GridItemSlots",
          children: Ew(bG).map((GG => ZG(GG)))
        })]
      })
    }

    function Xw(GG) {
      let {
        eS: bG,
        initialPasskey: ZG
      } = GG;
      const {
        t: wG
      } = (0, DG.w)(), [LG, yG] = (0, SG.useState)(ZG), [kG, UG] = (0, SG.useState)(ZG);
      (0, SG.useEffect)((() => {
        yG(ZG), UG(ZG)
      }), [...bG]);
      return (0, VG.jsxs)("div", {
        className: "IronChestPasskeyEditorWrapper",
        children: [(0, VG.jsx)("div", {
          className: "SmallTextBold",
          children: wG("ironChest:currentPasskey", {
            currentPasskey: LG.join("")
          })
        }), (0, VG.jsx)(XZ, {
          className: "IronChestPasskeyEditor",
          Wk: kG,
          onPasskeyUpdated: UG,
          confirmText: "ironChest:changePasskey",
          onConfirm: () => {
            YG.gameBridge.send("changeIronChestPasskey", {
              pos: [...bG],
              Wk: [...kG]
            }), yG([...kG])
          }
        })]
      })
    }

    function uw(GG, bG) {
      return "Iron" === GG.type && GG.ironChest.ownerDbId === bG
    }

    function iw(GG) {
      let {
        variation: bG,
        canCraft: ZG,
        show: wG,
        creativeMounted: SG,
        specialItemRef: LG,
        draggedInfo: yG,
        getSetHovering: kG,
        getPointerDownForIdx: UG,
        getPointerUpForIdx: YG,
        enchantingTablePosition: pG,
        enchantingTableBlockName: fG,
        selectedCraftable: QG,
        dispatchSelectedCraftable: KG,
        creativeScrollDiv: hG,
        creativeSearchVal: dG,
        setCreativeSearchVal: JG,
        creativeCategory: rG,
        setCreativeCategory: zG,
        onCraft: EG
      } = GG;
      const {
        userContext: oG
      } = (0, XG.e)(), {
        t: uG
      } = (0, DG.w)(), iG = (0, WG.c)("inventory", (GG => GG.chest)), CG = (0, WG.c)("inventory", (GG => GG.player.length)), mG = (0, WG.c)("inventory", (GG => GG.creative));
      if (0 === CG) return null;
      let IG, FG;
      const vG = GG => {
          const bG = CG + GG;
          return (0, VG.jsx)(WZ.b, {
            idx: bG,
            draggedInfo: yG,
            specialItemInfo: LG.current,
            setHovered: kG(bG),
            pointerDown: UG(bG),
            pointerUp: YG(bG)
          }, bG)
        },
        aG = iG ? (0, Jw.c)(iG.type) : null;
      if (aG) IG = zZ()("InvenLeftSideChestCustom", aG.className), FG = (0, VG.jsx)("div", {
        className: "ChestItemSlotsWrapper",
        children: aG.render({
          eS: iG.pos,
          renderSlot: vG
        })
      });
      else if (iG) {
        const GG = iG.pos,
          bG = "Iron" === iG.type || "Moonstone" === iG.type ? iG.type : "Standard";
        IG = `InvenLeftSideChest${bG}`;
        const ZG = zw(iG.numSlots);
        FG = (0, VG.jsxs)("div", {
          className: "ChestItemSlotsWrapper",
          children: [uw(iG, oG.whamm) && (0, VG.jsx)(Xw, {
            eS: GG,
            initialPasskey: iG.ironChest.Wk
          }), ZG && (0, VG.jsx)(ow, {
            numSlots: iG.numSlots,
            renderSlot: vG
          }), !ZG && (0, VG.jsxs)("div", {
            className: "ChestItemSlots",
            children: [(0, VG.jsx)("div", {
              className: "InvenLeftSideHeader SmallTextBold",
              children: uG("Moonstone" === bG ? "item:moonstoneChest" : "Iron" === bG ? "item:ironChest" : "item:chest")
            }), (0, VG.jsx)("div", {
              className: "GridItemSlots",
              children: new Array(iG.numSlots).fill(0).map(((GG, bG) => vG(bG)))
            })]
          })]
        })
      } else if (!mG || bG && ZG)
        if (ZG && "Enchanting Table" === bG) IG = `InvenLeftSide${(null!==fG&&void 0!==fG?fG:"").replace(/ /gi,"")}`, FG = (0, VG.jsx)(mZ, {
          specialItemInfo: LG.current,
          setHovered: kG,
          pointerDown: UG(pZ.h),
          pointerUp: YG(pZ.h),
          enchantingTablePosition: pG,
          enchantingTableBlockName: fG
        });
        else if (ZG && "Salvaging Table" === bG) IG = "InvenLeftSideSalvagingTable", FG = (0, VG.jsx)(FZ, {
        specialItemInfo: LG.current,
        setSpecialItemInfo: GG => {
          LG.current = GG
        },
        setHovered: kG,
        pointerDown: UG(pZ.h),
        pointerUp: YG(pZ.h)
      });
      else {
        if (!ZG) return null;
        IG = `InvenLeftSide${(null!==bG&&void 0!==bG?bG:"HandCrafting").replace(/ /gi,"")}`, FG = (0, VG.jsx)(Sw, {
          show: wG,
          onCraft: EG,
          craftingStation: bG,
          selectedCraftable: QG,
          dispatchSelectedCraftable: KG,
          setHovered: kG()
        })
      } else IG = "InvenLeftSideCreative", FG = SG ? (0, VG.jsx)(Kw, {
        creativeScrollDiv: hG,
        playerInvenNumSlots: CG,
        getSetHoveringForIdx: kG,
        getPointerDownForIdx: UG,
        getPointerUpForIdx: YG,
        creativeSearchVal: dG,
        setCreativeSearchVal: JG,
        creativeCategory: rG,
        setCreativeCategory: zG,
        show: wG
      }) : null;
      const cG = !!iG || ZG && !!bG;
      return (0, VG.jsx)("div", {
        className: `InvenLeftSide ${IG}`,
        "data-pad-inventory-start": cG ? "" : void 0,
        children: FG
      })
    }
    var Cw = ZG(589),
      Ww = ZG(20108),
      mw = ZG(20110),
      Iw = ZG(20114);
    const Fw = {
      Helmet: {
        sprite: "empty_armor_slot_helmet",
        image: ZG(20118)
      },
      Chestplate: {
        sprite: "empty_armor_slot_chestplate",
        image: mw
      },
      Gauntlets: {
        sprite: "empty_armor_slot_gauntlets",
        image: Iw
      },
      Leggings: {
        sprite: "empty_armor_slot_leggings",
        image: ZG(20126)
      },
      Boots: {
        sprite: "empty_armor_slot_boots",
        image: Ww
      }
    };

    function vw(GG) {
      const {
        sprite: bG,
        image: ZG
      } = Fw[GG];
      return Tb(bG, gb.i.ITEM, ZG)
    }

    function aw(GG) {
      let {
        draggedInfo: bG,
        specialItemInfo: ZG,
        craftFlyAnims: wG,
        getSetHovering: SG,
        getPointerDownForIdx: LG,
        getPointerUpForIdx: yG,
        variation: kG,
        canCraft: UG,
        isNewSlot: YG
      } = GG;
      const pG = (0, WG.c)("inventory", (GG => GG.player.length));
      return 0 === pG ? null : (0, VG.jsxs)("div", {
        className: "InvenBodyRight",
        children: [(0, VG.jsx)("div", {
          className: "ArmourItemSlots",
          children: new Array(Cw.c.length).fill(0).map(((GG, fG) => {
            const QG = pG - Cw.c.length + fG;
            return (0, VG.jsx)(WZ.b, {
              idx: QG,
              draggedInfo: bG,
              specialItemInfo: ZG,
              craftFlyHoldbackInfo: (0, VZ.i)(wG, QG),
              setHovered: SG(QG),
              pointerDown: LG(QG),
              pointerUp: yG(QG),
              defaultIconB64: vw(Cw.c[fG]),
              variation: UG ? kG : void 0,
              showNewDot: YG(QG)
            }, QG)
          }))
        }), (0, VG.jsx)("div", {
          className: "GridItemSlots",
          children: new Array(pG - 10 - Cw.c.length).fill(0).map(((GG, fG) => {
            const QG = pG - Cw.c.length - fG - 1;
            return (0, VG.jsx)(WZ.b, {
              idx: QG,
              draggedInfo: bG,
              specialItemInfo: ZG,
              craftFlyHoldbackInfo: (0, VZ.i)(wG, QG),
              setHovered: SG(QG),
              pointerDown: LG(QG),
              pointerUp: yG(QG),
              variation: UG ? kG : void 0,
              showNewDot: YG(QG)
            }, QG)
          }))
        })]
      })
    }
    var lw = ZG(37184),
      jw = ZG(37186);

    function Pw(GG) {
      const {
        e: bG,
        idx: ZG
      } = GG, wG = (0, YZ.j)(GG.readInventory(), ZG), SG = (0, YZ.p)(bG);
      ZG === pZ.e ? function(GG, bG) {
        const {
          draggedInfoRef: ZG,
          removeItem: wG,
          removeDraggedInfoRef: SG,
          close: LG
        } = GG;
        if (ZG.current) {
          const GG = bG && ZG.current.amount || 1;
          wG(ZG.current.idx, GG, !0) && (ZG.current.amount -= GG, ZG.current.amount <= 0 && SG())
        } else bG && LG()
      }(GG, SG) : ZG === pZ.h ? function(GG, bG) {
        const {
          e: ZG,
          draggedInfoRef: wG,
          specialItemRef: SG,
          moveAmtIntoSlot: LG,
          removeDraggedInfoRef: yG
        } = GG;
        if ((0, YZ.x)(ZG) && SG.current) SG.current = null;
        else if (wG.current && SG.current && (wG.current.idx === SG.current.idx || (0, jw.e)(wG.current, SG.current)) && wG.current.amount > 0 && SG.current.amount > 0 && SG.current.amount < EZ.d.maxItemStackSize)
          if (wG.current.idx === SG.current.idx) {
            if (bG) {
              const GG = Math.min(wG.current.amount, EZ.d.maxItemStackSize - SG.current.amount);
              SG.current.amount += GG, wG.current.amount -= GG
            } else wG.current.amount--, SG.current.amount++;
            wG.current.amount <= 0 && yG()
          } else if (bG) {
          const GG = Math.min(wG.current.amount, EZ.d.maxItemStackSize - SG.current.amount);
          LG(SG.current.idx, GG) && (SG.current.amount += GG)
        } else {
          LG(SG.current.idx, 1) && SG.current.amount++
        } else if (wG.current && !SG.current && !bG && wG.current.amount > 0) wG.current.amount--, SG.current = {
          idx: wG.current.idx,
          name: wG.current.name,
          attributes: wG.current.attributes,
          amount: 1
        }, wG.current.amount <= 0 && yG();
        else {
          const GG = wG.current;
          wG.current = SG.current, SG.current = GG
        }
      }(GG, SG) : (0, YZ.x)(bG) ? function(GG, bG) {
        var ZG, wG;
        const {
          idx: SG,
          draggedInfoRef: LG,
          specialItemRef: yG,
          canCraft: kG,
          variation: UG,
          swapSlots: YG,
          moveIntoSlots: VG
        } = GG;
        if (!bG) return;
        let pG = bG.amount;
        SG === (null === (ZG = LG.current) || void 0 === ZG ? void 0 : ZG.idx) && (pG = LG.current.amount <= 0 ? 0 : bG.amount - LG.current.amount);
        SG === (null === (wG = yG.current) || void 0 === wG ? void 0 : wG.idx) && (pG = yG.current.amount <= 0 ? 0 : bG.amount - yG.current.amount);
        if (0 === pG) return;
        const fG = GG.readInventory(),
          QG = fG.player.length,
          KG = fG.chest,
          hG = QG - Cw.c.length,
          dG = () => {
            if (!(0, SZ.k)()) return void VG(10, hG, SG, pG);
            const GG = GG => {
              const ZG = (0, YZ.j)(fG, GG);
              return ZG ? {
                amount: ZG.amount,
                stacksWithMoved: (0, jw.e)(ZG, bG)
              } : null
            };
            for (const bG of ((GG, bG, ZG, wG, SG) => {
                const LG = [];
                let yG = wG;
                if (null !== wG) {
                  let kG = 0;
                  for (let wG = bG; wG < ZG; wG++) {
                    const bG = GG(wG);
                    null !== bG && void 0 !== bG && bG.stacksWithMoved && null !== bG.amount && bG.amount > 0 && (kG += Math.max(0, SG - bG.amount))
                  }
                  const UG = Math.min(wG, kG);
                  if (UG > 0 && (LG.push({
                      start: bG,
                      end: ZG,
                      amount: UG
                    }), yG = wG - UG), yG <= 0) return LG
                }
                for (let kG = ZG - 1; kG >= bG; kG--)
                  if (null === GG(kG)) {
                    LG.push({
                      start: kG,
                      end: kG + 1,
                      amount: yG
                    });
                    break
                  } return LG
              })(GG, 10, hG, pG, EZ.d.maxItemStackSize)) VG(bG.start, bG.end, SG, bG.amount)
          };
        if (!kG || "Enchanting Table" !== UG && "Salvaging Table" !== UG) {
          const ZG = (0, CG.Hb)(bG.name),
            wG = ZG ? (0, CG.Fb)(ZG) : null;
          if (!Cw.c.includes(ZG) || SG !== wG && (0, YZ.n)(fG, GG.itemInfo, wG, SG))
            if (KG)
              if (SG < QG) {
                var JG, rG;
                const [GG, bG] = null !== (JG = null === (rG = (0, Jw.c)(KG.type)) || void 0 === rG ? void 0 : rG.quickMoveRange) && void 0 !== JG ? JG : [0, KG.numSlots];
                VG(QG + GG, QG + bG, SG, pG)
              } else VG(0, QG - Cw.c.length, SG, pG);
          else fG.creative ? SG < 10 ? dG() : SG < QG ? VG(0, 10, SG, pG) : VG(0, QG - Cw.c.length, SG, null !== bG.amount ? EZ.d.maxItemStackSize : null) : SG < 10 ? dG() : VG(0, 10, SG, pG);
          else SG < QG - Cw.c.length || SG >= QG ? YG(wG, SG) : (VG(0, QG - Cw.c.length, wG, pG), kZ.c.play("equip_leather1", 1).rate(.9 + .3 * Math.random()))
        } else yG.current = {
          idx: SG,
          name: bG.name,
          attributes: bG.attributes,
          amount: null !== bG.amount ? pG : 0
        }
      }(GG, wG) : GG.draggedInfoRef.current ? function(GG, bG, ZG, wG) {
        const {
          draggedInfoRef: SG,
          specialItemRef: LG,
          moveAmtIntoSlot: yG,
          swapSlots: kG,
          removeItem: UG,
          removeDraggedInfoRef: YG
        } = GG, VG = GG.readInventory(), pG = SG.current.idx;
        if (ZG && (bG === pG || (0, jw.e)(SG.current, ZG)) && SG.current.amount > 0 && (0, YZ.d)(ZG) > 0 && (ZG.amount < EZ.d.maxItemStackSize || bG === pG)) wG ? ZG.amount + SG.current.amount <= EZ.d.maxItemStackSize || bG === pG ? yG(bG, SG.current.amount) : yG(bG, EZ.d.maxItemStackSize - ZG.amount) : yG(bG, 1);
        else if (SG.current.amount > 0 && !ZG) yG(bG, wG ? SG.current.amount : 1);
        else if (wG || ZG || 0 === SG.current.amount)
          if (VG.creative && !VG.chest && bG >= VG.player.length) {
            const GG = 0 === SG.current.amount ? 1 : SG.current.amount;
            UG(SG.current.idx, GG, !1) && YG()
          } else {
            var fG;
            const ZG = (null === (fG = LG.current) || void 0 === fG ? void 0 : fG.idx) === bG;
            if (kG(bG, SG.current.idx)) {
              const wG = GG.readInventory(),
                yG = (0, YZ.j)(wG, pG),
                kG = !wG.chest && wG.creative && SG.current.idx >= wG.player.length;
              if (yG && SG.current.idx !== bG && !kG) {
                let GG = (0, YZ.d)(yG);
                ZG && (GG -= LG.current.amount), SG.current = ZG && 0 === GG ? null : {
                  idx: SG.current.idx,
                  name: yG.name,
                  attributes: yG.attributes,
                  amount: GG
                }
              } else YG()
            }
          }
        else yG(bG, 1)
      }(GG, ZG, wG, SG) : function(GG, bG, ZG, wG) {
        var SG;
        const {
          draggedInfoRef: LG,
          specialItemRef: yG
        } = GG;
        if (!ZG) return;
        let kG = (0, YZ.d)(ZG);
        const UG = (null === (SG = yG.current) || void 0 === SG ? void 0 : SG.idx) === bG;
        UG && (kG -= yG.current.amount);
        wG || (kG = Math.ceil(kG / 2));
        LG.current = UG && 0 === kG ? null : {
          idx: bG,
          name: ZG.name,
          attributes: ZG.attributes,
          amount: kG
        }
      }(GG, ZG, wG, SG)
    }

    function Mw(GG, bG) {
      return !!bG && bG.name === GG.name
    }

    function Aw() {
      return YG.gameBridge.latest("inventory")
    }

    function sw(GG, bG, ZG) {
      return YG.gameBridge.send("removeInventoryItem", {
        slot: GG,
        amount: bG,
        drop: ZG
      })
    }

    function qw(GG) {
      return (0, YZ.i)(GG, YG.gameBridge.latest("itemInfo"), YG.gameBridge.latest("stationItems").enchantable)
    }

    function nw(GG) {
      let {
        show: bG,
        close: ZG,
        canCraft: wG,
        variation: LG,
        inventoryItemsMoveable: yG,
        setCraftFlyAnims: kG
      } = GG;
      (0, WG.f)("itemInfo");
      const [UG, VG] = (0, SG.useState)(null), [pG, fG] = (0, SG.useState)(null), [QG, KG] = (0, SG.useState)(!1), hG = (0, SG.useRef)(null), dG = (0, SG.useRef)(null), JG = (0, SG.useRef)(null), rG = (0, SG.useRef)(null), [zG, EG] = (0, SG.useReducer)((GG => GG + 1), 0), oG = (0, SG.useCallback)((() => {
        bG && EG()
      }), [bG, EG]), XG = (0, SG.useCallback)((() => {
        dG.current = null, jG.current = null, oG()
      }), [oG]), uG = (0, SG.useCallback)(((GG, bG) => {
        kG((ZG => ZG.map((ZG => "ingredient" === ZG.kind ? ZG : ZG.ZU === GG ? {
          ...ZG,
          ZU: bG,
          to: (0, YZ.h)(bG)
        } : ZG.ZU === bG ? {
          ...ZG,
          ZU: GG,
          to: (0, YZ.h)(GG)
        } : ZG))))
      }), [kG]), iG = (0, SG.useCallback)(((GG, bG) => {
        const ZG = AG.current;
        if (ZG.x = GG, ZG.y = bG, hG.current) !sG.current.isTouch || sG.current.itemBeingDragged && !jG.current ? (hG.current.style.transform = `translate(${ZG.x}px, ${ZG.y}px)`, KG(sG.current.isTouch && !jG.current)) : (hG.current.style.transform = "translate(0.5rem, 0.5rem)", KG(!0));
        else if (rG.current) {
          const ZG = rG.current;
          let wG = GG + 10,
            SG = bG + 10;
          const LG = ZG.offsetWidth,
            yG = ZG.offsetHeight;
          wG + LG > window.innerWidth && (wG = GG - LG - 10), SG + yG > window.innerHeight && (SG = bG - yG - 10), wG < 0 && (wG = 0), SG < 0 && (SG = 0), rG.current.style.transform = `translate(${wG}px, ${SG}px)`
        }
      }), []), mG = (0, SG.useCallback)((GG => (bG, ZG, wG) => {
        if (VG(bG && void 0 !== GG ? GG : null), bG) {
          if (void 0 === GG && !ZG) return void(0, lw.d)("Error in invenComp", new Error("isHovering true but no idx or text"));
          if (void 0 !== GG) {
            var SG;
            const bG = Aw();
            let ZG;
            if (ZG = GG === pZ.h ? JG.current ? (0, YZ.j)(bG, JG.current.idx) : null : (0, YZ.j)(bG, GG), !ZG) return void fG(null);
            if ((null === (SG = JG.current) || void 0 === SG ? void 0 : SG.idx) === GG) {
              if (0 === (0, YZ.d)(ZG) - JG.current.amount) return void fG(null)
            }
            fG(qw(ZG))
          } else fG({
            name: ZG.name,
            desc: ZG.desc,
            fontStyle: "normal"
          })
        } else fG(null);
        wG && setTimeout((() => {
          iG(wG.pageX, wG.pageY)
        }), 0)
      }), [iG]), IG = (0, SG.useCallback)(((GG, bG) => {
        const ZG = YG.gameBridge.send("moveInventoryItem", {
          from: dG.current.idx,
          to: GG,
          amount: bG
        });
        return ZG ? (dG.current.amount -= bG, dG.current.amount <= 0 && XG()) : console.error("moveInventoryItem failed"), ZG
      }), [XG]), FG = (0, SG.useCallback)(((GG, bG) => {
        const ZG = JG.current,
          wG = null === ZG || void 0 === ZG ? void 0 : ZG.idx;
        ZG && (ZG.idx = function(GG, bG, ZG) {
          return GG === bG ? ZG : GG === ZG ? bG : GG
        }(wG, GG, bG));
        const SG = YG.gameBridge.send("swapInventorySlots", {
          a: GG,
          b: bG
        });
        return SG ? uG(GG, bG) : ZG && (ZG.idx = wG), SG
      }), [uG]), vG = (0, SG.useCallback)(((GG, bG, ZG, wG) => {
        const SG = YG.gameBridge.send("quickMoveInventoryItem", {
          slot: ZG,
          start: GG,
          end: bG,
          amount: wG
        });
        null !== SG && uG(ZG, SG)
      }), [uG]), aG = (0, SG.useCallback)(((GG, bG) => {
        var SG;
        ((GG, bG, ZG) => {
          const wG = GG - (ZG - Cw.c.length);
          return !(!bG || wG < 0 || wG >= Cw.c.length) && (0, CG.Hb)(bG) !== Cw.c[wG]
        })(bG, null === (SG = dG.current) || void 0 === SG ? void 0 : SG.name, Aw().player.length) || (Pw({
          e: GG,
          idx: bG,
          readInventory: Aw,
          itemInfo: YG.gameBridge.latest("itemInfo"),
          draggedInfoRef: dG,
          specialItemRef: JG,
          moveAmtIntoSlot: IG,
          swapSlots: FG,
          moveIntoSlots: vG,
          removeItem: sw,
          removeDraggedInfoRef: XG,
          close: ZG,
          canCraft: wG,
          variation: LG
        }), oG())
      }), [wG, ZG, IG, vG, XG, FG, LG, oG]), cG = (0, SG.useRef)(0), lG = (0, SG.useRef)(null), jG = (0, SG.useRef)(null), PG = (0, SG.useRef)(null), MG = (0, SG.useRef)(new Set), AG = (0, SG.useRef)({
        x: 0,
        y: 0
      }), sG = (0, SG.useRef)({
        isTouch: !1,
        itemBeingDragged: !1
      }), qG = (0, SG.useCallback)((() => (PG.current = null, sG.current.itemBeingDragged = !1, clearTimeout(lG.current), !!jG.current && (jG.current = null, oG(), !0))), [oG]);
      (0, SG.useEffect)((() => {
        qG(), MG.current.clear()
      }), [bG]);
      const nG = GG => void 0 !== GG && (MG.current.has(GG) || null !== PG.current && GG !== PG.current),
        gG = GG => {
          sG.current.isTouch = (0, YZ.t)(GG)
        },
        eG = (0, SG.useCallback)((GG => bG => {
          const wG = (0, YZ.t)(bG);
          if (wG || iG(bG.pageX, bG.pageY), yG)
            if (nG(bG.pointerId)) void 0 !== bG.pointerId && MG.current.add(bG.pointerId);
            else {
              if (gG(bG), wG) {
                cG.current = bG.timeStamp, sG.current.itemBeingDragged = !0, PG.current = bG.pointerId;
                const ZG = (0, YZ.j)(Aw(), GG);
                if (ZG && ZG.amount && ZG.amount > 0) {
                  const ZG = bG.pageX,
                    wG = bG.pageY,
                    SG = AG.current.x,
                    LG = AG.current.y;
                  clearTimeout(lG.current), lG.current = setTimeout((() => {
                    if (dG.current && dG.current.idx === GG && (Math.abs(ZG - AG.current.x) < 20 && Math.abs(wG - AG.current.y) < 20 || SG === AG.current.x && LG === AG.current.y) && sG.current.itemBeingDragged) {
                      const GG = Aw(),
                        ZG = GG.creative && !GG.chest && dG.current.idx >= EZ.d.numInvenSlots && null !== (0, YZ.j)(GG, dG.current.idx).amount ? EZ.d.maxItemStackSize : dG.current.amount;
                      jG.current = {
                        initTouchX: bG.pageX,
                        initTouchY: bG.pageY,
                        maxAmount: ZG
                      }, dG.current.amount = Math.ceil(dG.current.amount / 2), hG.current.style.transform = "translate(0.5rem, 0.5rem)", KG(!0), oG()
                    }
                  }), 500)
                }
              }
              aG(bG, GG)
            }
          else GG === pZ.e && (0, YZ.p)(bG) && ZG()
        }), [iG, aG, yG, ZG, oG]),
        RG = (0, SG.useCallback)((GG => GG => {
          if (nG(GG.pointerId)) return;
          const bG = (0, YZ.t)(GG);
          if (gG(GG), !qG()) {
            if (bG && dG.current && GG.timeStamp - cG.current > 150) {
              const bG = document.elementFromPoint(GG.clientX, GG.clientY);
              if (null !== bG) {
                const ZG = bG.getAttribute("data-inven-idx");
                null !== ZG ? aG(GG, parseInt(ZG)) : bG.classList.contains("InventoryBackgroundScreen") && aG(GG, -1)
              }
            }
            iG(GG.pageX, GG.pageY)
          }
        }), [iG, aG, qG]);
      (0, SG.useEffect)((() => {
        let GG;
        const ZG = ["pointerup", "pointercancel"],
          wG = GG => {
            MG.current.has(GG.pointerId) ? setTimeout((() => {
              MG.current.delete(GG.pointerId)
            }), 0) : GG.pointerId === PG.current && setTimeout((() => {
              PG.current === GG.pointerId && qG()
            }), 0)
          };
        if (bG) {
          for (const GG of ZG) document.addEventListener(GG, wG, !0);
          if (!sG.current.isTouch) {
            const GG = AG.current;
            iG(GG.x, GG.y)
          }
          GG = GG => {
            GG.preventDefault(), nG(GG.pointerId) || (gG(GG), iG(GG.pageX, GG.pageY), jG.current && GG.pointerId === PG.current && (GG => {
              if (!dG.current) return jG.current = null, void oG();
              const {
                initTouchX: bG,
                maxAmount: ZG
              } = jG.current, wG = (GG.pageX - bG) * jG.current.maxAmount / 160, SG = Math.ceil(ZG / 2) + Math.ceil(wG);
              dG.current.amount = Math.min(ZG, Math.max(1, SG)), oG()
            })(GG))
          }, document.addEventListener("pointermove", GG, !0)
        }
        return () => {
          document.removeEventListener("pointermove", GG, !0);
          for (const GG of ZG) document.removeEventListener(GG, wG, !0)
        }
      }));
      const TG = (0, SG.useCallback)((() => {
          if (dG.current) {
            const GG = (0, YZ.j)(Aw(), dG.current.idx);
            (!Mw(dG.current, GG) || GG.amount < dG.current.amount) && XG()
          }
        }), [XG]),
        HG = (0, SG.useCallback)((() => {
          const GG = dG.current;
          if (GG) {
            const bG = (0, YZ.j)(Aw(), GG.idx);
            Mw(GG, bG) && (GG.attributes = bG.attributes)
          }
        }), []);
      return {
        draggedDomRef: hG,
        draggedInfoRef: dG,
        specialItemRef: JG,
        hoverInfoDomRef: rG,
        longHoldSplitInfoRef: jG,
        currHoveredIdx: UG,
        currHoveredDisplayInfo: pG,
        displayDraggedItemName: QG,
        forceRerenderIfVisible: oG,
        removeDraggedInfoRef: XG,
        checkDraggedItemConsistencyWithInven: TG,
        refreshDraggedAttributes: HG,
        swapSlots: FG,
        getPointerDownForIdx: eG,
        getPointerUpForIdx: RG,
        getSetHovering: mG,
        setCurrHoveredDisplayInfo: fG,
        moveFollowerTo: iG
      }
    }
    class gw {
      constructor(GG) {
        this.snapshot = [], this.newSlots = new Set, this.update(GG, !1)
      }
      update(GG, bG) {
        const ZG = GG.map((GG => {
          var bG;
          return GG ? {
            name: GG.name,
            amount: null !== (bG = GG.amount) && void 0 !== bG ? bG : 1
          } : null
        }));
        ZG.forEach(((GG, ZG) => {
          const wG = this.snapshot[ZG],
            SG = (null === GG || void 0 === GG ? void 0 : GG.name) !== (null === wG || void 0 === wG ? void 0 : wG.name);
          (!GG || SG || GG.amount < wG.amount) && this.newSlots.delete(ZG), bG && GG && (SG || GG.amount > wG.amount) && this.newSlots.add(ZG)
        })), this.snapshot = ZG
      }
      clearMarks() {
        this.newSlots.clear()
      }
      isNew(GG) {
        return this.newSlots.has(GG)
      }
    }
    const ew = (GG, bG, ZG) => ({
      button: bG,
      shiftKey: ZG,
      pageX: GG.clientX,
      pageY: GG.clientY,
      clientX: GG.clientX,
      clientY: GG.clientY,
      pointerType: "mouse"
    });

    function Rw(GG) {
      const [bG, ZG] = (0, SG.useState)(GG);
      return GG && !bG && ZG(!0), (0, SG.useEffect)((() => {
        if (bG) return;
        let GG = !0;
        const wG = () => {
            GG && (GG = !1, ZG(!0))
          },
          SG = "function" === typeof window.requestIdleCallback,
          LG = SG ? window.requestIdleCallback(wG, {
            timeout: 2e3
          }) : void 0,
          yG = setTimeout(wG, SG ? 2e3 : 1e3);
        return () => {
          GG = !1, clearTimeout(yG), void 0 !== LG && window.cancelIdleCallback(LG)
        }
      }), [bG]), bG
    }
    const Tw = (0, SG.memo)((function(GG) {
      var bG;
      let {
        show: ZG,
        onOpen: wG,
        onClose: LG,
        variation: kG
      } = GG;
      const pG = (0, SG.useRef)(null),
        fG = (0, SG.useRef)(null),
        QG = function(GG) {
          const [bG, ZG] = (0, SG.useState)(!0), [wG, LG] = (0, SG.useState)(!1), yG = (0, SG.useRef)(null), kG = (0, SG.useRef)(null), YG = (0, UG.i)("_shield"), VG = (0, SG.useRef)(null), pG = (0, UG.i)("_health"), fG = (0, SG.useRef)(null);

          function QG(GG) {
            const bG = Date.now() + GG;
            bG < kG.current || (ZG(!1), clearTimeout(yG.current), kG.current = bG, yG.current = setTimeout((() => {
              ZG(!0)
            }), GG))
          }
          return (0, SG.useEffect)((() => {
            QG(QZ);
            const GG = KG.l.subscribe("requestingPlayVideoAd", (() => {
              QG(QZ)
            }));
            return () => {
              clearTimeout(yG.current), KG.l.unsubscribe(GG)
            }
          }), []), (0, SG.useEffect)((() => {
            (VG.current > YG || fG.current > pG) && QG(6e4), VG.current = YG, fG.current = pG
          }), [YG, pG]), (0, SG.useEffect)((() => {
            let bG = null;
            return GG ? bG = setTimeout((() => {
              LG(!0)
            }), 250) : LG(!1), () => {
              clearTimeout(bG)
            }
          }), [GG]), bG && wG
        }(ZG);
      (0, iG.j)(ZZ.b, null);
      const hG = (0, ZZ.j)(),
        dG = hG.some((GG => GG.panel)),
        {
          userContext: JG
        } = (0, XG.e)(),
        rG = (0, WG.c)("inventory", (GG => {
          const bG = GG.chest;
          return null !== bG && (zw(bG.numSlots) || uw(bG, JG.whamm))
        })),
        zG = Rw(ZG),
        EG = Rw(ZG),
        [oG, uG] = (0, SG.useState)([]),
        mG = (0, SG.useCallback)((GG => {
          uG((bG => bG.filter((bG => bG.id !== GG))))
        }), []),
        IG = (0, SG.useRef)(null),
        FG = (0, SG.useRef)(0),
        vG = (0, SG.useCallback)((() => {
          IG.current && (FG.current = IG.current.scrollTop), LG()
        }), [LG]),
        aG = (0, UG.i)("inventoryItemsMoveable"),
        cG = (0, UG.i)("canCraft"),
        {
          clientEscMenuOptions: jG
        } = (0, sG.o)(["clientEscMenuOptions"]),
        PG = (0, SG.useRef)(null);
      PG.current || (PG.current = new gw(YG.gameBridge.latest("inventory").player));
      const MG = PG.current,
        {
          draggedDomRef: AG,
          draggedInfoRef: qG,
          specialItemRef: nG,
          hoverInfoDomRef: gG,
          longHoldSplitInfoRef: eG,
          currHoveredIdx: RG,
          currHoveredDisplayInfo: TG,
          displayDraggedItemName: HG,
          forceRerenderIfVisible: tG,
          removeDraggedInfoRef: DG,
          checkDraggedItemConsistencyWithInven: NG,
          refreshDraggedAttributes: OG,
          swapSlots: xG,
          getPointerDownForIdx: BG,
          getPointerUpForIdx: Gb,
          getSetHovering: bb,
          setCurrHoveredDisplayInfo: Zb,
          moveFollowerTo: wb
        } = nw({
          show: ZG,
          close: vG,
          canCraft: cG,
          variation: kG,
          inventoryItemsMoveable: aG,
          setCraftFlyAnims: uG
        });
      (0, SG.useEffect)((() => {
        const GG = !ZG && null !== YG.gameBridge.latest("inventory").chest;
        if (GG && YG.gameBridge.send("closeChest", null), ZG || (MG.clearMarks(), bb(null)(!1)), GG) {
          kZ.c.play("chestClose", 1).rate(.8 + .4 * Math.random())
        }
      }), [ZG]), (0, WG.b)("chestToggled", (GG => {
        if (GG ? wG() : ZG && vG(), GG) {
          kZ.c.play("chestOpen", 1).rate(.8 + .4 * Math.random())
        }
      }));
      const Sb = (0, Fb.h)();
      (0, WG.b)("inventory", (GG => {
        let {
          player: bG
        } = GG;
        var wG, SG, LG;
        (MG.update(bG, !ZG && Sb.shown), nG.current) && (nG.current = (SG = nG.current, LG = null !== (wG = bG[nG.current.idx]) && void 0 !== wG ? wG : null, Mw(SG, LG) ? (SG.attributes = LG.attributes, null !== LG.amount && SG.amount > LG.amount && (SG.amount = LG.amount), SG) : null));
        OG(), null !== RG && bb(RG)(!0), tG()
      })), (0, SG.useEffect)((() => (YG.gameBridge.send("setInventoryOpen", ZG), () => {
        YG.gameBridge.send("setInventoryOpen", !1)
      })), [ZG]);
      const Lb = (GG, bG) => {
        if (GG === pZ.h) return void(GG => {
          const bG = nG.current;
          if (!bG || null === (0, YZ.j)(YG.gameBridge.latest("inventory"), bG.idx)) return;
          const ZG = GG ? Math.max(bG.amount, 1) : 1,
            wG = bG.amount - ZG;
          if (!YG.gameBridge.send("removeInventoryItem", {
              slot: bG.idx,
              amount: ZG,
              drop: !0
            })) return;
          const SG = nG.current;
          SG && (SG.amount = Math.min(SG.amount, wG), SG.amount <= 0 && (nG.current = null)), tG()
        })(bG);
        const ZG = null === GG ? null : (0, YZ.j)(YG.gameBridge.latest("inventory"), GG);
        if (null !== ZG) {
          var wG, SG, LG;
          const yG = bG && null !== (wG = ZG.amount) && void 0 !== wG ? wG : 1;
          YG.gameBridge.send("removeInventoryItem", {
            slot: GG,
            amount: yG,
            drop: !0
          }), GG === (null === (SG = qG.current) || void 0 === SG ? void 0 : SG.idx) && (qG.current.amount -= yG, qG.current.amount <= 0 && DG(), tG()), GG === (null === (LG = nG.current) || void 0 === LG ? void 0 : LG.idx) && (nG.current = null, tG())
        }
      };
      (0, WG.b)("inventoryDropRequested", (GG => {
        ZG && RG !== pZ.h && Lb(RG, GG)
      }));
      const yb = (GG, bG) => {
        let ZG = bG;
        if (bG === pZ.h) {
          if (!nG.current) return;
          ZG = nG.current.idx
        }
        const wG = xG(GG, ZG);
        if (wG && qG.current && (qG.current.idx === ZG ? qG.current.idx = GG : qG.current.idx === GG && (qG.current.idx = ZG)), wG && bG === pZ.h) {
          const GG = (0, YZ.j)(YG.gameBridge.latest("inventory"), ZG);
          nG.current = GG ? {
            idx: ZG,
            name: GG.name,
            attributes: GG.attributes,
            amount: (0, YZ.d)(GG)
          } : null
        }
        tG()
      };
      (0, WG.b)("numberKeyPressed", (GG => {
        null !== RG && ZG && yb(GG - 1, RG)
      })), (0, SG.useEffect)((() => {
        ZG || (nG.current = null, DG(), Zb(null))
      }), [ZG, DG, Zb, nG]);
      const kb = nG.current;
      (0, SG.useEffect)((() => {
        RG === pZ.h && bb(pZ.h)(!0)
      }), [kb, RG, bb]);
      const Ub = () => {
        NG(), OG(), tG()
      };
      (0, WG.b)("chestRefreshed", Ub), (0, WG.b)("inventorySynced", Ub);
      const [Yb, Vb] = (0, SG.useState)(new Map), pb = null !== (bG = Yb.get(kG)) && void 0 !== bG ? bG : null, fb = (GG, bG) => {
        Vb((ZG => {
          const wG = ZG.get(GG);
          return wG && wG.name === bG.name && wG.XV === bG.XV ? ZG : new Map(ZG).set(GG, bG)
        }))
      };
      (0, iG.g)("craftingRecipesEdited", (() => {
        tG()
      })), (0, iG.g)(RZ.e, (GG => {
        let {
          variation: bG,
          itemName: ZG
        } = GG;
        fb(bG, {
          name: ZG,
          XV: 0
        })
      }));
      const [Qb, Kb] = (0, SG.useState)(null), [hb, db] = (0, SG.useState)(null);
      (0, WG.b)("enchantingTableOpened", (GG => {
        let {
          position: bG,
          blockName: ZG
        } = GG;
        Kb(bG), db(ZG)
      }));
      const [Jb, rb] = (0, SG.useState)(""), [zb, Eb] = (0, SG.useState)(null);
      (0, SG.useEffect)((() => {
        ZG && IG.current && (IG.current.scrollTop = FG.current)
      }), [ZG]);
      return (GG => {
        const bG = (0, SG.useRef)(GG);
        bG.current = GG, (0, SG.useEffect)((() => {
          if (!GG.show) return;
          const ZG = (GG, ZG, wG, SG) => {
              const {
                getPointerDownForIdx: LG,
                getPointerUpForIdx: yG
              } = bG.current;
              LG(GG)(ew(ZG, wG, SG)), yG(GG)(ew(ZG, wG, SG))
            },
            wG = {
              primary: (GG, bG) => {
                ZG(GG, bG, 0, !1)
              },
              secondary: (GG, bG) => {
                ZG(GG, bG, 2, !1)
              },
              quickMove: (GG, bG) => {
                ZG(GG, bG, 0, !0)
              },
              dropHeld: (GG, ZG) => {
                bG.current.getPointerDownForIdx(pZ.e)(ew(ZG, GG ? 0 : 2, !1))
              },
              dropSlot: (GG, ZG) => {
                bG.current.dropFromIdx(GG, ZG)
              },
              swapWithHotbar: (GG, ZG) => {
                bG.current.swapWithHotbar(GG, ZG)
              },
              cancel: () => {
                bG.current.removeDraggedInfoRef()
              },
              isHolding: () => !!bG.current.draggedInfoRef.current,
              hasItemAt: GG => {
                const {
                  draggedInfoRef: ZG,
                  specialItemRef: wG
                } = bG.current;
                if (GG === pZ.h) return !!wG.current;
                const SG = (0, YZ.j)(YG.gameBridge.latest("inventory"), GG);
                return !!SG && (0, WZ.d)(GG, (0, YZ.d)(SG), [ZG.current, wG.current]).shown
              },
              hover: (GG, ZG) => {
                const {
                  moveFollowerTo: wG,
                  getSetHovering: SG
                } = bG.current;
                wG(ZG.clientX, ZG.clientY), SG(null !== GG && void 0 !== GG ? GG : void 0)(null !== GG, void 0, {
                  pageX: ZG.clientX,
                  pageY: ZG.clientY
                })
              },
              moveTo: GG => {
                bG.current.moveFollowerTo(GG.clientX, GG.clientY)
              },
              close: () => {
                bG.current.close()
              }
            };
          return (0, wZ.m)(wG)
        }), [GG.show])
      })({
        show: ZG,
        close: vG,
        draggedInfoRef: qG,
        specialItemRef: nG,
        getPointerDownForIdx: BG,
        getPointerUpForIdx: Gb,
        getSetHovering: bb,
        moveFollowerTo: wb,
        removeDraggedInfoRef: DG,
        dropFromIdx: Lb,
        swapWithHotbar: yb
      }), (0, SG.useEffect)((() => {
        KG.l.xh("inventoryDraggedItemUpdated", {
          draggedInfo: qG.current,
          specialItemInfo: nG.current,
          setHovered: bb,
          pointerDown: BG,
          pointerUp: Gb,
          variation: cG ? kG : void 0,
          craftFlyAnims: oG
        })
      })), (0, VG.jsxs)(lG.d, {
        show: ZG,
        style: {
          touchAction: ZG ? "none" : void 0
        },
        children: [qG.current && (0, VG.jsx)(hZ, {
          draggedInfo: qG.current,
          toAddRef: AG
        }), qG.current && HG && (0, VG.jsx)(dZ, {
          className: "DraggedInvenItemName",
          displayInfo: qw(qG.current),
          domRef: null
        }), !qG.current && TG && (0, VG.jsx)(dZ, {
          displayInfo: TG,
          domRef: gG
        }), eG.current && qG.current && (0, VG.jsx)(JZ, {
          info: eG.current,
          draggedInfo: qG.current
        }), oG.map((GG => (0, VG.jsx)(VZ.d, {
          anim: GG,
          onComplete: mG
        }, GG.id))), (0, VG.jsx)(yG.b, {
          show: ZG,
          className: "InventoryBackgroundScreen",
          globallyUniqueKey: "Inventory",
          close: vG,
          togglePointerLock: !1,
          closeOnPressBackground: !1,
          preventContextMenu: !0,
          pointerDown: BG(pZ.e),
          pointerUp: Gb(pZ.e),
          doGameplayStartStopOnShow: !0
        }), zG && (0, VG.jsxs)("div", {
          className: "EntireInventoryWrapper",
          children: [(0, VG.jsx)("div", {
            ref: pG,
            className: "InventoryAdOuter",
            children: (0, VG.jsx)(UZ.e, {
              info: {
                adType: "leaderboard",
                adId: 6,
                adAlias: "inventory"
              },
              sizeInfo: {
                parentRef: pG
              },
              verticalAlign: "start",
              showing: ZG && QG,
              extraContrastBackgroundBox: "top",
              noFillShowBloxdAdProbability: 0,
              autoRefreshMode: "none"
            })
          }), (0, VG.jsxs)("div", {
            className: "InventoryWrapper",
            children: [(0, VG.jsxs)("div", {
              className: zZ()("Inventory", {
                WithGameButtons: hG.length > 0,
                WithPanelButtons: dG,
                WideChestOpen: rG
              }),
              children: [(0, VG.jsx)("div", {
                className: "InventoryFiller"
              }), (0, VG.jsx)(yZ, {
                show: ZG,
                buttons: hG
              }), (0, VG.jsxs)("div", {
                className: "InvenBody",
                children: [(0, VG.jsx)(iw, {
                  variation: kG,
                  canCraft: cG,
                  show: ZG,
                  creativeMounted: EG,
                  specialItemRef: nG,
                  draggedInfo: qG.current,
                  getSetHovering: bb,
                  getPointerDownForIdx: BG,
                  getPointerUpForIdx: Gb,
                  enchantingTablePosition: Qb,
                  enchantingTableBlockName: hb,
                  selectedCraftable: pb,
                  dispatchSelectedCraftable: GG => {
                    fb(kG, GG)
                  },
                  creativeScrollDiv: IG,
                  creativeSearchVal: Jb,
                  setCreativeSearchVal: rb,
                  creativeCategory: zb,
                  setCreativeCategory: Eb,
                  onCraft: function(GG, bG) {
                    let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    if (NG(), (GG || ZG.length > 0) && uG((bG => {
                        const wG = [...bG],
                          SG = bG.filter((GG => "ingredient" === GG.kind)).length;
                        for (const GG of ZG.slice(0, Math.max(0, 24 - SG))) wG.push({
                          id: (0, VZ.g)(),
                          ...GG,
                          to: GG.to
                        });
                        return GG && wG.push({
                          id: (0, VZ.g)(),
                          ...GG,
                          to: (0, YZ.h)(GG.ZU)
                        }), wG
                      })), null !== bG) {
                      var wG;
                      const GG = YG.gameBridge.latest("inventory");
                      (0, CG.Hb)(null === (wG = (0, YZ.j)(GG, bG)) || void 0 === wG ? void 0 : wG.name) ? BG(bG)({
                        button: 0,
                        shiftKey: !0
                      }): xG(bG, GG.selectedSlot)
                    }
                  }
                }), (0, VG.jsx)(aw, {
                  draggedInfo: qG.current,
                  specialItemInfo: nG.current,
                  craftFlyAnims: oG,
                  getSetHovering: bb,
                  getPointerDownForIdx: BG,
                  getPointerUpForIdx: Gb,
                  variation: kG,
                  canCraft: cG,
                  isNewSlot: GG => jG.showNewItemIndicator && MG.isNew(GG)
                })]
              })]
            }), (0, VG.jsx)("div", {
              className: "InventoryAdOuter",
              children: (0, VG.jsx)("div", {
                ref: fG,
                className: "InventoryAd",
                children: (0, VG.jsx)("div", {
                  className: "InventoryAdInner"
                })
              })
            })]
          })]
        })]
      })
    }));
    var Hw = ZG(1385),
      tw = ZG(116);
    const Dw = (0, SG.memo)((function(GG) {
      let {
        show: bG,
        onOpen: ZG,
        onClose: wG
      } = GG;
      const LG = (0, SG.useRef)(0),
        kG = () => (0, Hw.j)() && !(0, Hw.n)() && LG.current <= 2;
      bG = kG() && bG;
      const UG = () => {
        LG.current++, wG()
      };
      (0, iG.g)("ctrlCrouchWithoutFullscreen", (() => {
        kG() && ZG()
      })), (0, iG.g)("displaymodeFullscreenChange", (GG => {
        bG && GG && UG()
      }));
      const YG = "crazygames" === tw.siteUsed;
      return (0, VG.jsx)(yG.b, {
        close: UG,
        escDoesExit: !0,
        show: bG,
        togglePointerLock: !1,
        globallyUniqueKey: "CantCtrlCrouchIfNotFullscreenComp",
        children: (0, VG.jsxs)("div", {
          className: "CantCtrlCrouchIfNotFullscreenComp SmallTextBold",
          children: [(0, VG.jsx)("div", {
            className: "CantCtrlCrouchHeader",
            children: "Go fullscreen to crouch with ctrl"
          }), YG && (0, VG.jsx)("div", {
            className: "CantCtrlCrouchInstructions SmallTextLight",
            children: "Press the crazygames full screen button"
          }), (0, VG.jsx)("div", {
            className: "CantCtrlCrouchSubtext SmallTextLight",
            children: "(Otherwise I can't stop CTRL+W closing the window!)"
          }), (0, VG.jsxs)("div", {
            className: "CantCtrlCrouchButtonsContainer",
            children: [!YG && (0, VG.jsx)(QG.k, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                (0, Hw.s)(), UG()
              },
              children: (0, VG.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Go Fullscreen"
              })
            }), (0, VG.jsx)(QG.C, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                UG()
              },
              children: (0, VG.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Nevermind"
              })
            })]
          })]
        })
      })
    }));
    var Nw = ZG(3594),
      Ow = ZG(3615),
      xw = ZG(1311),
      Bw = ZG(3574),
      GS = ZG(1315),
      bS = ZG(36898),
      ZS = ZG(3585),
      wS = ZG(3590);

    function SS(GG, bG) {
      return (0, bS.f)(!0, GG, bG) ? () => {
        !async function(GG) {
          await Bw.e.refresh();
          const {
            data: bG,
            failed: ZG
          } = Bw.e.getState();
          if (null === bG || ZG) return;
          const wG = Bw.e.getExclusion(GG);
          if ("blocked" === wG) return;
          const SG = null === wG;
          xw.NotificationProvider.showCustomPopup({
            body: bG => {
              const ZG = ZG => ({
                text: ZS.f[ZG].text,
                onClick: () => {
                  bG(), (0, wS.f)(ZG, GG, null)
                }
              });
              return (0, VG.jsx)(GS.j, {
                title: SG ? "socialBar:ignoreOrBlockAfterReport" : "socialBar:blockAfterReport",
                textOpts: {
                  title: {
                    playerName: GG
                  }
                },
                secondary: SG ? ZG("ignore") : void 0,
                confirm: ZG("block"),
                cancel: {
                  text: "socialBar:notNow",
                  onClick: bG
                },
                destructive: !0
              })
            },
            disableExitButton: !0,
            unlockPointerKey: "exclusionAfterReport"
          })
        }(GG)
      } : null
    }
    ZG(3609);
    const LS = (0, SG.memo)((function(GG) {
      let {
        show: bG,
        onOpen: ZG,
        onClose: wG
      } = GG;
      const [LG, kG] = (0, SG.useState)(""), [UG, pG] = (0, SG.useState)(""), [fG, QG] = (0, SG.useState)(null), [KG, hG] = (0, SG.useState)(null), dG = (0, WG.f)("hiddenPlayerNames"), JG = {
        kind: "worldCodeLine",
        onSubmit: (GG, bG) => {
          wG(), YG.gameBridge.send("reportWorldCodeChat", {
            chatMsgId: KG,
            Uk: GG,
            details: bG
          })
        }
      }, rG = {
        kind: "player",
        shownPlayerName: (0, bb.g)(LG, dG),
        onSubmit: (GG, bG) => {
          wG(), (0, Ow.d)({
            playerId: UG,
            playerName: LG,
            chatMsgId: KG,
            policyId: GG,
            details: bG,
            onAccepted: SS(LG, dG)
          })
        }
      };
      return (0, iG.g)("OpenReportMenu", (GG => {
        let {
          playerEId: bG,
          playerName: wG,
          vV: SG,
          serverChatMsgId: LG
        } = GG;
        pG(bG), kG(wG), QG(SG), hG(LG), ZG()
      })), (0, VG.jsx)(yG.b, {
        show: bG,
        close: wG,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeReportComponent",
        children: (0, VG.jsx)("div", {
          className: "ReportPanel",
          children: bG && (0, VG.jsx)(Nw.b, {
            reported: null === UG ? JG : rG,
            chatMessage: fG,
            inGame: !0,
            onCancel: wG
          })
        })
      })
    }));
    var yS = ZG(37193),
      kS = ZG(3602);
    const US = {
        playerGone: "report:reportKeyPlayerGone",
        rateLimited: "report:reportKeyRateLimited",
        timedOut: "report:reportKeyTimedOut"
      },
      YS = (0, SG.memo)((function(GG) {
        var bG, ZG;
        let {
          show: wG,
          onOpen: LG,
          onClose: kG
        } = GG;
        const {
          t: UG
        } = (0, DG.w)(), [pG, fG] = (0, SG.useState)(null), [KG, hG] = (0, SG.useState)(0);
        (0, iG.g)("OpenDiscordReportBox", (GG => {
          YG.gameBridge.send("requestDiscordReportKey", GG), fG(null), hG(0), LG()
        })), (0, iG.g)("setDiscordReportKey", fG);
        const dG = wG && null === pG;
        (0, SG.useEffect)((() => {
          if (!dG) return;
          const GG = setTimeout((() => {
            console.warn("No answer to a Discord report key request within 10000 ms"), fG({
              NL: null,
              OL: "timedOut"
            })
          }), 1e4);
          return () => {
            clearTimeout(GG)
          }
        }), [dG]);
        const JG = null !== (bG = null === pG || void 0 === pG ? void 0 : pG.NL) && void 0 !== bG ? bG : null,
          rG = null !== (ZG = null === pG || void 0 === pG ? void 0 : pG.OL) && void 0 !== ZG ? ZG : null;
        return (0, VG.jsx)(yG.b, {
          show: wG,
          close: kG,
          padShowsHud: !0,
          togglePointerLock: !1,
          escDoesExit: !0,
          className: "ReportBackgroundScreen",
          globallyUniqueKey: "MakeDiscordReportComponent",
          children: (0, VG.jsx)("div", {
            className: "ReportPanel",
            children: (0, VG.jsxs)(GS.j, {
              className: "ReportKeyBox",
              title: "report:discordReportTitle",
              subtitle: null === rG ? "report:discordReportDescription" : void 0,
              confirm: null === rG ? {
                text: "report:openDiscord",
                onClick: () => {
                  window.open(yS.b, "_blank", "noreferrer")
                },
                padMouseOnly: !0
              } : void 0,
              cancel: {
                text: null === rG ? "general:cancel" : "general:ok",
                onClick: kG
              },
              padStartsOn: "cancel",
              children: [null !== rG && (0, VG.jsx)(kS.b, {
                children: UG(US[rG])
              }), null === rG && (0, VG.jsxs)("div", {
                className: "ReportKeyRow",
                children: [(0, VG.jsx)("div", {
                  className: "ReportKeyInner",
                  children: null !== JG && void 0 !== JG ? JG : UG("report:loadingReportKey")
                }), (0, VG.jsx)(QG.d, {
                  className: "ReportKeyCopyButton",
                  onClick: () => {
                    navigator.clipboard.writeText(JG).catch((GG => {
                      console.error("Failed to copy report key:", GG)
                    })), hG(Date.now())
                  },
                  disabled: Date.now() - KG < 1e3 || !JG,
                  children: Date.now() - KG < 1e3 ? UG("general:copied") : UG("general:copy")
                })]
              })]
            })
          })
        })
      }));
    var VS = ZG(1251);
    const pS = {
        "game:sandbox": {
          "customLobbyBlock:classicLobbySpawn": {
            blocks: ["Spawn Block (White)"],
            tooltip: "customLobbyBlock:classicLobbySpawnDescription"
          }
        },
        "game:bedwars": {
          "customLobbyBlock:bedwarsBeds": {
            blocks: ["Red Bed", "Blue Bed", "Lime Bed", "Yellow Bed", "Cyan Bed", "White Bed", "Pink Bed", "Gray Bed"],
            tooltip: "customLobbyBlock:bedwarsBedsDescription"
          },
          "customLobbyBlock:bedwarsChests": {
            blocks: ["Chest", "Moonstone Chest"],
            tooltip: "customLobbyBlock:bedwarsChestsDescription"
          },
          "customLobbyBlock:bedwarsTeamSpawns": {
            blocks: ["Spawn Block (Red)", "Spawn Block (Blue)", "Spawn Block (Lime)", "Spawn Block (Yellow)", "Spawn Block (Cyan)", "Spawn Block (White)", "Spawn Block (Pink)", "Spawn Block (Gray)"],
            tooltip: "customLobbyBlock:bedwarsTeamSpawnsDescription"
          },
          "customLobbyBlock:bedwarsShopkeeperSpawns": {
            blocks: ["Wizard Shop Spawn Block", "Trader Shop Spawn Block"],
            tooltip: "customLobbyBlock:bedwarsShopkeeperSpawnsDescription"
          },
          "customLobbyBlock:bedwarsGenerators": {
            blocks: ["Generator Spawn Block (Red)", "Generator Spawn Block (Blue)", "Generator Spawn Block (Lime)", "Generator Spawn Block (Yellow)", "Generator Spawn Block (Cyan)", "Generator Spawn Block (White)", "Generator Spawn Block (Pink)", "Generator Spawn Block (Gray)", "Generator Spawn Block (Diamond)", "Generator Spawn Block (Moonstone)", "Generator Spawn Block (Ore)"],
            tooltip: "customLobbyBlock:bedwarsGeneratorsDescription"
          }
        },
        "game:skyWars": {
          "customLobbyBlock:skywarsBlocks": {
            blocks: ["Spawn Block (White)", "Chest", "Moonstone Chest"],
            tooltip: "customLobbyBlock:skywarsBlocksDescription"
          }
        },
        "game:cubeWarfare": {
          "customLobbyBlock:cubeWarfareSpawns": {
            blocks: ["Spawn Block (White)"],
            tooltip: "customLobbyBlock:cubeWarfareSpawnsDescription"
          }
        },
        "game:bridge": {
          "customLobbyBlock:bridgeSpawns": {
            blocks: ["Spawn Block (Red)", "Spawn Block (Blue)"],
            tooltip: "customLobbyBlock:bridgeSpawnsDescription"
          },
          "customLobbyBlock:bridgeGoals": {
            blocks: ["Goal Block (Red)", "Goal Block (Blue)"],
            tooltip: "customLobbyBlock:bridgeGoalsDescription"
          }
        },
        "game:rocketSpleef": {
          "customLobbyBlock:rocketSpleefSpawns": {
            blocks: ["Spawn Block (White)", "Drop Location Block"],
            tooltip: "customLobbyBlock:rocketSpleefSpawnsDescription"
          }
        },
        "game:rocketObby": {
          "customLobbyBlock:rocketObbyBlocks": {
            blocks: ["Spawn Block (White)", "Checkpoint Block", "Finish Block", "Obby Death Block", "Obby Absorb Block", "Obby Absorb Death Block"],
            tooltip: "customLobbyBlock:rocketObbyBlocksDescription"
          }
        }
      },
      fS = (0, SG.memo)((function(GG) {
        let {
          show: bG,
          onOpen: ZG,
          onClose: wG
        } = GG;
        const [LG, kG] = (0, SG.useState)(null), UG = (0, SG.useRef)(0), pG = (0, SG.useRef)(null), {
          t: fG
        } = (0, DG.w)();
        (0, iG.g)("EditCustomLobbyBlock", (GG => {
          let {
            pos: bG
          } = GG;
          kG(bG), null !== bG && ZG(), pG.current.scrollTo(0, UG.current)
        }));
        const QG = GG => {
          YG.gameBridge.send("setCustomLobbyBlock", {
            pos: LG,
            blockName: GG
          }), wG()
        };
        return (0, VG.jsx)(yG.b, {
          className: "CustomLobbyBlockEditorOuter",
          close: wG,
          escDoesExit: !0,
          show: bG,
          togglePointerLock: !1,
          globallyUniqueKey: "CustomLobbyBlockEditor",
          children: (0, VG.jsx)("div", {
            className: "CustomLobbyBlockEditor",
            ref: pG,
            onScroll: () => {
              UG.current = pG.current.scrollTop
            },
            children: (0, VG.jsx)("div", {
              className: "CustomLobbyBlockGameContainer",
              children: Object.entries(pS).map((GG => {
                let [bG, ZG] = GG;
                return (0, VG.jsxs)("div", {
                  className: "CustomLobbyBlockGame",
                  children: [(0, VG.jsx)("h2", {
                    className: "CustomLobbyBlockGameTitle",
                    children: fG(bG)
                  }), (0, VG.jsx)("div", {
                    className: "CustomLobbyBlockCategoryContainer",
                    children: Object.entries(ZG).map((GG => {
                      let [bG, {
                        tooltip: ZG,
                        blocks: wG
                      }] = GG;
                      return (0, VG.jsxs)("div", {
                        className: "CustomLobbyBlockCategory",
                        children: [(0, VG.jsxs)("h3", {
                          className: "CustomLobbyBlockCategoryTitle",
                          children: [fG(bG), (0, VG.jsx)(HG.d, {
                            hoverInfo: fG(ZG),
                            className: "CustomLobbyBlockTooltip"
                          })]
                        }), (0, VG.jsx)("div", {
                          className: "CustonLobbyBlockContainer",
                          children: wG.map((GG => (0, VG.jsx)(QS, {
                            blockName: GG,
                            selectBlock: QG
                          }, GG)))
                        })]
                      }, bG)
                    }))
                  })]
                }, bG)
              }))
            })
          })
        })
      })),
      QS = (0, SG.memo)((function(GG) {
        var bG;
        let {
          blockName: ZG,
          selectBlock: wG
        } = GG;
        const SG = (0, yw.c)(ZG),
          LG = null !== (bG = void 0 === SG ? void 0 : (0, Lw.displayNameOf)(SG)) && void 0 !== bG ? bG : ZG,
          yG = void 0 === SG ? void 0 : (0, Lw.descriptionOf)(SG);
        return (0, VG.jsx)(HG.h, {
          tooltipInner: (0, VG.jsxs)("div", {
            className: "CustomLobbyBlockNameTooltip",
            children: [(0, VG.jsx)("div", {
              className: "CustomLobbyBlockName",
              children: (0, VG.jsx)(uG.c, {
                text: LG
              })
            }), yG && (0, VG.jsx)("div", {
              className: "CustomLobbyBlockDescription",
              children: (0, VG.jsx)(uG.c, {
                text: yG
              })
            })]
          }),
          children: (0, VG.jsx)("div", {
            className: "CustomLobbyBlockButton",
            onClick: () => wG(ZG),
            children: (0, VG.jsx)(LZ.b, {
              itemName: ZG,
              amount: 1
            })
          })
        }, ZG)
      }));
    var KS = ZG(3004),
      hS = ZG(4248),
      dS = ZG(34515);

    function JS() {
      const GG = (0, WG.f)("itemInfo");
      return (0, SG.useMemo)((() => function(GG) {
        return {
          getDefaultItemStat(bG, ZG) {
            var wG;
            const SG = GG[bG];
            return "description" === ZG ? null === SG || void 0 === SG ? void 0 : SG.description : null !== (wG = null === SG || void 0 === SG ? void 0 : SG.displayName) && void 0 !== wG ? wG : bG
          }
        }
      }(GG)), [GG])
    }
    const rS = (0, SG.memo)((function(GG) {
        var bG, ZG, wG, LG, kG, UG, YG, pG, fG, QG, KG, hG, JG, rG, zG, EG, oG, XG, uG, CG, WG, mG, IG;
        let {
          togglePointerLock: FG,
          show: vG,
          onOpen: aG,
          onClose: cG
        } = GG;
        const {
          t: lG
        } = (0, DG.w)(), jG = JS(), PG = (0, SG.useRef)(null), MG = (0, SG.useRef)(hS.c.MobHungerLevel.Hungry), AG = (0, SG.useRef)(null), sG = (0, KS.d)(), qG = (0, SG.useRef)(null), nG = (0, SG.useRef)(null), gG = PG.current;
        (0, SG.useEffect)((() => {
          if (!vG) return;
          const GG = dS.d.openPet(qG.current);
          return nG.current = GG, () => {
            GG.close(), nG.current = null
          }
        }), [vG]), (0, SG.useEffect)((() => {
          vG && gG && nG.current.show(function(GG) {
            var bG;
            let {
              mobType: ZG,
              mobSettings: wG
            } = GG;
            return {
              mobType: ZG,
              variation: null !== (bG = wG.variation) && void 0 !== bG ? bG : "default",
              metaInfo: wG.metaInfo,
              tamed: !(0, rw.L)(wG.ownerDbId)
            }
          }(gG))
        }), [vG, gG]), (0, SG.useEffect)((() => {
          const GG = () => {
            var GG;
            const bG = hS.c.getMobHungerLevel(null === (GG = PG.current) || void 0 === GG ? void 0 : GG.mobSettings.petInfo.lastFedAt);
            if (bG !== MG.current && (MG.current = bG, sG()), AG.current) {
              var ZG;
              const GG = Date.now(),
                bG = hS.c.getNextStateAt(null === (ZG = PG.current) || void 0 === ZG ? void 0 : ZG.mobSettings.petInfo.lastFedAt);
              let wG = Math.floor((bG - GG) / 1e3),
                SG = "";
              if (wG > 3600) {
                SG += Math.floor(wG / 60 / 60).toString().padStart(2, "0"), SG += ":", wG %= 3600
              }
              const LG = wG % 60;
              SG += Math.floor(wG / 60).toString().padStart(2, "0"), SG += ":", SG += LG.toString().padStart(2, "0"), AG.current.textContent = SG
            }
          };
          GG();
          const bG = setInterval(GG, 250);
          return () => {
            clearInterval(bG)
          }
        }), [gG, sG]), (0, iG.g)("showPetUi", (GG => {
          let {
            mobType: bG,
            mobSettings: ZG
          } = GG;
          PG.current = {
            mobType: bG,
            mobSettings: ZG
          }, vG || aG()
        }));
        const eG = null === (bG = PG.current) || void 0 === bG ? void 0 : bG.mobSettings.health,
          RG = null === (ZG = PG.current) || void 0 === ZG ? void 0 : ZG.mobSettings.maxHealth,
          TG = hS.c.getFriendshipLevelInfo(null !== (wG = null === (LG = PG.current) || void 0 === LG ? void 0 : LG.mobSettings.petInfo.friendshipPoints) && void 0 !== wG ? wG : 0);
        return (0, VG.jsx)(yG.b, {
          className: "PetUIOuter",
          close: cG,
          escDoesExit: !0,
          show: vG,
          togglePointerLock: FG,
          forcePointerUnlock: vG,
          globallyUniqueKey: "PetUI",
          children: (0, VG.jsx)("div", {
            className: "PetUI",
            children: (0, VG.jsxs)("div", {
              className: "PetUIContainer",
              children: [(0, VG.jsxs)("div", {
                className: "PetUILeftSideContainer",
                children: [(0, VG.jsx)("div", {
                  className: "PetUITitle",
                  children: null !== (kG = null === (UG = PG.current) || void 0 === UG ? void 0 : UG.mobSettings.name) && void 0 !== kG ? kG : "Your Pet"
                }), (0, VG.jsx)("div", {
                  className: "PetUICanvasContainer",
                  ref: qG
                })]
              }), (0, VG.jsxs)("div", {
                className: "PetUIInformation",
                children: [!(0, rw.L)(null === (YG = PG.current) || void 0 === YG ? void 0 : YG.mobSettings.petInfo.friendshipPoints) && (0, VG.jsxs)("div", {
                  className: "PetUIFriendshipPoints",
                  children: [(0, VG.jsx)("div", {
                    className: "PetUIFriendshipPointsTitle",
                    children: lG("mobAiPlugin:friendshipTitle")
                  }), (0, VG.jsx)("div", {
                    className: "PetUIFriendshipHearts",
                    children: hS.c.getIconsFromFriendshipPoints(null !== (pG = PG.current.mobSettings.petInfo.friendshipPoints) && void 0 !== pG ? pG : 0).map(((GG, bG) => (0, VG.jsx)("div", {
                      className: "PetUIFriendshipHeart",
                      children: (0, VG.jsx)(LZ.b, {
                        itemName: GG,
                        amount: 1
                      })
                    }, bG)))
                  }), (0, VG.jsx)("div", {
                    className: "PetUIFriendshipBar",
                    children: (0, VG.jsxs)("div", {
                      className: "PetUIFriendshipBarBackground",
                      children: [(0, VG.jsx)("div", {
                        className: "PetUIFriendshipBarForeground",
                        style: {
                          transform: `scaleX(${TG.totalPointsForNextLevel>0?Math.max(TG.pointsIntoCurrentLevel/TG.totalPointsForNextLevel,0):1})`,
                          transformOrigin: "left center"
                        }
                      }), (0, VG.jsx)("div", {
                        className: "PetUIFriendshipBarText",
                        children: TG.totalPointsForNextLevel > 0 ? ` ${Math.ceil(TG.pointsIntoCurrentLevel)}/${Math.ceil(TG.totalPointsForNextLevel)}` : Math.ceil(TG.pointsIntoCurrentLevel)
                      })]
                    })
                  })]
                }), (0, VG.jsxs)("div", {
                  className: "PetUIHungry",
                  children: [(0, VG.jsx)("div", {
                    className: "PetUIHungryTitle",
                    children: lG("mobAiPlugin:hungerTitle")
                  }), (0, VG.jsx)("div", {
                    className: "PetUIHungryCurrent",
                    children: hS.c.hungerLevelIcons[MG.current].map(((GG, bG) => (0, VG.jsx)("div", {
                      className: "PetUIHungryIcon",
                      children: (0, VG.jsx)(LZ.b, {
                        itemName: GG,
                        amount: 1
                      })
                    }, bG)))
                  }), (0, VG.jsxs)("div", {
                    className: "PetUIHungryLevel",
                    children: [lG(hS.c.hungerLevelTranslations[MG.current].translationKey), MG.current !== hS.c.MobHungerLevel.Starving && !(0, rw.L)(null === (fG = PG.current) || void 0 === fG ? void 0 : fG.mobSettings.petInfo.lastFedAt) && (0, VG.jsxs)("div", {
                      className: "PetUIHungryNext",
                      children: [lG("mobAiPlugin:nextFeedIn", {
                        state: lG(hS.c.hungerLevelTranslations[MG.current + 1].translationKey)
                      }), ":", " ", (0, VG.jsx)("span", {
                        ref: AG
                      })]
                    })]
                  })]
                }), (0, VG.jsx)(HG.h, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, VG.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: lG("mobAiPlugin:healthTooltip")
                  }),
                  children: (0, VG.jsxs)("div", {
                    className: zZ()("PetUIQuickStatsItem", {
                      Disabled: (0, rw.L)(eG) || (0, rw.L)(RG)
                    }),
                    children: [(0, VG.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, VG.jsx)(LZ.b, {
                        itemName: "Health",
                        amount: 1
                      })
                    }), (0, VG.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (0, rw.L)(eG) || (0, rw.L)(RG) ? "" : (0, VG.jsxs)(VG.Fragment, {
                        children: [Math.ceil(eG), (0, VG.jsxs)("span", {
                          className: "PetUIQuickStatsValueMax",
                          children: ["/", Math.ceil(RG)]
                        })]
                      })
                    })]
                  })
                }), (0, VG.jsx)(HG.h, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, VG.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: lG("mobAiPlugin:attackDamageTooltip")
                  }),
                  children: (0, VG.jsxs)("div", {
                    className: zZ()("PetUIQuickStatsItem", {
                      Disabled: (0, rw.L)(null === (QG = PG.current) || void 0 === QG ? void 0 : QG.mobSettings.attackDamage) || PG.current.mobSettings.attackDamage <= 0
                    }),
                    children: [(0, VG.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, VG.jsx)(LZ.b, {
                        itemName: "Iron Sword",
                        amount: 1
                      })
                    }), (0, VG.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (KG = PG.current) || void 0 === KG ? void 0 : KG.mobSettings.attackDamage) || ""
                    })]
                  })
                }), (0, VG.jsx)(HG.h, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, VG.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: lG("mobAiPlugin:secondaryAttackDamageTooltip")
                  }),
                  children: (0, VG.jsxs)("div", {
                    className: zZ()("PetUIQuickStatsItem", {
                      Disabled: (0, rw.L)(null === (hG = PG.current) || void 0 === hG ? void 0 : hG.mobSettings.secondaryAttackDamage) || PG.current.mobSettings.secondaryAttackDamage <= 0
                    }),
                    children: [(0, VG.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, VG.jsx)(LZ.b, {
                        itemName: "Stone Crossbow",
                        amount: 1
                      })
                    }), (0, VG.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (JG = PG.current) || void 0 === JG ? void 0 : JG.mobSettings.secondaryAttackDamage) || ""
                    })]
                  })
                }), (0, VG.jsx)(HG.h, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, VG.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: lG("mobAiPlugin:speedTooltip")
                  }),
                  children: (0, VG.jsxs)("div", {
                    className: zZ()("PetUIQuickStatsItem", {
                      Disabled: (0, rw.L)(null === (rG = PG.current) || void 0 === rG ? void 0 : rG.mobSettings.baseRunningSpeed)
                    }),
                    children: [(0, VG.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, VG.jsx)(LZ.b, {
                        itemName: "Speed",
                        amount: 1
                      })
                    }), (0, VG.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: null !== (zG = null === (EG = PG.current) || void 0 === EG || null === (oG = EG.mobSettings.baseRunningSpeed) || void 0 === oG ? void 0 : oG.toFixed(2)) && void 0 !== zG ? zG : ""
                    })]
                  })
                }), (0, VG.jsx)(HG.h, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, VG.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: lG("mobAiPlugin:saddledTooltip")
                  }),
                  children: (0, VG.jsxs)("div", {
                    className: zZ()("PetUIQuickStatsItem", {
                      Disabled: "Saddled" !== (null === (XG = PG.current) || void 0 === XG ? void 0 : XG.mobSettings.metaInfo)
                    }),
                    children: [(0, VG.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, VG.jsx)(LZ.b, {
                        itemName: "Saddle",
                        amount: 1
                      })
                    }), (0, VG.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: "Saddled" === (null === (uG = PG.current) || void 0 === uG ? void 0 : uG.mobSettings.metaInfo) ? (0, VG.jsx)(dG.c, {
                        name: "check"
                      }) : ""
                    })]
                  })
                }), !(0, rw.L)(null === (CG = PG.current) || void 0 === CG ? void 0 : CG.mobSettings.tameInfo) && (0, VG.jsxs)(VG.Fragment, {
                  children: [(0, VG.jsxs)("div", {
                    className: "PetUIFood",
                    children: [(0, VG.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, VG.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, VG.jsx)(ES, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:superlikedFoodTitle"
                          },
                          description: null,
                          tintColor: hS.c.feedTextColours[hS.c.MobFoodType.Superliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, VG.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: (0, VG.jsx)("div", {
                          className: "PetUIFoodItem",
                          children: PG.current.mobSettings.petInfo.superlikedFoodKnown ? (0, VG.jsx)(zS, {
                            food: PG.current.mobSettings.petInfo.superlikedFood
                          }) : (0, VG.jsx)(ES, {
                            icon: "Question Mark",
                            displayName: {
                              translationKey: "mobAiPlugin:superlikedFoodUnknownTitle"
                            },
                            description: {
                              translationKey: "mobAiPlugin:superlikedFoodUnknownDescription"
                            }
                          })
                        })
                      })]
                    }), (0, VG.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, VG.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, VG.jsx)(ES, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:likedFoodTitle"
                          },
                          description: null,
                          tintColor: hS.c.feedTextColours[hS.c.MobFoodType.Liked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, VG.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (WG = PG.current.mobSettings.tameInfo.likedFoods) || void 0 === WG ? void 0 : WG.filter((GG => !PG.current.mobSettings.petInfo.superlikedFoodKnown || GG !== PG.current.mobSettings.petInfo.superlikedFood)).map((GG => (0, VG.jsx)(zS, {
                          food: GG
                        }, GG)))
                      })]
                    }), (0, VG.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, VG.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, VG.jsx)(ES, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:neutralFoodTitle"
                          },
                          description: null,
                          tintColor: hS.c.feedTextColours[hS.c.MobFoodType.Neutral],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, VG.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (mG = PG.current.mobSettings.tameInfo.neutralFoods) || void 0 === mG ? void 0 : mG.map((GG => (0, VG.jsx)(zS, {
                          food: GG
                        }, GG)))
                      })]
                    }), (0, VG.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, VG.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, VG.jsx)(ES, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:dislikedFoodTitle"
                          },
                          description: null,
                          tintColor: hS.c.feedTextColours[hS.c.MobFoodType.Disliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, VG.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (IG = PG.current.mobSettings.tameInfo.dislikedFoods) || void 0 === IG ? void 0 : IG.map((GG => (0, VG.jsx)(zS, {
                          food: GG
                        }, GG)))
                      })]
                    })]
                  }), PG.current.mobSettings.tameInfo.levelUpBonuses && (0, VG.jsx)("div", {
                    className: "PetUIFeedDrops",
                    children: Array.from({
                      length: hS.c.MAX_LEVEL + 1
                    }).map(((GG, bG) => {
                      const ZG = bG;
                      if (0 === ZG) return null;
                      const wG = PG.current.mobSettings.tameInfo.levelUpBonuses[ZG],
                        SG = hS.c.getBonusDisplayInfo(jG, PG.current.mobSettings, PG.current.mobType, wG);
                      return (0, VG.jsxs)("div", {
                        className: zZ()("PetUIFeedDropContainer", {
                          Selected: ZG === hS.c.getFriendshipLevelInfo(PG.current.mobSettings.petInfo.friendshipPoints).level
                        }),
                        children: [(0, VG.jsx)("div", {
                          className: "PetUIFeedDropHearts",
                          children: Array.from({
                            length: ZG
                          }).map(((GG, bG) => (0, VG.jsx)("div", {
                            className: "PetUIFeedDropHeart",
                            children: (0, VG.jsx)(LZ.b, {
                              itemName: "Friendship",
                              amount: 1
                            })
                          }, `${ZG}-${bG}`)))
                        }), (0, VG.jsx)("div", {
                          className: "PetUIFeedDropItems",
                          children: SG && (0, VG.jsx)(ES, {
                            icon: SG.icon,
                            displayName: SG.displayName,
                            description: SG.description
                          })
                        })]
                      }, ZG)
                    }))
                  })]
                })]
              })]
            })
          })
        })
      })),
      zS = (0, SG.memo)((function(GG) {
        let {
          food: bG,
          includeDescription: ZG = !1
        } = GG;
        const wG = JS(),
          SG = wG.getDefaultItemStat(bG, "displayName"),
          LG = wG.getDefaultItemStat(bG, "description");
        return (0, VG.jsx)(ES, {
          icon: bG,
          displayName: SG,
          description: ZG ? LG : null
        })
      })),
      ES = (0, SG.memo)((function(GG) {
        let {
          icon: bG,
          displayName: ZG,
          description: wG,
          tintColor: SG,
          className: LG = "PetUIFoodItem"
        } = GG;
        return (0, VG.jsx)(HG.h, {
          delayHide: 0,
          delayShow: 0,
          tooltipInner: (0, VG.jsxs)("div", {
            className: "PetUIFoodItemTooltip",
            children: [(0, VG.jsx)("div", {
              className: "PetUIFoodItemName",
              children: (0, VG.jsx)(uG.c, {
                text: ZG
              })
            }), wG && (0, VG.jsx)("div", {
              className: "PetUIFoodItemDescription",
              children: (0, VG.jsx)(uG.c, {
                text: wG
              })
            })]
          }),
          children: (0, VG.jsx)("div", {
            className: LG,
            children: (0, VG.jsx)(LZ.b, {
              itemName: bG,
              amount: 1,
              tintColor: SG
            })
          })
        })
      }));
    var oS = ZG(3766),
      XS = ZG(1096),
      uS = ZG(1198),
      iS = ZG(2404),
      CS = ZG(37200),
      WS = ZG(982),
      mS = ZG(2359);

    function IS(GG) {
      let {
        peers: bG
      } = GG;
      const [ZG, wG] = (0, SG.useState)(null), LG = (0, WG.f)("players");
      return (0, VG.jsx)("div", {
        className: "CodeEditorPresence",
        children: bG.map((GG => {
          var bG, SG;
          const yG = null !== (bG = null === (SG = LG.byId[GG.playerId]) || void 0 === SG ? void 0 : SG.cosmetics) && void 0 !== bG ? bG : {};
          return (0, VG.jsxs)("div", {
            className: zZ()("PresenceIcon", {
              Viewer: !GG.isEditor
            }),
            style: {
              backgroundColor: GG.colour
            },
            onMouseEnter: () => {
              wG(GG.playerId)
            },
            onMouseLeave: () => {
              wG(null)
            },
            children: [(0, VG.jsx)(mS.c, {
              cosmetics: yG
            }), ZG === GG.playerId && (0, VG.jsx)("div", {
              className: "PresenceTooltip",
              style: {
                backgroundColor: GG.colour
              },
              children: GG.playerName
            })]
          }, GG.playerId)
        }))
      })
    }
    var FS = ZG(641),
      vS = ZG(37197),
      aS = ZG(36891),
      cS = ZG(37207);

    function lS(GG) {
      const bG = GG.split("/"),
        ZG = [];
      for (let wG = 1; wG < bG.length; wG++) ZG.push(bG.slice(0, wG).join("/"));
      return ZG
    }

    function jS(GG) {
      return GG.slice(GG.lastIndexOf("/") + 1)
    }
    const PS = (0, SG.memo)((function(GG) {
      var bG;
      let {
        files: ZG,
        activePath: wG,
        canEdit: LG,
        directoryLinked: yG,
        pluginNames: kG,
        activePluginName: UG,
        activePluginFile: YG,
        onSelect: pG,
        onSelectPlugin: fG,
        onCreate: KG,
        onRename: hG,
        onRenameFolder: JG,
        onDelete: rG,
        onToggleDirectorySync: zG,
        schematics: EG,
        onManageSchematic: oG
      } = GG;
      const {
        t: XG
      } = (0, DG.w)(), uG = null !== (bG = (0, CS.b)(ZG)) && void 0 !== bG ? bG : uS.k, iG = Object.keys(ZG), [CG, WG] = (0, SG.useState)((() => new Set)), mG = function(GG, bG, ZG) {
        const wG = {
          folders: new Map,
          files: []
        };
        for (const yG of GG) {
          if (yG === bG) continue;
          let GG = wG;
          for (const bG of lS(yG)) {
            let ZG = GG.folders.get(bG);
            ZG || (ZG = {
              folders: new Map,
              files: []
            }, GG.folders.set(bG, ZG)), GG = ZG
          }
          GG.files.push(yG)
        }
        const SG = [];
        GG.includes(bG) && SG.push({
          kind: "file",
          path: bG,
          name: jS(bG),
          depth: 0
        });
        const LG = (GG, bG) => {
          const wG = [...GG.folders.entries()].sort(((GG, bG) => {
            let [ZG] = GG, [wG] = bG;
            return ZG.localeCompare(wG)
          }));
          for (const [yG, kG] of wG) {
            const GG = ZG.has(yG);
            SG.push({
              kind: "folder",
              path: yG,
              name: jS(yG),
              depth: bG,
              collapsed: GG
            }), GG || LG(kG, bG + 1)
          }
          GG.files.sort(((GG, bG) => GG.localeCompare(bG)));
          for (const ZG of GG.files) SG.push({
            kind: "file",
            path: ZG,
            name: jS(ZG),
            depth: bG
          })
        };
        return LG(wG, 0), SG
      }(iG, uG, CG);
      (0, SG.useEffect)((() => {
        WG((GG => {
          const bG = new Set(GG);
          let ZG = !1;
          for (const SG of lS(wG)) ZG = bG.delete(SG) || ZG;
          return ZG ? bG : GG
        }))
      }), [wG]);
      const IG = iG.length >= nb.E,
        FG = (GG, bG) => {
          if (GG.length > iS.p) return `Path must be at most ${iS.p} characters`;
          if (!(0, iS.o)(GG)) return "Use a relative .js, .ts, or .d.ts path, e.g. lib/util.js";
          if ("index.d.ts" === GG) return "index.d.ts cannot be the world-code entry";
          const wG = !!bG && (0, CS.e)(bG, GG);
          if (bG && (0, CS.i)(bG) && !wG) return `Cannot rename ${bG} (only swapping ${uS.k} and ${uS.o} is allowed)`;
          if (GG in ZG) return "A file with that path already exists";
          if ((0, CS.i)(GG) && !wG) {
            if ((GG === uS.k ? uS.o : uS.k) in ZG) return `World code cannot have both ${uS.k} and ${uS.o}`
          }
          return null
        },
        vG = GG => {
          xw.NotificationProvider.showInputPopup({
            title: "codeEditor:newFile",
            subtitle: "codeEditor:newFilePathHint",
            placeholderText: "lib/util.js",
            initialValue: void 0 === GG ? void 0 : `${GG}/`,
            submitText: "general:create",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: GG => FG(GG)
          }).getResult().then((GG => {
            "notificationTornDown" !== GG && null !== GG && "submit" === GG.type && KG(GG.value)
          }))
        },
        aG = GG => {
          xw.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFile",
            subtitle: "codeEditor:newFilePathHint",
            initialValue: GG,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: bG => bG === GG ? "That is already the file's path" : FG(bG, GG)
          }).getResult().then((bG => {
            "notificationTornDown" !== bG && null !== bG && "submit" === bG.type && hG(GG, bG.value)
          }))
        },
        cG = GG => {
          const bG = GG => GG.replace(/\/+$/, "");
          xw.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFolder",
            subtitle: "codeEditor:renameFolderHint",
            initialValue: GG,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: ZG => {
              const wG = bG(ZG);
              if (wG === GG) return "That is already the folder's path";
              for (const [bG, SG] of(0, CS.n)(iG, GG, wG)) {
                const GG = FG(SG, bG);
                if (null !== GG) return GG
              }
              return null
            }
          }).getResult().then((ZG => {
            "notificationTornDown" !== ZG && null !== ZG && "submit" === ZG.type && JG(GG, bG(ZG.value))
          }))
        },
        lG = GG => {
          xw.NotificationProvider.showPromptPopup({
            title: "codeEditor:deleteFile",
            subtitle: "codeEditor:deleteFileConfirm",
            textOpts: {
              subtitle: {
                path: GG
              }
            },
            confirmText: "general:delete",
            destructive: !0,
            cancelText: "general:cancel"
          }).getResult().then((bG => {
            !0 === bG && rG(GG)
          }))
        };
      return (0, VG.jsxs)("div", {
        className: "CodeEditorFileTree",
        children: [(0, VG.jsxs)("div", {
          className: "FileTreeHeader",
          children: [(0, VG.jsx)("span", {
            children: "Files"
          }), LG && !IG && (0, VG.jsx)(QG.n, {
            className: "FileTreeHeaderButton",
            onClick: () => {
              vG()
            },
            children: (0, VG.jsx)(dG.c, {
              name: "plus"
            })
          })]
        }), (0, VG.jsxs)("div", {
          className: "FileTreeList",
          children: [mG.map((GG => {
            const bG = GG.path;
            if ("folder" === GG.kind) return (0, VG.jsx)(sS, {
              path: bG,
              name: GG.name,
              depth: GG.depth,
              collapsed: GG.collapsed,
              onToggle: () => {
                var GG;
                GG = bG, WG((bG => {
                  const ZG = new Set(bG);
                  return ZG.delete(GG) || ZG.add(GG), ZG
                }))
              },
              canCreate: LG && !IG,
              canRename: LG,
              onCreate: vG,
              onRename: cG
            }, `folder:${bG}`);
            const SG = (0, CS.i)(bG),
              yG = uS.k in ZG && uS.o in ZG,
              kG = !SG || yG,
              YG = null === UG && bG === wG;
            return (0, VG.jsx)(nS, {
              path: bG,
              label: GG.name,
              depth: GG.depth,
              isActive: YG,
              canRename: LG,
              onSelect: pG,
              onRename: aG,
              onDelete: lG,
              canDelete: kG && LG
            }, bG)
          })), (0, VG.jsxs)("div", {
            className: "FileTreeHeader Secondary",
            children: [(0, VG.jsxs)("span", {
              children: ["Schematics (", Object.keys(EG).length, "/", cS.g, ")"]
            }), LG && (0, VG.jsx)(QG.n, {
              className: "FileTreeHeaderButton",
              disabled: Object.keys(EG).length >= cS.g,
              onClick: () => {
                oG("")
              },
              children: (0, VG.jsx)(dG.c, {
                name: "plus"
              })
            })]
          }), Object.keys(EG).sort().map((GG => (0, VG.jsx)(nS, {
            path: GG,
            isActive: !1,
            canRename: !1,
            canDelete: !1,
            onSelect: oG
          }, GG))), kG.length > 0 && (0, VG.jsxs)(VG.Fragment, {
            children: [(0, VG.jsx)("div", {
              className: "FileTreeHeader Secondary",
              children: (0, VG.jsx)("span", {
                children: "Plugins"
              })
            }), kG.map((GG => {
              var bG;
              const ZG = vS.h[GG],
                wG = Object.keys(null !== (bG = null === ZG || void 0 === ZG ? void 0 : ZG.files) && void 0 !== bG ? bG : {
                  "index.ts": ""
                }).sort(((GG, bG) => "index.ts" === GG ? -1 : "index.ts" === bG ? 1 : GG.localeCompare(bG)));
              return (0, VG.jsxs)("div", {
                children: [(0, VG.jsx)("div", {
                  className: "FileTreePluginName",
                  children: (0, CS.u)(GG)
                }), wG.map((bG => (0, VG.jsx)(nS, {
                  path: bG,
                  nested: !0,
                  isActive: UG === GG && YG === bG,
                  canRename: !1,
                  onSelect: () => {
                    fG(GG, bG)
                  },
                  canDelete: !1
                }, bG)))]
              }, GG)
            }))]
          })]
        }), (0, VG.jsx)("div", {
          className: "FileTreeFooter",
          children: (0, VG.jsx)(QG.d, {
            className: "FileTreeFooterButton",
            onClick: zG,
            children: XG(yG ? "codeEditor:directorySyncUnlink" : "codeEditor:directorySyncLink")
          })
        })]
      })
    }));

    function MS(GG) {
      return GG > 0 ? {
        className: "Indented",
        style: {
          "--tree-depth": GG
        }
      } : {
        className: void 0,
        style: void 0
      }
    }

    function AS(GG) {
      let {
        depth: bG
      } = GG;
      return (0, VG.jsx)(VG.Fragment, {
        children: Array.from({
          length: bG
        }, ((GG, bG) => (0, VG.jsx)("span", {
          className: "FileTreeIndentGuide",
          style: {
            "--guide-level": bG
          }
        }, bG)))
      })
    }

    function sS(GG) {
      let {
        path: bG,
        name: ZG,
        depth: wG,
        collapsed: SG,
        onToggle: LG,
        canCreate: yG,
        canRename: kG,
        onCreate: UG,
        onRename: YG
      } = GG;
      const pG = [];
      yG && pG.push({
        icon: "plus",
        text: "codeEditor:newFile",
        onPointerDown: () => {
          UG(bG)
        }
      }), kG && pG.push({
        icon: "pen",
        text: "codeEditor:renameFolder",
        onPointerDown: () => {
          YG(bG)
        }
      });
      const fG = MS(wG);
      return (0, VG.jsxs)("div", {
        className: zZ()("FileTreeItem FileTreeFolder", fG.className),
        style: fG.style,
        children: [(0, VG.jsx)(AS, {
          depth: wG
        }), (0, VG.jsxs)("button", {
          type: "button",
          className: "FileTreeItemName",
          "aria-expanded": !SG,
          onClick: LG,
          children: [(0, VG.jsx)(dG.c, {
            className: "FileTreeFolderCaret",
            name: SG ? "caret-right" : "caret-down"
          }), (0, VG.jsx)(dG.c, {
            className: "FileTreeFolderIcon",
            name: SG ? "folder" : "folder-open"
          }), ZG]
        }), (0, VG.jsx)(qS, {
          path: bG,
          actions: pG
        })]
      })
    }

    function qS(GG) {
      let {
        path: bG,
        actions: ZG
      } = GG;
      const wG = (0, SG.useRef)(null);
      return 0 === ZG.length ? null : (0, VG.jsxs)("div", {
        ref: wG,
        className: "FileTreeItemActions",
        children: [(0, VG.jsx)("button", {
          type: "button",
          className: "FileTreeActionMenuButton",
          "aria-label": `Actions for ${bG}`,
          children: (0, VG.jsx)(dG.c, {
            name: "ellipsis"
          })
        }), (0, VG.jsx)(aS.d, {
          triggerElementRef: wG,
          options: ZG
        })]
      })
    }

    function nS(GG) {
      let {
        path: bG,
        label: ZG = bG,
        depth: wG = 0,
        isActive: SG,
        canRename: LG,
        onSelect: yG,
        onRename: kG,
        onDelete: UG,
        canDelete: YG,
        nested: pG
      } = GG;
      const fG = [];
      LG && kG && fG.push({
        icon: "pen",
        text: "codeEditor:rename",
        onPointerDown: () => {
          kG(bG)
        }
      }), YG && UG && fG.push({
        icon: "xmark",
        text: "general:delete",
        onPointerDown: () => {
          UG(bG)
        }
      });
      const QG = MS(wG);
      return (0, VG.jsxs)("div", {
        className: zZ()("FileTreeItem", QG.className, {
          Active: SG,
          Nested: pG
        }),
        style: QG.style,
        children: [(0, VG.jsx)(AS, {
          depth: wG
        }), (0, VG.jsx)("button", {
          type: "button",
          className: "FileTreeItemName",
          title: ZG === bG ? void 0 : bG,
          onClick: () => {
            yG(bG)
          },
          children: ZG
        }), (0, VG.jsx)(qS, {
          path: bG,
          actions: fG
        })]
      })
    }
    async function gS(GG) {
      const bG = (0, CS.b)(GG);
      if (!bG || "" === GG[bG].trim()) return [];
      const {
        collectImportedWorldCodePluginNames: wG
      } = await Promise.all([ZG.e(303), ZG.e(304)]).then((() => ZG(41902)));
      return (0, vS.e)(wG(GG))
    }
    var eS = ZG(37212);

    function RS(GG, bG) {
      const ZG = Object.keys(GG),
        wG = Object.keys(bG);
      if (ZG.length !== wG.length) return !1;
      for (const SG of ZG)
        if (!(SG in bG) || GG[SG] !== bG[SG]) return !1;
      return !0
    }

    function TS(GG, bG) {
      const ZG = [],
        wG = [],
        SG = [];
      for (const LG of Object.keys(bG)) LG in GG ? GG[LG] !== bG[LG] && SG.push(LG) : ZG.push(LG);
      for (const LG of Object.keys(GG)) LG in bG || wG.push(LG);
      return ZG.sort(), wG.sort(), SG.sort(), {
        creates: ZG,
        deletes: wG,
        updates: SG
      }
    }

    function HS(GG, bG) {
      var ZG;
      const wG = {
          ...GG
        },
        SG = (0, CS.b)(bG),
        LG = (0, CS.b)(wG);
      if (uS.k in wG && uS.o in wG) {
        const GG = null !== SG && void 0 !== SG ? SG : uS.o,
          ZG = GG === uS.k ? uS.o : uS.k;
        var yG;
        if (!(GG in wG)) wG[GG] = null !== (yG = bG[GG]) && void 0 !== yG ? yG : "";
        return delete wG[ZG], wG
      }
      var kG;
      return SG && !(SG in wG) ? (LG || (wG[SG] = null !== (kG = bG[SG]) && void 0 !== kG ? kG : ""), wG) : (LG || SG || (wG[uS.k] = null !== (ZG = wG[uS.k]) && void 0 !== ZG ? ZG : "", delete wG[uS.o]), wG)
    }

    function tS(GG, bG) {
      const ZG = (0, CS.b)(bG),
        wG = uS.k in bG && uS.o in bG;
      return GG.filter((GG => !(0, CS.i)(GG) || (!!wG || ZG !== GG)))
    }
    async function DS(GG, bG, wG) {
      const SG = GG.getLobbyFiles(),
        LG = (0, nb.m)(wG, (0, CS.q)(SG, bG)),
        yG = await GG.ensureJoined(bG),
        kG = (0, iS.r)(yG.docKey);
      if (yG.doc === LG) return;
      for (let ZG = 0; ZG < 100; ZG++) {
        const ZG = GG.getCollabSnapshot();
        if (ZG && (0, iS.r)(ZG.docKey) === kG && GG.getActivePath() === bG) {
          if (GG.replaceActiveDoc(kG, LG)) return;
          await (0, rw.R)(40)
        } else await (0, rw.R)(40)
      }
      const {
        ChangeSet: UG
      } = await ZG.e(299).then((() => ZG(41727))), VG = GG.getCollabSnapshot(), pG = VG && (0, iS.r)(VG.docKey) === kG ? VG : yG;
      await async function(GG, bG, ZG, wG) {
        const SG = GG.of({
            from: 0,
            to: ZG.length,
            insert: wG
          }, ZG.length),
          LG = JSON.stringify([{
            clientID: bG.clientID,
            changes: SG.toJSON()
          }]),
          yG = (0, iS.r)(bG.docKey);
        LG.length <= iS.h ? YG.gameBridge.send("sendCodeCollab", {
          BS: iS.c.Push,
          bL: yG,
          ZL: bG.version,
          LL: LG
        }) : await (0, XS.postJsonWithMetricsCookiesAndJsonResponse)(`${bG.httpConfig.gsUrl}/code/collab-push`, oS.m["collab-push"].toBuffer({
          gameNameWithVariation: bG.httpConfig.gameNameWithVariation,
          lobbyName: bG.httpConfig.lobbyName,
          docKey: yG,
          version: bG.version,
          updates: LG
        }), {
          retries: 0
        })
      }(UG, pG, pG.doc, LG)
    }
    class NS {
      constructor(GG) {
        this.handle = null, this.lastSynced = {}, this.lastLobbySeen = null, this.pendingDocText = new Map, this.flushingDocText = !1, this.recheckingDisk = !1, this.stopWatch = null, this.lobbyPollTimer = null, this.running = !1, this.applying = !1, this.reconcileSettled = !1, this.reconcileInFlight = !1, this.linked = !1, this.scaffoldedPluginNamesKey = null, this.scaffoldingLocalTypes = Promise.resolve(), this.bridge = void 0, this.bridge = GG
      }
      async writeLobbyFiles(GG) {
        const bG = {
            ...this.bridge.getLobbyFiles()
          },
          ZG = {
            ...bG
          };
        for (const {
            path: LG,
            text: yG
          }
          of GG) ZG[LG] = yG;
        if (!GG.every((GG => {
            let {
              path: bG,
              text: wG
            } = GG;
            return (0, nb.m)(wG, (0, CS.q)(ZG, bG)) === wG
          }))) return !1;
        const wG = [];
        try {
          for (const {
              path: bG,
              text: ZG
            }
            of GG) wG.push(bG), bG in this.bridge.getLobbyFiles() || (this.bridge.createFile(bG, {
            focus: !1
          }), await this.bridge.waitForLobbyPath(bG, !0)), await DS(this.bridge, bG, ZG)
        } catch (SG) {
          for (const GG of wG) GG in bG ? await DS(this.bridge, GG, bG[GG]).catch((bG => {
            console.error("World Code AI: couldn't put back", GG, bG)
          })) : this.bridge.deleteFile(GG);
          throw SG
        }
        return !0
      }
      isLinked() {
        return this.linked
      }
      async linkFolder() {
        if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), !1;
        const GG = await (0, eS.C)(this.bridge.getStorageKey());
        return !!GG && (this.handle = GG, this.linked = !0, this.reconcileSettled = !1, await this.scaffoldLocalTypes(GG), !0)
      }
      async unlinkFolder() {
        const GG = this.bridge.getStorageKey();
        this.pendingDocText.clear(), this.stopContinuousSync(), this.handle = null, this.linked = !1, this.reconcileSettled = !1, this.lastSynced = {}, this.lastLobbySeen = null, this.scaffoldedPluginNamesKey = null, await (0, eS.d)(GG), this.bridge.onUnlinked()
      }
      async tryRestoreHandle() {
        const GG = this.bridge.getStorageKey(),
          bG = await (0, eS.y)(GG);
        return !!bG && (!!await (0, eS.l)(bG, "readwrite") && (this.handle = bG, this.linked = !0, await (0, eS.N)(GG, bG), await this.scaffoldLocalTypes(bG), !0))
      }
      scaffoldLocalTypes(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bridge.getLobbyFiles();
        return this.scaffoldingLocalTypes = this.scaffoldingLocalTypes.then((async () => {
          try {
            const wG = (await gS(bG)).map((GG => vS.h[GG])),
              SG = wG.map((GG => {
                var bG;
                return `${GG.name}:${Object.keys(null!==(bG=null===GG||void 0===GG?void 0:GG.files)&&void 0!==bG?bG:{}).sort().join(",")}`
              })).join("\0");
            if (this.scaffoldedPluginNamesKey === SG) return;
            const {
              ensureLocalBloxdTypes: LG
            } = await Promise.all([ZG.e(85), ZG.e(301), ZG.e(306)]).then((() => ZG(41904)));
            await LG(GG, wG), this.scaffoldedPluginNamesKey = SG
          } catch (wG) {
            console.error("[WorldCodeDirectorySync] Failed to scaffold local @bloxd types", wG)
          }
        })), this.scaffoldingLocalTypes
      }
      async startWhenReady() {
        this.linked && this.handle && !this.running && !this.reconcileInFlight && this.bridge.getCollabSnapshot() && (this.reconcileSettled ? this.beginWatch() : await this.runInitialReconcileAndSync())
      }
      stopContinuousSync() {
        this.flushDocTextToDisk(), this.running = !1, this.stopWatch && (this.stopWatch(), this.stopWatch = null), this.lobbyPollTimer && (clearInterval(this.lobbyPollTimer), this.lobbyPollTimer = null)
      }
      async onLobbyFilesChanged(GG) {
        this.handle && await this.scaffoldLocalTypes(this.handle, GG), this.running && this.handle && !this.applying && await this.applyRemoteTreeToDisk(GG)
      }
      async onDocTextChanged(GG, bG) {
        if (!this.handle) return;
        const ZG = [this.scaffoldLocalTypes(this.handle, {
          ...this.bridge.getLobbyFiles(),
          [GG]: bG
        })];
        this.running && (this.pendingDocText.set(GG, bG), ZG.push(this.flushDocTextToDisk())), await Promise.all(ZG)
      }
      async flushDocTextToDisk() {
        if (this.flushingDocText || this.applying || !this.handle || 0 === this.pendingDocText.size) return;
        const GG = this.handle;
        this.flushingDocText = !0, this.applying = !0;
        try {
          for (; this.pendingDocText.size > 0;) {
            const bG = [...this.pendingDocText];
            this.pendingDocText.clear();
            for (const [ZG, wG] of bG) this.lastSynced[ZG] !== wG && (await (0, eS.V)(GG, ZG, wG), this.lastSynced = {
              ...this.lastSynced,
              [ZG]: wG
            })
          }
        } catch (bG) {
          console.error("[WorldCodeDirectorySync] Failed to write remote doc to disk", bG), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
        } finally {
          this.flushingDocText = !1, this.applying = !1, this.settleAfterApplying()
        }
      }
      settleAfterApplying() {
        this.flushDocTextToDisk(), this.recheckDiskFiles()
      }
      async recheckDiskFiles() {
        if (this.running && this.handle && !this.applying && !this.recheckingDisk) {
          this.recheckingDisk = !0;
          try {
            await this.onDiskFilesChanged(await (0, eS.G)(this.handle))
          } catch (GG) {
            console.error("[WorldCodeDirectorySync] Failed to re-check disk after sync", GG)
          } finally {
            this.recheckingDisk = !1
          }
        }
      }
      async runInitialReconcileAndSync() {
        if (this.handle && !this.reconcileInFlight) {
          this.reconcileInFlight = !0;
          try {
            if (!await (0, eS.l)(this.handle, "readwrite")) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncPermissionDenied"), "warning"), void(this.reconcileSettled = !0);
            await this.bridge.pullLobbyFiles();
            const bG = this.bridge.getLobbyFiles(),
              ZG = await (0, eS.G)(this.handle);
            for (const GG of Object.keys(bG).filter(cS.c)) {
              if (ZG[GG] === eS.s) return void this.bridge.setMessage(`Move ${GG} outside the linked folder before syncing its placeholder.`, "warning");
              ZG[GG] = cS.n
            }
            if (RS(ZG, bG)) {
              for (const GG of Object.keys(bG).filter(cS.c)) await (0, eS.V)(this.handle, GG, cS.n);
              return this.lastSynced = {
                ...ZG
              }, void this.beginWatch()
            }
            const wG = await this.promptReconcile(function(GG) {
              return null !== (0, CS.b)(GG)
            }(ZG));
            if ("unlink" === wG) return void await this.unlinkFolder();
            if ("dismissed" === wG) return void(this.reconcileSettled = !0);
            this.applying = !0;
            try {
              if ("local" === wG) {
                if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), void(this.reconcileSettled = !0);
                await this.applyLocalTreeToLobby(ZG);
                for (const GG of Object.keys(bG).filter(cS.c)) await (0, eS.V)(this.handle, GG, cS.n);
                this.lastSynced = {
                  ...await (0, eS.G)(this.handle)
                }
              } else await (0, eS.X)(this.handle, bG), this.lastSynced = {
                ...bG
              }
            } catch (GG) {
              return console.error("[WorldCodeDirectorySync] Reconcile failed", GG), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning"), void(this.reconcileSettled = !0)
            } finally {
              this.applying = !1, this.settleAfterApplying()
            }
            this.beginWatch()
          } finally {
            this.reconcileInFlight = !1
          }
        }
      }
      async promptReconcile(GG) {
        return await new Promise((bG => {
          const ZG = [{
              choice: "local",
              Button: QG.d,
              labelKey: "directorySyncUseLocal",
              descriptionKey: "directorySyncUseLocalDescription"
            }, {
              choice: "live",
              Button: QG.d,
              labelKey: "directorySyncUseLive",
              descriptionKey: "directorySyncUseLiveDescription"
            }, {
              choice: "unlink",
              Button: QG.d,
              labelKey: "directorySyncUseUnlink",
              descriptionKey: "directorySyncUseUnlinkDescription"
            }],
            wG = (0, VG.jsxs)("div", {
              className: "CodeEditorDirectorySyncPrompt",
              children: [(0, VG.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptTitle",
                children: this.bridge.t("codeEditor:directorySyncDifferTitle")
              }), (0, VG.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptBody",
                children: GG ? this.bridge.t("codeEditor:directorySyncDifferBody") : this.bridge.t("codeEditor:directorySyncLocalInvalidEntry")
              }), (0, VG.jsx)("div", {
                className: "CodeEditorDirectorySyncOptions",
                children: ZG.filter((bG => "local" !== bG.choice || GG)).map((GG => {
                  let {
                    choice: ZG,
                    Button: wG,
                    labelKey: LG,
                    descriptionKey: yG
                  } = GG;
                  return (0, VG.jsxs)("div", {
                    className: "CodeEditorDirectorySyncOption",
                    children: [(0, VG.jsx)(wG, {
                      className: "CodeEditorButton",
                      onClick: () => {
                        (GG => {
                          SG.tearDownNotification(), bG(GG)
                        })(ZG)
                      },
                      children: this.bridge.t(`codeEditor:${LG}`)
                    }), (0, VG.jsx)("div", {
                      className: "CodeEditorDirectorySyncOptionDescription",
                      children: this.bridge.t(`codeEditor:${yG}`)
                    })]
                  }, ZG)
                }))
              })]
            }),
            SG = xw.NotificationProvider.showCustomPopup({
              body: wG,
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "worldCodeDirectorySync"
            });
          SG.getResult().then((GG => {
            "notificationTornDown" === GG && bG("dismissed")
          }))
        }))
      }
      beginWatch() {
        this.handle && (this.stopContinuousSync(), this.reconcileSettled = !0, this.running = !0, this.stopWatch = (0, eS.P)(this.handle, (GG => {
          this.onDiskFilesChanged(GG)
        })), this.lobbyPollTimer = setInterval((() => {
          this.pollRemoteLobbyFiles()
        }), 2e3))
      }
      async pollRemoteLobbyFiles() {
        if (this.running && !this.applying) try {
          await this.bridge.pullLobbyFiles()
        } catch (GG) {
          console.error("[WorldCodeDirectorySync] Lobby poll failed", GG)
        }
      }
      async onDiskFilesChanged(GG) {
        if (!this.running || !this.handle || this.applying) return;
        if (!this.bridge.canEditCode()) return;
        const bG = this.bridge.getLobbyFiles();
        let ZG = HS(GG, this.lastSynced);
        for (const LG in bG)
          if ((0, cS.c)(LG) && ZG[LG] === eS.s) return void this.bridge.setMessage("Move binary schematic files outside the linked folder. Add them through the Code Editor.", "warning");
        const wG = Object.keys(ZG).filter((GG => (0, cS.c)(GG) && !(GG in bG)));
        wG.length > 0 && this.bridge.setMessage("Add or rename schematics in the Code Editor. Unknown local schematic files are not uploaded.", "warning");
        for (const LG of Object.keys(bG).filter(cS.c))(LG in ZG || wG.length > 0 || !(LG in this.lastSynced)) && (ZG[LG] = cS.n);
        if (!RS(ZG, GG)) {
          this.applying = !0;
          try {
            await this.persistEntryRepair(GG, ZG), ZG = HS(await (0, eS.G)(this.handle), this.lastSynced)
          } finally {
            this.applying = !1
          }
        }
        if (!RS(ZG, this.lastSynced)) {
          this.applying = !0;
          try {
            const GG = TS(this.lastSynced, ZG);
            if (await this.pushDiskDeltaToLobby(ZG, bG), null !== this.lastLobbySeen)
              for (const ZG of [...GG.creates, ...GG.updates, ...GG.deletes])(0, cS.c)(ZG) || (ZG in bG ? this.lastLobbySeen[ZG] = bG[ZG] : delete this.lastLobbySeen[ZG]);
            this.lastSynced = {
              ...ZG
            }
          } catch (SG) {
            console.error("[WorldCodeDirectorySync] Disk\u2192lobby sync failed", SG), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async persistEntryRepair(GG, bG) {
        if (this.handle) {
          for (const ZG of Object.keys(GG)) ZG in bG || await (0, eS.I)(this.handle, ZG);
          for (const [ZG, wG] of Object.entries(bG)) GG[ZG] !== wG && await (0, eS.V)(this.handle, ZG, wG)
        }
      }
      async applyRemoteTreeToDisk(GG) {
        if (!this.handle) return;
        const bG = this.lastLobbySeen;
        if (null === bG) return void(this.lastLobbySeen = {
          ...GG
        });
        const ZG = Object.keys(GG).filter((ZG => bG[ZG] !== GG[ZG])),
          wG = Object.keys(bG).filter((bG => !(bG in GG)));
        if (0 !== ZG.length || 0 !== wG.length) {
          this.applying = !0;
          try {
            for (const bG of [...wG, ...ZG]) try {
              if (bG in GG) await (0, eS.V)(this.handle, bG, GG[bG]), this.lastSynced = {
                ...this.lastSynced,
                [bG]: GG[bG]
              }, this.lastLobbySeen = {
                ...this.lastLobbySeen,
                [bG]: GG[bG]
              };
              else {
                await (0, eS.I)(this.handle, bG);
                const GG = {
                  ...this.lastSynced
                };
                delete GG[bG], this.lastSynced = GG;
                const ZG = {
                  ...this.lastLobbySeen
                };
                delete ZG[bG], this.lastLobbySeen = ZG
              }
            } catch (SG) {
              console.error("[WorldCodeDirectorySync] Lobby\u2192disk sync failed", SG), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
            }
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async renameLobbyEntryIfSwitched(GG, bG) {
        const ZG = function(GG, bG) {
          const ZG = (0, CS.b)(GG),
            wG = (0, CS.b)(bG);
          return ZG && wG && ZG !== wG ? {
            from: ZG,
            to: wG
          } : null
        }(GG, bG);
        return !!ZG && (this.bridge.renameFile(ZG.from, ZG.to), await this.bridge.waitForLobbyPath(ZG.to, !0), !0)
      }
      async applyLocalTreeToLobby(GG) {
        var bG;
        const ZG = this.bridge.getActivePath();
        await this.renameLobbyEntryIfSwitched(this.bridge.getLobbyFiles(), GG);
        const wG = this.bridge.getLobbyFiles(),
          SG = TS(wG, GG),
          LG = tS(SG.deletes, wG);
        for (const YG of SG.creates)(0, cS.c)(YG) || (this.bridge.createFile(YG, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(YG, !0));
        for (const YG of LG)(0, cS.c)(YG) || (this.bridge.deleteFile(YG), await this.bridge.waitForLobbyPath(YG, !1));
        if (!(0, CS.b)(this.bridge.getLobbyFiles()) && !(0, CS.b)(GG)) {
          if (this.bridge.createFile(uS.k, {
              focus: !1
            }), await this.bridge.waitForLobbyPath(uS.k, !0), !this.handle) return;
          await (0, eS.V)(this.handle, uS.k, ""), GG = {
            ...GG,
            [uS.k]: ""
          }
        }
        const yG = this.bridge.getLobbyFiles();
        for (const YG of Object.keys(GG))(0, cS.c)(YG) || yG[YG] !== GG[YG] && await DS(this.bridge, YG, GG[YG]);
        const kG = this.bridge.getLobbyFiles(),
          UG = ZG in kG ? ZG : null !== (bG = (0, CS.b)(kG)) && void 0 !== bG ? bG : uS.k;
        await this.bridge.ensureJoined(UG)
      }
      async pushDiskDeltaToLobby(GG, bG) {
        const ZG = this.bridge.getActivePath(),
          wG = await this.renameLobbyEntryIfSwitched(bG, GG) ? this.bridge.getLobbyFiles() : bG,
          SG = TS(this.lastSynced, GG),
          LG = tS(SG.deletes, wG).filter((GG => GG in wG));
        for (const yG of SG.creates)(0, cS.c)(yG) || (yG in this.bridge.getLobbyFiles() || (this.bridge.createFile(yG, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(yG, !0)), await DS(this.bridge, yG, GG[yG]));
        for (const yG of LG)(0, cS.c)(yG) ? await this.bridge.deleteSchematic(yG) : (this.bridge.deleteFile(yG), await this.bridge.waitForLobbyPath(yG, !1));
        for (const yG of SG.updates)(0, cS.c)(yG) || await DS(this.bridge, yG, GG[yG]);
        ZG in this.bridge.getLobbyFiles() && this.bridge.getActivePath() !== ZG && await this.bridge.ensureJoined(ZG)
      }
    }
    var OS = ZG(1163);

    function xS() {
      const {
        websocketUrl: GG,
        gameNameWithVariation: bG,
        lobbyName: ZG
      } = YG.gameBridge.latest("connectedGame");
      return {
        gsUrl: OS.clientSideServerUrls.getHttpUrlFromWebSocketUrl(GG),
        gameNameWithVariation: bG,
        lobbyName: ZG
      }
    }
    async function BS(GG) {
      const {
        gsUrl: bG,
        gameNameWithVariation: ZG,
        lobbyName: wG
      } = xS();
      return await (0, XS.postBinaryWithMetricsCookiesAndCustomResponse)(`${bG}/code/schematics`, oS.Kj.schematics.toBuffer({
        gameNameWithVariation: ZG,
        lobbyName: wG,
        request: JSON.stringify(GG)
      }), {
        retries: 0
      }, XS.HttpPayloadType.json)
    }
    var GL = ZG(36672);

    function bL(GG) {
      let {
        path: bG,
        revision: ZG
      } = GG;
      const [wG, LG] = (0, SG.useState)(""), [yG, kG] = (0, SG.useState)(!1), [UG, YG] = (0, SG.useState)(0);
      return (0, SG.useEffect)((() => {
        let GG = !1;
        return LG(""), kG(!1), BS({
          action: "preview",
          path: bG
        }).then((bG => {
          GG || LG(`data:image/webp;base64,${bG.previewBase64}`)
        })).catch((bG => {
          console.error("Could not load schematic preview", bG), GG || kG(!0)
        })), () => {
          GG = !0
        }
      }), [bG, ZG, UG]), (0, VG.jsxs)("div", {
        className: "SchematicPreview",
        children: [wG && (0, VG.jsx)("img", {
          src: wG,
          alt: `Preview of ${bG}`
        }), !wG && !yG && (0, VG.jsx)(mG.b, {
          loaderType: "Secondary"
        }), yG && (0, VG.jsxs)(VG.Fragment, {
          children: [(0, VG.jsx)("div", {
            className: "SmallTextLight",
            role: "status",
            children: "Preview unavailable."
          }), (0, VG.jsx)(QG.d, {
            onClick: () => {
              YG(UG + 1)
            },
            children: "Retry preview"
          })]
        })]
      })
    }
    var ZL = ZG(3122);

    function wL(GG) {
      var bG;
      let {
        initialPath: ZG,
        onChanged: wG,
        onClose: LG
      } = GG;
      const yG = "" === ZG,
        [kG, UG] = (0, SG.useState)(null),
        [YG, pG] = (0, SG.useState)(ZG),
        [fG, KG] = (0, SG.useState)(!1),
        [hG, dG] = (0, SG.useState)(!1),
        [JG, rG] = (0, SG.useState)(null),
        [zG, EG] = (0, SG.useState)(!1),
        [oG, XG] = (0, SG.useState)(""),
        uG = (0, SG.useRef)(null),
        iG = (0, SG.useRef)(!1),
        CG = (0, SG.useRef)(!0);
      (0, SG.useEffect)((() => (CG.current = !0, BS({
        action: "state"
      }).then((GG => {
        CG.current && UG(GG)
      })).catch((GG => {
        console.error("Could not load schematic assets", GG), CG.current && XG("Could not load schematics. Reopen this panel to retry.")
      })), () => {
        CG.current = !1
      })), []);
      const WG = null === kG || void 0 === kG ? void 0 : kG.assets[ZG],
        mG = Object.keys(null !== (bG = null === kG || void 0 === kG ? void 0 : kG.assets) && void 0 !== bG ? bG : {}).length,
        IG = YG.trim(),
        FG = IG ? (0, cS.c)(IG) ? null !== kG && void 0 !== kG && kG.assets[IG] && (yG || IG !== ZG) ? "A schematic already uses that path." : "" : "Use a relative path ending in .bloxdschem." : "",
        vG = !!IG && !FG && (yG ? mG < cS.g : IG !== ZG),
        aG = zG || !kG;
      async function cG(GG) {
        if (!iG.current && CG.current) {
          iG.current = !0, EG(!0), XG("");
          try {
            const bG = await BS({
              ...GG,
              expectedRevision: kG.revision
            });
            wG(bG), CG.current && LG()
          } catch (ZG) {
            var bG;
            if (console.error("Schematic asset operation failed", ZG), CG.current) XG(ZG instanceof RG.b ? null !== (bG = ZG.errorMessageForUser) && void 0 !== bG ? bG : ZG.message : String(ZG));
            try {
              const GG = await BS({
                action: "state"
              });
              wG(GG), CG.current && UG(GG)
            } catch (SG) {
              console.error("Could not refresh schematic assets", SG)
            }
          } finally {
            iG.current = !1, CG.current && EG(!1)
          }
        }
      }
      return (0, VG.jsxs)("div", {
        className: "WorldCodeSchematicPanel InputGenericPopup PromptGenericPopup FileTreePathPopup",
        children: [(0, VG.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: yG ? "New schematic" : fG ? "Rename schematic" : "Schematic"
        }), oG && (0, VG.jsx)("div", {
          className: "InputGenericPopupError SmallTextLight",
          role: "alert",
          children: oG
        }), !kG && !oG && (0, VG.jsx)("div", {
          className: "SmallTextLight",
          children: "Loading schematic\u2026"
        }), (0, VG.jsxs)("fieldset", {
          disabled: aG,
          children: [yG || fG ? (0, VG.jsxs)("label", {
            className: "SchematicField",
            children: [(0, VG.jsx)("span", {
              className: "SmallTextBold",
              children: "Project path"
            }), (0, VG.jsx)("div", {
              className: "InputGenericPopupInputRow",
              children: (0, VG.jsx)(lZ.b, {
                className: "InputGenericPopupInput",
                defaultValue: ZG,
                placeholderText: "maps/arena.bloxdschem",
                maxLength: 64,
                onValueChange: pG
              }, fG ? "rename" : "create")
            })]
          }) : (0, VG.jsx)("div", {
            className: "SchematicPath SmallTextBold",
            children: ZG
          }), (yG || fG) && FG && (0, VG.jsx)("div", {
            className: "InputGenericPopupError SmallTextLight",
            role: "alert",
            children: FG
          }), yG ? (0, VG.jsxs)(VG.Fragment, {
            children: [mG >= cS.g && (0, VG.jsxs)("div", {
              className: "SmallTextLight",
              children: ["Delete a schematic before adding another (", cS.g, " maximum)."]
            }), hG ? (0, VG.jsxs)(VG.Fragment, {
              children: [(0, VG.jsx)("div", {
                className: "SmallTextBold",
                children: "Choose from profile"
              }), (0, VG.jsx)("div", {
                className: "SchematicProfilePicker",
                "aria-disabled": aG || !vG,
                children: (0, VG.jsx)(GL.b, {
                  loading: null === JG,
                  schematics: null !== JG && void 0 !== JG ? JG : [],
                  disableAutoExport: !0,
                  onSchematicPicked: GG => {
                    !aG && vG && cG({
                      action: "profile",
                      path: IG,
                      schematicId: GG.schematicId
                    })
                  }
                })
              }), (0, VG.jsx)("div", {
                className: "InputGenericPopupButtons",
                children: (0, VG.jsx)(QG.d, {
                  className: "InputGenericPopupButton",
                  disabled: aG,
                  onClick: () => {
                    dG(!1)
                  },
                  children: "Back"
                })
              })]
            }) : (0, VG.jsxs)("div", {
              className: "InputGenericPopupButtons",
              children: [(0, VG.jsx)(QG.d, {
                className: "InputGenericPopupButton",
                disabled: aG || !vG,
                onClick: () => {
                  (0, ZL.f)(uG.current)
                },
                children: "Upload Schematic"
              }), (0, VG.jsx)(QG.d, {
                className: "InputGenericPopupButton",
                disabled: aG || !vG,
                onClick: () => {
                  !async function() {
                    if (dG(!0), XG(""), !JG) try {
                      const GG = await (0, XS.postJsonWithMetricsCookiesAndJsonResponse)(`${OS.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
                        retries: 0,
                        minTimeout: 3e3
                      });
                      CG.current && rG(GG)
                    } catch (GG) {
                      console.error("Could not load profile schematics", GG), CG.current && (dG(!1), XG("Could not load your schematics. Try again."))
                    }
                  }()
                },
                children: "Choose from profile"
              })]
            }), (0, VG.jsx)("input", {
              ref: uG,
              type: "file",
              accept: ".bloxdschem",
              hidden: !0,
              onChange: GG => {
                var bG;
                const ZG = null === (bG = GG.target.files) || void 0 === bG ? void 0 : bG[0];
                if (GG.target.value = "", !ZG) return;
                if (ZG.size > cS.j) return void XG("The schematic file is too large.");
                const wG = IG;
                EG(!0);
                const SG = new FileReader;
                SG.onload = () => {
                  cG({
                    action: "upload",
                    path: wG,
                    base64: String(SG.result).split(",")[1]
                  })
                }, SG.onerror = () => {
                  console.error("Could not read schematic file", SG.error), CG.current && (EG(!1), XG("Could not read the selected file."))
                }, SG.readAsDataURL(ZG)
              }
            })]
          }) : WG ? (0, VG.jsxs)(VG.Fragment, {
            children: [!fG && (0, VG.jsx)(bL, {
              path: ZG,
              revision: kG.revision
            }), !fG && (0, VG.jsxs)("p", {
              className: "SchematicDetails SmallTextLight",
              children: [Math.ceil(WG.byteSize / 1024), " KB \xb7 ", WG.dimensions.join(" \xd7 "), " blocks"]
            }), (0, VG.jsx)("div", {
              className: "InputGenericPopupButtons",
              children: fG ? (0, VG.jsxs)(VG.Fragment, {
                children: [(0, VG.jsx)(QG.d, {
                  className: "InputGenericPopupButton",
                  disabled: aG || !vG,
                  onClick: () => {
                    cG({
                      action: "rename",
                      path: ZG,
                      newPath: IG
                    })
                  },
                  children: "Rename"
                }), (0, VG.jsx)(QG.d, {
                  className: "InputGenericPopupButton",
                  disabled: aG,
                  onClick: () => {
                    KG(!1), pG(ZG)
                  },
                  children: "Cancel"
                })]
              }) : (0, VG.jsxs)(VG.Fragment, {
                children: [(0, VG.jsx)(QG.d, {
                  className: "InputGenericPopupButton",
                  disabled: aG,
                  onClick: () => {
                    KG(!0)
                  },
                  children: "Rename"
                }), (0, VG.jsx)(QG.C, {
                  className: "InputGenericPopupButton",
                  disabled: aG,
                  onClick: () => {
                    cG({
                      action: "remove",
                      path: ZG
                    })
                  },
                  children: "Delete"
                })]
              })
            })]
          }) : kG && (0, VG.jsx)("div", {
            className: "SmallTextLight",
            children: "This schematic is no longer in the project."
          })]
        })]
      })
    }

    function SL(GG) {
      if ("string" !== typeof GG) return null;
      try {
        const bG = JSON.parse(GG);
        return (0, CS.j)(null === bG || void 0 === bG ? void 0 : bG.worldCodeEngine) && "boolean" === typeof bG.engineLocked && function(GG) {
          if (null === GG) return !0;
          const bG = null === GG || void 0 === GG ? void 0 : GG.location;
          return "string" === typeof(null === GG || void 0 === GG ? void 0 : GG.reason) && (null === bG || "string" === typeof(null === bG || void 0 === bG ? void 0 : bG.path) && Number.isInteger(bG.line))
        }(bG.fallback) ? bG : (console.error("[CodeCollab] Malformed engine settings", GG), null)
      } catch (bG) {
        return console.error("[CodeCollab] Failed to parse engine settings", bG), null
      }
    }

    function LL(GG) {
      let {
        fallback: bG,
        onGoToLine: ZG
      } = GG;
      const {
        t: wG
      } = (0, DG.w)(), {
        location: SG
      } = bG;
      return (0, VG.jsxs)("div", {
        className: "CodeEditorEngineNotice",
        children: [wG("codeEditorEngine:notice", {
          reason: bG.reason
        }), SG && (0, VG.jsxs)(VG.Fragment, {
          children: [" ", (0, VG.jsx)("button", {
            type: "button",
            className: "CodeEditorEngineNoticeLink",
            onClick: () => {
              ZG(SG.path, SG.line)
            },
            children: wG("codeEditorEngine:goToLine", {
              line: String(SG.line)
            })
          })]
        })]
      })
    }
    var yL = ZG(4959),
      kL = ZG(4396),
      UL = ZG(37217);

    function YL(GG) {
      let {
        label: bG,
        hint: ZG,
        checked: wG,
        onChange: SG
      } = GG;
      return (0, VG.jsxs)("label", {
        className: "CodeEditorMoreOptionsRow CodeEditorOptionSwitch",
        children: [(0, VG.jsxs)("span", {
          className: "CodeEditorOptionSwitchText",
          children: [(0, VG.jsx)("span", {
            children: bG
          }), (0, VG.jsx)("span", {
            className: "CodeEditorOptionSwitchHint",
            children: ZG
          })]
        }), (0, VG.jsx)("span", {
          className: "SwitchContainer",
          children: (0, VG.jsx)(kL.e, {
            className: "SwitchCheckbox",
            checked: wG,
            onChange: GG => {
              SG(GG.target.checked)
            },
            disabled: !1
          })
        })]
      })
    }

    function VL(GG) {
      let {
        engine: bG,
        onSetEngine: ZG,
        aiHints: wG,
        variation: SG
      } = GG;
      const {
        t: LG
      } = (0, DG.w)(), [yG, kG] = (0, UL.h)(UL.e);
      return (0, VG.jsxs)("div", {
        className: "CodeEditorMoreOptions",
        children: [(0, VG.jsx)("div", {
          className: "CodeEditorMoreOptionsTitle",
          children: LG("codeEditor:moreOptions")
        }), bG && (0, VG.jsx)(YL, {
          label: LG("codeEditorEngine:toggle"),
          hint: LG("codeEditorEngine:toggleHint"),
          checked: "ses" === bG,
          onChange: GG => {
            ZG(GG ? "ses" : "quickjs")
          }
        }), wG && (0, VG.jsx)(YL, {
          label: LG("codeEditorAiHints:toggle"),
          hint: LG("codeEditorAiHints:toggleHint"),
          checked: wG.shown,
          onChange: wG.setShown
        }), wG && UL.e.canChange && (0, VG.jsx)(YL, {
          label: LG("codeEditorAiKeySafetyCheck:toggle"),
          hint: LG("codeEditorAiKeySafetyCheck:toggleHint"),
          checked: yG,
          onChange: GG => {
            GG ? kG(!0) : xw.NotificationProvider.showPromptPopup({
              title: "codeEditorAiKeySafetyCheck:offWarning",
              confirmText: "general:yes",
              destructive: !0,
              cancelText: "general:no"
            }).getResult().then((GG => {
              !0 === GG && kG(!1)
            }))
          }
        }), SG && (0, VG.jsxs)("div", {
          className: "CodeEditorMoreOptionsRow",
          children: [(0, VG.jsx)(yL.e, {
            label: "codeEditor:variationLabel",
            children: (0, VG.jsx)(lZ.b, {
              className: "CodeEditorVariationInput",
              maxLength: 32,
              defaultValue: SG.name,
              onValueChange: SG.setName,
              onEnter: SG.reload
            })
          }), (0, VG.jsx)(QG.r, {
            className: "CodeEditorButton",
            onClick: SG.reload,
            children: LG("codeEditor:reloadAsVariation")
          })]
        })]
      })
    }
    var pL = ZG(37224),
      fL = ZG(37231);

    function QL(GG) {
      let {
        close: bG
      } = GG;
      const {
        t: ZG
      } = (0, DG.w)(), wG = [{
        name: ZG("codeEditor:welcomeTutorial"),
        tutorial: "welcome"
      }, {
        name: ZG("codeEditor:docsOverviewTutorial"),
        tutorial: "docsOverview"
      }, {
        name: ZG("codeEditorAiTutorial:tutorialName"),
        tutorial: "aiHelperOverview"
      }];
      return (0, VG.jsxs)("div", {
        className: "PromptGenericPopup CodeEditorTutorialsPopup",
        children: [(0, VG.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: ZG("codeEditor:tutorialsTitle")
        }), (0, VG.jsx)("div", {
          className: "CodeEditorTutorialsList",
          children: wG.map((GG => (0, VG.jsx)(QG.d, {
            className: "CodeEditorTutorialsListButton",
            onClick: () => {
              bG(), (0, fL.C)(GG.tutorial)
            },
            children: GG.name
          }, GG.tutorial)))
        })]
      })
    }
    var KL = ZG(95),
      hL = ZG(36883),
      dL = ZG(3617);
    const JL = (0, SG.forwardRef)((function(GG, bG) {
      let {
        value: ZG,
        onChange: wG,
        onSubmit: SG,
        placeholder: LG,
        maxLength: yG,
        rows: kG = 2,
        allowNewLines: UG = !1,
        onKeyDown: YG,
        before: pG
      } = GG;
      const {
        t: fG
      } = (0, DG.w)(), KG = "" !== ZG.trim(), hG = () => {
        KG && SG()
      };
      return (0, VG.jsxs)("div", {
        className: "PanelPromptInputRow",
        children: [pG, (0, VG.jsx)("textarea", {
          ref: bG,
          className: "PanelPromptInput",
          value: ZG,
          maxLength: yG,
          rows: kG,
          placeholder: LG,
          spellCheck: !1,
          autoComplete: "off",
          onChange: GG => {
            wG(UG ? GG.target.value : GG.target.value.replace(/\r?\n/g, " "))
          },
          onKeyDown: GG => {
            GG.nativeEvent.isComposing || 229 === GG.nativeEvent.keyCode ? GG.stopPropagation() : "Escape" !== GG.key && (GG.stopPropagation(), null === YG || void 0 === YG || YG(GG), GG.defaultPrevented || "Enter" !== GG.key || UG && GG.shiftKey || (GG.preventDefault(), hG()))
          }
        }), (0, VG.jsx)(QG.d, {
          className: "PanelPromptSend",
          disabled: !KG,
          onClick: hG,
          ariaLabel: fG("codeEditorPanels:send"),
          children: (0, VG.jsx)(dG.c, {
            name: "arrow-up"
          })
        })]
      })
    }));

    function rL(GG) {
      let {
        inputRef: bG
      } = GG;
      const {
        t: ZG
      } = (0, DG.w)(), {
        messages: wG,
        reportedPlayers: LG,
        channel: yG
      } = (0, dL.n)(), [kG, UG] = (0, SG.useState)(""), YG = (0, SG.useRef)({
        stepsBack: 0,
        text: ""
      });
      return (0, VG.jsxs)("div", {
        className: "CodeEditorChatPanel",
        children: [(0, VG.jsx)("div", {
          className: "CodeEditorChatHeader",
          children: (0, VG.jsx)("span", {
            className: "CodeEditorChatTitle",
            children: ZG("codeEditorChat:title")
          })
        }), 0 === wG.length ? (0, VG.jsx)("div", {
          className: "CodeEditorChatEmpty",
          children: ZG("codeEditorChat:empty")
        }) : (0, VG.jsx)("div", {
          className: "ChatMessages CodeEditorChatMessages",
          children: (0, VG.jsx)(hL.c, {
            messages: wG,
            reportedPlayers: LG
          })
        }), (0, VG.jsx)(JL, {
          ref: bG,
          value: kG,
          onChange: UG,
          onSubmit: () => {
            (0, dL.m)(kG), UG(""), YG.current = {
              stepsBack: 0,
              text: ""
            }
          },
          maxLength: CG.pd,
          rows: 1,
          placeholder: yG ? ZG("touchOnly" === (0, KL.d)() ? "codeEditorChat:channelPlaceholderTouch" : "codeEditorChat:channelPlaceholder", {
            channel: yG.channelName
          }) : ZG("codeEditorChat:placeholder"),
          before: yG && (0, VG.jsx)("button", {
            type: "button",
            className: "CodeEditorChatChannel",
            style: {
              backgroundColor: yG.elementBgColor
            },
            onClick: () => {
              dL.c.selectNextChannel(), bG.current.focus()
            },
            children: (0, VG.jsx)(uG.c, {
              text: yG.elementContent
            })
          }),
          onKeyDown: GG => {
            const bG = kG === YG.current.text;
            if ("ArrowUp" !== GG.key && "ArrowDown" !== GG.key || !bG && "" !== kG) "Tab" === GG.key && !GG.shiftKey && yG && (GG.preventDefault(), dL.c.selectNextChannel());
            else {
              GG.preventDefault();
              const ZG = bG ? YG.current.stepsBack : 0;
              YG.current = (0, dL.k)(ZG + ("ArrowUp" === GG.key ? 1 : -1)), UG(YG.current.text)
            }
          }
        })]
      })
    }
    var zL = ZG(37239);

    function EL(GG) {
      return "expanded" === GG ? "always" : "shown" === GG ? "narrow" : void 0
    }

    function oL(GG) {
      var bG;
      let {
        Op: ZG,
        worldPanel: wG,
        closeWorld: SG,
        aiShown: LG,
        defaultWidth: yG,
        children: kG
      } = GG;
      const UG = "hidden" !== ZG;
      return (0, VG.jsx)(zL.b, {
        side: "right",
        defaultSize: UG ? "max(18rem, 40%)" : yG,
        covers: null !== (bG = EL(ZG)) && void 0 !== bG ? bG : LG ? "narrow" : void 0,
        children: (0, VG.jsxs)("div", {
          className: zZ()("CodeEditorRightColumn", {
            WorldShown: UG,
            WorldExpanded: "expanded" === ZG
          }),
          children: [UG && (0, VG.jsx)(zL.b, {
            side: "top",
            onClose: SG,
            children: wG
          }), kG]
        })
      })
    }
    var XL = ZG(1953),
      uL = ZG(1088),
      iL = ZG(1260);
    class CL {
      constructor(GG, bG, ZG) {
        this.measure = GG, this.apply = bG, this.now = ZG, this.last = null, this.resizedAt = -1 / 0, this.resizing = !1, this.stretchedAt = null
      }
      get rect() {
        var GG, bG;
        return null !== (GG = null === (bG = this.last) || void 0 === bG ? void 0 : bG.rect) && void 0 !== GG ? GG : null
      }
      sync() {
        const GG = function(GG) {
          const bG = Math.round(GG.left),
            ZG = Math.round(GG.top);
          return {
            left: bG,
            top: ZG,
            width: Math.round(GG.right) - bG,
            height: Math.round(GG.bottom) - ZG
          }
        }(this.measure());
        if (GG.width <= 0 || GG.height <= 0) return;
        const bG = this.now(),
          ZG = this.last;
        let wG = {
          width: GG.width,
          height: GG.height
        };
        null === ZG || GG.width === ZG.rect.width && GG.height === ZG.rect.height || (this.resizing = bG - this.resizedAt < 100, this.resizedAt = bG);
        const SG = null !== ZG && this.resizing && bG - this.resizedAt < 100 && (GG.width !== ZG.bufferSize.width || GG.height !== ZG.bufferSize.height);
        SG && (this.stretchedAt ??= bG), SG && bG - this.stretchedAt < 250 ? wG = ZG.bufferSize : this.stretchedAt = null;
        const LG = {
          rect: GG,
          bufferSize: wG
        };
        var yG, kG;
        null !== ZG && (kG = LG, (yG = ZG).rect.left === kG.rect.left && yG.rect.top === kG.rect.top && yG.rect.width === kG.rect.width && yG.rect.height === kG.rect.height && yG.bufferSize.width === kG.bufferSize.width && yG.bufferSize.height === kG.bufferSize.height) || (this.last = LG, this.apply(LG))
      }
      stop() {
        null !== this.last && (this.last = null, this.apply(null))
      }
    }

    function WL(GG) {
      const {
        style: bG
      } = document.documentElement;
      for (const [ZG, wG] of [
          ["--worldViewLeft", null === GG || void 0 === GG ? void 0 : GG.left],
          ["--worldViewTop", null === GG || void 0 === GG ? void 0 : GG.top],
          ["--worldViewWidth", null === GG || void 0 === GG ? void 0 : GG.width],
          ["--worldViewHeight", null === GG || void 0 === GG ? void 0 : GG.height]
        ]) void 0 === wG ? bG.removeProperty(ZG) : bG.setProperty(ZG, `${wG}px`)
    }
    var mL = ZG(1702),
      IL = ZG(1963);

    function FL(GG, bG) {
      (0, SG.useEffect)((() => {
        if (!GG) return;
        const ZG = GG => {
          var ZG;
          "Escape" === GG.key ? (GG.stopPropagation(), GG.preventDefault(), bG()) : (ZG = GG.code, Object.entries(eb.B).some((GG => {
            let [bG, wG] = GG;
            const SG = IL.e[bG];
            return SG.includes("ui") && !SG.includes("core") && wG.includes(ZG)
          })) && !(0, mL.isTextEntry)(GG.target) && GG.preventDefault())
        };
        window.addEventListener("keydown", ZG, !0);
        const wG = (0, qG.q)(bG);
        return () => {
          window.removeEventListener("keydown", ZG, !0), wG()
        }
      }), [GG, bG])
    }

    function vL() {
      return (0, VS.t)().some((GG => GG !== VS.e))
    }

    function aL(GG, bG) {
      return GG.map((GG => bG ? String(GG) : GG.toFixed(1))).join(", ")
    }

    function cL(GG) {
      let {
        freeCamera: bG,
        picking: ZG,
        hovered: wG
      } = GG;
      const {
        t: LG
      } = (0, DG.w)(), yG = (0, SG.useRef)(null), kG = (0, SG.useRef)(null);
      return (0, SG.useEffect)((() => {
        const GG = (GG, bG) => {
            GG.textContent !== bG && (GG.textContent = bG)
          },
          ZG = () => {
            const ZG = bG ? YG.gameBridge.lookup("freeCameraPos", null) : null;
            GG(yG.current, aL(null !== ZG && void 0 !== ZG ? ZG : YG.gameBridge.lookup("localPos", null), !1));
            const wG = YG.gameBridge.lookup("targetedBlockPos", null);
            GG(kG.current, wG ? aL(wG, !0) : "-")
          };
        return ZG(), (0, iL.x)(ZG)
      }), [bG]), (0, VG.jsxs)("div", {
        className: "WorldPanelCoordinates",
        children: [(0, VG.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: LG(bG ? "codeEditorWorld:camera" : "codeEditorWorld:position")
        }), (0, VG.jsx)("span", {
          ref: yG
        }), (0, VG.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: LG("codeEditorWorld:lookingAt")
        }), (0, VG.jsx)("span", {
          ref: kG,
          hidden: ZG
        }), ZG && (0, VG.jsxs)(VG.Fragment, {
          children: [(0, VG.jsx)("span", {
            children: wG ? aL(wG.pos, !0) : "-"
          }), wG && (0, VG.jsx)("span", {
            className: "WorldPanelCoordsName",
            children: wG.name
          })]
        })]
      })
    }
    var lL = ZG(37245),
      jL = ZG(1409);

    function PL(GG) {
      const bG = GG.currentTarget.getBoundingClientRect();
      return {
        x: (GG.clientX - bG.left) / bG.width,
        y: (GG.clientY - bG.top) / bG.height
      }
    }

    function ML(GG) {
      const [bG, ZG] = (0, SG.useState)(!1), [wG, LG] = (0, SG.useState)(null), yG = (0, SG.useRef)(null);
      (0, SG.useEffect)((() => {
        if (!bG) return;
        let GG = null,
          ZG = null,
          wG = 1 / 0;
        const SG = (0, iL.s)((bG => {
          wG += bG;
          const SG = yG.current;
          if (SG === ZG && wG < 100) return;
          ZG = SG, wG = 0;
          const kG = SG && YG.gameBridge.lookup("blockAtViewPoint", SG);
          var UG, VG;
          (UG = kG) === (VG = GG) || null !== UG && null !== VG && UG.name === VG.name && (0, lL.f)(UG.pos, VG.pos) && (0, lL.f)(UG.normal, VG.normal) || (GG = kG, LG(kG), YG.gameBridge.send("setBlockHighlight", kG))
        }));
        return () => {
          SG(), null !== GG && YG.gameBridge.send("setBlockHighlight", null), LG(null)
        }
      }), [bG]);
      const kG = (0, SG.useCallback)((() => {
        ZG(!1)
      }), []);
      FL(bG, kG);
      const UG = wG => {
          if (!bG) return;
          const SG = YG.gameBridge.lookup("blockAtViewPoint", PL(wG));
          null !== SG && (ZG(!1), GG(SG.pos))
        },
        VG = bG ? (0, jL.h)(UG, "pointerup") : null,
        pG = {
          onPointerDown: GG => {
            null === VG || void 0 === VG || VG.onPointerDown(GG)
          },
          onPointerMove: GG => {
            yG.current = PL(GG)
          },
          onPointerLeave: () => {
            yG.current = null
          },
          onPointerUp: null === VG || void 0 === VG ? void 0 : VG.onPointerUp,
          onClick: GG => {
            "pointerType" in GG.nativeEvent && "touch" === GG.nativeEvent.pointerType || UG(GG)
          }
        };
      return {
        picking: bG,
        setPicking: ZG,
        hovered: wG,
        slotHandlers: pG
      }
    }

    function AL(GG) {
      YG.gameBridge.send("setFreeCameraMovesFly", GG)
    }

    function sL(GG) {
      let {
        shown: bG,
        setShown: ZG,
        canInsertCode: wG
      } = GG;
      const {
        t: LG
      } = (0, DG.w)(), {
        isTouchScreen: yG
      } = (0, sG.o)(["isTouchScreen"]), kG = (0, SG.useRef)(null), YG = (0, SG.useCallback)((() => {
        var GG;
        null === (GG = kG.current.closest(".CodeEditorBg").querySelector(".cm-content")) || void 0 === GG || GG.focus()
      }), []), {
        control: pG,
        take: fG,
        release: hG,
        blocked: JG
      } = function(GG) {
        const [bG, ZG] = (0, SG.useState)("none"), wG = (0, SG.useRef)("none"), [LG, yG] = (0, SG.useState)(!1), kG = GG => {
          wG.current = GG, ZG(GG)
        }, UG = (0, SG.useCallback)((() => {
          const bG = wG.current;
          "none" !== bG && (kG("none"), (0, VS.z)(VS.e), "mouse" === bG && GG())
        }), [GG]), YG = (0, SG.useCallback)((GG => {
          vL() ? yG(!0) : (kG("mouse" === GG && "touchOnly" !== (0, KL.d)() ? "mouse" : "touch"), (0, VS.w)(VS.e))
        }), []);
        return (0, iG.g)("pointerLockUpdate", (GG => {
          GG && "touch" === wG.current && "touchOnly" !== (0, KL.d)() ? kG("mouse") : GG || "mouse" !== wG.current || UG()
        })), (0, SG.useEffect)((() => {
          if (!LG) return;
          const GG = () => {
            vL() || yG(!1)
          };
          return GG(), (0, VS.m)(GG)
        }), [LG]), FL("none" !== bG, UG), (0, SG.useEffect)((() => {
          if ("none" === bG) return;
          const GG = GG => {
            (0, mL.isTextEntry)(GG.target) && UG()
          };
          return document.addEventListener("focusin", GG), () => {
            document.removeEventListener("focusin", GG)
          }
        }), [bG, UG]), (0, SG.useEffect)((() => (document.addEventListener("pointerlockerror", UG), () => {
          document.removeEventListener("pointerlockerror", UG)
        })), [UG]), (0, SG.useEffect)((() => () => {
          "none" !== wG.current && null !== sG.e.get("openInGameMenuName") && (0, VS.z)(VS.e)
        }), []), {
          control: bG,
          take: YG,
          release: UG,
          blocked: LG
        }
      }(YG), rG = (0, uL.k)(zL.c);
      (0, SG.useEffect)((() => {
        "touch" !== pG || "shown" !== bG || rG ? "none" === pG && "expanded" === bG && ZG("shown") : ZG("expanded")
      }), [pG, rG]),
      function(GG, bG) {
        const ZG = (0, SG.useRef)(bG);
        ZG.current = bG;
        const wG = (0, SG.useRef)(null);
        (0, SG.useLayoutEffect)((() => {
          const bG = new CL((() => GG.current.getBoundingClientRect()), (GG => {
            var bG;
            "none" !== ZG.current && WL(null !== (bG = null === GG || void 0 === GG ? void 0 : GG.rect) && void 0 !== bG ? bG : null), (0, iL.D)().setGameView(GG)
          }), (() => performance.now()));
          wG.current = bG, bG.sync();
          const SG = (0, iL.q)((() => {
            bG.sync()
          }));
          return () => {
            SG(), sG.e.set({
              worldPanelHud: null
            }), bG.stop()
          }
        }), [GG]), (0, SG.useLayoutEffect)((() => {
          wG.current.sync(), WL("none" === bG ? null : wG.current.rect), sG.e.set({
            worldPanelHud: bG
          })
        }), [bG])
      }(kG, "touch" === pG ? "touchControls" : "none");
      const {
        picking: zG,
        setPicking: EG,
        hovered: oG,
        slotHandlers: {
          onPointerDown: XG,
          ...uG
        }
      } = ML((GG => {
        KG.l.xh("CodeEditorInsertText", {
          text: `[${GG.join(", ")}]`,
          focus: !yG
        }), (0, zL.c)() && ZG("hidden")
      })), CG = function() {
        const {
          allowed: GG,
          movesFly: bG
        } = (0, WG.f)("freeCamera"), ZG = (0, SG.useRef)(bG), wG = (0, SG.useRef)(bG);
        return wG.current !== bG && (wG.current = bG, ZG.current = bG), (0, SG.useEffect)((() => () => {
          ZG.current && AL(!1)
        }), []), {
          allowed: GG,
          on: bG,
          toggle: () => {
            ZG.current = !bG, AL(!bG)
          }
        }
      }(), mG = (0, UG.i)("hideCoordinates"), IG = (0, WG.f)("localPlayerAlive"), FG = !IG || JG;
      (0, SG.useEffect)((() => {
        IG || hG()
      }), [IG, hG]), (0, SG.useEffect)((() => {
        !FG && wG || EG(!1)
      }), [FG, wG, EG]);
      const vG = CG.on ? QG.k : QG.d,
        aG = zG ? QG.k : QG.d;
      return (0, VG.jsxs)("div", {
        className: "WorldPanel",
        children: [(0, VG.jsxs)("div", {
          className: "WorldPanelHeader",
          children: [(0, VG.jsx)("span", {
            className: "WorldPanelTitle",
            children: LG("codeEditorWorld:title")
          }), "touch" === pG && !rG && (0, VG.jsx)(QG.d, {
            className: "WorldPanelButton",
            onClick: hG,
            children: LG("codeEditorWorld:backToCode")
          }), !FG && CG.allowed && !yG && (0, VG.jsx)(HG.h, {
            tooltipInner: LG("codeEditorWorld:freeCameraTooltip"),
            hoverOnly: !0,
            children: (0, VG.jsx)(vG, {
              className: "WorldPanelButton",
              ariaPressed: CG.on,
              ariaLabel: LG("codeEditorWorld:freeCamera"),
              onClick: CG.toggle,
              children: (0, VG.jsx)(dG.c, {
                name: "video"
              })
            })
          }), !FG && wG && (0, VG.jsx)(HG.h, {
            tooltipInner: LG("codeEditorWorld:pickTooltip"),
            hoverOnly: !0,
            children: (0, VG.jsxs)(aG, {
              className: "WorldPanelButton",
              ariaPressed: zG,
              onClick: () => {
                hG(), EG(!zG)
              },
              children: [(0, VG.jsx)(dG.c, {
                name: "crosshairs"
              }), LG("codeEditorWorld:pick")]
            })
          })]
        }), !mG && (0, VG.jsx)(cL, {
          freeCamera: CG.on,
          picking: zG,
          hovered: oG
        }), (0, VG.jsxs)("div", {
          ref: kG,
          className: zZ()("WorldPanelSlot", {
            TouchControl: "touch" === pG,
            Picking: zG
          }),
          onPointerDown: GG => {
            0 !== GG.button || FG || zG || fG(GG.pointerType), XG(GG)
          },
          ...uG,
          children: [!FG && !zG && (0, VG.jsx)("div", {
            className: "WorldPanelCrosshair",
            children: "+"
          }), !FG && "touch" !== pG && (0, VG.jsxs)("div", {
            className: "WorldPanelHint",
            children: [zG && LG(yG ? "codeEditorWorld:tapToPick" : "codeEditorWorld:clickToPick"), !zG && "none" === pG && !CG.on && LG(yG ? "codeEditorWorld:tapToPlay" : "codeEditorWorld:clickToPlay"), !zG && "none" === pG && CG.on && LG("codeEditorWorld:clickToFly"), "mouse" === pG && (0, VG.jsxs)(VG.Fragment, {
              children: [(0, VG.jsx)(XL.e, {
                noaAction: "OpenLobbyLeaderboard"
              }), LG("codeEditorWorld:backToCode")]
            })]
          }), FG && (0, VG.jsxs)("div", {
            className: "WorldPanelWaiting",
            children: [(0, VG.jsx)("span", {
              children: LG(IG ? "codeEditorWorld:gameWaiting" : "codeEditorWorld:died")
            }), (0, VG.jsx)(QG.d, {
              onClick: qG.h,
              children: LG("codeEditorWorld:toGame")
            })]
          })]
        })]
      })
    }
    var qL = ZG(5039);

    function nL(GG) {
      let {
        Op: bG,
        setWorld: ZG,
        toggleWorld: wG,
        aiShown: SG,
        closeAi: LG
      } = GG;
      const {
        t: yG
      } = (0, DG.w)(), kG = SG ? "ai" : "hidden" !== bG ? "world" : "code", UG = [{
        value: "code",
        label: yG("codeEditorWorld:codePane")
      }, {
        value: "world",
        label: yG("codeEditorWorld:title")
      }];
      SG && UG.push({
        value: "ai",
        label: yG("codeEditorWorld:aiPane")
      });
      return (0, VG.jsx)("div", {
        className: "CodeEditorPaneSwitch",
        children: (0, VG.jsx)(qL.c, {
          options: UG,
          value: kG,
          onChange: GG => {
            "world" !== GG ? (SG && LG(), ZG("hidden")) : "hidden" === bG ? wG() : LG()
          },
          ariaLabel: yG("codeEditorWorld:panes"),
          keepsFocus: !0
        })
      })
    }
    var gL = ZG(37249),
      eL = ZG(37255),
      RL = ZG(37261),
      TL = ZG(37265);
    const HL = (0, SG.lazy)((() => Promise.all([ZG.e(303), ZG.e(299), ZG.e(302), ZG.e(298), ZG.e(85), ZG.e(301), ZG.e(300), ZG.e(297)]).then((() => ZG(41715))))),
      tL = (0, SG.lazy)((() => Promise.all([ZG.e(80), ZG.e(83), ZG.e(84), ZG.e(82), ZG.e(305)]).then((() => ZG(41879))))),
      DL = (0, SG.lazy)((() => Promise.all([ZG.e(303), ZG.e(302), ZG.e(85), ZG.e(83), ZG.e(84), ZG.e(82), ZG.e(301), ZG.e(300), ZG.e(81), ZG.e(92)]).then((() => ZG(41886)))));

    function NL(GG) {
      return YG.gameBridge.query("worldCodeAiChunk", GG)
    }

    function OL() {
      return YG.gameBridge.query("worldCodeAiGameState", null)
    }

    function xL(GG) {
      const {
        gsUrl: bG,
        gameNameWithVariation: ZG,
        lobbyName: wG
      } = xS();
      return (0, XS.postJsonWithMetricsCookiesAndJsonResponse)(`${bG}/code/get-lobby-code`, oS.Kj["get-lobby-code"].toBuffer({
        gameNameWithVariation: ZG,
        lobbyName: wG,
        path: GG
      }), {
        retries: 1
      })
    }
    let BL = !1;
    const Gy = [],
      by = {
        message: "You do not have permission to view the code.",
        type: "warning"
      },
      Zy = (0, SG.memo)((function(GG) {
        var bG, ZG;
        let {
          show: wG,
          onOpen: LG,
          onClose: kG,
          isLobbyCode: pG
        } = GG;
        const fG = (0, SG.useRef)(""),
          [hG, JG] = (0, SG.useState)(null),
          rG = (0, SG.useRef)(pG),
          [zG, EG] = (0, SG.useState)({
            message: null,
            type: null
          }),
          [oG, XG] = (0, SG.useState)(""),
          uG = zG.message ? zG : {
            message: oG,
            type: "warning"
          },
          [IG, FG] = (0, SG.useState)(!0),
          [vG, cG] = (0, UL.h)(UL.f),
          [lG, jG] = (0, UL.h)(UL.d),
          [PG, MG] = (0, SG.useState)(!1),
          [AG, nG] = (0, SG.useState)(!1),
          gG = (0, SG.useRef)(null),
          eG = (0, SG.useRef)(!1);
        (0, SG.useEffect)((() => {
          var GG;
          AG && eG.current && (eG.current = !1, null === (GG = gG.current) || void 0 === GG || GG.focus())
        }), [AG]);
        const RG = (0, gL.c)(),
          TG = (0, SG.useRef)(null),
          tG = (0, SG.useRef)(null),
          {
            openInGameMenuName: NG,
            openEverythingMenuName: OG,
            worldPanelHud: xG
          } = (0, sG.o)(["openInGameMenuName", "openEverythingMenuName", "worldPanelHud"]),
          BG = GG => {
            wG && (TG.current = GG, Wb.current = !0)
          };
        (0, iG.g)("OpenReportMenu", (() => {
          BG("NQ")
        })), (0, iG.g)("OpenStoreFromCodeEditor", (() => {
          BG("store")
        })), (0, SG.useEffect)((() => {
          const GG = TG.current;
          null === GG || "NQ" === GG && ("makeReport" === NG || "makeDiscordReport" === NG) || "store" === GG && null !== OG || (TG.current = null, null === NG && null === OG ? pG ? (tG.current = wZ.current, KG.l.xh("EditLobbyCode", hG)) : KG.l.xh("EditCodeBlock", {
            pos: hG,
            canChangePos: rG.current
          }) : (0, fL.y)())
        }), [NG, OG, pG, hG]), (0, SG.useEffect)((() => {
          if (wG) return () => {
            tG.current = null
          }
        }), [wG]);
        const [Gb, bb] = function() {
          const [GG, bG] = (0, SG.useState)(BL);
          return (0, iG.g)("CodeEditorAiHelperShown", (GG => {
            bG(GG)
          })), [GG, (0, SG.useCallback)((GG => {
            BL = GG, KG.l.xh("CodeEditorAiHelperShown", GG)
          }), [])]
        }(), [Zb, wb] = (0, SG.useState)(null), [Sb, Lb] = (0, SG.useState)([]), [yb, kb] = (0, SG.useState)(0), [Ub, Yb] = (0, SG.useState)(0), [Vb, pb] = (0, SG.useState)(""), Qb = (0, SG.useRef)(null), [Kb, hb] = (0, SG.useState)(pG ? TL.h : null), db = pG || null !== hG, Jb = (0, UG.i)("canEditCode"), rb = (0, UG.i)("canUseDevCreativeItems"), zb = (0, pL.l)("welcome"), Eb = (0, pL.l)("docsOverview"), ob = Eb ? "docsOverview" : "welcome", Xb = null !== Eb && void 0 !== Eb ? Eb : zb, ub = (0, pL.l)("aiHelperOverview"), ib = ub ? "aiHelperOverview" : "welcome", Cb = null !== ub && void 0 !== ub ? ub : zb, Wb = (0, SG.useRef)(!1), mb = (0, SG.useRef)(!1), Ib = (0, SG.useRef)(null), [Fb, vb] = (0, SG.useState)(""), [ab, cb] = (0, SG.useState)(!1), [lb, jb] = (0, SG.useState)(null), Pb = (0, WG.f)("connectedGame"), Mb = pG && Jb && "classic" === Pb.gameNameWithVariation && !(0, fb.K)(Pb.lobbyName), [Ab, sb] = (0, SG.useState)(null), [qb, gb] = (0, SG.useState)({
          [uS.k]: ""
        }), [Rb, Tb] = (0, SG.useState)({
          assets: {},
          revision: 0
        }), Hb = (0, SG.useRef)(Rb), tb = (0, SG.useCallback)((GG => {
          var bG;
          GG.revision < Hb.current.revision || (Hb.current = GG, Tb(GG), XG(GG.startupError ? `Schematics could not load: ${GG.startupError}` : ""), null === (bG = hZ.current) || void 0 === bG || bG.onLobbyFilesChanged({
            ...UZ.current,
            ...(0, cS.m)(GG.assets)
          }))
        }), []), [Db, Nb] = (0, SG.useState)(uS.k), [Ob, xb] = (0, SG.useState)(null), [Bb, GZ] = (0, SG.useState)(null), bZ = (0, SG.useRef)(!1), ZZ = (0, SG.useRef)(null), wZ = (0, SG.useRef)(Db);
        wZ.current = Db;
        const SZ = (0, SG.useRef)(Ob);
        SZ.current = Ob;
        const LZ = Ob ? null : lb,
          yZ = LZ && !LZ.engineLocked ? LZ.worldCodeEngine : null,
          kZ = (0, SG.useRef)(Bb);
        kZ.current = Bb;
        const UZ = (0, SG.useRef)(qb);
        UZ.current = qb;
        const YZ = (0, SG.useRef)(null),
          VZ = (0, SG.useRef)(null),
          [pZ, fZ] = (0, SG.useState)(!1),
          QZ = (0, eS.w)(),
          KZ = (0, SG.useRef)([]),
          hZ = (0, SG.useRef)(null),
          dZ = (0, SG.useRef)(null),
          JZ = (0, SG.useRef)(null);

        function rZ(GG) {
          EG(GG), clearTimeout(Ib.current), Ib.current = setTimeout((() => {
            EG({
              message: null,
              type: null
            })
          }), 3e3)
        }
        const EZ = (0, SG.useCallback)((function() {
            let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            bZ.current && ZZ.current && (YG.gameBridge.send("sendCodeCollab", {
              BS: iS.c.Leave,
              bL: (0, iS.r)(ZZ.current),
              mV: !!GG || null
            }), bZ.current = !1, ZZ.current = null), sb(null)
          }), []),
          oZ = (0, SG.useCallback)((GG => {
            const bG = {
              kind: "lobby",
              path: GG
            };
            ZZ.current = bG, Nb(GG), fG.current = "", YG.gameBridge.send("sendCodeCollab", {
              BS: iS.c.Join,
              bL: (0, iS.r)(bG)
            }), bZ.current = !0
          }), []),
          XZ = (0, SG.useCallback)((GG => {
            var bG;
            const ZG = null === (bG = dZ.current) || void 0 === bG ? void 0 : bG.collabState;
            return ZG && "lobby" === ZG.docKey.kind && ZG.docKey.path === GG && wZ.current === GG ? Promise.resolve({
              doc: ZG.doc,
              version: ZG.version,
              clientID: ZG.clientID,
              docKey: ZG.docKey,
              httpConfig: ZG.httpConfig
            }) : new Promise(((bG, ZG) => {
              const wG = setTimeout((() => {
                  KZ.current = KZ.current.filter((GG => GG !== SG)), ZG(new Error(`Timed out joining ${GG}`))
                }), 15e3),
                SG = ZG => {
                  "lobby" === ZG.docKey.kind && ZG.docKey.path === GG && (clearTimeout(wG), KZ.current = KZ.current.filter((GG => GG !== SG)), bG(ZG))
                };
              KZ.current.push(SG), wZ.current !== GG ? (EZ(!0), oZ(GG)) : bZ.current || oZ(GG)
            }))
          }), [oZ, EZ]),
          uZ = (0, SG.useCallback)((async function(GG, bG) {
            let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
            const wG = Date.now();
            let SG = GG in UZ.current;
            for (; SG !== bG;) {
              if (Date.now() - wG > ZG) throw new Error(`Timed out waiting for lobby path ${GG} present=${bG}`);
              await (0, rw.R)(50), SG = GG in UZ.current
            }
          }), []),
          iZ = (0, SG.useCallback)((GG => {
            const bG = UZ.current,
              ZG = uS.k in bG && uS.o in bG;
            if (!(0, CS.i)(GG) || ZG) {
              if (wZ.current === GG) {
                var wG;
                const SG = ZG && (0, CS.i)(GG) ? GG === uS.k ? uS.o : uS.k : null !== (wG = (0, CS.b)(bG)) && void 0 !== wG ? wG : uS.k;
                VZ.current = {
                  fromPath: GG,
                  toPath: SG
                }, Nb(SG)
              }
              YG.gameBridge.send("sendCodeCollab", {
                BS: iS.c.DeleteFile,
                bL: (0, iS.r)({
                  kind: "lobby",
                  path: wZ.current
                }),
                IV: GG
              })
            }
          }), []),
          CZ = (0, SG.useCallback)((GG => {
            tG.current = null, xb(null), GZ(null), !pG || GG === wZ.current && bZ.current || (EZ(!0), oZ(GG))
          }), [pG, EZ, oZ]),
          WZ = (0, SG.useCallback)(((GG, bG) => {
            const ZG = vS.h[GG],
              wG = ZG && bG in ZG.files ? bG : "index.ts";
            if (GG !== SZ.current || wG !== kZ.current) {
              var SG;
              if (GG !== SZ.current) null === (SG = hZ.current) || void 0 === SG || SG.stopContinuousSync(), EZ(!0);
              xb(GG), GZ(wG)
            }
          }), [EZ]),
          mZ = (0, SG.useCallback)((GG => {
            var bG;
            const ZG = wZ.current,
              wG = UZ.current[ZG],
              SG = bZ.current && !SZ.current && ZG in GG && void 0 !== wG ? {
                ...GG,
                [ZG]: wG
              } : GG;
            gb(SG);
            const LG = YZ.current;
            if (LG && LG in GG) YZ.current = null, LG !== wZ.current && CZ(LG);
            else if (!(wZ.current in GG) && bZ.current && !SZ.current) {
              var yG;
              CZ(null !== (yG = (0, CS.b)(GG)) && void 0 !== yG ? yG : uS.k)
            }
            null === (bG = hZ.current) || void 0 === bG || bG.onLobbyFilesChanged({
              ...SG,
              ...(0, cS.m)(Hb.current.assets)
            })
          }), [CZ]),
          IZ = (0, SG.useCallback)((() => xL(wZ.current).then((async GG => {
            if (!bZ.current || !GG.files) return null;
            mZ(GG.files);
            const bG = await BS({
              action: "state"
            });
            return tb(bG), {
              ...GG.files,
              ...(0, cS.m)(bG.assets)
            }
          })).catch((GG => (console.error("[CodeCollab] Failed to fetch lobby files via HTTP", GG), rZ({
            message: "Could not refresh the file list",
            type: "warning"
          }), null)))), [mZ, tb]),
          FZ = () => {
            kG()
          };
        (0, SG.useEffect)((() => {
          if (XG(""), !wG || !pG) return;
          let GG = !1;
          return Hb.current = {
            assets: {},
            revision: 0
          }, Tb(Hb.current), BS({
            action: "state"
          }).then((bG => {
            GG || tb(bG)
          })).catch((bG => {
            console.error("Could not load project schematics", bG), GG || XG("Could not load schematics. Reopen the Code Editor to retry.")
          })), () => {
            GG = !0
          }
        }), [wG, pG, tb]);
        const vZ = (0, SG.useCallback)((function() {
            let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            ZZ.current && YG.gameBridge.send("sendCodeCollab", {
              BS: iS.c.Submit,
              bL: (0, iS.r)(ZZ.current),
              ...GG ? {
                LL: "keepOpen"
              } : {}
            })
          }), []),
          aZ = (0, SG.useCallback)((() => {
            if (!ZZ.current || "lobby" !== ZZ.current.kind) return;
            const GG = Fb.trim();
            (0, WS.m)(GG) ? (YG.gameBridge.send("sendCodeCollab", {
              BS: iS.c.ReloadAsVariation,
              bL: (0, iS.r)(ZZ.current),
              LL: GG
            }), cb(!1)) : rZ({
              message: "Variation must be 1-32 characters: A-Z, a-z, 0-9, _, -",
              type: "warning"
            })
          }), [Fb]),
          cZ = (0, SG.useCallback)((GG => {
            YG.gameBridge.send("sendCodeCollab", {
              BS: iS.c.SetEngine,
              bL: (0, iS.r)({
                kind: "lobby",
                path: wZ.current
              }),
              LL: GG
            })
          }), []),
          lZ = (0, SG.useCallback)((GG => {
            if (!SZ.current && Jb && (rG.current || pG)) {
              if (pG) {
                var bG;
                const ZG = (0, CS.q)(UZ.current, wZ.current),
                  wG = Math.min(nb.B, Math.max(0, nb.H - ZG)),
                  SG = GG.slice(0, wG);
                return fG.current = SG, gb((GG => ({
                  ...GG,
                  [wZ.current]: SG
                }))), void(null === (bG = hZ.current) || void 0 === bG || bG.onDocTextChanged(wZ.current, SG))
              }
              fG.current = GG, pb(GG)
            }
          }), [Jb, pG]);
        (0, iG.g)("EditLobbyCode", (GG => {
          var bG;
          aG.featureFlags.canSeePlayerWrittenText && pG && (EZ(), JG(GG), fG.current = "", gb({
            [uS.k]: ""
          }), jb(null), Nb(uS.k), xb(null), GZ(null), YZ.current = null, VZ.current = null, null === (bG = hZ.current) || void 0 === bG || bG.stopContinuousSync(), LG(), oZ(uS.k))
        })), (0, iG.g)("EditCodeBlock", (GG => {
          let {
            pos: bG,
            canChangePos: ZG
          } = GG;
          if (aG.featureFlags.canSeePlayerWrittenText && !pG)
            if (EZ(), null !== bG && (bG = [...bG]), JG(bG), rG.current = ZG, null !== bG) {
              fG.current = "", pb(""), LG();
              const GG = {
                  kind: "codeBlock",
                  pos: bG
                },
                wG = (0, iS.r)(GG);
              Qb.current !== wG && (Qb.current = wG, Lb([]), Yb(yb)), hb((0, TL.d)(wG, [bG[0], bG[1], bG[2]], !!ZG)), ZZ.current = GG, YG.gameBridge.send("sendCodeCollab", {
                BS: iS.c.Join,
                bL: (0, iS.r)(GG)
              }), bZ.current = !0
            } else wG && kG()
        })), (0, iG.g)("codeCollabRejoin", (GG => {
          const bG = ZZ.current ? (0, iS.r)(ZZ.current) : null;
          bG && GG.docKey === bG && (fG.current = GG.doc, pG || pb(GG.doc), sb((bG => bG ? {
            ...bG,
            doc: GG.doc,
            version: GG.version,
            clientID: (0, FS.d)()
          } : bG)))
        })), (0, iG.g)("codeCollab", (GG => {
          var bG;
          const ZG = ZZ.current ? (0, iS.r)(ZZ.current) : null;
          if (GG.type === iS.f.LobbyFilesChanged && pG) {
            if ("string" !== typeof GG.files) return void IZ();
            try {
              mZ(JSON.parse(GG.files))
            } catch (YG) {
              console.error("[CodeCollab] Failed to parse lobby files", YG), IZ()
            }
            return
          }
          if (GG.type === iS.f.EngineSettings && pG) return void jb(SL(GG.engineSettings));
          const SG = GG.type === iS.f.Joined ? (0, iS.i)(GG.docKey) : null,
            LG = pG && "lobby" === (null === (bG = ZZ.current) || void 0 === bG ? void 0 : bG.kind) && (0, CS.i)(ZZ.current.path) && "lobby" === (null === SG || void 0 === SG ? void 0 : SG.kind) && (0, CS.i)(SG.path);
          if (!ZG || GG.docKey === ZG || LG)
            if (GG.type !== iS.f.ForceClose) {
              if (wG)
                if (GG.type === iS.f.Joined) {
                  var yG;
                  const VG = JSON.parse(GG.peers),
                    QG = GG.existingCursors ? JSON.parse(GG.existingCursors) : [],
                    dG = (0, FS.d)(),
                    JG = xS(),
                    {
                      gsUrl: rG,
                      gameNameWithVariation: zG,
                      lobbyName: oG
                    } = JG,
                    XG = null !== (yG = (0, iS.i)(GG.docKey)) && void 0 !== yG ? yG : ZZ.current;
                  XG && (ZZ.current = XG, "lobby" === XG.kind && (Nb(XG.path), wZ.current = XG.path));
                  const uG = XG || (pG ? {
                    kind: "lobby",
                    path: wZ.current
                  } : {
                    kind: "codeBlock",
                    pos: hG
                  });

                  function iG(bG) {
                    var ZG, wG;
                    if (!bZ.current) return;
                    const SG = null !== (ZG = bG.code) && void 0 !== ZG ? ZG : "",
                      LG = null !== (wG = bG.collabVersion) && void 0 !== wG ? wG : 0;
                    fG.current = SG, pG || pb(SG), pG && bG.files ? gb(bG.files) : pG && gb((GG => ({
                      ...GG,
                      [wZ.current]: SG
                    })));
                    const yG = {
                      doc: SG,
                      version: LG,
                      clientID: dG,
                      docKey: uG,
                      peers: VG,
                      editorCount: GG.editorCount,
                      existingCursors: QG,
                      httpConfig: JG
                    };
                    if (sb(yG), "lobby" === uG.kind) {
                      var kG;
                      const GG = {
                        doc: SG,
                        version: LG,
                        clientID: dG,
                        docKey: uG,
                        httpConfig: JG
                      };
                      for (const bG of [...KZ.current]) bG(GG);
                      null === (kG = hZ.current) || void 0 === kG || kG.startWhenReady()
                    }
                    bG.canSeeCode ? (clearTimeout(Ib.current), EG({
                      message: null,
                      type: null
                    })) : function(GG) {
                      clearTimeout(Ib.current), EG(GG)
                    }(by);
                    const UG = tG.current;
                    tG.current = null, pG && UG && bG.files && UG in bG.files && UG !== wZ.current && CZ(UG)
                  }
                  pG ? xL(wZ.current).then(iG).catch((GG => {
                    console.error("[CodeCollab] Failed to fetch lobby code via HTTP", GG), EZ()
                  })) : (0, XS.postJsonWithMetricsCookiesAndJsonResponse)(`${rG}/code/get-code-block`, oS.Kj["get-code-block"].toBuffer({
                    gameNameWithVariation: zG,
                    lobbyName: oG,
                    pos: hG
                  }), {
                    retries: 1
                  }).then(iG).catch((GG => {
                    console.error("[CodeCollab] Failed to fetch code block via HTTP", GG), EZ()
                  }))
                } else if (GG.type === iS.f.Presence) {
                if (!ZG) return;
                const CG = JSON.parse(GG.peers);
                sb((bG => bG ? {
                  ...bG,
                  peers: CG,
                  editorCount: GG.editorCount
                } : bG))
              }
            } else {
              var UG;
              if (!ZG) return;
              wG && pG && "keptOpen" === GG.updates && KG.l.xh("CodeEditorKeepEdits");
              const WG = ZZ.current;
              bZ.current = !1, ZZ.current = null, sb(null);
              if (!pG || "close" === GG.updates) return (0, RL.i)(), void(wG && kG());
              if (!wG) return;
              const mG = UZ.current,
                IG = VZ.current;
              VZ.current = null;
              const FG = "lobby" === (null === WG || void 0 === WG ? void 0 : WG.kind) && WG.path === (null === IG || void 0 === IG ? void 0 : IG.fromPath),
                vG = IG && (FG || IG.toPath in mG || (0, CS.i)(IG.toPath)) ? IG.toPath : wZ.current in mG ? wZ.current : null !== (UG = (0, CS.b)(mG)) && void 0 !== UG ? UG : uS.k;
              oZ(vG)
            }
        })), (0, iG.g)("refetchCode", (() => {
          aG.featureFlags.canSeePlayerWrittenText && wG && bZ.current && (Jb || (EZ(), pG ? KG.l.xh("EditLobbyCode", hG) : KG.l.xh("EditCodeBlock", {
            pos: hG,
            canChangePos: rG.current
          })))
        }));
        const jZ = (0, SG.useCallback)((() => {
            wG && (MG(!1), window.open("/docs", "_blank", "popup=yes,width=1200,height=800"))
          }), [wG]),
          PZ = (0, SG.useCallback)((() => {
            MG(!1)
          }), []);
        (0, SG.useEffect)((() => {
          wG && Jb && ("docsButton" === Xb && PG ? (0, fL.e)("docsButton") : Xb && fL.i.includes(Xb) && !PG && (MG(!0), bb(!1)))
        }), [wG, Jb, Xb, PG, bb]);
        const MZ = (0, SG.useCallback)((() => {
          bb(!1)
        }), [bb]);
        (0, SG.useEffect)((() => {
          wG && Jb && db && ("aiHelperButton" === Cb && Gb ? (0, fL.e)("aiHelperButton") : Cb && fL.d.includes(Cb) && !Gb && (bb(!0), MG(!1)))
        }), [wG, Jb, db, Cb, Gb, bb]), (0, SG.useEffect)((() => {
          if (!wG || !Jb) return;
          const GG = pG ? "worldCode" : "codeBlock";
          return (0, fL.z)(GG, !0), () => {
            (0, fL.z)(GG, !1)
          }
        }), [wG, Jb, pG]), (0, SG.useEffect)((() => {
          if (wG) return () => {
            Wb.current ? Wb.current = !1 : (0, fL.y)()
          }
        }), [wG]), (0, SG.useEffect)((() => {
          (0, fL.B)("exportButton", !!rb)
        }), [rb]);
        const {
          t: AZ
        } = (0, DG.w)(), sZ = !Gb && yb > Ub, qZ = sZ ? QG.C : QG.r, nZ = (0, SG.useCallback)(((GG, bG) => {
          KG.l.xh("CodeEditorGoToLine", {
            path: GG,
            line: bG
          }), CZ(GG)
        }), [CZ]), gZ = (0, SG.useCallback)((GG => {
          JZ.current = GG
        }), []), eZ = function(GG, bG) {
          const [ZG, wG] = (0, SG.useState)(null);
          return (0, SG.useEffect)((() => {
            if (!bG) return void wG(null);
            let ZG = !1;
            return gS(GG).then((GG => {
              ZG || wG(GG)
            }), (GG => {
              console.error("[CodeEditor] could not collect the imported plugins", GG), ZG || wG(null)
            })), () => {
              ZG = !0
            }
          }), [GG, bG]), ZG
        }(qb, wG);
        (0, SG.useEffect)((() => {
          eZ && Ob && !eZ.includes(Ob) && (xb(null), GZ(null), pG && !bZ.current && oZ(wZ.current))
        }), [Ob, eZ, pG, oZ]), dZ.current = {
          collabState: Ab,
          ensureJoinedPath: XZ,
          waitForLobbyPath: uZ,
          pullLobbyFiles: IZ,
          t: AZ,
          canEditCode: !!Jb
        }, hZ.current || (hZ.current = new NS({
          getLobbyFiles: () => ({
            ...UZ.current,
            ...(0, cS.m)(Hb.current.assets)
          }),
          deleteSchematic: async GG => {
            const bG = await BS({
              action: "remove",
              path: GG,
              expectedRevision: Hb.current.revision
            });
            tb(bG)
          },
          getActivePath: () => wZ.current,
          getCollabSnapshot: () => {
            var GG;
            if (SZ.current) return null;
            const bG = null === (GG = dZ.current) || void 0 === GG ? void 0 : GG.collabState;
            return bG ? {
              doc: bG.doc,
              version: bG.version,
              clientID: bG.clientID,
              docKey: bG.docKey,
              httpConfig: bG.httpConfig
            } : null
          },
          replaceActiveDoc: (GG, bG) => {
            var ZG, wG;
            return null !== (ZG = null === (wG = JZ.current) || void 0 === wG ? void 0 : wG.call(JZ, GG, bG)) && void 0 !== ZG && ZG
          },
          ensureJoined: GG => dZ.current.ensureJoinedPath(GG),
          createFile: (GG, bG) => {
            !1 !== (null === bG || void 0 === bG ? void 0 : bG.focus) && (YZ.current = GG), YG.gameBridge.send("sendCodeCollab", {
              BS: iS.c.CreateFile,
              bL: (0, iS.r)({
                kind: "lobby",
                path: wZ.current
              }),
              IV: GG
            })
          },
          renameFile: (GG, bG) => {
            const ZG = (0, iS.r)({
              kind: "lobby",
              path: wZ.current
            });
            wZ.current === GG && (VZ.current = {
              fromPath: GG,
              toPath: bG
            }, Nb(bG)), YG.gameBridge.send("sendCodeCollab", {
              BS: iS.c.RenameFile,
              bL: ZG,
              IV: GG,
              FV: bG
            })
          },
          deleteFile: GG => {
            iZ(GG)
          },
          waitForLobbyPath: (GG, bG, ZG) => dZ.current.waitForLobbyPath(GG, bG, ZG),
          pullLobbyFiles: () => dZ.current.pullLobbyFiles(),
          setMessage: (GG, bG) => {
            rZ({
              message: GG,
              type: bG
            })
          },
          onUnlinked: () => {
            fZ(!1)
          },
          t: GG => dZ.current.t(GG),
          canEditCode: () => dZ.current.canEditCode,
          getStorageKey: () => {
            const {
              gameNameWithVariation: GG,
              lobbyName: bG
            } = YG.gameBridge.latest("connectedGame");
            return (0, eS.h)(GG, bG)
          }
        }));
        const RZ = (0, SG.useCallback)((async GG => {
            const bG = hZ.current;
            if (!bG) return !1;
            try {
              return await bG.writeLobbyFiles(GG)
            } catch (ZG) {
              return console.error("World Code AI: couldn't write the change", ZG), !1
            }
          }), []),
          TZ = (0, SG.useCallback)((async GG => {
            var bG, ZG;
            const wG = null === (bG = GG.find((GG => GG.path === eL.c))) || void 0 === bG ? void 0 : bG.text,
              SG = ZZ.current;
            return void 0 !== wG && "codeBlock" === (null === SG || void 0 === SG ? void 0 : SG.kind) && (!(null === (ZG = JZ.current) || void 0 === ZG || !ZG.call(JZ, (0, iS.r)(SG), wG)) && (fG.current = wG, pb(wG), !0))
          }), []),
          HZ = (0, SG.useCallback)((async () => {
            try {
              var GG, bG;
              const ZG = await xL(uS.k);
              return !1 === ZG.canSeeCode ? null : null !== (GG = ZG.files) && void 0 !== GG ? GG : {
                [uS.k]: null !== (bG = ZG.code) && void 0 !== bG ? bG : ""
              }
            } catch (ZG) {
              return console.error("World Code AI: couldn't read World Code for a code block", ZG), null
            }
          }), []),
          tZ = (0, SG.useMemo)((() => ({
            [eL.c]: Vb
          })), [Vb]),
          DZ = (0, SG.useCallback)(((GG, bG) => {
            KG.l.xh("CodeEditorGoToLine", {
              path: eL.c,
              line: bG
            })
          }), []);
        (0, SG.useEffect)((() => {
          Gb && wG && Yb(yb)
        }), [Gb, wG, yb]);
        const NZ = (0, SG.useCallback)((() => {
            var GG, bG;
            vZ();
            const ZG = (0, aG.isTouchscreen)() ? "open World Code again" : `press ${null!==(GG=null===(bG=eb.B.OpenCodeEditor)||void 0===bG?void 0:bG[0])&&void 0!==GG?GG:"F8"}`,
              wG = pG ? `\ud83e\udd16 Try out your change, then ${ZG} to tell the AI Helper how it went.` : "\ud83e\udd16 Click the code block to try your change, then open it again to tell the AI Helper how it went.";
            KG.l.xh("chat", {
              content: [{
                str: wG,
                style: {
                  color: CG.O.cyanUiText
                }
              }]
            })
          }), [vZ, pG]),
          OZ = (0, SG.useCallback)((GG => {
            const bG = hG,
              ZG = rG.current;
            pG || !bG || YG.gameBridge.lookup("codeBlockClickable", bG) ? (0, RL.l)(GG, {
              submit: () => {
                vZ(), KG.l.xh("chat", {
                  content: [{
                    str: "\ud83e\udd16 Testing your change. The AI Helper comes back in a moment.",
                    style: {
                      color: CG.O.cyanUiText
                    }
                  }]
                }), !pG && bG && setTimeout((() => {
                  YG.gameBridge.send("clickCodeBlock", bG)
                }), 1e3)
              },
              reopen: () => {
                (0, qG.t)() || (pG ? KG.l.xh("EditLobbyCode", bG) : KG.l.xh("EditCodeBlock", {
                  pos: bG,
                  canChangePos: ZG
                }))
              }
            }) : NZ()
          }), [vZ, pG, hG, NZ]),
          xZ = (0, SG.useCallback)((() => {
            bb(!1)
          }), [bb]),
          BZ = (0, SG.useRef)(FZ);
        BZ.current = FZ;
        const Gw = (0, SG.useCallback)((function(GG) {
            let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            KG.l.xh("WorldCodeAiDraft", {
              text: GG,
              send: bG
            }), BZ.current(), KG.l.xh("EditLobbyCode", hG)
          }), [hG]),
          bw = (0, SG.useCallback)((GG => {
            BZ.current(), GG.codeBlock ? KG.l.xh("EditCodeBlock", {
              pos: [...GG.pos],
              canChangePos: GG.canChangePos
            }) : KG.l.xh("EditLobbyCode", hG)
          }), [hG]);
        (0, iG.g)("WorldCodeAiDraft", (GG => {
          pG && (wb(GG), bb(!0))
        }));
        const Zw = !!Jb && !!Xb && fL.i.includes(Xb),
          ww = !!Jb && !!Cb && fL.d.includes(Cb);
        (0, SG.useEffect)((() => {
          wG && Gb && db && !Zw && MG(!1)
        }), [wG, Gb, db, Zw]);
        const Sw = (0, SG.useCallback)((() => {
            bb(!1), MG(!1)
          }), [bb]),
          {
            Op: Lw,
            setWorld: yw,
            toggleWorld: kw
          } = function(GG) {
            let {
              showAi: bG,
              showDocs: ZG,
              showChat: wG,
              hideOtherRightPanels: LG
            } = GG;
            const [yG, kG] = (0, SG.useState)("hidden"), UG = (0, SG.useRef)(null), YG = (0, SG.useCallback)((() => {
              UG.current = null, kG((GG => "hidden" === GG ? GG : (0, zL.c)() ? "hidden" : "shown"))
            }), []);
            (0, SG.useEffect)((() => {
              (bG || ZG) && YG()
            }), [bG, ZG, YG]), (0, SG.useEffect)((() => {
              wG && YG()
            }), [wG, YG]);
            const VG = "hidden" !== yG && (0, zL.c)();
            (0, SG.useLayoutEffect)((() => {
              if (VG) {
                const GG = document.activeElement;
                GG instanceof HTMLElement && GG.closest(".cm-content") && (UG.current = GG, GG.blur())
              } else {
                var GG;
                null === (GG = UG.current) || void 0 === GG || GG.focus(), UG.current = null
              }
            }), [VG]);
            const pG = (0, SG.useCallback)((() => {
              "hidden" === yG ? (kG("shown"), (0, zL.c)() && LG()) : kG("hidden")
            }), [yG, LG]);
            return {
              Op: yG,
              setWorld: kG,
              toggleWorld: pG
            }
          }({
            showAi: Gb,
            showDocs: PG,
            showChat: AG,
            hideOtherRightPanels: Sw
          }),
          Uw = Gb && null !== Kb && db,
          Yw = (0, SG.useCallback)((() => {
            wb(null)
          }), []),
          [Vw, pw] = (0, SG.useState)(null);
        (0, iG.g)("WorldCodeAiSelection", (GG => {
          wG && (pw(GG), bb(!0), MG(!1))
        }));
        const fw = (0, SG.useCallback)((() => {
          pw(null)
        }), []);
        (0, iG.g)("chat", (GG => {
          let {
            content: bG
          } = GG;
          if (!pG && null === Qb.current) return;
          const ZG = Array.isArray(bG) ? bG : [bG],
            wG = ZG.some((GG => {
              var bG;
              return (null === GG || void 0 === GG || null === (bG = GG.style) || void 0 === bG ? void 0 : bG.color) === CG.O.redUiText
            })),
            SG = ZG.map((GG => {
              var bG;
              const ZG = null !== (bG = null === GG || void 0 === GG ? void 0 : GG.str) && void 0 !== bG ? bG : GG;
              return "string" === typeof ZG ? ZG : ""
            })).join("");
          wG && /world code|error/i.test(SG) && (Lb((GG => [...GG, SG].slice(-10))), kb((GG => GG + 1)), (0, RL.f)(SG))
        })), (0, SG.useEffect)((() => {
          if (!wG || !pG || !QZ) return;
          let GG = !1;
          return (async (bG, ZG) => {
            const wG = await (null === (bG = hZ.current) || void 0 === bG ? void 0 : bG.tryRestoreHandle());
            !GG && wG && (fZ(!0), null === (ZG = hZ.current) || void 0 === ZG || ZG.startWhenReady())
          })(), () => {
            GG = !0
          }
        }), [wG, pG, QZ]), (0, SG.useEffect)((() => {
          var GG;
          wG || (null === (GG = hZ.current) || void 0 === GG || GG.stopContinuousSync(), EZ(!1), mb.current && (mb.current = !1, YG.gameBridge.send("sendChatMessage", {
            vV: "//export",
            channelName: null
          })))
        }), [wG, EZ]);
        const Qw = (0, SG.useCallback)((async () => {
            if (QZ && hZ.current) try {
              if (!await hZ.current.linkFolder()) return;
              fZ(!0), await hZ.current.startWhenReady()
            } catch (GG) {
              console.error("[WorldCodeDirectorySync] Link failed", GG), rZ({
                message: AZ("codeEditor:directorySyncError"),
                type: "warning"
              })
            }
          }), [QZ, AZ]),
          Kw = (0, SG.useCallback)((async () => {
            hZ.current && await hZ.current.unlinkFolder()
          }), []),
          hw = (0, SG.useCallback)((() => {
            QZ ? pZ ? Kw() : Qw() : xw.NotificationProvider.showAlertPopup({
              title: "codeEditor:directorySyncUnsupported",
              subtitle: "codeEditor:directorySyncUnsupportedBody",
              confirmText: "general:ok"
            })
          }), [QZ, pZ, Qw, Kw]),
          dw = pG && "hidden" !== Lw;
        return (0, VG.jsxs)(yG.b, {
          className: zZ()("CodeEditorBg", {
            CodeEditorLight: vG,
            WorldShown: "hidden" !== Lw,
            WorldTouchControl: "touchControls" === xG
          }),
          close: FZ,
          escDoesExit: !0,
          show: wG,
          togglePointerLock: !1,
          globallyUniqueKey: pG ? "LobbyCodeEditor" : "CodeBlockEditor",
          children: [(0, VG.jsx)(pL.d, {
            tutorial: "welcome",
            step: "codeBlockIntro",
            text: AZ("codeEditor:tutorialCodeBlockIntro"),
            enabled: !!Jb && !pG
          }), (0, VG.jsx)(pL.d, {
            tutorial: "welcome",
            step: "worldCodeIntro",
            text: (0, VG.jsxs)(VG.Fragment, {
              children: [(0, VG.jsx)("p", {
                children: AZ("codeEditor:tutorialWorldCodeWelcome")
              }), (0, VG.jsxs)("ul", {
                className: "TutorialStepList",
                children: [(0, VG.jsx)("li", {
                  children: AZ("codeEditor:tutorialWorldCodeUseSetUp")
                }), (0, VG.jsx)("li", {
                  children: AZ("codeEditor:tutorialWorldCodeUseReact")
                }), (0, VG.jsx)("li", {
                  children: AZ("codeEditor:tutorialWorldCodeUseRun")
                })]
              })]
            }),
            enabled: !!Jb && pG
          }), (0, VG.jsx)("div", {
            className: "CodeEditorTitle",
            children: pG ? "World Code" : "Code Block"
          }), (0, VG.jsxs)("div", {
            className: "CodeEditorTopBar",
            children: [(0, VG.jsxs)("div", {
              className: "CodeEditorTopLeft",
              children: [(0, VG.jsx)(HG.h, {
                tooltipInner: AZ(rb ? "codeEditor:exportTooltip" : "codeEditor:exportOwnerOnly"),
                delayShow: rb ? void 0 : 0,
                hideTooltip: "exportButton" === zb,
                children: (0, VG.jsx)(pL.i, {
                  tutorial: "welcome",
                  step: "exportButton",
                  text: AZ("codeEditor:tutorialExport"),
                  enabled: !!Jb,
                  children: (0, VG.jsx)(QG.k, {
                    className: "CodeEditorButton",
                    disabled: !rb,
                    onClick: () => {
                      "exportButton" === zb && ((0, fL.e)("exportButton"), Wb.current = !0), mb.current = !0, FZ()
                    },
                    padDestructive: !0,
                    children: AZ("codeEditor:exportWorld")
                  })
                })
              }), (0, VG.jsx)(nL, {
                Op: Lw,
                setWorld: yw,
                toggleWorld: kw,
                aiShown: Uw,
                closeAi: xZ
              })]
            }), (0, VG.jsxs)("div", {
              className: "CodeEditorTopRight",
              children: [Jb && (0, VG.jsx)(HG.h, {
                tooltipInner: AZ("codeEditor:helpTooltip"),
                hideTooltip: "helpButton" === zb,
                children: (0, VG.jsx)(pL.i, {
                  tutorial: "welcome",
                  step: "helpButton",
                  text: AZ("codeEditor:tutorialHelpButton"),
                  placement: "bottom",
                  children: (0, VG.jsx)(QG.d, {
                    className: "CodeEditorHelpButton",
                    ariaLabel: AZ("codeEditor:helpTooltip"),
                    onClick: () => {
                      (0, fL.e)("helpButton"), xw.NotificationProvider.showCustomPopup({
                        body: GG => (0, VG.jsx)(QL, {
                          close: GG
                        }),
                        unlockPointerKey: "codeEditorTutorials"
                      })
                    },
                    children: (0, VG.jsx)("div", {
                      className: "CodeEditorHelpButtonInner",
                      children: (0, VG.jsx)(dG.c, {
                        name: "circle-question"
                      })
                    })
                  })
                })
              }), (0, VG.jsx)(HG.h, {
                tooltipInner: AZ("codeEditor:closeTooltip"),
                children: (0, VG.jsx)("div", {
                  className: "CodeEditorCloseButtonClickZone",
                  onClick: () => {
                    FZ()
                  },
                  children: (0, VG.jsx)(QG.j, {
                    className: "CodeEditorCloseButton"
                  })
                })
              })]
            })]
          }), (0, VG.jsx)(IS, {
            peers: null !== (bG = null === Ab || void 0 === Ab ? void 0 : Ab.peers) && void 0 !== bG ? bG : []
          }), (0, VG.jsxs)("div", {
            className: zZ()("CodeEditorMainArea", {
              WorldCovers: "always" === EL(Lw),
              WorldCoversWhenNarrow: "narrow" === EL(Lw)
            }),
            children: [AG && RG && (0, VG.jsx)(zL.b, {
              side: "left",
              defaultSize: "max(16rem, 24%)",
              onClose: () => {
                nG(!1)
              },
              children: (0, VG.jsx)(rL, {
                inputRef: gG
              })
            }), pG && (0, VG.jsx)(PS, {
              schematics: Rb.assets,
              onManageSchematic: GG => {
                Jb && xw.NotificationProvider.showCustomPopup({
                  body: bG => (0, VG.jsx)(wL, {
                    initialPath: GG,
                    onChanged: tb,
                    onClose: bG
                  }),
                  unlockPointerKey: "worldCodeSchematics"
                })
              },
              files: qb,
              activePath: Db,
              canEdit: !!Jb,
              directoryLinked: pZ,
              pluginNames: null !== eZ && void 0 !== eZ ? eZ : Gy,
              activePluginName: Ob,
              activePluginFile: Bb,
              onSelect: CZ,
              onSelectPlugin: WZ,
              onToggleDirectorySync: hw,
              onCreate: GG => {
                YZ.current = GG, YG.gameBridge.send("sendCodeCollab", {
                  BS: iS.c.CreateFile,
                  bL: (0, iS.r)({
                    kind: "lobby",
                    path: wZ.current
                  }),
                  IV: GG
                })
              },
              onRename: (GG, bG) => {
                wZ.current === GG && (VZ.current = {
                  fromPath: GG,
                  toPath: bG
                }, Nb(bG)), YG.gameBridge.send("sendCodeCollab", {
                  BS: iS.c.RenameFile,
                  bL: (0, iS.r)({
                    kind: "lobby",
                    path: wZ.current
                  }),
                  IV: GG,
                  FV: bG
                })
              },
              onRenameFolder: (GG, bG) => {
                const [ZG] = (0, CS.n)([wZ.current], GG, bG);
                ZG && (VZ.current = {
                  fromPath: ZG[0],
                  toPath: ZG[1]
                }, Nb(ZG[1])), YG.gameBridge.send("sendCodeCollab", {
                  BS: iS.c.RenameFolder,
                  bL: (0, iS.r)({
                    kind: "lobby",
                    path: wZ.current
                  }),
                  IV: GG,
                  FV: bG
                })
              },
              onDelete: iZ
            }), (0, VG.jsx)("div", {
              className: zZ()("CodeEditorMessage", {
                CodeEditorMessageHidden: !uG.message,
                CodeEditorMessageSuccess: "success" === uG.type
              }),
              children: uG.message && (0, VG.jsx)("div", {
                className: "CodeEditorMessageText",
                children: uG.message
              })
            }), (0, VG.jsx)(SG.Suspense, {
              fallback: (0, VG.jsx)("div", {
                className: "CodeEditorContent",
                children: (0, VG.jsx)(mG.b, {})
              }),
              children: (0, VG.jsx)(HL, {
                isLobbyCode: pG,
                code: Ab ? Ab.doc : fG.current,
                files: pG ? qb : void 0,
                activePath: pG ? Db : void 0,
                pluginName: Ob,
                pluginFile: Bb,
                pluginSource: Ob && Bb ? null === (ZG = vS.h[Ob]) || void 0 === ZG ? void 0 : ZG.files[Bb] : void 0,
                onChange: lZ,
                canEditCode: Jb,
                setTemporaryMessage: rZ,
                close: FZ,
                showTooltips: IG,
                lightMode: vG,
                collabState: Ab,
                setActiveDocReplacer: gZ,
                showAiHints: db && lG,
                canAiChangeCode: !!Jb && (pG || !!rG.current),
                onRemoteDocChange: GG => {
                  var bG;
                  (fG.current = GG, pG) ? (gb((bG => ({
                    ...bG,
                    [wZ.current]: GG
                  }))), null === (bG = hZ.current) || void 0 === bG || bG.onDocTextChanged(wZ.current, GG)) : pb(GG)
                }
              })
            }), (PG || Uw || "hidden" !== Lw) && (0, VG.jsxs)(oL, {
              Op: Lw,
              worldPanel: (0, VG.jsx)(sL, {
                shown: Lw,
                setShown: yw,
                canInsertCode: !!Jb && !Ob
              }),
              closeWorld: () => {
                yw("hidden")
              },
              aiShown: Uw,
              defaultWidth: PG ? "40%" : "max(18rem, 36%)",
              children: [PG && (0, VG.jsx)(zL.b, {
                onClose: Zw ? void 0 : PZ,
                children: (0, VG.jsx)(SG.Suspense, {
                  fallback: (0, VG.jsx)("div", {
                    className: "DocsPanel",
                    children: (0, VG.jsx)(mG.b, {})
                  }),
                  children: (0, VG.jsx)(tL, {
                    popOutDocs: jZ,
                    hideDocs: PZ,
                    tutorialEnabled: !!Jb
                  })
                })
              }), Uw && (0, VG.jsx)(zL.b, {
                onClose: ww ? void 0 : xZ,
                children: (0, VG.jsx)(SG.Suspense, {
                  fallback: (0, VG.jsx)("div", {
                    className: "CodeEditorPanelLoading",
                    children: (0, VG.jsx)(mG.b, {})
                  }),
                  children: (0, VG.jsx)(DL, {
                    target: Kb,
                    chatKey: `${Pb.gameNameWithVariation}/${Pb.lobbyName}/aiHelper`,
                    historyKey: `${Pb.gameNameWithVariation}/${Pb.lobbyName}/${Kb.key}`,
                    files: Kb.codeBlock ? tZ : qb,
                    activePath: Kb.codeBlock ? eL.c : Db,
                    canEdit: !!Jb && (Kb.codeBlock ? !!rG.current : !Ob),
                    isLoaded: null !== Ab,
                    errors: Sb,
                    errorCount: yb,
                    applyFiles: Kb.codeBlock ? TZ : RZ,
                    submit: NZ,
                    testRun: OZ,
                    close: xZ,
                    goToLine: Kb.codeBlock ? DZ : nZ,
                    openWorldCode: Kb.codeBlock ? Gw : void 0,
                    readWorldCode: Kb.codeBlock ? HZ : void 0,
                    viewChunk: NL,
                    viewGameState: OL,
                    openTarget: Jb ? bw : void 0,
                    draft: Zb,
                    onDraftUsed: Yw,
                    selection: Vw,
                    onSelectionUsed: fw
                  }, Kb.key)
                })
              })]
            })]
          }), (null === LZ || void 0 === LZ ? void 0 : LZ.fallback) && (0, VG.jsx)(LL, {
            fallback: LZ.fallback,
            onGoToLine: nZ
          }), (0, VG.jsxs)("div", {
            className: "CodeEditorButtons",
            "data-pad-hint-bar-avoid": !0,
            children: [(0, VG.jsx)(HG.h, {
              tooltipInner: AZ(vG ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
              placement: "top",
              children: (0, VG.jsx)(QG.d, {
                className: "CodeEditorButton CodeEditorThemeButton",
                ariaLabel: AZ(vG ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
                onClick: () => {
                  cG(!vG)
                },
                children: (0, VG.jsx)(dG.c, {
                  name: vG ? "moon" : "sun-bright"
                })
              })
            }), (0, VG.jsx)(HG.h, {
              tooltipInner: AZ(dw ? "codeEditorWorld:submitCodeTooltip" : "codeEditor:submitCodeTooltip"),
              placement: "top",
              children: (0, VG.jsx)(QG.k, {
                className: "CodeEditorButton",
                onClick: () => {
                  vZ(dw)
                },
                padDefaultFocus: !0,
                children: AZ("codeEditor:submitCode")
              })
            }), (0, VG.jsx)(HG.h, {
              tooltipInner: AZ(PG ? "codeEditor:hideDocsTooltip" : "codeEditor:showDocsTooltip"),
              placement: "top",
              hideTooltip: "docsButton" === Xb || "hideDocsButton" === Xb,
              children: (0, VG.jsx)(pL.i, {
                tutorial: ob,
                step: PG ? "hideDocsButton" : "docsButton",
                text: AZ(PG ? "codeEditor:tutorialHideDocs" : "codeEditor:tutorialDocs"),
                enabled: !!Jb,
                placement: "top",
                waitForClick: !0,
                onPrevious: PG && "welcome" === ob ? PZ : void 0,
                children: (0, VG.jsx)(QG.r, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    (0, fL.e)(PG ? "hideDocsButton" : "docsButton"), MG(!PG), bb(!1)
                  },
                  children: AZ(PG ? "codeEditor:hideDocs" : "codeEditor:showDocs")
                })
              })
            }), db && (0, VG.jsx)(pL.i, {
              tutorial: ib,
              step: Gb ? "hideAiHelperButton" : "aiHelperButton",
              text: AZ(Gb ? "codeEditorAiTutorial:hideAiHelperButton" : "welcome" === ib ? "codeEditorAiTutorial:welcomeAiHelperButton" : "codeEditorAiTutorial:aiHelperButton"),
              enabled: !!Jb,
              placement: "top",
              waitForClick: !0,
              onPrevious: Gb && "welcome" === ib ? MZ : void 0,
              children: (0, VG.jsx)(qZ, {
                className: "CodeEditorButton",
                onClick: () => {
                  (0, fL.e)(Gb ? "hideAiHelperButton" : "aiHelperButton"), bb(!Gb), MG(!1)
                },
                children: Gb ? "Hide AI Helper" : sZ ? "Fix error with AI" : "AI Helper"
              })
            }), RG && (0, VG.jsx)(HG.h, {
              tooltipInner: AZ(AG ? "codeEditorChat:hideChatTooltip" : "codeEditorChat:showChatTooltip"),
              placement: "top",
              children: (0, VG.jsx)(QG.r, {
                className: "CodeEditorButton",
                onClick: () => {
                  eG.current = !AG, nG(!AG)
                },
                children: AZ(AG ? "codeEditorChat:hideChat" : "codeEditorChat:showChat")
              })
            }), (0, VG.jsx)(HG.h, {
              tooltipInner: AZ("hidden" === Lw ? "codeEditorWorld:showWorldTooltip" : "codeEditorWorld:hideWorldTooltip"),
              placement: "top",
              children: (0, VG.jsx)(QG.r, {
                className: "CodeEditorButton CodeEditorWorldButton",
                onClick: kw,
                children: AZ("hidden" === Lw ? "codeEditorWorld:showWorld" : "codeEditorWorld:hideWorld")
              })
            }), (0, VG.jsx)(HG.h, {
              tooltipInner: AZ("codeEditor:formatCodeTooltip"),
              placement: "top",
              children: (0, VG.jsx)(QG.d, {
                className: "CodeEditorButton",
                onClick: () => {
                  KG.l.xh("FormatCode")
                },
                children: AZ("codeEditor:formatCode")
              })
            }), (0, VG.jsx)(HG.h, {
              tooltipInner: AZ("codeEditor:copyCodeTooltip"),
              placement: "top",
              children: (0, VG.jsx)(QG.d, {
                className: "CodeEditorButton",
                onClick: () => {
                  navigator.clipboard.writeText(fG.current).then((() => {
                    rZ({
                      message: "Successfully copied code to clipboard",
                      type: "success"
                    })
                  })).catch((() => {
                    rZ({
                      message: "Failed to copy code to clipboard",
                      type: "warning"
                    })
                  }))
                },
                children: AZ("codeEditor:copyCode")
              })
            }), (0, VG.jsx)(HG.h, {
              tooltipInner: AZ(IG ? "codeEditor:hideTooltipsTooltip" : "codeEditor:showTooltipsTooltip"),
              placement: "top",
              children: (0, VG.jsx)(QG.d, {
                className: "CodeEditorButton",
                onClick: () => {
                  FG(!IG)
                },
                children: AZ(IG ? "codeEditor:hideTooltips" : "codeEditor:showTooltips")
              })
            }), !pG && (0, VG.jsx)(HG.h, {
              tooltipInner: AZ("codeEditor:worldCodeTooltip"),
              placement: "top",
              hideTooltip: "worldCodeButton" === zb,
              children: (0, VG.jsx)(pL.i, {
                tutorial: "welcome",
                step: "worldCodeButton",
                text: AZ("codeEditor:tutorialWorldCodeButton"),
                enabled: !!Jb,
                placement: "top",
                waitForClick: !0,
                children: (0, VG.jsx)(QG.r, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    "worldCodeButton" === zb && ((0, fL.e)("worldCodeButton"), Wb.current = !0), FZ(), KG.l.xh("EditLobbyCode", hG)
                  },
                  children: AZ("codeEditor:worldCode")
                })
              })
            }), (Mb || yZ || db) && (0, VG.jsx)(HG.h, {
              tooltipInner: AZ("codeEditor:moreOptionsTooltip"),
              placement: "top",
              children: (0, VG.jsx)(QG.d, {
                className: "CodeEditorButton CodeEditorMoreButton",
                onClick: () => {
                  cb(!0)
                },
                children: (0, VG.jsx)(dG.c, {
                  name: "ellipsis"
                })
              })
            })]
          }), ab && (0, VG.jsx)(GS.d, {
            middleScreenPopupContainerClassName: "CodeEditorMoreOptionsPopup",
            close: () => {
              cb(!1)
            },
            body: (0, VG.jsx)(VL, {
              engine: yZ,
              onSetEngine: cZ,
              aiHints: db ? {
                shown: lG,
                setShown: jG
              } : null,
              variation: Mb ? {
                name: Fb,
                setName: vb,
                reload: aZ
              } : null
            })
          })]
        })
      })),
      wy = new Set(["makeReport", "makeDiscordReport", "inviteLink"]);

    function Sy(GG) {
      return "inventory" === GG
    }
    const Ly = (0, SG.memo)((function() {
      const {
        openEverythingMenuName: GG,
        openInGameMenuName: bG
      } = (0, sG.o)(["openEverythingMenuName", "openInGameMenuName"]), ZG = (0, WG.f)("fullInventory"), LG = (0, SG.useRef)(null), yG = (0, Fb.h)();
      (0, iG.g)("toggleMenu", (GG => {
        var bG;
        if (!yG.shown) return;
        const ZG = sG.e.get("openInGameMenuName");
        let wG = GG.split("|")[0];
        const SG = null !== (bG = GG.split("|")[1]) && void 0 !== bG ? bG : null;
        ("closeCurrentMenu" === SG && ZG || wG === ZG) && (LG.current = null, wG = null);
        const kG = "closeCurrentMenu" === SG ? null : SG;
        LG.current !== kG && (LG.current = kG), null !== wG && (0, VS.z)(VS.e, {
          keepsMovement: Sy(wG)
        }), sG.e.set({
          openInGameMenuName: wG
        })
      }));
      const kG = (0, SG.useCallback)((GG => () => {
          KG.l.xh("toggleMenu", GG)
        }), []),
        UG = (0, SG.useRef)({
          cantCrouchIfNotFullscreen: kG("cantCrouchIfNotFullscreen"),
          makeReport: kG("makeReport"),
          makeDiscordReport: kG("makeDiscordReport"),
          editBook: kG("editBook"),
          editNameTag: kG("editNameTag"),
          inventory: kG("inventory"),
          inviteLink: kG("inviteLink"),
          writeOnBoard: kG("writeOnBoard"),
          codeEditor: kG("codeEditor"),
          lobbyCodeEditor: kG("lobbyCodeEditor"),
          customLobbyBlockEditor: kG("customLobbyBlockEditor"),
          ironChestPasskeyInput: kG("ironChestPasskeyInput"),
          petUi: kG("petUi")
        }),
        YG = (0, SG.useCallback)((() => {
          sG.e.set({
            openInGameMenuName: null
          })
        }), []),
        pG = (0, SG.useRef)(null);
      return (0, SG.useEffect)((() => {
        if (bG) {
          var GG;
          (0, VS.z)(VS.e, {
            keepsMovement: Sy(bG)
          }), pG.current = wy.has(bG) ? null !== (GG = sG.e.get("openEverythingMenuName")) && void 0 !== GG ? GG : pG.current : null, sG.e.set({
            openEverythingMenuName: null
          })
        } else {
          const GG = pG.current;
          pG.current = null, null !== GG && null === sG.e.get("openEverythingMenuName") && sG.e.set({
            openEverythingMenuName: GG
          }), LG.current = null, (0, VS.w)(VS.e)
        }
      }), [bG]), (0, SG.useEffect)((() => {
        null !== GG && YG()
      }), [GG, YG]), (0, VG.jsxs)(VG.Fragment, {
        children: [(0, VG.jsx)(wG.g, {
          show: "clientGame" === bG
        }), (0, VG.jsx)(Dw, {
          show: "cantCrouchIfNotFullscreen" === bG,
          onOpen: UG.current.cantCrouchIfNotFullscreen,
          onClose: YG
        }), (0, VG.jsx)(LS, {
          show: "makeReport" === bG,
          onOpen: UG.current.makeReport,
          onClose: YG
        }), (0, VG.jsx)(YS, {
          show: "makeDiscordReport" === bG,
          onOpen: UG.current.makeDiscordReport,
          onClose: YG
        }), (0, VG.jsx)(bZ, {
          show: "editBook" === bG,
          onOpen: UG.current.editBook,
          onClose: YG
        }), (0, VG.jsx)(Bb, {
          show: "editNameTag" === bG,
          onOpen: UG.current.editNameTag,
          onClose: YG
        }), ZG && (0, VG.jsx)(Tw, {
          show: "inventory" === bG,
          onOpen: UG.current.inventory,
          onClose: YG,
          variation: LG.current
        }), (0, VG.jsx)(vb, {
          show: "inviteLink" === bG,
          onClose: YG,
          option: LG.current
        }), (0, VG.jsx)(jG, {
          show: "retentionFeatures" === bG,
          onClose: YG
        }), (0, VG.jsx)(xb, {
          show: "writeOnBoard" === bG,
          onOpen: UG.current.writeOnBoard,
          onClose: YG
        }), (0, VG.jsx)(Zy, {
          show: "lobbyCodeEditor" === bG,
          onOpen: UG.current.lobbyCodeEditor,
          onClose: YG,
          isLobbyCode: !0
        }), (0, VG.jsx)(Zy, {
          show: "codeEditor" === bG,
          onOpen: UG.current.codeEditor,
          onClose: YG,
          isLobbyCode: !1
        }), (0, VG.jsx)(fS, {
          show: "customLobbyBlockEditor" === bG,
          onOpen: UG.current.customLobbyBlockEditor,
          onClose: YG
        }), (0, VG.jsx)(oZ, {
          show: "ironChestPasskeyInput" === bG,
          onOpen: UG.current.ironChestPasskeyInput,
          onClose: YG
        }), (0, VG.jsx)(rS, {
          togglePointerLock: !0,
          show: "petUi" === bG,
          onOpen: UG.current.petUi,
          onClose: YG
        })]
      })
    }))
  },
  36838: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => cy
    });
    ZG(36841);
    var wG = ZG(1781),
      SG = ZG(51),
      LG = ZG(1006),
      yG = ZG.n(LG),
      kG = ZG(3737),
      UG = ZG(1389),
      YG = ZG(1876),
      VG = ZG(1067);

    function pG() {
      const GG = 2e3,
        [bG, ZG] = (0, SG.useState)(null),
        [wG, LG] = (0, SG.useState)(null),
        pG = (0, SG.useRef)(null);
      (0, UG.g)("showBottomMessage", (bG => {
        let {
          message: ZG,
          timeoutLength: wG = GG,
          type: SG
        } = bG;
        LG({
          message: ZG,
          type: SG
        }), clearTimeout(pG.current), pG.current = setTimeout((() => {
          LG(null)
        }), wG)
      })), (0, UG.g)("showPermanentBottomMessage", (GG => {
        ZG(GG)
      })), (0, SG.useEffect)((() => ((0, kG.e)((() => {
        ZG(null)
      })), () => {
        clearTimeout(pG.current)
      })), []);
      const fG = wG || bG;
      return fG ? (0, VG.jsx)("div", {
        className: yG()("BottomScreenMessage", fG.type),
        children: (0, VG.jsx)(YG.c, {
          text: fG.message
        })
      }) : null
    }
    var fG = ZG(2348),
      QG = ZG(1895),
      KG = ZG(1444),
      hG = ZG(2414);

    function dG() {
      let GG;
      const bG = () => {
          clearTimeout(GG), GG = setTimeout((() => {
            QG.gameBridge.latest("connectedGame").replay || (QG.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, KG.navigatePreserveSearch)("/"))
          }), 3e5)
        },
        ZG = () => {
          clearTimeout(GG)
        };
      return window.addEventListener("focus", ZG), window.addEventListener("blur", bG), () => {
        window.removeEventListener("blur", bG), window.removeEventListener("focus", ZG), clearTimeout(GG)
      }
    }
    var JG = ZG(1092),
      rG = ZG(3100),
      zG = ZG(333),
      EG = ZG(2409),
      oG = ZG(19),
      XG = ZG(1923),
      uG = ZG(29),
      iG = ZG(1945),
      CG = ZG(17),
      WG = ZG(1953),
      mG = ZG(1343),
      IG = ZG(8862),
      FG = ZG(1988),
      vG = ZG(1151);
    const aG = (0, SG.memo)((function() {
      const {
        isTouchScreen: GG,
        loadingOverlayVisible: bG,
        openInGameMenuName: ZG,
        openEverythingMenuName: wG
      } = (0, CG.o)(["isTouchScreen", "loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]), LG = (0, mG.w)();
      (0, rG.b)();
      const kG = (0, EG.i)("showBasicMovementControls"),
        [UG, YG] = (0, SG.useState)("movement"),
        pG = "movement" === UG,
        fG = LG && !1 !== kG;
      (0, SG.useEffect)((() => {
        "padActions" !== UG || fG || YG("done")
      }), [UG, fG]);
      const QG = bG || null !== ZG || null !== wG,
        KG = (0, SG.useRef)({
          step: UG,
          ms: 0
        });
      return (0, SG.useEffect)((() => {
        if (QG || "done" === UG) return;
        KG.current.step !== UG && (KG.current = {
          step: UG,
          ms: 0
        });
        const GG = KG.current,
          bG = performance.now(),
          ZG = setTimeout((() => {
            YG("movement" === UG && (0, mG.k)() ? "padActions" : "done")
          }), 7e3 - GG.ms);
        return () => {
          clearTimeout(ZG), GG.ms += performance.now() - bG
        }
      }), [QG, UG]), uG.h.getItem(zG.cc) > 2 ? (0, VG.jsx)(PG, {
        showingMovementControls: !1
      }) : (0, VG.jsxs)(VG.Fragment, {
        children: [GG && !LG || !pG || !1 === kG ? null : (0, VG.jsxs)("div", {
          className: yG()("ControlsTutorialDiv", {
            Covered: QG
          }),
          children: [(0, VG.jsx)(cG, {}), (0, VG.jsx)(jG, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, VG.jsx)(jG, {
            header: "Jump",
            noaAction: "jump"
          })]
        }), "padActions" === UG && fG && (0, VG.jsx)(lG, {
          covered: QG
        }), (0, VG.jsx)(PG, {
          showingMovementControls: "done" !== UG
        })]
      })
    }));

    function cG() {
      const GG = (0, mG.w)();
      return (0, VG.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, VG.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), GG && (0, VG.jsx)(WG.e, {
          noaAction: "forward"
        }), !GG && (0, VG.jsxs)(VG.Fragment, {
          children: [(0, VG.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, VG.jsx)(WG.e, {
              noaAction: "forward"
            })
          }), (0, VG.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, VG.jsx)(WG.e, {
              noaAction: "left"
            }), (0, VG.jsx)(WG.e, {
              noaAction: "backward"
            }), (0, VG.jsx)(WG.e, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function lG(GG) {
      let {
        covered: bG
      } = GG;
      const {
        t: ZG
      } = (0, vG.w)(), wG = (0, EG.i)("useInventory");
      return (0, VG.jsxs)("div", {
        className: yG()("ControlsTutorialDiv", {
          Covered: bG
        }),
        children: [(0, VG.jsx)(jG, {
          header: ZG("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, VG.jsx)(jG, {
          header: ZG("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== wG && (0, VG.jsx)(jG, {
          header: ZG("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, VG.jsx)(jG, {
          header: ZG("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function jG(GG) {
      let {
        header: bG,
        noaAction: ZG
      } = GG;
      return (0, VG.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, VG.jsx)("div", {
          className: "KeyHeader",
          children: bG
        }), (0, VG.jsx)(WG.e, {
          noaAction: ZG
        })]
      })
    }

    function PG(GG) {
      let {
        showingMovementControls: bG
      } = GG;
      const {
        isTouchScreen: ZG
      } = (0, CG.o)(["isTouchScreen"]), wG = (0, mG.w)(), LG = (0, FG.c)("OpenShop"), [yG, kG] = (0, SG.useState)(!1), UG = `SeenShopControls|${(0,iG.c)("connectedGame",(GG=>GG.gameNameWithVariation))}`, YG = () => (!(0, mG.k)() || null !== (0, IG.b)("OpenShop")) && !uG.h.getItem(UG) && XG.c.get("shopInfo") && !bG, pG = () => (kG(!0), uG.h.setItem(UG, !0), (0, mG.k)() || oG.l.xh("showShopTouchTutorial"), setTimeout((() => {
        kG(!1)
      }), 7e3));
      (0, SG.useEffect)((() => {
        let GG;
        const bG = oG.l.subscribe("showShopTutorial", (() => {
          YG() && (GG = pG())
        }));
        return () => {
          clearTimeout(GG), oG.l.unsubscribe(bG)
        }
      }), [bG]);
      const fG = (0, SG.useRef)();
      return (0, EG.h)("currencyAmounts", (GG => {
        if (YG()) {
          let ZG = !1;
          const wG = XG.c.get("shopInfo");
          for (const SG in wG) {
            for (const LG in wG[SG].items) {
              var bG;
              const yG = wG[SG].items[LG];
              if (void 0 !== yG.currency && GG[yG.currency] && yG.cost <= GG[yG.currency].amount && (null === (bG = yG.hidden) || void 0 === bG || !bG)) {
                ZG = !0;
                break
              }
            }
            if (ZG) break
          }
          ZG && (fG.current = pG())
        }
      })), (0, SG.useEffect)((() => () => {
        clearTimeout(fG.current)
      }), [bG]), !yG || wG && !LG ? null : (0, VG.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: ZG && !wG ? null : (0, VG.jsx)(jG, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
    var MG = ZG(1320),
      AG = ZG(1016);
    const sG = (0, SG.memo)((function() {
      return (0, rG.b)(), (0, VG.jsx)(qG, {})
    }));
    class qG extends SG.Component {
      constructor(GG) {
        super(GG), this.showQueue = [], this.slideDuration = 1, this.state = {
          showQueue: [],
          currState: null
        }, this.currMessage = null, this.justShowed = !1
      }
      componentDidMount() {
        this.sub = oG.l.subscribe("TopRightHelper", (GG => {
          this.showQueue.push(GG), this.setState({
            showQueue: this.showQueue
          })
        }))
      }
      componentWillUnmount() {
        oG.l.unsubscribe(this.sub), clearTimeout(this.slideOutTimeout), clearTimeout(this.hidingMessageTimeout)
      }
      componentDidUpdate(GG, bG) {
        this.justShowed && (this.justShowed = !1, this.setState({
          currState: "slideIn"
        }), this.slideOutTimeout = setTimeout((() => {
          this.setState({
            currState: "slideOut"
          })
        }), 1e3 * ((this.currMessage.duration || 8) - 1)), this.hidingMessageTimeout = setTimeout((() => {
          this.showQueue.shift(), this.currMessage = null, this.setState({
            showQueue: this.showQueue,
            currState: null
          })
        }), 1e3 * (this.currMessage.duration || 8)))
      }
      render() {
        let GG, bG, ZG, wG, SG, LG = !0;
        if (this.state.showQueue.length > 0 && null === this.state.currState ? (this.currMessage = this.state.showQueue[0], this.justShowed = !0, GG = "slideIn") : "slideOut" === this.state.currState ? GG = "slideOut" : null === this.currMessage && (LG = !1), this.currMessage) {
          const LG = this.currMessage.color || "rgb(102, 102, 102)";
          bG = {
            width: this.currMessage.width || "250px",
            height: this.currMessage.height || "70px",
            animation: "1s " + ("slideOut" === GG ? "HelperSlideKeyFrameReverse" : "HelperSlideKeyFrame")
          }, ZG = {
            backgroundColor: LG
          }, wG = {
            animation: "2s " + ("slideOut" === GG ? "CloseNotification" : "ExpandNotification")
          }, SG = {
            fontSize: this.currMessage.fontSize || "16px",
            animation: "2s " + ("slideOut" === GG ? "textDisappear" : "textAppear")
          }
        }
        return LG ? (0, VG.jsxs)("div", {
          className: "TopRightHelperBox",
          style: {
            ...bG
          },
          children: [(0, VG.jsx)("div", {
            className: "LeftSide",
            style: ZG,
            children: (0, VG.jsx)(AG.c, {
              name: this.currMessage.icon,
              className: `fa-${this.currMessage.iconSizeMult||3}x HelperIcon`
            })
          }), (0, VG.jsx)("div", {
            className: "RightSide",
            style: wG,
            children: (0, VG.jsx)("div", {
              className: "HelperText",
              style: SG,
              children: this.currMessage.text
            })
          })]
        }) : null
      }
    }
    var nG = ZG(36848),
      gG = ZG(1359);
    const eG = (0, gG.i)((GG => GG.PadSneakChip));

    function RG(GG) {
      const [bG, ZG, wG] = function(GG) {
        const bG = parseInt(GG.substring(1), 16),
          ZG = (bG >> 16) / 255,
          wG = (bG >> 8 & 255) / 255,
          SG = (255 & bG) / 255,
          LG = Math.max(ZG, wG, SG),
          yG = Math.min(ZG, wG, SG),
          kG = (LG + yG) / 2,
          UG = LG - yG;
        if (0 === UG) return [0, 0, kG];
        const YG = UG / (1 - Math.abs(2 * kG - 1));
        let VG;
        VG = LG === ZG ? (wG - SG) / UG % 6 : LG === wG ? (SG - ZG) / UG + 2 : (ZG - wG) / UG + 4;
        return [(60 * VG + 360) % 360, YG, kG]
      }(GG), SG = 0 === ZG ? 0 : Math.min(.6, ZG + .03), LG = wG > .5 ? -1 : 1, yG = TG(wG + .09 * LG);
      return {
        panel: GG,
        slot: HG(bG, SG, yG),
        slotSelected: HG(bG, SG, TG(yG + .2 * LG)),
        slotUnavailable: HG(bG, SG, TG(wG + -.1 * LG))
      }
    }

    function TG(GG) {
      return Math.min(1, Math.max(0, GG))
    }

    function HG(GG, bG, ZG) {
      const wG = (1 - Math.abs(2 * ZG - 1)) * bG,
        SG = wG * (1 - Math.abs(GG / 60 % 2 - 1)),
        LG = ZG - wG / 2;
      let yG;
      return yG = GG < 60 ? [wG, SG, 0] : GG < 120 ? [SG, wG, 0] : GG < 180 ? [0, wG, SG] : GG < 240 ? [0, SG, wG] : GG < 300 ? [SG, 0, wG] : [wG, 0, SG], "#" + yG.map((GG => function(GG) {
        return Math.round(255 * GG).toString(16).padStart(2, "0")
      }(GG + LG))).join("")
    }
    var tG = ZG(36871),
      DG = ZG(4293),
      NG = ZG(2380),
      OG = ZG(2388),
      xG = ZG(36936),
      BG = ZG(4842),
      Gb = ZG(1405),
      bb = ZG(604);

    function Zb(GG, bG, ZG, wG) {
      GG.style.display = "";
      const SG = GG.offsetWidth,
        LG = GG.offsetHeight,
        yG = Math.min(Math.max((bG.left + bG.right) / 2 - SG / 2, 8), window.innerWidth - 8 - SG);
      let kG = bG.top - ZG - LG;
      const UG = [...wG].sort(((GG, bG) => bG.top - GG.top));
      for (const YG of UG) yG < YG.right && yG + SG > YG.left && kG < YG.bottom && kG + LG > YG.top && (kG = YG.top - 8 - LG);
      return kG < 8 ? (GG.style.display = "none", null) : (GG.style.transform = `translate(${yG-bG.left}px, ${kG-bG.top}px)`, {
        left: yG,
        top: kG,
        right: yG + SG,
        bottom: kG + LG
      })
    }

    function wb(GG) {
      const bG = [];
      for (const ZG of document.querySelectorAll(GG)) {
        const GG = ZG.getBoundingClientRect();
        GG.width > 0 && "visible" === getComputedStyle(ZG).visibility && bG.push(GG)
      }
      return bG
    }

    function Sb(GG, bG) {
      return GG.clientX >= bG.left - 8 && GG.clientX <= bG.right + 8 && GG.clientY >= bG.top - 8 && GG.clientY <= bG.bottom + 8
    }
    var Lb = ZG(8926);
    class yb {
      constructor(GG) {
        this.deps = GG, this.phase = "idle", this.armTimer = null, this.suspended = !1
      }
      get locked() {
        return "locked" === this.phase
      }
      get offered() {
        return "armed" === this.phase || "ready" === this.phase
      }
      target(GG) {
        GG && "armed" === this.phase ? this.setPhase("ready") : GG || "ready" !== this.phase || this.setPhase("armed")
      }
      lift() {
        return "ready" !== this.phase ? (this.cancel(), !1) : (this.setPhase("locked"), !0)
      }
      cancel() {
        "idle" !== this.phase && this.setPhase("idle")
      }
      suspend() {
        this.suspendArming(), this.cancel()
      }
      suspendArming() {
        this.suspended = !0, "locked" !== this.phase && this.cancel()
      }
      startTouch() {
        this.suspended = !1, this.cancel()
      }
      hold(GG, bG) {
        this.suspended || (this.offered ? bG || this.setPhase("idle") : GG && "idle" === this.phase ? (this.setPhase("charging"), this.armTimer = setTimeout((() => {
          this.armTimer = null, this.onArm(), this.setPhase("armed")
        }), 1e3)) : GG || "charging" !== this.phase || this.setPhase("idle"))
      }
      onArm() {}
      setPhase(GG) {
        null !== this.armTimer && (clearTimeout(this.armTimer), this.armTimer = null);
        const bG = this.phase;
        this.phase = GG, this.deps.onPhase(GG, bG)
      }
    }
    const kb = 25 * Math.PI / 180,
      Ub = 45 * Math.PI / 180;
    class Yb extends yb {
      constructor() {
        super(...arguments), this.speed = 0, this.armedSpeed = 0
      }
      get lockedSpeed() {
        return this.armedSpeed
      }
      move(GG, bG, ZG) {
        this.speed = ZG;
        const wG = Math.hypot(GG, bG),
          SG = wG > 0 ? Math.acos(Math.min(1, -bG / wG)) : Math.PI;
        this.hold(wG >= .8 && SG <= kb, wG >= .5 && SG <= Ub)
      }
      onArm() {
        this.armedSpeed = this.speed
      }
    }
    var Vb = ZG(1251);

    function pb(GG, bG) {
      const ZG = (0, SG.useRef)(null),
        wG = (0, SG.useRef)(bG);
      return wG.current = bG, (0, SG.useEffect)((() => {
        if (!GG) return;
        const {
          create: bG,
          elementRef: SG,
          ringRef: LG,
          classPrefix: yG,
          keptBehindMovementPanels: kG,
          resizeEnds: UG
        } = wG.current, YG = {
          charging: `${yG}Charging`,
          armed: `${yG}Armed`,
          ready: `${yG}Ready`,
          locked: `${yG}Locked`
        };
        let VG = null;
        const pG = bG({
          onPhase: (GG, bG) => {
            const ZG = SG.current;
            if (null !== ZG) {
              for (const [bG, wG] of Object.entries(YG)) ZG.classList.toggle(wG, bG === GG);
              if ("charging" === GG) VG = LG.current.animate([{
                strokeDashoffset: 1
              }, {
                strokeDashoffset: 0
              }], {
                delay: 400,
                duration: 600,
                fill: "forwards"
              });
              else if ("idle" === GG) {
                var yG;
                null === (yG = VG) || void 0 === yG || yG.cancel(), VG = null
              }
              var kG, UG;
              if ("armed" === GG && "charging" === bG && wG.current.onArmed(), "ready" === GG && Lb.i.play("lockReady"), "locked" === GG) Lb.i.play("lockLocked"), null === (kG = (UG = wG.current).onLocked) || void 0 === kG || kG.call(UG);
              "locked" === bG && wG.current.onUnlocked()
            }
          }
        });
        ZG.current = pG;
        const fG = () => {
            pG.suspend()
          },
          QG = () => {
            "hidden" === document.visibilityState && fG()
          },
          KG = () => {
            UG ? pG.suspend() : pG.suspendArming()
          },
          hG = (0, Vb.p)((GG => {
            let {
              keepsMovement: bG
            } = GG;
            bG && kG ? pG.suspendArming() : fG()
          }));
        return document.addEventListener("visibilitychange", QG), window.addEventListener("blur", fG), window.addEventListener("resize", KG), () => {
          hG(), document.removeEventListener("visibilitychange", QG), window.removeEventListener("blur", fG), window.removeEventListener("resize", KG), pG.cancel(), ZG.current = null
        }
      }), [GG]), (0, iG.b)("localPlayerAliveSet", (() => {
        var GG;
        null === (GG = ZG.current) || void 0 === GG || GG.suspend()
      })), ZG
    }
    const fb = "data-joystick-tap";

    function Qb(GG) {
      var bG, ZG;
      const wG = null === (bG = (ZG = GG).closest) || void 0 === bG ? void 0 : bG.call(ZG, `[${fb}]`);
      return wG instanceof HTMLElement ? wG : null
    }
    class Kb {
      constructor() {
        this.tap = null
      }
      get touchId() {
        var GG, bG;
        return null !== (GG = null === (bG = this.tap) || void 0 === bG ? void 0 : bG.id) && void 0 !== GG ? GG : null
      }
      land(GG, bG) {
        null === this.tap && (this.tap = {
          key: GG,
          id: bG.identifier,
          x: bG.clientX,
          y: bG.clientY
        }, (0, Gb.e)(GG, !0))
      }
      slidFrom(GG) {
        const bG = this.tap,
          ZG = bG ? GG.find((GG => GG.identifier === bG.id)) : void 0;
        return !ZG || Math.hypot(ZG.clientX - bG.x, ZG.clientY - bG.y) <= 12 ? null : (this.end(!1), {
          identifier: bG.id,
          clientX: bG.x,
          clientY: bG.y
        })
      }
      end(GG) {
        const bG = this.tap;
        bG && (this.tap = null, (0, Gb.e)(bG.key, !1), GG && bG.key.click())
      }
    }
    var hb = ZG(2441),
      db = ZG(2449),
      Jb = ZG(1081),
      rb = ZG(3395),
      zb = ZG(2465);

    function Eb(GG, bG, ZG) {
      const wG = function(GG, bG, ZG) {
        const wG = ZG.map((ZG => ({
            left: Math.max(0, ZG.left),
            top: Math.max(0, ZG.top),
            right: Math.min(GG, ZG.right),
            bottom: Math.min(bG, ZG.bottom)
          }))).filter((GG => GG.right > GG.left && GG.bottom > GG.top)),
          SG = [...new Set([0, bG, ...wG.flatMap((GG => [GG.top, GG.bottom]))])].sort(((GG, bG) => GG - bG)),
          LG = [];
        for (let yG = 0; yG < SG.length - 1; yG++) {
          const bG = SG[yG],
            ZG = SG[yG + 1],
            kG = wG.filter((GG => GG.top <= bG && GG.bottom >= ZG)).map((GG => [GG.left, GG.right])).sort(((GG, bG) => GG[0] - bG[0]));
          let UG = 0;
          for (const [GG, wG] of kG) GG > UG && LG.push({
            left: UG,
            top: bG,
            right: GG,
            bottom: ZG
          }), UG = Math.max(UG, wG);
          UG < GG && LG.push({
            left: UG,
            top: bG,
            right: GG,
            bottom: ZG
          })
        }
        return LG
      }(GG, bG, ZG);
      if (0 === wG.length) return 'path("M0 0Z")';
      if (1 === wG.length && 0 === wG[0].left && 0 === wG[0].top && wG[0].right === GG && wG[0].bottom === bG) return "";
      const SG = GG => Math.round(10 * GG) / 10;
      return `path("${wG.map((GG=>`M${SG(GG.left)} ${SG(GG.top)}H${SG(GG.right)}V${SG(GG.bottom)}H${SG(GG.left)}Z`)).join("")}")`
    }

    function ob(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16;
      const SG = [],
        LG = 2 * ZG / wG;
      for (let yG = 0; yG < wG; yG++) {
        const wG = bG - ZG + yG * LG,
          kG = wG + LG,
          UG = Math.min(Math.max(bG, wG), kG) - bG,
          YG = Math.sqrt(Math.max(0, ZG * ZG - UG * UG));
        SG.push({
          left: GG - YG,
          top: wG,
          right: GG + YG,
          bottom: kG
        })
      }
      return SG
    }
    var Xb = ZG(8942),
      ub = ZG(36917);

    function ib(GG) {
      const bG = GG.getBoundingClientRect(),
        ZG = {
          left: bG.left,
          top: bG.top,
          right: bG.right,
          bottom: bG.bottom
        },
        wG = (0, xG.g)(GG);
      if (wG.whole) return [ZG];
      const SG = function(GG) {
          const bG = GG.right - GG.left,
            ZG = GG.bottom - GG.top,
            wG = Math.min(bG, ZG) / 2,
            SG = (GG.left + GG.right) / 2,
            LG = (GG.top + GG.bottom) / 2;
          return bG >= ZG ? [{
            left: GG.left + wG,
            top: GG.top,
            right: GG.right - wG,
            bottom: GG.bottom
          }, ...ob(GG.left + wG, LG, wG), ...ob(GG.right - wG, LG, wG)] : [{
            left: GG.left,
            top: GG.top + wG,
            right: GG.right,
            bottom: GG.bottom - wG
          }, ...ob(SG, GG.top + wG, wG), ...ob(SG, GG.bottom - wG, wG)]
        }(ZG),
        LG = wG.keyBox;
      if (LG) {
        const GG = (ZG.left + ZG.right) / 2,
          bG = (ZG.top + ZG.bottom) / 2;
        SG.push({
          left: GG - LG.width / 2,
          top: bG - LG.height / 2,
          right: GG + LG.width / 2,
          bottom: bG + LG.height / 2
        })
      }
      return SG
    }

    function Cb(GG) {
      const bG = GG.getBoundingClientRect();
      return 0 === bG.width && 0 === bG.height || "visible" !== getComputedStyle(GG).visibility ? [] : [(0, Xb.l)(bG, 44)]
    }

    function Wb(GG, bG) {
      (0, SG.useEffect)((() => {
        const ZG = GG.current;
        if (!bG || !ZG) return;
        const wG = () => {
          const GG = Array.from(document.querySelectorAll(".TouchComponentsButtons .TouchKeyHit, .TouchInteractHit")),
            bG = GG.find((GG => GG.classList.contains("TouchInteractHit")));
          bG !== SG && (SG && LG.unobserve(SG), SG = bG, bG && LG.observe(bG));
          const wG = Array.from(document.querySelectorAll(zb.c)),
            yG = [...GG.flatMap((GG => ib(GG))), ...wG.flatMap(Cb)],
            kG = function(GG, bG) {
              const ZG = bG.map((bG => ({
                left: bG.left - GG.left,
                top: bG.top - GG.top,
                right: bG.right - GG.left,
                bottom: bG.bottom - GG.top
              })));
              return Eb(Math.ceil(GG.width), Math.ceil(GG.height), ZG)
            }(ZG.getBoundingClientRect(), yG);
          ZG.style.clipPath !== kG && (ZG.style.clipPath = kG)
        };
        let SG;
        const LG = new ResizeObserver((() => {
          wG()
        }));
        wG(), LG.observe(ZG);
        const yG = ZG.closest(".InGameUi"),
          kG = new MutationObserver(wG);
        yG && kG.observe(yG, {
          attributes: !0,
          attributeFilter: ["class", ub.g]
        });
        const UG = [(0, oG.p)(rb.e, wG), (0, oG.p)(zb.w, wG), (0, oG.p)(zb.e, wG)];
        return () => {
          LG.disconnect(), kG.disconnect();
          for (const GG of UG) GG();
          ZG.style.clipPath = ""
        }
      }), [GG, bG])
    }
    var mb = ZG(4424);

    function Ib(GG) {
      var bG;
      let {
        onMove: ZG,
        mode: wG,
        speedCurve: LG,
        autorun: yG = !1,
        keys: kG
      } = GG;
      const UG = (0, SG.useRef)(null),
        YG = (0, SG.useRef)(null),
        pG = (0, SG.useRef)(null),
        fG = (0, SG.useRef)(null),
        KG = (0, SG.useRef)(null),
        hG = (0, SG.useRef)(null),
        dG = (0, SG.useRef)(new Kb).current,
        JG = (0, SG.useRef)(null),
        rG = (0, SG.useRef)(null),
        zG = (0, SG.useRef)(null),
        EG = (0, SG.useRef)(!1),
        oG = (0, SG.useRef)({
          clientX: 0,
          clientY: 0
        }),
        {
          t: XG
        } = (0, vG.w)(),
        uG = (0, mb.n)(wG),
        iG = (0, CG.o)(["notchSize"]).notchSize,
        WG = iG.left,
        mG = (0, SG.useRef)(16),
        IG = (0, db.d)(),
        [FG, aG, cG] = "pinned" === wG ? hb.q : null !== (bG = IG.hudElements.joystick) && void 0 !== bG ? bG : hb.q,
        lG = "pinned" === wG ? null : IG.hudSafe,
        jG = Math.max(mb.h, mb.j * cG);
      Wb(YG, "pinned" !== wG);
      const PG = function(GG, bG, ZG, wG, LG) {
        const yG = (0, SG.useRef)(null),
          kG = () => {
            clearInterval(yG.current), yG.current = null
          },
          UG = pb(GG, {
            create: GG => new Yb(GG),
            elementRef: bG,
            ringRef: ZG,
            classPrefix: "Autorun",
            keptBehindMovementPanels: !0,
            resizeEnds: !0,
            onArmed: LG,
            onLocked: () => {
              yG.current = setInterval((() => {
                QG.gameBridge.lookup("dropAhead", null) && (Lb.i.play("autorunLedgeStop"), UG.current.cancel())
              }), 100)
            },
            onUnlocked: () => {
              kG(), wG()
            }
          });
        return (0, SG.useEffect)((() => kG), []), UG
      }(yG, pG, JG, (() => {
        RG(), eG()
      }), (() => {
        MG(), null === zG.current && PG.current.suspend()
      }));

      function MG() {
        const GG = pG.current.getBoundingClientRect();
        zG.current = Zb(rG.current, GG, 80, wb(`.TouchInventoryKey, .TouchSprintKey, ${zb.c}`)), EG.current = null !== zG.current && Sb(oG.current, zG.current)
      }

      function sG() {
        const {
          innerWidth: GG,
          innerHeight: bG
        } = window, ZG = (0, zb.N)(lG, GG, bG, (0, zb.Q)(iG, GG, bG), mG.current);
        return {
          left: ZG[3],
          bottom: ZG[2]
        }
      }

      function qG(GG) {
        pG.current.style.transform = `translate(${GG.x-jG}px, ${GG.y-jG}px)`
      }

      function nG(GG) {
        const bG = pG.current;
        bG.classList.add("Resting"), bG.classList.toggle("Returning", GG), bG.style.display = "fixed_hidden" === wG ? "none" : "block", qG(function() {
          const {
            innerWidth: GG,
            innerHeight: bG
          } = window, ZG = sG(), wG = WG * GG / 100 + ZG.left, SG = UG.current.offsetHeight || bG, LG = ((0, Jb.b)(GG, bG) ? mb.f : mb.c) + ZG.bottom;
          return {
            x: Math.min(GG - jG, Math.max(jG, wG + mb.g + FG * GG)),
            y: Math.min(SG - jG, Math.max(jG, SG - LG + aG * SG))
          }
        }())
      }
      const gG = (0, SG.useRef)({
        restFixed: nG,
        release: TG
      });

      function eG() {
        uG ? nG("fixed_shown" === wG) : "floating" === wG && (pG.current.style.display = "none"), ZG({
          x: 0,
          y: 0
        })
      }

      function RG() {
        hG.current = null, KG.current = null, fG.current.style.transform = "translate(-50%, -50%)"
      }

      function TG(GG) {
        RG();
        const bG = PG.current;
        GG && null !== bG && void 0 !== bG && bG.lift() ? ZG({
          x: 0,
          y: -bG.lockedSpeed
        }) : (null === bG || void 0 === bG || bG.cancel(), eG())
      }

      function HG(GG) {
        var bG;
        if (null === (bG = PG.current) || void 0 === bG || bG.startTouch(), "pinned" === wG) {
          const GG = pG.current.getBoundingClientRect();
          KG.current = {
            x: GG.left + GG.width / 2,
            y: GG.top + GG.height / 2
          }
        } else {
          KG.current = {
            x: GG.clientX,
            y: GG.clientY
          }, pG.current.classList.remove("Resting", "Returning"), pG.current.style.display = "block";
          const bG = UG.current.getBoundingClientRect();
          qG({
            x: GG.clientX - bG.left,
            y: GG.clientY - bG.top
          }), yG && (oG.current = {
            clientX: GG.clientX,
            clientY: GG.clientY
          }, MG())
        }
      }

      function tG(GG) {
        const bG = dG.slidFrom(Array.from(GG.touches));
        bG && null === hG.current && (hG.current = bG.identifier, HG(bG));
        const wG = Array.from(GG.touches).find((GG => GG.identifier === hG.current));
        if (null === KG.current || null === hG.current || (0, bb.L)(wG)) return;
        const SG = PG.current,
          yG = wG.clientX - KG.current.x,
          kG = wG.clientY - KG.current.y,
          UG = Math.hypot(yG, kG),
          YG = UG > 0 ? Math.min(1, jG / UG) : 0,
          VG = yG * YG,
          pG = kG * YG,
          QG = Math.hypot(VG, pG) / jG,
          JG = LG && QG > 0 ? LG(QG) / QG : 1;
        fG.current.style.transform = `translate(calc(-50% + ${VG}px), calc(-50% + ${pG}px))`;
        const rG = VG / jG,
          XG = pG / jG;
        if (ZG({
            x: rG * JG,
            y: XG * JG
          }), null !== SG && null !== zG.current) {
          SG.move(rG, XG, QG * JG), oG.current = {
            clientX: wG.clientX,
            clientY: wG.clientY
          };
          const GG = EG.current;
          EG.current = Sb(wG, zG.current), EG.current !== GG && SG.target(EG.current)
        }
      }
      return gG.current = {
        restFixed: nG,
        release: TG
      }, (0, SG.useLayoutEffect)((() => {
        if (!uG) return;
        const GG = () => {
          mG.current = (0, zb.T)(document)
        };
        GG(), null === hG.current && gG.current.restFixed(!1);
        const bG = new ResizeObserver((() => {
          GG(), null === hG.current && gG.current.restFixed(!1)
        }));
        bG.observe(UG.current);
        const ZG = pG.current;
        return () => {
          bG.disconnect(), ZG.classList.remove("Resting", "Returning"), null === hG.current && (ZG.style.display = "", ZG.style.transform = "")
        }
      }), [uG, wG, iG, FG, aG, jG, lG]), (0, SG.useEffect)((() => {
        const GG = (GG, bG) => void 0 === bG || null === bG || Array.from(GG.touches).some((GG => GG.identifier === bG)) ? null : {
            lifted: "touchend" === GG.type && Array.from(GG.changedTouches).some((GG => GG.identifier === bG))
          },
          bG = bG => {
            const ZG = GG(bG, hG.current);
            ZG && gG.current.release(ZG.lifted);
            const wG = GG(bG, dG.touchId);
            wG && dG.end(wG.lifted)
          },
          ZG = () => {
            null !== hG.current && gG.current.release(!1), dG.end(!1)
          },
          wG = () => {
            "hidden" === document.visibilityState && ZG()
          };
        document.addEventListener("touchstart", bG, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchmove", bG, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchend", bG, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchcancel", bG, {
          capture: !0,
          passive: !0
        }), window.addEventListener("blur", ZG), document.addEventListener("visibilitychange", wG);
        const SG = (0, Vb.p)((GG => {
          let {
            keepsMovement: bG
          } = GG;
          bG || ZG()
        }));
        return () => {
          SG(), document.removeEventListener("touchstart", bG, {
            capture: !0
          }), document.removeEventListener("touchmove", bG, {
            capture: !0
          }), document.removeEventListener("touchend", bG, {
            capture: !0
          }), document.removeEventListener("touchcancel", bG, {
            capture: !0
          }), window.removeEventListener("blur", ZG), document.removeEventListener("visibilitychange", wG)
        }
      }), []), (0, SG.useEffect)((() => {
        const GG = UG.current,
          bG = GG => {
            GG.preventDefault()
          };
        return GG.addEventListener("touchstart", bG, {
          passive: !1
        }), () => {
          GG.removeEventListener("touchstart", bG)
        }
      }), []), (0, VG.jsxs)("div", {
        ref: UG,
        className: "JoystickZone",
        style: uG && (FG > 0 || cG > 1 || sG().left > 0) ? {
          width: `max(35vw, calc(${WG+100*FG}vw + ${sG().left+mb.g+jG+24}px))`
        } : void 0,
        onTouchStart: function(GG) {
          const bG = Array.from(GG.changedTouches).filter((GG => {
            var bG;
            return null === (bG = UG.current) || void 0 === bG ? void 0 : bG.contains(GG.target)
          }));
          for (const wG of bG) {
            const GG = Qb(wG.target);
            GG && dG.land(GG, wG)
          }
          const ZG = bG.find((GG => null === Qb(GG.target)));
          ZG && null === hG.current && (hG.current = ZG.identifier, HG(ZG), tG(GG))
        },
        onTouchMove: tG,
        children: [(0, VG.jsx)("div", {
          ref: YG,
          className: "JoystickTouchLayer"
        }), (0, VG.jsxs)("div", {
          ref: pG,
          className: "Joystick",
          style: {
            width: 2 * jG + "px",
            height: 2 * jG + "px",
            transform: "pinned" === wG ? "translate(4vw, calc(50vh - 50%))" : void 0
          },
          children: [(0, VG.jsx)("div", {
            className: "JoystickBase",
            style: {
              width: 2 * jG + "px",
              height: 2 * jG + "px"
            }
          }), yG && (0, VG.jsxs)(VG.Fragment, {
            children: [(0, VG.jsx)("svg", {
              className: "AutorunRing",
              viewBox: "0 0 100 100",
              children: (0, VG.jsx)("circle", {
                ref: JG,
                cx: "50",
                cy: "50",
                r: "48",
                pathLength: 1
              })
            }), (0, VG.jsxs)("div", {
              ref: rG,
              className: "AutorunTarget",
              children: [(0, VG.jsx)(AG.c, {
                name: "lock"
              }), XG("settingsMenu:autoRun")]
            })]
          }), (0, VG.jsx)("div", {
            ref: fG,
            className: "JoystickKnob",
            style: {
              width: `${jG}px`,
              height: `${jG}px`
            }
          })]
        }), kG]
      })
    }
    var Fb = ZG(283);
    const vb = {
        deadZone: .1,
        creepEnd: .35,
        fullSpeedAt: .85,
        creepMin: .06,
        creepMax: .22
      },
      ab = {
        short_creep: {
          ...vb,
          creepEnd: .25,
          fullSpeedAt: .75
        },
        long_creep: {
          ...vb,
          creepEnd: .45,
          fullSpeedAt: .95
        },
        small_dead_zone: {
          ...vb,
          deadZone: .05
        },
        control: vb
      };

    function cb(GG) {
      return function(GG, bG) {
        const {
          deadZone: ZG,
          creepEnd: wG,
          fullSpeedAt: SG,
          creepMin: LG,
          creepMax: yG
        } = GG;
        if (bG < ZG) return 0;
        if (bG < wG) {
          const GG = (bG - ZG) / (wG - ZG);
          return LG + (yG - LG) * GG * GG
        }
        return bG < SG ? yG + (1 - yG) * (bG - wG) / (SG - wG) : 1
      }(ab[Fb.d.mobile_walk_curve_v1], GG)
    }
    var lb = ZG(8944);

    function jb(GG, bG) {
      const ZG = (0, SG.useRef)(null);
      return (0, SG.useLayoutEffect)((() => (xG.i.set(GG, ZG.current, bG), () => {
        xG.i.set(GG, null)
      })), [GG, bG]), ZG
    }
    const Pb = "C",
      Mb = "J",
      Ab = "U",
      sb = "A",
      qb = "G",
      nb = "X",
      gb = (0, SG.forwardRef)((function(GG, bG) {
        let {
          slot: ZG,
          canvasZone: wG = !1,
          lit: LG = !1,
          label: kG,
          className: UG,
          children: YG,
          ...pG
        } = GG;
        return (0, SG.useEffect)((() => (oG.l.xh(rb.e), () => {
          oG.l.xh(rb.e)
        })), []), (0, VG.jsx)("div", {
          ref: bG,
          className: yG()("TouchKeyHit", `TouchSlot${ZG}`, UG, {
            CanvasZone: wG
          }),
          ...pG,
          children: (0, VG.jsxs)("div", {
            className: yG()("TouchKey", {
              Lit: LG,
              Labelled: void 0 !== kG
            }),
            children: [YG, void 0 !== kG && (0, VG.jsx)("span", {
              className: "TouchKeyLabel",
              children: kG
            })]
          })
        })
      }));

    function eb(GG, bG) {
      (0, SG.useEffect)((() => () => {
        bG.current && (bG.current = !1, (0, OG.C)(GG, !1, {
          isTrusted: !0,
          timeStamp: performance.now()
        }))
      }), [])
    }

    function Rb(GG, bG) {
      const ZG = (0, lb.h)(bG);
      return GG.filter((GG => null !== GG)).slice(0, ZG.length).map(((GG, bG) => {
        const wG = ZG[bG];
        return (0, VG.jsx)(SG.Fragment, {
          children: GG.render(wG)
        }, `${GG.id}:${wG}`)
      }))
    }
    var Tb = ZG(36930);
    class Hb extends yb {
      constructor() {
        super(...arguments), this.start = {
          x: 0,
          y: 0
        }, this.moved = !1
      }
      press(GG, bG) {
        this.start = {
          x: GG,
          y: bG
        }, this.moved = !1, this.startTouch(), this.hold(!0, !1)
      }
      move(GG, bG, ZG) {
        const wG = Math.hypot(GG - this.start.x, bG - this.start.y) <= 12;
        this.moved ||= !wG;
        const SG = null !== ZG && bG < this.start.y - 12 && Sb({
          clientX: GG,
          clientY: bG
        }, ZG);
        this.hold(!this.moved, wG || SG)
      }
    }
    const tb = new Set;

    function Db(GG) {
      const bG = new Set(Array.from(GG.touches, (GG => GG.identifier)));
      for (const ZG of tb) {
        for (const GG of ZG.ids) bG.has(GG) || ZG.ids.delete(GG);
        if (0 === ZG.ids.size) {
          tb.delete(ZG);
          ZG.pressesOnPointerDown && "touchstart" === GG.type && Array.from(GG.changedTouches).some((GG => GG.target instanceof Node && ZG.element.contains(GG.target))) || ZG.release()
        }
      }
    }
    if ("undefined" !== typeof window)
      for (const ey of ["touchstart", "touchmove"]) window.addEventListener(ey, Db, {
        capture: !0,
        passive: !0
      });

    function Nb(GG) {
      let {
        pressesOnPointerDown: bG = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const ZG = (0, SG.useRef)(GG);
      ZG.current = GG;
      const wG = (0, SG.useRef)({
        ids: new Set,
        element: null,
        pressesOnPointerDown: bG,
        release: () => {
          ZG.current()
        }
      });
      (0, SG.useEffect)((() => {
        const GG = wG.current;
        return () => {
          tb.delete(GG), GG.ids.clear()
        }
      }), []);
      const LG = GG => {
        const bG = wG.current;
        for (const ZG of Array.from(GG.changedTouches)) bG.ids.delete(ZG.identifier);
        0 === bG.ids.size && tb.delete(bG)
      };
      return {
        onTouchStart: GG => {
          const bG = wG.current;
          bG.element = GG.currentTarget;
          for (const ZG of Array.from(GG.changedTouches)) ZG.target instanceof Node && GG.currentTarget.contains(ZG.target) && bG.ids.add(ZG.identifier);
          bG.ids.size > 0 && tb.add(bG)
        },
        onTouchEnd: LG,
        onTouchCancel: LG
      }
    }

    function Ob(GG, bG) {
      return null === bG ? null : (0, Tb.b)(GG.nativeEvent.changedTouches, bG.id)
    }

    function xb(GG) {
      let {
        lockable: bG
      } = GG;
      const {
        t: ZG
      } = (0, vG.w)(), wG = "round" === (0, hb.ib)().hudShape, LG = (0, SG.useRef)(!1);
      eb(NG.r.Jump, LG);
      const yG = (0, SG.useRef)(null),
        kG = (0, SG.useRef)(null),
        UG = (0, SG.useRef)(null),
        YG = (0, SG.useRef)(null),
        pG = (0, SG.useRef)(null),
        fG = (0, SG.useRef)(null),
        QG = (0, SG.useRef)(!1),
        KG = (GG, bG) => {
          LG.current = GG, (0, OG.C)(NG.r.Jump, GG, bG)
        },
        hG = function() {
          let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            isTrusted: !0,
            timeStamp: performance.now()
          };
          LG.current && (yG.current && (0, Gb.e)(yG.current, !1), KG(!1, GG))
        },
        dG = pb(bG, {
          create: GG => new Hb(GG),
          elementRef: yG,
          ringRef: kG,
          classPrefix: "JumpLock",
          keptBehindMovementPanels: !1,
          resizeEnds: !1,
          onArmed: () => {
            const GG = yG.current.getBoundingClientRect(),
              bG = UG.current.parentElement,
              ZG = bG.getBoundingClientRect(),
              wG = {
                left: ZG.left + bG.clientLeft,
                top: ZG.top + bG.clientTop,
                right: ZG.right - bG.clientLeft,
                bottom: ZG.bottom - bG.clientTop
              };
            if (pG.current = Zb(UG.current, wG, 16, wb(`.TouchKeyHit:not(.JumpKey) > .TouchKey, .TouchInventoryKey, .TouchSprintKey, ${zb.c}`)), null === pG.current) return void dG.current.suspend();
            const SG = pG.current;
            fG.current = {
              left: Math.min(GG.left, SG.left),
              top: SG.top,
              right: Math.max(GG.right, SG.right),
              bottom: GG.bottom
            }, QG.current = null !== YG.current && Sb({
              clientX: YG.current.x,
              clientY: YG.current.y
            }, SG)
          },
          onUnlocked: () => {
            null === YG.current && hG()
          }
        }),
        JG = GG => {
          var bG;
          YG.current = null, null === (bG = dG.current) || void 0 === bG || bG.cancel(), hG(GG)
        },
        rG = Nb((() => {
          JG()
        })),
        zG = GG => {
          const bG = YG.current;
          var ZG;
          return null === bG ? null !== (ZG = dG.current) && void 0 !== ZG && ZG.locked ? null : "lifted" : Ob(GG, bG) ? "lifted" : (0, Tb.f)(GG.nativeEvent.touches, bG.id) ? null : "dropped"
        };
      return (0, VG.jsxs)(gb, {
        ref: yG,
        slot: Mb,
        className: "JumpKey",
        onTouchStart: GG => {
          rG.onTouchStart(GG), (0, Gb.e)(GG.currentTarget, !0), null === YG.current || (0, Tb.f)(GG.nativeEvent.touches, YG.current.id) || JG();
          const bG = GG.changedTouches[0];
          var ZG;
          null === YG.current && bG && (YG.current = {
            id: bG.identifier,
            x: bG.clientX,
            y: bG.clientY
          }, null === (ZG = dG.current) || void 0 === ZG || ZG.press(bG.clientX, bG.clientY));
          LG.current || KG(!0, GG.nativeEvent)
        },
        onTouchMove: GG => {
          const bG = YG.current,
            ZG = Ob(GG, bG);
          if (!ZG) return;
          const wG = dG.current;
          if (null === wG || void 0 === wG || wG.move(ZG.clientX, ZG.clientY, fG.current), null !== wG && void 0 !== wG && wG.offered) {
            const GG = Sb(ZG, pG.current);
            GG !== QG.current && (QG.current = GG, wG.target(GG))
          }
          bG.x = ZG.clientX, bG.y = ZG.clientY
        },
        onTouchEnd: GG => {
          var bG;
          rG.onTouchEnd(GG);
          const ZG = zG(GG);
          null !== ZG && ("dropped" !== ZG ? (YG.current = null, null !== (bG = dG.current) && void 0 !== bG && bG.lift() ? (0, Gb.e)(GG.currentTarget, !1) : hG(GG.nativeEvent)) : JG(GG.nativeEvent))
        },
        onTouchCancel: GG => {
          rG.onTouchCancel(GG), null !== zG(GG) && JG(GG.nativeEvent)
        },
        children: [(0, VG.jsx)(AG.c, {
          name: "arrow-up-from-line"
        }), bG && (0, VG.jsxs)(VG.Fragment, {
          children: [(0, VG.jsx)("span", {
            className: "JumpLockBadge",
            children: (0, VG.jsx)(AG.c, {
              name: "lock"
            })
          }), (0, VG.jsx)("svg", {
            className: "JumpLockRing",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            children: (0, VG.jsx)("rect", {
              ref: kG,
              x: "2",
              y: "2",
              width: "96",
              height: "96",
              rx: wG ? 48 : 0,
              pathLength: 1
            })
          }), (0, VG.jsxs)("div", {
            ref: UG,
            className: "JumpLockTarget",
            children: [(0, VG.jsx)(AG.c, {
              name: "lock"
            }), ZG("settingsMenu:jumpLock")]
          })]
        })]
      })
    }
    var Bb = ZG(36940);

    function GZ(GG) {
      let {
        atHome: bG
      } = GG;
      const {
        t: ZG
      } = (0, vG.w)(), wG = (LG = (0, EG.i)("runningSpeed"), kG = (0, EG.i)("walkingSpeed"), null !== LG && null !== kG && LG > kG);
      var LG, kG;
      const YG = (0, hb.v)((0, db.d)().hudElements, "sprint"),
        pG = (0, UG.j)(Bb.d, (0, Bb.f)());
      return (0, SG.useEffect)((() => {
        wG && !YG || (0, Bb.h)(!0)
      }), [wG, YG]), (0, SG.useEffect)((() => () => {
        (0, Bb.h)(!0)
      }), []), wG ? (0, VG.jsx)("div", {
        className: yG()("TouchSprintHit", {
          AtHome: bG
        }),
        role: "switch",
        "aria-checked": pG,
        "aria-label": ZG("touchKeys:sprint"),
        [fb]: "",
        onClick: () => {
          (0, Bb.h)(!(0, Bb.f)())
        },
        children: (0, VG.jsx)("div", {
          className: yG()("TouchKey TouchSprintKey", {
            Lit: pG
          }),
          children: (0, VG.jsx)(AG.c, {
            name: pG ? "person-running" : "person-walking"
          })
        })
      }) : null
    }
    const bZ = new WeakMap;
    class ZZ {
      constructor(GG) {
        this.zones = GG, this.followed = new Map, this.onStart = GG => {
          if (this.releaseMissing(GG.touches), GG.target instanceof HTMLCanvasElement)
            for (let ZG = 0; ZG < GG.changedTouches.length; ZG++) {
              var bG;
              const {
                identifier: wG,
                clientX: SG,
                clientY: LG
              } = GG.changedTouches[ZG];
              this.release(wG);
              const yG = this.zones.hitZone(SG, LG);
              if (!yG) continue;
              const {
                key: kG
              } = yG;
              null === (bG = bZ.get(kG)) || void 0 === bG || bG.cancel();
              const UG = {
                hit: yG.element,
                key: kG,
                x: yG.x,
                y: yG.y,
                reach: .6 * yG.radius
              };
              this.followed.set(wG, UG), (0, Gb.e)(yG.element, !0), wZ(UG, SG, LG)
            }
        }, this.onMove = GG => {
          this.releaseMissing(GG.touches);
          for (let bG = 0; bG < GG.changedTouches.length; bG++) {
            const {
              identifier: ZG,
              clientX: wG,
              clientY: SG
            } = GG.changedTouches[bG], LG = this.followed.get(ZG);
            LG && wZ(LG, wG, SG)
          }
        }, this.onEnd = GG => {
          for (let bG = 0; bG < GG.changedTouches.length; bG++) this.release(GG.changedTouches[bG].identifier)
        }, this.onVisibilityChange = () => {
          document.hidden && this.releaseAll()
        }
      }
      start() {
        const GG = {
          passive: !0
        };
        return document.addEventListener("touchstart", this.onStart, GG), document.addEventListener("touchmove", this.onMove, GG), document.addEventListener("touchend", this.onEnd, GG), document.addEventListener("touchcancel", this.onEnd, GG), document.addEventListener("visibilitychange", this.onVisibilityChange), () => {
          document.removeEventListener("touchstart", this.onStart), document.removeEventListener("touchmove", this.onMove), document.removeEventListener("touchend", this.onEnd), document.removeEventListener("touchcancel", this.onEnd), document.removeEventListener("visibilitychange", this.onVisibilityChange), this.releaseAll()
        }
      }
      releaseMissing(GG) {
        for (const bG of [...this.followed.keys()])(0, Tb.f)(GG, bG) || this.release(bG)
      }
      releaseAll() {
        for (const GG of [...this.followed.keys()]) this.release(GG)
      }
      release(GG) {
        const bG = this.followed.get(GG);
        if (!bG) return;
        this.followed.delete(GG);
        for (const SG of this.followed.values())
          if (SG.key === bG.key) return;
        (0, Gb.e)(bG.hit, !1);
        const {
          key: ZG
        } = bG, wG = ZG.style.translate;
        ZG.style.translate = "", wG && bZ.set(ZG, ZG.animate({
          translate: [wG, "0 0"]
        }, {
          duration: 150,
          easing: "ease-out"
        }))
      }
    }

    function wZ(GG, bG, ZG) {
      let {
        key: wG,
        x: SG,
        y: LG,
        reach: yG
      } = GG;
      const kG = bG - SG,
        UG = ZG - LG,
        YG = Math.min(1, yG / (Math.hypot(kG, UG) || 1));
      wG.style.translate = `${kG*YG}px ${UG*YG}px`
    }
    var SZ = ZG(1415),
      LZ = ZG(80),
      yZ = ZG(1311);
    const kZ = "threeFingerHintShown",
      UZ = {
        android: "touchHint:threeFingerAndroid",
        ios: "touchHint:threeFingerIos"
      };
    let YZ = 0,
      VZ = !1;

    function pZ() {
      const GG = new Set;
      let bG = -1 / 0,
        ZG = -1 / 0,
        wG = null,
        SG = 0;
      const LG = () => {
          GG.clear()
        },
        yG = LG => {
          if (LG.touches.length > 0) return;
          for (let bG = 0; bG < LG.changedTouches.length; bG++) GG.add(LG.changedTouches[bG].identifier);
          const yG = GG.size;
          if (yG < 3 || !(0, Vb.A)()) return;
          if (SG = yG, null !== wG) return;
          const kG = performance.now(),
            UG = bG >= kG - 200;
          wG = setTimeout((() => {
            if (wG = null, !(0, Vb.A)()) return;
            const GG = ZG >= kG - 200 || document.hidden;
            ! function(GG, bG) {
              var ZG;
              const wG = (0, LZ.getOperatingSystem)();
              YZ < 5 && (YZ++, (0, SZ.reportAnalyticsClick)({
                id: "touch.os_cancel",
                value: null === bG ? `${wG}:${GG}` : `${wG}:${GG}:${bG}`
              })), null === bG && (VZ || !0 === uG.h.getItem(kZ) || (VZ = !0, uG.h.setItem(kZ, !0), yZ.NotificationProvider.showAlertPopup({
                title: "touchHint:threeFingerTitle",
                subtitle: null !== (ZG = UZ[wG]) && void 0 !== ZG ? ZG : "touchHint:threeFingerOther",
                confirmText: "general:ok",
                disablePressBackgroundToClose: !0,
                unlockPointerKey: "threeFingerHint"
              })))
            }(SG, GG ? "hide" : UG ? "blur" : null)
          }), 500)
        },
        kG = () => {
          ZG = performance.now()
        },
        UG = () => {
          bG = performance.now()
        },
        YG = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("touchstart", LG, YG), document.addEventListener("touchcancel", yG, YG), document.addEventListener("visibilitychange", kG), window.addEventListener("blur", UG), window.addEventListener("resize", kG), window.addEventListener("orientationchange", kG), () => {
        document.removeEventListener("touchstart", LG, YG), document.removeEventListener("touchcancel", yG, YG), document.removeEventListener("visibilitychange", kG), window.removeEventListener("blur", UG), window.removeEventListener("resize", kG), window.removeEventListener("orientationchange", kG), null !== wG && clearTimeout(wG)
      }
    }
    const fZ = () => {
      const GG = (0, DG.j)(),
        bG = (0, mG.A)();
      return GG || bG
    };

    function QZ(GG) {
      (0, xG.l)(GG.x, GG.y)
    }
    const KZ = (0, SG.memo)((function() {
        const GG = fZ(),
          {
            joystickMode: bG,
            touchSpeedCurve: ZG,
            autorun: wG
          } = (0, CG.o)(["clientEscMenuOptions"]).clientEscMenuOptions;
        return (0, SG.useEffect)((() => ((0, BG.j)(NG.t.TouchControls, NG.t.TouchControls), () => {
          (0, BG.j)(NG.t.TouchControls, 0), (0, xG.l)(0, 0)
        })), []), (0, SG.useEffect)(pZ, []), (0, VG.jsx)("div", {
          className: yG()("TouchMovementWrapper", {
            Hidden: GG
          }),
          "data-camera-keeper": "",
          children: (0, VG.jsx)(Ib, {
            onMove: QZ,
            mode: bG,
            speedCurve: ZG ? cb : void 0,
            autorun: wG,
            keys: (0, VG.jsx)(GZ, {
              atHome: !(0, mb.n)(bG)
            })
          })
        })
      })),
      hZ = (0, SG.memo)((function() {
        const GG = fZ(),
          {
            clientEscMenuOptions: bG
          } = (0, CG.o)(["clientEscMenuOptions"]),
          ZG = bG.touchActionButtons;
        return (0, SG.useEffect)((() => new ZZ(xG.i).start()), []), (0, SG.useEffect)((() => {
          oG.l.xh(rb.e)
        }), [GG]), (0, VG.jsxs)("div", {
          className: yG()("TouchComponentsButtons", {
            Hidden: GG
          }),
          "data-camera-keeper": "",
          children: [(0, VG.jsx)(xb, {
            lockable: bG.jumpLock && !GG
          }), (0, VG.jsx)(mZ, {
            hidden: GG,
            actionButtons: ZG
          }), (0, VG.jsx)(JZ, {})]
        })
      }));

    function dZ(GG) {
      const bG = bG => ZG => {
        (0, Gb.e)(ZG.currentTarget, bG), GG(bG, ZG.nativeEvent)
      };
      return {
        onPointerDown: bG(!0),
        onPointerUp: bG(!1),
        onPointerCancel: bG(!1)
      }
    }

    function JZ() {
      const GG = (0, EG.i)("canCrouch"),
        bG = (0, iG.f)("crouching"),
        ZG = (0, SG.useRef)(!1);
      eb(NG.r.Crouch, ZG);
      const wG = (GG, bG) => {
          ZG.current = GG, (0, OG.C)(NG.r.Crouch, GG, bG)
        },
        LG = (0, SG.useRef)(null),
        yG = () => {
          ZG.current && (LG.current && (0, Gb.e)(LG.current, !1), wG(!1, {
            isTrusted: !0,
            timeStamp: performance.now()
          }))
        },
        kG = Nb(yG);
      return (0, SG.useEffect)((() => {
        !1 === GG && yG()
      }), [GG]), !1 === GG ? null : (0, VG.jsx)(gb, {
        ref: LG,
        slot: Pb,
        className: "CrouchKey",
        lit: bG,
        ...kG,
        ...dZ(wG),
        children: (0, VG.jsx)(AG.c, {
          name: "arrow-down-to-line"
        })
      })
    }
    const rZ = [{
        icon: "arrows-rotate"
      }],
      zZ = [{
        icon: "Arrow"
      }],
      EZ = [{
        icon: "crosshairs"
      }],
      oZ = [{
        icon: "swords"
      }],
      XZ = [{
        icon: "hand-back-point-up"
      }],
      uZ = [{
        icon: "Firecracker"
      }];

    function iZ(GG, bG, ZG, wG) {
      return {
        id: JSON.stringify(bG),
        render: SG => (0, VG.jsx)(IZ, {
          code: GG,
          slot: SG,
          icon: bG,
          label: wG,
          hidden: ZG
        })
      }
    }

    function CZ(GG, bG) {
      return {
        id: "fly",
        render: ZG => (0, VG.jsx)(WZ, {
          slot: ZG,
          flying: GG,
          label: bG
        })
      }
    }

    function WZ(GG) {
      let {
        slot: bG,
        flying: ZG,
        label: wG
      } = GG;
      return (0, VG.jsx)(gb, {
        slot: bG,
        className: "FlyKey",
        lit: ZG,
        label: wG,
        ...dZ(((GG, bG) => {
          (0, OG.C)(NG.r.Fly, GG, bG)
        })),
        children: (0, VG.jsx)(AG.c, {
          name: "feather-pointed"
        })
      })
    }

    function mZ(GG) {
      var bG, ZG;
      let {
        hidden: wG,
        actionButtons: SG
      } = GG;
      const {
        t: LG
      } = (0, vG.w)(), {
        gun: yG,
        aimable: kG,
        chargeName: UG
      } = (0, iG.f)("heldItemAim"), YG = (0, iG.f)("gliderBoostFuel"), {
        canFly: pG,
        flying: fG
      } = (0, iG.f)("flight"), QG = (0, EG.i)("touchscreenActionButton"), KG = yG ? rZ : QG, hG = kG ? {
        icon: zZ,
        label: LG("touchKeys:aim")
      } : null, dG = null !== UG ? {
        icon: [{
          icon: UG
        }]
      } : null, JG = null !== hG && void 0 !== hG ? hG : dG, rG = null !== (bG = null === (ZG = yG ? hG : null !== dG && void 0 !== dG ? dG : hG) || void 0 === ZG ? void 0 : ZG.icon) && void 0 !== bG ? bG : XZ, zG = [!SG && JG ? iZ(xG.e.Action2, JG.icon, wG, JG.label) : null, yG ? iZ(xG.e.Action3, EZ, wG, LG("touchKeys:scope")) : null, pG ? CZ(fG, LG("touchKeys:fly")) : null];
      return (0, VG.jsxs)(VG.Fragment, {
        children: [KG && (0, VG.jsx)(IZ, {
          code: xG.e.Action1,
          slot: qb,
          icon: KG,
          label: yG ? LG("touchKeys:reload") : void 0,
          hidden: wG
        }, JSON.stringify(KG)), SG && (0, VG.jsxs)(VG.Fragment, {
          children: [(0, VG.jsx)(IZ, {
            code: xG.e.Attack,
            slot: sb,
            icon: oZ,
            name: LG("touchKeys:attack"),
            hidden: wG
          }), (0, VG.jsx)(IZ, {
            code: xG.e.Use,
            slot: Ab,
            icon: rG,
            name: LG("touchKeys:use"),
            hidden: wG
          })]
        }), Rb(zG, SG), YG > 0 && (0, VG.jsx)(IZ, {
          code: xG.e.Boost,
          slot: nb,
          icon: uZ,
          label: LG("touchKeys:boost", {
            fuel: YG > 99 ? "99+" : YG
          }),
          hidden: wG
        })]
      })
    }

    function IZ(GG) {
      let {
        code: bG,
        slot: ZG,
        icon: wG,
        label: SG,
        name: LG,
        hidden: yG
      } = GG;
      const kG = jb(bG, yG);
      return (0, VG.jsx)(gb, {
        ref: kG,
        slot: ZG,
        className: "TouchActionKey",
        canvasZone: !0,
        label: SG,
        role: void 0 !== LG ? "img" : void 0,
        "aria-label": LG,
        children: (0, VG.jsx)(YG.c, {
          text: wG
        })
      })
    }
    var FZ = ZG(4272),
      vZ = ZG(3004),
      aZ = ZG(641);
    const cZ = (0, SG.memo)((function() {
      (0, rG.b)();
      const GG = (0, SG.useRef)([]),
        bG = (0, vZ.d)(),
        ZG = (0, SG.useRef)(0),
        wG = (0, SG.useRef)(0),
        LG = (0, SG.useRef)([]),
        yG = (0, SG.useRef)(null);

      function kG(ZG, wG, SG, LG) {
        const yG = (0, aZ.d)(),
          kG = setTimeout((() => {
            GG.current = GG.current.filter((GG => GG.id !== yG)), bG()
          }), LG);
        QG.gameBridge.send("recordFlyingMiddleText", {
          content: ZG,
          cL: wG,
          angle: SG,
          lL: LG
        }), GG.current.push({
          id: yG,
          content: ZG,
          cL: wG,
          lL: LG,
          removeTimeout: kG,
          angle: SG
        }), bG()
      }
      return (0, iG.b)("shotDamageToShow", (GG => {
        let {
          damage: bG,
          wasCrit: ZG,
          distance: wG
        } = GG;
        const SG = -Math.PI / 4 + Math.random() * Math.PI / 2;
        kG(ZG ? [{
          str: bG.toString(),
          style: {
            color: "#ff8a80",
            fontSize: "1.6em"
          }
        }] : [bG.toString()], wG, SG, 1e3)
      })), (0, UG.g)("flyingMiddleMessage", (GG => {
        let {
          content: bG,
          cL: SG,
          lL: UG
        } = GG;
        LG.current.push({
          content: bG,
          cL: SG,
          lL: UG
        });
        const YG = () => {
          const {
            content: GG,
            cL: bG,
            lL: SG
          } = LG.current.shift(), yG = function(GG) {
            const bG = -Math.PI / 4,
              ZG = Math.PI / 4,
              wG = ZG - bG,
              SG = (1 + Math.sqrt(5)) / 2,
              LG = 2 * Math.PI / (SG * SG);
            let yG = GG + LG;
            for (; yG > ZG;) yG -= wG;
            for (; yG < bG;) yG += wG;
            const kG = Math.PI / 6;
            if (Math.abs(yG - GG) < kG) {
              yG = GG + (Math.sign(yG - GG) || 1) * kG, yG > ZG && (yG = GG - kG), yG < bG && (yG = GG + kG)
            }
            return yG
          }(wG.current);
          wG.current = yG, ZG.current = Date.now(), kG(GG, bG, yG, SG)
        };
        if (!yG.current) {
          const GG = () => {
            LG.current.length > 0 && YG(), 0 === LG.current.length && (clearInterval(yG.current), yG.current = null)
          };
          yG.current = setInterval(GG, 200), ZG.current + 200 < Date.now() && GG()
        }
        for (; LG.current.length > 4;) YG()
      })), (0, UG.g)("forceFlyingMiddleMessage", (GG => {
        let {
          content: bG,
          cL: ZG,
          angle: wG,
          lL: SG
        } = GG;
        kG(bG, ZG, wG, SG)
      })), (0, SG.useEffect)((() => () => {
        clearInterval(yG.current), yG.current = null;
        for (const bG of GG.current) clearTimeout(bG.removeTimeout)
      }), []), (0, VG.jsx)("div", {
        className: "FlyingMiddleTextWrapper",
        children: GG.current.map((GG => {
          const {
            id: bG,
            content: ZG,
            cL: wG,
            lL: SG,
            angle: LG
          } = GG;
          return GG.pos || (GG.pos = function(GG, bG) {
            const ZG = 50 / (GG ** .7 * .35);
            return {
              x: ZG * Math.sin(bG),
              y: -ZG * Math.cos(bG)
            }
          }(wG, LG)), (0, VG.jsx)(lZ, {
            className: "FlyingMiddleText",
            classNames: "FlyingMiddleText",
            timeout: SG,
            enterActiveStyle: {
              transform: `translate(${GG.pos.x}vw, ${GG.pos.y}vh)`,
              transition: `transform ${SG}ms ease-out`
            },
            children: (0, VG.jsx)("div", {
              children: (0, VG.jsx)(YG.c, {
                text: ZG
              })
            })
          }, bG)
        }))
      })
    }));

    function lZ(GG) {
      let {
        children: bG,
        className: ZG,
        classNames: wG,
        timeout: LG,
        enterActiveStyle: yG
      } = GG;
      const [kG, UG] = (0, SG.useState)(!1), [YG, pG] = (0, SG.useState)(!1), fG = (0, SG.useRef)(null);
      return (0, SG.useEffect)((() => {
        UG(!0)
      }), []), (0, VG.jsx)(FZ.e, {
        className: ZG,
        classNames: wG || ZG,
        in: kG,
        timeout: LG,
        nodeRef: fG,
        onEntering: () => {
          pG(!0)
        },
        children: (0, SG.cloneElement)(bG, {
          ref: fG,
          style: YG && yG || void 0
        })
      })
    }
    var jZ = ZG(36946);

    function PZ() {
      const GG = (0, iG.f)("health");
      return (0, VG.jsxs)("div", {
        className: "BottomScreenStatBarList",
        children: [(0, VG.jsx)(jZ.b, {
          placement: "statBars"
        }), (0, VG.jsx)(MZ, {
          actualValue: GG.shield,
          maxValue: GG.maxShield,
          hideAtValue: 0,
          icon: "shield",
          className: "ShieldBar"
        }), (0, VG.jsx)(MZ, {
          actualValue: GG.health,
          maxValue: GG.maxHealth,
          icon: "heart",
          className: "HealthBar"
        })]
      })
    }

    function MZ(GG) {
      let {
        actualValue: bG,
        maxValue: ZG,
        hideAtValue: wG,
        icon: SG,
        className: LG
      } = GG;
      return (0, rG.f)(), null === bG || null === ZG || bG === wG || ZG === wG ? null : (0, VG.jsx)("div", {
        className: "BottomScreenStatBarWrapper",
        children: (0, VG.jsxs)("div", {
          className: "BottomScreenStatBarBackground",
          children: [(0, VG.jsx)("div", {
            className: `BottomScreenStatBar ${LG}`,
            style: {
              transform: `scaleX(${Math.max(bG/ZG,0)})`,
              transformOrigin: "left center"
            }
          }), (0, VG.jsxs)("div", {
            className: "BottomScreenStatBarText SmallTextBold",
            children: [(0, VG.jsx)(AG.c, {
              name: SG
            }), ` ${Math.ceil(bG)}/${ZG}`]
          })]
        })
      })
    }
    var AZ = ZG(34472),
      sZ = ZG(4549),
      qZ = ZG(1290),
      nZ = ZG(2724),
      gZ = ZG(1393),
      eZ = ZG(1275),
      RZ = ZG(3404),
      TZ = ZG(2968),
      HZ = ZG(2126),
      tZ = ZG(751),
      DZ = ZG(3458),
      NZ = ZG(116),
      OZ = ZG(1634),
      xZ = ZG(34400);

    function BZ(GG) {
      let {
        showing: bG,
        enabled: ZG,
        autoRespawn: wG
      } = GG;
      const {
        t: LG
      } = (0, vG.w)(), yG = (0, mG.w)(), {
        mobilePushNotificationsCanAsk: kG
      } = (0, CG.o)(["mobilePushNotificationsCanAsk"]), [UG, YG] = (0, SG.useState)(null), [pG, fG] = (0, SG.useState)(!1), [QG, KG] = (0, SG.useState)(null);
      bG && null === QG ? KG(yG) : bG || null === QG || KG(null);
      const hG = bG && null !== UG && !1 === QG;
      if ((0, SG.useEffect)((() => {
          if (bG) return;
          YG(null), fG(!1);
          let GG = !0;
          return (0, xZ.b)().then((bG => {
            GG && YG((() => bG))
          }), (GG => {
            console.error("Failed to tell whether to offer push notifications:", GG)
          })), () => {
            GG = !1
          }
        }), [bG, kG]), (0, SG.useEffect)((() => {
          hG && !wG && (0, xZ.g)()
        }), [hG, wG]), !hG) return null;
      const dG = () => {
          (0, xZ.g)(), fG(!0)
        },
        JG = OZ.c.supports("notifications") ? "app" : "browser";
      return (0, VG.jsxs)("div", {
        className: "RespawnNotificationOptIn",
        style: pG ? {
          visibility: "hidden"
        } : void 0,
        children: [(0, VG.jsxs)("div", {
          className: "RespawnPanelSectionTitle",
          children: [(0, VG.jsx)(AG.c, {
            name: "bell"
          }), LG("mobilePushNotifications:optInTitle")]
        }), (0, VG.jsxs)("div", {
          className: "RespawnNotificationOptInButtons",
          children: [(0, VG.jsx)(gZ.d, {
            onClick: () => {
              dG(), UG().catch((GG => {
                console.error("Failed to ask for push notifications:", GG)
              }))
            },
            disabled: !ZG || pG,
            analyticsClick: {
              id: "push.allow",
              value: JG
            },
            touchPressOn: "pointerup",
            children: LG("mobilePushNotifications:optInConfirm")
          }), (0, VG.jsx)(gZ.h, {
            onClick: dG,
            disabled: !ZG || pG,
            analyticsClick: {
              id: "push.deny",
              value: JG
            },
            touchPressOn: "pointerup",
            children: LG("mobilePushNotifications:optInCancel")
          })]
        })]
      })
    }
    var Gw = ZG(352);

    function bw(GG, bG) {
      let {
        shownName: ZG,
        lifeformType: wG
      } = GG;
      return null !== ZG ? ZG : null !== wG ? bG(`lifeform:${(0,Gw.Se)(wG)}`) : null
    }
    var Zw = ZG(3415),
      ww = ZG(3420);
    const Sw = {
        FallDamage: "respawnPage:diedFallDamage",
        VoidJump: "respawnPage:diedVoid",
        Lava: "respawnPage:diedLava",
        "Toxic Waste": "respawnPage:diedToxicWaste",
        "Poison Potion": "respawnPage:diedPoisoned",
        "Rotten Brain": "respawnPage:diedPoisoned"
      },
      Lw = (0, SG.memo)((function() {
        var GG, bG;
        const ZG = (0, rG.b)(),
          wG = (0, KG.useNavigatePreserveSearch)(),
          {
            t: LG
          } = (0, vG.w)(),
          {
            loadingOverlayVisible: kG
          } = (0, CG.o)(["loadingOverlayVisible"]),
          YG = (0, mG.w)(),
          [pG, fG] = (0, SG.useState)(!1),
          [hG, dG] = (0, SG.useState)(!0),
          [JG, zG] = (0, SG.useState)(null),
          oG = (0, vZ.d)(),
          uG = (0, EG.i)("respawnButtonText"),
          WG = (0, EG.i)("usePlayAgainButton"),
          IG = (0, EG.i)("useRespawnButton"),
          {
            gameNameWithVariation: FG
          } = (0, iG.f)("connectedGame"),
          aG = (0, SG.useRef)(XG.c.get("secsToRespawn")),
          cG = (0, SG.useRef)(QG.gameBridge.latest("localPlayerAlive")),
          lG = (0, SG.useRef)(XG.c.get("secsToRespawn")),
          jG = (0, SG.useRef)(XG.c.get("autoRespawn")),
          PG = (0, SG.useRef)(null),
          MG = (0, SG.useRef)(0),
          sG = (0, SG.useRef)(0),
          [qG, nG] = (0, SG.useState)(!1),
          eG = (0, SG.useRef)(null),
          RG = (0, SG.useRef)(null),
          TG = (0, SG.useRef)(null);
        (0, EG.h)("secsToRespawn", (GG => {
          console.log("Received new secsToRespawn with", GG, "and current canRespawn value of ", jG.current), lG.current = GG, NG()
        })), (0, EG.h)("autoRespawn", (GG => {
          console.log("Received autorespawn", GG, "current canRespawn value of ", aG.current), jG.current = GG, NG()
        }));
        const HG = GG => {
          console.log("Updating respawn component from localPlayerAliveSet. isAlive:", GG), GG || MG.current++, cG.current = GG, NG()
        };
        (0, iG.b)("localPlayerAliveSet", HG), (0, UG.g)(TZ.o, (GG => {
          "connected" === GG && !cG.current && jG.current && aG.current <= 0 && (sG.current = 0, OG())
        })), (0, SG.useEffect)((() => {
          const GG = QG.gameBridge.latest("localPlayerAlive");
          GG === cG.current ? (console.log("Updating respawn component from initial mount"), NG()) : HG(GG)
        }), []), (0, SG.useEffect)((() => {
          if (pG) {
            nG(!1);
            const GG = setTimeout((() => {
              nG(!0)
            }), 600);
            return () => {
              clearTimeout(GG)
            }
          }
          return () => {}
        }), [pG]);
        (0, iG.b)("kill", (GG => {
          let {
            killer: bG,
            victim: ZG,
            withItem: wG
          } = GG;
          if (!ZG.local) return;
          const SG = ((GG, bG) => {
            if (GG.local) {
              const GG = Sw[bG];
              return GG ? LG(GG) : null
            }
            const ZG = bw(GG, LG);
            return ZG ? LG("respawnPage:killedBy", {
              name: ZG
            }) : null
          })(bG, wG);
          SG && zG({
            text: SG,
            deathCount: cG.current ? MG.current + 1 : MG.current
          })
        }));
        const tG = () => {
            pG && jG.current && cG.current && qG && fG(!1)
          },
          DG = pG && jG.current && cG.current && qG && !kG;
        (0, UG.g)("usedKeyboard", (() => {
          tG()
        })), (0, ww.c)("respawn", DG, tG);
        const NG = () => {
            dG(lG.current >= 3 || !jG.current), cG.current ? (clearInterval(PG.current), PG.current = null, jG.current ? oG() : fG(!1)) : (fG(!0), aG.current = lG.current, oG(), console.log("Running respawn stats updated", jG.current, aG.current), jG.current && aG.current <= 0 && OG(), clearInterval(PG.current), aG.current > 0 && (PG.current = setInterval((() => {
              aG.current = Math.max(aG.current - 1, 0), oG(), aG.current <= 0 && (clearInterval(PG.current), PG.current = null, XG.c.get("autoRespawn") && OG())
            }), 1e3)))
          },
          OG = () => {
            if (Date.now() - sG.current > 1e3) {
              const GG = () => {
                QG.gameBridge.send("respawn", null), sG.current = Date.now()
              };
              XG.c.get("autoRespawn") ? GG() : (0, eZ.cb)((() => {
                GG()
              }), "video_respawn")
            }
          },
          xG = (0, SG.useMemo)((() => {
            var GG;
            return null === (GG = (0, tZ.p)(FG)) || void 0 === GG ? void 0 : GG.otherGameLinksOnRespawnPage
          }), [FG]),
          BG = 0 === aG.current,
          Gb = (null === JG || void 0 === JG ? void 0 : JG.deathCount) === MG.current ? JG.text : null,
          bb = pG && hG && !kG,
          Zb = YG && DG && null !== (GG = null === (bG = (0, gG.h)()) || void 0 === bG ? void 0 : bG.getBoundButton("menuConfirm")) && void 0 !== GG ? GG : null,
          wb = GG => BG ? GG : LG("respawnPage:actionInSeconds", {
            action: GG,
            seconds: aG.current
          });
        return (0, VG.jsx)(AZ.b, {
          showing: pG,
          globallyUniqueKey: "RespawnComponent",
          alwaysMountChildren: !0,
          children: (0, VG.jsx)(RZ.d, {
            show: pG,
            "data-holds-camera-keeper": "",
            children: (0, VG.jsxs)(sZ.b, {
              close: () => {
                fG(!1)
              },
              togglePointerLock: !1,
              closeOnPressBackground: !1,
              className: "RespawnBackgroundScreen",
              padLayerKind: jG.current || kG ? null : "death",
              padBackCloses: !1,
              cameraKeeper: !0,
              children: [(0, NZ.is99NightsCrazyGamesBundle)() && (0, VG.jsx)(gZ.b, {
                onClick: HZ.i,
                children: LG("homePage:backToGames")
              }), (0, VG.jsxs)("div", {
                className: "RespawnContainer",
                onClick: tG,
                children: [(0, VG.jsxs)("div", {
                  className: "RespawnTop",
                  children: [(0, VG.jsx)("div", {
                    ref: RG,
                    className: "RespawnSideSquareBannerDiv",
                    children: ZG[0] > 925 && (0, VG.jsx)(nZ.e, {
                      info: {
                        adType: "square",
                        adId: 1,
                        adAlias: "banner_respawn_1"
                      },
                      sizeInfo: {
                        parentRef: RG
                      },
                      showing: bb,
                      horizontalAlign: "start",
                      extraContrastBackgroundBox: "left",
                      noFillShowBloxdAdProbability: 0
                    })
                  }), (0, VG.jsx)("div", {
                    className: "RespawnMainContent",
                    children: (0, VG.jsxs)("div", {
                      className: yG()("RespawnMainContentInner", {
                        RespawnMainContentInnerPad: YG
                      }),
                      children: [jG.current && (0, VG.jsxs)("div", {
                        className: "AutoRespawnDeathInfo",
                        children: [(0, VG.jsxs)("div", {
                          className: "AutoRespawnDeathTitle FullyFancyText",
                          children: [(0, VG.jsx)(AG.c, {
                            name: "skull",
                            className: "AutoRespawnDeathIcon"
                          }), LG("respawnPage:youDied")]
                        }), (0, VG.jsxs)("div", {
                          className: "AutoRespawnDeathCause FullyFancyText",
                          children: [null === Zb && (cG.current ? LG("respawnPage:pressAnywhereToContinue") : BG ? LG("respawnPage:respawning") : wb(LG("general:respawn"))), null !== Zb && (0, VG.jsx)(Zw.c, {
                            text: LG("controller:screensPressToContinue", {
                              button: Zw.f
                            }),
                            glyph: Zb,
                            className: "AutoRespawnContinueGlyph"
                          })]
                        }), Gb && (0, VG.jsx)("div", {
                          className: "AutoRespawnStatus",
                          children: Gb
                        })]
                      }), !jG.current && (0, VG.jsxs)(VG.Fragment, {
                        children: [(0, VG.jsxs)("div", {
                          className: yG()("RespawnPageButtons", {
                            RespawnPageButtonsVertical: !xG
                          }),
                          children: [WG && (0, VG.jsx)(gZ.k, {
                            className: "RespawnPageButton",
                            padDefaultFocus: !0,
                            onClick: () => {
                              (0, eZ.cb)((() => {
                                (0, CG.n)("inGameReplay");
                                const GG = (0, qZ.d)(FG);
                                wG(GG)
                              }), "video_start")
                            },
                            disabled: !BG || !qG,
                            touchPressOn: "pointerup",
                            children: wb(LG("respawnPage:playAgain"))
                          }), IG && (0, VG.jsx)(gZ.d, {
                            className: "RespawnPageButton",
                            onClick: OG,
                            padDefaultFocus: !WG,
                            padBack: "sessionBasedGame:stayInLobby" === uG,
                            disabled: !BG || !qG,
                            touchPressOn: "pointerup",
                            children: wb(LG(uG))
                          }), !(0, NZ.is99NightsCrazyGamesBundle)() && (0, VG.jsx)(gZ.C, {
                            className: "RespawnPageButton",
                            onClick: HZ.i,
                            disabled: !BG || !qG,
                            touchPressOn: "pointerup",
                            children: wb(LG("respawnPage:exitGame"))
                          })]
                        }), xG && (0, VG.jsxs)("div", {
                          className: "RespawnPageOtherGames",
                          children: [(0, VG.jsx)("div", {
                            className: "RespawnPanelSectionTitle",
                            children: LG("respawnPage:orTry")
                          }), (0, VG.jsx)("div", {
                            className: "RespawnPageOtherGameThumbnails",
                            children: xG.map((GG => (0, VG.jsx)(DZ.g, {
                              source: {
                                type: "game",
                                gameNameWithVariation: GG
                              },
                              disabled: !BG || !qG,
                              gameWidth: "13rem",
                              hideDescription: !0,
                              hideFavourites: !0,
                              hideCcu: !0,
                              onClick: () => {
                                (0, CG.n)("inGameReplay");
                                const bG = (0, qZ.d)(GG);
                                wG(bG)
                              }
                            }, GG)))
                          })]
                        })]
                      }), (0, VG.jsx)(BZ, {
                        showing: pG,
                        enabled: qG,
                        autoRespawn: jG.current
                      })]
                    })
                  }), (0, VG.jsx)("div", {
                    ref: TG,
                    className: "RespawnSideSquareBannerDiv"
                  })]
                }), (0, VG.jsx)("div", {
                  ref: eG,
                  className: "RespawnBottom",
                  children: (0, VG.jsx)(nZ.e, {
                    info: {
                      adType: "leaderboard",
                      adId: 1,
                      adAlias: "banner_respawn_2"
                    },
                    sizeInfo: {
                      parentRef: eG
                    },
                    showing: bb,
                    verticalAlign: "end",
                    extraContrastBackgroundBox: "bottom",
                    noFillShowBloxdAdProbability: 1
                  })
                })]
              })]
            })
          })
        })
      }));
    var yw = ZG(36963);
    const kw = [{
        opacity: 1,
        transform: "scale(1.5)",
        offset: 0
      }, {
        opacity: 1,
        transform: "scale(1)",
        offset: .25
      }, {
        opacity: 0,
        transform: "scale(0.85)",
        offset: 1
      }],
      Uw = [{
        opacity: 1,
        transform: "scale(1.7)",
        offset: 0
      }, {
        opacity: 1,
        transform: "scale(1.1)",
        offset: .2
      }, {
        opacity: .9,
        transform: "scale(1)",
        offset: .5
      }, {
        opacity: 0,
        transform: "scale(0.85)",
        offset: 1
      }],
      Yw = {
        duration: 300,
        easing: "ease-out",
        fill: "forwards"
      },
      Vw = {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
      },
      pw = (0, SG.memo)((function() {
        const GG = (0, SG.useRef)(null),
          bG = (0, SG.useRef)(null);

        function ZG(ZG) {
          var wG;
          let {
            eb: SG,
            screenPos: LG
          } = ZG;
          const yG = GG.current;
          null === (wG = bG.current) || void 0 === wG || wG.cancel(), yG.classList.remove("HitmarkerCrit"), LG ? (yG.style.left = `${LG.x}%`, yG.style.top = `${LG.y}%`) : (yG.style.left = "50%", yG.style.top = "50%"), yG.style.rotate = 16 * (Math.random() - .5) + "deg", SG && yG.classList.add("HitmarkerCrit");
          const kG = yG.animate(SG ? Uw : kw, SG ? Vw : Yw);
          bG.current = kG, kG.onfinish = () => {
            yG.classList.remove("HitmarkerCrit")
          }
        }
        return (0, UG.g)("localGunHitmarker", (GG => {
          let {
            eb: bG
          } = GG;
          ZG({
            eb: bG
          })
        })), (0, UG.g)("yourAttackHit", (GG => {
          let {
            eb: bG,
            screenPos: wG
          } = GG;
          ZG({
            eb: bG,
            screenPos: CG.e.get("isTouchScreen") ? wG : void 0
          })
        })), (0, UG.g)("sendHitmarker", (GG => {
          let {
            eb: bG,
            screenPos: wG
          } = GG;
          ZG({
            eb: bG,
            screenPos: wG
          })
        })), (0, VG.jsxs)("div", {
          ref: GG,
          className: "Hitmarker",
          children: [(0, VG.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, VG.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, VG.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, VG.jsx)("div", {
            className: "HitmarkerBar"
          })]
        })
      }));

    function fw() {
      const GG = (0, SG.useRef)(!0);
      return (0, UG.g)("localBlockMined", (() => {
        Lb.i.play("blockMined")
      })), (0, UG.g)("yourAttackHit", (() => {
        Lb.i.play("hitLanded")
      })), (0, UG.g)("localGunHitmarker", (() => {
        Lb.i.play("hitLanded")
      })), (0, UG.g)("damagedByOtherPlayer", (() => {
        Lb.i.play("damageTaken")
      })), (0, iG.b)("localPlayerAliveSet", (bG => {
        !bG && GG.current && Lb.i.play("death"), GG.current = bG
      })), null
    }
    var Qw = ZG(1889),
      Kw = ZG(36981),
      hw = ZG.n(Kw),
      dw = ZG(2009),
      Jw = ZG(2001),
      rw = ZG(3267),
      zw = ZG(34492);
    const Ew = Gw.Fe ? 7e7 : 7e3,
      ow = hw()("#ffffff").alpha(.5).string();

    function Xw(GG) {
      const bG = (0, rw.c)(GG);
      return void 0 !== bG && "Gun" === (0, zw.itemTypeOf)(bG)
    }

    function uw(GG) {
      if (!GG) return console.error(`Killfeed colour was ${GG}`), ow;
      try {
        return hw()(GG).alpha(.5).string()
      } catch {
        return console.warn(`Killfeed colour ${GG} is not a colour`), ow
      }
    }
    const iw = (0, SG.memo)((function() {
      const {
        t: GG
      } = (0, vG.w)(), bG = (0, SG.useRef)([]), ZG = (0, vZ.d)();
      return (0, iG.b)("kill", (function(wG) {
        var SG, LG;
        let {
          killer: yG,
          victim: kG,
          withItem: UG,
          killstreak: YG
        } = wG;
        const VG = bG.current;
        if (VG.length >= 3) {
          const GG = VG.shift();
          clearTimeout(GG.timeout)
        }
        const pG = QG.gameBridge.latest("hiddenPlayerNames"),
          fG = {
            deadName: bw(kG, GG),
            killerName: bw(yG, GG),
            isFriend: {
              killer: (0, dw.f)(yG.realName, pG),
              dead: (0, dw.f)(kG.realName, pG)
            },
            withItem: UG,
            wasHeadshot: !1,
            killstreak: YG,
            timeout: setTimeout((() => {
              VG.shift(), ZG()
            }), Ew),
            reactId: `${null!==(SG=yG.id)&&void 0!==SG?SG:yG.shownName}|${null!==(LG=kG.id)&&void 0!==LG?LG:kG.shownName}|${Date.now()}`,
            killerBackground: uw(yG.colour),
            deadBackground: uw(kG.colour)
          };
        VG.push(fG), ZG()
      })), (0, SG.useEffect)((() => {
        const GG = bG.current;
        return () => {
          for (; GG.length > 0;) {
            const {
              timeout: bG
            } = GG.pop();
            clearTimeout(bG)
          }
        }
      }), []), (0, VG.jsx)("div", {
        className: "Killfeed",
        children: bG.current.map((GG => {
          let {
            deadName: bG,
            killerName: ZG,
            withItem: wG,
            wasHeadshot: SG,
            killstreak: LG,
            killerBackground: yG,
            deadBackground: kG,
            reactId: UG,
            isFriend: YG
          } = GG;
          return (0, VG.jsxs)("div", {
            className: "IndividualKillWrapper SmallTextLight",
            style: {
              background: `linear-gradient(90deg, ${yG} calc(100% - 10rem), ${kG} 100%)`
            },
            children: [LG >= 2 ? (0, VG.jsx)("div", {
              className: "KillfeedKillstreak",
              children: (0, Gw.X)(LG)
            }) : null, (0, VG.jsx)("div", {
              className: "KillfeedKillerName",
              children: ZG
            }), YG.killer && (0, VG.jsx)(Jw.e, {}), (0, VG.jsx)("div", {
              className: "KillfeedItem",
              style: {
                height: "5vmin",
                width: Xw(wG) ? "7.5vmin" : "5vmin"
              },
              children: (0, VG.jsx)(Qw.b, {
                itemName: wG,
                amount: 0,
                gunTransform: "scaleX(-1)",
                itemMarginTop: 0
              })
            }), SG ? (0, VG.jsx)(AG.c, {
              name: "crosshairs",
              className: "3x KillfeedHeadshotIcon"
            }) : null, (0, VG.jsx)("div", {
              className: "KillfeedDeadName",
              children: bG
            }), YG.dead && (0, VG.jsx)(Jw.e, {})]
          }, UG)
        }))
      })
    }));
    var Cw = ZG(37026),
      Ww = ZG(1101),
      mw = ZG.n(Ww),
      Iw = ZG(3390),
      Fw = ZG(37035),
      vw = ZG(1260);
    const aw = {},
      lw = (0, SG.memo)((function() {
        const GG = (0, SG.useRef)({}),
          [, bG] = (0, SG.useReducer)((GG => GG + 1), 0);
        (0, UG.g)("setDirectionArrow", (ZG => {
          let {
            id: wG,
            position: SG,
            style: LG,
            text: yG,
            Mb: kG
          } = ZG;
          const UG = GG.current,
            YG = LG || aw,
            VG = yG,
            pG = UG[wG];
          if (!pG) return UG[wG] = {
            position: SG,
            style: YG,
            text: VG,
            shouldShowDistance: kG,
            Mq: null,
            chevronElement: null,
            distanceElement: null,
            lastRenderedDist: -1,
            lastDistUpdateTime: 0,
            lastScreenX: NaN,
            lastScreenY: NaN,
            onScreen: void 0
          }, void bG();
          const fG = !mw()(pG.style, YG) || !mw()(pG.text, VG) || pG.shouldShowDistance !== kG;
          pG.position = SG, pG.style = YG, pG.text = VG, pG.shouldShowDistance = kG, fG && bG()
        })), (0, UG.g)("clearDirectionArrow", (ZG => {
          let {
            id: wG
          } = ZG;
          const SG = GG.current;
          if (null === wG)
            for (const GG in SG) delete SG[GG];
          else delete SG[wG];
          bG()
        })), (0, SG.useEffect)((() => {
          const bG = GG.current,
            ZG = (0, vw.s)((() => {
              ! function(GG) {
                const bG = QG.gameBridge.lookup("localPos", null),
                  ZG = Iw.b - jw,
                  wG = (0, Iw.g)() - jw;
                for (const SG in GG) {
                  const LG = GG[SG];
                  if (!LG.Mq) continue;
                  const yG = QG.gameBridge.lookup("screenPos", LG.position),
                    kG = yG.x - 50,
                    UG = yG.y - 50;
                  yG.x === LG.lastScreenX && yG.y === LG.lastScreenY || (LG.lastScreenX = yG.x, LG.lastScreenY = yG.y, LG.Mq.style.translate = `${yG.x}vw ${yG.y}vh`, LG.chevronElement && (LG.chevronElement.style.rotate = `${Gw.c.fastATan2(UG,kG)}rad`));
                  const YG = Math.abs(kG) < ZG && Math.abs(UG) < wG;
                  if (YG !== LG.onScreen && (LG.onScreen = YG, LG.Mq.classList.toggle("DirectionArrowOnScreen", YG)), LG.shouldShowDistance && LG.distanceElement) {
                    const GG = LG.position[0] - bG[0],
                      ZG = LG.position[1] - bG[1],
                      wG = LG.position[2] - bG[2],
                      SG = Math.round(Math.sqrt(GG * GG + ZG * ZG + wG * wG));
                    (-1 === LG.lastRenderedDist || (0, Fw.d)(SG, LG.lastRenderedDist, LG.lastDistUpdateTime)) && (LG.distanceElement.textContent = `${SG}m`, LG.lastRenderedDist = SG, LG.lastDistUpdateTime = Date.now() + Math.floor(100 * Math.random()))
                  }
                }
              }(bG)
            }));
          return () => {
            ZG();
            for (const GG in bG) delete bG[GG]
          }
        }), []);
        const ZG = GG.current;
        return (0, VG.jsx)("div", {
          className: "DirectionArrows",
          children: Object.entries(ZG).map((GG => {
            var bG;
            let [wG, SG] = GG;
            const LG = null !== (bG = (0, zG.qc)(SG.style)) && void 0 !== bG ? bG : "#ffffff";
            return (0, VG.jsxs)("div", {
              ref: GG => {
                ZG[wG] && (ZG[wG].Mq = GG)
              },
              className: "DirectionArrow",
              style: {
                fontSize: SG.style.fontSize,
                opacity: SG.style.opacity
              },
              children: [(0, VG.jsxs)("div", {
                className: "DirectionArrowChevron",
                ref: GG => {
                  ZG[wG] && (ZG[wG].chevronElement = GG)
                },
                children: [(0, VG.jsxs)("div", {
                  className: "DirectionArrowShadowLayer",
                  children: [(0, VG.jsx)("div", {
                    className: "DirectionArrowBar"
                  }), (0, VG.jsx)("div", {
                    className: "DirectionArrowBar"
                  })]
                }), (0, VG.jsxs)("div", {
                  className: "DirectionArrowBarLayer",
                  children: [(0, VG.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: LG
                    }
                  }), (0, VG.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: LG
                    }
                  })]
                })]
              }), (0, VG.jsx)("div", {
                className: "DirectionArrowMarker",
                style: {
                  background: LG,
                  boxShadow: `0 0 3px rgba(0, 0, 0, 0.8), 0 0 8px ${LG}`
                }
              }), SG.text && (0, VG.jsx)("div", {
                className: "DirectionArrowLabel SmallTextLight",
                style: {
                  color: LG,
                  fontWeight: SG.style.fontWeight,
                  fontStyle: SG.style.fontStyle
                },
                children: (0, VG.jsx)(YG.c, {
                  text: SG.text
                })
              }), SG.shouldShowDistance && (0, VG.jsx)("div", {
                className: "DirectionArrowDistance SmallTextLight",
                ref: GG => {
                  ZG[wG] && (ZG[wG].distanceElement = GG)
                },
                style: {
                  color: LG,
                  fontWeight: SG.style.fontWeight,
                  fontStyle: SG.style.fontStyle
                }
              })]
            }, wG)
          }))
        })
      })),
      jw = .5;
    const Pw = (0, SG.memo)((function(GG) {
        let {
          isTouchScreen: bG
        } = GG;
        return (0, VG.jsxs)("div", {
          className: "BottomRightElements",
          "data-camera-keeper-host": "",
          children: [(0, VG.jsx)(qw, {}), bG && (0, VG.jsx)(hZ, {})]
        })
      })),
      Mw = {
        readyForNext: 0,
        running: 1
      },
      Aw = 50;

    function sw(GG) {
      console.assert(GG.state.current === Mw.readyForNext);
      const bG = GG.queue.current,
        ZG = GG.foreground.current;
      if (bG.length > 0 && ZG) {
        const {
          toFraction: wG,
          toDuration: SG
        } = bG.shift();
        GG.state.current = Mw.running, ZG.style.transition = `transform ${Math.max(SG-Aw,0)}ms linear`, ZG.classList.remove("Complete"), GG.timeout.current = setTimeout((() => {
          ZG.style.transform = `scaleX(${wG})`, GG.timeout.current = setTimeout((() => {
            1 === wG && ZG.classList.add("Complete"), GG.state.current = Mw.readyForNext, sw(GG)
          }), Math.max(SG - Aw, 0))
        }), Aw)
      }
    }

    function qw() {
      const GG = (0, SG.useRef)([]),
        bG = (0, SG.useRef)(Mw.readyForNext),
        ZG = (0, SG.useRef)(void 0),
        wG = (0, SG.useRef)(null),
        LG = (0, SG.useRef)({
          queue: GG,
          state: bG,
          timeout: ZG,
          foreground: wG
        }),
        yG = (0, EG.i)("showProgressBar");
      if ((0, SG.useLayoutEffect)((() => (yG && bG.current === Mw.readyForNext && sw(LG.current), () => {
          bG.current = Mw.readyForNext, clearTimeout(ZG.current), yG && (GG.current.length = 0)
        })), [yG]), (0, UG.g)("progressBarUpdate", (ZG => {
          let {
            toFraction: wG,
            toDuration: SG
          } = ZG;
          GG.current.push({
            toFraction: wG,
            toDuration: SG
          }), bG.current === Mw.readyForNext && sw(LG.current)
        })), !yG) return null;
      return (0, VG.jsx)("div", {
        className: "ProgressBarBackground",
        children: (0, VG.jsx)("div", {
          className: "ProgressBarForeground",
          ref: wG,
          style: {
            width: "15vw",
            transformOrigin: "left center",
            transform: "scaleX(0)"
          }
        })
      })
    }
    var nw = ZG(37039),
      gw = ZG(2443);
    const ew = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function Rw(GG) {
      let {
        classes: bG,
        gone: ZG
      } = GG;
      const wG = document.documentElement;
      wG.classList.remove(...bG);
      for (const SG of ZG) SG.style.display = "block";
      return () => {
        wG.classList.add(...bG);
        for (const GG of ZG) GG.style.display = ""
      }
    }

    function Tw(GG) {
      const {
        isTouchScreen: bG
      } = (0, CG.o)(["isTouchScreen"]);
      (0, SG.useLayoutEffect)((() => {
        if (!bG) return;
        const ZG = GG.current,
          wG = document.querySelector(`.${nw.f}`),
          SG = GG => {
            const bG = () => {
              const bG = GG.querySelector(gw.h),
                wG = function(GG) {
                  const bG = document.documentElement;
                  return {
                    classes: hb.K.map(zb.H).filter((GG => bG.classList.contains(GG))),
                    gone: [...GG.querySelectorAll(`.TopRightTrayToggle.${gw.l}`)]
                  }
                }(GG);
              bG && function(GG, bG) {
                (0, gw.H)(GG, bG.classes.length > 0 || bG.gone.length > 0, (() => Rw(bG)))
              }(bG, wG);
              const SG = `${Math.floor(function(GG,bG,ZG){const wG=document.documentElement,SG=wG.classList.contains((0,zb.L)("menu")),LG=wG.style.getPropertyValue((0,zb.P)("menu"));if(!SG&&""===LG)return GG.getBoundingClientRect().left;const yG=bG?(0,gw.q)(bG):()=>{},kG=Rw(ZG);wG.classList.remove((0,zb.L)("menu")),wG.style.removeProperty((0,zb.P)("menu"));const UG=GG.getBoundingClientRect().left;return kG(),yG(),SG&&wG.classList.add((0,zb.L)("menu")),""!==LG&&wG.style.setProperty((0,zb.P)("menu"),LG),UG}(GG,bG,wG)-ZG.getBoundingClientRect().left-4)}px`;
              ZG.style.getPropertyValue("--InGameHeaderMaxWidth") !== SG && ZG.style.setProperty("--InGameHeaderMaxWidth", SG)
            };
            bG();
            const SG = new ResizeObserver(bG);
            SG.observe(GG), SG.observe(wG), window.addEventListener("resize", bG);
            const LG = () => ew.map((GG => document.documentElement.style.getPropertyValue(GG))).join();
            let yG = LG();
            const kG = new MutationObserver((() => {
              const GG = LG();
              GG !== yG && (yG = GG, bG())
            }));
            kG.observe(document.documentElement, {
              attributes: !0,
              attributeFilter: ["style"]
            });
            const UG = (0, oG.p)(zb.e, bG),
              YG = new MutationObserver(bG);
            return YG.observe(GG, {
              childList: !0,
              subtree: !0
            }), () => {
              SG.disconnect(), kG.disconnect(), YG.disconnect(), UG(), window.removeEventListener("resize", bG);
              const ZG = GG.querySelector(gw.h);
              ZG && (0, gw.q)(ZG)
            }
          },
          LG = () => wG.querySelector(".TopRightIconsContainer"),
          yG = LG();
        let kG;
        if (yG) kG = SG(yG);
        else {
          const GG = new MutationObserver((() => {
            const bG = LG();
            bG && (GG.disconnect(), kG = SG(bG))
          }));
          GG.observe(wG, {
            childList: !0,
            subtree: !0
          }), kG = () => {
            GG.disconnect()
          }
        }
        return () => {
          kG(), ZG.style.removeProperty("--InGameHeaderMaxWidth")
        }
      }), [bG, GG])
    }
    var Hw = ZG(3676),
      tw = ZG(3669),
      Dw = ZG(1579),
      Nw = ZG(1431),
      Ow = ZG(1583),
      xw = ZG(1702),
      Bw = ZG(1827),
      GS = ZG(1096),
      bS = ZG(4295),
      ZS = ZG(1315);
    const wS = 2e4,
      SS = 6e5,
      LS = new Set;

    function yS() {
      const {
        gameEntrySource: GG,
        loadingOverlayVisible: bG
      } = (0, CG.o)(["gameEntrySource", "loadingOverlayVisible"]), ZG = (0, iG.c)("connectedGame", (GG => (0, bS.i)(GG) ? GG.lobbyName : null)), wG = (0, iG.f)("localPlayerAlive"), LG = (0, iG.c)("players", (GG => null !== GG.localId && void 0 !== GG.byId[GG.localId])), [yG, kG] = (0, SG.useState)(null);
      return !bG && wG && LG && null !== ZG && yG !== ZG && kG(ZG), (0, SG.useEffect)((() => {
        if (!(0, bS.k)(GG) || null === yG || yG !== ZG || LS.has(yG)) return;
        const bG = setTimeout((() => {
          LS.add(yG), async function(GG) {
            const bG = await GS.userContextManager.getCurrentUserContext();
            let ZG;
            try {
              ZG = (await Nw.d.getWorldOwnerFriendOffer(bG)).owner
            } catch (SG) {
              return void console.warn("Couldn't ask who owns this world", SG)
            }
            if (!ZG || (0, bS.r)(ZG.name, Date.now())) return;
            const wG = ZG;
            ! function(GG, bG) {
              const ZG = Date.now() + SS;
              let wG = Date.now(),
                SG = 0;
              const LG = () => {
                const yG = Date.now(),
                  kG = QG.gameBridge.latest("connectedGame");
                kG.lobbyName !== GG || yG > ZG || (null === kG.websocketUrl ? wG = 1 / 0 : wG === 1 / 0 && !CG.e.get("loadingOverlayVisible") && QG.gameBridge.latest("localPlayerAlive") && (wG = yG + wS), SG = yG < wG || !QG.gameBridge.latest("localPlayerAlive") || CG.e.get("isUiHidden") || CG.e.get("isUiHiddenByCamera") || (0, xw.isTypingInInput)() || CG.e.get("loadingOverlayVisible") || (0, Dw.t)() || (0, Hw.g)() || (0, ZS.m)() ? 0 : SG + 1, SG >= 2 ? bG() : setTimeout(LG, 500))
              };
              LG()
            }(GG, (() => {
              (0, bS.h)(Ow.b.getSocialState().friends, wG.name) || ((0, bS.n)(wG.name, Date.now()), Bw.g.showWorldOwnerOffer(wG), (0, SZ.reportAnalyticsClick)({
                id: "social.world_owner_offer",
                value: "shown"
              }))
            }))
          }(yG).catch((GG => {
            console.error("Failed to offer the world's owner as a friend", GG)
          }))
        }), wS);
        return () => {
          clearTimeout(bG)
        }
      }), [GG, yG, ZG]), null
    }
    var kS = ZG(1885);
    const US = (0, SG.memo)((function(GG) {
        let {
          durationMs: bG,
          endsAtMs: ZG
        } = GG;
        const [, wG] = (0, SG.useReducer)((GG => GG + 1), 0), LG = null === ZG ? bG : Math.max(ZG - Date.now(), 0);
        return (0, SG.useEffect)((() => {
          if (null === ZG || LG <= 0) return;
          const GG = setTimeout(wG, LG - 1e3 * (Math.ceil(LG / 1e3) - 1));
          return () => {
            clearTimeout(GG)
          }
        })), (0, VG.jsx)("div", {
          className: "EffectInfoDuration SmallTextLight",
          children: (0, Gw.pb)(LG)
        })
      })),
      YS = (0, SG.memo)((function() {
        const GG = (0, iG.f)("localEffects");
        return (0, VG.jsx)("div", {
          className: "EffectInfosWrapper",
          children: Object.entries(GG).map((GG => {
            let [bG, {
              icon: ZG,
              displayName: wG,
              durationMs: SG,
              endsAtMs: LG,
              level: yG
            }] = GG;
            return (0, VG.jsxs)("div", {
              className: "EffectInfo",
              children: [(0, VG.jsx)(kS.d, {
                icon: ZG,
                className: "EffectInfoIcon"
              }), (0, VG.jsxs)("div", {
                className: "EffectInfoRightSide",
                style: {
                  marginTop: null !== SG ? "0" : "1rem"
                },
                children: [(0, VG.jsxs)("div", {
                  className: "EffectInfoNameWrapper",
                  children: [(0, VG.jsx)(YG.c, {
                    text: null !== wG && void 0 !== wG ? wG : bG,
                    className: "EffectInfoName SmallTextBold"
                  }), yG > 1 && (0, VG.jsx)("div", {
                    className: "EffectInfoName SmallTextBold",
                    children: (0, Gw.X)(yG)
                  })]
                }), null !== SG && (0, VG.jsx)(US, {
                  durationMs: SG,
                  endsAtMs: LG
                })]
              })]
            }, bG)
          }))
        })
      }));
    var VS = ZG(37044),
      pS = ZG(37249),
      fS = ZG(188),
      QS = ZG(2742),
      KS = ZG(2913);

    function hS(GG, bG) {
      (0, SG.useLayoutEffect)((() => {
        let bG, ZG;
        const wG = requestAnimationFrame((() => {
          ZG = setTimeout((() => {
            ZG = void 0;
            const wG = GG();
            bG = "function" === typeof wG ? wG : void 0
          }), 0)
        }));
        return () => {
          var GG;
          cancelAnimationFrame(wG), clearTimeout(ZG), null === (GG = bG) || void 0 === GG || GG()
        }
      }), bG)
    }
    const dS = [5, 5, 5],
      JS = [7, 4, 4, 4];

    function rS(GG) {
      return GG.reduce(((GG, bG) => GG + bG), 0)
    }

    function zS(GG, bG, ZG, wG, SG) {
      const LG = GG.getContext("2d");
      if (!LG) return null;
      const yG = bG.color,
        kG = `${bG.fontWeight} ${SG}px ${bG.fontFamily}`,
        UG = () => {
          GG.width = ZG, GG.height = wG, LG.fillStyle = yG, LG.textAlign = "center", LG.textBaseline = "middle", LG.font = kG
        };
      return UG(), {
        ctx: LG,
        reset: UG
      }
    }
    const ES = (0, SG.memo)((function(GG) {
      let {
        show: bG
      } = GG;
      const ZG = (0, SG.useRef)(null),
        wG = (0, SG.useRef)(null),
        LG = (0, SG.useRef)(null),
        yG = (0, hG.h)();
      return (0, SG.useEffect)((() => yG.whenShown((() => {
        let GG = 0,
          bG = 0,
          ZG = performance.now(),
          SG = 0;
        const yG = (0, vw.s)((() => {
          var yG, kG, UG;
          GG++, bG++;
          const YG = performance.now();
          if (YG - ZG < 1e3) return;
          const VG = Math.round(GG / (YG - ZG) * 1e3);
          if (wG.current = VG, null === (yG = LG.current) || void 0 === yG || yG.call(LG, VG), GG = 0, ZG = YG, VG >= 55) return void(SG = 0);
          if (SG += 1, SG < 15) return;
          const pG = null !== (kG = uG.h.getItem("decreaseLoadDistPromptDeniedCount")) && void 0 !== kG ? kG : 0,
            [fG, KG] = XG.c.get("minChunkAddDist");
          if (function(GG, bG) {
              const ZG = QG.gameBridge.lookup("Vr", null);
              return null !== ZG && (ZG.horizontal > GG || ZG.vertical > bG)
            }(fG, KG) && (null !== (UG = uG.h.getItem("lastDecreaseLoadDistPromptTime")) && void 0 !== UG ? UG : 0) + 432e5 < Date.now() && pG < 3) {
            uG.h.setItem("lastDecreaseLoadDistPromptTime", Date.now());
            yZ.NotificationProvider.showPromptPopup({
              title: "Lag (low FPS) caused by high chunk load distance. Decrease it?",
              confirmText: "general:yes",
              cancelText: "general:no",
              unlockPointerKey: "chunkLoadDistanceLagPopup"
            }).getResult().then((GG => {
              "notificationTornDown" !== GG && (GG ? (QG.gameBridge.send("setChunkAddDistance", {
                horizontal: fG,
                vertical: KG
              }), uG.h.setItem("chunkHorizAddDist", fG), uG.h.setItem("chunkVertAddDist", KG), oG.l.xh("updatedChunkLoadDist"), uG.h.setItem("decreaseLoadDistPromptDeniedCount", 0)) : uG.h.setItem("decreaseLoadDistPromptDeniedCount", pG + 1))
            }))
          }
        }));
        let kG = performance.now();
        bG = 0;
        let UG = null,
          YG = !document.hidden,
          VG = !1;

        function pG() {
          const GG = performance.now() - kG,
            ZG = 1e3 * bG / GG;
          YG && !VG && (null === UG && (UG = ZG), QS.b.setFps(ZG, UG)), bG = 0, kG = performance.now()
        }
        let fG = setInterval(pG, KS.c);

        function KG() {
          bG = 0, kG = performance.now(), clearInterval(fG), fG = setInterval(pG, KS.c)
        }

        function hG() {
          const GG = YG;
          YG = !document.hidden, !GG && YG && KG()
        }
        document.addEventListener("visibilitychange", hG);
        const dG = (0, oG.p)(TZ.o, (GG => {
          const bG = VG;
          VG = (0, TZ.r)(GG), bG && !VG && KG()
        }));
        return () => {
          yG(), document.removeEventListener("visibilitychange", hG), dG(), clearInterval(fG)
        }
      }))), [yG]), hS((() => {
        var GG;
        if (!bG || LG.current) return;
        const SG = ZG.current,
          yG = window.getComputedStyle(SG.parentElement),
          kG = null !== (GG = window.devicePixelRatio) && void 0 !== GG ? GG : 1,
          UG = parseFloat(yG.fontSize) * kG,
          YG = Math.round(3 * UG),
          VG = Math.round(UG),
          pG = zS(SG, yG, YG, VG, UG);
        if (!pG) return;
        const {
          ctx: fG,
          reset: QG
        } = pG, KG = GG => {
          QG(), fG.fillText(GG.toString(), SG.width / 2, SG.height / 2)
        };
        LG.current = KG, null !== wG.current && KG(wG.current)
      }), [bG]), (0, VG.jsxs)("div", {
        className: "FpsWrapperDiv",
        style: {
          display: bG ? "flex" : "none"
        },
        children: [(0, VG.jsx)("div", {
          className: "FpsLabel",
          children: "FPS"
        }), (0, VG.jsx)("canvas", {
          className: "FpsCanvas",
          ref: ZG,
          width: 48,
          height: 16
        })]
      })
    }));

    function oS(GG) {
      return Math.sign(GG) * Math.round(100 * Math.abs(GG))
    }

    function XS(GG) {
      let {
        getCoordinates: bG,
        showChunkCoords: ZG,
        columns: wG
      } = GG;
      const LG = (0, SG.useRef)(null);
      return hS((() => {
        var GG;
        const SG = LG.current,
          yG = window.getComputedStyle(SG.parentElement),
          kG = null !== (GG = window.devicePixelRatio) && void 0 !== GG ? GG : 1,
          UG = parseFloat(yG.fontSize) * kG,
          YG = Math.round(UG * rS(wG)),
          VG = Math.round(UG),
          pG = zS(SG, yG, YG, VG, UG);
        if (!pG) return;
        const {
          ctx: fG,
          reset: KG
        } = pG;
        let hG = !0,
          dG = 0,
          JG = 0,
          rG = 0,
          zG = 0,
          EG = 0,
          oG = 0;
        const XG = () => {
          hG = !0
        };
        document.fonts.load(fG.font).then(XG, XG);
        const uG = () => {
          KG(), XG()
        };
        SG.addEventListener("contextrestored", uG);
        let iG = performance.now();
        const CG = (0, vw.x)((() => {
          var GG, LG, yG, kG, YG, VG;
          const pG = performance.now();
          pG - iG >= 1e3 && (iG = pG, KG(), XG());
          const [uG, CG, WG] = bG(), mG = oS(uG), IG = oS(CG), FG = oS(WG);
          let vG = null;
          if (ZG) {
            const GG = QG.gameBridge.lookup("localPos", null);
            vG = (0, bb.hb)(GG[0], GG[1], GG[2])
          }
          const aG = null !== (GG = null === (LG = vG) || void 0 === LG ? void 0 : LG[0]) && void 0 !== GG ? GG : 0,
            cG = null !== (yG = null === (kG = vG) || void 0 === kG ? void 0 : kG[1]) && void 0 !== yG ? yG : 0,
            lG = null !== (YG = null === (VG = vG) || void 0 === VG ? void 0 : VG[2]) && void 0 !== YG ? YG : 0;
          if (!hG && mG === dG && IG === JG && FG === rG && aG === zG && cG === EG && lG === oG) return;
          hG = !1, dG = mG, JG = IG, rG = FG, zG = aG, EG = cG, oG = lG;
          const jG = [(mG / 100).toFixed(2), (IG / 100).toFixed(2), (FG / 100).toFixed(2)];
          vG && jG.unshift(`${aG} ${cG} ${lG}`), fG.clearRect(0, 0, SG.width, SG.height);
          const PG = SG.height / 2;
          let MG = 0;
          for (let bG = 0; bG < jG.length; bG++) {
            const GG = UG * wG[bG];
            fG.fillText(jG[bG], MG + GG / 2, PG, GG), MG += GG
          }
        }));
        return () => {
          CG(), SG.removeEventListener("contextrestored", uG)
        }
      }), [bG, ZG, wG]), (0, VG.jsx)("div", {
        className: "CoordinateUI",
        children: (0, VG.jsx)("canvas", {
          ref: LG,
          className: "CoordinateCanvas",
          width: 16 * rS(wG),
          height: 16
        })
      })
    }
    const uS = (0, SG.memo)((function() {
        const GG = (0, SG.useCallback)((() => {
          const GG = QG.gameBridge.lookup("localPos", null);
          return [GG[0], GG[1], GG[2]]
        }), []);
        return (0, VG.jsx)(XS, {
          getCoordinates: GG,
          showChunkCoords: !1,
          columns: dS
        })
      })),
      iS = (0, SG.memo)((function() {
        const GG = (0, SG.useCallback)((() => {
          const GG = QG.gameBridge.lookup("localPos", null),
            bG = fS.d.rK;
          let ZG = GG[0] % bG,
            wG = GG[1] % bG,
            SG = GG[2] % bG;
          return ZG < 0 && (ZG += bG), wG < 0 && (wG += bG), SG < 0 && (SG += bG), [ZG, wG, SG]
        }), []);
        return (0, VG.jsx)(XS, {
          getCoordinates: GG,
          showChunkCoords: !0,
          columns: JS
        })
      }));
    var CS = ZG(2036),
      WS = ZG(1302),
      mS = ZG(982),
      IS = ZG(1177),
      FS = ZG(37102),
      vS = ZG(1396),
      aS = ZG(3135);
    const cS = (0, SG.memo)((function() {
      const GG = (0, EG.i)("maxAuraLevel");
      return 0 === GG ? null : (0, VG.jsx)(lS, {
        maxLevel: GG
      })
    }));

    function lS(GG) {
      let {
        maxLevel: bG
      } = GG;
      const ZG = (0, EG.i)("auraPerLevel"),
        [wG, LG] = (0, SG.useState)((() => {
          var GG;
          return null !== (GG = QG.gameBridge.latest("aura")) && void 0 !== GG ? GG : void 0
        })),
        [yG, kG] = (0, SG.useState)((() => zG(wG))),
        [UG, YG] = (0, SG.useReducer)((GG => GG + 1), 0),
        pG = (0, SG.useRef)(null),
        fG = (0, SG.useRef)([]),
        KG = (0, SG.useRef)({
          width: 0,
          level: 0
        }),
        hG = (0, SG.useRef)(null),
        dG = (0, SG.useRef)(null);

      function JG() {
        if (null !== hG.current) return;
        if (0 === fG.current.length) return;
        const {
          width: GG,
          level: bG
        } = fG.current.shift();
        let ZG;
        if (bG !== KG.current.level && bG > KG.current.level !== GG > KG.current.width) {
          const wG = bG > KG.current.level;
          ZG = wG ? GG : 100 - GG, pG.current.style.transition = "none", pG.current.style.width = wG ? "0%" : "100%", pG.current.offsetWidth
        } else ZG = Math.abs(GG - KG.current.width);
        const wG = 100 * ZG / 20;
        pG.current.style.transition = `width ${wG}ms linear`, kG(GG), KG.current = {
          width: GG,
          level: bG
        }, fG.current.length > 0 && (hG.current = setTimeout((() => {
          hG.current = null, JG()
        }), wG))
      }

      function zG(GG) {
        return Math.floor(GG / ZG) === bG ? 100 : GG % ZG / ZG * 100
      }
      return (0, SG.useEffect)((() => () => {
        clearTimeout(hG.current), clearTimeout(dG.current), hG.current = null, dG.current = null
      }), []), (0, iG.b)("aura", (GG => {
        if (dG.current && clearTimeout(dG.current), null === GG) return clearTimeout(hG.current), dG.current = null, hG.current = null, fG.current = [], KG.current = {
          width: 0,
          level: 0
        }, LG(void 0), void kG(0);
        dG.current = setTimeout((() => {
          const bG = Math.floor(wG / ZG),
            SG = Math.floor(GG / ZG),
            yG = zG(GG);
          GG > wG && FS.c.play("exp_collect", .1).rate(1.6 + .5 * Math.random()), SG > bG ? (SG % 5 === 0 && FS.c.play("exp_levelup", .45).rate(.95 + .1 * Math.random()), YG(), fG.current.push({
            width: 100,
            level: bG
          })) : SG < bG && fG.current.push({
            width: 0,
            level: bG
          }), GG === wG && SG === bG || fG.current.push({
            width: yG,
            level: SG
          }), LG(GG), JG()
        }), 50)
      })), (0, rG.f)(), (0, VG.jsxs)("div", {
        className: "AuraBarWrapper",
        children: [(0, VG.jsxs)("div", {
          className: "AuraBarLabel SmallTextBold",
          children: [(0, VG.jsx)(vS.d, {
            showSignal: UG,
            particleElement: (0, VG.jsx)("img", {
              src: (0, aS.i)("glint"),
              alt: ""
            })
          }), (0, VG.jsx)("img", {
            className: "AuraBarLabelImage",
            src: (0, aS.i)("glint"),
            alt: "aura"
          }), (0, VG.jsx)("div", {
            className: "AuraBarLabelText",
            children: Math.floor((null !== wG && void 0 !== wG ? wG : 0) / ZG)
          })]
        }), (0, VG.jsx)("div", {
          className: "AuraBar",
          children: (0, VG.jsx)("div", {
            ref: pG,
            className: "AuraBarBackground",
            style: {
              width: `${yG}%`
            }
          })
        })]
      })
    }
    var jS = ZG(2546);

    function PS(GG) {
      GG.timed && (GG.endedAnimation = GG.timed.animation, GG.timed = null)
    }
    const MS = (0, SG.memo)((function() {
      const GG = (0, SG.useRef)(null),
        bG = (0, SG.useRef)(null),
        ZG = (0, SG.useRef)({
          timed: null,
          endedAnimation: null
        });
      return (0, UG.g)("middleScreenBarInitiate", (GG => {
        var wG;
        let {
          duration: SG,
          lS: LG,
          horizBarRemOffset: yG
        } = GG;
        const kG = ZG.current;
        PS(kG);
        const UG = bG.current;
        if (!(SG >= 0) || !UG) return;
        null === (wG = kG.endedAnimation) || void 0 === wG || wG.cancel(), kG.endedAnimation = null;
        const YG = UG.animate([{
          transform: "scaleX(0)"
        }, {
          transform: "scaleX(1)"
        }], {
          duration: SG,
          fill: "forwards"
        });
        kG.timed = {
          lS: LG,
          horizBarRemOffset: yG,
          animation: YG
        }
      })), (0, UG.g)("middleScreenBarRemove", (() => {
        PS(ZG.current)
      })), (0, SG.useEffect)((() => {
        const wG = ZG.current;
        let SG = Number.NaN,
          LG = Number.NaN,
          yG = Number.NaN;
        return (0, vw.q)((() => {
          var ZG, kG, UG, YG;
          const VG = GG.current,
            pG = bG.current;
          if (!VG || !pG) return;
          null !== (ZG = wG.timed) && void 0 !== ZG && ZG.lS && "finished" === wG.timed.animation.playState && PS(wG), null === (kG = wG.endedAnimation) || void 0 === kG || kG.cancel(), wG.endedAnimation = null;
          let fG = wG.timed ? 1 : 0;
          if (!wG.timed) {
            const GG = QG.gameBridge.lookup("momentumFrac", null);
            fG = GG > 0 ? 1 : 0, GG !== yG && (yG = GG, pG.style.transform = `scaleX(${GG})`)
          }
          const KG = null !== (UG = null === (YG = wG.timed) || void 0 === YG ? void 0 : YG.horizBarRemOffset) && void 0 !== UG ? UG : 0;
          KG === SG && fG === LG || (SG = KG, LG = fG, VG.style.transform = `translateX(calc(-50% + ${KG}rem)) scaleX(${fG})`)
        }))
      }), []), (0, VG.jsx)("div", {
        className: "MiddleScreenBar",
        ref: GG,
        children: (0, VG.jsx)("div", {
          className: "MiddleScreenBarFill",
          ref: bG
        })
      })
    }));
    var AS = ZG(4695),
      sS = ZG(2722);

    function qS() {
      const {
        t: GG
      } = (0, vG.w)(), bG = (0, UG.j)("serverUpdating", null), ZG = (0, sS.e)(250, null !== bG);
      return null === bG || ZG - bG > 3e4 ? null : (0, VG.jsxs)("div", {
        className: "UpdateCountdownBanner",
        children: [(0, VG.jsx)("div", {
          className: "UpdateCountdownBannerTitle",
          children: GG("updateWaiting:updatingIn", {
            countdown: (0, AS.n)(bG - ZG)
          })
        }), (0, VG.jsx)("div", {
          children: GG("updateWaiting:bringYouBack")
        })]
      })
    }
    var nS = ZG(37274),
      gS = ZG(1956);
    const eS = [{
        translationKey: "general:interact"
      }],
      RS = (0, SG.memo)((function() {
        const GG = (0, EG.i)("crosshairText"),
          {
            interactPrompt: bG,
            blockText: ZG,
            neededTool: wG
          } = (0, iG.f)("crosshairTarget"),
          {
            isTouchScreen: LG
          } = (0, CG.o)(["isTouchScreen"]),
          yG = (0, mG.w)(),
          kG = (0, FG.c)("alt-fire");
        (0, SG.useEffect)((() => {
          QG.gameBridge.send("setCrosshairInteractPrompt", !LG || yG ? "key" : "touch")
        }), [LG, yG]);
        const [pG, fG] = (0, SG.useReducer)((GG => GG + 1), 0);
        (0, UG.g)("customBindingsChanged", fG);
        var KG;
        if (null !== bG && (yG && null !== kG || !LG && null !== (0, gS.x)("alt-fire"))) return (0, VG.jsxs)("div", {
          className: "CrosshairText SmallTextBold InteractPrompt",
          children: [(0, VG.jsx)(WG.e, {
            noaAction: "alt-fire"
          }), (0, VG.jsx)(YG.c, {
            text: null !== (KG = bG.label) && void 0 !== KG ? KG : eS
          })]
        });
        let hG = null;
        return null !== ZG ? hG = ZG : null !== GG && "" !== GG ? hG = GG : null !== wG && (hG = [{
          icon: wG,
          style: {
            opacity: .8
          }
        }, {
          str: " needed",
          style: {
            opacity: .8
          }
        }]), hG ? (0, VG.jsx)("div", {
          className: "CrosshairText SmallTextBold",
          children: (0, VG.jsx)(YG.c, {
            text: hG
          })
        }) : null
      }));
    var TS = ZG(2549);
    const HS = (0, SG.memo)((function() {
      var GG;
      const {
        interactPrompt: bG
      } = (0, iG.f)("crosshairTarget"), {
        openInGameMenuName: ZG,
        openEverythingMenuName: wG
      } = (0, CG.o)(["openInGameMenuName", "openEverythingMenuName"]), SG = (0, UG.j)("aimingOverlay", "none"), LG = (0, DG.j)(), yG = (0, TS.e)();
      return null === bG || null !== ZG || null !== wG || "sniper" === SG || LG || yG ? null : (0, VG.jsx)(tS, {
        label: null !== (GG = bG.label) && void 0 !== GG ? GG : eS
      })
    }));

    function tS(GG) {
      let {
        label: bG
      } = GG;
      const ZG = jb(xG.e.Interact, !1);
      return (0, SG.useEffect)((() => (oG.l.xh(zb.w), () => {
        oG.l.xh(zb.w)
      })), []), (0, VG.jsx)("div", {
        ref: ZG,
        className: "TouchInteractHit",
        children: (0, VG.jsxs)("div", {
          className: "TouchInteractKey",
          children: [(0, VG.jsx)("span", {
            className: "TouchInteractIcon",
            children: (0, VG.jsx)(AG.c, {
              name: "hand-back-point-up"
            })
          }), (0, VG.jsx)(YG.c, {
            text: bG
          })]
        })
      })
    }
    var DS = ZG(59),
      NS = ZG(34384),
      OS = ZG(1721),
      xS = ZG(34393);
    const BS = "ScreenshotMode";
    let GL = [];
    const bL = new Set;

    function ZL(GG) {
      GL = GG;
      for (const bG of bL) bG(GG)
    }
    const wL = (0, SG.memo)((function() {
      const {
        screenshotMode: GG,
        isTouchScreen: bG,
        openEverythingMenuName: ZG,
        openInGameMenuName: wG
      } = (0, CG.o)(["screenshotMode", "isTouchScreen", "openEverythingMenuName", "openInGameMenuName"]), LG = null !== ZG || null !== wG, yG = (0, iG.f)("localPlayerAlive");
      return (0, SG.useEffect)((() => {
        !GG || !LG && bG && yG || (0, NS.g)()
      }), [GG, LG, bG, yG]), (0, SG.useEffect)((() => NS.g), []), (0, SG.useEffect)((() => {
        if (GG) return document.documentElement.classList.add(BS), (0, BG.j)(NG.t.ScreenshotMode, NG.t.ScreenshotMode, "screenshotMode"), () => {
          document.documentElement.classList.remove(BS), (0, BG.j)(NG.t.ScreenshotMode, 0, "screenshotMode")
        }
      }), [GG]), GG ? (0, DS.createPortal)((0, VG.jsx)(SL, {}), document.body) : null
    }));

    function SL() {
      const {
        t: GG
      } = (0, vG.w)(), [bG, ZG] = (0, SG.useState)(!1), [wG, LG] = (0, SG.useState)(0), [yG, kG] = (0, SG.useState)(null), UG = function() {
        const [GG, bG] = (0, SG.useState)(GL);
        return (0, SG.useEffect)((() => (bL.add(bG), bG(GL), () => {
          bL.delete(bG)
        })), []), GG
      }(), YG = (0, SG.useRef)(), pG = (0, SG.useRef)(!1);
      (0, SG.useEffect)((() => () => {
        clearTimeout(YG.current)
      }), []);
      const fG = GG => {
          clearTimeout(YG.current), kG(GG), GG && (YG.current = setTimeout((() => {
            kG(null)
          }), 2e3))
        },
        QG = (bG, ZG) => {
          switch (bG) {
            case "saved":
              fG(GG("screenshotMode:saved"));
              break;
            case "denied":
              fG(GG("screenshotMode:denied"));
              break;
            case "needsTap":
              GL.length >= 8 ? (console.error("Screenshot mode: 8 photos already wait on Save photo"), fG(GG("screenshotMode:saveWaitingFirst"))) : ZL([...GL, ZG])
          }
        },
        KG = bG => {
          console.error("Screenshot mode: the photo wasn't saved", bG), fG(GG("screenshotMode:failed"))
        };
      return (0, VG.jsxs)("div", {
        className: "ScreenshotModeOverlay",
        children: [(0, VG.jsx)("div", {
          className: "ScreenshotModeViewfinder",
          "aria-hidden": !0
        }), (0, VG.jsx)("div", {
          className: "ScreenshotModeCentre",
          "aria-hidden": !0
        }), wG > 0 && (0, VG.jsx)("div", {
          className: "ScreenshotModeFlash"
        }, wG), (0, VG.jsx)("button", {
          type: "button",
          className: "ScreenshotModeButton ScreenshotModeBack",
          "aria-label": GG("screenshotMode:back"),
          onClick: NS.g,
          children: (0, VG.jsx)(AG.c, {
            name: "arrow-left"
          })
        }), (0, VG.jsx)("button", {
          type: "button",
          className: "ScreenshotModeButton ScreenshotModeShutter",
          "aria-label": GG("screenshotMode:takePhoto"),
          "aria-busy": bG,
          onClick: () => {
            (async () => {
              if (!bG) {
                ZG(!0), fG(null);
                try {
                  const GG = await (0, NS.k)();
                  LG((GG => GG + 1)), QG(await (0, xS.f)(GG), GG)
                } catch (GG) {
                  KG(GG)
                } finally {
                  ZG(!1)
                }
              }
            })()
          },
          children: (0, VG.jsx)(AG.c, {
            name: "camera-alt"
          })
        }), null !== yG ? (0, VG.jsx)("div", {
          className: "ScreenshotModeNote",
          role: "status",
          children: yG
        }) : UG.length > 0 && (0, VG.jsxs)("button", {
          type: "button",
          className: "ScreenshotModeNote ScreenshotModeSaveNote",
          onClick: () => {
            if (pG.current) return;
            pG.current = !0;
            const [GG] = GL;
            ZL(GL.slice(1));
            const bG = bG => {
              console.warn("Screenshot mode: downloading a photo the share sheet didn't take", bG), (0, OS.b)(GG, GG.name), QG("saved", GG)
            };
            (0, xS.j)(GG).then((ZG => {
              "needsTap" === ZG ? bG(ZG) : QG(ZG, GG)
            }), bG).catch(KG).finally((() => {
              pG.current = !1
            }))
          },
          children: [(0, VG.jsx)(AG.c, {
            name: "image"
          }), GG("screenshotMode:savePhoto"), UG.length > 1 && ` (${UG.length})`]
        })]
      })
    }
    var LL = ZG(4786),
      yL = ZG(4851);
    const kL = (0, SG.forwardRef)((function(GG, bG) {
        let {
          text: ZG,
          className: wG,
          children: SG
        } = GG;
        return ZG.hasText ? (0, VG.jsx)("div", {
          ref: bG,
          className: yG()("HudTextPanel", wG, {
            NoBackground: !ZG.showBackground
          }),
          children: null !== SG && void 0 !== SG ? SG : (0, VG.jsx)(YG.c, {
            text: ZG.content
          })
        }) : null
      })),
      UL = (0, SG.memo)((function() {
        const GG = (0, EG.l)("middleTextTop"),
          [bG, ZG] = (0, SG.useState)(null),
          wG = (0, nw.i)(bG);
        return GG.hasText ? (0, VG.jsx)("div", {
          className: yG()("MiddleTextTopContainer", {
            MiddleTextTopBelow: wG
          }),
          children: (0, VG.jsx)(kL, {
            ref: ZG,
            className: "MiddleTextTop",
            text: GG
          })
        }) : null
      })),
      YL = (0, SG.memo)((function() {
        const GG = (0, EG.e)();
        return (0, VG.jsx)(VG.Fragment, {
          children: GG.map(((GG, bG) => (0, VG.jsx)(kL, {
            className: "HeaderChip",
            text: GG
          }, bG)))
        })
      }));
    var VL = ZG(3612),
      pL = ZG(4628);
    const fL = (0, SG.memo)((function() {
      const {
        t: GG
      } = (0, vG.w)(), [bG, ZG] = (0, SG.useState)(!1), wG = (0, SG.useRef)(!1), LG = function(GG) {
        let {
          gameNameWithVariation: bG,
          lobbyName: ZG
        } = GG;
        if ((0, mS.h)(bG)) return QL;
        if ((0, IS.F)(ZG)) return KL;
        return null
      }((0, iG.f)("connectedGame"));
      if (!LG || bG) return null;
      const yG = pL.c[LG.target];
      return (0, VG.jsx)(MG.h, {
        tooltipInner: (0, VG.jsx)("div", {
          children: GG(yG.reportButtonTooltip)
        }),
        children: (0, VG.jsx)("div", {
          children: (0, VG.jsx)(gZ.I, {
            onClick: () => {
              wG.current || (wG.current = !0, (0, pL.g)(LG.reportPolicyIds, yG).then((GG => {
                null !== GG && void 0 !== GG && GG.selectedPolicyId && (QG.gameBridge.send("reportLobbyOrGame", {
                  target: LG.target,
                  Uk: GG.selectedPolicyId,
                  details: GG.Yk
                }), ZG(!0))
              })).finally((() => {
                wG.current = !1
              })))
            }
          })
        })
      })
    }));
    const QL = {
        target: "customGame",
        reportPolicyIds: VL.f
      },
      KL = {
        target: "lobby",
        reportPolicyIds: VL.g
      };
    var hL = ZG(8837),
      dL = ZG(37295),
      JL = ZG(37309),
      rL = ZG(37317),
      zL = ZG(37323),
      EL = ZG(37301);
    let oL = !1;
    async function XL(GG, bG) {
      var ZG, wG;
      const {
        files: SG
      } = bG, LG = SG.replayKey();
      if (null === LG) return "none";
      if (oL) throw new Error(EL.e.saveBusy.text);
      const yG = null !== (ZG = null === (wG = SG.saveRefusal) || void 0 === wG ? void 0 : wG.call(SG)) && void 0 !== ZG ? ZG : null;
      if (null !== yG) throw new Error(yG);
      oL = !0;
      try {
        return await async function(GG, bG, ZG) {
          const {
            files: wG
          } = bG, SG = () => wG.replayKey() === ZG, LG = (GG, bG) => {
            SG() && wG.markSaved(GG, bG)
          };
          let yG = null;
          if (bG.pickerSupported()) {
            try {
              if (yG = await bG.chooseFile(GG ? null : wG.fileHandle()), null === yG) return "RZ"
            } catch (UG) {
              bG.onFallback(UG)
            }
            if (!SG()) throw new Error(EL.e.saveClosed.text)
          }
          const kG = await wG.encode();
          if (null === kG) {
            if (null !== yG) throw new Error(EL.e.saveClosed.text);
            return "none"
          }
          if (null !== yG) try {
            return await bG.write(yG, kG), LG(yG), "written"
          } catch (UG) {
            bG.onFallback(UG)
          }
          return LG(null, bG.download(kG)), "downloaded"
        }(GG, bG, LG)
      } finally {
        oL = !1
      }
    }
    var uL = ZG(37353),
      iL = ZG(4561);
    const CL = [1, 2, 4, 8, 16, 32, 64];

    function WL(GG, bG) {
      return Math.max(0, Math.min(GG, bG))
    }

    function mL(GG, bG, ZG) {
      return ZG <= bG ? 0 : (GG - bG) / (ZG - bG) * 100
    }

    function IL(GG, bG, ZG) {
      const wG = ZG - bG;
      return Math.round(bG + GG / 100 * wG)
    }

    function FL(GG, bG) {
      const ZG = Math.floor(GG / bG / 60),
        wG = Math.floor(GG / bG % 60),
        SG = GG % bG;
      return `${ZG.toString().padStart(2,"0")}:${wG.toString().padStart(2,"0")}:${SG.toString().padStart(2,"0")}`
    }

    function vL(GG) {
      return Number.isInteger(GG) || CL.includes(GG) ? `${Math.round(GG)}\xd7` : `${GG.toFixed(1)}\xd7`
    }

    function aL(GG, bG) {
      const ZG = CL.indexOf(GG);
      if (-1 !== ZG) return "in" === bG ? CL[Math.min(ZG + 1, CL.length - 1)] : CL[Math.max(ZG - 1, 0)];
      if ("in" === bG) {
        for (const bG of CL)
          if (bG >= GG) return bG;
        return GG
      }
      for (let wG = CL.length - 1; wG >= 0; wG--)
        if (CL[wG] <= GG) return CL[wG];
      return CL[0]
    }

    function cL(GG, bG) {
      const ZG = bG.getBoundingClientRect();
      if (ZG.width <= 0) return 0;
      const wG = (GG - ZG.left) / ZG.width * 100;
      return Math.max(0, Math.min(100, wG))
    }

    function lL(GG, bG) {
      return bG <= 0 ? 0 : GG / bG * 100
    }

    function jL(GG, bG, ZG) {
      const wG = [];
      let SG = Math.ceil(GG / ZG) * ZG;
      for (; SG <= bG;) wG.push(SG), SG += ZG;
      return wG
    }
    var PL = ZG(37361);
    const ML = [{
        label: "Linear",
        easing: PL.i
      }, {
        label: "Ease",
        easing: [.25, .1, .25, 1]
      }, {
        label: "Ease In",
        easing: PL.f
      }, {
        label: "Ease Out",
        easing: PL.h
      }, {
        label: "Ease In Out",
        easing: PL.e
      }],
      AL = 200,
      sL = 150;

    function qL(GG) {
      const bG = GG => Number(GG.toFixed(3)).toString();
      return `cubic-bezier(${bG(GG[0])}, ${bG(GG[1])}, ${bG(GG[2])}, ${bG(GG[3])})`
    }

    function nL(GG, bG) {
      return {
        cx: 25 + GG * sL,
        cy: 25 + (1 - bG) * sL
      }
    }

    function gL(GG, bG, ZG) {
      const wG = GG - ZG.left,
        SG = bG - ZG.top;
      return {
        x: Gw.c.clamp((wG - 25) / sL, 0, 1),
        y: Gw.c.clamp(1 - (SG - 25) / sL, -1, 2)
      }
    }

    function eL(GG, bG, ZG, wG, SG) {
      return {
        x: (0, PL.n)(GG, ZG, SG),
        y: (0, PL.n)(bG, wG, SG)
      }
    }
    const RL = (0, SG.memo)((function(GG) {
      let {
        value: bG,
        onChange: ZG
      } = GG;
      const wG = (0, SG.useRef)(null),
        LG = (0, SG.useRef)(null),
        [yG, kG] = (0, SG.useState)(null),
        UG = (0, SG.useCallback)((() => {
          const GG = wG.current;
          if (!GG) return;
          const ZG = GG.getContext("2d");
          if (!ZG) return;
          const SG = window.devicePixelRatio || 1;
          GG.width = AL * SG, GG.height = AL * SG, ZG.setTransform(SG, 0, 0, SG, 0, 0), ZG.clearRect(0, 0, AL, AL), ZG.fillStyle = "rgba(38, 52, 93, 0.85)", ZG.fillRect(0, 0, AL, AL), ZG.beginPath();
          const LG = nL(0, 0),
            kG = nL(1, 1);
          ZG.moveTo(LG.cx, LG.cy), ZG.lineTo(kG.cx, kG.cy), ZG.strokeStyle = "rgba(164, 164, 164, 0.35)", ZG.setLineDash([3, 3]), ZG.stroke(), ZG.setLineDash([]);
          const [UG, YG, VG, pG] = bG, fG = nL(UG, YG), QG = nL(VG, pG);
          ZG.strokeStyle = "rgba(252, 211, 115, 0.55)", ZG.lineWidth = 1.5, ZG.beginPath(), ZG.moveTo(LG.cx, LG.cy), ZG.lineTo(fG.cx, fG.cy), ZG.moveTo(kG.cx, kG.cy), ZG.lineTo(QG.cx, QG.cy), ZG.stroke(), ZG.strokeStyle = "#fcd373", ZG.lineWidth = 2, ZG.beginPath();
          for (let bG = 0; bG <= 50; bG++) {
            const GG = eL(UG, YG, VG, pG, bG / 50),
              wG = nL(GG.x, GG.y);
            0 === bG ? ZG.moveTo(wG.cx, wG.cy) : ZG.lineTo(wG.cx, wG.cy)
          }
          ZG.stroke();
          const KG = (GG, bG, wG) => {
            ZG.beginPath(), ZG.arc(GG, bG, wG ? 6 : 5, 0, 2 * Math.PI), ZG.fillStyle = wG ? "#ffb914" : "#fcd373", ZG.fill(), ZG.strokeStyle = "#1a1f2e", ZG.lineWidth = 1.5, ZG.stroke()
          };
          KG(fG.cx, fG.cy, "p1" === yG), KG(QG.cx, QG.cy, "p2" === yG)
        }), [yG, bG]);
      (0, SG.useEffect)((() => {
        UG()
      }), [UG]);
      const YG = (0, SG.useCallback)(((GG, SG) => {
          const yG = wG.current,
            kG = LG.current;
          if (!yG || !kG) return;
          const UG = yG.getBoundingClientRect(),
            {
              x: YG,
              y: VG
            } = gL(GG, SG, UG);
          ZG("p1" === kG ? [YG, VG, bG[2], bG[3]] : [bG[0], bG[1], YG, VG])
        }), [ZG, bG]),
        pG = (0, SG.useCallback)((GG => {
          const ZG = wG.current;
          if (!ZG) return;
          const SG = ZG.getBoundingClientRect();
          let {
            x: yG,
            y: UG
          } = gL(GG.clientX, GG.clientY, SG);
          yG = Gw.c.clamp(yG, 0, 1), UG = Gw.c.clamp(UG, 0, 1);
          const [VG, pG, fG, QG] = bG.map((GG => Gw.c.clamp(GG, 0, 1))), KG = Math.hypot(yG - VG, UG - pG), hG = Math.hypot(yG - fG, UG - QG), dG = KG <= hG ? "p1" : "p2";
          ("p1" === dG ? KG : hG) > .12 || (LG.current = dG, kG(dG), ZG.setPointerCapture(GG.pointerId), YG(GG.clientX, GG.clientY))
        }), [YG, bG]),
        fG = (0, SG.useCallback)((GG => {
          LG.current && YG(GG.clientX, GG.clientY)
        }), [YG]),
        QG = (0, SG.useCallback)((GG => {
          LG.current = null, kG(null), GG.currentTarget.hasPointerCapture(GG.pointerId) && GG.currentTarget.releasePointerCapture(GG.pointerId)
        }), []);
      return (0, VG.jsxs)("div", {
        className: "CubicBezierEasingEditor",
        children: [(0, VG.jsx)("canvas", {
          ref: wG,
          className: "CubicBezierEasingEditorCanvas",
          style: {
            width: AL,
            height: AL
          },
          onPointerDown: pG,
          onPointerMove: fG,
          onPointerUp: QG,
          onPointerCancel: QG
        }), (0, VG.jsx)("span", {
          className: "CubicBezierEasingEditorReadout",
          children: qL(bG)
        })]
      })
    }));
    var TL = ZG(1626),
      HL = ZG(1606);
    const tL = 12;

    function DL(GG) {
      return {
        left: GG.left + GG.width / 2,
        top: GG.top - 8
      }
    }

    function NL(GG, bG) {
      const [ZG, wG] = (0, SG.useState)(null);
      return (0, SG.useLayoutEffect)((() => {
        const ZG = GG.current;
        if (!ZG) return;
        const {
          width: SG,
          height: LG
        } = ZG.getBoundingClientRect();
        wG(function(GG, bG, ZG) {
          const wG = window.innerWidth,
            SG = window.innerHeight,
            LG = bG / 2;
          let yG = GG.left + GG.width / 2;
          yG = Math.max(tL + LG, Math.min(yG, wG - tL - LG));
          const kG = GG.top - 8 - tL,
            UG = SG - GG.bottom - 8 - tL,
            YG = kG < ZG && UG >= kG;
          let VG;
          YG ? (VG = GG.bottom + 8, VG + ZG > SG - tL && (VG = SG - tL - ZG), VG = Math.max(tL, VG)) : (VG = GG.top - 8, VG - ZG < tL && (VG = tL + ZG));
          return {
            left: yG,
            top: VG,
            placeBelow: YG
          }
        }(bG, SG, LG))
      }), [bG, GG]), ZG
    }

    function OL(GG, bG, ZG) {
      (0, SG.useEffect)((() => (0, HL.d)("pointerdown", (wG => {
        var SG, LG;
        const yG = wG.target;
        yG instanceof Node && (null !== (SG = GG.current) && void 0 !== SG && SG.contains(yG) || null !== ZG && void 0 !== ZG && null !== (LG = ZG.current) && void 0 !== LG && LG.contains(yG) || (0, TL.g)(yG) || bG())
      }))), [ZG, bG, GG])
    }

    function xL(GG) {
      let {
        label: bG,
        value: ZG,
        onChange: wG
      } = GG;
      return (0, VG.jsxs)("div", {
        className: "ReplayKeyframePopoverVec3",
        children: [(0, VG.jsx)("span", {
          className: "ReplayKeyframePopoverVec3Label",
          children: bG
        }), (0, VG.jsx)("div", {
          className: "ReplayKeyframePopoverVec3Inputs",
          children: ["X", "Y", "Z"].map(((GG, bG) => (0, VG.jsxs)("label", {
            className: "ReplayKeyframePopoverAxis",
            children: [(0, VG.jsx)("span", {
              children: GG
            }), (0, VG.jsx)("input", {
              type: "number",
              step: "any",
              value: ZG[bG],
              onChange: GG => {
                const SG = Number.parseFloat(GG.target.value);
                if (Number.isNaN(SG)) return;
                const LG = [ZG[0], ZG[1], ZG[2]];
                LG[bG] = SG, wG(LG)
              }
            })]
          }, GG)))
        })]
      })
    }
    const BL = (0, SG.memo)((function(GG) {
        var bG, ZG, wG;
        let {
          keyframe: LG,
          anchor: kG,
          hasOutgoingSegment: UG,
          onClose: YG,
          onApply: pG,
          onDelete: fG,
          onUseCurrentCamera: QG
        } = GG;
        const KG = (0, SG.useRef)(null),
          hG = NL(KG, kG.rect),
          [dG, JG] = (0, SG.useState)((() => [LG.position[0], LG.position[1], LG.position[2]])),
          [rG, zG] = (0, SG.useState)((() => [LG.direction[0], LG.direction[1], LG.direction[2]])),
          [EG, oG] = (0, SG.useState)((() => LG.easing));
        (0, SG.useEffect)((() => {
          JG([LG.position[0], LG.position[1], LG.position[2]]), zG([LG.direction[0], LG.direction[1], LG.direction[2]]), oG(LG.easing)
        }), [LG]), OL(KG, YG);
        const XG = (0, SG.useCallback)((() => {
            pG({
              Tp: LG.Tp,
              position: dG,
              direction: rG,
              easing: EG
            }), YG()
          }), [rG, EG, LG.Tp, pG, YG, dG]),
          uG = (0, SG.useCallback)((() => {
            fG(LG.Tp), YG()
          }), [LG.Tp, fG, YG]),
          iG = (0, SG.useCallback)((() => {
            const GG = QG();
            GG && (JG([GG.position[0], GG.position[1], GG.position[2]]), zG([GG.direction[0], GG.direction[1], GG.direction[2]]))
          }), [QG]),
          CG = DL(kG.rect);
        return (0, VG.jsxs)("div", {
          ref: KG,
          className: yG()("ReplayViewerPopover ReplayKeyframePopover", {
            Below: null !== (bG = null === hG || void 0 === hG ? void 0 : hG.placeBelow) && void 0 !== bG && bG,
            Positioned: null !== hG
          }),
          style: {
            left: `${null!==(ZG=null===hG||void 0===hG?void 0:hG.left)&&void 0!==ZG?ZG:CG.left}px`,
            top: `${null!==(wG=null===hG||void 0===hG?void 0:hG.top)&&void 0!==wG?wG:CG.top}px`
          },
          onPointerDown: GG => {
            GG.stopPropagation()
          },
          children: [(0, VG.jsxs)("div", {
            className: "ReplayKeyframePopoverHeader",
            children: [(0, VG.jsx)("span", {
              className: "ReplayKeyframePopoverTitle",
              children: "Camera keyframe"
            }), (0, VG.jsxs)("span", {
              className: "ReplayKeyframePopoverTick",
              children: ["Tick ", kG.Tp]
            })]
          }), (0, VG.jsx)(xL, {
            label: "Position",
            value: dG,
            onChange: JG
          }), (0, VG.jsx)(xL, {
            label: "Direction",
            value: rG,
            onChange: zG
          }), UG && (0, VG.jsxs)("div", {
            className: "ReplayKeyframePopoverEasing",
            children: [(0, VG.jsx)("span", {
              className: "ReplayKeyframePopoverEasingLabel",
              children: "Easing to next"
            }), (0, VG.jsx)("div", {
              className: "ReplayKeyframePopoverEasingPresets",
              children: ML.map((GG => {
                const bG = (ZG = EG, wG = GG.easing, ZG[0] === wG[0] && ZG[1] === wG[1] && ZG[2] === wG[2] && ZG[3] === wG[3]);
                var ZG, wG;
                return (0, VG.jsx)(gZ.K, {
                  className: yG()("ReplayKeyframePopoverPreset", {
                    Active: bG
                  }),
                  onClick: () => {
                    oG(GG.easing)
                  },
                  children: GG.label
                }, GG.label)
              }))
            }), (0, VG.jsx)(RL, {
              value: EG,
              onChange: oG
            })]
          }), (0, VG.jsxs)("div", {
            className: "ReplayKeyframePopoverActions",
            children: [(0, VG.jsx)(gZ.d, {
              className: "ReplayViewerCompactButton",
              onClick: iG,
              children: "Use current view"
            }), (0, VG.jsx)(gZ.k, {
              className: "ReplayViewerCompactButton",
              onClick: XG,
              children: "Apply"
            }), (0, VG.jsx)(gZ.C, {
              className: "ReplayViewerCompactButton",
              onClick: uG,
              children: "Delete"
            })]
          })]
        })
      })),
      Gy = (0, SG.memo)((function(GG) {
        var bG, ZG, wG;
        let {
          anchor: LG,
          hasPlaybackMark: kG,
          onClose: UG,
          onMark: YG,
          onZoom: pG,
          onCrop: fG,
          onDeleteKeyframes: QG,
          onClearMark: KG
        } = GG;
        const hG = (0, SG.useRef)(null),
          dG = NL(hG, LG.rect),
          JG = DL(LG.rect),
          rG = {
            startTick: LG.startTick,
            endTick: LG.endTick
          },
          zG = LG.endTick > LG.startTick;
        return OL(hG, UG), (0, VG.jsx)("div", {
          ref: hG,
          className: yG()("ReplayViewerPopover ReplayTimelineSelectionPopover", {
            Below: null !== (bG = null === dG || void 0 === dG ? void 0 : dG.placeBelow) && void 0 !== bG && bG,
            Positioned: null !== dG
          }),
          style: {
            left: `${null!==(ZG=null===dG||void 0===dG?void 0:dG.left)&&void 0!==ZG?ZG:JG.left}px`,
            top: `${null!==(wG=null===dG||void 0===dG?void 0:dG.top)&&void 0!==wG?wG:JG.top}px`
          },
          onPointerDown: GG => {
            GG.stopPropagation()
          },
          children: (0, VG.jsxs)("div", {
            className: "ReplayTimelineSelectionPopoverActions",
            children: [(0, VG.jsx)(gZ.k, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                YG(rG)
              },
              disabled: !zG,
              children: (0, VG.jsx)("span", {
                children: " Play range "
              })
            }), (0, VG.jsx)(gZ.d, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                pG(rG)
              },
              children: (0, VG.jsx)("span", {
                children: " Zoom "
              })
            }), (0, VG.jsx)(gZ.K, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                fG(rG)
              },
              disabled: !zG,
              children: (0, VG.jsx)("span", {
                children: " Crop "
              })
            }), (0, VG.jsx)(gZ.K, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                QG(rG)
              },
              children: (0, VG.jsx)("span", {
                children: " Delete all keyframes "
              })
            }), kG && (0, VG.jsx)(gZ.K, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                KG()
              },
              children: (0, VG.jsx)("span", {
                children: " Clear range "
              })
            })]
          })
        })
      })),
      by = (0, SG.memo)((function(GG) {
        var bG, ZG;
        let {
          maxTick: wG,
          displayTick: LG,
          Fv: kG,
          cameraKeyframes: UG,
          playbackMark: YG,
          onSeek: pG,
          onPause: fG,
          onScrubTickChange: QG,
          onMoveCameraKeyframe: KG,
          onUpdateCameraKeyframe: hG,
          onDeleteCameraKeyframe: dG,
          onUseCurrentCamera: JG,
          onMarkRange: rG,
          onCropRange: zG,
          onDeleteKeyframesInRange: EG,
          onClearMark: oG,
          zoomLevel: XG,
          onZoomLevelChange: uG
        } = GG;
        const iG = (0, SG.useRef)(null),
          CG = (0, SG.useRef)(null),
          WG = (0, SG.useRef)(!1),
          mG = (0, SG.useRef)(!1),
          IG = (0, SG.useRef)(XG),
          FG = (0, SG.useRef)(null),
          vG = (0, SG.useRef)(null),
          aG = (0, SG.useRef)(null),
          cG = (0, SG.useRef)(null),
          [lG, jG] = (0, SG.useState)(null),
          [PG, MG] = (0, SG.useState)(LG),
          [AG, sG] = (0, SG.useState)(null),
          [qG, nG] = (0, SG.useState)(null),
          [gG, eG] = (0, SG.useState)(null),
          [RG, TG] = (0, SG.useState)(null),
          HG = (0, SG.useMemo)((() => UG.map((GG => GG.Tp))), [UG]),
          tG = null !== lG && void 0 !== lG ? lG : LG,
          {
            viewStart: DG,
            viewEnd: NG
          } = (0, SG.useMemo)((() => function(GG) {
            const bG = GG.maxTick + 1,
              ZG = Math.max(1, Math.ceil(bG / GG.zoomLevel)),
              wG = Math.floor(ZG / 2);
            let SG = GG.centerTick - wG;
            return SG = Math.max(0, Math.min(SG, GG.maxTick - ZG + 1)), {
              viewStart: SG,
              viewEnd: Math.min(GG.maxTick, SG + ZG - 1)
            }
          }({
            maxTick: wG,
            zoomLevel: XG,
            centerTick: PG
          })), [wG, XG, PG]);
        (0, SG.useEffect)((() => {
          if (null !== lG || null !== vG.current || null !== aG.current || null !== cG.current) return;
          if (WG.current) return void(WG.current = !1);
          if (mG.current) return void(mG.current = !1);
          const GG = IG.current !== XG;
          IG.current = XG, GG && MG(LG)
        }), [XG, LG, lG]);
        const OG = (0, SG.useCallback)((GG => {
            let bG = WL(GG, wG);
            return YG && (bG = Math.max(YG.inTick, Math.min(bG, YG.outTick))), bG
          }), [wG, YG]),
          xG = (0, SG.useCallback)(((GG, bG) => {
            const ZG = OG(GG);
            pG(ZG), bG && MG(ZG)
          }), [OG, pG]),
          BG = (0, SG.useCallback)(((GG, bG) => {
            const ZG = OG(GG);
            jG(ZG), QG(ZG), xG(ZG, bG)
          }), [OG, xG, QG]),
          Gb = (0, SG.useCallback)((() => {
            jG((GG => (null !== GG && MG(GG), null))), QG(null)
          }), [QG]),
          bb = (0, SG.useCallback)((() => {
            eG(null), TG(null)
          }), []),
          Zb = (0, SG.useCallback)((GG => {
            const bG = iG.current;
            if (!bG) return 0;
            return WL(IL(cL(GG, bG), DG, NG), wG)
          }), [wG, NG, DG]),
          wb = (0, SG.useCallback)((GG => {
            const bG = CG.current;
            if (!bG) return 0;
            return WL(IL(cL(GG, bG), 0, wG), wG)
          }), [wG]),
          Sb = (0, SG.useMemo)((() => {
            if (!AG) return [...HG];
            const GG = HG.filter((GG => GG !== AG.fromTick));
            return GG.push(AG.previewTick), GG.sort(((GG, bG) => GG - bG)), GG
          }), [HG, AG]),
          Lb = (0, SG.useMemo)((() => {
            var GG;
            return qG && null !== (GG = UG.find((GG => GG.Tp === qG.Tp))) && void 0 !== GG ? GG : null
          }), [UG, qG]),
          yb = (0, SG.useMemo)((() => !!Lb && UG.some((GG => GG.Tp > Lb.Tp))), [UG, Lb]);
        (0, SG.useEffect)((() => {
          qG && !Lb && nG(null)
        }), [qG, Lb]), (0, SG.useEffect)((() => {
          if (!RG) return () => {};
          const GG = GG => {
            "Escape" === GG.key && bb()
          };
          return window.addEventListener("keydown", GG), () => {
            window.removeEventListener("keydown", GG)
          }
        }), [bb, RG]);
        const kb = (0, SG.useCallback)(((GG, bG) => {
            bb(), fG(), pG(GG, {
              ignorePlaybackMark: !0
            }), nG({
              Tp: GG,
              rect: bG.getBoundingClientRect()
            })
          }), [bb, fG, pG]),
          Ub = (0, SG.useCallback)(((GG, bG) => ZG => {
            0 === ZG.button && (ZG.stopPropagation(), nG(null), bb(), fG(), FG.current = {
              fromTick: GG,
              startX: ZG.clientX,
              startY: ZG.clientY,
              didDrag: !1,
              track: bG
            }, sG({
              fromTick: GG,
              previewTick: GG,
              track: bG
            }), ZG.currentTarget.setPointerCapture(ZG.pointerId))
          }), [bb, fG]),
          Yb = (0, SG.useCallback)((GG => {
            if (!AG) return;
            GG.stopPropagation();
            const bG = FG.current;
            if (bG && !bG.didDrag) {
              const ZG = GG.clientX - bG.startX,
                wG = GG.clientY - bG.startY;
              Math.hypot(ZG, wG) > 5 && (bG.didDrag = !0)
            }
            const ZG = "detail" === AG.track ? Zb(GG.clientX) : wb(GG.clientX);
            ZG !== AG.previewTick && sG({
              ...AG,
              previewTick: ZG
            })
          }), [AG, Zb, wb]),
          Vb = (0, SG.useCallback)((GG => {
            if (!AG) return;
            GG.stopPropagation();
            const bG = FG.current,
              ZG = "detail" === AG.track ? Zb(GG.clientX) : wb(GG.clientX);
            bG && !bG.didDrag ? kb(bG.fromTick, GG.currentTarget) : ZG !== AG.fromTick && KG(AG.fromTick, ZG), sG(null), FG.current = null, GG.currentTarget.releasePointerCapture(GG.pointerId)
          }), [AG, KG, kb, Zb, wb]),
          pb = (0, SG.useCallback)((GG => {
            if (0 !== GG.button) return;
            nG(null), fG();
            const bG = Zb(GG.clientX);
            vG.current = {
              pointerId: GG.pointerId,
              startX: GG.clientX,
              startY: GG.clientY,
              startTick: bG,
              currentTick: bG,
              didSelect: !1
            }, eG(null), TG(null), GG.currentTarget.setPointerCapture(GG.pointerId)
          }), [fG, Zb]),
          fb = (0, SG.useCallback)((GG => {
            const bG = vG.current;
            if (!bG || bG.pointerId !== GG.pointerId) return;
            const ZG = Zb(GG.clientX);
            if (bG.currentTick = ZG, !bG.didSelect) {
              const ZG = GG.clientX - bG.startX,
                wG = GG.clientY - bG.startY;
              if (Math.hypot(ZG, wG) <= 5) return;
              bG.didSelect = !0
            }
            const wG = Math.min(bG.startTick, ZG),
              SG = Math.max(bG.startTick, ZG);
            eG({
              startTick: wG,
              endTick: SG
            })
          }), [Zb]),
          Qb = (0, SG.useCallback)((GG => {
            const bG = vG.current;
            if (!bG || bG.pointerId !== GG.pointerId) return;
            if (vG.current = null, GG.currentTarget.releasePointerCapture(GG.pointerId), !bG.didSelect) return bb(), void xG(bG.startTick, !0);
            const ZG = Zb(GG.clientX),
              wG = Math.min(bG.startTick, ZG),
              SG = Math.max(bG.startTick, ZG),
              LG = {
                startTick: wG,
                endTick: SG
              };
            eG(LG);
            const yG = iG.current;
            if (!yG) return;
            const kG = yG.getBoundingClientRect(),
              UG = mL(wG, DG, NG) / 100,
              YG = mL(SG, DG, NG) / 100,
              VG = kG.left + UG * kG.width,
              pG = kG.left + YG * kG.width;
            TG({
              ...LG,
              rect: new DOMRect(VG, kG.top, Math.max(pG - VG, 1), kG.height)
            })
          }), [bb, xG, Zb, NG, DG]),
          Kb = (0, SG.useCallback)((GG => bG => {
            if (0 !== bG.button) return;
            bG.stopPropagation(), nG(null), bb(), fG(), aG.current = {
              pointerId: bG.pointerId,
              track: GG
            }, bG.currentTarget.setPointerCapture(bG.pointerId);
            const ZG = "detail" === GG ? Zb(bG.clientX) : wb(bG.clientX);
            BG(ZG, !1)
          }), [bb, fG, BG, Zb, wb]),
          hb = (0, SG.useCallback)((GG => {
            const bG = aG.current;
            if (!bG || bG.pointerId !== GG.pointerId) return;
            GG.stopPropagation();
            const ZG = "detail" === bG.track ? Zb(GG.clientX) : wb(GG.clientX);
            BG(ZG, !1)
          }), [BG, Zb, wb]),
          db = (0, SG.useCallback)((GG => {
            const bG = aG.current;
            bG && bG.pointerId === GG.pointerId && (GG.stopPropagation(), aG.current = null, GG.currentTarget.releasePointerCapture(GG.pointerId), Gb())
          }), [Gb]),
          Jb = (0, SG.useCallback)((GG => {
            0 === GG.button && (bb(), fG(), cG.current = {
              pointerId: GG.pointerId
            }, GG.currentTarget.setPointerCapture(GG.pointerId), BG(wb(GG.clientX), !0))
          }), [bb, fG, BG, wb]),
          rb = (0, SG.useCallback)((GG => {
            const bG = cG.current;
            bG && bG.pointerId === GG.pointerId && BG(wb(GG.clientX), !0)
          }), [BG, wb]),
          zb = (0, SG.useCallback)((GG => {
            const bG = cG.current;
            bG && bG.pointerId === GG.pointerId && (cG.current = null, GG.currentTarget.releasePointerCapture(GG.pointerId), Gb())
          }), [Gb]),
          Eb = (0, SG.useCallback)((GG => {
            const bG = Math.max(1, GG.endTick - GG.startTick + 1),
              ZG = wG + 1,
              SG = ZG / bG,
              LG = Math.max(1, Math.ceil(ZG / SG)),
              yG = GG.startTick + Math.floor((LG - 1) / 2);
            mG.current = !0, IG.current = SG, MG(WL(yG, wG)), uG(SG), bb()
          }), [bb, wG, uG]),
          ob = (0, SG.useCallback)((GG => {
            rG(GG), bb()
          }), [bb, rG]),
          Xb = (0, SG.useCallback)((GG => {
            zG(GG), bb()
          }), [bb, zG]),
          ub = (0, SG.useCallback)((GG => {
            EG(GG), bb()
          }), [bb, EG]),
          ib = (0, SG.useCallback)((() => {
            oG(), bb()
          }), [bb, oG]);
        (0, SG.useEffect)((() => {
          const GG = iG.current;
          if (!GG) return () => {};
          const bG = bG => {
            bG.preventDefault();
            const ZG = WL(IL(cL(bG.clientX, GG), DG, NG), wG),
              SG = bG.deltaY < 0 ? "in" : "out",
              LG = aL(XG, SG);
            LG !== XG && (WG.current = !0, MG(ZG), uG(LG))
          };
          return GG.addEventListener("wheel", bG, {
            passive: !1
          }), () => {
            GG.removeEventListener("wheel", bG)
          }
        }), [wG, uG, NG, DG, XG]);
        const Cb = mL(tG, DG, NG),
          Wb = lL(tG, wG),
          mb = lL(DG, wG),
          Ib = wG > 0 ? lL(NG, wG) : 100,
          Fb = null !== YG,
          vb = null !== (bG = null === YG || void 0 === YG ? void 0 : YG.inTick) && void 0 !== bG ? bG : 0,
          ab = null !== (ZG = null === YG || void 0 === YG ? void 0 : YG.outTick) && void 0 !== ZG ? ZG : wG,
          cb = lL(vb, wG),
          lb = Math.max(lL(ab, wG) - cb, 0),
          jb = mL(Math.max(vb, DG), DG, NG),
          Pb = mL(Math.min(ab, NG), DG, NG),
          Mb = Math.max(Pb - jb, 0),
          Ab = Fb && ab >= DG && vb <= NG,
          sb = mL(vb, DG, NG),
          qb = mL(ab, DG, NG),
          nb = Fb && vb >= DG && vb <= NG,
          gb = Fb && ab >= DG && ab <= NG,
          eb = lL(vb, wG),
          Rb = lL(ab, wG),
          Tb = null !== gG && void 0 !== gG ? gG : RG ? {
            startTick: RG.startTick,
            endTick: RG.endTick
          } : null,
          Hb = Tb ? mL(Math.max(Tb.startTick, DG), DG, NG) : 0,
          tb = Tb ? mL(Math.min(Tb.endTick, NG), DG, NG) : 0,
          Db = Math.max(tb - Hb, 0),
          Nb = null !== Tb && Tb.endTick >= DG && Tb.startTick <= NG,
          Ob = (0, SG.useMemo)((() => jL(0, wG, kG)), [wG, kG]),
          xb = (0, SG.useMemo)((() => jL(DG, NG, kG)), [DG, NG, kG]),
          Bb = (0, SG.useMemo)((() => Sb.filter((GG => GG >= DG && GG <= NG))), [Sb, NG, DG]),
          GZ = (0, SG.useCallback)(((GG, bG, ZG) => {
            const SG = "detail" === bG ? mL(GG, DG, NG) : lL(GG, wG),
              LG = null !== AG && ZG === AG.fromTick,
              kG = null !== qG && qG.Tp === ZG;
            return (0, VG.jsx)("button", {
              type: "button",
              className: yG()("ReplayTimelineCameraKeyframeMarker", "detail" === bG ? "Detail" : "Overview", {
                Dragging: LG,
                Selected: kG
              }),
              style: {
                left: `${SG}%`
              },
              onPointerDown: Ub(ZG, bG),
              onPointerMove: Yb,
              onPointerUp: Vb,
              onPointerCancel: Vb,
              "aria-label": `Camera keyframe at tick ${ZG}`
            }, `cam-${bG}-${ZG}`)
          }), [Ub, qG, Vb, AG, wG, Yb, NG, DG]),
          bZ = (0, SG.useCallback)((GG => AG && GG === AG.previewTick ? AG.fromTick : GG), [AG]);
        return wG <= 0 ? null : (0, VG.jsxs)("div", {
          className: "ReplayTimeline",
          children: [qG && Lb && (0, DS.createPortal)((0, VG.jsx)(BL, {
            keyframe: Lb,
            anchor: qG,
            hasOutgoingSegment: yb,
            onClose: () => {
              nG(null)
            },
            onApply: hG,
            onDelete: dG,
            onUseCurrentCamera: JG
          }), document.body), RG && (0, DS.createPortal)((0, VG.jsx)(Gy, {
            anchor: RG,
            hasPlaybackMark: Fb,
            onClose: bb,
            onMark: ob,
            onZoom: Eb,
            onCrop: Xb,
            onDeleteKeyframes: ub,
            onClearMark: ib
          }), document.body), (0, VG.jsxs)("div", {
            className: yG()("ReplayTimelineOverviewSection", {
              Hidden: XG <= 1
            }),
            children: [(0, VG.jsx)("div", {
              className: "ReplayTimelineSectionLabel",
              children: "Overview"
            }), (0, VG.jsxs)("div", {
              ref: CG,
              className: "ReplayTimelineOverviewTrack",
              onPointerDown: Jb,
              onPointerMove: rb,
              onPointerUp: zb,
              onPointerCancel: zb,
              role: "slider",
              "aria-label": "Recording overview",
              "aria-valuemin": 0,
              "aria-valuemax": wG,
              "aria-valuenow": tG,
              tabIndex: 0,
              children: [Ob.map((GG => {
                const bG = lL(GG, wG);
                return (0, VG.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Overview",
                  style: {
                    left: `${bG}%`
                  }
                }, GG)
              })), Fb && (0, VG.jsxs)(VG.Fragment, {
                children: [(0, VG.jsx)("div", {
                  className: "ReplayTimelineMarkRegion Overview",
                  style: {
                    left: `${cb}%`,
                    width: `${lb}%`
                  }
                }), (0, VG.jsx)("div", {
                  className: "ReplayTimelineMarkMarker In Overview",
                  style: {
                    left: `${eb}%`
                  },
                  "aria-hidden": !0
                }), (0, VG.jsx)("div", {
                  className: "ReplayTimelineMarkMarker Out Overview",
                  style: {
                    left: `${Rb}%`
                  },
                  "aria-hidden": !0
                })]
              }), Sb.map((GG => GZ(GG, "overview", bZ(GG)))), (0, VG.jsx)("div", {
                className: "ReplayTimelineViewport",
                style: {
                  left: `${mb}%`,
                  width: `${Math.max(Ib-mb,.5)}%`
                }
              }), (0, VG.jsx)("button", {
                type: "button",
                className: yG()("ReplayTimelinePlayhead Overview", {
                  Scrubbing: null !== lG
                }),
                style: {
                  left: `${Wb}%`
                },
                onPointerDown: Kb("overview"),
                onPointerMove: hb,
                onPointerUp: db,
                onPointerCancel: db,
                "aria-label": "Scrub playhead"
              })]
            })]
          }), (0, VG.jsxs)("div", {
            className: "ReplayTimelineDetailSection",
            children: [(0, VG.jsxs)("div", {
              className: "ReplayTimelineDetailHeader",
              children: [(0, VG.jsx)("span", {
                className: "ReplayTimelineSectionLabel",
                children: "Timeline"
              }), (0, VG.jsxs)("span", {
                className: "ReplayTimelineDetailRange",
                children: [FL(DG, kG), " \u2013 ", FL(NG, kG), XG > 1 && (0, VG.jsx)("span", {
                  className: "ReplayTimelineZoomBadge",
                  children: vL(XG)
                })]
              })]
            }), (0, VG.jsxs)("div", {
              ref: iG,
              className: "ReplayTimelineDetailTrack",
              onPointerDown: pb,
              onPointerMove: fb,
              onPointerUp: Qb,
              onPointerCancel: Qb,
              role: "slider",
              "aria-label": "Recording timeline",
              "aria-valuemin": DG,
              "aria-valuemax": NG,
              "aria-valuenow": tG,
              tabIndex: 0,
              children: [xb.map((GG => {
                const bG = mL(GG, DG, NG);
                return (0, VG.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Detail",
                  style: {
                    left: `${bG}%`
                  }
                }, GG)
              })), Ab && (0, VG.jsx)("div", {
                className: "ReplayTimelineMarkRegion Detail",
                style: {
                  left: `${jb}%`,
                  width: `${Mb}%`
                }
              }), nb && (0, VG.jsx)("div", {
                className: "ReplayTimelineMarkMarker In Detail",
                style: {
                  left: `${sb}%`
                },
                "aria-label": `Play range start at tick ${vb}`
              }), gb && (0, VG.jsx)("div", {
                className: "ReplayTimelineMarkMarker Out Detail",
                style: {
                  left: `${qb}%`
                },
                "aria-label": `Play range end at tick ${ab}`
              }), Nb && Tb && (0, VG.jsx)("div", {
                className: "ReplayTimelineSelectionRegion Detail",
                style: {
                  left: `${Hb}%`,
                  width: `${Db}%`
                }
              }), Bb.map((GG => GZ(GG, "detail", bZ(GG)))), (0, VG.jsx)("button", {
                type: "button",
                className: yG()("ReplayTimelinePlayhead Detail", {
                  Scrubbing: null !== lG
                }),
                style: {
                  left: `${Cb}%`
                },
                onPointerDown: Kb("detail"),
                onPointerMove: hb,
                onPointerUp: db,
                onPointerCancel: db,
                "aria-label": "Scrub playhead"
              })]
            }), (0, VG.jsxs)("div", {
              className: "ReplayTimelineWheelHint",
              children: [(0, VG.jsx)("span", {
                className: "Select",
                children: "Drag timeline to select"
              }), " \xb7 Scroll to zoom \xb7 Drag playhead to scrub"]
            })]
          })]
        })
      })),
      Zy = (0, SG.memo)((function(GG) {
        let {
          enabled: bG
        } = GG;
        const ZG = (0, SG.useRef)(!1),
          wG = (0, SG.useRef)(null),
          [LG, kG] = (0, SG.useState)(!1),
          UG = (0, SG.useCallback)((GG => {
            bG && 0 === GG.button && (ZG.current = !0, kG(!0), wG.current = {
              x: GG.clientX,
              y: GG.clientY
            }, GG.currentTarget.setPointerCapture(GG.pointerId))
          }), [bG]),
          YG = (0, SG.useCallback)((GG => {
            if (!bG || !ZG.current || !wG.current) return;
            const SG = GG.clientX - wG.current.x,
              LG = GG.clientY - wG.current.y;
            wG.current = {
              x: GG.clientX,
              y: GG.clientY
            }, QG.gameBridge.send("dragReplayCamera", {
              dx: SG,
              dy: LG
            })
          }), [bG]),
          pG = (0, SG.useCallback)((GG => {
            ZG.current && (ZG.current = !1, kG(!1), wG.current = null, GG.currentTarget.releasePointerCapture(GG.pointerId))
          }), []);
        return bG ? (0, VG.jsx)("div", {
          className: yG()("ReplayViewerCameraDragSurface", {
            Dragging: LG
          }),
          onPointerDown: UG,
          onPointerMove: YG,
          onPointerUp: pG,
          onPointerCancel: pG,
          "aria-hidden": !0
        }) : null
      }));
    var wy = ZG(37363),
      Sy = ZG(37368);
    const Ly = (0, SG.memo)((function(GG) {
        var bG, ZG, wG;
        let {
          anchorRect: LG,
          anchorRef: kG,
          onClose: YG
        } = GG;
        const pG = (0, SG.useRef)(null),
          fG = NL(pG, LG),
          [QG, KG] = (0, SG.useState)(Sy.b),
          hG = (0, SG.useMemo)((() => Object.values(QG).every((GG => GG))), [QG]);
        (0, UG.g)("replayViewer|uiVisibilityChanged", (() => {
          KG((0, Sy.b)())
        })), OL(pG, YG, kG);
        const dG = (0, SG.useCallback)(((GG, bG) => {
            (0, Sy.h)(GG, bG), KG((0, Sy.b)())
          }), []),
          JG = (0, SG.useCallback)((GG => {
            for (const {
                group: bG
              }
              of wy.f)(0, Sy.h)(bG, GG);
            KG((0, Sy.b)())
          }), []),
          rG = DL(LG);
        return (0, DS.createPortal)((0, VG.jsxs)("div", {
          ref: pG,
          className: yG()("ReplayViewerPopover ReplayUiVisibilityPopover", {
            Below: null !== (bG = null === fG || void 0 === fG ? void 0 : fG.placeBelow) && void 0 !== bG && bG,
            Positioned: null !== fG
          }),
          style: {
            left: `${null!==(ZG=null===fG||void 0===fG?void 0:fG.left)&&void 0!==ZG?ZG:rG.left}px`,
            top: `${null!==(wG=null===fG||void 0===fG?void 0:fG.top)&&void 0!==wG?wG:rG.top}px`
          },
          onPointerDown: GG => {
            GG.stopPropagation()
          },
          children: [(0, VG.jsx)("div", {
            className: "ReplayUiVisibilityPopoverHeader",
            children: (0, VG.jsx)("span", {
              className: "ReplayUiVisibilityPopoverTitle",
              children: "UI visibility"
            })
          }), (0, VG.jsxs)("div", {
            className: "ReplayUiVisibilityPopoverChecks",
            children: [(0, VG.jsxs)("div", {
              className: "ReplayUiVisibilityPopoverCheck",
              children: [(0, VG.jsx)("input", {
                type: "checkbox",
                checked: hG,
                onChange: GG => {
                  JG(GG.target.checked)
                }
              }), (0, VG.jsx)("span", {
                children: "SELECT ALL"
              })]
            }), wy.f.map((GG => {
              let {
                group: bG,
                label: ZG
              } = GG;
              return (0, VG.jsxs)("label", {
                className: "ReplayUiVisibilityPopoverCheck",
                children: [(0, VG.jsx)("input", {
                  type: "checkbox",
                  checked: QG[bG],
                  onChange: GG => {
                    dG(bG, GG.target.checked)
                  }
                }), (0, VG.jsx)("span", {
                  children: ZG
                })]
              }, bG)
            }))]
          })]
        }), document.body)
      })),
      yy = (0, SG.memo)((function(GG) {
        let {
          disabled: bG
        } = GG;
        const ZG = (0, SG.useRef)(null),
          [wG, LG] = (0, SG.useState)(!1),
          [yG, kG] = (0, SG.useState)(null),
          UG = (0, SG.useCallback)((() => {
            ZG.current && (kG(ZG.current.getBoundingClientRect()), LG((GG => !GG)))
          }), []),
          YG = (0, SG.useCallback)((() => {
            LG(!1)
          }), []);
        return (0, VG.jsxs)(VG.Fragment, {
          children: [(0, VG.jsx)("div", {
            ref: ZG,
            children: (0, VG.jsx)(gZ.d, {
              className: "ReplayViewerActionButton",
              onClick: UG,
              disabled: bG,
              children: (0, VG.jsx)("span", {
                children: "Hide UI elements"
              })
            })
          }), wG && yG && (0, VG.jsx)(Ly, {
            anchorRect: yG,
            anchorRef: ZG,
            onClose: YG
          })]
        })
      })),
      ky = ["freeCamUp", "freeCamDown"];

    function Uy(GG, bG) {
      QG.gameBridge.send("holdReplayFreecamVertical", {
        action: GG,
        Ik: bG
      })
    }
    const Yy = (0, SG.memo)((function() {
      (0, SG.useEffect)((() => () => {
        ! function() {
          QG.gameBridge.send("moveReplayFreecam", null);
          for (const GG of ky) Uy(GG, !1)
        }()
      }), []);
      const GG = (0, SG.useCallback)((GG => {
          QG.gameBridge.send("moveReplayFreecam", GG)
        }), []),
        bG = (0, SG.useCallback)((GG => ({
          onTouchStart: bG => {
            bG.preventDefault(), bG.stopPropagation(), Uy(GG, !0)
          },
          onTouchEnd: bG => {
            bG.preventDefault(), bG.stopPropagation(), Uy(GG, !1)
          },
          onTouchCancel: bG => {
            bG.preventDefault(), bG.stopPropagation(), Uy(GG, !1)
          }
        })), []);
      return (0, VG.jsxs)("div", {
        className: "ReplayFreecamTouchControls",
        children: [(0, VG.jsx)("div", {
          className: "ReplayFreecamJoystickWrap",
          children: (0, VG.jsx)(Ib, {
            onMove: GG,
            mode: "pinned"
          })
        }), (0, VG.jsxs)("div", {
          className: "ReplayFreecamVerticalButtons",
          children: [(0, VG.jsx)("button", {
            type: "button",
            className: "ReplayFreecamVerticalButton",
            "aria-label": "Freecam up",
            ...bG("freeCamUp"),
            children: (0, VG.jsx)(AG.c, {
              name: "angle-up",
              className: "ReplayFreecamVerticalIcon"
            })
          }), (0, VG.jsx)("button", {
            type: "button",
            className: "ReplayFreecamVerticalButton",
            "aria-label": "Freecam down",
            ...bG("freeCamDown"),
            children: (0, VG.jsx)(AG.c, {
              name: "angle-down",
              className: "ReplayFreecamVerticalIcon"
            })
          })]
        })]
      })
    }));
    var Vy = ZG(3122);
    const py = [],
      fy = "Failed to load recording";

    function Qy(GG, bG, ZG) {
      var wG;
      console.error(bG), yZ.NotificationProvider.showAlertPopup({
        title: GG,
        subtitle: null !== (wG = (0, EL.i)(bG)) && void 0 !== wG ? wG : ZG,
        confirmText: "OK"
      })
    }

    function Ky(GG) {
      Qy(fy, GG, EL.e.cantOpen.text)
    }
    const hy = (0, SG.memo)((function() {
        const GG = (0, DG.j)(),
          {
            gameState: bG
          } = (0, CG.o)(["gameState"]),
          ZG = "inGame" === bG;
        return (0, iG.b)("replayViewerRequested", (GG => {
          (0, DG.g)("toggle" === GG ? !(0, DG.e)() : "open" === GG)
        })), (0, SG.useEffect)((() => {
          ZG && (0, uL.d)().then((GG => {
            if (null !== GG) return (0, DG.g)(!0), (0, dL.d)().open(GG.bytes, GG.source)
          })).catch((GG => {
            (0, DG.g)(!0), Ky(GG)
          }))
        }), [ZG]), GG ? (0, VG.jsx)(dy, {}) : null
      })),
      dy = (0, SG.memo)((function() {
        var GG, bG, ZG, wG, LG, kG, UG, YG, pG, fG, KG, hG;
        const dG = SG.useRef(null),
          [JG, rG] = (0, SG.useState)(1),
          [zG, EG] = (0, SG.useState)(null),
          [oG, XG] = (0, SG.useState)(!1),
          {
            isTouchScreen: uG
          } = (0, CG.o)(["isTouchScreen"]),
          mG = (0, iG.f)("replay"),
          IG = (0, iG.f)("replayEdits"),
          FG = null !== mG,
          vG = null !== (GG = null === mG || void 0 === mG ? void 0 : mG.Tp) && void 0 !== GG ? GG : 0,
          aG = null !== (bG = null === mG || void 0 === mG ? void 0 : mG.totalTicks) && void 0 !== bG ? bG : 0,
          cG = Math.max(0, aG - 1),
          lG = null !== (ZG = null === mG || void 0 === mG ? void 0 : mG.playing) && void 0 !== ZG && ZG,
          jG = null !== (wG = null === mG || void 0 === mG ? void 0 : mG.speed) && void 0 !== wG ? wG : 1,
          PG = null !== (LG = null === mG || void 0 === mG ? void 0 : mG.Fv) && void 0 !== LG ? LG : 20,
          sG = null !== zG && void 0 !== zG ? zG : vG,
          qG = null !== (kG = null === mG || void 0 === mG ? void 0 : mG.freecam) && void 0 !== kG && kG,
          nG = null !== (UG = null === mG || void 0 === mG ? void 0 : mG.cameraMode) && void 0 !== UG ? UG : "recording",
          gG = null !== (YG = null === IG || void 0 === IG ? void 0 : IG.cameraKeyframes) && void 0 !== YG ? YG : py,
          eG = null !== (pG = null === IG || void 0 === IG ? void 0 : IG.playbackMark) && void 0 !== pG ? pG : null,
          RG = null !== (fG = null === IG || void 0 === IG ? void 0 : IG.fileName) && void 0 !== fG ? fG : null,
          TG = null !== (KG = null === IG || void 0 === IG ? void 0 : IG.unsavedChanges) && void 0 !== KG && KG,
          HG = null !== (hG = null === IG || void 0 === IG ? void 0 : IG.suggestSaveAs) && void 0 !== hG && hG,
          tG = (0, iG.f)("replayVideoExporting"),
          NG = !tG && FG && ("freecam" === nG || ("recording" === nG || "keyframe" === nG) && !lG),
          OG = uG && FG && "freecam" === nG && !tG && !oG;
        (0, iL.e)(!0, !0, "ReplayViewerOverlay"), (0, SG.useEffect)((() => {
          QG.gameBridge.send("syncReplayCameraMode", null)
        }), [qG]);
        const xG = (0, SG.useCallback)(((GG, bG) => {
            QG.gameBridge.send("seekReplay", {
              Tp: GG,
              ignorePlaybackMark: null === bG || void 0 === bG ? void 0 : bG.ignorePlaybackMark
            })
          }), []),
          BG = (0, SG.useCallback)((() => {
            QG.gameBridge.send("setReplayPlaying", !1)
          }), []),
          Gb = (0, SG.useCallback)(((GG, bG) => {
            QG.gameBridge.send("moveReplayCameraKeyframe", {
              from: GG,
              to: bG
            })
          }), []),
          bb = (0, SG.useCallback)((GG => {
            QG.gameBridge.send("setReplayCameraKeyframe", GG)
          }), []),
          Zb = (0, SG.useCallback)((GG => {
            QG.gameBridge.send("deleteReplayCameraKeyframes", {
              start: GG,
              end: GG
            })
          }), []),
          wb = (0, SG.useCallback)((GG => {
            QG.gameBridge.send("deleteReplayCameraKeyframes", {
              start: GG.startTick,
              end: GG.endTick
            })
          }), []),
          Sb = (0, SG.useCallback)((() => QG.gameBridge.lookup("replayCamera", null)), []),
          Lb = (0, SG.useCallback)((GG => {
            EG(GG)
          }), []),
          yb = (0, SG.useCallback)((GG => {
            QG.gameBridge.send("setReplayPlaybackMark", {
              inTick: GG.startTick,
              outTick: GG.endTick
            })
          }), []),
          kb = (0, SG.useCallback)((() => {
            QG.gameBridge.send("setReplayPlaybackMark", null)
          }), []),
          Ub = (0, SG.useCallback)((GG => {
            const bG = QG.gameBridge.latest("replay");
            if (null === bG || GG.endTick <= GG.startTick) return;
            const ZG = GG.startTick,
              wG = GG.endTick;
            yZ.NotificationProvider.showPromptPopup({
              title: "Crop recording to the selected range? This cannot be undone.",
              confirmText: "Crop",
              destructive: !0,
              cancelText: "Cancel"
            }).getResult().then((GG => {
              var SG;
              if (!0 !== GG) return;
              if ((null === (SG = QG.gameBridge.latest("replay")) || void 0 === SG ? void 0 : SG.id) !== bG.id) return;
              QG.gameBridge.send("cropReplay", {
                start: ZG,
                end: wG
              }) && (EG(null), rG(1))
            }))
          }), []),
          Yb = (0, SG.useCallback)(((GG, bG) => {
            rG(1), EG(null), (0, dL.d)().open(GG, bG).catch(Ky)
          }), []),
          Vb = (0, SG.useCallback)(((GG, bG) => {
            null !== QG.gameBridge.latest("connectedGame").websocketUrl ? yZ.NotificationProvider.showPromptPopup({
              title: "Leave current game and play recording?",
              confirmText: "Yes",
              cancelText: "No"
            }).getResult().then((ZG => {
              !0 === ZG && Yb(GG, bG)
            })) : Yb(GG, bG)
          }), [Yb]),
          pb = (0, SG.useCallback)((GG => {
            var bG;
            const ZG = null === (bG = GG.target.files) || void 0 === bG ? void 0 : bG[0];
            if (GG.target.value = "", !ZG) return;
            const wG = new FileReader;
            wG.onload = () => {
              Vb(new Uint8Array(wG.result), {
                fileName: ZG.name
              })
            }, wG.onerror = () => {
              Ky(wG.error)
            }, wG.readAsArrayBuffer(ZG)
          }), [Vb]),
          fb = (0, SG.useCallback)((() => {
            const GG = () => {
              null !== dG.current && (0, Vy.f)(dG.current)
            };
            (0, zL.j)() ? (0, zL.d)().then((GG => {
              GG && Vb(GG.bytes, {
                fileHandle: GG.handle
              })
            })).catch((bG => {
              console.error(bG), yZ.NotificationProvider.showPromptPopup({
                title: fy,
                confirmText: "Choose file",
                cancelText: "Cancel"
              }).getResult().then((bG => {
                !0 === bG && GG()
              }))
            })): GG()
          }), [Vb]),
          Qb = (0, SG.useCallback)((async function() {
            let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            let bG;
            try {
              bG = await XL(GG, {
                files: (0, dL.d)(),
                pickerSupported: zL.j,
                chooseFile: zL.c,
                write: zL.l,
                download: rL.i,
                onFallback: console.error
              })
            } catch (ZG) {
              return void Qy("Failed to save recording", ZG)
            }
            "written" !== bG && "downloaded" !== bG || (() => {
              const GG = yZ.NotificationProvider.showAlertPopup({
                title: "Recording saved",
                disableBackground: !0
              });
              setTimeout((() => {
                GG.tearDownNotification()
              }), 1e3)
            })()
          }), []),
          Kb = (0, SG.useCallback)((GG => {
            QG.gameBridge.send("replayAction", GG)
          }), []),
          hb = (0, SG.useCallback)((GG => {
            rG((bG => aL(bG, GG)))
          }), []),
          db = (0, SG.useCallback)((GG => {
            if (!QG.gameBridge.latest("replayVideoExporting")) switch (GG) {
              case "replayLoad":
                fb();
                break;
              case "replaySave":
                Qb(!1);
                break;
              case "replaySaveAs":
                Qb(!0);
                break;
              case "replayTimelineZoomIn":
                hb("in");
                break;
              case "replayTimelineZoomOut":
                hb("out")
            }
          }), [fb, Qb, hb]);
        (0, iG.b)("replayUiActionRequested", db);
        const Jb = (0, SG.useCallback)((GG => {
            QG.gameBridge.send("setReplayCameraMode", GG)
          }), []),
          rb = FG ? gZ.d : gZ.k,
          zb = TG && !HG ? gZ.k : gZ.d,
          Eb = TG && HG ? gZ.k : gZ.d;
        return (0, VG.jsxs)("div", {
          className: "ReplayViewerOverlay",
          children: [(0, VG.jsx)(Zy, {
            enabled: NG
          }), OG && (0, VG.jsx)(Yy, {}), (0, VG.jsx)("input", {
            ref: dG,
            type: "file",
            accept: rL.e,
            className: "ReplayViewerFileInput",
            onChange: pb
          }), (0, VG.jsxs)("div", {
            className: yG()("ReplayViewerBar", {
              Collapsed: oG
            }),
            children: [(0, VG.jsx)("button", {
              type: "button",
              className: "ReplayViewerCollapseTab",
              onClick: () => {
                oG ? XG(!1) : FG ? XG(!0) : (0, DG.d)()
              },
              "aria-expanded": !oG,
              "aria-label": oG ? "Expand replay viewer" : "Collapse replay viewer",
              children: (0, VG.jsx)(AG.c, {
                name: oG ? "angle-up" : "angle-down"
              })
            }), !oG && (0, VG.jsxs)("div", {
              className: "ReplayViewerBarBody",
              children: [FG && aG > 0 && (0, VG.jsx)(by, {
                maxTick: cG,
                displayTick: sG,
                Fv: PG,
                cameraKeyframes: gG,
                playbackMark: eG,
                onSeek: xG,
                onPause: BG,
                onScrubTickChange: Lb,
                onMoveCameraKeyframe: Gb,
                onUpdateCameraKeyframe: bb,
                onDeleteCameraKeyframe: Zb,
                onUseCurrentCamera: Sb,
                onMarkRange: yb,
                onCropRange: Ub,
                onDeleteKeyframesInRange: wb,
                onClearMark: kb,
                zoomLevel: JG,
                onZoomLevelChange: rG
              }, cG), (0, VG.jsxs)("div", {
                className: "ReplayViewerControls",
                children: [(0, VG.jsxs)("div", {
                  className: "ReplayViewerControlsLeftSide",
                  children: [(0, VG.jsxs)("div", {
                    className: "ReplayViewerControlsGroup FileGroup",
                    children: [FG && (0, VG.jsxs)("div", {
                      className: "ReplayViewerFileName",
                      children: [null !== RG && void 0 !== RG ? RG : "Unsaved recording", TG ? " *" : ""]
                    }), (0, VG.jsxs)(rb, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        db("replayLoad")
                      },
                      children: [(0, VG.jsx)(WG.e, {
                        noaAction: "replayLoad",
                        padHidesKey: !0
                      }), (0, VG.jsx)("span", {
                        children: " Load "
                      })]
                    }), (0, VG.jsxs)(gZ.d, {
                      className: "ReplayViewerActionButton",
                      onClick: DG.d,
                      children: [(0, VG.jsx)(WG.e, {
                        noaAction: "replayViewerOpen",
                        padHidesKey: !0
                      }), (0, VG.jsx)("span", {
                        children: " Hide "
                      })]
                    }), (0, VG.jsxs)(zb, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        db("replaySave")
                      },
                      disabled: !FG,
                      children: [(0, VG.jsx)(WG.e, {
                        noaAction: "replaySave",
                        padHidesKey: !0
                      }), (0, VG.jsx)("span", {
                        children: " Save "
                      })]
                    }), (0, VG.jsxs)(gZ.d, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        QG.gameBridge.send("leaveGame", {
                          reloadPath: "/"
                        })
                      },
                      disabled: !FG,
                      children: [(0, VG.jsx)(WG.e, {
                        noaAction: "replayExit",
                        padHidesKey: !0
                      }), (0, VG.jsx)("span", {
                        children: " Exit "
                      })]
                    }), (0, VG.jsxs)(Eb, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        db("replaySaveAs")
                      },
                      disabled: !FG,
                      children: [(0, VG.jsx)(WG.e, {
                        noaAction: "replaySaveAs",
                        padHidesKey: !0
                      }), (0, VG.jsx)("span", {
                        children: " Save As "
                      })]
                    }), (0, VG.jsxs)(gZ.d, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        QG.gameBridge.send("exportReplayVideo", null)
                      },
                      disabled: !FG || 0 === aG || tG,
                      children: [(0, VG.jsx)(WG.e, {
                        noaAction: "replayExportVideo",
                        padHidesKey: !0
                      }), (0, VG.jsx)("span", {
                        children: " Export "
                      })]
                    })]
                  }), (0, VG.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, VG.jsxs)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: [(0, VG.jsx)("span", {
                        children: " Camera Mode "
                      }), (0, VG.jsx)(WG.e, {
                        noaAction: "replayChangeCameraMode",
                        padHidesKey: !0
                      })]
                    }), (0, VG.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody CameraModes",
                      children: [(0, VG.jsx)(MG.h, {
                        tooltipInner: (0, VG.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Replicate how the camera was set when recorded."
                        }),
                        children: (0, VG.jsxs)(gZ.K, {
                          className: "ReplayViewerModeButton",
                          active: "recording" === nG,
                          onClick: () => {
                            Jb("recording")
                          },
                          disabled: !FG,
                          children: ["Recorded ", (0, VG.jsx)(AG.c, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, VG.jsx)(MG.h, {
                        tooltipInner: (0, VG.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Move the camera freely around."
                        }),
                        children: (0, VG.jsxs)(gZ.K, {
                          className: "ReplayViewerModeButton",
                          active: "freecam" === nG,
                          onClick: () => {
                            Jb("freecam")
                          },
                          disabled: !FG,
                          children: ["Free ", (0, VG.jsx)(AG.c, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, VG.jsx)(MG.h, {
                        tooltipInner: (0, VG.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Display the replay in real time using keyframes."
                        }),
                        children: (0, VG.jsxs)(gZ.K, {
                          className: "ReplayViewerModeButton",
                          active: "keyframe" === nG,
                          onClick: () => {
                            Jb("keyframe")
                          },
                          disabled: !FG,
                          children: ["Preview ", (0, VG.jsx)(AG.c, {
                            name: "circle-info"
                          })]
                        })
                      })]
                    })]
                  })]
                }), (0, VG.jsxs)("div", {
                  className: "ReplayViewerControlsGroup TimeGroup",
                  children: [(0, VG.jsxs)("div", {
                    className: "ReplayViewerTimecodeContainer",
                    children: [(0, VG.jsxs)("span", {
                      className: "ReplayViewerTimecode",
                      children: [(0, VG.jsx)("span", {
                        className: "ReplayViewerTimecodeNow",
                        children: FL(sG, PG)
                      }), (0, VG.jsx)("span", {
                        className: "ReplayViewerTimecodeDivider",
                        children: "/"
                      }), (0, VG.jsx)("span", {
                        className: "ReplayViewerTimecodeTotal",
                        children: FL(cG, PG)
                      })]
                    }), (0, VG.jsxs)("span", {
                      className: "ReplayViewerTickLabel",
                      children: ["Tick ", sG, " / ", cG]
                    })]
                  }), (0, VG.jsxs)("div", {
                    className: "ReplayViewerTimecodeControls",
                    children: [(0, VG.jsxs)(gZ.d, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        Kb("replaySkipBack")
                      },
                      disabled: !FG,
                      children: [(0, VG.jsxs)("span", {
                        children: [" ", (0, VG.jsx)(AG.c, {
                          name: "clock-rotate-left"
                        }), " 1s"]
                      }), (0, VG.jsx)(WG.e, {
                        noaAction: "replaySkipBack",
                        padHidesKey: !0
                      })]
                    }), (0, VG.jsxs)(gZ.k, {
                      className: "ReplayViewerMediaButton PlayButton",
                      onClick: () => {
                        QG.gameBridge.send("setReplayPlaying", !lG)
                      },
                      disabled: !FG,
                      children: [(0, VG.jsxs)("span", {
                        children: [" ", lG ? (0, VG.jsx)(AG.c, {
                          name: "pause"
                        }) : (0, VG.jsx)(AG.c, {
                          name: "play"
                        }), " "]
                      }), (0, VG.jsx)(WG.e, {
                        noaAction: "replayPlayPause",
                        padHidesKey: !0
                      })]
                    }), (0, VG.jsxs)(gZ.d, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        Kb("replaySkipForward")
                      },
                      disabled: !FG,
                      children: [(0, VG.jsxs)("span", {
                        children: [" ", (0, VG.jsx)(AG.c, {
                          name: "rotate-forward"
                        }), " 1s"]
                      }), (0, VG.jsx)(WG.e, {
                        noaAction: "replaySkipForward",
                        padHidesKey: !0
                      })]
                    })]
                  })]
                }), (0, VG.jsxs)("div", {
                  className: "ReplayViewerControlsRightSide",
                  children: [(0, VG.jsxs)("div", {
                    className: "ReplayViewerControlsGroup RecordKeyframeGroup",
                    children: [(0, VG.jsxs)(gZ.k, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Kb("replayRecordKeyframe")
                      },
                      disabled: !FG,
                      children: [(0, VG.jsx)(WG.e, {
                        noaAction: "replayRecordKeyframe",
                        padHidesKey: !0
                      }), (0, VG.jsx)("span", {
                        children: " Record keyframe "
                      })]
                    }), (0, VG.jsx)(yy, {
                      disabled: !FG
                    }), eG && (0, VG.jsx)(gZ.K, {
                      className: "ReplayViewerActionButton",
                      onClick: kb,
                      disabled: !FG,
                      children: (0, VG.jsx)("span", {
                        children: " Clear range "
                      })
                    })]
                  }), (0, VG.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, VG.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Speed"
                    }), (0, VG.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, VG.jsx)(gZ.d, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          Kb("replaySpeedDown")
                        },
                        disabled: !FG || (0, JL.h)(jG),
                        children: (0, VG.jsx)("span", {
                          children: " \u2212 "
                        })
                      }), (0, VG.jsxs)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: [jG, "\xd7"]
                      }), (0, VG.jsx)(gZ.d, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          Kb("replaySpeedUp")
                        },
                        disabled: !FG || (0, JL.e)(jG),
                        children: (0, VG.jsx)("span", {
                          children: " + "
                        })
                      })]
                    })]
                  }), (0, VG.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, VG.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Timeline Zoom"
                    }), (0, VG.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, VG.jsxs)(gZ.d, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          db("replayTimelineZoomOut")
                        },
                        disabled: !FG || JG <= CL[0],
                        children: [(0, VG.jsx)("span", {
                          children: " \u2212 "
                        }), (0, VG.jsx)(WG.e, {
                          noaAction: "replayTimelineZoomOut",
                          padHidesKey: !0
                        })]
                      }), (0, VG.jsx)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: vL(JG)
                      }), (0, VG.jsxs)(gZ.d, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          db("replayTimelineZoomIn")
                        },
                        disabled: !FG || JG >= CL[CL.length - 1],
                        children: [(0, VG.jsx)("span", {
                          children: " + "
                        }), (0, VG.jsx)(WG.e, {
                          noaAction: "replayTimelineZoomIn",
                          padHidesKey: !0
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0, VG.jsx)("div", {
                className: "ReplayViewerEmptyState",
                children: !FG && "Load a recording to begin playback"
              })]
            })]
          })]
        })
      }));
    var Jy = ZG(1287);

    function ry() {
      const [, GG] = (0, SG.useState)(0);
      return (0, UG.g)("replayViewer|uiVisibilityChanged", (() => {
          GG((GG => GG + 1))
        })), (0, UG.g)("replayViewer|replayLoaded", (() => {
          GG((GG => GG + 1))
        })),
        function() {
          if (!(0, Jy.f)()) return {};
          const GG = {
              [wy.e]: "true"
            },
            bG = (0, Sy.b)();
          for (const {
              group: ZG,
              dataAttr: wG
            }
            of wy.f) wG && !bG[ZG] && (GG[wG] = "true");
          return GG
        }()
    }
    var zy = ZG(34466),
      Ey = ZG(2044),
      oy = ZG(8792),
      Xy = ZG(8776),
      uy = ZG(2060);
    const iy = (0, SG.memo)((function() {
      var GG, bG, ZG;
      const wG = (0, EG.i)("customButtons");
      (0, SG.useEffect)((() => wG ? (QG.gameBridge.send("bindCustomButtonKeys", wG.filter(oy.e).map((GG => {
        let {
          id: bG,
          keycode: ZG
        } = GG;
        return {
          id: bG,
          keycode: ZG
        }
      }))), () => {
        QG.gameBridge.send("bindCustomButtonKeys", [])
      }) : () => {}), [wG]);
      const LG = null !== (GG = null === wG || void 0 === wG ? void 0 : wG.filter(oy.e)) && void 0 !== GG ? GG : [],
        yG = (0, Xy.g)(),
        kG = null !== (bG = null === (ZG = (0, uy.c)()) || void 0 === ZG ? void 0 : ZG.hideButtonHints) && void 0 !== bG && bG,
        UG = "customButton" !== (null === yG || void 0 === yG ? void 0 : yG.kind) || kG ? null : yG.id,
        YG = LG.length > 0,
        pG = (0, SG.useRef)(null);
      return (0, SG.useLayoutEffect)((() => {
        if (!YG) return () => {};
        const GG = pG.current,
          bG = GG.closest(".InGameUi"),
          ZG = () => {
            bG.style.setProperty("--custom-buttons-top", `${GG.offsetTop}px`)
          };
        ZG();
        const wG = new ResizeObserver(ZG);
        return wG.observe(GG), wG.observe(GG.parentElement), () => {
          wG.disconnect(), bG.style.removeProperty("--custom-buttons-top")
        }
      }), [YG]), (0, VG.jsx)("div", {
        ref: pG,
        className: "" + ((0, LZ.isMobile)() ? "CustomIconsMobile" : "CustomIcons"),
        children: LG.map((GG => {
          var bG, ZG;
          return (0, VG.jsx)(Cy, {
            button: GG,
            padGlyph: GG.id === UG && null !== (bG = null === (ZG = (0, gG.h)()) || void 0 === ZG ? void 0 : ZG.getBoundButton("actionButton")) && void 0 !== bG ? bG : null
          }, GG.id)
        }))
      })
    }));

    function Cy(GG) {
      let {
        button: bG,
        padGlyph: ZG
      } = GG;
      const wG = (0, SG.useRef)(null),
        LG = () => {
          null !== wG.current && (wG.current = null, QG.gameBridge.send("pressCustomButton", {
            id: bG.id,
            down: !1
          }))
        };
      (0, SG.useEffect)((() => LG), []);
      const yG = Nb(LG, {
          pressesOnPointerDown: !0
        }),
        kG = GG => {
          wG.current === GG.pointerId && LG()
        };
      return (0, VG.jsxs)("div", {
        className: "CustomIcon",
        ...yG,
        onLostPointerCapture: kG,
        children: [(0, VG.jsx)(Ey.b, {
          icon: bG.icon,
          keyboardHint: (0, oy.d)(bG.keycode),
          padGlyph: ZG,
          onPointerDown: GG => {
            try {
              GG.currentTarget.setPointerCapture(GG.pointerId)
            } catch {
              return
            }
            null === wG.current && QG.gameBridge.send("pressCustomButton", {
              id: bG.id,
              down: !0
            }), wG.current = GG.pointerId
          },
          onPointerUp: kG,
          onPointerCancel: kG,
          showTouchTutorialPubSubId: !1,
          showRedDotPubSubId: !1
        }), bG.description && (0, VG.jsx)("div", {
          className: "CustomIconDescription SmallTextBold",
          children: bG.description
        })]
      })
    }
    var Wy = ZG(2393),
      my = ZG(252);
    const Iy = {
      frame: GG => {
        const bG = requestAnimationFrame((() => {
          GG()
        }));
        return () => {
          cancelAnimationFrame(bG)
        }
      },
      afterFrame: GG => {
        const bG = setTimeout(GG, 0);
        return () => {
          clearTimeout(bG)
        }
      }
    };
    class Fy {
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : my.b,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Iy,
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
        this.idle = GG, this.frames = bG, this.onHiddenMount = ZG, this.waiting = [], this.cancelIdle = null, this.cancelFrame = null, this.cancelAfterFrame = null, this.starvedFrames = 0, this.shown = !1
      }
      request(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.shown ? (GG(), () => {}) : (bG ? this.waiting.unshift(GG) : this.waiting.push(GG), this.schedule(), () => {
          const bG = this.waiting.indexOf(GG);
          bG >= 0 && (this.waiting.splice(bG, 1), this.settle())
        })
      }
      show() {
        for (this.shown = !0; this.waiting.length > 0;) this.mountNext()
      }
      schedule() {
        0 !== this.waiting.length && (this.cancelIdle ??= this.idle((GG => {
          for (this.cancelIdle = null; this.waiting.length > 0 && GG.timeRemaining() >= 8;) this.mountNext();
          this.schedule()
        })), this.cancelFrame ??= this.frames.frame((() => {
          this.cancelFrame = null, this.starvedFrames++, this.starvedFrames >= 4 && (this.cancelAfterFrame ??= this.frames.afterFrame((() => {
            this.cancelAfterFrame = null, this.mountNext(), this.schedule()
          }))), this.schedule()
        })))
      }
      mountNext() {
        this.starvedFrames = 0;
        const GG = this.waiting.shift(),
          bG = !this.shown,
          ZG = performance.now();
        try {
          GG()
        } finally {
          bG && this.onHiddenMount(performance.now() - ZG), this.settle()
        }
      }
      settle() {
        0 === this.waiting.length && this.stop()
      }
      stop() {
        var GG, bG, ZG;
        null === (GG = this.cancelIdle) || void 0 === GG || GG.call(this), this.cancelIdle = null, null === (bG = this.cancelFrame) || void 0 === bG || bG.call(this), this.cancelFrame = null, null === (ZG = this.cancelAfterFrame) || void 0 === ZG || ZG.call(this), this.cancelAfterFrame = null
      }
    }
    const vy = (0, SG.createContext)(null);

    function ay(GG) {
      let {
        children: bG,
        first: ZG = !1
      } = GG;
      const wG = (0, SG.useContext)(vy),
        [LG, yG] = (0, SG.useState)(null === wG);
      return (0, SG.useEffect)((() => {
        if (!LG && null !== wG) return wG.request((() => {
          yG(!0)
        }), ZG)
      }), [ZG, LG, wG]), LG ? (0, SG.createElement)(SG.Fragment, null, bG) : null
    }
    const cy = (0, SG.memo)((function(GG) {
        let {
          shown: bG
        } = GG;
        const [ZG] = (0, SG.useState)((() => new hG.e(bG))), [LG] = (0, SG.useState)((() => bG ? null : new Fy(void 0, void 0, (GG => {
          wG.d.noteWorkDuringAdmissionWait(GG)
        }))));
        return (0, SG.useLayoutEffect)((() => {
          bG && (null === LG || void 0 === LG || LG.show(), ZG.show())
        }), [bG, ZG, LG]), (0, VG.jsx)(hG.b.Provider, {
          value: ZG,
          children: (0, VG.jsx)(vy.Provider, {
            value: LG,
            children: (0, VG.jsx)(ly, {})
          })
        })
      })),
      ly = (0, SG.memo)((function() {
        const {
          isUiHidden: GG,
          isUiHiddenByCamera: bG,
          worldPanelHud: ZG,
          isTouchScreen: wG
        } = (0, CG.o)(["isUiHidden", "isUiHiddenByCamera", "worldPanelHud", "isTouchScreen"]), LG = (0, pS.c)(), kG = ry(), UG = (0, hG.h)(), YG = (0, SG.useRef)(null), pG = (0, EG.i)("showKillfeed");
        return function() {
            const GG = (0, hG.h)();
            (0, SG.useEffect)((() => GG.whenShown(dG)), [GG])
          }(),
          function() {
            const GG = (0, EG.i)("inventoryColourOverride");
            (0, SG.useEffect)((() => {
              if (!GG) return;
              const {
                panel: bG,
                slot: ZG,
                slotSelected: wG,
                slotUnavailable: SG
              } = RG(GG), LG = document.documentElement.style;
              return LG.setProperty("--InventoryPanelColour", bG), LG.setProperty("--InventorySlotColour", ZG), LG.setProperty("--InventorySlotSelectedColour", wG), LG.setProperty("--InventorySlotUnavailableColour", SG), () => {
                LG.removeProperty("--InventoryPanelColour"), LG.removeProperty("--InventorySlotColour"), LG.removeProperty("--InventorySlotSelectedColour"), LG.removeProperty("--InventorySlotUnavailableColour")
              }
            }), [GG])
          }(), (0, SG.useLayoutEffect)((() => UG.whenShown((() => {
            var GG;
            null === (GG = YG.current) || void 0 === GG || GG.classList.remove("PreMounted")
          }))), [UG]), (0, VG.jsxs)(VG.Fragment, {
            children: [(0, VG.jsxs)("div", {
              ref: YG,
              className: yG()("InGameUi", {
                PreMounted: !UG.shown,
                Hidden: GG,
                HiddenByCamera: bG,
                HiddenByWorldPanel: null !== ZG,
                WorldPanelTouchControl: "touchControls" === ZG
              }),
              ...kG,
              children: [(0, VG.jsxs)(ay, {
                children: [(0, VG.jsx)(yw.b, {}), (0, VG.jsx)(pw, {})]
              }), (0, VG.jsx)(hG.f, {
                children: (0, VG.jsx)(fw, {})
              }), (0, VG.jsxs)(ay, {
                children: [(0, VG.jsx)(MS, {}), (0, VG.jsx)(RS, {}), wG && (0, VG.jsx)(HS, {})]
              }), (0, VG.jsxs)(ay, {
                children: [(0, VG.jsx)(cZ, {}), (0, VG.jsx)(Cw.e, {}), (0, VG.jsx)(lw, {})]
              }), (0, VG.jsx)(hG.f, {
                children: (0, VG.jsx)(Lw, {})
              }), (0, VG.jsxs)(ay, {
                children: [(0, VG.jsx)(nS.e, {}), (0, VG.jsx)(hy, {})]
              }), (0, VG.jsxs)(ay, {
                children: [(0, VG.jsx)(LL.g, {}), (0, VG.jsx)(yL.e, {})]
              }), (0, VG.jsx)(ay, {
                children: (0, VG.jsx)(jZ.j, {})
              }), (0, VG.jsx)(ay, {
                children: (0, VG.jsx)(ny, {
                  showChat: LG
                })
              }), (0, VG.jsxs)(ay, {
                children: [(0, VG.jsx)(UL, {}), (0, VG.jsx)(qS, {})]
              }), (0, VG.jsxs)("div", {
                className: yG()("RightElements", {
                  RightElementsTouchscreen: wG
                }),
                "data-camera-keeper-host": "",
                children: [(0, VG.jsxs)("div", {
                  className: nw.f,
                  "data-holds-camera-keeper": "",
                  children: [(0, VG.jsxs)("div", {
                    className: "TopRightElementsLeft",
                    "data-holds-camera-keeper": "",
                    children: [(0, VG.jsx)(ay, {
                      children: (0, VG.jsx)(CS.d, {})
                    }), (0, VG.jsxs)(ay, {
                      children: [(0, VG.jsx)(sG, {}), (0, VG.jsx)(Hw.c, {})]
                    }), LZ.featureFlags.useSocialFeatures && (0, VG.jsx)(hG.f, {
                      children: (0, VG.jsx)(tw.e, {
                        placement: "inGame"
                      })
                    }), LZ.featureFlags.useSocialFeatures && (0, VG.jsx)(hG.f, {
                      children: (0, VG.jsx)(yS, {})
                    }), pG && (0, VG.jsx)(hG.f, {
                      children: (0, VG.jsx)(iw, {})
                    }), (0, VG.jsx)(ay, {
                      children: (0, VG.jsx)(zy.d, {})
                    })]
                  }), LZ.featureFlags.useSocialFeatures && (0, VG.jsx)("div", {
                    className: "TopRightElementsRight",
                    children: (0, VG.jsx)(ay, {
                      children: (0, VG.jsx)(jS.d, {})
                    })
                  })]
                }), (0, VG.jsxs)(ay, {
                  children: [(0, VG.jsx)(jZ.b, {
                    placement: "topRight"
                  }), (0, VG.jsx)(gy, {})]
                })]
              }), (0, VG.jsx)("div", {
                className: "LeftCentre",
                children: (0, VG.jsx)(ay, {
                  children: (0, VG.jsx)(iy, {})
                })
              }), (0, VG.jsxs)("div", {
                className: "BottomCentre",
                "data-holds-camera-keeper": wG ? "" : void 0,
                children: [(0, VG.jsx)(hG.f, {
                  children: (0, VG.jsx)(aG, {})
                }), (0, VG.jsx)(ay, {
                  children: (0, VG.jsx)(Py, {})
                }), (0, VG.jsxs)("div", {
                  className: "BottomElements",
                  "data-holds-camera-keeper": wG ? "" : void 0,
                  children: [(0, VG.jsx)("div", {
                    className: yG()("BottomLeftElements", {
                      Touch: wG
                    }),
                    children: (0, VG.jsxs)(ay, {
                      children: [(0, VG.jsx)(YS, {}), !wG && (0, VG.jsx)(Wy.b, {})]
                    })
                  }), (0, VG.jsx)(ay, {
                    children: (0, VG.jsx)(qy, {})
                  }), (0, VG.jsx)(ay, {
                    children: (0, VG.jsx)(Pw, {
                      isTouchScreen: wG
                    })
                  })]
                })]
              }), (0, VG.jsx)("div", {
                className: "MiddleLeft"
              }), wG && (0, VG.jsx)(ay, {
                children: (0, VG.jsx)(KZ, {})
              }), (0, VG.jsx)("div", {
                className: "CameraFadeHost",
                ref: ub.k
              })]
            }), (0, VG.jsx)(hG.f, {
              children: (0, VG.jsx)(hL.e, {})
            }), (0, VG.jsx)(hG.f, {
              children: (0, VG.jsx)(wL, {})
            }), (0, VG.jsx)(ay, {
              first: !0,
              children: (0, VG.jsx)(VS.b, {})
            }), (0, VG.jsx)(hG.f, {
              children: (0, VG.jsx)(jy, {})
            })]
          })
      }));

    function jy() {
      return (0, SG.useEffect)((() => {
        const GG = setTimeout((() => {
          (0, oG.h)()
        }), 0);
        return () => {
          clearTimeout(GG), oG.l.VJ(!1)
        }
      }), []), null
    }
    const Py = (0, SG.memo)((function() {
        const GG = (0, UG.j)("aimingOverlay", "none");
        (0, rG.b)();
        const bG = (0, EG.l)("middleTextUpper"),
          ZG = (0, EG.l)("middleTextLower");
        return (0, VG.jsxs)("div", {
          className: "MiddleTextBottom",
          style: "sniper" === GG ? {
            visibility: "hidden"
          } : {},
          children: [(0, VG.jsx)(sy, {
            text: bG,
            className: "MiddleText MiddleTextUpper SmallTextBold",
            maxHeightFraction: My
          }), (0, VG.jsx)(sy, {
            text: ZG,
            className: "MiddleText",
            maxHeightFraction: Ay
          })]
        })
      })),
      My = .3,
      Ay = .2;

    function sy(GG) {
      let {
        text: bG,
        className: ZG,
        maxHeightFraction: wG
      } = GG;
      const LG = (0, SG.useRef)(null),
        yG = (0, SG.useRef)(null);
      return function(GG, bG, ZG, wG) {
        (0, SG.useLayoutEffect)((() => {
          const wG = GG.current,
            SG = bG.current;
          if (!wG || !SG) return;
          let LG = -1,
            yG = -1;
          const kG = GG => (SG.style.setProperty("zoom", String(GG)), wG.getBoundingClientRect().height),
            UG = () => {
              const GG = document.documentElement.clientHeight * ZG;
              let bG = 1;
              if (kG(1) > GG) {
                let ZG = .5,
                  wG = 1;
                for (let bG = 0; bG < 6; bG++) {
                  const bG = (ZG + wG) / 2;
                  kG(bG) <= GG ? ZG = bG : wG = bG
                }
                bG = ZG
              }
              yG = kG(bG), LG = wG.getBoundingClientRect().width
            };
          UG();
          let YG = 0;
          const VG = () => {
              cancelAnimationFrame(YG), YG = requestAnimationFrame(UG)
            },
            pG = new ResizeObserver((() => {
              const {
                width: GG,
                height: bG
              } = wG.getBoundingClientRect();
              GG === LG && bG === yG || VG()
            }));
          return pG.observe(wG), window.addEventListener("resize", VG), () => {
            pG.disconnect(), window.removeEventListener("resize", VG), cancelAnimationFrame(YG), SG.style.removeProperty("zoom")
          }
        }), [GG, bG, ZG, wG])
      }(LG, yG, wG, bG.content), (0, VG.jsx)("div", {
        ref: LG,
        className: "MiddleTextFit",
        children: (0, VG.jsx)(kL, {
          ref: yG,
          text: bG,
          className: ZG
        })
      })
    }
    const qy = (0, SG.memo)((function() {
        const GG = (0, UG.j)("aimingOverlay", "none");
        (0, rG.b)();
        const bG = (0, EG.i)("useInventory");
        return (0, VG.jsxs)("div", {
          className: "BottomMiddleElements",
          style: "sniper" === GG ? {
            visibility: "hidden"
          } : {},
          children: [(0, VG.jsx)(pG, {}), (0, VG.jsx)(jZ.b, {}), (0, VG.jsx)(PZ, {}), (0, VG.jsx)(hG.f, {
            children: (0, VG.jsx)(cS, {})
          }), (0, VG.jsxs)("div", {
            className: "HotBarRow",
            children: [bG ? (0, VG.jsx)(nG.c, {}) : (0, VG.jsx)(nG.e, {}), (0, VG.jsx)(eG, {})]
          })]
        })
      })),
      ny = (0, SG.memo)((function(GG) {
        let {
          showChat: bG
        } = GG;
        const {
          t: ZG
        } = (0, vG.w)(), {
          clientEscMenuOptions: wG,
          isTouchScreen: LG
        } = (0, CG.o)(["clientEscMenuOptions", "isTouchScreen"]);
        (0, rG.b)();
        const {
          userContext: kG,
          isUserContextUpdating: UG
        } = (0, JG.e)(), YG = (0, EG.i)("hideCoordinates"), pG = (0, EG.i)("customVariationTitle"), {
          requestedGameNameWithVariation: QG,
          gameNameWithVariation: KG,
          lobbyName: hG,
          shownLobbyName: dG
        } = (0, iG.f)("connectedGame"), oG = (0, fG.b)(QG, hG, !1), [XG, uG] = (0, SG.useState)(null), WG = (0, mS.i)(KG || QG || ""), mG = pG || WG || "";
        (0, SG.useEffect)((() => {
          UG || Nw.d.getFavouriteLobbies(kG).then((GG => {
            console.log("Got favourite lobbies", GG), uG(GG)
          }))
        }), [UG, kG]);
        const IG = (0, SG.useRef)(null);
        return (0, SG.useLayoutEffect)((() => {
          const GG = IG.current,
            bG = document.documentElement,
            ZG = new ResizeObserver((() => {
              bG.style.setProperty("--InGameHeaderRowsHeight", `${GG.offsetHeight}px`)
            }));
          return ZG.observe(GG), () => {
            ZG.disconnect(), bG.style.removeProperty("--InGameHeaderRowsHeight")
          }
        }), []), Tw(IG), (0, VG.jsxs)(VG.Fragment, {
          children: [(0, VG.jsxs)("div", {
            className: yG()(nw.e, {
              Touchscreen: LG
            }),
            ref: IG,
            children: [(0, VG.jsxs)("div", {
              className: "InGameHeader",
              children: [(0, VG.jsxs)("div", {
                className: "InGameHeaderLogo",
                onMouseDown: GG => {
                  GG.stopPropagation(), GG.preventDefault()
                },
                onClick: () => {
                  CG.e.set({
                    openEverythingMenuName: zG.u.SETTINGS
                  })
                },
                children: [(0, VG.jsx)(WS.b, {
                  showFace: !0,
                  loading: !1
                }), "bloxd.io"]
              }), (0, VG.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, VG.jsxs)("div", {
                className: "InGameHeaderGameName",
                children: [null === oG && (0, VG.jsx)(WS.b, {}), null !== oG && (0, VG.jsxs)(VG.Fragment, {
                  children: [oG, mG && ` ${mG}`]
                })]
              }), (0, VG.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, VG.jsx)("div", {
                className: "InGameHeaderLobbyName",
                children: dG
              }), (0, IS.F)(hG) && (0, VG.jsx)(MG.h, {
                tooltipInner: (0, VG.jsx)("div", {
                  children: ZG(null !== XG && XG.includes(hG) ? "customLobby:removeFromFavourites" : "customLobby:addToFavourites")
                }),
                children: (0, VG.jsx)("div", {
                  children: (0, VG.jsx)(gZ.o, {
                    isLiked: null !== XG && XG.includes(hG),
                    onClick: () => {
                      try {
                        if (!XG) return;
                        XG.includes(hG) ? (Nw.d.unfavouriteLobby(kG, hG).catch((GG => {
                          console.error("Failed to favourite lobby", GG)
                        })), uG(XG.filter((GG => GG !== hG)))) : (Nw.d.favouriteLobby(kG, hG).catch((GG => {
                          console.error("Failed to favourite lobby", GG)
                        })), uG([...XG, hG]))
                      } catch (GG) {
                        console.error("Failed to like lobby", GG)
                      }
                    },
                    isLoading: null === XG
                  })
                })
              }), (0, VG.jsx)(fL, {})]
            }), (0, VG.jsx)(ES, {
              show: wG.showFPS
            }), !YG && wG.showCoordinates && (0, VG.jsx)(uS, {}), !YG && wG.showChunkCoordinates && (0, VG.jsx)(iS, {}), (0, VG.jsx)(YL, {})]
          }), (0, VG.jsx)("div", {
            className: "TopLeftElements",
            "data-holds-camera-keeper": "",
            children: (0, VG.jsx)("div", {
              className: "InGameHeaderAndChat",
              "data-holds-camera-keeper": "",
              children: bG && (0, VG.jsx)(tG.c, {})
            })
          })]
        })
      })),
      gy = (0, SG.memo)((function() {
        (0, rG.b)();
        const GG = (0, EG.l)("RightInfoText"),
          [bG, ZG] = (0, SG.useState)(null);
        return (0, rb.g)(bG, ".RightElements"), GG.hasText ? (0, VG.jsx)("div", {
          className: "RightInfoDivContainer",
          children: (0, VG.jsx)(kL, {
            ref: ZG,
            text: GG,
            className: "RightInfoDiv",
            children: (0, VG.jsx)("div", {
              className: "RightInfoDivInner",
              children: (0, VG.jsx)(YG.c, {
                text: GG.content
              })
            })
          })
        }) : null
      }))
  },
  4858: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => kG
    });
    var wG = ZG(51),
      SG = ZG(333),
      LG = ZG(1889),
      yG = ZG(1067);

    function kG(GG) {
      let {
        text: bG
      } = GG;
      const ZG = [];
      let kG = "";
      return (0, SG.xc)(bG).forEach(((GG, bG) => {
        if ("string" === typeof GG || !(0, LG.e)(GG.icon)) return void(kG += "string" === typeof GG ? GG : GG.icon);
        const SG = Math.max(0, kG.trimEnd().search(/\S{1,12}$/));
        ZG.push((0, yG.jsxs)(wG.Fragment, {
          children: [kG.slice(0, SG), (0, yG.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [kG.slice(SG), (0, yG.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": GG.icon,
              children: (0, yG.jsx)(LG.b, {
                itemName: GG.icon,
                amount: 0
              })
            })]
          })]
        }, bG)), kG = ""
      })), ZG.push(kG), (0, yG.jsx)(yG.Fragment, {
        children: ZG
      })
    }
  },
  36867: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => fG,
      g: () => VG,
      i: () => pG
    });
    var wG = ZG(51),
      SG = ZG(1006),
      LG = ZG.n(SG),
      yG = ZG(1889),
      kG = ZG(1067);
    const UG = 350;
    let YG = 0;

    function VG() {
      return YG += 1, YG
    }

    function pG(GG, bG) {
      let ZG = 0;
      for (const wG of GG) "ingredient" !== wG.kind && wG.ZU === bG && (ZG += wG.amount);
      return ZG > 0 ? {
        idx: bG,
        amount: ZG
      } : null
    }

    function fG(GG) {
      var bG, ZG;
      let {
        anim: SG,
        onComplete: YG
      } = GG;
      const VG = null !== (bG = SG.delayMs) && void 0 !== bG ? bG : 0,
        pG = null !== (ZG = SG.durationMs) && void 0 !== ZG ? ZG : UG,
        [fG, QG] = (0, wG.useState)(SG.from),
        [KG, hG] = (0, wG.useState)(0 === VG),
        [dG, JG] = (0, wG.useState)(!1),
        rG = (0, wG.useRef)(!1);
      return (0, wG.useEffect)((() => {
        let GG, bG;
        const ZG = () => {
            rG.current = !0, hG(!0), GG = requestAnimationFrame((() => {
              bG = requestAnimationFrame((() => {
                QG({
                  x: SG.to.x,
                  y: SG.to.y
                }), JG(!0)
              }))
            }))
          },
          wG = rG.current ? 0 : VG;
        let LG;
        wG > 0 ? LG = setTimeout(ZG, wG) : ZG();
        const yG = setTimeout((() => {
          YG(SG.id)
        }), wG + pG + 50);
        return () => {
          clearTimeout(LG), cancelAnimationFrame(GG), cancelAnimationFrame(bG), clearTimeout(yG)
        }
      }), [SG.id, SG.to.x, SG.to.y, YG, VG, pG]), (0, kG.jsx)("div", {
        className: LG()("CraftItemFlyAnimation", {
          Ingredient: "ingredient" === SG.kind,
          Waiting: !KG,
          Arrived: dG
        }),
        style: {
          left: fG.x,
          top: fG.y,
          "--fly-duration": `${pG}ms`
        },
        children: (0, kG.jsx)(yG.b, {
          itemName: SG.itemName,
          amount: SG.amount
        })
      })
    }
  },
  36848: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => PG,
      e: () => sG
    });
    var wG = ZG(51),
      SG = ZG(3004),
      LG = ZG(6580),
      yG = ZG(2044),
      kG = ZG(2409),
      UG = ZG(8870),
      YG = ZG(352),
      VG = ZG(19),
      pG = ZG(1389),
      fG = ZG(29),
      QG = ZG(1006),
      KG = ZG.n(QG),
      hG = ZG(333),
      dG = ZG(36853),
      JG = ZG(1876),
      rG = ZG(1945),
      zG = ZG(8732),
      EG = ZG(1067);

    function oG(GG) {
      var bG, ZG;
      let {
        slotIdx: LG
      } = GG;
      const yG = (0, rG.c)("hotbar", (GG => {
          var bG;
          return null !== (bG = GG.items[LG]) && void 0 !== bG ? bG : null
        })),
        UG = (0, rG.c)("hotbar", (GG => GG.ammo)),
        [VG, pG] = (0, wG.useState)(!1),
        fG = (0, wG.useRef)(null),
        [QG, hG] = (0, wG.useState)(null),
        [dG, oG] = (0, wG.useState)(null),
        XG = (0, kG.i)("maxAuraLevel"),
        uG = (0, SG.d)(),
        iG = (0, wG.useCallback)((() => {
          if (clearTimeout(fG.current), yG) {
            var GG, bG, ZG, wG;
            const UG = yG.displayName,
              VG = [],
              pG = Array.isArray(UG) ? UG : [UG],
              fG = {
                fontStyle: null !== (GG = yG.attributes.customAttributes) && void 0 !== GG && GG.author ? "italic" : "normal"
              };
            for (const GG of pG) GG.str ? VG.push(GG) : VG.push({
              str: GG,
              style: fG
            });
            if (null !== (bG = yG.attributes.customAttributes) && void 0 !== bG && bG.enchantments) {
              VG.push(" ");
              const GG = Object.entries(yG.attributes.customAttributes.enchantments).sort(((GG, bG) => bG[1] - GG[1])),
                bG = yG.attributes.customAttributes.enchantmentData;
              for (const [ZG, wG] of GG) {
                var SG, LG;
                const GG = null !== (SG = null === bG || void 0 === bG || null === (LG = bG[ZG]) || void 0 === LG ? void 0 : LG.icon) && void 0 !== SG ? SG : `${ZG} Enchantment`;
                var kG;
                if (wG < 4)
                  for (let bG = 0; bG < wG; bG++) VG.push({
                    icon: GG,
                    style: {
                      fontSize: "1.5em"
                    }
                  });
                else VG.push({
                  icon: GG,
                  style: {
                    fontSize: "1.5em"
                  }
                }), VG.push(null !== (kG = (0, YG.X)(wG)) && void 0 !== kG ? kG : wG.toString())
              }
            }
            hG(VG), oG(null !== (ZG = null === (wG = yG.attributes.customAttributes) || void 0 === wG ? void 0 : wG.enchantmentTier) && void 0 !== ZG ? ZG : null)
          } else hG(null), oG(null);
          pG(!0), uG();
          const UG = null === yG || void 0 === yG ? void 0 : yG.attributes.customAttributes;
          void 0 === (null === UG || void 0 === UG ? void 0 : UG.shotsLeft) && (fG.current = setTimeout((() => {
            pG(!1)
          }), 2e3))
        }), [null === yG || void 0 === yG ? void 0 : yG.name, LG, null === yG || void 0 === yG ? void 0 : yG.instance, null === yG || void 0 === yG ? void 0 : yG.displayName]);
      (0, wG.useEffect)((() => (iG(), () => {
        clearTimeout(fG.current), pG(!1)
      })), [null === yG || void 0 === yG ? void 0 : yG.name, LG, null === yG || void 0 === yG ? void 0 : yG.instance, iG]);
      const CG = null === yG || void 0 === yG || null === (bG = yG.attributes.customAttributes) || void 0 === bG ? void 0 : bG.shotsLeft,
        WG = void 0 === CG ? null : (0, EG.jsx)("div", {
          className: "SelectedItemShotsLeft",
          children: `${CG}|${yG.requiresAmmo?`${UG}x${yG.clipSize}`:yG.clipSize}`
        }),
        mG = (0, zG.n)();
      return (0, EG.jsx)(EG.Fragment, {
        children: VG && yG && !mG.showing ? (0, EG.jsxs)("div", {
          className: KG()("SelectedItemName SmallTextBold", {
            NoAuraBar: 0 === XG,
            Enchanted: null !== dG
          }),
          style: {
            "--enchantmentColour": null !== (ZG = YG.wb[dG]) && void 0 !== ZG ? ZG : YG.wb.None,
            "--duration": dG ? (0, YG.rb)(dG) + "s" : void 0
          },
          children: [dG && (0, EG.jsxs)("div", {
            className: "SelectedItemNameGradient",
            children: [(0, EG.jsx)(JG.c, {
              text: QG
            }), WG]
          }), (0, EG.jsxs)("div", {
            className: "SelectedItemNameNormal",
            children: [(0, EG.jsx)(JG.c, {
              text: QG
            }), WG]
          })]
        }) : null
      })
    }
    var XG = ZG(36867),
      uG = ZG(17),
      iG = ZG(1895),
      CG = ZG(604),
      WG = ZG(2414),
      mG = ZG(3390),
      IG = ZG(3395);
    var FG = ZG(1088),
      vG = ZG(1081),
      aG = ZG(2465);

    function cG() {
      return parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--touch-hotbar-ends-spare")) >= 0
    }
    var lG = ZG(8946),
      jG = ZG(1405);
    const PG = (0, wG.memo)((function() {
      const [GG, bG] = (0, wG.useState)(0), ZG = (0, kG.i)("useFullInventory"), yG = (0, kG.i)("highlightedHotbarSlots"), {
        isTouchScreen: UG,
        openInGameMenuName: YG
      } = (0, uG.o)(["isTouchScreen", "openInGameMenuName"]), fG = null !== YG && "inventory" !== YG, QG = (0, rG.f)("fullInventory") && "inventory" === YG, hG = function() {
        const GG = (0, FG.k)(((GG, bG) => `${GG}:${(0,vG.b)(GG,bG)?"portrait":"landscape"}`)),
          [bG, ZG] = (0, wG.useState)(cG);
        return (0, wG.useLayoutEffect)((() => {
          ZG(cG())
        }), [GG]), (0, pG.g)(aG.e, (() => {
          ZG(cG())
        })), bG
      }(), JG = UG && !hG;
      ! function(GG, bG, ZG) {
        (0, wG.useLayoutEffect)((() => {
          const wG = document.documentElement.classList;
          return GG && (wG.add("TouchHotbar"), wG.toggle("TouchHotbarKeysAbove", bG), wG.toggle("TouchHotbarHasBag", ZG)), (0, mG.d)(), VG.l.xh(IG.e), () => {
            wG.remove("TouchHotbar", "TouchHotbarKeysAbove", "TouchHotbarHasBag"), (0, mG.d)(), VG.l.xh(IG.e)
          }
        }), [GG, bG, ZG])
      }(UG, JG, ZG);
      const [zG, WG] = (0, LG.b)("changedHotbarUsingNumkeys", !0), lG = (0, rG.c)("hotbar", (GG => GG.selectedSlot)), jG = null !== lG && void 0 !== lG ? lG : GG, PG = (0, SG.d)(), qG = (0, wG.useRef)(null), nG = (0, pG.j)("pointerLockUpdate", Boolean(document.pointerLockElement));
      (0, pG.g)("inventoryDraggedItemUpdated", (GG => {
        qG.current = GG, PG()
      })), (0, rG.b)("hotbarScrolled", (GG => {
        null === lG && RG(GG)
      })), (0, rG.b)("hotbarSlotRequested", (GG => {
        eG(GG), WG(!1)
      })), (0, rG.b)("numberKeyPressed", (() => {
        WG(!1)
      })), (0, rG.b)("hotbarDropRequested", (GG => {
        const bG = iG.gameBridge.latest("hotbar").items[jG];
        if (bG) {
          var ZG;
          const wG = GG && null !== (ZG = bG.amount) && void 0 !== ZG ? ZG : 1;
          iG.gameBridge.send("removeInventoryItem", {
            slot: jG,
            amount: wG,
            drop: !0
          })
        }
      }));
      const eG = GG => {
          iG.gameBridge.send("selectHotbarSlot", GG), bG(GG)
        },
        RG = GG => {
          eG((jG + GG + CG.s) % CG.s)
        };
      let TG, HG = null,
        tG = null,
        DG = GG => GG => {},
        NG = GG => bG => {
          eG(GG)
        },
        OG = GG => GG => {},
        xG = [];
      if (QG) {
        var BG;
        const GG = qG.current;
        if (null === GG || void 0 === GG || !GG.setHovered) return (0, EG.jsx)("div", {
          className: KG()("HotBarContainer", {
            Touch: UG,
            KeysAbove: JG
          }),
          children: (0, EG.jsx)("div", {
            className: "HotBar"
          })
        });
        HG = GG.draggedInfo, tG = GG.specialItemInfo, DG = GG.setHovered, NG = GG.pointerDown, OG = GG.pointerUp, TG = GG.variation, xG = null !== (BG = GG.craftFlyAnims) && void 0 !== BG ? BG : []
      }
      return (0, EG.jsxs)("div", {
        className: KG()("HotBarContainer", {
          Touch: UG,
          PopupOpen: UG && fG,
          KeysAbove: JG
        }),
        children: [(0, EG.jsxs)("div", {
          className: KG()("HotBar", {
            HoverDisabled: nG
          }),
          children: [UG && (0, EG.jsxs)(EG.Fragment, {
            children: [(0, EG.jsx)(AG, {
              useFullInventory: ZG,
              inventoryOpen: QG
            }), (0, EG.jsx)(MG, {
              direction: "Previous",
              onPress: () => {
                RG(-1)
              }
            })]
          }), !UG && (0, EG.jsxs)(EG.Fragment, {
            children: [(0, EG.jsx)(sG, {}), (0, EG.jsx)("div", {
              className: "HotBarFiller"
            })]
          }), (0, EG.jsx)("div", {
            className: "HotBarGameItemsContainer",
            children: new Array(10).fill(0).map(((GG, bG) => (0, EG.jsx)(dG.b, {
              idx: bG,
              draggedInfo: HG,
              specialItemInfo: tG,
              craftFlyHoldbackInfo: (0, XG.i)(xG, bG),
              setHovered: DG(bG),
              pointerDown: NG(bG),
              pointerUp: OG(bG),
              variation: TG,
              isSelected: bG === jG,
              hotbarHighlighted: !0 === (null === yG || void 0 === yG ? void 0 : yG.includes(bG)),
              hoverDisabled: nG,
              showNumber: zG && !UG
            }, bG)))
          }), UG && (0, EG.jsx)(MG, {
            direction: "Next",
            onPress: () => {
              RG(1)
            }
          }), !UG && (0, EG.jsxs)(EG.Fragment, {
            children: [(0, EG.jsx)("div", {
              className: "HotBarFiller"
            }), (0, EG.jsx)("div", {
              className: KG()("HotBarItem ButtonHotBarItem", {
                HiddenButtonHotBarItem: !ZG
              }),
              onPointerDown: () => {
                VG.l.xh("toggleMenu", "inventory")
              },
              children: (0, EG.jsx)(gG, {})
            })]
          })]
        }), (0, EG.jsx)(oG, {
          slotIdx: jG
        })]
      })
    }));

    function MG(GG) {
      let {
        direction: bG,
        onPress: ZG
      } = GG;
      return (0, EG.jsx)("div", {
        className: KG()("HotBarArrow", bG),
        ...jG.d,
        children: (0, EG.jsx)(yG.b, {
          icon: "Previous" === bG ? "caret-left" : "caret-right",
          touchPressOn: "pointerdown",
          onClick: ZG
        })
      })
    }
    const AG = (0, wG.memo)((function(GG) {
        let {
          useFullInventory: bG,
          inventoryOpen: ZG
        } = GG;
        const SG = (0, kG.i)("maxAuraLevel"),
          LG = (0, wG.useRef)(null),
          yG = (0, UG.b)();
        return function(GG, bG, ZG) {
          (0, wG.useLayoutEffect)((() => (document.documentElement.classList.toggle("TouchHotbarHasShop", bG), () => {
            document.documentElement.classList.remove("TouchHotbarHasShop")
          })), [bG]), (0, wG.useLayoutEffect)((() => {
            const bG = GG.current.closest(".BottomMiddleElements");
            return bG.classList.toggle("TouchInventoryOpen", ZG), () => {
              bG.classList.remove("TouchInventoryOpen")
            }
          }), [GG, ZG])
        }(LG, yG, ZG), (0, lG.h)(LG, yG, ZG), (0, EG.jsxs)("div", {
          ref: LG,
          className: KG()("TouchInventoryKeys", {
            NoAuraBar: 0 === SG,
            InventoryOpen: ZG
          }),
          children: [(0, EG.jsx)(sG, {
            touchKey: !0
          }), (0, EG.jsx)("div", {
            className: KG()("TouchInventoryKey BagKey", {
              Hidden: !bG
            }),
            ...jG.d,
            children: (0, EG.jsx)(gG, {
              touchKey: !0
            })
          })]
        })
      })),
      sG = (0, wG.memo)((function(GG) {
        let {
          touchKey: bG = !1
        } = GG;
        const ZG = (0, UG.b)();
        return (0, EG.jsx)("div", {
          className: bG ? KG()("TouchInventoryKey ShopKey", {
            Hidden: !ZG
          }) : KG()("HotBarItem ButtonHotBarItem", {
            HiddenButtonHotBarItem: !ZG
          }),
          ...bG ? jG.d : {},
          children: (0, EG.jsx)(yG.b, {
            icon: (0, YG.jc)(),
            noaAction: "OpenShop",
            touchPressOn: "pointerdown",
            onClick: () => {
              ZG && uG.e.set({
                openEverythingMenuName: hG.u.SHOP
              })
            },
            showTouchTutorialPubSubId: "showShopTouchTutorial",
            showRedDotPubSubId: "showShopIconRedDot",
            touchIconPosition: "topleft"
          })
        })
      }));

    function qG(GG) {
      let {
        player: bG
      } = GG;
      return bG.some((GG => null !== GG && YG.id.includes(GG.name)))
    }

    function nG(GG) {
      GG.creative || fG.h.getItem("LogInInventoryRedDotTutorialComplete") || (qG(GG) ? (VG.l.xh("RedDotOpenInventoryIcon", !0), VG.l.xh("TouchTutorialOpenInventoryIcon", !0)) : (VG.l.xh("RedDotOpenInventoryIcon", !1), VG.l.xh("TouchTutorialOpenInventoryIcon", !1)))
    }
    const gG = (0, wG.memo)((function(GG) {
      let {
        touchKey: bG = !1
      } = GG;
      (0, wG.useEffect)((() => {
        nG(iG.gameBridge.latest("inventory"))
      }), []), (0, rG.b)("inventory", nG);
      const ZG = (0, WG.h)();
      return (0, pG.g)("toggleMenu", (GG => {
        ZG.shown && (null !== GG && void 0 !== GG && GG.startsWith("inventory") && qG(iG.gameBridge.latest("inventory")) ? (fG.h.setItem("LogInInventoryRedDotTutorialComplete", !0), VG.l.xh("RedDotOpenInventoryIcon", !1), VG.l.xh("TouchTutorialOpenInventoryIcon", !1)) : "shop" === GG && VG.l.xh("showShopTouchTutorial", !1))
      })), bG ? (0, EG.jsx)(yG.b, {
        icon: "backpack",
        noaAction: "OpenInventory",
        touchPressOn: "pointerdown",
        onClick: () => {
          VG.l.xh("toggleMenu", "inventory")
        },
        showRedDotPubSubId: "RedDotOpenInventoryIcon",
        showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
        touchIconPosition: "topleft"
      }) : (0, EG.jsx)("div", {
        className: "HotBarButton",
        onPointerDown: () => {
          VG.l.xh("toggleMenu", "inventory")
        },
        children: (0, EG.jsx)(yG.b, {
          icon: "backpack",
          noaAction: "OpenInventory",
          onPointerDown: GG => {
            VG.l.xh("toggleMenu", "inventory"), GG.stopPropagation()
          },
          showRedDotPubSubId: "RedDotOpenInventoryIcon",
          showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
          touchIconPosition: "topleft"
        })
      })
    }))
  },
  36853: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => dG,
      d: () => KG
    });
    var wG = ZG(51),
      SG = ZG(1006),
      LG = ZG.n(SG),
      yG = ZG(1893),
      kG = ZG(1889),
      UG = ZG(1895),
      YG = ZG(1945),
      VG = ZG(36860),
      pG = ZG(34489),
      fG = ZG(1343),
      QG = ZG(1067);
    const KG = (GG, bG, ZG) => {
      let wG = bG,
        SG = !1;
      for (const LG of ZG)(null === LG || void 0 === LG ? void 0 : LG.idx) === GG && (SG = !0, wG > 0 && (wG -= LG.amount));
      return {
        displayedAmt: wG,
        shown: !SG || wG > 0
      }
    };
    const hG = GG => {
        let {
          idx: bG
        } = GG;
        return (0, fG.w)() ? null : (0, QG.jsx)("div", {
          className: "HotbarItemNumber SmallTextBold",
          children: bG < 9 ? bG + 1 : 0
        })
      },
      dG = (0, wG.memo)((function(GG) {
        var bG, ZG, wG;
        let {
          idx: SG,
          setHovered: fG,
          pointerDown: dG,
          pointerUp: JG,
          draggedInfo: rG,
          specialItemInfo: zG,
          craftFlyHoldbackInfo: EG,
          defaultIconB64: oG = null,
          variation: XG,
          isSelected: uG = !1,
          hotbarHighlighted: iG = !1,
          hoverDisabled: CG = !1,
          showNumber: WG = !1,
          showNewDot: mG = !1
        } = GG;
        const IG = (0, YG.c)("inventory", (GG => SG === VG.h ? null : (0, pG.j)(GG, SG)));
        let FG, vG, aG, cG;
        if (SG === VG.h) zG && (FG = zG.name, aG = zG.amount, cG = zG.attributes);
        else if (IG) {
          var lG;
          FG = IG.name, vG = IG.icon, aG = null !== (lG = IG.amount) && void 0 !== lG ? lG : 0, cG = IG.attributes
        }
        const jG = null === (bG = cG) || void 0 === bG || null === (ZG = bG.customAttributes) || void 0 === ZG ? void 0 : ZG.enchantmentTier,
          PG = (0, yG.g)(cG),
          {
            displayedAmt: MG,
            shown: AG
          } = KG(SG, aG, [rG, zG, EG]),
          sG = FG && AG,
          qG = void 0 !== XG && function(GG, bG) {
            const {
              enchantable: ZG,
              salvageable: wG
            } = UG.gameBridge.latest("stationItems");
            return "Enchanting Table" === GG ? !0 === ZG[bG] : "Salvaging Table" === GG && !0 === wG[bG]
          }(XG, FG);
        return (0, QG.jsxs)("div", {
          className: LG()("InvenItem", {
            Highlighted: sG && qG,
            Selected: uG,
            HotbarHighlighted: iG,
            HoverDisabled: CG
          }),
          onPointerEnter: () => {
            null === fG || void 0 === fG || fG(!0)
          },
          onPointerLeave: () => {
            null === fG || void 0 === fG || fG(!1)
          },
          onPointerDown: dG,
          onPointerUp: JG,
          "data-inven-idx": SG,
          children: [sG && (0, QG.jsx)(kG.b, {
            itemName: null !== (wG = vG) && void 0 !== wG ? wG : FG,
            amount: MG,
            enchantmentTier: jG,
            bar: PG
          }), sG && mG && (0, QG.jsx)("div", {
            className: "InvenItemNewDot"
          }), WG && (0, QG.jsx)(hG, {
            idx: SG
          }), oG && !sG && (0, QG.jsx)("div", {
            className: "InvenItemUnfilled",
            style: {
              backgroundImage: `url(${oG})`
            }
          })]
        })
      }))
  },
  36860: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => wG,
      h: () => SG
    });
    const wG = -1,
      SG = -2
  },
  37374: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => CG
    });
    var wG = ZG(51),
      SG = ZG(37379),
      LG = ZG(1876),
      yG = ZG(580),
      kG = ZG(19),
      UG = ZG(1006),
      YG = ZG.n(UG),
      VG = ZG(36891),
      pG = ZG(2580),
      fG = ZG(36898),
      QG = ZG(2613),
      KG = ZG(2587),
      hG = ZG(3590),
      dG = ZG(36904),
      JG = ZG(17),
      rG = ZG(2009),
      zG = ZG(2359),
      EG = ZG(1177),
      oG = ZG(4939),
      XG = ZG(1945),
      uG = ZG(80),
      iG = ZG(1067);
    const CG = (0, wG.memo)((function() {
      const GG = (0, SG.e)(),
        bG = (0, XG.f)("players"),
        ZG = (0, XG.f)("lobbyLeaderboardRows"),
        kG = (0, XG.f)("hiddenPlayerNames"),
        UG = (0, wG.useRef)(null),
        [YG, VG] = (0, wG.useReducer)((GG => GG + 1), 0);
      return (0, wG.useEffect)((() => (0, rG.e)((() => {
        VG()
      }))), []), (0, iG.jsx)("div", {
        className: "LobbyLeaderboardContainer Menu",
        children: (0, iG.jsx)("div", {
          className: "MenuBody",
          children: function() {
            if (!GG) return (0, iG.jsx)(iG.Fragment, {});
            const wG = [...bG.ids],
              SG = {},
              YG = {};
            for (const GG of wG) {
              var VG, pG;
              SG[GG] = null === (VG = ZG[GG]) || void 0 === VG ? void 0 : VG.colour;
              const bG = null === (pG = ZG[GG]) || void 0 === pG ? void 0 : pG.values;
              bG && (YG[GG] = {
                ...bG
              })
            }
            const QG = Object.keys(GG);
            QG.sort(((bG, ZG) => GG[bG].sortPriority - GG[ZG].sortPriority)), wG.sort(((bG, ZG) => {
              if (!YG[bG] || !YG[ZG]) return 0;
              for (const wG of QG) {
                const SG = YG[bG][wG],
                  LG = YG[ZG][wG];
                let yG = 0;
                if ("string" == typeof SG && "string" == typeof LG ? yG = SG.localeCompare(LG) : "number" == typeof SG && "number" == typeof LG ? yG = SG - LG : "number" == typeof SG && "string" == typeof LG ? yG = 1 : "string" == typeof SG && "number" == typeof LG && (yG = -1), yG) return yG * ("ascending" === GG[wG].sortOrder ? 1 : -1)
              }
              return 0
            }));
            for (const GG of wG) {
              var KG, hG, dG;
              const {
                name: wG,
                ranks: SG,
                cosmetics: LG
              } = bG.byId[GG], kG = [], UG = null !== (KG = null === (hG = ZG[GG]) || void 0 === hG || null === (dG = hG.tags) || void 0 === dG ? void 0 : dG.flatMap((GG => 0 === GG.length ? GG : [...GG, String.fromCharCode(8198)]))) && void 0 !== KG ? KG : [];
              kG.push(...UG), kG.push(...(0, EG.w)(SG, wG, (null === LG || void 0 === LG ? void 0 : LG.nameColour) === yG.d || null === LG || void 0 === LG ? void 0 : LG.nameColour)), YG[GG] ??= {}, YG[GG].name = kG
            }

            function JG(GG, ZG) {
              if (YG[GG] && void 0 !== YG[GG][ZG]) {
                if ("name" === ZG) {
                  const {
                    name: wG,
                    cosmetics: SG
                  } = bG.byId[GG];
                  return (0, iG.jsxs)("div", {
                    className: "PlayerPfpAndName",
                    children: [SG && (0, iG.jsx)(zG.c, {
                      cosmetics: SG
                    }), " ", (0, iG.jsx)(LG.c, {
                      text: YG[GG][ZG],
                      friendBadgeFor: (0, rG.f)(wG, kG) ? wG : void 0
                    })]
                  })
                }
                return (0, iG.jsx)(LG.c, {
                  text: YG[GG][ZG]
                })
              }
              return ""
            }
            const XG = Object.keys(GG).filter((bG => !0 !== GG[bG].hidden)).map((bG => {
              var ZG;
              return {
                key: bG,
                header: (0, iG.jsx)(LG.c, {
                  text: null !== (ZG = GG[bG].displayName) && void 0 !== ZG ? ZG : ""
                })
              }
            }));
            return (0, iG.jsx)("div", {
              ref: UG,
              className: "LobbyLeaderboard",
              children: (0, iG.jsx)(oG.e, {
                columns: XG,
                rows: wG,
                getRowKey: GG => GG,
                renderRow: ZG => {
                  const wG = ZG !== bG.localId;
                  return (0, iG.jsx)(WG, {
                    playerId: ZG,
                    playerName: bG.byId[ZG].name,
                    isOtherPlayer: wG,
                    opensProfileCard: (0, fG.f)(wG, bG.byId[ZG].name, kG),
                    lobbyLeaderboardInfo: GG,
                    getPlayerValue: JG,
                    playerColors: SG
                  })
                }
              })
            })
          }()
        })
      })
    }));

    function WG(GG) {
      let {
        playerId: bG,
        playerName: ZG,
        isOtherPlayer: SG,
        opensProfileCard: LG,
        lobbyLeaderboardInfo: yG,
        getPlayerValue: UG,
        playerColors: rG
      } = GG;
      const zG = (0, wG.useRef)(null);
      (0, wG.useEffect)((() => () => {
        pG.b.closeIfOwner(zG)
      }), []);
      const EG = {
          icon: "flag",
          text: "Report",
          onClick: () => {
            kG.l.xh("OpenReportMenu", {
              playerEId: bG,
              playerName: ZG,
              vV: null,
              serverChatMsgId: null
            })
          }
        },
        oG = () => ({
          ...(0, fG.c)(bG, ZG),
          showLocation: !1,
          status: null,
          extraActions: [EG],
          moderationActions: null === ZG ? [] : (0, dG.b)(ZG),
          friendRequestSource: "leaderboard"
        });
      return (0, iG.jsxs)("tr", {
        ref: zG,
        "data-pad-focusable": LG || void 0,
        [pG.d]: LG || void 0,
        onClick: LG ? () => {
          var GG;
          pG.b.toggle(zG, {
            ...oG(),
            anchor: null !== (GG = zG.current.querySelector(".PlayerPfpAndName")) && void 0 !== GG ? GG : zG.current
          })
        } : void 0,
        onContextMenu: LG ? GG => {
          (0, QG.i)(zG, GG, oG(), JG.e.get("isTouchScreen"))
        } : void 0,
        onPointerDown: LG ? GG => {
          (0, KG.d)(GG, (() => (0, fG.c)(bG, ZG).playerSocialPreview))
        } : void 0,
        children: [Object.keys(yG).map((GG => !0 === yG[GG].hidden ? null : (0, iG.jsxs)("td", {
          className: YG()("LobbyLeaderboardValue SmallTextBold", {
            LobbyLeaderboardValueHighlighted: !SG
          }),
          children: [(0, iG.jsx)("div", {
            className: "LobbyLeaderboardValueText",
            children: UG(bG, GG)
          }), (0, iG.jsx)("div", {
            className: "LobbyLeaderboardValueBg",
            style: {
              backgroundColor: rG[bG]
            }
          })]
        }, GG))), SG && !LG && (0, iG.jsx)(VG.d, {
          className: "LobbyLeaderboardRowFloatingActions",
          triggerElementRef: zG,
          options: [{
            icon: EG.icon,
            text: EG.text,
            onPointerDown: EG.onClick
          }, ...null === ZG || uG.featureFlags.useSocialFeatures ? [] : (0, hG.d)(null, ZG)]
        })]
      })
    }
  },
  36904: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => VG
    });
    var wG = ZG(1923),
      SG = ZG(2428),
      LG = ZG(36911);
    const yG = {
      kick: "lobbyManageEntry:kicked",
      ban: "lobbyManageEntry:banned",
      unban: "lobbyManageEntry:unbanned"
    };

    function kG(GG, bG) {
      return async () => function(GG, bG, ZG) {
        return null === bG ? {
          message: {
            key: "lobbyManageEntry:noAnswer"
          },
          next: null
        } : bG.ok ? {
          message: {
            key: yG[GG.type]
          },
          next: ZG
        } : {
          message: {
            fromServer: bG.message
          },
          next: null
        }
      }(GG, await (0, LG.e)(GG), bG())
    }

    function UG(GG) {
      return {
        kind: "act",
        icon: "gavel",
        text: "lobbyManageEntry:ban",
        destructive: !0,
        confirm: "lobbyManageEntry:banConfirm",
        analyticsClick: {
          id: "lobby_manage.ban",
          value: "profile_card"
        },
        run: kG({
          type: "ban",
          name: GG
        }, (() => function(GG) {
          return {
            kind: "act",
            icon: "user-unlock",
            text: "lobbyManageEntry:unban",
            destructive: !1,
            confirm: null,
            analyticsClick: {
              id: "lobby_manage.unban",
              value: "profile_card"
            },
            run: kG({
              type: "unban",
              name: GG
            }, (() => null))
          }
        }(GG)))
      }
    }

    function YG(GG, bG) {
      if (null === GG) return [];
      const ZG = [],
        wG = function(GG, bG) {
          var ZG, wG;
          return null !== (ZG = null !== (wG = GG.here.find((GG => GG.name === bG))) && void 0 !== wG ? wG : GG.away.find((GG => GG.name === bG))) && void 0 !== ZG ? ZG : null
        }(GG, bG);
      var LG, yG;
      return null !== wG && void 0 !== wG && wG.can.kick && ZG.push((LG = bG, yG = wG.can.ban, {
        kind: "act",
        icon: "person-falling-burst",
        text: "lobbyManageEntry:kick",
        destructive: !1,
        confirm: null,
        analyticsClick: {
          id: "lobby_manage.kick",
          value: "profile_card"
        },
        run: kG({
          type: "kick",
          name: LG
        }, (() => yG ? UG(LG) : null))
      })), null !== wG && void 0 !== wG && wG.can.ban && ZG.push(UG(bG)), ZG.push({
        kind: "leave",
        icon: "users-gear",
        text: "lobbyManageEntry:manageLobby",
        destructive: !1,
        onClick: () => {
          (0, SG.e)({
            page: "players",
            focusName: bG,
            source: "profile_card"
          })
        }
      }), ZG
    }

    function VG(GG) {
      var bG;
      return YG(null !== (bG = wG.c.get("lobbyManage")) && void 0 !== bG ? bG : null, GG)
    }
  },
  36911: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => VG,
      e: () => UG
    });
    var wG = ZG(1415),
      SG = ZG(1923),
      LG = ZG(1895);
    const yG = 1e4;
    let kG = 0;

    function UG(GG) {
      const bG = ++kG;
      return new Promise((ZG => {
        const kG = bG => {
            UG(), clearTimeout(YG), !1 === (null === bG || void 0 === bG ? void 0 : bG.ok) && (0, wG.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: GG.type
            }), ZG(bG)
          },
          UG = SG.c.subscribe("lobbyManage", (GG => {
            const ZG = function(GG, bG) {
              var ZG;
              return null !== (ZG = null === GG || void 0 === GG ? void 0 : GG.results.find((GG => GG.requestId === bG))) && void 0 !== ZG ? ZG : null
            }(GG, bG);
            null !== ZG && kG(ZG)
          })),
          YG = setTimeout((() => {
            kG(null)
          }), yG);
        LG.gameBridge.send("lobbyManage", {
          ...GG,
          requestId: bG
        })
      }))
    }
    const YG = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class VG {
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UG;
        this.onChange = GG, this.sendAction = bG, this.pending = new Map, this.statuses = new Map
      }
      send(GG, bG, ZG) {
        var wG;
        return this.statuses.delete(bG), this.pending.set(bG, (null !== (wG = this.pending.get(bG)) && void 0 !== wG ? wG : 0) + 1), this.sendAction(GG).then((GG => {
          var wG;
          const SG = null !== GG && void 0 !== GG ? GG : {
              requestId: -1,
              ok: !1,
              message: YG
            },
            LG = (null !== (wG = this.pending.get(bG)) && void 0 !== wG ? wG : 1) - 1;
          LG > 0 ? this.pending.set(bG, LG) : this.pending.delete(bG);
          const yG = !SG.ok || SG.message.length > 0 ? SG.message : null === ZG ? null : [ZG];
          return null !== yG && this.statuses.set(bG, {
            ok: SG.ok,
            text: yG,
            until: Date.now() + 4e3
          }), this.onChange(), SG
        }))
      }
      show(GG, bG) {
        this.statuses.set(GG, {
          ...bG,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(GG) {
        for (const [bG, ZG] of this.statuses) ZG.until <= GG && this.statuses.delete(bG)
      }
      nextDeadline() {
        let GG = null;
        for (const ZG of this.statuses.values()) {
          var bG;
          GG = Math.min(null !== (bG = GG) && void 0 !== bG ? bG : 1 / 0, ZG.until)
        }
        return GG
      }
      statusOf(GG, bG) {
        const ZG = this.statuses.get(GG);
        return !ZG || ZG.until <= bG ? null : {
          ok: ZG.ok,
          text: ZG.text
        }
      }
      isPending(GG) {
        return this.pending.has(GG)
      }
    }
  },
  4786: (GG, bG, ZG) => {
    ZG.d(bG, {
      g: () => rG,
      e: () => JG
    });
    var wG = ZG(51),
      SG = ZG(1389),
      LG = ZG(1876),
      yG = ZG(4790),
      kG = ZG(1067);
    const UG = (0, wG.memo)((function(GG) {
      let {
        initialParameters: bG
      } = GG;
      const ZG = (0, wG.useRef)(null),
        SG = (0, wG.useRef)(null),
        UG = (0, wG.useRef)(0),
        YG = (0, wG.useRef)(null),
        VG = bG.description,
        pG = bG.Zb,
        {
          scale: fG,
          rotation: QG
        } = null !== bG && void 0 !== bG ? bG : {},
        KG = (0, yG.f)();
      return (0, wG.useEffect)((() => {
        const GG = KG.onFrame((() => {
          const GG = KG.getState();
          if (!GG.isActive || !ZG.current || !SG.current) return;
          const bG = GG.state;
          if (ZG.current.value = bG.progress, bG.clickCount > UG.current) {
            UG.current = bG.clickCount;
            const GG = SG.current;
            GG.classList.add("pulse"), YG.current = setTimeout((() => {
              GG.classList.remove("pulse")
            }), 100)
          }
        }));
        return () => {
          clearTimeout(YG.current), GG()
        }
      }), [KG]), (0, kG.jsx)(kG.Fragment, {
        children: (0, kG.jsxs)("div", {
          className: "QTEProgressBarWrapper",
          style: {
            ...null !== fG && {
              "--scale": fG
            },
            ...null !== QG && {
              "--rotation": `${QG}deg`
            }
          },
          children: [(0, kG.jsx)("progress", {
            id: "catch",
            max: 100,
            className: "QTEProgressBar",
            ref: ZG
          }), (0, kG.jsx)("span", {
            className: "QTEProgressBarInteractionIndicator",
            ref: SG,
            children: (0, kG.jsx)(LG.c, {
              text: [{
                icon: pG
              }]
            })
          }), (0, kG.jsx)("div", {
            className: "QTEProgressBarDescription",
            children: (0, kG.jsx)(LG.c, {
              text: VG
            })
          })]
        })
      })
    }));
    var YG = ZG(1006),
      VG = ZG.n(YG);
    const pG = 2 * Math.PI * 90,
      fG = (0, wG.memo)((function(GG) {
        let {
          initialParameters: bG
        } = GG;
        const ZG = (0, wG.useRef)(null),
          SG = (0, wG.useRef)(null),
          UG = (0, wG.useRef)(null),
          YG = bG.label,
          fG = bG.icon,
          QG = bG.yb,
          {
            scale: KG,
            rotation: hG,
            kb: dG
          } = null !== bG && void 0 !== bG ? bG : {},
          JG = (0, yG.f)();
        return (0, wG.useEffect)((() => {
          const GG = JG.onFrame((() => {
            var GG, bG;
            const wG = JG.getState();
            if (!wG.isActive || !SG.current) return;
            const LG = wG.state,
              yG = null !== (GG = LG.timeRemaining) && void 0 !== GG ? GG : 0,
              kG = null !== (bG = LG.Lb) && void 0 !== bG ? bG : 1,
              YG = pG * (1 - yG / kG);
            SG.current.style.strokeDashoffset = `${YG}`, ZG.current && (ZG.current.style.opacity = yG > 0 ? "1" : "0"), UG.current && QG && (UG.current.textContent = `${(yG/1e3).toFixed(1)}s`)
          }));
          return () => {
            GG()
          }
        }), [JG, QG]), (0, kG.jsxs)("div", {
          className: "QTETimedClick",
          ref: ZG,
          style: {
            ...null !== KG && {
              "--scale": KG
            },
            ...null !== hG && {
              "--rotation": `${hG}deg`
            }
          },
          children: [(0, kG.jsxs)("div", {
            className: "QTETimedClickCircleContainer",
            children: [(0, kG.jsxs)("svg", {
              className: "QTETimedClickCircularProgress",
              viewBox: "0 0 200 200",
              children: [(0, kG.jsx)("circle", {
                className: "QTETimedClickProgressTrack",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12"
              }), (0, kG.jsx)("circle", {
                className: "QTETimedClickProgressArc",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12",
                strokeLinecap: "square",
                strokeDasharray: pG,
                ref: SG
              })]
            }), (0, kG.jsx)("div", {
              className: "QTETimedClickCenterContent",
              children: (0, kG.jsx)(LG.c, {
                text: [{
                  icon: fG
                }],
                className: VG()("QTETimedClickInnerText", {
                  QTETimedClickBreathe: dG
                })
              })
            })]
          }), (0, kG.jsxs)("div", {
            className: "QTETimedClickRightTextContainer",
            children: [(0, kG.jsx)(LG.c, {
              text: YG,
              className: "QTETimedClickLabelText"
            }), QG && (0, kG.jsx)("span", {
              className: "QTETimedClickTimeText",
              ref: UG
            })]
          })]
        })
      })),
      QG = (0, wG.memo)((function(GG) {
        let {
          initialParameters: bG
        } = GG;
        const ZG = (0, wG.useRef)(null),
          SG = (0, wG.useRef)(null),
          UG = (0, wG.useRef)(null),
          YG = (0, wG.useRef)(!1),
          VG = bG.description,
          pG = null === bG || void 0 === bG ? void 0 : bG.icon,
          fG = (0, yG.f)();
        return (0, wG.useEffect)((() => {
          const GG = fG.onFrame((() => {
            const GG = fG.getState();
            if (!GG.isActive) return;
            const bG = GG.state;
            if (ZG.current) {
              const GG = 100 * (bG.catchZonePosition - bG.Yb / 2);
              ZG.current.style.left = `${GG}%`, ZG.current.style.width = 100 * bG.Yb + "%", bG.isCatching !== YG.current && (YG.current = bG.isCatching, bG.isCatching ? ZG.current.classList.add("catching") : ZG.current.classList.remove("catching"))
            }
            SG.current && (SG.current.style.left = 100 * bG.moverPosition + "%"), UG.current && (UG.current.value = bG.progress)
          }));
          return () => {
            GG()
          }
        }), [fG]), (0, kG.jsxs)("div", {
          className: "QTEGravityBar",
          children: [(0, kG.jsx)("div", {
            className: "QTEGravityBarDescription",
            children: (0, kG.jsx)(LG.c, {
              text: VG
            })
          }), (0, kG.jsx)("progress", {
            max: 100,
            className: "QTEGravityBarProgress",
            ref: UG
          }), (0, kG.jsxs)("div", {
            className: "QTEGravityBarTrack",
            children: [(0, kG.jsx)("div", {
              className: "QTEGravityBarCatchZone",
              ref: ZG
            }), (0, kG.jsx)("div", {
              className: "QTEGravityBarMover",
              ref: SG,
              children: (0, kG.jsx)("span", {
                children: pG && (0, kG.jsx)(LG.c, {
                  text: [{
                    icon: pG,
                    style: {
                      fontSize: "4rem"
                    }
                  }]
                })
              })
            })]
          })]
        })
      }));
    var KG = ZG(604);
    const hG = (0, wG.memo)((function(GG) {
        let {
          initialParameters: bG
        } = GG;
        const ZG = (0, wG.useRef)(null),
          SG = bG.label,
          UG = bG.Jb,
          {
            icon: YG,
            scale: VG,
            rotation: pG
          } = null !== bG && void 0 !== bG ? bG : {},
          fG = 100 * (.5 - UG / 2),
          QG = 100 * UG,
          hG = (0, yG.f)();
        return (0, wG.useEffect)((() => {
          const GG = hG.onFrame((() => {
            const GG = hG.getState();
            if (!GG.isActive || !ZG.current) return;
            const bG = GG.state;
            ZG.current.style.left = 100 * bG.markerPosition + "%"
          }));
          return () => {
            GG()
          }
        }), [hG]), (0, kG.jsxs)("div", {
          className: "QTEPrecisionBarWrapper",
          style: {
            ...!(0, KG.L)(VG) && {
              "--scale": VG
            },
            ...!(0, KG.L)(pG) && {
              "--rotation": `${pG}deg`
            }
          },
          children: [YG && (0, kG.jsx)(LG.c, {
            text: [{
              icon: YG
            }],
            className: "QTEPrecisionBarIcon"
          }), (0, kG.jsxs)("div", {
            className: "QTEPrecisionBarTrack",
            children: [(0, kG.jsx)("div", {
              className: "QTEPrecisionBarSuccessZone",
              style: {
                left: `${fG}%`,
                width: `${QG}%`
              }
            }), (0, kG.jsx)("div", {
              className: "QTEPrecisionBarMarker",
              ref: ZG
            })]
          }), (0, kG.jsx)("div", {
            className: "QTEPrecisionBarLabel",
            children: (0, kG.jsx)(LG.c, {
              text: SG
            })
          })]
        })
      })),
      dG = (0, wG.memo)((function(GG) {
        let {
          initialParameters: bG
        } = GG;
        const ZG = (0, wG.useRef)(null),
          [SG, UG] = (0, wG.useState)((() => new Array(bG.zb).fill("pending"))),
          [YG, VG] = (0, wG.useState)((() => {
            const GG = bG.Xb;
            return (0, KG.L)(GG) || GG <= 0 ? [] : new Array(GG).fill("pending")
          })),
          pG = bG.label,
          {
            icon: fG
          } = bG,
          QG = (0, wG.useRef)(0),
          hG = (0, wG.useRef)(0),
          dG = (0, wG.useRef)([]),
          JG = (0, yG.f)();
        return (0, wG.useEffect)((() => {
          const GG = JG.onFrame((() => {
            const GG = JG.getState();
            if (!GG.isActive || !ZG.current) return;
            const bG = GG.state,
              wG = 30 + 60 * bG.outerCircleProgress;
            if (ZG.current.setAttribute("r", String(wG)), !0 === bG.lastClickResult && bG.successes > QG.current) {
              ZG.current.classList.remove("QTERhythmClickOuterCircle--miss"), ZG.current.classList.add("QTERhythmClickOuterCircle--hit");
              const GG = setTimeout((() => {
                var GG;
                null === (GG = ZG.current) || void 0 === GG || GG.classList.remove("QTERhythmClickOuterCircle--hit")
              }), 200);
              dG.current.push(GG)
            } else if (!1 === bG.lastClickResult && bG.misses > hG.current) {
              ZG.current.classList.remove("QTERhythmClickOuterCircle--hit"), ZG.current.classList.add("QTERhythmClickOuterCircle--miss");
              const GG = setTimeout((() => {
                var GG;
                null === (GG = ZG.current) || void 0 === GG || GG.classList.remove("QTERhythmClickOuterCircle--miss")
              }), 200);
              dG.current.push(GG)
            }
            bG.successes === QG.current && bG.misses === hG.current || (QG.current = bG.successes, hG.current = bG.misses, UG((GG => {
              const ZG = [...GG];
              for (let wG = 0; wG < bG.zb; wG++) ZG[wG] = wG < bG.successes ? "success" : "pending";
              return ZG
            })), VG((GG => {
              if (0 === GG.length) return GG;
              const ZG = [...GG];
              for (let wG = 0; wG < ZG.length; wG++) ZG[wG] = wG < bG.misses ? "miss" : "pending";
              return ZG
            })))
          }));
          return () => {
            GG();
            for (const GG of dG.current) clearTimeout(GG);
            dG.current = []
          }
        }), [JG]), (0, kG.jsxs)("div", {
          className: "QTERhythmClickWrapper",
          children: [(0, kG.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: SG.map(((GG, bG) => (0, kG.jsx)("div", {
              className: "QTERhythmClickDot" + ("success" === GG ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
            }, bG)))
          }), (0, kG.jsxs)("div", {
            className: "QTERhythmClickCircleContainer",
            children: [(0, kG.jsxs)("svg", {
              className: "QTERhythmClickSvg",
              viewBox: "0 0 200 200",
              children: [(0, kG.jsx)("circle", {
                className: "QTERhythmClickInnerCircle",
                cx: "100",
                cy: "100",
                r: 30
              }), (0, kG.jsx)("circle", {
                className: "QTERhythmClickOuterCircle",
                cx: "100",
                cy: "100",
                r: 90,
                ref: ZG
              })]
            }), fG && (0, kG.jsx)("div", {
              className: "QTERhythmClickCenterContent",
              children: (0, kG.jsx)(LG.c, {
                text: [{
                  icon: fG
                }],
                className: "QTERhythmClickIcon"
              })
            })]
          }), YG.length > 0 && (0, kG.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: YG.map(((GG, bG) => (0, kG.jsx)("div", {
              className: "QTERhythmClickDot" + ("miss" === GG ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
            }, bG)))
          }), (0, kG.jsx)("div", {
            className: "QTERhythmClickLabel",
            children: (0, kG.jsx)(LG.c, {
              text: pG
            })
          })]
        })
      }));

    function JG(GG) {
      let {
        qte: bG
      } = GG;
      switch (bG.type) {
        case "progressBar":
          return (0, kG.jsx)(UG, {
            initialParameters: bG.parameters
          });
        case "timedClick":
          return (0, kG.jsx)(fG, {
            initialParameters: bG.parameters
          });
        case "gravityBar":
          return (0, kG.jsx)(QG, {
            initialParameters: bG.parameters
          });
        case "precisionBar":
          return (0, kG.jsx)(hG, {
            initialParameters: bG.parameters
          });
        case "rhythmClick":
          return (0, kG.jsx)(dG, {
            initialParameters: bG.parameters
          });
        default:
          return console.warn("Unknown QTE type"), null
      }
    }
    const rG = (0, wG.memo)((function() {
      const [GG, bG] = (0, wG.useState)({
        type: null,
        parameters: null,
        state: null,
        isActive: !1
      });
      return (0, SG.g)("qteStateUpdated", (GG => {
        bG(GG)
      })), GG.isActive && GG.type ? (0, kG.jsx)("div", {
        className: "QTE",
        "data-camera-keeper": "",
        children: (0, kG.jsx)(JG, {
          qte: GG
        })
      }) : null
    }))
  },
  4790: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => kG,
      f: () => UG
    });
    var wG = ZG(51),
      SG = ZG(1260),
      LG = ZG(4792);
    const yG = {
        getState: () => LG.e.getCurrentState(),
        onFrame: SG.q
      },
      kG = (0, wG.createContext)(yG);

    function UG() {
      return (0, wG.useContext)(kG)
    }
  },
  36672: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => VG,
      f: () => fG
    });
    var wG = ZG(51),
      SG = ZG(1311),
      LG = ZG(1151),
      yG = ZG(1302),
      kG = ZG(3458),
      UG = ZG(4955),
      YG = ZG(1067);

    function VG(GG) {
      let {
        loading: bG,
        schematics: ZG,
        onSchematicPicked: wG,
        selectedSchematicIdList: SG = [],
        disableAutoExport: UG
      } = GG;
      const {
        t: VG
      } = (0, LG.w)();
      return (0, YG.jsxs)("div", {
        className: "SchematicList",
        children: [bG && (0, YG.jsx)(yG.b, {}), !bG && 0 === ZG.length && (0, YG.jsx)("div", {
          className: "NoSchematicsText",
          children: VG("worldBuilder:noSavedSchematic")
        }), !bG && ZG.map((GG => (0, YG.jsx)(kG.g, {
          source: {
            type: "schematic",
            schematic: GG
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            wG(GG)
          },
          isSelected: SG.includes(GG.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: GG.isAutoExported && UG,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, GG.schematicId)))]
      })
    }

    function pG(GG) {
      let {
        ownedSchematics: bG,
        currentWorldSchematicId: ZG,
        onClose: SG
      } = GG;
      const {
        t: yG
      } = (0, LG.w)(), [kG, pG] = (0, wG.useState)(null);
      return (0, YG.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === kG && (0, YG.jsxs)(YG.Fragment, {
          children: [(0, YG.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: yG("worldBuilder:schematicList")
          }), (0, YG.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: yG("worldBuilder:clickSchematicForOptions")
          }), (0, YG.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, YG.jsx)(VG, {
              loading: !1,
              schematics: bG,
              onSchematicPicked: GG => {
                pG(GG)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== kG && (0, YG.jsx)(UG.i, {
          schematic: kG,
          inSourceWorld: kG.schematicId === ZG,
          onSchematicUpdate: GG => {
            pG(GG)
          },
          onClose: () => {
            pG(null), SG()
          }
        })]
      })
    }

    function fG(GG) {
      let {
        ownedSchematics: bG,
        currentWorldSchematicId: ZG,
        onClose: wG
      } = GG;
      SG.NotificationProvider.showCustomPopup({
        body: GG => (0, YG.jsx)(pG, {
          ownedSchematics: bG,
          currentWorldSchematicId: ZG,
          onClose: GG
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: wG,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
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
  36898: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => YG,
      f: () => UG
    });
    var wG = ZG(580),
      SG = ZG(1895),
      LG = ZG(1583),
      yG = ZG(80),
      kG = ZG(1222);

    function UG(GG, bG, ZG) {
      return yG.featureFlags.useSocialFeatures && GG && null === (0, kG.e)(bG, ZG)
    }

    function YG(GG, bG) {
      var ZG, yG;
      const kG = LG.b.getSocialState().friends.find((GG => GG.name.toLowerCase() === bG.toLowerCase())),
        UG = SG.gameBridge.latest("players").byId[GG],
        YG = void 0 !== UG && UG.name === bG,
        VG = YG && null !== (ZG = UG.cosmetics) && void 0 !== ZG ? ZG : void 0,
        pG = kG && VG ? {
          ...kG,
          cosmetics: VG
        } : kG;
      return {
        playerSocialPreview: null !== pG && void 0 !== pG ? pG : {
          isError: !1,
          name: bG,
          ranks: YG ? [...UG.ranks] : [],
          cosmetics: null !== VG && void 0 !== VG ? VG : {},
          nameColour: null !== (yG = null === VG || void 0 === VG ? void 0 : VG.nameColour) && void 0 !== yG ? yG : wG.d,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== kG
      }
    }
  },
  4939: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => kG
    });
    var wG = ZG(51),
      SG = ZG(1006),
      LG = ZG.n(SG),
      yG = ZG(1067);

    function kG(GG) {
      let {
        columns: bG,
        rows: ZG,
        getRowKey: SG,
        renderRow: kG,
        className: UG
      } = GG;
      return (0, yG.jsxs)("table", {
        className: LG()("Table", UG),
        children: [(0, yG.jsx)("thead", {
          children: (0, yG.jsx)("tr", {
            children: bG.map((GG => (0, yG.jsx)("th", {
              children: GG.header
            }, GG.key)))
          })
        }), (0, yG.jsx)("tbody", {
          children: ZG.map((GG => (0, yG.jsx)(wG.Fragment, {
            children: kG(GG)
          }, SG(GG))))
        })]
      })
    }
  },
  37039: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => LG,
      e: () => yG,
      f: () => kG,
      i: () => UG
    });
    var wG = ZG(51),
      SG = ZG(3100);
    const LG = 8,
      yG = "InGameHeaderContainer",
      kG = "TopRightElements";

    function UG(GG) {
      const [bG] = (0, SG.b)(), [ZG, UG] = (0, wG.useState)(!1);
      return (0, wG.useLayoutEffect)((() => {
        if (!GG) return;
        const bG = document.querySelector(`.${yG}`),
          ZG = document.querySelector(`.${kG}`),
          wG = () => {
            const wG = GG.getBoundingClientRect(),
              SG = bG ? bG.getBoundingClientRect().right : 0,
              yG = ZG ? ZG.getBoundingClientRect().left : window.innerWidth,
              kG = wG.left < SG + LG,
              YG = wG.right > yG - LG;
            UG(kG || YG)
          };
        wG();
        const SG = new ResizeObserver(wG);
        return SG.observe(GG), bG && SG.observe(bG), ZG && SG.observe(ZG), () => {
          SG.disconnect()
        }
      }), [GG, bG]), ZG
    }
  },
  37089: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => pG
    });
    var wG = ZG(51),
      SG = ZG(1006),
      LG = ZG.n(SG),
      yG = ZG(1621),
      kG = ZG(1393),
      UG = ZG(1302),
      YG = ZG(1016),
      VG = ZG(1067);

    function pG(GG) {
      let {
        label: bG,
        icon: ZG,
        placeholder: SG,
        onSubmit: pG
      } = GG;
      const fG = (0, wG.useRef)(null),
        [QG, KG] = (0, wG.useState)(""),
        [hG, dG] = (0, wG.useState)("Enter"),
        [JG, rG] = (0, wG.useState)(null);
      (0, wG.useEffect)((() => {
        if ("Success" !== hG && "Error" !== hG) return;
        const GG = setTimeout((() => {
          "Success" === hG && fG.current && (fG.current.value = "", KG("")), dG("Enter")
        }), "Success" === hG ? 1e3 : 4e3);
        return () => {
          clearTimeout(GG)
        }
      }), [hG]);
      const zG = () => {
        const GG = QG.trim();
        "" !== GG && "Enter" === hG && (dG("Loading"), pG(GG).then((GG => {
          fG.current && ("error" in GG ? null === GG.error ? dG("Enter") : (rG(GG.error), dG("Error")) : dG("Success"))
        })))
      };
      return (0, VG.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: GG => {
          GG.target === fG.current && "Escape" !== GG.key && GG.stopPropagation()
        },
        children: [(0, VG.jsxs)("div", {
          className: LG()("AddFriendBodyOverlay", `AddFriendBodyOverlay${hG}`),
          children: ["Loading" === hG && (0, VG.jsx)(UG.b, {}), "Success" === hG && (0, VG.jsx)(YG.c, {
            name: "check"
          }), "Error" === hG && JG]
        }), (0, VG.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, VG.jsx)(yG.b, {
            className: "PlayerSearchInput",
            domRef: fG,
            maxLength: 32,
            placeholderText: SG,
            ariaLabel: SG,
            stopPropagation: !1,
            onValueChange: GG => {
              KG(GG)
            },
            onEnter: zG
          }), (0, VG.jsxs)(kG.d, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== hG || "" === QG.trim(),
            onClick: zG,
            children: [(0, VG.jsx)(YG.c, {
              name: ZG
            }), " ", bG]
          })]
        })]
      })
    }
  },
  37071: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => pG
    });
    var wG = ZG(51),
      SG = ZG(1006),
      LG = ZG.n(SG),
      yG = ZG(1151),
      kG = ZG(1016),
      UG = ZG(1067);
    const YG = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      VG = ["unlisted", "public", "whitelist", "private"];

    function pG(GG) {
      let {
        visibility: bG,
        onPick: ZG
      } = GG;
      const {
        t: SG
      } = (0, yG.w)(), pG = (0, wG.useRef)([]);
      return (0, UG.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": SG("worldSocial:whoCanJoin"),
        children: VG.map(((GG, wG) => {
          const yG = GG === bG;
          return (0, UG.jsxs)("button", {
            ref: GG => {
              pG.current[wG] = GG
            },
            type: "button",
            className: LG()("WorldSocialTile", {
              WorldSocialTileSelected: yG
            }),
            "aria-pressed": yG,
            tabIndex: yG ? 0 : -1,
            onKeyDown: GG => {
              ((GG, bG) => {
                const ZG = "ArrowRight" === GG.key || "ArrowDown" === GG.key ? 1 : "ArrowLeft" === GG.key || "ArrowUp" === GG.key ? -1 : 0;
                var wG;
                0 !== ZG && (GG.preventDefault(), null === (wG = pG.current[(bG + ZG + VG.length) % VG.length]) || void 0 === wG || wG.focus())
              })(GG, wG)
            },
            onClick: () => {
              ZG(GG)
            },
            children: [(0, UG.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, UG.jsx)(kG.c, {
                name: YG[GG]
              })
            }), (0, UG.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, UG.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: SG(`worldSocial:${GG}`)
              }), (0, UG.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: SG(`worldSocial:${GG}Description`)
              })]
            })]
          }, GG)
        }))
      })
    }
  },
  37086: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => kG
    });
    var wG = ZG(1151),
      SG = ZG(2630),
      LG = ZG(4396),
      yG = ZG(1067);

    function kG(GG) {
      let {
        Tp: bG,
        children: ZG,
        ...kG
      } = GG;
      const {
        t: UG
      } = (0, wG.w)();
      return (0, yG.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          bG.onChange(!bG.on)
        },
        children: (0, yG.jsx)(SG.h, {
          ...kG,
          opensProfileCard: !1,
          children: (0, yG.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: GG => {
              GG.stopPropagation()
            },
            children: [ZG, (0, yG.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, yG.jsx)(LG.e, {
                checked: bG.on,
                disabled: !1,
                ariaLabel: UG("worldSocial:letJoin", {
                  playerName: kG.playerSocialPreview.name
                }),
                onChange: GG => {
                  bG.onChange(GG.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  37067: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => KG
    });
    var wG = ZG(51),
      SG = ZG(1151),
      LG = ZG(1827),
      yG = ZG(80),
      kG = ZG(17),
      UG = ZG(1415),
      YG = ZG(2657),
      VG = ZG(34376),
      pG = ZG(1393),
      fG = ZG(1016),
      QG = ZG(1067);

    function KG(GG) {
      let {
        worldCode: bG,
        message: ZG
      } = GG;
      const {
        t: KG
      } = (0, SG.w)(), {
        isTouchScreen: hG
      } = (0, kG.o)(["isTouchScreen"]), dG = yG.featureFlags.canUseInviteLinks, JG = (0, VG.h)(dG && null === ZG), [rG, zG] = (0, YG.j)(), EG = (0, wG.useRef)(null);
      if (null !== ZG) return (0, QG.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, QG.jsx)(fG.c, {
          name: "lock"
        }), (0, QG.jsx)("span", {
          children: ZG
        })]
      });
      const oG = dG ? JG : bG,
        XG = hG && dG && (0, YG.e)();
      return (0, QG.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!dG && (0, QG.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: KG("worldSocial:worldCode")
        }), (0, QG.jsx)("input", {
          ref: EG,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== oG && void 0 !== oG ? oG : "",
          "aria-label": KG(dG ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: GG => {
            GG.currentTarget.select()
          }
        }), (0, QG.jsxs)(pG.d, {
          className: "WorldSocialCopy",
          disabled: null === oG,
          onClick: () => {
            null !== oG && (0, YG.h)(oG, {
              useShareSheet: XG,
              onOutcome: GG => {
                if ((0, UG.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== GG || dG ? GG : "code"
                  }), "copied" === GG) zG();
                else if ("failed" === GG) {
                  var bG;
                  null === (bG = EG.current) || void 0 === bG || bG.focus(), LG.g.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, QG.jsx)(fG.c, {
            name: rG ? "check" : XG ? "up-from-bracket" : "copy"
          }), " ", KG(rG ? "general:copied" : XG ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  37079: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => QG,
      d: () => fG,
      f: () => pG
    });
    var wG = ZG(580),
      SG = ZG(1151),
      LG = ZG(1583),
      yG = ZG(2630),
      kG = ZG(2575),
      UG = ZG(1393),
      YG = ZG(37086),
      VG = ZG(1067);

    function pG(GG, bG) {
      var ZG;
      return {
        isError: !1,
        name: GG,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== bG && void 0 !== bG ? bG : {},
        nameColour: null !== (ZG = null === bG || void 0 === bG ? void 0 : bG.nameColour) && void 0 !== ZG ? ZG : wG.d,
        location: {
          status: "offline"
        }
      }
    }

    function fG(GG) {
      let {
        player: bG,
        isFriend: ZG = !1,
        status: wG,
        showLocation: UG = void 0 === wG,
        Tp: pG,
        onSendFriendRequest: fG,
        actions: QG,
        zIndex: KG
      } = GG;
      const {
        t: hG
      } = (0, SG.w)();
      let dG = wG;
      null !== pG && void 0 !== pG && pG.on && (dG = (0, VG.jsxs)(VG.Fragment, {
        children: [null !== wG && void 0 !== wG ? wG : (0, VG.jsx)(kG.d, {
          socialPreview: bG
        }), (0, VG.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", hG("worldSocial:canJoin")]
        })]
      }));
      const JG = {
        playerSocialPreview: bG,
        isFriend: ZG,
        hideFriendBadge: !0,
        onFriendRemoved: ZG ? GG => {
          LG.b.removeFriendFromState(GG)
        } : void 0,
        status: dG,
        showLocation: UG,
        onSendFriendRequest: fG,
        zIndex: KG
      };
      return pG ? (0, VG.jsx)(YG.b, {
        ...JG,
        Tp: pG,
        children: QG
      }) : (0, VG.jsx)(yG.h, {
        ...JG,
        opensProfileCard: !1,
        children: QG || void 0
      })
    }

    function QG(GG) {
      let {
        row: bG,
        Tp: ZG,
        canInvite: wG,
        invited: LG,
        onInvite: yG,
        zIndex: kG
      } = GG;
      const {
        t: YG
      } = (0, SG.w)(), pG = "online" === bG.place ? UG.d : UG.h;
      return (0, VG.jsx)(fG, {
        player: bG.friend,
        isFriend: !0,
        status: "here" === bG.place ? YG("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        Tp: ZG,
        zIndex: kG,
        actions: wG && (0, VG.jsx)(pG, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: LG,
          onClick: yG,
          ariaLabel: `${YG("worldSocial:invite")} ${bG.friend.name}`,
          children: YG(LG ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  37055: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => UG,
      g: () => yG,
      j: () => YG
    });
    var wG = ZG(51),
      SG = ZG(4611),
      LG = ZG(1827);

    function yG(GG) {
      const bG = {
        lobbyName: GG,
        answer: null,
        response: SG.d.getSocialSettings(GG)
      };
      return bG.response.then((GG => {
        bG.answer = GG
      })), bG
    }
    const kG = new Map;

    function UG(GG) {
      kG.set(GG.lobbyName, GG)
    }

    function YG(GG) {
      const [bG] = (0, wG.useState)((() => function(GG) {
        var bG;
        const ZG = null !== (bG = kG.get(GG)) && void 0 !== bG ? bG : null;
        return null !== ZG && void 0 !== ZG && ZG.answer && "error" in ZG.answer ? null : ZG
      }(GG))), [ZG, yG] = (0, wG.useState)((() => null !== bG && void 0 !== bG && bG.answer && "settings" in bG.answer ? bG.answer.settings : null)), [UG, YG] = (0, wG.useState)(!0), [VG, pG] = (0, wG.useState)(null !== ZG), fG = (0, wG.useRef)(ZG);
      fG.current = ZG;
      const QG = (0, wG.useRef)(0),
        KG = (0, wG.useRef)(0),
        hG = (0, wG.useRef)(!1),
        dG = (0, wG.useRef)(!0),
        JG = (0, wG.useCallback)((async bG => {
          const ZG = ++QG.current,
            wG = await (null !== bG && void 0 !== bG ? bG : SG.d.getSocialSettings(GG));
          dG.current && ZG === QG.current && (pG(!0), YG(!1), "error" in wG || yG(wG.settings))
        }), [GG]),
        rG = (0, wG.useCallback)((() => {
          YG(!0), JG()
        }), [JG]),
        zG = (0, wG.useCallback)((() => {
          KG.current > 0 ? hG.current = !0 : JG()
        }), [JG]);
      (0, wG.useEffect)((() => (dG.current = !0, kG.delete(GG), YG(!0), JG(null === bG || void 0 === bG ? void 0 : bG.response), () => {
        dG.current = !1
      })), [JG, GG, bG]);
      const EG = GG => {
        QG.current++, YG(!1), fG.current = GG, yG(GG)
      };
      return {
        settings: ZG,
        loading: UG,
        answered: VG,
        retry: rG,
        refresh: zG,
        change: async function(bG, ZG) {
          let {
            quiet: wG = !1,
            onAnswer: yG
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const kG = fG.current;
          if (null === kG) return !1;
          EG(ZG(kG)), KG.current > 0 && (hG.current = !0), KG.current++;
          const UG = await SG.d.setSocialSettings(GG, bG);
          KG.current--;
          const YG = !("error" in UG);
          if (!dG.current) return YG;
          if (null === yG || void 0 === yG || yG(UG), wG);
          else if ("error" in UG) LG.g.showMessage({
            translationKey: UG.error
          });
          else
            for (const GG of UG.notFound) LG.g.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: GG
              }
            });
          if (KG.current > 0) return YG;
          const VG = hG.current;
          return hG.current = !1, !VG && "settings" in UG ? EG(UG.settings) : (VG || EG(kG), JG()), YG
        }
      }
    }
  },
  37093: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => yG,
      f: () => LG
    });
    var wG = ZG(140);
    const SG = new Map;

    function LG(GG, bG) {
      var ZG;
      const wG = null !== (ZG = SG.get(GG)) && void 0 !== ZG ? ZG : new Map;
      wG.set(bG, Date.now()), SG.set(GG, wG)
    }

    function yG(GG) {
      const bG = SG.get(GG);
      if (!bG) return [];
      const ZG = Date.now();
      for (const [SG, LG] of bG) ZG - LG >= wG.i && bG.delete(SG);
      return [...bG.keys()]
    }
  },
  37060: (GG, bG, ZG) => {
    function wG(GG, bG) {
      const ZG = bG.toLowerCase();
      for (const wG of GG)
        if (wG.toLowerCase() === ZG) return !0;
      return !1
    }

    function SG(GG, bG, ZG) {
      const SG = [],
        LG = [],
        yG = [];
      for (const kG of GG) !kG.isError && kG.name && ("inGame" === kG.location.status && kG.location.inLobbyName === bG || wG(ZG, kG.name) ? LG.push({
        friend: kG,
        place: "here"
      }) : "offline" === kG.location.status ? yG.push({
        friend: kG,
        place: "offline"
      }) : SG.push({
        friend: kG,
        place: "online"
      }));
      return [...SG, ...LG, ...yG]
    }

    function LG(GG, bG, ZG) {
      const SG = [],
        LG = GG.flatMap((GG => "here" === GG.place ? [GG.friend.name] : []));
      for (const yG of [...LG, ...bG]) wG(SG, yG) || wG(ZG, yG) || SG.push(yG);
      return SG
    }

    function yG(GG, bG) {
      return null === GG || void 0 === GG || !GG.canManage || wG(GG.whitelist, bG) ? "none" : "whitelist" === GG.visibility ? "required" : "quiet"
    }

    function kG(GG) {
      if (null === GG) return !0;
      const {
        visibility: bG
      } = GG;
      return "public" === bG || "unlisted" === bG || "whitelist" === bG && GG.canManage
    }

    function UG(GG, bG, ZG) {
      if (ZG) {
        const ZG = bG.filter((bG => !wG(GG.whitelist, bG)));
        return {
          ...GG,
          whitelist: [...GG.whitelist, ...ZG]
        }
      }
      return {
        ...GG,
        whitelist: GG.whitelist.filter((GG => !wG(bG, GG)))
      }
    }

    function YG(GG, bG) {
      const ZG = [];
      for (let wG = 0; wG < GG.length; wG += bG) ZG.push(GG.slice(wG, wG + bG));
      return ZG
    }
    ZG.d(bG, {
      b: () => kG,
      c: () => LG,
      d: () => SG,
      e: () => wG,
      f: () => YG,
      g: () => yG,
      k: () => UG
    })
  },
  8792: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => yG,
      e: () => LG
    });
    var wG = ZG(1972);
    const SG = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      LG = GG => "string" === typeof GG.icon && "" !== GG.icon && "string" === typeof GG.keycode && SG.test(GG.keycode),
      yG = GG => "Space" === GG ? "_" : wG.i[GG]
  },
  8839: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => SG
    });
    var wG = ZG(17);

    function SG() {
      return !wG.e.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  8842: (GG, bG, ZG) => {
    ZG.d(bG, {
      B: () => VG,
      C: () => fG,
      E: () => QG,
      c: () => LG,
      e: () => kG,
      i: () => YG,
      l: () => UG,
      m: () => yG,
      n: () => SG,
      r: () => wG,
      v: () => KG,
      z: () => pG
    });
    const wG = 14,
      SG = 6,
      LG = (wG + SG) / 2,
      yG = 200,
      kG = yG / 2,
      UG = yG / 2 - 1,
      YG = SG / wG * (yG / 2),
      VG = (GG, bG) => -Math.PI / 2 + 2 * GG * Math.PI / bG,
      pG = (GG, bG, ZG) => {
        const wG = 2 * Math.PI / ZG;
        return (Math.round((Math.atan2(bG, GG) + Math.PI / 2) / wG) % ZG + ZG) % ZG
      },
      fG = .5,
      QG = (GG, bG, ZG) => Math.hypot(GG.x, GG.y) < fG ? ZG : pG(GG.x, GG.y, bG),
      KG = (GG, bG, ZG, wG, SG) => {
        const LG = Math.PI / bG,
          yG = VG(GG, bG),
          kG = yG - LG,
          UG = yG + LG,
          YG = (GG, bG) => `${ZG+GG*Math.cos(bG)} ${ZG+GG*Math.sin(bG)}`;
        return [`M ${YG(wG,kG)}`, `L ${YG(SG,kG)}`, `A ${SG} ${SG} 0 0 1 ${YG(SG,UG)}`, `L ${YG(wG,UG)}`, `A ${wG} ${wG} 0 0 0 ${YG(wG,kG)}`, "Z"].join(" ")
      }
  },
  37249: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => LG
    });
    var wG = ZG(17),
      SG = ZG(1275);

    function LG() {
      const {
        clientEscMenuOptions: GG
      } = (0, wG.o)(["clientEscMenuOptions"]);
      return (0, SG.y)() && GG.showChat
    }
  },
  8870: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => yG
    });
    var wG = ZG(51),
      SG = ZG(8825),
      LG = ZG(2409);

    function yG() {
      const GG = (0, LG.i)("shopInfo"),
        [, bG] = (0, wG.useReducer)((GG => GG + 1), 0);
      return (0, LG.h)("shopInfo", bG), !(0, SG.b)(GG)
    }
  },
  37379: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => LG
    });
    var wG = ZG(51),
      SG = ZG(2409);

    function LG() {
      const GG = (0, SG.i)("lobbyLeaderboardInfo");
      return (0, wG.useMemo)((() => function(GG) {
        if (null === GG) return null;
        const bG = Object.entries(GG),
          ZG = bG.filter((GG => {
            let [, bG] = GG;
            return void 0 !== bG
          }));
        if (ZG.length === bG.length) return GG;
        const wG = Object.fromEntries(ZG),
          SG = Object.keys(GG).filter((GG => !Object.hasOwn(wG, GG)));
        return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${SG.join(", ")}`), wG
      }(GG)), [GG])
    }
  },
  37184: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => UG
    });
    var wG = ZG(2751),
      SG = ZG(3683),
      LG = ZG(2897);
    const yG = ["Unable to create vertex buffer"];
    let kG = {};

    function UG(GG, bG) {
      const ZG = new Date;
      console.error(`${ZG.getUTCHours()}:${ZG.getUTCMinutes()}:${ZG.getUTCSeconds()}`, GG, bG, null === bG || void 0 === bG ? void 0 : bG.stack), yG.includes(null === bG || void 0 === bG ? void 0 : bG.message) && (console.error("Unrecoverable error occurred. Leaving game."), (0, wG.e)().client.leaveGameUnwanted({
        reason: `Unrecoverable error occurred.\nThis is a bug.\n\nError:\n${bG.message}\n\nPlease refresh the page.`,
        requiresRefresh: !0,
        canReconnect: !1,
        automaticallyReconnect: !1
      })), (0, LG.logError)("warning", `${GG}\n ${bG} "\n" ${null===bG||void 0===bG?void 0:bG.stack}`);
      const SG = GG + bG + (null === bG || void 0 === bG ? void 0 : bG.stack);
      SG in kG || ((0, LG.logError)("error", `${GG}\n ${bG} "\n" ${null===bG||void 0===bG?void 0:bG.stack}`), kG[SG] = !0)
    }(0, SG.onGameReset)((() => {
      kG = {}
    }))
  },
  4864: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => lG,
      f: () => cG
    });
    var wG = ZG(4871),
      SG = ZG(333);
    const LG = 120,
      yG = 260,
      kG = 1.15,
      UG = 1.2,
      YG = 2,
      VG = 1.08,
      pG = .8,
      fG = .95,
      QG = 8,
      KG = "[\"')\\]\u300d\u300f\uff09]*",
      hG = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${KG}$`),
      dG = new RegExp(`[?\uff1f]${KG}$`),
      JG = new RegExp(`[!\uff01]${KG}$`),
      rG = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      zG = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      EG = new RegExp(`[${zG}]`),
      oG = new RegExp(`[${zG}]|[^${zG}]+`, "g"),
      XG = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function uG(GG) {
      let bG = 2166136261;
      for (let ZG = 0; ZG < GG.length; ZG++) bG ^= GG.charCodeAt(ZG), bG = Math.imul(bG, 16777619);
      return (bG >>> 0) / 4294967295 * 2 - 1
    }

    function iG(GG) {
      var bG;
      if (EG.test(GG)) return 1;
      const ZG = GG.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        wG = ZG.replace(/[^0-9]/g, "");
      if (wG.length > 0 && !/\p{L}/u.test(ZG)) return Math.min(wG.length, 4);
      const SG = null !== (bG = ZG.match(XG)) && void 0 !== bG ? bG : [];
      if (0 === SG.length) {
        var LG, yG;
        const GG = null !== (LG = null === (yG = ZG.match(/\p{L}/gu)) || void 0 === yG ? void 0 : yG.length) && void 0 !== LG ? LG : 0;
        return 0 === GG ? 0 : Math.min(Math.max(1, Math.round(GG / 2.5)), QG)
      }
      const kG = ZG.replace(/[^\p{L}]/gu, ""),
        UG = SG.length > 1 && "e" === SG.at(-1) && kG.endsWith("e") && !kG.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(GG.replace(/[^\p{L}]/gu, ""));
      return Math.min(SG.length - (UG ? 1 : 0), QG)
    }

    function CG(GG) {
      return GG.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function WG(GG) {
      const bG = GG.replace(/[^\p{L}]/gu, "");
      return bG.length >= 2 && bG === bG.toUpperCase() && bG !== bG.toLowerCase()
    }

    function mG(GG, bG) {
      var ZG;
      const QG = bG && (0, wG.i)(bG),
        KG = null !== (ZG = null === QG || void 0 === QG ? void 0 : QG.syllableMs) && void 0 !== ZG ? ZG : wG.d,
        zG = function(GG) {
          const bG = [];
          for (const wG of (0, SG.xc)(GG))
            if ("string" === typeof wG)
              for (const GG of wG.split(/(\s+)/)) {
                if ("" === GG) continue;
                if (/^\s+$/.test(GG)) {
                  bG.push({
                    kind: "space",
                    text: GG
                  });
                  continue
                }
                if (!EG.test(GG)) {
                  bG.push({
                    kind: "word",
                    text: GG,
                    delayMs: 0
                  });
                  continue
                }
                let wG = !0;
                for (const SG of null !== (ZG = GG.match(oG)) && void 0 !== ZG ? ZG : []) {
                  var ZG;
                  const GG = bG.at(-1);
                  wG || "word" !== (null === GG || void 0 === GG ? void 0 : GG.kind) || EG.test(SG) || /[\p{L}\p{N}]/u.test(SG) ? (wG || bG.push({
                    kind: "space",
                    text: "\u200b"
                  }), bG.push({
                    kind: "word",
                    text: SG,
                    delayMs: 0
                  }), wG = !1) : GG.text += SG
                }
              } else bG.push({
                kind: "icon",
                text: wG.icon,
                delayMs: 0
              });
          return bG
        }(GG),
        XG = [];
      let mG = [];
      for (const wG of zG) "space" !== wG.kind && (mG.push(wG), hG.test(wG.text) && (XG.push(mG), mG = []));
      XG.push(mG);
      const IG = [];
      let FG = 0;
      for (const wG of XG) {
        var vG, aG;
        const GG = null !== (vG = null === (aG = wG.at(-1)) || void 0 === aG ? void 0 : aG.text) && void 0 !== vG ? vG : "",
          bG = dG.test(GG),
          ZG = JG.test(GG),
          SG = wG.map((GG => "word" === GG.kind ? iG(GG.text) : 1)),
          zG = SG.findLastIndex((GG => GG > 0));
        for (const [dG, JG] of wG.entries()) {
          const GG = "word" === JG.kind,
            wG = SG[dG];
          JG.delayMs = FG;
          for (let SG = 0; QG && SG < wG; SG++) {
            const {
              intonation: LG
            } = QG;
            let yG = zG > 0 ? -LG.declineSemitones * (dG / zG) : 0;
            yG += uG(`${CG(JG.text)}|${SG}`) * LG.variationSemitones;
            const hG = Math.min(1, LG.variationSemitones);
            let rG = QG.glideSemitones,
              EG = 1;
            ZG && (yG += LG.exclaimLiftSemitones, EG *= kG), bG && dG === zG && (yG += LG.questionRiseSemitones * (wG > 1 ? .5 + .5 * SG / (wG - 1) : 1), SG === wG - 1 && (rG = Math.abs(rG) + LG.questionRiseSemitones / 2)), GG && WG(JG.text) && (yG += YG * hG, EG *= UG), wG > 1 && 0 === SG && (yG += pG * hG, EG *= VG), IG.push({
              atMs: FG + SG * KG,
              semitones: yG,
              glideSemitones: rG,
              durationMs: SG < wG - 1 ? Math.min(QG.durationMs, KG * fG) : QG.durationMs,
              level: EG
            })
          }
          FG += wG * KG + (hG.test(JG.text) ? yG : rG.test(JG.text) ? LG : 0)
        }
      }
      return {
        pieces: zG.map((GG => "space" === GG.kind ? GG : "icon" === GG.kind ? {
          kind: "icon",
          icon: GG.text,
          delayMs: GG.delayMs
        } : {
          kind: "word",
          text: GG.text,
          delayMs: GG.delayMs
        })),
        blips: IG
      }
    }
    var IG = ZG(1151),
      FG = ZG(1204),
      vG = ZG(1903);

    function aG(GG) {
      if ("string" === typeof GG) return GG;
      const bG = FG.d.get().getCurrentLanguageCode();
      return (0, IG.o)(bG, GG.translationKey, (0, IG.k)(GG.params, vG.b.shown))
    }

    function cG(GG) {
      const bG = void 0 === GG.voice ? null : (0, wG.j)(GG.voice),
        ZG = bG && (0, wG.i)(bG);
      return {
        plan: mG(aG(GG.line), ZG),
        synth: ZG
      }
    }

    function lG(GG) {
      const bG = [];
      let ZG = [];
      for (const [SG, LG] of GG.entries()) {
        var wG;
        "space" === LG.kind && (" " !== LG.text || "icon" !== (null === (wG = GG[SG + 1]) || void 0 === wG ? void 0 : wG.kind)) ? (ZG.length > 0 && bG.push(ZG), bG.push([LG]), ZG = []) : ZG.push(LG)
      }
      return ZG.length > 0 && bG.push(ZG), bG
    }
  },
  37035: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => SG
    });
    const wG = [{
      maxDist: 30,
      timeBetweenSoftChecks: 1e3,
      softUpdateDist: 2,
      hardUpdateDist: 10
    }, {
      maxDist: 200,
      timeBetweenSoftChecks: 2e3,
      softUpdateDist: 5,
      hardUpdateDist: 20
    }, {
      maxDist: 1 / 0,
      timeBetweenSoftChecks: 5e3,
      softUpdateDist: 30,
      hardUpdateDist: 100
    }];

    function SG(GG, bG, ZG) {
      const SG = Math.abs(GG - bG),
        LG = Date.now() - ZG;
      for (const yG of wG)
        if (GG < yG.maxDist) return SG >= yG.hardUpdateDist || LG > yG.timeBetweenSoftChecks && SG >= yG.softUpdateDist;
      return !1
    }
  },
  37353: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => pG,
      d: () => fG
    });
    var wG = ZG(604),
      SG = ZG(29),
      LG = ZG(37301);
    const yG = "replayFileKeptForReload",
      kG = "replayFileKeptForReloadAt",
      UG = "replayFileKeptForReloadTab",
      YG = 3e5,
      VG = 5e3;
    async function pG(GG, bG) {
      const ZG = Date.now(),
        LG = {
          at: ZG,
          bytes: GG,
          source: bG
        },
        YG = await Promise.race([(async () => await SG.e.setItem(kG, ZG) && SG.e.setItem(yG, LG))(), (0, wG.R)(VG).then((() => !1))]);
      YG || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const pG = {
        at: ZG,
        vQ: YG
      };
      SG.l.setItem(UG, pG)
    }
    async function fG() {
      var GG;
      const bG = SG.l.getItem(UG);
      null !== bG && SG.l.removeItem(UG);
      const ZG = Date.now(),
        wG = await SG.e.getItem(kG),
        VG = null !== bG && ZG - bG.at <= YG,
        pG = null !== bG && wG === bG.at;
      let fG = null;
      if (null !== wG && (pG || ("number" !== typeof wG || ZG - wG > YG)) && (fG = VG && pG && bG.vQ ? await SG.e.getItem(yG) : null, await Promise.all([SG.e.removeItem(kG), SG.e.removeItem(yG)])), !VG) return null;
      if ((null === (GG = fG) || void 0 === GG ? void 0 : GG.at) !== bG.at) throw new Error(LG.e.replayNotKept.text);
      return {
        bytes: fG.bytes,
        source: fG.source
      }
    }
  },
  37348: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => wG,
      g: () => LG,
      k: () => SG
    });
    const wG = [9];

    function SG(GG) {
      return wG.includes(GG)
    }

    function LG(GG) {
      return null !== GG && GG >= 3 && GG < wG[0]
    }
  },
  37309: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => yG,
      h: () => LG,
      j: () => SG
    });
    const wG = [.25, .5, 1, 2, 4, 8, 16];

    function SG(GG, bG) {
      const ZG = wG;
      let SG = ZG.indexOf(GG);
      return -1 === SG && (SG = ZG.findIndex((bG => bG >= GG)), -1 === SG && (SG = ZG.length - 1)), "up" === bG ? ZG[Math.min(SG + 1, ZG.length - 1)] : ZG[Math.max(SG - 1, 0)]
    }

    function LG(GG) {
      return GG <= wG[0]
    }

    function yG(GG) {
      return GG >= wG[wG.length - 1]
    }
  },
  37363: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => wG,
      f: () => SG
    });
    const wG = "data-replay-ui-active",
      SG = [{
        group: "middleTextTop",
        dataAttr: "data-replay-hide-middle-text-top",
        label: "Middle text top"
      }, {
        group: "middleTextUpper",
        dataAttr: "data-replay-hide-middle-text-upper",
        label: "Middle text upper"
      }, {
        group: "middleTextLower",
        dataAttr: "data-replay-hide-middle-text-lower",
        label: "Middle text lower"
      }, {
        group: "rightInfoText",
        dataAttr: "data-replay-hide-right-info-text",
        label: "Right info text"
      }, {
        group: "crosshair",
        dataAttr: "data-replay-hide-crosshair",
        label: "Crosshair"
      }, {
        group: "flyingMiddleText",
        dataAttr: "data-replay-hide-flying-middle-text",
        label: "Flying middle text"
      }, {
        group: "hotbar",
        dataAttr: "data-replay-hide-hotbar",
        label: "Hotbar (shop, inventory, item name)"
      }, {
        group: "auraBar",
        dataAttr: "data-replay-hide-aura-bar",
        label: "Aura XP bar"
      }, {
        group: "healthAndShield",
        dataAttr: "data-replay-hide-health-and-shield",
        label: "Health bar and shield bar"
      }, {
        group: "effectInfo",
        dataAttr: "data-replay-hide-effect-info",
        label: "Effect info"
      }, {
        group: "nametag",
        dataAttr: null,
        label: "Nametags"
      }, {
        group: "everythingElse",
        dataAttr: "data-replay-hide-everything-else",
        label: "Everything else"
      }]
  },
  37368: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => YG,
      f: () => pG,
      h: () => VG
    });
    var wG = ZG(17),
      SG = ZG(19),
      LG = ZG(37363);

    function yG() {
      const GG = {};
      for (const {
          group: bG
        }
        of LG.f) GG[bG] = !0;
      return GG
    }
    let kG = yG();

    function UG() {
      SG.l.xh("replayViewer|uiVisibilityChanged")
    }

    function YG() {
      return kG
    }

    function VG(GG, bG) {
      kG[GG] !== bG && (kG = {
        ...kG,
        [GG]: bG
      }, "nametag" === GG && wG.e.set({
        areNametagsHidden: !bG
      }), UG())
    }

    function pG() {
      kG = yG(), wG.e.set({
        areNametagsHidden: !1
      }), UG()
    }
  },
  8784: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => LG,
      i: () => yG,
      j: () => kG,
      k: () => SG
    });
    var wG = ZG(8792);
    const SG = GG => {
        const bG = [];
        GG.holdingGun && bG.push({
          kind: "reload"
        }), GG.touchscreenActionButton && bG.push({
          kind: "touchButton",
          label: GG.touchscreenActionButton
        });
        for (const LG of null !== (ZG = null === (SG = GG.customButtons) || void 0 === SG ? void 0 : SG.filter(wG.e)) && void 0 !== ZG ? ZG : []) {
          var ZG, SG;
          bG.push({
            kind: "customButton",
            id: LG.id,
            icon: LG.icon,
            description: LG.description
          })
        }
        return bG
      },
      LG = GG => GG.length >= 2,
      yG = GG => "specialAction" !== GG.kind,
      kG = (GG, bG) => {
        if (null === GG || null === bG) return GG === bG;
        if (GG.kind !== bG.kind) return !1;
        switch (GG.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return GG.action === bG.action;
          case "customButton":
            return GG.id === bG.id && GG.icon === bG.icon;
          case "touchButton":
            return GG.label === bG.label
        }
      }
  },
  8776: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => VG,
      f: () => QG,
      g: () => pG,
      k: () => KG
    });
    var wG = ZG(51),
      SG = ZG(19),
      LG = ZG(1389),
      yG = ZG(8784),
      kG = ZG(8800);
    let UG = null;
    const YG = () => UG,
      VG = GG => {
        (0, yG.j)(UG, GG) || (UG = GG, SG.l.xh(kG.g, UG))
      },
      pG = () => {
        const [GG, bG] = (0, wG.useState)(YG);
        return (0, LG.g)(kG.g, bG), GG
      };
    let fG = !1;
    const QG = GG => {
        GG !== fG && (fG = GG, SG.l.xh(kG.k, GG))
      },
      KG = () => {
        const [GG, bG] = (0, wG.useState)(fG);
        return (0, LG.g)(kG.k, bG), GG
      }
  },
  8800: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => LG,
      g: () => wG,
      k: () => SG,
      n: () => kG,
      q: () => UG,
      u: () => YG,
      w: () => yG
    });
    const wG = "controllerActionHintChanged",
      SG = "controllerActionWheelHintChanged",
      LG = "controllerOpenChat",
      yG = "controllerSneakToggledChanged",
      kG = "controllerAttackLatchedChanged",
      UG = "controllerDropStackHoldChanged",
      YG = "controllerPickBlockHintChanged"
  },
  8732: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => yG,
      h: () => LG,
      j: () => UG,
      n: () => kG
    });
    var wG = ZG(1389),
      SG = ZG(1359);
    const LG = "controllerInventoryCursorChanged",
      yG = {
        showing: !1,
        kind: null,
        holding: !1,
        slotHasItem: !1,
        pressHints: null,
        hasCategories: !1,
        hasList: !1,
        openButtonCloses: !1,
        steppingSlots: !1,
        quickMoveToHotbar: !1,
        dropStackHold: null,
        hotbarPicking: !1
      },
      kG = () => {
        var GG, bG;
        return (0, wG.j)(LG, null !== (GG = null === (bG = (0, SG.h)()) || void 0 === bG ? void 0 : bG.getInventoryCursorState()) && void 0 !== GG ? GG : yG)
      },
      UG = () => {
        var GG, bG;
        return null !== (GG = null === (bG = (0, SG.h)()) || void 0 === bG ? void 0 : bG.isPadSteppingSlots()) && void 0 !== GG && GG
      }
  },
  8728: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => fG,
      e: () => kG,
      i: () => UG,
      k: () => yG,
      m: () => LG,
      q: () => VG,
      t: () => pG
    });
    let wG = null;
    const SG = new Set,
      LG = GG => (wG = GG, () => {
        if (wG === GG) {
          wG = null;
          for (const GG of SG) GG()
        }
      }),
      yG = GG => (SG.add(GG), () => {
        SG.delete(GG)
      }),
      kG = () => wG,
      UG = () => null !== wG;
    let YG = null;
    const VG = GG => {
        YG = GG
      },
      pG = () => {
        const GG = YG;
        return YG = null, GG
      },
      fG = (GG, bG) => {
        var ZG, wG;
        return null !== (ZG = null !== (wG = GG.find((GG => GG.element === bG))) && void 0 !== wG ? wG : GG.find((GG => GG.element.contains(bG)))) && void 0 !== ZG ? ZG : null
      }
  },
  8736: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => LG,
      i: () => yG
    });
    var wG = ZG(51);
    const SG = new WeakMap,
      LG = GG => {
        var bG, ZG;
        return null !== (bG = null === (ZG = SG.get(GG)) || void 0 === ZG ? void 0 : ZG.current) && void 0 !== bG ? bG : null
      },
      yG = (GG, bG) => {
        const ZG = (0, wG.useRef)(bG);
        ZG.current = bG;
        const LG = (0, wG.useRef)(null);
        (0, wG.useEffect)((() => {
          const bG = GG.current,
            wG = LG.current;
          bG !== wG && (wG && SG.get(wG) === ZG && SG.delete(wG), LG.current = bG, bG && SG.set(bG, ZG))
        })), (0, wG.useEffect)((() => () => {
          const GG = LG.current;
          GG && SG.get(GG) === ZG && SG.delete(GG), LG.current = null
        }), [])
      }
  },
  8862: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => kG,
      c: () => YG,
      f: () => pG,
      g: () => VG,
      h: () => UG,
      l: () => QG
    });
    var wG = ZG(19),
      SG = ZG(1993),
      LG = ZG(1359),
      yG = ZG(1343);
    const kG = GG => {
        var bG, ZG;
        return (0, yG.k)() && null !== (bG = null === (ZG = (0, LG.h)()) || void 0 === ZG ? void 0 : ZG.getGlyphForNoaAction(GG)) && void 0 !== bG ? bG : null
      },
      UG = "controllerGlyph:",
      YG = GG => {
        var bG, ZG;
        return null !== (bG = null === (ZG = (0, LG.h)()) || void 0 === ZG ? void 0 : ZG.getPadGlyphIconName(GG)) && void 0 !== bG ? bG : `${UG}xbox/${GG}`
      },
      VG = GG => GG.startsWith(UG),
      pG = GG => {
        var bG, ZG;
        return VG(GG) && null !== (bG = null === (ZG = (0, LG.h)()) || void 0 === ZG ? void 0 : ZG.getPadGlyphIconUrl(GG)) && void 0 !== bG ? bG : null
      },
      fG = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", yG.e, SG.d, SG.b],
      QG = GG => {
        const bG = fG.map((bG => wG.l.subscribe(bG, GG)));
        return () => {
          for (const GG of bG) wG.l.unsubscribe(GG)
        }
      }
  },
  8759: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => LG,
      g: () => SG
    });
    let wG = null;
    const SG = function(GG) {
        const bG = {
          cycle: GG,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return wG = bG, () => {
          wG === bG && (wG = null)
        }
      },
      LG = () => {
        var GG;
        return null !== (GG = wG) && void 0 !== GG && GG.canCycle() ? wG.cycle : null
      }
  },
  8854: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => SG,
      c: () => yG,
      e: () => LG,
      g: () => wG,
      j: () => kG,
      m: () => YG,
      q: () => VG
    });
    const wG = "controllerActionWheelOpen",
      SG = "controllerActionWheelAim",
      LG = "controllerActionWheelCommit",
      yG = "controllerActionWheelClose",
      kG = "controllerActionWheelPick";
    let UG = !1;
    const YG = () => UG,
      VG = GG => {
        UG = GG
      }
  },
  8849: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => LG,
      g: () => SG
    });
    let wG = 0;
    const SG = () => {
        wG++
      },
      LG = () => wG
  },
  8750: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => UG,
      f: () => SG,
      i: () => yG,
      j: () => LG,
      l: () => wG,
      m: () => YG
    });
    const wG = "controllerQuickChatWheelOpen",
      SG = "controllerQuickChatWheelAim",
      LG = "controllerQuickChatWheelCommit",
      yG = "controllerQuickChatWheelClose";
    let kG = !1;
    const UG = () => kG,
      YG = GG => {
        kG = GG
      }
  },
  37180: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => SG,
      g: () => LG
    });
    const wG = new Map;

    function SG(GG) {
      var bG;
      return null === GG ? null : null !== (bG = wG.get(GG)) && void 0 !== bG ? bG : null
    }

    function LG(GG, bG) {
      return wG.set(GG, bG), () => {
        wG.get(GG) === bG && wG.delete(GG)
      }
    }
  },
  37329: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => Bb,
      f: () => xb
    });
    var wG = ZG(4255),
      SG = ZG(604),
      LG = ZG(3746),
      yG = ZG(3768),
      kG = ZG.n(yG);
    const UG = new Set(["nameTagInfo", "multilineTextBox", "animationScript", "content", "skyBox", "opts", "fromBlockData", "toBlockData", "sharedBlockData"]),
      YG = "EV_boolean",
      VG = "EV_double",
      pG = "EV_string",
      fG = "EV_doubleArr",
      QG = "EV_armour",
      KG = "EV_other",
      hG = "EV_cosmetics",
      dG = "OEV_boolean",
      JG = "OEV_int",
      rG = "OEV_double",
      zG = "OEV_string",
      EG = "OEV_stringArr",
      oG = "OEV_meshScaling",
      XG = "IV_int",
      uG = "IV_string",
      iG = "IV_doubleArr",
      CG = "IV_double",
      WG = "HV_int",
      mG = "HV_slots",
      IG = "EnvV_string",
      FG = "EnvV_double",
      vG = "EnvV_doubleArr",
      aG = "EnvV_boolean",
      cG = {
        type: pG,
        name: pG,
        position: fG,
        rotation: fG,
        scale: VG,
        speed: VG,
        jumping: YG,
        crouching: YG,
        cameraPitch: VG,
        armSwinging: YG,
        heldItemName: pG,
        heldItemEnchantmentTier: pG,
        pose: pG,
        followingEId: pG,
        ridingVehicleEId: pG,
        leaderboardTop: pG,
        meshKind: pG,
        meshOpts: pG,
        followingOffset: fG,
        shouldMatchFollowingEntityRotation: YG,
        meshOffset: fG,
        baseRenderHeading: VG,
        armour: QG,
        JA: KG,
        playerCustomisations: hG,
        variation: pG,
        metaInfo: pG,
        soundName: pG,
        volume: VG,
        refDistance: VG,
        maxHearDist: VG,
        rate: VG,
        aiState: pG
      },
      lG = {
        opacity: rG,
        zIndex: JG,
        overlayColour: zG,
        canSee: dG,
        meshScaling: oG,
        nameTagInfo: zG,
        multilineTextBox: zG,
        hasPriorityNametag: dG,
        ranks: EG,
        nameColour: zG,
        _isAlive: dG,
        _invisibleEffect: dG,
        _invincible: dG,
        killfeedColour: zG,
        hideNameSeed: JG,
        _glowingEffect: dG,
        lockHeadToBody: dG
      },
      jG = {
        itemName: uG,
        amount: XG,
        position: iG,
        size: CG,
        attributes: uG
      },
      PG = {
        skyBox: IG,
        fogColourOverride: IG,
        fogChunkDistanceOverride: FG,
        cameraTint: vG,
        fogOnSkybox: aG,
        fogBlockDistanceOverride: FG
      },
      MG = {
        type: "array",
        items: "double"
      },
      AG = {
        type: "array",
        items: "int"
      },
      sG = {
        type: "map",
        values: {
          type: "record",
          name: "RecordedArmourPiece",
          fields: [{
            name: "itemName",
            type: "string"
          }, {
            name: "enchantmentTier",
            type: ["null", "string"],
            default: null
          }]
        }
      },
      qG = {
        type: "map",
        values: MG
      };

    function nG(GG, bG) {
      return {
        type: "record",
        name: GG,
        fields: [{
          name: "x",
          type: bG
        }]
      }
    }
    const gG = {
        type: "array",
        items: {
          type: "record",
          name: "OtherEntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", nG(dG, "boolean"), nG(JG, "int"), nG(rG, "double"), nG(zG, "string"), nG(EG, {
              type: "array",
              items: "string"
            }), nG(oG, qG)]
          }]
        }
      },
      eG = {
        type: "array",
        items: {
          type: "record",
          name: "EntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", nG(YG, "boolean"), nG(VG, "double"), nG(pG, "string"), nG(fG, MG), nG(QG, sG), nG(KG, gG), nG(hG, {
              type: "map",
              values: "string"
            })]
          }]
        }
      },
      RG = {
        type: "array",
        items: {
          type: "record",
          name: "ItemDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", nG(XG, "int"), nG(uG, "string"), nG(CG, "double"), nG(iG, MG)]
          }]
        }
      },
      TG = {
        type: "map",
        values: ["null", {
          type: "record",
          name: "RecordedHotbarSlot",
          fields: [{
            name: "name",
            type: "string"
          }, {
            name: "amount",
            type: ["null", "int"],
            default: null
          }, {
            name: "attributes",
            type: "string"
          }]
        }]
      },
      HG = {
        type: "record",
        name: "HotbarDeltaEntry",
        fields: [{
          name: "i",
          type: "int"
        }, {
          name: "v",
          type: ["null", nG(WG, "int"), nG(mG, TG)]
        }]
      },
      tG = {
        type: "array",
        items: {
          type: "record",
          name: "PlayerHudDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", "int", "double"]
          }]
        }
      },
      DG = {
        type: "array",
        items: {
          type: "record",
          name: "UiElementsDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", "string"]
          }]
        }
      },
      NG = {
        type: "array",
        items: {
          type: "record",
          name: "EnvironmentDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", nG(IG, "string"), nG(FG, "double"), nG(vG, MG), nG(aG, "boolean")]
          }]
        }
      },
      OG = [{
        name: "HI",
        type: "record",
        fields: [{
          name: "pos",
          type: AG
        }, {
          name: "fromBlockId",
          type: "int"
        }, {
          name: "toBlockId",
          type: "int"
        }, {
          name: "fromBlockData",
          type: ["null", "string"],
          default: null
        }, {
          name: "toBlockData",
          type: ["null", "string"],
          default: null
        }]
      }, {
        name: "setBlockData",
        type: "record",
        fields: [{
          name: "pos",
          type: AG
        }, {
          name: "fromBlockData",
          type: ["null", "string"],
          default: null
        }, {
          name: "toBlockData",
          type: ["null", "string"],
          default: null
        }]
      }, {
        name: "chunkAdded",
        type: "record",
        fields: [{
          name: "chunkX",
          type: "int"
        }, {
          name: "chunkY",
          type: "int"
        }, {
          name: "chunkZ",
          type: "int"
        }, {
          name: "rle",
          type: "bytes"
        }, {
          name: "sharedBlockData",
          type: "string"
        }]
      }, {
        name: "chunkRemoved",
        type: "record",
        fields: [{
          name: "chunkX",
          type: "int"
        }, {
          name: "chunkY",
          type: "int"
        }, {
          name: "chunkZ",
          type: "int"
        }, {
          name: "rle",
          type: "bytes"
        }, {
          name: "sharedBlockData",
          type: "string"
        }]
      }],
      xG = [{
        name: "playSound",
        type: "record",
        fields: [{
          name: "GG",
          type: "string"
        }, {
          name: "volume",
          type: "double"
        }, {
          name: "rate",
          type: "double"
        }, {
          name: "wG",
          type: ["null", {
            type: "record",
            name: "SoundPosSettings",
            fields: [{
              name: "SG",
              type: ["null", "string", MG],
              default: null
            }, {
              name: "LG",
              type: ["null", "double"],
              default: null
            }, {
              name: "yG",
              type: ["null", "double"],
              default: null
            }]
          }],
          default: null
        }]
      }, {
        name: "animateEntity",
        type: "record",
        fields: [{
          name: "qw",
          type: "string"
        }, {
          name: "nw",
          type: "int"
        }, {
          name: "animationScript",
          type: ["null", "string"]
        }, {
          name: "gw",
          type: "double"
        }, {
          name: "ew",
          type: "double"
        }]
      }, {
        name: "bullet",
        type: "record",
        fields: [{
          name: "rZ",
          type: "string"
        }, {
          name: "bulletDirections",
          type: {
            type: "array",
            items: MG
          }
        }]
      }, {
        name: "lifeformHealth",
        type: "record",
        fields: [{
          name: "cG",
          type: "string"
        }, {
          name: "Wb",
          type: ["null", "double"],
          default: null
        }, {
          name: "Ib",
          type: ["null", "double"],
          default: null
        }]
      }, {
        name: "particleEffectPlayed",
        type: "record",
        fields: [{
          name: "opts",
          type: "string"
        }]
      }, {
        name: "flyingMiddleText",
        type: "record",
        fields: [{
          name: "content",
          type: "string"
        }, {
          name: "cL",
          type: "double"
        }, {
          name: "angle",
          type: "double"
        }, {
          name: "lL",
          type: "int"
        }]
      }, {
        name: "playerKilled",
        type: "record",
        fields: [{
          name: "deadEId",
          type: "string"
        }, {
          name: "killerEId",
          type: "string"
        }, {
          name: "withItem",
          type: "string"
        }, {
          name: "killstreak",
          type: "int"
        }]
      }, {
        name: "customKillfeed",
        type: "record",
        fields: [{
          name: "killer",
          type: {
            type: "record",
            name: "RecordedKillfeedParty",
            fields: [{
              name: "eId",
              type: ["null", "string"],
              default: null
            }, {
              name: "name",
              type: ["null", "string"],
              default: null
            }, {
              name: "colour",
              type: ["null", "string"],
              default: null
            }]
          }
        }, {
          name: "victim",
          type: "RecordedKillfeedParty"
        }, {
          name: "withItem",
          type: "string"
        }]
      }],
      BG = [{
        name: "position",
        type: MG
      }, {
        name: "direction",
        type: MG
      }, {
        name: "firstPerson",
        type: "boolean"
      }, {
        name: "aiming",
        type: "boolean"
      }, {
        name: "reloading",
        type: "boolean"
      }, {
        name: "charging",
        type: "boolean"
      }];

    function Gb() {
      const GG = [{
        name: "entities",
        type: {
          type: "map",
          values: eG
        }
      }, {
        name: "items",
        type: {
          type: "map",
          values: RG
        }
      }, {
        name: "camera",
        type: {
          type: "record",
          name: "ReplayCameraState",
          fields: BG
        }
      }, {
        name: "hotbar",
        type: ["null", {
          type: "record",
          name: "HotbarFieldDelta",
          fields: [{
            name: "fullSlotsArray",
            type: "boolean"
          }, {
            name: "entries",
            type: {
              type: "array",
              items: HG
            }
          }]
        }],
        default: null
      }, {
        name: "playerHud",
        type: ["null", tG],
        default: null
      }];
      return GG.push({
        name: "effects",
        type: ["null", {
          type: "array",
          items: {
            type: "record",
            name: "ReplayActiveEffect",
            fields: [{
              name: "cG",
              type: "string"
            }, {
              name: "name",
              type: "string"
            }, {
              name: "icon",
              type: "string"
            }, {
              name: "level",
              type: "float"
            }, {
              name: "displayName",
              type: ["null", "string"],
              default: null
            }, {
              name: "endTick",
              type: ["null", "int"],
              default: null
            }, {
              name: "showInNametag",
              type: "boolean"
            }]
          }
        }],
        default: null
      }), GG.push({
        name: "uiElements",
        type: DG
      }, {
        name: "environment",
        type: NG
      }, {
        name: "structuralEvents",
        type: {
          type: "array",
          items: OG
        }
      }, {
        name: "ephemeralEvents",
        type: {
          type: "array",
          items: xG
        }
      }), GG
    }
    const bb = {
      name: "editState",
      type: {
        type: "record",
        name: "ReplayEditState",
        fields: [{
          name: "cameraKeyframes",
          type: {
            type: "array",
            items: {
              type: "record",
              name: "ReplayCameraKeyframe",
              fields: [{
                name: "Tp",
                type: "int"
              }, {
                name: "position",
                type: MG
              }, {
                name: "direction",
                type: MG
              }, {
                name: "easing",
                type: MG
              }]
            }
          }
        }, {
          name: "playbackMark",
          type: ["null", {
            type: "record",
            name: "ReplayPlaybackMark",
            fields: [{
              name: "inTick",
              type: "int"
            }, {
              name: "outTick",
              type: "int"
            }]
          }],
          default: null
        }]
      }
    };
    let Zb;

    function wb(GG) {
      if (9 === GG) return Zb ??= (bG = [{
        name: "meta",
        type: {
          type: "record",
          name: "RecordingMeta",
          fields: [{
            name: "formatVersion",
            type: "int"
          }, {
            name: "recordedAt",
            type: "string"
          }, {
            name: "Fv",
            type: "int"
          }, {
            name: "keyframeIntervalTicks",
            type: "int"
          }, {
            name: "gameNameWithVariation",
            type: "string"
          }, {
            name: "lobbyName",
            type: "string"
          }, {
            name: "gameName",
            type: "string"
          }, {
            name: "variation",
            type: ["null", "string"],
            default: null
          }, {
            name: "lobbyType",
            type: "int"
          }, {
            name: "localPlayerEntityId",
            type: "string"
          }, {
            name: "serverPlayerEntityId",
            type: "string"
          }]
        }
      }, {
        name: "initialChunks",
        type: {
          type: "array",
          items: {
            type: "record",
            name: "InitialChunk",
            fields: [{
              name: "chunkPos",
              type: AG
            }, {
              name: "rle",
              type: "bytes"
            }, {
              name: "sharedBlockData",
              type: "string"
            }]
          }
        }
      }, {
        name: "ticks",
        type: {
          type: "array",
          items: {
            type: "record",
            name: "RecordingTick",
            fields: Gb()
          }
        }
      }, bb], kG().Type.forSchema({
        type: "record",
        name: "RecordingState",
        fields: bG
      }, {
        LQ: Object.create(null)
      })), Zb;
      var bG
    }
    var Sb = ZG(2815);
    let Lb, yb, kb, Ub;
    const Yb = 12;
    var Vb, pb;
    const fb = [0, 1, 8, 255, "length", "undefined", 63, 6, "fromCodePoint", 7, 12, "push", 91, 8191, 88, 13, 14, 3, !1, 127, 128, 16, null, 135, 4, !0, 136, 137, 15, 132, 2, 10, 5, 11, 9, "_"];

    function Qb(GG) {
      return typeof wZ !== fb[5] && wZ ? (new wZ).decode(new SZ(GG)) : typeof LZ !== fb[5] && LZ ? LZ.from(GG).toString("utf-8") : UZ(GG)
    }

    function Kb() {}

    function hb() {
      hb = function() {}
    }
    var db, Jb;
    hb(Vb = {}, pb = ["@|eGr.:bemV9E,/gf1#SDBu4F]{KTbCkgF", "o*ao2%=g2mYQ#CA{)2jL", "97tqz6wUgpKzf~SU}*;nT6}d7m;X<Q4}sYym446Ls7", "4Y@r2|YUdVyHq4+C}J{G8/~yr1B6VxUc)ZW(0al&?", "FyJ_%6@EX]n(0+v,71~o[<W!T[,vlA587|WL/G4M", '"y~(]pybo', ',*IG5,MUc"+wf~ec%V@e,bd(8$dX3ANUH"Qr0]iLD', '<LzKIE#c;7tZ^24:E@rm",[&yJB6BC58P$[(^#1>o!fEo,tcq+t(op>F', 'TltoyB$G|i"wg+Cn3aF', "tBHAZyIvntV>nbtUoru6rHGFbgPXL#ZEY2UD", "e2L_96nM9gYEq+I_|Vtn>GT|4+", "7L;n9v*b`Z^", "$/sm?BY|8VQF>D~kVxpd[/Go2&&vk4|CZmvfKG/JyyAu5+n:Jg_D", 'pYlUh6xG5l)Hi{Q/}d1`fZtd4t(vRAvx$A`D8]IFP"dD#v_"?:ImJdVE=>]', "X1,6%(^=Mm0?/2Y_$21KMwscq4#d~plWh:jzypt4il*QA8Ac]$~qJ", "uKp>kY~E(1]nrw]:)WAzZW&I![u5l8R", 'Qzp90AyI<&Fef!+WU:Y>U<"!~R<{g?xg1y|qABigNp@5g?', 'Z$1SHj^M1h|hUrexdjY:N4wUVmAr8#Uct$adHd~E"ytg1w&B/]Hr!}(M', "E**9r9>!Q1", "iatoQA=L(=n_K4L", "GRNeKxWF", "*A:dzj?oJ[]z.D]E{/`6@fP/Km&48,@I1yk9{$&EO10d)Q|CFS2", 'nYf>,msc"]J@n2mIB:G9s%$IG$UtajH{SY/K*z9!~RE', 'NEUqV5":%4Cq8fV_Kmwm7fd(e1QOb#,cgp5D{bQ(YmXR!pec]N', '`7:os5Xy`Z"wNlI&YY(h', "J]=zgfcsU$$9LxbCc/5(N.1GVliZDAykD:3mxQRFN1Oy32~@n:~hpKyvL", 'u/se#v8Es!fQrj2"YL89[vI]~>h49wHx%7l(ZKxyY=GXtvO8?1b6*mN', "YY+q.6D4m!B$]}Hg", "}Lfs9v1I?m*Q<rH,Rxm6NWuQGVl84!%u8x,(D5d(R7D5>D+WQH[D", ":YiK~9zofl#RiO.B6K}d3A^M0=/", ",:.:q4_&QJs72,},*tzS`ax!$VDYP{=glm<_=pN", 'O+Zz49"IshbvVxPn#LWrZ5ey}mV9e!g7[:Nm@,sgip%H]D', "+]Y9Hv9Ioh", ';H"Kotl{=g}vejjCxJ.?u6Cs37Qp8f2_FJb(;`d/ep_vRbW,', "LgA(*GngCVq+1}I{a7#s~4Io|RR2S2", "bmDf3et|.176(w.nXLU(Rj3/%=Gr>TK/sYY>Mt%Bu4e8<}!", "_*:dx~5IA4ctvws&.W|niB,Utll7q4nk(K)L", '`Yp:@,O!s4Tw(pHcndp>c,3Jp$!x7lc:&1m(wjDsht9:GCA_V_Wz}/@Ip"', "~YOsA>]:kt.ZEf4}+|@D", "&:mD|~EESidu~cf/6$0>?v$EcVP9N", 'uLcebYx]P"RY*b1_/jph0OT(cV<g68%B+g;6;ApQ1qUvkM', "+p:DIzo>1h/E1}6CQHYA$KuceyuB)Q>I8Ck8}$^g[m+ww8Znx*Ne(xN", "PnmnxQN", "$teLMp:>_p0g|!2{r2qnAf):^se+*4PIb_IGGjwgW7ddF", '@|Gf{0o!4"9sw0):Cp0Cvpq:h"`rJ2/{UpB930N', "ZKEwf4tUtZrRo#>n8Y;(f45osV*c)Qh", "IK8d&fN", 'zjYfe(c}"1D!~wPnAKaqOaLsvm$o6Ankdj(:]pEGRVr+F', 'Zmnd;AL%"]Sv7TfnFiq1', 'AK6?nb}cm4wsp$BxU*BG%68G=ph2lCWclgqDCz6Jd".>T2E{', "{daqXwKE|lri>Ty}RY<C.(L}P+", "{/mD2tvK8VVQ}Dic[J?de`k=}m69z}F@", 'Z7%(/E2;}=Ch[}tkI]XC}ZY|x4UBq,)@,tY_]wU%1q4r|!cBR@W6_A64n">', "@S{8$5Eo8VwsIjv&cF", ")7CSlf(/yg|v<D", "vt#>?j3%e1ZQz}C:3jHo~>9v8$!qxjg7dLb(nQd|em,6$2^&faiSP,CM", "B].>Zwby?&TLK4CI!|rLM}N", '2]YAYqz:A7u"FjNkB2qzJqa<9Rd9vDr/y"_(bW_y:$anwl$@S].fHwN', "9tqzYweE`$qQ?pA_:/>oOOE]8t^[QA5Cd$?_HjKoF1CV&fQCPN", '|Y&hQ(c|c"LY&0/&YzN`36n=ktdX9p.nzV}de<./:t3SH{,glF', '|_NmG0u|B&xw}0`C#HCK9}8GZ7qH&8Exr_w1%<tLK=9:"}Lx[F', 'PB_6^~"v.m[_c22"&l2SSbN', "aA]KCzxo,=UVf!TW6@.dMB64Ml_BJ88IwN", ',VeGUzNHNgtn]p=}H"o6ABNQE1Z6E#=c[K2Svq#(!gL7b+!', "Tmt(LOLs@4JBD2)BSB)K00MUE&3|p8)nZA]m<]h=u=%]^A8ET]56BrWo:ip", "q2t(=40I{+;d|+FUHtZKfGNkJV^6axW{EJisG]vym4ZQl88n", "0n9CQtj|epVyzj<nl1%A;]/}g]MUO}m/XYbDf|gM", "kV2h8$zF1hB6VxF*dK5rjWSQ9RAQ8$ZBzN", "R:>_d}&&S1&v}TA_v7uD", "Lgjr@(m/Y=z|!T)IqaNUjWN", '.KwzZ|G5m=LY<D1CJ]~_0eg(v!.lQ2}"zKES?dVIi1`dUfRCGBb($>LUD', 'rJvoq5xb[=O:+O/_RgH6oB":9R:_/bh7LYpoy5+ctZomVp;BLgM', '<Vq1x~FICV!qW#p@WLwzlOJslp(Q=82c;"xoJjFE}]qnF', "y2uowt<vQpDMxw}c~jun.,xyGVyzq,lWw_$s", 'c|uq&,G!Fg=$z}7n"F', '4j_rBmp|H4K6=}I{*"09=|2&?', 'TCn:3`Vy6Z>zDlmEQxjzA5Mgasn"Fj3kvL7hQ}6|p"Q{T2', "{|/zuf<oL", "wjQrgf6JJVFmOcw,xm*dEGj/|l#9*2", '[/"8T62I)VAF_++', "97b1F}vFGti|F", '^V@nMw;:^[rvz}EUJ|6_@`@&TgT"b+k_r_L6Oei|o7', '(7"m`q8&_yTwwwnE0L%nL%UQFl*jPOX"aCG9=jmM', "}Yaq.a2{[&FKm~08*dfs{/PBVl>v1xT/(K~_?5V!a+`{[j$::BceHtl&`yk", 'A@5n{/9v+g<})Q2g}Y_LOq,(6"', "5LBSB(sc7&dH68GCmaH($57M<=6r)}<EDruruAigbZLB6l7/x]2", 'Y_"8!j95E]Z(U?', '7|IKP0`4FyqoM{R{|_1K"', '<V"wy|Evz"%:{}1', "itP?2B9:>=LY`rs&|7kGH}|gbs^[w2", '*t/KTq}d{"TciO[/YnKs@<DkY![h.Eyk:7^:)aHJ_g', '}A&:tB%%1qT"OQtk1]]Sy9cc1Vd9yHXg', "da*:kr7crm2GMfF@<a>qW~jU?m=Qh#p@tB#KD5Z4g1Q}dv3kJC!djZk($$C", 'cp`1~5Eoh"@5*+vcaA1Gez!>R+.d|![IEm<nZKLkh7hY?j:@)k1Lb9N', "lA&:=psUypTBix(/CVgw>Z1&iln8Y$rWYk&w`vg|d7B", "VtS1Im*!^R1U=0H,^_fs9f;]z4XzBCox}YlLU", 'T*sU)e&IgpEo|rPkL@`(IG>Ek7c5)j3n3Wce"t1F', ')"Lo2dcc~+VSpl>B=jF', "TS>q#}Q(D1RGb#K8S/eUNBZQ$$3d?}>/~BLqj#E]e1!~wlYxcKtnn", 'K2Yd%`cM}1,v}w[EHYKdr.ROV]MTy#)@j2;nwd2>P"4[>D', "txtnm4EEa[Tcz}4k|*`(.$mM", "9Y2fWYmM", ',7sm;vF>"m,quxH,Fg>q%63([msGaxC}DywzJjF{X1rtn$(n8A2', '|KS1_`f/4"s@q+Y"[/%oerlF', "W7A6c0p4xm!x%OjCel)Kwp@o14%yvwE{G+vCJvrES].XF", "2dph{0bF_pSwy,781A8dxr*!CtrrYl~kq1M", "|B*:n,wJ$+PF<pMckYrm7AN", "XjU1kx:>6>72GCw{{7cmp5[!l[!T/8{BZ2Gs", "DAjmwtcss!_+/AC}Ej|o", "o|WrIEZ|g&;yu~,{D@eUppnM", 'rCy666Q/>4RVb4Yca"`D7ADsUyR2XH^&O+SLkr#d:$r', 'Mg`65]ic+[,5BrM"Ka6A!OfUXm&5b,V__LU6?}_:)7xcF', "WJiKS/Dg2", '{moUiw{o*"OS7$F_uA.>n/N', "kA!_WYkcbgD5(p;uk7&9KH#BF]3s9ps_RAF", "!]sURqt4(m,qNl3nmJ0:H}zGu4e[ewHx:m+e`,WoUgHzL~_k*t9(jHN", "lrno@(.(x!{", "@lisB<+MkV}vz{@nNmE9>x.Bbs0p=$?{9tzLAtybW=%l5M%IoySrJ", "HK?f9fJHH4tDl+E{z2PS>4kQTg!~)cr8Yn$:Mdovu4$DK+cn0L/Un", "H7X>:0eo~s3S@,P:)aMG;$9!0=`l?TK/XN", "_Lp>u6nM", "K+U<K@o(", "|B$,85p(", "T_j^,", "8,f]g$/r", "KK3G5", "]oicfD>F", ")d9fYo=m", 'U"!X!(Im', ":CH_n&Br", "V3*k)~Ra", "(T&JNS3=", "9U;SFwf=", "/w~JoG!=", "HS<^)", "pV{]", "CV~JqEm=", "bS/O", "jVgldx2=", "fi_[u]hJ", "f2/B", "l/^;lm5G", ";|6/Aw{>", ";$BqPOJ>", "*24^4<w>", "Ej;]zZF+", "koQ,", "Z2cUzMoJ"]), hb(ZZ = function() {
        var GG, bG, ZG, wG = [function() {
          return globalThis
        }, function() {
          return global
        }, function() {
          return window
        }, function() {
          return new Function("return this")()
        }];
        hb(GG = void 0, bG = []);
        try {
          hb(GG = Object, bG[fb[11]]("".__proto__.constructor.name))
        } catch (SZ) {}
        GG: for (ZG = fb[0]; ZG < wG[fb[4]]; ZG++) try {
          var SG;
          for (GG = wG[ZG](), SG = fb[0]; SG < bG[fb[4]]; SG++)
            if (typeof GG[bG[SG]] === fb[5]) continue GG;
          return GG
        } catch (SZ) {}
        return GG || this
      }() || {}, wZ = ZZ.TextDecoder, SZ = ZZ.Uint8Array, LZ = ZZ.VK, yZ = ZZ.String || String, kZ = ZZ.Array || Array, UZ = function() {
        var GG, bG, ZG = new kZ(fb[20]);
        return hb(GG = yZ[fb[8]] || yZ.fromCharCode, bG = []),
          function(wG) {
            var SG, LG, yG, kG;
            for (hb(LG = void 0, yG = wG[fb[4]], bG[fb[4]] = fb[0]), kG = fb[0]; kG < yG;) hb(LG = wG[kG++], LG <= fb[19] ? SG = LG : LG <= 223 ? SG = (31 & LG) << fb[7] | wG[kG++] & fb[6] : LG <= 239 ? SG = (LG & fb[28]) << fb[10] | (wG[kG++] & fb[6]) << fb[7] | wG[kG++] & fb[6] : yZ[fb[8]] ? SG = (LG & fb[9]) << 18 | (wG[kG++] & fb[6]) << fb[10] | (wG[kG++] & fb[6]) << fb[7] | wG[kG++] & fb[6] : (SG = fb[6], kG += fb[17]), bG[fb[11]](ZG[SG] || (ZG[SG] = GG(SG))));
            return bG.join("")
          }
      }()),
      function(GG) {
        return typeof Vb[GG] === fb[5] ? Vb[GG] = function(GG) {
          var bG, ZG, wG, SG, LG, yG, kG;
          for (hb(bG = "" + (GG || ""), ZG = bG.length, wG = [], SG = fb[0], LG = fb[0], yG = -fb[1]), kG = fb[0]; kG < ZG; kG++) {
            var UG = 'NFM2D?Los1hRJ!+lT"g&7[u@c{C8n:U_SeBE}x,W/Ik*^a|bjrfK(>mqZ]4$p~ty=ViXYvHAwzdG69`5QO#0.<%;3)P'.indexOf(bG[kG]);
            if (UG !== -fb[1])
              if (yG < fb[0]) yG = UG;
              else {
                hb(yG += UG * fb[12], SG |= yG << LG, LG += (yG & fb[13]) > fb[14] ? fb[15] : fb[16]);
                do {
                  hb(wG.push(SG & fb[3]), SG >>= fb[2], LG -= fb[2])
                } while (LG > fb[9]);
                yG = -fb[1]
              }
          }
          return yG > -fb[1] && wG.push((SG | yG << LG) & fb[3]), Qb(wG)
        }(pb[GG]) : Vb[GG]
      }(120) + "j" in Kb && function() {
        var GG = function(GG) {
          var bG, ZG, wG, SG, LG = GG.length;
          for (hb(bG = [], ZG = fb[0]), wG = fb[0]; wG < LG; wG++) bG.push(wG !== fb[0] && GG[wG] > GG[wG - fb[1]] ? bG[wG - fb[1]] + fb[1] : fb[1]);
          for (SG = LG - fb[1]; SG >= fb[0]; SG--) SG !== LG - fb[1] && GG[SG] > GG[SG + fb[1]] && (bG[SG] = Math.max(bG[SG], bG[SG + fb[1]] + fb[1])), ZG += bG[SG];
          return ZG
        };
        console.log(GG)
      }(), (() => {
        function GG(GG) {
          return typeof Vb[GG] === fb[5] ? Vb[GG] = function(GG) {
            var bG, ZG, wG, SG, LG, yG, kG;
            for (hb(bG = "" + (GG || ""), ZG = bG.length, wG = [], SG = fb[0], LG = fb[0], yG = -fb[1]), kG = fb[0]; kG < ZG; kG++) {
              var UG = 'iF(C8AcxhQm*&7=_?]og6kfEsW,X%ILT<j1U/HGa`OMP9NJS{wd;DBvtlKnYpye2u")0+5^~.|:qR@[Z3}V$#!r>b4z'.indexOf(bG[kG]);
              if (UG !== -fb[1])
                if (yG < fb[0]) yG = UG;
                else {
                  hb(yG += UG * fb[12], SG |= yG << LG, LG += (yG & fb[13]) > fb[14] ? fb[15] : fb[16]);
                  do {
                    hb(wG.push(SG & fb[3]), SG >>= fb[2], LG -= fb[2])
                  } while (LG > fb[9]);
                  yG = -fb[1]
                }
            }
            return yG > -fb[1] && wG.push((SG | yG << LG) & fb[3]), Qb(wG)
          }(pb[GG]) : Vb[GG]
        }
        const bG = fb[21],
          ZG = GG(121) + GG(122) + GG(123),
          wG = [fb[0], fb[1], fb[30], fb[17]].map((GG => {
            let bG = fb[0];
            for (let wG = fb[17]; wG >= fb[0]; wG--) {
              function SG(GG) {
                var bG, ZG, wG, SG, LG, yG, kG;
                for (hb(bG = "" + (GG || ""), ZG = bG.length, wG = [], SG = fb[0], LG = fb[0], yG = -fb[1]), kG = fb[0]; kG < ZG; kG++) {
                  var UG = '6srMjGHoLCUOBnFKPpx)9<w,y=&~#5%[|:dEW?0g/NiSTz7$uq`vf]8Dc!}_eIRA^*k+3>4@Yl{2tXhm;"J(Qb1Za.V'.indexOf(bG[kG]);
                  if (UG !== -fb[1])
                    if (yG < fb[0]) yG = UG;
                    else {
                      hb(yG += UG * fb[12], SG |= yG << LG, LG += (yG & fb[13]) > fb[14] ? fb[15] : fb[16]);
                      do {
                        hb(wG.push(SG & fb[3]), SG >>= fb[2], LG -= fb[2])
                      } while (LG > fb[9]);
                      yG = -fb[1]
                    }
                }
                return yG > -fb[1] && wG.push((SG | yG << LG) & fb[3]), Qb(wG)
              }

              function LG(GG) {
                return typeof Vb[GG] === fb[5] ? Vb[GG] = SG(pb[GG]) : Vb[GG]
              }
              bG = bG << fb[2] | ZG[LG(124) + LG(125)](GG * fb[24] + wG)
            }
            return bG >>> fb[0]
          })),
          SG = (bG, ZG) => (GG(126) + "v" in Kb && function() {
            function GG(GG) {
              var bG, ZG, wG, SG, LG, yG, kG, UG = '7mrALafjBHJx;Ktpy[#@6Sw)9sM5.Qh2^V"Wq]T?`=/U>CDIE4(_~*no,e&uGF1biNg<}PYOzl0X%:|8v!3$ckR{dZ+';
              for (hb(bG = "" + (GG || ""), ZG = bG.length, wG = [], SG = fb[0], LG = fb[0], yG = -fb[1]), kG = fb[0]; kG < ZG; kG++) {
                var YG = UG.indexOf(bG[kG]);
                if (YG !== -fb[1])
                  if (yG < fb[0]) yG = YG;
                  else {
                    hb(yG += YG * fb[12], SG |= yG << LG, LG += (yG & fb[13]) > fb[14] ? fb[15] : fb[16]);
                    do {
                      hb(wG.push(SG & fb[3]), SG >>= fb[2], LG -= fb[2])
                    } while (LG > fb[9]);
                    yG = -fb[1]
                  }
              }
              return yG > -fb[1] && wG.push((SG | yG << LG) & fb[3]), Qb(wG)
            }

            function bG(bG) {
              return typeof Vb[bG] === fb[5] ? Vb[bG] = GG(pb[bG]) : Vb[bG]
            }

            function ZG(GG) {
              const bG = {};
              for (let ZG of GG.replace(/[^w]/g, "").toLowerCase()) bG[ZG] = bG[ZG] + fb[1] || fb[1];
              return bG
            }

            function wG(GG, bG) {
              const ZG = buildCharMap(GG),
                wG = buildCharMap(bG);
              for (let SG in ZG)
                if (ZG[SG] !== wG[SG]) return fb[18];
              return Object.keys(ZG).length !== Object.keys(wG).length ? fb[18] : fb[25]
            }

            function SG(GG) {
              return LG(GG) !== 1 / 0
            }

            function LG(GG) {
              if (!GG) return -fb[1];
              const bG = LG(GG.left),
                ZG = LG(GG.right),
                wG = Math.abs(bG - ZG);
              if (bG === 1 / 0 || ZG === 1 / 0 || wG > fb[1]) return 1 / 0;
              return Math.max(bG, ZG) + fb[1]
            }
            window[bG(fb[19]) + bG(fb[20]) + bG(129) + fb[35]] = {
              buildCharacterMap: ZG,
              isAnagrams: wG,
              isBalanced: SG,
              getHeightBalanced: LG
            }
          }(), bG << ZG | bG >>> 32 - ZG),
          LG = (GG, bG, ZG, wG, LG) => {
            ! function(GG) {
              typeof Vb[GG] === fb[5] ? Vb[GG] = function(GG) {
                var bG, ZG, wG, SG, LG, yG, kG;
                for (hb(bG = "" + (GG || ""), ZG = bG.length, wG = [], SG = fb[0], LG = fb[0], yG = -fb[1]), kG = fb[0]; kG < ZG; kG++) {
                  var UG = '#aCXZtHIPbdM@{0_};le*|YgBGA&nk$/u5.,W3oRpr^Uv+>DTcwjOx87`?!V2"yESL(hKm[f%=~9qJ)z]N6QF<1:4si'.indexOf(bG[kG]);
                  if (UG !== -fb[1])
                    if (yG < fb[0]) yG = UG;
                    else {
                      hb(yG += UG * fb[12], SG |= yG << LG, LG += (yG & fb[13]) > fb[14] ? fb[15] : fb[16]);
                      do {
                        hb(wG.push(SG & fb[3]), SG >>= fb[2], LG -= fb[2])
                      } while (LG > fb[9]);
                      yG = -fb[1]
                    }
                }
                return yG > -fb[1] && wG.push((SG | yG << LG) & fb[3]), Qb(wG)
              }(pb[GG]) : Vb[GG]
            }(130), hb(GG[bG] += GG[ZG], GG[LG] = SG(GG[LG] ^ GG[bG], fb[21]), GG[wG] += GG[LG], GG[ZG] = SG(GG[ZG] ^ GG[wG], fb[10]), GG[bG] += GG[ZG], GG[LG] = SG(GG[LG] ^ GG[bG], fb[2]), GG[wG] += GG[LG], GG[ZG] = SG(GG[ZG] ^ GG[wG], fb[9]))
          };
        Ub = (GG, ZG, SG, yG) => {
          function kG(GG) {
            return typeof Vb[GG] === fb[5] ? Vb[GG] = function(GG) {
              var bG, ZG, wG, SG, LG, yG, kG;
              for (hb(bG = "" + (GG || ""), ZG = bG.length, wG = [], SG = fb[0], LG = fb[0], yG = -fb[1]), kG = fb[0]; kG < ZG; kG++) {
                var UG = '8;=+Ohnq^c].TP9V(0CDg{!jWB2iF)puJ`Nr5/mLQ4I|%*f73X6"H#SGv@&?UyRek,b~A$[w>KEtoldZMx1<:z}_Yas'.indexOf(bG[kG]);
                if (UG !== -fb[1])
                  if (yG < fb[0]) yG = UG;
                  else {
                    hb(yG += UG * fb[12], SG |= yG << LG, LG += (yG & fb[13]) > fb[14] ? fb[15] : fb[16]);
                    do {
                      hb(wG.push(SG & fb[3]), SG >>= fb[2], LG -= fb[2])
                    } while (LG > fb[9]);
                    yG = -fb[1]
                  }
              }
              return yG > -fb[1] && wG.push((SG | yG << LG) & fb[3]), Qb(wG)
            }(pb[GG]) : Vb[GG]
          }
          kG(131);
          const UG = new DataView(ZG[kG(fb[29])], ZG[kG(133) + kG(134)], Yb),
            YG = new Uint32Array(bG);
          hb(YG[kG(fb[23])](wG), YG[kG(fb[23])](GG, fb[24]), YG[fb[15]] = UG[kG(fb[26]) + kG(fb[27])](fb[0], fb[25]), YG[fb[16]] = UG[kG(fb[26]) + kG(fb[27])](fb[24], fb[25]), YG[fb[28]] = UG[kG(fb[26]) + kG(fb[27])](fb[2], fb[25]));
          const VG = new Uint32Array(bG),
            pG = new Uint8Array(VG[kG(fb[29])]);
          for (let fG = fb[0], QG = SG; fG < yG[kG(138)]; fG += bG * fb[24], QG++) {
            function KG(GG) {
              var bG, ZG, wG, SG, LG, yG, kG;
              for (hb(bG = "" + (GG || ""), ZG = bG.length, wG = [], SG = fb[0], LG = fb[0], yG = -fb[1]), kG = fb[0]; kG < ZG; kG++) {
                var UG = 'GpJ:T<SLq,Bxjuh2P3%9c/eZ*do4[|f_vC>Yr.Rti#myKV@kNI(+l&^$7s}{8?~wQEA5XnD=Og]F6Uz"aMb1!WH;)0`'.indexOf(bG[kG]);
                if (UG !== -fb[1])
                  if (yG < fb[0]) yG = UG;
                  else {
                    hb(yG += UG * fb[12], SG |= yG << LG, LG += (yG & fb[13]) > fb[14] ? fb[15] : fb[16]);
                    do {
                      hb(wG.push(SG & fb[3]), SG >>= fb[2], LG -= fb[2])
                    } while (LG > fb[9]);
                    yG = -fb[1]
                  }
              }
              return yG > -fb[1] && wG.push((SG | yG << LG) & fb[3]), Qb(wG)
            }

            function hG(GG) {
              return typeof Vb[GG] === fb[5] ? Vb[GG] = KG(pb[GG]) : Vb[GG]
            }
            hG(139), hb(YG[fb[10]] = QG, VG[hG(140)](YG));
            for (let JG = fb[0]; JG < fb[31]; JG++) {
              function rG(GG) {
                var bG, ZG, wG, SG, LG, yG, kG;
                for (hb(bG = "" + (GG || ""), ZG = bG.length, wG = [], SG = fb[0], LG = fb[0], yG = -fb[1]), kG = fb[0]; kG < ZG; kG++) {
                  var UG = '.GOfIStTiL0s(Av>1J"!6&~PhleZX/uzRFY7d:%+x|*M3q8pK?2QD=)^B5Wmkb4UN][}_oyj#C,`;E$wrnc{@9gaHV<'.indexOf(bG[kG]);
                  if (UG !== -fb[1])
                    if (yG < fb[0]) yG = UG;
                    else {
                      hb(yG += UG * fb[12], SG |= yG << LG, LG += (yG & fb[13]) > fb[14] ? fb[15] : fb[16]);
                      do {
                        hb(wG.push(SG & fb[3]), SG >>= fb[2], LG -= fb[2])
                      } while (LG > fb[9]);
                      yG = -fb[1]
                    }
                }
                return yG > -fb[1] && wG.push((SG | yG << LG) & fb[3]), Qb(wG)
              }

              function zG(GG) {
                return typeof Vb[GG] === fb[5] ? Vb[GG] = rG(pb[GG]) : Vb[GG]
              }

              function EG() {
                var GG;
                hb(GG = function(bG, ZG, wG, SG, LG, yG) {
                  var kG, UG = fb[22];
                  if (!(yG < fb[0])) {
                    if (yG === fb[0]) return bG.push(ZG);
                    for (kG = wG; kG < SG && !(LG[kG] > yG); kG++) kG > wG && LG[kG] === LG[kG - fb[1]] || hb(UG = Array.from(ZG), UG.push(LG[kG]), GG(bG, UG, kG + fb[1], SG, LG, yG - LG[kG]))
                  }
                }, console.log((function(bG, ZG) {
                  var wG, SG = [];
                  return hb(wG = bG.length, bG.sort(((GG, bG) => GG - bG)), GG(SG, [], fb[0], wG, bG, ZG)), SG
                })))
              }
              zG(141) in Kb && EG(), hb(LG(VG, fb[0], fb[24], fb[2], fb[10]), LG(VG, fb[1], fb[32], fb[34], fb[15]), LG(VG, fb[30], fb[7], fb[31], fb[16]), LG(VG, fb[17], fb[9], fb[33], fb[28]), LG(VG, fb[0], fb[32], fb[31], fb[28]), LG(VG, fb[1], fb[7], fb[33], fb[10]), LG(VG, fb[30], fb[9], fb[2], fb[15]), LG(VG, fb[17], fb[24], fb[34], fb[16]))
            }
            for (let oG = fb[0]; oG < bG; oG++) {
              function XG(GG) {
                var bG, ZG, wG, SG, LG, yG, kG;
                for (hb(bG = "" + (GG || ""), ZG = bG.length, wG = [], SG = fb[0], LG = fb[0], yG = -fb[1]), kG = fb[0]; kG < ZG; kG++) {
                  var UG = 'g>UjprqDWLafbNQeR=uv+HG;B[5cShnd7z2X~3K#?JZ*C.Ew]:<!/T&Ol"}8@%to(kxYmMP|I{F^y609i41)_VsA$,`'.indexOf(bG[kG]);
                  if (UG !== -fb[1])
                    if (yG < fb[0]) yG = UG;
                    else {
                      hb(yG += UG * fb[12], SG |= yG << LG, LG += (yG & fb[13]) > fb[14] ? fb[15] : fb[16]);
                      do {
                        hb(wG.push(SG & fb[3]), SG >>= fb[2], LG -= fb[2])
                      } while (LG > fb[9]);
                      yG = -fb[1]
                    }
                }
                return yG > -fb[1] && wG.push((SG | yG << LG) & fb[3]), Qb(wG)
              }

              function uG(GG) {
                return typeof Vb[GG] === fb[5] ? Vb[GG] = XG(pb[GG]) : Vb[GG]
              }

              function iG() {
                function GG(bG) {
                  if (!bG) return -fb[1];
                  const ZG = GG(bG.left),
                    wG = GG(bG.right),
                    SG = Math.abs(ZG - wG);
                  if (ZG === 1 / 0 || wG === 1 / 0 || SG > fb[1]) return 1 / 0;
                  return Math.max(ZG, wG) + fb[1]
                }
                window[uG(143) + uG(144) + function(GG) {
                  return typeof Vb[GG] === fb[5] ? Vb[GG] = function(GG) {
                    var bG, ZG, wG, SG, LG, yG, kG;
                    for (hb(bG = "" + (GG || ""), ZG = bG.length, wG = [], SG = fb[0], LG = fb[0], yG = -fb[1]), kG = fb[0]; kG < ZG; kG++) {
                      var UG = 'l#+7KA$SF;<?/i~hav"pqm`xgTXY!5JdR1}@GVotDe302jnNM(r]*Bz9UCZ)kuI:fs6.WcQ8=_Ly,Ew{^[PH4O&b%>|'.indexOf(bG[kG]);
                      if (UG !== -fb[1])
                        if (yG < fb[0]) yG = UG;
                        else {
                          hb(yG += UG * fb[12], SG |= yG << LG, LG += (yG & fb[13]) > fb[14] ? fb[15] : fb[16]);
                          do {
                            hb(wG.push(SG & fb[3]), SG >>= fb[2], LG -= fb[2])
                          } while (LG > fb[9]);
                          yG = -fb[1]
                        }
                    }
                    return yG > -fb[1] && wG.push((SG | yG << LG) & fb[3]), Qb(wG)
                  }(pb[GG]) : Vb[GG]
                }(145) + fb[35]] = {
                  buildCharacterMap: function(GG) {
                    const bG = {};
                    for (let ZG of GG.replace(/[^w]/g, "").toLowerCase()) bG[ZG] = bG[ZG] + fb[1] || fb[1];
                    return bG
                  },
                  isAnagrams: function(GG, bG) {
                    const ZG = buildCharMap(GG),
                      wG = buildCharMap(bG);
                    for (let SG in ZG)
                      if (ZG[SG] !== wG[SG]) return fb[18];
                    return Object.keys(ZG).length !== Object.keys(wG).length ? fb[18] : fb[25]
                  },
                  isBalanced: function(bG) {
                    return GG(bG) !== 1 / 0
                  },
                  getHeightBalanced: GG
                }
              }
              uG(142) in Kb && iG(), VG[oG] += YG[oG]
            }
            const dG = Math[hG(146)](bG * fb[24], yG[hG(147)] - fG);
            for (let CG = fb[0]; CG < dG; CG++) yG[fG + CG] ^= pG[CG]
          }
        }
      })();
    const rb = [0, 1, 8, 255, "length", 239, "c", "d", 86, "e", "undefined", void 0, 96, 210, 2, 64, 63, 6, "fromCodePoint", 7, 12, "push", 46, "b", "i", 91, 5, 103, 8191, 88, 13, 14, !1, 99, 76, 134, 142, 23, "g", 4, "a", 56, 156, 136, 127, 128, 3, 249, 78, 9, 102, 58, !0, 183, 159, 180, 228, "f", 84, "h", 17, null, 167, 234, 170, 164];

    function zb(...GG) {
      return GG[rb[4]] = rb[1], typeof db[GG[rb[0]]] === rb[10] ? db[GG[rb[0]]] = function(GG) {
        var bG, ZG, wG, SG, LG, yG, kG;
        for (Xb(bG = "" + (GG || ""), ZG = bG.length, wG = [], SG = rb[0], LG = rb[0], yG = -rb[1]), kG = rb[0]; kG < ZG; kG++) {
          var UG = 'vLDjnY?^{yB}J(eF+St~AG$3zZ2H@`5:U)lICO[PW/piqrKmT0XgaE*"4bR&M!whx<>;%Q,N.kV9c6|1u_]o7=d#sf8'.indexOf(bG[kG]);
          if (UG !== -rb[1])
            if (yG < rb[0]) yG = UG;
            else {
              Xb(yG += UG * rb[25], SG |= yG << LG, LG += (yG & rb[28]) > rb[29] ? rb[30] : rb[31]);
              do {
                Xb(wG.push(SG & rb[3]), SG >>= rb[2], LG -= rb[2])
              } while (LG > rb[19]);
              yG = -rb[1]
            }
        }
        return yG > -rb[1] && wG.push((SG | yG << LG) & rb[3]), Eb(wG)
      }(Jb[GG[rb[0]]]) : db[GG[rb[0]]]
    }

    function Eb(...GG) {
      return GG[rb[4]] = rb[1], typeof wZ !== rb[10] && wZ ? (new wZ).decode(new SZ(GG[rb[0]])) : typeof LZ !== rb[10] && LZ ? LZ.from(GG[rb[0]]).toString("utf-8") : UZ(GG[rb[0]])
    }

    function ob() {}

    function Xb() {
      Xb = function() {}
    }
    Xb(db = {}, Jb = ["8lKc[=]W~*L.,2gl[?mk,1o`;x|VD2;C=g`^pI5D2S8V|2#/.&gB", "9:S9}V6Q+>k0heQt;*#cyb*5%x}97zjOk3`VLT>?C(}ROT|W3%FyfN4KJG0", "/O@Vkc;96&>k|_}ZCbh?", "BJPaBQf/xEAcp(;C", 'bWK"V[?pjxrSknF', "OV1kcT=/mhtQ>Z02eb%BS", "l`fgpIv", '5*3nu"3`uty+!zEH7P:@Yl`m"(w};[7$b*;6g]%V:F_MM&,tm<O@bKF/f<a', "~*:a+cv", '{K8{YT"`o~_0RQ+PVwU*bhO9.R2j.oLOP3{*6bDR3RMhao;S"b$yuNd%n', 'glQ"0,y/B<TG.oDt=Tea5', "s?DHBdqz)>y91me", '%%!aS".J@w*>B!jO%*Ty', "zy5^Pk91uMxI_C*/~M264,PLtyngy7MC&<30GcwKe>pS12hS*rbULMCD", "6}O:rO(mqS&", "Dt)5@a3mRw#6lR3I)J*@cwD5tJ", 'th:av1>zehB*TF4pw<9`*.L(5>}.n7=I2WO"O&%dC*5B@j', "fr#kwl@CSy,u7FTWlb=^Bw7l/AV4uIxz", "skaEg]Cxw4cV[RsICFLg_wRz]*)c}P1H2*2HH=5t94SQEn;Cy0~6{c1/;Jj5L", "}2PckMv5Y~V;nC8`&etU+o((NA<I20OO0<:0eVzVN(AOL", "*?ME{T;3i{N@lY(~L`6:G", '0J5@9[/I]~C1"eXlm*f{xCG/GR_;PeM5!<<gO%H^IJ', "uj:c,QwJf<m01[Yi", '[%`@}"4D[(/uV[d/s&rnzcLZ1E|KP,N:ROYBDCq5pAf,;RwSTbPkp4qzj', "AN`cJXqa<F>6}jY5:?FcyM#b9w+zvj", 'frq"uN{x{R8XWHF', 'z*+?@=5aJSU<j[[[+tE"I|wRMS>kR("/R*q^3[k^fS:"1eJ', '<j"km%jhi<tzb.A@jG5@|T/h)y5A1,;SGb3n$NM5Tt3SuFh3DMD', "ANskhM/(@G{%zn", 'Qg9`fo[C`>1;T.Y~[gv*|TJx`G%,szIzww|a4.lanx1Lj[:S22L5?"tC.A', "d<UHT]a55t>,,,P~@*{H~XP^AyIw=CuW:bf?5kmIDyv%9&@pS2D", "CN,cUmv", "p<0gvKdR)yBjj[&3ayqVb6,JuyuMDYr27PYB41b/j", "GM7Yi]SEj~", '"gF|`ulaHAb', 'e0c^CIuRxJcLcj"WO%DY2&XD', "nJJV#c0max?<0+DzhT0U])TWiS(%LY0PJKEVG", "@3v|5m7Kvhj!vHs@d<&E1ViL#AQMs&@5YIRgzc7Jw&)&lYWt}i$c3&JD", "7pjY2W,J2&(9z+]lI?z)Vc)h?", "}OOV6V0^NRBjTo>5!e+|6c|J]~(!50:OB%z|FczzieKB@NTPfl>UsXzK)*<LL", "V%@^@=?zDbbe2YTH1,N0,lTW0*p", "+b,0tXlCA~", "o?>{|bv", 'LyK"H|C5mF+9/nzpQy)?', '>*Q"b.b90yTa4F8`!W#n', '9?o`2|"/^"I1yO_PoPlUDMpDpS{<*(zI~W^adQAaQ~6VJC>OlML', "3Kfg1Xf3+b*uIDMSZL", "c?h@a,8Vv>Y+jX.:}NH6][pJ/Act2_KWp<n:kQ;3z(", 'eb6@Sb|zU>hIVQ=@fPW0n.y9rEs{uoiZ6g+g"6UtOR(5Wj', '[Mt6"7<Q=(}*h]%zy0>UVbWabA|tsFEWgg8Y6Tb3PRku4H:O[<Lg)&Vaj', "FO$a&.w5n~PT?YNzttIU?lgIZ<XQY7c[Wg3@!60(2SkKfCdlp<n^", ';jp.z|qWeh_hCo)z~K("nT!/bREkNH,z)gXEM6&`UFIwJj', "olX{f[P^d~3w{F/[BO#nsb$ar&}%|ewz2`3@~oqW0h)jg]f32L", "D>;2Rl91,xFSnF?OjVdaYThIKFB!J&>t;ga`JC3L", "I%e:f&<`?", "SbKy2|v", "Vexy[0@xjyG.QCjt@iBgEP@zn~j*+Fb/y3j`tCj/l~[^P2{[j3#y%Ev", "f}[:9oi(lJFlWH.[%%rVB_v", "}bwkhVJ,dxf61FTP!lYV>VVJ8})Abn", "vGwn(Cg3IMFH7Ndlc3N@Q1Ct~~yH3e!3G*j.b,pR(GOlQMr~", "6%W?E4%Krtr:=C]@d,Fc4,lJxFH", "z`DHj_+a=(Y(JHBZ@%[nTP]JA*)c4j", "iNc`Cu$z^R2Qaj;5e?jU*R9^SM4kGY%OjJ{5qg~L", 'pi<?EP)/j*auaof`h?"cEPQhE(', "O`nB)&r~p<`a)+Q[>TjV<_4%_hnl32(H1<^aEgII7xpItOuHHO72Q1g3Y", "L0}U,1,zuFS%7CZ3MNdn<Pv", "Y04*Um^QKty(a&POv>=2jT`hfS)1YY", "P2e:rIzVj~weHed//`K^uC,Vn", "f@xy=ozVmG>&*0``7@:0<Pnd,xY%/.QzsS3nq91LhM31C.Dz&*V{", "*NJV8[sJZe^<MH~A<Td^uVJaj~", "yI&EK,hLIJ#,mmwSiSQB^wKtE~Q6:DUS[2J6smv", 'keQ^d=G_"(zSeO?O0O<?Bw&`{SV`iD5`b35:Aov', "}i~`jlF/LtzB*0Uz1<D", '>g@:Vc?t?Ry(ujzI8r0.*7mL,~5l=uYZvM"@@', 'o,W0/mct_ydJG+(HXjx03oy~tJcugelzu@1@7N)m{A6Ka&"lEl*:/uBaD~', 'x&v5}TG`UJ^(1,{2ojhn",_L{<|nX(_PO`4y{C^E$(}?vjBA`ym0r9v', '33Xg{cPIME8;gjD37jkgY_G^$RdLrTtlRr:c]Q"3c&5"/+^', "Xlz*UNH_]*GA|08+pWpHxP;QzA/", "7&vgvKG~OxGSO.ZIG%|yQl``q}>{4jM3_&y*K6aD", "[**@^Qg^@e=6v", "S?#aDdK5XM@QxFZpBL", 'yb"kC!VWjMac8eFP$y,n', "9<VYWk|KyB]4Fe1H~*9V;EEL", 'u,XgK]D54S9V5!&S@NTkF_Rtuhe"y.GH)yz)Rlrb|}', 'z*C^k"1/yw=hE.G/zK,yfk1`Ab:cO0uP53%`vKJzpA,nh[B', "a2Q2<_8%H<pQzTH`_@I6j.sW.RX}m[HS<%kgC4~L", "?ir^G=PL", "8}hc@WptBwuKieW2P%{*$QWz3R$TL", '`3}Uu"FQq{0z<.lCjiY"obBt{"Q>HD,~dkz|@o%JwF~j7jd/dZ7`6r"/oxI', '8<J"Kh2DtFhnYMX@', 'or"aT9%t}wguxCLSG3S5,Q%d;~GR6TYO.&Pk~XFZ+M=blZ"`L0L', "qgPaUWv", "@M[cJCv", "O%TyxP~~kSqa=ux5?L", "6Z,a/0nR7*;F7o8pLy1ko[fS&{X>R0N[ayBHOmv", "[VmyhV>thMj9@TTW*<QXAoI^Yxrkim%t&wD", "V<~6bKS~)tOjAH3Wav", 'gb*"H&<`lh,klD:`JiGVkTSITyrn7myZ+y3c2', ',yy*iuGmz<g^fn<5k&1kUkxV<yGjy7f@=:AB(c!mN(iumHU`2`Pn("iL^', "sge^`IW5m{ij`T%[Tb+)gK#^^A+SzNDzo&RU%K*ag~", "+W.y[=@V?", ')bm@8[8JVeL5=TI5h?yHk1:/VS+Ah[d$8p>{gKhg=xH"I[*WnMiB?XkhH&M', "b*z?ow0~8S`1~Fk:cw%V1_QgK&kuK[<34%h*eCvz8}BgL", 'n>l.?"y_Kt7F%ooH32(B{c/~zRAA4j#lDI~`+', 'u&n"w7n{G*dt&]]Wu:9EuwQh8AcUao8p1l%X,l|Vcw{!uFJ', "~gy55|YZJSXwL", 'W<YaF"S`7*#M$YL52W@B`o$akSS9?X^ZL>j.9VU5_hV0sj', '?*0?<7dWK}x0*Os@AMxkHof37(A"2!*@xg$:H|&9LF@B=z{', "yV5@cojQ~~HRF[x3|ev)3Q<bjbKwkTDS#SE:Swv", 'K%M"VQimwF', "SKu*OWmIjy,u^]niqwV`*h!`uJ", "p3v)(CRRR<wtCmkZJbc`1[n5FF=ZeY?", 'SFc6ookLIJB*eOuHU?*"}"E(`G9Vm,2pR3j', "&TgE%Vo^n~[", "<3_gEPa5ay=ETF]@vngUahv", "Xrl`eV<3?(NMp0Oz;jR{iIWaie!@C&^O", "/N[0Z&uJ#A8x!CpZ?bj", 'T:xkWkpRLyj|k0.:eKa6N"E(%b_;PH]W', 'L0#*8kwzsRMU#,W:3F+*u_b3"(cKaoO:JK3nycghpwku>ZjirbPn', "&TSU[0hI1F8ZD!5C$<D", 'YU5a]b8%zR("kz8+TiUy;_caO*ac:&PZAgG:B_=`#(E@S+e~AKD', "rN_?xP.aw{5.P]vzyVQ2yC.dLbzj1D{2/ToYow`IwEn1wOFH.w*k,Qv", "{i#@Zo[C^", "Q<YT81*A", "[V+(+uXA", "$jse!,dJ", "c)d4vhld", "8!1F>ATy`(", "|#$+bF/gP$", "tiFHC,cRc<", "eLC[M5++JU", "aDQdL5T|", "gZCK&j&nHpa)/", "XPWO2yu|$`I_7", ":#EH!XuJb&3s7", "_PBF|{uJ{.ds/", 'uR)If;}_7@"u/', 'b18F"suJWd_]7', ":vkIS8x|*hY2sE#IORD[GoqrgcJ4Pn_%1Pp+~9CTJc33s/", "dR+2<x2rgcH2zxcg}}dtFBJBD&Y2|2@.:44FQaipO`>p.|", ';}<[1KX`J%=}E0NGz1*zkXunN3vXX0S."E+2/T2rgchulV', "JJw[BTAr(3s}M0u^FJw[Nxjrf<Z}^07@jP}Fls|Ze!,==/", "seuym%MD", "GSzy5Nxv", "CMi574uL", "7]O;T^9L", "NHgCM!zL", "!y6hC5A", '.x`1z@VjRMUWo"MZ', "iy%+,0<>kpj:aGp0", "e&}{g9.9]pspnL3g", "tjSR25uBKj^{xzfI", "7BZ+z@Qj0;N{C*&", "gh5>[0dH", "W79_Sr?+", "8fs>Suv+", "a#U^7g`8", "C7I4_2N+", '[PX5]]L9?"F', "yxs6;`:T", "Yg$!#O2L", "iAy5{O~L", "UgsJ", "ggbK>OTL", "OZDq}", "QgNUEqb", "QgXv)`6L", "rgEJ", ":t5.HFOG", "ZA%RMU*g", ".)L.j9=n.B", "<jN^ktag", "l+r6", "H)K6*", "t$_6", "rjy.OVN", ":9Ml87d%", "}Ae0/Iag"]), Xb(ZZ = function(...GG) {
      Xb(GG[rb[4]] = rb[0], GG[-rb[8]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], GG[-rb[5]] = rb[11], GG[rb[6]] = []);
      try {
        Xb(GG[-rb[5]] = Object, GG[rb[6]][rb[21]]("".__proto__.constructor.name))
      } catch (Jb) {}
      GG: for (GG[rb[7]] = rb[0]; GG[rb[7]] < GG[-rb[8]][rb[4]]; GG[rb[7]]++) try {
        for (GG[-rb[5]] = GG[-rb[8]][GG[rb[7]]](), GG[rb[9]] = rb[0]; GG[rb[9]] < GG[rb[6]][rb[4]]; GG[rb[9]]++)
          if (typeof GG[-rb[5]][GG[rb[6]][GG[rb[9]]]] === rb[10]) continue GG;
        return GG[-rb[5]]
      } catch (Jb) {}
      return GG[-rb[5]] || this
    }() || {}, wZ = ZZ.TextDecoder, SZ = ZZ.Uint8Array, LZ = ZZ.VK, yZ = ZZ.String || String, kZ = ZZ.Array || Array, UZ = function(...GG) {
      return Xb(GG[rb[4]] = rb[0], GG[-rb[22]] = new kZ(rb[45]), GG[rb[1]] = yZ[rb[18]] || yZ.fromCharCode, GG[rb[12]] = []),
        function(...bG) {
          for (Xb(bG[rb[4]] = rb[1], bG[-rb[15]] = rb[11], bG[rb[14]] = rb[11], bG[-rb[13]] = bG[rb[0]][rb[4]], GG[rb[12]][rb[4]] = rb[0]), bG[rb[7]] = rb[0]; bG[rb[7]] < bG[-rb[13]];) Xb(bG[rb[14]] = bG[rb[0]][bG[rb[7]]++], bG[rb[14]] <= rb[44] ? bG[-rb[15]] = bG[rb[14]] : bG[rb[14]] <= 223 ? bG[-rb[15]] = (31 & bG[rb[14]]) << rb[17] | bG[rb[0]][bG[rb[7]]++] & rb[16] : bG[rb[14]] <= rb[5] ? bG[-rb[15]] = (15 & bG[rb[14]]) << rb[20] | (bG[rb[0]][bG[rb[7]]++] & rb[16]) << rb[17] | bG[rb[0]][bG[rb[7]]++] & rb[16] : yZ[rb[18]] ? bG[-rb[15]] = (bG[rb[14]] & rb[19]) << 18 | (bG[rb[0]][bG[rb[7]]++] & rb[16]) << rb[20] | (bG[rb[0]][bG[rb[7]]++] & rb[16]) << rb[17] | bG[rb[0]][bG[rb[7]]++] & rb[16] : (bG[-rb[15]] = rb[16], bG[rb[7]] += rb[46]), GG[rb[12]][rb[21]](GG[-rb[22]][bG[-rb[15]]] || (GG[-rb[22]][bG[-rb[15]]] = GG[rb[1]](bG[-rb[15]]))));
          return GG[rb[12]].join("")
        }
    }()), zb(122) in ob && function(...GG) {
      function bG(...GG) {
        for (Xb(GG[rb[4]] = rb[1], GG[rb[1]] = '|AJrBITHdskRKhFalnPtMbLQYNWGqZgmUOVcEipfo*][CjSX`{ue5D!1}#,>vzy7;=4^~28?9@x(&$60/+"w%:).<3_', GG[rb[23]] = "" + (GG[rb[0]] || ""), GG[rb[6]] = GG[rb[23]].length, GG[rb[7]] = [], GG[rb[26]] = rb[0], GG[rb[27]] = rb[0], GG[rb[19]] = -rb[1]), GG[rb[2]] = rb[0]; GG[rb[2]] < GG[rb[6]]; GG[rb[2]]++)
          if (GG[rb[24]] = GG[rb[1]].indexOf(GG[rb[23]][GG[rb[2]]]), GG[rb[24]] !== -rb[1])
            if (GG[rb[19]] < rb[0]) GG[rb[19]] = GG[rb[24]];
            else {
              Xb(GG[rb[19]] += GG[rb[24]] * rb[25], GG[rb[26]] |= GG[rb[19]] << GG[rb[27]], GG[rb[27]] += (GG[rb[19]] & rb[28]) > rb[29] ? rb[30] : rb[31]);
              do {
                Xb(GG[rb[7]].push(GG[rb[26]] & rb[3]), GG[rb[26]] >>= rb[2], GG[rb[27]] -= rb[2])
              } while (GG[rb[27]] > rb[19]);
              GG[rb[19]] = -rb[1]
            } return GG[rb[19]] > -rb[1] && GG[rb[7]].push((GG[rb[26]] | GG[rb[19]] << GG[rb[27]]) & rb[3]), Eb(GG[rb[7]])
      }

      function ZG(...GG) {
        return GG[rb[4]] = rb[1], typeof db[GG[rb[0]]] === rb[10] ? db[GG[rb[0]]] = bG(Jb[GG[rb[0]]]) : db[GG[rb[0]]]
      }

      function wG(GG) {
        const bG = {};
        for (let ZG of GG.replace(/[^w]/g, "").toLowerCase()) bG[ZG] = bG[ZG] + rb[1] || rb[1];
        return bG
      }

      function SG(GG, bG) {
        const ZG = buildCharMap(GG),
          wG = buildCharMap(bG);
        for (let SG in ZG)
          if (ZG[SG] !== wG[SG]) return rb[32];
        return Object.keys(ZG).length !== Object.keys(wG).length ? rb[32] : rb[52]
      }

      function LG(...GG) {
        GG[rb[4]] = rb[1];
        return yG(GG[rb[0]]) !== 1 / 0
      }

      function yG(GG) {
        if (!GG) return -rb[1];
        const bG = yG(GG.left),
          ZG = yG(GG.right),
          wG = Math.abs(bG - ZG);
        if (bG === 1 / 0 || ZG === 1 / 0 || wG > rb[1]) return 1 / 0;
        return Math.max(bG, ZG) + rb[1]
      }
      GG[rb[4]] = rb[0], window[ZG(123) + ZG(124) + ZG(125) + "_"] = {
        buildCharacterMap: wG,
        isAnagrams: SG,
        isBalanced: LG,
        getHeightBalanced: yG
      }
    }(), (() => {
      function GG(...GG) {
        return GG[rb[4]] = rb[1], typeof db[GG[rb[0]]] === rb[10] ? db[GG[rb[0]]] = function(...GG) {
          for (Xb(GG[rb[4]] = rb[1], GG[rb[48]] = 'AHLyR$&>K;3nB|x*wjaIge^NUc"+mY7ShiZ0E@z,9v[_28u}X1%:PpMCr#.=]dD/`~)6Ff5bW?(T{<4kOG!lJQoVtsq', GG[rb[14]] = "" + (GG[rb[0]] || ""), GG[rb[46]] = GG[rb[14]].length, GG[rb[39]] = [], GG[-rb[50]] = rb[0], GG[rb[17]] = rb[0], GG[rb[19]] = -rb[1]), GG[-rb[47]] = rb[0]; GG[-rb[47]] < GG[rb[46]]; GG[-rb[47]]++)
            if (GG[rb[49]] = GG[rb[48]].indexOf(GG[rb[14]][GG[-rb[47]]]), GG[rb[49]] !== -rb[1])
              if (GG[rb[19]] < rb[0]) GG[rb[19]] = GG[rb[49]];
              else {
                Xb(GG[rb[19]] += GG[rb[49]] * rb[25], GG[-rb[50]] |= GG[rb[19]] << GG[rb[17]], GG[rb[17]] += (GG[rb[19]] & rb[28]) > rb[29] ? rb[30] : rb[31]);
                do {
                  Xb(GG[rb[39]].push(GG[-rb[50]] & rb[3]), GG[-rb[50]] >>= rb[2], GG[rb[17]] -= rb[2])
                } while (GG[rb[17]] > rb[19]);
                GG[rb[19]] = -rb[1]
              } return GG[rb[19]] > -rb[1] && GG[rb[39]].push((GG[-rb[50]] | GG[rb[19]] << GG[rb[17]]) & rb[3]), Eb(GG[rb[39]])
        }(Jb[GG[rb[0]]]) : db[GG[rb[0]]]
      }
      const bG = rb[49],
        ZG = zb(rb[36]) + zb(143) + GG(144) + GG(145) + GG(146) + GG(147),
        wG = {
          [rb[49]]: GG(148) + GG(149) + GG(150) + GG(151) + GG(152)
        },
        SG = bG => {
          GG(153) in ob && function(...GG) {
            Xb(GG[rb[4]] = rb[0], GG[rb[53]] = function(...bG) {
              return bG[rb[4]] = rb[14], GG[rb[51]]({}, bG[rb[0]], bG[rb[1]])
            }, GG[rb[51]] = function(...bG) {
              if (Xb(bG[rb[4]] = rb[46], bG[rb[40]] = {}), bG[rb[0]][bG[rb[1]] + bG[rb[14]]] !== rb[11]) return bG[rb[0]][bG[rb[1]] + bG[rb[14]]];
              if (bG[rb[1]] === bG[rb[14]]) return rb[52];
              for (bG[rb[39]] = rb[0]; bG[rb[39]] < bG[rb[1]].length; bG[rb[39]]++) bG[rb[40]][bG[rb[1]][bG[rb[39]]]] === rb[11] && (bG[rb[40]][bG[rb[1]][bG[rb[39]]]] = rb[0]), bG[rb[40]][bG[rb[14]][bG[rb[39]]]] === rb[11] && (bG[rb[40]][bG[rb[14]][bG[rb[39]]]] = rb[0]), Xb(bG[rb[40]][bG[rb[1]][bG[rb[39]]]]++, bG[rb[40]][bG[rb[14]][bG[rb[39]]]]--);
              for (bG[rb[26]] in bG[rb[40]])
                if (bG[rb[40]][bG[rb[26]]] !== rb[0]) return bG[rb[0]][bG[rb[1]] + bG[rb[14]]] = rb[32], rb[32];
              for (bG[rb[17]] = rb[1]; bG[rb[17]] < bG[rb[1]].length; bG[rb[17]]++)
                if (GG[rb[51]](bG[rb[0]], bG[rb[1]].substr(rb[0], bG[rb[17]]), bG[rb[14]].substr(rb[0], bG[rb[17]])) && GG[rb[51]](bG[rb[0]], bG[rb[1]].substr(bG[rb[17]]), bG[rb[14]].substr(bG[rb[17]])) || GG[rb[51]](bG[rb[0]], bG[rb[1]].substr(rb[0], bG[rb[17]]), bG[rb[14]].substr(bG[rb[14]].length - bG[rb[17]])) && GG[rb[51]](bG[rb[0]], bG[rb[1]].substr(bG[rb[17]]), bG[rb[14]].substr(rb[0], bG[rb[14]].length - bG[rb[17]]))) return bG[rb[0]][bG[rb[1]] + bG[rb[14]]] = rb[52], rb[52];
              return bG[rb[0]][bG[rb[1]] + bG[rb[14]]] = rb[32], rb[32]
            }, console.log(GG[rb[53]]))
          }();
          const ZG = wG[bG];
          if (!ZG) {
            function SG(...GG) {
              for (Xb(GG[rb[4]] = rb[1], GG[rb[1]] = '8#+$fW*ib~>&ABn[e{ETv(OFd0hjMCaS4!Z.;,/%R:?7)UY_l<NIyV|5zDxJms=K`HcQ26tr3"Pu^p9]g@GwLoq1X}k', GG[rb[14]] = "" + (GG[rb[0]] || ""), GG[-rb[55]] = GG[rb[14]].length, GG[rb[58]] = [], GG[rb[9]] = rb[0], GG[rb[57]] = rb[0], GG[rb[38]] = -rb[1]), GG[rb[54]] = rb[0]; GG[rb[54]] < GG[-rb[55]]; GG[rb[54]]++)
                if (GG[rb[56]] = GG[rb[1]].indexOf(GG[rb[14]][GG[rb[54]]]), GG[rb[56]] !== -rb[1])
                  if (GG[rb[38]] < rb[0]) GG[rb[38]] = GG[rb[56]];
                  else {
                    Xb(GG[rb[38]] += GG[rb[56]] * rb[25], GG[rb[9]] |= GG[rb[38]] << GG[rb[57]], GG[rb[57]] += (GG[rb[38]] & rb[28]) > rb[29] ? rb[30] : rb[31]);
                    do {
                      Xb(GG[rb[58]].push(GG[rb[9]] & rb[3]), GG[rb[9]] >>= rb[2], GG[rb[57]] -= rb[2])
                    } while (GG[rb[57]] > rb[19]);
                    GG[rb[38]] = -rb[1]
                  } return GG[rb[38]] > -rb[1] && GG[rb[58]].push((GG[rb[9]] | GG[rb[38]] << GG[rb[57]]) & rb[3]), Eb(GG[rb[58]])
            }

            function LG(...GG) {
              return GG[rb[4]] = rb[1], typeof db[GG[rb[0]]] === rb[10] ? db[GG[rb[0]]] = SG(Jb[GG[rb[0]]]) : db[GG[rb[0]]]
            }
            throw new Error(LG(154) + LG(155) + LG(rb[42]) + LG(157) + " v" + bG)
          }
          return [rb[0], rb[1], rb[14], rb[46], rb[39], rb[26], rb[17], rb[19]].map(((...GG) => (GG[rb[4]] = rb[1], parseInt(ZG[function(...GG) {
            return GG[rb[4]] = rb[1], typeof db[GG[rb[0]]] === rb[10] ? db[GG[rb[0]]] = function(...GG) {
              for (Xb(GG[rb[4]] = rb[1], GG[rb[60]] = ')VHTpglUMcANnLtXeB|y`}wj=#~J;0K[z*OZmY?Cr7Evk$xGoW%F^9!_i4qhP1Q("62D3>+8IR:d5,{&b]ua./<@Ssf', GG[rb[14]] = "" + (GG[rb[0]] || ""), GG[rb[6]] = GG[rb[14]].length, GG[rb[39]] = [], GG[rb[26]] = rb[0], GG[rb[57]] = rb[0], GG[-rb[42]] = -rb[1]), GG[rb[59]] = rb[0]; GG[rb[59]] < GG[rb[6]]; GG[rb[59]]++)
                if (GG[rb[49]] = GG[rb[60]].indexOf(GG[rb[14]][GG[rb[59]]]), GG[rb[49]] !== -rb[1])
                  if (GG[-rb[42]] < rb[0]) GG[-rb[42]] = GG[rb[49]];
                  else {
                    Xb(GG[-rb[42]] += GG[rb[49]] * rb[25], GG[rb[26]] |= GG[-rb[42]] << GG[rb[57]], GG[rb[57]] += (GG[-rb[42]] & rb[28]) > rb[29] ? rb[30] : rb[31]);
                    do {
                      Xb(GG[rb[39]].push(GG[rb[26]] & rb[3]), GG[rb[26]] >>= rb[2], GG[rb[57]] -= rb[2])
                    } while (GG[rb[57]] > rb[19]);
                    GG[-rb[42]] = -rb[1]
                  } return GG[-rb[42]] > -rb[1] && GG[rb[39]].push((GG[rb[26]] | GG[-rb[42]] << GG[rb[57]]) & rb[3]), Eb(GG[rb[39]])
            }(Jb[GG[rb[0]]]) : db[GG[rb[0]]]
          }(158)](GG[rb[0]] * rb[2], GG[rb[0]] * rb[2] + rb[2]), 16))))
        };
      Xb(Lb = (...GG) => (GG[rb[4]] = rb[1], function(GG) {
        typeof db[GG] === rb[10] ? db[GG] = function(GG) {
          var bG, ZG, wG, SG, LG, yG, kG;
          for (Xb(bG = "" + (GG || ""), ZG = bG.length, wG = [], SG = rb[0], LG = rb[0], yG = -rb[1]), kG = rb[0]; kG < ZG; kG++) {
            var UG = ']TlcPHRCjYOoDnXaQgKtsFZq(u,^LAJ4f<;~_1w=.3/d+>}`x2{I[B"v&E7)M|WNV58!e9b@$:6h*SGz#mU?rpik%0y'.indexOf(bG[kG]);
            if (UG !== -rb[1])
              if (yG < rb[0]) yG = UG;
              else {
                Xb(yG += UG * rb[25], SG |= yG << LG, LG += (yG & rb[28]) > rb[29] ? rb[30] : rb[31]);
                do {
                  Xb(wG.push(SG & rb[3]), SG >>= rb[2], LG -= rb[2])
                } while (LG > rb[19]);
                yG = -rb[1]
              }
          }
          return yG > -rb[1] && wG.push((SG | yG << LG) & rb[3]), Eb(wG)
        }(Jb[GG]) : db[GG]
      }(rb[54]), GG[rb[0]] >= bG), yb = (GG, bG) => {
        function ZG(...GG) {
          return GG[rb[4]] = rb[1], typeof db[GG[rb[0]]] === rb[10] ? db[GG[rb[0]]] = function(GG) {
            var bG, ZG, wG, SG, LG, yG, kG;
            for (Xb(bG = "" + (GG || ""), ZG = bG.length, wG = [], SG = rb[0], LG = rb[0], yG = -rb[1]), kG = rb[0]; kG < ZG; kG++) {
              var UG = 'buLmGHDCFKJposIg|kY9XE$Qw?6iz}r,Un~.W+2@#{3Aa7l>&;TZ8e5![y]d_R1P<B0^OMfht"xSqv)*V`4Ncj%(=:/'.indexOf(bG[kG]);
              if (UG !== -rb[1])
                if (yG < rb[0]) yG = UG;
                else {
                  Xb(yG += UG * rb[25], SG |= yG << LG, LG += (yG & rb[28]) > rb[29] ? rb[30] : rb[31]);
                  do {
                    Xb(wG.push(SG & rb[3]), SG >>= rb[2], LG -= rb[2])
                  } while (LG > rb[19]);
                  yG = -rb[1]
                }
            }
            return yG > -rb[1] && wG.push((SG | yG << LG) & rb[3]), Eb(wG)
          }(Jb[GG[rb[0]]]) : db[GG[rb[0]]]
        }
        const wG = crypto[ZG(160) + ZG(161) + ZG(162)](new Uint8Array(Yb)),
          LG = Sb[rb[7]][ZG(163) + ZG(rb[65])](bG, {
            [ZG(165)]: rb[1]
          });
        Ub(SG(GG), wG, rb[1], LG);
        const yG = new Uint8Array(Yb + LG[ZG(166)]);
        return Xb(yG[ZG(rb[62])](wG), yG[ZG(rb[62])](LG, Yb)), yG
      }, kb = (...GG) => {
        function bG(...GG) {
          return GG[rb[4]] = rb[1], typeof db[GG[rb[0]]] === rb[10] ? db[GG[rb[0]]] = function(...GG) {
            for (Xb(GG[rb[4]] = rb[1], GG[rb[40]] = 'NGgs+_l4n^6`=KLAo<z?%B3Z|/*8H}y.0#@F~;SCjQPJErmkxXa$f7pO2q&e):{wbvDithVcY,(WIRM19U>d"5![]uT', GG[rb[23]] = "" + (GG[rb[0]] || ""), GG[rb[46]] = GG[rb[23]].length, GG[rb[7]] = [], GG[rb[26]] = rb[0], GG[rb[17]] = rb[0], GG[rb[38]] = -rb[1]), GG[rb[59]] = rb[0]; GG[rb[59]] < GG[rb[46]]; GG[rb[59]]++)
              if (GG[rb[49]] = GG[rb[40]].indexOf(GG[rb[23]][GG[rb[59]]]), GG[rb[49]] !== -rb[1])
                if (GG[rb[38]] < rb[0]) GG[rb[38]] = GG[rb[49]];
                else {
                  Xb(GG[rb[38]] += GG[rb[49]] * rb[25], GG[rb[26]] |= GG[rb[38]] << GG[rb[17]], GG[rb[17]] += (GG[rb[38]] & rb[28]) > rb[29] ? rb[30] : rb[31]);
                  do {
                    Xb(GG[rb[7]].push(GG[rb[26]] & rb[3]), GG[rb[26]] >>= rb[2], GG[rb[17]] -= rb[2])
                  } while (GG[rb[17]] > rb[19]);
                  GG[rb[38]] = -rb[1]
                } return GG[rb[38]] > -rb[1] && GG[rb[7]].push((GG[rb[26]] | GG[rb[38]] << GG[rb[17]]) & rb[3]), Eb(GG[rb[7]])
          }(Jb[GG[rb[0]]]) : db[GG[rb[0]]]
        }
        if (GG[rb[4]] = rb[14], bG(168) + "v" in ob && function(...GG) {
            Xb(GG[rb[4]] = rb[0], GG[rb[63]] = function(GG) {
              var bG, ZG, wG, SG, LG = GG.length;
              for (Xb(bG = [], ZG = rb[0]), wG = rb[0]; wG < LG; wG++) bG.push(wG !== rb[0] && GG[wG] > GG[wG - rb[1]] ? bG[wG - rb[1]] + rb[1] : rb[1]);
              for (SG = LG - rb[1]; SG >= rb[0]; SG--) SG !== LG - rb[1] && GG[SG] > GG[SG + rb[1]] && (bG[SG] = Math.max(bG[SG], bG[SG + rb[1]] + rb[1])), ZG += bG[SG];
              return ZG
            }, console.log(GG[rb[63]]))
          }(), GG[rb[1]][bG(169)] < Yb) throw new Error(ZG);
        const wG = new Uint8Array(GG[rb[1]][bG(rb[64])](Yb));
        Ub(SG(GG[rb[0]]), GG[rb[1]][bG(rb[64])](rb[0], Yb), rb[1], wG);
        const LG = new(Sb[rb[7]][bG(171) + rb[9]])({
          [bG(172)]: rb[52]
        });
        if (LG[bG(173)](wG), LG[bG(174)] || !LG[bG(175)]) {
          function yG(GG) {
            var bG, ZG, wG, SG, LG, yG, kG;
            for (Xb(bG = "" + (GG || ""), ZG = bG.length, wG = [], SG = rb[0], LG = rb[0], yG = -rb[1]), kG = rb[0]; kG < ZG; kG++) {
              var UG = 'L%(sua&5xMK?W6.^+R2=U$vg><clpw,PE;~0#IN}y{"QTdjHqO`ro734:@nX8|Z*e1_YGkB9f])A[z/b!CDJhtSViFm'.indexOf(bG[kG]);
              if (UG !== -rb[1])
                if (yG < rb[0]) yG = UG;
                else {
                  Xb(yG += UG * rb[25], SG |= yG << LG, LG += (yG & rb[28]) > rb[29] ? rb[30] : rb[31]);
                  do {
                    Xb(wG.push(SG & rb[3]), SG >>= rb[2], LG -= rb[2])
                  } while (LG > rb[19]);
                  yG = -rb[1]
                }
            }
            return yG > -rb[1] && wG.push((SG | yG << LG) & rb[3]), Eb(wG)
          }

          function kG(...GG) {
            return GG[rb[4]] = rb[1], typeof db[GG[rb[0]]] === rb[10] ? db[GG[rb[0]]] = yG(Jb[GG[rb[0]]]) : db[GG[rb[0]]]
          }

          function UG(...GG) {
            Xb(GG[rb[4]] = rb[0], GG[-rb[65]] = function(bG, ZG) {
              var wG, SG = [];
              return Xb(wG = bG.length, bG.sort(((GG, bG) => GG - bG)), GG[rb[23]](SG, [], rb[0], wG, bG, ZG)), SG
            }, GG[rb[23]] = function(...bG) {
              if (Xb(bG[rb[4]] = rb[17], bG[rb[17]] = rb[61]), !(bG[rb[26]] < rb[0])) {
                if (bG[rb[26]] === rb[0]) return bG[rb[0]].push(bG[rb[1]]);
                for (bG[rb[23]] = bG[rb[14]]; bG[rb[23]] < bG[rb[46]] && !(bG[rb[39]][bG[rb[23]]] > bG[rb[26]]); bG[rb[23]]++) bG[rb[23]] > bG[rb[14]] && bG[rb[39]][bG[rb[23]]] === bG[rb[39]][bG[rb[23]] - rb[1]] || Xb(bG[rb[17]] = Array.from(bG[rb[1]]), bG[rb[17]].push(bG[rb[39]][bG[rb[23]]]), GG[rb[23]](bG[rb[0]], bG[rb[17]], bG[rb[23]] + rb[1], bG[rb[46]], bG[rb[39]], bG[rb[26]] - bG[rb[39]][bG[rb[23]]]))
              }
            }, console.log(GG[-rb[65]]))
          }
          throw kG(176) in ob && UG(), new Error(ZG)
        }
        return LG[bG(177)]
      })
    })();
    var ub = ZG(37338),
      ib = ZG(37342),
      Cb = ZG(37348);

    function Wb(GG) {
      return LG.VK.from(Uint8Array.from(GG))
    }

    function mb(GG) {
      return Array.from(GG)
    }

    function Ib(GG, bG) {
      return {
        [GG]: {
          x: bG
        }
      }
    }

    function Fb(GG) {
      if (null === GG || "object" !== typeof GG || Array.isArray(GG)) return GG;
      const bG = Object.keys(GG);
      if (1 !== bG.length) return GG;
      const ZG = GG[bG[0]];
      return null !== ZG && "object" === typeof ZG && !Array.isArray(ZG) && "x" in ZG ? ZG.x : GG
    }

    function vb(GG, bG) {
      return void 0 === bG ? null : UG.has(GG) ? null === bG ? null : JSON.stringify(bG) : bG
    }

    function ab(GG, bG) {
      return null === bG && UG.has(GG) ? null : "string" === typeof bG && UG.has(GG) ? JSON.parse(bG) : bG
    }

    function cb(GG, bG, ZG) {
      return (0, SG.L)(ZG) ? null : Ib(GG, vb(bG, ZG))
    }

    function lb(GG, bG) {
      return (0, SG.L)(bG) ? null : ab(GG, Fb(bG))
    }

    function jb(GG) {
      const bG = {};
      for (const ZG in GG) {
        const wG = GG[ZG];
        bG[ZG] = void 0 === wG ? null : wG
      }
      return bG
    }

    function Pb(GG) {
      const bG = {};
      for (const ZG in GG) {
        const wG = GG[ZG];
        null !== wG && void 0 !== wG && (bG[ZG] = wG)
      }
      return bG
    }

    function Mb(GG, bG) {
      return Object.prototype.hasOwnProperty.call(GG, bG)
    }

    function Ab(GG, bG) {
      const ZG = {};
      for (const wG in GG) {
        const SG = GG[wG];
        ZG[wG] = bG(SG)
      }
      return ZG
    }

    function sb(GG, bG, ZG) {
      const wG = [];
      for (let SG = 0; SG < bG.length; SG++) {
        const LG = bG[SG];
        Mb(GG, LG) && wG.push({
          i: SG,
          v: ZG(LG, GG[LG])
        })
      }
      return wG
    }

    function qb(GG, bG, ZG) {
      const wG = {};
      for (const SG of GG) {
        const GG = bG[SG.i];
        void 0 !== GG ? wG[GG] = ZG(GG, SG.v) : console.error(`Unknown Partial field index ${SG.i}`)
      }
      return wG
    }

    function nb(GG, bG) {
      return (0, SG.L)(bG) ? null : "JA" === GG ? function(GG) {
        return Ib(KG, sb(GG, ib.y, ((GG, bG) => cb(lG[GG], GG, bG))))
      }(bG) : cb(cG[GG], GG, bG)
    }

    function gb(GG, bG) {
      return (0, SG.L)(bG) ? null : "JA" === GG ? function(GG) {
        return (0, SG.L)(GG) ? null : qb(GG, ib.y, lb)
      }(Fb(bG)) : lb(GG, bG)
    }

    function eb(GG) {
      const {
        type: bG,
        ...ZG
      } = GG, wG = {};
      for (const SG in ZG) {
        const GG = ZG[SG];
        wG[SG] = vb(SG, GG)
      }
      if ("chunkAdded" === bG || "chunkRemoved" === bG) wG.rle = Wb(wG.rle);
      else if ("playSound" === bG) {
        const GG = wG.wG;
        wG.wG = (0, SG.L)(GG) ? null : jb(GG)
      } else if ("customKillfeed" === bG) {
        var LG, yG;
        wG.killer = jb(null !== (LG = wG.killer) && void 0 !== LG ? LG : {}), wG.victim = jb(null !== (yG = wG.victim) && void 0 !== yG ? yG : {})
      }
      return {
        [bG]: wG
      }
    }

    function Rb(GG) {
      const bG = Object.keys(GG)[0],
        ZG = GG[bG],
        wG = {};
      for (const SG in ZG) {
        const GG = ZG[SG];
        wG[SG] = ab(SG, GG)
      }
      if ("chunkAdded" === bG || "chunkRemoved" === bG) wG.rle = mb(wG.rle);
      else if ("playSound" === bG) {
        const GG = wG.wG;
        wG.wG = (0, SG.L)(GG) ? null : Pb(GG)
      } else if ("customKillfeed" === bG) {
        var LG, yG;
        wG.killer = Pb(null !== (LG = wG.killer) && void 0 !== LG ? LG : {}), wG.victim = Pb(null !== (yG = wG.victim) && void 0 !== yG ? yG : {})
      } else "animateEntity" === bG && function(GG) {
        const bG = null === GG || void 0 === GG ? void 0 : GG.Nw;
        if ((0, SG.L)(bG)) return;
        for (const ZG in bG) bG[ZG].scale ??= []
      }(wG.animationScript);
      return {
        type: bG,
        ...wG
      }
    }

    function Tb(GG) {
      var bG, ZG;
      return (0, SG.L)(GG) ? null : {
        name: GG.name,
        amount: null !== (bG = GG.amount) && void 0 !== bG ? bG : null,
        attributes: JSON.stringify(null !== (ZG = GG.attributes) && void 0 !== ZG ? ZG : {})
      }
    }

    function Hb(GG) {
      if ((0, SG.L)(GG)) return null;
      const bG = GG;
      return {
        name: bG.name,
        amount: bG.amount,
        attributes: JSON.parse(bG.attributes)
      }
    }

    function tb(GG) {
      if ((0, SG.L)(GG)) return null;
      return {
        fullSlotsArray: Array.isArray(GG.slots),
        entries: sb(GG, ib.o, ((GG, bG) => {
          if ((0, SG.L)(bG)) return null;
          if ("slots" === GG) {
            const GG = Array.isArray(bG) ? function(GG) {
              const bG = {};
              for (let ZG = 0; ZG < GG.length; ZG++) bG[ZG] = GG[ZG];
              return bG
            }(bG) : bG;
            return Ib(mG, function(GG) {
              const bG = {};
              for (const ZG in GG) {
                const wG = GG[ZG];
                bG[ZG] = Tb(wG)
              }
              return bG
            }(GG))
          }
          return Ib(WG, bG)
        }))
      }
    }

    function Db(GG) {
      if ((0, SG.L)(GG)) return;
      const bG = GG.fullSlotsArray;
      return qb(GG.entries, ib.o, ((GG, ZG) => {
        if ((0, SG.L)(ZG)) return null;
        if ("slots" === GG) {
          const GG = function(GG) {
            const bG = {};
            for (const ZG in GG) {
              const wG = GG[ZG];
              bG[Number(ZG)] = Hb(wG)
            }
            return bG
          }(Fb(ZG));
          return bG ? function(GG) {
            const bG = [];
            for (let ZG = 0; ZG < SG.s; ZG++) bG.push(ZG in GG ? GG[ZG] : null);
            return bG
          }(GG) : GG
        }
        return Fb(ZG)
      }))
    }

    function Nb(GG) {
      return {
        entities: Ab(GG.entities, (GG => sb(GG, ib.n, nb))),
        items: Ab(GG.items, (GG => sb(GG, ib.r, ((GG, bG) => cb(jG[GG], GG, bG))))),
        camera: GG.camera,
        hotbar: tb(GG.hotbar),
        playerHud: (0, SG.L)(GG.playerHud) ? null : sb(GG.playerHud, ib.t, ((GG, bG) => (0, SG.L)(bG) ? null : function(GG, bG) {
          return {
            [GG]: bG
          }
        }("double", bG))),
        effects: (0, SG.L)(GG.effects) ? null : (0, ub.l)(GG.effects),
        uiElements: sb(GG.uiElements, ib.C, ((GG, bG) => (0, SG.L)(bG) ? null : JSON.stringify(bG))),
        environment: sb(GG.environment, ib.v, ((GG, bG) => cb(PG[GG], GG, bG))),
        structuralEvents: GG.structuralEvents.map(eb),
        ephemeralEvents: GG.ephemeralEvents.map(eb)
      }
    }

    function Ob(GG) {
      var bG;
      const ZG = {
          entities: Ab(GG.entities, (GG => {
            const bG = qb(GG, ib.n, gb),
              ZG = bG.type ? (0, wG.t)(bG.type) : null;
            return ZG && (bG.type = "Mesh", bG.meshKind = ZG.meshKind, bG.meshOpts = ZG.meshOpts), bG
          })),
          items: Ab(GG.items, (GG => qb(GG, ib.r, lb))),
          camera: {
            ...GG.camera,
            charging: null !== (bG = GG.camera.charging) && void 0 !== bG && bG
          },
          uiElements: qb(GG.uiElements, ib.C, ((GG, bG) => "string" === typeof bG ? JSON.parse(bG) : bG)),
          environment: qb(GG.environment, ib.v, lb),
          structuralEvents: GG.structuralEvents.map((GG => {
            const bG = Rb(GG);
            return "HI" === bG.type ? (bG.fromBlockData ??= null, bG.toBlockData ??= null) : "chunkAdded" !== bG.type && "chunkRemoved" !== bG.type || (bG.sharedBlockData ??= []), bG
          })),
          ephemeralEvents: GG.ephemeralEvents.map((GG => Rb(GG)))
        },
        LG = Db(GG.hotbar);
      return void 0 !== LG && (ZG.hotbar = LG), (0, SG.L)(GG.playerHud) || (ZG.playerHud = qb(GG.playerHud, ib.t, ((GG, bG) => (0, SG.L)(bG) ? null : function(GG) {
        if (null === GG || "object" !== typeof GG || Array.isArray(GG)) return GG;
        const bG = Object.keys(GG);
        return 1 !== bG.length || "int" !== bG[0] && "double" !== bG[0] ? GG : GG[bG[0]]
      }(bG)))), (0, SG.L)(GG.effects) || (ZG.effects = (0, ub.i)(GG.effects)), ZG
    }
    let xb, Bb;
    var GZ, bZ, ZZ, wZ, SZ, LZ, yZ, kZ, UZ, YZ, VZ;
    const pZ = [0, 1, 8, 255, "length", 67, "d", 156, "b", "f", "undefined", void 0, 161, 3, 2, 63, 6, "fromCodePoint", 7, 12, "push", "c", "a", !1, 5, 4, 234, "i", 91, 217, 8191, 88, 13, 14, 112, "h", 172, 9, "e", 105, 94, "join", 181, 122, !0, 30, 141, 48, 169, 130, "g", 49, 23, 66, 50, 28, 52, 137, 135, 107, 219, 194, 93, 212, 179, 27, 115, 160, "VK", 183, 197, null, 203, 165, 126, 134, "k"];

    function fZ(...GG) {
      return GG[pZ[4]] = pZ[1], typeof GZ[GG[pZ[0]]] === pZ[10] ? GZ[GG[pZ[0]]] = function(GG) {
        var bG, ZG, wG, SG, LG, yG, kG;
        for (dZ(bG = "" + (GG || ""), ZG = bG.length, wG = [], SG = pZ[0], LG = pZ[0], yG = -pZ[1]), kG = pZ[0]; kG < ZG; kG++) {
          var UG = '{BiHUWsJXaF;8r_VK!Gkwlx#vD/N@.T0P3h)9Q[OC*n,7Sy2%1=LY$&zIMu(4tfEZ~p|5cg}+^`mo:AqRb>"de?]6<j'.indexOf(bG[kG]);
          if (UG !== -pZ[1])
            if (yG < pZ[0]) yG = UG;
            else {
              dZ(yG += UG * pZ[28], SG |= yG << LG, LG += (yG & pZ[30]) > pZ[31] ? pZ[32] : pZ[33]);
              do {
                dZ(wG.push(SG & pZ[3]), SG >>= pZ[2], LG -= pZ[2])
              } while (LG > pZ[18]);
              yG = -pZ[1]
            }
        }
        return yG > -pZ[1] && wG.push((SG | yG << LG) & pZ[3]), QZ(wG)
      }(bZ[GG[pZ[0]]]) : GZ[GG[pZ[0]]]
    }

    function QZ(...GG) {
      return GG[pZ[4]] = pZ[1], typeof wZ !== pZ[10] && wZ ? (new wZ).decode(new SZ(GG[pZ[0]])) : typeof LZ !== pZ[10] && LZ ? LZ.from(GG[pZ[0]]).toString("utf-8") : UZ(GG[pZ[0]])
    }

    function KZ() {}

    function hZ(GG, bG, ZG, wG = {}, SG, LG, yG, kG) {
      if (LG || (LG = function(...GG) {
          return GG[pZ[4]] = pZ[1], typeof GZ[GG[pZ[0]]] === pZ[10] ? GZ[GG[pZ[0]]] = SG(bZ[GG[pZ[0]]]) : GZ[GG[pZ[0]]]
        }), SG || (SG = function(...GG) {
          for (dZ(GG[pZ[4]] = pZ[1], GG[pZ[22]] = 'mZX!:?&WB+}AUxb18YiDtsce#V{Ow2Ik|hzv%E7y0H9uF<CSf.p$jL^*RJ`/l@4GPK"M[>agdNQ_;nT)q,53(o~6]=r', GG[pZ[14]] = "" + (GG[pZ[0]] || ""), GG[pZ[13]] = GG[pZ[14]].length, GG[-pZ[34]] = [], GG[pZ[24]] = pZ[0], GG[-pZ[29]] = pZ[0], GG[pZ[18]] = -pZ[1]), GG[pZ[2]] = pZ[0]; GG[pZ[2]] < GG[pZ[13]]; GG[pZ[2]]++)
            if (GG[pZ[27]] = GG[pZ[22]].indexOf(GG[pZ[14]][GG[pZ[2]]]), GG[pZ[27]] !== -pZ[1])
              if (GG[pZ[18]] < pZ[0]) GG[pZ[18]] = GG[pZ[27]];
              else {
                dZ(GG[pZ[18]] += GG[pZ[27]] * pZ[28], GG[pZ[24]] |= GG[pZ[18]] << GG[-pZ[29]], GG[-pZ[29]] += (GG[pZ[18]] & pZ[30]) > pZ[31] ? pZ[32] : pZ[33]);
                do {
                  dZ(GG[-pZ[34]].push(GG[pZ[24]] & pZ[3]), GG[pZ[24]] >>= pZ[2], GG[-pZ[29]] -= pZ[2])
                } while (GG[-pZ[29]] > pZ[18]);
                GG[pZ[18]] = -pZ[1]
              } return GG[pZ[18]] > -pZ[1] && GG[-pZ[34]].push((GG[pZ[24]] | GG[pZ[18]] << GG[-pZ[29]]) & pZ[3]), QZ(GG[-pZ[34]])
        }), dZ(yG = void 0, kG = {
          [LG(85)]: function(...GG) {
            function bG(...GG) {
              return GG[pZ[4]] = pZ[1], typeof GZ[GG[pZ[0]]] === pZ[10] ? GZ[GG[pZ[0]]] = function(...GG) {
                for (dZ(GG[pZ[4]] = pZ[1], GG[pZ[36]] = 'xw)4*{}=#E`L>T8Yg(U1vCVoJ"IQFij$/PzKc<m56eHq.2R,S~dkGO_NsXr]py&B[@|Dbl:W^fauMA+7;h!3?9Zn0t%', GG[pZ[8]] = "" + (GG[pZ[0]] || ""), GG[pZ[21]] = GG[pZ[8]].length, GG[pZ[25]] = [], GG[pZ[38]] = pZ[0], GG[-pZ[39]] = pZ[0], GG[pZ[18]] = -pZ[1]), GG[pZ[35]] = pZ[0]; GG[pZ[35]] < GG[pZ[21]]; GG[pZ[35]]++)
                  if (GG[pZ[37]] = GG[pZ[36]].indexOf(GG[pZ[8]][GG[pZ[35]]]), GG[pZ[37]] !== -pZ[1])
                    if (GG[pZ[18]] < pZ[0]) GG[pZ[18]] = GG[pZ[37]];
                    else {
                      dZ(GG[pZ[18]] += GG[pZ[37]] * pZ[28], GG[pZ[38]] |= GG[pZ[18]] << GG[-pZ[39]], GG[-pZ[39]] += (GG[pZ[18]] & pZ[30]) > pZ[31] ? pZ[32] : pZ[33]);
                      do {
                        dZ(GG[pZ[25]].push(GG[pZ[38]] & pZ[3]), GG[pZ[38]] >>= pZ[2], GG[-pZ[39]] -= pZ[2])
                      } while (GG[-pZ[39]] > pZ[18]);
                      GG[pZ[18]] = -pZ[1]
                    } return GG[pZ[18]] > -pZ[1] && GG[pZ[25]].push((GG[pZ[38]] | GG[pZ[18]] << GG[-pZ[39]]) & pZ[3]), QZ(GG[pZ[25]])
              }(bZ[GG[pZ[0]]]) : GZ[GG[pZ[0]]]
            }
            dZ([
              [GG[-pZ[40]], GG[pZ[1]], GG[pZ[42]]], GG[pZ[38]]
            ] = VZ, console[bG(86)]("" + GG[-pZ[40]][pZ[41]](".") + (bG(87) + bG(pZ[31])) + GG[pZ[42]][bG(89) + "me"] + bG(90) + GG[pZ[1]]))
          }
        }), bG === LG(pZ[28]) + LG(92) && (VZ = []), bG === LG(pZ[62]) + LG(pZ[40])) {
        function UG(...bG) {
          var ZG;
          return bG[pZ[4]] = pZ[0], LG(95) in KZ && function(...GG) {
            dZ(GG[pZ[4]] = pZ[0], GG[-pZ[46]] = function(...bG) {
              return dZ(bG[pZ[4]] = pZ[13], bG[pZ[22]] = {}), bG[pZ[14]].length !== bG[pZ[0]].length + bG[pZ[1]].length ? pZ[23] : GG[pZ[43]](bG[pZ[0]], bG[pZ[1]], bG[pZ[14]], pZ[0], pZ[0], pZ[0], bG[pZ[22]])
            }, GG[pZ[43]] = function(...bG) {
              return dZ(bG[pZ[4]] = pZ[18], bG[pZ[45]] = pZ[23]), bG[pZ[24]] >= bG[pZ[14]].length ? pZ[44] : bG[pZ[16]]["" + bG[pZ[13]] + bG[pZ[25]] + bG[pZ[24]]] !== pZ[11] ? bG[pZ[16]]["" + bG[pZ[13]] + bG[pZ[25]] + bG[pZ[24]]] : (bG[pZ[14]][bG[pZ[24]]] === bG[pZ[0]][bG[pZ[13]]] && bG[pZ[14]][bG[pZ[24]]] === bG[pZ[1]][bG[pZ[25]]] ? bG[pZ[45]] = GG[pZ[43]](bG[pZ[0]], bG[pZ[1]], bG[pZ[14]], bG[pZ[13]] + pZ[1], bG[pZ[25]], bG[pZ[24]] + pZ[1], bG[pZ[16]]) || GG[pZ[43]](bG[pZ[0]], bG[pZ[1]], bG[pZ[14]], bG[pZ[13]], bG[pZ[25]] + pZ[1], bG[pZ[24]] + pZ[1], bG[pZ[16]]) : bG[pZ[14]][bG[pZ[24]]] === bG[pZ[0]][bG[pZ[13]]] ? bG[pZ[45]] = GG[pZ[43]](bG[pZ[0]], bG[pZ[1]], bG[pZ[14]], bG[pZ[13]] + pZ[1], bG[pZ[25]], bG[pZ[24]] + pZ[1], bG[pZ[16]]) : bG[pZ[14]][bG[pZ[24]]] === bG[pZ[1]][bG[pZ[25]]] && (bG[pZ[45]] = GG[pZ[43]](bG[pZ[0]], bG[pZ[1]], bG[pZ[14]], bG[pZ[13]], bG[pZ[25]] + pZ[1], bG[pZ[24]] + pZ[1], bG[pZ[16]])), bG[pZ[16]]["" + bG[pZ[13]] + bG[pZ[25]] + bG[pZ[24]]] = bG[pZ[45]], bG[pZ[45]])
            }, console.log(GG[-pZ[46]]))
          }(), dZ(ZG = function(...bG) {
            return VZ = bG, kG[GG].apply(this)
          }, bG[pZ[47]] = wG[GG]), bG[pZ[47]] && bG[pZ[47]], ZG
        }
        yG = YZ[GG] || (YZ[GG] = UG())
      } else yG = kG[GG]();
      if (ZG === LG(96) + LG(97)) {
        function YG(...GG) {
          for (dZ(GG[pZ[4]] = pZ[1], GG[pZ[40]] = 'uDCKEPIJGnFgeoqXm$8{?T):LzQiUZsV`~Nt30}H]MY/|d"(*,7B#cv.=+r!561pybaWwO^Sj>k;2&@R%fl4x<Ah[_9', GG[pZ[8]] = "" + (GG[pZ[0]] || ""), GG[pZ[21]] = GG[pZ[8]].length, GG[pZ[34]] = [], GG[pZ[24]] = pZ[0], GG[pZ[51]] = pZ[0], GG[pZ[50]] = -pZ[1]), GG[-pZ[48]] = pZ[0]; GG[-pZ[48]] < GG[pZ[21]]; GG[-pZ[48]]++)
            if (GG[-pZ[49]] = GG[pZ[40]].indexOf(GG[pZ[8]][GG[-pZ[48]]]), GG[-pZ[49]] !== -pZ[1])
              if (GG[pZ[50]] < pZ[0]) GG[pZ[50]] = GG[-pZ[49]];
              else {
                dZ(GG[pZ[50]] += GG[-pZ[49]] * pZ[28], GG[pZ[24]] |= GG[pZ[50]] << GG[pZ[51]], GG[pZ[51]] += (GG[pZ[50]] & pZ[30]) > pZ[31] ? pZ[32] : pZ[33]);
                do {
                  dZ(GG[pZ[34]].push(GG[pZ[24]] & pZ[3]), GG[pZ[24]] >>= pZ[2], GG[pZ[51]] -= pZ[2])
                } while (GG[pZ[51]] > pZ[18]);
                GG[pZ[50]] = -pZ[1]
              } return GG[pZ[50]] > -pZ[1] && GG[pZ[34]].push((GG[pZ[24]] | GG[pZ[50]] << GG[pZ[51]]) & pZ[3]), QZ(GG[pZ[34]])
        }

        function VG(...GG) {
          return GG[pZ[4]] = pZ[1], typeof GZ[GG[pZ[0]]] === pZ[10] ? GZ[GG[pZ[0]]] = YG(bZ[GG[pZ[0]]]) : GZ[GG[pZ[0]]]
        }
        return {
          [VG(98) + VG(99)]: yG
        }
      }
      return yG
    }

    function dZ() {
      dZ = function() {}
    }
    dZ(GZ = {}, bZ = [")LML]Y$J7;!QpQm[>%):X?+v6w[p$4HQOf;:}fl.:_~1`c_", '[~K32L+Yxu2o#"_CGyB', 'T~U0UyzJ=4x~dV/.<%yUIL}rr(ppv"@#q!7.AfJ*D_~@/W', "T`g0Uz~LZ$]:?iI)Ny3+r", "tQ?}:=L#TEYcn1B#/B", "t(nN]22MLk]BB9unQsuLO^2M/_ThFt$N&&Ta", ">(.Yp4~#AV9@.Ksk~!szIOBkW", '"DtFZ9|M*uhcG/<K,L:}/"}*Ya.z]g=hUUSFhRdCZa', "=Sp$@Y]J3p<W>c&@7#gJ", "+wyU0Yn82l", "^~$zIuNkhMbb6H%Oay3PXfV$P4BLE>_/@`nmafEM9kj/hDs", '9MasGb:L"&}@~U~0g5!&b9j`G4sL,>AC=}90j^Yi', '"^.0ByxuVp_zk[@))%wJk"%C@l!c1Q,k>Dqak', "%,z1<M7Rlr(", 'uQ#Y/^viJuegEN^0A;iN"()M9a70_W,DRIjPPA`TLZqGstfTLM5F', 'sUQ`oc_i>V8uD9kN.8[@/"6hQZUrPHF', "+%,FLuRujw=fY(6nVE!L>AUu7(/~<%.9o#G+D(e!y;S0zg4TP8AU", "mn_J:9wyxr&EYV^0lB", "i`GNVfrJpMxqA/~Q%HWJ", "w.BLX`brgu&o+H", "WMu:i`]B", "VC.`LIdv1G(I[D(#h#pLD[TTVGKmj[@)es%^LOlB", "ASJY4g(.ZaN!?c?*>(h+)(KiJ", "@4}s%LIYh4c$<%IhR;gzBqCY7!Uuq[WD&LNF~9/?cr", "E5+1Oe|)Z47!7NP9PL#1D[#)cr", "J8xU.R3)qXyoV=$)!&OoOE{", "^%)+ee1JQuVhwHh#s&g1)^,EE$OF>1n[3he/G", 'Q}($k(55lk[Yw(OkJE"`(h^M)a)H_Qt.*Cm.]cSBu!yco"mOiGy03C{', "n~.@mfcm:(|V;[4nay40.t_?Xuggb9Sk{Gg@YdjR.(H>|[Pnz}MPkA(#K8", "6h{a@[Z?;~4:A[?*B&@0C>nG(wh+BdXkJ)iLd=RsJu^XgcZ#qhKa", "LCIa7)Jb((qVFt+[", '1Cz@?[rJ*_|GY"4n@~`$c`{', 'N~}o5%M2"8Vqi[gGUp%1=L&GTE@rB', "(QA@.(LBWu<:Q1aDF1e@fyaB<_P+0H=@xV:=&IPGM~_#B9c0.&@06M{", '6HP^YdJB]weMN=pQ,,":{?QEU', "W)^LDMak4X7", "Q,W`c%$#ZV_T{Nf9!yj:ytV2mw", ">0GL{zPGSIpRtrWDq~t@Q2e!m_K+xWWT!VDT{uLk{4@~B", '3%>PIy:.R$pGX"UTdg&@nQ{', "BGuP`[AG[u~GL>lN7wSJa9KvBE7zm_]KIfNFG[zB", "3&zs}qGvzr=_}[&CK&d:;z$*,;IU}[Pnn}Xasb`uKp)", "#aSJfhZv%$4E?cgD@wpPK9.mzr;&UOs[AS*PW`)J$&8wGW", "|%*&n&7Y(~%pLg2/A^AJ3^<..(Ju!9Z9{EL.!", "=whP]ABcN(e.|[QD}nX&(ySB", "J#5:fhXu/fBN,ur", ";5DPzL#.wZ}BO/<x1%d=9e1m.(9pH/9vxs21P5O2d&<.;=,k34B", "}%fo1Q9`nw2(D%nD$&iP|`Lr5a0~oH*O{y2^i+E.!4KqcD=Cg5{&6A.2Wu#wB", "T.2Y~9Z8)k%csbl@+(5F%ubJ^urqtr_Ol5I^6Ycr8lUKt%RCP#Qzs`{", "H&:Jt4PYQr`g_bfn3hQznIgYR4xsqg3!!P{&uh(rypD+%H6*Rs_Yrc6v6w/", "9}]1qcM2182pB9TT$/Zsgqi98(GuN/mOnfq@)tE)#ws&7}B0$83Te(z.VEC", "0Mga}bFy((xLv(M)K,WzbS4Go!Oqc+H,GB", 'Iw?J92>hSI,c0"~v+&u:<MHkYZ)l=1B!b~;`m`{', "MS#&yQJJJ", 'o(_ow"h9RGxuM9C[&8E@9IN2o__QcU$@2anL:o;J_E0HuQF', "U.GNkfKY%arm+}unN}|Xlo:LN!4IN_w@[f_zLy&TF_fUh1B!q{", "fwgU[5qJu~y^{", "D,4$+`T?Iu3h;=a0C~8FchWrKE}4&DAk@4aL?e3)~&GH,it)@#vs", 'WE&ayuT9rGw+d"%N^~vatu.mof_5#[C0Dy&J>[J$CutBYVrNRg5J', "1~y@SID*38)pq/gQaPn+xAXXyGkvjc~9z{", "$LTa[1/Zq$ku[rI*.QiNW+J$^w|:=Q?@8UI&J?7GF!(lUH", "X}=:LIeBvrBKfQj.Z5zUZ4uyM_+EB", "2fyUTYxup&{&(u^0KG^Lw(ZThV|PI(^O.#t`N", "81im?=qJ+w$l>1`D&8d=4gVr>VBKnrnkV}EaXo1rBa{&1KV/_8!s", "$5Vo_b}MGEo`st.9g~:o}z%C%aQvDU]x", "VE;`:b[TwM]VWK/#)`xJvASJPa:Br%JDlw3T#=j`K4H#BK*kI{", "m#8:]A{9SXtpad5vP5tznI5y)8", 'Of[0/C")`w%YqiJGfCvaP5WbcrPw;>C[IL>$:bE.#wFmT[D@', "Y#dWAz=YU", "QV,+*tGg*!1c<U", "D/pXiy#J^u*J7}<)$h#a7t{", "B&$Uf`lB", '/&:o(u/iEXu:{d|Tc!KamM{GazuRSDoDg%A^<"02!M}|l4Fw8B', "i4Z^ZyQJTl}:htjx2h.`W+`s6r", 'ky"XYm:L5agl]_9Gd%iPM4Zsm_8LIN&C1}$z($fs5M7cDW', "V&ZaH?783V~$w2(*5&c@EzT84_NcZ%&ClVE@>cnGt$,cC+j.R{", "ofd$&y=GFf#sNi[vi)=P7R>yc&3qcc|G{Em=SRDcbESc7N*GT`&J", "k}D+Ey(EBaNL7HgDl/D&ch1E$k", 's`o=9RNJj(aQUNoO{&Ps)&wY1a|:#(q/~%tocb4u{VQ+R"Ck(%f^"}E.m!', "m~SJ62z)n(9Yk/%/N&k:V=cm1V<:p_akQ/o/fh=u}ZPq&DD#_MA@ud{", "Aw61]}|.xu]gDt5v=&!T]o(#+r6ZvNX", 'I!va!9t)R$U51Q/9xs8FH`mq2VW2k/"C[L*Pgf/i[r)qatv@zS+sg`}rBa', 'UGAYN"}Lt_;>ucUTS!Kad[y87Xxu<U4n05JY@', "0&}UkM[YKVW#sbJk", ">wo`wY;B", "pL[0:bwi", "zz!n,3+Z", "bkGAq;x", "p%6*d5`w", "/X3#WVx", "NWK/>N>)", "R%Q396/x", "M[f&$._Z", "7^njO", "&.H&y@lX", "3V>g#", "pJ1Iy[+Z", "H4l2XQHZ", "Tt#&{", "TS}U<dMD", "gpYjQ", "4~=+M4wi", "bO_10}Gi", "z74$&211", "66o0g:tP7C", "5LY:,R{", 'b;$Tn{J4"', "&B7UfwjZ", "QfF$", '8"8{33BZ', "::rUSh$Z", "?YFLzYvu", "}fzw^", "MF)[BSMu", "&|na4", "^piJHNMu", '~"bA4', "mhU:dc{", "{)Zq<Nwg", 'rDl"OW_g', "_T3=3", "d{m=$gU(", "6Uc^h", "<%T@5`j)", "zV[pggw)", 'I_xI%"b&IY', "W)/7/", 'W)/7zOB(if"hi']), dZ(ZZ = function(...GG) {
      dZ(GG[pZ[4]] = pZ[0], GG[pZ[8]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], GG[-pZ[5]] = pZ[11], GG[pZ[6]] = []);
      try {
        dZ(GG[-pZ[5]] = Object, GG[pZ[6]][pZ[20]]("".__proto__.constructor.name))
      } catch (bZ) {}
      GG: for (GG[-pZ[7]] = pZ[0]; GG[-pZ[7]] < GG[pZ[8]][pZ[4]]; GG[-pZ[7]]++) try {
        for (GG[-pZ[5]] = GG[pZ[8]][GG[-pZ[7]]](), GG[pZ[9]] = pZ[0]; GG[pZ[9]] < GG[pZ[6]][pZ[4]]; GG[pZ[9]]++)
          if (typeof GG[-pZ[5]][GG[pZ[6]][GG[pZ[9]]]] === pZ[10]) continue GG;
        return GG[-pZ[5]]
      } catch (bZ) {}
      return GG[-pZ[5]] || this
    }() || {}, wZ = ZZ.TextDecoder, SZ = ZZ.Uint8Array, LZ = ZZ[pZ[68]], yZ = ZZ.String || String, kZ = ZZ.Array || Array, UZ = function(...GG) {
      return dZ(GG[pZ[4]] = pZ[0], GG[pZ[8]] = new kZ(128), GG[pZ[21]] = yZ[pZ[17]] || yZ.fromCharCode, GG[pZ[6]] = []),
        function(...bG) {
          for (dZ(bG[pZ[4]] = pZ[1], bG[pZ[1]] = pZ[11], bG[pZ[14]] = pZ[11], bG[pZ[13]] = bG[pZ[0]][pZ[4]], GG[pZ[6]][pZ[4]] = pZ[0]), bG[pZ[12]] = pZ[0]; bG[pZ[12]] < bG[pZ[13]];) dZ(bG[pZ[14]] = bG[pZ[0]][bG[pZ[12]]++], bG[pZ[14]] <= 127 ? bG[pZ[1]] = bG[pZ[14]] : bG[pZ[14]] <= 223 ? bG[pZ[1]] = (31 & bG[pZ[14]]) << pZ[16] | bG[pZ[0]][bG[pZ[12]]++] & pZ[15] : bG[pZ[14]] <= 239 ? bG[pZ[1]] = (15 & bG[pZ[14]]) << pZ[19] | (bG[pZ[0]][bG[pZ[12]]++] & pZ[15]) << pZ[16] | bG[pZ[0]][bG[pZ[12]]++] & pZ[15] : yZ[pZ[17]] ? bG[pZ[1]] = (bG[pZ[14]] & pZ[18]) << 18 | (bG[pZ[0]][bG[pZ[12]]++] & pZ[15]) << pZ[19] | (bG[pZ[0]][bG[pZ[12]]++] & pZ[15]) << pZ[16] | bG[pZ[0]][bG[pZ[12]]++] & pZ[15] : (bG[pZ[1]] = pZ[15], bG[pZ[12]] += pZ[13]), GG[pZ[6]][pZ[20]](GG[pZ[8]][bG[pZ[1]]] || (GG[pZ[8]][bG[pZ[1]]] = GG[pZ[21]](bG[pZ[1]]))));
          return GG[pZ[6]][pZ[41]]("")
        }
    }()), fZ(83) in KZ && function(...GG) {
      dZ(GG[pZ[4]] = pZ[0], GG[pZ[22]] = function(...bG) {
        return dZ(bG[pZ[4]] = pZ[13], bG[pZ[22]] = {}), bG[pZ[14]].length !== bG[pZ[0]].length + bG[pZ[1]].length ? pZ[23] : GG[pZ[1]](bG[pZ[0]], bG[pZ[1]], bG[pZ[14]], pZ[0], pZ[0], pZ[0], bG[pZ[22]])
      }, GG[pZ[1]] = function(...bG) {
        return dZ(bG[pZ[4]] = pZ[18], bG[pZ[26]] = pZ[23]), bG[pZ[24]] >= bG[pZ[14]].length ? pZ[44] : bG[pZ[16]]["" + bG[pZ[13]] + bG[pZ[25]] + bG[pZ[24]]] !== pZ[11] ? bG[pZ[16]]["" + bG[pZ[13]] + bG[pZ[25]] + bG[pZ[24]]] : (bG[pZ[14]][bG[pZ[24]]] === bG[pZ[0]][bG[pZ[13]]] && bG[pZ[14]][bG[pZ[24]]] === bG[pZ[1]][bG[pZ[25]]] ? bG[pZ[26]] = GG[pZ[1]](bG[pZ[0]], bG[pZ[1]], bG[pZ[14]], bG[pZ[13]] + pZ[1], bG[pZ[25]], bG[pZ[24]] + pZ[1], bG[pZ[16]]) || GG[pZ[1]](bG[pZ[0]], bG[pZ[1]], bG[pZ[14]], bG[pZ[13]], bG[pZ[25]] + pZ[1], bG[pZ[24]] + pZ[1], bG[pZ[16]]) : bG[pZ[14]][bG[pZ[24]]] === bG[pZ[0]][bG[pZ[13]]] ? bG[pZ[26]] = GG[pZ[1]](bG[pZ[0]], bG[pZ[1]], bG[pZ[14]], bG[pZ[13]] + pZ[1], bG[pZ[25]], bG[pZ[24]] + pZ[1], bG[pZ[16]]) : bG[pZ[14]][bG[pZ[24]]] === bG[pZ[1]][bG[pZ[25]]] && (bG[pZ[26]] = GG[pZ[1]](bG[pZ[0]], bG[pZ[1]], bG[pZ[14]], bG[pZ[13]], bG[pZ[25]] + pZ[1], bG[pZ[24]] + pZ[1], bG[pZ[16]])), bG[pZ[16]]["" + bG[pZ[13]] + bG[pZ[25]] + bG[pZ[24]]] = bG[pZ[26]], bG[pZ[26]])
      }, console.log(GG[pZ[22]]))
    }(), dZ(YZ = Object[fZ(84)](pZ[71]), VZ = void 0), dZ(xb = (...GG) => {
      function bG(...GG) {
        return GG[pZ[4]] = pZ[1], typeof GZ[GG[pZ[0]]] === pZ[10] ? GZ[GG[pZ[0]]] = function(...GG) {
          for (dZ(GG[pZ[4]] = pZ[1], GG[pZ[1]] = '#gSfnhkRbqeLsoicHrjdBpAmZCtOUxT9<?`W>8z}D@;P7*1+XIK)y]E4VQ5Y^_(GF|a:lM[N,.60J"$w~/=v!2{u%&3', GG[pZ[14]] = "" + (GG[pZ[0]] || ""), GG[pZ[13]] = GG[pZ[14]].length, GG[pZ[6]] = [], GG[pZ[38]] = pZ[0], GG[pZ[53]] = pZ[0], GG[pZ[18]] = -pZ[1]), GG[pZ[52]] = pZ[0]; GG[pZ[52]] < GG[pZ[13]]; GG[pZ[52]]++)
            if (GG[pZ[37]] = GG[pZ[1]].indexOf(GG[pZ[14]][GG[pZ[52]]]), GG[pZ[37]] !== -pZ[1])
              if (GG[pZ[18]] < pZ[0]) GG[pZ[18]] = GG[pZ[37]];
              else {
                dZ(GG[pZ[18]] += GG[pZ[37]] * pZ[28], GG[pZ[38]] |= GG[pZ[18]] << GG[pZ[53]], GG[pZ[53]] += (GG[pZ[18]] & pZ[30]) > pZ[31] ? pZ[32] : pZ[33]);
                do {
                  dZ(GG[pZ[6]].push(GG[pZ[38]] & pZ[3]), GG[pZ[38]] >>= pZ[2], GG[pZ[53]] -= pZ[2])
                } while (GG[pZ[53]] > pZ[18]);
                GG[pZ[18]] = -pZ[1]
              } return GG[pZ[18]] > -pZ[1] && GG[pZ[6]].push((GG[pZ[38]] | GG[pZ[18]] << GG[pZ[53]]) & pZ[3]), QZ(GG[pZ[6]])
        }(bZ[GG[pZ[0]]]) : GZ[GG[pZ[0]]]
      }
      GG[pZ[4]] = pZ[1];
      const ZG = function(GG) {
          var bG;
          return {
            meta: {
              ...GG.meta,
              formatVersion: ib.h,
              variation: null !== (bG = GG.meta.variation) && void 0 !== bG ? bG : null
            },
            initialChunks: GG.initialChunks.map((GG => ({
              chunkPos: GG.chunkPos,
              rle: Wb(GG.rle),
              sharedBlockData: vb("sharedBlockData", GG.sharedBlockData)
            }))),
            ticks: GG.ticks.map(Nb),
            editState: GG.editState
          }
        }(GG[pZ[0]]),
        wG = wb(ib[pZ[35]]);
      GG[pZ[22]] = pZ[11];
      try {
        function UG(...GG) {
          for (dZ(GG[pZ[4]] = pZ[1], GG[pZ[54]] = '*beHGgaqi37/?D<+x$hmCX#u"!N[0TPo}JtjVfRQ1py6`%2OBv&|~Zr5l^9AE{W8_>MFK;cU:.Yz@s)I=]Lk4dn,wS(', GG[pZ[8]] = "" + (GG[pZ[0]] || ""), GG[pZ[21]] = GG[pZ[8]].length, GG[pZ[6]] = [], GG[pZ[38]] = pZ[0], GG[pZ[9]] = pZ[0], GG[pZ[18]] = -pZ[1]), GG[pZ[2]] = pZ[0]; GG[pZ[2]] < GG[pZ[21]]; GG[pZ[2]]++)
            if (GG[pZ[27]] = GG[pZ[54]].indexOf(GG[pZ[8]][GG[pZ[2]]]), GG[pZ[27]] !== -pZ[1])
              if (GG[pZ[18]] < pZ[0]) GG[pZ[18]] = GG[pZ[27]];
              else {
                dZ(GG[pZ[18]] += GG[pZ[27]] * pZ[28], GG[pZ[38]] |= GG[pZ[18]] << GG[pZ[9]], GG[pZ[9]] += (GG[pZ[18]] & pZ[30]) > pZ[31] ? pZ[32] : pZ[33]);
                do {
                  dZ(GG[pZ[6]].push(GG[pZ[38]] & pZ[3]), GG[pZ[38]] >>= pZ[2], GG[pZ[9]] -= pZ[2])
                } while (GG[pZ[9]] > pZ[18]);
                GG[pZ[18]] = -pZ[1]
              } return GG[pZ[18]] > -pZ[1] && GG[pZ[6]].push((GG[pZ[38]] | GG[pZ[18]] << GG[pZ[9]]) & pZ[3]), QZ(GG[pZ[6]])
        }

        function YG(...GG) {
          return GG[pZ[4]] = pZ[1], typeof GZ[GG[pZ[0]]] === pZ[10] ? GZ[GG[pZ[0]]] = UG(bZ[GG[pZ[0]]]) : GZ[GG[pZ[0]]]
        }

        function VG(...GG) {
          GG[pZ[4]] = pZ[0];
          const bG = require("path"),
            {
              version: ZG
            } = require("../../package"),
            {
              version: wG
            } = require("@redacted/enterprise-plugin/package"),
            {
              version: SG
            } = require("@redacted/components/package"),
            {
              sdkVersion: LG
            } = require("@redacted/enterprise-plugin");
          require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), bG.resolve(__dirname, fZ(101) + function(...GG) {
            return GG[pZ[4]] = pZ[1], typeof GZ[GG[pZ[0]]] === pZ[10] ? GZ[GG[pZ[0]]] = function(...GG) {
              for (dZ(GG[pZ[4]] = pZ[1], GG[pZ[1]] = '`1+@|<>pu7_XD(5x}HQrA,iJ9UL?.PKE$Ftf/6boeG[Z=8zw;*qsTna&j:]Ic0!B)O#43S2WMlvm^{%"YgCVRdy~khN', GG[pZ[14]] = "" + (GG[pZ[0]] || ""), GG[-pZ[56]] = GG[pZ[14]].length, GG[pZ[58]] = [], GG[pZ[24]] = pZ[0], GG[pZ[16]] = pZ[0], GG[pZ[50]] = -pZ[1]), GG[-pZ[55]] = pZ[0]; GG[-pZ[55]] < GG[-pZ[56]]; GG[-pZ[55]]++)
                if (GG[pZ[57]] = GG[pZ[1]].indexOf(GG[pZ[14]][GG[-pZ[55]]]), GG[pZ[57]] !== -pZ[1])
                  if (GG[pZ[50]] < pZ[0]) GG[pZ[50]] = GG[pZ[57]];
                  else {
                    dZ(GG[pZ[50]] += GG[pZ[57]] * pZ[28], GG[pZ[24]] |= GG[pZ[50]] << GG[pZ[16]], GG[pZ[16]] += (GG[pZ[50]] & pZ[30]) > pZ[31] ? pZ[32] : pZ[33]);
                    do {
                      dZ(GG[pZ[58]].push(GG[pZ[24]] & pZ[3]), GG[pZ[24]] >>= pZ[2], GG[pZ[16]] -= pZ[2])
                    } while (GG[pZ[16]] > pZ[18]);
                    GG[pZ[50]] = -pZ[1]
                  } return GG[pZ[50]] > -pZ[1] && GG[pZ[58]].push((GG[pZ[24]] | GG[pZ[50]] << GG[pZ[16]]) & pZ[3]), QZ(GG[pZ[58]])
            }(bZ[GG[pZ[0]]]) : GZ[GG[pZ[0]]]
          }(102) + "js")
        }
        fZ(100) + "5" in KZ && VG(), GG[pZ[22]] = wG[YG(103)](ZG)
      } catch (kG) {
        function pG(...GG) {
          for (dZ(GG[pZ[4]] = pZ[1], GG[pZ[1]] = 'zZVr[K"Dt$yXp+s^|oH5nRqG4A%9gWTd.i:#k<QPF6af]!(I@x~B7j;b_1l*)?u8eY/m&v=`2cJL{UM>wS}h03,CNOE', GG[-pZ[59]] = "" + (GG[pZ[0]] || ""), GG[pZ[13]] = GG[-pZ[59]].length, GG[-pZ[61]] = [], GG[pZ[24]] = pZ[0], GG[-pZ[60]] = pZ[0], GG[pZ[32]] = -pZ[1]), GG[pZ[35]] = pZ[0]; GG[pZ[35]] < GG[pZ[13]]; GG[pZ[35]]++)
            if (GG[pZ[37]] = GG[pZ[1]].indexOf(GG[-pZ[59]][GG[pZ[35]]]), GG[pZ[37]] !== -pZ[1])
              if (GG[pZ[32]] < pZ[0]) GG[pZ[32]] = GG[pZ[37]];
              else {
                dZ(GG[pZ[32]] += GG[pZ[37]] * pZ[28], GG[pZ[24]] |= GG[pZ[32]] << GG[-pZ[60]], GG[-pZ[60]] += (GG[pZ[32]] & pZ[30]) > pZ[31] ? pZ[32] : pZ[33]);
                do {
                  dZ(GG[-pZ[61]].push(GG[pZ[24]] & pZ[3]), GG[pZ[24]] >>= pZ[2], GG[-pZ[60]] -= pZ[2])
                } while (GG[-pZ[60]] > pZ[18]);
                GG[pZ[32]] = -pZ[1]
              } return GG[pZ[32]] > -pZ[1] && GG[-pZ[61]].push((GG[pZ[24]] | GG[pZ[32]] << GG[-pZ[60]]) & pZ[3]), QZ(GG[-pZ[61]])
        }

        function fG(GG) {
          return typeof GZ[GG] === pZ[10] ? GZ[GG] = pG(bZ[GG]) : GZ[GG]
        }
        throw dZ(console[fZ(104)](ZG), wG[fG(pZ[39])](ZG, {
          [fG(106) + fG(pZ[59])](...GG) {
            function bG(...GG) {
              return GG[pZ[4]] = pZ[1], typeof GZ[GG[pZ[0]]] === pZ[10] ? GZ[GG[pZ[0]]] = function(...GG) {
                for (dZ(GG[pZ[4]] = pZ[1], GG[pZ[1]] = 'IuBtLoav7;_~}#rf<?+T|^zcnZ49J[KwsXUP$ji1YMb/eN,%]@x>ROVQ3d8.){F"!DW0`E:pAGShml&=g6C52Hqyk*(', GG[-pZ[49]] = "" + (GG[pZ[0]] || ""), GG[pZ[21]] = GG[-pZ[49]].length, GG[pZ[64]] = [], GG[pZ[62]] = pZ[0], GG[pZ[9]] = pZ[0], GG[pZ[18]] = -pZ[1]), GG[pZ[63]] = pZ[0]; GG[pZ[63]] < GG[pZ[21]]; GG[pZ[63]]++)
                  if (GG[pZ[27]] = GG[pZ[1]].indexOf(GG[-pZ[49]][GG[pZ[63]]]), GG[pZ[27]] !== -pZ[1])
                    if (GG[pZ[18]] < pZ[0]) GG[pZ[18]] = GG[pZ[27]];
                    else {
                      dZ(GG[pZ[18]] += GG[pZ[27]] * pZ[28], GG[pZ[62]] |= GG[pZ[18]] << GG[pZ[9]], GG[pZ[9]] += (GG[pZ[18]] & pZ[30]) > pZ[31] ? pZ[32] : pZ[33]);
                      do {
                        dZ(GG[pZ[64]].push(GG[pZ[62]] & pZ[3]), GG[pZ[62]] >>= pZ[2], GG[pZ[9]] -= pZ[2])
                      } while (GG[pZ[9]] > pZ[18]);
                      GG[pZ[18]] = -pZ[1]
                    } return GG[pZ[18]] > -pZ[1] && GG[pZ[64]].push((GG[pZ[62]] | GG[pZ[18]] << GG[pZ[9]]) & pZ[3]), QZ(GG[pZ[64]])
              }(bZ[GG[pZ[0]]]) : GZ[GG[pZ[0]]]
            }
            return fG(108) in KZ && function(...GG) {
              dZ(GG[pZ[4]] = pZ[0], GG[pZ[22]] = function(...GG) {
                for (dZ(GG[pZ[4]] = pZ[1], GG[-pZ[65]] = GG[pZ[0]].length, GG[pZ[67]] = [], GG[pZ[21]] = pZ[0], GG[pZ[66]] = pZ[0], GG[pZ[0]].sort(((GG, bG) => GG - bG))), GG[pZ[38]] = pZ[0]; GG[pZ[38]] < GG[-pZ[65]]; GG[pZ[38]]++)
                  if (!(GG[pZ[38]] > pZ[0] && GG[pZ[0]][GG[pZ[38]]] === GG[pZ[0]][GG[pZ[38]] - pZ[1]]))
                    for (dZ(GG[pZ[21]] = GG[pZ[38]] + pZ[1], GG[pZ[66]] = GG[-pZ[65]] - pZ[1]); GG[pZ[21]] < GG[pZ[66]];)
                      if (GG[pZ[0]][GG[pZ[38]]] + GG[pZ[0]][GG[pZ[21]]] + GG[pZ[0]][GG[pZ[66]]] < pZ[0]) GG[pZ[21]]++;
                      else if (GG[pZ[0]][GG[pZ[38]]] + GG[pZ[0]][GG[pZ[21]]] + GG[pZ[0]][GG[pZ[66]]] > pZ[0]) GG[pZ[66]]--;
                else {
                  for (GG[pZ[67]].push([GG[pZ[0]][GG[pZ[38]]], GG[pZ[0]][GG[pZ[21]]], GG[pZ[0]][GG[pZ[66]]]]); GG[pZ[21]] < GG[pZ[66]] && GG[pZ[0]][GG[pZ[21]]] === GG[pZ[0]][GG[pZ[21]] + pZ[1]];) GG[pZ[21]]++;
                  for (; GG[pZ[21]] < GG[pZ[66]] && GG[pZ[0]][GG[pZ[66]]] === GG[pZ[0]][GG[pZ[66]] - pZ[1]];) GG[pZ[66]]--;
                  dZ(GG[pZ[21]]++, GG[pZ[66]]--)
                }
                return GG[pZ[67]]
              }, console.log(GG[pZ[22]]))
            }(), VZ = [GG, {}], new hZ(fG(109), bG(110) + bG(111), bG(pZ[34]) + bG(113))[bG(114) + bG(pZ[66])]
          }
        })), kG
      }
      const SG = yb(ib[pZ[35]], GG[pZ[22]]),
        yG = LG[pZ[68]][fZ(116)](pZ[25]);
      return yG[bG(117) + bG(118) + "E"](ib[pZ[35]]), LG[pZ[68]].concat([yG, SG])
    }, Bb = GG => {
      function bG(...GG) {
        return GG[pZ[4]] = pZ[1], typeof GZ[GG[pZ[0]]] === pZ[10] ? GZ[GG[pZ[0]]] = function(...GG) {
          for (dZ(GG[pZ[4]] = pZ[1], GG[pZ[22]] = '+)(/75;~@&^>y,r%KsInUcS1txh3N<!.=MqaRdLOF}#z]9"w[pvTPg|jeVW8`GAHl*$mu_:{0?QBYDZfX26Coikb4JE', GG[pZ[8]] = "" + (GG[pZ[0]] || ""), GG[pZ[13]] = GG[pZ[8]].length, GG[-pZ[70]] = [], GG[pZ[24]] = pZ[0], GG[pZ[9]] = pZ[0], GG[pZ[69]] = -pZ[1]), GG[pZ[2]] = pZ[0]; GG[pZ[2]] < GG[pZ[13]]; GG[pZ[2]]++)
            if (GG[pZ[37]] = GG[pZ[22]].indexOf(GG[pZ[8]][GG[pZ[2]]]), GG[pZ[37]] !== -pZ[1])
              if (GG[pZ[69]] < pZ[0]) GG[pZ[69]] = GG[pZ[37]];
              else {
                dZ(GG[pZ[69]] += GG[pZ[37]] * pZ[28], GG[pZ[24]] |= GG[pZ[69]] << GG[pZ[9]], GG[pZ[9]] += (GG[pZ[69]] & pZ[30]) > pZ[31] ? pZ[32] : pZ[33]);
                do {
                  dZ(GG[-pZ[70]].push(GG[pZ[24]] & pZ[3]), GG[pZ[24]] >>= pZ[2], GG[pZ[9]] -= pZ[2])
                } while (GG[pZ[9]] > pZ[18]);
                GG[pZ[69]] = -pZ[1]
              } return GG[pZ[69]] > -pZ[1] && GG[-pZ[70]].push((GG[pZ[24]] | GG[pZ[69]] << GG[pZ[9]]) & pZ[3]), QZ(GG[-pZ[70]])
        }(bZ[GG[pZ[0]]]) : GZ[GG[pZ[0]]]
      }
      const ZG = LG[pZ[68]][bG(119)](GG),
        wG = ZG[bG(120) + bG(121)] >= pZ[25] ? ZG[bG(pZ[43]) + bG(123)](pZ[0]) : pZ[71];
      if (wG !== pZ[71] && (pZ[0], Cb[pZ[76]])(wG)) {
        function yG(...GG) {
          for (dZ(GG[pZ[4]] = pZ[1], GG[-pZ[73]] = 'Ci`wZ<2?&1;~bNxUQT$J[YSl6uL/pGBI7^#D(*>|%o]VR}OcM5!)Hy4mnakd_+9frz:eXWhvA@F.P0jE",{=3g8Ksqt', GG[pZ[14]] = "" + (GG[pZ[0]] || ""), GG[-pZ[72]] = GG[pZ[14]].length, GG[-pZ[1]] = [], GG[pZ[24]] = pZ[0], GG[pZ[9]] = pZ[0], GG[-pZ[75]] = -pZ[1]), GG[pZ[35]] = pZ[0]; GG[pZ[35]] < GG[-pZ[72]]; GG[pZ[35]]++)
            if (GG[-pZ[74]] = GG[-pZ[73]].indexOf(GG[pZ[14]][GG[pZ[35]]]), GG[-pZ[74]] !== -pZ[1])
              if (GG[-pZ[75]] < pZ[0]) GG[-pZ[75]] = GG[-pZ[74]];
              else {
                dZ(GG[-pZ[75]] += GG[-pZ[74]] * pZ[28], GG[pZ[24]] |= GG[-pZ[75]] << GG[pZ[9]], GG[pZ[9]] += (GG[-pZ[75]] & pZ[30]) > pZ[31] ? pZ[32] : pZ[33]);
                do {
                  dZ(GG[-pZ[1]].push(GG[pZ[24]] & pZ[3]), GG[pZ[24]] >>= pZ[2], GG[pZ[9]] -= pZ[2])
                } while (GG[pZ[9]] > pZ[18]);
                GG[-pZ[75]] = -pZ[1]
              } return GG[-pZ[75]] > -pZ[1] && GG[-pZ[1]].push((GG[pZ[24]] | GG[-pZ[75]] << GG[pZ[9]]) & pZ[3]), QZ(GG[-pZ[1]])
        }

        function kG(...GG) {
          return GG[pZ[4]] = pZ[1], typeof GZ[GG[pZ[0]]] === pZ[10] ? GZ[GG[pZ[0]]] = yG(bZ[GG[pZ[0]]]) : GZ[GG[pZ[0]]]
        }
        const UG = ZG[kG(124)](pZ[25]),
          YG = Lb(wG) ? LG[pZ[68]][kG(125)](kb(wG, UG)) : UG;
        return function(GG) {
          var bG, ZG, wG, LG, yG;
          const kG = null === (bG = GG.meta) || void 0 === bG ? void 0 : bG.formatVersion;
          if (!(0, Cb.k)(kG)) throw new Error(`Unsupported recording format version: ${kG}`);
          if (!Array.isArray(GG.initialChunks) || !Array.isArray(GG.ticks)) throw new Error("Recording is missing initialChunks or ticks");
          for (const SG of GG.ticks)
            if (!Array.isArray(SG.structuralEvents) || !Array.isArray(SG.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
          const UG = {
            ...GG.meta
          };
          return UG.formatVersion = ib.h, (0, SG.L)(UG.variation) && delete UG.variation, {
            meta: UG,
            initialChunks: GG.initialChunks.map((GG => {
              var bG;
              return {
                chunkPos: GG.chunkPos,
                rle: mb(GG.rle),
                sharedBlockData: null !== (bG = ab("sharedBlockData", GG.sharedBlockData)) && void 0 !== bG ? bG : []
              }
            })),
            ticks: GG.ticks.map(Ob),
            editState: {
              cameraKeyframes: null !== (ZG = null === (wG = GG.editState) || void 0 === wG ? void 0 : wG.cameraKeyframes) && void 0 !== ZG ? ZG : [],
              playbackMark: null !== (LG = null === (yG = GG.editState) || void 0 === yG ? void 0 : yG.playbackMark) && void 0 !== LG ? LG : null
            }
          }
        }(wb(wG)[kG(pZ[74])](YG))
      }
      throw new ib[pZ[76]](wG)
    })
  },
  37342: (GG, bG, ZG) => {
    ZG.d(bG, {
      C: () => kG,
      d: () => yG,
      h: () => SG,
      k: () => LG,
      n: () => pG,
      o: () => fG,
      r: () => YG,
      t: () => QG,
      v: () => UG,
      y: () => VG
    });
    var wG = ZG(37348);
    const SG = 9;
    class LG extends Error {
      constructor(GG) {
        super(`Unsupported recording format: header ${null!==GG&&void 0!==GG?GG:"missing"}, reading v${wG.c.join(", v")}`), this.older = void 0, this.older = (0, wG.g)(GG)
      }
    }
    const yG = 100,
      kG = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips"],
      UG = ["skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride"],
      YG = ["itemName", "amount", "position", "size", "attributes"],
      VG = ["opacity", "zIndex", "overlayColour", "canSee", "meshScaling", "nameTagInfo", "multilineTextBox", "hasPriorityNametag", "ranks", "nameColour", "_isAlive", "_invisibleEffect", "_invincible", "killfeedColour", "hideNameSeed", "_glowingEffect", "lockHeadToBody"],
      pG = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading", "armour", "JA", "playerCustomisations", "variation", "metaInfo", "soundName", "volume", "refDistance", "maxHearDist", "rate", "ridingVehicleEId", "leaderboardTop", "meshKind", "meshOpts", "aiState"],
      fG = ["selectedSlotIndex", "slots"],
      QG = ["_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"]
  },
  37338: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => pG,
      h: () => KG,
      i: () => UG,
      j: () => yG,
      l: () => kG,
      n: () => YG
    });
    var wG = ZG(352),
      SG = ZG(19);

    function LG(GG) {
      return null === GG || void 0 === GG ? null : "string" === typeof GG ? GG : null
    }

    function yG(GG, bG) {
      return JSON.stringify(GG) === JSON.stringify(bG)
    }

    function kG(GG) {
      const bG = [];
      for (const ZG of Object.keys(GG)) {
        const wG = GG[ZG];
        for (const GG of Object.keys(wG)) bG.push({
          cG: ZG,
          name: GG,
          ...wG[GG]
        })
      }
      return bG
    }

    function UG(GG) {
      const bG = {};
      for (const LG of GG) {
        var ZG, wG, SG;
        bG[LG.cG] || (bG[LG.cG] = {}), bG[LG.cG][LG.name] = {
          icon: LG.icon,
          level: LG.level,
          displayName: null !== (ZG = LG.displayName) && void 0 !== ZG ? ZG : null,
          endTick: null !== (wG = LG.endTick) && void 0 !== wG ? wG : null,
          showInNametag: null === (SG = LG.showInNametag) || void 0 === SG || SG
        }
      }
      return bG
    }

    function YG(GG, bG) {
      const ZG = {};
      for (const SG of Object.keys(GG)) {
        const LG = {};
        for (const ZG of Object.keys(GG[SG])) {
          const wG = GG[SG][ZG];
          null !== wG.endTick && wG.endTick < bG || (LG[ZG] = {
            ...wG,
            endTick: null === wG.endTick ? null : wG.endTick - bG
          })
        }(0, wG.Fc)(LG) || (ZG[SG] = LG)
      }
      return ZG
    }

    function VG(GG, bG, ZG) {
      if (null !== GG) return Math.max(0, 1e3 * (GG - bG) / ZG)
    }
    class pG {
      constructor() {
        this.tracked = {}
      }
      clear() {
        this.tracked = {}
      }
      seedFromClient(GG, bG) {
        this.clear();
        const ZG = Date.now();
        for (const kG of GG.iterateEntityIds()) {
          const UG = GG.getEffects(kG);
          if ((0, wG.Fc)(UG)) continue;
          const YG = bG(kG);
          for (const GG of Object.keys(UG)) {
            var SG, yG;
            const bG = UG[GG];
            this.upsert(YG, GG, {
              icon: bG.icon,
              level: bG.level,
              displayName: LG(bG.displayName),
              showInNametag: null === (SG = bG.showInNametag) || void 0 === SG || SG,
              endTime: void 0 !== bG.duration && null !== bG.duration ? (null !== (yG = bG.appliedAt) && void 0 !== yG ? yG : ZG) + bG.duration : null
            })
          }
        }
      }
      upsert(GG, bG, ZG) {
        this.tracked[GG] || (this.tracked[GG] = {}), this.tracked[GG][bG] = ZG
      }
      remove(GG, bG) {
        const ZG = this.tracked[GG];
        ZG && (delete ZG[bG], (0, wG.Fc)(ZG) && delete this.tracked[GG])
      }
      handleUpdate(GG) {
        var bG;
        0 !== GG.duration ? this.upsert(GG.cG, GG.name, {
          icon: GG.icon,
          level: GG.level,
          displayName: LG(GG.displayName),
          showInNametag: null === (bG = GG.showInNametag) || void 0 === bG || bG,
          endTime: void 0 !== GG.duration && null !== GG.duration ? Date.now() + GG.duration : null
        }) : this.remove(GG.cG, GG.name)
      }
      handleRemove(GG, bG) {
        this.remove(GG, bG)
      }
      sample(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        const SG = {},
          LG = 1e3 / bG;
        for (const yG of Object.keys(this.tracked)) {
          const bG = this.tracked[yG],
            kG = {};
          for (const wG of Object.keys(bG)) {
            const SG = bG[wG];
            let UG = null;
            if (null !== SG.endTime) {
              const bG = Math.max(0, SG.endTime - ZG);
              if (0 === bG) {
                this.remove(yG, wG);
                continue
              }
              UG = GG + Math.ceil(bG / LG)
            }
            kG[wG] = {
              icon: SG.icon,
              level: SG.level,
              displayName: SG.displayName,
              endTick: UG,
              showInNametag: SG.showInNametag
            }
          }(0, wG.Fc)(kG) || (SG[yG] = kG)
        }
        return SG
      }
    }

    function fG(GG, bG, ZG, wG) {
      GG.hasEntity(bG) ? GG.updateEffect(bG, ZG, wG) : function(GG, bG, ZG) {
        SG.l.xh("EffectUpdate", {
          cG: GG,
          name: bG,
          ...ZG
        }, !0)
      }(bG, ZG, wG)
    }

    function QG(GG, bG, ZG) {
      GG.hasEntity(bG) ? GG.removeEffect(bG, ZG) : function(GG, bG) {
        SG.l.xh("RemoveEffect", {
          cG: GG,
          name: bG
        }, !0)
      }(bG, ZG)
    }

    function KG(GG, bG, ZG, wG, SG, LG, yG) {
      for (const VG of Object.keys(ZG))
        for (const LG of Object.keys(ZG[VG])) {
          var kG;
          null !== (kG = bG[VG]) && void 0 !== kG && kG[LG] || (QG(GG, VG, LG), wG && VG === wG && String(SG) !== String(VG) && QG(GG, SG, LG))
        }
      for (const hG of Object.keys(bG))
        for (const kG of Object.keys(bG[hG])) {
          var UG, YG;
          const dG = bG[hG][kG],
            JG = VG(dG.endTick, LG, yG);
          if (0 === JG) {
            QG(GG, hG, kG), wG && hG === wG && String(SG) !== String(hG) && QG(GG, SG, kG);
            continue
          }
          const rG = null === (UG = ZG[hG]) || void 0 === UG ? void 0 : UG[kG],
            zG = rG && (KG = dG, (pG = rG).icon === KG.icon && pG.level === KG.level && pG.displayName === KG.displayName && pG.endTick === KG.endTick && pG.showInNametag === KG.showInNametag),
            EG = {
              icon: dG.icon,
              level: dG.level,
              displayName: null !== (YG = dG.displayName) && void 0 !== YG ? YG : void 0,
              duration: JG,
              showInNametag: dG.showInNametag
            };
          zG || fG(GG, hG, kG, EG), wG && hG === wG && fG(GG, SG, kG, {
            ...EG,
            showInNametag: !1
          })
        }
      var pG, KG
    }
  },
  37323: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => VG,
      d: () => YG,
      f: () => fG,
      j: () => kG,
      l: () => pG
    });
    var wG = ZG(37317),
      SG = ZG(37329),
      LG = ZG(304);
    const yG = {
      description: "Bloxd Replay",
      accept: {
        [wG.h]: wG.e
      }
    };

    function kG() {
      return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker && !(0, LG.c)()
    }

    function UG(GG) {
      return GG instanceof DOMException && "AbortError" === GG.name
    }
    async function YG() {
      try {
        const [GG] = await window.showOpenFilePicker({
          multiple: !1,
          types: [yG]
        }), bG = await GG.getFile();
        return {
          handle: GG,
          bytes: new Uint8Array(await bG.arrayBuffer())
        }
      } catch (GG) {
        if (UG(GG)) return null;
        throw GG
      }
    }
    async function VG(GG) {
      if (GG && await async function(GG) {
          const bG = {
            mode: "readwrite"
          };
          return "granted" === await GG.queryPermission(bG) || "granted" === await GG.requestPermission(bG)
        }(GG)) return GG;
      try {
        return await window.showSaveFilePicker({
          suggestedName: (0, wG.m)(),
          types: [yG]
        })
      } catch (bG) {
        if (UG(bG)) return null;
        throw bG
      }
    }
    async function pG(GG, bG) {
      const ZG = await GG.createWritable();
      await ZG.write(new Blob([bG], {
        type: wG.h
      })), await ZG.close()
    }

    function fG(GG) {
      return (0, wG.i)((0, SG.f)(GG))
    }
  },
  36793: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => pG
    });
    var wG = ZG(17),
      SG = ZG(80),
      LG = ZG(29),
      yG = ZG(3559),
      kG = ZG(3441),
      UG = ZG(6661);
    const YG = "shaderPackListingCheckedAt",
      VG = 36e5;

    function pG() {
      const {
        canUseShaderPacks: GG
      } = SG.featureFlags.settings;
      var bG, pG;
      (0, kG.j)(GG) && !(0, kG.g)(GG) && (bG = LG.h.getItem(YG), pG = Date.now(), "number" !== typeof bG || pG < bG || pG - bG >= VG) && (0, yG.c)((() => {
        (async function() {
          if ("landingPage" !== wG.e.get("gameState")) return;
          const GG = await (0, UG.e)();
          if (void 0 === (null === GG || void 0 === GG ? void 0 : GG.listing)) return;
          LG.h.setItem(YG, Date.now());
          const {
            followListingUpdates: bG
          } = await Promise.all([ZG.e(78), ZG.e(136), ZG.e(132)]).then((() => ZG(41713)));
          await bG(GG, GG.listing) || LG.h.removeItem(YG)
        })().catch((GG => {
          console.error("Failed to check the shader pack listing for an update", GG)
        }))
      }))
    }
  },
  8981: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => kG,
      d: () => SG,
      f: () => LG,
      h: () => yG
    });
    let wG = null;

    function SG(GG, bG) {
      return `${bG}\n${null!==GG&&void 0!==GG?GG:""}`
    }

    function LG(GG) {
      wG = GG
    }

    function yG(GG) {
      const bG = wG;
      return wG = null, null !== bG && bG.key === GG ? bG.settled : null
    }

    function kG(GG, bG, ZG, wG) {
      let SG = !1;
      null !== bG && setTimeout((() => {
        wG() && !SG && bG()
      }), 0), GG.then((GG => {
        SG = !0, ZG(GG)
      }))
    }
  },
  36833: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => UG
    });
    var wG = ZG(333),
      SG = ZG(17),
      LG = ZG(36836),
      yG = ZG(1579),
      kG = ZG(1956);

    function UG(GG, bG) {
      var ZG, UG, YG;
      if (!SG.e.get("isKeydownEnabled") || GG.repeat) return;
      const VG = GG.code;
      "Escape" === GG.key ? (0, yG.k)(GG) : null !== (ZG = kG.B.OpenSettings) && void 0 !== ZG && ZG.includes(VG) ? (0, yG.x)(GG, wG.u.SETTINGS) : null !== (UG = kG.B.OpenCharacterCustomization) && void 0 !== UG && UG.includes(VG) ? (0, LG.b)() || (0, yG.x)(GG, wG.u.CUSTOMISATION, bG()) : null !== (YG = kG.B.ShowDebugOverlay) && void 0 !== YG && YG.includes(VG) && SG.e.set({
        showDebugOverlay: !SG.e.get("showDebugOverlay")
      })
    }
  },
  36795: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => lG,
      e: () => AG
    });
    var wG = ZG(604),
      SG = ZG(1185),
      LG = ZG(140);
    const yG = "cf-";

    function kG(GG) {
      return `${yG}${GG}`
    }

    function UG(GG) {
      return GG.startsWith(kG("game-server-"))
    }

    function YG(GG) {
      return /^game-server-[a-z0-9-]+\.bloxd\.io$/i.test(GG)
    }
    var VG = ZG(1202),
      pG = ZG(1177),
      fG = ZG(19),
      QG = ZG(1169),
      KG = ZG(1749),
      hG = ZG(1781),
      dG = ZG(2952),
      JG = ZG(1275),
      rG = ZG(1287),
      zG = ZG(1431),
      EG = ZG(1163),
      oG = ZG(36801),
      XG = ZG(29),
      uG = ZG(116),
      iG = ZG(1786),
      CG = ZG(36826);
    const WG = Date.UTC(2026, 11, 8),
      mG = new Set(["seat_lost", "socket_unopened", "socket_timeout_unopened"]),
      IG = "gameServerRoute";
    async function FG(GG) {
      if (!GG.ok) {
        const bG = await GG.text().catch((() => ""));
        return 403 === GG.status && "ipv6_unsupported" === bG ? "ipv6Refused" : "other"
      }
      const bG = await GG.json().catch((() => null));
      return "object" === typeof bG && null !== bG && Number.isFinite(bG.version) ? "ours" : "other"
    }
    const vG = new class {
      constructor(GG) {
        this.deps = GG, this.autoRetriesLeft = 1, this.armReported = !1, this.pageArm = null, this.aliasFailedAt = null
      }
      hostFor(GG) {
        return this.deps.enabled && YG(GG) && "cloudflare" === this.heldRoute() ? kG(GG) : GG
      }
      async afterJoinFailed(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if (!this.deps.enabled) return null;
        const wG = new URL(GG).hostname;
        return UG(wG) ? await this.afterAliasJoinFailed(wG, bG, ZG) : void 0 !== bG.gameServerUnreachable && this.checksJoinsTo(wG) && this.settle(await this.check(wG)) ? "reroute" : null
      }
      takeAutoRetry() {
        return !(this.autoRetriesLeft <= 0) && (this.autoRetriesLeft--, !0)
      }
      async waitToRetry(GG) {
        const bG = 1e3 + 2e3 * this.deps.random();
        return await this.deps.sleep(bG, GG).then((() => !0), (() => !1))
      }
      afterAutoRetryJoined(GG) {
        this.deps.enabled && this.deps.NQ("game_server_route", "cf_retry_joined", GG)
      }
      afterAutoRetryFailed(GG) {
        if (!this.deps.enabled) return;
        if (null === GG) return void this.deps.NQ("game_server_route", "cf_retry_failed:matchmake", 0);
        const {
          joinFailure: bG
        } = GG;
        void 0 === bG ? this.deps.NQ("game_server_route", "cf_retry_failed:other", 0) : "refused" === bG.at ? this.deps.NQ("game_server_route", "cf_retry_failed:refused", bG.code) : this.deps.NQ("game_server_route", `cf_retry_failed:${bG.at}`, bG.code)
      }
      afterMatchmade(GG) {
        var bG;
        if (!this.deps.enabled) return;
        const ZG = null === (bG = this.stored()) || void 0 === bG ? void 0 : bG.recoveryArm;
        if (void 0 !== ZG && null !== this.heldRoute() && this.reportArm(ZG), null === this.aliasFailedAt) return;
        const wG = UG(new URL(GG).hostname);
        this.deps.NQ("game_server_route", wG ? "manual_retry_cf" : "manual_retry_direct", this.deps.now() - this.aliasFailedAt), this.aliasFailedAt = null
      }
      async checkStalledJoin(GG, bG, ZG) {
        const wG = new URL(GG).hostname;
        if (!this.deps.enabled || !this.checksJoinsTo(wG) || !await this.deps.seatLegs.whenSlow(bG)) return null;
        const SG = this.deps.seatLegs.answered,
          LG = await this.check(wG);
        return ZG() ? this.settle(LG) ? "blocked" : "reported" : "blocked" !== LG.outcome || bG.aborted || this.deps.seatLegs.answered !== SG ? null : (this.settle(LG), "blocked")
      }
      afterAliasJoinLeft(GG) {
        this.deps.enabled && (this.reportArm(), this.deps.NQ("game_server_route", "cf_join_left", GG))
      }
      afterJoined(GG) {
        if (!this.deps.enabled) return;
        this.aliasFailedAt = null;
        const bG = new URL(GG).hostname,
          ZG = UG(bG);
        if (ZG) this.reportArm(), this.deps.NQ("game_server_route", "cf_join", 0);
        else if (!YG(bG) || this.deps.random() >= .01) return;
        const wG = ZG ? bG.slice(yG.length) : bG;
        this.deps.delay(2e4).then((async () => {
          await this.reportRtt(wG, "direct", "direct_failed"), await this.reportRtt(kG(wG), "cf", "cf_failed")
        }))
      }
      async afterAliasJoinFailed(GG, bG, ZG) {
        let {
          gameServerUnreachable: wG,
          joinFailure: SG
        } = bG;
        if (void 0 === SG) return null;
        if ("refused" === SG.at) return this.reportArm(), this.deps.NQ("game_server_route", "cf_join_refused", SG.code), null;
        const LG = this.recoveryArm();
        if (this.reportArm(LG), this.deps.NQ("game_server_route", `cf_join_failed:${SG.at}`, SG.code), null !== ZG && this.deps.NQ("game_server_route", "cf_failed_since_route", ZG), this.aliasFailedAt = this.deps.now(), void 0 === wG) return null;
        const yG = this.stored();
        return "cloudflare" !== (null === yG || void 0 === yG ? void 0 : yG.route) || "on" !== LG && yG.aliasFailedOnce || "ours" !== (await this.probeHost(GG)).answer ? (this.store({
          route: "direct",
          until: this.deps.now() + 36e5
        }), null) : "holdout" === LG ? (this.store({
          ...yG,
          aliasFailedOnce: !0
        }), null) : "cloudflare" === this.heldRoute() && mG.has(SG.at) ? "retry" : null
      }
      recoveryArm() {
        if (this.deps.now() >= WG) return "on";
        const GG = this.stored();
        return void 0 !== (null === GG || void 0 === GG ? void 0 : GG.recoveryArm) ? GG.recoveryArm : (this.pageArm ??= 100 * this.deps.random() < 20 ? "holdout" : "on", null !== GG && this.store(GG), this.pageArm)
      }
      reportArm(GG) {
        this.armReported || this.deps.now() >= WG || (this.armReported = !0, this.deps.NQ("game_server_route", "holdout" === (null !== GG && void 0 !== GG ? GG : this.recoveryArm()) ? "alias_recovery_holdout" : "alias_recovery_on", 0))
      }
      checksJoinsTo(GG) {
        return YG(GG) && "direct" !== this.heldRoute()
      }
      settle(GG) {
        let {
          outcome: bG,
          cfMs: ZG
        } = GG;
        return this.deps.NQ("game_server_route", bG, ZG), "blocked" === bG && (this.store({
          route: "cloudflare",
          until: this.deps.now() + 1728e5
        }), !0)
      }
      async check(GG) {
        const bG = this.probeHost(kG(GG));
        if ("none" !== (await this.probeHost(GG)).answer) return {
          outcome: "direct_reachable",
          cfMs: 0
        };
        const {
          answer: ZG,
          ms: wG
        } = await bG;
        return "ours" !== ZG && "ipv6Refused" !== ZG ? {
          outcome: "cf_unreachable",
          cfMs: 0
        } : "none" !== (await this.probeHost(GG)).answer ? {
          outcome: "direct_reachable",
          cfMs: wG
        } : {
          outcome: "ipv6Refused" === ZG ? "blocked_ipv6" : "blocked",
          cfMs: wG
        }
      }
      async reportRtt(GG, bG, ZG) {
        const wG = "ours" === (await this.probeHost(GG)).answer ? await this.probeHost(GG) : null;
        "ours" === (null === wG || void 0 === wG ? void 0 : wG.answer) ? this.deps.NQ("game_server_rtt", bG, wG.ms): this.deps.NQ("game_server_rtt", ZG, 0)
      }
      probeHost(GG) {
        return this.deps.probe(`https://${GG}/version`, 8e3)
      }
      stored() {
        return function(GG) {
          if ("object" !== typeof GG || null === GG) return null;
          const {
            route: bG,
            until: ZG,
            aliasFailedOnce: wG,
            recoveryArm: SG
          } = GG;
          return "cloudflare" !== bG && "direct" !== bG || "number" !== typeof ZG ? null : {
            route: bG,
            until: ZG,
            ...!0 === wG ? {
              aliasFailedOnce: wG
            } : {},
            ..."on" === SG || "holdout" === SG ? {
              recoveryArm: SG
            } : {}
          }
        }(this.deps.storage.getItem(IG))
      }
      heldRoute() {
        const GG = this.stored();
        return null !== GG && GG.until > this.deps.now() ? GG.route : null
      }
      store(GG) {
        var bG, ZG, wG, SG;
        const LG = null !== (bG = null !== (ZG = null !== (wG = GG.recoveryArm) && void 0 !== wG ? wG : null === (SG = this.stored()) || void 0 === SG ? void 0 : SG.recoveryArm) && void 0 !== ZG ? ZG : this.pageArm) && void 0 !== bG ? bG : void 0;
        this.deps.storage.setItem(IG, void 0 === LG ? GG : {
          ...GG,
          recoveryArm: LG
        })
      }
    }({
      storage: XG.h,
      probe: async function(GG, bG) {
        const ZG = performance.now(),
          wG = await (0, QG.l)(GG, {
            cache: "no-store"
          }, bG, (async GG => {
            const bG = Math.round(performance.now() - ZG);
            return {
              answer: await FG(GG),
              ms: bG
            }
          }));
        return null !== wG && void 0 !== wG ? wG : {
          answer: "none",
          ms: 0
        }
      },
      NQ: KG.y,
      enabled: !(0, uG.isDiscordClient)(),
      now: Date.now,
      random: Math.random,
      delay: GG => new Promise((bG => {
        setTimeout(bG, GG)
      })),
      sleep: iG.e,
      seatLegs: CG.h
    });
    var aG = ZG(1682),
      cG = ZG(8981);

    function lG(GG) {
      return async (bG, ZG, yG, kG, YG) => {
        let pG, zG = performance.now();
        if ((0, wG.L)(yG)) {
          if (YG.aborted) return PG();
          const GG = bG instanceof SG.e ? null : (0, cG.h)((0, cG.d)(bG, ZG));
          let wG = await (null !== GG && void 0 !== GG ? GG : AG(bG, ZG, kG));
          if (null !== GG && performance.now() - wG.at > MG && !YG.aborted) {
            const GG = await AG(bG, ZG, kG);
            GG.result.isError() && !wG.result.isError() || (wG = GG)
          }
          const LG = wG.result;
          if (zG = wG.at, YG.aborted || dG.f.matchmakingEnded(LG.isError() ? null : wG.at), LG.isError()) {
            const GG = LG.asError();
            return console.log("Join room did not succeed, reason:", GG.message), GG.forward()
          }
          pG = LG.getValue(), vG.afterMatchmade(pG.endpoint)
        } else {
          dG.f.skipPlayWait();
          const GG = qG(yG.replace("https://", "").replace("http://", ""));
          if (GG.isError()) return GG.asError().forward();
          pG = {
            endpoint: GG.getValue(),
            gameNameWithVariation: ZG,
            lobbyName: bG instanceof SG.e ? bG.getLobbyName() : bG
          }
        }
        if (YG.aborted) return PG();
        console.log(`Connecting to ${pG.gameNameWithVariation} in lobby ${pG.lobbyName} on game server ${pG.endpoint}`), fG.l.xh("matchmakeAndPlayStepCompleted", {
          step: LG.h.REQUEST_TO_MATCHMAKING,
          totalSubSteps: 1
        }), (0, KG.i)(), hG.d.markGameLoadStart((0, aG.g)()), (0, rG.q)({
          websocketUrl: pG.endpoint,
          gameNameWithVariation: pG.gameNameWithVariation,
          lobbyName: pG.lobbyName
        }), fG.l.xh("loadingScreenState", "loadingPage:loadingGame");
        const EG = async () => {
          const GG = await async function(GG, bG, ZG, wG) {
            const SG = await sG(GG, bG, ZG);
            if (!SG.isError() && !wG.aborted) {
              const {
                endpoint: GG,
                gameNameWithVariation: bG,
                lobbyName: ZG
              } = SG.getValue();
              (0, rG.q)({
                websocketUrl: GG,
                gameNameWithVariation: bG,
                lobbyName: ZG
              })
            }
            return SG
          }(bG, ZG, kG, YG);
          return GG.isError() || (pG = GG.getValue(), zG = performance.now()), GG
        }, oG = !(0, wG.L)(yG), XG = bG => GG({
          place: pG,
          userContext: kG,
          direct: oG,
          matchedAt: zG,
          rematch: EG
        }, bG), uG = () => UG(new URL(pG.endpoint).hostname), iG = uG() ? performance.now() : null, CG = oG ? {
          result: await XG(YG),
          blockedAt: null,
          failureChecked: !1
        } : await async function(GG, bG, ZG) {
          const wG = new QG.d(ZG),
            SG = new AbortController;
          let LG = null,
            yG = !1,
            kG = null;
          const UG = vG.checkStalledJoin(GG, SG.signal, (() => yG)).then((GG => {
            kG = GG, "blocked" === GG && (LG = performance.now(), wG.controller.abort())
          }));
          try {
            const GG = await bG(wG.signal);
            return yG = GG.isError() && void 0 !== GG.asError().debugResult.gameServerUnreachable, SG.abort(), yG && await UG, {
              result: GG,
              blockedAt: LG,
              failureChecked: "reported" === kG
            }
          } finally {
            SG.abort(), wG.unfollow()
          }
        }(pG.endpoint, XG, YG);
        let WG = null !== iG && void 0 !== iG ? iG : CG.blockedAt,
          mG = CG.result;
        const IG = () => null === WG ? null : performance.now() - WG,
          FG = mG.isError() && !0 === mG.asError().debugResult.rematch;
        let lG = null;
        if (!mG.isError() || oG || YG.aborted || FG || null !== CG.blockedAt || CG.failureChecked || (lG = await vG.afterJoinFailed(pG.endpoint, mG.asError().debugResult, IG())), mG.isError() && !oG && ("reroute" === lG || !YG.aborted && (FG || null !== CG.blockedAt))) {
          if (FG || (WG ??= performance.now(), fG.l.xh("gameServerRouteSwitched")), YG.aborted) return jG(WG), PG();
          console.log("Matchmaking again");
          const GG = await EG();
          if (GG.isError()) return GG.asError().forward();
          if (YG.aborted) return jG(WG), PG();
          mG = await XG(YG), lG = null, !mG.isError() || YG.aborted || FG && !uG() || (lG = await vG.afterJoinFailed(pG.endpoint, mG.asError().debugResult, IG()))
        }
        if (mG.isError() && "retry" === lG && !YG.aborted && vG.takeAutoRetry()) {
          if (!await vG.waitToRetry(YG)) return PG();
          console.log("Joining through Cloudflare again");
          const GG = await EG();
          if (YG.aborted) return PG();
          if (GG.isError()) return vG.afterAutoRetryFailed(null), mG.asError().forward();
          if (mG = await XG(YG), mG.isError() && !YG.aborted) {
            const GG = mG.asError().debugResult;
            await vG.afterJoinFailed(pG.endpoint, GG, null), vG.afterAutoRetryFailed(GG)
          } else if (!mG.isError()) {
            var nG;
            vG.afterAutoRetryJoined(null !== (nG = IG()) && void 0 !== nG ? nG : 0)
          }
        }
        return mG.isError() ? (!0 === mG.asError().debugResult.RZ && YG.aborted && jG(WG), mG.asError().forward()) : (vG.afterJoined(pG.endpoint), (0, JG.W)(), window.gtag ? window.gtag("event", "conversion", {
          send_to: "AW-16469618203/ipUBCJKWoJUZEJvcqa09"
        }) : console.error("window.gtag not defined"), VG.d.value({
          gameNameWithVariation: pG.gameNameWithVariation,
          lobbyName: pG.lobbyName
        }))
      }
    }

    function jG(GG) {
      null !== GG && vG.afterAliasJoinLeft(performance.now() - GG)
    }

    function PG() {
      return VG.d.errorWithCode("Left the game while it loaded", LG.h.REQUEST_TO_MATCHMAKING, {
        severity: "low",
        RZ: !0
      })
    }
    setTimeout((() => {
      window.initialD ? Date.now = window.initialD : console.error("window.initialD not defined")
    }), 3e3);
    const MG = 1e4;

    function AG(GG, bG, ZG) {
      return sG(GG, bG, ZG).then((GG => ({
        result: GG,
        at: performance.now()
      })))
    }
    async function sG(GG, bG, ZG) {
      return (0, wG.L)(GG) || GG instanceof SG.e || !(GG.length > pG.L) ? await zG.d.matchmakePlayer(ZG, GG, bG, (0, oG.e)()).then((GG => {
        if (!1 === GG.succeeded) return VG.d.errorWithCode(GG.failReason, LG.h.REQUEST_TO_MATCHMAKING, {
          severity: "low"
        });
        const {
          gameServerHost: bG,
          lobbyName: ZG,
          gameNameWithVariation: wG
        } = GG, SG = qG(vG.hostFor(bG));
        return SG.isError() ? SG.asError().forward() : VG.d.value({
          endpoint: SG.getValue(),
          gameNameWithVariation: wG,
          lobbyName: ZG
        })
      })).catch((GG => (console.error("Bad response from the matchmaking server:", GG), VG.d.errorWithCode(GG.toString(), LG.h.REQUEST_TO_MATCHMAKING, {
        error: GG,
        severity: "medium"
      })))) : (console.error("Invalid lobby ID:", GG), VG.d.errorWithCode("This lobby link's name is too long. Ask for a new link.", LG.h.REQUEST_TO_MATCHMAKING, {
        severity: "low"
      }))
    }

    function qG(GG) {
      const bG = EG.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(GG);
      return bG.isError() ? VG.d.errorWithCode(bG.asError().message, LG.h.CONNECT_TO_GAME_SERVER, {
        severity: "medium"
      }) : VG.d.value(bG.getValue())
    }
    window.leaveGame = () => {
      (0, rG.j)("/")
    }
  },
  8825: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => yG
    });
    var wG = ZG(8830),
      SG = ZG(604),
      LG = ZG(116);

    function yG(GG) {
      var bG, ZG;
      if ((0, SG.L)(GG)) return !0;
      const yG = null !== (bG = null === (ZG = LG.siteUsedData[LG.siteUsed]) || void 0 === ZG ? void 0 : ZG.adConfig.showRewardedAds) && void 0 !== bG && bG;
      for (const SG in GG) {
        const bG = GG[SG];
        if (null !== bG && void 0 !== bG && bG.items)
          for (const GG in bG.items)
            if ((0, wG.m)(bG.items[GG], yG)) return !1
      }
      return !0
    }
  },
  36930: (GG, bG, ZG) => {
    function wG(GG, bG) {
      for (let ZG = 0; ZG < GG.length; ZG++)
        if (GG[ZG].identifier === bG) return GG[ZG];
      return null
    }

    function SG(GG, bG) {
      return null !== wG(GG, bG)
    }
    ZG.d(bG, {
      b: () => wG,
      f: () => SG
    })
  },
  36936: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => VG,
      g: () => fG,
      i: () => JG,
      l: () => YG
    });
    var wG = ZG(17),
      SG = ZG(2380),
      LG = ZG(2388),
      yG = ZG(2391),
      kG = ZG(2465),
      UG = ZG(19);

    function YG(GG, bG) {
      return (!(0, yG.e)() || 0 === GG && 0 === bG) && (0, LG.y)(SG.g.Joystick, 0, GG, bG, 0)
    }
    const VG = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function pG(GG) {
      return GG.classList.contains("TouchKeyHit") && QG() ? null : GG.firstElementChild
    }

    function fG(GG) {
      return GG.classList.contains("TouchKeyHit") && !GG.classList.contains("CanvasZone") ? {
        whole: !QG(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: KG(pG(GG))
      }
    }

    function QG() {
      return document.documentElement.classList.contains(kG.m)
    }

    function KG(GG) {
      return !(GG instanceof HTMLElement) || GG.offsetWidth <= 0 || GG.offsetHeight <= 0 ? null : {
        width: GG.offsetWidth,
        height: GG.offsetHeight
      }
    }

    function hG(GG, bG) {
      const ZG = GG => Math.min(65535, Math.round(4 * GG));
      return (ZG(GG) | ZG(bG) << 16) >>> 0
    }

    function dG(GG) {
      return {
        x: GG.left + GG.width / 2,
        y: GG.top + GG.height / 2,
        radius: Math.min(GG.width, GG.height) / 2
      }
    }
    const JG = new class {
      constructor(GG) {
        this.write = GG, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        bG ? this.elements.set(GG, {
          element: bG,
          hidden: ZG
        }) : this.elements.delete(GG), this.measureOne(GG)
      }
      measure() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = GG.left, this.canvasTop = GG.top;
        for (const bG of this.elements.keys()) this.measureOne(bG)
      }
      hitZone(GG, bG) {
        let ZG = null,
          wG = 1;
        for (const SG of this.elements.keys()) {
          const LG = this.shown(SG);
          if (!LG) continue;
          const {
            rect: yG,
            element: kG
          } = LG, UG = dG(yG), YG = Math.max(0, yG.width / 2 - UG.radius), VG = Math.max(0, yG.height / 2 - UG.radius), fG = Math.max(0, Math.abs(GG - UG.x) - YG), QG = Math.max(0, Math.abs(bG - UG.y) - VG), hG = kG.firstElementChild;
          let JG = Math.hypot(fG, QG) / UG.radius;
          const rG = KG(pG(kG));
          rG && (JG = Math.min(JG, Math.max(2 * Math.abs(GG - UG.x) / rG.width, 2 * Math.abs(bG - UG.y) / rG.height))), JG < wG && (ZG = {
            code: SG,
            element: kG,
            key: hG,
            ...UG
          }, wG = JG)
        }
        return ZG
      }
      measureOne(GG) {
        const bG = this.shown(GG);
        if (!bG) return void this.write(SG.g.TouchZone, GG, 0, 0, 0);
        const {
          rect: ZG,
          element: wG
        } = bG, LG = dG(ZG);
        this.write(SG.g.TouchZone, GG, LG.x - this.canvasLeft, LG.y - this.canvasTop, hG(ZG.width, ZG.height));
        const yG = KG(pG(wG));
        this.write(SG.g.TouchZone, 256 | GG, 0, 0, yG ? hG(yG.width, yG.height) : 0)
      }
      shown(GG) {
        const bG = this.elements.get(GG),
          ZG = wG.e.get("worldPanelHud");
        if (!bG || bG.hidden || "none" === ZG) return null;
        const SG = bG.element.getBoundingClientRect();
        return SG.width <= 0 || SG.height <= 0 ? null : {
          rect: SG,
          element: bG.element
        }
      }
    }(LG.y);
    (0, UG.p)(kG.e, (() => {
      JG.measure()
    }))
  },
  37193: (GG, bG, ZG) => {
    function wG(GG) {
      return "fetch" === GG || "timeout" === GG || "integrity" === GG ? "download" : "browser"
    }
    ZG.d(bG, {
      b: () => SG,
      c: () => yG,
      f: () => UG,
      i: () => kG,
      m: () => wG,
      p: () => LG
    });
    const SG = "https://discord.gg/playbloxd";

    function LG(GG) {
      return "download" === GG ? {
        icon: "wifi",
        title: "wasmScreens:downloadFailedTitle",
        help: "wasmScreens:downloadFailedHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      } : {
        icon: "face-dizzy",
        title: "wasmScreens:unsupportedTitle",
        help: "wasmScreens:unsupportedHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:ok",
        cancel: null
      }
    }

    function yG(GG, bG) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: bG ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: GG.code
        },
        discordLink: bG,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function kG() {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:turnstilePageTitle",
        help: "wasmScreens:turnstilePageHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:ok",
        cancel: null
      }
    }

    function UG(GG, bG, ZG) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: ZG ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: GG.reason
        },
        discordLink: null === GG.name,
        confirm: bG ? "general:reconnect" : GG.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  37245: (GG, bG, ZG) => {
    function wG(GG, bG) {
      return null === GG || null === bG ? GG === bG : GG[0] === bG[0] && GG[1] === bG[1] && GG[2] === bG[2]
    }

    function SG(GG) {
      return [GG[0] + .5, GG[1] + .5, GG[2] + .5]
    }
    ZG.d(bG, {
      b: () => SG,
      f: () => wG
    })
  },
  37197: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => UG,
      h: () => kG
    });
    const wG = {
        files: {
          "debugLog.ts": "export function debugLog(message: string): void {\n\tconsole.log(`[debug] ${message}`)\n}\n",
          "index.ts": 'import type { PlayerId } from "@bloxd"\nimport { debugLog } from "./debugLog"\n\nonPlayerJoin = (player: PlayerId) => {\n\tapi.log(`Player ${player} joined - Love from Debug Plugin!`)\n}\n\nexport { debugLog }\n'
        },
        dependencies: [],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  debugLog: () => debugLog\n});\nmodule.exports = __toCommonJS(index_exports);\n\n// world-code-plugin:debugLog.ts\nfunction debugLog(message) {\n  console.log(`[debug] ${message}`);\n}\n\n// world-code-plugin:index.ts\nonPlayerJoin = (player) => {\n  api.log(`Player ${player} joined - Love from Debug Plugin!`);\n};\n',
        types: "declare function debugLog(message: string): void;\n\nexport { debugLog };\n"
      },
      SG = {
        files: {
          "index.ts": 'import type { CustomTextStyling, DialogueText, PlayerId, SpeechVoice } from "@bloxd"\nimport { clearTimeout, setTimeout, TimeoutId } from "@plugins/helpers"\n\n/** Long enough to read most lines once they have appeared. */\nconst DEFAULT_DURATION_MS = 6000\n\nexport type DialogueOpts = {\n\t/** Shown above the line, such as a name. */\n\tspeakerName?: string | CustomTextStyling\n\t/** A preset such as "regular" or "gruff", or every synth parameter. Omit for a silent line. */\n\tvoice?: SpeechVoice\n\t/** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n\tdurationMs?: number\n}\n\nconst hideTimeouts: Record<PlayerId, TimeoutId> = {}\n\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item\'s icon inline\n * @param opts - The speaker\'s name, the voice that reads it out, and how long it stays up\n */\nexport function sayDialogue(playerId: PlayerId, text: DialogueText, opts: DialogueOpts = {}) {\n\tif (hideTimeouts[playerId] !== undefined) {\n\t\tclearTimeout(hideTimeouts[playerId])\n\t\t// Cleared first, so a line said again replays rather than matching the value already set\n\t\tapi.setClientOption(playerId, "dialogue", null)\n\t}\n\tapi.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice })\n\thideTimeouts[playerId] = setTimeout(\n\t\t() => {\n\t\t\tclearDialogue(playerId)\n\t\t},\n\t\topts.durationMs ?? DEFAULT_DURATION_MS,\n\t\tplayerId,\n\t)\n}\n\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\nexport function clearDialogue(playerId: PlayerId) {\n\tif (hideTimeouts[playerId] === undefined) {\n\t\treturn\n\t}\n\tclearTimeout(hideTimeouts[playerId])\n\tdelete hideTimeouts[playerId]\n\tapi.setClientOption(playerId, "dialogue", null)\n}\n\nonPlayerLeave = (playerId: PlayerId) => {\n\tdelete hideTimeouts[playerId]\n}\n'
        },
        dependencies: ["helpers"],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  clearDialogue: () => clearDialogue,\n  sayDialogue: () => sayDialogue\n});\nmodule.exports = __toCommonJS(index_exports);\nvar import_helpers = require("@plugins/helpers");\nvar DEFAULT_DURATION_MS = 6e3;\nvar hideTimeouts = {};\nfunction sayDialogue(playerId, text, opts = {}) {\n  if (hideTimeouts[playerId] !== void 0) {\n    (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n    api.setClientOption(playerId, "dialogue", null);\n  }\n  api.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice });\n  hideTimeouts[playerId] = (0, import_helpers.setTimeout)(\n    () => {\n      clearDialogue(playerId);\n    },\n    opts.durationMs ?? DEFAULT_DURATION_MS,\n    playerId\n  );\n}\nfunction clearDialogue(playerId) {\n  if (hideTimeouts[playerId] === void 0) {\n    return;\n  }\n  (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n  delete hideTimeouts[playerId];\n  api.setClientOption(playerId, "dialogue", null);\n}\nonPlayerLeave = (playerId) => {\n  delete hideTimeouts[playerId];\n};\n',
        types: "import { CustomTextStyling, SpeechVoice, PlayerId, DialogueText } from '@bloxd';\n\ntype DialogueOpts = {\n    /** Shown above the line, such as a name. */\n    speakerName?: string | CustomTextStyling;\n    /** A preset such as \"regular\" or \"gruff\", or every synth parameter. Omit for a silent line. */\n    voice?: SpeechVoice;\n    /** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n    durationMs?: number;\n};\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item's icon inline\n * @param opts - The speaker's name, the voice that reads it out, and how long it stays up\n */\ndeclare function sayDialogue(playerId: PlayerId, text: DialogueText, opts?: DialogueOpts): void;\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\ndeclare function clearDialogue(playerId: PlayerId): void;\n\nexport { clearDialogue, sayDialogue };\nexport type { DialogueOpts };\n"
      },
      LG = {
        files: {
          "chunk.ts": 'import { setTimeout } from "./timers"\n\n/**\n * Forces a chunk to be loaded.\n * @param x - The x coordinate of the chunk\n * @param y - The y coordinate of the chunk\n * @param z - The z coordinate of the chunk\n * @param onLoaded - The function to call when the chunk is loaded\n */\nexport function forceLoadChunk(x: number, y: number, z: number, onLoaded: () => void) {\n\tconst block = api.getBlock(x, y, z)\n\tif (block !== "Unloaded") {\n\t\tonLoaded()\n\t\treturn\n\t}\n\n\tsetTimeout(() => {\n\t\tforceLoadChunk(x, y, z, onLoaded)\n\t}, 100)\n}\n',
          "index.ts": 'import { handleTimers } from "./timers"\n\ntick = () => {\n\thandleTimers()\n}\n\nexport { setTimeout, setInterval, clearTimeout, clearInterval } from "./timers"\nexport type { TimeoutId, IntervalId } from "./timers"\nexport { forceLoadChunk } from "./chunk"\nexport { randomInt, shuffleArray, getRandomItem } from "./random"\n',
          "random.ts": "/**\n * Generates a random integer between min and max, inclusive.\n * @param min - The minimum value.\n * @param max - The maximum value.\n * @param includeMax - Whether to include the max value in the range. Defaults to false.\n * @returns A random integer between min and max, inclusive.\n */\nexport function randomInt(min: number, max: number, includeMax: boolean = false): number {\n\treturn Math.floor(Math.random() * (max - min + (includeMax ? 1 : 0))) + min\n}\n\n/**\n * Shuffles an array in place.\n * @param array - The array to shuffle.\n * @returns The shuffled array.\n */\nexport function shuffleArray<T>(array: T[]): T[] {\n\tfor (let i = 0; i < array.length; i++) {\n\t\tconst j = randomInt(i, array.length)\n\t\t;[array[i], array[j]] = [array[j], array[i]]\n\t}\n\treturn array\n}\n\n/**\n * Gets a random item from an array.\n * @param array - The array to get a random item from.\n * @returns A random item from the array.\n */\nexport function getRandomItem<T extends readonly any[]>(array: T): T[number]\nexport function getRandomItem<T>(array: readonly T[] | T[]): T | undefined {\n\treturn array[randomInt(0, array.length)]\n}\n",
          "timers.ts": 'import { PlayerId } from "@bloxd"\n\ndeclare const __brand: unique symbol\ntype Branded<T, B> = T & { [__brand]: B }\nexport type TimeoutId = Branded<number, "TimeoutId">\nexport type IntervalId = Branded<number, "IntervalId">\n\nlet nextTimeoutId: number = 1\nlet nextIntervalId: number = 1\ntype Callback = {\n\tcallback: () => void\n\tcallAt: number\n\tinterval?: number\n\tplayerId?: PlayerId\n}\nconst timeouts: Record<TimeoutId, Callback> = {}\nconst intervals: Record<IntervalId, Callback> = {}\n\n/**\n * Registers a function to be called after a delay.\n * @param callback - The callback to call when the timeout expires\n * @param delay - The delay in milliseconds before the callback is called\n * @param playerId - Optional playerId to tie the timeout to. If the player leaves, this timeout will be cleared\n * @returns The timeout id\n */\nexport function setTimeout(callback: () => void, delay: number, playerId?: PlayerId): TimeoutId {\n\tconst id = nextTimeoutId++\n\ttimeouts[id] = { callback, callAt: api.now() + delay, playerId }\n\treturn id as TimeoutId\n}\n\n/**\n * Registers a function to be called repeatedly every interval.\n * @param callback - The callback to call when the interval expires\n * @param interval - The interval in milliseconds before the callback is called\n * @param playerId - Optional playerId to tie the interval to. If the player leaves, this interval will be stopped\n * @returns The interval id\n */\nexport function setInterval(callback: () => void, interval: number, playerId?: PlayerId): IntervalId {\n\tconst id = nextIntervalId++\n\tintervals[id] = { callback, callAt: api.now() + interval, interval, playerId }\n\treturn id as IntervalId\n}\n\n/**\n * Clears a timeout.\n * @param id - The id of the timeout to clear\n */\nexport function clearTimeout(id: TimeoutId) {\n\tdelete timeouts[id]\n}\n\n/**\n * Clears an interval.\n * @param id - The id of the interval to clear\n */\nexport function clearInterval(id: IntervalId) {\n\tdelete intervals[id]\n}\n\nexport function handleTimers() {\n\tconst now = api.now()\n\tfor (const timeoutId in timeouts) {\n\t\tconst callback = timeouts[timeoutId]\n\t\tif (callback.callAt <= now) {\n\t\t\tif (!callback.playerId || api.checkValid(callback.playerId)) {\n\t\t\t\ttry {\n\t\t\t\t\tcallback.callback()\n\t\t\t\t} catch (e) {\n\t\t\t\t\tapi.log(`Error in timeout callback ${timeoutId}: ${e}`)\n\t\t\t\t}\n\t\t\t}\n\t\t\tdelete timeouts[timeoutId]\n\t\t}\n\t}\n\tfor (const intervalId in intervals) {\n\t\tconst callback = intervals[intervalId]\n\t\tif (callback.callAt <= now) {\n\t\t\tif (callback.playerId && !api.checkValid(callback.playerId)) {\n\t\t\t\tdelete intervals[intervalId]\n\t\t\t\tcontinue\n\t\t\t}\n\n\t\t\ttry {\n\t\t\t\tcallback.callback()\n\t\t\t} catch (e) {\n\t\t\t\tapi.log(`Error in interval callback ${intervalId}: ${e}`)\n\t\t\t}\n\t\t\tcallback.callAt += callback.interval\n\t\t}\n\t}\n}\n'
        },
        dependencies: [],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  clearInterval: () => clearInterval,\n  clearTimeout: () => clearTimeout,\n  forceLoadChunk: () => forceLoadChunk,\n  getRandomItem: () => getRandomItem,\n  randomInt: () => randomInt,\n  setInterval: () => setInterval,\n  setTimeout: () => setTimeout,\n  shuffleArray: () => shuffleArray\n});\nmodule.exports = __toCommonJS(index_exports);\n\n// world-code-plugin:timers.ts\nvar nextTimeoutId = 1;\nvar nextIntervalId = 1;\nvar timeouts = {};\nvar intervals = {};\nfunction setTimeout(callback, delay, playerId) {\n  const id = nextTimeoutId++;\n  timeouts[id] = { callback, callAt: api.now() + delay, playerId };\n  return id;\n}\nfunction setInterval(callback, interval, playerId) {\n  const id = nextIntervalId++;\n  intervals[id] = { callback, callAt: api.now() + interval, interval, playerId };\n  return id;\n}\nfunction clearTimeout(id) {\n  delete timeouts[id];\n}\nfunction clearInterval(id) {\n  delete intervals[id];\n}\nfunction handleTimers() {\n  const now = api.now();\n  for (const timeoutId in timeouts) {\n    const callback = timeouts[timeoutId];\n    if (callback.callAt <= now) {\n      if (!callback.playerId || api.checkValid(callback.playerId)) {\n        try {\n          callback.callback();\n        } catch (e) {\n          api.log(`Error in timeout callback ${timeoutId}: ${e}`);\n        }\n      }\n      delete timeouts[timeoutId];\n    }\n  }\n  for (const intervalId in intervals) {\n    const callback = intervals[intervalId];\n    if (callback.callAt <= now) {\n      if (callback.playerId && !api.checkValid(callback.playerId)) {\n        delete intervals[intervalId];\n        continue;\n      }\n      try {\n        callback.callback();\n      } catch (e) {\n        api.log(`Error in interval callback ${intervalId}: ${e}`);\n      }\n      callback.callAt += callback.interval;\n    }\n  }\n}\n\n// world-code-plugin:chunk.ts\nfunction forceLoadChunk(x, y, z, onLoaded) {\n  const block = api.getBlock(x, y, z);\n  if (block !== "Unloaded") {\n    onLoaded();\n    return;\n  }\n  setTimeout(() => {\n    forceLoadChunk(x, y, z, onLoaded);\n  }, 100);\n}\n\n// world-code-plugin:random.ts\nfunction randomInt(min, max, includeMax = false) {\n  return Math.floor(Math.random() * (max - min + (includeMax ? 1 : 0))) + min;\n}\nfunction shuffleArray(array) {\n  for (let i = 0; i < array.length; i++) {\n    const j = randomInt(i, array.length);\n    [array[i], array[j]] = [array[j], array[i]];\n  }\n  return array;\n}\nfunction getRandomItem(array) {\n  return array[randomInt(0, array.length)];\n}\n\n// world-code-plugin:index.ts\ntick = () => {\n  handleTimers();\n};\n',
        types: 'import { PlayerId } from \'@bloxd\';\n\ndeclare const __brand: unique symbol;\ntype Branded<T, B> = T & {\n    [__brand]: B;\n};\ntype TimeoutId = Branded<number, "TimeoutId">;\ntype IntervalId = Branded<number, "IntervalId">;\n/**\n * Registers a function to be called after a delay.\n * @param callback - The callback to call when the timeout expires\n * @param delay - The delay in milliseconds before the callback is called\n * @param playerId - Optional playerId to tie the timeout to. If the player leaves, this timeout will be cleared\n * @returns The timeout id\n */\ndeclare function setTimeout(callback: () => void, delay: number, playerId?: PlayerId): TimeoutId;\n/**\n * Registers a function to be called repeatedly every interval.\n * @param callback - The callback to call when the interval expires\n * @param interval - The interval in milliseconds before the callback is called\n * @param playerId - Optional playerId to tie the interval to. If the player leaves, this interval will be stopped\n * @returns The interval id\n */\ndeclare function setInterval(callback: () => void, interval: number, playerId?: PlayerId): IntervalId;\n/**\n * Clears a timeout.\n * @param id - The id of the timeout to clear\n */\ndeclare function clearTimeout(id: TimeoutId): void;\n/**\n * Clears an interval.\n * @param id - The id of the interval to clear\n */\ndeclare function clearInterval(id: IntervalId): void;\n\n/**\n * Forces a chunk to be loaded.\n * @param x - The x coordinate of the chunk\n * @param y - The y coordinate of the chunk\n * @param z - The z coordinate of the chunk\n * @param onLoaded - The function to call when the chunk is loaded\n */\ndeclare function forceLoadChunk(x: number, y: number, z: number, onLoaded: () => void): void;\n\n/**\n * Generates a random integer between min and max, inclusive.\n * @param min - The minimum value.\n * @param max - The maximum value.\n * @param includeMax - Whether to include the max value in the range. Defaults to false.\n * @returns A random integer between min and max, inclusive.\n */\ndeclare function randomInt(min: number, max: number, includeMax?: boolean): number;\n/**\n * Shuffles an array in place.\n * @param array - The array to shuffle.\n * @returns The shuffled array.\n */\ndeclare function shuffleArray<T>(array: T[]): T[];\n/**\n * Gets a random item from an array.\n * @param array - The array to get a random item from.\n * @returns A random item from the array.\n */\ndeclare function getRandomItem<T extends readonly any[]>(array: T): T[number];\n\nexport { clearInterval, clearTimeout, forceLoadChunk, getRandomItem, randomInt, setInterval, setTimeout, shuffleArray };\nexport type { IntervalId, TimeoutId };\n'
      },
      yG = {
        files: {
          "MapVoter.ts": 'import { PlayerId } from "@bloxd"\nimport { BaseMapInfo, BaseTeamInfo } from "./types"\nimport { SessionBasedPlayer } from "./SessionBasedPlayer"\nimport { shuffleArray, getRandomItem, setTimeout } from "@plugins/helpers"\n\nconst MAP_VOTING_CATEGORY = "__SBG_MAP_VOTING__"\nconst MAP_VOTING_ITEM_PREFIX = "__SBG_MAP_"\n\nconst MAP_OPTION_COUNT = 4\n\nexport class MapVoter<TeamInfo extends BaseTeamInfo, MapInfo extends BaseMapInfo<TeamInfo>> {\n\tprivate possibleMapOptions: MapInfo[] = []\n\tprivate mapVotes: Record<PlayerId, MapInfo["name"]> = {}\n\tprivate mapVotingActive: boolean = false\n\n\tconstructor(\n\t\treadonly maps: readonly MapInfo[],\n\t\treadonly players: Record<PlayerId, SessionBasedPlayer<TeamInfo, MapInfo>>,\n\t) {}\n\n\tcreateMapVoting(): void {\n\t\tif (this.mapVotingActive) {\n\t\t\treturn\n\t\t}\n\t\tthis.mapVotingActive = true\n\t\tapi.configureShopCategory(MAP_VOTING_CATEGORY, {\n\t\t\tcustomTitle: "Map Voting",\n\t\t\tsortPriority: 0.5,\n\t\t})\n\n\t\t// Delete previous map options\n\t\tfor (const map of this.possibleMapOptions) {\n\t\t\tapi.deleteShopItem(MAP_VOTING_CATEGORY, `${MAP_VOTING_ITEM_PREFIX}${map.name}`)\n\t\t}\n\n\t\tconst possibleOptions = this.maps.slice()\n\t\tshuffleArray(possibleOptions)\n\t\tthis.possibleMapOptions = possibleOptions.slice(0, MAP_OPTION_COUNT)\n\t\tfor (const map of this.possibleMapOptions) {\n\t\t\tapi.createShopItem(MAP_VOTING_CATEGORY, `${MAP_VOTING_ITEM_PREFIX}${map.name}`, {\n\t\t\t\timage: map.icon,\n\t\t\t\tcustomTitle: map.name,\n\t\t\t\tcanBuy: true,\n\t\t\t\tbuyButtonText: "Votes: 0",\n\t\t\t})\n\t\t}\n\n\t\tsetTimeout(() => {\n\t\t\tfor (const playerId in this.players) {\n\t\t\t\tapi.openShop(playerId, false, MAP_VOTING_CATEGORY)\n\t\t\t}\n\t\t}, 100)\n\t}\n\n\tonMapVote(playerId: PlayerId, categoryKey: string, shopItemKey: string) {\n\t\tif (categoryKey !== MAP_VOTING_CATEGORY) {\n\t\t\treturn\n\t\t}\n\t\tif (!this.mapVotingActive) {\n\t\t\treturn\n\t\t}\n\t\tif (!shopItemKey.startsWith(MAP_VOTING_ITEM_PREFIX)) {\n\t\t\treturn\n\t\t}\n\t\tconst mapName = shopItemKey.replace(MAP_VOTING_ITEM_PREFIX, "")\n\t\tif (\n\t\t\t!this.possibleMapOptions.some((map) => {\n\t\t\t\treturn map.name === mapName\n\t\t\t})\n\t\t) {\n\t\t\treturn\n\t\t}\n\t\tconst hadVotedBefore = !!this.mapVotes[playerId]\n\t\tthis.mapVotes[playerId] = mapName\n\t\tthis.updateMapVotingForPlayer(playerId)\n\t\tthis.updateMapCountsForEveryone()\n\t\tif (!hadVotedBefore) {\n\t\t\tapi.openShop(playerId, true)\n\t\t}\n\t}\n\n\tonPlayerJoin(playerId: PlayerId) {\n\t\tif (!this.mapVotingActive) {\n\t\t\treturn\n\t\t}\n\t\tthis.updateMapVotingForPlayer(playerId)\n\t\tsetTimeout(\n\t\t\t() => {\n\t\t\t\tapi.openShop(playerId, false, MAP_VOTING_CATEGORY)\n\t\t\t},\n\t\t\t100,\n\t\t\tplayerId,\n\t\t)\n\t}\n\n\tonPlayerLeave(playerId: PlayerId) {\n\t\tif (!this.mapVotingActive) {\n\t\t\treturn\n\t\t}\n\t\tdelete this.mapVotes[playerId]\n\t\tthis.updateMapCountsForEveryone()\n\t}\n\n\tprivate updateMapCountsForEveryone() {\n\t\tfor (const map of this.possibleMapOptions) {\n\t\t\tconst votes = Object.values(this.mapVotes).filter((v) => {\n\t\t\t\treturn v === map.name\n\t\t\t}).length\n\t\t\tapi.updateShopItem(MAP_VOTING_CATEGORY, `${MAP_VOTING_ITEM_PREFIX}${map.name}`, {\n\t\t\t\tbuyButtonText: `Votes: ${votes}`,\n\t\t\t})\n\t\t}\n\t}\n\tprivate updateMapVotingForPlayer(playerId: PlayerId) {\n\t\tapi.configureShopCategoryForPlayer(playerId, MAP_VOTING_CATEGORY, {\n\t\t\tredDot: !this.mapVotes[playerId],\n\t\t})\n\t\tfor (const map of this.possibleMapOptions) {\n\t\t\tapi.updateShopItemForPlayer(playerId, MAP_VOTING_CATEGORY, `${MAP_VOTING_ITEM_PREFIX}${map.name}`, {\n\t\t\t\tcanBuy: this.mapVotes[playerId] !== map.name,\n\t\t\t\tisSelected: this.mapVotes[playerId] === map.name,\n\t\t\t})\n\t\t}\n\t}\n\n\tendMapVoting() {\n\t\tif (!this.mapVotingActive) {\n\t\t\treturn\n\t\t}\n\t\tthis.mapVotingActive = false\n\t\tfor (const map of this.possibleMapOptions) {\n\t\t\tapi.deleteShopItem(MAP_VOTING_CATEGORY, `${MAP_VOTING_ITEM_PREFIX}${map.name}`)\n\t\t}\n\t\tthis.possibleMapOptions = []\n\t\tthis.mapVotes = {}\n\t}\n\n\tchooseMap(): MapInfo {\n\t\tif (!this.mapVotingActive) {\n\t\t\treturn null\n\t\t}\n\t\tconst votedPlayers = Object.keys(this.mapVotes)\n\t\tif (votedPlayers.length === 0) {\n\t\t\treturn getRandomItem(this.possibleMapOptions)\n\t\t}\n\n\t\tconst randomPlayer = getRandomItem(votedPlayers)\n\t\tconst choice = this.mapVotes[randomPlayer]\n\t\treturn this.maps.find((map) => {\n\t\t\treturn map.name === choice\n\t\t})\n\t}\n}\n',
          "SessionBasedGame.ts": 'import { BaseTeamInfo, BaseMapInfo, SessionBasedGameSetupOptions, MapSource } from "./types"\nimport { SessionBasedPlayer } from "./SessionBasedPlayer"\nimport { BlockName, CustomTextStyling, PlayerId, Pos } from "@bloxd"\nimport { style, getDimensions, getLowHigh, displayMs, getSourceRect } from "./helpers"\nimport { forceLoadChunk, setInterval, shuffleArray, getRandomItem } from "@plugins/helpers"\nimport { MapVoter } from "./MapVoter"\n\nexport class SessionBasedGame<TeamInfo extends BaseTeamInfo, MapInfo extends BaseMapInfo<TeamInfo>, Player extends SessionBasedPlayer<TeamInfo, MapInfo>> {\n\tgamePhase: "beforeGame" | "inGame" | "gameFinished" = "beforeGame"\n\tprivate startingRound = false\n\tprivate players: Record<PlayerId, Player> = {}\n\tmap: MapInfo | null = null\n\tprivate gameStartTime: number = 0\n\tprivate startGameAt: number = Infinity\n\tprivate endGameAt: number = Infinity\n\tprivate mapVoter: MapVoter<TeamInfo, MapInfo>\n\n\tmessageColours = {\n\t\terror: "#ff0000",\n\t\tsuccess: "#00ff00",\n\t\tinfo: "#ffffff",\n\t}\n\n\tprivate get playersForFullLobby() {\n\t\treturn this.gameOptions.teams.reduce((a, b) => {\n\t\t\treturn a + b.maxPlayers\n\t\t}, 0)\n\t}\n\n\tprivate get playerCount() {\n\t\treturn Object.keys(this.players).length\n\t}\n\n\tconstructor(readonly gameOptions: Required<SessionBasedGameSetupOptions<TeamInfo, MapInfo, Player>>) {\n\t\tthis.mapVoter = new MapVoter(this.gameOptions.maps, this.players)\n\t\tthis.resetGame(false)\n\t\tsetInterval(() => {\n\t\t\tthis.sendRightInfoText()\n\t\t}, 1000)\n\t}\n\n\t/**\n\t * Gets the player object for a given player ID.\n\t * @param playerId The player ID to get the player for\n\t */\n\tgetPlayer(playerId: PlayerId) {\n\t\treturn this.players[playerId]\n\t}\n\n\t/**\n\t * Gets all the players in the game, including spectators.\n\t * @returns An iterator of all the players in the game.\n\t */\n\t*getPlayers(): Generator<Player> {\n\t\tfor (const playerId in this.players) {\n\t\t\tyield this.players[playerId]\n\t\t}\n\t}\n\n\tgetStartingInText(): string | CustomTextStyling {\n\t\tif (this.gamePhase !== "beforeGame") {\n\t\t\treturn []\n\t\t}\n\t\tconst timeLeft = this.startGameAt - api.now()\n\t\tif (timeLeft < 0) {\n\t\t\treturn []\n\t\t}\n\t\treturn [\n\t\t\t...style({ translationKey: "sessionBasedGame:startingIn" }, this.messageColours.info),\n\t\t\t" ",\n\t\t\t...style(`${displayMs(timeLeft)}`, timeLeft < 10_000 ? this.messageColours.success : this.messageColours.info),\n\t\t]\n\t}\n\t/**\n\t * Gives all players coloured armour based on their team name. Spectators will get black armour.\n\t * If their team name is not a valid colour, they will be skipped.\n\t */\n\tgiveColouredArmourToEveryone() {\n\t\tfor (const playerId in this.players) {\n\t\t\tconst player = this.players[playerId]\n\t\t\tconst prefix = player.team ? player.team.name : "Black"\n\t\t\ttry {\n\t\t\t\tapi.setItemSlot(playerId, 46, `${prefix} Wood Helmet`)\n\t\t\t\tapi.setItemSlot(playerId, 47, `${prefix} Wood Chestplate`)\n\t\t\t\tapi.setItemSlot(playerId, 48, `${prefix} Wood Gauntlets`)\n\t\t\t\tapi.setItemSlot(playerId, 49, `${prefix} Wood Leggings`)\n\t\t\t\tapi.setItemSlot(playerId, 50, `${prefix} Wood Boots`)\n\t\t\t} catch (e) {\n\t\t\t\tapi.log(`Error giving coloured armour to player ${playerId}: ${e}`)\n\t\t\t}\n\t\t}\n\t}\n\n\tonPlayerJoin(playerId: PlayerId) {\n\t\tthis.players[playerId] = new this.gameOptions.playerConstructor(playerId, this)\n\t\tthis.mapVoter.onPlayerJoin(playerId)\n\t\tthis.updateTimeTillStart()\n\t}\n\n\tonPlayerLeave(playerId: PlayerId) {\n\t\tif (!this.players[playerId]) {\n\t\t\treturn\n\t\t}\n\t\tif (this.gamePhase === "beforeGame") {\n\t\t\tconst requestedTeam = this.players[playerId].requestedTeam\n\t\t\tif (requestedTeam) {\n\t\t\t\tthis.placeTeamPad(requestedTeam.name, false)\n\t\t\t}\n\t\t}\n\t\tdelete this.players[playerId]\n\t\tthis.checkWin()\n\t\tthis.mapVoter.onPlayerLeave(playerId)\n\t}\n\n\tonPlayerDie(playerId: PlayerId) {\n\t\tthis.checkWin()\n\t}\n\n\tcheckWin() {\n\t\tif (this.gamePhase !== "inGame") {\n\t\t\treturn\n\t\t}\n\t\tconst teamsAlive = this.getTeamsAlive()\n\t\tif (teamsAlive.length === 1) {\n\t\t\tthis.makeTeamWin(teamsAlive[0])\n\t\t}\n\t}\n\n\tonPlayerChat(playerId: PlayerId, message: string) {\n\t\treturn this.players[playerId].onMessage()\n\t}\n\n\tonPlayerBoughtShopItem(playerId: PlayerId, categoryKey: string, itemKey: string) {\n\t\tthis.mapVoter.onMapVote(playerId, categoryKey, itemKey)\n\t}\n\n\ttick() {\n\t\tthis.checkGameTransition()\n\t}\n\n\tprivate getTeamsAlive() {\n\t\tconst teamsAlive: TeamInfo[] = []\n\t\tfor (const playerId in this.players) {\n\t\t\tconst player = this.players[playerId]\n\t\t\tif (player.team && !teamsAlive.includes(player.team)) {\n\t\t\t\tteamsAlive.push(player.team)\n\t\t\t}\n\t\t}\n\t\treturn teamsAlive\n\t}\n\n\tprivate updateTimeTillStart() {\n\t\tif (this.gamePhase === "beforeGame" && this.playerCount >= this.playersForFullLobby) {\n\t\t\tthis.setStartGame(this.gameOptions.fullLobbyStartInSecs)\n\t\t}\n\t}\n\n\tprivate setStartGame(startInSecs: number) {\n\t\tconst newStartAt = api.now() + startInSecs * 1000\n\t\tthis.startGameAt = Math.min(this.startGameAt, newStartAt)\n\t\tapi.broadcastMessage(style(`Starting in ${startInSecs}s...`, this.messageColours.info))\n\t}\n\n\tprivate checkGameTransition() {\n\t\tif (this.gamePhase === "beforeGame") {\n\t\t\tconst timeLeft = this.startGameAt - api.now()\n\t\t\tif (timeLeft < 0) {\n\t\t\t\tif (this.playerCount < 2) {\n\t\t\t\t\tapi.broadcastMessage(style("Not enough players to start game", this.messageColours.error))\n\t\t\t\t\tthis.startGameAt = Infinity\n\t\t\t\t\tthis.setStartGame(this.gameOptions.emptyLobbyStartInSecs)\n\t\t\t\t} else {\n\t\t\t\t\tthis.startGame()\n\t\t\t\t}\n\t\t\t\treturn\n\t\t\t} else if (timeLeft < 5_000) {\n\t\t\t\tconst secsLeft = Math.ceil(timeLeft / 1000)\n\t\t\t\tfor (const playerId in this.players) {\n\t\t\t\t\tapi.setClientOption(playerId, "middleTextUpper", style(`Game starts in ${secsLeft} seconds`, this.messageColours.info))\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tfor (const playerId in this.players) {\n\t\t\t\t\tapi.setClientOption(playerId, "middleTextUpper", [])\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tif (this.gamePhase === "gameFinished") {\n\t\t\tconst timeLeft = this.endGameAt - api.now()\n\t\t\tif (timeLeft < 0) {\n\t\t\t\tthis.resetGame(true)\n\t\t\t} else if (timeLeft < 5_000) {\n\t\t\t\tconst secsLeft = Math.ceil(timeLeft / 1000)\n\t\t\t\tfor (const playerId in this.players) {\n\t\t\t\t\tapi.setClientOption(playerId, "middleTextUpper", style(`Game ends in ${secsLeft} seconds`, this.messageColours.info))\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\tprivate sendRightInfoText() {\n\t\tfor (const playerId in this.players) {\n\t\t\tconst rightInfoText = this.gameOptions.getRightInfoText(this.players[playerId])\n\t\t\tif (rightInfoText) {\n\t\t\t\tapi.setClientOption(playerId, "RightInfoText", rightInfoText)\n\t\t\t}\n\t\t}\n\t}\n\n\tprivate loadMap(source: MapSource) {\n\t\tconst rect = getSourceRect(source)\n\t\tconst mapDimensions = getDimensions(rect)\n\t\tconst { low: mapLow } = getLowHigh(rect)\n\n\t\tconst { low: playAreaLow, high: playAreaHigh } = getLowHigh(this.gameOptions.playAreaRect)\n\n\t\tfor (let x = 0; x < mapDimensions.l; x += 32) {\n\t\t\tfor (let y = 0; y < mapDimensions.w; y += 32) {\n\t\t\t\tfor (let z = 0; z < mapDimensions.h; z += 32) {\n\t\t\t\t\tconst mapChunkPos: Pos = [mapLow[0] + x, mapLow[1] + y, mapLow[2] + z]\n\t\t\t\t\tconst playAreaChunkPos: Pos = [playAreaLow[0] + x, playAreaLow[1] + y, playAreaLow[2] + z]\n\n\t\t\t\t\tif (source.schematic !== undefined) {\n\t\t\t\t\t\tapi.setChunkAsSchematic(source.schematic, mapChunkPos, playAreaChunkPos)\n\t\t\t\t\t} else {\n\t\t\t\t\t\tforceLoadChunk(mapChunkPos[0], mapChunkPos[1], mapChunkPos[2], () => {\n\t\t\t\t\t\t\tapi.copyChunk(mapChunkPos, playAreaChunkPos)\n\t\t\t\t\t\t})\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t// Replace the rest of the play area with air\n\t\tconst mapEnd: Pos = [playAreaLow[0] + mapDimensions.l, playAreaLow[1] + mapDimensions.w, playAreaLow[2] + mapDimensions.h]\n\t\tfillOutsideWithAir(playAreaLow, playAreaHigh, mapEnd)\n\t}\n\n\tprivate startGame() {\n\t\tapi.setMaxPlayers(1, this.playersForFullLobby + this.gameOptions.maxSpectators)\n\n\t\tthis.assignTeams()\n\n\t\tthis.map = null\n\t\tif (this.gameOptions.mapVotingEnabled) {\n\t\t\tthis.map = this.mapVoter.chooseMap()\n\t\t\tthis.mapVoter.endMapVoting()\n\t\t}\n\n\t\tif (!this.map) {\n\t\t\tthis.map = getRandomItem(this.gameOptions.maps)\n\t\t}\n\n\t\t// finally: a throw here leaves the game in beforeGame, and a startingRound stuck true\n\t\t// would fade every player in the lobby it resets to\n\t\tthis.startingRound = true\n\t\ttry {\n\t\t\tfor (const playerId in this.players) {\n\t\t\t\tapi.setClientOption(playerId, "middleTextUpper", [])\n\t\t\t\tif (this.players[playerId].team) {\n\t\t\t\t\tthis.players[playerId].startPlaying()\n\t\t\t\t} else {\n\t\t\t\t\tthis.players[playerId].startSpectating()\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tthis.loadMap(this.map.source)\n\n\t\t\tthis.gameStartTime = api.now()\n\t\t\tthis.gamePhase = "inGame"\n\t\t} finally {\n\t\t\tthis.startingRound = false\n\t\t}\n\t\tthis.gameOptions.onStart()\n\t}\n\n\t/**\n\t * Whether spectators should render faded. gamePhase can\'t be read directly: it only flips to\n\t * "inGame" once startGame() has started every player, and the sit-out spectators it makes\n\t * along the way need fading too.\n\t */\n\tspectatorsAreFaded(): boolean {\n\t\treturn this.startingRound || this.gamePhase === "inGame"\n\t}\n\n\tprivate assignTeams() {\n\t\tconst teamCounts = Object.fromEntries(\n\t\t\tthis.gameOptions.teams.map((team) => {\n\t\t\t\treturn [team.name, 0]\n\t\t\t}),\n\t\t) as Record<string, number>\n\t\tconst requestedPlayers: PlayerId[] = []\n\t\tconst unrequestedPlayers: PlayerId[] = []\n\t\tfor (const playerId in this.players) {\n\t\t\tconst player = this.players[playerId]\n\t\t\tif (player.requestedTeam) {\n\t\t\t\trequestedPlayers.push(playerId)\n\t\t\t} else {\n\t\t\t\tunrequestedPlayers.push(playerId)\n\t\t\t}\n\t\t}\n\t\tshuffleArray(unrequestedPlayers)\n\t\tconst playerIds = [...requestedPlayers, ...unrequestedPlayers]\n\t\tfor (const playerId of playerIds) {\n\t\t\tconst player = this.players[playerId]\n\t\t\tif (player.requestedTeam) {\n\t\t\t\tplayer.team = player.requestedTeam\n\t\t\t\tteamCounts[player.requestedTeam.name]++\n\t\t\t\tcontinue\n\t\t\t}\n\t\t\tlet smallestTeamPlayers = Infinity\n\t\t\tlet smallestTeam: TeamInfo | null = null\n\t\t\tfor (const team of this.gameOptions.teams) {\n\t\t\t\tconst numOnTeam = teamCounts[team.name]\n\t\t\t\tif (numOnTeam < smallestTeamPlayers && numOnTeam < team.maxPlayers) {\n\t\t\t\t\tsmallestTeamPlayers = numOnTeam\n\t\t\t\t\tsmallestTeam = team\n\t\t\t\t}\n\t\t\t}\n\t\t\tif (smallestTeam === null) {\n\t\t\t\tcontinue\n\t\t\t}\n\t\t\tthis.players[playerId].team = smallestTeam\n\t\t\tteamCounts[smallestTeam.name]++\n\t\t}\n\t}\n\n\t/**\n\t * Manually sets a team to win the game. Will begin the game reset timer to restart the game.#\n\t * Automatically called when there is only one team left.\n\t * @param winningTeam - The team object that won the game.\n\t */\n\tmakeTeamWin(winningTeam: TeamInfo | null) {\n\t\tif (this.gamePhase !== "inGame") {\n\t\t\treturn\n\t\t}\n\t\tthis.gamePhase = "gameFinished"\n\t\tthis.gameOptions.onFinish(winningTeam)\n\t\tthis.endGameAt = api.now() + this.gameOptions.gameResetInSecs * 1000\n\t}\n\n\tprivate resetGame(restart: boolean) {\n\t\tthis.gamePhase = "beforeGame"\n\t\tthis.startGameAt = Infinity\n\t\tthis.endGameAt = Infinity\n\t\tfor (const playerId in this.players) {\n\t\t\tconst player = this.players[playerId]\n\t\t\tplayer.startSpectating()\n\t\t\tplayer.requestedTeam = null\n\t\t\tif (restart) {\n\t\t\t\tapi.killLifeform(playerId)\n\t\t\t}\n\t\t}\n\t\tapi.setMaxPlayers(this.playersForFullLobby, this.playersForFullLobby + this.gameOptions.maxSpectators)\n\t\tthis.loadMap(this.gameOptions.lobby.source)\n\t\tif (this.gameOptions.lobby.teamPads) {\n\t\t\tthis.placeTeamPads()\n\t\t}\n\t\tthis.setStartGame(this.gameOptions.emptyLobbyStartInSecs)\n\t\tif (this.gameOptions.mapVotingEnabled) {\n\t\t\tthis.mapVoter.createMapVoting()\n\t\t}\n\t}\n\n\tonBlockStandStart(playerId: PlayerId, x: number, y: number, z: number, blockName: BlockName) {\n\t\tif (!this.gameOptions.lobby.teamPads) {\n\t\t\treturn\n\t\t}\n\t\tif (this.gamePhase !== "beforeGame") {\n\t\t\treturn\n\t\t}\n\t\tconst player = this.players[playerId]\n\t\tlet team: TeamInfo | null = null\n\t\tconst { low: playAreaLow, high: playAreaHigh } = getLowHigh(this.gameOptions.playAreaRect)\n\t\tfor (const teamPadName in this.gameOptions.lobby.teamPads) {\n\t\t\tconst teamPadInfo = this.gameOptions.lobby.teamPads[teamPadName]\n\t\t\tconst { low: rectLow, high: rectHigh } = getLowHigh(teamPadInfo.rect)\n\t\t\trectLow[0] += playAreaLow[0]\n\t\t\trectLow[1] += playAreaLow[1]\n\t\t\trectLow[2] += playAreaLow[2]\n\t\t\trectHigh[0] += playAreaLow[0]\n\t\t\trectHigh[1] += playAreaLow[1]\n\t\t\trectHigh[2] += playAreaLow[2]\n\t\t\tif (api.isInsideRect([x, y, z], rectLow, rectHigh)) {\n\t\t\t\tteam = this.gameOptions.teams.find((team) => {\n\t\t\t\t\treturn team.name === teamPadName\n\t\t\t\t})\n\t\t\t\tbreak\n\t\t\t}\n\t\t}\n\t\tif (!team) {\n\t\t\treturn\n\t\t}\n\n\t\tconst oldTeam = player.requestedTeam\n\t\tif (oldTeam === team) {\n\t\t\treturn\n\t\t}\n\n\t\tlet requestCount = 0\n\t\tfor (const playerId in this.players) {\n\t\t\tconst player = this.players[playerId]\n\t\t\tif (player.requestedTeam === team) {\n\t\t\t\trequestCount++\n\t\t\t}\n\t\t}\n\n\t\tif (player.qTextId) {\n\t\t\tapi.removeFromQueue(player.qTextId)\n\t\t}\n\t\tif (requestCount >= team.maxPlayers) {\n\t\t\tif (player.requestedTeam !== team) {\n\t\t\t\tplayer.qTextId = api.queueMiddleTextLower(playerId, style(`${team.name} team is full`, this.messageColours.error), 1000)\n\t\t\t}\n\t\t\t// Unneeded, but nice sanity check\n\t\t\tthis.placeTeamPad(team.name, true)\n\t\t\treturn\n\t\t}\n\n\t\tplayer.requestedTeam = team\n\n\t\tplayer.qTextId = api.queueMiddleTextLower(playerId, style(`${team.name} team selected`, this.messageColours.success), 1000)\n\t\tif (oldTeam !== team) {\n\t\t\tif (oldTeam) {\n\t\t\t\tthis.placeTeamPad(oldTeam.name, false)\n\t\t\t}\n\t\t\tconst isFull = requestCount + 1 >= team.maxPlayers\n\t\t\tthis.placeTeamPad(team.name, isFull)\n\t\t}\n\t}\n\n\tprivate placeTeamPad(teamName: string, full: boolean) {\n\t\tconst { low: playAreaLow } = getLowHigh(this.gameOptions.playAreaRect)\n\t\tconst { rect, emptyBlock, fullBlock } = this.gameOptions.lobby.teamPads[teamName]\n\t\t// Only force load the first chunk - assumes the rest of the chunk is already loaded\n\t\tconst { low: rectLow, high: rectHigh } = getLowHigh(rect)\n\t\tfor (let x = rectLow[0] + playAreaLow[0]; x <= rectHigh[0] + playAreaLow[0]; x += 32) {\n\t\t\tfor (let y = rectLow[1] + playAreaLow[1]; y <= rectHigh[1] + playAreaLow[1]; y += 32) {\n\t\t\t\tfor (let z = rectLow[2] + playAreaLow[2]; z <= rectHigh[2] + playAreaLow[2]; z += 32) {\n\t\t\t\t\tforceLoadChunk(x, y, z, () => {\n\t\t\t\t\t\tconst endX = Math.min(x + 31, rectHigh[0] + playAreaLow[0])\n\t\t\t\t\t\tconst endY = Math.min(y + 31, rectHigh[1] + playAreaLow[1])\n\t\t\t\t\t\tconst endZ = Math.min(z + 31, rectHigh[2] + playAreaLow[2])\n\t\t\t\t\t\tfillBox([x, y, z], [endX, endY, endZ], full ? fullBlock : emptyBlock)\n\t\t\t\t\t})\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\tprivate placeTeamPads() {\n\t\tfor (const teamName in this.gameOptions.lobby.teamPads) {\n\t\t\tthis.placeTeamPad(teamName, false)\n\t\t}\n\t}\n}\n\nfunction fillOutsideWithAir(low: Pos, high: Pos, copiedHigh: Pos) {\n\tfor (let axis = 0; axis < 3; axis++) {\n\t\tconst slabLow: Pos = [low[0], low[1], low[2]]\n\t\tconst slabHigh: Pos = [high[0], high[1], high[2]]\n\t\tslabLow[axis] = copiedHigh[axis] + 1\n\n\t\t// Avoid overlapping slabs (no point setting blocks already set)\n\t\tfor (let earlier = 0; earlier < axis; earlier++) {\n\t\t\tslabHigh[earlier] = Math.min(copiedHigh[earlier], high[earlier])\n\t\t}\n\n\t\tif (slabLow[0] <= slabHigh[0] && slabLow[1] <= slabHigh[1] && slabLow[2] <= slabHigh[2]) {\n\t\t\tfillBox(slabLow, slabHigh, "Air")\n\t\t}\n\t}\n}\n\nfunction fillBox(pos1: Pos, pos2: Pos, block: BlockName) {\n\t// api.setBlockRect caps at 360 blocks; slice along Z, then Y, then X so each call stays under the cap.\n\tconst maxRectVol = 360\n\tconst {\n\t\tlow: [x1, y1, z1],\n\t\thigh: [x2, y2, z2],\n\t} = getLowHigh([pos1, pos2])\n\tconst zSizeFull = z2 - z1 + 1\n\tconst zStep = Math.min(zSizeFull, maxRectVol)\n\tfor (let z = z1; z <= z2; z += zStep) {\n\t\tconst zEnd = Math.min(z2, z + zStep - 1)\n\t\tconst zSize = zEnd - z + 1\n\t\tconst yStep = Math.max(1, Math.floor(maxRectVol / zSize))\n\t\tfor (let y = y1; y <= y2; y += yStep) {\n\t\t\tconst yEnd = Math.min(y2, y + yStep - 1)\n\t\t\tconst yz = (yEnd - y + 1) * zSize\n\t\t\tconst xStep = Math.max(1, Math.floor(maxRectVol / yz))\n\t\t\tfor (let x = x1; x <= x2; x += xStep) {\n\t\t\t\tconst xEnd = Math.min(x2, x + xStep - 1)\n\t\t\t\tapi.setBlockRect([x, y, z], [xEnd, yEnd, zEnd], block)\n\t\t\t}\n\t\t}\n\t}\n}\n',
          "SessionBasedPlayer.ts": 'import { BaseTeamInfo, BaseMapInfo } from "./types"\nimport { ChatTags, PlayerId, Pos, RecursiveReadonly } from "@bloxd"\nimport { SessionBasedGame } from "./SessionBasedGame"\nimport { style, getLowHigh } from "./helpers"\n\n/** Opacity a spectator renders at. Only other spectators can see them, and themselves in third person. */\nexport const SPECTATOR_OPACITY = 0.5\n\nexport class SessionBasedPlayer<TeamInfo extends BaseTeamInfo, MapInfo extends BaseMapInfo<TeamInfo>> {\n\tisSpectating = true\n\tteam: TeamInfo | null = null\n\trequestedTeam: TeamInfo | null = null\n\tqTextId: string | null = null\n\n\tconstructor(\n\t\treadonly playerId: PlayerId,\n\t\treadonly game: SessionBasedGame<TeamInfo, MapInfo, SessionBasedPlayer<TeamInfo, MapInfo>>,\n\t) {\n\t\tapi.setPlayerGamemode(this.playerId, "survival")\n\t\tthis.startSpectating()\n\t\tthis.spawn()\n\t}\n\n\tprivate spawn() {\n\t\tconst spawnPosition = this.onRespawnRequest()\n\t\tif (spawnPosition) {\n\t\t\tapi.setPosition(this.playerId, spawnPosition)\n\t\t}\n\t}\n\n\t/**\n\t * Sets the player as playing the game, setting their health, shields, and other settings.\n\t * Automatically called at the start of a game for players assigned to a team.\n\t */\n\tstartPlaying() {\n\t\tthis.isSpectating = false\n\t\tconst maxHealth = api.getClientOption(this.playerId, "maxHealth")\n\t\tapi.setHealth(this.playerId, maxHealth)\n\t\tif (api.getHealth(this.playerId) !== null) {\n\t\t\tapi.setShieldAmount(this.playerId, api.getClientOption(this.playerId, "initialShield"))\n\t\t}\n\t\tapi.setClientOptions(this.playerId, {\n\t\t\tinitialHealth: maxHealth,\n\t\t\tcreative: false,\n\t\t\tcanAltAction: true,\n\t\t\tcanChange: false,\n\t\t\tuseFullInventory: true,\n\t\t\tcantBreakError: "",\n\t\t\tcantBuildError: [{ str: { translationKey: "general:cantBuildHere" } }],\n\t\t\tcanPickUpItems: true,\n\t\t\tautoRespawn: true,\n\t\t\tsecsToRespawn: 5,\n\t\t\trespawnButtonText: "sessionBasedGame:spectate",\n\t\t\tusePlayAgainButton: true,\n\t\t})\n\t\tthis.updateOtherEntitySettings(false)\n\t\tapi.setCanChangeBlockRect(this.playerId, ...this.game.gameOptions.playAreaRect)\n\n\t\tif (this.team) {\n\t\t\tapi.setTargetedPlayerSettingForEveryone(this.playerId, "killfeedColour", this.team.colour, true)\n\t\t\tapi.setTargetedPlayerSettingForEveryone(this.playerId, "colorInLobbyLeaderboard", this.team.colour, true)\n\t\t}\n\n\t\tthis.spawn()\n\t}\n\n\t/**\n\t * Sets the player as spectating the game, resetting their health, shields, and other settings.\n\t * Automatically called at the start of a game for players not assigned to a team.\n\t * Call this function to turn a player into a spectator (for example, once they die).\n\t */\n\tstartSpectating() {\n\t\tthis.isSpectating = true\n\t\tthis.team = null\n\t\tconst isBeforeGame = this.game.gamePhase === "beforeGame"\n\t\tapi.setClientOptions(this.playerId, {\n\t\t\tcreative: !isBeforeGame,\n\t\t\tuseFullInventory: false,\n\t\t\tcanAltAction: isBeforeGame,\n\t\t\tcanChange: false,\n\t\t\tcantBreakError: [\n\t\t\t\t{ str: { translationKey: "sessionBasedGame:cantChangeBlocksWhileSpectating" }, style: { colour: this.game.messageColours.error } },\n\t\t\t],\n\t\t\tcantBuildError: [\n\t\t\t\t{ str: { translationKey: "sessionBasedGame:cantChangeBlocksWhileSpectating" }, style: { colour: this.game.messageColours.error } },\n\t\t\t],\n\t\t\tcanPickUpItems: true,\n\t\t\tautoRespawn: false,\n\t\t\tsecsToRespawn: 3,\n\t\t\trespawnButtonText: isBeforeGame ? "general:respawn" : "sessionBasedGame:spectate",\n\t\t\tusePlayAgainButton: true,\n\t\t})\n\t\tapi.setEveryoneSettingForPlayer(this.playerId, "canSee", true)\n\t\tthis.updateOtherEntitySettings(true)\n\t\tapi.resetCanChangeBlockRect(this.playerId, ...this.game.gameOptions.playAreaRect)\n\n\t\tfor (const effect of api.getEffects(this.playerId)) {\n\t\t\tapi.removeEffect(this.playerId, effect)\n\t\t}\n\t\tapi.clearInventory(this.playerId)\n\n\t\tthis.game.checkWin()\n\t}\n\n\tprivate updateOtherEntitySettings(isSpectating: boolean) {\n\t\t// pass in isSpectating in case games set it after calling startPlaying()/startSpectating()\n\t\t// Lobby players all carry isSpectating, so fading there would grey out the whole lobby\n\t\tconst fadeSpectators = this.game.spectatorsAreFaded()\n\t\tfor (const player of this.game.getPlayers()) {\n\t\t\tconst canAttack = !isSpectating && !player.isSpectating && (this.playerId === player.playerId || this.team !== player.team)\n\t\t\tapi.setOtherEntitySetting(this.playerId, player.playerId, "canAttack", canAttack)\n\t\t\tapi.setOtherEntitySetting(player.playerId, this.playerId, "canAttack", canAttack)\n\n\t\t\tapi.setOtherEntitySetting(this.playerId, player.playerId, "canSee", isSpectating || !player.isSpectating)\n\t\t\tapi.setOtherEntitySetting(player.playerId, this.playerId, "canSee", player.isSpectating || !isSpectating)\n\n\t\t\t// Our own fade, and the only place it gets cleared again. Also covers the self pair.\n\t\t\tapi.setOtherEntitySetting(player.playerId, this.playerId, "opacity", fadeSpectators && isSpectating ? SPECTATOR_OPACITY : 1)\n\t\t\t// Others are only ever faded in, never cleared, so an opacity a game set for its own\n\t\t\t// effect survives until that player\'s own startPlaying clears it.\n\t\t\tif (player.playerId !== this.playerId && fadeSpectators && player.isSpectating) {\n\t\t\t\tapi.setOtherEntitySetting(this.playerId, player.playerId, "opacity", SPECTATOR_OPACITY)\n\t\t\t}\n\t\t}\n\t}\n\n\tonMessage(): ChatTags {\n\t\tif (this.game.gamePhase === "beforeGame") {\n\t\t\treturn undefined\n\t\t}\n\t\tconst team = this.team\n\t\tif (!team) {\n\t\t\treturn [\n\t\t\t\tstyle("[", this.game.messageColours.info),\n\t\t\t\tstyle({ translationKey: "sessionBasedGame:spectator" }, this.game.messageColours.info),\n\t\t\t\tstyle("]", this.game.messageColours.info),\n\t\t\t]\n\t\t}\n\n\t\treturn [style("[", team.colour), style(team.name, team.colour), style("]", team.colour)]\n\t}\n\n\tonRespawnRequest(): Pos | undefined {\n\t\tlet spawnArea: RecursiveReadonly<{ spawn: Pos; spawnFacing: Pos }> | undefined\n\t\tif (this.team && this.game.map?.teams[this.team.name]) {\n\t\t\tspawnArea = this.game.map.teams[this.team.name]\n\t\t} else if (this.game.gameOptions.lobby) {\n\t\t\tspawnArea = this.game.gameOptions.lobby\n\t\t} else {\n\t\t\treturn undefined\n\t\t}\n\n\t\tconst { spawn, spawnFacing } = spawnArea\n\t\tconst { low: playAreaLow } = getLowHigh(this.game.gameOptions.playAreaRect)\n\t\tconst playAreaSpawn: Pos = [playAreaLow[0] + spawn[0] + 0.5, playAreaLow[1] + spawn[1] + 0.5, playAreaLow[2] + spawn[2] + 0.5]\n\t\tapi.setVelocity(this.playerId, 0, 0, 0)\n\t\tapi.setCameraDirection(this.playerId, spawnFacing as Pos)\n\t\treturn playAreaSpawn\n\t}\n\n\t/**\n\t * Gets the position of the player relative to the play area.\n\t * @returns The position of the player relative to the play area.\n\t */\n\tgetPositionInPlayArea(): Pos {\n\t\tconst { low: playAreaLow } = getLowHigh(this.game.gameOptions.playAreaRect)\n\t\tconst position = api.getPosition(this.playerId)\n\t\treturn [position[0] - playAreaLow[0], position[1] - playAreaLow[1], position[2] - playAreaLow[2]]\n\t}\n}\n',
          "helpers.ts": 'import { CustomTextStyling, Pos, RecursiveReadonly, TranslatedText } from "@bloxd"\nimport { MapSource, MaybeRecursiveReadonly } from "./types"\n\nexport function style(msg: string | TranslatedText, colour: string): CustomTextStyling {\n\treturn [{ str: msg, style: { colour: colour } }]\n}\n\nexport function roundOutwardsToChunkBoundary(rect: RecursiveReadonly<[Pos, Pos]>): [Pos, Pos] {\n\tconst { low, high } = getLowHigh(rect)\n\treturn [\n\t\t[Math.floor(low[0] / 32) * 32, Math.floor(low[1] / 32) * 32, Math.floor(low[2] / 32) * 32],\n\t\t[Math.ceil(high[0] / 32) * 32, Math.ceil(high[1] / 32) * 32, Math.ceil(high[2] / 32) * 32],\n\t]\n}\n\nexport function getDimensions(rect: MaybeRecursiveReadonly<[Pos, Pos]>): { l: number; w: number; h: number } {\n\tconst [pos1, pos2] = rect\n\treturn {\n\t\tl: Math.abs(pos1[0] - pos2[0]),\n\t\tw: Math.abs(pos1[1] - pos2[1]),\n\t\th: Math.abs(pos1[2] - pos2[2]),\n\t}\n}\n\nexport function getLowHigh(rect: RecursiveReadonly<[Pos, Pos]>): { low: Pos; high: Pos } {\n\tconst [pos1, pos2] = rect\n\treturn {\n\t\tlow: [Math.min(pos1[0], pos2[0]), Math.min(pos1[1], pos2[1]), Math.min(pos1[2], pos2[2])],\n\t\thigh: [Math.max(pos1[0], pos2[0]), Math.max(pos1[1], pos2[1]), Math.max(pos1[2], pos2[2])],\n\t}\n}\n\nexport function getSourceRect(source: MapSource): [Pos, Pos] {\n\tif (source.schematic !== undefined) {\n\t\treturn roundOutwardsToChunkBoundary([[0, 0, 0], api.getSchematicDimensions(source.schematic)])\n\t}\n\treturn roundOutwardsToChunkBoundary(source.rect)\n}\n\nexport function preloadRect(rect: MaybeRecursiveReadonly<[Pos, Pos]>) {\n\t// Preloads the chunks in the rectangle to ensure they\'re loaded when the game starts\n\tconst { low: mapLow, high: mapHigh } = getLowHigh(rect)\n\tfor (let x = mapLow[0]; x < mapHigh[0]; x += 32) {\n\t\tfor (let y = mapLow[1]; y < mapHigh[1]; y += 32) {\n\t\t\tfor (let z = mapLow[2]; z < mapHigh[2]; z += 32) {\n\t\t\t\tapi.getBlock(x, y, z)\n\t\t\t}\n\t\t}\n\t}\n}\n\nfunction numToTwoDigStr(n: number) {\n\treturn (n < 10 ? "0" : "") + n\n}\n\n/**\n * Display ms in format mm:ss, or hh:mm:ss if hours > 0\n * ss is rounded up (i.e. if ms > 0 then ss always 01 or more)\n */\nexport function displayMs(ms: number): string {\n\tconst totalS = Math.ceil(ms / 1000) // Round up to nearest second\n\tconst hours = Math.floor(totalS / 3600)\n\tconst min = Math.floor((totalS % 3600) / 60)\n\tconst sec = Math.floor(totalS % 60)\n\tif (hours > 0) {\n\t\treturn `${hours}:${numToTwoDigStr(min)}:${numToTwoDigStr(sec)}`\n\t}\n\treturn `${min}:${numToTwoDigStr(sec)}`\n}\n',
          "index.ts": 'import { ChatTags, CustomTextStyling, EntityId, PlayerId, Pos, TranslatedText, RecursiveReadonly, BlockName } from "@bloxd"\nimport { BaseTeamInfo, BaseMapInfo, MapSource, SessionBasedGameSetupOptions } from "./types"\nimport { SessionBasedPlayer } from "./SessionBasedPlayer"\nimport { SessionBasedGame } from "./SessionBasedGame"\nimport { roundOutwardsToChunkBoundary, getDimensions, preloadRect, style, getSourceRect } from "./helpers"\n\nlet game: SessionBasedGame<any, any, SessionBasedPlayer<any, any>> | null = null\n\nonPlayerJoin = (playerId: PlayerId) => {\n\tgame?.onPlayerJoin(playerId)\n}\n\nonPlayerLeave = (playerId: PlayerId) => {\n\tgame?.onPlayerLeave(playerId)\n}\n\ntick = () => {\n\tgame?.tick()\n}\n\nonPlayerChat = (playerId: PlayerId, message: string) => {\n\treturn game?.onPlayerChat(playerId, message)\n}\n\nonMobKilledPlayer = (mobId: EntityId, playerId: PlayerId) => {\n\tgame?.onPlayerDie(playerId)\n}\n\nonPlayerKilledOtherPlayer = (killerId: PlayerId, victimId: PlayerId) => {\n\tgame?.onPlayerDie(victimId)\n}\n\nonRespawnRequest = (playerId: PlayerId) => {\n\treturn game?.getPlayer(playerId)?.onRespawnRequest()\n}\n\nonPlayerBoughtShopItem = (playerId: PlayerId, categoryKey: string, itemKey: string) => {\n\tgame?.onPlayerBoughtShopItem(playerId, categoryKey, itemKey)\n}\n\nonBlockStandStart = (playerId: PlayerId, x: number, y: number, z: number, blockName: BlockName) => {\n\tgame?.onBlockStandStart(playerId, x, y, z, blockName)\n}\n\n/**\n * Create a new SessionBasedGame.\n * @param opts - The options for the game.\n * @param opts.teams - The teams for the game. This should include the team name, max players for this team, and hex colour.\n * @param opts.maps - The maps for the game. This should include the map name, source rectangle or schematic path, and the spawn positions for each team.\n * @param opts.lobby - The lobby area. This should include the source rectangle or schematic path, spawn info, and team pads for team choosing.\n * @param opts.playAreaRect - The play area rectangle. These will be rounded outwards to the nearest chunk boundary\n * @param opts.maxSpectators - The maximum number of spectators allowed in the game.\n * @param opts.emptyLobbyStartInSecs - The number of seconds to wait for the game to start when the lobby isn\'t full yet.\n * @param opts.fullLobbyStartInSecs - The number of seconds to wait for the game to start when the lobby is full.\n * @param opts.gameResetInSecs - The number of seconds to wait before resetting the game after the game finishes.\n * @param opts.mapVotingEnabled - Whether to enable map voting.\n * @param opts.onStart - The function to call when the game starts.\n * @param opts.onFinish - The function to call when the game finishes.\n * @param opts.getRightInfoText - The function to call to get the RightInfoText for the game.\n * @param opts.playerConstructor - The constructor for the player class. This should be a class that extends SessionBasedPlayer\n * @returns The game instance\n */\nexport function createGame<TeamInfo extends BaseTeamInfo, MapInfo extends BaseMapInfo<TeamInfo>, Player extends SessionBasedPlayer<TeamInfo, MapInfo>>(\n\topts: SessionBasedGameSetupOptions<TeamInfo, MapInfo, Player>,\n): SessionBasedGame<TeamInfo, MapInfo, Player> {\n\tif (game) {\n\t\tthrow new Error("Game already setup")\n\t}\n\tif (opts.maps.length === 0) {\n\t\tthrow new Error("No maps provided")\n\t}\n\tif (opts.teams.length < 2) {\n\t\tthrow new Error(`At least 2 teams are required (got ${opts.teams.length})`)\n\t}\n\tfor (const team of opts.teams) {\n\t\tif (team.maxPlayers < 1) {\n\t\t\tthrow new Error(`Team ${team.name} max players must be at least 1`)\n\t\t}\n\t}\n\topts.playAreaRect = roundOutwardsToChunkBoundary(opts.playAreaRect)\n\tconst playAreaDimensions = getDimensions(opts.playAreaRect)\n\tpreloadRect(opts.playAreaRect)\n\n\tconst newMaps = []\n\tfor (const map of opts.maps) {\n\t\tconst newMap: MapInfo = {\n\t\t\t...map,\n\t\t\tsource: map.source.schematic !== undefined ? map.source : { ...map.source, rect: roundOutwardsToChunkBoundary(map.source.rect) },\n\t\t}\n\t\tconst mapDimensions = getDimensions(getSourceRect(newMap.source))\n\t\tif (mapDimensions.l > playAreaDimensions.l || mapDimensions.w > playAreaDimensions.w || mapDimensions.h > playAreaDimensions.h) {\n\t\t\tthrow new Error(`Map ${map.name} is too large for play area`)\n\t\t}\n\n\t\t// preload the map chunks\n\t\tif (newMap.source.schematic === undefined) {\n\t\t\tpreloadRect(newMap.source.rect)\n\t\t}\n\t\tnewMaps.push(newMap)\n\t}\n\topts.maps = newMaps\n\n\topts.lobby = {\n\t\t...opts.lobby,\n\t\tsource:\n\t\t\topts.lobby.source.schematic !== undefined\n\t\t\t\t? opts.lobby.source\n\t\t\t\t: ({ ...opts.lobby.source, rect: roundOutwardsToChunkBoundary(opts.lobby.source.rect) } as MapSource),\n\t}\n\tconst lobbyDimensions = getDimensions(getSourceRect(opts.lobby.source))\n\tif (lobbyDimensions.l > playAreaDimensions.l || lobbyDimensions.w > playAreaDimensions.w || lobbyDimensions.h > playAreaDimensions.h) {\n\t\tthrow new Error(`Lobby is too large for play area`)\n\t}\n\tif (opts.lobby.source.schematic === undefined) {\n\t\tpreloadRect(opts.lobby.source.rect)\n\t}\n\n\tconst newGame = new SessionBasedGame<TeamInfo, MapInfo, Player>({\n\t\t...defaultSessionBasedGameSetupOptions,\n\t\t...opts,\n\t} as Required<SessionBasedGameSetupOptions<TeamInfo, MapInfo, Player>>)\n\tgame = newGame\n\treturn newGame\n}\n\nconst defaultSessionBasedGameSetupOptions: Required<\n\tOmit<\n\t\tSessionBasedGameSetupOptions<BaseTeamInfo, BaseMapInfo<BaseTeamInfo>, SessionBasedPlayer<BaseTeamInfo, BaseMapInfo<BaseTeamInfo>>>,\n\t\t"teams" | "maps" | "playAreaRect" | "lobby"\n\t>\n> = {\n\tmaxSpectators: 10,\n\temptyLobbyStartInSecs: 60,\n\tfullLobbyStartInSecs: 10,\n\tgameResetInSecs: 10,\n\tmapVotingEnabled: false,\n\tonStart: () => {\n\t\tapi.broadcastMessage(style("Game started", game?.messageColours.success))\n\t},\n\tonFinish: (winningTeam: BaseTeamInfo) => {\n\t\tapi.broadcastMessage(style(`${winningTeam.name} won the game`, winningTeam.colour))\n\t},\n\tgetRightInfoText: (player: SessionBasedPlayer<BaseTeamInfo, BaseMapInfo<BaseTeamInfo>>) => {\n\t\treturn game?.getStartingInText()\n\t},\n\tplayerConstructor: SessionBasedPlayer,\n}\n\nexport { SessionBasedGame, SessionBasedPlayer, BaseTeamInfo, BaseMapInfo, SessionBasedGameSetupOptions }\n\nexport type { MapSource } from "./types"\n',
          "types.ts": 'import { BlockName, CustomTextStyling, Pos, RecursiveReadonly } from "@bloxd"\nimport { SessionBasedPlayer } from "./SessionBasedPlayer"\n\nexport type BaseTeamInfo = RecursiveReadonly<{\n\tname: string\n\tmaxPlayers: number\n\tcolour: string\n}>\n\n/** A world rectangle (rounded outwards to chunk boundaries), or a project schematic path. */\nexport type MapSource = RecursiveReadonly<{ rect: [Pos, Pos]; schematic?: never } | { schematic: string; rect?: never }>\n\nexport type BaseMapInfo<TeamInfo extends BaseTeamInfo> = RecursiveReadonly<{\n\t/** The name of the map */\n\tname: string\n\t/** The icon of the map - used in the Map Voting Shop UI */\n\ticon: string\n\tsource: MapSource\n}> & {\n\t// Kept out of the RecursiveReadonly above and made readonly explicitly: TypeScript can\'t index a\n\t// Record keyed by a still-generic type (TeamInfo["name"]) once RecursiveReadonly\'s recursive\n\t// conditional type has wrapped it.\n\treadonly teams: Record<\n\t\tTeamInfo["name"],\n\t\tRecursiveReadonly<{\n\t\t\tspawn: Pos // offset from the lowest corner of the map (after rounding outwards)\n\t\t\tspawnFacing: Pos\n\t\t}>\n\t>\n}\n\ntype Constructor<T> = new (...args: any[]) => T\n\nexport type TeamPadInfo = RecursiveReadonly<{\n\trect: [Pos, Pos]\n\temptyBlock: BlockName\n\tfullBlock: BlockName\n}>\n\nexport type SessionBasedGameSetupOptions<\n\tTeamInfo extends BaseTeamInfo,\n\tMapInfo extends BaseMapInfo<TeamInfo>,\n\tPlayer extends SessionBasedPlayer<TeamInfo, MapInfo>,\n> = {\n\tteams: readonly TeamInfo[]\n\tmaps: readonly MapInfo[]\n\t/** Lobby area information */\n\tlobby: RecursiveReadonly<{\n\t\tsource: MapSource\n\t\tspawn: Pos\n\t\tspawnFacing: Pos\n\t}> & {\n\t\t// Kept out of the RecursiveReadonly above: TeamPadInfo is already recursively readonly on its\n\t\t// own, and re-wrapping a Record keyed by a still-generic type (TeamInfo["name"]) breaks indexing.\n\t\t/** Block coordinates representing the start and the end of the team pads. Offset from the lowest corner of the map (after rounding outwards). If not provided, team choosing will be disabled. */\n\t\tteamPads?: Record<TeamInfo["name"], TeamPadInfo>\n\t}\n\t/** Block coordinates representing the start and the end of the play area. These will be rounded outwards to the nearest chunk boundary */\n\tplayAreaRect: readonly [Pos, Pos]\n\t/** Maximum number of spectators allowed in the game */\n\tmaxSpectators?: number\n\t/** The number of seconds to wait before resetting the game after the game finishes */\n\temptyLobbyStartInSecs?: number\n\t/** The number of seconds to wait before starting the game when the lobby is full */\n\tfullLobbyStartInSecs?: number\n\t/** The number of seconds to wait before resetting the game after the game finishes */\n\tgameResetInSecs?: number\n\t/** Enable Map Voting - If enabled, players will be able to vote for the next map to play. */\n\tmapVotingEnabled?: boolean\n\t/** Function to call when the game starts */\n\tonStart?: () => void\n\t/** Function to call when the game finishes */\n\tonFinish?: (winningTeam: TeamInfo) => void\n\t/** Function to get the RightInfoText for a player */\n\tgetRightInfoText?: (player: SessionBasedPlayer<TeamInfo, MapInfo>) => string | CustomTextStyling | null\n\t/** The constructor for the player class. This should be a class that extends SessionBasedPlayer */\n\tplayerConstructor?: Constructor<Player>\n}\n\nexport type MaybeRecursiveReadonly<T> = RecursiveReadonly<T> | T\n'
        },
        dependencies: ["helpers"],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\nvar __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  SessionBasedGame: () => SessionBasedGame2,\n  SessionBasedPlayer: () => SessionBasedPlayer,\n  createGame: () => createGame\n});\nmodule.exports = __toCommonJS(index_exports);\n\n// world-code-plugin:helpers.ts\nfunction style(msg, colour) {\n  return [{ str: msg, style: { colour } }];\n}\nfunction roundOutwardsToChunkBoundary(rect) {\n  const { low, high } = getLowHigh(rect);\n  return [\n    [Math.floor(low[0] / 32) * 32, Math.floor(low[1] / 32) * 32, Math.floor(low[2] / 32) * 32],\n    [Math.ceil(high[0] / 32) * 32, Math.ceil(high[1] / 32) * 32, Math.ceil(high[2] / 32) * 32]\n  ];\n}\nfunction getDimensions(rect) {\n  const [pos1, pos2] = rect;\n  return {\n    l: Math.abs(pos1[0] - pos2[0]),\n    w: Math.abs(pos1[1] - pos2[1]),\n    h: Math.abs(pos1[2] - pos2[2])\n  };\n}\nfunction getLowHigh(rect) {\n  const [pos1, pos2] = rect;\n  return {\n    low: [Math.min(pos1[0], pos2[0]), Math.min(pos1[1], pos2[1]), Math.min(pos1[2], pos2[2])],\n    high: [Math.max(pos1[0], pos2[0]), Math.max(pos1[1], pos2[1]), Math.max(pos1[2], pos2[2])]\n  };\n}\nfunction getSourceRect(source) {\n  if (source.schematic !== void 0) {\n    return roundOutwardsToChunkBoundary([[0, 0, 0], api.getSchematicDimensions(source.schematic)]);\n  }\n  return roundOutwardsToChunkBoundary(source.rect);\n}\nfunction preloadRect(rect) {\n  const { low: mapLow, high: mapHigh } = getLowHigh(rect);\n  for (let x = mapLow[0]; x < mapHigh[0]; x += 32) {\n    for (let y = mapLow[1]; y < mapHigh[1]; y += 32) {\n      for (let z = mapLow[2]; z < mapHigh[2]; z += 32) {\n        api.getBlock(x, y, z);\n      }\n    }\n  }\n}\nfunction numToTwoDigStr(n) {\n  return (n < 10 ? "0" : "") + n;\n}\nfunction displayMs(ms) {\n  const totalS = Math.ceil(ms / 1e3);\n  const hours = Math.floor(totalS / 3600);\n  const min = Math.floor(totalS % 3600 / 60);\n  const sec = Math.floor(totalS % 60);\n  if (hours > 0) {\n    return `${hours}:${numToTwoDigStr(min)}:${numToTwoDigStr(sec)}`;\n  }\n  return `${min}:${numToTwoDigStr(sec)}`;\n}\n\n// world-code-plugin:SessionBasedPlayer.ts\nvar SPECTATOR_OPACITY = 0.5;\nvar SessionBasedPlayer = class {\n  constructor(playerId, game2) {\n    __publicField(this, "playerId", playerId);\n    __publicField(this, "game", game2);\n    __publicField(this, "isSpectating", true);\n    __publicField(this, "team", null);\n    __publicField(this, "requestedTeam", null);\n    __publicField(this, "qTextId", null);\n    api.setPlayerGamemode(this.playerId, "survival");\n    this.startSpectating();\n    this.spawn();\n  }\n  spawn() {\n    const spawnPosition = this.onRespawnRequest();\n    if (spawnPosition) {\n      api.setPosition(this.playerId, spawnPosition);\n    }\n  }\n  /**\n   * Sets the player as playing the game, setting their health, shields, and other settings.\n   * Automatically called at the start of a game for players assigned to a team.\n   */\n  startPlaying() {\n    this.isSpectating = false;\n    const maxHealth = api.getClientOption(this.playerId, "maxHealth");\n    api.setHealth(this.playerId, maxHealth);\n    if (api.getHealth(this.playerId) !== null) {\n      api.setShieldAmount(this.playerId, api.getClientOption(this.playerId, "initialShield"));\n    }\n    api.setClientOptions(this.playerId, {\n      initialHealth: maxHealth,\n      creative: false,\n      canAltAction: true,\n      canChange: false,\n      useFullInventory: true,\n      cantBreakError: "",\n      cantBuildError: [{ str: { translationKey: "general:cantBuildHere" } }],\n      canPickUpItems: true,\n      autoRespawn: true,\n      secsToRespawn: 5,\n      respawnButtonText: "sessionBasedGame:spectate",\n      usePlayAgainButton: true\n    });\n    this.updateOtherEntitySettings(false);\n    api.setCanChangeBlockRect(this.playerId, ...this.game.gameOptions.playAreaRect);\n    if (this.team) {\n      api.setTargetedPlayerSettingForEveryone(this.playerId, "killfeedColour", this.team.colour, true);\n      api.setTargetedPlayerSettingForEveryone(this.playerId, "colorInLobbyLeaderboard", this.team.colour, true);\n    }\n    this.spawn();\n  }\n  /**\n   * Sets the player as spectating the game, resetting their health, shields, and other settings.\n   * Automatically called at the start of a game for players not assigned to a team.\n   * Call this function to turn a player into a spectator (for example, once they die).\n   */\n  startSpectating() {\n    this.isSpectating = true;\n    this.team = null;\n    const isBeforeGame = this.game.gamePhase === "beforeGame";\n    api.setClientOptions(this.playerId, {\n      creative: !isBeforeGame,\n      useFullInventory: false,\n      canAltAction: isBeforeGame,\n      canChange: false,\n      cantBreakError: [\n        { str: { translationKey: "sessionBasedGame:cantChangeBlocksWhileSpectating" }, style: { colour: this.game.messageColours.error } }\n      ],\n      cantBuildError: [\n        { str: { translationKey: "sessionBasedGame:cantChangeBlocksWhileSpectating" }, style: { colour: this.game.messageColours.error } }\n      ],\n      canPickUpItems: true,\n      autoRespawn: false,\n      secsToRespawn: 3,\n      respawnButtonText: isBeforeGame ? "general:respawn" : "sessionBasedGame:spectate",\n      usePlayAgainButton: true\n    });\n    api.setEveryoneSettingForPlayer(this.playerId, "canSee", true);\n    this.updateOtherEntitySettings(true);\n    api.resetCanChangeBlockRect(this.playerId, ...this.game.gameOptions.playAreaRect);\n    for (const effect of api.getEffects(this.playerId)) {\n      api.removeEffect(this.playerId, effect);\n    }\n    api.clearInventory(this.playerId);\n    this.game.checkWin();\n  }\n  updateOtherEntitySettings(isSpectating) {\n    const fadeSpectators = this.game.spectatorsAreFaded();\n    for (const player of this.game.getPlayers()) {\n      const canAttack = !isSpectating && !player.isSpectating && (this.playerId === player.playerId || this.team !== player.team);\n      api.setOtherEntitySetting(this.playerId, player.playerId, "canAttack", canAttack);\n      api.setOtherEntitySetting(player.playerId, this.playerId, "canAttack", canAttack);\n      api.setOtherEntitySetting(this.playerId, player.playerId, "canSee", isSpectating || !player.isSpectating);\n      api.setOtherEntitySetting(player.playerId, this.playerId, "canSee", player.isSpectating || !isSpectating);\n      api.setOtherEntitySetting(player.playerId, this.playerId, "opacity", fadeSpectators && isSpectating ? SPECTATOR_OPACITY : 1);\n      if (player.playerId !== this.playerId && fadeSpectators && player.isSpectating) {\n        api.setOtherEntitySetting(this.playerId, player.playerId, "opacity", SPECTATOR_OPACITY);\n      }\n    }\n  }\n  onMessage() {\n    if (this.game.gamePhase === "beforeGame") {\n      return void 0;\n    }\n    const team = this.team;\n    if (!team) {\n      return [\n        style("[", this.game.messageColours.info),\n        style({ translationKey: "sessionBasedGame:spectator" }, this.game.messageColours.info),\n        style("]", this.game.messageColours.info)\n      ];\n    }\n    return [style("[", team.colour), style(team.name, team.colour), style("]", team.colour)];\n  }\n  onRespawnRequest() {\n    let spawnArea;\n    if (this.team && this.game.map?.teams[this.team.name]) {\n      spawnArea = this.game.map.teams[this.team.name];\n    } else if (this.game.gameOptions.lobby) {\n      spawnArea = this.game.gameOptions.lobby;\n    } else {\n      return void 0;\n    }\n    const { spawn, spawnFacing } = spawnArea;\n    const { low: playAreaLow } = getLowHigh(this.game.gameOptions.playAreaRect);\n    const playAreaSpawn = [playAreaLow[0] + spawn[0] + 0.5, playAreaLow[1] + spawn[1] + 0.5, playAreaLow[2] + spawn[2] + 0.5];\n    api.setVelocity(this.playerId, 0, 0, 0);\n    api.setCameraDirection(this.playerId, spawnFacing);\n    return playAreaSpawn;\n  }\n  /**\n   * Gets the position of the player relative to the play area.\n   * @returns The position of the player relative to the play area.\n   */\n  getPositionInPlayArea() {\n    const { low: playAreaLow } = getLowHigh(this.game.gameOptions.playAreaRect);\n    const position = api.getPosition(this.playerId);\n    return [position[0] - playAreaLow[0], position[1] - playAreaLow[1], position[2] - playAreaLow[2]];\n  }\n};\n\n// world-code-plugin:MapVoter.ts\nvar import_helpers2 = require("@plugins/helpers");\nvar MAP_VOTING_CATEGORY = "__SBG_MAP_VOTING__";\nvar MAP_VOTING_ITEM_PREFIX = "__SBG_MAP_";\nvar MAP_OPTION_COUNT = 4;\nvar MapVoter = class {\n  constructor(maps, players) {\n    __publicField(this, "maps", maps);\n    __publicField(this, "players", players);\n    __publicField(this, "possibleMapOptions", []);\n    __publicField(this, "mapVotes", {});\n    __publicField(this, "mapVotingActive", false);\n  }\n  createMapVoting() {\n    if (this.mapVotingActive) {\n      return;\n    }\n    this.mapVotingActive = true;\n    api.configureShopCategory(MAP_VOTING_CATEGORY, {\n      customTitle: "Map Voting",\n      sortPriority: 0.5\n    });\n    for (const map of this.possibleMapOptions) {\n      api.deleteShopItem(MAP_VOTING_CATEGORY, `${MAP_VOTING_ITEM_PREFIX}${map.name}`);\n    }\n    const possibleOptions = this.maps.slice();\n    (0, import_helpers2.shuffleArray)(possibleOptions);\n    this.possibleMapOptions = possibleOptions.slice(0, MAP_OPTION_COUNT);\n    for (const map of this.possibleMapOptions) {\n      api.createShopItem(MAP_VOTING_CATEGORY, `${MAP_VOTING_ITEM_PREFIX}${map.name}`, {\n        image: map.icon,\n        customTitle: map.name,\n        canBuy: true,\n        buyButtonText: "Votes: 0"\n      });\n    }\n    (0, import_helpers2.setTimeout)(() => {\n      for (const playerId in this.players) {\n        api.openShop(playerId, false, MAP_VOTING_CATEGORY);\n      }\n    }, 100);\n  }\n  onMapVote(playerId, categoryKey, shopItemKey) {\n    if (categoryKey !== MAP_VOTING_CATEGORY) {\n      return;\n    }\n    if (!this.mapVotingActive) {\n      return;\n    }\n    if (!shopItemKey.startsWith(MAP_VOTING_ITEM_PREFIX)) {\n      return;\n    }\n    const mapName = shopItemKey.replace(MAP_VOTING_ITEM_PREFIX, "");\n    if (!this.possibleMapOptions.some((map) => {\n      return map.name === mapName;\n    })) {\n      return;\n    }\n    const hadVotedBefore = !!this.mapVotes[playerId];\n    this.mapVotes[playerId] = mapName;\n    this.updateMapVotingForPlayer(playerId);\n    this.updateMapCountsForEveryone();\n    if (!hadVotedBefore) {\n      api.openShop(playerId, true);\n    }\n  }\n  onPlayerJoin(playerId) {\n    if (!this.mapVotingActive) {\n      return;\n    }\n    this.updateMapVotingForPlayer(playerId);\n    (0, import_helpers2.setTimeout)(\n      () => {\n        api.openShop(playerId, false, MAP_VOTING_CATEGORY);\n      },\n      100,\n      playerId\n    );\n  }\n  onPlayerLeave(playerId) {\n    if (!this.mapVotingActive) {\n      return;\n    }\n    delete this.mapVotes[playerId];\n    this.updateMapCountsForEveryone();\n  }\n  updateMapCountsForEveryone() {\n    for (const map of this.possibleMapOptions) {\n      const votes = Object.values(this.mapVotes).filter((v) => {\n        return v === map.name;\n      }).length;\n      api.updateShopItem(MAP_VOTING_CATEGORY, `${MAP_VOTING_ITEM_PREFIX}${map.name}`, {\n        buyButtonText: `Votes: ${votes}`\n      });\n    }\n  }\n  updateMapVotingForPlayer(playerId) {\n    api.configureShopCategoryForPlayer(playerId, MAP_VOTING_CATEGORY, {\n      redDot: !this.mapVotes[playerId]\n    });\n    for (const map of this.possibleMapOptions) {\n      api.updateShopItemForPlayer(playerId, MAP_VOTING_CATEGORY, `${MAP_VOTING_ITEM_PREFIX}${map.name}`, {\n        canBuy: this.mapVotes[playerId] !== map.name,\n        isSelected: this.mapVotes[playerId] === map.name\n      });\n    }\n  }\n  endMapVoting() {\n    if (!this.mapVotingActive) {\n      return;\n    }\n    this.mapVotingActive = false;\n    for (const map of this.possibleMapOptions) {\n      api.deleteShopItem(MAP_VOTING_CATEGORY, `${MAP_VOTING_ITEM_PREFIX}${map.name}`);\n    }\n    this.possibleMapOptions = [];\n    this.mapVotes = {};\n  }\n  chooseMap() {\n    if (!this.mapVotingActive) {\n      return null;\n    }\n    const votedPlayers = Object.keys(this.mapVotes);\n    if (votedPlayers.length === 0) {\n      return (0, import_helpers2.getRandomItem)(this.possibleMapOptions);\n    }\n    const randomPlayer = (0, import_helpers2.getRandomItem)(votedPlayers);\n    const choice = this.mapVotes[randomPlayer];\n    return this.maps.find((map) => {\n      return map.name === choice;\n    });\n  }\n};\n\n// world-code-plugin:SessionBasedGame.ts\nvar import_helpers4 = require("@plugins/helpers");\nvar SessionBasedGame2 = class {\n  constructor(gameOptions) {\n    __publicField(this, "gameOptions", gameOptions);\n    __publicField(this, "gamePhase", "beforeGame");\n    __publicField(this, "startingRound", false);\n    __publicField(this, "players", {});\n    __publicField(this, "map", null);\n    __publicField(this, "gameStartTime", 0);\n    __publicField(this, "startGameAt", Infinity);\n    __publicField(this, "endGameAt", Infinity);\n    __publicField(this, "mapVoter");\n    __publicField(this, "messageColours", {\n      error: "#ff0000",\n      success: "#00ff00",\n      info: "#ffffff"\n    });\n    this.mapVoter = new MapVoter(this.gameOptions.maps, this.players);\n    this.resetGame(false);\n    (0, import_helpers4.setInterval)(() => {\n      this.sendRightInfoText();\n    }, 1e3);\n  }\n  get playersForFullLobby() {\n    return this.gameOptions.teams.reduce((a, b) => {\n      return a + b.maxPlayers;\n    }, 0);\n  }\n  get playerCount() {\n    return Object.keys(this.players).length;\n  }\n  /**\n   * Gets the player object for a given player ID.\n   * @param playerId The player ID to get the player for\n   */\n  getPlayer(playerId) {\n    return this.players[playerId];\n  }\n  /**\n   * Gets all the players in the game, including spectators.\n   * @returns An iterator of all the players in the game.\n   */\n  *getPlayers() {\n    for (const playerId in this.players) {\n      yield this.players[playerId];\n    }\n  }\n  getStartingInText() {\n    if (this.gamePhase !== "beforeGame") {\n      return [];\n    }\n    const timeLeft = this.startGameAt - api.now();\n    if (timeLeft < 0) {\n      return [];\n    }\n    return [\n      ...style({ translationKey: "sessionBasedGame:startingIn" }, this.messageColours.info),\n      " ",\n      ...style(`${displayMs(timeLeft)}`, timeLeft < 1e4 ? this.messageColours.success : this.messageColours.info)\n    ];\n  }\n  /**\n   * Gives all players coloured armour based on their team name. Spectators will get black armour.\n   * If their team name is not a valid colour, they will be skipped.\n   */\n  giveColouredArmourToEveryone() {\n    for (const playerId in this.players) {\n      const player = this.players[playerId];\n      const prefix = player.team ? player.team.name : "Black";\n      try {\n        api.setItemSlot(playerId, 46, `${prefix} Wood Helmet`);\n        api.setItemSlot(playerId, 47, `${prefix} Wood Chestplate`);\n        api.setItemSlot(playerId, 48, `${prefix} Wood Gauntlets`);\n        api.setItemSlot(playerId, 49, `${prefix} Wood Leggings`);\n        api.setItemSlot(playerId, 50, `${prefix} Wood Boots`);\n      } catch (e) {\n        api.log(`Error giving coloured armour to player ${playerId}: ${e}`);\n      }\n    }\n  }\n  onPlayerJoin(playerId) {\n    this.players[playerId] = new this.gameOptions.playerConstructor(playerId, this);\n    this.mapVoter.onPlayerJoin(playerId);\n    this.updateTimeTillStart();\n  }\n  onPlayerLeave(playerId) {\n    if (!this.players[playerId]) {\n      return;\n    }\n    if (this.gamePhase === "beforeGame") {\n      const requestedTeam = this.players[playerId].requestedTeam;\n      if (requestedTeam) {\n        this.placeTeamPad(requestedTeam.name, false);\n      }\n    }\n    delete this.players[playerId];\n    this.checkWin();\n    this.mapVoter.onPlayerLeave(playerId);\n  }\n  onPlayerDie(playerId) {\n    this.checkWin();\n  }\n  checkWin() {\n    if (this.gamePhase !== "inGame") {\n      return;\n    }\n    const teamsAlive = this.getTeamsAlive();\n    if (teamsAlive.length === 1) {\n      this.makeTeamWin(teamsAlive[0]);\n    }\n  }\n  onPlayerChat(playerId, message) {\n    return this.players[playerId].onMessage();\n  }\n  onPlayerBoughtShopItem(playerId, categoryKey, itemKey) {\n    this.mapVoter.onMapVote(playerId, categoryKey, itemKey);\n  }\n  tick() {\n    this.checkGameTransition();\n  }\n  getTeamsAlive() {\n    const teamsAlive = [];\n    for (const playerId in this.players) {\n      const player = this.players[playerId];\n      if (player.team && !teamsAlive.includes(player.team)) {\n        teamsAlive.push(player.team);\n      }\n    }\n    return teamsAlive;\n  }\n  updateTimeTillStart() {\n    if (this.gamePhase === "beforeGame" && this.playerCount >= this.playersForFullLobby) {\n      this.setStartGame(this.gameOptions.fullLobbyStartInSecs);\n    }\n  }\n  setStartGame(startInSecs) {\n    const newStartAt = api.now() + startInSecs * 1e3;\n    this.startGameAt = Math.min(this.startGameAt, newStartAt);\n    api.broadcastMessage(style(`Starting in ${startInSecs}s...`, this.messageColours.info));\n  }\n  checkGameTransition() {\n    if (this.gamePhase === "beforeGame") {\n      const timeLeft = this.startGameAt - api.now();\n      if (timeLeft < 0) {\n        if (this.playerCount < 2) {\n          api.broadcastMessage(style("Not enough players to start game", this.messageColours.error));\n          this.startGameAt = Infinity;\n          this.setStartGame(this.gameOptions.emptyLobbyStartInSecs);\n        } else {\n          this.startGame();\n        }\n        return;\n      } else if (timeLeft < 5e3) {\n        const secsLeft = Math.ceil(timeLeft / 1e3);\n        for (const playerId in this.players) {\n          api.setClientOption(playerId, "middleTextUpper", style(`Game starts in ${secsLeft} seconds`, this.messageColours.info));\n        }\n      } else {\n        for (const playerId in this.players) {\n          api.setClientOption(playerId, "middleTextUpper", []);\n        }\n      }\n    }\n    if (this.gamePhase === "gameFinished") {\n      const timeLeft = this.endGameAt - api.now();\n      if (timeLeft < 0) {\n        this.resetGame(true);\n      } else if (timeLeft < 5e3) {\n        const secsLeft = Math.ceil(timeLeft / 1e3);\n        for (const playerId in this.players) {\n          api.setClientOption(playerId, "middleTextUpper", style(`Game ends in ${secsLeft} seconds`, this.messageColours.info));\n        }\n      }\n    }\n  }\n  sendRightInfoText() {\n    for (const playerId in this.players) {\n      const rightInfoText = this.gameOptions.getRightInfoText(this.players[playerId]);\n      if (rightInfoText) {\n        api.setClientOption(playerId, "RightInfoText", rightInfoText);\n      }\n    }\n  }\n  loadMap(source) {\n    const rect = getSourceRect(source);\n    const mapDimensions = getDimensions(rect);\n    const { low: mapLow } = getLowHigh(rect);\n    const { low: playAreaLow, high: playAreaHigh } = getLowHigh(this.gameOptions.playAreaRect);\n    for (let x = 0; x < mapDimensions.l; x += 32) {\n      for (let y = 0; y < mapDimensions.w; y += 32) {\n        for (let z = 0; z < mapDimensions.h; z += 32) {\n          const mapChunkPos = [mapLow[0] + x, mapLow[1] + y, mapLow[2] + z];\n          const playAreaChunkPos = [playAreaLow[0] + x, playAreaLow[1] + y, playAreaLow[2] + z];\n          if (source.schematic !== void 0) {\n            api.setChunkAsSchematic(source.schematic, mapChunkPos, playAreaChunkPos);\n          } else {\n            (0, import_helpers4.forceLoadChunk)(mapChunkPos[0], mapChunkPos[1], mapChunkPos[2], () => {\n              api.copyChunk(mapChunkPos, playAreaChunkPos);\n            });\n          }\n        }\n      }\n    }\n    const mapEnd = [playAreaLow[0] + mapDimensions.l, playAreaLow[1] + mapDimensions.w, playAreaLow[2] + mapDimensions.h];\n    fillOutsideWithAir(playAreaLow, playAreaHigh, mapEnd);\n  }\n  startGame() {\n    api.setMaxPlayers(1, this.playersForFullLobby + this.gameOptions.maxSpectators);\n    this.assignTeams();\n    this.map = null;\n    if (this.gameOptions.mapVotingEnabled) {\n      this.map = this.mapVoter.chooseMap();\n      this.mapVoter.endMapVoting();\n    }\n    if (!this.map) {\n      this.map = (0, import_helpers4.getRandomItem)(this.gameOptions.maps);\n    }\n    this.startingRound = true;\n    try {\n      for (const playerId in this.players) {\n        api.setClientOption(playerId, "middleTextUpper", []);\n        if (this.players[playerId].team) {\n          this.players[playerId].startPlaying();\n        } else {\n          this.players[playerId].startSpectating();\n        }\n      }\n      this.loadMap(this.map.source);\n      this.gameStartTime = api.now();\n      this.gamePhase = "inGame";\n    } finally {\n      this.startingRound = false;\n    }\n    this.gameOptions.onStart();\n  }\n  /**\n   * Whether spectators should render faded. gamePhase can\'t be read directly: it only flips to\n   * "inGame" once startGame() has started every player, and the sit-out spectators it makes\n   * along the way need fading too.\n   */\n  spectatorsAreFaded() {\n    return this.startingRound || this.gamePhase === "inGame";\n  }\n  assignTeams() {\n    const teamCounts = Object.fromEntries(\n      this.gameOptions.teams.map((team) => {\n        return [team.name, 0];\n      })\n    );\n    const requestedPlayers = [];\n    const unrequestedPlayers = [];\n    for (const playerId in this.players) {\n      const player = this.players[playerId];\n      if (player.requestedTeam) {\n        requestedPlayers.push(playerId);\n      } else {\n        unrequestedPlayers.push(playerId);\n      }\n    }\n    (0, import_helpers4.shuffleArray)(unrequestedPlayers);\n    const playerIds = [...requestedPlayers, ...unrequestedPlayers];\n    for (const playerId of playerIds) {\n      const player = this.players[playerId];\n      if (player.requestedTeam) {\n        player.team = player.requestedTeam;\n        teamCounts[player.requestedTeam.name]++;\n        continue;\n      }\n      let smallestTeamPlayers = Infinity;\n      let smallestTeam = null;\n      for (const team of this.gameOptions.teams) {\n        const numOnTeam = teamCounts[team.name];\n        if (numOnTeam < smallestTeamPlayers && numOnTeam < team.maxPlayers) {\n          smallestTeamPlayers = numOnTeam;\n          smallestTeam = team;\n        }\n      }\n      if (smallestTeam === null) {\n        continue;\n      }\n      this.players[playerId].team = smallestTeam;\n      teamCounts[smallestTeam.name]++;\n    }\n  }\n  /**\n   * Manually sets a team to win the game. Will begin the game reset timer to restart the game.#\n   * Automatically called when there is only one team left.\n   * @param winningTeam - The team object that won the game.\n   */\n  makeTeamWin(winningTeam) {\n    if (this.gamePhase !== "inGame") {\n      return;\n    }\n    this.gamePhase = "gameFinished";\n    this.gameOptions.onFinish(winningTeam);\n    this.endGameAt = api.now() + this.gameOptions.gameResetInSecs * 1e3;\n  }\n  resetGame(restart) {\n    this.gamePhase = "beforeGame";\n    this.startGameAt = Infinity;\n    this.endGameAt = Infinity;\n    for (const playerId in this.players) {\n      const player = this.players[playerId];\n      player.startSpectating();\n      player.requestedTeam = null;\n      if (restart) {\n        api.killLifeform(playerId);\n      }\n    }\n    api.setMaxPlayers(this.playersForFullLobby, this.playersForFullLobby + this.gameOptions.maxSpectators);\n    this.loadMap(this.gameOptions.lobby.source);\n    if (this.gameOptions.lobby.teamPads) {\n      this.placeTeamPads();\n    }\n    this.setStartGame(this.gameOptions.emptyLobbyStartInSecs);\n    if (this.gameOptions.mapVotingEnabled) {\n      this.mapVoter.createMapVoting();\n    }\n  }\n  onBlockStandStart(playerId, x, y, z, blockName) {\n    if (!this.gameOptions.lobby.teamPads) {\n      return;\n    }\n    if (this.gamePhase !== "beforeGame") {\n      return;\n    }\n    const player = this.players[playerId];\n    let team = null;\n    const { low: playAreaLow, high: playAreaHigh } = getLowHigh(this.gameOptions.playAreaRect);\n    for (const teamPadName in this.gameOptions.lobby.teamPads) {\n      const teamPadInfo = this.gameOptions.lobby.teamPads[teamPadName];\n      const { low: rectLow, high: rectHigh } = getLowHigh(teamPadInfo.rect);\n      rectLow[0] += playAreaLow[0];\n      rectLow[1] += playAreaLow[1];\n      rectLow[2] += playAreaLow[2];\n      rectHigh[0] += playAreaLow[0];\n      rectHigh[1] += playAreaLow[1];\n      rectHigh[2] += playAreaLow[2];\n      if (api.isInsideRect([x, y, z], rectLow, rectHigh)) {\n        team = this.gameOptions.teams.find((team2) => {\n          return team2.name === teamPadName;\n        });\n        break;\n      }\n    }\n    if (!team) {\n      return;\n    }\n    const oldTeam = player.requestedTeam;\n    if (oldTeam === team) {\n      return;\n    }\n    let requestCount = 0;\n    for (const playerId2 in this.players) {\n      const player2 = this.players[playerId2];\n      if (player2.requestedTeam === team) {\n        requestCount++;\n      }\n    }\n    if (player.qTextId) {\n      api.removeFromQueue(player.qTextId);\n    }\n    if (requestCount >= team.maxPlayers) {\n      if (player.requestedTeam !== team) {\n        player.qTextId = api.queueMiddleTextLower(playerId, style(`${team.name} team is full`, this.messageColours.error), 1e3);\n      }\n      this.placeTeamPad(team.name, true);\n      return;\n    }\n    player.requestedTeam = team;\n    player.qTextId = api.queueMiddleTextLower(playerId, style(`${team.name} team selected`, this.messageColours.success), 1e3);\n    if (oldTeam !== team) {\n      if (oldTeam) {\n        this.placeTeamPad(oldTeam.name, false);\n      }\n      const isFull = requestCount + 1 >= team.maxPlayers;\n      this.placeTeamPad(team.name, isFull);\n    }\n  }\n  placeTeamPad(teamName, full) {\n    const { low: playAreaLow } = getLowHigh(this.gameOptions.playAreaRect);\n    const { rect, emptyBlock, fullBlock } = this.gameOptions.lobby.teamPads[teamName];\n    const { low: rectLow, high: rectHigh } = getLowHigh(rect);\n    for (let x = rectLow[0] + playAreaLow[0]; x <= rectHigh[0] + playAreaLow[0]; x += 32) {\n      for (let y = rectLow[1] + playAreaLow[1]; y <= rectHigh[1] + playAreaLow[1]; y += 32) {\n        for (let z = rectLow[2] + playAreaLow[2]; z <= rectHigh[2] + playAreaLow[2]; z += 32) {\n          (0, import_helpers4.forceLoadChunk)(x, y, z, () => {\n            const endX = Math.min(x + 31, rectHigh[0] + playAreaLow[0]);\n            const endY = Math.min(y + 31, rectHigh[1] + playAreaLow[1]);\n            const endZ = Math.min(z + 31, rectHigh[2] + playAreaLow[2]);\n            fillBox([x, y, z], [endX, endY, endZ], full ? fullBlock : emptyBlock);\n          });\n        }\n      }\n    }\n  }\n  placeTeamPads() {\n    for (const teamName in this.gameOptions.lobby.teamPads) {\n      this.placeTeamPad(teamName, false);\n    }\n  }\n};\nfunction fillOutsideWithAir(low, high, copiedHigh) {\n  for (let axis = 0; axis < 3; axis++) {\n    const slabLow = [low[0], low[1], low[2]];\n    const slabHigh = [high[0], high[1], high[2]];\n    slabLow[axis] = copiedHigh[axis] + 1;\n    for (let earlier = 0; earlier < axis; earlier++) {\n      slabHigh[earlier] = Math.min(copiedHigh[earlier], high[earlier]);\n    }\n    if (slabLow[0] <= slabHigh[0] && slabLow[1] <= slabHigh[1] && slabLow[2] <= slabHigh[2]) {\n      fillBox(slabLow, slabHigh, "Air");\n    }\n  }\n}\nfunction fillBox(pos1, pos2, block) {\n  const maxRectVol = 360;\n  const {\n    low: [x1, y1, z1],\n    high: [x2, y2, z2]\n  } = getLowHigh([pos1, pos2]);\n  const zSizeFull = z2 - z1 + 1;\n  const zStep = Math.min(zSizeFull, maxRectVol);\n  for (let z = z1; z <= z2; z += zStep) {\n    const zEnd = Math.min(z2, z + zStep - 1);\n    const zSize = zEnd - z + 1;\n    const yStep = Math.max(1, Math.floor(maxRectVol / zSize));\n    for (let y = y1; y <= y2; y += yStep) {\n      const yEnd = Math.min(y2, y + yStep - 1);\n      const yz = (yEnd - y + 1) * zSize;\n      const xStep = Math.max(1, Math.floor(maxRectVol / yz));\n      for (let x = x1; x <= x2; x += xStep) {\n        const xEnd = Math.min(x2, x + xStep - 1);\n        api.setBlockRect([x, y, z], [xEnd, yEnd, zEnd], block);\n      }\n    }\n  }\n}\n\n// world-code-plugin:index.ts\nvar game = null;\nonPlayerJoin = (playerId) => {\n  game?.onPlayerJoin(playerId);\n};\nonPlayerLeave = (playerId) => {\n  game?.onPlayerLeave(playerId);\n};\ntick = () => {\n  game?.tick();\n};\nonPlayerChat = (playerId, message) => {\n  return game?.onPlayerChat(playerId, message);\n};\nonMobKilledPlayer = (mobId, playerId) => {\n  game?.onPlayerDie(playerId);\n};\nonPlayerKilledOtherPlayer = (killerId, victimId) => {\n  game?.onPlayerDie(victimId);\n};\nonRespawnRequest = (playerId) => {\n  return game?.getPlayer(playerId)?.onRespawnRequest();\n};\nonPlayerBoughtShopItem = (playerId, categoryKey, itemKey) => {\n  game?.onPlayerBoughtShopItem(playerId, categoryKey, itemKey);\n};\nonBlockStandStart = (playerId, x, y, z, blockName) => {\n  game?.onBlockStandStart(playerId, x, y, z, blockName);\n};\nfunction createGame(opts) {\n  if (game) {\n    throw new Error("Game already setup");\n  }\n  if (opts.maps.length === 0) {\n    throw new Error("No maps provided");\n  }\n  if (opts.teams.length < 2) {\n    throw new Error(`At least 2 teams are required (got ${opts.teams.length})`);\n  }\n  for (const team of opts.teams) {\n    if (team.maxPlayers < 1) {\n      throw new Error(`Team ${team.name} max players must be at least 1`);\n    }\n  }\n  opts.playAreaRect = roundOutwardsToChunkBoundary(opts.playAreaRect);\n  const playAreaDimensions = getDimensions(opts.playAreaRect);\n  preloadRect(opts.playAreaRect);\n  const newMaps = [];\n  for (const map of opts.maps) {\n    const newMap = {\n      ...map,\n      source: map.source.schematic !== void 0 ? map.source : { ...map.source, rect: roundOutwardsToChunkBoundary(map.source.rect) }\n    };\n    const mapDimensions = getDimensions(getSourceRect(newMap.source));\n    if (mapDimensions.l > playAreaDimensions.l || mapDimensions.w > playAreaDimensions.w || mapDimensions.h > playAreaDimensions.h) {\n      throw new Error(`Map ${map.name} is too large for play area`);\n    }\n    if (newMap.source.schematic === void 0) {\n      preloadRect(newMap.source.rect);\n    }\n    newMaps.push(newMap);\n  }\n  opts.maps = newMaps;\n  opts.lobby = {\n    ...opts.lobby,\n    source: opts.lobby.source.schematic !== void 0 ? opts.lobby.source : { ...opts.lobby.source, rect: roundOutwardsToChunkBoundary(opts.lobby.source.rect) }\n  };\n  const lobbyDimensions = getDimensions(getSourceRect(opts.lobby.source));\n  if (lobbyDimensions.l > playAreaDimensions.l || lobbyDimensions.w > playAreaDimensions.w || lobbyDimensions.h > playAreaDimensions.h) {\n    throw new Error(`Lobby is too large for play area`);\n  }\n  if (opts.lobby.source.schematic === void 0) {\n    preloadRect(opts.lobby.source.rect);\n  }\n  const newGame = new SessionBasedGame2({\n    ...defaultSessionBasedGameSetupOptions,\n    ...opts\n  });\n  game = newGame;\n  return newGame;\n}\nvar defaultSessionBasedGameSetupOptions = {\n  maxSpectators: 10,\n  emptyLobbyStartInSecs: 60,\n  fullLobbyStartInSecs: 10,\n  gameResetInSecs: 10,\n  mapVotingEnabled: false,\n  onStart: () => {\n    api.broadcastMessage(style("Game started", game?.messageColours.success));\n  },\n  onFinish: (winningTeam) => {\n    api.broadcastMessage(style(`${winningTeam.name} won the game`, winningTeam.colour));\n  },\n  getRightInfoText: (player) => {\n    return game?.getStartingInText();\n  },\n  playerConstructor: SessionBasedPlayer\n};\n',
        types: 'import * as _bloxd from \'@bloxd\';\nimport { PlayerId, CustomTextStyling, BlockName, ChatTags, Pos, RecursiveReadonly } from \'@bloxd\';\n\ndeclare class SessionBasedGame<TeamInfo extends BaseTeamInfo, MapInfo extends BaseMapInfo<TeamInfo>, Player extends SessionBasedPlayer<TeamInfo, MapInfo>> {\n    readonly gameOptions: Required<SessionBasedGameSetupOptions<TeamInfo, MapInfo, Player>>;\n    gamePhase: "beforeGame" | "inGame" | "gameFinished";\n    private startingRound;\n    private players;\n    map: MapInfo | null;\n    private gameStartTime;\n    private startGameAt;\n    private endGameAt;\n    private mapVoter;\n    messageColours: {\n        error: string;\n        success: string;\n        info: string;\n    };\n    private get playersForFullLobby();\n    private get playerCount();\n    constructor(gameOptions: Required<SessionBasedGameSetupOptions<TeamInfo, MapInfo, Player>>);\n    /**\n     * Gets the player object for a given player ID.\n     * @param playerId The player ID to get the player for\n     */\n    getPlayer(playerId: PlayerId): Player;\n    /**\n     * Gets all the players in the game, including spectators.\n     * @returns An iterator of all the players in the game.\n     */\n    getPlayers(): Generator<Player>;\n    getStartingInText(): string | CustomTextStyling;\n    /**\n     * Gives all players coloured armour based on their team name. Spectators will get black armour.\n     * If their team name is not a valid colour, they will be skipped.\n     */\n    giveColouredArmourToEveryone(): void;\n    onPlayerJoin(playerId: PlayerId): void;\n    onPlayerLeave(playerId: PlayerId): void;\n    onPlayerDie(playerId: PlayerId): void;\n    checkWin(): void;\n    onPlayerChat(playerId: PlayerId, message: string): _bloxd.ChatTags;\n    onPlayerBoughtShopItem(playerId: PlayerId, categoryKey: string, itemKey: string): void;\n    tick(): void;\n    private getTeamsAlive;\n    private updateTimeTillStart;\n    private setStartGame;\n    private checkGameTransition;\n    private sendRightInfoText;\n    private loadMap;\n    private startGame;\n    /**\n     * Whether spectators should render faded. gamePhase can\'t be read directly: it only flips to\n     * "inGame" once startGame() has started every player, and the sit-out spectators it makes\n     * along the way need fading too.\n     */\n    spectatorsAreFaded(): boolean;\n    private assignTeams;\n    /**\n     * Manually sets a team to win the game. Will begin the game reset timer to restart the game.#\n     * Automatically called when there is only one team left.\n     * @param winningTeam - The team object that won the game.\n     */\n    makeTeamWin(winningTeam: TeamInfo | null): void;\n    private resetGame;\n    onBlockStandStart(playerId: PlayerId, x: number, y: number, z: number, blockName: BlockName): void;\n    private placeTeamPad;\n    private placeTeamPads;\n}\n\ndeclare class SessionBasedPlayer<TeamInfo extends BaseTeamInfo, MapInfo extends BaseMapInfo<TeamInfo>> {\n    readonly playerId: PlayerId;\n    readonly game: SessionBasedGame<TeamInfo, MapInfo, SessionBasedPlayer<TeamInfo, MapInfo>>;\n    isSpectating: boolean;\n    team: TeamInfo | null;\n    requestedTeam: TeamInfo | null;\n    qTextId: string | null;\n    constructor(playerId: PlayerId, game: SessionBasedGame<TeamInfo, MapInfo, SessionBasedPlayer<TeamInfo, MapInfo>>);\n    private spawn;\n    /**\n     * Sets the player as playing the game, setting their health, shields, and other settings.\n     * Automatically called at the start of a game for players assigned to a team.\n     */\n    startPlaying(): void;\n    /**\n     * Sets the player as spectating the game, resetting their health, shields, and other settings.\n     * Automatically called at the start of a game for players not assigned to a team.\n     * Call this function to turn a player into a spectator (for example, once they die).\n     */\n    startSpectating(): void;\n    private updateOtherEntitySettings;\n    onMessage(): ChatTags;\n    onRespawnRequest(): Pos | undefined;\n    /**\n     * Gets the position of the player relative to the play area.\n     * @returns The position of the player relative to the play area.\n     */\n    getPositionInPlayArea(): Pos;\n}\n\ntype BaseTeamInfo = RecursiveReadonly<{\n    name: string;\n    maxPlayers: number;\n    colour: string;\n}>;\n/** A world rectangle (rounded outwards to chunk boundaries), or a project schematic path. */\ntype MapSource = RecursiveReadonly<{\n    rect: [Pos, Pos];\n    schematic?: never;\n} | {\n    schematic: string;\n    rect?: never;\n}>;\ntype BaseMapInfo<TeamInfo extends BaseTeamInfo> = RecursiveReadonly<{\n    /** The name of the map */\n    name: string;\n    /** The icon of the map - used in the Map Voting Shop UI */\n    icon: string;\n    source: MapSource;\n}> & {\n    readonly teams: Record<TeamInfo["name"], RecursiveReadonly<{\n        spawn: Pos;\n        spawnFacing: Pos;\n    }>>;\n};\ntype Constructor<T> = new (...args: any[]) => T;\ntype TeamPadInfo = RecursiveReadonly<{\n    rect: [Pos, Pos];\n    emptyBlock: BlockName;\n    fullBlock: BlockName;\n}>;\ntype SessionBasedGameSetupOptions<TeamInfo extends BaseTeamInfo, MapInfo extends BaseMapInfo<TeamInfo>, Player extends SessionBasedPlayer<TeamInfo, MapInfo>> = {\n    teams: readonly TeamInfo[];\n    maps: readonly MapInfo[];\n    /** Lobby area information */\n    lobby: RecursiveReadonly<{\n        source: MapSource;\n        spawn: Pos;\n        spawnFacing: Pos;\n    }> & {\n        /** Block coordinates representing the start and the end of the team pads. Offset from the lowest corner of the map (after rounding outwards). If not provided, team choosing will be disabled. */\n        teamPads?: Record<TeamInfo["name"], TeamPadInfo>;\n    };\n    /** Block coordinates representing the start and the end of the play area. These will be rounded outwards to the nearest chunk boundary */\n    playAreaRect: readonly [Pos, Pos];\n    /** Maximum number of spectators allowed in the game */\n    maxSpectators?: number;\n    /** The number of seconds to wait before resetting the game after the game finishes */\n    emptyLobbyStartInSecs?: number;\n    /** The number of seconds to wait before starting the game when the lobby is full */\n    fullLobbyStartInSecs?: number;\n    /** The number of seconds to wait before resetting the game after the game finishes */\n    gameResetInSecs?: number;\n    /** Enable Map Voting - If enabled, players will be able to vote for the next map to play. */\n    mapVotingEnabled?: boolean;\n    /** Function to call when the game starts */\n    onStart?: () => void;\n    /** Function to call when the game finishes */\n    onFinish?: (winningTeam: TeamInfo) => void;\n    /** Function to get the RightInfoText for a player */\n    getRightInfoText?: (player: SessionBasedPlayer<TeamInfo, MapInfo>) => string | CustomTextStyling | null;\n    /** The constructor for the player class. This should be a class that extends SessionBasedPlayer */\n    playerConstructor?: Constructor<Player>;\n};\n\n/**\n * Create a new SessionBasedGame.\n * @param opts - The options for the game.\n * @param opts.teams - The teams for the game. This should include the team name, max players for this team, and hex colour.\n * @param opts.maps - The maps for the game. This should include the map name, source rectangle or schematic path, and the spawn positions for each team.\n * @param opts.lobby - The lobby area. This should include the source rectangle or schematic path, spawn info, and team pads for team choosing.\n * @param opts.playAreaRect - The play area rectangle. These will be rounded outwards to the nearest chunk boundary\n * @param opts.maxSpectators - The maximum number of spectators allowed in the game.\n * @param opts.emptyLobbyStartInSecs - The number of seconds to wait for the game to start when the lobby isn\'t full yet.\n * @param opts.fullLobbyStartInSecs - The number of seconds to wait for the game to start when the lobby is full.\n * @param opts.gameResetInSecs - The number of seconds to wait before resetting the game after the game finishes.\n * @param opts.mapVotingEnabled - Whether to enable map voting.\n * @param opts.onStart - The function to call when the game starts.\n * @param opts.onFinish - The function to call when the game finishes.\n * @param opts.getRightInfoText - The function to call to get the RightInfoText for the game.\n * @param opts.playerConstructor - The constructor for the player class. This should be a class that extends SessionBasedPlayer\n * @returns The game instance\n */\ndeclare function createGame<TeamInfo extends BaseTeamInfo, MapInfo extends BaseMapInfo<TeamInfo>, Player extends SessionBasedPlayer<TeamInfo, MapInfo>>(opts: SessionBasedGameSetupOptions<TeamInfo, MapInfo, Player>): SessionBasedGame<TeamInfo, MapInfo, Player>;\n\nexport { SessionBasedGame, SessionBasedPlayer, createGame };\nexport type { BaseMapInfo, BaseTeamInfo, MapSource, SessionBasedGameSetupOptions };\n'
      },
      kG = {
        debug: {
          name: "debug",
          specifier: "@plugins/debug",
          sourceVfsPath: "/node_modules/@plugins/debug/index.ts",
          typesVfsPath: "/node_modules/@plugins/debug/index.d.ts",
          files: wG.files,
          dependencies: wG.dependencies,
          bundledSource: wG.bundledSource,
          types: wG.types
        },
        dialogue: {
          name: "dialogue",
          specifier: "@plugins/dialogue",
          sourceVfsPath: "/node_modules/@plugins/dialogue/index.ts",
          typesVfsPath: "/node_modules/@plugins/dialogue/index.d.ts",
          files: SG.files,
          dependencies: SG.dependencies,
          bundledSource: SG.bundledSource,
          types: SG.types
        },
        helpers: {
          name: "helpers",
          specifier: "@plugins/helpers",
          sourceVfsPath: "/node_modules/@plugins/helpers/index.ts",
          typesVfsPath: "/node_modules/@plugins/helpers/index.d.ts",
          files: LG.files,
          dependencies: LG.dependencies,
          bundledSource: LG.bundledSource,
          types: LG.types
        },
        sessionBasedGame: {
          name: "sessionBasedGame",
          specifier: "@plugins/sessionBasedGame",
          sourceVfsPath: "/node_modules/@plugins/sessionBasedGame/index.ts",
          typesVfsPath: "/node_modules/@plugins/sessionBasedGame/index.d.ts",
          files: yG.files,
          dependencies: yG.dependencies,
          bundledSource: yG.bundledSource,
          types: yG.types
        }
      };

    function UG(GG) {
      const bG = [],
        ZG = new Set,
        wG = GG => {
          if (ZG.has(GG)) return;
          const SG = kG[GG];
          if (SG) {
            ZG.add(GG);
            for (const GG of SG.dependencies) wG(GG);
            bG.push(GG)
          }
        };
      for (const SG of GG) wG(SG);
      return bG
    }
  },
  37200: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => UG,
      e: () => kG,
      i: () => yG,
      j: () => LG,
      n: () => YG,
      q: () => VG,
      s: () => KG,
      t: () => QG,
      u: () => fG
    });
    var wG = ZG(1198);
    const SG = ["quickjs", "ses"];

    function LG(GG) {
      return SG.includes(GG)
    }

    function yG(GG) {
      return GG === wG.k || GG === wG.o
    }

    function kG(GG, bG) {
      return GG === wG.k && bG === wG.o || GG === wG.o && bG === wG.k
    }

    function UG(GG) {
      const bG = wG.o in GG,
        ZG = wG.k in GG;
      return bG && ZG ? null : bG ? wG.o : ZG ? wG.k : null
    }

    function YG(GG, bG, ZG) {
      const wG = `${bG}/`;
      return GG.filter((GG => GG.startsWith(wG))).map((GG => [GG, `${ZG}/${GG.slice(wG.length)}`]))
    }

    function VG(GG, bG) {
      let ZG = 0;
      for (const [wG, SG] of Object.entries(GG)) wG !== bG && (ZG += SG.length);
      return ZG
    }
    const pG = "@plugins/";

    function fG(GG) {
      return `${pG}${GG}`
    }

    function QG(GG, bG) {
      return `/node_modules/@plugins/${GG}/${bG}`
    }

    function KG(GG) {
      if (!GG.startsWith(pG)) return null;
      const bG = GG.slice(pG.length);
      return function(GG) {
        return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(GG)
      }(bG) ? bG : null
    }
  },
  37207: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => kG,
      g: () => SG,
      j: () => yG,
      m: () => UG,
      n: () => LG
    });
    var wG = ZG(2404);
    const SG = 5,
      LG = "[SCHEMATIC]",
      yG = 1024e4;

    function kG(GG) {
      return GG.endsWith(".bloxdschem") && (0, wG.o)(GG.slice(0, -11) + ".ts") && GG.length <= 64
    }

    function UG(GG) {
      return Object.fromEntries(Object.keys(GG).map((GG => [GG, LG])))
    }
  },
  4871: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => SG,
      e: () => wG,
      g: () => LG,
      i: () => UG,
      j: () => yG
    });
    const wG = ["sine", "triangle", "square", "sawtooth"],
      SG = 55,
      LG = {
        soft: {
          waveform: "sine",
          pitchHz: 300,
          glideSemitones: -.5,
          durationMs: 80,
          attackMs: 6,
          releaseMs: 18,
          lowpassHz: null,
          volume: .6,
          intonation: {
            variationSemitones: 1.2,
            declineSemitones: 1.5,
            questionRiseSemitones: 3.5,
            exclaimLiftSemitones: 1.5
          },
          syllableMs: 60
        },
        regular: {
          waveform: "triangle",
          pitchHz: 195,
          glideSemitones: -.6,
          durationMs: 70,
          attackMs: 2,
          releaseMs: 12,
          lowpassHz: null,
          volume: 1,
          intonation: {
            variationSemitones: 1.5,
            declineSemitones: 2,
            questionRiseSemitones: 4,
            exclaimLiftSemitones: 2
          },
          syllableMs: 52
        },
        dark: {
          waveform: "sawtooth",
          pitchHz: 80,
          glideSemitones: -.6,
          durationMs: 85,
          attackMs: 6,
          releaseMs: 16,
          lowpassHz: 420,
          volume: 1.05,
          intonation: {
            variationSemitones: 1,
            declineSemitones: 3.5,
            questionRiseSemitones: 2.5,
            exclaimLiftSemitones: 1
          },
          syllableMs: 64
        },
        "high-pitched": {
          waveform: "triangle",
          pitchHz: 300,
          glideSemitones: -.8,
          durationMs: 55,
          attackMs: 2,
          releaseMs: 10,
          lowpassHz: null,
          volume: .8,
          intonation: {
            variationSemitones: 2.2,
            declineSemitones: 2,
            questionRiseSemitones: 5,
            exclaimLiftSemitones: 3
          },
          syllableMs: 44
        },
        gruff: {
          waveform: "sawtooth",
          pitchHz: 105,
          glideSemitones: -.8,
          durationMs: 75,
          attackMs: 4,
          releaseMs: 14,
          lowpassHz: 900,
          volume: .85,
          intonation: {
            variationSemitones: 1.2,
            declineSemitones: 3,
            questionRiseSemitones: 3,
            exclaimLiftSemitones: 2
          },
          syllableMs: 58
        },
        lively: {
          waveform: "square",
          pitchHz: 230,
          glideSemitones: .6,
          durationMs: 55,
          attackMs: 2,
          releaseMs: 10,
          lowpassHz: 2400,
          volume: .5,
          intonation: {
            variationSemitones: 2.6,
            declineSemitones: 1.5,
            questionRiseSemitones: 5,
            exclaimLiftSemitones: 3.5
          },
          syllableMs: 44
        },
        posh: {
          waveform: "triangle",
          pitchHz: 175,
          glideSemitones: 1.2,
          durationMs: 90,
          attackMs: 6,
          releaseMs: 20,
          lowpassHz: 2e3,
          volume: 1,
          intonation: {
            variationSemitones: 2,
            declineSemitones: 4,
            questionRiseSemitones: 5,
            exclaimLiftSemitones: 2.5
          },
          syllableMs: 60
        },
        mechanical: {
          waveform: "square",
          pitchHz: 140,
          glideSemitones: 0,
          durationMs: 60,
          attackMs: 0,
          releaseMs: 4,
          lowpassHz: 1400,
          volume: .55,
          intonation: {
            variationSemitones: 0,
            declineSemitones: 0,
            questionRiseSemitones: 0,
            exclaimLiftSemitones: 0
          },
          syllableMs: 62
        }
      };

    function yG(GG) {
      return "string" !== typeof GG ? GG : Object.hasOwn(LG, GG) ? LG[GG] : null
    }

    function kG(GG, bG, ZG) {
      return Math.min(ZG, Math.max(bG, GG))
    }

    function UG(GG) {
      const bG = kG(GG.durationMs, 10, 500),
        ZG = kG(GG.attackMs, 0, bG),
        {
          intonation: SG
        } = GG;
      return {
        waveform: wG.includes(GG.waveform) ? GG.waveform : "sine",
        pitchHz: kG(GG.pitchHz, 20, 4e3),
        glideSemitones: kG(GG.glideSemitones, -24, 24),
        durationMs: bG,
        attackMs: ZG,
        releaseMs: kG(GG.releaseMs, 0, bG - ZG),
        lowpassHz: null === GG.lowpassHz ? null : kG(GG.lowpassHz, 20, 2e4),
        volume: kG(GG.volume, 0, 2),
        intonation: {
          variationSemitones: kG(SG.variationSemitones, 0, 6),
          declineSemitones: kG(SG.declineSemitones, 0, 12),
          questionRiseSemitones: kG(SG.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: kG(SG.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: kG(GG.syllableMs, 25, 200)
      }
    }
  },
  8860: () => {},
  9989: GG => {
    GG.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAHklEQVR4nGNY3x/6nxjMQH2Fcyq8/hODaWA11d0IAPvLyX36T0UzAAAAAElFTkSuQmCC"
  },
  18161: GG => {
    GG.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAC4CAYAAADqkK6nAAAAAXNSR0IArs4c6QAAAuxJREFUeJzt1jFOFHEchuEfxpqeaGusuYDhCpbewMbEwmNYmNBwA0quYLgAtaGF2HuBtVpEWHBNXnBXnqeanUzxT+bNtzMDsOl21nhm8eCnYBvd2c6zxzwFT8N9S7WYmfn0am9mZl6+2H2M87DhLi5/zMzM5/Pvy1u3GrJU5FYt1WJm5svB60c+Ctvo49dvy8urliwVuetL5RuKv7bqG8tSkXt+88afFurN+3czM7P/9sPDnIiNcHZy+Nvv06Pjlc9d9fJrqXxT0bu1VHexUE/Tzfd912JdZ6nIrb1UFop1WSpyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIit3ZUZyeHc3Zy+JBn4T9hqcg9X/fB06Pj337vv/2QH4bNs/x3uvn+72OpyO1cu17MzHx6tTczMy9f7P6L87BlLi5/zMzM5/Pvy1s7lorczop7i5mZLwevH/kobKOPX78tL69aslTkVi3Vkm8sbln1DXXzGUtF7r6lWlo8+CnYRne2Y6mAzfcTBsFAqM32XQcAAAAASUVORK5CYII="
  },
  20108: GG => {
    GG.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJUlEQVR4nGMwsIpkIAYz0FThfyjGymcgVSFMEJtCsBjJCgcgeABOGmAZtndiFgAAAABJRU5ErkJggg=="
  },
  20110: GG => {
    GG.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJ0lEQVR4nGMwsIpkIAYzQBn/kTBWMQYsgtgwA+0UMuBTNIgU4g1wAE6xgffL0CuLAAAAAElFTkSuQmCC"
  },
  20114: GG => {
    GG.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJElEQVR4nGMwsIpkIAYzkKrwPxLGKsZAc4UMaJh8hdQPHoIKAboeZhN3YNlSAAAAAElFTkSuQmCC"
  },
  20118: GG => {
    GG.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMUlEQVR4nGMwsIpkIAYzoAn8R8MM2BSiK/qPrJiQov8wxWQrxMkm2USiPUNS8OANcADc3H37DfNNQQAAAABJRU5ErkJggg=="
  },
  20126: GG => {
    GG.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAKElEQVR4nGMwsIpkIAYzIHH+48AMyApxKfoPU0yRQgZsYkNJIcEABwCQU3/5LLo7QwAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);