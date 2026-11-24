export const id = 86;
export const ids = [86];
export const modules = {
  36558: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => eB,
      i: () => XB
    });
    var TB = ZB(63),
      JB = ZB(1995),
      oB = ZB(36565),
      GB = ZB.n(oB),
      vB = ZB(4728),
      kB = ZB(1960),
      cB = ZB(1507),
      nB = ZB(105),
      hB = ZB(121),
      zB = ZB(360),
      FB = ZB(1091),
      NB = ZB.n(FB),
      gB = ZB(20),
      qB = ZB(1102),
      yB = ZB(1711),
      UB = ZB(1805),
      WB = ZB(1752),
      dB = ZB(2079),
      CB = ZB(1469),
      QB = ZB(2161),
      sB = ZB(1454),
      wB = ZB(3801),
      OB = ZB(36569),
      YB = ZB(36591),
      iB = ZB(1538),
      pB = ZB(2528),
      aB = ZB(1248),
      HB = ZB(36596);
    var MB = ZB(34126),
      jB = ZB(1348);
    var PB = ZB(1153);
    const RB = ZB(36600),
      rB = ["enter", "t", "/"];
    let mB = !1;

    function XB() {
      return mB || (0, UB.isTextEntry)(document.activeElement)
    }

    function LB() {
      var BB, IB;
      (0, QB.c)();
      const ZB = null !== (BB = null === (IB = (0, CB.d)()) || void 0 === IB ? void 0 : IB.getBoundButton("keyboardChannel")) && void 0 !== BB ? BB : null;
      return ZB ? (0, PB.jsx)(dB.b, {
        className: "ChatInputChannelGlyph",
        glyph: ZB
      }) : null
    }

    function eB() {
      const {
        t: BB
      } = (0, aB.G)(), {
        isTouchScreen: IB
      } = (0, gB.o)(["isTouchScreen"]), ZB = (0, sB.x)(), [oB, FB] = (0, TB.useState)(!1), dB = (0, TB.useRef)(oB), CB = (0, TB.useRef)(null), {
        messages: QB,
        reportedPlayers: XB,
        channel: eB
      } = (0, wB.n)(), fB = (0, TB.useRef)(0), lB = (0, TB.useRef)(""), AB = (0, TB.useRef)(null);
      var tB;
      tB = AB, (0, TB.useEffect)((() => {
        if (!(0, nB.isIOS)()) return;
        const BB = tB.current;
        let IB = null;
        const ZB = ZB => {
            const TB = ZB.changedTouches[0];
            IB = "none" === getComputedStyle(BB).pointerEvents ? {
              id: TB.identifier,
              y: TB.clientY
            } : null
          },
          TB = ZB => {
            const TB = IB,
              JB = TB && (0, HB.d)(ZB.changedTouches, TB.id);
            JB && (ZB.preventDefault(), BB.scrollBy({
              top: TB.y - JB.clientY,
              behavior: "instant"
            }), TB.y = JB.clientY)
          };
        return BB.addEventListener("touchstart", ZB, {
          passive: !0
        }), BB.addEventListener("touchmove", TB, {
          passive: !1
        }), () => {
          BB.removeEventListener("touchstart", ZB), BB.removeEventListener("touchmove", TB)
        }
      }), [tB]);
      const [bB, xB] = (0, TB.useState)(!1), [EB, DB] = (0, TB.useState)(!1), KB = (0, TB.useRef)(bB), VB = (0, TB.useRef)(null), SB = (0, TB.useRef)(!1), BI = (0, TB.useRef)(null), II = (0, TB.useRef)(null), ZI = (0, TB.useRef)(null), TI = (0, TB.useRef)(vI);
      TI.current = vI;
      const JI = (0, pB.i)();

      function oI() {
        dB.current = !1, FB(!1), II.current.blur()
      }

      function GI(BB) {
        KB.current = BB, xB(BB)
      }

      function vI() {
        const BB = II.current.value;
        II.current.value = "", kI(BB)
      }

      function kI(BB) {
        (0, wB.l)(BB), fB.current = 0, GI(!1)
      }

      function cI(BB, IB) {
        0 === fB.current && (lB.current = II.current.value);
        const ZB = (0, wB.i)(fB.current + BB, IB);
        fB.current = ZB.stepsBack, II.current.value = 0 === ZB.stepsBack ? lB.current : ZB.text, setTimeout((() => {
          II.current && II.current.setSelectionRange(-1, -1)
        }), 0)
      }

      function nI() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        AB.current && (!BB && KB.current || (AB.current.scrollTop = 1e5))
      }
      return (0, vB.e)(!0, oB, "ChatComponent"), (0, TB.useEffect)((() => (mB = oB, () => {
          mB = !1
        })), [oB]), (0, cB.d)("appManagerUpdated|openEverythingMenuName", (() => {
          (0, yB.p)() && FB(!1)
        })), (0, TB.useEffect)((() => {
          II.current.addEventListener("blur", (BB => {
            if (null === II.current) return;
            Array.from(document.querySelectorAll(":hover")).some((BB => BB.classList.contains("ChatInputChannel") || BB.classList.contains("ChatMsgSelectWrapper"))) || ((0, nB.isMobile)() && dB.current && "" !== II.current.value && TI.current(), FB(!1))
          }));
          const BB = BB => {
            CB.current.contains(BB.target) || (0, WB.k)(BB.target) || FB(!1)
          };
          document.addEventListener("touchstart", BB, {
            capture: !0
          });
          const IB = BB => {
            (0, YB.e)(BB.target) && (dB.current = !1, FB(!1))
          };
          document.addEventListener("mousedown", IB, {
            capture: !0
          });
          const ZB = () => {
              clearTimeout(VB.current), GI(!0)
            },
            TB = () => {
              clearTimeout(VB.current), VB.current = setTimeout((() => {
                GI(!1), nI()
              }), 4e3)
            },
            oB = () => {
              document.pointerLockElement ? (FB(!1), DB(!0), SB.current = !1, GI(!1), nI()) : DB(!1)
            };
          AB.current.addEventListener("pointermove", (BB => {
            "touch" === BB.pointerType || SB.current || document.pointerLockElement || (SB.current = !0, clearTimeout(VB.current))
          })), AB.current.addEventListener("pointerleave", (BB => {
            "touch" !== BB.pointerType && (SB.current = !1, KB.current && TB())
          })), AB.current.addEventListener("pointerdown", (BB => {
            "touch" === BB.pointerType || document.pointerLockElement || (SB.current = !0, ZB())
          })), AB.current.addEventListener("wheel", (BB => {
            document.pointerLockElement || BB.deltaY >= 0 && Math.abs(AB.current.scrollTop) < 1 || (ZB(), SB.current || (VB.current = setTimeout((() => {
              GI(!1)
            }), 4e3)))
          }), {
            passive: !0
          }), AB.current.addEventListener("touchstart", ZB), AB.current.addEventListener("touchend", TB), AB.current.addEventListener("touchcancel", TB), document.addEventListener("pointerlockchange", oB);
          const vB = BB => {
            if (JI.shown && (dB.current || ! function(BB) {
                if ((0, UB.isTypingInInput)()) return !0;
                const IB = document.activeElement;
                return (IB instanceof HTMLButtonElement || "button" === (null === IB || void 0 === IB ? void 0 : IB.getAttribute("role"))) && ["Enter", " "].includes(BB.key)
              }(BB)) && "codeEditor" !== gB.d.get("openInGameMenuName") && "lobbyCodeEditor" !== gB.d.get("openInGameMenuName") && !JB.gameBridge.latest("connectedGame").replay)
              if (dB.current || !(0, yB.p)()) {
                if (dB.current) {
                  if ("ArrowUp" === BB.code || "ArrowDown" === BB.code) return cI("ArrowUp" === BB.code ? 1 : -1, !1), void BB.stopPropagation();
                  if ("Tab" === BB.code) return wB.c.selectNextChannel(), BB.stopPropagation(), void BB.preventDefault();
                  if (BB.ctrlKey && uB.includes(RB[BB.keyCode])) return BB.preventDefault(), void BB.stopPropagation()
                }
                if ([...rB, "esc"].includes(GB()(BB)))
                  if ("esc" !== GB()(BB)) {
                    if (!dB.current || "/" !== GB()(BB)) {
                      if ("t" === GB()(BB)) {
                        if (dB.current) return void BB.stopPropagation();
                        BB.preventDefault()
                      }
                      dB.current && "" !== II.current.value && TI.current(), BB.repeat || (dB.current || "/" === GB()(BB) && (II.current.value = "/", BB.preventDefault()), FB(!dB.current))
                    }
                  } else dB.current && (FB(!1), BB.stopPropagation());
                else dB.current && BB.stopPropagation()
              } else rB.includes(GB()(BB)) && (BB.preventDefault(), BB.stopPropagation(), (0, yB.b)(BB))
          };
          document.addEventListener("keydown", vB, {
            capture: !0
          });
          const kB = AB.current;
          let cB = !1;
          const hB = new ResizeObserver((() => {
              cB && (cB = !1, nI())
            })),
            zB = () => {
              cB = !0, hB.unobserve(kB), hB.observe(kB)
            };
          BI.current = zB;
          const NB = new MutationObserver(zB);
          return NB.observe(kB, {
            childList: !0,
            subtree: !0
          }), () => {
            document.removeEventListener("keydown", vB, {
              capture: !0
            }), document.removeEventListener("touchstart", BB, {
              capture: !0
            }), document.removeEventListener("mousedown", IB, {
              capture: !0
            }), document.removeEventListener("pointerlockchange", oB), BI.current = null, NB.disconnect(), hB.disconnect(), clearTimeout(VB.current)
          }
        }), []), (0, WB.r)(II, {
          open: () => {
            FB(!0)
          },
          close: () => {
            oI()
          },
          submit: () => {
            "" !== II.current.value && vI(), oI()
          },
          stepHistory: () => {
            cI(1, !0)
          },
          sendLine: BB => {
            kI(BB), oI()
          },
          selectNextChannel: () => {
            wB.c.selectNextChannel()
          }
        }), (0, TB.useEffect)((() => {
          var BB;
          (dB.current = oB, II.current) && (oB ? (fB.current = 0, II.current.focus()) : (II.current.blur(), null === (BB = BI.current) || void 0 === BB || BB.call(BI)))
        }), [oB]),
        function(BB, IB) {
          (0, TB.useLayoutEffect)((() => {
            if (!IB) return;
            MB.c.hold();
            const ZB = BB.current.closest(".InGameHeaderAndChat"),
              TB = (0, jB.d)((BB => {
                let {
                  top: IB,
                  height: TB
                } = BB;
                ZB.style.setProperty("--keyboard-top", `${IB+TB}px`)
              }));
            return () => {
              TB(), ZB.style.removeProperty("--keyboard-top"), MB.c.release()
            }
          }), [BB, IB])
        }(CB, oB && IB), (0, PB.jsx)(PB.Fragment, {
          children: (0, PB.jsxs)("div", {
            ref: CB,
            className: NB()("Chat", {
              Chatting: oB
            }),
            "data-camera-keeper": oB ? "" : void 0,
            children: [(0, PB.jsx)("div", {
              ref: AB,
              className: NB()("ChatMessages", {
                HideScrollbar: !bB && !oB,
                NoScrolling: !(0, nB.isMobile)() && EB
              }),
              children: (0, PB.jsx)(OB.c, {
                messages: QB,
                reportedPlayers: XB
              })
            }), IB && !oB && (0, PB.jsx)("button", {
              type: "button",
              className: "ChatIconWrapper SmallTextLight",
              "aria-label": BB("general:chat"),
              ...(0, iB.h)((() => {
                FB(!0), ZI.current.style.display = "flex", (0, nB.isIOS)() && II.current.focus()
              }), "pointerup"),
              children: (0, PB.jsx)(qB.d, {
                name: "comment-dots",
                className: "ChatIcon"
              })
            }), (0, PB.jsxs)("div", {
              ref: ZI,
              className: "ChatInputWrapper",
              style: {
                display: "" + (oB ? "flex" : "none")
              },
              children: [eB && (0, PB.jsx)("button", {
                type: "button",
                className: "ChatInputChannel",
                style: {
                  backgroundColor: eB.elementBgColor
                },
                onClick: BB => {
                  wB.c.selectNextChannel(), II.current.focus()
                },
                children: (0, PB.jsx)("span", {
                  className: "SmallTextBold",
                  children: (0, PB.jsx)(kB.e, {
                    text: eB.elementContent
                  })
                })
              }), eB && ZB && (0, PB.jsx)(LB, {}), (0, PB.jsx)("input", {
                className: "ChatInput",
                maxLength: zB.bd,
                ref: II,
                spellCheck: "false",
                autoComplete: "off",
                autoCorrect: "off",
                "aria-label": BB("general:chat"),
                placeholder: eB ? `${eB.channelName} Chat${"touchOnly"===(0,hB.e)()||ZB?"":" [Tab]"}` : ""
              })]
            })]
          })
        })
    }
    const uB = ["W", "S", "D", "N", "T", "<tab>", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "<page-up>", "<page-down>", "B", "O", "H", "J", "F", "G", "J", "M", "<enter>", "L", "K", "E", "P", "R", "O", "U"]
  },
  36569: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => OB
    });
    var TB = ZB(63),
      JB = ZB(1091),
      oB = ZB.n(JB),
      GB = ZB(3804),
      vB = ZB(24),
      kB = ZB(2462),
      cB = ZB(3750),
      nB = ZB(2102),
      hB = ZB(20),
      zB = ZB(1960),
      FB = ZB(36573),
      NB = ZB(2259),
      gB = ZB(36580),
      qB = ZB(2778),
      yB = ZB(2745),
      UB = ZB(2741),
      WB = ZB(3766),
      dB = ZB(36584),
      CB = ZB(3281),
      QB = ZB(2054),
      sB = ZB(1153);

    function wB(BB) {
      for (let ZB = BB.length - 1; ZB >= 0; ZB--) {
        const TB = "string" === typeof(IB = BB[ZB]) ? IB : "str" in IB && "string" === typeof IB.str ? IB.str : "";
        if ("" !== TB.trim()) return TB
      }
      var IB;
      return ""
    }

    function OB(BB) {
      let {
        messages: IB,
        reportedPlayers: ZB
      } = BB;
      return (0, sB.jsx)(sB.Fragment, {
        children: IB.map((BB => (0, sB.jsx)(YB, {
          message: BB,
          reportedPlayers: ZB
        }, BB.clientChatMsgId)))
      })
    }
    const YB = (0, TB.memo)((function(BB) {
      var IB;
      let {
        message: ZB,
        reportedPlayers: JB
      } = BB;
      const OB = (0, TB.useRef)(null),
        [YB] = (0, TB.useState)(CB.i),
        {
          author: iB
        } = ZB,
        pB = null === iB || void 0 === iB ? void 0 : iB.id,
        aB = null !== (IB = null === iB || void 0 === iB ? void 0 : iB.name) && void 0 !== IB ? IB : void 0,
        HB = (0, nB.d)(aB),
        MB = null !== iB && void 0 !== iB && iB.profileEffect ? NB.e[iB.profileEffect] : void 0,
        jB = null !== iB && !iB.local,
        PB = null === iB && null !== ZB.serverChatMsgId,
        RB = (0, QB.g)("hiddenPlayerNames", (BB => (0, gB.d)(jB, aB, BB))),
        rB = null === ZB.serverChatMsgId || null === iB ? null : {
          text: wB(ZB.content),
          serverChatMsgId: ZB.serverChatMsgId,
          authorId: iB.id
        },
        mB = PB || null !== rB && !JB.includes(pB),
        XB = (0, cB.g)(jB && null !== aB && void 0 !== aB ? aB : null),
        LB = (0, UB.h)(OB);
      (0, TB.useEffect)((() => () => {
        UB.c.closeIfOwner(OB)
      }), []);
      const eB = () => {
          PB ? vB.l.Gq("OpenReportMenu", {
            playerEId: null,
            playerName: void 0,
            Xn: (0, GB.e)(ZB.content),
            serverChatMsgId: ZB.serverChatMsgId
          }) : null !== rB ? vB.l.Gq("OpenReportMenu", {
            playerEId: pB,
            playerName: aB,
            Xn: rB.text,
            serverChatMsgId: rB.serverChatMsgId
          }) : console.warn("Reporting a chat message the server never acknowledged")
        },
        uB = void 0 === aB ? [] : (0, WB.b)(XB, aB, rB);
      return (0, sB.jsxs)("div", {
        ref: OB,
        className: oB()("MessageWrapper", {
          ChatMsgSelectWrapper: pB,
          Still: YB
        }),
        onContextMenu: RB ? BB => {
          (0, qB.f)(OB, BB, {
            ...(0, gB.c)(pB, aB),
            showLocation: !1,
            status: null,
            extraActions: mB ? [{
              icon: "flag",
              text: "Report",
              onClick: eB
            }] : [],
            moderationActions: (0, dB.d)(aB),
            friendRequestSource: "chat"
          }, hB.d.get("isTouchScreen"))
        } : void 0,
        onPointerDown: RB ? BB => {
          (0, yB.b)(BB, (() => (0, gB.c)(pB, aB).playerSocialPreview))
        } : void 0,
        children: [MB && (0, sB.jsx)(MB, {
          className: "ChatMessageBackground",
          simple: !0
        }), (jB || PB) && !LB && (0, sB.jsx)(FB.b, {
          className: "ChatFloatingActions",
          triggerElementRef: OB,
          options: [{
            icon: "flag",
            text: "Report",
            onPointerDown: eB,
            show: mB
          }, ...uB, {
            icon: "user-plus",
            text: "socialBar:sendFriendRequest",
            onPointerDown: BB => {
              (0, kB.f)(aB, "chat")
            },
            analyticsClick: {
              id: "social.add_friend",
              value: "chat"
            },
            show: RB && "blocked" !== XB
          }]
        }), (0, sB.jsx)(zB.e, {
          text: ZB.content,
          friendBadgeFor: HB ? aB : void 0
        }, ZB.clientChatMsgId)]
      }, ZB.clientChatMsgId)
    }))
  },
  36613: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => FB,
      h: () => NB,
      l: () => zB,
      n: () => hB
    });
    var TB = ZB(34184),
      JB = ZB(36619),
      oB = ZB(36625),
      GB = ZB(8840),
      vB = ZB(1507),
      kB = ZB(63),
      cB = ZB(82),
      nB = ZB(1153);

    function hB() {
      var BB;
      return (0, vB.h)(JB.d, (0, JB.q)()), (0, nB.jsx)(nB.Fragment, {
        children: null === (BB = (0, JB.q)()) || void 0 === BB ? void 0 : BB.content
      })
    }

    function zB(BB) {
      var IB;
      let {
        show: ZB
      } = BB;
      (0, vB.h)(JB.d, (0, JB.q)());
      const cB = null === (IB = (0, JB.q)()) || void 0 === IB ? void 0 : IB.menu;
      return (0, kB.useEffect)((() => {
        var BB;
        ZB || (null === cB || void 0 === cB || null === (BB = cB.onClose) || void 0 === BB || BB.call(cB), (0, oB.p)())
      }), [ZB, cB]), (0, kB.useEffect)((() => ZB ? (0, GB.g)(oB.t, oB.c) : void 0), [ZB]), (0, nB.jsx)(TB.e, {
        showing: ZB,
        globallyUniqueKey: "clientGameMenu",
        children: null === cB || void 0 === cB ? void 0 : cB.content
      })
    }

    function FB(BB) {
      let {
        placement: IB = "bottom"
      } = BB;
      return (0, nB.jsx)("div", {
        id: `clientGameHud-${IB}`,
        style: {
          display: "contents"
        }
      })
    }

    function NB(BB) {
      let {
        children: IB,
        placement: ZB = "bottom"
      } = BB;
      const [TB, JB] = (0, kB.useState)(null);
      return (0, kB.useEffect)((() => {
        JB(document.getElementById(`clientGameHud-${ZB}`))
      }), [ZB]), TB ? (0, cB.createPortal)(IB, TB) : null
    }
  },
  36918: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => hB,
      e: () => nB
    });
    var TB = ZB(63),
      JB = ZB(1091),
      oB = ZB.n(JB),
      GB = ZB(1516),
      vB = ZB(1153);
    const kB = 200,
      cB = 160;

    function nB() {
      return window.matchMedia("(max-width: 900px)").matches
    }

    function hB(BB) {
      let {
        side: IB,
        defaultSize: ZB,
        covers: JB,
        onClose: nB,
        children: hB
      } = BB;
      const zB = (0, TB.useRef)(null),
        [FB, NB] = (0, TB.useState)(null),
        [gB, qB] = (0, TB.useState)(ZB);
      gB !== ZB && (qB(ZB), NB(null));
      const yB = (0, TB.useRef)(null),
        UB = "top" === IB,
        WB = BB => UB ? BB.clientY : BB.clientX,
        dB = () => {
          yB.current = null
        };
      return (0, vB.jsxs)("div", {
        ref: zB,
        className: oB()("ResizableSidePanel", IB && `ResizableSidePanel-${IB}`, {
          Covers: "always" === JB,
          CoversWhenNarrow: "narrow" === JB,
          Dragged: null !== FB
        }),
        style: {
          [UB ? "height" : "width"]: null !== FB && void 0 !== FB ? FB : ZB
        },
        children: [hB, IB && (0, vB.jsx)("div", {
          className: "ResizableSidePanelHandle",
          role: "separator",
          "aria-orientation": UB ? "horizontal" : "vertical",
          onPointerDown: BB => {
            if (0 !== BB.button) return;
            BB.preventDefault();
            const IB = zB.current,
              ZB = Array.from(IB.parentElement.children).reduce(((BB, ZB) => ZB !== IB && "0" !== getComputedStyle(ZB).flexGrow ? BB + (BB => UB ? BB.clientHeight : BB.clientWidth)(ZB) : BB), 0),
              TB = UB ? IB.offsetHeight : IB.offsetWidth,
              JB = Math.min(kB, TB),
              oB = Math.max(JB, TB + Math.max(0, ZB - cB));
            yB.current = {
              start: WB(BB),
              startSize: TB,
              minSize: JB,
              maxSize: oB
            }, BB.currentTarget.setPointerCapture(BB.pointerId)
          },
          onPointerMove: BB => {
            const ZB = yB.current;
            if (!ZB) return;
            const TB = "right" === IB ? ZB.start - BB.clientX : WB(BB) - ZB.start;
            NB(Math.min(ZB.maxSize, Math.max(ZB.minSize, ZB.startSize + TB)))
          },
          onPointerUp: dB,
          onPointerCancel: dB,
          onLostPointerCapture: dB
        }), nB && (0, vB.jsx)(GB.l, {
          className: "ResizableSidePanelClose",
          onClick: nB
        })]
      })
    }
  },
  36943: (BB, IB, ZB) => {
    ZB.d(IB, {
      B: () => wB,
      D: () => JB,
      G: () => sB,
      c: () => WB,
      f: () => qB,
      i: () => NB,
      m: () => FB,
      q: () => UB,
      r: () => OB,
      t: () => dB,
      w: () => QB,
      y: () => CB
    });
    var TB = ZB(63);
    const JB = 5e3,
      oB = 500,
      GB = 3e3;
    let vB = null,
      kB = null,
      cB = null;
    const nB = new Set;

    function hB(BB) {
      vB = BB;
      for (const IB of nB) IB()
    }

    function zB() {
      if (!vB || void 0 !== vB.endedAt) return;
      null !== kB && (clearTimeout(kB), kB = null), hB({
        ...vB,
        endedAt: Date.now()
      });
      const BB = cB;
      cB = null, null === BB || void 0 === BB || BB()
    }

    function FB(BB, IB) {
      let {
        submit: ZB,
        reopen: TB
      } = IB;
      null !== kB && clearTimeout(kB), cB = TB, hB({
        ...BB,
        startedAt: Date.now(),
        errors: []
      }), kB = setTimeout(zB, GB), ZB()
    }

    function NB() {
      vB && void 0 === vB.endedAt && void 0 === vB.ranAt && (null !== kB && clearTimeout(kB), hB({
        ...vB,
        ranAt: Date.now()
      }), kB = setTimeout(zB, JB))
    }
    const gB = 3;

    function qB(BB) {
      if (!vB || void 0 === vB.ranAt || void 0 !== vB.endedAt || vB.errors.includes(BB) || vB.errors.length >= gB) return;
      const IB = 0 === vB.errors.length;
      hB({
        ...vB,
        errors: [...vB.errors, BB]
      }), IB && (null !== kB && clearTimeout(kB), kB = setTimeout(zB, oB))
    }

    function yB(BB) {
      var IB;
      return (null === (IB = vB) || void 0 === IB ? void 0 : IB.chatKey) === BB ? vB : null
    }

    function UB(BB) {
      const IB = yB(BB);
      return IB && void 0 !== IB.endedAt ? (hB(null), IB) : null
    }

    function WB(BB) {
      var IB;
      (null === (IB = vB) || void 0 === IB ? void 0 : IB.chatKey) === BB && (null !== kB && (clearTimeout(kB), kB = null), cB = null, hB(null))
    }
    const dB = "These changes from your last answer didn't go in. Make them again.";

    function CB(BB) {
      const IB = [...new Set(BB)].slice(0, gB);
      return `Fix this in your change: when it ran, the world showed ${1===IB.length?"this error":"these errors"}: ${IB.join(" ")}`
    }

    function QB(BB) {
      return `Your change didn't go in, because the code wouldn't run at all: ${BB.join(" ")} Send the whole change again with that fixed.`
    }

    function sB(BB) {
      return `Fix this in your change: ${BB.join(" ")}`
    }

    function wB(BB) {
      var IB;
      if (void 0 === BB.ranAt) return {
        title: "Couldn't test it",
        text: "Your change didn't go into your world, so it couldn't be tested. Press Submit to try it."
      };
      const ZB = Math.max(1, Math.round(((null !== (IB = BB.endedAt) && void 0 !== IB ? IB : BB.ranAt) - BB.ranAt) / 1e3)),
        TB = `Your change ran in your world for ${ZB} ${1===ZB?"second":"seconds"}`;
      return 0 === BB.errors.length ? {
        title: "Tested: no errors",
        text: `${TB} without an error.`
      } : {
        title: 1 === BB.errors.length ? "Tested: it showed an error" : `Tested: it showed ${BB.errors.length} errors`,
        text: `${TB} and showed: ${BB.errors.join(" ")}`
      }
    }

    function OB(BB) {
      const [IB, ZB] = (0, TB.useState)((() => yB(BB)));
      return (0, TB.useEffect)((() => {
        const IB = () => {
          ZB(yB(BB))
        };
        return IB(), nB.add(IB), () => {
          nB.delete(IB)
        }
      }), [BB]), IB
    }
  },
  36947: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => JB,
      h: () => TB
    });
    const TB = {
      key: "worldCode",
      label: "World Code",
      codeBlock: !1
    };

    function JB(BB, IB, ZB) {
      return {
        key: BB,
        label: `Code block at ${IB.join(", ")}`,
        codeBlock: !0,
        pos: IB,
        canChangePos: ZB
      }
    }
  },
  36935: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB,
      c: () => oB,
      g: () => GB,
      i: () => JB
    });
    const TB = "code block",
      JB = "World Code/";

    function oB(BB) {
      return BB.trim().toLowerCase().startsWith(JB.toLowerCase())
    }

    function GB(BB) {
      return BB.trim().slice(JB.length).replace(/^\.?\//, "")
    }
  },
  36900: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => kB,
      c: () => cB,
      d: () => vB,
      e: () => nB
    });
    var TB = ZB(63),
      JB = ZB(36),
      oB = ZB(105);
    class GB {
      constructor(BB, IB) {
        let ZB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.storageKey = BB, this.defaultValue = IB, this.canChange = ZB, this.value = null, this.listeners = new Set, this.get = () => {
          if (!this.canChange) return this.defaultValue;
          if (null === this.value) {
            const BB = JB.m.getItem(this.storageKey);
            this.value = "boolean" === typeof BB ? BB : this.defaultValue
          }
          return this.value
        }, this.set = BB => {
          this.value = BB, JB.m.setItem(this.storageKey, BB);
          for (const IB of this.listeners) IB(BB)
        }
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
    }
    const vB = new GB("codeEditorLightMode", !1),
      kB = new GB("codeEditorAiHints", !0),
      cB = new GB("codeEditorAiKeySafetyCheck", !0, oB.featureFlags.isOwnTopLevelSite);

    function nB(BB) {
      const [IB, ZB] = (0, TB.useState)(BB.get);
      return (0, TB.useEffect)((() => {
        const IB = BB.subscribe(ZB);
        return ZB(BB.get()), IB
      }), [BB]), [IB, BB.set]
    }
  },
  36895: (BB, IB, ZB) => {
    ZB.d(IB, {
      A: () => pB,
      E: () => YB,
      I: () => zB,
      L: () => jB,
      N: () => wB,
      Q: () => OB,
      U: () => MB,
      c: () => NB,
      d: () => kB,
      f: () => gB,
      j: () => iB,
      l: () => vB,
      p: () => nB,
      q: () => FB,
      u: () => qB,
      y: () => dB
    });
    var TB = ZB(2518),
      JB = ZB(36887);
    const oB = "bloxd-world-code-directory-sync",
      GB = "handles",
      vB = "[INVALID SCHEMATIC PLACEHOLDER]";

    function kB(BB, IB) {
      return `${BB}::${IB}`
    }
    const cB = new Set(["node_modules", ".git"]);

    function nB() {
      return "undefined" !== typeof window && "function" === typeof window.showDirectoryPicker
    }

    function hB() {
      return new Promise(((BB, IB) => {
        const ZB = indexedDB.open(oB, 1);
        ZB.onupgradeneeded = () => {
          const BB = ZB.result;
          BB.objectStoreNames.contains(GB) || BB.createObjectStore(GB)
        }, ZB.onsuccess = () => {
          BB(ZB.result)
        }, ZB.onerror = () => {
          var BB;
          IB(null !== (BB = ZB.error) && void 0 !== BB ? BB : new Error("Failed to open directory sync IndexedDB"))
        }
      }))
    }
    async function zB(BB, IB) {
      const ZB = await hB();
      try {
        await new Promise(((TB, JB) => {
          const oB = ZB.transaction(GB, "readwrite");
          oB.objectStore(GB).put(IB, BB), oB.oncomplete = () => {
            TB()
          }, oB.onerror = () => {
            var BB;
            JB(null !== (BB = oB.error) && void 0 !== BB ? BB : new Error("Failed to store directory handle"))
          }
        }))
      } finally {
        ZB.close()
      }
    }
    async function FB(BB) {
      const IB = await hB();
      try {
        return await new Promise(((ZB, TB) => {
          const JB = IB.transaction(GB, "readonly").objectStore(GB).get(BB);
          JB.onsuccess = () => {
            var BB;
            ZB(null !== (BB = JB.result) && void 0 !== BB ? BB : null)
          }, JB.onerror = () => {
            var BB;
            TB(null !== (BB = JB.error) && void 0 !== BB ? BB : new Error("Failed to load directory handle"))
          }
        }))
      } finally {
        IB.close()
      }
    }
    async function NB(BB) {
      const IB = await hB();
      try {
        await new Promise(((ZB, TB) => {
          const JB = IB.transaction(GB, "readwrite");
          JB.objectStore(GB).delete(BB), JB.oncomplete = () => {
            ZB()
          }, JB.onerror = () => {
            var BB;
            TB(null !== (BB = JB.error) && void 0 !== BB ? BB : new Error("Failed to clear directory handle"))
          }
        }))
      } finally {
        IB.close()
      }
    }
    async function gB(BB) {
      const IB = {
        mode: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readwrite"
      };
      return "granted" === await BB.queryPermission(IB) || "granted" === await BB.requestPermission(IB)
    }
    async function qB(BB) {
      if (!nB()) return null;
      try {
        const IB = await window.showDirectoryPicker({
          mode: "readwrite"
        });
        return await zB(BB, IB), IB
      } catch (IB) {
        if (function(BB) {
            return BB instanceof DOMException && "AbortError" === BB.name
          }(IB)) return null;
        throw IB
      }
    }

    function yB(BB) {
      return BB.startsWith(".") || cB.has(BB)
    }

    function UB(BB) {
      if (!BB) return !0;
      const IB = BB.split("/");
      for (const ZB of IB)
        if ("" === ZB || "." === ZB || ".." === ZB) return !1;
      return !0
    }
    async function WB(BB, IB, ZB) {
      for await (const [oB, GB] of BB.entries()) {
        if ("directory" === GB.kind) {
          if (yB(oB)) continue;
          const BB = IB ? `${IB}/${oB}` : oB;
          if (!UB(BB)) continue;
          await WB(GB, BB, ZB);
          continue
        }
        const BB = IB ? `${IB}/${oB}` : oB;
        if (!(0, TB.v)(BB) && !(0, JB.d)(BB)) continue;
        const vB = await GB.getFile();
        ZB[BB] = (0, JB.d)(BB) ? await aB(vB) : await vB.text()
      }
    }
    async function dB(BB) {
      const IB = {};
      return await WB(BB, "", IB), IB
    }

    function CB(BB) {
      return !(!BB || BB !== BB.trim() || BB.startsWith("/") || BB.includes("\\") || BB.includes("\0")) && UB(BB)
    }
    async function QB(BB, IB, ZB) {
      const TB = IB.split("/"),
        JB = TB[TB.length - 1];
      let oB = BB;
      for (let GB = 0; GB < TB.length - 1; GB++) oB = await oB.getDirectoryHandle(TB[GB], {
        create: ZB
      });
      return {
        dir: oB,
        fileName: JB
      }
    }
    async function sB(BB, IB, ZB) {
      if (!CB(IB)) throw new Error(`Refusing to write unsafe path: ${IB}`);
      const {
        dir: TB,
        fileName: JB
      } = await QB(BB, IB, !0), oB = await TB.getFileHandle(JB, {
        create: !0
      }), GB = await oB.createWritable();
      await GB.write(ZB), await GB.close()
    }
    async function wB(BB, IB, ZB) {
      const TB = await async function(BB, IB) {
        if (!CB(IB)) return null;
        try {
          const {
            dir: ZB,
            fileName: TB
          } = await QB(BB, IB, !1), JB = await ZB.getFileHandle(TB), oB = await JB.getFile();
          return await oB.text()
        } catch (ZB) {
          if (ZB instanceof DOMException && ("NotFoundError" === ZB.name || "NotAllowedError" === ZB.name)) return null;
          throw ZB
        }
      }(BB, IB);
      TB !== ZB && await sB(BB, IB, ZB)
    }
    async function OB(BB, IB, ZB) {
      if (!(0, TB.v)(IB) && !(0, JB.d)(IB)) throw new Error(`Refusing to write non-allowlisted path: ${IB}`);
      if ((0, JB.d)(IB)) {
        if (await HB(BB, IB) === vB) throw new Error(`Move the binary schematic ${IB} outside the linked folder before syncing its placeholder`)
      }
      await sB(BB, IB, ZB)
    }
    async function YB(BB, IB) {
      if (!CB(IB)) throw new Error(`Refusing to remove unsafe path: ${IB}`);
      try {
        const {
          dir: ZB,
          fileName: TB
        } = await QB(BB, IB, !1);
        await ZB.removeEntry(TB)
      } catch (ZB) {
        if (ZB instanceof DOMException && ("NotFoundError" === ZB.name || "NotAllowedError" === ZB.name)) return;
        throw ZB
      }
    }
    async function iB(BB, IB) {
      if (!CB(IB)) return null;
      try {
        const ZB = IB.split("/");
        let TB = BB;
        for (const BB of ZB) TB = await TB.getDirectoryHandle(BB);
        return TB
      } catch (ZB) {
        if (ZB instanceof DOMException && ("NotFoundError" === ZB.name || "NotAllowedError" === ZB.name)) return null;
        throw ZB
      }
    }
    async function pB(BB, IB) {
      if ((0, TB.v)(IB) || (0, JB.d)(IB)) {
        if ((0, JB.d)(IB)) {
          if (await HB(BB, IB) === vB) throw new Error(`Refusing to remove a binary schematic: ${IB}`)
        }
        await YB(BB, IB)
      }
    }
    async function aB(BB) {
      if (BB.size > 64) return vB;
      const IB = await BB.text();
      return Array.from(IB).some((BB => {
        const IB = BB.charCodeAt(0);
        return IB < 9 || IB > 13 && IB < 32 || 65533 === IB
      })) ? vB : IB
    }
    async function HB(BB, IB) {
      try {
        const {
          dir: ZB,
          fileName: TB
        } = await QB(BB, IB, !1);
        return await aB(await (await ZB.getFileHandle(TB)).getFile())
      } catch (ZB) {
        if (ZB instanceof DOMException && "NotFoundError" === ZB.name) return null;
        throw ZB
      }
    }
    async function MB(BB, IB) {
      const ZB = await dB(BB);
      for (const TB of Object.keys(ZB)) TB in IB || (0, JB.d)(TB) || await pB(BB, TB);
      for (const [oB, GB] of Object.entries(IB))((0, TB.v)(oB) || (0, JB.d)(oB)) && await OB(BB, oB, GB)
    }

    function jB(BB, IB) {
      var ZB, TB;
      let JB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const oB = null !== (ZB = JB.debounceMs) && void 0 !== ZB ? ZB : 300,
        GB = null !== (TB = JB.pollMs) && void 0 !== TB ? TB : 1e3;
      let vB = !1,
        kB = null,
        cB = null,
        nB = null;
      const hB = () => {
          vB || (kB && clearTimeout(kB), kB = setTimeout((() => {
            kB = null, zB()
          }), oB))
        },
        zB = async () => {
          if (!vB) try {
            if (!await gB(BB, "readwrite")) return;
            const ZB = await dB(BB);
            vB || IB(ZB)
          } catch (ZB) {
            console.error("[WorldCodeDirectorySync] Failed to read watched directory", ZB)
          }
        };
      zB();
      const FB = window.FileSystemObserver;
      if (FB) try {
        nB = new FB((() => {
          hB()
        })), nB.observe(BB, {
          recursive: !0
        })
      } catch (NB) {
        console.warn("[WorldCodeDirectorySync] FileSystemObserver unavailable, falling back to polling", NB), nB = null
      }
      return nB || (cB = setInterval((() => {
        hB()
      }), GB)), () => {
        vB = !0, kB && clearTimeout(kB), cB && clearInterval(cB), nB && nB.disconnect()
      }
    }
  },
  5001: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => qB,
      d: () => yB
    });
    var TB = ZB(1091),
      JB = ZB.n(TB),
      oB = ZB(63),
      GB = ZB(1248),
      vB = ZB(5007),
      kB = ZB(1960),
      cB = ZB(2526),
      nB = ZB(5011),
      hB = ZB(1153);
    const zB = new WeakMap;
    let FB = 0;

    function NB(BB) {
      let IB = zB.get(BB);
      return void 0 === IB && (IB = FB++, zB.set(BB, IB)), IB
    }

    function gB(BB) {
      let {
        piece: IB
      } = BB;
      return "space" === IB.kind ? (0, hB.jsx)(hB.Fragment, {
        children: IB.text
      }) : (0, hB.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${IB.delayMs}ms`
        },
        children: (0, hB.jsx)(vB.c, {
          text: "icon" === IB.kind ? `[[${IB.icon}]]` : IB.text
        })
      })
    }

    function qB(BB) {
      let {
        display: IB
      } = BB;
      const {
        selectedLanguage: ZB
      } = (0, GB.G)(), TB = (0, oB.useMemo)((() => (0, nB.b)((0, nB.c)(IB).plan.pieces)), [IB, ZB.code]);
      return (0, hB.jsxs)("div", {
        className: JB()("Dialogue", {
          DialogueAnimateIn: !1 !== IB.animateIn
        }),
        children: [IB.speakerName && (0, hB.jsx)(kB.e, {
          text: IB.speakerName,
          className: "DialogueSpeaker"
        }), (0, hB.jsx)("p", {
          className: "DialogueLine",
          children: TB.map(((BB, IB) => 1 === BB.length && "space" === BB[0].kind ? BB[0].text : (0, hB.jsx)("span", {
            className: "DialogueGlue",
            children: BB.map(((BB, IB) => (0, hB.jsx)(gB, {
              piece: BB
            }, IB)))
          }, IB)))
        })]
      })
    }
    const yB = (0, oB.memo)((function() {
      const BB = (0, cB.d)("dialogue");
      return (0, hB.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: BB && (0, hB.jsx)(qB, {
          display: BB
        }, NB(BB))
      })
    }))
  },
  36697: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => gB,
      e: () => qB
    });
    var TB = ZB(63),
      JB = ZB(1507),
      oB = ZB(2054),
      GB = ZB(36642),
      vB = ZB(665),
      kB = ZB(1091),
      cB = ZB.n(kB),
      nB = ZB(1153);
    const hB = [zB()];

    function zB() {
      return {
        source: null,
        direction: null,
        tL: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function FB(BB) {
      return hB.find((IB => null !== IB.source && IB.source === BB))
    }

    function NB(BB) {
      clearTimeout(BB.timeout), BB.source = null, BB.direction = null, BB.writtenAngle = null, BB.tL && (BB.tL.style.rotate = "")
    }
    const gB = (0, TB.memo)((function() {
      const [, BB] = (0, TB.useReducer)((BB => BB + 1), 0);
      return (0, JB.d)("damagedByOtherPlayer", (IB => {
        let {
          yZ: ZB,
          direction: TB
        } = IB;
        const JB = ZB || "nonDirectional",
          oB = function(BB) {
            var IB;
            const ZB = null !== (IB = FB(BB)) && void 0 !== IB ? IB : hB.find((BB => null === BB.source));
            if (ZB) return ZB;
            const TB = {
              source: null,
              direction: null,
              tL: null,
              timeout: void 0,
              writtenAngle: null
            };
            return hB.push(TB), TB
          }(JB);
        clearTimeout(oB.timeout), oB.source = JB, oB.direction = TB, oB.timeout = setTimeout((() => {
          NB(oB), BB()
        }), 800), BB()
      })), (0, oB.c)("kill", (IB => {
        let {
          killer: ZB,
          victim: TB
        } = IB;
        const JB = ZB.local && FB(TB.id);
        JB && (NB(JB), BB())
      })), (0, TB.useEffect)((() => {
        const BB = (0, GB.d)("turnDamageIndicators", qB);
        return () => {
          BB(), hB.forEach(NB)
        }
      }), []), (0, nB.jsx)("div", {
        className: "DirectionalDamage",
        children: hB.map(((BB, IB) => (0, nB.jsx)("div", {
          ref: IB => {
            BB.tL = IB
          },
          className: cB()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, vB.L)(BB.direction),
            DamageIndicatorIdle: null === BB.source
          })
        }, IB)))
      })
    }));

    function qB(BB) {
      for (const IB of hB) {
        if (null === IB.source || (0, vB.L)(IB.direction)) continue;
        const ZB = IB.direction - BB;
        ZB !== IB.writtenAngle && (IB.writtenAngle = ZB, IB.tL.style.rotate = `${ZB}rad`)
      }
    }
  },
  8895: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => HB,
      e: () => YB,
      h: () => iB
    });
    var TB = ZB(63),
      JB = ZB(4728),
      oB = ZB(1179),
      GB = ZB(1507),
      vB = ZB(24),
      kB = ZB(3605),
      cB = ZB(2333),
      nB = ZB(1300),
      hB = ZB(2696),
      zB = ZB(1995),
      FB = ZB(2054),
      NB = ZB(1248),
      gB = ZB(20),
      qB = ZB(1711),
      yB = ZB(1091),
      UB = ZB.n(yB),
      WB = ZB(8904),
      dB = ZB(8913),
      CB = ZB(8917),
      QB = ZB(8835),
      sB = ZB(8920),
      wB = (ZB(8927), ZB(1153));
    let OB = null;

    function YB() {
      return null !== OB
    }

    function iB() {
      return "pad" === OB
    }

    function pB() {
      return "inGame" === gB.d.get("gameState") && !(0, qB.n)()
    }

    function aB(BB) {
      return (0, dB.u)(BB, nB.o, dB.f, dB.j, dB.m)
    }
    const HB = (0, TB.memo)((function() {
      const {
        t: BB
      } = (0, NB.G)(), {
        userContext: IB
      } = (0, oB.d)(), [ZB, gB] = (0, TB.useState)(null), [yB, YB] = (0, TB.useState)(null), iB = (0, TB.useRef)(null), HB = (0, TB.useCallback)((BB => {
        iB.current = BB, YB(BB)
      }), []), MB = (0, TB.useRef)(0), jB = (0, TB.useRef)(null), PB = (0, TB.useRef)({
        x: 0,
        y: 0
      }), [RB, rB] = (0, TB.useState)(0), mB = (0, TB.useMemo)((() => function(BB) {
        const IB = [];
        for (let TB = 0; TB < nB.o; TB++) {
          var ZB;
          IB.push(null !== (ZB = BB[TB]) && void 0 !== ZB ? ZB : null)
        }
        return IB
      }((0, hB.h)(IB.getPlayerCosmetics().emote))), [IB, RB]);
      (0, FB.c)("cosmeticsUpdated", (BB => {
        BB.some((BB => BB.local && "emote" === BB.Ho)) && rB((BB => BB + 1))
      }));
      const XB = (0, TB.useRef)(!1),
        LB = (0, TB.useCallback)((function(BB) {
          let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === BB && (0, CB.h)(), XB.current = IB, PB.current = {
            x: 0,
            y: 0
          }, HB(null), gB(BB)
        }), [HB]),
        eB = (0, TB.useCallback)((() => {
          gB(null), HB(null), PB.current = {
            x: 0,
            y: 0
          }
        }), [HB]),
        uB = (0, TB.useCallback)((BB => {
          if (Date.now() < MB.current) return;
          const IB = (0, cB.j)(BB),
            ZB = !!IB.holdUntilMove,
            TB = ZB ? 600 : Math.ceil(1e3 * IB.animation.animation_length / cB.d) + 200;
          MB.current = Date.now() + TB, jB.current = BB, zB.gameBridge.send("playEmote", BB), zB.gameBridge.send("applyTemporaryThirdPerson", ZB ? {} : {
            durationMs: TB
          })
        }), []);
      (0, GB.d)("requestToggleEmoteWheel", (() => {
        null === ZB ? pB() && LB("click") : eB()
      })), (0, GB.d)("requestEmoteWheelHoldOpen", (() => {
        null === ZB && pB() && LB((0, WB.e)() ? "hold" : "click")
      })), (0, GB.d)("requestEmoteWheelPadOpen", (BB => {
        null !== ZB || !pB() || (0, QB.c)() || (0, sB.p)() || LB("pad", BB)
      })), (0, GB.d)("requestEmoteRepeatLast", (() => {
        if (null !== ZB || !pB() || (0, QB.c)() || (0, sB.p)()) return;
        const BB = jB.current;
        null !== BB && mB.includes(BB) ? uB(BB) : LB("pad", !0)
      }));
      const fB = () => {
        const BB = iB.current,
          IB = null !== BB ? mB[BB] : null;
        null !== IB && "pad" === ZB && Date.now() < MB.current || (eB(), null !== IB && uB(IB))
      };
      (0, GB.d)("emoteWheelPadAim", (BB => {
        if ("pad" !== ZB) return;
        const IB = (0, dB.F)(BB, nB.o, iB.current);
        HB(null !== IB && null !== mB[IB] ? IB : null)
      })), (0, GB.d)("requestEmoteWheelPadCommit", (BB => {
        "pad" !== ZB || BB && XB.current || fB()
      })), (0, GB.d)("appManagerUpdated|activeInputDevice", (BB => {
        null !== ZB && "pad" === ZB !== ("gamepad" === BB) && eB()
      })), (0, TB.useLayoutEffect)((() => (OB = ZB, (0, kB.s)("emoteWheel", "pad" === ZB), vB.l.Gq(kB.j), () => {
        OB = null, (0, kB.s)("emoteWheel", !1), vB.l.Gq(kB.j)
      })), [ZB]), (0, GB.d)("requestEmoteWheelHoldRelease", (() => {
        "hold" === ZB && fB()
      })), (0, GB.d)("requestEmoteWheelClose", (() => {
        null !== ZB && eB()
      })), (0, GB.d)("appManagerUpdated|gameState", (BB => {
        "inGame" !== BB && eB()
      }));
      const lB = () => {
        (0, qB.n)() && eB()
      };
      if ((0, GB.d)("appManagerUpdated|openEverythingMenuName", lB), (0, GB.d)("appManagerUpdated|openInGameMenuName", lB), (0, GB.d)("pointerLockUpdate", (BB => {
          BB || "hold" !== ZB || eB()
        })), (0, TB.useEffect)((() => {
          if (null === ZB) return;
          const BB = BB => {
            "Escape" === BB.key && (BB.stopImmediatePropagation(), BB.preventDefault(), eB())
          };
          return document.addEventListener("keydown", BB, !0), () => {
            document.removeEventListener("keydown", BB, !0)
          }
        }), [ZB, eB]), (0, JB.e)(!0, "click" === ZB, "EmoteWheelOverlay"), (0, TB.useEffect)((() => {
          if ("hold" === ZB) return zB.gameBridge.send("holdEmoteWheel", !0), () => {
            zB.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [ZB]), (0, TB.useEffect)((() => {
          if ("hold" !== ZB) return;
          const BB = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            IB = dB.r * BB,
            TB = dB.p * BB,
            JB = BB => {
              let ZB = PB.current.x + BB.movementX,
                JB = PB.current.y + BB.movementY;
              const oB = Math.hypot(ZB, JB);
              if (oB > IB) {
                const BB = IB / oB;
                ZB *= BB, JB *= BB
              }
              PB.current = {
                x: ZB,
                y: JB
              }, HB(function(BB, IB, ZB, TB) {
                if (Math.hypot(BB, IB) < ZB) return null;
                const JB = (0, dB.v)(BB, IB, nB.o);
                return null === TB[JB] ? null : JB
              }(ZB, JB, TB, mB))
            };
          return document.addEventListener("mousemove", JB), () => {
            document.removeEventListener("mousemove", JB)
          }
        }), [ZB, mB, HB]), null === ZB) return null;
      const AB = "hold" === ZB || "pad" === ZB,
        tB = null !== yB ? mB[yB] : null,
        bB = null !== tB ? (0, cB.j)(tB).displayName : BB("emotes:pickEmote");
      return (0, wB.jsx)("div", {
        className: UB()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === ZB
        }),
        onMouseDown: BB => {
          BB.target === BB.currentTarget && eB()
        },
        children: (0, wB.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * dB.r + "rem",
            height: 2 * dB.r + "rem"
          },
          children: [(0, wB.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${dB.o} ${dB.o}`,
            children: [mB.map(((IB, ZB) => {
              const TB = null !== IB,
                JB = AB && ZB === yB;
              return (0, wB.jsx)("path", {
                d: aB(ZB),
                className: UB()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: JB,
                  EmoteWheelWedgeDisabled: !TB
                }),
                onClick: BB => {
                  BB.stopPropagation(), null !== IB && (BB => {
                    eB(), uB(BB)
                  })(IB)
                },
                "aria-label": null !== IB ? (0, cB.j)(IB).displayName : BB("emotes:emptySlot")
              }, ZB)
            })), (0, wB.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: dB.f,
              cy: dB.f,
              r: dB.m
            }), (0, wB.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: dB.f,
              cy: dB.f,
              r: dB.j
            }), AB && null !== yB && (0, wB.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: aB(yB)
            })]
          }), mB.map(((BB, IB) => {
            const ZB = null !== BB,
              TB = AB && IB === yB,
              JB = (0, dB.z)(IB, nB.o),
              oB = dB.b * Math.cos(JB),
              GB = dB.b * Math.sin(JB);
            return (0, wB.jsx)("div", {
              className: UB()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: TB,
                EmoteWheelSlotIconDisabled: !ZB
              }),
              style: {
                left: `calc(50% + ${oB}rem)`,
                top: `calc(50% + ${GB}rem)`,
                backgroundImage: ZB ? `url(/textures/charSkins/previews/emote_${BB}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, IB)
          })), (0, wB.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: bB
          })]
        })
      })
    }))
  },
  36573: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => qB
    });
    var TB = ZB(63),
      JB = ZB(82),
      oB = ZB(1248),
      GB = ZB(1091),
      vB = ZB.n(GB),
      kB = ZB(1805),
      cB = ZB(1102),
      nB = ZB(1343),
      hB = ZB(1542),
      zB = ZB(1738),
      FB = ZB(1538),
      NB = ZB(1153);
    const gB = 14;

    function qB(BB) {
      let {
        className: IB,
        triggerElementRef: ZB,
        options: GB
      } = BB;
      const {
        t: qB
      } = (0, oB.G)(), [yB, UB] = (0, TB.useState)(!1), [WB, dB] = (0, TB.useState)({
        x: 0,
        y: 0
      }), CB = (0, TB.useRef)(null);
      (0, TB.useEffect)((() => {
        let BB = null;
        const IB = IB => {
            BB = {
              x: IB.clientX,
              y: IB.clientY
            }
          },
          TB = IB => {
            if (null === BB || !(0, FB.d)(BB, IB)) return;
            BB = null;
            const ZB = gB * (0, kB.getRemInPx)();
            dB({
              x: Math.min(IB.clientX, window.innerWidth - ZB - 5),
              y: IB.clientY
            }), UB((BB => !BB))
          },
          JB = BB => {
            var IB;
            null !== (IB = CB.current) && void 0 !== IB && IB.contains(BB.relatedTarget) || UB(!1)
          },
          oB = ZB.current;
        return oB.addEventListener("pointerdown", IB), oB.addEventListener("pointerup", TB), oB.addEventListener("mouseleave", JB), () => {
          oB.removeEventListener("pointerdown", IB), oB.removeEventListener("pointerup", TB), oB.removeEventListener("mouseleave", JB)
        }
      }), [ZB]), (0, TB.useEffect)((() => {
        if (yB) return (0, zB.e)("pointerdown", (BB => {
          !CB.current || CB.current.contains(BB.target) || ZB.current.contains(BB.target) || UB(!1)
        }))
      }), [yB, ZB]), (0, TB.useLayoutEffect)((() => {
        if (!yB || !CB.current) return;
        const BB = CB.current.getBoundingClientRect().height,
          IB = Math.max(5, window.innerHeight - BB - 5);
        WB.y > IB && dB({
          x: WB.x,
          y: IB
        })
      }), [yB, WB]), (0, nB.t)("popup", CB, (() => {
        UB(!1)
      }), yB);
      const QB = GB.filter((BB => !1 !== BB.show));
      return yB && 0 !== QB.length ? (0, JB.createPortal)((0, NB.jsx)("div", {
        ref: CB,
        className: vB()("FloatingActions", {
          [IB]: IB
        }),
        style: {
          width: `${gB}rem`,
          top: WB.y,
          left: WB.x
        },
        children: QB.map((BB => {
          let {
            icon: IB,
            text: ZB,
            onPointerDown: TB,
            analyticsClick: JB
          } = BB;
          return (0, NB.jsxs)("div", {
            className: "FloatingAction",
            "data-pad-focusable": !0,
            onPointerUp: BB => {
              void 0 !== JB && (0, hB.reportAnalyticsClick)(JB), TB(BB), UB(!1), BB.stopPropagation()
            },
            children: [(0, NB.jsx)(cB.d, {
              name: IB
            }), (0, NB.jsx)("div", {
              children: qB(ZB)
            })]
          }, ZB)
        }))
      }), function() {
        var BB;
        return null !== (BB = document.querySelector(".WholeAppWrapperInner")) && void 0 !== BB ? BB : document.body
      }()) : null
    }
  },
  36713: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => GG
    });
    var TB = ZB(36613),
      JB = ZB(63),
      oB = ZB(2153),
      GB = ZB(4714),
      vB = ZB(4721),
      kB = ZB(2526),
      cB = ZB(1995),
      nB = ZB(1153);

    function hB(BB) {
      let {
        className: IB,
        style: ZB,
        vw: TB,
        maxPx: JB,
        children: oB
      } = BB;
      console.assert("number" === typeof TB && "number" === typeof JB, "vw and maxPx passed to Text must be numbers");
      const GB = window.innerWidth * (TB / 100) > JB ? `${JB}px` : `${TB}vw`;
      return (0, nB.jsx)("div", {
        className: IB,
        style: {
          ...ZB,
          fontSize: GB
        },
        children: oB
      })
    }
    var zB = ZB(36717),
      FB = ZB(1516),
      NB = ZB(24),
      gB = ZB(2029),
      qB = ZB(1102);

    function yB(BB) {
      let {
        tasks: IB,
        lastDisplayedTasks: ZB
      } = BB;
      return (0, nB.jsx)(nB.Fragment, {
        children: Object.keys(IB).map((BB => (0, nB.jsx)(UB, {
          task: IB[BB],
          lastDisplayedAs: ZB[BB]
        }, IB[BB].text)))
      })
    }

    function UB(BB) {
      let {
        task: IB,
        lastDisplayedAs: ZB
      } = BB;
      const [TB, oB] = (0, JB.useState)(null !== ZB && void 0 !== ZB && ZB.progress ? ZB.progress / IB.goal : 0), [GB, vB] = (0, JB.useState)(!1), [kB, cB] = (0, JB.useState)(IB.claimed || !1);
      return (0, JB.useEffect)((() => {
        oB(IB.progress / IB.goal)
      }), [IB.progress, IB.goal]), kB ? null : (0, nB.jsxs)("div", {
        className: "Task",
        children: [(0, nB.jsx)("div", {
          className: "TaskDescDiv",
          children: (0, nB.jsx)(hB, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: IB.text
          })
        }), IB.progress < IB.goal ? (0, nB.jsxs)("div", {
          className: "TaskProgress",
          children: [0 !== TB ? (0, nB.jsx)("div", {
            className: "TaskProgressForeground",
            style: {
              width: 100 * TB + "%"
            }
          }) : null, (0, nB.jsx)("div", {
            className: "TaskProgressText",
            children: `${IB.progress}/${IB.goal}`
          })]
        }) : (0, nB.jsx)(FB.p, {
          className: "ClaimRewardButton",
          onClick: () => {
            vB(!0)
          },
          children: (0, nB.jsx)(hB, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: "Claim Reward"
          })
        }), GB ? (0, nB.jsx)(WB, {
          task: IB,
          close: () => {
            IB.claimed = !0, cB(!0), vB(!1)
          }
        }) : null]
      })
    }

    function WB(BB) {
      let {
        task: IB,
        close: ZB
      } = BB;
      const [TB, oB] = (0, JB.useState)({}), [GB, vB] = (0, JB.useState)("closed");
      (0, JB.useEffect)((() => {
        let BB;
        return "animStart" === GB && (BB = setTimeout((() => {
          vB("animEnd")
        }), 700)), () => {
          clearTimeout(BB)
        }
      }), [GB]), (0, zB.d)((() => {
        cB.gameBridge.send("completeTask", IB.text)
      }));
      const hB = (0, kB.d)("currencyAmounts");
      return (0, nB.jsxs)("div", {
        className: "RewardBackground",
        onClick: () => {
          if ("animEnd" === GB)
            if (0 === IB.rewards.length) ZB(), cB.gameBridge.send("completeTask", IB.text);
            else {
              const BB = {
                ...gB.c.get("currencyAmounts")
              };
              for (const IB in TB) BB[IB] = {
                ...BB[IB],
                amount: BB[IB].amount + TB[IB]
              };
              gB.c.apply({
                currencyAmounts: BB
              }), vB("closed")
            }
          else "closed" === GB && (oB(IB.rewards.pop()), vB("animStart"))
        },
        children: [(0, nB.jsx)("img", {
          className: "Chest",
          alt: "closed" !== GB ? "open chest" : "closed chest",
          src: `/textures/miscImages/Treasure Chest ${"closed"!==GB?"open":"closed"}.png`
        }), (0, nB.jsx)("div", {
          className: "Rewards",
          children: "closed" !== GB ? Object.keys(TB).map((BB => {
            const IB = null === hB || void 0 === hB ? void 0 : hB[BB];
            return !IB || IB.hidden ? null : (0, nB.jsxs)("div", {
              className: "Reward",
              children: [(0, nB.jsx)(qB.d, {
                name: IB.icon,
                className: "3x UiCurrencyIcon RewardIcon",
                style: {
                  color: IB.iconColour
                }
              }), (0, nB.jsx)("div", {
                className: "RewardAmountText",
                children: "animStart" === GB ? 0 : TB[BB]
              })]
            }, BB)
          })) : null
        }), "animStart" === GB ? (0, nB.jsx)(dB, {}) : null, (0, nB.jsx)("div", {
          className: "ChestsLeft",
          children: IB.rewards.length
        })]
      })
    }

    function dB() {
      const [BB, IB] = (0, JB.useState)(0);
      (0, JB.useEffect)((() => {
        IB(1)
      }), []);
      return (0, nB.jsx)(nB.Fragment, {
        children: Array.from({
          length: 40
        }).map(((IB, ZB) => (0, nB.jsx)(qB.d, {
          name: "star",
          className: "3x UiCurrencyIcon OpenStar",
          style: {
            bottom: 50 * BB * Math.cos(ZB / 40 * (2 * Math.PI)) + 50 + "vh",
            left: 50 * BB * Math.sin(ZB / 40 * (2 * Math.PI)) + "vh",
            opacity: 0 === BB ? 1 : 0
          }
        }, ZB)))
      })
    }
    NB.l.subscribe("requiredLibrariesLoaded", (() => {
      setTimeout((() => {
        const BB = new Image,
          IB = new Image;
        BB.src = "/textures/miscImages/Treasure Chest open.png", IB.src = "/textures/miscImages/Treasure Chest closed.png"
      }), 1e4)
    }));
    var CB = ZB(3294),
      QB = ZB(1179),
      sB = ZB(1960),
      wB = ZB(1507),
      OB = ZB(360),
      YB = ZB(2054),
      iB = ZB(1397);

    function pB(BB) {
      var IB, ZB;
      let {
        byId: TB,
        localId: JB
      } = BB;
      return null === JB ? null : null !== (IB = null === (ZB = TB[JB]) || void 0 === ZB ? void 0 : ZB.name) && void 0 !== IB ? IB : null
    }

    function aB(BB) {
      let {
        lbStats: IB,
        storedState: ZB = {}
      } = BB;
      const {
        userContext: TB
      } = (0, QB.d)(), oB = (0, YB.g)("players", pB), [GB, vB] = (0, JB.useState)(ZB.selectedCat || (null === IB || void 0 === IB ? void 0 : IB[0]) || null), [kB, hB] = (0, JB.useState)(ZB.selectedTimeframe || "Today"), [zB, FB] = (0, JB.useState)(null);
      (0, JB.useEffect)((() => {
        null === GB && null !== IB && IB.length > 0 && vB(IB[0])
      }), [IB, GB]);
      const [NB, gB] = (0, JB.useState)(ZB.seeingTop || !1), [qB, yB] = (0, JB.useState)(!1), UB = (0, JB.useCallback)((() => {
        null !== GB && null !== kB && (cB.gameBridge.send("requestLeaderboard", {
          category: GB.value,
          timeframe: kB,
          seeTop: NB
        }), dB(!0), jB && PB(null))
      }), [GB, kB, ZB, NB]);
      (0, JB.useEffect)((() => {
        UB(), ZB.selectedCat = GB, ZB.selectedTimeframe = kB, ZB.seeingTop = NB
      }), [GB, kB, ZB, NB, UB]), (0, JB.useEffect)((() => {
        if ((null === zB || void 0 === zB ? void 0 : zB.length) > 0)
          if (NB) NB && yB(null === aB(zB));
          else {
            for (const BB of zB)
              if (1 === BB.place) return void yB(!1);
            yB(!0)
          }
      }), [zB, NB]), (0, wB.d)("leaderboardResponse", (BB => {
        let {
          category: ZB,
          timeframe: TB,
          data: JB
        } = BB;
        for (let oB = 0; oB < IB; oB++)
          if (IB[oB].value === ZB) {
            vB(IB[oB]);
            break
          } hB(TB), FB(JB), dB(!1)
      }));
      const [WB, dB] = (0, JB.useState)(!0);

      function aB(BB) {
        const IB = pB(cB.gameBridge.latest("players"));
        for (let ZB = 0; ZB < BB.length; ZB++)
          if (BB[ZB].name === IB) return BB[ZB].place;
        return null
      }
      const [HB, MB] = (0, JB.useState)(!1), [jB, PB] = (0, JB.useState)(null);
      (0, JB.useEffect)((() => {
        if (zB && !HB) {
          const BB = aB(zB);
          BB < (ZB.lastSeenPlayerPlace || 0) && PB(ZB.lastSeenPlayerPlace - BB), MB(!0)
        }
      }), [zB, ZB, HB]), (0, JB.useEffect)((() => () => {
        zB && (ZB.lastSeenPlayerPlace = aB(zB))
      }), [zB, ZB]);
      const RB = (0, JB.useRef)(null),
        [rB, mB] = (0, JB.useState)(void 0);
      return (0, JB.useEffect)((() => {
        var BB, IB;
        rB !== (null === (BB = RB.current) || void 0 === BB ? void 0 : BB.offsetHeight) && mB(null === (IB = RB.current) || void 0 === IB ? void 0 : IB.offsetHeight)
      })), TB.isLoggedIn() ? (0, nB.jsxs)(nB.Fragment, {
        children: [(0, nB.jsxs)("div", {
          className: "LeaderboardSelectors",
          children: [(0, nB.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, nB.jsx)(CB.c, {
              options: IB.map((BB => ({
                label: BB.label,
                value: BB.value
              }))),
              value: GB,
              onChange: BB => {
                vB(BB)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), (0, nB.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, nB.jsx)(CB.c, {
              options: OB.Qc.map((BB => ({
                value: BB,
                label: BB,
                className: "LBDropdownMenuItem"
              }))),
              value: kB,
              onChange: BB => {
                hB(BB.label)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), qB ? (0, nB.jsx)("div", {
            className: "SeeTopText",
            onClick: () => {
              gB(!NB)
            },
            children: NB ? "See Yourself" : "See Top"
          }) : null]
        }), (0, nB.jsx)("div", {
          className: "LBTableWrapper",
          children: WB ? (0, nB.jsx)("div", {
            className: "LoaderContainer",
            children: (0, nB.jsx)(iB.d, {})
          }) : null === jB ? (0, nB.jsx)(nB.Fragment, {
            children: (0, nB.jsxs)("table", {
              className: "LBTable",
              children: [(0, nB.jsx)("thead", {
                className: "LBTableTHead",
                ref: RB,
                children: (0, nB.jsxs)("tr", {
                  children: [(0, nB.jsx)("th", {
                    className: "LBTablePlaceTH LBTableTH",
                    children: "PLACE"
                  }), (0, nB.jsx)("th", {
                    className: "LBTablePlayerTH LBTableTH",
                    children: "PLAYER"
                  }), (0, nB.jsx)("th", {
                    className: "LBTableValueTH LBTableTH",
                    children: GB.label.toUpperCase()
                  })]
                })
              }), (0, nB.jsx)("tbody", {
                children: zB.map((BB => (0, nB.jsxs)("tr", {
                  className: "LBTableTR " + (BB.name === oB ? "LBTableTRYou" : ""),
                  children: [(0, nB.jsx)("td", {
                    className: "LBTableTD",
                    children: `#${BB.place}`
                  }), (0, nB.jsx)("td", {
                    className: "LBTableTD",
                    children: (0, nB.jsx)(sB.e, {
                      text: [{
                        entityName: BB.name
                      }]
                    })
                  }), (0, nB.jsx)("td", {
                    className: "LBTableTD",
                    children: BB.stat
                  })]
                }, BB.name)))
              })]
            })
          }) : (0, nB.jsx)("div", {
            className: "LBIncreaseWrapper",
            onClick: () => {
              PB(null)
            },
            children: (0, nB.jsxs)("div", {
              className: "LBIncreaseDiv",
              children: [(0, nB.jsx)("div", {
                className: "TriangleUp"
              }), (0, nB.jsx)("div", {
                className: "LBIncreaseText",
                children: `${jB} Place${jB>1?"s":""}`
              })]
            })
          })
        })]
      }) : (0, nB.jsxs)("div", {
        className: "LBLoginDiv",
        children: [(0, nB.jsx)("div", {
          className: "LBLoginInfo",
          children: "Login to see the leaderboard"
        }), (0, nB.jsx)("div", {
          className: "LBLoginInfo",
          children: "You can login from the top left homescreen"
        })]
      })
    }
    var HB = ZB(3272),
      MB = ZB(105),
      jB = ZB(36),
      PB = ZB(3600);
    const RB = (0, JB.memo)((function(BB) {
      let {
        show: IB,
        onClose: ZB
      } = BB;
      (0, HB.b)();
      const TB = (0, kB.d)("_tasks"),
        oB = (0, kB.d)("_availableLeaderboards"),
        [cB, hB] = (0, JB.useState)({});
      TB && Object.keys(TB).length > 0 && 0 === Object.keys(cB).length && hB(TB);
      const [zB] = (0, JB.useState)({
        tasks: {},
        leaderboard: {}
      }), FB = {
        tasks: {
          Title: "Tasks",
          getIsDefined: () => !!TB && Object.keys(TB).length > 0,
          content: (0, nB.jsx)(yB, {
            tasks: TB,
            lastDisplayedTasks: cB
          })
        },
        leaderboard: {
          Title: "Leaderboard",
          getIsDefined: () => (null === oB || void 0 === oB ? void 0 : oB.length) > 0,
          content: (0, nB.jsx)(aB, {
            lbStats: oB,
            storedState: zB.leaderboard
          })
        }
      };

      function NB() {
        for (const BB in FB)
          if (FB[BB].getIsDefined()) return BB;
        return null
      }
      const [gB, qB] = (0, JB.useState)(NB());

      function UB() {
        hB({
          ...TB
        }), ZB()
      }(0, JB.useEffect)((() => {
        gB || qB(NB())
      }), [NB()]), (0, vB.e)(!0, gB && IB), (0, JB.useEffect)((() => {
        IB && !gB && (console.log("CLOSE"), UB())
      }), [IB, gB]);
      const [WB, dB] = (0, JB.useState)(!1);
      return (0, JB.useEffect)((() => {
        IB && gB && !WB && dB(!0)
      }), [IB, WB, gB]), (0, JB.useEffect)((() => {
        !WB && TB && "tasks" !== gB && qB("tasks")
      }), [WB, TB, gB]), (0, nB.jsx)(nB.Fragment, {
        children: gB ? (0, nB.jsx)(PB.d, {
          className: "RetentionFeaturesWrapper",
          show: IB,
          children: (0, nB.jsxs)(GB.c, {
            close: UB,
            escDoesExit: !1,
            closeClassnameList: ["VerticalMenuScreenDiv"],
            togglePointerLock: !1,
            globallyUniqueKey: "RetentionFeaturesComponent",
            children: [(0, nB.jsxs)("div", {
              className: "VerticalMenuScreenDiv",
              children: [(0, nB.jsx)(mB, {}), (0, nB.jsxs)("div", {
                className: "MenuDiv",
                children: [(0, nB.jsx)(rB, {
                  setCategory: qB,
                  menuCategories: FB,
                  selectedCat: gB
                }), (0, nB.jsx)("div", {
                  className: "MenuCategoryContainer",
                  children: FB[gB].content
                })]
              })]
            }), (0, nB.jsx)("div", {
              className: "BottomScreenMenuWrapper",
              children: MB.featureFlags.useDiscord && (0, nB.jsx)("div", {
                className: "DiscordMenuDivDiv",
                children: (0, nB.jsx)("div", {
                  className: "DiscordMenuDiv",
                  children: (0, nB.jsx)(XB, {
                    tasks: TB
                  })
                })
              })
            })]
          })
        }) : null
      })
    }));

    function rB(BB) {
      let {
        selectedCat: IB,
        setCategory: ZB,
        menuCategories: TB
      } = BB;
      return (0, nB.jsx)("div", {
        className: "MenuHeader",
        children: Object.keys(TB).map((BB => TB[BB].getIsDefined() ? (0, nB.jsx)("div", {
          className: "MenuHeaderCategory " + (BB === IB ? "SelectedHeaderCat" : "UnselectedHeaderCat"),
          onClick: () => {
            ZB(BB)
          },
          children: TB[BB].Title
        }, BB) : null))
      })
    }

    function mB() {
      const BB = (0, kB.d)("currencyAmounts");
      return (0, nB.jsx)("div", {
        className: "TopScreenCurrencies",
        children: Object.keys(null !== BB && void 0 !== BB ? BB : {}).map((IB => {
          const ZB = BB[IB];
          return ZB.hidden ? null : (0, nB.jsxs)("div", {
            className: "TopScreenCurrencyDiv",
            children: [(0, nB.jsx)(qB.d, {
              name: ZB.icon,
              className: "3x UiCurrencyIcon",
              style: {
                color: ZB.iconColour
              }
            }), (0, nB.jsx)("div", {
              className: "UiCurrencyAmount",
              children: ZB.amount
            })]
          }, IB)
        }))
      })
    }

    function XB(BB) {
      let {
        tasks: IB
      } = BB;
      return (0, nB.jsxs)("a", {
        className: "MenuDiscordButtonWrapper",
        href: "https://discord.gg/playbloxd",
        target: "_blank",
        rel: "noreferrer",
        children: [(0, nB.jsx)(qB.d, {
          name: "discord",
          kit: "brands",
          className: "DiscordButton",
          onClick: () => {
            jB.m.setItem("DiscordPressed", !0), cB.gameBridge.send("setServerCookie", {
              key: "joinDiscord",
              value: "true"
            }), "joinDiscord" in IB && NB.l.Gq("clientTaskProgress", {
              taskId: "joinDiscord",
              progress: 1
            })
          }
        }), (0, nB.jsx)(oB.b, {})]
      })
    }
    var LB = ZB(20),
      eB = ZB(1711),
      uB = ZB(36558),
      fB = ZB(34073),
      lB = ZB(4802),
      AB = ZB(168),
      tB = ZB(1267),
      bB = ZB(1421),
      xB = ZB(2797),
      EB = ZB(1248),
      DB = ZB(1717),
      KB = ZB(2469),
      VB = ZB(2462),
      SB = ZB(1919),
      BI = ZB(2116),
      II = ZB(1325),
      ZI = ZB(1542),
      TI = ZB(36726),
      JI = ZB(36735),
      oI = ZB(36737),
      GI = ZB(36745),
      vI = ZB(36747),
      kI = ZB(2861);

    function cI(BB) {
      let {
        playersHere: IB,
        exclude: ZB,
        cW: TB
      } = BB;
      const {
        t: oB
      } = (0, EB.G)(), GB = (0, kI.l)(kI.g), [vB, kB] = (0, JB.useState)([]), cB = [], hB = (BB, IB) => {
        const TB = [...ZB, ...cB.map((BB => BB.player.name))];
        cB.length < 3 && !(0, JI.m)(TB, BB.name) && cB.push({
          player: BB,
          status: IB
        })
      };
      for (const JB of IB) hB((0, vI.j)(JB.name, JB.cosmetics, JB.ranks), oB("worldSocial:inThisWorld"));
      if ("loaded" === GB.state.status)
        for (const JB of GB.state.recentPlayers) JB.preview.name && !JB.preview.isError && hB({
          ...JB.preview,
          location: {
            status: "offline"
          }
        }, oB("worldSocial:playedWithYou"));
      const zB = BB => {
        kB((IB => [...IB, BB])), TB(BB).finally((() => {
          kB((IB => IB.filter((IB => IB !== BB))))
        }))
      };
      return (0, nB.jsx)(nB.Fragment, {
        children: cB.map(((BB, IB) => {
          let {
            player: ZB,
            status: TB
          } = BB;
          return (0, nB.jsx)(vI.f, {
            zIndex: cB.length - IB,
            player: ZB,
            status: TB,
            onSendFriendRequest: () => {
              zB(ZB.name)
            },
            actions: (0, nB.jsx)(bB.e, {
              tooltipInner: (0, nB.jsx)(nB.Fragment, {
                children: oB("recentPlayers:addFriend")
              }),
              delayShow: 0,
              hoverOnly: !0,
              children: (0, nB.jsx)(FB.g, {
                className: "FriendRequestButton",
                disabled: vB.includes(ZB.name),
                ariaLabel: `${oB("recentPlayers:addFriend")} ${ZB.name}`,
                onClick: () => {
                  zB(ZB.name)
                },
                children: (0, nB.jsx)(qB.d, {
                  name: "user-plus"
                })
              })
            })
          }, `suggestion:${ZB.name}`)
        }))
      })
    }
    var nI = ZB(36763),
      hI = ZB(36768),
      zI = ZB(1281),
      FI = ZB(1559),
      NI = ZB(4508),
      gI = ZB(282),
      qI = ZB(4785);
    const yI = ["auto", "auto_existing"];

    function UI(BB) {
      return yI.includes(BB)
    }

    function WI(BB, IB) {
      const ZB = (0, zI.ib)(BB);
      return null !== IB && (0, zI.ib)(IB) === ZB || (0, qI.e)().some((BB => (0, zI.ib)(BB.name) === ZB))
    }
    const dI = new Set;

    function CI(BB) {
      return `worldSocialSeen:${BB}`
    }

    function QI(BB) {
      return !BB || dI.has(BB) || !0 === jB.m.getItem(CI(BB))
    }

    function sI(BB) {
      BB && !dI.has(BB) && (dI.add(BB), jB.m.setItem(CI(BB), !0))
    }
    var wI = ZB(2536),
      OI = ZB(2540);

    function YI(BB) {
      let {
        show: IB,
        onClose: ZB,
        opener: TB
      } = BB;
      const {
        lobbyName: oB,
        shownLobbyName: vB
      } = (0, YB.j)("connectedGame");
      return (0, JB.useEffect)((() => {
        IB && (0, ZI.reportAnalyticsClick)({
          id: "world_social.open",
          value: TB
        })
      }), [IB]), (0, nB.jsx)(GB.c, {
        show: IB && null !== oB,
        close: ZB,
        togglePointerLock: !1,
        className: "WorldSocialBackgroundScreen",
        globallyUniqueKey: "WorldSocialPopup",
        doGameplayStartStopOnShow: !0,
        ignorePressesAsShown: "icon" !== TB,
        children: IB && null !== oB && (0, nB.jsx)(iI, {
          lobbyName: oB,
          worldCode: null !== vB && void 0 !== vB ? vB : oB,
          onClose: ZB
        }, oB)
      })
    }

    function iI(BB) {
      var IB;
      let {
        lobbyName: ZB,
        worldCode: TB,
        onClose: oB
      } = BB;
      const {
        t: GB
      } = (0, EB.G)(), vB = (0, JB.useRef)(null), {
        settings: kB,
        loading: cB,
        answered: hB,
        change: zB,
        retry: NB
      } = (0, TI.g)(ZB), gB = (0, DB.j)(), yB = (0, YB.j)("players"), UB = (0, YB.j)("hiddenPlayerNames"), [WB, dB] = (0, JB.useState)([]), [CB, sB] = (0, JB.useState)([]), [wB, OB] = (0, JB.useState)(!1), pB = (0, wI.e)(), aB = (0, JB.useMemo)((() => {
        var BB, IB;
        const ZB = null === yB.localId ? null : null !== (BB = null === (IB = yB.byId[yB.localId]) || void 0 === IB ? void 0 : IB.name) && void 0 !== BB ? BB : null;
        return yB.ids.flatMap((BB => {
          const IB = yB.byId[BB];
          return null !== IB && void 0 !== IB && IB.name && IB.name !== ZB ? [{
            name: IB.name,
            cosmetics: IB.cosmetics,
            ranks: IB.ranks
          }] : []
        }))
      }), [yB]), HB = (0, JB.useMemo)((() => (0, JI.i)(gB.friends, ZB, aB.map((BB => BB.name)))), [gB.friends, ZB, aB]), jB = MB.featureFlags.canSeeRealPlayerNames ? aB.filter((BB => null === (0, II.b)(BB.name, UB))) : [], PB = null !== kB && void 0 !== kB && kB.canManage ? kB : null, RB = null !== PB, rB = null !== (IB = null === kB || void 0 === kB ? void 0 : kB.visibility) && void 0 !== IB ? IB : null, mB = "whitelist" === (null === PB || void 0 === PB ? void 0 : PB.visibility), XB = "private" === rB || "whitelist" === rB && !RB, {
        userContext: LB
      } = (0, QB.d)();
      (0, JB.useEffect)((() => {
        RB && WI(ZB, LB.getPersonalWorldLobbyName()) && sI(LB.whamm)
      }), [RB, ZB, LB]);
      const eB = XB ? GB("whitelist" === rB ? "socialBar:inviteWorldManagersOnly" : RB ? "worldSocial:privateLinkRow" : "socialBar:inviteWorldPrivate") : null,
        fB = null === eB;
      (0, JB.useEffect)((() => XB ? void 0 : SB.f.quietFriendAdded()), [XB]), (0, JB.useEffect)((() => SB.f.quietFriendRequests()), []);
      const kI = (0, JB.useRef)(!1);
      (0, JB.useEffect)((() => {
        const BB = vB.current,
          IB = !kI.current;
        kI.current = !0;
        const ZB = null === document.activeElement || document.activeElement === document.body;
        null !== BB && void 0 !== BB && BB.contains(document.activeElement) || !IB && !ZB || (0, uB.i)() || null === BB || void 0 === BB || BB.focus({
          preventScroll: !0
        })
      }), [fB]), (0, JB.useEffect)((() => {
        const BB = BB => {
          "Escape" !== BB.key || null !== document.activeElement && document.activeElement !== document.body || oB()
        };
        return document.addEventListener("keydown", BB), () => {
          document.removeEventListener("keydown", BB)
        }
      }), [oB]);
      const zI = null === kB && !hB,
        FI = (cB || gB.loading) && 0 === gB.friends.length,
        NI = gB.friends.flatMap((BB => BB.name ? [BB.name] : [])),
        gI = WB.filter((BB => !(0, JI.m)(NI, BB))),
        qI = HB.length + 3,
        yI = gI.length + qI,
        UI = wB ? gB.requests : gB.requests.slice(0, 1),
        dI = async function(BB) {
          let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (const ZB of (0, JI.n)(BB, lB.A)) {
            if (!await zB({
                whitelistAdd: ZB
              }, (BB => (0, JI.s)(BB, ZB, !0)), {
                quiet: IB
              })) return !1
          }
          return !0
        }, CI = BB => {
          if (mB && PB) return {
            on: (0, JI.m)(PB.whitelist, BB),
            onChange: IB => {
              (0, ZI.reportAnalyticsClick)({
                id: "world_social.whitelist_toggle",
                value: IB ? "on" : "off"
              }), zB(IB ? {
                whitelistAdd: [BB]
              } : {
                whitelistRemove: BB
              }, (ZB => (0, JI.s)(ZB, [BB], IB)))
            }
          }
        }, QI = async (BB, IB) => {
          (0, ZI.reportAnalyticsClick)({
            id: "world_social.add_friend",
            value: IB
          });
          const ZB = await (0, VB.e)(BB, "world_social");
          return (0, VB.b)(ZB, BB, {
            announceSent: !1
          }), "failed" !== ZB.kind && ("sent" === ZB.kind && dB((IB => (0, JI.m)(IB, BB) ? IB : [...IB, BB])), mB && await dI([BB]), !0)
        };
      return (0, nB.jsxs)("div", {
        ref: vB,
        className: "WorldSocialPopup AnimFadeInScaleUp",
        tabIndex: -1,
        onKeyDown: BB => {
          BB.target === BB.currentTarget && " " === BB.key && BB.preventDefault()
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "WorldSocialTitle",
        children: [(0, nB.jsxs)("div", {
          className: "WorldSocialHeader",
          children: [(0, nB.jsx)("h2", {
            id: "WorldSocialTitle",
            className: "WorldSocialTitle SmallTextBold",
            children: GB("worldSocial:title")
          }), (0, nB.jsx)(FB.l, {
            className: "WorldSocialClose",
            onClick: oB
          })]
        }), zI && (0, nB.jsx)("div", {
          className: "WorldSocialLoading",
          children: (0, nB.jsx)(iB.d, {})
        }), !zI && (0, nB.jsxs)(nB.Fragment, {
          children: [(0, nB.jsx)(oI.c, {
            worldCode: TB,
            message: eB
          }), null === kB && !cB && (0, nB.jsx)("button", {
            type: "button",
            className: "WorldSocialLoadFailed",
            onClick: NB,
            children: GB("worldSocial:loadFailed")
          }), RB && null !== rB && (0, nB.jsx)(GI.b, {
            visibility: rB,
            onPick: BB => {
              (async BB => {
                if (BB === rB) return;
                (0, ZI.reportAnalyticsClick)({
                  id: "world_social.set_mode",
                  value: BB
                });
                const IB = [...(0, hI.e)(ZB), ...CB],
                  TB = "whitelist" === BB && kB ? (0, JI.f)(HB, IB, kB.whitelist) : [];
                await zB({
                  setVisibility: BB
                }, (IB => ({
                  ...IB,
                  visibility: BB
                }))) && await dI(TB)
              })(BB)
            }
          }), gB.requests.length > 0 && (0, nB.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, nB.jsx)(xB.d, {
              label: (0, nB.jsxs)(nB.Fragment, {
                children: [(0, nB.jsx)(qB.d, {
                  name: BI.g
                }), " ", GB("socialBar:requests")]
              }),
              meta: (0, nB.jsxs)(nB.Fragment, {
                children: [gB.requests.length, gB.requests.length === tB.n && (0, nB.jsx)("span", {
                  className: "SocialSectionTitleLimit",
                  children: GB("socialBar:limitReached")
                }), !wB && gB.requests.length > 1 && (0, nB.jsx)("button", {
                  type: "button",
                  className: "WorldSocialMoreRequests",
                  onClick: () => {
                    OB(!0)
                  },
                  children: GB("worldSocial:moreRequests", {
                    count: gB.requests.length - 1
                  })
                })]
              })
            }), (0, nB.jsx)("div", {
              className: "PlayerRows",
              children: UI.map(((BB, IB) => (0, nB.jsx)(vI.f, {
                zIndex: UI.length - IB,
                player: BB,
                actions: (0, nB.jsxs)(nB.Fragment, {
                  children: [(0, nB.jsx)(bB.e, {
                    tooltipInner: (0, nB.jsx)(nB.Fragment, {
                      children: GB("general:accept")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, nB.jsx)(FB.g, {
                      className: "FriendRequestButton",
                      ariaLabel: `${GB("general:accept")} ${BB.name}`,
                      analyticsClick: {
                        id: "social.accept_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, VB.d)(BB.name, !0, {
                          source: "world_social"
                        })
                      },
                      children: (0, nB.jsx)(qB.d, {
                        name: "check"
                      })
                    })
                  }), (0, nB.jsx)(bB.e, {
                    tooltipInner: (0, nB.jsx)(nB.Fragment, {
                      children: GB("general:decline")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, nB.jsx)(FB.k, {
                      className: "FriendRequestButton",
                      ariaLabel: `${GB("general:decline")} ${BB.name}`,
                      analyticsClick: {
                        id: "social.decline_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, VB.d)(BB.name, !1, {
                          source: "world_social"
                        })
                      },
                      children: (0, nB.jsx)(qB.d, {
                        name: "xmark"
                      })
                    })
                  })]
                })
              }, `incoming:${BB.name}`)))
            })]
          }), (0, nB.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, nB.jsx)(xB.d, {
              label: (0, nB.jsxs)(nB.Fragment, {
                children: [(0, nB.jsx)(qB.d, {
                  name: BI.d
                }), " ", GB("socialBar:friends")]
              }),
              meta: gB.loaded && !XB ? gB.friends.length : void 0
            }), (0, nB.jsx)(nI.c, {
              label: GB("socialBar:sendRequest"),
              icon: "user-plus",
              placeholder: GB("worldSocial:addFriendPlaceholder"),
              onSubmit: async BB => await QI(BB, "field") ? {
                ok: !0
              } : {
                ok: !1,
                error: null
              }
            }), FI && (0, nB.jsx)("div", {
              className: "WorldSocialLoading",
              children: (0, nB.jsx)(iB.d, {})
            }), !FI && (0, nB.jsxs)(nB.Fragment, {
              children: [(0, nB.jsxs)("div", {
                className: "PlayerRows",
                children: [gI.map(((BB, IB) => (0, nB.jsx)(vI.f, {
                  zIndex: yI - IB,
                  player: (0, vI.j)(BB, null),
                  status: GB("worldSocial:requestSent"),
                  Iz: CI(BB)
                }, `request:${BB}`))), !XB && HB.map(((BB, IB) => (0, nB.jsx)(vI.b, {
                  zIndex: qI - IB,
                  row: BB,
                  Iz: CI(BB.friend.name),
                  canInvite: (0, JI.b)(kB) && "here" !== BB.place,
                  invited: CB.includes(BB.friend.name),
                  onInvite: () => {
                    (async BB => {
                      (0, ZI.reportAnalyticsClick)({
                        id: "world_social.invite",
                        value: "friend"
                      });
                      const IB = () => {
                        sB((IB => IB.filter((IB => IB !== BB))))
                      };
                      sB((IB => [...IB, BB]));
                      const TB = (0, JI.p)(kB, BB);
                      if ("none" !== TB) {
                        const ZB = dI([BB], "quiet" === TB);
                        if ("required" === TB && !await ZB) return void IB()
                      }
                      await (0, KB.l)(BB, "game", {
                        announceSent: !1,
                        source: "world_social"
                      }) ? ((0, hI.f)(ZB, BB), setTimeout(IB, AB.q)) : IB()
                    })(BB.friend.name)
                  }
                }, BB.friend.name))), gB.loaded && 0 === gB.friends.length && (0, nB.jsx)(cI, {
                  playersHere: jB,
                  exclude: WB,
                  cW: BB => QI(BB, "suggestion")
                })]
              }), mB && gB.loaded && 0 === gB.friends.length && 0 === gI.length && (0, nB.jsx)("div", {
                className: "WorldSocialEmpty",
                children: GB("worldSocial:whitelistNoFriends")
              })]
            })]
          })]
        }), pB && (0, nB.jsxs)(FB.V, {
          className: "WorldSocialManageLobby SmallTextLight",
          onClick: () => {
            (0, OI.e)({
              page: "players",
              source: "invite_popup"
            }), oB()
          },
          children: [(0, nB.jsx)(qB.d, {
            name: "users-gear"
          }), " ", GB("lobbyManageEntry:manageLobby")]
        })]
      })
    }
    var pI = ZB(2567),
      aI = ZB(2528);

    function HI(BB) {
      let {
        show: IB,
        onClose: ZB,
        option: TB
      } = BB;
      const oB = (0, YB.g)("connectedGame", (BB => (0, pI.d)(BB) ? BB.lobbyName : null));
      return function(BB) {
        const {
          gameEntrySource: IB,
          loadingOverlayVisible: ZB
        } = (0, LB.o)(["gameEntrySource", "loadingOverlayVisible"]), {
          userContext: TB
        } = (0, QB.d)(), oB = (0, YB.j)("localPlayerAlive"), GB = (0, YB.g)("players", (BB => null !== BB.localId && void 0 !== BB.byId[BB.localId])), vB = (0, aI.i)(), kB = (0, JB.useRef)(null), cB = (0, JB.useRef)(null), nB = "worldCreation" === IB, hB = TB.whamm, zB = TB.getPersonalWorldLobbyName();
        (0, JB.useEffect)((() => {
          var IB;
          null !== BB && (null === (IB = cB.current) || void 0 === IB ? void 0 : IB.lobbyName) !== BB && null !== RI(BB, nB, hB, zB) && (cB.current = (0, TI.e)(BB))
        }), [nB, BB, hB, zB]), (0, JB.useEffect)((() => {
          if (null !== BB && (!ZB && oB && GB)) return vB.whenShown((() => {
            var IB;
            const ZB = kB.current === BB ? null : RI(BB, nB, hB, zB);
            if (null === ZB) return;
            const TB = (null === (IB = cB.current) || void 0 === IB ? void 0 : IB.lobbyName) === BB ? cB.current : (0, TI.e)(BB);
            cB.current = null, kB.current = BB,
              function(BB, IB, ZB, TB) {
                const {
                  lobbyName: JB
                } = BB, oB = () => {
                  ! function(BB, IB) {
                    if (!eI()) return void IB(!0);
                    const ZB = performance.now() + XI;
                    let TB = 0;
                    const JB = () => {
                      TB = eI() ? 0 : TB + 1, TB >= 2 ? IB(!0) : !LI(BB) || performance.now() > ZB ? IB(!1) : setTimeout(JB, mI)
                    };
                    setTimeout(JB, mI)
                  }(JB, (oB => {
                    TB();
                    const GB = "auto_existing" === IB && QI(ZB);
                    oB && LI(JB) && !jI(JB) && !GB && (rI(BB) ? PI(JB) : (PI(JB), sI(ZB), function(BB) {
                      const IB = gI.d.world_social_popup_v1;
                      return (0, gI.o)("world_social_popup_v1"), (0, ZI.reportAnalyticsClick)({
                        id: "world_social.auto_open",
                        value: `${IB}:${(0,NI.b)()}:${BB}`
                      }), (0, FI.flushClientAnalyticsEvents)(), "auto_open" === IB
                    }(IB) && ((0, TI.b)(BB), NB.l.Gq("toggleMenu", `inviteLink|${IB}`), "inviteLink" !== LB.d.get("openInGameMenuName") && console.warn("World social popup: the auto-open asked for it, but it didn't open"))))
                  }))
                };
                if ("auto" === IB && !rI(BB)) return void oB();
                BB.response.then((BB => {
                  if (!("error" in BB)) return BB.settings.canManage ? void oB() : (PI(JB), void TB());
                  TB()
                }))
              }(TB, ZB, hB, (() => {
                kB.current === BB && (kB.current = null)
              }))
          }))
        }), [vB, nB, ZB, BB, oB, GB, hB, zB])
      }(oB), (0, JB.useEffect)((() => {
        IB && null !== oB && PI(oB)
      }), [IB, oB]), null !== oB ? (0, nB.jsx)(YI, {
        show: IB,
        onClose: ZB,
        opener: UI(TB) ? TB : "icon"
      }) : (0, nB.jsx)(fB.c, {
        show: IB,
        onClose: ZB
      })
    }
    const MI = new Set;

    function jI(BB) {
      return MI.has(BB) || !!jB.n.getItem(`worldSocialShown:${BB}`)
    }

    function PI(BB) {
      MI.add(BB), jB.n.setItem(`worldSocialShown:${BB}`, !0)
    }

    function RI(BB, IB, ZB, TB) {
      return jI(BB) ? null : function(BB) {
        let {
          justMade: IB,
          playerId: ZB,
          lobbyName: TB,
          personalWorld: JB
        } = BB;
        return IB ? "auto" : !QI(ZB) && WI(TB, JB) ? "auto_existing" : null
      }({
        justMade: IB,
        playerId: ZB,
        lobbyName: BB,
        personalWorld: TB
      })
    }

    function rI(BB) {
      let {
        answer: IB
      } = BB;
      return null !== IB && "settings" in IB && !IB.settings.canManage
    }
    const mI = 500,
      XI = 3e4;

    function LI(BB) {
      return "inGame" === LB.d.get("gameState") && cB.gameBridge.latest("connectedGame").lobbyName === BB
    }

    function eI() {
      return (0, uB.i)() || LB.d.get("loadingOverlayVisible") || (0, eB.n)()
    }
    var uI = ZB(36771),
      fI = ZB(3324),
      lI = ZB(2066),
      AI = ZB(3316);

    function tI(BB, IB, ZB) {
      return AI.e.overridesTexture(BB) ? AI.e.getTexture(BB, IB).url : ZB
    }
    var bI = ZB(10029);
    const xI = (BB, IB) => {
        (0, JB.useEffect)((() => {
          setTimeout((() => {
            BB && BB.current && BB.current.focus()
          }), 1)
        }), [IB])
      },
      EI = (0, JB.memo)((function(BB) {
        let {
          isInputActive: IB,
          onClose: ZB,
          onChange: TB,
          textAreaRef: JB,
          fontSize: oB,
          lineHeight: GB,
          currText: vB
        } = BB;
        return (0, nB.jsxs)("div", {
          className: "WriteOnBoardWrapper",
          children: [(0, nB.jsx)("img", {
            src: tI("board_full", fI.m.BLOCK, bI),
            alt: "Board",
            className: "WriteOnBoardImg"
          }), (0, nB.jsx)("textarea", {
            className: "WriteOnBoardTextArea",
            value: vB,
            ref: JB,
            style: {
              fontSize: `${oB}rem`,
              lineHeight: `${GB}rem`
            },
            onKeyDown: BB => {
              var IB;
              "Escape" !== BB.key && (BB.stopPropagation(), "Tab" === BB.key && function(BB) {
                BB.preventDefault();
                const IB = BB.target,
                  {
                    value: ZB
                  } = IB;
                let TB = IB.selectionStart,
                  JB = IB.selectionEnd,
                  oB = ZB.slice(TB, JB);
                if (!oB.includes("\n") && !BB.shiftKey) return void document.execCommand("insertText", !1, "\t");
                for (; TB > 0 && "\n" !== ZB[TB - 1];) TB--;
                const GB = "\n" === ZB[JB - 1];
                GB && JB--;
                oB = ZB.slice(TB, JB);
                const vB = oB.split("\n").map((IB => BB.shiftKey ? IB.replace(/^\t/, "") : "\t" + IB)).join("\n");
                if (BB.shiftKey && ZB.slice(TB, JB) === vB) return;
                let {
                  selectionStart: kB
                } = IB;
                IB.setSelectionRange(TB, JB), kB > TB && (!BB.shiftKey || "\t" === oB[0]) && (kB += BB.shiftKey ? -1 : 1);
                JB = TB + vB.length + (GB ? 1 : 0), document.execCommand("insertText", !1, vB), IB.setSelectionRange(kB, JB)
              }(BB), /^F\d+$/i.test(BB.code) && null !== (IB = lI.u.OpenCodeEditor) && void 0 !== IB && IB.includes(BB.code) && ZB())
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: TB
          })]
        })
      }));

    function DI(BB) {
      return 1.3 * BB
    }
    var KI = ZB(1752);
    const VI = (0, JB.memo)((function(BB) {
        let {
          show: IB,
          onOpen: ZB,
          onClose: TB
        } = BB;
        const [oB, vB] = (0, JB.useState)(null), [kB, hB] = (0, JB.useState)(""), [zB, NB] = (0, JB.useState)(0), [gB, qB] = (0, JB.useState)(null), [yB, UB] = (0, JB.useState)({
          text: "",
          textSize: 0
        }), WB = (BB, IB) => gB ? (0, uI.o)(BB, IB, gB.width, gB.height) : (0, uI.g)(BB, IB), dB = BB => {
          hB(WB(kB, BB)), NB(BB), jB.m.setItem("lastBoardTextSize", BB)
        }, CB = () => {
          TB(), gB && kB === yB.text && zB === yB.textSize || cB.gameBridge.send("writeOnBoard", {
            pos: oB,
            text: kB,
            textSize: zB
          })
        };
        (0, YB.c)("boardEditRequested", (BB => {
          var JB, oB;
          if (!MB.featureFlags.canSeePlayerWrittenText) return;
          if (null === BB) return vB(null), void(IB && TB());
          const {
            pos: GB,
            noticeboardSpan: kB,
            text: cB
          } = BB;
          vB(GB), qB(kB), hB(cB);
          const nB = null !== (JB = null !== (oB = BB.textSize) && void 0 !== oB ? oB : jB.m.getItem("lastBoardTextSize")) && void 0 !== JB ? JB : 0;
          NB(nB), UB({
            text: cB,
            textSize: nB
          }), jB.m.setItem("lastBoardTextSize", nB), ZB()
        }));
        const QB = (0, JB.useRef)(null);
        xI(QB, IB), (0, KI.s)(QB, {
          kind: "sign",
          submit: CB
        });
        const sB = function(BB, IB) {
            const ZB = uI.d[BB];
            if (!IB) return ZB.uiFontSize;
            const {
              numLines: TB,
              charsPerLine: JB
            } = (0, uI.y)(IB.width, IB.height, BB);
            return ZB.uiFontSize * Math.min(ZB.charsPerLine / JB, ZB.numLines / TB)
          }(zB, gB),
          wB = DI(sB);
        return (0, nB.jsxs)(GB.c, {
          className: "WriteOnBoardBg",
          close: CB,
          escDoesExit: !0,
          show: IB,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, nB.jsx)(EI, {
            isInputActive: () => IB,
            onClose: CB,
            onChange: BB => {
              hB(WB(BB.target.value, zB))
            },
            textAreaRef: QB,
            fontSize: sB,
            lineHeight: wB,
            currText: kB
          }), (0, nB.jsx)("div", {
            className: "WriteOnBoardTextSizeHeader SmallTextBold",
            children: "Text Size"
          }), (0, nB.jsxs)("div", {
            className: "WriteOnBoardTextSizeButtons",
            children: [(0, nB.jsx)(FB.g, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                dB(0)
              },
              disabled: 0 === zB,
              children: "Small"
            }), (0, nB.jsx)(FB.g, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                dB(1)
              },
              disabled: 1 === zB,
              children: "Medium"
            }), (0, nB.jsx)(FB.g, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                dB(2)
              },
              disabled: 2 === zB,
              children: "Large"
            })]
          })]
        })
      })),
      SI = (0, JB.memo)((function(BB) {
        let {
          show: IB,
          onOpen: ZB,
          onClose: TB
        } = BB;
        const [oB, vB] = (0, JB.useState)(""), kB = () => {
          TB(), cB.gameBridge.send("writeNameTag", oB)
        };
        (0, wB.d)("EditNameTag", (BB => {
          MB.featureFlags.canSeePlayerWrittenText && null !== BB && (vB(BB), ZB())
        }));
        const hB = (0, JB.useRef)(null);
        xI(hB, IB), (0, KI.s)(hB, {
          kind: "nameTag",
          submit: kB
        });
        const zB = uI.G.nameTag.uiFontSize,
          NB = DI(zB);
        return (0, nB.jsxs)(GB.c, {
          className: "WriteOnBoardBg",
          close: kB,
          escDoesExit: !0,
          show: IB,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, nB.jsx)("div", {
            className: "NameTagTrim",
            children: (0, nB.jsx)(EI, {
              isInputActive: () => IB,
              onClose: kB,
              onChange: BB => {
                const IB = BB.target.value.replaceAll("\n", "");
                vB((0, uI.q)(IB, "nameTag"))
              },
              textAreaRef: hB,
              fontSize: zB,
              lineHeight: NB,
              currText: oB
            })
          }), (0, nB.jsx)(FB.g, {
            onClick: kB,
            className: "WriteOnNameTagCloseButton",
            children: "Finish"
          })]
        })
      }));
    var BZ = ZB(18067);
    const IZ = (0, JB.memo)((function(BB) {
      let {
        show: IB,
        onOpen: ZB,
        onClose: TB
      } = BB;
      const [oB, vB] = (0, JB.useState)(""), [kB, hB] = (0, JB.useState)(0), [zB, NB] = (0, JB.useState)(!1), [gB, qB] = (0, JB.useState)(["", "", "", "", "", "", "", "", "", ""]), [yB, UB] = (0, JB.useState)("Title"), [WB, dB] = (0, JB.useState)(!0), [CB, QB] = (0, JB.useState)(!1);
      (0, wB.d)("EditBook", (BB => {
        let {
          pages: IB,
          title: TB,
          isPublished: JB
        } = BB;
        var oB;
        MB.featureFlags.canSeePlayerWrittenText && (null !== IB ? (qB(IB), vB(null !== (oB = IB[0]) && void 0 !== oB ? oB : ""), UB(TB), hB(0), NB(!1), dB(!JB), QB(!1), ZB()) : qB(["", "", "", "", "", "", "", "", "", ""]))
      }));
      const sB = (0, JB.useRef)(null),
        OB = (0, JB.useRef)(null);
      xI(sB, IB), (0, KI.s)(sB, {
        kind: "book"
      }), (0, KI.s)(OB, {
        kind: "xG"
      });
      const YB = uI.G.book.uiFontSize,
        iB = DI(YB),
        pB = () => {
          (WB || CB) && cB.gameBridge.send("writeBook", {
            pages: [...gB],
            title: yB,
            published: !WB && CB
          })
        },
        aB = BB => {
          zB && (gB[kB] = oB, NB(!1)), vB(gB[BB]), hB(BB)
        };
      return (0, nB.jsxs)(GB.c, {
        className: "WriteOnBoardBg",
        close: () => {
          TB(), gB[kB] = oB, pB()
        },
        escDoesExit: !0,
        show: IB,
        togglePointerLock: !1,
        globallyUniqueKey: "WriteOnBookComp",
        children: [(0, nB.jsxs)("div", {
          className: "WriteOnBookWrapper",
          children: [(0, nB.jsx)("textarea", {
            className: "BookTitleTextArea SmallTextLight",
            value: yB,
            ref: OB,
            style: {
              fontSize: "2.5rem",
              lineHeight: `${iB}rem`
            },
            onKeyDown: BB => {
              WB && BB.stopPropagation()
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: BB => {
              let IB = BB.target.value;
              IB = (0, uI.q)(IB, "xG"), UB(IB)
            },
            readOnly: !WB
          }), (0, nB.jsx)("img", {
            src: tI("book_page", fI.m.ITEM, BZ),
            alt: "book_page",
            className: "WriteOnBookPageImg"
          }), (0, nB.jsx)("div", {
            className: "BookTextAreaPadding",
            children: (0, nB.jsx)("textarea", {
              className: "WriteOnBookPageTextArea",
              value: oB,
              ref: sB,
              style: {
                fontSize: `${YB}rem`,
                lineHeight: `${iB}rem`
              },
              onKeyDown: BB => {
                WB && BB.stopPropagation()
              },
              spellCheck: "false",
              autoComplete: "off",
              onChange: BB => {
                const IB = BB.target.value;
                vB((0, uI.q)(IB, "book")), NB(!0)
              },
              readOnly: !WB
            })
          })]
        }), (0, nB.jsxs)("div", {
          className: "BookNavigationWrapper",
          children: [(0, nB.jsx)(FB.g, {
            disabled: 0 === kB,
            onClick: () => {
              aB(kB - 1)
            },
            className: "BookNavButton",
            children: "<"
          }), (0, nB.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, nB.jsx)(FB.g, {
            disabled: 9 === kB,
            onClick: () => {
              aB(kB + 1)
            },
            className: "BookNavButton",
            children: ">"
          }), (0, nB.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, nB.jsx)(FB.g, {
            onClick: () => {
              dB(!WB), QB(!0)
            },
            className: "BookNavButton",
            children: WB ? "Publish" : "Edit"
          })]
        })]
      })
    }));
    var ZZ = ZB(36625),
      TZ = ZB(8806),
      JZ = ZB(1454),
      oZ = ZB(1979);

    function GZ(BB) {
      let {
        show: IB,
        buttons: ZB
      } = BB;
      const {
        t: TB
      } = (0, EB.G)(), oB = (0, JB.useRef)(null);
      return (0, JB.useEffect)((() => {
        var BB, ZB;
        const TB = IB ? (0, ZZ.w)() : null;
        if (!TB || !(0, JZ.j)()) return;
        const JB = (0, ZZ.h)().findIndex((BB => BB.id === TB));
        (0, TZ.q)(null !== (BB = null === (ZB = oB.current) || void 0 === ZB ? void 0 : ZB.children[JB]) && void 0 !== BB ? BB : null)
      }), [IB]), 0 === ZB.length ? null : (0, nB.jsx)("div", {
        ref: oB,
        className: "ClientGameInventoryButtons",
        onPointerDown: BB => {
          BB.stopPropagation()
        },
        onPointerUp: BB => {
          BB.stopPropagation()
        },
        children: ZB.map((BB => {
          const IB = TB(BB.labelKey);
          return (0, nB.jsxs)(FB.p, {
            className: BB.className,
            disabled: BB.disabled,
            onClick: () => {
              (0, ZZ.q)(BB)
            },
            ariaLabel: BB.iconOnly ? IB : void 0,
            title: BB.iconOnly ? IB : void 0,
            children: [BB.icon && (0, nB.jsxs)("div", {
              className: "ClientGameInventoryButtonIcon",
              children: ["item" === BB.icon.kind && (0, nB.jsx)(oZ.e, {
                itemName: BB.icon.name,
                amount: 0
              }), "image" === BB.icon.kind && (0, nB.jsx)("img", {
                src: BB.icon.src,
                alt: "",
                draggable: !1
              }), "icon" === BB.icon.kind && (0, nB.jsx)(qB.d, {
                name: BB.icon.name
              })]
            }), !BB.iconOnly && IB]
          }, BB.id)
        }))
      })
    }
    var vZ = ZB(36780),
      kZ = ZB(2887),
      cZ = ZB(34203),
      nZ = ZB(36555),
      hZ = ZB(36553);
    let zZ = null;
    window.setShowInventoryAdsOverride = BB => {
      zZ = BB
    };
    const FZ = 24e4;
    var NZ = ZB(1986);

    function gZ(BB) {
      var IB;
      let {
        draggedInfo: {
          name: ZB,
          attributes: TB,
          amount: JB
        },
        toAddRef: oB
      } = BB;
      return (0, nB.jsx)("div", {
        className: "DraggedInvenItem",
        ref: oB,
        children: (0, nB.jsx)(oZ.e, {
          itemName: ZB,
          amount: JB,
          enchantmentTier: null === TB || void 0 === TB || null === (IB = TB.customAttributes) || void 0 === IB ? void 0 : IB.enchantmentTier,
          bar: (0, NZ.h)(TB)
        })
      })
    }

    function qZ(BB) {
      let {
        className: IB = "",
        displayInfo: ZB,
        domRef: TB
      } = BB;
      return (0, nB.jsxs)("div", {
        className: `InvenHoveredItemInfo SmallTextBold ${IB}`,
        ref: TB,
        children: [(0, nB.jsx)(sB.e, {
          text: (0, OB.ub)(ZB.name, {
            fontStyle: ZB.fontStyle
          })
        }), (0, nB.jsx)("div", {
          className: "InvenHoveredItemInfoDescription",
          children: (0, nB.jsx)(sB.e, {
            text: ZB.desc
          })
        })]
      })
    }

    function yZ(BB) {
      let {
        info: IB,
        draggedInfo: ZB
      } = BB;
      const TB = (0, JB.useRef)(null);
      return (0, JB.useLayoutEffect)((() => {
        const BB = TB.current,
          {
            left: ZB,
            top: JB
          } = function(BB, IB, ZB, TB) {
            const JB = TB.left * ZB.width / 100 + 4,
              oB = ZB.width - TB.right * ZB.width / 100 - 4 - IB.width,
              GB = TB.top * ZB.height / 100 + 4,
              vB = ZB.height - 4 - IB.height;
            return {
              left: Math.max(JB, Math.min(BB.x - IB.width / 2, oB)),
              top: Math.max(GB, Math.min(BB.y - 48 - IB.height, vB))
            }
          }({
            x: IB.initTouchX,
            y: IB.initTouchY
          }, {
            width: BB.offsetWidth,
            height: BB.offsetHeight
          }, {
            width: window.innerWidth,
            height: window.innerHeight
          }, LB.d.get("notchSize"));
        BB.style.left = `${ZB}px`, BB.style.top = `${JB}px`
      }), [IB]), (0, nB.jsxs)("div", {
        className: "LongHoldSplitInfoUI SmallTextBold",
        ref: TB,
        children: [(0, nB.jsx)("div", {
          className: "LongHoldSplitInfoUIInner",
          style: {
            width: ZB.amount / IB.maxAmount * 100 + "%"
          }
        }), (0, nB.jsxs)("div", {
          className: "LongHoldSplitInfoUIText",
          children: [ZB.amount, "/", IB.maxAmount]
        })]
      })
    }
    var UZ = ZB(1091),
      WZ = ZB.n(UZ),
      dZ = ZB(201);
    const CZ = (0, JB.memo)((function(BB) {
      let {
        show: IB,
        onOpen: ZB,
        onClose: TB
      } = BB;
      const oB = (0, JB.useRef)({
          pos: null
        }),
        [vB, kB] = (0, JB.useState)([0, 0, 0, 0]),
        {
          userContext: hB
        } = (0, QB.d)();
      (0, YB.c)("ironChestOpenRequested", (BB => {
        let {
          pos: IB,
          ownerDbId: TB,
          cachedPasskey: JB
        } = BB;
        if (oB.current.pos = IB, TB !== hB.whamm) return null !== JB ? (kB(JB), void zB(JB)) : void ZB();
        zB(vB)
      })), (0, YB.c)("localEffectUpdated", (BB => {
        "Thief" === BB && TB()
      }));
      const zB = BB => {
        const {
          pos: IB
        } = oB.current;
        cB.gameBridge.send("openIronChest", {
          pos: IB,
          Cv: BB
        })
      };
      return (0, nB.jsx)(GB.c, {
        className: "IronChestPasskeyInputScreenOuter",
        close: TB,
        escDoesExit: !0,
        show: IB,
        togglePointerLock: !1,
        globallyUniqueKey: "IronChestPasskeyInputScreen",
        children: (0, nB.jsx)("div", {
          className: "IronChestPasskeyInputScreen",
          children: (0, nB.jsx)(QZ, {
            Cv: vB,
            onPasskeyUpdated: kB,
            confirmText: "ironChest:tryUnlock",
            onConfirm: () => {
              zB(vB)
            }
          })
        })
      })
    }));

    function QZ(BB) {
      let {
        className: IB = "",
        Cv: ZB,
        onPasskeyUpdated: TB,
        confirmText: JB,
        onConfirm: oB
      } = BB;
      const {
        t: GB
      } = (0, EB.G)();
      return (0, nB.jsxs)("div", {
        className: `${IB} IronChestPasskeyInput`,
        children: [(0, nB.jsx)("div", {
          className: "SmallTextBold IronChestPasskeyInputTitle",
          children: GB("ironChest:passkeyInputTitle")
        }), (0, nB.jsx)("div", {
          className: "IronChestPasskeyInputRow",
          children: new Array(dZ.f.ironChestPasskeyLength).fill(0).map(((BB, IB) => (0, nB.jsx)(sZ, {
            digit: ZB[IB],
            onPasskeyDigitUpdated: BB => {
              const JB = [...ZB];
              JB[IB] = BB, TB(JB)
            }
          }, IB)))
        }), (0, nB.jsx)(FB.p, {
          className: "IronChestPasskeyInputConfirmButton",
          onClick: oB,
          children: GB(JB)
        })]
      })
    }

    function sZ(BB) {
      let {
        digit: IB,
        onPasskeyDigitUpdated: ZB
      } = BB;
      return (0, nB.jsx)("div", {
        className: "IronChestPasskeyDigitInputWrapper",
        children: (0, nB.jsxs)("div", {
          className: "IronChestPasskeyDigitInput",
          children: [(0, nB.jsx)(FB.p, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              ZB(OB.e.mod(IB + 1, 10))
            },
            children: (0, nB.jsx)(qB.d, {
              name: "angle-up"
            })
          }), (0, nB.jsx)("div", {
            className: "SmallTextBold IronChestPasskeyDigit",
            children: IB
          }), (0, nB.jsx)(FB.p, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              ZB(OB.e.mod(IB - 1, 10))
            },
            children: (0, nB.jsx)(qB.d, {
              name: "angle-down"
            })
          })]
        })
      })
    }
    var wZ = ZB(34197),
      OZ = ZB(36837),
      YZ = ZB(36550);

    function iZ(BB) {
      let {
        specialItemInfo: IB,
        setHovered: ZB,
        pointerDown: TB,
        pointerUp: oB,
        enchantingTablePosition: GB,
        enchantingTableBlockName: vB
      } = BB;
      const {
        t: hB
      } = (0, EB.G)(), [zB, NB] = (0, JB.useState)(null), [gB, qB] = (0, JB.useState)(null), yB = (0, kB.d)("auraPerLevel"), UB = Math.floor((0, YB.j)("aura") / yB);
      (0, JB.useEffect)((() => {
        if (!IB) return void NB(null);
        let BB = !0;
        return cB.gameBridge.query("enchantingOffer", {
          slot: IB.idx,
          name: IB.name,
          blockName: vB
        }).then((ZB => {
          var TB, JB;
          let {
            perks: oB,
            options: GB
          } = ZB;
          if (!BB) return;
          const vB = {
            isEnchantable: oB.length > 0,
            possibleEnchantments: oB,
            options: GB.map((BB => {
              let {
                level: IB,
                odds: ZB
              } = BB;
              return {
                level: IB,
                possibilities: Object.fromEntries(ZB.map(((BB, IB) => [`Tier ${IB+1}`, BB])))
              }
            })),
            isAlreadyEnchanted: oB.length > 0 && void 0 !== (null === (TB = IB.attributes) || void 0 === TB || null === (JB = TB.customAttributes) || void 0 === JB ? void 0 : JB.enchantmentTier)
          };
          NB(vB), (BB => {
            const IB = BB.options.map((BB => Object.entries(BB.possibilities).map((BB => {
              let [IB, ZB] = BB;
              return {
                str: `${IB}: ${ZB>0?ZB<.01?ZB.toPrecision(1):ZB.toFixed(2):0}%\n`,
                style: {
                  color: OB.qb[IB]
                }
              }
            }))));
            qB(IB)
          })(vB)
        })), () => {
          BB = !1
        }
      }), [IB, GB, vB]);
      const WB = [];
      for (let JB = 0; JB < OZ.e; JB++) {
        const BB = null === zB || void 0 === zB ? void 0 : zB.options[JB],
          TB = !BB || BB.level > UB;
        WB.push((0, nB.jsx)(FB.g, {
          className: "EnchantmentButton",
          onPointerEnter: BB ? BB => null === ZB || void 0 === ZB ? void 0 : ZB()(!0, {
            name: "",
            desc: gB[JB]
          }, BB) : void 0,
          onPointerLeave: BB ? () => null === ZB || void 0 === ZB ? void 0 : ZB()(!1) : void 0,
          onClick: TB ? void 0 : () => {
            cB.gameBridge.send("enchantItem", {
              slot: IB.idx,
              level: BB.level,
              tablePos: GB
            }), NB(null)
          },
          disabled: TB,
          children: BB ? (0, nB.jsxs)(nB.Fragment, {
            children: [(0, nB.jsxs)("h1", {
              className: "EnchantmentLevels",
              children: [(0, nB.jsxs)("span", {
                className: "EnchantmentLevelsCost",
                children: [hB("enchantments:cost"), ": "]
              }), " ", hB("enchantments:levels", {
                level: BB.level
              })]
            }), (0, nB.jsxs)("div", {
              className: "EnchantmentPossibilities",
              children: [(0, nB.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, nB.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: hB("enchantments:tier")
                }), Object.entries(BB.possibilities).map((BB => {
                  let [IB, ZB] = BB;
                  return 0 === ZB ? null : (0, nB.jsx)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: OB.qb[IB]
                    },
                    children: IB
                  }, IB)
                }))]
              }), (0, nB.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, nB.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: hB("enchantments:odds")
                }), Object.entries(BB.possibilities).map((BB => {
                  let [IB, ZB] = BB;
                  return 0 === ZB ? null : (0, nB.jsxs)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: OB.qb[IB]
                    },
                    children: [ZB > 0 && ZB < .1 ? "<0.1" : ZB.toFixed(0 < ZB && ZB < .95 ? 1 : 0), "%"]
                  }, IB)
                }))]
              })]
            })]
          }) : !1 === (null === zB || void 0 === zB ? void 0 : zB.isEnchantable) ? (0, nB.jsx)("h1", {
            className: "EnchantmentLevels",
            children: hB("enchantments:notEnchantable")
          }) : (0, nB.jsx)("h1", {
            className: "EnchantmentLevels",
            children: hB("enchantments:enterItem")
          })
        }, JB))
      }
      return (0, nB.jsxs)("div", {
        className: "EnchantingTable",
        children: [(0, nB.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: vB
        }), (0, nB.jsxs)("div", {
          className: "EnchantingTableBody",
          children: [(0, nB.jsxs)("div", {
            className: "EnchantingTableLeft",
            children: [(0, nB.jsx)(YZ.c, {
              idx: hZ.i,
              setHovered: BB => {
                null === ZB || void 0 === ZB || ZB(hZ.i)(BB)
              },
              pointerDown: TB,
              pointerUp: oB,
              draggedInfo: null,
              specialItemInfo: IB,
              variation: "Enchanting Table"
            }), zB && zB.possibleEnchantments.length > 0 && (0, nB.jsxs)("div", {
              className: "PossibleEnchantments",
              children: [(0, nB.jsx)("h2", {
                children: "Possible Perks:"
              }), zB.possibleEnchantments.map((BB => (0, nB.jsxs)(JB.Fragment, {
                children: [(0, nB.jsxs)("div", {
                  className: "PossibleEnchantmentName",
                  children: [(0, nB.jsx)("div", {
                    className: "PossibleEnchantmentIcon",
                    children: (0, nB.jsx)(oZ.e, {
                      itemName: `${BB} Enchantment`,
                      amount: 1
                    })
                  }), (0, nB.jsx)("div", {
                    className: "PossibleEnchantmentNameText",
                    children: BB
                  })]
                }), (0, nB.jsx)("div", {
                  className: "PossibleEnchantmentDescription",
                  children: hB((0, wZ.h)(BB).translationKey)
                })]
              }, BB)))]
            })]
          }), (0, nB.jsxs)("div", {
            className: "EnchantmentOptions",
            children: [zB && zB.isAlreadyEnchanted && (0, nB.jsx)("div", {
              className: "AlreadyEnchantedWarning",
              children: hB("enchantments:alreadyEnchanted")
            }), WB]
          })]
        })]
      })
    }
    var pZ = ZB(36843);

    function aZ(BB) {
      var IB;
      let {
        specialItemInfo: ZB,
        setSpecialItemInfo: TB,
        setHovered: oB,
        pointerDown: GB,
        pointerUp: vB
      } = BB;
      const {
        t: kB
      } = (0, EB.G)(), hB = (0, YB.g)("inventory", (BB => BB.freeSlots)), [zB, NB] = (0, JB.useState)(null);
      (0, JB.useEffect)((() => {
        if (ZB) {
          const BB = (0, pZ.b)(ZB.name, ZB.amount);
          NB({
            salvageable: !!BB,
            produces: BB
          })
        } else NB(null)
      }), [ZB, null === ZB || void 0 === ZB ? void 0 : ZB.name, null === ZB || void 0 === ZB ? void 0 : ZB.amount]);
      const gB = !!ZB && !(null === zB || void 0 === zB || !zB.salvageable) && !(null !== (IB = zB.produces) && void 0 !== IB && IB.some((BB => {
        let {
          amt: IB
        } = BB;
        return IB < 1
      })));
      return (0, nB.jsxs)("div", {
        className: "SalvagingTable",
        children: [(0, nB.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: kB("item:salvagingTable")
        }), (0, nB.jsxs)("div", {
          className: "SalvagingTableBody",
          children: [(0, nB.jsx)("div", {
            className: "SalvagingTableLeft",
            children: (0, nB.jsx)(YZ.c, {
              idx: hZ.i,
              setHovered: BB => {
                null === oB || void 0 === oB || oB(hZ.i)(BB)
              },
              pointerDown: GB,
              pointerUp: vB,
              draggedInfo: null,
              specialItemInfo: ZB,
              variation: "Salvaging Table"
            })
          }), (0, nB.jsx)("div", {
            className: "SalvagingTableRight",
            children: (0, nB.jsx)(FB.g, {
              className: "SalvageButton",
              onClick: gB ? () => {
                const {
                  idx: BB,
                  name: IB,
                  amount: JB
                } = ZB;
                cB.gameBridge.send("salvageItem", {
                  slot: BB,
                  name: IB,
                  amount: JB
                }) && (NB(null), TB(null))
              } : void 0,
              disabled: !gB,
              children: zB ? zB.salvageable ? zB.produces.some((BB => {
                let {
                  amt: IB
                } = BB;
                return IB < 1
              })) ? (0, nB.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, nB.jsx)("div", {
                  className: "SalvageText Error",
                  children: kB("salvagingTable:notEnoughResources")
                })
              }) : hB < zB.produces.length ? (0, nB.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, nB.jsx)("div", {
                  className: "SalvageText Error",
                  children: kB("salvagingTable:notEnoughInventorySpace")
                })
              }) : (0, nB.jsxs)("div", {
                className: "SalvageButtonText",
                children: [(0, nB.jsx)("div", {
                  className: "SalvageText",
                  children: kB("salvagingTable:salvage")
                }), (0, nB.jsx)("div", {
                  className: "SalvageIcons",
                  children: zB.produces.map(((BB, IB) => {
                    let {
                      item: ZB,
                      amt: TB
                    } = BB;
                    return (0, nB.jsx)("div", {
                      className: "SalvageIcon",
                      children: (0, nB.jsx)(oZ.e, {
                        itemName: ZB,
                        amount: Math.floor(TB)
                      })
                    }, IB)
                  }))
                })]
              }) : (0, nB.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, nB.jsx)("div", {
                  className: "SalvageText Error",
                  children: kB("salvagingTable:unsalvageable")
                })
              }) : (0, nB.jsx)(nB.Fragment, {})
            })
          })]
        })]
      })
    }
    var HZ = ZB(212),
      MZ = ZB(9296),
      jZ = ZB(2850),
      PZ = ZB(1746),
      RZ = ZB(8818),
      rZ = ZB(8809),
      mZ = ZB(1738),
      XZ = ZB(2079),
      LZ = ZB(1469),
      eZ = ZB(2161);

    function uZ(BB, IB, ZB) {
      const TB = BB.trim().toLowerCase();
      if ("" === TB) return 0;
      let JB = null;
      for (const oB of IB) {
        const BB = oB.toLowerCase().indexOf(TB);
        if (0 === BB) return 0;
        BB > 0 && (JB = 1)
      }
      if (null !== JB) return JB;
      for (const oB of ZB)
        if (oB.toLowerCase().includes(TB)) return 2;
      return null
    }

    function fZ(BB) {
      return BB.map((BB => {
        var IB;
        return BB ? {
          name: BB.name,
          amount: null !== (IB = BB.amount) && void 0 !== IB ? IB : 1
        } : null
      }))
    }

    function lZ(BB) {
      return BB < 1e3 ? `${BB}` : BB < 1e4 ? Math.floor(BB / 100) / 10 + "k" : `${Math.floor(BB/1e3)}k`
    }
    var AZ = ZB(36846);
    const tZ = FB.g,
      bZ = {
        initialDelayMs: 400,
        intervalMs: 100
      },
      xZ = () => {
        const BB = (0, LZ.d)();
        return BB ? BB.getPadRepeatTiming(bZ) : bZ
      };

    function EZ(BB, IB, ZB) {
      var TB, JB;
      const oB = (0, cZ.B)(IB, BB);
      let GB = null === (TB = IB[BB]) || void 0 === TB ? void 0 : TB.description;
      if (ZB && (null === (JB = (0, AZ.f)().get(BB)) || void 0 === JB || !JB.hideIngredients)) {
        GB ? (GB = (0, OB.ub)(GB), GB.push({
          str: "\n"
        })) : GB = [], GB.push({
          str: "\n"
        }), GB.push({
          str: "Can be crafted from:\n"
        });
        for (const BB of ZB) "string" === typeof BB && (GB.push({
          icon: BB,
          style: {
            fontSize: "1.5em"
          }
        }), GB.push({
          str: " "
        }), GB.push(...(0, OB.ub)((0, cZ.B)(IB, BB))), GB.push({
          str: "\n"
        }))
      }
      return {
        name: oB,
        desc: GB
      }
    }

    function DZ(BB) {
      let {
        name: IB,
        pn: ZB
      } = BB;
      return `${IB}_${ZB}`
    }

    function KZ(BB) {
      var IB;
      let {
        onClick: ZB,
        itemName: TB,
        recipeId: oB,
        isSelected: GB,
        haveIngredients: vB,
        craftable: kB,
        setHovered: cB,
        padActions: hB,
        marked: zB,
        lock: FB,
        itemInfo: NB
      } = BB;
      const gB = (0, JB.useRef)(null);
      return (0, RZ.f)(gB, {
        press: BB => !vB || "secondary" === BB && !kB ? (hB.refuse(), !1) : "primary" === BB ? (hB.choose(), !0) : hB.craft(),
        release: hB.stopCraft,
        hints: {
          primary: "inventoryChooseRecipe",
          secondary: "inventoryCraft"
        }
      }), (0, nB.jsxs)("div", {
        ref: gB,
        className: WZ()("InvenItem", {
          CraftableItemNotEnoughIngredients: !vB && !FB,
          CraftableItemMarked: zB,
          CraftableItemLocked: void 0 !== FB,
          CraftableItemLockedFar: (null !== (IB = null === FB || void 0 === FB ? void 0 : FB.stepsAway) && void 0 !== IB ? IB : 1) > 1
        }),
        "data-recipe-key": oB,
        "data-pad-inventory-default": GB ? "" : void 0,
        onClick: ZB,
        style: {
          cursor: GB ? null : "pointer"
        },
        onPointerEnter: BB => {
          null === cB || void 0 === cB || cB(!0, EZ(TB, NB)), !GB && (0, mZ.t)(BB.nativeEvent) && (0, rZ.k)() && ZB()
        },
        onPointerLeave: () => {
          null === cB || void 0 === cB || cB(!1)
        },
        children: [(0, nB.jsx)(oZ.e, {
          itemName: TB,
          amount: 1
        }), zB && (0, nB.jsx)("span", {
          className: "CraftableItemMarkBadge",
          "aria-hidden": "true",
          children: "!"
        }), FB && (0, nB.jsxs)("span", {
          className: "CraftableItemLockTag",
          children: [(0, nB.jsx)(qB.d, {
            name: "lock"
          }), (0, nB.jsx)(sB.e, {
            text: FB.tag
          })]
        })]
      })
    }

    function VZ(BB) {
      let {
        idx: IB,
        status: ZB,
        shownItem: TB,
        dim: oB,
        onHoverStart: GB,
        onHoverEnd: vB,
        onPadBack: kB
      } = BB;
      const cB = (0, JB.useRef)(null);
      (0, RZ.f)(cB, {
        press: () => !1,
        back: kB,
        hints: {
          back: "inventoryBackToRecipes"
        }
      });
      const hB = ZB.need > 0 ? Math.min(ZB.have / ZB.need, 1) : 1;
      return (0, nB.jsxs)("div", {
        ref: cB,
        className: WZ()("CupTile", {
          Short: ZB.missing > 0
        }),
        style: {
          width: oB,
          height: oB
        },
        "data-craft-ingredient": IB,
        onPointerEnter: GB,
        onPointerLeave: vB,
        children: [(0, nB.jsx)("div", {
          className: "CupFill",
          style: {
            transform: `scaleY(${hB})`
          }
        }), (0, nB.jsx)(oZ.e, {
          itemName: TB,
          amount: 0
        }), (0, nB.jsxs)("div", {
          className: "CupCount SmallTextBold",
          children: [lZ(ZB.have), "/", lZ(ZB.need)]
        })]
      })
    }

    function SZ(BB) {
      var IB, ZB, TB, oB, GB;
      let {
        show: vB,
        recipeItem: {
          name: kB,
          pn: hB,
          requires: zB,
          produces: FB,
          haveIngredients: NB
        },
        detail: gB,
        onCraft: qB,
        setHovered: yB,
        craftButtonRef: UB,
        onPadBack: WB,
        showPadShortcut: dB,
        refusedCount: CB,
        lock: QB,
        itemInfo: wB
      } = BB;
      const {
        t: OB
      } = (0, EB.G)(), YB = null !== gB && !gB.roomForOne, iB = null !== (IB = null === gB || void 0 === gB ? void 0 : gB.craftAllTimes) && void 0 !== IB ? IB : 0, pB = function(BB, IB) {
        return BB.map((BB => {
          let {
            items: ZB,
            amt: TB
          } = BB, JB = 0;
          const oB = [];
          for (const GB of ZB) {
            const BB = IB(GB);
            JB += BB, BB > 0 && oB.push(GB)
          }
          return 0 === oB.length && oB.push(ZB[0]), {
            shownItems: oB,
            need: TB,
            have: JB,
            missing: Math.max(TB - JB, 0)
          }
        }))
      }(zB, (BB => {
        var IB;
        return null !== (IB = null === gB || void 0 === gB ? void 0 : gB.amounts[BB]) && void 0 !== IB ? IB : 0
      }));
      let aB = "4rem",
        HB = 4;
      3 === zB.length || 4 === zB.length ? aB = "3.75rem" : zB.length >= 5 && (aB = "3rem"), 4 === zB.length ? HB = 2 : zB.length <= 6 && (HB = 3);
      const MB = `calc(${HB} * ${aB} + ${HB-1} * 0.4rem + 1px)`,
        jB = (0, JB.useRef)(null),
        PB = (0, JB.useRef)(null);
      (0, JB.useLayoutEffect)((() => {
        jB.current.scrollTop = 0
      }), [kB, hB]);
      const RB = (0, JB.useRef)(CB);
      (0, JB.useEffect)((() => {
        if (CB === RB.current) return;
        RB.current = CB;
        const BB = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? [{
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
        for (const TB of null !== (IB = null === (ZB = jB.current) || void 0 === ZB ? void 0 : ZB.querySelectorAll(".CupTile.Short, .CantCraftInfo")) && void 0 !== IB ? IB : []) {
          var IB, ZB;
          TB.animate(BB, {
            duration: 280,
            easing: "ease-out"
          })
        }
      }), [CB]);
      const rB = (BB, IB, ZB) => {
          var TB;
          if ((0, AZ.f)().has(kB)) return void(ZB && clearInterval(mB.current));
          const JB = null !== (TB = null === gB || void 0 === gB ? void 0 : gB.resultStackable) && void 0 !== TB && TB,
            oB = fZ(cB.gameBridge.latest("inventory").player),
            {
              Hn: GB,
              Dv: vB,
              amountAddedToSlot: nB
            } = cB.gameBridge.send("craftRecipe", {
              name: kB,
              pn: hB,
              times: IB || BB && JB ? null : 1
            });
          if (GB > 0) {
            const IB = [],
              TB = new Set(zB.flatMap((BB => {
                let {
                  items: IB
                } = BB;
                return IB
              }))),
              GB = function(BB, IB, ZB) {
                const TB = [];
                for (let JB = 0; JB < BB.length; JB++) {
                  const oB = BB[JB];
                  if (!oB || !ZB.has(oB.name)) continue;
                  const GB = IB[JB],
                    vB = (null === GB || void 0 === GB ? void 0 : GB.name) === oB.name ? GB.amount : 0;
                  vB < oB.amount && TB.push({
                    idx: JB,
                    itemName: oB.name,
                    amount: oB.amount - vB
                  })
                }
                return TB
              }(oB, fZ(cB.gameBridge.latest("inventory").player), TB).slice(0, 12),
              hB = ZB ? 0 : Math.min(50, 400 / GB.length),
              NB = ZB ? 220 : 320;
            for (const BB of GB) {
              var FB;
              const ZB = zB.findIndex((IB => {
                  let {
                    items: ZB
                  } = IB;
                  return ZB.includes(BB.itemName)
                })),
                TB = null === (FB = jB.current) || void 0 === FB ? void 0 : FB.querySelector(`[data-craft-ingredient="${ZB}"]`),
                JB = (0, cZ.h)(BB.idx);
              TB && JB && IB.push({
                kind: "ingredient",
                itemName: BB.itemName,
                amount: BB.amount,
                Dv: BB.idx,
                from: JB,
                to: (0, cZ.h)(TB),
                delayMs: Math.round(IB.length * hB),
                durationMs: NB
              })
            }
            let gB;
            if (null !== vB && nB > 0 && PB.current) {
              const BB = IB.length > 0 ? IB[IB.length - 1].delayMs + .6 * NB : 0;
              gB = {
                itemName: kB,
                amount: nB,
                Dv: vB,
                from: (0, cZ.h)(PB.current),
                delayMs: Math.round(BB)
              }
            }
            qB(gB, BB && !JB ? vB : null, IB), vZ.d.play("wood1", .5).rate(1.75)
          }
        },
        mB = (0, JB.useRef)(null);
      (0, JB.useEffect)((() => () => {
        clearInterval(mB.current)
      }), []);
      const XB = (BB, IB) => {
          rB(BB, !1, !1), clearInterval(mB.current), IB && (mB.current = setTimeout((() => {
            mB.current = setInterval((() => {
              rB(BB, !1, !0)
            }), IB.intervalMs)
          }), IB.initialDelayMs))
        },
        LB = () => {
          clearInterval(mB.current)
        },
        eB = !NB || YB || Boolean(QB),
        uB = (0, JB.useRef)(null),
        fB = null !== (ZB = null === (TB = (0, eZ.c)()) || void 0 === TB ? void 0 : TB.hideButtonHints) && void 0 !== ZB && ZB,
        lB = null !== (oB = null === (GB = (0, LZ.d)()) || void 0 === GB ? void 0 : GB.getBoundButton("inventorySecondary")) && void 0 !== oB ? oB : null,
        AB = () => !eB && (rB(!1, !0, !1), !0);
      (0, RZ.f)(UB, {
        press: BB => "secondary" === BB ? AB() : !eB && (XB(!1, xZ()), !0),
        release: LB,
        back: WB,
        hints: {
          primary: "inventoryCraft",
          secondary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      }), (0, RZ.f)(uB, {
        press: AB,
        back: WB,
        hints: {
          primary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      });
      const [tB, bB] = (0, JB.useState)(0), [xB, DB] = (0, JB.useState)(null);
      (0, JB.useEffect)((() => {
        if (!0 === vB) {
          bB(0);
          const BB = setInterval((() => {
            bB((BB => BB + 1))
          }), 1e3);
          return () => {
            clearInterval(BB)
          }
        }
        return () => {}
      }), [vB]);
      const KB = null === gB || void 0 === gB ? void 0 : gB.ingredientsCraftedFrom,
        VB = (0, JB.useRef)(yB);
      (0, JB.useEffect)((() => {
        VB.current = yB
      }), [yB]);
      const SB = !(null === QB || void 0 === QB || !QB.hideIngredients);
      (0, JB.useEffect)((() => {
        var BB, IB;
        if (!xB) return;
        if (SB) return DB(null), void(null === (IB = VB.current) || void 0 === IB || IB.call(VB, !1));
        const ZB = xB[tB % xB.length];
        null === (BB = VB.current) || void 0 === BB || BB.call(VB, !0, EZ(ZB, wB, null === KB || void 0 === KB ? void 0 : KB[ZB]))
      }), [xB, tB, wB, KB, SB]);
      const BI = !!QB,
        II = (0, JB.useRef)(!1);
      (0, JB.useEffect)((() => {
        var BB;
        BI && (clearInterval(mB.current), SB && II.current && (II.current = !1, null === (BB = VB.current) || void 0 === BB || BB.call(VB, !1)))
      }), [BI, SB]);
      const ZI = (0, cZ.B)(wB, kB);
      return (0, nB.jsxs)("div", {
        ref: jB,
        className: "CraftableInfo SmallTextBold",
        children: [(0, nB.jsx)("div", {
          className: "CraftableHeader",
          children: (0, nB.jsx)(sB.e, {
            text: ZI
          })
        }), !SB && (0, nB.jsx)("div", {
          className: WZ()("CraftableIngredients", {
            Compact: zB.length >= 5
          }),
          style: {
            maxWidth: MB
          },
          children: pB.map(((BB, IB) => {
            const ZB = BB.shownItems[tB % BB.shownItems.length];
            return (0, nB.jsx)(VZ, {
              idx: IB,
              status: BB,
              shownItem: ZB,
              dim: aB,
              onHoverStart: () => {
                DB(BB.shownItems)
              },
              onHoverEnd: () => {
                DB(null), null === yB || void 0 === yB || yB(!1)
              },
              onPadBack: WB
            }, IB)
          }))
        }), QB && (0, nB.jsx)("div", {
          className: "CantCraftInfo CraftableLockReason",
          children: (0, nB.jsx)(sB.e, {
            text: QB.reason
          })
        }), !QB && (!NB || YB) && (0, nB.jsxs)("div", {
          className: "CantCraftInfo",
          children: [!NB && "Missing ingredients", (0, nB.jsx)("br", {}), YB && "Inventory is full"]
        }), !SB && (0, nB.jsxs)(nB.Fragment, {
          children: [(0, nB.jsxs)(tZ, {
            ref: UB,
            className: "DoCraftButton",
            onPointerDown: BB => {
              XB((0, cZ.C)(BB), (0, mZ.t)(BB.nativeEvent) ? xZ() : bZ)
            },
            onPointerUp: LB,
            onPointerLeave: LB,
            disabled: eB,
            children: [dB && lB && !eB && !fB && (0, nB.jsx)(XZ.b, {
              className: "CraftShortcutGlyph",
              glyph: lB
            }), (0, nB.jsx)("div", {
              ref: PB,
              className: "DoCraftItem",
              onPointerEnter: () => {
                II.current = !0, null === yB || void 0 === yB || yB(!0, EZ(kB, wB))
              },
              onPointerLeave: () => {
                II.current = !1, null === yB || void 0 === yB || yB(!1)
              },
              children: (0, nB.jsx)(oZ.e, {
                itemName: kB,
                amount: FB
              })
            })]
          }), (0, nB.jsxs)(tZ, {
            ref: uB,
            className: "DoCraftAllButton",
            onPointerDown: BB => {
              rB((0, cZ.C)(BB), !0, !1)
            },
            disabled: eB,
            children: [(0, nB.jsx)("span", {
              className: "CraftAllLabel",
              children: OB("general:craftAll")
            }), iB > 0 && (0, nB.jsxs)("span", {
              className: "CraftAllCount",
              children: ["x", lZ(iB)]
            })]
          })]
        })]
      })
    }

    function BT(BB) {
      let {
        selectedIdx: IB,
        hidden: ZB
      } = BB;
      const TB = (0, JZ.x)(),
        oB = (0, JB.useRef)(null);
      return (0, JB.useLayoutEffect)((() => {
        const BB = oB.current,
          TB = null === BB || void 0 === BB ? void 0 : BB.parentElement;
        if (!TB || !BB) return;
        const JB = TB.querySelector(".CraftableItems"),
          GB = () => {
            var oB, GB;
            if (ZB) return void(BB.style.opacity = "0");
            const vB = null === JB || void 0 === JB ? void 0 : JB.children[IB],
              kB = null === (oB = null !== (GB = null === vB || void 0 === vB ? void 0 : vB.querySelector(".InvenItem")) && void 0 !== GB ? GB : vB) || void 0 === oB ? void 0 : oB.getBoundingClientRect();
            if (!kB || 0 === kB.width) return void(BB.style.opacity = "0");
            const cB = TB.getBoundingClientRect();
            BB.style.opacity = "1", BB.style.width = `${kB.width}px`, BB.style.height = `${kB.height}px`, BB.style.transform = `translate(${kB.left-cB.left+TB.scrollLeft}px, ${kB.top-cB.top+TB.scrollTop}px)`
          };
        GB();
        const vB = new MutationObserver(GB),
          kB = new ResizeObserver(GB);
        return kB.observe(TB), JB && (vB.observe(JB, {
          childList: !0,
          subtree: !0
        }), kB.observe(JB)), () => {
          vB.disconnect(), kB.disconnect()
        }
      }), [IB, ZB]), (0, nB.jsx)("div", {
        ref: oB,
        className: WZ()("SelectionReticle", {
          Secondary: TB
        })
      })
    }

    function IT(BB, IB, ZB) {
      return BB ? (0, HZ.e)(MZ.f, BB) ? ZT(BB, IB, ZB) : BB : ZB("classicGame:handCrafting")
    }

    function ZT(BB, IB, ZB) {
      var TB;
      const JB = null === (TB = IB[BB]) || void 0 === TB ? void 0 : TB.displayName;
      if ("string" === typeof JB) return ZB(JB);
      const oB = cB.gameBridge.latest("hiddenPlayerNames");
      return Array.isArray(JB) ? JB.map((BB => {
        if ("string" === typeof BB) return BB;
        if ("translationKey" in BB) return ZB(BB.translationKey, (0, EB.s)(BB.params, oB));
        if ("str" in BB) {
          if ("string" === typeof BB.str) return BB.str;
          if ("translationKey" in BB.str) return ZB(BB.str.translationKey, (0, EB.s)(BB.str.params, oB))
        }
        return ""
      })).join("") : JB && "translationKey" in JB ? ZB(JB.translationKey, (0, EB.s)(JB.params, oB)) : BB
    }

    function TT(BB, IB) {
      return BB === IB || null !== BB && null !== IB && BB.name === IB.name && BB.pn === IB.pn
    }

    function JT(BB) {
      var IB, ZB, TB;
      let {
        show: oB,
        onCraft: GB,
        dispatchSelectedCraftable: vB,
        selectedCraftable: kB,
        craftingStation: hB,
        setHovered: zB
      } = BB;
      const {
        t: FB
      } = (0, EB.G)(), [NB, gB] = (0, JB.useState)(""), [qB, yB] = (0, JB.useState)(0);
      (0, JB.useEffect)((() => {
        oB || (gB(""), yB((BB => BB + 1)))
      }), [oB]);
      const [UB, WB] = (0, JB.useState)(hB);
      UB !== hB && (WB(hB), "" !== NB && (gB(""), yB((BB => BB + 1))));
      const dB = (0, JB.useRef)(null),
        CB = (0, JB.useRef)(null),
        QB = (0, rZ.o)(),
        sB = QB.showing && "recipe" === QB.kind,
        [wB, OB] = (0, JB.useState)(0),
        iB = null !== hB && void 0 !== hB ? hB : null,
        pB = (0, JB.useRef)(null),
        aB = BB => {
          return !((IB = pB.current) === (ZB = BB) || null !== IB && null !== ZB && IB.station === ZB.station && TT(IB.recipe, ZB.recipe)) && (pB.current = BB, cB.gameBridge.send("focusCrafting", BB), !0);
          var IB, ZB
        };
      aB(oB ? {
        station: iB,
        recipe: (null === (IB = pB.current) || void 0 === IB ? void 0 : IB.station) === iB ? pB.current.recipe : null
      } : null);
      let HB = cB.gameBridge.latest("crafting");
      const MB = (0, YB.j)("itemInfo"),
        jB = "" !== NB.trim(),
        PB = (0, AZ.A)(),
        RB = (0, AZ.x)(),
        rB = (0, AZ.D)(),
        mB = function(BB, IB) {
          const [ZB, TB] = (0, JB.useState)(!1);
          (0, JB.useEffect)((() => {
            if (!BB) return void TB(!1);
            const IB = setTimeout((() => {
              TB(!0)
            }), 0);
            return () => {
              clearTimeout(IB)
            }
          }), [BB]);
          const oB = BB && ZB,
            GB = (0, JB.useRef)({
              station: IB,
              at: new Map
            });
          return (GB.current.station !== IB || !oB && GB.current.at.size > 0) && (GB.current = {
            station: IB,
            at: new Map
          }), oB ? GB.current.at : null
        }(oB, hB);
      let XB = HB.recipes.filter((BB => {
        let {
          listed: IB
        } = BB;
        return IB
      }));
      if (jB) {
        const BB = [];
        for (const IB of HB.recipes) {
          var LB;
          const ZB = null !== (LB = RB.get(IB.name)) && void 0 !== LB && LB.hideIngredients ? [] : IB.requires.flatMap((BB => {
              let {
                items: IB
              } = BB;
              return IB.flatMap((BB => [BB, ZT(BB, MB, FB)]))
            })),
            TB = uZ(NB, [IB.name, ZT(IB.name, MB, FB)], ZB);
          null !== TB && BB.push({
            item: IB,
            rank: TB
          })
        }
        BB.sort(((BB, IB) => BB.rank - IB.rank)), XB = BB.map((BB => {
          let {
            item: IB
          } = BB;
          return IB
        }))
      } else {
        if (mB && mB.size > 0) {
          const BB = HB.recipes.filter((BB => !BB.listed && mB.has(DZ(BB))));
          XB = XB.concat(BB)
        }
        XB = (0, AZ.k)(XB, PB, RB, rB), mB && (XB = (0, AZ.i)(XB, mB, DZ))
      }
      const eB = BB => XB.find((IB => DZ(IB) === BB)),
        uB = `${hB}|${NB}`,
        [fB, lB] = (0, JB.useState)(null),
        AB = (null === fB || void 0 === fB ? void 0 : fB.context) === uB ? fB.key : null,
        tB = kB ? DZ(kB) : null,
        bB = null !== (ZB = null !== (TB = eB(tB)) && void 0 !== TB ? TB : eB(AB)) && void 0 !== ZB ? ZB : XB[0],
        xB = bB ? DZ(bB) : null,
        DB = bB ? {
          name: bB.name,
          pn: bB.pn
        } : null;
      oB && aB({
        station: iB,
        recipe: DB
      }) && (HB = cB.gameBridge.latest("crafting")), xB !== tB && xB !== AB && lB(xB ? {
        context: uB,
        key: xB
      } : null), (0, JB.useEffect)((() => () => {
        pB.current = null, cB.gameBridge.send("focusCrafting", null)
      }), []);
      const KB = TT(HB.detail, DB) ? HB.detail : null,
        VB = null !== KB && !KB.roomForOne,
        SB = XB.findIndex((BB => DZ(BB) === DZ(bB))),
        BI = () => CB.current ? (0, RZ.e)(CB.current) : null,
        II = (0, JB.useRef)(null),
        ZI = (0, JB.useRef)(0);
      ZI.current++;
      const TI = ZI.current;
      (0, JB.useEffect)((() => {
        const BB = II.current;
        if (!BB || TI <= BB.afterRender) return;
        if (II.current = null, BB.key !== xB) return;
        const IB = BI();
        var ZB;
        null !== IB && void 0 !== IB && IB.press("primary") && !BB.sv && (null === (ZB = IB.release) || void 0 === ZB || ZB.call(IB))
      }));
      const JI = BB => {
          const IB = {
            name: BB.name,
            pn: BB.pn
          };
          return {
            choose: () => {
              vB(IB), (0, TZ.q)(CB.current)
            },
            craft: () => {
              var BB, ZB;
              return vB(IB), DZ(IB) !== DZ(bB) ? (II.current = {
                key: DZ(IB),
                sv: !0,
                afterRender: ZI.current
              }, !0) : null !== (BB = null === (ZB = BI()) || void 0 === ZB ? void 0 : ZB.press("primary")) && void 0 !== BB && BB
            },
            stopCraft: () => {
              var BB, IB;
              II.current ? II.current.sv = !1 : null === (BB = BI()) || void 0 === BB || null === (IB = BB.release) || void 0 === IB || IB.call(BB)
            },
            refuse: () => {
              DZ(IB) !== DZ(bB) && vB(IB), OB((BB => BB + 1))
            }
          }
        },
        oI = () => {
          var BB, IB, ZB;
          (0, TZ.q)(null !== (BB = null === (IB = dB.current) || void 0 === IB || null === (ZB = IB.querySelector(".CraftableItems")) || void 0 === ZB ? void 0 : ZB.children[SB]) && void 0 !== BB ? BB : null)
        },
        GI = XB.map(DZ).join("|"),
        vI = (0, JB.useRef)(GI);
      return (0, JB.useEffect)((() => {
        vI.current !== GI && (vI.current = GI, sB && SB >= 0 && (0, rZ.k)() && oI())
      })), (0, nB.jsxs)("div", {
        className: "Craftables",
        children: [(0, nB.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: IT(hB, MB, FB)
        }), (0, nB.jsxs)("div", {
          className: "CraftablesBody",
          children: [(0, nB.jsx)(PZ.c, {
            className: "CraftingSearch",
            placeholderText: FB("general:searchRecipes"),
            defaultValue: NB,
            maxLength: 100,
            onValueChange: BB => {
              gB(BB)
            },
            blurOnEnter: !0
          }, qB), 0 === XB.length && jB && (0, nB.jsx)("div", {
            className: "CraftingNoMatches SmallTextBold",
            children: FB("general:noRecipesMatchSearch")
          }), XB.length > 0 && (0, nB.jsxs)(nB.Fragment, {
            children: [(0, nB.jsxs)("div", {
              ref: dB,
              className: "CraftablesLeftSide",
              children: [(0, nB.jsx)(jZ.b, {
                lazyLoadedClassName: "CraftableItems",
                observerUpdateDeps: [JSON.stringify(XB.map((BB => {
                  let {
                    name: IB,
                    pn: ZB,
                    haveIngredients: TB
                  } = BB;
                  return {
                    name: IB,
                    pn: ZB,
                    haveIngredients: TB
                  }
                })))],
                observing: oB,
                children: XB.map((BB => {
                  const {
                    name: IB,
                    pn: ZB,
                    haveIngredients: TB
                  } = BB, JB = DZ(BB);
                  return (0, nB.jsx)(KZ, {
                    recipeId: JB,
                    itemName: IB,
                    onClick: () => {
                      vB({
                        name: IB,
                        pn: ZB
                      })
                    },
                    isSelected: DZ(bB) === JB,
                    haveIngredients: TB,
                    craftable: TB && !RB.has(IB) && !(DZ(bB) === JB && VB),
                    setHovered: zB,
                    padActions: JI(BB),
                    marked: PB.has(IB),
                    lock: RB.get(IB),
                    itemInfo: MB
                  }, JB)
                }))
              }), (0, nB.jsx)(BT, {
                selectedIdx: SB,
                hidden: sB && QB.steppingSlots
              })]
            }), (0, nB.jsx)(SZ, {
              show: oB,
              recipeItem: bB,
              detail: KB,
              onCraft: GB,
              setHovered: zB,
              craftButtonRef: CB,
              onPadBack: oI,
              showPadShortcut: sB,
              refusedCount: wB,
              lock: RB.get(bB.name),
              itemInfo: MB
            })]
          })]
        })]
      })
    }
    var oT = ZB(34211),
      GT = ZB(3461),
      vT = ZB(2194),
      kT = ZB(8785);
    class cT {
      constructor(BB, IB, ZB) {
        this.commit = BB, this.delayMs = IB, this.defers = ZB, this.pending = null, this.timer = void 0, this.sv = !1, this.flush = () => {
          clearTimeout(this.timer);
          const BB = this.pending;
          null !== BB && (this.pending = null, this.commit(BB))
        }
      }
      type(BB) {
        this.pending = BB, clearTimeout(this.timer), this.sv || this.defers() ? this.sv || (this.timer = setTimeout(this.flush, this.delayMs)) : this.flush()
      }
      getTyped(BB) {
        var IB;
        return null !== (IB = this.pending) && void 0 !== IB ? IB : BB
      }
      isHeld() {
        return this.sv
      }
      setHeld(BB) {
        this.sv = BB, BB || this.flush()
      }
    }

    function nT(BB) {
      return null === BB ? "creativeInventory:all" : `creativeInventory:${BB}`
    }

    function hT(BB) {
      let {
        category: IB
      } = BB;
      return null === IB ? (0, nB.jsx)(qB.d, {
        name: "layer-group"
      }) : (0, nB.jsx)(oZ.e, {
        itemName: oT.creativeItemCategoryIcons[IB],
        amount: 0
      })
    }

    function zT(BB) {
      let {
        labelKey: IB,
        isSelected: ZB,
        onSelect: TB,
        setHovered: JB,
        children: oB
      } = BB;
      return (0, nB.jsx)("div", {
        className: WZ()("CreativeCategoryTab", {
          Selected: ZB
        }),
        onClick: TB,
        onPointerEnter: BB => {
          (0, cZ.x)(BB) || JB(!0, {
            name: {
              translationKey: IB
            },
            desc: ""
          })
        },
        onPointerLeave: () => {
          JB(!1)
        },
        children: oB
      })
    }

    function FT(BB) {
      let {
        categories: IB,
        selectedCategory: ZB,
        onSelect: TB
      } = BB;
      const {
        t: oB
      } = (0, EB.G)(), [GB, vB] = (0, JB.useState)(!1), kB = (0, JB.useRef)(null), cB = (0, JB.useCallback)((() => {
        vB(!1)
      }), []);
      return (0, vT.c)(kB, cB), (0, nB.jsxs)("div", {
        className: "CreativeCategoryDropdown",
        ref: kB,
        children: [(0, nB.jsxs)("div", {
          className: "CreativeCategoryDropdownButton",
          onClick: () => {
            vB(!GB)
          },
          children: [(0, nB.jsx)("div", {
            className: "CreativeCategoryIcon",
            children: (0, nB.jsx)(hT, {
              category: ZB
            })
          }), (0, nB.jsx)("span", {
            children: oB(nT(ZB))
          }), (0, nB.jsx)(qB.d, {
            name: GB ? "caret-up" : "caret-down"
          })]
        }), GB && (0, nB.jsx)("div", {
          className: "CreativeCategoryDropdownMenu",
          children: IB.map((BB => (0, nB.jsxs)("div", {
            className: WZ()("CreativeCategoryDropdownOption", {
              Selected: ZB === BB
            }),
            onClick: () => {
              TB(BB), vB(!1)
            },
            children: [(0, nB.jsx)("div", {
              className: "CreativeCategoryIcon",
              children: (0, nB.jsx)(hT, {
                category: BB
              })
            }), (0, nB.jsx)("span", {
              children: oB(nT(BB))
            })]
          }, null !== BB && void 0 !== BB ? BB : "all")))
        })]
      })
    }
    const NT = (0, JB.memo)((function(BB) {
      let {
        creativeScrollDiv: IB,
        playerInvenNumSlots: ZB,
        getSetHoveringForIdx: TB,
        getPointerDownForIdx: oB,
        getPointerUpForIdx: GB,
        creativeSearchVal: vB,
        setCreativeSearchVal: cB,
        creativeCategory: hB,
        setCreativeCategory: zB,
        show: FB
      } = BB;
      const {
        t: NB
      } = (0, EB.G)(), gB = (0, YB.j)("creativeVisibility"), {
        userContext: yB
      } = (0, QB.d)(), UB = (0, kB.d)("canUseDevCreativeItems"), WB = yB.playerHasRank("developer") || !!UB, dB = (0, JB.useMemo)((() => qT("", gB, WB)), [gB, WB]), CB = (0, JB.useMemo)((() => {
        const BB = (0, oT.creativeItemIds)(),
          IB = new Set(dB.map((IB => (0, oT.creativeCategoryOf)(BB[IB]))));
        return oT.creativeItemCategories.filter((BB => IB.has(BB)))
      }), [dB]), sB = null !== hB && CB.includes(hB) ? hB : null, OB = (0, JB.useMemo)((() => "" === vB ? dB : qT(vB, gB, WB)), [dB, vB, gB, WB]), iB = (0, JB.useMemo)((() => {
        const BB = (0, oT.creativeItemIds)();
        return null !== sB ? OB.filter((IB => (0, oT.creativeCategoryOf)(BB[IB]) === sB)) : "" === vB ? OB.filter((IB => !(0, oT.showOnlyInCreativeCategory)(BB[IB]))) : OB
      }), [OB, sB, vB]), pB = TB();

      function aB(BB) {
        zB(BB), IB.current.scrollTop = 0
      }
      const HB = [null, ...CB],
        {
          isTouchScreen: MB
        } = (0, LB.o)(["isTouchScreen"]),
        jB = !MB,
        PB = (0, JB.useRef)(null),
        [RB, rB] = (0, JB.useState)(0);
      (0, JB.useEffect)((() => {
        const BB = PB.current;
        if (!BB) return;
        const IB = new ResizeObserver((BB => {
          rB(BB[0].contentRect.height)
        }));
        return IB.observe(BB), () => {
          IB.disconnect()
        }
      }), [jB]);
      const mB = (0, JB.useRef)(null),
        XB = (0, JB.useCallback)((function BB() {
          "up" === mB.current ? IB.current.scrollTop -= 10 : "down" === mB.current && (IB.current.scrollTop += 10), mB.current && requestAnimationFrame(BB)
        }), [IB]),
        eB = (0, JB.useCallback)((function(BB) {
          mB.current || (mB.current = BB, XB())
        }), [XB]);

      function uB() {
        mB.current = null
      }
      const fB = (0, JB.useRef)({
        creativeSearchVal: vB,
        setCreativeSearchVal: cB
      });
      fB.current = {
        creativeSearchVal: vB,
        setCreativeSearchVal: cB
      };
      const [lB] = (0, JB.useState)((() => new cT((BB => {
        fB.current.setCreativeSearchVal(BB)
      }), 250, JZ.j))), AB = BB => {
        var ZB;
        null === (ZB = IB.current) || void 0 === ZB || ZB.classList.toggle("CreativeItemSlotsStale", BB)
      };
      (0, wB.d)(kT.c, (BB => {
        lB.setHeld(BB), BB || AB(!1)
      })), (0, JB.useEffect)((() => lB.flush), [lB]);
      const tB = (0, nB.jsx)(PZ.c, {
          className: "CreativeItemSlotsSearch",
          placeholderText: "Search",
          defaultValue: vB,
          maxLength: 1e4,
          onValueChange: (BB, IB) => {
            "" === lB.getTyped(fB.current.creativeSearchVal) && "" !== BB && zB(null), lB.type(BB), AB(lB.isHeld())
          },
          onEnter: lB.flush,
          blurOnEnter: !0
        }),
        bB = (0, nB.jsxs)("div", {
          className: "CreateItemSlotsScrollable",
          children: [MB && (0, nB.jsxs)("div", {
            className: "CreativeScrollButtons",
            children: [(0, nB.jsx)("div", {
              className: "CreativeScrollButton Up",
              onPointerDown: () => {
                eB("up")
              },
              onPointerLeave: uB,
              onPointerUp: uB,
              children: (0, nB.jsx)(qB.d, {
                name: "arrow-up"
              })
            }), (0, nB.jsx)("div", {
              className: "CreativeScrollButton Down",
              onPointerDown: () => {
                eB("down")
              },
              onPointerLeave: uB,
              onPointerUp: uB,
              children: (0, nB.jsx)(qB.d, {
                name: "arrow-up"
              })
            })]
          }), (0, nB.jsxs)("div", {
            className: "CreativeItemSlots",
            ref: IB,
            children: [0 === iB.length && "" !== vB && (0, nB.jsx)("div", {
              className: "CreativeItemSlotsEmpty",
              children: NB("general:noResults")
            }), (0, nB.jsx)(jZ.b, {
              lazyLoadedClassName: "CreativeItemSlotsInner",
              observerUpdateDeps: [vB, sB],
              observerRoot: "CreativeItemSlots",
              observing: FB,
              children: iB.map((BB => {
                const IB = ZB + BB;
                return (0, nB.jsx)(YZ.c, {
                  idx: IB,
                  draggedInfo: null,
                  specialItemInfo: null,
                  setHovered: TB(IB),
                  pointerDown: oB(IB),
                  pointerUp: GB(IB)
                }, IB)
              }))
            })]
          })]
        });
      return (0, nB.jsxs)("div", {
        className: WZ()("CreativeItemSlotsWrapper", jB ? "WithRail" : "WithDropdown"),
        children: [jB && (0, nB.jsx)("div", {
          className: "CreativeCategoryRail",
          ref: PB,
          style: {
            "--rail-height": RB > 0 ? `${RB}px` : void 0,
            "--tab-rows": Math.ceil(HB.length / 2)
          },
          children: HB.map((BB => (0, nB.jsx)(zT, {
            labelKey: nT(BB),
            isSelected: sB === BB,
            onSelect: () => {
              aB(BB)
            },
            setHovered: pB,
            children: (0, nB.jsx)(hT, {
              category: BB
            })
          }, null !== BB && void 0 !== BB ? BB : "all")))
        }), (0, nB.jsxs)("div", {
          className: "CreativeItemSlotsMain",
          children: [(0, nB.jsxs)("div", {
            className: "CreativeItemSlotsSearchRow",
            children: [tB, !jB && (0, nB.jsx)(FT, {
              categories: HB,
              selectedCategory: sB,
              onSelect: aB
            })]
          }), bB]
        })]
      })
    }));

    function gT(BB) {
      var IB;
      return null !== (IB = (0, GT.e)(BB)) && void 0 !== IB ? IB : ""
    }

    function qT(BB, IB, ZB) {
      let {
        publicLobby: TB,
        shownInGame: JB
      } = IB;
      const oB = BB.toLowerCase(),
        GB = (0, oT.creativeItemIds)(),
        vB = BB => {
          var IB;
          const oB = GB[BB];
          return !(0, oT.itemIsDisabled)(oB, TB, null === (IB = JB[gT(oB)]) || void 0 === IB || IB, ZB)
        };
      if ("" === oB) return GB.map(((BB, IB) => IB)).filter((BB => !(0, oT.showOnlyInCreativeSearch)(GB[BB]))).filter(vB);
      const kB = [];
      for (let cB = 0; cB < GB.length; cB++) gT(GB[cB]).toLowerCase().includes(oB) && kB.push(cB);
      kB.sort(((BB, IB) => {
        const ZB = gT(GB[BB]).toLowerCase(),
          TB = gT(GB[IB]).toLowerCase();
        return ZB.indexOf(oB) - TB.indexOf(oB)
      }));
      for (const [cB, nB] of(0, oT.creativeAltNames)())
        for (const BB of nB)
          if (BB.toLowerCase().includes(oB)) {
            const BB = GB.indexOf(cB);
            kB.includes(BB) || kB.push(BB)
          } return kB.filter(vB)
    }
    var yT = ZB(36856),
      UT = ZB(665);

    function WT(BB) {
      return BB > UT.j
    }

    function dT(BB) {
      const IB = BB / 2,
        ZB = [];
      for (let TB = 0; TB < IB / 6; TB++)
        for (let BB = 0; BB < 12; BB++) {
          const JB = BB < 6 ? 0 : IB;
          ZB.push(JB + 6 * TB + BB % 6)
        }
      return ZB
    }

    function CT(BB) {
      let {
        numSlots: IB,
        renderSlot: ZB
      } = BB;
      const {
        t: TB
      } = (0, EB.G)(), oB = (0, JB.useRef)(null);
      var GB;
      return GB = oB, (0, JB.useLayoutEffect)((() => {
        var BB;
        const IB = null === (BB = GB.current) || void 0 === BB ? void 0 : BB.closest(".InvenBody");
        if (!IB) return;
        const ZB = () => {
          IB.style.zoom = "";
          const BB = parseFloat(getComputedStyle(document.documentElement).fontSize),
            ZB = window.innerWidth - 2 * BB,
            TB = IB.getBoundingClientRect().width;
          TB > ZB && (IB.style.zoom = "" + ZB / TB)
        };
        return ZB(), window.addEventListener("resize", ZB), () => {
          window.removeEventListener("resize", ZB), IB.style.zoom = ""
        }
      }), [GB]), (0, nB.jsxs)("div", {
        ref: oB,
        className: "ChestItemSlots DoubleChestSlots",
        children: [(0, nB.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: TB("doubleChest:title")
        }), (0, nB.jsx)("div", {
          className: "GridItemSlots",
          children: dT(IB).map((BB => ZB(BB)))
        })]
      })
    }

    function QT(BB) {
      let {
        XJ: IB,
        initialPasskey: ZB
      } = BB;
      const {
        t: TB
      } = (0, EB.G)(), [oB, GB] = (0, JB.useState)(ZB), [vB, kB] = (0, JB.useState)(ZB);
      (0, JB.useEffect)((() => {
        GB(ZB), kB(ZB)
      }), [...IB]);
      return (0, nB.jsxs)("div", {
        className: "IronChestPasskeyEditorWrapper",
        children: [(0, nB.jsx)("div", {
          className: "SmallTextBold",
          children: TB("ironChest:currentPasskey", {
            currentPasskey: oB.join("")
          })
        }), (0, nB.jsx)(QZ, {
          className: "IronChestPasskeyEditor",
          Cv: vB,
          onPasskeyUpdated: kB,
          confirmText: "ironChest:changePasskey",
          onConfirm: () => {
            cB.gameBridge.send("changeIronChestPasskey", {
              pos: [...IB],
              Cv: [...vB]
            }), GB([...vB])
          }
        })]
      })
    }

    function sT(BB, IB) {
      return "Iron" === BB.type && BB.ironChest.ownerDbId === IB
    }

    function wT(BB) {
      let {
        variation: IB,
        canCraft: ZB,
        show: TB,
        creativeMounted: JB,
        specialItemRef: oB,
        draggedInfo: GB,
        getSetHovering: vB,
        getPointerDownForIdx: kB,
        getPointerUpForIdx: cB,
        enchantingTablePosition: hB,
        enchantingTableBlockName: zB,
        selectedCraftable: FB,
        dispatchSelectedCraftable: NB,
        creativeScrollDiv: gB,
        creativeSearchVal: qB,
        setCreativeSearchVal: yB,
        creativeCategory: UB,
        setCreativeCategory: WB,
        onCraft: dB
      } = BB;
      const {
        userContext: CB
      } = (0, QB.d)(), {
        t: sB
      } = (0, EB.G)(), wB = (0, YB.g)("inventory", (BB => BB.chest)), OB = (0, YB.g)("inventory", (BB => BB.player.length)), iB = (0, YB.g)("inventory", (BB => BB.creative));
      if (0 === OB) return null;
      let pB, aB;
      const HB = BB => {
          const IB = OB + BB;
          return (0, nB.jsx)(YZ.c, {
            idx: IB,
            draggedInfo: GB,
            specialItemInfo: oB.current,
            setHovered: vB(IB),
            pointerDown: kB(IB),
            pointerUp: cB(IB)
          }, IB)
        },
        MB = wB ? (0, yT.c)(wB.type) : null;
      if (MB) pB = WZ()("InvenLeftSideChestCustom", MB.className), aB = (0, nB.jsx)("div", {
        className: "ChestItemSlotsWrapper",
        children: MB.render({
          XJ: wB.pos,
          renderSlot: HB
        })
      });
      else if (wB) {
        const BB = wB.pos,
          IB = "Iron" === wB.type || "Moonstone" === wB.type ? wB.type : "Standard";
        pB = `InvenLeftSideChest${IB}`;
        const ZB = WT(wB.numSlots);
        aB = (0, nB.jsxs)("div", {
          className: "ChestItemSlotsWrapper",
          children: [sT(wB, CB.whamm) && (0, nB.jsx)(QT, {
            XJ: BB,
            initialPasskey: wB.ironChest.Cv
          }), ZB && (0, nB.jsx)(CT, {
            numSlots: wB.numSlots,
            renderSlot: HB
          }), !ZB && (0, nB.jsxs)("div", {
            className: "ChestItemSlots",
            children: [(0, nB.jsx)("div", {
              className: "InvenLeftSideHeader SmallTextBold",
              children: sB("Moonstone" === IB ? "item:moonstoneChest" : "Iron" === IB ? "item:ironChest" : "item:chest")
            }), (0, nB.jsx)("div", {
              className: "GridItemSlots",
              children: new Array(wB.numSlots).fill(0).map(((BB, IB) => HB(IB)))
            })]
          })]
        })
      } else if (!iB || IB && ZB)
        if (ZB && "Enchanting Table" === IB) pB = `InvenLeftSide${(null!==zB&&void 0!==zB?zB:"").replace(/ /gi,"")}`, aB = (0, nB.jsx)(iZ, {
          specialItemInfo: oB.current,
          setHovered: vB,
          pointerDown: kB(hZ.i),
          pointerUp: cB(hZ.i),
          enchantingTablePosition: hB,
          enchantingTableBlockName: zB
        });
        else if (ZB && "Salvaging Table" === IB) pB = "InvenLeftSideSalvagingTable", aB = (0, nB.jsx)(aZ, {
        specialItemInfo: oB.current,
        setSpecialItemInfo: BB => {
          oB.current = BB
        },
        setHovered: vB,
        pointerDown: kB(hZ.i),
        pointerUp: cB(hZ.i)
      });
      else {
        if (!ZB) return null;
        pB = `InvenLeftSide${(null!==IB&&void 0!==IB?IB:"HandCrafting").replace(/ /gi,"")}`, aB = (0, nB.jsx)(JT, {
          show: TB,
          onCraft: dB,
          craftingStation: IB,
          selectedCraftable: FB,
          dispatchSelectedCraftable: NB,
          setHovered: vB()
        })
      } else pB = "InvenLeftSideCreative", aB = JB ? (0, nB.jsx)(NT, {
        creativeScrollDiv: gB,
        playerInvenNumSlots: OB,
        getSetHoveringForIdx: vB,
        getPointerDownForIdx: kB,
        getPointerUpForIdx: cB,
        creativeSearchVal: qB,
        setCreativeSearchVal: yB,
        creativeCategory: UB,
        setCreativeCategory: WB,
        show: TB
      }) : null;
      const jB = !!wB || ZB && !!IB;
      return (0, nB.jsx)("div", {
        className: `InvenLeftSide ${pB}`,
        "data-pad-inventory-start": jB ? "" : void 0,
        children: aB
      })
    }
    var OT = ZB(655),
      YT = ZB(20023),
      iT = ZB(20025),
      pT = ZB(20033);
    const aT = {
      Helmet: {
        sprite: "empty_armor_slot_helmet",
        image: ZB(20042)
      },
      Chestplate: {
        sprite: "empty_armor_slot_chestplate",
        image: iT
      },
      Gauntlets: {
        sprite: "empty_armor_slot_gauntlets",
        image: pT
      },
      Leggings: {
        sprite: "empty_armor_slot_leggings",
        image: ZB(20051)
      },
      Boots: {
        sprite: "empty_armor_slot_boots",
        image: YT
      }
    };

    function HT(BB) {
      const {
        sprite: IB,
        image: ZB
      } = aT[BB];
      return tI(IB, fI.m.ITEM, ZB)
    }

    function MT(BB) {
      let {
        draggedInfo: IB,
        specialItemInfo: ZB,
        craftFlyAnims: TB,
        getSetHovering: JB,
        getPointerDownForIdx: oB,
        getPointerUpForIdx: GB,
        variation: vB,
        canCraft: kB,
        isNewSlot: cB
      } = BB;
      const hB = (0, YB.g)("inventory", (BB => BB.player.length));
      return 0 === hB ? null : (0, nB.jsxs)("div", {
        className: "InvenBodyRight",
        children: [(0, nB.jsx)("div", {
          className: "ArmourItemSlots",
          children: new Array(OT.b.length).fill(0).map(((BB, zB) => {
            const FB = hB - OT.b.length + zB;
            return (0, nB.jsx)(YZ.c, {
              idx: FB,
              draggedInfo: IB,
              specialItemInfo: ZB,
              craftFlyHoldbackInfo: (0, nZ.g)(TB, FB),
              setHovered: JB(FB),
              pointerDown: oB(FB),
              pointerUp: GB(FB),
              defaultIconB64: HT(OT.b[zB]),
              variation: kB ? vB : void 0,
              showNewDot: cB(FB)
            }, FB)
          }))
        }), (0, nB.jsx)("div", {
          className: "GridItemSlots",
          children: new Array(hB - 10 - OT.b.length).fill(0).map(((BB, zB) => {
            const FB = hB - OT.b.length - zB - 1;
            return (0, nB.jsx)(YZ.c, {
              idx: FB,
              draggedInfo: IB,
              specialItemInfo: ZB,
              craftFlyHoldbackInfo: (0, nZ.g)(TB, FB),
              setHovered: JB(FB),
              pointerDown: oB(FB),
              pointerUp: GB(FB),
              variation: kB ? vB : void 0,
              showNewDot: cB(FB)
            }, FB)
          }))
        })]
      })
    }
    var jT = ZB(36863),
      PT = ZB(36867);

    function RT(BB) {
      const {
        e: IB,
        idx: ZB
      } = BB, TB = (0, cZ.o)(BB.readInventory(), ZB), JB = (0, cZ.v)(IB);
      ZB === hZ.e ? function(BB, IB) {
        const {
          draggedInfoRef: ZB,
          removeItem: TB,
          removeDraggedInfoRef: JB,
          close: oB
        } = BB;
        if (ZB.current) {
          const BB = IB && ZB.current.amount || 1;
          TB(ZB.current.idx, BB, !0) && (ZB.current.amount -= BB, ZB.current.amount <= 0 && JB())
        } else IB && oB()
      }(BB, JB) : ZB === hZ.i ? function(BB, IB) {
        const {
          e: ZB,
          draggedInfoRef: TB,
          specialItemRef: JB,
          moveAmtIntoSlot: oB,
          removeDraggedInfoRef: GB
        } = BB;
        if ((0, cZ.C)(ZB) && JB.current) JB.current = null;
        else if (TB.current && JB.current && (TB.current.idx === JB.current.idx || (0, PT.b)(TB.current, JB.current)) && TB.current.amount > 0 && JB.current.amount > 0 && JB.current.amount < dZ.f.maxItemStackSize)
          if (TB.current.idx === JB.current.idx) {
            if (IB) {
              const BB = Math.min(TB.current.amount, dZ.f.maxItemStackSize - JB.current.amount);
              JB.current.amount += BB, TB.current.amount -= BB
            } else TB.current.amount--, JB.current.amount++;
            TB.current.amount <= 0 && GB()
          } else if (IB) {
          const BB = Math.min(TB.current.amount, dZ.f.maxItemStackSize - JB.current.amount);
          oB(JB.current.idx, BB) && (JB.current.amount += BB)
        } else {
          oB(JB.current.idx, 1) && JB.current.amount++
        } else if (TB.current && !JB.current && !IB && TB.current.amount > 0) TB.current.amount--, JB.current = {
          idx: TB.current.idx,
          name: TB.current.name,
          attributes: TB.current.attributes,
          amount: 1
        }, TB.current.amount <= 0 && GB();
        else {
          const BB = TB.current;
          TB.current = JB.current, JB.current = BB
        }
      }(BB, JB) : (0, cZ.C)(IB) ? function(BB, IB) {
        var ZB, TB;
        const {
          idx: JB,
          draggedInfoRef: oB,
          specialItemRef: GB,
          canCraft: vB,
          variation: kB,
          swapSlots: cB,
          moveIntoSlots: nB
        } = BB;
        if (!IB) return;
        let hB = IB.amount;
        JB === (null === (ZB = oB.current) || void 0 === ZB ? void 0 : ZB.idx) && (hB = oB.current.amount <= 0 ? 0 : IB.amount - oB.current.amount);
        JB === (null === (TB = GB.current) || void 0 === TB ? void 0 : TB.idx) && (hB = GB.current.amount <= 0 ? 0 : IB.amount - GB.current.amount);
        if (0 === hB) return;
        const zB = BB.readInventory(),
          FB = zB.player.length,
          NB = zB.chest,
          gB = FB - OT.b.length,
          qB = () => {
            if (!(0, JZ.j)()) return void nB(10, gB, JB, hB);
            const BB = BB => {
              const ZB = (0, cZ.o)(zB, BB);
              return ZB ? {
                amount: ZB.amount,
                stacksWithMoved: (0, PT.b)(ZB, IB)
              } : null
            };
            for (const IB of ((BB, IB, ZB, TB, JB) => {
                const oB = [];
                let GB = TB;
                if (null !== TB) {
                  let vB = 0;
                  for (let TB = IB; TB < ZB; TB++) {
                    const IB = BB(TB);
                    null !== IB && void 0 !== IB && IB.stacksWithMoved && null !== IB.amount && IB.amount > 0 && (vB += Math.max(0, JB - IB.amount))
                  }
                  const kB = Math.min(TB, vB);
                  if (kB > 0 && (oB.push({
                      start: IB,
                      end: ZB,
                      amount: kB
                    }), GB = TB - kB), GB <= 0) return oB
                }
                for (let vB = ZB - 1; vB >= IB; vB--)
                  if (null === BB(vB)) {
                    oB.push({
                      start: vB,
                      end: vB + 1,
                      amount: GB
                    });
                    break
                  } return oB
              })(BB, 10, gB, hB, dZ.f.maxItemStackSize)) nB(IB.start, IB.end, JB, IB.amount)
          };
        if (!vB || "Enchanting Table" !== kB && "Salvaging Table" !== kB) {
          const ZB = (0, OB.Cb)(IB.name),
            TB = ZB ? (0, OB.zb)(ZB) : null;
          if (!OT.b.includes(ZB) || JB !== TB && (0, cZ.s)(zB, BB.itemInfo, TB, JB))
            if (NB)
              if (JB < FB) {
                var yB, UB;
                const [BB, IB] = null !== (yB = null === (UB = (0, yT.c)(NB.type)) || void 0 === UB ? void 0 : UB.quickMoveRange) && void 0 !== yB ? yB : [0, NB.numSlots];
                nB(FB + BB, FB + IB, JB, hB)
              } else nB(0, FB - OT.b.length, JB, hB);
          else zB.creative ? JB < 10 ? qB() : JB < FB ? nB(0, 10, JB, hB) : nB(0, FB - OT.b.length, JB, null !== IB.amount ? dZ.f.maxItemStackSize : null) : JB < 10 ? qB() : nB(0, 10, JB, hB);
          else JB < FB - OT.b.length || JB >= FB ? cB(TB, JB) : (nB(0, FB - OT.b.length, TB, hB), vZ.d.play("equip_leather1", 1).rate(.9 + .3 * Math.random()))
        } else GB.current = {
          idx: JB,
          name: IB.name,
          attributes: IB.attributes,
          amount: null !== IB.amount ? hB : 0
        }
      }(BB, TB) : BB.draggedInfoRef.current ? function(BB, IB, ZB, TB) {
        const {
          draggedInfoRef: JB,
          specialItemRef: oB,
          moveAmtIntoSlot: GB,
          swapSlots: vB,
          removeItem: kB,
          removeDraggedInfoRef: cB
        } = BB, nB = BB.readInventory(), hB = JB.current.idx;
        if (ZB && (IB === hB || (0, PT.b)(JB.current, ZB)) && JB.current.amount > 0 && (0, cZ.d)(ZB) > 0 && (ZB.amount < dZ.f.maxItemStackSize || IB === hB)) TB ? ZB.amount + JB.current.amount <= dZ.f.maxItemStackSize || IB === hB ? GB(IB, JB.current.amount) : GB(IB, dZ.f.maxItemStackSize - ZB.amount) : GB(IB, 1);
        else if (JB.current.amount > 0 && !ZB) GB(IB, TB ? JB.current.amount : 1);
        else if (TB || ZB || 0 === JB.current.amount)
          if (nB.creative && !nB.chest && IB >= nB.player.length) {
            const BB = 0 === JB.current.amount ? 1 : JB.current.amount;
            kB(JB.current.idx, BB, !1) && cB()
          } else {
            var zB;
            const ZB = (null === (zB = oB.current) || void 0 === zB ? void 0 : zB.idx) === IB;
            if (vB(IB, JB.current.idx)) {
              const TB = BB.readInventory(),
                GB = (0, cZ.o)(TB, hB),
                vB = !TB.chest && TB.creative && JB.current.idx >= TB.player.length;
              if (GB && JB.current.idx !== IB && !vB) {
                let BB = (0, cZ.d)(GB);
                ZB && (BB -= oB.current.amount), JB.current = ZB && 0 === BB ? null : {
                  idx: JB.current.idx,
                  name: GB.name,
                  attributes: GB.attributes,
                  amount: BB
                }
              } else cB()
            }
          }
        else GB(IB, 1)
      }(BB, ZB, TB, JB) : function(BB, IB, ZB, TB) {
        var JB;
        const {
          draggedInfoRef: oB,
          specialItemRef: GB
        } = BB;
        if (!ZB) return;
        let vB = (0, cZ.d)(ZB);
        const kB = (null === (JB = GB.current) || void 0 === JB ? void 0 : JB.idx) === IB;
        kB && (vB -= GB.current.amount);
        TB || (vB = Math.ceil(vB / 2));
        oB.current = kB && 0 === vB ? null : {
          idx: IB,
          name: ZB.name,
          attributes: ZB.attributes,
          amount: vB
        }
      }(BB, ZB, TB, JB)
    }

    function rT(BB, IB) {
      return !!IB && IB.name === BB.name
    }

    function mT() {
      return cB.gameBridge.latest("inventory")
    }

    function XT(BB, IB, ZB) {
      return cB.gameBridge.send("removeInventoryItem", {
        slot: BB,
        amount: IB,
        drop: ZB
      })
    }

    function LT(BB) {
      return (0, cZ.l)(BB, cB.gameBridge.latest("itemInfo"), cB.gameBridge.latest("stationItems").enchantable)
    }

    function eT(BB) {
      let {
        show: IB,
        close: ZB,
        canCraft: TB,
        variation: oB,
        inventoryItemsMoveable: GB,
        setCraftFlyAnims: vB
      } = BB;
      (0, YB.j)("itemInfo");
      const [kB, nB] = (0, JB.useState)(null), [hB, zB] = (0, JB.useState)(null), [FB, NB] = (0, JB.useState)(!1), gB = (0, JB.useRef)(null), qB = (0, JB.useRef)(null), yB = (0, JB.useRef)(null), UB = (0, JB.useRef)(null), [WB, dB] = (0, JB.useReducer)((BB => BB + 1), 0), CB = (0, JB.useCallback)((() => {
        IB && dB()
      }), [IB, dB]), QB = (0, JB.useCallback)((() => {
        qB.current = null, RB.current = null, CB()
      }), [CB]), sB = (0, JB.useCallback)(((BB, IB) => {
        vB((ZB => ZB.map((ZB => "ingredient" === ZB.kind ? ZB : ZB.Dv === BB ? {
          ...ZB,
          Dv: IB,
          to: (0, cZ.h)(IB)
        } : ZB.Dv === IB ? {
          ...ZB,
          Dv: BB,
          to: (0, cZ.h)(BB)
        } : ZB))))
      }), [vB]), wB = (0, JB.useCallback)(((BB, IB) => {
        const ZB = XB.current;
        if (ZB.x = BB, ZB.y = IB, gB.current) !LB.current.isTouch || LB.current.itemBeingDragged && !RB.current ? (gB.current.style.transform = `translate(${ZB.x}px, ${ZB.y}px)`, NB(LB.current.isTouch && !RB.current)) : (gB.current.style.transform = "translate(0.5rem, 0.5rem)", NB(!0));
        else if (UB.current) {
          const ZB = UB.current;
          let TB = BB + 10,
            JB = IB + 10;
          const oB = ZB.offsetWidth,
            GB = ZB.offsetHeight;
          TB + oB > window.innerWidth && (TB = BB - oB - 10), JB + GB > window.innerHeight && (JB = IB - GB - 10), TB < 0 && (TB = 0), JB < 0 && (JB = 0), UB.current.style.transform = `translate(${TB}px, ${JB}px)`
        }
      }), []), iB = (0, JB.useCallback)((BB => (IB, ZB, TB) => {
        if (nB(IB && void 0 !== BB ? BB : null), IB) {
          if (void 0 === BB && !ZB) return void(0, jT.c)("Error in invenComp", new Error("isHovering true but no idx or text"));
          if (void 0 !== BB) {
            var JB;
            const IB = mT();
            let ZB;
            if (ZB = BB === hZ.i ? yB.current ? (0, cZ.o)(IB, yB.current.idx) : null : (0, cZ.o)(IB, BB), !ZB) return void zB(null);
            if ((null === (JB = yB.current) || void 0 === JB ? void 0 : JB.idx) === BB) {
              if (0 === (0, cZ.d)(ZB) - yB.current.amount) return void zB(null)
            }
            zB(LT(ZB))
          } else zB({
            name: ZB.name,
            desc: ZB.desc,
            fontStyle: "normal"
          })
        } else zB(null);
        TB && setTimeout((() => {
          wB(TB.pageX, TB.pageY)
        }), 0)
      }), [wB]), pB = (0, JB.useCallback)(((BB, IB) => {
        const ZB = cB.gameBridge.send("moveInventoryItem", {
          from: qB.current.idx,
          to: BB,
          amount: IB
        });
        return ZB ? (qB.current.amount -= IB, qB.current.amount <= 0 && QB()) : console.error("moveInventoryItem failed"), ZB
      }), [QB]), aB = (0, JB.useCallback)(((BB, IB) => {
        const ZB = yB.current,
          TB = null === ZB || void 0 === ZB ? void 0 : ZB.idx;
        ZB && (ZB.idx = function(BB, IB, ZB) {
          return BB === IB ? ZB : BB === ZB ? IB : BB
        }(TB, BB, IB));
        const JB = cB.gameBridge.send("swapInventorySlots", {
          a: BB,
          b: IB
        });
        return JB ? sB(BB, IB) : ZB && (ZB.idx = TB), JB
      }), [sB]), HB = (0, JB.useCallback)(((BB, IB, ZB, TB) => {
        const JB = cB.gameBridge.send("quickMoveInventoryItem", {
          slot: ZB,
          start: BB,
          end: IB,
          amount: TB
        });
        null !== JB && sB(ZB, JB)
      }), [sB]), MB = (0, JB.useCallback)(((BB, IB) => {
        var JB;
        ((BB, IB, ZB) => {
          const TB = BB - (ZB - OT.b.length);
          return !(!IB || TB < 0 || TB >= OT.b.length) && (0, OB.Cb)(IB) !== OT.b[TB]
        })(IB, null === (JB = qB.current) || void 0 === JB ? void 0 : JB.name, mT().player.length) || (RT({
          e: BB,
          idx: IB,
          readInventory: mT,
          itemInfo: cB.gameBridge.latest("itemInfo"),
          draggedInfoRef: qB,
          specialItemRef: yB,
          moveAmtIntoSlot: pB,
          swapSlots: aB,
          moveIntoSlots: HB,
          removeItem: XT,
          removeDraggedInfoRef: QB,
          close: ZB,
          canCraft: TB,
          variation: oB
        }), CB())
      }), [TB, ZB, pB, HB, QB, aB, oB, CB]), jB = (0, JB.useRef)(0), PB = (0, JB.useRef)(null), RB = (0, JB.useRef)(null), rB = (0, JB.useRef)(null), mB = (0, JB.useRef)(new Set), XB = (0, JB.useRef)({
        x: 0,
        y: 0
      }), LB = (0, JB.useRef)({
        isTouch: !1,
        itemBeingDragged: !1
      }), eB = (0, JB.useCallback)((() => (rB.current = null, LB.current.itemBeingDragged = !1, clearTimeout(PB.current), !!RB.current && (RB.current = null, CB(), !0))), [CB]);
      (0, JB.useEffect)((() => {
        eB(), mB.current.clear()
      }), [IB]);
      const uB = BB => void 0 !== BB && (mB.current.has(BB) || null !== rB.current && BB !== rB.current),
        fB = BB => {
          LB.current.isTouch = (0, cZ.x)(BB)
        },
        lB = (0, JB.useCallback)((BB => IB => {
          const TB = (0, cZ.x)(IB);
          if (TB || wB(IB.pageX, IB.pageY), GB)
            if (uB(IB.pointerId)) void 0 !== IB.pointerId && mB.current.add(IB.pointerId);
            else {
              if (fB(IB), TB) {
                jB.current = IB.timeStamp, LB.current.itemBeingDragged = !0, rB.current = IB.pointerId;
                const ZB = (0, cZ.o)(mT(), BB);
                if (ZB && ZB.amount && ZB.amount > 0) {
                  const ZB = IB.pageX,
                    TB = IB.pageY,
                    JB = XB.current.x,
                    oB = XB.current.y;
                  clearTimeout(PB.current), PB.current = setTimeout((() => {
                    if (qB.current && qB.current.idx === BB && (Math.abs(ZB - XB.current.x) < 20 && Math.abs(TB - XB.current.y) < 20 || JB === XB.current.x && oB === XB.current.y) && LB.current.itemBeingDragged) {
                      const BB = mT(),
                        ZB = BB.creative && !BB.chest && qB.current.idx >= dZ.f.numInvenSlots && null !== (0, cZ.o)(BB, qB.current.idx).amount ? dZ.f.maxItemStackSize : qB.current.amount;
                      RB.current = {
                        initTouchX: IB.pageX,
                        initTouchY: IB.pageY,
                        maxAmount: ZB
                      }, qB.current.amount = Math.ceil(qB.current.amount / 2), gB.current.style.transform = "translate(0.5rem, 0.5rem)", NB(!0), CB()
                    }
                  }), 500)
                }
              }
              MB(IB, BB)
            }
          else BB === hZ.e && (0, cZ.v)(IB) && ZB()
        }), [wB, MB, GB, ZB, CB]),
        AB = (0, JB.useCallback)((BB => BB => {
          if (uB(BB.pointerId)) return;
          const IB = (0, cZ.x)(BB);
          if (fB(BB), !eB()) {
            if (IB && qB.current && BB.timeStamp - jB.current > 150) {
              const IB = document.elementFromPoint(BB.clientX, BB.clientY);
              if (null !== IB) {
                const ZB = IB.getAttribute("data-inven-idx");
                null !== ZB ? MB(BB, parseInt(ZB)) : IB.classList.contains("InventoryBackgroundScreen") && MB(BB, -1)
              }
            }
            wB(BB.pageX, BB.pageY)
          }
        }), [wB, MB, eB]);
      (0, JB.useEffect)((() => {
        let BB;
        const ZB = ["pointerup", "pointercancel"],
          TB = BB => {
            mB.current.has(BB.pointerId) ? setTimeout((() => {
              mB.current.delete(BB.pointerId)
            }), 0) : BB.pointerId === rB.current && setTimeout((() => {
              rB.current === BB.pointerId && eB()
            }), 0)
          };
        if (IB) {
          for (const BB of ZB) document.addEventListener(BB, TB, !0);
          if (!LB.current.isTouch) {
            const BB = XB.current;
            wB(BB.x, BB.y)
          }
          BB = BB => {
            BB.preventDefault(), uB(BB.pointerId) || (fB(BB), wB(BB.pageX, BB.pageY), RB.current && BB.pointerId === rB.current && (BB => {
              if (!qB.current) return RB.current = null, void CB();
              const {
                initTouchX: IB,
                maxAmount: ZB
              } = RB.current, TB = (BB.pageX - IB) * RB.current.maxAmount / 160, JB = Math.ceil(ZB / 2) + Math.ceil(TB);
              qB.current.amount = Math.min(ZB, Math.max(1, JB)), CB()
            })(BB))
          }, document.addEventListener("pointermove", BB, !0)
        }
        return () => {
          document.removeEventListener("pointermove", BB, !0);
          for (const BB of ZB) document.removeEventListener(BB, TB, !0)
        }
      }));
      const tB = (0, JB.useCallback)((() => {
          if (qB.current) {
            const BB = (0, cZ.o)(mT(), qB.current.idx);
            (!rT(qB.current, BB) || BB.amount < qB.current.amount) && QB()
          }
        }), [QB]),
        bB = (0, JB.useCallback)((() => {
          const BB = qB.current;
          if (BB) {
            const IB = (0, cZ.o)(mT(), BB.idx);
            rT(BB, IB) && (BB.attributes = IB.attributes)
          }
        }), []);
      return {
        draggedDomRef: gB,
        draggedInfoRef: qB,
        specialItemRef: yB,
        hoverInfoDomRef: UB,
        longHoldSplitInfoRef: RB,
        currHoveredIdx: kB,
        currHoveredDisplayInfo: hB,
        displayDraggedItemName: FB,
        forceRerenderIfVisible: CB,
        removeDraggedInfoRef: QB,
        checkDraggedItemConsistencyWithInven: tB,
        refreshDraggedAttributes: bB,
        swapSlots: aB,
        getPointerDownForIdx: lB,
        getPointerUpForIdx: AB,
        getSetHovering: iB,
        setCurrHoveredDisplayInfo: zB,
        moveFollowerTo: wB
      }
    }
    class uT {
      constructor(BB) {
        this.snapshot = [], this.newSlots = new Set, this.update(BB, !1)
      }
      update(BB, IB) {
        const ZB = BB.map((BB => {
          var IB;
          return BB ? {
            name: BB.name,
            amount: null !== (IB = BB.amount) && void 0 !== IB ? IB : 1
          } : null
        }));
        ZB.forEach(((BB, ZB) => {
          const TB = this.snapshot[ZB],
            JB = (null === BB || void 0 === BB ? void 0 : BB.name) !== (null === TB || void 0 === TB ? void 0 : TB.name);
          (!BB || JB || BB.amount < TB.amount) && this.newSlots.delete(ZB), IB && BB && (JB || BB.amount > TB.amount) && this.newSlots.add(ZB)
        })), this.snapshot = ZB
      }
      clearMarks() {
        this.newSlots.clear()
      }
      isNew(BB) {
        return this.newSlots.has(BB)
      }
    }
    const fT = (BB, IB, ZB) => ({
      button: IB,
      shiftKey: ZB,
      pageX: BB.clientX,
      pageY: BB.clientY,
      clientX: BB.clientX,
      clientY: BB.clientY,
      pointerType: "mouse"
    });

    function lT(BB) {
      const [IB, ZB] = (0, JB.useState)(BB);
      return BB && !IB && ZB(!0), (0, JB.useEffect)((() => {
        if (IB) return;
        let BB = !0;
        const TB = () => {
            BB && (BB = !1, ZB(!0))
          },
          JB = "function" === typeof window.requestIdleCallback,
          oB = JB ? window.requestIdleCallback(TB, {
            timeout: 2e3
          }) : void 0,
          GB = setTimeout(TB, JB ? 2e3 : 1e3);
        return () => {
          BB = !1, clearTimeout(GB), void 0 !== oB && window.cancelIdleCallback(oB)
        }
      }), [IB]), IB
    }
    const AT = (0, JB.memo)((function(BB) {
      var IB;
      let {
        show: ZB,
        onOpen: TB,
        onClose: oB,
        variation: vB
      } = BB;
      const hB = (0, JB.useRef)(null),
        zB = (0, JB.useRef)(null),
        FB = function(BB) {
          const [IB, ZB] = (0, JB.useState)(!0), [TB, oB] = (0, JB.useState)(!1), GB = (0, JB.useRef)(null), vB = (0, JB.useRef)(null), cB = (0, kB.d)("_shield"), nB = (0, JB.useRef)(null), hB = (0, kB.d)("_health"), zB = (0, JB.useRef)(null);

          function FB(BB) {
            const IB = Date.now() + BB;
            IB < vB.current || (ZB(!1), clearTimeout(GB.current), vB.current = IB, GB.current = setTimeout((() => {
              ZB(!0)
            }), BB))
          }
          return (0, JB.useEffect)((() => {
            FB(FZ);
            const BB = NB.l.subscribe("requestingPlayVideoAd", (() => {
              FB(FZ)
            }));
            return () => {
              clearTimeout(GB.current), NB.l.unsubscribe(BB)
            }
          }), []), (0, JB.useEffect)((() => {
            (nB.current > cB || zB.current > hB) && FB(6e4), nB.current = cB, zB.current = hB
          }), [cB, hB]), (0, JB.useEffect)((() => {
            let IB = null;
            return BB ? IB = setTimeout((() => {
              oB(!0)
            }), 250) : oB(!1), () => {
              clearTimeout(IB)
            }
          }), [BB]), IB && TB
        }(ZB);
      (0, wB.h)(ZZ.b, null);
      const gB = (0, ZZ.h)(),
        qB = gB.some((BB => BB.panel)),
        {
          userContext: yB
        } = (0, QB.d)(),
        UB = (0, YB.g)("inventory", (BB => {
          const IB = BB.chest;
          return null !== IB && (WT(IB.numSlots) || sT(IB, yB.whamm))
        })),
        WB = lT(ZB),
        dB = lT(ZB),
        [CB, sB] = (0, JB.useState)([]),
        iB = (0, JB.useCallback)((BB => {
          sB((IB => IB.filter((IB => IB.id !== BB))))
        }), []),
        pB = (0, JB.useRef)(null),
        aB = (0, JB.useRef)(0),
        HB = (0, JB.useCallback)((() => {
          pB.current && (aB.current = pB.current.scrollTop), oB()
        }), [oB]),
        MB = (0, kB.d)("inventoryItemsMoveable"),
        jB = (0, kB.d)("canCraft"),
        {
          clientEscMenuOptions: RB
        } = (0, LB.o)(["clientEscMenuOptions"]),
        rB = (0, JB.useRef)(null);
      rB.current || (rB.current = new uT(cB.gameBridge.latest("inventory").player));
      const mB = rB.current,
        {
          draggedDomRef: XB,
          draggedInfoRef: eB,
          specialItemRef: uB,
          hoverInfoDomRef: fB,
          longHoldSplitInfoRef: lB,
          currHoveredIdx: AB,
          currHoveredDisplayInfo: tB,
          displayDraggedItemName: bB,
          forceRerenderIfVisible: xB,
          removeDraggedInfoRef: EB,
          checkDraggedItemConsistencyWithInven: DB,
          refreshDraggedAttributes: KB,
          swapSlots: VB,
          getPointerDownForIdx: SB,
          getPointerUpForIdx: BI,
          getSetHovering: II,
          setCurrHoveredDisplayInfo: ZI,
          moveFollowerTo: TI
        } = eT({
          show: ZB,
          close: HB,
          canCraft: jB,
          variation: vB,
          inventoryItemsMoveable: MB,
          setCraftFlyAnims: sB
        });
      (0, JB.useEffect)((() => {
        const BB = !ZB && null !== cB.gameBridge.latest("inventory").chest;
        if (BB && cB.gameBridge.send("closeChest", null), ZB || (mB.clearMarks(), II(null)(!1)), BB) {
          vZ.d.play("chestClose", 1).rate(.8 + .4 * Math.random())
        }
      }), [ZB]), (0, YB.c)("chestToggled", (BB => {
        if (BB ? TB() : ZB && HB(), BB) {
          vZ.d.play("chestOpen", 1).rate(.8 + .4 * Math.random())
        }
      }));
      const JI = (0, aI.i)();
      (0, YB.c)("inventory", (BB => {
        let {
          player: IB
        } = BB;
        var TB, JB, oB;
        (mB.update(IB, !ZB && JI.shown), uB.current) && (uB.current = (JB = uB.current, oB = null !== (TB = IB[uB.current.idx]) && void 0 !== TB ? TB : null, rT(JB, oB) ? (JB.attributes = oB.attributes, null !== oB.amount && JB.amount > oB.amount && (JB.amount = oB.amount), JB) : null));
        KB(), null !== AB && II(AB)(!0), xB()
      })), (0, JB.useEffect)((() => (cB.gameBridge.send("setInventoryOpen", ZB), () => {
        cB.gameBridge.send("setInventoryOpen", !1)
      })), [ZB]);
      const oI = (BB, IB) => {
        if (BB === hZ.i) return void(BB => {
          const IB = uB.current;
          if (!IB || null === (0, cZ.o)(cB.gameBridge.latest("inventory"), IB.idx)) return;
          const ZB = BB ? Math.max(IB.amount, 1) : 1,
            TB = IB.amount - ZB;
          if (!cB.gameBridge.send("removeInventoryItem", {
              slot: IB.idx,
              amount: ZB,
              drop: !0
            })) return;
          const JB = uB.current;
          JB && (JB.amount = Math.min(JB.amount, TB), JB.amount <= 0 && (uB.current = null)), xB()
        })(IB);
        const ZB = null === BB ? null : (0, cZ.o)(cB.gameBridge.latest("inventory"), BB);
        if (null !== ZB) {
          var TB, JB, oB;
          const GB = IB && null !== (TB = ZB.amount) && void 0 !== TB ? TB : 1;
          cB.gameBridge.send("removeInventoryItem", {
            slot: BB,
            amount: GB,
            drop: !0
          }), BB === (null === (JB = eB.current) || void 0 === JB ? void 0 : JB.idx) && (eB.current.amount -= GB, eB.current.amount <= 0 && EB(), xB()), BB === (null === (oB = uB.current) || void 0 === oB ? void 0 : oB.idx) && (uB.current = null, xB())
        }
      };
      (0, YB.c)("inventoryDropRequested", (BB => {
        ZB && AB !== hZ.i && oI(AB, BB)
      }));
      const GI = (BB, IB) => {
        let ZB = IB;
        if (IB === hZ.i) {
          if (!uB.current) return;
          ZB = uB.current.idx
        }
        const TB = VB(BB, ZB);
        if (TB && eB.current && (eB.current.idx === ZB ? eB.current.idx = BB : eB.current.idx === BB && (eB.current.idx = ZB)), TB && IB === hZ.i) {
          const BB = (0, cZ.o)(cB.gameBridge.latest("inventory"), ZB);
          uB.current = BB ? {
            idx: ZB,
            name: BB.name,
            attributes: BB.attributes,
            amount: (0, cZ.d)(BB)
          } : null
        }
        xB()
      };
      (0, YB.c)("numberKeyPressed", (BB => {
        null !== AB && ZB && GI(BB - 1, AB)
      })), (0, JB.useEffect)((() => {
        ZB || (uB.current = null, EB(), ZI(null))
      }), [ZB, EB, ZI, uB]);
      const vI = uB.current;
      (0, JB.useEffect)((() => {
        AB === hZ.i && II(hZ.i)(!0)
      }), [vI, AB, II]);
      const kI = () => {
        DB(), KB(), xB()
      };
      (0, YB.c)("chestRefreshed", kI), (0, YB.c)("inventorySynced", kI);
      const [cI, nI] = (0, JB.useState)(new Map), hI = null !== (IB = cI.get(vB)) && void 0 !== IB ? IB : null, zI = (BB, IB) => {
        nI((ZB => {
          const TB = ZB.get(BB);
          return TB && TB.name === IB.name && TB.pn === IB.pn ? ZB : new Map(ZB).set(BB, IB)
        }))
      };
      (0, wB.d)("craftingRecipesEdited", (() => {
        xB()
      })), (0, wB.d)(AZ.e, (BB => {
        let {
          variation: IB,
          itemName: ZB
        } = BB;
        zI(IB, {
          name: ZB,
          pn: 0
        })
      }));
      const [FI, NI] = (0, JB.useState)(null), [gI, qI] = (0, JB.useState)(null);
      (0, YB.c)("enchantingTableOpened", (BB => {
        let {
          position: IB,
          blockName: ZB
        } = BB;
        NI(IB), qI(ZB)
      }));
      const [yI, UI] = (0, JB.useState)(""), [WI, dI] = (0, JB.useState)(null);
      (0, JB.useEffect)((() => {
        ZB && pB.current && (pB.current.scrollTop = aB.current)
      }), [ZB]);
      return (BB => {
        const IB = (0, JB.useRef)(BB);
        IB.current = BB, (0, JB.useEffect)((() => {
          if (!BB.show) return;
          const ZB = (BB, ZB, TB, JB) => {
              const {
                getPointerDownForIdx: oB,
                getPointerUpForIdx: GB
              } = IB.current;
              oB(BB)(fT(ZB, TB, JB)), GB(BB)(fT(ZB, TB, JB))
            },
            TB = {
              primary: (BB, IB) => {
                ZB(BB, IB, 0, !1)
              },
              secondary: (BB, IB) => {
                ZB(BB, IB, 2, !1)
              },
              quickMove: (BB, IB) => {
                ZB(BB, IB, 0, !0)
              },
              dropHeld: (BB, ZB) => {
                IB.current.getPointerDownForIdx(hZ.e)(fT(ZB, BB ? 0 : 2, !1))
              },
              dropSlot: (BB, ZB) => {
                IB.current.dropFromIdx(BB, ZB)
              },
              swapWithHotbar: (BB, ZB) => {
                IB.current.swapWithHotbar(BB, ZB)
              },
              cancel: () => {
                IB.current.removeDraggedInfoRef()
              },
              isHolding: () => !!IB.current.draggedInfoRef.current,
              hasItemAt: BB => {
                const {
                  draggedInfoRef: ZB,
                  specialItemRef: TB
                } = IB.current;
                if (BB === hZ.i) return !!TB.current;
                const JB = (0, cZ.o)(cB.gameBridge.latest("inventory"), BB);
                return !!JB && (0, YZ.e)(BB, (0, cZ.d)(JB), [ZB.current, TB.current]).shown
              },
              hover: (BB, ZB) => {
                const {
                  moveFollowerTo: TB,
                  getSetHovering: JB
                } = IB.current;
                TB(ZB.clientX, ZB.clientY), JB(null !== BB && void 0 !== BB ? BB : void 0)(null !== BB, void 0, {
                  pageX: ZB.clientX,
                  pageY: ZB.clientY
                })
              },
              moveTo: BB => {
                IB.current.moveFollowerTo(BB.clientX, BB.clientY)
              },
              close: () => {
                IB.current.close()
              }
            };
          return (0, TZ.n)(TB)
        }), [BB.show])
      })({
        show: ZB,
        close: HB,
        draggedInfoRef: eB,
        specialItemRef: uB,
        getPointerDownForIdx: SB,
        getPointerUpForIdx: BI,
        getSetHovering: II,
        moveFollowerTo: TI,
        removeDraggedInfoRef: EB,
        dropFromIdx: oI,
        swapWithHotbar: GI
      }), (0, JB.useEffect)((() => {
        NB.l.Gq("inventoryDraggedItemUpdated", {
          draggedInfo: eB.current,
          specialItemInfo: uB.current,
          setHovered: II,
          pointerDown: SB,
          pointerUp: BI,
          variation: jB ? vB : void 0,
          craftFlyAnims: CB
        })
      })), (0, nB.jsxs)(PB.d, {
        show: ZB,
        style: {
          touchAction: ZB ? "none" : void 0
        },
        children: [eB.current && (0, nB.jsx)(gZ, {
          draggedInfo: eB.current,
          toAddRef: XB
        }), eB.current && bB && (0, nB.jsx)(qZ, {
          className: "DraggedInvenItemName",
          displayInfo: LT(eB.current),
          domRef: null
        }), !eB.current && tB && (0, nB.jsx)(qZ, {
          displayInfo: tB,
          domRef: fB
        }), lB.current && eB.current && (0, nB.jsx)(yZ, {
          info: lB.current,
          draggedInfo: eB.current
        }), CB.map((BB => (0, nB.jsx)(nZ.c, {
          anim: BB,
          onComplete: iB
        }, BB.id))), (0, nB.jsx)(GB.c, {
          show: ZB,
          className: "InventoryBackgroundScreen",
          globallyUniqueKey: "Inventory",
          close: HB,
          togglePointerLock: !1,
          closeOnPressBackground: !1,
          preventContextMenu: !0,
          pointerDown: SB(hZ.e),
          pointerUp: BI(hZ.e),
          doGameplayStartStopOnShow: !0
        }), WB && (0, nB.jsxs)("div", {
          className: "EntireInventoryWrapper",
          children: [(0, nB.jsx)("div", {
            ref: hB,
            className: "InventoryAdOuter",
            children: (0, nB.jsx)(kZ.c, {
              info: {
                adType: "leaderboard",
                adId: 6,
                adAlias: "inventory"
              },
              sizeInfo: {
                parentRef: hB
              },
              verticalAlign: "start",
              showing: ZB && FB,
              extraContrastBackgroundBox: "top",
              noFillShowBloxdAdProbability: 0,
              autoRefreshMode: "none"
            })
          }), (0, nB.jsxs)("div", {
            className: "InventoryWrapper",
            children: [(0, nB.jsxs)("div", {
              className: WZ()("Inventory", {
                WithGameButtons: gB.length > 0,
                WithPanelButtons: qB,
                WideChestOpen: UB
              }),
              children: [(0, nB.jsx)("div", {
                className: "InventoryFiller"
              }), (0, nB.jsx)(GZ, {
                show: ZB,
                buttons: gB
              }), (0, nB.jsxs)("div", {
                className: "InvenBody",
                children: [(0, nB.jsx)(wT, {
                  variation: vB,
                  canCraft: jB,
                  show: ZB,
                  creativeMounted: dB,
                  specialItemRef: uB,
                  draggedInfo: eB.current,
                  getSetHovering: II,
                  getPointerDownForIdx: SB,
                  getPointerUpForIdx: BI,
                  enchantingTablePosition: FI,
                  enchantingTableBlockName: gI,
                  selectedCraftable: hI,
                  dispatchSelectedCraftable: BB => {
                    zI(vB, BB)
                  },
                  creativeScrollDiv: pB,
                  creativeSearchVal: yI,
                  setCreativeSearchVal: UI,
                  creativeCategory: WI,
                  setCreativeCategory: dI,
                  onCraft: function(BB, IB) {
                    let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    if (DB(), (BB || ZB.length > 0) && sB((IB => {
                        const TB = [...IB],
                          JB = IB.filter((BB => "ingredient" === BB.kind)).length;
                        for (const BB of ZB.slice(0, Math.max(0, 24 - JB))) TB.push({
                          id: (0, nZ.f)(),
                          ...BB,
                          to: BB.to
                        });
                        return BB && TB.push({
                          id: (0, nZ.f)(),
                          ...BB,
                          to: (0, cZ.h)(BB.Dv)
                        }), TB
                      })), null !== IB) {
                      var TB;
                      const BB = cB.gameBridge.latest("inventory");
                      (0, OB.Cb)(null === (TB = (0, cZ.o)(BB, IB)) || void 0 === TB ? void 0 : TB.name) ? SB(IB)({
                        button: 0,
                        shiftKey: !0
                      }): VB(IB, BB.selectedSlot)
                    }
                  }
                }), (0, nB.jsx)(MT, {
                  draggedInfo: eB.current,
                  specialItemInfo: uB.current,
                  craftFlyAnims: CB,
                  getSetHovering: II,
                  getPointerDownForIdx: SB,
                  getPointerUpForIdx: BI,
                  variation: vB,
                  canCraft: jB,
                  isNewSlot: BB => RB.showNewItemIndicator && mB.isNew(BB)
                })]
              })]
            }), (0, nB.jsx)("div", {
              className: "InventoryAdOuter",
              children: (0, nB.jsx)("div", {
                ref: zB,
                className: "InventoryAd",
                children: (0, nB.jsx)("div", {
                  className: "InventoryAdInner"
                })
              })
            })]
          })]
        })]
      })
    }));
    var tT = ZB(1500),
      bT = ZB(140);
    const xT = (0, JB.memo)((function(BB) {
      let {
        show: IB,
        onOpen: ZB,
        onClose: TB
      } = BB;
      const oB = (0, JB.useRef)(0),
        vB = () => (0, tT.g)() && !(0, tT.l)() && oB.current <= 2;
      IB = vB() && IB;
      const kB = () => {
        oB.current++, TB()
      };
      (0, wB.d)("ctrlCrouchWithoutFullscreen", (() => {
        vB() && ZB()
      })), (0, wB.d)("displaymodeFullscreenChange", (BB => {
        IB && BB && kB()
      }));
      const cB = "crazygames" === bT.siteUsed;
      return (0, nB.jsx)(GB.c, {
        close: kB,
        escDoesExit: !0,
        show: IB,
        togglePointerLock: !1,
        globallyUniqueKey: "CantCtrlCrouchIfNotFullscreenComp",
        children: (0, nB.jsxs)("div", {
          className: "CantCtrlCrouchIfNotFullscreenComp SmallTextBold",
          children: [(0, nB.jsx)("div", {
            className: "CantCtrlCrouchHeader",
            children: "Go fullscreen to crouch with ctrl"
          }), cB && (0, nB.jsx)("div", {
            className: "CantCtrlCrouchInstructions SmallTextLight",
            children: "Press the crazygames full screen button"
          }), (0, nB.jsx)("div", {
            className: "CantCtrlCrouchSubtext SmallTextLight",
            children: "(Otherwise I can't stop CTRL+W closing the window!)"
          }), (0, nB.jsxs)("div", {
            className: "CantCtrlCrouchButtonsContainer",
            children: [!cB && (0, nB.jsx)(FB.p, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                (0, tT.r)(), kB()
              },
              children: (0, nB.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Go Fullscreen"
              })
            }), (0, nB.jsx)(FB.M, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                kB()
              },
              children: (0, nB.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Nevermind"
              })
            })]
          })]
        })
      })
    }));
    var ET = ZB(3768),
      DT = ZB(3794),
      KT = ZB(1403),
      VT = ZB(3750),
      ST = ZB(1412),
      BJ = ZB(36580),
      IJ = ZB(3763),
      ZJ = ZB(3766);

    function TJ(BB, IB) {
      return (0, BJ.d)(!0, BB, IB) ? () => {
        !async function(BB) {
          await VT.b.refresh();
          const {
            data: IB,
            failed: ZB
          } = VT.b.getState();
          if (null === IB || ZB) return;
          const TB = VT.b.getExclusion(BB);
          if ("blocked" === TB) return;
          const JB = null === TB;
          KT.NotificationProvider.showCustomPopup({
            body: IB => {
              const ZB = ZB => ({
                text: IJ.g[ZB].text,
                onClick: () => {
                  IB(), (0, ZJ.f)(ZB, BB, null)
                }
              });
              return (0, nB.jsx)(ST.f, {
                title: JB ? "socialBar:ignoreOrBlockAfterReport" : "socialBar:blockAfterReport",
                textOpts: {
                  title: {
                    playerName: BB
                  }
                },
                secondary: JB ? ZB("ignore") : void 0,
                confirm: ZB("block"),
                cancel: {
                  text: "socialBar:notNow",
                  onClick: IB
                },
                destructive: !0
              })
            },
            disableExitButton: !0,
            unlockPointerKey: "exclusionAfterReport"
          })
        }(BB)
      } : null
    }
    ZB(3782);
    const JJ = (0, JB.memo)((function(BB) {
      let {
        show: IB,
        onOpen: ZB,
        onClose: TB
      } = BB;
      const [oB, vB] = (0, JB.useState)(""), [kB, hB] = (0, JB.useState)(""), [zB, FB] = (0, JB.useState)(null), [NB, gB] = (0, JB.useState)(null), qB = (0, YB.j)("hiddenPlayerNames"), yB = {
        kind: "worldCodeLine",
        onSubmit: (BB, IB) => {
          TB(), cB.gameBridge.send("reportWorldCodeChat", {
            chatMsgId: NB,
            ov: BB,
            details: IB
          })
        }
      }, UB = {
        kind: "player",
        shownPlayerName: (0, II.e)(oB, qB),
        onSubmit: (BB, IB) => {
          TB(), (0, DT.b)({
            playerId: kB,
            playerName: oB,
            chatMsgId: NB,
            policyId: BB,
            details: IB,
            onAccepted: TJ(oB, qB)
          })
        }
      };
      return (0, wB.d)("OpenReportMenu", (BB => {
        let {
          playerEId: IB,
          playerName: TB,
          Xn: JB,
          serverChatMsgId: oB
        } = BB;
        hB(IB), vB(TB), FB(JB), gB(oB), ZB()
      })), (0, nB.jsx)(GB.c, {
        show: IB,
        close: TB,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeReportComponent",
        children: (0, nB.jsx)("div", {
          className: "ReportPanel",
          children: IB && (0, nB.jsx)(ET.b, {
            reported: null === kB ? yB : UB,
            chatMessage: zB,
            inGame: !0,
            onCancel: TB
          })
        })
      })
    }));
    var oJ = ZB(36869),
      GJ = ZB(3776);
    const vJ = {
        playerGone: "report:reportKeyPlayerGone",
        rateLimited: "report:reportKeyRateLimited",
        timedOut: "report:reportKeyTimedOut"
      },
      kJ = (0, JB.memo)((function(BB) {
        var IB, ZB;
        let {
          show: TB,
          onOpen: oB,
          onClose: vB
        } = BB;
        const {
          t: kB
        } = (0, EB.G)(), [hB, zB] = (0, JB.useState)(null), [NB, gB] = (0, JB.useState)(0);
        (0, wB.d)("OpenDiscordReportBox", (BB => {
          cB.gameBridge.send("requestDiscordReportKey", BB), zB(null), gB(0), oB()
        })), (0, wB.d)("setDiscordReportKey", zB);
        const qB = TB && null === hB;
        (0, JB.useEffect)((() => {
          if (!qB) return;
          const BB = setTimeout((() => {
            console.warn("No answer to a Discord report key request within 10000 ms"), zB({
              IG: null,
              ZG: "timedOut"
            })
          }), 1e4);
          return () => {
            clearTimeout(BB)
          }
        }), [qB]);
        const yB = null !== (IB = null === hB || void 0 === hB ? void 0 : hB.IG) && void 0 !== IB ? IB : null,
          UB = null !== (ZB = null === hB || void 0 === hB ? void 0 : hB.ZG) && void 0 !== ZB ? ZB : null;
        return (0, nB.jsx)(GB.c, {
          show: TB,
          close: vB,
          padShowsHud: !0,
          togglePointerLock: !1,
          escDoesExit: !0,
          className: "ReportBackgroundScreen",
          globallyUniqueKey: "MakeDiscordReportComponent",
          children: (0, nB.jsx)("div", {
            className: "ReportPanel",
            children: (0, nB.jsxs)(ST.f, {
              className: "ReportKeyBox",
              title: "report:discordReportTitle",
              subtitle: null === UB ? "report:discordReportDescription" : void 0,
              confirm: null === UB ? {
                text: "report:openDiscord",
                onClick: () => {
                  window.open(oJ.c, "_blank", "noreferrer")
                },
                padMouseOnly: !0
              } : void 0,
              cancel: {
                text: null === UB ? "general:cancel" : "general:ok",
                onClick: vB
              },
              padStartsOn: "cancel",
              children: [null !== UB && (0, nB.jsx)(GJ.d, {
                children: kB(vJ[UB])
              }), null === UB && (0, nB.jsxs)("div", {
                className: "ReportKeyRow",
                children: [(0, nB.jsx)("div", {
                  className: "ReportKeyInner",
                  children: null !== yB && void 0 !== yB ? yB : kB("report:loadingReportKey")
                }), (0, nB.jsx)(FB.g, {
                  className: "ReportKeyCopyButton",
                  onClick: () => {
                    navigator.clipboard.writeText(yB).catch((BB => {
                      console.error("Failed to copy report key:", BB)
                    })), gB(Date.now())
                  },
                  disabled: Date.now() - NB < 1e3 || !yB,
                  children: Date.now() - NB < 1e3 ? kB("general:copied") : kB("general:copy")
                })]
              })]
            })
          })
        })
      }));
    var cJ = ZB(1353);
    const nJ = {
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
      hJ = (0, JB.memo)((function(BB) {
        let {
          show: IB,
          onOpen: ZB,
          onClose: TB
        } = BB;
        const [oB, vB] = (0, JB.useState)(null), kB = (0, JB.useRef)(0), hB = (0, JB.useRef)(null), {
          t: zB
        } = (0, EB.G)();
        (0, wB.d)("EditCustomLobbyBlock", (BB => {
          let {
            pos: IB
          } = BB;
          vB(IB), null !== IB && ZB(), hB.current.scrollTo(0, kB.current)
        }));
        const FB = BB => {
          cB.gameBridge.send("setCustomLobbyBlock", {
            pos: oB,
            blockName: BB
          }), TB()
        };
        return (0, nB.jsx)(GB.c, {
          className: "CustomLobbyBlockEditorOuter",
          close: TB,
          escDoesExit: !0,
          show: IB,
          togglePointerLock: !1,
          globallyUniqueKey: "CustomLobbyBlockEditor",
          children: (0, nB.jsx)("div", {
            className: "CustomLobbyBlockEditor",
            ref: hB,
            onScroll: () => {
              kB.current = hB.current.scrollTop
            },
            children: (0, nB.jsx)("div", {
              className: "CustomLobbyBlockGameContainer",
              children: Object.entries(nJ).map((BB => {
                let [IB, ZB] = BB;
                return (0, nB.jsxs)("div", {
                  className: "CustomLobbyBlockGame",
                  children: [(0, nB.jsx)("h2", {
                    className: "CustomLobbyBlockGameTitle",
                    children: zB(IB)
                  }), (0, nB.jsx)("div", {
                    className: "CustomLobbyBlockCategoryContainer",
                    children: Object.entries(ZB).map((BB => {
                      let [IB, {
                        tooltip: ZB,
                        blocks: TB
                      }] = BB;
                      return (0, nB.jsxs)("div", {
                        className: "CustomLobbyBlockCategory",
                        children: [(0, nB.jsxs)("h3", {
                          className: "CustomLobbyBlockCategoryTitle",
                          children: [zB(IB), (0, nB.jsx)(bB.d, {
                            hoverInfo: zB(ZB),
                            className: "CustomLobbyBlockTooltip"
                          })]
                        }), (0, nB.jsx)("div", {
                          className: "CustonLobbyBlockContainer",
                          children: TB.map((BB => (0, nB.jsx)(zJ, {
                            blockName: BB,
                            selectBlock: FB
                          }, BB)))
                        })]
                      }, IB)
                    }))
                  })]
                }, IB)
              }))
            })
          })
        })
      })),
      zJ = (0, JB.memo)((function(BB) {
        var IB;
        let {
          blockName: ZB,
          selectBlock: TB
        } = BB;
        const JB = (0, GT.c)(ZB),
          oB = null !== (IB = void 0 === JB ? void 0 : (0, oT.displayNameOf)(JB)) && void 0 !== IB ? IB : ZB,
          GB = void 0 === JB ? void 0 : (0, oT.descriptionOf)(JB);
        return (0, nB.jsx)(bB.e, {
          tooltipInner: (0, nB.jsxs)("div", {
            className: "CustomLobbyBlockNameTooltip",
            children: [(0, nB.jsx)("div", {
              className: "CustomLobbyBlockName",
              children: (0, nB.jsx)(sB.e, {
                text: oB
              })
            }), GB && (0, nB.jsx)("div", {
              className: "CustomLobbyBlockDescription",
              children: (0, nB.jsx)(sB.e, {
                text: GB
              })
            })]
          }),
          children: (0, nB.jsx)("div", {
            className: "CustomLobbyBlockButton",
            onClick: () => TB(ZB),
            children: (0, nB.jsx)(oZ.e, {
              itemName: ZB,
              amount: 1
            })
          })
        }, ZB)
      }));
    var FJ = ZB(3171),
      NJ = ZB(4405),
      gJ = ZB(34230);

    function qJ() {
      const BB = (0, YB.j)("itemInfo");
      return (0, JB.useMemo)((() => function(BB) {
        return {
          getDefaultItemStat(IB, ZB) {
            var TB;
            const JB = BB[IB];
            return "description" === ZB ? null === JB || void 0 === JB ? void 0 : JB.description : null !== (TB = null === JB || void 0 === JB ? void 0 : JB.displayName) && void 0 !== TB ? TB : IB
          }
        }
      }(BB)), [BB])
    }
    const yJ = (0, JB.memo)((function(BB) {
        var IB, ZB, TB, oB, vB, kB, cB, hB, zB, FB, NB, gB, yB, UB, WB, dB, CB, QB, sB, OB, YB, iB, pB;
        let {
          togglePointerLock: aB,
          show: HB,
          onOpen: MB,
          onClose: jB
        } = BB;
        const {
          t: PB
        } = (0, EB.G)(), RB = qJ(), rB = (0, JB.useRef)(null), mB = (0, JB.useRef)(NJ.d.MobHungerLevel.Hungry), XB = (0, JB.useRef)(null), LB = (0, FJ.d)(), eB = (0, JB.useRef)(null), uB = (0, JB.useRef)(null), fB = rB.current;
        (0, JB.useEffect)((() => {
          if (!HB) return;
          const BB = gJ.i.openPet(eB.current);
          return uB.current = BB, () => {
            BB.close(), uB.current = null
          }
        }), [HB]), (0, JB.useEffect)((() => {
          HB && fB && uB.current.show(function(BB) {
            var IB;
            let {
              mobType: ZB,
              mobSettings: TB
            } = BB;
            return {
              mobType: ZB,
              variation: null !== (IB = TB.variation) && void 0 !== IB ? IB : "default",
              metaInfo: TB.metaInfo,
              tamed: !(0, UT.L)(TB.ownerDbId)
            }
          }(fB))
        }), [HB, fB]), (0, JB.useEffect)((() => {
          const BB = () => {
            var BB;
            const IB = NJ.d.getMobHungerLevel(null === (BB = rB.current) || void 0 === BB ? void 0 : BB.mobSettings.petInfo.lastFedAt);
            if (IB !== mB.current && (mB.current = IB, LB()), XB.current) {
              var ZB;
              const BB = Date.now(),
                IB = NJ.d.getNextStateAt(null === (ZB = rB.current) || void 0 === ZB ? void 0 : ZB.mobSettings.petInfo.lastFedAt);
              let TB = Math.floor((IB - BB) / 1e3),
                JB = "";
              if (TB > 3600) {
                JB += Math.floor(TB / 60 / 60).toString().padStart(2, "0"), JB += ":", TB %= 3600
              }
              const oB = TB % 60;
              JB += Math.floor(TB / 60).toString().padStart(2, "0"), JB += ":", JB += oB.toString().padStart(2, "0"), XB.current.textContent = JB
            }
          };
          BB();
          const IB = setInterval(BB, 250);
          return () => {
            clearInterval(IB)
          }
        }), [fB, LB]), (0, wB.d)("showPetUi", (BB => {
          let {
            mobType: IB,
            mobSettings: ZB
          } = BB;
          rB.current = {
            mobType: IB,
            mobSettings: ZB
          }, HB || MB()
        }));
        const lB = null === (IB = rB.current) || void 0 === IB ? void 0 : IB.mobSettings.health,
          AB = null === (ZB = rB.current) || void 0 === ZB ? void 0 : ZB.mobSettings.maxHealth,
          tB = NJ.d.getFriendshipLevelInfo(null !== (TB = null === (oB = rB.current) || void 0 === oB ? void 0 : oB.mobSettings.petInfo.friendshipPoints) && void 0 !== TB ? TB : 0);
        return (0, nB.jsx)(GB.c, {
          className: "PetUIOuter",
          close: jB,
          escDoesExit: !0,
          show: HB,
          togglePointerLock: aB,
          forcePointerUnlock: HB,
          globallyUniqueKey: "PetUI",
          children: (0, nB.jsx)("div", {
            className: "PetUI",
            children: (0, nB.jsxs)("div", {
              className: "PetUIContainer",
              children: [(0, nB.jsxs)("div", {
                className: "PetUILeftSideContainer",
                children: [(0, nB.jsx)("div", {
                  className: "PetUITitle",
                  children: null !== (vB = null === (kB = rB.current) || void 0 === kB ? void 0 : kB.mobSettings.name) && void 0 !== vB ? vB : "Your Pet"
                }), (0, nB.jsx)("div", {
                  className: "PetUICanvasContainer",
                  ref: eB
                })]
              }), (0, nB.jsxs)("div", {
                className: "PetUIInformation",
                children: [!(0, UT.L)(null === (cB = rB.current) || void 0 === cB ? void 0 : cB.mobSettings.petInfo.friendshipPoints) && (0, nB.jsxs)("div", {
                  className: "PetUIFriendshipPoints",
                  children: [(0, nB.jsx)("div", {
                    className: "PetUIFriendshipPointsTitle",
                    children: PB("mobAiPlugin:friendshipTitle")
                  }), (0, nB.jsx)("div", {
                    className: "PetUIFriendshipHearts",
                    children: NJ.d.getIconsFromFriendshipPoints(null !== (hB = rB.current.mobSettings.petInfo.friendshipPoints) && void 0 !== hB ? hB : 0).map(((BB, IB) => (0, nB.jsx)("div", {
                      className: "PetUIFriendshipHeart",
                      children: (0, nB.jsx)(oZ.e, {
                        itemName: BB,
                        amount: 1
                      })
                    }, IB)))
                  }), (0, nB.jsx)("div", {
                    className: "PetUIFriendshipBar",
                    children: (0, nB.jsxs)("div", {
                      className: "PetUIFriendshipBarBackground",
                      children: [(0, nB.jsx)("div", {
                        className: "PetUIFriendshipBarForeground",
                        style: {
                          transform: `scaleX(${tB.totalPointsForNextLevel>0?Math.max(tB.pointsIntoCurrentLevel/tB.totalPointsForNextLevel,0):1})`,
                          transformOrigin: "left center"
                        }
                      }), (0, nB.jsx)("div", {
                        className: "PetUIFriendshipBarText",
                        children: tB.totalPointsForNextLevel > 0 ? ` ${Math.ceil(tB.pointsIntoCurrentLevel)}/${Math.ceil(tB.totalPointsForNextLevel)}` : Math.ceil(tB.pointsIntoCurrentLevel)
                      })]
                    })
                  })]
                }), (0, nB.jsxs)("div", {
                  className: "PetUIHungry",
                  children: [(0, nB.jsx)("div", {
                    className: "PetUIHungryTitle",
                    children: PB("mobAiPlugin:hungerTitle")
                  }), (0, nB.jsx)("div", {
                    className: "PetUIHungryCurrent",
                    children: NJ.d.hungerLevelIcons[mB.current].map(((BB, IB) => (0, nB.jsx)("div", {
                      className: "PetUIHungryIcon",
                      children: (0, nB.jsx)(oZ.e, {
                        itemName: BB,
                        amount: 1
                      })
                    }, IB)))
                  }), (0, nB.jsxs)("div", {
                    className: "PetUIHungryLevel",
                    children: [PB(NJ.d.hungerLevelTranslations[mB.current].translationKey), mB.current !== NJ.d.MobHungerLevel.Starving && !(0, UT.L)(null === (zB = rB.current) || void 0 === zB ? void 0 : zB.mobSettings.petInfo.lastFedAt) && (0, nB.jsxs)("div", {
                      className: "PetUIHungryNext",
                      children: [PB("mobAiPlugin:nextFeedIn", {
                        state: PB(NJ.d.hungerLevelTranslations[mB.current + 1].translationKey)
                      }), ":", " ", (0, nB.jsx)("span", {
                        ref: XB
                      })]
                    })]
                  })]
                }), (0, nB.jsx)(bB.e, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, nB.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: PB("mobAiPlugin:healthTooltip")
                  }),
                  children: (0, nB.jsxs)("div", {
                    className: WZ()("PetUIQuickStatsItem", {
                      Disabled: (0, UT.L)(lB) || (0, UT.L)(AB)
                    }),
                    children: [(0, nB.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, nB.jsx)(oZ.e, {
                        itemName: "Health",
                        amount: 1
                      })
                    }), (0, nB.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (0, UT.L)(lB) || (0, UT.L)(AB) ? "" : (0, nB.jsxs)(nB.Fragment, {
                        children: [Math.ceil(lB), (0, nB.jsxs)("span", {
                          className: "PetUIQuickStatsValueMax",
                          children: ["/", Math.ceil(AB)]
                        })]
                      })
                    })]
                  })
                }), (0, nB.jsx)(bB.e, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, nB.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: PB("mobAiPlugin:attackDamageTooltip")
                  }),
                  children: (0, nB.jsxs)("div", {
                    className: WZ()("PetUIQuickStatsItem", {
                      Disabled: (0, UT.L)(null === (FB = rB.current) || void 0 === FB ? void 0 : FB.mobSettings.attackDamage) || rB.current.mobSettings.attackDamage <= 0
                    }),
                    children: [(0, nB.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, nB.jsx)(oZ.e, {
                        itemName: "Iron Sword",
                        amount: 1
                      })
                    }), (0, nB.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (NB = rB.current) || void 0 === NB ? void 0 : NB.mobSettings.attackDamage) || ""
                    })]
                  })
                }), (0, nB.jsx)(bB.e, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, nB.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: PB("mobAiPlugin:secondaryAttackDamageTooltip")
                  }),
                  children: (0, nB.jsxs)("div", {
                    className: WZ()("PetUIQuickStatsItem", {
                      Disabled: (0, UT.L)(null === (gB = rB.current) || void 0 === gB ? void 0 : gB.mobSettings.secondaryAttackDamage) || rB.current.mobSettings.secondaryAttackDamage <= 0
                    }),
                    children: [(0, nB.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, nB.jsx)(oZ.e, {
                        itemName: "Stone Crossbow",
                        amount: 1
                      })
                    }), (0, nB.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (yB = rB.current) || void 0 === yB ? void 0 : yB.mobSettings.secondaryAttackDamage) || ""
                    })]
                  })
                }), (0, nB.jsx)(bB.e, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, nB.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: PB("mobAiPlugin:speedTooltip")
                  }),
                  children: (0, nB.jsxs)("div", {
                    className: WZ()("PetUIQuickStatsItem", {
                      Disabled: (0, UT.L)(null === (UB = rB.current) || void 0 === UB ? void 0 : UB.mobSettings.baseRunningSpeed)
                    }),
                    children: [(0, nB.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, nB.jsx)(oZ.e, {
                        itemName: "Speed",
                        amount: 1
                      })
                    }), (0, nB.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: null !== (WB = null === (dB = rB.current) || void 0 === dB || null === (CB = dB.mobSettings.baseRunningSpeed) || void 0 === CB ? void 0 : CB.toFixed(2)) && void 0 !== WB ? WB : ""
                    })]
                  })
                }), (0, nB.jsx)(bB.e, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, nB.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: PB("mobAiPlugin:saddledTooltip")
                  }),
                  children: (0, nB.jsxs)("div", {
                    className: WZ()("PetUIQuickStatsItem", {
                      Disabled: "Saddled" !== (null === (QB = rB.current) || void 0 === QB ? void 0 : QB.mobSettings.metaInfo)
                    }),
                    children: [(0, nB.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, nB.jsx)(oZ.e, {
                        itemName: "Saddle",
                        amount: 1
                      })
                    }), (0, nB.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: "Saddled" === (null === (sB = rB.current) || void 0 === sB ? void 0 : sB.mobSettings.metaInfo) ? (0, nB.jsx)(qB.d, {
                        name: "check"
                      }) : ""
                    })]
                  })
                }), !(0, UT.L)(null === (OB = rB.current) || void 0 === OB ? void 0 : OB.mobSettings.tameInfo) && (0, nB.jsxs)(nB.Fragment, {
                  children: [(0, nB.jsxs)("div", {
                    className: "PetUIFood",
                    children: [(0, nB.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, nB.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, nB.jsx)(WJ, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:superlikedFoodTitle"
                          },
                          description: null,
                          tintColor: NJ.d.feedTextColours[NJ.d.MobFoodType.Superliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, nB.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: (0, nB.jsx)("div", {
                          className: "PetUIFoodItem",
                          children: rB.current.mobSettings.petInfo.superlikedFoodKnown ? (0, nB.jsx)(UJ, {
                            food: rB.current.mobSettings.petInfo.superlikedFood
                          }) : (0, nB.jsx)(WJ, {
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
                    }), (0, nB.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, nB.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, nB.jsx)(WJ, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:likedFoodTitle"
                          },
                          description: null,
                          tintColor: NJ.d.feedTextColours[NJ.d.MobFoodType.Liked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, nB.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (YB = rB.current.mobSettings.tameInfo.likedFoods) || void 0 === YB ? void 0 : YB.filter((BB => !rB.current.mobSettings.petInfo.superlikedFoodKnown || BB !== rB.current.mobSettings.petInfo.superlikedFood)).map((BB => (0, nB.jsx)(UJ, {
                          food: BB
                        }, BB)))
                      })]
                    }), (0, nB.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, nB.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, nB.jsx)(WJ, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:neutralFoodTitle"
                          },
                          description: null,
                          tintColor: NJ.d.feedTextColours[NJ.d.MobFoodType.Neutral],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, nB.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (iB = rB.current.mobSettings.tameInfo.neutralFoods) || void 0 === iB ? void 0 : iB.map((BB => (0, nB.jsx)(UJ, {
                          food: BB
                        }, BB)))
                      })]
                    }), (0, nB.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, nB.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, nB.jsx)(WJ, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:dislikedFoodTitle"
                          },
                          description: null,
                          tintColor: NJ.d.feedTextColours[NJ.d.MobFoodType.Disliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, nB.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (pB = rB.current.mobSettings.tameInfo.dislikedFoods) || void 0 === pB ? void 0 : pB.map((BB => (0, nB.jsx)(UJ, {
                          food: BB
                        }, BB)))
                      })]
                    })]
                  }), rB.current.mobSettings.tameInfo.levelUpBonuses && (0, nB.jsx)("div", {
                    className: "PetUIFeedDrops",
                    children: Array.from({
                      length: NJ.d.MAX_LEVEL + 1
                    }).map(((BB, IB) => {
                      const ZB = IB;
                      if (0 === ZB) return null;
                      const TB = rB.current.mobSettings.tameInfo.levelUpBonuses[ZB],
                        JB = NJ.d.getBonusDisplayInfo(RB, rB.current.mobSettings, rB.current.mobType, TB);
                      return (0, nB.jsxs)("div", {
                        className: WZ()("PetUIFeedDropContainer", {
                          Selected: ZB === NJ.d.getFriendshipLevelInfo(rB.current.mobSettings.petInfo.friendshipPoints).level
                        }),
                        children: [(0, nB.jsx)("div", {
                          className: "PetUIFeedDropHearts",
                          children: Array.from({
                            length: ZB
                          }).map(((BB, IB) => (0, nB.jsx)("div", {
                            className: "PetUIFeedDropHeart",
                            children: (0, nB.jsx)(oZ.e, {
                              itemName: "Friendship",
                              amount: 1
                            })
                          }, `${ZB}-${IB}`)))
                        }), (0, nB.jsx)("div", {
                          className: "PetUIFeedDropItems",
                          children: JB && (0, nB.jsx)(WJ, {
                            icon: JB.icon,
                            displayName: JB.displayName,
                            description: JB.description
                          })
                        })]
                      }, ZB)
                    }))
                  })]
                })]
              })]
            })
          })
        })
      })),
      UJ = (0, JB.memo)((function(BB) {
        let {
          food: IB,
          includeDescription: ZB = !1
        } = BB;
        const TB = qJ(),
          JB = TB.getDefaultItemStat(IB, "displayName"),
          oB = TB.getDefaultItemStat(IB, "description");
        return (0, nB.jsx)(WJ, {
          icon: IB,
          displayName: JB,
          description: ZB ? oB : null
        })
      })),
      WJ = (0, JB.memo)((function(BB) {
        let {
          icon: IB,
          displayName: ZB,
          description: TB,
          tintColor: JB,
          className: oB = "PetUIFoodItem"
        } = BB;
        return (0, nB.jsx)(bB.e, {
          delayHide: 0,
          delayShow: 0,
          tooltipInner: (0, nB.jsxs)("div", {
            className: "PetUIFoodItemTooltip",
            children: [(0, nB.jsx)("div", {
              className: "PetUIFoodItemName",
              children: (0, nB.jsx)(sB.e, {
                text: ZB
              })
            }), TB && (0, nB.jsx)("div", {
              className: "PetUIFoodItemDescription",
              children: (0, nB.jsx)(sB.e, {
                text: TB
              })
            })]
          }),
          children: (0, nB.jsx)("div", {
            className: oB,
            children: (0, nB.jsx)(oZ.e, {
              itemName: IB,
              amount: 1,
              tintColor: JB
            })
          })
        })
      }));
    var dJ = ZB(3911),
      CJ = ZB(1186),
      QJ = ZB(1300),
      sJ = ZB(2518),
      wJ = ZB(36881),
      OJ = ZB(1058),
      YJ = ZB(2460);

    function iJ(BB) {
      let {
        peers: IB
      } = BB;
      const [ZB, TB] = (0, JB.useState)(null), oB = (0, YB.j)("players");
      return (0, nB.jsx)("div", {
        className: "CodeEditorPresence",
        children: IB.map((BB => {
          var IB, JB;
          const GB = null !== (IB = null === (JB = oB.byId[BB.playerId]) || void 0 === JB ? void 0 : JB.cosmetics) && void 0 !== IB ? IB : {};
          return (0, nB.jsxs)("div", {
            className: WZ()("PresenceIcon", {
              Viewer: !BB.isEditor
            }),
            style: {
              backgroundColor: BB.colour
            },
            onMouseEnter: () => {
              TB(BB.playerId)
            },
            onMouseLeave: () => {
              TB(null)
            },
            children: [(0, nB.jsx)(YJ.b, {
              cosmetics: GB
            }), ZB === BB.playerId && (0, nB.jsx)("div", {
              className: "PresenceTooltip",
              style: {
                backgroundColor: BB.colour
              },
              children: BB.playerName
            })]
          }, BB.playerId)
        }))
      })
    }
    var pJ = ZB(694),
      aJ = ZB(36878),
      HJ = ZB(36573),
      MJ = ZB(36887);

    function jJ(BB) {
      const IB = BB.split("/"),
        ZB = [];
      for (let TB = 1; TB < IB.length; TB++) ZB.push(IB.slice(0, TB).join("/"));
      return ZB
    }

    function PJ(BB) {
      return BB.slice(BB.lastIndexOf("/") + 1)
    }
    const RJ = (0, JB.memo)((function(BB) {
      var IB;
      let {
        files: ZB,
        activePath: TB,
        canEdit: oB,
        directoryLinked: GB,
        pluginNames: vB,
        activePluginName: kB,
        activePluginFile: cB,
        onSelect: hB,
        onSelectPlugin: zB,
        onCreate: NB,
        onRename: gB,
        onRenameFolder: yB,
        onDelete: UB,
        onToggleDirectorySync: WB,
        schematics: dB,
        onManageSchematic: CB
      } = BB;
      const {
        t: QB
      } = (0, EB.G)(), sB = null !== (IB = (0, wJ.b)(ZB)) && void 0 !== IB ? IB : QJ.i, wB = Object.keys(ZB), [OB, YB] = (0, JB.useState)((() => new Set)), iB = function(BB, IB, ZB) {
        const TB = {
          folders: new Map,
          files: []
        };
        for (const GB of BB) {
          if (GB === IB) continue;
          let BB = TB;
          for (const IB of jJ(GB)) {
            let ZB = BB.folders.get(IB);
            ZB || (ZB = {
              folders: new Map,
              files: []
            }, BB.folders.set(IB, ZB)), BB = ZB
          }
          BB.files.push(GB)
        }
        const JB = [];
        BB.includes(IB) && JB.push({
          kind: "file",
          path: IB,
          name: PJ(IB),
          depth: 0
        });
        const oB = (BB, IB) => {
          const TB = [...BB.folders.entries()].sort(((BB, IB) => {
            let [ZB] = BB, [TB] = IB;
            return ZB.localeCompare(TB)
          }));
          for (const [GB, vB] of TB) {
            const BB = ZB.has(GB);
            JB.push({
              kind: "folder",
              path: GB,
              name: PJ(GB),
              depth: IB,
              collapsed: BB
            }), BB || oB(vB, IB + 1)
          }
          BB.files.sort(((BB, IB) => BB.localeCompare(IB)));
          for (const ZB of BB.files) JB.push({
            kind: "file",
            path: ZB,
            name: PJ(ZB),
            depth: IB
          })
        };
        return oB(TB, 0), JB
      }(wB, sB, OB);
      (0, JB.useEffect)((() => {
        YB((BB => {
          const IB = new Set(BB);
          let ZB = !1;
          for (const JB of jJ(TB)) ZB = IB.delete(JB) || ZB;
          return ZB ? IB : BB
        }))
      }), [TB]);
      const pB = wB.length >= uI.B,
        aB = (BB, IB) => {
          if (BB.length > sJ.x) return `Path must be at most ${sJ.x} characters`;
          if (!(0, sJ.v)(BB)) return "Use a relative .js, .ts, or .d.ts path, e.g. lib/util.js";
          if ("index.d.ts" === BB) return "index.d.ts cannot be the world-code entry";
          const TB = !!IB && (0, wJ.c)(IB, BB);
          if (IB && (0, wJ.g)(IB) && !TB) return `Cannot rename ${IB} (only swapping ${QJ.i} and ${QJ.m} is allowed)`;
          if (BB in ZB) return "A file with that path already exists";
          if ((0, wJ.g)(BB) && !TB) {
            if ((BB === QJ.i ? QJ.m : QJ.i) in ZB) return `World code cannot have both ${QJ.i} and ${QJ.m}`
          }
          return null
        },
        HB = BB => {
          KT.NotificationProvider.showInputPopup({
            title: "codeEditor:newFile",
            subtitle: "codeEditor:newFilePathHint",
            placeholderText: "lib/util.js",
            initialValue: void 0 === BB ? void 0 : `${BB}/`,
            submitText: "general:create",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: BB => aB(BB)
          }).getResult().then((BB => {
            "notificationTornDown" !== BB && null !== BB && "submit" === BB.type && NB(BB.value)
          }))
        },
        MB = BB => {
          KT.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFile",
            subtitle: "codeEditor:newFilePathHint",
            initialValue: BB,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: IB => IB === BB ? "That is already the file's path" : aB(IB, BB)
          }).getResult().then((IB => {
            "notificationTornDown" !== IB && null !== IB && "submit" === IB.type && gB(BB, IB.value)
          }))
        },
        jB = BB => {
          const IB = BB => BB.replace(/\/+$/, "");
          KT.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFolder",
            subtitle: "codeEditor:renameFolderHint",
            initialValue: BB,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: ZB => {
              const TB = IB(ZB);
              if (TB === BB) return "That is already the folder's path";
              for (const [IB, JB] of(0, wJ.l)(wB, BB, TB)) {
                const BB = aB(JB, IB);
                if (null !== BB) return BB
              }
              return null
            }
          }).getResult().then((ZB => {
            "notificationTornDown" !== ZB && null !== ZB && "submit" === ZB.type && yB(BB, IB(ZB.value))
          }))
        },
        PB = BB => {
          KT.NotificationProvider.showPromptPopup({
            title: "codeEditor:deleteFile",
            subtitle: "codeEditor:deleteFileConfirm",
            textOpts: {
              subtitle: {
                path: BB
              }
            },
            confirmText: "general:delete",
            destructive: !0,
            cancelText: "general:cancel"
          }).getResult().then((IB => {
            !0 === IB && UB(BB)
          }))
        };
      return (0, nB.jsxs)("div", {
        className: "CodeEditorFileTree",
        children: [(0, nB.jsxs)("div", {
          className: "FileTreeHeader",
          children: [(0, nB.jsx)("span", {
            children: "Files"
          }), oB && !pB && (0, nB.jsx)(FB.s, {
            className: "FileTreeHeaderButton",
            onClick: () => {
              HB()
            },
            children: (0, nB.jsx)(qB.d, {
              name: "plus"
            })
          })]
        }), (0, nB.jsxs)("div", {
          className: "FileTreeList",
          children: [iB.map((BB => {
            const IB = BB.path;
            if ("folder" === BB.kind) return (0, nB.jsx)(XJ, {
              path: IB,
              name: BB.name,
              depth: BB.depth,
              collapsed: BB.collapsed,
              onToggle: () => {
                var BB;
                BB = IB, YB((IB => {
                  const ZB = new Set(IB);
                  return ZB.delete(BB) || ZB.add(BB), ZB
                }))
              },
              canCreate: oB && !pB,
              canRename: oB,
              onCreate: HB,
              onRename: jB
            }, `folder:${IB}`);
            const JB = (0, wJ.g)(IB),
              GB = QJ.i in ZB && QJ.m in ZB,
              vB = !JB || GB,
              cB = null === kB && IB === TB;
            return (0, nB.jsx)(eJ, {
              path: IB,
              label: BB.name,
              depth: BB.depth,
              isActive: cB,
              canRename: oB,
              onSelect: hB,
              onRename: MB,
              onDelete: PB,
              canDelete: vB && oB
            }, IB)
          })), (0, nB.jsxs)("div", {
            className: "FileTreeHeader Secondary",
            children: [(0, nB.jsxs)("span", {
              children: ["Schematics (", Object.keys(dB).length, "/", MJ.h, ")"]
            }), oB && (0, nB.jsx)(FB.s, {
              className: "FileTreeHeaderButton",
              disabled: Object.keys(dB).length >= MJ.h,
              onClick: () => {
                CB("")
              },
              children: (0, nB.jsx)(qB.d, {
                name: "plus"
              })
            })]
          }), Object.keys(dB).sort().map((BB => (0, nB.jsx)(eJ, {
            path: BB,
            isActive: !1,
            canRename: !1,
            canDelete: !1,
            onSelect: CB
          }, BB))), vB.length > 0 && (0, nB.jsxs)(nB.Fragment, {
            children: [(0, nB.jsx)("div", {
              className: "FileTreeHeader Secondary",
              children: (0, nB.jsx)("span", {
                children: "Plugins"
              })
            }), vB.map((BB => {
              var IB;
              const ZB = aJ.e[BB],
                TB = Object.keys(null !== (IB = null === ZB || void 0 === ZB ? void 0 : ZB.files) && void 0 !== IB ? IB : {
                  "index.ts": ""
                }).sort(((BB, IB) => "index.ts" === BB ? -1 : "index.ts" === IB ? 1 : BB.localeCompare(IB)));
              return (0, nB.jsxs)("div", {
                children: [(0, nB.jsx)("div", {
                  className: "FileTreePluginName",
                  children: (0, wJ.v)(BB)
                }), TB.map((IB => (0, nB.jsx)(eJ, {
                  path: IB,
                  nested: !0,
                  isActive: kB === BB && cB === IB,
                  canRename: !1,
                  onSelect: () => {
                    zB(BB, IB)
                  },
                  canDelete: !1
                }, IB)))]
              }, BB)
            }))]
          })]
        }), (0, nB.jsx)("div", {
          className: "FileTreeFooter",
          children: (0, nB.jsx)(FB.g, {
            className: "FileTreeFooterButton",
            onClick: WB,
            children: QB(GB ? "codeEditor:directorySyncUnlink" : "codeEditor:directorySyncLink")
          })
        })]
      })
    }));

    function rJ(BB) {
      return BB > 0 ? {
        className: "Indented",
        style: {
          "--tree-depth": BB
        }
      } : {
        className: void 0,
        style: void 0
      }
    }

    function mJ(BB) {
      let {
        depth: IB
      } = BB;
      return (0, nB.jsx)(nB.Fragment, {
        children: Array.from({
          length: IB
        }, ((BB, IB) => (0, nB.jsx)("span", {
          className: "FileTreeIndentGuide",
          style: {
            "--guide-level": IB
          }
        }, IB)))
      })
    }

    function XJ(BB) {
      let {
        path: IB,
        name: ZB,
        depth: TB,
        collapsed: JB,
        onToggle: oB,
        canCreate: GB,
        canRename: vB,
        onCreate: kB,
        onRename: cB
      } = BB;
      const hB = [];
      GB && hB.push({
        icon: "plus",
        text: "codeEditor:newFile",
        onPointerDown: () => {
          kB(IB)
        }
      }), vB && hB.push({
        icon: "pen",
        text: "codeEditor:renameFolder",
        onPointerDown: () => {
          cB(IB)
        }
      });
      const zB = rJ(TB);
      return (0, nB.jsxs)("div", {
        className: WZ()("FileTreeItem FileTreeFolder", zB.className),
        style: zB.style,
        children: [(0, nB.jsx)(mJ, {
          depth: TB
        }), (0, nB.jsxs)("button", {
          type: "button",
          className: "FileTreeItemName",
          "aria-expanded": !JB,
          onClick: oB,
          children: [(0, nB.jsx)(qB.d, {
            className: "FileTreeFolderCaret",
            name: JB ? "caret-right" : "caret-down"
          }), (0, nB.jsx)(qB.d, {
            className: "FileTreeFolderIcon",
            name: JB ? "folder" : "folder-open"
          }), ZB]
        }), (0, nB.jsx)(LJ, {
          path: IB,
          actions: hB
        })]
      })
    }

    function LJ(BB) {
      let {
        path: IB,
        actions: ZB
      } = BB;
      const TB = (0, JB.useRef)(null);
      return 0 === ZB.length ? null : (0, nB.jsxs)("div", {
        ref: TB,
        className: "FileTreeItemActions",
        children: [(0, nB.jsx)("button", {
          type: "button",
          className: "FileTreeActionMenuButton",
          "aria-label": `Actions for ${IB}`,
          children: (0, nB.jsx)(qB.d, {
            name: "ellipsis"
          })
        }), (0, nB.jsx)(HJ.b, {
          triggerElementRef: TB,
          options: ZB
        })]
      })
    }

    function eJ(BB) {
      let {
        path: IB,
        label: ZB = IB,
        depth: TB = 0,
        isActive: JB,
        canRename: oB,
        onSelect: GB,
        onRename: vB,
        onDelete: kB,
        canDelete: cB,
        nested: hB
      } = BB;
      const zB = [];
      oB && vB && zB.push({
        icon: "pen",
        text: "codeEditor:rename",
        onPointerDown: () => {
          vB(IB)
        }
      }), cB && kB && zB.push({
        icon: "xmark",
        text: "general:delete",
        onPointerDown: () => {
          kB(IB)
        }
      });
      const FB = rJ(TB);
      return (0, nB.jsxs)("div", {
        className: WZ()("FileTreeItem", FB.className, {
          Active: JB,
          Nested: hB
        }),
        style: FB.style,
        children: [(0, nB.jsx)(mJ, {
          depth: TB
        }), (0, nB.jsx)("button", {
          type: "button",
          className: "FileTreeItemName",
          title: ZB === IB ? void 0 : IB,
          onClick: () => {
            GB(IB)
          },
          children: ZB
        }), (0, nB.jsx)(LJ, {
          path: IB,
          actions: zB
        })]
      })
    }
    async function uJ(BB) {
      const IB = (0, wJ.b)(BB);
      if (!IB || "" === BB[IB].trim()) return [];
      const {
        collectImportedWorldCodePluginNames: TB
      } = await Promise.all([ZB.e(303), ZB.e(304)]).then((() => ZB(41507)));
      return (0, aJ.d)(TB(BB))
    }
    var fJ = ZB(36895);

    function lJ(BB, IB) {
      const ZB = Object.keys(BB),
        TB = Object.keys(IB);
      if (ZB.length !== TB.length) return !1;
      for (const JB of ZB)
        if (!(JB in IB) || BB[JB] !== IB[JB]) return !1;
      return !0
    }

    function AJ(BB, IB) {
      const ZB = [],
        TB = [],
        JB = [];
      for (const oB of Object.keys(IB)) oB in BB ? BB[oB] !== IB[oB] && JB.push(oB) : ZB.push(oB);
      for (const oB of Object.keys(BB)) oB in IB || TB.push(oB);
      return ZB.sort(), TB.sort(), JB.sort(), {
        creates: ZB,
        deletes: TB,
        updates: JB
      }
    }

    function tJ(BB, IB) {
      var ZB;
      const TB = {
          ...BB
        },
        JB = (0, wJ.b)(IB),
        oB = (0, wJ.b)(TB);
      if (QJ.i in TB && QJ.m in TB) {
        const BB = null !== JB && void 0 !== JB ? JB : QJ.m,
          ZB = BB === QJ.i ? QJ.m : QJ.i;
        var GB;
        if (!(BB in TB)) TB[BB] = null !== (GB = IB[BB]) && void 0 !== GB ? GB : "";
        return delete TB[ZB], TB
      }
      var vB;
      return JB && !(JB in TB) ? (oB || (TB[JB] = null !== (vB = IB[JB]) && void 0 !== vB ? vB : ""), TB) : (oB || JB || (TB[QJ.i] = null !== (ZB = TB[QJ.i]) && void 0 !== ZB ? ZB : "", delete TB[QJ.m]), TB)
    }

    function bJ(BB, IB) {
      const ZB = (0, wJ.b)(IB),
        TB = QJ.i in IB && QJ.m in IB;
      return BB.filter((BB => !(0, wJ.g)(BB) || (!!TB || ZB !== BB)))
    }
    async function xJ(BB, IB, TB) {
      const JB = BB.getLobbyFiles(),
        oB = (0, uI.l)(TB, (0, wJ.n)(JB, IB)),
        GB = await BB.ensureJoined(IB),
        vB = (0, sJ.z)(GB.docKey);
      if (GB.doc === oB) return;
      for (let ZB = 0; ZB < 100; ZB++) {
        const ZB = BB.getCollabSnapshot();
        if (ZB && (0, sJ.z)(ZB.docKey) === vB && BB.getActivePath() === IB) {
          if (BB.replaceActiveDoc(vB, oB)) return;
          await (0, UT.Q)(40)
        } else await (0, UT.Q)(40)
      }
      const {
        ChangeSet: kB
      } = await ZB.e(299).then((() => ZB(41342))), nB = BB.getCollabSnapshot(), hB = nB && (0, sJ.z)(nB.docKey) === vB ? nB : GB;
      await async function(BB, IB, ZB, TB) {
        const JB = BB.of({
            from: 0,
            to: ZB.length,
            insert: TB
          }, ZB.length),
          oB = JSON.stringify([{
            clientID: IB.clientID,
            changes: JB.toJSON()
          }]),
          GB = (0, sJ.z)(IB.docKey);
        oB.length <= sJ.i ? cB.gameBridge.send("sendCodeCollab", {
          bJ: sJ.d.Push,
          xJ: GB,
          EJ: IB.version,
          VJ: oB
        }) : await (0, CJ.postJsonWithMetricsCookiesAndJsonResponse)(`${IB.httpConfig.gsUrl}/code/collab-push`, dJ.s["collab-push"].toBuffer({
          gameNameWithVariation: IB.httpConfig.gameNameWithVariation,
          lobbyName: IB.httpConfig.lobbyName,
          docKey: GB,
          version: IB.version,
          updates: oB
        }), {
          retries: 0
        })
      }(kB, hB, hB.doc, oB)
    }
    class EJ {
      constructor(BB) {
        this.handle = null, this.lastSynced = {}, this.lastLobbySeen = null, this.pendingDocText = new Map, this.flushingDocText = !1, this.recheckingDisk = !1, this.stopWatch = null, this.lobbyPollTimer = null, this.running = !1, this.applying = !1, this.reconcileSettled = !1, this.reconcileInFlight = !1, this.linked = !1, this.scaffoldedPluginNamesKey = null, this.scaffoldingLocalTypes = Promise.resolve(), this.bridge = void 0, this.bridge = BB
      }
      async writeLobbyFiles(BB) {
        const IB = {
            ...this.bridge.getLobbyFiles()
          },
          ZB = {
            ...IB
          };
        for (const {
            path: oB,
            text: GB
          }
          of BB) ZB[oB] = GB;
        if (!BB.every((BB => {
            let {
              path: IB,
              text: TB
            } = BB;
            return (0, uI.l)(TB, (0, wJ.n)(ZB, IB)) === TB
          }))) return !1;
        const TB = [];
        try {
          for (const {
              path: IB,
              text: ZB
            }
            of BB) TB.push(IB), IB in this.bridge.getLobbyFiles() || (this.bridge.createFile(IB, {
            focus: !1
          }), await this.bridge.waitForLobbyPath(IB, !0)), await xJ(this.bridge, IB, ZB)
        } catch (JB) {
          for (const BB of TB) BB in IB ? await xJ(this.bridge, BB, IB[BB]).catch((IB => {
            console.error("World Code AI: couldn't put back", BB, IB)
          })) : this.bridge.deleteFile(BB);
          throw JB
        }
        return !0
      }
      isLinked() {
        return this.linked
      }
      async linkFolder() {
        if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), !1;
        const BB = await (0, fJ.u)(this.bridge.getStorageKey());
        return !!BB && (this.handle = BB, this.linked = !0, this.reconcileSettled = !1, await this.scaffoldLocalTypes(BB), !0)
      }
      async unlinkFolder() {
        const BB = this.bridge.getStorageKey();
        this.pendingDocText.clear(), this.stopContinuousSync(), this.handle = null, this.linked = !1, this.reconcileSettled = !1, this.lastSynced = {}, this.lastLobbySeen = null, this.scaffoldedPluginNamesKey = null, await (0, fJ.c)(BB), this.bridge.onUnlinked()
      }
      async tryRestoreHandle() {
        const BB = this.bridge.getStorageKey(),
          IB = await (0, fJ.q)(BB);
        return !!IB && (!!await (0, fJ.f)(IB, "readwrite") && (this.handle = IB, this.linked = !0, await (0, fJ.I)(BB, IB), await this.scaffoldLocalTypes(IB), !0))
      }
      scaffoldLocalTypes(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bridge.getLobbyFiles();
        return this.scaffoldingLocalTypes = this.scaffoldingLocalTypes.then((async () => {
          try {
            const TB = (await uJ(IB)).map((BB => aJ.e[BB])),
              JB = TB.map((BB => {
                var IB;
                return `${BB.name}:${Object.keys(null!==(IB=null===BB||void 0===BB?void 0:BB.files)&&void 0!==IB?IB:{}).sort().join(",")}`
              })).join("\0");
            if (this.scaffoldedPluginNamesKey === JB) return;
            const {
              ensureLocalBloxdTypes: oB
            } = await Promise.all([ZB.e(85), ZB.e(301), ZB.e(306)]).then((() => ZB(41515)));
            await oB(BB, TB), this.scaffoldedPluginNamesKey = JB
          } catch (TB) {
            console.error("[WorldCodeDirectorySync] Failed to scaffold local @bloxd types", TB)
          }
        })), this.scaffoldingLocalTypes
      }
      async startWhenReady() {
        this.linked && this.handle && !this.running && !this.reconcileInFlight && this.bridge.getCollabSnapshot() && (this.reconcileSettled ? this.beginWatch() : await this.runInitialReconcileAndSync())
      }
      stopContinuousSync() {
        this.flushDocTextToDisk(), this.running = !1, this.stopWatch && (this.stopWatch(), this.stopWatch = null), this.lobbyPollTimer && (clearInterval(this.lobbyPollTimer), this.lobbyPollTimer = null)
      }
      async onLobbyFilesChanged(BB) {
        this.handle && await this.scaffoldLocalTypes(this.handle, BB), this.running && this.handle && !this.applying && await this.applyRemoteTreeToDisk(BB)
      }
      async onDocTextChanged(BB, IB) {
        if (!this.handle) return;
        const ZB = [this.scaffoldLocalTypes(this.handle, {
          ...this.bridge.getLobbyFiles(),
          [BB]: IB
        })];
        this.running && (this.pendingDocText.set(BB, IB), ZB.push(this.flushDocTextToDisk())), await Promise.all(ZB)
      }
      async flushDocTextToDisk() {
        if (this.flushingDocText || this.applying || !this.handle || 0 === this.pendingDocText.size) return;
        const BB = this.handle;
        this.flushingDocText = !0, this.applying = !0;
        try {
          for (; this.pendingDocText.size > 0;) {
            const IB = [...this.pendingDocText];
            this.pendingDocText.clear();
            for (const [ZB, TB] of IB) this.lastSynced[ZB] !== TB && (await (0, fJ.Q)(BB, ZB, TB), this.lastSynced = {
              ...this.lastSynced,
              [ZB]: TB
            })
          }
        } catch (IB) {
          console.error("[WorldCodeDirectorySync] Failed to write remote doc to disk", IB), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
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
            await this.onDiskFilesChanged(await (0, fJ.y)(this.handle))
          } catch (BB) {
            console.error("[WorldCodeDirectorySync] Failed to re-check disk after sync", BB)
          } finally {
            this.recheckingDisk = !1
          }
        }
      }
      async runInitialReconcileAndSync() {
        if (this.handle && !this.reconcileInFlight) {
          this.reconcileInFlight = !0;
          try {
            if (!await (0, fJ.f)(this.handle, "readwrite")) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncPermissionDenied"), "warning"), void(this.reconcileSettled = !0);
            await this.bridge.pullLobbyFiles();
            const IB = this.bridge.getLobbyFiles(),
              ZB = await (0, fJ.y)(this.handle);
            for (const BB of Object.keys(IB).filter(MJ.d)) {
              if (ZB[BB] === fJ.l) return void this.bridge.setMessage(`Move ${BB} outside the linked folder before syncing its placeholder.`, "warning");
              ZB[BB] = MJ.q
            }
            if (lJ(ZB, IB)) {
              for (const BB of Object.keys(IB).filter(MJ.d)) await (0, fJ.Q)(this.handle, BB, MJ.q);
              return this.lastSynced = {
                ...ZB
              }, void this.beginWatch()
            }
            const TB = await this.promptReconcile(function(BB) {
              return null !== (0, wJ.b)(BB)
            }(ZB));
            if ("unlink" === TB) return void await this.unlinkFolder();
            if ("dismissed" === TB) return void(this.reconcileSettled = !0);
            this.applying = !0;
            try {
              if ("local" === TB) {
                if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), void(this.reconcileSettled = !0);
                await this.applyLocalTreeToLobby(ZB);
                for (const BB of Object.keys(IB).filter(MJ.d)) await (0, fJ.Q)(this.handle, BB, MJ.q);
                this.lastSynced = {
                  ...await (0, fJ.y)(this.handle)
                }
              } else await (0, fJ.U)(this.handle, IB), this.lastSynced = {
                ...IB
              }
            } catch (BB) {
              return console.error("[WorldCodeDirectorySync] Reconcile failed", BB), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning"), void(this.reconcileSettled = !0)
            } finally {
              this.applying = !1, this.settleAfterApplying()
            }
            this.beginWatch()
          } finally {
            this.reconcileInFlight = !1
          }
        }
      }
      async promptReconcile(BB) {
        return await new Promise((IB => {
          const ZB = [{
              choice: "local",
              Button: FB.g,
              labelKey: "directorySyncUseLocal",
              descriptionKey: "directorySyncUseLocalDescription"
            }, {
              choice: "live",
              Button: FB.g,
              labelKey: "directorySyncUseLive",
              descriptionKey: "directorySyncUseLiveDescription"
            }, {
              choice: "unlink",
              Button: FB.g,
              labelKey: "directorySyncUseUnlink",
              descriptionKey: "directorySyncUseUnlinkDescription"
            }],
            TB = (0, nB.jsxs)("div", {
              className: "CodeEditorDirectorySyncPrompt",
              children: [(0, nB.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptTitle",
                children: this.bridge.t("codeEditor:directorySyncDifferTitle")
              }), (0, nB.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptBody",
                children: BB ? this.bridge.t("codeEditor:directorySyncDifferBody") : this.bridge.t("codeEditor:directorySyncLocalInvalidEntry")
              }), (0, nB.jsx)("div", {
                className: "CodeEditorDirectorySyncOptions",
                children: ZB.filter((IB => "local" !== IB.choice || BB)).map((BB => {
                  let {
                    choice: ZB,
                    Button: TB,
                    labelKey: oB,
                    descriptionKey: GB
                  } = BB;
                  return (0, nB.jsxs)("div", {
                    className: "CodeEditorDirectorySyncOption",
                    children: [(0, nB.jsx)(TB, {
                      className: "CodeEditorButton",
                      onClick: () => {
                        (BB => {
                          JB.tearDownNotification(), IB(BB)
                        })(ZB)
                      },
                      children: this.bridge.t(`codeEditor:${oB}`)
                    }), (0, nB.jsx)("div", {
                      className: "CodeEditorDirectorySyncOptionDescription",
                      children: this.bridge.t(`codeEditor:${GB}`)
                    })]
                  }, ZB)
                }))
              })]
            }),
            JB = KT.NotificationProvider.showCustomPopup({
              body: TB,
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "worldCodeDirectorySync"
            });
          JB.getResult().then((BB => {
            "notificationTornDown" === BB && IB("dismissed")
          }))
        }))
      }
      beginWatch() {
        this.handle && (this.stopContinuousSync(), this.reconcileSettled = !0, this.running = !0, this.stopWatch = (0, fJ.L)(this.handle, (BB => {
          this.onDiskFilesChanged(BB)
        })), this.lobbyPollTimer = setInterval((() => {
          this.pollRemoteLobbyFiles()
        }), 2e3))
      }
      async pollRemoteLobbyFiles() {
        if (this.running && !this.applying) try {
          await this.bridge.pullLobbyFiles()
        } catch (BB) {
          console.error("[WorldCodeDirectorySync] Lobby poll failed", BB)
        }
      }
      async onDiskFilesChanged(BB) {
        if (!this.running || !this.handle || this.applying) return;
        if (!this.bridge.canEditCode()) return;
        const IB = this.bridge.getLobbyFiles();
        let ZB = tJ(BB, this.lastSynced);
        for (const oB in IB)
          if ((0, MJ.d)(oB) && ZB[oB] === fJ.l) return void this.bridge.setMessage("Move binary schematic files outside the linked folder. Add them through the Code Editor.", "warning");
        const TB = Object.keys(ZB).filter((BB => (0, MJ.d)(BB) && !(BB in IB)));
        TB.length > 0 && this.bridge.setMessage("Add or rename schematics in the Code Editor. Unknown local schematic files are not uploaded.", "warning");
        for (const oB of Object.keys(IB).filter(MJ.d))(oB in ZB || TB.length > 0 || !(oB in this.lastSynced)) && (ZB[oB] = MJ.q);
        if (!lJ(ZB, BB)) {
          this.applying = !0;
          try {
            await this.persistEntryRepair(BB, ZB), ZB = tJ(await (0, fJ.y)(this.handle), this.lastSynced)
          } finally {
            this.applying = !1
          }
        }
        if (!lJ(ZB, this.lastSynced)) {
          this.applying = !0;
          try {
            const BB = AJ(this.lastSynced, ZB);
            if (await this.pushDiskDeltaToLobby(ZB, IB), null !== this.lastLobbySeen)
              for (const ZB of [...BB.creates, ...BB.updates, ...BB.deletes])(0, MJ.d)(ZB) || (ZB in IB ? this.lastLobbySeen[ZB] = IB[ZB] : delete this.lastLobbySeen[ZB]);
            this.lastSynced = {
              ...ZB
            }
          } catch (JB) {
            console.error("[WorldCodeDirectorySync] Disk\u2192lobby sync failed", JB), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async persistEntryRepair(BB, IB) {
        if (this.handle) {
          for (const ZB of Object.keys(BB)) ZB in IB || await (0, fJ.A)(this.handle, ZB);
          for (const [ZB, TB] of Object.entries(IB)) BB[ZB] !== TB && await (0, fJ.Q)(this.handle, ZB, TB)
        }
      }
      async applyRemoteTreeToDisk(BB) {
        if (!this.handle) return;
        const IB = this.lastLobbySeen;
        if (null === IB) return void(this.lastLobbySeen = {
          ...BB
        });
        const ZB = Object.keys(BB).filter((ZB => IB[ZB] !== BB[ZB])),
          TB = Object.keys(IB).filter((IB => !(IB in BB)));
        if (0 !== ZB.length || 0 !== TB.length) {
          this.applying = !0;
          try {
            for (const IB of [...TB, ...ZB]) try {
              if (IB in BB) await (0, fJ.Q)(this.handle, IB, BB[IB]), this.lastSynced = {
                ...this.lastSynced,
                [IB]: BB[IB]
              }, this.lastLobbySeen = {
                ...this.lastLobbySeen,
                [IB]: BB[IB]
              };
              else {
                await (0, fJ.A)(this.handle, IB);
                const BB = {
                  ...this.lastSynced
                };
                delete BB[IB], this.lastSynced = BB;
                const ZB = {
                  ...this.lastLobbySeen
                };
                delete ZB[IB], this.lastLobbySeen = ZB
              }
            } catch (JB) {
              console.error("[WorldCodeDirectorySync] Lobby\u2192disk sync failed", JB), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
            }
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async renameLobbyEntryIfSwitched(BB, IB) {
        const ZB = function(BB, IB) {
          const ZB = (0, wJ.b)(BB),
            TB = (0, wJ.b)(IB);
          return ZB && TB && ZB !== TB ? {
            from: ZB,
            to: TB
          } : null
        }(BB, IB);
        return !!ZB && (this.bridge.renameFile(ZB.from, ZB.to), await this.bridge.waitForLobbyPath(ZB.to, !0), !0)
      }
      async applyLocalTreeToLobby(BB) {
        var IB;
        const ZB = this.bridge.getActivePath();
        await this.renameLobbyEntryIfSwitched(this.bridge.getLobbyFiles(), BB);
        const TB = this.bridge.getLobbyFiles(),
          JB = AJ(TB, BB),
          oB = bJ(JB.deletes, TB);
        for (const cB of JB.creates)(0, MJ.d)(cB) || (this.bridge.createFile(cB, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(cB, !0));
        for (const cB of oB)(0, MJ.d)(cB) || (this.bridge.deleteFile(cB), await this.bridge.waitForLobbyPath(cB, !1));
        if (!(0, wJ.b)(this.bridge.getLobbyFiles()) && !(0, wJ.b)(BB)) {
          if (this.bridge.createFile(QJ.i, {
              focus: !1
            }), await this.bridge.waitForLobbyPath(QJ.i, !0), !this.handle) return;
          await (0, fJ.Q)(this.handle, QJ.i, ""), BB = {
            ...BB,
            [QJ.i]: ""
          }
        }
        const GB = this.bridge.getLobbyFiles();
        for (const cB of Object.keys(BB))(0, MJ.d)(cB) || GB[cB] !== BB[cB] && await xJ(this.bridge, cB, BB[cB]);
        const vB = this.bridge.getLobbyFiles(),
          kB = ZB in vB ? ZB : null !== (IB = (0, wJ.b)(vB)) && void 0 !== IB ? IB : QJ.i;
        await this.bridge.ensureJoined(kB)
      }
      async pushDiskDeltaToLobby(BB, IB) {
        const ZB = this.bridge.getActivePath(),
          TB = await this.renameLobbyEntryIfSwitched(IB, BB) ? this.bridge.getLobbyFiles() : IB,
          JB = AJ(this.lastSynced, BB),
          oB = bJ(JB.deletes, TB).filter((BB => BB in TB));
        for (const GB of JB.creates)(0, MJ.d)(GB) || (GB in this.bridge.getLobbyFiles() || (this.bridge.createFile(GB, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(GB, !0)), await xJ(this.bridge, GB, BB[GB]));
        for (const GB of oB)(0, MJ.d)(GB) ? await this.bridge.deleteSchematic(GB) : (this.bridge.deleteFile(GB), await this.bridge.waitForLobbyPath(GB, !1));
        for (const GB of JB.updates)(0, MJ.d)(GB) || await xJ(this.bridge, GB, BB[GB]);
        ZB in this.bridge.getLobbyFiles() && this.bridge.getActivePath() !== ZB && await this.bridge.ensureJoined(ZB)
      }
    }
    var DJ = ZB(1258);

    function KJ() {
      const {
        websocketUrl: BB,
        gameNameWithVariation: IB,
        lobbyName: ZB
      } = cB.gameBridge.latest("connectedGame");
      return {
        gsUrl: DJ.clientSideServerUrls.getHttpUrlFromWebSocketUrl(BB),
        gameNameWithVariation: IB,
        lobbyName: ZB
      }
    }
    async function VJ(BB) {
      const {
        gsUrl: IB,
        gameNameWithVariation: ZB,
        lobbyName: TB
      } = KJ();
      return await (0, CJ.postBinaryWithMetricsCookiesAndCustomResponse)(`${IB}/code/schematics`, dJ.ck.schematics.toBuffer({
        gameNameWithVariation: ZB,
        lobbyName: TB,
        request: JSON.stringify(BB)
      }), {
        retries: 0
      }, CJ.HttpPayloadType.json)
    }
    var SJ = ZB(36372);

    function Bo(BB) {
      let {
        path: IB,
        revision: ZB
      } = BB;
      const [TB, oB] = (0, JB.useState)(""), [GB, vB] = (0, JB.useState)(!1), [kB, cB] = (0, JB.useState)(0);
      return (0, JB.useEffect)((() => {
        let BB = !1;
        return oB(""), vB(!1), VJ({
          action: "preview",
          path: IB
        }).then((IB => {
          BB || oB(`data:image/webp;base64,${IB.previewBase64}`)
        })).catch((IB => {
          console.error("Could not load schematic preview", IB), BB || vB(!0)
        })), () => {
          BB = !0
        }
      }), [IB, ZB, kB]), (0, nB.jsxs)("div", {
        className: "SchematicPreview",
        children: [TB && (0, nB.jsx)("img", {
          src: TB,
          alt: `Preview of ${IB}`
        }), !TB && !GB && (0, nB.jsx)(iB.d, {
          loaderType: "Secondary"
        }), GB && (0, nB.jsxs)(nB.Fragment, {
          children: [(0, nB.jsx)("div", {
            className: "SmallTextLight",
            role: "status",
            children: "Preview unavailable."
          }), (0, nB.jsx)(FB.g, {
            onClick: () => {
              cB(kB + 1)
            },
            children: "Retry preview"
          })]
        })]
      })
    }
    var Io = ZB(3306);

    function Zo(BB) {
      var IB;
      let {
        initialPath: ZB,
        onChanged: TB,
        onClose: oB
      } = BB;
      const GB = "" === ZB,
        [vB, kB] = (0, JB.useState)(null),
        [cB, hB] = (0, JB.useState)(ZB),
        [zB, NB] = (0, JB.useState)(!1),
        [gB, qB] = (0, JB.useState)(!1),
        [yB, UB] = (0, JB.useState)(null),
        [WB, dB] = (0, JB.useState)(!1),
        [CB, QB] = (0, JB.useState)(""),
        sB = (0, JB.useRef)(null),
        wB = (0, JB.useRef)(!1),
        OB = (0, JB.useRef)(!0);
      (0, JB.useEffect)((() => (OB.current = !0, VJ({
        action: "state"
      }).then((BB => {
        OB.current && kB(BB)
      })).catch((BB => {
        console.error("Could not load schematic assets", BB), OB.current && QB("Could not load schematics. Reopen this panel to retry.")
      })), () => {
        OB.current = !1
      })), []);
      const YB = null === vB || void 0 === vB ? void 0 : vB.assets[ZB],
        iB = Object.keys(null !== (IB = null === vB || void 0 === vB ? void 0 : vB.assets) && void 0 !== IB ? IB : {}).length,
        pB = cB.trim(),
        aB = pB ? (0, MJ.d)(pB) ? null !== vB && void 0 !== vB && vB.assets[pB] && (GB || pB !== ZB) ? "A schematic already uses that path." : "" : "Use a relative path ending in .bloxdschem." : "",
        HB = !!pB && !aB && (GB ? iB < MJ.h : pB !== ZB),
        MB = WB || !vB;
      async function jB(BB) {
        if (!wB.current && OB.current) {
          wB.current = !0, dB(!0), QB("");
          try {
            const IB = await VJ({
              ...BB,
              expectedRevision: vB.revision
            });
            TB(IB), OB.current && oB()
          } catch (ZB) {
            var IB;
            if (console.error("Schematic asset operation failed", ZB), OB.current) QB(ZB instanceof AB.d ? null !== (IB = ZB.errorMessageForUser) && void 0 !== IB ? IB : ZB.message : String(ZB));
            try {
              const BB = await VJ({
                action: "state"
              });
              TB(BB), OB.current && kB(BB)
            } catch (JB) {
              console.error("Could not refresh schematic assets", JB)
            }
          } finally {
            wB.current = !1, OB.current && dB(!1)
          }
        }
      }
      return (0, nB.jsxs)("div", {
        className: "WorldCodeSchematicPanel InputGenericPopup PromptGenericPopup FileTreePathPopup",
        children: [(0, nB.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: GB ? "New schematic" : zB ? "Rename schematic" : "Schematic"
        }), CB && (0, nB.jsx)("div", {
          className: "InputGenericPopupError SmallTextLight",
          role: "alert",
          children: CB
        }), !vB && !CB && (0, nB.jsx)("div", {
          className: "SmallTextLight",
          children: "Loading schematic\u2026"
        }), (0, nB.jsxs)("fieldset", {
          disabled: MB,
          children: [GB || zB ? (0, nB.jsxs)("label", {
            className: "SchematicField",
            children: [(0, nB.jsx)("span", {
              className: "SmallTextBold",
              children: "Project path"
            }), (0, nB.jsx)("div", {
              className: "InputGenericPopupInputRow",
              children: (0, nB.jsx)(PZ.c, {
                className: "InputGenericPopupInput",
                defaultValue: ZB,
                placeholderText: "maps/arena.bloxdschem",
                maxLength: 64,
                onValueChange: hB
              }, zB ? "rename" : "create")
            })]
          }) : (0, nB.jsx)("div", {
            className: "SchematicPath SmallTextBold",
            children: ZB
          }), (GB || zB) && aB && (0, nB.jsx)("div", {
            className: "InputGenericPopupError SmallTextLight",
            role: "alert",
            children: aB
          }), GB ? (0, nB.jsxs)(nB.Fragment, {
            children: [iB >= MJ.h && (0, nB.jsxs)("div", {
              className: "SmallTextLight",
              children: ["Delete a schematic before adding another (", MJ.h, " maximum)."]
            }), gB ? (0, nB.jsxs)(nB.Fragment, {
              children: [(0, nB.jsx)("div", {
                className: "SmallTextBold",
                children: "Choose from profile"
              }), (0, nB.jsx)("div", {
                className: "SchematicProfilePicker",
                "aria-disabled": MB || !HB,
                children: (0, nB.jsx)(SJ.c, {
                  loading: null === yB,
                  schematics: null !== yB && void 0 !== yB ? yB : [],
                  disableAutoExport: !0,
                  onSchematicPicked: BB => {
                    !MB && HB && jB({
                      action: "profile",
                      path: pB,
                      schematicId: BB.schematicId
                    })
                  }
                })
              }), (0, nB.jsx)("div", {
                className: "InputGenericPopupButtons",
                children: (0, nB.jsx)(FB.g, {
                  className: "InputGenericPopupButton",
                  disabled: MB,
                  onClick: () => {
                    qB(!1)
                  },
                  children: "Back"
                })
              })]
            }) : (0, nB.jsxs)("div", {
              className: "InputGenericPopupButtons",
              children: [(0, nB.jsx)(FB.g, {
                className: "InputGenericPopupButton",
                disabled: MB || !HB,
                onClick: () => {
                  (0, Io.i)(sB.current)
                },
                children: "Upload Schematic"
              }), (0, nB.jsx)(FB.g, {
                className: "InputGenericPopupButton",
                disabled: MB || !HB,
                onClick: () => {
                  !async function() {
                    if (qB(!0), QB(""), !yB) try {
                      const BB = await (0, CJ.postJsonWithMetricsCookiesAndJsonResponse)(`${DJ.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
                        retries: 0,
                        minTimeout: 3e3
                      });
                      OB.current && UB(BB)
                    } catch (BB) {
                      console.error("Could not load profile schematics", BB), OB.current && (qB(!1), QB("Could not load your schematics. Try again."))
                    }
                  }()
                },
                children: "Choose from profile"
              })]
            }), (0, nB.jsx)("input", {
              ref: sB,
              type: "file",
              accept: ".bloxdschem",
              hidden: !0,
              onChange: BB => {
                var IB;
                const ZB = null === (IB = BB.target.files) || void 0 === IB ? void 0 : IB[0];
                if (BB.target.value = "", !ZB) return;
                if (ZB.size > MJ.l) return void QB("The schematic file is too large.");
                const TB = pB;
                dB(!0);
                const JB = new FileReader;
                JB.onload = () => {
                  jB({
                    action: "upload",
                    path: TB,
                    base64: String(JB.result).split(",")[1]
                  })
                }, JB.onerror = () => {
                  console.error("Could not read schematic file", JB.error), OB.current && (dB(!1), QB("Could not read the selected file."))
                }, JB.readAsDataURL(ZB)
              }
            })]
          }) : YB ? (0, nB.jsxs)(nB.Fragment, {
            children: [!zB && (0, nB.jsx)(Bo, {
              path: ZB,
              revision: vB.revision
            }), !zB && (0, nB.jsxs)("p", {
              className: "SchematicDetails SmallTextLight",
              children: [Math.ceil(YB.byteSize / 1024), " KB \xb7 ", YB.dimensions.join(" \xd7 "), " blocks"]
            }), (0, nB.jsx)("div", {
              className: "InputGenericPopupButtons",
              children: zB ? (0, nB.jsxs)(nB.Fragment, {
                children: [(0, nB.jsx)(FB.g, {
                  className: "InputGenericPopupButton",
                  disabled: MB || !HB,
                  onClick: () => {
                    jB({
                      action: "rename",
                      path: ZB,
                      newPath: pB
                    })
                  },
                  children: "Rename"
                }), (0, nB.jsx)(FB.g, {
                  className: "InputGenericPopupButton",
                  disabled: MB,
                  onClick: () => {
                    NB(!1), hB(ZB)
                  },
                  children: "Cancel"
                })]
              }) : (0, nB.jsxs)(nB.Fragment, {
                children: [(0, nB.jsx)(FB.g, {
                  className: "InputGenericPopupButton",
                  disabled: MB,
                  onClick: () => {
                    NB(!0)
                  },
                  children: "Rename"
                }), (0, nB.jsx)(FB.M, {
                  className: "InputGenericPopupButton",
                  disabled: MB,
                  onClick: () => {
                    jB({
                      action: "remove",
                      path: ZB
                    })
                  },
                  children: "Delete"
                })]
              })
            })]
          }) : vB && (0, nB.jsx)("div", {
            className: "SmallTextLight",
            children: "This schematic is no longer in the project."
          })]
        })]
      })
    }

    function To(BB) {
      if ("string" !== typeof BB) return null;
      try {
        const IB = JSON.parse(BB);
        return (0, wJ.k)(null === IB || void 0 === IB ? void 0 : IB.worldCodeEngine) && "boolean" === typeof IB.engineLocked && function(BB) {
          if (null === BB) return !0;
          const IB = null === BB || void 0 === BB ? void 0 : BB.location;
          return "string" === typeof(null === BB || void 0 === BB ? void 0 : BB.reason) && (null === IB || "string" === typeof(null === IB || void 0 === IB ? void 0 : IB.path) && Number.isInteger(IB.line))
        }(IB.fallback) ? IB : (console.error("[CodeCollab] Malformed engine settings", BB), null)
      } catch (IB) {
        return console.error("[CodeCollab] Failed to parse engine settings", IB), null
      }
    }

    function Jo(BB) {
      let {
        fallback: IB,
        onGoToLine: ZB
      } = BB;
      const {
        t: TB
      } = (0, EB.G)(), {
        location: JB
      } = IB;
      return (0, nB.jsxs)("div", {
        className: "CodeEditorEngineNotice",
        children: [TB("codeEditorEngine:notice", {
          reason: IB.reason
        }), JB && (0, nB.jsxs)(nB.Fragment, {
          children: [" ", (0, nB.jsx)("button", {
            type: "button",
            className: "CodeEditorEngineNoticeLink",
            onClick: () => {
              ZB(JB.path, JB.line)
            },
            children: TB("codeEditorEngine:goToLine", {
              line: String(JB.line)
            })
          })]
        })]
      })
    }
    var oo = ZB(5090),
      Go = ZB(4545),
      vo = ZB(36900);

    function ko(BB) {
      let {
        label: IB,
        hint: ZB,
        checked: TB,
        onChange: JB
      } = BB;
      return (0, nB.jsxs)("label", {
        className: "CodeEditorMoreOptionsRow CodeEditorOptionSwitch",
        children: [(0, nB.jsxs)("span", {
          className: "CodeEditorOptionSwitchText",
          children: [(0, nB.jsx)("span", {
            children: IB
          }), (0, nB.jsx)("span", {
            className: "CodeEditorOptionSwitchHint",
            children: ZB
          })]
        }), (0, nB.jsx)("span", {
          className: "SwitchContainer",
          children: (0, nB.jsx)(Go.d, {
            className: "SwitchCheckbox",
            checked: TB,
            onChange: BB => {
              JB(BB.target.checked)
            },
            disabled: !1
          })
        })]
      })
    }

    function co(BB) {
      let {
        engine: IB,
        onSetEngine: ZB,
        aiHints: TB,
        variation: JB
      } = BB;
      const {
        t: oB
      } = (0, EB.G)(), [GB, vB] = (0, vo.e)(vo.c);
      return (0, nB.jsxs)("div", {
        className: "CodeEditorMoreOptions",
        children: [(0, nB.jsx)("div", {
          className: "CodeEditorMoreOptionsTitle",
          children: oB("codeEditor:moreOptions")
        }), IB && (0, nB.jsx)(ko, {
          label: oB("codeEditorEngine:toggle"),
          hint: oB("codeEditorEngine:toggleHint"),
          checked: "ses" === IB,
          onChange: BB => {
            ZB(BB ? "ses" : "quickjs")
          }
        }), TB && (0, nB.jsx)(ko, {
          label: oB("codeEditorAiHints:toggle"),
          hint: oB("codeEditorAiHints:toggleHint"),
          checked: TB.shown,
          onChange: TB.setShown
        }), TB && vo.c.canChange && (0, nB.jsx)(ko, {
          label: oB("codeEditorAiKeySafetyCheck:toggle"),
          hint: oB("codeEditorAiKeySafetyCheck:toggleHint"),
          checked: GB,
          onChange: BB => {
            BB ? vB(!0) : KT.NotificationProvider.showPromptPopup({
              title: "codeEditorAiKeySafetyCheck:offWarning",
              confirmText: "general:yes",
              destructive: !0,
              cancelText: "general:no"
            }).getResult().then((BB => {
              !0 === BB && vB(!1)
            }))
          }
        }), JB && (0, nB.jsxs)("div", {
          className: "CodeEditorMoreOptionsRow",
          children: [(0, nB.jsx)(oo.c, {
            label: "codeEditor:variationLabel",
            children: (0, nB.jsx)(PZ.c, {
              className: "CodeEditorVariationInput",
              maxLength: 32,
              defaultValue: JB.name,
              onValueChange: JB.setName,
              onEnter: JB.reload
            })
          }), (0, nB.jsx)(FB.A, {
            className: "CodeEditorButton",
            onClick: JB.reload,
            children: oB("codeEditor:reloadAsVariation")
          })]
        })]
      })
    }
    var no = ZB(36909),
      ho = ZB(36916);

    function zo(BB) {
      let {
        close: IB
      } = BB;
      const {
        t: ZB
      } = (0, EB.G)(), TB = [{
        name: ZB("codeEditor:welcomeTutorial"),
        tutorial: "welcome"
      }, {
        name: ZB("codeEditor:docsOverviewTutorial"),
        tutorial: "docsOverview"
      }, {
        name: ZB("codeEditorAiTutorial:tutorialName"),
        tutorial: "aiHelperOverview"
      }];
      return (0, nB.jsxs)("div", {
        className: "PromptGenericPopup CodeEditorTutorialsPopup",
        children: [(0, nB.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: ZB("codeEditor:tutorialsTitle")
        }), (0, nB.jsx)("div", {
          className: "CodeEditorTutorialsList",
          children: TB.map((BB => (0, nB.jsx)(FB.g, {
            className: "CodeEditorTutorialsListButton",
            onClick: () => {
              IB(), (0, ho.E)(BB.tutorial)
            },
            children: BB.name
          }, BB.tutorial)))
        })]
      })
    }
    var Fo = ZB(121),
      No = ZB(36569),
      go = ZB(3801);
    const qo = (0, JB.forwardRef)((function(BB, IB) {
      let {
        value: ZB,
        onChange: TB,
        onSubmit: JB,
        placeholder: oB,
        maxLength: GB,
        rows: vB = 2,
        allowNewLines: kB = !1,
        onKeyDown: cB,
        before: hB
      } = BB;
      const {
        t: zB
      } = (0, EB.G)(), NB = "" !== ZB.trim(), gB = () => {
        NB && JB()
      };
      return (0, nB.jsxs)("div", {
        className: "PanelPromptInputRow",
        children: [hB, (0, nB.jsx)("textarea", {
          ref: IB,
          className: "PanelPromptInput",
          value: ZB,
          maxLength: GB,
          rows: vB,
          placeholder: oB,
          spellCheck: !1,
          autoComplete: "off",
          onChange: BB => {
            TB(kB ? BB.target.value : BB.target.value.replace(/\r?\n/g, " "))
          },
          onKeyDown: BB => {
            BB.nativeEvent.isComposing || 229 === BB.nativeEvent.keyCode ? BB.stopPropagation() : "Escape" !== BB.key && (BB.stopPropagation(), null === cB || void 0 === cB || cB(BB), BB.defaultPrevented || "Enter" !== BB.key || kB && BB.shiftKey || (BB.preventDefault(), gB()))
          }
        }), (0, nB.jsx)(FB.g, {
          className: "PanelPromptSend",
          disabled: !NB,
          onClick: gB,
          ariaLabel: zB("codeEditorPanels:send"),
          children: (0, nB.jsx)(qB.d, {
            name: "arrow-up"
          })
        })]
      })
    }));

    function yo(BB) {
      let {
        inputRef: IB
      } = BB;
      const {
        t: ZB
      } = (0, EB.G)(), {
        messages: TB,
        reportedPlayers: oB,
        channel: GB
      } = (0, go.n)(), [vB, kB] = (0, JB.useState)(""), cB = (0, JB.useRef)({
        stepsBack: 0,
        text: ""
      });
      return (0, nB.jsxs)("div", {
        className: "CodeEditorChatPanel",
        children: [(0, nB.jsx)("div", {
          className: "CodeEditorChatHeader",
          children: (0, nB.jsx)("span", {
            className: "CodeEditorChatTitle",
            children: ZB("codeEditorChat:title")
          })
        }), 0 === TB.length ? (0, nB.jsx)("div", {
          className: "CodeEditorChatEmpty",
          children: ZB("codeEditorChat:empty")
        }) : (0, nB.jsx)("div", {
          className: "ChatMessages CodeEditorChatMessages",
          children: (0, nB.jsx)(No.c, {
            messages: TB,
            reportedPlayers: oB
          })
        }), (0, nB.jsx)(qo, {
          ref: IB,
          value: vB,
          onChange: kB,
          onSubmit: () => {
            (0, go.l)(vB), kB(""), cB.current = {
              stepsBack: 0,
              text: ""
            }
          },
          maxLength: OB.bd,
          rows: 1,
          placeholder: GB ? ZB("touchOnly" === (0, Fo.e)() ? "codeEditorChat:channelPlaceholderTouch" : "codeEditorChat:channelPlaceholder", {
            channel: GB.channelName
          }) : ZB("codeEditorChat:placeholder"),
          before: GB && (0, nB.jsx)("button", {
            type: "button",
            className: "CodeEditorChatChannel",
            style: {
              backgroundColor: GB.elementBgColor
            },
            onClick: () => {
              go.c.selectNextChannel(), IB.current.focus()
            },
            children: (0, nB.jsx)(sB.e, {
              text: GB.elementContent
            })
          }),
          onKeyDown: BB => {
            const IB = vB === cB.current.text;
            if ("ArrowUp" !== BB.key && "ArrowDown" !== BB.key || !IB && "" !== vB) "Tab" === BB.key && !BB.shiftKey && GB && (BB.preventDefault(), go.c.selectNextChannel());
            else {
              BB.preventDefault();
              const ZB = IB ? cB.current.stepsBack : 0;
              cB.current = (0, go.i)(ZB + ("ArrowUp" === BB.key ? 1 : -1)), kB(cB.current.text)
            }
          }
        })]
      })
    }
    var Uo = ZB(36918);

    function Wo(BB) {
      return "expanded" === BB ? "always" : "shown" === BB ? "narrow" : void 0
    }

    function Co(BB) {
      var IB;
      let {
        vz: ZB,
        worldPanel: TB,
        closeWorld: JB,
        aiShown: oB,
        defaultWidth: GB,
        children: vB
      } = BB;
      const kB = "hidden" !== ZB;
      return (0, nB.jsx)(Uo.c, {
        side: "right",
        defaultSize: kB ? "max(18rem, 40%)" : GB,
        covers: null !== (IB = Wo(ZB)) && void 0 !== IB ? IB : oB ? "narrow" : void 0,
        children: (0, nB.jsxs)("div", {
          className: WZ()("CodeEditorRightColumn", {
            WorldShown: kB,
            WorldExpanded: "expanded" === ZB
          }),
          children: [kB && (0, nB.jsx)(Uo.c, {
            side: "top",
            onClose: JB,
            children: TB
          }), vB]
        })
      })
    }
    var Qo = ZB(2060),
      so = ZB(1170),
      wo = ZB(1362);
    class Oo {
      constructor(BB, IB, ZB) {
        this.measure = BB, this.apply = IB, this.now = ZB, this.last = null, this.resizedAt = -1 / 0, this.resizing = !1, this.stretchedAt = null
      }
      get rect() {
        var BB, IB;
        return null !== (BB = null === (IB = this.last) || void 0 === IB ? void 0 : IB.rect) && void 0 !== BB ? BB : null
      }
      sync() {
        const BB = function(BB) {
          const IB = Math.round(BB.left),
            ZB = Math.round(BB.top);
          return {
            left: IB,
            top: ZB,
            width: Math.round(BB.right) - IB,
            height: Math.round(BB.bottom) - ZB
          }
        }(this.measure());
        if (BB.width <= 0 || BB.height <= 0) return;
        const IB = this.now(),
          ZB = this.last;
        let TB = {
          width: BB.width,
          height: BB.height
        };
        null === ZB || BB.width === ZB.rect.width && BB.height === ZB.rect.height || (this.resizing = IB - this.resizedAt < 100, this.resizedAt = IB);
        const JB = null !== ZB && this.resizing && IB - this.resizedAt < 100 && (BB.width !== ZB.bufferSize.width || BB.height !== ZB.bufferSize.height);
        JB && (this.stretchedAt ??= IB), JB && IB - this.stretchedAt < 250 ? TB = ZB.bufferSize : this.stretchedAt = null;
        const oB = {
          rect: BB,
          bufferSize: TB
        };
        var GB, vB;
        null !== ZB && (vB = oB, (GB = ZB).rect.left === vB.rect.left && GB.rect.top === vB.rect.top && GB.rect.width === vB.rect.width && GB.rect.height === vB.rect.height && GB.bufferSize.width === vB.bufferSize.width && GB.bufferSize.height === vB.bufferSize.height) || (this.last = oB, this.apply(oB))
      }
      stop() {
        null !== this.last && (this.last = null, this.apply(null))
      }
    }

    function Yo(BB) {
      const {
        style: IB
      } = document.documentElement;
      for (const [ZB, TB] of [
          ["--worldViewLeft", null === BB || void 0 === BB ? void 0 : BB.left],
          ["--worldViewTop", null === BB || void 0 === BB ? void 0 : BB.top],
          ["--worldViewWidth", null === BB || void 0 === BB ? void 0 : BB.width],
          ["--worldViewHeight", null === BB || void 0 === BB ? void 0 : BB.height]
        ]) void 0 === TB ? IB.removeProperty(ZB) : IB.setProperty(ZB, `${TB}px`)
    }
    var io = ZB(1805),
      po = ZB(2070);

    function ao(BB, IB) {
      (0, JB.useEffect)((() => {
        if (!BB) return;
        const ZB = BB => {
          var ZB;
          "Escape" === BB.key ? (BB.stopPropagation(), BB.preventDefault(), IB()) : (ZB = BB.code, Object.entries(lI.u).some((BB => {
            let [IB, TB] = BB;
            const JB = po.e[IB];
            return JB.includes("ui") && !JB.includes("core") && TB.includes(ZB)
          })) && !(0, io.isTextEntry)(BB.target) && BB.preventDefault())
        };
        window.addEventListener("keydown", ZB, !0);
        const TB = (0, eB.j)(IB);
        return () => {
          window.removeEventListener("keydown", ZB, !0), TB()
        }
      }), [BB, IB])
    }

    function Ho() {
      return (0, cJ.l)().some((BB => BB !== cJ.e))
    }

    function Mo(BB, IB) {
      return BB.map((BB => IB ? String(BB) : BB.toFixed(1))).join(", ")
    }

    function jo(BB) {
      let {
        freeCamera: IB,
        picking: ZB,
        hovered: TB
      } = BB;
      const {
        t: oB
      } = (0, EB.G)(), GB = (0, JB.useRef)(null), vB = (0, JB.useRef)(null);
      return (0, JB.useEffect)((() => {
        const BB = (BB, IB) => {
            BB.textContent !== IB && (BB.textContent = IB)
          },
          ZB = () => {
            const ZB = IB ? cB.gameBridge.lookup("freeCameraPos", null) : null;
            BB(GB.current, Mo(null !== ZB && void 0 !== ZB ? ZB : cB.gameBridge.lookup("localPos", null), !1));
            const TB = cB.gameBridge.lookup("targetedBlockPos", null);
            BB(vB.current, TB ? Mo(TB, !0) : "-")
          };
        return ZB(), (0, wo.x)(ZB)
      }), [IB]), (0, nB.jsxs)("div", {
        className: "WorldPanelCoordinates",
        children: [(0, nB.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: oB(IB ? "codeEditorWorld:camera" : "codeEditorWorld:position")
        }), (0, nB.jsx)("span", {
          ref: GB
        }), (0, nB.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: oB("codeEditorWorld:lookingAt")
        }), (0, nB.jsx)("span", {
          ref: vB,
          hidden: ZB
        }), ZB && (0, nB.jsxs)(nB.Fragment, {
          children: [(0, nB.jsx)("span", {
            children: TB ? Mo(TB.pos, !0) : "-"
          }), TB && (0, nB.jsx)("span", {
            className: "WorldPanelCoordsName",
            children: TB.name
          })]
        })]
      })
    }
    var Po = ZB(36926),
      Ro = ZB(1538);

    function ro(BB) {
      const IB = BB.currentTarget.getBoundingClientRect();
      return {
        x: (BB.clientX - IB.left) / IB.width,
        y: (BB.clientY - IB.top) / IB.height
      }
    }

    function mo(BB) {
      const [IB, ZB] = (0, JB.useState)(!1), [TB, oB] = (0, JB.useState)(null), GB = (0, JB.useRef)(null);
      (0, JB.useEffect)((() => {
        if (!IB) return;
        let BB = null,
          ZB = null,
          TB = 1 / 0;
        const JB = (0, wo.s)((IB => {
          TB += IB;
          const JB = GB.current;
          if (JB === ZB && TB < 100) return;
          ZB = JB, TB = 0;
          const vB = JB && cB.gameBridge.lookup("blockAtViewPoint", JB);
          var kB, nB;
          (kB = vB) === (nB = BB) || null !== kB && null !== nB && kB.name === nB.name && (0, Po.h)(kB.pos, nB.pos) && (0, Po.h)(kB.normal, nB.normal) || (BB = vB, oB(vB), cB.gameBridge.send("setBlockHighlight", vB))
        }));
        return () => {
          JB(), null !== BB && cB.gameBridge.send("setBlockHighlight", null), oB(null)
        }
      }), [IB]);
      const vB = (0, JB.useCallback)((() => {
        ZB(!1)
      }), []);
      ao(IB, vB);
      const kB = TB => {
          if (!IB) return;
          const JB = cB.gameBridge.lookup("blockAtViewPoint", ro(TB));
          null !== JB && (ZB(!1), BB(JB.pos))
        },
        nB = IB ? (0, Ro.h)(kB, "pointerup") : null,
        hB = {
          onPointerDown: BB => {
            null === nB || void 0 === nB || nB.onPointerDown(BB)
          },
          onPointerMove: BB => {
            GB.current = ro(BB)
          },
          onPointerLeave: () => {
            GB.current = null
          },
          onPointerUp: null === nB || void 0 === nB ? void 0 : nB.onPointerUp,
          onClick: BB => {
            "pointerType" in BB.nativeEvent && "touch" === BB.nativeEvent.pointerType || kB(BB)
          }
        };
      return {
        picking: IB,
        setPicking: ZB,
        hovered: TB,
        slotHandlers: hB
      }
    }

    function Xo(BB) {
      cB.gameBridge.send("setFreeCameraMovesFly", BB)
    }

    function Lo(BB) {
      let {
        shown: IB,
        setShown: ZB,
        canInsertCode: TB
      } = BB;
      const {
        t: oB
      } = (0, EB.G)(), {
        isTouchScreen: GB
      } = (0, LB.o)(["isTouchScreen"]), vB = (0, JB.useRef)(null), cB = (0, JB.useCallback)((() => {
        var BB;
        null === (BB = vB.current.closest(".CodeEditorBg").querySelector(".cm-content")) || void 0 === BB || BB.focus()
      }), []), {
        control: hB,
        take: zB,
        release: gB,
        blocked: yB
      } = function(BB) {
        const [IB, ZB] = (0, JB.useState)("none"), TB = (0, JB.useRef)("none"), [oB, GB] = (0, JB.useState)(!1), vB = BB => {
          TB.current = BB, ZB(BB)
        }, kB = (0, JB.useCallback)((() => {
          const IB = TB.current;
          "none" !== IB && (vB("none"), (0, cJ.t)(cJ.e), "mouse" === IB && BB())
        }), [BB]), cB = (0, JB.useCallback)((BB => {
          Ho() ? GB(!0) : (vB("mouse" === BB && "touchOnly" !== (0, Fo.e)() ? "mouse" : "touch"), (0, cJ.p)(cJ.e))
        }), []);
        return (0, wB.d)("pointerLockUpdate", (BB => {
          BB && "touch" === TB.current && "touchOnly" !== (0, Fo.e)() ? vB("mouse") : BB || "mouse" !== TB.current || kB()
        })), (0, JB.useEffect)((() => {
          if (!oB) return;
          const BB = () => {
            Ho() || GB(!1)
          };
          return BB(), (0, cJ.j)(BB)
        }), [oB]), ao("none" !== IB, kB), (0, JB.useEffect)((() => {
          if ("none" === IB) return;
          const BB = BB => {
            (0, io.isTextEntry)(BB.target) && kB()
          };
          return document.addEventListener("focusin", BB), () => {
            document.removeEventListener("focusin", BB)
          }
        }), [IB, kB]), (0, JB.useEffect)((() => (document.addEventListener("pointerlockerror", kB), () => {
          document.removeEventListener("pointerlockerror", kB)
        })), [kB]), (0, JB.useEffect)((() => () => {
          "none" !== TB.current && null !== LB.d.get("openInGameMenuName") && (0, cJ.t)(cJ.e)
        }), []), {
          control: IB,
          take: cB,
          release: kB,
          blocked: oB
        }
      }(cB), UB = (0, so.m)(Uo.e);
      (0, JB.useEffect)((() => {
        "touch" !== hB || "shown" !== IB || UB ? "none" === hB && "expanded" === IB && ZB("shown") : ZB("expanded")
      }), [hB, UB]),
      function(BB, IB) {
        const ZB = (0, JB.useRef)(IB);
        ZB.current = IB;
        const TB = (0, JB.useRef)(null);
        (0, JB.useLayoutEffect)((() => {
          const IB = new Oo((() => BB.current.getBoundingClientRect()), (BB => {
            var IB;
            "none" !== ZB.current && Yo(null !== (IB = null === BB || void 0 === BB ? void 0 : BB.rect) && void 0 !== IB ? IB : null), (0, wo.A)().setGameView(BB)
          }), (() => performance.now()));
          TB.current = IB, IB.sync();
          const JB = (0, wo.o)((() => {
            IB.sync()
          }));
          return () => {
            JB(), LB.d.set({
              worldPanelHud: null
            }), IB.stop()
          }
        }), [BB]), (0, JB.useLayoutEffect)((() => {
          TB.current.sync(), Yo("none" === IB ? null : TB.current.rect), LB.d.set({
            worldPanelHud: IB
          })
        }), [IB])
      }(vB, "touch" === hB ? "touchControls" : "none");
      const {
        picking: WB,
        setPicking: dB,
        hovered: CB,
        slotHandlers: {
          onPointerDown: QB,
          ...sB
        }
      } = mo((BB => {
        NB.l.Gq("CodeEditorInsertText", {
          text: `[${BB.join(", ")}]`,
          focus: !GB
        }), (0, Uo.e)() && ZB("hidden")
      })), OB = function() {
        const {
          allowed: BB,
          movesFly: IB
        } = (0, YB.j)("freeCamera"), ZB = (0, JB.useRef)(IB), TB = (0, JB.useRef)(IB);
        return TB.current !== IB && (TB.current = IB, ZB.current = IB), (0, JB.useEffect)((() => () => {
          ZB.current && Xo(!1)
        }), []), {
          allowed: BB,
          on: IB,
          toggle: () => {
            ZB.current = !IB, Xo(!IB)
          }
        }
      }(), iB = (0, kB.d)("hideCoordinates"), pB = (0, YB.j)("localPlayerAlive"), aB = !pB || yB;
      (0, JB.useEffect)((() => {
        pB || gB()
      }), [pB, gB]), (0, JB.useEffect)((() => {
        !aB && TB || dB(!1)
      }), [aB, TB, dB]);
      const HB = OB.on ? FB.p : FB.g,
        MB = WB ? FB.p : FB.g;
      return (0, nB.jsxs)("div", {
        className: "WorldPanel",
        children: [(0, nB.jsxs)("div", {
          className: "WorldPanelHeader",
          children: [(0, nB.jsx)("span", {
            className: "WorldPanelTitle",
            children: oB("codeEditorWorld:title")
          }), "touch" === hB && !UB && (0, nB.jsx)(FB.g, {
            className: "WorldPanelButton",
            onClick: gB,
            children: oB("codeEditorWorld:backToCode")
          }), !aB && OB.allowed && !GB && (0, nB.jsx)(bB.e, {
            tooltipInner: oB("codeEditorWorld:freeCameraTooltip"),
            hoverOnly: !0,
            children: (0, nB.jsx)(HB, {
              className: "WorldPanelButton",
              ariaPressed: OB.on,
              ariaLabel: oB("codeEditorWorld:freeCamera"),
              onClick: OB.toggle,
              children: (0, nB.jsx)(qB.d, {
                name: "video"
              })
            })
          }), !aB && TB && (0, nB.jsx)(bB.e, {
            tooltipInner: oB("codeEditorWorld:pickTooltip"),
            hoverOnly: !0,
            children: (0, nB.jsxs)(MB, {
              className: "WorldPanelButton",
              ariaPressed: WB,
              onClick: () => {
                gB(), dB(!WB)
              },
              children: [(0, nB.jsx)(qB.d, {
                name: "crosshairs"
              }), oB("codeEditorWorld:pick")]
            })
          })]
        }), !iB && (0, nB.jsx)(jo, {
          freeCamera: OB.on,
          picking: WB,
          hovered: CB
        }), (0, nB.jsxs)("div", {
          ref: vB,
          className: WZ()("WorldPanelSlot", {
            TouchControl: "touch" === hB,
            Picking: WB
          }),
          onPointerDown: BB => {
            0 !== BB.button || aB || WB || zB(BB.pointerType), QB(BB)
          },
          ...sB,
          children: [!aB && !WB && (0, nB.jsx)("div", {
            className: "WorldPanelCrosshair",
            children: "+"
          }), !aB && "touch" !== hB && (0, nB.jsxs)("div", {
            className: "WorldPanelHint",
            children: [WB && oB(GB ? "codeEditorWorld:tapToPick" : "codeEditorWorld:clickToPick"), !WB && "none" === hB && !OB.on && oB(GB ? "codeEditorWorld:tapToPlay" : "codeEditorWorld:clickToPlay"), !WB && "none" === hB && OB.on && oB("codeEditorWorld:clickToFly"), "mouse" === hB && (0, nB.jsxs)(nB.Fragment, {
              children: [(0, nB.jsx)(Qo.d, {
                noaAction: "OpenLobbyLeaderboard"
              }), oB("codeEditorWorld:backToCode")]
            })]
          }), aB && (0, nB.jsxs)("div", {
            className: "WorldPanelWaiting",
            children: [(0, nB.jsx)("span", {
              children: oB(pB ? "codeEditorWorld:gameWaiting" : "codeEditorWorld:died")
            }), (0, nB.jsx)(FB.g, {
              onClick: eB.d,
              children: oB("codeEditorWorld:toGame")
            })]
          })]
        })]
      })
    }
    var eo = ZB(5177);

    function uo(BB) {
      let {
        vz: IB,
        setWorld: ZB,
        toggleWorld: TB,
        aiShown: JB,
        closeAi: oB
      } = BB;
      const {
        t: GB
      } = (0, EB.G)(), vB = JB ? "ai" : "hidden" !== IB ? "world" : "code", kB = [{
        value: "code",
        label: GB("codeEditorWorld:codePane")
      }, {
        value: "world",
        label: GB("codeEditorWorld:title")
      }];
      JB && kB.push({
        value: "ai",
        label: GB("codeEditorWorld:aiPane")
      });
      return (0, nB.jsx)("div", {
        className: "CodeEditorPaneSwitch",
        children: (0, nB.jsx)(eo.d, {
          options: kB,
          value: vB,
          onChange: BB => {
            "world" !== BB ? (JB && oB(), ZB("hidden")) : "hidden" === IB ? TB() : oB()
          },
          ariaLabel: GB("codeEditorWorld:panes"),
          keepsFocus: !0
        })
      })
    }
    var fo = ZB(36928),
      Ao = ZB(36935),
      to = ZB(36943),
      bo = ZB(36947);
    const xo = (0, JB.lazy)((() => Promise.all([ZB.e(303), ZB.e(299), ZB.e(302), ZB.e(298), ZB.e(85), ZB.e(301), ZB.e(300), ZB.e(297)]).then((() => ZB(41331))))),
      Eo = (0, JB.lazy)((() => Promise.all([ZB.e(80), ZB.e(83), ZB.e(84), ZB.e(82), ZB.e(305)]).then((() => ZB(41493))))),
      Do = (0, JB.lazy)((() => Promise.all([ZB.e(303), ZB.e(302), ZB.e(85), ZB.e(83), ZB.e(84), ZB.e(82), ZB.e(301), ZB.e(300), ZB.e(81), ZB.e(92)]).then((() => ZB(41500)))));

    function Ko(BB) {
      return cB.gameBridge.query("worldCodeAiChunk", BB)
    }

    function Vo() {
      return cB.gameBridge.query("worldCodeAiGameState", null)
    }

    function So(BB) {
      const {
        gsUrl: IB,
        gameNameWithVariation: ZB,
        lobbyName: TB
      } = KJ();
      return (0, CJ.postJsonWithMetricsCookiesAndJsonResponse)(`${IB}/code/get-lobby-code`, dJ.ck["get-lobby-code"].toBuffer({
        gameNameWithVariation: ZB,
        lobbyName: TB,
        path: BB
      }), {
        retries: 1
      })
    }
    let BG = !1;
    const IG = [],
      ZG = {
        message: "You do not have permission to view the code.",
        type: "warning"
      },
      TG = (0, JB.memo)((function(BB) {
        var IB, ZB;
        let {
          show: TB,
          onOpen: oB,
          onClose: vB,
          isLobbyCode: hB
        } = BB;
        const zB = (0, JB.useRef)(""),
          [gB, yB] = (0, JB.useState)(null),
          UB = (0, JB.useRef)(hB),
          [WB, dB] = (0, JB.useState)({
            message: null,
            type: null
          }),
          [CB, QB] = (0, JB.useState)(""),
          sB = WB.message ? WB : {
            message: CB,
            type: "warning"
          },
          [pB, aB] = (0, JB.useState)(!0),
          [HB, jB] = (0, vo.e)(vo.d),
          [PB, RB] = (0, vo.e)(vo.b),
          [rB, mB] = (0, JB.useState)(!1),
          [XB, uB] = (0, JB.useState)(!1),
          fB = (0, JB.useRef)(null),
          lB = (0, JB.useRef)(!1);
        (0, JB.useEffect)((() => {
          var BB;
          XB && lB.current && (lB.current = !1, null === (BB = fB.current) || void 0 === BB || BB.focus())
        }), [XB]);
        const AB = (0, fo.d)(),
          tB = (0, JB.useRef)(null),
          xB = (0, JB.useRef)(null),
          {
            openInGameMenuName: DB,
            openEverythingMenuName: KB,
            worldPanelHud: VB
          } = (0, LB.o)(["openInGameMenuName", "openEverythingMenuName", "worldPanelHud"]),
          SB = BB => {
            TB && (tB.current = BB, YI.current = !0)
          };
        (0, wB.d)("OpenReportMenu", (() => {
          SB("JN")
        })), (0, wB.d)("OpenStoreFromCodeEditor", (() => {
          SB("store")
        })), (0, JB.useEffect)((() => {
          const BB = tB.current;
          null === BB || "JN" === BB && ("makeReport" === DB || "makeDiscordReport" === DB) || "store" === BB && null !== KB || (tB.current = null, null === DB && null === KB ? hB ? (xB.current = TZ.current, NB.l.Gq("EditLobbyCode", gB)) : NB.l.Gq("EditCodeBlock", {
            pos: gB,
            canChangePos: UB.current
          }) : (0, ho.v)())
        }), [DB, KB, hB, gB]), (0, JB.useEffect)((() => {
          if (TB) return () => {
            xB.current = null
          }
        }), [TB]);
        const [BI, II] = function() {
          const [BB, IB] = (0, JB.useState)(BG);
          return (0, wB.d)("CodeEditorAiHelperShown", (BB => {
            IB(BB)
          })), [BB, (0, JB.useCallback)((BB => {
            BG = BB, NB.l.Gq("CodeEditorAiHelperShown", BB)
          }), [])]
        }(), [ZI, TI] = (0, JB.useState)(null), [JI, oI] = (0, JB.useState)([]), [GI, vI] = (0, JB.useState)(0), [kI, cI] = (0, JB.useState)(0), [nI, hI] = (0, JB.useState)(""), FI = (0, JB.useRef)(null), [NI, gI] = (0, JB.useState)(hB ? bo.h : null), qI = hB || null !== gB, yI = (0, kB.d)("canEditCode"), UI = (0, kB.d)("canUseDevCreativeItems"), WI = (0, no.h)("welcome"), dI = (0, no.h)("docsOverview"), CI = dI ? "docsOverview" : "welcome", QI = null !== dI && void 0 !== dI ? dI : WI, sI = (0, no.h)("aiHelperOverview"), wI = sI ? "aiHelperOverview" : "welcome", OI = null !== sI && void 0 !== sI ? sI : WI, YI = (0, JB.useRef)(!1), iI = (0, JB.useRef)(!1), pI = (0, JB.useRef)(null), [aI, HI] = (0, JB.useState)(""), [MI, jI] = (0, JB.useState)(!1), [PI, RI] = (0, JB.useState)(null), rI = (0, YB.j)("connectedGame"), mI = hB && yI && "classic" === rI.gameNameWithVariation && !(0, zI.G)(rI.lobbyName), [XI, LI] = (0, JB.useState)(null), [eI, fI] = (0, JB.useState)({
          [QJ.i]: ""
        }), [AI, tI] = (0, JB.useState)({
          assets: {},
          revision: 0
        }), bI = (0, JB.useRef)(AI), xI = (0, JB.useCallback)((BB => {
          var IB;
          BB.revision < bI.current.revision || (bI.current = BB, tI(BB), QB(BB.startupError ? `Schematics could not load: ${BB.startupError}` : ""), null === (IB = gZ.current) || void 0 === IB || IB.onLobbyFilesChanged({
            ...kZ.current,
            ...(0, MJ.o)(BB.assets)
          }))
        }), []), [EI, DI] = (0, JB.useState)(QJ.i), [KI, VI] = (0, JB.useState)(null), [SI, BZ] = (0, JB.useState)(null), IZ = (0, JB.useRef)(!1), ZZ = (0, JB.useRef)(null), TZ = (0, JB.useRef)(EI);
        TZ.current = EI;
        const JZ = (0, JB.useRef)(KI);
        JZ.current = KI;
        const oZ = KI ? null : PI,
          GZ = oZ && !oZ.engineLocked ? oZ.worldCodeEngine : null,
          vZ = (0, JB.useRef)(SI);
        vZ.current = SI;
        const kZ = (0, JB.useRef)(eI);
        kZ.current = eI;
        const cZ = (0, JB.useRef)(null),
          nZ = (0, JB.useRef)(null),
          [hZ, zZ] = (0, JB.useState)(!1),
          FZ = (0, fJ.p)(),
          NZ = (0, JB.useRef)([]),
          gZ = (0, JB.useRef)(null),
          qZ = (0, JB.useRef)(null),
          yZ = (0, JB.useRef)(null);

        function UZ(BB) {
          dB(BB), clearTimeout(pI.current), pI.current = setTimeout((() => {
            dB({
              message: null,
              type: null
            })
          }), 3e3)
        }
        const dZ = (0, JB.useCallback)((function() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            IZ.current && ZZ.current && (cB.gameBridge.send("sendCodeCollab", {
              bJ: sJ.d.Leave,
              xJ: (0, sJ.z)(ZZ.current),
              Rn: !!BB || null
            }), IZ.current = !1, ZZ.current = null), LI(null)
          }), []),
          CZ = (0, JB.useCallback)((BB => {
            const IB = {
              kind: "lobby",
              path: BB
            };
            ZZ.current = IB, DI(BB), zB.current = "", cB.gameBridge.send("sendCodeCollab", {
              bJ: sJ.d.Join,
              xJ: (0, sJ.z)(IB)
            }), IZ.current = !0
          }), []),
          QZ = (0, JB.useCallback)((BB => {
            var IB;
            const ZB = null === (IB = qZ.current) || void 0 === IB ? void 0 : IB.collabState;
            return ZB && "lobby" === ZB.docKey.kind && ZB.docKey.path === BB && TZ.current === BB ? Promise.resolve({
              doc: ZB.doc,
              version: ZB.version,
              clientID: ZB.clientID,
              docKey: ZB.docKey,
              httpConfig: ZB.httpConfig
            }) : new Promise(((IB, ZB) => {
              const TB = setTimeout((() => {
                  NZ.current = NZ.current.filter((BB => BB !== JB)), ZB(new Error(`Timed out joining ${BB}`))
                }), 15e3),
                JB = ZB => {
                  "lobby" === ZB.docKey.kind && ZB.docKey.path === BB && (clearTimeout(TB), NZ.current = NZ.current.filter((BB => BB !== JB)), IB(ZB))
                };
              NZ.current.push(JB), TZ.current !== BB ? (dZ(!0), CZ(BB)) : IZ.current || CZ(BB)
            }))
          }), [CZ, dZ]),
          sZ = (0, JB.useCallback)((async function(BB, IB) {
            let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
            const TB = Date.now();
            let JB = BB in kZ.current;
            for (; JB !== IB;) {
              if (Date.now() - TB > ZB) throw new Error(`Timed out waiting for lobby path ${BB} present=${IB}`);
              await (0, UT.Q)(50), JB = BB in kZ.current
            }
          }), []),
          wZ = (0, JB.useCallback)((BB => {
            const IB = kZ.current,
              ZB = QJ.i in IB && QJ.m in IB;
            if (!(0, wJ.g)(BB) || ZB) {
              if (TZ.current === BB) {
                var TB;
                const JB = ZB && (0, wJ.g)(BB) ? BB === QJ.i ? QJ.m : QJ.i : null !== (TB = (0, wJ.b)(IB)) && void 0 !== TB ? TB : QJ.i;
                nZ.current = {
                  fromPath: BB,
                  toPath: JB
                }, DI(JB)
              }
              cB.gameBridge.send("sendCodeCollab", {
                bJ: sJ.d.DeleteFile,
                xJ: (0, sJ.z)({
                  kind: "lobby",
                  path: TZ.current
                }),
                rn: BB
              })
            }
          }), []),
          OZ = (0, JB.useCallback)((BB => {
            xB.current = null, VI(null), BZ(null), !hB || BB === TZ.current && IZ.current || (dZ(!0), CZ(BB))
          }), [hB, dZ, CZ]),
          YZ = (0, JB.useCallback)(((BB, IB) => {
            const ZB = aJ.e[BB],
              TB = ZB && IB in ZB.files ? IB : "index.ts";
            if (BB !== JZ.current || TB !== vZ.current) {
              var JB;
              if (BB !== JZ.current) null === (JB = gZ.current) || void 0 === JB || JB.stopContinuousSync(), dZ(!0);
              VI(BB), BZ(TB)
            }
          }), [dZ]),
          iZ = (0, JB.useCallback)((BB => {
            var IB;
            const ZB = TZ.current,
              TB = kZ.current[ZB],
              JB = IZ.current && !JZ.current && ZB in BB && void 0 !== TB ? {
                ...BB,
                [ZB]: TB
              } : BB;
            fI(JB);
            const oB = cZ.current;
            if (oB && oB in BB) cZ.current = null, oB !== TZ.current && OZ(oB);
            else if (!(TZ.current in BB) && IZ.current && !JZ.current) {
              var GB;
              OZ(null !== (GB = (0, wJ.b)(BB)) && void 0 !== GB ? GB : QJ.i)
            }
            null === (IB = gZ.current) || void 0 === IB || IB.onLobbyFilesChanged({
              ...JB,
              ...(0, MJ.o)(bI.current.assets)
            })
          }), [OZ]),
          pZ = (0, JB.useCallback)((() => So(TZ.current).then((async BB => {
            if (!IZ.current || !BB.files) return null;
            iZ(BB.files);
            const IB = await VJ({
              action: "state"
            });
            return xI(IB), {
              ...BB.files,
              ...(0, MJ.o)(IB.assets)
            }
          })).catch((BB => (console.error("[CodeCollab] Failed to fetch lobby files via HTTP", BB), UZ({
            message: "Could not refresh the file list",
            type: "warning"
          }), null)))), [iZ, xI]),
          aZ = () => {
            vB()
          };
        (0, JB.useEffect)((() => {
          if (QB(""), !TB || !hB) return;
          let BB = !1;
          return bI.current = {
            assets: {},
            revision: 0
          }, tI(bI.current), VJ({
            action: "state"
          }).then((IB => {
            BB || xI(IB)
          })).catch((IB => {
            console.error("Could not load project schematics", IB), BB || QB("Could not load schematics. Reopen the Code Editor to retry.")
          })), () => {
            BB = !0
          }
        }), [TB, hB, xI]);
        const HZ = (0, JB.useCallback)((function() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            ZZ.current && cB.gameBridge.send("sendCodeCollab", {
              bJ: sJ.d.Submit,
              xJ: (0, sJ.z)(ZZ.current),
              ...BB ? {
                VJ: "keepOpen"
              } : {}
            })
          }), []),
          MZ = (0, JB.useCallback)((() => {
            if (!ZZ.current || "lobby" !== ZZ.current.kind) return;
            const BB = aI.trim();
            (0, OJ.n)(BB) ? (cB.gameBridge.send("sendCodeCollab", {
              bJ: sJ.d.ReloadAsVariation,
              xJ: (0, sJ.z)(ZZ.current),
              VJ: BB
            }), jI(!1)) : UZ({
              message: "Variation must be 1-32 characters: A-Z, a-z, 0-9, _, -",
              type: "warning"
            })
          }), [aI]),
          jZ = (0, JB.useCallback)((BB => {
            cB.gameBridge.send("sendCodeCollab", {
              bJ: sJ.d.SetEngine,
              xJ: (0, sJ.z)({
                kind: "lobby",
                path: TZ.current
              }),
              VJ: BB
            })
          }), []),
          PZ = (0, JB.useCallback)((BB => {
            if (!JZ.current && yI && (UB.current || hB)) {
              if (hB) {
                var IB;
                const ZB = (0, wJ.n)(kZ.current, TZ.current),
                  TB = Math.min(uI.A, Math.max(0, uI.C - ZB)),
                  JB = BB.slice(0, TB);
                return zB.current = JB, fI((BB => ({
                  ...BB,
                  [TZ.current]: JB
                }))), void(null === (IB = gZ.current) || void 0 === IB || IB.onDocTextChanged(TZ.current, JB))
              }
              zB.current = BB, hI(BB)
            }
          }), [yI, hB]);
        (0, wB.d)("EditLobbyCode", (BB => {
          var IB;
          MB.featureFlags.canSeePlayerWrittenText && hB && (dZ(), yB(BB), zB.current = "", fI({
            [QJ.i]: ""
          }), RI(null), DI(QJ.i), VI(null), BZ(null), cZ.current = null, nZ.current = null, null === (IB = gZ.current) || void 0 === IB || IB.stopContinuousSync(), oB(), CZ(QJ.i))
        })), (0, wB.d)("EditCodeBlock", (BB => {
          let {
            pos: IB,
            canChangePos: ZB
          } = BB;
          if (MB.featureFlags.canSeePlayerWrittenText && !hB)
            if (dZ(), null !== IB && (IB = [...IB]), yB(IB), UB.current = ZB, null !== IB) {
              zB.current = "", hI(""), oB();
              const BB = {
                  kind: "codeBlock",
                  pos: IB
                },
                TB = (0, sJ.z)(BB);
              FI.current !== TB && (FI.current = TB, oI([]), cI(GI)), gI((0, bo.d)(TB, [IB[0], IB[1], IB[2]], !!ZB)), ZZ.current = BB, cB.gameBridge.send("sendCodeCollab", {
                bJ: sJ.d.Join,
                xJ: (0, sJ.z)(BB)
              }), IZ.current = !0
            } else TB && vB()
        })), (0, wB.d)("codeCollabRejoin", (BB => {
          const IB = ZZ.current ? (0, sJ.z)(ZZ.current) : null;
          IB && BB.docKey === IB && (zB.current = BB.doc, hB || hI(BB.doc), LI((IB => IB ? {
            ...IB,
            doc: BB.doc,
            version: BB.version,
            clientID: (0, pJ.d)()
          } : IB)))
        })), (0, wB.d)("codeCollab", (BB => {
          var IB;
          const ZB = ZZ.current ? (0, sJ.z)(ZZ.current) : null;
          if (BB.type === sJ.g.LobbyFilesChanged && hB) {
            if ("string" !== typeof BB.files) return void pZ();
            try {
              iZ(JSON.parse(BB.files))
            } catch (cB) {
              console.error("[CodeCollab] Failed to parse lobby files", cB), pZ()
            }
            return
          }
          if (BB.type === sJ.g.EngineSettings && hB) return void RI(To(BB.engineSettings));
          const JB = BB.type === sJ.g.Joined ? (0, sJ.l)(BB.docKey) : null,
            oB = hB && "lobby" === (null === (IB = ZZ.current) || void 0 === IB ? void 0 : IB.kind) && (0, wJ.g)(ZZ.current.path) && "lobby" === (null === JB || void 0 === JB ? void 0 : JB.kind) && (0, wJ.g)(JB.path);
          if (!ZB || BB.docKey === ZB || oB)
            if (BB.type !== sJ.g.ForceClose) {
              if (TB)
                if (BB.type === sJ.g.Joined) {
                  var GB;
                  const nB = JSON.parse(BB.peers),
                    FB = BB.existingCursors ? JSON.parse(BB.existingCursors) : [],
                    qB = (0, pJ.d)(),
                    yB = KJ(),
                    {
                      gsUrl: UB,
                      gameNameWithVariation: WB,
                      lobbyName: CB
                    } = yB,
                    QB = null !== (GB = (0, sJ.l)(BB.docKey)) && void 0 !== GB ? GB : ZZ.current;
                  QB && (ZZ.current = QB, "lobby" === QB.kind && (DI(QB.path), TZ.current = QB.path));
                  const sB = QB || (hB ? {
                    kind: "lobby",
                    path: TZ.current
                  } : {
                    kind: "codeBlock",
                    pos: gB
                  });

                  function wB(IB) {
                    var ZB, TB;
                    if (!IZ.current) return;
                    const JB = null !== (ZB = IB.code) && void 0 !== ZB ? ZB : "",
                      oB = null !== (TB = IB.collabVersion) && void 0 !== TB ? TB : 0;
                    zB.current = JB, hB || hI(JB), hB && IB.files ? fI(IB.files) : hB && fI((BB => ({
                      ...BB,
                      [TZ.current]: JB
                    })));
                    const GB = {
                      doc: JB,
                      version: oB,
                      clientID: qB,
                      docKey: sB,
                      peers: nB,
                      editorCount: BB.editorCount,
                      existingCursors: FB,
                      httpConfig: yB
                    };
                    if (LI(GB), "lobby" === sB.kind) {
                      var vB;
                      const BB = {
                        doc: JB,
                        version: oB,
                        clientID: qB,
                        docKey: sB,
                        httpConfig: yB
                      };
                      for (const IB of [...NZ.current]) IB(BB);
                      null === (vB = gZ.current) || void 0 === vB || vB.startWhenReady()
                    }
                    IB.canSeeCode ? (clearTimeout(pI.current), dB({
                      message: null,
                      type: null
                    })) : function(BB) {
                      clearTimeout(pI.current), dB(BB)
                    }(ZG);
                    const kB = xB.current;
                    xB.current = null, hB && kB && IB.files && kB in IB.files && kB !== TZ.current && OZ(kB)
                  }
                  hB ? So(TZ.current).then(wB).catch((BB => {
                    console.error("[CodeCollab] Failed to fetch lobby code via HTTP", BB), dZ()
                  })) : (0, CJ.postJsonWithMetricsCookiesAndJsonResponse)(`${UB}/code/get-code-block`, dJ.ck["get-code-block"].toBuffer({
                    gameNameWithVariation: WB,
                    lobbyName: CB,
                    pos: gB
                  }), {
                    retries: 1
                  }).then(wB).catch((BB => {
                    console.error("[CodeCollab] Failed to fetch code block via HTTP", BB), dZ()
                  }))
                } else if (BB.type === sJ.g.Presence) {
                if (!ZB) return;
                const OB = JSON.parse(BB.peers);
                LI((IB => IB ? {
                  ...IB,
                  peers: OB,
                  editorCount: BB.editorCount
                } : IB))
              }
            } else {
              var kB;
              if (!ZB) return;
              TB && hB && "keptOpen" === BB.updates && NB.l.Gq("CodeEditorKeepEdits");
              const YB = ZZ.current;
              IZ.current = !1, ZZ.current = null, LI(null);
              if (!hB || "close" === BB.updates) return (0, to.i)(), void(TB && vB());
              if (!TB) return;
              const iB = kZ.current,
                pB = nZ.current;
              nZ.current = null;
              const aB = "lobby" === (null === YB || void 0 === YB ? void 0 : YB.kind) && YB.path === (null === pB || void 0 === pB ? void 0 : pB.fromPath),
                HB = pB && (aB || pB.toPath in iB || (0, wJ.g)(pB.toPath)) ? pB.toPath : TZ.current in iB ? TZ.current : null !== (kB = (0, wJ.b)(iB)) && void 0 !== kB ? kB : QJ.i;
              CZ(HB)
            }
        })), (0, wB.d)("refetchCode", (() => {
          MB.featureFlags.canSeePlayerWrittenText && TB && IZ.current && (yI || (dZ(), hB ? NB.l.Gq("EditLobbyCode", gB) : NB.l.Gq("EditCodeBlock", {
            pos: gB,
            canChangePos: UB.current
          })))
        }));
        const RZ = (0, JB.useCallback)((() => {
            TB && (mB(!1), window.open("/docs", "_blank", "popup=yes,width=1200,height=800"))
          }), [TB]),
          rZ = (0, JB.useCallback)((() => {
            mB(!1)
          }), []);
        (0, JB.useEffect)((() => {
          TB && yI && ("docsButton" === QI && rB ? (0, ho.f)("docsButton") : QI && ho.g.includes(QI) && !rB && (mB(!0), II(!1)))
        }), [TB, yI, QI, rB, II]);
        const mZ = (0, JB.useCallback)((() => {
          II(!1)
        }), [II]);
        (0, JB.useEffect)((() => {
          TB && yI && qI && ("aiHelperButton" === OI && BI ? (0, ho.f)("aiHelperButton") : OI && ho.e.includes(OI) && !BI && (II(!0), mB(!1)))
        }), [TB, yI, qI, OI, BI, II]), (0, JB.useEffect)((() => {
          if (!TB || !yI) return;
          const BB = hB ? "worldCode" : "codeBlock";
          return (0, ho.z)(BB, !0), () => {
            (0, ho.z)(BB, !1)
          }
        }), [TB, yI, hB]), (0, JB.useEffect)((() => {
          if (TB) return () => {
            YI.current ? YI.current = !1 : (0, ho.v)()
          }
        }), [TB]), (0, JB.useEffect)((() => {
          (0, ho.A)("exportButton", !!UI)
        }), [UI]);
        const {
          t: XZ
        } = (0, EB.G)(), LZ = !BI && GI > kI, eZ = LZ ? FB.M : FB.A, uZ = (0, JB.useCallback)(((BB, IB) => {
          NB.l.Gq("CodeEditorGoToLine", {
            path: BB,
            line: IB
          }), OZ(BB)
        }), [OZ]), fZ = (0, JB.useCallback)((BB => {
          yZ.current = BB
        }), []), lZ = function(BB, IB) {
          const [ZB, TB] = (0, JB.useState)(null);
          return (0, JB.useEffect)((() => {
            if (!IB) return void TB(null);
            let ZB = !1;
            return uJ(BB).then((BB => {
              ZB || TB(BB)
            }), (BB => {
              console.error("[CodeEditor] could not collect the imported plugins", BB), ZB || TB(null)
            })), () => {
              ZB = !0
            }
          }), [BB, IB]), ZB
        }(eI, TB);
        (0, JB.useEffect)((() => {
          lZ && KI && !lZ.includes(KI) && (VI(null), BZ(null), hB && !IZ.current && CZ(TZ.current))
        }), [KI, lZ, hB, CZ]), qZ.current = {
          collabState: XI,
          ensureJoinedPath: QZ,
          waitForLobbyPath: sZ,
          pullLobbyFiles: pZ,
          t: XZ,
          canEditCode: !!yI
        }, gZ.current || (gZ.current = new EJ({
          getLobbyFiles: () => ({
            ...kZ.current,
            ...(0, MJ.o)(bI.current.assets)
          }),
          deleteSchematic: async BB => {
            const IB = await VJ({
              action: "remove",
              path: BB,
              expectedRevision: bI.current.revision
            });
            xI(IB)
          },
          getActivePath: () => TZ.current,
          getCollabSnapshot: () => {
            var BB;
            if (JZ.current) return null;
            const IB = null === (BB = qZ.current) || void 0 === BB ? void 0 : BB.collabState;
            return IB ? {
              doc: IB.doc,
              version: IB.version,
              clientID: IB.clientID,
              docKey: IB.docKey,
              httpConfig: IB.httpConfig
            } : null
          },
          replaceActiveDoc: (BB, IB) => {
            var ZB, TB;
            return null !== (ZB = null === (TB = yZ.current) || void 0 === TB ? void 0 : TB.call(yZ, BB, IB)) && void 0 !== ZB && ZB
          },
          ensureJoined: BB => qZ.current.ensureJoinedPath(BB),
          createFile: (BB, IB) => {
            !1 !== (null === IB || void 0 === IB ? void 0 : IB.focus) && (cZ.current = BB), cB.gameBridge.send("sendCodeCollab", {
              bJ: sJ.d.CreateFile,
              xJ: (0, sJ.z)({
                kind: "lobby",
                path: TZ.current
              }),
              rn: BB
            })
          },
          renameFile: (BB, IB) => {
            const ZB = (0, sJ.z)({
              kind: "lobby",
              path: TZ.current
            });
            TZ.current === BB && (nZ.current = {
              fromPath: BB,
              toPath: IB
            }, DI(IB)), cB.gameBridge.send("sendCodeCollab", {
              bJ: sJ.d.RenameFile,
              xJ: ZB,
              rn: BB,
              mn: IB
            })
          },
          deleteFile: BB => {
            wZ(BB)
          },
          waitForLobbyPath: (BB, IB, ZB) => qZ.current.waitForLobbyPath(BB, IB, ZB),
          pullLobbyFiles: () => qZ.current.pullLobbyFiles(),
          setMessage: (BB, IB) => {
            UZ({
              message: BB,
              type: IB
            })
          },
          onUnlinked: () => {
            zZ(!1)
          },
          t: BB => qZ.current.t(BB),
          canEditCode: () => qZ.current.canEditCode,
          getStorageKey: () => {
            const {
              gameNameWithVariation: BB,
              lobbyName: IB
            } = cB.gameBridge.latest("connectedGame");
            return (0, fJ.d)(BB, IB)
          }
        }));
        const AZ = (0, JB.useCallback)((async BB => {
            const IB = gZ.current;
            if (!IB) return !1;
            try {
              return await IB.writeLobbyFiles(BB)
            } catch (ZB) {
              return console.error("World Code AI: couldn't write the change", ZB), !1
            }
          }), []),
          tZ = (0, JB.useCallback)((async BB => {
            var IB, ZB;
            const TB = null === (IB = BB.find((BB => BB.path === Ao.b))) || void 0 === IB ? void 0 : IB.text,
              JB = ZZ.current;
            return void 0 !== TB && "codeBlock" === (null === JB || void 0 === JB ? void 0 : JB.kind) && (!(null === (ZB = yZ.current) || void 0 === ZB || !ZB.call(yZ, (0, sJ.z)(JB), TB)) && (zB.current = TB, hI(TB), !0))
          }), []),
          bZ = (0, JB.useCallback)((async () => {
            try {
              var BB, IB;
              const ZB = await So(QJ.i);
              return !1 === ZB.canSeeCode ? null : null !== (BB = ZB.files) && void 0 !== BB ? BB : {
                [QJ.i]: null !== (IB = ZB.code) && void 0 !== IB ? IB : ""
              }
            } catch (ZB) {
              return console.error("World Code AI: couldn't read World Code for a code block", ZB), null
            }
          }), []),
          xZ = (0, JB.useMemo)((() => ({
            [Ao.b]: nI
          })), [nI]),
          EZ = (0, JB.useCallback)(((BB, IB) => {
            NB.l.Gq("CodeEditorGoToLine", {
              path: Ao.b,
              line: IB
            })
          }), []);
        (0, JB.useEffect)((() => {
          BI && TB && cI(GI)
        }), [BI, TB, GI]);
        const DZ = (0, JB.useCallback)((() => {
            var BB, IB;
            HZ();
            const ZB = (0, MB.isTouchscreen)() ? "open World Code again" : `press ${null!==(BB=null===(IB=lI.u.OpenCodeEditor)||void 0===IB?void 0:IB[0])&&void 0!==BB?BB:"F8"}`,
              TB = hB ? `\ud83e\udd16 Try out your change, then ${ZB} to tell the AI Helper how it went.` : "\ud83e\udd16 Click the code block to try your change, then open it again to tell the AI Helper how it went.";
            NB.l.Gq("chat", {
              content: [{
                str: TB,
                style: {
                  color: OB.P.cyanUiText
                }
              }]
            })
          }), [HZ, hB]),
          KZ = (0, JB.useCallback)((BB => {
            const IB = gB,
              ZB = UB.current;
            hB || !IB || cB.gameBridge.lookup("codeBlockClickable", IB) ? (0, to.m)(BB, {
              submit: () => {
                HZ(), NB.l.Gq("chat", {
                  content: [{
                    str: "\ud83e\udd16 Testing your change. The AI Helper comes back in a moment.",
                    style: {
                      color: OB.P.cyanUiText
                    }
                  }]
                }), !hB && IB && setTimeout((() => {
                  cB.gameBridge.send("clickCodeBlock", IB)
                }), 1e3)
              },
              reopen: () => {
                (0, eB.n)() || (hB ? NB.l.Gq("EditLobbyCode", IB) : NB.l.Gq("EditCodeBlock", {
                  pos: IB,
                  canChangePos: ZB
                }))
              }
            }) : DZ()
          }), [HZ, hB, gB, DZ]),
          VZ = (0, JB.useCallback)((() => {
            II(!1)
          }), [II]),
          SZ = (0, JB.useRef)(aZ);
        SZ.current = aZ;
        const BT = (0, JB.useCallback)((function(BB) {
            let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            NB.l.Gq("WorldCodeAiDraft", {
              text: BB,
              send: IB
            }), SZ.current(), NB.l.Gq("EditLobbyCode", gB)
          }), [gB]),
          IT = (0, JB.useCallback)((BB => {
            SZ.current(), BB.codeBlock ? NB.l.Gq("EditCodeBlock", {
              pos: [...BB.pos],
              canChangePos: BB.canChangePos
            }) : NB.l.Gq("EditLobbyCode", gB)
          }), [gB]);
        (0, wB.d)("WorldCodeAiDraft", (BB => {
          hB && (TI(BB), II(!0))
        }));
        const ZT = !!yI && !!QI && ho.g.includes(QI),
          TT = !!yI && !!OI && ho.e.includes(OI);
        (0, JB.useEffect)((() => {
          TB && BI && qI && !ZT && mB(!1)
        }), [TB, BI, qI, ZT]);
        const JT = (0, JB.useCallback)((() => {
            II(!1), mB(!1)
          }), [II]),
          {
            vz: oT,
            setWorld: GT,
            toggleWorld: vT
          } = function(BB) {
            let {
              showAi: IB,
              showDocs: ZB,
              showChat: TB,
              hideOtherRightPanels: oB
            } = BB;
            const [GB, vB] = (0, JB.useState)("hidden"), kB = (0, JB.useRef)(null), cB = (0, JB.useCallback)((() => {
              kB.current = null, vB((BB => "hidden" === BB ? BB : (0, Uo.e)() ? "hidden" : "shown"))
            }), []);
            (0, JB.useEffect)((() => {
              (IB || ZB) && cB()
            }), [IB, ZB, cB]), (0, JB.useEffect)((() => {
              TB && cB()
            }), [TB, cB]);
            const nB = "hidden" !== GB && (0, Uo.e)();
            (0, JB.useLayoutEffect)((() => {
              if (nB) {
                const BB = document.activeElement;
                BB instanceof HTMLElement && BB.closest(".cm-content") && (kB.current = BB, BB.blur())
              } else {
                var BB;
                null === (BB = kB.current) || void 0 === BB || BB.focus(), kB.current = null
              }
            }), [nB]);
            const hB = (0, JB.useCallback)((() => {
              "hidden" === GB ? (vB("shown"), (0, Uo.e)() && oB()) : vB("hidden")
            }), [GB, oB]);
            return {
              vz: GB,
              setWorld: vB,
              toggleWorld: hB
            }
          }({
            showAi: BI,
            showDocs: rB,
            showChat: XB,
            hideOtherRightPanels: JT
          }),
          kT = BI && null !== NI && qI,
          cT = (0, JB.useCallback)((() => {
            TI(null)
          }), []),
          [nT, hT] = (0, JB.useState)(null);
        (0, wB.d)("WorldCodeAiSelection", (BB => {
          TB && (hT(BB), II(!0), mB(!1))
        }));
        const zT = (0, JB.useCallback)((() => {
          hT(null)
        }), []);
        (0, wB.d)("chat", (BB => {
          let {
            content: IB
          } = BB;
          if (!hB && null === FI.current) return;
          const ZB = Array.isArray(IB) ? IB : [IB],
            TB = ZB.some((BB => {
              var IB;
              return (null === BB || void 0 === BB || null === (IB = BB.style) || void 0 === IB ? void 0 : IB.color) === OB.P.redUiText
            })),
            JB = ZB.map((BB => {
              var IB;
              const ZB = null !== (IB = null === BB || void 0 === BB ? void 0 : BB.str) && void 0 !== IB ? IB : BB;
              return "string" === typeof ZB ? ZB : ""
            })).join("");
          TB && /world code|error/i.test(JB) && (oI((BB => [...BB, JB].slice(-10))), vI((BB => BB + 1)), (0, to.f)(JB))
        })), (0, JB.useEffect)((() => {
          if (!TB || !hB || !FZ) return;
          let BB = !1;
          return (async (IB, ZB) => {
            const TB = await (null === (IB = gZ.current) || void 0 === IB ? void 0 : IB.tryRestoreHandle());
            !BB && TB && (zZ(!0), null === (ZB = gZ.current) || void 0 === ZB || ZB.startWhenReady())
          })(), () => {
            BB = !0
          }
        }), [TB, hB, FZ]), (0, JB.useEffect)((() => {
          var BB;
          TB || (null === (BB = gZ.current) || void 0 === BB || BB.stopContinuousSync(), dZ(!1), iI.current && (iI.current = !1, cB.gameBridge.send("sendChatMessage", {
            Xn: "//export",
            channelName: null
          })))
        }), [TB, dZ]);
        const FT = (0, JB.useCallback)((async () => {
            if (FZ && gZ.current) try {
              if (!await gZ.current.linkFolder()) return;
              zZ(!0), await gZ.current.startWhenReady()
            } catch (BB) {
              console.error("[WorldCodeDirectorySync] Link failed", BB), UZ({
                message: XZ("codeEditor:directorySyncError"),
                type: "warning"
              })
            }
          }), [FZ, XZ]),
          NT = (0, JB.useCallback)((async () => {
            gZ.current && await gZ.current.unlinkFolder()
          }), []),
          gT = (0, JB.useCallback)((() => {
            FZ ? hZ ? NT() : FT() : KT.NotificationProvider.showAlertPopup({
              title: "codeEditor:directorySyncUnsupported",
              subtitle: "codeEditor:directorySyncUnsupportedBody",
              confirmText: "general:ok"
            })
          }), [FZ, hZ, FT, NT]),
          qT = hB && "hidden" !== oT;
        return (0, nB.jsxs)(GB.c, {
          className: WZ()("CodeEditorBg", {
            CodeEditorLight: HB,
            WorldShown: "hidden" !== oT,
            WorldTouchControl: "touchControls" === VB
          }),
          close: aZ,
          escDoesExit: !0,
          show: TB,
          togglePointerLock: !1,
          globallyUniqueKey: hB ? "LobbyCodeEditor" : "CodeBlockEditor",
          children: [(0, nB.jsx)(no.d, {
            tutorial: "welcome",
            step: "codeBlockIntro",
            text: XZ("codeEditor:tutorialCodeBlockIntro"),
            enabled: !!yI && !hB
          }), (0, nB.jsx)(no.d, {
            tutorial: "welcome",
            step: "worldCodeIntro",
            text: (0, nB.jsxs)(nB.Fragment, {
              children: [(0, nB.jsx)("p", {
                children: XZ("codeEditor:tutorialWorldCodeWelcome")
              }), (0, nB.jsxs)("ul", {
                className: "TutorialStepList",
                children: [(0, nB.jsx)("li", {
                  children: XZ("codeEditor:tutorialWorldCodeUseSetUp")
                }), (0, nB.jsx)("li", {
                  children: XZ("codeEditor:tutorialWorldCodeUseReact")
                }), (0, nB.jsx)("li", {
                  children: XZ("codeEditor:tutorialWorldCodeUseRun")
                })]
              })]
            }),
            enabled: !!yI && hB
          }), (0, nB.jsx)("div", {
            className: "CodeEditorTitle",
            children: hB ? "World Code" : "Code Block"
          }), (0, nB.jsxs)("div", {
            className: "CodeEditorTopBar",
            children: [(0, nB.jsxs)("div", {
              className: "CodeEditorTopLeft",
              children: [(0, nB.jsx)(bB.e, {
                tooltipInner: XZ(UI ? "codeEditor:exportTooltip" : "codeEditor:exportOwnerOnly"),
                delayShow: UI ? void 0 : 0,
                hideTooltip: "exportButton" === WI,
                children: (0, nB.jsx)(no.f, {
                  tutorial: "welcome",
                  step: "exportButton",
                  text: XZ("codeEditor:tutorialExport"),
                  enabled: !!yI,
                  children: (0, nB.jsx)(FB.p, {
                    className: "CodeEditorButton",
                    disabled: !UI,
                    onClick: () => {
                      "exportButton" === WI && ((0, ho.f)("exportButton"), YI.current = !0), iI.current = !0, aZ()
                    },
                    padDestructive: !0,
                    children: XZ("codeEditor:exportWorld")
                  })
                })
              }), (0, nB.jsx)(uo, {
                vz: oT,
                setWorld: GT,
                toggleWorld: vT,
                aiShown: kT,
                closeAi: VZ
              })]
            }), (0, nB.jsxs)("div", {
              className: "CodeEditorTopRight",
              children: [yI && (0, nB.jsx)(bB.e, {
                tooltipInner: XZ("codeEditor:helpTooltip"),
                hideTooltip: "helpButton" === WI,
                children: (0, nB.jsx)(no.f, {
                  tutorial: "welcome",
                  step: "helpButton",
                  text: XZ("codeEditor:tutorialHelpButton"),
                  placement: "bottom",
                  children: (0, nB.jsx)(FB.g, {
                    className: "CodeEditorHelpButton",
                    ariaLabel: XZ("codeEditor:helpTooltip"),
                    onClick: () => {
                      (0, ho.f)("helpButton"), KT.NotificationProvider.showCustomPopup({
                        body: BB => (0, nB.jsx)(zo, {
                          close: BB
                        }),
                        unlockPointerKey: "codeEditorTutorials"
                      })
                    },
                    children: (0, nB.jsx)("div", {
                      className: "CodeEditorHelpButtonInner",
                      children: (0, nB.jsx)(qB.d, {
                        name: "circle-question"
                      })
                    })
                  })
                })
              }), (0, nB.jsx)(bB.e, {
                tooltipInner: XZ("codeEditor:closeTooltip"),
                children: (0, nB.jsx)("div", {
                  className: "CodeEditorCloseButtonClickZone",
                  onClick: () => {
                    aZ()
                  },
                  children: (0, nB.jsx)(FB.l, {
                    className: "CodeEditorCloseButton"
                  })
                })
              })]
            })]
          }), (0, nB.jsx)(iJ, {
            peers: null !== (IB = null === XI || void 0 === XI ? void 0 : XI.peers) && void 0 !== IB ? IB : []
          }), (0, nB.jsxs)("div", {
            className: WZ()("CodeEditorMainArea", {
              WorldCovers: "always" === Wo(oT),
              WorldCoversWhenNarrow: "narrow" === Wo(oT)
            }),
            children: [XB && AB && (0, nB.jsx)(Uo.c, {
              side: "left",
              defaultSize: "max(16rem, 24%)",
              onClose: () => {
                uB(!1)
              },
              children: (0, nB.jsx)(yo, {
                inputRef: fB
              })
            }), hB && (0, nB.jsx)(RJ, {
              schematics: AI.assets,
              onManageSchematic: BB => {
                yI && KT.NotificationProvider.showCustomPopup({
                  body: IB => (0, nB.jsx)(Zo, {
                    initialPath: BB,
                    onChanged: xI,
                    onClose: IB
                  }),
                  unlockPointerKey: "worldCodeSchematics"
                })
              },
              files: eI,
              activePath: EI,
              canEdit: !!yI,
              directoryLinked: hZ,
              pluginNames: null !== lZ && void 0 !== lZ ? lZ : IG,
              activePluginName: KI,
              activePluginFile: SI,
              onSelect: OZ,
              onSelectPlugin: YZ,
              onToggleDirectorySync: gT,
              onCreate: BB => {
                cZ.current = BB, cB.gameBridge.send("sendCodeCollab", {
                  bJ: sJ.d.CreateFile,
                  xJ: (0, sJ.z)({
                    kind: "lobby",
                    path: TZ.current
                  }),
                  rn: BB
                })
              },
              onRename: (BB, IB) => {
                TZ.current === BB && (nZ.current = {
                  fromPath: BB,
                  toPath: IB
                }, DI(IB)), cB.gameBridge.send("sendCodeCollab", {
                  bJ: sJ.d.RenameFile,
                  xJ: (0, sJ.z)({
                    kind: "lobby",
                    path: TZ.current
                  }),
                  rn: BB,
                  mn: IB
                })
              },
              onRenameFolder: (BB, IB) => {
                const [ZB] = (0, wJ.l)([TZ.current], BB, IB);
                ZB && (nZ.current = {
                  fromPath: ZB[0],
                  toPath: ZB[1]
                }, DI(ZB[1])), cB.gameBridge.send("sendCodeCollab", {
                  bJ: sJ.d.RenameFolder,
                  xJ: (0, sJ.z)({
                    kind: "lobby",
                    path: TZ.current
                  }),
                  rn: BB,
                  mn: IB
                })
              },
              onDelete: wZ
            }), (0, nB.jsx)("div", {
              className: WZ()("CodeEditorMessage", {
                CodeEditorMessageHidden: !sB.message,
                CodeEditorMessageSuccess: "success" === sB.type
              }),
              children: sB.message && (0, nB.jsx)("div", {
                className: "CodeEditorMessageText",
                children: sB.message
              })
            }), (0, nB.jsx)(JB.Suspense, {
              fallback: (0, nB.jsx)("div", {
                className: "CodeEditorContent",
                children: (0, nB.jsx)(iB.d, {})
              }),
              children: (0, nB.jsx)(xo, {
                isLobbyCode: hB,
                code: XI ? XI.doc : zB.current,
                files: hB ? eI : void 0,
                activePath: hB ? EI : void 0,
                pluginName: KI,
                pluginFile: SI,
                pluginSource: KI && SI ? null === (ZB = aJ.e[KI]) || void 0 === ZB ? void 0 : ZB.files[SI] : void 0,
                onChange: PZ,
                canEditCode: yI,
                setTemporaryMessage: UZ,
                close: aZ,
                showTooltips: pB,
                lightMode: HB,
                collabState: XI,
                setActiveDocReplacer: fZ,
                showAiHints: qI && PB,
                canAiChangeCode: !!yI && (hB || !!UB.current),
                onRemoteDocChange: BB => {
                  var IB;
                  (zB.current = BB, hB) ? (fI((IB => ({
                    ...IB,
                    [TZ.current]: BB
                  }))), null === (IB = gZ.current) || void 0 === IB || IB.onDocTextChanged(TZ.current, BB)) : hI(BB)
                }
              })
            }), (rB || kT || "hidden" !== oT) && (0, nB.jsxs)(Co, {
              vz: oT,
              worldPanel: (0, nB.jsx)(Lo, {
                shown: oT,
                setShown: GT,
                canInsertCode: !!yI && !KI
              }),
              closeWorld: () => {
                GT("hidden")
              },
              aiShown: kT,
              defaultWidth: rB ? "40%" : "max(18rem, 36%)",
              children: [rB && (0, nB.jsx)(Uo.c, {
                onClose: ZT ? void 0 : rZ,
                children: (0, nB.jsx)(JB.Suspense, {
                  fallback: (0, nB.jsx)("div", {
                    className: "DocsPanel",
                    children: (0, nB.jsx)(iB.d, {})
                  }),
                  children: (0, nB.jsx)(Eo, {
                    popOutDocs: RZ,
                    hideDocs: rZ,
                    tutorialEnabled: !!yI
                  })
                })
              }), kT && (0, nB.jsx)(Uo.c, {
                onClose: TT ? void 0 : VZ,
                children: (0, nB.jsx)(JB.Suspense, {
                  fallback: (0, nB.jsx)("div", {
                    className: "CodeEditorPanelLoading",
                    children: (0, nB.jsx)(iB.d, {})
                  }),
                  children: (0, nB.jsx)(Do, {
                    target: NI,
                    chatKey: `${rI.gameNameWithVariation}/${rI.lobbyName}/aiHelper`,
                    historyKey: `${rI.gameNameWithVariation}/${rI.lobbyName}/${NI.key}`,
                    files: NI.codeBlock ? xZ : eI,
                    activePath: NI.codeBlock ? Ao.b : EI,
                    canEdit: !!yI && (NI.codeBlock ? !!UB.current : !KI),
                    isLoaded: null !== XI,
                    errors: JI,
                    errorCount: GI,
                    applyFiles: NI.codeBlock ? tZ : AZ,
                    submit: DZ,
                    testRun: KZ,
                    close: VZ,
                    goToLine: NI.codeBlock ? EZ : uZ,
                    openWorldCode: NI.codeBlock ? BT : void 0,
                    readWorldCode: NI.codeBlock ? bZ : void 0,
                    viewChunk: Ko,
                    viewGameState: Vo,
                    openTarget: yI ? IT : void 0,
                    draft: ZI,
                    onDraftUsed: cT,
                    selection: nT,
                    onSelectionUsed: zT
                  }, NI.key)
                })
              })]
            })]
          }), (null === oZ || void 0 === oZ ? void 0 : oZ.fallback) && (0, nB.jsx)(Jo, {
            fallback: oZ.fallback,
            onGoToLine: uZ
          }), (0, nB.jsxs)("div", {
            className: "CodeEditorButtons",
            "data-pad-hint-bar-avoid": !0,
            children: [(0, nB.jsx)(bB.e, {
              tooltipInner: XZ(HB ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
              placement: "top",
              children: (0, nB.jsx)(FB.g, {
                className: "CodeEditorButton CodeEditorThemeButton",
                ariaLabel: XZ(HB ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
                onClick: () => {
                  jB(!HB)
                },
                children: (0, nB.jsx)(qB.d, {
                  name: HB ? "moon" : "sun-bright"
                })
              })
            }), (0, nB.jsx)(bB.e, {
              tooltipInner: XZ(qT ? "codeEditorWorld:submitCodeTooltip" : "codeEditor:submitCodeTooltip"),
              placement: "top",
              children: (0, nB.jsx)(FB.p, {
                className: "CodeEditorButton",
                onClick: () => {
                  HZ(qT)
                },
                padDefaultFocus: !0,
                children: XZ("codeEditor:submitCode")
              })
            }), (0, nB.jsx)(bB.e, {
              tooltipInner: XZ(rB ? "codeEditor:hideDocsTooltip" : "codeEditor:showDocsTooltip"),
              placement: "top",
              hideTooltip: "docsButton" === QI || "hideDocsButton" === QI,
              children: (0, nB.jsx)(no.f, {
                tutorial: CI,
                step: rB ? "hideDocsButton" : "docsButton",
                text: XZ(rB ? "codeEditor:tutorialHideDocs" : "codeEditor:tutorialDocs"),
                enabled: !!yI,
                placement: "top",
                waitForClick: !0,
                onPrevious: rB && "welcome" === CI ? rZ : void 0,
                children: (0, nB.jsx)(FB.A, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    (0, ho.f)(rB ? "hideDocsButton" : "docsButton"), mB(!rB), II(!1)
                  },
                  children: XZ(rB ? "codeEditor:hideDocs" : "codeEditor:showDocs")
                })
              })
            }), qI && (0, nB.jsx)(no.f, {
              tutorial: wI,
              step: BI ? "hideAiHelperButton" : "aiHelperButton",
              text: XZ(BI ? "codeEditorAiTutorial:hideAiHelperButton" : "welcome" === wI ? "codeEditorAiTutorial:welcomeAiHelperButton" : "codeEditorAiTutorial:aiHelperButton"),
              enabled: !!yI,
              placement: "top",
              waitForClick: !0,
              onPrevious: BI && "welcome" === wI ? mZ : void 0,
              children: (0, nB.jsx)(eZ, {
                className: "CodeEditorButton",
                onClick: () => {
                  (0, ho.f)(BI ? "hideAiHelperButton" : "aiHelperButton"), II(!BI), mB(!1)
                },
                children: BI ? "Hide AI Helper" : LZ ? "Fix error with AI" : "AI Helper"
              })
            }), AB && (0, nB.jsx)(bB.e, {
              tooltipInner: XZ(XB ? "codeEditorChat:hideChatTooltip" : "codeEditorChat:showChatTooltip"),
              placement: "top",
              children: (0, nB.jsx)(FB.A, {
                className: "CodeEditorButton",
                onClick: () => {
                  lB.current = !XB, uB(!XB)
                },
                children: XZ(XB ? "codeEditorChat:hideChat" : "codeEditorChat:showChat")
              })
            }), (0, nB.jsx)(bB.e, {
              tooltipInner: XZ("hidden" === oT ? "codeEditorWorld:showWorldTooltip" : "codeEditorWorld:hideWorldTooltip"),
              placement: "top",
              children: (0, nB.jsx)(FB.A, {
                className: "CodeEditorButton CodeEditorWorldButton",
                onClick: vT,
                children: XZ("hidden" === oT ? "codeEditorWorld:showWorld" : "codeEditorWorld:hideWorld")
              })
            }), (0, nB.jsx)(bB.e, {
              tooltipInner: XZ("codeEditor:formatCodeTooltip"),
              placement: "top",
              children: (0, nB.jsx)(FB.g, {
                className: "CodeEditorButton",
                onClick: () => {
                  NB.l.Gq("FormatCode")
                },
                children: XZ("codeEditor:formatCode")
              })
            }), (0, nB.jsx)(bB.e, {
              tooltipInner: XZ("codeEditor:copyCodeTooltip"),
              placement: "top",
              children: (0, nB.jsx)(FB.g, {
                className: "CodeEditorButton",
                onClick: () => {
                  navigator.clipboard.writeText(zB.current).then((() => {
                    UZ({
                      message: "Successfully copied code to clipboard",
                      type: "success"
                    })
                  })).catch((() => {
                    UZ({
                      message: "Failed to copy code to clipboard",
                      type: "warning"
                    })
                  }))
                },
                children: XZ("codeEditor:copyCode")
              })
            }), (0, nB.jsx)(bB.e, {
              tooltipInner: XZ(pB ? "codeEditor:hideTooltipsTooltip" : "codeEditor:showTooltipsTooltip"),
              placement: "top",
              children: (0, nB.jsx)(FB.g, {
                className: "CodeEditorButton",
                onClick: () => {
                  aB(!pB)
                },
                children: XZ(pB ? "codeEditor:hideTooltips" : "codeEditor:showTooltips")
              })
            }), !hB && (0, nB.jsx)(bB.e, {
              tooltipInner: XZ("codeEditor:worldCodeTooltip"),
              placement: "top",
              hideTooltip: "worldCodeButton" === WI,
              children: (0, nB.jsx)(no.f, {
                tutorial: "welcome",
                step: "worldCodeButton",
                text: XZ("codeEditor:tutorialWorldCodeButton"),
                enabled: !!yI,
                placement: "top",
                waitForClick: !0,
                children: (0, nB.jsx)(FB.A, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    "worldCodeButton" === WI && ((0, ho.f)("worldCodeButton"), YI.current = !0), aZ(), NB.l.Gq("EditLobbyCode", gB)
                  },
                  children: XZ("codeEditor:worldCode")
                })
              })
            }), (mI || GZ || qI) && (0, nB.jsx)(bB.e, {
              tooltipInner: XZ("codeEditor:moreOptionsTooltip"),
              placement: "top",
              children: (0, nB.jsx)(FB.g, {
                className: "CodeEditorButton CodeEditorMoreButton",
                onClick: () => {
                  jI(!0)
                },
                children: (0, nB.jsx)(qB.d, {
                  name: "ellipsis"
                })
              })
            })]
          }), MI && (0, nB.jsx)(ST.c, {
            middleScreenPopupContainerClassName: "CodeEditorMoreOptionsPopup",
            close: () => {
              jI(!1)
            },
            body: (0, nB.jsx)(co, {
              engine: GZ,
              onSetEngine: jZ,
              aiHints: qI ? {
                shown: PB,
                setShown: RB
              } : null,
              variation: mI ? {
                name: aI,
                setName: HI,
                reload: MZ
              } : null
            })
          })]
        })
      })),
      JG = new Set(["makeReport", "makeDiscordReport", "inviteLink"]);

    function oG(BB) {
      return "inventory" === BB
    }
    const GG = (0, JB.memo)((function() {
      const {
        openEverythingMenuName: BB,
        openInGameMenuName: IB
      } = (0, LB.o)(["openEverythingMenuName", "openInGameMenuName"]), ZB = (0, YB.j)("fullInventory"), oB = (0, JB.useRef)(null), GB = (0, aI.i)();
      (0, wB.d)("toggleMenu", (BB => {
        var IB;
        if (!GB.shown) return;
        const ZB = LB.d.get("openInGameMenuName");
        let TB = BB.split("|")[0];
        const JB = null !== (IB = BB.split("|")[1]) && void 0 !== IB ? IB : null;
        ("closeCurrentMenu" === JB && ZB || TB === ZB) && (oB.current = null, TB = null);
        const vB = "closeCurrentMenu" === JB ? null : JB;
        oB.current !== vB && (oB.current = vB), null !== TB && (0, cJ.t)(cJ.e, {
          keepsMovement: oG(TB)
        }), LB.d.set({
          openInGameMenuName: TB
        })
      }));
      const vB = (0, JB.useCallback)((BB => () => {
          NB.l.Gq("toggleMenu", BB)
        }), []),
        kB = (0, JB.useRef)({
          cantCrouchIfNotFullscreen: vB("cantCrouchIfNotFullscreen"),
          makeReport: vB("makeReport"),
          makeDiscordReport: vB("makeDiscordReport"),
          editBook: vB("editBook"),
          editNameTag: vB("editNameTag"),
          inventory: vB("inventory"),
          inviteLink: vB("inviteLink"),
          writeOnBoard: vB("writeOnBoard"),
          codeEditor: vB("codeEditor"),
          lobbyCodeEditor: vB("lobbyCodeEditor"),
          customLobbyBlockEditor: vB("customLobbyBlockEditor"),
          ironChestPasskeyInput: vB("ironChestPasskeyInput"),
          petUi: vB("petUi")
        }),
        cB = (0, JB.useCallback)((() => {
          LB.d.set({
            openInGameMenuName: null
          })
        }), []),
        hB = (0, JB.useRef)(null);
      return (0, JB.useEffect)((() => {
        if (IB) {
          var BB;
          (0, cJ.t)(cJ.e, {
            keepsMovement: oG(IB)
          }), hB.current = JG.has(IB) ? null !== (BB = LB.d.get("openEverythingMenuName")) && void 0 !== BB ? BB : hB.current : null, LB.d.set({
            openEverythingMenuName: null
          })
        } else {
          const BB = hB.current;
          hB.current = null, null !== BB && null === LB.d.get("openEverythingMenuName") && LB.d.set({
            openEverythingMenuName: BB
          }), oB.current = null, (0, cJ.p)(cJ.e)
        }
      }), [IB]), (0, JB.useEffect)((() => {
        null !== BB && cB()
      }), [BB, cB]), (0, nB.jsxs)(nB.Fragment, {
        children: [(0, nB.jsx)(TB.l, {
          show: "clientGame" === IB
        }), (0, nB.jsx)(xT, {
          show: "cantCrouchIfNotFullscreen" === IB,
          onOpen: kB.current.cantCrouchIfNotFullscreen,
          onClose: cB
        }), (0, nB.jsx)(JJ, {
          show: "makeReport" === IB,
          onOpen: kB.current.makeReport,
          onClose: cB
        }), (0, nB.jsx)(kJ, {
          show: "makeDiscordReport" === IB,
          onOpen: kB.current.makeDiscordReport,
          onClose: cB
        }), (0, nB.jsx)(IZ, {
          show: "editBook" === IB,
          onOpen: kB.current.editBook,
          onClose: cB
        }), (0, nB.jsx)(SI, {
          show: "editNameTag" === IB,
          onOpen: kB.current.editNameTag,
          onClose: cB
        }), ZB && (0, nB.jsx)(AT, {
          show: "inventory" === IB,
          onOpen: kB.current.inventory,
          onClose: cB,
          variation: oB.current
        }), (0, nB.jsx)(HI, {
          show: "inviteLink" === IB,
          onClose: cB,
          option: oB.current
        }), (0, nB.jsx)(RB, {
          show: "retentionFeatures" === IB,
          onClose: cB
        }), (0, nB.jsx)(VI, {
          show: "writeOnBoard" === IB,
          onOpen: kB.current.writeOnBoard,
          onClose: cB
        }), (0, nB.jsx)(TG, {
          show: "lobbyCodeEditor" === IB,
          onOpen: kB.current.lobbyCodeEditor,
          onClose: cB,
          isLobbyCode: !0
        }), (0, nB.jsx)(TG, {
          show: "codeEditor" === IB,
          onOpen: kB.current.codeEditor,
          onClose: cB,
          isLobbyCode: !1
        }), (0, nB.jsx)(hJ, {
          show: "customLobbyBlockEditor" === IB,
          onOpen: kB.current.customLobbyBlockEditor,
          onClose: cB
        }), (0, nB.jsx)(CZ, {
          show: "ironChestPasskeyInput" === IB,
          onOpen: kB.current.ironChestPasskeyInput,
          onClose: cB
        }), (0, nB.jsx)(yJ, {
          togglePointerLock: !0,
          show: "petUi" === IB,
          onOpen: kB.current.petUi,
          onClose: cB
        })]
      })
    }))
  },
  36535: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => PG
    });
    ZB(36540);
    var TB = ZB(1868),
      JB = ZB(63),
      oB = ZB(1091),
      GB = ZB.n(oB),
      vB = ZB(3892),
      kB = ZB(1507),
      cB = ZB(1960),
      nB = ZB(1153);

    function hB() {
      const BB = 2e3,
        [IB, ZB] = (0, JB.useState)(null),
        [TB, oB] = (0, JB.useState)(null),
        hB = (0, JB.useRef)(null);
      (0, kB.d)("showBottomMessage", (IB => {
        let {
          message: ZB,
          timeoutLength: TB = BB,
          type: JB
        } = IB;
        oB({
          message: ZB,
          type: JB
        }), clearTimeout(hB.current), hB.current = setTimeout((() => {
          oB(null)
        }), TB)
      })), (0, kB.d)("showPermanentBottomMessage", (BB => {
        ZB(BB)
      })), (0, JB.useEffect)((() => ((0, vB.d)((() => {
        ZB(null)
      })), () => {
        clearTimeout(hB.current)
      })), []);
      const zB = TB || IB;
      return zB ? (0, nB.jsx)("div", {
        className: GB()("BottomScreenMessage", zB.type),
        children: (0, nB.jsx)(cB.e, {
          text: zB.message
        })
      }) : null
    }
    var zB = ZB(2455),
      FB = ZB(1995),
      NB = ZB(1579),
      gB = ZB(2528);

    function qB() {
      let BB;
      const IB = () => {
          clearTimeout(BB), BB = setTimeout((() => {
            FB.gameBridge.latest("connectedGame").replay || (FB.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, NB.navigatePreserveSearch)("/"))
          }), 3e5)
        },
        ZB = () => {
          clearTimeout(BB)
        };
      return window.addEventListener("focus", ZB), window.addEventListener("blur", IB), () => {
        window.removeEventListener("blur", IB), window.removeEventListener("focus", ZB), clearTimeout(BB)
      }
    }
    var yB = ZB(1179),
      UB = ZB(3272),
      WB = ZB(342),
      dB = ZB(2526),
      CB = ZB(24),
      QB = ZB(2029),
      sB = ZB(36),
      wB = ZB(2054),
      OB = ZB(20),
      YB = ZB(2060),
      iB = ZB(1454),
      pB = ZB(8935),
      aB = ZB(2083),
      HB = ZB(1248);
    const MB = (0, JB.memo)((function() {
      const {
        isTouchScreen: BB,
        loadingOverlayVisible: IB,
        openInGameMenuName: ZB,
        openEverythingMenuName: TB
      } = (0, OB.o)(["isTouchScreen", "loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]), oB = (0, iB.x)();
      (0, UB.b)();
      const vB = (0, dB.d)("showBasicMovementControls"),
        [kB, cB] = (0, JB.useState)("movement"),
        hB = "movement" === kB,
        zB = oB && !1 !== vB;
      (0, JB.useEffect)((() => {
        "padActions" !== kB || zB || cB("done")
      }), [kB, zB]);
      const FB = IB || null !== ZB || null !== TB,
        NB = (0, JB.useRef)({
          step: kB,
          ms: 0
        });
      return (0, JB.useEffect)((() => {
        if (FB || "done" === kB) return;
        NB.current.step !== kB && (NB.current = {
          step: kB,
          ms: 0
        });
        const BB = NB.current,
          IB = performance.now(),
          ZB = setTimeout((() => {
            cB("movement" === kB && (0, iB.j)() ? "padActions" : "done")
          }), 7e3 - BB.ms);
        return () => {
          clearTimeout(ZB), BB.ms += performance.now() - IB
        }
      }), [FB, kB]), sB.m.getItem(WB.Rb) > 2 ? (0, nB.jsx)(rB, {
        showingMovementControls: !1
      }) : (0, nB.jsxs)(nB.Fragment, {
        children: [BB && !oB || !hB || !1 === vB ? null : (0, nB.jsxs)("div", {
          className: GB()("ControlsTutorialDiv", {
            Covered: FB
          }),
          children: [(0, nB.jsx)(jB, {}), (0, nB.jsx)(RB, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, nB.jsx)(RB, {
            header: "Jump",
            noaAction: "jump"
          })]
        }), "padActions" === kB && zB && (0, nB.jsx)(PB, {
          covered: FB
        }), (0, nB.jsx)(rB, {
          showingMovementControls: "done" !== kB
        })]
      })
    }));

    function jB() {
      const BB = (0, iB.x)();
      return (0, nB.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, nB.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), BB && (0, nB.jsx)(YB.d, {
          noaAction: "forward"
        }), !BB && (0, nB.jsxs)(nB.Fragment, {
          children: [(0, nB.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, nB.jsx)(YB.d, {
              noaAction: "forward"
            })
          }), (0, nB.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, nB.jsx)(YB.d, {
              noaAction: "left"
            }), (0, nB.jsx)(YB.d, {
              noaAction: "backward"
            }), (0, nB.jsx)(YB.d, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function PB(BB) {
      let {
        covered: IB
      } = BB;
      const {
        t: ZB
      } = (0, HB.G)(), TB = (0, dB.d)("useInventory");
      return (0, nB.jsxs)("div", {
        className: GB()("ControlsTutorialDiv", {
          Covered: IB
        }),
        children: [(0, nB.jsx)(RB, {
          header: ZB("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, nB.jsx)(RB, {
          header: ZB("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== TB && (0, nB.jsx)(RB, {
          header: ZB("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, nB.jsx)(RB, {
          header: ZB("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function RB(BB) {
      let {
        header: IB,
        noaAction: ZB
      } = BB;
      return (0, nB.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, nB.jsx)("div", {
          className: "KeyHeader",
          children: IB
        }), (0, nB.jsx)(YB.d, {
          noaAction: ZB
        })]
      })
    }

    function rB(BB) {
      let {
        showingMovementControls: IB
      } = BB;
      const {
        isTouchScreen: ZB
      } = (0, OB.o)(["isTouchScreen"]), TB = (0, iB.x)(), oB = (0, aB.e)("OpenShop"), [GB, vB] = (0, JB.useState)(!1), kB = `SeenShopControls|${(0,wB.g)("connectedGame",(BB=>BB.gameNameWithVariation))}`, cB = () => (!(0, iB.j)() || null !== (0, pB.e)("OpenShop")) && !sB.m.getItem(kB) && QB.c.get("shopInfo") && !IB, hB = () => (vB(!0), sB.m.setItem(kB, !0), (0, iB.j)() || CB.l.Gq("showShopTouchTutorial"), setTimeout((() => {
        vB(!1)
      }), 7e3));
      (0, JB.useEffect)((() => {
        let BB;
        const IB = CB.l.subscribe("showShopTutorial", (() => {
          cB() && (BB = hB())
        }));
        return () => {
          clearTimeout(BB), CB.l.unsubscribe(IB)
        }
      }), [IB]);
      const zB = (0, JB.useRef)();
      return (0, dB.c)("currencyAmounts", (BB => {
        if (cB()) {
          let ZB = !1;
          const TB = QB.c.get("shopInfo");
          for (const JB in TB) {
            for (const oB in TB[JB].items) {
              var IB;
              const GB = TB[JB].items[oB];
              if (void 0 !== GB.currency && BB[GB.currency] && GB.cost <= BB[GB.currency].amount && (null === (IB = GB.hidden) || void 0 === IB || !IB)) {
                ZB = !0;
                break
              }
            }
            if (ZB) break
          }
          ZB && (zB.current = hB())
        }
      })), (0, JB.useEffect)((() => () => {
        clearTimeout(zB.current)
      }), [IB]), !GB || TB && !oB ? null : (0, nB.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: ZB && !TB ? null : (0, nB.jsx)(RB, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
    var mB = ZB(1421),
      XB = ZB(1102);
    const LB = (0, JB.memo)((function() {
      return (0, UB.b)(), (0, nB.jsx)(eB, {})
    }));
    class eB extends JB.Component {
      constructor(BB) {
        super(BB), this.showQueue = [], this.slideDuration = 1, this.state = {
          showQueue: [],
          currState: null
        }, this.currMessage = null, this.justShowed = !1
      }
      componentDidMount() {
        this.sub = CB.l.subscribe("TopRightHelper", (BB => {
          this.showQueue.push(BB), this.setState({
            showQueue: this.showQueue
          })
        }))
      }
      componentWillUnmount() {
        CB.l.unsubscribe(this.sub), clearTimeout(this.slideOutTimeout), clearTimeout(this.hidingMessageTimeout)
      }
      componentDidUpdate(BB, IB) {
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
        let BB, IB, ZB, TB, JB, oB = !0;
        if (this.state.showQueue.length > 0 && null === this.state.currState ? (this.currMessage = this.state.showQueue[0], this.justShowed = !0, BB = "slideIn") : "slideOut" === this.state.currState ? BB = "slideOut" : null === this.currMessage && (oB = !1), this.currMessage) {
          const oB = this.currMessage.color || "rgb(102, 102, 102)";
          IB = {
            width: this.currMessage.width || "250px",
            height: this.currMessage.height || "70px",
            animation: "1s " + ("slideOut" === BB ? "HelperSlideKeyFrameReverse" : "HelperSlideKeyFrame")
          }, ZB = {
            backgroundColor: oB
          }, TB = {
            animation: "2s " + ("slideOut" === BB ? "CloseNotification" : "ExpandNotification")
          }, JB = {
            fontSize: this.currMessage.fontSize || "16px",
            animation: "2s " + ("slideOut" === BB ? "textDisappear" : "textAppear")
          }
        }
        return oB ? (0, nB.jsxs)("div", {
          className: "TopRightHelperBox",
          style: {
            ...IB
          },
          children: [(0, nB.jsx)("div", {
            className: "LeftSide",
            style: ZB,
            children: (0, nB.jsx)(XB.d, {
              name: this.currMessage.icon,
              className: `fa-${this.currMessage.iconSizeMult||3}x HelperIcon`
            })
          }), (0, nB.jsx)("div", {
            className: "RightSide",
            style: TB,
            children: (0, nB.jsx)("div", {
              className: "HelperText",
              style: JB,
              children: this.currMessage.text
            })
          })]
        }) : null
      }
    }
    var uB = ZB(36542),
      fB = ZB(1469);
    const lB = (0, fB.g)((BB => BB.PadSneakChip));

    function AB(BB) {
      const [IB, ZB, TB] = function(BB) {
        const IB = parseInt(BB.substring(1), 16),
          ZB = (IB >> 16) / 255,
          TB = (IB >> 8 & 255) / 255,
          JB = (255 & IB) / 255,
          oB = Math.max(ZB, TB, JB),
          GB = Math.min(ZB, TB, JB),
          vB = (oB + GB) / 2,
          kB = oB - GB;
        if (0 === kB) return [0, 0, vB];
        const cB = kB / (1 - Math.abs(2 * vB - 1));
        let nB;
        nB = oB === ZB ? (TB - JB) / kB % 6 : oB === TB ? (JB - ZB) / kB + 2 : (ZB - TB) / kB + 4;
        return [(60 * nB + 360) % 360, cB, vB]
      }(BB), JB = 0 === ZB ? 0 : Math.min(.6, ZB + .03), oB = TB > .5 ? -1 : 1, GB = tB(TB + .09 * oB);
      return {
        panel: BB,
        slot: bB(IB, JB, GB),
        slotSelected: bB(IB, JB, tB(GB + .2 * oB)),
        slotUnavailable: bB(IB, JB, tB(TB + -.1 * oB))
      }
    }

    function tB(BB) {
      return Math.min(1, Math.max(0, BB))
    }

    function bB(BB, IB, ZB) {
      const TB = (1 - Math.abs(2 * ZB - 1)) * IB,
        JB = TB * (1 - Math.abs(BB / 60 % 2 - 1)),
        oB = ZB - TB / 2;
      let GB;
      return GB = BB < 60 ? [TB, JB, 0] : BB < 120 ? [JB, TB, 0] : BB < 180 ? [0, TB, JB] : BB < 240 ? [0, JB, TB] : BB < 300 ? [JB, 0, TB] : [TB, 0, JB], "#" + GB.map((BB => function(BB) {
        return Math.round(255 * BB).toString(16).padStart(2, "0")
      }(BB + oB))).join("")
    }
    var xB = ZB(36558),
      EB = ZB(4459),
      DB = ZB(2481),
      KB = ZB(2489),
      VB = ZB(36602),
      SB = ZB(4990),
      BI = ZB(1531),
      II = ZB(665);

    function ZI(BB, IB, ZB, TB) {
      BB.style.display = "";
      const JB = BB.offsetWidth,
        oB = BB.offsetHeight,
        GB = Math.min(Math.max((IB.left + IB.right) / 2 - JB / 2, 8), window.innerWidth - 8 - JB);
      let vB = IB.top - ZB - oB;
      const kB = [...TB].sort(((BB, IB) => IB.top - BB.top));
      for (const cB of kB) GB < cB.right && GB + JB > cB.left && vB < cB.bottom && vB + oB > cB.top && (vB = cB.top - 8 - oB);
      return vB < 8 ? (BB.style.display = "none", null) : (BB.style.transform = `translate(${GB-IB.left}px, ${vB-IB.top}px)`, {
        left: GB,
        top: vB,
        right: GB + JB,
        bottom: vB + oB
      })
    }

    function TI(BB) {
      const IB = [];
      for (const ZB of document.querySelectorAll(BB)) {
        const BB = ZB.getBoundingClientRect();
        BB.width > 0 && "visible" === getComputedStyle(ZB).visibility && IB.push(BB)
      }
      return IB
    }

    function JI(BB, IB) {
      return BB.clientX >= IB.left - 8 && BB.clientX <= IB.right + 8 && BB.clientY >= IB.top - 8 && BB.clientY <= IB.bottom + 8
    }
    var oI = ZB(8985);
    class GI {
      constructor(BB) {
        this.deps = BB, this.phase = "idle", this.armTimer = null, this.suspended = !1
      }
      get locked() {
        return "locked" === this.phase
      }
      get offered() {
        return "armed" === this.phase || "ready" === this.phase
      }
      target(BB) {
        BB && "armed" === this.phase ? this.setPhase("ready") : BB || "ready" !== this.phase || this.setPhase("armed")
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
      hold(BB, IB) {
        this.suspended || (this.offered ? IB || this.setPhase("idle") : BB && "idle" === this.phase ? (this.setPhase("charging"), this.armTimer = setTimeout((() => {
          this.armTimer = null, this.onArm(), this.setPhase("armed")
        }), 1e3)) : BB || "charging" !== this.phase || this.setPhase("idle"))
      }
      onArm() {}
      setPhase(BB) {
        null !== this.armTimer && (clearTimeout(this.armTimer), this.armTimer = null);
        const IB = this.phase;
        this.phase = BB, this.deps.onPhase(BB, IB)
      }
    }
    const vI = 25 * Math.PI / 180,
      kI = 45 * Math.PI / 180;
    class cI extends GI {
      constructor() {
        super(...arguments), this.speed = 0, this.armedSpeed = 0
      }
      get lockedSpeed() {
        return this.armedSpeed
      }
      move(BB, IB, ZB) {
        this.speed = ZB;
        const TB = Math.hypot(BB, IB),
          JB = TB > 0 ? Math.acos(Math.min(1, -IB / TB)) : Math.PI;
        this.hold(TB >= .8 && JB <= vI, TB >= .5 && JB <= kI)
      }
      onArm() {
        this.armedSpeed = this.speed
      }
    }
    var nI = ZB(1353);

    function hI(BB, IB) {
      const ZB = (0, JB.useRef)(null),
        TB = (0, JB.useRef)(IB);
      return TB.current = IB, (0, JB.useEffect)((() => {
        if (!BB) return;
        const {
          create: IB,
          elementRef: JB,
          ringRef: oB,
          classPrefix: GB,
          keptBehindMovementPanels: vB,
          resizeEnds: kB
        } = TB.current, cB = {
          charging: `${GB}Charging`,
          armed: `${GB}Armed`,
          ready: `${GB}Ready`,
          locked: `${GB}Locked`
        };
        let nB = null;
        const hB = IB({
          onPhase: (BB, IB) => {
            const ZB = JB.current;
            if (null !== ZB) {
              for (const [IB, TB] of Object.entries(cB)) ZB.classList.toggle(TB, IB === BB);
              if ("charging" === BB) nB = oB.current.animate([{
                strokeDashoffset: 1
              }, {
                strokeDashoffset: 0
              }], {
                delay: 400,
                duration: 600,
                fill: "forwards"
              });
              else if ("idle" === BB) {
                var GB;
                null === (GB = nB) || void 0 === GB || GB.cancel(), nB = null
              }
              var vB, kB;
              if ("armed" === BB && "charging" === IB && TB.current.onArmed(), "ready" === BB && oI.d.play("lockReady"), "locked" === BB) oI.d.play("lockLocked"), null === (vB = (kB = TB.current).onLocked) || void 0 === vB || vB.call(kB);
              "locked" === IB && TB.current.onUnlocked()
            }
          }
        });
        ZB.current = hB;
        const zB = () => {
            hB.suspend()
          },
          FB = () => {
            "hidden" === document.visibilityState && zB()
          },
          NB = () => {
            kB ? hB.suspend() : hB.suspendArming()
          },
          gB = (0, nI.k)((BB => {
            let {
              keepsMovement: IB
            } = BB;
            IB && vB ? hB.suspendArming() : zB()
          }));
        return document.addEventListener("visibilitychange", FB), window.addEventListener("blur", zB), window.addEventListener("resize", NB), () => {
          gB(), document.removeEventListener("visibilitychange", FB), window.removeEventListener("blur", zB), window.removeEventListener("resize", NB), hB.cancel(), ZB.current = null
        }
      }), [BB]), (0, wB.c)("localPlayerAliveSet", (() => {
        var BB;
        null === (BB = ZB.current) || void 0 === BB || BB.suspend()
      })), ZB
    }
    const zI = "data-joystick-tap";

    function FI(BB) {
      var IB, ZB;
      const TB = null === (IB = (ZB = BB).closest) || void 0 === IB ? void 0 : IB.call(ZB, `[${zI}]`);
      return TB instanceof HTMLElement ? TB : null
    }
    class NI {
      constructor() {
        this.tap = null
      }
      get touchId() {
        var BB, IB;
        return null !== (BB = null === (IB = this.tap) || void 0 === IB ? void 0 : IB.id) && void 0 !== BB ? BB : null
      }
      land(BB, IB) {
        null === this.tap && (this.tap = {
          key: BB,
          id: IB.identifier,
          x: IB.clientX,
          y: IB.clientY
        }, (0, BI.i)(BB, !0))
      }
      slidFrom(BB) {
        const IB = this.tap,
          ZB = IB ? BB.find((BB => BB.identifier === IB.id)) : void 0;
        return !ZB || Math.hypot(ZB.clientX - IB.x, ZB.clientY - IB.y) <= 12 ? null : (this.end(!1), {
          identifier: IB.id,
          clientX: IB.x,
          clientY: IB.y
        })
      }
      end(BB) {
        const IB = this.tap;
        IB && (this.tap = null, (0, BI.i)(IB.key, !1), BB && IB.key.click())
      }
    }
    var gI = ZB(2555),
      qI = ZB(2576),
      yI = ZB(1165),
      UI = ZB(3589),
      WI = ZB(2590);

    function dI(BB, IB, ZB) {
      const TB = function(BB, IB, ZB) {
        const TB = ZB.map((ZB => ({
            left: Math.max(0, ZB.left),
            top: Math.max(0, ZB.top),
            right: Math.min(BB, ZB.right),
            bottom: Math.min(IB, ZB.bottom)
          }))).filter((BB => BB.right > BB.left && BB.bottom > BB.top)),
          JB = [...new Set([0, IB, ...TB.flatMap((BB => [BB.top, BB.bottom]))])].sort(((BB, IB) => BB - IB)),
          oB = [];
        for (let GB = 0; GB < JB.length - 1; GB++) {
          const IB = JB[GB],
            ZB = JB[GB + 1],
            vB = TB.filter((BB => BB.top <= IB && BB.bottom >= ZB)).map((BB => [BB.left, BB.right])).sort(((BB, IB) => BB[0] - IB[0]));
          let kB = 0;
          for (const [BB, TB] of vB) BB > kB && oB.push({
            left: kB,
            top: IB,
            right: BB,
            bottom: ZB
          }), kB = Math.max(kB, TB);
          kB < BB && oB.push({
            left: kB,
            top: IB,
            right: BB,
            bottom: ZB
          })
        }
        return oB
      }(BB, IB, ZB);
      if (0 === TB.length) return 'path("M0 0Z")';
      if (1 === TB.length && 0 === TB[0].left && 0 === TB[0].top && TB[0].right === BB && TB[0].bottom === IB) return "";
      const JB = BB => Math.round(10 * BB) / 10;
      return `path("${TB.map((BB=>`M${JB(BB.left)} ${JB(BB.top)}H${JB(BB.right)}V${JB(BB.bottom)}H${JB(BB.left)}Z`)).join("")}")`
    }

    function CI(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16;
      const JB = [],
        oB = 2 * ZB / TB;
      for (let GB = 0; GB < TB; GB++) {
        const TB = IB - ZB + GB * oB,
          vB = TB + oB,
          kB = Math.min(Math.max(IB, TB), vB) - IB,
          cB = Math.sqrt(Math.max(0, ZB * ZB - kB * kB));
        JB.push({
          left: BB - cB,
          top: TB,
          right: BB + cB,
          bottom: vB
        })
      }
      return JB
    }
    var QI = ZB(8997),
      sI = ZB(36591);

    function wI(BB) {
      const IB = BB.getBoundingClientRect(),
        ZB = {
          left: IB.left,
          top: IB.top,
          right: IB.right,
          bottom: IB.bottom
        },
        TB = (0, VB.f)(BB);
      if (TB.whole) return [ZB];
      const JB = function(BB) {
          const IB = BB.right - BB.left,
            ZB = BB.bottom - BB.top,
            TB = Math.min(IB, ZB) / 2,
            JB = (BB.left + BB.right) / 2,
            oB = (BB.top + BB.bottom) / 2;
          return IB >= ZB ? [{
            left: BB.left + TB,
            top: BB.top,
            right: BB.right - TB,
            bottom: BB.bottom
          }, ...CI(BB.left + TB, oB, TB), ...CI(BB.right - TB, oB, TB)] : [{
            left: BB.left,
            top: BB.top + TB,
            right: BB.right,
            bottom: BB.bottom - TB
          }, ...CI(JB, BB.top + TB, TB), ...CI(JB, BB.bottom - TB, TB)]
        }(ZB),
        oB = TB.keyBox;
      if (oB) {
        const BB = (ZB.left + ZB.right) / 2,
          IB = (ZB.top + ZB.bottom) / 2;
        JB.push({
          left: BB - oB.width / 2,
          top: IB - oB.height / 2,
          right: BB + oB.width / 2,
          bottom: IB + oB.height / 2
        })
      }
      return JB
    }

    function OI(BB) {
      const IB = BB.getBoundingClientRect();
      return 0 === IB.width && 0 === IB.height || "visible" !== getComputedStyle(BB).visibility ? [] : [(0, QI.r)(IB, 44)]
    }

    function YI(BB, IB) {
      (0, JB.useEffect)((() => {
        const ZB = BB.current;
        if (!IB || !ZB) return;
        const TB = () => {
          const BB = Array.from(document.querySelectorAll(".TouchComponentsButtons .TouchKeyHit, .TouchInteractHit")),
            IB = BB.find((BB => BB.classList.contains("TouchInteractHit")));
          IB !== JB && (JB && oB.unobserve(JB), JB = IB, IB && oB.observe(IB));
          const TB = Array.from(document.querySelectorAll(WI.d)),
            GB = [...BB.flatMap((BB => wI(BB))), ...TB.flatMap(OI)],
            vB = function(BB, IB) {
              const ZB = IB.map((IB => ({
                left: IB.left - BB.left,
                top: IB.top - BB.top,
                right: IB.right - BB.left,
                bottom: IB.bottom - BB.top
              })));
              return dI(Math.ceil(BB.width), Math.ceil(BB.height), ZB)
            }(ZB.getBoundingClientRect(), GB);
          ZB.style.clipPath !== vB && (ZB.style.clipPath = vB)
        };
        let JB;
        const oB = new ResizeObserver((() => {
          TB()
        }));
        TB(), oB.observe(ZB);
        const GB = ZB.closest(".InGameUi"),
          vB = new MutationObserver(TB);
        GB && vB.observe(GB, {
          attributes: !0,
          attributeFilter: ["class", sI.d]
        });
        const kB = [(0, CB.p)(UI.e, TB), (0, CB.p)(WI.s, TB), (0, CB.p)(WI.e, TB)];
        return () => {
          oB.disconnect(), vB.disconnect();
          for (const BB of kB) BB();
          ZB.style.clipPath = ""
        }
      }), [BB, IB])
    }
    var iI = ZB(4597);

    function pI(BB) {
      var IB;
      let {
        onMove: ZB,
        mode: TB,
        speedCurve: oB,
        autorun: GB = !1,
        keys: vB
      } = BB;
      const kB = (0, JB.useRef)(null),
        cB = (0, JB.useRef)(null),
        hB = (0, JB.useRef)(null),
        zB = (0, JB.useRef)(null),
        NB = (0, JB.useRef)(null),
        gB = (0, JB.useRef)(null),
        qB = (0, JB.useRef)(new NI).current,
        yB = (0, JB.useRef)(null),
        UB = (0, JB.useRef)(null),
        WB = (0, JB.useRef)(null),
        dB = (0, JB.useRef)(!1),
        CB = (0, JB.useRef)({
          clientX: 0,
          clientY: 0
        }),
        {
          t: QB
        } = (0, HB.G)(),
        sB = (0, iI.t)(TB),
        wB = (0, OB.o)(["notchSize"]).notchSize,
        YB = wB.left,
        iB = (0, JB.useRef)(16),
        pB = (0, qI.e)(),
        [aB, MB, jB] = "pinned" === TB ? gI.k : null !== (IB = pB.hudElements.joystick) && void 0 !== IB ? IB : gI.k,
        PB = "pinned" === TB ? null : pB.hudSafe,
        RB = Math.max(iI.l, iI.p * jB);
      YI(cB, "pinned" !== TB);
      const rB = function(BB, IB, ZB, TB, oB) {
        const GB = (0, JB.useRef)(null),
          vB = () => {
            clearInterval(GB.current), GB.current = null
          },
          kB = hI(BB, {
            create: BB => new cI(BB),
            elementRef: IB,
            ringRef: ZB,
            classPrefix: "Autorun",
            keptBehindMovementPanels: !0,
            resizeEnds: !0,
            onArmed: oB,
            onLocked: () => {
              GB.current = setInterval((() => {
                FB.gameBridge.lookup("dropAhead", null) && (oI.d.play("autorunLedgeStop"), kB.current.cancel())
              }), 100)
            },
            onUnlocked: () => {
              vB(), TB()
            }
          });
        return (0, JB.useEffect)((() => vB), []), kB
      }(GB, hB, yB, (() => {
        AB(), lB()
      }), (() => {
        mB(), null === WB.current && rB.current.suspend()
      }));

      function mB() {
        const BB = hB.current.getBoundingClientRect();
        WB.current = ZI(UB.current, BB, 80, TI(`.TouchInventoryKey, .TouchSprintKey, ${WI.d}`)), dB.current = null !== WB.current && JI(CB.current, WB.current)
      }

      function LB() {
        const {
          innerWidth: BB,
          innerHeight: IB
        } = window, ZB = (0, WI.F)(PB, BB, IB, (0, WI.J)(wB, BB, IB), iB.current);
        return {
          left: ZB[3],
          bottom: ZB[2]
        }
      }

      function eB(BB) {
        hB.current.style.transform = `translate(${BB.x-RB}px, ${BB.y-RB}px)`
      }

      function uB(BB) {
        const IB = hB.current;
        IB.classList.add("Resting"), IB.classList.toggle("Returning", BB), IB.style.display = "fixed_hidden" === TB ? "none" : "block", eB(function() {
          const {
            innerWidth: BB,
            innerHeight: IB
          } = window, ZB = LB(), TB = YB * BB / 100 + ZB.left, JB = kB.current.offsetHeight || IB, oB = ((0, yI.c)(BB, IB) ? iI.f : iI.d) + ZB.bottom;
          return {
            x: Math.min(BB - RB, Math.max(RB, TB + iI.j + aB * BB)),
            y: Math.min(JB - RB, Math.max(RB, JB - oB + MB * JB))
          }
        }())
      }
      const fB = (0, JB.useRef)({
        restFixed: uB,
        release: tB
      });

      function lB() {
        sB ? uB("fixed_shown" === TB) : "floating" === TB && (hB.current.style.display = "none"), ZB({
          x: 0,
          y: 0
        })
      }

      function AB() {
        gB.current = null, NB.current = null, zB.current.style.transform = "translate(-50%, -50%)"
      }

      function tB(BB) {
        AB();
        const IB = rB.current;
        BB && null !== IB && void 0 !== IB && IB.lift() ? ZB({
          x: 0,
          y: -IB.lockedSpeed
        }) : (null === IB || void 0 === IB || IB.cancel(), lB())
      }

      function bB(BB) {
        var IB;
        if (null === (IB = rB.current) || void 0 === IB || IB.startTouch(), "pinned" === TB) {
          const BB = hB.current.getBoundingClientRect();
          NB.current = {
            x: BB.left + BB.width / 2,
            y: BB.top + BB.height / 2
          }
        } else {
          NB.current = {
            x: BB.clientX,
            y: BB.clientY
          }, hB.current.classList.remove("Resting", "Returning"), hB.current.style.display = "block";
          const IB = kB.current.getBoundingClientRect();
          eB({
            x: BB.clientX - IB.left,
            y: BB.clientY - IB.top
          }), GB && (CB.current = {
            clientX: BB.clientX,
            clientY: BB.clientY
          }, mB())
        }
      }

      function xB(BB) {
        const IB = qB.slidFrom(Array.from(BB.touches));
        IB && null === gB.current && (gB.current = IB.identifier, bB(IB));
        const TB = Array.from(BB.touches).find((BB => BB.identifier === gB.current));
        if (null === NB.current || null === gB.current || (0, II.L)(TB)) return;
        const JB = rB.current,
          GB = TB.clientX - NB.current.x,
          vB = TB.clientY - NB.current.y,
          kB = Math.hypot(GB, vB),
          cB = kB > 0 ? Math.min(1, RB / kB) : 0,
          nB = GB * cB,
          hB = vB * cB,
          FB = Math.hypot(nB, hB) / RB,
          yB = oB && FB > 0 ? oB(FB) / FB : 1;
        zB.current.style.transform = `translate(calc(-50% + ${nB}px), calc(-50% + ${hB}px))`;
        const UB = nB / RB,
          QB = hB / RB;
        if (ZB({
            x: UB * yB,
            y: QB * yB
          }), null !== JB && null !== WB.current) {
          JB.move(UB, QB, FB * yB), CB.current = {
            clientX: TB.clientX,
            clientY: TB.clientY
          };
          const BB = dB.current;
          dB.current = JI(TB, WB.current), dB.current !== BB && JB.target(dB.current)
        }
      }
      return fB.current = {
        restFixed: uB,
        release: tB
      }, (0, JB.useLayoutEffect)((() => {
        if (!sB) return;
        const BB = () => {
          iB.current = (0, WI.O)(document)
        };
        BB(), null === gB.current && fB.current.restFixed(!1);
        const IB = new ResizeObserver((() => {
          BB(), null === gB.current && fB.current.restFixed(!1)
        }));
        IB.observe(kB.current);
        const ZB = hB.current;
        return () => {
          IB.disconnect(), ZB.classList.remove("Resting", "Returning"), null === gB.current && (ZB.style.display = "", ZB.style.transform = "")
        }
      }), [sB, TB, wB, aB, MB, RB, PB]), (0, JB.useEffect)((() => {
        const BB = (BB, IB) => void 0 === IB || null === IB || Array.from(BB.touches).some((BB => BB.identifier === IB)) ? null : {
            lifted: "touchend" === BB.type && Array.from(BB.changedTouches).some((BB => BB.identifier === IB))
          },
          IB = IB => {
            const ZB = BB(IB, gB.current);
            ZB && fB.current.release(ZB.lifted);
            const TB = BB(IB, qB.touchId);
            TB && qB.end(TB.lifted)
          },
          ZB = () => {
            null !== gB.current && fB.current.release(!1), qB.end(!1)
          },
          TB = () => {
            "hidden" === document.visibilityState && ZB()
          };
        document.addEventListener("touchstart", IB, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchmove", IB, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchend", IB, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchcancel", IB, {
          capture: !0,
          passive: !0
        }), window.addEventListener("blur", ZB), document.addEventListener("visibilitychange", TB);
        const JB = (0, nI.k)((BB => {
          let {
            keepsMovement: IB
          } = BB;
          IB || ZB()
        }));
        return () => {
          JB(), document.removeEventListener("touchstart", IB, {
            capture: !0
          }), document.removeEventListener("touchmove", IB, {
            capture: !0
          }), document.removeEventListener("touchend", IB, {
            capture: !0
          }), document.removeEventListener("touchcancel", IB, {
            capture: !0
          }), window.removeEventListener("blur", ZB), document.removeEventListener("visibilitychange", TB)
        }
      }), []), (0, JB.useEffect)((() => {
        const BB = kB.current,
          IB = BB => {
            BB.preventDefault()
          };
        return BB.addEventListener("touchstart", IB, {
          passive: !1
        }), () => {
          BB.removeEventListener("touchstart", IB)
        }
      }), []), (0, nB.jsxs)("div", {
        ref: kB,
        className: "JoystickZone",
        style: sB && (aB > 0 || jB > 1 || LB().left > 0) ? {
          width: `max(35vw, calc(${YB+100*aB}vw + ${LB().left+iI.j+RB+24}px))`
        } : void 0,
        onTouchStart: function(BB) {
          const IB = Array.from(BB.changedTouches).filter((BB => {
            var IB;
            return null === (IB = kB.current) || void 0 === IB ? void 0 : IB.contains(BB.target)
          }));
          for (const TB of IB) {
            const BB = FI(TB.target);
            BB && qB.land(BB, TB)
          }
          const ZB = IB.find((BB => null === FI(BB.target)));
          ZB && null === gB.current && (gB.current = ZB.identifier, bB(ZB), xB(BB))
        },
        onTouchMove: xB,
        children: [(0, nB.jsx)("div", {
          ref: cB,
          className: "JoystickTouchLayer"
        }), (0, nB.jsxs)("div", {
          ref: hB,
          className: "Joystick",
          style: {
            width: 2 * RB + "px",
            height: 2 * RB + "px",
            transform: "pinned" === TB ? "translate(4vw, calc(50vh - 50%))" : void 0
          },
          children: [(0, nB.jsx)("div", {
            className: "JoystickBase",
            style: {
              width: 2 * RB + "px",
              height: 2 * RB + "px"
            }
          }), GB && (0, nB.jsxs)(nB.Fragment, {
            children: [(0, nB.jsx)("svg", {
              className: "AutorunRing",
              viewBox: "0 0 100 100",
              children: (0, nB.jsx)("circle", {
                ref: yB,
                cx: "50",
                cy: "50",
                r: "48",
                pathLength: 1
              })
            }), (0, nB.jsxs)("div", {
              ref: UB,
              className: "AutorunTarget",
              children: [(0, nB.jsx)(XB.d, {
                name: "lock"
              }), QB("settingsMenu:autoRun")]
            })]
          }), (0, nB.jsx)("div", {
            ref: zB,
            className: "JoystickKnob",
            style: {
              width: `${RB}px`,
              height: `${RB}px`
            }
          })]
        }), vB]
      })
    }
    var aI = ZB(282);
    const HI = {
        deadZone: .1,
        creepEnd: .35,
        fullSpeedAt: .85,
        creepMin: .06,
        creepMax: .22
      },
      MI = {
        short_creep: {
          ...HI,
          creepEnd: .25,
          fullSpeedAt: .75
        },
        long_creep: {
          ...HI,
          creepEnd: .45,
          fullSpeedAt: .95
        },
        small_dead_zone: {
          ...HI,
          deadZone: .05
        },
        control: HI
      };

    function jI(BB) {
      return function(BB, IB) {
        const {
          deadZone: ZB,
          creepEnd: TB,
          fullSpeedAt: JB,
          creepMin: oB,
          creepMax: GB
        } = BB;
        if (IB < ZB) return 0;
        if (IB < TB) {
          const BB = (IB - ZB) / (TB - ZB);
          return oB + (GB - oB) * BB * BB
        }
        return IB < JB ? GB + (1 - GB) * (IB - TB) / (JB - TB) : 1
      }(MI[aI.d.mobile_walk_curve_v1], BB)
    }
    var PI = ZB(8999);

    function RI(BB, IB) {
      const ZB = (0, JB.useRef)(null);
      return (0, JB.useLayoutEffect)((() => (VB.j.set(BB, ZB.current, IB), () => {
        VB.j.set(BB, null)
      })), [BB, IB]), ZB
    }
    const rI = "C",
      mI = "J",
      XI = "U",
      LI = "A",
      eI = "G",
      uI = "X",
      fI = (0, JB.forwardRef)((function(BB, IB) {
        let {
          slot: ZB,
          canvasZone: TB = !1,
          lit: oB = !1,
          label: vB,
          className: kB,
          children: cB,
          ...hB
        } = BB;
        return (0, JB.useEffect)((() => (CB.l.Gq(UI.e), () => {
          CB.l.Gq(UI.e)
        })), []), (0, nB.jsx)("div", {
          ref: IB,
          className: GB()("TouchKeyHit", `TouchSlot${ZB}`, kB, {
            CanvasZone: TB
          }),
          ...hB,
          children: (0, nB.jsxs)("div", {
            className: GB()("TouchKey", {
              Lit: oB,
              Labelled: void 0 !== vB
            }),
            children: [cB, void 0 !== vB && (0, nB.jsx)("span", {
              className: "TouchKeyLabel",
              children: vB
            })]
          })
        })
      }));

    function lI(BB, IB) {
      (0, JB.useEffect)((() => () => {
        IB.current && (IB.current = !1, (0, KB.B)(BB, !1, {
          isTrusted: !0,
          timeStamp: performance.now()
        }))
      }), [])
    }

    function AI(BB, IB) {
      const ZB = (0, PI.o)(IB);
      return BB.filter((BB => null !== BB)).slice(0, ZB.length).map(((BB, IB) => {
        const TB = ZB[IB];
        return (0, nB.jsx)(JB.Fragment, {
          children: BB.render(TB)
        }, `${BB.id}:${TB}`)
      }))
    }
    var tI = ZB(36596);
    class bI extends GI {
      constructor() {
        super(...arguments), this.start = {
          x: 0,
          y: 0
        }, this.moved = !1
      }
      press(BB, IB) {
        this.start = {
          x: BB,
          y: IB
        }, this.moved = !1, this.startTouch(), this.hold(!0, !1)
      }
      move(BB, IB, ZB) {
        const TB = Math.hypot(BB - this.start.x, IB - this.start.y) <= 12;
        this.moved ||= !TB;
        const JB = null !== ZB && IB < this.start.y - 12 && JI({
          clientX: BB,
          clientY: IB
        }, ZB);
        this.hold(!this.moved, TB || JB)
      }
    }
    const xI = new Set;

    function EI(BB) {
      const IB = new Set(Array.from(BB.touches, (BB => BB.identifier)));
      for (const ZB of xI) {
        for (const BB of ZB.ids) IB.has(BB) || ZB.ids.delete(BB);
        if (0 === ZB.ids.size) {
          xI.delete(ZB);
          ZB.pressesOnPointerDown && "touchstart" === BB.type && Array.from(BB.changedTouches).some((BB => BB.target instanceof Node && ZB.element.contains(BB.target))) || ZB.release()
        }
      }
    }
    if ("undefined" !== typeof window)
      for (const AG of ["touchstart", "touchmove"]) window.addEventListener(AG, EI, {
        capture: !0,
        passive: !0
      });

    function DI(BB) {
      let {
        pressesOnPointerDown: IB = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const ZB = (0, JB.useRef)(BB);
      ZB.current = BB;
      const TB = (0, JB.useRef)({
        ids: new Set,
        element: null,
        pressesOnPointerDown: IB,
        release: () => {
          ZB.current()
        }
      });
      (0, JB.useEffect)((() => {
        const BB = TB.current;
        return () => {
          xI.delete(BB), BB.ids.clear()
        }
      }), []);
      const oB = BB => {
        const IB = TB.current;
        for (const ZB of Array.from(BB.changedTouches)) IB.ids.delete(ZB.identifier);
        0 === IB.ids.size && xI.delete(IB)
      };
      return {
        onTouchStart: BB => {
          const IB = TB.current;
          IB.element = BB.currentTarget;
          for (const ZB of Array.from(BB.changedTouches)) ZB.target instanceof Node && BB.currentTarget.contains(ZB.target) && IB.ids.add(ZB.identifier);
          IB.ids.size > 0 && xI.add(IB)
        },
        onTouchEnd: oB,
        onTouchCancel: oB
      }
    }

    function KI(BB, IB) {
      return null === IB ? null : (0, tI.d)(BB.nativeEvent.changedTouches, IB.id)
    }

    function VI(BB) {
      let {
        lockable: IB
      } = BB;
      const {
        t: ZB
      } = (0, HB.G)(), TB = "round" === (0, gI.db)().hudShape, oB = (0, JB.useRef)(!1);
      lI(DB.l.Jump, oB);
      const GB = (0, JB.useRef)(null),
        vB = (0, JB.useRef)(null),
        kB = (0, JB.useRef)(null),
        cB = (0, JB.useRef)(null),
        hB = (0, JB.useRef)(null),
        zB = (0, JB.useRef)(null),
        FB = (0, JB.useRef)(!1),
        NB = (BB, IB) => {
          oB.current = BB, (0, KB.B)(DB.l.Jump, BB, IB)
        },
        gB = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            isTrusted: !0,
            timeStamp: performance.now()
          };
          oB.current && (GB.current && (0, BI.i)(GB.current, !1), NB(!1, BB))
        },
        qB = hI(IB, {
          create: BB => new bI(BB),
          elementRef: GB,
          ringRef: vB,
          classPrefix: "JumpLock",
          keptBehindMovementPanels: !1,
          resizeEnds: !1,
          onArmed: () => {
            const BB = GB.current.getBoundingClientRect(),
              IB = kB.current.parentElement,
              ZB = IB.getBoundingClientRect(),
              TB = {
                left: ZB.left + IB.clientLeft,
                top: ZB.top + IB.clientTop,
                right: ZB.right - IB.clientLeft,
                bottom: ZB.bottom - IB.clientTop
              };
            if (hB.current = ZI(kB.current, TB, 16, TI(`.TouchKeyHit:not(.JumpKey) > .TouchKey, .TouchInventoryKey, .TouchSprintKey, ${WI.d}`)), null === hB.current) return void qB.current.suspend();
            const JB = hB.current;
            zB.current = {
              left: Math.min(BB.left, JB.left),
              top: JB.top,
              right: Math.max(BB.right, JB.right),
              bottom: BB.bottom
            }, FB.current = null !== cB.current && JI({
              clientX: cB.current.x,
              clientY: cB.current.y
            }, JB)
          },
          onUnlocked: () => {
            null === cB.current && gB()
          }
        }),
        yB = BB => {
          var IB;
          cB.current = null, null === (IB = qB.current) || void 0 === IB || IB.cancel(), gB(BB)
        },
        UB = DI((() => {
          yB()
        })),
        WB = BB => {
          const IB = cB.current;
          var ZB;
          return null === IB ? null !== (ZB = qB.current) && void 0 !== ZB && ZB.locked ? null : "lifted" : KI(BB, IB) ? "lifted" : (0, tI.h)(BB.nativeEvent.touches, IB.id) ? null : "dropped"
        };
      return (0, nB.jsxs)(fI, {
        ref: GB,
        slot: mI,
        className: "JumpKey",
        onTouchStart: BB => {
          UB.onTouchStart(BB), (0, BI.i)(BB.currentTarget, !0), null === cB.current || (0, tI.h)(BB.nativeEvent.touches, cB.current.id) || yB();
          const IB = BB.changedTouches[0];
          var ZB;
          null === cB.current && IB && (cB.current = {
            id: IB.identifier,
            x: IB.clientX,
            y: IB.clientY
          }, null === (ZB = qB.current) || void 0 === ZB || ZB.press(IB.clientX, IB.clientY));
          oB.current || NB(!0, BB.nativeEvent)
        },
        onTouchMove: BB => {
          const IB = cB.current,
            ZB = KI(BB, IB);
          if (!ZB) return;
          const TB = qB.current;
          if (null === TB || void 0 === TB || TB.move(ZB.clientX, ZB.clientY, zB.current), null !== TB && void 0 !== TB && TB.offered) {
            const BB = JI(ZB, hB.current);
            BB !== FB.current && (FB.current = BB, TB.target(BB))
          }
          IB.x = ZB.clientX, IB.y = ZB.clientY
        },
        onTouchEnd: BB => {
          var IB;
          UB.onTouchEnd(BB);
          const ZB = WB(BB);
          null !== ZB && ("dropped" !== ZB ? (cB.current = null, null !== (IB = qB.current) && void 0 !== IB && IB.lift() ? (0, BI.i)(BB.currentTarget, !1) : gB(BB.nativeEvent)) : yB(BB.nativeEvent))
        },
        onTouchCancel: BB => {
          UB.onTouchCancel(BB), null !== WB(BB) && yB(BB.nativeEvent)
        },
        children: [(0, nB.jsx)(XB.d, {
          name: "arrow-up-from-line"
        }), IB && (0, nB.jsxs)(nB.Fragment, {
          children: [(0, nB.jsx)("span", {
            className: "JumpLockBadge",
            children: (0, nB.jsx)(XB.d, {
              name: "lock"
            })
          }), (0, nB.jsx)("svg", {
            className: "JumpLockRing",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            children: (0, nB.jsx)("rect", {
              ref: vB,
              x: "2",
              y: "2",
              width: "96",
              height: "96",
              rx: TB ? 48 : 0,
              pathLength: 1
            })
          }), (0, nB.jsxs)("div", {
            ref: kB,
            className: "JumpLockTarget",
            children: [(0, nB.jsx)(XB.d, {
              name: "lock"
            }), ZB("settingsMenu:jumpLock")]
          })]
        })]
      })
    }
    var SI = ZB(36609);

    function BZ(BB) {
      let {
        atHome: IB
      } = BB;
      const {
        t: ZB
      } = (0, HB.G)(), TB = (oB = (0, dB.d)("runningSpeed"), vB = (0, dB.d)("walkingSpeed"), null !== oB && null !== vB && oB > vB);
      var oB, vB;
      const cB = (0, gI.p)((0, qI.e)().hudElements, "sprint"),
        hB = (0, kB.h)(SI.d, (0, SI.h)());
      return (0, JB.useEffect)((() => {
        TB && !cB || (0, SI.i)(!0)
      }), [TB, cB]), (0, JB.useEffect)((() => () => {
        (0, SI.i)(!0)
      }), []), TB ? (0, nB.jsx)("div", {
        className: GB()("TouchSprintHit", {
          AtHome: IB
        }),
        role: "switch",
        "aria-checked": hB,
        "aria-label": ZB("touchKeys:sprint"),
        [zI]: "",
        onClick: () => {
          (0, SI.i)(!(0, SI.h)())
        },
        children: (0, nB.jsx)("div", {
          className: GB()("TouchKey TouchSprintKey", {
            Lit: hB
          }),
          children: (0, nB.jsx)(XB.d, {
            name: hB ? "person-running" : "person-walking"
          })
        })
      }) : null
    }
    const IZ = new WeakMap;
    class ZZ {
      constructor(BB) {
        this.zones = BB, this.followed = new Map, this.onStart = BB => {
          if (this.releaseMissing(BB.touches), BB.target instanceof HTMLCanvasElement)
            for (let ZB = 0; ZB < BB.changedTouches.length; ZB++) {
              var IB;
              const {
                identifier: TB,
                clientX: JB,
                clientY: oB
              } = BB.changedTouches[ZB];
              this.release(TB);
              const GB = this.zones.hitZone(JB, oB);
              if (!GB) continue;
              const {
                key: vB
              } = GB;
              null === (IB = IZ.get(vB)) || void 0 === IB || IB.cancel();
              const kB = {
                hit: GB.element,
                key: vB,
                x: GB.x,
                y: GB.y,
                reach: .6 * GB.radius
              };
              this.followed.set(TB, kB), (0, BI.i)(GB.element, !0), TZ(kB, JB, oB)
            }
        }, this.onMove = BB => {
          this.releaseMissing(BB.touches);
          for (let IB = 0; IB < BB.changedTouches.length; IB++) {
            const {
              identifier: ZB,
              clientX: TB,
              clientY: JB
            } = BB.changedTouches[IB], oB = this.followed.get(ZB);
            oB && TZ(oB, TB, JB)
          }
        }, this.onEnd = BB => {
          for (let IB = 0; IB < BB.changedTouches.length; IB++) this.release(BB.changedTouches[IB].identifier)
        }, this.onVisibilityChange = () => {
          document.hidden && this.releaseAll()
        }
      }
      start() {
        const BB = {
          passive: !0
        };
        return document.addEventListener("touchstart", this.onStart, BB), document.addEventListener("touchmove", this.onMove, BB), document.addEventListener("touchend", this.onEnd, BB), document.addEventListener("touchcancel", this.onEnd, BB), document.addEventListener("visibilitychange", this.onVisibilityChange), () => {
          document.removeEventListener("touchstart", this.onStart), document.removeEventListener("touchmove", this.onMove), document.removeEventListener("touchend", this.onEnd), document.removeEventListener("touchcancel", this.onEnd), document.removeEventListener("visibilitychange", this.onVisibilityChange), this.releaseAll()
        }
      }
      releaseMissing(BB) {
        for (const IB of [...this.followed.keys()])(0, tI.h)(BB, IB) || this.release(IB)
      }
      releaseAll() {
        for (const BB of [...this.followed.keys()]) this.release(BB)
      }
      release(BB) {
        const IB = this.followed.get(BB);
        if (!IB) return;
        this.followed.delete(BB);
        for (const JB of this.followed.values())
          if (JB.key === IB.key) return;
        (0, BI.i)(IB.hit, !1);
        const {
          key: ZB
        } = IB, TB = ZB.style.translate;
        ZB.style.translate = "", TB && IZ.set(ZB, ZB.animate({
          translate: [TB, "0 0"]
        }, {
          duration: 150,
          easing: "ease-out"
        }))
      }
    }

    function TZ(BB, IB, ZB) {
      let {
        key: TB,
        x: JB,
        y: oB,
        reach: GB
      } = BB;
      const vB = IB - JB,
        kB = ZB - oB,
        cB = Math.min(1, GB / (Math.hypot(vB, kB) || 1));
      TB.style.translate = `${vB*cB}px ${kB*cB}px`
    }
    var JZ = ZB(1542),
      oZ = ZB(105),
      GZ = ZB(1403);
    const vZ = "threeFingerHintShown",
      kZ = {
        android: "touchHint:threeFingerAndroid",
        ios: "touchHint:threeFingerIos"
      };
    let cZ = 0,
      nZ = !1;

    function hZ() {
      const BB = new Set;
      let IB = -1 / 0,
        ZB = -1 / 0,
        TB = null,
        JB = 0;
      const oB = () => {
          BB.clear()
        },
        GB = oB => {
          if (oB.touches.length > 0) return;
          for (let IB = 0; IB < oB.changedTouches.length; IB++) BB.add(oB.changedTouches[IB].identifier);
          const GB = BB.size;
          if (GB < 3 || !(0, nI.w)()) return;
          if (JB = GB, null !== TB) return;
          const vB = performance.now(),
            kB = IB >= vB - 200;
          TB = setTimeout((() => {
            if (TB = null, !(0, nI.w)()) return;
            const BB = ZB >= vB - 200 || document.hidden;
            ! function(BB, IB) {
              var ZB;
              const TB = (0, oZ.getOperatingSystem)();
              cZ < 5 && (cZ++, (0, JZ.reportAnalyticsClick)({
                id: "touch.os_cancel",
                value: null === IB ? `${TB}:${BB}` : `${TB}:${BB}:${IB}`
              })), null === IB && (nZ || !0 === sB.m.getItem(vZ) || (nZ = !0, sB.m.setItem(vZ, !0), GZ.NotificationProvider.showAlertPopup({
                title: "touchHint:threeFingerTitle",
                subtitle: null !== (ZB = kZ[TB]) && void 0 !== ZB ? ZB : "touchHint:threeFingerOther",
                confirmText: "general:ok",
                disablePressBackgroundToClose: !0,
                unlockPointerKey: "threeFingerHint"
              })))
            }(JB, BB ? "hide" : kB ? "blur" : null)
          }), 500)
        },
        vB = () => {
          ZB = performance.now()
        },
        kB = () => {
          IB = performance.now()
        },
        cB = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("touchstart", oB, cB), document.addEventListener("touchcancel", GB, cB), document.addEventListener("visibilitychange", vB), window.addEventListener("blur", kB), window.addEventListener("resize", vB), window.addEventListener("orientationchange", vB), () => {
        document.removeEventListener("touchstart", oB, cB), document.removeEventListener("touchcancel", GB, cB), document.removeEventListener("visibilitychange", vB), window.removeEventListener("blur", kB), window.removeEventListener("resize", vB), window.removeEventListener("orientationchange", vB), null !== TB && clearTimeout(TB)
      }
    }
    const zZ = () => {
      const BB = (0, EB.j)(),
        IB = (0, iB.B)();
      return BB || IB
    };

    function FZ(BB) {
      (0, VB.k)(BB.x, BB.y)
    }
    const NZ = (0, JB.memo)((function() {
        const BB = zZ(),
          {
            joystickMode: IB,
            touchSpeedCurve: ZB,
            autorun: TB
          } = (0, OB.o)(["clientEscMenuOptions"]).clientEscMenuOptions;
        return (0, JB.useEffect)((() => ((0, SB.f)(DB.o.TouchControls, DB.o.TouchControls), () => {
          (0, SB.f)(DB.o.TouchControls, 0), (0, VB.k)(0, 0)
        })), []), (0, JB.useEffect)(hZ, []), (0, nB.jsx)("div", {
          className: GB()("TouchMovementWrapper", {
            Hidden: BB
          }),
          "data-camera-keeper": "",
          children: (0, nB.jsx)(pI, {
            onMove: FZ,
            mode: IB,
            speedCurve: ZB ? jI : void 0,
            autorun: TB,
            keys: (0, nB.jsx)(BZ, {
              atHome: !(0, iI.t)(IB)
            })
          })
        })
      })),
      gZ = (0, JB.memo)((function() {
        const BB = zZ(),
          {
            clientEscMenuOptions: IB
          } = (0, OB.o)(["clientEscMenuOptions"]),
          ZB = IB.touchActionButtons;
        return (0, JB.useEffect)((() => new ZZ(VB.j).start()), []), (0, JB.useEffect)((() => {
          CB.l.Gq(UI.e)
        }), [BB]), (0, nB.jsxs)("div", {
          className: GB()("TouchComponentsButtons", {
            Hidden: BB
          }),
          "data-camera-keeper": "",
          children: [(0, nB.jsx)(VI, {
            lockable: IB.jumpLock && !BB
          }), (0, nB.jsx)(iZ, {
            hidden: BB,
            actionButtons: ZB
          }), (0, nB.jsx)(yZ, {})]
        })
      }));

    function qZ(BB) {
      const IB = IB => ZB => {
        (0, BI.i)(ZB.currentTarget, IB), BB(IB, ZB.nativeEvent)
      };
      return {
        onPointerDown: IB(!0),
        onPointerUp: IB(!1),
        onPointerCancel: IB(!1)
      }
    }

    function yZ() {
      const BB = (0, dB.d)("canCrouch"),
        IB = (0, wB.j)("crouching"),
        ZB = (0, JB.useRef)(!1);
      lI(DB.l.Crouch, ZB);
      const TB = (BB, IB) => {
          ZB.current = BB, (0, KB.B)(DB.l.Crouch, BB, IB)
        },
        oB = (0, JB.useRef)(null),
        GB = () => {
          ZB.current && (oB.current && (0, BI.i)(oB.current, !1), TB(!1, {
            isTrusted: !0,
            timeStamp: performance.now()
          }))
        },
        vB = DI(GB);
      return (0, JB.useEffect)((() => {
        !1 === BB && GB()
      }), [BB]), !1 === BB ? null : (0, nB.jsx)(fI, {
        ref: oB,
        slot: rI,
        className: "CrouchKey",
        lit: IB,
        ...vB,
        ...qZ(TB),
        children: (0, nB.jsx)(XB.d, {
          name: "arrow-down-to-line"
        })
      })
    }
    const UZ = [{
        icon: "arrows-rotate"
      }],
      WZ = [{
        icon: "Arrow"
      }],
      dZ = [{
        icon: "crosshairs"
      }],
      CZ = [{
        icon: "swords"
      }],
      QZ = [{
        icon: "hand-back-point-up"
      }],
      sZ = [{
        icon: "Firecracker"
      }];

    function wZ(BB, IB, ZB, TB) {
      return {
        id: JSON.stringify(IB),
        render: JB => (0, nB.jsx)(pZ, {
          code: BB,
          slot: JB,
          icon: IB,
          label: TB,
          hidden: ZB
        })
      }
    }

    function OZ(BB, IB) {
      return {
        id: "fly",
        render: ZB => (0, nB.jsx)(YZ, {
          slot: ZB,
          flying: BB,
          label: IB
        })
      }
    }

    function YZ(BB) {
      let {
        slot: IB,
        flying: ZB,
        label: TB
      } = BB;
      return (0, nB.jsx)(fI, {
        slot: IB,
        className: "FlyKey",
        lit: ZB,
        label: TB,
        ...qZ(((BB, IB) => {
          (0, KB.B)(DB.l.Fly, BB, IB)
        })),
        children: (0, nB.jsx)(XB.d, {
          name: "feather-pointed"
        })
      })
    }

    function iZ(BB) {
      var IB, ZB;
      let {
        hidden: TB,
        actionButtons: JB
      } = BB;
      const {
        t: oB
      } = (0, HB.G)(), {
        gun: GB,
        aimable: vB,
        chargeName: kB
      } = (0, wB.j)("heldItemAim"), cB = (0, wB.j)("gliderBoostFuel"), {
        canFly: hB,
        flying: zB
      } = (0, wB.j)("flight"), FB = (0, dB.d)("touchscreenActionButton"), NB = GB ? UZ : FB, gB = vB ? {
        icon: WZ,
        label: oB("touchKeys:aim")
      } : null, qB = null !== kB ? {
        icon: [{
          icon: kB
        }]
      } : null, yB = null !== gB && void 0 !== gB ? gB : qB, UB = null !== (IB = null === (ZB = GB ? gB : null !== qB && void 0 !== qB ? qB : gB) || void 0 === ZB ? void 0 : ZB.icon) && void 0 !== IB ? IB : QZ, WB = [!JB && yB ? wZ(VB.c.Action2, yB.icon, TB, yB.label) : null, GB ? wZ(VB.c.Action3, dZ, TB, oB("touchKeys:scope")) : null, hB ? OZ(zB, oB("touchKeys:fly")) : null];
      return (0, nB.jsxs)(nB.Fragment, {
        children: [NB && (0, nB.jsx)(pZ, {
          code: VB.c.Action1,
          slot: eI,
          icon: NB,
          label: GB ? oB("touchKeys:reload") : void 0,
          hidden: TB
        }, JSON.stringify(NB)), JB && (0, nB.jsxs)(nB.Fragment, {
          children: [(0, nB.jsx)(pZ, {
            code: VB.c.Attack,
            slot: LI,
            icon: CZ,
            name: oB("touchKeys:attack"),
            hidden: TB
          }), (0, nB.jsx)(pZ, {
            code: VB.c.Use,
            slot: XI,
            icon: UB,
            name: oB("touchKeys:use"),
            hidden: TB
          })]
        }), AI(WB, JB), cB > 0 && (0, nB.jsx)(pZ, {
          code: VB.c.Boost,
          slot: uI,
          icon: sZ,
          label: oB("touchKeys:boost", {
            fuel: cB > 99 ? "99+" : cB
          }),
          hidden: TB
        })]
      })
    }

    function pZ(BB) {
      let {
        code: IB,
        slot: ZB,
        icon: TB,
        label: JB,
        name: oB,
        hidden: GB
      } = BB;
      const vB = RI(IB, GB);
      return (0, nB.jsx)(fI, {
        ref: vB,
        slot: ZB,
        className: "TouchActionKey",
        canvasZone: !0,
        label: JB,
        role: void 0 !== oB ? "img" : void 0,
        "aria-label": oB,
        children: (0, nB.jsx)(cB.e, {
          text: TB
        })
      })
    }
    var aZ = ZB(4433),
      HZ = ZB(3171),
      MZ = ZB(694);
    const jZ = (0, JB.memo)((function() {
      (0, UB.b)();
      const BB = (0, JB.useRef)([]),
        IB = (0, HZ.d)(),
        ZB = (0, JB.useRef)(0),
        TB = (0, JB.useRef)(0),
        oB = (0, JB.useRef)([]),
        GB = (0, JB.useRef)(null);

      function vB(ZB, TB, JB, oB) {
        const GB = (0, MZ.d)(),
          vB = setTimeout((() => {
            BB.current = BB.current.filter((BB => BB.id !== GB)), IB()
          }), oB);
        FB.gameBridge.send("recordFlyingMiddleText", {
          content: ZB,
          Po: TB,
          angle: JB,
          Ro: oB
        }), BB.current.push({
          id: GB,
          content: ZB,
          Po: TB,
          Ro: oB,
          removeTimeout: vB,
          angle: JB
        }), IB()
      }
      return (0, wB.c)("shotDamageToShow", (BB => {
        let {
          damage: IB,
          wasCrit: ZB,
          distance: TB
        } = BB;
        const JB = -Math.PI / 4 + Math.random() * Math.PI / 2;
        vB(ZB ? [{
          str: IB.toString(),
          style: {
            color: "#ff8a80",
            fontSize: "1.6em"
          }
        }] : [IB.toString()], TB, JB, 1e3)
      })), (0, kB.d)("flyingMiddleMessage", (BB => {
        let {
          content: IB,
          Po: JB,
          Ro: kB
        } = BB;
        oB.current.push({
          content: IB,
          Po: JB,
          Ro: kB
        });
        const cB = () => {
          const {
            content: BB,
            Po: IB,
            Ro: JB
          } = oB.current.shift(), GB = function(BB) {
            const IB = -Math.PI / 4,
              ZB = Math.PI / 4,
              TB = ZB - IB,
              JB = (1 + Math.sqrt(5)) / 2,
              oB = 2 * Math.PI / (JB * JB);
            let GB = BB + oB;
            for (; GB > ZB;) GB -= TB;
            for (; GB < IB;) GB += TB;
            const vB = Math.PI / 6;
            if (Math.abs(GB - BB) < vB) {
              GB = BB + (Math.sign(GB - BB) || 1) * vB, GB > ZB && (GB = BB - vB), GB < IB && (GB = BB + vB)
            }
            return GB
          }(TB.current);
          TB.current = GB, ZB.current = Date.now(), vB(BB, IB, GB, JB)
        };
        if (!GB.current) {
          const BB = () => {
            oB.current.length > 0 && cB(), 0 === oB.current.length && (clearInterval(GB.current), GB.current = null)
          };
          GB.current = setInterval(BB, 200), ZB.current + 200 < Date.now() && BB()
        }
        for (; oB.current.length > 4;) cB()
      })), (0, kB.d)("forceFlyingMiddleMessage", (BB => {
        let {
          content: IB,
          Po: ZB,
          angle: TB,
          Ro: JB
        } = BB;
        vB(IB, ZB, TB, JB)
      })), (0, JB.useEffect)((() => () => {
        clearInterval(GB.current), GB.current = null;
        for (const IB of BB.current) clearTimeout(IB.removeTimeout)
      }), []), (0, nB.jsx)("div", {
        className: "FlyingMiddleTextWrapper",
        children: BB.current.map((BB => {
          const {
            id: IB,
            content: ZB,
            Po: TB,
            Ro: JB,
            angle: oB
          } = BB;
          return BB.pos || (BB.pos = function(BB, IB) {
            const ZB = 50 / (BB ** .7 * .35);
            return {
              x: ZB * Math.sin(IB),
              y: -ZB * Math.cos(IB)
            }
          }(TB, oB)), (0, nB.jsx)(PZ, {
            className: "FlyingMiddleText",
            classNames: "FlyingMiddleText",
            timeout: JB,
            enterActiveStyle: {
              transform: `translate(${BB.pos.x}vw, ${BB.pos.y}vh)`,
              transition: `transform ${JB}ms ease-out`
            },
            children: (0, nB.jsx)("div", {
              children: (0, nB.jsx)(cB.e, {
                text: ZB
              })
            })
          }, IB)
        }))
      })
    }));

    function PZ(BB) {
      let {
        children: IB,
        className: ZB,
        classNames: TB,
        timeout: oB,
        enterActiveStyle: GB
      } = BB;
      const [vB, kB] = (0, JB.useState)(!1), [cB, hB] = (0, JB.useState)(!1), zB = (0, JB.useRef)(null);
      return (0, JB.useEffect)((() => {
        kB(!0)
      }), []), (0, nB.jsx)(aZ.d, {
        className: ZB,
        classNames: TB || ZB,
        in: vB,
        timeout: oB,
        nodeRef: zB,
        onEntering: () => {
          hB(!0)
        },
        children: (0, JB.cloneElement)(IB, {
          ref: zB,
          style: cB && GB || void 0
        })
      })
    }
    var RZ = ZB(36613);

    function rZ() {
      const BB = (0, wB.j)("health");
      return (0, nB.jsxs)("div", {
        className: "BottomScreenStatBarList",
        children: [(0, nB.jsx)(RZ.e, {
          placement: "statBars"
        }), (0, nB.jsx)(mZ, {
          actualValue: BB.shield,
          maxValue: BB.maxShield,
          hideAtValue: 0,
          icon: "shield",
          className: "ShieldBar"
        }), (0, nB.jsx)(mZ, {
          actualValue: BB.health,
          maxValue: BB.maxHealth,
          icon: "heart",
          className: "HealthBar"
        })]
      })
    }

    function mZ(BB) {
      let {
        actualValue: IB,
        maxValue: ZB,
        hideAtValue: TB,
        icon: JB,
        className: oB
      } = BB;
      return (0, UB.c)(), null === IB || null === ZB || IB === TB || ZB === TB ? null : (0, nB.jsx)("div", {
        className: "BottomScreenStatBarWrapper",
        children: (0, nB.jsxs)("div", {
          className: "BottomScreenStatBarBackground",
          children: [(0, nB.jsx)("div", {
            className: `BottomScreenStatBar ${oB}`,
            style: {
              transform: `scaleX(${Math.max(IB/ZB,0)})`,
              transformOrigin: "left center"
            }
          }), (0, nB.jsxs)("div", {
            className: "BottomScreenStatBarText SmallTextBold",
            children: [(0, nB.jsx)(XB.d, {
              name: JB
            }), ` ${Math.ceil(IB)}/${ZB}`]
          })]
        })
      })
    }
    var XZ = ZB(34184),
      LZ = ZB(4714),
      eZ = ZB(1385),
      uZ = ZB(2887),
      fZ = ZB(1516),
      lZ = ZB(1370),
      AZ = ZB(3600),
      tZ = ZB(3141),
      bZ = ZB(2220),
      xZ = ZB(810),
      EZ = ZB(3663),
      DZ = ZB(140),
      KZ = ZB(1755),
      VZ = ZB(34091);

    function SZ(BB) {
      let {
        showing: IB,
        enabled: ZB,
        autoRespawn: TB
      } = BB;
      const {
        t: oB
      } = (0, HB.G)(), GB = (0, iB.x)(), {
        mobilePushNotificationsCanAsk: vB
      } = (0, OB.o)(["mobilePushNotificationsCanAsk"]), [kB, cB] = (0, JB.useState)(null), [hB, zB] = (0, JB.useState)(!1), [FB, NB] = (0, JB.useState)(null);
      IB && null === FB ? NB(GB) : IB || null === FB || NB(null);
      const gB = IB && null !== kB && !1 === FB;
      if ((0, JB.useEffect)((() => {
          if (IB) return;
          cB(null), zB(!1);
          let BB = !0;
          return (0, VZ.b)().then((IB => {
            BB && cB((() => IB))
          }), (BB => {
            console.error("Failed to tell whether to offer push notifications:", BB)
          })), () => {
            BB = !1
          }
        }), [IB, vB]), (0, JB.useEffect)((() => {
          gB && !TB && (0, VZ.g)()
        }), [gB, TB]), !gB) return null;
      const qB = () => {
          (0, VZ.g)(), zB(!0)
        },
        yB = KZ.d.supports("notifications") ? "app" : "browser";
      return (0, nB.jsxs)("div", {
        className: "RespawnNotificationOptIn",
        style: hB ? {
          visibility: "hidden"
        } : void 0,
        children: [(0, nB.jsxs)("div", {
          className: "RespawnPanelSectionTitle",
          children: [(0, nB.jsx)(XB.d, {
            name: "bell"
          }), oB("mobilePushNotifications:optInTitle")]
        }), (0, nB.jsxs)("div", {
          className: "RespawnNotificationOptInButtons",
          children: [(0, nB.jsx)(fZ.g, {
            onClick: () => {
              qB(), kB().catch((BB => {
                console.error("Failed to ask for push notifications:", BB)
              }))
            },
            disabled: !ZB || hB,
            analyticsClick: {
              id: "push.allow",
              value: yB
            },
            touchPressOn: "pointerup",
            children: oB("mobilePushNotifications:optInConfirm")
          }), (0, nB.jsx)(fZ.k, {
            onClick: qB,
            disabled: !ZB || hB,
            analyticsClick: {
              id: "push.deny",
              value: yB
            },
            touchPressOn: "pointerup",
            children: oB("mobilePushNotifications:optInCancel")
          })]
        })]
      })
    }
    var BT = ZB(360);

    function IT(BB, IB) {
      let {
        shownName: ZB,
        lifeformType: TB
      } = BB;
      return null !== ZB ? ZB : null !== TB ? IB(`lifeform:${(0,BT.Ee)(TB)}`) : null
    }
    var ZT = ZB(3613),
      TT = ZB(3618);
    const JT = {
        FallDamage: "respawnPage:diedFallDamage",
        VoidJump: "respawnPage:diedVoid",
        Lava: "respawnPage:diedLava",
        "Toxic Waste": "respawnPage:diedToxicWaste",
        "Poison Potion": "respawnPage:diedPoisoned",
        "Rotten Brain": "respawnPage:diedPoisoned"
      },
      oT = (0, JB.memo)((function() {
        var BB, IB;
        const ZB = (0, UB.b)(),
          TB = (0, NB.useNavigatePreserveSearch)(),
          {
            t: oB
          } = (0, HB.G)(),
          {
            loadingOverlayVisible: vB
          } = (0, OB.o)(["loadingOverlayVisible"]),
          cB = (0, iB.x)(),
          [hB, zB] = (0, JB.useState)(!1),
          [gB, qB] = (0, JB.useState)(!0),
          [yB, WB] = (0, JB.useState)(null),
          CB = (0, HZ.d)(),
          sB = (0, dB.d)("respawnButtonText"),
          YB = (0, dB.d)("usePlayAgainButton"),
          pB = (0, dB.d)("useRespawnButton"),
          {
            gameNameWithVariation: aB
          } = (0, wB.j)("connectedGame"),
          MB = (0, JB.useRef)(QB.c.get("secsToRespawn")),
          jB = (0, JB.useRef)(FB.gameBridge.latest("localPlayerAlive")),
          PB = (0, JB.useRef)(QB.c.get("secsToRespawn")),
          RB = (0, JB.useRef)(QB.c.get("autoRespawn")),
          rB = (0, JB.useRef)(null),
          mB = (0, JB.useRef)(0),
          LB = (0, JB.useRef)(0),
          [eB, uB] = (0, JB.useState)(!1),
          lB = (0, JB.useRef)(null),
          AB = (0, JB.useRef)(null),
          tB = (0, JB.useRef)(null);
        (0, dB.c)("secsToRespawn", (BB => {
          console.log("Received new secsToRespawn with", BB, "and current canRespawn value of ", RB.current), PB.current = BB, DB()
        })), (0, dB.c)("autoRespawn", (BB => {
          console.log("Received autorespawn", BB, "current canRespawn value of ", MB.current), RB.current = BB, DB()
        }));
        const bB = BB => {
          console.log("Updating respawn component from localPlayerAliveSet. isAlive:", BB), BB || mB.current++, jB.current = BB, DB()
        };
        (0, wB.c)("localPlayerAliveSet", bB), (0, kB.d)(tZ.n, (BB => {
          "connected" === BB && !jB.current && RB.current && MB.current <= 0 && (LB.current = 0, KB())
        })), (0, JB.useEffect)((() => {
          const BB = FB.gameBridge.latest("localPlayerAlive");
          BB === jB.current ? (console.log("Updating respawn component from initial mount"), DB()) : bB(BB)
        }), []), (0, JB.useEffect)((() => {
          if (hB) {
            uB(!1);
            const BB = setTimeout((() => {
              uB(!0)
            }), 600);
            return () => {
              clearTimeout(BB)
            }
          }
          return () => {}
        }), [hB]);
        (0, wB.c)("kill", (BB => {
          let {
            killer: IB,
            victim: ZB,
            withItem: TB
          } = BB;
          if (!ZB.local) return;
          const JB = ((BB, IB) => {
            if (BB.local) {
              const BB = JT[IB];
              return BB ? oB(BB) : null
            }
            const ZB = IT(BB, oB);
            return ZB ? oB("respawnPage:killedBy", {
              name: ZB
            }) : null
          })(IB, TB);
          JB && WB({
            text: JB,
            deathCount: jB.current ? mB.current + 1 : mB.current
          })
        }));
        const xB = () => {
            hB && RB.current && jB.current && eB && zB(!1)
          },
          EB = hB && RB.current && jB.current && eB && !vB;
        (0, kB.d)("usedKeyboard", (() => {
          xB()
        })), (0, TT.e)("respawn", EB, xB);
        const DB = () => {
            qB(PB.current >= 3 || !RB.current), jB.current ? (clearInterval(rB.current), rB.current = null, RB.current ? CB() : zB(!1)) : (zB(!0), MB.current = PB.current, CB(), console.log("Running respawn stats updated", RB.current, MB.current), RB.current && MB.current <= 0 && KB(), clearInterval(rB.current), MB.current > 0 && (rB.current = setInterval((() => {
              MB.current = Math.max(MB.current - 1, 0), CB(), MB.current <= 0 && (clearInterval(rB.current), rB.current = null, QB.c.get("autoRespawn") && KB())
            }), 1e3)))
          },
          KB = () => {
            if (Date.now() - LB.current > 1e3) {
              const BB = () => {
                FB.gameBridge.send("respawn", null), LB.current = Date.now()
              };
              QB.c.get("autoRespawn") ? BB() : (0, lZ.$)((() => {
                BB()
              }), "video_respawn")
            }
          },
          VB = (0, JB.useMemo)((() => {
            var BB;
            return null === (BB = (0, xZ.m)(aB)) || void 0 === BB ? void 0 : BB.otherGameLinksOnRespawnPage
          }), [aB]),
          SB = 0 === MB.current,
          BI = (null === yB || void 0 === yB ? void 0 : yB.deathCount) === mB.current ? yB.text : null,
          II = hB && gB && !vB,
          ZI = cB && EB && null !== (BB = null === (IB = (0, fB.d)()) || void 0 === IB ? void 0 : IB.getBoundButton("menuConfirm")) && void 0 !== BB ? BB : null,
          TI = BB => SB ? BB : oB("respawnPage:actionInSeconds", {
            action: BB,
            seconds: MB.current
          });
        return (0, nB.jsx)(XZ.e, {
          showing: hB,
          globallyUniqueKey: "RespawnComponent",
          alwaysMountChildren: !0,
          children: (0, nB.jsx)(AZ.d, {
            show: hB,
            "data-holds-camera-keeper": "",
            children: (0, nB.jsxs)(LZ.c, {
              close: () => {
                zB(!1)
              },
              togglePointerLock: !1,
              closeOnPressBackground: !1,
              className: "RespawnBackgroundScreen",
              padLayerKind: RB.current || vB ? null : "death",
              padBackCloses: !1,
              cameraKeeper: !0,
              children: [(0, DZ.is99NightsCrazyGamesBundle)() && (0, nB.jsx)(fZ.c, {
                onClick: bZ.g,
                children: oB("homePage:backToGames")
              }), (0, nB.jsxs)("div", {
                className: "RespawnContainer",
                onClick: xB,
                children: [(0, nB.jsxs)("div", {
                  className: "RespawnTop",
                  children: [(0, nB.jsx)("div", {
                    ref: AB,
                    className: "RespawnSideSquareBannerDiv",
                    children: ZB[0] > 925 && (0, nB.jsx)(uZ.c, {
                      info: {
                        adType: "square",
                        adId: 1,
                        adAlias: "banner_respawn_1"
                      },
                      sizeInfo: {
                        parentRef: AB
                      },
                      showing: II,
                      horizontalAlign: "start",
                      extraContrastBackgroundBox: "left",
                      noFillShowBloxdAdProbability: 0
                    })
                  }), (0, nB.jsx)("div", {
                    className: "RespawnMainContent",
                    children: (0, nB.jsxs)("div", {
                      className: GB()("RespawnMainContentInner", {
                        RespawnMainContentInnerPad: cB
                      }),
                      children: [RB.current && (0, nB.jsxs)("div", {
                        className: "AutoRespawnDeathInfo",
                        children: [(0, nB.jsxs)("div", {
                          className: "AutoRespawnDeathTitle FullyFancyText",
                          children: [(0, nB.jsx)(XB.d, {
                            name: "skull",
                            className: "AutoRespawnDeathIcon"
                          }), oB("respawnPage:youDied")]
                        }), (0, nB.jsxs)("div", {
                          className: "AutoRespawnDeathCause FullyFancyText",
                          children: [null === ZI && (jB.current ? oB("respawnPage:pressAnywhereToContinue") : SB ? oB("respawnPage:respawning") : TI(oB("general:respawn"))), null !== ZI && (0, nB.jsx)(ZT.c, {
                            text: oB("controller:screensPressToContinue", {
                              button: ZT.e
                            }),
                            glyph: ZI,
                            className: "AutoRespawnContinueGlyph"
                          })]
                        }), BI && (0, nB.jsx)("div", {
                          className: "AutoRespawnStatus",
                          children: BI
                        })]
                      }), !RB.current && (0, nB.jsxs)(nB.Fragment, {
                        children: [(0, nB.jsxs)("div", {
                          className: GB()("RespawnPageButtons", {
                            RespawnPageButtonsVertical: !VB
                          }),
                          children: [YB && (0, nB.jsx)(fZ.p, {
                            className: "RespawnPageButton",
                            padDefaultFocus: !0,
                            onClick: () => {
                              (0, lZ.$)((() => {
                                (0, OB.m)("inGameReplay");
                                const BB = (0, eZ.b)(aB);
                                TB(BB)
                              }), "video_start")
                            },
                            disabled: !SB || !eB,
                            touchPressOn: "pointerup",
                            children: TI(oB("respawnPage:playAgain"))
                          }), pB && (0, nB.jsx)(fZ.g, {
                            className: "RespawnPageButton",
                            onClick: KB,
                            padDefaultFocus: !YB,
                            padBack: "sessionBasedGame:stayInLobby" === sB,
                            disabled: !SB || !eB,
                            touchPressOn: "pointerup",
                            children: TI(oB(sB))
                          }), !(0, DZ.is99NightsCrazyGamesBundle)() && (0, nB.jsx)(fZ.M, {
                            className: "RespawnPageButton",
                            onClick: bZ.g,
                            disabled: !SB || !eB,
                            touchPressOn: "pointerup",
                            children: TI(oB("respawnPage:exitGame"))
                          })]
                        }), VB && (0, nB.jsxs)("div", {
                          className: "RespawnPageOtherGames",
                          children: [(0, nB.jsx)("div", {
                            className: "RespawnPanelSectionTitle",
                            children: oB("respawnPage:orTry")
                          }), (0, nB.jsx)("div", {
                            className: "RespawnPageOtherGameThumbnails",
                            children: VB.map((BB => (0, nB.jsx)(EZ.f, {
                              source: {
                                type: "game",
                                gameNameWithVariation: BB
                              },
                              disabled: !SB || !eB,
                              gameWidth: "13rem",
                              hideDescription: !0,
                              hideFavourites: !0,
                              hideCcu: !0,
                              onClick: () => {
                                (0, OB.m)("inGameReplay");
                                const IB = (0, eZ.b)(BB);
                                TB(IB)
                              }
                            }, BB)))
                          })]
                        })]
                      }), (0, nB.jsx)(SZ, {
                        showing: hB,
                        enabled: eB,
                        autoRespawn: RB.current
                      })]
                    })
                  }), (0, nB.jsx)("div", {
                    ref: tB,
                    className: "RespawnSideSquareBannerDiv"
                  })]
                }), (0, nB.jsx)("div", {
                  ref: lB,
                  className: "RespawnBottom",
                  children: (0, nB.jsx)(uZ.c, {
                    info: {
                      adType: "leaderboard",
                      adId: 1,
                      adAlias: "banner_respawn_2"
                    },
                    sizeInfo: {
                      parentRef: lB
                    },
                    showing: II,
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
    var GT = ZB(36629);
    const vT = [{
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
      kT = [{
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
      cT = {
        duration: 300,
        easing: "ease-out",
        fill: "forwards"
      },
      nT = {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
      },
      hT = (0, JB.memo)((function() {
        const BB = (0, JB.useRef)(null),
          IB = (0, JB.useRef)(null);

        function ZB(ZB) {
          var TB;
          let {
            uI: JB,
            screenPos: oB
          } = ZB;
          const GB = BB.current;
          null === (TB = IB.current) || void 0 === TB || TB.cancel(), GB.classList.remove("HitmarkerCrit"), oB ? (GB.style.left = `${oB.x}%`, GB.style.top = `${oB.y}%`) : (GB.style.left = "50%", GB.style.top = "50%"), GB.style.rotate = 16 * (Math.random() - .5) + "deg", JB && GB.classList.add("HitmarkerCrit");
          const vB = GB.animate(JB ? kT : vT, JB ? nT : cT);
          IB.current = vB, vB.onfinish = () => {
            GB.classList.remove("HitmarkerCrit")
          }
        }
        return (0, kB.d)("localGunHitmarker", (BB => {
          let {
            uI: IB
          } = BB;
          ZB({
            uI: IB
          })
        })), (0, kB.d)("yourAttackHit", (BB => {
          let {
            uI: IB,
            screenPos: TB
          } = BB;
          ZB({
            uI: IB,
            screenPos: OB.d.get("isTouchScreen") ? TB : void 0
          })
        })), (0, kB.d)("sendHitmarker", (BB => {
          let {
            uI: IB,
            screenPos: TB
          } = BB;
          ZB({
            uI: IB,
            screenPos: TB
          })
        })), (0, nB.jsxs)("div", {
          ref: BB,
          className: "Hitmarker",
          children: [(0, nB.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, nB.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, nB.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, nB.jsx)("div", {
            className: "HitmarkerBar"
          })]
        })
      }));

    function zT() {
      const BB = (0, JB.useRef)(!0);
      return (0, kB.d)("localBlockMined", (() => {
        oI.d.play("blockMined")
      })), (0, kB.d)("yourAttackHit", (() => {
        oI.d.play("hitLanded")
      })), (0, kB.d)("localGunHitmarker", (() => {
        oI.d.play("hitLanded")
      })), (0, kB.d)("damagedByOtherPlayer", (() => {
        oI.d.play("damageTaken")
      })), (0, wB.c)("localPlayerAliveSet", (IB => {
        !IB && BB.current && oI.d.play("death"), BB.current = IB
      })), null
    }
    var FT = ZB(1979),
      NT = ZB(36649),
      gT = ZB.n(NT),
      qT = ZB(2111),
      yT = ZB(2097),
      UT = ZB(3461),
      WT = ZB(34211);
    const dT = BT.pe ? 7e7 : 7e3,
      CT = gT()("#ffffff").alpha(.5).string();

    function QT(BB) {
      const IB = (0, UT.c)(BB);
      return void 0 !== IB && "Gun" === (0, WT.itemTypeOf)(IB)
    }

    function sT(BB) {
      if (!BB) return console.error(`Killfeed colour was ${BB}`), CT;
      try {
        return gT()(BB).alpha(.5).string()
      } catch {
        return console.warn(`Killfeed colour ${BB} is not a colour`), CT
      }
    }
    const wT = (0, JB.memo)((function() {
      const {
        t: BB
      } = (0, HB.G)(), IB = (0, JB.useRef)([]), ZB = (0, HZ.d)();
      return (0, wB.c)("kill", (function(TB) {
        var JB, oB;
        let {
          killer: GB,
          victim: vB,
          withItem: kB,
          killstreak: cB
        } = TB;
        const nB = IB.current;
        if (nB.length >= 3) {
          const BB = nB.shift();
          clearTimeout(BB.timeout)
        }
        const hB = FB.gameBridge.latest("hiddenPlayerNames"),
          zB = {
            deadName: IT(vB, BB),
            killerName: IT(GB, BB),
            isFriend: {
              killer: (0, qT.c)(GB.realName, hB),
              dead: (0, qT.c)(vB.realName, hB)
            },
            withItem: kB,
            wasHeadshot: !1,
            killstreak: cB,
            timeout: setTimeout((() => {
              nB.shift(), ZB()
            }), dT),
            reactId: `${null!==(JB=GB.id)&&void 0!==JB?JB:GB.shownName}|${null!==(oB=vB.id)&&void 0!==oB?oB:vB.shownName}|${Date.now()}`,
            killerBackground: sT(GB.colour),
            deadBackground: sT(vB.colour)
          };
        nB.push(zB), ZB()
      })), (0, JB.useEffect)((() => {
        const BB = IB.current;
        return () => {
          for (; BB.length > 0;) {
            const {
              timeout: IB
            } = BB.pop();
            clearTimeout(IB)
          }
        }
      }), []), (0, nB.jsx)("div", {
        className: "Killfeed",
        children: IB.current.map((BB => {
          let {
            deadName: IB,
            killerName: ZB,
            withItem: TB,
            wasHeadshot: JB,
            killstreak: oB,
            killerBackground: GB,
            deadBackground: vB,
            reactId: kB,
            isFriend: cB
          } = BB;
          return (0, nB.jsxs)("div", {
            className: "IndividualKillWrapper SmallTextLight",
            style: {
              background: `linear-gradient(90deg, ${GB} calc(100% - 10rem), ${vB} 100%)`
            },
            children: [oB >= 2 ? (0, nB.jsx)("div", {
              className: "KillfeedKillstreak",
              children: (0, BT.Y)(oB)
            }) : null, (0, nB.jsx)("div", {
              className: "KillfeedKillerName",
              children: ZB
            }), cB.killer && (0, nB.jsx)(yT.b, {}), (0, nB.jsx)("div", {
              className: "KillfeedItem",
              style: {
                height: "5vmin",
                width: QT(TB) ? "7.5vmin" : "5vmin"
              },
              children: (0, nB.jsx)(FT.e, {
                itemName: TB,
                amount: 0,
                gunTransform: "scaleX(-1)",
                itemMarginTop: 0
              })
            }), JB ? (0, nB.jsx)(XB.d, {
              name: "crosshairs",
              className: "3x KillfeedHeadshotIcon"
            }) : null, (0, nB.jsx)("div", {
              className: "KillfeedDeadName",
              children: IB
            }), cB.dead && (0, nB.jsx)(yT.b, {})]
          }, kB)
        }))
      })
    }));
    var OT = ZB(36697),
      YT = ZB(1191),
      iT = ZB.n(YT),
      pT = ZB(3586),
      aT = ZB(36706),
      HT = ZB(1362);
    const MT = {},
      jT = (0, JB.memo)((function() {
        const BB = (0, JB.useRef)({}),
          [, IB] = (0, JB.useReducer)((BB => BB + 1), 0);
        (0, kB.d)("setDirectionArrow", (ZB => {
          let {
            id: TB,
            position: JB,
            style: oB,
            text: GB,
            RI: vB
          } = ZB;
          const kB = BB.current,
            cB = oB || MT,
            nB = GB,
            hB = kB[TB];
          if (!hB) return kB[TB] = {
            position: JB,
            style: cB,
            text: nB,
            shouldShowDistance: vB,
            tL: null,
            chevronElement: null,
            distanceElement: null,
            lastRenderedDist: -1,
            lastDistUpdateTime: 0,
            lastScreenX: NaN,
            lastScreenY: NaN,
            onScreen: void 0
          }, void IB();
          const zB = !iT()(hB.style, cB) || !iT()(hB.text, nB) || hB.shouldShowDistance !== vB;
          hB.position = JB, hB.style = cB, hB.text = nB, hB.shouldShowDistance = vB, zB && IB()
        })), (0, kB.d)("clearDirectionArrow", (ZB => {
          let {
            id: TB
          } = ZB;
          const JB = BB.current;
          if (null === TB)
            for (const BB in JB) delete JB[BB];
          else delete JB[TB];
          IB()
        })), (0, JB.useEffect)((() => {
          const IB = BB.current,
            ZB = (0, HT.s)((() => {
              ! function(BB) {
                const IB = FB.gameBridge.lookup("localPos", null),
                  ZB = pT.b - PT,
                  TB = (0, pT.g)() - PT;
                for (const JB in BB) {
                  const oB = BB[JB];
                  if (!oB.tL) continue;
                  const GB = FB.gameBridge.lookup("screenPos", oB.position),
                    vB = GB.x - 50,
                    kB = GB.y - 50;
                  GB.x === oB.lastScreenX && GB.y === oB.lastScreenY || (oB.lastScreenX = GB.x, oB.lastScreenY = GB.y, oB.tL.style.translate = `${GB.x}vw ${GB.y}vh`, oB.chevronElement && (oB.chevronElement.style.rotate = `${BT.e.fastATan2(kB,vB)}rad`));
                  const cB = Math.abs(vB) < ZB && Math.abs(kB) < TB;
                  if (cB !== oB.onScreen && (oB.onScreen = cB, oB.tL.classList.toggle("DirectionArrowOnScreen", cB)), oB.shouldShowDistance && oB.distanceElement) {
                    const BB = oB.position[0] - IB[0],
                      ZB = oB.position[1] - IB[1],
                      TB = oB.position[2] - IB[2],
                      JB = Math.round(Math.sqrt(BB * BB + ZB * ZB + TB * TB));
                    (-1 === oB.lastRenderedDist || (0, aT.e)(JB, oB.lastRenderedDist, oB.lastDistUpdateTime)) && (oB.distanceElement.textContent = `${JB}m`, oB.lastRenderedDist = JB, oB.lastDistUpdateTime = Date.now() + Math.floor(100 * Math.random()))
                  }
                }
              }(IB)
            }));
          return () => {
            ZB();
            for (const BB in IB) delete IB[BB]
          }
        }), []);
        const ZB = BB.current;
        return (0, nB.jsx)("div", {
          className: "DirectionArrows",
          children: Object.entries(ZB).map((BB => {
            var IB;
            let [TB, JB] = BB;
            const oB = null !== (IB = (0, WB.gc)(JB.style)) && void 0 !== IB ? IB : "#ffffff";
            return (0, nB.jsxs)("div", {
              ref: BB => {
                ZB[TB] && (ZB[TB].tL = BB)
              },
              className: "DirectionArrow",
              style: {
                fontSize: JB.style.fontSize,
                opacity: JB.style.opacity
              },
              children: [(0, nB.jsxs)("div", {
                className: "DirectionArrowChevron",
                ref: BB => {
                  ZB[TB] && (ZB[TB].chevronElement = BB)
                },
                children: [(0, nB.jsxs)("div", {
                  className: "DirectionArrowShadowLayer",
                  children: [(0, nB.jsx)("div", {
                    className: "DirectionArrowBar"
                  }), (0, nB.jsx)("div", {
                    className: "DirectionArrowBar"
                  })]
                }), (0, nB.jsxs)("div", {
                  className: "DirectionArrowBarLayer",
                  children: [(0, nB.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: oB
                    }
                  }), (0, nB.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: oB
                    }
                  })]
                })]
              }), (0, nB.jsx)("div", {
                className: "DirectionArrowMarker",
                style: {
                  background: oB,
                  boxShadow: `0 0 3px rgba(0, 0, 0, 0.8), 0 0 8px ${oB}`
                }
              }), JB.text && (0, nB.jsx)("div", {
                className: "DirectionArrowLabel SmallTextLight",
                style: {
                  color: oB,
                  fontWeight: JB.style.fontWeight,
                  fontStyle: JB.style.fontStyle
                },
                children: (0, nB.jsx)(cB.e, {
                  text: JB.text
                })
              }), JB.shouldShowDistance && (0, nB.jsx)("div", {
                className: "DirectionArrowDistance SmallTextLight",
                ref: BB => {
                  ZB[TB] && (ZB[TB].distanceElement = BB)
                },
                style: {
                  color: oB,
                  fontWeight: JB.style.fontWeight,
                  fontStyle: JB.style.fontStyle
                }
              })]
            }, TB)
          }))
        })
      })),
      PT = .5;
    const RT = (0, JB.memo)((function(BB) {
        let {
          isTouchScreen: IB
        } = BB;
        return (0, nB.jsxs)("div", {
          className: "BottomRightElements",
          "data-camera-keeper-host": "",
          children: [(0, nB.jsx)(LT, {}), IB && (0, nB.jsx)(gZ, {})]
        })
      })),
      rT = {
        readyForNext: 0,
        running: 1
      },
      mT = 50;

    function XT(BB) {
      console.assert(BB.state.current === rT.readyForNext);
      const IB = BB.queue.current,
        ZB = BB.foreground.current;
      if (IB.length > 0 && ZB) {
        const {
          toFraction: TB,
          toDuration: JB
        } = IB.shift();
        BB.state.current = rT.running, ZB.style.transition = `transform ${Math.max(JB-mT,0)}ms linear`, ZB.classList.remove("Complete"), BB.timeout.current = setTimeout((() => {
          ZB.style.transform = `scaleX(${TB})`, BB.timeout.current = setTimeout((() => {
            1 === TB && ZB.classList.add("Complete"), BB.state.current = rT.readyForNext, XT(BB)
          }), Math.max(JB - mT, 0))
        }), mT)
      }
    }

    function LT() {
      const BB = (0, JB.useRef)([]),
        IB = (0, JB.useRef)(rT.readyForNext),
        ZB = (0, JB.useRef)(void 0),
        TB = (0, JB.useRef)(null),
        oB = (0, JB.useRef)({
          queue: BB,
          state: IB,
          timeout: ZB,
          foreground: TB
        }),
        GB = (0, dB.d)("showProgressBar");
      if ((0, JB.useLayoutEffect)((() => (GB && IB.current === rT.readyForNext && XT(oB.current), () => {
          IB.current = rT.readyForNext, clearTimeout(ZB.current), GB && (BB.current.length = 0)
        })), [GB]), (0, kB.d)("progressBarUpdate", (ZB => {
          let {
            toFraction: TB,
            toDuration: JB
          } = ZB;
          BB.current.push({
            toFraction: TB,
            toDuration: JB
          }), IB.current === rT.readyForNext && XT(oB.current)
        })), !GB) return null;
      return (0, nB.jsx)("div", {
        className: "ProgressBarBackground",
        children: (0, nB.jsx)("div", {
          className: "ProgressBarForeground",
          ref: TB,
          style: {
            width: "15vw",
            transformOrigin: "left center",
            transform: "scaleX(0)"
          }
        })
      })
    }
    var eT = ZB(36708),
      uT = ZB(2562);
    const fT = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function lT(BB) {
      let {
        classes: IB,
        gone: ZB
      } = BB;
      const TB = document.documentElement;
      TB.classList.remove(...IB);
      for (const JB of ZB) JB.style.display = "block";
      return () => {
        TB.classList.add(...IB);
        for (const BB of ZB) BB.style.display = ""
      }
    }

    function AT(BB) {
      const {
        isTouchScreen: IB
      } = (0, OB.o)(["isTouchScreen"]);
      (0, JB.useLayoutEffect)((() => {
        if (!IB) return;
        const ZB = BB.current,
          TB = document.querySelector(`.${eT.i}`),
          JB = BB => {
            const IB = () => {
              const IB = BB.querySelector(uT.k),
                TB = function(BB) {
                  const IB = document.documentElement;
                  return {
                    classes: gI.A.map(WI.B).filter((BB => IB.classList.contains(BB))),
                    gone: [...BB.querySelectorAll(`.TopRightTrayToggle.${uT.m}`)]
                  }
                }(BB);
              IB && function(BB, IB) {
                (0, uT.D)(BB, IB.classes.length > 0 || IB.gone.length > 0, (() => lT(IB)))
              }(IB, TB);
              const JB = `${Math.floor(function(BB,IB,ZB){const TB=document.documentElement,JB=TB.classList.contains((0,WI.D)("menu")),oB=TB.style.getPropertyValue((0,WI.I)("menu"));if(!JB&&""===oB)return BB.getBoundingClientRect().left;const GB=IB?(0,uT.q)(IB):()=>{},vB=lT(ZB);TB.classList.remove((0,WI.D)("menu")),TB.style.removeProperty((0,WI.I)("menu"));const kB=BB.getBoundingClientRect().left;return vB(),GB(),JB&&TB.classList.add((0,WI.D)("menu")),""!==oB&&TB.style.setProperty((0,WI.I)("menu"),oB),kB}(BB,IB,TB)-ZB.getBoundingClientRect().left-4)}px`;
              ZB.style.getPropertyValue("--InGameHeaderMaxWidth") !== JB && ZB.style.setProperty("--InGameHeaderMaxWidth", JB)
            };
            IB();
            const JB = new ResizeObserver(IB);
            JB.observe(BB), JB.observe(TB), window.addEventListener("resize", IB);
            const oB = () => fT.map((BB => document.documentElement.style.getPropertyValue(BB))).join();
            let GB = oB();
            const vB = new MutationObserver((() => {
              const BB = oB();
              BB !== GB && (GB = BB, IB())
            }));
            vB.observe(document.documentElement, {
              attributes: !0,
              attributeFilter: ["style"]
            });
            const kB = (0, CB.p)(WI.e, IB),
              cB = new MutationObserver(IB);
            return cB.observe(BB, {
              childList: !0,
              subtree: !0
            }), () => {
              JB.disconnect(), vB.disconnect(), cB.disconnect(), kB(), window.removeEventListener("resize", IB);
              const ZB = BB.querySelector(uT.k);
              ZB && (0, uT.q)(ZB)
            }
          },
          oB = () => TB.querySelector(".TopRightIconsContainer"),
          GB = oB();
        let vB;
        if (GB) vB = JB(GB);
        else {
          const BB = new MutationObserver((() => {
            const IB = oB();
            IB && (BB.disconnect(), vB = JB(IB))
          }));
          BB.observe(TB, {
            childList: !0,
            subtree: !0
          }), vB = () => {
            BB.disconnect()
          }
        }
        return () => {
          vB(), ZB.style.removeProperty("--InGameHeaderMaxWidth")
        }
      }), [IB, BB])
    }
    var tT = ZB(3846),
      bT = ZB(3839),
      xT = ZB(1711),
      ET = ZB(1561),
      DT = ZB(1717),
      KT = ZB(1805),
      VT = ZB(1919),
      ST = ZB(1186),
      BJ = ZB(4466),
      IJ = ZB(1412);
    const ZJ = 2e4,
      TJ = 6e5,
      JJ = new Set;

    function oJ() {
      const {
        gameEntrySource: BB,
        loadingOverlayVisible: IB
      } = (0, OB.o)(["gameEntrySource", "loadingOverlayVisible"]), ZB = (0, wB.g)("connectedGame", (BB => (0, BJ.i)(BB) ? BB.lobbyName : null)), TB = (0, wB.j)("localPlayerAlive"), oB = (0, wB.g)("players", (BB => null !== BB.localId && void 0 !== BB.byId[BB.localId])), [GB, vB] = (0, JB.useState)(null);
      return !IB && TB && oB && null !== ZB && GB !== ZB && vB(ZB), (0, JB.useEffect)((() => {
        if (!(0, BJ.m)(BB) || null === GB || GB !== ZB || JJ.has(GB)) return;
        const IB = setTimeout((() => {
          JJ.add(GB), async function(BB) {
            const IB = await ST.userContextManager.getCurrentUserContext();
            let ZB;
            try {
              ZB = (await ET.c.getWorldOwnerFriendOffer(IB)).owner
            } catch (JB) {
              return void console.warn("Couldn't ask who owns this world", JB)
            }
            if (!ZB || (0, BJ.s)(ZB.name, Date.now())) return;
            const TB = ZB;
            ! function(BB, IB) {
              const ZB = Date.now() + TJ;
              let TB = Date.now(),
                JB = 0;
              const oB = () => {
                const GB = Date.now(),
                  vB = FB.gameBridge.latest("connectedGame");
                vB.lobbyName !== BB || GB > ZB || (null === vB.websocketUrl ? TB = 1 / 0 : TB === 1 / 0 && !OB.d.get("loadingOverlayVisible") && FB.gameBridge.latest("localPlayerAlive") && (TB = GB + ZJ), JB = GB < TB || !FB.gameBridge.latest("localPlayerAlive") || OB.d.get("isUiHidden") || OB.d.get("isUiHiddenByCamera") || (0, KT.isTypingInInput)() || OB.d.get("loadingOverlayVisible") || (0, xT.n)() || (0, tT.f)() || (0, IJ.h)() ? 0 : JB + 1, JB >= 2 ? IB() : setTimeout(oB, 500))
              };
              oB()
            }(BB, (() => {
              (0, BJ.f)(DT.c.getSocialState().friends, TB.name) || ((0, BJ.o)(TB.name, Date.now()), VT.f.showWorldOwnerOffer(TB), (0, JZ.reportAnalyticsClick)({
                id: "social.world_owner_offer",
                value: "shown"
              }))
            }))
          }(GB).catch((BB => {
            console.error("Failed to offer the world's owner as a friend", BB)
          }))
        }), ZJ);
        return () => {
          clearTimeout(IB)
        }
      }), [BB, GB, ZB]), null
    }
    var GJ = ZB(1963);
    const vJ = (0, JB.memo)((function(BB) {
        let {
          durationMs: IB,
          endsAtMs: ZB
        } = BB;
        const [, TB] = (0, JB.useReducer)((BB => BB + 1), 0), oB = null === ZB ? IB : Math.max(ZB - Date.now(), 0);
        return (0, JB.useEffect)((() => {
          if (null === ZB || oB <= 0) return;
          const BB = setTimeout(TB, oB - 1e3 * (Math.ceil(oB / 1e3) - 1));
          return () => {
            clearTimeout(BB)
          }
        })), (0, nB.jsx)("div", {
          className: "EffectInfoDuration SmallTextLight",
          children: (0, BT.jb)(oB)
        })
      })),
      kJ = (0, JB.memo)((function() {
        const BB = (0, wB.j)("localEffects");
        return (0, nB.jsx)("div", {
          className: "EffectInfosWrapper",
          children: Object.entries(BB).map((BB => {
            let [IB, {
              icon: ZB,
              displayName: TB,
              durationMs: JB,
              endsAtMs: oB,
              level: GB
            }] = BB;
            return (0, nB.jsxs)("div", {
              className: "EffectInfo",
              children: [(0, nB.jsx)(GJ.b, {
                icon: ZB,
                className: "EffectInfoIcon"
              }), (0, nB.jsxs)("div", {
                className: "EffectInfoRightSide",
                style: {
                  marginTop: null !== JB ? "0" : "1rem"
                },
                children: [(0, nB.jsxs)("div", {
                  className: "EffectInfoNameWrapper",
                  children: [(0, nB.jsx)(cB.e, {
                    text: null !== TB && void 0 !== TB ? TB : IB,
                    className: "EffectInfoName SmallTextBold"
                  }), GB > 1 && (0, nB.jsx)("div", {
                    className: "EffectInfoName SmallTextBold",
                    children: (0, BT.Y)(GB)
                  })]
                }), null !== JB && (0, nB.jsx)(vJ, {
                  durationMs: JB,
                  endsAtMs: oB
                })]
              })]
            }, IB)
          }))
        })
      }));
    var cJ = ZB(36713),
      nJ = ZB(36928),
      hJ = ZB(201),
      zJ = ZB(2908),
      FJ = ZB(3099);

    function NJ(BB, IB) {
      (0, JB.useLayoutEffect)((() => {
        let IB, ZB;
        const TB = requestAnimationFrame((() => {
          ZB = setTimeout((() => {
            ZB = void 0;
            const TB = BB();
            IB = "function" === typeof TB ? TB : void 0
          }), 0)
        }));
        return () => {
          var BB;
          cancelAnimationFrame(TB), clearTimeout(ZB), null === (BB = IB) || void 0 === BB || BB()
        }
      }), IB)
    }
    const gJ = [5, 5, 5],
      qJ = [7, 4, 4, 4];

    function yJ(BB) {
      return BB.reduce(((BB, IB) => BB + IB), 0)
    }

    function UJ(BB, IB, ZB, TB, JB) {
      const oB = BB.getContext("2d");
      if (!oB) return null;
      const GB = IB.color,
        vB = `${IB.fontWeight} ${JB}px ${IB.fontFamily}`,
        kB = () => {
          BB.width = ZB, BB.height = TB, oB.fillStyle = GB, oB.textAlign = "center", oB.textBaseline = "middle", oB.font = vB
        };
      return kB(), {
        ctx: oB,
        reset: kB
      }
    }
    const WJ = (0, JB.memo)((function(BB) {
      let {
        show: IB
      } = BB;
      const ZB = (0, JB.useRef)(null),
        TB = (0, JB.useRef)(null),
        oB = (0, JB.useRef)(null),
        GB = (0, gB.i)();
      return (0, JB.useEffect)((() => GB.whenShown((() => {
        let BB = 0,
          IB = 0,
          ZB = performance.now(),
          JB = 0;
        const GB = (0, HT.s)((() => {
          var GB, vB, kB;
          BB++, IB++;
          const cB = performance.now();
          if (cB - ZB < 1e3) return;
          const nB = Math.round(BB / (cB - ZB) * 1e3);
          if (TB.current = nB, null === (GB = oB.current) || void 0 === GB || GB.call(oB, nB), BB = 0, ZB = cB, nB >= 55) return void(JB = 0);
          if (JB += 1, JB < 15) return;
          const hB = null !== (vB = sB.m.getItem("decreaseLoadDistPromptDeniedCount")) && void 0 !== vB ? vB : 0,
            [zB, NB] = QB.c.get("minChunkAddDist");
          if (function(BB, IB) {
              const ZB = FB.gameBridge.lookup("oW", null);
              return null !== ZB && (ZB.horizontal > BB || ZB.vertical > IB)
            }(zB, NB) && (null !== (kB = sB.m.getItem("lastDecreaseLoadDistPromptTime")) && void 0 !== kB ? kB : 0) + 432e5 < Date.now() && hB < 3) {
            sB.m.setItem("lastDecreaseLoadDistPromptTime", Date.now());
            GZ.NotificationProvider.showPromptPopup({
              title: "Lag (low FPS) caused by high chunk load distance. Decrease it?",
              confirmText: "general:yes",
              cancelText: "general:no",
              unlockPointerKey: "chunkLoadDistanceLagPopup"
            }).getResult().then((BB => {
              "notificationTornDown" !== BB && (BB ? (FB.gameBridge.send("setChunkAddDistance", {
                horizontal: zB,
                vertical: NB
              }), sB.m.setItem("chunkHorizAddDist", zB), sB.m.setItem("chunkVertAddDist", NB), CB.l.Gq("updatedChunkLoadDist"), sB.m.setItem("decreaseLoadDistPromptDeniedCount", 0)) : sB.m.setItem("decreaseLoadDistPromptDeniedCount", hB + 1))
            }))
          }
        }));
        let vB = performance.now();
        IB = 0;
        let kB = null,
          cB = !document.hidden,
          nB = !1;

        function hB() {
          const BB = performance.now() - vB,
            ZB = 1e3 * IB / BB;
          cB && !nB && (null === kB && (kB = ZB), zJ.c.setFps(ZB, kB)), IB = 0, vB = performance.now()
        }
        let zB = setInterval(hB, FJ.d);

        function NB() {
          IB = 0, vB = performance.now(), clearInterval(zB), zB = setInterval(hB, FJ.d)
        }

        function gB() {
          const BB = cB;
          cB = !document.hidden, !BB && cB && NB()
        }
        document.addEventListener("visibilitychange", gB);
        const qB = (0, CB.p)(tZ.n, (BB => {
          const IB = nB;
          nB = (0, tZ.q)(BB), IB && !nB && NB()
        }));
        return () => {
          GB(), document.removeEventListener("visibilitychange", gB), qB(), clearInterval(zB)
        }
      }))), [GB]), NJ((() => {
        var BB;
        if (!IB || oB.current) return;
        const JB = ZB.current,
          GB = window.getComputedStyle(JB.parentElement),
          vB = null !== (BB = window.devicePixelRatio) && void 0 !== BB ? BB : 1,
          kB = parseFloat(GB.fontSize) * vB,
          cB = Math.round(3 * kB),
          nB = Math.round(kB),
          hB = UJ(JB, GB, cB, nB, kB);
        if (!hB) return;
        const {
          ctx: zB,
          reset: FB
        } = hB, NB = BB => {
          FB(), zB.fillText(BB.toString(), JB.width / 2, JB.height / 2)
        };
        oB.current = NB, null !== TB.current && NB(TB.current)
      }), [IB]), (0, nB.jsxs)("div", {
        className: "FpsWrapperDiv",
        style: {
          display: IB ? "flex" : "none"
        },
        children: [(0, nB.jsx)("div", {
          className: "FpsLabel",
          children: "FPS"
        }), (0, nB.jsx)("canvas", {
          className: "FpsCanvas",
          ref: ZB,
          width: 48,
          height: 16
        })]
      })
    }));

    function dJ(BB) {
      return Math.sign(BB) * Math.round(100 * Math.abs(BB))
    }

    function CJ(BB) {
      let {
        getCoordinates: IB,
        showChunkCoords: ZB,
        columns: TB
      } = BB;
      const oB = (0, JB.useRef)(null);
      return NJ((() => {
        var BB;
        const JB = oB.current,
          GB = window.getComputedStyle(JB.parentElement),
          vB = null !== (BB = window.devicePixelRatio) && void 0 !== BB ? BB : 1,
          kB = parseFloat(GB.fontSize) * vB,
          cB = Math.round(kB * yJ(TB)),
          nB = Math.round(kB),
          hB = UJ(JB, GB, cB, nB, kB);
        if (!hB) return;
        const {
          ctx: zB,
          reset: NB
        } = hB;
        let gB = !0,
          qB = 0,
          yB = 0,
          UB = 0,
          WB = 0,
          dB = 0,
          CB = 0;
        const QB = () => {
          gB = !0
        };
        document.fonts.load(zB.font).then(QB, QB);
        const sB = () => {
          NB(), QB()
        };
        JB.addEventListener("contextrestored", sB);
        let wB = performance.now();
        const OB = (0, HT.x)((() => {
          var BB, oB, GB, vB, cB, nB;
          const hB = performance.now();
          hB - wB >= 1e3 && (wB = hB, NB(), QB());
          const [sB, OB, YB] = IB(), iB = dJ(sB), pB = dJ(OB), aB = dJ(YB);
          let HB = null;
          if (ZB) {
            const BB = FB.gameBridge.lookup("localPos", null);
            HB = (0, II.fb)(BB[0], BB[1], BB[2])
          }
          const MB = null !== (BB = null === (oB = HB) || void 0 === oB ? void 0 : oB[0]) && void 0 !== BB ? BB : 0,
            jB = null !== (GB = null === (vB = HB) || void 0 === vB ? void 0 : vB[1]) && void 0 !== GB ? GB : 0,
            PB = null !== (cB = null === (nB = HB) || void 0 === nB ? void 0 : nB[2]) && void 0 !== cB ? cB : 0;
          if (!gB && iB === qB && pB === yB && aB === UB && MB === WB && jB === dB && PB === CB) return;
          gB = !1, qB = iB, yB = pB, UB = aB, WB = MB, dB = jB, CB = PB;
          const RB = [(iB / 100).toFixed(2), (pB / 100).toFixed(2), (aB / 100).toFixed(2)];
          HB && RB.unshift(`${MB} ${jB} ${PB}`), zB.clearRect(0, 0, JB.width, JB.height);
          const rB = JB.height / 2;
          let mB = 0;
          for (let IB = 0; IB < RB.length; IB++) {
            const BB = kB * TB[IB];
            zB.fillText(RB[IB], mB + BB / 2, rB, BB), mB += BB
          }
        }));
        return () => {
          OB(), JB.removeEventListener("contextrestored", sB)
        }
      }), [IB, ZB, TB]), (0, nB.jsx)("div", {
        className: "CoordinateUI",
        children: (0, nB.jsx)("canvas", {
          ref: oB,
          className: "CoordinateCanvas",
          width: 16 * yJ(TB),
          height: 16
        })
      })
    }
    const QJ = (0, JB.memo)((function() {
        const BB = (0, JB.useCallback)((() => {
          const BB = FB.gameBridge.lookup("localPos", null);
          return [BB[0], BB[1], BB[2]]
        }), []);
        return (0, nB.jsx)(CJ, {
          getCoordinates: BB,
          showChunkCoords: !1,
          columns: gJ
        })
      })),
      sJ = (0, JB.memo)((function() {
        const BB = (0, JB.useCallback)((() => {
          const BB = FB.gameBridge.lookup("localPos", null),
            IB = hJ.f.YN;
          let ZB = BB[0] % IB,
            TB = BB[1] % IB,
            JB = BB[2] % IB;
          return ZB < 0 && (ZB += IB), TB < 0 && (TB += IB), JB < 0 && (JB += IB), [ZB, TB, JB]
        }), []);
        return (0, nB.jsx)(CJ, {
          getCoordinates: BB,
          showChunkCoords: !0,
          columns: qJ
        })
      }));
    var wJ = ZB(2139),
      OJ = ZB(1397),
      YJ = ZB(1058),
      iJ = ZB(1281),
      pJ = ZB(36780),
      aJ = ZB(1519),
      HJ = ZB(3316);
    const MJ = (0, JB.memo)((function() {
      const BB = (0, dB.d)("maxAuraLevel");
      return 0 === BB ? null : (0, nB.jsx)(jJ, {
        maxLevel: BB
      })
    }));

    function jJ(BB) {
      let {
        maxLevel: IB
      } = BB;
      const ZB = (0, dB.d)("auraPerLevel"),
        [TB, oB] = (0, JB.useState)((() => {
          var BB;
          return null !== (BB = FB.gameBridge.latest("aura")) && void 0 !== BB ? BB : void 0
        })),
        [GB, vB] = (0, JB.useState)((() => WB(TB))),
        [kB, cB] = (0, JB.useReducer)((BB => BB + 1), 0),
        hB = (0, JB.useRef)(null),
        zB = (0, JB.useRef)([]),
        NB = (0, JB.useRef)({
          width: 0,
          level: 0
        }),
        gB = (0, JB.useRef)(null),
        qB = (0, JB.useRef)(null);

      function yB() {
        if (null !== gB.current) return;
        if (0 === zB.current.length) return;
        const {
          width: BB,
          level: IB
        } = zB.current.shift();
        let ZB;
        if (IB !== NB.current.level && IB > NB.current.level !== BB > NB.current.width) {
          const TB = IB > NB.current.level;
          ZB = TB ? BB : 100 - BB, hB.current.style.transition = "none", hB.current.style.width = TB ? "0%" : "100%", hB.current.offsetWidth
        } else ZB = Math.abs(BB - NB.current.width);
        const TB = 100 * ZB / 20;
        hB.current.style.transition = `width ${TB}ms linear`, vB(BB), NB.current = {
          width: BB,
          level: IB
        }, zB.current.length > 0 && (gB.current = setTimeout((() => {
          gB.current = null, yB()
        }), TB))
      }

      function WB(BB) {
        return Math.floor(BB / ZB) === IB ? 100 : BB % ZB / ZB * 100
      }
      return (0, JB.useEffect)((() => () => {
        clearTimeout(gB.current), clearTimeout(qB.current), gB.current = null, qB.current = null
      }), []), (0, wB.c)("aura", (BB => {
        if (qB.current && clearTimeout(qB.current), null === BB) return clearTimeout(gB.current), qB.current = null, gB.current = null, zB.current = [], NB.current = {
          width: 0,
          level: 0
        }, oB(void 0), void vB(0);
        qB.current = setTimeout((() => {
          const IB = Math.floor(TB / ZB),
            JB = Math.floor(BB / ZB),
            GB = WB(BB);
          BB > TB && pJ.d.play("exp_collect", .1).rate(1.6 + .5 * Math.random()), JB > IB ? (JB % 5 === 0 && pJ.d.play("exp_levelup", .45).rate(.95 + .1 * Math.random()), cB(), zB.current.push({
            width: 100,
            level: IB
          })) : JB < IB && zB.current.push({
            width: 0,
            level: IB
          }), BB === TB && JB === IB || zB.current.push({
            width: GB,
            level: JB
          }), oB(BB), yB()
        }), 50)
      })), (0, UB.c)(), (0, nB.jsxs)("div", {
        className: "AuraBarWrapper",
        children: [(0, nB.jsxs)("div", {
          className: "AuraBarLabel SmallTextBold",
          children: [(0, nB.jsx)(aJ.d, {
            showSignal: kB,
            particleElement: (0, nB.jsx)("img", {
              src: (0, HJ.f)("glint"),
              alt: ""
            })
          }), (0, nB.jsx)("img", {
            className: "AuraBarLabelImage",
            src: (0, HJ.f)("glint"),
            alt: "aura"
          }), (0, nB.jsx)("div", {
            className: "AuraBarLabelText",
            children: Math.floor((null !== TB && void 0 !== TB ? TB : 0) / ZB)
          })]
        }), (0, nB.jsx)("div", {
          className: "AuraBar",
          children: (0, nB.jsx)("div", {
            ref: hB,
            className: "AuraBarBackground",
            style: {
              width: `${GB}%`
            }
          })
        })]
      })
    }
    var PJ = ZB(2711);

    function RJ(BB) {
      BB.timed && (BB.endedAnimation = BB.timed.animation, BB.timed = null)
    }
    const rJ = (0, JB.memo)((function() {
      const BB = (0, JB.useRef)(null),
        IB = (0, JB.useRef)(null),
        ZB = (0, JB.useRef)({
          timed: null,
          endedAnimation: null
        });
      return (0, kB.d)("middleScreenBarInitiate", (BB => {
        var TB;
        let {
          duration: JB,
          pJ: oB,
          horizBarRemOffset: GB
        } = BB;
        const vB = ZB.current;
        RJ(vB);
        const kB = IB.current;
        if (!(JB >= 0) || !kB) return;
        null === (TB = vB.endedAnimation) || void 0 === TB || TB.cancel(), vB.endedAnimation = null;
        const cB = kB.animate([{
          transform: "scaleX(0)"
        }, {
          transform: "scaleX(1)"
        }], {
          duration: JB,
          fill: "forwards"
        });
        vB.timed = {
          pJ: oB,
          horizBarRemOffset: GB,
          animation: cB
        }
      })), (0, kB.d)("middleScreenBarRemove", (() => {
        RJ(ZB.current)
      })), (0, JB.useEffect)((() => {
        const TB = ZB.current;
        let JB = Number.NaN,
          oB = Number.NaN,
          GB = Number.NaN;
        return (0, HT.o)((() => {
          var ZB, vB, kB, cB;
          const nB = BB.current,
            hB = IB.current;
          if (!nB || !hB) return;
          null !== (ZB = TB.timed) && void 0 !== ZB && ZB.pJ && "finished" === TB.timed.animation.playState && RJ(TB), null === (vB = TB.endedAnimation) || void 0 === vB || vB.cancel(), TB.endedAnimation = null;
          let zB = TB.timed ? 1 : 0;
          if (!TB.timed) {
            const BB = FB.gameBridge.lookup("momentumFrac", null);
            zB = BB > 0 ? 1 : 0, BB !== GB && (GB = BB, hB.style.transform = `scaleX(${BB})`)
          }
          const NB = null !== (kB = null === (cB = TB.timed) || void 0 === cB ? void 0 : cB.horizBarRemOffset) && void 0 !== kB ? kB : 0;
          NB === JB && zB === oB || (JB = NB, oB = zB, nB.style.transform = `translateX(calc(-50% + ${NB}rem)) scaleX(${zB})`)
        }))
      }), []), (0, nB.jsx)("div", {
        className: "MiddleScreenBar",
        ref: BB,
        children: (0, nB.jsx)("div", {
          className: "MiddleScreenBarFill",
          ref: IB
        })
      })
    }));
    var mJ = ZB(4856),
      XJ = ZB(2881);

    function LJ() {
      const {
        t: BB
      } = (0, HB.G)(), IB = (0, kB.h)("serverUpdating", null), ZB = (0, XJ.e)(250, null !== IB);
      return null === IB || ZB - IB > 3e4 ? null : (0, nB.jsxs)("div", {
        className: "UpdateCountdownBanner",
        children: [(0, nB.jsx)("div", {
          className: "UpdateCountdownBannerTitle",
          children: BB("updateWaiting:updatingIn", {
            countdown: (0, mJ.p)(IB - ZB)
          })
        }), (0, nB.jsx)("div", {
          children: BB("updateWaiting:bringYouBack")
        })]
      })
    }
    var eJ = ZB(36953),
      uJ = ZB(2066);
    const fJ = [{
        translationKey: "general:interact"
      }],
      lJ = (0, JB.memo)((function() {
        const BB = (0, dB.d)("crosshairText"),
          {
            interactPrompt: IB,
            blockText: ZB,
            neededTool: TB
          } = (0, wB.j)("crosshairTarget"),
          {
            isTouchScreen: oB
          } = (0, OB.o)(["isTouchScreen"]),
          GB = (0, iB.x)(),
          vB = (0, aB.e)("alt-fire");
        (0, JB.useEffect)((() => {
          FB.gameBridge.send("setCrosshairInteractPrompt", !oB || GB ? "key" : "touch")
        }), [oB, GB]);
        const [hB, zB] = (0, JB.useReducer)((BB => BB + 1), 0);
        (0, kB.d)("customBindingsChanged", zB);
        var NB;
        if (null !== IB && (GB && null !== vB || !oB && null !== (0, uJ.p)("alt-fire"))) return (0, nB.jsxs)("div", {
          className: "CrosshairText SmallTextBold InteractPrompt",
          children: [(0, nB.jsx)(YB.d, {
            noaAction: "alt-fire"
          }), (0, nB.jsx)(cB.e, {
            text: null !== (NB = IB.label) && void 0 !== NB ? NB : fJ
          })]
        });
        let gB = null;
        return null !== ZB ? gB = ZB : null !== BB && "" !== BB ? gB = BB : null !== TB && (gB = [{
          icon: TB,
          style: {
            opacity: .8
          }
        }, {
          str: " needed",
          style: {
            opacity: .8
          }
        }]), gB ? (0, nB.jsx)("div", {
          className: "CrosshairText SmallTextBold",
          children: (0, nB.jsx)(cB.e, {
            text: gB
          })
        }) : null
      }));
    var AJ = ZB(2719);
    const tJ = (0, JB.memo)((function() {
      var BB;
      const {
        interactPrompt: IB
      } = (0, wB.j)("crosshairTarget"), {
        openInGameMenuName: ZB,
        openEverythingMenuName: TB
      } = (0, OB.o)(["openInGameMenuName", "openEverythingMenuName"]), JB = (0, kB.h)("aimingOverlay", "none"), oB = (0, EB.j)(), GB = (0, AJ.b)();
      return null === IB || null !== ZB || null !== TB || "sniper" === JB || oB || GB ? null : (0, nB.jsx)(bJ, {
        label: null !== (BB = IB.label) && void 0 !== BB ? BB : fJ
      })
    }));

    function bJ(BB) {
      let {
        label: IB
      } = BB;
      const ZB = RI(VB.c.Interact, !1);
      return (0, JB.useEffect)((() => (CB.l.Gq(WI.s), () => {
        CB.l.Gq(WI.s)
      })), []), (0, nB.jsx)("div", {
        ref: ZB,
        className: "TouchInteractHit",
        children: (0, nB.jsxs)("div", {
          className: "TouchInteractKey",
          children: [(0, nB.jsx)("span", {
            className: "TouchInteractIcon",
            children: (0, nB.jsx)(XB.d, {
              name: "hand-back-point-up"
            })
          }), (0, nB.jsx)(cB.e, {
            text: IB
          })]
        })
      })
    }
    var xJ = ZB(82),
      EJ = ZB(34081),
      DJ = ZB(1821),
      KJ = ZB(34086);
    const VJ = "ScreenshotMode";
    let SJ = [];
    const Bo = new Set;

    function Io(BB) {
      SJ = BB;
      for (const IB of Bo) IB(BB)
    }
    const Zo = (0, JB.memo)((function() {
      const {
        screenshotMode: BB,
        isTouchScreen: IB,
        openEverythingMenuName: ZB,
        openInGameMenuName: TB
      } = (0, OB.o)(["screenshotMode", "isTouchScreen", "openEverythingMenuName", "openInGameMenuName"]), oB = null !== ZB || null !== TB, GB = (0, wB.j)("localPlayerAlive");
      return (0, JB.useEffect)((() => {
        !BB || !oB && IB && GB || (0, EJ.h)()
      }), [BB, oB, IB, GB]), (0, JB.useEffect)((() => EJ.h), []), (0, JB.useEffect)((() => {
        if (BB) return document.documentElement.classList.add(VJ), (0, SB.f)(DB.o.ScreenshotMode, DB.o.ScreenshotMode, "screenshotMode"), () => {
          document.documentElement.classList.remove(VJ), (0, SB.f)(DB.o.ScreenshotMode, 0, "screenshotMode")
        }
      }), [BB]), BB ? (0, xJ.createPortal)((0, nB.jsx)(To, {}), document.body) : null
    }));

    function To() {
      const {
        t: BB
      } = (0, HB.G)(), [IB, ZB] = (0, JB.useState)(!1), [TB, oB] = (0, JB.useState)(0), [GB, vB] = (0, JB.useState)(null), kB = function() {
        const [BB, IB] = (0, JB.useState)(SJ);
        return (0, JB.useEffect)((() => (Bo.add(IB), IB(SJ), () => {
          Bo.delete(IB)
        })), []), BB
      }(), cB = (0, JB.useRef)(), hB = (0, JB.useRef)(!1);
      (0, JB.useEffect)((() => () => {
        clearTimeout(cB.current)
      }), []);
      const zB = BB => {
          clearTimeout(cB.current), vB(BB), BB && (cB.current = setTimeout((() => {
            vB(null)
          }), 2e3))
        },
        FB = (IB, ZB) => {
          switch (IB) {
            case "saved":
              zB(BB("screenshotMode:saved"));
              break;
            case "denied":
              zB(BB("screenshotMode:denied"));
              break;
            case "needsTap":
              SJ.length >= 8 ? (console.error("Screenshot mode: 8 photos already wait on Save photo"), zB(BB("screenshotMode:saveWaitingFirst"))) : Io([...SJ, ZB])
          }
        },
        NB = IB => {
          console.error("Screenshot mode: the photo wasn't saved", IB), zB(BB("screenshotMode:failed"))
        };
      return (0, nB.jsxs)("div", {
        className: "ScreenshotModeOverlay",
        children: [(0, nB.jsx)("div", {
          className: "ScreenshotModeViewfinder",
          "aria-hidden": !0
        }), (0, nB.jsx)("div", {
          className: "ScreenshotModeCentre",
          "aria-hidden": !0
        }), TB > 0 && (0, nB.jsx)("div", {
          className: "ScreenshotModeFlash"
        }, TB), (0, nB.jsx)("button", {
          type: "button",
          className: "ScreenshotModeButton ScreenshotModeBack",
          "aria-label": BB("screenshotMode:back"),
          onClick: EJ.h,
          children: (0, nB.jsx)(XB.d, {
            name: "arrow-left"
          })
        }), (0, nB.jsx)("button", {
          type: "button",
          className: "ScreenshotModeButton ScreenshotModeShutter",
          "aria-label": BB("screenshotMode:takePhoto"),
          "aria-busy": IB,
          onClick: () => {
            (async () => {
              if (!IB) {
                ZB(!0), zB(null);
                try {
                  const BB = await (0, EJ.i)();
                  oB((BB => BB + 1)), FB(await (0, KJ.d)(BB), BB)
                } catch (BB) {
                  NB(BB)
                } finally {
                  ZB(!1)
                }
              }
            })()
          },
          children: (0, nB.jsx)(XB.d, {
            name: "camera-alt"
          })
        }), null !== GB ? (0, nB.jsx)("div", {
          className: "ScreenshotModeNote",
          role: "status",
          children: GB
        }) : kB.length > 0 && (0, nB.jsxs)("button", {
          type: "button",
          className: "ScreenshotModeNote ScreenshotModeSaveNote",
          onClick: () => {
            if (hB.current) return;
            hB.current = !0;
            const [BB] = SJ;
            Io(SJ.slice(1));
            const IB = IB => {
              console.warn("Screenshot mode: downloading a photo the share sheet didn't take", IB), (0, DJ.d)(BB, BB.name), FB("saved", BB)
            };
            (0, KJ.e)(BB).then((ZB => {
              "needsTap" === ZB ? IB(ZB) : FB(ZB, BB)
            }), IB).catch(NB).finally((() => {
              hB.current = !1
            }))
          },
          children: [(0, nB.jsx)(XB.d, {
            name: "image"
          }), BB("screenshotMode:savePhoto"), kB.length > 1 && ` (${kB.length})`]
        })]
      })
    }
    var Jo = ZB(4944),
      oo = ZB(5001);
    const Go = (0, JB.forwardRef)((function(BB, IB) {
        let {
          text: ZB,
          className: TB,
          children: JB
        } = BB;
        return ZB.hasText ? (0, nB.jsx)("div", {
          ref: IB,
          className: GB()("HudTextPanel", TB, {
            NoBackground: !ZB.showBackground
          }),
          children: null !== JB && void 0 !== JB ? JB : (0, nB.jsx)(cB.e, {
            text: ZB.content
          })
        }) : null
      })),
      vo = (0, JB.memo)((function() {
        const BB = (0, dB.g)("middleTextTop"),
          [IB, ZB] = (0, JB.useState)(null),
          TB = (0, eT.k)(IB);
        return BB.hasText ? (0, nB.jsx)("div", {
          className: GB()("MiddleTextTopContainer", {
            MiddleTextTopBelow: TB
          }),
          children: (0, nB.jsx)(Go, {
            ref: ZB,
            className: "MiddleTextTop",
            text: BB
          })
        }) : null
      })),
      ko = (0, JB.memo)((function() {
        const BB = (0, dB.b)();
        return (0, nB.jsx)(nB.Fragment, {
          children: BB.map(((BB, IB) => (0, nB.jsx)(Go, {
            className: "HeaderChip",
            text: BB
          }, IB)))
        })
      }));
    var co = ZB(3791),
      no = ZB(4782);
    const ho = (0, JB.memo)((function() {
      const {
        t: BB
      } = (0, HB.G)(), [IB, ZB] = (0, JB.useState)(!1), TB = (0, JB.useRef)(!1), oB = function(BB) {
        let {
          gameNameWithVariation: IB,
          lobbyName: ZB
        } = BB;
        if ((0, YJ.i)(IB)) return zo;
        if ((0, iJ.C)(ZB)) return Fo;
        return null
      }((0, wB.j)("connectedGame"));
      if (!oB || IB) return null;
      const GB = no.c[oB.target];
      return (0, nB.jsx)(mB.e, {
        tooltipInner: (0, nB.jsx)("div", {
          children: BB(GB.reportButtonTooltip)
        }),
        children: (0, nB.jsx)("div", {
          children: (0, nB.jsx)(fZ.R, {
            onClick: () => {
              TB.current || (TB.current = !0, (0, no.g)(oB.reportPolicyIds, GB).then((BB => {
                null !== BB && void 0 !== BB && BB.selectedPolicyId && (FB.gameBridge.send("reportLobbyOrGame", {
                  target: oB.target,
                  ov: BB.selectedPolicyId,
                  details: BB.Gv
                }), ZB(!0))
              })).finally((() => {
                TB.current = !1
              })))
            }
          })
        })
      })
    }));
    const zo = {
        target: "customGame",
        reportPolicyIds: co.d
      },
      Fo = {
        target: "lobby",
        reportPolicyIds: co.h
      };
    var No = ZB(8895),
      go = ZB(36966),
      qo = ZB(36976),
      yo = ZB(36979),
      Uo = ZB(36984),
      Wo = ZB(36969);
    let Co = !1;
    async function Qo(BB, IB) {
      var ZB, TB;
      const {
        files: JB
      } = IB, oB = JB.replayKey();
      if (null === oB) return "none";
      if (Co) throw new Error(Wo.b.saveBusy.text);
      const GB = null !== (ZB = null === (TB = JB.saveRefusal) || void 0 === TB ? void 0 : TB.call(JB)) && void 0 !== ZB ? ZB : null;
      if (null !== GB) throw new Error(GB);
      Co = !0;
      try {
        return await async function(BB, IB, ZB) {
          const {
            files: TB
          } = IB, JB = () => TB.replayKey() === ZB, oB = (BB, IB) => {
            JB() && TB.markSaved(BB, IB)
          };
          let GB = null;
          if (IB.pickerSupported()) {
            try {
              if (GB = await IB.chooseFile(BB ? null : TB.fileHandle()), null === GB) return "fZ"
            } catch (kB) {
              IB.onFallback(kB)
            }
            if (!JB()) throw new Error(Wo.b.saveClosed.text)
          }
          const vB = await TB.encode();
          if (null === vB) {
            if (null !== GB) throw new Error(Wo.b.saveClosed.text);
            return "none"
          }
          if (null !== GB) try {
            return await IB.write(GB, vB), oB(GB), "written"
          } catch (kB) {
            IB.onFallback(kB)
          }
          return oB(null, IB.download(vB)), "downloaded"
        }(BB, IB, oB)
      } finally {
        Co = !1
      }
    }
    var so = ZB(37009),
      wo = ZB(4728);
    const Oo = [1, 2, 4, 8, 16, 32, 64];

    function Yo(BB, IB) {
      return Math.max(0, Math.min(BB, IB))
    }

    function io(BB, IB, ZB) {
      return ZB <= IB ? 0 : (BB - IB) / (ZB - IB) * 100
    }

    function po(BB, IB, ZB) {
      const TB = ZB - IB;
      return Math.round(IB + BB / 100 * TB)
    }

    function ao(BB, IB) {
      const ZB = Math.floor(BB / IB / 60),
        TB = Math.floor(BB / IB % 60),
        JB = BB % IB;
      return `${ZB.toString().padStart(2,"0")}:${TB.toString().padStart(2,"0")}:${JB.toString().padStart(2,"0")}`
    }

    function Ho(BB) {
      return Number.isInteger(BB) || Oo.includes(BB) ? `${Math.round(BB)}\xd7` : `${BB.toFixed(1)}\xd7`
    }

    function Mo(BB, IB) {
      const ZB = Oo.indexOf(BB);
      if (-1 !== ZB) return "in" === IB ? Oo[Math.min(ZB + 1, Oo.length - 1)] : Oo[Math.max(ZB - 1, 0)];
      if ("in" === IB) {
        for (const IB of Oo)
          if (IB >= BB) return IB;
        return BB
      }
      for (let TB = Oo.length - 1; TB >= 0; TB--)
        if (Oo[TB] <= BB) return Oo[TB];
      return Oo[0]
    }

    function jo(BB, IB) {
      const ZB = IB.getBoundingClientRect();
      if (ZB.width <= 0) return 0;
      const TB = (BB - ZB.left) / ZB.width * 100;
      return Math.max(0, Math.min(100, TB))
    }

    function Po(BB, IB) {
      return IB <= 0 ? 0 : BB / IB * 100
    }

    function Ro(BB, IB, ZB) {
      const TB = [];
      let JB = Math.ceil(BB / ZB) * ZB;
      for (; JB <= IB;) TB.push(JB), JB += ZB;
      return TB
    }
    var ro = ZB(37016);
    const mo = [{
        label: "Linear",
        easing: ro.f
      }, {
        label: "Ease",
        easing: [.25, .1, .25, 1]
      }, {
        label: "Ease In",
        easing: ro.c
      }, {
        label: "Ease Out",
        easing: ro.e
      }, {
        label: "Ease In Out",
        easing: ro.b
      }],
      Xo = 200,
      Lo = 150;

    function eo(BB) {
      const IB = BB => Number(BB.toFixed(3)).toString();
      return `cubic-bezier(${IB(BB[0])}, ${IB(BB[1])}, ${IB(BB[2])}, ${IB(BB[3])})`
    }

    function uo(BB, IB) {
      return {
        cx: 25 + BB * Lo,
        cy: 25 + (1 - IB) * Lo
      }
    }

    function fo(BB, IB, ZB) {
      const TB = BB - ZB.left,
        JB = IB - ZB.top;
      return {
        x: BT.e.clamp((TB - 25) / Lo, 0, 1),
        y: BT.e.clamp(1 - (JB - 25) / Lo, -1, 2)
      }
    }

    function Ao(BB, IB, ZB, TB, JB) {
      return {
        x: (0, ro.l)(BB, ZB, JB),
        y: (0, ro.l)(IB, TB, JB)
      }
    }
    const to = (0, JB.memo)((function(BB) {
      let {
        value: IB,
        onChange: ZB
      } = BB;
      const TB = (0, JB.useRef)(null),
        oB = (0, JB.useRef)(null),
        [GB, vB] = (0, JB.useState)(null),
        kB = (0, JB.useCallback)((() => {
          const BB = TB.current;
          if (!BB) return;
          const ZB = BB.getContext("2d");
          if (!ZB) return;
          const JB = window.devicePixelRatio || 1;
          BB.width = Xo * JB, BB.height = Xo * JB, ZB.setTransform(JB, 0, 0, JB, 0, 0), ZB.clearRect(0, 0, Xo, Xo), ZB.fillStyle = "rgba(38, 52, 93, 0.85)", ZB.fillRect(0, 0, Xo, Xo), ZB.beginPath();
          const oB = uo(0, 0),
            vB = uo(1, 1);
          ZB.moveTo(oB.cx, oB.cy), ZB.lineTo(vB.cx, vB.cy), ZB.strokeStyle = "rgba(164, 164, 164, 0.35)", ZB.setLineDash([3, 3]), ZB.stroke(), ZB.setLineDash([]);
          const [kB, cB, nB, hB] = IB, zB = uo(kB, cB), FB = uo(nB, hB);
          ZB.strokeStyle = "rgba(252, 211, 115, 0.55)", ZB.lineWidth = 1.5, ZB.beginPath(), ZB.moveTo(oB.cx, oB.cy), ZB.lineTo(zB.cx, zB.cy), ZB.moveTo(vB.cx, vB.cy), ZB.lineTo(FB.cx, FB.cy), ZB.stroke(), ZB.strokeStyle = "#fcd373", ZB.lineWidth = 2, ZB.beginPath();
          for (let IB = 0; IB <= 50; IB++) {
            const BB = Ao(kB, cB, nB, hB, IB / 50),
              TB = uo(BB.x, BB.y);
            0 === IB ? ZB.moveTo(TB.cx, TB.cy) : ZB.lineTo(TB.cx, TB.cy)
          }
          ZB.stroke();
          const NB = (BB, IB, TB) => {
            ZB.beginPath(), ZB.arc(BB, IB, TB ? 6 : 5, 0, 2 * Math.PI), ZB.fillStyle = TB ? "#ffb914" : "#fcd373", ZB.fill(), ZB.strokeStyle = "#1a1f2e", ZB.lineWidth = 1.5, ZB.stroke()
          };
          NB(zB.cx, zB.cy, "p1" === GB), NB(FB.cx, FB.cy, "p2" === GB)
        }), [GB, IB]);
      (0, JB.useEffect)((() => {
        kB()
      }), [kB]);
      const cB = (0, JB.useCallback)(((BB, JB) => {
          const GB = TB.current,
            vB = oB.current;
          if (!GB || !vB) return;
          const kB = GB.getBoundingClientRect(),
            {
              x: cB,
              y: nB
            } = fo(BB, JB, kB);
          ZB("p1" === vB ? [cB, nB, IB[2], IB[3]] : [IB[0], IB[1], cB, nB])
        }), [ZB, IB]),
        hB = (0, JB.useCallback)((BB => {
          const ZB = TB.current;
          if (!ZB) return;
          const JB = ZB.getBoundingClientRect();
          let {
            x: GB,
            y: kB
          } = fo(BB.clientX, BB.clientY, JB);
          GB = BT.e.clamp(GB, 0, 1), kB = BT.e.clamp(kB, 0, 1);
          const [nB, hB, zB, FB] = IB.map((BB => BT.e.clamp(BB, 0, 1))), NB = Math.hypot(GB - nB, kB - hB), gB = Math.hypot(GB - zB, kB - FB), qB = NB <= gB ? "p1" : "p2";
          ("p1" === qB ? NB : gB) > .12 || (oB.current = qB, vB(qB), ZB.setPointerCapture(BB.pointerId), cB(BB.clientX, BB.clientY))
        }), [cB, IB]),
        zB = (0, JB.useCallback)((BB => {
          oB.current && cB(BB.clientX, BB.clientY)
        }), [cB]),
        FB = (0, JB.useCallback)((BB => {
          oB.current = null, vB(null), BB.currentTarget.hasPointerCapture(BB.pointerId) && BB.currentTarget.releasePointerCapture(BB.pointerId)
        }), []);
      return (0, nB.jsxs)("div", {
        className: "CubicBezierEasingEditor",
        children: [(0, nB.jsx)("canvas", {
          ref: TB,
          className: "CubicBezierEasingEditorCanvas",
          style: {
            width: Xo,
            height: Xo
          },
          onPointerDown: hB,
          onPointerMove: zB,
          onPointerUp: FB,
          onPointerCancel: FB
        }), (0, nB.jsx)("span", {
          className: "CubicBezierEasingEditorReadout",
          children: eo(IB)
        })]
      })
    }));
    var bo = ZB(1752),
      xo = ZB(1738);
    const Eo = 12;

    function Do(BB) {
      return {
        left: BB.left + BB.width / 2,
        top: BB.top - 8
      }
    }

    function Ko(BB, IB) {
      const [ZB, TB] = (0, JB.useState)(null);
      return (0, JB.useLayoutEffect)((() => {
        const ZB = BB.current;
        if (!ZB) return;
        const {
          width: JB,
          height: oB
        } = ZB.getBoundingClientRect();
        TB(function(BB, IB, ZB) {
          const TB = window.innerWidth,
            JB = window.innerHeight,
            oB = IB / 2;
          let GB = BB.left + BB.width / 2;
          GB = Math.max(Eo + oB, Math.min(GB, TB - Eo - oB));
          const vB = BB.top - 8 - Eo,
            kB = JB - BB.bottom - 8 - Eo,
            cB = vB < ZB && kB >= vB;
          let nB;
          cB ? (nB = BB.bottom + 8, nB + ZB > JB - Eo && (nB = JB - Eo - ZB), nB = Math.max(Eo, nB)) : (nB = BB.top - 8, nB - ZB < Eo && (nB = Eo + ZB));
          return {
            left: GB,
            top: nB,
            placeBelow: cB
          }
        }(IB, JB, oB))
      }), [IB, BB]), ZB
    }

    function Vo(BB, IB, ZB) {
      (0, JB.useEffect)((() => (0, xo.e)("pointerdown", (TB => {
        var JB, oB;
        const GB = TB.target;
        GB instanceof Node && (null !== (JB = BB.current) && void 0 !== JB && JB.contains(GB) || null !== ZB && void 0 !== ZB && null !== (oB = ZB.current) && void 0 !== oB && oB.contains(GB) || (0, bo.k)(GB) || IB())
      }))), [ZB, IB, BB])
    }

    function So(BB) {
      let {
        label: IB,
        value: ZB,
        onChange: TB
      } = BB;
      return (0, nB.jsxs)("div", {
        className: "ReplayKeyframePopoverVec3",
        children: [(0, nB.jsx)("span", {
          className: "ReplayKeyframePopoverVec3Label",
          children: IB
        }), (0, nB.jsx)("div", {
          className: "ReplayKeyframePopoverVec3Inputs",
          children: ["X", "Y", "Z"].map(((BB, IB) => (0, nB.jsxs)("label", {
            className: "ReplayKeyframePopoverAxis",
            children: [(0, nB.jsx)("span", {
              children: BB
            }), (0, nB.jsx)("input", {
              type: "number",
              step: "any",
              value: ZB[IB],
              onChange: BB => {
                const JB = Number.parseFloat(BB.target.value);
                if (Number.isNaN(JB)) return;
                const oB = [ZB[0], ZB[1], ZB[2]];
                oB[IB] = JB, TB(oB)
              }
            })]
          }, BB)))
        })]
      })
    }
    const BG = (0, JB.memo)((function(BB) {
        var IB, ZB, TB;
        let {
          keyframe: oB,
          anchor: vB,
          hasOutgoingSegment: kB,
          onClose: cB,
          onApply: hB,
          onDelete: zB,
          onUseCurrentCamera: FB
        } = BB;
        const NB = (0, JB.useRef)(null),
          gB = Ko(NB, vB.rect),
          [qB, yB] = (0, JB.useState)((() => [oB.position[0], oB.position[1], oB.position[2]])),
          [UB, WB] = (0, JB.useState)((() => [oB.direction[0], oB.direction[1], oB.direction[2]])),
          [dB, CB] = (0, JB.useState)((() => oB.easing));
        (0, JB.useEffect)((() => {
          yB([oB.position[0], oB.position[1], oB.position[2]]), WB([oB.direction[0], oB.direction[1], oB.direction[2]]), CB(oB.easing)
        }), [oB]), Vo(NB, cB);
        const QB = (0, JB.useCallback)((() => {
            hB({
              Iz: oB.Iz,
              position: qB,
              direction: UB,
              easing: dB
            }), cB()
          }), [UB, dB, oB.Iz, hB, cB, qB]),
          sB = (0, JB.useCallback)((() => {
            zB(oB.Iz), cB()
          }), [oB.Iz, zB, cB]),
          wB = (0, JB.useCallback)((() => {
            const BB = FB();
            BB && (yB([BB.position[0], BB.position[1], BB.position[2]]), WB([BB.direction[0], BB.direction[1], BB.direction[2]]))
          }), [FB]),
          OB = Do(vB.rect);
        return (0, nB.jsxs)("div", {
          ref: NB,
          className: GB()("ReplayViewerPopover ReplayKeyframePopover", {
            Below: null !== (IB = null === gB || void 0 === gB ? void 0 : gB.placeBelow) && void 0 !== IB && IB,
            Positioned: null !== gB
          }),
          style: {
            left: `${null!==(ZB=null===gB||void 0===gB?void 0:gB.left)&&void 0!==ZB?ZB:OB.left}px`,
            top: `${null!==(TB=null===gB||void 0===gB?void 0:gB.top)&&void 0!==TB?TB:OB.top}px`
          },
          onPointerDown: BB => {
            BB.stopPropagation()
          },
          children: [(0, nB.jsxs)("div", {
            className: "ReplayKeyframePopoverHeader",
            children: [(0, nB.jsx)("span", {
              className: "ReplayKeyframePopoverTitle",
              children: "Camera keyframe"
            }), (0, nB.jsxs)("span", {
              className: "ReplayKeyframePopoverTick",
              children: ["Tick ", vB.Iz]
            })]
          }), (0, nB.jsx)(So, {
            label: "Position",
            value: qB,
            onChange: yB
          }), (0, nB.jsx)(So, {
            label: "Direction",
            value: UB,
            onChange: WB
          }), kB && (0, nB.jsxs)("div", {
            className: "ReplayKeyframePopoverEasing",
            children: [(0, nB.jsx)("span", {
              className: "ReplayKeyframePopoverEasingLabel",
              children: "Easing to next"
            }), (0, nB.jsx)("div", {
              className: "ReplayKeyframePopoverEasingPresets",
              children: mo.map((BB => {
                const IB = (ZB = dB, TB = BB.easing, ZB[0] === TB[0] && ZB[1] === TB[1] && ZB[2] === TB[2] && ZB[3] === TB[3]);
                var ZB, TB;
                return (0, nB.jsx)(fZ.V, {
                  className: GB()("ReplayKeyframePopoverPreset", {
                    Active: IB
                  }),
                  onClick: () => {
                    CB(BB.easing)
                  },
                  children: BB.label
                }, BB.label)
              }))
            }), (0, nB.jsx)(to, {
              value: dB,
              onChange: CB
            })]
          }), (0, nB.jsxs)("div", {
            className: "ReplayKeyframePopoverActions",
            children: [(0, nB.jsx)(fZ.g, {
              className: "ReplayViewerCompactButton",
              onClick: wB,
              children: "Use current view"
            }), (0, nB.jsx)(fZ.p, {
              className: "ReplayViewerCompactButton",
              onClick: QB,
              children: "Apply"
            }), (0, nB.jsx)(fZ.M, {
              className: "ReplayViewerCompactButton",
              onClick: sB,
              children: "Delete"
            })]
          })]
        })
      })),
      IG = (0, JB.memo)((function(BB) {
        var IB, ZB, TB;
        let {
          anchor: oB,
          hasPlaybackMark: vB,
          onClose: kB,
          onMark: cB,
          onZoom: hB,
          onCrop: zB,
          onDeleteKeyframes: FB,
          onClearMark: NB
        } = BB;
        const gB = (0, JB.useRef)(null),
          qB = Ko(gB, oB.rect),
          yB = Do(oB.rect),
          UB = {
            startTick: oB.startTick,
            endTick: oB.endTick
          },
          WB = oB.endTick > oB.startTick;
        return Vo(gB, kB), (0, nB.jsx)("div", {
          ref: gB,
          className: GB()("ReplayViewerPopover ReplayTimelineSelectionPopover", {
            Below: null !== (IB = null === qB || void 0 === qB ? void 0 : qB.placeBelow) && void 0 !== IB && IB,
            Positioned: null !== qB
          }),
          style: {
            left: `${null!==(ZB=null===qB||void 0===qB?void 0:qB.left)&&void 0!==ZB?ZB:yB.left}px`,
            top: `${null!==(TB=null===qB||void 0===qB?void 0:qB.top)&&void 0!==TB?TB:yB.top}px`
          },
          onPointerDown: BB => {
            BB.stopPropagation()
          },
          children: (0, nB.jsxs)("div", {
            className: "ReplayTimelineSelectionPopoverActions",
            children: [(0, nB.jsx)(fZ.p, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                cB(UB)
              },
              disabled: !WB,
              children: (0, nB.jsx)("span", {
                children: " Play range "
              })
            }), (0, nB.jsx)(fZ.g, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                hB(UB)
              },
              children: (0, nB.jsx)("span", {
                children: " Zoom "
              })
            }), (0, nB.jsx)(fZ.V, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                zB(UB)
              },
              disabled: !WB,
              children: (0, nB.jsx)("span", {
                children: " Crop "
              })
            }), (0, nB.jsx)(fZ.V, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                FB(UB)
              },
              children: (0, nB.jsx)("span", {
                children: " Delete all keyframes "
              })
            }), vB && (0, nB.jsx)(fZ.V, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                NB()
              },
              children: (0, nB.jsx)("span", {
                children: " Clear range "
              })
            })]
          })
        })
      })),
      ZG = (0, JB.memo)((function(BB) {
        var IB, ZB;
        let {
          maxTick: TB,
          displayTick: oB,
          bM: vB,
          cameraKeyframes: kB,
          playbackMark: cB,
          onSeek: hB,
          onPause: zB,
          onScrubTickChange: FB,
          onMoveCameraKeyframe: NB,
          onUpdateCameraKeyframe: gB,
          onDeleteCameraKeyframe: qB,
          onUseCurrentCamera: yB,
          onMarkRange: UB,
          onCropRange: WB,
          onDeleteKeyframesInRange: dB,
          onClearMark: CB,
          zoomLevel: QB,
          onZoomLevelChange: sB
        } = BB;
        const wB = (0, JB.useRef)(null),
          OB = (0, JB.useRef)(null),
          YB = (0, JB.useRef)(!1),
          iB = (0, JB.useRef)(!1),
          pB = (0, JB.useRef)(QB),
          aB = (0, JB.useRef)(null),
          HB = (0, JB.useRef)(null),
          MB = (0, JB.useRef)(null),
          jB = (0, JB.useRef)(null),
          [PB, RB] = (0, JB.useState)(null),
          [rB, mB] = (0, JB.useState)(oB),
          [XB, LB] = (0, JB.useState)(null),
          [eB, uB] = (0, JB.useState)(null),
          [fB, lB] = (0, JB.useState)(null),
          [AB, tB] = (0, JB.useState)(null),
          bB = (0, JB.useMemo)((() => kB.map((BB => BB.Iz))), [kB]),
          xB = null !== PB && void 0 !== PB ? PB : oB,
          {
            viewStart: EB,
            viewEnd: DB
          } = (0, JB.useMemo)((() => function(BB) {
            const IB = BB.maxTick + 1,
              ZB = Math.max(1, Math.ceil(IB / BB.zoomLevel)),
              TB = Math.floor(ZB / 2);
            let JB = BB.centerTick - TB;
            return JB = Math.max(0, Math.min(JB, BB.maxTick - ZB + 1)), {
              viewStart: JB,
              viewEnd: Math.min(BB.maxTick, JB + ZB - 1)
            }
          }({
            maxTick: TB,
            zoomLevel: QB,
            centerTick: rB
          })), [TB, QB, rB]);
        (0, JB.useEffect)((() => {
          if (null !== PB || null !== HB.current || null !== MB.current || null !== jB.current) return;
          if (YB.current) return void(YB.current = !1);
          if (iB.current) return void(iB.current = !1);
          const BB = pB.current !== QB;
          pB.current = QB, BB && mB(oB)
        }), [QB, oB, PB]);
        const KB = (0, JB.useCallback)((BB => {
            let IB = Yo(BB, TB);
            return cB && (IB = Math.max(cB.inTick, Math.min(IB, cB.outTick))), IB
          }), [TB, cB]),
          VB = (0, JB.useCallback)(((BB, IB) => {
            const ZB = KB(BB);
            hB(ZB), IB && mB(ZB)
          }), [KB, hB]),
          SB = (0, JB.useCallback)(((BB, IB) => {
            const ZB = KB(BB);
            RB(ZB), FB(ZB), VB(ZB, IB)
          }), [KB, VB, FB]),
          BI = (0, JB.useCallback)((() => {
            RB((BB => (null !== BB && mB(BB), null))), FB(null)
          }), [FB]),
          II = (0, JB.useCallback)((() => {
            lB(null), tB(null)
          }), []),
          ZI = (0, JB.useCallback)((BB => {
            const IB = wB.current;
            if (!IB) return 0;
            return Yo(po(jo(BB, IB), EB, DB), TB)
          }), [TB, DB, EB]),
          TI = (0, JB.useCallback)((BB => {
            const IB = OB.current;
            if (!IB) return 0;
            return Yo(po(jo(BB, IB), 0, TB), TB)
          }), [TB]),
          JI = (0, JB.useMemo)((() => {
            if (!XB) return [...bB];
            const BB = bB.filter((BB => BB !== XB.fromTick));
            return BB.push(XB.previewTick), BB.sort(((BB, IB) => BB - IB)), BB
          }), [bB, XB]),
          oI = (0, JB.useMemo)((() => {
            var BB;
            return eB && null !== (BB = kB.find((BB => BB.Iz === eB.Iz))) && void 0 !== BB ? BB : null
          }), [kB, eB]),
          GI = (0, JB.useMemo)((() => !!oI && kB.some((BB => BB.Iz > oI.Iz))), [kB, oI]);
        (0, JB.useEffect)((() => {
          eB && !oI && uB(null)
        }), [eB, oI]), (0, JB.useEffect)((() => {
          if (!AB) return () => {};
          const BB = BB => {
            "Escape" === BB.key && II()
          };
          return window.addEventListener("keydown", BB), () => {
            window.removeEventListener("keydown", BB)
          }
        }), [II, AB]);
        const vI = (0, JB.useCallback)(((BB, IB) => {
            II(), zB(), hB(BB, {
              ignorePlaybackMark: !0
            }), uB({
              Iz: BB,
              rect: IB.getBoundingClientRect()
            })
          }), [II, zB, hB]),
          kI = (0, JB.useCallback)(((BB, IB) => ZB => {
            0 === ZB.button && (ZB.stopPropagation(), uB(null), II(), zB(), aB.current = {
              fromTick: BB,
              startX: ZB.clientX,
              startY: ZB.clientY,
              didDrag: !1,
              track: IB
            }, LB({
              fromTick: BB,
              previewTick: BB,
              track: IB
            }), ZB.currentTarget.setPointerCapture(ZB.pointerId))
          }), [II, zB]),
          cI = (0, JB.useCallback)((BB => {
            if (!XB) return;
            BB.stopPropagation();
            const IB = aB.current;
            if (IB && !IB.didDrag) {
              const ZB = BB.clientX - IB.startX,
                TB = BB.clientY - IB.startY;
              Math.hypot(ZB, TB) > 5 && (IB.didDrag = !0)
            }
            const ZB = "detail" === XB.track ? ZI(BB.clientX) : TI(BB.clientX);
            ZB !== XB.previewTick && LB({
              ...XB,
              previewTick: ZB
            })
          }), [XB, ZI, TI]),
          nI = (0, JB.useCallback)((BB => {
            if (!XB) return;
            BB.stopPropagation();
            const IB = aB.current,
              ZB = "detail" === XB.track ? ZI(BB.clientX) : TI(BB.clientX);
            IB && !IB.didDrag ? vI(IB.fromTick, BB.currentTarget) : ZB !== XB.fromTick && NB(XB.fromTick, ZB), LB(null), aB.current = null, BB.currentTarget.releasePointerCapture(BB.pointerId)
          }), [XB, NB, vI, ZI, TI]),
          hI = (0, JB.useCallback)((BB => {
            if (0 !== BB.button) return;
            uB(null), zB();
            const IB = ZI(BB.clientX);
            HB.current = {
              pointerId: BB.pointerId,
              startX: BB.clientX,
              startY: BB.clientY,
              startTick: IB,
              currentTick: IB,
              didSelect: !1
            }, lB(null), tB(null), BB.currentTarget.setPointerCapture(BB.pointerId)
          }), [zB, ZI]),
          zI = (0, JB.useCallback)((BB => {
            const IB = HB.current;
            if (!IB || IB.pointerId !== BB.pointerId) return;
            const ZB = ZI(BB.clientX);
            if (IB.currentTick = ZB, !IB.didSelect) {
              const ZB = BB.clientX - IB.startX,
                TB = BB.clientY - IB.startY;
              if (Math.hypot(ZB, TB) <= 5) return;
              IB.didSelect = !0
            }
            const TB = Math.min(IB.startTick, ZB),
              JB = Math.max(IB.startTick, ZB);
            lB({
              startTick: TB,
              endTick: JB
            })
          }), [ZI]),
          FI = (0, JB.useCallback)((BB => {
            const IB = HB.current;
            if (!IB || IB.pointerId !== BB.pointerId) return;
            if (HB.current = null, BB.currentTarget.releasePointerCapture(BB.pointerId), !IB.didSelect) return II(), void VB(IB.startTick, !0);
            const ZB = ZI(BB.clientX),
              TB = Math.min(IB.startTick, ZB),
              JB = Math.max(IB.startTick, ZB),
              oB = {
                startTick: TB,
                endTick: JB
              };
            lB(oB);
            const GB = wB.current;
            if (!GB) return;
            const vB = GB.getBoundingClientRect(),
              kB = io(TB, EB, DB) / 100,
              cB = io(JB, EB, DB) / 100,
              nB = vB.left + kB * vB.width,
              hB = vB.left + cB * vB.width;
            tB({
              ...oB,
              rect: new DOMRect(nB, vB.top, Math.max(hB - nB, 1), vB.height)
            })
          }), [II, VB, ZI, DB, EB]),
          NI = (0, JB.useCallback)((BB => IB => {
            if (0 !== IB.button) return;
            IB.stopPropagation(), uB(null), II(), zB(), MB.current = {
              pointerId: IB.pointerId,
              track: BB
            }, IB.currentTarget.setPointerCapture(IB.pointerId);
            const ZB = "detail" === BB ? ZI(IB.clientX) : TI(IB.clientX);
            SB(ZB, !1)
          }), [II, zB, SB, ZI, TI]),
          gI = (0, JB.useCallback)((BB => {
            const IB = MB.current;
            if (!IB || IB.pointerId !== BB.pointerId) return;
            BB.stopPropagation();
            const ZB = "detail" === IB.track ? ZI(BB.clientX) : TI(BB.clientX);
            SB(ZB, !1)
          }), [SB, ZI, TI]),
          qI = (0, JB.useCallback)((BB => {
            const IB = MB.current;
            IB && IB.pointerId === BB.pointerId && (BB.stopPropagation(), MB.current = null, BB.currentTarget.releasePointerCapture(BB.pointerId), BI())
          }), [BI]),
          yI = (0, JB.useCallback)((BB => {
            0 === BB.button && (II(), zB(), jB.current = {
              pointerId: BB.pointerId
            }, BB.currentTarget.setPointerCapture(BB.pointerId), SB(TI(BB.clientX), !0))
          }), [II, zB, SB, TI]),
          UI = (0, JB.useCallback)((BB => {
            const IB = jB.current;
            IB && IB.pointerId === BB.pointerId && SB(TI(BB.clientX), !0)
          }), [SB, TI]),
          WI = (0, JB.useCallback)((BB => {
            const IB = jB.current;
            IB && IB.pointerId === BB.pointerId && (jB.current = null, BB.currentTarget.releasePointerCapture(BB.pointerId), BI())
          }), [BI]),
          dI = (0, JB.useCallback)((BB => {
            const IB = Math.max(1, BB.endTick - BB.startTick + 1),
              ZB = TB + 1,
              JB = ZB / IB,
              oB = Math.max(1, Math.ceil(ZB / JB)),
              GB = BB.startTick + Math.floor((oB - 1) / 2);
            iB.current = !0, pB.current = JB, mB(Yo(GB, TB)), sB(JB), II()
          }), [II, TB, sB]),
          CI = (0, JB.useCallback)((BB => {
            UB(BB), II()
          }), [II, UB]),
          QI = (0, JB.useCallback)((BB => {
            WB(BB), II()
          }), [II, WB]),
          sI = (0, JB.useCallback)((BB => {
            dB(BB), II()
          }), [II, dB]),
          wI = (0, JB.useCallback)((() => {
            CB(), II()
          }), [II, CB]);
        (0, JB.useEffect)((() => {
          const BB = wB.current;
          if (!BB) return () => {};
          const IB = IB => {
            IB.preventDefault();
            const ZB = Yo(po(jo(IB.clientX, BB), EB, DB), TB),
              JB = IB.deltaY < 0 ? "in" : "out",
              oB = Mo(QB, JB);
            oB !== QB && (YB.current = !0, mB(ZB), sB(oB))
          };
          return BB.addEventListener("wheel", IB, {
            passive: !1
          }), () => {
            BB.removeEventListener("wheel", IB)
          }
        }), [TB, sB, DB, EB, QB]);
        const OI = io(xB, EB, DB),
          YI = Po(xB, TB),
          iI = Po(EB, TB),
          pI = TB > 0 ? Po(DB, TB) : 100,
          aI = null !== cB,
          HI = null !== (IB = null === cB || void 0 === cB ? void 0 : cB.inTick) && void 0 !== IB ? IB : 0,
          MI = null !== (ZB = null === cB || void 0 === cB ? void 0 : cB.outTick) && void 0 !== ZB ? ZB : TB,
          jI = Po(HI, TB),
          PI = Math.max(Po(MI, TB) - jI, 0),
          RI = io(Math.max(HI, EB), EB, DB),
          rI = io(Math.min(MI, DB), EB, DB),
          mI = Math.max(rI - RI, 0),
          XI = aI && MI >= EB && HI <= DB,
          LI = io(HI, EB, DB),
          eI = io(MI, EB, DB),
          uI = aI && HI >= EB && HI <= DB,
          fI = aI && MI >= EB && MI <= DB,
          lI = Po(HI, TB),
          AI = Po(MI, TB),
          tI = null !== fB && void 0 !== fB ? fB : AB ? {
            startTick: AB.startTick,
            endTick: AB.endTick
          } : null,
          bI = tI ? io(Math.max(tI.startTick, EB), EB, DB) : 0,
          xI = tI ? io(Math.min(tI.endTick, DB), EB, DB) : 0,
          EI = Math.max(xI - bI, 0),
          DI = null !== tI && tI.endTick >= EB && tI.startTick <= DB,
          KI = (0, JB.useMemo)((() => Ro(0, TB, vB)), [TB, vB]),
          VI = (0, JB.useMemo)((() => Ro(EB, DB, vB)), [EB, DB, vB]),
          SI = (0, JB.useMemo)((() => JI.filter((BB => BB >= EB && BB <= DB))), [JI, DB, EB]),
          BZ = (0, JB.useCallback)(((BB, IB, ZB) => {
            const JB = "detail" === IB ? io(BB, EB, DB) : Po(BB, TB),
              oB = null !== XB && ZB === XB.fromTick,
              vB = null !== eB && eB.Iz === ZB;
            return (0, nB.jsx)("button", {
              type: "button",
              className: GB()("ReplayTimelineCameraKeyframeMarker", "detail" === IB ? "Detail" : "Overview", {
                Dragging: oB,
                Selected: vB
              }),
              style: {
                left: `${JB}%`
              },
              onPointerDown: kI(ZB, IB),
              onPointerMove: cI,
              onPointerUp: nI,
              onPointerCancel: nI,
              "aria-label": `Camera keyframe at tick ${ZB}`
            }, `cam-${IB}-${ZB}`)
          }), [kI, eB, nI, XB, TB, cI, DB, EB]),
          IZ = (0, JB.useCallback)((BB => XB && BB === XB.previewTick ? XB.fromTick : BB), [XB]);
        return TB <= 0 ? null : (0, nB.jsxs)("div", {
          className: "ReplayTimeline",
          children: [eB && oI && (0, xJ.createPortal)((0, nB.jsx)(BG, {
            keyframe: oI,
            anchor: eB,
            hasOutgoingSegment: GI,
            onClose: () => {
              uB(null)
            },
            onApply: gB,
            onDelete: qB,
            onUseCurrentCamera: yB
          }), document.body), AB && (0, xJ.createPortal)((0, nB.jsx)(IG, {
            anchor: AB,
            hasPlaybackMark: aI,
            onClose: II,
            onMark: CI,
            onZoom: dI,
            onCrop: QI,
            onDeleteKeyframes: sI,
            onClearMark: wI
          }), document.body), (0, nB.jsxs)("div", {
            className: GB()("ReplayTimelineOverviewSection", {
              Hidden: QB <= 1
            }),
            children: [(0, nB.jsx)("div", {
              className: "ReplayTimelineSectionLabel",
              children: "Overview"
            }), (0, nB.jsxs)("div", {
              ref: OB,
              className: "ReplayTimelineOverviewTrack",
              onPointerDown: yI,
              onPointerMove: UI,
              onPointerUp: WI,
              onPointerCancel: WI,
              role: "slider",
              "aria-label": "Recording overview",
              "aria-valuemin": 0,
              "aria-valuemax": TB,
              "aria-valuenow": xB,
              tabIndex: 0,
              children: [KI.map((BB => {
                const IB = Po(BB, TB);
                return (0, nB.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Overview",
                  style: {
                    left: `${IB}%`
                  }
                }, BB)
              })), aI && (0, nB.jsxs)(nB.Fragment, {
                children: [(0, nB.jsx)("div", {
                  className: "ReplayTimelineMarkRegion Overview",
                  style: {
                    left: `${jI}%`,
                    width: `${PI}%`
                  }
                }), (0, nB.jsx)("div", {
                  className: "ReplayTimelineMarkMarker In Overview",
                  style: {
                    left: `${lI}%`
                  },
                  "aria-hidden": !0
                }), (0, nB.jsx)("div", {
                  className: "ReplayTimelineMarkMarker Out Overview",
                  style: {
                    left: `${AI}%`
                  },
                  "aria-hidden": !0
                })]
              }), JI.map((BB => BZ(BB, "overview", IZ(BB)))), (0, nB.jsx)("div", {
                className: "ReplayTimelineViewport",
                style: {
                  left: `${iI}%`,
                  width: `${Math.max(pI-iI,.5)}%`
                }
              }), (0, nB.jsx)("button", {
                type: "button",
                className: GB()("ReplayTimelinePlayhead Overview", {
                  Scrubbing: null !== PB
                }),
                style: {
                  left: `${YI}%`
                },
                onPointerDown: NI("overview"),
                onPointerMove: gI,
                onPointerUp: qI,
                onPointerCancel: qI,
                "aria-label": "Scrub playhead"
              })]
            })]
          }), (0, nB.jsxs)("div", {
            className: "ReplayTimelineDetailSection",
            children: [(0, nB.jsxs)("div", {
              className: "ReplayTimelineDetailHeader",
              children: [(0, nB.jsx)("span", {
                className: "ReplayTimelineSectionLabel",
                children: "Timeline"
              }), (0, nB.jsxs)("span", {
                className: "ReplayTimelineDetailRange",
                children: [ao(EB, vB), " \u2013 ", ao(DB, vB), QB > 1 && (0, nB.jsx)("span", {
                  className: "ReplayTimelineZoomBadge",
                  children: Ho(QB)
                })]
              })]
            }), (0, nB.jsxs)("div", {
              ref: wB,
              className: "ReplayTimelineDetailTrack",
              onPointerDown: hI,
              onPointerMove: zI,
              onPointerUp: FI,
              onPointerCancel: FI,
              role: "slider",
              "aria-label": "Recording timeline",
              "aria-valuemin": EB,
              "aria-valuemax": DB,
              "aria-valuenow": xB,
              tabIndex: 0,
              children: [VI.map((BB => {
                const IB = io(BB, EB, DB);
                return (0, nB.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Detail",
                  style: {
                    left: `${IB}%`
                  }
                }, BB)
              })), XI && (0, nB.jsx)("div", {
                className: "ReplayTimelineMarkRegion Detail",
                style: {
                  left: `${RI}%`,
                  width: `${mI}%`
                }
              }), uI && (0, nB.jsx)("div", {
                className: "ReplayTimelineMarkMarker In Detail",
                style: {
                  left: `${LI}%`
                },
                "aria-label": `Play range start at tick ${HI}`
              }), fI && (0, nB.jsx)("div", {
                className: "ReplayTimelineMarkMarker Out Detail",
                style: {
                  left: `${eI}%`
                },
                "aria-label": `Play range end at tick ${MI}`
              }), DI && tI && (0, nB.jsx)("div", {
                className: "ReplayTimelineSelectionRegion Detail",
                style: {
                  left: `${bI}%`,
                  width: `${EI}%`
                }
              }), SI.map((BB => BZ(BB, "detail", IZ(BB)))), (0, nB.jsx)("button", {
                type: "button",
                className: GB()("ReplayTimelinePlayhead Detail", {
                  Scrubbing: null !== PB
                }),
                style: {
                  left: `${OI}%`
                },
                onPointerDown: NI("detail"),
                onPointerMove: gI,
                onPointerUp: qI,
                onPointerCancel: qI,
                "aria-label": "Scrub playhead"
              })]
            }), (0, nB.jsxs)("div", {
              className: "ReplayTimelineWheelHint",
              children: [(0, nB.jsx)("span", {
                className: "Select",
                children: "Drag timeline to select"
              }), " \xb7 Scroll to zoom \xb7 Drag playhead to scrub"]
            })]
          })]
        })
      })),
      TG = (0, JB.memo)((function(BB) {
        let {
          enabled: IB
        } = BB;
        const ZB = (0, JB.useRef)(!1),
          TB = (0, JB.useRef)(null),
          [oB, vB] = (0, JB.useState)(!1),
          kB = (0, JB.useCallback)((BB => {
            IB && 0 === BB.button && (ZB.current = !0, vB(!0), TB.current = {
              x: BB.clientX,
              y: BB.clientY
            }, BB.currentTarget.setPointerCapture(BB.pointerId))
          }), [IB]),
          cB = (0, JB.useCallback)((BB => {
            if (!IB || !ZB.current || !TB.current) return;
            const JB = BB.clientX - TB.current.x,
              oB = BB.clientY - TB.current.y;
            TB.current = {
              x: BB.clientX,
              y: BB.clientY
            }, FB.gameBridge.send("dragReplayCamera", {
              dx: JB,
              dy: oB
            })
          }), [IB]),
          hB = (0, JB.useCallback)((BB => {
            ZB.current && (ZB.current = !1, vB(!1), TB.current = null, BB.currentTarget.releasePointerCapture(BB.pointerId))
          }), []);
        return IB ? (0, nB.jsx)("div", {
          className: GB()("ReplayViewerCameraDragSurface", {
            Dragging: oB
          }),
          onPointerDown: kB,
          onPointerMove: cB,
          onPointerUp: hB,
          onPointerCancel: hB,
          "aria-hidden": !0
        }) : null
      }));
    var JG = ZB(37019),
      oG = ZB(37024);
    const GG = (0, JB.memo)((function(BB) {
        var IB, ZB, TB;
        let {
          anchorRect: oB,
          anchorRef: vB,
          onClose: cB
        } = BB;
        const hB = (0, JB.useRef)(null),
          zB = Ko(hB, oB),
          [FB, NB] = (0, JB.useState)(oG.b),
          gB = (0, JB.useMemo)((() => Object.values(FB).every((BB => BB))), [FB]);
        (0, kB.d)("replayViewer|uiVisibilityChanged", (() => {
          NB((0, oG.b)())
        })), Vo(hB, cB, vB);
        const qB = (0, JB.useCallback)(((BB, IB) => {
            (0, oG.h)(BB, IB), NB((0, oG.b)())
          }), []),
          yB = (0, JB.useCallback)((BB => {
            for (const {
                group: IB
              }
              of JG.d)(0, oG.h)(IB, BB);
            NB((0, oG.b)())
          }), []),
          UB = Do(oB);
        return (0, xJ.createPortal)((0, nB.jsxs)("div", {
          ref: hB,
          className: GB()("ReplayViewerPopover ReplayUiVisibilityPopover", {
            Below: null !== (IB = null === zB || void 0 === zB ? void 0 : zB.placeBelow) && void 0 !== IB && IB,
            Positioned: null !== zB
          }),
          style: {
            left: `${null!==(ZB=null===zB||void 0===zB?void 0:zB.left)&&void 0!==ZB?ZB:UB.left}px`,
            top: `${null!==(TB=null===zB||void 0===zB?void 0:zB.top)&&void 0!==TB?TB:UB.top}px`
          },
          onPointerDown: BB => {
            BB.stopPropagation()
          },
          children: [(0, nB.jsx)("div", {
            className: "ReplayUiVisibilityPopoverHeader",
            children: (0, nB.jsx)("span", {
              className: "ReplayUiVisibilityPopoverTitle",
              children: "UI visibility"
            })
          }), (0, nB.jsxs)("div", {
            className: "ReplayUiVisibilityPopoverChecks",
            children: [(0, nB.jsxs)("div", {
              className: "ReplayUiVisibilityPopoverCheck",
              children: [(0, nB.jsx)("input", {
                type: "checkbox",
                checked: gB,
                onChange: BB => {
                  yB(BB.target.checked)
                }
              }), (0, nB.jsx)("span", {
                children: "SELECT ALL"
              })]
            }), JG.d.map((BB => {
              let {
                group: IB,
                label: ZB
              } = BB;
              return (0, nB.jsxs)("label", {
                className: "ReplayUiVisibilityPopoverCheck",
                children: [(0, nB.jsx)("input", {
                  type: "checkbox",
                  checked: FB[IB],
                  onChange: BB => {
                    qB(IB, BB.target.checked)
                  }
                }), (0, nB.jsx)("span", {
                  children: ZB
                })]
              }, IB)
            }))]
          })]
        }), document.body)
      })),
      vG = (0, JB.memo)((function(BB) {
        let {
          disabled: IB
        } = BB;
        const ZB = (0, JB.useRef)(null),
          [TB, oB] = (0, JB.useState)(!1),
          [GB, vB] = (0, JB.useState)(null),
          kB = (0, JB.useCallback)((() => {
            ZB.current && (vB(ZB.current.getBoundingClientRect()), oB((BB => !BB)))
          }), []),
          cB = (0, JB.useCallback)((() => {
            oB(!1)
          }), []);
        return (0, nB.jsxs)(nB.Fragment, {
          children: [(0, nB.jsx)("div", {
            ref: ZB,
            children: (0, nB.jsx)(fZ.g, {
              className: "ReplayViewerActionButton",
              onClick: kB,
              disabled: IB,
              children: (0, nB.jsx)("span", {
                children: "Hide UI elements"
              })
            })
          }), TB && GB && (0, nB.jsx)(GG, {
            anchorRect: GB,
            anchorRef: ZB,
            onClose: cB
          })]
        })
      })),
      kG = ["freeCamUp", "freeCamDown"];

    function cG(BB, IB) {
      FB.gameBridge.send("holdReplayFreecamVertical", {
        action: BB,
        sv: IB
      })
    }
    const nG = (0, JB.memo)((function() {
      (0, JB.useEffect)((() => () => {
        ! function() {
          FB.gameBridge.send("moveReplayFreecam", null);
          for (const BB of kG) cG(BB, !1)
        }()
      }), []);
      const BB = (0, JB.useCallback)((BB => {
          FB.gameBridge.send("moveReplayFreecam", BB)
        }), []),
        IB = (0, JB.useCallback)((BB => ({
          onTouchStart: IB => {
            IB.preventDefault(), IB.stopPropagation(), cG(BB, !0)
          },
          onTouchEnd: IB => {
            IB.preventDefault(), IB.stopPropagation(), cG(BB, !1)
          },
          onTouchCancel: IB => {
            IB.preventDefault(), IB.stopPropagation(), cG(BB, !1)
          }
        })), []);
      return (0, nB.jsxs)("div", {
        className: "ReplayFreecamTouchControls",
        children: [(0, nB.jsx)("div", {
          className: "ReplayFreecamJoystickWrap",
          children: (0, nB.jsx)(pI, {
            onMove: BB,
            mode: "pinned"
          })
        }), (0, nB.jsxs)("div", {
          className: "ReplayFreecamVerticalButtons",
          children: [(0, nB.jsx)("button", {
            type: "button",
            className: "ReplayFreecamVerticalButton",
            "aria-label": "Freecam up",
            ...IB("freeCamUp"),
            children: (0, nB.jsx)(XB.d, {
              name: "angle-up",
              className: "ReplayFreecamVerticalIcon"
            })
          }), (0, nB.jsx)("button", {
            type: "button",
            className: "ReplayFreecamVerticalButton",
            "aria-label": "Freecam down",
            ...IB("freeCamDown"),
            children: (0, nB.jsx)(XB.d, {
              name: "angle-down",
              className: "ReplayFreecamVerticalIcon"
            })
          })]
        })]
      })
    }));
    var hG = ZB(3306);
    const zG = [],
      FG = "Failed to load recording";

    function NG(BB, IB, ZB) {
      var TB;
      console.error(IB), GZ.NotificationProvider.showAlertPopup({
        title: BB,
        subtitle: null !== (TB = (0, Wo.g)(IB)) && void 0 !== TB ? TB : ZB,
        confirmText: "OK"
      })
    }

    function gG(BB) {
      NG(FG, BB, Wo.b.cantOpen.text)
    }
    const qG = (0, JB.memo)((function() {
        const BB = (0, EB.j)(),
          {
            gameState: IB
          } = (0, OB.o)(["gameState"]),
          ZB = "inGame" === IB;
        return (0, wB.c)("replayViewerRequested", (BB => {
          (0, EB.h)("toggle" === BB ? !(0, EB.f)() : "open" === BB)
        })), (0, JB.useEffect)((() => {
          ZB && (0, so.c)().then((BB => {
            if (null !== BB) return (0, EB.h)(!0), (0, go.d)().open(BB.bytes, BB.source)
          })).catch((BB => {
            (0, EB.h)(!0), gG(BB)
          }))
        }), [ZB]), BB ? (0, nB.jsx)(yG, {}) : null
      })),
      yG = (0, JB.memo)((function() {
        var BB, IB, ZB, TB, oB, vB, kB, cB, hB, zB, NB, gB;
        const qB = JB.useRef(null),
          [yB, UB] = (0, JB.useState)(1),
          [WB, dB] = (0, JB.useState)(null),
          [CB, QB] = (0, JB.useState)(!1),
          {
            isTouchScreen: sB
          } = (0, OB.o)(["isTouchScreen"]),
          iB = (0, wB.j)("replay"),
          pB = (0, wB.j)("replayEdits"),
          aB = null !== iB,
          HB = null !== (BB = null === iB || void 0 === iB ? void 0 : iB.Iz) && void 0 !== BB ? BB : 0,
          MB = null !== (IB = null === iB || void 0 === iB ? void 0 : iB.totalTicks) && void 0 !== IB ? IB : 0,
          jB = Math.max(0, MB - 1),
          PB = null !== (ZB = null === iB || void 0 === iB ? void 0 : iB.playing) && void 0 !== ZB && ZB,
          RB = null !== (TB = null === iB || void 0 === iB ? void 0 : iB.speed) && void 0 !== TB ? TB : 1,
          rB = null !== (oB = null === iB || void 0 === iB ? void 0 : iB.bM) && void 0 !== oB ? oB : 20,
          LB = null !== WB && void 0 !== WB ? WB : HB,
          eB = null !== (vB = null === iB || void 0 === iB ? void 0 : iB.freecam) && void 0 !== vB && vB,
          uB = null !== (kB = null === iB || void 0 === iB ? void 0 : iB.cameraMode) && void 0 !== kB ? kB : "recording",
          fB = null !== (cB = null === pB || void 0 === pB ? void 0 : pB.cameraKeyframes) && void 0 !== cB ? cB : zG,
          lB = null !== (hB = null === pB || void 0 === pB ? void 0 : pB.playbackMark) && void 0 !== hB ? hB : null,
          AB = null !== (zB = null === pB || void 0 === pB ? void 0 : pB.fileName) && void 0 !== zB ? zB : null,
          tB = null !== (NB = null === pB || void 0 === pB ? void 0 : pB.unsavedChanges) && void 0 !== NB && NB,
          bB = null !== (gB = null === pB || void 0 === pB ? void 0 : pB.suggestSaveAs) && void 0 !== gB && gB,
          xB = (0, wB.j)("replayVideoExporting"),
          DB = !xB && aB && ("freecam" === uB || ("recording" === uB || "keyframe" === uB) && !PB),
          KB = sB && aB && "freecam" === uB && !xB && !CB;
        (0, wo.e)(!0, !0, "ReplayViewerOverlay"), (0, JB.useEffect)((() => {
          FB.gameBridge.send("syncReplayCameraMode", null)
        }), [eB]);
        const VB = (0, JB.useCallback)(((BB, IB) => {
            FB.gameBridge.send("seekReplay", {
              Iz: BB,
              ignorePlaybackMark: null === IB || void 0 === IB ? void 0 : IB.ignorePlaybackMark
            })
          }), []),
          SB = (0, JB.useCallback)((() => {
            FB.gameBridge.send("setReplayPlaying", !1)
          }), []),
          BI = (0, JB.useCallback)(((BB, IB) => {
            FB.gameBridge.send("moveReplayCameraKeyframe", {
              from: BB,
              to: IB
            })
          }), []),
          II = (0, JB.useCallback)((BB => {
            FB.gameBridge.send("setReplayCameraKeyframe", BB)
          }), []),
          ZI = (0, JB.useCallback)((BB => {
            FB.gameBridge.send("deleteReplayCameraKeyframes", {
              start: BB,
              end: BB
            })
          }), []),
          TI = (0, JB.useCallback)((BB => {
            FB.gameBridge.send("deleteReplayCameraKeyframes", {
              start: BB.startTick,
              end: BB.endTick
            })
          }), []),
          JI = (0, JB.useCallback)((() => FB.gameBridge.lookup("replayCamera", null)), []),
          oI = (0, JB.useCallback)((BB => {
            dB(BB)
          }), []),
          GI = (0, JB.useCallback)((BB => {
            FB.gameBridge.send("setReplayPlaybackMark", {
              inTick: BB.startTick,
              outTick: BB.endTick
            })
          }), []),
          vI = (0, JB.useCallback)((() => {
            FB.gameBridge.send("setReplayPlaybackMark", null)
          }), []),
          kI = (0, JB.useCallback)((BB => {
            const IB = FB.gameBridge.latest("replay");
            if (null === IB || BB.endTick <= BB.startTick) return;
            const ZB = BB.startTick,
              TB = BB.endTick;
            GZ.NotificationProvider.showPromptPopup({
              title: "Crop recording to the selected range? This cannot be undone.",
              confirmText: "Crop",
              destructive: !0,
              cancelText: "Cancel"
            }).getResult().then((BB => {
              var JB;
              if (!0 !== BB) return;
              if ((null === (JB = FB.gameBridge.latest("replay")) || void 0 === JB ? void 0 : JB.id) !== IB.id) return;
              FB.gameBridge.send("cropReplay", {
                start: ZB,
                end: TB
              }) && (dB(null), UB(1))
            }))
          }), []),
          cI = (0, JB.useCallback)(((BB, IB) => {
            UB(1), dB(null), (0, go.d)().open(BB, IB).catch(gG)
          }), []),
          nI = (0, JB.useCallback)(((BB, IB) => {
            null !== FB.gameBridge.latest("connectedGame").websocketUrl ? GZ.NotificationProvider.showPromptPopup({
              title: "Leave current game and play recording?",
              confirmText: "Yes",
              cancelText: "No"
            }).getResult().then((ZB => {
              !0 === ZB && cI(BB, IB)
            })) : cI(BB, IB)
          }), [cI]),
          hI = (0, JB.useCallback)((BB => {
            var IB;
            const ZB = null === (IB = BB.target.files) || void 0 === IB ? void 0 : IB[0];
            if (BB.target.value = "", !ZB) return;
            const TB = new FileReader;
            TB.onload = () => {
              nI(new Uint8Array(TB.result), {
                fileName: ZB.name
              })
            }, TB.onerror = () => {
              gG(TB.error)
            }, TB.readAsArrayBuffer(ZB)
          }), [nI]),
          zI = (0, JB.useCallback)((() => {
            const BB = () => {
              null !== qB.current && (0, hG.i)(qB.current)
            };
            (0, Uo.i)() ? (0, Uo.e)().then((BB => {
              BB && nI(BB.bytes, {
                fileHandle: BB.handle
              })
            })).catch((IB => {
              console.error(IB), GZ.NotificationProvider.showPromptPopup({
                title: FG,
                confirmText: "Choose file",
                cancelText: "Cancel"
              }).getResult().then((IB => {
                !0 === IB && BB()
              }))
            })): BB()
          }), [nI]),
          FI = (0, JB.useCallback)((async function() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            let IB;
            try {
              IB = await Qo(BB, {
                files: (0, go.d)(),
                pickerSupported: Uo.i,
                chooseFile: Uo.c,
                write: Uo.l,
                download: yo.j,
                onFallback: console.error
              })
            } catch (ZB) {
              return void NG("Failed to save recording", ZB)
            }
            "written" !== IB && "downloaded" !== IB || (() => {
              const BB = GZ.NotificationProvider.showAlertPopup({
                title: "Recording saved",
                disableBackground: !0
              });
              setTimeout((() => {
                BB.tearDownNotification()
              }), 1e3)
            })()
          }), []),
          NI = (0, JB.useCallback)((BB => {
            FB.gameBridge.send("replayAction", BB)
          }), []),
          gI = (0, JB.useCallback)((BB => {
            UB((IB => Mo(IB, BB)))
          }), []),
          qI = (0, JB.useCallback)((BB => {
            if (!FB.gameBridge.latest("replayVideoExporting")) switch (BB) {
              case "replayLoad":
                zI();
                break;
              case "replaySave":
                FI(!1);
                break;
              case "replaySaveAs":
                FI(!0);
                break;
              case "replayTimelineZoomIn":
                gI("in");
                break;
              case "replayTimelineZoomOut":
                gI("out")
            }
          }), [zI, FI, gI]);
        (0, wB.c)("replayUiActionRequested", qI);
        const yI = (0, JB.useCallback)((BB => {
            FB.gameBridge.send("setReplayCameraMode", BB)
          }), []),
          UI = aB ? fZ.g : fZ.p,
          WI = tB && !bB ? fZ.p : fZ.g,
          dI = tB && bB ? fZ.p : fZ.g;
        return (0, nB.jsxs)("div", {
          className: "ReplayViewerOverlay",
          children: [(0, nB.jsx)(TG, {
            enabled: DB
          }), KB && (0, nB.jsx)(nG, {}), (0, nB.jsx)("input", {
            ref: qB,
            type: "file",
            accept: yo.c,
            className: "ReplayViewerFileInput",
            onChange: hI
          }), (0, nB.jsxs)("div", {
            className: GB()("ReplayViewerBar", {
              Collapsed: CB
            }),
            children: [(0, nB.jsx)("button", {
              type: "button",
              className: "ReplayViewerCollapseTab",
              onClick: () => {
                CB ? QB(!1) : aB ? QB(!0) : (0, EB.e)()
              },
              "aria-expanded": !CB,
              "aria-label": CB ? "Expand replay viewer" : "Collapse replay viewer",
              children: (0, nB.jsx)(XB.d, {
                name: CB ? "angle-up" : "angle-down"
              })
            }), !CB && (0, nB.jsxs)("div", {
              className: "ReplayViewerBarBody",
              children: [aB && MB > 0 && (0, nB.jsx)(ZG, {
                maxTick: jB,
                displayTick: LB,
                bM: rB,
                cameraKeyframes: fB,
                playbackMark: lB,
                onSeek: VB,
                onPause: SB,
                onScrubTickChange: oI,
                onMoveCameraKeyframe: BI,
                onUpdateCameraKeyframe: II,
                onDeleteCameraKeyframe: ZI,
                onUseCurrentCamera: JI,
                onMarkRange: GI,
                onCropRange: kI,
                onDeleteKeyframesInRange: TI,
                onClearMark: vI,
                zoomLevel: yB,
                onZoomLevelChange: UB
              }, jB), (0, nB.jsxs)("div", {
                className: "ReplayViewerControls",
                children: [(0, nB.jsxs)("div", {
                  className: "ReplayViewerControlsLeftSide",
                  children: [(0, nB.jsxs)("div", {
                    className: "ReplayViewerControlsGroup FileGroup",
                    children: [aB && (0, nB.jsxs)("div", {
                      className: "ReplayViewerFileName",
                      children: [null !== AB && void 0 !== AB ? AB : "Unsaved recording", tB ? " *" : ""]
                    }), (0, nB.jsxs)(UI, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        qI("replayLoad")
                      },
                      children: [(0, nB.jsx)(YB.d, {
                        noaAction: "replayLoad",
                        padHidesKey: !0
                      }), (0, nB.jsx)("span", {
                        children: " Load "
                      })]
                    }), (0, nB.jsxs)(fZ.g, {
                      className: "ReplayViewerActionButton",
                      onClick: EB.e,
                      children: [(0, nB.jsx)(YB.d, {
                        noaAction: "replayViewerOpen",
                        padHidesKey: !0
                      }), (0, nB.jsx)("span", {
                        children: " Hide "
                      })]
                    }), (0, nB.jsxs)(WI, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        qI("replaySave")
                      },
                      disabled: !aB,
                      children: [(0, nB.jsx)(YB.d, {
                        noaAction: "replaySave",
                        padHidesKey: !0
                      }), (0, nB.jsx)("span", {
                        children: " Save "
                      })]
                    }), (0, nB.jsxs)(fZ.g, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        FB.gameBridge.send("leaveGame", {
                          reloadPath: "/"
                        })
                      },
                      disabled: !aB,
                      children: [(0, nB.jsx)(YB.d, {
                        noaAction: "replayExit",
                        padHidesKey: !0
                      }), (0, nB.jsx)("span", {
                        children: " Exit "
                      })]
                    }), (0, nB.jsxs)(dI, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        qI("replaySaveAs")
                      },
                      disabled: !aB,
                      children: [(0, nB.jsx)(YB.d, {
                        noaAction: "replaySaveAs",
                        padHidesKey: !0
                      }), (0, nB.jsx)("span", {
                        children: " Save As "
                      })]
                    }), (0, nB.jsxs)(fZ.g, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        FB.gameBridge.send("exportReplayVideo", null)
                      },
                      disabled: !aB || 0 === MB || xB,
                      children: [(0, nB.jsx)(YB.d, {
                        noaAction: "replayExportVideo",
                        padHidesKey: !0
                      }), (0, nB.jsx)("span", {
                        children: " Export "
                      })]
                    })]
                  }), (0, nB.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, nB.jsxs)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: [(0, nB.jsx)("span", {
                        children: " Camera Mode "
                      }), (0, nB.jsx)(YB.d, {
                        noaAction: "replayChangeCameraMode",
                        padHidesKey: !0
                      })]
                    }), (0, nB.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody CameraModes",
                      children: [(0, nB.jsx)(mB.e, {
                        tooltipInner: (0, nB.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Replicate how the camera was set when recorded."
                        }),
                        children: (0, nB.jsxs)(fZ.V, {
                          className: "ReplayViewerModeButton",
                          active: "recording" === uB,
                          onClick: () => {
                            yI("recording")
                          },
                          disabled: !aB,
                          children: ["Recorded ", (0, nB.jsx)(XB.d, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, nB.jsx)(mB.e, {
                        tooltipInner: (0, nB.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Move the camera freely around."
                        }),
                        children: (0, nB.jsxs)(fZ.V, {
                          className: "ReplayViewerModeButton",
                          active: "freecam" === uB,
                          onClick: () => {
                            yI("freecam")
                          },
                          disabled: !aB,
                          children: ["Free ", (0, nB.jsx)(XB.d, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, nB.jsx)(mB.e, {
                        tooltipInner: (0, nB.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Display the replay in real time using keyframes."
                        }),
                        children: (0, nB.jsxs)(fZ.V, {
                          className: "ReplayViewerModeButton",
                          active: "keyframe" === uB,
                          onClick: () => {
                            yI("keyframe")
                          },
                          disabled: !aB,
                          children: ["Preview ", (0, nB.jsx)(XB.d, {
                            name: "circle-info"
                          })]
                        })
                      })]
                    })]
                  })]
                }), (0, nB.jsxs)("div", {
                  className: "ReplayViewerControlsGroup TimeGroup",
                  children: [(0, nB.jsxs)("div", {
                    className: "ReplayViewerTimecodeContainer",
                    children: [(0, nB.jsxs)("span", {
                      className: "ReplayViewerTimecode",
                      children: [(0, nB.jsx)("span", {
                        className: "ReplayViewerTimecodeNow",
                        children: ao(LB, rB)
                      }), (0, nB.jsx)("span", {
                        className: "ReplayViewerTimecodeDivider",
                        children: "/"
                      }), (0, nB.jsx)("span", {
                        className: "ReplayViewerTimecodeTotal",
                        children: ao(jB, rB)
                      })]
                    }), (0, nB.jsxs)("span", {
                      className: "ReplayViewerTickLabel",
                      children: ["Tick ", LB, " / ", jB]
                    })]
                  }), (0, nB.jsxs)("div", {
                    className: "ReplayViewerTimecodeControls",
                    children: [(0, nB.jsxs)(fZ.g, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        NI("replaySkipBack")
                      },
                      disabled: !aB,
                      children: [(0, nB.jsxs)("span", {
                        children: [" ", (0, nB.jsx)(XB.d, {
                          name: "clock-rotate-left"
                        }), " 1s"]
                      }), (0, nB.jsx)(YB.d, {
                        noaAction: "replaySkipBack",
                        padHidesKey: !0
                      })]
                    }), (0, nB.jsxs)(fZ.p, {
                      className: "ReplayViewerMediaButton PlayButton",
                      onClick: () => {
                        FB.gameBridge.send("setReplayPlaying", !PB)
                      },
                      disabled: !aB,
                      children: [(0, nB.jsxs)("span", {
                        children: [" ", PB ? (0, nB.jsx)(XB.d, {
                          name: "pause"
                        }) : (0, nB.jsx)(XB.d, {
                          name: "play"
                        }), " "]
                      }), (0, nB.jsx)(YB.d, {
                        noaAction: "replayPlayPause",
                        padHidesKey: !0
                      })]
                    }), (0, nB.jsxs)(fZ.g, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        NI("replaySkipForward")
                      },
                      disabled: !aB,
                      children: [(0, nB.jsxs)("span", {
                        children: [" ", (0, nB.jsx)(XB.d, {
                          name: "rotate-forward"
                        }), " 1s"]
                      }), (0, nB.jsx)(YB.d, {
                        noaAction: "replaySkipForward",
                        padHidesKey: !0
                      })]
                    })]
                  })]
                }), (0, nB.jsxs)("div", {
                  className: "ReplayViewerControlsRightSide",
                  children: [(0, nB.jsxs)("div", {
                    className: "ReplayViewerControlsGroup RecordKeyframeGroup",
                    children: [(0, nB.jsxs)(fZ.p, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        NI("replayRecordKeyframe")
                      },
                      disabled: !aB,
                      children: [(0, nB.jsx)(YB.d, {
                        noaAction: "replayRecordKeyframe",
                        padHidesKey: !0
                      }), (0, nB.jsx)("span", {
                        children: " Record keyframe "
                      })]
                    }), (0, nB.jsx)(vG, {
                      disabled: !aB
                    }), lB && (0, nB.jsx)(fZ.V, {
                      className: "ReplayViewerActionButton",
                      onClick: vI,
                      disabled: !aB,
                      children: (0, nB.jsx)("span", {
                        children: " Clear range "
                      })
                    })]
                  }), (0, nB.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, nB.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Speed"
                    }), (0, nB.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, nB.jsx)(fZ.g, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          NI("replaySpeedDown")
                        },
                        disabled: !aB || (0, qo.g)(RB),
                        children: (0, nB.jsx)("span", {
                          children: " \u2212 "
                        })
                      }), (0, nB.jsxs)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: [RB, "\xd7"]
                      }), (0, nB.jsx)(fZ.g, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          NI("replaySpeedUp")
                        },
                        disabled: !aB || (0, qo.c)(RB),
                        children: (0, nB.jsx)("span", {
                          children: " + "
                        })
                      })]
                    })]
                  }), (0, nB.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, nB.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Timeline Zoom"
                    }), (0, nB.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, nB.jsxs)(fZ.g, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          qI("replayTimelineZoomOut")
                        },
                        disabled: !aB || yB <= Oo[0],
                        children: [(0, nB.jsx)("span", {
                          children: " \u2212 "
                        }), (0, nB.jsx)(YB.d, {
                          noaAction: "replayTimelineZoomOut",
                          padHidesKey: !0
                        })]
                      }), (0, nB.jsx)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: Ho(yB)
                      }), (0, nB.jsxs)(fZ.g, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          qI("replayTimelineZoomIn")
                        },
                        disabled: !aB || yB >= Oo[Oo.length - 1],
                        children: [(0, nB.jsx)("span", {
                          children: " + "
                        }), (0, nB.jsx)(YB.d, {
                          noaAction: "replayTimelineZoomIn",
                          padHidesKey: !0
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0, nB.jsx)("div", {
                className: "ReplayViewerEmptyState",
                children: !aB && "Load a recording to begin playback"
              })]
            })]
          })]
        })
      }));
    var UG = ZB(1382);

    function WG() {
      const [, BB] = (0, JB.useState)(0);
      return (0, kB.d)("replayViewer|uiVisibilityChanged", (() => {
          BB((BB => BB + 1))
        })), (0, kB.d)("replayViewer|replayLoaded", (() => {
          BB((BB => BB + 1))
        })),
        function() {
          if (!(0, UG.e)()) return {};
          const BB = {
              [JG.b]: "true"
            },
            IB = (0, oG.b)();
          for (const {
              group: ZB,
              dataAttr: TB
            }
            of JG.d) TB && !IB[ZB] && (BB[TB] = "true");
          return BB
        }()
    }
    var dG = ZB(34177),
      CG = ZB(2147),
      QG = ZB(8868),
      sG = ZB(8857),
      wG = ZB(2161);
    const OG = (0, JB.memo)((function() {
      var BB, IB, ZB;
      const TB = (0, dB.d)("customButtons");
      (0, JB.useEffect)((() => TB ? (FB.gameBridge.send("bindCustomButtonKeys", TB.filter(QG.c).map((BB => {
        let {
          id: IB,
          keycode: ZB
        } = BB;
        return {
          id: IB,
          keycode: ZB
        }
      }))), () => {
        FB.gameBridge.send("bindCustomButtonKeys", [])
      }) : () => {}), [TB]);
      const oB = null !== (BB = null === TB || void 0 === TB ? void 0 : TB.filter(QG.c)) && void 0 !== BB ? BB : [],
        GB = (0, sG.l)(),
        vB = null !== (IB = null === (ZB = (0, wG.c)()) || void 0 === ZB ? void 0 : ZB.hideButtonHints) && void 0 !== IB && IB,
        kB = "customButton" !== (null === GB || void 0 === GB ? void 0 : GB.kind) || vB ? null : GB.id,
        cB = oB.length > 0,
        hB = (0, JB.useRef)(null);
      return (0, JB.useLayoutEffect)((() => {
        if (!cB) return () => {};
        const BB = hB.current,
          IB = BB.closest(".InGameUi"),
          ZB = () => {
            IB.style.setProperty("--custom-buttons-top", `${BB.offsetTop}px`)
          };
        ZB();
        const TB = new ResizeObserver(ZB);
        return TB.observe(BB), TB.observe(BB.parentElement), () => {
          TB.disconnect(), IB.style.removeProperty("--custom-buttons-top")
        }
      }), [cB]), (0, nB.jsx)("div", {
        ref: hB,
        className: "" + ((0, oZ.isMobile)() ? "CustomIconsMobile" : "CustomIcons"),
        children: oB.map((BB => {
          var IB, ZB;
          return (0, nB.jsx)(YG, {
            button: BB,
            padGlyph: BB.id === kB && null !== (IB = null === (ZB = (0, fB.d)()) || void 0 === ZB ? void 0 : ZB.getBoundButton("actionButton")) && void 0 !== IB ? IB : null
          }, BB.id)
        }))
      })
    }));

    function YG(BB) {
      let {
        button: IB,
        padGlyph: ZB
      } = BB;
      const TB = (0, JB.useRef)(null),
        oB = () => {
          null !== TB.current && (TB.current = null, FB.gameBridge.send("pressCustomButton", {
            id: IB.id,
            down: !1
          }))
        };
      (0, JB.useEffect)((() => oB), []);
      const GB = DI(oB, {
          pressesOnPointerDown: !0
        }),
        vB = BB => {
          TB.current === BB.pointerId && oB()
        };
      return (0, nB.jsxs)("div", {
        className: "CustomIcon",
        ...GB,
        onLostPointerCapture: vB,
        children: [(0, nB.jsx)(CG.b, {
          icon: IB.icon,
          keyboardHint: (0, QG.b)(IB.keycode),
          padGlyph: ZB,
          onPointerDown: BB => {
            try {
              BB.currentTarget.setPointerCapture(BB.pointerId)
            } catch {
              return
            }
            null === TB.current && FB.gameBridge.send("pressCustomButton", {
              id: IB.id,
              down: !0
            }), TB.current = BB.pointerId
          },
          onPointerUp: vB,
          onPointerCancel: vB,
          showTouchTutorialPubSubId: !1,
          showRedDotPubSubId: !1
        }), IB.description && (0, nB.jsx)("div", {
          className: "CustomIconDescription SmallTextBold",
          children: IB.description
        })]
      })
    }
    var iG = ZB(2504),
      pG = ZB(256);
    const aG = {
      frame: BB => {
        const IB = requestAnimationFrame((() => {
          BB()
        }));
        return () => {
          cancelAnimationFrame(IB)
        }
      },
      afterFrame: BB => {
        const IB = setTimeout(BB, 0);
        return () => {
          clearTimeout(IB)
        }
      }
    };
    class HG {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pG.c,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aG,
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
        this.idle = BB, this.frames = IB, this.onHiddenMount = ZB, this.waiting = [], this.cancelIdle = null, this.cancelFrame = null, this.cancelAfterFrame = null, this.starvedFrames = 0, this.shown = !1
      }
      request(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.shown ? (BB(), () => {}) : (IB ? this.waiting.unshift(BB) : this.waiting.push(BB), this.schedule(), () => {
          const IB = this.waiting.indexOf(BB);
          IB >= 0 && (this.waiting.splice(IB, 1), this.settle())
        })
      }
      show() {
        for (this.shown = !0; this.waiting.length > 0;) this.mountNext()
      }
      schedule() {
        0 !== this.waiting.length && (this.cancelIdle ??= this.idle((BB => {
          for (this.cancelIdle = null; this.waiting.length > 0 && BB.timeRemaining() >= 8;) this.mountNext();
          this.schedule()
        })), this.cancelFrame ??= this.frames.frame((() => {
          this.cancelFrame = null, this.starvedFrames++, this.starvedFrames >= 4 && (this.cancelAfterFrame ??= this.frames.afterFrame((() => {
            this.cancelAfterFrame = null, this.mountNext(), this.schedule()
          }))), this.schedule()
        })))
      }
      mountNext() {
        this.starvedFrames = 0;
        const BB = this.waiting.shift(),
          IB = !this.shown,
          ZB = performance.now();
        try {
          BB()
        } finally {
          IB && this.onHiddenMount(performance.now() - ZB), this.settle()
        }
      }
      settle() {
        0 === this.waiting.length && this.stop()
      }
      stop() {
        var BB, IB, ZB;
        null === (BB = this.cancelIdle) || void 0 === BB || BB.call(this), this.cancelIdle = null, null === (IB = this.cancelFrame) || void 0 === IB || IB.call(this), this.cancelFrame = null, null === (ZB = this.cancelAfterFrame) || void 0 === ZB || ZB.call(this), this.cancelAfterFrame = null
      }
    }
    const MG = (0, JB.createContext)(null);

    function jG(BB) {
      let {
        children: IB,
        first: ZB = !1
      } = BB;
      const TB = (0, JB.useContext)(MG),
        [oB, GB] = (0, JB.useState)(null === TB);
      return (0, JB.useEffect)((() => {
        if (!oB && null !== TB) return TB.request((() => {
          GB(!0)
        }), ZB)
      }), [ZB, oB, TB]), oB ? (0, JB.createElement)(JB.Fragment, null, IB) : null
    }
    const PG = (0, JB.memo)((function(BB) {
        let {
          shown: IB
        } = BB;
        const [ZB] = (0, JB.useState)((() => new gB.d(IB))), [oB] = (0, JB.useState)((() => IB ? null : new HG(void 0, void 0, (BB => {
          TB.d.noteWorkDuringAdmissionWait(BB)
        }))));
        return (0, JB.useLayoutEffect)((() => {
          IB && (null === oB || void 0 === oB || oB.show(), ZB.show())
        }), [IB, ZB, oB]), (0, nB.jsx)(gB.c.Provider, {
          value: ZB,
          children: (0, nB.jsx)(MG.Provider, {
            value: oB,
            children: (0, nB.jsx)(RG, {})
          })
        })
      })),
      RG = (0, JB.memo)((function() {
        const {
          isUiHidden: BB,
          isUiHiddenByCamera: IB,
          worldPanelHud: ZB,
          isTouchScreen: TB
        } = (0, OB.o)(["isUiHidden", "isUiHiddenByCamera", "worldPanelHud", "isTouchScreen"]), oB = (0, nJ.d)(), vB = WG(), kB = (0, gB.i)(), cB = (0, JB.useRef)(null), hB = (0, dB.d)("showKillfeed");
        return function() {
            const BB = (0, gB.i)();
            (0, JB.useEffect)((() => BB.whenShown(qB)), [BB])
          }(),
          function() {
            const BB = (0, dB.d)("inventoryColourOverride");
            (0, JB.useEffect)((() => {
              if (!BB) return;
              const {
                panel: IB,
                slot: ZB,
                slotSelected: TB,
                slotUnavailable: JB
              } = AB(BB), oB = document.documentElement.style;
              return oB.setProperty("--InventoryPanelColour", IB), oB.setProperty("--InventorySlotColour", ZB), oB.setProperty("--InventorySlotSelectedColour", TB), oB.setProperty("--InventorySlotUnavailableColour", JB), () => {
                oB.removeProperty("--InventoryPanelColour"), oB.removeProperty("--InventorySlotColour"), oB.removeProperty("--InventorySlotSelectedColour"), oB.removeProperty("--InventorySlotUnavailableColour")
              }
            }), [BB])
          }(), (0, JB.useLayoutEffect)((() => kB.whenShown((() => {
            var BB;
            null === (BB = cB.current) || void 0 === BB || BB.classList.remove("PreMounted")
          }))), [kB]), (0, nB.jsxs)(nB.Fragment, {
            children: [(0, nB.jsxs)("div", {
              ref: cB,
              className: GB()("InGameUi", {
                PreMounted: !kB.shown,
                Hidden: BB,
                HiddenByCamera: IB,
                HiddenByWorldPanel: null !== ZB,
                WorldPanelTouchControl: "touchControls" === ZB
              }),
              ...vB,
              children: [(0, nB.jsxs)(jG, {
                children: [(0, nB.jsx)(GT.d, {}), (0, nB.jsx)(hT, {})]
              }), (0, nB.jsx)(gB.e, {
                children: (0, nB.jsx)(zT, {})
              }), (0, nB.jsxs)(jG, {
                children: [(0, nB.jsx)(rJ, {}), (0, nB.jsx)(lJ, {}), TB && (0, nB.jsx)(tJ, {})]
              }), (0, nB.jsxs)(jG, {
                children: [(0, nB.jsx)(jZ, {}), (0, nB.jsx)(OT.c, {}), (0, nB.jsx)(jT, {})]
              }), (0, nB.jsx)(gB.e, {
                children: (0, nB.jsx)(oT, {})
              }), (0, nB.jsxs)(jG, {
                children: [(0, nB.jsx)(eJ.c, {}), (0, nB.jsx)(qG, {})]
              }), (0, nB.jsxs)(jG, {
                children: [(0, nB.jsx)(Jo.h, {}), (0, nB.jsx)(oo.d, {})]
              }), (0, nB.jsx)(jG, {
                children: (0, nB.jsx)(RZ.n, {})
              }), (0, nB.jsx)(jG, {
                children: (0, nB.jsx)(fG, {
                  showChat: oB
                })
              }), (0, nB.jsxs)(jG, {
                children: [(0, nB.jsx)(vo, {}), (0, nB.jsx)(LJ, {})]
              }), (0, nB.jsxs)("div", {
                className: GB()("RightElements", {
                  RightElementsTouchscreen: TB
                }),
                "data-camera-keeper-host": "",
                children: [(0, nB.jsxs)("div", {
                  className: eT.i,
                  "data-holds-camera-keeper": "",
                  children: [(0, nB.jsxs)("div", {
                    className: "TopRightElementsLeft",
                    "data-holds-camera-keeper": "",
                    children: [(0, nB.jsx)(jG, {
                      children: (0, nB.jsx)(wJ.d, {})
                    }), (0, nB.jsxs)(jG, {
                      children: [(0, nB.jsx)(LB, {}), (0, nB.jsx)(tT.b, {})]
                    }), oZ.featureFlags.useSocialFeatures && (0, nB.jsx)(gB.e, {
                      children: (0, nB.jsx)(bT.e, {
                        placement: "inGame"
                      })
                    }), oZ.featureFlags.useSocialFeatures && (0, nB.jsx)(gB.e, {
                      children: (0, nB.jsx)(oJ, {})
                    }), hB && (0, nB.jsx)(gB.e, {
                      children: (0, nB.jsx)(wT, {})
                    }), (0, nB.jsx)(jG, {
                      children: (0, nB.jsx)(dG.e, {})
                    })]
                  }), oZ.featureFlags.useSocialFeatures && (0, nB.jsx)("div", {
                    className: "TopRightElementsRight",
                    children: (0, nB.jsx)(jG, {
                      children: (0, nB.jsx)(PJ.d, {})
                    })
                  })]
                }), (0, nB.jsxs)(jG, {
                  children: [(0, nB.jsx)(RZ.e, {
                    placement: "topRight"
                  }), (0, nB.jsx)(lG, {})]
                })]
              }), (0, nB.jsx)("div", {
                className: "LeftCentre",
                children: (0, nB.jsx)(jG, {
                  children: (0, nB.jsx)(OG, {})
                })
              }), (0, nB.jsxs)("div", {
                className: "BottomCentre",
                "data-holds-camera-keeper": TB ? "" : void 0,
                children: [(0, nB.jsx)(gB.e, {
                  children: (0, nB.jsx)(MB, {})
                }), (0, nB.jsx)(jG, {
                  children: (0, nB.jsx)(mG, {})
                }), (0, nB.jsxs)("div", {
                  className: "BottomElements",
                  "data-holds-camera-keeper": TB ? "" : void 0,
                  children: [(0, nB.jsx)("div", {
                    className: GB()("BottomLeftElements", {
                      Touch: TB
                    }),
                    children: (0, nB.jsxs)(jG, {
                      children: [(0, nB.jsx)(kJ, {}), !TB && (0, nB.jsx)(iG.c, {})]
                    })
                  }), (0, nB.jsx)(jG, {
                    children: (0, nB.jsx)(uG, {})
                  }), (0, nB.jsx)(jG, {
                    children: (0, nB.jsx)(RT, {
                      isTouchScreen: TB
                    })
                  })]
                })]
              }), (0, nB.jsx)("div", {
                className: "MiddleLeft"
              }), TB && (0, nB.jsx)(jG, {
                children: (0, nB.jsx)(NZ, {})
              }), (0, nB.jsx)("div", {
                className: "CameraFadeHost",
                ref: sI.g
              })]
            }), (0, nB.jsx)(gB.e, {
              children: (0, nB.jsx)(No.d, {})
            }), (0, nB.jsx)(gB.e, {
              children: (0, nB.jsx)(Zo, {})
            }), (0, nB.jsx)(jG, {
              first: !0,
              children: (0, nB.jsx)(cJ.d, {})
            }), (0, nB.jsx)(gB.e, {
              children: (0, nB.jsx)(rG, {})
            })]
          })
      }));

    function rG() {
      return (0, JB.useEffect)((() => {
        const BB = setTimeout((() => {
          (0, CB.j)()
        }), 0);
        return () => {
          clearTimeout(BB), CB.l.Wy(!1)
        }
      }), []), null
    }
    const mG = (0, JB.memo)((function() {
        const BB = (0, kB.h)("aimingOverlay", "none");
        (0, UB.b)();
        const IB = (0, dB.g)("middleTextUpper"),
          ZB = (0, dB.g)("middleTextLower");
        return (0, nB.jsxs)("div", {
          className: "MiddleTextBottom",
          style: "sniper" === BB ? {
            visibility: "hidden"
          } : {},
          children: [(0, nB.jsx)(eG, {
            text: IB,
            className: "MiddleText MiddleTextUpper SmallTextBold",
            maxHeightFraction: XG
          }), (0, nB.jsx)(eG, {
            text: ZB,
            className: "MiddleText",
            maxHeightFraction: LG
          })]
        })
      })),
      XG = .3,
      LG = .2;

    function eG(BB) {
      let {
        text: IB,
        className: ZB,
        maxHeightFraction: TB
      } = BB;
      const oB = (0, JB.useRef)(null),
        GB = (0, JB.useRef)(null);
      return function(BB, IB, ZB, TB) {
        (0, JB.useLayoutEffect)((() => {
          const TB = BB.current,
            JB = IB.current;
          if (!TB || !JB) return;
          let oB = -1,
            GB = -1;
          const vB = BB => (JB.style.setProperty("zoom", String(BB)), TB.getBoundingClientRect().height),
            kB = () => {
              const BB = document.documentElement.clientHeight * ZB;
              let IB = 1;
              if (vB(1) > BB) {
                let ZB = .5,
                  TB = 1;
                for (let IB = 0; IB < 6; IB++) {
                  const IB = (ZB + TB) / 2;
                  vB(IB) <= BB ? ZB = IB : TB = IB
                }
                IB = ZB
              }
              GB = vB(IB), oB = TB.getBoundingClientRect().width
            };
          kB();
          let cB = 0;
          const nB = () => {
              cancelAnimationFrame(cB), cB = requestAnimationFrame(kB)
            },
            hB = new ResizeObserver((() => {
              const {
                width: BB,
                height: IB
              } = TB.getBoundingClientRect();
              BB === oB && IB === GB || nB()
            }));
          return hB.observe(TB), window.addEventListener("resize", nB), () => {
            hB.disconnect(), window.removeEventListener("resize", nB), cancelAnimationFrame(cB), JB.style.removeProperty("zoom")
          }
        }), [BB, IB, ZB, TB])
      }(oB, GB, TB, IB.content), (0, nB.jsx)("div", {
        ref: oB,
        className: "MiddleTextFit",
        children: (0, nB.jsx)(Go, {
          ref: GB,
          text: IB,
          className: ZB
        })
      })
    }
    const uG = (0, JB.memo)((function() {
        const BB = (0, kB.h)("aimingOverlay", "none");
        (0, UB.b)();
        const IB = (0, dB.d)("useInventory");
        return (0, nB.jsxs)("div", {
          className: "BottomMiddleElements",
          style: "sniper" === BB ? {
            visibility: "hidden"
          } : {},
          children: [(0, nB.jsx)(hB, {}), (0, nB.jsx)(RZ.e, {}), (0, nB.jsx)(rZ, {}), (0, nB.jsx)(gB.e, {
            children: (0, nB.jsx)(MJ, {})
          }), (0, nB.jsxs)("div", {
            className: "HotBarRow",
            children: [IB ? (0, nB.jsx)(uB.b, {}) : (0, nB.jsx)(uB.c, {}), (0, nB.jsx)(lB, {})]
          })]
        })
      })),
      fG = (0, JB.memo)((function(BB) {
        let {
          showChat: IB
        } = BB;
        const {
          t: ZB
        } = (0, HB.G)(), {
          clientEscMenuOptions: TB,
          isTouchScreen: oB
        } = (0, OB.o)(["clientEscMenuOptions", "isTouchScreen"]);
        (0, UB.b)();
        const {
          userContext: vB,
          isUserContextUpdating: kB
        } = (0, yB.d)(), cB = (0, dB.d)("hideCoordinates"), hB = (0, dB.d)("customVariationTitle"), {
          requestedGameNameWithVariation: FB,
          gameNameWithVariation: NB,
          lobbyName: gB,
          shownLobbyName: qB
        } = (0, wB.j)("connectedGame"), CB = (0, zB.e)(FB, gB, !1), [QB, sB] = (0, JB.useState)(null), YB = (0, YJ.k)(NB || FB || ""), iB = hB || YB || "";
        (0, JB.useEffect)((() => {
          kB || ET.c.getFavouriteLobbies(vB).then((BB => {
            console.log("Got favourite lobbies", BB), sB(BB)
          }))
        }), [kB, vB]);
        const pB = (0, JB.useRef)(null);
        return (0, JB.useLayoutEffect)((() => {
          const BB = pB.current,
            IB = document.documentElement,
            ZB = new ResizeObserver((() => {
              IB.style.setProperty("--InGameHeaderRowsHeight", `${BB.offsetHeight}px`)
            }));
          return ZB.observe(BB), () => {
            ZB.disconnect(), IB.style.removeProperty("--InGameHeaderRowsHeight")
          }
        }), []), AT(pB), (0, nB.jsxs)(nB.Fragment, {
          children: [(0, nB.jsxs)("div", {
            className: GB()(eT.f, {
              Touchscreen: oB
            }),
            ref: pB,
            children: [(0, nB.jsxs)("div", {
              className: "InGameHeader",
              children: [(0, nB.jsxs)("div", {
                className: "InGameHeaderLogo",
                onMouseDown: BB => {
                  BB.stopPropagation(), BB.preventDefault()
                },
                onClick: () => {
                  OB.d.set({
                    openEverythingMenuName: WB.q.SETTINGS
                  })
                },
                children: [(0, nB.jsx)(OJ.d, {
                  showFace: !0,
                  loading: !1
                }), "bloxd.io"]
              }), (0, nB.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, nB.jsxs)("div", {
                className: "InGameHeaderGameName",
                children: [null === CB && (0, nB.jsx)(OJ.d, {}), null !== CB && (0, nB.jsxs)(nB.Fragment, {
                  children: [CB, iB && ` ${iB}`]
                })]
              }), (0, nB.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, nB.jsx)("div", {
                className: "InGameHeaderLobbyName",
                children: qB
              }), (0, iJ.C)(gB) && (0, nB.jsx)(mB.e, {
                tooltipInner: (0, nB.jsx)("div", {
                  children: ZB(null !== QB && QB.includes(gB) ? "customLobby:removeFromFavourites" : "customLobby:addToFavourites")
                }),
                children: (0, nB.jsx)("div", {
                  children: (0, nB.jsx)(fZ.w, {
                    isLiked: null !== QB && QB.includes(gB),
                    onClick: () => {
                      try {
                        if (!QB) return;
                        QB.includes(gB) ? (ET.c.unfavouriteLobby(vB, gB).catch((BB => {
                          console.error("Failed to favourite lobby", BB)
                        })), sB(QB.filter((BB => BB !== gB)))) : (ET.c.favouriteLobby(vB, gB).catch((BB => {
                          console.error("Failed to favourite lobby", BB)
                        })), sB([...QB, gB]))
                      } catch (BB) {
                        console.error("Failed to like lobby", BB)
                      }
                    },
                    isLoading: null === QB
                  })
                })
              }), (0, nB.jsx)(ho, {})]
            }), (0, nB.jsx)(WJ, {
              show: TB.showFPS
            }), !cB && TB.showCoordinates && (0, nB.jsx)(QJ, {}), !cB && TB.showChunkCoordinates && (0, nB.jsx)(sJ, {}), (0, nB.jsx)(ko, {})]
          }), (0, nB.jsx)("div", {
            className: "TopLeftElements",
            "data-holds-camera-keeper": "",
            children: (0, nB.jsx)("div", {
              className: "InGameHeaderAndChat",
              "data-holds-camera-keeper": "",
              children: IB && (0, nB.jsx)(xB.e, {})
            })
          })]
        })
      })),
      lG = (0, JB.memo)((function() {
        (0, UB.b)();
        const BB = (0, dB.g)("RightInfoText"),
          [IB, ZB] = (0, JB.useState)(null);
        return (0, UI.j)(IB, ".RightElements"), BB.hasText ? (0, nB.jsx)("div", {
          className: "RightInfoDivContainer",
          children: (0, nB.jsx)(Go, {
            ref: ZB,
            text: BB,
            className: "RightInfoDiv",
            children: (0, nB.jsx)("div", {
              className: "RightInfoDivInner",
              children: (0, nB.jsx)(cB.e, {
                text: BB.content
              })
            })
          })
        }) : null
      }))
  },
  5007: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => vB
    });
    var TB = ZB(63),
      JB = ZB(342),
      oB = ZB(1979),
      GB = ZB(1153);

    function vB(BB) {
      let {
        text: IB
      } = BB;
      const ZB = [];
      let vB = "";
      return (0, JB.rc)(IB).forEach(((BB, IB) => {
        if ("string" === typeof BB || !(0, oB.g)(BB.icon)) return void(vB += "string" === typeof BB ? BB : BB.icon);
        const JB = Math.max(0, vB.trimEnd().search(/\S{1,12}$/));
        ZB.push((0, GB.jsxs)(TB.Fragment, {
          children: [vB.slice(0, JB), (0, GB.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [vB.slice(JB), (0, GB.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": BB.icon,
              children: (0, GB.jsx)(oB.e, {
                itemName: BB.icon,
                amount: 0
              })
            })]
          })]
        }, IB)), vB = ""
      })), ZB.push(vB), (0, GB.jsx)(GB.Fragment, {
        children: ZB
      })
    }
  },
  36555: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => zB,
      f: () => nB,
      g: () => hB
    });
    var TB = ZB(63),
      JB = ZB(1091),
      oB = ZB.n(JB),
      GB = ZB(1979),
      vB = ZB(1153);
    const kB = 350;
    let cB = 0;

    function nB() {
      return cB += 1, cB
    }

    function hB(BB, IB) {
      let ZB = 0;
      for (const TB of BB) "ingredient" !== TB.kind && TB.Dv === IB && (ZB += TB.amount);
      return ZB > 0 ? {
        idx: IB,
        amount: ZB
      } : null
    }

    function zB(BB) {
      var IB, ZB;
      let {
        anim: JB,
        onComplete: cB
      } = BB;
      const nB = null !== (IB = JB.delayMs) && void 0 !== IB ? IB : 0,
        hB = null !== (ZB = JB.durationMs) && void 0 !== ZB ? ZB : kB,
        [zB, FB] = (0, TB.useState)(JB.from),
        [NB, gB] = (0, TB.useState)(0 === nB),
        [qB, yB] = (0, TB.useState)(!1),
        UB = (0, TB.useRef)(!1);
      return (0, TB.useEffect)((() => {
        let BB, IB;
        const ZB = () => {
            UB.current = !0, gB(!0), BB = requestAnimationFrame((() => {
              IB = requestAnimationFrame((() => {
                FB({
                  x: JB.to.x,
                  y: JB.to.y
                }), yB(!0)
              }))
            }))
          },
          TB = UB.current ? 0 : nB;
        let oB;
        TB > 0 ? oB = setTimeout(ZB, TB) : ZB();
        const GB = setTimeout((() => {
          cB(JB.id)
        }), TB + hB + 50);
        return () => {
          clearTimeout(oB), cancelAnimationFrame(BB), cancelAnimationFrame(IB), clearTimeout(GB)
        }
      }), [JB.id, JB.to.x, JB.to.y, cB, nB, hB]), (0, vB.jsx)("div", {
        className: oB()("CraftItemFlyAnimation", {
          Ingredient: "ingredient" === JB.kind,
          Waiting: !NB,
          Arrived: qB
        }),
        style: {
          left: zB.x,
          top: zB.y,
          "--fly-duration": `${hB}ms`
        },
        children: (0, vB.jsx)(GB.e, {
          itemName: JB.itemName,
          amount: JB.amount
        })
      })
    }
  },
  36542: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => rB,
      c: () => LB
    });
    var TB = ZB(63),
      JB = ZB(3171),
      oB = ZB(6741),
      GB = ZB(2147),
      vB = ZB(2526),
      kB = ZB(8940),
      cB = ZB(360),
      nB = ZB(24),
      hB = ZB(1507),
      zB = ZB(36),
      FB = ZB(1091),
      NB = ZB.n(FB),
      gB = ZB(342),
      qB = ZB(36550),
      yB = ZB(1960),
      UB = ZB(2054),
      WB = ZB(8809),
      dB = ZB(1153);

    function CB(BB) {
      var IB, ZB;
      let {
        slotIdx: oB
      } = BB;
      const GB = (0, UB.g)("hotbar", (BB => {
          var IB;
          return null !== (IB = BB.items[oB]) && void 0 !== IB ? IB : null
        })),
        kB = (0, UB.g)("hotbar", (BB => BB.ammo)),
        [nB, hB] = (0, TB.useState)(!1),
        zB = (0, TB.useRef)(null),
        [FB, gB] = (0, TB.useState)(null),
        [qB, CB] = (0, TB.useState)(null),
        QB = (0, vB.d)("maxAuraLevel"),
        sB = (0, JB.d)(),
        wB = (0, TB.useCallback)((() => {
          if (clearTimeout(zB.current), GB) {
            var BB, IB, ZB, TB;
            const kB = GB.displayName,
              nB = [],
              hB = Array.isArray(kB) ? kB : [kB],
              zB = {
                fontStyle: null !== (BB = GB.attributes.customAttributes) && void 0 !== BB && BB.author ? "italic" : "normal"
              };
            for (const BB of hB) BB.str ? nB.push(BB) : nB.push({
              str: BB,
              style: zB
            });
            if (null !== (IB = GB.attributes.customAttributes) && void 0 !== IB && IB.enchantments) {
              nB.push(" ");
              const BB = Object.entries(GB.attributes.customAttributes.enchantments).sort(((BB, IB) => IB[1] - BB[1])),
                IB = GB.attributes.customAttributes.enchantmentData;
              for (const [ZB, TB] of BB) {
                var JB, oB;
                const BB = null !== (JB = null === IB || void 0 === IB || null === (oB = IB[ZB]) || void 0 === oB ? void 0 : oB.icon) && void 0 !== JB ? JB : `${ZB} Enchantment`;
                var vB;
                if (TB < 4)
                  for (let IB = 0; IB < TB; IB++) nB.push({
                    icon: BB,
                    style: {
                      fontSize: "1.5em"
                    }
                  });
                else nB.push({
                  icon: BB,
                  style: {
                    fontSize: "1.5em"
                  }
                }), nB.push(null !== (vB = (0, cB.Y)(TB)) && void 0 !== vB ? vB : TB.toString())
              }
            }
            gB(nB), CB(null !== (ZB = null === (TB = GB.attributes.customAttributes) || void 0 === TB ? void 0 : TB.enchantmentTier) && void 0 !== ZB ? ZB : null)
          } else gB(null), CB(null);
          hB(!0), sB();
          const kB = null === GB || void 0 === GB ? void 0 : GB.attributes.customAttributes;
          void 0 === (null === kB || void 0 === kB ? void 0 : kB.shotsLeft) && (zB.current = setTimeout((() => {
            hB(!1)
          }), 2e3))
        }), [null === GB || void 0 === GB ? void 0 : GB.name, oB, null === GB || void 0 === GB ? void 0 : GB.instance, null === GB || void 0 === GB ? void 0 : GB.displayName]);
      (0, TB.useEffect)((() => (wB(), () => {
        clearTimeout(zB.current), hB(!1)
      })), [null === GB || void 0 === GB ? void 0 : GB.name, oB, null === GB || void 0 === GB ? void 0 : GB.instance, wB]);
      const OB = null === GB || void 0 === GB || null === (IB = GB.attributes.customAttributes) || void 0 === IB ? void 0 : IB.shotsLeft,
        YB = void 0 === OB ? null : (0, dB.jsx)("div", {
          className: "SelectedItemShotsLeft",
          children: `${OB}|${GB.requiresAmmo?`${kB}x${GB.clipSize}`:GB.clipSize}`
        }),
        iB = (0, WB.o)();
      return (0, dB.jsx)(dB.Fragment, {
        children: nB && GB && !iB.showing ? (0, dB.jsxs)("div", {
          className: NB()("SelectedItemName SmallTextBold", {
            NoAuraBar: 0 === QB,
            Enchanted: null !== qB
          }),
          style: {
            "--enchantmentColour": null !== (ZB = cB.qb[qB]) && void 0 !== ZB ? ZB : cB.qb.None,
            "--duration": qB ? (0, cB.lb)(qB) + "s" : void 0
          },
          children: [qB && (0, dB.jsxs)("div", {
            className: "SelectedItemNameGradient",
            children: [(0, dB.jsx)(yB.e, {
              text: FB
            }), YB]
          }), (0, dB.jsxs)("div", {
            className: "SelectedItemNameNormal",
            children: [(0, dB.jsx)(yB.e, {
              text: FB
            }), YB]
          })]
        }) : null
      })
    }
    var QB = ZB(36555),
      sB = ZB(20),
      wB = ZB(1995),
      OB = ZB(665),
      YB = ZB(2528),
      iB = ZB(3586),
      pB = ZB(3589);
    var aB = ZB(1170),
      HB = ZB(1165),
      MB = ZB(2590);

    function jB() {
      return parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--touch-hotbar-ends-spare")) >= 0
    }
    var PB = ZB(9001),
      RB = ZB(1531);
    const rB = (0, TB.memo)((function() {
      const [BB, IB] = (0, TB.useState)(0), ZB = (0, vB.d)("useFullInventory"), GB = (0, vB.d)("highlightedHotbarSlots"), {
        isTouchScreen: kB,
        openInGameMenuName: cB
      } = (0, sB.o)(["isTouchScreen", "openInGameMenuName"]), zB = null !== cB && "inventory" !== cB, FB = (0, UB.j)("fullInventory") && "inventory" === cB, gB = function() {
        const BB = (0, aB.m)(((BB, IB) => `${BB}:${(0,HB.c)(BB,IB)?"portrait":"landscape"}`)),
          [IB, ZB] = (0, TB.useState)(jB);
        return (0, TB.useLayoutEffect)((() => {
          ZB(jB())
        }), [BB]), (0, hB.d)(MB.e, (() => {
          ZB(jB())
        })), IB
      }(), yB = kB && !gB;
      ! function(BB, IB, ZB) {
        (0, TB.useLayoutEffect)((() => {
          const TB = document.documentElement.classList;
          return BB && (TB.add("TouchHotbar"), TB.toggle("TouchHotbarKeysAbove", IB), TB.toggle("TouchHotbarHasBag", ZB)), (0, iB.f)(), nB.l.Gq(pB.e), () => {
            TB.remove("TouchHotbar", "TouchHotbarKeysAbove", "TouchHotbarHasBag"), (0, iB.f)(), nB.l.Gq(pB.e)
          }
        }), [BB, IB, ZB])
      }(kB, yB, ZB);
      const [WB, YB] = (0, oB.d)("changedHotbarUsingNumkeys", !0), PB = (0, UB.g)("hotbar", (BB => BB.selectedSlot)), RB = null !== PB && void 0 !== PB ? PB : BB, rB = (0, JB.d)(), eB = (0, TB.useRef)(null), uB = (0, hB.h)("pointerLockUpdate", Boolean(document.pointerLockElement));
      (0, hB.d)("inventoryDraggedItemUpdated", (BB => {
        eB.current = BB, rB()
      })), (0, UB.c)("hotbarScrolled", (BB => {
        null === PB && AB(BB)
      })), (0, UB.c)("hotbarSlotRequested", (BB => {
        lB(BB), YB(!1)
      })), (0, UB.c)("numberKeyPressed", (() => {
        YB(!1)
      })), (0, UB.c)("hotbarDropRequested", (BB => {
        const IB = wB.gameBridge.latest("hotbar").items[RB];
        if (IB) {
          var ZB;
          const TB = BB && null !== (ZB = IB.amount) && void 0 !== ZB ? ZB : 1;
          wB.gameBridge.send("removeInventoryItem", {
            slot: RB,
            amount: TB,
            drop: !0
          })
        }
      }));
      const lB = BB => {
          wB.gameBridge.send("selectHotbarSlot", BB), IB(BB)
        },
        AB = BB => {
          lB((RB + BB + OB.m) % OB.m)
        };
      let tB, bB = null,
        xB = null,
        EB = BB => BB => {},
        DB = BB => IB => {
          lB(BB)
        },
        KB = BB => BB => {},
        VB = [];
      if (FB) {
        var SB;
        const BB = eB.current;
        if (null === BB || void 0 === BB || !BB.setHovered) return (0, dB.jsx)("div", {
          className: NB()("HotBarContainer", {
            Touch: kB,
            KeysAbove: yB
          }),
          children: (0, dB.jsx)("div", {
            className: "HotBar"
          })
        });
        bB = BB.draggedInfo, xB = BB.specialItemInfo, EB = BB.setHovered, DB = BB.pointerDown, KB = BB.pointerUp, tB = BB.variation, VB = null !== (SB = BB.craftFlyAnims) && void 0 !== SB ? SB : []
      }
      return (0, dB.jsxs)("div", {
        className: NB()("HotBarContainer", {
          Touch: kB,
          PopupOpen: kB && zB,
          KeysAbove: yB
        }),
        children: [(0, dB.jsxs)("div", {
          className: NB()("HotBar", {
            HoverDisabled: uB
          }),
          children: [kB && (0, dB.jsxs)(dB.Fragment, {
            children: [(0, dB.jsx)(XB, {
              useFullInventory: ZB,
              inventoryOpen: FB
            }), (0, dB.jsx)(mB, {
              direction: "Previous",
              onPress: () => {
                AB(-1)
              }
            })]
          }), !kB && (0, dB.jsxs)(dB.Fragment, {
            children: [(0, dB.jsx)(LB, {}), (0, dB.jsx)("div", {
              className: "HotBarFiller"
            })]
          }), (0, dB.jsx)("div", {
            className: "HotBarGameItemsContainer",
            children: new Array(10).fill(0).map(((BB, IB) => (0, dB.jsx)(qB.c, {
              idx: IB,
              draggedInfo: bB,
              specialItemInfo: xB,
              craftFlyHoldbackInfo: (0, QB.g)(VB, IB),
              setHovered: EB(IB),
              pointerDown: DB(IB),
              pointerUp: KB(IB),
              variation: tB,
              isSelected: IB === RB,
              hotbarHighlighted: !0 === (null === GB || void 0 === GB ? void 0 : GB.includes(IB)),
              hoverDisabled: uB,
              showNumber: WB && !kB
            }, IB)))
          }), kB && (0, dB.jsx)(mB, {
            direction: "Next",
            onPress: () => {
              AB(1)
            }
          }), !kB && (0, dB.jsxs)(dB.Fragment, {
            children: [(0, dB.jsx)("div", {
              className: "HotBarFiller"
            }), (0, dB.jsx)("div", {
              className: NB()("HotBarItem ButtonHotBarItem", {
                HiddenButtonHotBarItem: !ZB
              }),
              onPointerDown: () => {
                nB.l.Gq("toggleMenu", "inventory")
              },
              children: (0, dB.jsx)(fB, {})
            })]
          })]
        }), (0, dB.jsx)(CB, {
          slotIdx: RB
        })]
      })
    }));

    function mB(BB) {
      let {
        direction: IB,
        onPress: ZB
      } = BB;
      return (0, dB.jsx)("div", {
        className: NB()("HotBarArrow", IB),
        ...RB.e,
        children: (0, dB.jsx)(GB.b, {
          icon: "Previous" === IB ? "caret-left" : "caret-right",
          touchPressOn: "pointerdown",
          onClick: ZB
        })
      })
    }
    const XB = (0, TB.memo)((function(BB) {
        let {
          useFullInventory: IB,
          inventoryOpen: ZB
        } = BB;
        const JB = (0, vB.d)("maxAuraLevel"),
          oB = (0, TB.useRef)(null),
          GB = (0, kB.e)();
        return function(BB, IB, ZB) {
          (0, TB.useLayoutEffect)((() => (document.documentElement.classList.toggle("TouchHotbarHasShop", IB), () => {
            document.documentElement.classList.remove("TouchHotbarHasShop")
          })), [IB]), (0, TB.useLayoutEffect)((() => {
            const IB = BB.current.closest(".BottomMiddleElements");
            return IB.classList.toggle("TouchInventoryOpen", ZB), () => {
              IB.classList.remove("TouchInventoryOpen")
            }
          }), [BB, ZB])
        }(oB, GB, ZB), (0, PB.h)(oB, GB, ZB), (0, dB.jsxs)("div", {
          ref: oB,
          className: NB()("TouchInventoryKeys", {
            NoAuraBar: 0 === JB,
            InventoryOpen: ZB
          }),
          children: [(0, dB.jsx)(LB, {
            touchKey: !0
          }), (0, dB.jsx)("div", {
            className: NB()("TouchInventoryKey BagKey", {
              Hidden: !IB
            }),
            ...RB.e,
            children: (0, dB.jsx)(fB, {
              touchKey: !0
            })
          })]
        })
      })),
      LB = (0, TB.memo)((function(BB) {
        let {
          touchKey: IB = !1
        } = BB;
        const ZB = (0, kB.e)();
        return (0, dB.jsx)("div", {
          className: IB ? NB()("TouchInventoryKey ShopKey", {
            Hidden: !ZB
          }) : NB()("HotBarItem ButtonHotBarItem", {
            HiddenButtonHotBarItem: !ZB
          }),
          ...IB ? RB.e : {},
          children: (0, dB.jsx)(GB.b, {
            icon: (0, cB.ec)(),
            noaAction: "OpenShop",
            touchPressOn: "pointerdown",
            onClick: () => {
              ZB && sB.d.set({
                openEverythingMenuName: gB.q.SHOP
              })
            },
            showTouchTutorialPubSubId: "showShopTouchTutorial",
            showRedDotPubSubId: "showShopIconRedDot",
            touchIconPosition: "topleft"
          })
        })
      }));

    function eB(BB) {
      let {
        player: IB
      } = BB;
      return IB.some((BB => null !== BB && cB.Vc.includes(BB.name)))
    }

    function uB(BB) {
      BB.creative || zB.m.getItem("LogInInventoryRedDotTutorialComplete") || (eB(BB) ? (nB.l.Gq("RedDotOpenInventoryIcon", !0), nB.l.Gq("TouchTutorialOpenInventoryIcon", !0)) : (nB.l.Gq("RedDotOpenInventoryIcon", !1), nB.l.Gq("TouchTutorialOpenInventoryIcon", !1)))
    }
    const fB = (0, TB.memo)((function(BB) {
      let {
        touchKey: IB = !1
      } = BB;
      (0, TB.useEffect)((() => {
        uB(wB.gameBridge.latest("inventory"))
      }), []), (0, UB.c)("inventory", uB);
      const ZB = (0, YB.i)();
      return (0, hB.d)("toggleMenu", (BB => {
        ZB.shown && (null !== BB && void 0 !== BB && BB.startsWith("inventory") && eB(wB.gameBridge.latest("inventory")) ? (zB.m.setItem("LogInInventoryRedDotTutorialComplete", !0), nB.l.Gq("RedDotOpenInventoryIcon", !1), nB.l.Gq("TouchTutorialOpenInventoryIcon", !1)) : "shop" === BB && nB.l.Gq("showShopTouchTutorial", !1))
      })), IB ? (0, dB.jsx)(GB.b, {
        icon: "backpack",
        noaAction: "OpenInventory",
        touchPressOn: "pointerdown",
        onClick: () => {
          nB.l.Gq("toggleMenu", "inventory")
        },
        showRedDotPubSubId: "RedDotOpenInventoryIcon",
        showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
        touchIconPosition: "topleft"
      }) : (0, dB.jsx)("div", {
        className: "HotBarButton",
        onPointerDown: () => {
          nB.l.Gq("toggleMenu", "inventory")
        },
        children: (0, dB.jsx)(GB.b, {
          icon: "backpack",
          noaAction: "OpenInventory",
          onPointerDown: BB => {
            nB.l.Gq("toggleMenu", "inventory"), BB.stopPropagation()
          },
          showRedDotPubSubId: "RedDotOpenInventoryIcon",
          showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
          touchIconPosition: "topleft"
        })
      })
    }))
  },
  36550: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => qB,
      e: () => NB
    });
    var TB = ZB(63),
      JB = ZB(1091),
      oB = ZB.n(JB),
      GB = ZB(1986),
      vB = ZB(1979),
      kB = ZB(1995),
      cB = ZB(2054),
      nB = ZB(36553),
      hB = ZB(34203),
      zB = ZB(1454),
      FB = ZB(1153);
    const NB = (BB, IB, ZB) => {
      let TB = IB,
        JB = !1;
      for (const oB of ZB)(null === oB || void 0 === oB ? void 0 : oB.idx) === BB && (JB = !0, TB > 0 && (TB -= oB.amount));
      return {
        displayedAmt: TB,
        shown: !JB || TB > 0
      }
    };
    const gB = BB => {
        let {
          idx: IB
        } = BB;
        return (0, zB.x)() ? null : (0, FB.jsx)("div", {
          className: "HotbarItemNumber SmallTextBold",
          children: IB < 9 ? IB + 1 : 0
        })
      },
      qB = (0, TB.memo)((function(BB) {
        var IB, ZB, TB;
        let {
          idx: JB,
          setHovered: zB,
          pointerDown: qB,
          pointerUp: yB,
          draggedInfo: UB,
          specialItemInfo: WB,
          craftFlyHoldbackInfo: dB,
          defaultIconB64: CB = null,
          variation: QB,
          isSelected: sB = !1,
          hotbarHighlighted: wB = !1,
          hoverDisabled: OB = !1,
          showNumber: YB = !1,
          showNewDot: iB = !1
        } = BB;
        const pB = (0, cB.g)("inventory", (BB => JB === nB.i ? null : (0, hB.o)(BB, JB)));
        let aB, HB, MB, jB;
        if (JB === nB.i) WB && (aB = WB.name, MB = WB.amount, jB = WB.attributes);
        else if (pB) {
          var PB;
          aB = pB.name, HB = pB.icon, MB = null !== (PB = pB.amount) && void 0 !== PB ? PB : 0, jB = pB.attributes
        }
        const RB = null === (IB = jB) || void 0 === IB || null === (ZB = IB.customAttributes) || void 0 === ZB ? void 0 : ZB.enchantmentTier,
          rB = (0, GB.h)(jB),
          {
            displayedAmt: mB,
            shown: XB
          } = NB(JB, MB, [UB, WB, dB]),
          LB = aB && XB,
          eB = void 0 !== QB && function(BB, IB) {
            const {
              enchantable: ZB,
              salvageable: TB
            } = kB.gameBridge.latest("stationItems");
            return "Enchanting Table" === BB ? !0 === ZB[IB] : "Salvaging Table" === BB && !0 === TB[IB]
          }(QB, aB);
        return (0, FB.jsxs)("div", {
          className: oB()("InvenItem", {
            Highlighted: LB && eB,
            Selected: sB,
            HotbarHighlighted: wB,
            HoverDisabled: OB
          }),
          onPointerEnter: () => {
            null === zB || void 0 === zB || zB(!0)
          },
          onPointerLeave: () => {
            null === zB || void 0 === zB || zB(!1)
          },
          onPointerDown: qB,
          onPointerUp: yB,
          "data-inven-idx": JB,
          children: [LB && (0, FB.jsx)(vB.e, {
            itemName: null !== (TB = HB) && void 0 !== TB ? TB : aB,
            amount: mB,
            enchantmentTier: RB,
            bar: rB
          }), LB && iB && (0, FB.jsx)("div", {
            className: "InvenItemNewDot"
          }), YB && (0, FB.jsx)(gB, {
            idx: JB
          }), CB && !LB && (0, FB.jsx)("div", {
            className: "InvenItemUnfilled",
            style: {
              backgroundImage: `url(${CB})`
            }
          })]
        })
      }))
  },
  36553: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => TB,
      i: () => JB
    });
    const TB = -1,
      JB = -2
  },
  37031: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => OB
    });
    var TB = ZB(63),
      JB = ZB(37033),
      oB = ZB(1960),
      GB = ZB(650),
      vB = ZB(24),
      kB = ZB(1091),
      cB = ZB.n(kB),
      nB = ZB(36573),
      hB = ZB(2741),
      zB = ZB(36580),
      FB = ZB(2778),
      NB = ZB(2745),
      gB = ZB(3766),
      qB = ZB(36584),
      yB = ZB(20),
      UB = ZB(2111),
      WB = ZB(2460),
      dB = ZB(1281),
      CB = ZB(5065),
      QB = ZB(2054),
      sB = ZB(105),
      wB = ZB(1153);
    const OB = (0, TB.memo)((function() {
      const BB = (0, JB.c)(),
        IB = (0, QB.j)("players"),
        ZB = (0, QB.j)("lobbyLeaderboardRows"),
        vB = (0, QB.j)("hiddenPlayerNames"),
        kB = (0, TB.useRef)(null),
        [cB, nB] = (0, TB.useReducer)((BB => BB + 1), 0);
      return (0, TB.useEffect)((() => (0, UB.b)((() => {
        nB()
      }))), []), (0, wB.jsx)("div", {
        className: "LobbyLeaderboardContainer Menu",
        children: (0, wB.jsx)("div", {
          className: "MenuBody",
          children: function() {
            if (!BB) return (0, wB.jsx)(wB.Fragment, {});
            const TB = [...IB.ids],
              JB = {},
              cB = {};
            for (const BB of TB) {
              var nB, hB;
              JB[BB] = null === (nB = ZB[BB]) || void 0 === nB ? void 0 : nB.colour;
              const IB = null === (hB = ZB[BB]) || void 0 === hB ? void 0 : hB.values;
              IB && (cB[BB] = {
                ...IB
              })
            }
            const FB = Object.keys(BB);
            FB.sort(((IB, ZB) => BB[IB].sortPriority - BB[ZB].sortPriority)), TB.sort(((IB, ZB) => {
              if (!cB[IB] || !cB[ZB]) return 0;
              for (const TB of FB) {
                const JB = cB[IB][TB],
                  oB = cB[ZB][TB];
                let GB = 0;
                if ("string" == typeof JB && "string" == typeof oB ? GB = JB.localeCompare(oB) : "number" == typeof JB && "number" == typeof oB ? GB = JB - oB : "number" == typeof JB && "string" == typeof oB ? GB = 1 : "string" == typeof JB && "number" == typeof oB && (GB = -1), GB) return GB * ("ascending" === BB[TB].sortOrder ? 1 : -1)
              }
              return 0
            }));
            for (const BB of TB) {
              var NB, gB, qB;
              const {
                name: TB,
                ranks: JB,
                cosmetics: oB
              } = IB.byId[BB], vB = [], kB = null !== (NB = null === (gB = ZB[BB]) || void 0 === gB || null === (qB = gB.tags) || void 0 === qB ? void 0 : qB.flatMap((BB => 0 === BB.length ? BB : [...BB, String.fromCharCode(8198)]))) && void 0 !== NB ? NB : [];
              vB.push(...kB), vB.push(...(0, dB.q)(JB, TB, (null === oB || void 0 === oB ? void 0 : oB.nameColour) === GB.e || null === oB || void 0 === oB ? void 0 : oB.nameColour)), cB[BB] ??= {}, cB[BB].name = vB
            }

            function yB(BB, ZB) {
              if (cB[BB] && void 0 !== cB[BB][ZB]) {
                if ("name" === ZB) {
                  const {
                    name: TB,
                    cosmetics: JB
                  } = IB.byId[BB];
                  return (0, wB.jsxs)("div", {
                    className: "PlayerPfpAndName",
                    children: [JB && (0, wB.jsx)(WB.b, {
                      cosmetics: JB
                    }), " ", (0, wB.jsx)(oB.e, {
                      text: cB[BB][ZB],
                      friendBadgeFor: (0, UB.c)(TB, vB) ? TB : void 0
                    })]
                  })
                }
                return (0, wB.jsx)(oB.e, {
                  text: cB[BB][ZB]
                })
              }
              return ""
            }
            const QB = Object.keys(BB).filter((IB => !0 !== BB[IB].hidden)).map((IB => {
              var ZB;
              return {
                key: IB,
                header: (0, wB.jsx)(oB.e, {
                  text: null !== (ZB = BB[IB].displayName) && void 0 !== ZB ? ZB : ""
                })
              }
            }));
            return (0, wB.jsx)("div", {
              ref: kB,
              className: "LobbyLeaderboard",
              children: (0, wB.jsx)(CB.e, {
                columns: QB,
                rows: TB,
                getRowKey: BB => BB,
                renderRow: ZB => {
                  const TB = ZB !== IB.localId;
                  return (0, wB.jsx)(YB, {
                    playerId: ZB,
                    playerName: IB.byId[ZB].name,
                    isOtherPlayer: TB,
                    opensProfileCard: (0, zB.d)(TB, IB.byId[ZB].name, vB),
                    lobbyLeaderboardInfo: BB,
                    getPlayerValue: yB,
                    playerColors: JB
                  })
                }
              })
            })
          }()
        })
      })
    }));

    function YB(BB) {
      let {
        playerId: IB,
        playerName: ZB,
        isOtherPlayer: JB,
        opensProfileCard: oB,
        lobbyLeaderboardInfo: GB,
        getPlayerValue: kB,
        playerColors: UB
      } = BB;
      const WB = (0, TB.useRef)(null);
      (0, TB.useEffect)((() => () => {
        hB.c.closeIfOwner(WB)
      }), []);
      const dB = {
          icon: "flag",
          text: "Report",
          onClick: () => {
            vB.l.Gq("OpenReportMenu", {
              playerEId: IB,
              playerName: ZB,
              Xn: null,
              serverChatMsgId: null
            })
          }
        },
        CB = () => ({
          ...(0, zB.c)(IB, ZB),
          showLocation: !1,
          status: null,
          extraActions: [dB],
          moderationActions: null === ZB ? [] : (0, qB.d)(ZB),
          friendRequestSource: "leaderboard"
        });
      return (0, wB.jsxs)("tr", {
        ref: WB,
        "data-pad-focusable": oB || void 0,
        [hB.f]: oB || void 0,
        onClick: oB ? () => {
          var BB;
          hB.c.toggle(WB, {
            ...CB(),
            anchor: null !== (BB = WB.current.querySelector(".PlayerPfpAndName")) && void 0 !== BB ? BB : WB.current
          })
        } : void 0,
        onContextMenu: oB ? BB => {
          (0, FB.f)(WB, BB, CB(), yB.d.get("isTouchScreen"))
        } : void 0,
        onPointerDown: oB ? BB => {
          (0, NB.b)(BB, (() => (0, zB.c)(IB, ZB).playerSocialPreview))
        } : void 0,
        children: [Object.keys(GB).map((BB => !0 === GB[BB].hidden ? null : (0, wB.jsxs)("td", {
          className: cB()("LobbyLeaderboardValue SmallTextBold", {
            LobbyLeaderboardValueHighlighted: !JB
          }),
          children: [(0, wB.jsx)("div", {
            className: "LobbyLeaderboardValueText",
            children: kB(IB, BB)
          }), (0, wB.jsx)("div", {
            className: "LobbyLeaderboardValueBg",
            style: {
              backgroundColor: UB[IB]
            }
          })]
        }, BB))), JB && !oB && (0, wB.jsx)(nB.b, {
          className: "LobbyLeaderboardRowFloatingActions",
          triggerElementRef: WB,
          options: [{
            icon: dB.icon,
            text: dB.text,
            onPointerDown: dB.onClick
          }, ...null === ZB || sB.featureFlags.useSocialFeatures ? [] : (0, gB.b)(null, ZB)]
        })]
      })
    }
  },
  36584: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => nB
    });
    var TB = ZB(2029),
      JB = ZB(2540),
      oB = ZB(36587);
    const GB = {
      kick: "lobbyManageEntry:kicked",
      ban: "lobbyManageEntry:banned",
      unban: "lobbyManageEntry:unbanned"
    };

    function vB(BB, IB) {
      return async () => function(BB, IB, ZB) {
        return null === IB ? {
          message: {
            key: "lobbyManageEntry:noAnswer"
          },
          next: null
        } : IB.ok ? {
          message: {
            key: GB[BB.type]
          },
          next: ZB
        } : {
          message: {
            fromServer: IB.message
          },
          next: null
        }
      }(BB, await (0, oB.f)(BB), IB())
    }

    function kB(BB) {
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
        run: vB({
          type: "ban",
          name: BB
        }, (() => function(BB) {
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
            run: vB({
              type: "unban",
              name: BB
            }, (() => null))
          }
        }(BB)))
      }
    }

    function cB(BB, IB) {
      if (null === BB) return [];
      const ZB = [],
        TB = function(BB, IB) {
          var ZB, TB;
          return null !== (ZB = null !== (TB = BB.here.find((BB => BB.name === IB))) && void 0 !== TB ? TB : BB.away.find((BB => BB.name === IB))) && void 0 !== ZB ? ZB : null
        }(BB, IB);
      var oB, GB;
      return null !== TB && void 0 !== TB && TB.can.kick && ZB.push((oB = IB, GB = TB.can.ban, {
        kind: "act",
        icon: "person-falling-burst",
        text: "lobbyManageEntry:kick",
        destructive: !1,
        confirm: null,
        analyticsClick: {
          id: "lobby_manage.kick",
          value: "profile_card"
        },
        run: vB({
          type: "kick",
          name: oB
        }, (() => GB ? kB(oB) : null))
      })), null !== TB && void 0 !== TB && TB.can.ban && ZB.push(kB(IB)), ZB.push({
        kind: "leave",
        icon: "users-gear",
        text: "lobbyManageEntry:manageLobby",
        destructive: !1,
        onClick: () => {
          (0, JB.e)({
            page: "players",
            focusName: IB,
            source: "profile_card"
          })
        }
      }), ZB
    }

    function nB(BB) {
      var IB;
      return cB(null !== (IB = TB.c.get("lobbyManage")) && void 0 !== IB ? IB : null, BB)
    }
  },
  36587: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => nB,
      f: () => kB
    });
    var TB = ZB(1542),
      JB = ZB(2029),
      oB = ZB(1995);
    const GB = 1e4;
    let vB = 0;

    function kB(BB) {
      const IB = ++vB;
      return new Promise((ZB => {
        const vB = IB => {
            kB(), clearTimeout(cB), !1 === (null === IB || void 0 === IB ? void 0 : IB.ok) && (0, TB.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: BB.type
            }), ZB(IB)
          },
          kB = JB.c.subscribe("lobbyManage", (BB => {
            const ZB = function(BB, IB) {
              var ZB;
              return null !== (ZB = null === BB || void 0 === BB ? void 0 : BB.results.find((BB => BB.requestId === IB))) && void 0 !== ZB ? ZB : null
            }(BB, IB);
            null !== ZB && vB(ZB)
          })),
          cB = setTimeout((() => {
            vB(null)
          }), GB);
        oB.gameBridge.send("lobbyManage", {
          ...BB,
          requestId: IB
        })
      }))
    }
    const cB = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class nB {
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kB;
        this.onChange = BB, this.sendAction = IB, this.pending = new Map, this.statuses = new Map
      }
      send(BB, IB, ZB) {
        var TB;
        return this.statuses.delete(IB), this.pending.set(IB, (null !== (TB = this.pending.get(IB)) && void 0 !== TB ? TB : 0) + 1), this.sendAction(BB).then((BB => {
          var TB;
          const JB = null !== BB && void 0 !== BB ? BB : {
              requestId: -1,
              ok: !1,
              message: cB
            },
            oB = (null !== (TB = this.pending.get(IB)) && void 0 !== TB ? TB : 1) - 1;
          oB > 0 ? this.pending.set(IB, oB) : this.pending.delete(IB);
          const GB = !JB.ok || JB.message.length > 0 ? JB.message : null === ZB ? null : [ZB];
          return null !== GB && this.statuses.set(IB, {
            ok: JB.ok,
            text: GB,
            until: Date.now() + 4e3
          }), this.onChange(), JB
        }))
      }
      show(BB, IB) {
        this.statuses.set(BB, {
          ...IB,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(BB) {
        for (const [IB, ZB] of this.statuses) ZB.until <= BB && this.statuses.delete(IB)
      }
      nextDeadline() {
        let BB = null;
        for (const ZB of this.statuses.values()) {
          var IB;
          BB = Math.min(null !== (IB = BB) && void 0 !== IB ? IB : 1 / 0, ZB.until)
        }
        return BB
      }
      statusOf(BB, IB) {
        const ZB = this.statuses.get(BB);
        return !ZB || ZB.until <= IB ? null : {
          ok: ZB.ok,
          text: ZB.text
        }
      }
      isPending(BB) {
        return this.pending.has(BB)
      }
    }
  },
  4944: (BB, IB, ZB) => {
    ZB.d(IB, {
      h: () => UB,
      d: () => yB
    });
    var TB = ZB(63),
      JB = ZB(1507),
      oB = ZB(1960),
      GB = ZB(4950),
      vB = ZB(1153);
    const kB = (0, TB.memo)((function(BB) {
      let {
        initialParameters: IB
      } = BB;
      const ZB = (0, TB.useRef)(null),
        JB = (0, TB.useRef)(null),
        kB = (0, TB.useRef)(0),
        cB = (0, TB.useRef)(null),
        nB = IB.description,
        hB = IB.TI,
        {
          scale: zB,
          rotation: FB
        } = null !== IB && void 0 !== IB ? IB : {},
        NB = (0, GB.f)();
      return (0, TB.useEffect)((() => {
        const BB = NB.onFrame((() => {
          const BB = NB.getState();
          if (!BB.isActive || !ZB.current || !JB.current) return;
          const IB = BB.state;
          if (ZB.current.value = IB.progress, IB.clickCount > kB.current) {
            kB.current = IB.clickCount;
            const BB = JB.current;
            BB.classList.add("pulse"), cB.current = setTimeout((() => {
              BB.classList.remove("pulse")
            }), 100)
          }
        }));
        return () => {
          clearTimeout(cB.current), BB()
        }
      }), [NB]), (0, vB.jsx)(vB.Fragment, {
        children: (0, vB.jsxs)("div", {
          className: "QTEProgressBarWrapper",
          style: {
            ...null !== zB && {
              "--scale": zB
            },
            ...null !== FB && {
              "--rotation": `${FB}deg`
            }
          },
          children: [(0, vB.jsx)("progress", {
            id: "catch",
            max: 100,
            className: "QTEProgressBar",
            ref: ZB
          }), (0, vB.jsx)("span", {
            className: "QTEProgressBarInteractionIndicator",
            ref: JB,
            children: (0, vB.jsx)(oB.e, {
              text: [{
                icon: hB
              }]
            })
          }), (0, vB.jsx)("div", {
            className: "QTEProgressBarDescription",
            children: (0, vB.jsx)(oB.e, {
              text: nB
            })
          })]
        })
      })
    }));
    var cB = ZB(1091),
      nB = ZB.n(cB);
    const hB = 2 * Math.PI * 90,
      zB = (0, TB.memo)((function(BB) {
        let {
          initialParameters: IB
        } = BB;
        const ZB = (0, TB.useRef)(null),
          JB = (0, TB.useRef)(null),
          kB = (0, TB.useRef)(null),
          cB = IB.label,
          zB = IB.icon,
          FB = IB.GI,
          {
            scale: NB,
            rotation: gB,
            vI: qB
          } = null !== IB && void 0 !== IB ? IB : {},
          yB = (0, GB.f)();
        return (0, TB.useEffect)((() => {
          const BB = yB.onFrame((() => {
            var BB, IB;
            const TB = yB.getState();
            if (!TB.isActive || !JB.current) return;
            const oB = TB.state,
              GB = null !== (BB = oB.timeRemaining) && void 0 !== BB ? BB : 0,
              vB = null !== (IB = oB.oI) && void 0 !== IB ? IB : 1,
              cB = hB * (1 - GB / vB);
            JB.current.style.strokeDashoffset = `${cB}`, ZB.current && (ZB.current.style.opacity = GB > 0 ? "1" : "0"), kB.current && FB && (kB.current.textContent = `${(GB/1e3).toFixed(1)}s`)
          }));
          return () => {
            BB()
          }
        }), [yB, FB]), (0, vB.jsxs)("div", {
          className: "QTETimedClick",
          ref: ZB,
          style: {
            ...null !== NB && {
              "--scale": NB
            },
            ...null !== gB && {
              "--rotation": `${gB}deg`
            }
          },
          children: [(0, vB.jsxs)("div", {
            className: "QTETimedClickCircleContainer",
            children: [(0, vB.jsxs)("svg", {
              className: "QTETimedClickCircularProgress",
              viewBox: "0 0 200 200",
              children: [(0, vB.jsx)("circle", {
                className: "QTETimedClickProgressTrack",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12"
              }), (0, vB.jsx)("circle", {
                className: "QTETimedClickProgressArc",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12",
                strokeLinecap: "square",
                strokeDasharray: hB,
                ref: JB
              })]
            }), (0, vB.jsx)("div", {
              className: "QTETimedClickCenterContent",
              children: (0, vB.jsx)(oB.e, {
                text: [{
                  icon: zB
                }],
                className: nB()("QTETimedClickInnerText", {
                  QTETimedClickBreathe: qB
                })
              })
            })]
          }), (0, vB.jsxs)("div", {
            className: "QTETimedClickRightTextContainer",
            children: [(0, vB.jsx)(oB.e, {
              text: cB,
              className: "QTETimedClickLabelText"
            }), FB && (0, vB.jsx)("span", {
              className: "QTETimedClickTimeText",
              ref: kB
            })]
          })]
        })
      })),
      FB = (0, TB.memo)((function(BB) {
        let {
          initialParameters: IB
        } = BB;
        const ZB = (0, TB.useRef)(null),
          JB = (0, TB.useRef)(null),
          kB = (0, TB.useRef)(null),
          cB = (0, TB.useRef)(!1),
          nB = IB.description,
          hB = null === IB || void 0 === IB ? void 0 : IB.icon,
          zB = (0, GB.f)();
        return (0, TB.useEffect)((() => {
          const BB = zB.onFrame((() => {
            const BB = zB.getState();
            if (!BB.isActive) return;
            const IB = BB.state;
            if (ZB.current) {
              const BB = 100 * (IB.catchZonePosition - IB.cI / 2);
              ZB.current.style.left = `${BB}%`, ZB.current.style.width = 100 * IB.cI + "%", IB.isCatching !== cB.current && (cB.current = IB.isCatching, IB.isCatching ? ZB.current.classList.add("catching") : ZB.current.classList.remove("catching"))
            }
            JB.current && (JB.current.style.left = 100 * IB.moverPosition + "%"), kB.current && (kB.current.value = IB.progress)
          }));
          return () => {
            BB()
          }
        }), [zB]), (0, vB.jsxs)("div", {
          className: "QTEGravityBar",
          children: [(0, vB.jsx)("div", {
            className: "QTEGravityBarDescription",
            children: (0, vB.jsx)(oB.e, {
              text: nB
            })
          }), (0, vB.jsx)("progress", {
            max: 100,
            className: "QTEGravityBarProgress",
            ref: kB
          }), (0, vB.jsxs)("div", {
            className: "QTEGravityBarTrack",
            children: [(0, vB.jsx)("div", {
              className: "QTEGravityBarCatchZone",
              ref: ZB
            }), (0, vB.jsx)("div", {
              className: "QTEGravityBarMover",
              ref: JB,
              children: (0, vB.jsx)("span", {
                children: hB && (0, vB.jsx)(oB.e, {
                  text: [{
                    icon: hB,
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
    var NB = ZB(665);
    const gB = (0, TB.memo)((function(BB) {
        let {
          initialParameters: IB
        } = BB;
        const ZB = (0, TB.useRef)(null),
          JB = IB.label,
          kB = IB.qI,
          {
            icon: cB,
            scale: nB,
            rotation: hB
          } = null !== IB && void 0 !== IB ? IB : {},
          zB = 100 * (.5 - kB / 2),
          FB = 100 * kB,
          gB = (0, GB.f)();
        return (0, TB.useEffect)((() => {
          const BB = gB.onFrame((() => {
            const BB = gB.getState();
            if (!BB.isActive || !ZB.current) return;
            const IB = BB.state;
            ZB.current.style.left = 100 * IB.markerPosition + "%"
          }));
          return () => {
            BB()
          }
        }), [gB]), (0, vB.jsxs)("div", {
          className: "QTEPrecisionBarWrapper",
          style: {
            ...!(0, NB.L)(nB) && {
              "--scale": nB
            },
            ...!(0, NB.L)(hB) && {
              "--rotation": `${hB}deg`
            }
          },
          children: [cB && (0, vB.jsx)(oB.e, {
            text: [{
              icon: cB
            }],
            className: "QTEPrecisionBarIcon"
          }), (0, vB.jsxs)("div", {
            className: "QTEPrecisionBarTrack",
            children: [(0, vB.jsx)("div", {
              className: "QTEPrecisionBarSuccessZone",
              style: {
                left: `${zB}%`,
                width: `${FB}%`
              }
            }), (0, vB.jsx)("div", {
              className: "QTEPrecisionBarMarker",
              ref: ZB
            })]
          }), (0, vB.jsx)("div", {
            className: "QTEPrecisionBarLabel",
            children: (0, vB.jsx)(oB.e, {
              text: JB
            })
          })]
        })
      })),
      qB = (0, TB.memo)((function(BB) {
        let {
          initialParameters: IB
        } = BB;
        const ZB = (0, TB.useRef)(null),
          [JB, kB] = (0, TB.useState)((() => new Array(IB.UI).fill("pending"))),
          [cB, nB] = (0, TB.useState)((() => {
            const BB = IB.CI;
            return (0, NB.L)(BB) || BB <= 0 ? [] : new Array(BB).fill("pending")
          })),
          hB = IB.label,
          {
            icon: zB
          } = IB,
          FB = (0, TB.useRef)(0),
          gB = (0, TB.useRef)(0),
          qB = (0, TB.useRef)([]),
          yB = (0, GB.f)();
        return (0, TB.useEffect)((() => {
          const BB = yB.onFrame((() => {
            const BB = yB.getState();
            if (!BB.isActive || !ZB.current) return;
            const IB = BB.state,
              TB = 30 + 60 * IB.outerCircleProgress;
            if (ZB.current.setAttribute("r", String(TB)), !0 === IB.lastClickResult && IB.successes > FB.current) {
              ZB.current.classList.remove("QTERhythmClickOuterCircle--miss"), ZB.current.classList.add("QTERhythmClickOuterCircle--hit");
              const BB = setTimeout((() => {
                var BB;
                null === (BB = ZB.current) || void 0 === BB || BB.classList.remove("QTERhythmClickOuterCircle--hit")
              }), 200);
              qB.current.push(BB)
            } else if (!1 === IB.lastClickResult && IB.misses > gB.current) {
              ZB.current.classList.remove("QTERhythmClickOuterCircle--hit"), ZB.current.classList.add("QTERhythmClickOuterCircle--miss");
              const BB = setTimeout((() => {
                var BB;
                null === (BB = ZB.current) || void 0 === BB || BB.classList.remove("QTERhythmClickOuterCircle--miss")
              }), 200);
              qB.current.push(BB)
            }
            IB.successes === FB.current && IB.misses === gB.current || (FB.current = IB.successes, gB.current = IB.misses, kB((BB => {
              const ZB = [...BB];
              for (let TB = 0; TB < IB.UI; TB++) ZB[TB] = TB < IB.successes ? "success" : "pending";
              return ZB
            })), nB((BB => {
              if (0 === BB.length) return BB;
              const ZB = [...BB];
              for (let TB = 0; TB < ZB.length; TB++) ZB[TB] = TB < IB.misses ? "miss" : "pending";
              return ZB
            })))
          }));
          return () => {
            BB();
            for (const BB of qB.current) clearTimeout(BB);
            qB.current = []
          }
        }), [yB]), (0, vB.jsxs)("div", {
          className: "QTERhythmClickWrapper",
          children: [(0, vB.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: JB.map(((BB, IB) => (0, vB.jsx)("div", {
              className: "QTERhythmClickDot" + ("success" === BB ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
            }, IB)))
          }), (0, vB.jsxs)("div", {
            className: "QTERhythmClickCircleContainer",
            children: [(0, vB.jsxs)("svg", {
              className: "QTERhythmClickSvg",
              viewBox: "0 0 200 200",
              children: [(0, vB.jsx)("circle", {
                className: "QTERhythmClickInnerCircle",
                cx: "100",
                cy: "100",
                r: 30
              }), (0, vB.jsx)("circle", {
                className: "QTERhythmClickOuterCircle",
                cx: "100",
                cy: "100",
                r: 90,
                ref: ZB
              })]
            }), zB && (0, vB.jsx)("div", {
              className: "QTERhythmClickCenterContent",
              children: (0, vB.jsx)(oB.e, {
                text: [{
                  icon: zB
                }],
                className: "QTERhythmClickIcon"
              })
            })]
          }), cB.length > 0 && (0, vB.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: cB.map(((BB, IB) => (0, vB.jsx)("div", {
              className: "QTERhythmClickDot" + ("miss" === BB ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
            }, IB)))
          }), (0, vB.jsx)("div", {
            className: "QTERhythmClickLabel",
            children: (0, vB.jsx)(oB.e, {
              text: hB
            })
          })]
        })
      }));

    function yB(BB) {
      let {
        qte: IB
      } = BB;
      switch (IB.type) {
        case "progressBar":
          return (0, vB.jsx)(kB, {
            initialParameters: IB.parameters
          });
        case "timedClick":
          return (0, vB.jsx)(zB, {
            initialParameters: IB.parameters
          });
        case "gravityBar":
          return (0, vB.jsx)(FB, {
            initialParameters: IB.parameters
          });
        case "precisionBar":
          return (0, vB.jsx)(gB, {
            initialParameters: IB.parameters
          });
        case "rhythmClick":
          return (0, vB.jsx)(qB, {
            initialParameters: IB.parameters
          });
        default:
          return console.warn("Unknown QTE type"), null
      }
    }
    const UB = (0, TB.memo)((function() {
      const [BB, IB] = (0, TB.useState)({
        type: null,
        parameters: null,
        state: null,
        isActive: !1
      });
      return (0, JB.d)("qteStateUpdated", (BB => {
        IB(BB)
      })), BB.isActive && BB.type ? (0, vB.jsx)("div", {
        className: "QTE",
        "data-camera-keeper": "",
        children: (0, vB.jsx)(yB, {
          qte: BB
        })
      }) : null
    }))
  },
  4950: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => vB,
      f: () => kB
    });
    var TB = ZB(63),
      JB = ZB(1362),
      oB = ZB(4952);
    const GB = {
        getState: () => oB.d.getCurrentState(),
        onFrame: JB.o
      },
      vB = (0, TB.createContext)(GB);

    function kB() {
      return (0, TB.useContext)(vB)
    }
  },
  36372: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => nB,
      d: () => zB
    });
    var TB = ZB(63),
      JB = ZB(1403),
      oB = ZB(1248),
      GB = ZB(1397),
      vB = ZB(3663),
      kB = ZB(5084),
      cB = ZB(1153);

    function nB(BB) {
      let {
        loading: IB,
        schematics: ZB,
        onSchematicPicked: TB,
        selectedSchematicIdList: JB = [],
        disableAutoExport: kB
      } = BB;
      const {
        t: nB
      } = (0, oB.G)();
      return (0, cB.jsxs)("div", {
        className: "SchematicList",
        children: [IB && (0, cB.jsx)(GB.d, {}), !IB && 0 === ZB.length && (0, cB.jsx)("div", {
          className: "NoSchematicsText",
          children: nB("worldBuilder:noSavedSchematic")
        }), !IB && ZB.map((BB => (0, cB.jsx)(vB.f, {
          source: {
            type: "schematic",
            schematic: BB
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            TB(BB)
          },
          isSelected: JB.includes(BB.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: BB.isAutoExported && kB,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, BB.schematicId)))]
      })
    }

    function hB(BB) {
      let {
        ownedSchematics: IB,
        currentWorldSchematicId: ZB,
        onClose: JB
      } = BB;
      const {
        t: GB
      } = (0, oB.G)(), [vB, hB] = (0, TB.useState)(null);
      return (0, cB.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === vB && (0, cB.jsxs)(cB.Fragment, {
          children: [(0, cB.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: GB("worldBuilder:schematicList")
          }), (0, cB.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: GB("worldBuilder:clickSchematicForOptions")
          }), (0, cB.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, cB.jsx)(nB, {
              loading: !1,
              schematics: IB,
              onSchematicPicked: BB => {
                hB(BB)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== vB && (0, cB.jsx)(kB.i, {
          schematic: vB,
          inSourceWorld: vB.schematicId === ZB,
          onSchematicUpdate: BB => {
            hB(BB)
          },
          onClose: () => {
            hB(null), JB()
          }
        })]
      })
    }

    function zB(BB) {
      let {
        ownedSchematics: IB,
        currentWorldSchematicId: ZB,
        onClose: TB
      } = BB;
      JB.NotificationProvider.showCustomPopup({
        body: BB => (0, cB.jsx)(hB, {
          ownedSchematics: IB,
          currentWorldSchematicId: ZB,
          onClose: BB
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: TB,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  36953: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => CB,
      d: () => dB
    });
    var TB = ZB(4433),
      JB = ZB(1507),
      oB = ZB(63),
      GB = ZB(6635),
      vB = ZB(4419),
      kB = ZB(1353),
      cB = ZB(1995),
      nB = ZB(1960),
      hB = ZB(1516),
      zB = ZB(1248),
      FB = ZB(36958),
      NB = ZB(1091),
      gB = ZB.n(NB),
      qB = ZB(1370),
      yB = ZB(1102),
      UB = ZB(1343),
      WB = ZB(1153);
    const dB = "SleepingOverlay";

    function CB() {
      const {
        t: BB
      } = (0, zB.G)(), [IB, ZB] = (0, oB.useState)(!1), [NB, CB] = (0, oB.useState)(null), [sB, wB] = (0, oB.useState)(1), [OB, YB] = (0, oB.useState)(!1), [iB, pB] = (0, oB.useState)(!1), aB = (0, oB.useRef)(0), HB = (0, oB.useRef)(!1), MB = (0, oB.useRef)(!1), jB = (0, oB.useRef)(), PB = (0, oB.useRef)(null);

      function RB() {
        const BB = null !== NB && void 0 !== NB ? NB : "Rested Speed";
        cB.gameBridge.send("wakeUp", iB ? BB : null), PB.current = null, ZB(!1), CB(null), wB(1), YB(!1), pB(!1)
      }

      function rB() {
        return !OB && (RB(), !0)
      }
      return (0, JB.d)("PlayerPhysicsTypeUpdate", (BB => {
        BB !== PB.current && (PB.current = BB, BB === GB.o.SLEEPING ? (MB.current || (aB.current = cB.gameBridge.lookup("cameraZoom", null), MB.current = !0), HB.current = !0, cB.gameBridge.send("setCameraZoom", 3), ZB(!0), wB(function() {
          for (const BB of cB.gameBridge.lookup("blocksStandingOn", null)) {
            if (FB.c.leafBeds.includes(BB)) return console.log(`Found leaf bed: ${BB}`), 1;
            if (FB.c.woolBeds.includes(BB)) return console.log(`Found woold bed: ${BB}`), 2;
            if (FB.c.strongBeds.includes(BB)) return console.log(`Found strong bed ${BB}`), 3
          }
          return 1
        }())) : (MB.current = !1, ZB(!1), CB(null), wB(1)))
      })), (0, oB.useEffect)((() => () => {
        (0, kB.p)(dB)
      }), []), (0, oB.useEffect)((() => {
        IB ? (0, kB.t)(dB) : ((0, kB.p)(dB), HB.current && (cB.gameBridge.send("setCameraZoom", aB.current), HB.current = !1))
      }), [IB]), (0, UB.t)("overlay", jB, rB, IB), (0, WB.jsx)(TB.d, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: IB,
        timeout: 300,
        nodeRef: jB,
        unmountOnExit: !0,
        children: (0, WB.jsx)("div", {
          ref: jB,
          onClick: BB => {
            rB() && BB.stopPropagation()
          },
          children: (0, WB.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, WB.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: vB.i.map((IB => (0, WB.jsxs)(QB, {
                restedEffect: IB,
                sk: NB,
                setChosenRestedEffect: CB,
                children: [(0, WB.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, WB.jsx)(nB.e, {
                    text: [{
                      icon: IB
                    }]
                  }), vB.f[IB].shortName]
                }), (0, WB.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: BB(vB.f[IB].description, {
                    time: vB.f[IB].effectLevelDurations[sB] / 6e4
                  })
                })]
              }, IB)))
            }), (0, WB.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, WB.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, WB.jsxs)(hB.g, {
                className: "SleepingOverlayWakeUpButton",
                onClick: BB => {
                  iB ? RB() : (YB(!0), (0, qB._)((() => {
                    YB(!1), pB(!0)
                  }), !0)), BB.stopPropagation()
                },
                loading: OB,
                children: [!iB && (0, WB.jsxs)(WB.Fragment, {
                  children: [(0, WB.jsx)(yB.d, {
                    name: "film"
                  }), " ", BB("classicGame:watchAdToGetRestedPerk")]
                }), iB && BB("classicGame:wakeUp")]
              }), (0, WB.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, WB.jsx)("div", {
                  className: gB()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === sB
                  }),
                  children: (0, WB.jsx)(nB.e, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, WB.jsx)("div", {
                  className: gB()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === sB
                  }),
                  children: (0, WB.jsx)(nB.e, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, WB.jsx)("div", {
                  className: gB()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === sB
                  }),
                  children: (0, WB.jsx)(nB.e, {
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
    const QB = (0, oB.memo)((function(BB) {
      let {
        children: IB,
        restedEffect: ZB,
        sk: TB,
        setChosenRestedEffect: JB
      } = BB;
      return ZB === TB ? (0, WB.jsx)(hB.p, {
        onClick: BB => {
          BB.stopPropagation()
        },
        children: IB
      }) : (0, WB.jsx)(hB.k, {
        onClick: BB => {
          JB(ZB), BB.stopPropagation()
        },
        children: IB
      })
    }))
  },
  36580: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => cB,
      d: () => kB
    });
    var TB = ZB(650),
      JB = ZB(1995),
      oB = ZB(1717),
      GB = ZB(105),
      vB = ZB(1325);

    function kB(BB, IB, ZB) {
      return GB.featureFlags.useSocialFeatures && BB && null === (0, vB.b)(IB, ZB)
    }

    function cB(BB, IB) {
      var ZB, GB;
      const vB = oB.c.getSocialState().friends.find((BB => BB.name.toLowerCase() === IB.toLowerCase())),
        kB = JB.gameBridge.latest("players").byId[BB],
        cB = void 0 !== kB && kB.name === IB,
        nB = cB && null !== (ZB = kB.cosmetics) && void 0 !== ZB ? ZB : void 0,
        hB = vB && nB ? {
          ...vB,
          cosmetics: nB
        } : vB;
      return {
        playerSocialPreview: null !== hB && void 0 !== hB ? hB : {
          isError: !1,
          name: IB,
          ranks: cB ? [...kB.ranks] : [],
          cosmetics: null !== nB && void 0 !== nB ? nB : {},
          nameColour: null !== (GB = null === nB || void 0 === nB ? void 0 : nB.nameColour) && void 0 !== GB ? GB : TB.e,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== vB
      }
    }
  },
  5065: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => vB
    });
    var TB = ZB(63),
      JB = ZB(1091),
      oB = ZB.n(JB),
      GB = ZB(1153);

    function vB(BB) {
      let {
        columns: IB,
        rows: ZB,
        getRowKey: JB,
        renderRow: vB,
        className: kB
      } = BB;
      return (0, GB.jsxs)("table", {
        className: oB()("Table", kB),
        children: [(0, GB.jsx)("thead", {
          children: (0, GB.jsx)("tr", {
            children: IB.map((BB => (0, GB.jsx)("th", {
              children: BB.header
            }, BB.key)))
          })
        }), (0, GB.jsx)("tbody", {
          children: ZB.map((BB => (0, GB.jsx)(TB.Fragment, {
            children: vB(BB)
          }, JB(BB))))
        })]
      })
    }
  },
  36708: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => oB,
      f: () => GB,
      i: () => vB,
      k: () => kB
    });
    var TB = ZB(63),
      JB = ZB(3272);
    const oB = 8,
      GB = "InGameHeaderContainer",
      vB = "TopRightElements";

    function kB(BB) {
      const [IB] = (0, JB.b)(), [ZB, kB] = (0, TB.useState)(!1);
      return (0, TB.useLayoutEffect)((() => {
        if (!BB) return;
        const IB = document.querySelector(`.${GB}`),
          ZB = document.querySelector(`.${vB}`),
          TB = () => {
            const TB = BB.getBoundingClientRect(),
              JB = IB ? IB.getBoundingClientRect().right : 0,
              GB = ZB ? ZB.getBoundingClientRect().left : window.innerWidth,
              vB = TB.left < JB + oB,
              cB = TB.right > GB - oB;
            kB(vB || cB)
          };
        TB();
        const JB = new ResizeObserver(TB);
        return JB.observe(BB), IB && JB.observe(IB), ZB && JB.observe(ZB), () => {
          JB.disconnect()
        }
      }), [BB, IB]), ZB
    }
  },
  36763: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => hB
    });
    var TB = ZB(63),
      JB = ZB(1091),
      oB = ZB.n(JB),
      GB = ZB(1746),
      vB = ZB(1516),
      kB = ZB(1397),
      cB = ZB(1102),
      nB = ZB(1153);

    function hB(BB) {
      let {
        label: IB,
        icon: ZB,
        placeholder: JB,
        onSubmit: hB
      } = BB;
      const zB = (0, TB.useRef)(null),
        [FB, NB] = (0, TB.useState)(""),
        [gB, qB] = (0, TB.useState)("Enter"),
        [yB, UB] = (0, TB.useState)(null);
      (0, TB.useEffect)((() => {
        if ("Success" !== gB && "Error" !== gB) return;
        const BB = setTimeout((() => {
          "Success" === gB && zB.current && (zB.current.value = "", NB("")), qB("Enter")
        }), "Success" === gB ? 1e3 : 4e3);
        return () => {
          clearTimeout(BB)
        }
      }), [gB]);
      const WB = () => {
        const BB = FB.trim();
        "" !== BB && "Enter" === gB && (qB("Loading"), hB(BB).then((BB => {
          zB.current && ("error" in BB ? null === BB.error ? qB("Enter") : (UB(BB.error), qB("Error")) : qB("Success"))
        })))
      };
      return (0, nB.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: BB => {
          BB.target === zB.current && "Escape" !== BB.key && BB.stopPropagation()
        },
        children: [(0, nB.jsxs)("div", {
          className: oB()("AddFriendBodyOverlay", `AddFriendBodyOverlay${gB}`),
          children: ["Loading" === gB && (0, nB.jsx)(kB.d, {}), "Success" === gB && (0, nB.jsx)(cB.d, {
            name: "check"
          }), "Error" === gB && yB]
        }), (0, nB.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, nB.jsx)(GB.c, {
            className: "PlayerSearchInput",
            domRef: zB,
            maxLength: 32,
            placeholderText: JB,
            ariaLabel: JB,
            stopPropagation: !1,
            onValueChange: BB => {
              NB(BB)
            },
            onEnter: WB
          }), (0, nB.jsxs)(vB.g, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== gB || "" === FB.trim(),
            onClick: WB,
            children: [(0, nB.jsx)(cB.d, {
              name: ZB
            }), " ", IB]
          })]
        })]
      })
    }
  },
  36745: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => hB
    });
    var TB = ZB(63),
      JB = ZB(1091),
      oB = ZB.n(JB),
      GB = ZB(1248),
      vB = ZB(1102),
      kB = ZB(1153);
    const cB = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      nB = ["unlisted", "public", "whitelist", "private"];

    function hB(BB) {
      let {
        visibility: IB,
        onPick: ZB
      } = BB;
      const {
        t: JB
      } = (0, GB.G)(), hB = (0, TB.useRef)([]);
      return (0, kB.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": JB("worldSocial:whoCanJoin"),
        children: nB.map(((BB, TB) => {
          const GB = BB === IB;
          return (0, kB.jsxs)("button", {
            ref: BB => {
              hB.current[TB] = BB
            },
            type: "button",
            className: oB()("WorldSocialTile", {
              WorldSocialTileSelected: GB
            }),
            "aria-pressed": GB,
            tabIndex: GB ? 0 : -1,
            onKeyDown: BB => {
              ((BB, IB) => {
                const ZB = "ArrowRight" === BB.key || "ArrowDown" === BB.key ? 1 : "ArrowLeft" === BB.key || "ArrowUp" === BB.key ? -1 : 0;
                var TB;
                0 !== ZB && (BB.preventDefault(), null === (TB = hB.current[(IB + ZB + nB.length) % nB.length]) || void 0 === TB || TB.focus())
              })(BB, TB)
            },
            onClick: () => {
              ZB(BB)
            },
            children: [(0, kB.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, kB.jsx)(vB.d, {
                name: cB[BB]
              })
            }), (0, kB.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, kB.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: JB(`worldSocial:${BB}`)
              }), (0, kB.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: JB(`worldSocial:${BB}Description`)
              })]
            })]
          }, BB)
        }))
      })
    }
  },
  36754: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => vB
    });
    var TB = ZB(1248),
      JB = ZB(2792),
      oB = ZB(4545),
      GB = ZB(1153);

    function vB(BB) {
      let {
        Iz: IB,
        children: ZB,
        ...vB
      } = BB;
      const {
        t: kB
      } = (0, TB.G)();
      return (0, GB.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          IB.onChange(!IB.on)
        },
        children: (0, GB.jsx)(JB.e, {
          ...vB,
          opensProfileCard: !1,
          children: (0, GB.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: BB => {
              BB.stopPropagation()
            },
            children: [ZB, (0, GB.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, GB.jsx)(oB.d, {
                checked: IB.on,
                disabled: !1,
                ariaLabel: kB("worldSocial:letJoin", {
                  playerName: vB.playerSocialPreview.name
                }),
                onChange: BB => {
                  IB.onChange(BB.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  36737: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => NB
    });
    var TB = ZB(63),
      JB = ZB(1248),
      oB = ZB(1919),
      GB = ZB(105),
      vB = ZB(20),
      kB = ZB(1542),
      cB = ZB(2816),
      nB = ZB(34073),
      hB = ZB(1516),
      zB = ZB(1102),
      FB = ZB(1153);

    function NB(BB) {
      let {
        worldCode: IB,
        message: ZB
      } = BB;
      const {
        t: NB
      } = (0, JB.G)(), {
        isTouchScreen: gB
      } = (0, vB.o)(["isTouchScreen"]), qB = GB.featureFlags.canUseInviteLinks, yB = (0, nB.h)(qB && null === ZB), [UB, WB] = (0, cB.i)(), dB = (0, TB.useRef)(null);
      if (null !== ZB) return (0, FB.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, FB.jsx)(zB.d, {
          name: "lock"
        }), (0, FB.jsx)("span", {
          children: ZB
        })]
      });
      const CB = qB ? yB : IB,
        QB = gB && qB && (0, cB.b)();
      return (0, FB.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!qB && (0, FB.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: NB("worldSocial:worldCode")
        }), (0, FB.jsx)("input", {
          ref: dB,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== CB && void 0 !== CB ? CB : "",
          "aria-label": NB(qB ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: BB => {
            BB.currentTarget.select()
          }
        }), (0, FB.jsxs)(hB.g, {
          className: "WorldSocialCopy",
          disabled: null === CB,
          onClick: () => {
            null !== CB && (0, cB.e)(CB, {
              useShareSheet: QB,
              onOutcome: BB => {
                if ((0, kB.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== BB || qB ? BB : "code"
                  }), "copied" === BB) WB();
                else if ("failed" === BB) {
                  var IB;
                  null === (IB = dB.current) || void 0 === IB || IB.focus(), oB.f.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, FB.jsx)(zB.d, {
            name: UB ? "check" : QB ? "up-from-bracket" : "copy"
          }), " ", NB(UB ? "general:copied" : QB ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  36747: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => FB,
      f: () => zB,
      j: () => hB
    });
    var TB = ZB(650),
      JB = ZB(1248),
      oB = ZB(1717),
      GB = ZB(2792),
      vB = ZB(2739),
      kB = ZB(1516),
      cB = ZB(36754),
      nB = ZB(1153);

    function hB(BB, IB) {
      var ZB;
      return {
        isError: !1,
        name: BB,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== IB && void 0 !== IB ? IB : {},
        nameColour: null !== (ZB = null === IB || void 0 === IB ? void 0 : IB.nameColour) && void 0 !== ZB ? ZB : TB.e,
        location: {
          status: "offline"
        }
      }
    }

    function zB(BB) {
      let {
        player: IB,
        isFriend: ZB = !1,
        status: TB,
        showLocation: kB = void 0 === TB,
        Iz: hB,
        onSendFriendRequest: zB,
        actions: FB,
        zIndex: NB
      } = BB;
      const {
        t: gB
      } = (0, JB.G)();
      let qB = TB;
      null !== hB && void 0 !== hB && hB.on && (qB = (0, nB.jsxs)(nB.Fragment, {
        children: [null !== TB && void 0 !== TB ? TB : (0, nB.jsx)(vB.c, {
          socialPreview: IB
        }), (0, nB.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", gB("worldSocial:canJoin")]
        })]
      }));
      const yB = {
        playerSocialPreview: IB,
        isFriend: ZB,
        hideFriendBadge: !0,
        onFriendRemoved: ZB ? BB => {
          oB.c.removeFriendFromState(BB)
        } : void 0,
        status: qB,
        showLocation: kB,
        onSendFriendRequest: zB,
        zIndex: NB
      };
      return hB ? (0, nB.jsx)(cB.c, {
        ...yB,
        Iz: hB,
        children: FB
      }) : (0, nB.jsx)(GB.e, {
        ...yB,
        opensProfileCard: !1,
        children: FB || void 0
      })
    }

    function FB(BB) {
      let {
        row: IB,
        Iz: ZB,
        canInvite: TB,
        invited: oB,
        onInvite: GB,
        zIndex: vB
      } = BB;
      const {
        t: cB
      } = (0, JB.G)(), hB = "online" === IB.place ? kB.g : kB.k;
      return (0, nB.jsx)(zB, {
        player: IB.friend,
        isFriend: !0,
        status: "here" === IB.place ? cB("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        Iz: ZB,
        zIndex: vB,
        actions: TB && (0, nB.jsx)(hB, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: oB,
          onClick: GB,
          ariaLabel: `${cB("worldSocial:invite")} ${IB.friend.name}`,
          children: cB(oB ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  36726: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => kB,
      e: () => GB,
      g: () => cB
    });
    var TB = ZB(63),
      JB = ZB(4768),
      oB = ZB(1919);

    function GB(BB) {
      const IB = {
        lobbyName: BB,
        answer: null,
        response: JB.d.getSocialSettings(BB)
      };
      return IB.response.then((BB => {
        IB.answer = BB
      })), IB
    }
    const vB = new Map;

    function kB(BB) {
      vB.set(BB.lobbyName, BB)
    }

    function cB(BB) {
      const [IB] = (0, TB.useState)((() => function(BB) {
        var IB;
        const ZB = null !== (IB = vB.get(BB)) && void 0 !== IB ? IB : null;
        return null !== ZB && void 0 !== ZB && ZB.answer && "error" in ZB.answer ? null : ZB
      }(BB))), [ZB, GB] = (0, TB.useState)((() => null !== IB && void 0 !== IB && IB.answer && "settings" in IB.answer ? IB.answer.settings : null)), [kB, cB] = (0, TB.useState)(!0), [nB, hB] = (0, TB.useState)(null !== ZB), zB = (0, TB.useRef)(ZB);
      zB.current = ZB;
      const FB = (0, TB.useRef)(0),
        NB = (0, TB.useRef)(0),
        gB = (0, TB.useRef)(!1),
        qB = (0, TB.useRef)(!0),
        yB = (0, TB.useCallback)((async IB => {
          const ZB = ++FB.current,
            TB = await (null !== IB && void 0 !== IB ? IB : JB.d.getSocialSettings(BB));
          qB.current && ZB === FB.current && (hB(!0), cB(!1), "error" in TB || GB(TB.settings))
        }), [BB]),
        UB = (0, TB.useCallback)((() => {
          cB(!0), yB()
        }), [yB]),
        WB = (0, TB.useCallback)((() => {
          NB.current > 0 ? gB.current = !0 : yB()
        }), [yB]);
      (0, TB.useEffect)((() => (qB.current = !0, vB.delete(BB), cB(!0), yB(null === IB || void 0 === IB ? void 0 : IB.response), () => {
        qB.current = !1
      })), [yB, BB, IB]);
      const dB = BB => {
        FB.current++, cB(!1), zB.current = BB, GB(BB)
      };
      return {
        settings: ZB,
        loading: kB,
        answered: nB,
        retry: UB,
        refresh: WB,
        change: async function(IB, ZB) {
          let {
            quiet: TB = !1,
            onAnswer: GB
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const vB = zB.current;
          if (null === vB) return !1;
          dB(ZB(vB)), NB.current > 0 && (gB.current = !0), NB.current++;
          const kB = await JB.d.setSocialSettings(BB, IB);
          NB.current--;
          const cB = !("error" in kB);
          if (!qB.current) return cB;
          if (null === GB || void 0 === GB || GB(kB), TB);
          else if ("error" in kB) oB.f.showMessage({
            translationKey: kB.error
          });
          else
            for (const BB of kB.notFound) oB.f.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: BB
              }
            });
          if (NB.current > 0) return cB;
          const nB = gB.current;
          return gB.current = !1, !nB && "settings" in kB ? dB(kB.settings) : (nB || dB(vB), yB()), cB
        }
      }
    }
  },
  36768: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => GB,
      f: () => oB
    });
    var TB = ZB(168);
    const JB = new Map;

    function oB(BB, IB) {
      var ZB;
      const TB = null !== (ZB = JB.get(BB)) && void 0 !== ZB ? ZB : new Map;
      TB.set(IB, Date.now()), JB.set(BB, TB)
    }

    function GB(BB) {
      const IB = JB.get(BB);
      if (!IB) return [];
      const ZB = Date.now();
      for (const [JB, oB] of IB) ZB - oB >= TB.m && IB.delete(JB);
      return [...IB.keys()]
    }
  },
  36735: (BB, IB, ZB) => {
    function TB(BB, IB) {
      const ZB = IB.toLowerCase();
      for (const TB of BB)
        if (TB.toLowerCase() === ZB) return !0;
      return !1
    }

    function JB(BB, IB, ZB) {
      const JB = [],
        oB = [],
        GB = [];
      for (const vB of BB) !vB.isError && vB.name && ("inGame" === vB.location.status && vB.location.inLobbyName === IB || TB(ZB, vB.name) ? oB.push({
        friend: vB,
        place: "here"
      }) : "offline" === vB.location.status ? GB.push({
        friend: vB,
        place: "offline"
      }) : JB.push({
        friend: vB,
        place: "online"
      }));
      return [...JB, ...oB, ...GB]
    }

    function oB(BB, IB, ZB) {
      const JB = [],
        oB = BB.flatMap((BB => "here" === BB.place ? [BB.friend.name] : []));
      for (const GB of [...oB, ...IB]) TB(JB, GB) || TB(ZB, GB) || JB.push(GB);
      return JB
    }

    function GB(BB, IB) {
      return null === BB || void 0 === BB || !BB.canManage || TB(BB.whitelist, IB) ? "none" : "whitelist" === BB.visibility ? "required" : "quiet"
    }

    function vB(BB) {
      if (null === BB) return !0;
      const {
        visibility: IB
      } = BB;
      return "public" === IB || "unlisted" === IB || "whitelist" === IB && BB.canManage
    }

    function kB(BB, IB, ZB) {
      if (ZB) {
        const ZB = IB.filter((IB => !TB(BB.whitelist, IB)));
        return {
          ...BB,
          whitelist: [...BB.whitelist, ...ZB]
        }
      }
      return {
        ...BB,
        whitelist: BB.whitelist.filter((BB => !TB(IB, BB)))
      }
    }

    function cB(BB, IB) {
      const ZB = [];
      for (let TB = 0; TB < BB.length; TB += IB) ZB.push(BB.slice(TB, TB + IB));
      return ZB
    }
    ZB.d(IB, {
      b: () => vB,
      f: () => oB,
      i: () => JB,
      m: () => TB,
      n: () => cB,
      p: () => GB,
      s: () => kB
    })
  },
  8868: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => GB,
      c: () => oB
    });
    var TB = ZB(2074);
    const JB = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      oB = BB => "string" === typeof BB.icon && "" !== BB.icon && "string" === typeof BB.keycode && JB.test(BB.keycode),
      GB = BB => "Space" === BB ? "_" : TB.h[BB]
  },
  8904: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => JB
    });
    var TB = ZB(20);

    function JB() {
      return !TB.d.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  8913: (BB, IB, ZB) => {
    ZB.d(IB, {
      D: () => zB,
      F: () => FB,
      b: () => oB,
      f: () => vB,
      j: () => cB,
      m: () => kB,
      o: () => GB,
      p: () => JB,
      r: () => TB,
      u: () => NB,
      v: () => hB,
      z: () => nB
    });
    const TB = 14,
      JB = 6,
      oB = (TB + JB) / 2,
      GB = 200,
      vB = GB / 2,
      kB = GB / 2 - 1,
      cB = JB / TB * (GB / 2),
      nB = (BB, IB) => -Math.PI / 2 + 2 * BB * Math.PI / IB,
      hB = (BB, IB, ZB) => {
        const TB = 2 * Math.PI / ZB;
        return (Math.round((Math.atan2(IB, BB) + Math.PI / 2) / TB) % ZB + ZB) % ZB
      },
      zB = .5,
      FB = (BB, IB, ZB) => Math.hypot(BB.x, BB.y) < zB ? ZB : hB(BB.x, BB.y, IB),
      NB = (BB, IB, ZB, TB, JB) => {
        const oB = Math.PI / IB,
          GB = nB(BB, IB),
          vB = GB - oB,
          kB = GB + oB,
          cB = (BB, IB) => `${ZB+BB*Math.cos(IB)} ${ZB+BB*Math.sin(IB)}`;
        return [`M ${cB(TB,vB)}`, `L ${cB(JB,vB)}`, `A ${JB} ${JB} 0 0 1 ${cB(JB,kB)}`, `L ${cB(TB,kB)}`, `A ${TB} ${TB} 0 0 0 ${cB(TB,vB)}`, "Z"].join(" ")
      }
  },
  36928: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => oB
    });
    var TB = ZB(20),
      JB = ZB(1370);

    function oB() {
      const {
        clientEscMenuOptions: BB
      } = (0, TB.o)(["clientEscMenuOptions"]);
      return (0, JB.r)() && BB.showChat
    }
  },
  8940: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => GB
    });
    var TB = ZB(63),
      JB = ZB(8885),
      oB = ZB(2526);

    function GB() {
      const BB = (0, oB.d)("shopInfo"),
        [, IB] = (0, TB.useReducer)((BB => BB + 1), 0);
      return (0, oB.c)("shopInfo", IB), !(0, JB.d)(BB)
    }
  },
  37033: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => oB
    });
    var TB = ZB(63),
      JB = ZB(2526);

    function oB() {
      const BB = (0, JB.d)("lobbyLeaderboardInfo");
      return (0, TB.useMemo)((() => function(BB) {
        if (null === BB) return null;
        const IB = Object.entries(BB),
          ZB = IB.filter((BB => {
            let [, IB] = BB;
            return void 0 !== IB
          }));
        if (ZB.length === IB.length) return BB;
        const TB = Object.fromEntries(ZB),
          JB = Object.keys(BB).filter((BB => !Object.hasOwn(TB, BB)));
        return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${JB.join(", ")}`), TB
      }(BB)), [BB])
    }
  },
  36863: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => kB
    });
    var TB = ZB(2912),
      JB = ZB(3854),
      oB = ZB(3088);
    const GB = ["Unable to create vertex buffer"];
    let vB = {};

    function kB(BB, IB) {
      const ZB = new Date;
      console.error(`${ZB.getUTCHours()}:${ZB.getUTCMinutes()}:${ZB.getUTCSeconds()}`, BB, IB, null === IB || void 0 === IB ? void 0 : IB.stack), GB.includes(null === IB || void 0 === IB ? void 0 : IB.message) && (console.error("Unrecoverable error occurred. Leaving game."), (0, TB.d)().client.leaveGameUnwanted({
        reason: `Unrecoverable error occurred.\nThis is a bug.\n\nError:\n${IB.message}\n\nPlease refresh the page.`,
        requiresRefresh: !0,
        canReconnect: !1,
        automaticallyReconnect: !1
      })), (0, oB.logError)("warning", `${BB}\n ${IB} "\n" ${null===IB||void 0===IB?void 0:IB.stack}`);
      const JB = BB + IB + (null === IB || void 0 === IB ? void 0 : IB.stack);
      JB in vB || ((0, oB.logError)("error", `${BB}\n ${IB} "\n" ${null===IB||void 0===IB?void 0:IB.stack}`), vB[JB] = !0)
    }(0, JB.onGameReset)((() => {
      vB = {}
    }))
  },
  5011: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => PB,
      c: () => jB
    });
    var TB = ZB(5016),
      JB = ZB(342);
    const oB = 120,
      GB = 260,
      vB = 1.15,
      kB = 1.2,
      cB = 2,
      nB = 1.08,
      hB = .8,
      zB = .95,
      FB = 8,
      NB = "[\"')\\]\u300d\u300f\uff09]*",
      gB = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${NB}$`),
      qB = new RegExp(`[?\uff1f]${NB}$`),
      yB = new RegExp(`[!\uff01]${NB}$`),
      UB = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      WB = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      dB = new RegExp(`[${WB}]`),
      CB = new RegExp(`[${WB}]|[^${WB}]+`, "g"),
      QB = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function sB(BB) {
      let IB = 2166136261;
      for (let ZB = 0; ZB < BB.length; ZB++) IB ^= BB.charCodeAt(ZB), IB = Math.imul(IB, 16777619);
      return (IB >>> 0) / 4294967295 * 2 - 1
    }

    function wB(BB) {
      var IB;
      if (dB.test(BB)) return 1;
      const ZB = BB.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        TB = ZB.replace(/[^0-9]/g, "");
      if (TB.length > 0 && !/\p{L}/u.test(ZB)) return Math.min(TB.length, 4);
      const JB = null !== (IB = ZB.match(QB)) && void 0 !== IB ? IB : [];
      if (0 === JB.length) {
        var oB, GB;
        const BB = null !== (oB = null === (GB = ZB.match(/\p{L}/gu)) || void 0 === GB ? void 0 : GB.length) && void 0 !== oB ? oB : 0;
        return 0 === BB ? 0 : Math.min(Math.max(1, Math.round(BB / 2.5)), FB)
      }
      const vB = ZB.replace(/[^\p{L}]/gu, ""),
        kB = JB.length > 1 && "e" === JB.at(-1) && vB.endsWith("e") && !vB.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(BB.replace(/[^\p{L}]/gu, ""));
      return Math.min(JB.length - (kB ? 1 : 0), FB)
    }

    function OB(BB) {
      return BB.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function YB(BB) {
      const IB = BB.replace(/[^\p{L}]/gu, "");
      return IB.length >= 2 && IB === IB.toUpperCase() && IB !== IB.toLowerCase()
    }

    function iB(BB, IB) {
      var ZB;
      const FB = IB && (0, TB.j)(IB),
        NB = null !== (ZB = null === FB || void 0 === FB ? void 0 : FB.syllableMs) && void 0 !== ZB ? ZB : TB.c,
        WB = function(BB) {
          const IB = [];
          for (const TB of (0, JB.rc)(BB))
            if ("string" === typeof TB)
              for (const BB of TB.split(/(\s+)/)) {
                if ("" === BB) continue;
                if (/^\s+$/.test(BB)) {
                  IB.push({
                    kind: "space",
                    text: BB
                  });
                  continue
                }
                if (!dB.test(BB)) {
                  IB.push({
                    kind: "word",
                    text: BB,
                    delayMs: 0
                  });
                  continue
                }
                let TB = !0;
                for (const JB of null !== (ZB = BB.match(CB)) && void 0 !== ZB ? ZB : []) {
                  var ZB;
                  const BB = IB.at(-1);
                  TB || "word" !== (null === BB || void 0 === BB ? void 0 : BB.kind) || dB.test(JB) || /[\p{L}\p{N}]/u.test(JB) ? (TB || IB.push({
                    kind: "space",
                    text: "\u200b"
                  }), IB.push({
                    kind: "word",
                    text: JB,
                    delayMs: 0
                  }), TB = !1) : BB.text += JB
                }
              } else IB.push({
                kind: "icon",
                text: TB.icon,
                delayMs: 0
              });
          return IB
        }(BB),
        QB = [];
      let iB = [];
      for (const TB of WB) "space" !== TB.kind && (iB.push(TB), gB.test(TB.text) && (QB.push(iB), iB = []));
      QB.push(iB);
      const pB = [];
      let aB = 0;
      for (const TB of QB) {
        var HB, MB;
        const BB = null !== (HB = null === (MB = TB.at(-1)) || void 0 === MB ? void 0 : MB.text) && void 0 !== HB ? HB : "",
          IB = qB.test(BB),
          ZB = yB.test(BB),
          JB = TB.map((BB => "word" === BB.kind ? wB(BB.text) : 1)),
          WB = JB.findLastIndex((BB => BB > 0));
        for (const [qB, yB] of TB.entries()) {
          const BB = "word" === yB.kind,
            TB = JB[qB];
          yB.delayMs = aB;
          for (let JB = 0; FB && JB < TB; JB++) {
            const {
              intonation: oB
            } = FB;
            let GB = WB > 0 ? -oB.declineSemitones * (qB / WB) : 0;
            GB += sB(`${OB(yB.text)}|${JB}`) * oB.variationSemitones;
            const gB = Math.min(1, oB.variationSemitones);
            let UB = FB.glideSemitones,
              dB = 1;
            ZB && (GB += oB.exclaimLiftSemitones, dB *= vB), IB && qB === WB && (GB += oB.questionRiseSemitones * (TB > 1 ? .5 + .5 * JB / (TB - 1) : 1), JB === TB - 1 && (UB = Math.abs(UB) + oB.questionRiseSemitones / 2)), BB && YB(yB.text) && (GB += cB * gB, dB *= kB), TB > 1 && 0 === JB && (GB += hB * gB, dB *= nB), pB.push({
              atMs: aB + JB * NB,
              semitones: GB,
              glideSemitones: UB,
              durationMs: JB < TB - 1 ? Math.min(FB.durationMs, NB * zB) : FB.durationMs,
              level: dB
            })
          }
          aB += TB * NB + (gB.test(yB.text) ? GB : UB.test(yB.text) ? oB : 0)
        }
      }
      return {
        pieces: WB.map((BB => "space" === BB.kind ? BB : "icon" === BB.kind ? {
          kind: "icon",
          icon: BB.text,
          delayMs: BB.delayMs
        } : {
          kind: "word",
          text: BB.text,
          delayMs: BB.delayMs
        })),
        blips: pB
      }
    }
    var pB = ZB(1248),
      aB = ZB(1310),
      HB = ZB(2003);

    function MB(BB) {
      if ("string" === typeof BB) return BB;
      const IB = aB.h.get().getCurrentLanguageCode();
      return (0, pB.w)(IB, BB.translationKey, (0, pB.s)(BB.params, HB.b.shown))
    }

    function jB(BB) {
      const IB = void 0 === BB.voice ? null : (0, TB.k)(BB.voice),
        ZB = IB && (0, TB.j)(IB);
      return {
        plan: iB(MB(BB.line), ZB),
        synth: ZB
      }
    }

    function PB(BB) {
      const IB = [];
      let ZB = [];
      for (const [JB, oB] of BB.entries()) {
        var TB;
        "space" === oB.kind && (" " !== oB.text || "icon" !== (null === (TB = BB[JB + 1]) || void 0 === TB ? void 0 : TB.kind)) ? (ZB.length > 0 && IB.push(ZB), IB.push([oB]), ZB = []) : ZB.push(oB)
      }
      return ZB.length > 0 && IB.push(ZB), IB
    }
  },
  36706: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => JB
    });
    const TB = [{
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

    function JB(BB, IB, ZB) {
      const JB = Math.abs(BB - IB),
        oB = Date.now() - ZB;
      for (const GB of TB)
        if (BB < GB.maxDist) return JB >= GB.hardUpdateDist || oB > GB.timeBetweenSoftChecks && JB >= GB.softUpdateDist;
      return !1
    }
  },
  37009: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => hB,
      c: () => zB
    });
    var TB = ZB(665),
      JB = ZB(36),
      oB = ZB(36969);
    const GB = "replayFileKeptForReload",
      vB = "replayFileKeptForReloadAt",
      kB = "replayFileKeptForReloadTab",
      cB = 3e5,
      nB = 5e3;
    async function hB(BB, IB) {
      const ZB = Date.now(),
        oB = {
          at: ZB,
          bytes: BB,
          source: IB
        },
        cB = await Promise.race([(async () => await JB.i.setItem(vB, ZB) && JB.i.setItem(GB, oB))(), (0, TB.Q)(nB).then((() => !1))]);
      cB || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const hB = {
        at: ZB,
        XF: cB
      };
      JB.n.setItem(kB, hB)
    }
    async function zB() {
      var BB;
      const IB = JB.n.getItem(kB);
      null !== IB && JB.n.removeItem(kB);
      const ZB = Date.now(),
        TB = await JB.i.getItem(vB),
        nB = null !== IB && ZB - IB.at <= cB,
        hB = null !== IB && TB === IB.at;
      let zB = null;
      if (null !== TB && (hB || ("number" !== typeof TB || ZB - TB > cB)) && (zB = nB && hB && IB.XF ? await JB.i.getItem(GB) : null, await Promise.all([JB.i.removeItem(vB), JB.i.removeItem(GB)])), !nB) return null;
      if ((null === (BB = zB) || void 0 === BB ? void 0 : BB.at) !== IB.at) throw new Error(oB.b.replayNotKept.text);
      return {
        bytes: zB.bytes,
        source: zB.source
      }
    }
  },
  37003: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB,
      e: () => oB,
      f: () => JB
    });
    const TB = [9];

    function JB(BB) {
      return TB.includes(BB)
    }

    function oB(BB) {
      return null !== BB && BB >= 3 && BB < TB[0]
    }
  },
  36976: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => GB,
      g: () => oB,
      i: () => JB
    });
    const TB = [.25, .5, 1, 2, 4, 8, 16];

    function JB(BB, IB) {
      const ZB = TB;
      let JB = ZB.indexOf(BB);
      return -1 === JB && (JB = ZB.findIndex((IB => IB >= BB)), -1 === JB && (JB = ZB.length - 1)), "up" === IB ? ZB[Math.min(JB + 1, ZB.length - 1)] : ZB[Math.max(JB - 1, 0)]
    }

    function oB(BB) {
      return BB <= TB[0]
    }

    function GB(BB) {
      return BB >= TB[TB.length - 1]
    }
  },
  37019: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB,
      d: () => JB
    });
    const TB = "data-replay-ui-active",
      JB = [{
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
  37024: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => cB,
      f: () => hB,
      h: () => nB
    });
    var TB = ZB(20),
      JB = ZB(24),
      oB = ZB(37019);

    function GB() {
      const BB = {};
      for (const {
          group: IB
        }
        of oB.d) BB[IB] = !0;
      return BB
    }
    let vB = GB();

    function kB() {
      JB.l.Gq("replayViewer|uiVisibilityChanged")
    }

    function cB() {
      return vB
    }

    function nB(BB, IB) {
      vB[BB] !== IB && (vB = {
        ...vB,
        [BB]: IB
      }, "nametag" === BB && TB.d.set({
        areNametagsHidden: !IB
      }), kB())
    }

    function hB() {
      vB = GB(), TB.d.set({
        areNametagsHidden: !1
      }), kB()
    }
  },
  8859: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => oB,
      c: () => GB,
      d: () => vB,
      g: () => JB
    });
    var TB = ZB(8868);
    const JB = BB => {
        const IB = [];
        BB.holdingGun && IB.push({
          kind: "reload"
        }), BB.touchscreenActionButton && IB.push({
          kind: "touchButton",
          label: BB.touchscreenActionButton
        });
        for (const oB of null !== (ZB = null === (JB = BB.customButtons) || void 0 === JB ? void 0 : JB.filter(TB.c)) && void 0 !== ZB ? ZB : []) {
          var ZB, JB;
          IB.push({
            kind: "customButton",
            id: oB.id,
            icon: oB.icon,
            description: oB.description
          })
        }
        return IB
      },
      oB = BB => BB.length >= 2,
      GB = BB => "specialAction" !== BB.kind,
      vB = (BB, IB) => {
        if (null === BB || null === IB) return BB === IB;
        if (BB.kind !== IB.kind) return !1;
        switch (BB.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return BB.action === IB.action;
          case "customButton":
            return BB.id === IB.id && BB.icon === IB.icon;
          case "touchButton":
            return BB.label === IB.label
        }
      }
  },
  8857: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => nB,
      h: () => FB,
      l: () => hB,
      m: () => NB
    });
    var TB = ZB(63),
      JB = ZB(24),
      oB = ZB(1507),
      GB = ZB(8859),
      vB = ZB(8871);
    let kB = null;
    const cB = () => kB,
      nB = BB => {
        (0, GB.d)(kB, BB) || (kB = BB, JB.l.Gq(vB.f, kB))
      },
      hB = () => {
        const [BB, IB] = (0, TB.useState)(cB);
        return (0, oB.d)(vB.f, IB), BB
      };
    let zB = !1;
    const FB = BB => {
        BB !== zB && (zB = BB, JB.l.Gq(vB.g, BB))
      },
      NB = () => {
        const [BB, IB] = (0, TB.useState)(zB);
        return (0, oB.d)(vB.g, IB), BB
      }
  },
  8871: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => oB,
      f: () => TB,
      g: () => JB,
      h: () => vB,
      l: () => kB,
      o: () => cB,
      s: () => GB
    });
    const TB = "controllerActionHintChanged",
      JB = "controllerActionWheelHintChanged",
      oB = "controllerOpenChat",
      GB = "controllerSneakToggledChanged",
      vB = "controllerAttackLatchedChanged",
      kB = "controllerDropStackHoldChanged",
      cB = "controllerPickBlockHintChanged"
  },
  8809: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => GB,
      g: () => oB,
      k: () => kB,
      o: () => vB
    });
    var TB = ZB(1507),
      JB = ZB(1469);
    const oB = "controllerInventoryCursorChanged",
      GB = {
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
      vB = () => {
        var BB, IB;
        return (0, TB.h)(oB, null !== (BB = null === (IB = (0, JB.d)()) || void 0 === IB ? void 0 : IB.getInventoryCursorState()) && void 0 !== BB ? BB : GB)
      },
      kB = () => {
        var BB, IB;
        return null !== (BB = null === (IB = (0, JB.d)()) || void 0 === IB ? void 0 : IB.isPadSteppingSlots()) && void 0 !== BB && BB
      }
  },
  8806: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => zB,
      e: () => vB,
      h: () => kB,
      k: () => GB,
      n: () => oB,
      q: () => nB,
      t: () => hB
    });
    let TB = null;
    const JB = new Set,
      oB = BB => (TB = BB, () => {
        if (TB === BB) {
          TB = null;
          for (const BB of JB) BB()
        }
      }),
      GB = BB => (JB.add(BB), () => {
        JB.delete(BB)
      }),
      vB = () => TB,
      kB = () => null !== TB;
    let cB = null;
    const nB = BB => {
        cB = BB
      },
      hB = () => {
        const BB = cB;
        return cB = null, BB
      },
      zB = (BB, IB) => {
        var ZB, TB;
        return null !== (ZB = null !== (TB = BB.find((BB => BB.element === IB))) && void 0 !== TB ? TB : BB.find((BB => BB.element.contains(IB)))) && void 0 !== ZB ? ZB : null
      }
  },
  8818: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => oB,
      f: () => GB
    });
    var TB = ZB(63);
    const JB = new WeakMap,
      oB = BB => {
        var IB, ZB;
        return null !== (IB = null === (ZB = JB.get(BB)) || void 0 === ZB ? void 0 : ZB.current) && void 0 !== IB ? IB : null
      },
      GB = (BB, IB) => {
        const ZB = (0, TB.useRef)(IB);
        ZB.current = IB;
        const oB = (0, TB.useRef)(null);
        (0, TB.useEffect)((() => {
          const IB = BB.current,
            TB = oB.current;
          IB !== TB && (TB && JB.get(TB) === ZB && JB.delete(TB), oB.current = IB, IB && JB.set(IB, ZB))
        })), (0, TB.useEffect)((() => () => {
          const BB = oB.current;
          BB && JB.get(BB) === ZB && JB.delete(BB), oB.current = null
        }), [])
      }
  },
  8935: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => vB,
      h: () => cB,
      k: () => hB,
      m: () => nB,
      p: () => kB,
      r: () => FB
    });
    var TB = ZB(24),
      JB = ZB(2089),
      oB = ZB(1469),
      GB = ZB(1454);
    const vB = BB => {
        var IB, ZB;
        return (0, GB.j)() && null !== (IB = null === (ZB = (0, oB.d)()) || void 0 === ZB ? void 0 : ZB.getGlyphForNoaAction(BB)) && void 0 !== IB ? IB : null
      },
      kB = "controllerGlyph:",
      cB = BB => {
        var IB, ZB;
        return null !== (IB = null === (ZB = (0, oB.d)()) || void 0 === ZB ? void 0 : ZB.getPadGlyphIconName(BB)) && void 0 !== IB ? IB : `${kB}xbox/${BB}`
      },
      nB = BB => BB.startsWith(kB),
      hB = BB => {
        var IB, ZB;
        return nB(BB) && null !== (IB = null === (ZB = (0, oB.d)()) || void 0 === ZB ? void 0 : ZB.getPadGlyphIconUrl(BB)) && void 0 !== IB ? IB : null
      },
      zB = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", GB.d, JB.f, JB.e],
      FB = BB => {
        const IB = zB.map((IB => TB.l.subscribe(IB, BB)));
        return () => {
          for (const BB of IB) TB.l.unsubscribe(BB)
        }
      }
  },
  8840: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => oB,
      g: () => JB
    });
    let TB = null;
    const JB = function(BB) {
        const IB = {
          cycle: BB,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return TB = IB, () => {
          TB === IB && (TB = null)
        }
      },
      oB = () => {
        var BB;
        return null !== (BB = TB) && void 0 !== BB && BB.canCycle() ? TB.cycle : null
      }
  },
  8920: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => JB,
      e: () => GB,
      g: () => oB,
      i: () => TB,
      l: () => vB,
      p: () => cB,
      t: () => nB
    });
    const TB = "controllerActionWheelOpen",
      JB = "controllerActionWheelAim",
      oB = "controllerActionWheelCommit",
      GB = "controllerActionWheelClose",
      vB = "controllerActionWheelPick";
    let kB = !1;
    const cB = () => kB,
      nB = BB => {
        kB = BB
      }
  },
  8917: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => oB,
      h: () => JB
    });
    let TB = 0;
    const JB = () => {
        TB++
      },
      oB = () => TB
  },
  8835: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => kB,
      d: () => JB,
      g: () => GB,
      j: () => oB,
      l: () => TB,
      n: () => cB
    });
    const TB = "controllerQuickChatWheelOpen",
      JB = "controllerQuickChatWheelAim",
      oB = "controllerQuickChatWheelCommit",
      GB = "controllerQuickChatWheelClose";
    let vB = !1;
    const kB = () => vB,
      cB = BB => {
        vB = BB
      }
  },
  36856: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => JB,
      f: () => oB
    });
    const TB = new Map;

    function JB(BB) {
      var IB;
      return null === BB ? null : null !== (IB = TB.get(BB)) && void 0 !== IB ? IB : null
    }

    function oB(BB, IB) {
      return TB.set(BB, IB), () => {
        TB.get(BB) === IB && TB.delete(BB)
      }
    }
  },
  36986: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => VI,
      f: () => KI
    });
    var TB = ZB(4416),
      JB = ZB(665),
      oB = ZB(3896),
      GB = ZB(3916),
      vB = ZB.n(GB);
    const kB = new Set(["nameTagInfo", "multilineTextBox", "animationScript", "content", "skyBox", "opts", "fromBlockData", "toBlockData", "sharedBlockData"]),
      cB = "EV_boolean",
      nB = "EV_double",
      hB = "EV_string",
      zB = "EV_doubleArr",
      FB = "EV_armour",
      NB = "EV_other",
      gB = "EV_cosmetics",
      qB = "OEV_boolean",
      yB = "OEV_int",
      UB = "OEV_double",
      WB = "OEV_string",
      dB = "OEV_stringArr",
      CB = "OEV_meshScaling",
      QB = "IV_int",
      sB = "IV_string",
      wB = "IV_doubleArr",
      OB = "IV_double",
      YB = "HV_int",
      iB = "HV_slots",
      pB = "EnvV_string",
      aB = "EnvV_double",
      HB = "EnvV_doubleArr",
      MB = "EnvV_boolean",
      jB = {
        type: hB,
        name: hB,
        position: zB,
        rotation: zB,
        scale: nB,
        speed: nB,
        jumping: cB,
        crouching: cB,
        cameraPitch: nB,
        armSwinging: cB,
        heldItemName: hB,
        heldItemEnchantmentTier: hB,
        pose: hB,
        followingEId: hB,
        ridingVehicleEId: hB,
        leaderboardTop: hB,
        meshKind: hB,
        meshOpts: hB,
        followingOffset: zB,
        shouldMatchFollowingEntityRotation: cB,
        meshOffset: zB,
        baseRenderHeading: nB,
        armour: FB,
        Tm: NB,
        playerCustomisations: gB,
        variation: hB,
        metaInfo: hB,
        soundName: hB,
        volume: nB,
        refDistance: nB,
        maxHearDist: nB,
        rate: nB,
        aiState: hB
      },
      PB = {
        opacity: UB,
        zIndex: yB,
        overlayColour: WB,
        canSee: qB,
        meshScaling: CB,
        nameTagInfo: WB,
        multilineTextBox: WB,
        hasPriorityNametag: qB,
        ranks: dB,
        nameColour: WB,
        _isAlive: qB,
        _invisibleEffect: qB,
        _invincible: qB,
        killfeedColour: WB,
        hideNameSeed: yB,
        _glowingEffect: qB,
        lockHeadToBody: qB
      },
      RB = {
        itemName: sB,
        amount: QB,
        position: wB,
        size: OB,
        attributes: sB
      },
      rB = {
        skyBox: pB,
        fogColourOverride: pB,
        fogChunkDistanceOverride: aB,
        cameraTint: HB,
        fogOnSkybox: MB,
        fogBlockDistanceOverride: aB
      },
      mB = {
        type: "array",
        items: "double"
      },
      XB = {
        type: "array",
        items: "int"
      },
      LB = {
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
      eB = {
        type: "map",
        values: mB
      };

    function uB(BB, IB) {
      return {
        type: "record",
        name: BB,
        fields: [{
          name: "x",
          type: IB
        }]
      }
    }
    const fB = {
        type: "array",
        items: {
          type: "record",
          name: "OtherEntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", uB(qB, "boolean"), uB(yB, "int"), uB(UB, "double"), uB(WB, "string"), uB(dB, {
              type: "array",
              items: "string"
            }), uB(CB, eB)]
          }]
        }
      },
      lB = {
        type: "array",
        items: {
          type: "record",
          name: "EntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", uB(cB, "boolean"), uB(nB, "double"), uB(hB, "string"), uB(zB, mB), uB(FB, LB), uB(NB, fB), uB(gB, {
              type: "map",
              values: "string"
            })]
          }]
        }
      },
      AB = {
        type: "array",
        items: {
          type: "record",
          name: "ItemDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", uB(QB, "int"), uB(sB, "string"), uB(OB, "double"), uB(wB, mB)]
          }]
        }
      },
      tB = {
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
      bB = {
        type: "record",
        name: "HotbarDeltaEntry",
        fields: [{
          name: "i",
          type: "int"
        }, {
          name: "v",
          type: ["null", uB(YB, "int"), uB(iB, tB)]
        }]
      },
      xB = {
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
      EB = {
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
      DB = {
        type: "array",
        items: {
          type: "record",
          name: "EnvironmentDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", uB(pB, "string"), uB(aB, "double"), uB(HB, mB), uB(MB, "boolean")]
          }]
        }
      },
      KB = [{
        name: "UH",
        type: "record",
        fields: [{
          name: "pos",
          type: XB
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
          type: XB
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
      VB = [{
        name: "playSound",
        type: "record",
        fields: [{
          name: "BB",
          type: "string"
        }, {
          name: "volume",
          type: "double"
        }, {
          name: "rate",
          type: "double"
        }, {
          name: "TB",
          type: ["null", {
            type: "record",
            name: "SoundPosSettings",
            fields: [{
              name: "JB",
              type: ["null", "string", mB],
              default: null
            }, {
              name: "oB",
              type: ["null", "double"],
              default: null
            }, {
              name: "GB",
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
          name: "rT",
          type: "string"
        }, {
          name: "mT",
          type: "int"
        }, {
          name: "animationScript",
          type: ["null", "string"]
        }, {
          name: "XT",
          type: "double"
        }, {
          name: "LT",
          type: "double"
        }]
      }, {
        name: "bullet",
        type: "record",
        fields: [{
          name: "yZ",
          type: "string"
        }, {
          name: "bulletDirections",
          type: {
            type: "array",
            items: mB
          }
        }]
      }, {
        name: "lifeformHealth",
        type: "record",
        fields: [{
          name: "PB",
          type: "string"
        }, {
          name: "OI",
          type: ["null", "double"],
          default: null
        }, {
          name: "YI",
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
          name: "Po",
          type: "double"
        }, {
          name: "angle",
          type: "double"
        }, {
          name: "Ro",
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
      SB = [{
        name: "position",
        type: mB
      }, {
        name: "direction",
        type: mB
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

    function BI() {
      const BB = [{
        name: "entities",
        type: {
          type: "map",
          values: lB
        }
      }, {
        name: "items",
        type: {
          type: "map",
          values: AB
        }
      }, {
        name: "camera",
        type: {
          type: "record",
          name: "ReplayCameraState",
          fields: SB
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
              items: bB
            }
          }]
        }],
        default: null
      }, {
        name: "playerHud",
        type: ["null", xB],
        default: null
      }];
      return BB.push({
        name: "effects",
        type: ["null", {
          type: "array",
          items: {
            type: "record",
            name: "ReplayActiveEffect",
            fields: [{
              name: "PB",
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
      }), BB.push({
        name: "uiElements",
        type: EB
      }, {
        name: "environment",
        type: DB
      }, {
        name: "structuralEvents",
        type: {
          type: "array",
          items: KB
        }
      }, {
        name: "ephemeralEvents",
        type: {
          type: "array",
          items: VB
        }
      }), BB
    }
    const II = {
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
                name: "Iz",
                type: "int"
              }, {
                name: "position",
                type: mB
              }, {
                name: "direction",
                type: mB
              }, {
                name: "easing",
                type: mB
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
    let ZI;

    function TI(BB) {
      if (9 === BB) return ZI ??= (IB = [{
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
            name: "bM",
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
              type: XB
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
            fields: BI()
          }
        }
      }, II], vB().Type.forSchema({
        type: "record",
        name: "RecordingState",
        fields: IB
      }, {
        zF: Object.create(null)
      })), ZI;
      var IB
    }
    var JI = ZB(2984);
    let oI, GI, vI, kI;
    const cI = 12;
    var nI, hI;
    const zI = [0, 1, 8, 255, "length", "undefined", 63, 6, "fromCodePoint", 7, 12, "push", 91, 8191, 88, 13, 14, 60, 3, void 0, !1, !0, 16, 512, 4, 15, "/", 2, 1023, 127, 31, 128, 18, 24, 32, 5, 10, 19, 64, 65535, 1e3, "s=", "=", ";", 105, 106, 107, 102, 9, 11];

    function FI(BB) {
      return typeof ZZ !== zI[5] && ZZ ? (new ZZ).decode(new TZ(BB)) : typeof JZ !== zI[5] && JZ ? JZ.from(BB).toString("utf-8") : vZ(BB)
    }

    function NI() {}

    function gI() {
      gI = function() {}
    }
    var qI, yI;
    gI(nI = {}, hI = ["JfiO5eTmRiB69F+{8z]", "(z29htc03Co>|xPjnrT9@0c5J^FB,{!i;>0R7|.#TWcOSUVjk4G^11#({DPxw", '0>"t6|Wt%E:ewpe@W[ZhT*%', "R[Lh&S:ltC0R5e(", "4fVMWrpJ%^!{z?v5Qzl[aBDrxkn$9JW>D6$Z{", "^XMCDJ&xhgnHdS(+]7%^_JnnG}Qr}DeJ", "Ki%c_I3tPmdd{M+kVz8C8QWH)^jRKF0fpw", "VXF_I3%H/;WrfD;>w2+_K?}63kJMfe]d$^@~CB9A<I6/+9v5>vTQNN!w", "Q+dRZ}:=.U{}hp*h{EJBxu_63ALdJ?`15QR(;+8G{!fxn#N4Av]", "OQFh)qot0H/MyO!v^Q0Yp", '6iiO=uZt`iBlgIsS$>V&]MMtf*X{c<">{z=(<}%', "E6:=[6,mSURh6U(Ho!#PdR>)HX9[zOhvBYINFF$&1^Z#{Jjd$v`C@T%", "`Noc`Q?vcC[~/eO1w4d^{0h=r}Q2<0bY{7DdkQXUZ2$YK1Qk2?NY_<m8=", "e?B9E~jwBWN9:p$+>I#PEJ/}HC2sw", "=2>[qZbmum[g1S%VN<$/", "XCgt|ZmJ%Hz#g:mf5mm_MJ@JaDv.4]}JUH)", "svzZh0Y)WUd!hpQH;Dky~;:w0HVD/:Y5X?&BG*^w", "q>6;];uh3XL,m0_Sm60PRxOh]", "[C:dNNFhE2I", "]hfyC3<4s.{", "1C<C_*G6rA&wUI^", "1IZOWIq6iHZD;|H4O!{@BJ|}:", "oQ0tEx8G*EWrqf>@8[pcrMn1{!+~3J{5a(]yh0fA*WqJUMsfhw", 'M[+;*uI)FIWt6e2@r.pC/*KmcCArJQ++@I!yvFU0!X*,7}{hu{xZ"x})', "Of[yVrx=3C4<eIuj#sMC_Jk=~D", 'IC|y>?Z6&!"y:J1{b?$GwMYJ1Cyx<]', "99qYb~%", "kfEtQl*q^!gU?}tO&!]hB;bmC}}r6|GS/6BYc402l2Yxo:", "{ziTuZHGPmg<9]C1wI>h(<t@.^I?v|}59_PCO", "+QOyqa;hLW29AFH.s_St#S8@fiHUP9Oi_VR(", "HH#PoT;5?*[,KE>v]1ky>eB[#IJMw", "^2iTZ|y)", "YE%@ZW`5~s~159^dId~B?[|8UD$WOf>iC>B=EX%", "$i/yH~Y8d2n:/+%v1vGT}N^{9A{]JF/{B?eYCjDG<N+u/l8V$Y;tSnN2nU[", "MC(c[P%r^;lr.QdirafO/S<6/.>*/er+pXW^|l/J?D{[w", 'p(3f<["Xkm3Z!<BO(9%^rM*m<,4~IM^', "jv|[rZg0BDji+9v4?>+/S+hNA2N#l9", "TWV&9N9VnAUuI8w8{^uYoSyt%IFo(+(", "IzcOC+oq7i~N%OIVLz$ZI3;vIW>d9Q^j3jVOyC^&>m1?w", "JEe/ontt$IGC$rw+Hm<(J?<}:", "u+]h)N0kA2&B}PRksz*^ES98THGp[}sS,+~:k?![AHH8CPyHd>#Cm~%", "^_)O;utA8.llU<mfn<T~czZ4f!IB?S}Y@E;^", "(f(~w39qAmll$S(+m7jRy4`vmgD|dS`vsz(=j0>J;}7", ";Cx;nXQ[=U_68]nYg_a/H", "Zm>&aB46R.y8w", '#WLh"~[5KiuoUJ{v3(otZr:U?iY}ZU[>]_hd0}oJW}[8C+Ef8ISRp', 'e.qtu;&=dmyMkD!+7!"P?[;w', '2Rw&e<ymf*)(#]^kC<w[aB"5c2:z%', "hQ5[ltv=%Hc>bPn1bVrQZ|[=i^NgjS?V+<BZmq|tM!a8_l~j|[x/@", "Y>=c8t6A<I/zvOaSP[L=xx@)dH6,WE.5", "R<xY{0;1(", "]g(~oTRU+CNd+M}Jr%", "cXrRD*/H[muGxI*VGHuP]>E5w2)+;S.4n{%c(NYJwIt~J9;4~>*tm<ew", "|<hY{Tqm?i&sB8_f`*FNDX}_ZITw9]M+#aTP]q&wEmw0GO[>7.#PSeS#?i", "bGp^_IK*^;.}x9;YA46Y6e![(;a;=SOiohQt8X_t6Gm/(:", "4+c(L&jky,&NQS;>q.*9i*.}UDd=_PBjsf0^RIikZ23H>U;51X]M*uSJ@?j", "u!1_?6Fx$X`BeJ{v$]6donjl6G;2>U3YLm*9x_*#qA!P7DX52D?BU;)@!EG[w", "^4<CdT<}QU", 'NQBY26MH^.Q#"]"5T(u9', "#d6=9*H}9^sz6)<>pm&h9*#8vA+RPU&kcI^&3tiUwI3ygpjkjX}[}}!X9", "BdmhD<%", "tm7MBJLtym5#aeC>)EvPjPeh8}`:w", "gzjP@05XjA<#=E9HL!+=`0[58i!,$DEO3>5OJ1H_6,^ew", "]h~Z4z:NZkg~!M++&s0RHx1hV.~J[DIiXC7_`~L)Fm&1w", "}!+_U_%@pEp+<FYJY6RC%}sk!^QHJQ2V=9GcYSQ5QAY~0D8>6d5@QZXw", 'oXNd=*~})m"JuDE.FD[GpZXw', "TsuYEJqm(k6=WOW1wIS=gx%", "&a)h:M2hi,&6^M[>=1@t5171$XD.EDBkZ[?_G*WHqU/.1DnY.20tRI%", "A<=cJeIHt^DzWJ!+><&fgx~}:", "R*1/iS8GpE_rW]D", "ofcOZ|xw", "=2jRoTd0lH)OfeijA(VO`001D?_1&Dm", 'ZmA^P&ikWiqB~9s{JCKR;r|6i2yt"S81}*pOw<>teG', "I4+/DJ|_8}Vi~]", "^9yC7#J8WUZx>)NY>_./;63>Zmt=9Q97YIU/i~bt4}PPw", ">GFy!9O<", 't|p0"O)x', '<+y("G4A', "bW)6bi/S", "s]{HtFjS", "puILH", 'NAhVpJ"j', "UfT5K9/p", "22Nme", "iz#I?%z}", ">Uui", 'j=om(ZA7xT"2Z!MZ', "06%iGZ#U9~eYwyFH", "76AbaHZ7^ixDQ!9Z", "j#<aK.PU~G:hY!59", "xTqao8~+C2KKpb7", 'E^`&s#"3', "f)ifSDh3", "</vr%", "f)if17@x", "l;`g4", 'xf>lGj3?G"~L9jh}l%b91"$K6r', "5GK$|y;Y%Nt^K>v_#9?I*0sW4M", "!bYe/TZ<NSRT`Y5N7n[|7@dbtJ", "&!WyR0i<", "bW)6r92S", "Uk@p$c;d", "ma;!?Ek|", "oEV)UIs|", "v!]1B", "dY8~", "0YV)7Qb|", "5!o<", "LYpw4Kx|", "]SA9", "v)2ZJrS^", "_Zi!4y=w", "j?9l<wso", "7/^X^n.o", "W#[,ePTS"]), gI(IZ = function() {
      var BB, IB, ZB, TB = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      gI(BB = void 0, IB = []);
      try {
        gI(BB = Object, IB[zI[11]]("".__proto__.constructor.name))
      } catch (TZ) {}
      BB: for (ZB = zI[0]; ZB < TB[zI[4]]; ZB++) try {
        var JB;
        for (BB = TB[ZB](), JB = zI[0]; JB < IB[zI[4]]; JB++)
          if (typeof BB[IB[JB]] === zI[5]) continue BB;
        return BB
      } catch (TZ) {}
      return BB || this
    }() || {}, ZZ = IZ.TextDecoder, TZ = IZ.Uint8Array, JZ = IZ.UN, oZ = IZ.String || String, GZ = IZ.Array || Array, vZ = function() {
      var BB, IB, ZB = new GZ(zI[31]);
      return gI(BB = oZ[zI[8]] || oZ.fromCharCode, IB = []),
        function(TB) {
          var JB, oB, GB, vB;
          for (gI(oB = void 0, GB = TB[zI[4]], IB[zI[4]] = zI[0]), vB = zI[0]; vB < GB;) gI(oB = TB[vB++], oB <= zI[29] ? JB = oB : oB <= 223 ? JB = (oB & zI[30]) << zI[7] | TB[vB++] & zI[6] : oB <= 239 ? JB = (oB & zI[25]) << zI[10] | (TB[vB++] & zI[6]) << zI[7] | TB[vB++] & zI[6] : oZ[zI[8]] ? JB = (oB & zI[9]) << zI[32] | (TB[vB++] & zI[6]) << zI[10] | (TB[vB++] & zI[6]) << zI[7] | TB[vB++] & zI[6] : (JB = zI[6], vB += zI[18]), IB[zI[11]](ZB[JB] || (ZB[JB] = BB(JB))));
          return IB.join("")
        }
    }()), (() => {
      function BB(BB) {
        return typeof nI[BB] === zI[5] ? nI[BB] = function(BB) {
          var IB, ZB, TB, JB, oB, GB, vB;
          for (gI(IB = "" + (BB || ""), ZB = IB.length, TB = [], JB = zI[0], oB = zI[0], GB = -zI[1]), vB = zI[0]; vB < ZB; vB++) {
            var kB = 'N<SAtBRQcaU3ZM[uJX/x21hCDqH`!d#p6I?)kV;:G>r7~"^v(n5fT]}0Kb4gjwY$meE8WFLlPsyo_izO9+@{*&,%=.|'.indexOf(IB[vB]);
            if (kB !== -zI[1])
              if (GB < zI[0]) GB = kB;
              else {
                gI(GB += kB * zI[12], JB |= GB << oB, oB += (GB & zI[13]) > zI[14] ? zI[15] : zI[16]);
                do {
                  gI(TB.push(JB & zI[3]), JB >>= zI[2], oB -= zI[2])
                } while (oB > zI[9]);
                GB = -zI[1]
              }
          }
          return GB > -zI[1] && TB.push((JB | GB << oB) & zI[3]), FI(TB)
        }(hI[BB]) : nI[BB]
      }
      BB(75);
      const IB = zI[22],
        ZB = BB(78) + BB(79) + BB(80),
        TB = [zI[0], zI[1], zI[27], zI[18]].map((BB => {
          let IB = zI[0];
          for (let TB = zI[18]; TB >= zI[0]; TB--) {
            function JB(BB) {
              var IB, ZB, TB, JB, oB, GB, vB;
              for (gI(IB = "" + (BB || ""), ZB = IB.length, TB = [], JB = zI[0], oB = zI[0], GB = -zI[1]), vB = zI[0]; vB < ZB; vB++) {
                var kB = ',jpqVmr#4zaBwbc2?[Iv];<f16uQleDh|O@*ZGtK/W&Yi=E9!R$kT5U>H}_`J+Anx%()N{Pds80:MyCoF"SgL~73.X^'.indexOf(IB[vB]);
                if (kB !== -zI[1])
                  if (GB < zI[0]) GB = kB;
                  else {
                    gI(GB += kB * zI[12], JB |= GB << oB, oB += (GB & zI[13]) > zI[14] ? zI[15] : zI[16]);
                    do {
                      gI(TB.push(JB & zI[3]), JB >>= zI[2], oB -= zI[2])
                    } while (oB > zI[9]);
                    GB = -zI[1]
                  }
              }
              return GB > -zI[1] && TB.push((JB | GB << oB) & zI[3]), FI(TB)
            }

            function oB(BB) {
              return typeof nI[BB] === zI[5] ? nI[BB] = JB(hI[BB]) : nI[BB]
            }

            function GB() {
              var BB;
              gI(BB = function(IB, ZB, TB) {
                var JB, oB, GB, vB = {};
                if (IB[ZB + TB] !== zI[19]) return IB[ZB + TB];
                if (ZB === TB) return zI[21];
                for (JB = zI[0]; JB < ZB.length; JB++) vB[ZB[JB]] === zI[19] && (vB[ZB[JB]] = zI[0]), vB[TB[JB]] === zI[19] && (vB[TB[JB]] = zI[0]), gI(vB[ZB[JB]]++, vB[TB[JB]]--);
                for (oB in vB)
                  if (vB[oB] !== zI[0]) return IB[ZB + TB] = zI[20], zI[20];
                for (GB = zI[1]; GB < ZB.length; GB++)
                  if (BB(IB, ZB.substr(zI[0], GB), TB.substr(zI[0], GB)) && BB(IB, ZB.substr(GB), TB.substr(GB)) || BB(IB, ZB.substr(zI[0], GB), TB.substr(TB.length - GB)) && BB(IB, ZB.substr(GB), TB.substr(zI[0], TB.length - GB))) return IB[ZB + TB] = zI[21], zI[21];
                return IB[ZB + TB] = zI[20], zI[20]
              }, console.log((function(IB, ZB) {
                return BB({}, IB, ZB)
              })))
            }
            oB(81) + "N" in NI && GB(), IB = IB << zI[2] | ZB[oB(82) + oB(83)](BB * zI[24] + TB)
          }
          return IB >>> zI[0]
        })),
        JB = (BB, IB) => BB << IB | BB >>> zI[34] - IB,
        oB = (BB, IB, ZB, TB, oB) => {
          (function(BB) {
            return typeof nI[BB] === zI[5] ? nI[BB] = function(BB) {
              var IB, ZB, TB, JB, oB, GB, vB;
              for (gI(IB = "" + (BB || ""), ZB = IB.length, TB = [], JB = zI[0], oB = zI[0], GB = -zI[1]), vB = zI[0]; vB < ZB; vB++) {
                var kB = '6}!4spR|FX"7hyGK[H]`<5/e+&mTIU.go8DuPWV,nv$xMJ1b(@_2%;0BEjQc:iwNL^fO*3YzZAaq~l=k{dtr?#)>9CS'.indexOf(IB[vB]);
                if (kB !== -zI[1])
                  if (GB < zI[0]) GB = kB;
                  else {
                    gI(GB += kB * zI[12], JB |= GB << oB, oB += (GB & zI[13]) > zI[14] ? zI[15] : zI[16]);
                    do {
                      gI(TB.push(JB & zI[3]), JB >>= zI[2], oB -= zI[2])
                    } while (oB > zI[9]);
                    GB = -zI[1]
                  }
              }
              return GB > -zI[1] && TB.push((JB | GB << oB) & zI[3]), FI(TB)
            }(hI[BB]) : nI[BB]
          })(84) + "0" in NI && function() {
            var BB = function() {
              var BB, IB, ZB = zI[0];

              function TB(BB) {
                return cB(vB(zB(BB)))
              }

              function JB(BB, IB) {
                return cB(kB(zB(BB), zB(IB)))
              }

              function oB(BB, IB) {
                return nB(kB(zB(BB), zB(IB)))
              }

              function GB(BB, IB, ZB) {
                return hB(kB(zB(BB), zB(IB)), ZB)
              }

              function vB(BB) {
                return NB(sB(FB(BB), BB.length * zI[2]))
              }

              function kB(BB, IB) {
                var ZB, TB, JB = FB(BB);
                JB.length > zI[22] && (JB = sB(JB, BB.length * zI[2]));
                var oB = Array(zI[22]),
                  GB = Array(zI[22]);
                for (ZB = zI[0]; ZB < zI[22]; ZB++) gI(oB[ZB] = 909522486 ^ JB[ZB], GB[ZB] = 1549556828 ^ JB[ZB]);
                return TB = sB(oB.concat(FB(IB)), zI[23] + IB.length * zI[2]), NB(sB(GB.concat(TB), zI[23] + 256))
              }

              function cB(BB) {
                var IB, TB, JB, oB;

                function GB(BB) {
                  var IB, ZB, TB, JB, oB, GB, vB, kB = '63x$>,[0uv./;w@"*%_qzo({O4tfKFnlEp1Y#+N}ih:WaD|k^2HrJgR9VdC=UB8Ms)QA7!j&eycZGL?SX5]P`~mIbT<';
                  for (gI(IB = "" + (BB || ""), ZB = IB.length, TB = [], JB = zI[0], oB = zI[0], GB = -zI[1]), vB = zI[0]; vB < ZB; vB++) {
                    var cB = kB.indexOf(IB[vB]);
                    if (cB !== -zI[1])
                      if (GB < zI[0]) GB = cB;
                      else {
                        gI(GB += cB * zI[12], JB |= GB << oB, oB += (GB & zI[13]) > zI[14] ? zI[15] : zI[16]);
                        do {
                          gI(TB.push(JB & zI[3]), JB >>= zI[2], oB -= zI[2])
                        } while (oB > zI[9]);
                        GB = -zI[1]
                      }
                  }
                  return GB > -zI[1] && TB.push((JB | GB << oB) & zI[3]), FI(TB)
                }

                function vB(BB) {
                  return typeof nI[BB] === zI[5] ? nI[BB] = GB(hI[BB]) : nI[BB]
                }
                for (gI(IB = ZB ? vB(zI[12]) + vB(92) + vB(93) : vB(zI[12]) + vB(94) + vB(95), TB = "", JB = void 0), oB = zI[0]; oB < BB.length; oB++) gI(JB = BB.charCodeAt(oB), TB += IB.charAt(JB >>> zI[24] & zI[25]) + IB.charAt(JB & zI[25]));
                return TB
              }

              function nB(IB) {
                var ZB, TB, JB, oB;

                function GB(BB) {
                  var IB, ZB, TB, JB, oB, GB, vB, kB = '6AQDPlfJUIeBkYLrhNFMCpREKO#}w9$x+.`;_o@:?<~%8V&gj|zb^,t/n"=5{i[yvGSqm4cHuXs70a2d!1T>3)W*(Z]';
                  for (gI(IB = "" + (BB || ""), ZB = IB.length, TB = [], JB = zI[0], oB = zI[0], GB = -zI[1]), vB = zI[0]; vB < ZB; vB++) {
                    var cB = kB.indexOf(IB[vB]);
                    if (cB !== -zI[1])
                      if (GB < zI[0]) GB = cB;
                      else {
                        gI(GB += cB * zI[12], JB |= GB << oB, oB += (GB & zI[13]) > zI[14] ? zI[15] : zI[16]);
                        do {
                          gI(TB.push(JB & zI[3]), JB >>= zI[2], oB -= zI[2])
                        } while (oB > zI[9]);
                        GB = -zI[1]
                      }
                  }
                  return GB > -zI[1] && TB.push((JB | GB << oB) & zI[3]), FI(TB)
                }

                function vB(BB) {
                  return typeof nI[BB] === zI[5] ? nI[BB] = GB(hI[BB]) : nI[BB]
                }
                for (gI(ZB = vB(96) + vB(97) + vB(98) + zI[26], TB = "", JB = IB.length), oB = zI[0]; oB < JB; oB += zI[18]) {
                  var kB, cB = IB.charCodeAt(oB) << zI[22] | (oB + zI[1] < JB ? IB.charCodeAt(oB + zI[1]) << zI[2] : zI[0]) | (oB + zI[27] < JB ? IB.charCodeAt(oB + zI[27]) : zI[0]);
                  for (kB = zI[0]; kB < zI[24]; kB++) oB * zI[2] + kB * zI[7] > IB.length * zI[2] ? TB += BB : TB += ZB.charAt(cB >>> zI[7] * (zI[18] - kB) & zI[6])
                }
                return TB
              }

              function hB(BB, IB) {
                var ZB, TB, JB, oB, GB, vB, kB, cB, nB = IB.length;
                for (ZB = Array(), TB = Array(Math.ceil(BB.length / zI[27])), GB = zI[0]; GB < TB.length; GB++) TB[GB] = BB.charCodeAt(GB * zI[27]) << zI[2] | BB.charCodeAt(GB * zI[27] + zI[1]);
                for (; TB.length > zI[0];) {
                  for (gI(cB = Array(), kB = zI[0]), GB = zI[0]; GB < TB.length; GB++) gI(kB = (kB << zI[22]) + TB[GB], vB = Math.floor(kB / nB), kB -= vB * nB), (cB.length > zI[0] || vB > zI[0]) && (cB[cB.length] = vB);
                  gI(ZB[ZB.length] = kB, TB = cB)
                }
                for (JB = "", GB = ZB.length - zI[1]; GB >= zI[0]; GB--) JB += IB.charAt(ZB[GB]);
                for (oB = Math.ceil(BB.length * zI[2] / (Math.log(IB.length) / Math.log(zI[27]))), GB = JB.length; GB < oB; GB++) JB = IB[zI[0]] + JB;
                return JB
              }

              function zB(BB) {
                var IB, ZB, TB, JB = "";
                for (IB = -zI[1]; ++IB < BB.length;) gI(ZB = BB.charCodeAt(IB), TB = IB + zI[1] < BB.length ? BB.charCodeAt(IB + zI[1]) : zI[0]), 55296 <= ZB && ZB <= 56319 && 56320 <= TB && TB <= 57343 && gI(ZB = 65536 + ((ZB & zI[28]) << zI[36]) + (TB & zI[28]), IB++), ZB <= zI[29] ? JB += String.fromCharCode(ZB) : ZB <= 2047 ? JB += String.fromCharCode(192 | ZB >>> zI[7] & zI[30], zI[31] | ZB & zI[6]) : ZB <= zI[39] ? JB += String.fromCharCode(224 | ZB >>> zI[10] & zI[25], zI[31] | ZB >>> zI[7] & zI[6], zI[31] | ZB & zI[6]) : ZB <= 2097151 && (JB += String.fromCharCode(240 | ZB >>> zI[32] & zI[9], zI[31] | ZB >>> zI[10] & zI[6], zI[31] | ZB >>> zI[7] & zI[6], zI[31] | ZB & zI[6]));
                return JB
              }

              function FB(BB) {
                var IB, ZB = Array(BB.length >> zI[27]);
                for (IB = zI[0]; IB < ZB.length; IB++) ZB[IB] = zI[0];
                for (IB = zI[0]; IB < BB.length * zI[2]; IB += zI[2]) ZB[IB >> zI[35]] |= (BB.charCodeAt(IB / zI[2]) & zI[3]) << zI[33] - IB % zI[34];
                return ZB
              }

              function NB(BB) {
                var IB, ZB = "";
                for (IB = zI[0]; IB < BB.length * zI[34]; IB += zI[2]) ZB += String.fromCharCode(BB[IB >> zI[35]] >>> zI[33] - IB % zI[34] & zI[3]);
                return ZB
              }

              function gB(BB, IB) {
                return BB >>> IB | BB << zI[34] - IB
              }

              function qB(BB, IB) {
                return BB >>> IB
              }

              function yB(BB, IB, ZB) {
                return BB & IB ^ ~BB & ZB
              }

              function UB(BB, IB, ZB) {
                return BB & IB ^ BB & ZB ^ IB & ZB
              }

              function WB(BB) {
                return gB(BB, zI[27]) ^ gB(BB, zI[15]) ^ gB(BB, 22)
              }

              function dB(BB) {
                return gB(BB, zI[7]) ^ gB(BB, zI[49]) ^ gB(BB, 25)
              }

              function CB(BB) {
                return gB(BB, zI[9]) ^ gB(BB, zI[32]) ^ qB(BB, zI[18])
              }

              function QB(BB) {
                return gB(BB, 17) ^ gB(BB, zI[37]) ^ qB(BB, zI[36])
              }

              function sB(BB, ZB) {
                var TB, JB, oB, GB, vB, kB, cB, nB, hB, zB, FB, NB, gB, qB = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225);
                for (TB = new Array(zI[38]), gI(BB[ZB >> zI[35]] |= zI[31] << zI[33] - ZB % zI[34], BB[(ZB + zI[38] >> zI[48] << zI[24]) + zI[25]] = ZB), zB = zI[0]; zB < BB.length; zB += zI[22]) {
                  for (gI(JB = qB[zI[0]], oB = qB[zI[1]], GB = qB[zI[27]], vB = qB[zI[18]], kB = qB[zI[24]], cB = qB[zI[35]], nB = qB[zI[7]], hB = qB[zI[9]]), FB = zI[0]; FB < zI[38]; FB++) gI(FB < zI[22] ? TB[FB] = BB[FB + zB] : TB[FB] = wB(wB(wB(QB(TB[FB - zI[27]]), TB[FB - zI[9]]), CB(TB[FB - zI[25]])), TB[FB - zI[22]]), NB = wB(wB(wB(wB(hB, dB(kB)), yB(kB, cB, nB)), IB[FB]), TB[FB]), gB = wB(WB(JB), UB(JB, oB, GB)), hB = nB, nB = cB, cB = kB, kB = wB(vB, NB), vB = GB, GB = oB, oB = JB, JB = wB(NB, gB));
                  gI(qB[zI[0]] = wB(JB, qB[zI[0]]), qB[zI[1]] = wB(oB, qB[zI[1]]), qB[zI[27]] = wB(GB, qB[zI[27]]), qB[zI[18]] = wB(vB, qB[zI[18]]), qB[zI[24]] = wB(kB, qB[zI[24]]), qB[zI[35]] = wB(cB, qB[zI[35]]), qB[zI[7]] = wB(nB, qB[zI[7]]), qB[zI[9]] = wB(hB, qB[zI[9]]))
                }
                return qB
              }

              function wB(BB, IB) {
                var ZB = (BB & zI[39]) + (IB & zI[39]);
                return (BB >> zI[22]) + (IB >> zI[22]) + (ZB >> zI[22]) << zI[22] | ZB & zI[39]
              }
              return BB = "", IB = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                hex: TB,
                b64: oB,
                any: GB,
                hex_hmac: JB,
                b64_hmac: oB,
                any_hmac: GB
              }
            }();
            console.log(BB)
          }(), gI(BB[IB] += BB[ZB], BB[oB] = JB(BB[oB] ^ BB[IB], zI[22]), BB[TB] += BB[oB], BB[ZB] = JB(BB[ZB] ^ BB[TB], zI[10]), BB[IB] += BB[ZB], BB[oB] = JB(BB[oB] ^ BB[IB], zI[2]), BB[TB] += BB[oB], BB[ZB] = JB(BB[ZB] ^ BB[TB], zI[9]))
        };
      kI = (ZB, JB, GB, vB) => {
        function kB(BB) {
          return typeof nI[BB] === zI[5] ? nI[BB] = function(BB) {
            var IB, ZB, TB, JB, oB, GB, vB;
            for (gI(IB = "" + (BB || ""), ZB = IB.length, TB = [], JB = zI[0], oB = zI[0], GB = -zI[1]), vB = zI[0]; vB < ZB; vB++) {
              var kB = 'D;|.<#y71O~3[*mYW`0Ap8sL+qxJ?Bde)HXC9ob}$lrc"Nk6hzT=v%!I@/GRanu,^Z5Vi2PE>(QfUw4M&KS]{jFgt:_'.indexOf(IB[vB]);
              if (kB !== -zI[1])
                if (GB < zI[0]) GB = kB;
                else {
                  gI(GB += kB * zI[12], JB |= GB << oB, oB += (GB & zI[13]) > zI[14] ? zI[15] : zI[16]);
                  do {
                    gI(TB.push(JB & zI[3]), JB >>= zI[2], oB -= zI[2])
                  } while (oB > zI[9]);
                  GB = -zI[1]
                }
            }
            return GB > -zI[1] && TB.push((JB | GB << oB) & zI[3]), FI(TB)
          }(hI[BB]) : nI[BB]
        }
        BB(99);
        const cB = new DataView(JB[kB(zI[47])], JB[kB(103) + kB(104)], cI),
          nB = new Uint32Array(IB);
        gI(nB[kB(zI[44])](TB), nB[kB(zI[44])](ZB, zI[24]), nB[zI[15]] = cB[kB(zI[45]) + kB(zI[46])](zI[0], zI[21]), nB[zI[16]] = cB[kB(zI[45]) + kB(zI[46])](zI[24], zI[21]), nB[zI[25]] = cB[kB(zI[45]) + kB(zI[46])](zI[2], zI[21]));
        const hB = new Uint32Array(IB),
          zB = new Uint8Array(hB[kB(zI[47])]);
        for (let FB = zI[0], NB = GB; FB < vB[kB(108)]; FB += IB * zI[24], NB++) {
          function gB(BB) {
            var IB, ZB, TB, JB, oB, GB, vB;
            for (gI(IB = "" + (BB || ""), ZB = IB.length, TB = [], JB = zI[0], oB = zI[0], GB = -zI[1]), vB = zI[0]; vB < ZB; vB++) {
              var kB = '1@^{=8.Dq9:<ix[)0~"j2pwvGFSK3f(|!d&Lu;O+?%chN_X]oygCW6sHz/RkB,4TAV*>aEb}Q5lIYZJPtr7M`#$Umne'.indexOf(IB[vB]);
              if (kB !== -zI[1])
                if (GB < zI[0]) GB = kB;
                else {
                  gI(GB += kB * zI[12], JB |= GB << oB, oB += (GB & zI[13]) > zI[14] ? zI[15] : zI[16]);
                  do {
                    gI(TB.push(JB & zI[3]), JB >>= zI[2], oB -= zI[2])
                  } while (oB > zI[9]);
                  GB = -zI[1]
                }
            }
            return GB > -zI[1] && TB.push((JB | GB << oB) & zI[3]), FI(TB)
          }

          function qB(BB) {
            return typeof nI[BB] === zI[5] ? nI[BB] = gB(hI[BB]) : nI[BB]
          }
          gI(nB[zI[10]] = NB, hB[kB(zI[44])](nB));
          for (let UB = zI[0]; UB < zI[36]; UB++) gI(oB(hB, zI[0], zI[24], zI[2], zI[10]), oB(hB, zI[1], zI[35], zI[48], zI[15]), oB(hB, zI[27], zI[7], zI[36], zI[16]), oB(hB, zI[18], zI[9], zI[49], zI[25]), oB(hB, zI[0], zI[35], zI[36], zI[25]), oB(hB, zI[1], zI[7], zI[49], zI[10]), oB(hB, zI[27], zI[9], zI[2], zI[15]), oB(hB, zI[18], zI[24], zI[48], zI[16]));
          for (let WB = zI[0]; WB < IB; WB++) hB[WB] += nB[WB];
          const yB = Math[qB(109)](IB * zI[24], vB[qB(110)] - FB);
          for (let dB = zI[0]; dB < yB; dB++) {
            function CB(BB) {
              var IB, ZB, TB, JB, oB, GB, vB;
              for (gI(IB = "" + (BB || ""), ZB = IB.length, TB = [], JB = zI[0], oB = zI[0], GB = -zI[1]), vB = zI[0]; vB < ZB; vB++) {
                var kB = '7w)<5DZ9s={nkHo>*20U,Vvq8iFGzRYP1rW}xf_(EtI|[cpXb4~y$T%Q":&6+#dej/C@^.`KugB?Oa!Jl;SM]mL3NAh'.indexOf(IB[vB]);
                if (kB !== -zI[1])
                  if (GB < zI[0]) GB = kB;
                  else {
                    gI(GB += kB * zI[12], JB |= GB << oB, oB += (GB & zI[13]) > zI[14] ? zI[15] : zI[16]);
                    do {
                      gI(TB.push(JB & zI[3]), JB >>= zI[2], oB -= zI[2])
                    } while (oB > zI[9]);
                    GB = -zI[1]
                  }
              }
              return GB > -zI[1] && TB.push((JB | GB << oB) & zI[3]), FI(TB)
            }

            function QB(BB) {
              return typeof nI[BB] === zI[5] ? nI[BB] = CB(hI[BB]) : nI[BB]
            }

            function sB() {
              function BB(BB) {
                return typeof nI[BB] === zI[5] ? nI[BB] = function(BB) {
                  var IB, ZB, TB, JB, oB, GB, vB;
                  for (gI(IB = "" + (BB || ""), ZB = IB.length, TB = [], JB = zI[0], oB = zI[0], GB = -zI[1]), vB = zI[0]; vB < ZB; vB++) {
                    var kB = 'QoS=M1lAT[RN8E}GmZ2Uy$Yj9h(p@x)6zB/C!q3;{sJ75#f.FDn,%_ewviPbgI4u>:H*"`<KVr|X]W&d+^kOc~Lt?a0'.indexOf(IB[vB]);
                    if (kB !== -zI[1])
                      if (GB < zI[0]) GB = kB;
                      else {
                        gI(GB += kB * zI[12], JB |= GB << oB, oB += (GB & zI[13]) > zI[14] ? zI[15] : zI[16]);
                        do {
                          gI(TB.push(JB & zI[3]), JB >>= zI[2], oB -= zI[2])
                        } while (oB > zI[9]);
                        GB = -zI[1]
                      }
                  }
                  return GB > -zI[1] && TB.push((JB | GB << oB) & zI[3]), FI(TB)
                }(hI[BB]) : nI[BB]
              }

              function IB(BB) {
                if (!BB) return -zI[1];
                const ZB = IB(BB.left),
                  TB = IB(BB.right),
                  JB = Math.abs(ZB - TB);
                if (ZB === 1 / 0 || TB === 1 / 0 || JB > zI[1]) return 1 / 0;
                return Math.max(ZB, TB) + zI[1]
              }
              window[BB(112) + BB(113) + BB(114) + "_"] = {
                buildCharacterMap: function(BB) {
                  const IB = {};
                  for (let ZB of BB.replace(/[^w]/g, "").toLowerCase()) IB[ZB] = IB[ZB] + zI[1] || zI[1];
                  return IB
                },
                isAnagrams: function(BB, IB) {
                  const ZB = buildCharMap(BB),
                    TB = buildCharMap(IB);
                  for (let JB in ZB)
                    if (ZB[JB] !== TB[JB]) return zI[20];
                  return Object.keys(ZB).length !== Object.keys(TB).length ? zI[20] : zI[21]
                },
                isBalanced: function(BB) {
                  return IB(BB) !== 1 / 0
                },
                getHeightBalanced: IB
              }
            }
            QB(111) in NI && sB(), vB[FB + dB] ^= zB[dB]
          }
        }
      }
    })();
    const UI = ["b", 0, 1, "h", 3, 56, 9, "g", 225, "f", 8, 255, "length", "e", 2, 68, "d", 4, "undefined", void 0, "c", 244, 144, 63, 6, "fromCodePoint", 7, 12, "push", "a", null, 10, 168, 146, 230, 91, 123, 8191, 88, 13, 14, 33554432, 67108864, 155, 116, 5, 167, 223, "i", 55, 16, 127, 128, 100, 193, 106, 134, 93, 187, 152, 37, 98, 246, 96, 11, 87, 147];

    function WI(...BB) {
      return BB[UI[12]] = UI[2], typeof ZZ !== UI[18] && ZZ ? (new ZZ).decode(new TZ(BB[UI[1]])) : typeof JZ !== UI[18] && JZ ? JZ.from(BB[UI[1]]).toString("utf-8") : vZ(BB[UI[1]])
    }

    function dI() {}

    function CI() {
      CI = function() {}
    }
    CI(qI = {}, yI = ['kDwzI{G_GU"SdjpN3V$B.,((A^c;CjJvq:O[Jauq!q3aAu', "ZiIFw5c?De", "zPPg?(yEW2!./~}?^u=zIa)E4U^qR:Nk|2|YP{^,l/bKTS:U(gL7", "U=$QLz4M(PMSacGXi@%1IiXq}%9CFxs{C>g1=xBTKem", "vmdsB&qd:2ZDea#v$mog1=2bM9Lxqvasog)BrylMAM2^b", "j6:QABB<|%0M7[xjZ<Qzn5f", ";[cYH0tK~avI.~Y5)_y/", 'ur)g$g_MtmWnw5IdYMlSN$S}G_p2"=m?^<>', "ERIFOwj?x9A*b", "TEy/VA*7i^!Eb", 'x2`B/D$imoX|E>64.=~@AktKW_wx_HA`#n=Hm6B?|%]XlA7NI">', "5.WB7}1E%oJ^Y~Q<,kuY?y`.~MVFzcy4jaL7", '%/DH$vK.L,"_yRc?Ogsu', "mg5$5K!$@", 'IUw"vHkdcEH:(:H[92MSAawTL2ZjY~2n9v0iKg4d.q)dIub{}+>', "c#9HS{0$z2h*9Rknx:g;6|R,A:,7p:W+lrGgakHb", '3#Q@>xhqlmg2U2OVskOi~={l"2C1tu8~#_g,gHf', 'rV6upSzk>abKY{4Mtg"V`2+xTekIR>', "^6vV%_5MlEi,EjoZ3V6z!.aqfMD**dusm=$F49BTE2@kb", "qO8*m|f", "+Z!@_SG$M9`", "@ru<!tf", 'gvs"[m_6xaGoa>~kRHNjQ,{d#q=BWKfrwg8@I{<IDat_!>t)Lgfgh|Zb', "q_Zz2kml0T)I0D#NhDjFThcT,quZE2odF.2<smf", "{mE<Ikf", '?@z<_SPbeq}Bj>c"Vr>1e.odlR&dZh<ZSmH@7,)qmoteJH8<.m/(n', "{=mH!=h4oElS)Ad)", '!)mVg#ITWeUzbAR[5gi,OaLE,oDnZlM"Lv6$Yx_E"nTwD>', "X6,7G.|$s9;Au+Vv^1[(W(hqdU@@5A+%dg*1l6|6A_k:HSVv", '2>>1/xiip%DVoRFVOD4*Q|mM6CD*%j?M;[D@"`Ssz^eDbS;VRb', 'nmT$26wgVaUS">*[Z<9/]21EN:', "d<XuSh0k[_#y`|04AVAVHOsEW:bgb", "K[|;rm83A,a9Ba`n)Zhg;{%<JEqCaR+VC_pF7k``r;+*b", 'Vm,V6B*7TJ3M"2/%zUkgW93T/QUSu{a)E[O,sKfy%%7/|xQ<ogS*J_f', "HDk<5K#$6RSBojd?)_7mt`(b", 'ErTFb6k$s2:slYtMPOAFow%<a;tzd=7M"R8HYDnN~J7P;+(5KUC/R.]Zu', '>[f/|IfsCT!%Oj;vDEG;mSxg~R[@">', "Z@9z8$qs!PourqL[+>Ti+mWojPP#p>&jLO{7", "4n5$x5kEt9NQ~KE", "S:#$wz>8VehVOjmj?O$F<`<%&_x^K:4N%=7@w=<?voeV]d#dEi)(7Q^7$ouAb", "v.ns;Q:$}q*^.D3j?@5Q.,2<(_AetS55K/(<1=HTh/qeb", "028mi5z6Y", 'pgiYt`}dYociPu5%5PA"KHMiyEQ#$jV)kg7Ld', "S)pYd=;$a_BMASG?[6_V!zfs^UW", "/M;t%I`T|9**0yejSgoHYI:o1E[SMAykda_HyiG$<Mo#eDS%;HWBvvZbY", "mU=$,Ciq:ek_yR<ZBO5Qwh;;lE", "|>[j:5f", "V>}7_kAT=ogzzD5d0N3hrm!}u", "EH:VrHr74T6Ioa`n/<Jg@Sss|/LizD:", 'nm9@8he<W^}{BSX4!kv7{mx`62r:PD_s#_Z@L&|4;Ps7E>%UGneF"4f', "H&d(5Km$tmBx)TQ<`<:VfSrI1EG</{fr4ggiL_f", 'qkX"f+5s3m@AI{645=DmSk!}iU<q^[N`Wg{Vt4ksY%p9qNh"', '"Uft&Ab,o/RP)A/', 'fe`<i5h}:Mnv2|n4}"1sN', ':MWFx_wwn9!xLNSvT[p,9i77pa$"TDh4%EuFcIb,|%Y|_vw[>`>', 'Z@hjBcN7IoDH*d=5.UmV6|6E&,39YDuVO_V*p_.`H/nw4SC)>[kS"2f', "Mg0V*Ihly/XD(#Js!**@R{?.ACxp2>rNA_q<A0%<}o,V!Rc?i&a7Ck>Nz;C", 'O&/@ehbTn/w#%Rvsja9@^hy6%%Pb02fr$[5"8c9?{."', 'm&|;Wgu)NP=B]xud"Usz}hwIG:', "4[z,QkgTL;}{+q]<:.G,m#f;(P;S[|PZ", 'qUBh,|n?=os7c:e?Xm0,)*9ZRJSb#H>NA"kSb6:$tmo$H~XjfEa<^Qw7(:X@b', '#U9$h(y4p%,*2j5d"b', "!_kjehms_,n@6ve``v>SYwZ7/PYmsYas~rKHpQ}62;4wb", 'pO.1]=1{_^<Uw:Z"', ":Rp;TDS6U.<F!=Yvw^1m;w)dl.AbkY`n5U2,`(nI&2r_ucUj", ']_"B|5]?t.3i"K9v3N/j_StKdTQ#">5V#v6"4H1l(U1U<SuV0Dr1U2]`Y', "YR8H)Of", "~[>YGmLEi2ZVp5V<,Z6QXzf", 'r.hS&B"EXq(uIu', "C&v7z_w7R9^Tc5OM2vb@Ri;dkE.#aayk&_Sgp6g?2UxM/{Jv", '3&`ir9Ds":SN4c$knm$<z{$y7T`FvDy+URL$t4M6F_EklAcku=&$[3=b7', "{Zy/[$fsb.TOV|D4=^BVF}y6(Px#O{IvCOiY5H*.h/", 'J>]@"29Z+oTUV[Odwf', "F9%<lDhM._!.~RsnEv#=V*L4lmSC_I`N?<]@aq>(226_Rl", "#vS@p,Zbl.%j^|~UPm}/EIy$M/$zs5O54_tsJSC4jU[_.a[{q>#VK(f}LMx,b", "bH<V9+@6i2ob429ZegH@M", '#neiB{A`*P8p~=&+.[>Ye2Z?STg*|5q"T1[1Tinb', ']nZHaS<78UOM4>7v~93=#_p._^t2yc5d82JYgH$Ox.IRD>/[h.L"<', "Rm9/b}LM#oKIkv@N+gQHAk5EzPFZocbr", "*Or1*wwg$%+QXvfsn@6Vm#.ZmTKdhT?[xNX$McPZE:", 'v[w"Sh&76C8aV|vVjUuhP,oyt/gzxN04GUYF', "}@VHp,(<LC]<Z:+N%.G1,(od^PaC!K;5J&;@", 'F.jBXz@)zP)yFY`Nrk6uryyE]_#a!RQ"{DLu', "FiHmcc&`bEkSPN0k}UUB,q/I1E", "K_6/d$W6?:)e7[Y%Zma,`(,?4Tj", 'AUIFIQ)4`.+2"joZCUx@G3@;%a+D%|B+:vkSMx0}oa<7`|S[j<4@', "%@fszDM{L^4$hAa`ygygj2Sq.P^Z;R3kPg>1E", "yC;/wQH7/nkd{cYv=>i1L5/,yRRw=2JM:R>", "8Pnj0=9T%Ef=fR4MjkT7Lh$4T_AB1~/%5Ofjjc]<ZUwMHSvN~r9/", '"=D/3=gK_R@Tu+}X5@R$Qg1i<eEg*u', "&g$<F}1sm%", "E9{VKv)l", '2nZ"zD1lPa_HycR[=:aFhO%<:21d6T/[YMwu=_eK/UD`v~>MDrY7', 'D4ZHoq[sZo=*|:C"Qn>', 'MEmVQ,kEP/ZQd2"s.[mQ>S]n~Ep*5TD4wg8/bD#MeqQzeSe`Qnc;n$ds>', "kDh1~cHKfe|hXYh++.1m6qLMJm^UeaA<aU3VIwf", "Z6!/>k#@bM%Dd>3k0){<p_yEJ9xpfD#MhD+H&OV?7oA2qvG?U/DHT", "92OY}$4$YmS;3u}`gk4H$#R?3q2Jy=Hjd6#$mBSd;QONf+r[;b", "_*rB*_(w3%OCZ[t)pZBh5Oc?[ni,b", "BOF1oiMl+qg", ").B=SDoOi_uqjh>Mf.%<)vc?@", "DEszj2f", "F6/(tmEqc/+Q*dfraV9*fQwT>/oeNu>nf9>imBH72Uz;qI~jpDG1:", "~a1sJ_Ab", "iD)SX5]``mqJFv7%nr/g?KXl%m?eKl", '2=,"K|kda,&:clN`)4eV`(N<>ED^PD=V{/4Hl6PgQoHCb0(5zf', "4_8/:IWq|mUI(jas0#Y7[4_}oE&", "=vw/1L@6TJ1wtA!k#DOQP{f", "]2x@$#@#.n4$t~_Z}D/@,,:lfR&d1KK[", "luL=Lh+KB^ugMv1{4P,Vw&)dE_=#jh_dg&mQ2+ud(:ICTS>n#f", '<O&$(cV?NqZ@^hfZ?[Yi~52<xa&IAu%"c*Kzx&P<u.MFmAG?(@&7N', "@<}=~.ykT_lA*uVs(P:V$gUq7", "76?(iIf", "KPIQ}Islcm,`Pu~[/.S/$9$6.nvzj=*+{at(Q#~68qJ1?ud<", "F1C*2gjI~E6*HTFUkaw$,9Dq9MZ|bSrNER#=9k,<B:6Fb", "i:#$cx4l", "/MbjIku{gmnwER@", '+m7s8=g3F:J*%hc?R18/IQt<=q8{j[>s1>Lzs3fMW;mzu{0";`[g$vFd8U', '/9Au%Lv`A;i#&v=M[a!/"3(bh%Vd~>', 'G:8$v*&.O.p^,S4%"=5uMc29@qVV$cQ`16:$t=+.`.S#[hK[~/AF', "feng9qrb", "^Kl!6_>o", "z~$F(h%OzkEkr==", "l|*/9I0]1&0,;$]", "Jb&l|cC5!;k2o=", "3~p<jo_;=|mt+=", "p.Mq:+Z],kI/+=", ",}:C_j@Z=|e$jO", ":4yFn*`BbP47G=", 'mS<#!j"5$FiSDO', "%1hg<oLQrkm", "cJ,ti4:g", "6NPCi2]g", "xfT=J%e6", 'yJEqt"Yg', '{:x"#bq7', "grX6dd|Y9BW", 'Nt9;2c"8', "(h}EdcB8", "%tg?", "tt<Xqc18", "cAb+4", "{t)%#+<", "{tK70pv8", "xt#?", "?3X;1j>E", "z45NZtuD", "$C]$UWz{$G", "RULu0<@E", "8g%/", "7Ci/>", '<"H/', "%UM$I9L", "K3q.xk@E"]), CI(IZ = function(...BB) {
        CI(BB[UI[12]] = UI[1], BB[UI[16]] = [function() {
          return globalThis
        }, function() {
          return global
        }, function() {
          return window
        }, function() {
          return new Function("return this")()
        }], BB[UI[13]] = UI[19], BB[UI[14]] = []);
        try {
          CI(BB[UI[13]] = Object, BB[UI[14]][UI[28]]("".__proto__.constructor.name))
        } catch (yI) {}
        BB: for (BB[UI[15]] = UI[1]; BB[UI[15]] < BB[UI[16]][UI[12]]; BB[UI[15]]++) try {
          for (BB[UI[13]] = BB[UI[16]][BB[UI[15]]](), BB[UI[17]] = UI[1]; BB[UI[17]] < BB[UI[14]][UI[12]]; BB[UI[17]]++)
            if (typeof BB[UI[13]][BB[UI[14]][BB[UI[17]]]] === UI[18]) continue BB;
          return BB[UI[13]]
        } catch (yI) {}
        return BB[UI[13]] || this
      }() || {}, ZZ = IZ.TextDecoder, TZ = IZ.Uint8Array, JZ = IZ.UN, oZ = IZ.String || String, GZ = IZ.Array || Array, vZ = function(...BB) {
        return CI(BB[UI[12]] = UI[1], BB[UI[29]] = new GZ(UI[52]), BB[UI[0]] = oZ[UI[25]] || oZ.fromCharCode, BB[UI[20]] = []),
          function(...IB) {
            for (CI(IB[UI[12]] = UI[2], IB[-UI[22]] = UI[19], IB[UI[14]] = UI[19], IB[UI[20]] = IB[UI[1]][UI[12]], BB[UI[20]][UI[12]] = UI[1]), IB[-UI[21]] = UI[1]; IB[-UI[21]] < IB[UI[20]];) CI(IB[UI[14]] = IB[UI[1]][IB[-UI[21]]++], IB[UI[14]] <= UI[51] ? IB[-UI[22]] = IB[UI[14]] : IB[UI[14]] <= UI[47] ? IB[-UI[22]] = (31 & IB[UI[14]]) << UI[24] | IB[UI[1]][IB[-UI[21]]++] & UI[23] : IB[UI[14]] <= 239 ? IB[-UI[22]] = (15 & IB[UI[14]]) << UI[27] | (IB[UI[1]][IB[-UI[21]]++] & UI[23]) << UI[24] | IB[UI[1]][IB[-UI[21]]++] & UI[23] : oZ[UI[25]] ? IB[-UI[22]] = (IB[UI[14]] & UI[26]) << 18 | (IB[UI[1]][IB[-UI[21]]++] & UI[23]) << UI[27] | (IB[UI[1]][IB[-UI[21]]++] & UI[23]) << UI[24] | IB[UI[1]][IB[-UI[21]]++] & UI[23] : (IB[-UI[22]] = UI[23], IB[-UI[21]] += UI[4]), BB[UI[20]][UI[28]](BB[UI[29]][IB[-UI[22]]] || (BB[UI[29]][IB[-UI[22]]] = BB[UI[0]](IB[-UI[22]]))));
            return BB[UI[20]].join("")
          }
      }()),
      function(...BB) {
        return BB[UI[12]] = UI[2], typeof qI[BB[UI[1]]] === UI[18] ? qI[BB[UI[1]]] = function(...BB) {
          for (CI(BB[UI[12]] = UI[2], BB[UI[5]] = 'fbl>uY@7;/F^ET:R~nM%UeXZdN[j"<sV1tk`{v5+4?)rW&6KDHhg$,mQC.q2aA_9oPJpOI#=S*i(zBLwyx|c03}8!]G', BB[UI[0]] = "" + (BB[UI[1]] || ""), BB[UI[4]] = BB[UI[0]].length, BB[-UI[10]] = [], BB[UI[8]] = UI[1], BB[UI[9]] = UI[1], BB[UI[7]] = -UI[2]), BB[UI[3]] = UI[1]; BB[UI[3]] < BB[UI[4]]; BB[UI[3]]++)
            if (BB[UI[6]] = BB[UI[5]].indexOf(BB[UI[0]][BB[UI[3]]]), BB[UI[6]] !== -UI[2])
              if (BB[UI[7]] < UI[1]) BB[UI[7]] = BB[UI[6]];
              else {
                CI(BB[UI[7]] += BB[UI[6]] * UI[35], BB[UI[8]] |= BB[UI[7]] << BB[UI[9]], BB[UI[9]] += (BB[UI[7]] & UI[37]) > UI[38] ? UI[39] : UI[40]);
                do {
                  CI(BB[-UI[10]].push(BB[UI[8]] & UI[11]), BB[UI[8]] >>= UI[10], BB[UI[9]] -= UI[10])
                } while (BB[UI[9]] > UI[26]);
                BB[UI[7]] = -UI[2]
              } return BB[UI[7]] > -UI[2] && BB[-UI[10]].push((BB[UI[8]] | BB[UI[7]] << BB[UI[9]]) & UI[11]), WI(BB[-UI[10]])
        }(yI[BB[UI[1]]]) : qI[BB[UI[1]]]
      }(120) in dI && function(...BB) {
        function IB() {}
        BB[UI[12]] = UI[1], CI(BB[UI[29]] = function(BB, ZB) {
          var TB, JB, oB, GB, vB, kB = UI[1];
          for (CI(TB = UI[1], JB = new IB(UI[1]), oB = JB, GB = BB, vB = ZB); GB !== UI[30] || vB !== UI[30];) CI(TB = (GB ? GB.val : UI[1]) + (vB ? vB.val : UI[1]) + kB, kB = Math.floor(TB / UI[31]), oB.next = new IB(TB % UI[31]), oB = oB.next, GB = GB ? GB.next : UI[30], vB = vB ? vB.next : UI[30]);
          return kB && (oB.next = new IB(kB)), JB.next
        }, console.log(BB[UI[29]]))
      }(), (() => {
        function BB(...BB) {
          return BB[UI[12]] = UI[2], typeof qI[BB[UI[1]]] === UI[18] ? qI[BB[UI[1]]] = function(...BB) {
            for (CI(BB[UI[12]] = UI[2], BB[UI[2]] = 'ybO4=?."#Fa!`]~Ai;B5&YuJm^qC8N96:*QZGojD+rEWe[f(V<>S2R|lKT31%xkPp}vUh0/gt,H{wsI7$nc@XML_z)d', BB[UI[46]] = "" + (BB[UI[1]] || ""), BB[UI[4]] = BB[UI[46]].length, BB[UI[47]] = [], BB[-UI[49]] = UI[1], BB[-UI[50]] = UI[1], BB[UI[7]] = -UI[2]), BB[UI[3]] = UI[1]; BB[UI[3]] < BB[UI[4]]; BB[UI[3]]++)
              if (BB[UI[48]] = BB[UI[2]].indexOf(BB[UI[46]][BB[UI[3]]]), BB[UI[48]] !== -UI[2])
                if (BB[UI[7]] < UI[1]) BB[UI[7]] = BB[UI[48]];
                else {
                  CI(BB[UI[7]] += BB[UI[48]] * UI[35], BB[-UI[49]] |= BB[UI[7]] << BB[-UI[50]], BB[-UI[50]] += (BB[UI[7]] & UI[37]) > UI[38] ? UI[39] : UI[40]);
                  do {
                    CI(BB[UI[47]].push(BB[-UI[49]] & UI[11]), BB[-UI[49]] >>= UI[10], BB[-UI[50]] -= UI[10])
                  } while (BB[-UI[50]] > UI[26]);
                  BB[UI[7]] = -UI[2]
                } return BB[UI[7]] > -UI[2] && BB[UI[47]].push((BB[-UI[49]] | BB[UI[7]] << BB[-UI[50]]) & UI[11]), WI(BB[UI[47]])
          }(yI[BB[UI[1]]]) : qI[BB[UI[1]]]
        } [][UI[12]] = UI[1];
        const IB = UI[6],
          ZB = BB(122) + BB(UI[36]) + BB(124),
          TB = {
            [UI[6]]: BB(125) + BB(126) + BB(UI[51]) + BB(UI[52]) + BB(129) + BB(130)
          },
          JB = (...BB) => {
            BB[UI[12]] = UI[2];
            const IB = TB[BB[UI[1]]];
            if (!IB) {
              function ZB(BB) {
                var IB, ZB, TB, JB, oB, GB, vB;
                for (CI(IB = "" + (BB || ""), ZB = IB.length, TB = [], JB = UI[1], oB = UI[1], GB = -UI[2]), vB = UI[1]; vB < ZB; vB++) {
                  var kB = '6fgANcDOslCmnUWBG>r5]F$}R;9dQyxiqvaZuLb8#~:JVTjtHMYEIoKp)X1_SPh@e^k`"{*4<w&2=z,/%+3|0[.(?!7'.indexOf(IB[vB]);
                  if (kB !== -UI[2])
                    if (GB < UI[1]) GB = kB;
                    else {
                      CI(GB += kB * UI[35], JB |= GB << oB, oB += (GB & UI[37]) > UI[38] ? UI[39] : UI[40]);
                      do {
                        CI(TB.push(JB & UI[11]), JB >>= UI[10], oB -= UI[10])
                      } while (oB > UI[26]);
                      GB = -UI[2]
                    }
                }
                return GB > -UI[2] && TB.push((JB | GB << oB) & UI[11]), WI(TB)
              }

              function JB(...BB) {
                return BB[UI[12]] = UI[2], typeof qI[BB[UI[1]]] === UI[18] ? qI[BB[UI[1]]] = ZB(yI[BB[UI[1]]]) : qI[BB[UI[1]]]
              }
              throw new Error(JB(131) + JB(132) + JB(133) + JB(UI[56]) + " v" + BB[UI[1]])
            }
            return [UI[1], UI[2], UI[14], UI[4], UI[17], UI[45], UI[24], UI[26]].map(((...BB) => {
              function ZB(...BB) {
                return BB[UI[12]] = UI[2], typeof qI[BB[UI[1]]] === UI[18] ? qI[BB[UI[1]]] = function(...BB) {
                  for (CI(BB[UI[12]] = UI[2], BB[UI[22]] = ')7{w;<v"5O8zG|?Xt,PRox2kDaCueH$g0[/*&19(.43jVKNQpf@WnY`}hby]r_JlB>~AUE+=iIZM6LS#mdTFs!c^:q%', BB[UI[0]] = "" + (BB[UI[1]] || ""), BB[-UI[53]] = BB[UI[0]].length, BB[UI[16]] = [], BB[UI[13]] = UI[1], BB[-UI[45]] = UI[1], BB[UI[54]] = -UI[2]), BB[UI[10]] = UI[1]; BB[UI[10]] < BB[-UI[53]]; BB[UI[10]]++)
                    if (BB[UI[6]] = BB[UI[22]].indexOf(BB[UI[0]][BB[UI[10]]]), BB[UI[6]] !== -UI[2])
                      if (BB[UI[54]] < UI[1]) BB[UI[54]] = BB[UI[6]];
                      else {
                        CI(BB[UI[54]] += BB[UI[6]] * UI[35], BB[UI[13]] |= BB[UI[54]] << BB[-UI[45]], BB[-UI[45]] += (BB[UI[54]] & UI[37]) > UI[38] ? UI[39] : UI[40]);
                        do {
                          CI(BB[UI[16]].push(BB[UI[13]] & UI[11]), BB[UI[13]] >>= UI[10], BB[-UI[45]] -= UI[10])
                        } while (BB[-UI[45]] > UI[26]);
                        BB[UI[54]] = -UI[2]
                      } return BB[UI[54]] > -UI[2] && BB[UI[16]].push((BB[UI[13]] | BB[UI[54]] << BB[-UI[45]]) & UI[11]), WI(BB[UI[16]])
                }(yI[BB[UI[1]]]) : qI[BB[UI[1]]]
              }
              return BB[UI[12]] = UI[2], ZB(135) in dI && function(...BB) {
                function IB() {}
                BB[UI[12]] = UI[1], CI(BB[UI[29]] = function(...BB) {
                  for (CI(BB[UI[12]] = UI[14], BB[UI[29]] = UI[1], BB[UI[4]] = UI[1], BB[UI[17]] = new IB(UI[1]), BB[UI[16]] = BB[UI[17]], BB[UI[24]] = BB[UI[1]], BB[UI[26]] = BB[UI[2]]); BB[UI[24]] !== UI[30] || BB[UI[26]] !== UI[30];) CI(BB[UI[4]] = (BB[UI[24]] ? BB[UI[24]].val : UI[1]) + (BB[UI[26]] ? BB[UI[26]].val : UI[1]) + BB[UI[29]], BB[UI[29]] = Math.floor(BB[UI[4]] / UI[31]), BB[UI[16]].next = new IB(BB[UI[4]] % UI[31]), BB[UI[16]] = BB[UI[16]].next, BB[UI[24]] = BB[UI[24]] ? BB[UI[24]].next : UI[30], BB[UI[26]] = BB[UI[26]] ? BB[UI[26]].next : UI[30]);
                  return BB[UI[29]] && (BB[UI[16]].next = new IB(BB[UI[29]])), BB[UI[17]].next
                }, console.log(BB[UI[29]]))
              }(), parseInt(IB[ZB(136)](BB[UI[1]] * UI[10], BB[UI[1]] * UI[10] + UI[10]), UI[50])
            }))
          };
        CI(oI = (...BB) => (BB[UI[12]] = UI[2], BB[UI[1]] >= IB), GI = (...BB) => {
          function IB(...BB) {
            return BB[UI[12]] = UI[2], typeof qI[BB[UI[1]]] === UI[18] ? qI[BB[UI[1]]] = function(...BB) {
              for (CI(BB[UI[12]] = UI[2], BB[UI[2]] = '<^8$=ibLIX?QFg@tPfN|K#9{.nv(w4xl%yBu:,"_2dohR5aqWD1A[~E;]}ekCJz!6>*scGUVj`3H+70rZp&)m/YMOST', BB[UI[0]] = "" + (BB[UI[1]] || ""), BB[UI[47]] = BB[UI[0]].length, BB[UI[17]] = [], BB[UI[13]] = UI[1], BB[-UI[55]] = UI[1], BB[UI[21]] = -UI[2]), BB[UI[10]] = UI[1]; BB[UI[10]] < BB[UI[47]]; BB[UI[10]]++)
                if (BB[UI[6]] = BB[UI[2]].indexOf(BB[UI[0]][BB[UI[10]]]), BB[UI[6]] !== -UI[2])
                  if (BB[UI[21]] < UI[1]) BB[UI[21]] = BB[UI[6]];
                  else {
                    CI(BB[UI[21]] += BB[UI[6]] * UI[35], BB[UI[13]] |= BB[UI[21]] << BB[-UI[55]], BB[-UI[55]] += (BB[UI[21]] & UI[37]) > UI[38] ? UI[39] : UI[40]);
                    do {
                      CI(BB[UI[17]].push(BB[UI[13]] & UI[11]), BB[UI[13]] >>= UI[10], BB[-UI[55]] -= UI[10])
                    } while (BB[-UI[55]] > UI[26]);
                    BB[UI[21]] = -UI[2]
                  } return BB[UI[21]] > -UI[2] && BB[UI[17]].push((BB[UI[13]] | BB[UI[21]] << BB[-UI[55]]) & UI[11]), WI(BB[UI[17]])
            }(yI[BB[UI[1]]]) : qI[BB[UI[1]]]
          }
          BB[UI[12]] = UI[14];
          const ZB = crypto[IB(137) + IB(138) + IB(139)](new Uint8Array(cI)),
            TB = JI[UI[13]][IB(140) + IB(141)](BB[UI[2]], {
              [IB(142)]: UI[2]
            });
          kI(JB(BB[UI[1]]), ZB, UI[2], TB);
          const oB = new Uint8Array(cI + TB[IB(143)]);
          return CI(oB[IB(UI[22])](ZB), oB[IB(UI[22])](TB, cI)), oB
        }, vI = (...BB) => {
          function IB(...BB) {
            return BB[UI[12]] = UI[2], typeof qI[BB[UI[1]]] === UI[18] ? qI[BB[UI[1]]] = function(...BB) {
              for (CI(BB[UI[12]] = UI[2], BB[UI[2]] = 'LFE6gH8e{u/wzi]3bR`)XG#?Dx>m7KM$.|snQ*[^U&yl}%Z0!v@"da(I:N,qCY+4OSPt<=9_5B2~k;1cWjVATpJrhfo', BB[UI[0]] = "" + (BB[UI[1]] || ""), BB[UI[56]] = BB[UI[0]].length, BB[UI[16]] = [], BB[UI[45]] = UI[1], BB[UI[9]] = UI[1], BB[UI[7]] = -UI[2]), BB[UI[10]] = UI[1]; BB[UI[10]] < BB[UI[56]]; BB[UI[10]]++)
                if (BB[-UI[4]] = BB[UI[2]].indexOf(BB[UI[0]][BB[UI[10]]]), BB[-UI[4]] !== -UI[2])
                  if (BB[UI[7]] < UI[1]) BB[UI[7]] = BB[-UI[4]];
                  else {
                    CI(BB[UI[7]] += BB[-UI[4]] * UI[35], BB[UI[45]] |= BB[UI[7]] << BB[UI[9]], BB[UI[9]] += (BB[UI[7]] & UI[37]) > UI[38] ? UI[39] : UI[40]);
                    do {
                      CI(BB[UI[16]].push(BB[UI[45]] & UI[11]), BB[UI[45]] >>= UI[10], BB[UI[9]] -= UI[10])
                    } while (BB[UI[9]] > UI[26]);
                    BB[UI[7]] = -UI[2]
                  } return BB[UI[7]] > -UI[2] && BB[UI[16]].push((BB[UI[45]] | BB[UI[7]] << BB[UI[9]]) & UI[11]), WI(BB[UI[16]])
            }(yI[BB[UI[1]]]) : qI[BB[UI[1]]]
          }
          if (BB[UI[12]] = UI[14], BB[UI[2]][IB(145)] < cI) {
            function GB(...BB) {
              for (CI(BB[UI[12]] = UI[2], BB[-UI[58]] = 'SDK`JjOHi%ay0FL@2cWx|G/):Xh;*.q&w^46YA5_"?g9BMvsl3fbNt<+8dRE#u1rnT][=pZmQP(e!{z7>$ICV,~okU}', BB[UI[57]] = "" + (BB[UI[1]] || ""), BB[UI[4]] = BB[UI[57]].length, BB[UI[16]] = [], BB[-UI[60]] = UI[1], BB[-UI[61]] = UI[1], BB[UI[7]] = -UI[2]), BB[UI[10]] = UI[1]; BB[UI[10]] < BB[UI[4]]; BB[UI[10]]++)
                if (BB[UI[59]] = BB[-UI[58]].indexOf(BB[UI[57]][BB[UI[10]]]), BB[UI[59]] !== -UI[2])
                  if (BB[UI[7]] < UI[1]) BB[UI[7]] = BB[UI[59]];
                  else {
                    CI(BB[UI[7]] += BB[UI[59]] * UI[35], BB[-UI[60]] |= BB[UI[7]] << BB[-UI[61]], BB[-UI[61]] += (BB[UI[7]] & UI[37]) > UI[38] ? UI[39] : UI[40]);
                    do {
                      CI(BB[UI[16]].push(BB[-UI[60]] & UI[11]), BB[-UI[60]] >>= UI[10], BB[-UI[61]] -= UI[10])
                    } while (BB[-UI[61]] > UI[26]);
                    BB[UI[7]] = -UI[2]
                  } return BB[UI[7]] > -UI[2] && BB[UI[16]].push((BB[-UI[60]] | BB[UI[7]] << BB[-UI[61]]) & UI[11]), WI(BB[UI[16]])
            }

            function vB(...BB) {
              return BB[UI[12]] = UI[2], typeof qI[BB[UI[1]]] === UI[18] ? qI[BB[UI[1]]] = GB(yI[BB[UI[1]]]) : qI[BB[UI[1]]]
            }

            function kB(...BB) {
              CI(BB[UI[12]] = UI[1], BB[UI[29]] = function(...BB) {
                if (CI(BB[UI[12]] = UI[2], BB[UI[29]] = BB[UI[1]].length), BB[UI[29]] < UI[14]) return UI[1];
                if (CI(BB[UI[14]] = Math.max(...BB[UI[1]]), BB[UI[20]] = Math.min(...BB[UI[1]])), BB[UI[14]] === BB[UI[20]]) return UI[1];
                for (CI(BB[UI[63]] = Array(BB[UI[29]] - UI[2]).fill(Number.MAX_SAFE_INTEGER), BB[UI[45]] = Array(BB[UI[29]] - UI[2]).fill(Number.MIN_SAFE_INTEGER), BB[-UI[62]] = Math.ceil((BB[UI[14]] - BB[UI[20]]) / (BB[UI[29]] - UI[2])), BB[UI[7]] = UI[1]), BB[UI[3]] = UI[1]; BB[UI[3]] < BB[UI[29]]; BB[UI[3]]++) BB[UI[1]][BB[UI[3]]] !== BB[UI[20]] && BB[UI[1]][BB[UI[3]]] !== BB[UI[14]] && CI(BB[UI[7]] = Math.floor((BB[UI[1]][BB[UI[3]]] - BB[UI[20]]) / BB[-UI[62]]), BB[UI[63]][BB[UI[7]]] = Math.min(BB[UI[63]][BB[UI[7]]], BB[UI[1]][BB[UI[3]]]), BB[UI[45]][BB[UI[7]]] = Math.max(BB[UI[45]][BB[UI[7]]], BB[UI[1]][BB[UI[3]]]));
                for (CI(BB[-UI[65]] = Number.MIN_SAFE_INTEGER, BB[UI[31]] = BB[UI[20]]), BB[UI[64]] = UI[1]; BB[UI[64]] < BB[UI[29]] - UI[2]; BB[UI[64]]++) BB[UI[63]][BB[UI[64]]] === Number.MAX_SAFE_INTEGER && BB[UI[45]][BB[UI[64]]] === Number.MIN_SAFE_INTEGER || CI(BB[-UI[65]] = Math.max(BB[-UI[65]], BB[UI[63]][BB[UI[64]]] - BB[UI[31]]), BB[UI[31]] = BB[UI[45]][BB[UI[64]]]);
                return BB[-UI[65]] = Math.max(BB[-UI[65]], BB[UI[14]] - BB[UI[31]]), BB[-UI[65]]
              }, console.log(BB[UI[29]]))
            }
            throw vB(UI[33]) in dI && kB(), new Error(ZB)
          }
          const TB = new Uint8Array(BB[UI[2]][IB(UI[66])](cI));
          kI(JB(BB[UI[1]]), BB[UI[2]][IB(UI[66])](UI[1], cI), UI[2], TB);
          const oB = new(JI[UI[13]][IB(148) + UI[13]])({
            [IB(149)]: !0
          });
          if (oB[IB(150)](TB), oB[IB(151)] || !oB[IB(UI[59])]) throw new Error(ZB);
          return oB[IB(153)]
        })
      })();
    var QI = ZB(36990),
      sI = ZB(36996),
      wI = ZB(37003);

    function OI(BB) {
      return oB.UN.from(Uint8Array.from(BB))
    }

    function YI(BB) {
      return Array.from(BB)
    }

    function iI(BB, IB) {
      return {
        [BB]: {
          x: IB
        }
      }
    }

    function pI(BB) {
      if (null === BB || "object" !== typeof BB || Array.isArray(BB)) return BB;
      const IB = Object.keys(BB);
      if (1 !== IB.length) return BB;
      const ZB = BB[IB[0]];
      return null !== ZB && "object" === typeof ZB && !Array.isArray(ZB) && "x" in ZB ? ZB.x : BB
    }

    function aI(BB, IB) {
      return void 0 === IB ? null : kB.has(BB) ? null === IB ? null : JSON.stringify(IB) : IB
    }

    function HI(BB, IB) {
      return null === IB && kB.has(BB) ? null : "string" === typeof IB && kB.has(BB) ? JSON.parse(IB) : IB
    }

    function MI(BB, IB, ZB) {
      return (0, JB.L)(ZB) ? null : iI(BB, aI(IB, ZB))
    }

    function jI(BB, IB) {
      return (0, JB.L)(IB) ? null : HI(BB, pI(IB))
    }

    function PI(BB) {
      const IB = {};
      for (const ZB in BB) {
        const TB = BB[ZB];
        IB[ZB] = void 0 === TB ? null : TB
      }
      return IB
    }

    function RI(BB) {
      const IB = {};
      for (const ZB in BB) {
        const TB = BB[ZB];
        null !== TB && void 0 !== TB && (IB[ZB] = TB)
      }
      return IB
    }

    function rI(BB, IB) {
      return Object.prototype.hasOwnProperty.call(BB, IB)
    }

    function mI(BB, IB) {
      const ZB = {};
      for (const TB in BB) {
        const JB = BB[TB];
        ZB[TB] = IB(JB)
      }
      return ZB
    }

    function XI(BB, IB, ZB) {
      const TB = [];
      for (let JB = 0; JB < IB.length; JB++) {
        const oB = IB[JB];
        rI(BB, oB) && TB.push({
          i: JB,
          v: ZB(oB, BB[oB])
        })
      }
      return TB
    }

    function LI(BB, IB, ZB) {
      const TB = {};
      for (const JB of BB) {
        const BB = IB[JB.i];
        void 0 !== BB ? TB[BB] = ZB(BB, JB.v) : console.error(`Unknown Partial field index ${JB.i}`)
      }
      return TB
    }

    function eI(BB, IB) {
      return (0, JB.L)(IB) ? null : "Tm" === BB ? function(BB) {
        return iI(NB, XI(BB, sI.D, ((BB, IB) => MI(PB[BB], BB, IB))))
      }(IB) : MI(jB[BB], BB, IB)
    }

    function uI(BB, IB) {
      return (0, JB.L)(IB) ? null : "Tm" === BB ? function(BB) {
        return (0, JB.L)(BB) ? null : LI(BB, sI.D, jI)
      }(pI(IB)) : jI(BB, IB)
    }

    function fI(BB) {
      const {
        type: IB,
        ...ZB
      } = BB, TB = {};
      for (const JB in ZB) {
        const BB = ZB[JB];
        TB[JB] = aI(JB, BB)
      }
      if ("chunkAdded" === IB || "chunkRemoved" === IB) TB.rle = OI(TB.rle);
      else if ("playSound" === IB) {
        const BB = TB.TB;
        TB.TB = (0, JB.L)(BB) ? null : PI(BB)
      } else if ("customKillfeed" === IB) {
        var oB, GB;
        TB.killer = PI(null !== (oB = TB.killer) && void 0 !== oB ? oB : {}), TB.victim = PI(null !== (GB = TB.victim) && void 0 !== GB ? GB : {})
      }
      return {
        [IB]: TB
      }
    }

    function lI(BB) {
      const IB = Object.keys(BB)[0],
        ZB = BB[IB],
        TB = {};
      for (const JB in ZB) {
        const BB = ZB[JB];
        TB[JB] = HI(JB, BB)
      }
      if ("chunkAdded" === IB || "chunkRemoved" === IB) TB.rle = YI(TB.rle);
      else if ("playSound" === IB) {
        const BB = TB.TB;
        TB.TB = (0, JB.L)(BB) ? null : RI(BB)
      } else if ("customKillfeed" === IB) {
        var oB, GB;
        TB.killer = RI(null !== (oB = TB.killer) && void 0 !== oB ? oB : {}), TB.victim = RI(null !== (GB = TB.victim) && void 0 !== GB ? GB : {})
      } else "animateEntity" === IB && function(BB) {
        const IB = null === BB || void 0 === BB ? void 0 : BB.tT;
        if ((0, JB.L)(IB)) return;
        for (const ZB in IB) IB[ZB].scale ??= []
      }(TB.animationScript);
      return {
        type: IB,
        ...TB
      }
    }

    function AI(BB) {
      var IB, ZB;
      return (0, JB.L)(BB) ? null : {
        name: BB.name,
        amount: null !== (IB = BB.amount) && void 0 !== IB ? IB : null,
        attributes: JSON.stringify(null !== (ZB = BB.attributes) && void 0 !== ZB ? ZB : {})
      }
    }

    function tI(BB) {
      if ((0, JB.L)(BB)) return null;
      const IB = BB;
      return {
        name: IB.name,
        amount: IB.amount,
        attributes: JSON.parse(IB.attributes)
      }
    }

    function bI(BB) {
      if ((0, JB.L)(BB)) return null;
      return {
        fullSlotsArray: Array.isArray(BB.slots),
        entries: XI(BB, sI.s, ((BB, IB) => {
          if ((0, JB.L)(IB)) return null;
          if ("slots" === BB) {
            const BB = Array.isArray(IB) ? function(BB) {
              const IB = {};
              for (let ZB = 0; ZB < BB.length; ZB++) IB[ZB] = BB[ZB];
              return IB
            }(IB) : IB;
            return iI(iB, function(BB) {
              const IB = {};
              for (const ZB in BB) {
                const TB = BB[ZB];
                IB[ZB] = AI(TB)
              }
              return IB
            }(BB))
          }
          return iI(YB, IB)
        }))
      }
    }

    function xI(BB) {
      if ((0, JB.L)(BB)) return;
      const IB = BB.fullSlotsArray;
      return LI(BB.entries, sI.s, ((BB, ZB) => {
        if ((0, JB.L)(ZB)) return null;
        if ("slots" === BB) {
          const BB = function(BB) {
            const IB = {};
            for (const ZB in BB) {
              const TB = BB[ZB];
              IB[Number(ZB)] = tI(TB)
            }
            return IB
          }(pI(ZB));
          return IB ? function(BB) {
            const IB = [];
            for (let ZB = 0; ZB < JB.m; ZB++) IB.push(ZB in BB ? BB[ZB] : null);
            return IB
          }(BB) : BB
        }
        return pI(ZB)
      }))
    }

    function EI(BB) {
      return {
        entities: mI(BB.entities, (BB => XI(BB, sI.p, eI))),
        items: mI(BB.items, (BB => XI(BB, sI.t, ((BB, IB) => MI(RB[BB], BB, IB))))),
        camera: BB.camera,
        hotbar: bI(BB.hotbar),
        playerHud: (0, JB.L)(BB.playerHud) ? null : XI(BB.playerHud, sI.w, ((BB, IB) => (0, JB.L)(IB) ? null : function(BB, IB) {
          return {
            [BB]: IB
          }
        }("double", IB))),
        effects: (0, JB.L)(BB.effects) ? null : (0, QI.n)(BB.effects),
        uiElements: XI(BB.uiElements, sI.G, ((BB, IB) => (0, JB.L)(IB) ? null : JSON.stringify(IB))),
        environment: XI(BB.environment, sI.z, ((BB, IB) => MI(rB[BB], BB, IB))),
        structuralEvents: BB.structuralEvents.map(fI),
        ephemeralEvents: BB.ephemeralEvents.map(fI)
      }
    }

    function DI(BB) {
      var IB;
      const ZB = {
          entities: mI(BB.entities, (BB => {
            const IB = LI(BB, sI.p, uI),
              ZB = IB.type ? (0, TB.t)(IB.type) : null;
            return ZB && (IB.type = "Mesh", IB.meshKind = ZB.meshKind, IB.meshOpts = ZB.meshOpts), IB
          })),
          items: mI(BB.items, (BB => LI(BB, sI.t, jI))),
          camera: {
            ...BB.camera,
            charging: null !== (IB = BB.camera.charging) && void 0 !== IB && IB
          },
          uiElements: LI(BB.uiElements, sI.G, ((BB, IB) => "string" === typeof IB ? JSON.parse(IB) : IB)),
          environment: LI(BB.environment, sI.z, jI),
          structuralEvents: BB.structuralEvents.map((BB => {
            const IB = lI(BB);
            return "UH" === IB.type ? (IB.fromBlockData ??= null, IB.toBlockData ??= null) : "chunkAdded" !== IB.type && "chunkRemoved" !== IB.type || (IB.sharedBlockData ??= []), IB
          })),
          ephemeralEvents: BB.ephemeralEvents.map((BB => lI(BB)))
        },
        oB = xI(BB.hotbar);
      return void 0 !== oB && (ZB.hotbar = oB), (0, JB.L)(BB.playerHud) || (ZB.playerHud = LI(BB.playerHud, sI.w, ((BB, IB) => (0, JB.L)(IB) ? null : function(BB) {
        if (null === BB || "object" !== typeof BB || Array.isArray(BB)) return BB;
        const IB = Object.keys(BB);
        return 1 !== IB.length || "int" !== IB[0] && "double" !== IB[0] ? BB : BB[IB[0]]
      }(IB)))), (0, JB.L)(BB.effects) || (ZB.effects = (0, QI.i)(BB.effects)), ZB
    }
    let KI, VI;
    var SI, BZ, IZ, ZZ, TZ, JZ, oZ, GZ, vZ;
    const kZ = [2, 0, 1, 113, 95, 229, 129, "g", "e", 6, 4, 8, 255, "length", "b", "d", "a", "undefined", void 0, "c", 63, "fromCodePoint", 7, 12, "push", 50, 3, 24, !1, 5, "h", 205, 9, 168, 91, 8191, 88, 13, 14, "join", 60, 118, 76, 131, 127, 128, 107, 29, 163, 79, 98, 243, "UN", 179, 242, "f", 201, null, "i", 90, 111, 139, 66];

    function cZ(...BB) {
      return BB[kZ[13]] = kZ[2], typeof ZZ !== kZ[17] && ZZ ? (new ZZ).decode(new TZ(BB[kZ[1]])) : typeof JZ !== kZ[17] && JZ ? JZ.from(BB[kZ[1]]).toString("utf-8") : vZ(BB[kZ[1]])
    }

    function nZ() {}

    function hZ() {
      hZ = function() {}
    }
    hZ(SI = {}, BZ = ['lh5Z.ofv(UjbYN,";yHlOPv?<(UKAI&Z|R|Mk^w', 'cfvl?b:xDa:L8["_`RGb$)^"S(J*]%W(%U{jq5PyFo@Z}UUOZtoqZg<scx', "Kz)g_bA+ZUzlQWi@=tR}Bo@OVmK@$_tnIPb#*1,cwfm&w$;(>0qB<}w", "CeRchMe(%K#2:H$Z?q,@zQ47^K/:E^U8RtZdk#7G>5bQ%Wk", "^g[bOg`don", "HRZC*owf&g%9|8A+k#lqEN$x><?/G{?JjzkL:7J/xWczZIr@g_X3<$0;}c", "ag5CS<PG[xZdDA1tLQMyHUY<}iR", "g_igc#M;{)RM:U0&$&A", "pkHqh&DviDzlfX!@PZQGs>ex>RV^MU0ZMuf9UNvcG", 'R"uGP#=E%f9E/36s!zag2<ZG8g>Ex/B(1yE', '6WfH1uTrABlFn.M"lknqD14GG', "s&sL5r_O*UFca12+8U!B`1bd@WtthMSvPz]g%o=!]DOt8~Y&#ynyKHlE", "3gryrN.Ek5NmI>8O=^v3LUx(g(eKb%)v`u1<6bNF90KljCr!o^pGVPw", 'To$@q/nGrnAJ_&#[yq$Byi<G@:"FDHd"^_CI$MIOHx', "W_esryhfMoU}}+YZNq]MXt:sY", "]t]be><)LDmrr>5vOofjp],vnfJzY>YZ|$4dn5FqC(", "OUI<f5x+8m%zE", "~gCZ=dw", ")0Jg8R*syBZ*`Xv;v![Z=b5O^:7U./k(IuI<b]aQgr)lRA)nyo>ZD", "5Z*CDPPENo`2#[T[stvBTg!8z(w9|/F3bD6MH#&8L0wV|4V&/okjZ4|mz(V", ")0Yb{VUF9R0<sC", ')g7d|V"QcL_SlM0!`iM3{o:./g5koJc["m"M2QM;:riGE', "woOGdiTf0U,tPr`h?D~b7b!G;W_HE", 'mz8}G5}Gn%nyy~2f70tyl/<8m5qJf>p"L_fy<)QdBL4k`.dt/yFq', 'BQ6BGU78Pad)VJB[R5;j@7"Xb0Ari1e(=5HgW]#tqxKRoHR8JE', '+P#ss4r"Hr+A=C', "rWzYj4NdA", "$yRj&8Dvt)S8@PW", '}q~C8pKzen>F~_U;Ky"M/>]!D(V0GIl(Ug:Ldy~vrkPKyW9(Je!C', 'vPObT&yG#5JzEYN31uf3p.h"hW}s<HUhbqZM*I0s(o~UoJ&Z@"pC', "qBCL@7{Q$DKF^4w/MPTGc?=8((2fP_B($!vpPI~m>cz@H1?tgguG", "VADsUts8`n)f9~[+WouZdiKrJ:uv7/l$~AX", 'e&sZ0^Ps5kb8q&f@`<Vq{dXh"DH}A%ZsiWpG', '>@uGRtTX"xo~W>"(^&(}f.w', "%PMjL/IdJo])A{tfR_]dIzy4&xS~w", "!0+H~SHO+Dqy%W^$#n^gGtNd;W4G7^_sKgj3#.=E^)uC}CKnN$6M6I1EjoZvE", "P5>ZIN7!c]fqovH[?0qZ:", "UgNIJo##VBdK<Ja!KZA", 'Hz"g1o.xMg4baR8O#0E3XU!4+0Kl[&D"fQ:d*/Qd"03', "MDs]5*w", "|usZ`RccTc1sZ[h_Su{cNP:8KU=~u&>s[eCYsP2!m0n^!I78HR>#*IQF*<>EE", 'co]@49=;]D7i*_@;!oFgJbuS))Dv^%k[@UnH3"^X', "zAy}(1TvURR}P1[+,%UsC5!E", '^gZC8"w', '("0yLIsS><N%eX', "l5Ns/>M7C", "*~N#X5%4SaSlS+j!b0A", ">BXHDSP9*%JA%[5sbzE", "umJg.1!GQc6}GA`J4m~PrH:Gtm%*[&?,R5t3}opqsRTv!WKnv#/s_", "`Wiq*5p?}kR:|AK!e#,ZD", 'F0"3+o7;&(Ql%4CO6ubG', "Z&vOz#k;vx2K2~GZaROZZpU#Of(^2rN@zy)gpI[/da7Y}URs", "9kvp)*1*5fMF4{tvGCpb95n<9WjRNR)!{ZvO.Sn+7(cJjAU!", 'p0jg+P!EmRBr6[tO1A[b$g)9yoF,x/W_Kl5b")_ONgIRUA8/|5R#&4daC', "YPBpa^r#jmS}bv.3iP;yMiu):(l+SC{@40Vqg{3six)Wr&zOA)Rc5UXaC", "foqZ;F=sa<rGH1SZuy1#HbjOMoP}m%sh<gz_>N*oQ:]~1PZs&_Jpc](8Y", "]uMq_lG;zxOD6W:@lnZBz]Kv2(TFcA73CgnqpSKmpRP2#MjOow", '+Dt9.[hrV%ZWr>I@Nyes:Pdaga|#|4J"6h;qS/.y5)6+*Xf36laqB*hX', '1DEqXQF"+n!bxYF3Wj>]A#:<iD+qTPT[TqsGvo|zV%', 'go2j/"TX9D]~P%7;q_JVd)tX', "QB#j&l^Qec[l=^V&R^hy?7~rG", "Hy1<`o*oS(ibJ/Cfn&Y#?SiOCad", "iBVO/948]x,AOYz+tgsCDPamzgPQ$_x", "2@fyM9dz,rbEz3#[HDLya^Mxda|,7^c_1qcBrQoxq", "aznOY#w", "8#2}J/^rHxiW/4ahyomL", "pib}}^Fm`5jSjP3s$A*bw$6S{gN2|CWDq_4C", "SBX3Ti39T5H~k4c(a5SL&7#vga6+*_qvo!6@Pt[f)f1iY^!;I0X", 'f"_yvITOGrOnjPG(<03jDboEA', '`$jl&&Y(1oRR<C"&Zods~<ZGG', "?D@#5r7oiDaCiAOvHu[]!497Qf/SN17@7lIyZRSGG", "?DO]4y*xJmX3_&&(mQZq(S;E", "1ZvBP.tmon6+x^D3", "b5*MBSu4eD1iP~;+KtE3p#~v5<*2!{x", '`nRc<<uSKg_AIx[(t"8j%.6SvD+Dq>F_A%2Y', '7tgdZl*G/g6,A[aO.+dLqI$(NB`}]Wk(nP}#%]WrE)`}2Wg"/B:Z!dbv_W', "?yCsSSrQt%7YO&Xf/eX", "i!4bL[%EVKVZJ3Rn/^]C1u}E^<JHMCJ$<Dnyz]Odx:bMH3^3KhkHL#vOq", "A:+O>^QOcn3qVHB(e0PqsF2)^mmHf>g@noRje&Z;AB1s(IEn", 'GM.q{.84Ko!5R{rszgFM.5^aWKo8D1k$"D.qXUnsG', "@PzLA^m/p)N,5x=,Nt(sIQ47{U+SI[@/gPRc;)n;w:_nJ%=J]W&G", "90%BI9zfI(0~oUb(", "Vg^Bk[=!FB@ZSv|t7tysKQe4G", 'pqEp%#+4fg)CQM?J]Wtyv[y4JBq>"A8/d!X', 'a"pdF1tm4KB9[M@hV&3Htl/r0oW!"PRhGP}I##NvjU|c[MfD&%L3pIE.C', "8z{<rNA<JKzjE", "X8aqfd9yiDbE=CzZ^Pe}CH#dE%Nm0/<3/^GV>}+s=DN~E", 'Pnly349GpfiCb3<;MDgd>Njfb5#}$WF"U@YZn1#O&a&L|1zO', '8tnqtFD?>R/SbC/frgSdhzzQUkZ*5+H+Q"WZ.u9)onubHA', "@UYI2tY.0)6}x>~f)W=y@42SJmgb)A", "Yz=jG?qvGrn9R%Z/J_LyKULcw)qy5S%3xUwg:SC/G", "&%yH%5tdt)N<BJXv)0}G;Ftah5=}e45/y&m}GU@d@0hFOI6ts&UsOF<xY", "3t5@&7p#UW%9@H$[4m5bVFw", "I&I3dN]!LD", "=<(#77[OQ)7oR[G+6lds*.j#vD+yYU_s_E", '2!1Ym#q~&xJ0BNK/u_SGG]Lvd(5R}/=sgtJB`[FrUR"lu>5nQ"AY', '&PaM$zn(JKp~6X6@|^O@Y/cr0)p%:UB+6RNsIyJdu<lM_YVZBs(jXtZG"D8', ")zsLQz7E9iV", 'T5{y5*s;1BGyN%}_wQ|gp^"vn){QN%[+f%M3dNwvY', ')t#ya^Po>cYrZIjh[_&#q#Nr*c_nOMKvQZhy")=nI(V', "ws1<6p.;~(3yw3wh^w", "csfyL5Fv)fczHUP+Gs(Hu>*og(N2j1c(%%!Mi);)M%", "$A>ZF#Fm,xmHq&OhKuSL!PCcwmE0JAa&xM!B#Stm><W*tX", "ZU[d`l[fKU:SSU`@wUwgFPKmNo*2kAc__g9#XQhX", 'P0[GG*o4&aTG{.lZFlp@AHW?pcf{@PD@cMvVc?o8"na8E', '}ims$4$4.%UK|Pw/<grjw],dec?2RrL_VybYJ5g"^f;v)W1;9tOG}bw', "P!6by&_O?xwy({?;&zM3JbVs%mEqr>q&a!@#8p/mHD", '(B]CJ#pdAU}Uhx$&tgLjc/n8p)988I[vGm*C3o,/X)JHPW^"Oo[@+"@/piv', "Kyhs9]wrABuvlHav#q,@B5QOY", ",o~Pm#gdZ%u@8[ah.^$BMM/X", 'rD<G"9Z4/oK~8[r;0g:@g)A(i0/@z1G(QnA', "|0BqV828Nx>fc1#_5gpdMi38qrtRE", "0Z=gdNso4%!ZyWwnC81<K.%+:gwVz3jvM&%BrHyE", 'AsIyPIdfY(On8rf"1tjqz<mXX)*fC%W', "7D@};>n;l5DtyW+@90X}rHA;m0{jVJk", "nU$@;gIX", "s?tFk$9", "y>[C_jWH", "^N|c!{9", "7!f^}7}X", "r>d|([^9", "Hm!^##GB", "O:t+G=9i^u", "!@A?0+&keA", "Dh+S<Cm`mv", "f%<FLq??R.", "I)TP%q9!", "kg<$jZjsSaId&", "xe,~KiM!A^/no", "*@8S:xMR0j4ro", "neY+!cMRc(Pr&", "M`d/B1|noUHM&", "0tO+HrMR,Pnyo", "*5l/JO}!{>3Kr8@/~`)F_p6VkmR[esn]tea?X;<9Rm44esU(Cjs+nIhawjsc&", "#&84^qOUAmG}v}Fk&8=FupNg|Ag|zW8.6ea?`IRYF^Wx8WJ(H8NDsY.Gn4pOo", "nea?P%RU`4&w(W>kRR2FY9=Vu4r|LWMz+R2F#}ZVBvg|zWoUZe|+wr!gf:CQo", 'd!X$"T(B', "<<n@%3IBOL", "?Aj|[0g", "p1kQRz5aI", "?Aj|[07H", "m[nk", "{[C^>9A", "yJhg=u6B", "cS!^_U?B", '"E8)}iK7', "RE2e2", "r`[e*m37", "q3!1~", "P{E?uWx0", '"pF>mmG0', "V&4?vb/7", "UxCUf;FQUh", 'n<Z"Z', 'n<Z"aR!p>u;~>']), hZ(IZ = function(...BB) {
      hZ(BB[kZ[13]] = kZ[1], BB[kZ[16]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], BB[kZ[14]] = kZ[18], BB[kZ[0]] = []);
      try {
        hZ(BB[kZ[14]] = Object, BB[kZ[0]][kZ[24]]("".__proto__.constructor.name))
      } catch (BZ) {}
      BB: for (BB[kZ[15]] = kZ[1]; BB[kZ[15]] < BB[kZ[16]][kZ[13]]; BB[kZ[15]]++) try {
        for (BB[kZ[14]] = BB[kZ[16]][BB[kZ[15]]](), BB[kZ[10]] = kZ[1]; BB[kZ[10]] < BB[kZ[0]][kZ[13]]; BB[kZ[10]]++)
          if (typeof BB[kZ[14]][BB[kZ[0]][BB[kZ[10]]]] === kZ[17]) continue BB;
        return BB[kZ[14]]
      } catch (BZ) {}
      return BB[kZ[14]] || this
    }() || {}, ZZ = IZ.TextDecoder, TZ = IZ.Uint8Array, JZ = IZ[kZ[52]], oZ = IZ.String || String, GZ = IZ.Array || Array, vZ = function(...BB) {
      return hZ(BB[kZ[13]] = kZ[1], BB[-kZ[25]] = new GZ(kZ[45]), BB[kZ[14]] = oZ[kZ[21]] || oZ.fromCharCode, BB[kZ[0]] = []),
        function(...IB) {
          for (hZ(IB[kZ[13]] = kZ[2], IB[kZ[16]] = kZ[18], IB[kZ[14]] = kZ[18], IB[kZ[19]] = IB[kZ[1]][kZ[13]], BB[kZ[0]][kZ[13]] = kZ[1]), IB[kZ[15]] = kZ[1]; IB[kZ[15]] < IB[kZ[19]];) hZ(IB[kZ[14]] = IB[kZ[1]][IB[kZ[15]]++], IB[kZ[14]] <= kZ[44] ? IB[kZ[16]] = IB[kZ[14]] : IB[kZ[14]] <= 223 ? IB[kZ[16]] = (31 & IB[kZ[14]]) << kZ[9] | IB[kZ[1]][IB[kZ[15]]++] & kZ[20] : IB[kZ[14]] <= 239 ? IB[kZ[16]] = (15 & IB[kZ[14]]) << kZ[23] | (IB[kZ[1]][IB[kZ[15]]++] & kZ[20]) << kZ[9] | IB[kZ[1]][IB[kZ[15]]++] & kZ[20] : oZ[kZ[21]] ? IB[kZ[16]] = (IB[kZ[14]] & kZ[22]) << 18 | (IB[kZ[1]][IB[kZ[15]]++] & kZ[20]) << kZ[23] | (IB[kZ[1]][IB[kZ[15]]++] & kZ[20]) << kZ[9] | IB[kZ[1]][IB[kZ[15]]++] & kZ[20] : (IB[kZ[16]] = kZ[20], IB[kZ[15]] += kZ[26]), BB[kZ[0]][kZ[24]](BB[-kZ[25]][IB[kZ[16]]] || (BB[-kZ[25]][IB[kZ[16]]] = BB[kZ[14]](IB[kZ[16]]))));
          return BB[kZ[0]][kZ[39]]("")
        }
    }()), hZ(KI = (...BB) => {
      function IB(...BB) {
        return BB[kZ[13]] = kZ[2], typeof SI[BB[kZ[1]]] === kZ[17] ? SI[BB[kZ[1]]] = function(...BB) {
          for (hZ(BB[kZ[13]] = kZ[2], BB[kZ[2]] = 'ABLECVYHlgNGjFXoDctnPMdWhRm_7rpa=T[UQb4vSZ0sxefk)O&J@3`IK~i2]?8(/+z;!9*u.5#{$^:6,%|}>1y"w<q', BB[kZ[14]] = "" + (BB[kZ[1]] || ""), BB[kZ[26]] = BB[kZ[14]].length, BB[kZ[10]] = [], BB[kZ[29]] = kZ[1], BB[kZ[9]] = kZ[1], BB[-kZ[40]] = -kZ[2]), BB[kZ[11]] = kZ[1]; BB[kZ[11]] < BB[kZ[26]]; BB[kZ[11]]++)
            if (BB[kZ[32]] = BB[kZ[2]].indexOf(BB[kZ[14]][BB[kZ[11]]]), BB[kZ[32]] !== -kZ[2])
              if (BB[-kZ[40]] < kZ[1]) BB[-kZ[40]] = BB[kZ[32]];
              else {
                hZ(BB[-kZ[40]] += BB[kZ[32]] * kZ[34], BB[kZ[29]] |= BB[-kZ[40]] << BB[kZ[9]], BB[kZ[9]] += (BB[-kZ[40]] & kZ[35]) > kZ[36] ? kZ[37] : kZ[38]);
                do {
                  hZ(BB[kZ[10]].push(BB[kZ[29]] & kZ[12]), BB[kZ[29]] >>= kZ[11], BB[kZ[9]] -= kZ[11])
                } while (BB[kZ[9]] > kZ[22]);
                BB[-kZ[40]] = -kZ[2]
              } return BB[-kZ[40]] > -kZ[2] && BB[kZ[10]].push((BB[kZ[29]] | BB[-kZ[40]] << BB[kZ[9]]) & kZ[12]), cZ(BB[kZ[10]])
        }(BZ[BB[kZ[1]]]) : SI[BB[kZ[1]]]
      }
      BB[kZ[13]] = kZ[2], IB(121) + "U" in nZ && function(...BB) {
        function IB(...BB) {
          for (hZ(BB[kZ[13]] = kZ[2], BB[kZ[2]] = 'o&!EN2RA:B#v@W(5]^U._zu`seF+I*?$/L%k98}CpwX)<JMG[KSV4PH~|yf>0mjaYd3lixrDcQg=,Zq1O6tb7hn;"{T', BB[kZ[0]] = "" + (BB[kZ[1]] || ""), BB[kZ[26]] = BB[kZ[0]].length, BB[kZ[15]] = [], BB[-kZ[41]] = kZ[1], BB[-kZ[43]] = kZ[1], BB[kZ[7]] = -kZ[2]), BB[kZ[11]] = kZ[1]; BB[kZ[11]] < BB[kZ[26]]; BB[kZ[11]]++)
            if (BB[-kZ[42]] = BB[kZ[2]].indexOf(BB[kZ[0]][BB[kZ[11]]]), BB[-kZ[42]] !== -kZ[2])
              if (BB[kZ[7]] < kZ[1]) BB[kZ[7]] = BB[-kZ[42]];
              else {
                hZ(BB[kZ[7]] += BB[-kZ[42]] * kZ[34], BB[-kZ[41]] |= BB[kZ[7]] << BB[-kZ[43]], BB[-kZ[43]] += (BB[kZ[7]] & kZ[35]) > kZ[36] ? kZ[37] : kZ[38]);
                do {
                  hZ(BB[kZ[15]].push(BB[-kZ[41]] & kZ[12]), BB[-kZ[41]] >>= kZ[11], BB[-kZ[43]] -= kZ[11])
                } while (BB[-kZ[43]] > kZ[22]);
                BB[kZ[7]] = -kZ[2]
              } return BB[kZ[7]] > -kZ[2] && BB[kZ[15]].push((BB[-kZ[41]] | BB[kZ[7]] << BB[-kZ[43]]) & kZ[12]), cZ(BB[kZ[15]])
        }

        function ZB(...BB) {
          return BB[kZ[13]] = kZ[2], typeof SI[BB[kZ[1]]] === kZ[17] ? SI[BB[kZ[1]]] = IB(BZ[BB[kZ[1]]]) : SI[BB[kZ[1]]]
        }
        BB[kZ[13]] = kZ[1], hZ(BB[-kZ[46]] = ZB(122) + ZB(123) + ZB(124) + ZB(125) + ZB(126), BB[kZ[2]] = ZB(kZ[44]) + ZB(kZ[45]) + ZB(kZ[6]) + ZB(130) + ZB(kZ[43]) + ZB(132) + "?", BB[kZ[19]] = ZB(133) + ZB(134) + ZB(135) + ")", BB[-kZ[46]].match(BB[kZ[2]] + BB[kZ[19]]))
      }();
      const ZB = function(BB) {
          var IB;
          return {
            meta: {
              ...BB.meta,
              formatVersion: sI.h,
              variation: null !== (IB = BB.meta.variation) && void 0 !== IB ? IB : null
            },
            initialChunks: BB.initialChunks.map((BB => ({
              chunkPos: BB.chunkPos,
              rle: OI(BB.rle),
              sharedBlockData: aI("sharedBlockData", BB.sharedBlockData)
            }))),
            ticks: BB.ticks.map(EI),
            editState: BB.editState
          }
        }(BB[kZ[1]]),
        TB = TI(sI[kZ[30]]);
      BB[kZ[16]] = kZ[18];
      try {
        function kB(...BB) {
          for (hZ(BB[kZ[13]] = kZ[2], BB[kZ[2]] = 'u90{$%*k>VOj^:_Xo8D;Lvhb6EAp@PBnZ2I[|z~Mf&s<(/"KH`wSTRCN?Fm!G+)Q#gY=J}5y3cU1W.4]drxaiq,et7l', BB[kZ[14]] = "" + (BB[kZ[1]] || ""), BB[kZ[26]] = BB[kZ[14]].length, BB[kZ[10]] = [], BB[kZ[8]] = kZ[1], BB[-kZ[47]] = kZ[1], BB[kZ[22]] = -kZ[2]), BB[kZ[11]] = kZ[1]; BB[kZ[11]] < BB[kZ[26]]; BB[kZ[11]]++)
            if (BB[kZ[32]] = BB[kZ[2]].indexOf(BB[kZ[14]][BB[kZ[11]]]), BB[kZ[32]] !== -kZ[2])
              if (BB[kZ[22]] < kZ[1]) BB[kZ[22]] = BB[kZ[32]];
              else {
                hZ(BB[kZ[22]] += BB[kZ[32]] * kZ[34], BB[kZ[8]] |= BB[kZ[22]] << BB[-kZ[47]], BB[-kZ[47]] += (BB[kZ[22]] & kZ[35]) > kZ[36] ? kZ[37] : kZ[38]);
                do {
                  hZ(BB[kZ[10]].push(BB[kZ[8]] & kZ[12]), BB[kZ[8]] >>= kZ[11], BB[-kZ[47]] -= kZ[11])
                } while (BB[-kZ[47]] > kZ[22]);
                BB[kZ[22]] = -kZ[2]
              } return BB[kZ[22]] > -kZ[2] && BB[kZ[10]].push((BB[kZ[8]] | BB[kZ[22]] << BB[-kZ[47]]) & kZ[12]), cZ(BB[kZ[10]])
        }

        function cB(...BB) {
          return BB[kZ[13]] = kZ[2], typeof SI[BB[kZ[1]]] === kZ[17] ? SI[BB[kZ[1]]] = kB(BZ[BB[kZ[1]]]) : SI[BB[kZ[1]]]
        }

        function nB(...BB) {
          hZ(BB[kZ[13]] = kZ[1], BB[kZ[16]] = function(...IB) {
            return hZ(IB[kZ[13]] = kZ[0], IB[kZ[16]] = [], IB[-kZ[29]] = IB[kZ[1]].length, IB[kZ[1]].sort(((BB, IB) => BB - IB)), BB[kZ[2]](IB[kZ[16]], [], kZ[1], IB[-kZ[29]], IB[kZ[1]], IB[kZ[2]])), IB[kZ[16]]
          }, BB[kZ[2]] = function(...IB) {
            if (hZ(IB[kZ[13]] = kZ[9], IB[kZ[9]] = kZ[57]), !(IB[kZ[29]] < kZ[1])) {
              if (IB[kZ[29]] === kZ[1]) return IB[kZ[1]].push(IB[kZ[2]]);
              for (IB[kZ[22]] = IB[kZ[0]]; IB[kZ[22]] < IB[kZ[26]] && !(IB[kZ[10]][IB[kZ[22]]] > IB[kZ[29]]); IB[kZ[22]]++) IB[kZ[22]] > IB[kZ[0]] && IB[kZ[10]][IB[kZ[22]]] === IB[kZ[10]][IB[kZ[22]] - kZ[2]] || hZ(IB[kZ[9]] = Array.from(IB[kZ[2]]), IB[kZ[9]].push(IB[kZ[10]][IB[kZ[22]]]), BB[kZ[2]](IB[kZ[1]], IB[kZ[9]], IB[kZ[22]] + kZ[2], IB[kZ[26]], IB[kZ[10]], IB[kZ[29]] - IB[kZ[10]][IB[kZ[22]]]))
            }
          }, console.log(BB[kZ[16]]))
        }
        IB(136) in nZ && nB(), BB[kZ[16]] = TB[cB(137)](ZB)
      } catch (vB) {
        function hB(...BB) {
          for (hZ(BB[kZ[13]] = kZ[2], BB[kZ[2]] = 'gHWhXDIfMk!oLYrKdqlcRTUCaFstVwQ)JuOiySm@nZ3[.,B2"~bAj71pxeN&vE68PG({?%*]>$5;z|_=0+9#}:4/<^`', BB[kZ[0]] = "" + (BB[kZ[1]] || ""), BB[-kZ[48]] = BB[kZ[0]].length, BB[kZ[10]] = [], BB[kZ[8]] = kZ[1], BB[kZ[51]] = kZ[1], BB[-kZ[50]] = -kZ[2]), BB[kZ[11]] = kZ[1]; BB[kZ[11]] < BB[-kZ[48]]; BB[kZ[11]]++)
            if (BB[kZ[49]] = BB[kZ[2]].indexOf(BB[kZ[0]][BB[kZ[11]]]), BB[kZ[49]] !== -kZ[2])
              if (BB[-kZ[50]] < kZ[1]) BB[-kZ[50]] = BB[kZ[49]];
              else {
                hZ(BB[-kZ[50]] += BB[kZ[49]] * kZ[34], BB[kZ[8]] |= BB[-kZ[50]] << BB[kZ[51]], BB[kZ[51]] += (BB[-kZ[50]] & kZ[35]) > kZ[36] ? kZ[37] : kZ[38]);
                do {
                  hZ(BB[kZ[10]].push(BB[kZ[8]] & kZ[12]), BB[kZ[8]] >>= kZ[11], BB[kZ[51]] -= kZ[11])
                } while (BB[kZ[51]] > kZ[22]);
                BB[-kZ[50]] = -kZ[2]
              } return BB[-kZ[50]] > -kZ[2] && BB[kZ[10]].push((BB[kZ[8]] | BB[-kZ[50]] << BB[kZ[51]]) & kZ[12]), cZ(BB[kZ[10]])
        }

        function zB(...BB) {
          return BB[kZ[13]] = kZ[2], typeof SI[BB[kZ[1]]] === kZ[17] ? SI[BB[kZ[1]]] = hB(BZ[BB[kZ[1]]]) : SI[BB[kZ[1]]]
        }
        throw hZ(console[zB(138)](ZB), TB[zB(kZ[61])](ZB, {
          [zB(140) + zB(141)]: (...BB) => function([BB, IB, ZB], TB, JB, oB) {
            oB || (oB = function(...BB) {
              return BB[kZ[13]] = kZ[2], typeof SI[BB[kZ[1]]] === kZ[17] ? SI[BB[kZ[1]]] = JB(BZ[BB[kZ[1]]]) : SI[BB[kZ[1]]]
            }), JB || (JB = function(...BB) {
              for (hZ(BB[kZ[13]] = kZ[2], BB[kZ[2]] = '9HXeCihlcDWR}w;o5%mgvJ{6+BOd<qE3^=&fLIUj[)Sk".rpzA_?t]87YN/QyT1Mu*n`s2P!KbG@:FVZ$~#|x(40a,>', BB[kZ[14]] = "" + (BB[kZ[1]] || ""), BB[kZ[31]] = BB[kZ[14]].length, BB[kZ[10]] = [], BB[kZ[8]] = kZ[1], BB[kZ[9]] = kZ[1], BB[-kZ[33]] = -kZ[2]), BB[kZ[30]] = kZ[1]; BB[kZ[30]] < BB[kZ[31]]; BB[kZ[30]]++)
                if (BB[kZ[32]] = BB[kZ[2]].indexOf(BB[kZ[14]][BB[kZ[30]]]), BB[kZ[32]] !== -kZ[2])
                  if (BB[-kZ[33]] < kZ[1]) BB[-kZ[33]] = BB[kZ[32]];
                  else {
                    hZ(BB[-kZ[33]] += BB[kZ[32]] * kZ[34], BB[kZ[8]] |= BB[-kZ[33]] << BB[kZ[9]], BB[kZ[9]] += (BB[-kZ[33]] & kZ[35]) > kZ[36] ? kZ[37] : kZ[38]);
                    do {
                      hZ(BB[kZ[10]].push(BB[kZ[8]] & kZ[12]), BB[kZ[8]] >>= kZ[11], BB[kZ[9]] -= kZ[11])
                    } while (BB[kZ[9]] > kZ[22]);
                    BB[-kZ[33]] = -kZ[2]
                  } return BB[-kZ[33]] > -kZ[2] && BB[kZ[10]].push((BB[kZ[8]] | BB[-kZ[33]] << BB[kZ[9]]) & kZ[12]), cZ(BB[kZ[10]])
            }), console[oB(116)]("" + BB[kZ[39]](".") + (oB(117) + oB(kZ[41])) + ZB[oB(119) + "me"] + oB(120) + IB)
          }(BB)
        })), vB
      }
      const JB = GI(sI[kZ[30]], BB[kZ[16]]),
        GB = oB[kZ[52]][IB(142)](kZ[10]);
      return GB[IB(143) + IB(144) + "E"](sI[kZ[30]]), oB[kZ[52]].concat([GB, JB])
    }, VI = (...BB) => {
      function IB(...BB) {
        return BB[kZ[13]] = kZ[2], typeof SI[BB[kZ[1]]] === kZ[17] ? SI[BB[kZ[1]]] = function(...BB) {
          for (hZ(BB[kZ[13]] = kZ[2], BB[kZ[53]] = '=07y5u)+?(1%&@|{9#HQ3!c_}D~2JP/6eoAvsrIT,La"V<kGF>MEKmbxSp:4WnOh$Z*[tRX`]YBgiflz.UqwNdC8^j;', BB[kZ[14]] = "" + (BB[kZ[1]] || ""), BB[kZ[26]] = BB[kZ[14]].length, BB[kZ[10]] = [], BB[kZ[8]] = kZ[1], BB[kZ[55]] = kZ[1], BB[kZ[7]] = -kZ[2]), BB[kZ[11]] = kZ[1]; BB[kZ[11]] < BB[kZ[26]]; BB[kZ[11]]++)
            if (BB[-kZ[54]] = BB[kZ[53]].indexOf(BB[kZ[14]][BB[kZ[11]]]), BB[-kZ[54]] !== -kZ[2])
              if (BB[kZ[7]] < kZ[1]) BB[kZ[7]] = BB[-kZ[54]];
              else {
                hZ(BB[kZ[7]] += BB[-kZ[54]] * kZ[34], BB[kZ[8]] |= BB[kZ[7]] << BB[kZ[55]], BB[kZ[55]] += (BB[kZ[7]] & kZ[35]) > kZ[36] ? kZ[37] : kZ[38]);
                do {
                  hZ(BB[kZ[10]].push(BB[kZ[8]] & kZ[12]), BB[kZ[8]] >>= kZ[11], BB[kZ[55]] -= kZ[11])
                } while (BB[kZ[55]] > kZ[22]);
                BB[kZ[7]] = -kZ[2]
              } return BB[kZ[7]] > -kZ[2] && BB[kZ[10]].push((BB[kZ[8]] | BB[kZ[7]] << BB[kZ[55]]) & kZ[12]), cZ(BB[kZ[10]])
        }(BZ[BB[kZ[1]]]) : SI[BB[kZ[1]]]
      }
      BB[kZ[13]] = kZ[2], IB(145) + "D" in nZ && function(...BB) {
        hZ(BB[kZ[13]] = kZ[1], BB[kZ[16]] = function(...BB) {
          for (hZ(BB[kZ[13]] = kZ[2], BB[kZ[56]] = BB[kZ[1]].length, BB[kZ[0]] = [], BB[kZ[26]] = kZ[1]), BB[kZ[10]] = kZ[1]; BB[kZ[10]] < BB[kZ[56]]; BB[kZ[10]]++) BB[kZ[0]].push(BB[kZ[10]] !== kZ[1] && BB[kZ[1]][BB[kZ[10]]] > BB[kZ[1]][BB[kZ[10]] - kZ[2]] ? BB[kZ[0]][BB[kZ[10]] - kZ[2]] + kZ[2] : kZ[2]);
          for (BB[kZ[8]] = BB[kZ[56]] - kZ[2]; BB[kZ[8]] >= kZ[1]; BB[kZ[8]]--) BB[kZ[8]] !== BB[kZ[56]] - kZ[2] && BB[kZ[1]][BB[kZ[8]]] > BB[kZ[1]][BB[kZ[8]] + kZ[2]] && (BB[kZ[0]][BB[kZ[8]]] = Math.max(BB[kZ[0]][BB[kZ[8]]], BB[kZ[0]][BB[kZ[8]] + kZ[2]] + kZ[2])), BB[kZ[26]] += BB[kZ[0]][BB[kZ[8]]];
          return BB[kZ[26]]
        }, console.log(BB[kZ[16]]))
      }();
      const ZB = oB[kZ[52]][IB(146)](BB[kZ[1]]),
        TB = ZB[IB(147) + IB(148)] >= kZ[10] ? ZB[IB(149) + IB(150)](kZ[1]) : kZ[57];
      if (TB !== kZ[57] && (0, wI[kZ[55]])(TB)) {
        function GB(...BB) {
          for (hZ(BB[kZ[13]] = kZ[2], BB[kZ[16]] = 'z>O=0^{mQED]FGCdN[%/HhX+M$3Ztb!U"cIBpvVSf2Yw,AR1(ge<9k7L8`T}x#?uja:5ln~W.)JoiK|&;@q4syr6*_P', BB[kZ[0]] = "" + (BB[kZ[1]] || ""), BB[-kZ[4]] = BB[kZ[0]].length, BB[-kZ[60]] = [], BB[kZ[29]] = kZ[1], BB[kZ[59]] = kZ[1], BB[kZ[7]] = -kZ[2]), BB[kZ[30]] = kZ[1]; BB[kZ[30]] < BB[-kZ[4]]; BB[kZ[30]]++)
            if (BB[kZ[58]] = BB[kZ[16]].indexOf(BB[kZ[0]][BB[kZ[30]]]), BB[kZ[58]] !== -kZ[2])
              if (BB[kZ[7]] < kZ[1]) BB[kZ[7]] = BB[kZ[58]];
              else {
                hZ(BB[kZ[7]] += BB[kZ[58]] * kZ[34], BB[kZ[29]] |= BB[kZ[7]] << BB[kZ[59]], BB[kZ[59]] += (BB[kZ[7]] & kZ[35]) > kZ[36] ? kZ[37] : kZ[38]);
                do {
                  hZ(BB[-kZ[60]].push(BB[kZ[29]] & kZ[12]), BB[kZ[29]] >>= kZ[11], BB[kZ[59]] -= kZ[11])
                } while (BB[kZ[59]] > kZ[22]);
                BB[kZ[7]] = -kZ[2]
              } return BB[kZ[7]] > -kZ[2] && BB[-kZ[60]].push((BB[kZ[29]] | BB[kZ[7]] << BB[kZ[59]]) & kZ[12]), cZ(BB[-kZ[60]])
        }

        function vB(...BB) {
          return BB[kZ[13]] = kZ[2], typeof SI[BB[kZ[1]]] === kZ[17] ? SI[BB[kZ[1]]] = GB(BZ[BB[kZ[1]]]) : SI[BB[kZ[1]]]
        }

        function kB(...BB) {
          hZ(BB[kZ[13]] = kZ[1], BB[-kZ[61]] = function(...BB) {
            for (hZ(BB[kZ[13]] = kZ[2], BB[kZ[16]] = BB[kZ[1]].length, BB[kZ[62]] = [], BB[kZ[26]] = kZ[1], BB[kZ[10]] = kZ[1], BB[kZ[1]].sort(((BB, IB) => BB - IB))), BB[kZ[8]] = kZ[1]; BB[kZ[8]] < BB[kZ[16]]; BB[kZ[8]]++)
              if (!(BB[kZ[8]] > kZ[1] && BB[kZ[1]][BB[kZ[8]]] === BB[kZ[1]][BB[kZ[8]] - kZ[2]]))
                for (hZ(BB[kZ[26]] = BB[kZ[8]] + kZ[2], BB[kZ[10]] = BB[kZ[16]] - kZ[2]); BB[kZ[26]] < BB[kZ[10]];)
                  if (BB[kZ[1]][BB[kZ[8]]] + BB[kZ[1]][BB[kZ[26]]] + BB[kZ[1]][BB[kZ[10]]] < kZ[1]) BB[kZ[26]]++;
                  else if (BB[kZ[1]][BB[kZ[8]]] + BB[kZ[1]][BB[kZ[26]]] + BB[kZ[1]][BB[kZ[10]]] > kZ[1]) BB[kZ[10]]--;
            else {
              for (BB[kZ[62]].push([BB[kZ[1]][BB[kZ[8]]], BB[kZ[1]][BB[kZ[26]]], BB[kZ[1]][BB[kZ[10]]]]); BB[kZ[26]] < BB[kZ[10]] && BB[kZ[1]][BB[kZ[26]]] === BB[kZ[1]][BB[kZ[26]] + kZ[2]];) BB[kZ[26]]++;
              for (; BB[kZ[26]] < BB[kZ[10]] && BB[kZ[1]][BB[kZ[10]]] === BB[kZ[1]][BB[kZ[10]] - kZ[2]];) BB[kZ[10]]--;
              hZ(BB[kZ[26]]++, BB[kZ[10]]--)
            }
            return BB[kZ[62]]
          }, console.log(BB[-kZ[61]]))
        }
        IB(151) + "m" in nZ && kB();
        const cB = ZB[vB(152)](kZ[10]),
          nB = oI(TB) ? oB[kZ[52]][vB(153)](vI(TB, cB)) : cB;
        return function(BB) {
          var IB, ZB, TB, oB, GB;
          const vB = null === (IB = BB.meta) || void 0 === IB ? void 0 : IB.formatVersion;
          if (!(0, wI.f)(vB)) throw new Error(`Unsupported recording format version: ${vB}`);
          if (!Array.isArray(BB.initialChunks) || !Array.isArray(BB.ticks)) throw new Error("Recording is missing initialChunks or ticks");
          for (const JB of BB.ticks)
            if (!Array.isArray(JB.structuralEvents) || !Array.isArray(JB.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
          const kB = {
            ...BB.meta
          };
          return kB.formatVersion = sI.h, (0, JB.L)(kB.variation) && delete kB.variation, {
            meta: kB,
            initialChunks: BB.initialChunks.map((BB => {
              var IB;
              return {
                chunkPos: BB.chunkPos,
                rle: YI(BB.rle),
                sharedBlockData: null !== (IB = HI("sharedBlockData", BB.sharedBlockData)) && void 0 !== IB ? IB : []
              }
            })),
            ticks: BB.ticks.map(DI),
            editState: {
              cameraKeyframes: null !== (ZB = null === (TB = BB.editState) || void 0 === TB ? void 0 : TB.cameraKeyframes) && void 0 !== ZB ? ZB : [],
              playbackMark: null !== (oB = null === (GB = BB.editState) || void 0 === GB ? void 0 : GB.playbackMark) && void 0 !== oB ? oB : null
            }
          }
        }(TI(TB)[vB(154)](nB))
      }
      throw new sI.l(TB)
    })
  },
  36996: (BB, IB, ZB) => {
    ZB.d(IB, {
      D: () => nB,
      G: () => vB,
      e: () => GB,
      h: () => JB,
      l: () => oB,
      p: () => hB,
      s: () => zB,
      t: () => cB,
      w: () => FB,
      z: () => kB
    });
    var TB = ZB(37003);
    const JB = 9;
    class oB extends Error {
      constructor(BB) {
        super(`Unsupported recording format: header ${null!==BB&&void 0!==BB?BB:"missing"}, reading v${TB.b.join(", v")}`), this.older = void 0, this.older = (0, TB.e)(BB)
      }
    }
    const GB = 100,
      vB = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips"],
      kB = ["skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride"],
      cB = ["itemName", "amount", "position", "size", "attributes"],
      nB = ["opacity", "zIndex", "overlayColour", "canSee", "meshScaling", "nameTagInfo", "multilineTextBox", "hasPriorityNametag", "ranks", "nameColour", "_isAlive", "_invisibleEffect", "_invincible", "killfeedColour", "hideNameSeed", "_glowingEffect", "lockHeadToBody"],
      hB = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading", "armour", "Tm", "playerCustomisations", "variation", "metaInfo", "soundName", "volume", "refDistance", "maxHearDist", "rate", "ridingVehicleEId", "leaderboardTop", "meshKind", "meshOpts", "aiState"],
      zB = ["selectedSlotIndex", "slots"],
      FB = ["_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"]
  },
  36990: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => hB,
      g: () => NB,
      i: () => kB,
      l: () => GB,
      n: () => vB,
      q: () => cB
    });
    var TB = ZB(360),
      JB = ZB(24);

    function oB(BB) {
      return null === BB || void 0 === BB ? null : "string" === typeof BB ? BB : null
    }

    function GB(BB, IB) {
      return JSON.stringify(BB) === JSON.stringify(IB)
    }

    function vB(BB) {
      const IB = [];
      for (const ZB of Object.keys(BB)) {
        const TB = BB[ZB];
        for (const BB of Object.keys(TB)) IB.push({
          PB: ZB,
          name: BB,
          ...TB[BB]
        })
      }
      return IB
    }

    function kB(BB) {
      const IB = {};
      for (const oB of BB) {
        var ZB, TB, JB;
        IB[oB.PB] || (IB[oB.PB] = {}), IB[oB.PB][oB.name] = {
          icon: oB.icon,
          level: oB.level,
          displayName: null !== (ZB = oB.displayName) && void 0 !== ZB ? ZB : null,
          endTick: null !== (TB = oB.endTick) && void 0 !== TB ? TB : null,
          showInNametag: null === (JB = oB.showInNametag) || void 0 === JB || JB
        }
      }
      return IB
    }

    function cB(BB, IB) {
      const ZB = {};
      for (const JB of Object.keys(BB)) {
        const oB = {};
        for (const ZB of Object.keys(BB[JB])) {
          const TB = BB[JB][ZB];
          null !== TB.endTick && TB.endTick < IB || (oB[ZB] = {
            ...TB,
            endTick: null === TB.endTick ? null : TB.endTick - IB
          })
        }(0, TB.vc)(oB) || (ZB[JB] = oB)
      }
      return ZB
    }

    function nB(BB, IB, ZB) {
      if (null !== BB) return Math.max(0, 1e3 * (BB - IB) / ZB)
    }
    class hB {
      constructor() {
        this.tracked = {}
      }
      clear() {
        this.tracked = {}
      }
      seedFromClient(BB, IB) {
        this.clear();
        const ZB = Date.now();
        for (const vB of BB.iterateEntityIds()) {
          const kB = BB.getEffects(vB);
          if ((0, TB.vc)(kB)) continue;
          const cB = IB(vB);
          for (const BB of Object.keys(kB)) {
            var JB, GB;
            const IB = kB[BB];
            this.upsert(cB, BB, {
              icon: IB.icon,
              level: IB.level,
              displayName: oB(IB.displayName),
              showInNametag: null === (JB = IB.showInNametag) || void 0 === JB || JB,
              endTime: void 0 !== IB.duration && null !== IB.duration ? (null !== (GB = IB.appliedAt) && void 0 !== GB ? GB : ZB) + IB.duration : null
            })
          }
        }
      }
      upsert(BB, IB, ZB) {
        this.tracked[BB] || (this.tracked[BB] = {}), this.tracked[BB][IB] = ZB
      }
      remove(BB, IB) {
        const ZB = this.tracked[BB];
        ZB && (delete ZB[IB], (0, TB.vc)(ZB) && delete this.tracked[BB])
      }
      handleUpdate(BB) {
        var IB;
        0 !== BB.duration ? this.upsert(BB.PB, BB.name, {
          icon: BB.icon,
          level: BB.level,
          displayName: oB(BB.displayName),
          showInNametag: null === (IB = BB.showInNametag) || void 0 === IB || IB,
          endTime: void 0 !== BB.duration && null !== BB.duration ? Date.now() + BB.duration : null
        }) : this.remove(BB.PB, BB.name)
      }
      handleRemove(BB, IB) {
        this.remove(BB, IB)
      }
      sample(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        const JB = {},
          oB = 1e3 / IB;
        for (const GB of Object.keys(this.tracked)) {
          const IB = this.tracked[GB],
            vB = {};
          for (const TB of Object.keys(IB)) {
            const JB = IB[TB];
            let kB = null;
            if (null !== JB.endTime) {
              const IB = Math.max(0, JB.endTime - ZB);
              if (0 === IB) {
                this.remove(GB, TB);
                continue
              }
              kB = BB + Math.ceil(IB / oB)
            }
            vB[TB] = {
              icon: JB.icon,
              level: JB.level,
              displayName: JB.displayName,
              endTick: kB,
              showInNametag: JB.showInNametag
            }
          }(0, TB.vc)(vB) || (JB[GB] = vB)
        }
        return JB
      }
    }

    function zB(BB, IB, ZB, TB) {
      BB.hasEntity(IB) ? BB.updateEffect(IB, ZB, TB) : function(BB, IB, ZB) {
        JB.l.Gq("EffectUpdate", {
          PB: BB,
          name: IB,
          ...ZB
        }, !0)
      }(IB, ZB, TB)
    }

    function FB(BB, IB, ZB) {
      BB.hasEntity(IB) ? BB.removeEffect(IB, ZB) : function(BB, IB) {
        JB.l.Gq("RemoveEffect", {
          PB: BB,
          name: IB
        }, !0)
      }(IB, ZB)
    }

    function NB(BB, IB, ZB, TB, JB, oB, GB) {
      for (const nB of Object.keys(ZB))
        for (const oB of Object.keys(ZB[nB])) {
          var vB;
          null !== (vB = IB[nB]) && void 0 !== vB && vB[oB] || (FB(BB, nB, oB), TB && nB === TB && String(JB) !== String(nB) && FB(BB, JB, oB))
        }
      for (const gB of Object.keys(IB))
        for (const vB of Object.keys(IB[gB])) {
          var kB, cB;
          const qB = IB[gB][vB],
            yB = nB(qB.endTick, oB, GB);
          if (0 === yB) {
            FB(BB, gB, vB), TB && gB === TB && String(JB) !== String(gB) && FB(BB, JB, vB);
            continue
          }
          const UB = null === (kB = ZB[gB]) || void 0 === kB ? void 0 : kB[vB],
            WB = UB && (NB = qB, (hB = UB).icon === NB.icon && hB.level === NB.level && hB.displayName === NB.displayName && hB.endTick === NB.endTick && hB.showInNametag === NB.showInNametag),
            dB = {
              icon: qB.icon,
              level: qB.level,
              displayName: null !== (cB = qB.displayName) && void 0 !== cB ? cB : void 0,
              duration: yB,
              showInNametag: qB.showInNametag
            };
          WB || zB(BB, gB, vB, dB), TB && gB === TB && zB(BB, JB, vB, {
            ...dB,
            showInNametag: !1
          })
        }
      var hB, NB
    }
  },
  36984: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => nB,
      e: () => cB,
      g: () => zB,
      i: () => vB,
      l: () => hB
    });
    var TB = ZB(36979),
      JB = ZB(36986),
      oB = ZB(313);
    const GB = {
      description: "Bloxd Replay",
      accept: {
        [TB.f]: TB.c
      }
    };

    function vB() {
      return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker && !(0, oB.c)()
    }

    function kB(BB) {
      return BB instanceof DOMException && "AbortError" === BB.name
    }
    async function cB() {
      try {
        const [BB] = await window.showOpenFilePicker({
          multiple: !1,
          types: [GB]
        }), IB = await BB.getFile();
        return {
          handle: BB,
          bytes: new Uint8Array(await IB.arrayBuffer())
        }
      } catch (BB) {
        if (kB(BB)) return null;
        throw BB
      }
    }
    async function nB(BB) {
      if (BB && await async function(BB) {
          const IB = {
            mode: "readwrite"
          };
          return "granted" === await BB.queryPermission(IB) || "granted" === await BB.requestPermission(IB)
        }(BB)) return BB;
      try {
        return await window.showSaveFilePicker({
          suggestedName: (0, TB.l)(),
          types: [GB]
        })
      } catch (IB) {
        if (kB(IB)) return null;
        throw IB
      }
    }
    async function hB(BB, IB) {
      const ZB = await BB.createWritable();
      await ZB.write(new Blob([IB], {
        type: TB.f
      })), await ZB.close()
    }

    function zB(BB) {
      return (0, TB.j)((0, JB.f)(BB))
    }
  },
  36478: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => hB
    });
    var TB = ZB(20),
      JB = ZB(105),
      oB = ZB(36),
      GB = ZB(3733),
      vB = ZB(3640),
      kB = ZB(6808);
    const cB = "shaderPackListingCheckedAt",
      nB = 36e5;

    function hB() {
      const {
        canUseShaderPacks: BB
      } = JB.featureFlags.settings;
      var IB, hB;
      (0, vB.j)(BB) && !(0, vB.i)(BB) && (IB = oB.m.getItem(cB), hB = Date.now(), "number" !== typeof IB || hB < IB || hB - IB >= nB) && (0, GB.c)((() => {
        (async function() {
          if ("landingPage" !== TB.d.get("gameState")) return;
          const BB = await (0, kB.i)();
          if (void 0 === (null === BB || void 0 === BB ? void 0 : BB.listing)) return;
          oB.m.setItem(cB, Date.now());
          const {
            followListingUpdates: IB
          } = await Promise.all([ZB.e(78), ZB.e(136), ZB.e(132)]).then((() => ZB(41326)));
          await IB(BB, BB.listing) || oB.m.removeItem(cB)
        })().catch((BB => {
          console.error("Failed to check the shader pack listing for an update", BB)
        }))
      }))
    }
  },
  9025: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => vB,
      h: () => JB,
      j: () => oB,
      n: () => GB
    });
    let TB = null;

    function JB(BB, IB) {
      return `${IB}\n${null!==BB&&void 0!==BB?BB:""}`
    }

    function oB(BB) {
      TB = BB
    }

    function GB(BB) {
      const IB = TB;
      return TB = null, null !== IB && IB.key === BB ? IB.settled : null
    }

    function vB(BB, IB, ZB, TB) {
      let JB = !1;
      null !== IB && setTimeout((() => {
        TB() && !JB && IB()
      }), 0), BB.then((BB => {
        JB = !0, ZB(BB)
      }))
    }
  },
  36524: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => kB
    });
    var TB = ZB(342),
      JB = ZB(20),
      oB = ZB(36529),
      GB = ZB(1711),
      vB = ZB(2066);

    function kB(BB, IB) {
      var ZB, kB, cB;
      if (!JB.d.get("isKeydownEnabled") || BB.repeat) return;
      const nB = BB.code;
      "Escape" === BB.key ? (0, GB.f)(BB) : null !== (ZB = vB.u.OpenSettings) && void 0 !== ZB && ZB.includes(nB) ? (0, GB.x)(BB, TB.q.SETTINGS) : null !== (kB = vB.u.OpenCharacterCustomization) && void 0 !== kB && kB.includes(nB) ? (0, oB.d)() || (0, GB.x)(BB, TB.q.CUSTOMISATION, IB()) : null !== (cB = vB.u.ShowDebugOverlay) && void 0 !== cB && cB.includes(nB) && JB.d.set({
        showDebugOverlay: !JB.d.get("showDebugOverlay")
      })
    }
  },
  36483: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => PB,
      e: () => XB
    });
    var TB = ZB(665),
      JB = ZB(1290),
      oB = ZB(168);
    const GB = "cf-";

    function vB(BB) {
      return `${GB}${BB}`
    }

    function kB(BB) {
      return BB.startsWith(vB("game-server-"))
    }

    function cB(BB) {
      return /^game-server-[a-z0-9-]+\.bloxd\.io$/i.test(BB)
    }
    var nB = ZB(1305),
      hB = ZB(1281),
      zB = ZB(24),
      FB = ZB(1261),
      NB = ZB(1837),
      gB = ZB(1868),
      qB = ZB(3126),
      yB = ZB(1370),
      UB = ZB(1382),
      WB = ZB(1561),
      dB = ZB(1258),
      CB = ZB(36485),
      QB = ZB(36),
      sB = ZB(140),
      wB = ZB(1878),
      OB = ZB(36516);
    const YB = Date.UTC(2026, 11, 8),
      iB = new Set(["seat_lost", "socket_unopened", "socket_timeout_unopened"]),
      pB = "gameServerRoute";
    async function aB(BB) {
      if (!BB.ok) {
        const IB = await BB.text().catch((() => ""));
        return 403 === BB.status && "ipv6_unsupported" === IB ? "ipv6Refused" : "other"
      }
      const IB = await BB.json().catch((() => null));
      return "object" === typeof IB && null !== IB && Number.isFinite(IB.version) ? "ours" : "other"
    }
    const HB = new class {
      constructor(BB) {
        this.deps = BB, this.autoRetriesLeft = 1, this.armReported = !1, this.pageArm = null, this.aliasFailedAt = null
      }
      hostFor(BB) {
        return this.deps.enabled && cB(BB) && "cloudflare" === this.heldRoute() ? vB(BB) : BB
      }
      async afterJoinFailed(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if (!this.deps.enabled) return null;
        const TB = new URL(BB).hostname;
        return kB(TB) ? await this.afterAliasJoinFailed(TB, IB, ZB) : void 0 !== IB.gameServerUnreachable && this.checksJoinsTo(TB) && this.settle(await this.check(TB)) ? "reroute" : null
      }
      takeAutoRetry() {
        return !(this.autoRetriesLeft <= 0) && (this.autoRetriesLeft--, !0)
      }
      async waitToRetry(BB) {
        const IB = 1e3 + 2e3 * this.deps.random();
        return await this.deps.sleep(IB, BB).then((() => !0), (() => !1))
      }
      afterAutoRetryJoined(BB) {
        this.deps.enabled && this.deps.JN("game_server_route", "cf_retry_joined", BB)
      }
      afterAutoRetryFailed(BB) {
        if (!this.deps.enabled) return;
        if (null === BB) return void this.deps.JN("game_server_route", "cf_retry_failed:matchmake", 0);
        const {
          joinFailure: IB
        } = BB;
        void 0 === IB ? this.deps.JN("game_server_route", "cf_retry_failed:other", 0) : "refused" === IB.at ? this.deps.JN("game_server_route", "cf_retry_failed:refused", IB.code) : this.deps.JN("game_server_route", `cf_retry_failed:${IB.at}`, IB.code)
      }
      afterMatchmade(BB) {
        var IB;
        if (!this.deps.enabled) return;
        const ZB = null === (IB = this.stored()) || void 0 === IB ? void 0 : IB.recoveryArm;
        if (void 0 !== ZB && null !== this.heldRoute() && this.reportArm(ZB), null === this.aliasFailedAt) return;
        const TB = kB(new URL(BB).hostname);
        this.deps.JN("game_server_route", TB ? "manual_retry_cf" : "manual_retry_direct", this.deps.now() - this.aliasFailedAt), this.aliasFailedAt = null
      }
      async checkStalledJoin(BB, IB, ZB) {
        const TB = new URL(BB).hostname;
        if (!this.deps.enabled || !this.checksJoinsTo(TB) || !await this.deps.seatLegs.whenSlow(IB)) return null;
        const JB = this.deps.seatLegs.answered,
          oB = await this.check(TB);
        return ZB() ? this.settle(oB) ? "blocked" : "reported" : "blocked" !== oB.outcome || IB.aborted || this.deps.seatLegs.answered !== JB ? null : (this.settle(oB), "blocked")
      }
      afterAliasJoinLeft(BB) {
        this.deps.enabled && (this.reportArm(), this.deps.JN("game_server_route", "cf_join_left", BB))
      }
      afterJoined(BB) {
        if (!this.deps.enabled) return;
        this.aliasFailedAt = null;
        const IB = new URL(BB).hostname,
          ZB = kB(IB);
        if (ZB) this.reportArm(), this.deps.JN("game_server_route", "cf_join", 0);
        else if (!cB(IB) || this.deps.random() >= .01) return;
        const TB = ZB ? IB.slice(GB.length) : IB;
        this.deps.delay(2e4).then((async () => {
          await this.reportRtt(TB, "direct", "direct_failed"), await this.reportRtt(vB(TB), "cf", "cf_failed")
        }))
      }
      async afterAliasJoinFailed(BB, IB, ZB) {
        let {
          gameServerUnreachable: TB,
          joinFailure: JB
        } = IB;
        if (void 0 === JB) return null;
        if ("refused" === JB.at) return this.reportArm(), this.deps.JN("game_server_route", "cf_join_refused", JB.code), null;
        const oB = this.recoveryArm();
        if (this.reportArm(oB), this.deps.JN("game_server_route", `cf_join_failed:${JB.at}`, JB.code), null !== ZB && this.deps.JN("game_server_route", "cf_failed_since_route", ZB), this.aliasFailedAt = this.deps.now(), void 0 === TB) return null;
        const GB = this.stored();
        return "cloudflare" !== (null === GB || void 0 === GB ? void 0 : GB.route) || "on" !== oB && GB.aliasFailedOnce || "ours" !== (await this.probeHost(BB)).answer ? (this.store({
          route: "direct",
          until: this.deps.now() + 36e5
        }), null) : "holdout" === oB ? (this.store({
          ...GB,
          aliasFailedOnce: !0
        }), null) : "cloudflare" === this.heldRoute() && iB.has(JB.at) ? "retry" : null
      }
      recoveryArm() {
        if (this.deps.now() >= YB) return "on";
        const BB = this.stored();
        return void 0 !== (null === BB || void 0 === BB ? void 0 : BB.recoveryArm) ? BB.recoveryArm : (this.pageArm ??= 100 * this.deps.random() < 20 ? "holdout" : "on", null !== BB && this.store(BB), this.pageArm)
      }
      reportArm(BB) {
        this.armReported || this.deps.now() >= YB || (this.armReported = !0, this.deps.JN("game_server_route", "holdout" === (null !== BB && void 0 !== BB ? BB : this.recoveryArm()) ? "alias_recovery_holdout" : "alias_recovery_on", 0))
      }
      checksJoinsTo(BB) {
        return cB(BB) && "direct" !== this.heldRoute()
      }
      settle(BB) {
        let {
          outcome: IB,
          cfMs: ZB
        } = BB;
        return this.deps.JN("game_server_route", IB, ZB), "blocked" === IB && (this.store({
          route: "cloudflare",
          until: this.deps.now() + 1728e5
        }), !0)
      }
      async check(BB) {
        const IB = this.probeHost(vB(BB));
        if ("none" !== (await this.probeHost(BB)).answer) return {
          outcome: "direct_reachable",
          cfMs: 0
        };
        const {
          answer: ZB,
          ms: TB
        } = await IB;
        return "ours" !== ZB && "ipv6Refused" !== ZB ? {
          outcome: "cf_unreachable",
          cfMs: 0
        } : "none" !== (await this.probeHost(BB)).answer ? {
          outcome: "direct_reachable",
          cfMs: TB
        } : {
          outcome: "ipv6Refused" === ZB ? "blocked_ipv6" : "blocked",
          cfMs: TB
        }
      }
      async reportRtt(BB, IB, ZB) {
        const TB = "ours" === (await this.probeHost(BB)).answer ? await this.probeHost(BB) : null;
        "ours" === (null === TB || void 0 === TB ? void 0 : TB.answer) ? this.deps.JN("game_server_rtt", IB, TB.ms): this.deps.JN("game_server_rtt", ZB, 0)
      }
      probeHost(BB) {
        return this.deps.probe(`https://${BB}/version`, 8e3)
      }
      stored() {
        return function(BB) {
          if ("object" !== typeof BB || null === BB) return null;
          const {
            route: IB,
            until: ZB,
            aliasFailedOnce: TB,
            recoveryArm: JB
          } = BB;
          return "cloudflare" !== IB && "direct" !== IB || "number" !== typeof ZB ? null : {
            route: IB,
            until: ZB,
            ...!0 === TB ? {
              aliasFailedOnce: TB
            } : {},
            ..."on" === JB || "holdout" === JB ? {
              recoveryArm: JB
            } : {}
          }
        }(this.deps.storage.getItem(pB))
      }
      heldRoute() {
        const BB = this.stored();
        return null !== BB && BB.until > this.deps.now() ? BB.route : null
      }
      store(BB) {
        var IB, ZB, TB, JB;
        const oB = null !== (IB = null !== (ZB = null !== (TB = BB.recoveryArm) && void 0 !== TB ? TB : null === (JB = this.stored()) || void 0 === JB ? void 0 : JB.recoveryArm) && void 0 !== ZB ? ZB : this.pageArm) && void 0 !== IB ? IB : void 0;
        this.deps.storage.setItem(pB, void 0 === oB ? BB : {
          ...BB,
          recoveryArm: oB
        })
      }
    }({
      storage: QB.m,
      probe: async function(BB, IB) {
        const ZB = performance.now(),
          TB = await (0, FB.k)(BB, {
            cache: "no-store"
          }, IB, (async BB => {
            const IB = Math.round(performance.now() - ZB);
            return {
              answer: await aB(BB),
              ms: IB
            }
          }));
        return null !== TB && void 0 !== TB ? TB : {
          answer: "none",
          ms: 0
        }
      },
      JN: NB.A,
      enabled: !(0, sB.isDiscordClient)(),
      now: Date.now,
      random: Math.random,
      delay: BB => new Promise((IB => {
        setTimeout(IB, BB)
      })),
      sleep: wB.b,
      seatLegs: OB.h
    });
    var MB = ZB(1787),
      jB = ZB(9025);

    function PB(BB) {
      return async (IB, ZB, GB, vB, cB) => {
        let hB, WB = performance.now();
        if ((0, TB.L)(GB)) {
          if (cB.aborted) return rB();
          const BB = IB instanceof JB.c ? null : (0, jB.n)((0, jB.h)(IB, ZB));
          let TB = await (null !== BB && void 0 !== BB ? BB : XB(IB, ZB, vB));
          if (null !== BB && performance.now() - TB.at > mB && !cB.aborted) {
            const BB = await XB(IB, ZB, vB);
            BB.result.isError() && !TB.result.isError() || (TB = BB)
          }
          const oB = TB.result;
          if (WB = TB.at, cB.aborted || qB.e.matchmakingEnded(oB.isError() ? null : TB.at), oB.isError()) {
            const BB = oB.asError();
            return console.log("Join room did not succeed, reason:", BB.message), BB.forward()
          }
          hB = oB.getValue(), HB.afterMatchmade(hB.endpoint)
        } else {
          qB.e.skipPlayWait();
          const BB = eB(GB.replace("https://", "").replace("http://", ""));
          if (BB.isError()) return BB.asError().forward();
          hB = {
            endpoint: BB.getValue(),
            gameNameWithVariation: ZB,
            lobbyName: IB instanceof JB.c ? IB.getLobbyName() : IB
          }
        }
        if (cB.aborted) return rB();
        console.log(`Connecting to ${hB.gameNameWithVariation} in lobby ${hB.lobbyName} on game server ${hB.endpoint}`), zB.l.Gq("matchmakeAndPlayStepCompleted", {
          step: oB.l.REQUEST_TO_MATCHMAKING,
          totalSubSteps: 1
        }), (0, NB.k)(), gB.d.markGameLoadStart((0, MB.g)()), (0, UB.l)({
          websocketUrl: hB.endpoint,
          gameNameWithVariation: hB.gameNameWithVariation,
          lobbyName: hB.lobbyName
        }), zB.l.Gq("loadingScreenState", "loadingPage:loadingGame");
        const dB = async () => {
          const BB = await async function(BB, IB, ZB, TB) {
            const JB = await LB(BB, IB, ZB);
            if (!JB.isError() && !TB.aborted) {
              const {
                endpoint: BB,
                gameNameWithVariation: IB,
                lobbyName: ZB
              } = JB.getValue();
              (0, UB.l)({
                websocketUrl: BB,
                gameNameWithVariation: IB,
                lobbyName: ZB
              })
            }
            return JB
          }(IB, ZB, vB, cB);
          return BB.isError() || (hB = BB.getValue(), WB = performance.now()), BB
        }, CB = !(0, TB.L)(GB), QB = IB => BB({
          place: hB,
          userContext: vB,
          direct: CB,
          matchedAt: WB,
          rematch: dB
        }, IB), sB = () => kB(new URL(hB.endpoint).hostname), wB = sB() ? performance.now() : null, OB = CB ? {
          result: await QB(cB),
          blockedAt: null,
          failureChecked: !1
        } : await async function(BB, IB, ZB) {
          const TB = new FB.c(ZB),
            JB = new AbortController;
          let oB = null,
            GB = !1,
            vB = null;
          const kB = HB.checkStalledJoin(BB, JB.signal, (() => GB)).then((BB => {
            vB = BB, "blocked" === BB && (oB = performance.now(), TB.controller.abort())
          }));
          try {
            const BB = await IB(TB.signal);
            return GB = BB.isError() && void 0 !== BB.asError().debugResult.gameServerUnreachable, JB.abort(), GB && await kB, {
              result: BB,
              blockedAt: oB,
              failureChecked: "reported" === vB
            }
          } finally {
            JB.abort(), TB.unfollow()
          }
        }(hB.endpoint, QB, cB);
        let YB = null !== wB && void 0 !== wB ? wB : OB.blockedAt,
          iB = OB.result;
        const pB = () => null === YB ? null : performance.now() - YB,
          aB = iB.isError() && !0 === iB.asError().debugResult.rematch;
        let PB = null;
        if (!iB.isError() || CB || cB.aborted || aB || null !== OB.blockedAt || OB.failureChecked || (PB = await HB.afterJoinFailed(hB.endpoint, iB.asError().debugResult, pB())), iB.isError() && !CB && ("reroute" === PB || !cB.aborted && (aB || null !== OB.blockedAt))) {
          if (aB || (YB ??= performance.now(), zB.l.Gq("gameServerRouteSwitched")), cB.aborted) return RB(YB), rB();
          console.log("Matchmaking again");
          const BB = await dB();
          if (BB.isError()) return BB.asError().forward();
          if (cB.aborted) return RB(YB), rB();
          iB = await QB(cB), PB = null, !iB.isError() || cB.aborted || aB && !sB() || (PB = await HB.afterJoinFailed(hB.endpoint, iB.asError().debugResult, pB()))
        }
        if (iB.isError() && "retry" === PB && !cB.aborted && HB.takeAutoRetry()) {
          if (!await HB.waitToRetry(cB)) return rB();
          console.log("Joining through Cloudflare again");
          const BB = await dB();
          if (cB.aborted) return rB();
          if (BB.isError()) return HB.afterAutoRetryFailed(null), iB.asError().forward();
          if (iB = await QB(cB), iB.isError() && !cB.aborted) {
            const BB = iB.asError().debugResult;
            await HB.afterJoinFailed(hB.endpoint, BB, null), HB.afterAutoRetryFailed(BB)
          } else if (!iB.isError()) {
            var uB;
            HB.afterAutoRetryJoined(null !== (uB = pB()) && void 0 !== uB ? uB : 0)
          }
        }
        return iB.isError() ? (!0 === iB.asError().debugResult.fZ && cB.aborted && RB(YB), iB.asError().forward()) : (HB.afterJoined(hB.endpoint), (0, yB.Q)(), window.gtag ? window.gtag("event", "conversion", {
          send_to: "AW-16469618203/ipUBCJKWoJUZEJvcqa09"
        }) : console.error("window.gtag not defined"), nB.b.value({
          gameNameWithVariation: hB.gameNameWithVariation,
          lobbyName: hB.lobbyName
        }))
      }
    }

    function RB(BB) {
      null !== BB && HB.afterAliasJoinLeft(performance.now() - BB)
    }

    function rB() {
      return nB.b.errorWithCode("Left the game while it loaded", oB.l.REQUEST_TO_MATCHMAKING, {
        severity: "low",
        fZ: !0
      })
    }
    setTimeout((() => {
      window.initialD ? Date.now = window.initialD : console.error("window.initialD not defined")
    }), 3e3);
    const mB = 1e4;

    function XB(BB, IB, ZB) {
      return LB(BB, IB, ZB).then((BB => ({
        result: BB,
        at: performance.now()
      })))
    }
    async function LB(BB, IB, ZB) {
      return (0, TB.L)(BB) || BB instanceof JB.c || !(BB.length > hB.H) ? await WB.c.matchmakePlayer(ZB, BB, IB, (0, CB.b)()).then((BB => {
        if (!1 === BB.succeeded) return nB.b.errorWithCode(BB.failReason, oB.l.REQUEST_TO_MATCHMAKING, {
          severity: "low"
        });
        const {
          gameServerHost: IB,
          lobbyName: ZB,
          gameNameWithVariation: TB
        } = BB, JB = eB(HB.hostFor(IB));
        return JB.isError() ? JB.asError().forward() : nB.b.value({
          endpoint: JB.getValue(),
          gameNameWithVariation: TB,
          lobbyName: ZB
        })
      })).catch((BB => (console.error("Bad response from the matchmaking server:", BB), nB.b.errorWithCode(BB.toString(), oB.l.REQUEST_TO_MATCHMAKING, {
        error: BB,
        severity: "medium"
      })))) : (console.error("Invalid lobby ID:", BB), nB.b.errorWithCode("This lobby link's name is too long. Ask for a new link.", oB.l.REQUEST_TO_MATCHMAKING, {
        severity: "low"
      }))
    }

    function eB(BB) {
      const IB = dB.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(BB);
      return IB.isError() ? nB.b.errorWithCode(IB.asError().message, oB.l.CONNECT_TO_GAME_SERVER, {
        severity: "medium"
      }) : nB.b.value(IB.getValue())
    }
    window.leaveGame = () => {
      (0, UB.i)("/")
    }
  },
  8885: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => GB
    });
    var TB = ZB(8890),
      JB = ZB(665),
      oB = ZB(140);

    function GB(BB) {
      var IB, ZB;
      if ((0, JB.L)(BB)) return !0;
      const GB = null !== (IB = null === (ZB = oB.siteUsedData[oB.siteUsed]) || void 0 === ZB ? void 0 : ZB.adConfig.showRewardedAds) && void 0 !== IB && IB;
      for (const JB in BB) {
        const IB = BB[JB];
        if (null !== IB && void 0 !== IB && IB.items)
          for (const BB in IB.items)
            if ((0, TB.o)(IB.items[BB], GB)) return !1
      }
      return !0
    }
  },
  36596: (BB, IB, ZB) => {
    function TB(BB, IB) {
      for (let ZB = 0; ZB < BB.length; ZB++)
        if (BB[ZB].identifier === IB) return BB[ZB];
      return null
    }

    function JB(BB, IB) {
      return null !== TB(BB, IB)
    }
    ZB.d(IB, {
      d: () => TB,
      h: () => JB
    })
  },
  36602: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => nB,
      f: () => zB,
      j: () => yB,
      k: () => cB
    });
    var TB = ZB(20),
      JB = ZB(2481),
      oB = ZB(2489),
      GB = ZB(2497),
      vB = ZB(2590),
      kB = ZB(24);

    function cB(BB, IB) {
      return (!(0, GB.d)() || 0 === BB && 0 === IB) && (0, oB.A)(JB.d.Joystick, 0, BB, IB, 0)
    }
    const nB = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function hB(BB) {
      return BB.classList.contains("TouchKeyHit") && FB() ? null : BB.firstElementChild
    }

    function zB(BB) {
      return BB.classList.contains("TouchKeyHit") && !BB.classList.contains("CanvasZone") ? {
        whole: !FB(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: NB(hB(BB))
      }
    }

    function FB() {
      return document.documentElement.classList.contains(vB.j)
    }

    function NB(BB) {
      return !(BB instanceof HTMLElement) || BB.offsetWidth <= 0 || BB.offsetHeight <= 0 ? null : {
        width: BB.offsetWidth,
        height: BB.offsetHeight
      }
    }

    function gB(BB, IB) {
      const ZB = BB => Math.min(65535, Math.round(4 * BB));
      return (ZB(BB) | ZB(IB) << 16) >>> 0
    }

    function qB(BB) {
      return {
        x: BB.left + BB.width / 2,
        y: BB.top + BB.height / 2,
        radius: Math.min(BB.width, BB.height) / 2
      }
    }
    const yB = new class {
      constructor(BB) {
        this.write = BB, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        IB ? this.elements.set(BB, {
          element: IB,
          hidden: ZB
        }) : this.elements.delete(BB), this.measureOne(BB)
      }
      measure() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = BB.left, this.canvasTop = BB.top;
        for (const IB of this.elements.keys()) this.measureOne(IB)
      }
      hitZone(BB, IB) {
        let ZB = null,
          TB = 1;
        for (const JB of this.elements.keys()) {
          const oB = this.shown(JB);
          if (!oB) continue;
          const {
            rect: GB,
            element: vB
          } = oB, kB = qB(GB), cB = Math.max(0, GB.width / 2 - kB.radius), nB = Math.max(0, GB.height / 2 - kB.radius), zB = Math.max(0, Math.abs(BB - kB.x) - cB), FB = Math.max(0, Math.abs(IB - kB.y) - nB), gB = vB.firstElementChild;
          let yB = Math.hypot(zB, FB) / kB.radius;
          const UB = NB(hB(vB));
          UB && (yB = Math.min(yB, Math.max(2 * Math.abs(BB - kB.x) / UB.width, 2 * Math.abs(IB - kB.y) / UB.height))), yB < TB && (ZB = {
            code: JB,
            element: vB,
            key: gB,
            ...kB
          }, TB = yB)
        }
        return ZB
      }
      measureOne(BB) {
        const IB = this.shown(BB);
        if (!IB) return void this.write(JB.d.TouchZone, BB, 0, 0, 0);
        const {
          rect: ZB,
          element: TB
        } = IB, oB = qB(ZB);
        this.write(JB.d.TouchZone, BB, oB.x - this.canvasLeft, oB.y - this.canvasTop, gB(ZB.width, ZB.height));
        const GB = NB(hB(TB));
        this.write(JB.d.TouchZone, 256 | BB, 0, 0, GB ? gB(GB.width, GB.height) : 0)
      }
      shown(BB) {
        const IB = this.elements.get(BB),
          ZB = TB.d.get("worldPanelHud");
        if (!IB || IB.hidden || "none" === ZB) return null;
        const JB = IB.element.getBoundingClientRect();
        return JB.width <= 0 || JB.height <= 0 ? null : {
          rect: JB,
          element: IB.element
        }
      }
    }(oB.A);
    (0, kB.p)(vB.e, (() => {
      yB.measure()
    }))
  },
  36869: (BB, IB, ZB) => {
    function TB(BB) {
      return "fetch" === BB || "timeout" === BB || "integrity" === BB ? "download" : "browser"
    }
    ZB.d(IB, {
      c: () => JB,
      d: () => GB,
      g: () => kB,
      k: () => vB,
      n: () => TB,
      q: () => oB
    });
    const JB = "https://discord.gg/playbloxd";

    function oB(BB) {
      return "download" === BB ? {
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

    function GB(BB, IB) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: IB ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: BB.code
        },
        discordLink: IB,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function vB() {
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

    function kB(BB, IB, ZB) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: ZB ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: BB.reason
        },
        discordLink: null === BB.name,
        confirm: IB ? "general:reconnect" : BB.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  36926: (BB, IB, ZB) => {
    function TB(BB, IB) {
      return null === BB || null === IB ? BB === IB : BB[0] === IB[0] && BB[1] === IB[1] && BB[2] === IB[2]
    }

    function JB(BB) {
      return [BB[0] + .5, BB[1] + .5, BB[2] + .5]
    }
    ZB.d(IB, {
      e: () => JB,
      h: () => TB
    })
  },
  36878: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => kB,
      e: () => vB
    });
    const TB = {
        files: {
          "debugLog.ts": "export function debugLog(message: string): void {\n\tconsole.log(`[debug] ${message}`)\n}\n",
          "index.ts": 'import type { PlayerId } from "@bloxd"\nimport { debugLog } from "./debugLog"\n\nonPlayerJoin = (player: PlayerId) => {\n\tapi.log(`Player ${player} joined - Love from Debug Plugin!`)\n}\n\nexport { debugLog }\n'
        },
        dependencies: [],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  debugLog: () => debugLog\n});\nmodule.exports = __toCommonJS(index_exports);\n\n// world-code-plugin:debugLog.ts\nfunction debugLog(message) {\n  console.log(`[debug] ${message}`);\n}\n\n// world-code-plugin:index.ts\nonPlayerJoin = (player) => {\n  api.log(`Player ${player} joined - Love from Debug Plugin!`);\n};\n',
        types: "declare function debugLog(message: string): void;\n\nexport { debugLog };\n"
      },
      JB = {
        files: {
          "index.ts": 'import type { CustomTextStyling, DialogueText, PlayerId, SpeechVoice } from "@bloxd"\nimport { clearTimeout, setTimeout, TimeoutId } from "@plugins/helpers"\n\n/** Long enough to read most lines once they have appeared. */\nconst DEFAULT_DURATION_MS = 6000\n\nexport type DialogueOpts = {\n\t/** Shown above the line, such as a name. */\n\tspeakerName?: string | CustomTextStyling\n\t/** A preset such as "regular" or "gruff", or every synth parameter. Omit for a silent line. */\n\tvoice?: SpeechVoice\n\t/** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n\tdurationMs?: number\n}\n\nconst hideTimeouts: Record<PlayerId, TimeoutId> = {}\n\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item\'s icon inline\n * @param opts - The speaker\'s name, the voice that reads it out, and how long it stays up\n */\nexport function sayDialogue(playerId: PlayerId, text: DialogueText, opts: DialogueOpts = {}) {\n\tif (hideTimeouts[playerId] !== undefined) {\n\t\tclearTimeout(hideTimeouts[playerId])\n\t\t// Cleared first, so a line said again replays rather than matching the value already set\n\t\tapi.setClientOption(playerId, "dialogue", null)\n\t}\n\tapi.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice })\n\thideTimeouts[playerId] = setTimeout(\n\t\t() => {\n\t\t\tclearDialogue(playerId)\n\t\t},\n\t\topts.durationMs ?? DEFAULT_DURATION_MS,\n\t\tplayerId,\n\t)\n}\n\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\nexport function clearDialogue(playerId: PlayerId) {\n\tif (hideTimeouts[playerId] === undefined) {\n\t\treturn\n\t}\n\tclearTimeout(hideTimeouts[playerId])\n\tdelete hideTimeouts[playerId]\n\tapi.setClientOption(playerId, "dialogue", null)\n}\n\nonPlayerLeave = (playerId: PlayerId) => {\n\tdelete hideTimeouts[playerId]\n}\n'
        },
        dependencies: ["helpers"],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  clearDialogue: () => clearDialogue,\n  sayDialogue: () => sayDialogue\n});\nmodule.exports = __toCommonJS(index_exports);\nvar import_helpers = require("@plugins/helpers");\nvar DEFAULT_DURATION_MS = 6e3;\nvar hideTimeouts = {};\nfunction sayDialogue(playerId, text, opts = {}) {\n  if (hideTimeouts[playerId] !== void 0) {\n    (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n    api.setClientOption(playerId, "dialogue", null);\n  }\n  api.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice });\n  hideTimeouts[playerId] = (0, import_helpers.setTimeout)(\n    () => {\n      clearDialogue(playerId);\n    },\n    opts.durationMs ?? DEFAULT_DURATION_MS,\n    playerId\n  );\n}\nfunction clearDialogue(playerId) {\n  if (hideTimeouts[playerId] === void 0) {\n    return;\n  }\n  (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n  delete hideTimeouts[playerId];\n  api.setClientOption(playerId, "dialogue", null);\n}\nonPlayerLeave = (playerId) => {\n  delete hideTimeouts[playerId];\n};\n',
        types: "import { CustomTextStyling, SpeechVoice, PlayerId, DialogueText } from '@bloxd';\n\ntype DialogueOpts = {\n    /** Shown above the line, such as a name. */\n    speakerName?: string | CustomTextStyling;\n    /** A preset such as \"regular\" or \"gruff\", or every synth parameter. Omit for a silent line. */\n    voice?: SpeechVoice;\n    /** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n    durationMs?: number;\n};\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item's icon inline\n * @param opts - The speaker's name, the voice that reads it out, and how long it stays up\n */\ndeclare function sayDialogue(playerId: PlayerId, text: DialogueText, opts?: DialogueOpts): void;\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\ndeclare function clearDialogue(playerId: PlayerId): void;\n\nexport { clearDialogue, sayDialogue };\nexport type { DialogueOpts };\n"
      },
      oB = {
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
      GB = {
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
      vB = {
        debug: {
          name: "debug",
          specifier: "@plugins/debug",
          sourceVfsPath: "/node_modules/@plugins/debug/index.ts",
          typesVfsPath: "/node_modules/@plugins/debug/index.d.ts",
          files: TB.files,
          dependencies: TB.dependencies,
          bundledSource: TB.bundledSource,
          types: TB.types
        },
        dialogue: {
          name: "dialogue",
          specifier: "@plugins/dialogue",
          sourceVfsPath: "/node_modules/@plugins/dialogue/index.ts",
          typesVfsPath: "/node_modules/@plugins/dialogue/index.d.ts",
          files: JB.files,
          dependencies: JB.dependencies,
          bundledSource: JB.bundledSource,
          types: JB.types
        },
        helpers: {
          name: "helpers",
          specifier: "@plugins/helpers",
          sourceVfsPath: "/node_modules/@plugins/helpers/index.ts",
          typesVfsPath: "/node_modules/@plugins/helpers/index.d.ts",
          files: oB.files,
          dependencies: oB.dependencies,
          bundledSource: oB.bundledSource,
          types: oB.types
        },
        sessionBasedGame: {
          name: "sessionBasedGame",
          specifier: "@plugins/sessionBasedGame",
          sourceVfsPath: "/node_modules/@plugins/sessionBasedGame/index.ts",
          typesVfsPath: "/node_modules/@plugins/sessionBasedGame/index.d.ts",
          files: GB.files,
          dependencies: GB.dependencies,
          bundledSource: GB.bundledSource,
          types: GB.types
        }
      };

    function kB(BB) {
      const IB = [],
        ZB = new Set,
        TB = BB => {
          if (ZB.has(BB)) return;
          const JB = vB[BB];
          if (JB) {
            ZB.add(BB);
            for (const BB of JB.dependencies) TB(BB);
            IB.push(BB)
          }
        };
      for (const JB of BB) TB(JB);
      return IB
    }
  },
  36881: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => kB,
      c: () => vB,
      g: () => GB,
      k: () => oB,
      l: () => cB,
      n: () => nB,
      p: () => NB,
      s: () => FB,
      v: () => zB
    });
    var TB = ZB(1300);
    const JB = ["quickjs", "ses"];

    function oB(BB) {
      return JB.includes(BB)
    }

    function GB(BB) {
      return BB === TB.i || BB === TB.m
    }

    function vB(BB, IB) {
      return BB === TB.i && IB === TB.m || BB === TB.m && IB === TB.i
    }

    function kB(BB) {
      const IB = TB.m in BB,
        ZB = TB.i in BB;
      return IB && ZB ? null : IB ? TB.m : ZB ? TB.i : null
    }

    function cB(BB, IB, ZB) {
      const TB = `${IB}/`;
      return BB.filter((BB => BB.startsWith(TB))).map((BB => [BB, `${ZB}/${BB.slice(TB.length)}`]))
    }

    function nB(BB, IB) {
      let ZB = 0;
      for (const [TB, JB] of Object.entries(BB)) TB !== IB && (ZB += JB.length);
      return ZB
    }
    const hB = "@plugins/";

    function zB(BB) {
      return `${hB}${BB}`
    }

    function FB(BB, IB) {
      return `/node_modules/@plugins/${BB}/${IB}`
    }

    function NB(BB) {
      if (!BB.startsWith(hB)) return null;
      const IB = BB.slice(hB.length);
      return function(BB) {
        return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(BB)
      }(IB) ? IB : null
    }
  },
  36887: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => vB,
      h: () => JB,
      l: () => GB,
      o: () => kB,
      q: () => oB
    });
    var TB = ZB(2518);
    const JB = 5,
      oB = "[SCHEMATIC]",
      GB = 1024e4;

    function vB(BB) {
      return BB.endsWith(".bloxdschem") && (0, TB.v)(BB.slice(0, -11) + ".ts") && BB.length <= 64
    }

    function kB(BB) {
      return Object.fromEntries(Object.keys(BB).map((BB => [BB, oB])))
    }
  },
  5016: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => JB,
      f: () => TB,
      i: () => oB,
      j: () => kB,
      k: () => GB
    });
    const TB = ["sine", "triangle", "square", "sawtooth"],
      JB = 55,
      oB = {
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

    function GB(BB) {
      return "string" !== typeof BB ? BB : Object.hasOwn(oB, BB) ? oB[BB] : null
    }

    function vB(BB, IB, ZB) {
      return Math.min(ZB, Math.max(IB, BB))
    }

    function kB(BB) {
      const IB = vB(BB.durationMs, 10, 500),
        ZB = vB(BB.attackMs, 0, IB),
        {
          intonation: JB
        } = BB;
      return {
        waveform: TB.includes(BB.waveform) ? BB.waveform : "sine",
        pitchHz: vB(BB.pitchHz, 20, 4e3),
        glideSemitones: vB(BB.glideSemitones, -24, 24),
        durationMs: IB,
        attackMs: ZB,
        releaseMs: vB(BB.releaseMs, 0, IB - ZB),
        lowpassHz: null === BB.lowpassHz ? null : vB(BB.lowpassHz, 20, 2e4),
        volume: vB(BB.volume, 0, 2),
        intonation: {
          variationSemitones: vB(JB.variationSemitones, 0, 6),
          declineSemitones: vB(JB.declineSemitones, 0, 12),
          questionRiseSemitones: vB(JB.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: vB(JB.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: vB(BB.syllableMs, 25, 200)
      }
    }
  },
  8927: () => {},
  10029: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAHklEQVR4nGNY3x/6nxjMQH2Fcyq8/hODaWA11d0IAPvLyX36T0UzAAAAAElFTkSuQmCC"
  },
  18067: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAC4CAYAAADqkK6nAAAAAXNSR0IArs4c6QAAAuxJREFUeJzt1jFOFHEchuEfxpqeaGusuYDhCpbewMbEwmNYmNBwA0quYLgAtaGF2HuBtVpEWHBNXnBXnqeanUzxT+bNtzMDsOl21nhm8eCnYBvd2c6zxzwFT8N9S7WYmfn0am9mZl6+2H2M87DhLi5/zMzM5/Pvy1u3GrJU5FYt1WJm5svB60c+Ctvo49dvy8urliwVuetL5RuKv7bqG8tSkXt+88afFurN+3czM7P/9sPDnIiNcHZy+Nvv06Pjlc9d9fJrqXxT0bu1VHexUE/Tzfd912JdZ6nIrb1UFop1WSpyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIit3ZUZyeHc3Zy+JBn4T9hqcg9X/fB06Pj337vv/2QH4bNs/x3uvn+72OpyO1cu17MzHx6tTczMy9f7P6L87BlLi5/zMzM5/Pvy1s7lorczop7i5mZLwevH/kobKOPX78tL69aslTkVi3Vkm8sbln1DXXzGUtF7r6lWlo8+CnYRne2Y6mAzfcTBsFAqM32XQcAAAAASUVORK5CYII="
  },
  20023: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJUlEQVR4nGMwsIpkIAYz0FThfyjGymcgVSFMEJtCsBjJCgcgeABOGmAZtndiFgAAAABJRU5ErkJggg=="
  },
  20025: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJ0lEQVR4nGMwsIpkIAYzQBn/kTBWMQYsgtgwA+0UMuBTNIgU4g1wAE6xgffL0CuLAAAAAElFTkSuQmCC"
  },
  20033: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJElEQVR4nGMwsIpkIAYzkKrwPxLGKsZAc4UMaJh8hdQPHoIKAboeZhN3YNlSAAAAAElFTkSuQmCC"
  },
  20042: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMUlEQVR4nGMwsIpkIAYzoAn8R8MM2BSiK/qPrJiQov8wxWQrxMkm2USiPUNS8OANcADc3H37DfNNQQAAAABJRU5ErkJggg=="
  },
  20051: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAKElEQVR4nGMwsIpkIAYzIHH+48AMyApxKfoPU0yRQgZsYkNJIcEABwCQU3/5LLo7QwAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);