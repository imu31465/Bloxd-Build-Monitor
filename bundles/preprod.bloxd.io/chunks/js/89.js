export const id = 89;
export const ids = [89];
export const modules = {
  36831: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => SQ,
      f: () => kQ
    });
    var wQ = XQ(61),
      qQ = XQ(2003),
      TQ = XQ(36833),
      zQ = XQ.n(TQ),
      sQ = XQ(4863),
      FQ = XQ(1975),
      PQ = XQ(1498),
      gQ = XQ(105),
      JQ = XQ(129),
      rQ = XQ(402),
      IQ = XQ(1081),
      jQ = XQ.n(IQ),
      BQ = XQ(26),
      yQ = XQ(1094),
      VQ = XQ(1698),
      DQ = XQ(1802),
      pQ = XQ(1744),
      GQ = XQ(2071),
      UQ = XQ(1468),
      bQ = XQ(2149),
      vQ = XQ(1454),
      dQ = XQ(2943),
      HQ = XQ(36841),
      aQ = XQ(36864),
      lQ = XQ(1527),
      hQ = XQ(2540),
      iQ = XQ(1226),
      cQ = XQ(36872);
    var AQ = XQ(34455),
      RQ = XQ(1326);
    var EQ = XQ(1145);
    const CQ = XQ(36875),
      uQ = ["enter", "t", "/"];
    let LQ = !1;

    function kQ() {
      return LQ || (0, DQ.isTextEntry)(document.activeElement)
    }

    function fQ() {
      var QQ, WQ;
      (0, bQ.c)();
      const XQ = null !== (QQ = null === (WQ = (0, UQ.f)()) || void 0 === WQ ? void 0 : WQ.getBoundButton("keyboardChannel")) && void 0 !== QQ ? QQ : null;
      return XQ ? (0, EQ.jsx)(GQ.c, {
        className: "ChatInputChannelGlyph",
        glyph: XQ
      }) : null
    }

    function SQ() {
      const {
        t: QQ
      } = (0, iQ.C)(), {
        isTouchScreen: WQ
      } = (0, BQ.n)(["isTouchScreen"]), XQ = (0, vQ.A)(), [TQ, IQ] = (0, wQ.useState)(!1), GQ = (0, wQ.useRef)(TQ), UQ = (0, wQ.useRef)(null), {
        messages: bQ,
        reportedPlayers: kQ,
        channel: SQ
      } = (0, dQ.n)(), oQ = (0, wQ.useRef)(0), eQ = (0, wQ.useRef)(""), nQ = (0, wQ.useRef)(null);
      var xQ;
      xQ = nQ, (0, wQ.useEffect)((() => {
        if (!(0, gQ.isIOS)()) return;
        const QQ = xQ.current;
        let WQ = null;
        const XQ = XQ => {
            const wQ = XQ.changedTouches[0];
            WQ = "none" === getComputedStyle(QQ).pointerEvents ? {
              id: wQ.identifier,
              y: wQ.clientY
            } : null
          },
          wQ = XQ => {
            const wQ = WQ,
              qQ = wQ && (0, cQ.e)(XQ.changedTouches, wQ.id);
            qQ && (XQ.preventDefault(), QQ.scrollBy({
              top: wQ.y - qQ.clientY,
              behavior: "instant"
            }), wQ.y = qQ.clientY)
          };
        return QQ.addEventListener("touchstart", XQ, {
          passive: !0
        }), QQ.addEventListener("touchmove", wQ, {
          passive: !1
        }), () => {
          QQ.removeEventListener("touchstart", XQ), QQ.removeEventListener("touchmove", wQ)
        }
      }), [xQ]);
      const [YQ, NQ] = (0, wQ.useState)(!1), [ZQ, OQ] = (0, wQ.useState)(!1), KQ = (0, wQ.useRef)(YQ), mQ = (0, wQ.useRef)(null), MQ = (0, wQ.useRef)(!1), QW = (0, wQ.useRef)(null), WW = (0, wQ.useRef)(null), XW = (0, wQ.useRef)(null), wW = (0, wQ.useRef)(sW);
      wW.current = sW;
      const qW = (0, hQ.k)();

      function TW() {
        GQ.current = !1, IQ(!1), WW.current.blur()
      }

      function zW(QQ) {
        KQ.current = QQ, NQ(QQ)
      }

      function sW() {
        const QQ = WW.current.value;
        WW.current.value = "", FW(QQ)
      }

      function FW(QQ) {
        (0, dQ.k)(QQ), oQ.current = 0, zW(!1)
      }

      function PW(QQ, WQ) {
        0 === oQ.current && (eQ.current = WW.current.value);
        const XQ = (0, dQ.j)(oQ.current + QQ, WQ);
        oQ.current = XQ.stepsBack, WW.current.value = 0 === XQ.stepsBack ? eQ.current : XQ.text, setTimeout((() => {
          WW.current && WW.current.setSelectionRange(-1, -1)
        }), 0)
      }

      function gW() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        nQ.current && (!QQ && KQ.current || (nQ.current.scrollTop = 1e5))
      }
      return (0, sQ.c)(!0, TQ, "ChatComponent"), (0, wQ.useEffect)((() => (LQ = TQ, () => {
          LQ = !1
        })), [TQ]), (0, PQ.f)("appManagerUpdated|openEverythingMenuName", (() => {
          (0, VQ.t)() && IQ(!1)
        })), (0, wQ.useEffect)((() => {
          WW.current.addEventListener("blur", (QQ => {
            if (null === WW.current) return;
            Array.from(document.querySelectorAll(":hover")).some((QQ => QQ.classList.contains("ChatInputChannel") || QQ.classList.contains("ChatMsgSelectWrapper"))) || ((0, gQ.isMobile)() && GQ.current && "" !== WW.current.value && wW.current(), IQ(!1))
          }));
          const QQ = QQ => {
            UQ.current.contains(QQ.target) || (0, pQ.m)(QQ.target) || IQ(!1)
          };
          document.addEventListener("touchstart", QQ, {
            capture: !0
          });
          const WQ = QQ => {
            (0, aQ.h)(QQ.target) && (GQ.current = !1, IQ(!1))
          };
          document.addEventListener("mousedown", WQ, {
            capture: !0
          });
          const XQ = () => {
              clearTimeout(mQ.current), zW(!0)
            },
            wQ = () => {
              clearTimeout(mQ.current), mQ.current = setTimeout((() => {
                zW(!1), gW()
              }), 4e3)
            },
            TQ = () => {
              document.pointerLockElement ? (IQ(!1), OQ(!0), MQ.current = !1, zW(!1), gW()) : OQ(!1)
            };
          nQ.current.addEventListener("pointermove", (QQ => {
            "touch" === QQ.pointerType || MQ.current || document.pointerLockElement || (MQ.current = !0, clearTimeout(mQ.current))
          })), nQ.current.addEventListener("pointerleave", (QQ => {
            "touch" !== QQ.pointerType && (MQ.current = !1, KQ.current && wQ())
          })), nQ.current.addEventListener("pointerdown", (QQ => {
            "touch" === QQ.pointerType || document.pointerLockElement || (MQ.current = !0, XQ())
          })), nQ.current.addEventListener("wheel", (QQ => {
            document.pointerLockElement || QQ.deltaY >= 0 && Math.abs(nQ.current.scrollTop) < 1 || (XQ(), MQ.current || (mQ.current = setTimeout((() => {
              zW(!1)
            }), 4e3)))
          }), {
            passive: !0
          }), nQ.current.addEventListener("touchstart", XQ), nQ.current.addEventListener("touchend", wQ), nQ.current.addEventListener("touchcancel", wQ), document.addEventListener("pointerlockchange", TQ);
          const sQ = QQ => {
            if (qW.shown && (GQ.current || ! function(QQ) {
                if ((0, DQ.isTypingInInput)()) return !0;
                const WQ = document.activeElement;
                return (WQ instanceof HTMLButtonElement || "button" === (null === WQ || void 0 === WQ ? void 0 : WQ.getAttribute("role"))) && ["Enter", " "].includes(QQ.key)
              }(QQ)) && "codeEditor" !== BQ.b.get("openInGameMenuName") && "lobbyCodeEditor" !== BQ.b.get("openInGameMenuName") && !qQ.gameBridge.latest("connectedGame").replay)
              if (GQ.current || !(0, VQ.t)()) {
                if (GQ.current) {
                  if ("ArrowUp" === QQ.code || "ArrowDown" === QQ.code) return PW("ArrowUp" === QQ.code ? 1 : -1, !1), void QQ.stopPropagation();
                  if ("Tab" === QQ.code) return dQ.b.selectNextChannel(), QQ.stopPropagation(), void QQ.preventDefault();
                  if (QQ.ctrlKey && tQ.includes(CQ[QQ.keyCode])) return QQ.preventDefault(), void QQ.stopPropagation()
                }
                if ([...uQ, "esc"].includes(zQ()(QQ)))
                  if ("esc" !== zQ()(QQ)) {
                    if (!GQ.current || "/" !== zQ()(QQ)) {
                      if ("t" === zQ()(QQ)) {
                        if (GQ.current) return void QQ.stopPropagation();
                        QQ.preventDefault()
                      }
                      GQ.current && "" !== WW.current.value && wW.current(), QQ.repeat || (GQ.current || "/" === zQ()(QQ) && (WW.current.value = "/", QQ.preventDefault()), IQ(!GQ.current))
                    }
                  } else GQ.current && (IQ(!1), QQ.stopPropagation());
                else GQ.current && QQ.stopPropagation()
              } else uQ.includes(zQ()(QQ)) && (QQ.preventDefault(), QQ.stopPropagation(), (0, VQ.c)(QQ))
          };
          document.addEventListener("keydown", sQ, {
            capture: !0
          });
          const FQ = nQ.current;
          let PQ = !1;
          const JQ = new ResizeObserver((() => {
              PQ && (PQ = !1, gW())
            })),
            rQ = () => {
              PQ = !0, JQ.unobserve(FQ), JQ.observe(FQ)
            };
          QW.current = rQ;
          const jQ = new MutationObserver(rQ);
          return jQ.observe(FQ, {
            childList: !0,
            subtree: !0
          }), () => {
            document.removeEventListener("keydown", sQ, {
              capture: !0
            }), document.removeEventListener("touchstart", QQ, {
              capture: !0
            }), document.removeEventListener("mousedown", WQ, {
              capture: !0
            }), document.removeEventListener("pointerlockchange", TQ), QW.current = null, jQ.disconnect(), JQ.disconnect(), clearTimeout(mQ.current)
          }
        }), []), (0, pQ.r)(WW, {
          open: () => {
            IQ(!0)
          },
          close: () => {
            TW()
          },
          submit: () => {
            "" !== WW.current.value && sW(), TW()
          },
          stepHistory: () => {
            PW(1, !0)
          },
          sendLine: QQ => {
            FW(QQ), TW()
          },
          selectNextChannel: () => {
            dQ.b.selectNextChannel()
          }
        }), (0, wQ.useEffect)((() => {
          var QQ;
          (GQ.current = TQ, WW.current) && (TQ ? (oQ.current = 0, WW.current.focus()) : (WW.current.blur(), null === (QQ = QW.current) || void 0 === QQ || QQ.call(QW)))
        }), [TQ]),
        function(QQ, WQ) {
          (0, wQ.useLayoutEffect)((() => {
            if (!WQ) return;
            AQ.c.hold();
            const XQ = QQ.current.closest(".InGameHeaderAndChat"),
              wQ = (0, RQ.c)((QQ => {
                let {
                  top: WQ,
                  height: wQ
                } = QQ;
                XQ.style.setProperty("--keyboard-top", `${WQ+wQ}px`)
              }));
            return () => {
              wQ(), XQ.style.removeProperty("--keyboard-top"), AQ.c.release()
            }
          }), [QQ, WQ])
        }(UQ, TQ && WQ), (0, EQ.jsx)(EQ.Fragment, {
          children: (0, EQ.jsxs)("div", {
            ref: UQ,
            className: jQ()("Chat", {
              Chatting: TQ
            }),
            "data-camera-keeper": TQ ? "" : void 0,
            children: [(0, EQ.jsx)("div", {
              ref: nQ,
              className: jQ()("ChatMessages", {
                HideScrollbar: !YQ && !TQ,
                NoScrolling: !(0, gQ.isMobile)() && ZQ
              }),
              children: (0, EQ.jsx)(HQ.c, {
                messages: bQ,
                reportedPlayers: kQ
              })
            }), WQ && !TQ && (0, EQ.jsx)("button", {
              type: "button",
              className: "ChatIconWrapper SmallTextLight",
              "aria-label": QQ("general:chat"),
              ...(0, lQ.g)((() => {
                IQ(!0), XW.current.style.display = "flex", (0, gQ.isIOS)() && WW.current.focus()
              }), "pointerup"),
              children: (0, EQ.jsx)(yQ.d, {
                name: "comment-dots",
                className: "ChatIcon"
              })
            }), (0, EQ.jsxs)("div", {
              ref: XW,
              className: "ChatInputWrapper",
              style: {
                display: "" + (TQ ? "flex" : "none")
              },
              children: [SQ && (0, EQ.jsx)("button", {
                type: "button",
                className: "ChatInputChannel",
                style: {
                  backgroundColor: SQ.elementBgColor
                },
                onClick: QQ => {
                  dQ.b.selectNextChannel(), WW.current.focus()
                },
                children: (0, EQ.jsx)("span", {
                  className: "SmallTextBold",
                  children: (0, EQ.jsx)(FQ.e, {
                    text: SQ.elementContent
                  })
                })
              }), SQ && XQ && (0, EQ.jsx)(fQ, {}), (0, EQ.jsx)("input", {
                className: "ChatInput",
                maxLength: rQ.Yc,
                ref: WW,
                spellCheck: "false",
                autoComplete: "off",
                autoCorrect: "off",
                "aria-label": QQ("general:chat"),
                placeholder: SQ ? `${SQ.channelName} Chat${"touchOnly"===(0,JQ.c)()||XQ?"":" [Tab]"}` : ""
              })]
            })]
          })
        })
    }
    const tQ = ["W", "S", "D", "N", "T", "<tab>", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "<page-up>", "<page-down>", "B", "O", "H", "J", "F", "G", "J", "M", "<enter>", "L", "K", "E", "P", "R", "O", "U"]
  },
  36841: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => HQ
    });
    var wQ = XQ(61),
      qQ = XQ(1081),
      TQ = XQ.n(qQ),
      zQ = XQ(2949),
      sQ = XQ(31),
      FQ = XQ(2453),
      PQ = XQ(3835),
      gQ = XQ(2094),
      JQ = XQ(26),
      rQ = XQ(1975),
      IQ = XQ(36849),
      jQ = XQ(2237),
      BQ = XQ(2954),
      yQ = XQ(2790),
      VQ = XQ(2770),
      DQ = XQ(2765),
      pQ = XQ(3853),
      GQ = XQ(36852),
      UQ = XQ(3381),
      bQ = XQ(2052),
      vQ = XQ(1145);

    function dQ(QQ) {
      for (let XQ = QQ.length - 1; XQ >= 0; XQ--) {
        const wQ = "string" === typeof(WQ = QQ[XQ]) ? WQ : "str" in WQ && "string" === typeof WQ.str ? WQ.str : "";
        if ("" !== wQ.trim()) return wQ
      }
      var WQ;
      return ""
    }

    function HQ(QQ) {
      let {
        messages: WQ,
        reportedPlayers: XQ
      } = QQ;
      return (0, vQ.jsx)(vQ.Fragment, {
        children: WQ.map((QQ => (0, vQ.jsx)(aQ, {
          message: QQ,
          reportedPlayers: XQ
        }, QQ.clientChatMsgId)))
      })
    }
    const aQ = (0, wQ.memo)((function(QQ) {
      var WQ;
      let {
        message: XQ,
        reportedPlayers: qQ
      } = QQ;
      const HQ = (0, wQ.useRef)(null),
        [aQ] = (0, wQ.useState)(UQ.i),
        {
          author: lQ
        } = XQ,
        hQ = null === lQ || void 0 === lQ ? void 0 : lQ.id,
        iQ = null !== (WQ = null === lQ || void 0 === lQ ? void 0 : lQ.name) && void 0 !== WQ ? WQ : void 0,
        cQ = (0, gQ.b)(iQ),
        AQ = null !== lQ && void 0 !== lQ && lQ.profileEffect ? jQ.d[lQ.profileEffect] : void 0,
        RQ = null !== lQ && !lQ.local,
        {
          worldCodeLineId: EQ
        } = XQ,
        CQ = (0, bQ.d)("hiddenPlayerNames", (QQ => (0, BQ.h)(RQ, iQ, QQ))),
        uQ = null === XQ.serverChatMsgId || null === lQ ? null : {
          text: dQ(XQ.content),
          serverChatMsgId: XQ.serverChatMsgId,
          authorId: lQ.id
        },
        LQ = (0, PQ.j)(RQ && null !== iQ && void 0 !== iQ ? iQ : null),
        kQ = (0, DQ.h)(HQ);
      (0, wQ.useEffect)((() => () => {
        DQ.b.closeIfOwner(HQ)
      }), []);
      const fQ = null !== lQ && null !== EQ,
        SQ = [];
      RQ && null !== uQ && !qQ.includes(hQ) && SQ.push({
        icon: "flag",
        text: fQ ? "general:reportPlayer" : "general:report",
        onClick: () => {
          sQ.k.mB("OpenReportMenu", {
            playerEId: hQ,
            playerName: iQ,
            cg: uQ.text,
            serverChatMsgId: uQ.serverChatMsgId
          })
        }
      }), null !== EQ && SQ.push({
        icon: "flag",
        text: fQ ? "general:reportGameMessage" : "general:report",
        onClick: () => {
          sQ.k.mB("OpenReportMenu", {
            playerEId: null,
            playerName: void 0,
            cg: (0, zQ.d)(XQ.content),
            serverChatMsgId: EQ
          })
        }
      });
      const tQ = RQ && void 0 !== iQ ? (0, pQ.b)(LQ, iQ, uQ) : [];
      return (0, vQ.jsxs)("div", {
        ref: HQ,
        className: TQ()("MessageWrapper", {
          ChatMsgSelectWrapper: hQ,
          Still: aQ
        }),
        onContextMenu: CQ ? QQ => {
          (0, yQ.f)(HQ, QQ, {
            ...(0, BQ.e)(hQ, iQ),
            showLocation: !1,
            status: null,
            extraActions: SQ,
            moderationActions: (0, GQ.b)(iQ),
            friendRequestSource: "chat"
          }, JQ.b.get("isTouchScreen"))
        } : void 0,
        onPointerDown: CQ ? QQ => {
          (0, VQ.b)(QQ, (() => (0, BQ.e)(hQ, iQ).playerSocialPreview))
        } : void 0,
        children: [AQ && (0, vQ.jsx)(AQ, {
          className: "ChatMessageBackground",
          simple: !0
        }), (RQ || null !== EQ) && !kQ && (0, vQ.jsx)(IQ.e, {
          className: "ChatFloatingActions",
          triggerElementRef: HQ,
          options: [...SQ.map((QQ => {
            let {
              icon: WQ,
              text: XQ,
              onClick: wQ
            } = QQ;
            return {
              icon: WQ,
              text: XQ,
              onPointerDown: wQ
            }
          })), ...tQ, {
            icon: "user-plus",
            text: "socialBar:sendFriendRequest",
            onPointerDown: QQ => {
              (0, FQ.l)(iQ, "chat")
            },
            analyticsClick: {
              id: "social.add_friend",
              value: "chat"
            },
            show: CQ && "blocked" !== LQ
          }]
        }), (0, vQ.jsx)(rQ.e, {
          text: XQ.content,
          friendBadgeFor: cQ ? iQ : void 0
        }, XQ.clientChatMsgId)]
      }, XQ.clientChatMsgId)
    }))
  },
  36891: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => IQ,
      g: () => jQ,
      k: () => rQ,
      o: () => JQ
    });
    var wQ = XQ(34500),
      qQ = XQ(36900),
      TQ = XQ(36906),
      zQ = XQ(9099),
      sQ = XQ(1498),
      FQ = XQ(61),
      PQ = XQ(78),
      gQ = XQ(1145);

    function JQ() {
      var QQ;
      return (0, sQ.j)(qQ.c, (0, qQ.s)()), (0, gQ.jsx)(gQ.Fragment, {
        children: null === (QQ = (0, qQ.s)()) || void 0 === QQ ? void 0 : QQ.content
      })
    }

    function rQ(QQ) {
      var WQ;
      let {
        show: XQ
      } = QQ;
      (0, sQ.j)(qQ.c, (0, qQ.s)());
      const PQ = null === (WQ = (0, qQ.s)()) || void 0 === WQ ? void 0 : WQ.menu;
      return (0, FQ.useEffect)((() => {
        var QQ;
        XQ || (null === PQ || void 0 === PQ || null === (QQ = PQ.onClose) || void 0 === QQ || QQ.call(PQ), (0, TQ.r)())
      }), [XQ, PQ]), (0, FQ.useEffect)((() => XQ ? (0, zQ.e)(TQ.y, TQ.f) : void 0), [XQ]), (0, gQ.jsx)(wQ.c, {
        showing: XQ,
        globallyUniqueKey: "clientGameMenu",
        children: null === PQ || void 0 === PQ ? void 0 : PQ.content
      })
    }

    function IQ(QQ) {
      let {
        placement: WQ = "bottom"
      } = QQ;
      return (0, gQ.jsx)("div", {
        id: `clientGameHud-${WQ}`,
        style: {
          display: "contents"
        }
      })
    }

    function jQ(QQ) {
      let {
        children: WQ,
        placement: XQ = "bottom"
      } = QQ;
      const [wQ, qQ] = (0, FQ.useState)(null);
      return (0, FQ.useEffect)((() => {
        qQ(document.getElementById(`clientGameHud-${XQ}`))
      }), [XQ]), wQ ? (0, PQ.createPortal)(WQ, wQ) : null
    }
  },
  37176: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => JQ,
      i: () => gQ
    });
    var wQ = XQ(61),
      qQ = XQ(1081),
      TQ = XQ.n(qQ),
      zQ = XQ(1507),
      sQ = XQ(1145);
    const FQ = 200,
      PQ = 160;

    function gQ() {
      return window.matchMedia("(max-width: 900px)").matches
    }

    function JQ(QQ) {
      let {
        side: WQ,
        defaultSize: XQ,
        covers: qQ,
        onClose: gQ,
        children: JQ
      } = QQ;
      const rQ = (0, wQ.useRef)(null),
        [IQ, jQ] = (0, wQ.useState)(null),
        [BQ, yQ] = (0, wQ.useState)(XQ);
      BQ !== XQ && (yQ(XQ), jQ(null));
      const VQ = (0, wQ.useRef)(null),
        DQ = "top" === WQ,
        pQ = QQ => DQ ? QQ.clientY : QQ.clientX,
        GQ = () => {
          VQ.current = null
        };
      return (0, sQ.jsxs)("div", {
        ref: rQ,
        className: TQ()("ResizableSidePanel", WQ && `ResizableSidePanel-${WQ}`, {
          Covers: "always" === qQ,
          CoversWhenNarrow: "narrow" === qQ,
          Dragged: null !== IQ
        }),
        style: {
          [DQ ? "height" : "width"]: null !== IQ && void 0 !== IQ ? IQ : XQ
        },
        children: [JQ, WQ && (0, sQ.jsx)("div", {
          className: "ResizableSidePanelHandle",
          role: "separator",
          "aria-orientation": DQ ? "horizontal" : "vertical",
          onPointerDown: QQ => {
            if (0 !== QQ.button) return;
            QQ.preventDefault();
            const WQ = rQ.current,
              XQ = Array.from(WQ.parentElement.children).reduce(((QQ, XQ) => XQ !== WQ && "0" !== getComputedStyle(XQ).flexGrow ? QQ + (QQ => DQ ? QQ.clientHeight : QQ.clientWidth)(XQ) : QQ), 0),
              wQ = DQ ? WQ.offsetHeight : WQ.offsetWidth,
              qQ = Math.min(FQ, wQ),
              TQ = Math.max(qQ, wQ + Math.max(0, XQ - PQ));
            VQ.current = {
              start: pQ(QQ),
              startSize: wQ,
              minSize: qQ,
              maxSize: TQ
            }, QQ.currentTarget.setPointerCapture(QQ.pointerId)
          },
          onPointerMove: QQ => {
            const XQ = VQ.current;
            if (!XQ) return;
            const wQ = "right" === WQ ? XQ.start - QQ.clientX : pQ(QQ) - XQ.start;
            jQ(Math.min(XQ.maxSize, Math.max(XQ.minSize, XQ.startSize + wQ)))
          },
          onPointerUp: GQ,
          onPointerCancel: GQ,
          onLostPointerCapture: GQ
        }), gQ && (0, sQ.jsx)(zQ.o, {
          className: "ResizableSidePanelClose",
          onClick: gQ
        })]
      })
    }
  },
  37194: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      A: () => UQ,
      D: () => dQ,
      F: () => qQ,
      G: () => vQ,
      c: () => pQ,
      g: () => yQ,
      i: () => jQ,
      m: () => IQ,
      p: () => DQ,
      t: () => HQ,
      w: () => GQ,
      z: () => bQ
    });
    var wQ = XQ(61);
    const qQ = 5e3,
      TQ = 500,
      zQ = 3e3;
    let sQ = null,
      FQ = null,
      PQ = null;
    const gQ = new Set;

    function JQ(QQ) {
      sQ = QQ;
      for (const WQ of gQ) WQ()
    }

    function rQ() {
      if (!sQ || void 0 !== sQ.endedAt) return;
      null !== FQ && (clearTimeout(FQ), FQ = null), JQ({
        ...sQ,
        endedAt: Date.now()
      });
      const QQ = PQ;
      PQ = null, null === QQ || void 0 === QQ || QQ()
    }

    function IQ(QQ, WQ) {
      let {
        submit: XQ,
        reopen: wQ
      } = WQ;
      null !== FQ && clearTimeout(FQ), PQ = wQ, JQ({
        ...QQ,
        startedAt: Date.now(),
        errors: []
      }), FQ = setTimeout(rQ, zQ), XQ()
    }

    function jQ() {
      sQ && void 0 === sQ.endedAt && void 0 === sQ.ranAt && (null !== FQ && clearTimeout(FQ), JQ({
        ...sQ,
        ranAt: Date.now()
      }), FQ = setTimeout(rQ, qQ))
    }
    const BQ = 3;

    function yQ(QQ) {
      if (!sQ || void 0 === sQ.ranAt || void 0 !== sQ.endedAt || sQ.errors.includes(QQ) || sQ.errors.length >= BQ) return;
      const WQ = 0 === sQ.errors.length;
      JQ({
        ...sQ,
        errors: [...sQ.errors, QQ]
      }), WQ && (null !== FQ && clearTimeout(FQ), FQ = setTimeout(rQ, TQ))
    }

    function VQ(QQ) {
      var WQ;
      return (null === (WQ = sQ) || void 0 === WQ ? void 0 : WQ.chatKey) === QQ ? sQ : null
    }

    function DQ(QQ) {
      const WQ = VQ(QQ);
      return WQ && void 0 !== WQ.endedAt ? (JQ(null), WQ) : null
    }

    function pQ(QQ) {
      var WQ;
      (null === (WQ = sQ) || void 0 === WQ ? void 0 : WQ.chatKey) === QQ && (null !== FQ && (clearTimeout(FQ), FQ = null), PQ = null, JQ(null))
    }
    const GQ = "These changes from your last answer didn't go in. Make them again.";

    function UQ(QQ) {
      const WQ = [...new Set(QQ)].slice(0, BQ);
      return `Fix this in your change: when it ran, the world showed ${1===WQ.length?"this error":"these errors"}: ${WQ.join(" ")}`
    }

    function bQ(QQ) {
      return `Your change didn't go in, because the code wouldn't run at all: ${QQ.join(" ")} Send the whole change again with that fixed.`
    }

    function vQ(QQ) {
      return `Fix this in your change: ${QQ.join(" ")}`
    }

    function dQ(QQ) {
      var WQ;
      if (void 0 === QQ.ranAt) return {
        title: "Couldn't test it",
        text: "Your change didn't go into your world, so it couldn't be tested. Press Submit to try it."
      };
      const XQ = Math.max(1, Math.round(((null !== (WQ = QQ.endedAt) && void 0 !== WQ ? WQ : QQ.ranAt) - QQ.ranAt) / 1e3)),
        wQ = `Your change ran in your world for ${XQ} ${1===XQ?"second":"seconds"}`;
      return 0 === QQ.errors.length ? {
        title: "Tested: no errors",
        text: `${wQ} without an error.`
      } : {
        title: 1 === QQ.errors.length ? "Tested: it showed an error" : `Tested: it showed ${QQ.errors.length} errors`,
        text: `${wQ} and showed: ${QQ.errors.join(" ")}`
      }
    }

    function HQ(QQ) {
      const [WQ, XQ] = (0, wQ.useState)((() => VQ(QQ)));
      return (0, wQ.useEffect)((() => {
        const WQ = () => {
          XQ(VQ(QQ))
        };
        return WQ(), gQ.add(WQ), () => {
          gQ.delete(WQ)
        }
      }), [QQ]), WQ
    }
  },
  37201: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => qQ,
      e: () => wQ
    });
    const wQ = {
      key: "worldCode",
      label: "World Code",
      codeBlock: !1
    };

    function qQ(QQ, WQ, XQ) {
      return {
        key: QQ,
        label: `Code block at ${WQ.join(", ")}`,
        codeBlock: !0,
        pos: WQ,
        canChangePos: XQ
      }
    }
  },
  37189: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => wQ,
      d: () => TQ,
      f: () => zQ,
      g: () => qQ
    });
    const wQ = "code block",
      qQ = "World Code/";

    function TQ(QQ) {
      return QQ.trim().toLowerCase().startsWith(qQ.toLowerCase())
    }

    function zQ(QQ) {
      return QQ.trim().slice(qQ.length).replace(/^\.?\//, "")
    }
  },
  37167: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => FQ,
      c: () => PQ,
      e: () => sQ,
      g: () => gQ
    });
    var wQ = XQ(61),
      qQ = XQ(43),
      TQ = XQ(105);
    class zQ {
      constructor(QQ, WQ) {
        let XQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.storageKey = QQ, this.defaultValue = WQ, this.canChange = XQ, this.value = null, this.listeners = new Set, this.get = () => {
          if (!this.canChange) return this.defaultValue;
          if (null === this.value) {
            const QQ = qQ.i.getItem(this.storageKey);
            this.value = "boolean" === typeof QQ ? QQ : this.defaultValue
          }
          return this.value
        }, this.set = QQ => {
          this.value = QQ, qQ.i.setItem(this.storageKey, QQ);
          for (const WQ of this.listeners) WQ(QQ)
        }
      }
      subscribe(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
    }
    const sQ = new zQ("codeEditorLightMode", !1),
      FQ = new zQ("codeEditorAiHints", !0),
      PQ = new zQ("codeEditorAiKeySafetyCheck", !0, TQ.featureFlags.isOwnTopLevelSite);

    function gQ(QQ) {
      const [WQ, XQ] = (0, wQ.useState)(QQ.get);
      return (0, wQ.useEffect)((() => {
        const WQ = QQ.subscribe(XQ);
        return XQ(QQ.get()), WQ
      }), [QQ]), [WQ, QQ.set]
    }
  },
  37165: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      B: () => hQ,
      E: () => aQ,
      H: () => rQ,
      L: () => RQ,
      N: () => dQ,
      Q: () => HQ,
      U: () => AQ,
      e: () => jQ,
      i: () => FQ,
      m: () => BQ,
      o: () => lQ,
      q: () => sQ,
      s: () => gQ,
      u: () => IQ,
      w: () => yQ,
      x: () => GQ
    });
    var wQ = XQ(2531),
      qQ = XQ(37163);
    const TQ = "bloxd-world-code-directory-sync",
      zQ = "handles",
      sQ = "[INVALID SCHEMATIC PLACEHOLDER]";

    function FQ(QQ, WQ) {
      return `${QQ}::${WQ}`
    }
    const PQ = new Set(["node_modules", ".git"]);

    function gQ() {
      return "undefined" !== typeof window && "function" === typeof window.showDirectoryPicker
    }

    function JQ() {
      return new Promise(((QQ, WQ) => {
        const XQ = indexedDB.open(TQ, 1);
        XQ.onupgradeneeded = () => {
          const QQ = XQ.result;
          QQ.objectStoreNames.contains(zQ) || QQ.createObjectStore(zQ)
        }, XQ.onsuccess = () => {
          QQ(XQ.result)
        }, XQ.onerror = () => {
          var QQ;
          WQ(null !== (QQ = XQ.error) && void 0 !== QQ ? QQ : new Error("Failed to open directory sync IndexedDB"))
        }
      }))
    }
    async function rQ(QQ, WQ) {
      const XQ = await JQ();
      try {
        await new Promise(((wQ, qQ) => {
          const TQ = XQ.transaction(zQ, "readwrite");
          TQ.objectStore(zQ).put(WQ, QQ), TQ.oncomplete = () => {
            wQ()
          }, TQ.onerror = () => {
            var QQ;
            qQ(null !== (QQ = TQ.error) && void 0 !== QQ ? QQ : new Error("Failed to store directory handle"))
          }
        }))
      } finally {
        XQ.close()
      }
    }
    async function IQ(QQ) {
      const WQ = await JQ();
      try {
        return await new Promise(((XQ, wQ) => {
          const qQ = WQ.transaction(zQ, "readonly").objectStore(zQ).get(QQ);
          qQ.onsuccess = () => {
            var QQ;
            XQ(null !== (QQ = qQ.result) && void 0 !== QQ ? QQ : null)
          }, qQ.onerror = () => {
            var QQ;
            wQ(null !== (QQ = qQ.error) && void 0 !== QQ ? QQ : new Error("Failed to load directory handle"))
          }
        }))
      } finally {
        WQ.close()
      }
    }
    async function jQ(QQ) {
      const WQ = await JQ();
      try {
        await new Promise(((XQ, wQ) => {
          const qQ = WQ.transaction(zQ, "readwrite");
          qQ.objectStore(zQ).delete(QQ), qQ.oncomplete = () => {
            XQ()
          }, qQ.onerror = () => {
            var QQ;
            wQ(null !== (QQ = qQ.error) && void 0 !== QQ ? QQ : new Error("Failed to clear directory handle"))
          }
        }))
      } finally {
        WQ.close()
      }
    }
    async function BQ(QQ) {
      const WQ = {
        mode: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readwrite"
      };
      return "granted" === await QQ.queryPermission(WQ) || "granted" === await QQ.requestPermission(WQ)
    }
    async function yQ(QQ) {
      if (!gQ()) return null;
      try {
        const WQ = await window.showDirectoryPicker({
          mode: "readwrite"
        });
        return await rQ(QQ, WQ), WQ
      } catch (WQ) {
        if (function(QQ) {
            return QQ instanceof DOMException && "AbortError" === QQ.name
          }(WQ)) return null;
        throw WQ
      }
    }

    function VQ(QQ) {
      return QQ.startsWith(".") || PQ.has(QQ)
    }

    function DQ(QQ) {
      if (!QQ) return !0;
      const WQ = QQ.split("/");
      for (const XQ of WQ)
        if ("" === XQ || "." === XQ || ".." === XQ) return !1;
      return !0
    }
    async function pQ(QQ, WQ, XQ) {
      for await (const [TQ, zQ] of QQ.entries()) {
        if ("directory" === zQ.kind) {
          if (VQ(TQ)) continue;
          const QQ = WQ ? `${WQ}/${TQ}` : TQ;
          if (!DQ(QQ)) continue;
          await pQ(zQ, QQ, XQ);
          continue
        }
        const QQ = WQ ? `${WQ}/${TQ}` : TQ;
        if (!(0, wQ.t)(QQ) && !(0, qQ.b)(QQ)) continue;
        const sQ = await zQ.getFile();
        XQ[QQ] = (0, qQ.b)(QQ) ? await iQ(sQ) : await sQ.text()
      }
    }
    async function GQ(QQ) {
      const WQ = {};
      return await pQ(QQ, "", WQ), WQ
    }

    function UQ(QQ) {
      return !(!QQ || QQ !== QQ.trim() || QQ.startsWith("/") || QQ.includes("\\") || QQ.includes("\0")) && DQ(QQ)
    }
    async function bQ(QQ, WQ, XQ) {
      const wQ = WQ.split("/"),
        qQ = wQ[wQ.length - 1];
      let TQ = QQ;
      for (let zQ = 0; zQ < wQ.length - 1; zQ++) TQ = await TQ.getDirectoryHandle(wQ[zQ], {
        create: XQ
      });
      return {
        dir: TQ,
        fileName: qQ
      }
    }
    async function vQ(QQ, WQ, XQ) {
      if (!UQ(WQ)) throw new Error(`Refusing to write unsafe path: ${WQ}`);
      const {
        dir: wQ,
        fileName: qQ
      } = await bQ(QQ, WQ, !0), TQ = await wQ.getFileHandle(qQ, {
        create: !0
      }), zQ = await TQ.createWritable();
      await zQ.write(XQ), await zQ.close()
    }
    async function dQ(QQ, WQ, XQ) {
      const wQ = await async function(QQ, WQ) {
        if (!UQ(WQ)) return null;
        try {
          const {
            dir: XQ,
            fileName: wQ
          } = await bQ(QQ, WQ, !1), qQ = await XQ.getFileHandle(wQ), TQ = await qQ.getFile();
          return await TQ.text()
        } catch (XQ) {
          if (XQ instanceof DOMException && ("NotFoundError" === XQ.name || "NotAllowedError" === XQ.name)) return null;
          throw XQ
        }
      }(QQ, WQ);
      wQ !== XQ && await vQ(QQ, WQ, XQ)
    }
    async function HQ(QQ, WQ, XQ) {
      if (!(0, wQ.t)(WQ) && !(0, qQ.b)(WQ)) throw new Error(`Refusing to write non-allowlisted path: ${WQ}`);
      if ((0, qQ.b)(WQ)) {
        if (await cQ(QQ, WQ) === sQ) throw new Error(`Move the binary schematic ${WQ} outside the linked folder before syncing its placeholder`)
      }
      await vQ(QQ, WQ, XQ)
    }
    async function aQ(QQ, WQ) {
      if (!UQ(WQ)) throw new Error(`Refusing to remove unsafe path: ${WQ}`);
      try {
        const {
          dir: XQ,
          fileName: wQ
        } = await bQ(QQ, WQ, !1);
        await XQ.removeEntry(wQ)
      } catch (XQ) {
        if (XQ instanceof DOMException && ("NotFoundError" === XQ.name || "NotAllowedError" === XQ.name)) return;
        throw XQ
      }
    }
    async function lQ(QQ, WQ) {
      if (!UQ(WQ)) return null;
      try {
        const XQ = WQ.split("/");
        let wQ = QQ;
        for (const QQ of XQ) wQ = await wQ.getDirectoryHandle(QQ);
        return wQ
      } catch (XQ) {
        if (XQ instanceof DOMException && ("NotFoundError" === XQ.name || "NotAllowedError" === XQ.name)) return null;
        throw XQ
      }
    }
    async function hQ(QQ, WQ) {
      if ((0, wQ.t)(WQ) || (0, qQ.b)(WQ)) {
        if ((0, qQ.b)(WQ)) {
          if (await cQ(QQ, WQ) === sQ) throw new Error(`Refusing to remove a binary schematic: ${WQ}`)
        }
        await aQ(QQ, WQ)
      }
    }
    async function iQ(QQ) {
      if (QQ.size > 64) return sQ;
      const WQ = await QQ.text();
      return Array.from(WQ).some((QQ => {
        const WQ = QQ.charCodeAt(0);
        return WQ < 9 || WQ > 13 && WQ < 32 || 65533 === WQ
      })) ? sQ : WQ
    }
    async function cQ(QQ, WQ) {
      try {
        const {
          dir: XQ,
          fileName: wQ
        } = await bQ(QQ, WQ, !1);
        return await iQ(await (await XQ.getFileHandle(wQ)).getFile())
      } catch (XQ) {
        if (XQ instanceof DOMException && "NotFoundError" === XQ.name) return null;
        throw XQ
      }
    }
    async function AQ(QQ, WQ) {
      const XQ = await GQ(QQ);
      for (const wQ of Object.keys(XQ)) wQ in WQ || (0, qQ.b)(wQ) || await hQ(QQ, wQ);
      for (const [TQ, zQ] of Object.entries(WQ))((0, wQ.t)(TQ) || (0, qQ.b)(TQ)) && await HQ(QQ, TQ, zQ)
    }

    function RQ(QQ, WQ) {
      var XQ, wQ;
      let qQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const TQ = null !== (XQ = qQ.debounceMs) && void 0 !== XQ ? XQ : 300,
        zQ = null !== (wQ = qQ.pollMs) && void 0 !== wQ ? wQ : 1e3;
      let sQ = !1,
        FQ = null,
        PQ = null,
        gQ = null;
      const JQ = () => {
          sQ || (FQ && clearTimeout(FQ), FQ = setTimeout((() => {
            FQ = null, rQ()
          }), TQ))
        },
        rQ = async () => {
          if (!sQ) try {
            if (!await BQ(QQ, "readwrite")) return;
            const XQ = await GQ(QQ);
            sQ || WQ(XQ)
          } catch (XQ) {
            console.error("[WorldCodeDirectorySync] Failed to read watched directory", XQ)
          }
        };
      rQ();
      const IQ = window.FileSystemObserver;
      if (IQ) try {
        gQ = new IQ((() => {
          JQ()
        })), gQ.observe(QQ, {
          recursive: !0
        })
      } catch (jQ) {
        console.warn("[WorldCodeDirectorySync] FileSystemObserver unavailable, falling back to polling", jQ), gQ = null
      }
      return gQ || (PQ = setInterval((() => {
        JQ()
      }), zQ)), () => {
        sQ = !0, FQ && clearTimeout(FQ), PQ && clearInterval(PQ), gQ && gQ.disconnect()
      }
    }
  },
  5178: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => yQ,
      f: () => VQ
    });
    var wQ = XQ(1081),
      qQ = XQ.n(wQ),
      TQ = XQ(61),
      zQ = XQ(1226),
      sQ = XQ(5181),
      FQ = XQ(1975),
      PQ = XQ(2535),
      gQ = XQ(5187),
      JQ = XQ(1145);
    const rQ = new WeakMap;
    let IQ = 0;

    function jQ(QQ) {
      let WQ = rQ.get(QQ);
      return void 0 === WQ && (WQ = IQ++, rQ.set(QQ, WQ)), WQ
    }

    function BQ(QQ) {
      let {
        piece: WQ
      } = QQ;
      return "space" === WQ.kind ? (0, JQ.jsx)(JQ.Fragment, {
        children: WQ.text
      }) : (0, JQ.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${WQ.delayMs}ms`
        },
        children: (0, JQ.jsx)(sQ.e, {
          text: "icon" === WQ.kind ? `[[${WQ.icon}]]` : WQ.text
        })
      })
    }

    function yQ(QQ) {
      let {
        display: WQ
      } = QQ;
      const {
        selectedLanguage: XQ
      } = (0, zQ.C)(), wQ = (0, TQ.useMemo)((() => (0, gQ.c)((0, gQ.f)(WQ).plan.pieces)), [WQ, XQ.code]);
      return (0, JQ.jsxs)("div", {
        className: qQ()("Dialogue", {
          DialogueAnimateIn: !1 !== WQ.animateIn
        }),
        children: [WQ.speakerName && (0, JQ.jsx)(FQ.e, {
          text: WQ.speakerName,
          className: "DialogueSpeaker"
        }), (0, JQ.jsx)("p", {
          className: "DialogueLine",
          children: wQ.map(((QQ, WQ) => 1 === QQ.length && "space" === QQ[0].kind ? QQ[0].text : (0, JQ.jsx)("span", {
            className: "DialogueGlue",
            children: QQ.map(((QQ, WQ) => (0, JQ.jsx)(BQ, {
              piece: QQ
            }, WQ)))
          }, WQ)))
        })]
      })
    }
    const VQ = (0, TQ.memo)((function() {
      const QQ = (0, PQ.g)("dialogue");
      return (0, JQ.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: QQ && (0, JQ.jsx)(yQ, {
          display: QQ
        }, jQ(QQ))
      })
    }))
  },
  36980: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => BQ,
      h: () => yQ
    });
    var wQ = XQ(61),
      qQ = XQ(1498),
      TQ = XQ(2052),
      zQ = XQ(36926),
      sQ = XQ(663),
      FQ = XQ(1081),
      PQ = XQ.n(FQ),
      gQ = XQ(1145);
    const JQ = [rQ()];

    function rQ() {
      return {
        source: null,
        direction: null,
        uL: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function IQ(QQ) {
      return JQ.find((WQ => null !== WQ.source && WQ.source === QQ))
    }

    function jQ(QQ) {
      clearTimeout(QQ.timeout), QQ.source = null, QQ.direction = null, QQ.writtenAngle = null, QQ.uL && (QQ.uL.style.rotate = "")
    }
    const BQ = (0, wQ.memo)((function() {
      const [, QQ] = (0, wQ.useReducer)((QQ => QQ + 1), 0);
      return (0, qQ.f)("damagedByOtherPlayer", (WQ => {
        let {
          jX: XQ,
          direction: wQ
        } = WQ;
        const qQ = XQ || "nonDirectional",
          TQ = function(QQ) {
            var WQ;
            const XQ = null !== (WQ = IQ(QQ)) && void 0 !== WQ ? WQ : JQ.find((QQ => null === QQ.source));
            if (XQ) return XQ;
            const wQ = {
              source: null,
              direction: null,
              uL: null,
              timeout: void 0,
              writtenAngle: null
            };
            return JQ.push(wQ), wQ
          }(qQ);
        clearTimeout(TQ.timeout), TQ.source = qQ, TQ.direction = wQ, TQ.timeout = setTimeout((() => {
          jQ(TQ), QQ()
        }), 800), QQ()
      })), (0, TQ.b)("kill", (WQ => {
        let {
          killer: XQ,
          victim: wQ
        } = WQ;
        const qQ = XQ.local && IQ(wQ.id);
        qQ && (jQ(qQ), QQ())
      })), (0, wQ.useEffect)((() => {
        const QQ = (0, zQ.f)("turnDamageIndicators", yQ);
        return () => {
          QQ(), JQ.forEach(jQ)
        }
      }), []), (0, gQ.jsx)("div", {
        className: "DirectionalDamage",
        children: JQ.map(((QQ, WQ) => (0, gQ.jsx)("div", {
          ref: WQ => {
            QQ.uL = WQ
          },
          className: PQ()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, sQ.G)(QQ.direction),
            DamageIndicatorIdle: null === QQ.source
          })
        }, WQ)))
      })
    }));

    function yQ(QQ) {
      for (const WQ of JQ) {
        if (null === WQ.source || (0, sQ.G)(WQ.direction)) continue;
        const XQ = WQ.direction - QQ;
        XQ !== WQ.writtenAngle && (WQ.writtenAngle = XQ, WQ.uL.style.rotate = `${XQ}rad`)
      }
    }
  },
  9159: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => cQ,
      c: () => aQ,
      g: () => lQ
    });
    var wQ = XQ(61),
      qQ = XQ(4863),
      TQ = XQ(1162),
      zQ = XQ(1498),
      sQ = XQ(31),
      FQ = XQ(3688),
      PQ = XQ(2318),
      gQ = XQ(1273),
      JQ = XQ(2678),
      rQ = XQ(2003),
      IQ = XQ(2052),
      jQ = XQ(1226),
      BQ = XQ(26),
      yQ = XQ(1698),
      VQ = XQ(1081),
      DQ = XQ.n(VQ),
      pQ = XQ(9168),
      GQ = XQ(9170),
      UQ = XQ(9174),
      bQ = XQ(9096),
      vQ = XQ(9176),
      dQ = (XQ(9179), XQ(1145));
    let HQ = null;

    function aQ() {
      return null !== HQ
    }

    function lQ() {
      return "pad" === HQ
    }

    function hQ() {
      return "inGame" === BQ.b.get("gameState") && !(0, yQ.r)()
    }

    function iQ(QQ) {
      return (0, GQ.z)(QQ, gQ.o, GQ.i, GQ.m, GQ.p)
    }
    const cQ = (0, wQ.memo)((function() {
      const {
        t: QQ
      } = (0, jQ.C)(), {
        userContext: WQ
      } = (0, TQ.c)(), [XQ, BQ] = (0, wQ.useState)(null), [VQ, aQ] = (0, wQ.useState)(null), lQ = (0, wQ.useRef)(null), cQ = (0, wQ.useCallback)((QQ => {
        lQ.current = QQ, aQ(QQ)
      }), []), AQ = (0, wQ.useRef)(0), RQ = (0, wQ.useRef)(null), EQ = (0, wQ.useRef)({
        x: 0,
        y: 0
      }), [CQ, uQ] = (0, wQ.useState)(0), LQ = (0, wQ.useMemo)((() => function(QQ) {
        const WQ = [];
        for (let wQ = 0; wQ < gQ.o; wQ++) {
          var XQ;
          WQ.push(null !== (XQ = QQ[wQ]) && void 0 !== XQ ? XQ : null)
        }
        return WQ
      }((0, JQ.i)(WQ.getPlayerCosmetics().emote))), [WQ, CQ]);
      (0, IQ.b)("cosmeticsUpdated", (QQ => {
        QQ.some((QQ => QQ.local && "emote" === QQ.dT)) && uQ((QQ => QQ + 1))
      }));
      const kQ = (0, wQ.useRef)(!1),
        fQ = (0, wQ.useCallback)((function(QQ) {
          let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === QQ && (0, UQ.f)(), kQ.current = WQ, EQ.current = {
            x: 0,
            y: 0
          }, cQ(null), BQ(QQ)
        }), [cQ]),
        SQ = (0, wQ.useCallback)((() => {
          BQ(null), cQ(null), EQ.current = {
            x: 0,
            y: 0
          }
        }), [cQ]),
        tQ = (0, wQ.useCallback)((QQ => {
          if (Date.now() < AQ.current) return;
          const WQ = (0, PQ.i)(QQ),
            XQ = !!WQ.holdUntilMove,
            wQ = XQ ? 600 : Math.ceil(1e3 * WQ.animation.animation_length / PQ.d) + 200;
          AQ.current = Date.now() + wQ, RQ.current = QQ, rQ.gameBridge.send("playEmote", QQ), rQ.gameBridge.send("applyTemporaryThirdPerson", XQ ? {} : {
            durationMs: wQ
          })
        }), []);
      (0, zQ.f)("requestToggleEmoteWheel", (() => {
        null === XQ ? hQ() && fQ("click") : SQ()
      })), (0, zQ.f)("requestEmoteWheelHoldOpen", (() => {
        null === XQ && hQ() && fQ((0, pQ.b)() ? "hold" : "click")
      })), (0, zQ.f)("requestEmoteWheelPadOpen", (QQ => {
        null !== XQ || !hQ() || (0, bQ.d)() || (0, vQ.t)() || fQ("pad", QQ)
      })), (0, zQ.f)("requestEmoteRepeatLast", (() => {
        if (null !== XQ || !hQ() || (0, bQ.d)() || (0, vQ.t)()) return;
        const QQ = RQ.current;
        null !== QQ && LQ.includes(QQ) ? tQ(QQ) : fQ("pad", !0)
      }));
      const oQ = () => {
        const QQ = lQ.current,
          WQ = null !== QQ ? LQ[QQ] : null;
        null !== WQ && "pad" === XQ && Date.now() < AQ.current || (SQ(), null !== WQ && tQ(WQ))
      };
      (0, zQ.f)("emoteWheelPadAim", (QQ => {
        if ("pad" !== XQ) return;
        const WQ = (0, GQ.H)(QQ, gQ.o, lQ.current);
        cQ(null !== WQ && null !== LQ[WQ] ? WQ : null)
      })), (0, zQ.f)("requestEmoteWheelPadCommit", (QQ => {
        "pad" !== XQ || QQ && kQ.current || oQ()
      })), (0, zQ.f)("appManagerUpdated|activeInputDevice", (QQ => {
        null !== XQ && "pad" === XQ !== ("gamepad" === QQ) && SQ()
      })), (0, wQ.useLayoutEffect)((() => (HQ = XQ, (0, FQ.s)("emoteWheel", "pad" === XQ), sQ.k.mB(FQ.o), () => {
        HQ = null, (0, FQ.s)("emoteWheel", !1), sQ.k.mB(FQ.o)
      })), [XQ]), (0, zQ.f)("requestEmoteWheelHoldRelease", (() => {
        "hold" === XQ && oQ()
      })), (0, zQ.f)("requestEmoteWheelClose", (() => {
        null !== XQ && SQ()
      })), (0, zQ.f)("appManagerUpdated|gameState", (QQ => {
        "inGame" !== QQ && SQ()
      }));
      const eQ = () => {
        (0, yQ.r)() && SQ()
      };
      if ((0, zQ.f)("appManagerUpdated|openEverythingMenuName", eQ), (0, zQ.f)("appManagerUpdated|openInGameMenuName", eQ), (0, zQ.f)("pointerLockUpdate", (QQ => {
          QQ || "hold" !== XQ || SQ()
        })), (0, wQ.useEffect)((() => {
          if (null === XQ) return;
          const QQ = QQ => {
            "Escape" === QQ.key && (QQ.stopImmediatePropagation(), QQ.preventDefault(), SQ())
          };
          return document.addEventListener("keydown", QQ, !0), () => {
            document.removeEventListener("keydown", QQ, !0)
          }
        }), [XQ, SQ]), (0, qQ.c)(!0, "click" === XQ, "EmoteWheelOverlay"), (0, wQ.useEffect)((() => {
          if ("hold" === XQ) return rQ.gameBridge.send("holdEmoteWheel", !0), () => {
            rQ.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [XQ]), (0, wQ.useEffect)((() => {
          if ("hold" !== XQ) return;
          const QQ = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            WQ = GQ.y * QQ,
            wQ = GQ.v * QQ,
            qQ = QQ => {
              let XQ = EQ.current.x + QQ.movementX,
                qQ = EQ.current.y + QQ.movementY;
              const TQ = Math.hypot(XQ, qQ);
              if (TQ > WQ) {
                const QQ = WQ / TQ;
                XQ *= QQ, qQ *= QQ
              }
              EQ.current = {
                x: XQ,
                y: qQ
              }, cQ(function(QQ, WQ, XQ, wQ) {
                if (Math.hypot(QQ, WQ) < XQ) return null;
                const qQ = (0, GQ.B)(QQ, WQ, gQ.o);
                return null === wQ[qQ] ? null : qQ
              }(XQ, qQ, wQ, LQ))
            };
          return document.addEventListener("mousemove", qQ), () => {
            document.removeEventListener("mousemove", qQ)
          }
        }), [XQ, LQ, cQ]), null === XQ) return null;
      const nQ = "hold" === XQ || "pad" === XQ,
        xQ = null !== VQ ? LQ[VQ] : null,
        YQ = null !== xQ ? (0, PQ.i)(xQ).displayName : QQ("emotes:pickEmote");
      return (0, dQ.jsx)("div", {
        className: DQ()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === XQ
        }),
        onMouseDown: QQ => {
          QQ.target === QQ.currentTarget && SQ()
        },
        children: (0, dQ.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * GQ.y + "rem",
            height: 2 * GQ.y + "rem"
          },
          children: [(0, dQ.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${GQ.r} ${GQ.r}`,
            children: [LQ.map(((WQ, XQ) => {
              const wQ = null !== WQ,
                qQ = nQ && XQ === VQ;
              return (0, dQ.jsx)("path", {
                d: iQ(XQ),
                className: DQ()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: qQ,
                  EmoteWheelWedgeDisabled: !wQ
                }),
                onClick: QQ => {
                  QQ.stopPropagation(), null !== WQ && (QQ => {
                    SQ(), tQ(QQ)
                  })(WQ)
                },
                "aria-label": null !== WQ ? (0, PQ.i)(WQ).displayName : QQ("emotes:emptySlot")
              }, XQ)
            })), (0, dQ.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: GQ.i,
              cy: GQ.i,
              r: GQ.p
            }), (0, dQ.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: GQ.i,
              cy: GQ.i,
              r: GQ.m
            }), nQ && null !== VQ && (0, dQ.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: iQ(VQ)
            })]
          }), LQ.map(((QQ, WQ) => {
            const XQ = null !== QQ,
              wQ = nQ && WQ === VQ,
              qQ = (0, GQ.D)(WQ, gQ.o),
              TQ = GQ.e * Math.cos(qQ),
              zQ = GQ.e * Math.sin(qQ);
            return (0, dQ.jsx)("div", {
              className: DQ()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: wQ,
                EmoteWheelSlotIconDisabled: !XQ
              }),
              style: {
                left: `calc(50% + ${TQ}rem)`,
                top: `calc(50% + ${zQ}rem)`,
                backgroundImage: XQ ? `url(/textures/charSkins/previews/emote_${QQ}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, WQ)
          })), (0, dQ.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: YQ
          })]
        })
      })
    }))
  },
  36849: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => yQ
    });
    var wQ = XQ(61),
      qQ = XQ(78),
      TQ = XQ(1226),
      zQ = XQ(1081),
      sQ = XQ.n(zQ),
      FQ = XQ(1802),
      PQ = XQ(1094),
      gQ = XQ(1318),
      JQ = XQ(1532),
      rQ = XQ(1728),
      IQ = XQ(1527),
      jQ = XQ(1145);
    const BQ = 14;

    function yQ(QQ) {
      let {
        className: WQ,
        triggerElementRef: XQ,
        options: zQ
      } = QQ;
      const {
        t: yQ
      } = (0, TQ.C)(), [VQ, DQ] = (0, wQ.useState)(!1), [pQ, GQ] = (0, wQ.useState)({
        x: 0,
        y: 0
      }), UQ = (0, wQ.useRef)(null);
      (0, wQ.useEffect)((() => {
        let QQ = null;
        const WQ = WQ => {
            QQ = {
              x: WQ.clientX,
              y: WQ.clientY
            }
          },
          wQ = WQ => {
            if (null === QQ || !(0, IQ.c)(QQ, WQ)) return;
            QQ = null;
            const XQ = BQ * (0, FQ.getRemInPx)();
            GQ({
              x: Math.min(WQ.clientX, window.innerWidth - XQ - 5),
              y: WQ.clientY
            }), DQ((QQ => !QQ))
          },
          qQ = QQ => {
            var WQ;
            null !== (WQ = UQ.current) && void 0 !== WQ && WQ.contains(QQ.relatedTarget) || DQ(!1)
          },
          TQ = XQ.current;
        return TQ.addEventListener("pointerdown", WQ), TQ.addEventListener("pointerup", wQ), TQ.addEventListener("mouseleave", qQ), () => {
          TQ.removeEventListener("pointerdown", WQ), TQ.removeEventListener("pointerup", wQ), TQ.removeEventListener("mouseleave", qQ)
        }
      }), [XQ]), (0, wQ.useEffect)((() => {
        if (VQ) return (0, rQ.c)("pointerdown", (QQ => {
          !UQ.current || UQ.current.contains(QQ.target) || XQ.current.contains(QQ.target) || DQ(!1)
        }))
      }), [VQ, XQ]), (0, wQ.useLayoutEffect)((() => {
        if (!VQ || !UQ.current) return;
        const QQ = UQ.current.getBoundingClientRect().height,
          WQ = Math.max(5, window.innerHeight - QQ - 5);
        pQ.y > WQ && GQ({
          x: pQ.x,
          y: WQ
        })
      }), [VQ, pQ]), (0, gQ.k)("popup", UQ, (() => {
        DQ(!1)
      }), VQ);
      const bQ = zQ.filter((QQ => !1 !== QQ.show));
      return VQ && 0 !== bQ.length ? (0, qQ.createPortal)((0, jQ.jsx)("div", {
        ref: UQ,
        className: sQ()("FloatingActions", {
          [WQ]: WQ
        }),
        style: {
          width: `${BQ}rem`,
          top: pQ.y,
          left: pQ.x
        },
        children: bQ.map((QQ => {
          let {
            icon: WQ,
            text: XQ,
            onPointerDown: wQ,
            analyticsClick: qQ
          } = QQ;
          return (0, jQ.jsxs)("div", {
            className: "FloatingAction",
            "data-pad-focusable": !0,
            onPointerUp: QQ => {
              void 0 !== qQ && (0, JQ.reportAnalyticsClick)(qQ), wQ(QQ), DQ(!1), QQ.stopPropagation()
            },
            children: [(0, jQ.jsx)(PQ.d, {
              name: WQ
            }), (0, jQ.jsx)("div", {
              children: yQ(XQ)
            })]
          }, XQ)
        }))
      }), function() {
        var QQ;
        return null !== (QQ = document.querySelector(".WholeAppWrapperInner")) && void 0 !== QQ ? QQ : document.body
      }()) : null
    }
  },
  36995: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => sz
    });
    var wQ = XQ(36891),
      qQ = XQ(61),
      TQ = XQ(2145),
      zQ = XQ(4851),
      sQ = XQ(4859),
      FQ = XQ(2535),
      PQ = XQ(2003),
      gQ = XQ(1145);

    function JQ(QQ) {
      let {
        className: WQ,
        style: XQ,
        vw: wQ,
        maxPx: qQ,
        children: TQ
      } = QQ;
      console.assert("number" === typeof wQ && "number" === typeof qQ, "vw and maxPx passed to Text must be numbers");
      const zQ = window.innerWidth * (wQ / 100) > qQ ? `${qQ}px` : `${wQ}vw`;
      return (0, gQ.jsx)("div", {
        className: WQ,
        style: {
          ...XQ,
          fontSize: zQ
        },
        children: TQ
      })
    }
    var rQ = XQ(36999),
      IQ = XQ(1507),
      jQ = XQ(31),
      BQ = XQ(2036),
      yQ = XQ(1094);

    function VQ(QQ) {
      let {
        tasks: WQ,
        lastDisplayedTasks: XQ
      } = QQ;
      return (0, gQ.jsx)(gQ.Fragment, {
        children: Object.keys(WQ).map((QQ => (0, gQ.jsx)(DQ, {
          task: WQ[QQ],
          lastDisplayedAs: XQ[QQ]
        }, WQ[QQ].text)))
      })
    }

    function DQ(QQ) {
      let {
        task: WQ,
        lastDisplayedAs: XQ
      } = QQ;
      const [wQ, TQ] = (0, qQ.useState)(null !== XQ && void 0 !== XQ && XQ.progress ? XQ.progress / WQ.goal : 0), [zQ, sQ] = (0, qQ.useState)(!1), [FQ, PQ] = (0, qQ.useState)(WQ.claimed || !1);
      return (0, qQ.useEffect)((() => {
        TQ(WQ.progress / WQ.goal)
      }), [WQ.progress, WQ.goal]), FQ ? null : (0, gQ.jsxs)("div", {
        className: "Task",
        children: [(0, gQ.jsx)("div", {
          className: "TaskDescDiv",
          children: (0, gQ.jsx)(JQ, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: WQ.text
          })
        }), WQ.progress < WQ.goal ? (0, gQ.jsxs)("div", {
          className: "TaskProgress",
          children: [0 !== wQ ? (0, gQ.jsx)("div", {
            className: "TaskProgressForeground",
            style: {
              width: 100 * wQ + "%"
            }
          }) : null, (0, gQ.jsx)("div", {
            className: "TaskProgressText",
            children: `${WQ.progress}/${WQ.goal}`
          })]
        }) : (0, gQ.jsx)(IQ.s, {
          className: "ClaimRewardButton",
          onClick: () => {
            sQ(!0)
          },
          children: (0, gQ.jsx)(JQ, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: "Claim Reward"
          })
        }), zQ ? (0, gQ.jsx)(pQ, {
          task: WQ,
          close: () => {
            WQ.claimed = !0, PQ(!0), sQ(!1)
          }
        }) : null]
      })
    }

    function pQ(QQ) {
      let {
        task: WQ,
        close: XQ
      } = QQ;
      const [wQ, TQ] = (0, qQ.useState)({}), [zQ, sQ] = (0, qQ.useState)("closed");
      (0, qQ.useEffect)((() => {
        let QQ;
        return "animStart" === zQ && (QQ = setTimeout((() => {
          sQ("animEnd")
        }), 700)), () => {
          clearTimeout(QQ)
        }
      }), [zQ]), (0, rQ.d)((() => {
        PQ.gameBridge.send("completeTask", WQ.text)
      }));
      const JQ = (0, FQ.g)("currencyAmounts");
      return (0, gQ.jsxs)("div", {
        className: "RewardBackground",
        onClick: () => {
          if ("animEnd" === zQ)
            if (0 === WQ.rewards.length) XQ(), PQ.gameBridge.send("completeTask", WQ.text);
            else {
              const QQ = {
                ...BQ.e.get("currencyAmounts")
              };
              for (const WQ in wQ) QQ[WQ] = {
                ...QQ[WQ],
                amount: QQ[WQ].amount + wQ[WQ]
              };
              BQ.e.apply({
                currencyAmounts: QQ
              }), sQ("closed")
            }
          else "closed" === zQ && (TQ(WQ.rewards.pop()), sQ("animStart"))
        },
        children: [(0, gQ.jsx)("img", {
          className: "Chest",
          alt: "closed" !== zQ ? "open chest" : "closed chest",
          src: `/textures/miscImages/Treasure Chest ${"closed"!==zQ?"open":"closed"}.png`
        }), (0, gQ.jsx)("div", {
          className: "Rewards",
          children: "closed" !== zQ ? Object.keys(wQ).map((QQ => {
            const WQ = null === JQ || void 0 === JQ ? void 0 : JQ[QQ];
            return !WQ || WQ.hidden ? null : (0, gQ.jsxs)("div", {
              className: "Reward",
              children: [(0, gQ.jsx)(yQ.d, {
                name: WQ.icon,
                className: "3x UiCurrencyIcon RewardIcon",
                style: {
                  color: WQ.iconColour
                }
              }), (0, gQ.jsx)("div", {
                className: "RewardAmountText",
                children: "animStart" === zQ ? 0 : wQ[QQ]
              })]
            }, QQ)
          })) : null
        }), "animStart" === zQ ? (0, gQ.jsx)(GQ, {}) : null, (0, gQ.jsx)("div", {
          className: "ChestsLeft",
          children: WQ.rewards.length
        })]
      })
    }

    function GQ() {
      const [QQ, WQ] = (0, qQ.useState)(0);
      (0, qQ.useEffect)((() => {
        WQ(1)
      }), []);
      return (0, gQ.jsx)(gQ.Fragment, {
        children: Array.from({
          length: 40
        }).map(((WQ, XQ) => (0, gQ.jsx)(yQ.d, {
          name: "star",
          className: "3x UiCurrencyIcon OpenStar",
          style: {
            bottom: 50 * QQ * Math.cos(XQ / 40 * (2 * Math.PI)) + 50 + "vh",
            left: 50 * QQ * Math.sin(XQ / 40 * (2 * Math.PI)) + "vh",
            opacity: 0 === QQ ? 1 : 0
          }
        }, XQ)))
      })
    }
    jQ.k.subscribe("requiredLibrariesLoaded", (() => {
      setTimeout((() => {
        const QQ = new Image,
          WQ = new Image;
        QQ.src = "/textures/miscImages/Treasure Chest open.png", WQ.src = "/textures/miscImages/Treasure Chest closed.png"
      }), 1e4)
    }));
    var UQ = XQ(3398),
      bQ = XQ(1162),
      vQ = XQ(1975),
      dQ = XQ(1498),
      HQ = XQ(402),
      aQ = XQ(2052),
      lQ = XQ(1391);

    function hQ(QQ) {
      var WQ, XQ;
      let {
        byId: wQ,
        localId: qQ
      } = QQ;
      return null === qQ ? null : null !== (WQ = null === (XQ = wQ[qQ]) || void 0 === XQ ? void 0 : XQ.name) && void 0 !== WQ ? WQ : null
    }

    function iQ(QQ) {
      let {
        lbStats: WQ,
        storedState: XQ = {}
      } = QQ;
      const {
        userContext: wQ
      } = (0, bQ.c)(), TQ = (0, aQ.d)("players", hQ), [zQ, sQ] = (0, qQ.useState)(XQ.selectedCat || (null === WQ || void 0 === WQ ? void 0 : WQ[0]) || null), [FQ, JQ] = (0, qQ.useState)(XQ.selectedTimeframe || "Today"), [rQ, IQ] = (0, qQ.useState)(null);
      (0, qQ.useEffect)((() => {
        null === zQ && null !== WQ && WQ.length > 0 && sQ(WQ[0])
      }), [WQ, zQ]);
      const [jQ, BQ] = (0, qQ.useState)(XQ.seeingTop || !1), [yQ, VQ] = (0, qQ.useState)(!1), DQ = (0, qQ.useCallback)((() => {
        null !== zQ && null !== FQ && (PQ.gameBridge.send("requestLeaderboard", {
          category: zQ.value,
          timeframe: FQ,
          seeTop: jQ
        }), GQ(!0), RQ && EQ(null))
      }), [zQ, FQ, XQ, jQ]);
      (0, qQ.useEffect)((() => {
        DQ(), XQ.selectedCat = zQ, XQ.selectedTimeframe = FQ, XQ.seeingTop = jQ
      }), [zQ, FQ, XQ, jQ, DQ]), (0, qQ.useEffect)((() => {
        if ((null === rQ || void 0 === rQ ? void 0 : rQ.length) > 0)
          if (jQ) jQ && VQ(null === iQ(rQ));
          else {
            for (const QQ of rQ)
              if (1 === QQ.place) return void VQ(!1);
            VQ(!0)
          }
      }), [rQ, jQ]), (0, dQ.f)("leaderboardResponse", (QQ => {
        let {
          category: XQ,
          timeframe: wQ,
          data: qQ
        } = QQ;
        for (let TQ = 0; TQ < WQ; TQ++)
          if (WQ[TQ].value === XQ) {
            sQ(WQ[TQ]);
            break
          } JQ(wQ), IQ(qQ), GQ(!1)
      }));
      const [pQ, GQ] = (0, qQ.useState)(!0);

      function iQ(QQ) {
        const WQ = hQ(PQ.gameBridge.latest("players"));
        for (let XQ = 0; XQ < QQ.length; XQ++)
          if (QQ[XQ].name === WQ) return QQ[XQ].place;
        return null
      }
      const [cQ, AQ] = (0, qQ.useState)(!1), [RQ, EQ] = (0, qQ.useState)(null);
      (0, qQ.useEffect)((() => {
        if (rQ && !cQ) {
          const QQ = iQ(rQ);
          QQ < (XQ.lastSeenPlayerPlace || 0) && EQ(XQ.lastSeenPlayerPlace - QQ), AQ(!0)
        }
      }), [rQ, XQ, cQ]), (0, qQ.useEffect)((() => () => {
        rQ && (XQ.lastSeenPlayerPlace = iQ(rQ))
      }), [rQ, XQ]);
      const CQ = (0, qQ.useRef)(null),
        [uQ, LQ] = (0, qQ.useState)(void 0);
      return (0, qQ.useEffect)((() => {
        var QQ, WQ;
        uQ !== (null === (QQ = CQ.current) || void 0 === QQ ? void 0 : QQ.offsetHeight) && LQ(null === (WQ = CQ.current) || void 0 === WQ ? void 0 : WQ.offsetHeight)
      })), wQ.isLoggedIn() ? (0, gQ.jsxs)(gQ.Fragment, {
        children: [(0, gQ.jsxs)("div", {
          className: "LeaderboardSelectors",
          children: [(0, gQ.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, gQ.jsx)(UQ.c, {
              options: WQ.map((QQ => ({
                label: QQ.label,
                value: QQ.value
              }))),
              value: zQ,
              onChange: QQ => {
                sQ(QQ)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), (0, gQ.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, gQ.jsx)(UQ.c, {
              options: HQ.Nc.map((QQ => ({
                value: QQ,
                label: QQ,
                className: "LBDropdownMenuItem"
              }))),
              value: FQ,
              onChange: QQ => {
                JQ(QQ.label)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), yQ ? (0, gQ.jsx)("div", {
            className: "SeeTopText",
            onClick: () => {
              BQ(!jQ)
            },
            children: jQ ? "See Yourself" : "See Top"
          }) : null]
        }), (0, gQ.jsx)("div", {
          className: "LBTableWrapper",
          children: pQ ? (0, gQ.jsx)("div", {
            className: "LoaderContainer",
            children: (0, gQ.jsx)(lQ.e, {})
          }) : null === RQ ? (0, gQ.jsx)(gQ.Fragment, {
            children: (0, gQ.jsxs)("table", {
              className: "LBTable",
              children: [(0, gQ.jsx)("thead", {
                className: "LBTableTHead",
                ref: CQ,
                children: (0, gQ.jsxs)("tr", {
                  children: [(0, gQ.jsx)("th", {
                    className: "LBTablePlaceTH LBTableTH",
                    children: "PLACE"
                  }), (0, gQ.jsx)("th", {
                    className: "LBTablePlayerTH LBTableTH",
                    children: "PLAYER"
                  }), (0, gQ.jsx)("th", {
                    className: "LBTableValueTH LBTableTH",
                    children: zQ.label.toUpperCase()
                  })]
                })
              }), (0, gQ.jsx)("tbody", {
                children: rQ.map((QQ => (0, gQ.jsxs)("tr", {
                  className: "LBTableTR " + (QQ.name === TQ ? "LBTableTRYou" : ""),
                  children: [(0, gQ.jsx)("td", {
                    className: "LBTableTD",
                    children: `#${QQ.place}`
                  }), (0, gQ.jsx)("td", {
                    className: "LBTableTD",
                    children: (0, gQ.jsx)(vQ.e, {
                      text: [{
                        entityName: QQ.name
                      }]
                    })
                  }), (0, gQ.jsx)("td", {
                    className: "LBTableTD",
                    children: QQ.stat
                  })]
                }, QQ.name)))
              })]
            })
          }) : (0, gQ.jsx)("div", {
            className: "LBIncreaseWrapper",
            onClick: () => {
              EQ(null)
            },
            children: (0, gQ.jsxs)("div", {
              className: "LBIncreaseDiv",
              children: [(0, gQ.jsx)("div", {
                className: "TriangleUp"
              }), (0, gQ.jsx)("div", {
                className: "LBIncreaseText",
                children: `${RQ} Place${RQ>1?"s":""}`
              })]
            })
          })
        })]
      }) : (0, gQ.jsxs)("div", {
        className: "LBLoginDiv",
        children: [(0, gQ.jsx)("div", {
          className: "LBLoginInfo",
          children: "Login to see the leaderboard"
        }), (0, gQ.jsx)("div", {
          className: "LBLoginInfo",
          children: "You can login from the top left homescreen"
        })]
      })
    }
    var cQ = XQ(3379),
      AQ = XQ(105),
      RQ = XQ(43),
      EQ = XQ(3685);
    const CQ = (0, qQ.memo)((function(QQ) {
      let {
        show: WQ,
        onClose: XQ
      } = QQ;
      (0, cQ.d)();
      const wQ = (0, FQ.g)("_tasks"),
        TQ = (0, FQ.g)("_availableLeaderboards"),
        [PQ, JQ] = (0, qQ.useState)({});
      wQ && Object.keys(wQ).length > 0 && 0 === Object.keys(PQ).length && JQ(wQ);
      const [rQ] = (0, qQ.useState)({
        tasks: {},
        leaderboard: {}
      }), IQ = {
        tasks: {
          Title: "Tasks",
          getIsDefined: () => !!wQ && Object.keys(wQ).length > 0,
          content: (0, gQ.jsx)(VQ, {
            tasks: wQ,
            lastDisplayedTasks: PQ
          })
        },
        leaderboard: {
          Title: "Leaderboard",
          getIsDefined: () => (null === TQ || void 0 === TQ ? void 0 : TQ.length) > 0,
          content: (0, gQ.jsx)(iQ, {
            lbStats: TQ,
            storedState: rQ.leaderboard
          })
        }
      };

      function jQ() {
        for (const QQ in IQ)
          if (IQ[QQ].getIsDefined()) return QQ;
        return null
      }
      const [BQ, yQ] = (0, qQ.useState)(jQ());

      function DQ() {
        JQ({
          ...wQ
        }), XQ()
      }(0, qQ.useEffect)((() => {
        BQ || yQ(jQ())
      }), [jQ()]), (0, sQ.c)(!0, BQ && WQ), (0, qQ.useEffect)((() => {
        WQ && !BQ && (console.log("CLOSE"), DQ())
      }), [WQ, BQ]);
      const [pQ, GQ] = (0, qQ.useState)(!1);
      return (0, qQ.useEffect)((() => {
        WQ && BQ && !pQ && GQ(!0)
      }), [WQ, pQ, BQ]), (0, qQ.useEffect)((() => {
        !pQ && wQ && "tasks" !== BQ && yQ("tasks")
      }), [pQ, wQ, BQ]), (0, gQ.jsx)(gQ.Fragment, {
        children: BQ ? (0, gQ.jsx)(EQ.c, {
          className: "RetentionFeaturesWrapper",
          show: WQ,
          children: (0, gQ.jsxs)(zQ.b, {
            close: DQ,
            escDoesExit: !1,
            closeClassnameList: ["VerticalMenuScreenDiv"],
            togglePointerLock: !1,
            globallyUniqueKey: "RetentionFeaturesComponent",
            children: [(0, gQ.jsxs)("div", {
              className: "VerticalMenuScreenDiv",
              children: [(0, gQ.jsx)(LQ, {}), (0, gQ.jsxs)("div", {
                className: "MenuDiv",
                children: [(0, gQ.jsx)(uQ, {
                  setCategory: yQ,
                  menuCategories: IQ,
                  selectedCat: BQ
                }), (0, gQ.jsx)("div", {
                  className: "MenuCategoryContainer",
                  children: IQ[BQ].content
                })]
              })]
            }), (0, gQ.jsx)("div", {
              className: "BottomScreenMenuWrapper",
              children: AQ.featureFlags.useDiscord && (0, gQ.jsx)("div", {
                className: "DiscordMenuDivDiv",
                children: (0, gQ.jsx)("div", {
                  className: "DiscordMenuDiv",
                  children: (0, gQ.jsx)(kQ, {
                    tasks: wQ
                  })
                })
              })
            })]
          })
        }) : null
      })
    }));

    function uQ(QQ) {
      let {
        selectedCat: WQ,
        setCategory: XQ,
        menuCategories: wQ
      } = QQ;
      return (0, gQ.jsx)("div", {
        className: "MenuHeader",
        children: Object.keys(wQ).map((QQ => wQ[QQ].getIsDefined() ? (0, gQ.jsx)("div", {
          className: "MenuHeaderCategory " + (QQ === WQ ? "SelectedHeaderCat" : "UnselectedHeaderCat"),
          onClick: () => {
            XQ(QQ)
          },
          children: wQ[QQ].Title
        }, QQ) : null))
      })
    }

    function LQ() {
      const QQ = (0, FQ.g)("currencyAmounts");
      return (0, gQ.jsx)("div", {
        className: "TopScreenCurrencies",
        children: Object.keys(null !== QQ && void 0 !== QQ ? QQ : {}).map((WQ => {
          const XQ = QQ[WQ];
          return XQ.hidden ? null : (0, gQ.jsxs)("div", {
            className: "TopScreenCurrencyDiv",
            children: [(0, gQ.jsx)(yQ.d, {
              name: XQ.icon,
              className: "3x UiCurrencyIcon",
              style: {
                color: XQ.iconColour
              }
            }), (0, gQ.jsx)("div", {
              className: "UiCurrencyAmount",
              children: XQ.amount
            })]
          }, WQ)
        }))
      })
    }

    function kQ(QQ) {
      let {
        tasks: WQ
      } = QQ;
      return (0, gQ.jsxs)("a", {
        className: "MenuDiscordButtonWrapper",
        href: "https://discord.gg/playbloxd",
        target: "_blank",
        rel: "noreferrer",
        children: [(0, gQ.jsx)(yQ.d, {
          name: "discord",
          kit: "brands",
          className: "DiscordButton",
          onClick: () => {
            RQ.i.setItem("DiscordPressed", !0), PQ.gameBridge.send("setServerCookie", {
              key: "joinDiscord",
              value: "true"
            }), "joinDiscord" in WQ && jQ.k.mB("clientTaskProgress", {
              taskId: "joinDiscord",
              progress: 1
            })
          }
        }), (0, gQ.jsx)(TQ.e, {})]
      })
    }
    var fQ = XQ(26),
      SQ = XQ(1698),
      tQ = XQ(36831),
      oQ = XQ(34408),
      eQ = XQ(4948),
      nQ = XQ(193),
      xQ = XQ(1246),
      YQ = XQ(1416),
      NQ = XQ(2803),
      ZQ = XQ(1226),
      OQ = XQ(1707),
      KQ = XQ(2496),
      mQ = XQ(2453),
      MQ = XQ(1927),
      QW = XQ(2104),
      WW = XQ(1296),
      XW = XQ(1532),
      wW = XQ(37003),
      qW = XQ(37008),
      TW = XQ(37011),
      zW = XQ(37015),
      sW = XQ(37022),
      FW = XQ(2879);

    function PW(QQ) {
      let {
        playersHere: WQ,
        exclude: XQ,
        PD: wQ
      } = QQ;
      const {
        t: TQ
      } = (0, ZQ.C)(), zQ = (0, FW.r)(FW.j), [sQ, FQ] = (0, qQ.useState)([]), PQ = [], JQ = (QQ, WQ) => {
        const wQ = [...XQ, ...PQ.map((QQ => QQ.player.name))];
        PQ.length < 3 && !(0, qW.j)(wQ, QQ.name) && PQ.push({
          player: QQ,
          status: WQ
        })
      };
      for (const qQ of WQ) JQ((0, sW.h)(qQ.name, qQ.cosmetics, qQ.ranks), TQ("worldSocial:inThisWorld"));
      if ("loaded" === zQ.state.status)
        for (const qQ of zQ.state.recentPlayers) qQ.preview.name && !qQ.preview.isError && JQ({
          ...qQ.preview,
          location: {
            status: "offline"
          }
        }, TQ("worldSocial:playedWithYou"));
      const rQ = QQ => {
        FQ((WQ => [...WQ, QQ])), wQ(QQ).finally((() => {
          FQ((WQ => WQ.filter((WQ => WQ !== QQ))))
        }))
      };
      return (0, gQ.jsx)(gQ.Fragment, {
        children: PQ.map(((QQ, WQ) => {
          let {
            player: XQ,
            status: wQ
          } = QQ;
          return (0, gQ.jsx)(sW.f, {
            zIndex: PQ.length - WQ,
            player: XQ,
            status: wQ,
            onSendFriendRequest: () => {
              rQ(XQ.name)
            },
            actions: (0, gQ.jsx)(YQ.e, {
              tooltipInner: (0, gQ.jsx)(gQ.Fragment, {
                children: TQ("recentPlayers:addFriend")
              }),
              delayShow: 0,
              hoverOnly: !0,
              children: (0, gQ.jsx)(IQ.h, {
                className: "FriendRequestButton",
                disabled: sQ.includes(XQ.name),
                ariaLabel: `${TQ("recentPlayers:addFriend")} ${XQ.name}`,
                onClick: () => {
                  rQ(XQ.name)
                },
                children: (0, gQ.jsx)(yQ.d, {
                  name: "user-plus"
                })
              })
            })
          }, `suggestion:${XQ.name}`)
        }))
      })
    }
    var gW = XQ(37031),
      JW = XQ(37038),
      rW = XQ(1257),
      IW = XQ(1546),
      jW = XQ(4637),
      BW = XQ(318),
      yW = XQ(4932);
    const VW = ["auto", "auto_existing"];

    function DW(QQ) {
      return VW.includes(QQ)
    }

    function pW(QQ, WQ) {
      const XQ = (0, rW.qb)(QQ);
      return null !== WQ && (0, rW.qb)(WQ) === XQ || (0, yW.b)().some((QQ => (0, rW.qb)(QQ.name) === XQ))
    }
    const GW = new Set;

    function UW(QQ) {
      return `worldSocialSeen:${QQ}`
    }

    function bW(QQ) {
      return !QQ || GW.has(QQ) || !0 === RQ.i.getItem(UW(QQ))
    }

    function vW(QQ) {
      QQ && !GW.has(QQ) && (GW.add(QQ), RQ.i.setItem(UW(QQ), !0))
    }
    var dW = XQ(2546),
      HW = XQ(2550);

    function aW(QQ) {
      let {
        show: WQ,
        onClose: XQ,
        opener: wQ
      } = QQ;
      const {
        lobbyName: TQ,
        shownLobbyName: sQ
      } = (0, aQ.e)("connectedGame");
      return (0, qQ.useEffect)((() => {
        WQ && (0, XW.reportAnalyticsClick)({
          id: "world_social.open",
          value: wQ
        })
      }), [WQ]), (0, gQ.jsx)(zQ.b, {
        show: WQ && null !== TQ,
        close: XQ,
        togglePointerLock: !1,
        className: "WorldSocialBackgroundScreen",
        globallyUniqueKey: "WorldSocialPopup",
        doGameplayStartStopOnShow: !0,
        ignorePressesAsShown: "icon" !== wQ,
        children: WQ && null !== TQ && (0, gQ.jsx)(lW, {
          lobbyName: TQ,
          worldCode: null !== sQ && void 0 !== sQ ? sQ : TQ,
          onClose: XQ
        }, TQ)
      })
    }

    function lW(QQ) {
      var WQ;
      let {
        lobbyName: XQ,
        worldCode: wQ,
        onClose: TQ
      } = QQ;
      const {
        t: zQ
      } = (0, ZQ.C)(), sQ = (0, qQ.useRef)(null), {
        settings: FQ,
        loading: PQ,
        answered: JQ,
        change: rQ,
        retry: jQ
      } = (0, wW.h)(XQ), BQ = (0, OQ.j)(), VQ = (0, aQ.e)("players"), DQ = (0, aQ.e)("hiddenPlayerNames"), [pQ, GQ] = (0, qQ.useState)([]), [UQ, vQ] = (0, qQ.useState)([]), [dQ, HQ] = (0, qQ.useState)(!1), hQ = (0, dW.e)(), iQ = (0, qQ.useMemo)((() => {
        var QQ, WQ;
        const XQ = null === VQ.localId ? null : null !== (QQ = null === (WQ = VQ.byId[VQ.localId]) || void 0 === WQ ? void 0 : WQ.name) && void 0 !== QQ ? QQ : null;
        return VQ.ids.flatMap((QQ => {
          const WQ = VQ.byId[QQ];
          return null !== WQ && void 0 !== WQ && WQ.name && WQ.name !== XQ ? [{
            name: WQ.name,
            cosmetics: WQ.cosmetics,
            ranks: WQ.ranks
          }] : []
        }))
      }), [VQ]), cQ = (0, qQ.useMemo)((() => (0, qW.g)(BQ.friends, XQ, iQ.map((QQ => QQ.name)))), [BQ.friends, XQ, iQ]), RQ = AQ.featureFlags.canSeeRealPlayerNames ? iQ.filter((QQ => null === (0, WW.b)(QQ.name, DQ))) : [], EQ = null !== FQ && void 0 !== FQ && FQ.canManage ? FQ : null, CQ = null !== EQ, uQ = null !== (WQ = null === FQ || void 0 === FQ ? void 0 : FQ.visibility) && void 0 !== WQ ? WQ : null, LQ = "whitelist" === (null === EQ || void 0 === EQ ? void 0 : EQ.visibility), kQ = "private" === uQ || "whitelist" === uQ && !CQ, {
        userContext: fQ
      } = (0, bQ.c)();
      (0, qQ.useEffect)((() => {
        CQ && pW(XQ, fQ.getPersonalWorldLobbyName()) && vW(fQ.whamm)
      }), [CQ, XQ, fQ]);
      const SQ = kQ ? zQ("whitelist" === uQ ? "socialBar:inviteWorldManagersOnly" : CQ ? "worldSocial:privateLinkRow" : "socialBar:inviteWorldPrivate") : null,
        oQ = null === SQ;
      (0, qQ.useEffect)((() => kQ ? void 0 : MQ.g.quietFriendAdded()), [kQ]), (0, qQ.useEffect)((() => MQ.g.quietFriendRequests()), []);
      const FW = (0, qQ.useRef)(!1);
      (0, qQ.useEffect)((() => {
        const QQ = sQ.current,
          WQ = !FW.current;
        FW.current = !0;
        const XQ = null === document.activeElement || document.activeElement === document.body;
        null !== QQ && void 0 !== QQ && QQ.contains(document.activeElement) || !WQ && !XQ || (0, tQ.f)() || null === QQ || void 0 === QQ || QQ.focus({
          preventScroll: !0
        })
      }), [oQ]), (0, qQ.useEffect)((() => {
        const QQ = QQ => {
          "Escape" !== QQ.key || null !== document.activeElement && document.activeElement !== document.body || TQ()
        };
        return document.addEventListener("keydown", QQ), () => {
          document.removeEventListener("keydown", QQ)
        }
      }), [TQ]);
      const rW = null === FQ && !JQ,
        IW = (PQ || BQ.loading) && 0 === BQ.friends.length,
        jW = BQ.friends.flatMap((QQ => QQ.name ? [QQ.name] : [])),
        BW = pQ.filter((QQ => !(0, qW.j)(jW, QQ))),
        yW = cQ.length + 3,
        VW = BW.length + yW,
        DW = dQ ? BQ.requests : BQ.requests.slice(0, 1),
        GW = async function(QQ) {
          let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (const XQ of (0, qW.m)(QQ, eQ.D)) {
            if (!await rQ({
                whitelistAdd: XQ
              }, (QQ => (0, qW.r)(QQ, XQ, !0)), {
                quiet: WQ
              })) return !1
          }
          return !0
        }, UW = QQ => {
          if (LQ && EQ) return {
            on: (0, qW.j)(EQ.whitelist, QQ),
            onChange: WQ => {
              (0, XW.reportAnalyticsClick)({
                id: "world_social.whitelist_toggle",
                value: WQ ? "on" : "off"
              }), rQ(WQ ? {
                whitelistAdd: [QQ]
              } : {
                whitelistRemove: QQ
              }, (XQ => (0, qW.r)(XQ, [QQ], WQ)))
            }
          }
        }, bW = async (QQ, WQ) => {
          (0, XW.reportAnalyticsClick)({
            id: "world_social.add_friend",
            value: WQ
          });
          const XQ = await (0, mQ.k)(QQ, "world_social");
          return (0, mQ.d)(XQ, QQ, {
            announceSent: !1
          }), "failed" !== XQ.kind && ("sent" === XQ.kind && GQ((WQ => (0, qW.j)(WQ, QQ) ? WQ : [...WQ, QQ])), LQ && await GW([QQ]), !0)
        };
      return (0, gQ.jsxs)("div", {
        ref: sQ,
        className: "WorldSocialPopup AnimFadeInScaleUp",
        tabIndex: -1,
        onKeyDown: QQ => {
          QQ.target === QQ.currentTarget && " " === QQ.key && QQ.preventDefault()
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "WorldSocialTitle",
        children: [(0, gQ.jsxs)("div", {
          className: "WorldSocialHeader",
          children: [(0, gQ.jsx)("h2", {
            id: "WorldSocialTitle",
            className: "WorldSocialTitle SmallTextBold",
            children: zQ("worldSocial:title")
          }), (0, gQ.jsx)(IQ.o, {
            className: "WorldSocialClose",
            onClick: TQ
          })]
        }), rW && (0, gQ.jsx)("div", {
          className: "WorldSocialLoading",
          children: (0, gQ.jsx)(lQ.e, {})
        }), !rW && (0, gQ.jsxs)(gQ.Fragment, {
          children: [(0, gQ.jsx)(TW.b, {
            worldCode: wQ,
            message: SQ
          }), null === FQ && !PQ && (0, gQ.jsx)("button", {
            type: "button",
            className: "WorldSocialLoadFailed",
            onClick: jQ,
            children: zQ("worldSocial:loadFailed")
          }), CQ && null !== uQ && (0, gQ.jsx)(zW.b, {
            visibility: uQ,
            onPick: QQ => {
              (async QQ => {
                if (QQ === uQ) return;
                (0, XW.reportAnalyticsClick)({
                  id: "world_social.set_mode",
                  value: QQ
                });
                const WQ = [...(0, JW.d)(XQ), ...UQ],
                  wQ = "whitelist" === QQ && FQ ? (0, qW.f)(cQ, WQ, FQ.whitelist) : [];
                await rQ({
                  setVisibility: QQ
                }, (WQ => ({
                  ...WQ,
                  visibility: QQ
                }))) && await GW(wQ)
              })(QQ)
            }
          }), BQ.requests.length > 0 && (0, gQ.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, gQ.jsx)(NQ.b, {
              label: (0, gQ.jsxs)(gQ.Fragment, {
                children: [(0, gQ.jsx)(yQ.d, {
                  name: QW.d
                }), " ", zQ("socialBar:requests")]
              }),
              meta: (0, gQ.jsxs)(gQ.Fragment, {
                children: [BQ.requests.length, BQ.requests.length === xQ.k && (0, gQ.jsx)("span", {
                  className: "SocialSectionTitleLimit",
                  children: zQ("socialBar:limitReached")
                }), !dQ && BQ.requests.length > 1 && (0, gQ.jsx)("button", {
                  type: "button",
                  className: "WorldSocialMoreRequests",
                  onClick: () => {
                    HQ(!0)
                  },
                  children: zQ("worldSocial:moreRequests", {
                    count: BQ.requests.length - 1
                  })
                })]
              })
            }), (0, gQ.jsx)("div", {
              className: "PlayerRows",
              children: DW.map(((QQ, WQ) => (0, gQ.jsx)(sW.f, {
                zIndex: DW.length - WQ,
                player: QQ,
                actions: (0, gQ.jsxs)(gQ.Fragment, {
                  children: [(0, gQ.jsx)(YQ.e, {
                    tooltipInner: (0, gQ.jsx)(gQ.Fragment, {
                      children: zQ("general:accept")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, gQ.jsx)(IQ.h, {
                      className: "FriendRequestButton",
                      ariaLabel: `${zQ("general:accept")} ${QQ.name}`,
                      analyticsClick: {
                        id: "social.accept_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, mQ.h)(QQ.name, !0, {
                          source: "world_social"
                        })
                      },
                      children: (0, gQ.jsx)(yQ.d, {
                        name: "check"
                      })
                    })
                  }), (0, gQ.jsx)(YQ.e, {
                    tooltipInner: (0, gQ.jsx)(gQ.Fragment, {
                      children: zQ("general:decline")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, gQ.jsx)(IQ.l, {
                      className: "FriendRequestButton",
                      ariaLabel: `${zQ("general:decline")} ${QQ.name}`,
                      analyticsClick: {
                        id: "social.decline_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, mQ.h)(QQ.name, !1, {
                          source: "world_social"
                        })
                      },
                      children: (0, gQ.jsx)(yQ.d, {
                        name: "xmark"
                      })
                    })
                  })]
                })
              }, `incoming:${QQ.name}`)))
            })]
          }), (0, gQ.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, gQ.jsx)(NQ.b, {
              label: (0, gQ.jsxs)(gQ.Fragment, {
                children: [(0, gQ.jsx)(yQ.d, {
                  name: QW.b
                }), " ", zQ("socialBar:friends")]
              }),
              meta: BQ.loaded && !kQ ? BQ.friends.length : void 0
            }), (0, gQ.jsx)(gW.c, {
              label: zQ("socialBar:sendRequest"),
              icon: "user-plus",
              placeholder: zQ("worldSocial:addFriendPlaceholder"),
              onSubmit: async QQ => await bW(QQ, "field") ? {
                ok: !0
              } : {
                ok: !1,
                error: null
              }
            }), IW && (0, gQ.jsx)("div", {
              className: "WorldSocialLoading",
              children: (0, gQ.jsx)(lQ.e, {})
            }), !IW && (0, gQ.jsxs)(gQ.Fragment, {
              children: [(0, gQ.jsxs)("div", {
                className: "PlayerRows",
                children: [BW.map(((QQ, WQ) => (0, gQ.jsx)(sW.f, {
                  zIndex: VW - WQ,
                  player: (0, sW.h)(QQ, null),
                  status: zQ("worldSocial:requestSent"),
                  fJ: UW(QQ)
                }, `request:${QQ}`))), !kQ && cQ.map(((QQ, WQ) => (0, gQ.jsx)(sW.c, {
                  zIndex: yW - WQ,
                  row: QQ,
                  fJ: UW(QQ.friend.name),
                  canInvite: (0, qW.c)(FQ) && "here" !== QQ.place,
                  invited: UQ.includes(QQ.friend.name),
                  onInvite: () => {
                    (async QQ => {
                      (0, XW.reportAnalyticsClick)({
                        id: "world_social.invite",
                        value: "friend"
                      });
                      const WQ = () => {
                        vQ((WQ => WQ.filter((WQ => WQ !== QQ))))
                      };
                      vQ((WQ => [...WQ, QQ]));
                      const wQ = (0, qW.p)(FQ, QQ);
                      if ("none" !== wQ) {
                        const XQ = GW([QQ], "quiet" === wQ);
                        if ("required" === wQ && !await XQ) return void WQ()
                      }
                      await (0, KQ.n)(QQ, "game", {
                        announceSent: !1,
                        source: "world_social"
                      }) ? ((0, JW.e)(XQ, QQ), setTimeout(WQ, nQ.k)) : WQ()
                    })(QQ.friend.name)
                  }
                }, QQ.friend.name))), BQ.loaded && 0 === BQ.friends.length && (0, gQ.jsx)(PW, {
                  playersHere: RQ,
                  exclude: pQ,
                  PD: QQ => bW(QQ, "suggestion")
                })]
              }), LQ && BQ.loaded && 0 === BQ.friends.length && 0 === BW.length && (0, gQ.jsx)("div", {
                className: "WorldSocialEmpty",
                children: zQ("worldSocial:whitelistNoFriends")
              })]
            })]
          })]
        }), hQ && (0, gQ.jsxs)(IQ.T, {
          className: "WorldSocialManageLobby SmallTextLight",
          onClick: () => {
            (0, HW.f)({
              page: "players",
              source: "invite_popup"
            }), TQ()
          },
          children: [(0, gQ.jsx)(yQ.d, {
            name: "users-gear"
          }), " ", zQ("lobbyManageEntry:manageLobby")]
        })]
      })
    }
    var hW = XQ(2568),
      iW = XQ(2540);

    function cW(QQ) {
      let {
        show: WQ,
        onClose: XQ,
        option: wQ
      } = QQ;
      const TQ = (0, aQ.d)("connectedGame", (QQ => (0, hW.c)(QQ) ? QQ.lobbyName : null));
      return function(QQ) {
        const {
          gameEntrySource: WQ,
          loadingOverlayVisible: XQ
        } = (0, fQ.n)(["gameEntrySource", "loadingOverlayVisible"]), {
          userContext: wQ
        } = (0, bQ.c)(), TQ = (0, aQ.e)("localPlayerAlive"), zQ = (0, aQ.d)("players", (QQ => null !== QQ.localId && void 0 !== QQ.byId[QQ.localId])), sQ = (0, iW.k)(), FQ = (0, qQ.useRef)(null), PQ = (0, qQ.useRef)(null), gQ = "worldCreation" === WQ, JQ = wQ.whamm, rQ = wQ.getPersonalWorldLobbyName();
        (0, qQ.useEffect)((() => {
          var WQ;
          null !== QQ && (null === (WQ = PQ.current) || void 0 === WQ ? void 0 : WQ.lobbyName) !== QQ && null !== CW(QQ, gQ, JQ, rQ) && (PQ.current = (0, wW.g)(QQ))
        }), [gQ, QQ, JQ, rQ]), (0, qQ.useEffect)((() => {
          if (null !== QQ && (!XQ && TQ && zQ)) return sQ.whenShown((() => {
            var WQ;
            const XQ = FQ.current === QQ ? null : CW(QQ, gQ, JQ, rQ);
            if (null === XQ) return;
            const wQ = (null === (WQ = PQ.current) || void 0 === WQ ? void 0 : WQ.lobbyName) === QQ ? PQ.current : (0, wW.g)(QQ);
            PQ.current = null, FQ.current = QQ,
              function(QQ, WQ, XQ, wQ) {
                const {
                  lobbyName: qQ
                } = QQ, TQ = () => {
                  ! function(QQ, WQ) {
                    if (!SW()) return void WQ(!0);
                    const XQ = performance.now() + kW;
                    let wQ = 0;
                    const qQ = () => {
                      wQ = SW() ? 0 : wQ + 1, wQ >= 2 ? WQ(!0) : !fW(QQ) || performance.now() > XQ ? WQ(!1) : setTimeout(qQ, LW)
                    };
                    setTimeout(qQ, LW)
                  }(qQ, (TQ => {
                    wQ();
                    const zQ = "auto_existing" === WQ && bW(XQ);
                    TQ && fW(qQ) && !RW(qQ) && !zQ && (uW(QQ) ? EW(qQ) : (EW(qQ), vW(XQ), function(QQ) {
                      const WQ = BW.e.world_social_popup_v1;
                      return (0, BW.i)("world_social_popup_v1"), (0, XW.reportAnalyticsClick)({
                        id: "world_social.auto_open",
                        value: `${WQ}:${(0,jW.e)()}:${QQ}`
                      }), (0, IW.flushClientAnalyticsEvents)(), "auto_open" === WQ
                    }(WQ) && ((0, wW.c)(QQ), jQ.k.mB("toggleMenu", `inviteLink|${WQ}`), "inviteLink" !== fQ.b.get("openInGameMenuName") && console.warn("World social popup: the auto-open asked for it, but it didn't open"))))
                  }))
                };
                if ("auto" === WQ && !uW(QQ)) return void TQ();
                QQ.response.then((QQ => {
                  if (!("error" in QQ)) return QQ.settings.canManage ? void TQ() : (EW(qQ), void wQ());
                  wQ()
                }))
              }(wQ, XQ, JQ, (() => {
                FQ.current === QQ && (FQ.current = null)
              }))
          }))
        }), [sQ, gQ, XQ, QQ, TQ, zQ, JQ, rQ])
      }(TQ), (0, qQ.useEffect)((() => {
        WQ && null !== TQ && EW(TQ)
      }), [WQ, TQ]), null !== TQ ? (0, gQ.jsx)(aW, {
        show: WQ,
        onClose: XQ,
        opener: DW(wQ) ? wQ : "icon"
      }) : (0, gQ.jsx)(oQ.b, {
        show: WQ,
        onClose: XQ
      })
    }
    const AW = new Set;

    function RW(QQ) {
      return AW.has(QQ) || !!RQ.m.getItem(`worldSocialShown:${QQ}`)
    }

    function EW(QQ) {
      AW.add(QQ), RQ.m.setItem(`worldSocialShown:${QQ}`, !0)
    }

    function CW(QQ, WQ, XQ, wQ) {
      return RW(QQ) ? null : function(QQ) {
        let {
          justMade: WQ,
          playerId: XQ,
          lobbyName: wQ,
          personalWorld: qQ
        } = QQ;
        return WQ ? "auto" : !bW(XQ) && pW(wQ, qQ) ? "auto_existing" : null
      }({
        justMade: WQ,
        playerId: XQ,
        lobbyName: QQ,
        personalWorld: wQ
      })
    }

    function uW(QQ) {
      let {
        answer: WQ
      } = QQ;
      return null !== WQ && "settings" in WQ && !WQ.settings.canManage
    }
    const LW = 500,
      kW = 3e4;

    function fW(QQ) {
      return "inGame" === fQ.b.get("gameState") && PQ.gameBridge.latest("connectedGame").lobbyName === QQ
    }

    function SW() {
      return (0, tQ.f)() || fQ.b.get("loadingOverlayVisible") || (0, SQ.r)()
    }
    var tW = XQ(37041),
      oW = XQ(3433),
      eW = XQ(2061),
      nW = XQ(3424);

    function xW(QQ, WQ, XQ) {
      return nW.d.overridesTexture(QQ) ? nW.d.getTexture(QQ, WQ).url : XQ
    }
    var YW = XQ(10358);
    const NW = (QQ, WQ) => {
        (0, qQ.useEffect)((() => {
          setTimeout((() => {
            QQ && QQ.current && QQ.current.focus()
          }), 1)
        }), [WQ])
      },
      ZW = (0, qQ.memo)((function(QQ) {
        let {
          isInputActive: WQ,
          onClose: XQ,
          onChange: wQ,
          textAreaRef: qQ,
          fontSize: TQ,
          lineHeight: zQ,
          currText: sQ
        } = QQ;
        return (0, gQ.jsxs)("div", {
          className: "WriteOnBoardWrapper",
          children: [(0, gQ.jsx)("img", {
            src: xW("board_full", oW.h.BLOCK, YW),
            alt: "Board",
            className: "WriteOnBoardImg"
          }), (0, gQ.jsx)("textarea", {
            className: "WriteOnBoardTextArea",
            value: sQ,
            ref: qQ,
            style: {
              fontSize: `${TQ}rem`,
              lineHeight: `${zQ}rem`
            },
            onKeyDown: QQ => {
              var WQ;
              "Escape" !== QQ.key && (QQ.stopPropagation(), "Tab" === QQ.key && function(QQ) {
                QQ.preventDefault();
                const WQ = QQ.target,
                  {
                    value: XQ
                  } = WQ;
                let wQ = WQ.selectionStart,
                  qQ = WQ.selectionEnd,
                  TQ = XQ.slice(wQ, qQ);
                if (!TQ.includes("\n") && !QQ.shiftKey) return void document.execCommand("insertText", !1, "\t");
                for (; wQ > 0 && "\n" !== XQ[wQ - 1];) wQ--;
                const zQ = "\n" === XQ[qQ - 1];
                zQ && qQ--;
                TQ = XQ.slice(wQ, qQ);
                const sQ = TQ.split("\n").map((WQ => QQ.shiftKey ? WQ.replace(/^\t/, "") : "\t" + WQ)).join("\n");
                if (QQ.shiftKey && XQ.slice(wQ, qQ) === sQ) return;
                let {
                  selectionStart: FQ
                } = WQ;
                WQ.setSelectionRange(wQ, qQ), FQ > wQ && (!QQ.shiftKey || "\t" === TQ[0]) && (FQ += QQ.shiftKey ? -1 : 1);
                qQ = wQ + sQ.length + (zQ ? 1 : 0), document.execCommand("insertText", !1, sQ), WQ.setSelectionRange(FQ, qQ)
              }(QQ), /^F\d+$/i.test(QQ.code) && null !== (WQ = eW.s.OpenCodeEditor) && void 0 !== WQ && WQ.includes(QQ.code) && XQ())
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: wQ
          })]
        })
      }));

    function OW(QQ) {
      return 1.3 * QQ
    }
    var KW = XQ(1744);
    const mW = (0, qQ.memo)((function(QQ) {
        let {
          show: WQ,
          onOpen: XQ,
          onClose: wQ
        } = QQ;
        const [TQ, sQ] = (0, qQ.useState)(null), [FQ, JQ] = (0, qQ.useState)(""), [rQ, jQ] = (0, qQ.useState)(0), [BQ, yQ] = (0, qQ.useState)(null), [VQ, DQ] = (0, qQ.useState)({
          text: "",
          textSize: 0
        }), pQ = (QQ, WQ) => BQ ? (0, tW.q)(QQ, WQ, BQ.width, BQ.height) : (0, tW.g)(QQ, WQ), GQ = QQ => {
          JQ(pQ(FQ, QQ)), jQ(QQ), RQ.i.setItem("lastBoardTextSize", QQ)
        }, UQ = () => {
          wQ(), BQ && FQ === VQ.text && rQ === VQ.textSize || PQ.gameBridge.send("writeOnBoard", {
            pos: TQ,
            text: FQ,
            textSize: rQ
          })
        };
        (0, aQ.b)("boardEditRequested", (QQ => {
          var qQ, TQ;
          if (!AQ.featureFlags.canSeePlayerWrittenText) return;
          if (null === QQ) return sQ(null), void(WQ && wQ());
          const {
            pos: zQ,
            noticeboardSpan: FQ,
            text: PQ
          } = QQ;
          sQ(zQ), yQ(FQ), JQ(PQ);
          const gQ = null !== (qQ = null !== (TQ = QQ.textSize) && void 0 !== TQ ? TQ : RQ.i.getItem("lastBoardTextSize")) && void 0 !== qQ ? qQ : 0;
          jQ(gQ), DQ({
            text: PQ,
            textSize: gQ
          }), RQ.i.setItem("lastBoardTextSize", gQ), XQ()
        }));
        const bQ = (0, qQ.useRef)(null);
        NW(bQ, WQ), (0, KW.u)(bQ, {
          kind: "sign",
          submit: UQ
        });
        const vQ = function(QQ, WQ) {
            const XQ = tW.e[QQ];
            if (!WQ) return XQ.uiFontSize;
            const {
              numLines: wQ,
              charsPerLine: qQ
            } = (0, tW.z)(WQ.width, WQ.height, QQ);
            return XQ.uiFontSize * Math.min(XQ.charsPerLine / qQ, XQ.numLines / wQ)
          }(rQ, BQ),
          dQ = OW(vQ);
        return (0, gQ.jsxs)(zQ.b, {
          className: "WriteOnBoardBg",
          close: UQ,
          escDoesExit: !0,
          show: WQ,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, gQ.jsx)(ZW, {
            isInputActive: () => WQ,
            onClose: UQ,
            onChange: QQ => {
              JQ(pQ(QQ.target.value, rQ))
            },
            textAreaRef: bQ,
            fontSize: vQ,
            lineHeight: dQ,
            currText: FQ
          }), (0, gQ.jsx)("div", {
            className: "WriteOnBoardTextSizeHeader SmallTextBold",
            children: "Text Size"
          }), (0, gQ.jsxs)("div", {
            className: "WriteOnBoardTextSizeButtons",
            children: [(0, gQ.jsx)(IQ.h, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                GQ(0)
              },
              disabled: 0 === rQ,
              children: "Small"
            }), (0, gQ.jsx)(IQ.h, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                GQ(1)
              },
              disabled: 1 === rQ,
              children: "Medium"
            }), (0, gQ.jsx)(IQ.h, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                GQ(2)
              },
              disabled: 2 === rQ,
              children: "Large"
            })]
          })]
        })
      })),
      MW = (0, qQ.memo)((function(QQ) {
        let {
          show: WQ,
          onOpen: XQ,
          onClose: wQ
        } = QQ;
        const [TQ, sQ] = (0, qQ.useState)(""), FQ = () => {
          wQ(), PQ.gameBridge.send("writeNameTag", TQ)
        };
        (0, dQ.f)("EditNameTag", (QQ => {
          AQ.featureFlags.canSeePlayerWrittenText && null !== QQ && (sQ(QQ), XQ())
        }));
        const JQ = (0, qQ.useRef)(null);
        NW(JQ, WQ), (0, KW.u)(JQ, {
          kind: "nameTag",
          submit: FQ
        });
        const rQ = tW.I.nameTag.uiFontSize,
          jQ = OW(rQ);
        return (0, gQ.jsxs)(zQ.b, {
          className: "WriteOnBoardBg",
          close: FQ,
          escDoesExit: !0,
          show: WQ,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, gQ.jsx)("div", {
            className: "NameTagTrim",
            children: (0, gQ.jsx)(ZW, {
              isInputActive: () => WQ,
              onClose: FQ,
              onChange: QQ => {
                const WQ = QQ.target.value.replaceAll("\n", "");
                sQ((0, tW.u)(WQ, "nameTag"))
              },
              textAreaRef: JQ,
              fontSize: rQ,
              lineHeight: jQ,
              currText: TQ
            })
          }), (0, gQ.jsx)(IQ.h, {
            onClick: FQ,
            className: "WriteOnNameTagCloseButton",
            children: "Finish"
          })]
        })
      }));
    var QX = XQ(18630);
    const WX = (0, qQ.memo)((function(QQ) {
      let {
        show: WQ,
        onOpen: XQ,
        onClose: wQ
      } = QQ;
      const [TQ, sQ] = (0, qQ.useState)(""), [FQ, JQ] = (0, qQ.useState)(0), [rQ, jQ] = (0, qQ.useState)(!1), [BQ, yQ] = (0, qQ.useState)(["", "", "", "", "", "", "", "", "", ""]), [VQ, DQ] = (0, qQ.useState)("Title"), [pQ, GQ] = (0, qQ.useState)(!0), [UQ, bQ] = (0, qQ.useState)(!1);
      (0, dQ.f)("EditBook", (QQ => {
        let {
          pages: WQ,
          title: wQ,
          isPublished: qQ
        } = QQ;
        var TQ;
        AQ.featureFlags.canSeePlayerWrittenText && (null !== WQ ? (yQ(WQ), sQ(null !== (TQ = WQ[0]) && void 0 !== TQ ? TQ : ""), DQ(wQ), JQ(0), jQ(!1), GQ(!qQ), bQ(!1), XQ()) : yQ(["", "", "", "", "", "", "", "", "", ""]))
      }));
      const vQ = (0, qQ.useRef)(null),
        HQ = (0, qQ.useRef)(null);
      NW(vQ, WQ), (0, KW.u)(vQ, {
        kind: "book"
      }), (0, KW.u)(HQ, {
        kind: "fz"
      });
      const aQ = tW.I.book.uiFontSize,
        lQ = OW(aQ),
        hQ = () => {
          (pQ || UQ) && PQ.gameBridge.send("writeBook", {
            pages: [...BQ],
            title: VQ,
            published: !pQ && UQ
          })
        },
        iQ = QQ => {
          rQ && (BQ[FQ] = TQ, jQ(!1)), sQ(BQ[QQ]), JQ(QQ)
        };
      return (0, gQ.jsxs)(zQ.b, {
        className: "WriteOnBoardBg",
        close: () => {
          wQ(), BQ[FQ] = TQ, hQ()
        },
        escDoesExit: !0,
        show: WQ,
        togglePointerLock: !1,
        globallyUniqueKey: "WriteOnBookComp",
        children: [(0, gQ.jsxs)("div", {
          className: "WriteOnBookWrapper",
          children: [(0, gQ.jsx)("textarea", {
            className: "BookTitleTextArea SmallTextLight",
            value: VQ,
            ref: HQ,
            style: {
              fontSize: "2.5rem",
              lineHeight: `${lQ}rem`
            },
            onKeyDown: QQ => {
              pQ && QQ.stopPropagation()
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: QQ => {
              let WQ = QQ.target.value;
              WQ = (0, tW.u)(WQ, "fz"), DQ(WQ)
            },
            readOnly: !pQ
          }), (0, gQ.jsx)("img", {
            src: xW("book_page", oW.h.ITEM, QX),
            alt: "book_page",
            className: "WriteOnBookPageImg"
          }), (0, gQ.jsx)("div", {
            className: "BookTextAreaPadding",
            children: (0, gQ.jsx)("textarea", {
              className: "WriteOnBookPageTextArea",
              value: TQ,
              ref: vQ,
              style: {
                fontSize: `${aQ}rem`,
                lineHeight: `${lQ}rem`
              },
              onKeyDown: QQ => {
                pQ && QQ.stopPropagation()
              },
              spellCheck: "false",
              autoComplete: "off",
              onChange: QQ => {
                const WQ = QQ.target.value;
                sQ((0, tW.u)(WQ, "book")), jQ(!0)
              },
              readOnly: !pQ
            })
          })]
        }), (0, gQ.jsxs)("div", {
          className: "BookNavigationWrapper",
          children: [(0, gQ.jsx)(IQ.h, {
            disabled: 0 === FQ,
            onClick: () => {
              iQ(FQ - 1)
            },
            className: "BookNavButton",
            children: "<"
          }), (0, gQ.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, gQ.jsx)(IQ.h, {
            disabled: 9 === FQ,
            onClick: () => {
              iQ(FQ + 1)
            },
            className: "BookNavButton",
            children: ">"
          }), (0, gQ.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, gQ.jsx)(IQ.h, {
            onClick: () => {
              GQ(!pQ), bQ(!0)
            },
            className: "BookNavButton",
            children: pQ ? "Publish" : "Edit"
          })]
        })]
      })
    }));
    var XX = XQ(36906),
      wX = XQ(9069),
      qX = XQ(1454),
      TX = XQ(1988);

    function zX(QQ) {
      let {
        show: WQ,
        buttons: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, ZQ.C)(), TQ = (0, qQ.useRef)(null);
      return (0, qQ.useEffect)((() => {
        var QQ, XQ;
        const wQ = WQ ? (0, XX.B)() : null;
        if (!wQ || !(0, qX.l)()) return;
        const qQ = (0, XX.j)().findIndex((QQ => QQ.id === wQ));
        (0, wX.n)(null !== (QQ = null === (XQ = TQ.current) || void 0 === XQ ? void 0 : XQ.children[qQ]) && void 0 !== QQ ? QQ : null)
      }), [WQ]), 0 === XQ.length ? null : (0, gQ.jsx)("div", {
        ref: TQ,
        className: "ClientGameInventoryButtons",
        onPointerDown: QQ => {
          QQ.stopPropagation()
        },
        onPointerUp: QQ => {
          QQ.stopPropagation()
        },
        children: XQ.map((QQ => {
          const WQ = wQ(QQ.labelKey);
          return (0, gQ.jsxs)(IQ.s, {
            className: QQ.className,
            disabled: QQ.disabled,
            onClick: () => {
              (0, XX.t)(QQ)
            },
            ariaLabel: QQ.iconOnly ? WQ : void 0,
            title: QQ.iconOnly ? WQ : void 0,
            children: [QQ.icon && (0, gQ.jsxs)("div", {
              className: "ClientGameInventoryButtonIcon",
              children: ["item" === QQ.icon.kind && (0, gQ.jsx)(TX.d, {
                itemName: QQ.icon.name,
                amount: 0
              }), "image" === QQ.icon.kind && (0, gQ.jsx)("img", {
                src: QQ.icon.src,
                alt: "",
                draggable: !1
              }), "icon" === QQ.icon.kind && (0, gQ.jsx)(yQ.d, {
                name: QQ.icon.name
              })]
            }), !QQ.iconOnly && WQ]
          }, QQ.id)
        }))
      })
    }
    var sX = XQ(37047),
      FX = XQ(2971),
      PX = XQ(34523),
      gX = XQ(36827),
      JX = XQ(36825);
    let rX = null;
    window.setShowInventoryAdsOverride = QQ => {
      rX = QQ
    };
    const IX = 24e4;
    var jX = XQ(1997);

    function BX(QQ) {
      var WQ;
      let {
        draggedInfo: {
          name: XQ,
          attributes: wQ,
          amount: qQ
        },
        toAddRef: TQ
      } = QQ;
      return (0, gQ.jsx)("div", {
        className: "DraggedInvenItem",
        ref: TQ,
        children: (0, gQ.jsx)(TX.d, {
          itemName: XQ,
          amount: qQ,
          enchantmentTier: null === wQ || void 0 === wQ || null === (WQ = wQ.customAttributes) || void 0 === WQ ? void 0 : WQ.enchantmentTier,
          bar: (0, jX.e)(wQ)
        })
      })
    }

    function yX(QQ) {
      let {
        className: WQ = "",
        displayInfo: XQ,
        domRef: wQ
      } = QQ;
      return (0, gQ.jsxs)("div", {
        className: `InvenHoveredItemInfo SmallTextBold ${WQ}`,
        ref: wQ,
        children: [(0, gQ.jsx)(vQ.e, {
          text: (0, HQ.nb)(XQ.name, {
            fontStyle: XQ.fontStyle
          })
        }), (0, gQ.jsx)("div", {
          className: "InvenHoveredItemInfoDescription",
          children: (0, gQ.jsx)(vQ.e, {
            text: XQ.desc
          })
        })]
      })
    }

    function VX(QQ) {
      let {
        info: WQ,
        draggedInfo: XQ
      } = QQ;
      const wQ = (0, qQ.useRef)(null);
      return (0, qQ.useLayoutEffect)((() => {
        const QQ = wQ.current,
          {
            left: XQ,
            top: qQ
          } = function(QQ, WQ, XQ, wQ) {
            const qQ = wQ.left * XQ.width / 100 + 4,
              TQ = XQ.width - wQ.right * XQ.width / 100 - 4 - WQ.width,
              zQ = wQ.top * XQ.height / 100 + 4,
              sQ = XQ.height - 4 - WQ.height;
            return {
              left: Math.max(qQ, Math.min(QQ.x - WQ.width / 2, TQ)),
              top: Math.max(zQ, Math.min(QQ.y - 48 - WQ.height, sQ))
            }
          }({
            x: WQ.initTouchX,
            y: WQ.initTouchY
          }, {
            width: QQ.offsetWidth,
            height: QQ.offsetHeight
          }, {
            width: window.innerWidth,
            height: window.innerHeight
          }, fQ.b.get("notchSize"));
        QQ.style.left = `${XQ}px`, QQ.style.top = `${qQ}px`
      }), [WQ]), (0, gQ.jsxs)("div", {
        className: "LongHoldSplitInfoUI SmallTextBold",
        ref: wQ,
        children: [(0, gQ.jsx)("div", {
          className: "LongHoldSplitInfoUIInner",
          style: {
            width: XQ.amount / WQ.maxAmount * 100 + "%"
          }
        }), (0, gQ.jsxs)("div", {
          className: "LongHoldSplitInfoUIText",
          children: [XQ.amount, "/", WQ.maxAmount]
        })]
      })
    }
    var DX = XQ(1081),
      pX = XQ.n(DX),
      GX = XQ(231);
    const UX = (0, qQ.memo)((function(QQ) {
      let {
        show: WQ,
        onOpen: XQ,
        onClose: wQ
      } = QQ;
      const TQ = (0, qQ.useRef)({
          pos: null
        }),
        [sQ, FQ] = (0, qQ.useState)([0, 0, 0, 0]),
        {
          userContext: JQ
        } = (0, bQ.c)();
      (0, aQ.b)("ironChestOpenRequested", (QQ => {
        let {
          pos: WQ,
          ownerDbId: wQ,
          cachedPasskey: qQ
        } = QQ;
        if (TQ.current.pos = WQ, wQ !== JQ.whamm) return null !== qQ ? (FQ(qQ), void rQ(qQ)) : void XQ();
        rQ(sQ)
      })), (0, aQ.b)("localEffectUpdated", (QQ => {
        "Thief" === QQ && wQ()
      }));
      const rQ = QQ => {
        const {
          pos: WQ
        } = TQ.current;
        PQ.gameBridge.send("openIronChest", {
          pos: WQ,
          ys: QQ
        })
      };
      return (0, gQ.jsx)(zQ.b, {
        className: "IronChestPasskeyInputScreenOuter",
        close: wQ,
        escDoesExit: !0,
        show: WQ,
        togglePointerLock: !1,
        globallyUniqueKey: "IronChestPasskeyInputScreen",
        children: (0, gQ.jsx)("div", {
          className: "IronChestPasskeyInputScreen",
          children: (0, gQ.jsx)(bX, {
            ys: sQ,
            onPasskeyUpdated: FQ,
            confirmText: "ironChest:tryUnlock",
            onConfirm: () => {
              rQ(sQ)
            }
          })
        })
      })
    }));

    function bX(QQ) {
      let {
        className: WQ = "",
        ys: XQ,
        onPasskeyUpdated: wQ,
        confirmText: qQ,
        onConfirm: TQ
      } = QQ;
      const {
        t: zQ
      } = (0, ZQ.C)();
      return (0, gQ.jsxs)("div", {
        className: `${WQ} IronChestPasskeyInput`,
        children: [(0, gQ.jsx)("div", {
          className: "SmallTextBold IronChestPasskeyInputTitle",
          children: zQ("ironChest:passkeyInputTitle")
        }), (0, gQ.jsx)("div", {
          className: "IronChestPasskeyInputRow",
          children: new Array(GX.h.ironChestPasskeyLength).fill(0).map(((QQ, WQ) => (0, gQ.jsx)(vX, {
            digit: XQ[WQ],
            onPasskeyDigitUpdated: QQ => {
              const qQ = [...XQ];
              qQ[WQ] = QQ, wQ(qQ)
            }
          }, WQ)))
        }), (0, gQ.jsx)(IQ.s, {
          className: "IronChestPasskeyInputConfirmButton",
          onClick: TQ,
          children: zQ(qQ)
        })]
      })
    }

    function vX(QQ) {
      let {
        digit: WQ,
        onPasskeyDigitUpdated: XQ
      } = QQ;
      return (0, gQ.jsx)("div", {
        className: "IronChestPasskeyDigitInputWrapper",
        children: (0, gQ.jsxs)("div", {
          className: "IronChestPasskeyDigitInput",
          children: [(0, gQ.jsx)(IQ.s, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              XQ(HQ.b.mod(WQ + 1, 10))
            },
            children: (0, gQ.jsx)(yQ.d, {
              name: "angle-up"
            })
          }), (0, gQ.jsx)("div", {
            className: "SmallTextBold IronChestPasskeyDigit",
            children: WQ
          }), (0, gQ.jsx)(IQ.s, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              XQ(HQ.b.mod(WQ - 1, 10))
            },
            children: (0, gQ.jsx)(yQ.d, {
              name: "angle-down"
            })
          })]
        })
      })
    }
    var dX = XQ(34516),
      HX = XQ(37105),
      aX = XQ(36821);

    function lX(QQ) {
      let {
        specialItemInfo: WQ,
        setHovered: XQ,
        pointerDown: wQ,
        pointerUp: TQ,
        enchantingTablePosition: zQ,
        enchantingTableBlockName: sQ
      } = QQ;
      const {
        t: JQ
      } = (0, ZQ.C)(), [rQ, jQ] = (0, qQ.useState)(null), [BQ, yQ] = (0, qQ.useState)(null), VQ = (0, FQ.g)("auraPerLevel"), DQ = Math.floor((0, aQ.e)("aura") / VQ);
      (0, qQ.useEffect)((() => {
        if (!WQ) return void jQ(null);
        let QQ = !0;
        return PQ.gameBridge.query("enchantingOffer", {
          slot: WQ.idx,
          name: WQ.name,
          blockName: sQ
        }).then((XQ => {
          var wQ, qQ;
          let {
            perks: TQ,
            options: zQ
          } = XQ;
          if (!QQ) return;
          const sQ = {
            isEnchantable: TQ.length > 0,
            possibleEnchantments: TQ,
            options: zQ.map((QQ => {
              let {
                level: WQ,
                odds: XQ
              } = QQ;
              return {
                level: WQ,
                possibilities: Object.fromEntries(XQ.map(((QQ, WQ) => [`Tier ${WQ+1}`, QQ])))
              }
            })),
            isAlreadyEnchanted: TQ.length > 0 && void 0 !== (null === (wQ = WQ.attributes) || void 0 === wQ || null === (qQ = wQ.customAttributes) || void 0 === qQ ? void 0 : qQ.enchantmentTier)
          };
          jQ(sQ), (QQ => {
            const WQ = QQ.options.map((QQ => Object.entries(QQ.possibilities).map((QQ => {
              let [WQ, XQ] = QQ;
              return {
                str: `${WQ}: ${XQ>0?XQ<.01?XQ.toPrecision(1):XQ.toFixed(2):0}%\n`,
                style: {
                  color: HQ.kb[WQ]
                }
              }
            }))));
            yQ(WQ)
          })(sQ)
        })), () => {
          QQ = !1
        }
      }), [WQ, zQ, sQ]);
      const pQ = [];
      for (let qQ = 0; qQ < HX.b; qQ++) {
        const QQ = null === rQ || void 0 === rQ ? void 0 : rQ.options[qQ],
          wQ = !QQ || QQ.level > DQ;
        pQ.push((0, gQ.jsx)(IQ.h, {
          className: "EnchantmentButton",
          onPointerEnter: QQ ? QQ => null === XQ || void 0 === XQ ? void 0 : XQ()(!0, {
            name: "",
            desc: BQ[qQ]
          }, QQ) : void 0,
          onPointerLeave: QQ ? () => null === XQ || void 0 === XQ ? void 0 : XQ()(!1) : void 0,
          onClick: wQ ? void 0 : () => {
            PQ.gameBridge.send("enchantItem", {
              slot: WQ.idx,
              level: QQ.level,
              tablePos: zQ
            }), jQ(null)
          },
          disabled: wQ,
          children: QQ ? (0, gQ.jsxs)(gQ.Fragment, {
            children: [(0, gQ.jsxs)("h1", {
              className: "EnchantmentLevels",
              children: [(0, gQ.jsxs)("span", {
                className: "EnchantmentLevelsCost",
                children: [JQ("enchantments:cost"), ": "]
              }), " ", JQ("enchantments:levels", {
                level: QQ.level
              })]
            }), (0, gQ.jsxs)("div", {
              className: "EnchantmentPossibilities",
              children: [(0, gQ.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, gQ.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: JQ("enchantments:tier")
                }), Object.entries(QQ.possibilities).map((QQ => {
                  let [WQ, XQ] = QQ;
                  return 0 === XQ ? null : (0, gQ.jsx)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: HQ.kb[WQ]
                    },
                    children: WQ
                  }, WQ)
                }))]
              }), (0, gQ.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, gQ.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: JQ("enchantments:odds")
                }), Object.entries(QQ.possibilities).map((QQ => {
                  let [WQ, XQ] = QQ;
                  return 0 === XQ ? null : (0, gQ.jsxs)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: HQ.kb[WQ]
                    },
                    children: [XQ > 0 && XQ < .1 ? "<0.1" : XQ.toFixed(0 < XQ && XQ < .95 ? 1 : 0), "%"]
                  }, WQ)
                }))]
              })]
            })]
          }) : !1 === (null === rQ || void 0 === rQ ? void 0 : rQ.isEnchantable) ? (0, gQ.jsx)("h1", {
            className: "EnchantmentLevels",
            children: JQ("enchantments:notEnchantable")
          }) : (0, gQ.jsx)("h1", {
            className: "EnchantmentLevels",
            children: JQ("enchantments:enterItem")
          })
        }, qQ))
      }
      return (0, gQ.jsxs)("div", {
        className: "EnchantingTable",
        children: [(0, gQ.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: sQ
        }), (0, gQ.jsxs)("div", {
          className: "EnchantingTableBody",
          children: [(0, gQ.jsxs)("div", {
            className: "EnchantingTableLeft",
            children: [(0, gQ.jsx)(aX.c, {
              idx: JX.h,
              setHovered: QQ => {
                null === XQ || void 0 === XQ || XQ(JX.h)(QQ)
              },
              pointerDown: wQ,
              pointerUp: TQ,
              draggedInfo: null,
              specialItemInfo: WQ,
              variation: "Enchanting Table"
            }), rQ && rQ.possibleEnchantments.length > 0 && (0, gQ.jsxs)("div", {
              className: "PossibleEnchantments",
              children: [(0, gQ.jsx)("h2", {
                children: "Possible Perks:"
              }), rQ.possibleEnchantments.map((QQ => (0, gQ.jsxs)(qQ.Fragment, {
                children: [(0, gQ.jsxs)("div", {
                  className: "PossibleEnchantmentName",
                  children: [(0, gQ.jsx)("div", {
                    className: "PossibleEnchantmentIcon",
                    children: (0, gQ.jsx)(TX.d, {
                      itemName: `${QQ} Enchantment`,
                      amount: 1
                    })
                  }), (0, gQ.jsx)("div", {
                    className: "PossibleEnchantmentNameText",
                    children: QQ
                  })]
                }), (0, gQ.jsx)("div", {
                  className: "PossibleEnchantmentDescription",
                  children: JQ((0, dX.h)(QQ).translationKey)
                })]
              }, QQ)))]
            })]
          }), (0, gQ.jsxs)("div", {
            className: "EnchantmentOptions",
            children: [rQ && rQ.isAlreadyEnchanted && (0, gQ.jsx)("div", {
              className: "AlreadyEnchantedWarning",
              children: JQ("enchantments:alreadyEnchanted")
            }), pQ]
          })]
        })]
      })
    }
    var hX = XQ(37112);

    function iX(QQ) {
      var WQ;
      let {
        specialItemInfo: XQ,
        setSpecialItemInfo: wQ,
        setHovered: TQ,
        pointerDown: zQ,
        pointerUp: sQ
      } = QQ;
      const {
        t: FQ
      } = (0, ZQ.C)(), JQ = (0, aQ.d)("inventory", (QQ => QQ.freeSlots)), [rQ, jQ] = (0, qQ.useState)(null);
      (0, qQ.useEffect)((() => {
        if (XQ) {
          const QQ = (0, hX.b)(XQ.name, XQ.amount);
          jQ({
            salvageable: !!QQ,
            produces: QQ
          })
        } else jQ(null)
      }), [XQ, null === XQ || void 0 === XQ ? void 0 : XQ.name, null === XQ || void 0 === XQ ? void 0 : XQ.amount]);
      const BQ = !!XQ && !(null === rQ || void 0 === rQ || !rQ.salvageable) && !(null !== (WQ = rQ.produces) && void 0 !== WQ && WQ.some((QQ => {
        let {
          amt: WQ
        } = QQ;
        return WQ < 1
      })));
      return (0, gQ.jsxs)("div", {
        className: "SalvagingTable",
        children: [(0, gQ.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: FQ("item:salvagingTable")
        }), (0, gQ.jsxs)("div", {
          className: "SalvagingTableBody",
          children: [(0, gQ.jsx)("div", {
            className: "SalvagingTableLeft",
            children: (0, gQ.jsx)(aX.c, {
              idx: JX.h,
              setHovered: QQ => {
                null === TQ || void 0 === TQ || TQ(JX.h)(QQ)
              },
              pointerDown: zQ,
              pointerUp: sQ,
              draggedInfo: null,
              specialItemInfo: XQ,
              variation: "Salvaging Table"
            })
          }), (0, gQ.jsx)("div", {
            className: "SalvagingTableRight",
            children: (0, gQ.jsx)(IQ.h, {
              className: "SalvageButton",
              onClick: BQ ? () => {
                const {
                  idx: QQ,
                  name: WQ,
                  amount: qQ
                } = XQ;
                PQ.gameBridge.send("salvageItem", {
                  slot: QQ,
                  name: WQ,
                  amount: qQ
                }) && (jQ(null), wQ(null))
              } : void 0,
              disabled: !BQ,
              children: rQ ? rQ.salvageable ? rQ.produces.some((QQ => {
                let {
                  amt: WQ
                } = QQ;
                return WQ < 1
              })) ? (0, gQ.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, gQ.jsx)("div", {
                  className: "SalvageText Error",
                  children: FQ("salvagingTable:notEnoughResources")
                })
              }) : JQ < rQ.produces.length ? (0, gQ.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, gQ.jsx)("div", {
                  className: "SalvageText Error",
                  children: FQ("salvagingTable:notEnoughInventorySpace")
                })
              }) : (0, gQ.jsxs)("div", {
                className: "SalvageButtonText",
                children: [(0, gQ.jsx)("div", {
                  className: "SalvageText",
                  children: FQ("salvagingTable:salvage")
                }), (0, gQ.jsx)("div", {
                  className: "SalvageIcons",
                  children: rQ.produces.map(((QQ, WQ) => {
                    let {
                      item: XQ,
                      amt: wQ
                    } = QQ;
                    return (0, gQ.jsx)("div", {
                      className: "SalvageIcon",
                      children: (0, gQ.jsx)(TX.d, {
                        itemName: XQ,
                        amount: Math.floor(wQ)
                      })
                    }, WQ)
                  }))
                })]
              }) : (0, gQ.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, gQ.jsx)("div", {
                  className: "SalvageText Error",
                  children: FQ("salvagingTable:unsalvageable")
                })
              }) : (0, gQ.jsx)(gQ.Fragment, {})
            })
          })]
        })]
      })
    }
    var cX = XQ(243),
      AX = XQ(9580),
      RX = XQ(2861),
      EX = XQ(1739),
      CX = XQ(9079),
      uX = XQ(9071),
      LX = XQ(1728),
      kX = XQ(2071),
      fX = XQ(1468),
      SX = XQ(2149);

    function tX(QQ, WQ, XQ) {
      const wQ = QQ.trim().toLowerCase();
      if ("" === wQ) return 0;
      let qQ = null;
      for (const TQ of WQ) {
        const QQ = TQ.toLowerCase().indexOf(wQ);
        if (0 === QQ) return 0;
        QQ > 0 && (qQ = 1)
      }
      if (null !== qQ) return qQ;
      for (const TQ of XQ)
        if (TQ.toLowerCase().includes(wQ)) return 2;
      return null
    }

    function oX(QQ) {
      return QQ.map((QQ => {
        var WQ;
        return QQ ? {
          name: QQ.name,
          amount: null !== (WQ = QQ.amount) && void 0 !== WQ ? WQ : 1
        } : null
      }))
    }

    function eX(QQ) {
      return QQ < 1e3 ? `${QQ}` : QQ < 1e4 ? Math.floor(QQ / 100) / 10 + "k" : `${Math.floor(QQ/1e3)}k`
    }
    var nX = XQ(37114);
    const xX = IQ.h,
      YX = {
        initialDelayMs: 400,
        intervalMs: 100
      },
      NX = () => {
        const QQ = (0, fX.f)();
        return QQ ? QQ.getPadRepeatTiming(YX) : YX
      };

    function ZX(QQ, WQ, XQ) {
      var wQ, qQ;
      const TQ = (0, PX.v)(WQ, QQ);
      let zQ = null === (wQ = WQ[QQ]) || void 0 === wQ ? void 0 : wQ.description;
      if (XQ && (null === (qQ = (0, nX.e)().get(QQ)) || void 0 === qQ || !qQ.hideIngredients)) {
        zQ ? (zQ = (0, HQ.nb)(zQ), zQ.push({
          str: "\n"
        })) : zQ = [], zQ.push({
          str: "\n"
        }), zQ.push({
          str: "Can be crafted from:\n"
        });
        for (const QQ of XQ) "string" === typeof QQ && (zQ.push({
          icon: QQ,
          style: {
            fontSize: "1.5em"
          }
        }), zQ.push({
          str: " "
        }), zQ.push(...(0, HQ.nb)((0, PX.v)(WQ, QQ))), zQ.push({
          str: "\n"
        }))
      }
      return {
        name: TQ,
        desc: zQ
      }
    }

    function OX(QQ) {
      let {
        name: WQ,
        Ug: XQ
      } = QQ;
      return `${WQ}_${XQ}`
    }

    function KX(QQ) {
      var WQ;
      let {
        onClick: XQ,
        itemName: wQ,
        recipeId: TQ,
        isSelected: zQ,
        haveIngredients: sQ,
        craftable: FQ,
        setHovered: PQ,
        padActions: JQ,
        marked: rQ,
        lock: IQ,
        itemInfo: jQ
      } = QQ;
      const BQ = (0, qQ.useRef)(null);
      return (0, CX.c)(BQ, {
        press: QQ => !sQ || "secondary" === QQ && !FQ ? (JQ.refuse(), !1) : "primary" === QQ ? (JQ.choose(), !0) : JQ.craft(),
        release: JQ.stopCraft,
        hints: {
          primary: "inventoryChooseRecipe",
          secondary: "inventoryCraft"
        }
      }), (0, gQ.jsxs)("div", {
        ref: BQ,
        className: pX()("InvenItem", {
          CraftableItemNotEnoughIngredients: !sQ && !IQ,
          CraftableItemMarked: rQ,
          CraftableItemLocked: void 0 !== IQ,
          CraftableItemLockedFar: (null !== (WQ = null === IQ || void 0 === IQ ? void 0 : IQ.stepsAway) && void 0 !== WQ ? WQ : 1) > 1
        }),
        "data-recipe-key": TQ,
        "data-pad-inventory-default": zQ ? "" : void 0,
        onClick: XQ,
        style: {
          cursor: zQ ? null : "pointer"
        },
        onPointerEnter: QQ => {
          null === PQ || void 0 === PQ || PQ(!0, ZX(wQ, jQ)), !zQ && (0, LX.t)(QQ.nativeEvent) && (0, uX.k)() && XQ()
        },
        onPointerLeave: () => {
          null === PQ || void 0 === PQ || PQ(!1)
        },
        children: [(0, gQ.jsx)(TX.d, {
          itemName: wQ,
          amount: 1
        }), rQ && (0, gQ.jsx)("span", {
          className: "CraftableItemMarkBadge",
          "aria-hidden": "true",
          children: "!"
        }), IQ && (0, gQ.jsxs)("span", {
          className: "CraftableItemLockTag",
          children: [(0, gQ.jsx)(yQ.d, {
            name: "lock"
          }), (0, gQ.jsx)(vQ.e, {
            text: IQ.tag
          })]
        })]
      })
    }

    function mX(QQ) {
      let {
        idx: WQ,
        status: XQ,
        shownItem: wQ,
        dim: TQ,
        onHoverStart: zQ,
        onHoverEnd: sQ,
        onPadBack: FQ
      } = QQ;
      const PQ = (0, qQ.useRef)(null);
      (0, CX.c)(PQ, {
        press: () => !1,
        back: FQ,
        hints: {
          back: "inventoryBackToRecipes"
        }
      });
      const JQ = XQ.need > 0 ? Math.min(XQ.have / XQ.need, 1) : 1;
      return (0, gQ.jsxs)("div", {
        ref: PQ,
        className: pX()("CupTile", {
          Short: XQ.missing > 0
        }),
        style: {
          width: TQ,
          height: TQ
        },
        "data-craft-ingredient": WQ,
        onPointerEnter: zQ,
        onPointerLeave: sQ,
        children: [(0, gQ.jsx)("div", {
          className: "CupFill",
          style: {
            transform: `scaleY(${JQ})`
          }
        }), (0, gQ.jsx)(TX.d, {
          itemName: wQ,
          amount: 0
        }), (0, gQ.jsxs)("div", {
          className: "CupCount SmallTextBold",
          children: [eX(XQ.have), "/", eX(XQ.need)]
        })]
      })
    }

    function MX(QQ) {
      var WQ, XQ, wQ, TQ, zQ;
      let {
        show: sQ,
        recipeItem: {
          name: FQ,
          Ug: JQ,
          requires: rQ,
          produces: IQ,
          haveIngredients: jQ
        },
        detail: BQ,
        onCraft: yQ,
        setHovered: VQ,
        craftButtonRef: DQ,
        onPadBack: pQ,
        showPadShortcut: GQ,
        refusedCount: UQ,
        lock: bQ,
        itemInfo: dQ
      } = QQ;
      const {
        t: HQ
      } = (0, ZQ.C)(), aQ = null !== BQ && !BQ.roomForOne, lQ = null !== (WQ = null === BQ || void 0 === BQ ? void 0 : BQ.craftAllTimes) && void 0 !== WQ ? WQ : 0, hQ = function(QQ, WQ) {
        return QQ.map((QQ => {
          let {
            items: XQ,
            amt: wQ
          } = QQ, qQ = 0;
          const TQ = [];
          for (const zQ of XQ) {
            const QQ = WQ(zQ);
            qQ += QQ, QQ > 0 && TQ.push(zQ)
          }
          return 0 === TQ.length && TQ.push(XQ[0]), {
            shownItems: TQ,
            need: wQ,
            have: qQ,
            missing: Math.max(wQ - qQ, 0)
          }
        }))
      }(rQ, (QQ => {
        var WQ;
        return null !== (WQ = null === BQ || void 0 === BQ ? void 0 : BQ.amounts[QQ]) && void 0 !== WQ ? WQ : 0
      }));
      let iQ = "4rem",
        cQ = 4;
      3 === rQ.length || 4 === rQ.length ? iQ = "3.75rem" : rQ.length >= 5 && (iQ = "3rem"), 4 === rQ.length ? cQ = 2 : rQ.length <= 6 && (cQ = 3);
      const AQ = `calc(${cQ} * ${iQ} + ${cQ-1} * 0.4rem + 1px)`,
        RQ = (0, qQ.useRef)(null),
        EQ = (0, qQ.useRef)(null);
      (0, qQ.useLayoutEffect)((() => {
        RQ.current.scrollTop = 0
      }), [FQ, JQ]);
      const CQ = (0, qQ.useRef)(UQ);
      (0, qQ.useEffect)((() => {
        if (UQ === CQ.current) return;
        CQ.current = UQ;
        const QQ = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? [{
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
        for (const wQ of null !== (WQ = null === (XQ = RQ.current) || void 0 === XQ ? void 0 : XQ.querySelectorAll(".CupTile.Short, .CantCraftInfo")) && void 0 !== WQ ? WQ : []) {
          var WQ, XQ;
          wQ.animate(QQ, {
            duration: 280,
            easing: "ease-out"
          })
        }
      }), [UQ]);
      const uQ = (QQ, WQ, XQ) => {
          var wQ;
          if ((0, nX.e)().has(FQ)) return void(XQ && clearInterval(LQ.current));
          const qQ = null !== (wQ = null === BQ || void 0 === BQ ? void 0 : BQ.resultStackable) && void 0 !== wQ && wQ,
            TQ = oX(PQ.gameBridge.latest("inventory").player),
            {
              bg: zQ,
              QF: sQ,
              amountAddedToSlot: gQ
            } = PQ.gameBridge.send("craftRecipe", {
              name: FQ,
              Ug: JQ,
              times: WQ || QQ && qQ ? null : 1
            });
          if (zQ > 0) {
            const WQ = [],
              wQ = new Set(rQ.flatMap((QQ => {
                let {
                  items: WQ
                } = QQ;
                return WQ
              }))),
              zQ = function(QQ, WQ, XQ) {
                const wQ = [];
                for (let qQ = 0; qQ < QQ.length; qQ++) {
                  const TQ = QQ[qQ];
                  if (!TQ || !XQ.has(TQ.name)) continue;
                  const zQ = WQ[qQ],
                    sQ = (null === zQ || void 0 === zQ ? void 0 : zQ.name) === TQ.name ? zQ.amount : 0;
                  sQ < TQ.amount && wQ.push({
                    idx: qQ,
                    itemName: TQ.name,
                    amount: TQ.amount - sQ
                  })
                }
                return wQ
              }(TQ, oX(PQ.gameBridge.latest("inventory").player), wQ).slice(0, 12),
              JQ = XQ ? 0 : Math.min(50, 400 / zQ.length),
              jQ = XQ ? 220 : 320;
            for (const QQ of zQ) {
              var IQ;
              const XQ = rQ.findIndex((WQ => {
                  let {
                    items: XQ
                  } = WQ;
                  return XQ.includes(QQ.itemName)
                })),
                wQ = null === (IQ = RQ.current) || void 0 === IQ ? void 0 : IQ.querySelector(`[data-craft-ingredient="${XQ}"]`),
                qQ = (0, PX.g)(QQ.idx);
              wQ && qQ && WQ.push({
                kind: "ingredient",
                itemName: QQ.itemName,
                amount: QQ.amount,
                QF: QQ.idx,
                from: qQ,
                to: (0, PX.g)(wQ),
                delayMs: Math.round(WQ.length * JQ),
                durationMs: jQ
              })
            }
            let BQ;
            if (null !== sQ && gQ > 0 && EQ.current) {
              const QQ = WQ.length > 0 ? WQ[WQ.length - 1].delayMs + .6 * jQ : 0;
              BQ = {
                itemName: FQ,
                amount: gQ,
                QF: sQ,
                from: (0, PX.g)(EQ.current),
                delayMs: Math.round(QQ)
              }
            }
            yQ(BQ, QQ && !qQ ? sQ : null, WQ), sX.b.play("wood1", .5).rate(1.75)
          }
        },
        LQ = (0, qQ.useRef)(null);
      (0, qQ.useEffect)((() => () => {
        clearInterval(LQ.current)
      }), []);
      const kQ = (QQ, WQ) => {
          uQ(QQ, !1, !1), clearInterval(LQ.current), WQ && (LQ.current = setTimeout((() => {
            LQ.current = setInterval((() => {
              uQ(QQ, !1, !0)
            }), WQ.intervalMs)
          }), WQ.initialDelayMs))
        },
        fQ = () => {
          clearInterval(LQ.current)
        },
        SQ = !jQ || aQ || Boolean(bQ),
        tQ = (0, qQ.useRef)(null),
        oQ = null !== (XQ = null === (wQ = (0, SX.c)()) || void 0 === wQ ? void 0 : wQ.hideButtonHints) && void 0 !== XQ && XQ,
        eQ = null !== (TQ = null === (zQ = (0, fX.f)()) || void 0 === zQ ? void 0 : zQ.getBoundButton("inventorySecondary")) && void 0 !== TQ ? TQ : null,
        nQ = () => !SQ && (uQ(!1, !0, !1), !0);
      (0, CX.c)(DQ, {
        press: QQ => "secondary" === QQ ? nQ() : !SQ && (kQ(!1, NX()), !0),
        release: fQ,
        back: pQ,
        hints: {
          primary: "inventoryCraft",
          secondary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      }), (0, CX.c)(tQ, {
        press: nQ,
        back: pQ,
        hints: {
          primary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      });
      const [xQ, YQ] = (0, qQ.useState)(0), [NQ, OQ] = (0, qQ.useState)(null);
      (0, qQ.useEffect)((() => {
        if (!0 === sQ) {
          YQ(0);
          const QQ = setInterval((() => {
            YQ((QQ => QQ + 1))
          }), 1e3);
          return () => {
            clearInterval(QQ)
          }
        }
        return () => {}
      }), [sQ]);
      const KQ = null === BQ || void 0 === BQ ? void 0 : BQ.ingredientsCraftedFrom,
        mQ = (0, qQ.useRef)(VQ);
      (0, qQ.useEffect)((() => {
        mQ.current = VQ
      }), [VQ]);
      const MQ = !(null === bQ || void 0 === bQ || !bQ.hideIngredients);
      (0, qQ.useEffect)((() => {
        var QQ, WQ;
        if (!NQ) return;
        if (MQ) return OQ(null), void(null === (WQ = mQ.current) || void 0 === WQ || WQ.call(mQ, !1));
        const XQ = NQ[xQ % NQ.length];
        null === (QQ = mQ.current) || void 0 === QQ || QQ.call(mQ, !0, ZX(XQ, dQ, null === KQ || void 0 === KQ ? void 0 : KQ[XQ]))
      }), [NQ, xQ, dQ, KQ, MQ]);
      const QW = !!bQ,
        WW = (0, qQ.useRef)(!1);
      (0, qQ.useEffect)((() => {
        var QQ;
        QW && (clearInterval(LQ.current), MQ && WW.current && (WW.current = !1, null === (QQ = mQ.current) || void 0 === QQ || QQ.call(mQ, !1)))
      }), [QW, MQ]);
      const XW = (0, PX.v)(dQ, FQ);
      return (0, gQ.jsxs)("div", {
        ref: RQ,
        className: "CraftableInfo SmallTextBold",
        children: [(0, gQ.jsx)("div", {
          className: "CraftableHeader",
          children: (0, gQ.jsx)(vQ.e, {
            text: XW
          })
        }), !MQ && (0, gQ.jsx)("div", {
          className: pX()("CraftableIngredients", {
            Compact: rQ.length >= 5
          }),
          style: {
            maxWidth: AQ
          },
          children: hQ.map(((QQ, WQ) => {
            const XQ = QQ.shownItems[xQ % QQ.shownItems.length];
            return (0, gQ.jsx)(mX, {
              idx: WQ,
              status: QQ,
              shownItem: XQ,
              dim: iQ,
              onHoverStart: () => {
                OQ(QQ.shownItems)
              },
              onHoverEnd: () => {
                OQ(null), null === VQ || void 0 === VQ || VQ(!1)
              },
              onPadBack: pQ
            }, WQ)
          }))
        }), bQ && (0, gQ.jsx)("div", {
          className: "CantCraftInfo CraftableLockReason",
          children: (0, gQ.jsx)(vQ.e, {
            text: bQ.reason
          })
        }), !bQ && (!jQ || aQ) && (0, gQ.jsxs)("div", {
          className: "CantCraftInfo",
          children: [!jQ && "Missing ingredients", (0, gQ.jsx)("br", {}), aQ && "Inventory is full"]
        }), !MQ && (0, gQ.jsxs)(gQ.Fragment, {
          children: [(0, gQ.jsxs)(xX, {
            ref: DQ,
            className: "DoCraftButton",
            onPointerDown: QQ => {
              kQ((0, PX.y)(QQ), (0, LX.t)(QQ.nativeEvent) ? NX() : YX)
            },
            onPointerUp: fQ,
            onPointerLeave: fQ,
            disabled: SQ,
            children: [GQ && eQ && !SQ && !oQ && (0, gQ.jsx)(kX.c, {
              className: "CraftShortcutGlyph",
              glyph: eQ
            }), (0, gQ.jsx)("div", {
              ref: EQ,
              className: "DoCraftItem",
              onPointerEnter: () => {
                WW.current = !0, null === VQ || void 0 === VQ || VQ(!0, ZX(FQ, dQ))
              },
              onPointerLeave: () => {
                WW.current = !1, null === VQ || void 0 === VQ || VQ(!1)
              },
              children: (0, gQ.jsx)(TX.d, {
                itemName: FQ,
                amount: IQ
              })
            })]
          }), (0, gQ.jsxs)(xX, {
            ref: tQ,
            className: "DoCraftAllButton",
            onPointerDown: QQ => {
              uQ((0, PX.y)(QQ), !0, !1)
            },
            disabled: SQ,
            children: [(0, gQ.jsx)("span", {
              className: "CraftAllLabel",
              children: HQ("general:craftAll")
            }), lQ > 0 && (0, gQ.jsxs)("span", {
              className: "CraftAllCount",
              children: ["x", eX(lQ)]
            })]
          })]
        })]
      })
    }

    function Qw(QQ) {
      let {
        selectedIdx: WQ,
        hidden: XQ
      } = QQ;
      const wQ = (0, qX.A)(),
        TQ = (0, qQ.useRef)(null);
      return (0, qQ.useLayoutEffect)((() => {
        const QQ = TQ.current,
          wQ = null === QQ || void 0 === QQ ? void 0 : QQ.parentElement;
        if (!wQ || !QQ) return;
        const qQ = wQ.querySelector(".CraftableItems"),
          zQ = () => {
            var TQ, zQ;
            if (XQ) return void(QQ.style.opacity = "0");
            const sQ = null === qQ || void 0 === qQ ? void 0 : qQ.children[WQ],
              FQ = null === (TQ = null !== (zQ = null === sQ || void 0 === sQ ? void 0 : sQ.querySelector(".InvenItem")) && void 0 !== zQ ? zQ : sQ) || void 0 === TQ ? void 0 : TQ.getBoundingClientRect();
            if (!FQ || 0 === FQ.width) return void(QQ.style.opacity = "0");
            const PQ = wQ.getBoundingClientRect();
            QQ.style.opacity = "1", QQ.style.width = `${FQ.width}px`, QQ.style.height = `${FQ.height}px`, QQ.style.transform = `translate(${FQ.left-PQ.left+wQ.scrollLeft}px, ${FQ.top-PQ.top+wQ.scrollTop}px)`
          };
        zQ();
        const sQ = new MutationObserver(zQ),
          FQ = new ResizeObserver(zQ);
        return FQ.observe(wQ), qQ && (sQ.observe(qQ, {
          childList: !0,
          subtree: !0
        }), FQ.observe(qQ)), () => {
          sQ.disconnect(), FQ.disconnect()
        }
      }), [WQ, XQ]), (0, gQ.jsx)("div", {
        ref: TQ,
        className: pX()("SelectionReticle", {
          Secondary: wQ
        })
      })
    }

    function Ww(QQ, WQ, XQ) {
      return QQ ? (0, cX.e)(AX.h, QQ) ? Xw(QQ, WQ, XQ) : QQ : XQ("classicGame:handCrafting")
    }

    function Xw(QQ, WQ, XQ) {
      var wQ;
      const qQ = null === (wQ = WQ[QQ]) || void 0 === wQ ? void 0 : wQ.displayName;
      if ("string" === typeof qQ) return XQ(qQ);
      const TQ = PQ.gameBridge.latest("hiddenPlayerNames");
      return Array.isArray(qQ) ? qQ.map((QQ => {
        if ("string" === typeof QQ) return QQ;
        if ("translationKey" in QQ) return XQ(QQ.translationKey, (0, ZQ.r)(QQ.params, TQ));
        if ("str" in QQ) {
          if ("string" === typeof QQ.str) return QQ.str;
          if ("translationKey" in QQ.str) return XQ(QQ.str.translationKey, (0, ZQ.r)(QQ.str.params, TQ))
        }
        return ""
      })).join("") : qQ && "translationKey" in qQ ? XQ(qQ.translationKey, (0, ZQ.r)(qQ.params, TQ)) : QQ
    }

    function ww(QQ, WQ) {
      return QQ === WQ || null !== QQ && null !== WQ && QQ.name === WQ.name && QQ.Ug === WQ.Ug
    }

    function qw(QQ) {
      var WQ, XQ, wQ;
      let {
        show: TQ,
        onCraft: zQ,
        dispatchSelectedCraftable: sQ,
        selectedCraftable: FQ,
        craftingStation: JQ,
        setHovered: rQ
      } = QQ;
      const {
        t: IQ
      } = (0, ZQ.C)(), [jQ, BQ] = (0, qQ.useState)(""), [yQ, VQ] = (0, qQ.useState)(0);
      (0, qQ.useEffect)((() => {
        TQ || (BQ(""), VQ((QQ => QQ + 1)))
      }), [TQ]);
      const [DQ, pQ] = (0, qQ.useState)(JQ);
      DQ !== JQ && (pQ(JQ), "" !== jQ && (BQ(""), VQ((QQ => QQ + 1))));
      const GQ = (0, qQ.useRef)(null),
        UQ = (0, qQ.useRef)(null),
        bQ = (0, uX.l)(),
        vQ = bQ.showing && "recipe" === bQ.kind,
        [dQ, HQ] = (0, qQ.useState)(0),
        lQ = null !== JQ && void 0 !== JQ ? JQ : null,
        hQ = (0, qQ.useRef)(null),
        iQ = QQ => {
          return !((WQ = hQ.current) === (XQ = QQ) || null !== WQ && null !== XQ && WQ.station === XQ.station && ww(WQ.recipe, XQ.recipe)) && (hQ.current = QQ, PQ.gameBridge.send("focusCrafting", QQ), !0);
          var WQ, XQ
        };
      iQ(TQ ? {
        station: lQ,
        recipe: (null === (WQ = hQ.current) || void 0 === WQ ? void 0 : WQ.station) === lQ ? hQ.current.recipe : null
      } : null);
      let cQ = PQ.gameBridge.latest("crafting");
      const AQ = (0, aQ.e)("itemInfo"),
        RQ = "" !== jQ.trim(),
        EQ = (0, nX.C)(),
        CQ = (0, nX.A)(),
        uQ = (0, nX.D)(),
        LQ = function(QQ, WQ) {
          const [XQ, wQ] = (0, qQ.useState)(!1);
          (0, qQ.useEffect)((() => {
            if (!QQ) return void wQ(!1);
            const WQ = setTimeout((() => {
              wQ(!0)
            }), 0);
            return () => {
              clearTimeout(WQ)
            }
          }), [QQ]);
          const TQ = QQ && XQ,
            zQ = (0, qQ.useRef)({
              station: WQ,
              at: new Map
            });
          return (zQ.current.station !== WQ || !TQ && zQ.current.at.size > 0) && (zQ.current = {
            station: WQ,
            at: new Map
          }), TQ ? zQ.current.at : null
        }(TQ, JQ);
      let kQ = cQ.recipes.filter((QQ => {
        let {
          listed: WQ
        } = QQ;
        return WQ
      }));
      if (RQ) {
        const QQ = [];
        for (const WQ of cQ.recipes) {
          var fQ;
          const XQ = null !== (fQ = CQ.get(WQ.name)) && void 0 !== fQ && fQ.hideIngredients ? [] : WQ.requires.flatMap((QQ => {
              let {
                items: WQ
              } = QQ;
              return WQ.flatMap((QQ => [QQ, Xw(QQ, AQ, IQ)]))
            })),
            wQ = tX(jQ, [WQ.name, Xw(WQ.name, AQ, IQ)], XQ);
          null !== wQ && QQ.push({
            item: WQ,
            rank: wQ
          })
        }
        QQ.sort(((QQ, WQ) => QQ.rank - WQ.rank)), kQ = QQ.map((QQ => {
          let {
            item: WQ
          } = QQ;
          return WQ
        }))
      } else {
        if (LQ && LQ.size > 0) {
          const QQ = cQ.recipes.filter((QQ => !QQ.listed && LQ.has(OX(QQ))));
          kQ = kQ.concat(QQ)
        }
        kQ = (0, nX.i)(kQ, EQ, CQ, uQ), LQ && (kQ = (0, nX.f)(kQ, LQ, OX))
      }
      const SQ = QQ => kQ.find((WQ => OX(WQ) === QQ)),
        tQ = `${JQ}|${jQ}`,
        [oQ, eQ] = (0, qQ.useState)(null),
        nQ = (null === oQ || void 0 === oQ ? void 0 : oQ.context) === tQ ? oQ.key : null,
        xQ = FQ ? OX(FQ) : null,
        YQ = null !== (XQ = null !== (wQ = SQ(xQ)) && void 0 !== wQ ? wQ : SQ(nQ)) && void 0 !== XQ ? XQ : kQ[0],
        NQ = YQ ? OX(YQ) : null,
        OQ = YQ ? {
          name: YQ.name,
          Ug: YQ.Ug
        } : null;
      TQ && iQ({
        station: lQ,
        recipe: OQ
      }) && (cQ = PQ.gameBridge.latest("crafting")), NQ !== xQ && NQ !== nQ && eQ(NQ ? {
        context: tQ,
        key: NQ
      } : null), (0, qQ.useEffect)((() => () => {
        hQ.current = null, PQ.gameBridge.send("focusCrafting", null)
      }), []);
      const KQ = ww(cQ.detail, OQ) ? cQ.detail : null,
        mQ = null !== KQ && !KQ.roomForOne,
        MQ = kQ.findIndex((QQ => OX(QQ) === OX(YQ))),
        QW = () => UQ.current ? (0, CX.b)(UQ.current) : null,
        WW = (0, qQ.useRef)(null),
        XW = (0, qQ.useRef)(0);
      XW.current++;
      const wW = XW.current;
      (0, qQ.useEffect)((() => {
        const QQ = WW.current;
        if (!QQ || wW <= QQ.afterRender) return;
        if (WW.current = null, QQ.key !== NQ) return;
        const WQ = QW();
        var XQ;
        null !== WQ && void 0 !== WQ && WQ.press("primary") && !QQ.Ds && (null === (XQ = WQ.release) || void 0 === XQ || XQ.call(WQ))
      }));
      const qW = QQ => {
          const WQ = {
            name: QQ.name,
            Ug: QQ.Ug
          };
          return {
            choose: () => {
              sQ(WQ), (0, wX.n)(UQ.current)
            },
            craft: () => {
              var QQ, XQ;
              return sQ(WQ), OX(WQ) !== OX(YQ) ? (WW.current = {
                key: OX(WQ),
                Ds: !0,
                afterRender: XW.current
              }, !0) : null !== (QQ = null === (XQ = QW()) || void 0 === XQ ? void 0 : XQ.press("primary")) && void 0 !== QQ && QQ
            },
            stopCraft: () => {
              var QQ, WQ;
              WW.current ? WW.current.Ds = !1 : null === (QQ = QW()) || void 0 === QQ || null === (WQ = QQ.release) || void 0 === WQ || WQ.call(QQ)
            },
            refuse: () => {
              OX(WQ) !== OX(YQ) && sQ(WQ), HQ((QQ => QQ + 1))
            }
          }
        },
        TW = () => {
          var QQ, WQ, XQ;
          (0, wX.n)(null !== (QQ = null === (WQ = GQ.current) || void 0 === WQ || null === (XQ = WQ.querySelector(".CraftableItems")) || void 0 === XQ ? void 0 : XQ.children[MQ]) && void 0 !== QQ ? QQ : null)
        },
        zW = kQ.map(OX).join("|"),
        sW = (0, qQ.useRef)(zW);
      return (0, qQ.useEffect)((() => {
        sW.current !== zW && (sW.current = zW, vQ && MQ >= 0 && (0, uX.k)() && TW())
      })), (0, gQ.jsxs)("div", {
        className: "Craftables",
        children: [(0, gQ.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: Ww(JQ, AQ, IQ)
        }), (0, gQ.jsxs)("div", {
          className: "CraftablesBody",
          children: [(0, gQ.jsx)(EX.e, {
            className: "CraftingSearch",
            placeholderText: IQ("general:searchRecipes"),
            defaultValue: jQ,
            maxLength: 100,
            onValueChange: QQ => {
              BQ(QQ)
            },
            blurOnEnter: !0
          }, yQ), 0 === kQ.length && RQ && (0, gQ.jsx)("div", {
            className: "CraftingNoMatches SmallTextBold",
            children: IQ("general:noRecipesMatchSearch")
          }), kQ.length > 0 && (0, gQ.jsxs)(gQ.Fragment, {
            children: [(0, gQ.jsxs)("div", {
              ref: GQ,
              className: "CraftablesLeftSide",
              children: [(0, gQ.jsx)(RX.c, {
                lazyLoadedClassName: "CraftableItems",
                observerUpdateDeps: [JSON.stringify(kQ.map((QQ => {
                  let {
                    name: WQ,
                    Ug: XQ,
                    haveIngredients: wQ
                  } = QQ;
                  return {
                    name: WQ,
                    Ug: XQ,
                    haveIngredients: wQ
                  }
                })))],
                observing: TQ,
                children: kQ.map((QQ => {
                  const {
                    name: WQ,
                    Ug: XQ,
                    haveIngredients: wQ
                  } = QQ, qQ = OX(QQ);
                  return (0, gQ.jsx)(KX, {
                    recipeId: qQ,
                    itemName: WQ,
                    onClick: () => {
                      sQ({
                        name: WQ,
                        Ug: XQ
                      })
                    },
                    isSelected: OX(YQ) === qQ,
                    haveIngredients: wQ,
                    craftable: wQ && !CQ.has(WQ) && !(OX(YQ) === qQ && mQ),
                    setHovered: rQ,
                    padActions: qW(QQ),
                    marked: EQ.has(WQ),
                    lock: CQ.get(WQ),
                    itemInfo: AQ
                  }, qQ)
                }))
              }), (0, gQ.jsx)(Qw, {
                selectedIdx: MQ,
                hidden: vQ && bQ.steppingSlots
              })]
            }), (0, gQ.jsx)(MX, {
              show: TQ,
              recipeItem: YQ,
              detail: KQ,
              onCraft: zQ,
              setHovered: rQ,
              craftButtonRef: UQ,
              onPadBack: TW,
              showPadShortcut: vQ,
              refusedCount: dQ,
              lock: CQ.get(YQ.name),
              itemInfo: AQ
            })]
          })]
        })]
      })
    }
    var Tw = XQ(34529),
      zw = XQ(3555),
      sw = XQ(2178),
      Fw = XQ(9056);
    class Pw {
      constructor(QQ, WQ, XQ) {
        this.commit = QQ, this.delayMs = WQ, this.defers = XQ, this.pending = null, this.timer = void 0, this.Ds = !1, this.flush = () => {
          clearTimeout(this.timer);
          const QQ = this.pending;
          null !== QQ && (this.pending = null, this.commit(QQ))
        }
      }
      type(QQ) {
        this.pending = QQ, clearTimeout(this.timer), this.Ds || this.defers() ? this.Ds || (this.timer = setTimeout(this.flush, this.delayMs)) : this.flush()
      }
      getTyped(QQ) {
        var WQ;
        return null !== (WQ = this.pending) && void 0 !== WQ ? WQ : QQ
      }
      isHeld() {
        return this.Ds
      }
      setHeld(QQ) {
        this.Ds = QQ, QQ || this.flush()
      }
    }

    function gw(QQ) {
      return null === QQ ? "creativeInventory:all" : `creativeInventory:${QQ}`
    }

    function Jw(QQ) {
      let {
        category: WQ
      } = QQ;
      return null === WQ ? (0, gQ.jsx)(yQ.d, {
        name: "layer-group"
      }) : (0, gQ.jsx)(TX.d, {
        itemName: Tw.creativeItemCategoryIcons[WQ],
        amount: 0
      })
    }

    function rw(QQ) {
      let {
        labelKey: WQ,
        isSelected: XQ,
        onSelect: wQ,
        setHovered: qQ,
        children: TQ
      } = QQ;
      return (0, gQ.jsx)("div", {
        className: pX()("CreativeCategoryTab", {
          Selected: XQ
        }),
        onClick: wQ,
        onPointerEnter: QQ => {
          (0, PX.t)(QQ) || qQ(!0, {
            name: {
              translationKey: WQ
            },
            desc: ""
          })
        },
        onPointerLeave: () => {
          qQ(!1)
        },
        children: TQ
      })
    }

    function Iw(QQ) {
      let {
        categories: WQ,
        selectedCategory: XQ,
        onSelect: wQ
      } = QQ;
      const {
        t: TQ
      } = (0, ZQ.C)(), [zQ, sQ] = (0, qQ.useState)(!1), FQ = (0, qQ.useRef)(null), PQ = (0, qQ.useCallback)((() => {
        sQ(!1)
      }), []);
      return (0, sw.d)(FQ, PQ), (0, gQ.jsxs)("div", {
        className: "CreativeCategoryDropdown",
        ref: FQ,
        children: [(0, gQ.jsxs)("div", {
          className: "CreativeCategoryDropdownButton",
          onClick: () => {
            sQ(!zQ)
          },
          children: [(0, gQ.jsx)("div", {
            className: "CreativeCategoryIcon",
            children: (0, gQ.jsx)(Jw, {
              category: XQ
            })
          }), (0, gQ.jsx)("span", {
            children: TQ(gw(XQ))
          }), (0, gQ.jsx)(yQ.d, {
            name: zQ ? "caret-up" : "caret-down"
          })]
        }), zQ && (0, gQ.jsx)("div", {
          className: "CreativeCategoryDropdownMenu",
          children: WQ.map((QQ => (0, gQ.jsxs)("div", {
            className: pX()("CreativeCategoryDropdownOption", {
              Selected: XQ === QQ
            }),
            onClick: () => {
              wQ(QQ), sQ(!1)
            },
            children: [(0, gQ.jsx)("div", {
              className: "CreativeCategoryIcon",
              children: (0, gQ.jsx)(Jw, {
                category: QQ
              })
            }), (0, gQ.jsx)("span", {
              children: TQ(gw(QQ))
            })]
          }, null !== QQ && void 0 !== QQ ? QQ : "all")))
        })]
      })
    }
    const jw = (0, qQ.memo)((function(QQ) {
      let {
        creativeScrollDiv: WQ,
        playerInvenNumSlots: XQ,
        getSetHoveringForIdx: wQ,
        getPointerDownForIdx: TQ,
        getPointerUpForIdx: zQ,
        creativeSearchVal: sQ,
        setCreativeSearchVal: PQ,
        creativeCategory: JQ,
        setCreativeCategory: rQ,
        show: IQ
      } = QQ;
      const {
        t: jQ
      } = (0, ZQ.C)(), BQ = (0, aQ.e)("creativeVisibility"), {
        userContext: VQ
      } = (0, bQ.c)(), DQ = (0, FQ.g)("canUseDevCreativeItems"), pQ = VQ.playerHasRank("developer") || !!DQ, GQ = (0, qQ.useMemo)((() => yw("", BQ, pQ)), [BQ, pQ]), UQ = (0, qQ.useMemo)((() => {
        const QQ = (0, Tw.creativeItemIds)(),
          WQ = new Set(GQ.map((WQ => (0, Tw.creativeCategoryOf)(QQ[WQ]))));
        return Tw.creativeItemCategories.filter((QQ => WQ.has(QQ)))
      }), [GQ]), vQ = null !== JQ && UQ.includes(JQ) ? JQ : null, HQ = (0, qQ.useMemo)((() => "" === sQ ? GQ : yw(sQ, BQ, pQ)), [GQ, sQ, BQ, pQ]), lQ = (0, qQ.useMemo)((() => {
        const QQ = (0, Tw.creativeItemIds)();
        return null !== vQ ? HQ.filter((WQ => (0, Tw.creativeCategoryOf)(QQ[WQ]) === vQ)) : "" === sQ ? HQ.filter((WQ => !(0, Tw.showOnlyInCreativeCategory)(QQ[WQ]))) : HQ
      }), [HQ, vQ, sQ]), hQ = wQ();

      function iQ(QQ) {
        rQ(QQ), WQ.current.scrollTop = 0
      }
      const cQ = [null, ...UQ],
        {
          isTouchScreen: AQ
        } = (0, fQ.n)(["isTouchScreen"]),
        RQ = !AQ,
        EQ = (0, qQ.useRef)(null),
        [CQ, uQ] = (0, qQ.useState)(0);
      (0, qQ.useEffect)((() => {
        const QQ = EQ.current;
        if (!QQ) return;
        const WQ = new ResizeObserver((QQ => {
          uQ(QQ[0].contentRect.height)
        }));
        return WQ.observe(QQ), () => {
          WQ.disconnect()
        }
      }), [RQ]);
      const LQ = (0, qQ.useRef)(null),
        kQ = (0, qQ.useCallback)((function QQ() {
          "up" === LQ.current ? WQ.current.scrollTop -= 10 : "down" === LQ.current && (WQ.current.scrollTop += 10), LQ.current && requestAnimationFrame(QQ)
        }), [WQ]),
        SQ = (0, qQ.useCallback)((function(QQ) {
          LQ.current || (LQ.current = QQ, kQ())
        }), [kQ]);

      function tQ() {
        LQ.current = null
      }
      const oQ = (0, qQ.useRef)({
        creativeSearchVal: sQ,
        setCreativeSearchVal: PQ
      });
      oQ.current = {
        creativeSearchVal: sQ,
        setCreativeSearchVal: PQ
      };
      const [eQ] = (0, qQ.useState)((() => new Pw((QQ => {
        oQ.current.setCreativeSearchVal(QQ)
      }), 250, qX.l))), nQ = QQ => {
        var XQ;
        null === (XQ = WQ.current) || void 0 === XQ || XQ.classList.toggle("CreativeItemSlotsStale", QQ)
      };
      (0, dQ.f)(Fw.b, (QQ => {
        eQ.setHeld(QQ), QQ || nQ(!1)
      })), (0, qQ.useEffect)((() => eQ.flush), [eQ]);
      const xQ = (0, gQ.jsx)(EX.e, {
          className: "CreativeItemSlotsSearch",
          placeholderText: "Search",
          defaultValue: sQ,
          maxLength: 1e4,
          onValueChange: (QQ, WQ) => {
            "" === eQ.getTyped(oQ.current.creativeSearchVal) && "" !== QQ && rQ(null), eQ.type(QQ), nQ(eQ.isHeld())
          },
          onEnter: eQ.flush,
          blurOnEnter: !0
        }),
        YQ = (0, gQ.jsxs)("div", {
          className: "CreateItemSlotsScrollable",
          children: [AQ && (0, gQ.jsxs)("div", {
            className: "CreativeScrollButtons",
            children: [(0, gQ.jsx)("div", {
              className: "CreativeScrollButton Up",
              onPointerDown: () => {
                SQ("up")
              },
              onPointerLeave: tQ,
              onPointerUp: tQ,
              children: (0, gQ.jsx)(yQ.d, {
                name: "arrow-up"
              })
            }), (0, gQ.jsx)("div", {
              className: "CreativeScrollButton Down",
              onPointerDown: () => {
                SQ("down")
              },
              onPointerLeave: tQ,
              onPointerUp: tQ,
              children: (0, gQ.jsx)(yQ.d, {
                name: "arrow-up"
              })
            })]
          }), (0, gQ.jsxs)("div", {
            className: "CreativeItemSlots",
            ref: WQ,
            children: [0 === lQ.length && "" !== sQ && (0, gQ.jsx)("div", {
              className: "CreativeItemSlotsEmpty",
              children: jQ("general:noResults")
            }), (0, gQ.jsx)(RX.c, {
              lazyLoadedClassName: "CreativeItemSlotsInner",
              observerUpdateDeps: [sQ, vQ],
              observerRoot: "CreativeItemSlots",
              observing: IQ,
              children: lQ.map((QQ => {
                const WQ = XQ + QQ;
                return (0, gQ.jsx)(aX.c, {
                  idx: WQ,
                  draggedInfo: null,
                  specialItemInfo: null,
                  setHovered: wQ(WQ),
                  pointerDown: TQ(WQ),
                  pointerUp: zQ(WQ)
                }, WQ)
              }))
            })]
          })]
        });
      return (0, gQ.jsxs)("div", {
        className: pX()("CreativeItemSlotsWrapper", RQ ? "WithRail" : "WithDropdown"),
        children: [RQ && (0, gQ.jsx)("div", {
          className: "CreativeCategoryRail",
          ref: EQ,
          style: {
            "--rail-height": CQ > 0 ? `${CQ}px` : void 0,
            "--tab-rows": Math.ceil(cQ.length / 2)
          },
          children: cQ.map((QQ => (0, gQ.jsx)(rw, {
            labelKey: gw(QQ),
            isSelected: vQ === QQ,
            onSelect: () => {
              iQ(QQ)
            },
            setHovered: hQ,
            children: (0, gQ.jsx)(Jw, {
              category: QQ
            })
          }, null !== QQ && void 0 !== QQ ? QQ : "all")))
        }), (0, gQ.jsxs)("div", {
          className: "CreativeItemSlotsMain",
          children: [(0, gQ.jsxs)("div", {
            className: "CreativeItemSlotsSearchRow",
            children: [xQ, !RQ && (0, gQ.jsx)(Iw, {
              categories: cQ,
              selectedCategory: vQ,
              onSelect: iQ
            })]
          }), YQ]
        })]
      })
    }));

    function Bw(QQ) {
      var WQ;
      return null !== (WQ = (0, zw.e)(QQ)) && void 0 !== WQ ? WQ : ""
    }

    function yw(QQ, WQ, XQ) {
      let {
        publicLobby: wQ,
        shownInGame: qQ
      } = WQ;
      const TQ = QQ.toLowerCase(),
        zQ = (0, Tw.creativeItemIds)(),
        sQ = QQ => {
          var WQ;
          const TQ = zQ[QQ];
          return !(0, Tw.itemIsDisabled)(TQ, wQ, null === (WQ = qQ[Bw(TQ)]) || void 0 === WQ || WQ, XQ)
        };
      if ("" === TQ) return zQ.map(((QQ, WQ) => WQ)).filter((QQ => !(0, Tw.showOnlyInCreativeSearch)(zQ[QQ]))).filter(sQ);
      const FQ = [];
      for (let PQ = 0; PQ < zQ.length; PQ++) Bw(zQ[PQ]).toLowerCase().includes(TQ) && FQ.push(PQ);
      FQ.sort(((QQ, WQ) => {
        const XQ = Bw(zQ[QQ]).toLowerCase(),
          wQ = Bw(zQ[WQ]).toLowerCase();
        return XQ.indexOf(TQ) - wQ.indexOf(TQ)
      }));
      for (const [PQ, gQ] of(0, Tw.creativeAltNames)())
        for (const QQ of gQ)
          if (QQ.toLowerCase().includes(TQ)) {
            const QQ = zQ.indexOf(PQ);
            FQ.includes(QQ) || FQ.push(QQ)
          } return FQ.filter(sQ)
    }
    var Vw = XQ(37131),
      Dw = XQ(663);

    function pw(QQ) {
      return QQ > Dw.g
    }

    function Gw(QQ) {
      const WQ = QQ / 2,
        XQ = [];
      for (let wQ = 0; wQ < WQ / 6; wQ++)
        for (let QQ = 0; QQ < 12; QQ++) {
          const qQ = QQ < 6 ? 0 : WQ;
          XQ.push(qQ + 6 * wQ + QQ % 6)
        }
      return XQ
    }

    function Uw(QQ) {
      let {
        numSlots: WQ,
        renderSlot: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, ZQ.C)(), TQ = (0, qQ.useRef)(null);
      var zQ;
      return zQ = TQ, (0, qQ.useLayoutEffect)((() => {
        var QQ;
        const WQ = null === (QQ = zQ.current) || void 0 === QQ ? void 0 : QQ.closest(".InvenBody");
        if (!WQ) return;
        const XQ = () => {
          WQ.style.zoom = "";
          const QQ = parseFloat(getComputedStyle(document.documentElement).fontSize),
            XQ = window.innerWidth - 2 * QQ,
            wQ = WQ.getBoundingClientRect().width;
          wQ > XQ && (WQ.style.zoom = "" + XQ / wQ)
        };
        return XQ(), window.addEventListener("resize", XQ), () => {
          window.removeEventListener("resize", XQ), WQ.style.zoom = ""
        }
      }), [zQ]), (0, gQ.jsxs)("div", {
        ref: TQ,
        className: "ChestItemSlots DoubleChestSlots",
        children: [(0, gQ.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: wQ("doubleChest:title")
        }), (0, gQ.jsx)("div", {
          className: "GridItemSlots",
          children: Gw(WQ).map((QQ => XQ(QQ)))
        })]
      })
    }

    function bw(QQ) {
      let {
        Sq: WQ,
        initialPasskey: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, ZQ.C)(), [TQ, zQ] = (0, qQ.useState)(XQ), [sQ, FQ] = (0, qQ.useState)(XQ);
      (0, qQ.useEffect)((() => {
        zQ(XQ), FQ(XQ)
      }), [...WQ]);
      return (0, gQ.jsxs)("div", {
        className: "IronChestPasskeyEditorWrapper",
        children: [(0, gQ.jsx)("div", {
          className: "SmallTextBold",
          children: wQ("ironChest:currentPasskey", {
            currentPasskey: TQ.join("")
          })
        }), (0, gQ.jsx)(bX, {
          className: "IronChestPasskeyEditor",
          ys: sQ,
          onPasskeyUpdated: FQ,
          confirmText: "ironChest:changePasskey",
          onConfirm: () => {
            PQ.gameBridge.send("changeIronChestPasskey", {
              pos: [...WQ],
              ys: [...sQ]
            }), zQ([...sQ])
          }
        })]
      })
    }

    function vw(QQ, WQ) {
      return "Iron" === QQ.type && QQ.ironChest.ownerDbId === WQ
    }

    function dw(QQ) {
      let {
        variation: WQ,
        canCraft: XQ,
        show: wQ,
        creativeMounted: qQ,
        specialItemRef: TQ,
        draggedInfo: zQ,
        getSetHovering: sQ,
        getPointerDownForIdx: FQ,
        getPointerUpForIdx: PQ,
        enchantingTablePosition: JQ,
        enchantingTableBlockName: rQ,
        selectedCraftable: IQ,
        dispatchSelectedCraftable: jQ,
        creativeScrollDiv: BQ,
        creativeSearchVal: yQ,
        setCreativeSearchVal: VQ,
        creativeCategory: DQ,
        setCreativeCategory: pQ,
        onCraft: GQ
      } = QQ;
      const {
        userContext: UQ
      } = (0, bQ.c)(), {
        t: vQ
      } = (0, ZQ.C)(), dQ = (0, aQ.d)("inventory", (QQ => QQ.chest)), HQ = (0, aQ.d)("inventory", (QQ => QQ.player.length)), lQ = (0, aQ.d)("inventory", (QQ => QQ.creative));
      if (0 === HQ) return null;
      let hQ, iQ;
      const cQ = QQ => {
          const WQ = HQ + QQ;
          return (0, gQ.jsx)(aX.c, {
            idx: WQ,
            draggedInfo: zQ,
            specialItemInfo: TQ.current,
            setHovered: sQ(WQ),
            pointerDown: FQ(WQ),
            pointerUp: PQ(WQ)
          }, WQ)
        },
        AQ = dQ ? (0, Vw.d)(dQ.type) : null;
      if (AQ) hQ = pX()("InvenLeftSideChestCustom", AQ.className), iQ = (0, gQ.jsx)("div", {
        className: "ChestItemSlotsWrapper",
        children: AQ.render({
          Sq: dQ.pos,
          renderSlot: cQ
        })
      });
      else if (dQ) {
        const QQ = dQ.pos,
          WQ = "Iron" === dQ.type || "Moonstone" === dQ.type ? dQ.type : "Standard";
        hQ = `InvenLeftSideChest${WQ}`;
        const XQ = pw(dQ.numSlots);
        iQ = (0, gQ.jsxs)("div", {
          className: "ChestItemSlotsWrapper",
          children: [vw(dQ, UQ.whamm) && (0, gQ.jsx)(bw, {
            Sq: QQ,
            initialPasskey: dQ.ironChest.ys
          }), XQ && (0, gQ.jsx)(Uw, {
            numSlots: dQ.numSlots,
            renderSlot: cQ
          }), !XQ && (0, gQ.jsxs)("div", {
            className: "ChestItemSlots",
            children: [(0, gQ.jsx)("div", {
              className: "InvenLeftSideHeader SmallTextBold",
              children: vQ("Moonstone" === WQ ? "item:moonstoneChest" : "Iron" === WQ ? "item:ironChest" : "item:chest")
            }), (0, gQ.jsx)("div", {
              className: "GridItemSlots",
              children: new Array(dQ.numSlots).fill(0).map(((QQ, WQ) => cQ(WQ)))
            })]
          })]
        })
      } else if (!lQ || WQ && XQ)
        if (XQ && "Enchanting Table" === WQ) hQ = `InvenLeftSide${(null!==rQ&&void 0!==rQ?rQ:"").replace(/ /gi,"")}`, iQ = (0, gQ.jsx)(lX, {
          specialItemInfo: TQ.current,
          setHovered: sQ,
          pointerDown: FQ(JX.h),
          pointerUp: PQ(JX.h),
          enchantingTablePosition: JQ,
          enchantingTableBlockName: rQ
        });
        else if (XQ && "Salvaging Table" === WQ) hQ = "InvenLeftSideSalvagingTable", iQ = (0, gQ.jsx)(iX, {
        specialItemInfo: TQ.current,
        setSpecialItemInfo: QQ => {
          TQ.current = QQ
        },
        setHovered: sQ,
        pointerDown: FQ(JX.h),
        pointerUp: PQ(JX.h)
      });
      else {
        if (!XQ) return null;
        hQ = `InvenLeftSide${(null!==WQ&&void 0!==WQ?WQ:"HandCrafting").replace(/ /gi,"")}`, iQ = (0, gQ.jsx)(qw, {
          show: wQ,
          onCraft: GQ,
          craftingStation: WQ,
          selectedCraftable: IQ,
          dispatchSelectedCraftable: jQ,
          setHovered: sQ()
        })
      } else hQ = "InvenLeftSideCreative", iQ = qQ ? (0, gQ.jsx)(jw, {
        creativeScrollDiv: BQ,
        playerInvenNumSlots: HQ,
        getSetHoveringForIdx: sQ,
        getPointerDownForIdx: FQ,
        getPointerUpForIdx: PQ,
        creativeSearchVal: yQ,
        setCreativeSearchVal: VQ,
        creativeCategory: DQ,
        setCreativeCategory: pQ,
        show: wQ
      }) : null;
      const RQ = !!dQ || XQ && !!WQ;
      return (0, gQ.jsx)("div", {
        className: `InvenLeftSide ${hQ}`,
        "data-pad-inventory-start": RQ ? "" : void 0,
        children: iQ
      })
    }
    var Hw = XQ(651),
      aw = XQ(20579),
      lw = XQ(20584),
      hw = XQ(20590);
    const iw = {
      Helmet: {
        sprite: "empty_armor_slot_helmet",
        image: XQ(20597)
      },
      Chestplate: {
        sprite: "empty_armor_slot_chestplate",
        image: lw
      },
      Gauntlets: {
        sprite: "empty_armor_slot_gauntlets",
        image: hw
      },
      Leggings: {
        sprite: "empty_armor_slot_leggings",
        image: XQ(20599)
      },
      Boots: {
        sprite: "empty_armor_slot_boots",
        image: aw
      }
    };

    function Aw(QQ) {
      const {
        sprite: WQ,
        image: XQ
      } = iw[QQ];
      return xW(WQ, oW.h.ITEM, XQ)
    }

    function Rw(QQ) {
      let {
        draggedInfo: WQ,
        specialItemInfo: XQ,
        craftFlyAnims: wQ,
        getSetHovering: qQ,
        getPointerDownForIdx: TQ,
        getPointerUpForIdx: zQ,
        variation: sQ,
        canCraft: FQ,
        isNewSlot: PQ
      } = QQ;
      const JQ = (0, aQ.d)("inventory", (QQ => QQ.player.length));
      return 0 === JQ ? null : (0, gQ.jsxs)("div", {
        className: "InvenBodyRight",
        children: [(0, gQ.jsx)("div", {
          className: "ArmourItemSlots",
          children: new Array(Hw.b.length).fill(0).map(((QQ, rQ) => {
            const IQ = JQ - Hw.b.length + rQ;
            return (0, gQ.jsx)(aX.c, {
              idx: IQ,
              draggedInfo: WQ,
              specialItemInfo: XQ,
              craftFlyHoldbackInfo: (0, gX.l)(wQ, IQ),
              setHovered: qQ(IQ),
              pointerDown: TQ(IQ),
              pointerUp: zQ(IQ),
              defaultIconB64: Aw(Hw.b[rQ]),
              variation: FQ ? sQ : void 0,
              showNewDot: PQ(IQ)
            }, IQ)
          }))
        }), (0, gQ.jsx)("div", {
          className: "GridItemSlots",
          children: new Array(JQ - 10 - Hw.b.length).fill(0).map(((QQ, rQ) => {
            const IQ = JQ - Hw.b.length - rQ - 1;
            return (0, gQ.jsx)(aX.c, {
              idx: IQ,
              draggedInfo: WQ,
              specialItemInfo: XQ,
              craftFlyHoldbackInfo: (0, gX.l)(wQ, IQ),
              setHovered: qQ(IQ),
              pointerDown: TQ(IQ),
              pointerUp: zQ(IQ),
              variation: FQ ? sQ : void 0,
              showNewDot: PQ(IQ)
            }, IQ)
          }))
        })]
      })
    }
    var Ew = XQ(37136),
      Cw = XQ(37143);

    function uw(QQ) {
      const {
        e: WQ,
        idx: XQ
      } = QQ, wQ = (0, PX.m)(QQ.readInventory(), XQ), qQ = (0, PX.q)(WQ);
      XQ === JX.e ? function(QQ, WQ) {
        const {
          draggedInfoRef: XQ,
          removeItem: wQ,
          removeDraggedInfoRef: qQ,
          close: TQ
        } = QQ;
        if (XQ.current) {
          const QQ = WQ && XQ.current.amount || 1;
          wQ(XQ.current.idx, QQ, !0) && (XQ.current.amount -= QQ, XQ.current.amount <= 0 && qQ())
        } else WQ && TQ()
      }(QQ, qQ) : XQ === JX.h ? function(QQ, WQ) {
        const {
          e: XQ,
          draggedInfoRef: wQ,
          specialItemRef: qQ,
          moveAmtIntoSlot: TQ,
          removeDraggedInfoRef: zQ
        } = QQ;
        if ((0, PX.y)(XQ) && qQ.current) qQ.current = null;
        else if (wQ.current && qQ.current && (wQ.current.idx === qQ.current.idx || (0, Cw.d)(wQ.current, qQ.current)) && wQ.current.amount > 0 && qQ.current.amount > 0 && qQ.current.amount < GX.h.maxItemStackSize)
          if (wQ.current.idx === qQ.current.idx) {
            if (WQ) {
              const QQ = Math.min(wQ.current.amount, GX.h.maxItemStackSize - qQ.current.amount);
              qQ.current.amount += QQ, wQ.current.amount -= QQ
            } else wQ.current.amount--, qQ.current.amount++;
            wQ.current.amount <= 0 && zQ()
          } else if (WQ) {
          const QQ = Math.min(wQ.current.amount, GX.h.maxItemStackSize - qQ.current.amount);
          TQ(qQ.current.idx, QQ) && (qQ.current.amount += QQ)
        } else {
          TQ(qQ.current.idx, 1) && qQ.current.amount++
        } else if (wQ.current && !qQ.current && !WQ && wQ.current.amount > 0) wQ.current.amount--, qQ.current = {
          idx: wQ.current.idx,
          name: wQ.current.name,
          attributes: wQ.current.attributes,
          amount: 1
        }, wQ.current.amount <= 0 && zQ();
        else {
          const QQ = wQ.current;
          wQ.current = qQ.current, qQ.current = QQ
        }
      }(QQ, qQ) : (0, PX.y)(WQ) ? function(QQ, WQ) {
        var XQ, wQ;
        const {
          idx: qQ,
          draggedInfoRef: TQ,
          specialItemRef: zQ,
          canCraft: sQ,
          variation: FQ,
          swapSlots: PQ,
          moveIntoSlots: gQ
        } = QQ;
        if (!WQ) return;
        let JQ = WQ.amount;
        qQ === (null === (XQ = TQ.current) || void 0 === XQ ? void 0 : XQ.idx) && (JQ = TQ.current.amount <= 0 ? 0 : WQ.amount - TQ.current.amount);
        qQ === (null === (wQ = zQ.current) || void 0 === wQ ? void 0 : wQ.idx) && (JQ = zQ.current.amount <= 0 ? 0 : WQ.amount - zQ.current.amount);
        if (0 === JQ) return;
        const rQ = QQ.readInventory(),
          IQ = rQ.player.length,
          jQ = rQ.chest,
          BQ = IQ - Hw.b.length,
          yQ = () => {
            if (!(0, qX.l)()) return void gQ(10, BQ, qQ, JQ);
            const QQ = QQ => {
              const XQ = (0, PX.m)(rQ, QQ);
              return XQ ? {
                amount: XQ.amount,
                stacksWithMoved: (0, Cw.d)(XQ, WQ)
              } : null
            };
            for (const WQ of ((QQ, WQ, XQ, wQ, qQ) => {
                const TQ = [];
                let zQ = wQ;
                if (null !== wQ) {
                  let sQ = 0;
                  for (let wQ = WQ; wQ < XQ; wQ++) {
                    const WQ = QQ(wQ);
                    null !== WQ && void 0 !== WQ && WQ.stacksWithMoved && null !== WQ.amount && WQ.amount > 0 && (sQ += Math.max(0, qQ - WQ.amount))
                  }
                  const FQ = Math.min(wQ, sQ);
                  if (FQ > 0 && (TQ.push({
                      start: WQ,
                      end: XQ,
                      amount: FQ
                    }), zQ = wQ - FQ), zQ <= 0) return TQ
                }
                for (let sQ = XQ - 1; sQ >= WQ; sQ--)
                  if (null === QQ(sQ)) {
                    TQ.push({
                      start: sQ,
                      end: sQ + 1,
                      amount: zQ
                    });
                    break
                  } return TQ
              })(QQ, 10, BQ, JQ, GX.h.maxItemStackSize)) gQ(WQ.start, WQ.end, qQ, WQ.amount)
          };
        if (!sQ || "Enchanting Table" !== FQ && "Salvaging Table" !== FQ) {
          const XQ = (0, HQ.sb)(WQ.name),
            wQ = XQ ? (0, HQ.rb)(XQ) : null;
          if (!Hw.b.includes(XQ) || qQ !== wQ && (0, PX.p)(rQ, QQ.itemInfo, wQ, qQ))
            if (jQ)
              if (qQ < IQ) {
                var VQ, DQ;
                const [QQ, WQ] = null !== (VQ = null === (DQ = (0, Vw.d)(jQ.type)) || void 0 === DQ ? void 0 : DQ.quickMoveRange) && void 0 !== VQ ? VQ : [0, jQ.numSlots];
                gQ(IQ + QQ, IQ + WQ, qQ, JQ)
              } else gQ(0, IQ - Hw.b.length, qQ, JQ);
          else rQ.creative ? qQ < 10 ? yQ() : qQ < IQ ? gQ(0, 10, qQ, JQ) : gQ(0, IQ - Hw.b.length, qQ, null !== WQ.amount ? GX.h.maxItemStackSize : null) : qQ < 10 ? yQ() : gQ(0, 10, qQ, JQ);
          else qQ < IQ - Hw.b.length || qQ >= IQ ? PQ(wQ, qQ) : (gQ(0, IQ - Hw.b.length, wQ, JQ), sX.b.play("equip_leather1", 1).rate(.9 + .3 * Math.random()))
        } else zQ.current = {
          idx: qQ,
          name: WQ.name,
          attributes: WQ.attributes,
          amount: null !== WQ.amount ? JQ : 0
        }
      }(QQ, wQ) : QQ.draggedInfoRef.current ? function(QQ, WQ, XQ, wQ) {
        const {
          draggedInfoRef: qQ,
          specialItemRef: TQ,
          moveAmtIntoSlot: zQ,
          swapSlots: sQ,
          removeItem: FQ,
          removeDraggedInfoRef: PQ
        } = QQ, gQ = QQ.readInventory(), JQ = qQ.current.idx;
        if (XQ && (WQ === JQ || (0, Cw.d)(qQ.current, XQ)) && qQ.current.amount > 0 && (0, PX.c)(XQ) > 0 && (XQ.amount < GX.h.maxItemStackSize || WQ === JQ)) wQ ? XQ.amount + qQ.current.amount <= GX.h.maxItemStackSize || WQ === JQ ? zQ(WQ, qQ.current.amount) : zQ(WQ, GX.h.maxItemStackSize - XQ.amount) : zQ(WQ, 1);
        else if (qQ.current.amount > 0 && !XQ) zQ(WQ, wQ ? qQ.current.amount : 1);
        else if (wQ || XQ || 0 === qQ.current.amount)
          if (gQ.creative && !gQ.chest && WQ >= gQ.player.length) {
            const QQ = 0 === qQ.current.amount ? 1 : qQ.current.amount;
            FQ(qQ.current.idx, QQ, !1) && PQ()
          } else {
            var rQ;
            const XQ = (null === (rQ = TQ.current) || void 0 === rQ ? void 0 : rQ.idx) === WQ;
            if (sQ(WQ, qQ.current.idx)) {
              const wQ = QQ.readInventory(),
                zQ = (0, PX.m)(wQ, JQ),
                sQ = !wQ.chest && wQ.creative && qQ.current.idx >= wQ.player.length;
              if (zQ && qQ.current.idx !== WQ && !sQ) {
                let QQ = (0, PX.c)(zQ);
                XQ && (QQ -= TQ.current.amount), qQ.current = XQ && 0 === QQ ? null : {
                  idx: qQ.current.idx,
                  name: zQ.name,
                  attributes: zQ.attributes,
                  amount: QQ
                }
              } else PQ()
            }
          }
        else zQ(WQ, 1)
      }(QQ, XQ, wQ, qQ) : function(QQ, WQ, XQ, wQ) {
        var qQ;
        const {
          draggedInfoRef: TQ,
          specialItemRef: zQ
        } = QQ;
        if (!XQ) return;
        let sQ = (0, PX.c)(XQ);
        const FQ = (null === (qQ = zQ.current) || void 0 === qQ ? void 0 : qQ.idx) === WQ;
        FQ && (sQ -= zQ.current.amount);
        wQ || (sQ = Math.ceil(sQ / 2));
        TQ.current = FQ && 0 === sQ ? null : {
          idx: WQ,
          name: XQ.name,
          attributes: XQ.attributes,
          amount: sQ
        }
      }(QQ, XQ, wQ, qQ)
    }

    function Lw(QQ, WQ) {
      return !!WQ && WQ.name === QQ.name
    }

    function kw() {
      return PQ.gameBridge.latest("inventory")
    }

    function fw(QQ, WQ, XQ) {
      return PQ.gameBridge.send("removeInventoryItem", {
        slot: QQ,
        amount: WQ,
        drop: XQ
      })
    }

    function Sw(QQ) {
      return (0, PX.i)(QQ, PQ.gameBridge.latest("itemInfo"), PQ.gameBridge.latest("stationItems").enchantable)
    }

    function tw(QQ) {
      let {
        show: WQ,
        close: XQ,
        canCraft: wQ,
        variation: TQ,
        inventoryItemsMoveable: zQ,
        setCraftFlyAnims: sQ
      } = QQ;
      (0, aQ.e)("itemInfo");
      const [FQ, gQ] = (0, qQ.useState)(null), [JQ, rQ] = (0, qQ.useState)(null), [IQ, jQ] = (0, qQ.useState)(!1), BQ = (0, qQ.useRef)(null), yQ = (0, qQ.useRef)(null), VQ = (0, qQ.useRef)(null), DQ = (0, qQ.useRef)(null), [pQ, GQ] = (0, qQ.useReducer)((QQ => QQ + 1), 0), UQ = (0, qQ.useCallback)((() => {
        WQ && GQ()
      }), [WQ, GQ]), bQ = (0, qQ.useCallback)((() => {
        yQ.current = null, CQ.current = null, UQ()
      }), [UQ]), vQ = (0, qQ.useCallback)(((QQ, WQ) => {
        sQ((XQ => XQ.map((XQ => "ingredient" === XQ.kind ? XQ : XQ.QF === QQ ? {
          ...XQ,
          QF: WQ,
          to: (0, PX.g)(WQ)
        } : XQ.QF === WQ ? {
          ...XQ,
          QF: QQ,
          to: (0, PX.g)(QQ)
        } : XQ))))
      }), [sQ]), dQ = (0, qQ.useCallback)(((QQ, WQ) => {
        const XQ = kQ.current;
        if (XQ.x = QQ, XQ.y = WQ, BQ.current) !fQ.current.isTouch || fQ.current.itemBeingDragged && !CQ.current ? (BQ.current.style.transform = `translate(${XQ.x}px, ${XQ.y}px)`, jQ(fQ.current.isTouch && !CQ.current)) : (BQ.current.style.transform = "translate(0.5rem, 0.5rem)", jQ(!0));
        else if (DQ.current) {
          const XQ = DQ.current;
          let wQ = QQ + 10,
            qQ = WQ + 10;
          const TQ = XQ.offsetWidth,
            zQ = XQ.offsetHeight;
          wQ + TQ > window.innerWidth && (wQ = QQ - TQ - 10), qQ + zQ > window.innerHeight && (qQ = WQ - zQ - 10), wQ < 0 && (wQ = 0), qQ < 0 && (qQ = 0), DQ.current.style.transform = `translate(${wQ}px, ${qQ}px)`
        }
      }), []), lQ = (0, qQ.useCallback)((QQ => (WQ, XQ, wQ) => {
        if (gQ(WQ && void 0 !== QQ ? QQ : null), WQ) {
          if (void 0 === QQ && !XQ) return void(0, Ew.e)("Error in invenComp", new Error("isHovering true but no idx or text"));
          if (void 0 !== QQ) {
            var qQ;
            const WQ = kw();
            let XQ;
            if (XQ = QQ === JX.h ? VQ.current ? (0, PX.m)(WQ, VQ.current.idx) : null : (0, PX.m)(WQ, QQ), !XQ) return void rQ(null);
            if ((null === (qQ = VQ.current) || void 0 === qQ ? void 0 : qQ.idx) === QQ) {
              if (0 === (0, PX.c)(XQ) - VQ.current.amount) return void rQ(null)
            }
            rQ(Sw(XQ))
          } else rQ({
            name: XQ.name,
            desc: XQ.desc,
            fontStyle: "normal"
          })
        } else rQ(null);
        wQ && setTimeout((() => {
          dQ(wQ.pageX, wQ.pageY)
        }), 0)
      }), [dQ]), hQ = (0, qQ.useCallback)(((QQ, WQ) => {
        const XQ = PQ.gameBridge.send("moveInventoryItem", {
          from: yQ.current.idx,
          to: QQ,
          amount: WQ
        });
        return XQ ? (yQ.current.amount -= WQ, yQ.current.amount <= 0 && bQ()) : console.error("moveInventoryItem failed"), XQ
      }), [bQ]), iQ = (0, qQ.useCallback)(((QQ, WQ) => {
        const XQ = VQ.current,
          wQ = null === XQ || void 0 === XQ ? void 0 : XQ.idx;
        XQ && (XQ.idx = function(QQ, WQ, XQ) {
          return QQ === WQ ? XQ : QQ === XQ ? WQ : QQ
        }(wQ, QQ, WQ));
        const qQ = PQ.gameBridge.send("swapInventorySlots", {
          a: QQ,
          b: WQ
        });
        return qQ ? vQ(QQ, WQ) : XQ && (XQ.idx = wQ), qQ
      }), [vQ]), cQ = (0, qQ.useCallback)(((QQ, WQ, XQ, wQ) => {
        const qQ = PQ.gameBridge.send("quickMoveInventoryItem", {
          slot: XQ,
          start: QQ,
          end: WQ,
          amount: wQ
        });
        null !== qQ && vQ(XQ, qQ)
      }), [vQ]), AQ = (0, qQ.useCallback)(((QQ, WQ) => {
        var qQ;
        ((QQ, WQ, XQ) => {
          const wQ = QQ - (XQ - Hw.b.length);
          return !(!WQ || wQ < 0 || wQ >= Hw.b.length) && (0, HQ.sb)(WQ) !== Hw.b[wQ]
        })(WQ, null === (qQ = yQ.current) || void 0 === qQ ? void 0 : qQ.name, kw().player.length) || (uw({
          e: QQ,
          idx: WQ,
          readInventory: kw,
          itemInfo: PQ.gameBridge.latest("itemInfo"),
          draggedInfoRef: yQ,
          specialItemRef: VQ,
          moveAmtIntoSlot: hQ,
          swapSlots: iQ,
          moveIntoSlots: cQ,
          removeItem: fw,
          removeDraggedInfoRef: bQ,
          close: XQ,
          canCraft: wQ,
          variation: TQ
        }), UQ())
      }), [wQ, XQ, hQ, cQ, bQ, iQ, TQ, UQ]), RQ = (0, qQ.useRef)(0), EQ = (0, qQ.useRef)(null), CQ = (0, qQ.useRef)(null), uQ = (0, qQ.useRef)(null), LQ = (0, qQ.useRef)(new Set), kQ = (0, qQ.useRef)({
        x: 0,
        y: 0
      }), fQ = (0, qQ.useRef)({
        isTouch: !1,
        itemBeingDragged: !1
      }), SQ = (0, qQ.useCallback)((() => (uQ.current = null, fQ.current.itemBeingDragged = !1, clearTimeout(EQ.current), !!CQ.current && (CQ.current = null, UQ(), !0))), [UQ]);
      (0, qQ.useEffect)((() => {
        SQ(), LQ.current.clear()
      }), [WQ]);
      const tQ = QQ => void 0 !== QQ && (LQ.current.has(QQ) || null !== uQ.current && QQ !== uQ.current),
        oQ = QQ => {
          fQ.current.isTouch = (0, PX.t)(QQ)
        },
        eQ = (0, qQ.useCallback)((QQ => WQ => {
          const wQ = (0, PX.t)(WQ);
          if (wQ || dQ(WQ.pageX, WQ.pageY), zQ)
            if (tQ(WQ.pointerId)) void 0 !== WQ.pointerId && LQ.current.add(WQ.pointerId);
            else {
              if (oQ(WQ), wQ) {
                RQ.current = WQ.timeStamp, fQ.current.itemBeingDragged = !0, uQ.current = WQ.pointerId;
                const XQ = (0, PX.m)(kw(), QQ);
                if (XQ && XQ.amount && XQ.amount > 0) {
                  const XQ = WQ.pageX,
                    wQ = WQ.pageY,
                    qQ = kQ.current.x,
                    TQ = kQ.current.y;
                  clearTimeout(EQ.current), EQ.current = setTimeout((() => {
                    if (yQ.current && yQ.current.idx === QQ && (Math.abs(XQ - kQ.current.x) < 20 && Math.abs(wQ - kQ.current.y) < 20 || qQ === kQ.current.x && TQ === kQ.current.y) && fQ.current.itemBeingDragged) {
                      const QQ = kw(),
                        XQ = QQ.creative && !QQ.chest && yQ.current.idx >= GX.h.numInvenSlots && null !== (0, PX.m)(QQ, yQ.current.idx).amount ? GX.h.maxItemStackSize : yQ.current.amount;
                      CQ.current = {
                        initTouchX: WQ.pageX,
                        initTouchY: WQ.pageY,
                        maxAmount: XQ
                      }, yQ.current.amount = Math.ceil(yQ.current.amount / 2), BQ.current.style.transform = "translate(0.5rem, 0.5rem)", jQ(!0), UQ()
                    }
                  }), 500)
                }
              }
              AQ(WQ, QQ)
            }
          else QQ === JX.e && (0, PX.q)(WQ) && XQ()
        }), [dQ, AQ, zQ, XQ, UQ]),
        nQ = (0, qQ.useCallback)((QQ => QQ => {
          if (tQ(QQ.pointerId)) return;
          const WQ = (0, PX.t)(QQ);
          if (oQ(QQ), !SQ()) {
            if (WQ && yQ.current && QQ.timeStamp - RQ.current > 150) {
              const WQ = document.elementFromPoint(QQ.clientX, QQ.clientY);
              if (null !== WQ) {
                const XQ = WQ.getAttribute("data-inven-idx");
                null !== XQ ? AQ(QQ, parseInt(XQ)) : WQ.classList.contains("InventoryBackgroundScreen") && AQ(QQ, -1)
              }
            }
            dQ(QQ.pageX, QQ.pageY)
          }
        }), [dQ, AQ, SQ]);
      (0, qQ.useEffect)((() => {
        let QQ;
        const XQ = ["pointerup", "pointercancel"],
          wQ = QQ => {
            LQ.current.has(QQ.pointerId) ? setTimeout((() => {
              LQ.current.delete(QQ.pointerId)
            }), 0) : QQ.pointerId === uQ.current && setTimeout((() => {
              uQ.current === QQ.pointerId && SQ()
            }), 0)
          };
        if (WQ) {
          for (const QQ of XQ) document.addEventListener(QQ, wQ, !0);
          if (!fQ.current.isTouch) {
            const QQ = kQ.current;
            dQ(QQ.x, QQ.y)
          }
          QQ = QQ => {
            QQ.preventDefault(), tQ(QQ.pointerId) || (oQ(QQ), dQ(QQ.pageX, QQ.pageY), CQ.current && QQ.pointerId === uQ.current && (QQ => {
              if (!yQ.current) return CQ.current = null, void UQ();
              const {
                initTouchX: WQ,
                maxAmount: XQ
              } = CQ.current, wQ = (QQ.pageX - WQ) * CQ.current.maxAmount / 160, qQ = Math.ceil(XQ / 2) + Math.ceil(wQ);
              yQ.current.amount = Math.min(XQ, Math.max(1, qQ)), UQ()
            })(QQ))
          }, document.addEventListener("pointermove", QQ, !0)
        }
        return () => {
          document.removeEventListener("pointermove", QQ, !0);
          for (const QQ of XQ) document.removeEventListener(QQ, wQ, !0)
        }
      }));
      const xQ = (0, qQ.useCallback)((() => {
          if (yQ.current) {
            const QQ = (0, PX.m)(kw(), yQ.current.idx);
            (!Lw(yQ.current, QQ) || QQ.amount < yQ.current.amount) && bQ()
          }
        }), [bQ]),
        YQ = (0, qQ.useCallback)((() => {
          const QQ = yQ.current;
          if (QQ) {
            const WQ = (0, PX.m)(kw(), QQ.idx);
            Lw(QQ, WQ) && (QQ.attributes = WQ.attributes)
          }
        }), []);
      return {
        draggedDomRef: BQ,
        draggedInfoRef: yQ,
        specialItemRef: VQ,
        hoverInfoDomRef: DQ,
        longHoldSplitInfoRef: CQ,
        currHoveredIdx: FQ,
        currHoveredDisplayInfo: JQ,
        displayDraggedItemName: IQ,
        forceRerenderIfVisible: UQ,
        removeDraggedInfoRef: bQ,
        checkDraggedItemConsistencyWithInven: xQ,
        refreshDraggedAttributes: YQ,
        swapSlots: iQ,
        getPointerDownForIdx: eQ,
        getPointerUpForIdx: nQ,
        getSetHovering: lQ,
        setCurrHoveredDisplayInfo: rQ,
        moveFollowerTo: dQ
      }
    }
    class ow {
      constructor(QQ) {
        this.snapshot = [], this.newSlots = new Set, this.update(QQ, !1)
      }
      update(QQ, WQ) {
        const XQ = QQ.map((QQ => {
          var WQ;
          return QQ ? {
            name: QQ.name,
            amount: null !== (WQ = QQ.amount) && void 0 !== WQ ? WQ : 1
          } : null
        }));
        XQ.forEach(((QQ, XQ) => {
          const wQ = this.snapshot[XQ],
            qQ = (null === QQ || void 0 === QQ ? void 0 : QQ.name) !== (null === wQ || void 0 === wQ ? void 0 : wQ.name);
          (!QQ || qQ || QQ.amount < wQ.amount) && this.newSlots.delete(XQ), WQ && QQ && (qQ || QQ.amount > wQ.amount) && this.newSlots.add(XQ)
        })), this.snapshot = XQ
      }
      clearMarks() {
        this.newSlots.clear()
      }
      isNew(QQ) {
        return this.newSlots.has(QQ)
      }
    }
    const ew = (QQ, WQ, XQ) => ({
      button: WQ,
      shiftKey: XQ,
      pageX: QQ.clientX,
      pageY: QQ.clientY,
      clientX: QQ.clientX,
      clientY: QQ.clientY,
      pointerType: "mouse"
    });

    function nw(QQ) {
      const [WQ, XQ] = (0, qQ.useState)(QQ);
      return QQ && !WQ && XQ(!0), (0, qQ.useEffect)((() => {
        if (WQ) return;
        let QQ = !0;
        const wQ = () => {
            QQ && (QQ = !1, XQ(!0))
          },
          qQ = "function" === typeof window.requestIdleCallback,
          TQ = qQ ? window.requestIdleCallback(wQ, {
            timeout: 2e3
          }) : void 0,
          zQ = setTimeout(wQ, qQ ? 2e3 : 1e3);
        return () => {
          QQ = !1, clearTimeout(zQ), void 0 !== TQ && window.cancelIdleCallback(TQ)
        }
      }), [WQ]), WQ
    }
    const xw = (0, qQ.memo)((function(QQ) {
      var WQ;
      let {
        show: XQ,
        onOpen: wQ,
        onClose: TQ,
        variation: sQ
      } = QQ;
      const JQ = (0, qQ.useRef)(null),
        rQ = (0, qQ.useRef)(null),
        IQ = function(QQ) {
          const [WQ, XQ] = (0, qQ.useState)(!0), [wQ, TQ] = (0, qQ.useState)(!1), zQ = (0, qQ.useRef)(null), sQ = (0, qQ.useRef)(null), PQ = (0, FQ.g)("_shield"), gQ = (0, qQ.useRef)(null), JQ = (0, FQ.g)("_health"), rQ = (0, qQ.useRef)(null);

          function IQ(QQ) {
            const WQ = Date.now() + QQ;
            WQ < sQ.current || (XQ(!1), clearTimeout(zQ.current), sQ.current = WQ, zQ.current = setTimeout((() => {
              XQ(!0)
            }), QQ))
          }
          return (0, qQ.useEffect)((() => {
            IQ(IX);
            const QQ = jQ.k.subscribe("requestingPlayVideoAd", (() => {
              IQ(IX)
            }));
            return () => {
              clearTimeout(zQ.current), jQ.k.unsubscribe(QQ)
            }
          }), []), (0, qQ.useEffect)((() => {
            (gQ.current > PQ || rQ.current > JQ) && IQ(6e4), gQ.current = PQ, rQ.current = JQ
          }), [PQ, JQ]), (0, qQ.useEffect)((() => {
            let WQ = null;
            return QQ ? WQ = setTimeout((() => {
              TQ(!0)
            }), 250) : TQ(!1), () => {
              clearTimeout(WQ)
            }
          }), [QQ]), WQ && wQ
        }(XQ);
      (0, dQ.j)(XX.b, null);
      const BQ = (0, XX.j)(),
        yQ = BQ.some((QQ => QQ.panel)),
        {
          userContext: VQ
        } = (0, bQ.c)(),
        DQ = (0, aQ.d)("inventory", (QQ => {
          const WQ = QQ.chest;
          return null !== WQ && (pw(WQ.numSlots) || vw(WQ, VQ.whamm))
        })),
        pQ = nw(XQ),
        GQ = nw(XQ),
        [UQ, vQ] = (0, qQ.useState)([]),
        lQ = (0, qQ.useCallback)((QQ => {
          vQ((WQ => WQ.filter((WQ => WQ.id !== QQ))))
        }), []),
        hQ = (0, qQ.useRef)(null),
        iQ = (0, qQ.useRef)(0),
        cQ = (0, qQ.useCallback)((() => {
          hQ.current && (iQ.current = hQ.current.scrollTop), TQ()
        }), [TQ]),
        AQ = (0, FQ.g)("inventoryItemsMoveable"),
        RQ = (0, FQ.g)("canCraft"),
        {
          clientEscMenuOptions: CQ
        } = (0, fQ.n)(["clientEscMenuOptions"]),
        uQ = (0, qQ.useRef)(null);
      uQ.current || (uQ.current = new ow(PQ.gameBridge.latest("inventory").player));
      const LQ = uQ.current,
        {
          draggedDomRef: kQ,
          draggedInfoRef: SQ,
          specialItemRef: tQ,
          hoverInfoDomRef: oQ,
          longHoldSplitInfoRef: eQ,
          currHoveredIdx: nQ,
          currHoveredDisplayInfo: xQ,
          displayDraggedItemName: YQ,
          forceRerenderIfVisible: NQ,
          removeDraggedInfoRef: ZQ,
          checkDraggedItemConsistencyWithInven: OQ,
          refreshDraggedAttributes: KQ,
          swapSlots: mQ,
          getPointerDownForIdx: MQ,
          getPointerUpForIdx: QW,
          getSetHovering: WW,
          setCurrHoveredDisplayInfo: XW,
          moveFollowerTo: wW
        } = tw({
          show: XQ,
          close: cQ,
          canCraft: RQ,
          variation: sQ,
          inventoryItemsMoveable: AQ,
          setCraftFlyAnims: vQ
        });
      (0, qQ.useEffect)((() => {
        const QQ = !XQ && null !== PQ.gameBridge.latest("inventory").chest;
        if (QQ && PQ.gameBridge.send("closeChest", null), XQ || (LQ.clearMarks(), WW(null)(!1)), QQ) {
          sX.b.play("chestClose", 1).rate(.8 + .4 * Math.random())
        }
      }), [XQ]), (0, aQ.b)("chestToggled", (QQ => {
        if (QQ ? wQ() : XQ && cQ(), QQ) {
          sX.b.play("chestOpen", 1).rate(.8 + .4 * Math.random())
        }
      }));
      const qW = (0, iW.k)();
      (0, aQ.b)("inventory", (QQ => {
        let {
          player: WQ
        } = QQ;
        var wQ, qQ, TQ;
        (LQ.update(WQ, !XQ && qW.shown), tQ.current) && (tQ.current = (qQ = tQ.current, TQ = null !== (wQ = WQ[tQ.current.idx]) && void 0 !== wQ ? wQ : null, Lw(qQ, TQ) ? (qQ.attributes = TQ.attributes, null !== TQ.amount && qQ.amount > TQ.amount && (qQ.amount = TQ.amount), qQ) : null));
        KQ(), null !== nQ && WW(nQ)(!0), NQ()
      })), (0, qQ.useEffect)((() => (PQ.gameBridge.send("setInventoryOpen", XQ), () => {
        PQ.gameBridge.send("setInventoryOpen", !1)
      })), [XQ]);
      const TW = (QQ, WQ) => {
        if (QQ === JX.h) return void(QQ => {
          const WQ = tQ.current;
          if (!WQ || null === (0, PX.m)(PQ.gameBridge.latest("inventory"), WQ.idx)) return;
          const XQ = QQ ? Math.max(WQ.amount, 1) : 1,
            wQ = WQ.amount - XQ;
          if (!PQ.gameBridge.send("removeInventoryItem", {
              slot: WQ.idx,
              amount: XQ,
              drop: !0
            })) return;
          const qQ = tQ.current;
          qQ && (qQ.amount = Math.min(qQ.amount, wQ), qQ.amount <= 0 && (tQ.current = null)), NQ()
        })(WQ);
        const XQ = null === QQ ? null : (0, PX.m)(PQ.gameBridge.latest("inventory"), QQ);
        if (null !== XQ) {
          var wQ, qQ, TQ;
          const zQ = WQ && null !== (wQ = XQ.amount) && void 0 !== wQ ? wQ : 1;
          PQ.gameBridge.send("removeInventoryItem", {
            slot: QQ,
            amount: zQ,
            drop: !0
          }), QQ === (null === (qQ = SQ.current) || void 0 === qQ ? void 0 : qQ.idx) && (SQ.current.amount -= zQ, SQ.current.amount <= 0 && ZQ(), NQ()), QQ === (null === (TQ = tQ.current) || void 0 === TQ ? void 0 : TQ.idx) && (tQ.current = null, NQ())
        }
      };
      (0, aQ.b)("inventoryDropRequested", (QQ => {
        XQ && nQ !== JX.h && TW(nQ, QQ)
      }));
      const zW = (QQ, WQ) => {
        let XQ = WQ;
        if (WQ === JX.h) {
          if (!tQ.current) return;
          XQ = tQ.current.idx
        }
        const wQ = mQ(QQ, XQ);
        if (wQ && SQ.current && (SQ.current.idx === XQ ? SQ.current.idx = QQ : SQ.current.idx === QQ && (SQ.current.idx = XQ)), wQ && WQ === JX.h) {
          const QQ = (0, PX.m)(PQ.gameBridge.latest("inventory"), XQ);
          tQ.current = QQ ? {
            idx: XQ,
            name: QQ.name,
            attributes: QQ.attributes,
            amount: (0, PX.c)(QQ)
          } : null
        }
        NQ()
      };
      (0, aQ.b)("numberKeyPressed", (QQ => {
        null !== nQ && XQ && zW(QQ - 1, nQ)
      })), (0, qQ.useEffect)((() => {
        XQ || (tQ.current = null, ZQ(), XW(null))
      }), [XQ, ZQ, XW, tQ]);
      const sW = tQ.current;
      (0, qQ.useEffect)((() => {
        nQ === JX.h && WW(JX.h)(!0)
      }), [sW, nQ, WW]);
      const FW = () => {
        OQ(), KQ(), NQ()
      };
      (0, aQ.b)("chestRefreshed", FW), (0, aQ.b)("inventorySynced", FW);
      const [PW, gW] = (0, qQ.useState)(new Map), JW = null !== (WQ = PW.get(sQ)) && void 0 !== WQ ? WQ : null, rW = (QQ, WQ) => {
        gW((XQ => {
          const wQ = XQ.get(QQ);
          return wQ && wQ.name === WQ.name && wQ.Ug === WQ.Ug ? XQ : new Map(XQ).set(QQ, WQ)
        }))
      };
      (0, dQ.f)("craftingRecipesEdited", (() => {
        NQ()
      })), (0, dQ.f)(nX.d, (QQ => {
        let {
          variation: WQ,
          itemName: XQ
        } = QQ;
        rW(WQ, {
          name: XQ,
          Ug: 0
        })
      }));
      const [IW, jW] = (0, qQ.useState)(null), [BW, yW] = (0, qQ.useState)(null);
      (0, aQ.b)("enchantingTableOpened", (QQ => {
        let {
          position: WQ,
          blockName: XQ
        } = QQ;
        jW(WQ), yW(XQ)
      }));
      const [VW, DW] = (0, qQ.useState)(""), [pW, GW] = (0, qQ.useState)(null);
      (0, qQ.useEffect)((() => {
        XQ && hQ.current && (hQ.current.scrollTop = iQ.current)
      }), [XQ]);
      return (QQ => {
        const WQ = (0, qQ.useRef)(QQ);
        WQ.current = QQ, (0, qQ.useEffect)((() => {
          if (!QQ.show) return;
          const XQ = (QQ, XQ, wQ, qQ) => {
              const {
                getPointerDownForIdx: TQ,
                getPointerUpForIdx: zQ
              } = WQ.current;
              TQ(QQ)(ew(XQ, wQ, qQ)), zQ(QQ)(ew(XQ, wQ, qQ))
            },
            wQ = {
              primary: (QQ, WQ) => {
                XQ(QQ, WQ, 0, !1)
              },
              secondary: (QQ, WQ) => {
                XQ(QQ, WQ, 2, !1)
              },
              quickMove: (QQ, WQ) => {
                XQ(QQ, WQ, 0, !0)
              },
              dropHeld: (QQ, XQ) => {
                WQ.current.getPointerDownForIdx(JX.e)(ew(XQ, QQ ? 0 : 2, !1))
              },
              dropSlot: (QQ, XQ) => {
                WQ.current.dropFromIdx(QQ, XQ)
              },
              swapWithHotbar: (QQ, XQ) => {
                WQ.current.swapWithHotbar(QQ, XQ)
              },
              cancel: () => {
                WQ.current.removeDraggedInfoRef()
              },
              isHolding: () => !!WQ.current.draggedInfoRef.current,
              hasItemAt: QQ => {
                const {
                  draggedInfoRef: XQ,
                  specialItemRef: wQ
                } = WQ.current;
                if (QQ === JX.h) return !!wQ.current;
                const qQ = (0, PX.m)(PQ.gameBridge.latest("inventory"), QQ);
                return !!qQ && (0, aX.e)(QQ, (0, PX.c)(qQ), [XQ.current, wQ.current]).shown
              },
              hover: (QQ, XQ) => {
                const {
                  moveFollowerTo: wQ,
                  getSetHovering: qQ
                } = WQ.current;
                wQ(XQ.clientX, XQ.clientY), qQ(null !== QQ && void 0 !== QQ ? QQ : void 0)(null !== QQ, void 0, {
                  pageX: XQ.clientX,
                  pageY: XQ.clientY
                })
              },
              moveTo: QQ => {
                WQ.current.moveFollowerTo(QQ.clientX, QQ.clientY)
              },
              close: () => {
                WQ.current.close()
              }
            };
          return (0, wX.k)(wQ)
        }), [QQ.show])
      })({
        show: XQ,
        close: cQ,
        draggedInfoRef: SQ,
        specialItemRef: tQ,
        getPointerDownForIdx: MQ,
        getPointerUpForIdx: QW,
        getSetHovering: WW,
        moveFollowerTo: wW,
        removeDraggedInfoRef: ZQ,
        dropFromIdx: TW,
        swapWithHotbar: zW
      }), (0, qQ.useEffect)((() => {
        jQ.k.mB("inventoryDraggedItemUpdated", {
          draggedInfo: SQ.current,
          specialItemInfo: tQ.current,
          setHovered: WW,
          pointerDown: MQ,
          pointerUp: QW,
          variation: RQ ? sQ : void 0,
          craftFlyAnims: UQ
        })
      })), (0, gQ.jsxs)(EQ.c, {
        show: XQ,
        style: {
          touchAction: XQ ? "none" : void 0
        },
        children: [SQ.current && (0, gQ.jsx)(BX, {
          draggedInfo: SQ.current,
          toAddRef: kQ
        }), SQ.current && YQ && (0, gQ.jsx)(yX, {
          className: "DraggedInvenItemName",
          displayInfo: Sw(SQ.current),
          domRef: null
        }), !SQ.current && xQ && (0, gQ.jsx)(yX, {
          displayInfo: xQ,
          domRef: oQ
        }), eQ.current && SQ.current && (0, gQ.jsx)(VX, {
          info: eQ.current,
          draggedInfo: SQ.current
        }), UQ.map((QQ => (0, gQ.jsx)(gX.d, {
          anim: QQ,
          onComplete: lQ
        }, QQ.id))), (0, gQ.jsx)(zQ.b, {
          show: XQ,
          className: "InventoryBackgroundScreen",
          globallyUniqueKey: "Inventory",
          close: cQ,
          togglePointerLock: !1,
          closeOnPressBackground: !1,
          preventContextMenu: !0,
          pointerDown: MQ(JX.e),
          pointerUp: QW(JX.e),
          doGameplayStartStopOnShow: !0
        }), pQ && (0, gQ.jsxs)("div", {
          className: "EntireInventoryWrapper",
          children: [(0, gQ.jsx)("div", {
            ref: JQ,
            className: "InventoryAdOuter",
            children: (0, gQ.jsx)(FX.e, {
              info: {
                adType: "leaderboard",
                adId: 6,
                adAlias: "inventory"
              },
              sizeInfo: {
                parentRef: JQ
              },
              verticalAlign: "start",
              showing: XQ && IQ,
              extraContrastBackgroundBox: "top",
              noFillShowBloxdAdProbability: 0,
              autoRefreshMode: "none"
            })
          }), (0, gQ.jsxs)("div", {
            className: "InventoryWrapper",
            children: [(0, gQ.jsxs)("div", {
              className: pX()("Inventory", {
                WithGameButtons: BQ.length > 0,
                WithPanelButtons: yQ,
                WideChestOpen: DQ
              }),
              children: [(0, gQ.jsx)("div", {
                className: "InventoryFiller"
              }), (0, gQ.jsx)(zX, {
                show: XQ,
                buttons: BQ
              }), (0, gQ.jsxs)("div", {
                className: "InvenBody",
                children: [(0, gQ.jsx)(dw, {
                  variation: sQ,
                  canCraft: RQ,
                  show: XQ,
                  creativeMounted: GQ,
                  specialItemRef: tQ,
                  draggedInfo: SQ.current,
                  getSetHovering: WW,
                  getPointerDownForIdx: MQ,
                  getPointerUpForIdx: QW,
                  enchantingTablePosition: IW,
                  enchantingTableBlockName: BW,
                  selectedCraftable: JW,
                  dispatchSelectedCraftable: QQ => {
                    rW(sQ, QQ)
                  },
                  creativeScrollDiv: hQ,
                  creativeSearchVal: VW,
                  setCreativeSearchVal: DW,
                  creativeCategory: pW,
                  setCreativeCategory: GW,
                  onCraft: function(QQ, WQ) {
                    let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    if (OQ(), (QQ || XQ.length > 0) && vQ((WQ => {
                        const wQ = [...WQ],
                          qQ = WQ.filter((QQ => "ingredient" === QQ.kind)).length;
                        for (const QQ of XQ.slice(0, Math.max(0, 24 - qQ))) wQ.push({
                          id: (0, gX.h)(),
                          ...QQ,
                          to: QQ.to
                        });
                        return QQ && wQ.push({
                          id: (0, gX.h)(),
                          ...QQ,
                          to: (0, PX.g)(QQ.QF)
                        }), wQ
                      })), null !== WQ) {
                      var wQ;
                      const QQ = PQ.gameBridge.latest("inventory");
                      (0, HQ.sb)(null === (wQ = (0, PX.m)(QQ, WQ)) || void 0 === wQ ? void 0 : wQ.name) ? MQ(WQ)({
                        button: 0,
                        shiftKey: !0
                      }): mQ(WQ, QQ.selectedSlot)
                    }
                  }
                }), (0, gQ.jsx)(Rw, {
                  draggedInfo: SQ.current,
                  specialItemInfo: tQ.current,
                  craftFlyAnims: UQ,
                  getSetHovering: WW,
                  getPointerDownForIdx: MQ,
                  getPointerUpForIdx: QW,
                  variation: sQ,
                  canCraft: RQ,
                  isNewSlot: QQ => CQ.showNewItemIndicator && LQ.isNew(QQ)
                })]
              })]
            }), (0, gQ.jsx)("div", {
              className: "InventoryAdOuter",
              children: (0, gQ.jsx)("div", {
                ref: rQ,
                className: "InventoryAd",
                children: (0, gQ.jsx)("div", {
                  className: "InventoryAdInner"
                })
              })
            })]
          })]
        })]
      })
    }));
    var Yw = XQ(1488),
      Nw = XQ(158);
    const Zw = (0, qQ.memo)((function(QQ) {
      let {
        show: WQ,
        onOpen: XQ,
        onClose: wQ
      } = QQ;
      const TQ = (0, qQ.useRef)(0),
        sQ = () => (0, Yw.k)() && !(0, Yw.s)() && TQ.current <= 2;
      WQ = sQ() && WQ;
      const FQ = () => {
        TQ.current++, wQ()
      };
      (0, dQ.f)("ctrlCrouchWithoutFullscreen", (() => {
        sQ() && XQ()
      })), (0, dQ.f)("displaymodeFullscreenChange", (QQ => {
        WQ && QQ && FQ()
      }));
      const PQ = "crazygames" === Nw.siteUsed;
      return (0, gQ.jsx)(zQ.b, {
        close: FQ,
        escDoesExit: !0,
        show: WQ,
        togglePointerLock: !1,
        globallyUniqueKey: "CantCtrlCrouchIfNotFullscreenComp",
        children: (0, gQ.jsxs)("div", {
          className: "CantCtrlCrouchIfNotFullscreenComp SmallTextBold",
          children: [(0, gQ.jsx)("div", {
            className: "CantCtrlCrouchHeader",
            children: "Go fullscreen to crouch with ctrl"
          }), PQ && (0, gQ.jsx)("div", {
            className: "CantCtrlCrouchInstructions SmallTextLight",
            children: "Press the crazygames full screen button"
          }), (0, gQ.jsx)("div", {
            className: "CantCtrlCrouchSubtext SmallTextLight",
            children: "(Otherwise I can't stop CTRL+W closing the window!)"
          }), (0, gQ.jsxs)("div", {
            className: "CantCtrlCrouchButtonsContainer",
            children: [!PQ && (0, gQ.jsx)(IQ.s, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                (0, Yw.y)(), FQ()
              },
              children: (0, gQ.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Go Fullscreen"
              })
            }), (0, gQ.jsx)(IQ.P, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                FQ()
              },
              children: (0, gQ.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Nevermind"
              })
            })]
          })]
        })
      })
    }));
    var Ow = XQ(2911),
      Kw = XQ(2941),
      mw = XQ(1404),
      Mw = XQ(3835),
      Qq = XQ(1407),
      Wq = XQ(2954),
      Xq = XQ(3844),
      wq = XQ(3853);

    function qq(QQ, WQ) {
      return (0, Wq.h)(!0, QQ, WQ) ? () => {
        !async function(QQ) {
          await Mw.d.refresh();
          const {
            data: WQ,
            failed: XQ
          } = Mw.d.getState();
          if (null === WQ || XQ) return;
          const wQ = Mw.d.getExclusion(QQ);
          if ("blocked" === wQ) return;
          const qQ = null === wQ;
          mw.NotificationProvider.showCustomPopup({
            body: WQ => {
              const XQ = XQ => ({
                text: Xq.h[XQ].text,
                onClick: () => {
                  WQ(), (0, wq.d)(XQ, QQ, null)
                }
              });
              return (0, gQ.jsx)(Qq.g, {
                title: qQ ? "socialBar:ignoreOrBlockAfterReport" : "socialBar:blockAfterReport",
                textOpts: {
                  title: {
                    playerName: QQ
                  }
                },
                secondary: qQ ? XQ("ignore") : void 0,
                confirm: XQ("block"),
                cancel: {
                  text: "socialBar:notNow",
                  onClick: WQ
                },
                destructive: !0
              })
            },
            disableExitButton: !0,
            unlockPointerKey: "exclusionAfterReport"
          })
        }(QQ)
      } : null
    }
    XQ(2926);
    const Tq = (0, qQ.memo)((function(QQ) {
      let {
        show: WQ,
        onOpen: XQ,
        onClose: wQ
      } = QQ;
      const [TQ, sQ] = (0, qQ.useState)(""), [FQ, JQ] = (0, qQ.useState)(""), [rQ, IQ] = (0, qQ.useState)(null), [jQ, BQ] = (0, qQ.useState)(null), yQ = (0, aQ.e)("hiddenPlayerNames"), VQ = {
        kind: "worldCodeLine",
        onSubmit: (QQ, WQ) => {
          wQ(), PQ.gameBridge.send("reportWorldCodeChat", {
            chatMsgId: jQ,
            mz: QQ,
            details: WQ
          })
        }
      }, DQ = {
        kind: "player",
        shownPlayerName: (0, WW.f)(TQ, yQ),
        onSubmit: (QQ, WQ) => {
          wQ(), (0, Kw.d)({
            playerId: FQ,
            playerName: TQ,
            chatMsgId: jQ,
            policyId: QQ,
            details: WQ,
            onAccepted: qq(TQ, yQ)
          })
        }
      };
      return (0, dQ.f)("OpenReportMenu", (QQ => {
        let {
          playerEId: WQ,
          playerName: wQ,
          cg: qQ,
          serverChatMsgId: TQ
        } = QQ;
        JQ(WQ), sQ(wQ), IQ(qQ), BQ(TQ), XQ()
      })), (0, gQ.jsx)(zQ.b, {
        show: WQ,
        close: wQ,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeReportComponent",
        children: (0, gQ.jsx)("div", {
          className: "ReportPanel",
          children: WQ && (0, gQ.jsx)(Ow.d, {
            reported: null === FQ ? VQ : DQ,
            chatMessage: rQ,
            inGame: !0,
            onCancel: wQ
          })
        })
      })
    }));
    var zq = XQ(37149),
      sq = XQ(2919);
    const Fq = {
        playerGone: "report:reportKeyPlayerGone",
        rateLimited: "report:reportKeyRateLimited",
        timedOut: "report:reportKeyTimedOut"
      },
      Pq = (0, qQ.memo)((function(QQ) {
        var WQ, XQ;
        let {
          show: wQ,
          onOpen: TQ,
          onClose: sQ
        } = QQ;
        const {
          t: FQ
        } = (0, ZQ.C)(), [JQ, rQ] = (0, qQ.useState)(null), [jQ, BQ] = (0, qQ.useState)(0);
        (0, dQ.f)("OpenDiscordReportBox", (QQ => {
          PQ.gameBridge.send("requestDiscordReportKey", QQ), rQ(null), BQ(0), TQ()
        })), (0, dQ.f)("setDiscordReportKey", rQ);
        const yQ = wQ && null === JQ;
        (0, qQ.useEffect)((() => {
          if (!yQ) return;
          const QQ = setTimeout((() => {
            console.warn("No answer to a Discord report key request within 10000 ms"), rQ({
              nT: null,
              xT: "timedOut"
            })
          }), 1e4);
          return () => {
            clearTimeout(QQ)
          }
        }), [yQ]);
        const VQ = null !== (WQ = null === JQ || void 0 === JQ ? void 0 : JQ.nT) && void 0 !== WQ ? WQ : null,
          DQ = null !== (XQ = null === JQ || void 0 === JQ ? void 0 : JQ.xT) && void 0 !== XQ ? XQ : null;
        return (0, gQ.jsx)(zQ.b, {
          show: wQ,
          close: sQ,
          padShowsHud: !0,
          togglePointerLock: !1,
          escDoesExit: !0,
          className: "ReportBackgroundScreen",
          globallyUniqueKey: "MakeDiscordReportComponent",
          children: (0, gQ.jsx)("div", {
            className: "ReportPanel",
            children: (0, gQ.jsxs)(Qq.g, {
              className: "ReportKeyBox",
              title: "report:discordReportTitle",
              subtitle: null === DQ ? "report:discordReportDescription" : void 0,
              confirm: null === DQ ? {
                text: "report:openDiscord",
                onClick: () => {
                  window.open(zq.c, "_blank", "noreferrer")
                },
                padMouseOnly: !0
              } : void 0,
              cancel: {
                text: null === DQ ? "general:cancel" : "general:ok",
                onClick: sQ
              },
              padStartsOn: "cancel",
              children: [null !== DQ && (0, gQ.jsx)(sq.c, {
                children: FQ(Fq[DQ])
              }), null === DQ && (0, gQ.jsxs)("div", {
                className: "ReportKeyRow",
                children: [(0, gQ.jsx)("div", {
                  className: "ReportKeyInner",
                  children: null !== VQ && void 0 !== VQ ? VQ : FQ("report:loadingReportKey")
                }), (0, gQ.jsx)(IQ.h, {
                  className: "ReportKeyCopyButton",
                  onClick: () => {
                    navigator.clipboard.writeText(VQ).catch((QQ => {
                      console.error("Failed to copy report key:", QQ)
                    })), BQ(Date.now())
                  },
                  disabled: Date.now() - jQ < 1e3 || !VQ,
                  children: Date.now() - jQ < 1e3 ? FQ("general:copied") : FQ("general:copy")
                })]
              })]
            })
          })
        })
      }));
    var gq = XQ(1335);
    const Jq = {
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
      rq = (0, qQ.memo)((function(QQ) {
        let {
          show: WQ,
          onOpen: XQ,
          onClose: wQ
        } = QQ;
        const [TQ, sQ] = (0, qQ.useState)(null), FQ = (0, qQ.useRef)(0), JQ = (0, qQ.useRef)(null), {
          t: rQ
        } = (0, ZQ.C)();
        (0, dQ.f)("EditCustomLobbyBlock", (QQ => {
          let {
            pos: WQ
          } = QQ;
          sQ(WQ), null !== WQ && XQ(), JQ.current.scrollTo(0, FQ.current)
        }));
        const IQ = QQ => {
          PQ.gameBridge.send("setCustomLobbyBlock", {
            pos: TQ,
            blockName: QQ
          }), wQ()
        };
        return (0, gQ.jsx)(zQ.b, {
          className: "CustomLobbyBlockEditorOuter",
          close: wQ,
          escDoesExit: !0,
          show: WQ,
          togglePointerLock: !1,
          globallyUniqueKey: "CustomLobbyBlockEditor",
          children: (0, gQ.jsx)("div", {
            className: "CustomLobbyBlockEditor",
            ref: JQ,
            onScroll: () => {
              FQ.current = JQ.current.scrollTop
            },
            children: (0, gQ.jsx)("div", {
              className: "CustomLobbyBlockGameContainer",
              children: Object.entries(Jq).map((QQ => {
                let [WQ, XQ] = QQ;
                return (0, gQ.jsxs)("div", {
                  className: "CustomLobbyBlockGame",
                  children: [(0, gQ.jsx)("h2", {
                    className: "CustomLobbyBlockGameTitle",
                    children: rQ(WQ)
                  }), (0, gQ.jsx)("div", {
                    className: "CustomLobbyBlockCategoryContainer",
                    children: Object.entries(XQ).map((QQ => {
                      let [WQ, {
                        tooltip: XQ,
                        blocks: wQ
                      }] = QQ;
                      return (0, gQ.jsxs)("div", {
                        className: "CustomLobbyBlockCategory",
                        children: [(0, gQ.jsxs)("h3", {
                          className: "CustomLobbyBlockCategoryTitle",
                          children: [rQ(WQ), (0, gQ.jsx)(YQ.b, {
                            hoverInfo: rQ(XQ),
                            className: "CustomLobbyBlockTooltip"
                          })]
                        }), (0, gQ.jsx)("div", {
                          className: "CustonLobbyBlockContainer",
                          children: wQ.map((QQ => (0, gQ.jsx)(Iq, {
                            blockName: QQ,
                            selectBlock: IQ
                          }, QQ)))
                        })]
                      }, WQ)
                    }))
                  })]
                }, WQ)
              }))
            })
          })
        })
      })),
      Iq = (0, qQ.memo)((function(QQ) {
        var WQ;
        let {
          blockName: XQ,
          selectBlock: wQ
        } = QQ;
        const qQ = (0, zw.c)(XQ),
          TQ = null !== (WQ = void 0 === qQ ? void 0 : (0, Tw.displayNameOf)(qQ)) && void 0 !== WQ ? WQ : XQ,
          zQ = void 0 === qQ ? void 0 : (0, Tw.descriptionOf)(qQ);
        return (0, gQ.jsx)(YQ.e, {
          tooltipInner: (0, gQ.jsxs)("div", {
            className: "CustomLobbyBlockNameTooltip",
            children: [(0, gQ.jsx)("div", {
              className: "CustomLobbyBlockName",
              children: (0, gQ.jsx)(vQ.e, {
                text: TQ
              })
            }), zQ && (0, gQ.jsx)("div", {
              className: "CustomLobbyBlockDescription",
              children: (0, gQ.jsx)(vQ.e, {
                text: zQ
              })
            })]
          }),
          children: (0, gQ.jsx)("div", {
            className: "CustomLobbyBlockButton",
            onClick: () => wQ(XQ),
            children: (0, gQ.jsx)(TX.d, {
              itemName: XQ,
              amount: 1
            })
          })
        }, XQ)
      }));
    var jq = XQ(2728),
      Bq = XQ(4526),
      yq = XQ(34541);

    function Vq() {
      const QQ = (0, aQ.e)("itemInfo");
      return (0, qQ.useMemo)((() => function(QQ) {
        return {
          getDefaultItemStat(WQ, XQ) {
            var wQ;
            const qQ = QQ[WQ];
            return "description" === XQ ? null === qQ || void 0 === qQ ? void 0 : qQ.description : null !== (wQ = null === qQ || void 0 === qQ ? void 0 : qQ.displayName) && void 0 !== wQ ? wQ : WQ
          }
        }
      }(QQ)), [QQ])
    }
    const Dq = (0, qQ.memo)((function(QQ) {
        var WQ, XQ, wQ, TQ, sQ, FQ, PQ, JQ, rQ, IQ, jQ, BQ, VQ, DQ, pQ, GQ, UQ, bQ, vQ, HQ, aQ, lQ, hQ;
        let {
          togglePointerLock: iQ,
          show: cQ,
          onOpen: AQ,
          onClose: RQ
        } = QQ;
        const {
          t: EQ
        } = (0, ZQ.C)(), CQ = Vq(), uQ = (0, qQ.useRef)(null), LQ = (0, qQ.useRef)(Bq.e.MobHungerLevel.Hungry), kQ = (0, qQ.useRef)(null), fQ = (0, jq.d)(), SQ = (0, qQ.useRef)(null), tQ = (0, qQ.useRef)(null), oQ = uQ.current;
        (0, qQ.useEffect)((() => {
          if (!cQ) return;
          const QQ = yq.h.openPet(SQ.current);
          return tQ.current = QQ, () => {
            QQ.close(), tQ.current = null
          }
        }), [cQ]), (0, qQ.useEffect)((() => {
          cQ && oQ && tQ.current.show(function(QQ) {
            var WQ;
            let {
              mobType: XQ,
              mobSettings: wQ
            } = QQ;
            return {
              mobType: XQ,
              variation: null !== (WQ = wQ.variation) && void 0 !== WQ ? WQ : "default",
              metaInfo: wQ.metaInfo,
              tamed: !(0, Dw.G)(wQ.ownerDbId)
            }
          }(oQ))
        }), [cQ, oQ]), (0, qQ.useEffect)((() => {
          const QQ = () => {
            var QQ;
            const WQ = Bq.e.getMobHungerLevel(null === (QQ = uQ.current) || void 0 === QQ ? void 0 : QQ.mobSettings.petInfo.lastFedAt);
            if (WQ !== LQ.current && (LQ.current = WQ, fQ()), kQ.current) {
              var XQ;
              const QQ = Date.now(),
                WQ = Bq.e.getNextStateAt(null === (XQ = uQ.current) || void 0 === XQ ? void 0 : XQ.mobSettings.petInfo.lastFedAt);
              let wQ = Math.floor((WQ - QQ) / 1e3),
                qQ = "";
              if (wQ > 3600) {
                qQ += Math.floor(wQ / 60 / 60).toString().padStart(2, "0"), qQ += ":", wQ %= 3600
              }
              const TQ = wQ % 60;
              qQ += Math.floor(wQ / 60).toString().padStart(2, "0"), qQ += ":", qQ += TQ.toString().padStart(2, "0"), kQ.current.textContent = qQ
            }
          };
          QQ();
          const WQ = setInterval(QQ, 250);
          return () => {
            clearInterval(WQ)
          }
        }), [oQ, fQ]), (0, dQ.f)("showPetUi", (QQ => {
          let {
            mobType: WQ,
            mobSettings: XQ
          } = QQ;
          uQ.current = {
            mobType: WQ,
            mobSettings: XQ
          }, cQ || AQ()
        }));
        const eQ = null === (WQ = uQ.current) || void 0 === WQ ? void 0 : WQ.mobSettings.health,
          nQ = null === (XQ = uQ.current) || void 0 === XQ ? void 0 : XQ.mobSettings.maxHealth,
          xQ = Bq.e.getFriendshipLevelInfo(null !== (wQ = null === (TQ = uQ.current) || void 0 === TQ ? void 0 : TQ.mobSettings.petInfo.friendshipPoints) && void 0 !== wQ ? wQ : 0);
        return (0, gQ.jsx)(zQ.b, {
          className: "PetUIOuter",
          close: RQ,
          escDoesExit: !0,
          show: cQ,
          togglePointerLock: iQ,
          forcePointerUnlock: cQ,
          globallyUniqueKey: "PetUI",
          children: (0, gQ.jsx)("div", {
            className: "PetUI",
            children: (0, gQ.jsxs)("div", {
              className: "PetUIContainer",
              children: [(0, gQ.jsxs)("div", {
                className: "PetUILeftSideContainer",
                children: [(0, gQ.jsx)("div", {
                  className: "PetUITitle",
                  children: null !== (sQ = null === (FQ = uQ.current) || void 0 === FQ ? void 0 : FQ.mobSettings.name) && void 0 !== sQ ? sQ : "Your Pet"
                }), (0, gQ.jsx)("div", {
                  className: "PetUICanvasContainer",
                  ref: SQ
                })]
              }), (0, gQ.jsxs)("div", {
                className: "PetUIInformation",
                children: [!(0, Dw.G)(null === (PQ = uQ.current) || void 0 === PQ ? void 0 : PQ.mobSettings.petInfo.friendshipPoints) && (0, gQ.jsxs)("div", {
                  className: "PetUIFriendshipPoints",
                  children: [(0, gQ.jsx)("div", {
                    className: "PetUIFriendshipPointsTitle",
                    children: EQ("mobAiPlugin:friendshipTitle")
                  }), (0, gQ.jsx)("div", {
                    className: "PetUIFriendshipHearts",
                    children: Bq.e.getIconsFromFriendshipPoints(null !== (JQ = uQ.current.mobSettings.petInfo.friendshipPoints) && void 0 !== JQ ? JQ : 0).map(((QQ, WQ) => (0, gQ.jsx)("div", {
                      className: "PetUIFriendshipHeart",
                      children: (0, gQ.jsx)(TX.d, {
                        itemName: QQ,
                        amount: 1
                      })
                    }, WQ)))
                  }), (0, gQ.jsx)("div", {
                    className: "PetUIFriendshipBar",
                    children: (0, gQ.jsxs)("div", {
                      className: "PetUIFriendshipBarBackground",
                      children: [(0, gQ.jsx)("div", {
                        className: "PetUIFriendshipBarForeground",
                        style: {
                          transform: `scaleX(${xQ.totalPointsForNextLevel>0?Math.max(xQ.pointsIntoCurrentLevel/xQ.totalPointsForNextLevel,0):1})`,
                          transformOrigin: "left center"
                        }
                      }), (0, gQ.jsx)("div", {
                        className: "PetUIFriendshipBarText",
                        children: xQ.totalPointsForNextLevel > 0 ? ` ${Math.ceil(xQ.pointsIntoCurrentLevel)}/${Math.ceil(xQ.totalPointsForNextLevel)}` : Math.ceil(xQ.pointsIntoCurrentLevel)
                      })]
                    })
                  })]
                }), (0, gQ.jsxs)("div", {
                  className: "PetUIHungry",
                  children: [(0, gQ.jsx)("div", {
                    className: "PetUIHungryTitle",
                    children: EQ("mobAiPlugin:hungerTitle")
                  }), (0, gQ.jsx)("div", {
                    className: "PetUIHungryCurrent",
                    children: Bq.e.hungerLevelIcons[LQ.current].map(((QQ, WQ) => (0, gQ.jsx)("div", {
                      className: "PetUIHungryIcon",
                      children: (0, gQ.jsx)(TX.d, {
                        itemName: QQ,
                        amount: 1
                      })
                    }, WQ)))
                  }), (0, gQ.jsxs)("div", {
                    className: "PetUIHungryLevel",
                    children: [EQ(Bq.e.hungerLevelTranslations[LQ.current].translationKey), LQ.current !== Bq.e.MobHungerLevel.Starving && !(0, Dw.G)(null === (rQ = uQ.current) || void 0 === rQ ? void 0 : rQ.mobSettings.petInfo.lastFedAt) && (0, gQ.jsxs)("div", {
                      className: "PetUIHungryNext",
                      children: [EQ("mobAiPlugin:nextFeedIn", {
                        state: EQ(Bq.e.hungerLevelTranslations[LQ.current + 1].translationKey)
                      }), ":", " ", (0, gQ.jsx)("span", {
                        ref: kQ
                      })]
                    })]
                  })]
                }), (0, gQ.jsx)(YQ.e, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, gQ.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: EQ("mobAiPlugin:healthTooltip")
                  }),
                  children: (0, gQ.jsxs)("div", {
                    className: pX()("PetUIQuickStatsItem", {
                      Disabled: (0, Dw.G)(eQ) || (0, Dw.G)(nQ)
                    }),
                    children: [(0, gQ.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, gQ.jsx)(TX.d, {
                        itemName: "Health",
                        amount: 1
                      })
                    }), (0, gQ.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (0, Dw.G)(eQ) || (0, Dw.G)(nQ) ? "" : (0, gQ.jsxs)(gQ.Fragment, {
                        children: [Math.ceil(eQ), (0, gQ.jsxs)("span", {
                          className: "PetUIQuickStatsValueMax",
                          children: ["/", Math.ceil(nQ)]
                        })]
                      })
                    })]
                  })
                }), (0, gQ.jsx)(YQ.e, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, gQ.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: EQ("mobAiPlugin:attackDamageTooltip")
                  }),
                  children: (0, gQ.jsxs)("div", {
                    className: pX()("PetUIQuickStatsItem", {
                      Disabled: (0, Dw.G)(null === (IQ = uQ.current) || void 0 === IQ ? void 0 : IQ.mobSettings.attackDamage) || uQ.current.mobSettings.attackDamage <= 0
                    }),
                    children: [(0, gQ.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, gQ.jsx)(TX.d, {
                        itemName: "Iron Sword",
                        amount: 1
                      })
                    }), (0, gQ.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (jQ = uQ.current) || void 0 === jQ ? void 0 : jQ.mobSettings.attackDamage) || ""
                    })]
                  })
                }), (0, gQ.jsx)(YQ.e, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, gQ.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: EQ("mobAiPlugin:secondaryAttackDamageTooltip")
                  }),
                  children: (0, gQ.jsxs)("div", {
                    className: pX()("PetUIQuickStatsItem", {
                      Disabled: (0, Dw.G)(null === (BQ = uQ.current) || void 0 === BQ ? void 0 : BQ.mobSettings.secondaryAttackDamage) || uQ.current.mobSettings.secondaryAttackDamage <= 0
                    }),
                    children: [(0, gQ.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, gQ.jsx)(TX.d, {
                        itemName: "Stone Crossbow",
                        amount: 1
                      })
                    }), (0, gQ.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (VQ = uQ.current) || void 0 === VQ ? void 0 : VQ.mobSettings.secondaryAttackDamage) || ""
                    })]
                  })
                }), (0, gQ.jsx)(YQ.e, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, gQ.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: EQ("mobAiPlugin:speedTooltip")
                  }),
                  children: (0, gQ.jsxs)("div", {
                    className: pX()("PetUIQuickStatsItem", {
                      Disabled: (0, Dw.G)(null === (DQ = uQ.current) || void 0 === DQ ? void 0 : DQ.mobSettings.baseRunningSpeed)
                    }),
                    children: [(0, gQ.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, gQ.jsx)(TX.d, {
                        itemName: "Speed",
                        amount: 1
                      })
                    }), (0, gQ.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: null !== (pQ = null === (GQ = uQ.current) || void 0 === GQ || null === (UQ = GQ.mobSettings.baseRunningSpeed) || void 0 === UQ ? void 0 : UQ.toFixed(2)) && void 0 !== pQ ? pQ : ""
                    })]
                  })
                }), (0, gQ.jsx)(YQ.e, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, gQ.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: EQ("mobAiPlugin:saddledTooltip")
                  }),
                  children: (0, gQ.jsxs)("div", {
                    className: pX()("PetUIQuickStatsItem", {
                      Disabled: "Saddled" !== (null === (bQ = uQ.current) || void 0 === bQ ? void 0 : bQ.mobSettings.metaInfo)
                    }),
                    children: [(0, gQ.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, gQ.jsx)(TX.d, {
                        itemName: "Saddle",
                        amount: 1
                      })
                    }), (0, gQ.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: "Saddled" === (null === (vQ = uQ.current) || void 0 === vQ ? void 0 : vQ.mobSettings.metaInfo) ? (0, gQ.jsx)(yQ.d, {
                        name: "check"
                      }) : ""
                    })]
                  })
                }), !(0, Dw.G)(null === (HQ = uQ.current) || void 0 === HQ ? void 0 : HQ.mobSettings.tameInfo) && (0, gQ.jsxs)(gQ.Fragment, {
                  children: [(0, gQ.jsxs)("div", {
                    className: "PetUIFood",
                    children: [(0, gQ.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, gQ.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, gQ.jsx)(Gq, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:superlikedFoodTitle"
                          },
                          description: null,
                          tintColor: Bq.e.feedTextColours[Bq.e.MobFoodType.Superliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, gQ.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: (0, gQ.jsx)("div", {
                          className: "PetUIFoodItem",
                          children: uQ.current.mobSettings.petInfo.superlikedFoodKnown ? (0, gQ.jsx)(pq, {
                            food: uQ.current.mobSettings.petInfo.superlikedFood
                          }) : (0, gQ.jsx)(Gq, {
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
                    }), (0, gQ.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, gQ.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, gQ.jsx)(Gq, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:likedFoodTitle"
                          },
                          description: null,
                          tintColor: Bq.e.feedTextColours[Bq.e.MobFoodType.Liked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, gQ.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (aQ = uQ.current.mobSettings.tameInfo.likedFoods) || void 0 === aQ ? void 0 : aQ.filter((QQ => !uQ.current.mobSettings.petInfo.superlikedFoodKnown || QQ !== uQ.current.mobSettings.petInfo.superlikedFood)).map((QQ => (0, gQ.jsx)(pq, {
                          food: QQ
                        }, QQ)))
                      })]
                    }), (0, gQ.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, gQ.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, gQ.jsx)(Gq, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:neutralFoodTitle"
                          },
                          description: null,
                          tintColor: Bq.e.feedTextColours[Bq.e.MobFoodType.Neutral],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, gQ.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (lQ = uQ.current.mobSettings.tameInfo.neutralFoods) || void 0 === lQ ? void 0 : lQ.map((QQ => (0, gQ.jsx)(pq, {
                          food: QQ
                        }, QQ)))
                      })]
                    }), (0, gQ.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, gQ.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, gQ.jsx)(Gq, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:dislikedFoodTitle"
                          },
                          description: null,
                          tintColor: Bq.e.feedTextColours[Bq.e.MobFoodType.Disliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, gQ.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (hQ = uQ.current.mobSettings.tameInfo.dislikedFoods) || void 0 === hQ ? void 0 : hQ.map((QQ => (0, gQ.jsx)(pq, {
                          food: QQ
                        }, QQ)))
                      })]
                    })]
                  }), uQ.current.mobSettings.tameInfo.levelUpBonuses && (0, gQ.jsx)("div", {
                    className: "PetUIFeedDrops",
                    children: Array.from({
                      length: Bq.e.MAX_LEVEL + 1
                    }).map(((QQ, WQ) => {
                      const XQ = WQ;
                      if (0 === XQ) return null;
                      const wQ = uQ.current.mobSettings.tameInfo.levelUpBonuses[XQ],
                        qQ = Bq.e.getBonusDisplayInfo(CQ, uQ.current.mobSettings, uQ.current.mobType, wQ);
                      return (0, gQ.jsxs)("div", {
                        className: pX()("PetUIFeedDropContainer", {
                          Selected: XQ === Bq.e.getFriendshipLevelInfo(uQ.current.mobSettings.petInfo.friendshipPoints).level
                        }),
                        children: [(0, gQ.jsx)("div", {
                          className: "PetUIFeedDropHearts",
                          children: Array.from({
                            length: XQ
                          }).map(((QQ, WQ) => (0, gQ.jsx)("div", {
                            className: "PetUIFeedDropHeart",
                            children: (0, gQ.jsx)(TX.d, {
                              itemName: "Friendship",
                              amount: 1
                            })
                          }, `${XQ}-${WQ}`)))
                        }), (0, gQ.jsx)("div", {
                          className: "PetUIFeedDropItems",
                          children: qQ && (0, gQ.jsx)(Gq, {
                            icon: qQ.icon,
                            displayName: qQ.displayName,
                            description: qQ.description
                          })
                        })]
                      }, XQ)
                    }))
                  })]
                })]
              })]
            })
          })
        })
      })),
      pq = (0, qQ.memo)((function(QQ) {
        let {
          food: WQ,
          includeDescription: XQ = !1
        } = QQ;
        const wQ = Vq(),
          qQ = wQ.getDefaultItemStat(WQ, "displayName"),
          TQ = wQ.getDefaultItemStat(WQ, "description");
        return (0, gQ.jsx)(Gq, {
          icon: WQ,
          displayName: qQ,
          description: XQ ? TQ : null
        })
      })),
      Gq = (0, qQ.memo)((function(QQ) {
        let {
          icon: WQ,
          displayName: XQ,
          description: wQ,
          tintColor: qQ,
          className: TQ = "PetUIFoodItem"
        } = QQ;
        return (0, gQ.jsx)(YQ.e, {
          delayHide: 0,
          delayShow: 0,
          tooltipInner: (0, gQ.jsxs)("div", {
            className: "PetUIFoodItemTooltip",
            children: [(0, gQ.jsx)("div", {
              className: "PetUIFoodItemName",
              children: (0, gQ.jsx)(vQ.e, {
                text: XQ
              })
            }), wQ && (0, gQ.jsx)("div", {
              className: "PetUIFoodItemDescription",
              children: (0, gQ.jsx)(vQ.e, {
                text: wQ
              })
            })]
          }),
          children: (0, gQ.jsx)("div", {
            className: TQ,
            children: (0, gQ.jsx)(TX.d, {
              itemName: WQ,
              amount: 1,
              tintColor: qQ
            })
          })
        })
      }));
    var Uq = XQ(3984),
      bq = XQ(1165),
      vq = XQ(1273),
      dq = XQ(2531),
      Hq = XQ(37158),
      aq = XQ(1049),
      lq = XQ(2451);

    function hq(QQ) {
      let {
        peers: WQ
      } = QQ;
      const [XQ, wQ] = (0, qQ.useState)(null), TQ = (0, aQ.e)("players");
      return (0, gQ.jsx)("div", {
        className: "CodeEditorPresence",
        children: WQ.map((QQ => {
          var WQ, qQ;
          const zQ = null !== (WQ = null === (qQ = TQ.byId[QQ.playerId]) || void 0 === qQ ? void 0 : qQ.cosmetics) && void 0 !== WQ ? WQ : {};
          return (0, gQ.jsxs)("div", {
            className: pX()("PresenceIcon", {
              Viewer: !QQ.isEditor
            }),
            style: {
              backgroundColor: QQ.colour
            },
            onMouseEnter: () => {
              wQ(QQ.playerId)
            },
            onMouseLeave: () => {
              wQ(null)
            },
            children: [(0, gQ.jsx)(lq.d, {
              cosmetics: zQ
            }), XQ === QQ.playerId && (0, gQ.jsx)("div", {
              className: "PresenceTooltip",
              style: {
                backgroundColor: QQ.colour
              },
              children: QQ.playerName
            })]
          }, QQ.playerId)
        }))
      })
    }
    var iq = XQ(695),
      cq = XQ(37152),
      Aq = XQ(36849),
      Rq = XQ(37163);

    function Eq(QQ) {
      const WQ = QQ.split("/"),
        XQ = [];
      for (let wQ = 1; wQ < WQ.length; wQ++) XQ.push(WQ.slice(0, wQ).join("/"));
      return XQ
    }

    function Cq(QQ) {
      return QQ.slice(QQ.lastIndexOf("/") + 1)
    }
    const uq = (0, qQ.memo)((function(QQ) {
      var WQ;
      let {
        files: XQ,
        activePath: wQ,
        canEdit: TQ,
        directoryLinked: zQ,
        pluginNames: sQ,
        activePluginName: FQ,
        activePluginFile: PQ,
        onSelect: JQ,
        onSelectPlugin: rQ,
        onCreate: jQ,
        onRename: BQ,
        onRenameFolder: VQ,
        onDelete: DQ,
        onToggleDirectorySync: pQ,
        schematics: GQ,
        onManageSchematic: UQ
      } = QQ;
      const {
        t: bQ
      } = (0, ZQ.C)(), vQ = null !== (WQ = (0, Hq.c)(XQ)) && void 0 !== WQ ? WQ : vq.j, dQ = Object.keys(XQ), [HQ, aQ] = (0, qQ.useState)((() => new Set)), lQ = function(QQ, WQ, XQ) {
        const wQ = {
          folders: new Map,
          files: []
        };
        for (const zQ of QQ) {
          if (zQ === WQ) continue;
          let QQ = wQ;
          for (const WQ of Eq(zQ)) {
            let XQ = QQ.folders.get(WQ);
            XQ || (XQ = {
              folders: new Map,
              files: []
            }, QQ.folders.set(WQ, XQ)), QQ = XQ
          }
          QQ.files.push(zQ)
        }
        const qQ = [];
        QQ.includes(WQ) && qQ.push({
          kind: "file",
          path: WQ,
          name: Cq(WQ),
          depth: 0
        });
        const TQ = (QQ, WQ) => {
          const wQ = [...QQ.folders.entries()].sort(((QQ, WQ) => {
            let [XQ] = QQ, [wQ] = WQ;
            return XQ.localeCompare(wQ)
          }));
          for (const [zQ, sQ] of wQ) {
            const QQ = XQ.has(zQ);
            qQ.push({
              kind: "folder",
              path: zQ,
              name: Cq(zQ),
              depth: WQ,
              collapsed: QQ
            }), QQ || TQ(sQ, WQ + 1)
          }
          QQ.files.sort(((QQ, WQ) => QQ.localeCompare(WQ)));
          for (const XQ of QQ.files) qQ.push({
            kind: "file",
            path: XQ,
            name: Cq(XQ),
            depth: WQ
          })
        };
        return TQ(wQ, 0), qQ
      }(dQ, vQ, HQ);
      (0, qQ.useEffect)((() => {
        aQ((QQ => {
          const WQ = new Set(QQ);
          let XQ = !1;
          for (const qQ of Eq(wQ)) XQ = WQ.delete(qQ) || XQ;
          return XQ ? WQ : QQ
        }))
      }), [wQ]);
      const hQ = dQ.length >= tW.D,
        iQ = (QQ, WQ) => {
          if (QQ.length > dq.x) return `Path must be at most ${dq.x} characters`;
          if (!(0, dq.t)(QQ)) return "Use a relative .js, .ts, or .d.ts path, e.g. lib/util.js";
          if ("index.d.ts" === QQ) return "index.d.ts cannot be the world-code entry";
          const wQ = !!WQ && (0, Hq.g)(WQ, QQ);
          if (WQ && (0, Hq.h)(WQ) && !wQ) return `Cannot rename ${WQ} (only swapping ${vq.j} and ${vq.k} is allowed)`;
          if (QQ in XQ) return "A file with that path already exists";
          if ((0, Hq.h)(QQ) && !wQ) {
            if ((QQ === vq.j ? vq.k : vq.j) in XQ) return `World code cannot have both ${vq.j} and ${vq.k}`
          }
          return null
        },
        cQ = QQ => {
          mw.NotificationProvider.showInputPopup({
            title: "codeEditor:newFile",
            subtitle: "codeEditor:newFilePathHint",
            placeholderText: "lib/util.js",
            initialValue: void 0 === QQ ? void 0 : `${QQ}/`,
            submitText: "general:create",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: QQ => iQ(QQ)
          }).getResult().then((QQ => {
            "notificationTornDown" !== QQ && null !== QQ && "submit" === QQ.type && jQ(QQ.value)
          }))
        },
        AQ = QQ => {
          mw.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFile",
            subtitle: "codeEditor:newFilePathHint",
            initialValue: QQ,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: WQ => WQ === QQ ? "That is already the file's path" : iQ(WQ, QQ)
          }).getResult().then((WQ => {
            "notificationTornDown" !== WQ && null !== WQ && "submit" === WQ.type && BQ(QQ, WQ.value)
          }))
        },
        RQ = QQ => {
          const WQ = QQ => QQ.replace(/\/+$/, "");
          mw.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFolder",
            subtitle: "codeEditor:renameFolderHint",
            initialValue: QQ,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: XQ => {
              const wQ = WQ(XQ);
              if (wQ === QQ) return "That is already the folder's path";
              for (const [WQ, qQ] of(0, Hq.l)(dQ, QQ, wQ)) {
                const QQ = iQ(qQ, WQ);
                if (null !== QQ) return QQ
              }
              return null
            }
          }).getResult().then((XQ => {
            "notificationTornDown" !== XQ && null !== XQ && "submit" === XQ.type && VQ(QQ, WQ(XQ.value))
          }))
        },
        EQ = QQ => {
          mw.NotificationProvider.showPromptPopup({
            title: "codeEditor:deleteFile",
            subtitle: "codeEditor:deleteFileConfirm",
            textOpts: {
              subtitle: {
                path: QQ
              }
            },
            confirmText: "general:delete",
            destructive: !0,
            cancelText: "general:cancel"
          }).getResult().then((WQ => {
            !0 === WQ && DQ(QQ)
          }))
        };
      return (0, gQ.jsxs)("div", {
        className: "CodeEditorFileTree",
        children: [(0, gQ.jsxs)("div", {
          className: "FileTreeHeader",
          children: [(0, gQ.jsx)("span", {
            children: "Files"
          }), TQ && !hQ && (0, gQ.jsx)(IQ.y, {
            className: "FileTreeHeaderButton",
            onClick: () => {
              cQ()
            },
            children: (0, gQ.jsx)(yQ.d, {
              name: "plus"
            })
          })]
        }), (0, gQ.jsxs)("div", {
          className: "FileTreeList",
          children: [lQ.map((QQ => {
            const WQ = QQ.path;
            if ("folder" === QQ.kind) return (0, gQ.jsx)(fq, {
              path: WQ,
              name: QQ.name,
              depth: QQ.depth,
              collapsed: QQ.collapsed,
              onToggle: () => {
                var QQ;
                QQ = WQ, aQ((WQ => {
                  const XQ = new Set(WQ);
                  return XQ.delete(QQ) || XQ.add(QQ), XQ
                }))
              },
              canCreate: TQ && !hQ,
              canRename: TQ,
              onCreate: cQ,
              onRename: RQ
            }, `folder:${WQ}`);
            const qQ = (0, Hq.h)(WQ),
              zQ = vq.j in XQ && vq.k in XQ,
              sQ = !qQ || zQ,
              PQ = null === FQ && WQ === wQ;
            return (0, gQ.jsx)(tq, {
              path: WQ,
              label: QQ.name,
              depth: QQ.depth,
              isActive: PQ,
              canRename: TQ,
              onSelect: JQ,
              onRename: AQ,
              onDelete: EQ,
              canDelete: sQ && TQ
            }, WQ)
          })), (0, gQ.jsxs)("div", {
            className: "FileTreeHeader Secondary",
            children: [(0, gQ.jsxs)("span", {
              children: ["Schematics (", Object.keys(GQ).length, "/", Rq.f, ")"]
            }), TQ && (0, gQ.jsx)(IQ.y, {
              className: "FileTreeHeaderButton",
              disabled: Object.keys(GQ).length >= Rq.f,
              onClick: () => {
                UQ("")
              },
              children: (0, gQ.jsx)(yQ.d, {
                name: "plus"
              })
            })]
          }), Object.keys(GQ).sort().map((QQ => (0, gQ.jsx)(tq, {
            path: QQ,
            isActive: !1,
            canRename: !1,
            canDelete: !1,
            onSelect: UQ
          }, QQ))), sQ.length > 0 && (0, gQ.jsxs)(gQ.Fragment, {
            children: [(0, gQ.jsx)("div", {
              className: "FileTreeHeader Secondary",
              children: (0, gQ.jsx)("span", {
                children: "Plugins"
              })
            }), sQ.map((QQ => {
              var WQ;
              const XQ = cq.f[QQ],
                wQ = Object.keys(null !== (WQ = null === XQ || void 0 === XQ ? void 0 : XQ.files) && void 0 !== WQ ? WQ : {
                  "index.ts": ""
                }).sort(((QQ, WQ) => "index.ts" === QQ ? -1 : "index.ts" === WQ ? 1 : QQ.localeCompare(WQ)));
              return (0, gQ.jsxs)("div", {
                children: [(0, gQ.jsx)("div", {
                  className: "FileTreePluginName",
                  children: (0, Hq.x)(QQ)
                }), wQ.map((WQ => (0, gQ.jsx)(tq, {
                  path: WQ,
                  nested: !0,
                  isActive: FQ === QQ && PQ === WQ,
                  canRename: !1,
                  onSelect: () => {
                    rQ(QQ, WQ)
                  },
                  canDelete: !1
                }, WQ)))]
              }, QQ)
            }))]
          })]
        }), (0, gQ.jsx)("div", {
          className: "FileTreeFooter",
          children: (0, gQ.jsx)(IQ.h, {
            className: "FileTreeFooterButton",
            onClick: pQ,
            children: bQ(zQ ? "codeEditor:directorySyncUnlink" : "codeEditor:directorySyncLink")
          })
        })]
      })
    }));

    function Lq(QQ) {
      return QQ > 0 ? {
        className: "Indented",
        style: {
          "--tree-depth": QQ
        }
      } : {
        className: void 0,
        style: void 0
      }
    }

    function kq(QQ) {
      let {
        depth: WQ
      } = QQ;
      return (0, gQ.jsx)(gQ.Fragment, {
        children: Array.from({
          length: WQ
        }, ((QQ, WQ) => (0, gQ.jsx)("span", {
          className: "FileTreeIndentGuide",
          style: {
            "--guide-level": WQ
          }
        }, WQ)))
      })
    }

    function fq(QQ) {
      let {
        path: WQ,
        name: XQ,
        depth: wQ,
        collapsed: qQ,
        onToggle: TQ,
        canCreate: zQ,
        canRename: sQ,
        onCreate: FQ,
        onRename: PQ
      } = QQ;
      const JQ = [];
      zQ && JQ.push({
        icon: "plus",
        text: "codeEditor:newFile",
        onPointerDown: () => {
          FQ(WQ)
        }
      }), sQ && JQ.push({
        icon: "pen",
        text: "codeEditor:renameFolder",
        onPointerDown: () => {
          PQ(WQ)
        }
      });
      const rQ = Lq(wQ);
      return (0, gQ.jsxs)("div", {
        className: pX()("FileTreeItem FileTreeFolder", rQ.className),
        style: rQ.style,
        children: [(0, gQ.jsx)(kq, {
          depth: wQ
        }), (0, gQ.jsxs)("button", {
          type: "button",
          className: "FileTreeItemName",
          "aria-expanded": !qQ,
          onClick: TQ,
          children: [(0, gQ.jsx)(yQ.d, {
            className: "FileTreeFolderCaret",
            name: qQ ? "caret-right" : "caret-down"
          }), (0, gQ.jsx)(yQ.d, {
            className: "FileTreeFolderIcon",
            name: qQ ? "folder" : "folder-open"
          }), XQ]
        }), (0, gQ.jsx)(Sq, {
          path: WQ,
          actions: JQ
        })]
      })
    }

    function Sq(QQ) {
      let {
        path: WQ,
        actions: XQ
      } = QQ;
      const wQ = (0, qQ.useRef)(null);
      return 0 === XQ.length ? null : (0, gQ.jsxs)("div", {
        ref: wQ,
        className: "FileTreeItemActions",
        children: [(0, gQ.jsx)("button", {
          type: "button",
          className: "FileTreeActionMenuButton",
          "aria-label": `Actions for ${WQ}`,
          children: (0, gQ.jsx)(yQ.d, {
            name: "ellipsis"
          })
        }), (0, gQ.jsx)(Aq.e, {
          triggerElementRef: wQ,
          options: XQ
        })]
      })
    }

    function tq(QQ) {
      let {
        path: WQ,
        label: XQ = WQ,
        depth: wQ = 0,
        isActive: qQ,
        canRename: TQ,
        onSelect: zQ,
        onRename: sQ,
        onDelete: FQ,
        canDelete: PQ,
        nested: JQ
      } = QQ;
      const rQ = [];
      TQ && sQ && rQ.push({
        icon: "pen",
        text: "codeEditor:rename",
        onPointerDown: () => {
          sQ(WQ)
        }
      }), PQ && FQ && rQ.push({
        icon: "xmark",
        text: "general:delete",
        onPointerDown: () => {
          FQ(WQ)
        }
      });
      const IQ = Lq(wQ);
      return (0, gQ.jsxs)("div", {
        className: pX()("FileTreeItem", IQ.className, {
          Active: qQ,
          Nested: JQ
        }),
        style: IQ.style,
        children: [(0, gQ.jsx)(kq, {
          depth: wQ
        }), (0, gQ.jsx)("button", {
          type: "button",
          className: "FileTreeItemName",
          title: XQ === WQ ? void 0 : WQ,
          onClick: () => {
            zQ(WQ)
          },
          children: XQ
        }), (0, gQ.jsx)(Sq, {
          path: WQ,
          actions: rQ
        })]
      })
    }
    async function oq(QQ) {
      const WQ = (0, Hq.c)(QQ);
      if (!WQ || "" === QQ[WQ].trim()) return [];
      const {
        collectImportedWorldCodePluginNames: wQ
      } = await Promise.all([XQ.e(307), XQ.e(308)]).then((() => XQ(41718)));
      return (0, cq.d)(wQ(QQ))
    }
    var eq = XQ(37165);

    function nq(QQ, WQ) {
      const XQ = Object.keys(QQ),
        wQ = Object.keys(WQ);
      if (XQ.length !== wQ.length) return !1;
      for (const qQ of XQ)
        if (!(qQ in WQ) || QQ[qQ] !== WQ[qQ]) return !1;
      return !0
    }

    function xq(QQ, WQ) {
      const XQ = [],
        wQ = [],
        qQ = [];
      for (const TQ of Object.keys(WQ)) TQ in QQ ? QQ[TQ] !== WQ[TQ] && qQ.push(TQ) : XQ.push(TQ);
      for (const TQ of Object.keys(QQ)) TQ in WQ || wQ.push(TQ);
      return XQ.sort(), wQ.sort(), qQ.sort(), {
        creates: XQ,
        deletes: wQ,
        updates: qQ
      }
    }

    function Yq(QQ, WQ) {
      var XQ;
      const wQ = {
          ...QQ
        },
        qQ = (0, Hq.c)(WQ),
        TQ = (0, Hq.c)(wQ);
      if (vq.j in wQ && vq.k in wQ) {
        const QQ = null !== qQ && void 0 !== qQ ? qQ : vq.k,
          XQ = QQ === vq.j ? vq.k : vq.j;
        var zQ;
        if (!(QQ in wQ)) wQ[QQ] = null !== (zQ = WQ[QQ]) && void 0 !== zQ ? zQ : "";
        return delete wQ[XQ], wQ
      }
      var sQ;
      return qQ && !(qQ in wQ) ? (TQ || (wQ[qQ] = null !== (sQ = WQ[qQ]) && void 0 !== sQ ? sQ : ""), wQ) : (TQ || qQ || (wQ[vq.j] = null !== (XQ = wQ[vq.j]) && void 0 !== XQ ? XQ : "", delete wQ[vq.k]), wQ)
    }

    function Nq(QQ, WQ) {
      const XQ = (0, Hq.c)(WQ),
        wQ = vq.j in WQ && vq.k in WQ;
      return QQ.filter((QQ => !(0, Hq.h)(QQ) || (!!wQ || XQ !== QQ)))
    }
    async function Zq(QQ, WQ, wQ) {
      const qQ = QQ.getLobbyFiles(),
        TQ = (0, tW.m)(wQ, (0, Hq.o)(qQ, WQ)),
        zQ = await QQ.ensureJoined(WQ),
        sQ = (0, dq.y)(zQ.docKey);
      if (zQ.doc === TQ) return;
      for (let XQ = 0; XQ < 100; XQ++) {
        const XQ = QQ.getCollabSnapshot();
        if (XQ && (0, dq.y)(XQ.docKey) === sQ && QQ.getActivePath() === WQ) {
          if (QQ.replaceActiveDoc(sQ, TQ)) return;
          await (0, Dw.L)(40)
        } else await (0, Dw.L)(40)
      }
      const {
        ChangeSet: FQ
      } = await XQ.e(303).then((() => XQ(41550))), gQ = QQ.getCollabSnapshot(), JQ = gQ && (0, dq.y)(gQ.docKey) === sQ ? gQ : zQ;
      await async function(QQ, WQ, XQ, wQ) {
        const qQ = QQ.of({
            from: 0,
            to: XQ.length,
            insert: wQ
          }, XQ.length),
          TQ = JSON.stringify([{
            clientID: WQ.clientID,
            changes: qQ.toJSON()
          }]),
          zQ = (0, dq.y)(WQ.docKey);
        TQ.length <= dq.h ? PQ.gameBridge.send("sendCodeCollab", {
          Zq: dq.e.Push,
          Oq: zQ,
          Kq: WQ.version,
          QT: TQ
        }) : await (0, bq.postJsonWithMetricsCookiesAndJsonResponse)(`${WQ.httpConfig.gsUrl}/code/collab-push`, Uq.q["collab-push"].toBuffer({
          gameNameWithVariation: WQ.httpConfig.gameNameWithVariation,
          lobbyName: WQ.httpConfig.lobbyName,
          docKey: zQ,
          version: WQ.version,
          updates: TQ
        }), {
          retries: 0
        })
      }(FQ, JQ, JQ.doc, TQ)
    }
    class Oq {
      constructor(QQ) {
        this.handle = null, this.lastSynced = {}, this.lastLobbySeen = null, this.pendingDocText = new Map, this.flushingDocText = !1, this.recheckingDisk = !1, this.stopWatch = null, this.lobbyPollTimer = null, this.running = !1, this.applying = !1, this.reconcileSettled = !1, this.reconcileInFlight = !1, this.linked = !1, this.scaffoldedPluginNamesKey = null, this.scaffoldingLocalTypes = Promise.resolve(), this.bridge = void 0, this.bridge = QQ
      }
      async writeLobbyFiles(QQ) {
        const WQ = {
            ...this.bridge.getLobbyFiles()
          },
          XQ = {
            ...WQ
          };
        for (const {
            path: TQ,
            text: zQ
          }
          of QQ) XQ[TQ] = zQ;
        if (!QQ.every((QQ => {
            let {
              path: WQ,
              text: wQ
            } = QQ;
            return (0, tW.m)(wQ, (0, Hq.o)(XQ, WQ)) === wQ
          }))) return !1;
        const wQ = [];
        try {
          for (const {
              path: WQ,
              text: XQ
            }
            of QQ) wQ.push(WQ), WQ in this.bridge.getLobbyFiles() || (this.bridge.createFile(WQ, {
            focus: !1
          }), await this.bridge.waitForLobbyPath(WQ, !0)), await Zq(this.bridge, WQ, XQ)
        } catch (qQ) {
          for (const QQ of wQ) QQ in WQ ? await Zq(this.bridge, QQ, WQ[QQ]).catch((WQ => {
            console.error("World Code AI: couldn't put back", QQ, WQ)
          })) : this.bridge.deleteFile(QQ);
          throw qQ
        }
        return !0
      }
      isLinked() {
        return this.linked
      }
      async linkFolder() {
        if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), !1;
        const QQ = await (0, eq.w)(this.bridge.getStorageKey());
        return !!QQ && (this.handle = QQ, this.linked = !0, this.reconcileSettled = !1, await this.scaffoldLocalTypes(QQ), !0)
      }
      async unlinkFolder() {
        const QQ = this.bridge.getStorageKey();
        this.pendingDocText.clear(), this.stopContinuousSync(), this.handle = null, this.linked = !1, this.reconcileSettled = !1, this.lastSynced = {}, this.lastLobbySeen = null, this.scaffoldedPluginNamesKey = null, await (0, eq.e)(QQ), this.bridge.onUnlinked()
      }
      async tryRestoreHandle() {
        const QQ = this.bridge.getStorageKey(),
          WQ = await (0, eq.u)(QQ);
        return !!WQ && (!!await (0, eq.m)(WQ, "readwrite") && (this.handle = WQ, this.linked = !0, await (0, eq.H)(QQ, WQ), await this.scaffoldLocalTypes(WQ), !0))
      }
      scaffoldLocalTypes(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bridge.getLobbyFiles();
        return this.scaffoldingLocalTypes = this.scaffoldingLocalTypes.then((async () => {
          try {
            const wQ = (await oq(WQ)).map((QQ => cq.f[QQ])),
              qQ = wQ.map((QQ => {
                var WQ;
                return `${QQ.name}:${Object.keys(null!==(WQ=null===QQ||void 0===QQ?void 0:QQ.files)&&void 0!==WQ?WQ:{}).sort().join(",")}`
              })).join("\0");
            if (this.scaffoldedPluginNamesKey === qQ) return;
            const {
              ensureLocalBloxdTypes: TQ
            } = await Promise.all([XQ.e(88), XQ.e(305), XQ.e(310)]).then((() => XQ(41724)));
            await TQ(QQ, wQ), this.scaffoldedPluginNamesKey = qQ
          } catch (wQ) {
            console.error("[WorldCodeDirectorySync] Failed to scaffold local @bloxd types", wQ)
          }
        })), this.scaffoldingLocalTypes
      }
      async startWhenReady() {
        this.linked && this.handle && !this.running && !this.reconcileInFlight && this.bridge.getCollabSnapshot() && (this.reconcileSettled ? this.beginWatch() : await this.runInitialReconcileAndSync())
      }
      stopContinuousSync() {
        this.flushDocTextToDisk(), this.running = !1, this.stopWatch && (this.stopWatch(), this.stopWatch = null), this.lobbyPollTimer && (clearInterval(this.lobbyPollTimer), this.lobbyPollTimer = null)
      }
      async onLobbyFilesChanged(QQ) {
        this.handle && await this.scaffoldLocalTypes(this.handle, QQ), this.running && this.handle && !this.applying && await this.applyRemoteTreeToDisk(QQ)
      }
      async onDocTextChanged(QQ, WQ) {
        if (!this.handle) return;
        const XQ = [this.scaffoldLocalTypes(this.handle, {
          ...this.bridge.getLobbyFiles(),
          [QQ]: WQ
        })];
        this.running && (this.pendingDocText.set(QQ, WQ), XQ.push(this.flushDocTextToDisk())), await Promise.all(XQ)
      }
      async flushDocTextToDisk() {
        if (this.flushingDocText || this.applying || !this.handle || 0 === this.pendingDocText.size) return;
        const QQ = this.handle;
        this.flushingDocText = !0, this.applying = !0;
        try {
          for (; this.pendingDocText.size > 0;) {
            const WQ = [...this.pendingDocText];
            this.pendingDocText.clear();
            for (const [XQ, wQ] of WQ) this.lastSynced[XQ] !== wQ && (await (0, eq.Q)(QQ, XQ, wQ), this.lastSynced = {
              ...this.lastSynced,
              [XQ]: wQ
            })
          }
        } catch (WQ) {
          console.error("[WorldCodeDirectorySync] Failed to write remote doc to disk", WQ), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
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
            await this.onDiskFilesChanged(await (0, eq.x)(this.handle))
          } catch (QQ) {
            console.error("[WorldCodeDirectorySync] Failed to re-check disk after sync", QQ)
          } finally {
            this.recheckingDisk = !1
          }
        }
      }
      async runInitialReconcileAndSync() {
        if (this.handle && !this.reconcileInFlight) {
          this.reconcileInFlight = !0;
          try {
            if (!await (0, eq.m)(this.handle, "readwrite")) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncPermissionDenied"), "warning"), void(this.reconcileSettled = !0);
            await this.bridge.pullLobbyFiles();
            const WQ = this.bridge.getLobbyFiles(),
              XQ = await (0, eq.x)(this.handle);
            for (const QQ of Object.keys(WQ).filter(Rq.b)) {
              if (XQ[QQ] === eq.q) return void this.bridge.setMessage(`Move ${QQ} outside the linked folder before syncing its placeholder.`, "warning");
              XQ[QQ] = Rq.o
            }
            if (nq(XQ, WQ)) {
              for (const QQ of Object.keys(WQ).filter(Rq.b)) await (0, eq.Q)(this.handle, QQ, Rq.o);
              return this.lastSynced = {
                ...XQ
              }, void this.beginWatch()
            }
            const wQ = await this.promptReconcile(function(QQ) {
              return null !== (0, Hq.c)(QQ)
            }(XQ));
            if ("unlink" === wQ) return void await this.unlinkFolder();
            if ("dismissed" === wQ) return void(this.reconcileSettled = !0);
            this.applying = !0;
            try {
              if ("local" === wQ) {
                if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), void(this.reconcileSettled = !0);
                await this.applyLocalTreeToLobby(XQ);
                for (const QQ of Object.keys(WQ).filter(Rq.b)) await (0, eq.Q)(this.handle, QQ, Rq.o);
                this.lastSynced = {
                  ...await (0, eq.x)(this.handle)
                }
              } else await (0, eq.U)(this.handle, WQ), this.lastSynced = {
                ...WQ
              }
            } catch (QQ) {
              return console.error("[WorldCodeDirectorySync] Reconcile failed", QQ), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning"), void(this.reconcileSettled = !0)
            } finally {
              this.applying = !1, this.settleAfterApplying()
            }
            this.beginWatch()
          } finally {
            this.reconcileInFlight = !1
          }
        }
      }
      async promptReconcile(QQ) {
        return await new Promise((WQ => {
          const XQ = [{
              choice: "local",
              Button: IQ.h,
              labelKey: "directorySyncUseLocal",
              descriptionKey: "directorySyncUseLocalDescription"
            }, {
              choice: "live",
              Button: IQ.h,
              labelKey: "directorySyncUseLive",
              descriptionKey: "directorySyncUseLiveDescription"
            }, {
              choice: "unlink",
              Button: IQ.h,
              labelKey: "directorySyncUseUnlink",
              descriptionKey: "directorySyncUseUnlinkDescription"
            }],
            wQ = (0, gQ.jsxs)("div", {
              className: "CodeEditorDirectorySyncPrompt",
              children: [(0, gQ.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptTitle",
                children: this.bridge.t("codeEditor:directorySyncDifferTitle")
              }), (0, gQ.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptBody",
                children: QQ ? this.bridge.t("codeEditor:directorySyncDifferBody") : this.bridge.t("codeEditor:directorySyncLocalInvalidEntry")
              }), (0, gQ.jsx)("div", {
                className: "CodeEditorDirectorySyncOptions",
                children: XQ.filter((WQ => "local" !== WQ.choice || QQ)).map((QQ => {
                  let {
                    choice: XQ,
                    Button: wQ,
                    labelKey: TQ,
                    descriptionKey: zQ
                  } = QQ;
                  return (0, gQ.jsxs)("div", {
                    className: "CodeEditorDirectorySyncOption",
                    children: [(0, gQ.jsx)(wQ, {
                      className: "CodeEditorButton",
                      onClick: () => {
                        (QQ => {
                          qQ.tearDownNotification(), WQ(QQ)
                        })(XQ)
                      },
                      children: this.bridge.t(`codeEditor:${TQ}`)
                    }), (0, gQ.jsx)("div", {
                      className: "CodeEditorDirectorySyncOptionDescription",
                      children: this.bridge.t(`codeEditor:${zQ}`)
                    })]
                  }, XQ)
                }))
              })]
            }),
            qQ = mw.NotificationProvider.showCustomPopup({
              body: wQ,
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "worldCodeDirectorySync"
            });
          qQ.getResult().then((QQ => {
            "notificationTornDown" === QQ && WQ("dismissed")
          }))
        }))
      }
      beginWatch() {
        this.handle && (this.stopContinuousSync(), this.reconcileSettled = !0, this.running = !0, this.stopWatch = (0, eq.L)(this.handle, (QQ => {
          this.onDiskFilesChanged(QQ)
        })), this.lobbyPollTimer = setInterval((() => {
          this.pollRemoteLobbyFiles()
        }), 2e3))
      }
      async pollRemoteLobbyFiles() {
        if (this.running && !this.applying) try {
          await this.bridge.pullLobbyFiles()
        } catch (QQ) {
          console.error("[WorldCodeDirectorySync] Lobby poll failed", QQ)
        }
      }
      async onDiskFilesChanged(QQ) {
        if (!this.running || !this.handle || this.applying) return;
        if (!this.bridge.canEditCode()) return;
        const WQ = this.bridge.getLobbyFiles();
        let XQ = Yq(QQ, this.lastSynced);
        for (const TQ in WQ)
          if ((0, Rq.b)(TQ) && XQ[TQ] === eq.q) return void this.bridge.setMessage("Move binary schematic files outside the linked folder. Add them through the Code Editor.", "warning");
        const wQ = Object.keys(XQ).filter((QQ => (0, Rq.b)(QQ) && !(QQ in WQ)));
        wQ.length > 0 && this.bridge.setMessage("Add or rename schematics in the Code Editor. Unknown local schematic files are not uploaded.", "warning");
        for (const TQ of Object.keys(WQ).filter(Rq.b))(TQ in XQ || wQ.length > 0 || !(TQ in this.lastSynced)) && (XQ[TQ] = Rq.o);
        if (!nq(XQ, QQ)) {
          this.applying = !0;
          try {
            await this.persistEntryRepair(QQ, XQ), XQ = Yq(await (0, eq.x)(this.handle), this.lastSynced)
          } finally {
            this.applying = !1
          }
        }
        if (!nq(XQ, this.lastSynced)) {
          this.applying = !0;
          try {
            const QQ = xq(this.lastSynced, XQ);
            if (await this.pushDiskDeltaToLobby(XQ, WQ), null !== this.lastLobbySeen)
              for (const XQ of [...QQ.creates, ...QQ.updates, ...QQ.deletes])(0, Rq.b)(XQ) || (XQ in WQ ? this.lastLobbySeen[XQ] = WQ[XQ] : delete this.lastLobbySeen[XQ]);
            this.lastSynced = {
              ...XQ
            }
          } catch (qQ) {
            console.error("[WorldCodeDirectorySync] Disk\u2192lobby sync failed", qQ), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async persistEntryRepair(QQ, WQ) {
        if (this.handle) {
          for (const XQ of Object.keys(QQ)) XQ in WQ || await (0, eq.B)(this.handle, XQ);
          for (const [XQ, wQ] of Object.entries(WQ)) QQ[XQ] !== wQ && await (0, eq.Q)(this.handle, XQ, wQ)
        }
      }
      async applyRemoteTreeToDisk(QQ) {
        if (!this.handle) return;
        const WQ = this.lastLobbySeen;
        if (null === WQ) return void(this.lastLobbySeen = {
          ...QQ
        });
        const XQ = Object.keys(QQ).filter((XQ => WQ[XQ] !== QQ[XQ])),
          wQ = Object.keys(WQ).filter((WQ => !(WQ in QQ)));
        if (0 !== XQ.length || 0 !== wQ.length) {
          this.applying = !0;
          try {
            for (const WQ of [...wQ, ...XQ]) try {
              if (WQ in QQ) await (0, eq.Q)(this.handle, WQ, QQ[WQ]), this.lastSynced = {
                ...this.lastSynced,
                [WQ]: QQ[WQ]
              }, this.lastLobbySeen = {
                ...this.lastLobbySeen,
                [WQ]: QQ[WQ]
              };
              else {
                await (0, eq.B)(this.handle, WQ);
                const QQ = {
                  ...this.lastSynced
                };
                delete QQ[WQ], this.lastSynced = QQ;
                const XQ = {
                  ...this.lastLobbySeen
                };
                delete XQ[WQ], this.lastLobbySeen = XQ
              }
            } catch (qQ) {
              console.error("[WorldCodeDirectorySync] Lobby\u2192disk sync failed", qQ), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
            }
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async renameLobbyEntryIfSwitched(QQ, WQ) {
        const XQ = function(QQ, WQ) {
          const XQ = (0, Hq.c)(QQ),
            wQ = (0, Hq.c)(WQ);
          return XQ && wQ && XQ !== wQ ? {
            from: XQ,
            to: wQ
          } : null
        }(QQ, WQ);
        return !!XQ && (this.bridge.renameFile(XQ.from, XQ.to), await this.bridge.waitForLobbyPath(XQ.to, !0), !0)
      }
      async applyLocalTreeToLobby(QQ) {
        var WQ;
        const XQ = this.bridge.getActivePath();
        await this.renameLobbyEntryIfSwitched(this.bridge.getLobbyFiles(), QQ);
        const wQ = this.bridge.getLobbyFiles(),
          qQ = xq(wQ, QQ),
          TQ = Nq(qQ.deletes, wQ);
        for (const PQ of qQ.creates)(0, Rq.b)(PQ) || (this.bridge.createFile(PQ, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(PQ, !0));
        for (const PQ of TQ)(0, Rq.b)(PQ) || (this.bridge.deleteFile(PQ), await this.bridge.waitForLobbyPath(PQ, !1));
        if (!(0, Hq.c)(this.bridge.getLobbyFiles()) && !(0, Hq.c)(QQ)) {
          if (this.bridge.createFile(vq.j, {
              focus: !1
            }), await this.bridge.waitForLobbyPath(vq.j, !0), !this.handle) return;
          await (0, eq.Q)(this.handle, vq.j, ""), QQ = {
            ...QQ,
            [vq.j]: ""
          }
        }
        const zQ = this.bridge.getLobbyFiles();
        for (const PQ of Object.keys(QQ))(0, Rq.b)(PQ) || zQ[PQ] !== QQ[PQ] && await Zq(this.bridge, PQ, QQ[PQ]);
        const sQ = this.bridge.getLobbyFiles(),
          FQ = XQ in sQ ? XQ : null !== (WQ = (0, Hq.c)(sQ)) && void 0 !== WQ ? WQ : vq.j;
        await this.bridge.ensureJoined(FQ)
      }
      async pushDiskDeltaToLobby(QQ, WQ) {
        const XQ = this.bridge.getActivePath(),
          wQ = await this.renameLobbyEntryIfSwitched(WQ, QQ) ? this.bridge.getLobbyFiles() : WQ,
          qQ = xq(this.lastSynced, QQ),
          TQ = Nq(qQ.deletes, wQ).filter((QQ => QQ in wQ));
        for (const zQ of qQ.creates)(0, Rq.b)(zQ) || (zQ in this.bridge.getLobbyFiles() || (this.bridge.createFile(zQ, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(zQ, !0)), await Zq(this.bridge, zQ, QQ[zQ]));
        for (const zQ of TQ)(0, Rq.b)(zQ) ? await this.bridge.deleteSchematic(zQ) : (this.bridge.deleteFile(zQ), await this.bridge.waitForLobbyPath(zQ, !1));
        for (const zQ of qQ.updates)(0, Rq.b)(zQ) || await Zq(this.bridge, zQ, QQ[zQ]);
        XQ in this.bridge.getLobbyFiles() && this.bridge.getActivePath() !== XQ && await this.bridge.ensureJoined(XQ)
      }
    }
    var Kq = XQ(1238);

    function mq() {
      const {
        websocketUrl: QQ,
        gameNameWithVariation: WQ,
        lobbyName: XQ
      } = PQ.gameBridge.latest("connectedGame");
      return {
        gsUrl: Kq.clientSideServerUrls.getHttpUrlFromWebSocketUrl(QQ),
        gameNameWithVariation: WQ,
        lobbyName: XQ
      }
    }
    async function Mq(QQ) {
      const {
        gsUrl: WQ,
        gameNameWithVariation: XQ,
        lobbyName: wQ
      } = mq();
      return await (0, bq.postBinaryWithMetricsCookiesAndCustomResponse)(`${WQ}/code/schematics`, Uq.xk.schematics.toBuffer({
        gameNameWithVariation: XQ,
        lobbyName: wQ,
        request: JSON.stringify(QQ)
      }), {
        retries: 0
      }, bq.HttpPayloadType.json)
    }
    var QT = XQ(36644);

    function WT(QQ) {
      let {
        path: WQ,
        revision: XQ
      } = QQ;
      const [wQ, TQ] = (0, qQ.useState)(""), [zQ, sQ] = (0, qQ.useState)(!1), [FQ, PQ] = (0, qQ.useState)(0);
      return (0, qQ.useEffect)((() => {
        let QQ = !1;
        return TQ(""), sQ(!1), Mq({
          action: "preview",
          path: WQ
        }).then((WQ => {
          QQ || TQ(`data:image/webp;base64,${WQ.previewBase64}`)
        })).catch((WQ => {
          console.error("Could not load schematic preview", WQ), QQ || sQ(!0)
        })), () => {
          QQ = !0
        }
      }), [WQ, XQ, FQ]), (0, gQ.jsxs)("div", {
        className: "SchematicPreview",
        children: [wQ && (0, gQ.jsx)("img", {
          src: wQ,
          alt: `Preview of ${WQ}`
        }), !wQ && !zQ && (0, gQ.jsx)(lQ.e, {
          loaderType: "Secondary"
        }), zQ && (0, gQ.jsxs)(gQ.Fragment, {
          children: [(0, gQ.jsx)("div", {
            className: "SmallTextLight",
            role: "status",
            children: "Preview unavailable."
          }), (0, gQ.jsx)(IQ.h, {
            onClick: () => {
              PQ(FQ + 1)
            },
            children: "Retry preview"
          })]
        })]
      })
    }
    var XT = XQ(3408);

    function wT(QQ) {
      var WQ;
      let {
        initialPath: XQ,
        onChanged: wQ,
        onClose: TQ
      } = QQ;
      const zQ = "" === XQ,
        [sQ, FQ] = (0, qQ.useState)(null),
        [PQ, JQ] = (0, qQ.useState)(XQ),
        [rQ, jQ] = (0, qQ.useState)(!1),
        [BQ, yQ] = (0, qQ.useState)(!1),
        [VQ, DQ] = (0, qQ.useState)(null),
        [pQ, GQ] = (0, qQ.useState)(!1),
        [UQ, bQ] = (0, qQ.useState)(""),
        vQ = (0, qQ.useRef)(null),
        dQ = (0, qQ.useRef)(!1),
        HQ = (0, qQ.useRef)(!0);
      (0, qQ.useEffect)((() => (HQ.current = !0, Mq({
        action: "state"
      }).then((QQ => {
        HQ.current && FQ(QQ)
      })).catch((QQ => {
        console.error("Could not load schematic assets", QQ), HQ.current && bQ("Could not load schematics. Reopen this panel to retry.")
      })), () => {
        HQ.current = !1
      })), []);
      const aQ = null === sQ || void 0 === sQ ? void 0 : sQ.assets[XQ],
        lQ = Object.keys(null !== (WQ = null === sQ || void 0 === sQ ? void 0 : sQ.assets) && void 0 !== WQ ? WQ : {}).length,
        hQ = PQ.trim(),
        iQ = hQ ? (0, Rq.b)(hQ) ? null !== sQ && void 0 !== sQ && sQ.assets[hQ] && (zQ || hQ !== XQ) ? "A schematic already uses that path." : "" : "Use a relative path ending in .bloxdschem." : "",
        cQ = !!hQ && !iQ && (zQ ? lQ < Rq.f : hQ !== XQ),
        AQ = pQ || !sQ;
      async function RQ(QQ) {
        if (!dQ.current && HQ.current) {
          dQ.current = !0, GQ(!0), bQ("");
          try {
            const WQ = await Mq({
              ...QQ,
              expectedRevision: sQ.revision
            });
            wQ(WQ), HQ.current && TQ()
          } catch (XQ) {
            var WQ;
            if (console.error("Schematic asset operation failed", XQ), HQ.current) bQ(XQ instanceof nQ.b ? null !== (WQ = XQ.errorMessageForUser) && void 0 !== WQ ? WQ : XQ.message : String(XQ));
            try {
              const QQ = await Mq({
                action: "state"
              });
              wQ(QQ), HQ.current && FQ(QQ)
            } catch (qQ) {
              console.error("Could not refresh schematic assets", qQ)
            }
          } finally {
            dQ.current = !1, HQ.current && GQ(!1)
          }
        }
      }
      return (0, gQ.jsxs)("div", {
        className: "WorldCodeSchematicPanel InputGenericPopup PromptGenericPopup FileTreePathPopup",
        children: [(0, gQ.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: zQ ? "New schematic" : rQ ? "Rename schematic" : "Schematic"
        }), UQ && (0, gQ.jsx)("div", {
          className: "InputGenericPopupError SmallTextLight",
          role: "alert",
          children: UQ
        }), !sQ && !UQ && (0, gQ.jsx)("div", {
          className: "SmallTextLight",
          children: "Loading schematic\u2026"
        }), (0, gQ.jsxs)("fieldset", {
          disabled: AQ,
          children: [zQ || rQ ? (0, gQ.jsxs)("label", {
            className: "SchematicField",
            children: [(0, gQ.jsx)("span", {
              className: "SmallTextBold",
              children: "Project path"
            }), (0, gQ.jsx)("div", {
              className: "InputGenericPopupInputRow",
              children: (0, gQ.jsx)(EX.e, {
                className: "InputGenericPopupInput",
                defaultValue: XQ,
                placeholderText: "maps/arena.bloxdschem",
                maxLength: 64,
                onValueChange: JQ
              }, rQ ? "rename" : "create")
            })]
          }) : (0, gQ.jsx)("div", {
            className: "SchematicPath SmallTextBold",
            children: XQ
          }), (zQ || rQ) && iQ && (0, gQ.jsx)("div", {
            className: "InputGenericPopupError SmallTextLight",
            role: "alert",
            children: iQ
          }), zQ ? (0, gQ.jsxs)(gQ.Fragment, {
            children: [lQ >= Rq.f && (0, gQ.jsxs)("div", {
              className: "SmallTextLight",
              children: ["Delete a schematic before adding another (", Rq.f, " maximum)."]
            }), BQ ? (0, gQ.jsxs)(gQ.Fragment, {
              children: [(0, gQ.jsx)("div", {
                className: "SmallTextBold",
                children: "Choose from profile"
              }), (0, gQ.jsx)("div", {
                className: "SchematicProfilePicker",
                "aria-disabled": AQ || !cQ,
                children: (0, gQ.jsx)(QT.e, {
                  loading: null === VQ,
                  schematics: null !== VQ && void 0 !== VQ ? VQ : [],
                  disableAutoExport: !0,
                  onSchematicPicked: QQ => {
                    !AQ && cQ && RQ({
                      action: "profile",
                      path: hQ,
                      schematicId: QQ.schematicId
                    })
                  }
                })
              }), (0, gQ.jsx)("div", {
                className: "InputGenericPopupButtons",
                children: (0, gQ.jsx)(IQ.h, {
                  className: "InputGenericPopupButton",
                  disabled: AQ,
                  onClick: () => {
                    yQ(!1)
                  },
                  children: "Back"
                })
              })]
            }) : (0, gQ.jsxs)("div", {
              className: "InputGenericPopupButtons",
              children: [(0, gQ.jsx)(IQ.h, {
                className: "InputGenericPopupButton",
                disabled: AQ || !cQ,
                onClick: () => {
                  (0, XT.d)(vQ.current)
                },
                children: "Upload Schematic"
              }), (0, gQ.jsx)(IQ.h, {
                className: "InputGenericPopupButton",
                disabled: AQ || !cQ,
                onClick: () => {
                  !async function() {
                    if (yQ(!0), bQ(""), !VQ) try {
                      const QQ = await (0, bq.postJsonWithMetricsCookiesAndJsonResponse)(`${Kq.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
                        retries: 0,
                        minTimeout: 3e3
                      });
                      HQ.current && DQ(QQ)
                    } catch (QQ) {
                      console.error("Could not load profile schematics", QQ), HQ.current && (yQ(!1), bQ("Could not load your schematics. Try again."))
                    }
                  }()
                },
                children: "Choose from profile"
              })]
            }), (0, gQ.jsx)("input", {
              ref: vQ,
              type: "file",
              accept: ".bloxdschem",
              hidden: !0,
              onChange: QQ => {
                var WQ;
                const XQ = null === (WQ = QQ.target.files) || void 0 === WQ ? void 0 : WQ[0];
                if (QQ.target.value = "", !XQ) return;
                if (XQ.size > Rq.j) return void bQ("The schematic file is too large.");
                const wQ = hQ;
                GQ(!0);
                const qQ = new FileReader;
                qQ.onload = () => {
                  RQ({
                    action: "upload",
                    path: wQ,
                    base64: String(qQ.result).split(",")[1]
                  })
                }, qQ.onerror = () => {
                  console.error("Could not read schematic file", qQ.error), HQ.current && (GQ(!1), bQ("Could not read the selected file."))
                }, qQ.readAsDataURL(XQ)
              }
            })]
          }) : aQ ? (0, gQ.jsxs)(gQ.Fragment, {
            children: [!rQ && (0, gQ.jsx)(WT, {
              path: XQ,
              revision: sQ.revision
            }), !rQ && (0, gQ.jsxs)("p", {
              className: "SchematicDetails SmallTextLight",
              children: [Math.ceil(aQ.byteSize / 1024), " KB \xb7 ", aQ.dimensions.join(" \xd7 "), " blocks"]
            }), (0, gQ.jsx)("div", {
              className: "InputGenericPopupButtons",
              children: rQ ? (0, gQ.jsxs)(gQ.Fragment, {
                children: [(0, gQ.jsx)(IQ.h, {
                  className: "InputGenericPopupButton",
                  disabled: AQ || !cQ,
                  onClick: () => {
                    RQ({
                      action: "rename",
                      path: XQ,
                      newPath: hQ
                    })
                  },
                  children: "Rename"
                }), (0, gQ.jsx)(IQ.h, {
                  className: "InputGenericPopupButton",
                  disabled: AQ,
                  onClick: () => {
                    jQ(!1), JQ(XQ)
                  },
                  children: "Cancel"
                })]
              }) : (0, gQ.jsxs)(gQ.Fragment, {
                children: [(0, gQ.jsx)(IQ.h, {
                  className: "InputGenericPopupButton",
                  disabled: AQ,
                  onClick: () => {
                    jQ(!0)
                  },
                  children: "Rename"
                }), (0, gQ.jsx)(IQ.P, {
                  className: "InputGenericPopupButton",
                  disabled: AQ,
                  onClick: () => {
                    RQ({
                      action: "remove",
                      path: XQ
                    })
                  },
                  children: "Delete"
                })]
              })
            })]
          }) : sQ && (0, gQ.jsx)("div", {
            className: "SmallTextLight",
            children: "This schematic is no longer in the project."
          })]
        })]
      })
    }

    function qT(QQ) {
      if ("string" !== typeof QQ) return null;
      try {
        const WQ = JSON.parse(QQ);
        return (0, Hq.j)(null === WQ || void 0 === WQ ? void 0 : WQ.worldCodeEngine) && "boolean" === typeof WQ.engineLocked && function(QQ) {
          if (null === QQ) return !0;
          const WQ = null === QQ || void 0 === QQ ? void 0 : QQ.location;
          return "string" === typeof(null === QQ || void 0 === QQ ? void 0 : QQ.reason) && (null === WQ || "string" === typeof(null === WQ || void 0 === WQ ? void 0 : WQ.path) && Number.isInteger(WQ.line))
        }(WQ.fallback) ? WQ : (console.error("[CodeCollab] Malformed engine settings", QQ), null)
      } catch (WQ) {
        return console.error("[CodeCollab] Failed to parse engine settings", WQ), null
      }
    }

    function TT(QQ) {
      let {
        fallback: WQ,
        onGoToLine: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, ZQ.C)(), {
        location: qQ
      } = WQ;
      return (0, gQ.jsxs)("div", {
        className: "CodeEditorEngineNotice",
        children: [wQ("codeEditorEngine:notice", {
          reason: WQ.reason
        }), qQ && (0, gQ.jsxs)(gQ.Fragment, {
          children: [" ", (0, gQ.jsx)("button", {
            type: "button",
            className: "CodeEditorEngineNoticeLink",
            onClick: () => {
              XQ(qQ.path, qQ.line)
            },
            children: wQ("codeEditorEngine:goToLine", {
              line: String(qQ.line)
            })
          })]
        })]
      })
    }
    var zT = XQ(5290),
      sT = XQ(4677),
      FT = XQ(37167);

    function PT(QQ) {
      let {
        label: WQ,
        hint: XQ,
        checked: wQ,
        onChange: qQ
      } = QQ;
      return (0, gQ.jsxs)("label", {
        className: "CodeEditorMoreOptionsRow CodeEditorOptionSwitch",
        children: [(0, gQ.jsxs)("span", {
          className: "CodeEditorOptionSwitchText",
          children: [(0, gQ.jsx)("span", {
            children: WQ
          }), (0, gQ.jsx)("span", {
            className: "CodeEditorOptionSwitchHint",
            children: XQ
          })]
        }), (0, gQ.jsx)("span", {
          className: "SwitchContainer",
          children: (0, gQ.jsx)(sT.b, {
            className: "SwitchCheckbox",
            checked: wQ,
            onChange: QQ => {
              qQ(QQ.target.checked)
            },
            disabled: !1
          })
        })]
      })
    }

    function gT(QQ) {
      let {
        engine: WQ,
        onSetEngine: XQ,
        aiHints: wQ,
        variation: qQ
      } = QQ;
      const {
        t: TQ
      } = (0, ZQ.C)(), [zQ, sQ] = (0, FT.g)(FT.c);
      return (0, gQ.jsxs)("div", {
        className: "CodeEditorMoreOptions",
        children: [(0, gQ.jsx)("div", {
          className: "CodeEditorMoreOptionsTitle",
          children: TQ("codeEditor:moreOptions")
        }), WQ && (0, gQ.jsx)(PT, {
          label: TQ("codeEditorEngine:toggle"),
          hint: TQ("codeEditorEngine:toggleHint"),
          checked: "ses" === WQ,
          onChange: QQ => {
            XQ(QQ ? "ses" : "quickjs")
          }
        }), wQ && (0, gQ.jsx)(PT, {
          label: TQ("codeEditorAiHints:toggle"),
          hint: TQ("codeEditorAiHints:toggleHint"),
          checked: wQ.shown,
          onChange: wQ.setShown
        }), wQ && FT.c.canChange && (0, gQ.jsx)(PT, {
          label: TQ("codeEditorAiKeySafetyCheck:toggle"),
          hint: TQ("codeEditorAiKeySafetyCheck:toggleHint"),
          checked: zQ,
          onChange: QQ => {
            QQ ? sQ(!0) : mw.NotificationProvider.showPromptPopup({
              title: "codeEditorAiKeySafetyCheck:offWarning",
              confirmText: "general:yes",
              destructive: !0,
              cancelText: "general:no"
            }).getResult().then((QQ => {
              !0 === QQ && sQ(!1)
            }))
          }
        }), qQ && (0, gQ.jsxs)("div", {
          className: "CodeEditorMoreOptionsRow",
          children: [(0, gQ.jsx)(zT.h, {
            label: "codeEditor:variationLabel",
            children: (0, gQ.jsx)(EX.e, {
              className: "CodeEditorVariationInput",
              maxLength: 32,
              defaultValue: qQ.name,
              onValueChange: qQ.setName,
              onEnter: qQ.reload
            })
          }), (0, gQ.jsx)(IQ.G, {
            className: "CodeEditorButton",
            onClick: qQ.reload,
            children: TQ("codeEditor:reloadAsVariation")
          })]
        })]
      })
    }
    var JT = XQ(37169),
      rT = XQ(37172);

    function IT(QQ) {
      let {
        close: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, ZQ.C)(), wQ = [{
        name: XQ("codeEditor:welcomeTutorial"),
        tutorial: "welcome"
      }, {
        name: XQ("codeEditor:docsOverviewTutorial"),
        tutorial: "docsOverview"
      }, {
        name: XQ("codeEditorAiTutorial:tutorialName"),
        tutorial: "aiHelperOverview"
      }];
      return (0, gQ.jsxs)("div", {
        className: "PromptGenericPopup CodeEditorTutorialsPopup",
        children: [(0, gQ.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: XQ("codeEditor:tutorialsTitle")
        }), (0, gQ.jsx)("div", {
          className: "CodeEditorTutorialsList",
          children: wQ.map((QQ => (0, gQ.jsx)(IQ.h, {
            className: "CodeEditorTutorialsListButton",
            onClick: () => {
              WQ(), (0, rT.F)(QQ.tutorial)
            },
            children: QQ.name
          }, QQ.tutorial)))
        })]
      })
    }
    var jT = XQ(129),
      BT = XQ(36841),
      yT = XQ(2943);
    const VT = (0, qQ.forwardRef)((function(QQ, WQ) {
      let {
        value: XQ,
        onChange: wQ,
        onSubmit: qQ,
        placeholder: TQ,
        maxLength: zQ,
        rows: sQ = 2,
        allowNewLines: FQ = !1,
        onKeyDown: PQ,
        before: JQ
      } = QQ;
      const {
        t: rQ
      } = (0, ZQ.C)(), jQ = "" !== XQ.trim(), BQ = () => {
        jQ && qQ()
      };
      return (0, gQ.jsxs)("div", {
        className: "PanelPromptInputRow",
        children: [JQ, (0, gQ.jsx)("textarea", {
          ref: WQ,
          className: "PanelPromptInput",
          value: XQ,
          maxLength: zQ,
          rows: sQ,
          placeholder: TQ,
          spellCheck: !1,
          autoComplete: "off",
          onChange: QQ => {
            wQ(FQ ? QQ.target.value : QQ.target.value.replace(/\r?\n/g, " "))
          },
          onKeyDown: QQ => {
            QQ.nativeEvent.isComposing || 229 === QQ.nativeEvent.keyCode ? QQ.stopPropagation() : "Escape" !== QQ.key && (QQ.stopPropagation(), null === PQ || void 0 === PQ || PQ(QQ), QQ.defaultPrevented || "Enter" !== QQ.key || FQ && QQ.shiftKey || (QQ.preventDefault(), BQ()))
          }
        }), (0, gQ.jsx)(IQ.h, {
          className: "PanelPromptSend",
          disabled: !jQ,
          onClick: BQ,
          ariaLabel: rQ("codeEditorPanels:send"),
          children: (0, gQ.jsx)(yQ.d, {
            name: "arrow-up"
          })
        })]
      })
    }));

    function DT(QQ) {
      let {
        inputRef: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, ZQ.C)(), {
        messages: wQ,
        reportedPlayers: TQ,
        channel: zQ
      } = (0, yT.n)(), [sQ, FQ] = (0, qQ.useState)(""), PQ = (0, qQ.useRef)({
        stepsBack: 0,
        text: ""
      });
      return (0, gQ.jsxs)("div", {
        className: "CodeEditorChatPanel",
        children: [(0, gQ.jsx)("div", {
          className: "CodeEditorChatHeader",
          children: (0, gQ.jsx)("span", {
            className: "CodeEditorChatTitle",
            children: XQ("codeEditorChat:title")
          })
        }), 0 === wQ.length ? (0, gQ.jsx)("div", {
          className: "CodeEditorChatEmpty",
          children: XQ("codeEditorChat:empty")
        }) : (0, gQ.jsx)("div", {
          className: "ChatMessages CodeEditorChatMessages",
          children: (0, gQ.jsx)(BT.c, {
            messages: wQ,
            reportedPlayers: TQ
          })
        }), (0, gQ.jsx)(VT, {
          ref: WQ,
          value: sQ,
          onChange: FQ,
          onSubmit: () => {
            (0, yT.k)(sQ), FQ(""), PQ.current = {
              stepsBack: 0,
              text: ""
            }
          },
          maxLength: HQ.Yc,
          rows: 1,
          placeholder: zQ ? XQ("touchOnly" === (0, jT.c)() ? "codeEditorChat:channelPlaceholderTouch" : "codeEditorChat:channelPlaceholder", {
            channel: zQ.channelName
          }) : XQ("codeEditorChat:placeholder"),
          before: zQ && (0, gQ.jsx)("button", {
            type: "button",
            className: "CodeEditorChatChannel",
            style: {
              backgroundColor: zQ.elementBgColor
            },
            onClick: () => {
              yT.b.selectNextChannel(), WQ.current.focus()
            },
            children: (0, gQ.jsx)(vQ.e, {
              text: zQ.elementContent
            })
          }),
          onKeyDown: QQ => {
            const WQ = sQ === PQ.current.text;
            if ("ArrowUp" !== QQ.key && "ArrowDown" !== QQ.key || !WQ && "" !== sQ) "Tab" === QQ.key && !QQ.shiftKey && zQ && (QQ.preventDefault(), yT.b.selectNextChannel());
            else {
              QQ.preventDefault();
              const XQ = WQ ? PQ.current.stepsBack : 0;
              PQ.current = (0, yT.j)(XQ + ("ArrowUp" === QQ.key ? 1 : -1)), FQ(PQ.current.text)
            }
          }
        })]
      })
    }
    var pT = XQ(37176);

    function GT(QQ) {
      return "expanded" === QQ ? "always" : "shown" === QQ ? "narrow" : void 0
    }

    function UT(QQ) {
      var WQ;
      let {
        nJ: XQ,
        worldPanel: wQ,
        closeWorld: qQ,
        aiShown: TQ,
        defaultWidth: zQ,
        children: sQ
      } = QQ;
      const FQ = "hidden" !== XQ;
      return (0, gQ.jsx)(pT.e, {
        side: "right",
        defaultSize: FQ ? "max(18rem, 40%)" : zQ,
        covers: null !== (WQ = GT(XQ)) && void 0 !== WQ ? WQ : TQ ? "narrow" : void 0,
        children: (0, gQ.jsxs)("div", {
          className: pX()("CodeEditorRightColumn", {
            WorldShown: FQ,
            WorldExpanded: "expanded" === XQ
          }),
          children: [FQ && (0, gQ.jsx)(pT.e, {
            side: "top",
            onClose: qQ,
            children: wQ
          }), sQ]
        })
      })
    }
    var bT = XQ(2058),
      vT = XQ(1157),
      dT = XQ(1345);
    class HT {
      constructor(QQ, WQ, XQ) {
        this.measure = QQ, this.apply = WQ, this.now = XQ, this.last = null, this.resizedAt = -1 / 0, this.resizing = !1, this.stretchedAt = null
      }
      get rect() {
        var QQ, WQ;
        return null !== (QQ = null === (WQ = this.last) || void 0 === WQ ? void 0 : WQ.rect) && void 0 !== QQ ? QQ : null
      }
      sync() {
        const QQ = function(QQ) {
          const WQ = Math.round(QQ.left),
            XQ = Math.round(QQ.top);
          return {
            left: WQ,
            top: XQ,
            width: Math.round(QQ.right) - WQ,
            height: Math.round(QQ.bottom) - XQ
          }
        }(this.measure());
        if (QQ.width <= 0 || QQ.height <= 0) return;
        const WQ = this.now(),
          XQ = this.last;
        let wQ = {
          width: QQ.width,
          height: QQ.height
        };
        null === XQ || QQ.width === XQ.rect.width && QQ.height === XQ.rect.height || (this.resizing = WQ - this.resizedAt < 100, this.resizedAt = WQ);
        const qQ = null !== XQ && this.resizing && WQ - this.resizedAt < 100 && (QQ.width !== XQ.bufferSize.width || QQ.height !== XQ.bufferSize.height);
        qQ && (this.stretchedAt ??= WQ), qQ && WQ - this.stretchedAt < 250 ? wQ = XQ.bufferSize : this.stretchedAt = null;
        const TQ = {
          rect: QQ,
          bufferSize: wQ
        };
        var zQ, sQ;
        null !== XQ && (sQ = TQ, (zQ = XQ).rect.left === sQ.rect.left && zQ.rect.top === sQ.rect.top && zQ.rect.width === sQ.rect.width && zQ.rect.height === sQ.rect.height && zQ.bufferSize.width === sQ.bufferSize.width && zQ.bufferSize.height === sQ.bufferSize.height) || (this.last = TQ, this.apply(TQ))
      }
      stop() {
        null !== this.last && (this.last = null, this.apply(null))
      }
    }

    function aT(QQ) {
      const {
        style: WQ
      } = document.documentElement;
      for (const [XQ, wQ] of [
          ["--worldViewLeft", null === QQ || void 0 === QQ ? void 0 : QQ.left],
          ["--worldViewTop", null === QQ || void 0 === QQ ? void 0 : QQ.top],
          ["--worldViewWidth", null === QQ || void 0 === QQ ? void 0 : QQ.width],
          ["--worldViewHeight", null === QQ || void 0 === QQ ? void 0 : QQ.height]
        ]) void 0 === wQ ? WQ.removeProperty(XQ) : WQ.setProperty(XQ, `${wQ}px`)
    }
    var lT = XQ(1802),
      hT = XQ(2063);

    function iT(QQ, WQ) {
      (0, qQ.useEffect)((() => {
        if (!QQ) return;
        const XQ = QQ => {
          var XQ;
          "Escape" === QQ.key ? (QQ.stopPropagation(), QQ.preventDefault(), WQ()) : (XQ = QQ.code, Object.entries(eW.s).some((QQ => {
            let [WQ, wQ] = QQ;
            const qQ = hT.e[WQ];
            return qQ.includes("ui") && !qQ.includes("core") && wQ.includes(XQ)
          })) && !(0, lT.isTextEntry)(QQ.target) && QQ.preventDefault())
        };
        window.addEventListener("keydown", XQ, !0);
        const wQ = (0, SQ.q)(WQ);
        return () => {
          window.removeEventListener("keydown", XQ, !0), wQ()
        }
      }), [QQ, WQ])
    }

    function cT() {
      return (0, gq.u)().some((QQ => QQ !== gq.e))
    }

    function AT(QQ, WQ) {
      return QQ.map((QQ => WQ ? String(QQ) : QQ.toFixed(1))).join(", ")
    }

    function RT(QQ) {
      let {
        freeCamera: WQ,
        picking: XQ,
        hovered: wQ
      } = QQ;
      const {
        t: TQ
      } = (0, ZQ.C)(), zQ = (0, qQ.useRef)(null), sQ = (0, qQ.useRef)(null);
      return (0, qQ.useEffect)((() => {
        const QQ = (QQ, WQ) => {
            QQ.textContent !== WQ && (QQ.textContent = WQ)
          },
          XQ = () => {
            const XQ = WQ ? PQ.gameBridge.lookup("freeCameraPos", null) : null;
            QQ(zQ.current, AT(null !== XQ && void 0 !== XQ ? XQ : PQ.gameBridge.lookup("localPos", null), !1));
            const wQ = PQ.gameBridge.lookup("targetedBlockPos", null);
            QQ(sQ.current, wQ ? AT(wQ, !0) : "-")
          };
        return XQ(), (0, dT.w)(XQ)
      }), [WQ]), (0, gQ.jsxs)("div", {
        className: "WorldPanelCoordinates",
        children: [(0, gQ.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: TQ(WQ ? "codeEditorWorld:camera" : "codeEditorWorld:position")
        }), (0, gQ.jsx)("span", {
          ref: zQ
        }), (0, gQ.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: TQ("codeEditorWorld:lookingAt")
        }), (0, gQ.jsx)("span", {
          ref: sQ,
          hidden: XQ
        }), XQ && (0, gQ.jsxs)(gQ.Fragment, {
          children: [(0, gQ.jsx)("span", {
            children: wQ ? AT(wQ.pos, !0) : "-"
          }), wQ && (0, gQ.jsx)("span", {
            className: "WorldPanelCoordsName",
            children: wQ.name
          })]
        })]
      })
    }
    var ET = XQ(37183),
      CT = XQ(1527);

    function uT(QQ) {
      const WQ = QQ.currentTarget.getBoundingClientRect();
      return {
        x: (QQ.clientX - WQ.left) / WQ.width,
        y: (QQ.clientY - WQ.top) / WQ.height
      }
    }

    function LT(QQ) {
      const [WQ, XQ] = (0, qQ.useState)(!1), [wQ, TQ] = (0, qQ.useState)(null), zQ = (0, qQ.useRef)(null);
      (0, qQ.useEffect)((() => {
        if (!WQ) return;
        let QQ = null,
          XQ = null,
          wQ = 1 / 0;
        const qQ = (0, dT.r)((WQ => {
          wQ += WQ;
          const qQ = zQ.current;
          if (qQ === XQ && wQ < 100) return;
          XQ = qQ, wQ = 0;
          const sQ = qQ && PQ.gameBridge.lookup("blockAtViewPoint", qQ);
          var FQ, gQ;
          (FQ = sQ) === (gQ = QQ) || null !== FQ && null !== gQ && FQ.name === gQ.name && (0, ET.e)(FQ.pos, gQ.pos) && (0, ET.e)(FQ.normal, gQ.normal) || (QQ = sQ, TQ(sQ), PQ.gameBridge.send("setBlockHighlight", sQ))
        }));
        return () => {
          qQ(), null !== QQ && PQ.gameBridge.send("setBlockHighlight", null), TQ(null)
        }
      }), [WQ]);
      const sQ = (0, qQ.useCallback)((() => {
        XQ(!1)
      }), []);
      iT(WQ, sQ);
      const FQ = wQ => {
          if (!WQ) return;
          const qQ = PQ.gameBridge.lookup("blockAtViewPoint", uT(wQ));
          null !== qQ && (XQ(!1), QQ(qQ.pos))
        },
        gQ = WQ ? (0, CT.g)(FQ, "pointerup") : null,
        JQ = {
          onPointerDown: QQ => {
            null === gQ || void 0 === gQ || gQ.onPointerDown(QQ)
          },
          onPointerMove: QQ => {
            zQ.current = uT(QQ)
          },
          onPointerLeave: () => {
            zQ.current = null
          },
          onPointerUp: null === gQ || void 0 === gQ ? void 0 : gQ.onPointerUp,
          onClick: QQ => {
            "pointerType" in QQ.nativeEvent && "touch" === QQ.nativeEvent.pointerType || FQ(QQ)
          }
        };
      return {
        picking: WQ,
        setPicking: XQ,
        hovered: wQ,
        slotHandlers: JQ
      }
    }

    function kT(QQ) {
      PQ.gameBridge.send("setFreeCameraMovesFly", QQ)
    }

    function fT(QQ) {
      let {
        shown: WQ,
        setShown: XQ,
        canInsertCode: wQ
      } = QQ;
      const {
        t: TQ
      } = (0, ZQ.C)(), {
        isTouchScreen: zQ
      } = (0, fQ.n)(["isTouchScreen"]), sQ = (0, qQ.useRef)(null), PQ = (0, qQ.useCallback)((() => {
        var QQ;
        null === (QQ = sQ.current.closest(".CodeEditorBg").querySelector(".cm-content")) || void 0 === QQ || QQ.focus()
      }), []), {
        control: JQ,
        take: rQ,
        release: BQ,
        blocked: VQ
      } = function(QQ) {
        const [WQ, XQ] = (0, qQ.useState)("none"), wQ = (0, qQ.useRef)("none"), [TQ, zQ] = (0, qQ.useState)(!1), sQ = QQ => {
          wQ.current = QQ, XQ(QQ)
        }, FQ = (0, qQ.useCallback)((() => {
          const WQ = wQ.current;
          "none" !== WQ && (sQ("none"), (0, gq.z)(gq.e), "mouse" === WQ && QQ())
        }), [QQ]), PQ = (0, qQ.useCallback)((QQ => {
          cT() ? zQ(!0) : (sQ("mouse" === QQ && "touchOnly" !== (0, jT.c)() ? "mouse" : "touch"), (0, gq.y)(gq.e))
        }), []);
        return (0, dQ.f)("pointerLockUpdate", (QQ => {
          QQ && "touch" === wQ.current && "touchOnly" !== (0, jT.c)() ? sQ("mouse") : QQ || "mouse" !== wQ.current || FQ()
        })), (0, qQ.useEffect)((() => {
          if (!TQ) return;
          const QQ = () => {
            cT() || zQ(!1)
          };
          return QQ(), (0, gq.o)(QQ)
        }), [TQ]), iT("none" !== WQ, FQ), (0, qQ.useEffect)((() => {
          if ("none" === WQ) return;
          const QQ = QQ => {
            (0, lT.isTextEntry)(QQ.target) && FQ()
          };
          return document.addEventListener("focusin", QQ), () => {
            document.removeEventListener("focusin", QQ)
          }
        }), [WQ, FQ]), (0, qQ.useEffect)((() => (document.addEventListener("pointerlockerror", FQ), () => {
          document.removeEventListener("pointerlockerror", FQ)
        })), [FQ]), (0, qQ.useEffect)((() => () => {
          "none" !== wQ.current && null !== fQ.b.get("openInGameMenuName") && (0, gq.z)(gq.e)
        }), []), {
          control: WQ,
          take: PQ,
          release: FQ,
          blocked: TQ
        }
      }(PQ), DQ = (0, vT.p)(pT.i);
      (0, qQ.useEffect)((() => {
        "touch" !== JQ || "shown" !== WQ || DQ ? "none" === JQ && "expanded" === WQ && XQ("shown") : XQ("expanded")
      }), [JQ, DQ]),
      function(QQ, WQ) {
        const XQ = (0, qQ.useRef)(WQ);
        XQ.current = WQ;
        const wQ = (0, qQ.useRef)(null);
        (0, qQ.useLayoutEffect)((() => {
          const WQ = new HT((() => QQ.current.getBoundingClientRect()), (QQ => {
            var WQ;
            "none" !== XQ.current && aT(null !== (WQ = null === QQ || void 0 === QQ ? void 0 : QQ.rect) && void 0 !== WQ ? WQ : null), (0, dT.C)().setGameView(QQ)
          }), (() => performance.now()));
          wQ.current = WQ, WQ.sync();
          const qQ = (0, dT.q)((() => {
            WQ.sync()
          }));
          return () => {
            qQ(), fQ.b.set({
              worldPanelHud: null
            }), WQ.stop()
          }
        }), [QQ]), (0, qQ.useLayoutEffect)((() => {
          wQ.current.sync(), aT("none" === WQ ? null : wQ.current.rect), fQ.b.set({
            worldPanelHud: WQ
          })
        }), [WQ])
      }(sQ, "touch" === JQ ? "touchControls" : "none");
      const {
        picking: pQ,
        setPicking: GQ,
        hovered: UQ,
        slotHandlers: {
          onPointerDown: bQ,
          ...vQ
        }
      } = LT((QQ => {
        jQ.k.mB("CodeEditorInsertText", {
          text: `[${QQ.join(", ")}]`,
          focus: !zQ
        }), (0, pT.i)() && XQ("hidden")
      })), HQ = function() {
        const {
          allowed: QQ,
          movesFly: WQ
        } = (0, aQ.e)("freeCamera"), XQ = (0, qQ.useRef)(WQ), wQ = (0, qQ.useRef)(WQ);
        return wQ.current !== WQ && (wQ.current = WQ, XQ.current = WQ), (0, qQ.useEffect)((() => () => {
          XQ.current && kT(!1)
        }), []), {
          allowed: QQ,
          on: WQ,
          toggle: () => {
            XQ.current = !WQ, kT(!WQ)
          }
        }
      }(), lQ = (0, FQ.g)("hideCoordinates"), hQ = (0, aQ.e)("localPlayerAlive"), iQ = !hQ || VQ;
      (0, qQ.useEffect)((() => {
        hQ || BQ()
      }), [hQ, BQ]), (0, qQ.useEffect)((() => {
        !iQ && wQ || GQ(!1)
      }), [iQ, wQ, GQ]);
      const cQ = HQ.on ? IQ.s : IQ.h,
        AQ = pQ ? IQ.s : IQ.h;
      return (0, gQ.jsxs)("div", {
        className: "WorldPanel",
        children: [(0, gQ.jsxs)("div", {
          className: "WorldPanelHeader",
          children: [(0, gQ.jsx)("span", {
            className: "WorldPanelTitle",
            children: TQ("codeEditorWorld:title")
          }), "touch" === JQ && !DQ && (0, gQ.jsx)(IQ.h, {
            className: "WorldPanelButton",
            onClick: BQ,
            children: TQ("codeEditorWorld:backToCode")
          }), !iQ && HQ.allowed && !zQ && (0, gQ.jsx)(YQ.e, {
            tooltipInner: TQ("codeEditorWorld:freeCameraTooltip"),
            hoverOnly: !0,
            children: (0, gQ.jsx)(cQ, {
              className: "WorldPanelButton",
              ariaPressed: HQ.on,
              ariaLabel: TQ("codeEditorWorld:freeCamera"),
              onClick: HQ.toggle,
              children: (0, gQ.jsx)(yQ.d, {
                name: "video"
              })
            })
          }), !iQ && wQ && (0, gQ.jsx)(YQ.e, {
            tooltipInner: TQ("codeEditorWorld:pickTooltip"),
            hoverOnly: !0,
            children: (0, gQ.jsxs)(AQ, {
              className: "WorldPanelButton",
              ariaPressed: pQ,
              onClick: () => {
                BQ(), GQ(!pQ)
              },
              children: [(0, gQ.jsx)(yQ.d, {
                name: "crosshairs"
              }), TQ("codeEditorWorld:pick")]
            })
          })]
        }), !lQ && (0, gQ.jsx)(RT, {
          freeCamera: HQ.on,
          picking: pQ,
          hovered: UQ
        }), (0, gQ.jsxs)("div", {
          ref: sQ,
          className: pX()("WorldPanelSlot", {
            TouchControl: "touch" === JQ,
            Picking: pQ
          }),
          onPointerDown: QQ => {
            0 !== QQ.button || iQ || pQ || rQ(QQ.pointerType), bQ(QQ)
          },
          ...vQ,
          children: [!iQ && !pQ && (0, gQ.jsx)("div", {
            className: "WorldPanelCrosshair",
            children: "+"
          }), !iQ && "touch" !== JQ && (0, gQ.jsxs)("div", {
            className: "WorldPanelHint",
            children: [pQ && TQ(zQ ? "codeEditorWorld:tapToPick" : "codeEditorWorld:clickToPick"), !pQ && "none" === JQ && !HQ.on && TQ(zQ ? "codeEditorWorld:tapToPlay" : "codeEditorWorld:clickToPlay"), !pQ && "none" === JQ && HQ.on && TQ("codeEditorWorld:clickToFly"), "mouse" === JQ && (0, gQ.jsxs)(gQ.Fragment, {
              children: [(0, gQ.jsx)(bT.b, {
                noaAction: "OpenLobbyLeaderboard"
              }), TQ("codeEditorWorld:backToCode")]
            })]
          }), iQ && (0, gQ.jsxs)("div", {
            className: "WorldPanelWaiting",
            children: [(0, gQ.jsx)("span", {
              children: TQ(hQ ? "codeEditorWorld:gameWaiting" : "codeEditorWorld:died")
            }), (0, gQ.jsx)(IQ.h, {
              onClick: SQ.e,
              children: TQ("codeEditorWorld:toGame")
            })]
          })]
        })]
      })
    }
    var ST = XQ(5376);

    function tT(QQ) {
      let {
        nJ: WQ,
        setWorld: XQ,
        toggleWorld: wQ,
        aiShown: qQ,
        closeAi: TQ
      } = QQ;
      const {
        t: zQ
      } = (0, ZQ.C)(), sQ = qQ ? "ai" : "hidden" !== WQ ? "world" : "code", FQ = [{
        value: "code",
        label: zQ("codeEditorWorld:codePane")
      }, {
        value: "world",
        label: zQ("codeEditorWorld:title")
      }];
      qQ && FQ.push({
        value: "ai",
        label: zQ("codeEditorWorld:aiPane")
      });
      return (0, gQ.jsx)("div", {
        className: "CodeEditorPaneSwitch",
        children: (0, gQ.jsx)(ST.d, {
          options: FQ,
          value: sQ,
          onChange: QQ => {
            "world" !== QQ ? (qQ && TQ(), XQ("hidden")) : "hidden" === WQ ? wQ() : TQ()
          },
          ariaLabel: zQ("codeEditorWorld:panes"),
          keepsFocus: !0
        })
      })
    }
    var oT = XQ(37186),
      eT = XQ(37189),
      nT = XQ(37194),
      xT = XQ(37201);
    const YT = (0, qQ.lazy)((() => Promise.all([XQ.e(307), XQ.e(303), XQ.e(306), XQ.e(302), XQ.e(88), XQ.e(305), XQ.e(304), XQ.e(301)]).then((() => XQ(41536))))),
      NT = (0, qQ.lazy)((() => Promise.all([XQ.e(83), XQ.e(86), XQ.e(87), XQ.e(85), XQ.e(309)]).then((() => XQ(41701))))),
      ZT = (0, qQ.lazy)((() => Promise.all([XQ.e(307), XQ.e(306), XQ.e(88), XQ.e(86), XQ.e(87), XQ.e(85), XQ.e(305), XQ.e(304), XQ.e(84), XQ.e(95)]).then((() => XQ(41705)))));

    function OT(QQ) {
      return PQ.gameBridge.query("worldCodeAiChunk", QQ)
    }

    function KT() {
      return PQ.gameBridge.query("worldCodeAiGameState", null)
    }

    function mT(QQ) {
      const {
        gsUrl: WQ,
        gameNameWithVariation: XQ,
        lobbyName: wQ
      } = mq();
      return (0, bq.postJsonWithMetricsCookiesAndJsonResponse)(`${WQ}/code/get-lobby-code`, Uq.xk["get-lobby-code"].toBuffer({
        gameNameWithVariation: XQ,
        lobbyName: wQ,
        path: QQ
      }), {
        retries: 1
      })
    }
    let MT = !1;
    const Qz = [],
      Wz = {
        message: "You do not have permission to view the code.",
        type: "warning"
      },
      Xz = (0, qQ.memo)((function(QQ) {
        var WQ, XQ;
        let {
          show: wQ,
          onOpen: TQ,
          onClose: sQ,
          isLobbyCode: JQ
        } = QQ;
        const rQ = (0, qQ.useRef)(""),
          [BQ, VQ] = (0, qQ.useState)(null),
          DQ = (0, qQ.useRef)(JQ),
          [pQ, GQ] = (0, qQ.useState)({
            message: null,
            type: null
          }),
          [UQ, bQ] = (0, qQ.useState)(""),
          vQ = pQ.message ? pQ : {
            message: UQ,
            type: "warning"
          },
          [hQ, iQ] = (0, qQ.useState)(!0),
          [cQ, RQ] = (0, FT.g)(FT.e),
          [EQ, CQ] = (0, FT.g)(FT.b),
          [uQ, LQ] = (0, qQ.useState)(!1),
          [kQ, tQ] = (0, qQ.useState)(!1),
          oQ = (0, qQ.useRef)(null),
          eQ = (0, qQ.useRef)(!1);
        (0, qQ.useEffect)((() => {
          var QQ;
          kQ && eQ.current && (eQ.current = !1, null === (QQ = oQ.current) || void 0 === QQ || QQ.focus())
        }), [kQ]);
        const nQ = (0, oT.e)(),
          xQ = (0, qQ.useRef)(null),
          NQ = (0, qQ.useRef)(null),
          {
            openInGameMenuName: OQ,
            openEverythingMenuName: KQ,
            worldPanelHud: mQ
          } = (0, fQ.n)(["openInGameMenuName", "openEverythingMenuName", "worldPanelHud"]),
          MQ = QQ => {
            wQ && (xQ.current = QQ, aW.current = !0)
          };
        (0, dQ.f)("OpenReportMenu", (() => {
          MQ("nI")
        })), (0, dQ.f)("OpenStoreFromCodeEditor", (() => {
          MQ("store")
        })), (0, qQ.useEffect)((() => {
          const QQ = xQ.current;
          null === QQ || "nI" === QQ && ("makeReport" === OQ || "makeDiscordReport" === OQ) || "store" === QQ && null !== KQ || (xQ.current = null, null === OQ && null === KQ ? JQ ? (NQ.current = wX.current, jQ.k.mB("EditLobbyCode", BQ)) : jQ.k.mB("EditCodeBlock", {
            pos: BQ,
            canChangePos: DQ.current
          }) : (0, rT.C)())
        }), [OQ, KQ, JQ, BQ]), (0, qQ.useEffect)((() => {
          if (wQ) return () => {
            NQ.current = null
          }
        }), [wQ]);
        const [QW, WW] = function() {
          const [QQ, WQ] = (0, qQ.useState)(MT);
          return (0, dQ.f)("CodeEditorAiHelperShown", (QQ => {
            WQ(QQ)
          })), [QQ, (0, qQ.useCallback)((QQ => {
            MT = QQ, jQ.k.mB("CodeEditorAiHelperShown", QQ)
          }), [])]
        }(), [XW, wW] = (0, qQ.useState)(null), [qW, TW] = (0, qQ.useState)([]), [zW, sW] = (0, qQ.useState)(0), [FW, PW] = (0, qQ.useState)(0), [gW, JW] = (0, qQ.useState)(""), IW = (0, qQ.useRef)(null), [jW, BW] = (0, qQ.useState)(JQ ? xT.e : null), yW = JQ || null !== BQ, VW = (0, FQ.g)("canEditCode"), DW = (0, FQ.g)("canUseDevCreativeItems"), pW = (0, JT.i)("welcome"), GW = (0, JT.i)("docsOverview"), UW = GW ? "docsOverview" : "welcome", bW = null !== GW && void 0 !== GW ? GW : pW, vW = (0, JT.i)("aiHelperOverview"), dW = vW ? "aiHelperOverview" : "welcome", HW = null !== vW && void 0 !== vW ? vW : pW, aW = (0, qQ.useRef)(!1), lW = (0, qQ.useRef)(!1), hW = (0, qQ.useRef)(null), [iW, cW] = (0, qQ.useState)(""), [AW, RW] = (0, qQ.useState)(!1), [EW, CW] = (0, qQ.useState)(null), uW = (0, aQ.e)("connectedGame"), LW = JQ && VW && "classic" === uW.gameNameWithVariation && !(0, rW.I)(uW.lobbyName), [kW, fW] = (0, qQ.useState)(null), [SW, oW] = (0, qQ.useState)({
          [vq.j]: ""
        }), [nW, xW] = (0, qQ.useState)({
          assets: {},
          revision: 0
        }), YW = (0, qQ.useRef)(nW), NW = (0, qQ.useCallback)((QQ => {
          var WQ;
          QQ.revision < YW.current.revision || (YW.current = QQ, xW(QQ), bQ(QQ.startupError ? `Schematics could not load: ${QQ.startupError}` : ""), null === (WQ = BX.current) || void 0 === WQ || WQ.onLobbyFilesChanged({
            ...FX.current,
            ...(0, Rq.l)(QQ.assets)
          }))
        }), []), [ZW, OW] = (0, qQ.useState)(vq.j), [KW, mW] = (0, qQ.useState)(null), [MW, QX] = (0, qQ.useState)(null), WX = (0, qQ.useRef)(!1), XX = (0, qQ.useRef)(null), wX = (0, qQ.useRef)(ZW);
        wX.current = ZW;
        const qX = (0, qQ.useRef)(KW);
        qX.current = KW;
        const TX = KW ? null : EW,
          zX = TX && !TX.engineLocked ? TX.worldCodeEngine : null,
          sX = (0, qQ.useRef)(MW);
        sX.current = MW;
        const FX = (0, qQ.useRef)(SW);
        FX.current = SW;
        const PX = (0, qQ.useRef)(null),
          gX = (0, qQ.useRef)(null),
          [JX, rX] = (0, qQ.useState)(!1),
          IX = (0, eq.s)(),
          jX = (0, qQ.useRef)([]),
          BX = (0, qQ.useRef)(null),
          yX = (0, qQ.useRef)(null),
          VX = (0, qQ.useRef)(null);

        function DX(QQ) {
          GQ(QQ), clearTimeout(hW.current), hW.current = setTimeout((() => {
            GQ({
              message: null,
              type: null
            })
          }), 3e3)
        }
        const GX = (0, qQ.useCallback)((function() {
            let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            WX.current && XX.current && (PQ.gameBridge.send("sendCodeCollab", {
              Zq: dq.e.Leave,
              Oq: (0, dq.y)(XX.current),
              lg: !!QQ || null
            }), WX.current = !1, XX.current = null), fW(null)
          }), []),
          UX = (0, qQ.useCallback)((QQ => {
            const WQ = {
              kind: "lobby",
              path: QQ
            };
            XX.current = WQ, OW(QQ), rQ.current = "", PQ.gameBridge.send("sendCodeCollab", {
              Zq: dq.e.Join,
              Oq: (0, dq.y)(WQ)
            }), WX.current = !0
          }), []),
          bX = (0, qQ.useCallback)((QQ => {
            var WQ;
            const XQ = null === (WQ = yX.current) || void 0 === WQ ? void 0 : WQ.collabState;
            return XQ && "lobby" === XQ.docKey.kind && XQ.docKey.path === QQ && wX.current === QQ ? Promise.resolve({
              doc: XQ.doc,
              version: XQ.version,
              clientID: XQ.clientID,
              docKey: XQ.docKey,
              httpConfig: XQ.httpConfig
            }) : new Promise(((WQ, XQ) => {
              const wQ = setTimeout((() => {
                  jX.current = jX.current.filter((QQ => QQ !== qQ)), XQ(new Error(`Timed out joining ${QQ}`))
                }), 15e3),
                qQ = XQ => {
                  "lobby" === XQ.docKey.kind && XQ.docKey.path === QQ && (clearTimeout(wQ), jX.current = jX.current.filter((QQ => QQ !== qQ)), WQ(XQ))
                };
              jX.current.push(qQ), wX.current !== QQ ? (GX(!0), UX(QQ)) : WX.current || UX(QQ)
            }))
          }), [UX, GX]),
          vX = (0, qQ.useCallback)((async function(QQ, WQ) {
            let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
            const wQ = Date.now();
            let qQ = QQ in FX.current;
            for (; qQ !== WQ;) {
              if (Date.now() - wQ > XQ) throw new Error(`Timed out waiting for lobby path ${QQ} present=${WQ}`);
              await (0, Dw.L)(50), qQ = QQ in FX.current
            }
          }), []),
          dX = (0, qQ.useCallback)((QQ => {
            const WQ = FX.current,
              XQ = vq.j in WQ && vq.k in WQ;
            if (!(0, Hq.h)(QQ) || XQ) {
              if (wX.current === QQ) {
                var wQ;
                const qQ = XQ && (0, Hq.h)(QQ) ? QQ === vq.j ? vq.k : vq.j : null !== (wQ = (0, Hq.c)(WQ)) && void 0 !== wQ ? wQ : vq.j;
                gX.current = {
                  fromPath: QQ,
                  toPath: qQ
                }, OW(qQ)
              }
              PQ.gameBridge.send("sendCodeCollab", {
                Zq: dq.e.DeleteFile,
                Oq: (0, dq.y)({
                  kind: "lobby",
                  path: wX.current
                }),
                hg: QQ
              })
            }
          }), []),
          HX = (0, qQ.useCallback)((QQ => {
            NQ.current = null, mW(null), QX(null), !JQ || QQ === wX.current && WX.current || (GX(!0), UX(QQ))
          }), [JQ, GX, UX]),
          aX = (0, qQ.useCallback)(((QQ, WQ) => {
            const XQ = cq.f[QQ],
              wQ = XQ && WQ in XQ.files ? WQ : "index.ts";
            if (QQ !== qX.current || wQ !== sX.current) {
              var qQ;
              if (QQ !== qX.current) null === (qQ = BX.current) || void 0 === qQ || qQ.stopContinuousSync(), GX(!0);
              mW(QQ), QX(wQ)
            }
          }), [GX]),
          lX = (0, qQ.useCallback)((QQ => {
            var WQ;
            const XQ = wX.current,
              wQ = FX.current[XQ],
              qQ = WX.current && !qX.current && XQ in QQ && void 0 !== wQ ? {
                ...QQ,
                [XQ]: wQ
              } : QQ;
            oW(qQ);
            const TQ = PX.current;
            if (TQ && TQ in QQ) PX.current = null, TQ !== wX.current && HX(TQ);
            else if (!(wX.current in QQ) && WX.current && !qX.current) {
              var zQ;
              HX(null !== (zQ = (0, Hq.c)(QQ)) && void 0 !== zQ ? zQ : vq.j)
            }
            null === (WQ = BX.current) || void 0 === WQ || WQ.onLobbyFilesChanged({
              ...qQ,
              ...(0, Rq.l)(YW.current.assets)
            })
          }), [HX]),
          hX = (0, qQ.useCallback)((() => mT(wX.current).then((async QQ => {
            if (!WX.current || !QQ.files) return null;
            lX(QQ.files);
            const WQ = await Mq({
              action: "state"
            });
            return NW(WQ), {
              ...QQ.files,
              ...(0, Rq.l)(WQ.assets)
            }
          })).catch((QQ => (console.error("[CodeCollab] Failed to fetch lobby files via HTTP", QQ), DX({
            message: "Could not refresh the file list",
            type: "warning"
          }), null)))), [lX, NW]),
          iX = () => {
            sQ()
          };
        (0, qQ.useEffect)((() => {
          if (bQ(""), !wQ || !JQ) return;
          let QQ = !1;
          return YW.current = {
            assets: {},
            revision: 0
          }, xW(YW.current), Mq({
            action: "state"
          }).then((WQ => {
            QQ || NW(WQ)
          })).catch((WQ => {
            console.error("Could not load project schematics", WQ), QQ || bQ("Could not load schematics. Reopen the Code Editor to retry.")
          })), () => {
            QQ = !0
          }
        }), [wQ, JQ, NW]);
        const cX = (0, qQ.useCallback)((function() {
            let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            XX.current && PQ.gameBridge.send("sendCodeCollab", {
              Zq: dq.e.Submit,
              Oq: (0, dq.y)(XX.current),
              ...QQ ? {
                QT: "keepOpen"
              } : {}
            })
          }), []),
          AX = (0, qQ.useCallback)((() => {
            if (!XX.current || "lobby" !== XX.current.kind) return;
            const QQ = iW.trim();
            (0, aq.q)(QQ) ? (PQ.gameBridge.send("sendCodeCollab", {
              Zq: dq.e.ReloadAsVariation,
              Oq: (0, dq.y)(XX.current),
              QT: QQ
            }), RW(!1)) : DX({
              message: "Variation must be 1-32 characters: A-Z, a-z, 0-9, _, -",
              type: "warning"
            })
          }), [iW]),
          RX = (0, qQ.useCallback)((QQ => {
            PQ.gameBridge.send("sendCodeCollab", {
              Zq: dq.e.SetEngine,
              Oq: (0, dq.y)({
                kind: "lobby",
                path: wX.current
              }),
              QT: QQ
            })
          }), []),
          EX = (0, qQ.useCallback)((QQ => {
            if (!qX.current && VW && (DQ.current || JQ)) {
              if (JQ) {
                var WQ;
                const XQ = (0, Hq.o)(FX.current, wX.current),
                  wQ = Math.min(tW.C, Math.max(0, tW.E - XQ)),
                  qQ = QQ.slice(0, wQ);
                return rQ.current = qQ, oW((QQ => ({
                  ...QQ,
                  [wX.current]: qQ
                }))), void(null === (WQ = BX.current) || void 0 === WQ || WQ.onDocTextChanged(wX.current, qQ))
              }
              rQ.current = QQ, JW(QQ)
            }
          }), [VW, JQ]);
        (0, dQ.f)("EditLobbyCode", (QQ => {
          var WQ;
          AQ.featureFlags.canSeePlayerWrittenText && JQ && (GX(), VQ(QQ), rQ.current = "", oW({
            [vq.j]: ""
          }), CW(null), OW(vq.j), mW(null), QX(null), PX.current = null, gX.current = null, null === (WQ = BX.current) || void 0 === WQ || WQ.stopContinuousSync(), TQ(), UX(vq.j))
        })), (0, dQ.f)("EditCodeBlock", (QQ => {
          let {
            pos: WQ,
            canChangePos: XQ
          } = QQ;
          if (AQ.featureFlags.canSeePlayerWrittenText && !JQ)
            if (GX(), null !== WQ && (WQ = [...WQ]), VQ(WQ), DQ.current = XQ, null !== WQ) {
              rQ.current = "", JW(""), TQ();
              const QQ = {
                  kind: "codeBlock",
                  pos: WQ
                },
                wQ = (0, dq.y)(QQ);
              IW.current !== wQ && (IW.current = wQ, TW([]), PW(zW)), BW((0, xT.c)(wQ, [WQ[0], WQ[1], WQ[2]], !!XQ)), XX.current = QQ, PQ.gameBridge.send("sendCodeCollab", {
                Zq: dq.e.Join,
                Oq: (0, dq.y)(QQ)
              }), WX.current = !0
            } else wQ && sQ()
        })), (0, dQ.f)("codeCollabRejoin", (QQ => {
          const WQ = XX.current ? (0, dq.y)(XX.current) : null;
          WQ && QQ.docKey === WQ && (rQ.current = QQ.doc, JQ || JW(QQ.doc), fW((WQ => WQ ? {
            ...WQ,
            doc: QQ.doc,
            version: QQ.version,
            clientID: (0, iq.e)()
          } : WQ)))
        })), (0, dQ.f)("codeCollab", (QQ => {
          var WQ;
          const XQ = XX.current ? (0, dq.y)(XX.current) : null;
          if (QQ.type === dq.f.LobbyFilesChanged && JQ) {
            if ("string" !== typeof QQ.files) return void hX();
            try {
              lX(JSON.parse(QQ.files))
            } catch (PQ) {
              console.error("[CodeCollab] Failed to parse lobby files", PQ), hX()
            }
            return
          }
          if (QQ.type === dq.f.EngineSettings && JQ) return void CW(qT(QQ.engineSettings));
          const qQ = QQ.type === dq.f.Joined ? (0, dq.k)(QQ.docKey) : null,
            TQ = JQ && "lobby" === (null === (WQ = XX.current) || void 0 === WQ ? void 0 : WQ.kind) && (0, Hq.h)(XX.current.path) && "lobby" === (null === qQ || void 0 === qQ ? void 0 : qQ.kind) && (0, Hq.h)(qQ.path);
          if (!XQ || QQ.docKey === XQ || TQ)
            if (QQ.type !== dq.f.ForceClose) {
              if (wQ)
                if (QQ.type === dq.f.Joined) {
                  var zQ;
                  const gQ = JSON.parse(QQ.peers),
                    IQ = QQ.existingCursors ? JSON.parse(QQ.existingCursors) : [],
                    yQ = (0, iq.e)(),
                    VQ = mq(),
                    {
                      gsUrl: DQ,
                      gameNameWithVariation: pQ,
                      lobbyName: UQ
                    } = VQ,
                    bQ = null !== (zQ = (0, dq.k)(QQ.docKey)) && void 0 !== zQ ? zQ : XX.current;
                  bQ && (XX.current = bQ, "lobby" === bQ.kind && (OW(bQ.path), wX.current = bQ.path));
                  const vQ = bQ || (JQ ? {
                    kind: "lobby",
                    path: wX.current
                  } : {
                    kind: "codeBlock",
                    pos: BQ
                  });

                  function dQ(WQ) {
                    var XQ, wQ;
                    if (!WX.current) return;
                    const qQ = null !== (XQ = WQ.code) && void 0 !== XQ ? XQ : "",
                      TQ = null !== (wQ = WQ.collabVersion) && void 0 !== wQ ? wQ : 0;
                    rQ.current = qQ, JQ || JW(qQ), JQ && WQ.files ? oW(WQ.files) : JQ && oW((QQ => ({
                      ...QQ,
                      [wX.current]: qQ
                    })));
                    const zQ = {
                      doc: qQ,
                      version: TQ,
                      clientID: yQ,
                      docKey: vQ,
                      peers: gQ,
                      editorCount: QQ.editorCount,
                      existingCursors: IQ,
                      httpConfig: VQ
                    };
                    if (fW(zQ), "lobby" === vQ.kind) {
                      var sQ;
                      const QQ = {
                        doc: qQ,
                        version: TQ,
                        clientID: yQ,
                        docKey: vQ,
                        httpConfig: VQ
                      };
                      for (const WQ of [...jX.current]) WQ(QQ);
                      null === (sQ = BX.current) || void 0 === sQ || sQ.startWhenReady()
                    }
                    WQ.canSeeCode ? (clearTimeout(hW.current), GQ({
                      message: null,
                      type: null
                    })) : function(QQ) {
                      clearTimeout(hW.current), GQ(QQ)
                    }(Wz);
                    const FQ = NQ.current;
                    NQ.current = null, JQ && FQ && WQ.files && FQ in WQ.files && FQ !== wX.current && HX(FQ)
                  }
                  JQ ? mT(wX.current).then(dQ).catch((QQ => {
                    console.error("[CodeCollab] Failed to fetch lobby code via HTTP", QQ), GX()
                  })) : (0, bq.postJsonWithMetricsCookiesAndJsonResponse)(`${DQ}/code/get-code-block`, Uq.xk["get-code-block"].toBuffer({
                    gameNameWithVariation: pQ,
                    lobbyName: UQ,
                    pos: BQ
                  }), {
                    retries: 1
                  }).then(dQ).catch((QQ => {
                    console.error("[CodeCollab] Failed to fetch code block via HTTP", QQ), GX()
                  }))
                } else if (QQ.type === dq.f.Presence) {
                if (!XQ) return;
                const HQ = JSON.parse(QQ.peers);
                fW((WQ => WQ ? {
                  ...WQ,
                  peers: HQ,
                  editorCount: QQ.editorCount
                } : WQ))
              }
            } else {
              var FQ;
              if (!XQ) return;
              wQ && JQ && "keptOpen" === QQ.updates && jQ.k.mB("CodeEditorKeepEdits");
              const aQ = XX.current;
              WX.current = !1, XX.current = null, fW(null);
              if (!JQ || "close" === QQ.updates) return (0, nT.i)(), void(wQ && sQ());
              if (!wQ) return;
              const lQ = FX.current,
                hQ = gX.current;
              gX.current = null;
              const iQ = "lobby" === (null === aQ || void 0 === aQ ? void 0 : aQ.kind) && aQ.path === (null === hQ || void 0 === hQ ? void 0 : hQ.fromPath),
                cQ = hQ && (iQ || hQ.toPath in lQ || (0, Hq.h)(hQ.toPath)) ? hQ.toPath : wX.current in lQ ? wX.current : null !== (FQ = (0, Hq.c)(lQ)) && void 0 !== FQ ? FQ : vq.j;
              UX(cQ)
            }
        })), (0, dQ.f)("refetchCode", (() => {
          AQ.featureFlags.canSeePlayerWrittenText && wQ && WX.current && (VW || (GX(), JQ ? jQ.k.mB("EditLobbyCode", BQ) : jQ.k.mB("EditCodeBlock", {
            pos: BQ,
            canChangePos: DQ.current
          })))
        }));
        const CX = (0, qQ.useCallback)((() => {
            wQ && (LQ(!1), window.open("/docs", "_blank", "popup=yes,width=1200,height=800"))
          }), [wQ]),
          uX = (0, qQ.useCallback)((() => {
            LQ(!1)
          }), []);
        (0, qQ.useEffect)((() => {
          wQ && VW && ("docsButton" === bW && uQ ? (0, rT.e)("docsButton") : bW && rT.i.includes(bW) && !uQ && (LQ(!0), WW(!1)))
        }), [wQ, VW, bW, uQ, WW]);
        const LX = (0, qQ.useCallback)((() => {
          WW(!1)
        }), [WW]);
        (0, qQ.useEffect)((() => {
          wQ && VW && yW && ("aiHelperButton" === HW && QW ? (0, rT.e)("aiHelperButton") : HW && rT.d.includes(HW) && !QW && (WW(!0), LQ(!1)))
        }), [wQ, VW, yW, HW, QW, WW]), (0, qQ.useEffect)((() => {
          if (!wQ || !VW) return;
          const QQ = JQ ? "worldCode" : "codeBlock";
          return (0, rT.D)(QQ, !0), () => {
            (0, rT.D)(QQ, !1)
          }
        }), [wQ, VW, JQ]), (0, qQ.useEffect)((() => {
          if (wQ) return () => {
            aW.current ? aW.current = !1 : (0, rT.C)()
          }
        }), [wQ]), (0, qQ.useEffect)((() => {
          (0, rT.E)("exportButton", !!DW)
        }), [DW]);
        const {
          t: kX
        } = (0, ZQ.C)(), fX = !QW && zW > FW, SX = fX ? IQ.P : IQ.G, tX = (0, qQ.useCallback)(((QQ, WQ) => {
          jQ.k.mB("CodeEditorGoToLine", {
            path: QQ,
            line: WQ
          }), HX(QQ)
        }), [HX]), oX = (0, qQ.useCallback)((QQ => {
          VX.current = QQ
        }), []), eX = function(QQ, WQ) {
          const [XQ, wQ] = (0, qQ.useState)(null);
          return (0, qQ.useEffect)((() => {
            if (!WQ) return void wQ(null);
            let XQ = !1;
            return oq(QQ).then((QQ => {
              XQ || wQ(QQ)
            }), (QQ => {
              console.error("[CodeEditor] could not collect the imported plugins", QQ), XQ || wQ(null)
            })), () => {
              XQ = !0
            }
          }), [QQ, WQ]), XQ
        }(SW, wQ);
        (0, qQ.useEffect)((() => {
          eX && KW && !eX.includes(KW) && (mW(null), QX(null), JQ && !WX.current && UX(wX.current))
        }), [KW, eX, JQ, UX]), yX.current = {
          collabState: kW,
          ensureJoinedPath: bX,
          waitForLobbyPath: vX,
          pullLobbyFiles: hX,
          t: kX,
          canEditCode: !!VW
        }, BX.current || (BX.current = new Oq({
          getLobbyFiles: () => ({
            ...FX.current,
            ...(0, Rq.l)(YW.current.assets)
          }),
          deleteSchematic: async QQ => {
            const WQ = await Mq({
              action: "remove",
              path: QQ,
              expectedRevision: YW.current.revision
            });
            NW(WQ)
          },
          getActivePath: () => wX.current,
          getCollabSnapshot: () => {
            var QQ;
            if (qX.current) return null;
            const WQ = null === (QQ = yX.current) || void 0 === QQ ? void 0 : QQ.collabState;
            return WQ ? {
              doc: WQ.doc,
              version: WQ.version,
              clientID: WQ.clientID,
              docKey: WQ.docKey,
              httpConfig: WQ.httpConfig
            } : null
          },
          replaceActiveDoc: (QQ, WQ) => {
            var XQ, wQ;
            return null !== (XQ = null === (wQ = VX.current) || void 0 === wQ ? void 0 : wQ.call(VX, QQ, WQ)) && void 0 !== XQ && XQ
          },
          ensureJoined: QQ => yX.current.ensureJoinedPath(QQ),
          createFile: (QQ, WQ) => {
            !1 !== (null === WQ || void 0 === WQ ? void 0 : WQ.focus) && (PX.current = QQ), PQ.gameBridge.send("sendCodeCollab", {
              Zq: dq.e.CreateFile,
              Oq: (0, dq.y)({
                kind: "lobby",
                path: wX.current
              }),
              hg: QQ
            })
          },
          renameFile: (QQ, WQ) => {
            const XQ = (0, dq.y)({
              kind: "lobby",
              path: wX.current
            });
            wX.current === QQ && (gX.current = {
              fromPath: QQ,
              toPath: WQ
            }, OW(WQ)), PQ.gameBridge.send("sendCodeCollab", {
              Zq: dq.e.RenameFile,
              Oq: XQ,
              hg: QQ,
              ig: WQ
            })
          },
          deleteFile: QQ => {
            dX(QQ)
          },
          waitForLobbyPath: (QQ, WQ, XQ) => yX.current.waitForLobbyPath(QQ, WQ, XQ),
          pullLobbyFiles: () => yX.current.pullLobbyFiles(),
          setMessage: (QQ, WQ) => {
            DX({
              message: QQ,
              type: WQ
            })
          },
          onUnlinked: () => {
            rX(!1)
          },
          t: QQ => yX.current.t(QQ),
          canEditCode: () => yX.current.canEditCode,
          getStorageKey: () => {
            const {
              gameNameWithVariation: QQ,
              lobbyName: WQ
            } = PQ.gameBridge.latest("connectedGame");
            return (0, eq.i)(QQ, WQ)
          }
        }));
        const nX = (0, qQ.useCallback)((async QQ => {
            const WQ = BX.current;
            if (!WQ) return !1;
            try {
              return await WQ.writeLobbyFiles(QQ)
            } catch (XQ) {
              return console.error("World Code AI: couldn't write the change", XQ), !1
            }
          }), []),
          xX = (0, qQ.useCallback)((async QQ => {
            var WQ, XQ;
            const wQ = null === (WQ = QQ.find((QQ => QQ.path === eT.c))) || void 0 === WQ ? void 0 : WQ.text,
              qQ = XX.current;
            return void 0 !== wQ && "codeBlock" === (null === qQ || void 0 === qQ ? void 0 : qQ.kind) && (!(null === (XQ = VX.current) || void 0 === XQ || !XQ.call(VX, (0, dq.y)(qQ), wQ)) && (rQ.current = wQ, JW(wQ), !0))
          }), []),
          YX = (0, qQ.useCallback)((async () => {
            try {
              var QQ, WQ;
              const XQ = await mT(vq.j);
              return !1 === XQ.canSeeCode ? null : null !== (QQ = XQ.files) && void 0 !== QQ ? QQ : {
                [vq.j]: null !== (WQ = XQ.code) && void 0 !== WQ ? WQ : ""
              }
            } catch (XQ) {
              return console.error("World Code AI: couldn't read World Code for a code block", XQ), null
            }
          }), []),
          NX = (0, qQ.useMemo)((() => ({
            [eT.c]: gW
          })), [gW]),
          ZX = (0, qQ.useCallback)(((QQ, WQ) => {
            jQ.k.mB("CodeEditorGoToLine", {
              path: eT.c,
              line: WQ
            })
          }), []);
        (0, qQ.useEffect)((() => {
          QW && wQ && PW(zW)
        }), [QW, wQ, zW]);
        const OX = (0, qQ.useCallback)((() => {
            var QQ, WQ;
            cX();
            const XQ = (0, AQ.isTouchscreen)() ? "open World Code again" : `press ${null!==(QQ=null===(WQ=eW.s.OpenCodeEditor)||void 0===WQ?void 0:WQ[0])&&void 0!==QQ?QQ:"F8"}`,
              wQ = JQ ? `\ud83e\udd16 Try out your change, then ${XQ} to tell the AI Helper how it went.` : "\ud83e\udd16 Click the code block to try your change, then open it again to tell the AI Helper how it went.";
            jQ.k.mB("chat", {
              content: [{
                str: wQ,
                style: {
                  color: HQ.N.cyanUiText
                }
              }]
            })
          }), [cX, JQ]),
          KX = (0, qQ.useCallback)((QQ => {
            const WQ = BQ,
              XQ = DQ.current;
            JQ || !WQ || PQ.gameBridge.lookup("codeBlockClickable", WQ) ? (0, nT.m)(QQ, {
              submit: () => {
                cX(), jQ.k.mB("chat", {
                  content: [{
                    str: "\ud83e\udd16 Testing your change. The AI Helper comes back in a moment.",
                    style: {
                      color: HQ.N.cyanUiText
                    }
                  }]
                }), !JQ && WQ && setTimeout((() => {
                  PQ.gameBridge.send("clickCodeBlock", WQ)
                }), 1e3)
              },
              reopen: () => {
                (0, SQ.r)() || (JQ ? jQ.k.mB("EditLobbyCode", WQ) : jQ.k.mB("EditCodeBlock", {
                  pos: WQ,
                  canChangePos: XQ
                }))
              }
            }) : OX()
          }), [cX, JQ, BQ, OX]),
          mX = (0, qQ.useCallback)((() => {
            WW(!1)
          }), [WW]),
          MX = (0, qQ.useRef)(iX);
        MX.current = iX;
        const Qw = (0, qQ.useCallback)((function(QQ) {
            let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            jQ.k.mB("WorldCodeAiDraft", {
              text: QQ,
              send: WQ
            }), MX.current(), jQ.k.mB("EditLobbyCode", BQ)
          }), [BQ]),
          Ww = (0, qQ.useCallback)((QQ => {
            MX.current(), QQ.codeBlock ? jQ.k.mB("EditCodeBlock", {
              pos: [...QQ.pos],
              canChangePos: QQ.canChangePos
            }) : jQ.k.mB("EditLobbyCode", BQ)
          }), [BQ]);
        (0, dQ.f)("WorldCodeAiDraft", (QQ => {
          JQ && (wW(QQ), WW(!0))
        }));
        const Xw = !!VW && !!bW && rT.i.includes(bW),
          ww = !!VW && !!HW && rT.d.includes(HW);
        (0, qQ.useEffect)((() => {
          wQ && QW && yW && !Xw && LQ(!1)
        }), [wQ, QW, yW, Xw]);
        const qw = (0, qQ.useCallback)((() => {
            WW(!1), LQ(!1)
          }), [WW]),
          {
            nJ: Tw,
            setWorld: zw,
            toggleWorld: sw
          } = function(QQ) {
            let {
              showAi: WQ,
              showDocs: XQ,
              showChat: wQ,
              hideOtherRightPanels: TQ
            } = QQ;
            const [zQ, sQ] = (0, qQ.useState)("hidden"), FQ = (0, qQ.useRef)(null), PQ = (0, qQ.useCallback)((() => {
              FQ.current = null, sQ((QQ => "hidden" === QQ ? QQ : (0, pT.i)() ? "hidden" : "shown"))
            }), []);
            (0, qQ.useEffect)((() => {
              (WQ || XQ) && PQ()
            }), [WQ, XQ, PQ]), (0, qQ.useEffect)((() => {
              wQ && PQ()
            }), [wQ, PQ]);
            const gQ = "hidden" !== zQ && (0, pT.i)();
            (0, qQ.useLayoutEffect)((() => {
              if (gQ) {
                const QQ = document.activeElement;
                QQ instanceof HTMLElement && QQ.closest(".cm-content") && (FQ.current = QQ, QQ.blur())
              } else {
                var QQ;
                null === (QQ = FQ.current) || void 0 === QQ || QQ.focus(), FQ.current = null
              }
            }), [gQ]);
            const JQ = (0, qQ.useCallback)((() => {
              "hidden" === zQ ? (sQ("shown"), (0, pT.i)() && TQ()) : sQ("hidden")
            }), [zQ, TQ]);
            return {
              nJ: zQ,
              setWorld: sQ,
              toggleWorld: JQ
            }
          }({
            showAi: QW,
            showDocs: uQ,
            showChat: kQ,
            hideOtherRightPanels: qw
          }),
          Fw = QW && null !== jW && yW,
          Pw = (0, qQ.useCallback)((() => {
            wW(null)
          }), []),
          [gw, Jw] = (0, qQ.useState)(null);
        (0, dQ.f)("WorldCodeAiSelection", (QQ => {
          wQ && (Jw(QQ), WW(!0), LQ(!1))
        }));
        const rw = (0, qQ.useCallback)((() => {
          Jw(null)
        }), []);
        (0, dQ.f)("chat", (QQ => {
          let {
            content: WQ
          } = QQ;
          if (!JQ && null === IW.current) return;
          const XQ = Array.isArray(WQ) ? WQ : [WQ],
            wQ = XQ.some((QQ => {
              var WQ;
              return (null === QQ || void 0 === QQ || null === (WQ = QQ.style) || void 0 === WQ ? void 0 : WQ.color) === HQ.N.redUiText
            })),
            qQ = XQ.map((QQ => {
              var WQ;
              const XQ = null !== (WQ = null === QQ || void 0 === QQ ? void 0 : QQ.str) && void 0 !== WQ ? WQ : QQ;
              return "string" === typeof XQ ? XQ : ""
            })).join("");
          wQ && /world code|error/i.test(qQ) && (TW((QQ => [...QQ, qQ].slice(-10))), sW((QQ => QQ + 1)), (0, nT.g)(qQ))
        })), (0, qQ.useEffect)((() => {
          if (!wQ || !JQ || !IX) return;
          let QQ = !1;
          return (async (WQ, XQ) => {
            const wQ = await (null === (WQ = BX.current) || void 0 === WQ ? void 0 : WQ.tryRestoreHandle());
            !QQ && wQ && (rX(!0), null === (XQ = BX.current) || void 0 === XQ || XQ.startWhenReady())
          })(), () => {
            QQ = !0
          }
        }), [wQ, JQ, IX]), (0, qQ.useEffect)((() => {
          var QQ;
          wQ || (null === (QQ = BX.current) || void 0 === QQ || QQ.stopContinuousSync(), GX(!1), lW.current && (lW.current = !1, PQ.gameBridge.send("sendChatMessage", {
            cg: "//export",
            channelName: null
          })))
        }), [wQ, GX]);
        const Iw = (0, qQ.useCallback)((async () => {
            if (IX && BX.current) try {
              if (!await BX.current.linkFolder()) return;
              rX(!0), await BX.current.startWhenReady()
            } catch (QQ) {
              console.error("[WorldCodeDirectorySync] Link failed", QQ), DX({
                message: kX("codeEditor:directorySyncError"),
                type: "warning"
              })
            }
          }), [IX, kX]),
          jw = (0, qQ.useCallback)((async () => {
            BX.current && await BX.current.unlinkFolder()
          }), []),
          Bw = (0, qQ.useCallback)((() => {
            IX ? JX ? jw() : Iw() : mw.NotificationProvider.showAlertPopup({
              title: "codeEditor:directorySyncUnsupported",
              subtitle: "codeEditor:directorySyncUnsupportedBody",
              confirmText: "general:ok"
            })
          }), [IX, JX, Iw, jw]),
          yw = JQ && "hidden" !== Tw;
        return (0, gQ.jsxs)(zQ.b, {
          className: pX()("CodeEditorBg", {
            CodeEditorLight: cQ,
            WorldShown: "hidden" !== Tw,
            WorldTouchControl: "touchControls" === mQ
          }),
          close: iX,
          escDoesExit: !0,
          show: wQ,
          togglePointerLock: !1,
          globallyUniqueKey: JQ ? "LobbyCodeEditor" : "CodeBlockEditor",
          children: [(0, gQ.jsx)(JT.c, {
            tutorial: "welcome",
            step: "codeBlockIntro",
            text: kX("codeEditor:tutorialCodeBlockIntro"),
            enabled: !!VW && !JQ
          }), (0, gQ.jsx)(JT.c, {
            tutorial: "welcome",
            step: "worldCodeIntro",
            text: (0, gQ.jsxs)(gQ.Fragment, {
              children: [(0, gQ.jsx)("p", {
                children: kX("codeEditor:tutorialWorldCodeWelcome")
              }), (0, gQ.jsxs)("ul", {
                className: "TutorialStepList",
                children: [(0, gQ.jsx)("li", {
                  children: kX("codeEditor:tutorialWorldCodeUseSetUp")
                }), (0, gQ.jsx)("li", {
                  children: kX("codeEditor:tutorialWorldCodeUseReact")
                }), (0, gQ.jsx)("li", {
                  children: kX("codeEditor:tutorialWorldCodeUseRun")
                })]
              })]
            }),
            enabled: !!VW && JQ
          }), (0, gQ.jsx)("div", {
            className: "CodeEditorTitle",
            children: JQ ? "World Code" : "Code Block"
          }), (0, gQ.jsxs)("div", {
            className: "CodeEditorTopBar",
            children: [(0, gQ.jsxs)("div", {
              className: "CodeEditorTopLeft",
              children: [(0, gQ.jsx)(YQ.e, {
                tooltipInner: kX(DW ? "codeEditor:exportTooltip" : "codeEditor:exportOwnerOnly"),
                delayShow: DW ? void 0 : 0,
                hideTooltip: "exportButton" === pW,
                children: (0, gQ.jsx)(JT.h, {
                  tutorial: "welcome",
                  step: "exportButton",
                  text: kX("codeEditor:tutorialExport"),
                  enabled: !!VW,
                  children: (0, gQ.jsx)(IQ.s, {
                    className: "CodeEditorButton",
                    disabled: !DW,
                    onClick: () => {
                      "exportButton" === pW && ((0, rT.e)("exportButton"), aW.current = !0), lW.current = !0, iX()
                    },
                    padDestructive: !0,
                    children: kX("codeEditor:exportWorld")
                  })
                })
              }), (0, gQ.jsx)(tT, {
                nJ: Tw,
                setWorld: zw,
                toggleWorld: sw,
                aiShown: Fw,
                closeAi: mX
              })]
            }), (0, gQ.jsxs)("div", {
              className: "CodeEditorTopRight",
              children: [VW && (0, gQ.jsx)(YQ.e, {
                tooltipInner: kX("codeEditor:helpTooltip"),
                hideTooltip: "helpButton" === pW,
                children: (0, gQ.jsx)(JT.h, {
                  tutorial: "welcome",
                  step: "helpButton",
                  text: kX("codeEditor:tutorialHelpButton"),
                  placement: "bottom",
                  children: (0, gQ.jsx)(IQ.h, {
                    className: "CodeEditorHelpButton",
                    ariaLabel: kX("codeEditor:helpTooltip"),
                    onClick: () => {
                      (0, rT.e)("helpButton"), mw.NotificationProvider.showCustomPopup({
                        body: QQ => (0, gQ.jsx)(IT, {
                          close: QQ
                        }),
                        unlockPointerKey: "codeEditorTutorials"
                      })
                    },
                    children: (0, gQ.jsx)("div", {
                      className: "CodeEditorHelpButtonInner",
                      children: (0, gQ.jsx)(yQ.d, {
                        name: "circle-question"
                      })
                    })
                  })
                })
              }), (0, gQ.jsx)(YQ.e, {
                tooltipInner: kX("codeEditor:closeTooltip"),
                children: (0, gQ.jsx)("div", {
                  className: "CodeEditorCloseButtonClickZone",
                  onClick: () => {
                    iX()
                  },
                  children: (0, gQ.jsx)(IQ.o, {
                    className: "CodeEditorCloseButton"
                  })
                })
              })]
            })]
          }), (0, gQ.jsx)(hq, {
            peers: null !== (WQ = null === kW || void 0 === kW ? void 0 : kW.peers) && void 0 !== WQ ? WQ : []
          }), (0, gQ.jsxs)("div", {
            className: pX()("CodeEditorMainArea", {
              WorldCovers: "always" === GT(Tw),
              WorldCoversWhenNarrow: "narrow" === GT(Tw)
            }),
            children: [kQ && nQ && (0, gQ.jsx)(pT.e, {
              side: "left",
              defaultSize: "max(16rem, 24%)",
              onClose: () => {
                tQ(!1)
              },
              children: (0, gQ.jsx)(DT, {
                inputRef: oQ
              })
            }), JQ && (0, gQ.jsx)(uq, {
              schematics: nW.assets,
              onManageSchematic: QQ => {
                VW && mw.NotificationProvider.showCustomPopup({
                  body: WQ => (0, gQ.jsx)(wT, {
                    initialPath: QQ,
                    onChanged: NW,
                    onClose: WQ
                  }),
                  unlockPointerKey: "worldCodeSchematics"
                })
              },
              files: SW,
              activePath: ZW,
              canEdit: !!VW,
              directoryLinked: JX,
              pluginNames: null !== eX && void 0 !== eX ? eX : Qz,
              activePluginName: KW,
              activePluginFile: MW,
              onSelect: HX,
              onSelectPlugin: aX,
              onToggleDirectorySync: Bw,
              onCreate: QQ => {
                PX.current = QQ, PQ.gameBridge.send("sendCodeCollab", {
                  Zq: dq.e.CreateFile,
                  Oq: (0, dq.y)({
                    kind: "lobby",
                    path: wX.current
                  }),
                  hg: QQ
                })
              },
              onRename: (QQ, WQ) => {
                wX.current === QQ && (gX.current = {
                  fromPath: QQ,
                  toPath: WQ
                }, OW(WQ)), PQ.gameBridge.send("sendCodeCollab", {
                  Zq: dq.e.RenameFile,
                  Oq: (0, dq.y)({
                    kind: "lobby",
                    path: wX.current
                  }),
                  hg: QQ,
                  ig: WQ
                })
              },
              onRenameFolder: (QQ, WQ) => {
                const [XQ] = (0, Hq.l)([wX.current], QQ, WQ);
                XQ && (gX.current = {
                  fromPath: XQ[0],
                  toPath: XQ[1]
                }, OW(XQ[1])), PQ.gameBridge.send("sendCodeCollab", {
                  Zq: dq.e.RenameFolder,
                  Oq: (0, dq.y)({
                    kind: "lobby",
                    path: wX.current
                  }),
                  hg: QQ,
                  ig: WQ
                })
              },
              onDelete: dX
            }), (0, gQ.jsx)("div", {
              className: pX()("CodeEditorMessage", {
                CodeEditorMessageHidden: !vQ.message,
                CodeEditorMessageSuccess: "success" === vQ.type
              }),
              children: vQ.message && (0, gQ.jsx)("div", {
                className: "CodeEditorMessageText",
                children: vQ.message
              })
            }), (0, gQ.jsx)(qQ.Suspense, {
              fallback: (0, gQ.jsx)("div", {
                className: "CodeEditorContent",
                children: (0, gQ.jsx)(lQ.e, {})
              }),
              children: (0, gQ.jsx)(YT, {
                isLobbyCode: JQ,
                code: kW ? kW.doc : rQ.current,
                files: JQ ? SW : void 0,
                activePath: JQ ? ZW : void 0,
                pluginName: KW,
                pluginFile: MW,
                pluginSource: KW && MW ? null === (XQ = cq.f[KW]) || void 0 === XQ ? void 0 : XQ.files[MW] : void 0,
                onChange: EX,
                canEditCode: VW,
                setTemporaryMessage: DX,
                close: iX,
                showTooltips: hQ,
                lightMode: cQ,
                collabState: kW,
                setActiveDocReplacer: oX,
                showAiHints: yW && EQ,
                canAiChangeCode: !!VW && (JQ || !!DQ.current),
                onRemoteDocChange: QQ => {
                  var WQ;
                  (rQ.current = QQ, JQ) ? (oW((WQ => ({
                    ...WQ,
                    [wX.current]: QQ
                  }))), null === (WQ = BX.current) || void 0 === WQ || WQ.onDocTextChanged(wX.current, QQ)) : JW(QQ)
                }
              })
            }), (uQ || Fw || "hidden" !== Tw) && (0, gQ.jsxs)(UT, {
              nJ: Tw,
              worldPanel: (0, gQ.jsx)(fT, {
                shown: Tw,
                setShown: zw,
                canInsertCode: !!VW && !KW
              }),
              closeWorld: () => {
                zw("hidden")
              },
              aiShown: Fw,
              defaultWidth: uQ ? "40%" : "max(18rem, 36%)",
              children: [uQ && (0, gQ.jsx)(pT.e, {
                onClose: Xw ? void 0 : uX,
                children: (0, gQ.jsx)(qQ.Suspense, {
                  fallback: (0, gQ.jsx)("div", {
                    className: "DocsPanel",
                    children: (0, gQ.jsx)(lQ.e, {})
                  }),
                  children: (0, gQ.jsx)(NT, {
                    popOutDocs: CX,
                    hideDocs: uX,
                    tutorialEnabled: !!VW
                  })
                })
              }), Fw && (0, gQ.jsx)(pT.e, {
                onClose: ww ? void 0 : mX,
                children: (0, gQ.jsx)(qQ.Suspense, {
                  fallback: (0, gQ.jsx)("div", {
                    className: "CodeEditorPanelLoading",
                    children: (0, gQ.jsx)(lQ.e, {})
                  }),
                  children: (0, gQ.jsx)(ZT, {
                    target: jW,
                    chatKey: `${uW.gameNameWithVariation}/${uW.lobbyName}/aiHelper`,
                    historyKey: `${uW.gameNameWithVariation}/${uW.lobbyName}/${jW.key}`,
                    files: jW.codeBlock ? NX : SW,
                    activePath: jW.codeBlock ? eT.c : ZW,
                    canEdit: !!VW && (jW.codeBlock ? !!DQ.current : !KW),
                    isLoaded: null !== kW,
                    errors: qW,
                    errorCount: zW,
                    applyFiles: jW.codeBlock ? xX : nX,
                    submit: OX,
                    testRun: KX,
                    close: mX,
                    goToLine: jW.codeBlock ? ZX : tX,
                    openWorldCode: jW.codeBlock ? Qw : void 0,
                    readWorldCode: jW.codeBlock ? YX : void 0,
                    viewChunk: OT,
                    viewGameState: KT,
                    openTarget: VW ? Ww : void 0,
                    draft: XW,
                    onDraftUsed: Pw,
                    selection: gw,
                    onSelectionUsed: rw
                  }, jW.key)
                })
              })]
            })]
          }), (null === TX || void 0 === TX ? void 0 : TX.fallback) && (0, gQ.jsx)(TT, {
            fallback: TX.fallback,
            onGoToLine: tX
          }), (0, gQ.jsxs)("div", {
            className: "CodeEditorButtons",
            "data-pad-hint-bar-avoid": !0,
            children: [(0, gQ.jsx)(YQ.e, {
              tooltipInner: kX(cQ ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
              placement: "top",
              children: (0, gQ.jsx)(IQ.h, {
                className: "CodeEditorButton CodeEditorThemeButton",
                ariaLabel: kX(cQ ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
                onClick: () => {
                  RQ(!cQ)
                },
                children: (0, gQ.jsx)(yQ.d, {
                  name: cQ ? "moon" : "sun-bright"
                })
              })
            }), (0, gQ.jsx)(YQ.e, {
              tooltipInner: kX(yw ? "codeEditorWorld:submitCodeTooltip" : "codeEditor:submitCodeTooltip"),
              placement: "top",
              children: (0, gQ.jsx)(IQ.s, {
                className: "CodeEditorButton",
                onClick: () => {
                  cX(yw)
                },
                padDefaultFocus: !0,
                children: kX("codeEditor:submitCode")
              })
            }), (0, gQ.jsx)(YQ.e, {
              tooltipInner: kX(uQ ? "codeEditor:hideDocsTooltip" : "codeEditor:showDocsTooltip"),
              placement: "top",
              hideTooltip: "docsButton" === bW || "hideDocsButton" === bW,
              children: (0, gQ.jsx)(JT.h, {
                tutorial: UW,
                step: uQ ? "hideDocsButton" : "docsButton",
                text: kX(uQ ? "codeEditor:tutorialHideDocs" : "codeEditor:tutorialDocs"),
                enabled: !!VW,
                placement: "top",
                waitForClick: !0,
                onPrevious: uQ && "welcome" === UW ? uX : void 0,
                children: (0, gQ.jsx)(IQ.G, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    (0, rT.e)(uQ ? "hideDocsButton" : "docsButton"), LQ(!uQ), WW(!1)
                  },
                  children: kX(uQ ? "codeEditor:hideDocs" : "codeEditor:showDocs")
                })
              })
            }), yW && (0, gQ.jsx)(JT.h, {
              tutorial: dW,
              step: QW ? "hideAiHelperButton" : "aiHelperButton",
              text: kX(QW ? "codeEditorAiTutorial:hideAiHelperButton" : "welcome" === dW ? "codeEditorAiTutorial:welcomeAiHelperButton" : "codeEditorAiTutorial:aiHelperButton"),
              enabled: !!VW,
              placement: "top",
              waitForClick: !0,
              onPrevious: QW && "welcome" === dW ? LX : void 0,
              children: (0, gQ.jsx)(SX, {
                className: "CodeEditorButton",
                onClick: () => {
                  (0, rT.e)(QW ? "hideAiHelperButton" : "aiHelperButton"), WW(!QW), LQ(!1)
                },
                children: QW ? "Hide AI Helper" : fX ? "Fix error with AI" : "AI Helper"
              })
            }), nQ && (0, gQ.jsx)(YQ.e, {
              tooltipInner: kX(kQ ? "codeEditorChat:hideChatTooltip" : "codeEditorChat:showChatTooltip"),
              placement: "top",
              children: (0, gQ.jsx)(IQ.G, {
                className: "CodeEditorButton",
                onClick: () => {
                  eQ.current = !kQ, tQ(!kQ)
                },
                children: kX(kQ ? "codeEditorChat:hideChat" : "codeEditorChat:showChat")
              })
            }), (0, gQ.jsx)(YQ.e, {
              tooltipInner: kX("hidden" === Tw ? "codeEditorWorld:showWorldTooltip" : "codeEditorWorld:hideWorldTooltip"),
              placement: "top",
              children: (0, gQ.jsx)(IQ.G, {
                className: "CodeEditorButton CodeEditorWorldButton",
                onClick: sw,
                children: kX("hidden" === Tw ? "codeEditorWorld:showWorld" : "codeEditorWorld:hideWorld")
              })
            }), (0, gQ.jsx)(YQ.e, {
              tooltipInner: kX("codeEditor:formatCodeTooltip"),
              placement: "top",
              children: (0, gQ.jsx)(IQ.h, {
                className: "CodeEditorButton",
                onClick: () => {
                  jQ.k.mB("FormatCode")
                },
                children: kX("codeEditor:formatCode")
              })
            }), (0, gQ.jsx)(YQ.e, {
              tooltipInner: kX("codeEditor:copyCodeTooltip"),
              placement: "top",
              children: (0, gQ.jsx)(IQ.h, {
                className: "CodeEditorButton",
                onClick: () => {
                  navigator.clipboard.writeText(rQ.current).then((() => {
                    DX({
                      message: "Successfully copied code to clipboard",
                      type: "success"
                    })
                  })).catch((() => {
                    DX({
                      message: "Failed to copy code to clipboard",
                      type: "warning"
                    })
                  }))
                },
                children: kX("codeEditor:copyCode")
              })
            }), (0, gQ.jsx)(YQ.e, {
              tooltipInner: kX(hQ ? "codeEditor:hideTooltipsTooltip" : "codeEditor:showTooltipsTooltip"),
              placement: "top",
              children: (0, gQ.jsx)(IQ.h, {
                className: "CodeEditorButton",
                onClick: () => {
                  iQ(!hQ)
                },
                children: kX(hQ ? "codeEditor:hideTooltips" : "codeEditor:showTooltips")
              })
            }), !JQ && (0, gQ.jsx)(YQ.e, {
              tooltipInner: kX("codeEditor:worldCodeTooltip"),
              placement: "top",
              hideTooltip: "worldCodeButton" === pW,
              children: (0, gQ.jsx)(JT.h, {
                tutorial: "welcome",
                step: "worldCodeButton",
                text: kX("codeEditor:tutorialWorldCodeButton"),
                enabled: !!VW,
                placement: "top",
                waitForClick: !0,
                children: (0, gQ.jsx)(IQ.G, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    "worldCodeButton" === pW && ((0, rT.e)("worldCodeButton"), aW.current = !0), iX(), jQ.k.mB("EditLobbyCode", BQ)
                  },
                  children: kX("codeEditor:worldCode")
                })
              })
            }), (LW || zX || yW) && (0, gQ.jsx)(YQ.e, {
              tooltipInner: kX("codeEditor:moreOptionsTooltip"),
              placement: "top",
              children: (0, gQ.jsx)(IQ.h, {
                className: "CodeEditorButton CodeEditorMoreButton",
                onClick: () => {
                  RW(!0)
                },
                children: (0, gQ.jsx)(yQ.d, {
                  name: "ellipsis"
                })
              })
            })]
          }), AW && (0, gQ.jsx)(Qq.e, {
            middleScreenPopupContainerClassName: "CodeEditorMoreOptionsPopup",
            close: () => {
              RW(!1)
            },
            body: (0, gQ.jsx)(gT, {
              engine: zX,
              onSetEngine: RX,
              aiHints: yW ? {
                shown: EQ,
                setShown: CQ
              } : null,
              variation: LW ? {
                name: iW,
                setName: cW,
                reload: AX
              } : null
            })
          })]
        })
      }));
    var wz = XQ(36900);
    const qz = new Set(["inventory", "ironChestPasskeyInput"]);
    const Tz = new Set(["makeReport", "makeDiscordReport", "inviteLink"]);

    function zz(QQ) {
      return "inventory" === QQ
    }
    const sz = (0, qQ.memo)((function() {
      const {
        openEverythingMenuName: QQ,
        openInGameMenuName: WQ
      } = (0, fQ.n)(["openEverythingMenuName", "openInGameMenuName"]), XQ = (0, aQ.e)("fullInventory"), TQ = (0, qQ.useRef)(null), zQ = (0, iW.k)();
      (0, dQ.f)("toggleMenu", (QQ => {
        var WQ;
        if (!zQ.shown) return;
        const XQ = fQ.b.get("openInGameMenuName");
        let wQ = QQ.split("|")[0];
        const qQ = null !== (WQ = QQ.split("|")[1]) && void 0 !== WQ ? WQ : null;
        if (("closeCurrentMenu" === qQ && XQ || wQ === XQ) && (TQ.current = null, wQ = null), null !== wQ && (sQ = !PQ.gameBridge.latest("localPlayerAlive"), FQ = wQ, sQ && qz.has(FQ))) return void(null !== PQ.gameBridge.latest("inventory").chest && PQ.gameBridge.send("closeChest", null));
        var sQ, FQ;
        const gQ = "closeCurrentMenu" === qQ ? null : qQ;
        TQ.current !== gQ && (TQ.current = gQ), null !== wQ && (0, gq.z)(gq.e, {
          keepsMovement: zz(wQ)
        }), fQ.b.set({
          openInGameMenuName: wQ
        })
      })), (0, aQ.b)("localPlayerAliveSet", (QQ => {
        QQ || function() {
          (0, wz.g)();
          const QQ = fQ.b.get("openInGameMenuName");
          null !== QQ && qz.has(QQ) && fQ.b.set({
            openInGameMenuName: null
          })
        }()
      }));
      const sQ = (0, qQ.useCallback)((QQ => () => {
          jQ.k.mB("toggleMenu", QQ)
        }), []),
        FQ = (0, qQ.useRef)({
          cantCrouchIfNotFullscreen: sQ("cantCrouchIfNotFullscreen"),
          makeReport: sQ("makeReport"),
          makeDiscordReport: sQ("makeDiscordReport"),
          editBook: sQ("editBook"),
          editNameTag: sQ("editNameTag"),
          inventory: sQ("inventory"),
          inviteLink: sQ("inviteLink"),
          writeOnBoard: sQ("writeOnBoard"),
          codeEditor: sQ("codeEditor"),
          lobbyCodeEditor: sQ("lobbyCodeEditor"),
          customLobbyBlockEditor: sQ("customLobbyBlockEditor"),
          ironChestPasskeyInput: sQ("ironChestPasskeyInput"),
          petUi: sQ("petUi")
        }),
        JQ = (0, qQ.useCallback)((() => {
          fQ.b.set({
            openInGameMenuName: null
          })
        }), []),
        rQ = (0, qQ.useRef)(null);
      return (0, qQ.useEffect)((() => {
        if (WQ) {
          var QQ;
          (0, gq.z)(gq.e, {
            keepsMovement: zz(WQ)
          }), rQ.current = Tz.has(WQ) ? null !== (QQ = fQ.b.get("openEverythingMenuName")) && void 0 !== QQ ? QQ : rQ.current : null, fQ.b.set({
            openEverythingMenuName: null
          })
        } else {
          const QQ = rQ.current;
          rQ.current = null, null !== QQ && null === fQ.b.get("openEverythingMenuName") && fQ.b.set({
            openEverythingMenuName: QQ
          }), TQ.current = null, (0, gq.y)(gq.e)
        }
      }), [WQ]), (0, qQ.useEffect)((() => {
        null !== QQ && JQ()
      }), [QQ, JQ]), (0, gQ.jsxs)(gQ.Fragment, {
        children: [(0, gQ.jsx)(wQ.k, {
          show: "clientGame" === WQ
        }), (0, gQ.jsx)(Zw, {
          show: "cantCrouchIfNotFullscreen" === WQ,
          onOpen: FQ.current.cantCrouchIfNotFullscreen,
          onClose: JQ
        }), (0, gQ.jsx)(Tq, {
          show: "makeReport" === WQ,
          onOpen: FQ.current.makeReport,
          onClose: JQ
        }), (0, gQ.jsx)(Pq, {
          show: "makeDiscordReport" === WQ,
          onOpen: FQ.current.makeDiscordReport,
          onClose: JQ
        }), (0, gQ.jsx)(WX, {
          show: "editBook" === WQ,
          onOpen: FQ.current.editBook,
          onClose: JQ
        }), (0, gQ.jsx)(MW, {
          show: "editNameTag" === WQ,
          onOpen: FQ.current.editNameTag,
          onClose: JQ
        }), XQ && (0, gQ.jsx)(xw, {
          show: "inventory" === WQ,
          onOpen: FQ.current.inventory,
          onClose: JQ,
          variation: TQ.current
        }), (0, gQ.jsx)(cW, {
          show: "inviteLink" === WQ,
          onClose: JQ,
          option: TQ.current
        }), (0, gQ.jsx)(CQ, {
          show: "retentionFeatures" === WQ,
          onClose: JQ
        }), (0, gQ.jsx)(mW, {
          show: "writeOnBoard" === WQ,
          onOpen: FQ.current.writeOnBoard,
          onClose: JQ
        }), (0, gQ.jsx)(Xz, {
          show: "lobbyCodeEditor" === WQ,
          onOpen: FQ.current.lobbyCodeEditor,
          onClose: JQ,
          isLobbyCode: !0
        }), (0, gQ.jsx)(Xz, {
          show: "codeEditor" === WQ,
          onOpen: FQ.current.codeEditor,
          onClose: JQ,
          isLobbyCode: !1
        }), (0, gQ.jsx)(rq, {
          show: "customLobbyBlockEditor" === WQ,
          onOpen: FQ.current.customLobbyBlockEditor,
          onClose: JQ
        }), (0, gQ.jsx)(UX, {
          show: "ironChestPasskeyInput" === WQ,
          onOpen: FQ.current.ironChestPasskeyInput,
          onClose: JQ
        }), (0, gQ.jsx)(Dq, {
          togglePointerLock: !0,
          show: "petUi" === WQ,
          onOpen: FQ.current.petUi,
          onClose: JQ
        })]
      })
    }))
  },
  36811: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => iz
    });
    XQ(36814);
    var wQ = XQ(1863),
      qQ = XQ(61),
      TQ = XQ(1081),
      zQ = XQ.n(TQ),
      sQ = XQ(3959),
      FQ = XQ(1498),
      PQ = XQ(1975),
      gQ = XQ(1145);

    function JQ() {
      const QQ = 2e3,
        [WQ, XQ] = (0, qQ.useState)(null),
        [wQ, TQ] = (0, qQ.useState)(null),
        JQ = (0, qQ.useRef)(null);
      (0, FQ.f)("showBottomMessage", (WQ => {
        let {
          message: XQ,
          timeoutLength: wQ = QQ,
          type: qQ
        } = WQ;
        TQ({
          message: XQ,
          type: qQ
        }), clearTimeout(JQ.current), JQ.current = setTimeout((() => {
          TQ(null)
        }), wQ)
      })), (0, FQ.f)("showPermanentBottomMessage", (QQ => {
        XQ(QQ)
      })), (0, qQ.useEffect)((() => ((0, sQ.d)((() => {
        XQ(null)
      })), () => {
        clearTimeout(JQ.current)
      })), []);
      const rQ = wQ || WQ;
      return rQ ? (0, gQ.jsx)("div", {
        className: zQ()("BottomScreenMessage", rQ.type),
        children: (0, gQ.jsx)(PQ.e, {
          text: rQ.message
        })
      }) : null
    }
    var rQ = XQ(2444),
      IQ = XQ(2003),
      jQ = XQ(1567),
      BQ = XQ(2540);

    function yQ() {
      let QQ;
      const WQ = () => {
          clearTimeout(QQ), QQ = setTimeout((() => {
            IQ.gameBridge.latest("connectedGame").replay || (IQ.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, jQ.navigatePreserveSearch)("/"))
          }), 3e5)
        },
        XQ = () => {
          clearTimeout(QQ)
        };
      return window.addEventListener("focus", XQ), window.addEventListener("blur", WQ), () => {
        window.removeEventListener("blur", WQ), window.removeEventListener("focus", XQ), clearTimeout(QQ)
      }
    }
    var VQ = XQ(1162),
      DQ = XQ(3379),
      pQ = XQ(382),
      GQ = XQ(2535),
      UQ = XQ(31),
      bQ = XQ(2036),
      vQ = XQ(43),
      dQ = XQ(2052),
      HQ = XQ(26),
      aQ = XQ(2058),
      lQ = XQ(1454),
      hQ = XQ(9187),
      iQ = XQ(2076),
      cQ = XQ(1226);
    const AQ = (0, qQ.memo)((function() {
      const {
        isTouchScreen: QQ,
        loadingOverlayVisible: WQ,
        openInGameMenuName: XQ,
        openEverythingMenuName: wQ
      } = (0, HQ.n)(["isTouchScreen", "loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]), TQ = (0, lQ.A)();
      (0, DQ.d)();
      const sQ = (0, GQ.g)("showBasicMovementControls"),
        [FQ, PQ] = (0, qQ.useState)("movement"),
        JQ = "movement" === FQ,
        rQ = TQ && !1 !== sQ;
      (0, qQ.useEffect)((() => {
        "padActions" !== FQ || rQ || PQ("done")
      }), [FQ, rQ]);
      const IQ = WQ || null !== XQ || null !== wQ,
        jQ = (0, qQ.useRef)({
          step: FQ,
          ms: 0
        });
      return (0, qQ.useEffect)((() => {
        if (IQ || "done" === FQ) return;
        jQ.current.step !== FQ && (jQ.current = {
          step: FQ,
          ms: 0
        });
        const QQ = jQ.current,
          WQ = performance.now(),
          XQ = setTimeout((() => {
            PQ("movement" === FQ && (0, lQ.l)() ? "padActions" : "done")
          }), 7e3 - QQ.ms);
        return () => {
          clearTimeout(XQ), QQ.ms += performance.now() - WQ
        }
      }), [IQ, FQ]), vQ.i.getItem(pQ.Pb) > 2 ? (0, gQ.jsx)(uQ, {
        showingMovementControls: !1
      }) : (0, gQ.jsxs)(gQ.Fragment, {
        children: [QQ && !TQ || !JQ || !1 === sQ ? null : (0, gQ.jsxs)("div", {
          className: zQ()("ControlsTutorialDiv", {
            Covered: IQ
          }),
          children: [(0, gQ.jsx)(RQ, {}), (0, gQ.jsx)(CQ, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, gQ.jsx)(CQ, {
            header: "Jump",
            noaAction: "jump"
          })]
        }), "padActions" === FQ && rQ && (0, gQ.jsx)(EQ, {
          covered: IQ
        }), (0, gQ.jsx)(uQ, {
          showingMovementControls: "done" !== FQ
        })]
      })
    }));

    function RQ() {
      const QQ = (0, lQ.A)();
      return (0, gQ.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, gQ.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), QQ && (0, gQ.jsx)(aQ.b, {
          noaAction: "forward"
        }), !QQ && (0, gQ.jsxs)(gQ.Fragment, {
          children: [(0, gQ.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, gQ.jsx)(aQ.b, {
              noaAction: "forward"
            })
          }), (0, gQ.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, gQ.jsx)(aQ.b, {
              noaAction: "left"
            }), (0, gQ.jsx)(aQ.b, {
              noaAction: "backward"
            }), (0, gQ.jsx)(aQ.b, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function EQ(QQ) {
      let {
        covered: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, cQ.C)(), wQ = (0, GQ.g)("useInventory");
      return (0, gQ.jsxs)("div", {
        className: zQ()("ControlsTutorialDiv", {
          Covered: WQ
        }),
        children: [(0, gQ.jsx)(CQ, {
          header: XQ("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, gQ.jsx)(CQ, {
          header: XQ("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== wQ && (0, gQ.jsx)(CQ, {
          header: XQ("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, gQ.jsx)(CQ, {
          header: XQ("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function CQ(QQ) {
      let {
        header: WQ,
        noaAction: XQ
      } = QQ;
      return (0, gQ.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, gQ.jsx)("div", {
          className: "KeyHeader",
          children: WQ
        }), (0, gQ.jsx)(aQ.b, {
          noaAction: XQ
        })]
      })
    }

    function uQ(QQ) {
      let {
        showingMovementControls: WQ
      } = QQ;
      const {
        isTouchScreen: XQ
      } = (0, HQ.n)(["isTouchScreen"]), wQ = (0, lQ.A)(), TQ = (0, iQ.e)("OpenShop"), [zQ, sQ] = (0, qQ.useState)(!1), FQ = `SeenShopControls|${(0,dQ.d)("connectedGame",(QQ=>QQ.gameNameWithVariation))}`, PQ = () => (!(0, lQ.l)() || null !== (0, hQ.d)("OpenShop")) && !vQ.i.getItem(FQ) && bQ.e.get("shopInfo") && !WQ, JQ = () => (sQ(!0), vQ.i.setItem(FQ, !0), (0, lQ.l)() || UQ.k.mB("showShopTouchTutorial"), setTimeout((() => {
        sQ(!1)
      }), 7e3));
      (0, qQ.useEffect)((() => {
        let QQ;
        const WQ = UQ.k.subscribe("showShopTutorial", (() => {
          PQ() && (QQ = JQ())
        }));
        return () => {
          clearTimeout(QQ), UQ.k.unsubscribe(WQ)
        }
      }), [WQ]);
      const rQ = (0, qQ.useRef)();
      return (0, GQ.d)("currencyAmounts", (QQ => {
        if (PQ()) {
          let XQ = !1;
          const wQ = bQ.e.get("shopInfo");
          for (const qQ in wQ) {
            for (const TQ in wQ[qQ].items) {
              var WQ;
              const zQ = wQ[qQ].items[TQ];
              if (void 0 !== zQ.currency && QQ[zQ.currency] && zQ.cost <= QQ[zQ.currency].amount && (null === (WQ = zQ.hidden) || void 0 === WQ || !WQ)) {
                XQ = !0;
                break
              }
            }
            if (XQ) break
          }
          XQ && (rQ.current = JQ())
        }
      })), (0, qQ.useEffect)((() => () => {
        clearTimeout(rQ.current)
      }), [WQ]), !zQ || wQ && !TQ ? null : (0, gQ.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: XQ && !wQ ? null : (0, gQ.jsx)(CQ, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
    var LQ = XQ(1416),
      kQ = XQ(1094);
    const fQ = (0, qQ.memo)((function() {
      return (0, DQ.d)(), (0, gQ.jsx)(SQ, {})
    }));
    class SQ extends qQ.Component {
      constructor(QQ) {
        super(QQ), this.showQueue = [], this.slideDuration = 1, this.state = {
          showQueue: [],
          currState: null
        }, this.currMessage = null, this.justShowed = !1
      }
      componentDidMount() {
        this.sub = UQ.k.subscribe("TopRightHelper", (QQ => {
          this.showQueue.push(QQ), this.setState({
            showQueue: this.showQueue
          })
        }))
      }
      componentWillUnmount() {
        UQ.k.unsubscribe(this.sub), clearTimeout(this.slideOutTimeout), clearTimeout(this.hidingMessageTimeout)
      }
      componentDidUpdate(QQ, WQ) {
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
        let QQ, WQ, XQ, wQ, qQ, TQ = !0;
        if (this.state.showQueue.length > 0 && null === this.state.currState ? (this.currMessage = this.state.showQueue[0], this.justShowed = !0, QQ = "slideIn") : "slideOut" === this.state.currState ? QQ = "slideOut" : null === this.currMessage && (TQ = !1), this.currMessage) {
          const TQ = this.currMessage.color || "rgb(102, 102, 102)";
          WQ = {
            width: this.currMessage.width || "250px",
            height: this.currMessage.height || "70px",
            animation: "1s " + ("slideOut" === QQ ? "HelperSlideKeyFrameReverse" : "HelperSlideKeyFrame")
          }, XQ = {
            backgroundColor: TQ
          }, wQ = {
            animation: "2s " + ("slideOut" === QQ ? "CloseNotification" : "ExpandNotification")
          }, qQ = {
            fontSize: this.currMessage.fontSize || "16px",
            animation: "2s " + ("slideOut" === QQ ? "textDisappear" : "textAppear")
          }
        }
        return TQ ? (0, gQ.jsxs)("div", {
          className: "TopRightHelperBox",
          style: {
            ...WQ
          },
          children: [(0, gQ.jsx)("div", {
            className: "LeftSide",
            style: XQ,
            children: (0, gQ.jsx)(kQ.d, {
              name: this.currMessage.icon,
              className: `fa-${this.currMessage.iconSizeMult||3}x HelperIcon`
            })
          }), (0, gQ.jsx)("div", {
            className: "RightSide",
            style: wQ,
            children: (0, gQ.jsx)("div", {
              className: "HelperText",
              style: qQ,
              children: this.currMessage.text
            })
          })]
        }) : null
      }
    }
    var tQ = XQ(36818),
      oQ = XQ(1468);
    const eQ = (0, oQ.h)((QQ => QQ.PadSneakChip));

    function nQ(QQ) {
      const [WQ, XQ, wQ] = function(QQ) {
        const WQ = parseInt(QQ.substring(1), 16),
          XQ = (WQ >> 16) / 255,
          wQ = (WQ >> 8 & 255) / 255,
          qQ = (255 & WQ) / 255,
          TQ = Math.max(XQ, wQ, qQ),
          zQ = Math.min(XQ, wQ, qQ),
          sQ = (TQ + zQ) / 2,
          FQ = TQ - zQ;
        if (0 === FQ) return [0, 0, sQ];
        const PQ = FQ / (1 - Math.abs(2 * sQ - 1));
        let gQ;
        gQ = TQ === XQ ? (wQ - qQ) / FQ % 6 : TQ === wQ ? (qQ - XQ) / FQ + 2 : (XQ - wQ) / FQ + 4;
        return [(60 * gQ + 360) % 360, PQ, sQ]
      }(QQ), qQ = 0 === XQ ? 0 : Math.min(.6, XQ + .03), TQ = wQ > .5 ? -1 : 1, zQ = xQ(wQ + .09 * TQ);
      return {
        panel: QQ,
        slot: YQ(WQ, qQ, zQ),
        slotSelected: YQ(WQ, qQ, xQ(zQ + .2 * TQ)),
        slotUnavailable: YQ(WQ, qQ, xQ(wQ + -.1 * TQ))
      }
    }

    function xQ(QQ) {
      return Math.min(1, Math.max(0, QQ))
    }

    function YQ(QQ, WQ, XQ) {
      const wQ = (1 - Math.abs(2 * XQ - 1)) * WQ,
        qQ = wQ * (1 - Math.abs(QQ / 60 % 2 - 1)),
        TQ = XQ - wQ / 2;
      let zQ;
      return zQ = QQ < 60 ? [wQ, qQ, 0] : QQ < 120 ? [qQ, wQ, 0] : QQ < 180 ? [0, wQ, qQ] : QQ < 240 ? [0, qQ, wQ] : QQ < 300 ? [qQ, 0, wQ] : [wQ, 0, qQ], "#" + zQ.map((QQ => function(QQ) {
        return Math.round(255 * QQ).toString(16).padStart(2, "0")
      }(QQ + TQ))).join("")
    }
    var NQ = XQ(36831),
      ZQ = XQ(4572),
      OQ = XQ(2506),
      KQ = XQ(2510),
      mQ = XQ(36883),
      MQ = XQ(5153),
      QW = XQ(1525),
      WW = XQ(663);

    function XW(QQ, WQ, XQ, wQ) {
      QQ.style.display = "";
      const qQ = QQ.offsetWidth,
        TQ = QQ.offsetHeight,
        zQ = Math.min(Math.max((WQ.left + WQ.right) / 2 - qQ / 2, 8), window.innerWidth - 8 - qQ);
      let sQ = WQ.top - XQ - TQ;
      const FQ = [...wQ].sort(((QQ, WQ) => WQ.top - QQ.top));
      for (const PQ of FQ) zQ < PQ.right && zQ + qQ > PQ.left && sQ < PQ.bottom && sQ + TQ > PQ.top && (sQ = PQ.top - 8 - TQ);
      return sQ < 8 ? (QQ.style.display = "none", null) : (QQ.style.transform = `translate(${zQ-WQ.left}px, ${sQ-WQ.top}px)`, {
        left: zQ,
        top: sQ,
        right: zQ + qQ,
        bottom: sQ + TQ
      })
    }

    function wW(QQ) {
      const WQ = [];
      for (const XQ of document.querySelectorAll(QQ)) {
        const QQ = XQ.getBoundingClientRect();
        QQ.width > 0 && "visible" === getComputedStyle(XQ).visibility && WQ.push(QQ)
      }
      return WQ
    }

    function qW(QQ, WQ) {
      return QQ.clientX >= WQ.left - 8 && QQ.clientX <= WQ.right + 8 && QQ.clientY >= WQ.top - 8 && QQ.clientY <= WQ.bottom + 8
    }
    var TW = XQ(9246);
    class zW {
      constructor(QQ) {
        this.deps = QQ, this.phase = "idle", this.armTimer = null, this.suspended = !1
      }
      get locked() {
        return "locked" === this.phase
      }
      get offered() {
        return "armed" === this.phase || "ready" === this.phase
      }
      target(QQ) {
        QQ && "armed" === this.phase ? this.setPhase("ready") : QQ || "ready" !== this.phase || this.setPhase("armed")
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
      hold(QQ, WQ) {
        this.suspended || (this.offered ? WQ || this.setPhase("idle") : QQ && "idle" === this.phase ? (this.setPhase("charging"), this.armTimer = setTimeout((() => {
          this.armTimer = null, this.onArm(), this.setPhase("armed")
        }), 1e3)) : QQ || "charging" !== this.phase || this.setPhase("idle"))
      }
      onArm() {}
      setPhase(QQ) {
        null !== this.armTimer && (clearTimeout(this.armTimer), this.armTimer = null);
        const WQ = this.phase;
        this.phase = QQ, this.deps.onPhase(QQ, WQ)
      }
    }
    const sW = 25 * Math.PI / 180,
      FW = 45 * Math.PI / 180;
    class PW extends zW {
      constructor() {
        super(...arguments), this.speed = 0, this.armedSpeed = 0
      }
      get lockedSpeed() {
        return this.armedSpeed
      }
      move(QQ, WQ, XQ) {
        this.speed = XQ;
        const wQ = Math.hypot(QQ, WQ),
          qQ = wQ > 0 ? Math.acos(Math.min(1, -WQ / wQ)) : Math.PI;
        this.hold(wQ >= .8 && qQ <= sW, wQ >= .5 && qQ <= FW)
      }
      onArm() {
        this.armedSpeed = this.speed
      }
    }
    var gW = XQ(1335);

    function JW(QQ, WQ) {
      const XQ = (0, qQ.useRef)(null),
        wQ = (0, qQ.useRef)(WQ);
      return wQ.current = WQ, (0, qQ.useEffect)((() => {
        if (!QQ) return;
        const {
          create: WQ,
          elementRef: qQ,
          ringRef: TQ,
          classPrefix: zQ,
          keptBehindMovementPanels: sQ,
          resizeEnds: FQ
        } = wQ.current, PQ = {
          charging: `${zQ}Charging`,
          armed: `${zQ}Armed`,
          ready: `${zQ}Ready`,
          locked: `${zQ}Locked`
        };
        let gQ = null;
        const JQ = WQ({
          onPhase: (QQ, WQ) => {
            const XQ = qQ.current;
            if (null !== XQ) {
              for (const [WQ, wQ] of Object.entries(PQ)) XQ.classList.toggle(wQ, WQ === QQ);
              if ("charging" === QQ) gQ = TQ.current.animate([{
                strokeDashoffset: 1
              }, {
                strokeDashoffset: 0
              }], {
                delay: 400,
                duration: 600,
                fill: "forwards"
              });
              else if ("idle" === QQ) {
                var zQ;
                null === (zQ = gQ) || void 0 === zQ || zQ.cancel(), gQ = null
              }
              var sQ, FQ;
              if ("armed" === QQ && "charging" === WQ && wQ.current.onArmed(), "ready" === QQ && TW.e.play("lockReady"), "locked" === QQ) TW.e.play("lockLocked"), null === (sQ = (FQ = wQ.current).onLocked) || void 0 === sQ || sQ.call(FQ);
              "locked" === WQ && wQ.current.onUnlocked()
            }
          }
        });
        XQ.current = JQ;
        const rQ = () => {
            JQ.suspend()
          },
          IQ = () => {
            "hidden" === document.visibilityState && rQ()
          },
          jQ = () => {
            FQ ? JQ.suspend() : JQ.suspendArming()
          },
          BQ = (0, gW.s)((QQ => {
            let {
              keepsMovement: WQ
            } = QQ;
            WQ && sQ ? JQ.suspendArming() : rQ()
          }));
        return document.addEventListener("visibilitychange", IQ), window.addEventListener("blur", rQ), window.addEventListener("resize", jQ), () => {
          BQ(), document.removeEventListener("visibilitychange", IQ), window.removeEventListener("blur", rQ), window.removeEventListener("resize", jQ), JQ.cancel(), XQ.current = null
        }
      }), [QQ]), (0, dQ.b)("localPlayerAliveSet", (() => {
        var QQ;
        null === (QQ = XQ.current) || void 0 === QQ || QQ.suspend()
      })), XQ
    }
    const rW = "data-joystick-tap";

    function IW(QQ) {
      var WQ, XQ;
      const wQ = null === (WQ = (XQ = QQ).closest) || void 0 === WQ ? void 0 : WQ.call(XQ, `[${rW}]`);
      return wQ instanceof HTMLElement ? wQ : null
    }
    class jW {
      constructor() {
        this.tap = null
      }
      get touchId() {
        var QQ, WQ;
        return null !== (QQ = null === (WQ = this.tap) || void 0 === WQ ? void 0 : WQ.id) && void 0 !== QQ ? QQ : null
      }
      land(QQ, WQ) {
        null === this.tap && (this.tap = {
          key: QQ,
          id: WQ.identifier,
          x: WQ.clientX,
          y: WQ.clientY
        }, (0, QW.h)(QQ, !0))
      }
      slidFrom(QQ) {
        const WQ = this.tap,
          XQ = WQ ? QQ.find((QQ => QQ.identifier === WQ.id)) : void 0;
        return !XQ || Math.hypot(XQ.clientX - WQ.x, XQ.clientY - WQ.y) <= 12 ? null : (this.end(!1), {
          identifier: WQ.id,
          clientX: WQ.x,
          clientY: WQ.y
        })
      }
      end(QQ) {
        const WQ = this.tap;
        WQ && (this.tap = null, (0, QW.h)(WQ.key, !1), QQ && WQ.key.click())
      }
    }
    var BW = XQ(2563),
      yW = XQ(2572),
      VW = XQ(1154),
      DW = XQ(3678),
      pW = XQ(2585);

    function GW(QQ, WQ, XQ) {
      const wQ = function(QQ, WQ, XQ) {
        const wQ = XQ.map((XQ => ({
            left: Math.max(0, XQ.left),
            top: Math.max(0, XQ.top),
            right: Math.min(QQ, XQ.right),
            bottom: Math.min(WQ, XQ.bottom)
          }))).filter((QQ => QQ.right > QQ.left && QQ.bottom > QQ.top)),
          qQ = [...new Set([0, WQ, ...wQ.flatMap((QQ => [QQ.top, QQ.bottom]))])].sort(((QQ, WQ) => QQ - WQ)),
          TQ = [];
        for (let zQ = 0; zQ < qQ.length - 1; zQ++) {
          const WQ = qQ[zQ],
            XQ = qQ[zQ + 1],
            sQ = wQ.filter((QQ => QQ.top <= WQ && QQ.bottom >= XQ)).map((QQ => [QQ.left, QQ.right])).sort(((QQ, WQ) => QQ[0] - WQ[0]));
          let FQ = 0;
          for (const [QQ, wQ] of sQ) QQ > FQ && TQ.push({
            left: FQ,
            top: WQ,
            right: QQ,
            bottom: XQ
          }), FQ = Math.max(FQ, wQ);
          FQ < QQ && TQ.push({
            left: FQ,
            top: WQ,
            right: QQ,
            bottom: XQ
          })
        }
        return TQ
      }(QQ, WQ, XQ);
      if (0 === wQ.length) return 'path("M0 0Z")';
      if (1 === wQ.length && 0 === wQ[0].left && 0 === wQ[0].top && wQ[0].right === QQ && wQ[0].bottom === WQ) return "";
      const qQ = QQ => Math.round(10 * QQ) / 10;
      return `path("${wQ.map((QQ=>`M${qQ(QQ.left)} ${qQ(QQ.top)}H${qQ(QQ.right)}V${qQ(QQ.bottom)}H${qQ(QQ.left)}Z`)).join("")}")`
    }

    function UW(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16;
      const qQ = [],
        TQ = 2 * XQ / wQ;
      for (let zQ = 0; zQ < wQ; zQ++) {
        const wQ = WQ - XQ + zQ * TQ,
          sQ = wQ + TQ,
          FQ = Math.min(Math.max(WQ, wQ), sQ) - WQ,
          PQ = Math.sqrt(Math.max(0, XQ * XQ - FQ * FQ));
        qQ.push({
          left: QQ - PQ,
          top: wQ,
          right: QQ + PQ,
          bottom: sQ
        })
      }
      return qQ
    }
    var bW = XQ(9257),
      vW = XQ(36864);

    function dW(QQ) {
      const WQ = QQ.getBoundingClientRect(),
        XQ = {
          left: WQ.left,
          top: WQ.top,
          right: WQ.right,
          bottom: WQ.bottom
        },
        wQ = (0, mQ.e)(QQ);
      if (wQ.whole) return [XQ];
      const qQ = function(QQ) {
          const WQ = QQ.right - QQ.left,
            XQ = QQ.bottom - QQ.top,
            wQ = Math.min(WQ, XQ) / 2,
            qQ = (QQ.left + QQ.right) / 2,
            TQ = (QQ.top + QQ.bottom) / 2;
          return WQ >= XQ ? [{
            left: QQ.left + wQ,
            top: QQ.top,
            right: QQ.right - wQ,
            bottom: QQ.bottom
          }, ...UW(QQ.left + wQ, TQ, wQ), ...UW(QQ.right - wQ, TQ, wQ)] : [{
            left: QQ.left,
            top: QQ.top + wQ,
            right: QQ.right,
            bottom: QQ.bottom - wQ
          }, ...UW(qQ, QQ.top + wQ, wQ), ...UW(qQ, QQ.bottom - wQ, wQ)]
        }(XQ),
        TQ = wQ.keyBox;
      if (TQ) {
        const QQ = (XQ.left + XQ.right) / 2,
          WQ = (XQ.top + XQ.bottom) / 2;
        qQ.push({
          left: QQ - TQ.width / 2,
          top: WQ - TQ.height / 2,
          right: QQ + TQ.width / 2,
          bottom: WQ + TQ.height / 2
        })
      }
      return qQ
    }

    function HW(QQ) {
      const WQ = QQ.getBoundingClientRect();
      return 0 === WQ.width && 0 === WQ.height || "visible" !== getComputedStyle(QQ).visibility ? [] : [(0, bW.l)(WQ, 44)]
    }

    function aW(QQ, WQ) {
      (0, qQ.useEffect)((() => {
        const XQ = QQ.current;
        if (!WQ || !XQ) return;
        const wQ = () => {
          const QQ = Array.from(document.querySelectorAll(".TouchComponentsButtons .TouchKeyHit, .TouchInteractHit")),
            WQ = QQ.find((QQ => QQ.classList.contains("TouchInteractHit")));
          WQ !== qQ && (qQ && TQ.unobserve(qQ), qQ = WQ, WQ && TQ.observe(WQ));
          const wQ = Array.from(document.querySelectorAll(pW.d)),
            zQ = [...QQ.flatMap((QQ => dW(QQ))), ...wQ.flatMap(HW)],
            sQ = function(QQ, WQ) {
              const XQ = WQ.map((WQ => ({
                left: WQ.left - QQ.left,
                top: WQ.top - QQ.top,
                right: WQ.right - QQ.left,
                bottom: WQ.bottom - QQ.top
              })));
              return GW(Math.ceil(QQ.width), Math.ceil(QQ.height), XQ)
            }(XQ.getBoundingClientRect(), zQ);
          XQ.style.clipPath !== sQ && (XQ.style.clipPath = sQ)
        };
        let qQ;
        const TQ = new ResizeObserver((() => {
          wQ()
        }));
        wQ(), TQ.observe(XQ);
        const zQ = XQ.closest(".InGameUi"),
          sQ = new MutationObserver(wQ);
        zQ && sQ.observe(zQ, {
          attributes: !0,
          attributeFilter: ["class", vW.e]
        });
        const FQ = [(0, UQ.o)(DW.d, wQ), (0, UQ.o)(pW.r, wQ), (0, UQ.o)(pW.h, wQ)];
        return () => {
          TQ.disconnect(), sQ.disconnect();
          for (const QQ of FQ) QQ();
          XQ.style.clipPath = ""
        }
      }), [QQ, WQ])
    }
    var lW = XQ(4724);

    function hW(QQ) {
      var WQ;
      let {
        onMove: XQ,
        mode: wQ,
        speedCurve: TQ,
        autorun: zQ = !1,
        keys: sQ
      } = QQ;
      const FQ = (0, qQ.useRef)(null),
        PQ = (0, qQ.useRef)(null),
        JQ = (0, qQ.useRef)(null),
        rQ = (0, qQ.useRef)(null),
        jQ = (0, qQ.useRef)(null),
        BQ = (0, qQ.useRef)(null),
        yQ = (0, qQ.useRef)(new jW).current,
        VQ = (0, qQ.useRef)(null),
        DQ = (0, qQ.useRef)(null),
        pQ = (0, qQ.useRef)(null),
        GQ = (0, qQ.useRef)(!1),
        UQ = (0, qQ.useRef)({
          clientX: 0,
          clientY: 0
        }),
        {
          t: bQ
        } = (0, cQ.C)(),
        vQ = (0, lW.n)(wQ),
        dQ = (0, HQ.n)(["notchSize"]).notchSize,
        aQ = dQ.left,
        lQ = (0, qQ.useRef)(16),
        hQ = (0, yW.e)(),
        [iQ, AQ, RQ] = "pinned" === wQ ? BW.l : null !== (WQ = hQ.hudElements.joystick) && void 0 !== WQ ? WQ : BW.l,
        EQ = "pinned" === wQ ? null : hQ.hudSafe,
        CQ = Math.max(lW.h, lW.j * RQ);
      aW(PQ, "pinned" !== wQ);
      const uQ = function(QQ, WQ, XQ, wQ, TQ) {
        const zQ = (0, qQ.useRef)(null),
          sQ = () => {
            clearInterval(zQ.current), zQ.current = null
          },
          FQ = JW(QQ, {
            create: QQ => new PW(QQ),
            elementRef: WQ,
            ringRef: XQ,
            classPrefix: "Autorun",
            keptBehindMovementPanels: !0,
            resizeEnds: !0,
            onArmed: TQ,
            onLocked: () => {
              zQ.current = setInterval((() => {
                IQ.gameBridge.lookup("dropAhead", null) && (TW.e.play("autorunLedgeStop"), FQ.current.cancel())
              }), 100)
            },
            onUnlocked: () => {
              sQ(), wQ()
            }
          });
        return (0, qQ.useEffect)((() => sQ), []), FQ
      }(zQ, JQ, VQ, (() => {
        nQ(), eQ()
      }), (() => {
        LQ(), null === pQ.current && uQ.current.suspend()
      }));

      function LQ() {
        const QQ = JQ.current.getBoundingClientRect();
        pQ.current = XW(DQ.current, QQ, 80, wW(`.TouchInventoryKey, .TouchSprintKey, ${pW.d}`)), GQ.current = null !== pQ.current && qW(UQ.current, pQ.current)
      }

      function fQ() {
        const {
          innerWidth: QQ,
          innerHeight: WQ
        } = window, XQ = (0, pW.E)(EQ, QQ, WQ, (0, pW.H)(dQ, QQ, WQ), lQ.current);
        return {
          left: XQ[3],
          bottom: XQ[2]
        }
      }

      function SQ(QQ) {
        JQ.current.style.transform = `translate(${QQ.x-CQ}px, ${QQ.y-CQ}px)`
      }

      function tQ(QQ) {
        const WQ = JQ.current;
        WQ.classList.add("Resting"), WQ.classList.toggle("Returning", QQ), WQ.style.display = "fixed_hidden" === wQ ? "none" : "block", SQ(function() {
          const {
            innerWidth: QQ,
            innerHeight: WQ
          } = window, XQ = fQ(), wQ = aQ * QQ / 100 + XQ.left, qQ = FQ.current.offsetHeight || WQ, TQ = ((0, VW.e)(QQ, WQ) ? lW.f : lW.c) + XQ.bottom;
          return {
            x: Math.min(QQ - CQ, Math.max(CQ, wQ + lW.g + iQ * QQ)),
            y: Math.min(qQ - CQ, Math.max(CQ, qQ - TQ + AQ * qQ))
          }
        }())
      }
      const oQ = (0, qQ.useRef)({
        restFixed: tQ,
        release: xQ
      });

      function eQ() {
        vQ ? tQ("fixed_shown" === wQ) : "floating" === wQ && (JQ.current.style.display = "none"), XQ({
          x: 0,
          y: 0
        })
      }

      function nQ() {
        BQ.current = null, jQ.current = null, rQ.current.style.transform = "translate(-50%, -50%)"
      }

      function xQ(QQ) {
        nQ();
        const WQ = uQ.current;
        QQ && null !== WQ && void 0 !== WQ && WQ.lift() ? XQ({
          x: 0,
          y: -WQ.lockedSpeed
        }) : (null === WQ || void 0 === WQ || WQ.cancel(), eQ())
      }

      function YQ(QQ) {
        var WQ;
        if (null === (WQ = uQ.current) || void 0 === WQ || WQ.startTouch(), "pinned" === wQ) {
          const QQ = JQ.current.getBoundingClientRect();
          jQ.current = {
            x: QQ.left + QQ.width / 2,
            y: QQ.top + QQ.height / 2
          }
        } else {
          jQ.current = {
            x: QQ.clientX,
            y: QQ.clientY
          }, JQ.current.classList.remove("Resting", "Returning"), JQ.current.style.display = "block";
          const WQ = FQ.current.getBoundingClientRect();
          SQ({
            x: QQ.clientX - WQ.left,
            y: QQ.clientY - WQ.top
          }), zQ && (UQ.current = {
            clientX: QQ.clientX,
            clientY: QQ.clientY
          }, LQ())
        }
      }

      function NQ(QQ) {
        const WQ = yQ.slidFrom(Array.from(QQ.touches));
        WQ && null === BQ.current && (BQ.current = WQ.identifier, YQ(WQ));
        const wQ = Array.from(QQ.touches).find((QQ => QQ.identifier === BQ.current));
        if (null === jQ.current || null === BQ.current || (0, WW.G)(wQ)) return;
        const qQ = uQ.current,
          zQ = wQ.clientX - jQ.current.x,
          sQ = wQ.clientY - jQ.current.y,
          FQ = Math.hypot(zQ, sQ),
          PQ = FQ > 0 ? Math.min(1, CQ / FQ) : 0,
          gQ = zQ * PQ,
          JQ = sQ * PQ,
          IQ = Math.hypot(gQ, JQ) / CQ,
          VQ = TQ && IQ > 0 ? TQ(IQ) / IQ : 1;
        rQ.current.style.transform = `translate(calc(-50% + ${gQ}px), calc(-50% + ${JQ}px))`;
        const DQ = gQ / CQ,
          bQ = JQ / CQ;
        if (XQ({
            x: DQ * VQ,
            y: bQ * VQ
          }), null !== qQ && null !== pQ.current) {
          qQ.move(DQ, bQ, IQ * VQ), UQ.current = {
            clientX: wQ.clientX,
            clientY: wQ.clientY
          };
          const QQ = GQ.current;
          GQ.current = qW(wQ, pQ.current), GQ.current !== QQ && qQ.target(GQ.current)
        }
      }
      return oQ.current = {
        restFixed: tQ,
        release: xQ
      }, (0, qQ.useLayoutEffect)((() => {
        if (!vQ) return;
        const QQ = () => {
          lQ.current = (0, pW.M)(document)
        };
        QQ(), null === BQ.current && oQ.current.restFixed(!1);
        const WQ = new ResizeObserver((() => {
          QQ(), null === BQ.current && oQ.current.restFixed(!1)
        }));
        WQ.observe(FQ.current);
        const XQ = JQ.current;
        return () => {
          WQ.disconnect(), XQ.classList.remove("Resting", "Returning"), null === BQ.current && (XQ.style.display = "", XQ.style.transform = "")
        }
      }), [vQ, wQ, dQ, iQ, AQ, CQ, EQ]), (0, qQ.useEffect)((() => {
        const QQ = (QQ, WQ) => void 0 === WQ || null === WQ || Array.from(QQ.touches).some((QQ => QQ.identifier === WQ)) ? null : {
            lifted: "touchend" === QQ.type && Array.from(QQ.changedTouches).some((QQ => QQ.identifier === WQ))
          },
          WQ = WQ => {
            const XQ = QQ(WQ, BQ.current);
            XQ && oQ.current.release(XQ.lifted);
            const wQ = QQ(WQ, yQ.touchId);
            wQ && yQ.end(wQ.lifted)
          },
          XQ = () => {
            null !== BQ.current && oQ.current.release(!1), yQ.end(!1)
          },
          wQ = () => {
            "hidden" === document.visibilityState && XQ()
          };
        document.addEventListener("touchstart", WQ, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchmove", WQ, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchend", WQ, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchcancel", WQ, {
          capture: !0,
          passive: !0
        }), window.addEventListener("blur", XQ), document.addEventListener("visibilitychange", wQ);
        const qQ = (0, gW.s)((QQ => {
          let {
            keepsMovement: WQ
          } = QQ;
          WQ || XQ()
        }));
        return () => {
          qQ(), document.removeEventListener("touchstart", WQ, {
            capture: !0
          }), document.removeEventListener("touchmove", WQ, {
            capture: !0
          }), document.removeEventListener("touchend", WQ, {
            capture: !0
          }), document.removeEventListener("touchcancel", WQ, {
            capture: !0
          }), window.removeEventListener("blur", XQ), document.removeEventListener("visibilitychange", wQ)
        }
      }), []), (0, qQ.useEffect)((() => {
        const QQ = FQ.current,
          WQ = QQ => {
            QQ.preventDefault()
          };
        return QQ.addEventListener("touchstart", WQ, {
          passive: !1
        }), () => {
          QQ.removeEventListener("touchstart", WQ)
        }
      }), []), (0, gQ.jsxs)("div", {
        ref: FQ,
        className: "JoystickZone",
        style: vQ && (iQ > 0 || RQ > 1 || fQ().left > 0) ? {
          width: `max(35vw, calc(${aQ+100*iQ}vw + ${fQ().left+lW.g+CQ+24}px))`
        } : void 0,
        onTouchStart: function(QQ) {
          const WQ = Array.from(QQ.changedTouches).filter((QQ => {
            var WQ;
            return null === (WQ = FQ.current) || void 0 === WQ ? void 0 : WQ.contains(QQ.target)
          }));
          for (const wQ of WQ) {
            const QQ = IW(wQ.target);
            QQ && yQ.land(QQ, wQ)
          }
          const XQ = WQ.find((QQ => null === IW(QQ.target)));
          XQ && null === BQ.current && (BQ.current = XQ.identifier, YQ(XQ), NQ(QQ))
        },
        onTouchMove: NQ,
        children: [(0, gQ.jsx)("div", {
          ref: PQ,
          className: "JoystickTouchLayer"
        }), (0, gQ.jsxs)("div", {
          ref: JQ,
          className: "Joystick",
          style: {
            width: 2 * CQ + "px",
            height: 2 * CQ + "px",
            transform: "pinned" === wQ ? "translate(4vw, calc(50vh - 50%))" : void 0
          },
          children: [(0, gQ.jsx)("div", {
            className: "JoystickBase",
            style: {
              width: 2 * CQ + "px",
              height: 2 * CQ + "px"
            }
          }), zQ && (0, gQ.jsxs)(gQ.Fragment, {
            children: [(0, gQ.jsx)("svg", {
              className: "AutorunRing",
              viewBox: "0 0 100 100",
              children: (0, gQ.jsx)("circle", {
                ref: VQ,
                cx: "50",
                cy: "50",
                r: "48",
                pathLength: 1
              })
            }), (0, gQ.jsxs)("div", {
              ref: DQ,
              className: "AutorunTarget",
              children: [(0, gQ.jsx)(kQ.d, {
                name: "lock"
              }), bQ("settingsMenu:autoRun")]
            })]
          }), (0, gQ.jsx)("div", {
            ref: rQ,
            className: "JoystickKnob",
            style: {
              width: `${CQ}px`,
              height: `${CQ}px`
            }
          })]
        }), sQ]
      })
    }
    var iW = XQ(318);
    const cW = {
        deadZone: .1,
        creepEnd: .35,
        fullSpeedAt: .85,
        creepMin: .06,
        creepMax: .22
      },
      AW = {
        short_creep: {
          ...cW,
          creepEnd: .25,
          fullSpeedAt: .75
        },
        long_creep: {
          ...cW,
          creepEnd: .45,
          fullSpeedAt: .95
        },
        small_dead_zone: {
          ...cW,
          deadZone: .05
        },
        control: cW
      };

    function RW(QQ) {
      return function(QQ, WQ) {
        const {
          deadZone: XQ,
          creepEnd: wQ,
          fullSpeedAt: qQ,
          creepMin: TQ,
          creepMax: zQ
        } = QQ;
        if (WQ < XQ) return 0;
        if (WQ < wQ) {
          const QQ = (WQ - XQ) / (wQ - XQ);
          return TQ + (zQ - TQ) * QQ * QQ
        }
        return WQ < qQ ? zQ + (1 - zQ) * (WQ - wQ) / (qQ - wQ) : 1
      }(AW[iW.e.mobile_walk_curve_v1], QQ)
    }
    var EW = XQ(9262);

    function CW(QQ, WQ) {
      const XQ = (0, qQ.useRef)(null);
      return (0, qQ.useLayoutEffect)((() => (mQ.f.set(QQ, XQ.current, WQ), () => {
        mQ.f.set(QQ, null)
      })), [QQ, WQ]), XQ
    }
    const uW = "C",
      LW = "J",
      kW = "U",
      fW = "A",
      SW = "G",
      tW = "X",
      oW = (0, qQ.forwardRef)((function(QQ, WQ) {
        let {
          slot: XQ,
          canvasZone: wQ = !1,
          lit: TQ = !1,
          label: sQ,
          className: FQ,
          children: PQ,
          ...JQ
        } = QQ;
        return (0, qQ.useEffect)((() => (UQ.k.mB(DW.d), () => {
          UQ.k.mB(DW.d)
        })), []), (0, gQ.jsx)("div", {
          ref: WQ,
          className: zQ()("TouchKeyHit", `TouchSlot${XQ}`, FQ, {
            CanvasZone: wQ
          }),
          ...JQ,
          children: (0, gQ.jsxs)("div", {
            className: zQ()("TouchKey", {
              Lit: TQ,
              Labelled: void 0 !== sQ
            }),
            children: [PQ, void 0 !== sQ && (0, gQ.jsx)("span", {
              className: "TouchKeyLabel",
              children: sQ
            })]
          })
        })
      }));

    function eW(QQ, WQ) {
      (0, qQ.useEffect)((() => () => {
        WQ.current && (WQ.current = !1, (0, KQ.A)(QQ, !1, {
          isTrusted: !0,
          timeStamp: performance.now()
        }))
      }), [])
    }

    function nW(QQ, WQ) {
      const XQ = (0, EW.m)(WQ);
      return QQ.filter((QQ => null !== QQ)).slice(0, XQ.length).map(((QQ, WQ) => {
        const wQ = XQ[WQ];
        return (0, gQ.jsx)(qQ.Fragment, {
          children: QQ.render(wQ)
        }, `${QQ.id}:${wQ}`)
      }))
    }
    var xW = XQ(36872);
    class YW extends zW {
      constructor() {
        super(...arguments), this.start = {
          x: 0,
          y: 0
        }, this.moved = !1
      }
      press(QQ, WQ) {
        this.start = {
          x: QQ,
          y: WQ
        }, this.moved = !1, this.startTouch(), this.hold(!0, !1)
      }
      move(QQ, WQ, XQ) {
        const wQ = Math.hypot(QQ - this.start.x, WQ - this.start.y) <= 12;
        this.moved ||= !wQ;
        const qQ = null !== XQ && WQ < this.start.y - 12 && qW({
          clientX: QQ,
          clientY: WQ
        }, XQ);
        this.hold(!this.moved, wQ || qQ)
      }
    }
    const NW = new Set;

    function ZW(QQ) {
      const WQ = new Set(Array.from(QQ.touches, (QQ => QQ.identifier)));
      for (const XQ of NW) {
        for (const QQ of XQ.ids) WQ.has(QQ) || XQ.ids.delete(QQ);
        if (0 === XQ.ids.size) {
          NW.delete(XQ);
          XQ.pressesOnPointerDown && "touchstart" === QQ.type && Array.from(QQ.changedTouches).some((QQ => QQ.target instanceof Node && XQ.element.contains(QQ.target))) || XQ.release()
        }
      }
    }
    if ("undefined" !== typeof window)
      for (const Sz of ["touchstart", "touchmove"]) window.addEventListener(Sz, ZW, {
        capture: !0,
        passive: !0
      });

    function OW(QQ) {
      let {
        pressesOnPointerDown: WQ = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const XQ = (0, qQ.useRef)(QQ);
      XQ.current = QQ;
      const wQ = (0, qQ.useRef)({
        ids: new Set,
        element: null,
        pressesOnPointerDown: WQ,
        release: () => {
          XQ.current()
        }
      });
      (0, qQ.useEffect)((() => {
        const QQ = wQ.current;
        return () => {
          NW.delete(QQ), QQ.ids.clear()
        }
      }), []);
      const TQ = QQ => {
        const WQ = wQ.current;
        for (const XQ of Array.from(QQ.changedTouches)) WQ.ids.delete(XQ.identifier);
        0 === WQ.ids.size && NW.delete(WQ)
      };
      return {
        onTouchStart: QQ => {
          const WQ = wQ.current;
          WQ.element = QQ.currentTarget;
          for (const XQ of Array.from(QQ.changedTouches)) XQ.target instanceof Node && QQ.currentTarget.contains(XQ.target) && WQ.ids.add(XQ.identifier);
          WQ.ids.size > 0 && NW.add(WQ)
        },
        onTouchEnd: TQ,
        onTouchCancel: TQ
      }
    }

    function KW(QQ, WQ) {
      return null === WQ ? null : (0, xW.e)(QQ.nativeEvent.changedTouches, WQ.id)
    }

    function mW(QQ) {
      let {
        lockable: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, cQ.C)(), wQ = "round" === (0, BW.db)().hudShape, TQ = (0, qQ.useRef)(!1);
      eW(OQ.u.Jump, TQ);
      const zQ = (0, qQ.useRef)(null),
        sQ = (0, qQ.useRef)(null),
        FQ = (0, qQ.useRef)(null),
        PQ = (0, qQ.useRef)(null),
        JQ = (0, qQ.useRef)(null),
        rQ = (0, qQ.useRef)(null),
        IQ = (0, qQ.useRef)(!1),
        jQ = (QQ, WQ) => {
          TQ.current = QQ, (0, KQ.A)(OQ.u.Jump, QQ, WQ)
        },
        BQ = function() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            isTrusted: !0,
            timeStamp: performance.now()
          };
          TQ.current && (zQ.current && (0, QW.h)(zQ.current, !1), jQ(!1, QQ))
        },
        yQ = JW(WQ, {
          create: QQ => new YW(QQ),
          elementRef: zQ,
          ringRef: sQ,
          classPrefix: "JumpLock",
          keptBehindMovementPanels: !1,
          resizeEnds: !1,
          onArmed: () => {
            const QQ = zQ.current.getBoundingClientRect(),
              WQ = FQ.current.parentElement,
              XQ = WQ.getBoundingClientRect(),
              wQ = {
                left: XQ.left + WQ.clientLeft,
                top: XQ.top + WQ.clientTop,
                right: XQ.right - WQ.clientLeft,
                bottom: XQ.bottom - WQ.clientTop
              };
            if (JQ.current = XW(FQ.current, wQ, 16, wW(`.TouchKeyHit:not(.JumpKey) > .TouchKey, .TouchInventoryKey, .TouchSprintKey, ${pW.d}`)), null === JQ.current) return void yQ.current.suspend();
            const qQ = JQ.current;
            rQ.current = {
              left: Math.min(QQ.left, qQ.left),
              top: qQ.top,
              right: Math.max(QQ.right, qQ.right),
              bottom: QQ.bottom
            }, IQ.current = null !== PQ.current && qW({
              clientX: PQ.current.x,
              clientY: PQ.current.y
            }, qQ)
          },
          onUnlocked: () => {
            null === PQ.current && BQ()
          }
        }),
        VQ = QQ => {
          var WQ;
          PQ.current = null, null === (WQ = yQ.current) || void 0 === WQ || WQ.cancel(), BQ(QQ)
        },
        DQ = OW((() => {
          VQ()
        })),
        pQ = QQ => {
          const WQ = PQ.current;
          var XQ;
          return null === WQ ? null !== (XQ = yQ.current) && void 0 !== XQ && XQ.locked ? null : "lifted" : KW(QQ, WQ) ? "lifted" : (0, xW.h)(QQ.nativeEvent.touches, WQ.id) ? null : "dropped"
        };
      return (0, gQ.jsxs)(oW, {
        ref: zQ,
        slot: LW,
        className: "JumpKey",
        onTouchStart: QQ => {
          DQ.onTouchStart(QQ), (0, QW.h)(QQ.currentTarget, !0), null === PQ.current || (0, xW.h)(QQ.nativeEvent.touches, PQ.current.id) || VQ();
          const WQ = QQ.changedTouches[0];
          var XQ;
          null === PQ.current && WQ && (PQ.current = {
            id: WQ.identifier,
            x: WQ.clientX,
            y: WQ.clientY
          }, null === (XQ = yQ.current) || void 0 === XQ || XQ.press(WQ.clientX, WQ.clientY));
          TQ.current || jQ(!0, QQ.nativeEvent)
        },
        onTouchMove: QQ => {
          const WQ = PQ.current,
            XQ = KW(QQ, WQ);
          if (!XQ) return;
          const wQ = yQ.current;
          if (null === wQ || void 0 === wQ || wQ.move(XQ.clientX, XQ.clientY, rQ.current), null !== wQ && void 0 !== wQ && wQ.offered) {
            const QQ = qW(XQ, JQ.current);
            QQ !== IQ.current && (IQ.current = QQ, wQ.target(QQ))
          }
          WQ.x = XQ.clientX, WQ.y = XQ.clientY
        },
        onTouchEnd: QQ => {
          var WQ;
          DQ.onTouchEnd(QQ);
          const XQ = pQ(QQ);
          null !== XQ && ("dropped" !== XQ ? (PQ.current = null, null !== (WQ = yQ.current) && void 0 !== WQ && WQ.lift() ? (0, QW.h)(QQ.currentTarget, !1) : BQ(QQ.nativeEvent)) : VQ(QQ.nativeEvent))
        },
        onTouchCancel: QQ => {
          DQ.onTouchCancel(QQ), null !== pQ(QQ) && VQ(QQ.nativeEvent)
        },
        children: [(0, gQ.jsx)(kQ.d, {
          name: "arrow-up-from-line"
        }), WQ && (0, gQ.jsxs)(gQ.Fragment, {
          children: [(0, gQ.jsx)("span", {
            className: "JumpLockBadge",
            children: (0, gQ.jsx)(kQ.d, {
              name: "lock"
            })
          }), (0, gQ.jsx)("svg", {
            className: "JumpLockRing",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            children: (0, gQ.jsx)("rect", {
              ref: sQ,
              x: "2",
              y: "2",
              width: "96",
              height: "96",
              rx: wQ ? 48 : 0,
              pathLength: 1
            })
          }), (0, gQ.jsxs)("div", {
            ref: FQ,
            className: "JumpLockTarget",
            children: [(0, gQ.jsx)(kQ.d, {
              name: "lock"
            }), XQ("settingsMenu:jumpLock")]
          })]
        })]
      })
    }
    var MW = XQ(36888);

    function QX(QQ) {
      let {
        atHome: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, cQ.C)(), wQ = (TQ = (0, GQ.g)("runningSpeed"), sQ = (0, GQ.g)("walkingSpeed"), null !== TQ && null !== sQ && TQ > sQ);
      var TQ, sQ;
      const PQ = (0, BW.s)((0, yW.e)().hudElements, "sprint"),
        JQ = (0, FQ.j)(MW.c, (0, MW.f)());
      return (0, qQ.useEffect)((() => {
        wQ && !PQ || (0, MW.g)(!0)
      }), [wQ, PQ]), (0, qQ.useEffect)((() => () => {
        (0, MW.g)(!0)
      }), []), wQ ? (0, gQ.jsx)("div", {
        className: zQ()("TouchSprintHit", {
          AtHome: WQ
        }),
        role: "switch",
        "aria-checked": JQ,
        "aria-label": XQ("touchKeys:sprint"),
        [rW]: "",
        onClick: () => {
          (0, MW.g)(!(0, MW.f)())
        },
        children: (0, gQ.jsx)("div", {
          className: zQ()("TouchKey TouchSprintKey", {
            Lit: JQ
          }),
          children: (0, gQ.jsx)(kQ.d, {
            name: JQ ? "person-running" : "person-walking"
          })
        })
      }) : null
    }
    const WX = new WeakMap;
    class XX {
      constructor(QQ) {
        this.zones = QQ, this.followed = new Map, this.onStart = QQ => {
          if (this.releaseMissing(QQ.touches), QQ.target instanceof HTMLCanvasElement)
            for (let XQ = 0; XQ < QQ.changedTouches.length; XQ++) {
              var WQ;
              const {
                identifier: wQ,
                clientX: qQ,
                clientY: TQ
              } = QQ.changedTouches[XQ];
              this.release(wQ);
              const zQ = this.zones.hitZone(qQ, TQ);
              if (!zQ) continue;
              const {
                key: sQ
              } = zQ;
              null === (WQ = WX.get(sQ)) || void 0 === WQ || WQ.cancel();
              const FQ = {
                hit: zQ.element,
                key: sQ,
                x: zQ.x,
                y: zQ.y,
                reach: .6 * zQ.radius
              };
              this.followed.set(wQ, FQ), (0, QW.h)(zQ.element, !0), wX(FQ, qQ, TQ)
            }
        }, this.onMove = QQ => {
          this.releaseMissing(QQ.touches);
          for (let WQ = 0; WQ < QQ.changedTouches.length; WQ++) {
            const {
              identifier: XQ,
              clientX: wQ,
              clientY: qQ
            } = QQ.changedTouches[WQ], TQ = this.followed.get(XQ);
            TQ && wX(TQ, wQ, qQ)
          }
        }, this.onEnd = QQ => {
          for (let WQ = 0; WQ < QQ.changedTouches.length; WQ++) this.release(QQ.changedTouches[WQ].identifier)
        }, this.onVisibilityChange = () => {
          document.hidden && this.releaseAll()
        }
      }
      start() {
        const QQ = {
          passive: !0
        };
        return document.addEventListener("touchstart", this.onStart, QQ), document.addEventListener("touchmove", this.onMove, QQ), document.addEventListener("touchend", this.onEnd, QQ), document.addEventListener("touchcancel", this.onEnd, QQ), document.addEventListener("visibilitychange", this.onVisibilityChange), () => {
          document.removeEventListener("touchstart", this.onStart), document.removeEventListener("touchmove", this.onMove), document.removeEventListener("touchend", this.onEnd), document.removeEventListener("touchcancel", this.onEnd), document.removeEventListener("visibilitychange", this.onVisibilityChange), this.releaseAll()
        }
      }
      releaseMissing(QQ) {
        for (const WQ of [...this.followed.keys()])(0, xW.h)(QQ, WQ) || this.release(WQ)
      }
      releaseAll() {
        for (const QQ of [...this.followed.keys()]) this.release(QQ)
      }
      release(QQ) {
        const WQ = this.followed.get(QQ);
        if (!WQ) return;
        this.followed.delete(QQ);
        for (const qQ of this.followed.values())
          if (qQ.key === WQ.key) return;
        (0, QW.h)(WQ.hit, !1);
        const {
          key: XQ
        } = WQ, wQ = XQ.style.translate;
        XQ.style.translate = "", wQ && WX.set(XQ, XQ.animate({
          translate: [wQ, "0 0"]
        }, {
          duration: 150,
          easing: "ease-out"
        }))
      }
    }

    function wX(QQ, WQ, XQ) {
      let {
        key: wQ,
        x: qQ,
        y: TQ,
        reach: zQ
      } = QQ;
      const sQ = WQ - qQ,
        FQ = XQ - TQ,
        PQ = Math.min(1, zQ / (Math.hypot(sQ, FQ) || 1));
      wQ.style.translate = `${sQ*PQ}px ${FQ*PQ}px`
    }
    var qX = XQ(1532),
      TX = XQ(105),
      zX = XQ(1404);
    const sX = "threeFingerHintShown",
      FX = {
        android: "touchHint:threeFingerAndroid",
        ios: "touchHint:threeFingerIos"
      };
    let PX = 0,
      gX = !1;

    function JX() {
      const QQ = new Set;
      let WQ = -1 / 0,
        XQ = -1 / 0,
        wQ = null,
        qQ = 0;
      const TQ = () => {
          QQ.clear()
        },
        zQ = TQ => {
          if (TQ.touches.length > 0) return;
          for (let WQ = 0; WQ < TQ.changedTouches.length; WQ++) QQ.add(TQ.changedTouches[WQ].identifier);
          const zQ = QQ.size;
          if (zQ < 3 || !(0, gW.A)()) return;
          if (qQ = zQ, null !== wQ) return;
          const sQ = performance.now(),
            FQ = WQ >= sQ - 200;
          wQ = setTimeout((() => {
            if (wQ = null, !(0, gW.A)()) return;
            const QQ = XQ >= sQ - 200 || document.hidden;
            ! function(QQ, WQ) {
              var XQ;
              const wQ = (0, TX.getOperatingSystem)();
              PX < 5 && (PX++, (0, qX.reportAnalyticsClick)({
                id: "touch.os_cancel",
                value: null === WQ ? `${wQ}:${QQ}` : `${wQ}:${QQ}:${WQ}`
              })), null === WQ && (gX || !0 === vQ.i.getItem(sX) || (gX = !0, vQ.i.setItem(sX, !0), zX.NotificationProvider.showAlertPopup({
                title: "touchHint:threeFingerTitle",
                subtitle: null !== (XQ = FX[wQ]) && void 0 !== XQ ? XQ : "touchHint:threeFingerOther",
                confirmText: "general:ok",
                disablePressBackgroundToClose: !0,
                unlockPointerKey: "threeFingerHint"
              })))
            }(qQ, QQ ? "hide" : FQ ? "blur" : null)
          }), 500)
        },
        sQ = () => {
          XQ = performance.now()
        },
        FQ = () => {
          WQ = performance.now()
        },
        PQ = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("touchstart", TQ, PQ), document.addEventListener("touchcancel", zQ, PQ), document.addEventListener("visibilitychange", sQ), window.addEventListener("blur", FQ), window.addEventListener("resize", sQ), window.addEventListener("orientationchange", sQ), () => {
        document.removeEventListener("touchstart", TQ, PQ), document.removeEventListener("touchcancel", zQ, PQ), document.removeEventListener("visibilitychange", sQ), window.removeEventListener("blur", FQ), window.removeEventListener("resize", sQ), window.removeEventListener("orientationchange", sQ), null !== wQ && clearTimeout(wQ)
      }
    }
    const rX = () => {
      const QQ = (0, ZQ.l)(),
        WQ = (0, lQ.D)();
      return QQ || WQ
    };

    function IX(QQ) {
      (0, mQ.g)(QQ.x, QQ.y)
    }
    const jX = (0, qQ.memo)((function() {
        const QQ = rX(),
          {
            joystickMode: WQ,
            touchSpeedCurve: XQ,
            autorun: wQ
          } = (0, HQ.n)(["clientEscMenuOptions"]).clientEscMenuOptions;
        return (0, qQ.useEffect)((() => ((0, MQ.i)(OQ.x.TouchControls, OQ.x.TouchControls), () => {
          (0, MQ.i)(OQ.x.TouchControls, 0), (0, mQ.g)(0, 0)
        })), []), (0, qQ.useEffect)(JX, []), (0, gQ.jsx)("div", {
          className: zQ()("TouchMovementWrapper", {
            Hidden: QQ
          }),
          "data-camera-keeper": "",
          children: (0, gQ.jsx)(hW, {
            onMove: IX,
            mode: WQ,
            speedCurve: XQ ? RW : void 0,
            autorun: wQ,
            keys: (0, gQ.jsx)(QX, {
              atHome: !(0, lW.n)(WQ)
            })
          })
        })
      })),
      BX = (0, qQ.memo)((function() {
        const QQ = rX(),
          {
            clientEscMenuOptions: WQ
          } = (0, HQ.n)(["clientEscMenuOptions"]),
          XQ = WQ.touchActionButtons;
        return (0, qQ.useEffect)((() => new XX(mQ.f).start()), []), (0, qQ.useEffect)((() => {
          UQ.k.mB(DW.d)
        }), [QQ]), (0, gQ.jsxs)("div", {
          className: zQ()("TouchComponentsButtons", {
            Hidden: QQ
          }),
          "data-camera-keeper": "",
          children: [(0, gQ.jsx)(mW, {
            lockable: WQ.jumpLock && !QQ
          }), (0, gQ.jsx)(lX, {
            hidden: QQ,
            actionButtons: XQ
          }), (0, gQ.jsx)(VX, {})]
        })
      }));

    function yX(QQ) {
      const WQ = WQ => XQ => {
        (0, QW.h)(XQ.currentTarget, WQ), QQ(WQ, XQ.nativeEvent)
      };
      return {
        onPointerDown: WQ(!0),
        onPointerUp: WQ(!1),
        onPointerCancel: WQ(!1)
      }
    }

    function VX() {
      const QQ = (0, GQ.g)("canCrouch"),
        WQ = (0, dQ.e)("crouching"),
        XQ = (0, qQ.useRef)(!1);
      eW(OQ.u.Crouch, XQ);
      const wQ = (QQ, WQ) => {
          XQ.current = QQ, (0, KQ.A)(OQ.u.Crouch, QQ, WQ)
        },
        TQ = (0, qQ.useRef)(null),
        zQ = () => {
          XQ.current && (TQ.current && (0, QW.h)(TQ.current, !1), wQ(!1, {
            isTrusted: !0,
            timeStamp: performance.now()
          }))
        },
        sQ = OW(zQ);
      return (0, qQ.useEffect)((() => {
        !1 === QQ && zQ()
      }), [QQ]), !1 === QQ ? null : (0, gQ.jsx)(oW, {
        ref: TQ,
        slot: uW,
        className: "CrouchKey",
        lit: WQ,
        ...sQ,
        ...yX(wQ),
        children: (0, gQ.jsx)(kQ.d, {
          name: "arrow-down-to-line"
        })
      })
    }
    const DX = [{
        icon: "arrows-rotate"
      }],
      pX = [{
        icon: "Arrow"
      }],
      GX = [{
        icon: "crosshairs"
      }],
      UX = [{
        icon: "swords"
      }],
      bX = [{
        icon: "hand-back-point-up"
      }],
      vX = [{
        icon: "Firecracker"
      }];

    function dX(QQ, WQ, XQ, wQ) {
      return {
        id: JSON.stringify(WQ),
        render: qQ => (0, gQ.jsx)(hX, {
          code: QQ,
          slot: qQ,
          icon: WQ,
          label: wQ,
          hidden: XQ
        })
      }
    }

    function HX(QQ, WQ) {
      return {
        id: "fly",
        render: XQ => (0, gQ.jsx)(aX, {
          slot: XQ,
          flying: QQ,
          label: WQ
        })
      }
    }

    function aX(QQ) {
      let {
        slot: WQ,
        flying: XQ,
        label: wQ
      } = QQ;
      return (0, gQ.jsx)(oW, {
        slot: WQ,
        className: "FlyKey",
        lit: XQ,
        label: wQ,
        ...yX(((QQ, WQ) => {
          (0, KQ.A)(OQ.u.Fly, QQ, WQ)
        })),
        children: (0, gQ.jsx)(kQ.d, {
          name: "feather-pointed"
        })
      })
    }

    function lX(QQ) {
      var WQ, XQ;
      let {
        hidden: wQ,
        actionButtons: qQ
      } = QQ;
      const {
        t: TQ
      } = (0, cQ.C)(), {
        gun: zQ,
        aimable: sQ,
        chargeName: FQ
      } = (0, dQ.e)("heldItemAim"), PQ = (0, dQ.e)("gliderBoostFuel"), {
        canFly: JQ,
        flying: rQ
      } = (0, dQ.e)("flight"), IQ = (0, GQ.g)("touchscreenActionButton"), jQ = zQ ? DX : IQ, BQ = sQ ? {
        icon: pX,
        label: TQ("touchKeys:aim")
      } : null, yQ = null !== FQ ? {
        icon: [{
          icon: FQ
        }]
      } : null, VQ = null !== BQ && void 0 !== BQ ? BQ : yQ, DQ = null !== (WQ = null === (XQ = zQ ? BQ : null !== yQ && void 0 !== yQ ? yQ : BQ) || void 0 === XQ ? void 0 : XQ.icon) && void 0 !== WQ ? WQ : bX, pQ = [!qQ && VQ ? dX(mQ.b.Action2, VQ.icon, wQ, VQ.label) : null, zQ ? dX(mQ.b.Action3, GX, wQ, TQ("touchKeys:scope")) : null, JQ ? HX(rQ, TQ("touchKeys:fly")) : null];
      return (0, gQ.jsxs)(gQ.Fragment, {
        children: [jQ && (0, gQ.jsx)(hX, {
          code: mQ.b.Action1,
          slot: SW,
          icon: jQ,
          label: zQ ? TQ("touchKeys:reload") : void 0,
          hidden: wQ
        }, JSON.stringify(jQ)), qQ && (0, gQ.jsxs)(gQ.Fragment, {
          children: [(0, gQ.jsx)(hX, {
            code: mQ.b.Attack,
            slot: fW,
            icon: UX,
            name: TQ("touchKeys:attack"),
            hidden: wQ
          }), (0, gQ.jsx)(hX, {
            code: mQ.b.Use,
            slot: kW,
            icon: DQ,
            name: TQ("touchKeys:use"),
            hidden: wQ
          })]
        }), nW(pQ, qQ), PQ > 0 && (0, gQ.jsx)(hX, {
          code: mQ.b.Boost,
          slot: tW,
          icon: vX,
          label: TQ("touchKeys:boost", {
            fuel: PQ > 99 ? "99+" : PQ
          }),
          hidden: wQ
        })]
      })
    }

    function hX(QQ) {
      let {
        code: WQ,
        slot: XQ,
        icon: wQ,
        label: qQ,
        name: TQ,
        hidden: zQ
      } = QQ;
      const sQ = CW(WQ, zQ);
      return (0, gQ.jsx)(oW, {
        ref: sQ,
        slot: XQ,
        className: "TouchActionKey",
        canvasZone: !0,
        label: qQ,
        role: void 0 !== TQ ? "img" : void 0,
        "aria-label": TQ,
        children: (0, gQ.jsx)(PQ.e, {
          text: wQ
        })
      })
    }
    var iX = XQ(4553),
      cX = XQ(2728),
      AX = XQ(695);
    const RX = (0, qQ.memo)((function() {
      (0, DQ.d)();
      const QQ = (0, qQ.useRef)([]),
        WQ = (0, cX.d)(),
        XQ = (0, qQ.useRef)(0),
        wQ = (0, qQ.useRef)(0),
        TQ = (0, qQ.useRef)([]),
        zQ = (0, qQ.useRef)(null);

      function sQ(XQ, wQ, qQ, TQ) {
        const zQ = (0, AX.e)(),
          sQ = setTimeout((() => {
            QQ.current = QQ.current.filter((QQ => QQ.id !== zQ)), WQ()
          }), TQ);
        IQ.gameBridge.send("recordFlyingMiddleText", {
          content: XQ,
          lT: wQ,
          angle: qQ,
          hT: TQ
        }), QQ.current.push({
          id: zQ,
          content: XQ,
          lT: wQ,
          hT: TQ,
          removeTimeout: sQ,
          angle: qQ
        }), WQ()
      }
      return (0, dQ.b)("shotDamageToShow", (QQ => {
        let {
          damage: WQ,
          wasCrit: XQ,
          distance: wQ
        } = QQ;
        const qQ = -Math.PI / 4 + Math.random() * Math.PI / 2;
        sQ(XQ ? [{
          str: WQ.toString(),
          style: {
            color: "#ff8a80",
            fontSize: "1.6em"
          }
        }] : [WQ.toString()], wQ, qQ, 1e3)
      })), (0, FQ.f)("flyingMiddleMessage", (QQ => {
        let {
          content: WQ,
          lT: qQ,
          hT: FQ
        } = QQ;
        TQ.current.push({
          content: WQ,
          lT: qQ,
          hT: FQ
        });
        const PQ = () => {
          const {
            content: QQ,
            lT: WQ,
            hT: qQ
          } = TQ.current.shift(), zQ = function(QQ) {
            const WQ = -Math.PI / 4,
              XQ = Math.PI / 4,
              wQ = XQ - WQ,
              qQ = (1 + Math.sqrt(5)) / 2,
              TQ = 2 * Math.PI / (qQ * qQ);
            let zQ = QQ + TQ;
            for (; zQ > XQ;) zQ -= wQ;
            for (; zQ < WQ;) zQ += wQ;
            const sQ = Math.PI / 6;
            if (Math.abs(zQ - QQ) < sQ) {
              zQ = QQ + (Math.sign(zQ - QQ) || 1) * sQ, zQ > XQ && (zQ = QQ - sQ), zQ < WQ && (zQ = QQ + sQ)
            }
            return zQ
          }(wQ.current);
          wQ.current = zQ, XQ.current = Date.now(), sQ(QQ, WQ, zQ, qQ)
        };
        if (!zQ.current) {
          const QQ = () => {
            TQ.current.length > 0 && PQ(), 0 === TQ.current.length && (clearInterval(zQ.current), zQ.current = null)
          };
          zQ.current = setInterval(QQ, 200), XQ.current + 200 < Date.now() && QQ()
        }
        for (; TQ.current.length > 4;) PQ()
      })), (0, FQ.f)("forceFlyingMiddleMessage", (QQ => {
        let {
          content: WQ,
          lT: XQ,
          angle: wQ,
          hT: qQ
        } = QQ;
        sQ(WQ, XQ, wQ, qQ)
      })), (0, qQ.useEffect)((() => () => {
        clearInterval(zQ.current), zQ.current = null;
        for (const WQ of QQ.current) clearTimeout(WQ.removeTimeout)
      }), []), (0, gQ.jsx)("div", {
        className: "FlyingMiddleTextWrapper",
        children: QQ.current.map((QQ => {
          const {
            id: WQ,
            content: XQ,
            lT: wQ,
            hT: qQ,
            angle: TQ
          } = QQ;
          return QQ.pos || (QQ.pos = function(QQ, WQ) {
            const XQ = 50 / (QQ ** .7 * .35);
            return {
              x: XQ * Math.sin(WQ),
              y: -XQ * Math.cos(WQ)
            }
          }(wQ, TQ)), (0, gQ.jsx)(EX, {
            className: "FlyingMiddleText",
            classNames: "FlyingMiddleText",
            timeout: qQ,
            enterActiveStyle: {
              transform: `translate(${QQ.pos.x}vw, ${QQ.pos.y}vh)`,
              transition: `transform ${qQ}ms ease-out`
            },
            children: (0, gQ.jsx)("div", {
              children: (0, gQ.jsx)(PQ.e, {
                text: XQ
              })
            })
          }, WQ)
        }))
      })
    }));

    function EX(QQ) {
      let {
        children: WQ,
        className: XQ,
        classNames: wQ,
        timeout: TQ,
        enterActiveStyle: zQ
      } = QQ;
      const [sQ, FQ] = (0, qQ.useState)(!1), [PQ, JQ] = (0, qQ.useState)(!1), rQ = (0, qQ.useRef)(null);
      return (0, qQ.useEffect)((() => {
        FQ(!0)
      }), []), (0, gQ.jsx)(iX.c, {
        className: XQ,
        classNames: wQ || XQ,
        in: sQ,
        timeout: TQ,
        nodeRef: rQ,
        onEntering: () => {
          JQ(!0)
        },
        children: (0, qQ.cloneElement)(WQ, {
          ref: rQ,
          style: PQ && zQ || void 0
        })
      })
    }
    var CX = XQ(36891);

    function uX() {
      const QQ = (0, dQ.e)("health");
      return (0, gQ.jsxs)("div", {
        className: "BottomScreenStatBarList",
        children: [(0, gQ.jsx)(CX.c, {
          placement: "statBars"
        }), (0, gQ.jsx)(LX, {
          actualValue: QQ.shield,
          maxValue: QQ.maxShield,
          hideAtValue: 0,
          icon: "shield",
          className: "ShieldBar"
        }), (0, gQ.jsx)(LX, {
          actualValue: QQ.health,
          maxValue: QQ.maxHealth,
          icon: "heart",
          className: "HealthBar"
        })]
      })
    }

    function LX(QQ) {
      let {
        actualValue: WQ,
        maxValue: XQ,
        hideAtValue: wQ,
        icon: qQ,
        className: TQ
      } = QQ;
      return (0, DQ.h)(), null === WQ || null === XQ || WQ === wQ || XQ === wQ ? null : (0, gQ.jsx)("div", {
        className: "BottomScreenStatBarWrapper",
        children: (0, gQ.jsxs)("div", {
          className: "BottomScreenStatBarBackground",
          children: [(0, gQ.jsx)("div", {
            className: `BottomScreenStatBar ${TQ}`,
            style: {
              transform: `scaleX(${Math.max(WQ/XQ,0)})`,
              transformOrigin: "left center"
            }
          }), (0, gQ.jsxs)("div", {
            className: "BottomScreenStatBarText SmallTextBold",
            children: [(0, gQ.jsx)(kQ.d, {
              name: qQ
            }), ` ${Math.ceil(WQ)}/${XQ}`]
          })]
        })
      })
    }
    var kX = XQ(34500),
      fX = XQ(4851),
      SX = XQ(1384),
      tX = XQ(2971),
      oX = XQ(1507),
      eX = XQ(1360),
      nX = XQ(3685),
      xX = XQ(3223),
      YX = XQ(2203),
      NX = XQ(814),
      ZX = XQ(3732),
      OX = XQ(158),
      KX = XQ(402);

    function mX(QQ, WQ) {
      let {
        shownName: XQ,
        lifeformType: wQ
      } = QQ;
      return null !== XQ ? XQ : null !== wQ ? WQ(`lifeform:${(0,KX.ne)(wQ)}`) : null
    }
    var MX = XQ(3692),
      Qw = XQ(3695);
    const Ww = {
        FallDamage: "respawnPage:diedFallDamage",
        VoidJump: "respawnPage:diedVoid",
        Lava: "respawnPage:diedLava",
        "Toxic Waste": "respawnPage:diedToxicWaste",
        "Poison Potion": "respawnPage:diedPoisoned",
        "Rotten Brain": "respawnPage:diedPoisoned"
      },
      Xw = (0, qQ.memo)((function() {
        var QQ, WQ;
        const XQ = (0, DQ.d)(),
          wQ = (0, jQ.useNavigatePreserveSearch)(),
          {
            t: TQ
          } = (0, cQ.C)(),
          {
            loadingOverlayVisible: sQ
          } = (0, HQ.n)(["loadingOverlayVisible"]),
          PQ = (0, lQ.A)(),
          [JQ, rQ] = (0, qQ.useState)(!1),
          [BQ, yQ] = (0, qQ.useState)(!0),
          [VQ, pQ] = (0, qQ.useState)(null),
          UQ = (0, cX.d)(),
          vQ = (0, GQ.g)("respawnButtonText"),
          aQ = (0, GQ.g)("usePlayAgainButton"),
          hQ = (0, GQ.g)("useRespawnButton"),
          {
            gameNameWithVariation: iQ
          } = (0, dQ.e)("connectedGame"),
          AQ = (0, qQ.useRef)(bQ.e.get("secsToRespawn")),
          RQ = (0, qQ.useRef)(IQ.gameBridge.latest("localPlayerAlive")),
          EQ = (0, qQ.useRef)(bQ.e.get("secsToRespawn")),
          CQ = (0, qQ.useRef)(bQ.e.get("autoRespawn")),
          uQ = (0, qQ.useRef)(null),
          LQ = (0, qQ.useRef)(0),
          fQ = (0, qQ.useRef)(0),
          [SQ, tQ] = (0, qQ.useState)(!1),
          eQ = (0, qQ.useRef)(null),
          nQ = (0, qQ.useRef)(null),
          xQ = (0, qQ.useRef)(null);
        (0, GQ.d)("secsToRespawn", (QQ => {
          console.log("Received new secsToRespawn with", QQ, "and current canRespawn value of ", CQ.current), EQ.current = QQ, OQ()
        })), (0, GQ.d)("autoRespawn", (QQ => {
          console.log("Received autorespawn", QQ, "current canRespawn value of ", AQ.current), CQ.current = QQ, OQ()
        }));
        const YQ = QQ => {
          console.log("Updating respawn component from localPlayerAliveSet. isAlive:", QQ), QQ || LQ.current++, RQ.current = QQ, OQ()
        };
        (0, dQ.b)("localPlayerAliveSet", YQ), (0, FQ.f)(xX.n, (QQ => {
          "connected" === QQ && !RQ.current && CQ.current && AQ.current <= 0 && (fQ.current = 0, KQ())
        })), (0, qQ.useEffect)((() => {
          const QQ = IQ.gameBridge.latest("localPlayerAlive");
          QQ === RQ.current ? (console.log("Updating respawn component from initial mount"), OQ()) : YQ(QQ)
        }), []), (0, qQ.useEffect)((() => {
          if (JQ) {
            tQ(!1);
            const QQ = setTimeout((() => {
              tQ(!0)
            }), 600);
            return () => {
              clearTimeout(QQ)
            }
          }
          return () => {}
        }), [JQ]);
        (0, dQ.b)("kill", (QQ => {
          let {
            killer: WQ,
            victim: XQ,
            withItem: wQ
          } = QQ;
          if (!XQ.local) return;
          const qQ = ((QQ, WQ) => {
            if (QQ.local) {
              const QQ = Ww[WQ];
              return QQ ? TQ(QQ) : null
            }
            const XQ = mX(QQ, TQ);
            return XQ ? TQ("respawnPage:killedBy", {
              name: XQ
            }) : null
          })(WQ, wQ);
          qQ && pQ({
            text: qQ,
            deathCount: RQ.current ? LQ.current + 1 : LQ.current
          })
        }));
        const NQ = () => {
            JQ && CQ.current && RQ.current && SQ && rQ(!1)
          },
          ZQ = JQ && CQ.current && RQ.current && SQ && !sQ;
        (0, FQ.f)("usedKeyboard", (() => {
          NQ()
        })), (0, Qw.b)("respawn", ZQ, NQ);
        const OQ = () => {
            yQ(EQ.current >= 3 || !CQ.current), RQ.current ? (clearInterval(uQ.current), uQ.current = null, CQ.current ? UQ() : rQ(!1)) : (rQ(!0), AQ.current = EQ.current, UQ(), console.log("Running respawn stats updated", CQ.current, AQ.current), CQ.current && AQ.current <= 0 && KQ(), clearInterval(uQ.current), AQ.current > 0 && (uQ.current = setInterval((() => {
              AQ.current = Math.max(AQ.current - 1, 0), UQ(), AQ.current <= 0 && (clearInterval(uQ.current), uQ.current = null, bQ.e.get("autoRespawn") && KQ())
            }), 1e3)))
          },
          KQ = () => {
            if (Date.now() - fQ.current > 1e3) {
              const QQ = () => {
                IQ.gameBridge.send("respawn", null), fQ.current = Date.now()
              };
              bQ.e.get("autoRespawn") ? QQ() : (0, eX.Z)((() => {
                QQ()
              }), "video_respawn")
            }
          },
          mQ = (0, qQ.useMemo)((() => {
            var QQ;
            return null === (QQ = (0, NX.j)(iQ)) || void 0 === QQ ? void 0 : QQ.otherGameLinksOnRespawnPage
          }), [iQ]),
          MQ = 0 === AQ.current,
          QW = (null === VQ || void 0 === VQ ? void 0 : VQ.deathCount) === LQ.current ? VQ.text : null,
          WW = JQ && BQ && !sQ,
          XW = PQ && ZQ && null !== (QQ = null === (WQ = (0, oQ.f)()) || void 0 === WQ ? void 0 : WQ.getBoundButton("menuConfirm")) && void 0 !== QQ ? QQ : null,
          wW = QQ => MQ ? QQ : TQ("respawnPage:actionInSeconds", {
            action: QQ,
            seconds: AQ.current
          });
        return (0, gQ.jsx)(kX.c, {
          showing: JQ,
          globallyUniqueKey: "RespawnComponent",
          alwaysMountChildren: !0,
          children: (0, gQ.jsx)(nX.c, {
            show: JQ,
            "data-holds-camera-keeper": "",
            children: (0, gQ.jsxs)(fX.b, {
              close: () => {
                rQ(!1)
              },
              togglePointerLock: !1,
              closeOnPressBackground: !1,
              className: "RespawnBackgroundScreen",
              padLayerKind: CQ.current || sQ ? null : "death",
              padBackCloses: !1,
              cameraKeeper: !0,
              children: [(0, OX.is99NightsCrazyGamesBundle)() && (0, gQ.jsx)(oX.e, {
                onClick: YX.f,
                children: TQ("homePage:backToGames")
              }), (0, gQ.jsxs)("div", {
                className: "RespawnContainer",
                onClick: NQ,
                children: [(0, gQ.jsxs)("div", {
                  className: "RespawnTop",
                  children: [(0, gQ.jsx)("div", {
                    ref: nQ,
                    className: "RespawnSideSquareBannerDiv",
                    children: XQ[0] > 925 && (0, gQ.jsx)(tX.e, {
                      info: {
                        adType: "square",
                        adId: 1,
                        adAlias: "banner_respawn_1"
                      },
                      sizeInfo: {
                        parentRef: nQ
                      },
                      showing: WW,
                      horizontalAlign: "start",
                      extraContrastBackgroundBox: "left",
                      noFillShowBloxdAdProbability: 0
                    })
                  }), (0, gQ.jsx)("div", {
                    className: "RespawnMainContent",
                    children: (0, gQ.jsxs)("div", {
                      className: zQ()("RespawnMainContentInner", {
                        RespawnMainContentInnerPad: PQ
                      }),
                      children: [CQ.current && (0, gQ.jsxs)("div", {
                        className: "AutoRespawnDeathInfo",
                        children: [(0, gQ.jsxs)("div", {
                          className: "AutoRespawnDeathTitle FullyFancyText",
                          children: [(0, gQ.jsx)(kQ.d, {
                            name: "skull",
                            className: "AutoRespawnDeathIcon"
                          }), TQ("respawnPage:youDied")]
                        }), (0, gQ.jsxs)("div", {
                          className: "AutoRespawnDeathCause FullyFancyText",
                          children: [null === XW && (RQ.current ? TQ("respawnPage:pressAnywhereToContinue") : MQ ? TQ("respawnPage:respawning") : wW(TQ("general:respawn"))), null !== XW && (0, gQ.jsx)(MX.b, {
                            text: TQ("controller:screensPressToContinue", {
                              button: MX.c
                            }),
                            glyph: XW,
                            className: "AutoRespawnContinueGlyph"
                          })]
                        }), QW && (0, gQ.jsx)("div", {
                          className: "AutoRespawnStatus",
                          children: QW
                        })]
                      }), !CQ.current && (0, gQ.jsxs)(gQ.Fragment, {
                        children: [(0, gQ.jsxs)("div", {
                          className: zQ()("RespawnPageButtons", {
                            RespawnPageButtonsVertical: !mQ
                          }),
                          children: [aQ && (0, gQ.jsx)(oX.s, {
                            className: "RespawnPageButton",
                            padDefaultFocus: !0,
                            onClick: () => {
                              (0, eX.Z)((() => {
                                (0, HQ.m)("inGameReplay");
                                const QQ = (0, SX.c)(iQ);
                                wQ(QQ)
                              }), "video_start")
                            },
                            disabled: !MQ || !SQ,
                            touchPressOn: "pointerup",
                            children: wW(TQ("respawnPage:playAgain"))
                          }), hQ && (0, gQ.jsx)(oX.h, {
                            className: "RespawnPageButton",
                            onClick: KQ,
                            padDefaultFocus: !aQ,
                            padBack: "sessionBasedGame:stayInLobby" === vQ,
                            disabled: !MQ || !SQ,
                            touchPressOn: "pointerup",
                            children: wW(TQ(vQ))
                          }), !(0, OX.is99NightsCrazyGamesBundle)() && (0, gQ.jsx)(oX.P, {
                            className: "RespawnPageButton",
                            onClick: YX.f,
                            disabled: !MQ || !SQ,
                            touchPressOn: "pointerup",
                            children: wW(TQ("respawnPage:exitGame"))
                          })]
                        }), mQ && (0, gQ.jsxs)("div", {
                          className: "RespawnPageOtherGames",
                          children: [(0, gQ.jsx)("div", {
                            className: "RespawnPanelSectionTitle",
                            children: TQ("respawnPage:orTry")
                          }), (0, gQ.jsx)("div", {
                            className: "RespawnPageOtherGameThumbnails",
                            children: mQ.map((QQ => (0, gQ.jsx)(ZX.d, {
                              source: {
                                type: "game",
                                gameNameWithVariation: QQ
                              },
                              disabled: !MQ || !SQ,
                              gameWidth: "13rem",
                              hideDescription: !0,
                              hideFavourites: !0,
                              hideCcu: !0,
                              onClick: () => {
                                (0, HQ.m)("inGameReplay");
                                const WQ = (0, SX.c)(QQ);
                                wQ(WQ)
                              }
                            }, QQ)))
                          })]
                        })]
                      })]
                    })
                  }), (0, gQ.jsx)("div", {
                    ref: xQ,
                    className: "RespawnSideSquareBannerDiv"
                  })]
                }), (0, gQ.jsx)("div", {
                  ref: eQ,
                  className: "RespawnBottom",
                  children: (0, gQ.jsx)(tX.e, {
                    info: {
                      adType: "leaderboard",
                      adId: 1,
                      adAlias: "banner_respawn_2"
                    },
                    sizeInfo: {
                      parentRef: eQ
                    },
                    showing: WW,
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
    var ww = XQ(36912);
    const qw = [{
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
      Tw = [{
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
      zw = {
        duration: 300,
        easing: "ease-out",
        fill: "forwards"
      },
      sw = {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
      },
      Fw = (0, qQ.memo)((function() {
        const QQ = (0, qQ.useRef)(null),
          WQ = (0, qQ.useRef)(null);

        function XQ(XQ) {
          var wQ;
          let {
            fW: qQ,
            screenPos: TQ
          } = XQ;
          const zQ = QQ.current;
          null === (wQ = WQ.current) || void 0 === wQ || wQ.cancel(), zQ.classList.remove("HitmarkerCrit"), TQ ? (zQ.style.left = `${TQ.x}%`, zQ.style.top = `${TQ.y}%`) : (zQ.style.left = "50%", zQ.style.top = "50%"), zQ.style.rotate = 16 * (Math.random() - .5) + "deg", qQ && zQ.classList.add("HitmarkerCrit");
          const sQ = zQ.animate(qQ ? Tw : qw, qQ ? sw : zw);
          WQ.current = sQ, sQ.onfinish = () => {
            zQ.classList.remove("HitmarkerCrit")
          }
        }
        return (0, FQ.f)("localGunHitmarker", (QQ => {
          let {
            fW: WQ
          } = QQ;
          XQ({
            fW: WQ
          })
        })), (0, FQ.f)("yourAttackHit", (QQ => {
          let {
            fW: WQ,
            screenPos: wQ
          } = QQ;
          XQ({
            fW: WQ,
            screenPos: HQ.b.get("isTouchScreen") ? wQ : void 0
          })
        })), (0, FQ.f)("sendHitmarker", (QQ => {
          let {
            fW: WQ,
            screenPos: wQ
          } = QQ;
          XQ({
            fW: WQ,
            screenPos: wQ
          })
        })), (0, gQ.jsxs)("div", {
          ref: QQ,
          className: "Hitmarker",
          children: [(0, gQ.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, gQ.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, gQ.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, gQ.jsx)("div", {
            className: "HitmarkerBar"
          })]
        })
      }));

    function Pw() {
      const QQ = (0, qQ.useRef)(!0);
      return (0, FQ.f)("localBlockMined", (() => {
        TW.e.play("blockMined")
      })), (0, FQ.f)("yourAttackHit", (() => {
        TW.e.play("hitLanded")
      })), (0, FQ.f)("localGunHitmarker", (() => {
        TW.e.play("hitLanded")
      })), (0, FQ.f)("damagedByOtherPlayer", (() => {
        TW.e.play("damageTaken")
      })), (0, dQ.b)("localPlayerAliveSet", (WQ => {
        !WQ && QQ.current && TW.e.play("death"), QQ.current = WQ
      })), null
    }
    var gw = XQ(1988),
      Jw = XQ(36932),
      rw = XQ.n(Jw),
      Iw = XQ(2098),
      jw = XQ(2086),
      Bw = XQ(3555),
      yw = XQ(34529);
    const Vw = KX.ae ? 7e7 : 7e3,
      Dw = rw()("#ffffff").alpha(.5).string();

    function pw(QQ) {
      const WQ = (0, Bw.c)(QQ);
      return void 0 !== WQ && "Gun" === (0, yw.itemTypeOf)(WQ)
    }

    function Gw(QQ) {
      if (!QQ) return console.error(`Killfeed colour was ${QQ}`), Dw;
      try {
        return rw()(QQ).alpha(.5).string()
      } catch {
        return console.warn(`Killfeed colour ${QQ} is not a colour`), Dw
      }
    }
    const Uw = (0, qQ.memo)((function() {
      const {
        t: QQ
      } = (0, cQ.C)(), WQ = (0, qQ.useRef)([]), XQ = (0, cX.d)();
      return (0, dQ.b)("kill", (function(wQ) {
        var qQ, TQ;
        let {
          killer: zQ,
          victim: sQ,
          withItem: FQ,
          killstreak: PQ
        } = wQ;
        const gQ = WQ.current;
        if (gQ.length >= 3) {
          const QQ = gQ.shift();
          clearTimeout(QQ.timeout)
        }
        const JQ = IQ.gameBridge.latest("hiddenPlayerNames"),
          rQ = {
            deadName: mX(sQ, QQ),
            killerName: mX(zQ, QQ),
            isFriend: {
              killer: (0, Iw.g)(zQ.realName, JQ),
              dead: (0, Iw.g)(sQ.realName, JQ)
            },
            withItem: FQ,
            wasHeadshot: !1,
            killstreak: PQ,
            timeout: setTimeout((() => {
              gQ.shift(), XQ()
            }), Vw),
            reactId: `${null!==(qQ=zQ.id)&&void 0!==qQ?qQ:zQ.shownName}|${null!==(TQ=sQ.id)&&void 0!==TQ?TQ:sQ.shownName}|${Date.now()}`,
            killerBackground: Gw(zQ.colour),
            deadBackground: Gw(sQ.colour)
          };
        gQ.push(rQ), XQ()
      })), (0, qQ.useEffect)((() => {
        const QQ = WQ.current;
        return () => {
          for (; QQ.length > 0;) {
            const {
              timeout: WQ
            } = QQ.pop();
            clearTimeout(WQ)
          }
        }
      }), []), (0, gQ.jsx)("div", {
        className: "Killfeed",
        children: WQ.current.map((QQ => {
          let {
            deadName: WQ,
            killerName: XQ,
            withItem: wQ,
            wasHeadshot: qQ,
            killstreak: TQ,
            killerBackground: zQ,
            deadBackground: sQ,
            reactId: FQ,
            isFriend: PQ
          } = QQ;
          return (0, gQ.jsxs)("div", {
            className: "IndividualKillWrapper SmallTextLight",
            style: {
              background: `linear-gradient(90deg, ${zQ} calc(100% - 10rem), ${sQ} 100%)`
            },
            children: [TQ >= 2 ? (0, gQ.jsx)("div", {
              className: "KillfeedKillstreak",
              children: (0, KX.Q)(TQ)
            }) : null, (0, gQ.jsx)("div", {
              className: "KillfeedKillerName",
              children: XQ
            }), PQ.killer && (0, gQ.jsx)(jw.d, {}), (0, gQ.jsx)("div", {
              className: "KillfeedItem",
              style: {
                height: "5vmin",
                width: pw(wQ) ? "7.5vmin" : "5vmin"
              },
              children: (0, gQ.jsx)(gw.d, {
                itemName: wQ,
                amount: 0,
                gunTransform: "scaleX(-1)",
                itemMarginTop: 0
              })
            }), qQ ? (0, gQ.jsx)(kQ.d, {
              name: "crosshairs",
              className: "3x KillfeedHeadshotIcon"
            }) : null, (0, gQ.jsx)("div", {
              className: "KillfeedDeadName",
              children: WQ
            }), PQ.dead && (0, gQ.jsx)(jw.d, {})]
          }, FQ)
        }))
      })
    }));
    var bw = XQ(36980),
      vw = XQ(1174),
      dw = XQ.n(vw),
      Hw = XQ(3673),
      aw = XQ(36982),
      lw = XQ(1345);
    const hw = {},
      iw = (0, qQ.memo)((function() {
        const QQ = (0, qQ.useRef)({}),
          [, WQ] = (0, qQ.useReducer)((QQ => QQ + 1), 0);
        (0, FQ.f)("setDirectionArrow", (XQ => {
          let {
            id: wQ,
            position: qQ,
            style: TQ,
            text: zQ,
            AW: sQ
          } = XQ;
          const FQ = QQ.current,
            PQ = TQ || hw,
            gQ = zQ,
            JQ = FQ[wQ];
          if (!JQ) return FQ[wQ] = {
            position: qQ,
            style: PQ,
            text: gQ,
            shouldShowDistance: sQ,
            uL: null,
            chevronElement: null,
            distanceElement: null,
            lastRenderedDist: -1,
            lastDistUpdateTime: 0,
            lastScreenX: NaN,
            lastScreenY: NaN,
            onScreen: void 0
          }, void WQ();
          const rQ = !dw()(JQ.style, PQ) || !dw()(JQ.text, gQ) || JQ.shouldShowDistance !== sQ;
          JQ.position = qQ, JQ.style = PQ, JQ.text = gQ, JQ.shouldShowDistance = sQ, rQ && WQ()
        })), (0, FQ.f)("clearDirectionArrow", (XQ => {
          let {
            id: wQ
          } = XQ;
          const qQ = QQ.current;
          if (null === wQ)
            for (const QQ in qQ) delete qQ[QQ];
          else delete qQ[wQ];
          WQ()
        })), (0, qQ.useEffect)((() => {
          const WQ = QQ.current,
            XQ = (0, lw.r)((() => {
              ! function(QQ) {
                const WQ = IQ.gameBridge.lookup("localPos", null),
                  XQ = Hw.b - Aw,
                  wQ = (0, Hw.k)() - Aw;
                for (const qQ in QQ) {
                  const TQ = QQ[qQ];
                  if (!TQ.uL) continue;
                  const zQ = IQ.gameBridge.lookup("screenPos", TQ.position),
                    sQ = zQ.x - 50,
                    FQ = zQ.y - 50;
                  zQ.x === TQ.lastScreenX && zQ.y === TQ.lastScreenY || (TQ.lastScreenX = zQ.x, TQ.lastScreenY = zQ.y, TQ.uL.style.translate = `${zQ.x}vw ${zQ.y}vh`, TQ.chevronElement && (TQ.chevronElement.style.rotate = `${KX.b.fastATan2(FQ,sQ)}rad`));
                  const PQ = Math.abs(sQ) < XQ && Math.abs(FQ) < wQ;
                  if (PQ !== TQ.onScreen && (TQ.onScreen = PQ, TQ.uL.classList.toggle("DirectionArrowOnScreen", PQ)), TQ.shouldShowDistance && TQ.distanceElement) {
                    const QQ = TQ.position[0] - WQ[0],
                      XQ = TQ.position[1] - WQ[1],
                      wQ = TQ.position[2] - WQ[2],
                      qQ = Math.round(Math.sqrt(QQ * QQ + XQ * XQ + wQ * wQ));
                    (-1 === TQ.lastRenderedDist || (0, aw.e)(qQ, TQ.lastRenderedDist, TQ.lastDistUpdateTime)) && (TQ.distanceElement.textContent = `${qQ}m`, TQ.lastRenderedDist = qQ, TQ.lastDistUpdateTime = Date.now() + Math.floor(100 * Math.random()))
                  }
                }
              }(WQ)
            }));
          return () => {
            XQ();
            for (const QQ in WQ) delete WQ[QQ]
          }
        }), []);
        const XQ = QQ.current;
        return (0, gQ.jsx)("div", {
          className: "DirectionArrows",
          children: Object.entries(XQ).map((QQ => {
            var WQ;
            let [wQ, qQ] = QQ;
            const TQ = null !== (WQ = (0, pQ.ac)(qQ.style)) && void 0 !== WQ ? WQ : "#ffffff";
            return (0, gQ.jsxs)("div", {
              ref: QQ => {
                XQ[wQ] && (XQ[wQ].uL = QQ)
              },
              className: "DirectionArrow",
              style: {
                fontSize: qQ.style.fontSize,
                opacity: qQ.style.opacity
              },
              children: [(0, gQ.jsxs)("div", {
                className: "DirectionArrowChevron",
                ref: QQ => {
                  XQ[wQ] && (XQ[wQ].chevronElement = QQ)
                },
                children: [(0, gQ.jsxs)("div", {
                  className: "DirectionArrowShadowLayer",
                  children: [(0, gQ.jsx)("div", {
                    className: "DirectionArrowBar"
                  }), (0, gQ.jsx)("div", {
                    className: "DirectionArrowBar"
                  })]
                }), (0, gQ.jsxs)("div", {
                  className: "DirectionArrowBarLayer",
                  children: [(0, gQ.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: TQ
                    }
                  }), (0, gQ.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: TQ
                    }
                  })]
                })]
              }), (0, gQ.jsx)("div", {
                className: "DirectionArrowMarker",
                style: {
                  background: TQ,
                  boxShadow: `0 0 3px rgba(0, 0, 0, 0.8), 0 0 8px ${TQ}`
                }
              }), qQ.text && (0, gQ.jsx)("div", {
                className: "DirectionArrowLabel SmallTextLight",
                style: {
                  color: TQ,
                  fontWeight: qQ.style.fontWeight,
                  fontStyle: qQ.style.fontStyle
                },
                children: (0, gQ.jsx)(PQ.e, {
                  text: qQ.text
                })
              }), qQ.shouldShowDistance && (0, gQ.jsx)("div", {
                className: "DirectionArrowDistance SmallTextLight",
                ref: QQ => {
                  XQ[wQ] && (XQ[wQ].distanceElement = QQ)
                },
                style: {
                  color: TQ,
                  fontWeight: qQ.style.fontWeight,
                  fontStyle: qQ.style.fontStyle
                }
              })]
            }, wQ)
          }))
        })
      })),
      Aw = .5;
    const Rw = (0, qQ.memo)((function(QQ) {
        let {
          isTouchScreen: WQ
        } = QQ;
        return (0, gQ.jsxs)("div", {
          className: "BottomRightElements",
          "data-camera-keeper-host": "",
          children: [(0, gQ.jsx)(Lw, {}), WQ && (0, gQ.jsx)(BX, {})]
        })
      })),
      Ew = {
        readyForNext: 0,
        running: 1
      },
      Cw = 50;

    function uw(QQ) {
      console.assert(QQ.state.current === Ew.readyForNext);
      const WQ = QQ.queue.current,
        XQ = QQ.foreground.current;
      if (WQ.length > 0 && XQ) {
        const {
          toFraction: wQ,
          toDuration: qQ
        } = WQ.shift();
        QQ.state.current = Ew.running, XQ.style.transition = `transform ${Math.max(qQ-Cw,0)}ms linear`, XQ.classList.remove("Complete"), QQ.timeout.current = setTimeout((() => {
          XQ.style.transform = `scaleX(${wQ})`, QQ.timeout.current = setTimeout((() => {
            1 === wQ && XQ.classList.add("Complete"), QQ.state.current = Ew.readyForNext, uw(QQ)
          }), Math.max(qQ - Cw, 0))
        }), Cw)
      }
    }

    function Lw() {
      const QQ = (0, qQ.useRef)([]),
        WQ = (0, qQ.useRef)(Ew.readyForNext),
        XQ = (0, qQ.useRef)(void 0),
        wQ = (0, qQ.useRef)(null),
        TQ = (0, qQ.useRef)({
          queue: QQ,
          state: WQ,
          timeout: XQ,
          foreground: wQ
        }),
        zQ = (0, GQ.g)("showProgressBar");
      if ((0, qQ.useLayoutEffect)((() => (zQ && WQ.current === Ew.readyForNext && uw(TQ.current), () => {
          WQ.current = Ew.readyForNext, clearTimeout(XQ.current), zQ && (QQ.current.length = 0)
        })), [zQ]), (0, FQ.f)("progressBarUpdate", (XQ => {
          let {
            toFraction: wQ,
            toDuration: qQ
          } = XQ;
          QQ.current.push({
            toFraction: wQ,
            toDuration: qQ
          }), WQ.current === Ew.readyForNext && uw(TQ.current)
        })), !zQ) return null;
      return (0, gQ.jsx)("div", {
        className: "ProgressBarBackground",
        children: (0, gQ.jsx)("div", {
          className: "ProgressBarForeground",
          ref: wQ,
          style: {
            width: "15vw",
            transformOrigin: "left center",
            transform: "scaleX(0)"
          }
        })
      })
    }
    var kw = XQ(36987),
      fw = XQ(2565);
    const Sw = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function tw(QQ) {
      let {
        classes: WQ,
        gone: XQ
      } = QQ;
      const wQ = document.documentElement;
      wQ.classList.remove(...WQ);
      for (const qQ of XQ) qQ.style.display = "block";
      return () => {
        wQ.classList.add(...WQ);
        for (const QQ of XQ) QQ.style.display = ""
      }
    }

    function ow(QQ) {
      const {
        isTouchScreen: WQ
      } = (0, HQ.n)(["isTouchScreen"]);
      (0, qQ.useLayoutEffect)((() => {
        if (!WQ) return;
        const XQ = QQ.current,
          wQ = document.querySelector(`.${kw.i}`),
          qQ = QQ => {
            const WQ = () => {
              const WQ = QQ.querySelector(fw.h),
                wQ = function(QQ) {
                  const WQ = document.documentElement;
                  return {
                    classes: BW.E.map(pW.y).filter((QQ => WQ.classList.contains(QQ))),
                    gone: [...QQ.querySelectorAll(`.TopRightTrayToggle.${fw.j}`)]
                  }
                }(QQ);
              WQ && function(QQ, WQ) {
                (0, fw.y)(QQ, WQ.classes.length > 0 || WQ.gone.length > 0, (() => tw(WQ)))
              }(WQ, wQ);
              const qQ = `${Math.floor(function(QQ,WQ,XQ){const wQ=document.documentElement,qQ=wQ.classList.contains((0,pW.A)("menu")),TQ=wQ.style.getPropertyValue((0,pW.F)("menu"));if(!qQ&&""===TQ)return QQ.getBoundingClientRect().left;const zQ=WQ?(0,fw.n)(WQ):()=>{},sQ=tw(XQ);wQ.classList.remove((0,pW.A)("menu")),wQ.style.removeProperty((0,pW.F)("menu"));const FQ=QQ.getBoundingClientRect().left;return sQ(),zQ(),qQ&&wQ.classList.add((0,pW.A)("menu")),""!==TQ&&wQ.style.setProperty((0,pW.F)("menu"),TQ),FQ}(QQ,WQ,wQ)-XQ.getBoundingClientRect().left-4)}px`;
              XQ.style.getPropertyValue("--InGameHeaderMaxWidth") !== qQ && XQ.style.setProperty("--InGameHeaderMaxWidth", qQ)
            };
            WQ();
            const qQ = new ResizeObserver(WQ);
            qQ.observe(QQ), qQ.observe(wQ), window.addEventListener("resize", WQ);
            const TQ = () => Sw.map((QQ => document.documentElement.style.getPropertyValue(QQ))).join();
            let zQ = TQ();
            const sQ = new MutationObserver((() => {
              const QQ = TQ();
              QQ !== zQ && (zQ = QQ, WQ())
            }));
            sQ.observe(document.documentElement, {
              attributes: !0,
              attributeFilter: ["style"]
            });
            const FQ = (0, UQ.o)(pW.h, WQ),
              PQ = new MutationObserver(WQ);
            return PQ.observe(QQ, {
              childList: !0,
              subtree: !0
            }), () => {
              qQ.disconnect(), sQ.disconnect(), PQ.disconnect(), FQ(), window.removeEventListener("resize", WQ);
              const XQ = QQ.querySelector(fw.h);
              XQ && (0, fw.n)(XQ)
            }
          },
          TQ = () => wQ.querySelector(".TopRightIconsContainer"),
          zQ = TQ();
        let sQ;
        if (zQ) sQ = qQ(zQ);
        else {
          const QQ = new MutationObserver((() => {
            const WQ = TQ();
            WQ && (QQ.disconnect(), sQ = qQ(WQ))
          }));
          QQ.observe(wQ, {
            childList: !0,
            subtree: !0
          }), sQ = () => {
            QQ.disconnect()
          }
        }
        return () => {
          sQ(), XQ.style.removeProperty("--InGameHeaderMaxWidth")
        }
      }), [WQ, QQ])
    }
    var ew = XQ(3900),
      nw = XQ(3892),
      xw = XQ(1698),
      Yw = XQ(1548),
      Nw = XQ(1707),
      Zw = XQ(1802),
      Ow = XQ(1927),
      Kw = XQ(1165),
      mw = XQ(4574),
      Mw = XQ(1407);
    const Qq = 2e4,
      Wq = 6e5,
      Xq = new Set;

    function wq() {
      const {
        gameEntrySource: QQ,
        loadingOverlayVisible: WQ
      } = (0, HQ.n)(["gameEntrySource", "loadingOverlayVisible"]), XQ = (0, dQ.d)("connectedGame", (QQ => (0, mw.i)(QQ) ? QQ.lobbyName : null)), wQ = (0, dQ.e)("localPlayerAlive"), TQ = (0, dQ.d)("players", (QQ => null !== QQ.localId && void 0 !== QQ.byId[QQ.localId])), [zQ, sQ] = (0, qQ.useState)(null);
      return !WQ && wQ && TQ && null !== XQ && zQ !== XQ && sQ(XQ), (0, qQ.useEffect)((() => {
        if (!(0, mw.l)(QQ) || null === zQ || zQ !== XQ || Xq.has(zQ)) return;
        const WQ = setTimeout((() => {
          Xq.add(zQ), async function(QQ) {
            const WQ = await Kw.userContextManager.getCurrentUserContext();
            let XQ;
            try {
              XQ = (await Yw.e.getWorldOwnerFriendOffer(WQ)).owner
            } catch (qQ) {
              return void console.warn("Couldn't ask who owns this world", qQ)
            }
            if (!XQ || (0, mw.q)(XQ.name, Date.now())) return;
            const wQ = XQ;
            ! function(QQ, WQ) {
              const XQ = Date.now() + Wq;
              let wQ = Date.now(),
                qQ = 0;
              const TQ = () => {
                const zQ = Date.now(),
                  sQ = IQ.gameBridge.latest("connectedGame");
                sQ.lobbyName !== QQ || zQ > XQ || (null === sQ.websocketUrl ? wQ = 1 / 0 : wQ === 1 / 0 && !HQ.b.get("loadingOverlayVisible") && IQ.gameBridge.latest("localPlayerAlive") && (wQ = zQ + Qq), qQ = zQ < wQ || !IQ.gameBridge.latest("localPlayerAlive") || HQ.b.get("isUiHidden") || HQ.b.get("isUiHiddenByCamera") || (0, Zw.isTypingInInput)() || HQ.b.get("loadingOverlayVisible") || (0, xw.r)() || (0, ew.f)() || (0, Mw.h)() ? 0 : qQ + 1, qQ >= 2 ? WQ() : setTimeout(TQ, 500))
              };
              TQ()
            }(QQ, (() => {
              (0, mw.h)(Nw.d.getSocialState().friends, wQ.name) || ((0, mw.p)(wQ.name, Date.now()), Ow.g.showWorldOwnerOffer(wQ), (0, qX.reportAnalyticsClick)({
                id: "social.world_owner_offer",
                value: "shown"
              }))
            }))
          }(zQ).catch((QQ => {
            console.error("Failed to offer the world's owner as a friend", QQ)
          }))
        }), Qq);
        return () => {
          clearTimeout(WQ)
        }
      }), [QQ, zQ, XQ]), null
    }
    var qq = XQ(1980);
    const Tq = (0, qQ.memo)((function(QQ) {
        let {
          durationMs: WQ,
          endsAtMs: XQ
        } = QQ;
        const [, wQ] = (0, qQ.useReducer)((QQ => QQ + 1), 0), TQ = null === XQ ? WQ : Math.max(XQ - Date.now(), 0);
        return (0, qQ.useEffect)((() => {
          if (null === XQ || TQ <= 0) return;
          const QQ = setTimeout(wQ, TQ - 1e3 * (Math.ceil(TQ / 1e3) - 1));
          return () => {
            clearTimeout(QQ)
          }
        })), (0, gQ.jsx)("div", {
          className: "EffectInfoDuration SmallTextLight",
          children: (0, KX.eb)(TQ)
        })
      })),
      zq = (0, qQ.memo)((function() {
        const QQ = (0, dQ.e)("localEffects");
        return (0, gQ.jsx)("div", {
          className: "EffectInfosWrapper",
          children: Object.entries(QQ).map((QQ => {
            let [WQ, {
              icon: XQ,
              displayName: wQ,
              durationMs: qQ,
              endsAtMs: TQ,
              level: zQ
            }] = QQ;
            return (0, gQ.jsxs)("div", {
              className: "EffectInfo",
              children: [(0, gQ.jsx)(qq.e, {
                icon: XQ,
                className: "EffectInfoIcon"
              }), (0, gQ.jsxs)("div", {
                className: "EffectInfoRightSide",
                style: {
                  marginTop: null !== qQ ? "0" : "1rem"
                },
                children: [(0, gQ.jsxs)("div", {
                  className: "EffectInfoNameWrapper",
                  children: [(0, gQ.jsx)(PQ.e, {
                    text: null !== wQ && void 0 !== wQ ? wQ : WQ,
                    className: "EffectInfoName SmallTextBold"
                  }), zQ > 1 && (0, gQ.jsx)("div", {
                    className: "EffectInfoName SmallTextBold",
                    children: (0, KX.Q)(zQ)
                  })]
                }), null !== qQ && (0, gQ.jsx)(Tq, {
                  durationMs: qQ,
                  endsAtMs: TQ
                })]
              })]
            }, WQ)
          }))
        })
      }));
    var sq = XQ(36995),
      Fq = XQ(37186),
      Pq = XQ(231),
      gq = XQ(2991),
      Jq = XQ(3173);

    function rq(QQ, WQ) {
      (0, qQ.useLayoutEffect)((() => {
        let WQ, XQ;
        const wQ = requestAnimationFrame((() => {
          XQ = setTimeout((() => {
            XQ = void 0;
            const wQ = QQ();
            WQ = "function" === typeof wQ ? wQ : void 0
          }), 0)
        }));
        return () => {
          var QQ;
          cancelAnimationFrame(wQ), clearTimeout(XQ), null === (QQ = WQ) || void 0 === QQ || QQ()
        }
      }), WQ)
    }
    const Iq = [5, 5, 5],
      jq = [7, 4, 4, 4];

    function Bq(QQ) {
      return QQ.reduce(((QQ, WQ) => QQ + WQ), 0)
    }

    function yq(QQ, WQ, XQ, wQ, qQ) {
      const TQ = QQ.getContext("2d");
      if (!TQ) return null;
      const zQ = WQ.color,
        sQ = `${WQ.fontWeight} ${qQ}px ${WQ.fontFamily}`,
        FQ = () => {
          QQ.width = XQ, QQ.height = wQ, TQ.fillStyle = zQ, TQ.textAlign = "center", TQ.textBaseline = "middle", TQ.font = sQ
        };
      return FQ(), {
        ctx: TQ,
        reset: FQ
      }
    }
    const Vq = (0, qQ.memo)((function(QQ) {
      let {
        show: WQ
      } = QQ;
      const XQ = (0, qQ.useRef)(null),
        wQ = (0, qQ.useRef)(null),
        TQ = (0, qQ.useRef)(null),
        zQ = (0, BQ.k)();
      return (0, qQ.useEffect)((() => zQ.whenShown((() => {
        let QQ = 0,
          WQ = 0,
          XQ = performance.now(),
          qQ = 0;
        const zQ = (0, lw.r)((() => {
          var zQ, sQ, FQ;
          QQ++, WQ++;
          const PQ = performance.now();
          if (PQ - XQ < 1e3) return;
          const gQ = Math.round(QQ / (PQ - XQ) * 1e3);
          if (wQ.current = gQ, null === (zQ = TQ.current) || void 0 === zQ || zQ.call(TQ, gQ), QQ = 0, XQ = PQ, gQ >= 55) return void(qQ = 0);
          if (qQ += 1, qQ < 15) return;
          const JQ = null !== (sQ = vQ.i.getItem("decreaseLoadDistPromptDeniedCount")) && void 0 !== sQ ? sQ : 0,
            [rQ, jQ] = bQ.e.get("minChunkAddDist");
          if (function(QQ, WQ) {
              const XQ = IQ.gameBridge.lookup("qD", null);
              return null !== XQ && (XQ.horizontal > QQ || XQ.vertical > WQ)
            }(rQ, jQ) && (null !== (FQ = vQ.i.getItem("lastDecreaseLoadDistPromptTime")) && void 0 !== FQ ? FQ : 0) + 432e5 < Date.now() && JQ < 3) {
            vQ.i.setItem("lastDecreaseLoadDistPromptTime", Date.now());
            zX.NotificationProvider.showPromptPopup({
              title: "Lag (low FPS) caused by high chunk load distance. Decrease it?",
              confirmText: "general:yes",
              cancelText: "general:no",
              unlockPointerKey: "chunkLoadDistanceLagPopup"
            }).getResult().then((QQ => {
              "notificationTornDown" !== QQ && (QQ ? (IQ.gameBridge.send("setChunkAddDistance", {
                horizontal: rQ,
                vertical: jQ
              }), vQ.i.setItem("chunkHorizAddDist", rQ), vQ.i.setItem("chunkVertAddDist", jQ), UQ.k.mB("updatedChunkLoadDist"), vQ.i.setItem("decreaseLoadDistPromptDeniedCount", 0)) : vQ.i.setItem("decreaseLoadDistPromptDeniedCount", JQ + 1))
            }))
          }
        }));
        let sQ = performance.now();
        WQ = 0;
        let FQ = null,
          PQ = !document.hidden,
          gQ = !1;

        function JQ() {
          const QQ = performance.now() - sQ,
            XQ = 1e3 * WQ / QQ;
          PQ && !gQ && (null === FQ && (FQ = XQ), gq.b.setFps(XQ, FQ)), WQ = 0, sQ = performance.now()
        }
        let rQ = setInterval(JQ, Jq.c);

        function jQ() {
          WQ = 0, sQ = performance.now(), clearInterval(rQ), rQ = setInterval(JQ, Jq.c)
        }

        function BQ() {
          const QQ = PQ;
          PQ = !document.hidden, !QQ && PQ && jQ()
        }
        document.addEventListener("visibilitychange", BQ);
        const yQ = (0, UQ.o)(xX.n, (QQ => {
          const WQ = gQ;
          gQ = (0, xX.o)(QQ), WQ && !gQ && jQ()
        }));
        return () => {
          zQ(), document.removeEventListener("visibilitychange", BQ), yQ(), clearInterval(rQ)
        }
      }))), [zQ]), rq((() => {
        var QQ;
        if (!WQ || TQ.current) return;
        const qQ = XQ.current,
          zQ = window.getComputedStyle(qQ.parentElement),
          sQ = null !== (QQ = window.devicePixelRatio) && void 0 !== QQ ? QQ : 1,
          FQ = parseFloat(zQ.fontSize) * sQ,
          PQ = Math.round(3 * FQ),
          gQ = Math.round(FQ),
          JQ = yq(qQ, zQ, PQ, gQ, FQ);
        if (!JQ) return;
        const {
          ctx: rQ,
          reset: IQ
        } = JQ, jQ = QQ => {
          IQ(), rQ.fillText(QQ.toString(), qQ.width / 2, qQ.height / 2)
        };
        TQ.current = jQ, null !== wQ.current && jQ(wQ.current)
      }), [WQ]), (0, gQ.jsxs)("div", {
        className: "FpsWrapperDiv",
        style: {
          display: WQ ? "flex" : "none"
        },
        children: [(0, gQ.jsx)("div", {
          className: "FpsLabel",
          children: "FPS"
        }), (0, gQ.jsx)("canvas", {
          className: "FpsCanvas",
          ref: XQ,
          width: 48,
          height: 16
        })]
      })
    }));

    function Dq(QQ) {
      return Math.sign(QQ) * Math.round(100 * Math.abs(QQ))
    }

    function pq(QQ) {
      let {
        getCoordinates: WQ,
        showChunkCoords: XQ,
        columns: wQ
      } = QQ;
      const TQ = (0, qQ.useRef)(null);
      return rq((() => {
        var QQ;
        const qQ = TQ.current,
          zQ = window.getComputedStyle(qQ.parentElement),
          sQ = null !== (QQ = window.devicePixelRatio) && void 0 !== QQ ? QQ : 1,
          FQ = parseFloat(zQ.fontSize) * sQ,
          PQ = Math.round(FQ * Bq(wQ)),
          gQ = Math.round(FQ),
          JQ = yq(qQ, zQ, PQ, gQ, FQ);
        if (!JQ) return;
        const {
          ctx: rQ,
          reset: jQ
        } = JQ;
        let BQ = !0,
          yQ = 0,
          VQ = 0,
          DQ = 0,
          pQ = 0,
          GQ = 0,
          UQ = 0;
        const bQ = () => {
          BQ = !0
        };
        document.fonts.load(rQ.font).then(bQ, bQ);
        const vQ = () => {
          jQ(), bQ()
        };
        qQ.addEventListener("contextrestored", vQ);
        let dQ = performance.now();
        const HQ = (0, lw.w)((() => {
          var QQ, TQ, zQ, sQ, PQ, gQ;
          const JQ = performance.now();
          JQ - dQ >= 1e3 && (dQ = JQ, jQ(), bQ());
          const [vQ, HQ, aQ] = WQ(), lQ = Dq(vQ), hQ = Dq(HQ), iQ = Dq(aQ);
          let cQ = null;
          if (XQ) {
            const QQ = IQ.gameBridge.lookup("localPos", null);
            cQ = (0, WW.U)(QQ[0], QQ[1], QQ[2])
          }
          const AQ = null !== (QQ = null === (TQ = cQ) || void 0 === TQ ? void 0 : TQ[0]) && void 0 !== QQ ? QQ : 0,
            RQ = null !== (zQ = null === (sQ = cQ) || void 0 === sQ ? void 0 : sQ[1]) && void 0 !== zQ ? zQ : 0,
            EQ = null !== (PQ = null === (gQ = cQ) || void 0 === gQ ? void 0 : gQ[2]) && void 0 !== PQ ? PQ : 0;
          if (!BQ && lQ === yQ && hQ === VQ && iQ === DQ && AQ === pQ && RQ === GQ && EQ === UQ) return;
          BQ = !1, yQ = lQ, VQ = hQ, DQ = iQ, pQ = AQ, GQ = RQ, UQ = EQ;
          const CQ = [(lQ / 100).toFixed(2), (hQ / 100).toFixed(2), (iQ / 100).toFixed(2)];
          cQ && CQ.unshift(`${AQ} ${RQ} ${EQ}`), rQ.clearRect(0, 0, qQ.width, qQ.height);
          const uQ = qQ.height / 2;
          let LQ = 0;
          for (let WQ = 0; WQ < CQ.length; WQ++) {
            const QQ = FQ * wQ[WQ];
            rQ.fillText(CQ[WQ], LQ + QQ / 2, uQ, QQ), LQ += QQ
          }
        }));
        return () => {
          HQ(), qQ.removeEventListener("contextrestored", vQ)
        }
      }), [WQ, XQ, wQ]), (0, gQ.jsx)("div", {
        className: "CoordinateUI",
        children: (0, gQ.jsx)("canvas", {
          ref: TQ,
          className: "CoordinateCanvas",
          width: 16 * Bq(wQ),
          height: 16
        })
      })
    }
    const Gq = (0, qQ.memo)((function() {
        const QQ = (0, qQ.useCallback)((() => {
          const QQ = IQ.gameBridge.lookup("localPos", null);
          return [QQ[0], QQ[1], QQ[2]]
        }), []);
        return (0, gQ.jsx)(pq, {
          getCoordinates: QQ,
          showChunkCoords: !1,
          columns: Iq
        })
      })),
      Uq = (0, qQ.memo)((function() {
        const QQ = (0, qQ.useCallback)((() => {
          const QQ = IQ.gameBridge.lookup("localPos", null),
            WQ = Pq.h.Ij;
          let XQ = QQ[0] % WQ,
            wQ = QQ[1] % WQ,
            qQ = QQ[2] % WQ;
          return XQ < 0 && (XQ += WQ), wQ < 0 && (wQ += WQ), qQ < 0 && (qQ += WQ), [XQ, wQ, qQ]
        }), []);
        return (0, gQ.jsx)(pq, {
          getCoordinates: QQ,
          showChunkCoords: !0,
          columns: jq
        })
      }));
    var bq = XQ(2127),
      vq = XQ(1391),
      dq = XQ(1049),
      Hq = XQ(1257),
      aq = XQ(37047),
      lq = XQ(1514),
      hq = XQ(3424);
    const iq = (0, qQ.memo)((function() {
      const QQ = (0, GQ.g)("maxAuraLevel");
      return 0 === QQ ? null : (0, gQ.jsx)(cq, {
        maxLevel: QQ
      })
    }));

    function cq(QQ) {
      let {
        maxLevel: WQ
      } = QQ;
      const XQ = (0, GQ.g)("auraPerLevel"),
        [wQ, TQ] = (0, qQ.useState)((() => {
          var QQ;
          return null !== (QQ = IQ.gameBridge.latest("aura")) && void 0 !== QQ ? QQ : void 0
        })),
        [zQ, sQ] = (0, qQ.useState)((() => pQ(wQ))),
        [FQ, PQ] = (0, qQ.useReducer)((QQ => QQ + 1), 0),
        JQ = (0, qQ.useRef)(null),
        rQ = (0, qQ.useRef)([]),
        jQ = (0, qQ.useRef)({
          width: 0,
          level: 0
        }),
        BQ = (0, qQ.useRef)(null),
        yQ = (0, qQ.useRef)(null);

      function VQ() {
        if (null !== BQ.current) return;
        if (0 === rQ.current.length) return;
        const {
          width: QQ,
          level: WQ
        } = rQ.current.shift();
        let XQ;
        if (WQ !== jQ.current.level && WQ > jQ.current.level !== QQ > jQ.current.width) {
          const wQ = WQ > jQ.current.level;
          XQ = wQ ? QQ : 100 - QQ, JQ.current.style.transition = "none", JQ.current.style.width = wQ ? "0%" : "100%", JQ.current.offsetWidth
        } else XQ = Math.abs(QQ - jQ.current.width);
        const wQ = 100 * XQ / 20;
        JQ.current.style.transition = `width ${wQ}ms linear`, sQ(QQ), jQ.current = {
          width: QQ,
          level: WQ
        }, rQ.current.length > 0 && (BQ.current = setTimeout((() => {
          BQ.current = null, VQ()
        }), wQ))
      }

      function pQ(QQ) {
        return Math.floor(QQ / XQ) === WQ ? 100 : QQ % XQ / XQ * 100
      }
      return (0, qQ.useEffect)((() => () => {
        clearTimeout(BQ.current), clearTimeout(yQ.current), BQ.current = null, yQ.current = null
      }), []), (0, dQ.b)("aura", (QQ => {
        if (yQ.current && clearTimeout(yQ.current), null === QQ) return clearTimeout(BQ.current), yQ.current = null, BQ.current = null, rQ.current = [], jQ.current = {
          width: 0,
          level: 0
        }, TQ(void 0), void sQ(0);
        yQ.current = setTimeout((() => {
          const WQ = Math.floor(wQ / XQ),
            qQ = Math.floor(QQ / XQ),
            zQ = pQ(QQ);
          QQ > wQ && aq.b.play("exp_collect", .1).rate(1.6 + .5 * Math.random()), qQ > WQ ? (qQ % 5 === 0 && aq.b.play("exp_levelup", .45).rate(.95 + .1 * Math.random()), PQ(), rQ.current.push({
            width: 100,
            level: WQ
          })) : qQ < WQ && rQ.current.push({
            width: 0,
            level: WQ
          }), QQ === wQ && qQ === WQ || rQ.current.push({
            width: zQ,
            level: qQ
          }), TQ(QQ), VQ()
        }), 50)
      })), (0, DQ.h)(), (0, gQ.jsxs)("div", {
        className: "AuraBarWrapper",
        children: [(0, gQ.jsxs)("div", {
          className: "AuraBarLabel SmallTextBold",
          children: [(0, gQ.jsx)(lq.d, {
            showSignal: FQ,
            particleElement: (0, gQ.jsx)("img", {
              src: (0, hq.g)("glint"),
              alt: ""
            })
          }), (0, gQ.jsx)("img", {
            className: "AuraBarLabelImage",
            src: (0, hq.g)("glint"),
            alt: "aura"
          }), (0, gQ.jsx)("div", {
            className: "AuraBarLabelText",
            children: Math.floor((null !== wQ && void 0 !== wQ ? wQ : 0) / XQ)
          })]
        }), (0, gQ.jsx)("div", {
          className: "AuraBar",
          children: (0, gQ.jsx)("div", {
            ref: JQ,
            className: "AuraBarBackground",
            style: {
              width: `${zQ}%`
            }
          })
        })]
      })
    }
    var Aq = XQ(2732);

    function Rq(QQ) {
      QQ.timed && (QQ.endedAnimation = QQ.timed.animation, QQ.timed = null)
    }
    const Eq = (0, qQ.memo)((function() {
      const QQ = (0, qQ.useRef)(null),
        WQ = (0, qQ.useRef)(null),
        XQ = (0, qQ.useRef)({
          timed: null,
          endedAnimation: null
        });
      return (0, FQ.f)("middleScreenBarInitiate", (QQ => {
        var wQ;
        let {
          duration: qQ,
          cq: TQ,
          horizBarRemOffset: zQ
        } = QQ;
        const sQ = XQ.current;
        Rq(sQ);
        const FQ = WQ.current;
        if (!(qQ >= 0) || !FQ) return;
        null === (wQ = sQ.endedAnimation) || void 0 === wQ || wQ.cancel(), sQ.endedAnimation = null;
        const PQ = FQ.animate([{
          transform: "scaleX(0)"
        }, {
          transform: "scaleX(1)"
        }], {
          duration: qQ,
          fill: "forwards"
        });
        sQ.timed = {
          cq: TQ,
          horizBarRemOffset: zQ,
          animation: PQ
        }
      })), (0, FQ.f)("middleScreenBarRemove", (() => {
        Rq(XQ.current)
      })), (0, qQ.useEffect)((() => {
        const wQ = XQ.current;
        let qQ = Number.NaN,
          TQ = Number.NaN,
          zQ = Number.NaN;
        return (0, lw.q)((() => {
          var XQ, sQ, FQ, PQ;
          const gQ = QQ.current,
            JQ = WQ.current;
          if (!gQ || !JQ) return;
          null !== (XQ = wQ.timed) && void 0 !== XQ && XQ.cq && "finished" === wQ.timed.animation.playState && Rq(wQ), null === (sQ = wQ.endedAnimation) || void 0 === sQ || sQ.cancel(), wQ.endedAnimation = null;
          let rQ = wQ.timed ? 1 : 0;
          if (!wQ.timed) {
            const QQ = IQ.gameBridge.lookup("momentumFrac", null);
            rQ = QQ > 0 ? 1 : 0, QQ !== zQ && (zQ = QQ, JQ.style.transform = `scaleX(${QQ})`)
          }
          const jQ = null !== (FQ = null === (PQ = wQ.timed) || void 0 === PQ ? void 0 : PQ.horizBarRemOffset) && void 0 !== FQ ? FQ : 0;
          jQ === qQ && rQ === TQ || (qQ = jQ, TQ = rQ, gQ.style.transform = `translateX(calc(-50% + ${jQ}rem)) scaleX(${rQ})`)
        }))
      }), []), (0, gQ.jsx)("div", {
        className: "MiddleScreenBar",
        ref: QQ,
        children: (0, gQ.jsx)("div", {
          className: "MiddleScreenBarFill",
          ref: WQ
        })
      })
    }));
    var Cq = XQ(4992),
      uq = XQ(2963);

    function Lq() {
      const {
        t: QQ
      } = (0, cQ.C)(), WQ = (0, FQ.j)("serverUpdating", null), XQ = (0, uq.d)(250, null !== WQ);
      return null === WQ || XQ - WQ > 3e4 ? null : (0, gQ.jsxs)("div", {
        className: "UpdateCountdownBanner",
        children: [(0, gQ.jsx)("div", {
          className: "UpdateCountdownBannerTitle",
          children: QQ("updateWaiting:updatingIn", {
            countdown: (0, Cq.p)(WQ - XQ)
          })
        }), (0, gQ.jsx)("div", {
          children: QQ("updateWaiting:bringYouBack")
        })]
      })
    }
    var kq = XQ(37207),
      fq = XQ(2061);
    const Sq = [{
        translationKey: "general:interact"
      }],
      tq = (0, qQ.memo)((function() {
        const QQ = (0, GQ.g)("crosshairText"),
          {
            interactPrompt: WQ,
            blockText: XQ,
            neededTool: wQ
          } = (0, dQ.e)("crosshairTarget"),
          {
            isTouchScreen: TQ
          } = (0, HQ.n)(["isTouchScreen"]),
          zQ = (0, lQ.A)(),
          sQ = (0, iQ.e)("alt-fire");
        (0, qQ.useEffect)((() => {
          IQ.gameBridge.send("setCrosshairInteractPrompt", !TQ || zQ ? "key" : "touch")
        }), [TQ, zQ]);
        const [JQ, rQ] = (0, qQ.useReducer)((QQ => QQ + 1), 0);
        (0, FQ.f)("customBindingsChanged", rQ);
        var jQ;
        if (null !== WQ && (zQ && null !== sQ || !TQ && null !== (0, fq.p)("alt-fire"))) return (0, gQ.jsxs)("div", {
          className: "CrosshairText SmallTextBold InteractPrompt",
          children: [(0, gQ.jsx)(aQ.b, {
            noaAction: "alt-fire"
          }), (0, gQ.jsx)(PQ.e, {
            text: null !== (jQ = WQ.label) && void 0 !== jQ ? jQ : Sq
          })]
        });
        let BQ = null;
        return null !== XQ ? BQ = XQ : null !== QQ && "" !== QQ ? BQ = QQ : null !== wQ && (BQ = [{
          icon: wQ,
          style: {
            opacity: .8
          }
        }, {
          str: " needed",
          style: {
            opacity: .8
          }
        }]), BQ ? (0, gQ.jsx)("div", {
          className: "CrosshairText SmallTextBold",
          children: (0, gQ.jsx)(PQ.e, {
            text: BQ
          })
        }) : null
      }));
    var oq = XQ(2737);
    const eq = (0, qQ.memo)((function() {
      var QQ;
      const {
        interactPrompt: WQ
      } = (0, dQ.e)("crosshairTarget"), {
        openInGameMenuName: XQ,
        openEverythingMenuName: wQ
      } = (0, HQ.n)(["openInGameMenuName", "openEverythingMenuName"]), qQ = (0, FQ.j)("aimingOverlay", "none"), TQ = (0, ZQ.l)(), zQ = (0, oq.e)();
      return null === WQ || null !== XQ || null !== wQ || "sniper" === qQ || TQ || zQ ? null : (0, gQ.jsx)(nq, {
        label: null !== (QQ = WQ.label) && void 0 !== QQ ? QQ : Sq
      })
    }));

    function nq(QQ) {
      let {
        label: WQ
      } = QQ;
      const XQ = CW(mQ.b.Interact, !1);
      return (0, qQ.useEffect)((() => (UQ.k.mB(pW.r), () => {
        UQ.k.mB(pW.r)
      })), []), (0, gQ.jsx)("div", {
        ref: XQ,
        className: "TouchInteractHit",
        children: (0, gQ.jsxs)("div", {
          className: "TouchInteractKey",
          children: [(0, gQ.jsx)("span", {
            className: "TouchInteractIcon",
            children: (0, gQ.jsx)(kQ.d, {
              name: "hand-back-point-up"
            })
          }), (0, gQ.jsx)(PQ.e, {
            text: WQ
          })]
        })
      })
    }
    var xq = XQ(78),
      Yq = XQ(34413),
      Nq = XQ(1812),
      Zq = XQ(34417);
    const Oq = "ScreenshotMode";
    let Kq = [];
    const mq = new Set;

    function Mq(QQ) {
      Kq = QQ;
      for (const WQ of mq) WQ(QQ)
    }
    const QT = (0, qQ.memo)((function() {
      const {
        screenshotMode: QQ,
        isTouchScreen: WQ,
        openEverythingMenuName: XQ,
        openInGameMenuName: wQ
      } = (0, HQ.n)(["screenshotMode", "isTouchScreen", "openEverythingMenuName", "openInGameMenuName"]), TQ = null !== XQ || null !== wQ, zQ = (0, dQ.e)("localPlayerAlive");
      return (0, qQ.useEffect)((() => {
        !QQ || !TQ && WQ && zQ || (0, Yq.f)()
      }), [QQ, TQ, WQ, zQ]), (0, qQ.useEffect)((() => Yq.f), []), (0, qQ.useEffect)((() => {
        if (QQ) return document.documentElement.classList.add(Oq), (0, MQ.i)(OQ.x.ScreenshotMode, OQ.x.ScreenshotMode, "screenshotMode"), () => {
          document.documentElement.classList.remove(Oq), (0, MQ.i)(OQ.x.ScreenshotMode, 0, "screenshotMode")
        }
      }), [QQ]), QQ ? (0, xq.createPortal)((0, gQ.jsx)(WT, {}), document.body) : null
    }));

    function WT() {
      const {
        t: QQ
      } = (0, cQ.C)(), [WQ, XQ] = (0, qQ.useState)(!1), [wQ, TQ] = (0, qQ.useState)(0), [zQ, sQ] = (0, qQ.useState)(null), FQ = function() {
        const [QQ, WQ] = (0, qQ.useState)(Kq);
        return (0, qQ.useEffect)((() => (mq.add(WQ), WQ(Kq), () => {
          mq.delete(WQ)
        })), []), QQ
      }(), PQ = (0, qQ.useRef)(), JQ = (0, qQ.useRef)(!1);
      (0, qQ.useEffect)((() => () => {
        clearTimeout(PQ.current)
      }), []);
      const rQ = QQ => {
          clearTimeout(PQ.current), sQ(QQ), QQ && (PQ.current = setTimeout((() => {
            sQ(null)
          }), 2e3))
        },
        IQ = (WQ, XQ) => {
          switch (WQ) {
            case "saved":
              rQ(QQ("screenshotMode:saved"));
              break;
            case "denied":
              rQ(QQ("screenshotMode:denied"));
              break;
            case "needsTap":
              Kq.length >= 8 ? (console.error("Screenshot mode: 8 photos already wait on Save photo"), rQ(QQ("screenshotMode:saveWaitingFirst"))) : Mq([...Kq, XQ])
          }
        },
        jQ = WQ => {
          console.error("Screenshot mode: the photo wasn't saved", WQ), rQ(QQ("screenshotMode:failed"))
        };
      return (0, gQ.jsxs)("div", {
        className: "ScreenshotModeOverlay",
        children: [(0, gQ.jsx)("div", {
          className: "ScreenshotModeViewfinder",
          "aria-hidden": !0
        }), (0, gQ.jsx)("div", {
          className: "ScreenshotModeCentre",
          "aria-hidden": !0
        }), wQ > 0 && (0, gQ.jsx)("div", {
          className: "ScreenshotModeFlash"
        }, wQ), (0, gQ.jsx)("button", {
          type: "button",
          className: "ScreenshotModeButton ScreenshotModeBack",
          "aria-label": QQ("screenshotMode:back"),
          onClick: Yq.f,
          children: (0, gQ.jsx)(kQ.d, {
            name: "arrow-left"
          })
        }), (0, gQ.jsx)("button", {
          type: "button",
          className: "ScreenshotModeButton ScreenshotModeShutter",
          "aria-label": QQ("screenshotMode:takePhoto"),
          "aria-busy": WQ,
          onClick: () => {
            (async () => {
              if (!WQ) {
                XQ(!0), rQ(null);
                try {
                  const QQ = await (0, Yq.j)();
                  TQ((QQ => QQ + 1)), IQ(await (0, Zq.h)(QQ), QQ)
                } catch (QQ) {
                  jQ(QQ)
                } finally {
                  XQ(!1)
                }
              }
            })()
          },
          children: (0, gQ.jsx)(kQ.d, {
            name: "camera-alt"
          })
        }), null !== zQ ? (0, gQ.jsx)("div", {
          className: "ScreenshotModeNote",
          role: "status",
          children: zQ
        }) : FQ.length > 0 && (0, gQ.jsxs)("button", {
          type: "button",
          className: "ScreenshotModeNote ScreenshotModeSaveNote",
          onClick: () => {
            if (JQ.current) return;
            JQ.current = !0;
            const [QQ] = Kq;
            Mq(Kq.slice(1));
            const WQ = WQ => {
              console.warn("Screenshot mode: downloading a photo the share sheet didn't take", WQ), (0, Nq.e)(QQ, QQ.name), IQ("saved", QQ)
            };
            (0, Zq.l)(QQ).then((XQ => {
              "needsTap" === XQ ? WQ(XQ) : IQ(XQ, QQ)
            }), WQ).catch(jQ).finally((() => {
              JQ.current = !1
            }))
          },
          children: [(0, gQ.jsx)(kQ.d, {
            name: "image"
          }), QQ("screenshotMode:savePhoto"), FQ.length > 1 && ` (${FQ.length})`]
        })]
      })
    }
    var XT = XQ(5094),
      wT = XQ(5178);
    const qT = (0, qQ.forwardRef)((function(QQ, WQ) {
        let {
          text: XQ,
          className: wQ,
          children: qQ
        } = QQ;
        return XQ.hasText ? (0, gQ.jsx)("div", {
          ref: WQ,
          className: zQ()("HudTextPanel", wQ, {
            NoBackground: !XQ.showBackground
          }),
          children: null !== qQ && void 0 !== qQ ? qQ : (0, gQ.jsx)(PQ.e, {
            text: XQ.content
          })
        }) : null
      })),
      TT = (0, qQ.memo)((function() {
        const QQ = (0, GQ.h)("middleTextTop"),
          [WQ, XQ] = (0, qQ.useState)(null),
          wQ = (0, kw.k)(WQ);
        return QQ.hasText ? (0, gQ.jsx)("div", {
          className: zQ()("MiddleTextTopContainer", {
            MiddleTextTopBelow: wQ
          }),
          children: (0, gQ.jsx)(qT, {
            ref: XQ,
            className: "MiddleTextTop",
            text: QQ
          })
        }) : null
      })),
      zT = (0, qQ.memo)((function() {
        const QQ = (0, GQ.b)();
        return (0, gQ.jsx)(gQ.Fragment, {
          children: QQ.map(((QQ, WQ) => (0, gQ.jsx)(qT, {
            className: "HeaderChip",
            text: QQ
          }, WQ)))
        })
      }));
    var sT = XQ(2934),
      FT = XQ(4930);
    const PT = (0, qQ.memo)((function() {
      const {
        t: QQ
      } = (0, cQ.C)(), [WQ, XQ] = (0, qQ.useState)(!1), wQ = (0, qQ.useRef)(!1), TQ = function(QQ) {
        let {
          gameNameWithVariation: WQ,
          lobbyName: XQ
        } = QQ;
        if ((0, dq.k)(WQ)) return gT;
        if ((0, Hq.D)(XQ)) return JT;
        return null
      }((0, dQ.e)("connectedGame"));
      if (!TQ || WQ) return null;
      const zQ = FT.b[TQ.target];
      return (0, gQ.jsx)(LQ.e, {
        tooltipInner: (0, gQ.jsx)("div", {
          children: QQ(zQ.reportButtonTooltip)
        }),
        children: (0, gQ.jsx)("div", {
          children: (0, gQ.jsx)(oX.S, {
            onClick: () => {
              wQ.current || (wQ.current = !0, (0, FT.c)(TQ.reportPolicyIds, zQ).then((QQ => {
                null !== QQ && void 0 !== QQ && QQ.selectedPolicyId && (IQ.gameBridge.send("reportLobbyOrGame", {
                  target: TQ.target,
                  mz: QQ.selectedPolicyId,
                  details: QQ.Mz
                }), XQ(!0))
              })).finally((() => {
                wQ.current = !1
              })))
            }
          })
        })
      })
    }));
    const gT = {
        target: "customGame",
        reportPolicyIds: sT.h
      },
      JT = {
        target: "lobby",
        reportPolicyIds: sT.k
      };
    var rT = XQ(9159),
      IT = XQ(37219),
      jT = XQ(37224),
      BT = XQ(37229),
      yT = XQ(37235),
      VT = XQ(37221);
    let DT = !1;
    async function pT(QQ, WQ) {
      var XQ, wQ;
      const {
        files: qQ
      } = WQ, TQ = qQ.replayKey();
      if (null === TQ) return "none";
      if (DT) throw new Error(VT.b.saveBusy.text);
      const zQ = null !== (XQ = null === (wQ = qQ.saveRefusal) || void 0 === wQ ? void 0 : wQ.call(qQ)) && void 0 !== XQ ? XQ : null;
      if (null !== zQ) throw new Error(zQ);
      DT = !0;
      try {
        return await async function(QQ, WQ, XQ) {
          const {
            files: wQ
          } = WQ, qQ = () => wQ.replayKey() === XQ, TQ = (QQ, WQ) => {
            qQ() && wQ.markSaved(QQ, WQ)
          };
          let zQ = null;
          if (WQ.pickerSupported()) {
            try {
              if (zQ = await WQ.chooseFile(QQ ? null : wQ.fileHandle()), null === zQ) return "fX"
            } catch (FQ) {
              WQ.onFallback(FQ)
            }
            if (!qQ()) throw new Error(VT.b.saveClosed.text)
          }
          const sQ = await wQ.encode();
          if (null === sQ) {
            if (null !== zQ) throw new Error(VT.b.saveClosed.text);
            return "none"
          }
          if (null !== zQ) try {
            return await WQ.write(zQ, sQ), TQ(zQ), "written"
          } catch (FQ) {
            WQ.onFallback(FQ)
          }
          return TQ(null, WQ.download(sQ)), "downloaded"
        }(QQ, WQ, TQ)
      } finally {
        DT = !1
      }
    }
    var GT = XQ(37260),
      UT = XQ(4863);
    const bT = [1, 2, 4, 8, 16, 32, 64];

    function vT(QQ, WQ) {
      return Math.max(0, Math.min(QQ, WQ))
    }

    function dT(QQ, WQ, XQ) {
      return XQ <= WQ ? 0 : (QQ - WQ) / (XQ - WQ) * 100
    }

    function HT(QQ, WQ, XQ) {
      const wQ = XQ - WQ;
      return Math.round(WQ + QQ / 100 * wQ)
    }

    function aT(QQ, WQ) {
      const XQ = Math.floor(QQ / WQ / 60),
        wQ = Math.floor(QQ / WQ % 60),
        qQ = QQ % WQ;
      return `${XQ.toString().padStart(2,"0")}:${wQ.toString().padStart(2,"0")}:${qQ.toString().padStart(2,"0")}`
    }

    function lT(QQ) {
      return Number.isInteger(QQ) || bT.includes(QQ) ? `${Math.round(QQ)}\xd7` : `${QQ.toFixed(1)}\xd7`
    }

    function hT(QQ, WQ) {
      const XQ = bT.indexOf(QQ);
      if (-1 !== XQ) return "in" === WQ ? bT[Math.min(XQ + 1, bT.length - 1)] : bT[Math.max(XQ - 1, 0)];
      if ("in" === WQ) {
        for (const WQ of bT)
          if (WQ >= QQ) return WQ;
        return QQ
      }
      for (let wQ = bT.length - 1; wQ >= 0; wQ--)
        if (bT[wQ] <= QQ) return bT[wQ];
      return bT[0]
    }

    function iT(QQ, WQ) {
      const XQ = WQ.getBoundingClientRect();
      if (XQ.width <= 0) return 0;
      const wQ = (QQ - XQ.left) / XQ.width * 100;
      return Math.max(0, Math.min(100, wQ))
    }

    function cT(QQ, WQ) {
      return WQ <= 0 ? 0 : QQ / WQ * 100
    }

    function AT(QQ, WQ, XQ) {
      const wQ = [];
      let qQ = Math.ceil(QQ / XQ) * XQ;
      for (; qQ <= WQ;) wQ.push(qQ), qQ += XQ;
      return wQ
    }
    var RT = XQ(37265);
    const ET = [{
        label: "Linear",
        easing: RT.l
      }, {
        label: "Ease",
        easing: [.25, .1, .25, 1]
      }, {
        label: "Ease In",
        easing: RT.g
      }, {
        label: "Ease Out",
        easing: RT.h
      }, {
        label: "Ease In Out",
        easing: RT.c
      }],
      CT = 200,
      uT = 150;

    function LT(QQ) {
      const WQ = QQ => Number(QQ.toFixed(3)).toString();
      return `cubic-bezier(${WQ(QQ[0])}, ${WQ(QQ[1])}, ${WQ(QQ[2])}, ${WQ(QQ[3])})`
    }

    function kT(QQ, WQ) {
      return {
        cx: 25 + QQ * uT,
        cy: 25 + (1 - WQ) * uT
      }
    }

    function fT(QQ, WQ, XQ) {
      const wQ = QQ - XQ.left,
        qQ = WQ - XQ.top;
      return {
        x: KX.b.clamp((wQ - 25) / uT, 0, 1),
        y: KX.b.clamp(1 - (qQ - 25) / uT, -1, 2)
      }
    }

    function ST(QQ, WQ, XQ, wQ, qQ) {
      return {
        x: (0, RT.x)(QQ, XQ, qQ),
        y: (0, RT.x)(WQ, wQ, qQ)
      }
    }
    const tT = (0, qQ.memo)((function(QQ) {
      let {
        value: WQ,
        onChange: XQ
      } = QQ;
      const wQ = (0, qQ.useRef)(null),
        TQ = (0, qQ.useRef)(null),
        [zQ, sQ] = (0, qQ.useState)(null),
        FQ = (0, qQ.useCallback)((() => {
          const QQ = wQ.current;
          if (!QQ) return;
          const XQ = QQ.getContext("2d");
          if (!XQ) return;
          const qQ = window.devicePixelRatio || 1;
          QQ.width = CT * qQ, QQ.height = CT * qQ, XQ.setTransform(qQ, 0, 0, qQ, 0, 0), XQ.clearRect(0, 0, CT, CT), XQ.fillStyle = "rgba(38, 52, 93, 0.85)", XQ.fillRect(0, 0, CT, CT), XQ.beginPath();
          const TQ = kT(0, 0),
            sQ = kT(1, 1);
          XQ.moveTo(TQ.cx, TQ.cy), XQ.lineTo(sQ.cx, sQ.cy), XQ.strokeStyle = "rgba(164, 164, 164, 0.35)", XQ.setLineDash([3, 3]), XQ.stroke(), XQ.setLineDash([]);
          const [FQ, PQ, gQ, JQ] = WQ, rQ = kT(FQ, PQ), IQ = kT(gQ, JQ);
          XQ.strokeStyle = "rgba(252, 211, 115, 0.55)", XQ.lineWidth = 1.5, XQ.beginPath(), XQ.moveTo(TQ.cx, TQ.cy), XQ.lineTo(rQ.cx, rQ.cy), XQ.moveTo(sQ.cx, sQ.cy), XQ.lineTo(IQ.cx, IQ.cy), XQ.stroke(), XQ.strokeStyle = "#fcd373", XQ.lineWidth = 2, XQ.beginPath();
          for (let WQ = 0; WQ <= 50; WQ++) {
            const QQ = ST(FQ, PQ, gQ, JQ, WQ / 50),
              wQ = kT(QQ.x, QQ.y);
            0 === WQ ? XQ.moveTo(wQ.cx, wQ.cy) : XQ.lineTo(wQ.cx, wQ.cy)
          }
          XQ.stroke();
          const jQ = (QQ, WQ, wQ) => {
            XQ.beginPath(), XQ.arc(QQ, WQ, wQ ? 6 : 5, 0, 2 * Math.PI), XQ.fillStyle = wQ ? "#ffb914" : "#fcd373", XQ.fill(), XQ.strokeStyle = "#1a1f2e", XQ.lineWidth = 1.5, XQ.stroke()
          };
          jQ(rQ.cx, rQ.cy, "p1" === zQ), jQ(IQ.cx, IQ.cy, "p2" === zQ)
        }), [zQ, WQ]);
      (0, qQ.useEffect)((() => {
        FQ()
      }), [FQ]);
      const PQ = (0, qQ.useCallback)(((QQ, qQ) => {
          const zQ = wQ.current,
            sQ = TQ.current;
          if (!zQ || !sQ) return;
          const FQ = zQ.getBoundingClientRect(),
            {
              x: PQ,
              y: gQ
            } = fT(QQ, qQ, FQ);
          XQ("p1" === sQ ? [PQ, gQ, WQ[2], WQ[3]] : [WQ[0], WQ[1], PQ, gQ])
        }), [XQ, WQ]),
        JQ = (0, qQ.useCallback)((QQ => {
          const XQ = wQ.current;
          if (!XQ) return;
          const qQ = XQ.getBoundingClientRect();
          let {
            x: zQ,
            y: FQ
          } = fT(QQ.clientX, QQ.clientY, qQ);
          zQ = KX.b.clamp(zQ, 0, 1), FQ = KX.b.clamp(FQ, 0, 1);
          const [gQ, JQ, rQ, IQ] = WQ.map((QQ => KX.b.clamp(QQ, 0, 1))), jQ = Math.hypot(zQ - gQ, FQ - JQ), BQ = Math.hypot(zQ - rQ, FQ - IQ), yQ = jQ <= BQ ? "p1" : "p2";
          ("p1" === yQ ? jQ : BQ) > .12 || (TQ.current = yQ, sQ(yQ), XQ.setPointerCapture(QQ.pointerId), PQ(QQ.clientX, QQ.clientY))
        }), [PQ, WQ]),
        rQ = (0, qQ.useCallback)((QQ => {
          TQ.current && PQ(QQ.clientX, QQ.clientY)
        }), [PQ]),
        IQ = (0, qQ.useCallback)((QQ => {
          TQ.current = null, sQ(null), QQ.currentTarget.hasPointerCapture(QQ.pointerId) && QQ.currentTarget.releasePointerCapture(QQ.pointerId)
        }), []);
      return (0, gQ.jsxs)("div", {
        className: "CubicBezierEasingEditor",
        children: [(0, gQ.jsx)("canvas", {
          ref: wQ,
          className: "CubicBezierEasingEditorCanvas",
          style: {
            width: CT,
            height: CT
          },
          onPointerDown: JQ,
          onPointerMove: rQ,
          onPointerUp: IQ,
          onPointerCancel: IQ
        }), (0, gQ.jsx)("span", {
          className: "CubicBezierEasingEditorReadout",
          children: LT(WQ)
        })]
      })
    }));
    var oT = XQ(1744),
      eT = XQ(1728);
    const nT = 12;

    function xT(QQ) {
      return {
        left: QQ.left + QQ.width / 2,
        top: QQ.top - 8
      }
    }

    function YT(QQ, WQ) {
      const [XQ, wQ] = (0, qQ.useState)(null);
      return (0, qQ.useLayoutEffect)((() => {
        const XQ = QQ.current;
        if (!XQ) return;
        const {
          width: qQ,
          height: TQ
        } = XQ.getBoundingClientRect();
        wQ(function(QQ, WQ, XQ) {
          const wQ = window.innerWidth,
            qQ = window.innerHeight,
            TQ = WQ / 2;
          let zQ = QQ.left + QQ.width / 2;
          zQ = Math.max(nT + TQ, Math.min(zQ, wQ - nT - TQ));
          const sQ = QQ.top - 8 - nT,
            FQ = qQ - QQ.bottom - 8 - nT,
            PQ = sQ < XQ && FQ >= sQ;
          let gQ;
          PQ ? (gQ = QQ.bottom + 8, gQ + XQ > qQ - nT && (gQ = qQ - nT - XQ), gQ = Math.max(nT, gQ)) : (gQ = QQ.top - 8, gQ - XQ < nT && (gQ = nT + XQ));
          return {
            left: zQ,
            top: gQ,
            placeBelow: PQ
          }
        }(WQ, qQ, TQ))
      }), [WQ, QQ]), XQ
    }

    function NT(QQ, WQ, XQ) {
      (0, qQ.useEffect)((() => (0, eT.c)("pointerdown", (wQ => {
        var qQ, TQ;
        const zQ = wQ.target;
        zQ instanceof Node && (null !== (qQ = QQ.current) && void 0 !== qQ && qQ.contains(zQ) || null !== XQ && void 0 !== XQ && null !== (TQ = XQ.current) && void 0 !== TQ && TQ.contains(zQ) || (0, oT.m)(zQ) || WQ())
      }))), [XQ, WQ, QQ])
    }

    function ZT(QQ) {
      let {
        label: WQ,
        value: XQ,
        onChange: wQ
      } = QQ;
      return (0, gQ.jsxs)("div", {
        className: "ReplayKeyframePopoverVec3",
        children: [(0, gQ.jsx)("span", {
          className: "ReplayKeyframePopoverVec3Label",
          children: WQ
        }), (0, gQ.jsx)("div", {
          className: "ReplayKeyframePopoverVec3Inputs",
          children: ["X", "Y", "Z"].map(((QQ, WQ) => (0, gQ.jsxs)("label", {
            className: "ReplayKeyframePopoverAxis",
            children: [(0, gQ.jsx)("span", {
              children: QQ
            }), (0, gQ.jsx)("input", {
              type: "number",
              step: "any",
              value: XQ[WQ],
              onChange: QQ => {
                const qQ = Number.parseFloat(QQ.target.value);
                if (Number.isNaN(qQ)) return;
                const TQ = [XQ[0], XQ[1], XQ[2]];
                TQ[WQ] = qQ, wQ(TQ)
              }
            })]
          }, QQ)))
        })]
      })
    }
    const OT = (0, qQ.memo)((function(QQ) {
        var WQ, XQ, wQ;
        let {
          keyframe: TQ,
          anchor: sQ,
          hasOutgoingSegment: FQ,
          onClose: PQ,
          onApply: JQ,
          onDelete: rQ,
          onUseCurrentCamera: IQ
        } = QQ;
        const jQ = (0, qQ.useRef)(null),
          BQ = YT(jQ, sQ.rect),
          [yQ, VQ] = (0, qQ.useState)((() => [TQ.position[0], TQ.position[1], TQ.position[2]])),
          [DQ, pQ] = (0, qQ.useState)((() => [TQ.direction[0], TQ.direction[1], TQ.direction[2]])),
          [GQ, UQ] = (0, qQ.useState)((() => TQ.easing));
        (0, qQ.useEffect)((() => {
          VQ([TQ.position[0], TQ.position[1], TQ.position[2]]), pQ([TQ.direction[0], TQ.direction[1], TQ.direction[2]]), UQ(TQ.easing)
        }), [TQ]), NT(jQ, PQ);
        const bQ = (0, qQ.useCallback)((() => {
            JQ({
              fJ: TQ.fJ,
              position: yQ,
              direction: DQ,
              easing: GQ
            }), PQ()
          }), [DQ, GQ, TQ.fJ, JQ, PQ, yQ]),
          vQ = (0, qQ.useCallback)((() => {
            rQ(TQ.fJ), PQ()
          }), [TQ.fJ, rQ, PQ]),
          dQ = (0, qQ.useCallback)((() => {
            const QQ = IQ();
            QQ && (VQ([QQ.position[0], QQ.position[1], QQ.position[2]]), pQ([QQ.direction[0], QQ.direction[1], QQ.direction[2]]))
          }), [IQ]),
          HQ = xT(sQ.rect);
        return (0, gQ.jsxs)("div", {
          ref: jQ,
          className: zQ()("ReplayViewerPopover ReplayKeyframePopover", {
            Below: null !== (WQ = null === BQ || void 0 === BQ ? void 0 : BQ.placeBelow) && void 0 !== WQ && WQ,
            Positioned: null !== BQ
          }),
          style: {
            left: `${null!==(XQ=null===BQ||void 0===BQ?void 0:BQ.left)&&void 0!==XQ?XQ:HQ.left}px`,
            top: `${null!==(wQ=null===BQ||void 0===BQ?void 0:BQ.top)&&void 0!==wQ?wQ:HQ.top}px`
          },
          onPointerDown: QQ => {
            QQ.stopPropagation()
          },
          children: [(0, gQ.jsxs)("div", {
            className: "ReplayKeyframePopoverHeader",
            children: [(0, gQ.jsx)("span", {
              className: "ReplayKeyframePopoverTitle",
              children: "Camera keyframe"
            }), (0, gQ.jsxs)("span", {
              className: "ReplayKeyframePopoverTick",
              children: ["Tick ", sQ.fJ]
            })]
          }), (0, gQ.jsx)(ZT, {
            label: "Position",
            value: yQ,
            onChange: VQ
          }), (0, gQ.jsx)(ZT, {
            label: "Direction",
            value: DQ,
            onChange: pQ
          }), FQ && (0, gQ.jsxs)("div", {
            className: "ReplayKeyframePopoverEasing",
            children: [(0, gQ.jsx)("span", {
              className: "ReplayKeyframePopoverEasingLabel",
              children: "Easing to next"
            }), (0, gQ.jsx)("div", {
              className: "ReplayKeyframePopoverEasingPresets",
              children: ET.map((QQ => {
                const WQ = (XQ = GQ, wQ = QQ.easing, XQ[0] === wQ[0] && XQ[1] === wQ[1] && XQ[2] === wQ[2] && XQ[3] === wQ[3]);
                var XQ, wQ;
                return (0, gQ.jsx)(oX.T, {
                  className: zQ()("ReplayKeyframePopoverPreset", {
                    Active: WQ
                  }),
                  onClick: () => {
                    UQ(QQ.easing)
                  },
                  children: QQ.label
                }, QQ.label)
              }))
            }), (0, gQ.jsx)(tT, {
              value: GQ,
              onChange: UQ
            })]
          }), (0, gQ.jsxs)("div", {
            className: "ReplayKeyframePopoverActions",
            children: [(0, gQ.jsx)(oX.h, {
              className: "ReplayViewerCompactButton",
              onClick: dQ,
              children: "Use current view"
            }), (0, gQ.jsx)(oX.s, {
              className: "ReplayViewerCompactButton",
              onClick: bQ,
              children: "Apply"
            }), (0, gQ.jsx)(oX.P, {
              className: "ReplayViewerCompactButton",
              onClick: vQ,
              children: "Delete"
            })]
          })]
        })
      })),
      KT = (0, qQ.memo)((function(QQ) {
        var WQ, XQ, wQ;
        let {
          anchor: TQ,
          hasPlaybackMark: sQ,
          onClose: FQ,
          onMark: PQ,
          onZoom: JQ,
          onCrop: rQ,
          onDeleteKeyframes: IQ,
          onClearMark: jQ
        } = QQ;
        const BQ = (0, qQ.useRef)(null),
          yQ = YT(BQ, TQ.rect),
          VQ = xT(TQ.rect),
          DQ = {
            startTick: TQ.startTick,
            endTick: TQ.endTick
          },
          pQ = TQ.endTick > TQ.startTick;
        return NT(BQ, FQ), (0, gQ.jsx)("div", {
          ref: BQ,
          className: zQ()("ReplayViewerPopover ReplayTimelineSelectionPopover", {
            Below: null !== (WQ = null === yQ || void 0 === yQ ? void 0 : yQ.placeBelow) && void 0 !== WQ && WQ,
            Positioned: null !== yQ
          }),
          style: {
            left: `${null!==(XQ=null===yQ||void 0===yQ?void 0:yQ.left)&&void 0!==XQ?XQ:VQ.left}px`,
            top: `${null!==(wQ=null===yQ||void 0===yQ?void 0:yQ.top)&&void 0!==wQ?wQ:VQ.top}px`
          },
          onPointerDown: QQ => {
            QQ.stopPropagation()
          },
          children: (0, gQ.jsxs)("div", {
            className: "ReplayTimelineSelectionPopoverActions",
            children: [(0, gQ.jsx)(oX.s, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                PQ(DQ)
              },
              disabled: !pQ,
              children: (0, gQ.jsx)("span", {
                children: " Play range "
              })
            }), (0, gQ.jsx)(oX.h, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                JQ(DQ)
              },
              children: (0, gQ.jsx)("span", {
                children: " Zoom "
              })
            }), (0, gQ.jsx)(oX.T, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                rQ(DQ)
              },
              disabled: !pQ,
              children: (0, gQ.jsx)("span", {
                children: " Crop "
              })
            }), (0, gQ.jsx)(oX.T, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                IQ(DQ)
              },
              children: (0, gQ.jsx)("span", {
                children: " Delete all keyframes "
              })
            }), sQ && (0, gQ.jsx)(oX.T, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                jQ()
              },
              children: (0, gQ.jsx)("span", {
                children: " Clear range "
              })
            })]
          })
        })
      })),
      mT = (0, qQ.memo)((function(QQ) {
        var WQ, XQ;
        let {
          maxTick: wQ,
          displayTick: TQ,
          qE: sQ,
          cameraKeyframes: FQ,
          playbackMark: PQ,
          onSeek: JQ,
          onPause: rQ,
          onScrubTickChange: IQ,
          onMoveCameraKeyframe: jQ,
          onUpdateCameraKeyframe: BQ,
          onDeleteCameraKeyframe: yQ,
          onUseCurrentCamera: VQ,
          onMarkRange: DQ,
          onCropRange: pQ,
          onDeleteKeyframesInRange: GQ,
          onClearMark: UQ,
          zoomLevel: bQ,
          onZoomLevelChange: vQ
        } = QQ;
        const dQ = (0, qQ.useRef)(null),
          HQ = (0, qQ.useRef)(null),
          aQ = (0, qQ.useRef)(!1),
          lQ = (0, qQ.useRef)(!1),
          hQ = (0, qQ.useRef)(bQ),
          iQ = (0, qQ.useRef)(null),
          cQ = (0, qQ.useRef)(null),
          AQ = (0, qQ.useRef)(null),
          RQ = (0, qQ.useRef)(null),
          [EQ, CQ] = (0, qQ.useState)(null),
          [uQ, LQ] = (0, qQ.useState)(TQ),
          [kQ, fQ] = (0, qQ.useState)(null),
          [SQ, tQ] = (0, qQ.useState)(null),
          [oQ, eQ] = (0, qQ.useState)(null),
          [nQ, xQ] = (0, qQ.useState)(null),
          YQ = (0, qQ.useMemo)((() => FQ.map((QQ => QQ.fJ))), [FQ]),
          NQ = null !== EQ && void 0 !== EQ ? EQ : TQ,
          {
            viewStart: ZQ,
            viewEnd: OQ
          } = (0, qQ.useMemo)((() => function(QQ) {
            const WQ = QQ.maxTick + 1,
              XQ = Math.max(1, Math.ceil(WQ / QQ.zoomLevel)),
              wQ = Math.floor(XQ / 2);
            let qQ = QQ.centerTick - wQ;
            return qQ = Math.max(0, Math.min(qQ, QQ.maxTick - XQ + 1)), {
              viewStart: qQ,
              viewEnd: Math.min(QQ.maxTick, qQ + XQ - 1)
            }
          }({
            maxTick: wQ,
            zoomLevel: bQ,
            centerTick: uQ
          })), [wQ, bQ, uQ]);
        (0, qQ.useEffect)((() => {
          if (null !== EQ || null !== cQ.current || null !== AQ.current || null !== RQ.current) return;
          if (aQ.current) return void(aQ.current = !1);
          if (lQ.current) return void(lQ.current = !1);
          const QQ = hQ.current !== bQ;
          hQ.current = bQ, QQ && LQ(TQ)
        }), [bQ, TQ, EQ]);
        const KQ = (0, qQ.useCallback)((QQ => {
            let WQ = vT(QQ, wQ);
            return PQ && (WQ = Math.max(PQ.inTick, Math.min(WQ, PQ.outTick))), WQ
          }), [wQ, PQ]),
          mQ = (0, qQ.useCallback)(((QQ, WQ) => {
            const XQ = KQ(QQ);
            JQ(XQ), WQ && LQ(XQ)
          }), [KQ, JQ]),
          MQ = (0, qQ.useCallback)(((QQ, WQ) => {
            const XQ = KQ(QQ);
            CQ(XQ), IQ(XQ), mQ(XQ, WQ)
          }), [KQ, mQ, IQ]),
          QW = (0, qQ.useCallback)((() => {
            CQ((QQ => (null !== QQ && LQ(QQ), null))), IQ(null)
          }), [IQ]),
          WW = (0, qQ.useCallback)((() => {
            eQ(null), xQ(null)
          }), []),
          XW = (0, qQ.useCallback)((QQ => {
            const WQ = dQ.current;
            if (!WQ) return 0;
            return vT(HT(iT(QQ, WQ), ZQ, OQ), wQ)
          }), [wQ, OQ, ZQ]),
          wW = (0, qQ.useCallback)((QQ => {
            const WQ = HQ.current;
            if (!WQ) return 0;
            return vT(HT(iT(QQ, WQ), 0, wQ), wQ)
          }), [wQ]),
          qW = (0, qQ.useMemo)((() => {
            if (!kQ) return [...YQ];
            const QQ = YQ.filter((QQ => QQ !== kQ.fromTick));
            return QQ.push(kQ.previewTick), QQ.sort(((QQ, WQ) => QQ - WQ)), QQ
          }), [YQ, kQ]),
          TW = (0, qQ.useMemo)((() => {
            var QQ;
            return SQ && null !== (QQ = FQ.find((QQ => QQ.fJ === SQ.fJ))) && void 0 !== QQ ? QQ : null
          }), [FQ, SQ]),
          zW = (0, qQ.useMemo)((() => !!TW && FQ.some((QQ => QQ.fJ > TW.fJ))), [FQ, TW]);
        (0, qQ.useEffect)((() => {
          SQ && !TW && tQ(null)
        }), [SQ, TW]), (0, qQ.useEffect)((() => {
          if (!nQ) return () => {};
          const QQ = QQ => {
            "Escape" === QQ.key && WW()
          };
          return window.addEventListener("keydown", QQ), () => {
            window.removeEventListener("keydown", QQ)
          }
        }), [WW, nQ]);
        const sW = (0, qQ.useCallback)(((QQ, WQ) => {
            WW(), rQ(), JQ(QQ, {
              ignorePlaybackMark: !0
            }), tQ({
              fJ: QQ,
              rect: WQ.getBoundingClientRect()
            })
          }), [WW, rQ, JQ]),
          FW = (0, qQ.useCallback)(((QQ, WQ) => XQ => {
            0 === XQ.button && (XQ.stopPropagation(), tQ(null), WW(), rQ(), iQ.current = {
              fromTick: QQ,
              startX: XQ.clientX,
              startY: XQ.clientY,
              didDrag: !1,
              track: WQ
            }, fQ({
              fromTick: QQ,
              previewTick: QQ,
              track: WQ
            }), XQ.currentTarget.setPointerCapture(XQ.pointerId))
          }), [WW, rQ]),
          PW = (0, qQ.useCallback)((QQ => {
            if (!kQ) return;
            QQ.stopPropagation();
            const WQ = iQ.current;
            if (WQ && !WQ.didDrag) {
              const XQ = QQ.clientX - WQ.startX,
                wQ = QQ.clientY - WQ.startY;
              Math.hypot(XQ, wQ) > 5 && (WQ.didDrag = !0)
            }
            const XQ = "detail" === kQ.track ? XW(QQ.clientX) : wW(QQ.clientX);
            XQ !== kQ.previewTick && fQ({
              ...kQ,
              previewTick: XQ
            })
          }), [kQ, XW, wW]),
          gW = (0, qQ.useCallback)((QQ => {
            if (!kQ) return;
            QQ.stopPropagation();
            const WQ = iQ.current,
              XQ = "detail" === kQ.track ? XW(QQ.clientX) : wW(QQ.clientX);
            WQ && !WQ.didDrag ? sW(WQ.fromTick, QQ.currentTarget) : XQ !== kQ.fromTick && jQ(kQ.fromTick, XQ), fQ(null), iQ.current = null, QQ.currentTarget.releasePointerCapture(QQ.pointerId)
          }), [kQ, jQ, sW, XW, wW]),
          JW = (0, qQ.useCallback)((QQ => {
            if (0 !== QQ.button) return;
            tQ(null), rQ();
            const WQ = XW(QQ.clientX);
            cQ.current = {
              pointerId: QQ.pointerId,
              startX: QQ.clientX,
              startY: QQ.clientY,
              startTick: WQ,
              currentTick: WQ,
              didSelect: !1
            }, eQ(null), xQ(null), QQ.currentTarget.setPointerCapture(QQ.pointerId)
          }), [rQ, XW]),
          rW = (0, qQ.useCallback)((QQ => {
            const WQ = cQ.current;
            if (!WQ || WQ.pointerId !== QQ.pointerId) return;
            const XQ = XW(QQ.clientX);
            if (WQ.currentTick = XQ, !WQ.didSelect) {
              const XQ = QQ.clientX - WQ.startX,
                wQ = QQ.clientY - WQ.startY;
              if (Math.hypot(XQ, wQ) <= 5) return;
              WQ.didSelect = !0
            }
            const wQ = Math.min(WQ.startTick, XQ),
              qQ = Math.max(WQ.startTick, XQ);
            eQ({
              startTick: wQ,
              endTick: qQ
            })
          }), [XW]),
          IW = (0, qQ.useCallback)((QQ => {
            const WQ = cQ.current;
            if (!WQ || WQ.pointerId !== QQ.pointerId) return;
            if (cQ.current = null, QQ.currentTarget.releasePointerCapture(QQ.pointerId), !WQ.didSelect) return WW(), void mQ(WQ.startTick, !0);
            const XQ = XW(QQ.clientX),
              wQ = Math.min(WQ.startTick, XQ),
              qQ = Math.max(WQ.startTick, XQ),
              TQ = {
                startTick: wQ,
                endTick: qQ
              };
            eQ(TQ);
            const zQ = dQ.current;
            if (!zQ) return;
            const sQ = zQ.getBoundingClientRect(),
              FQ = dT(wQ, ZQ, OQ) / 100,
              PQ = dT(qQ, ZQ, OQ) / 100,
              gQ = sQ.left + FQ * sQ.width,
              JQ = sQ.left + PQ * sQ.width;
            xQ({
              ...TQ,
              rect: new DOMRect(gQ, sQ.top, Math.max(JQ - gQ, 1), sQ.height)
            })
          }), [WW, mQ, XW, OQ, ZQ]),
          jW = (0, qQ.useCallback)((QQ => WQ => {
            if (0 !== WQ.button) return;
            WQ.stopPropagation(), tQ(null), WW(), rQ(), AQ.current = {
              pointerId: WQ.pointerId,
              track: QQ
            }, WQ.currentTarget.setPointerCapture(WQ.pointerId);
            const XQ = "detail" === QQ ? XW(WQ.clientX) : wW(WQ.clientX);
            MQ(XQ, !1)
          }), [WW, rQ, MQ, XW, wW]),
          BW = (0, qQ.useCallback)((QQ => {
            const WQ = AQ.current;
            if (!WQ || WQ.pointerId !== QQ.pointerId) return;
            QQ.stopPropagation();
            const XQ = "detail" === WQ.track ? XW(QQ.clientX) : wW(QQ.clientX);
            MQ(XQ, !1)
          }), [MQ, XW, wW]),
          yW = (0, qQ.useCallback)((QQ => {
            const WQ = AQ.current;
            WQ && WQ.pointerId === QQ.pointerId && (QQ.stopPropagation(), AQ.current = null, QQ.currentTarget.releasePointerCapture(QQ.pointerId), QW())
          }), [QW]),
          VW = (0, qQ.useCallback)((QQ => {
            0 === QQ.button && (WW(), rQ(), RQ.current = {
              pointerId: QQ.pointerId
            }, QQ.currentTarget.setPointerCapture(QQ.pointerId), MQ(wW(QQ.clientX), !0))
          }), [WW, rQ, MQ, wW]),
          DW = (0, qQ.useCallback)((QQ => {
            const WQ = RQ.current;
            WQ && WQ.pointerId === QQ.pointerId && MQ(wW(QQ.clientX), !0)
          }), [MQ, wW]),
          pW = (0, qQ.useCallback)((QQ => {
            const WQ = RQ.current;
            WQ && WQ.pointerId === QQ.pointerId && (RQ.current = null, QQ.currentTarget.releasePointerCapture(QQ.pointerId), QW())
          }), [QW]),
          GW = (0, qQ.useCallback)((QQ => {
            const WQ = Math.max(1, QQ.endTick - QQ.startTick + 1),
              XQ = wQ + 1,
              qQ = XQ / WQ,
              TQ = Math.max(1, Math.ceil(XQ / qQ)),
              zQ = QQ.startTick + Math.floor((TQ - 1) / 2);
            lQ.current = !0, hQ.current = qQ, LQ(vT(zQ, wQ)), vQ(qQ), WW()
          }), [WW, wQ, vQ]),
          UW = (0, qQ.useCallback)((QQ => {
            DQ(QQ), WW()
          }), [WW, DQ]),
          bW = (0, qQ.useCallback)((QQ => {
            pQ(QQ), WW()
          }), [WW, pQ]),
          vW = (0, qQ.useCallback)((QQ => {
            GQ(QQ), WW()
          }), [WW, GQ]),
          dW = (0, qQ.useCallback)((() => {
            UQ(), WW()
          }), [WW, UQ]);
        (0, qQ.useEffect)((() => {
          const QQ = dQ.current;
          if (!QQ) return () => {};
          const WQ = WQ => {
            WQ.preventDefault();
            const XQ = vT(HT(iT(WQ.clientX, QQ), ZQ, OQ), wQ),
              qQ = WQ.deltaY < 0 ? "in" : "out",
              TQ = hT(bQ, qQ);
            TQ !== bQ && (aQ.current = !0, LQ(XQ), vQ(TQ))
          };
          return QQ.addEventListener("wheel", WQ, {
            passive: !1
          }), () => {
            QQ.removeEventListener("wheel", WQ)
          }
        }), [wQ, vQ, OQ, ZQ, bQ]);
        const HW = dT(NQ, ZQ, OQ),
          aW = cT(NQ, wQ),
          lW = cT(ZQ, wQ),
          hW = wQ > 0 ? cT(OQ, wQ) : 100,
          iW = null !== PQ,
          cW = null !== (WQ = null === PQ || void 0 === PQ ? void 0 : PQ.inTick) && void 0 !== WQ ? WQ : 0,
          AW = null !== (XQ = null === PQ || void 0 === PQ ? void 0 : PQ.outTick) && void 0 !== XQ ? XQ : wQ,
          RW = cT(cW, wQ),
          EW = Math.max(cT(AW, wQ) - RW, 0),
          CW = dT(Math.max(cW, ZQ), ZQ, OQ),
          uW = dT(Math.min(AW, OQ), ZQ, OQ),
          LW = Math.max(uW - CW, 0),
          kW = iW && AW >= ZQ && cW <= OQ,
          fW = dT(cW, ZQ, OQ),
          SW = dT(AW, ZQ, OQ),
          tW = iW && cW >= ZQ && cW <= OQ,
          oW = iW && AW >= ZQ && AW <= OQ,
          eW = cT(cW, wQ),
          nW = cT(AW, wQ),
          xW = null !== oQ && void 0 !== oQ ? oQ : nQ ? {
            startTick: nQ.startTick,
            endTick: nQ.endTick
          } : null,
          YW = xW ? dT(Math.max(xW.startTick, ZQ), ZQ, OQ) : 0,
          NW = xW ? dT(Math.min(xW.endTick, OQ), ZQ, OQ) : 0,
          ZW = Math.max(NW - YW, 0),
          OW = null !== xW && xW.endTick >= ZQ && xW.startTick <= OQ,
          KW = (0, qQ.useMemo)((() => AT(0, wQ, sQ)), [wQ, sQ]),
          mW = (0, qQ.useMemo)((() => AT(ZQ, OQ, sQ)), [ZQ, OQ, sQ]),
          MW = (0, qQ.useMemo)((() => qW.filter((QQ => QQ >= ZQ && QQ <= OQ))), [qW, OQ, ZQ]),
          QX = (0, qQ.useCallback)(((QQ, WQ, XQ) => {
            const qQ = "detail" === WQ ? dT(QQ, ZQ, OQ) : cT(QQ, wQ),
              TQ = null !== kQ && XQ === kQ.fromTick,
              sQ = null !== SQ && SQ.fJ === XQ;
            return (0, gQ.jsx)("button", {
              type: "button",
              className: zQ()("ReplayTimelineCameraKeyframeMarker", "detail" === WQ ? "Detail" : "Overview", {
                Dragging: TQ,
                Selected: sQ
              }),
              style: {
                left: `${qQ}%`
              },
              onPointerDown: FW(XQ, WQ),
              onPointerMove: PW,
              onPointerUp: gW,
              onPointerCancel: gW,
              "aria-label": `Camera keyframe at tick ${XQ}`
            }, `cam-${WQ}-${XQ}`)
          }), [FW, SQ, gW, kQ, wQ, PW, OQ, ZQ]),
          WX = (0, qQ.useCallback)((QQ => kQ && QQ === kQ.previewTick ? kQ.fromTick : QQ), [kQ]);
        return wQ <= 0 ? null : (0, gQ.jsxs)("div", {
          className: "ReplayTimeline",
          children: [SQ && TW && (0, xq.createPortal)((0, gQ.jsx)(OT, {
            keyframe: TW,
            anchor: SQ,
            hasOutgoingSegment: zW,
            onClose: () => {
              tQ(null)
            },
            onApply: BQ,
            onDelete: yQ,
            onUseCurrentCamera: VQ
          }), document.body), nQ && (0, xq.createPortal)((0, gQ.jsx)(KT, {
            anchor: nQ,
            hasPlaybackMark: iW,
            onClose: WW,
            onMark: UW,
            onZoom: GW,
            onCrop: bW,
            onDeleteKeyframes: vW,
            onClearMark: dW
          }), document.body), (0, gQ.jsxs)("div", {
            className: zQ()("ReplayTimelineOverviewSection", {
              Hidden: bQ <= 1
            }),
            children: [(0, gQ.jsx)("div", {
              className: "ReplayTimelineSectionLabel",
              children: "Overview"
            }), (0, gQ.jsxs)("div", {
              ref: HQ,
              className: "ReplayTimelineOverviewTrack",
              onPointerDown: VW,
              onPointerMove: DW,
              onPointerUp: pW,
              onPointerCancel: pW,
              role: "slider",
              "aria-label": "Recording overview",
              "aria-valuemin": 0,
              "aria-valuemax": wQ,
              "aria-valuenow": NQ,
              tabIndex: 0,
              children: [KW.map((QQ => {
                const WQ = cT(QQ, wQ);
                return (0, gQ.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Overview",
                  style: {
                    left: `${WQ}%`
                  }
                }, QQ)
              })), iW && (0, gQ.jsxs)(gQ.Fragment, {
                children: [(0, gQ.jsx)("div", {
                  className: "ReplayTimelineMarkRegion Overview",
                  style: {
                    left: `${RW}%`,
                    width: `${EW}%`
                  }
                }), (0, gQ.jsx)("div", {
                  className: "ReplayTimelineMarkMarker In Overview",
                  style: {
                    left: `${eW}%`
                  },
                  "aria-hidden": !0
                }), (0, gQ.jsx)("div", {
                  className: "ReplayTimelineMarkMarker Out Overview",
                  style: {
                    left: `${nW}%`
                  },
                  "aria-hidden": !0
                })]
              }), qW.map((QQ => QX(QQ, "overview", WX(QQ)))), (0, gQ.jsx)("div", {
                className: "ReplayTimelineViewport",
                style: {
                  left: `${lW}%`,
                  width: `${Math.max(hW-lW,.5)}%`
                }
              }), (0, gQ.jsx)("button", {
                type: "button",
                className: zQ()("ReplayTimelinePlayhead Overview", {
                  Scrubbing: null !== EQ
                }),
                style: {
                  left: `${aW}%`
                },
                onPointerDown: jW("overview"),
                onPointerMove: BW,
                onPointerUp: yW,
                onPointerCancel: yW,
                "aria-label": "Scrub playhead"
              })]
            })]
          }), (0, gQ.jsxs)("div", {
            className: "ReplayTimelineDetailSection",
            children: [(0, gQ.jsxs)("div", {
              className: "ReplayTimelineDetailHeader",
              children: [(0, gQ.jsx)("span", {
                className: "ReplayTimelineSectionLabel",
                children: "Timeline"
              }), (0, gQ.jsxs)("span", {
                className: "ReplayTimelineDetailRange",
                children: [aT(ZQ, sQ), " \u2013 ", aT(OQ, sQ), bQ > 1 && (0, gQ.jsx)("span", {
                  className: "ReplayTimelineZoomBadge",
                  children: lT(bQ)
                })]
              })]
            }), (0, gQ.jsxs)("div", {
              ref: dQ,
              className: "ReplayTimelineDetailTrack",
              onPointerDown: JW,
              onPointerMove: rW,
              onPointerUp: IW,
              onPointerCancel: IW,
              role: "slider",
              "aria-label": "Recording timeline",
              "aria-valuemin": ZQ,
              "aria-valuemax": OQ,
              "aria-valuenow": NQ,
              tabIndex: 0,
              children: [mW.map((QQ => {
                const WQ = dT(QQ, ZQ, OQ);
                return (0, gQ.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Detail",
                  style: {
                    left: `${WQ}%`
                  }
                }, QQ)
              })), kW && (0, gQ.jsx)("div", {
                className: "ReplayTimelineMarkRegion Detail",
                style: {
                  left: `${CW}%`,
                  width: `${LW}%`
                }
              }), tW && (0, gQ.jsx)("div", {
                className: "ReplayTimelineMarkMarker In Detail",
                style: {
                  left: `${fW}%`
                },
                "aria-label": `Play range start at tick ${cW}`
              }), oW && (0, gQ.jsx)("div", {
                className: "ReplayTimelineMarkMarker Out Detail",
                style: {
                  left: `${SW}%`
                },
                "aria-label": `Play range end at tick ${AW}`
              }), OW && xW && (0, gQ.jsx)("div", {
                className: "ReplayTimelineSelectionRegion Detail",
                style: {
                  left: `${YW}%`,
                  width: `${ZW}%`
                }
              }), MW.map((QQ => QX(QQ, "detail", WX(QQ)))), (0, gQ.jsx)("button", {
                type: "button",
                className: zQ()("ReplayTimelinePlayhead Detail", {
                  Scrubbing: null !== EQ
                }),
                style: {
                  left: `${HW}%`
                },
                onPointerDown: jW("detail"),
                onPointerMove: BW,
                onPointerUp: yW,
                onPointerCancel: yW,
                "aria-label": "Scrub playhead"
              })]
            }), (0, gQ.jsxs)("div", {
              className: "ReplayTimelineWheelHint",
              children: [(0, gQ.jsx)("span", {
                className: "Select",
                children: "Drag timeline to select"
              }), " \xb7 Scroll to zoom \xb7 Drag playhead to scrub"]
            })]
          })]
        })
      })),
      MT = (0, qQ.memo)((function(QQ) {
        let {
          enabled: WQ
        } = QQ;
        const XQ = (0, qQ.useRef)(!1),
          wQ = (0, qQ.useRef)(null),
          [TQ, sQ] = (0, qQ.useState)(!1),
          FQ = (0, qQ.useCallback)((QQ => {
            WQ && 0 === QQ.button && (XQ.current = !0, sQ(!0), wQ.current = {
              x: QQ.clientX,
              y: QQ.clientY
            }, QQ.currentTarget.setPointerCapture(QQ.pointerId))
          }), [WQ]),
          PQ = (0, qQ.useCallback)((QQ => {
            if (!WQ || !XQ.current || !wQ.current) return;
            const qQ = QQ.clientX - wQ.current.x,
              TQ = QQ.clientY - wQ.current.y;
            wQ.current = {
              x: QQ.clientX,
              y: QQ.clientY
            }, IQ.gameBridge.send("dragReplayCamera", {
              dx: qQ,
              dy: TQ
            })
          }), [WQ]),
          JQ = (0, qQ.useCallback)((QQ => {
            XQ.current && (XQ.current = !1, sQ(!1), wQ.current = null, QQ.currentTarget.releasePointerCapture(QQ.pointerId))
          }), []);
        return WQ ? (0, gQ.jsx)("div", {
          className: zQ()("ReplayViewerCameraDragSurface", {
            Dragging: TQ
          }),
          onPointerDown: FQ,
          onPointerMove: PQ,
          onPointerUp: JQ,
          onPointerCancel: JQ,
          "aria-hidden": !0
        }) : null
      }));
    var Qz = XQ(37269),
      Wz = XQ(37275);
    const Xz = (0, qQ.memo)((function(QQ) {
        var WQ, XQ, wQ;
        let {
          anchorRect: TQ,
          anchorRef: sQ,
          onClose: PQ
        } = QQ;
        const JQ = (0, qQ.useRef)(null),
          rQ = YT(JQ, TQ),
          [IQ, jQ] = (0, qQ.useState)(Wz.d),
          BQ = (0, qQ.useMemo)((() => Object.values(IQ).every((QQ => QQ))), [IQ]);
        (0, FQ.f)("replayViewer|uiVisibilityChanged", (() => {
          jQ((0, Wz.d)())
        })), NT(JQ, PQ, sQ);
        const yQ = (0, qQ.useCallback)(((QQ, WQ) => {
            (0, Wz.i)(QQ, WQ), jQ((0, Wz.d)())
          }), []),
          VQ = (0, qQ.useCallback)((QQ => {
            for (const {
                group: WQ
              }
              of Qz.e)(0, Wz.i)(WQ, QQ);
            jQ((0, Wz.d)())
          }), []),
          DQ = xT(TQ);
        return (0, xq.createPortal)((0, gQ.jsxs)("div", {
          ref: JQ,
          className: zQ()("ReplayViewerPopover ReplayUiVisibilityPopover", {
            Below: null !== (WQ = null === rQ || void 0 === rQ ? void 0 : rQ.placeBelow) && void 0 !== WQ && WQ,
            Positioned: null !== rQ
          }),
          style: {
            left: `${null!==(XQ=null===rQ||void 0===rQ?void 0:rQ.left)&&void 0!==XQ?XQ:DQ.left}px`,
            top: `${null!==(wQ=null===rQ||void 0===rQ?void 0:rQ.top)&&void 0!==wQ?wQ:DQ.top}px`
          },
          onPointerDown: QQ => {
            QQ.stopPropagation()
          },
          children: [(0, gQ.jsx)("div", {
            className: "ReplayUiVisibilityPopoverHeader",
            children: (0, gQ.jsx)("span", {
              className: "ReplayUiVisibilityPopoverTitle",
              children: "UI visibility"
            })
          }), (0, gQ.jsxs)("div", {
            className: "ReplayUiVisibilityPopoverChecks",
            children: [(0, gQ.jsxs)("div", {
              className: "ReplayUiVisibilityPopoverCheck",
              children: [(0, gQ.jsx)("input", {
                type: "checkbox",
                checked: BQ,
                onChange: QQ => {
                  VQ(QQ.target.checked)
                }
              }), (0, gQ.jsx)("span", {
                children: "SELECT ALL"
              })]
            }), Qz.e.map((QQ => {
              let {
                group: WQ,
                label: XQ
              } = QQ;
              return (0, gQ.jsxs)("label", {
                className: "ReplayUiVisibilityPopoverCheck",
                children: [(0, gQ.jsx)("input", {
                  type: "checkbox",
                  checked: IQ[WQ],
                  onChange: QQ => {
                    yQ(WQ, QQ.target.checked)
                  }
                }), (0, gQ.jsx)("span", {
                  children: XQ
                })]
              }, WQ)
            }))]
          })]
        }), document.body)
      })),
      wz = (0, qQ.memo)((function(QQ) {
        let {
          disabled: WQ
        } = QQ;
        const XQ = (0, qQ.useRef)(null),
          [wQ, TQ] = (0, qQ.useState)(!1),
          [zQ, sQ] = (0, qQ.useState)(null),
          FQ = (0, qQ.useCallback)((() => {
            XQ.current && (sQ(XQ.current.getBoundingClientRect()), TQ((QQ => !QQ)))
          }), []),
          PQ = (0, qQ.useCallback)((() => {
            TQ(!1)
          }), []);
        return (0, gQ.jsxs)(gQ.Fragment, {
          children: [(0, gQ.jsx)("div", {
            ref: XQ,
            children: (0, gQ.jsx)(oX.h, {
              className: "ReplayViewerActionButton",
              onClick: FQ,
              disabled: WQ,
              children: (0, gQ.jsx)("span", {
                children: "Hide UI elements"
              })
            })
          }), wQ && zQ && (0, gQ.jsx)(Xz, {
            anchorRect: zQ,
            anchorRef: XQ,
            onClose: PQ
          })]
        })
      })),
      qz = ["freeCamUp", "freeCamDown"];

    function Tz(QQ, WQ) {
      IQ.gameBridge.send("holdReplayFreecamVertical", {
        action: QQ,
        Ds: WQ
      })
    }
    const zz = (0, qQ.memo)((function() {
      (0, qQ.useEffect)((() => () => {
        ! function() {
          IQ.gameBridge.send("moveReplayFreecam", null);
          for (const QQ of qz) Tz(QQ, !1)
        }()
      }), []);
      const QQ = (0, qQ.useCallback)((QQ => {
          IQ.gameBridge.send("moveReplayFreecam", QQ)
        }), []),
        WQ = (0, qQ.useCallback)((QQ => ({
          onTouchStart: WQ => {
            WQ.preventDefault(), WQ.stopPropagation(), Tz(QQ, !0)
          },
          onTouchEnd: WQ => {
            WQ.preventDefault(), WQ.stopPropagation(), Tz(QQ, !1)
          },
          onTouchCancel: WQ => {
            WQ.preventDefault(), WQ.stopPropagation(), Tz(QQ, !1)
          }
        })), []);
      return (0, gQ.jsxs)("div", {
        className: "ReplayFreecamTouchControls",
        children: [(0, gQ.jsx)("div", {
          className: "ReplayFreecamJoystickWrap",
          children: (0, gQ.jsx)(hW, {
            onMove: QQ,
            mode: "pinned"
          })
        }), (0, gQ.jsxs)("div", {
          className: "ReplayFreecamVerticalButtons",
          children: [(0, gQ.jsx)("button", {
            type: "button",
            className: "ReplayFreecamVerticalButton",
            "aria-label": "Freecam up",
            ...WQ("freeCamUp"),
            children: (0, gQ.jsx)(kQ.d, {
              name: "angle-up",
              className: "ReplayFreecamVerticalIcon"
            })
          }), (0, gQ.jsx)("button", {
            type: "button",
            className: "ReplayFreecamVerticalButton",
            "aria-label": "Freecam down",
            ...WQ("freeCamDown"),
            children: (0, gQ.jsx)(kQ.d, {
              name: "angle-down",
              className: "ReplayFreecamVerticalIcon"
            })
          })]
        })]
      })
    }));
    var sz = XQ(3408);
    const Fz = [],
      Pz = "Failed to load recording";

    function gz(QQ, WQ, XQ) {
      var wQ;
      console.error(WQ), zX.NotificationProvider.showAlertPopup({
        title: QQ,
        subtitle: null !== (wQ = (0, VT.i)(WQ)) && void 0 !== wQ ? wQ : XQ,
        confirmText: "OK"
      })
    }

    function Jz(QQ) {
      gz(Pz, QQ, VT.b.cantOpen.text)
    }
    const rz = (0, qQ.memo)((function() {
        const QQ = (0, ZQ.l)(),
          {
            gameState: WQ
          } = (0, HQ.n)(["gameState"]),
          XQ = "inGame" === WQ;
        return (0, dQ.b)("replayViewerRequested", (QQ => {
          (0, ZQ.j)("toggle" === QQ ? !(0, ZQ.f)() : "open" === QQ)
        })), (0, qQ.useEffect)((() => {
          XQ && (0, GT.f)().then((QQ => {
            if (null !== QQ) return (0, ZQ.j)(!0), (0, IT.b)().open(QQ.bytes, QQ.source)
          })).catch((QQ => {
            (0, ZQ.j)(!0), Jz(QQ)
          }))
        }), [XQ]), QQ ? (0, gQ.jsx)(Iz, {}) : null
      })),
      Iz = (0, qQ.memo)((function() {
        var QQ, WQ, XQ, wQ, TQ, sQ, FQ, PQ, JQ, rQ, jQ, BQ;
        const yQ = qQ.useRef(null),
          [VQ, DQ] = (0, qQ.useState)(1),
          [pQ, GQ] = (0, qQ.useState)(null),
          [UQ, bQ] = (0, qQ.useState)(!1),
          {
            isTouchScreen: vQ
          } = (0, HQ.n)(["isTouchScreen"]),
          lQ = (0, dQ.e)("replay"),
          hQ = (0, dQ.e)("replayEdits"),
          iQ = null !== lQ,
          cQ = null !== (QQ = null === lQ || void 0 === lQ ? void 0 : lQ.fJ) && void 0 !== QQ ? QQ : 0,
          AQ = null !== (WQ = null === lQ || void 0 === lQ ? void 0 : lQ.totalTicks) && void 0 !== WQ ? WQ : 0,
          RQ = Math.max(0, AQ - 1),
          EQ = null !== (XQ = null === lQ || void 0 === lQ ? void 0 : lQ.playing) && void 0 !== XQ && XQ,
          CQ = null !== (wQ = null === lQ || void 0 === lQ ? void 0 : lQ.speed) && void 0 !== wQ ? wQ : 1,
          uQ = null !== (TQ = null === lQ || void 0 === lQ ? void 0 : lQ.qE) && void 0 !== TQ ? TQ : 20,
          fQ = null !== pQ && void 0 !== pQ ? pQ : cQ,
          SQ = null !== (sQ = null === lQ || void 0 === lQ ? void 0 : lQ.freecam) && void 0 !== sQ && sQ,
          tQ = null !== (FQ = null === lQ || void 0 === lQ ? void 0 : lQ.cameraMode) && void 0 !== FQ ? FQ : "recording",
          oQ = null !== (PQ = null === hQ || void 0 === hQ ? void 0 : hQ.cameraKeyframes) && void 0 !== PQ ? PQ : Fz,
          eQ = null !== (JQ = null === hQ || void 0 === hQ ? void 0 : hQ.playbackMark) && void 0 !== JQ ? JQ : null,
          nQ = null !== (rQ = null === hQ || void 0 === hQ ? void 0 : hQ.fileName) && void 0 !== rQ ? rQ : null,
          xQ = null !== (jQ = null === hQ || void 0 === hQ ? void 0 : hQ.unsavedChanges) && void 0 !== jQ && jQ,
          YQ = null !== (BQ = null === hQ || void 0 === hQ ? void 0 : hQ.suggestSaveAs) && void 0 !== BQ && BQ,
          NQ = (0, dQ.e)("replayVideoExporting"),
          OQ = !NQ && iQ && ("freecam" === tQ || ("recording" === tQ || "keyframe" === tQ) && !EQ),
          KQ = vQ && iQ && "freecam" === tQ && !NQ && !UQ;
        (0, UT.c)(!0, !0, "ReplayViewerOverlay"), (0, qQ.useEffect)((() => {
          IQ.gameBridge.send("syncReplayCameraMode", null)
        }), [SQ]);
        const mQ = (0, qQ.useCallback)(((QQ, WQ) => {
            IQ.gameBridge.send("seekReplay", {
              fJ: QQ,
              ignorePlaybackMark: null === WQ || void 0 === WQ ? void 0 : WQ.ignorePlaybackMark
            })
          }), []),
          MQ = (0, qQ.useCallback)((() => {
            IQ.gameBridge.send("setReplayPlaying", !1)
          }), []),
          QW = (0, qQ.useCallback)(((QQ, WQ) => {
            IQ.gameBridge.send("moveReplayCameraKeyframe", {
              from: QQ,
              to: WQ
            })
          }), []),
          WW = (0, qQ.useCallback)((QQ => {
            IQ.gameBridge.send("setReplayCameraKeyframe", QQ)
          }), []),
          XW = (0, qQ.useCallback)((QQ => {
            IQ.gameBridge.send("deleteReplayCameraKeyframes", {
              start: QQ,
              end: QQ
            })
          }), []),
          wW = (0, qQ.useCallback)((QQ => {
            IQ.gameBridge.send("deleteReplayCameraKeyframes", {
              start: QQ.startTick,
              end: QQ.endTick
            })
          }), []),
          qW = (0, qQ.useCallback)((() => IQ.gameBridge.lookup("replayCamera", null)), []),
          TW = (0, qQ.useCallback)((QQ => {
            GQ(QQ)
          }), []),
          zW = (0, qQ.useCallback)((QQ => {
            IQ.gameBridge.send("setReplayPlaybackMark", {
              inTick: QQ.startTick,
              outTick: QQ.endTick
            })
          }), []),
          sW = (0, qQ.useCallback)((() => {
            IQ.gameBridge.send("setReplayPlaybackMark", null)
          }), []),
          FW = (0, qQ.useCallback)((QQ => {
            const WQ = IQ.gameBridge.latest("replay");
            if (null === WQ || QQ.endTick <= QQ.startTick) return;
            const XQ = QQ.startTick,
              wQ = QQ.endTick;
            zX.NotificationProvider.showPromptPopup({
              title: "Crop recording to the selected range? This cannot be undone.",
              confirmText: "Crop",
              destructive: !0,
              cancelText: "Cancel"
            }).getResult().then((QQ => {
              var qQ;
              if (!0 !== QQ) return;
              if ((null === (qQ = IQ.gameBridge.latest("replay")) || void 0 === qQ ? void 0 : qQ.id) !== WQ.id) return;
              IQ.gameBridge.send("cropReplay", {
                start: XQ,
                end: wQ
              }) && (GQ(null), DQ(1))
            }))
          }), []),
          PW = (0, qQ.useCallback)(((QQ, WQ) => {
            DQ(1), GQ(null), (0, IT.b)().open(QQ, WQ).catch(Jz)
          }), []),
          gW = (0, qQ.useCallback)(((QQ, WQ) => {
            null !== IQ.gameBridge.latest("connectedGame").websocketUrl ? zX.NotificationProvider.showPromptPopup({
              title: "Leave current game and play recording?",
              confirmText: "Yes",
              cancelText: "No"
            }).getResult().then((XQ => {
              !0 === XQ && PW(QQ, WQ)
            })) : PW(QQ, WQ)
          }), [PW]),
          JW = (0, qQ.useCallback)((QQ => {
            var WQ;
            const XQ = null === (WQ = QQ.target.files) || void 0 === WQ ? void 0 : WQ[0];
            if (QQ.target.value = "", !XQ) return;
            const wQ = new FileReader;
            wQ.onload = () => {
              gW(new Uint8Array(wQ.result), {
                fileName: XQ.name
              })
            }, wQ.onerror = () => {
              Jz(wQ.error)
            }, wQ.readAsArrayBuffer(XQ)
          }), [gW]),
          rW = (0, qQ.useCallback)((() => {
            const QQ = () => {
              null !== yQ.current && (0, sz.d)(yQ.current)
            };
            (0, yT.l)() ? (0, yT.h)().then((QQ => {
              QQ && gW(QQ.bytes, {
                fileHandle: QQ.handle
              })
            })).catch((WQ => {
              console.error(WQ), zX.NotificationProvider.showPromptPopup({
                title: Pz,
                confirmText: "Choose file",
                cancelText: "Cancel"
              }).getResult().then((WQ => {
                !0 === WQ && QQ()
              }))
            })): QQ()
          }), [gW]),
          IW = (0, qQ.useCallback)((async function() {
            let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            let WQ;
            try {
              WQ = await pT(QQ, {
                files: (0, IT.b)(),
                pickerSupported: yT.l,
                chooseFile: yT.d,
                write: yT.n,
                download: BT.j,
                onFallback: console.error
              })
            } catch (XQ) {
              return void gz("Failed to save recording", XQ)
            }
            "written" !== WQ && "downloaded" !== WQ || (() => {
              const QQ = zX.NotificationProvider.showAlertPopup({
                title: "Recording saved",
                disableBackground: !0
              });
              setTimeout((() => {
                QQ.tearDownNotification()
              }), 1e3)
            })()
          }), []),
          jW = (0, qQ.useCallback)((QQ => {
            IQ.gameBridge.send("replayAction", QQ)
          }), []),
          BW = (0, qQ.useCallback)((QQ => {
            DQ((WQ => hT(WQ, QQ)))
          }), []),
          yW = (0, qQ.useCallback)((QQ => {
            if (!IQ.gameBridge.latest("replayVideoExporting")) switch (QQ) {
              case "replayLoad":
                rW();
                break;
              case "replaySave":
                IW(!1);
                break;
              case "replaySaveAs":
                IW(!0);
                break;
              case "replayTimelineZoomIn":
                BW("in");
                break;
              case "replayTimelineZoomOut":
                BW("out")
            }
          }), [rW, IW, BW]);
        (0, dQ.b)("replayUiActionRequested", yW);
        const VW = (0, qQ.useCallback)((QQ => {
            IQ.gameBridge.send("setReplayCameraMode", QQ)
          }), []),
          DW = iQ ? oX.h : oX.s,
          pW = xQ && !YQ ? oX.s : oX.h,
          GW = xQ && YQ ? oX.s : oX.h;
        return (0, gQ.jsxs)("div", {
          className: "ReplayViewerOverlay",
          children: [(0, gQ.jsx)(MT, {
            enabled: OQ
          }), KQ && (0, gQ.jsx)(zz, {}), (0, gQ.jsx)("input", {
            ref: yQ,
            type: "file",
            accept: BT.d,
            className: "ReplayViewerFileInput",
            onChange: JW
          }), (0, gQ.jsxs)("div", {
            className: zQ()("ReplayViewerBar", {
              Collapsed: UQ
            }),
            children: [(0, gQ.jsx)("button", {
              type: "button",
              className: "ReplayViewerCollapseTab",
              onClick: () => {
                UQ ? bQ(!1) : iQ ? bQ(!0) : (0, ZQ.e)()
              },
              "aria-expanded": !UQ,
              "aria-label": UQ ? "Expand replay viewer" : "Collapse replay viewer",
              children: (0, gQ.jsx)(kQ.d, {
                name: UQ ? "angle-up" : "angle-down"
              })
            }), !UQ && (0, gQ.jsxs)("div", {
              className: "ReplayViewerBarBody",
              children: [iQ && AQ > 0 && (0, gQ.jsx)(mT, {
                maxTick: RQ,
                displayTick: fQ,
                qE: uQ,
                cameraKeyframes: oQ,
                playbackMark: eQ,
                onSeek: mQ,
                onPause: MQ,
                onScrubTickChange: TW,
                onMoveCameraKeyframe: QW,
                onUpdateCameraKeyframe: WW,
                onDeleteCameraKeyframe: XW,
                onUseCurrentCamera: qW,
                onMarkRange: zW,
                onCropRange: FW,
                onDeleteKeyframesInRange: wW,
                onClearMark: sW,
                zoomLevel: VQ,
                onZoomLevelChange: DQ
              }, RQ), (0, gQ.jsxs)("div", {
                className: "ReplayViewerControls",
                children: [(0, gQ.jsxs)("div", {
                  className: "ReplayViewerControlsLeftSide",
                  children: [(0, gQ.jsxs)("div", {
                    className: "ReplayViewerControlsGroup FileGroup",
                    children: [iQ && (0, gQ.jsxs)("div", {
                      className: "ReplayViewerFileName",
                      children: [null !== nQ && void 0 !== nQ ? nQ : "Unsaved recording", xQ ? " *" : ""]
                    }), (0, gQ.jsxs)(DW, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        yW("replayLoad")
                      },
                      children: [(0, gQ.jsx)(aQ.b, {
                        noaAction: "replayLoad",
                        padHidesKey: !0
                      }), (0, gQ.jsx)("span", {
                        children: " Load "
                      })]
                    }), (0, gQ.jsxs)(oX.h, {
                      className: "ReplayViewerActionButton",
                      onClick: ZQ.e,
                      children: [(0, gQ.jsx)(aQ.b, {
                        noaAction: "replayViewerOpen",
                        padHidesKey: !0
                      }), (0, gQ.jsx)("span", {
                        children: " Hide "
                      })]
                    }), (0, gQ.jsxs)(pW, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        yW("replaySave")
                      },
                      disabled: !iQ,
                      children: [(0, gQ.jsx)(aQ.b, {
                        noaAction: "replaySave",
                        padHidesKey: !0
                      }), (0, gQ.jsx)("span", {
                        children: " Save "
                      })]
                    }), (0, gQ.jsxs)(oX.h, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        IQ.gameBridge.send("leaveGame", {
                          reloadPath: "/"
                        })
                      },
                      disabled: !iQ,
                      children: [(0, gQ.jsx)(aQ.b, {
                        noaAction: "replayExit",
                        padHidesKey: !0
                      }), (0, gQ.jsx)("span", {
                        children: " Exit "
                      })]
                    }), (0, gQ.jsxs)(GW, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        yW("replaySaveAs")
                      },
                      disabled: !iQ,
                      children: [(0, gQ.jsx)(aQ.b, {
                        noaAction: "replaySaveAs",
                        padHidesKey: !0
                      }), (0, gQ.jsx)("span", {
                        children: " Save As "
                      })]
                    }), (0, gQ.jsxs)(oX.h, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        IQ.gameBridge.send("exportReplayVideo", null)
                      },
                      disabled: !iQ || 0 === AQ || NQ,
                      children: [(0, gQ.jsx)(aQ.b, {
                        noaAction: "replayExportVideo",
                        padHidesKey: !0
                      }), (0, gQ.jsx)("span", {
                        children: " Export "
                      })]
                    })]
                  }), (0, gQ.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, gQ.jsxs)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: [(0, gQ.jsx)("span", {
                        children: " Camera Mode "
                      }), (0, gQ.jsx)(aQ.b, {
                        noaAction: "replayChangeCameraMode",
                        padHidesKey: !0
                      })]
                    }), (0, gQ.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody CameraModes",
                      children: [(0, gQ.jsx)(LQ.e, {
                        tooltipInner: (0, gQ.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Replicate how the camera was set when recorded."
                        }),
                        children: (0, gQ.jsxs)(oX.T, {
                          className: "ReplayViewerModeButton",
                          active: "recording" === tQ,
                          onClick: () => {
                            VW("recording")
                          },
                          disabled: !iQ,
                          children: ["Recorded ", (0, gQ.jsx)(kQ.d, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, gQ.jsx)(LQ.e, {
                        tooltipInner: (0, gQ.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Move the camera freely around."
                        }),
                        children: (0, gQ.jsxs)(oX.T, {
                          className: "ReplayViewerModeButton",
                          active: "freecam" === tQ,
                          onClick: () => {
                            VW("freecam")
                          },
                          disabled: !iQ,
                          children: ["Free ", (0, gQ.jsx)(kQ.d, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, gQ.jsx)(LQ.e, {
                        tooltipInner: (0, gQ.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Display the replay in real time using keyframes."
                        }),
                        children: (0, gQ.jsxs)(oX.T, {
                          className: "ReplayViewerModeButton",
                          active: "keyframe" === tQ,
                          onClick: () => {
                            VW("keyframe")
                          },
                          disabled: !iQ,
                          children: ["Preview ", (0, gQ.jsx)(kQ.d, {
                            name: "circle-info"
                          })]
                        })
                      })]
                    })]
                  })]
                }), (0, gQ.jsxs)("div", {
                  className: "ReplayViewerControlsGroup TimeGroup",
                  children: [(0, gQ.jsxs)("div", {
                    className: "ReplayViewerTimecodeContainer",
                    children: [(0, gQ.jsxs)("span", {
                      className: "ReplayViewerTimecode",
                      children: [(0, gQ.jsx)("span", {
                        className: "ReplayViewerTimecodeNow",
                        children: aT(fQ, uQ)
                      }), (0, gQ.jsx)("span", {
                        className: "ReplayViewerTimecodeDivider",
                        children: "/"
                      }), (0, gQ.jsx)("span", {
                        className: "ReplayViewerTimecodeTotal",
                        children: aT(RQ, uQ)
                      })]
                    }), (0, gQ.jsxs)("span", {
                      className: "ReplayViewerTickLabel",
                      children: ["Tick ", fQ, " / ", RQ]
                    })]
                  }), (0, gQ.jsxs)("div", {
                    className: "ReplayViewerTimecodeControls",
                    children: [(0, gQ.jsxs)(oX.h, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        jW("replaySkipBack")
                      },
                      disabled: !iQ,
                      children: [(0, gQ.jsxs)("span", {
                        children: [" ", (0, gQ.jsx)(kQ.d, {
                          name: "clock-rotate-left"
                        }), " 1s"]
                      }), (0, gQ.jsx)(aQ.b, {
                        noaAction: "replaySkipBack",
                        padHidesKey: !0
                      })]
                    }), (0, gQ.jsxs)(oX.s, {
                      className: "ReplayViewerMediaButton PlayButton",
                      onClick: () => {
                        IQ.gameBridge.send("setReplayPlaying", !EQ)
                      },
                      disabled: !iQ,
                      children: [(0, gQ.jsxs)("span", {
                        children: [" ", EQ ? (0, gQ.jsx)(kQ.d, {
                          name: "pause"
                        }) : (0, gQ.jsx)(kQ.d, {
                          name: "play"
                        }), " "]
                      }), (0, gQ.jsx)(aQ.b, {
                        noaAction: "replayPlayPause",
                        padHidesKey: !0
                      })]
                    }), (0, gQ.jsxs)(oX.h, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        jW("replaySkipForward")
                      },
                      disabled: !iQ,
                      children: [(0, gQ.jsxs)("span", {
                        children: [" ", (0, gQ.jsx)(kQ.d, {
                          name: "rotate-forward"
                        }), " 1s"]
                      }), (0, gQ.jsx)(aQ.b, {
                        noaAction: "replaySkipForward",
                        padHidesKey: !0
                      })]
                    })]
                  })]
                }), (0, gQ.jsxs)("div", {
                  className: "ReplayViewerControlsRightSide",
                  children: [(0, gQ.jsxs)("div", {
                    className: "ReplayViewerControlsGroup RecordKeyframeGroup",
                    children: [(0, gQ.jsxs)(oX.s, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        jW("replayRecordKeyframe")
                      },
                      disabled: !iQ,
                      children: [(0, gQ.jsx)(aQ.b, {
                        noaAction: "replayRecordKeyframe",
                        padHidesKey: !0
                      }), (0, gQ.jsx)("span", {
                        children: " Record keyframe "
                      })]
                    }), (0, gQ.jsx)(wz, {
                      disabled: !iQ
                    }), eQ && (0, gQ.jsx)(oX.T, {
                      className: "ReplayViewerActionButton",
                      onClick: sW,
                      disabled: !iQ,
                      children: (0, gQ.jsx)("span", {
                        children: " Clear range "
                      })
                    })]
                  }), (0, gQ.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, gQ.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Speed"
                    }), (0, gQ.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, gQ.jsx)(oX.h, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          jW("replaySpeedDown")
                        },
                        disabled: !iQ || (0, jT.e)(CQ),
                        children: (0, gQ.jsx)("span", {
                          children: " \u2212 "
                        })
                      }), (0, gQ.jsxs)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: [CQ, "\xd7"]
                      }), (0, gQ.jsx)(oX.h, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          jW("replaySpeedUp")
                        },
                        disabled: !iQ || (0, jT.c)(CQ),
                        children: (0, gQ.jsx)("span", {
                          children: " + "
                        })
                      })]
                    })]
                  }), (0, gQ.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, gQ.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Timeline Zoom"
                    }), (0, gQ.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, gQ.jsxs)(oX.h, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          yW("replayTimelineZoomOut")
                        },
                        disabled: !iQ || VQ <= bT[0],
                        children: [(0, gQ.jsx)("span", {
                          children: " \u2212 "
                        }), (0, gQ.jsx)(aQ.b, {
                          noaAction: "replayTimelineZoomOut",
                          padHidesKey: !0
                        })]
                      }), (0, gQ.jsx)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: lT(VQ)
                      }), (0, gQ.jsxs)(oX.h, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          yW("replayTimelineZoomIn")
                        },
                        disabled: !iQ || VQ >= bT[bT.length - 1],
                        children: [(0, gQ.jsx)("span", {
                          children: " + "
                        }), (0, gQ.jsx)(aQ.b, {
                          noaAction: "replayTimelineZoomIn",
                          padHidesKey: !0
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0, gQ.jsx)("div", {
                className: "ReplayViewerEmptyState",
                children: !iQ && "Load a recording to begin playback"
              })]
            })]
          })]
        })
      }));
    var jz = XQ(1376);

    function Bz() {
      const [, QQ] = (0, qQ.useState)(0);
      return (0, FQ.f)("replayViewer|uiVisibilityChanged", (() => {
          QQ((QQ => QQ + 1))
        })), (0, FQ.f)("replayViewer|replayLoaded", (() => {
          QQ((QQ => QQ + 1))
        })),
        function() {
          if (!(0, jz.i)()) return {};
          const QQ = {
              [Qz.c]: "true"
            },
            WQ = (0, Wz.d)();
          for (const {
              group: XQ,
              dataAttr: wQ
            }
            of Qz.e) wQ && !WQ[XQ] && (QQ[wQ] = "true");
          return QQ
        }()
    }
    var yz = XQ(34494),
      Vz = XQ(2136),
      Dz = XQ(9119),
      pz = XQ(9106),
      Gz = XQ(2149);
    const Uz = (0, qQ.memo)((function() {
      var QQ, WQ, XQ;
      const wQ = (0, GQ.g)("customButtons");
      (0, qQ.useEffect)((() => wQ ? (IQ.gameBridge.send("bindCustomButtonKeys", wQ.filter(Dz.i).map((QQ => {
        let {
          id: WQ,
          keycode: XQ
        } = QQ;
        return {
          id: WQ,
          keycode: XQ
        }
      }))), () => {
        IQ.gameBridge.send("bindCustomButtonKeys", [])
      }) : () => {}), [wQ]);
      const TQ = null !== (QQ = null === wQ || void 0 === wQ ? void 0 : wQ.filter(Dz.i)) && void 0 !== QQ ? QQ : [],
        zQ = (0, pz.l)(),
        sQ = null !== (WQ = null === (XQ = (0, Gz.c)()) || void 0 === XQ ? void 0 : XQ.hideButtonHints) && void 0 !== WQ && WQ,
        FQ = "customButton" !== (null === zQ || void 0 === zQ ? void 0 : zQ.kind) || sQ ? null : zQ.id,
        PQ = TQ.length > 0,
        JQ = (0, qQ.useRef)(null);
      return (0, qQ.useLayoutEffect)((() => {
        if (!PQ) return () => {};
        const QQ = JQ.current,
          WQ = QQ.closest(".InGameUi"),
          XQ = () => {
            WQ.style.setProperty("--custom-buttons-top", `${QQ.offsetTop}px`)
          };
        XQ();
        const wQ = new ResizeObserver(XQ);
        return wQ.observe(QQ), wQ.observe(QQ.parentElement), () => {
          wQ.disconnect(), WQ.style.removeProperty("--custom-buttons-top")
        }
      }), [PQ]), (0, gQ.jsx)("div", {
        ref: JQ,
        className: "" + ((0, TX.isMobile)() ? "CustomIconsMobile" : "CustomIcons"),
        children: TQ.map((QQ => {
          var WQ, XQ;
          return (0, gQ.jsx)(bz, {
            button: QQ,
            padGlyph: QQ.id === FQ && null !== (WQ = null === (XQ = (0, oQ.f)()) || void 0 === XQ ? void 0 : XQ.getBoundButton("actionButton")) && void 0 !== WQ ? WQ : null
          }, QQ.id)
        }))
      })
    }));

    function bz(QQ) {
      let {
        button: WQ,
        padGlyph: XQ
      } = QQ;
      const wQ = (0, qQ.useRef)(null),
        TQ = () => {
          null !== wQ.current && (wQ.current = null, IQ.gameBridge.send("pressCustomButton", {
            id: WQ.id,
            down: !1
          }))
        };
      (0, qQ.useEffect)((() => TQ), []);
      const zQ = OW(TQ, {
          pressesOnPointerDown: !0
        }),
        sQ = QQ => {
          wQ.current === QQ.pointerId && TQ()
        };
      return (0, gQ.jsxs)("div", {
        className: "CustomIcon",
        ...zQ,
        onLostPointerCapture: sQ,
        children: [(0, gQ.jsx)(Vz.b, {
          icon: WQ.icon,
          keyboardHint: (0, Dz.e)(WQ.keycode),
          padGlyph: XQ,
          onPointerDown: QQ => {
            try {
              QQ.currentTarget.setPointerCapture(QQ.pointerId)
            } catch {
              return
            }
            null === wQ.current && IQ.gameBridge.send("pressCustomButton", {
              id: WQ.id,
              down: !0
            }), wQ.current = QQ.pointerId
          },
          onPointerUp: sQ,
          onPointerCancel: sQ,
          showTouchTutorialPubSubId: !1,
          showRedDotPubSubId: !1
        }), WQ.description && (0, gQ.jsx)("div", {
          className: "CustomIconDescription SmallTextBold",
          children: WQ.description
        })]
      })
    }
    var vz = XQ(2524),
      dz = XQ(291);
    const Hz = {
      frame: QQ => {
        const WQ = requestAnimationFrame((() => {
          QQ()
        }));
        return () => {
          cancelAnimationFrame(WQ)
        }
      },
      afterFrame: QQ => {
        const WQ = setTimeout(QQ, 0);
        return () => {
          clearTimeout(WQ)
        }
      }
    };
    class az {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dz.e,
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Hz,
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
        this.idle = QQ, this.frames = WQ, this.onHiddenMount = XQ, this.waiting = [], this.cancelIdle = null, this.cancelFrame = null, this.cancelAfterFrame = null, this.starvedFrames = 0, this.shown = !1
      }
      request(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.shown ? (QQ(), () => {}) : (WQ ? this.waiting.unshift(QQ) : this.waiting.push(QQ), this.schedule(), () => {
          const WQ = this.waiting.indexOf(QQ);
          WQ >= 0 && (this.waiting.splice(WQ, 1), this.settle())
        })
      }
      show() {
        for (this.shown = !0; this.waiting.length > 0;) this.mountNext()
      }
      schedule() {
        0 !== this.waiting.length && (this.cancelIdle ??= this.idle((QQ => {
          for (this.cancelIdle = null; this.waiting.length > 0 && QQ.timeRemaining() >= 8;) this.mountNext();
          this.schedule()
        })), this.cancelFrame ??= this.frames.frame((() => {
          this.cancelFrame = null, this.starvedFrames++, this.starvedFrames >= 4 && (this.cancelAfterFrame ??= this.frames.afterFrame((() => {
            this.cancelAfterFrame = null, this.mountNext(), this.schedule()
          }))), this.schedule()
        })))
      }
      mountNext() {
        this.starvedFrames = 0;
        const QQ = this.waiting.shift(),
          WQ = !this.shown,
          XQ = performance.now();
        try {
          QQ()
        } finally {
          WQ && this.onHiddenMount(performance.now() - XQ), this.settle()
        }
      }
      settle() {
        0 === this.waiting.length && this.stop()
      }
      stop() {
        var QQ, WQ, XQ;
        null === (QQ = this.cancelIdle) || void 0 === QQ || QQ.call(this), this.cancelIdle = null, null === (WQ = this.cancelFrame) || void 0 === WQ || WQ.call(this), this.cancelFrame = null, null === (XQ = this.cancelAfterFrame) || void 0 === XQ || XQ.call(this), this.cancelAfterFrame = null
      }
    }
    const lz = (0, qQ.createContext)(null);

    function hz(QQ) {
      let {
        children: WQ,
        first: XQ = !1
      } = QQ;
      const wQ = (0, qQ.useContext)(lz),
        [TQ, zQ] = (0, qQ.useState)(null === wQ);
      return (0, qQ.useEffect)((() => {
        if (!TQ && null !== wQ) return wQ.request((() => {
          zQ(!0)
        }), XQ)
      }), [XQ, TQ, wQ]), TQ ? (0, qQ.createElement)(qQ.Fragment, null, WQ) : null
    }
    const iz = (0, qQ.memo)((function(QQ) {
        let {
          shown: WQ
        } = QQ;
        const [XQ] = (0, qQ.useState)((() => new BQ.g(WQ))), [TQ] = (0, qQ.useState)((() => WQ ? null : new az(void 0, void 0, (QQ => {
          wQ.d.noteWorkDuringAdmissionWait(QQ)
        }))));
        return (0, qQ.useLayoutEffect)((() => {
          WQ && (null === TQ || void 0 === TQ || TQ.show(), XQ.show())
        }), [WQ, XQ, TQ]), (0, gQ.jsx)(BQ.d.Provider, {
          value: XQ,
          children: (0, gQ.jsx)(lz.Provider, {
            value: TQ,
            children: (0, gQ.jsx)(cz, {})
          })
        })
      })),
      cz = (0, qQ.memo)((function() {
        const {
          isUiHidden: QQ,
          isUiHiddenByCamera: WQ,
          worldPanelHud: XQ,
          isTouchScreen: wQ
        } = (0, HQ.n)(["isUiHidden", "isUiHiddenByCamera", "worldPanelHud", "isTouchScreen"]), TQ = (0, Fq.e)(), sQ = Bz(), FQ = (0, BQ.k)(), PQ = (0, qQ.useRef)(null), JQ = (0, GQ.g)("showKillfeed");
        return function() {
            const QQ = (0, BQ.k)();
            (0, qQ.useEffect)((() => QQ.whenShown(yQ)), [QQ])
          }(),
          function() {
            const QQ = (0, GQ.g)("inventoryColourOverride");
            (0, qQ.useEffect)((() => {
              if (!QQ) return;
              const {
                panel: WQ,
                slot: XQ,
                slotSelected: wQ,
                slotUnavailable: qQ
              } = nQ(QQ), TQ = document.documentElement.style;
              return TQ.setProperty("--InventoryPanelColour", WQ), TQ.setProperty("--InventorySlotColour", XQ), TQ.setProperty("--InventorySlotSelectedColour", wQ), TQ.setProperty("--InventorySlotUnavailableColour", qQ), () => {
                TQ.removeProperty("--InventoryPanelColour"), TQ.removeProperty("--InventorySlotColour"), TQ.removeProperty("--InventorySlotSelectedColour"), TQ.removeProperty("--InventorySlotUnavailableColour")
              }
            }), [QQ])
          }(), (0, qQ.useLayoutEffect)((() => FQ.whenShown((() => {
            var QQ;
            null === (QQ = PQ.current) || void 0 === QQ || QQ.classList.remove("PreMounted")
          }))), [FQ]), (0, gQ.jsxs)(gQ.Fragment, {
            children: [(0, gQ.jsxs)("div", {
              ref: PQ,
              className: zQ()("InGameUi", {
                PreMounted: !FQ.shown,
                Hidden: QQ,
                HiddenByCamera: WQ,
                HiddenByWorldPanel: null !== XQ,
                WorldPanelTouchControl: "touchControls" === XQ
              }),
              ...sQ,
              children: [(0, gQ.jsxs)(hz, {
                children: [(0, gQ.jsx)(ww.b, {}), (0, gQ.jsx)(Fw, {})]
              }), (0, gQ.jsx)(BQ.i, {
                children: (0, gQ.jsx)(Pw, {})
              }), (0, gQ.jsxs)(hz, {
                children: [(0, gQ.jsx)(Eq, {}), (0, gQ.jsx)(tq, {}), wQ && (0, gQ.jsx)(eq, {})]
              }), (0, gQ.jsxs)(hz, {
                children: [(0, gQ.jsx)(RX, {}), (0, gQ.jsx)(bw.e, {}), (0, gQ.jsx)(iw, {})]
              }), (0, gQ.jsx)(BQ.i, {
                children: (0, gQ.jsx)(Xw, {})
              }), (0, gQ.jsxs)(hz, {
                children: [(0, gQ.jsx)(kq.d, {}), (0, gQ.jsx)(rz, {})]
              }), (0, gQ.jsxs)(hz, {
                children: [(0, gQ.jsx)(XT.g, {}), (0, gQ.jsx)(wT.f, {})]
              }), (0, gQ.jsx)(hz, {
                children: (0, gQ.jsx)(CX.o, {})
              }), (0, gQ.jsx)(hz, {
                children: (0, gQ.jsx)(kz, {
                  showChat: TQ
                })
              }), (0, gQ.jsxs)(hz, {
                children: [(0, gQ.jsx)(TT, {}), (0, gQ.jsx)(Lq, {})]
              }), (0, gQ.jsxs)("div", {
                className: zQ()("RightElements", {
                  RightElementsTouchscreen: wQ
                }),
                "data-camera-keeper-host": "",
                children: [(0, gQ.jsxs)("div", {
                  className: kw.i,
                  "data-holds-camera-keeper": "",
                  children: [(0, gQ.jsxs)("div", {
                    className: "TopRightElementsLeft",
                    "data-holds-camera-keeper": "",
                    children: [(0, gQ.jsx)(hz, {
                      children: (0, gQ.jsx)(bq.e, {})
                    }), (0, gQ.jsxs)(hz, {
                      children: [(0, gQ.jsx)(fQ, {}), (0, gQ.jsx)(ew.b, {})]
                    }), TX.featureFlags.useSocialFeatures && (0, gQ.jsx)(BQ.i, {
                      children: (0, gQ.jsx)(nw.d, {
                        placement: "inGame"
                      })
                    }), TX.featureFlags.useSocialFeatures && (0, gQ.jsx)(BQ.i, {
                      children: (0, gQ.jsx)(wq, {})
                    }), JQ && (0, gQ.jsx)(BQ.i, {
                      children: (0, gQ.jsx)(Uw, {})
                    }), (0, gQ.jsx)(hz, {
                      children: (0, gQ.jsx)(yz.c, {})
                    })]
                  }), TX.featureFlags.useSocialFeatures && (0, gQ.jsx)("div", {
                    className: "TopRightElementsRight",
                    children: (0, gQ.jsx)(hz, {
                      children: (0, gQ.jsx)(Aq.b, {})
                    })
                  })]
                }), (0, gQ.jsxs)(hz, {
                  children: [(0, gQ.jsx)(CX.c, {
                    placement: "topRight"
                  }), (0, gQ.jsx)(fz, {})]
                })]
              }), (0, gQ.jsx)("div", {
                className: "LeftCentre",
                children: (0, gQ.jsx)(hz, {
                  children: (0, gQ.jsx)(Uz, {})
                })
              }), (0, gQ.jsxs)("div", {
                className: "BottomCentre",
                "data-holds-camera-keeper": wQ ? "" : void 0,
                children: [(0, gQ.jsx)(BQ.i, {
                  children: (0, gQ.jsx)(AQ, {})
                }), (0, gQ.jsx)(hz, {
                  children: (0, gQ.jsx)(Rz, {})
                }), (0, gQ.jsxs)("div", {
                  className: "BottomElements",
                  "data-holds-camera-keeper": wQ ? "" : void 0,
                  children: [(0, gQ.jsx)("div", {
                    className: zQ()("BottomLeftElements", {
                      Touch: wQ
                    }),
                    children: (0, gQ.jsxs)(hz, {
                      children: [(0, gQ.jsx)(zq, {}), !wQ && (0, gQ.jsx)(vz.c, {})]
                    })
                  }), (0, gQ.jsx)(hz, {
                    children: (0, gQ.jsx)(Lz, {})
                  }), (0, gQ.jsx)(hz, {
                    children: (0, gQ.jsx)(Rw, {
                      isTouchScreen: wQ
                    })
                  })]
                })]
              }), (0, gQ.jsx)("div", {
                className: "MiddleLeft"
              }), wQ && (0, gQ.jsx)(hz, {
                children: (0, gQ.jsx)(jX, {})
              }), (0, gQ.jsx)("div", {
                className: "CameraFadeHost",
                ref: vW.k
              })]
            }), (0, gQ.jsx)(BQ.i, {
              children: (0, gQ.jsx)(rT.b, {})
            }), (0, gQ.jsx)(BQ.i, {
              children: (0, gQ.jsx)(QT, {})
            }), (0, gQ.jsx)(hz, {
              first: !0,
              children: (0, gQ.jsx)(sq.d, {})
            }), (0, gQ.jsx)(BQ.i, {
              children: (0, gQ.jsx)(Az, {})
            })]
          })
      }));

    function Az() {
      return (0, qQ.useEffect)((() => {
        const QQ = setTimeout((() => {
          (0, UQ.g)()
        }), 0);
        return () => {
          clearTimeout(QQ), UQ.k.JV(!1)
        }
      }), []), null
    }
    const Rz = (0, qQ.memo)((function() {
        const QQ = (0, FQ.j)("aimingOverlay", "none");
        (0, DQ.d)();
        const WQ = (0, GQ.h)("middleTextUpper"),
          XQ = (0, GQ.h)("middleTextLower");
        return (0, gQ.jsxs)("div", {
          className: "MiddleTextBottom",
          style: "sniper" === QQ ? {
            visibility: "hidden"
          } : {},
          children: [(0, gQ.jsx)(uz, {
            text: WQ,
            className: "MiddleText MiddleTextUpper SmallTextBold",
            maxHeightFraction: Ez
          }), (0, gQ.jsx)(uz, {
            text: XQ,
            className: "MiddleText",
            maxHeightFraction: Cz
          })]
        })
      })),
      Ez = .3,
      Cz = .2;

    function uz(QQ) {
      let {
        text: WQ,
        className: XQ,
        maxHeightFraction: wQ
      } = QQ;
      const TQ = (0, qQ.useRef)(null),
        zQ = (0, qQ.useRef)(null);
      return function(QQ, WQ, XQ, wQ) {
        (0, qQ.useLayoutEffect)((() => {
          const wQ = QQ.current,
            qQ = WQ.current;
          if (!wQ || !qQ) return;
          let TQ = -1,
            zQ = -1;
          const sQ = QQ => (qQ.style.setProperty("zoom", String(QQ)), wQ.getBoundingClientRect().height),
            FQ = () => {
              const QQ = document.documentElement.clientHeight * XQ;
              let WQ = 1;
              if (sQ(1) > QQ) {
                let XQ = .5,
                  wQ = 1;
                for (let WQ = 0; WQ < 6; WQ++) {
                  const WQ = (XQ + wQ) / 2;
                  sQ(WQ) <= QQ ? XQ = WQ : wQ = WQ
                }
                WQ = XQ
              }
              zQ = sQ(WQ), TQ = wQ.getBoundingClientRect().width
            };
          FQ();
          let PQ = 0;
          const gQ = () => {
              cancelAnimationFrame(PQ), PQ = requestAnimationFrame(FQ)
            },
            JQ = new ResizeObserver((() => {
              const {
                width: QQ,
                height: WQ
              } = wQ.getBoundingClientRect();
              QQ === TQ && WQ === zQ || gQ()
            }));
          return JQ.observe(wQ), window.addEventListener("resize", gQ), () => {
            JQ.disconnect(), window.removeEventListener("resize", gQ), cancelAnimationFrame(PQ), qQ.style.removeProperty("zoom")
          }
        }), [QQ, WQ, XQ, wQ])
      }(TQ, zQ, wQ, WQ.content), (0, gQ.jsx)("div", {
        ref: TQ,
        className: "MiddleTextFit",
        children: (0, gQ.jsx)(qT, {
          ref: zQ,
          text: WQ,
          className: XQ
        })
      })
    }
    const Lz = (0, qQ.memo)((function() {
        const QQ = (0, FQ.j)("aimingOverlay", "none");
        (0, DQ.d)();
        const WQ = (0, GQ.g)("useInventory");
        return (0, gQ.jsxs)("div", {
          className: "BottomMiddleElements",
          style: "sniper" === QQ ? {
            visibility: "hidden"
          } : {},
          children: [(0, gQ.jsx)(JQ, {}), (0, gQ.jsx)(CX.c, {}), (0, gQ.jsx)(uX, {}), (0, gQ.jsx)(BQ.i, {
            children: (0, gQ.jsx)(iq, {})
          }), (0, gQ.jsxs)("div", {
            className: "HotBarRow",
            children: [WQ ? (0, gQ.jsx)(tQ.e, {}) : (0, gQ.jsx)(tQ.f, {}), (0, gQ.jsx)(eQ, {})]
          })]
        })
      })),
      kz = (0, qQ.memo)((function(QQ) {
        let {
          showChat: WQ
        } = QQ;
        const {
          t: XQ
        } = (0, cQ.C)(), {
          clientEscMenuOptions: wQ,
          isTouchScreen: TQ
        } = (0, HQ.n)(["clientEscMenuOptions", "isTouchScreen"]);
        (0, DQ.d)();
        const {
          userContext: sQ,
          isUserContextUpdating: FQ
        } = (0, VQ.c)(), PQ = (0, GQ.g)("hideCoordinates"), JQ = (0, GQ.g)("customVariationTitle"), {
          requestedGameNameWithVariation: IQ,
          gameNameWithVariation: jQ,
          lobbyName: BQ,
          shownLobbyName: yQ
        } = (0, dQ.e)("connectedGame"), UQ = (0, rQ.c)(IQ, BQ, !1), [bQ, vQ] = (0, qQ.useState)(null), aQ = (0, dq.m)(jQ || IQ || ""), lQ = JQ || aQ || "";
        (0, qQ.useEffect)((() => {
          FQ || Yw.e.getFavouriteLobbies(sQ).then((QQ => {
            console.log("Got favourite lobbies", QQ), vQ(QQ)
          }))
        }), [FQ, sQ]);
        const hQ = (0, qQ.useRef)(null);
        return (0, qQ.useLayoutEffect)((() => {
          const QQ = hQ.current,
            WQ = document.documentElement,
            XQ = new ResizeObserver((() => {
              WQ.style.setProperty("--InGameHeaderRowsHeight", `${QQ.offsetHeight}px`)
            }));
          return XQ.observe(QQ), () => {
            XQ.disconnect(), WQ.style.removeProperty("--InGameHeaderRowsHeight")
          }
        }), []), ow(hQ), (0, gQ.jsxs)(gQ.Fragment, {
          children: [(0, gQ.jsxs)("div", {
            className: zQ()(kw.h, {
              Touchscreen: TQ
            }),
            ref: hQ,
            children: [(0, gQ.jsxs)("div", {
              className: "InGameHeader",
              children: [(0, gQ.jsxs)("div", {
                className: "InGameHeaderLogo",
                onMouseDown: QQ => {
                  QQ.stopPropagation(), QQ.preventDefault()
                },
                onClick: () => {
                  HQ.b.set({
                    openEverythingMenuName: pQ.r.SETTINGS
                  })
                },
                children: [(0, gQ.jsx)(vq.e, {
                  showFace: !0,
                  loading: !1
                }), "bloxd.io"]
              }), (0, gQ.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, gQ.jsxs)("div", {
                className: "InGameHeaderGameName",
                children: [null === UQ && (0, gQ.jsx)(vq.e, {}), null !== UQ && (0, gQ.jsxs)(gQ.Fragment, {
                  children: [UQ, lQ && ` ${lQ}`]
                })]
              }), (0, gQ.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, gQ.jsx)("div", {
                className: "InGameHeaderLobbyName",
                children: yQ
              }), (0, Hq.D)(BQ) && (0, gQ.jsx)(LQ.e, {
                tooltipInner: (0, gQ.jsx)("div", {
                  children: XQ(null !== bQ && bQ.includes(BQ) ? "customLobby:removeFromFavourites" : "customLobby:addToFavourites")
                }),
                children: (0, gQ.jsx)("div", {
                  children: (0, gQ.jsx)(oX.C, {
                    isLiked: null !== bQ && bQ.includes(BQ),
                    onClick: () => {
                      try {
                        if (!bQ) return;
                        bQ.includes(BQ) ? (Yw.e.unfavouriteLobby(sQ, BQ).catch((QQ => {
                          console.error("Failed to favourite lobby", QQ)
                        })), vQ(bQ.filter((QQ => QQ !== BQ)))) : (Yw.e.favouriteLobby(sQ, BQ).catch((QQ => {
                          console.error("Failed to favourite lobby", QQ)
                        })), vQ([...bQ, BQ]))
                      } catch (QQ) {
                        console.error("Failed to like lobby", QQ)
                      }
                    },
                    isLoading: null === bQ
                  })
                })
              }), (0, gQ.jsx)(PT, {})]
            }), (0, gQ.jsx)(Vq, {
              show: wQ.showFPS
            }), !PQ && wQ.showCoordinates && (0, gQ.jsx)(Gq, {}), !PQ && wQ.showChunkCoordinates && (0, gQ.jsx)(Uq, {}), (0, gQ.jsx)(zT, {})]
          }), (0, gQ.jsx)("div", {
            className: "TopLeftElements",
            "data-holds-camera-keeper": "",
            children: (0, gQ.jsx)("div", {
              className: "InGameHeaderAndChat",
              "data-holds-camera-keeper": "",
              children: WQ && (0, gQ.jsx)(NQ.d, {})
            })
          })]
        })
      })),
      fz = (0, qQ.memo)((function() {
        (0, DQ.d)();
        const QQ = (0, GQ.h)("RightInfoText"),
          [WQ, XQ] = (0, qQ.useState)(null);
        return (0, DW.i)(WQ, ".RightElements"), QQ.hasText ? (0, gQ.jsx)("div", {
          className: "RightInfoDivContainer",
          children: (0, gQ.jsx)(qT, {
            ref: XQ,
            text: QQ,
            className: "RightInfoDiv",
            children: (0, gQ.jsx)("div", {
              className: "RightInfoDivInner",
              children: (0, gQ.jsx)(PQ.e, {
                text: QQ.content
              })
            })
          })
        }) : null
      }))
  },
  5181: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => sQ
    });
    var wQ = XQ(61),
      qQ = XQ(382),
      TQ = XQ(1988),
      zQ = XQ(1145);

    function sQ(QQ) {
      let {
        text: WQ
      } = QQ;
      const XQ = [];
      let sQ = "";
      return (0, qQ.gc)(WQ).forEach(((QQ, WQ) => {
        if ("string" === typeof QQ || !(0, TQ.e)(QQ.icon)) return void(sQ += "string" === typeof QQ ? QQ : QQ.icon);
        const qQ = Math.max(0, sQ.trimEnd().search(/\S{1,12}$/));
        XQ.push((0, zQ.jsxs)(wQ.Fragment, {
          children: [sQ.slice(0, qQ), (0, zQ.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [sQ.slice(qQ), (0, zQ.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": QQ.icon,
              children: (0, zQ.jsx)(TQ.d, {
                itemName: QQ.icon,
                amount: 0
              })
            })]
          })]
        }, WQ)), sQ = ""
      })), XQ.push(sQ), (0, zQ.jsx)(zQ.Fragment, {
        children: XQ
      })
    }
  },
  36827: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => rQ,
      h: () => gQ,
      l: () => JQ
    });
    var wQ = XQ(61),
      qQ = XQ(1081),
      TQ = XQ.n(qQ),
      zQ = XQ(1988),
      sQ = XQ(1145);
    const FQ = 350;
    let PQ = 0;

    function gQ() {
      return PQ += 1, PQ
    }

    function JQ(QQ, WQ) {
      let XQ = 0;
      for (const wQ of QQ) "ingredient" !== wQ.kind && wQ.QF === WQ && (XQ += wQ.amount);
      return XQ > 0 ? {
        idx: WQ,
        amount: XQ
      } : null
    }

    function rQ(QQ) {
      var WQ, XQ;
      let {
        anim: qQ,
        onComplete: PQ
      } = QQ;
      const gQ = null !== (WQ = qQ.delayMs) && void 0 !== WQ ? WQ : 0,
        JQ = null !== (XQ = qQ.durationMs) && void 0 !== XQ ? XQ : FQ,
        [rQ, IQ] = (0, wQ.useState)(qQ.from),
        [jQ, BQ] = (0, wQ.useState)(0 === gQ),
        [yQ, VQ] = (0, wQ.useState)(!1),
        DQ = (0, wQ.useRef)(!1);
      return (0, wQ.useEffect)((() => {
        let QQ, WQ;
        const XQ = () => {
            DQ.current = !0, BQ(!0), QQ = requestAnimationFrame((() => {
              WQ = requestAnimationFrame((() => {
                IQ({
                  x: qQ.to.x,
                  y: qQ.to.y
                }), VQ(!0)
              }))
            }))
          },
          wQ = DQ.current ? 0 : gQ;
        let TQ;
        wQ > 0 ? TQ = setTimeout(XQ, wQ) : XQ();
        const zQ = setTimeout((() => {
          PQ(qQ.id)
        }), wQ + JQ + 50);
        return () => {
          clearTimeout(TQ), cancelAnimationFrame(QQ), cancelAnimationFrame(WQ), clearTimeout(zQ)
        }
      }), [qQ.id, qQ.to.x, qQ.to.y, PQ, gQ, JQ]), (0, sQ.jsx)("div", {
        className: TQ()("CraftItemFlyAnimation", {
          Ingredient: "ingredient" === qQ.kind,
          Waiting: !jQ,
          Arrived: yQ
        }),
        style: {
          left: rQ.x,
          top: rQ.y,
          "--fly-duration": `${JQ}ms`
        },
        children: (0, sQ.jsx)(zQ.d, {
          itemName: qQ.itemName,
          amount: qQ.amount
        })
      })
    }
  },
  36818: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => uQ,
      f: () => fQ
    });
    var wQ = XQ(61),
      qQ = XQ(2728),
      TQ = XQ(6960),
      zQ = XQ(2136),
      sQ = XQ(2535),
      FQ = XQ(9195),
      PQ = XQ(402),
      gQ = XQ(31),
      JQ = XQ(1498),
      rQ = XQ(43),
      IQ = XQ(1081),
      jQ = XQ.n(IQ),
      BQ = XQ(382),
      yQ = XQ(36821),
      VQ = XQ(1975),
      DQ = XQ(2052),
      pQ = XQ(9071),
      GQ = XQ(1145);

    function UQ(QQ) {
      var WQ, XQ;
      let {
        slotIdx: TQ
      } = QQ;
      const zQ = (0, DQ.d)("hotbar", (QQ => {
          var WQ;
          return null !== (WQ = QQ.items[TQ]) && void 0 !== WQ ? WQ : null
        })),
        FQ = (0, DQ.d)("hotbar", (QQ => QQ.ammo)),
        [gQ, JQ] = (0, wQ.useState)(!1),
        rQ = (0, wQ.useRef)(null),
        [IQ, BQ] = (0, wQ.useState)(null),
        [yQ, UQ] = (0, wQ.useState)(null),
        bQ = (0, sQ.g)("maxAuraLevel"),
        vQ = (0, qQ.d)(),
        dQ = (0, wQ.useCallback)((() => {
          if (clearTimeout(rQ.current), zQ) {
            var QQ, WQ, XQ, wQ;
            const FQ = zQ.displayName,
              gQ = [],
              JQ = Array.isArray(FQ) ? FQ : [FQ],
              rQ = {
                fontStyle: null !== (QQ = zQ.attributes.customAttributes) && void 0 !== QQ && QQ.author ? "italic" : "normal"
              };
            for (const QQ of JQ) QQ.str ? gQ.push(QQ) : gQ.push({
              str: QQ,
              style: rQ
            });
            if (null !== (WQ = zQ.attributes.customAttributes) && void 0 !== WQ && WQ.enchantments) {
              gQ.push(" ");
              const QQ = Object.entries(zQ.attributes.customAttributes.enchantments).sort(((QQ, WQ) => WQ[1] - QQ[1])),
                WQ = zQ.attributes.customAttributes.enchantmentData;
              for (const [XQ, wQ] of QQ) {
                var qQ, TQ;
                const QQ = null !== (qQ = null === WQ || void 0 === WQ || null === (TQ = WQ[XQ]) || void 0 === TQ ? void 0 : TQ.icon) && void 0 !== qQ ? qQ : `${XQ} Enchantment`;
                var sQ;
                if (wQ < 4)
                  for (let WQ = 0; WQ < wQ; WQ++) gQ.push({
                    icon: QQ,
                    style: {
                      fontSize: "1.5em"
                    }
                  });
                else gQ.push({
                  icon: QQ,
                  style: {
                    fontSize: "1.5em"
                  }
                }), gQ.push(null !== (sQ = (0, PQ.Q)(wQ)) && void 0 !== sQ ? sQ : wQ.toString())
              }
            }
            BQ(gQ), UQ(null !== (XQ = null === (wQ = zQ.attributes.customAttributes) || void 0 === wQ ? void 0 : wQ.enchantmentTier) && void 0 !== XQ ? XQ : null)
          } else BQ(null), UQ(null);
          JQ(!0), vQ();
          const FQ = null === zQ || void 0 === zQ ? void 0 : zQ.attributes.customAttributes;
          void 0 === (null === FQ || void 0 === FQ ? void 0 : FQ.shotsLeft) && (rQ.current = setTimeout((() => {
            JQ(!1)
          }), 2e3))
        }), [null === zQ || void 0 === zQ ? void 0 : zQ.name, TQ, null === zQ || void 0 === zQ ? void 0 : zQ.instance, null === zQ || void 0 === zQ ? void 0 : zQ.displayName]);
      (0, wQ.useEffect)((() => (dQ(), () => {
        clearTimeout(rQ.current), JQ(!1)
      })), [null === zQ || void 0 === zQ ? void 0 : zQ.name, TQ, null === zQ || void 0 === zQ ? void 0 : zQ.instance, dQ]);
      const HQ = null === zQ || void 0 === zQ || null === (WQ = zQ.attributes.customAttributes) || void 0 === WQ ? void 0 : WQ.shotsLeft,
        aQ = void 0 === HQ ? null : (0, GQ.jsx)("div", {
          className: "SelectedItemShotsLeft",
          children: `${HQ}|${zQ.requiresAmmo?`${FQ}x${zQ.clipSize}`:zQ.clipSize}`
        }),
        lQ = (0, pQ.l)();
      return (0, GQ.jsx)(GQ.Fragment, {
        children: gQ && zQ && !lQ.showing ? (0, GQ.jsxs)("div", {
          className: jQ()("SelectedItemName SmallTextBold", {
            NoAuraBar: 0 === bQ,
            Enchanted: null !== yQ
          }),
          style: {
            "--enchantmentColour": null !== (XQ = PQ.kb[yQ]) && void 0 !== XQ ? XQ : PQ.kb.None,
            "--duration": yQ ? (0, PQ.hb)(yQ) + "s" : void 0
          },
          children: [yQ && (0, GQ.jsxs)("div", {
            className: "SelectedItemNameGradient",
            children: [(0, GQ.jsx)(VQ.e, {
              text: IQ
            }), aQ]
          }), (0, GQ.jsxs)("div", {
            className: "SelectedItemNameNormal",
            children: [(0, GQ.jsx)(VQ.e, {
              text: IQ
            }), aQ]
          })]
        }) : null
      })
    }
    var bQ = XQ(36827),
      vQ = XQ(26),
      dQ = XQ(2003),
      HQ = XQ(663),
      aQ = XQ(2540),
      lQ = XQ(3673),
      hQ = XQ(3678);
    var iQ = XQ(1157),
      cQ = XQ(1154),
      AQ = XQ(2585);

    function RQ() {
      return parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--touch-hotbar-ends-spare")) >= 0
    }
    var EQ = XQ(9268),
      CQ = XQ(1525);
    const uQ = (0, wQ.memo)((function() {
      const [QQ, WQ] = (0, wQ.useState)(0), XQ = (0, sQ.g)("useFullInventory"), zQ = (0, sQ.g)("highlightedHotbarSlots"), {
        isTouchScreen: FQ,
        openInGameMenuName: PQ
      } = (0, vQ.n)(["isTouchScreen", "openInGameMenuName"]), rQ = null !== PQ && "inventory" !== PQ, IQ = (0, DQ.e)("fullInventory") && "inventory" === PQ, BQ = function() {
        const QQ = (0, iQ.p)(((QQ, WQ) => `${QQ}:${(0,cQ.e)(QQ,WQ)?"portrait":"landscape"}`)),
          [WQ, XQ] = (0, wQ.useState)(RQ);
        return (0, wQ.useLayoutEffect)((() => {
          XQ(RQ())
        }), [QQ]), (0, JQ.f)(AQ.h, (() => {
          XQ(RQ())
        })), WQ
      }(), VQ = FQ && !BQ;
      ! function(QQ, WQ, XQ) {
        (0, wQ.useLayoutEffect)((() => {
          const wQ = document.documentElement.classList;
          return QQ && (wQ.add("TouchHotbar"), wQ.toggle("TouchHotbarKeysAbove", WQ), wQ.toggle("TouchHotbarHasBag", XQ)), (0, lQ.h)(), gQ.k.mB(hQ.d), () => {
            wQ.remove("TouchHotbar", "TouchHotbarKeysAbove", "TouchHotbarHasBag"), (0, lQ.h)(), gQ.k.mB(hQ.d)
          }
        }), [QQ, WQ, XQ])
      }(FQ, VQ, XQ);
      const [pQ, aQ] = (0, TQ.d)("changedHotbarUsingNumkeys", !0), EQ = (0, DQ.d)("hotbar", (QQ => QQ.selectedSlot)), CQ = null !== EQ && void 0 !== EQ ? EQ : QQ, uQ = (0, qQ.d)(), SQ = (0, wQ.useRef)(null), tQ = (0, JQ.j)("pointerLockUpdate", Boolean(document.pointerLockElement));
      (0, JQ.f)("inventoryDraggedItemUpdated", (QQ => {
        SQ.current = QQ, uQ()
      })), (0, DQ.b)("hotbarScrolled", (QQ => {
        null === EQ && nQ(QQ)
      })), (0, DQ.b)("hotbarSlotRequested", (QQ => {
        eQ(QQ), aQ(!1)
      })), (0, DQ.b)("numberKeyPressed", (() => {
        aQ(!1)
      })), (0, DQ.b)("hotbarDropRequested", (QQ => {
        const WQ = dQ.gameBridge.latest("hotbar").items[CQ];
        if (WQ) {
          var XQ;
          const wQ = QQ && null !== (XQ = WQ.amount) && void 0 !== XQ ? XQ : 1;
          dQ.gameBridge.send("removeInventoryItem", {
            slot: CQ,
            amount: wQ,
            drop: !0
          })
        }
      }));
      const eQ = QQ => {
          dQ.gameBridge.send("selectHotbarSlot", QQ), WQ(QQ)
        },
        nQ = QQ => {
          eQ((CQ + QQ + HQ.h) % HQ.h)
        };
      let xQ, YQ = null,
        NQ = null,
        ZQ = QQ => QQ => {},
        OQ = QQ => WQ => {
          eQ(QQ)
        },
        KQ = QQ => QQ => {},
        mQ = [];
      if (IQ) {
        var MQ;
        const QQ = SQ.current;
        if (null === QQ || void 0 === QQ || !QQ.setHovered) return (0, GQ.jsx)("div", {
          className: jQ()("HotBarContainer", {
            Touch: FQ,
            KeysAbove: VQ
          }),
          children: (0, GQ.jsx)("div", {
            className: "HotBar"
          })
        });
        YQ = QQ.draggedInfo, NQ = QQ.specialItemInfo, ZQ = QQ.setHovered, OQ = QQ.pointerDown, KQ = QQ.pointerUp, xQ = QQ.variation, mQ = null !== (MQ = QQ.craftFlyAnims) && void 0 !== MQ ? MQ : []
      }
      return (0, GQ.jsxs)("div", {
        className: jQ()("HotBarContainer", {
          Touch: FQ,
          PopupOpen: FQ && rQ,
          KeysAbove: VQ
        }),
        children: [(0, GQ.jsxs)("div", {
          className: jQ()("HotBar", {
            HoverDisabled: tQ
          }),
          children: [FQ && (0, GQ.jsxs)(GQ.Fragment, {
            children: [(0, GQ.jsx)(kQ, {
              useFullInventory: XQ,
              inventoryOpen: IQ
            }), (0, GQ.jsx)(LQ, {
              direction: "Previous",
              onPress: () => {
                nQ(-1)
              }
            })]
          }), !FQ && (0, GQ.jsxs)(GQ.Fragment, {
            children: [(0, GQ.jsx)(fQ, {}), (0, GQ.jsx)("div", {
              className: "HotBarFiller"
            })]
          }), (0, GQ.jsx)("div", {
            className: "HotBarGameItemsContainer",
            children: new Array(10).fill(0).map(((QQ, WQ) => (0, GQ.jsx)(yQ.c, {
              idx: WQ,
              draggedInfo: YQ,
              specialItemInfo: NQ,
              craftFlyHoldbackInfo: (0, bQ.l)(mQ, WQ),
              setHovered: ZQ(WQ),
              pointerDown: OQ(WQ),
              pointerUp: KQ(WQ),
              variation: xQ,
              isSelected: WQ === CQ,
              hotbarHighlighted: !0 === (null === zQ || void 0 === zQ ? void 0 : zQ.includes(WQ)),
              hoverDisabled: tQ,
              showNumber: pQ && !FQ
            }, WQ)))
          }), FQ && (0, GQ.jsx)(LQ, {
            direction: "Next",
            onPress: () => {
              nQ(1)
            }
          }), !FQ && (0, GQ.jsxs)(GQ.Fragment, {
            children: [(0, GQ.jsx)("div", {
              className: "HotBarFiller"
            }), (0, GQ.jsx)("div", {
              className: jQ()("HotBarItem ButtonHotBarItem", {
                HiddenButtonHotBarItem: !XQ
              }),
              onPointerDown: () => {
                gQ.k.mB("toggleMenu", "inventory")
              },
              children: (0, GQ.jsx)(oQ, {})
            })]
          })]
        }), (0, GQ.jsx)(UQ, {
          slotIdx: CQ
        })]
      })
    }));

    function LQ(QQ) {
      let {
        direction: WQ,
        onPress: XQ
      } = QQ;
      return (0, GQ.jsx)("div", {
        className: jQ()("HotBarArrow", WQ),
        ...CQ.f,
        children: (0, GQ.jsx)(zQ.b, {
          icon: "Previous" === WQ ? "caret-left" : "caret-right",
          touchPressOn: "pointerdown",
          onClick: XQ
        })
      })
    }
    const kQ = (0, wQ.memo)((function(QQ) {
        let {
          useFullInventory: WQ,
          inventoryOpen: XQ
        } = QQ;
        const qQ = (0, sQ.g)("maxAuraLevel"),
          TQ = (0, wQ.useRef)(null),
          zQ = (0, FQ.e)();
        return function(QQ, WQ, XQ) {
          (0, wQ.useLayoutEffect)((() => (document.documentElement.classList.toggle("TouchHotbarHasShop", WQ), () => {
            document.documentElement.classList.remove("TouchHotbarHasShop")
          })), [WQ]), (0, wQ.useLayoutEffect)((() => {
            const WQ = QQ.current.closest(".BottomMiddleElements");
            return WQ.classList.toggle("TouchInventoryOpen", XQ), () => {
              WQ.classList.remove("TouchInventoryOpen")
            }
          }), [QQ, XQ])
        }(TQ, zQ, XQ), (0, EQ.c)(TQ, zQ, XQ), (0, GQ.jsxs)("div", {
          ref: TQ,
          className: jQ()("TouchInventoryKeys", {
            NoAuraBar: 0 === qQ,
            InventoryOpen: XQ
          }),
          children: [(0, GQ.jsx)(fQ, {
            touchKey: !0
          }), (0, GQ.jsx)("div", {
            className: jQ()("TouchInventoryKey BagKey", {
              Hidden: !WQ
            }),
            ...CQ.f,
            children: (0, GQ.jsx)(oQ, {
              touchKey: !0
            })
          })]
        })
      })),
      fQ = (0, wQ.memo)((function(QQ) {
        let {
          touchKey: WQ = !1
        } = QQ;
        const XQ = (0, FQ.e)();
        return (0, GQ.jsx)("div", {
          className: WQ ? jQ()("TouchInventoryKey ShopKey", {
            Hidden: !XQ
          }) : jQ()("HotBarItem ButtonHotBarItem", {
            HiddenButtonHotBarItem: !XQ
          }),
          ...WQ ? CQ.f : {},
          children: (0, GQ.jsx)(zQ.b, {
            icon: (0, PQ._b)(),
            noaAction: "OpenShop",
            touchPressOn: "pointerdown",
            onClick: () => {
              XQ && vQ.b.set({
                openEverythingMenuName: BQ.r.SHOP
              })
            },
            showTouchTutorialPubSubId: "showShopTouchTutorial",
            showRedDotPubSubId: "showShopIconRedDot",
            touchIconPosition: "topleft"
          })
        })
      }));

    function SQ(QQ) {
      let {
        player: WQ
      } = QQ;
      return WQ.some((QQ => null !== QQ && PQ.Sc.includes(QQ.name)))
    }

    function tQ(QQ) {
      QQ.creative || rQ.i.getItem("LogInInventoryRedDotTutorialComplete") || (SQ(QQ) ? (gQ.k.mB("RedDotOpenInventoryIcon", !0), gQ.k.mB("TouchTutorialOpenInventoryIcon", !0)) : (gQ.k.mB("RedDotOpenInventoryIcon", !1), gQ.k.mB("TouchTutorialOpenInventoryIcon", !1)))
    }
    const oQ = (0, wQ.memo)((function(QQ) {
      let {
        touchKey: WQ = !1
      } = QQ;
      (0, wQ.useEffect)((() => {
        tQ(dQ.gameBridge.latest("inventory"))
      }), []), (0, DQ.b)("inventory", tQ);
      const XQ = (0, aQ.k)();
      return (0, JQ.f)("toggleMenu", (QQ => {
        XQ.shown && (null !== QQ && void 0 !== QQ && QQ.startsWith("inventory") && SQ(dQ.gameBridge.latest("inventory")) ? (rQ.i.setItem("LogInInventoryRedDotTutorialComplete", !0), gQ.k.mB("RedDotOpenInventoryIcon", !1), gQ.k.mB("TouchTutorialOpenInventoryIcon", !1)) : "shop" === QQ && gQ.k.mB("showShopTouchTutorial", !1))
      })), WQ ? (0, GQ.jsx)(zQ.b, {
        icon: "backpack",
        noaAction: "OpenInventory",
        touchPressOn: "pointerdown",
        onClick: () => {
          gQ.k.mB("toggleMenu", "inventory")
        },
        showRedDotPubSubId: "RedDotOpenInventoryIcon",
        showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
        touchIconPosition: "topleft"
      }) : (0, GQ.jsx)("div", {
        className: "HotBarButton",
        onPointerDown: () => {
          gQ.k.mB("toggleMenu", "inventory")
        },
        children: (0, GQ.jsx)(zQ.b, {
          icon: "backpack",
          noaAction: "OpenInventory",
          onPointerDown: QQ => {
            gQ.k.mB("toggleMenu", "inventory"), QQ.stopPropagation()
          },
          showRedDotPubSubId: "RedDotOpenInventoryIcon",
          showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
          touchIconPosition: "topleft"
        })
      })
    }))
  },
  36821: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => yQ,
      e: () => jQ
    });
    var wQ = XQ(61),
      qQ = XQ(1081),
      TQ = XQ.n(qQ),
      zQ = XQ(1997),
      sQ = XQ(1988),
      FQ = XQ(2003),
      PQ = XQ(2052),
      gQ = XQ(36825),
      JQ = XQ(34523),
      rQ = XQ(1454),
      IQ = XQ(1145);
    const jQ = (QQ, WQ, XQ) => {
      let wQ = WQ,
        qQ = !1;
      for (const TQ of XQ)(null === TQ || void 0 === TQ ? void 0 : TQ.idx) === QQ && (qQ = !0, wQ > 0 && (wQ -= TQ.amount));
      return {
        displayedAmt: wQ,
        shown: !qQ || wQ > 0
      }
    };
    const BQ = QQ => {
        let {
          idx: WQ
        } = QQ;
        return (0, rQ.A)() ? null : (0, IQ.jsx)("div", {
          className: "HotbarItemNumber SmallTextBold",
          children: WQ < 9 ? WQ + 1 : 0
        })
      },
      yQ = (0, wQ.memo)((function(QQ) {
        var WQ, XQ, wQ;
        let {
          idx: qQ,
          setHovered: rQ,
          pointerDown: yQ,
          pointerUp: VQ,
          draggedInfo: DQ,
          specialItemInfo: pQ,
          craftFlyHoldbackInfo: GQ,
          defaultIconB64: UQ = null,
          variation: bQ,
          isSelected: vQ = !1,
          hotbarHighlighted: dQ = !1,
          hoverDisabled: HQ = !1,
          showNumber: aQ = !1,
          showNewDot: lQ = !1
        } = QQ;
        const hQ = (0, PQ.d)("inventory", (QQ => qQ === gQ.h ? null : (0, JQ.m)(QQ, qQ)));
        let iQ, cQ, AQ, RQ;
        if (qQ === gQ.h) pQ && (iQ = pQ.name, AQ = pQ.amount, RQ = pQ.attributes);
        else if (hQ) {
          var EQ;
          iQ = hQ.name, cQ = hQ.icon, AQ = null !== (EQ = hQ.amount) && void 0 !== EQ ? EQ : 0, RQ = hQ.attributes
        }
        const CQ = null === (WQ = RQ) || void 0 === WQ || null === (XQ = WQ.customAttributes) || void 0 === XQ ? void 0 : XQ.enchantmentTier,
          uQ = (0, zQ.e)(RQ),
          {
            displayedAmt: LQ,
            shown: kQ
          } = jQ(qQ, AQ, [DQ, pQ, GQ]),
          fQ = iQ && kQ,
          SQ = void 0 !== bQ && function(QQ, WQ) {
            const {
              enchantable: XQ,
              salvageable: wQ
            } = FQ.gameBridge.latest("stationItems");
            return "Enchanting Table" === QQ ? !0 === XQ[WQ] : "Salvaging Table" === QQ && !0 === wQ[WQ]
          }(bQ, iQ);
        return (0, IQ.jsxs)("div", {
          className: TQ()("InvenItem", {
            Highlighted: fQ && SQ,
            Selected: vQ,
            HotbarHighlighted: dQ,
            HoverDisabled: HQ
          }),
          onPointerEnter: () => {
            null === rQ || void 0 === rQ || rQ(!0)
          },
          onPointerLeave: () => {
            null === rQ || void 0 === rQ || rQ(!1)
          },
          onPointerDown: yQ,
          onPointerUp: VQ,
          "data-inven-idx": qQ,
          children: [fQ && (0, IQ.jsx)(sQ.d, {
            itemName: null !== (wQ = cQ) && void 0 !== wQ ? wQ : iQ,
            amount: LQ,
            enchantmentTier: CQ,
            bar: uQ
          }), fQ && lQ && (0, IQ.jsx)("div", {
            className: "InvenItemNewDot"
          }), aQ && (0, IQ.jsx)(BQ, {
            idx: qQ
          }), UQ && !fQ && (0, IQ.jsx)("div", {
            className: "InvenItemUnfilled",
            style: {
              backgroundImage: `url(${UQ})`
            }
          })]
        })
      }))
  },
  36825: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => wQ,
      h: () => qQ
    });
    const wQ = -1,
      qQ = -2
  },
  37278: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => HQ
    });
    var wQ = XQ(61),
      qQ = XQ(37286),
      TQ = XQ(1975),
      zQ = XQ(646),
      sQ = XQ(31),
      FQ = XQ(1081),
      PQ = XQ.n(FQ),
      gQ = XQ(36849),
      JQ = XQ(2765),
      rQ = XQ(2954),
      IQ = XQ(2790),
      jQ = XQ(2770),
      BQ = XQ(3853),
      yQ = XQ(36852),
      VQ = XQ(26),
      DQ = XQ(2098),
      pQ = XQ(2451),
      GQ = XQ(1257),
      UQ = XQ(5263),
      bQ = XQ(2052),
      vQ = XQ(105),
      dQ = XQ(1145);
    const HQ = (0, wQ.memo)((function() {
      const QQ = (0, qQ.d)(),
        WQ = (0, bQ.e)("players"),
        XQ = (0, bQ.e)("lobbyLeaderboardRows"),
        sQ = (0, bQ.e)("hiddenPlayerNames"),
        FQ = (0, wQ.useRef)(null),
        [PQ, gQ] = (0, wQ.useReducer)((QQ => QQ + 1), 0);
      return (0, wQ.useEffect)((() => (0, DQ.d)((() => {
        gQ()
      }))), []), (0, dQ.jsx)("div", {
        className: "LobbyLeaderboardContainer Menu",
        children: (0, dQ.jsx)("div", {
          className: "MenuBody",
          children: function() {
            if (!QQ) return (0, dQ.jsx)(dQ.Fragment, {});
            const wQ = [...WQ.ids],
              qQ = {},
              PQ = {};
            for (const QQ of wQ) {
              var gQ, JQ;
              qQ[QQ] = null === (gQ = XQ[QQ]) || void 0 === gQ ? void 0 : gQ.colour;
              const WQ = null === (JQ = XQ[QQ]) || void 0 === JQ ? void 0 : JQ.values;
              WQ && (PQ[QQ] = {
                ...WQ
              })
            }
            const IQ = Object.keys(QQ);
            IQ.sort(((WQ, XQ) => QQ[WQ].sortPriority - QQ[XQ].sortPriority)), wQ.sort(((WQ, XQ) => {
              if (!PQ[WQ] || !PQ[XQ]) return 0;
              for (const wQ of IQ) {
                const qQ = PQ[WQ][wQ],
                  TQ = PQ[XQ][wQ];
                let zQ = 0;
                if ("string" == typeof qQ && "string" == typeof TQ ? zQ = qQ.localeCompare(TQ) : "number" == typeof qQ && "number" == typeof TQ ? zQ = qQ - TQ : "number" == typeof qQ && "string" == typeof TQ ? zQ = 1 : "string" == typeof qQ && "number" == typeof TQ && (zQ = -1), zQ) return zQ * ("ascending" === QQ[wQ].sortOrder ? 1 : -1)
              }
              return 0
            }));
            for (const QQ of wQ) {
              var jQ, BQ, yQ;
              const {
                name: wQ,
                ranks: qQ,
                cosmetics: TQ
              } = WQ.byId[QQ], sQ = [], FQ = null !== (jQ = null === (BQ = XQ[QQ]) || void 0 === BQ || null === (yQ = BQ.tags) || void 0 === yQ ? void 0 : yQ.flatMap((QQ => 0 === QQ.length ? QQ : [...QQ, String.fromCharCode(8198)]))) && void 0 !== jQ ? jQ : [];
              sQ.push(...FQ), sQ.push(...(0, GQ.u)(qQ, wQ, (null === TQ || void 0 === TQ ? void 0 : TQ.nameColour) === zQ.e || null === TQ || void 0 === TQ ? void 0 : TQ.nameColour)), PQ[QQ] ??= {}, PQ[QQ].name = sQ
            }

            function VQ(QQ, XQ) {
              if (PQ[QQ] && void 0 !== PQ[QQ][XQ]) {
                if ("name" === XQ) {
                  const {
                    name: wQ,
                    cosmetics: qQ
                  } = WQ.byId[QQ];
                  return (0, dQ.jsxs)("div", {
                    className: "PlayerPfpAndName",
                    children: [qQ && (0, dQ.jsx)(pQ.d, {
                      cosmetics: qQ
                    }), " ", (0, dQ.jsx)(TQ.e, {
                      text: PQ[QQ][XQ],
                      friendBadgeFor: (0, DQ.g)(wQ, sQ) ? wQ : void 0
                    })]
                  })
                }
                return (0, dQ.jsx)(TQ.e, {
                  text: PQ[QQ][XQ]
                })
              }
              return ""
            }
            const bQ = Object.keys(QQ).filter((WQ => !0 !== QQ[WQ].hidden)).map((WQ => {
              var XQ;
              return {
                key: WQ,
                header: (0, dQ.jsx)(TQ.e, {
                  text: null !== (XQ = QQ[WQ].displayName) && void 0 !== XQ ? XQ : ""
                })
              }
            }));
            return (0, dQ.jsx)("div", {
              ref: FQ,
              className: "LobbyLeaderboard",
              children: (0, dQ.jsx)(UQ.c, {
                columns: bQ,
                rows: wQ,
                getRowKey: QQ => QQ,
                renderRow: XQ => {
                  const wQ = XQ !== WQ.localId;
                  return (0, dQ.jsx)(aQ, {
                    playerId: XQ,
                    playerName: WQ.byId[XQ].name,
                    isOtherPlayer: wQ,
                    opensProfileCard: (0, rQ.h)(wQ, WQ.byId[XQ].name, sQ),
                    lobbyLeaderboardInfo: QQ,
                    getPlayerValue: VQ,
                    playerColors: qQ
                  })
                }
              })
            })
          }()
        })
      })
    }));

    function aQ(QQ) {
      let {
        playerId: WQ,
        playerName: XQ,
        isOtherPlayer: qQ,
        opensProfileCard: TQ,
        lobbyLeaderboardInfo: zQ,
        getPlayerValue: FQ,
        playerColors: DQ
      } = QQ;
      const pQ = (0, wQ.useRef)(null);
      (0, wQ.useEffect)((() => () => {
        JQ.b.closeIfOwner(pQ)
      }), []);
      const GQ = {
          icon: "flag",
          text: "Report",
          onClick: () => {
            sQ.k.mB("OpenReportMenu", {
              playerEId: WQ,
              playerName: XQ,
              cg: null,
              serverChatMsgId: null
            })
          }
        },
        UQ = () => ({
          ...(0, rQ.e)(WQ, XQ),
          showLocation: !1,
          status: null,
          extraActions: [GQ],
          moderationActions: null === XQ ? [] : (0, yQ.b)(XQ),
          friendRequestSource: "leaderboard"
        });
      return (0, dQ.jsxs)("tr", {
        ref: pQ,
        "data-pad-focusable": TQ || void 0,
        [JQ.d]: TQ || void 0,
        onClick: TQ ? () => {
          var QQ;
          JQ.b.toggle(pQ, {
            ...UQ(),
            anchor: null !== (QQ = pQ.current.querySelector(".PlayerPfpAndName")) && void 0 !== QQ ? QQ : pQ.current
          })
        } : void 0,
        onContextMenu: TQ ? QQ => {
          (0, IQ.f)(pQ, QQ, UQ(), VQ.b.get("isTouchScreen"))
        } : void 0,
        onPointerDown: TQ ? QQ => {
          (0, jQ.b)(QQ, (() => (0, rQ.e)(WQ, XQ).playerSocialPreview))
        } : void 0,
        children: [Object.keys(zQ).map((QQ => !0 === zQ[QQ].hidden ? null : (0, dQ.jsxs)("td", {
          className: PQ()("LobbyLeaderboardValue SmallTextBold", {
            LobbyLeaderboardValueHighlighted: !qQ
          }),
          children: [(0, dQ.jsx)("div", {
            className: "LobbyLeaderboardValueText",
            children: FQ(WQ, QQ)
          }), (0, dQ.jsx)("div", {
            className: "LobbyLeaderboardValueBg",
            style: {
              backgroundColor: DQ[WQ]
            }
          })]
        }, QQ))), qQ && !TQ && (0, dQ.jsx)(gQ.e, {
          className: "LobbyLeaderboardRowFloatingActions",
          triggerElementRef: pQ,
          options: [{
            icon: GQ.icon,
            text: GQ.text,
            onPointerDown: GQ.onClick
          }, ...null === XQ || vQ.featureFlags.useSocialFeatures ? [] : (0, BQ.b)(null, XQ)]
        })]
      })
    }
  },
  36852: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => gQ
    });
    var wQ = XQ(2036),
      qQ = XQ(2550),
      TQ = XQ(36859);
    const zQ = {
      kick: "lobbyManageEntry:kicked",
      ban: "lobbyManageEntry:banned",
      unban: "lobbyManageEntry:unbanned"
    };

    function sQ(QQ, WQ) {
      return async () => function(QQ, WQ, XQ) {
        return null === WQ ? {
          message: {
            key: "lobbyManageEntry:noAnswer"
          },
          next: null
        } : WQ.ok ? {
          message: {
            key: zQ[QQ.type]
          },
          next: XQ
        } : {
          message: {
            fromServer: WQ.message
          },
          next: null
        }
      }(QQ, await (0, TQ.c)(QQ), WQ())
    }

    function FQ(QQ) {
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
        run: sQ({
          type: "ban",
          name: QQ
        }, (() => function(QQ) {
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
            run: sQ({
              type: "unban",
              name: QQ
            }, (() => null))
          }
        }(QQ)))
      }
    }

    function PQ(QQ, WQ) {
      if (null === QQ) return [];
      const XQ = [],
        wQ = function(QQ, WQ) {
          var XQ, wQ;
          return null !== (XQ = null !== (wQ = QQ.here.find((QQ => QQ.name === WQ))) && void 0 !== wQ ? wQ : QQ.away.find((QQ => QQ.name === WQ))) && void 0 !== XQ ? XQ : null
        }(QQ, WQ);
      var TQ, zQ;
      return null !== wQ && void 0 !== wQ && wQ.can.kick && XQ.push((TQ = WQ, zQ = wQ.can.ban, {
        kind: "act",
        icon: "person-falling-burst",
        text: "lobbyManageEntry:kick",
        destructive: !1,
        confirm: null,
        analyticsClick: {
          id: "lobby_manage.kick",
          value: "profile_card"
        },
        run: sQ({
          type: "kick",
          name: TQ
        }, (() => zQ ? FQ(TQ) : null))
      })), null !== wQ && void 0 !== wQ && wQ.can.ban && XQ.push(FQ(WQ)), XQ.push({
        kind: "leave",
        icon: "users-gear",
        text: "lobbyManageEntry:manageLobby",
        destructive: !1,
        onClick: () => {
          (0, qQ.f)({
            page: "players",
            focusName: WQ,
            source: "profile_card"
          })
        }
      }), XQ
    }

    function gQ(QQ) {
      var WQ;
      return PQ(null !== (WQ = wQ.e.get("lobbyManage")) && void 0 !== WQ ? WQ : null, QQ)
    }
  },
  36859: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => gQ,
      c: () => FQ
    });
    var wQ = XQ(1532),
      qQ = XQ(2036),
      TQ = XQ(2003);
    const zQ = 1e4;
    let sQ = 0;

    function FQ(QQ) {
      const WQ = ++sQ;
      return new Promise((XQ => {
        const sQ = WQ => {
            FQ(), clearTimeout(PQ), !1 === (null === WQ || void 0 === WQ ? void 0 : WQ.ok) && (0, wQ.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: QQ.type
            }), XQ(WQ)
          },
          FQ = qQ.e.subscribe("lobbyManage", (QQ => {
            const XQ = function(QQ, WQ) {
              var XQ;
              return null !== (XQ = null === QQ || void 0 === QQ ? void 0 : QQ.results.find((QQ => QQ.requestId === WQ))) && void 0 !== XQ ? XQ : null
            }(QQ, WQ);
            null !== XQ && sQ(XQ)
          })),
          PQ = setTimeout((() => {
            sQ(null)
          }), zQ);
        TQ.gameBridge.send("lobbyManage", {
          ...QQ,
          requestId: WQ
        })
      }))
    }
    const PQ = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class gQ {
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FQ;
        this.onChange = QQ, this.sendAction = WQ, this.pending = new Map, this.statuses = new Map
      }
      send(QQ, WQ, XQ) {
        var wQ;
        return this.statuses.delete(WQ), this.pending.set(WQ, (null !== (wQ = this.pending.get(WQ)) && void 0 !== wQ ? wQ : 0) + 1), this.sendAction(QQ).then((QQ => {
          var wQ;
          const qQ = null !== QQ && void 0 !== QQ ? QQ : {
              requestId: -1,
              ok: !1,
              message: PQ
            },
            TQ = (null !== (wQ = this.pending.get(WQ)) && void 0 !== wQ ? wQ : 1) - 1;
          TQ > 0 ? this.pending.set(WQ, TQ) : this.pending.delete(WQ);
          const zQ = !qQ.ok || qQ.message.length > 0 ? qQ.message : null === XQ ? null : [XQ];
          return null !== zQ && this.statuses.set(WQ, {
            ok: qQ.ok,
            text: zQ,
            until: Date.now() + 4e3
          }), this.onChange(), qQ
        }))
      }
      show(QQ, WQ) {
        this.statuses.set(QQ, {
          ...WQ,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(QQ) {
        for (const [WQ, XQ] of this.statuses) XQ.until <= QQ && this.statuses.delete(WQ)
      }
      nextDeadline() {
        let QQ = null;
        for (const XQ of this.statuses.values()) {
          var WQ;
          QQ = Math.min(null !== (WQ = QQ) && void 0 !== WQ ? WQ : 1 / 0, XQ.until)
        }
        return QQ
      }
      statusOf(QQ, WQ) {
        const XQ = this.statuses.get(QQ);
        return !XQ || XQ.until <= WQ ? null : {
          ok: XQ.ok,
          text: XQ.text
        }
      }
      isPending(QQ) {
        return this.pending.has(QQ)
      }
    }
  },
  5094: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      g: () => DQ,
      d: () => VQ
    });
    var wQ = XQ(61),
      qQ = XQ(1498),
      TQ = XQ(1975),
      zQ = XQ(5103),
      sQ = XQ(1145);
    const FQ = (0, wQ.memo)((function(QQ) {
      let {
        initialParameters: WQ
      } = QQ;
      const XQ = (0, wQ.useRef)(null),
        qQ = (0, wQ.useRef)(null),
        FQ = (0, wQ.useRef)(0),
        PQ = (0, wQ.useRef)(null),
        gQ = WQ.description,
        JQ = WQ.WW,
        {
          scale: rQ,
          rotation: IQ
        } = null !== WQ && void 0 !== WQ ? WQ : {},
        jQ = (0, zQ.h)();
      return (0, wQ.useEffect)((() => {
        const QQ = jQ.onFrame((() => {
          const QQ = jQ.getState();
          if (!QQ.isActive || !XQ.current || !qQ.current) return;
          const WQ = QQ.state;
          if (XQ.current.value = WQ.progress, WQ.clickCount > FQ.current) {
            FQ.current = WQ.clickCount;
            const QQ = qQ.current;
            QQ.classList.add("pulse"), PQ.current = setTimeout((() => {
              QQ.classList.remove("pulse")
            }), 100)
          }
        }));
        return () => {
          clearTimeout(PQ.current), QQ()
        }
      }), [jQ]), (0, sQ.jsx)(sQ.Fragment, {
        children: (0, sQ.jsxs)("div", {
          className: "QTEProgressBarWrapper",
          style: {
            ...null !== rQ && {
              "--scale": rQ
            },
            ...null !== IQ && {
              "--rotation": `${IQ}deg`
            }
          },
          children: [(0, sQ.jsx)("progress", {
            id: "catch",
            max: 100,
            className: "QTEProgressBar",
            ref: XQ
          }), (0, sQ.jsx)("span", {
            className: "QTEProgressBarInteractionIndicator",
            ref: qQ,
            children: (0, sQ.jsx)(TQ.e, {
              text: [{
                icon: JQ
              }]
            })
          }), (0, sQ.jsx)("div", {
            className: "QTEProgressBarDescription",
            children: (0, sQ.jsx)(TQ.e, {
              text: gQ
            })
          })]
        })
      })
    }));
    var PQ = XQ(1081),
      gQ = XQ.n(PQ);
    const JQ = 2 * Math.PI * 90,
      rQ = (0, wQ.memo)((function(QQ) {
        let {
          initialParameters: WQ
        } = QQ;
        const XQ = (0, wQ.useRef)(null),
          qQ = (0, wQ.useRef)(null),
          FQ = (0, wQ.useRef)(null),
          PQ = WQ.label,
          rQ = WQ.icon,
          IQ = WQ.qW,
          {
            scale: jQ,
            rotation: BQ,
            TW: yQ
          } = null !== WQ && void 0 !== WQ ? WQ : {},
          VQ = (0, zQ.h)();
        return (0, wQ.useEffect)((() => {
          const QQ = VQ.onFrame((() => {
            var QQ, WQ;
            const wQ = VQ.getState();
            if (!wQ.isActive || !qQ.current) return;
            const TQ = wQ.state,
              zQ = null !== (QQ = TQ.timeRemaining) && void 0 !== QQ ? QQ : 0,
              sQ = null !== (WQ = TQ.wW) && void 0 !== WQ ? WQ : 1,
              PQ = JQ * (1 - zQ / sQ);
            qQ.current.style.strokeDashoffset = `${PQ}`, XQ.current && (XQ.current.style.opacity = zQ > 0 ? "1" : "0"), FQ.current && IQ && (FQ.current.textContent = `${(zQ/1e3).toFixed(1)}s`)
          }));
          return () => {
            QQ()
          }
        }), [VQ, IQ]), (0, sQ.jsxs)("div", {
          className: "QTETimedClick",
          ref: XQ,
          style: {
            ...null !== jQ && {
              "--scale": jQ
            },
            ...null !== BQ && {
              "--rotation": `${BQ}deg`
            }
          },
          children: [(0, sQ.jsxs)("div", {
            className: "QTETimedClickCircleContainer",
            children: [(0, sQ.jsxs)("svg", {
              className: "QTETimedClickCircularProgress",
              viewBox: "0 0 200 200",
              children: [(0, sQ.jsx)("circle", {
                className: "QTETimedClickProgressTrack",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12"
              }), (0, sQ.jsx)("circle", {
                className: "QTETimedClickProgressArc",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12",
                strokeLinecap: "square",
                strokeDasharray: JQ,
                ref: qQ
              })]
            }), (0, sQ.jsx)("div", {
              className: "QTETimedClickCenterContent",
              children: (0, sQ.jsx)(TQ.e, {
                text: [{
                  icon: rQ
                }],
                className: gQ()("QTETimedClickInnerText", {
                  QTETimedClickBreathe: yQ
                })
              })
            })]
          }), (0, sQ.jsxs)("div", {
            className: "QTETimedClickRightTextContainer",
            children: [(0, sQ.jsx)(TQ.e, {
              text: PQ,
              className: "QTETimedClickLabelText"
            }), IQ && (0, sQ.jsx)("span", {
              className: "QTETimedClickTimeText",
              ref: FQ
            })]
          })]
        })
      })),
      IQ = (0, wQ.memo)((function(QQ) {
        let {
          initialParameters: WQ
        } = QQ;
        const XQ = (0, wQ.useRef)(null),
          qQ = (0, wQ.useRef)(null),
          FQ = (0, wQ.useRef)(null),
          PQ = (0, wQ.useRef)(!1),
          gQ = WQ.description,
          JQ = null === WQ || void 0 === WQ ? void 0 : WQ.icon,
          rQ = (0, zQ.h)();
        return (0, wQ.useEffect)((() => {
          const QQ = rQ.onFrame((() => {
            const QQ = rQ.getState();
            if (!QQ.isActive) return;
            const WQ = QQ.state;
            if (XQ.current) {
              const QQ = 100 * (WQ.catchZonePosition - WQ.sW / 2);
              XQ.current.style.left = `${QQ}%`, XQ.current.style.width = 100 * WQ.sW + "%", WQ.isCatching !== PQ.current && (PQ.current = WQ.isCatching, WQ.isCatching ? XQ.current.classList.add("catching") : XQ.current.classList.remove("catching"))
            }
            qQ.current && (qQ.current.style.left = 100 * WQ.moverPosition + "%"), FQ.current && (FQ.current.value = WQ.progress)
          }));
          return () => {
            QQ()
          }
        }), [rQ]), (0, sQ.jsxs)("div", {
          className: "QTEGravityBar",
          children: [(0, sQ.jsx)("div", {
            className: "QTEGravityBarDescription",
            children: (0, sQ.jsx)(TQ.e, {
              text: gQ
            })
          }), (0, sQ.jsx)("progress", {
            max: 100,
            className: "QTEGravityBarProgress",
            ref: FQ
          }), (0, sQ.jsxs)("div", {
            className: "QTEGravityBarTrack",
            children: [(0, sQ.jsx)("div", {
              className: "QTEGravityBarCatchZone",
              ref: XQ
            }), (0, sQ.jsx)("div", {
              className: "QTEGravityBarMover",
              ref: qQ,
              children: (0, sQ.jsx)("span", {
                children: JQ && (0, sQ.jsx)(TQ.e, {
                  text: [{
                    icon: JQ,
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
    var jQ = XQ(663);
    const BQ = (0, wQ.memo)((function(QQ) {
        let {
          initialParameters: WQ
        } = QQ;
        const XQ = (0, wQ.useRef)(null),
          qQ = WQ.label,
          FQ = WQ.jW,
          {
            icon: PQ,
            scale: gQ,
            rotation: JQ
          } = null !== WQ && void 0 !== WQ ? WQ : {},
          rQ = 100 * (.5 - FQ / 2),
          IQ = 100 * FQ,
          BQ = (0, zQ.h)();
        return (0, wQ.useEffect)((() => {
          const QQ = BQ.onFrame((() => {
            const QQ = BQ.getState();
            if (!QQ.isActive || !XQ.current) return;
            const WQ = QQ.state;
            XQ.current.style.left = 100 * WQ.markerPosition + "%"
          }));
          return () => {
            QQ()
          }
        }), [BQ]), (0, sQ.jsxs)("div", {
          className: "QTEPrecisionBarWrapper",
          style: {
            ...!(0, jQ.G)(gQ) && {
              "--scale": gQ
            },
            ...!(0, jQ.G)(JQ) && {
              "--rotation": `${JQ}deg`
            }
          },
          children: [PQ && (0, sQ.jsx)(TQ.e, {
            text: [{
              icon: PQ
            }],
            className: "QTEPrecisionBarIcon"
          }), (0, sQ.jsxs)("div", {
            className: "QTEPrecisionBarTrack",
            children: [(0, sQ.jsx)("div", {
              className: "QTEPrecisionBarSuccessZone",
              style: {
                left: `${rQ}%`,
                width: `${IQ}%`
              }
            }), (0, sQ.jsx)("div", {
              className: "QTEPrecisionBarMarker",
              ref: XQ
            })]
          }), (0, sQ.jsx)("div", {
            className: "QTEPrecisionBarLabel",
            children: (0, sQ.jsx)(TQ.e, {
              text: qQ
            })
          })]
        })
      })),
      yQ = (0, wQ.memo)((function(QQ) {
        let {
          initialParameters: WQ
        } = QQ;
        const XQ = (0, wQ.useRef)(null),
          [qQ, FQ] = (0, wQ.useState)((() => new Array(WQ.yW).fill("pending"))),
          [PQ, gQ] = (0, wQ.useState)((() => {
            const QQ = WQ.pW;
            return (0, jQ.G)(QQ) || QQ <= 0 ? [] : new Array(QQ).fill("pending")
          })),
          JQ = WQ.label,
          {
            icon: rQ
          } = WQ,
          IQ = (0, wQ.useRef)(0),
          BQ = (0, wQ.useRef)(0),
          yQ = (0, wQ.useRef)([]),
          VQ = (0, zQ.h)();
        return (0, wQ.useEffect)((() => {
          const QQ = VQ.onFrame((() => {
            const QQ = VQ.getState();
            if (!QQ.isActive || !XQ.current) return;
            const WQ = QQ.state,
              wQ = 30 + 60 * WQ.outerCircleProgress;
            if (XQ.current.setAttribute("r", String(wQ)), !0 === WQ.lastClickResult && WQ.successes > IQ.current) {
              XQ.current.classList.remove("QTERhythmClickOuterCircle--miss"), XQ.current.classList.add("QTERhythmClickOuterCircle--hit");
              const QQ = setTimeout((() => {
                var QQ;
                null === (QQ = XQ.current) || void 0 === QQ || QQ.classList.remove("QTERhythmClickOuterCircle--hit")
              }), 200);
              yQ.current.push(QQ)
            } else if (!1 === WQ.lastClickResult && WQ.misses > BQ.current) {
              XQ.current.classList.remove("QTERhythmClickOuterCircle--hit"), XQ.current.classList.add("QTERhythmClickOuterCircle--miss");
              const QQ = setTimeout((() => {
                var QQ;
                null === (QQ = XQ.current) || void 0 === QQ || QQ.classList.remove("QTERhythmClickOuterCircle--miss")
              }), 200);
              yQ.current.push(QQ)
            }
            WQ.successes === IQ.current && WQ.misses === BQ.current || (IQ.current = WQ.successes, BQ.current = WQ.misses, FQ((QQ => {
              const XQ = [...QQ];
              for (let wQ = 0; wQ < WQ.yW; wQ++) XQ[wQ] = wQ < WQ.successes ? "success" : "pending";
              return XQ
            })), gQ((QQ => {
              if (0 === QQ.length) return QQ;
              const XQ = [...QQ];
              for (let wQ = 0; wQ < XQ.length; wQ++) XQ[wQ] = wQ < WQ.misses ? "miss" : "pending";
              return XQ
            })))
          }));
          return () => {
            QQ();
            for (const QQ of yQ.current) clearTimeout(QQ);
            yQ.current = []
          }
        }), [VQ]), (0, sQ.jsxs)("div", {
          className: "QTERhythmClickWrapper",
          children: [(0, sQ.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: qQ.map(((QQ, WQ) => (0, sQ.jsx)("div", {
              className: "QTERhythmClickDot" + ("success" === QQ ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
            }, WQ)))
          }), (0, sQ.jsxs)("div", {
            className: "QTERhythmClickCircleContainer",
            children: [(0, sQ.jsxs)("svg", {
              className: "QTERhythmClickSvg",
              viewBox: "0 0 200 200",
              children: [(0, sQ.jsx)("circle", {
                className: "QTERhythmClickInnerCircle",
                cx: "100",
                cy: "100",
                r: 30
              }), (0, sQ.jsx)("circle", {
                className: "QTERhythmClickOuterCircle",
                cx: "100",
                cy: "100",
                r: 90,
                ref: XQ
              })]
            }), rQ && (0, sQ.jsx)("div", {
              className: "QTERhythmClickCenterContent",
              children: (0, sQ.jsx)(TQ.e, {
                text: [{
                  icon: rQ
                }],
                className: "QTERhythmClickIcon"
              })
            })]
          }), PQ.length > 0 && (0, sQ.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: PQ.map(((QQ, WQ) => (0, sQ.jsx)("div", {
              className: "QTERhythmClickDot" + ("miss" === QQ ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
            }, WQ)))
          }), (0, sQ.jsx)("div", {
            className: "QTERhythmClickLabel",
            children: (0, sQ.jsx)(TQ.e, {
              text: JQ
            })
          })]
        })
      }));

    function VQ(QQ) {
      let {
        qte: WQ
      } = QQ;
      switch (WQ.type) {
        case "progressBar":
          return (0, sQ.jsx)(FQ, {
            initialParameters: WQ.parameters
          });
        case "timedClick":
          return (0, sQ.jsx)(rQ, {
            initialParameters: WQ.parameters
          });
        case "gravityBar":
          return (0, sQ.jsx)(IQ, {
            initialParameters: WQ.parameters
          });
        case "precisionBar":
          return (0, sQ.jsx)(BQ, {
            initialParameters: WQ.parameters
          });
        case "rhythmClick":
          return (0, sQ.jsx)(yQ, {
            initialParameters: WQ.parameters
          });
        default:
          return console.warn("Unknown QTE type"), null
      }
    }
    const DQ = (0, wQ.memo)((function() {
      const [QQ, WQ] = (0, wQ.useState)({
        type: null,
        parameters: null,
        state: null,
        isActive: !1
      });
      return (0, qQ.f)("qteStateUpdated", (QQ => {
        WQ(QQ)
      })), QQ.isActive && QQ.type ? (0, sQ.jsx)("div", {
        className: "QTE",
        "data-camera-keeper": "",
        children: (0, sQ.jsx)(VQ, {
          qte: QQ
        })
      }) : null
    }))
  },
  5103: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => sQ,
      h: () => FQ
    });
    var wQ = XQ(61),
      qQ = XQ(1345),
      TQ = XQ(5111);
    const zQ = {
        getState: () => TQ.c.getCurrentState(),
        onFrame: qQ.q
      },
      sQ = (0, wQ.createContext)(zQ);

    function FQ() {
      return (0, wQ.useContext)(sQ)
    }
  },
  36644: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => gQ,
      f: () => rQ
    });
    var wQ = XQ(61),
      qQ = XQ(1404),
      TQ = XQ(1226),
      zQ = XQ(1391),
      sQ = XQ(3732),
      FQ = XQ(5283),
      PQ = XQ(1145);

    function gQ(QQ) {
      let {
        loading: WQ,
        schematics: XQ,
        onSchematicPicked: wQ,
        selectedSchematicIdList: qQ = [],
        disableAutoExport: FQ
      } = QQ;
      const {
        t: gQ
      } = (0, TQ.C)();
      return (0, PQ.jsxs)("div", {
        className: "SchematicList",
        children: [WQ && (0, PQ.jsx)(zQ.e, {}), !WQ && 0 === XQ.length && (0, PQ.jsx)("div", {
          className: "NoSchematicsText",
          children: gQ("worldBuilder:noSavedSchematic")
        }), !WQ && XQ.map((QQ => (0, PQ.jsx)(sQ.d, {
          source: {
            type: "schematic",
            schematic: QQ
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            wQ(QQ)
          },
          isSelected: qQ.includes(QQ.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: QQ.isAutoExported && FQ,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, QQ.schematicId)))]
      })
    }

    function JQ(QQ) {
      let {
        ownedSchematics: WQ,
        currentWorldSchematicId: XQ,
        onClose: qQ
      } = QQ;
      const {
        t: zQ
      } = (0, TQ.C)(), [sQ, JQ] = (0, wQ.useState)(null);
      return (0, PQ.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === sQ && (0, PQ.jsxs)(PQ.Fragment, {
          children: [(0, PQ.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: zQ("worldBuilder:schematicList")
          }), (0, PQ.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: zQ("worldBuilder:clickSchematicForOptions")
          }), (0, PQ.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, PQ.jsx)(gQ, {
              loading: !1,
              schematics: WQ,
              onSchematicPicked: QQ => {
                JQ(QQ)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== sQ && (0, PQ.jsx)(FQ.h, {
          schematic: sQ,
          inSourceWorld: sQ.schematicId === XQ,
          onSchematicUpdate: QQ => {
            JQ(QQ)
          },
          onClose: () => {
            JQ(null), qQ()
          }
        })]
      })
    }

    function rQ(QQ) {
      let {
        ownedSchematics: WQ,
        currentWorldSchematicId: XQ,
        onClose: wQ
      } = QQ;
      qQ.NotificationProvider.showCustomPopup({
        body: QQ => (0, PQ.jsx)(JQ, {
          ownedSchematics: WQ,
          currentWorldSchematicId: XQ,
          onClose: QQ
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: wQ,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  37207: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => UQ,
      h: () => GQ
    });
    var wQ = XQ(4553),
      qQ = XQ(1498),
      TQ = XQ(61),
      zQ = XQ(6873),
      sQ = XQ(4541),
      FQ = XQ(1335),
      PQ = XQ(2003),
      gQ = XQ(1975),
      JQ = XQ(1507),
      rQ = XQ(1226),
      IQ = XQ(37212),
      jQ = XQ(1081),
      BQ = XQ.n(jQ),
      yQ = XQ(1360),
      VQ = XQ(1094),
      DQ = XQ(1318),
      pQ = XQ(1145);
    const GQ = "SleepingOverlay";

    function UQ() {
      const {
        t: QQ
      } = (0, rQ.C)(), [WQ, XQ] = (0, TQ.useState)(!1), [jQ, UQ] = (0, TQ.useState)(null), [vQ, dQ] = (0, TQ.useState)(1), [HQ, aQ] = (0, TQ.useState)(!1), [lQ, hQ] = (0, TQ.useState)(!1), iQ = (0, TQ.useRef)(0), cQ = (0, TQ.useRef)(!1), AQ = (0, TQ.useRef)(!1), RQ = (0, TQ.useRef)(), EQ = (0, TQ.useRef)(null);

      function CQ() {
        const QQ = null !== jQ && void 0 !== jQ ? jQ : "Rested Speed";
        PQ.gameBridge.send("wakeUp", lQ ? QQ : null), EQ.current = null, XQ(!1), UQ(null), dQ(1), aQ(!1), hQ(!1)
      }

      function uQ() {
        return !HQ && (CQ(), !0)
      }
      return (0, qQ.f)("PlayerPhysicsTypeUpdate", (QQ => {
        QQ !== EQ.current && (EQ.current = QQ, QQ === zQ.s.SLEEPING ? (AQ.current || (iQ.current = PQ.gameBridge.lookup("cameraZoom", null), AQ.current = !0), cQ.current = !0, PQ.gameBridge.send("setCameraZoom", 3), XQ(!0), dQ(function() {
          for (const QQ of PQ.gameBridge.lookup("blocksStandingOn", null)) {
            if (IQ.e.leafBeds.includes(QQ)) return console.log(`Found leaf bed: ${QQ}`), 1;
            if (IQ.e.woolBeds.includes(QQ)) return console.log(`Found woold bed: ${QQ}`), 2;
            if (IQ.e.strongBeds.includes(QQ)) return console.log(`Found strong bed ${QQ}`), 3
          }
          return 1
        }())) : (AQ.current = !1, XQ(!1), UQ(null), dQ(1)))
      })), (0, TQ.useEffect)((() => () => {
        (0, FQ.y)(GQ)
      }), []), (0, TQ.useEffect)((() => {
        WQ ? (0, FQ.z)(GQ) : ((0, FQ.y)(GQ), cQ.current && (PQ.gameBridge.send("setCameraZoom", iQ.current), cQ.current = !1))
      }), [WQ]), (0, DQ.k)("overlay", RQ, uQ, WQ), (0, pQ.jsx)(wQ.c, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: WQ,
        timeout: 300,
        nodeRef: RQ,
        unmountOnExit: !0,
        children: (0, pQ.jsx)("div", {
          ref: RQ,
          onClick: QQ => {
            uQ() && QQ.stopPropagation()
          },
          children: (0, pQ.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, pQ.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: sQ.l.map((WQ => (0, pQ.jsxs)(bQ, {
                restedEffect: WQ,
                dF: jQ,
                setChosenRestedEffect: UQ,
                children: [(0, pQ.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, pQ.jsx)(gQ.e, {
                    text: [{
                      icon: WQ
                    }]
                  }), sQ.h[WQ].shortName]
                }), (0, pQ.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: QQ(sQ.h[WQ].description, {
                    time: sQ.h[WQ].effectLevelDurations[vQ] / 6e4
                  })
                })]
              }, WQ)))
            }), (0, pQ.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, pQ.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, pQ.jsxs)(JQ.h, {
                className: "SleepingOverlayWakeUpButton",
                onClick: QQ => {
                  lQ ? CQ() : (aQ(!0), (0, yQ.X)((() => {
                    aQ(!1), hQ(!0)
                  }), !0)), QQ.stopPropagation()
                },
                loading: HQ,
                children: [!lQ && (0, pQ.jsxs)(pQ.Fragment, {
                  children: [(0, pQ.jsx)(VQ.d, {
                    name: "film"
                  }), " ", QQ("classicGame:watchAdToGetRestedPerk")]
                }), lQ && QQ("classicGame:wakeUp")]
              }), (0, pQ.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, pQ.jsx)("div", {
                  className: BQ()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === vQ
                  }),
                  children: (0, pQ.jsx)(gQ.e, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, pQ.jsx)("div", {
                  className: BQ()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === vQ
                  }),
                  children: (0, pQ.jsx)(gQ.e, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, pQ.jsx)("div", {
                  className: BQ()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === vQ
                  }),
                  children: (0, pQ.jsx)(gQ.e, {
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
    const bQ = (0, TQ.memo)((function(QQ) {
      let {
        children: WQ,
        restedEffect: XQ,
        dF: wQ,
        setChosenRestedEffect: qQ
      } = QQ;
      return XQ === wQ ? (0, pQ.jsx)(JQ.s, {
        onClick: QQ => {
          QQ.stopPropagation()
        },
        children: WQ
      }) : (0, pQ.jsx)(JQ.l, {
        onClick: QQ => {
          qQ(XQ), QQ.stopPropagation()
        },
        children: WQ
      })
    }))
  },
  5263: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => sQ
    });
    var wQ = XQ(61),
      qQ = XQ(1081),
      TQ = XQ.n(qQ),
      zQ = XQ(1145);

    function sQ(QQ) {
      let {
        columns: WQ,
        rows: XQ,
        getRowKey: qQ,
        renderRow: sQ,
        className: FQ
      } = QQ;
      return (0, zQ.jsxs)("table", {
        className: TQ()("Table", FQ),
        children: [(0, zQ.jsx)("thead", {
          children: (0, zQ.jsx)("tr", {
            children: WQ.map((QQ => (0, zQ.jsx)("th", {
              children: QQ.header
            }, QQ.key)))
          })
        }), (0, zQ.jsx)("tbody", {
          children: XQ.map((QQ => (0, zQ.jsx)(wQ.Fragment, {
            children: sQ(QQ)
          }, qQ(QQ))))
        })]
      })
    }
  },
  36987: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => TQ,
      h: () => zQ,
      i: () => sQ,
      k: () => FQ
    });
    var wQ = XQ(61),
      qQ = XQ(3379);
    const TQ = 8,
      zQ = "InGameHeaderContainer",
      sQ = "TopRightElements";

    function FQ(QQ) {
      const [WQ] = (0, qQ.d)(), [XQ, FQ] = (0, wQ.useState)(!1);
      return (0, wQ.useLayoutEffect)((() => {
        if (!QQ) return;
        const WQ = document.querySelector(`.${zQ}`),
          XQ = document.querySelector(`.${sQ}`),
          wQ = () => {
            const wQ = QQ.getBoundingClientRect(),
              qQ = WQ ? WQ.getBoundingClientRect().right : 0,
              zQ = XQ ? XQ.getBoundingClientRect().left : window.innerWidth,
              sQ = wQ.left < qQ + TQ,
              PQ = wQ.right > zQ - TQ;
            FQ(sQ || PQ)
          };
        wQ();
        const qQ = new ResizeObserver(wQ);
        return qQ.observe(QQ), WQ && qQ.observe(WQ), XQ && qQ.observe(XQ), () => {
          qQ.disconnect()
        }
      }), [QQ, WQ]), XQ
    }
  },
  37031: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => JQ
    });
    var wQ = XQ(61),
      qQ = XQ(1081),
      TQ = XQ.n(qQ),
      zQ = XQ(1739),
      sQ = XQ(1507),
      FQ = XQ(1391),
      PQ = XQ(1094),
      gQ = XQ(1145);

    function JQ(QQ) {
      let {
        label: WQ,
        icon: XQ,
        placeholder: qQ,
        onSubmit: JQ
      } = QQ;
      const rQ = (0, wQ.useRef)(null),
        [IQ, jQ] = (0, wQ.useState)(""),
        [BQ, yQ] = (0, wQ.useState)("Enter"),
        [VQ, DQ] = (0, wQ.useState)(null);
      (0, wQ.useEffect)((() => {
        if ("Success" !== BQ && "Error" !== BQ) return;
        const QQ = setTimeout((() => {
          "Success" === BQ && rQ.current && (rQ.current.value = "", jQ("")), yQ("Enter")
        }), "Success" === BQ ? 1e3 : 4e3);
        return () => {
          clearTimeout(QQ)
        }
      }), [BQ]);
      const pQ = () => {
        const QQ = IQ.trim();
        "" !== QQ && "Enter" === BQ && (yQ("Loading"), JQ(QQ).then((QQ => {
          rQ.current && ("error" in QQ ? null === QQ.error ? yQ("Enter") : (DQ(QQ.error), yQ("Error")) : yQ("Success"))
        })))
      };
      return (0, gQ.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: QQ => {
          QQ.target === rQ.current && "Escape" !== QQ.key && QQ.stopPropagation()
        },
        children: [(0, gQ.jsxs)("div", {
          className: TQ()("AddFriendBodyOverlay", `AddFriendBodyOverlay${BQ}`),
          children: ["Loading" === BQ && (0, gQ.jsx)(FQ.e, {}), "Success" === BQ && (0, gQ.jsx)(PQ.d, {
            name: "check"
          }), "Error" === BQ && VQ]
        }), (0, gQ.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, gQ.jsx)(zQ.e, {
            className: "PlayerSearchInput",
            domRef: rQ,
            maxLength: 32,
            placeholderText: qQ,
            ariaLabel: qQ,
            stopPropagation: !1,
            onValueChange: QQ => {
              jQ(QQ)
            },
            onEnter: pQ
          }), (0, gQ.jsxs)(sQ.h, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== BQ || "" === IQ.trim(),
            onClick: pQ,
            children: [(0, gQ.jsx)(PQ.d, {
              name: XQ
            }), " ", WQ]
          })]
        })]
      })
    }
  },
  37015: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => JQ
    });
    var wQ = XQ(61),
      qQ = XQ(1081),
      TQ = XQ.n(qQ),
      zQ = XQ(1226),
      sQ = XQ(1094),
      FQ = XQ(1145);
    const PQ = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      gQ = ["unlisted", "public", "whitelist", "private"];

    function JQ(QQ) {
      let {
        visibility: WQ,
        onPick: XQ
      } = QQ;
      const {
        t: qQ
      } = (0, zQ.C)(), JQ = (0, wQ.useRef)([]);
      return (0, FQ.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": qQ("worldSocial:whoCanJoin"),
        children: gQ.map(((QQ, wQ) => {
          const zQ = QQ === WQ;
          return (0, FQ.jsxs)("button", {
            ref: QQ => {
              JQ.current[wQ] = QQ
            },
            type: "button",
            className: TQ()("WorldSocialTile", {
              WorldSocialTileSelected: zQ
            }),
            "aria-pressed": zQ,
            tabIndex: zQ ? 0 : -1,
            onKeyDown: QQ => {
              ((QQ, WQ) => {
                const XQ = "ArrowRight" === QQ.key || "ArrowDown" === QQ.key ? 1 : "ArrowLeft" === QQ.key || "ArrowUp" === QQ.key ? -1 : 0;
                var wQ;
                0 !== XQ && (QQ.preventDefault(), null === (wQ = JQ.current[(WQ + XQ + gQ.length) % gQ.length]) || void 0 === wQ || wQ.focus())
              })(QQ, wQ)
            },
            onClick: () => {
              XQ(QQ)
            },
            children: [(0, FQ.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, FQ.jsx)(sQ.d, {
                name: PQ[QQ]
              })
            }), (0, FQ.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, FQ.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: qQ(`worldSocial:${QQ}`)
              }), (0, FQ.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: qQ(`worldSocial:${QQ}Description`)
              })]
            })]
          }, QQ)
        }))
      })
    }
  },
  37024: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => sQ
    });
    var wQ = XQ(1226),
      qQ = XQ(2798),
      TQ = XQ(4677),
      zQ = XQ(1145);

    function sQ(QQ) {
      let {
        fJ: WQ,
        children: XQ,
        ...sQ
      } = QQ;
      const {
        t: FQ
      } = (0, wQ.C)();
      return (0, zQ.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          WQ.onChange(!WQ.on)
        },
        children: (0, zQ.jsx)(qQ.g, {
          ...sQ,
          opensProfileCard: !1,
          children: (0, zQ.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: QQ => {
              QQ.stopPropagation()
            },
            children: [XQ, (0, zQ.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, zQ.jsx)(TQ.b, {
                checked: WQ.on,
                disabled: !1,
                ariaLabel: FQ("worldSocial:letJoin", {
                  playerName: sQ.playerSocialPreview.name
                }),
                onChange: QQ => {
                  WQ.onChange(QQ.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  37011: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => jQ
    });
    var wQ = XQ(61),
      qQ = XQ(1226),
      TQ = XQ(1927),
      zQ = XQ(105),
      sQ = XQ(26),
      FQ = XQ(1532),
      PQ = XQ(2833),
      gQ = XQ(34408),
      JQ = XQ(1507),
      rQ = XQ(1094),
      IQ = XQ(1145);

    function jQ(QQ) {
      let {
        worldCode: WQ,
        message: XQ
      } = QQ;
      const {
        t: jQ
      } = (0, qQ.C)(), {
        isTouchScreen: BQ
      } = (0, sQ.n)(["isTouchScreen"]), yQ = zQ.featureFlags.canUseInviteLinks, VQ = (0, gQ.f)(yQ && null === XQ), [DQ, pQ] = (0, PQ.h)(), GQ = (0, wQ.useRef)(null);
      if (null !== XQ) return (0, IQ.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, IQ.jsx)(rQ.d, {
          name: "lock"
        }), (0, IQ.jsx)("span", {
          children: XQ
        })]
      });
      const UQ = yQ ? VQ : WQ,
        bQ = BQ && yQ && (0, PQ.c)();
      return (0, IQ.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!yQ && (0, IQ.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: jQ("worldSocial:worldCode")
        }), (0, IQ.jsx)("input", {
          ref: GQ,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== UQ && void 0 !== UQ ? UQ : "",
          "aria-label": jQ(yQ ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: QQ => {
            QQ.currentTarget.select()
          }
        }), (0, IQ.jsxs)(JQ.h, {
          className: "WorldSocialCopy",
          disabled: null === UQ,
          onClick: () => {
            null !== UQ && (0, PQ.g)(UQ, {
              useShareSheet: bQ,
              onOutcome: QQ => {
                if ((0, FQ.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== QQ || yQ ? QQ : "code"
                  }), "copied" === QQ) pQ();
                else if ("failed" === QQ) {
                  var WQ;
                  null === (WQ = GQ.current) || void 0 === WQ || WQ.focus(), TQ.g.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, IQ.jsx)(rQ.d, {
            name: DQ ? "check" : bQ ? "up-from-bracket" : "copy"
          }), " ", jQ(DQ ? "general:copied" : bQ ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  37022: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => IQ,
      f: () => rQ,
      h: () => JQ
    });
    var wQ = XQ(646),
      qQ = XQ(1226),
      TQ = XQ(1707),
      zQ = XQ(2798),
      sQ = XQ(2756),
      FQ = XQ(1507),
      PQ = XQ(37024),
      gQ = XQ(1145);

    function JQ(QQ, WQ) {
      var XQ;
      return {
        isError: !1,
        name: QQ,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== WQ && void 0 !== WQ ? WQ : {},
        nameColour: null !== (XQ = null === WQ || void 0 === WQ ? void 0 : WQ.nameColour) && void 0 !== XQ ? XQ : wQ.e,
        location: {
          status: "offline"
        }
      }
    }

    function rQ(QQ) {
      let {
        player: WQ,
        isFriend: XQ = !1,
        status: wQ,
        showLocation: FQ = void 0 === wQ,
        fJ: JQ,
        onSendFriendRequest: rQ,
        actions: IQ,
        zIndex: jQ
      } = QQ;
      const {
        t: BQ
      } = (0, qQ.C)();
      let yQ = wQ;
      null !== JQ && void 0 !== JQ && JQ.on && (yQ = (0, gQ.jsxs)(gQ.Fragment, {
        children: [null !== wQ && void 0 !== wQ ? wQ : (0, gQ.jsx)(sQ.b, {
          socialPreview: WQ
        }), (0, gQ.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", BQ("worldSocial:canJoin")]
        })]
      }));
      const VQ = {
        playerSocialPreview: WQ,
        isFriend: XQ,
        hideFriendBadge: !0,
        onFriendRemoved: XQ ? QQ => {
          TQ.d.removeFriendFromState(QQ)
        } : void 0,
        status: yQ,
        showLocation: FQ,
        onSendFriendRequest: rQ,
        zIndex: jQ
      };
      return JQ ? (0, gQ.jsx)(PQ.c, {
        ...VQ,
        fJ: JQ,
        children: IQ
      }) : (0, gQ.jsx)(zQ.g, {
        ...VQ,
        opensProfileCard: !1,
        children: IQ || void 0
      })
    }

    function IQ(QQ) {
      let {
        row: WQ,
        fJ: XQ,
        canInvite: wQ,
        invited: TQ,
        onInvite: zQ,
        zIndex: sQ
      } = QQ;
      const {
        t: PQ
      } = (0, qQ.C)(), JQ = "online" === WQ.place ? FQ.h : FQ.l;
      return (0, gQ.jsx)(rQ, {
        player: WQ.friend,
        isFriend: !0,
        status: "here" === WQ.place ? PQ("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        fJ: XQ,
        zIndex: sQ,
        actions: wQ && (0, gQ.jsx)(JQ, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: TQ,
          onClick: zQ,
          ariaLabel: `${PQ("worldSocial:invite")} ${WQ.friend.name}`,
          children: PQ(TQ ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  37003: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => FQ,
      g: () => zQ,
      h: () => PQ
    });
    var wQ = XQ(61),
      qQ = XQ(4912),
      TQ = XQ(1927);

    function zQ(QQ) {
      const WQ = {
        lobbyName: QQ,
        answer: null,
        response: qQ.b.getSocialSettings(QQ)
      };
      return WQ.response.then((QQ => {
        WQ.answer = QQ
      })), WQ
    }
    const sQ = new Map;

    function FQ(QQ) {
      sQ.set(QQ.lobbyName, QQ)
    }

    function PQ(QQ) {
      const [WQ] = (0, wQ.useState)((() => function(QQ) {
        var WQ;
        const XQ = null !== (WQ = sQ.get(QQ)) && void 0 !== WQ ? WQ : null;
        return null !== XQ && void 0 !== XQ && XQ.answer && "error" in XQ.answer ? null : XQ
      }(QQ))), [XQ, zQ] = (0, wQ.useState)((() => null !== WQ && void 0 !== WQ && WQ.answer && "settings" in WQ.answer ? WQ.answer.settings : null)), [FQ, PQ] = (0, wQ.useState)(!0), [gQ, JQ] = (0, wQ.useState)(null !== XQ), rQ = (0, wQ.useRef)(XQ);
      rQ.current = XQ;
      const IQ = (0, wQ.useRef)(0),
        jQ = (0, wQ.useRef)(0),
        BQ = (0, wQ.useRef)(!1),
        yQ = (0, wQ.useRef)(!0),
        VQ = (0, wQ.useCallback)((async WQ => {
          const XQ = ++IQ.current,
            wQ = await (null !== WQ && void 0 !== WQ ? WQ : qQ.b.getSocialSettings(QQ));
          yQ.current && XQ === IQ.current && (JQ(!0), PQ(!1), "error" in wQ || zQ(wQ.settings))
        }), [QQ]),
        DQ = (0, wQ.useCallback)((() => {
          PQ(!0), VQ()
        }), [VQ]),
        pQ = (0, wQ.useCallback)((() => {
          jQ.current > 0 ? BQ.current = !0 : VQ()
        }), [VQ]);
      (0, wQ.useEffect)((() => (yQ.current = !0, sQ.delete(QQ), PQ(!0), VQ(null === WQ || void 0 === WQ ? void 0 : WQ.response), () => {
        yQ.current = !1
      })), [VQ, QQ, WQ]);
      const GQ = QQ => {
        IQ.current++, PQ(!1), rQ.current = QQ, zQ(QQ)
      };
      return {
        settings: XQ,
        loading: FQ,
        answered: gQ,
        retry: DQ,
        refresh: pQ,
        change: async function(WQ, XQ) {
          let {
            quiet: wQ = !1,
            onAnswer: zQ
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const sQ = rQ.current;
          if (null === sQ) return !1;
          GQ(XQ(sQ)), jQ.current > 0 && (BQ.current = !0), jQ.current++;
          const FQ = await qQ.b.setSocialSettings(QQ, WQ);
          jQ.current--;
          const PQ = !("error" in FQ);
          if (!yQ.current) return PQ;
          if (null === zQ || void 0 === zQ || zQ(FQ), wQ);
          else if ("error" in FQ) TQ.g.showMessage({
            translationKey: FQ.error
          });
          else
            for (const QQ of FQ.notFound) TQ.g.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: QQ
              }
            });
          if (jQ.current > 0) return PQ;
          const gQ = BQ.current;
          return BQ.current = !1, !gQ && "settings" in FQ ? GQ(FQ.settings) : (gQ || GQ(sQ), VQ()), PQ
        }
      }
    }
  },
  37038: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => zQ,
      e: () => TQ
    });
    var wQ = XQ(193);
    const qQ = new Map;

    function TQ(QQ, WQ) {
      var XQ;
      const wQ = null !== (XQ = qQ.get(QQ)) && void 0 !== XQ ? XQ : new Map;
      wQ.set(WQ, Date.now()), qQ.set(QQ, wQ)
    }

    function zQ(QQ) {
      const WQ = qQ.get(QQ);
      if (!WQ) return [];
      const XQ = Date.now();
      for (const [qQ, TQ] of WQ) XQ - TQ >= wQ.i && WQ.delete(qQ);
      return [...WQ.keys()]
    }
  },
  37008: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ) {
      const XQ = WQ.toLowerCase();
      for (const wQ of QQ)
        if (wQ.toLowerCase() === XQ) return !0;
      return !1
    }

    function qQ(QQ, WQ, XQ) {
      const qQ = [],
        TQ = [],
        zQ = [];
      for (const sQ of QQ) !sQ.isError && sQ.name && ("inGame" === sQ.location.status && sQ.location.inLobbyName === WQ || wQ(XQ, sQ.name) ? TQ.push({
        friend: sQ,
        place: "here"
      }) : "offline" === sQ.location.status ? zQ.push({
        friend: sQ,
        place: "offline"
      }) : qQ.push({
        friend: sQ,
        place: "online"
      }));
      return [...qQ, ...TQ, ...zQ]
    }

    function TQ(QQ, WQ, XQ) {
      const qQ = [],
        TQ = QQ.flatMap((QQ => "here" === QQ.place ? [QQ.friend.name] : []));
      for (const zQ of [...TQ, ...WQ]) wQ(qQ, zQ) || wQ(XQ, zQ) || qQ.push(zQ);
      return qQ
    }

    function zQ(QQ, WQ) {
      return null === QQ || void 0 === QQ || !QQ.canManage || wQ(QQ.whitelist, WQ) ? "none" : "whitelist" === QQ.visibility ? "required" : "quiet"
    }

    function sQ(QQ) {
      if (null === QQ) return !0;
      const {
        visibility: WQ
      } = QQ;
      return "public" === WQ || "unlisted" === WQ || "whitelist" === WQ && QQ.canManage
    }

    function FQ(QQ, WQ, XQ) {
      if (XQ) {
        const XQ = WQ.filter((WQ => !wQ(QQ.whitelist, WQ)));
        return {
          ...QQ,
          whitelist: [...QQ.whitelist, ...XQ]
        }
      }
      return {
        ...QQ,
        whitelist: QQ.whitelist.filter((QQ => !wQ(WQ, QQ)))
      }
    }

    function PQ(QQ, WQ) {
      const XQ = [];
      for (let wQ = 0; wQ < QQ.length; wQ += WQ) XQ.push(QQ.slice(wQ, wQ + WQ));
      return XQ
    }
    XQ.d(WQ, {
      c: () => sQ,
      f: () => TQ,
      g: () => qQ,
      j: () => wQ,
      m: () => PQ,
      p: () => zQ,
      r: () => FQ
    })
  },
  9119: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => zQ,
      i: () => TQ
    });
    var wQ = XQ(2067);
    const qQ = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      TQ = QQ => "string" === typeof QQ.icon && "" !== QQ.icon && "string" === typeof QQ.keycode && qQ.test(QQ.keycode),
      zQ = QQ => "Space" === QQ ? "_" : wQ.f[QQ]
  },
  9168: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => qQ
    });
    var wQ = XQ(26);

    function qQ() {
      return !wQ.b.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  9170: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      B: () => JQ,
      D: () => gQ,
      G: () => rQ,
      H: () => IQ,
      e: () => TQ,
      i: () => sQ,
      m: () => PQ,
      p: () => FQ,
      r: () => zQ,
      v: () => qQ,
      y: () => wQ,
      z: () => jQ
    });
    const wQ = 14,
      qQ = 6,
      TQ = (wQ + qQ) / 2,
      zQ = 200,
      sQ = zQ / 2,
      FQ = zQ / 2 - 1,
      PQ = qQ / wQ * (zQ / 2),
      gQ = (QQ, WQ) => -Math.PI / 2 + 2 * QQ * Math.PI / WQ,
      JQ = (QQ, WQ, XQ) => {
        const wQ = 2 * Math.PI / XQ;
        return (Math.round((Math.atan2(WQ, QQ) + Math.PI / 2) / wQ) % XQ + XQ) % XQ
      },
      rQ = .5,
      IQ = (QQ, WQ, XQ) => Math.hypot(QQ.x, QQ.y) < rQ ? XQ : JQ(QQ.x, QQ.y, WQ),
      jQ = (QQ, WQ, XQ, wQ, qQ) => {
        const TQ = Math.PI / WQ,
          zQ = gQ(QQ, WQ),
          sQ = zQ - TQ,
          FQ = zQ + TQ,
          PQ = (QQ, WQ) => `${XQ+QQ*Math.cos(WQ)} ${XQ+QQ*Math.sin(WQ)}`;
        return [`M ${PQ(wQ,sQ)}`, `L ${PQ(qQ,sQ)}`, `A ${qQ} ${qQ} 0 0 1 ${PQ(qQ,FQ)}`, `L ${PQ(wQ,FQ)}`, `A ${wQ} ${wQ} 0 0 0 ${PQ(wQ,sQ)}`, "Z"].join(" ")
      }
  },
  37186: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => TQ
    });
    var wQ = XQ(26),
      qQ = XQ(1360);

    function TQ() {
      const {
        clientEscMenuOptions: QQ
      } = (0, wQ.n)(["clientEscMenuOptions"]);
      return (0, qQ.w)() && QQ.showChat
    }
  },
  9195: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => zQ
    });
    var wQ = XQ(61),
      qQ = XQ(9145),
      TQ = XQ(2535);

    function zQ() {
      const QQ = (0, TQ.g)("shopInfo"),
        [, WQ] = (0, wQ.useReducer)((QQ => QQ + 1), 0);
      return (0, TQ.d)("shopInfo", WQ), !(0, qQ.b)(QQ)
    }
  },
  37286: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => TQ
    });
    var wQ = XQ(61),
      qQ = XQ(2535);

    function TQ() {
      const QQ = (0, qQ.g)("lobbyLeaderboardInfo");
      return (0, wQ.useMemo)((() => function(QQ) {
        if (null === QQ) return null;
        const WQ = Object.entries(QQ),
          XQ = WQ.filter((QQ => {
            let [, WQ] = QQ;
            return void 0 !== WQ
          }));
        if (XQ.length === WQ.length) return QQ;
        const wQ = Object.fromEntries(XQ),
          qQ = Object.keys(QQ).filter((QQ => !Object.hasOwn(wQ, QQ)));
        return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${qQ.join(", ")}`), wQ
      }(QQ)), [QQ])
    }
  },
  37136: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => FQ
    });
    var wQ = XQ(2997),
      qQ = XQ(3907),
      TQ = XQ(3158);
    const zQ = ["Unable to create vertex buffer"];
    let sQ = {};

    function FQ(QQ, WQ) {
      const XQ = new Date;
      console.error(`${XQ.getUTCHours()}:${XQ.getUTCMinutes()}:${XQ.getUTCSeconds()}`, QQ, WQ, null === WQ || void 0 === WQ ? void 0 : WQ.stack), zQ.includes(null === WQ || void 0 === WQ ? void 0 : WQ.message) && (console.error("Unrecoverable error occurred. Leaving game."), (0, wQ.d)().client.leaveGameUnwanted({
        reason: `Unrecoverable error occurred.\nThis is a bug.\n\nError:\n${WQ.message}\n\nPlease refresh the page.`,
        requiresRefresh: !0,
        canReconnect: !1,
        automaticallyReconnect: !1
      })), (0, TQ.logError)("warning", `${QQ}\n ${WQ} "\n" ${null===WQ||void 0===WQ?void 0:WQ.stack}`);
      const qQ = QQ + WQ + (null === WQ || void 0 === WQ ? void 0 : WQ.stack);
      qQ in sQ || ((0, TQ.logError)("error", `${QQ}\n ${WQ} "\n" ${null===WQ||void 0===WQ?void 0:WQ.stack}`), sQ[qQ] = !0)
    }(0, qQ.onGameReset)((() => {
      sQ = {}
    }))
  },
  5187: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => EQ,
      f: () => RQ
    });
    var wQ = XQ(5196),
      qQ = XQ(382);
    const TQ = 120,
      zQ = 260,
      sQ = 1.15,
      FQ = 1.2,
      PQ = 2,
      gQ = 1.08,
      JQ = .8,
      rQ = .95,
      IQ = 8,
      jQ = "[\"')\\]\u300d\u300f\uff09]*",
      BQ = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${jQ}$`),
      yQ = new RegExp(`[?\uff1f]${jQ}$`),
      VQ = new RegExp(`[!\uff01]${jQ}$`),
      DQ = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      pQ = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      GQ = new RegExp(`[${pQ}]`),
      UQ = new RegExp(`[${pQ}]|[^${pQ}]+`, "g"),
      bQ = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function vQ(QQ) {
      let WQ = 2166136261;
      for (let XQ = 0; XQ < QQ.length; XQ++) WQ ^= QQ.charCodeAt(XQ), WQ = Math.imul(WQ, 16777619);
      return (WQ >>> 0) / 4294967295 * 2 - 1
    }

    function dQ(QQ) {
      var WQ;
      if (GQ.test(QQ)) return 1;
      const XQ = QQ.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        wQ = XQ.replace(/[^0-9]/g, "");
      if (wQ.length > 0 && !/\p{L}/u.test(XQ)) return Math.min(wQ.length, 4);
      const qQ = null !== (WQ = XQ.match(bQ)) && void 0 !== WQ ? WQ : [];
      if (0 === qQ.length) {
        var TQ, zQ;
        const QQ = null !== (TQ = null === (zQ = XQ.match(/\p{L}/gu)) || void 0 === zQ ? void 0 : zQ.length) && void 0 !== TQ ? TQ : 0;
        return 0 === QQ ? 0 : Math.min(Math.max(1, Math.round(QQ / 2.5)), IQ)
      }
      const sQ = XQ.replace(/[^\p{L}]/gu, ""),
        FQ = qQ.length > 1 && "e" === qQ.at(-1) && sQ.endsWith("e") && !sQ.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(QQ.replace(/[^\p{L}]/gu, ""));
      return Math.min(qQ.length - (FQ ? 1 : 0), IQ)
    }

    function HQ(QQ) {
      return QQ.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function aQ(QQ) {
      const WQ = QQ.replace(/[^\p{L}]/gu, "");
      return WQ.length >= 2 && WQ === WQ.toUpperCase() && WQ !== WQ.toLowerCase()
    }

    function lQ(QQ, WQ) {
      var XQ;
      const IQ = WQ && (0, wQ.l)(WQ),
        jQ = null !== (XQ = null === IQ || void 0 === IQ ? void 0 : IQ.syllableMs) && void 0 !== XQ ? XQ : wQ.d,
        pQ = function(QQ) {
          const WQ = [];
          for (const wQ of (0, qQ.gc)(QQ))
            if ("string" === typeof wQ)
              for (const QQ of wQ.split(/(\s+)/)) {
                if ("" === QQ) continue;
                if (/^\s+$/.test(QQ)) {
                  WQ.push({
                    kind: "space",
                    text: QQ
                  });
                  continue
                }
                if (!GQ.test(QQ)) {
                  WQ.push({
                    kind: "word",
                    text: QQ,
                    delayMs: 0
                  });
                  continue
                }
                let wQ = !0;
                for (const qQ of null !== (XQ = QQ.match(UQ)) && void 0 !== XQ ? XQ : []) {
                  var XQ;
                  const QQ = WQ.at(-1);
                  wQ || "word" !== (null === QQ || void 0 === QQ ? void 0 : QQ.kind) || GQ.test(qQ) || /[\p{L}\p{N}]/u.test(qQ) ? (wQ || WQ.push({
                    kind: "space",
                    text: "\u200b"
                  }), WQ.push({
                    kind: "word",
                    text: qQ,
                    delayMs: 0
                  }), wQ = !1) : QQ.text += qQ
                }
              } else WQ.push({
                kind: "icon",
                text: wQ.icon,
                delayMs: 0
              });
          return WQ
        }(QQ),
        bQ = [];
      let lQ = [];
      for (const wQ of pQ) "space" !== wQ.kind && (lQ.push(wQ), BQ.test(wQ.text) && (bQ.push(lQ), lQ = []));
      bQ.push(lQ);
      const hQ = [];
      let iQ = 0;
      for (const wQ of bQ) {
        var cQ, AQ;
        const QQ = null !== (cQ = null === (AQ = wQ.at(-1)) || void 0 === AQ ? void 0 : AQ.text) && void 0 !== cQ ? cQ : "",
          WQ = yQ.test(QQ),
          XQ = VQ.test(QQ),
          qQ = wQ.map((QQ => "word" === QQ.kind ? dQ(QQ.text) : 1)),
          pQ = qQ.findLastIndex((QQ => QQ > 0));
        for (const [yQ, VQ] of wQ.entries()) {
          const QQ = "word" === VQ.kind,
            wQ = qQ[yQ];
          VQ.delayMs = iQ;
          for (let qQ = 0; IQ && qQ < wQ; qQ++) {
            const {
              intonation: TQ
            } = IQ;
            let zQ = pQ > 0 ? -TQ.declineSemitones * (yQ / pQ) : 0;
            zQ += vQ(`${HQ(VQ.text)}|${qQ}`) * TQ.variationSemitones;
            const BQ = Math.min(1, TQ.variationSemitones);
            let DQ = IQ.glideSemitones,
              GQ = 1;
            XQ && (zQ += TQ.exclaimLiftSemitones, GQ *= sQ), WQ && yQ === pQ && (zQ += TQ.questionRiseSemitones * (wQ > 1 ? .5 + .5 * qQ / (wQ - 1) : 1), qQ === wQ - 1 && (DQ = Math.abs(DQ) + TQ.questionRiseSemitones / 2)), QQ && aQ(VQ.text) && (zQ += PQ * BQ, GQ *= FQ), wQ > 1 && 0 === qQ && (zQ += JQ * BQ, GQ *= gQ), hQ.push({
              atMs: iQ + qQ * jQ,
              semitones: zQ,
              glideSemitones: DQ,
              durationMs: qQ < wQ - 1 ? Math.min(IQ.durationMs, jQ * rQ) : IQ.durationMs,
              level: GQ
            })
          }
          iQ += wQ * jQ + (BQ.test(VQ.text) ? zQ : DQ.test(VQ.text) ? TQ : 0)
        }
      }
      return {
        pieces: pQ.map((QQ => "space" === QQ.kind ? QQ : "icon" === QQ.kind ? {
          kind: "icon",
          icon: QQ.text,
          delayMs: QQ.delayMs
        } : {
          kind: "word",
          text: QQ.text,
          delayMs: QQ.delayMs
        })),
        blips: hQ
      }
    }
    var hQ = XQ(1226),
      iQ = XQ(1285),
      cQ = XQ(2010);

    function AQ(QQ) {
      if ("string" === typeof QQ) return QQ;
      const WQ = iQ.h.get().getCurrentLanguageCode();
      return (0, hQ.t)(WQ, QQ.translationKey, (0, hQ.r)(QQ.params, cQ.e.shown))
    }

    function RQ(QQ) {
      const WQ = void 0 === QQ.voice ? null : (0, wQ.p)(QQ.voice),
        XQ = WQ && (0, wQ.l)(WQ);
      return {
        plan: lQ(AQ(QQ.line), XQ),
        synth: XQ
      }
    }

    function EQ(QQ) {
      const WQ = [];
      let XQ = [];
      for (const [qQ, TQ] of QQ.entries()) {
        var wQ;
        "space" === TQ.kind && (" " !== TQ.text || "icon" !== (null === (wQ = QQ[qQ + 1]) || void 0 === wQ ? void 0 : wQ.kind)) ? (XQ.length > 0 && WQ.push(XQ), WQ.push([TQ]), XQ = []) : XQ.push(TQ)
      }
      return XQ.length > 0 && WQ.push(XQ), WQ
    }
  },
  36982: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => qQ
    });
    const wQ = [{
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

    function qQ(QQ, WQ, XQ) {
      const qQ = Math.abs(QQ - WQ),
        TQ = Date.now() - XQ;
      for (const zQ of wQ)
        if (QQ < zQ.maxDist) return qQ >= zQ.hardUpdateDist || TQ > zQ.timeBetweenSoftChecks && qQ >= zQ.softUpdateDist;
      return !1
    }
  },
  37260: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => JQ,
      f: () => rQ
    });
    var wQ = XQ(663),
      qQ = XQ(43),
      TQ = XQ(37221);
    const zQ = "replayFileKeptForReload",
      sQ = "replayFileKeptForReloadAt",
      FQ = "replayFileKeptForReloadTab",
      PQ = 3e5,
      gQ = 5e3;
    async function JQ(QQ, WQ) {
      const XQ = Date.now(),
        TQ = {
          at: XQ,
          bytes: QQ,
          source: WQ
        },
        PQ = await Promise.race([(async () => await qQ.f.setItem(sQ, XQ) && qQ.f.setItem(zQ, TQ))(), (0, wQ.L)(gQ).then((() => !1))]);
      PQ || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const JQ = {
        at: XQ,
        HI: PQ
      };
      qQ.m.setItem(FQ, JQ)
    }
    async function rQ() {
      var QQ;
      const WQ = qQ.m.getItem(FQ);
      null !== WQ && qQ.m.removeItem(FQ);
      const XQ = Date.now(),
        wQ = await qQ.f.getItem(sQ),
        gQ = null !== WQ && XQ - WQ.at <= PQ,
        JQ = null !== WQ && wQ === WQ.at;
      let rQ = null;
      if (null !== wQ && (JQ || ("number" !== typeof wQ || XQ - wQ > PQ)) && (rQ = gQ && JQ && WQ.HI ? await qQ.f.getItem(zQ) : null, await Promise.all([qQ.f.removeItem(sQ), qQ.f.removeItem(zQ)])), !gQ) return null;
      if ((null === (QQ = rQ) || void 0 === QQ ? void 0 : QQ.at) !== WQ.at) throw new Error(TQ.b.replayNotKept.text);
      return {
        bytes: rQ.bytes,
        source: rQ.source
      }
    }
  },
  37254: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => wQ,
      f: () => TQ,
      g: () => qQ
    });
    const wQ = [9];

    function qQ(QQ) {
      return wQ.includes(QQ)
    }

    function TQ(QQ) {
      return null !== QQ && QQ >= 3 && QQ < wQ[0]
    }
  },
  37224: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => zQ,
      e: () => TQ,
      h: () => qQ
    });
    const wQ = [.25, .5, 1, 2, 4, 8, 16];

    function qQ(QQ, WQ) {
      const XQ = wQ;
      let qQ = XQ.indexOf(QQ);
      return -1 === qQ && (qQ = XQ.findIndex((WQ => WQ >= QQ)), -1 === qQ && (qQ = XQ.length - 1)), "up" === WQ ? XQ[Math.min(qQ + 1, XQ.length - 1)] : XQ[Math.max(qQ - 1, 0)]
    }

    function TQ(QQ) {
      return QQ <= wQ[0]
    }

    function zQ(QQ) {
      return QQ >= wQ[wQ.length - 1]
    }
  },
  37269: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => wQ,
      e: () => qQ
    });
    const wQ = "data-replay-ui-active",
      qQ = [{
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
  37275: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => PQ,
      g: () => JQ,
      i: () => gQ
    });
    var wQ = XQ(26),
      qQ = XQ(31),
      TQ = XQ(37269);

    function zQ() {
      const QQ = {};
      for (const {
          group: WQ
        }
        of TQ.e) QQ[WQ] = !0;
      return QQ
    }
    let sQ = zQ();

    function FQ() {
      qQ.k.mB("replayViewer|uiVisibilityChanged")
    }

    function PQ() {
      return sQ
    }

    function gQ(QQ, WQ) {
      sQ[QQ] !== WQ && (sQ = {
        ...sQ,
        [QQ]: WQ
      }, "nametag" === QQ && wQ.b.set({
        areNametagsHidden: !WQ
      }), FQ())
    }

    function JQ() {
      sQ = zQ(), wQ.b.set({
        areNametagsHidden: !1
      }), FQ()
    }
  },
  9111: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => TQ,
      e: () => zQ,
      f: () => sQ,
      i: () => qQ
    });
    var wQ = XQ(9119);
    const qQ = QQ => {
        const WQ = [];
        QQ.holdingGun && WQ.push({
          kind: "reload"
        }), QQ.touchscreenActionButton && WQ.push({
          kind: "touchButton",
          label: QQ.touchscreenActionButton
        });
        for (const TQ of null !== (XQ = null === (qQ = QQ.customButtons) || void 0 === qQ ? void 0 : qQ.filter(wQ.i)) && void 0 !== XQ ? XQ : []) {
          var XQ, qQ;
          WQ.push({
            kind: "customButton",
            id: TQ.id,
            icon: TQ.icon,
            description: TQ.description
          })
        }
        return WQ
      },
      TQ = QQ => QQ.length >= 2,
      zQ = QQ => "specialAction" !== QQ.kind,
      sQ = (QQ, WQ) => {
        if (null === QQ || null === WQ) return QQ === WQ;
        if (QQ.kind !== WQ.kind) return !1;
        switch (QQ.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return QQ.action === WQ.action;
          case "customButton":
            return QQ.id === WQ.id && QQ.icon === WQ.icon;
          case "touchButton":
            return QQ.label === WQ.label
        }
      }
  },
  9106: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => gQ,
      i: () => IQ,
      l: () => JQ,
      n: () => jQ
    });
    var wQ = XQ(61),
      qQ = XQ(31),
      TQ = XQ(1498),
      zQ = XQ(9111),
      sQ = XQ(9128);
    let FQ = null;
    const PQ = () => FQ,
      gQ = QQ => {
        (0, zQ.f)(FQ, QQ) || (FQ = QQ, qQ.k.mB(sQ.e, FQ))
      },
      JQ = () => {
        const [QQ, WQ] = (0, wQ.useState)(PQ);
        return (0, TQ.f)(sQ.e, WQ), QQ
      };
    let rQ = !1;
    const IQ = QQ => {
        QQ !== rQ && (rQ = QQ, qQ.k.mB(sQ.f, QQ))
      },
      jQ = () => {
        const [QQ, WQ] = (0, wQ.useState)(rQ);
        return (0, TQ.f)(sQ.f, WQ), QQ
      }
  },
  9128: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => TQ,
      e: () => wQ,
      f: () => qQ,
      j: () => sQ,
      l: () => FQ,
      o: () => PQ,
      p: () => zQ
    });
    const wQ = "controllerActionHintChanged",
      qQ = "controllerActionWheelHintChanged",
      TQ = "controllerOpenChat",
      zQ = "controllerSneakToggledChanged",
      sQ = "controllerAttackLatchedChanged",
      FQ = "controllerDropStackHoldChanged",
      PQ = "controllerPickBlockHintChanged"
  },
  9071: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => zQ,
      g: () => TQ,
      k: () => FQ,
      l: () => sQ
    });
    var wQ = XQ(1498),
      qQ = XQ(1468);
    const TQ = "controllerInventoryCursorChanged",
      zQ = {
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
      sQ = () => {
        var QQ, WQ;
        return (0, wQ.j)(TQ, null !== (QQ = null === (WQ = (0, qQ.f)()) || void 0 === WQ ? void 0 : WQ.getInventoryCursorState()) && void 0 !== QQ ? QQ : zQ)
      },
      FQ = () => {
        var QQ, WQ;
        return null !== (QQ = null === (WQ = (0, qQ.f)()) || void 0 === WQ ? void 0 : WQ.isPadSteppingSlots()) && void 0 !== QQ && QQ
      }
  },
  9069: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => rQ,
      e: () => sQ,
      g: () => FQ,
      i: () => zQ,
      k: () => TQ,
      n: () => gQ,
      o: () => JQ
    });
    let wQ = null;
    const qQ = new Set,
      TQ = QQ => (wQ = QQ, () => {
        if (wQ === QQ) {
          wQ = null;
          for (const QQ of qQ) QQ()
        }
      }),
      zQ = QQ => (qQ.add(QQ), () => {
        qQ.delete(QQ)
      }),
      sQ = () => wQ,
      FQ = () => null !== wQ;
    let PQ = null;
    const gQ = QQ => {
        PQ = QQ
      },
      JQ = () => {
        const QQ = PQ;
        return PQ = null, QQ
      },
      rQ = (QQ, WQ) => {
        var XQ, wQ;
        return null !== (XQ = null !== (wQ = QQ.find((QQ => QQ.element === WQ))) && void 0 !== wQ ? wQ : QQ.find((QQ => QQ.element.contains(WQ)))) && void 0 !== XQ ? XQ : null
      }
  },
  9079: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => TQ,
      c: () => zQ
    });
    var wQ = XQ(61);
    const qQ = new WeakMap,
      TQ = QQ => {
        var WQ, XQ;
        return null !== (WQ = null === (XQ = qQ.get(QQ)) || void 0 === XQ ? void 0 : XQ.current) && void 0 !== WQ ? WQ : null
      },
      zQ = (QQ, WQ) => {
        const XQ = (0, wQ.useRef)(WQ);
        XQ.current = WQ;
        const TQ = (0, wQ.useRef)(null);
        (0, wQ.useEffect)((() => {
          const WQ = QQ.current,
            wQ = TQ.current;
          WQ !== wQ && (wQ && qQ.get(wQ) === XQ && qQ.delete(wQ), TQ.current = WQ, WQ && qQ.set(WQ, XQ))
        })), (0, wQ.useEffect)((() => () => {
          const QQ = TQ.current;
          QQ && qQ.get(QQ) === XQ && qQ.delete(QQ), TQ.current = null
        }), [])
      }
  },
  9187: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => sQ,
      e: () => PQ,
      g: () => JQ,
      i: () => gQ,
      j: () => FQ,
      n: () => IQ
    });
    var wQ = XQ(31),
      qQ = XQ(2083),
      TQ = XQ(1468),
      zQ = XQ(1454);
    const sQ = QQ => {
        var WQ, XQ;
        return (0, zQ.l)() && null !== (WQ = null === (XQ = (0, TQ.f)()) || void 0 === XQ ? void 0 : XQ.getGlyphForNoaAction(QQ)) && void 0 !== WQ ? WQ : null
      },
      FQ = "controllerGlyph:",
      PQ = QQ => {
        var WQ, XQ;
        return null !== (WQ = null === (XQ = (0, TQ.f)()) || void 0 === XQ ? void 0 : XQ.getPadGlyphIconName(QQ)) && void 0 !== WQ ? WQ : `${FQ}xbox/${QQ}`
      },
      gQ = QQ => QQ.startsWith(FQ),
      JQ = QQ => {
        var WQ, XQ;
        return gQ(QQ) && null !== (WQ = null === (XQ = (0, TQ.f)()) || void 0 === XQ ? void 0 : XQ.getPadGlyphIconUrl(QQ)) && void 0 !== WQ ? WQ : null
      },
      rQ = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", zQ.e, qQ.f, qQ.d],
      IQ = QQ => {
        const WQ = rQ.map((WQ => wQ.k.subscribe(WQ, QQ)));
        return () => {
          for (const QQ of WQ) wQ.k.unsubscribe(QQ)
        }
      }
  },
  9099: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => TQ,
      e: () => qQ
    });
    let wQ = null;
    const qQ = function(QQ) {
        const WQ = {
          cycle: QQ,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return wQ = WQ, () => {
          wQ === WQ && (wQ = null)
        }
      },
      TQ = () => {
        var QQ;
        return null !== (QQ = wQ) && void 0 !== QQ && QQ.canCycle() ? wQ.cycle : null
      }
  },
  9176: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => qQ,
      g: () => zQ,
      j: () => TQ,
      n: () => wQ,
      r: () => sQ,
      t: () => PQ,
      w: () => gQ
    });
    const wQ = "controllerActionWheelOpen",
      qQ = "controllerActionWheelAim",
      TQ = "controllerActionWheelCommit",
      zQ = "controllerActionWheelClose",
      sQ = "controllerActionWheelPick";
    let FQ = !1;
    const PQ = () => FQ,
      gQ = QQ => {
        FQ = QQ
      }
  },
  9174: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => TQ,
      f: () => qQ
    });
    let wQ = 0;
    const qQ = () => {
        wQ++
      },
      TQ = () => wQ
  },
  9096: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => FQ,
      g: () => qQ,
      k: () => zQ,
      l: () => TQ,
      p: () => wQ,
      q: () => PQ
    });
    const wQ = "controllerQuickChatWheelOpen",
      qQ = "controllerQuickChatWheelAim",
      TQ = "controllerQuickChatWheelCommit",
      zQ = "controllerQuickChatWheelClose";
    let sQ = !1;
    const FQ = () => sQ,
      PQ = QQ => {
        sQ = QQ
      }
  },
  37131: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => qQ,
      g: () => TQ
    });
    const wQ = new Map;

    function qQ(QQ) {
      var WQ;
      return null === QQ ? null : null !== (WQ = wQ.get(QQ)) && void 0 !== WQ ? WQ : null
    }

    function TQ(QQ, WQ) {
      return wQ.set(QQ, WQ), () => {
        wQ.get(QQ) === WQ && wQ.delete(QQ)
      }
    }
  },
  37241: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => MW,
      f: () => mW
    });
    var wQ = XQ(4534),
      qQ = XQ(663),
      TQ = XQ(3963),
      zQ = XQ(3989),
      sQ = XQ.n(zQ);
    const FQ = new Set(["nameTagInfo", "multilineTextBox", "animationScript", "content", "skyBox", "opts", "fromBlockData", "toBlockData", "sharedBlockData"]),
      PQ = "EV_boolean",
      gQ = "EV_double",
      JQ = "EV_string",
      rQ = "EV_doubleArr",
      IQ = "EV_armour",
      jQ = "EV_other",
      BQ = "EV_cosmetics",
      yQ = "OEV_boolean",
      VQ = "OEV_int",
      DQ = "OEV_double",
      pQ = "OEV_string",
      GQ = "OEV_stringArr",
      UQ = "OEV_meshScaling",
      bQ = "IV_int",
      vQ = "IV_string",
      dQ = "IV_doubleArr",
      HQ = "IV_double",
      aQ = "HV_int",
      lQ = "HV_slots",
      hQ = "EnvV_string",
      iQ = "EnvV_double",
      cQ = "EnvV_doubleArr",
      AQ = "EnvV_boolean",
      RQ = {
        type: JQ,
        name: JQ,
        position: rQ,
        rotation: rQ,
        scale: gQ,
        speed: gQ,
        jumping: PQ,
        crouching: PQ,
        cameraPitch: gQ,
        armSwinging: PQ,
        heldItemName: JQ,
        heldItemEnchantmentTier: JQ,
        pose: JQ,
        followingEId: JQ,
        ridingVehicleEId: JQ,
        leaderboardTop: JQ,
        meshKind: JQ,
        meshOpts: JQ,
        followingOffset: rQ,
        shouldMatchFollowingEntityRotation: PQ,
        meshOffset: rQ,
        baseRenderHeading: gQ,
        armour: IQ,
        lC: jQ,
        playerCustomisations: BQ,
        variation: JQ,
        metaInfo: JQ,
        soundName: JQ,
        volume: gQ,
        refDistance: gQ,
        maxHearDist: gQ,
        rate: gQ,
        aiState: JQ
      },
      EQ = {
        opacity: DQ,
        zIndex: VQ,
        overlayColour: pQ,
        canSee: yQ,
        meshScaling: UQ,
        nameTagInfo: pQ,
        multilineTextBox: pQ,
        hasPriorityNametag: yQ,
        ranks: GQ,
        nameColour: pQ,
        _isAlive: yQ,
        _invisibleEffect: yQ,
        _invincible: yQ,
        killfeedColour: pQ,
        hideNameSeed: VQ,
        _glowingEffect: yQ,
        lockHeadToBody: yQ
      },
      CQ = {
        itemName: vQ,
        amount: bQ,
        position: dQ,
        size: HQ,
        attributes: vQ
      },
      uQ = {
        skyBox: hQ,
        fogColourOverride: hQ,
        fogChunkDistanceOverride: iQ,
        cameraTint: cQ,
        fogOnSkybox: AQ,
        fogBlockDistanceOverride: iQ
      },
      LQ = {
        type: "array",
        items: "double"
      },
      kQ = {
        type: "array",
        items: "int"
      },
      fQ = {
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
      SQ = {
        type: "map",
        values: LQ
      };

    function tQ(QQ, WQ) {
      return {
        type: "record",
        name: QQ,
        fields: [{
          name: "x",
          type: WQ
        }]
      }
    }
    const oQ = {
        type: "array",
        items: {
          type: "record",
          name: "OtherEntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", tQ(yQ, "boolean"), tQ(VQ, "int"), tQ(DQ, "double"), tQ(pQ, "string"), tQ(GQ, {
              type: "array",
              items: "string"
            }), tQ(UQ, SQ)]
          }]
        }
      },
      eQ = {
        type: "array",
        items: {
          type: "record",
          name: "EntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", tQ(PQ, "boolean"), tQ(gQ, "double"), tQ(JQ, "string"), tQ(rQ, LQ), tQ(IQ, fQ), tQ(jQ, oQ), tQ(BQ, {
              type: "map",
              values: "string"
            })]
          }]
        }
      },
      nQ = {
        type: "array",
        items: {
          type: "record",
          name: "ItemDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", tQ(bQ, "int"), tQ(vQ, "string"), tQ(HQ, "double"), tQ(dQ, LQ)]
          }]
        }
      },
      xQ = {
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
      YQ = {
        type: "record",
        name: "HotbarDeltaEntry",
        fields: [{
          name: "i",
          type: "int"
        }, {
          name: "v",
          type: ["null", tQ(aQ, "int"), tQ(lQ, xQ)]
        }]
      },
      NQ = {
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
      ZQ = {
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
      OQ = {
        type: "array",
        items: {
          type: "record",
          name: "EnvironmentDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", tQ(hQ, "string"), tQ(iQ, "double"), tQ(cQ, LQ), tQ(AQ, "boolean")]
          }]
        }
      },
      KQ = [{
        name: "hA",
        type: "record",
        fields: [{
          name: "pos",
          type: kQ
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
          type: kQ
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
      mQ = [{
        name: "playSound",
        type: "record",
        fields: [{
          name: "QQ",
          type: "string"
        }, {
          name: "volume",
          type: "double"
        }, {
          name: "rate",
          type: "double"
        }, {
          name: "wQ",
          type: ["null", {
            type: "record",
            name: "SoundPosSettings",
            fields: [{
              name: "qQ",
              type: ["null", "string", LQ],
              default: null
            }, {
              name: "TQ",
              type: ["null", "double"],
              default: null
            }, {
              name: "zQ",
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
          name: "uw",
          type: "string"
        }, {
          name: "Lw",
          type: "int"
        }, {
          name: "animationScript",
          type: ["null", "string"]
        }, {
          name: "kw",
          type: "double"
        }, {
          name: "fw",
          type: "double"
        }]
      }, {
        name: "bullet",
        type: "record",
        fields: [{
          name: "jX",
          type: "string"
        }, {
          name: "bulletDirections",
          type: {
            type: "array",
            items: LQ
          }
        }]
      }, {
        name: "lifeformHealth",
        type: "record",
        fields: [{
          name: "RQ",
          type: "string"
        }, {
          name: "vW",
          type: ["null", "double"],
          default: null
        }, {
          name: "dW",
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
          name: "lT",
          type: "double"
        }, {
          name: "angle",
          type: "double"
        }, {
          name: "hT",
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
      MQ = [{
        name: "position",
        type: LQ
      }, {
        name: "direction",
        type: LQ
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

    function QW() {
      const QQ = [{
        name: "entities",
        type: {
          type: "map",
          values: eQ
        }
      }, {
        name: "items",
        type: {
          type: "map",
          values: nQ
        }
      }, {
        name: "camera",
        type: {
          type: "record",
          name: "ReplayCameraState",
          fields: MQ
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
              items: YQ
            }
          }]
        }],
        default: null
      }, {
        name: "playerHud",
        type: ["null", NQ],
        default: null
      }];
      return QQ.push({
        name: "effects",
        type: ["null", {
          type: "array",
          items: {
            type: "record",
            name: "ReplayActiveEffect",
            fields: [{
              name: "RQ",
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
      }), QQ.push({
        name: "uiElements",
        type: ZQ
      }, {
        name: "environment",
        type: OQ
      }, {
        name: "structuralEvents",
        type: {
          type: "array",
          items: KQ
        }
      }, {
        name: "ephemeralEvents",
        type: {
          type: "array",
          items: mQ
        }
      }), QQ
    }
    const WW = {
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
                name: "fJ",
                type: "int"
              }, {
                name: "position",
                type: LQ
              }, {
                name: "direction",
                type: LQ
              }, {
                name: "easing",
                type: LQ
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
    let XW;

    function wW(QQ) {
      if (9 === QQ) return XW ??= (WQ = [{
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
            name: "qE",
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
              type: kQ
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
            fields: QW()
          }
        }
      }, WW], sQ().Type.forSchema({
        type: "record",
        name: "RecordingState",
        fields: WQ
      }, {
        Mr: Object.create(null)
      })), XW;
      var WQ
    }
    var qW = XQ(3059);
    let TW, zW, sW, FW;
    const PW = 12;
    var gW, JW;
    const rW = [0, 1, 8, 255, "length", "undefined", 63, 6, "fromCodePoint", 7, 12, "push", 91, 8191, 88, 13, 14, 3, 16, !1, 122, 4, !0, 123, 124, 15, 119, 2, 10, 5, 11, 9, 1023, 65536, 55296, 56320, 127, 128, 31, 18, 192, 224, 240, 125];

    function IW(QQ) {
      return typeof gW[QQ] === rW[5] ? gW[QQ] = function(QQ) {
        var WQ, XQ, wQ, qQ, TQ, zQ, sQ;
        for (yW(WQ = "" + (QQ || ""), XQ = WQ.length, wQ = [], qQ = rW[0], TQ = rW[0], zQ = -rW[1]), sQ = rW[0]; sQ < XQ; sQ++) {
          var FQ = 'P"/y2Xow!G`0A#NOBR1|S>F9{L}Zxq[).sCpJ]geD%ktn=VQITE^mh_ijdlHf7z@8&+ca3$4v;KY,u~bW?M*U5r:(6<'.indexOf(WQ[sQ]);
          if (FQ !== -rW[1])
            if (zQ < rW[0]) zQ = FQ;
            else {
              yW(zQ += FQ * rW[12], qQ |= zQ << TQ, TQ += (zQ & rW[13]) > rW[14] ? rW[15] : rW[16]);
              do {
                yW(wQ.push(qQ & rW[3]), qQ >>= rW[2], TQ -= rW[2])
              } while (TQ > rW[9]);
              zQ = -rW[1]
            }
        }
        return zQ > -rW[1] && wQ.push((qQ | zQ << TQ) & rW[3]), jW(wQ)
      }(JW[QQ]) : gW[QQ]
    }

    function jW(QQ) {
      return typeof wX !== rW[5] && wX ? (new wX).decode(new qX(QQ)) : typeof TX !== rW[5] && TX ? TX.from(QQ).toString("utf-8") : FX(QQ)
    }

    function BW() {}

    function yW() {
      yW = function() {}
    }
    var VW, DW;
    yW(gW = {}, JW = ["CyHqg7gmol;uWpG", '0q#)7l#|%RLv<Nf%>d4_Q]d"f&5AD48J"2o,YikWV+$Wpg%eMP', 'o1E.`r39BADbY}1x[CixWgk{8Ay[;{8R["', "j9WG:5yLQj!B9}K|Atd_0g=YDSSvu{lx*oR[AIzoHR", 'tdNm2h+oB><Vdfbe?o6^*3nlyAAYO*lk_&<!C;oVHH"G"', "U&1vPUBJF#", '3R5wJ_.A)>`lr3"R?P', '8yUuGfpQ=hvfDy;)M=]i8U;djS<$,v4LiI{oSg0h~h_LELiCZ"', "(efKs_P", "HC:254*#(S#ll3mxoK0.5E1/,RU$EL%)g_#`8fx{70yMN]ytFGE.x", "j_iTpH*p1|i2V#7kbzaw<;oJ|fd$=Bk|7)bTAi[W*|`7fZFZJ_O_TaD/y", "K&w[gW{/", "}C<.PI>?X|L^VT%)t4/", '.a4;"I7#;&MfAHlkqfJ)xQgJ[1J,<T.{W$s^U4_1jRkW#X', "9fv_b*aoWAcus2e].]%[`dP", "RfcqZ_rV!&Qm]2", "kt~4)HP", "]_e2;JqqHzVNYNc1^GR_>", "2}_m+h,oelM17I(xC9xq]]IWh|afwMYei^]2sHP", "FSD;4Cl1`Hg+u{&k#2@2/vnA^GF&pMeg", '&_V;F3SJnRfTXB"1&]:;oKE/VO.{{QD1XT(T]pWo)12v<N/tED,Ex', '$k|u3b"|W@3TSyhZ{qGY4zdqJd]btyDLXK<.6s5p"+IH}]SC:z?_q', "Qd{^},zrHRMVbN69TS?^03>3i#6.zT,gT=t`J_)|MO#v+$BS,&=K_e5bB1", '7&L~~JQQ,hXl$LrZoT#`wbmKa8C+"', '^As_"hlrkzM1rTLp(=b;nWg1(#[bx4TZpfB~4CP', "*ISiEYu%6SMVz#_CKIF;.m&^_lQ,4}rB^_CutM,lv#", 'F9hwwrW{S#FMIOXtf]zx_hsdtNPYSyRZK^}^8iy#1G>i"', "DyoirdT#^f,qdIASn]imilG%.d}", "=)%^Rgal=0wSZ/N", "J9?_1*&^k0YTgL/93R)T8V%3DS[`#Js9ckgxn^v[v&dHu2", ",=q,huxJ~HfxF7OeE=T.t@4#dN|[g#}9POgiOd,{Tdn{$Lu|i&uw1", "#DaX=7~K1Aq{|/J[Gp:m:m*pWdgw}X", "Nf|`J~pp!S,OnZRD}}_2n^omNO=36{/trI`^F", ";S*h:4DWW1)S1?w1h},E^]AmyG*.SZDL", "2T$G]HmD~Hn", "HRnuC;_1y", "I&4G@b+lLS5Kd]r%UNE.ib0|Q!Fl;{4]Ad#m*ERq$80itg4]", "3;SKHCbq:#;$x2/J5)#wBiJmTO13SHmD9V;.}", 'DIKX:Q5#7jqZdv<kN]/vx5$oX8e)l3>pGKg2yIY"', "3x:G%j$ajS4WKNz{W]K!ie|w{RCC32&1", "0q%^*?3dZH^1jys{k9uwjUXw8A4;&{B}M$4o!JwLCO13xIQZv=$;e;KrOO", 'iz=w0z!mC|.Zufo]|"', 'ro9GEuPWm_Y@,Zp[TIchK?!mWOBb5Wkg`V<X_l*q~h#RZNNe>Ahi^^!!pdS`"', "kzex.DP", ",j34JHqqV09bWZXL", "GtvTwrHQy_BMny", "(e)2TUDW:#n2;vD}RDUq;bp3=hYW2v*Cb$)TJjUD#zJ", "5L)GWg>pM@gm)gfp@9FmfU<KvSRbaH<xF&yX0E8l5|))XU69;^fw2h&3TOk", 'xVYqAIOwn>>#(O*%R]Xw|d&qN+)&XUcRI]}._lD/Y!;u*$s{:e{_%Yd#<&v$"', "S1%Z=Mi#B1![E#N|^G/", "tCuEO,+{&18NRfSxhdHKsm[JLSo^@NY|E]G^aVL3;R)vF]s91GzxvKJ[+O", '(SmKYK2lM_9,AIb}JG^u"IUKbh*h"', '5om`:,&p>l1`+T!)Ff]2+z[{vRlm^gs92O>`Cpw"', "S@bo1~(C1G", "ofuw`zG@fN}3{*wLBG}ZW,tw`zRRxZe1(^y", ".oW;]W$m%&kRe}<%>OXwR", "I}*!nMhpD&*0=I>x(zUu|~;d7!Cv+?qR6P", "w@G_{DEV#>FbpNR}CC*hZ*7q8hiWAyZ%GT6_5m!{ZNtH!Z<JW&_G", "gI:x~K`V,&dWbgk}#VKXD_#w*AA[y$#eo@2)*39p||@0|EC{m_y", '1G6op~<V(&6!U*Qe_S&_oC,{/@TRJQcR=^CvbJokx>"/=24{/@Zqr=E/', "T}G~u=w32", "}G`YwzKmOfRy2Zx9", "PK4Ge]}r<N$$YyZkbje;lVWC+A*$]7,}Rf:;|", "l].[dvG?cG|CZN{%uCzi3KkW#>IHpgA", "ZK%YGfOh~@^", "X9@xvz#|fHW1t/)kAK1Y)_,AJG;WN/0S{Sgw", ";HJ)3vXL0NnIt/Xgf&Fi$f{8t&wa8yP[eIix_C/Jo#Wc</&{qfniq", "*o9x<=6qD&XBJ4l%fH,X.4o[:#;2SZZqgd`Zdf$rX|", "xCo,&vgA,&J3gNk}kDl!VjEmp|j", ")GkY`r^qh|D;WH@kt4<qffh9MOaf{Hp[A9bmR", "?&k^=7||*_Oa.28qwa^v2h^p@1Rb@Os9qaMq;djlRG?2/X_x+G[23K~mdz?$P", "<jXiKJJAGNhWw4^Z)_YXpTqh6&/G9N8{dDiG)4Hp`&Svt/", "VaK!7I@%!l0&lLXt@&.o^$:q0Nz0(4L%F^/", "8zf)$z8a$82aEg}x_4WT{HfVzj2l0NK|B4M.bE~oB>H1ON|C|@Z.2zd#nRf", "j^S`,3E1%lAY`gy[", 'TC3w!Cc#UGEH.ZEZry>wrmA!3#wbp$V}_4*."?HqI@E,s#:xm4U4{', 'W)aXtTX"o#P]7Jo{T){~8bR#_|g', '[GOm<_zrFlMLwg(kx_zG540"wlh>)MLx]]}v0r|p2', 'g&]mWJT""_0YBy)JnoVxr5.J~!g', 'bzBo>m8[MOMuUOC[mAh)vKt"DRL#v4y1MHUqbE.mE|J)?{O', '_}gw&Irm(SxSy$@9$=m`=pZq0H6"Sy', 'AanqJ5y#nH"G<?1CGq"^{m1re#ZycNP]$_);zCDJ$lBaP4BDIS/^}', "j9+!~3b#2d0a2Inen^9;};Zp58x3^N:D6y~w}5DmzjVR(yP]vP", '+]0q$Es3GRcL/?WeQDwGsp.{,&tm~TdquRXiuIA$f!Vm"', "#fXiPlCm!SQz,Z3]Z4>,9EcpO1s38vA", '9_PZp7#L2_H2+T$1n43`|*FJSdAa9ZX)^=Q;2I":IA7mo?Hqx&/^>', "[a%_t;h#a#*FSZc]TSM!@fB/WGFoW4kg>@<X", "HN[m1zTYy|", 'O]Y!R4T%Bf"#Hl0L2tqi@Vll)>UEd{*C]S=whlfVoiCZRv@9BG"~JHO#lR=i"', "5HYEwb2J/GOSsvLxvP", "Q]R[)HipT+],;LPR5&IoM=79MfZymHSC9.P_.pD8YRi)z]A", "S.imQ@:wt&&HPOr%sd3)U*MD^|]b)/AeIG*hdf/{2", "SO2`@KxK:#", '/>O,>3Kl+@"#"', 'd}"^bK?^=h@$Og7p<=0v>,k1#Nd,WviCX4aikT|wY!2]WHVD?H*h.H?p)O{', "t9A`jMH%3_sbtl&RhIo)1", "W&w[1m[{Ll.ysBlkm=8og;TpGNm,EgfpZ4VGk]qQzOm3OZZ9R.sYoE_r<N", ".K34:Qnl>|qvVg(Fqq(_7I6waGFy3IRS_d;oqWIVtRti{4g]&yQ2SHP", "{DUu0iEl2_~$1}&]$I{GTYWm0SQ;pQa[lz{sx", "*x9T~zh%If,0SHe]G}H.TjFJw", 'W=?_N3Xh&d)S"', "pKmKuICr]#PYX7BSFOemzv6pd&!v,J>Zhay", "YSwGoI}r^|~?*Ng|B}v;lud5I15c*O:qZ&Z.]QgJB1P/_]o", '`V[2F5Nm@1%{K?.{AV)_3IP1v&DN?JRSGd?!sm>wQf.32O(qT4UX:~h"', "6R}^~Izo!l9SQg5x~L1.Pr:w(lp`+#eLpd3}hMwLdlS)6Wg1", "b=,E*~qp(&0y}X", "]t3`gaFK.+#`AZgg:N@,ybd#i8TpQMIeg&R~{dQdX", "X2_wKdn{s@7;[/`)!}D[u?|hU|gyZ}R}EIa4J7VD2", 'zCe,s;:R2GeI0}MZGVpuR?nVj&eRq2Fx]_F,@V^q!lMf~?Hk"G5}3ft#v&/Z"', "B4,}!K=#o|J", '`2U}]5P!81ME6{h%99Jq7e@%PGJ,7LMZ=a)TvJlaI+1vrL)]K=zT=@O"', "dap.du1/", "(P_cF*+s", "ifN&c", "f*]%2fx>", "FL@?rRlH", "11Epy", '$_1"#2"G', "znH$*}Aq", "lIx0g{Kb", "S{H#yB@b", "]0oj&", "qZ_p", "nZH#V,Ob", '"0SN', "iZ3>9)!b", "Mlo=4w_`", ")}D,+>ox", "L15%8/Gx", "sM,#}e<", "~#:Q*%ix", ",$DmtUP3", "Fo*~kaR3", "FoF#,", "*|DT3XpC6]IF9V{%>|l!VGn", ':Vf#,lG2n)U^m9}%7CKRQG8W+[sLJ3"', "yij,!mcN.Jg^]~Xuries~L<", "yij,!mcNIA{pZrd[l?1KMcDa.Jg^]~G", "[LgMqem!OSbCa%#oGjtukm~_F4rz`nx", "d|nPACck;18mPo^af<nTP*{kCd1", "Tn>r^;<", "~ies`/tx", "Se(z", "<!es"]), yW(XX = function() {
      var QQ, WQ, XQ, wQ = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      yW(QQ = void 0, WQ = []);
      try {
        yW(QQ = Object, WQ[rW[11]]("".__proto__.constructor.name))
      } catch (qX) {}
      QQ: for (XQ = rW[0]; XQ < wQ[rW[4]]; XQ++) try {
        var qQ;
        for (QQ = wQ[XQ](), qQ = rW[0]; qQ < WQ[rW[4]]; qQ++)
          if (typeof QQ[WQ[qQ]] === rW[5]) continue QQ;
        return QQ
      } catch (qX) {}
      return QQ || this
    }() || {}, wX = XX.TextDecoder, qX = XX.Uint8Array, TX = XX.Tj, zX = XX.String || String, sX = XX.Array || Array, FX = function() {
      var QQ, WQ, XQ = new sX(rW[37]);
      return yW(QQ = zX[rW[8]] || zX.fromCharCode, WQ = []),
        function(wQ) {
          var qQ, TQ, zQ, sQ;
          for (yW(TQ = void 0, zQ = wQ[rW[4]], WQ[rW[4]] = rW[0]), sQ = rW[0]; sQ < zQ;) yW(TQ = wQ[sQ++], TQ <= rW[36] ? qQ = TQ : TQ <= 223 ? qQ = (TQ & rW[38]) << rW[7] | wQ[sQ++] & rW[6] : TQ <= 239 ? qQ = (TQ & rW[25]) << rW[10] | (wQ[sQ++] & rW[6]) << rW[7] | wQ[sQ++] & rW[6] : zX[rW[8]] ? qQ = (TQ & rW[9]) << rW[39] | (wQ[sQ++] & rW[6]) << rW[10] | (wQ[sQ++] & rW[6]) << rW[7] | wQ[sQ++] & rW[6] : (qQ = rW[6], sQ += rW[17]), WQ[rW[11]](XQ[qQ] || (XQ[qQ] = QQ(qQ))));
          return WQ.join("")
        }
    }()), (() => {
      function QQ(QQ) {
        return typeof gW[QQ] === rW[5] ? gW[QQ] = function(QQ) {
          var WQ, XQ, wQ, qQ, TQ, zQ, sQ;
          for (yW(WQ = "" + (QQ || ""), XQ = WQ.length, wQ = [], qQ = rW[0], TQ = rW[0], zQ = -rW[1]), sQ = rW[0]; sQ < XQ; sQ++) {
            var FQ = 'eqsKFTpWtaHnjGSfdgoJrAkL7Vc"4CRilNM;ZD#U!@0X9Ob?YQBh^PIx3wm:+58{>v6<)*&`u(%$=./,1}2_~[y]z|E'.indexOf(WQ[sQ]);
            if (FQ !== -rW[1])
              if (zQ < rW[0]) zQ = FQ;
              else {
                yW(zQ += FQ * rW[12], qQ |= zQ << TQ, TQ += (zQ & rW[13]) > rW[14] ? rW[15] : rW[16]);
                do {
                  yW(wQ.push(qQ & rW[3]), qQ >>= rW[2], TQ -= rW[2])
                } while (TQ > rW[9]);
                zQ = -rW[1]
              }
          }
          return zQ > -rW[1] && wQ.push((qQ | zQ << TQ) & rW[3]), jW(wQ)
        }(JW[QQ]) : gW[QQ]
      }
      const WQ = rW[18],
        XQ = IW(111) + QQ(112) + QQ(113),
        wQ = [rW[0], rW[1], rW[27], rW[17]].map((QQ => {
          ! function(QQ) {
            typeof gW[QQ] === rW[5] ? gW[QQ] = function(QQ) {
              var WQ, XQ, wQ, qQ, TQ, zQ, sQ;
              for (yW(WQ = "" + (QQ || ""), XQ = WQ.length, wQ = [], qQ = rW[0], TQ = rW[0], zQ = -rW[1]), sQ = rW[0]; sQ < XQ; sQ++) {
                var FQ = '">v/eu%HZcpzs<!+}mix*~;|)M?rDK.R9C#6:h_y7Fwq$go1fX[,I3@LJ0B(dbjSlk2=a{tG]`TWA4Q^EN&nU5YVO8P'.indexOf(WQ[sQ]);
                if (FQ !== -rW[1])
                  if (zQ < rW[0]) zQ = FQ;
                  else {
                    yW(zQ += FQ * rW[12], qQ |= zQ << TQ, TQ += (zQ & rW[13]) > rW[14] ? rW[15] : rW[16]);
                    do {
                      yW(wQ.push(qQ & rW[3]), qQ >>= rW[2], TQ -= rW[2])
                    } while (TQ > rW[9]);
                    zQ = -rW[1]
                  }
              }
              return zQ > -rW[1] && wQ.push((qQ | zQ << TQ) & rW[3]), jW(wQ)
            }(JW[QQ]) : gW[QQ]
          }(114);
          let WQ = rW[0];
          for (let wQ = rW[17]; wQ >= rW[0]; wQ--) {
            function qQ(QQ) {
              var WQ, XQ, wQ, qQ, TQ, zQ, sQ;
              for (yW(WQ = "" + (QQ || ""), XQ = WQ.length, wQ = [], qQ = rW[0], TQ = rW[0], zQ = -rW[1]), sQ = rW[0]; sQ < XQ; sQ++) {
                var FQ = '6cHKepC~j+IBV9S10Z7`sa[L:X^54y/w<)8".]irlhMx>q_R#gY,@?FDWv=(PT;A2tOuE&GJ3|b*nz%Um{oQd$fkN!}'.indexOf(WQ[sQ]);
                if (FQ !== -rW[1])
                  if (zQ < rW[0]) zQ = FQ;
                  else {
                    yW(zQ += FQ * rW[12], qQ |= zQ << TQ, TQ += (zQ & rW[13]) > rW[14] ? rW[15] : rW[16]);
                    do {
                      yW(wQ.push(qQ & rW[3]), qQ >>= rW[2], TQ -= rW[2])
                    } while (TQ > rW[9]);
                    zQ = -rW[1]
                  }
              }
              return zQ > -rW[1] && wQ.push((qQ | zQ << TQ) & rW[3]), jW(wQ)
            }

            function TQ(QQ) {
              return typeof gW[QQ] === rW[5] ? gW[QQ] = qQ(JW[QQ]) : gW[QQ]
            }
            WQ = WQ << rW[2] | XQ[TQ(115) + TQ(116)](QQ * rW[21] + wQ)
          }
          return WQ >>> rW[0]
        })),
        qQ = (QQ, WQ) => QQ << WQ | QQ >>> 32 - WQ,
        TQ = (QQ, WQ, XQ, wQ, TQ) => {
          (function(QQ) {
            return typeof gW[QQ] === rW[5] ? gW[QQ] = function(QQ) {
              var WQ, XQ, wQ, qQ, TQ, zQ, sQ;
              for (yW(WQ = "" + (QQ || ""), XQ = WQ.length, wQ = [], qQ = rW[0], TQ = rW[0], zQ = -rW[1]), sQ = rW[0]; sQ < XQ; sQ++) {
                var FQ = 'lTGaosFvJkOi[m`N1DWwdCBj|{fL@=Ke9A}z2_QH7%63&:E~$)ZP/S"Ibg]+MV0>Yc!^qp?r;#.RxhXn,*U(4uy<85t'.indexOf(WQ[sQ]);
                if (FQ !== -rW[1])
                  if (zQ < rW[0]) zQ = FQ;
                  else {
                    yW(zQ += FQ * rW[12], qQ |= zQ << TQ, TQ += (zQ & rW[13]) > rW[14] ? rW[15] : rW[16]);
                    do {
                      yW(wQ.push(qQ & rW[3]), qQ >>= rW[2], TQ -= rW[2])
                    } while (TQ > rW[9]);
                    zQ = -rW[1]
                  }
              }
              return zQ > -rW[1] && wQ.push((qQ | zQ << TQ) & rW[3]), jW(wQ)
            }(JW[QQ]) : gW[QQ]
          })(117) + "j" in BW && function() {
            var QQ = function(QQ) {
              var WQ, XQ, wQ, qQ, TQ = QQ.length;
              for (yW(WQ = [], XQ = rW[0], wQ = rW[0], QQ.sort(((QQ, WQ) => QQ - WQ))), qQ = rW[0]; qQ < TQ; qQ++)
                if (!(qQ > rW[0] && QQ[qQ] === QQ[qQ - rW[1]]))
                  for (yW(XQ = qQ + rW[1], wQ = TQ - rW[1]); XQ < wQ;)
                    if (QQ[qQ] + QQ[XQ] + QQ[wQ] < rW[0]) XQ++;
                    else if (QQ[qQ] + QQ[XQ] + QQ[wQ] > rW[0]) wQ--;
              else {
                for (WQ.push([QQ[qQ], QQ[XQ], QQ[wQ]]); XQ < wQ && QQ[XQ] === QQ[XQ + rW[1]];) XQ++;
                for (; XQ < wQ && QQ[wQ] === QQ[wQ - rW[1]];) wQ--;
                yW(XQ++, wQ--)
              }
              return WQ
            };
            console.log(QQ)
          }(), yW(QQ[WQ] += QQ[XQ], QQ[TQ] = qQ(QQ[TQ] ^ QQ[WQ], rW[18]), QQ[wQ] += QQ[TQ], QQ[XQ] = qQ(QQ[XQ] ^ QQ[wQ], rW[10]), QQ[WQ] += QQ[XQ], QQ[TQ] = qQ(QQ[TQ] ^ QQ[WQ], rW[2]), QQ[wQ] += QQ[TQ], QQ[XQ] = qQ(QQ[XQ] ^ QQ[wQ], rW[9]))
        };
      FW = (XQ, qQ, zQ, sQ) => {
        function FQ(QQ) {
          return typeof gW[QQ] === rW[5] ? gW[QQ] = function(QQ) {
            var WQ, XQ, wQ, qQ, TQ, zQ, sQ;
            for (yW(WQ = "" + (QQ || ""), XQ = WQ.length, wQ = [], qQ = rW[0], TQ = rW[0], zQ = -rW[1]), sQ = rW[0]; sQ < XQ; sQ++) {
              var FQ = 'FxbWNDQVjspramlZGYnU3_@ifL!wg&qv#+C$1SO[8h*EcXK<=kT4]M0B?d:zI|6^eu"H%}/{(R,2y>9`P)Ao5J;t~7.'.indexOf(WQ[sQ]);
              if (FQ !== -rW[1])
                if (zQ < rW[0]) zQ = FQ;
                else {
                  yW(zQ += FQ * rW[12], qQ |= zQ << TQ, TQ += (zQ & rW[13]) > rW[14] ? rW[15] : rW[16]);
                  do {
                    yW(wQ.push(qQ & rW[3]), qQ >>= rW[2], TQ -= rW[2])
                  } while (TQ > rW[9]);
                  zQ = -rW[1]
                }
            }
            return zQ > -rW[1] && wQ.push((qQ | zQ << TQ) & rW[3]), jW(wQ)
          }(JW[QQ]) : gW[QQ]
        }
        QQ(118) + "T" in BW && function() {
          var QQ, WQ = function(WQ, XQ, wQ) {
            var qQ = {};
            return wQ.length !== WQ.length + XQ.length ? rW[19] : QQ(WQ, XQ, wQ, rW[0], rW[0], rW[0], qQ)
          };
          yW(QQ = function(WQ, XQ, wQ, qQ, TQ, zQ, sQ) {
            var FQ = rW[19];
            return zQ >= wQ.length ? rW[22] : void 0 !== sQ["" + qQ + TQ + zQ] ? sQ["" + qQ + TQ + zQ] : (wQ[zQ] === WQ[qQ] && wQ[zQ] === XQ[TQ] ? FQ = QQ(WQ, XQ, wQ, qQ + rW[1], TQ, zQ + rW[1], sQ) || QQ(WQ, XQ, wQ, qQ, TQ + rW[1], zQ + rW[1], sQ) : wQ[zQ] === WQ[qQ] ? FQ = QQ(WQ, XQ, wQ, qQ + rW[1], TQ, zQ + rW[1], sQ) : wQ[zQ] === XQ[TQ] && (FQ = QQ(WQ, XQ, wQ, qQ, TQ + rW[1], zQ + rW[1], sQ)), sQ["" + qQ + TQ + zQ] = FQ, FQ)
          }, console.log(WQ))
        }();
        const PQ = new DataView(qQ[FQ(rW[26])], qQ[FQ(120) + FQ(121)], PW),
          gQ = new Uint32Array(WQ);
        yW(gQ[FQ(rW[20])](wQ), gQ[FQ(rW[20])](XQ, rW[21]), gQ[rW[15]] = PQ[FQ(rW[23]) + FQ(rW[24])](rW[0], rW[22]), gQ[rW[16]] = PQ[FQ(rW[23]) + FQ(rW[24])](rW[21], rW[22]), gQ[rW[25]] = PQ[FQ(rW[23]) + FQ(rW[24])](rW[2], rW[22]));
        const JQ = new Uint32Array(WQ),
          rQ = new Uint8Array(JQ[FQ(rW[26])]);
        for (let IQ = rW[0], jQ = zQ; IQ < sQ[FQ(rW[43])]; IQ += WQ * rW[21], jQ++) {
          yW(gQ[rW[10]] = jQ, JQ[FQ(rW[20])](gQ));
          for (let yQ = rW[0]; yQ < rW[28]; yQ++) yW(TQ(JQ, rW[0], rW[21], rW[2], rW[10]), TQ(JQ, rW[1], rW[29], rW[31], rW[15]), TQ(JQ, rW[27], rW[7], rW[28], rW[16]), TQ(JQ, rW[17], rW[9], rW[30], rW[25]), TQ(JQ, rW[0], rW[29], rW[28], rW[25]), TQ(JQ, rW[1], rW[7], rW[30], rW[10]), TQ(JQ, rW[27], rW[9], rW[2], rW[15]), TQ(JQ, rW[17], rW[21], rW[31], rW[16]));
          for (let VQ = rW[0]; VQ < WQ; VQ++) {
            function DQ(QQ) {
              var WQ, XQ, wQ, qQ, TQ, zQ, sQ;
              for (yW(WQ = "" + (QQ || ""), XQ = WQ.length, wQ = [], qQ = rW[0], TQ = rW[0], zQ = -rW[1]), sQ = rW[0]; sQ < XQ; sQ++) {
                var FQ = '<`x)bJzdK=QuG:@MEyHD!6>SN#l2tOes,;]X9[qni*P}7w0BorA15kf_(F&{?~3.Igp8Y$U+/WcVm%ZR^a4jLhTv"|C'.indexOf(WQ[sQ]);
                if (FQ !== -rW[1])
                  if (zQ < rW[0]) zQ = FQ;
                  else {
                    yW(zQ += FQ * rW[12], qQ |= zQ << TQ, TQ += (zQ & rW[13]) > rW[14] ? rW[15] : rW[16]);
                    do {
                      yW(wQ.push(qQ & rW[3]), qQ >>= rW[2], TQ -= rW[2])
                    } while (TQ > rW[9]);
                    zQ = -rW[1]
                  }
              }
              return zQ > -rW[1] && wQ.push((qQ | zQ << TQ) & rW[3]), jW(wQ)
            }

            function pQ(QQ) {
              return typeof gW[QQ] === rW[5] ? gW[QQ] = DQ(JW[QQ]) : gW[QQ]
            }

            function GQ() {
              ! function(QQ) {
                var WQ, XQ, wQ, qQ = String.fromCharCode;

                function TQ(QQ) {
                  var WQ, XQ, wQ, qQ, TQ = [];
                  for (yW(WQ = rW[0], XQ = QQ.length, wQ = void 0, qQ = void 0); WQ < XQ;) yW(wQ = QQ.charCodeAt(WQ++), wQ >= rW[34] && wQ <= 56319 && WQ < XQ ? (64512 & (qQ = QQ.charCodeAt(WQ++))) == rW[35] ? TQ.push(((wQ & rW[32]) << rW[28]) + (qQ & rW[32]) + rW[33]) : (TQ.push(wQ), WQ--) : TQ.push(wQ));
                  return TQ
                }

                function zQ(QQ) {
                  var WQ, XQ, wQ, TQ = QQ.length;
                  for (yW(WQ = -rW[1], XQ = void 0, wQ = ""); ++WQ < TQ;)(XQ = QQ[WQ]) > 65535 && yW(XQ -= rW[33], wQ += qQ(XQ >>> rW[28] & rW[32] | rW[34]), XQ = rW[35] | XQ & rW[32]), wQ += qQ(XQ);
                  return wQ
                }

                function sQ(QQ) {
                  if (QQ >= rW[34] && QQ <= 57343) {
                    function WQ(QQ) {
                      var WQ, XQ, wQ, qQ, TQ, zQ, sQ;
                      for (yW(WQ = "" + (QQ || ""), XQ = WQ.length, wQ = [], qQ = rW[0], TQ = rW[0], zQ = -rW[1]), sQ = rW[0]; sQ < XQ; sQ++) {
                        var FQ = '4$3;J^}Mm!]N<iH1P{I(%6a5g,Qd@K./#?o)zphCZb+Br7EX"Dew*~R&nLx[yqGT02sv>c=A_YkFVl`fUu:WS9|8tOj'.indexOf(WQ[sQ]);
                        if (FQ !== -rW[1])
                          if (zQ < rW[0]) zQ = FQ;
                          else {
                            yW(zQ += FQ * rW[12], qQ |= zQ << TQ, TQ += (zQ & rW[13]) > rW[14] ? rW[15] : rW[16]);
                            do {
                              yW(wQ.push(qQ & rW[3]), qQ >>= rW[2], TQ -= rW[2])
                            } while (TQ > rW[9]);
                            zQ = -rW[1]
                          }
                      }
                      return zQ > -rW[1] && wQ.push((qQ | zQ << TQ) & rW[3]), jW(wQ)
                    }

                    function XQ(QQ) {
                      return typeof gW[QQ] === rW[5] ? gW[QQ] = WQ(JW[QQ]) : gW[QQ]
                    }
                    throw Error(pQ(rW[36]) + pQ(rW[37]) + pQ(129) + QQ.toString(rW[18]).toUpperCase() + (pQ(130) + XQ(131) + XQ(132) + XQ(133)))
                  }
                }

                function FQ(QQ, WQ) {
                  return qQ(QQ >> WQ & rW[6] | rW[37])
                }

                function PQ(QQ) {
                  var WQ;
                  return (4294967168 & QQ) == rW[0] ? qQ(QQ) : (WQ = "", (4294965248 & QQ) == rW[0] ? WQ = qQ(QQ >> rW[7] & rW[38] | rW[40]) : (4294901760 & QQ) == rW[0] ? yW(sQ(QQ), WQ = qQ(QQ >> rW[10] & rW[25] | rW[41]), WQ += FQ(QQ, rW[7])) : (4292870144 & QQ) == rW[0] && yW(WQ = qQ(QQ >> rW[39] & rW[9] | rW[42]), WQ += FQ(QQ, rW[10]), WQ += FQ(QQ, rW[7])), WQ += qQ(QQ & rW[6] | rW[37]))
                }

                function gQ() {
                  var QQ;
                  if (wQ >= XQ) {
                    function qQ(QQ) {
                      var WQ, XQ, wQ, qQ, TQ, zQ, sQ;
                      for (yW(WQ = "" + (QQ || ""), XQ = WQ.length, wQ = [], qQ = rW[0], TQ = rW[0], zQ = -rW[1]), sQ = rW[0]; sQ < XQ; sQ++) {
                        var FQ = 'nxPK)]UqoQ+%c}Mm?*#g3Jk^CSNw`zl!TE9{[W:&|aiveb<;5>$,1(YRd02jtV76ZI_rALyf~8phX.BsF="DG/@4HOu'.indexOf(WQ[sQ]);
                        if (FQ !== -rW[1])
                          if (zQ < rW[0]) zQ = FQ;
                          else {
                            yW(zQ += FQ * rW[12], qQ |= zQ << TQ, TQ += (zQ & rW[13]) > rW[14] ? rW[15] : rW[16]);
                            do {
                              yW(wQ.push(qQ & rW[3]), qQ >>= rW[2], TQ -= rW[2])
                            } while (TQ > rW[9]);
                            zQ = -rW[1]
                          }
                      }
                      return zQ > -rW[1] && wQ.push((qQ | zQ << TQ) & rW[3]), jW(wQ)
                    }

                    function TQ(QQ) {
                      return typeof gW[QQ] === rW[5] ? gW[QQ] = qQ(JW[QQ]) : gW[QQ]
                    }
                    throw Error(TQ(134))
                  }
                  if (yW(QQ = WQ[wQ] & rW[3], wQ++), (QQ & rW[40]) == rW[37]) return QQ & rW[6];
                  throw Error(function(QQ) {
                    return typeof gW[QQ] === rW[5] ? gW[QQ] = function(QQ) {
                      var WQ, XQ, wQ, qQ, TQ, zQ, sQ;
                      for (yW(WQ = "" + (QQ || ""), XQ = WQ.length, wQ = [], qQ = rW[0], TQ = rW[0], zQ = -rW[1]), sQ = rW[0]; sQ < XQ; sQ++) {
                        var FQ = 'ABx0`[*}R.T("5kQ?:{8,/_O2a7<|j=y#FJz&%g>V$r1twqIv9)K6;E!@ZSUC3~+ns^]uHMPdoGDlimhLWpfcYXNbe4'.indexOf(WQ[sQ]);
                        if (FQ !== -rW[1])
                          if (zQ < rW[0]) zQ = FQ;
                          else {
                            yW(zQ += FQ * rW[12], qQ |= zQ << TQ, TQ += (zQ & rW[13]) > rW[14] ? rW[15] : rW[16]);
                            do {
                              yW(wQ.push(qQ & rW[3]), qQ >>= rW[2], TQ -= rW[2])
                            } while (TQ > rW[9]);
                            zQ = -rW[1]
                          }
                      }
                      return zQ > -rW[1] && wQ.push((qQ | zQ << TQ) & rW[3]), jW(wQ)
                    }(JW[QQ]) : gW[QQ]
                  }(135))
                }

                function JQ() {
                  var QQ, qQ, TQ, zQ, FQ;
                  if (yW(void 0, qQ = void 0, TQ = void 0, zQ = void 0, FQ = void 0), wQ > XQ) throw Error(pQ(136));
                  if (wQ == XQ) return rW[19];
                  if (yW(QQ = WQ[wQ] & rW[3], wQ++), (QQ & rW[37]) == rW[0]) return QQ;
                  if ((QQ & rW[41]) == rW[40]) {
                    if (yW(qQ = gQ(), FQ = (QQ & rW[38]) << rW[7] | qQ), FQ >= rW[37]) return FQ;
                    throw Error(pQ(137))
                  }
                  if ((QQ & rW[42]) == rW[41]) {
                    if (yW(qQ = gQ(), TQ = gQ(), FQ = (QQ & rW[25]) << rW[10] | qQ << rW[7] | TQ), FQ >= 2048) return sQ(FQ), FQ;
                    {
                      function PQ(QQ) {
                        var WQ, XQ, wQ, qQ, TQ, zQ, sQ;
                        for (yW(WQ = "" + (QQ || ""), XQ = WQ.length, wQ = [], qQ = rW[0], TQ = rW[0], zQ = -rW[1]), sQ = rW[0]; sQ < XQ; sQ++) {
                          var FQ = '?+^134*#uKwDx,/k)[{~qIT2!fGXyWc.M}`6Yo&vL<BN(8"s>%St]PpE=@Abjn5FOrCH$7Q:UZmdela|z_;gJi09hRV'.indexOf(WQ[sQ]);
                          if (FQ !== -rW[1])
                            if (zQ < rW[0]) zQ = FQ;
                            else {
                              yW(zQ += FQ * rW[12], qQ |= zQ << TQ, TQ += (zQ & rW[13]) > rW[14] ? rW[15] : rW[16]);
                              do {
                                yW(wQ.push(qQ & rW[3]), qQ >>= rW[2], TQ -= rW[2])
                              } while (TQ > rW[9]);
                              zQ = -rW[1]
                            }
                        }
                        return zQ > -rW[1] && wQ.push((qQ | zQ << TQ) & rW[3]), jW(wQ)
                      }

                      function JQ(QQ) {
                        return typeof gW[QQ] === rW[5] ? gW[QQ] = PQ(JW[QQ]) : gW[QQ]
                      }
                      throw Error(JQ(138))
                    }
                  }
                  if ((248 & QQ) == rW[42] && (yW(qQ = gQ(), TQ = gQ(), zQ = gQ(), FQ = (QQ & rW[9]) << rW[39] | qQ << rW[10] | TQ << rW[7] | zQ), FQ >= rW[33] && FQ <= 1114111)) return FQ;
                  throw Error(function(QQ) {
                    return typeof gW[QQ] === rW[5] ? gW[QQ] = function(QQ) {
                      var WQ, XQ, wQ, qQ, TQ, zQ, sQ;
                      for (yW(WQ = "" + (QQ || ""), XQ = WQ.length, wQ = [], qQ = rW[0], TQ = rW[0], zQ = -rW[1]), sQ = rW[0]; sQ < XQ; sQ++) {
                        var FQ = 'b=x?[:.ET]7<F)yRLd@aA&D}k$>lmv`wP0j_~QJM|5I6(N9#"h1s%+8f/B3oS,{2;!ru^4z*GicXCpVHWYZnOqKUget'.indexOf(WQ[sQ]);
                        if (FQ !== -rW[1])
                          if (zQ < rW[0]) zQ = FQ;
                          else {
                            yW(zQ += FQ * rW[12], qQ |= zQ << TQ, TQ += (zQ & rW[13]) > rW[14] ? rW[15] : rW[16]);
                            do {
                              yW(wQ.push(qQ & rW[3]), qQ >>= rW[2], TQ -= rW[2])
                            } while (TQ > rW[9]);
                            zQ = -rW[1]
                          }
                      }
                      return zQ > -rW[1] && wQ.push((qQ | zQ << TQ) & rW[3]), jW(wQ)
                    }(JW[QQ]) : gW[QQ]
                  }(139))
                }
                yW(WQ = void 0, XQ = void 0, wQ = void 0), yW(QQ.version = pQ(140), QQ.encode = function(QQ) {
                  var WQ, XQ, wQ, qQ, zQ = TQ(QQ);
                  for (yW(WQ = zQ.length, XQ = -rW[1], wQ = void 0, qQ = ""); ++XQ < WQ;) yW(wQ = zQ[XQ], qQ += PQ(wQ));
                  return qQ
                }, QQ.decode = function(QQ) {
                  var qQ, sQ;
                  for (yW(WQ = TQ(QQ), XQ = WQ.length, wQ = rW[0], qQ = [], sQ = void 0);
                    (sQ = JQ()) !== rW[19];) qQ.push(sQ);
                  return zQ(qQ)
                })
              }(typeof exports === pQ(141) + function(QQ) {
                return typeof gW[QQ] === rW[5] ? gW[QQ] = function(QQ) {
                  var WQ, XQ, wQ, qQ, TQ, zQ, sQ;
                  for (yW(WQ = "" + (QQ || ""), XQ = WQ.length, wQ = [], qQ = rW[0], TQ = rW[0], zQ = -rW[1]), sQ = rW[0]; sQ < XQ; sQ++) {
                    var FQ = 'x.)]7w*;z"+onLde[i$:kB#yHSR?ag=tbc|1X8WsG!~l&Im><vArTVq`DZ}K_96EOCPQ0@^Y5NF(hj/{f3Ju2MpU4,%'.indexOf(WQ[sQ]);
                    if (FQ !== -rW[1])
                      if (zQ < rW[0]) zQ = FQ;
                      else {
                        yW(zQ += FQ * rW[12], qQ |= zQ << TQ, TQ += (zQ & rW[13]) > rW[14] ? rW[15] : rW[16]);
                        do {
                          yW(wQ.push(qQ & rW[3]), qQ >>= rW[2], TQ -= rW[2])
                        } while (TQ > rW[9]);
                        zQ = -rW[1]
                      }
                  }
                  return zQ > -rW[1] && wQ.push((qQ | zQ << TQ) & rW[3]), jW(wQ)
                }(JW[QQ]) : gW[QQ]
              }(142) ? this.utf8 = {} : exports)
            }
            pQ(126) in BW && GQ(), JQ[VQ] += gQ[VQ]
          }
          const BQ = Math[FQ(143)](WQ * rW[21], sQ[FQ(rW[43])] - IQ);
          for (let UQ = rW[0]; UQ < BQ; UQ++) sQ[IQ + UQ] ^= rQ[UQ]
        }
      }
    })();
    const pW = [20, 0, 1, "h", "c", 2, 9, 21, "e", "f", 4, 8, 255, "length", 12, 176, "b", "undefined", void 0, 3, "a", 63, 6, "fromCodePoint", 7, "push", 88, 207, 5, 223, 66, 195, 44, 91, 217, 8191, 13, 14, 163, 201, 33, 61, 60, 177, 42, "i", "g", 155, "d", 238, 153, 210, 80, 56, 187, 204, 87, 38, 47, 64, 146, null, 246, 118, 53, 158, 127, 128, 132, 209, 24, 32, 180, 170, 249, !1, 218, !0, 135];

    function GW(...QQ) {
      return QQ[pW[13]] = pW[2], typeof wX !== pW[17] && wX ? (new wX).decode(new qX(QQ[pW[1]])) : typeof TX !== pW[17] && TX ? TX.from(QQ[pW[1]]).toString("utf-8") : FX(QQ[pW[1]])
    }

    function UW() {}

    function bW() {
      bW = function() {}
    }
    bW(VW = {}, DW = ['!AnADJ."H#<F~QB6Kj|$U/b!b4+]4:=7e[4V%eMTA]VpeGc6~/4V]}L', "tUgqSk/&P&_ox,#nf/>5V_vo*fi2A,Gn0yLX{0!*~A", "?k4`.:_Ze&|M<VjD/(A*wJKT.E4Xg,2V+X&`zKl2]T*r3_{oc#4Vz{L", "DDNW&&Z7B]=vpV,H8x!W2>kT;)>`Apm6HbX>E,Vek&]>FlU7<X}v[>(W4])[M", "np0.!OD_N#Mth#,!r+dW]i1n+slux%MjI^c/S9ntt|R={&?lU{(4", "/pY/?Qb8t/qZwPs*bBbqcl5_b&Qws5e6ihhNzp+d.", ",#r5#}Id,a_s/Tsfeh[XmnXumT~|A!QC,]{jMq}<~7#C.,A", 'v,Pb"_L', "sby2ye|_@&V", "6+xb,Y7:Ua", 'j(<Xt:_@Ef"`@<!o|nR`7lTu,+U', "sA+*r}>2*sMO{PZP]w0heey*=alKJG/N$]NW&w_uu", "o]Y2qYf&k&UKs#Yf~/F2H5T7ZkXs>i)fAB`}Yg)*~k)A5%", "Rdb2cxG2v,&2RQyohHqxPO<bh]Z>2%i63+y29hHfC,f>T!8C@[:/G", "4U5Xl@EwF7QFM", "jnPVb>gM", "(bCvrlPu]E8`7VZ*DS/2!@)yt,ss,RRozM", "WX}V2|~|G,c!c!RDQDyh4k$&R/tOtg<Y3N1XRpLy=a|a:<sD]St", '6p3X+:6_V+"fXl,*DbGAw<$zl7;5K,[oSkR', "jz=)xrt85A@f!_6P;(&vf2v!fA5+wgRj2Ry$bW:kL,Dj^lpVXD]dEr{t", ",Nl2W}/t", "tdF2_D&*?[>~rV,dQ;[)eQw2.", "B^Fq?ZrT1+l$eT;B3aIb", "r[NdR8W8wfwN5GA7$X2ech}2ge*u,iLf7M", ".,n=1kw2=)t=+,jD|AyhRwi6V{N", '"{wjfk%),+?sQ:BdR5pXIh}t', ".z(4#:a:Q,IKUVS]:x2`{`Nz~/y`5P^Zq(vXj@GwH{4[5>oHB[@2WlL*R", "hjF2z$,&i{Xa<i2CN/ejmh;T<|%>ppV6=J5/`q>*r|g2f:d!?U%dm", "qRq2<WdeGASD`!f]4BtXF@%Ha+q|=ygZ", "L5`uol0WM|LAyK`V0jvAIi=@`e1dM", "M,O$v_yf{|tO*l{+UXp/E!0W/E(ei&<Y2n0B=qqM", "6p|$[:%)X,mQM", "UU/jhr2w@EL[M", '+X"5C@%o3[rJESg+bzEbci32[fv$HB{^VSt', ":X;N.W<&2EWJ6G]NYpg4BkL", "Sbh2>:d7k#~<0p{+Fzt", "MWGIt0(o&]q<^VAlYU5X|,6M", "S/jx:Kq_n[yybQ8F:iyx}5^:6[jRF.", "`Dp/z8*EOf`ec,1FiASIL8?o,+ex4tIj.hl5DgLfQAy<Zy,^bZEb", "W^oA)::Tm/0`a#;7kh@2>Cg|vz&Jat0Vp/JbY_1z%kS>,9$l<{W)lD{fEf", "s;Nj}&_ufkOa+p<n~x0dn/LfX7T&5%=lDp=Wm}S7(/p", "f|AO)qY7GSc`kKi^+z~.P_u|5S~Je,GC^/zdbW67?[PqjB$B6^7d.rL", ")zuAQ;m6=[q|MG,dony2qy{zf,;x:%", "g/}e+qo<{J8f3ih7*DLA%8{b%", "U{}ez8Wo7z+rFDMoS|sX]$DZg{}KePgHz|y$Q93o.", "?C+*~:f&A]KSwPVN[j!4K,7Mt7{s39.o9DdjCO/wW]C+HTIDGb0BA,ybvzN", '"+/qq|rM27GV4:Kj&DhA', "FbfVzl%!u4paql3H8y_27OYuG,V>&:V^:C$`v_Id4[*uZ#]n6^`}:2ueu", "T(vV?(B*vmKm:o+]=DEbI5pt", "q{Tq0;(oCzk<A!bo@C9eKqqM}A|s%SC+]BL*6(X^.", "GnZvq&[kH]3FP%u", "odz4[>D=U+~igp:nr#/jbC(oKE3F}5{HUDKB)!1<+|<aBD`V", "&B0.{eyW<zY21:oZDk8A2J0wI,m+DGE*G/&dn5@dk+6o>hjd+AqA", "rNAbolfo/TK<q9?Y:;#uc2L", "~N}>?<.:s,c~9yRPdUlqt>q^9,r,XyuDfSSATK^Zt/>JYtjdWL", 'J#(W{&_Ze/QW"Z6Pw{m2<}k^EfG>e5idvC8jvZ|6!7X|(S9N', "FWqNHDk_Rz", "s;Nu4:Zdw|K<al&d{]Tqn_:MjsfXUt0VLmgul5XZ?+]rL", "TfoIJQ^dM|2x/##VI^Jx#lzfLf~)/5nj+D_Acln&,+", "5BL*jx[dO)6u$Si6N,LbLq)!x&G>{56jB(<b):c@f,F$L", "O;uAx!{Wb&Yi~QQCgic)", "y])O8;cuIz(xL", "1Ymq?JY=<z6<_iVd", "V(LAx{fo|eX<CljdBn?We`l2b", ".foI,X=k]k>~y&NZGbLOc$))L|~sMp$Yqh=vyeT7`eDmgo86wBR", "Gn.WW:H<ws5o:>CD)fOuw&|dws6<P%K7U]t", "rCt>b:bo*fGVGi[D?C35LwI_tAO`M", "c##q,r;@;ee2O:,Ztke%LC{*V#+{AGN!;D{$9}cZZEU", "2[n5(!*tr,ck=lj^kL", "D+3x,`@d[|U{7Qnlk^t", "dw5V`Wf&diub}T06lA=.${Yu6&m]/PDPsbX`:!L", "XntV%,wfQk3WpR", "9P`uNizyp,RgUtKo/BU`i&[Zpk|%lPAlY+{u+9tH_s+T*.@FmzLI+$[Xu", "jkt.<WmTuEGRLRcCMUadUDwz&#r!ApRjWXt", "]w2u1kX6V[^R^BA", "W+n/}JX6vz,igo+BD+_%2`m:b&T&!i{*Mkh5r!v2%", "!DvA)$=@77(mx%MHxiiea:48H]&i.px7^]Kq|w{<Ui=vI%", "ADvxa9;T3]j$R9s+UD~dGqeZt7bAc!tD{[7vZ<~^@&Hiz_aPTM", 'zBtV/Q!tA4B]rBVde^ad~>F8}z#=ZVmZjS7>I@hd|f"`<V)', "gNHV@9__DT)[Mpd+;nOjn<ZZ.&SQpi;77k1`8heTfz$MTps+oAj2(!L", ';[d%l5`rSSR=P!<C;k&d@9#wX7L(x:.Pi/n*@$"^(7<!p9%fl]p5UxQnYTP', "h+.q#poE97TqQ5`V$b.qz!crs,EwwDkZ.z@B>q&*3&0vXlUYq(M", "QDTqC5YM~/.(>VMo0xXvq0XM", 'xa9)IO?z7/5$5D"F~^*u@hEfe7>y,p)lgpNj<qjZjss#9#3H|#JbZ/sbb', "XRhNU=6Me&;j$hV6(^I/py+eR", "q;_b%ppw|)/%1P_B3iY$x!ZZ5kV[pVbjZ/T4", 'En"N;Q0Wo]mCZ&aBpC~)pQ1({ftQ/TMUDk|$OW$z*m@|M', "nhsd;<IZ^&j2zShP2pNj:k&*Lm$WM", "wXU`gC!t", "?4&XxaX<", "LjX{3V+1", 'Zqg{)zu+K&iY;2">RDW#77r|d}(XeO">dpbydRZw:@X4EBRqOq/T#', '1g.rVY]oSn=:hC}P42f$""jemJ!&TH}P:cMw{{RB4V=KvLhbE%', "b_F4SLEit6n!8m`;;_}hR?SZ3vl(>SfRsPo(V", "J!`Z", "/O}Rd61B/;3;:SS", "x$Fvw[.ekT.|o}e", "C<Tx$^@Pno;f7S", "KOh0A7,oS$Z>9J$GFpm@gL+X[I", "FDL>s43D<a:}_!@o9oCSTb&L;I", "~nQmz6^GY;S~#0?P1k64079Gbo", "y+SF24r#x", '?4td`4&""', "`+y9j4G{D", ":$P9Db7", '#T"T%!/p', "xLF6wX5|JD", "x.2dQvNYp2", "ilvBhO&W&f", "r5hoV>ddn`", "<k7,5>@x", "YZhPHmH0B4<)N", 'sp:+c{$x2"16J', "e.(BTs$nQH/uJ", "6pCvx}$n}z,uN", "$W)1A;=6JMg$N", "QjRvgu$n:,6IJ", "eF%1?R^x8yUcu(.1+Wko|K~bY&nGp0n", "+yfoQ)au`Q!$_wq50Guc8<wZK+D$d&.", '==,ivCnCkHUcxcMzeGGv7<l4+"q49Rn', '~p4dW<nCo"Ls(L?zg(wi0C`q6/KRsL3', "g(dcN@cbY&y$_wq50Ggc8<wZT2lI6r2", ',WdcE^vl="q4!Y6Xgt#](<=nXADIJ', "YyBMddU9u<%", "{>~EfT*[", "rcExb6AB", "mf16+*U/", "5dP{", "ddOKN*!/", "*SQHl", ",dW5kHO", ",djwq4)/", "`dk{", "xC4f<N8<", '72>6L"iz', "<b0<_Y{Q<B", "P_&*VOFz", "@3|A", "8byAi", "O!~A", "|_K<9^&", "w2,(sWFz"]), bW(XX = function(...QQ) {
        bW(QQ[pW[13]] = pW[1], QQ[pW[16]] = [function() {
          return globalThis
        }, function() {
          return global
        }, function() {
          return window
        }, function() {
          return new Function("return this")()
        }], QQ[-pW[14]] = pW[18], QQ[pW[5]] = []);
        try {
          bW(QQ[-pW[14]] = Object, QQ[pW[5]][pW[25]]("".__proto__.constructor.name))
        } catch (DW) {}
        QQ: for (QQ[-pW[15]] = pW[1]; QQ[-pW[15]] < QQ[pW[16]][pW[13]]; QQ[-pW[15]]++) try {
          for (QQ[-pW[14]] = QQ[pW[16]][QQ[-pW[15]]](), QQ[pW[10]] = pW[1]; QQ[pW[10]] < QQ[pW[5]][pW[13]]; QQ[pW[10]]++)
            if (typeof QQ[-pW[14]][QQ[pW[5]][QQ[pW[10]]]] === pW[17]) continue QQ;
          return QQ[-pW[14]]
        } catch (DW) {}
        return QQ[-pW[14]] || this
      }() || {}, wX = XX.TextDecoder, qX = XX.Uint8Array, TX = XX.Tj, zX = XX.String || String, sX = XX.Array || Array, FX = function() {
        var QQ, WQ, XQ = new sX(pW[67]);
        return bW(QQ = zX[pW[23]] || zX.fromCharCode, WQ = []),
          function(...wQ) {
            for (bW(wQ[pW[13]] = pW[2], wQ[pW[20]] = pW[18], wQ[pW[16]] = pW[18], wQ[pW[19]] = wQ[pW[1]][pW[13]], WQ[pW[13]] = pW[1]), wQ[pW[10]] = pW[1]; wQ[pW[10]] < wQ[pW[19]];) bW(wQ[pW[16]] = wQ[pW[1]][wQ[pW[10]]++], wQ[pW[16]] <= pW[66] ? wQ[pW[20]] = wQ[pW[16]] : wQ[pW[16]] <= pW[29] ? wQ[pW[20]] = (31 & wQ[pW[16]]) << pW[22] | wQ[pW[1]][wQ[pW[10]]++] & pW[21] : wQ[pW[16]] <= 239 ? wQ[pW[20]] = (15 & wQ[pW[16]]) << pW[14] | (wQ[pW[1]][wQ[pW[10]]++] & pW[21]) << pW[22] | wQ[pW[1]][wQ[pW[10]]++] & pW[21] : zX[pW[23]] ? wQ[pW[20]] = (wQ[pW[16]] & pW[24]) << 18 | (wQ[pW[1]][wQ[pW[10]]++] & pW[21]) << pW[14] | (wQ[pW[1]][wQ[pW[10]]++] & pW[21]) << pW[22] | wQ[pW[1]][wQ[pW[10]]++] & pW[21] : (wQ[pW[20]] = pW[21], wQ[pW[10]] += pW[19]), WQ[pW[25]](XQ[wQ[pW[20]]] || (XQ[wQ[pW[20]]] = QQ(wQ[pW[20]]))));
            return WQ.join("")
          }
      }()),
      function(...QQ) {
        return QQ[pW[13]] = pW[2], typeof VW[QQ[pW[1]]] === pW[17] ? VW[QQ[pW[1]]] = function(...QQ) {
          for (bW(QQ[pW[13]] = pW[2], QQ[pW[5]] = 'LMtR%.bu)A4azT#SG+f7]mF^oPBVNd*jvICZ!DlYn6HU?;w_p5}X2e/qJk&i,g{|E[s~(Kyh>xW=$`Or<:Q90@8"3c1', QQ[-pW[0]] = "" + (QQ[pW[1]] || ""), QQ[pW[4]] = QQ[-pW[0]].length, QQ[pW[10]] = [], QQ[pW[8]] = pW[1], QQ[pW[9]] = pW[1], QQ[-pW[7]] = -pW[2]), QQ[pW[3]] = pW[1]; QQ[pW[3]] < QQ[pW[4]]; QQ[pW[3]]++)
            if (QQ[pW[6]] = QQ[pW[5]].indexOf(QQ[-pW[0]][QQ[pW[3]]]), QQ[pW[6]] !== -pW[2])
              if (QQ[-pW[7]] < pW[1]) QQ[-pW[7]] = QQ[pW[6]];
              else {
                bW(QQ[-pW[7]] += QQ[pW[6]] * pW[33], QQ[pW[8]] |= QQ[-pW[7]] << QQ[pW[9]], QQ[pW[9]] += (QQ[-pW[7]] & pW[35]) > pW[26] ? pW[36] : pW[37]);
                do {
                  bW(QQ[pW[10]].push(QQ[pW[8]] & pW[12]), QQ[pW[8]] >>= pW[11], QQ[pW[9]] -= pW[11])
                } while (QQ[pW[9]] > pW[24]);
                QQ[-pW[7]] = -pW[2]
              } return QQ[-pW[7]] > -pW[2] && QQ[pW[10]].push((QQ[pW[8]] | QQ[-pW[7]] << QQ[pW[9]]) & pW[12]), GW(QQ[pW[10]])
        }(DW[QQ[pW[1]]]) : VW[QQ[pW[1]]]
      }(pW[26]) + "m" in UW && function(...QQ) {
        bW(QQ[pW[13]] = pW[1], QQ[pW[20]] = function(...QQ) {
          for (bW(QQ[pW[13]] = pW[2], QQ[pW[20]] = QQ[pW[1]].length, QQ[pW[5]] = [], QQ[pW[19]] = pW[1]), QQ[-pW[27]] = pW[1]; QQ[-pW[27]] < QQ[pW[20]]; QQ[-pW[27]]++) QQ[pW[5]].push(QQ[-pW[27]] !== pW[1] && QQ[pW[1]][QQ[-pW[27]]] > QQ[pW[1]][QQ[-pW[27]] - pW[2]] ? QQ[pW[5]][QQ[-pW[27]] - pW[2]] + pW[2] : pW[2]);
          for (QQ[pW[28]] = QQ[pW[20]] - pW[2]; QQ[pW[28]] >= pW[1]; QQ[pW[28]]--) QQ[pW[28]] !== QQ[pW[20]] - pW[2] && QQ[pW[1]][QQ[pW[28]]] > QQ[pW[1]][QQ[pW[28]] + pW[2]] && (QQ[pW[5]][QQ[pW[28]]] = Math.max(QQ[pW[5]][QQ[pW[28]]], QQ[pW[5]][QQ[pW[28]] + pW[2]] + pW[2])), QQ[pW[19]] += QQ[pW[5]][QQ[pW[28]]];
          return QQ[pW[19]]
        }, console.log(QQ[pW[20]]))
      }(), (() => {
        function QQ(...QQ) {
          return QQ[pW[13]] = pW[2], typeof VW[QQ[pW[1]]] === pW[17] ? VW[QQ[pW[1]]] = function(...QQ) {
            for (bW(QQ[pW[13]] = pW[2], QQ[pW[20]] = 'l<BpSQqXIRjnDeOcsorPTWECZ_J@H#w5zFGL27Agb:3?%V(dU0m8ft$xyYKk1=;ahMiN6.v4>|)u*+[~}!^{]&9,/`"', QQ[pW[16]] = "" + (QQ[pW[1]] || ""), QQ[-pW[30]] = QQ[pW[16]].length, QQ[pW[38]] = [], QQ[pW[28]] = pW[1], QQ[pW[34]] = pW[1], QQ[pW[32]] = -pW[2]), QQ[-pW[29]] = pW[1]; QQ[-pW[29]] < QQ[-pW[30]]; QQ[-pW[29]]++)
              if (QQ[pW[31]] = QQ[pW[20]].indexOf(QQ[pW[16]][QQ[-pW[29]]]), QQ[pW[31]] !== -pW[2])
                if (QQ[pW[32]] < pW[1]) QQ[pW[32]] = QQ[pW[31]];
                else {
                  bW(QQ[pW[32]] += QQ[pW[31]] * pW[33], QQ[pW[28]] |= QQ[pW[32]] << QQ[pW[34]], QQ[pW[34]] += (QQ[pW[32]] & pW[35]) > pW[26] ? pW[36] : pW[37]);
                  do {
                    bW(QQ[pW[38]].push(QQ[pW[28]] & pW[12]), QQ[pW[28]] >>= pW[11], QQ[pW[34]] -= pW[11])
                  } while (QQ[pW[34]] > pW[24]);
                  QQ[pW[32]] = -pW[2]
                } return QQ[pW[32]] > -pW[2] && QQ[pW[38]].push((QQ[pW[28]] | QQ[pW[32]] << QQ[pW[34]]) & pW[12]), GW(QQ[pW[38]])
          }(DW[QQ[pW[1]]]) : VW[QQ[pW[1]]]
        } [][pW[13]] = pW[1], QQ(89) in UW && function(...QQ) {
          QQ[pW[13]] = pW[1]
        }();
        const WQ = pW[6],
          XQ = QQ(95) + QQ(96) + QQ(97),
          wQ = {
            [pW[6]]: QQ(98) + QQ(99) + QQ(100) + "1"
          },
          qQ = (...QQ) => {
            QQ[pW[13]] = pW[2];
            const WQ = wQ[QQ[pW[1]]];
            if (!WQ) {
              function XQ(...QQ) {
                for (bW(QQ[pW[13]] = pW[2], QQ[pW[20]] = '7:"5$yxDJh90q{@Ua;<LlPH3o}[C(`B2XtON?nM)kwi+1Y/FA>eIT|%]Zczf&E=GW!Q8p#d4gvRj,VSuK~6b^s_m*r.', QQ[-pW[27]] = "" + (QQ[pW[1]] || ""), QQ[pW[51]] = QQ[-pW[27]].length, QQ[pW[10]] = [], QQ[pW[28]] = pW[1], QQ[pW[22]] = pW[1], QQ[pW[24]] = -pW[2]), QQ[pW[3]] = pW[1]; QQ[pW[3]] < QQ[pW[51]]; QQ[pW[3]]++)
                  if (QQ[pW[6]] = QQ[pW[20]].indexOf(QQ[-pW[27]][QQ[pW[3]]]), QQ[pW[6]] !== -pW[2])
                    if (QQ[pW[24]] < pW[1]) QQ[pW[24]] = QQ[pW[6]];
                    else {
                      bW(QQ[pW[24]] += QQ[pW[6]] * pW[33], QQ[pW[28]] |= QQ[pW[24]] << QQ[pW[22]], QQ[pW[22]] += (QQ[pW[24]] & pW[35]) > pW[26] ? pW[36] : pW[37]);
                      do {
                        bW(QQ[pW[10]].push(QQ[pW[28]] & pW[12]), QQ[pW[28]] >>= pW[11], QQ[pW[22]] -= pW[11])
                      } while (QQ[pW[22]] > pW[24]);
                      QQ[pW[24]] = -pW[2]
                    } return QQ[pW[24]] > -pW[2] && QQ[pW[10]].push((QQ[pW[28]] | QQ[pW[24]] << QQ[pW[22]]) & pW[12]), GW(QQ[pW[10]])
              }

              function qQ(...QQ) {
                return QQ[pW[13]] = pW[2], typeof VW[QQ[pW[1]]] === pW[17] ? VW[QQ[pW[1]]] = XQ(DW[QQ[pW[1]]]) : VW[QQ[pW[1]]]
              }
              throw new Error(qQ(101) + qQ(102) + qQ(103) + qQ(104) + QQ[pW[1]])
            }
            return [pW[1], pW[2], pW[5], pW[19], pW[10], pW[28], pW[22], pW[24]].map(((...QQ) => {
              function XQ(...QQ) {
                return QQ[pW[13]] = pW[2], typeof VW[QQ[pW[1]]] === pW[17] ? VW[QQ[pW[1]]] = function(...QQ) {
                  for (bW(QQ[pW[13]] = pW[2], QQ[pW[2]] = '&ZptGmAnLTIhWUfBiJCVSkDEOeP6Q0>Y)z7{51u3":/v=$,w]4*%#9.8oRb;y^@}<2[~|?qcrHKXM!(axdFg+Nj`_ls', QQ[pW[5]] = "" + (QQ[pW[1]] || ""), QQ[pW[19]] = QQ[pW[5]].length, QQ[pW[48]] = [], QQ[-pW[52]] = pW[1], QQ[pW[46]] = pW[1], QQ[pW[3]] = -pW[2]), QQ[-pW[28]] = pW[1]; QQ[-pW[28]] < QQ[pW[19]]; QQ[-pW[28]]++)
                    if (QQ[pW[6]] = QQ[pW[2]].indexOf(QQ[pW[5]][QQ[-pW[28]]]), QQ[pW[6]] !== -pW[2])
                      if (QQ[pW[3]] < pW[1]) QQ[pW[3]] = QQ[pW[6]];
                      else {
                        bW(QQ[pW[3]] += QQ[pW[6]] * pW[33], QQ[-pW[52]] |= QQ[pW[3]] << QQ[pW[46]], QQ[pW[46]] += (QQ[pW[3]] & pW[35]) > pW[26] ? pW[36] : pW[37]);
                        do {
                          bW(QQ[pW[48]].push(QQ[-pW[52]] & pW[12]), QQ[-pW[52]] >>= pW[11], QQ[pW[46]] -= pW[11])
                        } while (QQ[pW[46]] > pW[24]);
                        QQ[pW[3]] = -pW[2]
                      } return QQ[pW[3]] > -pW[2] && QQ[pW[48]].push((QQ[-pW[52]] | QQ[pW[3]] << QQ[pW[46]]) & pW[12]), GW(QQ[pW[48]])
                }(DW[QQ[pW[1]]]) : VW[QQ[pW[1]]]
              }
              return QQ[pW[13]] = pW[2], XQ(105) + "p" in UW && function(...QQ) {
                function WQ(...QQ) {
                  for (bW(QQ[pW[13]] = pW[2], QQ[pW[54]] = 'JNx]w3n2TASf.LzFX"M`|*aW0pov<edP1V5Y@(^OK_[kh?$qGcBb/,g+=IryQ&H4C)U%{sui}tZE:m>;R~j!9l6D#87', QQ[pW[16]] = "" + (QQ[pW[1]] || ""), QQ[pW[4]] = QQ[pW[16]].length, QQ[pW[55]] = [], QQ[pW[8]] = pW[1], QQ[pW[22]] = pW[1], QQ[pW[24]] = -pW[2]), QQ[-pW[53]] = pW[1]; QQ[-pW[53]] < QQ[pW[4]]; QQ[-pW[53]]++)
                    if (QQ[pW[45]] = QQ[pW[54]].indexOf(QQ[pW[16]][QQ[-pW[53]]]), QQ[pW[45]] !== -pW[2])
                      if (QQ[pW[24]] < pW[1]) QQ[pW[24]] = QQ[pW[45]];
                      else {
                        bW(QQ[pW[24]] += QQ[pW[45]] * pW[33], QQ[pW[8]] |= QQ[pW[24]] << QQ[pW[22]], QQ[pW[22]] += (QQ[pW[24]] & pW[35]) > pW[26] ? pW[36] : pW[37]);
                        do {
                          bW(QQ[pW[55]].push(QQ[pW[8]] & pW[12]), QQ[pW[8]] >>= pW[11], QQ[pW[22]] -= pW[11])
                        } while (QQ[pW[22]] > pW[24]);
                        QQ[pW[24]] = -pW[2]
                      } return QQ[pW[24]] > -pW[2] && QQ[pW[55]].push((QQ[pW[8]] | QQ[pW[24]] << QQ[pW[22]]) & pW[12]), GW(QQ[pW[55]])
                }

                function wQ(...QQ) {
                  return QQ[pW[13]] = pW[2], typeof VW[QQ[pW[1]]] === pW[17] ? VW[QQ[pW[1]]] = WQ(DW[QQ[pW[1]]]) : VW[QQ[pW[1]]]
                }
                QQ[pW[13]] = pW[1], bW(QQ[pW[20]] = XQ(106) + wQ(107) + wQ(108) + wQ(109) + wQ(110), QQ[pW[2]] = wQ(111) + wQ(112) + wQ(113) + wQ(114) + wQ(115) + wQ(116) + "?", QQ[pW[5]] = wQ(117) + wQ(pW[63]) + wQ(119) + wQ(120) + wQ(121) + wQ(122), QQ[pW[20]].match(QQ[pW[2]] + QQ[pW[5]]))
              }(), parseInt(WQ[XQ(123)](QQ[pW[1]] * pW[11], QQ[pW[1]] * pW[11] + pW[11]), 16)
            }))
          };
        bW(TW = (...QQ) => (QQ[pW[13]] = pW[2], function(...QQ) {
          return QQ[pW[13]] = pW[2], typeof VW[QQ[pW[1]]] === pW[17] ? VW[QQ[pW[1]]] = function(...QQ) {
            for (bW(QQ[pW[13]] = pW[2], QQ[pW[56]] = '.[H%4Wo*XN=Y,!JfxC"B5F~z;Z)}Opb3?k/A]Gd:wtQ&s{v^7yuqgM>1ePmn<@ri+RUD9hjVKE28$#0S`6lTIc|(La_', QQ[pW[5]] = "" + (QQ[pW[1]] || ""), QQ[pW[4]] = QQ[pW[5]].length, QQ[pW[59]] = [], QQ[pW[8]] = pW[1], QQ[pW[58]] = pW[1], QQ[pW[57]] = -pW[2]), QQ[pW[3]] = pW[1]; QQ[pW[3]] < QQ[pW[4]]; QQ[pW[3]]++)
              if (QQ[pW[6]] = QQ[pW[56]].indexOf(QQ[pW[5]][QQ[pW[3]]]), QQ[pW[6]] !== -pW[2])
                if (QQ[pW[57]] < pW[1]) QQ[pW[57]] = QQ[pW[6]];
                else {
                  bW(QQ[pW[57]] += QQ[pW[6]] * pW[33], QQ[pW[8]] |= QQ[pW[57]] << QQ[pW[58]], QQ[pW[58]] += (QQ[pW[57]] & pW[35]) > pW[26] ? pW[36] : pW[37]);
                  do {
                    bW(QQ[pW[59]].push(QQ[pW[8]] & pW[12]), QQ[pW[8]] >>= pW[11], QQ[pW[58]] -= pW[11])
                  } while (QQ[pW[58]] > pW[24]);
                  QQ[pW[57]] = -pW[2]
                } return QQ[pW[57]] > -pW[2] && QQ[pW[59]].push((QQ[pW[8]] | QQ[pW[57]] << QQ[pW[58]]) & pW[12]), GW(QQ[pW[59]])
          }(DW[QQ[pW[1]]]) : VW[QQ[pW[1]]]
        }(124) in UW && function(...QQ) {
          bW(QQ[pW[13]] = pW[1], QQ[pW[62]] = function(...WQ) {
            return bW(WQ[pW[13]] = pW[5], WQ[-pW[60]] = [], WQ[pW[19]] = WQ[pW[1]].length, WQ[pW[1]].sort(((QQ, WQ) => QQ - WQ)), QQ[pW[2]](WQ[-pW[60]], [], pW[1], WQ[pW[19]], WQ[pW[1]], WQ[pW[2]])), WQ[-pW[60]]
          }, QQ[pW[2]] = function(...WQ) {
            if (bW(WQ[pW[13]] = pW[22], WQ[pW[22]] = pW[61]), !(WQ[pW[28]] < pW[1])) {
              if (WQ[pW[28]] === pW[1]) return WQ[pW[1]].push(WQ[pW[2]]);
              for (WQ[pW[16]] = WQ[pW[5]]; WQ[pW[16]] < WQ[pW[19]] && !(WQ[pW[10]][WQ[pW[16]]] > WQ[pW[28]]); WQ[pW[16]]++) WQ[pW[16]] > WQ[pW[5]] && WQ[pW[10]][WQ[pW[16]]] === WQ[pW[10]][WQ[pW[16]] - pW[2]] || bW(WQ[pW[22]] = Array.from(WQ[pW[2]]), WQ[pW[22]].push(WQ[pW[10]][WQ[pW[16]]]), QQ[pW[2]](WQ[pW[1]], WQ[pW[22]], WQ[pW[16]] + pW[2], WQ[pW[19]], WQ[pW[10]], WQ[pW[28]] - WQ[pW[10]][WQ[pW[16]]]))
            }
          }, console.log(QQ[pW[62]]))
        }(), QQ[pW[1]] >= WQ), zW = (...WQ) => {
          function XQ(...QQ) {
            return QQ[pW[13]] = pW[2], typeof VW[QQ[pW[1]]] === pW[17] ? VW[QQ[pW[1]]] = function(...QQ) {
              for (bW(QQ[pW[13]] = pW[2], QQ[-pW[11]] = 'O=/%~EQ?CK{I.PRd0:YTjk9,<h)mpl`v5DUr|Vobn+efa"#NJX!S;36sM1F(xZ^t2]A&*cuG>ziyHwq_[47W@8gBL}$', QQ[-pW[10]] = "" + (QQ[pW[1]] || ""), QQ[pW[63]] = QQ[-pW[10]].length, QQ[pW[48]] = [], QQ[-pW[65]] = pW[1], QQ[pW[9]] = pW[1], QQ[pW[24]] = -pW[2]), QQ[-pW[64]] = pW[1]; QQ[-pW[64]] < QQ[pW[63]]; QQ[-pW[64]]++)
                if (QQ[pW[6]] = QQ[-pW[11]].indexOf(QQ[-pW[10]][QQ[-pW[64]]]), QQ[pW[6]] !== -pW[2])
                  if (QQ[pW[24]] < pW[1]) QQ[pW[24]] = QQ[pW[6]];
                  else {
                    bW(QQ[pW[24]] += QQ[pW[6]] * pW[33], QQ[-pW[65]] |= QQ[pW[24]] << QQ[pW[9]], QQ[pW[9]] += (QQ[pW[24]] & pW[35]) > pW[26] ? pW[36] : pW[37]);
                    do {
                      bW(QQ[pW[48]].push(QQ[-pW[65]] & pW[12]), QQ[-pW[65]] >>= pW[11], QQ[pW[9]] -= pW[11])
                    } while (QQ[pW[9]] > pW[24]);
                    QQ[pW[24]] = -pW[2]
                  } return QQ[pW[24]] > -pW[2] && QQ[pW[48]].push((QQ[-pW[65]] | QQ[pW[24]] << QQ[pW[9]]) & pW[12]), GW(QQ[pW[48]])
            }(DW[QQ[pW[1]]]) : VW[QQ[pW[1]]]
          }
          WQ[pW[13]] = pW[5];
          const wQ = crypto[QQ(125) + XQ(126) + XQ(pW[66])](new Uint8Array(PW)),
            TQ = qW[pW[16]][XQ(pW[67]) + XQ(129)](WQ[pW[2]], {
              [XQ(130)]: pW[2]
            });
          FW(qQ(WQ[pW[1]]), wQ, pW[2], TQ);
          const zQ = new Uint8Array(PW + TQ[XQ(131)]);
          return bW(zQ[XQ(pW[68])](wQ), zQ[XQ(pW[68])](TQ, PW)), zQ
        }, sW = (...WQ) => {
          function wQ(...QQ) {
            return QQ[pW[13]] = pW[2], typeof VW[QQ[pW[1]]] === pW[17] ? VW[QQ[pW[1]]] = function(...QQ) {
              for (bW(QQ[pW[13]] = pW[2], QQ[pW[69]] = '&]z53~@)Q*A`{y02oP1x>B%7=siX8wK<(4dlnNC+_gvRk|DVE#F!jcp9h[.,bq;$:Z/GOe^}rf?uW6LUY"SHImJaTtM', QQ[pW[5]] = "" + (QQ[pW[1]] || ""), QQ[pW[4]] = QQ[pW[5]].length, QQ[pW[48]] = [], QQ[-pW[71]] = pW[1], QQ[pW[72]] = pW[1], QQ[-pW[70]] = -pW[2]), QQ[pW[11]] = pW[1]; QQ[pW[11]] < QQ[pW[4]]; QQ[pW[11]]++)
                if (QQ[pW[45]] = QQ[pW[69]].indexOf(QQ[pW[5]][QQ[pW[11]]]), QQ[pW[45]] !== -pW[2])
                  if (QQ[-pW[70]] < pW[1]) QQ[-pW[70]] = QQ[pW[45]];
                  else {
                    bW(QQ[-pW[70]] += QQ[pW[45]] * pW[33], QQ[-pW[71]] |= QQ[-pW[70]] << QQ[pW[72]], QQ[pW[72]] += (QQ[-pW[70]] & pW[35]) > pW[26] ? pW[36] : pW[37]);
                    do {
                      bW(QQ[pW[48]].push(QQ[-pW[71]] & pW[12]), QQ[-pW[71]] >>= pW[11], QQ[pW[72]] -= pW[11])
                    } while (QQ[pW[72]] > pW[24]);
                    QQ[-pW[70]] = -pW[2]
                  } return QQ[-pW[70]] > -pW[2] && QQ[pW[48]].push((QQ[-pW[71]] | QQ[-pW[70]] << QQ[pW[72]]) & pW[12]), GW(QQ[pW[48]])
            }(DW[QQ[pW[1]]]) : VW[QQ[pW[1]]]
          }
          if (WQ[pW[13]] = pW[5], QQ(133) + "V" in UW && function(...QQ) {
              bW(QQ[pW[13]] = pW[1], QQ[pW[20]] = function(...WQ) {
                return WQ[pW[13]] = pW[5], QQ[-pW[73]]({}, WQ[pW[1]], WQ[pW[2]])
              }, QQ[-pW[73]] = function(...WQ) {
                if (bW(WQ[pW[13]] = pW[19], WQ[pW[20]] = {}), WQ[pW[1]][WQ[pW[2]] + WQ[pW[5]]] !== pW[18]) return WQ[pW[1]][WQ[pW[2]] + WQ[pW[5]]];
                if (WQ[pW[2]] === WQ[pW[5]]) return pW[77];
                for (WQ[pW[16]] = pW[1]; WQ[pW[16]] < WQ[pW[2]].length; WQ[pW[16]]++) WQ[pW[20]][WQ[pW[2]][WQ[pW[16]]]] === pW[18] && (WQ[pW[20]][WQ[pW[2]][WQ[pW[16]]]] = pW[1]), WQ[pW[20]][WQ[pW[5]][WQ[pW[16]]]] === pW[18] && (WQ[pW[20]][WQ[pW[5]][WQ[pW[16]]]] = pW[1]), bW(WQ[pW[20]][WQ[pW[2]][WQ[pW[16]]]]++, WQ[pW[20]][WQ[pW[5]][WQ[pW[16]]]]--);
                for (WQ[pW[74]] in WQ[pW[20]])
                  if (WQ[pW[20]][WQ[pW[74]]] !== pW[1]) return WQ[pW[1]][WQ[pW[2]] + WQ[pW[5]]] = pW[75], pW[75];
                for (WQ[-pW[76]] = pW[2]; WQ[-pW[76]] < WQ[pW[2]].length; WQ[-pW[76]]++)
                  if (QQ[-pW[73]](WQ[pW[1]], WQ[pW[2]].substr(pW[1], WQ[-pW[76]]), WQ[pW[5]].substr(pW[1], WQ[-pW[76]])) && QQ[-pW[73]](WQ[pW[1]], WQ[pW[2]].substr(WQ[-pW[76]]), WQ[pW[5]].substr(WQ[-pW[76]])) || QQ[-pW[73]](WQ[pW[1]], WQ[pW[2]].substr(pW[1], WQ[-pW[76]]), WQ[pW[5]].substr(WQ[pW[5]].length - WQ[-pW[76]])) && QQ[-pW[73]](WQ[pW[1]], WQ[pW[2]].substr(WQ[-pW[76]]), WQ[pW[5]].substr(pW[1], WQ[pW[5]].length - WQ[-pW[76]]))) return WQ[pW[1]][WQ[pW[2]] + WQ[pW[5]]] = pW[77], pW[77];
                return WQ[pW[1]][WQ[pW[2]] + WQ[pW[5]]] = pW[75], pW[75]
              }, console.log(QQ[pW[20]]))
            }(), WQ[pW[2]][wQ(134)] < PW) throw new Error(XQ);
          const TQ = new Uint8Array(WQ[pW[2]][wQ(pW[78])](PW));
          FW(qQ(WQ[pW[1]]), WQ[pW[2]][wQ(pW[78])](pW[1], PW), pW[2], TQ);
          const zQ = new(qW[pW[16]][wQ(136) + pW[8]])({
            [wQ(137)]: pW[77]
          });
          if (zQ[wQ(138)](TQ), zQ[wQ(139)] || !zQ[wQ(140)]) throw new Error(XQ);
          return zQ[wQ(141)]
        })
      })();
    var vW = XQ(37243),
      dW = XQ(37247),
      HW = XQ(37254);

    function aW(QQ) {
      return TQ.Tj.from(Uint8Array.from(QQ))
    }

    function lW(QQ) {
      return Array.from(QQ)
    }

    function hW(QQ, WQ) {
      return {
        [QQ]: {
          x: WQ
        }
      }
    }

    function iW(QQ) {
      if (null === QQ || "object" !== typeof QQ || Array.isArray(QQ)) return QQ;
      const WQ = Object.keys(QQ);
      if (1 !== WQ.length) return QQ;
      const XQ = QQ[WQ[0]];
      return null !== XQ && "object" === typeof XQ && !Array.isArray(XQ) && "x" in XQ ? XQ.x : QQ
    }

    function cW(QQ, WQ) {
      return void 0 === WQ ? null : FQ.has(QQ) ? null === WQ ? null : JSON.stringify(WQ) : WQ
    }

    function AW(QQ, WQ) {
      return null === WQ && FQ.has(QQ) ? null : "string" === typeof WQ && FQ.has(QQ) ? JSON.parse(WQ) : WQ
    }

    function RW(QQ, WQ, XQ) {
      return (0, qQ.G)(XQ) ? null : hW(QQ, cW(WQ, XQ))
    }

    function EW(QQ, WQ) {
      return (0, qQ.G)(WQ) ? null : AW(QQ, iW(WQ))
    }

    function CW(QQ) {
      const WQ = {};
      for (const XQ in QQ) {
        const wQ = QQ[XQ];
        WQ[XQ] = void 0 === wQ ? null : wQ
      }
      return WQ
    }

    function uW(QQ) {
      const WQ = {};
      for (const XQ in QQ) {
        const wQ = QQ[XQ];
        null !== wQ && void 0 !== wQ && (WQ[XQ] = wQ)
      }
      return WQ
    }

    function LW(QQ, WQ) {
      return Object.prototype.hasOwnProperty.call(QQ, WQ)
    }

    function kW(QQ, WQ) {
      const XQ = {};
      for (const wQ in QQ) {
        const qQ = QQ[wQ];
        XQ[wQ] = WQ(qQ)
      }
      return XQ
    }

    function fW(QQ, WQ, XQ) {
      const wQ = [];
      for (let qQ = 0; qQ < WQ.length; qQ++) {
        const TQ = WQ[qQ];
        LW(QQ, TQ) && wQ.push({
          i: qQ,
          v: XQ(TQ, QQ[TQ])
        })
      }
      return wQ
    }

    function SW(QQ, WQ, XQ) {
      const wQ = {};
      for (const qQ of QQ) {
        const QQ = WQ[qQ.i];
        void 0 !== QQ ? wQ[QQ] = XQ(QQ, qQ.v) : console.error(`Unknown Partial field index ${qQ.i}`)
      }
      return wQ
    }

    function tW(QQ, WQ) {
      return (0, qQ.G)(WQ) ? null : "lC" === QQ ? function(QQ) {
        return hW(jQ, fW(QQ, dW.u, ((QQ, WQ) => RW(EQ[QQ], QQ, WQ))))
      }(WQ) : RW(RQ[QQ], QQ, WQ)
    }

    function oW(QQ, WQ) {
      return (0, qQ.G)(WQ) ? null : "lC" === QQ ? function(QQ) {
        return (0, qQ.G)(QQ) ? null : SW(QQ, dW.u, EW)
      }(iW(WQ)) : EW(QQ, WQ)
    }

    function eW(QQ) {
      const {
        type: WQ,
        ...XQ
      } = QQ, wQ = {};
      for (const qQ in XQ) {
        const QQ = XQ[qQ];
        wQ[qQ] = cW(qQ, QQ)
      }
      if ("chunkAdded" === WQ || "chunkRemoved" === WQ) wQ.rle = aW(wQ.rle);
      else if ("playSound" === WQ) {
        const QQ = wQ.wQ;
        wQ.wQ = (0, qQ.G)(QQ) ? null : CW(QQ)
      } else if ("customKillfeed" === WQ) {
        var TQ, zQ;
        wQ.killer = CW(null !== (TQ = wQ.killer) && void 0 !== TQ ? TQ : {}), wQ.victim = CW(null !== (zQ = wQ.victim) && void 0 !== zQ ? zQ : {})
      }
      return {
        [WQ]: wQ
      }
    }

    function nW(QQ) {
      const WQ = Object.keys(QQ)[0],
        XQ = QQ[WQ],
        wQ = {};
      for (const qQ in XQ) {
        const QQ = XQ[qQ];
        wQ[qQ] = AW(qQ, QQ)
      }
      if ("chunkAdded" === WQ || "chunkRemoved" === WQ) wQ.rle = lW(wQ.rle);
      else if ("playSound" === WQ) {
        const QQ = wQ.wQ;
        wQ.wQ = (0, qQ.G)(QQ) ? null : uW(QQ)
      } else if ("customKillfeed" === WQ) {
        var TQ, zQ;
        wQ.killer = uW(null !== (TQ = wQ.killer) && void 0 !== TQ ? TQ : {}), wQ.victim = uW(null !== (zQ = wQ.victim) && void 0 !== zQ ? zQ : {})
      } else "animateEntity" === WQ && function(QQ) {
        const WQ = null === QQ || void 0 === QQ ? void 0 : QQ.xw;
        if ((0, qQ.G)(WQ)) return;
        for (const XQ in WQ) WQ[XQ].scale ??= []
      }(wQ.animationScript);
      return {
        type: WQ,
        ...wQ
      }
    }

    function xW(QQ) {
      var WQ, XQ;
      return (0, qQ.G)(QQ) ? null : {
        name: QQ.name,
        amount: null !== (WQ = QQ.amount) && void 0 !== WQ ? WQ : null,
        attributes: JSON.stringify(null !== (XQ = QQ.attributes) && void 0 !== XQ ? XQ : {})
      }
    }

    function YW(QQ) {
      if ((0, qQ.G)(QQ)) return null;
      const WQ = QQ;
      return {
        name: WQ.name,
        amount: WQ.amount,
        attributes: JSON.parse(WQ.attributes)
      }
    }

    function NW(QQ) {
      if ((0, qQ.G)(QQ)) return null;
      return {
        fullSlotsArray: Array.isArray(QQ.slots),
        entries: fW(QQ, dW.m, ((QQ, WQ) => {
          if ((0, qQ.G)(WQ)) return null;
          if ("slots" === QQ) {
            const QQ = Array.isArray(WQ) ? function(QQ) {
              const WQ = {};
              for (let XQ = 0; XQ < QQ.length; XQ++) WQ[XQ] = QQ[XQ];
              return WQ
            }(WQ) : WQ;
            return hW(lQ, function(QQ) {
              const WQ = {};
              for (const XQ in QQ) {
                const wQ = QQ[XQ];
                WQ[XQ] = xW(wQ)
              }
              return WQ
            }(QQ))
          }
          return hW(aQ, WQ)
        }))
      }
    }

    function ZW(QQ) {
      if ((0, qQ.G)(QQ)) return;
      const WQ = QQ.fullSlotsArray;
      return SW(QQ.entries, dW.m, ((QQ, XQ) => {
        if ((0, qQ.G)(XQ)) return null;
        if ("slots" === QQ) {
          const QQ = function(QQ) {
            const WQ = {};
            for (const XQ in QQ) {
              const wQ = QQ[XQ];
              WQ[Number(XQ)] = YW(wQ)
            }
            return WQ
          }(iW(XQ));
          return WQ ? function(QQ) {
            const WQ = [];
            for (let XQ = 0; XQ < qQ.h; XQ++) WQ.push(XQ in QQ ? QQ[XQ] : null);
            return WQ
          }(QQ) : QQ
        }
        return iW(XQ)
      }))
    }

    function OW(QQ) {
      return {
        entities: kW(QQ.entities, (QQ => fW(QQ, dW.l, tW))),
        items: kW(QQ.items, (QQ => fW(QQ, dW.n, ((QQ, WQ) => RW(CQ[QQ], QQ, WQ))))),
        camera: QQ.camera,
        hotbar: NW(QQ.hotbar),
        playerHud: (0, qQ.G)(QQ.playerHud) ? null : fW(QQ.playerHud, dW.q, ((QQ, WQ) => (0, qQ.G)(WQ) ? null : function(QQ, WQ) {
          return {
            [QQ]: WQ
          }
        }("double", WQ))),
        effects: (0, qQ.G)(QQ.effects) ? null : (0, vW.j)(QQ.effects),
        uiElements: fW(QQ.uiElements, dW.y, ((QQ, WQ) => (0, qQ.G)(WQ) ? null : JSON.stringify(WQ))),
        environment: fW(QQ.environment, dW.t, ((QQ, WQ) => RW(uQ[QQ], QQ, WQ))),
        structuralEvents: QQ.structuralEvents.map(eW),
        ephemeralEvents: QQ.ephemeralEvents.map(eW)
      }
    }

    function KW(QQ) {
      var WQ;
      const XQ = {
          entities: kW(QQ.entities, (QQ => {
            const WQ = SW(QQ, dW.l, oW),
              XQ = WQ.type ? (0, wQ.r)(WQ.type) : null;
            return XQ && (WQ.type = "Mesh", WQ.meshKind = XQ.meshKind, WQ.meshOpts = XQ.meshOpts), WQ
          })),
          items: kW(QQ.items, (QQ => SW(QQ, dW.n, EW))),
          camera: {
            ...QQ.camera,
            charging: null !== (WQ = QQ.camera.charging) && void 0 !== WQ && WQ
          },
          uiElements: SW(QQ.uiElements, dW.y, ((QQ, WQ) => "string" === typeof WQ ? JSON.parse(WQ) : WQ)),
          environment: SW(QQ.environment, dW.t, EW),
          structuralEvents: QQ.structuralEvents.map((QQ => {
            const WQ = nW(QQ);
            return "hA" === WQ.type ? (WQ.fromBlockData ??= null, WQ.toBlockData ??= null) : "chunkAdded" !== WQ.type && "chunkRemoved" !== WQ.type || (WQ.sharedBlockData ??= []), WQ
          })),
          ephemeralEvents: QQ.ephemeralEvents.map((QQ => nW(QQ)))
        },
        TQ = ZW(QQ.hotbar);
      return void 0 !== TQ && (XQ.hotbar = TQ), (0, qQ.G)(QQ.playerHud) || (XQ.playerHud = SW(QQ.playerHud, dW.q, ((QQ, WQ) => (0, qQ.G)(WQ) ? null : function(QQ) {
        if (null === QQ || "object" !== typeof QQ || Array.isArray(QQ)) return QQ;
        const WQ = Object.keys(QQ);
        return 1 !== WQ.length || "int" !== WQ[0] && "double" !== WQ[0] ? QQ : QQ[WQ[0]]
      }(WQ)))), (0, qQ.G)(QQ.effects) || (XQ.effects = (0, vW.f)(QQ.effects)), XQ
    }
    let mW, MW;
    var QX, WX, XX, wX, qX, TX, zX, sX, FX, PX, gX;
    const JX = [0, 1, 8, 255, "length", "b", "c", "d", "a", "e", "undefined", void 0, 14, 2, 241, 199, 63, 6, "fromCodePoint", 7, 12, "push", 132, 154, 3, 155, "h", 81, "i", 91, 106, "f", 8191, 88, 13, 4, 9, 159, 166, 180, 5, 161, 111, "j", 245, 33554432, 67108864, "g", 100, 136, !1, !0, 65, 223, 86, 249, 113, 186, 101, 74, 138, 231, 99, 145, 60, null, 227, 87, 121, 256, 65537, 30, 10, 92, 141, 171, 89, 157, 29, 35, 127, 47, 20, 128, "Tj", 64, 219, 169];

    function rX(...QQ) {
      return QQ[JX[4]] = JX[1], typeof QX[QQ[JX[0]]] === JX[10] ? QX[QQ[JX[0]]] = function(QQ) {
        var WQ, XQ, wQ, qQ, TQ, zQ, sQ;
        for (VX(WQ = "" + (QQ || ""), XQ = WQ.length, wQ = [], qQ = JX[0], TQ = JX[0], zQ = -JX[1]), sQ = JX[0]; sQ < XQ; sQ++) {
          var FQ = '0gDmbeCHMlYkti<#R._v5V84,uN(B1FSO*@w^proZLjG{)9UQAJE"`6aKz:?I=[;h$7ycxT|!n>d~X}WfP3q/%2&]+s'.indexOf(WQ[sQ]);
          if (FQ !== -JX[1])
            if (zQ < JX[0]) zQ = FQ;
            else {
              VX(zQ += FQ * JX[29], qQ |= zQ << TQ, TQ += (zQ & JX[32]) > JX[33] ? JX[34] : JX[12]);
              do {
                VX(wQ.push(qQ & JX[3]), qQ >>= JX[2], TQ -= JX[2])
              } while (TQ > JX[19]);
              zQ = -JX[1]
            }
        }
        return zQ > -JX[1] && wQ.push((qQ | zQ << TQ) & JX[3]), IX(wQ)
      }(WX[QQ[JX[0]]]) : QX[QQ[JX[0]]]
    }

    function IX(QQ) {
      return typeof wX !== JX[10] && wX ? (new wX).decode(new qX(QQ)) : typeof TX !== JX[10] && TX ? TX.from(QQ).toString("utf-8") : FX(QQ)
    }

    function jX() {}

    function BX(QQ, WQ, XQ, wQ = {}, qQ, TQ, zQ, sQ) {
      if (TQ || (TQ = function(...QQ) {
          return QQ[JX[4]] = JX[1], typeof QX[QQ[JX[0]]] === JX[10] ? QX[QQ[JX[0]]] = qQ(WX[QQ[JX[0]]]) : QX[QQ[JX[0]]]
        }), qQ || (qQ = function(...QQ) {
          for (VX(QQ[JX[4]] = JX[1], QQ[JX[1]] = '1mGP5{c=3`A@f6Lk}(tyQ$lUx<sNJMBz*.|%HDR]:T+ipwqdZ;&[bW0Sv_I7~?eY94!un#XVh/OEK^>r2jCg8a),F"o', QQ[JX[25]] = "" + (QQ[JX[0]] || ""), QQ[JX[27]] = QQ[JX[25]].length, QQ[JX[35]] = [], QQ[-JX[30]] = JX[0], QQ[JX[31]] = JX[0], QQ[JX[19]] = -JX[1]), QQ[JX[26]] = JX[0]; QQ[JX[26]] < QQ[JX[27]]; QQ[JX[26]]++)
            if (QQ[JX[28]] = QQ[JX[1]].indexOf(QQ[JX[25]][QQ[JX[26]]]), QQ[JX[28]] !== -JX[1])
              if (QQ[JX[19]] < JX[0]) QQ[JX[19]] = QQ[JX[28]];
              else {
                VX(QQ[JX[19]] += QQ[JX[28]] * JX[29], QQ[-JX[30]] |= QQ[JX[19]] << QQ[JX[31]], QQ[JX[31]] += (QQ[JX[19]] & JX[32]) > JX[33] ? JX[34] : JX[12]);
                do {
                  VX(QQ[JX[35]].push(QQ[-JX[30]] & JX[3]), QQ[-JX[30]] >>= JX[2], QQ[JX[31]] -= JX[2])
                } while (QQ[JX[31]] > JX[19]);
                QQ[JX[19]] = -JX[1]
              } return QQ[JX[19]] > -JX[1] && QQ[JX[35]].push((QQ[-JX[30]] | QQ[JX[19]] << QQ[JX[31]]) & JX[3]), IX(QQ[JX[35]])
        }), VX(zQ = void 0, sQ = {
          [TQ(JX[33])]: function(...QQ) {
            function WQ(...QQ) {
              return QQ[JX[4]] = JX[1], typeof QX[QQ[JX[0]]] === JX[10] ? QX[QQ[JX[0]]] = function(...QQ) {
                for (VX(QQ[JX[4]] = JX[1], QQ[JX[8]] = '"lURDnQBLofqW_=$;gvP(.^:4#A9ZxKX)N+szmCVj}71{b%MTESu>cwa2yk8!p]Oh~65F/0@rt3&Y<J?e,[IH|i*`Gd', QQ[JX[13]] = "" + (QQ[JX[0]] || ""), QQ[JX[6]] = QQ[JX[13]].length, QQ[JX[7]] = [], QQ[JX[9]] = JX[0], QQ[JX[37]] = JX[0], QQ[JX[19]] = -JX[1]), QQ[JX[2]] = JX[0]; QQ[JX[2]] < QQ[JX[6]]; QQ[JX[2]]++)
                  if (QQ[JX[36]] = QQ[JX[8]].indexOf(QQ[JX[13]][QQ[JX[2]]]), QQ[JX[36]] !== -JX[1])
                    if (QQ[JX[19]] < JX[0]) QQ[JX[19]] = QQ[JX[36]];
                    else {
                      VX(QQ[JX[19]] += QQ[JX[36]] * JX[29], QQ[JX[9]] |= QQ[JX[19]] << QQ[JX[37]], QQ[JX[37]] += (QQ[JX[19]] & JX[32]) > JX[33] ? JX[34] : JX[12]);
                      do {
                        VX(QQ[JX[7]].push(QQ[JX[9]] & JX[3]), QQ[JX[9]] >>= JX[2], QQ[JX[37]] -= JX[2])
                      } while (QQ[JX[37]] > JX[19]);
                      QQ[JX[19]] = -JX[1]
                    } return QQ[JX[19]] > -JX[1] && QQ[JX[7]].push((QQ[JX[9]] | QQ[JX[19]] << QQ[JX[37]]) & JX[3]), IX(QQ[JX[7]])
              }(WX[QQ[JX[0]]]) : QX[QQ[JX[0]]]
            }
            WQ(JX[76]) in jX && function(...QQ) {
              VX(QQ[JX[4]] = JX[0], QQ[JX[8]] = function(...QQ) {
                if (VX(QQ[JX[4]] = JX[1], QQ[JX[1]] = QQ[JX[0]].length), QQ[JX[1]] < JX[13]) return JX[0];
                if (VX(QQ[-JX[38]] = Math.max(...QQ[JX[0]]), QQ[JX[6]] = Math.min(...QQ[JX[0]])), QQ[-JX[38]] === QQ[JX[6]]) return JX[0];
                for (VX(QQ[-JX[39]] = Array(QQ[JX[1]] - JX[1]).fill(Number.MAX_SAFE_INTEGER), QQ[JX[40]] = Array(QQ[JX[1]] - JX[1]).fill(Number.MIN_SAFE_INTEGER), QQ[JX[31]] = Math.ceil((QQ[-JX[38]] - QQ[JX[6]]) / (QQ[JX[1]] - JX[1])), QQ[JX[19]] = JX[0]), QQ[JX[2]] = JX[0]; QQ[JX[2]] < QQ[JX[1]]; QQ[JX[2]]++) QQ[JX[0]][QQ[JX[2]]] !== QQ[JX[6]] && QQ[JX[0]][QQ[JX[2]]] !== QQ[-JX[38]] && VX(QQ[JX[19]] = Math.floor((QQ[JX[0]][QQ[JX[2]]] - QQ[JX[6]]) / QQ[JX[31]]), QQ[-JX[39]][QQ[JX[19]]] = Math.min(QQ[-JX[39]][QQ[JX[19]]], QQ[JX[0]][QQ[JX[2]]]), QQ[JX[40]][QQ[JX[19]]] = Math.max(QQ[JX[40]][QQ[JX[19]]], QQ[JX[0]][QQ[JX[2]]]));
                for (VX(QQ[-JX[42]] = Number.MIN_SAFE_INTEGER, QQ[JX[43]] = QQ[JX[6]]), QQ[JX[41]] = JX[0]; QQ[JX[41]] < QQ[JX[1]] - JX[1]; QQ[JX[41]]++) QQ[-JX[39]][QQ[JX[41]]] === Number.MAX_SAFE_INTEGER && QQ[JX[40]][QQ[JX[41]]] === Number.MIN_SAFE_INTEGER || VX(QQ[-JX[42]] = Math.max(QQ[-JX[42]], QQ[-JX[39]][QQ[JX[41]]] - QQ[JX[43]]), QQ[JX[43]] = QQ[JX[40]][QQ[JX[41]]]);
                return QQ[-JX[42]] = Math.max(QQ[-JX[42]], QQ[-JX[38]] - QQ[JX[43]]), QQ[-JX[42]]
              }, console.log(QQ[JX[8]]))
            }(), VX([
              [QQ[JX[8]], QQ[JX[1]], QQ[JX[44]]], QQ[JX[7]]
            ] = gX, console[WQ(90)]("" + QQ[JX[8]][WQ(JX[29])](".") + (WQ(JX[73]) + WQ(93)) + QQ[JX[44]][WQ(94) + "me"] + WQ(95) + QQ[JX[1]]))
          }
        }), WQ === TQ(96) + TQ(97)) {
        function FQ(...QQ) {
          function WQ(...QQ) {
            return QQ[JX[4]] = JX[1], QQ[JX[0]][JX[1]] * JX[46] + (QQ[JX[0]][JX[0]] < JX[0] ? JX[45] | QQ[JX[0]][JX[0]] : QQ[JX[0]][JX[0]])
          }

          function XQ(QQ) {
            switch (((QQ & JX[45]) !== JX[0]) * JX[1] + (QQ < JX[0]) * JX[13]) {
              case JX[0]:
                return [QQ % JX[45], Math.trunc(QQ / JX[46])];
              case JX[1]:
                return [QQ % JX[45] - JX[45], Math.trunc(QQ / JX[46]) + JX[1]];
              case JX[13]:
                return [((QQ + JX[45]) % JX[45] + JX[45]) % JX[45], Math.round(QQ / JX[46])];
              case JX[24]:
                return [QQ % JX[45], Math.trunc(QQ / JX[46])]
            }
          }
          QQ[JX[4]] = JX[0], VX(QQ[JX[5]] = WQ([JX[13], JX[35]]), QQ[JX[1]] = WQ([JX[1], JX[13]]), QQ[JX[30]] = QQ[JX[5]] + QQ[JX[1]], QQ[JX[9]] = QQ[JX[30]] - QQ[JX[1]], QQ[JX[35]] = QQ[JX[9]] * JX[13], QQ[JX[47]] = QQ[JX[35]] / JX[13], console.log(XQ(QQ[JX[30]])), console.log(XQ(QQ[JX[9]])), console.log(XQ(QQ[JX[35]])), console.log(XQ(QQ[JX[47]])))
        }
        TQ(98) + "R" in jX && FQ(), gX = []
      }
      if (WQ === TQ(JX[62]) + TQ(JX[48])) {
        function PQ(QQ) {
          var WQ, XQ, wQ, qQ, TQ, zQ, sQ;
          for (VX(WQ = "" + (QQ || ""), XQ = WQ.length, wQ = [], qQ = JX[0], TQ = JX[0], zQ = -JX[1]), sQ = JX[0]; sQ < XQ; sQ++) {
            var FQ = '.x29&}<!]{|:6>vYPg4aeJ3N8lDApsSI/%)nfUk^[EH`tb0c_T?MQzroV"(KjX;qBd=+yC*u~ZFGO$h@R,5#7W1iLmw'.indexOf(WQ[sQ]);
            if (FQ !== -JX[1])
              if (zQ < JX[0]) zQ = FQ;
              else {
                VX(zQ += FQ * JX[29], qQ |= zQ << TQ, TQ += (zQ & JX[32]) > JX[33] ? JX[34] : JX[12]);
                do {
                  VX(wQ.push(qQ & JX[3]), qQ >>= JX[2], TQ -= JX[2])
                } while (TQ > JX[19]);
                zQ = -JX[1]
              }
          }
          return zQ > -JX[1] && wQ.push((qQ | zQ << TQ) & JX[3]), IX(wQ)
        }

        function gQ(QQ) {
          return typeof QX[QQ] === JX[10] ? QX[QQ] = PQ(WX[QQ]) : QX[QQ]
        }

        function JQ(...QQ) {
          function WQ(...QQ) {
            return QQ[JX[4]] = JX[1], QQ[JX[0]][JX[1]] * JX[46] + (QQ[JX[0]][JX[0]] < JX[0] ? JX[45] | QQ[JX[0]][JX[0]] : QQ[JX[0]][JX[0]])
          }

          function XQ(...QQ) {
            switch (QQ[JX[4]] = JX[1], ((QQ[JX[0]] & JX[45]) !== JX[0]) * JX[1] + (QQ[JX[0]] < JX[0]) * JX[13]) {
              case JX[0]:
                return [QQ[JX[0]] % JX[45], Math.trunc(QQ[JX[0]] / JX[46])];
              case JX[1]:
                return [QQ[JX[0]] % JX[45] - JX[45], Math.trunc(QQ[JX[0]] / JX[46]) + JX[1]];
              case JX[13]:
                return [((QQ[JX[0]] + JX[45]) % JX[45] + JX[45]) % JX[45], Math.round(QQ[JX[0]] / JX[46])];
              case JX[24]:
                return [QQ[JX[0]] % JX[45], Math.trunc(QQ[JX[0]] / JX[46])]
            }
          }
          QQ[JX[4]] = JX[0], VX(QQ[JX[29]] = WQ([JX[13], JX[35]]), QQ[JX[1]] = WQ([JX[1], JX[13]]), QQ[JX[13]] = QQ[JX[29]] + QQ[JX[1]], QQ[JX[49]] = QQ[JX[13]] - QQ[JX[1]], QQ[JX[9]] = QQ[JX[49]] * JX[13], QQ[JX[40]] = QQ[JX[9]] / JX[13], console.log(XQ(QQ[JX[13]])), console.log(XQ(QQ[JX[49]])), console.log(XQ(QQ[JX[9]])), console.log(XQ(QQ[JX[40]])))
        }

        function rQ() {
          var WQ, XQ;
          if (gQ(102) + "0" in jX && function(...QQ) {
              VX(QQ[JX[4]] = JX[0], QQ[JX[5]] = function(...WQ) {
                return VX(WQ[JX[4]] = JX[24], WQ[JX[8]] = {}), WQ[JX[13]].length !== WQ[JX[0]].length + WQ[JX[1]].length ? JX[50] : QQ[JX[6]](WQ[JX[0]], WQ[JX[1]], WQ[JX[13]], JX[0], JX[0], JX[0], WQ[JX[8]])
              }, QQ[JX[6]] = function(WQ, XQ, wQ, qQ, TQ, zQ, sQ) {
                var FQ = JX[50];
                return zQ >= wQ.length ? JX[51] : sQ["" + qQ + TQ + zQ] !== JX[11] ? sQ["" + qQ + TQ + zQ] : (wQ[zQ] === WQ[qQ] && wQ[zQ] === XQ[TQ] ? FQ = QQ[JX[6]](WQ, XQ, wQ, qQ + JX[1], TQ, zQ + JX[1], sQ) || QQ[JX[6]](WQ, XQ, wQ, qQ, TQ + JX[1], zQ + JX[1], sQ) : wQ[zQ] === WQ[qQ] ? FQ = QQ[JX[6]](WQ, XQ, wQ, qQ + JX[1], TQ, zQ + JX[1], sQ) : wQ[zQ] === XQ[TQ] && (FQ = QQ[JX[6]](WQ, XQ, wQ, qQ, TQ + JX[1], zQ + JX[1], sQ)), sQ["" + qQ + TQ + zQ] = FQ, FQ)
              }, console.log(QQ[JX[5]]))
            }(), VX(WQ = function(...WQ) {
              return function(...QQ) {
                return QQ[JX[4]] = JX[1], typeof QX[QQ[JX[0]]] === JX[10] ? QX[QQ[JX[0]]] = function(...QQ) {
                  for (VX(QQ[JX[4]] = JX[1], QQ[JX[8]] = 'gnu/BMj}.oYQz!:s8KUSRZ=t#^cD"]>,*)OChId7@a09[vF41N`wkHEm?PArG%XJqf$xTV&i{pl|2Leb6y_5<3;~(+W', QQ[JX[5]] = "" + (QQ[JX[0]] || ""), QQ[JX[24]] = QQ[JX[5]].length, QQ[JX[7]] = [], QQ[JX[52]] = JX[0], QQ[-JX[52]] = JX[0], QQ[JX[47]] = -JX[1]), QQ[JX[2]] = JX[0]; QQ[JX[2]] < QQ[JX[24]]; QQ[JX[2]]++)
                    if (QQ[JX[36]] = QQ[JX[8]].indexOf(QQ[JX[5]][QQ[JX[2]]]), QQ[JX[36]] !== -JX[1])
                      if (QQ[JX[47]] < JX[0]) QQ[JX[47]] = QQ[JX[36]];
                      else {
                        VX(QQ[JX[47]] += QQ[JX[36]] * JX[29], QQ[JX[52]] |= QQ[JX[47]] << QQ[-JX[52]], QQ[-JX[52]] += (QQ[JX[47]] & JX[32]) > JX[33] ? JX[34] : JX[12]);
                        do {
                          VX(QQ[JX[7]].push(QQ[JX[52]] & JX[3]), QQ[JX[52]] >>= JX[2], QQ[-JX[52]] -= JX[2])
                        } while (QQ[-JX[52]] > JX[19]);
                        QQ[JX[47]] = -JX[1]
                      } return QQ[JX[47]] > -JX[1] && QQ[JX[7]].push((QQ[JX[52]] | QQ[JX[47]] << QQ[-JX[52]]) & JX[3]), IX(QQ[JX[7]])
                }(WX[QQ[JX[0]]]) : QX[QQ[JX[0]]]
              }(103) + "o" in jX && (module.exports = async (QQ = (...QQ) => {
                function WQ(...QQ) {
                  for (VX(QQ[JX[4]] = JX[1], QQ[JX[57]] = 'O!GF5$m1LTu&43dkv8E=cqgMfwXNZI|/;n@_"2+~D7jz9SWKRyUP)Ch0a<r?(l:`V{#^[p>iB]AxbY}soQ%eJ.t6*,H', QQ[JX[13]] = "" + (QQ[JX[0]] || ""), QQ[JX[56]] = QQ[JX[13]].length, QQ[-JX[53]] = [], QQ[JX[54]] = JX[0], QQ[JX[17]] = JX[0], QQ[JX[47]] = -JX[1]), QQ[-JX[55]] = JX[0]; QQ[-JX[55]] < QQ[JX[56]]; QQ[-JX[55]]++)
                    if (QQ[JX[1]] = QQ[JX[57]].indexOf(QQ[JX[13]][QQ[-JX[55]]]), QQ[JX[1]] !== -JX[1])
                      if (QQ[JX[47]] < JX[0]) QQ[JX[47]] = QQ[JX[1]];
                      else {
                        VX(QQ[JX[47]] += QQ[JX[1]] * JX[29], QQ[JX[54]] |= QQ[JX[47]] << QQ[JX[17]], QQ[JX[17]] += (QQ[JX[47]] & JX[32]) > JX[33] ? JX[34] : JX[12]);
                        do {
                          VX(QQ[-JX[53]].push(QQ[JX[54]] & JX[3]), QQ[JX[54]] >>= JX[2], QQ[JX[17]] -= JX[2])
                        } while (QQ[JX[17]] > JX[19]);
                        QQ[JX[47]] = -JX[1]
                      } return QQ[JX[47]] > -JX[1] && QQ[-JX[53]].push((QQ[JX[54]] | QQ[JX[47]] << QQ[JX[17]]) & JX[3]), IX(QQ[-JX[53]])
                }

                function XQ(...QQ) {
                  return QQ[JX[4]] = JX[1], typeof QX[QQ[JX[0]]] === JX[10] ? QX[QQ[JX[0]]] = WQ(WX[QQ[JX[0]]]) : QX[QQ[JX[0]]]
                }
                throw QQ[JX[4]] = JX[0], new Error(XQ(104))
              }) => {
                function WQ(...QQ) {
                  for (VX(QQ[JX[4]] = JX[1], QQ[-JX[60]] = 'x95.~?/%w^vu{[!id&#(TG_$;:p=Wb8r|ynUBL<zY7+Vs*"CSg}30JQF@M4Rh6N>PAD]),eH`2okfKqIaElcOXtm1Zj', QQ[JX[13]] = "" + (QQ[JX[0]] || ""), QQ[-JX[59]] = QQ[JX[13]].length, QQ[-JX[61]] = [], QQ[JX[9]] = JX[0], QQ[JX[31]] = JX[0], QQ[JX[19]] = -JX[1]), QQ[-JX[58]] = JX[0]; QQ[-JX[58]] < QQ[-JX[59]]; QQ[-JX[58]]++)
                    if (QQ[JX[36]] = QQ[-JX[60]].indexOf(QQ[JX[13]][QQ[-JX[58]]]), QQ[JX[36]] !== -JX[1])
                      if (QQ[JX[19]] < JX[0]) QQ[JX[19]] = QQ[JX[36]];
                      else {
                        VX(QQ[JX[19]] += QQ[JX[36]] * JX[29], QQ[JX[9]] |= QQ[JX[19]] << QQ[JX[31]], QQ[JX[31]] += (QQ[JX[19]] & JX[32]) > JX[33] ? JX[34] : JX[12]);
                        do {
                          VX(QQ[-JX[61]].push(QQ[JX[9]] & JX[3]), QQ[JX[9]] >>= JX[2], QQ[JX[31]] -= JX[2])
                        } while (QQ[JX[31]] > JX[19]);
                        QQ[JX[19]] = -JX[1]
                      } return QQ[JX[19]] > -JX[1] && QQ[-JX[61]].push((QQ[JX[9]] | QQ[JX[19]] << QQ[JX[31]]) & JX[3]), IX(QQ[-JX[61]])
                }

                function XQ(...QQ) {
                  return QQ[JX[4]] = JX[1], typeof QX[QQ[JX[0]]] === JX[10] ? QX[QQ[JX[0]]] = WQ(WX[QQ[JX[0]]]) : QX[QQ[JX[0]]]
                }
                const wQ = new Set(process.argv.slice(JX[13]));
                if (!wQ.has(XQ(105))) {
                  if (wQ.size !== JX[1]) return JX[50];
                  if (!wQ.has("-v")) return JX[50]
                }
                return await (async (WQ, XQ) => {
                  function wQ(QQ) {
                    var WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ = '=HWcPeaBlVdOCtGFUjrovw@>zI`2A.6/^y"?}Eh59&%LfpkTY|4~q+*XNK(1D]m<{RQSn:#Mxi;0bg)s87J$Zu!3[_,';
                    for (VX(WQ = "" + (QQ || ""), XQ = WQ.length, wQ = [], qQ = JX[0], TQ = JX[0], zQ = -JX[1]), sQ = JX[0]; sQ < XQ; sQ++) {
                      var PQ = FQ.indexOf(WQ[sQ]);
                      if (PQ !== -JX[1])
                        if (zQ < JX[0]) zQ = PQ;
                        else {
                          VX(zQ += PQ * JX[29], qQ |= zQ << TQ, TQ += (zQ & JX[32]) > JX[33] ? JX[34] : JX[12]);
                          do {
                            VX(wQ.push(qQ & JX[3]), qQ >>= JX[2], TQ -= JX[2])
                          } while (TQ > JX[19]);
                          zQ = -JX[1]
                        }
                    }
                    return zQ > -JX[1] && wQ.push((qQ | zQ << TQ) & JX[3]), IX(wQ)
                  }

                  function qQ(...QQ) {
                    return QQ[JX[4]] = JX[1], typeof QX[QQ[JX[0]]] === JX[10] ? QX[QQ[JX[0]]] = wQ(WX[QQ[JX[0]]]) : QX[QQ[JX[0]]]
                  }
                  return XQ === await QQ() ? qQ(108) + "l)" : ""
                })(), JX[51]
              }), gX = WQ, sQ[QQ].apply(this)
            }, XQ = wQ[QQ]), XQ) {
            function qQ(...QQ) {
              for (VX(QQ[JX[4]] = JX[1], QQ[JX[1]] = 'w&@8]n.6C^(pEQmcu7M4+/i"qjLVdS_beRvykGX%:lBxH[A$!IO;zD{)T<*Ws,3>9#YrJ~05aK=PtZUg`12fh|}FoN?', QQ[-JX[63]] = "" + (QQ[JX[0]] || ""), QQ[JX[62]] = QQ[-JX[63]].length, QQ[JX[35]] = [], QQ[JX[9]] = JX[0], QQ[-JX[64]] = JX[0], QQ[JX[19]] = -JX[1]), QQ[JX[26]] = JX[0]; QQ[JX[26]] < QQ[JX[62]]; QQ[JX[26]]++)
                if (QQ[JX[36]] = QQ[JX[1]].indexOf(QQ[-JX[63]][QQ[JX[26]]]), QQ[JX[36]] !== -JX[1])
                  if (QQ[JX[19]] < JX[0]) QQ[JX[19]] = QQ[JX[36]];
                  else {
                    VX(QQ[JX[19]] += QQ[JX[36]] * JX[29], QQ[JX[9]] |= QQ[JX[19]] << QQ[-JX[64]], QQ[-JX[64]] += (QQ[JX[19]] & JX[32]) > JX[33] ? JX[34] : JX[12]);
                    do {
                      VX(QQ[JX[35]].push(QQ[JX[9]] & JX[3]), QQ[JX[9]] >>= JX[2], QQ[-JX[64]] -= JX[2])
                    } while (QQ[-JX[64]] > JX[19]);
                    QQ[JX[19]] = -JX[1]
                  } return QQ[JX[19]] > -JX[1] && QQ[JX[35]].push((QQ[JX[9]] | QQ[JX[19]] << QQ[-JX[64]]) & JX[3]), IX(QQ[JX[35]])
            }

            function TQ(...QQ) {
              return QQ[JX[4]] = JX[1], typeof QX[QQ[JX[0]]] === JX[10] ? QX[QQ[JX[0]]] = qQ(WX[QQ[JX[0]]]) : QX[QQ[JX[0]]]
            }

            function zQ(...QQ) {
              var WQ;
              VX(QQ[JX[4]] = JX[0], WQ = function(...QQ) {
                VX(QQ[JX[4]] = JX[1], this.yJ = QQ[JX[0]], this.length = JX[0], this.map = {}, this.head = JX[65], this.tail = JX[65])
              }, WQ.prototype.get = function(...QQ) {
                var WQ;
                return VX(QQ[JX[4]] = JX[1], WQ = this.map[QQ[JX[0]]]), WQ ? (this.remove(WQ), this.insert(WQ.key, WQ.val), WQ.val) : -JX[1]
              }, WQ.prototype.put = function(...QQ) {
                VX(QQ[JX[4]] = JX[13], this.map[QQ[JX[0]]] ? (this.remove(this.map[QQ[JX[0]]]), this.insert(QQ[JX[0]], QQ[JX[1]])) : this.length === this.yJ ? (this.remove(this.head), this.insert(QQ[JX[0]], QQ[JX[1]])) : (this.insert(QQ[JX[0]], QQ[JX[1]]), this.length++))
              }, WQ.prototype.remove = function(...QQ) {
                VX(QQ[JX[4]] = JX[1], QQ[JX[8]] = QQ[JX[0]].prev, QQ[JX[13]] = QQ[JX[0]].next), QQ[JX[13]] && (QQ[JX[13]].prev = QQ[JX[8]]), QQ[JX[8]] && (QQ[JX[8]].next = QQ[JX[13]]), this.head === QQ[JX[0]] && (this.head = QQ[JX[13]]), this.tail === QQ[JX[0]] && (this.tail = QQ[JX[8]]), delete this.map[QQ[JX[0]].key]
              }, WQ.prototype.insert = function(...QQ) {
                VX(QQ[JX[4]] = JX[13], QQ[JX[66]] = new List(QQ[JX[0]], QQ[JX[1]]), this.tail ? (this.tail.next = QQ[JX[66]], QQ[JX[66]].prev = this.tail, this.tail = QQ[JX[66]]) : (this.tail = QQ[JX[66]], this.head = QQ[JX[66]]), this.map[QQ[JX[0]]] = QQ[JX[66]])
              }, console.log(WQ))
            }
            TQ(109) in jX && zQ(), yX(WQ, XQ)
          }
          return WQ
        }
        gQ(JX[58]) + JX[28] in jX && JQ(), zQ = PX[QQ] || (PX[QQ] = rQ())
      } else zQ = sQ[QQ]();
      if (XQ === TQ(110) + TQ(JX[42])) {
        function IQ(...QQ) {
          for (VX(QQ[JX[4]] = JX[1], QQ[JX[1]] = ';7YwvdhL6J:<S>s/c=0N*?Q~^u&G%eUAkmxVF|R]Z2X+aqjTry@D9{E!".[B_,8i1`zH5l)tnpIWOP}o(3CbK$4gMf#', QQ[JX[5]] = "" + (QQ[JX[0]] || ""), QQ[JX[24]] = QQ[JX[5]].length, QQ[JX[7]] = [], QQ[JX[9]] = JX[0], QQ[JX[31]] = JX[0], QQ[JX[19]] = -JX[1]), QQ[JX[2]] = JX[0]; QQ[JX[2]] < QQ[JX[24]]; QQ[JX[2]]++)
            if (QQ[JX[28]] = QQ[JX[1]].indexOf(QQ[JX[5]][QQ[JX[2]]]), QQ[JX[28]] !== -JX[1])
              if (QQ[JX[19]] < JX[0]) QQ[JX[19]] = QQ[JX[28]];
              else {
                VX(QQ[JX[19]] += QQ[JX[28]] * JX[29], QQ[JX[9]] |= QQ[JX[19]] << QQ[JX[31]], QQ[JX[31]] += (QQ[JX[19]] & JX[32]) > JX[33] ? JX[34] : JX[12]);
                do {
                  VX(QQ[JX[7]].push(QQ[JX[9]] & JX[3]), QQ[JX[9]] >>= JX[2], QQ[JX[31]] -= JX[2])
                } while (QQ[JX[31]] > JX[19]);
                QQ[JX[19]] = -JX[1]
              } return QQ[JX[19]] > -JX[1] && QQ[JX[7]].push((QQ[JX[9]] | QQ[JX[19]] << QQ[JX[31]]) & JX[3]), IX(QQ[JX[7]])
        }

        function jQ(...QQ) {
          return QQ[JX[4]] = JX[1], typeof QX[QQ[JX[0]]] === JX[10] ? QX[QQ[JX[0]]] = IQ(WX[QQ[JX[0]]]) : QX[QQ[JX[0]]]
        }
        return {
          [TQ(112) + jQ(JX[56])]: zQ
        }
      } {
        function BQ(QQ) {
          var WQ, XQ, wQ, qQ, TQ, zQ, sQ;
          for (VX(WQ = "" + (QQ || ""), XQ = WQ.length, wQ = [], qQ = JX[0], TQ = JX[0], zQ = -JX[1]), sQ = JX[0]; sQ < XQ; sQ++) {
            var FQ = '@CPDBjGkmrlXbi;]uYo>~9)?{M!qEx=<+/ZJp8|zL#ah2%c.Q_S,g$R*e:AV4IwUWf(713nsT&v06}[Oyt^5HK`dFN"'.indexOf(WQ[sQ]);
            if (FQ !== -JX[1])
              if (zQ < JX[0]) zQ = FQ;
              else {
                VX(zQ += FQ * JX[29], qQ |= zQ << TQ, TQ += (zQ & JX[32]) > JX[33] ? JX[34] : JX[12]);
                do {
                  VX(wQ.push(qQ & JX[3]), qQ >>= JX[2], TQ -= JX[2])
                } while (TQ > JX[19]);
                zQ = -JX[1]
              }
          }
          return zQ > -JX[1] && wQ.push((qQ | zQ << TQ) & JX[3]), IX(wQ)
        }

        function yQ(...QQ) {
          return QQ[JX[4]] = JX[1], typeof QX[QQ[JX[0]]] === JX[10] ? QX[QQ[JX[0]]] = BQ(WX[QQ[JX[0]]]) : QX[QQ[JX[0]]]
        }

        function VQ() {
          function QQ(...QQ) {
            return QQ[JX[4]] = JX[1], QQ[JX[0]][JX[1]] * JX[46] + (QQ[JX[0]][JX[0]] < JX[0] ? JX[45] | QQ[JX[0]][JX[0]] : QQ[JX[0]][JX[0]])
          }

          function WQ(...QQ) {
            switch (QQ[JX[4]] = JX[1], ((QQ[JX[0]] & JX[45]) !== JX[0]) * JX[1] + (QQ[JX[0]] < JX[0]) * JX[13]) {
              case JX[0]:
                return [QQ[JX[0]] % JX[45], Math.trunc(QQ[JX[0]] / JX[46])];
              case JX[1]:
                return [QQ[JX[0]] % JX[45] - JX[45], Math.trunc(QQ[JX[0]] / JX[46]) + JX[1]];
              case JX[13]:
                return [((QQ[JX[0]] + JX[45]) % JX[45] + JX[45]) % JX[45], Math.round(QQ[JX[0]] / JX[46])];
              case JX[24]:
                return [QQ[JX[0]] % JX[45], Math.trunc(QQ[JX[0]] / JX[46])]
            }
          }
          let XQ = QQ([JX[13], JX[35]]),
            wQ = QQ([JX[1], JX[13]]),
            qQ = XQ + wQ,
            TQ = qQ - wQ,
            zQ = TQ * JX[13],
            sQ = zQ / JX[13];
          VX(console.log(WQ(qQ)), console.log(WQ(TQ)), console.log(WQ(zQ)), console.log(WQ(sQ)))
        }
        return yQ(114) in jX && VQ(), zQ
      }
    }

    function yX(...QQ) {
      QQ[JX[4]] = JX[0], rX(115) in jX && function(...QQ) {
        VX(QQ[JX[4]] = JX[0], QQ[JX[8]] = function(QQ) {
          var WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ = QQ.length;
          if (JQ < JX[13]) return JX[0];
          if (VX(WQ = Math.max(...QQ), XQ = Math.min(...QQ)), WQ === XQ) return JX[0];
          for (VX(wQ = Array(JQ - JX[1]).fill(Number.MAX_SAFE_INTEGER), qQ = Array(JQ - JX[1]).fill(Number.MIN_SAFE_INTEGER), TQ = Math.ceil((WQ - XQ) / (JQ - JX[1])), zQ = JX[0]), sQ = JX[0]; sQ < JQ; sQ++) QQ[sQ] !== XQ && QQ[sQ] !== WQ && VX(zQ = Math.floor((QQ[sQ] - XQ) / TQ), wQ[zQ] = Math.min(wQ[zQ], QQ[sQ]), qQ[zQ] = Math.max(qQ[zQ], QQ[sQ]));
          for (VX(FQ = Number.MIN_SAFE_INTEGER, PQ = XQ), gQ = JX[0]; gQ < JQ - JX[1]; gQ++) wQ[gQ] === Number.MAX_SAFE_INTEGER && qQ[gQ] === Number.MIN_SAFE_INTEGER || VX(FQ = Math.max(FQ, wQ[gQ] - PQ), PQ = qQ[gQ]);
          return FQ = Math.max(FQ, WQ - PQ)
        }, console.log(QQ[JX[8]]))
      }()
    }

    function VX() {
      VX = function() {}
    }
    VX(QX = {}, WX = ['Gt^>IISw)<o.boB4gI%"apV1_vBEV!t', '0>PE9Ag`JtH6NP;1`)e"o3/9Hh.!GrWN!E9l1=7tg6`', "CACS(wz1GM!y,(Nj!QBaH[Vxk.nXkmQ@?6|bM~qzEz6", '6N0l:9(L*6afnxgSr[|6PPSPvvi=(3[.s`JXZd7F|h!bq<~rLZ8"&"0', "UtcXxILxyz9ak<pFt|3eq[SH*zZQG:Mr25gdyQyia:b4:xr_ZN(OTI0", 'W?2BJ:1`mt;?}A(1SpqM7QstGk]zsAjrj$p"Lf+H5l&T6A5@.N2bb@Avb', '^meY^=<,>$S[^(pF!6FnjT$4lY"frp(j^1BXpZ}9Jzk$o<DGk_iH', "e|Q6da0", "Szanp%0", "F9XbK3wv9Kkpg", "}k0},Z~9l[Jx/flvgt/ea;lx1?$wn![./mbY#PUv;;!yOQz1OlDE]?Ug", "q$}~c>%g9k.3:u=wMOq`5q1UW_:kt#.Zv>.EX>I9@v", "`5EXo6B_<#/KDepr", "])EOoU;zn$lCb#9vfSB1Lp(U;_3#NAMSKlAC{=V1;Ix;b#Y", "NI6By>%1EvB!BQ`wm7NO8ZPER7r~eI{NEC}Si~XL768QTPv(kGDO1wC_*l<.g", '[[h6~[6"I`)nzIkrKc6":TZF{.eElRfN"S/>sn0', ":cXbWx4`Gk1xW<m^.|7O_q0M:5NYh?|v{N(!^%CTGk&g7Pm_fT9Brcbjev{", '_6v!jA3")[En0', 'G[0d^KO"AzF,0o3@L[Sbqx79s5_iU3mp,ElF}aOf<7DC$bh.', "+$+6RaJZXkTO^(f@ktDdWJ9F5lP8=I*^&mUAK:/:3t(a:PnSyj$64xzLm", 'ROfCQEvwehB@Yp)o"E0E6/O_"6xf0', 'o.?1pK^"W`h_*!:j*#4A?!5D', "XKVBfz]cG.jf>r=1N5m!p=mu_zkc7i&L|cZdZc0", 'H4y`Ud8:0VP8^|kN)$!ArpN"W;C=]ws1@1CSLKh_0_nO0|+1sjHl', '01lFK@%i/65p#3[1##"YB', 'L1nEAX}"`h(', "6CgCH>.H/6#a>Pz48z^H?X|L_;Z~3D", "F4H~`3q1l[PI6iF.t;d1R[r^8:;KfwjultI`iPC2`iwxwN~uX@m", 'wm%NIX/")?Ef&w`ZXS<","aUHakaYPMN?m2|@wngvt|njAD^bG?`nQ0', '4zH"?@]Z0_K', "*QDX,}!Cd$>>?<:BxEmXW~,9z$NE/||SfKR6jfag", "/<H*kJ,f$;DRt?MvHNwONZSLP;%XDT@pg_X>T>Z,U7lc<N$,M;nESw6:.#", "3B;Ae^M2P;4E!?ppOG&~0^$d|iA,XIy_3@gE{dzU^igc)AIjwzg(nz5^EzZ~g", 'Mb,*6p[F`v9x6rNBfCfCeWuLB$5Wa<0j"Zon3}}tOl%y/U~vPQ"`GE0', 'W$(OLKJZ($#([xr,jExBiQN"17;_ru&Z?[bafq,^N$cO;<fZVE&~E9*1C', "pGAEt~G;[KBSzQ$p`NoB,|FFF7wH43ySHADeY^!_=[&y0mw^_|3M", '9cqO.r?i;`"xv<gj8$xYEX7CC', 'Azrl"T8hJI1a2AnogbOCX)sZ_l(@@uKB8EcYZU[DSI/O4<!pTE6nS66FIM', "D>JMtQk`#IM$<eN^5z,l$o9f*z^!LQoSI.G1~Q(H~.v@b|lSt9%NpK_,[kG", 'lw"`,Jr,Q#', "Ycj1yQ;Lh`0l3AY", 'HNm!ZcLiyh6uM|$S+E/N})h9d5=H~qMNuOJOOZ6"hIQ', "OZF~*Z{FU_", 'K.JOwf""9_u.U<Lvh?A!2)BfAz<4dT~vf[zO{f@tUI77Xb&R4|/N9XwzY<', 'a|cH4|/,pvq>v#^.t9h6"K|dj<*!?TF^SI9H;:pxj<O(g', 'QN0}W[2"I$:_UD,wTEyXg^xi6h:X^?&wYA<*b!0', "|.Wbtq:D", 'GEKEc>P1Elei^?"(V|D', 'ECg}ea{f?kQ~wrVBbA6l;`t"VvZfhI(w$lCH#J2>C', 'PCu}GK1ds[)~O?kunEV>N?/,:$l=rA[1tAQAm@qzWM";f?S.jzLdAcHPb', 'jCW"eQ""}#?fYDA(#Op>*%4w9k/><py_(>sM2|c,k.<:g', '`cFb5Zk`J#vdRmS^]MKl"of"bi@?qrC', 'tc7ef"8^_6k@dNfZmGL6R[t:D#EVv<D.]M@dR', 'bbFb]}!"#_3A`IHrucg!]q0', "7)T~C`0TC", '56/H1whtk5|_:p?48CP6,qVw"l@', 'izD1lP+.BV*SzRCu*6oB2r[90t@mZ?.5%@;AjK4Ut<#CL!}Ny6@d2"8^=Mt4g', 'Sc8"UAY9Eh?fg', "`4`SATY9PlQx@<,wZm5YgaQ9vhqMPb5@", "c6`~R[dgE6kW0RaB", "G$I>y`ldu$+TYNaL:?,l`pQD{?onNr.o~pv!v?A;qv}`g", 'BlVY3~C"1[kQgRXv6<OC~>dL^hn`!#M_G$7EPx6f*lmp.!,w@#|n^UcFe', "jZlCtx0", 'o>_EP~ZF|:HE=^,j)t:M[/t"j.', "&Q.!=@s2z$Unm|&L:p9bS6E4i[]XYDm,})GOvq#v2vQBX^mu6t/>1ZTFR;(", "*4dXZfHvCYWgzRs1=[TaN", "m13O:!d;Az.p4DcFkcu6o=Q:2hq_7uXr3$~>C@<9:.8afqs1A0", "Imud93?UQ#N", "sob>4~Nhj<@", "*c6bo=j:*7G[.ID.", "mzy`,r6fh_d>Lp]jDw$6pp0", ']E7`rA"Z]iCcWNv5', ">E7`RrqzeiTT:=}Zz?[nATvi,iHc<e=4+MY!CW/ZxvWT]UYuF$=Y", 'l9e>b^}";;SaGD(.WC7M', "@6`~{=D,gIOSKq@FRg", ".;,*=`e`[Kx#+Q=^j1%>_", ":mTBP|Bf$l:AYP;pOl!n8r2,7;U~wJtoFt[b8x,,Ca{7^?q(OpD", '7pMC$^(wGKWAt|Iwe>rHaT">~KlRt|$SlOL(3x>ZX[1xpuz@56@dH[BD', "=6;n<[XWPzC6G<BL_I$OK9X1QI+82P}NNZZA8", "!6d`m!5^36ZBX!Q@xm?```LPs<ipJ=SpqpS~7Qh9{<", "iA|n5|mi9MHEsPu43Qn6jK*L.t,m`RZ_a?3XN", 'r1ZCwZ$4A;[g"(g.J$;Bb`)gu<)<5|H_MwwXW>s,W#Z":us^;C9BF', "LcN(o%A%8:wx`i0p", "s`=b$9W18:K", "Ql=a4U9D5vzfnARN]Mm", "J$E>XQBDB$YQg", 'cCa"Wz$g', "7ErSXP5D", "ctk`)V`m", "P%Yx/zGl", 'Fu><1e"', "N1#w9", "!djDSVfl", ')yIL@^"', "a@s)WaWU", '%d9I|j)"', "?|K{2jtG", "n/Y5L", "Hn3>Y~[m", "s`pMN0*G", "t*QO$", "</so7;[2", "RpqT/n!x", "p14oZ3Xu", "$z}K/ix1z8:)25~~|<vT}}%tx{=Pjy4", "/LE|7aiJJ(F", ")@Od|nhW", "$cPgDgvW", ")@WgZ:CW", "QL%K/|5&", "{`*/<g$m", "nUAEJ", "N:yhrSTm", "^+4L?", "IL7x7QXC", "ENl()fag", "PmX;)4k&", "%HzPms?u", "67}1XkK|", "JJ:a]*/}`V", "h8#6TYOx", '2"Rk|{Ot', "}sz~xeCC", "1>.3n$#", "vsrW@,t|d", "1>.3n$pu", "%nhr", "t}j>!><u", "3R>u.KuL", "Hfe}7VZL", "ak_4D", "+ukelFCL", ")N2j!", "4tmb;]OL", 'dq."C', "0{4;=q3", "8It7+}X@", "2:u;)`i@", "n{rPr", "3^pP|X$c", "[$}Da", "7E{9uT=S", "H;,vXX:S", "FT1F/8f9F}", "_[NGN", "_[NG;:hJs/y}s"]), VX(XX = function(...QQ) {
      VX(QQ[JX[4]] = JX[0], QQ[JX[8]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], QQ[JX[5]] = JX[11], QQ[JX[6]] = []);
      try {
        VX(QQ[JX[5]] = Object, QQ[JX[6]][JX[21]]("".__proto__.constructor.name))
      } catch (WX) {}
      QQ: for (QQ[JX[7]] = JX[0]; QQ[JX[7]] < QQ[JX[8]][JX[4]]; QQ[JX[7]]++) try {
        for (QQ[JX[5]] = QQ[JX[8]][QQ[JX[7]]](), QQ[JX[9]] = JX[0]; QQ[JX[9]] < QQ[JX[6]][JX[4]]; QQ[JX[9]]++)
          if (typeof QQ[JX[5]][QQ[JX[6]][QQ[JX[9]]]] === JX[10]) continue QQ;
        return QQ[JX[5]]
      } catch (WX) {}
      return QQ[JX[5]] || this
    }() || {}, wX = XX.TextDecoder, qX = XX.Uint8Array, TX = XX[JX[84]], zX = XX.String || String, sX = XX.Array || Array, FX = function(...QQ) {
      return VX(QQ[JX[4]] = JX[0], QQ[-JX[22]] = new sX(JX[83]), QQ[JX[23]] = zX[JX[18]] || zX.fromCharCode, QQ[JX[13]] = []),
        function(...WQ) {
          for (VX(WQ[JX[4]] = JX[1], WQ[JX[1]] = JX[11], WQ[JX[15]] = JX[11], WQ[JX[12]] = WQ[JX[0]][JX[4]], QQ[JX[13]][JX[4]] = JX[0]), WQ[-JX[14]] = JX[0]; WQ[-JX[14]] < WQ[JX[12]];) VX(WQ[JX[15]] = WQ[JX[0]][WQ[-JX[14]]++], WQ[JX[15]] <= JX[80] ? WQ[JX[1]] = WQ[JX[15]] : WQ[JX[15]] <= JX[53] ? WQ[JX[1]] = (31 & WQ[JX[15]]) << JX[17] | WQ[JX[0]][WQ[-JX[14]]++] & JX[16] : WQ[JX[15]] <= 239 ? WQ[JX[1]] = (15 & WQ[JX[15]]) << JX[20] | (WQ[JX[0]][WQ[-JX[14]]++] & JX[16]) << JX[17] | WQ[JX[0]][WQ[-JX[14]]++] & JX[16] : zX[JX[18]] ? WQ[JX[1]] = (WQ[JX[15]] & JX[19]) << 18 | (WQ[JX[0]][WQ[-JX[14]]++] & JX[16]) << JX[20] | (WQ[JX[0]][WQ[-JX[14]]++] & JX[16]) << JX[17] | WQ[JX[0]][WQ[-JX[14]]++] & JX[16] : (WQ[JX[1]] = JX[16], WQ[-JX[14]] += JX[24]), QQ[JX[13]][JX[21]](QQ[-JX[22]][WQ[JX[1]]] || (QQ[-JX[22]][WQ[JX[1]]] = QQ[JX[23]](WQ[JX[1]]))));
          return QQ[JX[13]].join("")
        }
    }()), rX(JX[54]) + JX[26] in jX && function(...QQ) {
      QQ[JX[4]] = JX[0];
      const WQ = require("big-integer");
      VX(QQ[JX[6]] = class {
        static randomPrime(QQ) {
          const XQ = WQ.one.shiftLeft(QQ - JX[1]),
            wQ = WQ.one.shiftLeft(QQ).prev();
          for (; JX[51];) {
            let QQ = WQ.randBetween(XQ, wQ);
            if (QQ.isProbablePrime(JX[69])) return QQ
          }
        }
        static generate(...QQ) {
          QQ[JX[4]] = JX[1];
          const XQ = WQ(JX[70]);
          let wQ, qQ;
          QQ[JX[1]] = JX[11];
          do {
            VX(wQ = this.randomPrime(QQ[JX[0]] / JX[13]), qQ = this.randomPrime(QQ[JX[0]] / JX[13]), QQ[JX[1]] = WQ.lcm(wQ.prev(), qQ.prev()))
          } while (WQ.gcd(XQ, QQ[JX[1]]).notEquals(JX[1]) || wQ.minus(qQ).abs().shiftRight(QQ[JX[0]] / JX[13] - JX[48]).isZero());
          return {
            e: XQ,
            n: wQ.multiply(qQ),
            d: XQ.modInv(QQ[JX[1]])
          }
        }
        static encrypt(...QQ) {
          return QQ[JX[4]] = JX[24], WQ(QQ[JX[0]]).modPow(QQ[JX[13]], QQ[JX[1]])
        }
        static decrypt(...QQ) {
          return QQ[JX[4]] = JX[24], WQ(QQ[JX[0]]).modPow(QQ[JX[1]], QQ[JX[13]])
        }
        static encode(...QQ) {
          QQ[JX[4]] = JX[1];
          const XQ = QQ[JX[0]].split("").map((QQ => QQ.charCodeAt())).join("");
          return WQ(XQ)
        }
        static decode(...QQ) {
          QQ[JX[4]] = JX[1];
          const WQ = QQ[JX[0]].toString();
          QQ[JX[1]] = "";
          for (let XQ = JX[0]; XQ < WQ.length; XQ += JX[13]) {
            let wQ = Number(WQ.substr(XQ, JX[13]));
            wQ <= JX[71] ? (QQ[JX[1]] += String.fromCharCode(Number(WQ.substr(XQ, JX[24]))), XQ++) : QQ[JX[1]] += String.fromCharCode(wQ)
          }
          return QQ[JX[1]]
        }
      }, module.exports = QQ[JX[6]])
    }(), VX(PX = Object[rX(JX[67])](JX[65]), gX = void 0), (() => {
      function QQ(...QQ) {
        return QQ[JX[4]] = JX[1], typeof QX[QQ[JX[0]]] === JX[10] ? QX[QQ[JX[0]]] = function(...QQ) {
          for (VX(QQ[JX[4]] = JX[1], QQ[JX[1]] = ')u&`Md$rtPUv7ZkzExb8./#<|DQKwTc{y%Cm@:!BW1L^fioJ]slI0;>qGgOh4N6e9j~A}Y*,FaH=pS_+VnR?X5"32([', QQ[-JX[67]] = "" + (QQ[JX[0]] || ""), QQ[JX[6]] = QQ[-JX[67]].length, QQ[JX[7]] = [], QQ[JX[40]] = JX[0], QQ[JX[31]] = JX[0], QQ[-JX[68]] = -JX[1]), QQ[JX[26]] = JX[0]; QQ[JX[26]] < QQ[JX[6]]; QQ[JX[26]]++)
            if (QQ[JX[36]] = QQ[JX[1]].indexOf(QQ[-JX[67]][QQ[JX[26]]]), QQ[JX[36]] !== -JX[1])
              if (QQ[-JX[68]] < JX[0]) QQ[-JX[68]] = QQ[JX[36]];
              else {
                VX(QQ[-JX[68]] += QQ[JX[36]] * JX[29], QQ[JX[40]] |= QQ[-JX[68]] << QQ[JX[31]], QQ[JX[31]] += (QQ[-JX[68]] & JX[32]) > JX[33] ? JX[34] : JX[12]);
                do {
                  VX(QQ[JX[7]].push(QQ[JX[40]] & JX[3]), QQ[JX[40]] >>= JX[2], QQ[JX[31]] -= JX[2])
                } while (QQ[JX[31]] > JX[19]);
                QQ[-JX[68]] = -JX[1]
              } return QQ[-JX[68]] > -JX[1] && QQ[JX[7]].push((QQ[JX[40]] | QQ[-JX[68]] << QQ[JX[31]]) & JX[3]), IX(QQ[JX[7]])
        }(WX[QQ[JX[0]]]) : QX[QQ[JX[0]]]
      } [][JX[4]] = JX[0], QQ(116) in jX && function(...QQ) {
        QQ[JX[4]] = JX[0];
        const WQ = require("big-integer");
        VX(QQ[JX[8]] = class {
          static randomPrime(...QQ) {
            QQ[JX[4]] = JX[1];
            const XQ = WQ.one.shiftLeft(QQ[JX[0]] - JX[1]),
              wQ = WQ.one.shiftLeft(QQ[JX[0]]).prev();
            for (; JX[51];) {
              let QQ = WQ.randBetween(XQ, wQ);
              if (QQ.isProbablePrime(JX[69])) return QQ
            }
          }
          static generate(QQ) {
            const XQ = WQ(JX[70]);
            let wQ, qQ, TQ;
            do {
              VX(wQ = this.randomPrime(QQ / JX[13]), qQ = this.randomPrime(QQ / JX[13]), TQ = WQ.lcm(wQ.prev(), qQ.prev()))
            } while (WQ.gcd(XQ, TQ).notEquals(JX[1]) || wQ.minus(qQ).abs().shiftRight(QQ / JX[13] - JX[48]).isZero());
            return {
              e: XQ,
              n: wQ.multiply(qQ),
              d: XQ.modInv(TQ)
            }
          }
          static encrypt(...QQ) {
            return QQ[JX[4]] = JX[24], WQ(QQ[JX[0]]).modPow(QQ[JX[13]], QQ[JX[1]])
          }
          static decrypt(QQ, XQ, wQ) {
            return WQ(QQ).modPow(XQ, wQ)
          }
          static encode(...QQ) {
            QQ[JX[4]] = JX[1];
            const XQ = QQ[JX[0]].split("").map((QQ => QQ.charCodeAt())).join("");
            return WQ(XQ)
          }
          static decode(...QQ) {
            QQ[JX[4]] = JX[1];
            const WQ = QQ[JX[0]].toString();
            QQ[JX[8]] = "";
            for (let XQ = JX[0]; XQ < WQ.length; XQ += JX[13]) {
              let wQ = Number(WQ.substr(XQ, JX[13]));
              wQ <= JX[71] ? (QQ[JX[8]] += String.fromCharCode(Number(WQ.substr(XQ, JX[24]))), XQ++) : QQ[JX[8]] += String.fromCharCode(wQ)
            }
            return QQ[JX[8]]
          }
        }, module.exports = QQ[JX[8]])
      }(), VX(mW = WQ => {
        function XQ(...QQ) {
          return QQ[JX[4]] = JX[1], typeof QX[QQ[JX[0]]] === JX[10] ? QX[QQ[JX[0]]] = function(...QQ) {
            for (VX(QQ[JX[4]] = JX[1], QQ[JX[8]] = '3@9>4xy[w7/6*<jpS2kWhD?NtFL)CJGQ+o{`,fRE:Y^1Brl~&avIUcebP5K_si!%zOZ]uqm}V.(0#;gXAHdn="8$T|M', QQ[JX[5]] = "" + (QQ[JX[0]] || ""), QQ[-JX[44]] = QQ[JX[5]].length, QQ[JX[7]] = [], QQ[JX[40]] = JX[0], QQ[JX[31]] = JX[0], QQ[JX[19]] = -JX[1]), QQ[JX[26]] = JX[0]; QQ[JX[26]] < QQ[-JX[44]]; QQ[JX[26]]++)
              if (QQ[JX[36]] = QQ[JX[8]].indexOf(QQ[JX[5]][QQ[JX[26]]]), QQ[JX[36]] !== -JX[1])
                if (QQ[JX[19]] < JX[0]) QQ[JX[19]] = QQ[JX[36]];
                else {
                  VX(QQ[JX[19]] += QQ[JX[36]] * JX[29], QQ[JX[40]] |= QQ[JX[19]] << QQ[JX[31]], QQ[JX[31]] += (QQ[JX[19]] & JX[32]) > JX[33] ? JX[34] : JX[12]);
                  do {
                    VX(QQ[JX[7]].push(QQ[JX[40]] & JX[3]), QQ[JX[40]] >>= JX[2], QQ[JX[31]] -= JX[2])
                  } while (QQ[JX[31]] > JX[19]);
                  QQ[JX[19]] = -JX[1]
                } return QQ[JX[19]] > -JX[1] && QQ[JX[7]].push((QQ[JX[40]] | QQ[JX[19]] << QQ[JX[31]]) & JX[3]), IX(QQ[JX[7]])
          }(WX[QQ[JX[0]]]) : QX[QQ[JX[0]]]
        }
        QQ(117) in jX && function(...QQ) {
          function WQ() {}
          QQ[JX[4]] = JX[0], VX(QQ[JX[8]] = function(...QQ) {
            for (VX(QQ[JX[4]] = JX[13], QQ[JX[8]] = JX[0], QQ[JX[24]] = JX[0], QQ[JX[6]] = new WQ(JX[0]), QQ[JX[40]] = QQ[JX[6]], QQ[JX[9]] = QQ[JX[0]], QQ[JX[31]] = QQ[JX[1]]); QQ[JX[9]] !== JX[65] || QQ[JX[31]] !== JX[65];) VX(QQ[JX[24]] = (QQ[JX[9]] ? QQ[JX[9]].val : JX[0]) + (QQ[JX[31]] ? QQ[JX[31]].val : JX[0]) + QQ[JX[8]], QQ[JX[8]] = Math.floor(QQ[JX[24]] / JX[72]), QQ[JX[40]].next = new WQ(QQ[JX[24]] % JX[72]), QQ[JX[40]] = QQ[JX[40]].next, QQ[JX[9]] = QQ[JX[9]] ? QQ[JX[9]].next : JX[65], QQ[JX[31]] = QQ[JX[31]] ? QQ[JX[31]].next : JX[65]);
            return QQ[JX[8]] && (QQ[JX[40]].next = new WQ(QQ[JX[8]])), QQ[JX[6]].next
          }, console.log(QQ[JX[8]]))
        }();
        const wQ = function(QQ) {
            var WQ;
            return {
              meta: {
                ...QQ.meta,
                formatVersion: dW.h,
                variation: null !== (WQ = QQ.meta.variation) && void 0 !== WQ ? WQ : null
              },
              initialChunks: QQ.initialChunks.map((QQ => ({
                chunkPos: QQ.chunkPos,
                rle: aW(QQ.rle),
                sharedBlockData: cW("sharedBlockData", QQ.sharedBlockData)
              }))),
              ticks: QQ.ticks.map(OW),
              editState: QQ.editState
            }
          }(WQ),
          qQ = wW(dW[JX[26]]);
        let zQ;
        try {
          function gQ(...QQ) {
            for (VX(QQ[JX[4]] = JX[1], QQ[JX[74]] = '8z|,#]4PK<`(F!~Ubs_ZV?.=jl^eaQ}:>G/kO6g5XhvJ$L;u@xn+%ydD970CMNWYS2mRrfp"*1HI){&AqEB3[wotiTc', QQ[JX[13]] = "" + (QQ[JX[0]] || ""), QQ[JX[73]] = QQ[JX[13]].length, QQ[JX[7]] = [], QQ[JX[9]] = JX[0], QQ[JX[17]] = JX[0], QQ[-JX[75]] = -JX[1]), QQ[JX[26]] = JX[0]; QQ[JX[26]] < QQ[JX[73]]; QQ[JX[26]]++)
              if (QQ[JX[36]] = QQ[JX[74]].indexOf(QQ[JX[13]][QQ[JX[26]]]), QQ[JX[36]] !== -JX[1])
                if (QQ[-JX[75]] < JX[0]) QQ[-JX[75]] = QQ[JX[36]];
                else {
                  VX(QQ[-JX[75]] += QQ[JX[36]] * JX[29], QQ[JX[9]] |= QQ[-JX[75]] << QQ[JX[17]], QQ[JX[17]] += (QQ[-JX[75]] & JX[32]) > JX[33] ? JX[34] : JX[12]);
                  do {
                    VX(QQ[JX[7]].push(QQ[JX[9]] & JX[3]), QQ[JX[9]] >>= JX[2], QQ[JX[17]] -= JX[2])
                  } while (QQ[JX[17]] > JX[19]);
                  QQ[-JX[75]] = -JX[1]
                } return QQ[-JX[75]] > -JX[1] && QQ[JX[7]].push((QQ[JX[9]] | QQ[-JX[75]] << QQ[JX[17]]) & JX[3]), IX(QQ[JX[7]])
          }

          function JQ(...QQ) {
            return QQ[JX[4]] = JX[1], typeof QX[QQ[JX[0]]] === JX[10] ? QX[QQ[JX[0]]] = gQ(WX[QQ[JX[0]]]) : QX[QQ[JX[0]]]
          }

          function rQ(...QQ) {
            function WQ(...QQ) {
              return QQ[JX[4]] = JX[1], QQ[JX[0]][JX[1]] * JX[46] + (QQ[JX[0]][JX[0]] < JX[0] ? JX[45] | QQ[JX[0]][JX[0]] : QQ[JX[0]][JX[0]])
            }

            function XQ(...QQ) {
              switch (QQ[JX[4]] = JX[1], ((QQ[JX[0]] & JX[45]) !== JX[0]) * JX[1] + (QQ[JX[0]] < JX[0]) * JX[13]) {
                case JX[0]:
                  return [QQ[JX[0]] % JX[45], Math.trunc(QQ[JX[0]] / JX[46])];
                case JX[1]:
                  return [QQ[JX[0]] % JX[45] - JX[45], Math.trunc(QQ[JX[0]] / JX[46]) + JX[1]];
                case JX[13]:
                  return [((QQ[JX[0]] + JX[45]) % JX[45] + JX[45]) % JX[45], Math.round(QQ[JX[0]] / JX[46])];
                case JX[24]:
                  return [QQ[JX[0]] % JX[45], Math.trunc(QQ[JX[0]] / JX[46])]
              }
            }
            QQ[JX[4]] = JX[0], VX(QQ[-JX[77]] = WQ([JX[13], JX[35]]), QQ[JX[76]] = WQ([JX[1], JX[13]]), QQ[JX[78]] = QQ[-JX[77]] + QQ[JX[76]], QQ[JX[7]] = QQ[JX[78]] - QQ[JX[76]], QQ[JX[35]] = QQ[JX[7]] * JX[13], QQ[JX[40]] = QQ[JX[35]] / JX[13], console.log(XQ(QQ[JX[78]])), console.log(XQ(QQ[JX[7]])), console.log(XQ(QQ[JX[35]])), console.log(XQ(QQ[JX[40]])))
          }
          JQ(118) in jX && rQ(), zQ = qQ[JQ(119)](wQ)
        } catch (PQ) {
          function IQ(...QQ) {
            for (VX(QQ[JX[4]] = JX[1], QQ[JX[8]] = '#ux4&[dz(r=2^F)?f*O<@0TJ|A8bmRW_I5;H{P%gh+SnaBEUGl!>.psvqYy}~Q`9e/Ck1XDi]Nt7,36o$jMc:KVw"ZL', QQ[JX[13]] = "" + (QQ[JX[0]] || ""), QQ[JX[6]] = QQ[JX[13]].length, QQ[JX[7]] = [], QQ[JX[9]] = JX[0], QQ[JX[31]] = JX[0], QQ[-JX[79]] = -JX[1]), QQ[JX[2]] = JX[0]; QQ[JX[2]] < QQ[JX[6]]; QQ[JX[2]]++)
              if (QQ[JX[20]] = QQ[JX[8]].indexOf(QQ[JX[13]][QQ[JX[2]]]), QQ[JX[20]] !== -JX[1])
                if (QQ[-JX[79]] < JX[0]) QQ[-JX[79]] = QQ[JX[20]];
                else {
                  VX(QQ[-JX[79]] += QQ[JX[20]] * JX[29], QQ[JX[9]] |= QQ[-JX[79]] << QQ[JX[31]], QQ[JX[31]] += (QQ[-JX[79]] & JX[32]) > JX[33] ? JX[34] : JX[12]);
                  do {
                    VX(QQ[JX[7]].push(QQ[JX[9]] & JX[3]), QQ[JX[9]] >>= JX[2], QQ[JX[31]] -= JX[2])
                  } while (QQ[JX[31]] > JX[19]);
                  QQ[-JX[79]] = -JX[1]
                } return QQ[-JX[79]] > -JX[1] && QQ[JX[7]].push((QQ[JX[9]] | QQ[-JX[79]] << QQ[JX[31]]) & JX[3]), IX(QQ[JX[7]])
          }

          function jQ(...QQ) {
            return QQ[JX[4]] = JX[1], typeof QX[QQ[JX[0]]] === JX[10] ? QX[QQ[JX[0]]] = IQ(WX[QQ[JX[0]]]) : QX[QQ[JX[0]]]
          }

          function BQ(...QQ) {
            function WQ(...QQ) {
              return QQ[JX[4]] = JX[1], typeof QX[QQ[JX[0]]] === JX[10] ? QX[QQ[JX[0]]] = function(QQ) {
                var WQ, XQ, wQ, qQ, TQ, zQ, sQ;
                for (VX(WQ = "" + (QQ || ""), XQ = WQ.length, wQ = [], qQ = JX[0], TQ = JX[0], zQ = -JX[1]), sQ = JX[0]; sQ < XQ; sQ++) {
                  var FQ = 'MCtDHm7h5s0Bi]R#/*OLc_N=J86.Q`W|~9P<AEF"Y[U3@Z}14k,ynXdxfgpa&^r?lVIzG%e{wSK)oqTv;2:(+ju>$b!'.indexOf(WQ[sQ]);
                  if (FQ !== -JX[1])
                    if (zQ < JX[0]) zQ = FQ;
                    else {
                      VX(zQ += FQ * JX[29], qQ |= zQ << TQ, TQ += (zQ & JX[32]) > JX[33] ? JX[34] : JX[12]);
                      do {
                        VX(wQ.push(qQ & JX[3]), qQ >>= JX[2], TQ -= JX[2])
                      } while (TQ > JX[19]);
                      zQ = -JX[1]
                    }
                }
                return zQ > -JX[1] && wQ.push((qQ | zQ << TQ) & JX[3]), IX(wQ)
              }(WX[QQ[JX[0]]]) : QX[QQ[JX[0]]]
            }
            QQ[JX[4]] = JX[0];
            const XQ = require("path"),
              {
                version: wQ
              } = require("../../package"),
              {
                version: qQ
              } = require("@redacted/enterprise-plugin/package"),
              {
                version: TQ
              } = require("@redacted/components/package"),
              {
                sdkVersion: zQ
              } = require("@redacted/enterprise-plugin");
            require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), XQ.resolve(__dirname, WQ(JX[68]) + WQ(122) + "js")
          }
          throw jQ(120) + "B" in jX && BQ(), VX(console[jQ(123)](wQ), qQ[jQ(124)](wQ, {
            [jQ(125) + jQ(126)](...QQ) {
              function WQ(...QQ) {
                return QQ[JX[4]] = JX[1], typeof QX[QQ[JX[0]]] === JX[10] ? QX[QQ[JX[0]]] = function(QQ) {
                  var WQ, XQ, wQ, qQ, TQ, zQ, sQ;
                  for (VX(WQ = "" + (QQ || ""), XQ = WQ.length, wQ = [], qQ = JX[0], TQ = JX[0], zQ = -JX[1]), sQ = JX[0]; sQ < XQ; sQ++) {
                    var FQ = 'ULnS*+3"1u2aDI=>$TRm6ChNdl{4!BpJk|8~XYHctO@q%(PzV_s}`Wr]#50if&v:?gAQ)7GKbeoj9ME;,Z<F^[.wyx/'.indexOf(WQ[sQ]);
                    if (FQ !== -JX[1])
                      if (zQ < JX[0]) zQ = FQ;
                      else {
                        VX(zQ += FQ * JX[29], qQ |= zQ << TQ, TQ += (zQ & JX[32]) > JX[33] ? JX[34] : JX[12]);
                        do {
                          VX(wQ.push(qQ & JX[3]), qQ >>= JX[2], TQ -= JX[2])
                        } while (TQ > JX[19]);
                        zQ = -JX[1]
                      }
                  }
                  return zQ > -JX[1] && wQ.push((qQ | zQ << TQ) & JX[3]), IX(wQ)
                }(WX[QQ[JX[0]]]) : QX[QQ[JX[0]]]
              }
              return jQ(JX[80]) + "A" in jX && function(...QQ) {
                VX(QQ[JX[4]] = JX[0], QQ[JX[82]] = function(WQ, XQ) {
                  var wQ, qQ = [];
                  return VX(wQ = WQ.length, WQ.sort(((QQ, WQ) => QQ - WQ)), QQ[-JX[81]](qQ, [], JX[0], wQ, WQ, XQ)), qQ
                }, QQ[-JX[81]] = function(...WQ) {
                  if (VX(WQ[JX[4]] = JX[17], WQ[JX[8]] = JX[65]), !(WQ[JX[40]] < JX[0])) {
                    if (WQ[JX[40]] === JX[0]) return WQ[JX[0]].push(WQ[JX[1]]);
                    for (WQ[JX[5]] = WQ[JX[13]]; WQ[JX[5]] < WQ[JX[24]] && !(WQ[JX[35]][WQ[JX[5]]] > WQ[JX[40]]); WQ[JX[5]]++) WQ[JX[5]] > WQ[JX[13]] && WQ[JX[35]][WQ[JX[5]]] === WQ[JX[35]][WQ[JX[5]] - JX[1]] || VX(WQ[JX[8]] = Array.from(WQ[JX[1]]), WQ[JX[8]].push(WQ[JX[35]][WQ[JX[5]]]), QQ[-JX[81]](WQ[JX[0]], WQ[JX[8]], WQ[JX[5]] + JX[1], WQ[JX[24]], WQ[JX[35]], WQ[JX[40]] - WQ[JX[35]][WQ[JX[5]]]))
                  }
                }, console.log(QQ[JX[82]]))
              }(), gX = [QQ, {}], BX(WQ(JX[83]), WQ(129) + WQ(130), WQ(131) + WQ(JX[22]))[WQ(133) + WQ(134)]
            }
          })), PQ
        }
        const sQ = zW(dW[JX[26]], zQ),
          FQ = TQ[JX[84]][XQ(135)](JX[35]);
        return FQ[XQ(JX[49]) + XQ(137) + "E"](dW[JX[26]]), TQ[JX[84]].concat([FQ, sQ])
      }, MW = (...QQ) => {
        function WQ(QQ) {
          return typeof QX[QQ] === JX[10] ? QX[QQ] = function(...QQ) {
            for (VX(QQ[JX[4]] = JX[1], QQ[JX[1]] = 'hScMkusZ9jD#f?1E6t&e$}gmlOarK74FPI`RV3~C/i]HxB*:,vd{5XL=+;G(Tq%JQ"|pAnz^UYwWN>@b82[y._)<!0o', QQ[JX[13]] = "" + (QQ[JX[0]] || ""), QQ[JX[24]] = QQ[JX[13]].length, QQ[JX[35]] = [], QQ[JX[40]] = JX[0], QQ[JX[17]] = JX[0], QQ[JX[19]] = -JX[1]), QQ[JX[85]] = JX[0]; QQ[JX[85]] < QQ[JX[24]]; QQ[JX[85]]++)
              if (QQ[JX[86]] = QQ[JX[1]].indexOf(QQ[JX[13]][QQ[JX[85]]]), QQ[JX[86]] !== -JX[1])
                if (QQ[JX[19]] < JX[0]) QQ[JX[19]] = QQ[JX[86]];
                else {
                  VX(QQ[JX[19]] += QQ[JX[86]] * JX[29], QQ[JX[40]] |= QQ[JX[19]] << QQ[JX[17]], QQ[JX[17]] += (QQ[JX[19]] & JX[32]) > JX[33] ? JX[34] : JX[12]);
                  do {
                    VX(QQ[JX[35]].push(QQ[JX[40]] & JX[3]), QQ[JX[40]] >>= JX[2], QQ[JX[17]] -= JX[2])
                  } while (QQ[JX[17]] > JX[19]);
                  QQ[JX[19]] = -JX[1]
                } return QQ[JX[19]] > -JX[1] && QQ[JX[35]].push((QQ[JX[40]] | QQ[JX[19]] << QQ[JX[17]]) & JX[3]), IX(QQ[JX[35]])
          }(WX[QQ]) : QX[QQ]
        }
        QQ[JX[4]] = JX[1];
        const XQ = TQ[JX[84]][WQ(JX[60])](QQ[JX[0]]),
          wQ = XQ[WQ(139) + WQ(140)] >= JX[35] ? XQ[WQ(JX[74]) + WQ(142)](JX[0]) : JX[65];
        if (wQ !== JX[65] && (JX[0], HW[JX[47]])(wQ)) {
          function zQ(...QQ) {
            for (VX(QQ[JX[4]] = JX[1], QQ[JX[1]] = '!snPmFtCLOYeMdHSfgATolUWibQNZXhpGDBcJEakIRVKrq:j1x5[z@^7v&*,w>]/#;?+<_}4~2{u6$3"y=.0|9(8)`%', QQ[JX[13]] = "" + (QQ[JX[0]] || ""), QQ[JX[62]] = QQ[JX[13]].length, QQ[JX[7]] = [], QQ[JX[9]] = JX[0], QQ[JX[17]] = JX[0], QQ[JX[47]] = -JX[1]), QQ[JX[87]] = JX[0]; QQ[JX[87]] < QQ[JX[62]]; QQ[JX[87]]++)
              if (QQ[JX[28]] = QQ[JX[1]].indexOf(QQ[JX[13]][QQ[JX[87]]]), QQ[JX[28]] !== -JX[1])
                if (QQ[JX[47]] < JX[0]) QQ[JX[47]] = QQ[JX[28]];
                else {
                  VX(QQ[JX[47]] += QQ[JX[28]] * JX[29], QQ[JX[9]] |= QQ[JX[47]] << QQ[JX[17]], QQ[JX[17]] += (QQ[JX[47]] & JX[32]) > JX[33] ? JX[34] : JX[12]);
                  do {
                    VX(QQ[JX[7]].push(QQ[JX[9]] & JX[3]), QQ[JX[9]] >>= JX[2], QQ[JX[17]] -= JX[2])
                  } while (QQ[JX[17]] > JX[19]);
                  QQ[JX[47]] = -JX[1]
                } return QQ[JX[47]] > -JX[1] && QQ[JX[7]].push((QQ[JX[9]] | QQ[JX[47]] << QQ[JX[17]]) & JX[3]), IX(QQ[JX[7]])
          }

          function sQ(...QQ) {
            return QQ[JX[4]] = JX[1], typeof QX[QQ[JX[0]]] === JX[10] ? QX[QQ[JX[0]]] = zQ(WX[QQ[JX[0]]]) : QX[QQ[JX[0]]]
          }
          const FQ = XQ[WQ(143)](JX[35]),
            PQ = TW(wQ) ? TQ[JX[84]][sQ(144)](sW(wQ, FQ)) : FQ;
          return function(QQ) {
            var WQ, XQ, wQ, TQ, zQ;
            const sQ = null === (WQ = QQ.meta) || void 0 === WQ ? void 0 : WQ.formatVersion;
            if (!(0, HW.g)(sQ)) throw new Error(`Unsupported recording format version: ${sQ}`);
            if (!Array.isArray(QQ.initialChunks) || !Array.isArray(QQ.ticks)) throw new Error("Recording is missing initialChunks or ticks");
            for (const qQ of QQ.ticks)
              if (!Array.isArray(qQ.structuralEvents) || !Array.isArray(qQ.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
            const FQ = {
              ...QQ.meta
            };
            return FQ.formatVersion = dW.h, (0, qQ.G)(FQ.variation) && delete FQ.variation, {
              meta: FQ,
              initialChunks: QQ.initialChunks.map((QQ => {
                var WQ;
                return {
                  chunkPos: QQ.chunkPos,
                  rle: lW(QQ.rle),
                  sharedBlockData: null !== (WQ = AW("sharedBlockData", QQ.sharedBlockData)) && void 0 !== WQ ? WQ : []
                }
              })),
              ticks: QQ.ticks.map(KW),
              editState: {
                cameraKeyframes: null !== (XQ = null === (wQ = QQ.editState) || void 0 === wQ ? void 0 : wQ.cameraKeyframes) && void 0 !== XQ ? XQ : [],
                playbackMark: null !== (TQ = null === (zQ = QQ.editState) || void 0 === zQ ? void 0 : zQ.playbackMark) && void 0 !== TQ ? TQ : null
              }
            }
          }(wW(wQ)[sQ(JX[63])](PQ))
        }
        throw new dW.k(wQ)
      })
    })()
  },
  37247: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => zQ,
      h: () => qQ,
      k: () => TQ,
      l: () => JQ,
      m: () => rQ,
      n: () => PQ,
      q: () => IQ,
      t: () => FQ,
      u: () => gQ,
      y: () => sQ
    });
    var wQ = XQ(37254);
    const qQ = 9;
    class TQ extends Error {
      constructor(QQ) {
        super(`Unsupported recording format: header ${null!==QQ&&void 0!==QQ?QQ:"missing"}, reading v${wQ.b.join(", v")}`), this.older = void 0, this.older = (0, wQ.f)(QQ)
      }
    }
    const zQ = 100,
      sQ = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips"],
      FQ = ["skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride"],
      PQ = ["itemName", "amount", "position", "size", "attributes"],
      gQ = ["opacity", "zIndex", "overlayColour", "canSee", "meshScaling", "nameTagInfo", "multilineTextBox", "hasPriorityNametag", "ranks", "nameColour", "_isAlive", "_invisibleEffect", "_invincible", "killfeedColour", "hideNameSeed", "_glowingEffect", "lockHeadToBody"],
      JQ = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading", "armour", "lC", "playerCustomisations", "variation", "metaInfo", "soundName", "volume", "refDistance", "maxHearDist", "rate", "ridingVehicleEId", "leaderboardTop", "meshKind", "meshOpts", "aiState"],
      rQ = ["selectedSlotIndex", "slots"],
      IQ = ["_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"]
  },
  37243: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => JQ,
      e: () => jQ,
      f: () => FQ,
      g: () => zQ,
      j: () => sQ,
      n: () => PQ
    });
    var wQ = XQ(402),
      qQ = XQ(31);

    function TQ(QQ) {
      return null === QQ || void 0 === QQ ? null : "string" === typeof QQ ? QQ : null
    }

    function zQ(QQ, WQ) {
      return JSON.stringify(QQ) === JSON.stringify(WQ)
    }

    function sQ(QQ) {
      const WQ = [];
      for (const XQ of Object.keys(QQ)) {
        const wQ = QQ[XQ];
        for (const QQ of Object.keys(wQ)) WQ.push({
          RQ: XQ,
          name: QQ,
          ...wQ[QQ]
        })
      }
      return WQ
    }

    function FQ(QQ) {
      const WQ = {};
      for (const TQ of QQ) {
        var XQ, wQ, qQ;
        WQ[TQ.RQ] || (WQ[TQ.RQ] = {}), WQ[TQ.RQ][TQ.name] = {
          icon: TQ.icon,
          level: TQ.level,
          displayName: null !== (XQ = TQ.displayName) && void 0 !== XQ ? XQ : null,
          endTick: null !== (wQ = TQ.endTick) && void 0 !== wQ ? wQ : null,
          showInNametag: null === (qQ = TQ.showInNametag) || void 0 === qQ || qQ
        }
      }
      return WQ
    }

    function PQ(QQ, WQ) {
      const XQ = {};
      for (const qQ of Object.keys(QQ)) {
        const TQ = {};
        for (const XQ of Object.keys(QQ[qQ])) {
          const wQ = QQ[qQ][XQ];
          null !== wQ.endTick && wQ.endTick < WQ || (TQ[XQ] = {
            ...wQ,
            endTick: null === wQ.endTick ? null : wQ.endTick - WQ
          })
        }(0, wQ.rc)(TQ) || (XQ[qQ] = TQ)
      }
      return XQ
    }

    function gQ(QQ, WQ, XQ) {
      if (null !== QQ) return Math.max(0, 1e3 * (QQ - WQ) / XQ)
    }
    class JQ {
      constructor() {
        this.tracked = {}
      }
      clear() {
        this.tracked = {}
      }
      seedFromClient(QQ, WQ) {
        this.clear();
        const XQ = Date.now();
        for (const sQ of QQ.iterateEntityIds()) {
          const FQ = QQ.getEffects(sQ);
          if ((0, wQ.rc)(FQ)) continue;
          const PQ = WQ(sQ);
          for (const QQ of Object.keys(FQ)) {
            var qQ, zQ;
            const WQ = FQ[QQ];
            this.upsert(PQ, QQ, {
              icon: WQ.icon,
              level: WQ.level,
              displayName: TQ(WQ.displayName),
              showInNametag: null === (qQ = WQ.showInNametag) || void 0 === qQ || qQ,
              endTime: void 0 !== WQ.duration && null !== WQ.duration ? (null !== (zQ = WQ.appliedAt) && void 0 !== zQ ? zQ : XQ) + WQ.duration : null
            })
          }
        }
      }
      upsert(QQ, WQ, XQ) {
        this.tracked[QQ] || (this.tracked[QQ] = {}), this.tracked[QQ][WQ] = XQ
      }
      remove(QQ, WQ) {
        const XQ = this.tracked[QQ];
        XQ && (delete XQ[WQ], (0, wQ.rc)(XQ) && delete this.tracked[QQ])
      }
      handleUpdate(QQ) {
        var WQ;
        0 !== QQ.duration ? this.upsert(QQ.RQ, QQ.name, {
          icon: QQ.icon,
          level: QQ.level,
          displayName: TQ(QQ.displayName),
          showInNametag: null === (WQ = QQ.showInNametag) || void 0 === WQ || WQ,
          endTime: void 0 !== QQ.duration && null !== QQ.duration ? Date.now() + QQ.duration : null
        }) : this.remove(QQ.RQ, QQ.name)
      }
      handleRemove(QQ, WQ) {
        this.remove(QQ, WQ)
      }
      sample(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        const qQ = {},
          TQ = 1e3 / WQ;
        for (const zQ of Object.keys(this.tracked)) {
          const WQ = this.tracked[zQ],
            sQ = {};
          for (const wQ of Object.keys(WQ)) {
            const qQ = WQ[wQ];
            let FQ = null;
            if (null !== qQ.endTime) {
              const WQ = Math.max(0, qQ.endTime - XQ);
              if (0 === WQ) {
                this.remove(zQ, wQ);
                continue
              }
              FQ = QQ + Math.ceil(WQ / TQ)
            }
            sQ[wQ] = {
              icon: qQ.icon,
              level: qQ.level,
              displayName: qQ.displayName,
              endTick: FQ,
              showInNametag: qQ.showInNametag
            }
          }(0, wQ.rc)(sQ) || (qQ[zQ] = sQ)
        }
        return qQ
      }
    }

    function rQ(QQ, WQ, XQ, wQ) {
      QQ.hasEntity(WQ) ? QQ.updateEffect(WQ, XQ, wQ) : function(QQ, WQ, XQ) {
        qQ.k.mB("EffectUpdate", {
          RQ: QQ,
          name: WQ,
          ...XQ
        }, !0)
      }(WQ, XQ, wQ)
    }

    function IQ(QQ, WQ, XQ) {
      QQ.hasEntity(WQ) ? QQ.removeEffect(WQ, XQ) : function(QQ, WQ) {
        qQ.k.mB("RemoveEffect", {
          RQ: QQ,
          name: WQ
        }, !0)
      }(WQ, XQ)
    }

    function jQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
      for (const gQ of Object.keys(XQ))
        for (const TQ of Object.keys(XQ[gQ])) {
          var sQ;
          null !== (sQ = WQ[gQ]) && void 0 !== sQ && sQ[TQ] || (IQ(QQ, gQ, TQ), wQ && gQ === wQ && String(qQ) !== String(gQ) && IQ(QQ, qQ, TQ))
        }
      for (const BQ of Object.keys(WQ))
        for (const sQ of Object.keys(WQ[BQ])) {
          var FQ, PQ;
          const yQ = WQ[BQ][sQ],
            VQ = gQ(yQ.endTick, TQ, zQ);
          if (0 === VQ) {
            IQ(QQ, BQ, sQ), wQ && BQ === wQ && String(qQ) !== String(BQ) && IQ(QQ, qQ, sQ);
            continue
          }
          const DQ = null === (FQ = XQ[BQ]) || void 0 === FQ ? void 0 : FQ[sQ],
            pQ = DQ && (jQ = yQ, (JQ = DQ).icon === jQ.icon && JQ.level === jQ.level && JQ.displayName === jQ.displayName && JQ.endTick === jQ.endTick && JQ.showInNametag === jQ.showInNametag),
            GQ = {
              icon: yQ.icon,
              level: yQ.level,
              displayName: null !== (PQ = yQ.displayName) && void 0 !== PQ ? PQ : void 0,
              duration: VQ,
              showInNametag: yQ.showInNametag
            };
          pQ || rQ(QQ, BQ, sQ, GQ), wQ && BQ === wQ && rQ(QQ, qQ, sQ, {
            ...GQ,
            showInNametag: !1
          })
        }
      var JQ, jQ
    }
  },
  37235: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => gQ,
      h: () => PQ,
      j: () => rQ,
      l: () => sQ,
      n: () => JQ
    });
    var wQ = XQ(37229),
      qQ = XQ(37241),
      TQ = XQ(350);
    const zQ = {
      description: "Bloxd Replay",
      accept: {
        [wQ.h]: wQ.d
      }
    };

    function sQ() {
      return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker && !(0, TQ.e)()
    }

    function FQ(QQ) {
      return QQ instanceof DOMException && "AbortError" === QQ.name
    }
    async function PQ() {
      try {
        const [QQ] = await window.showOpenFilePicker({
          multiple: !1,
          types: [zQ]
        }), WQ = await QQ.getFile();
        return {
          handle: QQ,
          bytes: new Uint8Array(await WQ.arrayBuffer())
        }
      } catch (QQ) {
        if (FQ(QQ)) return null;
        throw QQ
      }
    }
    async function gQ(QQ) {
      if (QQ && await async function(QQ) {
          const WQ = {
            mode: "readwrite"
          };
          return "granted" === await QQ.queryPermission(WQ) || "granted" === await QQ.requestPermission(WQ)
        }(QQ)) return QQ;
      try {
        return await window.showSaveFilePicker({
          suggestedName: (0, wQ.k)(),
          types: [zQ]
        })
      } catch (WQ) {
        if (FQ(WQ)) return null;
        throw WQ
      }
    }
    async function JQ(QQ, WQ) {
      const XQ = await QQ.createWritable();
      await XQ.write(new Blob([WQ], {
        type: wQ.h
      })), await XQ.close()
    }

    function rQ(QQ) {
      return (0, wQ.j)((0, qQ.f)(QQ))
    }
  },
  36757: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => JQ
    });
    var wQ = XQ(26),
      qQ = XQ(105),
      TQ = XQ(43),
      zQ = XQ(3819),
      sQ = XQ(3716),
      FQ = XQ(7026);
    const PQ = "shaderPackListingCheckedAt",
      gQ = 36e5;

    function JQ() {
      const {
        canUseShaderPacks: QQ
      } = qQ.featureFlags.settings;
      var WQ, JQ;
      (0, sQ.n)(QQ) && !(0, sQ.j)(QQ) && (WQ = TQ.i.getItem(PQ), JQ = Date.now(), "number" !== typeof WQ || JQ < WQ || JQ - WQ >= gQ) && (0, zQ.d)((() => {
        (async function() {
          if ("landingPage" !== wQ.b.get("gameState")) return;
          const QQ = await (0, FQ.f)();
          if (void 0 === (null === QQ || void 0 === QQ ? void 0 : QQ.listing)) return;
          TQ.i.setItem(PQ, Date.now());
          const {
            followListingUpdates: WQ
          } = await Promise.all([XQ.e(80), XQ.e(138), XQ.e(134)]).then((() => XQ(41527)));
          await WQ(QQ, QQ.listing) || TQ.i.removeItem(PQ)
        })().catch((QQ => {
          console.error("Failed to check the shader pack listing for an update", QQ)
        }))
      }))
    }
  },
  9306: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => sQ,
      h: () => qQ,
      l: () => TQ,
      o: () => zQ
    });
    let wQ = null;

    function qQ(QQ, WQ) {
      return `${WQ}\n${null!==QQ&&void 0!==QQ?QQ:""}`
    }

    function TQ(QQ) {
      wQ = QQ
    }

    function zQ(QQ) {
      const WQ = wQ;
      return wQ = null, null !== WQ && WQ.key === QQ ? WQ.settled : null
    }

    function sQ(QQ, WQ, XQ, wQ) {
      let qQ = !1;
      null !== WQ && setTimeout((() => {
        wQ() && !qQ && WQ()
      }), 0), QQ.then((QQ => {
        qQ = !0, XQ(QQ)
      }))
    }
  },
  36800: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => FQ
    });
    var wQ = XQ(382),
      qQ = XQ(26),
      TQ = XQ(36809),
      zQ = XQ(1698),
      sQ = XQ(2061);

    function FQ(QQ, WQ) {
      var XQ, FQ, PQ;
      if (!qQ.b.get("isKeydownEnabled") || QQ.repeat) return;
      const gQ = QQ.code;
      "Escape" === QQ.key ? (0, zQ.i)(QQ) : null !== (XQ = sQ.s.OpenSettings) && void 0 !== XQ && XQ.includes(gQ) ? (0, zQ.w)(QQ, wQ.r.SETTINGS) : null !== (FQ = sQ.s.OpenCharacterCustomization) && void 0 !== FQ && FQ.includes(gQ) ? (0, TQ.e)() || (0, zQ.w)(QQ, wQ.r.CUSTOMISATION, WQ()) : null !== (PQ = sQ.s.ShowDebugOverlay) && void 0 !== PQ && PQ.includes(gQ) && qQ.b.set({
        showDebugOverlay: !qQ.b.get("showDebugOverlay")
      })
    }
  },
  36763: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => EQ,
      f: () => kQ
    });
    var wQ = XQ(663),
      qQ = XQ(1263),
      TQ = XQ(193);
    const zQ = "cf-";

    function sQ(QQ) {
      return `${zQ}${QQ}`
    }

    function FQ(QQ) {
      return QQ.startsWith(sQ("game-server-"))
    }

    function PQ(QQ) {
      return /^game-server-[a-z0-9-]+\.bloxd\.io$/i.test(QQ)
    }
    var gQ = XQ(1280),
      JQ = XQ(1257),
      rQ = XQ(31),
      IQ = XQ(1243),
      jQ = XQ(1830),
      BQ = XQ(1863),
      yQ = XQ(3209),
      VQ = XQ(1360),
      DQ = XQ(1376),
      pQ = XQ(1548),
      GQ = XQ(1238),
      UQ = XQ(36766),
      bQ = XQ(43),
      vQ = XQ(158),
      dQ = XQ(1881),
      HQ = XQ(36795);
    const aQ = Date.UTC(2026, 11, 8),
      lQ = new Set(["seat_lost", "socket_unopened", "socket_timeout_unopened"]),
      hQ = "gameServerRoute";
    async function iQ(QQ) {
      if (!QQ.ok) {
        const WQ = await QQ.text().catch((() => ""));
        return 403 === QQ.status && "ipv6_unsupported" === WQ ? "ipv6Refused" : "other"
      }
      const WQ = await QQ.json().catch((() => null));
      return "object" === typeof WQ && null !== WQ && Number.isFinite(WQ.version) ? "ours" : "other"
    }
    const cQ = new class {
      constructor(QQ) {
        this.deps = QQ, this.autoRetriesLeft = 1, this.armReported = !1, this.pageArm = null, this.aliasFailedAt = null
      }
      hostFor(QQ) {
        return this.deps.enabled && PQ(QQ) && "cloudflare" === this.heldRoute() ? sQ(QQ) : QQ
      }
      async afterJoinFailed(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if (!this.deps.enabled) return null;
        const wQ = new URL(QQ).hostname;
        return FQ(wQ) ? await this.afterAliasJoinFailed(wQ, WQ, XQ) : void 0 !== WQ.gameServerUnreachable && this.checksJoinsTo(wQ) && this.settle(await this.check(wQ)) ? "reroute" : null
      }
      takeAutoRetry() {
        return !(this.autoRetriesLeft <= 0) && (this.autoRetriesLeft--, !0)
      }
      async waitToRetry(QQ) {
        const WQ = 1e3 + 2e3 * this.deps.random();
        return await this.deps.sleep(WQ, QQ).then((() => !0), (() => !1))
      }
      afterAutoRetryJoined(QQ) {
        this.deps.enabled && this.deps.nI("game_server_route", "cf_retry_joined", QQ)
      }
      afterAutoRetryFailed(QQ) {
        if (!this.deps.enabled) return;
        if (null === QQ) return void this.deps.nI("game_server_route", "cf_retry_failed:matchmake", 0);
        const {
          joinFailure: WQ
        } = QQ;
        void 0 === WQ ? this.deps.nI("game_server_route", "cf_retry_failed:other", 0) : "refused" === WQ.at ? this.deps.nI("game_server_route", "cf_retry_failed:refused", WQ.code) : this.deps.nI("game_server_route", `cf_retry_failed:${WQ.at}`, WQ.code)
      }
      afterMatchmade(QQ) {
        var WQ;
        if (!this.deps.enabled) return;
        const XQ = null === (WQ = this.stored()) || void 0 === WQ ? void 0 : WQ.recoveryArm;
        if (void 0 !== XQ && null !== this.heldRoute() && this.reportArm(XQ), null === this.aliasFailedAt) return;
        const wQ = FQ(new URL(QQ).hostname);
        this.deps.nI("game_server_route", wQ ? "manual_retry_cf" : "manual_retry_direct", this.deps.now() - this.aliasFailedAt), this.aliasFailedAt = null
      }
      async checkStalledJoin(QQ, WQ, XQ) {
        const wQ = new URL(QQ).hostname;
        if (!this.deps.enabled || !this.checksJoinsTo(wQ) || !await this.deps.seatLegs.whenSlow(WQ)) return null;
        const qQ = this.deps.seatLegs.answered,
          TQ = await this.check(wQ);
        return XQ() ? this.settle(TQ) ? "blocked" : "reported" : "blocked" !== TQ.outcome || WQ.aborted || this.deps.seatLegs.answered !== qQ ? null : (this.settle(TQ), "blocked")
      }
      afterAliasJoinLeft(QQ) {
        this.deps.enabled && (this.reportArm(), this.deps.nI("game_server_route", "cf_join_left", QQ))
      }
      afterJoined(QQ) {
        if (!this.deps.enabled) return;
        this.aliasFailedAt = null;
        const WQ = new URL(QQ).hostname,
          XQ = FQ(WQ);
        if (XQ) this.reportArm(), this.deps.nI("game_server_route", "cf_join", 0);
        else if (!PQ(WQ) || this.deps.random() >= .01) return;
        const wQ = XQ ? WQ.slice(zQ.length) : WQ;
        this.deps.delay(2e4).then((async () => {
          await this.reportRtt(wQ, "direct", "direct_failed"), await this.reportRtt(sQ(wQ), "cf", "cf_failed")
        }))
      }
      async afterAliasJoinFailed(QQ, WQ, XQ) {
        let {
          gameServerUnreachable: wQ,
          joinFailure: qQ
        } = WQ;
        if (void 0 === qQ) return null;
        if ("refused" === qQ.at) return this.reportArm(), this.deps.nI("game_server_route", "cf_join_refused", qQ.code), null;
        const TQ = this.recoveryArm();
        if (this.reportArm(TQ), this.deps.nI("game_server_route", `cf_join_failed:${qQ.at}`, qQ.code), null !== XQ && this.deps.nI("game_server_route", "cf_failed_since_route", XQ), this.aliasFailedAt = this.deps.now(), void 0 === wQ) return null;
        const zQ = this.stored();
        return "cloudflare" !== (null === zQ || void 0 === zQ ? void 0 : zQ.route) || "on" !== TQ && zQ.aliasFailedOnce || "ours" !== (await this.probeHost(QQ)).answer ? (this.store({
          route: "direct",
          until: this.deps.now() + 36e5
        }), null) : "holdout" === TQ ? (this.store({
          ...zQ,
          aliasFailedOnce: !0
        }), null) : "cloudflare" === this.heldRoute() && lQ.has(qQ.at) ? "retry" : null
      }
      recoveryArm() {
        if (this.deps.now() >= aQ) return "on";
        const QQ = this.stored();
        return void 0 !== (null === QQ || void 0 === QQ ? void 0 : QQ.recoveryArm) ? QQ.recoveryArm : (this.pageArm ??= 100 * this.deps.random() < 20 ? "holdout" : "on", null !== QQ && this.store(QQ), this.pageArm)
      }
      reportArm(QQ) {
        this.armReported || this.deps.now() >= aQ || (this.armReported = !0, this.deps.nI("game_server_route", "holdout" === (null !== QQ && void 0 !== QQ ? QQ : this.recoveryArm()) ? "alias_recovery_holdout" : "alias_recovery_on", 0))
      }
      checksJoinsTo(QQ) {
        return PQ(QQ) && "direct" !== this.heldRoute()
      }
      settle(QQ) {
        let {
          outcome: WQ,
          cfMs: XQ
        } = QQ;
        return this.deps.nI("game_server_route", WQ, XQ), "blocked" === WQ && (this.store({
          route: "cloudflare",
          until: this.deps.now() + 1728e5
        }), !0)
      }
      async check(QQ) {
        const WQ = this.probeHost(sQ(QQ));
        if ("none" !== (await this.probeHost(QQ)).answer) return {
          outcome: "direct_reachable",
          cfMs: 0
        };
        const {
          answer: XQ,
          ms: wQ
        } = await WQ;
        return "ours" !== XQ && "ipv6Refused" !== XQ ? {
          outcome: "cf_unreachable",
          cfMs: 0
        } : "none" !== (await this.probeHost(QQ)).answer ? {
          outcome: "direct_reachable",
          cfMs: wQ
        } : {
          outcome: "ipv6Refused" === XQ ? "blocked_ipv6" : "blocked",
          cfMs: wQ
        }
      }
      async reportRtt(QQ, WQ, XQ) {
        const wQ = "ours" === (await this.probeHost(QQ)).answer ? await this.probeHost(QQ) : null;
        "ours" === (null === wQ || void 0 === wQ ? void 0 : wQ.answer) ? this.deps.nI("game_server_rtt", WQ, wQ.ms): this.deps.nI("game_server_rtt", XQ, 0)
      }
      probeHost(QQ) {
        return this.deps.probe(`https://${QQ}/version`, 8e3)
      }
      stored() {
        return function(QQ) {
          if ("object" !== typeof QQ || null === QQ) return null;
          const {
            route: WQ,
            until: XQ,
            aliasFailedOnce: wQ,
            recoveryArm: qQ
          } = QQ;
          return "cloudflare" !== WQ && "direct" !== WQ || "number" !== typeof XQ ? null : {
            route: WQ,
            until: XQ,
            ...!0 === wQ ? {
              aliasFailedOnce: wQ
            } : {},
            ..."on" === qQ || "holdout" === qQ ? {
              recoveryArm: qQ
            } : {}
          }
        }(this.deps.storage.getItem(hQ))
      }
      heldRoute() {
        const QQ = this.stored();
        return null !== QQ && QQ.until > this.deps.now() ? QQ.route : null
      }
      store(QQ) {
        var WQ, XQ, wQ, qQ;
        const TQ = null !== (WQ = null !== (XQ = null !== (wQ = QQ.recoveryArm) && void 0 !== wQ ? wQ : null === (qQ = this.stored()) || void 0 === qQ ? void 0 : qQ.recoveryArm) && void 0 !== XQ ? XQ : this.pageArm) && void 0 !== WQ ? WQ : void 0;
        this.deps.storage.setItem(hQ, void 0 === TQ ? QQ : {
          ...QQ,
          recoveryArm: TQ
        })
      }
    }({
      storage: bQ.i,
      probe: async function(QQ, WQ) {
        const XQ = performance.now(),
          wQ = await (0, IQ.n)(QQ, {
            cache: "no-store"
          }, WQ, (async QQ => {
            const WQ = Math.round(performance.now() - XQ);
            return {
              answer: await iQ(QQ),
              ms: WQ
            }
          }));
        return null !== wQ && void 0 !== wQ ? wQ : {
          answer: "none",
          ms: 0
        }
      },
      nI: jQ.A,
      enabled: !(0, vQ.isDiscordClient)(),
      now: Date.now,
      random: Math.random,
      delay: QQ => new Promise((WQ => {
        setTimeout(WQ, QQ)
      })),
      sleep: dQ.e,
      seatLegs: HQ.g
    });
    var AQ = XQ(1783),
      RQ = XQ(9306);

    function EQ(QQ) {
      return async (WQ, XQ, zQ, sQ, PQ) => {
        let JQ, pQ = performance.now();
        if ((0, wQ.G)(zQ)) {
          if (PQ.aborted) return uQ();
          const QQ = WQ instanceof qQ.h ? null : (0, RQ.o)((0, RQ.h)(WQ, XQ));
          let wQ = await (null !== QQ && void 0 !== QQ ? QQ : kQ(WQ, XQ, sQ));
          if (null !== QQ && performance.now() - wQ.at > LQ && !PQ.aborted) {
            const QQ = await kQ(WQ, XQ, sQ);
            QQ.result.isError() && !wQ.result.isError() || (wQ = QQ)
          }
          const TQ = wQ.result;
          if (pQ = wQ.at, PQ.aborted || yQ.g.matchmakingEnded(TQ.isError() ? null : wQ.at), TQ.isError()) {
            const QQ = TQ.asError();
            return console.log("Join room did not succeed, reason:", QQ.message), QQ.forward()
          }
          JQ = TQ.getValue(), cQ.afterMatchmade(JQ.endpoint)
        } else {
          yQ.g.skipPlayWait();
          const QQ = SQ(zQ.replace("https://", "").replace("http://", ""));
          if (QQ.isError()) return QQ.asError().forward();
          JQ = {
            endpoint: QQ.getValue(),
            gameNameWithVariation: XQ,
            lobbyName: WQ instanceof qQ.h ? WQ.getLobbyName() : WQ
          }
        }
        if (PQ.aborted) return uQ();
        console.log(`Connecting to ${JQ.gameNameWithVariation} in lobby ${JQ.lobbyName} on game server ${JQ.endpoint}`), rQ.k.mB("matchmakeAndPlayStepCompleted", {
          step: TQ.h.REQUEST_TO_MATCHMAKING,
          totalSubSteps: 1
        }), (0, jQ.m)(), BQ.d.markGameLoadStart((0, AQ.e)()), (0, DQ.t)({
          websocketUrl: JQ.endpoint,
          gameNameWithVariation: JQ.gameNameWithVariation,
          lobbyName: JQ.lobbyName
        }), rQ.k.mB("loadingScreenState", "loadingPage:loadingGame");
        const GQ = async () => {
          const QQ = await async function(QQ, WQ, XQ, wQ) {
            const qQ = await fQ(QQ, WQ, XQ);
            if (!qQ.isError() && !wQ.aborted) {
              const {
                endpoint: QQ,
                gameNameWithVariation: WQ,
                lobbyName: XQ
              } = qQ.getValue();
              (0, DQ.t)({
                websocketUrl: QQ,
                gameNameWithVariation: WQ,
                lobbyName: XQ
              })
            }
            return qQ
          }(WQ, XQ, sQ, PQ);
          return QQ.isError() || (JQ = QQ.getValue(), pQ = performance.now()), QQ
        }, UQ = !(0, wQ.G)(zQ), bQ = WQ => QQ({
          place: JQ,
          userContext: sQ,
          direct: UQ,
          matchedAt: pQ,
          rematch: GQ
        }, WQ), vQ = () => FQ(new URL(JQ.endpoint).hostname), dQ = vQ() ? performance.now() : null, HQ = UQ ? {
          result: await bQ(PQ),
          blockedAt: null,
          failureChecked: !1
        } : await async function(QQ, WQ, XQ) {
          const wQ = new IQ.e(XQ),
            qQ = new AbortController;
          let TQ = null,
            zQ = !1,
            sQ = null;
          const FQ = cQ.checkStalledJoin(QQ, qQ.signal, (() => zQ)).then((QQ => {
            sQ = QQ, "blocked" === QQ && (TQ = performance.now(), wQ.controller.abort())
          }));
          try {
            const QQ = await WQ(wQ.signal);
            return zQ = QQ.isError() && void 0 !== QQ.asError().debugResult.gameServerUnreachable, qQ.abort(), zQ && await FQ, {
              result: QQ,
              blockedAt: TQ,
              failureChecked: "reported" === sQ
            }
          } finally {
            qQ.abort(), wQ.unfollow()
          }
        }(JQ.endpoint, bQ, PQ);
        let aQ = null !== dQ && void 0 !== dQ ? dQ : HQ.blockedAt,
          lQ = HQ.result;
        const hQ = () => null === aQ ? null : performance.now() - aQ,
          iQ = lQ.isError() && !0 === lQ.asError().debugResult.rematch;
        let EQ = null;
        if (!lQ.isError() || UQ || PQ.aborted || iQ || null !== HQ.blockedAt || HQ.failureChecked || (EQ = await cQ.afterJoinFailed(JQ.endpoint, lQ.asError().debugResult, hQ())), lQ.isError() && !UQ && ("reroute" === EQ || !PQ.aborted && (iQ || null !== HQ.blockedAt))) {
          if (iQ || (aQ ??= performance.now(), rQ.k.mB("gameServerRouteSwitched")), PQ.aborted) return CQ(aQ), uQ();
          console.log("Matchmaking again");
          const QQ = await GQ();
          if (QQ.isError()) return QQ.asError().forward();
          if (PQ.aborted) return CQ(aQ), uQ();
          lQ = await bQ(PQ), EQ = null, !lQ.isError() || PQ.aborted || iQ && !vQ() || (EQ = await cQ.afterJoinFailed(JQ.endpoint, lQ.asError().debugResult, hQ()))
        }
        if (lQ.isError() && "retry" === EQ && !PQ.aborted && cQ.takeAutoRetry()) {
          if (!await cQ.waitToRetry(PQ)) return uQ();
          console.log("Joining through Cloudflare again");
          const QQ = await GQ();
          if (PQ.aborted) return uQ();
          if (QQ.isError()) return cQ.afterAutoRetryFailed(null), lQ.asError().forward();
          if (lQ = await bQ(PQ), lQ.isError() && !PQ.aborted) {
            const QQ = lQ.asError().debugResult;
            await cQ.afterJoinFailed(JQ.endpoint, QQ, null), cQ.afterAutoRetryFailed(QQ)
          } else if (!lQ.isError()) {
            var tQ;
            cQ.afterAutoRetryJoined(null !== (tQ = hQ()) && void 0 !== tQ ? tQ : 0)
          }
        }
        return lQ.isError() ? (!0 === lQ.asError().debugResult.fX && PQ.aborted && CQ(aQ), lQ.asError().forward()) : (cQ.afterJoined(JQ.endpoint), (0, VQ.L)(), window.gtag ? window.gtag("event", "conversion", {
          send_to: "AW-16469618203/ipUBCJKWoJUZEJvcqa09"
        }) : console.error("window.gtag not defined"), gQ.e.value({
          gameNameWithVariation: JQ.gameNameWithVariation,
          lobbyName: JQ.lobbyName
        }))
      }
    }

    function CQ(QQ) {
      null !== QQ && cQ.afterAliasJoinLeft(performance.now() - QQ)
    }

    function uQ() {
      return gQ.e.errorWithCode("Left the game while it loaded", TQ.h.REQUEST_TO_MATCHMAKING, {
        severity: "low",
        fX: !0
      })
    }
    setTimeout((() => {
      window.initialD ? Date.now = window.initialD : console.error("window.initialD not defined")
    }), 3e3);
    const LQ = 1e4;

    function kQ(QQ, WQ, XQ) {
      return fQ(QQ, WQ, XQ).then((QQ => ({
        result: QQ,
        at: performance.now()
      })))
    }
    async function fQ(QQ, WQ, XQ) {
      return (0, wQ.G)(QQ) || QQ instanceof qQ.h || !(QQ.length > JQ.K) ? await pQ.e.matchmakePlayer(XQ, QQ, WQ, (0, UQ.c)()).then((QQ => {
        if (!1 === QQ.succeeded) return gQ.e.errorWithCode(QQ.failReason, TQ.h.REQUEST_TO_MATCHMAKING, {
          severity: "low"
        });
        const {
          gameServerHost: WQ,
          lobbyName: XQ,
          gameNameWithVariation: wQ
        } = QQ, qQ = SQ(cQ.hostFor(WQ));
        return qQ.isError() ? qQ.asError().forward() : gQ.e.value({
          endpoint: qQ.getValue(),
          gameNameWithVariation: wQ,
          lobbyName: XQ
        })
      })).catch((QQ => (console.error("Bad response from the matchmaking server:", QQ), gQ.e.errorWithCode(QQ.toString(), TQ.h.REQUEST_TO_MATCHMAKING, {
        error: QQ,
        severity: "medium"
      })))) : (console.error("Invalid lobby ID:", QQ), gQ.e.errorWithCode("This lobby link's name is too long. Ask for a new link.", TQ.h.REQUEST_TO_MATCHMAKING, {
        severity: "low"
      }))
    }

    function SQ(QQ) {
      const WQ = GQ.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(QQ);
      return WQ.isError() ? gQ.e.errorWithCode(WQ.asError().message, TQ.h.CONNECT_TO_GAME_SERVER, {
        severity: "medium"
      }) : gQ.e.value(WQ.getValue())
    }
    window.leaveGame = () => {
      (0, DQ.n)("/")
    }
  },
  9145: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => zQ
    });
    var wQ = XQ(9153),
      qQ = XQ(663),
      TQ = XQ(158);

    function zQ(QQ) {
      var WQ, XQ;
      if ((0, qQ.G)(QQ)) return !0;
      const zQ = null !== (WQ = null === (XQ = TQ.siteUsedData[TQ.siteUsed]) || void 0 === XQ ? void 0 : XQ.adConfig.showRewardedAds) && void 0 !== WQ && WQ;
      for (const qQ in QQ) {
        const WQ = QQ[qQ];
        if (null !== WQ && void 0 !== WQ && WQ.items)
          for (const QQ in WQ.items)
            if ((0, wQ.k)(WQ.items[QQ], zQ)) return !1
      }
      return !0
    }
  },
  36872: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ) {
      for (let XQ = 0; XQ < QQ.length; XQ++)
        if (QQ[XQ].identifier === WQ) return QQ[XQ];
      return null
    }

    function qQ(QQ, WQ) {
      return null !== wQ(QQ, WQ)
    }
    XQ.d(WQ, {
      e: () => wQ,
      h: () => qQ
    })
  },
  36883: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => gQ,
      e: () => rQ,
      f: () => VQ,
      g: () => PQ
    });
    var wQ = XQ(26),
      qQ = XQ(2506),
      TQ = XQ(2510),
      zQ = XQ(2518),
      sQ = XQ(2585),
      FQ = XQ(31);

    function PQ(QQ, WQ) {
      return (!(0, zQ.d)() || 0 === QQ && 0 === WQ) && (0, TQ.w)(qQ.j.Joystick, 0, QQ, WQ, 0)
    }
    const gQ = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function JQ(QQ) {
      return QQ.classList.contains("TouchKeyHit") && IQ() ? null : QQ.firstElementChild
    }

    function rQ(QQ) {
      return QQ.classList.contains("TouchKeyHit") && !QQ.classList.contains("CanvasZone") ? {
        whole: !IQ(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: jQ(JQ(QQ))
      }
    }

    function IQ() {
      return document.documentElement.classList.contains(sQ.m)
    }

    function jQ(QQ) {
      return !(QQ instanceof HTMLElement) || QQ.offsetWidth <= 0 || QQ.offsetHeight <= 0 ? null : {
        width: QQ.offsetWidth,
        height: QQ.offsetHeight
      }
    }

    function BQ(QQ, WQ) {
      const XQ = QQ => Math.min(65535, Math.round(4 * QQ));
      return (XQ(QQ) | XQ(WQ) << 16) >>> 0
    }

    function yQ(QQ) {
      return {
        x: QQ.left + QQ.width / 2,
        y: QQ.top + QQ.height / 2,
        radius: Math.min(QQ.width, QQ.height) / 2
      }
    }
    const VQ = new class {
      constructor(QQ) {
        this.write = QQ, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        WQ ? this.elements.set(QQ, {
          element: WQ,
          hidden: XQ
        }) : this.elements.delete(QQ), this.measureOne(QQ)
      }
      measure() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = QQ.left, this.canvasTop = QQ.top;
        for (const WQ of this.elements.keys()) this.measureOne(WQ)
      }
      hitZone(QQ, WQ) {
        let XQ = null,
          wQ = 1;
        for (const qQ of this.elements.keys()) {
          const TQ = this.shown(qQ);
          if (!TQ) continue;
          const {
            rect: zQ,
            element: sQ
          } = TQ, FQ = yQ(zQ), PQ = Math.max(0, zQ.width / 2 - FQ.radius), gQ = Math.max(0, zQ.height / 2 - FQ.radius), rQ = Math.max(0, Math.abs(QQ - FQ.x) - PQ), IQ = Math.max(0, Math.abs(WQ - FQ.y) - gQ), BQ = sQ.firstElementChild;
          let VQ = Math.hypot(rQ, IQ) / FQ.radius;
          const DQ = jQ(JQ(sQ));
          DQ && (VQ = Math.min(VQ, Math.max(2 * Math.abs(QQ - FQ.x) / DQ.width, 2 * Math.abs(WQ - FQ.y) / DQ.height))), VQ < wQ && (XQ = {
            code: qQ,
            element: sQ,
            key: BQ,
            ...FQ
          }, wQ = VQ)
        }
        return XQ
      }
      measureOne(QQ) {
        const WQ = this.shown(QQ);
        if (!WQ) return void this.write(qQ.j.TouchZone, QQ, 0, 0, 0);
        const {
          rect: XQ,
          element: wQ
        } = WQ, TQ = yQ(XQ);
        this.write(qQ.j.TouchZone, QQ, TQ.x - this.canvasLeft, TQ.y - this.canvasTop, BQ(XQ.width, XQ.height));
        const zQ = jQ(JQ(wQ));
        this.write(qQ.j.TouchZone, 256 | QQ, 0, 0, zQ ? BQ(zQ.width, zQ.height) : 0)
      }
      shown(QQ) {
        const WQ = this.elements.get(QQ),
          XQ = wQ.b.get("worldPanelHud");
        if (!WQ || WQ.hidden || "none" === XQ) return null;
        const qQ = WQ.element.getBoundingClientRect();
        return qQ.width <= 0 || qQ.height <= 0 ? null : {
          rect: qQ,
          element: WQ.element
        }
      }
    }(TQ.w);
    (0, FQ.o)(sQ.h, (() => {
      VQ.measure()
    }))
  },
  37149: (QQ, WQ, XQ) => {
    function wQ(QQ) {
      return "fetch" === QQ || "timeout" === QQ || "integrity" === QQ ? "download" : "browser"
    }
    XQ.d(WQ, {
      c: () => qQ,
      f: () => zQ,
      h: () => FQ,
      i: () => sQ,
      m: () => wQ,
      o: () => TQ
    });
    const qQ = "https://discord.gg/playbloxd";

    function TQ(QQ) {
      return "download" === QQ ? {
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

    function zQ(QQ, WQ) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: WQ ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: QQ.code
        },
        discordLink: WQ,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function sQ() {
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

    function FQ(QQ, WQ, XQ) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: XQ ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: QQ.reason
        },
        discordLink: null === QQ.name,
        confirm: WQ ? "general:reconnect" : QQ.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  37183: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ) {
      return null === QQ || null === WQ ? QQ === WQ : QQ[0] === WQ[0] && QQ[1] === WQ[1] && QQ[2] === WQ[2]
    }

    function qQ(QQ) {
      return [QQ[0] + .5, QQ[1] + .5, QQ[2] + .5]
    }
    XQ.d(WQ, {
      c: () => qQ,
      e: () => wQ
    })
  },
  37152: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => FQ,
      f: () => sQ
    });
    const wQ = {
        files: {
          "debugLog.ts": "export function debugLog(message: string): void {\n\tconsole.log(`[debug] ${message}`)\n}\n",
          "index.ts": 'import type { PlayerId } from "@bloxd"\nimport { debugLog } from "./debugLog"\n\nonPlayerJoin = (player: PlayerId) => {\n\tapi.log(`Player ${player} joined - Love from Debug Plugin!`)\n}\n\nexport { debugLog }\n'
        },
        dependencies: [],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  debugLog: () => debugLog\n});\nmodule.exports = __toCommonJS(index_exports);\n\n// world-code-plugin:debugLog.ts\nfunction debugLog(message) {\n  console.log(`[debug] ${message}`);\n}\n\n// world-code-plugin:index.ts\nonPlayerJoin = (player) => {\n  api.log(`Player ${player} joined - Love from Debug Plugin!`);\n};\n',
        types: "declare function debugLog(message: string): void;\n\nexport { debugLog };\n"
      },
      qQ = {
        files: {
          "index.ts": 'import type { CustomTextStyling, DialogueText, PlayerId, SpeechVoice } from "@bloxd"\nimport { clearTimeout, setTimeout, TimeoutId } from "@plugins/helpers"\n\n/** Long enough to read most lines once they have appeared. */\nconst DEFAULT_DURATION_MS = 6000\n\nexport type DialogueOpts = {\n\t/** Shown above the line, such as a name. */\n\tspeakerName?: string | CustomTextStyling\n\t/** A preset such as "regular" or "gruff", or every synth parameter. Omit for a silent line. */\n\tvoice?: SpeechVoice\n\t/** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n\tdurationMs?: number\n}\n\nconst hideTimeouts: Record<PlayerId, TimeoutId> = {}\n\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item\'s icon inline\n * @param opts - The speaker\'s name, the voice that reads it out, and how long it stays up\n */\nexport function sayDialogue(playerId: PlayerId, text: DialogueText, opts: DialogueOpts = {}) {\n\tif (hideTimeouts[playerId] !== undefined) {\n\t\tclearTimeout(hideTimeouts[playerId])\n\t\t// Cleared first, so a line said again replays rather than matching the value already set\n\t\tapi.setClientOption(playerId, "dialogue", null)\n\t}\n\tapi.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice })\n\thideTimeouts[playerId] = setTimeout(\n\t\t() => {\n\t\t\tclearDialogue(playerId)\n\t\t},\n\t\topts.durationMs ?? DEFAULT_DURATION_MS,\n\t\tplayerId,\n\t)\n}\n\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\nexport function clearDialogue(playerId: PlayerId) {\n\tif (hideTimeouts[playerId] === undefined) {\n\t\treturn\n\t}\n\tclearTimeout(hideTimeouts[playerId])\n\tdelete hideTimeouts[playerId]\n\tapi.setClientOption(playerId, "dialogue", null)\n}\n\nonPlayerLeave = (playerId: PlayerId) => {\n\tdelete hideTimeouts[playerId]\n}\n'
        },
        dependencies: ["helpers"],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  clearDialogue: () => clearDialogue,\n  sayDialogue: () => sayDialogue\n});\nmodule.exports = __toCommonJS(index_exports);\nvar import_helpers = require("@plugins/helpers");\nvar DEFAULT_DURATION_MS = 6e3;\nvar hideTimeouts = {};\nfunction sayDialogue(playerId, text, opts = {}) {\n  if (hideTimeouts[playerId] !== void 0) {\n    (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n    api.setClientOption(playerId, "dialogue", null);\n  }\n  api.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice });\n  hideTimeouts[playerId] = (0, import_helpers.setTimeout)(\n    () => {\n      clearDialogue(playerId);\n    },\n    opts.durationMs ?? DEFAULT_DURATION_MS,\n    playerId\n  );\n}\nfunction clearDialogue(playerId) {\n  if (hideTimeouts[playerId] === void 0) {\n    return;\n  }\n  (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n  delete hideTimeouts[playerId];\n  api.setClientOption(playerId, "dialogue", null);\n}\nonPlayerLeave = (playerId) => {\n  delete hideTimeouts[playerId];\n};\n',
        types: "import { CustomTextStyling, SpeechVoice, PlayerId, DialogueText } from '@bloxd';\n\ntype DialogueOpts = {\n    /** Shown above the line, such as a name. */\n    speakerName?: string | CustomTextStyling;\n    /** A preset such as \"regular\" or \"gruff\", or every synth parameter. Omit for a silent line. */\n    voice?: SpeechVoice;\n    /** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n    durationMs?: number;\n};\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item's icon inline\n * @param opts - The speaker's name, the voice that reads it out, and how long it stays up\n */\ndeclare function sayDialogue(playerId: PlayerId, text: DialogueText, opts?: DialogueOpts): void;\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\ndeclare function clearDialogue(playerId: PlayerId): void;\n\nexport { clearDialogue, sayDialogue };\nexport type { DialogueOpts };\n"
      },
      TQ = {
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
      zQ = {
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
      sQ = {
        debug: {
          name: "debug",
          specifier: "@plugins/debug",
          sourceVfsPath: "/node_modules/@plugins/debug/index.ts",
          typesVfsPath: "/node_modules/@plugins/debug/index.d.ts",
          files: wQ.files,
          dependencies: wQ.dependencies,
          bundledSource: wQ.bundledSource,
          types: wQ.types
        },
        dialogue: {
          name: "dialogue",
          specifier: "@plugins/dialogue",
          sourceVfsPath: "/node_modules/@plugins/dialogue/index.ts",
          typesVfsPath: "/node_modules/@plugins/dialogue/index.d.ts",
          files: qQ.files,
          dependencies: qQ.dependencies,
          bundledSource: qQ.bundledSource,
          types: qQ.types
        },
        helpers: {
          name: "helpers",
          specifier: "@plugins/helpers",
          sourceVfsPath: "/node_modules/@plugins/helpers/index.ts",
          typesVfsPath: "/node_modules/@plugins/helpers/index.d.ts",
          files: TQ.files,
          dependencies: TQ.dependencies,
          bundledSource: TQ.bundledSource,
          types: TQ.types
        },
        sessionBasedGame: {
          name: "sessionBasedGame",
          specifier: "@plugins/sessionBasedGame",
          sourceVfsPath: "/node_modules/@plugins/sessionBasedGame/index.ts",
          typesVfsPath: "/node_modules/@plugins/sessionBasedGame/index.d.ts",
          files: zQ.files,
          dependencies: zQ.dependencies,
          bundledSource: zQ.bundledSource,
          types: zQ.types
        }
      };

    function FQ(QQ) {
      const WQ = [],
        XQ = new Set,
        wQ = QQ => {
          if (XQ.has(QQ)) return;
          const qQ = sQ[QQ];
          if (qQ) {
            XQ.add(QQ);
            for (const QQ of qQ.dependencies) wQ(QQ);
            WQ.push(QQ)
          }
        };
      for (const qQ of QQ) wQ(qQ);
      return WQ
    }
  },
  37158: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => FQ,
      g: () => sQ,
      h: () => zQ,
      j: () => TQ,
      l: () => PQ,
      o: () => gQ,
      q: () => jQ,
      t: () => IQ,
      x: () => rQ
    });
    var wQ = XQ(1273);
    const qQ = ["quickjs", "ses"];

    function TQ(QQ) {
      return qQ.includes(QQ)
    }

    function zQ(QQ) {
      return QQ === wQ.j || QQ === wQ.k
    }

    function sQ(QQ, WQ) {
      return QQ === wQ.j && WQ === wQ.k || QQ === wQ.k && WQ === wQ.j
    }

    function FQ(QQ) {
      const WQ = wQ.k in QQ,
        XQ = wQ.j in QQ;
      return WQ && XQ ? null : WQ ? wQ.k : XQ ? wQ.j : null
    }

    function PQ(QQ, WQ, XQ) {
      const wQ = `${WQ}/`;
      return QQ.filter((QQ => QQ.startsWith(wQ))).map((QQ => [QQ, `${XQ}/${QQ.slice(wQ.length)}`]))
    }

    function gQ(QQ, WQ) {
      let XQ = 0;
      for (const [wQ, qQ] of Object.entries(QQ)) wQ !== WQ && (XQ += qQ.length);
      return XQ
    }
    const JQ = "@plugins/";

    function rQ(QQ) {
      return `${JQ}${QQ}`
    }

    function IQ(QQ, WQ) {
      return `/node_modules/@plugins/${QQ}/${WQ}`
    }

    function jQ(QQ) {
      if (!QQ.startsWith(JQ)) return null;
      const WQ = QQ.slice(JQ.length);
      return function(QQ) {
        return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(QQ)
      }(WQ) ? WQ : null
    }
  },
  37163: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => sQ,
      f: () => qQ,
      j: () => zQ,
      l: () => FQ,
      o: () => TQ
    });
    var wQ = XQ(2531);
    const qQ = 5,
      TQ = "[SCHEMATIC]",
      zQ = 1024e4;

    function sQ(QQ) {
      return QQ.endsWith(".bloxdschem") && (0, wQ.t)(QQ.slice(0, -11) + ".ts") && QQ.length <= 64
    }

    function FQ(QQ) {
      return Object.fromEntries(Object.keys(QQ).map((QQ => [QQ, TQ])))
    }
  },
  5196: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => qQ,
      f: () => wQ,
      h: () => TQ,
      l: () => FQ,
      p: () => zQ
    });
    const wQ = ["sine", "triangle", "square", "sawtooth"],
      qQ = 55,
      TQ = {
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

    function zQ(QQ) {
      return "string" !== typeof QQ ? QQ : Object.hasOwn(TQ, QQ) ? TQ[QQ] : null
    }

    function sQ(QQ, WQ, XQ) {
      return Math.min(XQ, Math.max(WQ, QQ))
    }

    function FQ(QQ) {
      const WQ = sQ(QQ.durationMs, 10, 500),
        XQ = sQ(QQ.attackMs, 0, WQ),
        {
          intonation: qQ
        } = QQ;
      return {
        waveform: wQ.includes(QQ.waveform) ? QQ.waveform : "sine",
        pitchHz: sQ(QQ.pitchHz, 20, 4e3),
        glideSemitones: sQ(QQ.glideSemitones, -24, 24),
        durationMs: WQ,
        attackMs: XQ,
        releaseMs: sQ(QQ.releaseMs, 0, WQ - XQ),
        lowpassHz: null === QQ.lowpassHz ? null : sQ(QQ.lowpassHz, 20, 2e4),
        volume: sQ(QQ.volume, 0, 2),
        intonation: {
          variationSemitones: sQ(qQ.variationSemitones, 0, 6),
          declineSemitones: sQ(qQ.declineSemitones, 0, 12),
          questionRiseSemitones: sQ(qQ.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: sQ(qQ.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: sQ(QQ.syllableMs, 25, 200)
      }
    }
  },
  9179: () => {},
  10358: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAHklEQVR4nGNY3x/6nxjMQH2Fcyq8/hODaWA11d0IAPvLyX36T0UzAAAAAElFTkSuQmCC"
  },
  18630: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAC4CAYAAADqkK6nAAAAAXNSR0IArs4c6QAAAuxJREFUeJzt1jFOFHEchuEfxpqeaGusuYDhCpbewMbEwmNYmNBwA0quYLgAtaGF2HuBtVpEWHBNXnBXnqeanUzxT+bNtzMDsOl21nhm8eCnYBvd2c6zxzwFT8N9S7WYmfn0am9mZl6+2H2M87DhLi5/zMzM5/Pvy1u3GrJU5FYt1WJm5svB60c+Ctvo49dvy8urliwVuetL5RuKv7bqG8tSkXt+88afFurN+3czM7P/9sPDnIiNcHZy+Nvv06Pjlc9d9fJrqXxT0bu1VHexUE/Tzfd912JdZ6nIrb1UFop1WSpyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIit3ZUZyeHc3Zy+JBn4T9hqcg9X/fB06Pj337vv/2QH4bNs/x3uvn+72OpyO1cu17MzHx6tTczMy9f7P6L87BlLi5/zMzM5/Pvy1s7lorczop7i5mZLwevH/kobKOPX78tL69aslTkVi3Vkm8sbln1DXXzGUtF7r6lWlo8+CnYRne2Y6mAzfcTBsFAqM32XQcAAAAASUVORK5CYII="
  },
  20579: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJUlEQVR4nGMwsIpkIAYz0FThfyjGymcgVSFMEJtCsBjJCgcgeABOGmAZtndiFgAAAABJRU5ErkJggg=="
  },
  20584: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJ0lEQVR4nGMwsIpkIAYzQBn/kTBWMQYsgtgwA+0UMuBTNIgU4g1wAE6xgffL0CuLAAAAAElFTkSuQmCC"
  },
  20590: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJElEQVR4nGMwsIpkIAYzkKrwPxLGKsZAc4UMaJh8hdQPHoIKAboeZhN3YNlSAAAAAElFTkSuQmCC"
  },
  20597: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMUlEQVR4nGMwsIpkIAYzoAn8R8MM2BSiK/qPrJiQov8wxWQrxMkm2USiPUNS8OANcADc3H37DfNNQQAAAABJRU5ErkJggg=="
  },
  20599: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAKElEQVR4nGMwsIpkIAYzIHH+48AMyApxKfoPU0yRQgZsYkNJIcEABwCQU3/5LLo7QwAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);