export const id = 83;
export const ids = [83];
export const modules = {
  36164: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => aQ,
      c: () => lQ
    });
    var LQ = wQ(53),
      qQ = wQ(1897),
      oQ = wQ(36166),
      DQ = wQ.n(oQ),
      kQ = wQ(4388),
      vQ = wQ(1873),
      mQ = wQ(1447),
      uQ = wQ(96),
      HQ = wQ(114),
      bQ = wQ(317),
      YQ = wQ(1070),
      xQ = wQ.n(YQ),
      AQ = wQ(17),
      tQ = wQ(1079),
      eQ = wQ(1641),
      MQ = wQ(1725),
      GQ = wQ(1690),
      pQ = wQ(1957),
      cQ = wQ(1407),
      CQ = wQ(2032),
      SQ = wQ(1395),
      iQ = wQ(8530),
      WQ = wQ(36171),
      RQ = wQ(36198),
      OQ = wQ(1467),
      sQ = wQ(2349),
      rQ = wQ(1207),
      IQ = wQ(36209);
    var UQ = wQ(9022);
    var NQ = wQ(1107);
    const TQ = wQ(36218),
      KQ = ["enter", "t", "/"];
    let zQ = !1;

    function lQ() {
      return zQ || (0, MQ.isTextEntry)(document.activeElement)
    }

    function jQ() {
      var QQ, FQ;
      (0, CQ.c)();
      const wQ = null !== (QQ = null === (FQ = (0, cQ.d)()) || void 0 === FQ ? void 0 : FQ.getBoundButton("keyboardChannel")) && void 0 !== QQ ? QQ : null;
      return wQ ? (0, NQ.jsx)(pQ.b, {
        className: "ChatInputChannelGlyph",
        glyph: wQ
      }) : null
    }

    function aQ() {
      const {
        t: QQ
      } = (0, rQ.y)(), {
        isTouchScreen: FQ
      } = (0, AQ.l)(["isTouchScreen"]), wQ = (0, SQ.n)(), [oQ, YQ] = (0, LQ.useState)(!1), pQ = (0, LQ.useRef)(oQ), cQ = (0, LQ.useRef)(null), {
        messages: CQ,
        reportedPlayers: lQ,
        channel: aQ
      } = (0, iQ.n)(), fQ = (0, LQ.useRef)(0), VQ = (0, LQ.useRef)(""), hQ = (0, LQ.useRef)(null);
      var JQ;
      JQ = hQ, (0, LQ.useEffect)((() => {
        if (!(0, uQ.isIOS)()) return;
        const QQ = JQ.current;
        let FQ = null;
        const wQ = wQ => {
            const LQ = wQ.changedTouches[0];
            FQ = "none" === getComputedStyle(QQ).pointerEvents ? {
              id: LQ.identifier,
              y: LQ.clientY
            } : null
          },
          LQ = wQ => {
            const LQ = FQ,
              qQ = LQ && (0, IQ.d)(wQ.changedTouches, LQ.id);
            qQ && (wQ.preventDefault(), QQ.scrollBy({
              top: LQ.y - qQ.clientY,
              behavior: "instant"
            }), LQ.y = qQ.clientY)
          };
        return QQ.addEventListener("touchstart", wQ, {
          passive: !0
        }), QQ.addEventListener("touchmove", LQ, {
          passive: !1
        }), () => {
          QQ.removeEventListener("touchstart", wQ), QQ.removeEventListener("touchmove", LQ)
        }
      }), [JQ]);
      const [EQ, nQ] = (0, LQ.useState)(!1), [gQ, PQ] = (0, LQ.useState)(!1), ZQ = (0, LQ.useRef)(EQ), yQ = (0, LQ.useRef)(null), BQ = (0, LQ.useRef)(!1), dQ = (0, LQ.useRef)(null), QF = (0, LQ.useRef)(null), FF = (0, LQ.useRef)(null), wF = (0, LQ.useRef)(DF);
      wF.current = DF;
      const LF = (0, sQ.n)();

      function qF() {
        pQ.current = !1, YQ(!1), QF.current.blur()
      }

      function oF(QQ) {
        ZQ.current = QQ, nQ(QQ)
      }

      function DF() {
        const QQ = QF.current.value;
        QF.current.value = "", kF(QQ)
      }

      function kF(QQ) {
        (0, iQ.l)(QQ), fQ.current = 0, oF(!1)
      }

      function vF(QQ, FQ) {
        0 === fQ.current && (VQ.current = QF.current.value);
        const wQ = (0, iQ.k)(fQ.current + QQ, FQ);
        fQ.current = wQ.stepsBack, QF.current.value = 0 === wQ.stepsBack ? VQ.current : wQ.text, setTimeout((() => {
          QF.current && QF.current.setSelectionRange(-1, -1)
        }), 0)
      }

      function mF() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        hQ.current && (!QQ && ZQ.current || (hQ.current.scrollTop = 1e5))
      }
      return (0, kQ.d)(!0, oQ, "ChatComponent"), (0, LQ.useEffect)((() => (zQ = oQ, () => {
          zQ = !1
        })), [oQ]), (0, mQ.g)("appManagerUpdated|openEverythingMenuName", (() => {
          (0, eQ.n)() && YQ(!1)
        })), (0, LQ.useEffect)((() => {
          QF.current.addEventListener("blur", (QQ => {
            if (null === QF.current) return;
            Array.from(document.querySelectorAll(":hover")).some((QQ => QQ.classList.contains("ChatInputChannel") || QQ.classList.contains("ChatMsgSelectWrapper"))) || ((0, uQ.isMobile)() && pQ.current && "" !== QF.current.value && wF.current(), YQ(!1))
          }));
          const QQ = QQ => {
            cQ.current.contains(QQ.target) || (0, GQ.h)(QQ.target) || YQ(!1)
          };
          document.addEventListener("touchstart", QQ, {
            capture: !0
          });
          const FQ = QQ => {
            (0, RQ.g)(QQ.target) && (pQ.current = !1, YQ(!1))
          };
          document.addEventListener("mousedown", FQ, {
            capture: !0
          });
          const wQ = () => {
              clearTimeout(yQ.current), oF(!0)
            },
            LQ = () => {
              clearTimeout(yQ.current), yQ.current = setTimeout((() => {
                oF(!1), mF()
              }), 4e3)
            },
            oQ = () => {
              document.pointerLockElement ? (YQ(!1), PQ(!0), BQ.current = !1, oF(!1), mF()) : PQ(!1)
            };
          hQ.current.addEventListener("pointermove", (QQ => {
            "touch" === QQ.pointerType || BQ.current || document.pointerLockElement || (BQ.current = !0, clearTimeout(yQ.current))
          })), hQ.current.addEventListener("pointerleave", (QQ => {
            "touch" !== QQ.pointerType && (BQ.current = !1, ZQ.current && LQ())
          })), hQ.current.addEventListener("pointerdown", (QQ => {
            "touch" === QQ.pointerType || document.pointerLockElement || (BQ.current = !0, wQ())
          })), hQ.current.addEventListener("wheel", (QQ => {
            document.pointerLockElement || QQ.deltaY >= 0 && Math.abs(hQ.current.scrollTop) < 1 || (wQ(), BQ.current || (yQ.current = setTimeout((() => {
              oF(!1)
            }), 4e3)))
          }), {
            passive: !0
          }), hQ.current.addEventListener("touchstart", wQ), hQ.current.addEventListener("touchend", LQ), hQ.current.addEventListener("touchcancel", LQ), document.addEventListener("pointerlockchange", oQ);
          const kQ = QQ => {
            if (LF.shown && (pQ.current || ! function(QQ) {
                if ((0, MQ.isTypingInInput)()) return !0;
                const FQ = document.activeElement;
                return (FQ instanceof HTMLButtonElement || "button" === (null === FQ || void 0 === FQ ? void 0 : FQ.getAttribute("role"))) && ["Enter", " "].includes(QQ.key)
              }(QQ)) && "codeEditor" !== AQ.c.get("openInGameMenuName") && "lobbyCodeEditor" !== AQ.c.get("openInGameMenuName") && !qQ.gameBridge.latest("connectedGame").replay)
              if (pQ.current || !(0, eQ.n)()) {
                if (pQ.current) {
                  if ("ArrowUp" === QQ.code || "ArrowDown" === QQ.code) return vF("ArrowUp" === QQ.code ? 1 : -1, !1), void QQ.stopPropagation();
                  if ("Tab" === QQ.code) return iQ.e.selectNextChannel(), QQ.stopPropagation(), void QQ.preventDefault();
                  if (QQ.ctrlKey && XQ.includes(TQ[QQ.keyCode])) return QQ.preventDefault(), void QQ.stopPropagation()
                }
                if ([...KQ, "esc"].includes(DQ()(QQ)))
                  if ("esc" !== DQ()(QQ)) {
                    if (!pQ.current || "/" !== DQ()(QQ)) {
                      if ("t" === DQ()(QQ)) {
                        if (pQ.current) return void QQ.stopPropagation();
                        QQ.preventDefault()
                      }
                      pQ.current && "" !== QF.current.value && wF.current(), QQ.repeat || (pQ.current || "/" === DQ()(QQ) && (QF.current.value = "/", QQ.preventDefault()), YQ(!pQ.current))
                    }
                  } else pQ.current && (YQ(!1), QQ.stopPropagation());
                else pQ.current && QQ.stopPropagation()
              } else KQ.includes(DQ()(QQ)) && (QQ.preventDefault(), QQ.stopPropagation(), (0, eQ.c)(QQ))
          };
          document.addEventListener("keydown", kQ, {
            capture: !0
          });
          const vQ = hQ.current;
          let mQ = !1;
          const HQ = new ResizeObserver((() => {
              mQ && (mQ = !1, mF())
            })),
            bQ = () => {
              mQ = !0, HQ.unobserve(vQ), HQ.observe(vQ)
            };
          dQ.current = bQ;
          const xQ = new MutationObserver(bQ);
          return xQ.observe(vQ, {
            childList: !0,
            subtree: !0
          }), () => {
            document.removeEventListener("keydown", kQ, {
              capture: !0
            }), document.removeEventListener("touchstart", QQ, {
              capture: !0
            }), document.removeEventListener("mousedown", FQ, {
              capture: !0
            }), document.removeEventListener("pointerlockchange", oQ), dQ.current = null, xQ.disconnect(), HQ.disconnect(), clearTimeout(yQ.current)
          }
        }), []), (0, GQ.k)(QF, {
          open: () => {
            YQ(!0)
          },
          close: () => {
            qF()
          },
          submit: () => {
            "" !== QF.current.value && DF(), qF()
          },
          stepHistory: () => {
            vF(1, !0)
          },
          sendLine: QQ => {
            kF(QQ), qF()
          },
          selectNextChannel: () => {
            iQ.e.selectNextChannel()
          }
        }), (0, LQ.useEffect)((() => {
          var QQ;
          (pQ.current = oQ, QF.current) && (oQ ? (fQ.current = 0, QF.current.focus()) : (QF.current.blur(), null === (QQ = dQ.current) || void 0 === QQ || QQ.call(dQ)))
        }), [oQ]),
        function(QQ, FQ) {
          (0, LQ.useLayoutEffect)((() => {
            if (!FQ) return;
            UQ.e.hold();
            const wQ = QQ.current.closest(".InGameHeaderAndChat"),
              LQ = window.visualViewport;
            let qQ = "";
            const oQ = () => {
              const QQ = `${LQ.offsetTop+LQ.height}px`;
              QQ !== qQ && (qQ = QQ, wQ.style.setProperty("--keyboard-top", QQ))
            };
            return oQ(), LQ.addEventListener("resize", oQ), LQ.addEventListener("scroll", oQ), () => {
              LQ.removeEventListener("resize", oQ), LQ.removeEventListener("scroll", oQ), wQ.style.removeProperty("--keyboard-top"), UQ.e.release()
            }
          }), [QQ, FQ])
        }(cQ, oQ && FQ), (0, NQ.jsx)(NQ.Fragment, {
          children: (0, NQ.jsxs)("div", {
            ref: cQ,
            className: xQ()("Chat", {
              Chatting: oQ
            }),
            "data-camera-keeper": oQ ? "" : void 0,
            children: [(0, NQ.jsx)("div", {
              ref: hQ,
              className: xQ()("ChatMessages", {
                HideScrollbar: !EQ && !oQ,
                NoScrolling: !(0, uQ.isMobile)() && gQ
              }),
              children: (0, NQ.jsx)(WQ.d, {
                messages: CQ,
                reportedPlayers: lQ
              })
            }), FQ && !oQ && (0, NQ.jsx)("button", {
              type: "button",
              className: "ChatIconWrapper SmallTextLight",
              "aria-label": QQ("general:chat"),
              ...(0, OQ.i)((() => {
                YQ(!0), FF.current.style.display = "flex", (0, uQ.isIOS)() && QF.current.focus()
              }), "pointerup"),
              children: (0, NQ.jsx)(tQ.c, {
                name: "comment-dots",
                className: "ChatIcon"
              })
            }), (0, NQ.jsxs)("div", {
              ref: FF,
              className: "ChatInputWrapper",
              style: {
                display: "" + (oQ ? "flex" : "none")
              },
              children: [aQ && (0, NQ.jsx)("button", {
                type: "button",
                className: "ChatInputChannel",
                style: {
                  backgroundColor: aQ.elementBgColor
                },
                onClick: QQ => {
                  iQ.e.selectNextChannel(), QF.current.focus()
                },
                children: (0, NQ.jsx)("span", {
                  className: "SmallTextBold",
                  children: (0, NQ.jsx)(vQ.e, {
                    text: aQ.elementContent
                  })
                })
              }), aQ && wQ && (0, NQ.jsx)(jQ, {}), (0, NQ.jsx)("input", {
                className: "ChatInput",
                maxLength: bQ.hd,
                ref: QF,
                spellCheck: "false",
                autoComplete: "off",
                autoCorrect: "off",
                "aria-label": QQ("general:chat"),
                placeholder: aQ ? `${aQ.channelName} Chat${"touchOnly"===(0,HQ.e)()||wQ?"":" [Tab]"}` : ""
              })]
            })]
          })
        })
    }
    const XQ = ["W", "S", "D", "N", "T", "<tab>", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "<page-up>", "<page-down>", "B", "O", "H", "J", "F", "G", "J", "M", "<enter>", "L", "K", "E", "P", "R", "O", "U"]
  },
  36171: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => WQ
    });
    var LQ = wQ(53),
      qQ = wQ(1070),
      oQ = wQ.n(qQ),
      DQ = wQ(8533),
      kQ = wQ(22),
      vQ = wQ(2290),
      mQ = wQ(3462),
      uQ = wQ(1988),
      HQ = wQ(17),
      bQ = wQ(1873),
      YQ = wQ(36180),
      xQ = wQ(2088),
      AQ = wQ(36185),
      tQ = wQ(2523),
      eQ = wQ(2501),
      MQ = wQ(2494),
      GQ = wQ(3479),
      pQ = wQ(36190),
      cQ = wQ(3009),
      CQ = wQ(1927),
      SQ = wQ(1107);

    function iQ(QQ) {
      for (let wQ = QQ.length - 1; wQ >= 0; wQ--) {
        const LQ = "string" === typeof(FQ = QQ[wQ]) ? FQ : "str" in FQ && "string" === typeof FQ.str ? FQ.str : "";
        if ("" !== LQ.trim()) return LQ
      }
      var FQ;
      return ""
    }

    function WQ(QQ) {
      let {
        messages: FQ,
        reportedPlayers: wQ
      } = QQ;
      return (0, SQ.jsx)(SQ.Fragment, {
        children: FQ.map((QQ => (0, SQ.jsx)(RQ, {
          message: QQ,
          reportedPlayers: wQ
        }, QQ.clientChatMsgId)))
      })
    }
    const RQ = (0, LQ.memo)((function(QQ) {
      var FQ;
      let {
        message: wQ,
        reportedPlayers: qQ
      } = QQ;
      const WQ = (0, LQ.useRef)(null),
        [RQ] = (0, LQ.useState)(cQ.h),
        {
          author: OQ
        } = wQ,
        sQ = null === OQ || void 0 === OQ ? void 0 : OQ.id,
        rQ = null !== (FQ = null === OQ || void 0 === OQ ? void 0 : OQ.name) && void 0 !== FQ ? FQ : void 0,
        IQ = (0, uQ.d)(rQ),
        UQ = null !== OQ && void 0 !== OQ && OQ.profileEffect ? xQ.d[OQ.profileEffect] : void 0,
        NQ = null !== OQ && !OQ.local,
        TQ = null === OQ && null !== wQ.serverChatMsgId,
        KQ = (0, CQ.g)("hiddenPlayerNames", (QQ => (0, AQ.g)(NQ, rQ, QQ))),
        zQ = null === wQ.serverChatMsgId || null === OQ ? null : {
          text: iQ(wQ.content),
          serverChatMsgId: wQ.serverChatMsgId,
          authorId: OQ.id
        },
        lQ = TQ || null !== zQ && !qQ.includes(sQ),
        jQ = (0, mQ.g)(NQ && null !== rQ && void 0 !== rQ ? rQ : null),
        aQ = (0, MQ.k)(WQ);
      (0, LQ.useEffect)((() => () => {
        MQ.e.closeIfOwner(WQ)
      }), []);
      const XQ = () => {
          TQ ? kQ.l.GA("OpenReportMenu", {
            playerEId: null,
            playerName: void 0,
            Om: (0, DQ.e)(wQ.content),
            serverChatMsgId: wQ.serverChatMsgId
          }) : null !== zQ ? kQ.l.GA("OpenReportMenu", {
            playerEId: sQ,
            playerName: rQ,
            Om: zQ.text,
            serverChatMsgId: zQ.serverChatMsgId
          }) : console.warn("Reporting a chat message the server never acknowledged")
        },
        fQ = void 0 === rQ ? [] : (0, GQ.c)(jQ, rQ, zQ);
      return (0, SQ.jsxs)("div", {
        ref: WQ,
        className: oQ()("MessageWrapper", {
          ChatMsgSelectWrapper: sQ,
          Still: RQ
        }),
        onContextMenu: KQ ? QQ => {
          (0, tQ.e)(WQ, QQ, {
            ...(0, AQ.c)(sQ, rQ),
            showLocation: !1,
            status: null,
            extraActions: lQ ? [{
              icon: "flag",
              text: "Report",
              onClick: XQ
            }] : [],
            moderationActions: (0, pQ.d)(rQ),
            friendRequestSource: "chat"
          }, HQ.c.get("isTouchScreen"))
        } : void 0,
        onPointerDown: KQ ? QQ => {
          (0, eQ.b)(QQ, (() => (0, AQ.c)(sQ, rQ).playerSocialPreview))
        } : void 0,
        children: [UQ && (0, SQ.jsx)(UQ, {
          className: "ChatMessageBackground",
          simple: !0
        }), (NQ || TQ) && !aQ && (0, SQ.jsx)(YQ.b, {
          className: "ChatFloatingActions",
          triggerElementRef: WQ,
          options: [{
            icon: "flag",
            text: "Report",
            onPointerDown: XQ,
            show: lQ
          }, ...fQ, {
            icon: "user-plus",
            text: "socialBar:sendFriendRequest",
            onPointerDown: QQ => {
              (0, vQ.m)(rQ, "chat")
            },
            analyticsClick: {
              id: "social.add_friend",
              value: "chat"
            },
            show: KQ && "blocked" !== jQ
          }]
        }), (0, SQ.jsx)(bQ.e, {
          text: wQ.content,
          friendBadgeFor: IQ ? rQ : void 0
        }, wQ.clientChatMsgId)]
      }, wQ.clientChatMsgId)
    }))
  },
  36228: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => YQ,
      d: () => xQ,
      g: () => bQ,
      j: () => HQ
    });
    var LQ = wQ(9094),
      qQ = wQ(36235),
      oQ = wQ(36238),
      DQ = wQ(8464),
      kQ = wQ(1447),
      vQ = wQ(53),
      mQ = wQ(71),
      uQ = wQ(1107);

    function HQ() {
      var QQ;
      return (0, kQ.i)(qQ.b, (0, qQ.k)()), (0, uQ.jsx)(uQ.Fragment, {
        children: null === (QQ = (0, qQ.k)()) || void 0 === QQ ? void 0 : QQ.content
      })
    }

    function bQ(QQ) {
      var FQ;
      let {
        show: wQ
      } = QQ;
      (0, kQ.i)(qQ.b, (0, qQ.k)());
      const mQ = null === (FQ = (0, qQ.k)()) || void 0 === FQ ? void 0 : FQ.menu;
      return (0, vQ.useEffect)((() => {
        var QQ;
        wQ || (null === mQ || void 0 === mQ || null === (QQ = mQ.onClose) || void 0 === QQ || QQ.call(mQ), (0, oQ.o)())
      }), [wQ, mQ]), (0, vQ.useEffect)((() => wQ ? (0, DQ.h)(oQ.v, oQ.g) : void 0), [wQ]), (0, uQ.jsx)(LQ.c, {
        showing: wQ,
        globallyUniqueKey: "clientGameMenu",
        children: null === mQ || void 0 === mQ ? void 0 : mQ.content
      })
    }

    function YQ(QQ) {
      let {
        placement: FQ = "bottom"
      } = QQ;
      return (0, uQ.jsx)("div", {
        id: `clientGameHud-${FQ}`,
        style: {
          display: "contents"
        }
      })
    }

    function xQ(QQ) {
      let {
        children: FQ,
        placement: wQ = "bottom"
      } = QQ;
      const [LQ, qQ] = (0, vQ.useState)(null);
      return (0, vQ.useEffect)((() => {
        qQ(document.getElementById(`clientGameHud-${wQ}`))
      }), [wQ]), LQ ? (0, mQ.createPortal)(FQ, LQ) : null
    }
  },
  36520: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => HQ,
      d: () => uQ
    });
    var LQ = wQ(53),
      qQ = wQ(1070),
      oQ = wQ.n(qQ),
      DQ = wQ(1451),
      kQ = wQ(1107);
    const vQ = 200,
      mQ = 160;

    function uQ() {
      return window.matchMedia("(max-width: 900px)").matches
    }

    function HQ(QQ) {
      let {
        side: FQ,
        defaultSize: wQ,
        covers: qQ,
        onClose: uQ,
        children: HQ
      } = QQ;
      const bQ = (0, LQ.useRef)(null),
        [YQ, xQ] = (0, LQ.useState)(null),
        [AQ, tQ] = (0, LQ.useState)(wQ);
      AQ !== wQ && (tQ(wQ), xQ(null));
      const eQ = (0, LQ.useRef)(null),
        MQ = "top" === FQ,
        GQ = QQ => MQ ? QQ.clientY : QQ.clientX,
        pQ = () => {
          eQ.current = null
        };
      return (0, kQ.jsxs)("div", {
        ref: bQ,
        className: oQ()("ResizableSidePanel", FQ && `ResizableSidePanel-${FQ}`, {
          Covers: "always" === qQ,
          CoversWhenNarrow: "narrow" === qQ,
          Dragged: null !== YQ
        }),
        style: {
          [MQ ? "height" : "width"]: null !== YQ && void 0 !== YQ ? YQ : wQ
        },
        children: [HQ, FQ && (0, kQ.jsx)("div", {
          className: "ResizableSidePanelHandle",
          role: "separator",
          "aria-orientation": MQ ? "horizontal" : "vertical",
          onPointerDown: QQ => {
            if (0 !== QQ.button) return;
            QQ.preventDefault();
            const FQ = bQ.current,
              wQ = Array.from(FQ.parentElement.children).reduce(((QQ, wQ) => wQ !== FQ && "0" !== getComputedStyle(wQ).flexGrow ? QQ + (QQ => MQ ? QQ.clientHeight : QQ.clientWidth)(wQ) : QQ), 0),
              LQ = MQ ? FQ.offsetHeight : FQ.offsetWidth,
              qQ = Math.min(vQ, LQ),
              oQ = Math.max(qQ, LQ + Math.max(0, wQ - mQ));
            eQ.current = {
              start: GQ(QQ),
              startSize: LQ,
              minSize: qQ,
              maxSize: oQ
            }, QQ.currentTarget.setPointerCapture(QQ.pointerId)
          },
          onPointerMove: QQ => {
            const wQ = eQ.current;
            if (!wQ) return;
            const LQ = "right" === FQ ? wQ.start - QQ.clientX : GQ(QQ) - wQ.start;
            xQ(Math.min(wQ.maxSize, Math.max(wQ.minSize, wQ.startSize + LQ)))
          },
          onPointerUp: pQ,
          onPointerCancel: pQ,
          onLostPointerCapture: pQ
        }), uQ && (0, kQ.jsx)(DQ.j, {
          className: "ResizableSidePanelClose",
          onClick: uQ
        })]
      })
    }
  },
  36538: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      B: () => CQ,
      F: () => cQ,
      H: () => iQ,
      J: () => qQ,
      L: () => SQ,
      c: () => GQ,
      g: () => tQ,
      j: () => xQ,
      n: () => YQ,
      r: () => MQ,
      v: () => WQ,
      z: () => pQ
    });
    var LQ = wQ(53);
    const qQ = 5e3,
      oQ = 500,
      DQ = 3e3;
    let kQ = null,
      vQ = null,
      mQ = null;
    const uQ = new Set;

    function HQ(QQ) {
      kQ = QQ;
      for (const FQ of uQ) FQ()
    }

    function bQ() {
      if (!kQ || void 0 !== kQ.endedAt) return;
      null !== vQ && (clearTimeout(vQ), vQ = null), HQ({
        ...kQ,
        endedAt: Date.now()
      });
      const QQ = mQ;
      mQ = null, null === QQ || void 0 === QQ || QQ()
    }

    function YQ(QQ, FQ) {
      let {
        submit: wQ,
        reopen: LQ
      } = FQ;
      null !== vQ && clearTimeout(vQ), mQ = LQ, HQ({
        ...QQ,
        startedAt: Date.now(),
        errors: []
      }), vQ = setTimeout(bQ, DQ), wQ()
    }

    function xQ() {
      kQ && void 0 === kQ.endedAt && void 0 === kQ.ranAt && (null !== vQ && clearTimeout(vQ), HQ({
        ...kQ,
        ranAt: Date.now()
      }), vQ = setTimeout(bQ, qQ))
    }
    const AQ = 3;

    function tQ(QQ) {
      if (!kQ || void 0 === kQ.ranAt || void 0 !== kQ.endedAt || kQ.errors.includes(QQ) || kQ.errors.length >= AQ) return;
      const FQ = 0 === kQ.errors.length;
      HQ({
        ...kQ,
        errors: [...kQ.errors, QQ]
      }), FQ && (null !== vQ && clearTimeout(vQ), vQ = setTimeout(bQ, oQ))
    }

    function eQ(QQ) {
      var FQ;
      return (null === (FQ = kQ) || void 0 === FQ ? void 0 : FQ.chatKey) === QQ ? kQ : null
    }

    function MQ(QQ) {
      const FQ = eQ(QQ);
      return FQ && void 0 !== FQ.endedAt ? (HQ(null), FQ) : null
    }

    function GQ(QQ) {
      var FQ;
      (null === (FQ = kQ) || void 0 === FQ ? void 0 : FQ.chatKey) === QQ && (null !== vQ && (clearTimeout(vQ), vQ = null), mQ = null, HQ(null))
    }
    const pQ = "These changes from your last answer didn't go in. Make them again.";

    function cQ(QQ) {
      const FQ = [...new Set(QQ)].slice(0, AQ);
      return `Fix this in your change: when it ran, the world showed ${1===FQ.length?"this error":"these errors"}: ${FQ.join(" ")}`
    }

    function CQ(QQ) {
      return `Your change didn't go in, because the code wouldn't run at all: ${QQ.join(" ")} Send the whole change again with that fixed.`
    }

    function SQ(QQ) {
      return `Fix this in your change: ${QQ.join(" ")}`
    }

    function iQ(QQ) {
      var FQ;
      if (void 0 === QQ.ranAt) return {
        title: "Couldn't test it",
        text: "Your change didn't go into your world, so it couldn't be tested. Press Submit to try it."
      };
      const wQ = Math.max(1, Math.round(((null !== (FQ = QQ.endedAt) && void 0 !== FQ ? FQ : QQ.ranAt) - QQ.ranAt) / 1e3)),
        LQ = `Your change ran in your world for ${wQ} ${1===wQ?"second":"seconds"}`;
      return 0 === QQ.errors.length ? {
        title: "Tested: no errors",
        text: `${LQ} without an error.`
      } : {
        title: 1 === QQ.errors.length ? "Tested: it showed an error" : `Tested: it showed ${QQ.errors.length} errors`,
        text: `${LQ} and showed: ${QQ.errors.join(" ")}`
      }
    }

    function WQ(QQ) {
      const [FQ, wQ] = (0, LQ.useState)((() => eQ(QQ)));
      return (0, LQ.useEffect)((() => {
        const FQ = () => {
          wQ(eQ(QQ))
        };
        return FQ(), uQ.add(FQ), () => {
          uQ.delete(FQ)
        }
      }), [QQ]), FQ
    }
  },
  36540: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ,
      g: () => LQ
    });
    const LQ = {
      key: "worldCode",
      label: "World Code",
      codeBlock: !1
    };

    function qQ(QQ, FQ, wQ) {
      return {
        key: QQ,
        label: `Code block at ${FQ.join(", ")}`,
        codeBlock: !0,
        pos: FQ,
        canChangePos: wQ
      }
    }
  },
  36535: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => LQ,
      f: () => oQ,
      g: () => DQ,
      j: () => qQ
    });
    const LQ = "code block",
      qQ = "World Code/";

    function oQ(QQ) {
      return QQ.trim().toLowerCase().startsWith(qQ.toLowerCase())
    }

    function DQ(QQ) {
      return QQ.trim().slice(qQ.length).replace(/^\.?\//, "")
    }
  },
  36499: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => vQ,
      f: () => mQ,
      j: () => kQ,
      k: () => uQ
    });
    var LQ = wQ(53),
      qQ = wQ(27),
      oQ = wQ(96);
    class DQ {
      constructor(QQ, FQ) {
        let wQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.storageKey = QQ, this.defaultValue = FQ, this.canChange = wQ, this.value = null, this.listeners = new Set, this.get = () => {
          if (!this.canChange) return this.defaultValue;
          if (null === this.value) {
            const QQ = qQ.i.getItem(this.storageKey);
            this.value = "boolean" === typeof QQ ? QQ : this.defaultValue
          }
          return this.value
        }, this.set = QQ => {
          this.value = QQ, qQ.i.setItem(this.storageKey, QQ);
          for (const FQ of this.listeners) FQ(QQ)
        }
      }
      subscribe(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
    }
    const kQ = new DQ("codeEditorLightMode", !1),
      vQ = new DQ("codeEditorAiHints", !0),
      mQ = new DQ("codeEditorAiKeySafetyCheck", !0, oQ.featureFlags.isOwnTopLevelSite);

    function uQ(QQ) {
      const [FQ, wQ] = (0, LQ.useState)(QQ.get);
      return (0, LQ.useEffect)((() => {
        const FQ = QQ.subscribe(wQ);
        return wQ(QQ.get()), FQ
      }), [QQ]), [FQ, QQ.set]
    }
  },
  36491: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      C: () => bQ,
      F: () => NQ,
      H: () => iQ,
      I: () => WQ,
      M: () => UQ,
      c: () => xQ,
      e: () => vQ,
      h: () => AQ,
      j: () => OQ,
      n: () => kQ,
      o: () => uQ,
      q: () => YQ,
      u: () => tQ,
      v: () => pQ,
      w: () => sQ,
      y: () => RQ
    });
    var LQ = wQ(36483),
      qQ = wQ(36486);
    const oQ = "bloxd-world-code-directory-sync",
      DQ = "handles",
      kQ = "[INVALID SCHEMATIC PLACEHOLDER]";

    function vQ(QQ, FQ) {
      return `${QQ}::${FQ}`
    }
    const mQ = new Set(["node_modules", ".git"]);

    function uQ() {
      return "undefined" !== typeof window && "function" === typeof window.showDirectoryPicker
    }

    function HQ() {
      return new Promise(((QQ, FQ) => {
        const wQ = indexedDB.open(oQ, 1);
        wQ.onupgradeneeded = () => {
          const QQ = wQ.result;
          QQ.objectStoreNames.contains(DQ) || QQ.createObjectStore(DQ)
        }, wQ.onsuccess = () => {
          QQ(wQ.result)
        }, wQ.onerror = () => {
          var QQ;
          FQ(null !== (QQ = wQ.error) && void 0 !== QQ ? QQ : new Error("Failed to open directory sync IndexedDB"))
        }
      }))
    }
    async function bQ(QQ, FQ) {
      const wQ = await HQ();
      try {
        await new Promise(((LQ, qQ) => {
          const oQ = wQ.transaction(DQ, "readwrite");
          oQ.objectStore(DQ).put(FQ, QQ), oQ.oncomplete = () => {
            LQ()
          }, oQ.onerror = () => {
            var QQ;
            qQ(null !== (QQ = oQ.error) && void 0 !== QQ ? QQ : new Error("Failed to store directory handle"))
          }
        }))
      } finally {
        wQ.close()
      }
    }
    async function YQ(QQ) {
      const FQ = await HQ();
      try {
        return await new Promise(((wQ, LQ) => {
          const qQ = FQ.transaction(DQ, "readonly").objectStore(DQ).get(QQ);
          qQ.onsuccess = () => {
            var QQ;
            wQ(null !== (QQ = qQ.result) && void 0 !== QQ ? QQ : null)
          }, qQ.onerror = () => {
            var QQ;
            LQ(null !== (QQ = qQ.error) && void 0 !== QQ ? QQ : new Error("Failed to load directory handle"))
          }
        }))
      } finally {
        FQ.close()
      }
    }
    async function xQ(QQ) {
      const FQ = await HQ();
      try {
        await new Promise(((wQ, LQ) => {
          const qQ = FQ.transaction(DQ, "readwrite");
          qQ.objectStore(DQ).delete(QQ), qQ.oncomplete = () => {
            wQ()
          }, qQ.onerror = () => {
            var QQ;
            LQ(null !== (QQ = qQ.error) && void 0 !== QQ ? QQ : new Error("Failed to clear directory handle"))
          }
        }))
      } finally {
        FQ.close()
      }
    }
    async function AQ(QQ) {
      const FQ = {
        mode: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readwrite"
      };
      return "granted" === await QQ.queryPermission(FQ) || "granted" === await QQ.requestPermission(FQ)
    }
    async function tQ(QQ) {
      if (!uQ()) return null;
      try {
        const FQ = await window.showDirectoryPicker({
          mode: "readwrite"
        });
        return await bQ(QQ, FQ), FQ
      } catch (FQ) {
        if (function(QQ) {
            return QQ instanceof DOMException && "AbortError" === QQ.name
          }(FQ)) return null;
        throw FQ
      }
    }

    function eQ(QQ) {
      return QQ.startsWith(".") || mQ.has(QQ)
    }

    function MQ(QQ) {
      if (!QQ) return !0;
      const FQ = QQ.split("/");
      for (const wQ of FQ)
        if ("" === wQ || "." === wQ || ".." === wQ) return !1;
      return !0
    }
    async function GQ(QQ, FQ, wQ) {
      for await (const [oQ, DQ] of QQ.entries()) {
        if ("directory" === DQ.kind) {
          if (eQ(oQ)) continue;
          const QQ = FQ ? `${FQ}/${oQ}` : oQ;
          if (!MQ(QQ)) continue;
          await GQ(DQ, QQ, wQ);
          continue
        }
        const QQ = FQ ? `${FQ}/${oQ}` : oQ;
        if (!(0, LQ.p)(QQ) && !(0, qQ.b)(QQ)) continue;
        const kQ = await DQ.getFile();
        wQ[QQ] = (0, qQ.b)(QQ) ? await rQ(kQ) : await kQ.text()
      }
    }
    async function pQ(QQ) {
      const FQ = {};
      return await GQ(QQ, "", FQ), FQ
    }

    function cQ(QQ) {
      return !(!QQ || QQ !== QQ.trim() || QQ.startsWith("/") || QQ.includes("\\") || QQ.includes("\0")) && MQ(QQ)
    }
    async function CQ(QQ, FQ, wQ) {
      const LQ = FQ.split("/"),
        qQ = LQ[LQ.length - 1];
      let oQ = QQ;
      for (let DQ = 0; DQ < LQ.length - 1; DQ++) oQ = await oQ.getDirectoryHandle(LQ[DQ], {
        create: wQ
      });
      return {
        dir: oQ,
        fileName: qQ
      }
    }
    async function SQ(QQ, FQ, wQ) {
      if (!cQ(FQ)) throw new Error(`Refusing to write unsafe path: ${FQ}`);
      const {
        dir: LQ,
        fileName: qQ
      } = await CQ(QQ, FQ, !0), oQ = await LQ.getFileHandle(qQ, {
        create: !0
      }), DQ = await oQ.createWritable();
      await DQ.write(wQ), await DQ.close()
    }
    async function iQ(QQ, FQ, wQ) {
      const LQ = await async function(QQ, FQ) {
        if (!cQ(FQ)) return null;
        try {
          const {
            dir: wQ,
            fileName: LQ
          } = await CQ(QQ, FQ, !1), qQ = await wQ.getFileHandle(LQ), oQ = await qQ.getFile();
          return await oQ.text()
        } catch (wQ) {
          if (wQ instanceof DOMException && ("NotFoundError" === wQ.name || "NotAllowedError" === wQ.name)) return null;
          throw wQ
        }
      }(QQ, FQ);
      LQ !== wQ && await SQ(QQ, FQ, wQ)
    }
    async function WQ(QQ, FQ, wQ) {
      if (!(0, LQ.p)(FQ) && !(0, qQ.b)(FQ)) throw new Error(`Refusing to write non-allowlisted path: ${FQ}`);
      if ((0, qQ.b)(FQ)) {
        if (await IQ(QQ, FQ) === kQ) throw new Error(`Move the binary schematic ${FQ} outside the linked folder before syncing its placeholder`)
      }
      await SQ(QQ, FQ, wQ)
    }
    async function RQ(QQ, FQ) {
      if (!cQ(FQ)) throw new Error(`Refusing to remove unsafe path: ${FQ}`);
      try {
        const {
          dir: wQ,
          fileName: LQ
        } = await CQ(QQ, FQ, !1);
        await wQ.removeEntry(LQ)
      } catch (wQ) {
        if (wQ instanceof DOMException && ("NotFoundError" === wQ.name || "NotAllowedError" === wQ.name)) return;
        throw wQ
      }
    }
    async function OQ(QQ, FQ) {
      if (!cQ(FQ)) return null;
      try {
        const wQ = FQ.split("/");
        let LQ = QQ;
        for (const QQ of wQ) LQ = await LQ.getDirectoryHandle(QQ);
        return LQ
      } catch (wQ) {
        if (wQ instanceof DOMException && ("NotFoundError" === wQ.name || "NotAllowedError" === wQ.name)) return null;
        throw wQ
      }
    }
    async function sQ(QQ, FQ) {
      if ((0, LQ.p)(FQ) || (0, qQ.b)(FQ)) {
        if ((0, qQ.b)(FQ)) {
          if (await IQ(QQ, FQ) === kQ) throw new Error(`Refusing to remove a binary schematic: ${FQ}`)
        }
        await RQ(QQ, FQ)
      }
    }
    async function rQ(QQ) {
      if (QQ.size > 64) return kQ;
      const FQ = await QQ.text();
      return Array.from(FQ).some((QQ => {
        const FQ = QQ.charCodeAt(0);
        return FQ < 9 || FQ > 13 && FQ < 32 || 65533 === FQ
      })) ? kQ : FQ
    }
    async function IQ(QQ, FQ) {
      try {
        const {
          dir: wQ,
          fileName: LQ
        } = await CQ(QQ, FQ, !1);
        return await rQ(await (await wQ.getFileHandle(LQ)).getFile())
      } catch (wQ) {
        if (wQ instanceof DOMException && "NotFoundError" === wQ.name) return null;
        throw wQ
      }
    }
    async function UQ(QQ, FQ) {
      const wQ = await pQ(QQ);
      for (const LQ of Object.keys(wQ)) LQ in FQ || (0, qQ.b)(LQ) || await sQ(QQ, LQ);
      for (const [oQ, DQ] of Object.entries(FQ))((0, LQ.p)(oQ) || (0, qQ.b)(oQ)) && await WQ(QQ, oQ, DQ)
    }

    function NQ(QQ, FQ) {
      var wQ, LQ;
      let qQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const oQ = null !== (wQ = qQ.debounceMs) && void 0 !== wQ ? wQ : 300,
        DQ = null !== (LQ = qQ.pollMs) && void 0 !== LQ ? LQ : 1e3;
      let kQ = !1,
        vQ = null,
        mQ = null,
        uQ = null;
      const HQ = () => {
          kQ || (vQ && clearTimeout(vQ), vQ = setTimeout((() => {
            vQ = null, bQ()
          }), oQ))
        },
        bQ = async () => {
          if (!kQ) try {
            if (!await AQ(QQ, "readwrite")) return;
            const wQ = await pQ(QQ);
            kQ || FQ(wQ)
          } catch (wQ) {
            console.error("[WorldCodeDirectorySync] Failed to read watched directory", wQ)
          }
        };
      bQ();
      const YQ = window.FileSystemObserver;
      if (YQ) try {
        uQ = new YQ((() => {
          HQ()
        })), uQ.observe(QQ, {
          recursive: !0
        })
      } catch (xQ) {
        console.warn("[WorldCodeDirectorySync] FileSystemObserver unavailable, falling back to polling", xQ), uQ = null
      }
      return uQ || (mQ = setInterval((() => {
        HQ()
      }), DQ)), () => {
        kQ = !0, vQ && clearTimeout(vQ), mQ && clearInterval(mQ), uQ && uQ.disconnect()
      }
    }
  },
  4665: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => tQ,
      f: () => eQ
    });
    var LQ = wQ(1070),
      qQ = wQ.n(LQ),
      oQ = wQ(53),
      DQ = wQ(1207),
      kQ = wQ(4674),
      vQ = wQ(1873),
      mQ = wQ(2345),
      uQ = wQ(4680),
      HQ = wQ(1107);
    const bQ = new WeakMap;
    let YQ = 0;

    function xQ(QQ) {
      let FQ = bQ.get(QQ);
      return void 0 === FQ && (FQ = YQ++, bQ.set(QQ, FQ)), FQ
    }

    function AQ(QQ) {
      let {
        piece: FQ
      } = QQ;
      return "space" === FQ.kind ? (0, HQ.jsx)(HQ.Fragment, {
        children: FQ.text
      }) : (0, HQ.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${FQ.delayMs}ms`
        },
        children: (0, HQ.jsx)(kQ.d, {
          text: "icon" === FQ.kind ? `[[${FQ.icon}]]` : FQ.text
        })
      })
    }

    function tQ(QQ) {
      let {
        display: FQ
      } = QQ;
      const {
        selectedLanguage: wQ
      } = (0, DQ.y)(), LQ = (0, oQ.useMemo)((() => (0, uQ.b)((0, uQ.f)(FQ).plan.pieces)), [FQ, wQ.code]);
      return (0, HQ.jsxs)("div", {
        className: qQ()("Dialogue", {
          DialogueAnimateIn: !1 !== FQ.animateIn
        }),
        children: [FQ.speakerName && (0, HQ.jsx)(vQ.e, {
          text: FQ.speakerName,
          className: "DialogueSpeaker"
        }), (0, HQ.jsx)("p", {
          className: "DialogueLine",
          children: LQ.map(((QQ, FQ) => 1 === QQ.length && "space" === QQ[0].kind ? QQ[0].text : (0, HQ.jsx)("span", {
            className: "DialogueGlue",
            children: QQ.map(((QQ, FQ) => (0, HQ.jsx)(AQ, {
              piece: QQ
            }, FQ)))
          }, FQ)))
        })]
      })
    }
    const eQ = (0, oQ.memo)((function() {
      const QQ = (0, mQ.l)("dialogue");
      return (0, HQ.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: QQ && (0, HQ.jsx)(tQ, {
          display: QQ
        }, xQ(QQ))
      })
    }))
  },
  36300: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => AQ,
      e: () => tQ
    });
    var LQ = wQ(53),
      qQ = wQ(1447),
      oQ = wQ(1927),
      DQ = wQ(36248),
      kQ = wQ(619),
      vQ = wQ(1070),
      mQ = wQ.n(vQ),
      uQ = wQ(1107);
    const HQ = [bQ()];

    function bQ() {
      return {
        source: null,
        direction: null,
        EX: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function YQ(QQ) {
      return HQ.find((FQ => null !== FQ.source && FQ.source === QQ))
    }

    function xQ(QQ) {
      clearTimeout(QQ.timeout), QQ.source = null, QQ.direction = null, QQ.writtenAngle = null, QQ.EX && (QQ.EX.style.rotate = "")
    }
    const AQ = (0, LQ.memo)((function() {
      const [, QQ] = (0, LQ.useReducer)((QQ => QQ + 1), 0);
      return (0, qQ.g)("damagedByOtherPlayer", (FQ => {
        let {
          tL: wQ,
          direction: LQ
        } = FQ;
        const qQ = wQ || "nonDirectional",
          oQ = function(QQ) {
            var FQ;
            const wQ = null !== (FQ = YQ(QQ)) && void 0 !== FQ ? FQ : HQ.find((QQ => null === QQ.source));
            if (wQ) return wQ;
            const LQ = {
              source: null,
              direction: null,
              EX: null,
              timeout: void 0,
              writtenAngle: null
            };
            return HQ.push(LQ), LQ
          }(qQ);
        clearTimeout(oQ.timeout), oQ.source = qQ, oQ.direction = LQ, oQ.timeout = setTimeout((() => {
          xQ(oQ), QQ()
        }), 800), QQ()
      })), (0, oQ.d)("kill", (FQ => {
        let {
          killer: wQ,
          victim: LQ
        } = FQ;
        const qQ = wQ.local && YQ(LQ.id);
        qQ && (xQ(qQ), QQ())
      })), (0, LQ.useEffect)((() => {
        const QQ = (0, DQ.g)("turnDamageIndicators", tQ);
        return () => {
          QQ(), HQ.forEach(xQ)
        }
      }), []), (0, uQ.jsx)("div", {
        className: "DirectionalDamage",
        children: HQ.map(((QQ, FQ) => (0, uQ.jsx)("div", {
          ref: FQ => {
            QQ.EX = FQ
          },
          className: mQ()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, kQ.F)(QQ.direction),
            DamageIndicatorIdle: null === QQ.source
          })
        }, FQ)))
      })
    }));

    function tQ(QQ) {
      for (const FQ of HQ) {
        if (null === FQ.source || (0, kQ.F)(FQ.direction)) continue;
        const wQ = FQ.direction - QQ;
        wQ !== FQ.writtenAngle && (FQ.writtenAngle = wQ, FQ.EX.style.rotate = `${wQ}rad`)
      }
    }
  },
  36180: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => tQ
    });
    var LQ = wQ(53),
      qQ = wQ(71),
      oQ = wQ(1207),
      DQ = wQ(1070),
      kQ = wQ.n(DQ),
      vQ = wQ(1725),
      mQ = wQ(1079),
      uQ = wQ(1295),
      HQ = wQ(1471),
      bQ = wQ(1668),
      YQ = wQ(1467),
      xQ = wQ(1107);
    const AQ = 14;

    function tQ(QQ) {
      let {
        className: FQ,
        triggerElementRef: wQ,
        options: DQ
      } = QQ;
      const {
        t: tQ
      } = (0, oQ.y)(), [eQ, MQ] = (0, LQ.useState)(!1), [GQ, pQ] = (0, LQ.useState)({
        x: 0,
        y: 0
      }), cQ = (0, LQ.useRef)(null);
      (0, LQ.useEffect)((() => {
        let QQ = null;
        const FQ = FQ => {
            QQ = {
              x: FQ.clientX,
              y: FQ.clientY
            }
          },
          LQ = FQ => {
            if (null === QQ || !(0, YQ.e)(QQ, FQ)) return;
            QQ = null;
            const wQ = AQ * (0, vQ.getRemInPx)();
            pQ({
              x: Math.min(FQ.clientX, window.innerWidth - wQ - 5),
              y: FQ.clientY
            }), MQ((QQ => !QQ))
          },
          qQ = QQ => {
            var FQ;
            null !== (FQ = cQ.current) && void 0 !== FQ && FQ.contains(QQ.relatedTarget) || MQ(!1)
          },
          oQ = wQ.current;
        return oQ.addEventListener("pointerdown", FQ), oQ.addEventListener("pointerup", LQ), oQ.addEventListener("mouseleave", qQ), () => {
          oQ.removeEventListener("pointerdown", FQ), oQ.removeEventListener("pointerup", LQ), oQ.removeEventListener("mouseleave", qQ)
        }
      }), [wQ]), (0, LQ.useEffect)((() => {
        if (eQ) return (0, bQ.c)("pointerdown", (QQ => {
          !cQ.current || cQ.current.contains(QQ.target) || wQ.current.contains(QQ.target) || MQ(!1)
        }))
      }), [eQ, wQ]), (0, LQ.useLayoutEffect)((() => {
        if (!eQ || !cQ.current) return;
        const QQ = cQ.current.getBoundingClientRect().height,
          FQ = Math.max(5, window.innerHeight - QQ - 5);
        GQ.y > FQ && pQ({
          x: GQ.x,
          y: FQ
        })
      }), [eQ, GQ]), (0, uQ.m)("popup", cQ, (() => {
        MQ(!1)
      }), eQ);
      const CQ = DQ.filter((QQ => !1 !== QQ.show));
      return eQ && 0 !== CQ.length ? (0, qQ.createPortal)((0, xQ.jsx)("div", {
        ref: cQ,
        className: kQ()("FloatingActions", {
          [FQ]: FQ
        }),
        style: {
          width: `${AQ}rem`,
          top: GQ.y,
          left: GQ.x
        },
        children: CQ.map((QQ => {
          let {
            icon: FQ,
            text: wQ,
            onPointerDown: LQ,
            analyticsClick: qQ
          } = QQ;
          return (0, xQ.jsxs)("div", {
            className: "FloatingAction",
            "data-pad-focusable": !0,
            onPointerUp: QQ => {
              void 0 !== qQ && (0, HQ.reportAnalyticsClick)(qQ), LQ(QQ), MQ(!1), QQ.stopPropagation()
            },
            children: [(0, xQ.jsx)(mQ.c, {
              name: FQ
            }), (0, xQ.jsx)("div", {
              children: tQ(wQ)
            })]
          }, wQ)
        }))
      }), function() {
        var QQ;
        return null !== (QQ = document.querySelector(".WholeAppWrapperInner")) && void 0 !== QQ ? QQ : document.body
      }()) : null
    }
  },
  36317: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => wD
    });
    var LQ = wQ(36228),
      qQ = wQ(53),
      oQ = wQ(2028),
      DQ = wQ(4376),
      kQ = wQ(4380),
      vQ = wQ(2345),
      mQ = wQ(1897),
      uQ = wQ(1107);

    function HQ(QQ) {
      let {
        className: FQ,
        style: wQ,
        vw: LQ,
        maxPx: qQ,
        children: oQ
      } = QQ;
      console.assert("number" === typeof LQ && "number" === typeof qQ, "vw and maxPx passed to Text must be numbers");
      const DQ = window.innerWidth * (LQ / 100) > qQ ? `${qQ}px` : `${LQ}vw`;
      return (0, uQ.jsx)("div", {
        className: FQ,
        style: {
          ...wQ,
          fontSize: DQ
        },
        children: oQ
      })
    }
    var bQ = wQ(36322),
      YQ = wQ(1451),
      xQ = wQ(22),
      AQ = wQ(1911),
      tQ = wQ(1079);

    function eQ(QQ) {
      let {
        tasks: FQ,
        lastDisplayedTasks: wQ
      } = QQ;
      return (0, uQ.jsx)(uQ.Fragment, {
        children: Object.keys(FQ).map((QQ => (0, uQ.jsx)(MQ, {
          task: FQ[QQ],
          lastDisplayedAs: wQ[QQ]
        }, FQ[QQ].text)))
      })
    }

    function MQ(QQ) {
      let {
        task: FQ,
        lastDisplayedAs: wQ
      } = QQ;
      const [LQ, oQ] = (0, qQ.useState)(null !== wQ && void 0 !== wQ && wQ.progress ? wQ.progress / FQ.goal : 0), [DQ, kQ] = (0, qQ.useState)(!1), [vQ, mQ] = (0, qQ.useState)(FQ.claimed || !1);
      return (0, qQ.useEffect)((() => {
        oQ(FQ.progress / FQ.goal)
      }), [FQ.progress, FQ.goal]), vQ ? null : (0, uQ.jsxs)("div", {
        className: "Task",
        children: [(0, uQ.jsx)("div", {
          className: "TaskDescDiv",
          children: (0, uQ.jsx)(HQ, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: FQ.text
          })
        }), FQ.progress < FQ.goal ? (0, uQ.jsxs)("div", {
          className: "TaskProgress",
          children: [0 !== LQ ? (0, uQ.jsx)("div", {
            className: "TaskProgressForeground",
            style: {
              width: 100 * LQ + "%"
            }
          }) : null, (0, uQ.jsx)("div", {
            className: "TaskProgressText",
            children: `${FQ.progress}/${FQ.goal}`
          })]
        }) : (0, uQ.jsx)(YQ.m, {
          className: "ClaimRewardButton",
          onClick: () => {
            kQ(!0)
          },
          children: (0, uQ.jsx)(HQ, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: "Claim Reward"
          })
        }), DQ ? (0, uQ.jsx)(GQ, {
          task: FQ,
          close: () => {
            FQ.claimed = !0, mQ(!0), kQ(!1)
          }
        }) : null]
      })
    }

    function GQ(QQ) {
      let {
        task: FQ,
        close: wQ
      } = QQ;
      const [LQ, oQ] = (0, qQ.useState)({}), [DQ, kQ] = (0, qQ.useState)("closed");
      (0, qQ.useEffect)((() => {
        let QQ;
        return "animStart" === DQ && (QQ = setTimeout((() => {
          kQ("animEnd")
        }), 700)), () => {
          clearTimeout(QQ)
        }
      }), [DQ]), (0, bQ.c)((() => {
        mQ.gameBridge.send("completeTask", FQ.text)
      }));
      const HQ = (0, vQ.l)("currencyAmounts");
      return (0, uQ.jsxs)("div", {
        className: "RewardBackground",
        onClick: () => {
          if ("animEnd" === DQ)
            if (0 === FQ.rewards.length) wQ(), mQ.gameBridge.send("completeTask", FQ.text);
            else {
              const QQ = {
                ...AQ.b.get("currencyAmounts")
              };
              for (const FQ in LQ) QQ[FQ] = {
                ...QQ[FQ],
                amount: QQ[FQ].amount + LQ[FQ]
              };
              AQ.b.apply({
                currencyAmounts: QQ
              }), kQ("closed")
            }
          else "closed" === DQ && (oQ(FQ.rewards.pop()), kQ("animStart"))
        },
        children: [(0, uQ.jsx)("img", {
          className: "Chest",
          alt: "closed" !== DQ ? "open chest" : "closed chest",
          src: `/textures/miscImages/Treasure Chest ${"closed"!==DQ?"open":"closed"}.png`
        }), (0, uQ.jsx)("div", {
          className: "Rewards",
          children: "closed" !== DQ ? Object.keys(LQ).map((QQ => {
            const FQ = null === HQ || void 0 === HQ ? void 0 : HQ[QQ];
            return !FQ || FQ.hidden ? null : (0, uQ.jsxs)("div", {
              className: "Reward",
              children: [(0, uQ.jsx)(tQ.c, {
                name: FQ.icon,
                className: "3x UiCurrencyIcon RewardIcon",
                style: {
                  color: FQ.iconColour
                }
              }), (0, uQ.jsx)("div", {
                className: "RewardAmountText",
                children: "animStart" === DQ ? 0 : LQ[QQ]
              })]
            }, QQ)
          })) : null
        }), "animStart" === DQ ? (0, uQ.jsx)(pQ, {}) : null, (0, uQ.jsx)("div", {
          className: "ChestsLeft",
          children: FQ.rewards.length
        })]
      })
    }

    function pQ() {
      const [QQ, FQ] = (0, qQ.useState)(0);
      (0, qQ.useEffect)((() => {
        FQ(1)
      }), []);
      return (0, uQ.jsx)(uQ.Fragment, {
        children: Array.from({
          length: 40
        }).map(((FQ, wQ) => (0, uQ.jsx)(tQ.c, {
          name: "star",
          className: "3x UiCurrencyIcon OpenStar",
          style: {
            bottom: 50 * QQ * Math.cos(wQ / 40 * (2 * Math.PI)) + 50 + "vh",
            left: 50 * QQ * Math.sin(wQ / 40 * (2 * Math.PI)) + "vh",
            opacity: 0 === QQ ? 1 : 0
          }
        }, wQ)))
      })
    }
    xQ.l.subscribe("requiredLibrariesLoaded", (() => {
      setTimeout((() => {
        const QQ = new Image,
          FQ = new Image;
        QQ.src = "/textures/miscImages/Treasure Chest open.png", FQ.src = "/textures/miscImages/Treasure Chest closed.png"
      }), 1e4)
    }));
    var cQ = wQ(3029),
      CQ = wQ(1140),
      SQ = wQ(1873),
      iQ = wQ(1447),
      WQ = wQ(317),
      RQ = wQ(1927),
      OQ = wQ(1348);

    function sQ(QQ) {
      var FQ, wQ;
      let {
        byId: LQ,
        localId: qQ
      } = QQ;
      return null === qQ ? null : null !== (FQ = null === (wQ = LQ[qQ]) || void 0 === wQ ? void 0 : wQ.name) && void 0 !== FQ ? FQ : null
    }

    function rQ(QQ) {
      let {
        lbStats: FQ,
        storedState: wQ = {}
      } = QQ;
      const {
        userContext: LQ
      } = (0, CQ.e)(), oQ = (0, RQ.g)("players", sQ), [DQ, kQ] = (0, qQ.useState)(wQ.selectedCat || (null === FQ || void 0 === FQ ? void 0 : FQ[0]) || null), [vQ, HQ] = (0, qQ.useState)(wQ.selectedTimeframe || "Today"), [bQ, YQ] = (0, qQ.useState)(null);
      (0, qQ.useEffect)((() => {
        null === DQ && null !== FQ && FQ.length > 0 && kQ(FQ[0])
      }), [FQ, DQ]);
      const [xQ, AQ] = (0, qQ.useState)(wQ.seeingTop || !1), [tQ, eQ] = (0, qQ.useState)(!1), MQ = (0, qQ.useCallback)((() => {
        null !== DQ && null !== vQ && (mQ.gameBridge.send("requestLeaderboard", {
          category: DQ.value,
          timeframe: vQ,
          seeTop: xQ
        }), pQ(!0), NQ && TQ(null))
      }), [DQ, vQ, wQ, xQ]);
      (0, qQ.useEffect)((() => {
        MQ(), wQ.selectedCat = DQ, wQ.selectedTimeframe = vQ, wQ.seeingTop = xQ
      }), [DQ, vQ, wQ, xQ, MQ]), (0, qQ.useEffect)((() => {
        if ((null === bQ || void 0 === bQ ? void 0 : bQ.length) > 0)
          if (xQ) xQ && eQ(null === rQ(bQ));
          else {
            for (const QQ of bQ)
              if (1 === QQ.place) return void eQ(!1);
            eQ(!0)
          }
      }), [bQ, xQ]), (0, iQ.g)("leaderboardResponse", (QQ => {
        let {
          category: wQ,
          timeframe: LQ,
          data: qQ
        } = QQ;
        for (let oQ = 0; oQ < FQ; oQ++)
          if (FQ[oQ].value === wQ) {
            kQ(FQ[oQ]);
            break
          } HQ(LQ), YQ(qQ), pQ(!1)
      }));
      const [GQ, pQ] = (0, qQ.useState)(!0);

      function rQ(QQ) {
        const FQ = sQ(mQ.gameBridge.latest("players"));
        for (let wQ = 0; wQ < QQ.length; wQ++)
          if (QQ[wQ].name === FQ) return QQ[wQ].place;
        return null
      }
      const [IQ, UQ] = (0, qQ.useState)(!1), [NQ, TQ] = (0, qQ.useState)(null);
      (0, qQ.useEffect)((() => {
        if (bQ && !IQ) {
          const QQ = rQ(bQ);
          QQ < (wQ.lastSeenPlayerPlace || 0) && TQ(wQ.lastSeenPlayerPlace - QQ), UQ(!0)
        }
      }), [bQ, wQ, IQ]), (0, qQ.useEffect)((() => () => {
        bQ && (wQ.lastSeenPlayerPlace = rQ(bQ))
      }), [bQ, wQ]);
      const KQ = (0, qQ.useRef)(null),
        [zQ, lQ] = (0, qQ.useState)(void 0);
      return (0, qQ.useEffect)((() => {
        var QQ, FQ;
        zQ !== (null === (QQ = KQ.current) || void 0 === QQ ? void 0 : QQ.offsetHeight) && lQ(null === (FQ = KQ.current) || void 0 === FQ ? void 0 : FQ.offsetHeight)
      })), LQ.isLoggedIn() ? (0, uQ.jsxs)(uQ.Fragment, {
        children: [(0, uQ.jsxs)("div", {
          className: "LeaderboardSelectors",
          children: [(0, uQ.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, uQ.jsx)(cQ.d, {
              options: FQ.map((QQ => ({
                label: QQ.label,
                value: QQ.value
              }))),
              value: DQ,
              onChange: QQ => {
                kQ(QQ)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), (0, uQ.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, uQ.jsx)(cQ.d, {
              options: WQ.Uc.map((QQ => ({
                value: QQ,
                label: QQ,
                className: "LBDropdownMenuItem"
              }))),
              value: vQ,
              onChange: QQ => {
                HQ(QQ.label)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), tQ ? (0, uQ.jsx)("div", {
            className: "SeeTopText",
            onClick: () => {
              AQ(!xQ)
            },
            children: xQ ? "See Yourself" : "See Top"
          }) : null]
        }), (0, uQ.jsx)("div", {
          className: "LBTableWrapper",
          children: GQ ? (0, uQ.jsx)("div", {
            className: "LoaderContainer",
            children: (0, uQ.jsx)(OQ.c, {})
          }) : null === NQ ? (0, uQ.jsx)(uQ.Fragment, {
            children: (0, uQ.jsxs)("table", {
              className: "LBTable",
              children: [(0, uQ.jsx)("thead", {
                className: "LBTableTHead",
                ref: KQ,
                children: (0, uQ.jsxs)("tr", {
                  children: [(0, uQ.jsx)("th", {
                    className: "LBTablePlaceTH LBTableTH",
                    children: "PLACE"
                  }), (0, uQ.jsx)("th", {
                    className: "LBTablePlayerTH LBTableTH",
                    children: "PLAYER"
                  }), (0, uQ.jsx)("th", {
                    className: "LBTableValueTH LBTableTH",
                    children: DQ.label.toUpperCase()
                  })]
                })
              }), (0, uQ.jsx)("tbody", {
                children: bQ.map((QQ => (0, uQ.jsxs)("tr", {
                  className: "LBTableTR " + (QQ.name === oQ ? "LBTableTRYou" : ""),
                  children: [(0, uQ.jsx)("td", {
                    className: "LBTableTD",
                    children: `#${QQ.place}`
                  }), (0, uQ.jsx)("td", {
                    className: "LBTableTD",
                    children: (0, uQ.jsx)(SQ.e, {
                      text: [{
                        entityName: QQ.name
                      }]
                    })
                  }), (0, uQ.jsx)("td", {
                    className: "LBTableTD",
                    children: QQ.stat
                  })]
                }, QQ.name)))
              })]
            })
          }) : (0, uQ.jsx)("div", {
            className: "LBIncreaseWrapper",
            onClick: () => {
              TQ(null)
            },
            children: (0, uQ.jsxs)("div", {
              className: "LBIncreaseDiv",
              children: [(0, uQ.jsx)("div", {
                className: "TriangleUp"
              }), (0, uQ.jsx)("div", {
                className: "LBIncreaseText",
                children: `${NQ} Place${NQ>1?"s":""}`
              })]
            })
          })
        })]
      }) : (0, uQ.jsxs)("div", {
        className: "LBLoginDiv",
        children: [(0, uQ.jsx)("div", {
          className: "LBLoginInfo",
          children: "Login to see the leaderboard"
        }), (0, uQ.jsx)("div", {
          className: "LBLoginInfo",
          children: "You can login from the top left homescreen"
        })]
      })
    }
    var IQ = wQ(3002),
      UQ = wQ(96),
      NQ = wQ(27),
      TQ = wQ(3282);
    const KQ = (0, qQ.memo)((function(QQ) {
      let {
        show: FQ,
        onClose: wQ
      } = QQ;
      (0, IQ.b)();
      const LQ = (0, vQ.l)("_tasks"),
        oQ = (0, vQ.l)("_availableLeaderboards"),
        [mQ, HQ] = (0, qQ.useState)({});
      LQ && Object.keys(LQ).length > 0 && 0 === Object.keys(mQ).length && HQ(LQ);
      const [bQ] = (0, qQ.useState)({
        tasks: {},
        leaderboard: {}
      }), YQ = {
        tasks: {
          Title: "Tasks",
          getIsDefined: () => !!LQ && Object.keys(LQ).length > 0,
          content: (0, uQ.jsx)(eQ, {
            tasks: LQ,
            lastDisplayedTasks: mQ
          })
        },
        leaderboard: {
          Title: "Leaderboard",
          getIsDefined: () => (null === oQ || void 0 === oQ ? void 0 : oQ.length) > 0,
          content: (0, uQ.jsx)(rQ, {
            lbStats: oQ,
            storedState: bQ.leaderboard
          })
        }
      };

      function xQ() {
        for (const QQ in YQ)
          if (YQ[QQ].getIsDefined()) return QQ;
        return null
      }
      const [AQ, tQ] = (0, qQ.useState)(xQ());

      function MQ() {
        HQ({
          ...LQ
        }), wQ()
      }(0, qQ.useEffect)((() => {
        AQ || tQ(xQ())
      }), [xQ()]), (0, kQ.b)(!0, AQ && FQ), (0, qQ.useEffect)((() => {
        FQ && !AQ && (console.log("CLOSE"), MQ())
      }), [FQ, AQ]);
      const [GQ, pQ] = (0, qQ.useState)(!1);
      return (0, qQ.useEffect)((() => {
        FQ && AQ && !GQ && pQ(!0)
      }), [FQ, GQ, AQ]), (0, qQ.useEffect)((() => {
        !GQ && LQ && "tasks" !== AQ && tQ("tasks")
      }), [GQ, LQ, AQ]), (0, uQ.jsx)(uQ.Fragment, {
        children: AQ ? (0, uQ.jsx)(TQ.b, {
          className: "RetentionFeaturesWrapper",
          show: FQ,
          children: (0, uQ.jsxs)(DQ.d, {
            close: MQ,
            escDoesExit: !1,
            closeClassnameList: ["VerticalMenuScreenDiv"],
            togglePointerLock: !1,
            globallyUniqueKey: "RetentionFeaturesComponent",
            children: [(0, uQ.jsxs)("div", {
              className: "VerticalMenuScreenDiv",
              children: [(0, uQ.jsx)(lQ, {}), (0, uQ.jsxs)("div", {
                className: "MenuDiv",
                children: [(0, uQ.jsx)(zQ, {
                  setCategory: tQ,
                  menuCategories: YQ,
                  selectedCat: AQ
                }), (0, uQ.jsx)("div", {
                  className: "MenuCategoryContainer",
                  children: YQ[AQ].content
                })]
              })]
            }), (0, uQ.jsx)("div", {
              className: "BottomScreenMenuWrapper",
              children: UQ.featureFlags.useDiscord && (0, uQ.jsx)("div", {
                className: "DiscordMenuDivDiv",
                children: (0, uQ.jsx)("div", {
                  className: "DiscordMenuDiv",
                  children: (0, uQ.jsx)(jQ, {
                    tasks: LQ
                  })
                })
              })
            })]
          })
        }) : null
      })
    }));

    function zQ(QQ) {
      let {
        selectedCat: FQ,
        setCategory: wQ,
        menuCategories: LQ
      } = QQ;
      return (0, uQ.jsx)("div", {
        className: "MenuHeader",
        children: Object.keys(LQ).map((QQ => LQ[QQ].getIsDefined() ? (0, uQ.jsx)("div", {
          className: "MenuHeaderCategory " + (QQ === FQ ? "SelectedHeaderCat" : "UnselectedHeaderCat"),
          onClick: () => {
            wQ(QQ)
          },
          children: LQ[QQ].Title
        }, QQ) : null))
      })
    }

    function lQ() {
      const QQ = (0, vQ.l)("currencyAmounts");
      return (0, uQ.jsx)("div", {
        className: "TopScreenCurrencies",
        children: Object.keys(null !== QQ && void 0 !== QQ ? QQ : {}).map((FQ => {
          const wQ = QQ[FQ];
          return wQ.hidden ? null : (0, uQ.jsxs)("div", {
            className: "TopScreenCurrencyDiv",
            children: [(0, uQ.jsx)(tQ.c, {
              name: wQ.icon,
              className: "3x UiCurrencyIcon",
              style: {
                color: wQ.iconColour
              }
            }), (0, uQ.jsx)("div", {
              className: "UiCurrencyAmount",
              children: wQ.amount
            })]
          }, FQ)
        }))
      })
    }

    function jQ(QQ) {
      let {
        tasks: FQ
      } = QQ;
      return (0, uQ.jsxs)("a", {
        className: "MenuDiscordButtonWrapper",
        href: "https://discord.gg/playbloxd",
        target: "_blank",
        rel: "noreferrer",
        children: [(0, uQ.jsx)(tQ.c, {
          name: "discord",
          kit: "brands",
          className: "DiscordButton",
          onClick: () => {
            NQ.i.setItem("DiscordPressed", !0), mQ.gameBridge.send("setServerCookie", {
              key: "joinDiscord",
              value: "true"
            }), "joinDiscord" in FQ && xQ.l.GA("clientTaskProgress", {
              taskId: "joinDiscord",
              progress: 1
            })
          }
        }), (0, uQ.jsx)(oQ.b, {})]
      })
    }
    var aQ = wQ(17),
      XQ = wQ(1641),
      fQ = wQ(36164),
      VQ = wQ(8995),
      hQ = wQ(4475),
      JQ = wQ(160),
      EQ = wQ(1225),
      nQ = wQ(1367),
      gQ = wQ(2552),
      PQ = wQ(1207),
      ZQ = wQ(1645),
      yQ = wQ(2304),
      BQ = wQ(2290),
      dQ = wQ(1835),
      QF = wQ(1998),
      FF = wQ(1276),
      wF = wQ(1471),
      LF = wQ(36329),
      qF = wQ(36335),
      oF = wQ(36341),
      DF = wQ(36349),
      kF = wQ(36353),
      vF = wQ(2621);

    function mF(QQ) {
      let {
        playersHere: FQ,
        exclude: wQ,
        uC: LQ
      } = QQ;
      const {
        t: oQ
      } = (0, PQ.y)(), DQ = (0, vF.r)(vF.k), [kQ, vQ] = (0, qQ.useState)([]), mQ = [], HQ = (QQ, FQ) => {
        const LQ = [...wQ, ...mQ.map((QQ => QQ.player.name))];
        mQ.length < 3 && !(0, qF.h)(LQ, QQ.name) && mQ.push({
          player: QQ,
          status: FQ
        })
      };
      for (const qQ of FQ) HQ((0, kF.e)(qQ.name, qQ.cosmetics, qQ.ranks), oQ("worldSocial:inThisWorld"));
      if ("loaded" === DQ.state.status)
        for (const qQ of DQ.state.recentPlayers) qQ.preview.name && !qQ.preview.isError && HQ({
          ...qQ.preview,
          location: {
            status: "offline"
          }
        }, oQ("worldSocial:playedWithYou"));
      const bQ = QQ => {
        vQ((FQ => [...FQ, QQ])), LQ(QQ).finally((() => {
          vQ((FQ => FQ.filter((FQ => FQ !== QQ))))
        }))
      };
      return (0, uQ.jsx)(uQ.Fragment, {
        children: mQ.map(((QQ, FQ) => {
          let {
            player: wQ,
            status: LQ
          } = QQ;
          return (0, uQ.jsx)(kF.d, {
            zIndex: mQ.length - FQ,
            player: wQ,
            status: LQ,
            onSendFriendRequest: () => {
              bQ(wQ.name)
            },
            actions: (0, uQ.jsx)(nQ.f, {
              tooltipInner: (0, uQ.jsx)(uQ.Fragment, {
                children: oQ("recentPlayers:addFriend")
              }),
              delayShow: 0,
              hoverOnly: !0,
              children: (0, uQ.jsx)(YQ.f, {
                className: "FriendRequestButton",
                disabled: kQ.includes(wQ.name),
                ariaLabel: `${oQ("recentPlayers:addFriend")} ${wQ.name}`,
                onClick: () => {
                  bQ(wQ.name)
                },
                children: (0, uQ.jsx)(tQ.c, {
                  name: "user-plus"
                })
              })
            })
          }, `suggestion:${wQ.name}`)
        }))
      })
    }
    var uF = wQ(36362),
      HF = wQ(36369),
      bF = wQ(1237),
      YF = wQ(1485),
      xF = wQ(4467),
      AF = wQ(291),
      tF = wQ(4455);
    const eF = ["auto", "auto_existing"];

    function MF(QQ) {
      return eF.includes(QQ)
    }

    function GF(QQ, FQ) {
      const wQ = (0, bF.Cb)(QQ);
      return null !== FQ && (0, bF.Cb)(FQ) === wQ || (0, tF.d)().some((QQ => (0, bF.Cb)(QQ.name) === wQ))
    }
    const pF = new Set;

    function cF(QQ) {
      return `worldSocialSeen:${QQ}`
    }

    function CF(QQ) {
      return !QQ || pF.has(QQ) || !0 === NQ.i.getItem(cF(QQ))
    }

    function SF(QQ) {
      QQ && !pF.has(QQ) && (pF.add(QQ), NQ.i.setItem(cF(QQ), !0))
    }
    var iF = wQ(2353),
      WF = wQ(2359);

    function RF(QQ) {
      let {
        show: FQ,
        onClose: wQ,
        opener: LQ
      } = QQ;
      const {
        lobbyName: oQ,
        shownLobbyName: kQ
      } = (0, RQ.k)("connectedGame");
      return (0, qQ.useEffect)((() => {
        FQ && (0, wF.reportAnalyticsClick)({
          id: "world_social.open",
          value: LQ
        })
      }), [FQ]), (0, uQ.jsx)(DQ.d, {
        show: FQ && null !== oQ,
        close: wQ,
        togglePointerLock: !1,
        className: "WorldSocialBackgroundScreen",
        globallyUniqueKey: "WorldSocialPopup",
        doGameplayStartStopOnShow: !0,
        ignorePressesAsShown: "icon" !== LQ,
        children: FQ && null !== oQ && (0, uQ.jsx)(OF, {
          lobbyName: oQ,
          worldCode: null !== kQ && void 0 !== kQ ? kQ : oQ,
          onClose: wQ
        }, oQ)
      })
    }

    function OF(QQ) {
      var FQ;
      let {
        lobbyName: wQ,
        worldCode: LQ,
        onClose: oQ
      } = QQ;
      const {
        t: DQ
      } = (0, PQ.y)(), kQ = (0, qQ.useRef)(null), {
        settings: vQ,
        loading: mQ,
        answered: HQ,
        change: bQ,
        retry: xQ
      } = (0, LF.h)(wQ), AQ = (0, ZQ.m)(), eQ = (0, RQ.k)("players"), MQ = (0, RQ.k)("hiddenPlayerNames"), [GQ, pQ] = (0, qQ.useState)([]), [cQ, SQ] = (0, qQ.useState)([]), [iQ, WQ] = (0, qQ.useState)(!1), sQ = (0, iF.b)(), rQ = (0, qQ.useMemo)((() => {
        var QQ, FQ;
        const wQ = null === eQ.localId ? null : null !== (QQ = null === (FQ = eQ.byId[eQ.localId]) || void 0 === FQ ? void 0 : FQ.name) && void 0 !== QQ ? QQ : null;
        return eQ.ids.flatMap((QQ => {
          const FQ = eQ.byId[QQ];
          return null !== FQ && void 0 !== FQ && FQ.name && FQ.name !== wQ ? [{
            name: FQ.name,
            cosmetics: FQ.cosmetics,
            ranks: FQ.ranks
          }] : []
        }))
      }), [eQ]), IQ = (0, qQ.useMemo)((() => (0, qF.g)(AQ.friends, wQ, rQ.map((QQ => QQ.name)))), [AQ.friends, wQ, rQ]), NQ = UQ.featureFlags.canSeeRealPlayerNames ? rQ.filter((QQ => null === (0, FF.b)(QQ.name, MQ))) : [], TQ = null !== vQ && void 0 !== vQ && vQ.canManage ? vQ : null, KQ = null !== TQ, zQ = null !== (FQ = null === vQ || void 0 === vQ ? void 0 : vQ.visibility) && void 0 !== FQ ? FQ : null, lQ = "whitelist" === (null === TQ || void 0 === TQ ? void 0 : TQ.visibility), jQ = "private" === zQ || "whitelist" === zQ && !KQ, {
        userContext: aQ
      } = (0, CQ.e)();
      (0, qQ.useEffect)((() => {
        KQ && GF(wQ, aQ.getPersonalWorldLobbyName()) && SF(aQ.whamm)
      }), [KQ, wQ, aQ]);
      const XQ = jQ ? DQ("whitelist" === zQ ? "socialBar:inviteWorldManagersOnly" : KQ ? "worldSocial:privateLinkRow" : "socialBar:inviteWorldPrivate") : null,
        VQ = null === XQ;
      (0, qQ.useEffect)((() => jQ ? void 0 : dQ.f.quietFriendAdded()), [jQ]), (0, qQ.useEffect)((() => dQ.f.quietFriendRequests()), []);
      const vF = (0, qQ.useRef)(!1);
      (0, qQ.useEffect)((() => {
        const QQ = kQ.current,
          FQ = !vF.current;
        vF.current = !0;
        const wQ = null === document.activeElement || document.activeElement === document.body;
        null !== QQ && void 0 !== QQ && QQ.contains(document.activeElement) || !FQ && !wQ || (0, fQ.c)() || null === QQ || void 0 === QQ || QQ.focus({
          preventScroll: !0
        })
      }), [VQ]), (0, qQ.useEffect)((() => {
        const QQ = QQ => {
          "Escape" !== QQ.key || null !== document.activeElement && document.activeElement !== document.body || oQ()
        };
        return document.addEventListener("keydown", QQ), () => {
          document.removeEventListener("keydown", QQ)
        }
      }), [oQ]);
      const bF = null === vQ && !HQ,
        YF = (mQ || AQ.loading) && 0 === AQ.friends.length,
        xF = AQ.friends.flatMap((QQ => QQ.name ? [QQ.name] : [])),
        AF = GQ.filter((QQ => !(0, qF.h)(xF, QQ))),
        tF = IQ.length + 3,
        eF = AF.length + tF,
        MF = iQ ? AQ.requests : AQ.requests.slice(0, 1),
        pF = async function(QQ) {
          let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (const wQ of (0, qF.j)(QQ, hQ.y)) {
            if (!await bQ({
                whitelistAdd: wQ
              }, (QQ => (0, qF.n)(QQ, wQ, !0)), {
                quiet: FQ
              })) return !1
          }
          return !0
        }, cF = QQ => {
          if (lQ && TQ) return {
            on: (0, qF.h)(TQ.whitelist, QQ),
            onChange: FQ => {
              (0, wF.reportAnalyticsClick)({
                id: "world_social.whitelist_toggle",
                value: FQ ? "on" : "off"
              }), bQ(FQ ? {
                whitelistAdd: [QQ]
              } : {
                whitelistRemove: QQ
              }, (wQ => (0, qF.n)(wQ, [QQ], FQ)))
            }
          }
        }, CF = async (QQ, FQ) => {
          (0, wF.reportAnalyticsClick)({
            id: "world_social.add_friend",
            value: FQ
          });
          const wQ = await (0, BQ.j)(QQ, "world_social");
          return (0, BQ.e)(wQ, QQ, {
            announceSent: !1
          }), "failed" !== wQ.kind && ("sent" === wQ.kind && pQ((FQ => (0, qF.h)(FQ, QQ) ? FQ : [...FQ, QQ])), lQ && await pF([QQ]), !0)
        };
      return (0, uQ.jsxs)("div", {
        ref: kQ,
        className: "WorldSocialPopup AnimFadeInScaleUp",
        tabIndex: -1,
        onKeyDown: QQ => {
          QQ.target === QQ.currentTarget && " " === QQ.key && QQ.preventDefault()
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "WorldSocialTitle",
        children: [(0, uQ.jsxs)("div", {
          className: "WorldSocialHeader",
          children: [(0, uQ.jsx)("h2", {
            id: "WorldSocialTitle",
            className: "WorldSocialTitle SmallTextBold",
            children: DQ("worldSocial:title")
          }), (0, uQ.jsx)(YQ.j, {
            className: "WorldSocialClose",
            onClick: oQ
          })]
        }), bF && (0, uQ.jsx)("div", {
          className: "WorldSocialLoading",
          children: (0, uQ.jsx)(OQ.c, {})
        }), !bF && (0, uQ.jsxs)(uQ.Fragment, {
          children: [(0, uQ.jsx)(oF.e, {
            worldCode: LQ,
            message: XQ
          }), null === vQ && !mQ && (0, uQ.jsx)("button", {
            type: "button",
            className: "WorldSocialLoadFailed",
            onClick: xQ,
            children: DQ("worldSocial:loadFailed")
          }), KQ && null !== zQ && (0, uQ.jsx)(DF.d, {
            visibility: zQ,
            onPick: QQ => {
              (async QQ => {
                if (QQ === zQ) return;
                (0, wF.reportAnalyticsClick)({
                  id: "world_social.set_mode",
                  value: QQ
                });
                const FQ = [...(0, HF.c)(wQ), ...cQ],
                  LQ = "whitelist" === QQ && vQ ? (0, qF.f)(IQ, FQ, vQ.whitelist) : [];
                await bQ({
                  setVisibility: QQ
                }, (FQ => ({
                  ...FQ,
                  visibility: QQ
                }))) && await pF(LQ)
              })(QQ)
            }
          }), AQ.requests.length > 0 && (0, uQ.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, uQ.jsx)(gQ.b, {
              label: (0, uQ.jsxs)(uQ.Fragment, {
                children: [(0, uQ.jsx)(tQ.c, {
                  name: QF.i
                }), " ", DQ("socialBar:requests")]
              }),
              meta: (0, uQ.jsxs)(uQ.Fragment, {
                children: [AQ.requests.length, AQ.requests.length === EQ.p && (0, uQ.jsx)("span", {
                  className: "SocialSectionTitleLimit",
                  children: DQ("socialBar:limitReached")
                }), !iQ && AQ.requests.length > 1 && (0, uQ.jsx)("button", {
                  type: "button",
                  className: "WorldSocialMoreRequests",
                  onClick: () => {
                    WQ(!0)
                  },
                  children: DQ("worldSocial:moreRequests", {
                    count: AQ.requests.length - 1
                  })
                })]
              })
            }), (0, uQ.jsx)("div", {
              className: "PlayerRows",
              children: MF.map(((QQ, FQ) => (0, uQ.jsx)(kF.d, {
                zIndex: MF.length - FQ,
                player: QQ,
                actions: (0, uQ.jsxs)(uQ.Fragment, {
                  children: [(0, uQ.jsx)(nQ.f, {
                    tooltipInner: (0, uQ.jsx)(uQ.Fragment, {
                      children: DQ("general:accept")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, uQ.jsx)(YQ.f, {
                      className: "FriendRequestButton",
                      ariaLabel: `${DQ("general:accept")} ${QQ.name}`,
                      analyticsClick: {
                        id: "social.accept_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, BQ.i)(QQ.name, !0, {
                          source: "world_social"
                        })
                      },
                      children: (0, uQ.jsx)(tQ.c, {
                        name: "check"
                      })
                    })
                  }), (0, uQ.jsx)(nQ.f, {
                    tooltipInner: (0, uQ.jsx)(uQ.Fragment, {
                      children: DQ("general:decline")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, uQ.jsx)(YQ.i, {
                      className: "FriendRequestButton",
                      ariaLabel: `${DQ("general:decline")} ${QQ.name}`,
                      analyticsClick: {
                        id: "social.decline_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, BQ.i)(QQ.name, !1, {
                          source: "world_social"
                        })
                      },
                      children: (0, uQ.jsx)(tQ.c, {
                        name: "xmark"
                      })
                    })
                  })]
                })
              }, `incoming:${QQ.name}`)))
            })]
          }), (0, uQ.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, uQ.jsx)(gQ.b, {
              label: (0, uQ.jsxs)(uQ.Fragment, {
                children: [(0, uQ.jsx)(tQ.c, {
                  name: QF.e
                }), " ", DQ("socialBar:friends")]
              }),
              meta: AQ.loaded && !jQ ? AQ.friends.length : void 0
            }), (0, uQ.jsx)(uF.d, {
              label: DQ("socialBar:sendRequest"),
              icon: "user-plus",
              placeholder: DQ("worldSocial:addFriendPlaceholder"),
              onSubmit: async QQ => await CF(QQ, "field") ? {
                ok: !0
              } : {
                ok: !1,
                error: null
              }
            }), YF && (0, uQ.jsx)("div", {
              className: "WorldSocialLoading",
              children: (0, uQ.jsx)(OQ.c, {})
            }), !YF && (0, uQ.jsxs)(uQ.Fragment, {
              children: [(0, uQ.jsxs)("div", {
                className: "PlayerRows",
                children: [AF.map(((QQ, FQ) => (0, uQ.jsx)(kF.d, {
                  zIndex: eF - FQ,
                  player: (0, kF.e)(QQ, null),
                  status: DQ("worldSocial:requestSent"),
                  fH: cF(QQ)
                }, `request:${QQ}`))), !jQ && IQ.map(((QQ, FQ) => (0, uQ.jsx)(kF.c, {
                  zIndex: tF - FQ,
                  row: QQ,
                  fH: cF(QQ.friend.name),
                  canInvite: (0, qF.c)(vQ) && "here" !== QQ.place,
                  invited: cQ.includes(QQ.friend.name),
                  onInvite: () => {
                    (async QQ => {
                      (0, wF.reportAnalyticsClick)({
                        id: "world_social.invite",
                        value: "friend"
                      });
                      const FQ = () => {
                        SQ((FQ => FQ.filter((FQ => FQ !== QQ))))
                      };
                      SQ((FQ => [...FQ, QQ]));
                      const LQ = (0, qF.k)(vQ, QQ);
                      if ("none" !== LQ) {
                        const wQ = pF([QQ], "quiet" === LQ);
                        if ("required" === LQ && !await wQ) return void FQ()
                      }
                      await (0, yQ.h)(QQ, "game", {
                        announceSent: !1,
                        source: "world_social"
                      }) ? ((0, HF.g)(wQ, QQ), setTimeout(FQ, JQ.t)) : FQ()
                    })(QQ.friend.name)
                  }
                }, QQ.friend.name))), AQ.loaded && 0 === AQ.friends.length && (0, uQ.jsx)(mF, {
                  playersHere: NQ,
                  exclude: GQ,
                  uC: QQ => CF(QQ, "suggestion")
                })]
              }), lQ && AQ.loaded && 0 === AQ.friends.length && 0 === AF.length && (0, uQ.jsx)("div", {
                className: "WorldSocialEmpty",
                children: DQ("worldSocial:whitelistNoFriends")
              })]
            })]
          })]
        }), sQ && (0, uQ.jsxs)(YQ.L, {
          className: "WorldSocialManageLobby SmallTextLight",
          onClick: () => {
            (0, WF.e)({
              page: "players",
              source: "invite_popup"
            }), oQ()
          },
          children: [(0, uQ.jsx)(tQ.c, {
            name: "users-gear"
          }), " ", DQ("lobbyManageEntry:manageLobby")]
        })]
      })
    }
    var sF = wQ(2395),
      rF = wQ(2349);

    function IF(QQ) {
      let {
        show: FQ,
        onClose: wQ,
        option: LQ
      } = QQ;
      const oQ = (0, RQ.g)("connectedGame", (QQ => (0, sF.c)(QQ) ? QQ.lobbyName : null));
      return function(QQ) {
        const {
          gameEntrySource: FQ,
          loadingOverlayVisible: wQ
        } = (0, aQ.l)(["gameEntrySource", "loadingOverlayVisible"]), {
          userContext: LQ
        } = (0, CQ.e)(), oQ = (0, RQ.k)("localPlayerAlive"), DQ = (0, RQ.g)("players", (QQ => null !== QQ.localId && void 0 !== QQ.byId[QQ.localId])), kQ = (0, rF.n)(), vQ = (0, qQ.useRef)(null), mQ = (0, qQ.useRef)(null), uQ = "worldCreation" === FQ, HQ = LQ.whamm, bQ = LQ.getPersonalWorldLobbyName();
        (0, qQ.useEffect)((() => {
          var FQ;
          null !== QQ && (null === (FQ = mQ.current) || void 0 === FQ ? void 0 : FQ.lobbyName) !== QQ && null !== KF(QQ, uQ, HQ, bQ) && (mQ.current = (0, LF.e)(QQ))
        }), [uQ, QQ, HQ, bQ]), (0, qQ.useEffect)((() => {
          if (null !== QQ && (!wQ && oQ && DQ)) return kQ.whenShown((() => {
            var FQ;
            const wQ = vQ.current === QQ ? null : KF(QQ, uQ, HQ, bQ);
            if (null === wQ) return;
            const LQ = (null === (FQ = mQ.current) || void 0 === FQ ? void 0 : FQ.lobbyName) === QQ ? mQ.current : (0, LF.e)(QQ);
            mQ.current = null, vQ.current = QQ,
              function(QQ, FQ, wQ, LQ) {
                const {
                  lobbyName: qQ
                } = QQ, oQ = () => {
                  ! function(QQ, FQ) {
                    if (!XF()) return void FQ(!0);
                    const wQ = performance.now() + jF;
                    let LQ = 0;
                    const qQ = () => {
                      LQ = XF() ? 0 : LQ + 1, LQ >= 2 ? FQ(!0) : !aF(QQ) || performance.now() > wQ ? FQ(!1) : setTimeout(qQ, lF)
                    };
                    setTimeout(qQ, lF)
                  }(qQ, (oQ => {
                    LQ();
                    const DQ = "auto_existing" === FQ && CF(wQ);
                    oQ && aF(qQ) && !NF(qQ) && !DQ && (zF(QQ) ? TF(qQ) : (TF(qQ), SF(wQ), function(QQ) {
                      const FQ = AF.e.world_social_popup_v1;
                      return (0, AF.j)("world_social_popup_v1"), (0, wF.reportAnalyticsClick)({
                        id: "world_social.auto_open",
                        value: `${FQ}:${(0,xF.d)()}:${QQ}`
                      }), (0, YF.flushClientAnalyticsEvents)(), "auto_open" === FQ
                    }(FQ) && ((0, LF.b)(QQ), xQ.l.GA("toggleMenu", `inviteLink|${FQ}`), "inviteLink" !== aQ.c.get("openInGameMenuName") && console.warn("World social popup: the auto-open asked for it, but it didn't open"))))
                  }))
                };
                if ("auto" === FQ && !zF(QQ)) return void oQ();
                QQ.response.then((QQ => {
                  if (!("error" in QQ)) return QQ.settings.canManage ? void oQ() : (TF(qQ), void LQ());
                  LQ()
                }))
              }(LQ, wQ, HQ, (() => {
                vQ.current === QQ && (vQ.current = null)
              }))
          }))
        }), [kQ, uQ, wQ, QQ, oQ, DQ, HQ, bQ])
      }(oQ), (0, qQ.useEffect)((() => {
        FQ && null !== oQ && TF(oQ)
      }), [FQ, oQ]), null !== oQ ? (0, uQ.jsx)(RF, {
        show: FQ,
        onClose: wQ,
        opener: MF(LQ) ? LQ : "icon"
      }) : (0, uQ.jsx)(VQ.b, {
        show: FQ,
        onClose: wQ
      })
    }
    const UF = new Set;

    function NF(QQ) {
      return UF.has(QQ) || !!NQ.m.getItem(`worldSocialShown:${QQ}`)
    }

    function TF(QQ) {
      UF.add(QQ), NQ.m.setItem(`worldSocialShown:${QQ}`, !0)
    }

    function KF(QQ, FQ, wQ, LQ) {
      return NF(QQ) ? null : function(QQ) {
        let {
          justMade: FQ,
          playerId: wQ,
          lobbyName: LQ,
          personalWorld: qQ
        } = QQ;
        return FQ ? "auto" : !CF(wQ) && GF(LQ, qQ) ? "auto_existing" : null
      }({
        justMade: FQ,
        playerId: wQ,
        lobbyName: QQ,
        personalWorld: LQ
      })
    }

    function zF(QQ) {
      let {
        answer: FQ
      } = QQ;
      return null !== FQ && "settings" in FQ && !FQ.settings.canManage
    }
    const lF = 500,
      jF = 3e4;

    function aF(QQ) {
      return "inGame" === aQ.c.get("gameState") && mQ.gameBridge.latest("connectedGame").lobbyName === QQ
    }

    function XF() {
      return (0, fQ.c)() || aQ.c.get("loadingOverlayVisible") || (0, XQ.m)()
    }
    var fF = wQ(36378),
      VF = wQ(3045),
      hF = wQ(1940),
      JF = wQ(3037);

    function EF(QQ, FQ, wQ) {
      return JF.b.overridesTexture(QQ) ? JF.b.getTexture(QQ, FQ).url : wQ
    }
    var nF = wQ(9933);
    const gF = (QQ, FQ) => {
        (0, qQ.useEffect)((() => {
          setTimeout((() => {
            QQ && QQ.current && QQ.current.focus()
          }), 1)
        }), [FQ])
      },
      PF = (0, qQ.memo)((function(QQ) {
        let {
          isInputActive: FQ,
          onClose: wQ,
          onChange: LQ,
          textAreaRef: qQ,
          fontSize: oQ,
          lineHeight: DQ,
          currText: kQ
        } = QQ;
        return (0, uQ.jsxs)("div", {
          className: "WriteOnBoardWrapper",
          children: [(0, uQ.jsx)("img", {
            src: EF("board_full", VF.i.BLOCK, nF),
            alt: "Board",
            className: "WriteOnBoardImg"
          }), (0, uQ.jsx)("textarea", {
            className: "WriteOnBoardTextArea",
            value: kQ,
            ref: qQ,
            style: {
              fontSize: `${oQ}rem`,
              lineHeight: `${DQ}rem`
            },
            onKeyDown: QQ => {
              var FQ;
              "Escape" !== QQ.key && (QQ.stopPropagation(), "Tab" === QQ.key && function(QQ) {
                QQ.preventDefault();
                const FQ = QQ.target,
                  {
                    value: wQ
                  } = FQ;
                let LQ = FQ.selectionStart,
                  qQ = FQ.selectionEnd,
                  oQ = wQ.slice(LQ, qQ);
                if (!oQ.includes("\n") && !QQ.shiftKey) return void document.execCommand("insertText", !1, "\t");
                for (; LQ > 0 && "\n" !== wQ[LQ - 1];) LQ--;
                const DQ = "\n" === wQ[qQ - 1];
                DQ && qQ--;
                oQ = wQ.slice(LQ, qQ);
                const kQ = oQ.split("\n").map((FQ => QQ.shiftKey ? FQ.replace(/^\t/, "") : "\t" + FQ)).join("\n");
                if (QQ.shiftKey && wQ.slice(LQ, qQ) === kQ) return;
                let {
                  selectionStart: vQ
                } = FQ;
                FQ.setSelectionRange(LQ, qQ), vQ > LQ && (!QQ.shiftKey || "\t" === oQ[0]) && (vQ += QQ.shiftKey ? -1 : 1);
                qQ = LQ + kQ.length + (DQ ? 1 : 0), document.execCommand("insertText", !1, kQ), FQ.setSelectionRange(vQ, qQ)
              }(QQ), /^F\d+$/i.test(QQ.code) && null !== (FQ = hF.u.OpenCodeEditor) && void 0 !== FQ && FQ.includes(QQ.code) && wQ())
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: LQ
          })]
        })
      }));

    function ZF(QQ) {
      return 1.3 * QQ
    }
    var yF = wQ(1690);
    const BF = (0, qQ.memo)((function(QQ) {
        let {
          show: FQ,
          onOpen: wQ,
          onClose: LQ
        } = QQ;
        const [oQ, kQ] = (0, qQ.useState)(null), [vQ, HQ] = (0, qQ.useState)(""), [bQ, xQ] = (0, qQ.useState)(0), [AQ, tQ] = (0, qQ.useState)(null), [eQ, MQ] = (0, qQ.useState)({
          text: "",
          textSize: 0
        }), GQ = (QQ, FQ) => AQ ? (0, fF.o)(QQ, FQ, AQ.width, AQ.height) : (0, fF.g)(QQ, FQ), pQ = QQ => {
          HQ(GQ(vQ, QQ)), xQ(QQ), NQ.i.setItem("lastBoardTextSize", QQ)
        }, cQ = () => {
          LQ(), AQ && vQ === eQ.text && bQ === eQ.textSize || mQ.gameBridge.send("writeOnBoard", {
            pos: oQ,
            text: vQ,
            textSize: bQ
          })
        };
        (0, RQ.d)("boardEditRequested", (QQ => {
          var qQ, oQ;
          if (!UQ.featureFlags.canSeePlayerWrittenText) return;
          if (null === QQ) return kQ(null), void(FQ && LQ());
          const {
            pos: DQ,
            noticeboardSpan: vQ,
            text: mQ
          } = QQ;
          kQ(DQ), tQ(vQ), HQ(mQ);
          const uQ = null !== (qQ = null !== (oQ = QQ.textSize) && void 0 !== oQ ? oQ : NQ.i.getItem("lastBoardTextSize")) && void 0 !== qQ ? qQ : 0;
          xQ(uQ), MQ({
            text: mQ,
            textSize: uQ
          }), NQ.i.setItem("lastBoardTextSize", uQ), wQ()
        }));
        const CQ = (0, qQ.useRef)(null);
        gF(CQ, FQ), (0, yF.o)(CQ, {
          kind: "sign",
          submit: cQ
        });
        const SQ = function(QQ, FQ) {
            const wQ = fF.e[QQ];
            if (!FQ) return wQ.uiFontSize;
            const {
              numLines: LQ,
              charsPerLine: qQ
            } = (0, fF.v)(FQ.width, FQ.height, QQ);
            return wQ.uiFontSize * Math.min(wQ.charsPerLine / qQ, wQ.numLines / LQ)
          }(bQ, AQ),
          iQ = ZF(SQ);
        return (0, uQ.jsxs)(DQ.d, {
          className: "WriteOnBoardBg",
          close: cQ,
          escDoesExit: !0,
          show: FQ,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, uQ.jsx)(PF, {
            isInputActive: () => FQ,
            onClose: cQ,
            onChange: QQ => {
              HQ(GQ(QQ.target.value, bQ))
            },
            textAreaRef: CQ,
            fontSize: SQ,
            lineHeight: iQ,
            currText: vQ
          }), (0, uQ.jsx)("div", {
            className: "WriteOnBoardTextSizeHeader SmallTextBold",
            children: "Text Size"
          }), (0, uQ.jsxs)("div", {
            className: "WriteOnBoardTextSizeButtons",
            children: [(0, uQ.jsx)(YQ.f, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                pQ(0)
              },
              disabled: 0 === bQ,
              children: "Small"
            }), (0, uQ.jsx)(YQ.f, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                pQ(1)
              },
              disabled: 1 === bQ,
              children: "Medium"
            }), (0, uQ.jsx)(YQ.f, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                pQ(2)
              },
              disabled: 2 === bQ,
              children: "Large"
            })]
          })]
        })
      })),
      dF = (0, qQ.memo)((function(QQ) {
        let {
          show: FQ,
          onOpen: wQ,
          onClose: LQ
        } = QQ;
        const [oQ, kQ] = (0, qQ.useState)(""), vQ = () => {
          LQ(), mQ.gameBridge.send("writeNameTag", oQ)
        };
        (0, iQ.g)("EditNameTag", (QQ => {
          UQ.featureFlags.canSeePlayerWrittenText && null !== QQ && (kQ(QQ), wQ())
        }));
        const HQ = (0, qQ.useRef)(null);
        gF(HQ, FQ), (0, yF.o)(HQ, {
          kind: "nameTag",
          submit: vQ
        });
        const bQ = fF.H.nameTag.uiFontSize,
          xQ = ZF(bQ);
        return (0, uQ.jsxs)(DQ.d, {
          className: "WriteOnBoardBg",
          close: vQ,
          escDoesExit: !0,
          show: FQ,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, uQ.jsx)("div", {
            className: "NameTagTrim",
            children: (0, uQ.jsx)(PF, {
              isInputActive: () => FQ,
              onClose: vQ,
              onChange: QQ => {
                const FQ = QQ.target.value.replaceAll("\n", "");
                kQ((0, fF.p)(FQ, "nameTag"))
              },
              textAreaRef: HQ,
              fontSize: bQ,
              lineHeight: xQ,
              currText: oQ
            })
          }), (0, uQ.jsx)(YQ.f, {
            onClick: vQ,
            className: "WriteOnNameTagCloseButton",
            children: "Finish"
          })]
        })
      }));
    var Qw = wQ(18175);
    const Fw = (0, qQ.memo)((function(QQ) {
      let {
        show: FQ,
        onOpen: wQ,
        onClose: LQ
      } = QQ;
      const [oQ, kQ] = (0, qQ.useState)(""), [vQ, HQ] = (0, qQ.useState)(0), [bQ, xQ] = (0, qQ.useState)(!1), [AQ, tQ] = (0, qQ.useState)(["", "", "", "", "", "", "", "", "", ""]), [eQ, MQ] = (0, qQ.useState)("Title"), [GQ, pQ] = (0, qQ.useState)(!0), [cQ, CQ] = (0, qQ.useState)(!1);
      (0, iQ.g)("EditBook", (QQ => {
        let {
          pages: FQ,
          title: LQ,
          isPublished: qQ
        } = QQ;
        var oQ;
        UQ.featureFlags.canSeePlayerWrittenText && (null !== FQ ? (tQ(FQ), kQ(null !== (oQ = FQ[0]) && void 0 !== oQ ? oQ : ""), MQ(LQ), HQ(0), xQ(!1), pQ(!qQ), CQ(!1), wQ()) : tQ(["", "", "", "", "", "", "", "", "", ""]))
      }));
      const SQ = (0, qQ.useRef)(null),
        WQ = (0, qQ.useRef)(null);
      gF(SQ, FQ), (0, yF.o)(SQ, {
        kind: "book"
      }), (0, yF.o)(WQ, {
        kind: "Tm"
      });
      const RQ = fF.H.book.uiFontSize,
        OQ = ZF(RQ),
        sQ = () => {
          (GQ || cQ) && mQ.gameBridge.send("writeBook", {
            pages: [...AQ],
            title: eQ,
            published: !GQ && cQ
          })
        },
        rQ = QQ => {
          bQ && (AQ[vQ] = oQ, xQ(!1)), kQ(AQ[QQ]), HQ(QQ)
        };
      return (0, uQ.jsxs)(DQ.d, {
        className: "WriteOnBoardBg",
        close: () => {
          LQ(), AQ[vQ] = oQ, sQ()
        },
        escDoesExit: !0,
        show: FQ,
        togglePointerLock: !1,
        globallyUniqueKey: "WriteOnBookComp",
        children: [(0, uQ.jsxs)("div", {
          className: "WriteOnBookWrapper",
          children: [(0, uQ.jsx)("textarea", {
            className: "BookTitleTextArea SmallTextLight",
            value: eQ,
            ref: WQ,
            style: {
              fontSize: "2.5rem",
              lineHeight: `${OQ}rem`
            },
            onKeyDown: QQ => {
              GQ && QQ.stopPropagation()
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: QQ => {
              let FQ = QQ.target.value;
              FQ = (0, fF.p)(FQ, "Tm"), MQ(FQ)
            },
            readOnly: !GQ
          }), (0, uQ.jsx)("img", {
            src: EF("book_page", VF.i.ITEM, Qw),
            alt: "book_page",
            className: "WriteOnBookPageImg"
          }), (0, uQ.jsx)("div", {
            className: "BookTextAreaPadding",
            children: (0, uQ.jsx)("textarea", {
              className: "WriteOnBookPageTextArea",
              value: oQ,
              ref: SQ,
              style: {
                fontSize: `${RQ}rem`,
                lineHeight: `${OQ}rem`
              },
              onKeyDown: QQ => {
                GQ && QQ.stopPropagation()
              },
              spellCheck: "false",
              autoComplete: "off",
              onChange: QQ => {
                const FQ = QQ.target.value;
                kQ((0, fF.p)(FQ, "book")), xQ(!0)
              },
              readOnly: !GQ
            })
          })]
        }), (0, uQ.jsxs)("div", {
          className: "BookNavigationWrapper",
          children: [(0, uQ.jsx)(YQ.f, {
            disabled: 0 === vQ,
            onClick: () => {
              rQ(vQ - 1)
            },
            className: "BookNavButton",
            children: "<"
          }), (0, uQ.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, uQ.jsx)(YQ.f, {
            disabled: 9 === vQ,
            onClick: () => {
              rQ(vQ + 1)
            },
            className: "BookNavButton",
            children: ">"
          }), (0, uQ.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, uQ.jsx)(YQ.f, {
            onClick: () => {
              pQ(!GQ), CQ(!0)
            },
            className: "BookNavButton",
            children: GQ ? "Publish" : "Edit"
          })]
        })]
      })
    }));
    var ww = wQ(36238),
      Lw = wQ(8423),
      qw = wQ(1395),
      ow = wQ(1887);

    function Dw(QQ) {
      let {
        show: FQ,
        buttons: wQ
      } = QQ;
      const {
        t: LQ
      } = (0, PQ.y)(), oQ = (0, qQ.useRef)(null);
      return (0, qQ.useEffect)((() => {
        var QQ, wQ;
        const LQ = FQ ? (0, ww.w)() : null;
        if (!LQ || !(0, qw.d)()) return;
        const qQ = (0, ww.m)().findIndex((QQ => QQ.id === LQ));
        (0, Lw.q)(null !== (QQ = null === (wQ = oQ.current) || void 0 === wQ ? void 0 : wQ.children[qQ]) && void 0 !== QQ ? QQ : null)
      }), [FQ]), 0 === wQ.length ? null : (0, uQ.jsx)("div", {
        ref: oQ,
        className: "ClientGameInventoryButtons",
        onPointerDown: QQ => {
          QQ.stopPropagation()
        },
        onPointerUp: QQ => {
          QQ.stopPropagation()
        },
        children: wQ.map((QQ => {
          const FQ = LQ(QQ.labelKey);
          return (0, uQ.jsxs)(YQ.m, {
            className: QQ.className,
            disabled: QQ.disabled,
            onClick: () => {
              (0, ww.q)(QQ)
            },
            ariaLabel: QQ.iconOnly ? FQ : void 0,
            title: QQ.iconOnly ? FQ : void 0,
            children: [QQ.icon && (0, uQ.jsxs)("div", {
              className: "ClientGameInventoryButtonIcon",
              children: ["item" === QQ.icon.kind && (0, uQ.jsx)(ow.e, {
                itemName: QQ.icon.name,
                amount: 0
              }), "image" === QQ.icon.kind && (0, uQ.jsx)("img", {
                src: QQ.icon.src,
                alt: "",
                draggable: !1
              }), "icon" === QQ.icon.kind && (0, uQ.jsx)(tQ.c, {
                name: QQ.icon.name
              })]
            }), !QQ.iconOnly && FQ]
          }, QQ.id)
        }))
      })
    }
    var kw = wQ(36382),
      vw = wQ(2649),
      mw = wQ(9116),
      uw = wQ(36157),
      Hw = wQ(36149);
    let bw = null;
    window.setShowInventoryAdsOverride = QQ => {
      bw = QQ
    };
    const Yw = 24e4;
    var xw = wQ(1895);

    function Aw(QQ) {
      var FQ;
      let {
        draggedInfo: {
          name: wQ,
          attributes: LQ,
          amount: qQ
        },
        toAddRef: oQ
      } = QQ;
      return (0, uQ.jsx)("div", {
        className: "DraggedInvenItem",
        ref: oQ,
        children: (0, uQ.jsx)(ow.e, {
          itemName: wQ,
          amount: qQ,
          enchantmentTier: null === LQ || void 0 === LQ || null === (FQ = LQ.customAttributes) || void 0 === FQ ? void 0 : FQ.enchantmentTier,
          bar: (0, xw.i)(LQ)
        })
      })
    }

    function tw(QQ) {
      let {
        className: FQ = "",
        displayInfo: wQ,
        domRef: LQ
      } = QQ;
      return (0, uQ.jsxs)("div", {
        className: `InvenHoveredItemInfo SmallTextBold ${FQ}`,
        ref: LQ,
        children: [(0, uQ.jsx)(SQ.e, {
          text: (0, WQ.ub)(wQ.name, {
            fontStyle: wQ.fontStyle
          })
        }), (0, uQ.jsx)("div", {
          className: "InvenHoveredItemInfoDescription",
          children: (0, uQ.jsx)(SQ.e, {
            text: wQ.desc
          })
        })]
      })
    }

    function ew(QQ) {
      let {
        info: FQ,
        draggedInfo: wQ
      } = QQ;
      const LQ = (0, qQ.useRef)(null);
      return (0, qQ.useLayoutEffect)((() => {
        const QQ = LQ.current,
          {
            left: wQ,
            top: qQ
          } = function(QQ, FQ, wQ, LQ) {
            const qQ = LQ.left * wQ.width / 100 + 4,
              oQ = wQ.width - LQ.right * wQ.width / 100 - 4 - FQ.width,
              DQ = LQ.top * wQ.height / 100 + 4,
              kQ = wQ.height - 4 - FQ.height;
            return {
              left: Math.max(qQ, Math.min(QQ.x - FQ.width / 2, oQ)),
              top: Math.max(DQ, Math.min(QQ.y - 48 - FQ.height, kQ))
            }
          }({
            x: FQ.initTouchX,
            y: FQ.initTouchY
          }, {
            width: QQ.offsetWidth,
            height: QQ.offsetHeight
          }, {
            width: window.innerWidth,
            height: window.innerHeight
          }, aQ.c.get("notchSize"));
        QQ.style.left = `${wQ}px`, QQ.style.top = `${qQ}px`
      }), [FQ]), (0, uQ.jsxs)("div", {
        className: "LongHoldSplitInfoUI SmallTextBold",
        ref: LQ,
        children: [(0, uQ.jsx)("div", {
          className: "LongHoldSplitInfoUIInner",
          style: {
            width: wQ.amount / FQ.maxAmount * 100 + "%"
          }
        }), (0, uQ.jsxs)("div", {
          className: "LongHoldSplitInfoUIText",
          children: [wQ.amount, "/", FQ.maxAmount]
        })]
      })
    }
    var Mw = wQ(1070),
      Gw = wQ.n(Mw),
      pw = wQ(201);
    const Cw = (0, qQ.memo)((function(QQ) {
      let {
        show: FQ,
        onOpen: wQ,
        onClose: LQ
      } = QQ;
      const oQ = (0, qQ.useRef)({
          pos: null
        }),
        [kQ, vQ] = (0, qQ.useState)([0, 0, 0, 0]),
        {
          userContext: HQ
        } = (0, CQ.e)();
      (0, RQ.d)("ironChestOpenRequested", (QQ => {
        let {
          pos: FQ,
          ownerDbId: LQ,
          cachedPasskey: qQ
        } = QQ;
        if (oQ.current.pos = FQ, LQ !== HQ.whamm) return null !== qQ ? (vQ(qQ), void bQ(qQ)) : void wQ();
        bQ(kQ)
      })), (0, RQ.d)("localEffectUpdated", (QQ => {
        "Thief" === QQ && LQ()
      }));
      const bQ = QQ => {
        const {
          pos: FQ
        } = oQ.current;
        mQ.gameBridge.send("openIronChest", {
          pos: FQ,
          pu: QQ
        })
      };
      return (0, uQ.jsx)(DQ.d, {
        className: "IronChestPasskeyInputScreenOuter",
        close: LQ,
        escDoesExit: !0,
        show: FQ,
        togglePointerLock: !1,
        globallyUniqueKey: "IronChestPasskeyInputScreen",
        children: (0, uQ.jsx)("div", {
          className: "IronChestPasskeyInputScreen",
          children: (0, uQ.jsx)(Sw, {
            pu: kQ,
            onPasskeyUpdated: vQ,
            confirmText: "ironChest:tryUnlock",
            onConfirm: () => {
              bQ(kQ)
            }
          })
        })
      })
    }));

    function Sw(QQ) {
      let {
        className: FQ = "",
        pu: wQ,
        onPasskeyUpdated: LQ,
        confirmText: qQ,
        onConfirm: oQ
      } = QQ;
      const {
        t: DQ
      } = (0, PQ.y)();
      return (0, uQ.jsxs)("div", {
        className: `${FQ} IronChestPasskeyInput`,
        children: [(0, uQ.jsx)("div", {
          className: "SmallTextBold IronChestPasskeyInputTitle",
          children: DQ("ironChest:passkeyInputTitle")
        }), (0, uQ.jsx)("div", {
          className: "IronChestPasskeyInputRow",
          children: new Array(pw.e.ironChestPasskeyLength).fill(0).map(((QQ, FQ) => (0, uQ.jsx)(iw, {
            digit: wQ[FQ],
            onPasskeyDigitUpdated: QQ => {
              const qQ = [...wQ];
              qQ[FQ] = QQ, LQ(qQ)
            }
          }, FQ)))
        }), (0, uQ.jsx)(YQ.m, {
          className: "IronChestPasskeyInputConfirmButton",
          onClick: oQ,
          children: DQ(qQ)
        })]
      })
    }

    function iw(QQ) {
      let {
        digit: FQ,
        onPasskeyDigitUpdated: wQ
      } = QQ;
      return (0, uQ.jsx)("div", {
        className: "IronChestPasskeyDigitInputWrapper",
        children: (0, uQ.jsxs)("div", {
          className: "IronChestPasskeyDigitInput",
          children: [(0, uQ.jsx)(YQ.m, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              wQ(WQ.e.mod(FQ + 1, 10))
            },
            children: (0, uQ.jsx)(tQ.c, {
              name: "angle-up"
            })
          }), (0, uQ.jsx)("div", {
            className: "SmallTextBold IronChestPasskeyDigit",
            children: FQ
          }), (0, uQ.jsx)(YQ.m, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              wQ(WQ.e.mod(FQ - 1, 10))
            },
            children: (0, uQ.jsx)(tQ.c, {
              name: "angle-down"
            })
          })]
        })
      })
    }
    var Ww = wQ(9110),
      Rw = wQ(36426),
      Ow = wQ(36147);

    function sw(QQ) {
      let {
        specialItemInfo: FQ,
        setHovered: wQ,
        pointerDown: LQ,
        pointerUp: oQ,
        enchantingTablePosition: DQ,
        enchantingTableBlockName: kQ
      } = QQ;
      const {
        t: HQ
      } = (0, PQ.y)(), [bQ, xQ] = (0, qQ.useState)(null), [AQ, tQ] = (0, qQ.useState)(null), eQ = (0, vQ.l)("auraPerLevel"), MQ = Math.floor((0, RQ.k)("aura") / eQ);
      (0, qQ.useEffect)((() => {
        if (!FQ) return void xQ(null);
        let QQ = !0;
        return mQ.gameBridge.query("enchantingOffer", {
          slot: FQ.idx,
          name: FQ.name,
          blockName: kQ
        }).then((wQ => {
          var LQ, qQ;
          let {
            perks: oQ,
            options: DQ
          } = wQ;
          if (!QQ) return;
          const kQ = {
            isEnchantable: oQ.length > 0,
            possibleEnchantments: oQ,
            options: DQ.map((QQ => {
              let {
                level: FQ,
                odds: wQ
              } = QQ;
              return {
                level: FQ,
                possibilities: Object.fromEntries(wQ.map(((QQ, FQ) => [`Tier ${FQ+1}`, QQ])))
              }
            })),
            isAlreadyEnchanted: oQ.length > 0 && void 0 !== (null === (LQ = FQ.attributes) || void 0 === LQ || null === (qQ = LQ.customAttributes) || void 0 === qQ ? void 0 : qQ.enchantmentTier)
          };
          xQ(kQ), (QQ => {
            const FQ = QQ.options.map((QQ => Object.entries(QQ.possibilities).map((QQ => {
              let [FQ, wQ] = QQ;
              return {
                str: `${FQ}: ${wQ>0?wQ<.01?wQ.toPrecision(1):wQ.toFixed(2):0}%\n`,
                style: {
                  color: WQ.pb[FQ]
                }
              }
            }))));
            tQ(FQ)
          })(kQ)
        })), () => {
          QQ = !1
        }
      }), [FQ, DQ, kQ]);
      const GQ = [];
      for (let qQ = 0; qQ < Rw.d; qQ++) {
        const QQ = null === bQ || void 0 === bQ ? void 0 : bQ.options[qQ],
          LQ = !QQ || QQ.level > MQ;
        GQ.push((0, uQ.jsx)(YQ.f, {
          className: "EnchantmentButton",
          onPointerEnter: QQ ? QQ => null === wQ || void 0 === wQ ? void 0 : wQ()(!0, {
            name: "",
            desc: AQ[qQ]
          }, QQ) : void 0,
          onPointerLeave: QQ ? () => null === wQ || void 0 === wQ ? void 0 : wQ()(!1) : void 0,
          onClick: LQ ? void 0 : () => {
            mQ.gameBridge.send("enchantItem", {
              slot: FQ.idx,
              level: QQ.level,
              tablePos: DQ
            }), xQ(null)
          },
          disabled: LQ,
          children: QQ ? (0, uQ.jsxs)(uQ.Fragment, {
            children: [(0, uQ.jsxs)("h1", {
              className: "EnchantmentLevels",
              children: [(0, uQ.jsxs)("span", {
                className: "EnchantmentLevelsCost",
                children: [HQ("enchantments:cost"), ": "]
              }), " ", HQ("enchantments:levels", {
                level: QQ.level
              })]
            }), (0, uQ.jsxs)("div", {
              className: "EnchantmentPossibilities",
              children: [(0, uQ.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, uQ.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: HQ("enchantments:tier")
                }), Object.entries(QQ.possibilities).map((QQ => {
                  let [FQ, wQ] = QQ;
                  return 0 === wQ ? null : (0, uQ.jsx)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: WQ.pb[FQ]
                    },
                    children: FQ
                  }, FQ)
                }))]
              }), (0, uQ.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, uQ.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: HQ("enchantments:odds")
                }), Object.entries(QQ.possibilities).map((QQ => {
                  let [FQ, wQ] = QQ;
                  return 0 === wQ ? null : (0, uQ.jsxs)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: WQ.pb[FQ]
                    },
                    children: [wQ > 0 && wQ < .1 ? "<0.1" : wQ.toFixed(0 < wQ && wQ < .95 ? 1 : 0), "%"]
                  }, FQ)
                }))]
              })]
            })]
          }) : !1 === (null === bQ || void 0 === bQ ? void 0 : bQ.isEnchantable) ? (0, uQ.jsx)("h1", {
            className: "EnchantmentLevels",
            children: HQ("enchantments:notEnchantable")
          }) : (0, uQ.jsx)("h1", {
            className: "EnchantmentLevels",
            children: HQ("enchantments:enterItem")
          })
        }, qQ))
      }
      return (0, uQ.jsxs)("div", {
        className: "EnchantingTable",
        children: [(0, uQ.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: kQ
        }), (0, uQ.jsxs)("div", {
          className: "EnchantingTableBody",
          children: [(0, uQ.jsxs)("div", {
            className: "EnchantingTableLeft",
            children: [(0, uQ.jsx)(Ow.d, {
              idx: Hw.d,
              setHovered: QQ => {
                null === wQ || void 0 === wQ || wQ(Hw.d)(QQ)
              },
              pointerDown: LQ,
              pointerUp: oQ,
              draggedInfo: null,
              specialItemInfo: FQ,
              variation: "Enchanting Table"
            }), bQ && bQ.possibleEnchantments.length > 0 && (0, uQ.jsxs)("div", {
              className: "PossibleEnchantments",
              children: [(0, uQ.jsx)("h2", {
                children: "Possible Perks:"
              }), bQ.possibleEnchantments.map((QQ => (0, uQ.jsxs)(qQ.Fragment, {
                children: [(0, uQ.jsxs)("div", {
                  className: "PossibleEnchantmentName",
                  children: [(0, uQ.jsx)("div", {
                    className: "PossibleEnchantmentIcon",
                    children: (0, uQ.jsx)(ow.e, {
                      itemName: `${QQ} Enchantment`,
                      amount: 1
                    })
                  }), (0, uQ.jsx)("div", {
                    className: "PossibleEnchantmentNameText",
                    children: QQ
                  })]
                }), (0, uQ.jsx)("div", {
                  className: "PossibleEnchantmentDescription",
                  children: HQ((0, Ww.g)(QQ).translationKey)
                })]
              }, QQ)))]
            })]
          }), (0, uQ.jsxs)("div", {
            className: "EnchantmentOptions",
            children: [bQ && bQ.isAlreadyEnchanted && (0, uQ.jsx)("div", {
              className: "AlreadyEnchantedWarning",
              children: HQ("enchantments:alreadyEnchanted")
            }), GQ]
          })]
        })]
      })
    }
    var rw = wQ(36435);

    function Iw(QQ) {
      var FQ;
      let {
        specialItemInfo: wQ,
        setSpecialItemInfo: LQ,
        setHovered: oQ,
        pointerDown: DQ,
        pointerUp: kQ
      } = QQ;
      const {
        t: vQ
      } = (0, PQ.y)(), HQ = (0, RQ.g)("inventory", (QQ => QQ.freeSlots)), [bQ, xQ] = (0, qQ.useState)(null);
      (0, qQ.useEffect)((() => {
        if (wQ) {
          const QQ = (0, rw.e)(wQ.name, wQ.amount);
          xQ({
            salvageable: !!QQ,
            produces: QQ
          })
        } else xQ(null)
      }), [wQ, null === wQ || void 0 === wQ ? void 0 : wQ.name, null === wQ || void 0 === wQ ? void 0 : wQ.amount]);
      const AQ = !!wQ && !(null === bQ || void 0 === bQ || !bQ.salvageable) && !(null !== (FQ = bQ.produces) && void 0 !== FQ && FQ.some((QQ => {
        let {
          amt: FQ
        } = QQ;
        return FQ < 1
      })));
      return (0, uQ.jsxs)("div", {
        className: "SalvagingTable",
        children: [(0, uQ.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: vQ("item:salvagingTable")
        }), (0, uQ.jsxs)("div", {
          className: "SalvagingTableBody",
          children: [(0, uQ.jsx)("div", {
            className: "SalvagingTableLeft",
            children: (0, uQ.jsx)(Ow.d, {
              idx: Hw.d,
              setHovered: QQ => {
                null === oQ || void 0 === oQ || oQ(Hw.d)(QQ)
              },
              pointerDown: DQ,
              pointerUp: kQ,
              draggedInfo: null,
              specialItemInfo: wQ,
              variation: "Salvaging Table"
            })
          }), (0, uQ.jsx)("div", {
            className: "SalvagingTableRight",
            children: (0, uQ.jsx)(YQ.f, {
              className: "SalvageButton",
              onClick: AQ ? () => {
                const {
                  idx: QQ,
                  name: FQ,
                  amount: qQ
                } = wQ;
                mQ.gameBridge.send("salvageItem", {
                  slot: QQ,
                  name: FQ,
                  amount: qQ
                }) && (xQ(null), LQ(null))
              } : void 0,
              disabled: !AQ,
              children: bQ ? bQ.salvageable ? bQ.produces.some((QQ => {
                let {
                  amt: FQ
                } = QQ;
                return FQ < 1
              })) ? (0, uQ.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, uQ.jsx)("div", {
                  className: "SalvageText Error",
                  children: vQ("salvagingTable:notEnoughResources")
                })
              }) : HQ < bQ.produces.length ? (0, uQ.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, uQ.jsx)("div", {
                  className: "SalvageText Error",
                  children: vQ("salvagingTable:notEnoughInventorySpace")
                })
              }) : (0, uQ.jsxs)("div", {
                className: "SalvageButtonText",
                children: [(0, uQ.jsx)("div", {
                  className: "SalvageText",
                  children: vQ("salvagingTable:salvage")
                }), (0, uQ.jsx)("div", {
                  className: "SalvageIcons",
                  children: bQ.produces.map(((QQ, FQ) => {
                    let {
                      item: wQ,
                      amt: LQ
                    } = QQ;
                    return (0, uQ.jsx)("div", {
                      className: "SalvageIcon",
                      children: (0, uQ.jsx)(ow.e, {
                        itemName: wQ,
                        amount: Math.floor(LQ)
                      })
                    }, FQ)
                  }))
                })]
              }) : (0, uQ.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, uQ.jsx)("div", {
                  className: "SalvageText Error",
                  children: vQ("salvagingTable:unsalvageable")
                })
              }) : (0, uQ.jsx)(uQ.Fragment, {})
            })
          })]
        })]
      })
    }
    var Uw = wQ(217),
      Nw = wQ(9195),
      Tw = wQ(2609),
      Kw = wQ(1682),
      zw = wQ(8439),
      lw = wQ(8431),
      jw = wQ(1668),
      aw = wQ(1957),
      Xw = wQ(1407),
      fw = wQ(2032);

    function Vw(QQ, FQ, wQ) {
      const LQ = QQ.trim().toLowerCase();
      if ("" === LQ) return 0;
      let qQ = null;
      for (const oQ of FQ) {
        const QQ = oQ.toLowerCase().indexOf(LQ);
        if (0 === QQ) return 0;
        QQ > 0 && (qQ = 1)
      }
      if (null !== qQ) return qQ;
      for (const oQ of wQ)
        if (oQ.toLowerCase().includes(LQ)) return 2;
      return null
    }

    function hw(QQ) {
      return QQ.map((QQ => {
        var FQ;
        return QQ ? {
          name: QQ.name,
          amount: null !== (FQ = QQ.amount) && void 0 !== FQ ? FQ : 1
        } : null
      }))
    }

    function Jw(QQ) {
      return QQ < 1e3 ? `${QQ}` : QQ < 1e4 ? Math.floor(QQ / 100) / 10 + "k" : `${Math.floor(QQ/1e3)}k`
    }
    var Ew = wQ(36439);
    const nw = YQ.f,
      gw = {
        initialDelayMs: 400,
        intervalMs: 100
      },
      Pw = () => {
        const QQ = (0, Xw.d)();
        return QQ ? QQ.getPadRepeatTiming(gw) : gw
      };

    function Zw(QQ, FQ, wQ) {
      var LQ, qQ;
      const oQ = (0, mw.q)(FQ, QQ);
      let DQ = null === (LQ = FQ[QQ]) || void 0 === LQ ? void 0 : LQ.description;
      if (wQ && (null === (qQ = (0, Ew.h)().get(QQ)) || void 0 === qQ || !qQ.hideIngredients)) {
        DQ ? (DQ = (0, WQ.ub)(DQ), DQ.push({
          str: "\n"
        })) : DQ = [], DQ.push({
          str: "\n"
        }), DQ.push({
          str: "Can be crafted from:\n"
        });
        for (const QQ of wQ) "string" === typeof QQ && (DQ.push({
          icon: QQ,
          style: {
            fontSize: "1.5em"
          }
        }), DQ.push({
          str: " "
        }), DQ.push(...(0, WQ.ub)((0, mw.q)(FQ, QQ))), DQ.push({
          str: "\n"
        }))
      }
      return {
        name: oQ,
        desc: DQ
      }
    }

    function yw(QQ) {
      let {
        name: FQ,
        Cm: wQ
      } = QQ;
      return `${FQ}_${wQ}`
    }

    function Bw(QQ) {
      var FQ;
      let {
        onClick: wQ,
        itemName: LQ,
        recipeId: oQ,
        isSelected: DQ,
        haveIngredients: kQ,
        craftable: vQ,
        setHovered: mQ,
        padActions: HQ,
        marked: bQ,
        lock: YQ,
        itemInfo: xQ
      } = QQ;
      const AQ = (0, qQ.useRef)(null);
      return (0, zw.d)(AQ, {
        press: QQ => !kQ || "secondary" === QQ && !vQ ? (HQ.refuse(), !1) : "primary" === QQ ? (HQ.choose(), !0) : HQ.craft(),
        release: HQ.stopCraft,
        hints: {
          primary: "inventoryChooseRecipe",
          secondary: "inventoryCraft"
        }
      }), (0, uQ.jsxs)("div", {
        ref: AQ,
        className: Gw()("InvenItem", {
          CraftableItemNotEnoughIngredients: !kQ && !YQ,
          CraftableItemMarked: bQ,
          CraftableItemLocked: void 0 !== YQ,
          CraftableItemLockedFar: (null !== (FQ = null === YQ || void 0 === YQ ? void 0 : YQ.stepsAway) && void 0 !== FQ ? FQ : 1) > 1
        }),
        "data-recipe-key": oQ,
        "data-pad-inventory-default": DQ ? "" : void 0,
        onClick: wQ,
        style: {
          cursor: DQ ? null : "pointer"
        },
        onPointerEnter: QQ => {
          null === mQ || void 0 === mQ || mQ(!0, Zw(LQ, xQ)), !DQ && (0, jw.o)(QQ.nativeEvent) && (0, lw.h)() && wQ()
        },
        onPointerLeave: () => {
          null === mQ || void 0 === mQ || mQ(!1)
        },
        children: [(0, uQ.jsx)(ow.e, {
          itemName: LQ,
          amount: 1
        }), bQ && (0, uQ.jsx)("span", {
          className: "CraftableItemMarkBadge",
          "aria-hidden": "true",
          children: "!"
        }), YQ && (0, uQ.jsxs)("span", {
          className: "CraftableItemLockTag",
          children: [(0, uQ.jsx)(tQ.c, {
            name: "lock"
          }), (0, uQ.jsx)(SQ.e, {
            text: YQ.tag
          })]
        })]
      })
    }

    function dw(QQ) {
      let {
        idx: FQ,
        status: wQ,
        shownItem: LQ,
        dim: oQ,
        onHoverStart: DQ,
        onHoverEnd: kQ,
        onPadBack: vQ
      } = QQ;
      const mQ = (0, qQ.useRef)(null);
      (0, zw.d)(mQ, {
        press: () => !1,
        back: vQ,
        hints: {
          back: "inventoryBackToRecipes"
        }
      });
      const HQ = wQ.need > 0 ? Math.min(wQ.have / wQ.need, 1) : 1;
      return (0, uQ.jsxs)("div", {
        ref: mQ,
        className: Gw()("CupTile", {
          Short: wQ.missing > 0
        }),
        style: {
          width: oQ,
          height: oQ
        },
        "data-craft-ingredient": FQ,
        onPointerEnter: DQ,
        onPointerLeave: kQ,
        children: [(0, uQ.jsx)("div", {
          className: "CupFill",
          style: {
            transform: `scaleY(${HQ})`
          }
        }), (0, uQ.jsx)(ow.e, {
          itemName: LQ,
          amount: 0
        }), (0, uQ.jsxs)("div", {
          className: "CupCount SmallTextBold",
          children: [Jw(wQ.have), "/", Jw(wQ.need)]
        })]
      })
    }

    function QL(QQ) {
      var FQ, wQ, LQ, oQ, DQ;
      let {
        show: kQ,
        recipeItem: {
          name: vQ,
          Cm: HQ,
          requires: bQ,
          produces: YQ,
          haveIngredients: xQ
        },
        detail: AQ,
        onCraft: tQ,
        setHovered: eQ,
        craftButtonRef: MQ,
        onPadBack: GQ,
        showPadShortcut: pQ,
        refusedCount: cQ,
        lock: CQ,
        itemInfo: iQ
      } = QQ;
      const {
        t: WQ
      } = (0, PQ.y)(), RQ = null !== AQ && !AQ.roomForOne, OQ = null !== (FQ = null === AQ || void 0 === AQ ? void 0 : AQ.craftAllTimes) && void 0 !== FQ ? FQ : 0, sQ = function(QQ, FQ) {
        return QQ.map((QQ => {
          let {
            items: wQ,
            amt: LQ
          } = QQ, qQ = 0;
          const oQ = [];
          for (const DQ of wQ) {
            const QQ = FQ(DQ);
            qQ += QQ, QQ > 0 && oQ.push(DQ)
          }
          return 0 === oQ.length && oQ.push(wQ[0]), {
            shownItems: oQ,
            need: LQ,
            have: qQ,
            missing: Math.max(LQ - qQ, 0)
          }
        }))
      }(bQ, (QQ => {
        var FQ;
        return null !== (FQ = null === AQ || void 0 === AQ ? void 0 : AQ.amounts[QQ]) && void 0 !== FQ ? FQ : 0
      }));
      let rQ = "4rem",
        IQ = 4;
      3 === bQ.length || 4 === bQ.length ? rQ = "3.75rem" : bQ.length >= 5 && (rQ = "3rem"), 4 === bQ.length ? IQ = 2 : bQ.length <= 6 && (IQ = 3);
      const UQ = `calc(${IQ} * ${rQ} + ${IQ-1} * 0.4rem + 1px)`,
        NQ = (0, qQ.useRef)(null),
        TQ = (0, qQ.useRef)(null);
      (0, qQ.useLayoutEffect)((() => {
        NQ.current.scrollTop = 0
      }), [vQ, HQ]);
      const KQ = (0, qQ.useRef)(cQ);
      (0, qQ.useEffect)((() => {
        if (cQ === KQ.current) return;
        KQ.current = cQ;
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
        for (const LQ of null !== (FQ = null === (wQ = NQ.current) || void 0 === wQ ? void 0 : wQ.querySelectorAll(".CupTile.Short, .CantCraftInfo")) && void 0 !== FQ ? FQ : []) {
          var FQ, wQ;
          LQ.animate(QQ, {
            duration: 280,
            easing: "ease-out"
          })
        }
      }), [cQ]);
      const zQ = (QQ, FQ, wQ) => {
          var LQ;
          if ((0, Ew.h)().has(vQ)) return void(wQ && clearInterval(lQ.current));
          const qQ = null !== (LQ = null === AQ || void 0 === AQ ? void 0 : AQ.resultStackable) && void 0 !== LQ && LQ,
            oQ = hw(mQ.gameBridge.latest("inventory").player),
            {
              Sm: DQ,
              wm: kQ,
              amountAddedToSlot: uQ
            } = mQ.gameBridge.send("craftRecipe", {
              name: vQ,
              Cm: HQ,
              times: FQ || QQ && qQ ? null : 1
            });
          if (DQ > 0) {
            const FQ = [],
              LQ = new Set(bQ.flatMap((QQ => {
                let {
                  items: FQ
                } = QQ;
                return FQ
              }))),
              DQ = function(QQ, FQ, wQ) {
                const LQ = [];
                for (let qQ = 0; qQ < QQ.length; qQ++) {
                  const oQ = QQ[qQ];
                  if (!oQ || !wQ.has(oQ.name)) continue;
                  const DQ = FQ[qQ],
                    kQ = (null === DQ || void 0 === DQ ? void 0 : DQ.name) === oQ.name ? DQ.amount : 0;
                  kQ < oQ.amount && LQ.push({
                    idx: qQ,
                    itemName: oQ.name,
                    amount: oQ.amount - kQ
                  })
                }
                return LQ
              }(oQ, hw(mQ.gameBridge.latest("inventory").player), LQ).slice(0, 12),
              HQ = wQ ? 0 : Math.min(50, 400 / DQ.length),
              xQ = wQ ? 220 : 320;
            for (const QQ of DQ) {
              var YQ;
              const wQ = bQ.findIndex((FQ => {
                  let {
                    items: wQ
                  } = FQ;
                  return wQ.includes(QQ.itemName)
                })),
                LQ = null === (YQ = NQ.current) || void 0 === YQ ? void 0 : YQ.querySelector(`[data-craft-ingredient="${wQ}"]`),
                qQ = (0, mw.f)(QQ.idx);
              LQ && qQ && FQ.push({
                kind: "ingredient",
                itemName: QQ.itemName,
                amount: QQ.amount,
                wm: QQ.idx,
                from: qQ,
                to: (0, mw.f)(LQ),
                delayMs: Math.round(FQ.length * HQ),
                durationMs: xQ
              })
            }
            let AQ;
            if (null !== kQ && uQ > 0 && TQ.current) {
              const QQ = FQ.length > 0 ? FQ[FQ.length - 1].delayMs + .6 * xQ : 0;
              AQ = {
                itemName: vQ,
                amount: uQ,
                wm: kQ,
                from: (0, mw.f)(TQ.current),
                delayMs: Math.round(QQ)
              }
            }
            tQ(AQ, QQ && !qQ ? kQ : null, FQ), kw.b.play("wood1", .5).rate(1.75)
          }
        },
        lQ = (0, qQ.useRef)(null);
      (0, qQ.useEffect)((() => () => {
        clearInterval(lQ.current)
      }), []);
      const jQ = (QQ, FQ) => {
          zQ(QQ, !1, !1), clearInterval(lQ.current), FQ && (lQ.current = setTimeout((() => {
            lQ.current = setInterval((() => {
              zQ(QQ, !1, !0)
            }), FQ.intervalMs)
          }), FQ.initialDelayMs))
        },
        aQ = () => {
          clearInterval(lQ.current)
        },
        XQ = !xQ || RQ || Boolean(CQ),
        fQ = (0, qQ.useRef)(null),
        VQ = null !== (wQ = null === (LQ = (0, fw.c)()) || void 0 === LQ ? void 0 : LQ.hideButtonHints) && void 0 !== wQ && wQ,
        hQ = null !== (oQ = null === (DQ = (0, Xw.d)()) || void 0 === DQ ? void 0 : DQ.getBoundButton("inventorySecondary")) && void 0 !== oQ ? oQ : null,
        JQ = () => !XQ && (zQ(!1, !0, !1), !0);
      (0, zw.d)(MQ, {
        press: QQ => "secondary" === QQ ? JQ() : !XQ && (jQ(!1, Pw()), !0),
        release: aQ,
        back: GQ,
        hints: {
          primary: "inventoryCraft",
          secondary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      }), (0, zw.d)(fQ, {
        press: JQ,
        back: GQ,
        hints: {
          primary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      });
      const [EQ, nQ] = (0, qQ.useState)(0), [gQ, ZQ] = (0, qQ.useState)(null);
      (0, qQ.useEffect)((() => {
        if (!0 === kQ) {
          nQ(0);
          const QQ = setInterval((() => {
            nQ((QQ => QQ + 1))
          }), 1e3);
          return () => {
            clearInterval(QQ)
          }
        }
        return () => {}
      }), [kQ]);
      const yQ = null === AQ || void 0 === AQ ? void 0 : AQ.ingredientsCraftedFrom,
        BQ = (0, qQ.useRef)(eQ);
      (0, qQ.useEffect)((() => {
        BQ.current = eQ
      }), [eQ]);
      const dQ = !(null === CQ || void 0 === CQ || !CQ.hideIngredients);
      (0, qQ.useEffect)((() => {
        var QQ, FQ;
        if (!gQ) return;
        if (dQ) return ZQ(null), void(null === (FQ = BQ.current) || void 0 === FQ || FQ.call(BQ, !1));
        const wQ = gQ[EQ % gQ.length];
        null === (QQ = BQ.current) || void 0 === QQ || QQ.call(BQ, !0, Zw(wQ, iQ, null === yQ || void 0 === yQ ? void 0 : yQ[wQ]))
      }), [gQ, EQ, iQ, yQ, dQ]);
      const QF = !!CQ,
        FF = (0, qQ.useRef)(!1);
      (0, qQ.useEffect)((() => {
        var QQ;
        QF && (clearInterval(lQ.current), dQ && FF.current && (FF.current = !1, null === (QQ = BQ.current) || void 0 === QQ || QQ.call(BQ, !1)))
      }), [QF, dQ]);
      const wF = (0, mw.q)(iQ, vQ);
      return (0, uQ.jsxs)("div", {
        ref: NQ,
        className: "CraftableInfo SmallTextBold",
        children: [(0, uQ.jsx)("div", {
          className: "CraftableHeader",
          children: (0, uQ.jsx)(SQ.e, {
            text: wF
          })
        }), !dQ && (0, uQ.jsx)("div", {
          className: Gw()("CraftableIngredients", {
            Compact: bQ.length >= 5
          }),
          style: {
            maxWidth: UQ
          },
          children: sQ.map(((QQ, FQ) => {
            const wQ = QQ.shownItems[EQ % QQ.shownItems.length];
            return (0, uQ.jsx)(dw, {
              idx: FQ,
              status: QQ,
              shownItem: wQ,
              dim: rQ,
              onHoverStart: () => {
                ZQ(QQ.shownItems)
              },
              onHoverEnd: () => {
                ZQ(null), null === eQ || void 0 === eQ || eQ(!1)
              },
              onPadBack: GQ
            }, FQ)
          }))
        }), CQ && (0, uQ.jsx)("div", {
          className: "CantCraftInfo CraftableLockReason",
          children: (0, uQ.jsx)(SQ.e, {
            text: CQ.reason
          })
        }), !CQ && (!xQ || RQ) && (0, uQ.jsxs)("div", {
          className: "CantCraftInfo",
          children: [!xQ && "Missing ingredients", (0, uQ.jsx)("br", {}), RQ && "Inventory is full"]
        }), !dQ && (0, uQ.jsxs)(uQ.Fragment, {
          children: [(0, uQ.jsxs)(nw, {
            ref: MQ,
            className: "DoCraftButton",
            onPointerDown: QQ => {
              jQ((0, mw.s)(QQ), (0, jw.o)(QQ.nativeEvent) ? Pw() : gw)
            },
            onPointerUp: aQ,
            onPointerLeave: aQ,
            disabled: XQ,
            children: [pQ && hQ && !XQ && !VQ && (0, uQ.jsx)(aw.b, {
              className: "CraftShortcutGlyph",
              glyph: hQ
            }), (0, uQ.jsx)("div", {
              ref: TQ,
              className: "DoCraftItem",
              onPointerEnter: () => {
                FF.current = !0, null === eQ || void 0 === eQ || eQ(!0, Zw(vQ, iQ))
              },
              onPointerLeave: () => {
                FF.current = !1, null === eQ || void 0 === eQ || eQ(!1)
              },
              children: (0, uQ.jsx)(ow.e, {
                itemName: vQ,
                amount: YQ
              })
            })]
          }), (0, uQ.jsxs)(nw, {
            ref: fQ,
            className: "DoCraftAllButton",
            onPointerDown: QQ => {
              zQ((0, mw.s)(QQ), !0, !1)
            },
            disabled: XQ,
            children: [(0, uQ.jsx)("span", {
              className: "CraftAllLabel",
              children: WQ("general:craftAll")
            }), OQ > 0 && (0, uQ.jsxs)("span", {
              className: "CraftAllCount",
              children: ["x", Jw(OQ)]
            })]
          })]
        })]
      })
    }

    function FL(QQ) {
      let {
        selectedIdx: FQ,
        hidden: wQ
      } = QQ;
      const LQ = (0, qw.n)(),
        oQ = (0, qQ.useRef)(null);
      return (0, qQ.useLayoutEffect)((() => {
        const QQ = oQ.current,
          LQ = null === QQ || void 0 === QQ ? void 0 : QQ.parentElement;
        if (!LQ || !QQ) return;
        const qQ = LQ.querySelector(".CraftableItems"),
          DQ = () => {
            var oQ, DQ;
            if (wQ) return void(QQ.style.opacity = "0");
            const kQ = null === qQ || void 0 === qQ ? void 0 : qQ.children[FQ],
              vQ = null === (oQ = null !== (DQ = null === kQ || void 0 === kQ ? void 0 : kQ.querySelector(".InvenItem")) && void 0 !== DQ ? DQ : kQ) || void 0 === oQ ? void 0 : oQ.getBoundingClientRect();
            if (!vQ || 0 === vQ.width) return void(QQ.style.opacity = "0");
            const mQ = LQ.getBoundingClientRect();
            QQ.style.opacity = "1", QQ.style.width = `${vQ.width}px`, QQ.style.height = `${vQ.height}px`, QQ.style.transform = `translate(${vQ.left-mQ.left+LQ.scrollLeft}px, ${vQ.top-mQ.top+LQ.scrollTop}px)`
          };
        DQ();
        const kQ = new MutationObserver(DQ),
          vQ = new ResizeObserver(DQ);
        return vQ.observe(LQ), qQ && (kQ.observe(qQ, {
          childList: !0,
          subtree: !0
        }), vQ.observe(qQ)), () => {
          kQ.disconnect(), vQ.disconnect()
        }
      }), [FQ, wQ]), (0, uQ.jsx)("div", {
        ref: oQ,
        className: Gw()("SelectionReticle", {
          Secondary: LQ
        })
      })
    }

    function wL(QQ, FQ, wQ) {
      return QQ ? (0, Uw.b)(Nw.h, QQ) ? LL(QQ, FQ, wQ) : QQ : wQ("classicGame:handCrafting")
    }

    function LL(QQ, FQ, wQ) {
      var LQ;
      const qQ = null === (LQ = FQ[QQ]) || void 0 === LQ ? void 0 : LQ.displayName;
      if ("string" === typeof qQ) return wQ(qQ);
      const oQ = mQ.gameBridge.latest("hiddenPlayerNames");
      return Array.isArray(qQ) ? qQ.map((QQ => {
        if ("string" === typeof QQ) return QQ;
        if ("translationKey" in QQ) return wQ(QQ.translationKey, (0, PQ.m)(QQ.params, oQ));
        if ("str" in QQ) {
          if ("string" === typeof QQ.str) return QQ.str;
          if ("translationKey" in QQ.str) return wQ(QQ.str.translationKey, (0, PQ.m)(QQ.str.params, oQ))
        }
        return ""
      })).join("") : qQ && "translationKey" in qQ ? wQ(qQ.translationKey, (0, PQ.m)(qQ.params, oQ)) : QQ
    }

    function qL(QQ, FQ) {
      return QQ === FQ || null !== QQ && null !== FQ && QQ.name === FQ.name && QQ.Cm === FQ.Cm
    }

    function oL(QQ) {
      var FQ, wQ, LQ;
      let {
        show: oQ,
        onCraft: DQ,
        dispatchSelectedCraftable: kQ,
        selectedCraftable: vQ,
        craftingStation: HQ,
        setHovered: bQ
      } = QQ;
      const {
        t: YQ
      } = (0, PQ.y)(), [xQ, AQ] = (0, qQ.useState)(""), [tQ, eQ] = (0, qQ.useState)(0);
      (0, qQ.useEffect)((() => {
        oQ || (AQ(""), eQ((QQ => QQ + 1)))
      }), [oQ]);
      const [MQ, GQ] = (0, qQ.useState)(HQ);
      MQ !== HQ && (GQ(HQ), "" !== xQ && (AQ(""), eQ((QQ => QQ + 1))));
      const pQ = (0, qQ.useRef)(null),
        cQ = (0, qQ.useRef)(null),
        CQ = (0, lw.j)(),
        SQ = CQ.showing && "recipe" === CQ.kind,
        [iQ, WQ] = (0, qQ.useState)(0),
        OQ = null !== HQ && void 0 !== HQ ? HQ : null,
        sQ = (0, qQ.useRef)(null),
        rQ = QQ => {
          return !((FQ = sQ.current) === (wQ = QQ) || null !== FQ && null !== wQ && FQ.station === wQ.station && qL(FQ.recipe, wQ.recipe)) && (sQ.current = QQ, mQ.gameBridge.send("focusCrafting", QQ), !0);
          var FQ, wQ
        };
      rQ(oQ ? {
        station: OQ,
        recipe: (null === (FQ = sQ.current) || void 0 === FQ ? void 0 : FQ.station) === OQ ? sQ.current.recipe : null
      } : null);
      let IQ = mQ.gameBridge.latest("crafting");
      const UQ = (0, RQ.k)("itemInfo"),
        NQ = "" !== xQ.trim(),
        TQ = (0, Ew.E)(),
        KQ = (0, Ew.B)(),
        zQ = (0, Ew.I)(),
        lQ = function(QQ, FQ) {
          const [wQ, LQ] = (0, qQ.useState)(!1);
          (0, qQ.useEffect)((() => {
            if (!QQ) return void LQ(!1);
            const FQ = setTimeout((() => {
              LQ(!0)
            }), 0);
            return () => {
              clearTimeout(FQ)
            }
          }), [QQ]);
          const oQ = QQ && wQ,
            DQ = (0, qQ.useRef)({
              station: FQ,
              at: new Map
            });
          return (DQ.current.station !== FQ || !oQ && DQ.current.at.size > 0) && (DQ.current = {
            station: FQ,
            at: new Map
          }), oQ ? DQ.current.at : null
        }(oQ, HQ);
      let jQ = IQ.recipes.filter((QQ => {
        let {
          listed: FQ
        } = QQ;
        return FQ
      }));
      if (NQ) {
        const QQ = [];
        for (const FQ of IQ.recipes) {
          var aQ;
          const wQ = null !== (aQ = KQ.get(FQ.name)) && void 0 !== aQ && aQ.hideIngredients ? [] : FQ.requires.flatMap((QQ => {
              let {
                items: FQ
              } = QQ;
              return FQ.flatMap((QQ => [QQ, LL(QQ, UQ, YQ)]))
            })),
            LQ = Vw(xQ, [FQ.name, LL(FQ.name, UQ, YQ)], wQ);
          null !== LQ && QQ.push({
            item: FQ,
            rank: LQ
          })
        }
        QQ.sort(((QQ, FQ) => QQ.rank - FQ.rank)), jQ = QQ.map((QQ => {
          let {
            item: FQ
          } = QQ;
          return FQ
        }))
      } else {
        if (lQ && lQ.size > 0) {
          const QQ = IQ.recipes.filter((QQ => !QQ.listed && lQ.has(yw(QQ))));
          jQ = jQ.concat(QQ)
        }
        jQ = (0, Ew.m)(jQ, TQ, KQ, zQ), lQ && (jQ = (0, Ew.l)(jQ, lQ, yw))
      }
      const XQ = QQ => jQ.find((FQ => yw(FQ) === QQ)),
        fQ = `${HQ}|${xQ}`,
        [VQ, hQ] = (0, qQ.useState)(null),
        JQ = (null === VQ || void 0 === VQ ? void 0 : VQ.context) === fQ ? VQ.key : null,
        EQ = vQ ? yw(vQ) : null,
        nQ = null !== (wQ = null !== (LQ = XQ(EQ)) && void 0 !== LQ ? LQ : XQ(JQ)) && void 0 !== wQ ? wQ : jQ[0],
        gQ = nQ ? yw(nQ) : null,
        ZQ = nQ ? {
          name: nQ.name,
          Cm: nQ.Cm
        } : null;
      oQ && rQ({
        station: OQ,
        recipe: ZQ
      }) && (IQ = mQ.gameBridge.latest("crafting")), gQ !== EQ && gQ !== JQ && hQ(gQ ? {
        context: fQ,
        key: gQ
      } : null), (0, qQ.useEffect)((() => () => {
        sQ.current = null, mQ.gameBridge.send("focusCrafting", null)
      }), []);
      const yQ = qL(IQ.detail, ZQ) ? IQ.detail : null,
        BQ = null !== yQ && !yQ.roomForOne,
        dQ = jQ.findIndex((QQ => yw(QQ) === yw(nQ))),
        QF = () => cQ.current ? (0, zw.c)(cQ.current) : null,
        FF = (0, qQ.useRef)(null),
        wF = (0, qQ.useRef)(0);
      wF.current++;
      const LF = wF.current;
      (0, qQ.useEffect)((() => {
        const QQ = FF.current;
        if (!QQ || LF <= QQ.afterRender) return;
        if (FF.current = null, QQ.key !== gQ) return;
        const FQ = QF();
        var wQ;
        null !== FQ && void 0 !== FQ && FQ.press("primary") && !QQ.ym && (null === (wQ = FQ.release) || void 0 === wQ || wQ.call(FQ))
      }));
      const qF = QQ => {
          const FQ = {
            name: QQ.name,
            Cm: QQ.Cm
          };
          return {
            choose: () => {
              kQ(FQ), (0, Lw.q)(cQ.current)
            },
            craft: () => {
              var QQ, wQ;
              return kQ(FQ), yw(FQ) !== yw(nQ) ? (FF.current = {
                key: yw(FQ),
                ym: !0,
                afterRender: wF.current
              }, !0) : null !== (QQ = null === (wQ = QF()) || void 0 === wQ ? void 0 : wQ.press("primary")) && void 0 !== QQ && QQ
            },
            stopCraft: () => {
              var QQ, FQ;
              FF.current ? FF.current.ym = !1 : null === (QQ = QF()) || void 0 === QQ || null === (FQ = QQ.release) || void 0 === FQ || FQ.call(QQ)
            },
            refuse: () => {
              yw(FQ) !== yw(nQ) && kQ(FQ), WQ((QQ => QQ + 1))
            }
          }
        },
        oF = () => {
          var QQ, FQ, wQ;
          (0, Lw.q)(null !== (QQ = null === (FQ = pQ.current) || void 0 === FQ || null === (wQ = FQ.querySelector(".CraftableItems")) || void 0 === wQ ? void 0 : wQ.children[dQ]) && void 0 !== QQ ? QQ : null)
        },
        DF = jQ.map(yw).join("|"),
        kF = (0, qQ.useRef)(DF);
      return (0, qQ.useEffect)((() => {
        kF.current !== DF && (kF.current = DF, SQ && dQ >= 0 && (0, lw.h)() && oF())
      })), (0, uQ.jsxs)("div", {
        className: "Craftables",
        children: [(0, uQ.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: wL(HQ, UQ, YQ)
        }), (0, uQ.jsxs)("div", {
          className: "CraftablesBody",
          children: [(0, uQ.jsx)(Kw.b, {
            className: "CraftingSearch",
            placeholderText: YQ("general:searchRecipes"),
            defaultValue: xQ,
            maxLength: 100,
            onValueChange: QQ => {
              AQ(QQ)
            },
            blurOnEnter: !0
          }, tQ), 0 === jQ.length && NQ && (0, uQ.jsx)("div", {
            className: "CraftingNoMatches SmallTextBold",
            children: YQ("general:noRecipesMatchSearch")
          }), jQ.length > 0 && (0, uQ.jsxs)(uQ.Fragment, {
            children: [(0, uQ.jsxs)("div", {
              ref: pQ,
              className: "CraftablesLeftSide",
              children: [(0, uQ.jsx)(Tw.e, {
                lazyLoadedClassName: "CraftableItems",
                observerUpdateDeps: [JSON.stringify(jQ.map((QQ => {
                  let {
                    name: FQ,
                    Cm: wQ,
                    haveIngredients: LQ
                  } = QQ;
                  return {
                    name: FQ,
                    Cm: wQ,
                    haveIngredients: LQ
                  }
                })))],
                observing: oQ,
                children: jQ.map((QQ => {
                  const {
                    name: FQ,
                    Cm: wQ,
                    haveIngredients: LQ
                  } = QQ, qQ = yw(QQ);
                  return (0, uQ.jsx)(Bw, {
                    recipeId: qQ,
                    itemName: FQ,
                    onClick: () => {
                      kQ({
                        name: FQ,
                        Cm: wQ
                      })
                    },
                    isSelected: yw(nQ) === qQ,
                    haveIngredients: LQ,
                    craftable: LQ && !KQ.has(FQ) && !(yw(nQ) === qQ && BQ),
                    setHovered: bQ,
                    padActions: qF(QQ),
                    marked: TQ.has(FQ),
                    lock: KQ.get(FQ),
                    itemInfo: UQ
                  }, qQ)
                }))
              }), (0, uQ.jsx)(FL, {
                selectedIdx: dQ,
                hidden: SQ && CQ.steppingSlots
              })]
            }), (0, uQ.jsx)(QL, {
              show: oQ,
              recipeItem: nQ,
              detail: yQ,
              onCraft: DQ,
              setHovered: bQ,
              craftButtonRef: cQ,
              onPadBack: oF,
              showPadShortcut: SQ,
              refusedCount: iQ,
              lock: KQ.get(nQ.name),
              itemInfo: UQ
            })]
          })]
        })]
      })
    }
    var DL = wQ(9125),
      kL = wQ(3149),
      vL = wQ(2050),
      mL = wQ(8414);
    class uL {
      constructor(QQ, FQ, wQ) {
        this.commit = QQ, this.delayMs = FQ, this.defers = wQ, this.pending = null, this.timer = void 0, this.ym = !1, this.flush = () => {
          clearTimeout(this.timer);
          const QQ = this.pending;
          null !== QQ && (this.pending = null, this.commit(QQ))
        }
      }
      type(QQ) {
        this.pending = QQ, clearTimeout(this.timer), this.ym || this.defers() ? this.ym || (this.timer = setTimeout(this.flush, this.delayMs)) : this.flush()
      }
      getTyped(QQ) {
        var FQ;
        return null !== (FQ = this.pending) && void 0 !== FQ ? FQ : QQ
      }
      isHeld() {
        return this.ym
      }
      setHeld(QQ) {
        this.ym = QQ, QQ || this.flush()
      }
    }

    function HL(QQ) {
      return null === QQ ? "creativeInventory:all" : `creativeInventory:${QQ}`
    }

    function bL(QQ) {
      let {
        category: FQ
      } = QQ;
      return null === FQ ? (0, uQ.jsx)(tQ.c, {
        name: "layer-group"
      }) : (0, uQ.jsx)(ow.e, {
        itemName: DL.creativeItemCategoryIcons[FQ],
        amount: 0
      })
    }

    function YL(QQ) {
      let {
        labelKey: FQ,
        isSelected: wQ,
        onSelect: LQ,
        setHovered: qQ,
        children: oQ
      } = QQ;
      return (0, uQ.jsx)("div", {
        className: Gw()("CreativeCategoryTab", {
          Selected: wQ
        }),
        onClick: LQ,
        onPointerEnter: QQ => {
          (0, mw.p)(QQ) || qQ(!0, {
            name: {
              translationKey: FQ
            },
            desc: ""
          })
        },
        onPointerLeave: () => {
          qQ(!1)
        },
        children: oQ
      })
    }

    function xL(QQ) {
      let {
        categories: FQ,
        selectedCategory: wQ,
        onSelect: LQ
      } = QQ;
      const {
        t: oQ
      } = (0, PQ.y)(), [DQ, kQ] = (0, qQ.useState)(!1), vQ = (0, qQ.useRef)(null), mQ = (0, qQ.useCallback)((() => {
        kQ(!1)
      }), []);
      return (0, vL.d)(vQ, mQ), (0, uQ.jsxs)("div", {
        className: "CreativeCategoryDropdown",
        ref: vQ,
        children: [(0, uQ.jsxs)("div", {
          className: "CreativeCategoryDropdownButton",
          onClick: () => {
            kQ(!DQ)
          },
          children: [(0, uQ.jsx)("div", {
            className: "CreativeCategoryIcon",
            children: (0, uQ.jsx)(bL, {
              category: wQ
            })
          }), (0, uQ.jsx)("span", {
            children: oQ(HL(wQ))
          }), (0, uQ.jsx)(tQ.c, {
            name: DQ ? "caret-up" : "caret-down"
          })]
        }), DQ && (0, uQ.jsx)("div", {
          className: "CreativeCategoryDropdownMenu",
          children: FQ.map((QQ => (0, uQ.jsxs)("div", {
            className: Gw()("CreativeCategoryDropdownOption", {
              Selected: wQ === QQ
            }),
            onClick: () => {
              LQ(QQ), kQ(!1)
            },
            children: [(0, uQ.jsx)("div", {
              className: "CreativeCategoryIcon",
              children: (0, uQ.jsx)(bL, {
                category: QQ
              })
            }), (0, uQ.jsx)("span", {
              children: oQ(HL(QQ))
            })]
          }, null !== QQ && void 0 !== QQ ? QQ : "all")))
        })]
      })
    }
    const AL = (0, qQ.memo)((function(QQ) {
      let {
        creativeScrollDiv: FQ,
        playerInvenNumSlots: wQ,
        getSetHoveringForIdx: LQ,
        getPointerDownForIdx: oQ,
        getPointerUpForIdx: DQ,
        creativeSearchVal: kQ,
        setCreativeSearchVal: mQ,
        creativeCategory: HQ,
        setCreativeCategory: bQ,
        show: YQ
      } = QQ;
      const {
        t: xQ
      } = (0, PQ.y)(), AQ = (0, RQ.k)("creativeVisibility"), {
        userContext: eQ
      } = (0, CQ.e)(), MQ = (0, vQ.l)("canUseDevCreativeItems"), GQ = eQ.playerHasRank("developer") || !!MQ, pQ = (0, qQ.useMemo)((() => eL("", AQ, GQ)), [AQ, GQ]), cQ = (0, qQ.useMemo)((() => {
        const QQ = (0, DL.creativeItemIds)(),
          FQ = new Set(pQ.map((FQ => (0, DL.creativeCategoryOf)(QQ[FQ]))));
        return DL.creativeItemCategories.filter((QQ => FQ.has(QQ)))
      }), [pQ]), SQ = null !== HQ && cQ.includes(HQ) ? HQ : null, WQ = (0, qQ.useMemo)((() => "" === kQ ? pQ : eL(kQ, AQ, GQ)), [pQ, kQ, AQ, GQ]), OQ = (0, qQ.useMemo)((() => {
        const QQ = (0, DL.creativeItemIds)();
        return null !== SQ ? WQ.filter((FQ => (0, DL.creativeCategoryOf)(QQ[FQ]) === SQ)) : "" === kQ ? WQ.filter((FQ => !(0, DL.showOnlyInCreativeCategory)(QQ[FQ]))) : WQ
      }), [WQ, SQ, kQ]), sQ = LQ();

      function rQ(QQ) {
        bQ(QQ), FQ.current.scrollTop = 0
      }
      const IQ = [null, ...cQ],
        {
          isTouchScreen: UQ
        } = (0, aQ.l)(["isTouchScreen"]),
        NQ = !UQ,
        TQ = (0, qQ.useRef)(null),
        [KQ, zQ] = (0, qQ.useState)(0);
      (0, qQ.useEffect)((() => {
        const QQ = TQ.current;
        if (!QQ) return;
        const FQ = new ResizeObserver((QQ => {
          zQ(QQ[0].contentRect.height)
        }));
        return FQ.observe(QQ), () => {
          FQ.disconnect()
        }
      }), [NQ]);
      const lQ = (0, qQ.useRef)(null),
        jQ = (0, qQ.useCallback)((function QQ() {
          "up" === lQ.current ? FQ.current.scrollTop -= 10 : "down" === lQ.current && (FQ.current.scrollTop += 10), lQ.current && requestAnimationFrame(QQ)
        }), [FQ]),
        XQ = (0, qQ.useCallback)((function(QQ) {
          lQ.current || (lQ.current = QQ, jQ())
        }), [jQ]);

      function fQ() {
        lQ.current = null
      }
      const VQ = (0, qQ.useRef)({
        creativeSearchVal: kQ,
        setCreativeSearchVal: mQ
      });
      VQ.current = {
        creativeSearchVal: kQ,
        setCreativeSearchVal: mQ
      };
      const [hQ] = (0, qQ.useState)((() => new uL((QQ => {
        VQ.current.setCreativeSearchVal(QQ)
      }), 250, qw.d))), JQ = QQ => {
        var wQ;
        null === (wQ = FQ.current) || void 0 === wQ || wQ.classList.toggle("CreativeItemSlotsStale", QQ)
      };
      (0, iQ.g)(mL.c, (QQ => {
        hQ.setHeld(QQ), QQ || JQ(!1)
      })), (0, qQ.useEffect)((() => hQ.flush), [hQ]);
      const EQ = (0, uQ.jsx)(Kw.b, {
          className: "CreativeItemSlotsSearch",
          placeholderText: "Search",
          defaultValue: kQ,
          maxLength: 1e4,
          onValueChange: (QQ, FQ) => {
            "" === hQ.getTyped(VQ.current.creativeSearchVal) && "" !== QQ && bQ(null), hQ.type(QQ), JQ(hQ.isHeld())
          },
          onEnter: hQ.flush,
          blurOnEnter: !0
        }),
        nQ = (0, uQ.jsxs)("div", {
          className: "CreateItemSlotsScrollable",
          children: [UQ && (0, uQ.jsxs)("div", {
            className: "CreativeScrollButtons",
            children: [(0, uQ.jsx)("div", {
              className: "CreativeScrollButton Up",
              onPointerDown: () => {
                XQ("up")
              },
              onPointerLeave: fQ,
              onPointerUp: fQ,
              children: (0, uQ.jsx)(tQ.c, {
                name: "arrow-up"
              })
            }), (0, uQ.jsx)("div", {
              className: "CreativeScrollButton Down",
              onPointerDown: () => {
                XQ("down")
              },
              onPointerLeave: fQ,
              onPointerUp: fQ,
              children: (0, uQ.jsx)(tQ.c, {
                name: "arrow-up"
              })
            })]
          }), (0, uQ.jsxs)("div", {
            className: "CreativeItemSlots",
            ref: FQ,
            children: [0 === OQ.length && "" !== kQ && (0, uQ.jsx)("div", {
              className: "CreativeItemSlotsEmpty",
              children: xQ("general:noResults")
            }), (0, uQ.jsx)(Tw.e, {
              lazyLoadedClassName: "CreativeItemSlotsInner",
              observerUpdateDeps: [kQ, SQ],
              observerRoot: "CreativeItemSlots",
              observing: YQ,
              children: OQ.map((QQ => {
                const FQ = wQ + QQ;
                return (0, uQ.jsx)(Ow.d, {
                  idx: FQ,
                  draggedInfo: null,
                  specialItemInfo: null,
                  setHovered: LQ(FQ),
                  pointerDown: oQ(FQ),
                  pointerUp: DQ(FQ)
                }, FQ)
              }))
            })]
          })]
        });
      return (0, uQ.jsxs)("div", {
        className: Gw()("CreativeItemSlotsWrapper", NQ ? "WithRail" : "WithDropdown"),
        children: [NQ && (0, uQ.jsx)("div", {
          className: "CreativeCategoryRail",
          ref: TQ,
          style: {
            "--rail-height": KQ > 0 ? `${KQ}px` : void 0,
            "--tab-rows": Math.ceil(IQ.length / 2)
          },
          children: IQ.map((QQ => (0, uQ.jsx)(YL, {
            labelKey: HL(QQ),
            isSelected: SQ === QQ,
            onSelect: () => {
              rQ(QQ)
            },
            setHovered: sQ,
            children: (0, uQ.jsx)(bL, {
              category: QQ
            })
          }, null !== QQ && void 0 !== QQ ? QQ : "all")))
        }), (0, uQ.jsxs)("div", {
          className: "CreativeItemSlotsMain",
          children: [(0, uQ.jsxs)("div", {
            className: "CreativeItemSlotsSearchRow",
            children: [EQ, !NQ && (0, uQ.jsx)(xL, {
              categories: IQ,
              selectedCategory: SQ,
              onSelect: rQ
            })]
          }), nQ]
        })]
      })
    }));

    function tL(QQ) {
      var FQ;
      return null !== (FQ = (0, kL.e)(QQ)) && void 0 !== FQ ? FQ : ""
    }

    function eL(QQ, FQ, wQ) {
      let {
        publicLobby: LQ,
        shownInGame: qQ
      } = FQ;
      const oQ = QQ.toLowerCase(),
        DQ = (0, DL.creativeItemIds)(),
        kQ = QQ => {
          var FQ;
          const oQ = DQ[QQ];
          return !(0, DL.itemIsDisabled)(oQ, LQ, null === (FQ = qQ[tL(oQ)]) || void 0 === FQ || FQ, wQ)
        };
      if ("" === oQ) return DQ.map(((QQ, FQ) => FQ)).filter((QQ => !(0, DL.showOnlyInCreativeSearch)(DQ[QQ]))).filter(kQ);
      const vQ = [];
      for (let mQ = 0; mQ < DQ.length; mQ++) tL(DQ[mQ]).toLowerCase().includes(oQ) && vQ.push(mQ);
      vQ.sort(((QQ, FQ) => {
        const wQ = tL(DQ[QQ]).toLowerCase(),
          LQ = tL(DQ[FQ]).toLowerCase();
        return wQ.indexOf(oQ) - LQ.indexOf(oQ)
      }));
      for (const [mQ, uQ] of(0, DL.creativeAltNames)())
        for (const QQ of uQ)
          if (QQ.toLowerCase().includes(oQ)) {
            const QQ = DQ.indexOf(mQ);
            vQ.includes(QQ) || vQ.push(QQ)
          } return vQ.filter(kQ)
    }
    var ML = wQ(36458),
      GL = wQ(619);

    function pL(QQ) {
      return QQ > GL.h
    }

    function cL(QQ) {
      const FQ = QQ / 2,
        wQ = [];
      for (let LQ = 0; LQ < FQ / 6; LQ++)
        for (let QQ = 0; QQ < 12; QQ++) {
          const qQ = QQ < 6 ? 0 : FQ;
          wQ.push(qQ + 6 * LQ + QQ % 6)
        }
      return wQ
    }

    function CL(QQ) {
      let {
        numSlots: FQ,
        renderSlot: wQ
      } = QQ;
      const {
        t: LQ
      } = (0, PQ.y)(), oQ = (0, qQ.useRef)(null);
      var DQ;
      return DQ = oQ, (0, qQ.useLayoutEffect)((() => {
        var QQ;
        const FQ = null === (QQ = DQ.current) || void 0 === QQ ? void 0 : QQ.closest(".InvenBody");
        if (!FQ) return;
        const wQ = () => {
          FQ.style.zoom = "";
          const QQ = parseFloat(getComputedStyle(document.documentElement).fontSize),
            wQ = window.innerWidth - 2 * QQ,
            LQ = FQ.getBoundingClientRect().width;
          LQ > wQ && (FQ.style.zoom = "" + wQ / LQ)
        };
        return wQ(), window.addEventListener("resize", wQ), () => {
          window.removeEventListener("resize", wQ), FQ.style.zoom = ""
        }
      }), [DQ]), (0, uQ.jsxs)("div", {
        ref: oQ,
        className: "ChestItemSlots DoubleChestSlots",
        children: [(0, uQ.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: LQ("doubleChest:title")
        }), (0, uQ.jsx)("div", {
          className: "GridItemSlots",
          children: cL(FQ).map((QQ => wQ(QQ)))
        })]
      })
    }

    function SL(QQ) {
      let {
        VQ: FQ,
        initialPasskey: wQ
      } = QQ;
      const {
        t: LQ
      } = (0, PQ.y)(), [oQ, DQ] = (0, qQ.useState)(wQ), [kQ, vQ] = (0, qQ.useState)(wQ);
      (0, qQ.useEffect)((() => {
        DQ(wQ), vQ(wQ)
      }), [...FQ]);
      return (0, uQ.jsxs)("div", {
        className: "IronChestPasskeyEditorWrapper",
        children: [(0, uQ.jsx)("div", {
          className: "SmallTextBold",
          children: LQ("ironChest:currentPasskey", {
            currentPasskey: oQ.join("")
          })
        }), (0, uQ.jsx)(Sw, {
          className: "IronChestPasskeyEditor",
          pu: kQ,
          onPasskeyUpdated: vQ,
          confirmText: "ironChest:changePasskey",
          onConfirm: () => {
            mQ.gameBridge.send("changeIronChestPasskey", {
              pos: [...FQ],
              pu: [...kQ]
            }), DQ([...kQ])
          }
        })]
      })
    }

    function iL(QQ) {
      let {
        variation: FQ,
        canCraft: wQ,
        show: LQ,
        creativeMounted: qQ,
        specialItemRef: oQ,
        draggedInfo: DQ,
        getSetHovering: kQ,
        getPointerDownForIdx: vQ,
        getPointerUpForIdx: mQ,
        enchantingTablePosition: HQ,
        enchantingTableBlockName: bQ,
        selectedCraftable: YQ,
        dispatchSelectedCraftable: xQ,
        creativeScrollDiv: AQ,
        creativeSearchVal: tQ,
        setCreativeSearchVal: eQ,
        creativeCategory: MQ,
        setCreativeCategory: GQ,
        onCraft: pQ
      } = QQ;
      const {
        userContext: cQ
      } = (0, CQ.e)(), {
        t: SQ
      } = (0, PQ.y)(), iQ = (0, RQ.g)("inventory", (QQ => QQ.chest)), WQ = (0, RQ.g)("inventory", (QQ => QQ.player.length)), OQ = (0, RQ.g)("inventory", (QQ => QQ.creative));
      if (0 === WQ) return null;
      let sQ, rQ;
      const IQ = QQ => {
          const FQ = WQ + QQ;
          return (0, uQ.jsx)(Ow.d, {
            idx: FQ,
            draggedInfo: DQ,
            specialItemInfo: oQ.current,
            setHovered: kQ(FQ),
            pointerDown: vQ(FQ),
            pointerUp: mQ(FQ)
          }, FQ)
        },
        UQ = iQ ? (0, ML.d)(iQ.type) : null;
      if (UQ) sQ = Gw()("InvenLeftSideChestCustom", UQ.className), rQ = (0, uQ.jsx)("div", {
        className: "ChestItemSlotsWrapper",
        children: UQ.render({
          VQ: iQ.pos,
          renderSlot: IQ
        })
      });
      else if (iQ) {
        const QQ = iQ.pos,
          FQ = "Iron" === iQ.type || "Moonstone" === iQ.type ? iQ.type : "Standard";
        let wQ = !1,
          LQ = null;
        "Iron" === FQ && (wQ = iQ.ironChest.ownerDbId === cQ.whamm, LQ = iQ.ironChest.pu), sQ = `InvenLeftSideChest${FQ}`;
        const qQ = pL(iQ.numSlots);
        rQ = (0, uQ.jsxs)("div", {
          className: "ChestItemSlotsWrapper",
          children: [wQ && (0, uQ.jsx)(SL, {
            VQ: QQ,
            initialPasskey: LQ
          }), qQ && (0, uQ.jsx)(CL, {
            numSlots: iQ.numSlots,
            renderSlot: IQ
          }), !qQ && (0, uQ.jsxs)("div", {
            className: "ChestItemSlots",
            children: [(0, uQ.jsx)("div", {
              className: "InvenLeftSideHeader SmallTextBold",
              children: SQ("Moonstone" === FQ ? "item:moonstoneChest" : "Iron" === FQ ? "item:ironChest" : "item:chest")
            }), (0, uQ.jsx)("div", {
              className: "GridItemSlots",
              children: new Array(iQ.numSlots).fill(0).map(((QQ, FQ) => IQ(FQ)))
            })]
          })]
        })
      } else if (!OQ || FQ && wQ)
        if (wQ && "Enchanting Table" === FQ) sQ = `InvenLeftSide${(null!==bQ&&void 0!==bQ?bQ:"").replace(/ /gi,"")}`, rQ = (0, uQ.jsx)(sw, {
          specialItemInfo: oQ.current,
          setHovered: kQ,
          pointerDown: vQ(Hw.d),
          pointerUp: mQ(Hw.d),
          enchantingTablePosition: HQ,
          enchantingTableBlockName: bQ
        });
        else if (wQ && "Salvaging Table" === FQ) sQ = "InvenLeftSideSalvagingTable", rQ = (0, uQ.jsx)(Iw, {
        specialItemInfo: oQ.current,
        setSpecialItemInfo: QQ => {
          oQ.current = QQ
        },
        setHovered: kQ,
        pointerDown: vQ(Hw.d),
        pointerUp: mQ(Hw.d)
      });
      else {
        if (!wQ) return null;
        sQ = `InvenLeftSide${(null!==FQ&&void 0!==FQ?FQ:"HandCrafting").replace(/ /gi,"")}`, rQ = (0, uQ.jsx)(oL, {
          show: LQ,
          onCraft: pQ,
          craftingStation: FQ,
          selectedCraftable: YQ,
          dispatchSelectedCraftable: xQ,
          setHovered: kQ()
        })
      } else sQ = "InvenLeftSideCreative", rQ = qQ ? (0, uQ.jsx)(AL, {
        creativeScrollDiv: AQ,
        playerInvenNumSlots: WQ,
        getSetHoveringForIdx: kQ,
        getPointerDownForIdx: vQ,
        getPointerUpForIdx: mQ,
        creativeSearchVal: tQ,
        setCreativeSearchVal: eQ,
        creativeCategory: MQ,
        setCreativeCategory: GQ,
        show: LQ
      }) : null;
      const NQ = !!iQ || wQ && !!FQ;
      return (0, uQ.jsx)("div", {
        className: `InvenLeftSide ${sQ}`,
        "data-pad-inventory-start": NQ ? "" : void 0,
        children: rQ
      })
    }
    var WL = wQ(609),
      RL = wQ(20052),
      OL = wQ(20061),
      sL = wQ(20066);
    const rL = {
      Helmet: {
        sprite: "empty_armor_slot_helmet",
        image: wQ(20071)
      },
      Chestplate: {
        sprite: "empty_armor_slot_chestplate",
        image: OL
      },
      Gauntlets: {
        sprite: "empty_armor_slot_gauntlets",
        image: sL
      },
      Leggings: {
        sprite: "empty_armor_slot_leggings",
        image: wQ(20077)
      },
      Boots: {
        sprite: "empty_armor_slot_boots",
        image: RL
      }
    };

    function IL(QQ) {
      const {
        sprite: FQ,
        image: wQ
      } = rL[QQ];
      return EF(FQ, VF.i.ITEM, wQ)
    }

    function UL(QQ) {
      let {
        draggedInfo: FQ,
        specialItemInfo: wQ,
        craftFlyAnims: LQ,
        getSetHovering: qQ,
        getPointerDownForIdx: oQ,
        getPointerUpForIdx: DQ,
        variation: kQ,
        canCraft: vQ,
        isNewSlot: mQ
      } = QQ;
      const HQ = (0, RQ.g)("inventory", (QQ => QQ.player.length));
      return 0 === HQ ? null : (0, uQ.jsxs)("div", {
        className: "InvenBodyRight",
        children: [(0, uQ.jsx)("div", {
          className: "ArmourItemSlots",
          children: new Array(WL.c.length).fill(0).map(((QQ, bQ) => {
            const YQ = HQ - WL.c.length + bQ;
            return (0, uQ.jsx)(Ow.d, {
              idx: YQ,
              draggedInfo: FQ,
              specialItemInfo: wQ,
              craftFlyHoldbackInfo: (0, uw.j)(LQ, YQ),
              setHovered: qQ(YQ),
              pointerDown: oQ(YQ),
              pointerUp: DQ(YQ),
              defaultIconB64: IL(WL.c[bQ]),
              variation: vQ ? kQ : void 0,
              showNewDot: mQ(YQ)
            }, YQ)
          }))
        }), (0, uQ.jsx)("div", {
          className: "GridItemSlots",
          children: new Array(HQ - 10 - WL.c.length).fill(0).map(((QQ, bQ) => {
            const YQ = HQ - WL.c.length - bQ - 1;
            return (0, uQ.jsx)(Ow.d, {
              idx: YQ,
              draggedInfo: FQ,
              specialItemInfo: wQ,
              craftFlyHoldbackInfo: (0, uw.j)(LQ, YQ),
              setHovered: qQ(YQ),
              pointerDown: oQ(YQ),
              pointerUp: DQ(YQ),
              variation: vQ ? kQ : void 0,
              showNewDot: mQ(YQ)
            }, YQ)
          }))
        })]
      })
    }
    var NL = wQ(36463),
      TL = wQ(36468);

    function KL(QQ) {
      const {
        e: FQ,
        idx: wQ
      } = QQ, LQ = (0, mw.m)(QQ.readInventory(), wQ), qQ = (0, mw.o)(FQ);
      wQ === Hw.c ? function(QQ, FQ) {
        const {
          draggedInfoRef: wQ,
          removeItem: LQ,
          removeDraggedInfoRef: qQ,
          close: oQ
        } = QQ;
        if (wQ.current) {
          const QQ = FQ && wQ.current.amount || 1;
          LQ(wQ.current.idx, QQ, !0) && (wQ.current.amount -= QQ, wQ.current.amount <= 0 && qQ())
        } else FQ && oQ()
      }(QQ, qQ) : wQ === Hw.d ? function(QQ, FQ) {
        const {
          e: wQ,
          draggedInfoRef: LQ,
          specialItemRef: qQ,
          moveAmtIntoSlot: oQ,
          removeDraggedInfoRef: DQ
        } = QQ;
        if ((0, mw.s)(wQ) && qQ.current) qQ.current = null;
        else if (LQ.current && qQ.current && (LQ.current.idx === qQ.current.idx || (0, TL.e)(LQ.current, qQ.current)) && LQ.current.amount > 0 && qQ.current.amount > 0 && qQ.current.amount < pw.e.maxItemStackSize)
          if (LQ.current.idx === qQ.current.idx) {
            if (FQ) {
              const QQ = Math.min(LQ.current.amount, pw.e.maxItemStackSize - qQ.current.amount);
              qQ.current.amount += QQ, LQ.current.amount -= QQ
            } else LQ.current.amount--, qQ.current.amount++;
            LQ.current.amount <= 0 && DQ()
          } else if (FQ) {
          const QQ = Math.min(LQ.current.amount, pw.e.maxItemStackSize - qQ.current.amount);
          oQ(qQ.current.idx, QQ) && (qQ.current.amount += QQ)
        } else {
          oQ(qQ.current.idx, 1) && qQ.current.amount++
        } else if (!LQ.current || qQ.current || FQ) {
          const QQ = LQ.current;
          LQ.current = qQ.current, qQ.current = QQ
        } else LQ.current.amount--, qQ.current = {
          idx: LQ.current.idx,
          name: LQ.current.name,
          attributes: LQ.current.attributes,
          amount: 1
        }
      }(QQ, qQ) : (0, mw.s)(FQ) ? function(QQ, FQ) {
        var wQ, LQ;
        const {
          idx: qQ,
          draggedInfoRef: oQ,
          specialItemRef: DQ,
          canCraft: kQ,
          variation: vQ,
          swapSlots: mQ,
          moveIntoSlots: uQ
        } = QQ;
        if (!FQ) return;
        let HQ = FQ.amount;
        qQ === (null === (wQ = oQ.current) || void 0 === wQ ? void 0 : wQ.idx) && (HQ = oQ.current.amount <= 0 ? 0 : FQ.amount - oQ.current.amount);
        qQ === (null === (LQ = DQ.current) || void 0 === LQ ? void 0 : LQ.idx) && (HQ = DQ.current.amount <= 0 ? 0 : FQ.amount - DQ.current.amount);
        if (0 === HQ) return;
        const bQ = QQ.readInventory(),
          YQ = bQ.player.length,
          xQ = bQ.chest,
          AQ = YQ - WL.c.length,
          tQ = () => {
            if (!(0, qw.d)()) return void uQ(10, AQ, qQ, HQ);
            const QQ = QQ => {
              const wQ = (0, mw.m)(bQ, QQ);
              return wQ ? {
                amount: wQ.amount,
                stacksWithMoved: (0, TL.e)(wQ, FQ)
              } : null
            };
            for (const FQ of ((QQ, FQ, wQ, LQ, qQ) => {
                const oQ = [];
                let DQ = LQ;
                if (null !== LQ) {
                  let kQ = 0;
                  for (let LQ = FQ; LQ < wQ; LQ++) {
                    const FQ = QQ(LQ);
                    null !== FQ && void 0 !== FQ && FQ.stacksWithMoved && null !== FQ.amount && FQ.amount > 0 && (kQ += Math.max(0, qQ - FQ.amount))
                  }
                  const vQ = Math.min(LQ, kQ);
                  if (vQ > 0 && (oQ.push({
                      start: FQ,
                      end: wQ,
                      amount: vQ
                    }), DQ = LQ - vQ), DQ <= 0) return oQ
                }
                for (let kQ = wQ - 1; kQ >= FQ; kQ--)
                  if (null === QQ(kQ)) {
                    oQ.push({
                      start: kQ,
                      end: kQ + 1,
                      amount: DQ
                    });
                    break
                  } return oQ
              })(QQ, 10, AQ, HQ, pw.e.maxItemStackSize)) uQ(FQ.start, FQ.end, qQ, FQ.amount)
          };
        if (!kQ || "Enchanting Table" !== vQ && "Salvaging Table" !== vQ) {
          const wQ = (0, WQ.Cb)(FQ.name),
            LQ = wQ ? (0, WQ.Bb)(wQ) : null;
          if (!WL.c.includes(wQ) || qQ !== LQ && (0, mw.n)(bQ, QQ.itemInfo, LQ, qQ))
            if (xQ)
              if (qQ < YQ) {
                var eQ, MQ;
                const [QQ, FQ] = null !== (eQ = null === (MQ = (0, ML.d)(xQ.type)) || void 0 === MQ ? void 0 : MQ.quickMoveRange) && void 0 !== eQ ? eQ : [0, xQ.numSlots];
                uQ(YQ + QQ, YQ + FQ, qQ, HQ)
              } else uQ(0, YQ - WL.c.length, qQ, HQ);
          else bQ.creative ? qQ < 10 ? tQ() : qQ < YQ ? uQ(0, 10, qQ, HQ) : uQ(0, YQ - WL.c.length, qQ, null !== FQ.amount ? pw.e.maxItemStackSize : null) : qQ < 10 ? tQ() : uQ(0, 10, qQ, HQ);
          else qQ < YQ - WL.c.length || qQ >= YQ ? mQ(LQ, qQ) : (uQ(0, YQ - WL.c.length, LQ, HQ), kw.b.play("equip_leather1", 1).rate(.9 + .3 * Math.random()))
        } else DQ.current = {
          idx: qQ,
          name: FQ.name,
          attributes: FQ.attributes,
          amount: null !== FQ.amount ? HQ : 0
        }
      }(QQ, LQ) : QQ.draggedInfoRef.current ? function(QQ, FQ, wQ, LQ) {
        const {
          draggedInfoRef: qQ,
          specialItemRef: oQ,
          moveAmtIntoSlot: DQ,
          swapSlots: kQ,
          removeItem: vQ,
          removeDraggedInfoRef: mQ
        } = QQ, uQ = QQ.readInventory(), HQ = qQ.current.idx;
        if (wQ && (FQ === HQ || (0, TL.e)(qQ.current, wQ)) && qQ.current.amount > 0 && (0, mw.c)(wQ) > 0 && (wQ.amount < pw.e.maxItemStackSize || FQ === HQ)) LQ ? wQ.amount + qQ.current.amount <= pw.e.maxItemStackSize || FQ === HQ ? DQ(FQ, qQ.current.amount) : DQ(FQ, pw.e.maxItemStackSize - wQ.amount) : DQ(FQ, 1);
        else if (qQ.current.amount > 0 && !wQ) DQ(FQ, LQ ? qQ.current.amount : 1);
        else if (LQ || wQ || 0 === qQ.current.amount)
          if (uQ.creative && !uQ.chest && FQ >= uQ.player.length) {
            const QQ = 0 === qQ.current.amount ? 1 : qQ.current.amount;
            vQ(qQ.current.idx, QQ, !1) && mQ()
          } else {
            var bQ;
            const wQ = (null === (bQ = oQ.current) || void 0 === bQ ? void 0 : bQ.idx) === FQ;
            if (kQ(FQ, qQ.current.idx)) {
              const LQ = QQ.readInventory(),
                DQ = (0, mw.m)(LQ, HQ),
                kQ = !LQ.chest && LQ.creative && qQ.current.idx >= LQ.player.length;
              if (DQ && qQ.current.idx !== FQ && !kQ) {
                let QQ = (0, mw.c)(DQ);
                wQ && (QQ -= oQ.current.amount), qQ.current = wQ && 0 === QQ ? null : {
                  idx: qQ.current.idx,
                  name: DQ.name,
                  attributes: DQ.attributes,
                  amount: QQ
                }
              } else mQ()
            }
          }
        else DQ(FQ, 1)
      }(QQ, wQ, LQ, qQ) : function(QQ, FQ, wQ, LQ) {
        var qQ;
        const {
          draggedInfoRef: oQ,
          specialItemRef: DQ
        } = QQ;
        if (!wQ) return;
        let kQ = (0, mw.c)(wQ);
        const vQ = (null === (qQ = DQ.current) || void 0 === qQ ? void 0 : qQ.idx) === FQ;
        vQ && (kQ -= DQ.current.amount);
        LQ || (kQ = Math.ceil(kQ / 2));
        oQ.current = vQ && 0 === kQ ? null : {
          idx: FQ,
          name: wQ.name,
          attributes: wQ.attributes,
          amount: kQ
        }
      }(QQ, wQ, LQ, qQ)
    }

    function zL(QQ, FQ) {
      return !!FQ && FQ.name === QQ.name
    }

    function lL() {
      return mQ.gameBridge.latest("inventory")
    }

    function jL(QQ, FQ, wQ) {
      return mQ.gameBridge.send("removeInventoryItem", {
        slot: QQ,
        amount: FQ,
        drop: wQ
      })
    }

    function aL(QQ) {
      return (0, mw.j)(QQ, mQ.gameBridge.latest("itemInfo"), mQ.gameBridge.latest("stationItems").enchantable)
    }

    function XL(QQ) {
      let {
        show: FQ,
        close: wQ,
        canCraft: LQ,
        variation: oQ,
        inventoryItemsMoveable: DQ,
        setCraftFlyAnims: kQ
      } = QQ;
      (0, RQ.k)("itemInfo");
      const [vQ, uQ] = (0, qQ.useState)(null), [HQ, bQ] = (0, qQ.useState)(null), [YQ, xQ] = (0, qQ.useState)(!1), AQ = (0, qQ.useRef)(null), tQ = (0, qQ.useRef)(null), eQ = (0, qQ.useRef)(null), MQ = (0, qQ.useRef)(null), [GQ, pQ] = (0, qQ.useReducer)((QQ => QQ + 1), 0), cQ = (0, qQ.useCallback)((() => {
        FQ && pQ()
      }), [FQ, pQ]), CQ = (0, qQ.useCallback)((() => {
        tQ.current = null, KQ.current = null, cQ()
      }), [cQ]), SQ = (0, qQ.useCallback)(((QQ, FQ) => {
        kQ((wQ => wQ.map((wQ => "ingredient" === wQ.kind ? wQ : wQ.wm === QQ ? {
          ...wQ,
          wm: FQ,
          to: (0, mw.f)(FQ)
        } : wQ.wm === FQ ? {
          ...wQ,
          wm: QQ,
          to: (0, mw.f)(QQ)
        } : wQ))))
      }), [kQ]), iQ = (0, qQ.useCallback)(((QQ, FQ) => {
        const wQ = jQ.current;
        if (wQ.x = QQ, wQ.y = FQ, AQ.current) !aQ.current.isTouch || aQ.current.itemBeingDragged && !KQ.current ? (AQ.current.style.transform = `translate(${wQ.x}px, ${wQ.y}px)`, xQ(aQ.current.isTouch && !KQ.current)) : (AQ.current.style.transform = "translate(0.5rem, 0.5rem)", xQ(!0));
        else if (MQ.current) {
          const wQ = MQ.current;
          let LQ = QQ + 10,
            qQ = FQ + 10;
          const oQ = wQ.offsetWidth,
            DQ = wQ.offsetHeight;
          LQ + oQ > window.innerWidth && (LQ = QQ - oQ - 10), qQ + DQ > window.innerHeight && (qQ = FQ - DQ - 10), LQ < 0 && (LQ = 0), qQ < 0 && (qQ = 0), MQ.current.style.transform = `translate(${LQ}px, ${qQ}px)`
        }
      }), []), OQ = (0, qQ.useCallback)((QQ => (FQ, wQ, LQ) => {
        if (uQ(FQ && void 0 !== QQ ? QQ : null), FQ) {
          if (void 0 === QQ && !wQ) return void(0, NL.e)("Error in invenComp", new Error("isHovering true but no idx or text"));
          if (void 0 !== QQ) {
            var qQ;
            const FQ = lL();
            let wQ;
            if (wQ = QQ === Hw.d ? eQ.current ? (0, mw.m)(FQ, eQ.current.idx) : null : (0, mw.m)(FQ, QQ), !wQ) return void bQ(null);
            if ((null === (qQ = eQ.current) || void 0 === qQ ? void 0 : qQ.idx) === QQ) {
              if (0 === (0, mw.c)(wQ) - eQ.current.amount) return void bQ(null)
            }
            bQ(aL(wQ))
          } else bQ({
            name: wQ.name,
            desc: wQ.desc,
            fontStyle: "normal"
          })
        } else bQ(null);
        LQ && setTimeout((() => {
          iQ(LQ.pageX, LQ.pageY)
        }), 0)
      }), [iQ]), sQ = (0, qQ.useCallback)(((QQ, FQ) => {
        const wQ = mQ.gameBridge.send("moveInventoryItem", {
          from: tQ.current.idx,
          to: QQ,
          amount: FQ
        });
        return wQ ? (tQ.current.amount -= FQ, tQ.current.amount <= 0 && CQ()) : console.error("moveInventoryItem failed"), wQ
      }), [CQ]), rQ = (0, qQ.useCallback)(((QQ, FQ) => {
        const wQ = eQ.current,
          LQ = null === wQ || void 0 === wQ ? void 0 : wQ.idx;
        wQ && (wQ.idx = function(QQ, FQ, wQ) {
          return QQ === FQ ? wQ : QQ === wQ ? FQ : QQ
        }(LQ, QQ, FQ));
        const qQ = mQ.gameBridge.send("swapInventorySlots", {
          a: QQ,
          b: FQ
        });
        return qQ ? SQ(QQ, FQ) : wQ && (wQ.idx = LQ), qQ
      }), [SQ]), IQ = (0, qQ.useCallback)(((QQ, FQ, wQ, LQ) => {
        const qQ = mQ.gameBridge.send("quickMoveInventoryItem", {
          slot: wQ,
          start: QQ,
          end: FQ,
          amount: LQ
        });
        null !== qQ && SQ(wQ, qQ)
      }), [SQ]), UQ = (0, qQ.useCallback)(((QQ, FQ) => {
        var qQ;
        ((QQ, FQ, wQ) => {
          const LQ = QQ - (wQ - WL.c.length);
          return !(!FQ || LQ < 0 || LQ >= WL.c.length) && (0, WQ.Cb)(FQ) !== WL.c[LQ]
        })(FQ, null === (qQ = tQ.current) || void 0 === qQ ? void 0 : qQ.name, lL().player.length) || (KL({
          e: QQ,
          idx: FQ,
          readInventory: lL,
          itemInfo: mQ.gameBridge.latest("itemInfo"),
          draggedInfoRef: tQ,
          specialItemRef: eQ,
          moveAmtIntoSlot: sQ,
          swapSlots: rQ,
          moveIntoSlots: IQ,
          removeItem: jL,
          removeDraggedInfoRef: CQ,
          close: wQ,
          canCraft: LQ,
          variation: oQ
        }), cQ())
      }), [LQ, wQ, sQ, IQ, CQ, rQ, oQ, cQ]), NQ = (0, qQ.useRef)(0), TQ = (0, qQ.useRef)(null), KQ = (0, qQ.useRef)(null), zQ = (0, qQ.useRef)(null), lQ = (0, qQ.useRef)(new Set), jQ = (0, qQ.useRef)({
        x: 0,
        y: 0
      }), aQ = (0, qQ.useRef)({
        isTouch: !1,
        itemBeingDragged: !1
      }), XQ = (0, qQ.useCallback)((() => (zQ.current = null, aQ.current.itemBeingDragged = !1, clearTimeout(TQ.current), !!KQ.current && (KQ.current = null, cQ(), !0))), [cQ]);
      (0, qQ.useEffect)((() => {
        XQ(), lQ.current.clear()
      }), [FQ]);
      const fQ = QQ => void 0 !== QQ && (lQ.current.has(QQ) || null !== zQ.current && QQ !== zQ.current),
        VQ = QQ => {
          aQ.current.isTouch = (0, mw.p)(QQ)
        },
        hQ = (0, qQ.useCallback)((QQ => FQ => {
          const LQ = (0, mw.p)(FQ);
          if (LQ || iQ(FQ.pageX, FQ.pageY), DQ)
            if (fQ(FQ.pointerId)) void 0 !== FQ.pointerId && lQ.current.add(FQ.pointerId);
            else {
              if (VQ(FQ), LQ) {
                NQ.current = FQ.timeStamp, aQ.current.itemBeingDragged = !0, zQ.current = FQ.pointerId;
                const wQ = (0, mw.m)(lL(), QQ);
                if (wQ && wQ.amount && wQ.amount > 0) {
                  const wQ = FQ.pageX,
                    LQ = FQ.pageY,
                    qQ = jQ.current.x,
                    oQ = jQ.current.y;
                  clearTimeout(TQ.current), TQ.current = setTimeout((() => {
                    if (tQ.current && tQ.current.idx === QQ && (Math.abs(wQ - jQ.current.x) < 20 && Math.abs(LQ - jQ.current.y) < 20 || qQ === jQ.current.x && oQ === jQ.current.y) && aQ.current.itemBeingDragged) {
                      const QQ = lL(),
                        wQ = QQ.creative && !QQ.chest && tQ.current.idx >= pw.e.numInvenSlots && null !== (0, mw.m)(QQ, tQ.current.idx).amount ? pw.e.maxItemStackSize : tQ.current.amount;
                      KQ.current = {
                        initTouchX: FQ.pageX,
                        initTouchY: FQ.pageY,
                        maxAmount: wQ
                      }, tQ.current.amount = Math.ceil(tQ.current.amount / 2), AQ.current.style.transform = "translate(0.5rem, 0.5rem)", xQ(!0), cQ()
                    }
                  }), 500)
                }
              }
              UQ(FQ, QQ)
            }
          else QQ === Hw.c && (0, mw.o)(FQ) && wQ()
        }), [iQ, UQ, DQ, wQ, cQ]),
        JQ = (0, qQ.useCallback)((QQ => QQ => {
          if (fQ(QQ.pointerId)) return;
          const FQ = (0, mw.p)(QQ);
          if (VQ(QQ), !XQ()) {
            if (FQ && tQ.current && QQ.timeStamp - NQ.current > 150) {
              const FQ = document.elementFromPoint(QQ.clientX, QQ.clientY);
              if (null !== FQ) {
                const wQ = FQ.getAttribute("data-inven-idx");
                null !== wQ ? UQ(QQ, parseInt(wQ)) : FQ.classList.contains("InventoryBackgroundScreen") && UQ(QQ, -1)
              }
            }
            iQ(QQ.pageX, QQ.pageY)
          }
        }), [iQ, UQ, XQ]);
      (0, qQ.useEffect)((() => {
        let QQ;
        const wQ = ["pointerup", "pointercancel"],
          LQ = QQ => {
            lQ.current.has(QQ.pointerId) ? setTimeout((() => {
              lQ.current.delete(QQ.pointerId)
            }), 0) : QQ.pointerId === zQ.current && setTimeout((() => {
              zQ.current === QQ.pointerId && XQ()
            }), 0)
          };
        if (FQ) {
          for (const QQ of wQ) document.addEventListener(QQ, LQ, !0);
          if (!aQ.current.isTouch) {
            const QQ = jQ.current;
            iQ(QQ.x, QQ.y)
          }
          QQ = QQ => {
            QQ.preventDefault(), fQ(QQ.pointerId) || (VQ(QQ), iQ(QQ.pageX, QQ.pageY), KQ.current && QQ.pointerId === zQ.current && (QQ => {
              if (!tQ.current) return KQ.current = null, void cQ();
              const {
                initTouchX: FQ,
                maxAmount: wQ
              } = KQ.current, LQ = (QQ.pageX - FQ) * KQ.current.maxAmount / 160, qQ = Math.ceil(wQ / 2) + Math.ceil(LQ);
              tQ.current.amount = Math.min(wQ, Math.max(1, qQ)), cQ()
            })(QQ))
          }, document.addEventListener("pointermove", QQ, !0)
        }
        return () => {
          document.removeEventListener("pointermove", QQ, !0);
          for (const QQ of wQ) document.removeEventListener(QQ, LQ, !0)
        }
      }));
      const EQ = (0, qQ.useCallback)((() => {
          if (tQ.current) {
            const QQ = (0, mw.m)(lL(), tQ.current.idx);
            (!zL(tQ.current, QQ) || QQ.amount < tQ.current.amount) && CQ()
          }
        }), [CQ]),
        nQ = (0, qQ.useCallback)((() => {
          const QQ = tQ.current;
          if (QQ) {
            const FQ = (0, mw.m)(lL(), QQ.idx);
            zL(QQ, FQ) && (QQ.attributes = FQ.attributes)
          }
        }), []);
      return {
        draggedDomRef: AQ,
        draggedInfoRef: tQ,
        specialItemRef: eQ,
        hoverInfoDomRef: MQ,
        longHoldSplitInfoRef: KQ,
        currHoveredIdx: vQ,
        currHoveredDisplayInfo: HQ,
        displayDraggedItemName: YQ,
        forceRerenderIfVisible: cQ,
        removeDraggedInfoRef: CQ,
        checkDraggedItemConsistencyWithInven: EQ,
        refreshDraggedAttributes: nQ,
        swapSlots: rQ,
        getPointerDownForIdx: hQ,
        getPointerUpForIdx: JQ,
        getSetHovering: OQ,
        setCurrHoveredDisplayInfo: bQ,
        moveFollowerTo: iQ
      }
    }
    class fL {
      constructor(QQ) {
        this.snapshot = [], this.newSlots = new Set, this.update(QQ, !1)
      }
      update(QQ, FQ) {
        const wQ = QQ.map((QQ => {
          var FQ;
          return QQ ? {
            name: QQ.name,
            amount: null !== (FQ = QQ.amount) && void 0 !== FQ ? FQ : 1
          } : null
        }));
        wQ.forEach(((QQ, wQ) => {
          const LQ = this.snapshot[wQ],
            qQ = (null === QQ || void 0 === QQ ? void 0 : QQ.name) !== (null === LQ || void 0 === LQ ? void 0 : LQ.name);
          (!QQ || qQ || QQ.amount < LQ.amount) && this.newSlots.delete(wQ), FQ && QQ && (qQ || QQ.amount > LQ.amount) && this.newSlots.add(wQ)
        })), this.snapshot = wQ
      }
      clearMarks() {
        this.newSlots.clear()
      }
      isNew(QQ) {
        return this.newSlots.has(QQ)
      }
    }
    const VL = (QQ, FQ, wQ) => ({
      button: FQ,
      shiftKey: wQ,
      pageX: QQ.clientX,
      pageY: QQ.clientY,
      clientX: QQ.clientX,
      clientY: QQ.clientY,
      pointerType: "mouse"
    });

    function hL(QQ) {
      const [FQ, wQ] = (0, qQ.useState)(QQ);
      return QQ && !FQ && wQ(!0), (0, qQ.useEffect)((() => {
        if (FQ) return;
        let QQ = !0;
        const LQ = () => {
            QQ && (QQ = !1, wQ(!0))
          },
          qQ = "function" === typeof window.requestIdleCallback,
          oQ = qQ ? window.requestIdleCallback(LQ, {
            timeout: 2e3
          }) : void 0,
          DQ = setTimeout(LQ, qQ ? 2e3 : 1e3);
        return () => {
          QQ = !1, clearTimeout(DQ), void 0 !== oQ && window.cancelIdleCallback(oQ)
        }
      }), [FQ]), FQ
    }
    const JL = (0, qQ.memo)((function(QQ) {
      var FQ;
      let {
        show: wQ,
        onOpen: LQ,
        onClose: oQ,
        variation: kQ
      } = QQ;
      const HQ = (0, qQ.useRef)(null),
        bQ = (0, qQ.useRef)(null),
        YQ = function(QQ) {
          const [FQ, wQ] = (0, qQ.useState)(!0), [LQ, oQ] = (0, qQ.useState)(!1), DQ = (0, qQ.useRef)(null), kQ = (0, qQ.useRef)(null), mQ = (0, vQ.l)("_shield"), uQ = (0, qQ.useRef)(null), HQ = (0, vQ.l)("_health"), bQ = (0, qQ.useRef)(null);

          function YQ(QQ) {
            const FQ = Date.now() + QQ;
            FQ < kQ.current || (wQ(!1), clearTimeout(DQ.current), kQ.current = FQ, DQ.current = setTimeout((() => {
              wQ(!0)
            }), QQ))
          }
          return (0, qQ.useEffect)((() => {
            YQ(Yw);
            const QQ = xQ.l.subscribe("requestingPlayVideoAd", (() => {
              YQ(Yw)
            }));
            return () => {
              clearTimeout(DQ.current), xQ.l.unsubscribe(QQ)
            }
          }), []), (0, qQ.useEffect)((() => {
            (uQ.current > mQ || bQ.current > HQ) && YQ(6e4), uQ.current = mQ, bQ.current = HQ
          }), [mQ, HQ]), (0, qQ.useEffect)((() => {
            let FQ = null;
            return QQ ? FQ = setTimeout((() => {
              oQ(!0)
            }), 250) : oQ(!1), () => {
              clearTimeout(FQ)
            }
          }), [QQ]), FQ && LQ
        }(wQ);
      (0, iQ.i)(ww.c, null);
      const AQ = (0, ww.m)(),
        tQ = AQ.some((QQ => QQ.panel)),
        eQ = (0, RQ.g)("inventory", (QQ => null !== QQ.chest && (null !== QQ.chest.ironChest || pL(QQ.chest.numSlots)))),
        MQ = hL(wQ),
        GQ = hL(wQ),
        [pQ, cQ] = (0, qQ.useState)([]),
        CQ = (0, qQ.useCallback)((QQ => {
          cQ((FQ => FQ.filter((FQ => FQ.id !== QQ))))
        }), []),
        SQ = (0, qQ.useRef)(null),
        OQ = (0, qQ.useRef)(0),
        sQ = (0, qQ.useCallback)((() => {
          SQ.current && (OQ.current = SQ.current.scrollTop), oQ()
        }), [oQ]),
        rQ = (0, vQ.l)("inventoryItemsMoveable"),
        IQ = (0, vQ.l)("canCraft"),
        {
          clientEscMenuOptions: UQ
        } = (0, aQ.l)(["clientEscMenuOptions"]),
        NQ = (0, qQ.useRef)(null);
      NQ.current || (NQ.current = new fL(mQ.gameBridge.latest("inventory").player));
      const KQ = NQ.current,
        {
          draggedDomRef: zQ,
          draggedInfoRef: lQ,
          specialItemRef: jQ,
          hoverInfoDomRef: XQ,
          longHoldSplitInfoRef: fQ,
          currHoveredIdx: VQ,
          currHoveredDisplayInfo: hQ,
          displayDraggedItemName: JQ,
          forceRerenderIfVisible: EQ,
          removeDraggedInfoRef: nQ,
          checkDraggedItemConsistencyWithInven: gQ,
          refreshDraggedAttributes: PQ,
          swapSlots: ZQ,
          getPointerDownForIdx: yQ,
          getPointerUpForIdx: BQ,
          getSetHovering: dQ,
          setCurrHoveredDisplayInfo: QF,
          moveFollowerTo: FF
        } = XL({
          show: wQ,
          close: sQ,
          canCraft: IQ,
          variation: kQ,
          inventoryItemsMoveable: rQ,
          setCraftFlyAnims: cQ
        });
      (0, qQ.useEffect)((() => {
        const QQ = !wQ && null !== mQ.gameBridge.latest("inventory").chest;
        if (QQ && mQ.gameBridge.send("closeChest", null), wQ || (KQ.clearMarks(), dQ(null)(!1)), QQ) {
          kw.b.play("chestClose", 1).rate(.8 + .4 * Math.random())
        }
      }), [wQ]), (0, RQ.d)("chestToggled", (QQ => {
        if (QQ ? LQ() : wQ && sQ(), QQ) {
          kw.b.play("chestOpen", 1).rate(.8 + .4 * Math.random())
        }
      }));
      const wF = (0, rF.n)();
      (0, RQ.d)("inventory", (QQ => {
        let {
          player: FQ
        } = QQ;
        var LQ, qQ, oQ;
        (KQ.update(FQ, !wQ && wF.shown), jQ.current) && (jQ.current = (qQ = jQ.current, oQ = null !== (LQ = FQ[jQ.current.idx]) && void 0 !== LQ ? LQ : null, zL(qQ, oQ) ? (qQ.attributes = oQ.attributes, null !== oQ.amount && qQ.amount > oQ.amount && (qQ.amount = oQ.amount), qQ) : null));
        PQ(), null !== VQ && dQ(VQ)(!0), EQ()
      })), (0, qQ.useEffect)((() => (mQ.gameBridge.send("setInventoryOpen", wQ), () => {
        mQ.gameBridge.send("setInventoryOpen", !1)
      })), [wQ]);
      const LF = (QQ, FQ) => {
        if (QQ === Hw.d) return void(QQ => {
          const FQ = jQ.current;
          if (!FQ || null === (0, mw.m)(mQ.gameBridge.latest("inventory"), FQ.idx)) return;
          const wQ = QQ ? Math.max(FQ.amount, 1) : 1,
            LQ = FQ.amount - wQ;
          if (!mQ.gameBridge.send("removeInventoryItem", {
              slot: FQ.idx,
              amount: wQ,
              drop: !0
            })) return;
          const qQ = jQ.current;
          qQ && (qQ.amount = Math.min(qQ.amount, LQ), qQ.amount <= 0 && (jQ.current = null)), EQ()
        })(FQ);
        const wQ = null === QQ ? null : (0, mw.m)(mQ.gameBridge.latest("inventory"), QQ);
        if (null !== wQ) {
          var LQ, qQ, oQ;
          const DQ = FQ && null !== (LQ = wQ.amount) && void 0 !== LQ ? LQ : 1;
          mQ.gameBridge.send("removeInventoryItem", {
            slot: QQ,
            amount: DQ,
            drop: !0
          }), QQ === (null === (qQ = lQ.current) || void 0 === qQ ? void 0 : qQ.idx) && (lQ.current.amount -= DQ, lQ.current.amount <= 0 && nQ(), EQ()), QQ === (null === (oQ = jQ.current) || void 0 === oQ ? void 0 : oQ.idx) && (jQ.current = null, EQ())
        }
      };
      (0, RQ.d)("inventoryDropRequested", (QQ => {
        wQ && VQ !== Hw.d && LF(VQ, QQ)
      }));
      const qF = (QQ, FQ) => {
        let wQ = FQ;
        if (FQ === Hw.d) {
          if (!jQ.current) return;
          wQ = jQ.current.idx
        }
        const LQ = ZQ(QQ, wQ);
        if (LQ && lQ.current && (lQ.current.idx === wQ ? lQ.current.idx = QQ : lQ.current.idx === QQ && (lQ.current.idx = wQ)), LQ && FQ === Hw.d) {
          const QQ = (0, mw.m)(mQ.gameBridge.latest("inventory"), wQ);
          jQ.current = QQ ? {
            idx: wQ,
            name: QQ.name,
            attributes: QQ.attributes,
            amount: QQ.amount
          } : null
        }
        EQ()
      };
      (0, RQ.d)("numberKeyPressed", (QQ => {
        null !== VQ && wQ && qF(QQ - 1, VQ)
      })), (0, qQ.useEffect)((() => {
        wQ || (jQ.current = null, nQ(), QF(null))
      }), [wQ, nQ, QF, jQ]);
      const oF = jQ.current;
      (0, qQ.useEffect)((() => {
        VQ === Hw.d && dQ(Hw.d)(!0)
      }), [oF, VQ, dQ]);
      const DF = () => {
        gQ(), PQ(), EQ()
      };
      (0, RQ.d)("chestRefreshed", DF), (0, RQ.d)("inventorySynced", DF);
      const [kF, vF] = (0, qQ.useState)(new Map), mF = null !== (FQ = kF.get(kQ)) && void 0 !== FQ ? FQ : null, uF = (QQ, FQ) => {
        vF((wQ => {
          const LQ = wQ.get(QQ);
          return LQ && LQ.name === FQ.name && LQ.Cm === FQ.Cm ? wQ : new Map(wQ).set(QQ, FQ)
        }))
      };
      (0, iQ.g)("craftingRecipesEdited", (() => {
        EQ()
      })), (0, iQ.g)(Ew.d, (QQ => {
        let {
          variation: FQ,
          itemName: wQ
        } = QQ;
        uF(FQ, {
          name: wQ,
          Cm: 0
        })
      }));
      const [HF, bF] = (0, qQ.useState)(null), [YF, xF] = (0, qQ.useState)(null);
      (0, RQ.d)("enchantingTableOpened", (QQ => {
        let {
          position: FQ,
          blockName: wQ
        } = QQ;
        bF(FQ), xF(wQ)
      }));
      const [AF, tF] = (0, qQ.useState)(""), [eF, MF] = (0, qQ.useState)(null);
      (0, qQ.useEffect)((() => {
        wQ && SQ.current && (SQ.current.scrollTop = OQ.current)
      }), [wQ]);
      return (QQ => {
        const FQ = (0, qQ.useRef)(QQ);
        FQ.current = QQ, (0, qQ.useEffect)((() => {
          if (!QQ.show) return;
          const wQ = (QQ, wQ, LQ, qQ) => {
              const {
                getPointerDownForIdx: oQ,
                getPointerUpForIdx: DQ
              } = FQ.current;
              oQ(QQ)(VL(wQ, LQ, qQ)), DQ(QQ)(VL(wQ, LQ, qQ))
            },
            LQ = {
              primary: (QQ, FQ) => {
                wQ(QQ, FQ, 0, !1)
              },
              secondary: (QQ, FQ) => {
                wQ(QQ, FQ, 2, !1)
              },
              quickMove: (QQ, FQ) => {
                wQ(QQ, FQ, 0, !0)
              },
              dropHeld: (QQ, wQ) => {
                FQ.current.getPointerDownForIdx(Hw.c)(VL(wQ, QQ ? 0 : 2, !1))
              },
              dropSlot: (QQ, wQ) => {
                FQ.current.dropFromIdx(QQ, wQ)
              },
              swapWithHotbar: (QQ, wQ) => {
                FQ.current.swapWithHotbar(QQ, wQ)
              },
              cancel: () => {
                FQ.current.removeDraggedInfoRef()
              },
              isHolding: () => !!FQ.current.draggedInfoRef.current,
              hasItemAt: QQ => {
                const {
                  draggedInfoRef: wQ,
                  specialItemRef: LQ
                } = FQ.current;
                if (QQ === Hw.d) return !!LQ.current;
                const qQ = (0, mw.m)(mQ.gameBridge.latest("inventory"), QQ);
                return !!qQ && (0, Ow.e)(QQ, (0, mw.c)(qQ), [wQ.current, LQ.current]).shown
              },
              hover: (QQ, wQ) => {
                const {
                  moveFollowerTo: LQ,
                  getSetHovering: qQ
                } = FQ.current;
                LQ(wQ.clientX, wQ.clientY), qQ(null !== QQ && void 0 !== QQ ? QQ : void 0)(null !== QQ, void 0, {
                  pageX: wQ.clientX,
                  pageY: wQ.clientY
                })
              },
              moveTo: QQ => {
                FQ.current.moveFollowerTo(QQ.clientX, QQ.clientY)
              },
              close: () => {
                FQ.current.close()
              }
            };
          return (0, Lw.o)(LQ)
        }), [QQ.show])
      })({
        show: wQ,
        close: sQ,
        draggedInfoRef: lQ,
        specialItemRef: jQ,
        getPointerDownForIdx: yQ,
        getPointerUpForIdx: BQ,
        getSetHovering: dQ,
        moveFollowerTo: FF,
        removeDraggedInfoRef: nQ,
        dropFromIdx: LF,
        swapWithHotbar: qF
      }), (0, qQ.useEffect)((() => {
        xQ.l.GA("inventoryDraggedItemUpdated", {
          draggedInfo: lQ.current,
          specialItemInfo: jQ.current,
          setHovered: dQ,
          pointerDown: yQ,
          pointerUp: BQ,
          variation: IQ ? kQ : void 0,
          craftFlyAnims: pQ
        })
      })), (0, uQ.jsxs)(TQ.b, {
        show: wQ,
        style: {
          touchAction: wQ ? "none" : void 0
        },
        children: [lQ.current && (0, uQ.jsx)(Aw, {
          draggedInfo: lQ.current,
          toAddRef: zQ
        }), lQ.current && JQ && (0, uQ.jsx)(tw, {
          className: "DraggedInvenItemName",
          displayInfo: aL(lQ.current),
          domRef: null
        }), !lQ.current && hQ && (0, uQ.jsx)(tw, {
          displayInfo: hQ,
          domRef: XQ
        }), fQ.current && lQ.current && (0, uQ.jsx)(ew, {
          info: fQ.current,
          draggedInfo: lQ.current
        }), pQ.map((QQ => (0, uQ.jsx)(uw.e, {
          anim: QQ,
          onComplete: CQ
        }, QQ.id))), (0, uQ.jsx)(DQ.d, {
          show: wQ,
          className: "InventoryBackgroundScreen",
          globallyUniqueKey: "Inventory",
          close: sQ,
          togglePointerLock: !1,
          closeOnPressBackground: !1,
          preventContextMenu: !0,
          pointerDown: yQ(Hw.c),
          pointerUp: BQ(Hw.c),
          doGameplayStartStopOnShow: !0
        }), MQ && (0, uQ.jsxs)("div", {
          className: "EntireInventoryWrapper",
          children: [(0, uQ.jsx)("div", {
            ref: HQ,
            className: "InventoryAdOuter",
            children: (0, uQ.jsx)(vw.c, {
              info: {
                adType: "leaderboard",
                adId: 6,
                adAlias: "inventory"
              },
              sizeInfo: {
                parentRef: HQ
              },
              verticalAlign: "start",
              showing: wQ && YQ,
              extraContrastBackgroundBox: "top",
              noFillShowBloxdAdProbability: 0,
              autoRefreshMode: "none"
            })
          }), (0, uQ.jsxs)("div", {
            className: "InventoryWrapper",
            children: [(0, uQ.jsxs)("div", {
              className: Gw()("Inventory", {
                WithPanelButtons: tQ,
                WideChestOpen: eQ
              }),
              children: [(0, uQ.jsx)("div", {
                className: "InventoryFiller"
              }), (0, uQ.jsx)(Dw, {
                show: wQ,
                buttons: AQ
              }), (0, uQ.jsxs)("div", {
                className: "InvenBody",
                children: [(0, uQ.jsx)(iL, {
                  variation: kQ,
                  canCraft: IQ,
                  show: wQ,
                  creativeMounted: GQ,
                  specialItemRef: jQ,
                  draggedInfo: lQ.current,
                  getSetHovering: dQ,
                  getPointerDownForIdx: yQ,
                  getPointerUpForIdx: BQ,
                  enchantingTablePosition: HF,
                  enchantingTableBlockName: YF,
                  selectedCraftable: mF,
                  dispatchSelectedCraftable: QQ => {
                    uF(kQ, QQ)
                  },
                  creativeScrollDiv: SQ,
                  creativeSearchVal: AF,
                  setCreativeSearchVal: tF,
                  creativeCategory: eF,
                  setCreativeCategory: MF,
                  onCraft: function(QQ, FQ) {
                    let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    if (gQ(), (QQ || wQ.length > 0) && cQ((FQ => {
                        const LQ = [...FQ],
                          qQ = FQ.filter((QQ => "ingredient" === QQ.kind)).length;
                        for (const QQ of wQ.slice(0, Math.max(0, 24 - qQ))) LQ.push({
                          id: (0, uw.g)(),
                          ...QQ,
                          to: QQ.to
                        });
                        return QQ && LQ.push({
                          id: (0, uw.g)(),
                          ...QQ,
                          to: (0, mw.f)(QQ.wm)
                        }), LQ
                      })), null !== FQ) {
                      var LQ;
                      const QQ = mQ.gameBridge.latest("inventory");
                      (0, WQ.Cb)(null === (LQ = (0, mw.m)(QQ, FQ)) || void 0 === LQ ? void 0 : LQ.name) ? yQ(FQ)({
                        button: 0,
                        shiftKey: !0
                      }): ZQ(FQ, QQ.selectedSlot)
                    }
                  }
                }), (0, uQ.jsx)(UL, {
                  draggedInfo: lQ.current,
                  specialItemInfo: jQ.current,
                  craftFlyAnims: pQ,
                  getSetHovering: dQ,
                  getPointerDownForIdx: yQ,
                  getPointerUpForIdx: BQ,
                  variation: kQ,
                  canCraft: IQ,
                  isNewSlot: QQ => UQ.showNewItemIndicator && KQ.isNew(QQ)
                })]
              })]
            }), (0, uQ.jsx)("div", {
              className: "InventoryAdOuter",
              children: (0, uQ.jsx)("div", {
                ref: bQ,
                className: "InventoryAd",
                children: (0, uQ.jsx)("div", {
                  className: "InventoryAdInner"
                })
              })
            })]
          })]
        })]
      })
    }));
    var EL = wQ(1440),
      nL = wQ(134);
    const gL = (0, qQ.memo)((function(QQ) {
      let {
        show: FQ,
        onOpen: wQ,
        onClose: LQ
      } = QQ;
      const oQ = (0, qQ.useRef)(0),
        kQ = () => (0, EL.j)() && !(0, EL.p)() && oQ.current <= 2;
      FQ = kQ() && FQ;
      const vQ = () => {
        oQ.current++, LQ()
      };
      (0, iQ.g)("ctrlCrouchWithoutFullscreen", (() => {
        kQ() && wQ()
      })), (0, iQ.g)("displaymodeFullscreenChange", (QQ => {
        FQ && QQ && vQ()
      }));
      const mQ = "crazygames" === nL.r;
      return (0, uQ.jsx)(DQ.d, {
        close: vQ,
        escDoesExit: !0,
        show: FQ,
        togglePointerLock: !1,
        globallyUniqueKey: "CantCtrlCrouchIfNotFullscreenComp",
        children: (0, uQ.jsxs)("div", {
          className: "CantCtrlCrouchIfNotFullscreenComp SmallTextBold",
          children: [(0, uQ.jsx)("div", {
            className: "CantCtrlCrouchHeader",
            children: "Go fullscreen to crouch with ctrl"
          }), mQ && (0, uQ.jsx)("div", {
            className: "CantCtrlCrouchInstructions SmallTextLight",
            children: "Press the crazygames full screen button"
          }), (0, uQ.jsx)("div", {
            className: "CantCtrlCrouchSubtext SmallTextLight",
            children: "(Otherwise I can't stop CTRL+W closing the window!)"
          }), (0, uQ.jsxs)("div", {
            className: "CantCtrlCrouchButtonsContainer",
            children: [!mQ && (0, uQ.jsx)(YQ.m, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                (0, EL.v)(), vQ()
              },
              children: (0, uQ.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Go Fullscreen"
              })
            }), (0, uQ.jsx)(YQ.F, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                vQ()
              },
              children: (0, uQ.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Nevermind"
              })
            })]
          })]
        })
      })
    }));
    var PL = wQ(3484),
      ZL = wQ(3505),
      yL = wQ(1362),
      BL = wQ(3462),
      dL = wQ(1365),
      Qq = wQ(36185),
      Fq = wQ(3470),
      wq = wQ(3479);

    function Lq(QQ, FQ) {
      return (0, Qq.g)(!0, QQ, FQ) ? () => {
        !async function(QQ) {
          await BL.c.refresh();
          const {
            data: FQ,
            failed: wQ
          } = BL.c.getState();
          if (null === FQ || wQ) return;
          const LQ = BL.c.getExclusion(QQ);
          if ("blocked" === LQ) return;
          const qQ = null === LQ;
          yL.NotificationProvider.showCustomPopup({
            body: FQ => {
              const wQ = wQ => ({
                text: Fq.f[wQ].text,
                onClick: () => {
                  FQ(), (0, wq.f)(wQ, QQ, null)
                }
              });
              return (0, uQ.jsx)(dL.j, {
                title: qQ ? "socialBar:ignoreOrBlockAfterReport" : "socialBar:blockAfterReport",
                textOpts: {
                  title: {
                    playerName: QQ
                  }
                },
                secondary: qQ ? wQ("ignore") : void 0,
                confirm: wQ("block"),
                cancel: {
                  text: "socialBar:notNow",
                  onClick: FQ
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
    wQ(3497);
    const qq = (0, qQ.memo)((function(QQ) {
      let {
        show: FQ,
        onOpen: wQ,
        onClose: LQ
      } = QQ;
      const [oQ, kQ] = (0, qQ.useState)(""), [vQ, HQ] = (0, qQ.useState)(""), [bQ, YQ] = (0, qQ.useState)(null), [xQ, AQ] = (0, qQ.useState)(null), tQ = (0, RQ.k)("hiddenPlayerNames"), eQ = {
        kind: "worldCodeLine",
        onSubmit: (QQ, FQ) => {
          LQ(), mQ.gameBridge.send("reportWorldCodeChat", {
            chatMsgId: xQ,
            Hm: QQ,
            details: FQ
          })
        }
      }, MQ = {
        kind: "player",
        shownPlayerName: (0, FF.f)(oQ, tQ),
        onSubmit: (QQ, FQ) => {
          LQ(), (0, ZL.b)({
            playerId: vQ,
            playerName: oQ,
            chatMsgId: xQ,
            policyId: QQ,
            details: FQ,
            onAccepted: Lq(oQ, tQ)
          })
        }
      };
      return (0, iQ.g)("OpenReportMenu", (QQ => {
        let {
          playerEId: FQ,
          playerName: LQ,
          Om: qQ,
          serverChatMsgId: oQ
        } = QQ;
        HQ(FQ), kQ(LQ), YQ(qQ), AQ(oQ), wQ()
      })), (0, uQ.jsx)(DQ.d, {
        show: FQ,
        close: LQ,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeReportComponent",
        children: (0, uQ.jsx)("div", {
          className: "ReportPanel",
          children: FQ && (0, uQ.jsx)(PL.c, {
            reported: null === vQ ? eQ : MQ,
            chatMessage: bQ,
            inGame: !0,
            onCancel: LQ
          })
        })
      })
    }));
    var oq = wQ(36470);
    const Dq = (0, qQ.memo)((function(QQ) {
      let {
        show: FQ,
        onOpen: wQ,
        onClose: LQ
      } = QQ;
      const {
        t: oQ
      } = (0, PQ.y)(), [kQ, vQ] = (0, qQ.useState)(null), [HQ, bQ] = (0, qQ.useState)(0);
      (0, iQ.g)("OpenDiscordReportBox", (QQ => {
        mQ.gameBridge.send("requestDiscordReportKey", QQ), bQ(0), wQ()
      }));
      const xQ = () => {
        LQ(), vQ(null), bQ(0)
      };
      return (0, iQ.g)("setDiscordReportKey", (QQ => {
        vQ(QQ)
      })), (0, uQ.jsx)(DQ.d, {
        show: FQ,
        close: xQ,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeDiscordReportComponent",
        children: (0, uQ.jsx)("div", {
          className: "ReportPanel",
          children: (0, uQ.jsx)(dL.j, {
            className: "ReportKeyBox",
            title: "report:discordReportTitle",
            subtitle: "report:discordReportDescription",
            confirm: {
              text: "report:openDiscord",
              onClick: () => {
                window.open(oq.d, "_blank", "noreferrer")
              },
              padMouseOnly: !0
            },
            cancel: {
              text: "general:cancel",
              onClick: xQ
            },
            padStartsOn: "cancel",
            children: (0, uQ.jsxs)("div", {
              className: "ReportKeyRow",
              children: [(0, uQ.jsx)("div", {
                className: "ReportKeyInner",
                children: null !== kQ && void 0 !== kQ ? kQ : oQ("report:loadingReportKey")
              }), (0, uQ.jsx)(YQ.f, {
                className: "ReportKeyCopyButton",
                onClick: () => {
                  navigator.clipboard.writeText(kQ).catch((QQ => {
                    console.error("Failed to copy report key:", QQ)
                  })), bQ(Date.now())
                },
                disabled: Date.now() - HQ < 1e3 || !kQ,
                children: Date.now() - HQ < 1e3 ? oQ("general:copied") : oQ("general:copy")
              })]
            })
          })
        })
      })
    }));
    var kq = wQ(1302);
    const vq = {
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
      mq = (0, qQ.memo)((function(QQ) {
        let {
          show: FQ,
          onOpen: wQ,
          onClose: LQ
        } = QQ;
        const [oQ, kQ] = (0, qQ.useState)(null), vQ = (0, qQ.useRef)(0), HQ = (0, qQ.useRef)(null), {
          t: bQ
        } = (0, PQ.y)();
        (0, iQ.g)("EditCustomLobbyBlock", (QQ => {
          let {
            pos: FQ
          } = QQ;
          kQ(FQ), null !== FQ && wQ(), HQ.current.scrollTo(0, vQ.current)
        }));
        const YQ = QQ => {
          mQ.gameBridge.send("setCustomLobbyBlock", {
            pos: oQ,
            blockName: QQ
          }), LQ()
        };
        return (0, uQ.jsx)(DQ.d, {
          className: "CustomLobbyBlockEditorOuter",
          close: LQ,
          escDoesExit: !0,
          show: FQ,
          togglePointerLock: !1,
          globallyUniqueKey: "CustomLobbyBlockEditor",
          children: (0, uQ.jsx)("div", {
            className: "CustomLobbyBlockEditor",
            ref: HQ,
            onScroll: () => {
              vQ.current = HQ.current.scrollTop
            },
            children: (0, uQ.jsx)("div", {
              className: "CustomLobbyBlockGameContainer",
              children: Object.entries(vq).map((QQ => {
                let [FQ, wQ] = QQ;
                return (0, uQ.jsxs)("div", {
                  className: "CustomLobbyBlockGame",
                  children: [(0, uQ.jsx)("h2", {
                    className: "CustomLobbyBlockGameTitle",
                    children: bQ(FQ)
                  }), (0, uQ.jsx)("div", {
                    className: "CustomLobbyBlockCategoryContainer",
                    children: Object.entries(wQ).map((QQ => {
                      let [FQ, {
                        tooltip: wQ,
                        blocks: LQ
                      }] = QQ;
                      return (0, uQ.jsxs)("div", {
                        className: "CustomLobbyBlockCategory",
                        children: [(0, uQ.jsxs)("h3", {
                          className: "CustomLobbyBlockCategoryTitle",
                          children: [bQ(FQ), (0, uQ.jsx)(nQ.b, {
                            hoverInfo: bQ(wQ),
                            className: "CustomLobbyBlockTooltip"
                          })]
                        }), (0, uQ.jsx)("div", {
                          className: "CustonLobbyBlockContainer",
                          children: LQ.map((QQ => (0, uQ.jsx)(uq, {
                            blockName: QQ,
                            selectBlock: YQ
                          }, QQ)))
                        })]
                      }, FQ)
                    }))
                  })]
                }, FQ)
              }))
            })
          })
        })
      })),
      uq = (0, qQ.memo)((function(QQ) {
        var FQ;
        let {
          blockName: wQ,
          selectBlock: LQ
        } = QQ;
        const qQ = (0, kL.c)(wQ),
          oQ = null !== (FQ = void 0 === qQ ? void 0 : (0, DL.displayNameOf)(qQ)) && void 0 !== FQ ? FQ : wQ,
          DQ = void 0 === qQ ? void 0 : (0, DL.descriptionOf)(qQ);
        return (0, uQ.jsx)(nQ.f, {
          tooltipInner: (0, uQ.jsxs)("div", {
            className: "CustomLobbyBlockNameTooltip",
            children: [(0, uQ.jsx)("div", {
              className: "CustomLobbyBlockName",
              children: (0, uQ.jsx)(SQ.e, {
                text: oQ
              })
            }), DQ && (0, uQ.jsx)("div", {
              className: "CustomLobbyBlockDescription",
              children: (0, uQ.jsx)(SQ.e, {
                text: DQ
              })
            })]
          }),
          children: (0, uQ.jsx)("div", {
            className: "CustomLobbyBlockButton",
            onClick: () => LQ(wQ),
            children: (0, uQ.jsx)(ow.e, {
              itemName: wQ,
              amount: 1
            })
          })
        }, wQ)
      }));
    var Hq = wQ(2910),
      bq = wQ(4112),
      Yq = wQ(9137);

    function xq() {
      const QQ = (0, RQ.k)("itemInfo");
      return (0, qQ.useMemo)((() => function(QQ) {
        return {
          getDefaultItemStat(FQ, wQ) {
            var LQ;
            const qQ = QQ[FQ];
            return "description" === wQ ? null === qQ || void 0 === qQ ? void 0 : qQ.description : null !== (LQ = null === qQ || void 0 === qQ ? void 0 : qQ.displayName) && void 0 !== LQ ? LQ : FQ
          }
        }
      }(QQ)), [QQ])
    }
    const Aq = (0, qQ.memo)((function(QQ) {
        var FQ, wQ, LQ, oQ, kQ, vQ, mQ, HQ, bQ, YQ, xQ, AQ, eQ, MQ, GQ, pQ, cQ, CQ, SQ, WQ, RQ, OQ, sQ;
        let {
          togglePointerLock: rQ,
          show: IQ,
          onOpen: UQ,
          onClose: NQ
        } = QQ;
        const {
          t: TQ
        } = (0, PQ.y)(), KQ = xq(), zQ = (0, qQ.useRef)(null), lQ = (0, qQ.useRef)(bq.b.MobHungerLevel.Hungry), jQ = (0, qQ.useRef)(null), aQ = (0, Hq.b)(), XQ = (0, qQ.useRef)(null), fQ = (0, qQ.useRef)(null), VQ = zQ.current;
        (0, qQ.useEffect)((() => {
          if (!IQ) return;
          const QQ = Yq.d.openPet(XQ.current);
          return fQ.current = QQ, () => {
            QQ.close(), fQ.current = null
          }
        }), [IQ]), (0, qQ.useEffect)((() => {
          IQ && VQ && fQ.current.show(function(QQ) {
            var FQ;
            let {
              mobType: wQ,
              mobSettings: LQ
            } = QQ;
            return {
              mobType: wQ,
              variation: null !== (FQ = LQ.variation) && void 0 !== FQ ? FQ : "default",
              metaInfo: LQ.metaInfo,
              tamed: !(0, GL.F)(LQ.ownerDbId)
            }
          }(VQ))
        }), [IQ, VQ]), (0, qQ.useEffect)((() => {
          const QQ = () => {
            var QQ;
            const FQ = bq.b.getMobHungerLevel(null === (QQ = zQ.current) || void 0 === QQ ? void 0 : QQ.mobSettings.petInfo.lastFedAt);
            if (FQ !== lQ.current && (lQ.current = FQ, aQ()), jQ.current) {
              var wQ;
              const QQ = Date.now(),
                FQ = bq.b.getNextStateAt(null === (wQ = zQ.current) || void 0 === wQ ? void 0 : wQ.mobSettings.petInfo.lastFedAt);
              let LQ = Math.floor((FQ - QQ) / 1e3),
                qQ = "";
              if (LQ > 3600) {
                qQ += Math.floor(LQ / 60 / 60).toString().padStart(2, "0"), qQ += ":", LQ %= 3600
              }
              const oQ = LQ % 60;
              qQ += Math.floor(LQ / 60).toString().padStart(2, "0"), qQ += ":", qQ += oQ.toString().padStart(2, "0"), jQ.current.textContent = qQ
            }
          };
          QQ();
          const FQ = setInterval(QQ, 250);
          return () => {
            clearInterval(FQ)
          }
        }), [VQ, aQ]), (0, iQ.g)("showPetUi", (QQ => {
          let {
            mobType: FQ,
            mobSettings: wQ
          } = QQ;
          zQ.current = {
            mobType: FQ,
            mobSettings: wQ
          }, IQ || UQ()
        }));
        const hQ = null === (FQ = zQ.current) || void 0 === FQ ? void 0 : FQ.mobSettings.health,
          JQ = null === (wQ = zQ.current) || void 0 === wQ ? void 0 : wQ.mobSettings.maxHealth,
          EQ = bq.b.getFriendshipLevelInfo(null !== (LQ = null === (oQ = zQ.current) || void 0 === oQ ? void 0 : oQ.mobSettings.petInfo.friendshipPoints) && void 0 !== LQ ? LQ : 0);
        return (0, uQ.jsx)(DQ.d, {
          className: "PetUIOuter",
          close: NQ,
          escDoesExit: !0,
          show: IQ,
          togglePointerLock: rQ,
          forcePointerUnlock: IQ,
          globallyUniqueKey: "PetUI",
          children: (0, uQ.jsx)("div", {
            className: "PetUI",
            children: (0, uQ.jsxs)("div", {
              className: "PetUIContainer",
              children: [(0, uQ.jsxs)("div", {
                className: "PetUILeftSideContainer",
                children: [(0, uQ.jsx)("div", {
                  className: "PetUITitle",
                  children: null !== (kQ = null === (vQ = zQ.current) || void 0 === vQ ? void 0 : vQ.mobSettings.name) && void 0 !== kQ ? kQ : "Your Pet"
                }), (0, uQ.jsx)("div", {
                  className: "PetUICanvasContainer",
                  ref: XQ
                })]
              }), (0, uQ.jsxs)("div", {
                className: "PetUIInformation",
                children: [!(0, GL.F)(null === (mQ = zQ.current) || void 0 === mQ ? void 0 : mQ.mobSettings.petInfo.friendshipPoints) && (0, uQ.jsxs)("div", {
                  className: "PetUIFriendshipPoints",
                  children: [(0, uQ.jsx)("div", {
                    className: "PetUIFriendshipPointsTitle",
                    children: TQ("mobAiPlugin:friendshipTitle")
                  }), (0, uQ.jsx)("div", {
                    className: "PetUIFriendshipHearts",
                    children: bq.b.getIconsFromFriendshipPoints(null !== (HQ = zQ.current.mobSettings.petInfo.friendshipPoints) && void 0 !== HQ ? HQ : 0).map(((QQ, FQ) => (0, uQ.jsx)("div", {
                      className: "PetUIFriendshipHeart",
                      children: (0, uQ.jsx)(ow.e, {
                        itemName: QQ,
                        amount: 1
                      })
                    }, FQ)))
                  }), (0, uQ.jsx)("div", {
                    className: "PetUIFriendshipBar",
                    children: (0, uQ.jsxs)("div", {
                      className: "PetUIFriendshipBarBackground",
                      children: [(0, uQ.jsx)("div", {
                        className: "PetUIFriendshipBarForeground",
                        style: {
                          transform: `scaleX(${EQ.totalPointsForNextLevel>0?Math.max(EQ.pointsIntoCurrentLevel/EQ.totalPointsForNextLevel,0):1})`,
                          transformOrigin: "left center"
                        }
                      }), (0, uQ.jsx)("div", {
                        className: "PetUIFriendshipBarText",
                        children: EQ.totalPointsForNextLevel > 0 ? ` ${Math.ceil(EQ.pointsIntoCurrentLevel)}/${Math.ceil(EQ.totalPointsForNextLevel)}` : Math.ceil(EQ.pointsIntoCurrentLevel)
                      })]
                    })
                  })]
                }), (0, uQ.jsxs)("div", {
                  className: "PetUIHungry",
                  children: [(0, uQ.jsx)("div", {
                    className: "PetUIHungryTitle",
                    children: TQ("mobAiPlugin:hungerTitle")
                  }), (0, uQ.jsx)("div", {
                    className: "PetUIHungryCurrent",
                    children: bq.b.hungerLevelIcons[lQ.current].map(((QQ, FQ) => (0, uQ.jsx)("div", {
                      className: "PetUIHungryIcon",
                      children: (0, uQ.jsx)(ow.e, {
                        itemName: QQ,
                        amount: 1
                      })
                    }, FQ)))
                  }), (0, uQ.jsxs)("div", {
                    className: "PetUIHungryLevel",
                    children: [TQ(bq.b.hungerLevelTranslations[lQ.current].translationKey), lQ.current !== bq.b.MobHungerLevel.Starving && !(0, GL.F)(null === (bQ = zQ.current) || void 0 === bQ ? void 0 : bQ.mobSettings.petInfo.lastFedAt) && (0, uQ.jsxs)("div", {
                      className: "PetUIHungryNext",
                      children: [TQ("mobAiPlugin:nextFeedIn", {
                        state: TQ(bq.b.hungerLevelTranslations[lQ.current + 1].translationKey)
                      }), ":", " ", (0, uQ.jsx)("span", {
                        ref: jQ
                      })]
                    })]
                  })]
                }), (0, uQ.jsx)(nQ.f, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, uQ.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: TQ("mobAiPlugin:healthTooltip")
                  }),
                  children: (0, uQ.jsxs)("div", {
                    className: Gw()("PetUIQuickStatsItem", {
                      Disabled: (0, GL.F)(hQ) || (0, GL.F)(JQ)
                    }),
                    children: [(0, uQ.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, uQ.jsx)(ow.e, {
                        itemName: "Health",
                        amount: 1
                      })
                    }), (0, uQ.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (0, GL.F)(hQ) || (0, GL.F)(JQ) ? "" : (0, uQ.jsxs)(uQ.Fragment, {
                        children: [Math.ceil(hQ), (0, uQ.jsxs)("span", {
                          className: "PetUIQuickStatsValueMax",
                          children: ["/", Math.ceil(JQ)]
                        })]
                      })
                    })]
                  })
                }), (0, uQ.jsx)(nQ.f, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, uQ.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: TQ("mobAiPlugin:attackDamageTooltip")
                  }),
                  children: (0, uQ.jsxs)("div", {
                    className: Gw()("PetUIQuickStatsItem", {
                      Disabled: (0, GL.F)(null === (YQ = zQ.current) || void 0 === YQ ? void 0 : YQ.mobSettings.attackDamage) || zQ.current.mobSettings.attackDamage <= 0
                    }),
                    children: [(0, uQ.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, uQ.jsx)(ow.e, {
                        itemName: "Iron Sword",
                        amount: 1
                      })
                    }), (0, uQ.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (xQ = zQ.current) || void 0 === xQ ? void 0 : xQ.mobSettings.attackDamage) || ""
                    })]
                  })
                }), (0, uQ.jsx)(nQ.f, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, uQ.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: TQ("mobAiPlugin:secondaryAttackDamageTooltip")
                  }),
                  children: (0, uQ.jsxs)("div", {
                    className: Gw()("PetUIQuickStatsItem", {
                      Disabled: (0, GL.F)(null === (AQ = zQ.current) || void 0 === AQ ? void 0 : AQ.mobSettings.secondaryAttackDamage) || zQ.current.mobSettings.secondaryAttackDamage <= 0
                    }),
                    children: [(0, uQ.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, uQ.jsx)(ow.e, {
                        itemName: "Stone Crossbow",
                        amount: 1
                      })
                    }), (0, uQ.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (eQ = zQ.current) || void 0 === eQ ? void 0 : eQ.mobSettings.secondaryAttackDamage) || ""
                    })]
                  })
                }), (0, uQ.jsx)(nQ.f, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, uQ.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: TQ("mobAiPlugin:speedTooltip")
                  }),
                  children: (0, uQ.jsxs)("div", {
                    className: Gw()("PetUIQuickStatsItem", {
                      Disabled: (0, GL.F)(null === (MQ = zQ.current) || void 0 === MQ ? void 0 : MQ.mobSettings.baseRunningSpeed)
                    }),
                    children: [(0, uQ.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, uQ.jsx)(ow.e, {
                        itemName: "Speed",
                        amount: 1
                      })
                    }), (0, uQ.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: null !== (GQ = null === (pQ = zQ.current) || void 0 === pQ || null === (cQ = pQ.mobSettings.baseRunningSpeed) || void 0 === cQ ? void 0 : cQ.toFixed(2)) && void 0 !== GQ ? GQ : ""
                    })]
                  })
                }), (0, uQ.jsx)(nQ.f, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, uQ.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: TQ("mobAiPlugin:saddledTooltip")
                  }),
                  children: (0, uQ.jsxs)("div", {
                    className: Gw()("PetUIQuickStatsItem", {
                      Disabled: "Saddled" !== (null === (CQ = zQ.current) || void 0 === CQ ? void 0 : CQ.mobSettings.metaInfo)
                    }),
                    children: [(0, uQ.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, uQ.jsx)(ow.e, {
                        itemName: "Saddle",
                        amount: 1
                      })
                    }), (0, uQ.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: "Saddled" === (null === (SQ = zQ.current) || void 0 === SQ ? void 0 : SQ.mobSettings.metaInfo) ? (0, uQ.jsx)(tQ.c, {
                        name: "check"
                      }) : ""
                    })]
                  })
                }), !(0, GL.F)(null === (WQ = zQ.current) || void 0 === WQ ? void 0 : WQ.mobSettings.tameInfo) && (0, uQ.jsxs)(uQ.Fragment, {
                  children: [(0, uQ.jsxs)("div", {
                    className: "PetUIFood",
                    children: [(0, uQ.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, uQ.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, uQ.jsx)(eq, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:superlikedFoodTitle"
                          },
                          description: null,
                          tintColor: bq.b.feedTextColours[bq.b.MobFoodType.Superliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, uQ.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: (0, uQ.jsx)("div", {
                          className: "PetUIFoodItem",
                          children: zQ.current.mobSettings.petInfo.superlikedFoodKnown ? (0, uQ.jsx)(tq, {
                            food: zQ.current.mobSettings.petInfo.superlikedFood
                          }) : (0, uQ.jsx)(eq, {
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
                    }), (0, uQ.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, uQ.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, uQ.jsx)(eq, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:likedFoodTitle"
                          },
                          description: null,
                          tintColor: bq.b.feedTextColours[bq.b.MobFoodType.Liked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, uQ.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (RQ = zQ.current.mobSettings.tameInfo.likedFoods) || void 0 === RQ ? void 0 : RQ.filter((QQ => !zQ.current.mobSettings.petInfo.superlikedFoodKnown || QQ !== zQ.current.mobSettings.petInfo.superlikedFood)).map((QQ => (0, uQ.jsx)(tq, {
                          food: QQ
                        }, QQ)))
                      })]
                    }), (0, uQ.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, uQ.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, uQ.jsx)(eq, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:neutralFoodTitle"
                          },
                          description: null,
                          tintColor: bq.b.feedTextColours[bq.b.MobFoodType.Neutral],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, uQ.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (OQ = zQ.current.mobSettings.tameInfo.neutralFoods) || void 0 === OQ ? void 0 : OQ.map((QQ => (0, uQ.jsx)(tq, {
                          food: QQ
                        }, QQ)))
                      })]
                    }), (0, uQ.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, uQ.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, uQ.jsx)(eq, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:dislikedFoodTitle"
                          },
                          description: null,
                          tintColor: bq.b.feedTextColours[bq.b.MobFoodType.Disliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, uQ.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (sQ = zQ.current.mobSettings.tameInfo.dislikedFoods) || void 0 === sQ ? void 0 : sQ.map((QQ => (0, uQ.jsx)(tq, {
                          food: QQ
                        }, QQ)))
                      })]
                    })]
                  }), zQ.current.mobSettings.tameInfo.levelUpBonuses && (0, uQ.jsx)("div", {
                    className: "PetUIFeedDrops",
                    children: Array.from({
                      length: bq.b.MAX_LEVEL + 1
                    }).map(((QQ, FQ) => {
                      const wQ = FQ;
                      if (0 === wQ) return null;
                      const LQ = zQ.current.mobSettings.tameInfo.levelUpBonuses[wQ],
                        qQ = bq.b.getBonusDisplayInfo(KQ, zQ.current.mobSettings, zQ.current.mobType, LQ);
                      return (0, uQ.jsxs)("div", {
                        className: Gw()("PetUIFeedDropContainer", {
                          Selected: wQ === bq.b.getFriendshipLevelInfo(zQ.current.mobSettings.petInfo.friendshipPoints).level
                        }),
                        children: [(0, uQ.jsx)("div", {
                          className: "PetUIFeedDropHearts",
                          children: Array.from({
                            length: wQ
                          }).map(((QQ, FQ) => (0, uQ.jsx)("div", {
                            className: "PetUIFeedDropHeart",
                            children: (0, uQ.jsx)(ow.e, {
                              itemName: "Friendship",
                              amount: 1
                            })
                          }, `${wQ}-${FQ}`)))
                        }), (0, uQ.jsx)("div", {
                          className: "PetUIFeedDropItems",
                          children: qQ && (0, uQ.jsx)(eq, {
                            icon: qQ.icon,
                            displayName: qQ.displayName,
                            description: qQ.description
                          })
                        })]
                      }, wQ)
                    }))
                  })]
                })]
              })]
            })
          })
        })
      })),
      tq = (0, qQ.memo)((function(QQ) {
        let {
          food: FQ,
          includeDescription: wQ = !1
        } = QQ;
        const LQ = xq(),
          qQ = LQ.getDefaultItemStat(FQ, "displayName"),
          oQ = LQ.getDefaultItemStat(FQ, "description");
        return (0, uQ.jsx)(eq, {
          icon: FQ,
          displayName: qQ,
          description: wQ ? oQ : null
        })
      })),
      eq = (0, qQ.memo)((function(QQ) {
        let {
          icon: FQ,
          displayName: wQ,
          description: LQ,
          tintColor: qQ,
          className: oQ = "PetUIFoodItem"
        } = QQ;
        return (0, uQ.jsx)(nQ.f, {
          delayHide: 0,
          delayShow: 0,
          tooltipInner: (0, uQ.jsxs)("div", {
            className: "PetUIFoodItemTooltip",
            children: [(0, uQ.jsx)("div", {
              className: "PetUIFoodItemName",
              children: (0, uQ.jsx)(SQ.e, {
                text: wQ
              })
            }), LQ && (0, uQ.jsx)("div", {
              className: "PetUIFoodItemDescription",
              children: (0, uQ.jsx)(SQ.e, {
                text: LQ
              })
            })]
          }),
          children: (0, uQ.jsx)("div", {
            className: oQ,
            children: (0, uQ.jsx)(ow.e, {
              itemName: FQ,
              amount: 1,
              tintColor: qQ
            })
          })
        })
      }));
    var Mq = wQ(3621),
      Gq = wQ(1147),
      pq = wQ(1254),
      cq = wQ(36483),
      Cq = wQ(36481),
      Sq = wQ(1038),
      iq = wQ(2283);

    function Wq(QQ) {
      let {
        peers: FQ
      } = QQ;
      const [wQ, LQ] = (0, qQ.useState)(null), oQ = (0, RQ.k)("players");
      return (0, uQ.jsx)("div", {
        className: "CodeEditorPresence",
        children: FQ.map((QQ => {
          var FQ, qQ;
          const DQ = null !== (FQ = null === (qQ = oQ.byId[QQ.playerId]) || void 0 === qQ ? void 0 : qQ.cosmetics) && void 0 !== FQ ? FQ : {};
          return (0, uQ.jsxs)("div", {
            className: Gw()("PresenceIcon", {
              Viewer: !QQ.isEditor
            }),
            style: {
              backgroundColor: QQ.colour
            },
            onMouseEnter: () => {
              LQ(QQ.playerId)
            },
            onMouseLeave: () => {
              LQ(null)
            },
            children: [(0, uQ.jsx)(iq.c, {
              cosmetics: DQ
            }), wQ === QQ.playerId && (0, uQ.jsx)("div", {
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
    var Rq = wQ(647),
      Oq = wQ(36472),
      sq = wQ(36180),
      rq = wQ(36486);

    function Iq(QQ) {
      const FQ = QQ.split("/"),
        wQ = [];
      for (let LQ = 1; LQ < FQ.length; LQ++) wQ.push(FQ.slice(0, LQ).join("/"));
      return wQ
    }

    function Uq(QQ) {
      return QQ.slice(QQ.lastIndexOf("/") + 1)
    }
    const Nq = (0, qQ.memo)((function(QQ) {
      var FQ;
      let {
        files: wQ,
        activePath: LQ,
        canEdit: oQ,
        directoryLinked: DQ,
        pluginNames: kQ,
        activePluginName: vQ,
        activePluginFile: mQ,
        onSelect: HQ,
        onSelectPlugin: bQ,
        onCreate: xQ,
        onRename: AQ,
        onRenameFolder: eQ,
        onDelete: MQ,
        onToggleDirectorySync: GQ,
        schematics: pQ,
        onManageSchematic: cQ
      } = QQ;
      const {
        t: CQ
      } = (0, PQ.y)(), SQ = null !== (FQ = (0, Cq.b)(wQ)) && void 0 !== FQ ? FQ : pq.i, iQ = Object.keys(wQ), [WQ, RQ] = (0, qQ.useState)((() => new Set)), OQ = function(QQ, FQ, wQ) {
        const LQ = {
          folders: new Map,
          files: []
        };
        for (const DQ of QQ) {
          if (DQ === FQ) continue;
          let QQ = LQ;
          for (const FQ of Iq(DQ)) {
            let wQ = QQ.folders.get(FQ);
            wQ || (wQ = {
              folders: new Map,
              files: []
            }, QQ.folders.set(FQ, wQ)), QQ = wQ
          }
          QQ.files.push(DQ)
        }
        const qQ = [];
        QQ.includes(FQ) && qQ.push({
          kind: "file",
          path: FQ,
          name: Uq(FQ),
          depth: 0
        });
        const oQ = (QQ, FQ) => {
          const LQ = [...QQ.folders.entries()].sort(((QQ, FQ) => {
            let [wQ] = QQ, [LQ] = FQ;
            return wQ.localeCompare(LQ)
          }));
          for (const [DQ, kQ] of LQ) {
            const QQ = wQ.has(DQ);
            qQ.push({
              kind: "folder",
              path: DQ,
              name: Uq(DQ),
              depth: FQ,
              collapsed: QQ
            }), QQ || oQ(kQ, FQ + 1)
          }
          QQ.files.sort(((QQ, FQ) => QQ.localeCompare(FQ)));
          for (const wQ of QQ.files) qQ.push({
            kind: "file",
            path: wQ,
            name: Uq(wQ),
            depth: FQ
          })
        };
        return oQ(LQ, 0), qQ
      }(iQ, SQ, WQ);
      (0, qQ.useEffect)((() => {
        RQ((QQ => {
          const FQ = new Set(QQ);
          let wQ = !1;
          for (const qQ of Iq(LQ)) wQ = FQ.delete(qQ) || wQ;
          return wQ ? FQ : QQ
        }))
      }), [LQ]);
      const sQ = iQ.length >= fF.z,
        rQ = (QQ, FQ) => {
          if (QQ.length > cq.t) return `Path must be at most ${cq.t} characters`;
          if (!(0, cq.p)(QQ)) return "Use a relative .js, .ts, or .d.ts path, e.g. lib/util.js";
          if ("index.d.ts" === QQ) return "index.d.ts cannot be the world-code entry";
          const LQ = !!FQ && (0, Cq.c)(FQ, QQ);
          if (FQ && (0, Cq.f)(FQ) && !LQ) return `Cannot rename ${FQ} (only swapping ${pq.i} and ${pq.m} is allowed)`;
          if (QQ in wQ) return "A file with that path already exists";
          if ((0, Cq.f)(QQ) && !LQ) {
            if ((QQ === pq.i ? pq.m : pq.i) in wQ) return `World code cannot have both ${pq.i} and ${pq.m}`
          }
          return null
        },
        IQ = QQ => {
          yL.NotificationProvider.showInputPopup({
            title: "codeEditor:newFile",
            subtitle: "codeEditor:newFilePathHint",
            placeholderText: "lib/util.js",
            initialValue: void 0 === QQ ? void 0 : `${QQ}/`,
            submitText: "general:create",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: QQ => rQ(QQ)
          }).getResult().then((QQ => {
            "notificationTornDown" !== QQ && null !== QQ && "submit" === QQ.type && xQ(QQ.value)
          }))
        },
        UQ = QQ => {
          yL.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFile",
            subtitle: "codeEditor:newFilePathHint",
            initialValue: QQ,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: FQ => FQ === QQ ? "That is already the file's path" : rQ(FQ, QQ)
          }).getResult().then((FQ => {
            "notificationTornDown" !== FQ && null !== FQ && "submit" === FQ.type && AQ(QQ, FQ.value)
          }))
        },
        NQ = QQ => {
          const FQ = QQ => QQ.replace(/\/+$/, "");
          yL.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFolder",
            subtitle: "codeEditor:renameFolderHint",
            initialValue: QQ,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: wQ => {
              const LQ = FQ(wQ);
              if (LQ === QQ) return "That is already the folder's path";
              for (const [FQ, qQ] of(0, Cq.l)(iQ, QQ, LQ)) {
                const QQ = rQ(qQ, FQ);
                if (null !== QQ) return QQ
              }
              return null
            }
          }).getResult().then((wQ => {
            "notificationTornDown" !== wQ && null !== wQ && "submit" === wQ.type && eQ(QQ, FQ(wQ.value))
          }))
        },
        TQ = QQ => {
          yL.NotificationProvider.showPromptPopup({
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
          }).getResult().then((FQ => {
            !0 === FQ && MQ(QQ)
          }))
        };
      return (0, uQ.jsxs)("div", {
        className: "CodeEditorFileTree",
        children: [(0, uQ.jsxs)("div", {
          className: "FileTreeHeader",
          children: [(0, uQ.jsx)("span", {
            children: "Files"
          }), oQ && !sQ && (0, uQ.jsx)(YQ.s, {
            className: "FileTreeHeaderButton",
            onClick: () => {
              IQ()
            },
            children: (0, uQ.jsx)(tQ.c, {
              name: "plus"
            })
          })]
        }), (0, uQ.jsxs)("div", {
          className: "FileTreeList",
          children: [OQ.map((QQ => {
            const FQ = QQ.path;
            if ("folder" === QQ.kind) return (0, uQ.jsx)(zq, {
              path: FQ,
              name: QQ.name,
              depth: QQ.depth,
              collapsed: QQ.collapsed,
              onToggle: () => {
                var QQ;
                QQ = FQ, RQ((FQ => {
                  const wQ = new Set(FQ);
                  return wQ.delete(QQ) || wQ.add(QQ), wQ
                }))
              },
              canCreate: oQ && !sQ,
              canRename: oQ,
              onCreate: IQ,
              onRename: NQ
            }, `folder:${FQ}`);
            const qQ = (0, Cq.f)(FQ),
              DQ = pq.i in wQ && pq.m in wQ,
              kQ = !qQ || DQ,
              mQ = null === vQ && FQ === LQ;
            return (0, uQ.jsx)(jq, {
              path: FQ,
              label: QQ.name,
              depth: QQ.depth,
              isActive: mQ,
              canRename: oQ,
              onSelect: HQ,
              onRename: UQ,
              onDelete: TQ,
              canDelete: kQ && oQ
            }, FQ)
          })), (0, uQ.jsxs)("div", {
            className: "FileTreeHeader Secondary",
            children: [(0, uQ.jsxs)("span", {
              children: ["Schematics (", Object.keys(pQ).length, "/", rq.d, ")"]
            }), oQ && (0, uQ.jsx)(YQ.s, {
              className: "FileTreeHeaderButton",
              disabled: Object.keys(pQ).length >= rq.d,
              onClick: () => {
                cQ("")
              },
              children: (0, uQ.jsx)(tQ.c, {
                name: "plus"
              })
            })]
          }), Object.keys(pQ).sort().map((QQ => (0, uQ.jsx)(jq, {
            path: QQ,
            isActive: !1,
            canRename: !1,
            canDelete: !1,
            onSelect: cQ
          }, QQ))), kQ.length > 0 && (0, uQ.jsxs)(uQ.Fragment, {
            children: [(0, uQ.jsx)("div", {
              className: "FileTreeHeader Secondary",
              children: (0, uQ.jsx)("span", {
                children: "Plugins"
              })
            }), kQ.map((QQ => {
              var FQ;
              const wQ = Oq.e[QQ],
                LQ = Object.keys(null !== (FQ = null === wQ || void 0 === wQ ? void 0 : wQ.files) && void 0 !== FQ ? FQ : {
                  "index.ts": ""
                }).sort(((QQ, FQ) => "index.ts" === QQ ? -1 : "index.ts" === FQ ? 1 : QQ.localeCompare(FQ)));
              return (0, uQ.jsxs)("div", {
                children: [(0, uQ.jsx)("div", {
                  className: "FileTreePluginName",
                  children: (0, Cq.t)(QQ)
                }), LQ.map((FQ => (0, uQ.jsx)(jq, {
                  path: FQ,
                  nested: !0,
                  isActive: vQ === QQ && mQ === FQ,
                  canRename: !1,
                  onSelect: () => {
                    bQ(QQ, FQ)
                  },
                  canDelete: !1
                }, FQ)))]
              }, QQ)
            }))]
          })]
        }), (0, uQ.jsx)("div", {
          className: "FileTreeFooter",
          children: (0, uQ.jsx)(YQ.f, {
            className: "FileTreeFooterButton",
            onClick: GQ,
            children: CQ(DQ ? "codeEditor:directorySyncUnlink" : "codeEditor:directorySyncLink")
          })
        })]
      })
    }));

    function Tq(QQ) {
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

    function Kq(QQ) {
      let {
        depth: FQ
      } = QQ;
      return (0, uQ.jsx)(uQ.Fragment, {
        children: Array.from({
          length: FQ
        }, ((QQ, FQ) => (0, uQ.jsx)("span", {
          className: "FileTreeIndentGuide",
          style: {
            "--guide-level": FQ
          }
        }, FQ)))
      })
    }

    function zq(QQ) {
      let {
        path: FQ,
        name: wQ,
        depth: LQ,
        collapsed: qQ,
        onToggle: oQ,
        canCreate: DQ,
        canRename: kQ,
        onCreate: vQ,
        onRename: mQ
      } = QQ;
      const HQ = [];
      DQ && HQ.push({
        icon: "plus",
        text: "codeEditor:newFile",
        onPointerDown: () => {
          vQ(FQ)
        }
      }), kQ && HQ.push({
        icon: "pen",
        text: "codeEditor:renameFolder",
        onPointerDown: () => {
          mQ(FQ)
        }
      });
      const bQ = Tq(LQ);
      return (0, uQ.jsxs)("div", {
        className: Gw()("FileTreeItem FileTreeFolder", bQ.className),
        style: bQ.style,
        children: [(0, uQ.jsx)(Kq, {
          depth: LQ
        }), (0, uQ.jsxs)("button", {
          type: "button",
          className: "FileTreeItemName",
          "aria-expanded": !qQ,
          onClick: oQ,
          children: [(0, uQ.jsx)(tQ.c, {
            className: "FileTreeFolderCaret",
            name: qQ ? "caret-right" : "caret-down"
          }), (0, uQ.jsx)(tQ.c, {
            className: "FileTreeFolderIcon",
            name: qQ ? "folder" : "folder-open"
          }), wQ]
        }), (0, uQ.jsx)(lq, {
          path: FQ,
          actions: HQ
        })]
      })
    }

    function lq(QQ) {
      let {
        path: FQ,
        actions: wQ
      } = QQ;
      const LQ = (0, qQ.useRef)(null);
      return 0 === wQ.length ? null : (0, uQ.jsxs)("div", {
        ref: LQ,
        className: "FileTreeItemActions",
        children: [(0, uQ.jsx)("button", {
          type: "button",
          className: "FileTreeActionMenuButton",
          "aria-label": `Actions for ${FQ}`,
          children: (0, uQ.jsx)(tQ.c, {
            name: "ellipsis"
          })
        }), (0, uQ.jsx)(sq.b, {
          triggerElementRef: LQ,
          options: wQ
        })]
      })
    }

    function jq(QQ) {
      let {
        path: FQ,
        label: wQ = FQ,
        depth: LQ = 0,
        isActive: qQ,
        canRename: oQ,
        onSelect: DQ,
        onRename: kQ,
        onDelete: vQ,
        canDelete: mQ,
        nested: HQ
      } = QQ;
      const bQ = [];
      oQ && kQ && bQ.push({
        icon: "pen",
        text: "codeEditor:rename",
        onPointerDown: () => {
          kQ(FQ)
        }
      }), mQ && vQ && bQ.push({
        icon: "xmark",
        text: "general:delete",
        onPointerDown: () => {
          vQ(FQ)
        }
      });
      const YQ = Tq(LQ);
      return (0, uQ.jsxs)("div", {
        className: Gw()("FileTreeItem", YQ.className, {
          Active: qQ,
          Nested: HQ
        }),
        style: YQ.style,
        children: [(0, uQ.jsx)(Kq, {
          depth: LQ
        }), (0, uQ.jsx)("button", {
          type: "button",
          className: "FileTreeItemName",
          title: wQ === FQ ? void 0 : FQ,
          onClick: () => {
            DQ(FQ)
          },
          children: wQ
        }), (0, uQ.jsx)(lq, {
          path: FQ,
          actions: bQ
        })]
      })
    }
    async function aq(QQ) {
      const FQ = (0, Cq.b)(QQ);
      if (!FQ || "" === QQ[FQ].trim()) return [];
      const {
        collectImportedWorldCodePluginNames: LQ
      } = await Promise.all([wQ.e(290), wQ.e(291)]).then((() => wQ(40876)));
      return (0, Oq.c)(LQ(QQ))
    }
    var Xq = wQ(36491);

    function fq(QQ, FQ) {
      const wQ = Object.keys(QQ),
        LQ = Object.keys(FQ);
      if (wQ.length !== LQ.length) return !1;
      for (const qQ of wQ)
        if (!(qQ in FQ) || QQ[qQ] !== FQ[qQ]) return !1;
      return !0
    }

    function Vq(QQ, FQ) {
      const wQ = [],
        LQ = [],
        qQ = [];
      for (const oQ of Object.keys(FQ)) oQ in QQ ? QQ[oQ] !== FQ[oQ] && qQ.push(oQ) : wQ.push(oQ);
      for (const oQ of Object.keys(QQ)) oQ in FQ || LQ.push(oQ);
      return wQ.sort(), LQ.sort(), qQ.sort(), {
        creates: wQ,
        deletes: LQ,
        updates: qQ
      }
    }

    function hq(QQ, FQ) {
      var wQ;
      const LQ = {
          ...QQ
        },
        qQ = (0, Cq.b)(FQ),
        oQ = (0, Cq.b)(LQ);
      if (pq.i in LQ && pq.m in LQ) {
        const QQ = null !== qQ && void 0 !== qQ ? qQ : pq.m,
          wQ = QQ === pq.i ? pq.m : pq.i;
        var DQ;
        if (!(QQ in LQ)) LQ[QQ] = null !== (DQ = FQ[QQ]) && void 0 !== DQ ? DQ : "";
        return delete LQ[wQ], LQ
      }
      var kQ;
      return qQ && !(qQ in LQ) ? (oQ || (LQ[qQ] = null !== (kQ = FQ[qQ]) && void 0 !== kQ ? kQ : ""), LQ) : (oQ || qQ || (LQ[pq.i] = null !== (wQ = LQ[pq.i]) && void 0 !== wQ ? wQ : "", delete LQ[pq.m]), LQ)
    }

    function Jq(QQ, FQ) {
      const wQ = (0, Cq.b)(FQ),
        LQ = pq.i in FQ && pq.m in FQ;
      return QQ.filter((QQ => !(0, Cq.f)(QQ) || (!!LQ || wQ !== QQ)))
    }
    async function Eq(QQ, FQ, LQ) {
      const qQ = QQ.getLobbyFiles(),
        oQ = (0, fF.l)(LQ, (0, Cq.m)(qQ, FQ)),
        DQ = await QQ.ensureJoined(FQ),
        kQ = (0, cq.w)(DQ.docKey);
      if (DQ.doc === oQ) return;
      for (let wQ = 0; wQ < 100; wQ++) {
        const wQ = QQ.getCollabSnapshot();
        if (wQ && (0, cq.w)(wQ.docKey) === kQ && QQ.getActivePath() === FQ) {
          if (QQ.replaceActiveDoc(kQ, oQ)) return;
          await (0, GL.J)(40)
        } else await (0, GL.J)(40)
      }
      const {
        ChangeSet: vQ
      } = await wQ.e(286).then((() => wQ(40695))), uQ = QQ.getCollabSnapshot(), HQ = uQ && (0, cq.w)(uQ.docKey) === kQ ? uQ : DQ;
      await async function(QQ, FQ, wQ, LQ) {
        const qQ = QQ.of({
            from: 0,
            to: wQ.length,
            insert: LQ
          }, wQ.length),
          oQ = JSON.stringify([{
            clientID: FQ.clientID,
            changes: qQ.toJSON()
          }]),
          DQ = (0, cq.w)(FQ.docKey);
        oQ.length <= cq.k ? mQ.gameBridge.send("sendCodeCollab", {
          RF: cq.d.Push,
          OF: DQ,
          sF: FQ.version,
          UF: oQ
        }) : await (0, Gq.postJsonWithMetricsCookiesAndJsonResponse)(`${FQ.httpConfig.gsUrl}/code/collab-push`, Mq.m["collab-push"].toBuffer({
          gameNameWithVariation: FQ.httpConfig.gameNameWithVariation,
          lobbyName: FQ.httpConfig.lobbyName,
          docKey: DQ,
          version: FQ.version,
          updates: oQ
        }), {
          retries: 0
        })
      }(vQ, HQ, HQ.doc, oQ)
    }
    class nq {
      constructor(QQ) {
        this.handle = null, this.lastSynced = {}, this.lastLobbySeen = null, this.pendingDocText = new Map, this.flushingDocText = !1, this.recheckingDisk = !1, this.stopWatch = null, this.lobbyPollTimer = null, this.running = !1, this.applying = !1, this.reconcileSettled = !1, this.reconcileInFlight = !1, this.linked = !1, this.scaffoldedPluginNamesKey = null, this.scaffoldingLocalTypes = Promise.resolve(), this.bridge = void 0, this.bridge = QQ
      }
      async writeLobbyFiles(QQ) {
        const FQ = {
            ...this.bridge.getLobbyFiles()
          },
          wQ = {
            ...FQ
          };
        for (const {
            path: oQ,
            text: DQ
          }
          of QQ) wQ[oQ] = DQ;
        if (!QQ.every((QQ => {
            let {
              path: FQ,
              text: LQ
            } = QQ;
            return (0, fF.l)(LQ, (0, Cq.m)(wQ, FQ)) === LQ
          }))) return !1;
        const LQ = [];
        try {
          for (const {
              path: FQ,
              text: wQ
            }
            of QQ) LQ.push(FQ), FQ in this.bridge.getLobbyFiles() || (this.bridge.createFile(FQ, {
            focus: !1
          }), await this.bridge.waitForLobbyPath(FQ, !0)), await Eq(this.bridge, FQ, wQ)
        } catch (qQ) {
          for (const QQ of LQ) QQ in FQ ? await Eq(this.bridge, QQ, FQ[QQ]).catch((FQ => {
            console.error("World Code AI: couldn't put back", QQ, FQ)
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
        const QQ = await (0, Xq.u)(this.bridge.getStorageKey());
        return !!QQ && (this.handle = QQ, this.linked = !0, this.reconcileSettled = !1, await this.scaffoldLocalTypes(QQ), !0)
      }
      async unlinkFolder() {
        const QQ = this.bridge.getStorageKey();
        this.pendingDocText.clear(), this.stopContinuousSync(), this.handle = null, this.linked = !1, this.reconcileSettled = !1, this.lastSynced = {}, this.lastLobbySeen = null, this.scaffoldedPluginNamesKey = null, await (0, Xq.c)(QQ), this.bridge.onUnlinked()
      }
      async tryRestoreHandle() {
        const QQ = this.bridge.getStorageKey(),
          FQ = await (0, Xq.q)(QQ);
        return !!FQ && (!!await (0, Xq.h)(FQ, "readwrite") && (this.handle = FQ, this.linked = !0, await (0, Xq.C)(QQ, FQ), await this.scaffoldLocalTypes(FQ), !0))
      }
      scaffoldLocalTypes(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bridge.getLobbyFiles();
        return this.scaffoldingLocalTypes = this.scaffoldingLocalTypes.then((async () => {
          try {
            const LQ = (await aq(FQ)).map((QQ => Oq.e[QQ])),
              qQ = LQ.map((QQ => {
                var FQ;
                return `${QQ.name}:${Object.keys(null!==(FQ=null===QQ||void 0===QQ?void 0:QQ.files)&&void 0!==FQ?FQ:{}).sort().join(",")}`
              })).join("\0");
            if (this.scaffoldedPluginNamesKey === qQ) return;
            const {
              ensureLocalBloxdTypes: oQ
            } = await Promise.all([wQ.e(82), wQ.e(288), wQ.e(293)]).then((() => wQ(40881)));
            await oQ(QQ, LQ), this.scaffoldedPluginNamesKey = qQ
          } catch (LQ) {
            console.error("[WorldCodeDirectorySync] Failed to scaffold local @bloxd types", LQ)
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
      async onDocTextChanged(QQ, FQ) {
        if (!this.handle) return;
        const wQ = [this.scaffoldLocalTypes(this.handle, {
          ...this.bridge.getLobbyFiles(),
          [QQ]: FQ
        })];
        this.running && (this.pendingDocText.set(QQ, FQ), wQ.push(this.flushDocTextToDisk())), await Promise.all(wQ)
      }
      async flushDocTextToDisk() {
        if (this.flushingDocText || this.applying || !this.handle || 0 === this.pendingDocText.size) return;
        const QQ = this.handle;
        this.flushingDocText = !0, this.applying = !0;
        try {
          for (; this.pendingDocText.size > 0;) {
            const FQ = [...this.pendingDocText];
            this.pendingDocText.clear();
            for (const [wQ, LQ] of FQ) this.lastSynced[wQ] !== LQ && (await (0, Xq.I)(QQ, wQ, LQ), this.lastSynced = {
              ...this.lastSynced,
              [wQ]: LQ
            })
          }
        } catch (FQ) {
          console.error("[WorldCodeDirectorySync] Failed to write remote doc to disk", FQ), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
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
            await this.onDiskFilesChanged(await (0, Xq.v)(this.handle))
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
            if (!await (0, Xq.h)(this.handle, "readwrite")) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncPermissionDenied"), "warning"), void(this.reconcileSettled = !0);
            await this.bridge.pullLobbyFiles();
            const FQ = this.bridge.getLobbyFiles(),
              wQ = await (0, Xq.v)(this.handle);
            for (const QQ of Object.keys(FQ).filter(rq.b)) {
              if (wQ[QQ] === Xq.n) return void this.bridge.setMessage(`Move ${QQ} outside the linked folder before syncing its placeholder.`, "warning");
              wQ[QQ] = rq.k
            }
            if (fq(wQ, FQ)) {
              for (const QQ of Object.keys(FQ).filter(rq.b)) await (0, Xq.I)(this.handle, QQ, rq.k);
              return this.lastSynced = {
                ...wQ
              }, void this.beginWatch()
            }
            const LQ = await this.promptReconcile(function(QQ) {
              return null !== (0, Cq.b)(QQ)
            }(wQ));
            if ("unlink" === LQ) return void await this.unlinkFolder();
            if ("dismissed" === LQ) return void(this.reconcileSettled = !0);
            this.applying = !0;
            try {
              if ("local" === LQ) {
                if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), void(this.reconcileSettled = !0);
                await this.applyLocalTreeToLobby(wQ);
                for (const QQ of Object.keys(FQ).filter(rq.b)) await (0, Xq.I)(this.handle, QQ, rq.k);
                this.lastSynced = {
                  ...await (0, Xq.v)(this.handle)
                }
              } else await (0, Xq.M)(this.handle, FQ), this.lastSynced = {
                ...FQ
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
        return await new Promise((FQ => {
          const wQ = [{
              choice: "local",
              Button: YQ.f,
              labelKey: "directorySyncUseLocal",
              descriptionKey: "directorySyncUseLocalDescription"
            }, {
              choice: "live",
              Button: YQ.f,
              labelKey: "directorySyncUseLive",
              descriptionKey: "directorySyncUseLiveDescription"
            }, {
              choice: "unlink",
              Button: YQ.f,
              labelKey: "directorySyncUseUnlink",
              descriptionKey: "directorySyncUseUnlinkDescription"
            }],
            LQ = (0, uQ.jsxs)("div", {
              className: "CodeEditorDirectorySyncPrompt",
              children: [(0, uQ.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptTitle",
                children: this.bridge.t("codeEditor:directorySyncDifferTitle")
              }), (0, uQ.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptBody",
                children: QQ ? this.bridge.t("codeEditor:directorySyncDifferBody") : this.bridge.t("codeEditor:directorySyncLocalInvalidEntry")
              }), (0, uQ.jsx)("div", {
                className: "CodeEditorDirectorySyncOptions",
                children: wQ.filter((FQ => "local" !== FQ.choice || QQ)).map((QQ => {
                  let {
                    choice: wQ,
                    Button: LQ,
                    labelKey: oQ,
                    descriptionKey: DQ
                  } = QQ;
                  return (0, uQ.jsxs)("div", {
                    className: "CodeEditorDirectorySyncOption",
                    children: [(0, uQ.jsx)(LQ, {
                      className: "CodeEditorButton",
                      onClick: () => {
                        (QQ => {
                          qQ.tearDownNotification(), FQ(QQ)
                        })(wQ)
                      },
                      children: this.bridge.t(`codeEditor:${oQ}`)
                    }), (0, uQ.jsx)("div", {
                      className: "CodeEditorDirectorySyncOptionDescription",
                      children: this.bridge.t(`codeEditor:${DQ}`)
                    })]
                  }, wQ)
                }))
              })]
            }),
            qQ = yL.NotificationProvider.showCustomPopup({
              body: LQ,
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "worldCodeDirectorySync"
            });
          qQ.getResult().then((QQ => {
            "notificationTornDown" === QQ && FQ("dismissed")
          }))
        }))
      }
      beginWatch() {
        this.handle && (this.stopContinuousSync(), this.reconcileSettled = !0, this.running = !0, this.stopWatch = (0, Xq.F)(this.handle, (QQ => {
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
        const FQ = this.bridge.getLobbyFiles();
        let wQ = hq(QQ, this.lastSynced);
        for (const oQ in FQ)
          if ((0, rq.b)(oQ) && wQ[oQ] === Xq.n) return void this.bridge.setMessage("Move binary schematic files outside the linked folder. Add them through the Code Editor.", "warning");
        const LQ = Object.keys(wQ).filter((QQ => (0, rq.b)(QQ) && !(QQ in FQ)));
        LQ.length > 0 && this.bridge.setMessage("Add or rename schematics in the Code Editor. Unknown local schematic files are not uploaded.", "warning");
        for (const oQ of Object.keys(FQ).filter(rq.b))(oQ in wQ || LQ.length > 0 || !(oQ in this.lastSynced)) && (wQ[oQ] = rq.k);
        if (!fq(wQ, QQ)) {
          this.applying = !0;
          try {
            await this.persistEntryRepair(QQ, wQ), wQ = hq(await (0, Xq.v)(this.handle), this.lastSynced)
          } finally {
            this.applying = !1
          }
        }
        if (!fq(wQ, this.lastSynced)) {
          this.applying = !0;
          try {
            const QQ = Vq(this.lastSynced, wQ);
            if (await this.pushDiskDeltaToLobby(wQ, FQ), null !== this.lastLobbySeen)
              for (const wQ of [...QQ.creates, ...QQ.updates, ...QQ.deletes])(0, rq.b)(wQ) || (wQ in FQ ? this.lastLobbySeen[wQ] = FQ[wQ] : delete this.lastLobbySeen[wQ]);
            this.lastSynced = {
              ...wQ
            }
          } catch (qQ) {
            console.error("[WorldCodeDirectorySync] Disk\u2192lobby sync failed", qQ), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async persistEntryRepair(QQ, FQ) {
        if (this.handle) {
          for (const wQ of Object.keys(QQ)) wQ in FQ || await (0, Xq.w)(this.handle, wQ);
          for (const [wQ, LQ] of Object.entries(FQ)) QQ[wQ] !== LQ && await (0, Xq.I)(this.handle, wQ, LQ)
        }
      }
      async applyRemoteTreeToDisk(QQ) {
        if (!this.handle) return;
        const FQ = this.lastLobbySeen;
        if (null === FQ) return void(this.lastLobbySeen = {
          ...QQ
        });
        const wQ = Object.keys(QQ).filter((wQ => FQ[wQ] !== QQ[wQ])),
          LQ = Object.keys(FQ).filter((FQ => !(FQ in QQ)));
        if (0 !== wQ.length || 0 !== LQ.length) {
          this.applying = !0;
          try {
            for (const FQ of [...LQ, ...wQ]) try {
              if (FQ in QQ) await (0, Xq.I)(this.handle, FQ, QQ[FQ]), this.lastSynced = {
                ...this.lastSynced,
                [FQ]: QQ[FQ]
              }, this.lastLobbySeen = {
                ...this.lastLobbySeen,
                [FQ]: QQ[FQ]
              };
              else {
                await (0, Xq.w)(this.handle, FQ);
                const QQ = {
                  ...this.lastSynced
                };
                delete QQ[FQ], this.lastSynced = QQ;
                const wQ = {
                  ...this.lastLobbySeen
                };
                delete wQ[FQ], this.lastLobbySeen = wQ
              }
            } catch (qQ) {
              console.error("[WorldCodeDirectorySync] Lobby\u2192disk sync failed", qQ), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
            }
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async renameLobbyEntryIfSwitched(QQ, FQ) {
        const wQ = function(QQ, FQ) {
          const wQ = (0, Cq.b)(QQ),
            LQ = (0, Cq.b)(FQ);
          return wQ && LQ && wQ !== LQ ? {
            from: wQ,
            to: LQ
          } : null
        }(QQ, FQ);
        return !!wQ && (this.bridge.renameFile(wQ.from, wQ.to), await this.bridge.waitForLobbyPath(wQ.to, !0), !0)
      }
      async applyLocalTreeToLobby(QQ) {
        var FQ;
        const wQ = this.bridge.getActivePath();
        await this.renameLobbyEntryIfSwitched(this.bridge.getLobbyFiles(), QQ);
        const LQ = this.bridge.getLobbyFiles(),
          qQ = Vq(LQ, QQ),
          oQ = Jq(qQ.deletes, LQ);
        for (const mQ of qQ.creates)(0, rq.b)(mQ) || (this.bridge.createFile(mQ, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(mQ, !0));
        for (const mQ of oQ)(0, rq.b)(mQ) || (this.bridge.deleteFile(mQ), await this.bridge.waitForLobbyPath(mQ, !1));
        if (!(0, Cq.b)(this.bridge.getLobbyFiles()) && !(0, Cq.b)(QQ)) {
          if (this.bridge.createFile(pq.i, {
              focus: !1
            }), await this.bridge.waitForLobbyPath(pq.i, !0), !this.handle) return;
          await (0, Xq.I)(this.handle, pq.i, ""), QQ = {
            ...QQ,
            [pq.i]: ""
          }
        }
        const DQ = this.bridge.getLobbyFiles();
        for (const mQ of Object.keys(QQ))(0, rq.b)(mQ) || DQ[mQ] !== QQ[mQ] && await Eq(this.bridge, mQ, QQ[mQ]);
        const kQ = this.bridge.getLobbyFiles(),
          vQ = wQ in kQ ? wQ : null !== (FQ = (0, Cq.b)(kQ)) && void 0 !== FQ ? FQ : pq.i;
        await this.bridge.ensureJoined(vQ)
      }
      async pushDiskDeltaToLobby(QQ, FQ) {
        const wQ = this.bridge.getActivePath(),
          LQ = await this.renameLobbyEntryIfSwitched(FQ, QQ) ? this.bridge.getLobbyFiles() : FQ,
          qQ = Vq(this.lastSynced, QQ),
          oQ = Jq(qQ.deletes, LQ).filter((QQ => QQ in LQ));
        for (const DQ of qQ.creates)(0, rq.b)(DQ) || (DQ in this.bridge.getLobbyFiles() || (this.bridge.createFile(DQ, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(DQ, !0)), await Eq(this.bridge, DQ, QQ[DQ]));
        for (const DQ of oQ)(0, rq.b)(DQ) ? await this.bridge.deleteSchematic(DQ) : (this.bridge.deleteFile(DQ), await this.bridge.waitForLobbyPath(DQ, !1));
        for (const DQ of qQ.updates)(0, rq.b)(DQ) || await Eq(this.bridge, DQ, QQ[DQ]);
        wQ in this.bridge.getLobbyFiles() && this.bridge.getActivePath() !== wQ && await this.bridge.ensureJoined(wQ)
      }
    }
    var gq = wQ(1213);

    function Pq() {
      const {
        websocketUrl: QQ,
        gameNameWithVariation: FQ,
        lobbyName: wQ
      } = mQ.gameBridge.latest("connectedGame");
      return {
        gsUrl: gq.clientSideServerUrls.getHttpUrlFromWebSocketUrl(QQ),
        gameNameWithVariation: FQ,
        lobbyName: wQ
      }
    }
    async function Zq(QQ) {
      const {
        gsUrl: FQ,
        gameNameWithVariation: wQ,
        lobbyName: LQ
      } = Pq();
      return await (0, Gq.postBinaryWithMetricsCookiesAndCustomResponse)(`${FQ}/code/schematics`, Mq.Tj.schematics.toBuffer({
        gameNameWithVariation: wQ,
        lobbyName: LQ,
        request: JSON.stringify(QQ)
      }), {
        retries: 0
      }, Gq.HttpPayloadType.json)
    }
    var yq = wQ(36002);

    function Bq(QQ) {
      let {
        path: FQ,
        revision: wQ
      } = QQ;
      const [LQ, oQ] = (0, qQ.useState)(""), [DQ, kQ] = (0, qQ.useState)(!1), [vQ, mQ] = (0, qQ.useState)(0);
      return (0, qQ.useEffect)((() => {
        let QQ = !1;
        return oQ(""), kQ(!1), Zq({
          action: "preview",
          path: FQ
        }).then((FQ => {
          QQ || oQ(`data:image/webp;base64,${FQ.previewBase64}`)
        })).catch((FQ => {
          console.error("Could not load schematic preview", FQ), QQ || kQ(!0)
        })), () => {
          QQ = !0
        }
      }), [FQ, wQ, vQ]), (0, uQ.jsxs)("div", {
        className: "SchematicPreview",
        children: [LQ && (0, uQ.jsx)("img", {
          src: LQ,
          alt: `Preview of ${FQ}`
        }), !LQ && !DQ && (0, uQ.jsx)(OQ.c, {
          loaderType: "Secondary"
        }), DQ && (0, uQ.jsxs)(uQ.Fragment, {
          children: [(0, uQ.jsx)("div", {
            className: "SmallTextLight",
            role: "status",
            children: "Preview unavailable."
          }), (0, uQ.jsx)(YQ.f, {
            onClick: () => {
              mQ(vQ + 1)
            },
            children: "Retry preview"
          })]
        })]
      })
    }

    function dq(QQ) {
      var FQ;
      let {
        initialPath: wQ,
        onChanged: LQ,
        onClose: oQ
      } = QQ;
      const DQ = "" === wQ,
        [kQ, vQ] = (0, qQ.useState)(null),
        [mQ, HQ] = (0, qQ.useState)(wQ),
        [bQ, xQ] = (0, qQ.useState)(!1),
        [AQ, tQ] = (0, qQ.useState)(!1),
        [eQ, MQ] = (0, qQ.useState)(null),
        [GQ, pQ] = (0, qQ.useState)(!1),
        [cQ, CQ] = (0, qQ.useState)(""),
        SQ = (0, qQ.useRef)(null),
        iQ = (0, qQ.useRef)(!1),
        WQ = (0, qQ.useRef)(!0);
      (0, qQ.useEffect)((() => (WQ.current = !0, Zq({
        action: "state"
      }).then((QQ => {
        WQ.current && vQ(QQ)
      })).catch((QQ => {
        console.error("Could not load schematic assets", QQ), WQ.current && CQ("Could not load schematics. Reopen this panel to retry.")
      })), () => {
        WQ.current = !1
      })), []);
      const RQ = null === kQ || void 0 === kQ ? void 0 : kQ.assets[wQ],
        OQ = Object.keys(null !== (FQ = null === kQ || void 0 === kQ ? void 0 : kQ.assets) && void 0 !== FQ ? FQ : {}).length,
        sQ = mQ.trim(),
        rQ = sQ ? (0, rq.b)(sQ) ? null !== kQ && void 0 !== kQ && kQ.assets[sQ] && (DQ || sQ !== wQ) ? "A schematic already uses that path." : "" : "Use a relative path ending in .bloxdschem." : "",
        IQ = !!sQ && !rQ && (DQ ? OQ < rq.d : sQ !== wQ),
        UQ = GQ || !kQ;
      async function NQ(QQ) {
        if (!iQ.current && WQ.current) {
          iQ.current = !0, pQ(!0), CQ("");
          try {
            const FQ = await Zq({
              ...QQ,
              expectedRevision: kQ.revision
            });
            LQ(FQ), WQ.current && oQ()
          } catch (wQ) {
            var FQ;
            if (console.error("Schematic asset operation failed", wQ), WQ.current) CQ(wQ instanceof JQ.d ? null !== (FQ = wQ.errorMessageForUser) && void 0 !== FQ ? FQ : wQ.message : String(wQ));
            try {
              const QQ = await Zq({
                action: "state"
              });
              LQ(QQ), WQ.current && vQ(QQ)
            } catch (qQ) {
              console.error("Could not refresh schematic assets", qQ)
            }
          } finally {
            iQ.current = !1, WQ.current && pQ(!1)
          }
        }
      }
      return (0, uQ.jsxs)("div", {
        className: "WorldCodeSchematicPanel InputGenericPopup PromptGenericPopup FileTreePathPopup",
        children: [(0, uQ.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: DQ ? "New schematic" : bQ ? "Rename schematic" : "Schematic"
        }), cQ && (0, uQ.jsx)("div", {
          className: "InputGenericPopupError SmallTextLight",
          role: "alert",
          children: cQ
        }), !kQ && !cQ && (0, uQ.jsx)("div", {
          className: "SmallTextLight",
          children: "Loading schematic\u2026"
        }), (0, uQ.jsxs)("fieldset", {
          disabled: UQ,
          children: [DQ || bQ ? (0, uQ.jsxs)("label", {
            className: "SchematicField",
            children: [(0, uQ.jsx)("span", {
              className: "SmallTextBold",
              children: "Project path"
            }), (0, uQ.jsx)("div", {
              className: "InputGenericPopupInputRow",
              children: (0, uQ.jsx)(Kw.b, {
                className: "InputGenericPopupInput",
                defaultValue: wQ,
                placeholderText: "maps/arena.bloxdschem",
                maxLength: 64,
                onValueChange: HQ
              }, bQ ? "rename" : "create")
            })]
          }) : (0, uQ.jsx)("div", {
            className: "SchematicPath SmallTextBold",
            children: wQ
          }), (DQ || bQ) && rQ && (0, uQ.jsx)("div", {
            className: "InputGenericPopupError SmallTextLight",
            role: "alert",
            children: rQ
          }), DQ ? (0, uQ.jsxs)(uQ.Fragment, {
            children: [OQ >= rq.d && (0, uQ.jsxs)("div", {
              className: "SmallTextLight",
              children: ["Delete a schematic before adding another (", rq.d, " maximum)."]
            }), AQ ? (0, uQ.jsxs)(uQ.Fragment, {
              children: [(0, uQ.jsx)("div", {
                className: "SmallTextBold",
                children: "Choose from profile"
              }), (0, uQ.jsx)("div", {
                className: "SchematicProfilePicker",
                "aria-disabled": UQ || !IQ,
                children: (0, uQ.jsx)(yq.e, {
                  loading: null === eQ,
                  schematics: null !== eQ && void 0 !== eQ ? eQ : [],
                  disableAutoExport: !0,
                  onSchematicPicked: QQ => {
                    !UQ && IQ && NQ({
                      action: "profile",
                      path: sQ,
                      schematicId: QQ.schematicId
                    })
                  }
                })
              }), (0, uQ.jsx)("div", {
                className: "InputGenericPopupButtons",
                children: (0, uQ.jsx)(YQ.f, {
                  className: "InputGenericPopupButton",
                  disabled: UQ,
                  onClick: () => {
                    tQ(!1)
                  },
                  children: "Back"
                })
              })]
            }) : (0, uQ.jsxs)("div", {
              className: "InputGenericPopupButtons",
              children: [(0, uQ.jsx)(YQ.f, {
                className: "InputGenericPopupButton",
                disabled: UQ || !IQ,
                onClick: () => {
                  SQ.current.click()
                },
                children: "Upload Schematic"
              }), (0, uQ.jsx)(YQ.f, {
                className: "InputGenericPopupButton",
                disabled: UQ || !IQ,
                onClick: () => {
                  !async function() {
                    if (tQ(!0), CQ(""), !eQ) try {
                      const QQ = await (0, Gq.postJsonWithMetricsCookiesAndJsonResponse)(`${gq.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
                        retries: 0,
                        minTimeout: 3e3
                      });
                      WQ.current && MQ(QQ)
                    } catch (QQ) {
                      console.error("Could not load profile schematics", QQ), WQ.current && (tQ(!1), CQ("Could not load your schematics. Try again."))
                    }
                  }()
                },
                children: "Choose from profile"
              })]
            }), (0, uQ.jsx)("input", {
              ref: SQ,
              type: "file",
              accept: ".bloxdschem",
              hidden: !0,
              onChange: QQ => {
                var FQ;
                const wQ = null === (FQ = QQ.target.files) || void 0 === FQ ? void 0 : FQ[0];
                if (QQ.target.value = "", !wQ) return;
                if (wQ.size > rq.g) return void CQ("The schematic file is too large.");
                const LQ = sQ;
                pQ(!0);
                const qQ = new FileReader;
                qQ.onload = () => {
                  NQ({
                    action: "upload",
                    path: LQ,
                    base64: String(qQ.result).split(",")[1]
                  })
                }, qQ.onerror = () => {
                  console.error("Could not read schematic file", qQ.error), WQ.current && (pQ(!1), CQ("Could not read the selected file."))
                }, qQ.readAsDataURL(wQ)
              }
            })]
          }) : RQ ? (0, uQ.jsxs)(uQ.Fragment, {
            children: [!bQ && (0, uQ.jsx)(Bq, {
              path: wQ,
              revision: kQ.revision
            }), !bQ && (0, uQ.jsxs)("p", {
              className: "SchematicDetails SmallTextLight",
              children: [Math.ceil(RQ.byteSize / 1024), " KB \xb7 ", RQ.dimensions.join(" \xd7 "), " blocks"]
            }), (0, uQ.jsx)("div", {
              className: "InputGenericPopupButtons",
              children: bQ ? (0, uQ.jsxs)(uQ.Fragment, {
                children: [(0, uQ.jsx)(YQ.f, {
                  className: "InputGenericPopupButton",
                  disabled: UQ || !IQ,
                  onClick: () => {
                    NQ({
                      action: "rename",
                      path: wQ,
                      newPath: sQ
                    })
                  },
                  children: "Rename"
                }), (0, uQ.jsx)(YQ.f, {
                  className: "InputGenericPopupButton",
                  disabled: UQ,
                  onClick: () => {
                    xQ(!1), HQ(wQ)
                  },
                  children: "Cancel"
                })]
              }) : (0, uQ.jsxs)(uQ.Fragment, {
                children: [(0, uQ.jsx)(YQ.f, {
                  className: "InputGenericPopupButton",
                  disabled: UQ,
                  onClick: () => {
                    xQ(!0)
                  },
                  children: "Rename"
                }), (0, uQ.jsx)(YQ.F, {
                  className: "InputGenericPopupButton",
                  disabled: UQ,
                  onClick: () => {
                    NQ({
                      action: "remove",
                      path: wQ
                    })
                  },
                  children: "Delete"
                })]
              })
            })]
          }) : kQ && (0, uQ.jsx)("div", {
            className: "SmallTextLight",
            children: "This schematic is no longer in the project."
          })]
        })]
      })
    }

    function Qo(QQ) {
      if ("string" !== typeof QQ) return null;
      try {
        const FQ = JSON.parse(QQ);
        return (0, Cq.j)(null === FQ || void 0 === FQ ? void 0 : FQ.worldCodeEngine) && "boolean" === typeof FQ.engineLocked && function(QQ) {
          if (null === QQ) return !0;
          const FQ = null === QQ || void 0 === QQ ? void 0 : QQ.location;
          return "string" === typeof(null === QQ || void 0 === QQ ? void 0 : QQ.reason) && (null === FQ || "string" === typeof(null === FQ || void 0 === FQ ? void 0 : FQ.path) && Number.isInteger(FQ.line))
        }(FQ.fallback) ? FQ : (console.error("[CodeCollab] Malformed engine settings", QQ), null)
      } catch (FQ) {
        return console.error("[CodeCollab] Failed to parse engine settings", FQ), null
      }
    }

    function Fo(QQ) {
      let {
        fallback: FQ,
        onGoToLine: wQ
      } = QQ;
      const {
        t: LQ
      } = (0, PQ.y)(), {
        location: qQ
      } = FQ;
      return (0, uQ.jsxs)("div", {
        className: "CodeEditorEngineNotice",
        children: [LQ("codeEditorEngine:notice", {
          reason: FQ.reason
        }), qQ && (0, uQ.jsxs)(uQ.Fragment, {
          children: [" ", (0, uQ.jsx)("button", {
            type: "button",
            className: "CodeEditorEngineNoticeLink",
            onClick: () => {
              wQ(qQ.path, qQ.line)
            },
            children: LQ("codeEditorEngine:goToLine", {
              line: String(qQ.line)
            })
          })]
        })]
      })
    }
    var wo = wQ(4777),
      Lo = wQ(4233),
      qo = wQ(36499);

    function oo(QQ) {
      let {
        label: FQ,
        hint: wQ,
        checked: LQ,
        onChange: qQ
      } = QQ;
      return (0, uQ.jsxs)("label", {
        className: "CodeEditorMoreOptionsRow CodeEditorOptionSwitch",
        children: [(0, uQ.jsxs)("span", {
          className: "CodeEditorOptionSwitchText",
          children: [(0, uQ.jsx)("span", {
            children: FQ
          }), (0, uQ.jsx)("span", {
            className: "CodeEditorOptionSwitchHint",
            children: wQ
          })]
        }), (0, uQ.jsx)("span", {
          className: "SwitchContainer",
          children: (0, uQ.jsx)(Lo.d, {
            className: "SwitchCheckbox",
            checked: LQ,
            onChange: QQ => {
              qQ(QQ.target.checked)
            },
            disabled: !1
          })
        })]
      })
    }

    function Do(QQ) {
      let {
        engine: FQ,
        onSetEngine: wQ,
        aiHints: LQ,
        variation: qQ
      } = QQ;
      const {
        t: oQ
      } = (0, PQ.y)(), [DQ, kQ] = (0, qo.k)(qo.f);
      return (0, uQ.jsxs)("div", {
        className: "CodeEditorMoreOptions",
        children: [(0, uQ.jsx)("div", {
          className: "CodeEditorMoreOptionsTitle",
          children: oQ("codeEditor:moreOptions")
        }), FQ && (0, uQ.jsx)(oo, {
          label: oQ("codeEditorEngine:toggle"),
          hint: oQ("codeEditorEngine:toggleHint"),
          checked: "ses" === FQ,
          onChange: QQ => {
            wQ(QQ ? "ses" : "quickjs")
          }
        }), LQ && (0, uQ.jsx)(oo, {
          label: oQ("codeEditorAiHints:toggle"),
          hint: oQ("codeEditorAiHints:toggleHint"),
          checked: LQ.shown,
          onChange: LQ.setShown
        }), LQ && qo.f.canChange && (0, uQ.jsx)(oo, {
          label: oQ("codeEditorAiKeySafetyCheck:toggle"),
          hint: oQ("codeEditorAiKeySafetyCheck:toggleHint"),
          checked: DQ,
          onChange: QQ => {
            QQ ? kQ(!0) : yL.NotificationProvider.showPromptPopup({
              title: "codeEditorAiKeySafetyCheck:offWarning",
              confirmText: "general:yes",
              destructive: !0,
              cancelText: "general:no"
            }).getResult().then((QQ => {
              !0 === QQ && kQ(!1)
            }))
          }
        }), qQ && (0, uQ.jsxs)("div", {
          className: "CodeEditorMoreOptionsRow",
          children: [(0, uQ.jsx)(wo.c, {
            label: "codeEditor:variationLabel",
            children: (0, uQ.jsx)(Kw.b, {
              className: "CodeEditorVariationInput",
              maxLength: 32,
              defaultValue: qQ.name,
              onValueChange: qQ.setName,
              onEnter: qQ.reload
            })
          }), (0, uQ.jsx)(YQ.y, {
            className: "CodeEditorButton",
            onClick: qQ.reload,
            children: oQ("codeEditor:reloadAsVariation")
          })]
        })]
      })
    }
    var ko = wQ(36508),
      vo = wQ(36514);

    function mo(QQ) {
      let {
        close: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, PQ.y)(), LQ = [{
        name: wQ("codeEditor:welcomeTutorial"),
        tutorial: "welcome"
      }, {
        name: wQ("codeEditor:docsOverviewTutorial"),
        tutorial: "docsOverview"
      }, {
        name: wQ("codeEditorAiTutorial:tutorialName"),
        tutorial: "aiHelperOverview"
      }];
      return (0, uQ.jsxs)("div", {
        className: "PromptGenericPopup CodeEditorTutorialsPopup",
        children: [(0, uQ.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: wQ("codeEditor:tutorialsTitle")
        }), (0, uQ.jsx)("div", {
          className: "CodeEditorTutorialsList",
          children: LQ.map((QQ => (0, uQ.jsx)(YQ.f, {
            className: "CodeEditorTutorialsListButton",
            onClick: () => {
              FQ(), (0, vo.I)(QQ.tutorial)
            },
            children: QQ.name
          }, QQ.tutorial)))
        })]
      })
    }
    var uo = wQ(114),
      Ho = wQ(36171),
      bo = wQ(8530);
    const Yo = (0, qQ.forwardRef)((function(QQ, FQ) {
      let {
        value: wQ,
        onChange: LQ,
        onSubmit: qQ,
        placeholder: oQ,
        maxLength: DQ,
        rows: kQ = 2,
        allowNewLines: vQ = !1,
        onKeyDown: mQ,
        before: HQ
      } = QQ;
      const {
        t: bQ
      } = (0, PQ.y)(), xQ = "" !== wQ.trim(), AQ = () => {
        xQ && qQ()
      };
      return (0, uQ.jsxs)("div", {
        className: "PanelPromptInputRow",
        children: [HQ, (0, uQ.jsx)("textarea", {
          ref: FQ,
          className: "PanelPromptInput",
          value: wQ,
          maxLength: DQ,
          rows: kQ,
          placeholder: oQ,
          spellCheck: !1,
          autoComplete: "off",
          onChange: QQ => {
            LQ(vQ ? QQ.target.value : QQ.target.value.replace(/\r?\n/g, " "))
          },
          onKeyDown: QQ => {
            QQ.nativeEvent.isComposing || 229 === QQ.nativeEvent.keyCode ? QQ.stopPropagation() : "Escape" !== QQ.key && (QQ.stopPropagation(), null === mQ || void 0 === mQ || mQ(QQ), QQ.defaultPrevented || "Enter" !== QQ.key || vQ && QQ.shiftKey || (QQ.preventDefault(), AQ()))
          }
        }), (0, uQ.jsx)(YQ.f, {
          className: "PanelPromptSend",
          disabled: !xQ,
          onClick: AQ,
          ariaLabel: bQ("codeEditorPanels:send"),
          children: (0, uQ.jsx)(tQ.c, {
            name: "arrow-up"
          })
        })]
      })
    }));

    function xo(QQ) {
      let {
        inputRef: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, PQ.y)(), {
        messages: LQ,
        reportedPlayers: oQ,
        channel: DQ
      } = (0, bo.n)(), [kQ, vQ] = (0, qQ.useState)(""), mQ = (0, qQ.useRef)({
        stepsBack: 0,
        text: ""
      });
      return (0, uQ.jsxs)("div", {
        className: "CodeEditorChatPanel",
        children: [(0, uQ.jsx)("div", {
          className: "CodeEditorChatHeader",
          children: (0, uQ.jsx)("span", {
            className: "CodeEditorChatTitle",
            children: wQ("codeEditorChat:title")
          })
        }), 0 === LQ.length ? (0, uQ.jsx)("div", {
          className: "CodeEditorChatEmpty",
          children: wQ("codeEditorChat:empty")
        }) : (0, uQ.jsx)("div", {
          className: "ChatMessages CodeEditorChatMessages",
          children: (0, uQ.jsx)(Ho.d, {
            messages: LQ,
            reportedPlayers: oQ
          })
        }), (0, uQ.jsx)(Yo, {
          ref: FQ,
          value: kQ,
          onChange: vQ,
          onSubmit: () => {
            (0, bo.l)(kQ), vQ(""), mQ.current = {
              stepsBack: 0,
              text: ""
            }
          },
          maxLength: WQ.hd,
          rows: 1,
          placeholder: DQ ? wQ("touchOnly" === (0, uo.e)() ? "codeEditorChat:channelPlaceholderTouch" : "codeEditorChat:channelPlaceholder", {
            channel: DQ.channelName
          }) : wQ("codeEditorChat:placeholder"),
          before: DQ && (0, uQ.jsx)("button", {
            type: "button",
            className: "CodeEditorChatChannel",
            style: {
              backgroundColor: DQ.elementBgColor
            },
            onClick: () => {
              bo.e.selectNextChannel(), FQ.current.focus()
            },
            children: (0, uQ.jsx)(SQ.e, {
              text: DQ.elementContent
            })
          }),
          onKeyDown: QQ => {
            const FQ = kQ === mQ.current.text;
            if ("ArrowUp" !== QQ.key && "ArrowDown" !== QQ.key || !FQ && "" !== kQ) "Tab" === QQ.key && !QQ.shiftKey && DQ && (QQ.preventDefault(), bo.e.selectNextChannel());
            else {
              QQ.preventDefault();
              const wQ = FQ ? mQ.current.stepsBack : 0;
              mQ.current = (0, bo.k)(wQ + ("ArrowUp" === QQ.key ? 1 : -1)), vQ(mQ.current.text)
            }
          }
        })]
      })
    }
    var Ao = wQ(36520);

    function to(QQ) {
      return "expanded" === QQ ? "always" : "shown" === QQ ? "narrow" : void 0
    }

    function eo(QQ) {
      var FQ;
      let {
        nH: wQ,
        worldPanel: LQ,
        closeWorld: qQ,
        aiShown: oQ,
        defaultWidth: DQ,
        children: kQ
      } = QQ;
      const vQ = "hidden" !== wQ;
      return (0, uQ.jsx)(Ao.b, {
        side: "right",
        defaultSize: vQ ? "max(18rem, 40%)" : DQ,
        covers: null !== (FQ = to(wQ)) && void 0 !== FQ ? FQ : oQ ? "narrow" : void 0,
        children: (0, uQ.jsxs)("div", {
          className: Gw()("CodeEditorRightColumn", {
            WorldShown: vQ,
            WorldExpanded: "expanded" === wQ
          }),
          children: [vQ && (0, uQ.jsx)(Ao.b, {
            side: "top",
            onClose: qQ,
            children: LQ
          }), kQ]
        })
      })
    }
    var Mo = wQ(1933),
      Go = wQ(1132),
      po = wQ(1314);
    class co {
      constructor(QQ, FQ, wQ) {
        this.measure = QQ, this.apply = FQ, this.now = wQ, this.last = null, this.resizedAt = -1 / 0, this.resizing = !1, this.stretchedAt = null
      }
      get rect() {
        var QQ, FQ;
        return null !== (QQ = null === (FQ = this.last) || void 0 === FQ ? void 0 : FQ.rect) && void 0 !== QQ ? QQ : null
      }
      sync() {
        const QQ = function(QQ) {
          const FQ = Math.round(QQ.left),
            wQ = Math.round(QQ.top);
          return {
            left: FQ,
            top: wQ,
            width: Math.round(QQ.right) - FQ,
            height: Math.round(QQ.bottom) - wQ
          }
        }(this.measure());
        if (QQ.width <= 0 || QQ.height <= 0) return;
        const FQ = this.now(),
          wQ = this.last;
        let LQ = {
          width: QQ.width,
          height: QQ.height
        };
        null === wQ || QQ.width === wQ.rect.width && QQ.height === wQ.rect.height || (this.resizing = FQ - this.resizedAt < 100, this.resizedAt = FQ);
        const qQ = null !== wQ && this.resizing && FQ - this.resizedAt < 100 && (QQ.width !== wQ.bufferSize.width || QQ.height !== wQ.bufferSize.height);
        qQ && (this.stretchedAt ??= FQ), qQ && FQ - this.stretchedAt < 250 ? LQ = wQ.bufferSize : this.stretchedAt = null;
        const oQ = {
          rect: QQ,
          bufferSize: LQ
        };
        var DQ, kQ;
        null !== wQ && (kQ = oQ, (DQ = wQ).rect.left === kQ.rect.left && DQ.rect.top === kQ.rect.top && DQ.rect.width === kQ.rect.width && DQ.rect.height === kQ.rect.height && DQ.bufferSize.width === kQ.bufferSize.width && DQ.bufferSize.height === kQ.bufferSize.height) || (this.last = oQ, this.apply(oQ))
      }
      stop() {
        null !== this.last && (this.last = null, this.apply(null))
      }
    }

    function Co(QQ) {
      const {
        style: FQ
      } = document.documentElement;
      for (const [wQ, LQ] of [
          ["--worldViewLeft", null === QQ || void 0 === QQ ? void 0 : QQ.left],
          ["--worldViewTop", null === QQ || void 0 === QQ ? void 0 : QQ.top],
          ["--worldViewWidth", null === QQ || void 0 === QQ ? void 0 : QQ.width],
          ["--worldViewHeight", null === QQ || void 0 === QQ ? void 0 : QQ.height]
        ]) void 0 === LQ ? FQ.removeProperty(wQ) : FQ.setProperty(wQ, `${LQ}px`)
    }
    var So = wQ(1725),
      io = wQ(1947);

    function Wo(QQ, FQ) {
      (0, qQ.useEffect)((() => {
        if (!QQ) return;
        const wQ = QQ => {
          var wQ;
          "Escape" === QQ.key ? (QQ.stopPropagation(), QQ.preventDefault(), FQ()) : (wQ = QQ.code, Object.entries(hF.u).some((QQ => {
            let [FQ, LQ] = QQ;
            const qQ = io.d[FQ];
            return qQ.includes("ui") && !qQ.includes("core") && LQ.includes(wQ)
          })) && !(0, So.isTextEntry)(QQ.target) && QQ.preventDefault())
        };
        window.addEventListener("keydown", wQ, !0);
        const LQ = (0, XQ.k)(FQ);
        return () => {
          window.removeEventListener("keydown", wQ, !0), LQ()
        }
      }), [QQ, FQ])
    }

    function Ro() {
      return (0, kq.k)().some((QQ => QQ !== kq.d))
    }

    function Oo(QQ, FQ) {
      return QQ.map((QQ => FQ ? String(QQ) : QQ.toFixed(1))).join(", ")
    }

    function so(QQ) {
      let {
        freeCamera: FQ,
        picking: wQ,
        hovered: LQ
      } = QQ;
      const {
        t: oQ
      } = (0, PQ.y)(), DQ = (0, qQ.useRef)(null), kQ = (0, qQ.useRef)(null);
      return (0, qQ.useEffect)((() => {
        const QQ = (QQ, FQ) => {
            QQ.textContent !== FQ && (QQ.textContent = FQ)
          },
          wQ = () => {
            const wQ = FQ ? mQ.gameBridge.lookup("freeCameraPos", null) : null;
            QQ(DQ.current, Oo(null !== wQ && void 0 !== wQ ? wQ : mQ.gameBridge.lookup("localPos", null), !1));
            const LQ = mQ.gameBridge.lookup("targetedBlockPos", null);
            QQ(kQ.current, LQ ? Oo(LQ, !0) : "-")
          };
        return wQ(), (0, po.z)(wQ)
      }), [FQ]), (0, uQ.jsxs)("div", {
        className: "WorldPanelCoordinates",
        children: [(0, uQ.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: oQ(FQ ? "codeEditorWorld:camera" : "codeEditorWorld:position")
        }), (0, uQ.jsx)("span", {
          ref: DQ
        }), (0, uQ.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: oQ("codeEditorWorld:lookingAt")
        }), (0, uQ.jsx)("span", {
          ref: kQ,
          hidden: wQ
        }), wQ && (0, uQ.jsxs)(uQ.Fragment, {
          children: [(0, uQ.jsx)("span", {
            children: LQ ? Oo(LQ.pos, !0) : "-"
          }), LQ && (0, uQ.jsx)("span", {
            className: "WorldPanelCoordsName",
            children: LQ.name
          })]
        })]
      })
    }
    var ro = wQ(36523);

    function Io(QQ) {
      const FQ = QQ.currentTarget.getBoundingClientRect();
      return {
        x: (QQ.clientX - FQ.left) / FQ.width,
        y: (QQ.clientY - FQ.top) / FQ.height
      }
    }

    function Uo(QQ) {
      const [FQ, wQ] = (0, qQ.useState)(!1), [LQ, oQ] = (0, qQ.useState)(null), DQ = (0, qQ.useRef)(null);
      (0, qQ.useEffect)((() => {
        if (!FQ) return;
        let QQ = null,
          wQ = null,
          LQ = 1 / 0;
        const qQ = (0, po.t)((FQ => {
          LQ += FQ;
          const qQ = DQ.current;
          if (qQ === wQ && LQ < 100) return;
          wQ = qQ, LQ = 0;
          const kQ = qQ && mQ.gameBridge.lookup("blockAtViewPoint", qQ);
          var vQ, uQ;
          (vQ = kQ) === (uQ = QQ) || null !== vQ && null !== uQ && vQ.name === uQ.name && (0, ro.g)(vQ.pos, uQ.pos) && (0, ro.g)(vQ.normal, uQ.normal) || (QQ = kQ, oQ(kQ), mQ.gameBridge.send("setBlockHighlight", kQ))
        }));
        return () => {
          qQ(), null !== QQ && mQ.gameBridge.send("setBlockHighlight", null), oQ(null)
        }
      }), [FQ]);
      const kQ = (0, qQ.useCallback)((() => {
        wQ(!1)
      }), []);
      Wo(FQ, kQ);
      const vQ = {
        onPointerMove: QQ => {
          DQ.current = Io(QQ)
        },
        onPointerLeave: () => {
          DQ.current = null
        },
        onClick: LQ => {
          if (!FQ) return;
          const qQ = mQ.gameBridge.lookup("blockAtViewPoint", Io(LQ));
          null !== qQ && (wQ(!1), QQ(qQ.pos))
        }
      };
      return {
        picking: FQ,
        setPicking: wQ,
        hovered: LQ,
        slotHandlers: vQ
      }
    }

    function No(QQ) {
      mQ.gameBridge.send("setFreeCameraMovesFly", QQ)
    }

    function To(QQ) {
      let {
        shown: FQ,
        setShown: wQ,
        canInsertCode: LQ
      } = QQ;
      const {
        t: oQ
      } = (0, PQ.y)(), {
        isTouchScreen: DQ
      } = (0, aQ.l)(["isTouchScreen"]), kQ = (0, qQ.useRef)(null), mQ = (0, qQ.useCallback)((() => {
        var QQ;
        null === (QQ = kQ.current.closest(".CodeEditorBg").querySelector(".cm-content")) || void 0 === QQ || QQ.focus()
      }), []), {
        control: HQ,
        take: bQ,
        release: AQ,
        blocked: eQ
      } = function(QQ) {
        const [FQ, wQ] = (0, qQ.useState)("none"), LQ = (0, qQ.useRef)("none"), [oQ, DQ] = (0, qQ.useState)(!1), kQ = QQ => {
          LQ.current = QQ, wQ(QQ)
        }, vQ = (0, qQ.useCallback)((() => {
          const FQ = LQ.current;
          "none" !== FQ && (kQ("none"), (0, kq.n)(kq.d), "mouse" === FQ && QQ())
        }), [QQ]), mQ = (0, qQ.useCallback)((QQ => {
          Ro() ? DQ(!0) : (kQ("mouse" === QQ && "touchOnly" !== (0, uo.e)() ? "mouse" : "touch"), (0, kq.l)(kq.d))
        }), []);
        return (0, iQ.g)("pointerLockUpdate", (QQ => {
          QQ && "touch" === LQ.current && "touchOnly" !== (0, uo.e)() ? kQ("mouse") : QQ || "mouse" !== LQ.current || vQ()
        })), (0, qQ.useEffect)((() => {
          if (!oQ) return;
          const QQ = () => {
            Ro() || DQ(!1)
          };
          return QQ(), (0, kq.f)(QQ)
        }), [oQ]), Wo("none" !== FQ, vQ), (0, qQ.useEffect)((() => {
          if ("none" === FQ) return;
          const QQ = QQ => {
            (0, So.isTextEntry)(QQ.target) && vQ()
          };
          return document.addEventListener("focusin", QQ), () => {
            document.removeEventListener("focusin", QQ)
          }
        }), [FQ, vQ]), (0, qQ.useEffect)((() => (document.addEventListener("pointerlockerror", vQ), () => {
          document.removeEventListener("pointerlockerror", vQ)
        })), [vQ]), (0, qQ.useEffect)((() => () => {
          "none" !== LQ.current && null !== aQ.c.get("openInGameMenuName") && (0, kq.n)(kq.d)
        }), []), {
          control: FQ,
          take: mQ,
          release: vQ,
          blocked: oQ
        }
      }(mQ), MQ = (0, Go.i)(Ao.d);
      (0, qQ.useEffect)((() => {
        "touch" !== HQ || "shown" !== FQ || MQ ? "none" === HQ && "expanded" === FQ && wQ("shown") : wQ("expanded")
      }), [HQ, MQ]),
      function(QQ, FQ) {
        const wQ = (0, qQ.useRef)(FQ);
        wQ.current = FQ;
        const LQ = (0, qQ.useRef)(null);
        (0, qQ.useLayoutEffect)((() => {
          const FQ = new co((() => QQ.current.getBoundingClientRect()), (QQ => {
            var FQ;
            "none" !== wQ.current && Co(null !== (FQ = null === QQ || void 0 === QQ ? void 0 : QQ.rect) && void 0 !== FQ ? FQ : null), (0, po.B)().setGameView(QQ)
          }), (() => performance.now()));
          LQ.current = FQ, FQ.sync();
          const qQ = (0, po.q)((() => {
            FQ.sync()
          }));
          return () => {
            qQ(), aQ.c.set({
              worldPanelHud: null
            }), FQ.stop()
          }
        }), [QQ]), (0, qQ.useLayoutEffect)((() => {
          LQ.current.sync(), Co("none" === FQ ? null : LQ.current.rect), aQ.c.set({
            worldPanelHud: FQ
          })
        }), [FQ])
      }(kQ, "touch" === HQ ? "touchControls" : "none");
      const {
        picking: GQ,
        setPicking: pQ,
        hovered: cQ,
        slotHandlers: CQ
      } = Uo((QQ => {
        xQ.l.GA("CodeEditorInsertText", {
          text: `[${QQ.join(", ")}]`,
          focus: !DQ
        }), (0, Ao.d)() && wQ("hidden")
      })), SQ = function() {
        const {
          allowed: QQ,
          movesFly: FQ
        } = (0, RQ.k)("freeCamera"), wQ = (0, qQ.useRef)(FQ), LQ = (0, qQ.useRef)(FQ);
        return LQ.current !== FQ && (LQ.current = FQ, wQ.current = FQ), (0, qQ.useEffect)((() => () => {
          wQ.current && No(!1)
        }), []), {
          allowed: QQ,
          on: FQ,
          toggle: () => {
            wQ.current = !FQ, No(!FQ)
          }
        }
      }(), WQ = (0, vQ.l)("hideCoordinates"), OQ = (0, RQ.k)("localPlayerAlive"), sQ = !OQ || eQ;
      (0, qQ.useEffect)((() => {
        OQ || AQ()
      }), [OQ, AQ]), (0, qQ.useEffect)((() => {
        !sQ && LQ || pQ(!1)
      }), [sQ, LQ, pQ]);
      const rQ = SQ.on ? YQ.m : YQ.f,
        IQ = GQ ? YQ.m : YQ.f;
      return (0, uQ.jsxs)("div", {
        className: "WorldPanel",
        children: [(0, uQ.jsxs)("div", {
          className: "WorldPanelHeader",
          children: [(0, uQ.jsx)("span", {
            className: "WorldPanelTitle",
            children: oQ("codeEditorWorld:title")
          }), "touch" === HQ && !MQ && (0, uQ.jsx)(YQ.f, {
            className: "WorldPanelButton",
            onClick: AQ,
            children: oQ("codeEditorWorld:backToCode")
          }), !sQ && SQ.allowed && !DQ && (0, uQ.jsx)(nQ.f, {
            tooltipInner: oQ("codeEditorWorld:freeCameraTooltip"),
            hoverOnly: !0,
            children: (0, uQ.jsx)(rQ, {
              className: "WorldPanelButton",
              ariaPressed: SQ.on,
              ariaLabel: oQ("codeEditorWorld:freeCamera"),
              onClick: SQ.toggle,
              children: (0, uQ.jsx)(tQ.c, {
                name: "video"
              })
            })
          }), !sQ && LQ && (0, uQ.jsx)(nQ.f, {
            tooltipInner: oQ("codeEditorWorld:pickTooltip"),
            hoverOnly: !0,
            children: (0, uQ.jsxs)(IQ, {
              className: "WorldPanelButton",
              ariaPressed: GQ,
              onClick: () => {
                AQ(), pQ(!GQ)
              },
              children: [(0, uQ.jsx)(tQ.c, {
                name: "crosshairs"
              }), oQ("codeEditorWorld:pick")]
            })
          })]
        }), !WQ && (0, uQ.jsx)(so, {
          freeCamera: SQ.on,
          picking: GQ,
          hovered: cQ
        }), (0, uQ.jsxs)("div", {
          ref: kQ,
          className: Gw()("WorldPanelSlot", {
            TouchControl: "touch" === HQ,
            Picking: GQ
          }),
          onPointerDown: QQ => {
            0 !== QQ.button || sQ || GQ || bQ(QQ.pointerType)
          },
          ...CQ,
          children: [!sQ && !GQ && (0, uQ.jsx)("div", {
            className: "WorldPanelCrosshair",
            children: "+"
          }), !sQ && "touch" !== HQ && (0, uQ.jsxs)("div", {
            className: "WorldPanelHint",
            children: [GQ && oQ(DQ ? "codeEditorWorld:tapToPick" : "codeEditorWorld:clickToPick"), !GQ && "none" === HQ && !SQ.on && oQ(DQ ? "codeEditorWorld:tapToPlay" : "codeEditorWorld:clickToPlay"), !GQ && "none" === HQ && SQ.on && oQ("codeEditorWorld:clickToFly"), "mouse" === HQ && (0, uQ.jsxs)(uQ.Fragment, {
              children: [(0, uQ.jsx)(Mo.e, {
                noaAction: "OpenLobbyLeaderboard"
              }), oQ("codeEditorWorld:backToCode")]
            })]
          }), sQ && (0, uQ.jsxs)("div", {
            className: "WorldPanelWaiting",
            children: [(0, uQ.jsx)("span", {
              children: oQ(OQ ? "codeEditorWorld:gameWaiting" : "codeEditorWorld:died")
            }), (0, uQ.jsx)(YQ.f, {
              onClick: XQ.f,
              children: oQ("codeEditorWorld:toGame")
            })]
          })]
        })]
      })
    }
    var Ko = wQ(4867);

    function zo(QQ) {
      let {
        nH: FQ,
        setWorld: wQ,
        toggleWorld: LQ,
        aiShown: qQ,
        closeAi: oQ
      } = QQ;
      const {
        t: DQ
      } = (0, PQ.y)(), kQ = qQ ? "ai" : "hidden" !== FQ ? "world" : "code", vQ = [{
        value: "code",
        label: DQ("codeEditorWorld:codePane")
      }, {
        value: "world",
        label: DQ("codeEditorWorld:title")
      }];
      qQ && vQ.push({
        value: "ai",
        label: DQ("codeEditorWorld:aiPane")
      });
      return (0, uQ.jsx)("div", {
        className: "CodeEditorPaneSwitch",
        children: (0, uQ.jsx)(Ko.c, {
          options: vQ,
          value: kQ,
          onChange: QQ => {
            "world" !== QQ ? (qQ && oQ(), wQ("hidden")) : "hidden" === FQ ? LQ() : oQ()
          },
          ariaLabel: DQ("codeEditorWorld:panes"),
          keepsFocus: !0
        })
      })
    }
    var jo = wQ(36529),
      ao = wQ(36535),
      Xo = wQ(36538),
      fo = wQ(36540);
    const Vo = (0, qQ.lazy)((() => Promise.all([wQ.e(290), wQ.e(286), wQ.e(289), wQ.e(285), wQ.e(82), wQ.e(288), wQ.e(287), wQ.e(284)]).then((() => wQ(40679))))),
      ho = (0, qQ.lazy)((() => Promise.all([wQ.e(77), wQ.e(80), wQ.e(81), wQ.e(79), wQ.e(292)]).then((() => wQ(40857))))),
      Jo = (0, qQ.lazy)((() => Promise.all([wQ.e(290), wQ.e(289), wQ.e(82), wQ.e(80), wQ.e(81), wQ.e(79), wQ.e(288), wQ.e(287), wQ.e(78), wQ.e(89)]).then((() => wQ(40862)))));

    function Eo(QQ) {
      return mQ.gameBridge.query("worldCodeAiChunk", QQ)
    }

    function no() {
      return mQ.gameBridge.query("worldCodeAiGameState", null)
    }

    function go(QQ) {
      const {
        gsUrl: FQ,
        gameNameWithVariation: wQ,
        lobbyName: LQ
      } = Pq();
      return (0, Gq.postJsonWithMetricsCookiesAndJsonResponse)(`${FQ}/code/get-lobby-code`, Mq.Tj["get-lobby-code"].toBuffer({
        gameNameWithVariation: wQ,
        lobbyName: LQ,
        path: QQ
      }), {
        retries: 1
      })
    }
    let Po = !1;
    const Zo = [],
      yo = {
        message: "You do not have permission to view the code.",
        type: "warning"
      },
      Bo = (0, qQ.memo)((function(QQ) {
        var FQ, wQ;
        let {
          show: LQ,
          onOpen: oQ,
          onClose: kQ,
          isLobbyCode: HQ
        } = QQ;
        const bQ = (0, qQ.useRef)(""),
          [AQ, eQ] = (0, qQ.useState)(null),
          MQ = (0, qQ.useRef)(HQ),
          [GQ, pQ] = (0, qQ.useState)({
            message: null,
            type: null
          }),
          [cQ, CQ] = (0, qQ.useState)(""),
          SQ = GQ.message ? GQ : {
            message: cQ,
            type: "warning"
          },
          [sQ, rQ] = (0, qQ.useState)(!0),
          [IQ, NQ] = (0, qo.k)(qo.j),
          [TQ, KQ] = (0, qo.k)(qo.d),
          [zQ, lQ] = (0, qQ.useState)(!1),
          [jQ, fQ] = (0, qQ.useState)(!1),
          VQ = (0, qQ.useRef)(null),
          hQ = (0, qQ.useRef)(!1);
        (0, qQ.useEffect)((() => {
          var QQ;
          jQ && hQ.current && (hQ.current = !1, null === (QQ = VQ.current) || void 0 === QQ || QQ.focus())
        }), [jQ]);
        const JQ = (0, jo.b)(),
          EQ = (0, qQ.useRef)(null),
          gQ = (0, qQ.useRef)(null),
          {
            openInGameMenuName: ZQ,
            openEverythingMenuName: yQ,
            worldPanelHud: BQ
          } = (0, aQ.l)(["openInGameMenuName", "openEverythingMenuName", "worldPanelHud"]),
          dQ = QQ => {
            LQ && (EQ.current = QQ, RF.current = !0)
          };
        (0, iQ.g)("OpenReportMenu", (() => {
          dQ("hY")
        })), (0, iQ.g)("OpenStoreFromCodeEditor", (() => {
          dQ("store")
        })), (0, qQ.useEffect)((() => {
          const QQ = EQ.current;
          null === QQ || "hY" === QQ && ("makeReport" === ZQ || "makeDiscordReport" === ZQ) || "store" === QQ && null !== yQ || (EQ.current = null, null === ZQ && null === yQ ? HQ ? (gQ.current = Lw.current, xQ.l.GA("EditLobbyCode", AQ)) : xQ.l.GA("EditCodeBlock", {
            pos: AQ,
            canChangePos: MQ.current
          }) : (0, vo.y)())
        }), [ZQ, yQ, HQ, AQ]), (0, qQ.useEffect)((() => {
          if (LQ) return () => {
            gQ.current = null
          }
        }), [LQ]);
        const [QF, FF] = function() {
          const [QQ, FQ] = (0, qQ.useState)(Po);
          return (0, iQ.g)("CodeEditorAiHelperShown", (QQ => {
            FQ(QQ)
          })), [QQ, (0, qQ.useCallback)((QQ => {
            Po = QQ, xQ.l.GA("CodeEditorAiHelperShown", QQ)
          }), [])]
        }(), [wF, LF] = (0, qQ.useState)(null), [qF, oF] = (0, qQ.useState)([]), [DF, kF] = (0, qQ.useState)(0), [vF, mF] = (0, qQ.useState)(0), [uF, HF] = (0, qQ.useState)(""), YF = (0, qQ.useRef)(null), [xF, AF] = (0, qQ.useState)(HQ ? fo.g : null), tF = HQ || null !== AQ, eF = (0, vQ.l)("canEditCode"), MF = (0, vQ.l)("canUseDevCreativeItems"), GF = (0, ko.l)("welcome"), pF = (0, ko.l)("docsOverview"), cF = pF ? "docsOverview" : "welcome", CF = null !== pF && void 0 !== pF ? pF : GF, SF = (0, ko.l)("aiHelperOverview"), iF = SF ? "aiHelperOverview" : "welcome", WF = null !== SF && void 0 !== SF ? SF : GF, RF = (0, qQ.useRef)(!1), OF = (0, qQ.useRef)(!1), sF = (0, qQ.useRef)(null), [rF, IF] = (0, qQ.useState)(""), [UF, NF] = (0, qQ.useState)(!1), [TF, KF] = (0, qQ.useState)(null), zF = (0, RQ.k)("connectedGame"), lF = HQ && eF && "classic" === zF.gameNameWithVariation && !(0, bF.S)(zF.lobbyName), [jF, aF] = (0, qQ.useState)(null), [XF, VF] = (0, qQ.useState)({
          [pq.i]: ""
        }), [JF, EF] = (0, qQ.useState)({
          assets: {},
          revision: 0
        }), nF = (0, qQ.useRef)(JF), gF = (0, qQ.useCallback)((QQ => {
          var FQ;
          QQ.revision < nF.current.revision || (nF.current = QQ, EF(QQ), CQ(QQ.startupError ? `Schematics could not load: ${QQ.startupError}` : ""), null === (FQ = Aw.current) || void 0 === FQ || FQ.onLobbyFilesChanged({
            ...vw.current,
            ...(0, rq.h)(QQ.assets)
          }))
        }), []), [PF, ZF] = (0, qQ.useState)(pq.i), [yF, BF] = (0, qQ.useState)(null), [dF, Qw] = (0, qQ.useState)(null), Fw = (0, qQ.useRef)(!1), ww = (0, qQ.useRef)(null), Lw = (0, qQ.useRef)(PF);
        Lw.current = PF;
        const qw = (0, qQ.useRef)(yF);
        qw.current = yF;
        const ow = yF ? null : TF,
          Dw = ow && !ow.engineLocked ? ow.worldCodeEngine : null,
          kw = (0, qQ.useRef)(dF);
        kw.current = dF;
        const vw = (0, qQ.useRef)(XF);
        vw.current = XF;
        const mw = (0, qQ.useRef)(null),
          uw = (0, qQ.useRef)(null),
          [Hw, bw] = (0, qQ.useState)(!1),
          Yw = (0, Xq.o)(),
          xw = (0, qQ.useRef)([]),
          Aw = (0, qQ.useRef)(null),
          tw = (0, qQ.useRef)(null),
          ew = (0, qQ.useRef)(null);

        function Mw(QQ) {
          pQ(QQ), clearTimeout(sF.current), sF.current = setTimeout((() => {
            pQ({
              message: null,
              type: null
            })
          }), 3e3)
        }
        const pw = (0, qQ.useCallback)((function() {
            let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            Fw.current && ww.current && (mQ.gameBridge.send("sendCodeCollab", {
              RF: cq.d.Leave,
              OF: (0, cq.w)(ww.current),
              CD: !!QQ || null
            }), Fw.current = !1, ww.current = null), aF(null)
          }), []),
          Cw = (0, qQ.useCallback)((QQ => {
            const FQ = {
              kind: "lobby",
              path: QQ
            };
            ww.current = FQ, ZF(QQ), bQ.current = "", mQ.gameBridge.send("sendCodeCollab", {
              RF: cq.d.Join,
              OF: (0, cq.w)(FQ)
            }), Fw.current = !0
          }), []),
          Sw = (0, qQ.useCallback)((QQ => {
            var FQ;
            const wQ = null === (FQ = tw.current) || void 0 === FQ ? void 0 : FQ.collabState;
            return wQ && "lobby" === wQ.docKey.kind && wQ.docKey.path === QQ && Lw.current === QQ ? Promise.resolve({
              doc: wQ.doc,
              version: wQ.version,
              clientID: wQ.clientID,
              docKey: wQ.docKey,
              httpConfig: wQ.httpConfig
            }) : new Promise(((FQ, wQ) => {
              const LQ = setTimeout((() => {
                  xw.current = xw.current.filter((QQ => QQ !== qQ)), wQ(new Error(`Timed out joining ${QQ}`))
                }), 15e3),
                qQ = wQ => {
                  "lobby" === wQ.docKey.kind && wQ.docKey.path === QQ && (clearTimeout(LQ), xw.current = xw.current.filter((QQ => QQ !== qQ)), FQ(wQ))
                };
              xw.current.push(qQ), Lw.current !== QQ ? (pw(!0), Cw(QQ)) : Fw.current || Cw(QQ)
            }))
          }), [Cw, pw]),
          iw = (0, qQ.useCallback)((async function(QQ, FQ) {
            let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
            const LQ = Date.now();
            let qQ = QQ in vw.current;
            for (; qQ !== FQ;) {
              if (Date.now() - LQ > wQ) throw new Error(`Timed out waiting for lobby path ${QQ} present=${FQ}`);
              await (0, GL.J)(50), qQ = QQ in vw.current
            }
          }), []),
          Ww = (0, qQ.useCallback)((QQ => {
            const FQ = vw.current,
              wQ = pq.i in FQ && pq.m in FQ;
            if (!(0, Cq.f)(QQ) || wQ) {
              if (Lw.current === QQ) {
                var LQ;
                const qQ = wQ && (0, Cq.f)(QQ) ? QQ === pq.i ? pq.m : pq.i : null !== (LQ = (0, Cq.b)(FQ)) && void 0 !== LQ ? LQ : pq.i;
                uw.current = {
                  fromPath: QQ,
                  toPath: qQ
                }, ZF(qQ)
              }
              mQ.gameBridge.send("sendCodeCollab", {
                RF: cq.d.DeleteFile,
                OF: (0, cq.w)({
                  kind: "lobby",
                  path: Lw.current
                }),
                SD: QQ
              })
            }
          }), []),
          Rw = (0, qQ.useCallback)((QQ => {
            gQ.current = null, BF(null), Qw(null), !HQ || QQ === Lw.current && Fw.current || (pw(!0), Cw(QQ))
          }), [HQ, pw, Cw]),
          Ow = (0, qQ.useCallback)(((QQ, FQ) => {
            const wQ = Oq.e[QQ],
              LQ = wQ && FQ in wQ.files ? FQ : "index.ts";
            if (QQ !== qw.current || LQ !== kw.current) {
              var qQ;
              if (QQ !== qw.current) null === (qQ = Aw.current) || void 0 === qQ || qQ.stopContinuousSync(), pw(!0);
              BF(QQ), Qw(LQ)
            }
          }), [pw]),
          sw = (0, qQ.useCallback)((QQ => {
            var FQ;
            const wQ = Lw.current,
              LQ = vw.current[wQ],
              qQ = Fw.current && !qw.current && wQ in QQ && void 0 !== LQ ? {
                ...QQ,
                [wQ]: LQ
              } : QQ;
            VF(qQ);
            const oQ = mw.current;
            if (oQ && oQ in QQ) mw.current = null, oQ !== Lw.current && Rw(oQ);
            else if (!(Lw.current in QQ) && Fw.current && !qw.current) {
              var DQ;
              Rw(null !== (DQ = (0, Cq.b)(QQ)) && void 0 !== DQ ? DQ : pq.i)
            }
            null === (FQ = Aw.current) || void 0 === FQ || FQ.onLobbyFilesChanged({
              ...qQ,
              ...(0, rq.h)(nF.current.assets)
            })
          }), [Rw]),
          rw = (0, qQ.useCallback)((() => go(Lw.current).then((async QQ => {
            if (!Fw.current || !QQ.files) return null;
            sw(QQ.files);
            const FQ = await Zq({
              action: "state"
            });
            return gF(FQ), {
              ...QQ.files,
              ...(0, rq.h)(FQ.assets)
            }
          })).catch((QQ => (console.error("[CodeCollab] Failed to fetch lobby files via HTTP", QQ), Mw({
            message: "Could not refresh the file list",
            type: "warning"
          }), null)))), [sw, gF]),
          Iw = () => {
            kQ()
          };
        (0, qQ.useEffect)((() => {
          if (CQ(""), !LQ || !HQ) return;
          let QQ = !1;
          return nF.current = {
            assets: {},
            revision: 0
          }, EF(nF.current), Zq({
            action: "state"
          }).then((FQ => {
            QQ || gF(FQ)
          })).catch((FQ => {
            console.error("Could not load project schematics", FQ), QQ || CQ("Could not load schematics. Reopen the Code Editor to retry.")
          })), () => {
            QQ = !0
          }
        }), [LQ, HQ, gF]);
        const Uw = (0, qQ.useCallback)((function() {
            let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            ww.current && mQ.gameBridge.send("sendCodeCollab", {
              RF: cq.d.Submit,
              OF: (0, cq.w)(ww.current),
              ...QQ ? {
                UF: "keepOpen"
              } : {}
            })
          }), []),
          Nw = (0, qQ.useCallback)((() => {
            if (!ww.current || "lobby" !== ww.current.kind) return;
            const QQ = rF.trim();
            (0, Sq.n)(QQ) ? (mQ.gameBridge.send("sendCodeCollab", {
              RF: cq.d.ReloadAsVariation,
              OF: (0, cq.w)(ww.current),
              UF: QQ
            }), NF(!1)) : Mw({
              message: "Variation must be 1-32 characters: A-Z, a-z, 0-9, _, -",
              type: "warning"
            })
          }), [rF]),
          Tw = (0, qQ.useCallback)((QQ => {
            mQ.gameBridge.send("sendCodeCollab", {
              RF: cq.d.SetEngine,
              OF: (0, cq.w)({
                kind: "lobby",
                path: Lw.current
              }),
              UF: QQ
            })
          }), []),
          Kw = (0, qQ.useCallback)((QQ => {
            if (!qw.current && eF && (MQ.current || HQ)) {
              if (HQ) {
                var FQ;
                const wQ = (0, Cq.m)(vw.current, Lw.current),
                  LQ = Math.min(fF.y, Math.max(0, fF.D - wQ)),
                  qQ = QQ.slice(0, LQ);
                return bQ.current = qQ, VF((QQ => ({
                  ...QQ,
                  [Lw.current]: qQ
                }))), void(null === (FQ = Aw.current) || void 0 === FQ || FQ.onDocTextChanged(Lw.current, qQ))
              }
              bQ.current = QQ, HF(QQ)
            }
          }), [eF, HQ]);
        (0, iQ.g)("EditLobbyCode", (QQ => {
          var FQ;
          UQ.featureFlags.canSeePlayerWrittenText && HQ && (pw(), eQ(QQ), bQ.current = "", VF({
            [pq.i]: ""
          }), KF(null), ZF(pq.i), BF(null), Qw(null), mw.current = null, uw.current = null, null === (FQ = Aw.current) || void 0 === FQ || FQ.stopContinuousSync(), oQ(), Cw(pq.i))
        })), (0, iQ.g)("EditCodeBlock", (QQ => {
          let {
            pos: FQ,
            canChangePos: wQ
          } = QQ;
          if (UQ.featureFlags.canSeePlayerWrittenText && !HQ)
            if (pw(), null !== FQ && (FQ = [...FQ]), eQ(FQ), MQ.current = wQ, null !== FQ) {
              bQ.current = "", HF(""), oQ();
              const QQ = {
                  kind: "codeBlock",
                  pos: FQ
                },
                LQ = (0, cq.w)(QQ);
              YF.current !== LQ && (YF.current = LQ, oF([]), mF(DF)), AF((0, fo.d)(LQ, [FQ[0], FQ[1], FQ[2]], !!wQ)), ww.current = QQ, mQ.gameBridge.send("sendCodeCollab", {
                RF: cq.d.Join,
                OF: (0, cq.w)(QQ)
              }), Fw.current = !0
            } else LQ && kQ()
        })), (0, iQ.g)("codeCollabRejoin", (QQ => {
          const FQ = ww.current ? (0, cq.w)(ww.current) : null;
          FQ && QQ.docKey === FQ && (bQ.current = QQ.doc, HQ || HF(QQ.doc), aF((FQ => FQ ? {
            ...FQ,
            doc: QQ.doc,
            version: QQ.version,
            clientID: (0, Rq.d)()
          } : FQ)))
        })), (0, iQ.g)("codeCollab", (QQ => {
          var FQ;
          const wQ = ww.current ? (0, cq.w)(ww.current) : null;
          if (QQ.type === cq.h.LobbyFilesChanged && HQ) {
            if ("string" !== typeof QQ.files) return void rw();
            try {
              sw(JSON.parse(QQ.files))
            } catch (mQ) {
              console.error("[CodeCollab] Failed to parse lobby files", mQ), rw()
            }
            return
          }
          if (QQ.type === cq.h.EngineSettings && HQ) return void KF(Qo(QQ.engineSettings));
          const qQ = QQ.type === cq.h.Joined ? (0, cq.l)(QQ.docKey) : null,
            oQ = HQ && "lobby" === (null === (FQ = ww.current) || void 0 === FQ ? void 0 : FQ.kind) && (0, Cq.f)(ww.current.path) && "lobby" === (null === qQ || void 0 === qQ ? void 0 : qQ.kind) && (0, Cq.f)(qQ.path);
          if (!wQ || QQ.docKey === wQ || oQ)
            if (QQ.type !== cq.h.ForceClose) {
              if (LQ)
                if (QQ.type === cq.h.Joined) {
                  var DQ;
                  const uQ = JSON.parse(QQ.peers),
                    YQ = QQ.existingCursors ? JSON.parse(QQ.existingCursors) : [],
                    tQ = (0, Rq.d)(),
                    eQ = Pq(),
                    {
                      gsUrl: MQ,
                      gameNameWithVariation: GQ,
                      lobbyName: cQ
                    } = eQ,
                    CQ = null !== (DQ = (0, cq.l)(QQ.docKey)) && void 0 !== DQ ? DQ : ww.current;
                  CQ && (ww.current = CQ, "lobby" === CQ.kind && (ZF(CQ.path), Lw.current = CQ.path));
                  const SQ = CQ || (HQ ? {
                    kind: "lobby",
                    path: Lw.current
                  } : {
                    kind: "codeBlock",
                    pos: AQ
                  });

                  function iQ(FQ) {
                    var wQ, LQ;
                    if (!Fw.current) return;
                    const qQ = null !== (wQ = FQ.code) && void 0 !== wQ ? wQ : "",
                      oQ = null !== (LQ = FQ.collabVersion) && void 0 !== LQ ? LQ : 0;
                    bQ.current = qQ, HQ || HF(qQ), HQ && FQ.files ? VF(FQ.files) : HQ && VF((QQ => ({
                      ...QQ,
                      [Lw.current]: qQ
                    })));
                    const DQ = {
                      doc: qQ,
                      version: oQ,
                      clientID: tQ,
                      docKey: SQ,
                      peers: uQ,
                      editorCount: QQ.editorCount,
                      existingCursors: YQ,
                      httpConfig: eQ
                    };
                    if (aF(DQ), "lobby" === SQ.kind) {
                      var kQ;
                      const QQ = {
                        doc: qQ,
                        version: oQ,
                        clientID: tQ,
                        docKey: SQ,
                        httpConfig: eQ
                      };
                      for (const FQ of [...xw.current]) FQ(QQ);
                      null === (kQ = Aw.current) || void 0 === kQ || kQ.startWhenReady()
                    }
                    FQ.canSeeCode ? (clearTimeout(sF.current), pQ({
                      message: null,
                      type: null
                    })) : function(QQ) {
                      clearTimeout(sF.current), pQ(QQ)
                    }(yo);
                    const vQ = gQ.current;
                    gQ.current = null, HQ && vQ && FQ.files && vQ in FQ.files && vQ !== Lw.current && Rw(vQ)
                  }
                  HQ ? go(Lw.current).then(iQ).catch((QQ => {
                    console.error("[CodeCollab] Failed to fetch lobby code via HTTP", QQ), pw()
                  })) : (0, Gq.postJsonWithMetricsCookiesAndJsonResponse)(`${MQ}/code/get-code-block`, Mq.Tj["get-code-block"].toBuffer({
                    gameNameWithVariation: GQ,
                    lobbyName: cQ,
                    pos: AQ
                  }), {
                    retries: 1
                  }).then(iQ).catch((QQ => {
                    console.error("[CodeCollab] Failed to fetch code block via HTTP", QQ), pw()
                  }))
                } else if (QQ.type === cq.h.Presence) {
                if (!wQ) return;
                const WQ = JSON.parse(QQ.peers);
                aF((FQ => FQ ? {
                  ...FQ,
                  peers: WQ,
                  editorCount: QQ.editorCount
                } : FQ))
              }
            } else {
              var vQ;
              if (!wQ) return;
              LQ && HQ && "keptOpen" === QQ.updates && xQ.l.GA("CodeEditorKeepEdits");
              const RQ = ww.current;
              Fw.current = !1, ww.current = null, aF(null);
              if (!HQ || "close" === QQ.updates) return (0, Xo.j)(), void(LQ && kQ());
              if (!LQ) return;
              const OQ = vw.current,
                sQ = uw.current;
              uw.current = null;
              const rQ = "lobby" === (null === RQ || void 0 === RQ ? void 0 : RQ.kind) && RQ.path === (null === sQ || void 0 === sQ ? void 0 : sQ.fromPath),
                IQ = sQ && (rQ || sQ.toPath in OQ || (0, Cq.f)(sQ.toPath)) ? sQ.toPath : Lw.current in OQ ? Lw.current : null !== (vQ = (0, Cq.b)(OQ)) && void 0 !== vQ ? vQ : pq.i;
              Cw(IQ)
            }
        })), (0, iQ.g)("refetchCode", (() => {
          UQ.featureFlags.canSeePlayerWrittenText && LQ && Fw.current && (eF || (pw(), HQ ? xQ.l.GA("EditLobbyCode", AQ) : xQ.l.GA("EditCodeBlock", {
            pos: AQ,
            canChangePos: MQ.current
          })))
        }));
        const zw = (0, qQ.useCallback)((() => {
            LQ && (lQ(!1), window.open("/docs", "_blank", "popup=yes,width=1200,height=800"))
          }), [LQ]),
          lw = (0, qQ.useCallback)((() => {
            lQ(!1)
          }), []);
        (0, qQ.useEffect)((() => {
          LQ && eF && ("docsButton" === CF && zQ ? (0, vo.f)("docsButton") : CF && vo.j.includes(CF) && !zQ && (lQ(!0), FF(!1)))
        }), [LQ, eF, CF, zQ, FF]);
        const jw = (0, qQ.useCallback)((() => {
          FF(!1)
        }), [FF]);
        (0, qQ.useEffect)((() => {
          LQ && eF && tF && ("aiHelperButton" === WF && QF ? (0, vo.f)("aiHelperButton") : WF && vo.b.includes(WF) && !QF && (FF(!0), lQ(!1)))
        }), [LQ, eF, tF, WF, QF, FF]), (0, qQ.useEffect)((() => {
          if (!LQ || !eF) return;
          const QQ = HQ ? "worldCode" : "codeBlock";
          return (0, vo.C)(QQ, !0), () => {
            (0, vo.C)(QQ, !1)
          }
        }), [LQ, eF, HQ]), (0, qQ.useEffect)((() => {
          if (LQ) return () => {
            RF.current ? RF.current = !1 : (0, vo.y)()
          }
        }), [LQ]), (0, qQ.useEffect)((() => {
          (0, vo.G)("exportButton", !!MF)
        }), [MF]);
        const {
          t: aw
        } = (0, PQ.y)(), Xw = !QF && DF > vF, fw = Xw ? YQ.F : YQ.y, Vw = (0, qQ.useCallback)(((QQ, FQ) => {
          xQ.l.GA("CodeEditorGoToLine", {
            path: QQ,
            line: FQ
          }), Rw(QQ)
        }), [Rw]), hw = (0, qQ.useCallback)((QQ => {
          ew.current = QQ
        }), []), Jw = function(QQ, FQ) {
          const [wQ, LQ] = (0, qQ.useState)(null);
          return (0, qQ.useEffect)((() => {
            if (!FQ) return void LQ(null);
            let wQ = !1;
            return aq(QQ).then((QQ => {
              wQ || LQ(QQ)
            }), (QQ => {
              console.error("[CodeEditor] could not collect the imported plugins", QQ), wQ || LQ(null)
            })), () => {
              wQ = !0
            }
          }), [QQ, FQ]), wQ
        }(XF, LQ);
        (0, qQ.useEffect)((() => {
          Jw && yF && !Jw.includes(yF) && (BF(null), Qw(null), HQ && !Fw.current && Cw(Lw.current))
        }), [yF, Jw, HQ, Cw]), tw.current = {
          collabState: jF,
          ensureJoinedPath: Sw,
          waitForLobbyPath: iw,
          pullLobbyFiles: rw,
          t: aw,
          canEditCode: !!eF
        }, Aw.current || (Aw.current = new nq({
          getLobbyFiles: () => ({
            ...vw.current,
            ...(0, rq.h)(nF.current.assets)
          }),
          deleteSchematic: async QQ => {
            const FQ = await Zq({
              action: "remove",
              path: QQ,
              expectedRevision: nF.current.revision
            });
            gF(FQ)
          },
          getActivePath: () => Lw.current,
          getCollabSnapshot: () => {
            var QQ;
            if (qw.current) return null;
            const FQ = null === (QQ = tw.current) || void 0 === QQ ? void 0 : QQ.collabState;
            return FQ ? {
              doc: FQ.doc,
              version: FQ.version,
              clientID: FQ.clientID,
              docKey: FQ.docKey,
              httpConfig: FQ.httpConfig
            } : null
          },
          replaceActiveDoc: (QQ, FQ) => {
            var wQ, LQ;
            return null !== (wQ = null === (LQ = ew.current) || void 0 === LQ ? void 0 : LQ.call(ew, QQ, FQ)) && void 0 !== wQ && wQ
          },
          ensureJoined: QQ => tw.current.ensureJoinedPath(QQ),
          createFile: (QQ, FQ) => {
            !1 !== (null === FQ || void 0 === FQ ? void 0 : FQ.focus) && (mw.current = QQ), mQ.gameBridge.send("sendCodeCollab", {
              RF: cq.d.CreateFile,
              OF: (0, cq.w)({
                kind: "lobby",
                path: Lw.current
              }),
              SD: QQ
            })
          },
          renameFile: (QQ, FQ) => {
            const wQ = (0, cq.w)({
              kind: "lobby",
              path: Lw.current
            });
            Lw.current === QQ && (uw.current = {
              fromPath: QQ,
              toPath: FQ
            }, ZF(FQ)), mQ.gameBridge.send("sendCodeCollab", {
              RF: cq.d.RenameFile,
              OF: wQ,
              SD: QQ,
              iD: FQ
            })
          },
          deleteFile: QQ => {
            Ww(QQ)
          },
          waitForLobbyPath: (QQ, FQ, wQ) => tw.current.waitForLobbyPath(QQ, FQ, wQ),
          pullLobbyFiles: () => tw.current.pullLobbyFiles(),
          setMessage: (QQ, FQ) => {
            Mw({
              message: QQ,
              type: FQ
            })
          },
          onUnlinked: () => {
            bw(!1)
          },
          t: QQ => tw.current.t(QQ),
          canEditCode: () => tw.current.canEditCode,
          getStorageKey: () => {
            const {
              gameNameWithVariation: QQ,
              lobbyName: FQ
            } = mQ.gameBridge.latest("connectedGame");
            return (0, Xq.e)(QQ, FQ)
          }
        }));
        const Ew = (0, qQ.useCallback)((async QQ => {
            const FQ = Aw.current;
            if (!FQ) return !1;
            try {
              return await FQ.writeLobbyFiles(QQ)
            } catch (wQ) {
              return console.error("World Code AI: couldn't write the change", wQ), !1
            }
          }), []),
          nw = (0, qQ.useCallback)((async QQ => {
            var FQ, wQ;
            const LQ = null === (FQ = QQ.find((QQ => QQ.path === ao.e))) || void 0 === FQ ? void 0 : FQ.text,
              qQ = ww.current;
            return void 0 !== LQ && "codeBlock" === (null === qQ || void 0 === qQ ? void 0 : qQ.kind) && (!(null === (wQ = ew.current) || void 0 === wQ || !wQ.call(ew, (0, cq.w)(qQ), LQ)) && (bQ.current = LQ, HF(LQ), !0))
          }), []),
          gw = (0, qQ.useCallback)((async () => {
            try {
              var QQ, FQ;
              const wQ = await go(pq.i);
              return !1 === wQ.canSeeCode ? null : null !== (QQ = wQ.files) && void 0 !== QQ ? QQ : {
                [pq.i]: null !== (FQ = wQ.code) && void 0 !== FQ ? FQ : ""
              }
            } catch (wQ) {
              return console.error("World Code AI: couldn't read World Code for a code block", wQ), null
            }
          }), []),
          Pw = (0, qQ.useMemo)((() => ({
            [ao.e]: uF
          })), [uF]),
          Zw = (0, qQ.useCallback)(((QQ, FQ) => {
            xQ.l.GA("CodeEditorGoToLine", {
              path: ao.e,
              line: FQ
            })
          }), []);
        (0, qQ.useEffect)((() => {
          QF && LQ && mF(DF)
        }), [QF, LQ, DF]);
        const yw = (0, qQ.useCallback)((() => {
            var QQ, FQ;
            Uw();
            const wQ = (0, UQ.isTouchscreen)() ? "open World Code again" : `press ${null!==(QQ=null===(FQ=hF.u.OpenCodeEditor)||void 0===FQ?void 0:FQ[0])&&void 0!==QQ?QQ:"F8"}`,
              LQ = HQ ? `\ud83e\udd16 Try out your change, then ${wQ} to tell the AI Helper how it went.` : "\ud83e\udd16 Click the code block to try your change, then open it again to tell the AI Helper how it went.";
            xQ.l.GA("chat", {
              content: [{
                str: LQ,
                style: {
                  color: WQ.K.cyanUiText
                }
              }]
            })
          }), [Uw, HQ]),
          Bw = (0, qQ.useCallback)((QQ => {
            const FQ = AQ,
              wQ = MQ.current;
            HQ || !FQ || mQ.gameBridge.lookup("codeBlockClickable", FQ) ? (0, Xo.n)(QQ, {
              submit: () => {
                Uw(), xQ.l.GA("chat", {
                  content: [{
                    str: "\ud83e\udd16 Testing your change. The AI Helper comes back in a moment.",
                    style: {
                      color: WQ.K.cyanUiText
                    }
                  }]
                }), !HQ && FQ && setTimeout((() => {
                  mQ.gameBridge.send("clickCodeBlock", FQ)
                }), 1e3)
              },
              reopen: () => {
                (0, XQ.m)() || (HQ ? xQ.l.GA("EditLobbyCode", FQ) : xQ.l.GA("EditCodeBlock", {
                  pos: FQ,
                  canChangePos: wQ
                }))
              }
            }) : yw()
          }), [Uw, HQ, AQ, yw]),
          dw = (0, qQ.useCallback)((() => {
            FF(!1)
          }), [FF]),
          QL = (0, qQ.useRef)(Iw);
        QL.current = Iw;
        const FL = (0, qQ.useCallback)((function(QQ) {
            let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            xQ.l.GA("WorldCodeAiDraft", {
              text: QQ,
              send: FQ
            }), QL.current(), xQ.l.GA("EditLobbyCode", AQ)
          }), [AQ]),
          wL = (0, qQ.useCallback)((QQ => {
            QL.current(), QQ.codeBlock ? xQ.l.GA("EditCodeBlock", {
              pos: [...QQ.pos],
              canChangePos: QQ.canChangePos
            }) : xQ.l.GA("EditLobbyCode", AQ)
          }), [AQ]);
        (0, iQ.g)("WorldCodeAiDraft", (QQ => {
          HQ && (LF(QQ), FF(!0))
        }));
        const LL = !!eF && !!CF && vo.j.includes(CF),
          qL = !!eF && !!WF && vo.b.includes(WF);
        (0, qQ.useEffect)((() => {
          LQ && QF && tF && !LL && lQ(!1)
        }), [LQ, QF, tF, LL]);
        const oL = (0, qQ.useCallback)((() => {
            FF(!1), lQ(!1)
          }), [FF]),
          {
            nH: DL,
            setWorld: kL,
            toggleWorld: vL
          } = function(QQ) {
            let {
              showAi: FQ,
              showDocs: wQ,
              showChat: LQ,
              hideOtherRightPanels: oQ
            } = QQ;
            const [DQ, kQ] = (0, qQ.useState)("hidden"), vQ = (0, qQ.useRef)(null), mQ = (0, qQ.useCallback)((() => {
              vQ.current = null, kQ((QQ => "hidden" === QQ ? QQ : (0, Ao.d)() ? "hidden" : "shown"))
            }), []);
            (0, qQ.useEffect)((() => {
              (FQ || wQ) && mQ()
            }), [FQ, wQ, mQ]), (0, qQ.useEffect)((() => {
              LQ && mQ()
            }), [LQ, mQ]);
            const uQ = "hidden" !== DQ && (0, Ao.d)();
            (0, qQ.useLayoutEffect)((() => {
              if (uQ) {
                const QQ = document.activeElement;
                QQ instanceof HTMLElement && QQ.closest(".cm-content") && (vQ.current = QQ, QQ.blur())
              } else {
                var QQ;
                null === (QQ = vQ.current) || void 0 === QQ || QQ.focus(), vQ.current = null
              }
            }), [uQ]);
            const HQ = (0, qQ.useCallback)((() => {
              "hidden" === DQ ? (kQ("shown"), (0, Ao.d)() && oQ()) : kQ("hidden")
            }), [DQ, oQ]);
            return {
              nH: DQ,
              setWorld: kQ,
              toggleWorld: HQ
            }
          }({
            showAi: QF,
            showDocs: zQ,
            showChat: jQ,
            hideOtherRightPanels: oL
          }),
          mL = QF && null !== xF && tF,
          uL = (0, qQ.useCallback)((() => {
            LF(null)
          }), []),
          [HL, bL] = (0, qQ.useState)(null);
        (0, iQ.g)("WorldCodeAiSelection", (QQ => {
          LQ && (bL(QQ), FF(!0), lQ(!1))
        }));
        const YL = (0, qQ.useCallback)((() => {
          bL(null)
        }), []);
        (0, iQ.g)("chat", (QQ => {
          let {
            content: FQ
          } = QQ;
          if (!HQ && null === YF.current) return;
          const wQ = Array.isArray(FQ) ? FQ : [FQ],
            LQ = wQ.some((QQ => {
              var FQ;
              return (null === QQ || void 0 === QQ || null === (FQ = QQ.style) || void 0 === FQ ? void 0 : FQ.color) === WQ.K.redUiText
            })),
            qQ = wQ.map((QQ => {
              var FQ;
              const wQ = null !== (FQ = null === QQ || void 0 === QQ ? void 0 : QQ.str) && void 0 !== FQ ? FQ : QQ;
              return "string" === typeof wQ ? wQ : ""
            })).join("");
          LQ && /world code|error/i.test(qQ) && (oF((QQ => [...QQ, qQ].slice(-10))), kF((QQ => QQ + 1)), (0, Xo.g)(qQ))
        })), (0, qQ.useEffect)((() => {
          if (!LQ || !HQ || !Yw) return;
          let QQ = !1;
          return (async (FQ, wQ) => {
            const LQ = await (null === (FQ = Aw.current) || void 0 === FQ ? void 0 : FQ.tryRestoreHandle());
            !QQ && LQ && (bw(!0), null === (wQ = Aw.current) || void 0 === wQ || wQ.startWhenReady())
          })(), () => {
            QQ = !0
          }
        }), [LQ, HQ, Yw]), (0, qQ.useEffect)((() => {
          var QQ;
          LQ || (null === (QQ = Aw.current) || void 0 === QQ || QQ.stopContinuousSync(), pw(!1), OF.current && (OF.current = !1, mQ.gameBridge.send("sendChatMessage", {
            Om: "//export",
            channelName: null
          })))
        }), [LQ, pw]);
        const xL = (0, qQ.useCallback)((async () => {
            if (Yw && Aw.current) try {
              if (!await Aw.current.linkFolder()) return;
              bw(!0), await Aw.current.startWhenReady()
            } catch (QQ) {
              console.error("[WorldCodeDirectorySync] Link failed", QQ), Mw({
                message: aw("codeEditor:directorySyncError"),
                type: "warning"
              })
            }
          }), [Yw, aw]),
          AL = (0, qQ.useCallback)((async () => {
            Aw.current && await Aw.current.unlinkFolder()
          }), []),
          tL = (0, qQ.useCallback)((() => {
            Yw ? Hw ? AL() : xL() : yL.NotificationProvider.showAlertPopup({
              title: "codeEditor:directorySyncUnsupported",
              subtitle: "codeEditor:directorySyncUnsupportedBody",
              confirmText: "general:ok"
            })
          }), [Yw, Hw, xL, AL]),
          eL = HQ && "hidden" !== DL;
        return (0, uQ.jsxs)(DQ.d, {
          className: Gw()("CodeEditorBg", {
            CodeEditorLight: IQ,
            WorldShown: "hidden" !== DL,
            WorldTouchControl: "touchControls" === BQ
          }),
          close: Iw,
          escDoesExit: !0,
          show: LQ,
          togglePointerLock: !1,
          globallyUniqueKey: HQ ? "LobbyCodeEditor" : "CodeBlockEditor",
          children: [(0, uQ.jsx)(ko.c, {
            tutorial: "welcome",
            step: "codeBlockIntro",
            text: aw("codeEditor:tutorialCodeBlockIntro"),
            enabled: !!eF && !HQ
          }), (0, uQ.jsx)(ko.c, {
            tutorial: "welcome",
            step: "worldCodeIntro",
            text: (0, uQ.jsxs)(uQ.Fragment, {
              children: [(0, uQ.jsx)("p", {
                children: aw("codeEditor:tutorialWorldCodeWelcome")
              }), (0, uQ.jsxs)("ul", {
                className: "TutorialStepList",
                children: [(0, uQ.jsx)("li", {
                  children: aw("codeEditor:tutorialWorldCodeUseSetUp")
                }), (0, uQ.jsx)("li", {
                  children: aw("codeEditor:tutorialWorldCodeUseReact")
                }), (0, uQ.jsx)("li", {
                  children: aw("codeEditor:tutorialWorldCodeUseRun")
                })]
              })]
            }),
            enabled: !!eF && HQ
          }), (0, uQ.jsx)("div", {
            className: "CodeEditorTitle",
            children: HQ ? "World Code" : "Code Block"
          }), (0, uQ.jsxs)("div", {
            className: "CodeEditorTopBar",
            children: [(0, uQ.jsxs)("div", {
              className: "CodeEditorTopLeft",
              children: [(0, uQ.jsx)(nQ.f, {
                tooltipInner: aw(MF ? "codeEditor:exportTooltip" : "codeEditor:exportOwnerOnly"),
                delayShow: MF ? void 0 : 0,
                hideTooltip: "exportButton" === GF,
                children: (0, uQ.jsx)(ko.i, {
                  tutorial: "welcome",
                  step: "exportButton",
                  text: aw("codeEditor:tutorialExport"),
                  enabled: !!eF,
                  children: (0, uQ.jsx)(YQ.m, {
                    className: "CodeEditorButton",
                    disabled: !MF,
                    onClick: () => {
                      "exportButton" === GF && ((0, vo.f)("exportButton"), RF.current = !0), OF.current = !0, Iw()
                    },
                    padDestructive: !0,
                    children: aw("codeEditor:exportWorld")
                  })
                })
              }), (0, uQ.jsx)(zo, {
                nH: DL,
                setWorld: kL,
                toggleWorld: vL,
                aiShown: mL,
                closeAi: dw
              })]
            }), (0, uQ.jsxs)("div", {
              className: "CodeEditorTopRight",
              children: [eF && (0, uQ.jsx)(nQ.f, {
                tooltipInner: aw("codeEditor:helpTooltip"),
                hideTooltip: "helpButton" === GF,
                children: (0, uQ.jsx)(ko.i, {
                  tutorial: "welcome",
                  step: "helpButton",
                  text: aw("codeEditor:tutorialHelpButton"),
                  placement: "bottom",
                  children: (0, uQ.jsx)(YQ.f, {
                    className: "CodeEditorHelpButton",
                    ariaLabel: aw("codeEditor:helpTooltip"),
                    onClick: () => {
                      (0, vo.f)("helpButton"), yL.NotificationProvider.showCustomPopup({
                        body: QQ => (0, uQ.jsx)(mo, {
                          close: QQ
                        }),
                        unlockPointerKey: "codeEditorTutorials"
                      })
                    },
                    children: (0, uQ.jsx)("div", {
                      className: "CodeEditorHelpButtonInner",
                      children: (0, uQ.jsx)(tQ.c, {
                        name: "circle-question"
                      })
                    })
                  })
                })
              }), (0, uQ.jsx)(nQ.f, {
                tooltipInner: aw("codeEditor:closeTooltip"),
                children: (0, uQ.jsx)("div", {
                  className: "CodeEditorCloseButtonClickZone",
                  onClick: () => {
                    Iw()
                  },
                  children: (0, uQ.jsx)(YQ.j, {
                    className: "CodeEditorCloseButton"
                  })
                })
              })]
            })]
          }), (0, uQ.jsx)(Wq, {
            peers: null !== (FQ = null === jF || void 0 === jF ? void 0 : jF.peers) && void 0 !== FQ ? FQ : []
          }), (0, uQ.jsxs)("div", {
            className: Gw()("CodeEditorMainArea", {
              WorldCovers: "always" === to(DL),
              WorldCoversWhenNarrow: "narrow" === to(DL)
            }),
            children: [jQ && JQ && (0, uQ.jsx)(Ao.b, {
              side: "left",
              defaultSize: "max(16rem, 24%)",
              onClose: () => {
                fQ(!1)
              },
              children: (0, uQ.jsx)(xo, {
                inputRef: VQ
              })
            }), HQ && (0, uQ.jsx)(Nq, {
              schematics: JF.assets,
              onManageSchematic: QQ => {
                eF && yL.NotificationProvider.showCustomPopup({
                  body: FQ => (0, uQ.jsx)(dq, {
                    initialPath: QQ,
                    onChanged: gF,
                    onClose: FQ
                  }),
                  unlockPointerKey: "worldCodeSchematics"
                })
              },
              files: XF,
              activePath: PF,
              canEdit: !!eF,
              directoryLinked: Hw,
              pluginNames: null !== Jw && void 0 !== Jw ? Jw : Zo,
              activePluginName: yF,
              activePluginFile: dF,
              onSelect: Rw,
              onSelectPlugin: Ow,
              onToggleDirectorySync: tL,
              onCreate: QQ => {
                mw.current = QQ, mQ.gameBridge.send("sendCodeCollab", {
                  RF: cq.d.CreateFile,
                  OF: (0, cq.w)({
                    kind: "lobby",
                    path: Lw.current
                  }),
                  SD: QQ
                })
              },
              onRename: (QQ, FQ) => {
                Lw.current === QQ && (uw.current = {
                  fromPath: QQ,
                  toPath: FQ
                }, ZF(FQ)), mQ.gameBridge.send("sendCodeCollab", {
                  RF: cq.d.RenameFile,
                  OF: (0, cq.w)({
                    kind: "lobby",
                    path: Lw.current
                  }),
                  SD: QQ,
                  iD: FQ
                })
              },
              onRenameFolder: (QQ, FQ) => {
                const [wQ] = (0, Cq.l)([Lw.current], QQ, FQ);
                wQ && (uw.current = {
                  fromPath: wQ[0],
                  toPath: wQ[1]
                }, ZF(wQ[1])), mQ.gameBridge.send("sendCodeCollab", {
                  RF: cq.d.RenameFolder,
                  OF: (0, cq.w)({
                    kind: "lobby",
                    path: Lw.current
                  }),
                  SD: QQ,
                  iD: FQ
                })
              },
              onDelete: Ww
            }), (0, uQ.jsx)("div", {
              className: Gw()("CodeEditorMessage", {
                CodeEditorMessageHidden: !SQ.message,
                CodeEditorMessageSuccess: "success" === SQ.type
              }),
              children: SQ.message && (0, uQ.jsx)("div", {
                className: "CodeEditorMessageText",
                children: SQ.message
              })
            }), (0, uQ.jsx)(qQ.Suspense, {
              fallback: (0, uQ.jsx)("div", {
                className: "CodeEditorContent",
                children: (0, uQ.jsx)(OQ.c, {})
              }),
              children: (0, uQ.jsx)(Vo, {
                isLobbyCode: HQ,
                code: jF ? jF.doc : bQ.current,
                files: HQ ? XF : void 0,
                activePath: HQ ? PF : void 0,
                pluginName: yF,
                pluginFile: dF,
                pluginSource: yF && dF ? null === (wQ = Oq.e[yF]) || void 0 === wQ ? void 0 : wQ.files[dF] : void 0,
                onChange: Kw,
                canEditCode: eF,
                setTemporaryMessage: Mw,
                close: Iw,
                showTooltips: sQ,
                lightMode: IQ,
                collabState: jF,
                setActiveDocReplacer: hw,
                showAiHints: tF && TQ,
                canAiChangeCode: !!eF && (HQ || !!MQ.current),
                onRemoteDocChange: QQ => {
                  var FQ;
                  (bQ.current = QQ, HQ) ? (VF((FQ => ({
                    ...FQ,
                    [Lw.current]: QQ
                  }))), null === (FQ = Aw.current) || void 0 === FQ || FQ.onDocTextChanged(Lw.current, QQ)) : HF(QQ)
                }
              })
            }), (zQ || mL || "hidden" !== DL) && (0, uQ.jsxs)(eo, {
              nH: DL,
              worldPanel: (0, uQ.jsx)(To, {
                shown: DL,
                setShown: kL,
                canInsertCode: !!eF && !yF
              }),
              closeWorld: () => {
                kL("hidden")
              },
              aiShown: mL,
              defaultWidth: zQ ? "40%" : "max(18rem, 36%)",
              children: [zQ && (0, uQ.jsx)(Ao.b, {
                onClose: LL ? void 0 : lw,
                children: (0, uQ.jsx)(qQ.Suspense, {
                  fallback: (0, uQ.jsx)("div", {
                    className: "DocsPanel",
                    children: (0, uQ.jsx)(OQ.c, {})
                  }),
                  children: (0, uQ.jsx)(ho, {
                    popOutDocs: zw,
                    hideDocs: lw,
                    tutorialEnabled: !!eF
                  })
                })
              }), mL && (0, uQ.jsx)(Ao.b, {
                onClose: qL ? void 0 : dw,
                children: (0, uQ.jsx)(qQ.Suspense, {
                  fallback: (0, uQ.jsx)("div", {
                    className: "CodeEditorPanelLoading",
                    children: (0, uQ.jsx)(OQ.c, {})
                  }),
                  children: (0, uQ.jsx)(Jo, {
                    target: xF,
                    chatKey: `${zF.gameNameWithVariation}/${zF.lobbyName}/aiHelper`,
                    historyKey: `${zF.gameNameWithVariation}/${zF.lobbyName}/${xF.key}`,
                    files: xF.codeBlock ? Pw : XF,
                    activePath: xF.codeBlock ? ao.e : PF,
                    canEdit: !!eF && (xF.codeBlock ? !!MQ.current : !yF),
                    isLoaded: null !== jF,
                    errors: qF,
                    errorCount: DF,
                    applyFiles: xF.codeBlock ? nw : Ew,
                    submit: yw,
                    testRun: Bw,
                    close: dw,
                    goToLine: xF.codeBlock ? Zw : Vw,
                    openWorldCode: xF.codeBlock ? FL : void 0,
                    readWorldCode: xF.codeBlock ? gw : void 0,
                    viewChunk: Eo,
                    viewGameState: no,
                    openTarget: eF ? wL : void 0,
                    draft: wF,
                    onDraftUsed: uL,
                    selection: HL,
                    onSelectionUsed: YL
                  }, xF.key)
                })
              })]
            })]
          }), (null === ow || void 0 === ow ? void 0 : ow.fallback) && (0, uQ.jsx)(Fo, {
            fallback: ow.fallback,
            onGoToLine: Vw
          }), (0, uQ.jsxs)("div", {
            className: "CodeEditorButtons",
            "data-pad-hint-bar-avoid": !0,
            children: [(0, uQ.jsx)(nQ.f, {
              tooltipInner: aw(IQ ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
              placement: "top",
              children: (0, uQ.jsx)(YQ.f, {
                className: "CodeEditorButton CodeEditorThemeButton",
                ariaLabel: aw(IQ ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
                onClick: () => {
                  NQ(!IQ)
                },
                children: (0, uQ.jsx)(tQ.c, {
                  name: IQ ? "moon" : "sun-bright"
                })
              })
            }), (0, uQ.jsx)(nQ.f, {
              tooltipInner: aw(eL ? "codeEditorWorld:submitCodeTooltip" : "codeEditor:submitCodeTooltip"),
              placement: "top",
              children: (0, uQ.jsx)(YQ.m, {
                className: "CodeEditorButton",
                onClick: () => {
                  Uw(eL)
                },
                padDefaultFocus: !0,
                children: aw("codeEditor:submitCode")
              })
            }), (0, uQ.jsx)(nQ.f, {
              tooltipInner: aw(zQ ? "codeEditor:hideDocsTooltip" : "codeEditor:showDocsTooltip"),
              placement: "top",
              hideTooltip: "docsButton" === CF || "hideDocsButton" === CF,
              children: (0, uQ.jsx)(ko.i, {
                tutorial: cF,
                step: zQ ? "hideDocsButton" : "docsButton",
                text: aw(zQ ? "codeEditor:tutorialHideDocs" : "codeEditor:tutorialDocs"),
                enabled: !!eF,
                placement: "top",
                waitForClick: !0,
                onPrevious: zQ && "welcome" === cF ? lw : void 0,
                children: (0, uQ.jsx)(YQ.y, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    (0, vo.f)(zQ ? "hideDocsButton" : "docsButton"), lQ(!zQ), FF(!1)
                  },
                  children: aw(zQ ? "codeEditor:hideDocs" : "codeEditor:showDocs")
                })
              })
            }), tF && (0, uQ.jsx)(ko.i, {
              tutorial: iF,
              step: QF ? "hideAiHelperButton" : "aiHelperButton",
              text: aw(QF ? "codeEditorAiTutorial:hideAiHelperButton" : "welcome" === iF ? "codeEditorAiTutorial:welcomeAiHelperButton" : "codeEditorAiTutorial:aiHelperButton"),
              enabled: !!eF,
              placement: "top",
              waitForClick: !0,
              onPrevious: QF && "welcome" === iF ? jw : void 0,
              children: (0, uQ.jsx)(fw, {
                className: "CodeEditorButton",
                onClick: () => {
                  (0, vo.f)(QF ? "hideAiHelperButton" : "aiHelperButton"), FF(!QF), lQ(!1)
                },
                children: QF ? "Hide AI Helper" : Xw ? "Fix error with AI" : "AI Helper"
              })
            }), JQ && (0, uQ.jsx)(nQ.f, {
              tooltipInner: aw(jQ ? "codeEditorChat:hideChatTooltip" : "codeEditorChat:showChatTooltip"),
              placement: "top",
              children: (0, uQ.jsx)(YQ.y, {
                className: "CodeEditorButton",
                onClick: () => {
                  hQ.current = !jQ, fQ(!jQ)
                },
                children: aw(jQ ? "codeEditorChat:hideChat" : "codeEditorChat:showChat")
              })
            }), (0, uQ.jsx)(nQ.f, {
              tooltipInner: aw("hidden" === DL ? "codeEditorWorld:showWorldTooltip" : "codeEditorWorld:hideWorldTooltip"),
              placement: "top",
              children: (0, uQ.jsx)(YQ.y, {
                className: "CodeEditorButton CodeEditorWorldButton",
                onClick: vL,
                children: aw("hidden" === DL ? "codeEditorWorld:showWorld" : "codeEditorWorld:hideWorld")
              })
            }), (0, uQ.jsx)(nQ.f, {
              tooltipInner: aw("codeEditor:formatCodeTooltip"),
              placement: "top",
              children: (0, uQ.jsx)(YQ.f, {
                className: "CodeEditorButton",
                onClick: () => {
                  xQ.l.GA("FormatCode")
                },
                children: aw("codeEditor:formatCode")
              })
            }), (0, uQ.jsx)(nQ.f, {
              tooltipInner: aw("codeEditor:copyCodeTooltip"),
              placement: "top",
              children: (0, uQ.jsx)(YQ.f, {
                className: "CodeEditorButton",
                onClick: () => {
                  navigator.clipboard.writeText(bQ.current).then((() => {
                    Mw({
                      message: "Successfully copied code to clipboard",
                      type: "success"
                    })
                  })).catch((() => {
                    Mw({
                      message: "Failed to copy code to clipboard",
                      type: "warning"
                    })
                  }))
                },
                children: aw("codeEditor:copyCode")
              })
            }), (0, uQ.jsx)(nQ.f, {
              tooltipInner: aw(sQ ? "codeEditor:hideTooltipsTooltip" : "codeEditor:showTooltipsTooltip"),
              placement: "top",
              children: (0, uQ.jsx)(YQ.f, {
                className: "CodeEditorButton",
                onClick: () => {
                  rQ(!sQ)
                },
                children: aw(sQ ? "codeEditor:hideTooltips" : "codeEditor:showTooltips")
              })
            }), !HQ && (0, uQ.jsx)(nQ.f, {
              tooltipInner: aw("codeEditor:worldCodeTooltip"),
              placement: "top",
              hideTooltip: "worldCodeButton" === GF,
              children: (0, uQ.jsx)(ko.i, {
                tutorial: "welcome",
                step: "worldCodeButton",
                text: aw("codeEditor:tutorialWorldCodeButton"),
                enabled: !!eF,
                placement: "top",
                waitForClick: !0,
                children: (0, uQ.jsx)(YQ.y, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    "worldCodeButton" === GF && ((0, vo.f)("worldCodeButton"), RF.current = !0), Iw(), xQ.l.GA("EditLobbyCode", AQ)
                  },
                  children: aw("codeEditor:worldCode")
                })
              })
            }), (lF || Dw || tF) && (0, uQ.jsx)(nQ.f, {
              tooltipInner: aw("codeEditor:moreOptionsTooltip"),
              placement: "top",
              children: (0, uQ.jsx)(YQ.f, {
                className: "CodeEditorButton CodeEditorMoreButton",
                onClick: () => {
                  NF(!0)
                },
                children: (0, uQ.jsx)(tQ.c, {
                  name: "ellipsis"
                })
              })
            })]
          }), UF && (0, uQ.jsx)(dL.e, {
            middleScreenPopupContainerClassName: "CodeEditorMoreOptionsPopup",
            close: () => {
              NF(!1)
            },
            body: (0, uQ.jsx)(Do, {
              engine: Dw,
              onSetEngine: Tw,
              aiHints: tF ? {
                shown: TQ,
                setShown: KQ
              } : null,
              variation: lF ? {
                name: rF,
                setName: IF,
                reload: Nw
              } : null
            })
          })]
        })
      })),
      QD = new Set(["makeReport", "makeDiscordReport", "inviteLink"]);

    function FD(QQ) {
      return "inventory" === QQ
    }
    const wD = (0, qQ.memo)((function() {
      const {
        openEverythingMenuName: QQ,
        openInGameMenuName: FQ
      } = (0, aQ.l)(["openEverythingMenuName", "openInGameMenuName"]), wQ = (0, RQ.k)("fullInventory"), oQ = (0, qQ.useRef)(null), DQ = (0, rF.n)();
      (0, iQ.g)("toggleMenu", (QQ => {
        var FQ;
        if (!DQ.shown) return;
        const wQ = aQ.c.get("openInGameMenuName");
        let LQ = QQ.split("|")[0];
        const qQ = null !== (FQ = QQ.split("|")[1]) && void 0 !== FQ ? FQ : null;
        ("closeCurrentMenu" === qQ && wQ || LQ === wQ) && (oQ.current = null, LQ = null);
        const kQ = "closeCurrentMenu" === qQ ? null : qQ;
        oQ.current !== kQ && (oQ.current = kQ), null !== LQ && (0, kq.n)(kq.d, {
          keepsMovement: FD(LQ)
        }), aQ.c.set({
          openInGameMenuName: LQ
        })
      }));
      const kQ = (0, qQ.useCallback)((QQ => () => {
          xQ.l.GA("toggleMenu", QQ)
        }), []),
        vQ = (0, qQ.useRef)({
          cantCrouchIfNotFullscreen: kQ("cantCrouchIfNotFullscreen"),
          makeReport: kQ("makeReport"),
          makeDiscordReport: kQ("makeDiscordReport"),
          editBook: kQ("editBook"),
          editNameTag: kQ("editNameTag"),
          inventory: kQ("inventory"),
          inviteLink: kQ("inviteLink"),
          writeOnBoard: kQ("writeOnBoard"),
          codeEditor: kQ("codeEditor"),
          lobbyCodeEditor: kQ("lobbyCodeEditor"),
          customLobbyBlockEditor: kQ("customLobbyBlockEditor"),
          ironChestPasskeyInput: kQ("ironChestPasskeyInput"),
          petUi: kQ("petUi")
        }),
        mQ = (0, qQ.useCallback)((() => {
          aQ.c.set({
            openInGameMenuName: null
          })
        }), []),
        HQ = (0, qQ.useRef)(null);
      return (0, qQ.useEffect)((() => {
        if (FQ) {
          var QQ;
          (0, kq.n)(kq.d, {
            keepsMovement: FD(FQ)
          }), HQ.current = QD.has(FQ) ? null !== (QQ = aQ.c.get("openEverythingMenuName")) && void 0 !== QQ ? QQ : HQ.current : null, aQ.c.set({
            openEverythingMenuName: null
          })
        } else {
          const QQ = HQ.current;
          HQ.current = null, null !== QQ && null === aQ.c.get("openEverythingMenuName") && aQ.c.set({
            openEverythingMenuName: QQ
          }), oQ.current = null, (0, kq.l)(kq.d)
        }
      }), [FQ]), (0, qQ.useEffect)((() => {
        null !== QQ && mQ()
      }), [QQ, mQ]), (0, uQ.jsxs)(uQ.Fragment, {
        children: [(0, uQ.jsx)(LQ.g, {
          show: "clientGame" === FQ
        }), (0, uQ.jsx)(gL, {
          show: "cantCrouchIfNotFullscreen" === FQ,
          onOpen: vQ.current.cantCrouchIfNotFullscreen,
          onClose: mQ
        }), (0, uQ.jsx)(qq, {
          show: "makeReport" === FQ,
          onOpen: vQ.current.makeReport,
          onClose: mQ
        }), (0, uQ.jsx)(Dq, {
          show: "makeDiscordReport" === FQ,
          onOpen: vQ.current.makeDiscordReport,
          onClose: mQ
        }), (0, uQ.jsx)(Fw, {
          show: "editBook" === FQ,
          onOpen: vQ.current.editBook,
          onClose: mQ
        }), (0, uQ.jsx)(dF, {
          show: "editNameTag" === FQ,
          onOpen: vQ.current.editNameTag,
          onClose: mQ
        }), wQ && (0, uQ.jsx)(JL, {
          show: "inventory" === FQ,
          onOpen: vQ.current.inventory,
          onClose: mQ,
          variation: oQ.current
        }), (0, uQ.jsx)(IF, {
          show: "inviteLink" === FQ,
          onClose: mQ,
          option: oQ.current
        }), (0, uQ.jsx)(KQ, {
          show: "retentionFeatures" === FQ,
          onClose: mQ
        }), (0, uQ.jsx)(BF, {
          show: "writeOnBoard" === FQ,
          onOpen: vQ.current.writeOnBoard,
          onClose: mQ
        }), (0, uQ.jsx)(Bo, {
          show: "lobbyCodeEditor" === FQ,
          onOpen: vQ.current.lobbyCodeEditor,
          onClose: mQ,
          isLobbyCode: !0
        }), (0, uQ.jsx)(Bo, {
          show: "codeEditor" === FQ,
          onOpen: vQ.current.codeEditor,
          onClose: mQ,
          isLobbyCode: !1
        }), (0, uQ.jsx)(mq, {
          show: "customLobbyBlockEditor" === FQ,
          onOpen: vQ.current.customLobbyBlockEditor,
          onClose: mQ
        }), (0, uQ.jsx)(Cw, {
          show: "ironChestPasskeyInput" === FQ,
          onOpen: vQ.current.ironChestPasskeyInput,
          onClose: mQ
        }), (0, uQ.jsx)(Aq, {
          togglePointerLock: !0,
          show: "petUi" === FQ,
          onOpen: vQ.current.petUi,
          onClose: mQ
        })]
      })
    }))
  },
  36131: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => vD
    });
    wQ(36137);
    var LQ = wQ(53),
      qQ = wQ(1070),
      oQ = wQ.n(qQ),
      DQ = wQ(3599),
      kQ = wQ(1447),
      vQ = wQ(1873),
      mQ = wQ(1107);

    function uQ() {
      const QQ = 2e3,
        [FQ, wQ] = (0, LQ.useState)(null),
        [qQ, uQ] = (0, LQ.useState)(null),
        HQ = (0, LQ.useRef)(null);
      (0, kQ.g)("showBottomMessage", (FQ => {
        let {
          message: wQ,
          timeoutLength: LQ = QQ,
          type: qQ
        } = FQ;
        uQ({
          message: wQ,
          type: qQ
        }), clearTimeout(HQ.current), HQ.current = setTimeout((() => {
          uQ(null)
        }), LQ)
      })), (0, kQ.g)("showPermanentBottomMessage", (QQ => {
        wQ(QQ)
      })), (0, LQ.useEffect)((() => ((0, DQ.d)((() => {
        wQ(null)
      })), () => {
        clearTimeout(HQ.current)
      })), []);
      const bQ = qQ || FQ;
      return bQ ? (0, mQ.jsx)("div", {
        className: oQ()("BottomScreenMessage", bQ.type),
        children: (0, mQ.jsx)(vQ.e, {
          text: bQ.message
        })
      }) : null
    }
    var HQ = wQ(2276),
      bQ = wQ(1897),
      YQ = wQ(1503),
      xQ = wQ(2349);

    function AQ() {
      let QQ;
      const FQ = () => {
          clearTimeout(QQ), QQ = setTimeout((() => {
            bQ.gameBridge.latest("connectedGame").replay || (bQ.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, YQ.navigatePreserveSearch)("/"))
          }), 3e5)
        },
        wQ = () => {
          clearTimeout(QQ)
        };
      return window.addEventListener("focus", wQ), window.addEventListener("blur", FQ), () => {
        window.removeEventListener("blur", FQ), window.removeEventListener("focus", wQ), clearTimeout(QQ)
      }
    }
    var tQ = wQ(1140),
      eQ = wQ(3002),
      MQ = wQ(307),
      GQ = wQ(2345),
      pQ = wQ(22),
      cQ = wQ(1911),
      CQ = wQ(27),
      SQ = wQ(1927),
      iQ = wQ(17),
      WQ = wQ(1933),
      RQ = wQ(1395),
      OQ = wQ(8590),
      sQ = wQ(1964),
      rQ = wQ(1207);
    const IQ = (0, LQ.memo)((function() {
      const {
        isTouchScreen: QQ,
        loadingOverlayVisible: FQ,
        openInGameMenuName: wQ,
        openEverythingMenuName: qQ
      } = (0, iQ.l)(["isTouchScreen", "loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]), DQ = (0, RQ.n)();
      (0, eQ.b)();
      const kQ = (0, GQ.l)("showBasicMovementControls"),
        [vQ, uQ] = (0, LQ.useState)("movement"),
        HQ = "movement" === vQ,
        bQ = DQ && !1 !== kQ;
      (0, LQ.useEffect)((() => {
        "padActions" !== vQ || bQ || uQ("done")
      }), [vQ, bQ]);
      const YQ = FQ || null !== wQ || null !== qQ,
        xQ = (0, LQ.useRef)({
          step: vQ,
          ms: 0
        });
      return (0, LQ.useEffect)((() => {
        if (YQ || "done" === vQ) return;
        xQ.current.step !== vQ && (xQ.current = {
          step: vQ,
          ms: 0
        });
        const QQ = xQ.current,
          FQ = performance.now(),
          wQ = setTimeout((() => {
            uQ("movement" === vQ && (0, RQ.d)() ? "padActions" : "done")
          }), 7e3 - QQ.ms);
        return () => {
          clearTimeout(wQ), QQ.ms += performance.now() - FQ
        }
      }), [YQ, vQ]), CQ.i.getItem(MQ.Gb) > 2 ? (0, mQ.jsx)(KQ, {
        showingMovementControls: !1
      }) : (0, mQ.jsxs)(mQ.Fragment, {
        children: [QQ && !DQ || !HQ || !1 === kQ ? null : (0, mQ.jsxs)("div", {
          className: oQ()("ControlsTutorialDiv", {
            Covered: YQ
          }),
          children: [(0, mQ.jsx)(UQ, {}), (0, mQ.jsx)(TQ, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, mQ.jsx)(TQ, {
            header: "Jump",
            noaAction: "jump"
          })]
        }), "padActions" === vQ && bQ && (0, mQ.jsx)(NQ, {
          covered: YQ
        }), (0, mQ.jsx)(KQ, {
          showingMovementControls: "done" !== vQ
        })]
      })
    }));

    function UQ() {
      const QQ = (0, RQ.n)();
      return (0, mQ.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, mQ.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), QQ && (0, mQ.jsx)(WQ.e, {
          noaAction: "forward"
        }), !QQ && (0, mQ.jsxs)(mQ.Fragment, {
          children: [(0, mQ.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, mQ.jsx)(WQ.e, {
              noaAction: "forward"
            })
          }), (0, mQ.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, mQ.jsx)(WQ.e, {
              noaAction: "left"
            }), (0, mQ.jsx)(WQ.e, {
              noaAction: "backward"
            }), (0, mQ.jsx)(WQ.e, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function NQ(QQ) {
      let {
        covered: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, rQ.y)(), LQ = (0, GQ.l)("useInventory");
      return (0, mQ.jsxs)("div", {
        className: oQ()("ControlsTutorialDiv", {
          Covered: FQ
        }),
        children: [(0, mQ.jsx)(TQ, {
          header: wQ("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, mQ.jsx)(TQ, {
          header: wQ("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== LQ && (0, mQ.jsx)(TQ, {
          header: wQ("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, mQ.jsx)(TQ, {
          header: wQ("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function TQ(QQ) {
      let {
        header: FQ,
        noaAction: wQ
      } = QQ;
      return (0, mQ.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, mQ.jsx)("div", {
          className: "KeyHeader",
          children: FQ
        }), (0, mQ.jsx)(WQ.e, {
          noaAction: wQ
        })]
      })
    }

    function KQ(QQ) {
      let {
        showingMovementControls: FQ
      } = QQ;
      const {
        isTouchScreen: wQ
      } = (0, iQ.l)(["isTouchScreen"]), qQ = (0, RQ.n)(), oQ = (0, sQ.b)("OpenShop"), [DQ, kQ] = (0, LQ.useState)(!1), vQ = `SeenShopControls|${(0,SQ.g)("connectedGame",(QQ=>QQ.gameNameWithVariation))}`, uQ = () => (!(0, RQ.d)() || null !== (0, OQ.c)("OpenShop")) && !CQ.i.getItem(vQ) && cQ.b.get("shopInfo") && !FQ, HQ = () => (kQ(!0), CQ.i.setItem(vQ, !0), (0, RQ.d)() || pQ.l.GA("showShopTouchTutorial"), setTimeout((() => {
        kQ(!1)
      }), 7e3));
      (0, LQ.useEffect)((() => {
        let QQ;
        const FQ = pQ.l.subscribe("showShopTutorial", (() => {
          uQ() && (QQ = HQ())
        }));
        return () => {
          clearTimeout(QQ), pQ.l.unsubscribe(FQ)
        }
      }), [FQ]);
      const bQ = (0, LQ.useRef)();
      return (0, GQ.h)("currencyAmounts", (QQ => {
        if (uQ()) {
          let wQ = !1;
          const LQ = cQ.b.get("shopInfo");
          for (const qQ in LQ) {
            for (const oQ in LQ[qQ].items) {
              var FQ;
              const DQ = LQ[qQ].items[oQ];
              if (void 0 !== DQ.currency && QQ[DQ.currency] && DQ.cost <= QQ[DQ.currency].amount && (null === (FQ = DQ.hidden) || void 0 === FQ || !FQ)) {
                wQ = !0;
                break
              }
            }
            if (wQ) break
          }
          wQ && (bQ.current = HQ())
        }
      })), (0, LQ.useEffect)((() => () => {
        clearTimeout(bQ.current)
      }), [FQ]), !DQ || qQ && !oQ ? null : (0, mQ.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: wQ && !qQ ? null : (0, mQ.jsx)(TQ, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
    var zQ = wQ(1367),
      lQ = wQ(1079);
    const jQ = (0, LQ.memo)((function() {
      return (0, eQ.b)(), (0, mQ.jsx)(aQ, {})
    }));
    class aQ extends LQ.Component {
      constructor(QQ) {
        super(QQ), this.showQueue = [], this.slideDuration = 1, this.state = {
          showQueue: [],
          currState: null
        }, this.currMessage = null, this.justShowed = !1
      }
      componentDidMount() {
        this.sub = pQ.l.subscribe("TopRightHelper", (QQ => {
          this.showQueue.push(QQ), this.setState({
            showQueue: this.showQueue
          })
        }))
      }
      componentWillUnmount() {
        pQ.l.unsubscribe(this.sub), clearTimeout(this.slideOutTimeout), clearTimeout(this.hidingMessageTimeout)
      }
      componentDidUpdate(QQ, FQ) {
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
        let QQ, FQ, wQ, LQ, qQ, oQ = !0;
        if (this.state.showQueue.length > 0 && null === this.state.currState ? (this.currMessage = this.state.showQueue[0], this.justShowed = !0, QQ = "slideIn") : "slideOut" === this.state.currState ? QQ = "slideOut" : null === this.currMessage && (oQ = !1), this.currMessage) {
          const oQ = this.currMessage.color || "rgb(102, 102, 102)";
          FQ = {
            width: this.currMessage.width || "250px",
            height: this.currMessage.height || "70px",
            animation: "1s " + ("slideOut" === QQ ? "HelperSlideKeyFrameReverse" : "HelperSlideKeyFrame")
          }, wQ = {
            backgroundColor: oQ
          }, LQ = {
            animation: "2s " + ("slideOut" === QQ ? "CloseNotification" : "ExpandNotification")
          }, qQ = {
            fontSize: this.currMessage.fontSize || "16px",
            animation: "2s " + ("slideOut" === QQ ? "textDisappear" : "textAppear")
          }
        }
        return oQ ? (0, mQ.jsxs)("div", {
          className: "TopRightHelperBox",
          style: {
            ...FQ
          },
          children: [(0, mQ.jsx)("div", {
            className: "LeftSide",
            style: wQ,
            children: (0, mQ.jsx)(lQ.c, {
              name: this.currMessage.icon,
              className: `fa-${this.currMessage.iconSizeMult||3}x HelperIcon`
            })
          }), (0, mQ.jsx)("div", {
            className: "RightSide",
            style: LQ,
            children: (0, mQ.jsx)("div", {
              className: "HelperText",
              style: qQ,
              children: this.currMessage.text
            })
          })]
        }) : null
      }
    }
    var XQ = wQ(36141),
      fQ = wQ(1407);
    const VQ = (0, fQ.e)((QQ => QQ.PadSneakChip));

    function hQ(QQ) {
      const [FQ, wQ, LQ] = function(QQ) {
        const FQ = parseInt(QQ.substring(1), 16),
          wQ = (FQ >> 16) / 255,
          LQ = (FQ >> 8 & 255) / 255,
          qQ = (255 & FQ) / 255,
          oQ = Math.max(wQ, LQ, qQ),
          DQ = Math.min(wQ, LQ, qQ),
          kQ = (oQ + DQ) / 2,
          vQ = oQ - DQ;
        if (0 === vQ) return [0, 0, kQ];
        const mQ = vQ / (1 - Math.abs(2 * kQ - 1));
        let uQ;
        uQ = oQ === wQ ? (LQ - qQ) / vQ % 6 : oQ === LQ ? (qQ - wQ) / vQ + 2 : (wQ - LQ) / vQ + 4;
        return [(60 * uQ + 360) % 360, mQ, kQ]
      }(QQ), qQ = 0 === wQ ? 0 : Math.min(.6, wQ + .03), oQ = LQ > .5 ? -1 : 1, DQ = JQ(LQ + .09 * oQ);
      return {
        panel: QQ,
        slot: EQ(FQ, qQ, DQ),
        slotSelected: EQ(FQ, qQ, JQ(DQ + .2 * oQ)),
        slotUnavailable: EQ(FQ, qQ, JQ(LQ + -.1 * oQ))
      }
    }

    function JQ(QQ) {
      return Math.min(1, Math.max(0, QQ))
    }

    function EQ(QQ, FQ, wQ) {
      const LQ = (1 - Math.abs(2 * wQ - 1)) * FQ,
        qQ = LQ * (1 - Math.abs(QQ / 60 % 2 - 1)),
        oQ = wQ - LQ / 2;
      let DQ;
      return DQ = QQ < 60 ? [LQ, qQ, 0] : QQ < 120 ? [qQ, LQ, 0] : QQ < 180 ? [0, LQ, qQ] : QQ < 240 ? [0, qQ, LQ] : QQ < 300 ? [qQ, 0, LQ] : [LQ, 0, qQ], "#" + DQ.map((QQ => function(QQ) {
        return Math.round(255 * QQ).toString(16).padStart(2, "0")
      }(QQ + oQ))).join("")
    }
    var nQ = wQ(36164),
      gQ = wQ(4159),
      PQ = wQ(2313),
      ZQ = wQ(2320),
      yQ = wQ(36224),
      BQ = wQ(4657),
      dQ = wQ(1464),
      QF = wQ(619);

    function FF(QQ, FQ, wQ, LQ) {
      QQ.style.display = "";
      const qQ = QQ.offsetWidth,
        oQ = QQ.offsetHeight,
        DQ = Math.min(Math.max((FQ.left + FQ.right) / 2 - qQ / 2, 8), window.innerWidth - 8 - qQ);
      let kQ = FQ.top - wQ - oQ;
      const vQ = [...LQ].sort(((QQ, FQ) => FQ.top - QQ.top));
      for (const mQ of vQ) DQ < mQ.right && DQ + qQ > mQ.left && kQ < mQ.bottom && kQ + oQ > mQ.top && (kQ = mQ.top - 8 - oQ);
      return kQ < 8 ? (QQ.style.display = "none", null) : (QQ.style.transform = `translate(${DQ-FQ.left}px, ${kQ-FQ.top}px)`, {
        left: DQ,
        top: kQ,
        right: DQ + qQ,
        bottom: kQ + oQ
      })
    }

    function wF(QQ) {
      const FQ = [];
      for (const wQ of document.querySelectorAll(QQ)) {
        const QQ = wQ.getBoundingClientRect();
        QQ.width > 0 && "visible" === getComputedStyle(wQ).visibility && FQ.push(QQ)
      }
      return FQ
    }

    function LF(QQ, FQ) {
      return QQ.clientX >= FQ.left - 8 && QQ.clientX <= FQ.right + 8 && QQ.clientY >= FQ.top - 8 && QQ.clientY <= FQ.bottom + 8
    }
    var qF = wQ(8644);
    class oF {
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
      hold(QQ, FQ) {
        this.suspended || (this.offered ? FQ || this.setPhase("idle") : QQ && "idle" === this.phase ? (this.setPhase("charging"), this.armTimer = setTimeout((() => {
          this.armTimer = null, this.onArm(), this.setPhase("armed")
        }), 1e3)) : QQ || "charging" !== this.phase || this.setPhase("idle"))
      }
      onArm() {}
      setPhase(QQ) {
        null !== this.armTimer && (clearTimeout(this.armTimer), this.armTimer = null);
        const FQ = this.phase;
        this.phase = QQ, this.deps.onPhase(QQ, FQ)
      }
    }
    const DF = 25 * Math.PI / 180,
      kF = 45 * Math.PI / 180;
    class vF extends oF {
      constructor() {
        super(...arguments), this.speed = 0, this.armedSpeed = 0
      }
      get lockedSpeed() {
        return this.armedSpeed
      }
      move(QQ, FQ, wQ) {
        this.speed = wQ;
        const LQ = Math.hypot(QQ, FQ),
          qQ = LQ > 0 ? Math.acos(Math.min(1, -FQ / LQ)) : Math.PI;
        this.hold(LQ >= .8 && qQ <= DF, LQ >= .5 && qQ <= kF)
      }
      onArm() {
        this.armedSpeed = this.speed
      }
    }
    var mF = wQ(1302);

    function uF(QQ, FQ) {
      const wQ = (0, LQ.useRef)(null),
        qQ = (0, LQ.useRef)(FQ);
      return qQ.current = FQ, (0, LQ.useEffect)((() => {
        if (!QQ) return;
        const {
          create: FQ,
          elementRef: LQ,
          ringRef: oQ,
          classPrefix: DQ,
          keptBehindMovementPanels: kQ,
          resizeEnds: vQ
        } = qQ.current, mQ = {
          charging: `${DQ}Charging`,
          armed: `${DQ}Armed`,
          ready: `${DQ}Ready`,
          locked: `${DQ}Locked`
        };
        let uQ = null;
        const HQ = FQ({
          onPhase: (QQ, FQ) => {
            const wQ = LQ.current;
            if (null !== wQ) {
              for (const [FQ, LQ] of Object.entries(mQ)) wQ.classList.toggle(LQ, FQ === QQ);
              if ("charging" === QQ) uQ = oQ.current.animate([{
                strokeDashoffset: 1
              }, {
                strokeDashoffset: 0
              }], {
                delay: 400,
                duration: 600,
                fill: "forwards"
              });
              else if ("idle" === QQ) {
                var DQ;
                null === (DQ = uQ) || void 0 === DQ || DQ.cancel(), uQ = null
              }
              var kQ, vQ;
              if ("armed" === QQ && "charging" === FQ && qQ.current.onArmed(), "ready" === QQ && qF.f.play("lockReady"), "locked" === QQ) qF.f.play("lockLocked"), null === (kQ = (vQ = qQ.current).onLocked) || void 0 === kQ || kQ.call(vQ);
              "locked" === FQ && qQ.current.onUnlocked()
            }
          }
        });
        wQ.current = HQ;
        const bQ = () => {
            HQ.suspend()
          },
          YQ = () => {
            "hidden" === document.visibilityState && bQ()
          },
          xQ = () => {
            vQ ? HQ.suspend() : HQ.suspendArming()
          },
          AQ = (0, mF.j)((QQ => {
            let {
              keepsMovement: FQ
            } = QQ;
            FQ && kQ ? HQ.suspendArming() : bQ()
          }));
        return document.addEventListener("visibilitychange", YQ), window.addEventListener("blur", bQ), window.addEventListener("resize", xQ), () => {
          AQ(), document.removeEventListener("visibilitychange", YQ), window.removeEventListener("blur", bQ), window.removeEventListener("resize", xQ), HQ.cancel(), wQ.current = null
        }
      }), [QQ]), (0, SQ.d)("localPlayerAliveSet", (() => {
        var QQ;
        null === (QQ = wQ.current) || void 0 === QQ || QQ.suspend()
      })), wQ
    }
    var HF = wQ(2381),
      bF = wQ(2403),
      YF = wQ(1130),
      xF = wQ(3268),
      AF = wQ(2407);

    function tF(QQ, FQ, wQ) {
      const LQ = function(QQ, FQ, wQ) {
        const LQ = wQ.map((wQ => ({
            left: Math.max(0, wQ.left),
            top: Math.max(0, wQ.top),
            right: Math.min(QQ, wQ.right),
            bottom: Math.min(FQ, wQ.bottom)
          }))).filter((QQ => QQ.right > QQ.left && QQ.bottom > QQ.top)),
          qQ = [...new Set([0, FQ, ...LQ.flatMap((QQ => [QQ.top, QQ.bottom]))])].sort(((QQ, FQ) => QQ - FQ)),
          oQ = [];
        for (let DQ = 0; DQ < qQ.length - 1; DQ++) {
          const FQ = qQ[DQ],
            wQ = qQ[DQ + 1],
            kQ = LQ.filter((QQ => QQ.top <= FQ && QQ.bottom >= wQ)).map((QQ => [QQ.left, QQ.right])).sort(((QQ, FQ) => QQ[0] - FQ[0]));
          let vQ = 0;
          for (const [QQ, LQ] of kQ) QQ > vQ && oQ.push({
            left: vQ,
            top: FQ,
            right: QQ,
            bottom: wQ
          }), vQ = Math.max(vQ, LQ);
          vQ < QQ && oQ.push({
            left: vQ,
            top: FQ,
            right: QQ,
            bottom: wQ
          })
        }
        return oQ
      }(QQ, FQ, wQ);
      if (0 === LQ.length) return 'path("M0 0Z")';
      if (1 === LQ.length && 0 === LQ[0].left && 0 === LQ[0].top && LQ[0].right === QQ && LQ[0].bottom === FQ) return "";
      const qQ = QQ => Math.round(10 * QQ) / 10;
      return `path("${LQ.map((QQ=>`M${qQ(QQ.left)} ${qQ(QQ.top)}H${qQ(QQ.right)}V${qQ(QQ.bottom)}H${qQ(QQ.left)}Z`)).join("")}")`
    }

    function eF(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16;
      const qQ = [],
        oQ = 2 * wQ / LQ;
      for (let DQ = 0; DQ < LQ; DQ++) {
        const LQ = FQ - wQ + DQ * oQ,
          kQ = LQ + oQ,
          vQ = Math.min(Math.max(FQ, LQ), kQ) - FQ,
          mQ = Math.sqrt(Math.max(0, wQ * wQ - vQ * vQ));
        qQ.push({
          left: QQ - mQ,
          top: LQ,
          right: QQ + mQ,
          bottom: kQ
        })
      }
      return qQ
    }
    var MF = wQ(8651),
      GF = wQ(36198);

    function pF(QQ) {
      const FQ = QQ.getBoundingClientRect(),
        wQ = {
          left: FQ.left,
          top: FQ.top,
          right: FQ.right,
          bottom: FQ.bottom
        },
        LQ = (0, yQ.g)(QQ);
      if (LQ.whole) return [wQ];
      const qQ = function(QQ) {
          const FQ = QQ.right - QQ.left,
            wQ = QQ.bottom - QQ.top,
            LQ = Math.min(FQ, wQ) / 2,
            qQ = (QQ.left + QQ.right) / 2,
            oQ = (QQ.top + QQ.bottom) / 2;
          return FQ >= wQ ? [{
            left: QQ.left + LQ,
            top: QQ.top,
            right: QQ.right - LQ,
            bottom: QQ.bottom
          }, ...eF(QQ.left + LQ, oQ, LQ), ...eF(QQ.right - LQ, oQ, LQ)] : [{
            left: QQ.left,
            top: QQ.top + LQ,
            right: QQ.right,
            bottom: QQ.bottom - LQ
          }, ...eF(qQ, QQ.top + LQ, LQ), ...eF(qQ, QQ.bottom - LQ, LQ)]
        }(wQ),
        oQ = LQ.keyBox;
      if (oQ) {
        const QQ = (wQ.left + wQ.right) / 2,
          FQ = (wQ.top + wQ.bottom) / 2;
        qQ.push({
          left: QQ - oQ.width / 2,
          top: FQ - oQ.height / 2,
          right: QQ + oQ.width / 2,
          bottom: FQ + oQ.height / 2
        })
      }
      return qQ
    }

    function cF(QQ) {
      const FQ = QQ.getBoundingClientRect();
      return 0 === FQ.width && 0 === FQ.height || "visible" !== getComputedStyle(QQ).visibility ? [] : [(0, MF.r)(FQ, 44)]
    }

    function CF(QQ, FQ) {
      (0, LQ.useEffect)((() => {
        const wQ = QQ.current;
        if (!FQ || !wQ) return;
        const LQ = () => {
          const QQ = Array.from(document.querySelectorAll(".TouchComponentsButtons .TouchKeyHit, .TouchInteractHit")),
            FQ = QQ.find((QQ => QQ.classList.contains("TouchInteractHit")));
          FQ !== qQ && (qQ && oQ.unobserve(qQ), qQ = FQ, FQ && oQ.observe(FQ));
          const LQ = Array.from(document.querySelectorAll(AF.c)),
            DQ = [...QQ.flatMap((QQ => pF(QQ))), ...LQ.flatMap(cF)],
            kQ = function(QQ, FQ) {
              const wQ = FQ.map((FQ => ({
                left: FQ.left - QQ.left,
                top: FQ.top - QQ.top,
                right: FQ.right - QQ.left,
                bottom: FQ.bottom - QQ.top
              })));
              return tF(Math.ceil(QQ.width), Math.ceil(QQ.height), wQ)
            }(wQ.getBoundingClientRect(), DQ);
          wQ.style.clipPath !== kQ && (wQ.style.clipPath = kQ)
        };
        let qQ;
        const oQ = new ResizeObserver((() => {
          LQ()
        }));
        LQ(), oQ.observe(wQ);
        const DQ = wQ.closest(".InGameUi"),
          kQ = new MutationObserver(LQ);
        DQ && kQ.observe(DQ, {
          attributes: !0,
          attributeFilter: ["class", GF.f]
        });
        const vQ = [(0, pQ.o)(xF.d, LQ), (0, pQ.o)(AF.v, LQ), (0, pQ.o)(AF.g, LQ)];
        return () => {
          oQ.disconnect(), kQ.disconnect();
          for (const QQ of vQ) QQ();
          wQ.style.clipPath = ""
        }
      }), [QQ, FQ])
    }
    var SF = wQ(4257);

    function iF(QQ) {
      var FQ;
      let {
        onMove: wQ,
        mode: qQ,
        speedCurve: oQ,
        autorun: DQ = !1
      } = QQ;
      const kQ = (0, LQ.useRef)(null),
        vQ = (0, LQ.useRef)(null),
        uQ = (0, LQ.useRef)(null),
        HQ = (0, LQ.useRef)(null),
        YQ = (0, LQ.useRef)(null),
        xQ = (0, LQ.useRef)(null),
        AQ = (0, LQ.useRef)(null),
        tQ = (0, LQ.useRef)(null),
        eQ = (0, LQ.useRef)(null),
        MQ = (0, LQ.useRef)(!1),
        GQ = (0, LQ.useRef)({
          clientX: 0,
          clientY: 0
        }),
        {
          t: pQ
        } = (0, rQ.y)(),
        cQ = (0, SF.u)(qQ),
        CQ = (0, iQ.l)(["notchSize"]).notchSize,
        SQ = CQ.left,
        WQ = (0, LQ.useRef)(16),
        RQ = (0, bF.b)(),
        [OQ, sQ, IQ] = "pinned" === qQ ? HF.p : null !== (FQ = RQ.hudElements.joystick) && void 0 !== FQ ? FQ : HF.p,
        UQ = "pinned" === qQ ? null : RQ.hudSafe,
        NQ = Math.max(SF.m, SF.q * IQ);
      CF(vQ, "pinned" !== qQ);
      const TQ = function(QQ, FQ, wQ, qQ, oQ) {
        const DQ = (0, LQ.useRef)(null),
          kQ = () => {
            clearInterval(DQ.current), DQ.current = null
          },
          vQ = uF(QQ, {
            create: QQ => new vF(QQ),
            elementRef: FQ,
            ringRef: wQ,
            classPrefix: "Autorun",
            keptBehindMovementPanels: !0,
            resizeEnds: !0,
            onArmed: oQ,
            onLocked: () => {
              DQ.current = setInterval((() => {
                bQ.gameBridge.lookup("dropAhead", null) && (qF.f.play("autorunLedgeStop"), vQ.current.cancel())
              }), 100)
            },
            onUnlocked: () => {
              kQ(), qQ()
            }
          });
        return (0, LQ.useEffect)((() => kQ), []), vQ
      }(DQ, uQ, AQ, (() => {
        VQ(), fQ()
      }), (() => {
        KQ(), null === eQ.current && TQ.current.suspend()
      }));

      function KQ() {
        const QQ = uQ.current.getBoundingClientRect();
        eQ.current = FF(tQ.current, QQ, 80, wF(`.TouchInventoryKey, ${AF.c}`)), MQ.current = null !== eQ.current && LF(GQ.current, eQ.current)
      }

      function zQ() {
        const {
          innerWidth: QQ,
          innerHeight: FQ
        } = window, wQ = (0, AF.L)(UQ, QQ, FQ, (0, AF.R)(CQ, QQ, FQ), WQ.current);
        return {
          left: wQ[3],
          bottom: wQ[2]
        }
      }

      function jQ(QQ) {
        uQ.current.style.transform = `translate(${QQ.x-NQ}px, ${QQ.y-NQ}px)`
      }

      function aQ(QQ) {
        const FQ = uQ.current;
        FQ.classList.add("Resting"), FQ.classList.toggle("Returning", QQ), FQ.style.display = "fixed_hidden" === qQ ? "none" : "block", jQ(function() {
          const {
            innerWidth: QQ,
            innerHeight: FQ
          } = window, wQ = zQ(), LQ = SQ * QQ / 100 + wQ.left, qQ = kQ.current.offsetHeight || FQ, oQ = ((0, YF.d)(QQ, FQ) ? SF.f : SF.d) + wQ.bottom;
          return {
            x: Math.min(QQ - NQ, Math.max(NQ, LQ + SF.i + OQ * QQ)),
            y: Math.min(qQ - NQ, Math.max(NQ, qQ - oQ + sQ * qQ))
          }
        }())
      }
      const XQ = (0, LQ.useRef)({
        restFixed: aQ,
        release: hQ
      });

      function fQ() {
        cQ ? aQ("fixed_shown" === qQ) : "floating" === qQ && (uQ.current.style.display = "none"), wQ({
          x: 0,
          y: 0
        })
      }

      function VQ() {
        xQ.current = null, YQ.current = null, HQ.current.style.transform = "translate(-50%, -50%)"
      }

      function hQ(QQ) {
        VQ();
        const FQ = TQ.current;
        QQ && null !== FQ && void 0 !== FQ && FQ.lift() ? wQ({
          x: 0,
          y: -FQ.lockedSpeed
        }) : (null === FQ || void 0 === FQ || FQ.cancel(), fQ())
      }

      function JQ(QQ) {
        const FQ = Array.from(QQ.touches).find((QQ => QQ.identifier === xQ.current));
        if (null === YQ.current || null === xQ.current || (0, QF.F)(FQ)) return;
        const LQ = TQ.current,
          qQ = FQ.clientX - YQ.current.x,
          DQ = FQ.clientY - YQ.current.y,
          kQ = Math.hypot(qQ, DQ),
          vQ = kQ > 0 ? Math.min(1, NQ / kQ) : 0,
          mQ = qQ * vQ,
          uQ = DQ * vQ,
          bQ = Math.hypot(mQ, uQ) / NQ,
          AQ = oQ && bQ > 0 ? oQ(bQ) / bQ : 1;
        HQ.current.style.transform = `translate(calc(-50% + ${mQ}px), calc(-50% + ${uQ}px))`;
        const tQ = mQ / NQ,
          pQ = uQ / NQ;
        if (wQ({
            x: tQ * AQ,
            y: pQ * AQ
          }), null !== LQ && null !== eQ.current) {
          LQ.move(tQ, pQ, bQ * AQ), GQ.current = {
            clientX: FQ.clientX,
            clientY: FQ.clientY
          };
          const QQ = MQ.current;
          MQ.current = LF(FQ, eQ.current), MQ.current !== QQ && LQ.target(MQ.current)
        }
      }
      return XQ.current = {
        restFixed: aQ,
        release: hQ
      }, (0, LQ.useLayoutEffect)((() => {
        if (!cQ) return;
        const QQ = () => {
          WQ.current = (0, AF.U)(document)
        };
        QQ(), null === xQ.current && XQ.current.restFixed(!1);
        const FQ = new ResizeObserver((() => {
          QQ(), null === xQ.current && XQ.current.restFixed(!1)
        }));
        FQ.observe(kQ.current);
        const wQ = uQ.current;
        return () => {
          FQ.disconnect(), wQ.classList.remove("Resting", "Returning"), null === xQ.current && (wQ.style.display = "", wQ.style.transform = "")
        }
      }), [cQ, qQ, CQ, OQ, sQ, NQ, UQ]), (0, LQ.useEffect)((() => {
        const QQ = QQ => {
            const FQ = xQ.current;
            null === FQ || Array.from(QQ.touches).some((QQ => QQ.identifier === FQ)) || XQ.current.release("touchend" === QQ.type && Array.from(QQ.changedTouches).some((QQ => QQ.identifier === FQ)))
          },
          FQ = () => {
            null !== xQ.current && XQ.current.release(!1)
          },
          wQ = () => {
            "hidden" === document.visibilityState && FQ()
          };
        document.addEventListener("touchstart", QQ, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchmove", QQ, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchend", QQ, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchcancel", QQ, {
          capture: !0,
          passive: !0
        }), window.addEventListener("blur", FQ), document.addEventListener("visibilitychange", wQ);
        const LQ = (0, mF.j)((QQ => {
          let {
            keepsMovement: wQ
          } = QQ;
          wQ || FQ()
        }));
        return () => {
          LQ(), document.removeEventListener("touchstart", QQ, {
            capture: !0
          }), document.removeEventListener("touchmove", QQ, {
            capture: !0
          }), document.removeEventListener("touchend", QQ, {
            capture: !0
          }), document.removeEventListener("touchcancel", QQ, {
            capture: !0
          }), window.removeEventListener("blur", FQ), document.removeEventListener("visibilitychange", wQ)
        }
      }), []), (0, LQ.useEffect)((() => {
        const QQ = kQ.current,
          FQ = QQ => {
            QQ.preventDefault()
          };
        return QQ.addEventListener("touchstart", FQ, {
          passive: !1
        }), () => {
          QQ.removeEventListener("touchstart", FQ)
        }
      }), []), (0, mQ.jsxs)("div", {
        ref: kQ,
        className: "JoystickZone",
        style: cQ && (OQ > 0 || IQ > 1 || zQ().left > 0) ? {
          width: `max(35vw, calc(${SQ+100*OQ}vw + ${zQ().left+SF.i+NQ+24}px))`
        } : void 0,
        onTouchStart: function(QQ) {
          var FQ;
          if (null !== xQ.current) return;
          const wQ = Array.from(QQ.changedTouches).find((QQ => {
            var FQ;
            return null === (FQ = kQ.current) || void 0 === FQ ? void 0 : FQ.contains(QQ.target)
          }));
          if (wQ) {
            if (null === (FQ = TQ.current) || void 0 === FQ || FQ.startTouch(), xQ.current = wQ.identifier, "pinned" === qQ) {
              const QQ = uQ.current.getBoundingClientRect();
              YQ.current = {
                x: QQ.left + QQ.width / 2,
                y: QQ.top + QQ.height / 2
              }
            } else {
              YQ.current = {
                x: wQ.clientX,
                y: wQ.clientY
              }, uQ.current.classList.remove("Resting", "Returning"), uQ.current.style.display = "block";
              const QQ = kQ.current.getBoundingClientRect();
              jQ({
                x: wQ.clientX - QQ.left,
                y: wQ.clientY - QQ.top
              }), DQ && (GQ.current = {
                clientX: wQ.clientX,
                clientY: wQ.clientY
              }, KQ())
            }
            JQ(QQ)
          }
        },
        onTouchMove: JQ,
        children: [(0, mQ.jsx)("div", {
          ref: vQ,
          className: "JoystickTouchLayer"
        }), (0, mQ.jsxs)("div", {
          ref: uQ,
          className: "Joystick",
          style: {
            width: 2 * NQ + "px",
            height: 2 * NQ + "px",
            transform: "pinned" === qQ ? "translate(4vw, calc(50vh - 50%))" : void 0
          },
          children: [(0, mQ.jsx)("div", {
            className: "JoystickBase",
            style: {
              width: 2 * NQ + "px",
              height: 2 * NQ + "px"
            }
          }), DQ && (0, mQ.jsxs)(mQ.Fragment, {
            children: [(0, mQ.jsx)("svg", {
              className: "AutorunRing",
              viewBox: "0 0 100 100",
              children: (0, mQ.jsx)("circle", {
                ref: AQ,
                cx: "50",
                cy: "50",
                r: "48",
                pathLength: 1
              })
            }), (0, mQ.jsxs)("div", {
              ref: tQ,
              className: "AutorunTarget",
              children: [(0, mQ.jsx)(lQ.c, {
                name: "lock"
              }), pQ("settingsMenu:autoRun")]
            })]
          }), (0, mQ.jsx)("div", {
            ref: HQ,
            className: "JoystickKnob",
            style: {
              width: `${NQ}px`,
              height: `${NQ}px`
            }
          })]
        })]
      })
    }
    const WF = .35,
      RF = .22;

    function OF(QQ) {
      if (QQ < .1) return 0;
      if (QQ < WF) {
        const FQ = (QQ - .1) / (WF - .1);
        return .06 + .16 * FQ * FQ
      }
      return QQ < .85 ? RF + .78 * (QQ - WF) / .5 : 1
    }

    function sF(QQ, FQ) {
      const wQ = (0, LQ.useRef)(null);
      return (0, LQ.useLayoutEffect)((() => (yQ.j.set(QQ, wQ.current, FQ), () => {
        yQ.j.set(QQ, null)
      })), [QQ, FQ]), wQ
    }
    const rF = "C",
      IF = "J",
      UF = "U",
      NF = "P",
      TF = "A",
      KF = "G",
      zF = "X",
      lF = (0, LQ.forwardRef)((function(QQ, FQ) {
        let {
          slot: wQ,
          canvasZone: qQ = !1,
          lit: DQ = !1,
          label: kQ,
          className: vQ,
          children: uQ,
          ...HQ
        } = QQ;
        return (0, LQ.useEffect)((() => (pQ.l.GA(xF.d), () => {
          pQ.l.GA(xF.d)
        })), []), (0, mQ.jsx)("div", {
          ref: FQ,
          className: oQ()("TouchKeyHit", `TouchSlot${wQ}`, vQ, {
            CanvasZone: qQ
          }),
          ...HQ,
          children: (0, mQ.jsxs)("div", {
            className: oQ()("TouchKey", {
              Lit: DQ,
              Labelled: void 0 !== kQ
            }),
            children: [uQ, void 0 !== kQ && (0, mQ.jsx)("span", {
              className: "TouchKeyLabel",
              children: kQ
            })]
          })
        })
      }));

    function jF(QQ, FQ) {
      (0, LQ.useEffect)((() => () => {
        FQ.current && (FQ.current = !1, (0, ZQ.y)(QQ, !1, {
          isTrusted: !0,
          timeStamp: performance.now()
        }))
      }), [])
    }

    function aF(QQ, FQ) {
      const wQ = FQ ? [zF] : [NF, zF];
      return QQ.filter((QQ => null !== QQ)).slice(0, wQ.length).map(((QQ, FQ) => {
        const qQ = wQ[FQ];
        return (0, mQ.jsx)(LQ.Fragment, {
          children: QQ.render(qQ)
        }, `${QQ.id}:${qQ}`)
      }))
    }
    var XF = wQ(36209);
    class fF extends oF {
      constructor() {
        super(...arguments), this.start = {
          x: 0,
          y: 0
        }, this.moved = !1
      }
      press(QQ, FQ) {
        this.start = {
          x: QQ,
          y: FQ
        }, this.moved = !1, this.startTouch(), this.hold(!0, !1)
      }
      move(QQ, FQ, wQ) {
        const LQ = Math.hypot(QQ - this.start.x, FQ - this.start.y) <= 12;
        this.moved ||= !LQ;
        const qQ = null !== wQ && FQ < this.start.y - 12 && LF({
          clientX: QQ,
          clientY: FQ
        }, wQ);
        this.hold(!this.moved, LQ || qQ)
      }
    }
    const VF = new Set;

    function hF(QQ) {
      const FQ = new Set(Array.from(QQ.touches, (QQ => QQ.identifier)));
      for (const wQ of VF) {
        for (const QQ of wQ.ids) FQ.has(QQ) || wQ.ids.delete(QQ);
        if (0 === wQ.ids.size) {
          VF.delete(wQ);
          wQ.pressesOnPointerDown && "touchstart" === QQ.type && Array.from(QQ.changedTouches).some((QQ => QQ.target instanceof Node && wQ.element.contains(QQ.target))) || wQ.release()
        }
      }
    }
    if ("undefined" !== typeof window)
      for (const MD of ["touchstart", "touchmove"]) window.addEventListener(MD, hF, {
        capture: !0,
        passive: !0
      });

    function JF(QQ) {
      let {
        pressesOnPointerDown: FQ = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const wQ = (0, LQ.useRef)(QQ);
      wQ.current = QQ;
      const qQ = (0, LQ.useRef)({
        ids: new Set,
        element: null,
        pressesOnPointerDown: FQ,
        release: () => {
          wQ.current()
        }
      });
      (0, LQ.useEffect)((() => {
        const QQ = qQ.current;
        return () => {
          VF.delete(QQ), QQ.ids.clear()
        }
      }), []);
      const oQ = QQ => {
        const FQ = qQ.current;
        for (const wQ of Array.from(QQ.changedTouches)) FQ.ids.delete(wQ.identifier);
        0 === FQ.ids.size && VF.delete(FQ)
      };
      return {
        onTouchStart: QQ => {
          const FQ = qQ.current;
          FQ.element = QQ.currentTarget;
          for (const wQ of Array.from(QQ.changedTouches)) wQ.target instanceof Node && QQ.currentTarget.contains(wQ.target) && FQ.ids.add(wQ.identifier);
          FQ.ids.size > 0 && VF.add(FQ)
        },
        onTouchEnd: oQ,
        onTouchCancel: oQ
      }
    }

    function EF(QQ, FQ) {
      return null === FQ ? null : (0, XF.d)(QQ.nativeEvent.changedTouches, FQ.id)
    }

    function nF(QQ) {
      let {
        lockable: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, rQ.y)(), qQ = "round" === (0, HF.$)().hudShape, oQ = (0, LQ.useRef)(!1);
      jF(PQ.s.Jump, oQ);
      const DQ = (0, LQ.useRef)(null),
        kQ = (0, LQ.useRef)(null),
        vQ = (0, LQ.useRef)(null),
        uQ = (0, LQ.useRef)(null),
        HQ = (0, LQ.useRef)(null),
        bQ = (0, LQ.useRef)(null),
        YQ = (0, LQ.useRef)(!1),
        xQ = (QQ, FQ) => {
          oQ.current = QQ, (0, ZQ.y)(PQ.s.Jump, QQ, FQ)
        },
        AQ = function() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            isTrusted: !0,
            timeStamp: performance.now()
          };
          oQ.current && (DQ.current && (0, dQ.j)(DQ.current, !1), xQ(!1, QQ))
        },
        tQ = uF(FQ, {
          create: QQ => new fF(QQ),
          elementRef: DQ,
          ringRef: kQ,
          classPrefix: "JumpLock",
          keptBehindMovementPanels: !1,
          resizeEnds: !1,
          onArmed: () => {
            const QQ = DQ.current.getBoundingClientRect(),
              FQ = vQ.current.parentElement,
              wQ = FQ.getBoundingClientRect(),
              LQ = {
                left: wQ.left + FQ.clientLeft,
                top: wQ.top + FQ.clientTop,
                right: wQ.right - FQ.clientLeft,
                bottom: wQ.bottom - FQ.clientTop
              };
            if (HQ.current = FF(vQ.current, LQ, 16, wF(`.TouchKeyHit:not(.JumpKey) > .TouchKey, .TouchInventoryKey, ${AF.c}`)), null === HQ.current) return void tQ.current.suspend();
            const qQ = HQ.current;
            bQ.current = {
              left: Math.min(QQ.left, qQ.left),
              top: qQ.top,
              right: Math.max(QQ.right, qQ.right),
              bottom: QQ.bottom
            }, YQ.current = null !== uQ.current && LF({
              clientX: uQ.current.x,
              clientY: uQ.current.y
            }, qQ)
          },
          onUnlocked: () => {
            null === uQ.current && AQ()
          }
        }),
        eQ = QQ => {
          var FQ;
          uQ.current = null, null === (FQ = tQ.current) || void 0 === FQ || FQ.cancel(), AQ(QQ)
        },
        MQ = JF((() => {
          eQ()
        })),
        GQ = QQ => {
          const FQ = uQ.current;
          var wQ;
          return null === FQ ? null !== (wQ = tQ.current) && void 0 !== wQ && wQ.locked ? null : "lifted" : EF(QQ, FQ) ? "lifted" : (0, XF.f)(QQ.nativeEvent.touches, FQ.id) ? null : "dropped"
        };
      return (0, mQ.jsxs)(lF, {
        ref: DQ,
        slot: IF,
        className: "JumpKey",
        onTouchStart: QQ => {
          MQ.onTouchStart(QQ), (0, dQ.j)(QQ.currentTarget, !0), null === uQ.current || (0, XF.f)(QQ.nativeEvent.touches, uQ.current.id) || eQ();
          const FQ = QQ.changedTouches[0];
          var wQ;
          null === uQ.current && FQ && (uQ.current = {
            id: FQ.identifier,
            x: FQ.clientX,
            y: FQ.clientY
          }, null === (wQ = tQ.current) || void 0 === wQ || wQ.press(FQ.clientX, FQ.clientY));
          oQ.current || xQ(!0, QQ.nativeEvent)
        },
        onTouchMove: QQ => {
          const FQ = uQ.current,
            wQ = EF(QQ, FQ);
          if (!wQ) return;
          const LQ = tQ.current;
          if (null === LQ || void 0 === LQ || LQ.move(wQ.clientX, wQ.clientY, bQ.current), null !== LQ && void 0 !== LQ && LQ.offered) {
            const QQ = LF(wQ, HQ.current);
            QQ !== YQ.current && (YQ.current = QQ, LQ.target(QQ))
          }
          FQ.x = wQ.clientX, FQ.y = wQ.clientY
        },
        onTouchEnd: QQ => {
          var FQ;
          MQ.onTouchEnd(QQ);
          const wQ = GQ(QQ);
          null !== wQ && ("dropped" !== wQ ? (uQ.current = null, null !== (FQ = tQ.current) && void 0 !== FQ && FQ.lift() ? (0, dQ.j)(QQ.currentTarget, !1) : AQ(QQ.nativeEvent)) : eQ(QQ.nativeEvent))
        },
        onTouchCancel: QQ => {
          MQ.onTouchCancel(QQ), null !== GQ(QQ) && eQ(QQ.nativeEvent)
        },
        children: [(0, mQ.jsx)(lQ.c, {
          name: "arrow-up-from-line"
        }), FQ && (0, mQ.jsxs)(mQ.Fragment, {
          children: [(0, mQ.jsx)("span", {
            className: "JumpLockBadge",
            children: (0, mQ.jsx)(lQ.c, {
              name: "lock"
            })
          }), (0, mQ.jsx)("svg", {
            className: "JumpLockRing",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            children: (0, mQ.jsx)("rect", {
              ref: kQ,
              x: "2",
              y: "2",
              width: "96",
              height: "96",
              rx: qQ ? 48 : 0,
              pathLength: 1
            })
          }), (0, mQ.jsxs)("div", {
            ref: vQ,
            className: "JumpLockTarget",
            children: [(0, mQ.jsx)(lQ.c, {
              name: "lock"
            }), wQ("settingsMenu:jumpLock")]
          })]
        })]
      })
    }
    const gF = new WeakMap;
    class PF {
      constructor(QQ) {
        this.zones = QQ, this.followed = new Map, this.onStart = QQ => {
          if (this.releaseMissing(QQ.touches), QQ.target instanceof HTMLCanvasElement)
            for (let wQ = 0; wQ < QQ.changedTouches.length; wQ++) {
              var FQ;
              const {
                identifier: LQ,
                clientX: qQ,
                clientY: oQ
              } = QQ.changedTouches[wQ];
              this.release(LQ);
              const DQ = this.zones.hitZone(qQ, oQ);
              if (!DQ) continue;
              const {
                key: kQ
              } = DQ;
              null === (FQ = gF.get(kQ)) || void 0 === FQ || FQ.cancel();
              const vQ = {
                hit: DQ.element,
                key: kQ,
                x: DQ.x,
                y: DQ.y,
                reach: .6 * DQ.radius
              };
              this.followed.set(LQ, vQ), (0, dQ.j)(DQ.element, !0), ZF(vQ, qQ, oQ)
            }
        }, this.onMove = QQ => {
          this.releaseMissing(QQ.touches);
          for (let FQ = 0; FQ < QQ.changedTouches.length; FQ++) {
            const {
              identifier: wQ,
              clientX: LQ,
              clientY: qQ
            } = QQ.changedTouches[FQ], oQ = this.followed.get(wQ);
            oQ && ZF(oQ, LQ, qQ)
          }
        }, this.onEnd = QQ => {
          for (let FQ = 0; FQ < QQ.changedTouches.length; FQ++) this.release(QQ.changedTouches[FQ].identifier)
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
        for (const FQ of [...this.followed.keys()])(0, XF.f)(QQ, FQ) || this.release(FQ)
      }
      releaseAll() {
        for (const QQ of [...this.followed.keys()]) this.release(QQ)
      }
      release(QQ) {
        const FQ = this.followed.get(QQ);
        if (!FQ) return;
        this.followed.delete(QQ);
        for (const qQ of this.followed.values())
          if (qQ.key === FQ.key) return;
        (0, dQ.j)(FQ.hit, !1);
        const {
          key: wQ
        } = FQ, LQ = wQ.style.translate;
        wQ.style.translate = "", LQ && gF.set(wQ, wQ.animate({
          translate: [LQ, "0 0"]
        }, {
          duration: 150,
          easing: "ease-out"
        }))
      }
    }

    function ZF(QQ, FQ, wQ) {
      let {
        key: LQ,
        x: qQ,
        y: oQ,
        reach: DQ
      } = QQ;
      const kQ = FQ - qQ,
        vQ = wQ - oQ,
        mQ = Math.min(1, DQ / (Math.hypot(kQ, vQ) || 1));
      LQ.style.translate = `${kQ*mQ}px ${vQ*mQ}px`
    }
    const yF = () => {
      const QQ = (0, gQ.l)(),
        FQ = (0, RQ.n)();
      return QQ || FQ
    };

    function BF(QQ) {
      (0, yQ.n)(QQ.x, QQ.y)
    }
    const dF = (0, LQ.memo)((function() {
        const QQ = yF(),
          {
            joystickMode: FQ,
            touchSpeedCurve: wQ,
            autorun: qQ
          } = (0, iQ.l)(["clientEscMenuOptions"]).clientEscMenuOptions;
        return (0, LQ.useEffect)((() => ((0, BQ.i)(PQ.w.TouchControls, PQ.w.TouchControls), () => {
          (0, BQ.i)(PQ.w.TouchControls, 0), (0, yQ.n)(0, 0)
        })), []), (0, mQ.jsx)("div", {
          className: oQ()("TouchMovementWrapper", {
            Hidden: QQ
          }),
          "data-camera-keeper": "",
          children: (0, mQ.jsx)(iF, {
            onMove: BF,
            mode: FQ,
            speedCurve: wQ ? OF : void 0,
            autorun: qQ
          })
        })
      })),
      Qw = (0, LQ.memo)((function() {
        const QQ = yF(),
          {
            clientEscMenuOptions: FQ
          } = (0, iQ.l)(["clientEscMenuOptions"]),
          wQ = FQ.touchActionButtons;
        return (0, LQ.useEffect)((() => new PF(yQ.j).start()), []), (0, LQ.useEffect)((() => {
          pQ.l.GA(xF.d)
        }), [QQ]), (0, mQ.jsxs)("div", {
          className: oQ()("TouchComponentsButtons", {
            Hidden: QQ
          }),
          "data-camera-keeper": "",
          children: [(0, mQ.jsx)(nF, {
            lockable: FQ.jumpLock && !QQ
          }), (0, mQ.jsx)(bw, {
            hidden: QQ,
            actionButtons: wQ
          }), (0, mQ.jsx)(ww, {})]
        })
      }));

    function Fw(QQ) {
      const FQ = FQ => wQ => {
        (0, dQ.j)(wQ.currentTarget, FQ), QQ(FQ, wQ.nativeEvent)
      };
      return {
        onPointerDown: FQ(!0),
        onPointerUp: FQ(!1),
        onPointerCancel: FQ(!1)
      }
    }

    function ww() {
      const QQ = (0, GQ.l)("canCrouch"),
        FQ = (0, SQ.k)("crouching"),
        wQ = (0, LQ.useRef)(!1);
      jF(PQ.s.Crouch, wQ);
      const qQ = (QQ, FQ) => {
          wQ.current = QQ, (0, ZQ.y)(PQ.s.Crouch, QQ, FQ)
        },
        oQ = (0, LQ.useRef)(null),
        DQ = () => {
          wQ.current && (oQ.current && (0, dQ.j)(oQ.current, !1), qQ(!1, {
            isTrusted: !0,
            timeStamp: performance.now()
          }))
        },
        kQ = JF(DQ);
      return (0, LQ.useEffect)((() => {
        !1 === QQ && DQ()
      }), [QQ]), !1 === QQ ? null : (0, mQ.jsx)(lF, {
        ref: oQ,
        slot: rF,
        className: "CrouchKey",
        lit: FQ,
        ...kQ,
        ...Fw(qQ),
        children: (0, mQ.jsx)(lQ.c, {
          name: "arrow-down-to-line"
        })
      })
    }
    const Lw = [{
        icon: "arrows-rotate"
      }],
      qw = [{
        icon: "Arrow"
      }],
      ow = [{
        icon: "crosshairs"
      }],
      Dw = [{
        icon: "swords"
      }],
      kw = [{
        icon: "hand-back-point-up"
      }],
      vw = [{
        icon: "Firecracker"
      }];

    function mw(QQ, FQ, wQ, LQ) {
      return {
        id: JSON.stringify(FQ),
        render: qQ => (0, mQ.jsx)(Yw, {
          code: QQ,
          slot: qQ,
          icon: FQ,
          label: LQ,
          hidden: wQ
        })
      }
    }

    function uw(QQ, FQ) {
      return {
        id: "fly",
        render: wQ => (0, mQ.jsx)(Hw, {
          slot: wQ,
          flying: QQ,
          label: FQ
        })
      }
    }

    function Hw(QQ) {
      let {
        slot: FQ,
        flying: wQ,
        label: LQ
      } = QQ;
      return (0, mQ.jsx)(lF, {
        slot: FQ,
        className: "FlyKey",
        lit: wQ,
        label: LQ,
        ...Fw(((QQ, FQ) => {
          (0, ZQ.y)(PQ.s.Fly, QQ, FQ)
        })),
        children: (0, mQ.jsx)(lQ.c, {
          name: "feather-pointed"
        })
      })
    }

    function bw(QQ) {
      var FQ, wQ;
      let {
        hidden: LQ,
        actionButtons: qQ
      } = QQ;
      const {
        t: oQ
      } = (0, rQ.y)(), {
        gun: DQ,
        aimable: kQ,
        chargeName: vQ
      } = (0, SQ.k)("heldItemAim"), uQ = (0, SQ.k)("gliderBoostFuel"), {
        canFly: HQ,
        flying: bQ
      } = (0, SQ.k)("flight"), YQ = (0, GQ.l)("touchscreenActionButton"), xQ = DQ ? Lw : YQ, AQ = kQ ? {
        icon: qw,
        label: oQ("touchKeys:aim")
      } : null, tQ = null !== vQ ? {
        icon: [{
          icon: vQ
        }]
      } : null, eQ = null !== AQ && void 0 !== AQ ? AQ : tQ, MQ = null !== (FQ = null === (wQ = DQ ? AQ : null !== tQ && void 0 !== tQ ? tQ : AQ) || void 0 === wQ ? void 0 : wQ.icon) && void 0 !== FQ ? FQ : kw, pQ = [!qQ && eQ ? mw(yQ.c.Action2, eQ.icon, LQ, eQ.label) : null, DQ ? mw(yQ.c.Action3, ow, LQ, oQ("touchKeys:scope")) : null, HQ ? uw(bQ, oQ("touchKeys:fly")) : null];
      return (0, mQ.jsxs)(mQ.Fragment, {
        children: [xQ && (0, mQ.jsx)(Yw, {
          code: yQ.c.Action1,
          slot: KF,
          icon: xQ,
          label: DQ ? oQ("touchKeys:reload") : void 0,
          hidden: LQ
        }, JSON.stringify(xQ)), qQ && (0, mQ.jsxs)(mQ.Fragment, {
          children: [(0, mQ.jsx)(Yw, {
            code: yQ.c.Attack,
            slot: TF,
            icon: Dw,
            name: oQ("touchKeys:attack"),
            hidden: LQ
          }), (0, mQ.jsx)(Yw, {
            code: yQ.c.Use,
            slot: UF,
            icon: MQ,
            name: oQ("touchKeys:use"),
            hidden: LQ
          })]
        }), aF(pQ, qQ), uQ > 0 && (0, mQ.jsx)(Yw, {
          code: yQ.c.Boost,
          slot: zF,
          icon: vw,
          label: oQ("touchKeys:boost", {
            fuel: uQ > 99 ? "99+" : uQ
          }),
          hidden: LQ
        })]
      })
    }

    function Yw(QQ) {
      let {
        code: FQ,
        slot: wQ,
        icon: LQ,
        label: qQ,
        name: oQ,
        hidden: DQ
      } = QQ;
      const kQ = sF(FQ, DQ);
      return (0, mQ.jsx)(lF, {
        ref: kQ,
        slot: wQ,
        className: "TouchActionKey",
        canvasZone: !0,
        label: qQ,
        role: void 0 !== oQ ? "img" : void 0,
        "aria-label": oQ,
        children: (0, mQ.jsx)(vQ.e, {
          text: LQ
        })
      })
    }
    var xw = wQ(4144),
      Aw = wQ(2910),
      tw = wQ(647);
    const ew = (0, LQ.memo)((function() {
      (0, eQ.b)();
      const QQ = (0, LQ.useRef)([]),
        FQ = (0, Aw.b)(),
        wQ = (0, LQ.useRef)(0),
        qQ = (0, LQ.useRef)(0),
        oQ = (0, LQ.useRef)([]),
        DQ = (0, LQ.useRef)(null);

      function uQ(wQ, LQ, qQ, oQ) {
        const DQ = (0, tw.d)(),
          kQ = setTimeout((() => {
            QQ.current = QQ.current.filter((QQ => QQ.id !== DQ)), FQ()
          }), oQ);
        bQ.gameBridge.send("recordFlyingMiddleText", {
          content: wQ,
          Rw: LQ,
          angle: qQ,
          Ow: oQ
        }), QQ.current.push({
          id: DQ,
          content: wQ,
          Rw: LQ,
          Ow: oQ,
          removeTimeout: kQ,
          angle: qQ
        }), FQ()
      }
      return (0, SQ.d)("shotDamageToShow", (QQ => {
        let {
          damage: FQ,
          wasCrit: wQ,
          distance: LQ
        } = QQ;
        const qQ = -Math.PI / 4 + Math.random() * Math.PI / 2;
        uQ(wQ ? [{
          str: FQ.toString(),
          style: {
            color: "#ff8a80",
            fontSize: "1.6em"
          }
        }] : [FQ.toString()], LQ, qQ, 1e3)
      })), (0, kQ.g)("flyingMiddleMessage", (QQ => {
        let {
          content: FQ,
          Rw: LQ,
          Ow: kQ
        } = QQ;
        oQ.current.push({
          content: FQ,
          Rw: LQ,
          Ow: kQ
        });
        const vQ = () => {
          const {
            content: QQ,
            Rw: FQ,
            Ow: LQ
          } = oQ.current.shift(), DQ = function(QQ) {
            const FQ = -Math.PI / 4,
              wQ = Math.PI / 4,
              LQ = wQ - FQ,
              qQ = (1 + Math.sqrt(5)) / 2,
              oQ = 2 * Math.PI / (qQ * qQ);
            let DQ = QQ + oQ;
            for (; DQ > wQ;) DQ -= LQ;
            for (; DQ < FQ;) DQ += LQ;
            const kQ = Math.PI / 6;
            if (Math.abs(DQ - QQ) < kQ) {
              DQ = QQ + (Math.sign(DQ - QQ) || 1) * kQ, DQ > wQ && (DQ = QQ - kQ), DQ < FQ && (DQ = QQ + kQ)
            }
            return DQ
          }(qQ.current);
          qQ.current = DQ, wQ.current = Date.now(), uQ(QQ, FQ, DQ, LQ)
        };
        if (!DQ.current) {
          const QQ = () => {
            oQ.current.length > 0 && vQ(), 0 === oQ.current.length && (clearInterval(DQ.current), DQ.current = null)
          };
          DQ.current = setInterval(QQ, 200), wQ.current + 200 < Date.now() && QQ()
        }
        for (; oQ.current.length > 4;) vQ()
      })), (0, kQ.g)("forceFlyingMiddleMessage", (QQ => {
        let {
          content: FQ,
          Rw: wQ,
          angle: LQ,
          Ow: qQ
        } = QQ;
        uQ(FQ, wQ, LQ, qQ)
      })), (0, LQ.useEffect)((() => () => {
        clearInterval(DQ.current), DQ.current = null;
        for (const FQ of QQ.current) clearTimeout(FQ.removeTimeout)
      }), []), (0, mQ.jsx)("div", {
        className: "FlyingMiddleTextWrapper",
        children: QQ.current.map((QQ => {
          const {
            id: FQ,
            content: wQ,
            Rw: LQ,
            Ow: qQ,
            angle: oQ
          } = QQ;
          return QQ.pos || (QQ.pos = function(QQ, FQ) {
            const wQ = 50 / (QQ ** .7 * .35);
            return {
              x: wQ * Math.sin(FQ),
              y: -wQ * Math.cos(FQ)
            }
          }(LQ, oQ)), (0, mQ.jsx)(Mw, {
            className: "FlyingMiddleText",
            classNames: "FlyingMiddleText",
            timeout: qQ,
            enterActiveStyle: {
              transform: `translate(${QQ.pos.x}vw, ${QQ.pos.y}vh)`,
              transition: `transform ${qQ}ms ease-out`
            },
            children: (0, mQ.jsx)("div", {
              children: (0, mQ.jsx)(vQ.e, {
                text: wQ
              })
            })
          }, FQ)
        }))
      })
    }));

    function Mw(QQ) {
      let {
        children: FQ,
        className: wQ,
        classNames: qQ,
        timeout: oQ,
        enterActiveStyle: DQ
      } = QQ;
      const [kQ, vQ] = (0, LQ.useState)(!1), [uQ, HQ] = (0, LQ.useState)(!1), bQ = (0, LQ.useRef)(null);
      return (0, LQ.useEffect)((() => {
        vQ(!0)
      }), []), (0, mQ.jsx)(xw.c, {
        className: wQ,
        classNames: qQ || wQ,
        in: kQ,
        timeout: oQ,
        nodeRef: bQ,
        onEntering: () => {
          HQ(!0)
        },
        children: (0, LQ.cloneElement)(FQ, {
          ref: bQ,
          style: uQ && DQ || void 0
        })
      })
    }
    var Gw = wQ(36228);

    function pw() {
      const QQ = (0, SQ.k)("health");
      return (0, mQ.jsxs)("div", {
        className: "BottomScreenStatBarList",
        children: [(0, mQ.jsx)(Gw.c, {
          placement: "statBars"
        }), (0, mQ.jsx)(Cw, {
          actualValue: QQ.shield,
          maxValue: QQ.maxShield,
          hideAtValue: 0,
          icon: "shield",
          className: "ShieldBar"
        }), (0, mQ.jsx)(Cw, {
          actualValue: QQ.health,
          maxValue: QQ.maxHealth,
          icon: "heart",
          className: "HealthBar"
        })]
      })
    }

    function Cw(QQ) {
      let {
        actualValue: FQ,
        maxValue: wQ,
        hideAtValue: LQ,
        icon: qQ,
        className: oQ
      } = QQ;
      return (0, eQ.d)(), null === FQ || null === wQ || FQ === LQ || wQ === LQ ? null : (0, mQ.jsx)("div", {
        className: "BottomScreenStatBarWrapper",
        children: (0, mQ.jsxs)("div", {
          className: "BottomScreenStatBarBackground",
          children: [(0, mQ.jsx)("div", {
            className: `BottomScreenStatBar ${oQ}`,
            style: {
              transform: `scaleX(${Math.max(FQ/wQ,0)})`,
              transformOrigin: "left center"
            }
          }), (0, mQ.jsxs)("div", {
            className: "BottomScreenStatBarText SmallTextBold",
            children: [(0, mQ.jsx)(lQ.c, {
              name: qQ
            }), ` ${Math.ceil(FQ)}/${wQ}`]
          })]
        })
      })
    }
    var Sw = wQ(9094),
      iw = wQ(4376),
      Ww = wQ(1342),
      Rw = wQ(2649),
      Ow = wQ(1451),
      sw = wQ(1326),
      rw = wQ(3282),
      Iw = wQ(3337),
      Uw = wQ(3305),
      Nw = wQ(745),
      Tw = wQ(3356),
      Kw = wQ(134),
      zw = wQ(8997),
      lw = wQ(317);

    function jw(QQ, FQ) {
      let {
        shownName: wQ,
        lifeformType: LQ
      } = QQ;
      return null !== wQ ? wQ : null !== LQ ? FQ(`lifeform:${(0,lw.He)(LQ)}`) : null
    }
    var aw = wQ(3294),
      Xw = wQ(3299);
    const fw = {
        FallDamage: "respawnPage:diedFallDamage",
        VoidJump: "respawnPage:diedVoid",
        Lava: "respawnPage:diedLava",
        "Toxic Waste": "respawnPage:diedToxicWaste",
        "Poison Potion": "respawnPage:diedPoisoned",
        "Rotten Brain": "respawnPage:diedPoisoned"
      },
      Vw = (0, LQ.memo)((function() {
        var QQ, FQ;
        const wQ = (0, eQ.b)(),
          qQ = (0, YQ.useNavigatePreserveSearch)(),
          {
            t: DQ
          } = (0, rQ.y)(),
          {
            loadingOverlayVisible: vQ
          } = (0, iQ.l)(["loadingOverlayVisible"]),
          uQ = (0, RQ.n)(),
          [HQ, xQ] = (0, LQ.useState)(!1),
          [AQ, tQ] = (0, LQ.useState)(!0),
          [MQ, pQ] = (0, LQ.useState)(null),
          CQ = (0, Aw.b)(),
          WQ = (0, GQ.l)("respawnButtonText"),
          OQ = (0, GQ.l)("usePlayAgainButton"),
          sQ = (0, GQ.l)("useRespawnButton"),
          {
            gameNameWithVariation: IQ
          } = (0, SQ.k)("connectedGame"),
          UQ = (0, LQ.useRef)(cQ.b.get("secsToRespawn")),
          NQ = (0, LQ.useRef)(bQ.gameBridge.latest("localPlayerAlive")),
          TQ = (0, LQ.useRef)(cQ.b.get("secsToRespawn")),
          KQ = (0, LQ.useRef)(cQ.b.get("autoRespawn")),
          zQ = (0, LQ.useRef)(null),
          jQ = (0, LQ.useRef)(0),
          aQ = (0, LQ.useRef)(0),
          [XQ, VQ] = (0, LQ.useState)(!1),
          hQ = (0, LQ.useRef)(null),
          JQ = (0, LQ.useRef)(null),
          EQ = (0, LQ.useRef)(null);
        (0, GQ.h)("secsToRespawn", (QQ => {
          console.log("Received new secsToRespawn with", QQ, "and current canRespawn value of ", KQ.current), TQ.current = QQ, ZQ()
        })), (0, GQ.h)("autoRespawn", (QQ => {
          console.log("Received autorespawn", QQ, "current canRespawn value of ", UQ.current), KQ.current = QQ, ZQ()
        }));
        const nQ = QQ => {
          console.log("Updating respawn component from localPlayerAliveSet. isAlive:", QQ), QQ || jQ.current++, NQ.current = QQ, ZQ()
        };
        (0, SQ.d)("localPlayerAliveSet", nQ), (0, kQ.g)(Iw.o, (QQ => {
          "connected" === QQ && !NQ.current && KQ.current && UQ.current <= 0 && (aQ.current = 0, yQ())
        })), (0, LQ.useEffect)((() => {
          const QQ = bQ.gameBridge.latest("localPlayerAlive");
          QQ === NQ.current ? (console.log("Updating respawn component from initial mount"), ZQ()) : nQ(QQ)
        }), []), (0, LQ.useEffect)((() => {
          if (HQ) {
            VQ(!1);
            const QQ = setTimeout((() => {
              VQ(!0)
            }), 600);
            return (0, zw.d)(), () => {
              clearTimeout(QQ)
            }
          }
          return () => {}
        }), [HQ]);
        (0, SQ.d)("kill", (QQ => {
          let {
            killer: FQ,
            victim: wQ,
            withItem: LQ
          } = QQ;
          if (!wQ.local) return;
          const qQ = ((QQ, FQ) => {
            if (QQ.local) {
              const QQ = fw[FQ];
              return QQ ? DQ(QQ) : null
            }
            const wQ = jw(QQ, DQ);
            return wQ ? DQ("respawnPage:killedBy", {
              name: wQ
            }) : null
          })(FQ, LQ);
          qQ && pQ({
            text: qQ,
            deathCount: NQ.current ? jQ.current + 1 : jQ.current
          })
        }));
        const gQ = () => {
            HQ && KQ.current && NQ.current && XQ && xQ(!1)
          },
          PQ = HQ && KQ.current && NQ.current && XQ && !vQ;
        (0, kQ.g)("usedKeyboard", (() => {
          gQ()
        })), (0, Xw.c)("respawn", PQ, gQ);
        const ZQ = () => {
            tQ(TQ.current >= 3 || !KQ.current), NQ.current ? (clearInterval(zQ.current), zQ.current = null, KQ.current ? CQ() : xQ(!1)) : (xQ(!0), UQ.current = TQ.current, CQ(), console.log("Running respawn stats updated", KQ.current, UQ.current), KQ.current && UQ.current <= 0 && yQ(), clearInterval(zQ.current), UQ.current > 0 && (zQ.current = setInterval((() => {
              UQ.current = Math.max(UQ.current - 1, 0), CQ(), UQ.current <= 0 && (clearInterval(zQ.current), zQ.current = null, cQ.b.get("autoRespawn") && yQ())
            }), 1e3)))
          },
          yQ = () => {
            if (Date.now() - aQ.current > 1e3) {
              const QQ = () => {
                bQ.gameBridge.send("respawn", null), aQ.current = Date.now()
              };
              cQ.b.get("autoRespawn") ? QQ() : (0, sw.fb)((() => {
                QQ()
              }), "video_respawn")
            }
          },
          BQ = (0, LQ.useMemo)((() => {
            var QQ;
            return null === (QQ = (0, Nw.l)(IQ)) || void 0 === QQ ? void 0 : QQ.otherGameLinksOnRespawnPage
          }), [IQ]),
          dQ = 0 === UQ.current,
          QF = (null === MQ || void 0 === MQ ? void 0 : MQ.deathCount) === jQ.current ? MQ.text : null,
          FF = HQ && AQ && !vQ,
          wF = uQ && PQ && null !== (QQ = null === (FQ = (0, fQ.d)()) || void 0 === FQ ? void 0 : FQ.getBoundButton("menuConfirm")) && void 0 !== QQ ? QQ : null,
          LF = QQ => dQ ? QQ : DQ("respawnPage:actionInSeconds", {
            action: QQ,
            seconds: UQ.current
          });
        return (0, mQ.jsx)(Sw.c, {
          showing: HQ,
          globallyUniqueKey: "RespawnComponent",
          alwaysMountChildren: !0,
          children: (0, mQ.jsx)(rw.b, {
            show: HQ,
            "data-holds-camera-keeper": "",
            children: (0, mQ.jsxs)(iw.d, {
              close: () => {
                xQ(!1)
              },
              togglePointerLock: !1,
              closeOnPressBackground: !1,
              className: "RespawnBackgroundScreen",
              padLayerKind: KQ.current || vQ ? null : "death",
              padBackCloses: !1,
              cameraKeeper: !0,
              children: [(0, Kw.l)() && (0, mQ.jsx)(Ow.b, {
                onClick: Uw.e,
                children: DQ("homePage:backToGames")
              }), (0, mQ.jsxs)("div", {
                className: "RespawnContainer",
                onClick: gQ,
                children: [(0, mQ.jsxs)("div", {
                  className: "RespawnTop",
                  children: [(0, mQ.jsx)("div", {
                    ref: JQ,
                    className: "RespawnSideSquareBannerDiv",
                    children: wQ[0] > 925 && (0, mQ.jsx)(Rw.c, {
                      info: {
                        adType: "square",
                        adId: 1,
                        adAlias: "banner_respawn_1"
                      },
                      sizeInfo: {
                        parentRef: JQ
                      },
                      showing: FF,
                      horizontalAlign: "start",
                      extraContrastBackgroundBox: "left",
                      noFillShowBloxdAdProbability: 0
                    })
                  }), (0, mQ.jsx)("div", {
                    className: "RespawnMainContent",
                    children: (0, mQ.jsxs)("div", {
                      className: oQ()("RespawnMainContentInner", {
                        RespawnMainContentInnerPad: uQ
                      }),
                      children: [KQ.current && (0, mQ.jsxs)("div", {
                        className: "AutoRespawnDeathInfo",
                        children: [(0, mQ.jsxs)("div", {
                          className: "AutoRespawnDeathTitle FullyFancyText",
                          children: [(0, mQ.jsx)(lQ.c, {
                            name: "skull",
                            className: "AutoRespawnDeathIcon"
                          }), DQ("respawnPage:youDied")]
                        }), (0, mQ.jsxs)("div", {
                          className: "AutoRespawnDeathCause FullyFancyText",
                          children: [null === wF && (NQ.current ? DQ("respawnPage:pressAnywhereToContinue") : dQ ? DQ("respawnPage:respawning") : LF(DQ("general:respawn"))), null !== wF && (0, mQ.jsx)(aw.d, {
                            text: DQ("controller:screensPressToContinue", {
                              button: aw.g
                            }),
                            glyph: wF,
                            className: "AutoRespawnContinueGlyph"
                          })]
                        }), QF && (0, mQ.jsx)("div", {
                          className: "AutoRespawnStatus",
                          children: QF
                        })]
                      }), !KQ.current && (0, mQ.jsxs)(mQ.Fragment, {
                        children: [(0, mQ.jsxs)("div", {
                          className: oQ()("RespawnPageButtons", {
                            RespawnPageButtonsVertical: !BQ
                          }),
                          children: [OQ && (0, mQ.jsx)(Ow.m, {
                            className: "RespawnPageButton",
                            padDefaultFocus: !0,
                            onClick: () => {
                              (0, sw.fb)((() => {
                                (0, iQ.k)("inGameReplay");
                                const QQ = (0, Ww.e)(IQ);
                                qQ(QQ)
                              }), "video_start")
                            },
                            disabled: !dQ || !XQ,
                            touchPressOn: "pointerup",
                            children: LF(DQ("respawnPage:playAgain"))
                          }), sQ && (0, mQ.jsx)(Ow.f, {
                            className: "RespawnPageButton",
                            onClick: yQ,
                            padDefaultFocus: !OQ,
                            padBack: "sessionBasedGame:stayInLobby" === WQ,
                            disabled: !dQ || !XQ,
                            touchPressOn: "pointerup",
                            children: LF(DQ(WQ))
                          }), !(0, Kw.l)() && (0, mQ.jsx)(Ow.F, {
                            className: "RespawnPageButton",
                            onClick: Uw.e,
                            disabled: !dQ || !XQ,
                            touchPressOn: "pointerup",
                            children: LF(DQ("respawnPage:exitGame"))
                          })]
                        }), BQ && (0, mQ.jsxs)("div", {
                          className: "RespawnPageOtherGames",
                          children: [(0, mQ.jsx)("div", {
                            className: "RespawnPageOtherGamesTitle",
                            children: DQ("respawnPage:orTry")
                          }), (0, mQ.jsx)("div", {
                            className: "RespawnPageOtherGameThumbnails",
                            children: BQ.map((QQ => (0, mQ.jsx)(Tw.f, {
                              source: {
                                type: "game",
                                gameNameWithVariation: QQ
                              },
                              disabled: !dQ || !XQ,
                              gameWidth: "13rem",
                              hideDescription: !0,
                              hideFavourites: !0,
                              hideCcu: !0,
                              onClick: () => {
                                (0, iQ.k)("inGameReplay");
                                const FQ = (0, Ww.e)(QQ);
                                qQ(FQ)
                              }
                            }, QQ)))
                          })]
                        })]
                      })]
                    })
                  }), (0, mQ.jsx)("div", {
                    ref: EQ,
                    className: "RespawnSideSquareBannerDiv"
                  })]
                }), (0, mQ.jsx)("div", {
                  ref: hQ,
                  className: "RespawnBottom",
                  children: (0, mQ.jsx)(Rw.c, {
                    info: {
                      adType: "leaderboard",
                      adId: 1,
                      adAlias: "banner_respawn_2"
                    },
                    sizeInfo: {
                      parentRef: hQ
                    },
                    showing: FF,
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
    var hw = wQ(36240);
    const Jw = [{
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
      Ew = [{
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
      nw = {
        duration: 300,
        easing: "ease-out",
        fill: "forwards"
      },
      gw = {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
      },
      Pw = (0, LQ.memo)((function() {
        const QQ = (0, LQ.useRef)(null),
          FQ = (0, LQ.useRef)(null);

        function wQ(wQ) {
          var LQ;
          let {
            iQ: qQ,
            screenPos: oQ
          } = wQ;
          const DQ = QQ.current;
          null === (LQ = FQ.current) || void 0 === LQ || LQ.cancel(), DQ.classList.remove("HitmarkerCrit"), oQ ? (DQ.style.left = `${oQ.x}%`, DQ.style.top = `${oQ.y}%`) : (DQ.style.left = "50%", DQ.style.top = "50%"), DQ.style.rotate = 16 * (Math.random() - .5) + "deg", qQ && DQ.classList.add("HitmarkerCrit");
          const kQ = DQ.animate(qQ ? Ew : Jw, qQ ? gw : nw);
          FQ.current = kQ, kQ.onfinish = () => {
            DQ.classList.remove("HitmarkerCrit")
          }
        }
        return (0, kQ.g)("localGunHitmarker", (QQ => {
          let {
            iQ: FQ
          } = QQ;
          wQ({
            iQ: FQ
          })
        })), (0, kQ.g)("yourAttackHit", (QQ => {
          let {
            iQ: FQ,
            screenPos: LQ
          } = QQ;
          wQ({
            iQ: FQ,
            screenPos: iQ.c.get("isTouchScreen") ? LQ : void 0
          })
        })), (0, kQ.g)("sendHitmarker", (QQ => {
          let {
            iQ: FQ,
            screenPos: LQ
          } = QQ;
          wQ({
            iQ: FQ,
            screenPos: LQ
          })
        })), (0, mQ.jsxs)("div", {
          ref: QQ,
          className: "Hitmarker",
          children: [(0, mQ.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, mQ.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, mQ.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, mQ.jsx)("div", {
            className: "HitmarkerBar"
          })]
        })
      }));

    function Zw() {
      const QQ = (0, LQ.useRef)(!0);
      return (0, kQ.g)("localBlockMined", (() => {
        qF.f.play("blockMined")
      })), (0, kQ.g)("yourAttackHit", (() => {
        qF.f.play("hitLanded")
      })), (0, kQ.g)("localGunHitmarker", (() => {
        qF.f.play("hitLanded")
      })), (0, kQ.g)("damagedByOtherPlayer", (() => {
        qF.f.play("damageTaken")
      })), (0, SQ.d)("localPlayerAliveSet", (FQ => {
        !FQ && QQ.current && qF.f.play("death"), QQ.current = FQ
      })), null
    }
    var yw = wQ(1887),
      Bw = wQ(36250),
      dw = wQ.n(Bw),
      QL = wQ(1994),
      FL = wQ(1981),
      wL = wQ(3149),
      LL = wQ(9125);
    const qL = lw.ze ? 7e7 : 7e3,
      oL = dw()("#ffffff").alpha(.5).string();

    function DL(QQ) {
      const FQ = (0, wL.c)(QQ);
      return void 0 !== FQ && "Gun" === (0, LL.itemTypeOf)(FQ)
    }

    function kL(QQ) {
      if (!QQ) return console.error(`Killfeed colour was ${QQ}`), oL;
      try {
        return dw()(QQ).alpha(.5).string()
      } catch {
        return console.warn(`Killfeed colour ${QQ} is not a colour`), oL
      }
    }
    const vL = (0, LQ.memo)((function() {
      const {
        t: QQ
      } = (0, rQ.y)(), FQ = (0, LQ.useRef)([]), wQ = (0, Aw.b)();
      return (0, SQ.d)("kill", (function(LQ) {
        var qQ, oQ;
        let {
          killer: DQ,
          victim: kQ,
          withItem: vQ,
          killstreak: mQ
        } = LQ;
        const uQ = FQ.current;
        if (uQ.length >= 3) {
          const QQ = uQ.shift();
          clearTimeout(QQ.timeout)
        }
        const HQ = bQ.gameBridge.latest("hiddenPlayerNames"),
          YQ = {
            deadName: jw(kQ, QQ),
            killerName: jw(DQ, QQ),
            isFriend: {
              killer: (0, QL.g)(DQ.realName, HQ),
              dead: (0, QL.g)(kQ.realName, HQ)
            },
            withItem: vQ,
            wasHeadshot: !1,
            killstreak: mQ,
            timeout: setTimeout((() => {
              uQ.shift(), wQ()
            }), qL),
            reactId: `${null!==(qQ=DQ.id)&&void 0!==qQ?qQ:DQ.shownName}|${null!==(oQ=kQ.id)&&void 0!==oQ?oQ:kQ.shownName}|${Date.now()}`,
            killerBackground: kL(DQ.colour),
            deadBackground: kL(kQ.colour)
          };
        uQ.push(YQ), wQ()
      })), (0, LQ.useEffect)((() => {
        const QQ = FQ.current;
        return () => {
          for (; QQ.length > 0;) {
            const {
              timeout: FQ
            } = QQ.pop();
            clearTimeout(FQ)
          }
        }
      }), []), (0, mQ.jsx)("div", {
        className: "Killfeed",
        children: FQ.current.map((QQ => {
          let {
            deadName: FQ,
            killerName: wQ,
            withItem: LQ,
            wasHeadshot: qQ,
            killstreak: oQ,
            killerBackground: DQ,
            deadBackground: kQ,
            reactId: vQ,
            isFriend: uQ
          } = QQ;
          return (0, mQ.jsxs)("div", {
            className: "IndividualKillWrapper SmallTextLight",
            style: {
              background: `linear-gradient(90deg, ${DQ} calc(100% - 10rem), ${kQ} 100%)`
            },
            children: [oQ >= 2 ? (0, mQ.jsx)("div", {
              className: "KillfeedKillstreak",
              children: (0, lw.S)(oQ)
            }) : null, (0, mQ.jsx)("div", {
              className: "KillfeedKillerName",
              children: wQ
            }), uQ.killer && (0, mQ.jsx)(FL.b, {}), (0, mQ.jsx)("div", {
              className: "KillfeedItem",
              style: {
                height: "5vmin",
                width: DL(LQ) ? "7.5vmin" : "5vmin"
              },
              children: (0, mQ.jsx)(yw.e, {
                itemName: LQ,
                amount: 0,
                gunTransform: "scaleX(-1)",
                itemMarginTop: 0
              })
            }), qQ ? (0, mQ.jsx)(lQ.c, {
              name: "crosshairs",
              className: "3x KillfeedHeadshotIcon"
            }) : null, (0, mQ.jsx)("div", {
              className: "KillfeedDeadName",
              children: FQ
            }), uQ.dead && (0, mQ.jsx)(FL.b, {})]
          }, vQ)
        }))
      })
    }));
    var mL = wQ(36300),
      uL = wQ(1153),
      HL = wQ.n(uL),
      bL = wQ(3263),
      YL = wQ(36308),
      xL = wQ(1314);
    const AL = {},
      tL = (0, LQ.memo)((function() {
        const QQ = (0, LQ.useRef)({}),
          [, FQ] = (0, LQ.useReducer)((QQ => QQ + 1), 0);
        (0, kQ.g)("setDirectionArrow", (wQ => {
          let {
            id: LQ,
            position: qQ,
            style: oQ,
            text: DQ,
            kL: kQ
          } = wQ;
          const vQ = QQ.current,
            mQ = oQ || AL,
            uQ = DQ,
            HQ = vQ[LQ];
          if (!HQ) return vQ[LQ] = {
            position: qQ,
            style: mQ,
            text: uQ,
            shouldShowDistance: kQ,
            EX: null,
            chevronElement: null,
            distanceElement: null,
            lastRenderedDist: -1,
            lastDistUpdateTime: 0,
            lastScreenX: NaN,
            lastScreenY: NaN,
            onScreen: void 0
          }, void FQ();
          const bQ = !HL()(HQ.style, mQ) || !HL()(HQ.text, uQ) || HQ.shouldShowDistance !== kQ;
          HQ.position = qQ, HQ.style = mQ, HQ.text = uQ, HQ.shouldShowDistance = kQ, bQ && FQ()
        })), (0, kQ.g)("clearDirectionArrow", (wQ => {
          let {
            id: LQ
          } = wQ;
          const qQ = QQ.current;
          if (null === LQ)
            for (const QQ in qQ) delete qQ[QQ];
          else delete qQ[LQ];
          FQ()
        })), (0, LQ.useEffect)((() => {
          const FQ = QQ.current,
            wQ = (0, xL.t)((() => {
              ! function(QQ) {
                const FQ = bQ.gameBridge.lookup("localPos", null),
                  wQ = bL.d - eL,
                  LQ = (0, bL.k)() - eL;
                for (const qQ in QQ) {
                  const oQ = QQ[qQ];
                  if (!oQ.EX) continue;
                  const DQ = bQ.gameBridge.lookup("screenPos", oQ.position),
                    kQ = DQ.x - 50,
                    vQ = DQ.y - 50;
                  DQ.x === oQ.lastScreenX && DQ.y === oQ.lastScreenY || (oQ.lastScreenX = DQ.x, oQ.lastScreenY = DQ.y, oQ.EX.style.translate = `${DQ.x}vw ${DQ.y}vh`, oQ.chevronElement && (oQ.chevronElement.style.rotate = `${lw.e.fastATan2(vQ,kQ)}rad`));
                  const mQ = Math.abs(kQ) < wQ && Math.abs(vQ) < LQ;
                  if (mQ !== oQ.onScreen && (oQ.onScreen = mQ, oQ.EX.classList.toggle("DirectionArrowOnScreen", mQ)), oQ.shouldShowDistance && oQ.distanceElement) {
                    const QQ = oQ.position[0] - FQ[0],
                      wQ = oQ.position[1] - FQ[1],
                      LQ = oQ.position[2] - FQ[2],
                      qQ = Math.round(Math.sqrt(QQ * QQ + wQ * wQ + LQ * LQ));
                    (-1 === oQ.lastRenderedDist || (0, YL.e)(qQ, oQ.lastRenderedDist, oQ.lastDistUpdateTime)) && (oQ.distanceElement.textContent = `${qQ}m`, oQ.lastRenderedDist = qQ, oQ.lastDistUpdateTime = Date.now() + Math.floor(100 * Math.random()))
                  }
                }
              }(FQ)
            }));
          return () => {
            wQ();
            for (const QQ in FQ) delete FQ[QQ]
          }
        }), []);
        const wQ = QQ.current;
        return (0, mQ.jsx)("div", {
          className: "DirectionArrows",
          children: Object.entries(wQ).map((QQ => {
            var FQ;
            let [LQ, qQ] = QQ;
            const oQ = null !== (FQ = (0, MQ.Wb)(qQ.style)) && void 0 !== FQ ? FQ : "#ffffff";
            return (0, mQ.jsxs)("div", {
              ref: QQ => {
                wQ[LQ] && (wQ[LQ].EX = QQ)
              },
              className: "DirectionArrow",
              style: {
                fontSize: qQ.style.fontSize,
                opacity: qQ.style.opacity
              },
              children: [(0, mQ.jsxs)("div", {
                className: "DirectionArrowChevron",
                ref: QQ => {
                  wQ[LQ] && (wQ[LQ].chevronElement = QQ)
                },
                children: [(0, mQ.jsxs)("div", {
                  className: "DirectionArrowShadowLayer",
                  children: [(0, mQ.jsx)("div", {
                    className: "DirectionArrowBar"
                  }), (0, mQ.jsx)("div", {
                    className: "DirectionArrowBar"
                  })]
                }), (0, mQ.jsxs)("div", {
                  className: "DirectionArrowBarLayer",
                  children: [(0, mQ.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: oQ
                    }
                  }), (0, mQ.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: oQ
                    }
                  })]
                })]
              }), (0, mQ.jsx)("div", {
                className: "DirectionArrowMarker",
                style: {
                  background: oQ,
                  boxShadow: `0 0 3px rgba(0, 0, 0, 0.8), 0 0 8px ${oQ}`
                }
              }), qQ.text && (0, mQ.jsx)("div", {
                className: "DirectionArrowLabel SmallTextLight",
                style: {
                  color: oQ,
                  fontWeight: qQ.style.fontWeight,
                  fontStyle: qQ.style.fontStyle
                },
                children: (0, mQ.jsx)(vQ.e, {
                  text: qQ.text
                })
              }), qQ.shouldShowDistance && (0, mQ.jsx)("div", {
                className: "DirectionArrowDistance SmallTextLight",
                ref: QQ => {
                  wQ[LQ] && (wQ[LQ].distanceElement = QQ)
                },
                style: {
                  color: oQ,
                  fontWeight: qQ.style.fontWeight,
                  fontStyle: qQ.style.fontStyle
                }
              })]
            }, LQ)
          }))
        })
      })),
      eL = .5;
    const ML = (0, LQ.memo)((function(QQ) {
        let {
          isTouchScreen: FQ
        } = QQ;
        return (0, mQ.jsxs)("div", {
          className: "BottomRightElements",
          "data-camera-keeper-host": "",
          children: [(0, mQ.jsx)(CL, {}), FQ && (0, mQ.jsx)(Qw, {})]
        })
      })),
      GL = {
        readyForNext: 0,
        running: 1
      },
      pL = 50;

    function cL(QQ) {
      console.assert(QQ.state.current === GL.readyForNext);
      const FQ = QQ.queue.current,
        wQ = QQ.foreground.current;
      if (FQ.length > 0 && wQ) {
        const {
          toFraction: LQ,
          toDuration: qQ
        } = FQ.shift();
        QQ.state.current = GL.running, wQ.style.transition = `transform ${Math.max(qQ-pL,0)}ms linear`, wQ.classList.remove("Complete"), QQ.timeout.current = setTimeout((() => {
          wQ.style.transform = `scaleX(${LQ})`, QQ.timeout.current = setTimeout((() => {
            1 === LQ && wQ.classList.add("Complete"), QQ.state.current = GL.readyForNext, cL(QQ)
          }), Math.max(qQ - pL, 0))
        }), pL)
      }
    }

    function CL() {
      const QQ = (0, LQ.useRef)([]),
        FQ = (0, LQ.useRef)(GL.readyForNext),
        wQ = (0, LQ.useRef)(void 0),
        qQ = (0, LQ.useRef)(null),
        oQ = (0, LQ.useRef)({
          queue: QQ,
          state: FQ,
          timeout: wQ,
          foreground: qQ
        }),
        DQ = (0, GQ.l)("showProgressBar");
      if ((0, LQ.useLayoutEffect)((() => (DQ && FQ.current === GL.readyForNext && cL(oQ.current), () => {
          FQ.current = GL.readyForNext, clearTimeout(wQ.current), DQ && (QQ.current.length = 0)
        })), [DQ]), (0, kQ.g)("progressBarUpdate", (wQ => {
          let {
            toFraction: LQ,
            toDuration: qQ
          } = wQ;
          QQ.current.push({
            toFraction: LQ,
            toDuration: qQ
          }), FQ.current === GL.readyForNext && cL(oQ.current)
        })), !DQ) return null;
      return (0, mQ.jsx)("div", {
        className: "ProgressBarBackground",
        children: (0, mQ.jsx)("div", {
          className: "ProgressBarForeground",
          ref: qQ,
          style: {
            width: "15vw",
            transformOrigin: "left center",
            transform: "scaleX(0)"
          }
        })
      })
    }
    var SL = wQ(36313),
      iL = wQ(2389);
    const WL = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function RL(QQ) {
      let {
        classes: FQ,
        gone: wQ
      } = QQ;
      const LQ = document.documentElement;
      LQ.classList.remove(...FQ);
      for (const qQ of wQ) qQ.style.display = "block";
      return () => {
        LQ.classList.add(...FQ);
        for (const QQ of wQ) QQ.style.display = ""
      }
    }

    function OL(QQ) {
      const {
        isTouchScreen: FQ
      } = (0, iQ.l)(["isTouchScreen"]);
      (0, LQ.useLayoutEffect)((() => {
        if (!FQ) return;
        const wQ = QQ.current,
          LQ = document.querySelector(`.${SL.f}`),
          qQ = QQ => {
            const FQ = () => {
              const FQ = QQ.querySelector(iL.h),
                LQ = function(QQ) {
                  const FQ = document.documentElement;
                  return {
                    classes: HF.E.map(AF.F).filter((QQ => FQ.classList.contains(QQ))),
                    gone: [...QQ.querySelectorAll(`.TopRightTrayToggle.${iL.k}`)]
                  }
                }(QQ);
              FQ && function(QQ, FQ) {
                (0, iL.A)(QQ, FQ.classes.length > 0 || FQ.gone.length > 0, (() => RL(FQ)))
              }(FQ, LQ);
              const qQ = `${Math.floor(function(QQ,FQ,wQ){const LQ=document.documentElement,qQ=LQ.classList.contains((0,AF.I)("menu")),oQ=LQ.style.getPropertyValue((0,AF.N)("menu"));if(!qQ&&""===oQ)return QQ.getBoundingClientRect().left;const DQ=FQ?(0,iL.o)(FQ):()=>{},kQ=RL(wQ);LQ.classList.remove((0,AF.I)("menu")),LQ.style.removeProperty((0,AF.N)("menu"));const vQ=QQ.getBoundingClientRect().left;return kQ(),DQ(),qQ&&LQ.classList.add((0,AF.I)("menu")),""!==oQ&&LQ.style.setProperty((0,AF.N)("menu"),oQ),vQ}(QQ,FQ,LQ)-wQ.getBoundingClientRect().left-4)}px`;
              wQ.style.getPropertyValue("--InGameHeaderMaxWidth") !== qQ && wQ.style.setProperty("--InGameHeaderMaxWidth", qQ)
            };
            FQ();
            const qQ = new ResizeObserver(FQ);
            qQ.observe(QQ), qQ.observe(LQ), window.addEventListener("resize", FQ);
            const oQ = () => WL.map((QQ => document.documentElement.style.getPropertyValue(QQ))).join();
            let DQ = oQ();
            const kQ = new MutationObserver((() => {
              const QQ = oQ();
              QQ !== DQ && (DQ = QQ, FQ())
            }));
            kQ.observe(document.documentElement, {
              attributes: !0,
              attributeFilter: ["style"]
            });
            const vQ = (0, pQ.o)(AF.g, FQ),
              mQ = new MutationObserver(FQ);
            return mQ.observe(QQ, {
              childList: !0,
              subtree: !0
            }), () => {
              qQ.disconnect(), kQ.disconnect(), mQ.disconnect(), vQ(), window.removeEventListener("resize", FQ);
              const wQ = QQ.querySelector(iL.h);
              wQ && (0, iL.o)(wQ)
            }
          },
          oQ = () => LQ.querySelector(".TopRightIconsContainer"),
          DQ = oQ();
        let kQ;
        if (DQ) kQ = qQ(DQ);
        else {
          const QQ = new MutationObserver((() => {
            const FQ = oQ();
            FQ && (QQ.disconnect(), kQ = qQ(FQ))
          }));
          QQ.observe(LQ, {
            childList: !0,
            subtree: !0
          }), kQ = () => {
            QQ.disconnect()
          }
        }
        return () => {
          kQ(), wQ.style.removeProperty("--InGameHeaderMaxWidth")
        }
      }), [FQ, QQ])
    }
    var sL = wQ(3558),
      rL = wQ(3549),
      IL = wQ(1641),
      UL = wQ(1489),
      NL = wQ(1645),
      TL = wQ(1725),
      KL = wQ(1835),
      zL = wQ(1147),
      lL = wQ(4163),
      jL = wQ(1471),
      aL = wQ(1365);
    const XL = 2e4,
      fL = 6e5,
      VL = new Set;

    function hL() {
      const {
        gameEntrySource: QQ,
        loadingOverlayVisible: FQ
      } = (0, iQ.l)(["gameEntrySource", "loadingOverlayVisible"]), wQ = (0, SQ.g)("connectedGame", (QQ => (0, lL.g)(QQ) ? QQ.lobbyName : null)), qQ = (0, SQ.k)("localPlayerAlive"), oQ = (0, SQ.g)("players", (QQ => null !== QQ.localId && void 0 !== QQ.byId[QQ.localId])), [DQ, kQ] = (0, LQ.useState)(null);
      return !FQ && qQ && oQ && null !== wQ && DQ !== wQ && kQ(wQ), (0, LQ.useEffect)((() => {
        if (!(0, lL.j)(QQ) || null === DQ || DQ !== wQ || VL.has(DQ)) return;
        const FQ = setTimeout((() => {
          VL.add(DQ), async function(QQ) {
            const FQ = await zL.userContextManager.getCurrentUserContext();
            let wQ;
            try {
              wQ = (await UL.b.getWorldOwnerFriendOffer(FQ)).owner
            } catch (qQ) {
              return void console.warn("Couldn't ask who owns this world", qQ)
            }
            if (!wQ || (0, lL.o)(wQ.name, Date.now())) return;
            const LQ = wQ;
            ! function(QQ, FQ) {
              const wQ = Date.now() + fL;
              let LQ = Date.now(),
                qQ = 0;
              const oQ = () => {
                const DQ = Date.now(),
                  kQ = bQ.gameBridge.latest("connectedGame");
                kQ.lobbyName !== QQ || DQ > wQ || (null === kQ.websocketUrl ? LQ = 1 / 0 : LQ === 1 / 0 && !iQ.c.get("loadingOverlayVisible") && bQ.gameBridge.latest("localPlayerAlive") && (LQ = DQ + XL), qQ = DQ < LQ || !bQ.gameBridge.latest("localPlayerAlive") || iQ.c.get("isUiHidden") || iQ.c.get("isUiHiddenByCamera") || (0, TL.isTypingInInput)() || iQ.c.get("loadingOverlayVisible") || (0, IL.m)() || (0, sL.g)() || (0, aL.k)() ? 0 : qQ + 1, qQ >= 2 ? FQ() : setTimeout(oQ, 500))
              };
              oQ()
            }(QQ, (() => {
              (0, lL.e)(NL.e.getSocialState().friends, LQ.name) || ((0, lL.m)(LQ.name, Date.now()), KL.f.showWorldOwnerOffer(LQ), (0, jL.reportAnalyticsClick)({
                id: "social.world_owner_offer",
                value: "shown"
              }))
            }))
          }(DQ).catch((QQ => {
            console.error("Failed to offer the world's owner as a friend", QQ)
          }))
        }), XL);
        return () => {
          clearTimeout(FQ)
        }
      }), [QQ, DQ, wQ]), null
    }
    var JL = wQ(1876);
    const EL = (0, LQ.memo)((function(QQ) {
        let {
          durationMs: FQ,
          endsAtMs: wQ
        } = QQ;
        const [, qQ] = (0, LQ.useReducer)((QQ => QQ + 1), 0), oQ = null === wQ ? FQ : Math.max(wQ - Date.now(), 0);
        return (0, LQ.useEffect)((() => {
          if (null === wQ || oQ <= 0) return;
          const QQ = setTimeout(qQ, oQ - 1e3 * (Math.ceil(oQ / 1e3) - 1));
          return () => {
            clearTimeout(QQ)
          }
        })), (0, mQ.jsx)("div", {
          className: "EffectInfoDuration SmallTextLight",
          children: (0, lw.hb)(oQ)
        })
      })),
      nL = (0, LQ.memo)((function() {
        const QQ = (0, SQ.k)("localEffects");
        return (0, mQ.jsx)("div", {
          className: "EffectInfosWrapper",
          children: Object.entries(QQ).map((QQ => {
            let [FQ, {
              icon: wQ,
              displayName: LQ,
              durationMs: qQ,
              endsAtMs: oQ,
              level: DQ
            }] = QQ;
            return (0, mQ.jsxs)("div", {
              className: "EffectInfo",
              children: [(0, mQ.jsx)(JL.c, {
                icon: wQ,
                className: "EffectInfoIcon"
              }), (0, mQ.jsxs)("div", {
                className: "EffectInfoRightSide",
                style: {
                  marginTop: null !== qQ ? "0" : "1rem"
                },
                children: [(0, mQ.jsxs)("div", {
                  className: "EffectInfoNameWrapper",
                  children: [(0, mQ.jsx)(vQ.e, {
                    text: null !== LQ && void 0 !== LQ ? LQ : FQ,
                    className: "EffectInfoName SmallTextBold"
                  }), DQ > 1 && (0, mQ.jsx)("div", {
                    className: "EffectInfoName SmallTextBold",
                    children: (0, lw.S)(DQ)
                  })]
                }), null !== qQ && (0, mQ.jsx)(EL, {
                  durationMs: qQ,
                  endsAtMs: oQ
                })]
              })]
            }, FQ)
          }))
        })
      }));
    var gL = wQ(36317),
      PL = wQ(36529),
      ZL = wQ(201),
      yL = wQ(1362),
      BL = wQ(2668),
      dL = wQ(2857);

    function Qq(QQ, FQ) {
      (0, LQ.useLayoutEffect)((() => {
        let FQ, wQ;
        const LQ = requestAnimationFrame((() => {
          wQ = setTimeout((() => {
            wQ = void 0;
            const LQ = QQ();
            FQ = "function" === typeof LQ ? LQ : void 0
          }), 0)
        }));
        return () => {
          var QQ;
          cancelAnimationFrame(LQ), clearTimeout(wQ), null === (QQ = FQ) || void 0 === QQ || QQ()
        }
      }), FQ)
    }
    const Fq = [5, 5, 5],
      wq = [7, 4, 4, 4];

    function Lq(QQ) {
      return QQ.reduce(((QQ, FQ) => QQ + FQ), 0)
    }

    function qq(QQ, FQ, wQ, LQ, qQ) {
      const oQ = QQ.getContext("2d");
      if (!oQ) return null;
      const DQ = FQ.fontFamily,
        kQ = FQ.fontWeight;
      return QQ.width = wQ, QQ.height = LQ, oQ.fillStyle = FQ.color, oQ.textAlign = "center", oQ.textBaseline = "middle", oQ.font = `${kQ} ${qQ}px ${DQ}`, oQ
    }
    const oq = (0, LQ.memo)((function(QQ) {
      let {
        show: FQ
      } = QQ;
      const wQ = (0, LQ.useRef)(null),
        qQ = (0, LQ.useRef)(null),
        oQ = (0, LQ.useRef)(null),
        DQ = (0, xQ.n)();
      return (0, LQ.useEffect)((() => DQ.whenShown((() => {
        let QQ = 0,
          FQ = 0,
          wQ = performance.now(),
          LQ = 0;
        const DQ = (0, xL.t)((() => {
          var DQ, kQ, vQ;
          QQ++, FQ++;
          const mQ = performance.now();
          if (mQ - wQ < 1e3) return;
          const uQ = Math.round(QQ / (mQ - wQ) * 1e3);
          if (qQ.current = uQ, null === (DQ = oQ.current) || void 0 === DQ || DQ.call(oQ, uQ), QQ = 0, wQ = mQ, uQ >= 55) return void(LQ = 0);
          if (LQ += 1, LQ < 15) return;
          const HQ = null !== (kQ = CQ.i.getItem("decreaseLoadDistPromptDeniedCount")) && void 0 !== kQ ? kQ : 0,
            [YQ, xQ] = cQ.b.get("minChunkAddDist");
          if (function(QQ, FQ) {
              const wQ = bQ.gameBridge.lookup("Xp", null);
              return null !== wQ && (wQ.horizontal > QQ || wQ.vertical > FQ)
            }(YQ, xQ) && (null !== (vQ = CQ.i.getItem("lastDecreaseLoadDistPromptTime")) && void 0 !== vQ ? vQ : 0) + 432e5 < Date.now() && HQ < 3) {
            CQ.i.setItem("lastDecreaseLoadDistPromptTime", Date.now());
            yL.NotificationProvider.showPromptPopup({
              title: "Lag (low FPS) caused by high chunk load distance. Decrease it?",
              confirmText: "general:yes",
              cancelText: "general:no",
              unlockPointerKey: "chunkLoadDistanceLagPopup"
            }).getResult().then((QQ => {
              "notificationTornDown" !== QQ && (QQ ? (bQ.gameBridge.send("setChunkAddDistance", {
                horizontal: YQ,
                vertical: xQ
              }), CQ.i.setItem("chunkHorizAddDist", YQ), CQ.i.setItem("chunkVertAddDist", xQ), pQ.l.GA("updatedChunkLoadDist"), CQ.i.setItem("decreaseLoadDistPromptDeniedCount", 0)) : CQ.i.setItem("decreaseLoadDistPromptDeniedCount", HQ + 1))
            }))
          }
        }));
        let kQ = performance.now();
        FQ = 0;
        let vQ = null,
          mQ = !document.hidden;

        function uQ() {
          const QQ = performance.now() - kQ,
            wQ = 1e3 * FQ / QQ;
          mQ && (null === vQ && (vQ = wQ), BL.d.setFps(wQ, vQ)), FQ = 0, kQ = performance.now()
        }
        let HQ = setInterval(uQ, dL.e);

        function YQ() {
          const QQ = mQ;
          mQ = !document.hidden, !QQ && mQ && (FQ = 0, kQ = performance.now(), clearInterval(HQ), HQ = setInterval(uQ, dL.e))
        }
        return document.addEventListener("visibilitychange", YQ), () => {
          DQ(), document.removeEventListener("visibilitychange", YQ), clearInterval(HQ)
        }
      }))), [DQ]), Qq((() => {
        var QQ;
        if (!FQ || oQ.current) return;
        const LQ = wQ.current,
          DQ = window.getComputedStyle(LQ.parentElement),
          kQ = null !== (QQ = window.devicePixelRatio) && void 0 !== QQ ? QQ : 1,
          vQ = parseFloat(DQ.fontSize) * kQ,
          mQ = Math.round(3 * vQ),
          uQ = Math.round(vQ),
          HQ = qq(LQ, DQ, mQ, uQ, vQ);
        if (!HQ) return;
        const bQ = QQ => {
          HQ.clearRect(0, 0, LQ.width, LQ.height), HQ.fillText(QQ.toString(), LQ.width / 2, LQ.height / 2)
        };
        oQ.current = bQ, null !== qQ.current && bQ(qQ.current)
      }), [FQ]), (0, mQ.jsxs)("div", {
        className: "FpsWrapperDiv",
        style: {
          display: FQ ? "flex" : "none"
        },
        children: [(0, mQ.jsx)("div", {
          className: "FpsLabel",
          children: "FPS"
        }), (0, mQ.jsx)("canvas", {
          className: "FpsCanvas",
          ref: wQ,
          width: 48,
          height: 16
        })]
      })
    }));

    function Dq(QQ) {
      return Math.sign(QQ) * Math.round(100 * Math.abs(QQ))
    }

    function kq(QQ) {
      let {
        getCoordinates: FQ,
        showChunkCoords: wQ,
        columns: qQ
      } = QQ;
      const oQ = (0, LQ.useRef)(null);
      return Qq((() => {
        var QQ;
        const LQ = oQ.current,
          DQ = window.getComputedStyle(LQ.parentElement),
          kQ = null !== (QQ = window.devicePixelRatio) && void 0 !== QQ ? QQ : 1,
          vQ = parseFloat(DQ.fontSize) * kQ,
          mQ = Math.round(vQ * Lq(qQ)),
          uQ = Math.round(vQ),
          HQ = qq(LQ, DQ, mQ, uQ, vQ);
        if (!HQ) return;
        let YQ = !0,
          xQ = 0,
          AQ = 0,
          tQ = 0,
          eQ = 0,
          MQ = 0,
          GQ = 0;
        const pQ = () => {
          YQ = !0
        };
        document.fonts.load(HQ.font).then(pQ, pQ);
        const cQ = () => {
          qq(LQ, DQ, mQ, uQ, vQ), pQ()
        };
        LQ.addEventListener("contextrestored", cQ);
        const CQ = (0, xL.z)((() => {
          var QQ, oQ, DQ, kQ, mQ, uQ;
          const [pQ, cQ, CQ] = FQ(), SQ = Dq(pQ), iQ = Dq(cQ), WQ = Dq(CQ);
          let RQ = null;
          if (wQ) {
            const QQ = bQ.gameBridge.lookup("localPos", null);
            RQ = (0, QF.U)(QQ[0], QQ[1], QQ[2])
          }
          const OQ = null !== (QQ = null === (oQ = RQ) || void 0 === oQ ? void 0 : oQ[0]) && void 0 !== QQ ? QQ : 0,
            sQ = null !== (DQ = null === (kQ = RQ) || void 0 === kQ ? void 0 : kQ[1]) && void 0 !== DQ ? DQ : 0,
            rQ = null !== (mQ = null === (uQ = RQ) || void 0 === uQ ? void 0 : uQ[2]) && void 0 !== mQ ? mQ : 0;
          if (!YQ && SQ === xQ && iQ === AQ && WQ === tQ && OQ === eQ && sQ === MQ && rQ === GQ) return;
          YQ = !1, xQ = SQ, AQ = iQ, tQ = WQ, eQ = OQ, MQ = sQ, GQ = rQ;
          const IQ = [(SQ / 100).toFixed(2), (iQ / 100).toFixed(2), (WQ / 100).toFixed(2)];
          RQ && IQ.unshift(`${OQ} ${sQ} ${rQ}`), HQ.clearRect(0, 0, LQ.width, LQ.height);
          const UQ = LQ.height / 2;
          let NQ = 0;
          for (let FQ = 0; FQ < IQ.length; FQ++) {
            const QQ = vQ * qQ[FQ];
            HQ.fillText(IQ[FQ], NQ + QQ / 2, UQ, QQ), NQ += QQ
          }
        }));
        return () => {
          CQ(), LQ.removeEventListener("contextrestored", cQ)
        }
      }), [FQ, wQ, qQ]), (0, mQ.jsx)("div", {
        className: "CoordinateUI",
        children: (0, mQ.jsx)("canvas", {
          ref: oQ,
          className: "CoordinateCanvas",
          width: 16 * Lq(qQ),
          height: 16
        })
      })
    }
    const vq = (0, LQ.memo)((function() {
        const QQ = (0, LQ.useCallback)((() => {
          const QQ = bQ.gameBridge.lookup("localPos", null);
          return [QQ[0], QQ[1], QQ[2]]
        }), []);
        return (0, mQ.jsx)(kq, {
          getCoordinates: QQ,
          showChunkCoords: !1,
          columns: Fq
        })
      })),
      mq = (0, LQ.memo)((function() {
        const QQ = (0, LQ.useCallback)((() => {
          const QQ = bQ.gameBridge.lookup("localPos", null),
            FQ = ZL.e.tx;
          let wQ = QQ[0] % FQ,
            LQ = QQ[1] % FQ,
            qQ = QQ[2] % FQ;
          return wQ < 0 && (wQ += FQ), LQ < 0 && (LQ += FQ), qQ < 0 && (qQ += FQ), [wQ, LQ, qQ]
        }), []);
        return (0, mQ.jsx)(kq, {
          getCoordinates: QQ,
          showChunkCoords: !0,
          columns: wq
        })
      }));
    var uq = wQ(2018),
      Hq = wQ(1348),
      bq = wQ(1038),
      Yq = wQ(1237),
      xq = wQ(96),
      Aq = wQ(36382),
      tq = wQ(1458),
      eq = wQ(3037);
    const Mq = (0, LQ.memo)((function() {
      const QQ = (0, GQ.l)("maxAuraLevel");
      return 0 === QQ ? null : (0, mQ.jsx)(Gq, {
        maxLevel: QQ
      })
    }));

    function Gq(QQ) {
      let {
        maxLevel: FQ
      } = QQ;
      const wQ = (0, GQ.l)("auraPerLevel"),
        [qQ, oQ] = (0, LQ.useState)((() => {
          var QQ;
          return null !== (QQ = bQ.gameBridge.latest("aura")) && void 0 !== QQ ? QQ : void 0
        })),
        [DQ, kQ] = (0, LQ.useState)((() => pQ(qQ))),
        [vQ, uQ] = (0, LQ.useReducer)((QQ => QQ + 1), 0),
        HQ = (0, LQ.useRef)(null),
        YQ = (0, LQ.useRef)([]),
        xQ = (0, LQ.useRef)({
          width: 0,
          level: 0
        }),
        AQ = (0, LQ.useRef)(null),
        tQ = (0, LQ.useRef)(null);

      function MQ() {
        if (null !== AQ.current) return;
        if (0 === YQ.current.length) return;
        const {
          width: QQ,
          level: FQ
        } = YQ.current.shift();
        let wQ;
        if (FQ !== xQ.current.level && FQ > xQ.current.level !== QQ > xQ.current.width) {
          const LQ = FQ > xQ.current.level;
          wQ = LQ ? QQ : 100 - QQ, HQ.current.style.transition = "none", HQ.current.style.width = LQ ? "0%" : "100%", HQ.current.offsetWidth
        } else wQ = Math.abs(QQ - xQ.current.width);
        const LQ = 100 * wQ / 20;
        HQ.current.style.transition = `width ${LQ}ms linear`, kQ(QQ), xQ.current = {
          width: QQ,
          level: FQ
        }, YQ.current.length > 0 && (AQ.current = setTimeout((() => {
          AQ.current = null, MQ()
        }), LQ))
      }

      function pQ(QQ) {
        return Math.floor(QQ / wQ) === FQ ? 100 : QQ % wQ / wQ * 100
      }
      return (0, LQ.useEffect)((() => () => {
        clearTimeout(AQ.current), clearTimeout(tQ.current), AQ.current = null, tQ.current = null
      }), []), (0, SQ.d)("aura", (QQ => {
        if (tQ.current && clearTimeout(tQ.current), null === QQ) return clearTimeout(AQ.current), tQ.current = null, AQ.current = null, YQ.current = [], xQ.current = {
          width: 0,
          level: 0
        }, oQ(void 0), void kQ(0);
        tQ.current = setTimeout((() => {
          const FQ = Math.floor(qQ / wQ),
            LQ = Math.floor(QQ / wQ),
            DQ = pQ(QQ);
          QQ > qQ && Aq.b.play("exp_collect", .1).rate(1.6 + .5 * Math.random()), LQ > FQ ? (LQ % 5 === 0 && Aq.b.play("exp_levelup", .45).rate(.95 + .1 * Math.random()), uQ(), YQ.current.push({
            width: 100,
            level: FQ
          })) : LQ < FQ && YQ.current.push({
            width: 0,
            level: FQ
          }), QQ === qQ && LQ === FQ || YQ.current.push({
            width: DQ,
            level: LQ
          }), oQ(QQ), MQ()
        }), 50)
      })), (0, eQ.d)(), (0, mQ.jsxs)("div", {
        className: "AuraBarWrapper",
        children: [(0, mQ.jsxs)("div", {
          className: "AuraBarLabel SmallTextBold",
          children: [(0, mQ.jsx)(tq.d, {
            showSignal: vQ,
            particleElement: (0, mQ.jsx)("img", {
              src: (0, eq.f)("glint"),
              alt: ""
            })
          }), (0, mQ.jsx)("img", {
            className: "AuraBarLabelImage",
            src: (0, eq.f)("glint"),
            alt: "aura"
          }), (0, mQ.jsx)("div", {
            className: "AuraBarLabelText",
            children: Math.floor((null !== qQ && void 0 !== qQ ? qQ : 0) / wQ)
          })]
        }), (0, mQ.jsx)("div", {
          className: "AuraBar",
          children: (0, mQ.jsx)("div", {
            ref: HQ,
            className: "AuraBarBackground",
            style: {
              width: `${DQ}%`
            }
          })
        })]
      })
    }
    var pq = wQ(2469);

    function cq(QQ) {
      QQ.timed && (QQ.endedAnimation = QQ.timed.animation, QQ.timed = null)
    }
    const Cq = (0, LQ.memo)((function() {
      const QQ = (0, LQ.useRef)(null),
        FQ = (0, LQ.useRef)(null),
        wQ = (0, LQ.useRef)({
          timed: null,
          endedAnimation: null
        });
      return (0, kQ.g)("middleScreenBarInitiate", (QQ => {
        var LQ;
        let {
          duration: qQ,
          vF: oQ,
          horizBarRemOffset: DQ
        } = QQ;
        const kQ = wQ.current;
        cq(kQ);
        const vQ = FQ.current;
        if (!(qQ >= 0) || !vQ) return;
        null === (LQ = kQ.endedAnimation) || void 0 === LQ || LQ.cancel(), kQ.endedAnimation = null;
        const mQ = vQ.animate([{
          transform: "scaleX(0)"
        }, {
          transform: "scaleX(1)"
        }], {
          duration: qQ,
          fill: "forwards"
        });
        kQ.timed = {
          vF: oQ,
          horizBarRemOffset: DQ,
          animation: mQ
        }
      })), (0, kQ.g)("middleScreenBarRemove", (() => {
        cq(wQ.current)
      })), (0, LQ.useEffect)((() => {
        const LQ = wQ.current;
        let qQ = Number.NaN,
          oQ = Number.NaN,
          DQ = Number.NaN;
        return (0, xL.q)((() => {
          var wQ, kQ, vQ, mQ;
          const uQ = QQ.current,
            HQ = FQ.current;
          if (!uQ || !HQ) return;
          null !== (wQ = LQ.timed) && void 0 !== wQ && wQ.vF && "finished" === LQ.timed.animation.playState && cq(LQ), null === (kQ = LQ.endedAnimation) || void 0 === kQ || kQ.cancel(), LQ.endedAnimation = null;
          let YQ = LQ.timed ? 1 : 0;
          if (!LQ.timed) {
            const QQ = bQ.gameBridge.lookup("momentumFrac", null);
            YQ = QQ > 0 ? 1 : 0, QQ !== DQ && (DQ = QQ, HQ.style.transform = `scaleX(${QQ})`)
          }
          const xQ = null !== (vQ = null === (mQ = LQ.timed) || void 0 === mQ ? void 0 : mQ.horizBarRemOffset) && void 0 !== vQ ? vQ : 0;
          xQ === qQ && YQ === oQ || (qQ = xQ, oQ = YQ, uQ.style.transform = `translateX(calc(-50% + ${xQ}rem)) scaleX(${YQ})`)
        }))
      }), []), (0, mQ.jsx)("div", {
        className: "MiddleScreenBar",
        ref: QQ,
        children: (0, mQ.jsx)("div", {
          className: "MiddleScreenBarFill",
          ref: FQ
        })
      })
    }));
    var Sq = wQ(4524),
      iq = wQ(2640);

    function Wq() {
      const {
        t: QQ
      } = (0, rQ.y)(), FQ = (0, kQ.i)("serverUpdating", null), wQ = (0, iq.e)(250, null !== FQ);
      return null === FQ || wQ - FQ > 3e4 ? null : (0, mQ.jsxs)("div", {
        className: "UpdateCountdownBanner",
        children: [(0, mQ.jsx)("div", {
          className: "UpdateCountdownBannerTitle",
          children: QQ("updateWaiting:updatingIn", {
            countdown: (0, Sq.t)(FQ - wQ)
          })
        }), (0, mQ.jsx)("div", {
          children: QQ("updateWaiting:bringYouBack")
        })]
      })
    }
    var Rq = wQ(36549),
      Oq = wQ(1940);
    const sq = [{
        translationKey: "general:interact"
      }],
      rq = (0, LQ.memo)((function() {
        const QQ = (0, GQ.l)("crosshairText"),
          {
            interactPrompt: FQ,
            blockText: wQ,
            neededTool: qQ
          } = (0, SQ.k)("crosshairTarget"),
          {
            isTouchScreen: oQ
          } = (0, iQ.l)(["isTouchScreen"]),
          DQ = (0, RQ.n)(),
          uQ = (0, sQ.b)("alt-fire");
        (0, LQ.useEffect)((() => {
          bQ.gameBridge.send("setCrosshairInteractPrompt", !oQ || DQ ? "key" : "touch")
        }), [oQ, DQ]);
        const [HQ, YQ] = (0, LQ.useReducer)((QQ => QQ + 1), 0);
        (0, kQ.g)("customBindingsChanged", YQ);
        var xQ;
        if (null !== FQ && (DQ && null !== uQ || !oQ && null !== (0, Oq.n)("alt-fire"))) return (0, mQ.jsxs)("div", {
          className: "CrosshairText SmallTextBold InteractPrompt",
          children: [(0, mQ.jsx)(WQ.e, {
            noaAction: "alt-fire"
          }), (0, mQ.jsx)(vQ.e, {
            text: null !== (xQ = FQ.label) && void 0 !== xQ ? xQ : sq
          })]
        });
        let AQ = null;
        return null !== wQ ? AQ = wQ : null !== QQ && "" !== QQ ? AQ = QQ : null !== qQ && (AQ = [{
          icon: qQ,
          style: {
            opacity: .8
          }
        }, {
          str: " needed",
          style: {
            opacity: .8
          }
        }]), AQ ? (0, mQ.jsx)("div", {
          className: "CrosshairText SmallTextBold",
          children: (0, mQ.jsx)(vQ.e, {
            text: AQ
          })
        }) : null
      }));
    var Iq = wQ(2473);
    const Uq = (0, LQ.memo)((function() {
      var QQ;
      const {
        interactPrompt: FQ
      } = (0, SQ.k)("crosshairTarget"), {
        openInGameMenuName: wQ,
        openEverythingMenuName: LQ
      } = (0, iQ.l)(["openInGameMenuName", "openEverythingMenuName"]), qQ = (0, kQ.i)("aimingOverlay", "none"), oQ = (0, gQ.l)(), DQ = (0, Iq.e)();
      return null === FQ || null !== wQ || null !== LQ || "sniper" === qQ || oQ || DQ ? null : (0, mQ.jsx)(Nq, {
        label: null !== (QQ = FQ.label) && void 0 !== QQ ? QQ : sq
      })
    }));

    function Nq(QQ) {
      let {
        label: FQ
      } = QQ;
      const wQ = sF(yQ.c.Interact, !1);
      return (0, LQ.useEffect)((() => (pQ.l.GA(AF.v), () => {
        pQ.l.GA(AF.v)
      })), []), (0, mQ.jsx)("div", {
        ref: wQ,
        className: "TouchInteractHit",
        children: (0, mQ.jsxs)("div", {
          className: "TouchInteractKey",
          children: [(0, mQ.jsx)("span", {
            className: "TouchInteractIcon",
            children: (0, mQ.jsx)(lQ.c, {
              name: "hand-back-point-up"
            })
          }), (0, mQ.jsx)(vQ.e, {
            text: FQ
          })]
        })
      })
    }
    var Tq = wQ(4612),
      Kq = wQ(4665);
    const zq = (0, LQ.forwardRef)((function(QQ, FQ) {
        let {
          text: wQ,
          className: LQ,
          children: qQ
        } = QQ;
        return wQ.hasText ? (0, mQ.jsx)("div", {
          ref: FQ,
          className: oQ()("HudTextPanel", LQ, {
            NoBackground: !wQ.showBackground
          }),
          children: null !== qQ && void 0 !== qQ ? qQ : (0, mQ.jsx)(vQ.e, {
            text: wQ.content
          })
        }) : null
      })),
      lq = (0, LQ.memo)((function() {
        const QQ = (0, GQ.o)("middleTextTop"),
          [FQ, wQ] = (0, LQ.useState)(null),
          qQ = (0, SL.h)(FQ);
        return QQ.hasText ? (0, mQ.jsx)("div", {
          className: oQ()("MiddleTextTopContainer", {
            MiddleTextTopBelow: qQ
          }),
          children: (0, mQ.jsx)(zq, {
            ref: wQ,
            className: "MiddleTextTop",
            text: QQ
          })
        }) : null
      })),
      jq = (0, LQ.memo)((function() {
        const QQ = (0, GQ.d)();
        return (0, mQ.jsx)(mQ.Fragment, {
          children: QQ.map(((QQ, FQ) => (0, mQ.jsx)(zq, {
            className: "HeaderChip",
            text: QQ
          }, FQ)))
        })
      }));
    var aq = wQ(3501),
      Xq = wQ(4452);
    const fq = (0, LQ.memo)((function() {
      const {
        t: QQ
      } = (0, rQ.y)(), [FQ, wQ] = (0, LQ.useState)(!1), qQ = (0, LQ.useRef)(!1), oQ = function(QQ) {
        let {
          gameNameWithVariation: FQ,
          lobbyName: wQ
        } = QQ;
        if ((0, bq.f)(FQ)) return Vq;
        if ((0, Yq.M)(wQ)) return hq;
        return null
      }((0, SQ.k)("connectedGame"));
      if (!oQ || FQ) return null;
      const DQ = Xq.c[oQ.target];
      return (0, mQ.jsx)(zQ.f, {
        tooltipInner: (0, mQ.jsx)("div", {
          children: QQ(DQ.reportButtonTooltip)
        }),
        children: (0, mQ.jsx)("div", {
          children: (0, mQ.jsx)(Ow.H, {
            onClick: () => {
              qQ.current || (qQ.current = !0, (0, Xq.g)(oQ.reportPolicyIds, DQ).then((QQ => {
                null !== QQ && void 0 !== QQ && QQ.selectedPolicyId && (bQ.gameBridge.send("reportLobbyOrGame", {
                  target: oQ.target,
                  Hm: QQ.selectedPolicyId,
                  details: QQ.bm
                }), wQ(!0))
              })).finally((() => {
                qQ.current = !1
              })))
            }
          })
        })
      })
    }));
    const Vq = {
        target: "customGame",
        reportPolicyIds: aq.d
      },
      hq = {
        target: "lobby",
        reportPolicyIds: aq.e
      };
    var Jq = wQ(8537),
      Eq = wQ(36568),
      nq = wQ(36573),
      gq = wQ(36577),
      Pq = wQ(36585),
      Zq = wQ(36605);

    function yq(QQ) {
      return QQ instanceof Error && Bq.has(QQ.message) ? QQ.message : void 0
    }
    const Bq = new Set([Zq.c.saveBusy.text, Zq.c.saveClosed.text, Zq.c.cropBusy.text]);
    let dq = !1;
    async function Qo(QQ, FQ) {
      var wQ, LQ;
      const {
        files: qQ
      } = FQ, oQ = qQ.replayKey();
      if (null === oQ) return "none";
      if (dq) throw new Error(Zq.c.saveBusy.text);
      const DQ = null !== (wQ = null === (LQ = qQ.saveRefusal) || void 0 === LQ ? void 0 : LQ.call(qQ)) && void 0 !== wQ ? wQ : null;
      if (null !== DQ) throw new Error(DQ);
      dq = !0;
      try {
        return await async function(QQ, FQ, wQ) {
          const {
            files: LQ
          } = FQ, qQ = () => LQ.replayKey() === wQ, oQ = (QQ, FQ) => {
            qQ() && LQ.markSaved(QQ, FQ)
          };
          let DQ = null;
          if (FQ.pickerSupported()) {
            try {
              if (DQ = await FQ.chooseFile(QQ ? null : LQ.fileHandle()), null === DQ) return "wF"
            } catch (vQ) {
              FQ.onFallback(vQ)
            }
            if (!qQ()) throw new Error(Zq.c.saveClosed.text)
          }
          const kQ = await LQ.encode();
          if (null === kQ) {
            if (null !== DQ) throw new Error(Zq.c.saveClosed.text);
            return "none"
          }
          if (null !== DQ) try {
            return await FQ.write(DQ, kQ), oQ(DQ), "written"
          } catch (vQ) {
            FQ.onFallback(vQ)
          }
          return oQ(null, FQ.download(kQ)), "downloaded"
        }(QQ, FQ, oQ)
      } finally {
        dq = !1
      }
    }
    var Fo = wQ(4388),
      wo = wQ(71);
    const Lo = [1, 2, 4, 8, 16, 32, 64];

    function qo(QQ, FQ) {
      return Math.max(0, Math.min(QQ, FQ))
    }

    function oo(QQ, FQ, wQ) {
      return wQ <= FQ ? 0 : (QQ - FQ) / (wQ - FQ) * 100
    }

    function Do(QQ, FQ, wQ) {
      const LQ = wQ - FQ;
      return Math.round(FQ + QQ / 100 * LQ)
    }

    function ko(QQ, FQ) {
      const wQ = Math.floor(QQ / FQ / 60),
        LQ = Math.floor(QQ / FQ % 60),
        qQ = QQ % FQ;
      return `${wQ.toString().padStart(2,"0")}:${LQ.toString().padStart(2,"0")}:${qQ.toString().padStart(2,"0")}`
    }

    function vo(QQ) {
      return Number.isInteger(QQ) || Lo.includes(QQ) ? `${Math.round(QQ)}\xd7` : `${QQ.toFixed(1)}\xd7`
    }

    function mo(QQ, FQ) {
      const wQ = Lo.indexOf(QQ);
      if (-1 !== wQ) return "in" === FQ ? Lo[Math.min(wQ + 1, Lo.length - 1)] : Lo[Math.max(wQ - 1, 0)];
      if ("in" === FQ) {
        for (const FQ of Lo)
          if (FQ >= QQ) return FQ;
        return QQ
      }
      for (let LQ = Lo.length - 1; LQ >= 0; LQ--)
        if (Lo[LQ] <= QQ) return Lo[LQ];
      return Lo[0]
    }

    function uo(QQ, FQ) {
      const wQ = FQ.getBoundingClientRect();
      if (wQ.width <= 0) return 0;
      const LQ = (QQ - wQ.left) / wQ.width * 100;
      return Math.max(0, Math.min(100, LQ))
    }

    function Ho(QQ, FQ) {
      return FQ <= 0 ? 0 : QQ / FQ * 100
    }

    function bo(QQ, FQ, wQ) {
      const LQ = [];
      let qQ = Math.ceil(QQ / wQ) * wQ;
      for (; qQ <= FQ;) LQ.push(qQ), qQ += wQ;
      return LQ
    }
    var Yo = wQ(36607);
    const xo = [{
        label: "Linear",
        easing: Yo.i
      }, {
        label: "Ease",
        easing: [.25, .1, .25, 1]
      }, {
        label: "Ease In",
        easing: Yo.e
      }, {
        label: "Ease Out",
        easing: Yo.f
      }, {
        label: "Ease In Out",
        easing: Yo.d
      }],
      Ao = 200,
      to = 150;

    function eo(QQ) {
      const FQ = QQ => Number(QQ.toFixed(3)).toString();
      return `cubic-bezier(${FQ(QQ[0])}, ${FQ(QQ[1])}, ${FQ(QQ[2])}, ${FQ(QQ[3])})`
    }

    function Mo(QQ, FQ) {
      return {
        cx: 25 + QQ * to,
        cy: 25 + (1 - FQ) * to
      }
    }

    function Go(QQ, FQ, wQ) {
      const LQ = QQ - wQ.left,
        qQ = FQ - wQ.top;
      return {
        x: lw.e.clamp((LQ - 25) / to, 0, 1),
        y: lw.e.clamp(1 - (qQ - 25) / to, -1, 2)
      }
    }

    function po(QQ, FQ, wQ, LQ, qQ) {
      return {
        x: (0, Yo.r)(QQ, wQ, qQ),
        y: (0, Yo.r)(FQ, LQ, qQ)
      }
    }
    const co = (0, LQ.memo)((function(QQ) {
      let {
        value: FQ,
        onChange: wQ
      } = QQ;
      const qQ = (0, LQ.useRef)(null),
        oQ = (0, LQ.useRef)(null),
        [DQ, kQ] = (0, LQ.useState)(null),
        vQ = (0, LQ.useCallback)((() => {
          const QQ = qQ.current;
          if (!QQ) return;
          const wQ = QQ.getContext("2d");
          if (!wQ) return;
          const LQ = window.devicePixelRatio || 1;
          QQ.width = Ao * LQ, QQ.height = Ao * LQ, wQ.setTransform(LQ, 0, 0, LQ, 0, 0), wQ.clearRect(0, 0, Ao, Ao), wQ.fillStyle = "rgba(38, 52, 93, 0.85)", wQ.fillRect(0, 0, Ao, Ao), wQ.beginPath();
          const oQ = Mo(0, 0),
            kQ = Mo(1, 1);
          wQ.moveTo(oQ.cx, oQ.cy), wQ.lineTo(kQ.cx, kQ.cy), wQ.strokeStyle = "rgba(164, 164, 164, 0.35)", wQ.setLineDash([3, 3]), wQ.stroke(), wQ.setLineDash([]);
          const [vQ, mQ, uQ, HQ] = FQ, bQ = Mo(vQ, mQ), YQ = Mo(uQ, HQ);
          wQ.strokeStyle = "rgba(252, 211, 115, 0.55)", wQ.lineWidth = 1.5, wQ.beginPath(), wQ.moveTo(oQ.cx, oQ.cy), wQ.lineTo(bQ.cx, bQ.cy), wQ.moveTo(kQ.cx, kQ.cy), wQ.lineTo(YQ.cx, YQ.cy), wQ.stroke(), wQ.strokeStyle = "#fcd373", wQ.lineWidth = 2, wQ.beginPath();
          for (let FQ = 0; FQ <= 50; FQ++) {
            const QQ = po(vQ, mQ, uQ, HQ, FQ / 50),
              LQ = Mo(QQ.x, QQ.y);
            0 === FQ ? wQ.moveTo(LQ.cx, LQ.cy) : wQ.lineTo(LQ.cx, LQ.cy)
          }
          wQ.stroke();
          const xQ = (QQ, FQ, LQ) => {
            wQ.beginPath(), wQ.arc(QQ, FQ, LQ ? 6 : 5, 0, 2 * Math.PI), wQ.fillStyle = LQ ? "#ffb914" : "#fcd373", wQ.fill(), wQ.strokeStyle = "#1a1f2e", wQ.lineWidth = 1.5, wQ.stroke()
          };
          xQ(bQ.cx, bQ.cy, "p1" === DQ), xQ(YQ.cx, YQ.cy, "p2" === DQ)
        }), [DQ, FQ]);
      (0, LQ.useEffect)((() => {
        vQ()
      }), [vQ]);
      const uQ = (0, LQ.useCallback)(((QQ, LQ) => {
          const DQ = qQ.current,
            kQ = oQ.current;
          if (!DQ || !kQ) return;
          const vQ = DQ.getBoundingClientRect(),
            {
              x: mQ,
              y: uQ
            } = Go(QQ, LQ, vQ);
          wQ("p1" === kQ ? [mQ, uQ, FQ[2], FQ[3]] : [FQ[0], FQ[1], mQ, uQ])
        }), [wQ, FQ]),
        HQ = (0, LQ.useCallback)((QQ => {
          const wQ = qQ.current;
          if (!wQ) return;
          const LQ = wQ.getBoundingClientRect();
          let {
            x: DQ,
            y: vQ
          } = Go(QQ.clientX, QQ.clientY, LQ);
          DQ = lw.e.clamp(DQ, 0, 1), vQ = lw.e.clamp(vQ, 0, 1);
          const [mQ, HQ, bQ, YQ] = FQ.map((QQ => lw.e.clamp(QQ, 0, 1))), xQ = Math.hypot(DQ - mQ, vQ - HQ), AQ = Math.hypot(DQ - bQ, vQ - YQ), tQ = xQ <= AQ ? "p1" : "p2";
          ("p1" === tQ ? xQ : AQ) > .12 || (oQ.current = tQ, kQ(tQ), wQ.setPointerCapture(QQ.pointerId), uQ(QQ.clientX, QQ.clientY))
        }), [uQ, FQ]),
        bQ = (0, LQ.useCallback)((QQ => {
          oQ.current && uQ(QQ.clientX, QQ.clientY)
        }), [uQ]),
        YQ = (0, LQ.useCallback)((QQ => {
          oQ.current = null, kQ(null), QQ.currentTarget.hasPointerCapture(QQ.pointerId) && QQ.currentTarget.releasePointerCapture(QQ.pointerId)
        }), []);
      return (0, mQ.jsxs)("div", {
        className: "CubicBezierEasingEditor",
        children: [(0, mQ.jsx)("canvas", {
          ref: qQ,
          className: "CubicBezierEasingEditorCanvas",
          style: {
            width: Ao,
            height: Ao
          },
          onPointerDown: HQ,
          onPointerMove: bQ,
          onPointerUp: YQ,
          onPointerCancel: YQ
        }), (0, mQ.jsx)("span", {
          className: "CubicBezierEasingEditorReadout",
          children: eo(FQ)
        })]
      })
    }));
    var Co = wQ(1690),
      So = wQ(1668);
    const io = 12;

    function Wo(QQ) {
      return {
        left: QQ.left + QQ.width / 2,
        top: QQ.top - 8
      }
    }

    function Ro(QQ, FQ) {
      const [wQ, qQ] = (0, LQ.useState)(null);
      return (0, LQ.useLayoutEffect)((() => {
        const wQ = QQ.current;
        if (!wQ) return;
        const {
          width: LQ,
          height: oQ
        } = wQ.getBoundingClientRect();
        qQ(function(QQ, FQ, wQ) {
          const LQ = window.innerWidth,
            qQ = window.innerHeight,
            oQ = FQ / 2;
          let DQ = QQ.left + QQ.width / 2;
          DQ = Math.max(io + oQ, Math.min(DQ, LQ - io - oQ));
          const kQ = QQ.top - 8 - io,
            vQ = qQ - QQ.bottom - 8 - io,
            mQ = kQ < wQ && vQ >= kQ;
          let uQ;
          mQ ? (uQ = QQ.bottom + 8, uQ + wQ > qQ - io && (uQ = qQ - io - wQ), uQ = Math.max(io, uQ)) : (uQ = QQ.top - 8, uQ - wQ < io && (uQ = io + wQ));
          return {
            left: DQ,
            top: uQ,
            placeBelow: mQ
          }
        }(FQ, LQ, oQ))
      }), [FQ, QQ]), wQ
    }

    function Oo(QQ, FQ, wQ) {
      (0, LQ.useEffect)((() => (0, So.c)("pointerdown", (LQ => {
        var qQ, oQ;
        const DQ = LQ.target;
        DQ instanceof Node && (null !== (qQ = QQ.current) && void 0 !== qQ && qQ.contains(DQ) || null !== wQ && void 0 !== wQ && null !== (oQ = wQ.current) && void 0 !== oQ && oQ.contains(DQ) || (0, Co.h)(DQ) || FQ())
      }))), [wQ, FQ, QQ])
    }

    function so(QQ) {
      let {
        label: FQ,
        value: wQ,
        onChange: LQ
      } = QQ;
      return (0, mQ.jsxs)("div", {
        className: "ReplayKeyframePopoverVec3",
        children: [(0, mQ.jsx)("span", {
          className: "ReplayKeyframePopoverVec3Label",
          children: FQ
        }), (0, mQ.jsx)("div", {
          className: "ReplayKeyframePopoverVec3Inputs",
          children: ["X", "Y", "Z"].map(((QQ, FQ) => (0, mQ.jsxs)("label", {
            className: "ReplayKeyframePopoverAxis",
            children: [(0, mQ.jsx)("span", {
              children: QQ
            }), (0, mQ.jsx)("input", {
              type: "number",
              step: "any",
              value: wQ[FQ],
              onChange: QQ => {
                const qQ = Number.parseFloat(QQ.target.value);
                if (Number.isNaN(qQ)) return;
                const oQ = [wQ[0], wQ[1], wQ[2]];
                oQ[FQ] = qQ, LQ(oQ)
              }
            })]
          }, QQ)))
        })]
      })
    }
    const ro = (0, LQ.memo)((function(QQ) {
        var FQ, wQ, qQ;
        let {
          keyframe: DQ,
          anchor: kQ,
          hasOutgoingSegment: vQ,
          onClose: uQ,
          onApply: HQ,
          onDelete: bQ,
          onUseCurrentCamera: YQ
        } = QQ;
        const xQ = (0, LQ.useRef)(null),
          AQ = Ro(xQ, kQ.rect),
          [tQ, eQ] = (0, LQ.useState)((() => [DQ.position[0], DQ.position[1], DQ.position[2]])),
          [MQ, GQ] = (0, LQ.useState)((() => [DQ.direction[0], DQ.direction[1], DQ.direction[2]])),
          [pQ, cQ] = (0, LQ.useState)((() => DQ.easing));
        (0, LQ.useEffect)((() => {
          eQ([DQ.position[0], DQ.position[1], DQ.position[2]]), GQ([DQ.direction[0], DQ.direction[1], DQ.direction[2]]), cQ(DQ.easing)
        }), [DQ]), Oo(xQ, uQ);
        const CQ = (0, LQ.useCallback)((() => {
            HQ({
              fH: DQ.fH,
              position: tQ,
              direction: MQ,
              easing: pQ
            }), uQ()
          }), [MQ, pQ, DQ.fH, HQ, uQ, tQ]),
          SQ = (0, LQ.useCallback)((() => {
            bQ(DQ.fH), uQ()
          }), [DQ.fH, bQ, uQ]),
          iQ = (0, LQ.useCallback)((() => {
            const QQ = YQ();
            QQ && (eQ([QQ.position[0], QQ.position[1], QQ.position[2]]), GQ([QQ.direction[0], QQ.direction[1], QQ.direction[2]]))
          }), [YQ]),
          WQ = Wo(kQ.rect);
        return (0, mQ.jsxs)("div", {
          ref: xQ,
          className: oQ()("ReplayViewerPopover ReplayKeyframePopover", {
            Below: null !== (FQ = null === AQ || void 0 === AQ ? void 0 : AQ.placeBelow) && void 0 !== FQ && FQ,
            Positioned: null !== AQ
          }),
          style: {
            left: `${null!==(wQ=null===AQ||void 0===AQ?void 0:AQ.left)&&void 0!==wQ?wQ:WQ.left}px`,
            top: `${null!==(qQ=null===AQ||void 0===AQ?void 0:AQ.top)&&void 0!==qQ?qQ:WQ.top}px`
          },
          onPointerDown: QQ => {
            QQ.stopPropagation()
          },
          children: [(0, mQ.jsxs)("div", {
            className: "ReplayKeyframePopoverHeader",
            children: [(0, mQ.jsx)("span", {
              className: "ReplayKeyframePopoverTitle",
              children: "Camera keyframe"
            }), (0, mQ.jsxs)("span", {
              className: "ReplayKeyframePopoverTick",
              children: ["Tick ", kQ.fH]
            })]
          }), (0, mQ.jsx)(so, {
            label: "Position",
            value: tQ,
            onChange: eQ
          }), (0, mQ.jsx)(so, {
            label: "Direction",
            value: MQ,
            onChange: GQ
          }), vQ && (0, mQ.jsxs)("div", {
            className: "ReplayKeyframePopoverEasing",
            children: [(0, mQ.jsx)("span", {
              className: "ReplayKeyframePopoverEasingLabel",
              children: "Easing to next"
            }), (0, mQ.jsx)("div", {
              className: "ReplayKeyframePopoverEasingPresets",
              children: xo.map((QQ => {
                const FQ = (wQ = pQ, LQ = QQ.easing, wQ[0] === LQ[0] && wQ[1] === LQ[1] && wQ[2] === LQ[2] && wQ[3] === LQ[3]);
                var wQ, LQ;
                return (0, mQ.jsx)(Ow.L, {
                  className: oQ()("ReplayKeyframePopoverPreset", {
                    Active: FQ
                  }),
                  onClick: () => {
                    cQ(QQ.easing)
                  },
                  children: QQ.label
                }, QQ.label)
              }))
            }), (0, mQ.jsx)(co, {
              value: pQ,
              onChange: cQ
            })]
          }), (0, mQ.jsxs)("div", {
            className: "ReplayKeyframePopoverActions",
            children: [(0, mQ.jsx)(Ow.f, {
              className: "ReplayViewerCompactButton",
              onClick: iQ,
              children: "Use current view"
            }), (0, mQ.jsx)(Ow.m, {
              className: "ReplayViewerCompactButton",
              onClick: CQ,
              children: "Apply"
            }), (0, mQ.jsx)(Ow.F, {
              className: "ReplayViewerCompactButton",
              onClick: SQ,
              children: "Delete"
            })]
          })]
        })
      })),
      Io = (0, LQ.memo)((function(QQ) {
        var FQ, wQ, qQ;
        let {
          anchor: DQ,
          hasPlaybackMark: kQ,
          onClose: vQ,
          onMark: uQ,
          onZoom: HQ,
          onCrop: bQ,
          onDeleteKeyframes: YQ,
          onClearMark: xQ
        } = QQ;
        const AQ = (0, LQ.useRef)(null),
          tQ = Ro(AQ, DQ.rect),
          eQ = Wo(DQ.rect),
          MQ = {
            startTick: DQ.startTick,
            endTick: DQ.endTick
          },
          GQ = DQ.endTick > DQ.startTick;
        return Oo(AQ, vQ), (0, mQ.jsx)("div", {
          ref: AQ,
          className: oQ()("ReplayViewerPopover ReplayTimelineSelectionPopover", {
            Below: null !== (FQ = null === tQ || void 0 === tQ ? void 0 : tQ.placeBelow) && void 0 !== FQ && FQ,
            Positioned: null !== tQ
          }),
          style: {
            left: `${null!==(wQ=null===tQ||void 0===tQ?void 0:tQ.left)&&void 0!==wQ?wQ:eQ.left}px`,
            top: `${null!==(qQ=null===tQ||void 0===tQ?void 0:tQ.top)&&void 0!==qQ?qQ:eQ.top}px`
          },
          onPointerDown: QQ => {
            QQ.stopPropagation()
          },
          children: (0, mQ.jsxs)("div", {
            className: "ReplayTimelineSelectionPopoverActions",
            children: [(0, mQ.jsx)(Ow.m, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                uQ(MQ)
              },
              disabled: !GQ,
              children: (0, mQ.jsx)("span", {
                children: " Play range "
              })
            }), (0, mQ.jsx)(Ow.f, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                HQ(MQ)
              },
              children: (0, mQ.jsx)("span", {
                children: " Zoom "
              })
            }), (0, mQ.jsx)(Ow.L, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                bQ(MQ)
              },
              disabled: !GQ,
              children: (0, mQ.jsx)("span", {
                children: " Crop "
              })
            }), (0, mQ.jsx)(Ow.L, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                YQ(MQ)
              },
              children: (0, mQ.jsx)("span", {
                children: " Delete all keyframes "
              })
            }), kQ && (0, mQ.jsx)(Ow.L, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                xQ()
              },
              children: (0, mQ.jsx)("span", {
                children: " Clear range "
              })
            })]
          })
        })
      })),
      Uo = (0, LQ.memo)((function(QQ) {
        var FQ, wQ;
        let {
          maxTick: qQ,
          displayTick: DQ,
          mN: kQ,
          cameraKeyframes: vQ,
          playbackMark: uQ,
          onSeek: HQ,
          onPause: bQ,
          onScrubTickChange: YQ,
          onMoveCameraKeyframe: xQ,
          onUpdateCameraKeyframe: AQ,
          onDeleteCameraKeyframe: tQ,
          onUseCurrentCamera: eQ,
          onMarkRange: MQ,
          onCropRange: GQ,
          onDeleteKeyframesInRange: pQ,
          onClearMark: cQ,
          zoomLevel: CQ,
          onZoomLevelChange: SQ
        } = QQ;
        const iQ = (0, LQ.useRef)(null),
          WQ = (0, LQ.useRef)(null),
          RQ = (0, LQ.useRef)(!1),
          OQ = (0, LQ.useRef)(!1),
          sQ = (0, LQ.useRef)(CQ),
          rQ = (0, LQ.useRef)(null),
          IQ = (0, LQ.useRef)(null),
          UQ = (0, LQ.useRef)(null),
          NQ = (0, LQ.useRef)(null),
          [TQ, KQ] = (0, LQ.useState)(null),
          [zQ, lQ] = (0, LQ.useState)(DQ),
          [jQ, aQ] = (0, LQ.useState)(null),
          [XQ, fQ] = (0, LQ.useState)(null),
          [VQ, hQ] = (0, LQ.useState)(null),
          [JQ, EQ] = (0, LQ.useState)(null),
          nQ = (0, LQ.useMemo)((() => vQ.map((QQ => QQ.fH))), [vQ]),
          gQ = null !== TQ && void 0 !== TQ ? TQ : DQ,
          {
            viewStart: PQ,
            viewEnd: ZQ
          } = (0, LQ.useMemo)((() => function(QQ) {
            const FQ = QQ.maxTick + 1,
              wQ = Math.max(1, Math.ceil(FQ / QQ.zoomLevel)),
              LQ = Math.floor(wQ / 2);
            let qQ = QQ.centerTick - LQ;
            return qQ = Math.max(0, Math.min(qQ, QQ.maxTick - wQ + 1)), {
              viewStart: qQ,
              viewEnd: Math.min(QQ.maxTick, qQ + wQ - 1)
            }
          }({
            maxTick: qQ,
            zoomLevel: CQ,
            centerTick: zQ
          })), [qQ, CQ, zQ]);
        (0, LQ.useEffect)((() => {
          if (null !== TQ || null !== IQ.current || null !== UQ.current || null !== NQ.current) return;
          if (RQ.current) return void(RQ.current = !1);
          if (OQ.current) return void(OQ.current = !1);
          const QQ = sQ.current !== CQ;
          sQ.current = CQ, QQ && lQ(DQ)
        }), [CQ, DQ, TQ]);
        const yQ = (0, LQ.useCallback)((QQ => {
            let FQ = qo(QQ, qQ);
            return uQ && (FQ = Math.max(uQ.inTick, Math.min(FQ, uQ.outTick))), FQ
          }), [qQ, uQ]),
          BQ = (0, LQ.useCallback)(((QQ, FQ) => {
            const wQ = yQ(QQ);
            HQ(wQ), FQ && lQ(wQ)
          }), [yQ, HQ]),
          dQ = (0, LQ.useCallback)(((QQ, FQ) => {
            const wQ = yQ(QQ);
            KQ(wQ), YQ(wQ), BQ(wQ, FQ)
          }), [yQ, BQ, YQ]),
          QF = (0, LQ.useCallback)((() => {
            KQ((QQ => (null !== QQ && lQ(QQ), null))), YQ(null)
          }), [YQ]),
          FF = (0, LQ.useCallback)((() => {
            hQ(null), EQ(null)
          }), []),
          wF = (0, LQ.useCallback)((QQ => {
            const FQ = iQ.current;
            if (!FQ) return 0;
            return qo(Do(uo(QQ, FQ), PQ, ZQ), qQ)
          }), [qQ, ZQ, PQ]),
          LF = (0, LQ.useCallback)((QQ => {
            const FQ = WQ.current;
            if (!FQ) return 0;
            return qo(Do(uo(QQ, FQ), 0, qQ), qQ)
          }), [qQ]),
          qF = (0, LQ.useMemo)((() => {
            if (!jQ) return [...nQ];
            const QQ = nQ.filter((QQ => QQ !== jQ.fromTick));
            return QQ.push(jQ.previewTick), QQ.sort(((QQ, FQ) => QQ - FQ)), QQ
          }), [nQ, jQ]),
          oF = (0, LQ.useMemo)((() => {
            var QQ;
            return XQ && null !== (QQ = vQ.find((QQ => QQ.fH === XQ.fH))) && void 0 !== QQ ? QQ : null
          }), [vQ, XQ]),
          DF = (0, LQ.useMemo)((() => !!oF && vQ.some((QQ => QQ.fH > oF.fH))), [vQ, oF]);
        (0, LQ.useEffect)((() => {
          XQ && !oF && fQ(null)
        }), [XQ, oF]), (0, LQ.useEffect)((() => {
          if (!JQ) return () => {};
          const QQ = QQ => {
            "Escape" === QQ.key && FF()
          };
          return window.addEventListener("keydown", QQ), () => {
            window.removeEventListener("keydown", QQ)
          }
        }), [FF, JQ]);
        const kF = (0, LQ.useCallback)(((QQ, FQ) => {
            FF(), bQ(), HQ(QQ, {
              ignorePlaybackMark: !0
            }), fQ({
              fH: QQ,
              rect: FQ.getBoundingClientRect()
            })
          }), [FF, bQ, HQ]),
          vF = (0, LQ.useCallback)(((QQ, FQ) => wQ => {
            0 === wQ.button && (wQ.stopPropagation(), fQ(null), FF(), bQ(), rQ.current = {
              fromTick: QQ,
              startX: wQ.clientX,
              startY: wQ.clientY,
              didDrag: !1,
              track: FQ
            }, aQ({
              fromTick: QQ,
              previewTick: QQ,
              track: FQ
            }), wQ.currentTarget.setPointerCapture(wQ.pointerId))
          }), [FF, bQ]),
          mF = (0, LQ.useCallback)((QQ => {
            if (!jQ) return;
            QQ.stopPropagation();
            const FQ = rQ.current;
            if (FQ && !FQ.didDrag) {
              const wQ = QQ.clientX - FQ.startX,
                LQ = QQ.clientY - FQ.startY;
              Math.hypot(wQ, LQ) > 5 && (FQ.didDrag = !0)
            }
            const wQ = "detail" === jQ.track ? wF(QQ.clientX) : LF(QQ.clientX);
            wQ !== jQ.previewTick && aQ({
              ...jQ,
              previewTick: wQ
            })
          }), [jQ, wF, LF]),
          uF = (0, LQ.useCallback)((QQ => {
            if (!jQ) return;
            QQ.stopPropagation();
            const FQ = rQ.current,
              wQ = "detail" === jQ.track ? wF(QQ.clientX) : LF(QQ.clientX);
            FQ && !FQ.didDrag ? kF(FQ.fromTick, QQ.currentTarget) : wQ !== jQ.fromTick && xQ(jQ.fromTick, wQ), aQ(null), rQ.current = null, QQ.currentTarget.releasePointerCapture(QQ.pointerId)
          }), [jQ, xQ, kF, wF, LF]),
          HF = (0, LQ.useCallback)((QQ => {
            if (0 !== QQ.button) return;
            fQ(null), bQ();
            const FQ = wF(QQ.clientX);
            IQ.current = {
              pointerId: QQ.pointerId,
              startX: QQ.clientX,
              startY: QQ.clientY,
              startTick: FQ,
              currentTick: FQ,
              didSelect: !1
            }, hQ(null), EQ(null), QQ.currentTarget.setPointerCapture(QQ.pointerId)
          }), [bQ, wF]),
          bF = (0, LQ.useCallback)((QQ => {
            const FQ = IQ.current;
            if (!FQ || FQ.pointerId !== QQ.pointerId) return;
            const wQ = wF(QQ.clientX);
            if (FQ.currentTick = wQ, !FQ.didSelect) {
              const wQ = QQ.clientX - FQ.startX,
                LQ = QQ.clientY - FQ.startY;
              if (Math.hypot(wQ, LQ) <= 5) return;
              FQ.didSelect = !0
            }
            const LQ = Math.min(FQ.startTick, wQ),
              qQ = Math.max(FQ.startTick, wQ);
            hQ({
              startTick: LQ,
              endTick: qQ
            })
          }), [wF]),
          YF = (0, LQ.useCallback)((QQ => {
            const FQ = IQ.current;
            if (!FQ || FQ.pointerId !== QQ.pointerId) return;
            if (IQ.current = null, QQ.currentTarget.releasePointerCapture(QQ.pointerId), !FQ.didSelect) return FF(), void BQ(FQ.startTick, !0);
            const wQ = wF(QQ.clientX),
              LQ = Math.min(FQ.startTick, wQ),
              qQ = Math.max(FQ.startTick, wQ),
              oQ = {
                startTick: LQ,
                endTick: qQ
              };
            hQ(oQ);
            const DQ = iQ.current;
            if (!DQ) return;
            const kQ = DQ.getBoundingClientRect(),
              vQ = oo(LQ, PQ, ZQ) / 100,
              mQ = oo(qQ, PQ, ZQ) / 100,
              uQ = kQ.left + vQ * kQ.width,
              HQ = kQ.left + mQ * kQ.width;
            EQ({
              ...oQ,
              rect: new DOMRect(uQ, kQ.top, Math.max(HQ - uQ, 1), kQ.height)
            })
          }), [FF, BQ, wF, ZQ, PQ]),
          xF = (0, LQ.useCallback)((QQ => FQ => {
            if (0 !== FQ.button) return;
            FQ.stopPropagation(), fQ(null), FF(), bQ(), UQ.current = {
              pointerId: FQ.pointerId,
              track: QQ
            }, FQ.currentTarget.setPointerCapture(FQ.pointerId);
            const wQ = "detail" === QQ ? wF(FQ.clientX) : LF(FQ.clientX);
            dQ(wQ, !1)
          }), [FF, bQ, dQ, wF, LF]),
          AF = (0, LQ.useCallback)((QQ => {
            const FQ = UQ.current;
            if (!FQ || FQ.pointerId !== QQ.pointerId) return;
            QQ.stopPropagation();
            const wQ = "detail" === FQ.track ? wF(QQ.clientX) : LF(QQ.clientX);
            dQ(wQ, !1)
          }), [dQ, wF, LF]),
          tF = (0, LQ.useCallback)((QQ => {
            const FQ = UQ.current;
            FQ && FQ.pointerId === QQ.pointerId && (QQ.stopPropagation(), UQ.current = null, QQ.currentTarget.releasePointerCapture(QQ.pointerId), QF())
          }), [QF]),
          eF = (0, LQ.useCallback)((QQ => {
            0 === QQ.button && (FF(), bQ(), NQ.current = {
              pointerId: QQ.pointerId
            }, QQ.currentTarget.setPointerCapture(QQ.pointerId), dQ(LF(QQ.clientX), !0))
          }), [FF, bQ, dQ, LF]),
          MF = (0, LQ.useCallback)((QQ => {
            const FQ = NQ.current;
            FQ && FQ.pointerId === QQ.pointerId && dQ(LF(QQ.clientX), !0)
          }), [dQ, LF]),
          GF = (0, LQ.useCallback)((QQ => {
            const FQ = NQ.current;
            FQ && FQ.pointerId === QQ.pointerId && (NQ.current = null, QQ.currentTarget.releasePointerCapture(QQ.pointerId), QF())
          }), [QF]),
          pF = (0, LQ.useCallback)((QQ => {
            const FQ = Math.max(1, QQ.endTick - QQ.startTick + 1),
              wQ = qQ + 1,
              LQ = wQ / FQ,
              oQ = Math.max(1, Math.ceil(wQ / LQ)),
              DQ = QQ.startTick + Math.floor((oQ - 1) / 2);
            OQ.current = !0, sQ.current = LQ, lQ(qo(DQ, qQ)), SQ(LQ), FF()
          }), [FF, qQ, SQ]),
          cF = (0, LQ.useCallback)((QQ => {
            MQ(QQ), FF()
          }), [FF, MQ]),
          CF = (0, LQ.useCallback)((QQ => {
            GQ(QQ), FF()
          }), [FF, GQ]),
          SF = (0, LQ.useCallback)((QQ => {
            pQ(QQ), FF()
          }), [FF, pQ]),
          iF = (0, LQ.useCallback)((() => {
            cQ(), FF()
          }), [FF, cQ]);
        (0, LQ.useEffect)((() => {
          const QQ = iQ.current;
          if (!QQ) return () => {};
          const FQ = FQ => {
            FQ.preventDefault();
            const wQ = qo(Do(uo(FQ.clientX, QQ), PQ, ZQ), qQ),
              LQ = FQ.deltaY < 0 ? "in" : "out",
              oQ = mo(CQ, LQ);
            oQ !== CQ && (RQ.current = !0, lQ(wQ), SQ(oQ))
          };
          return QQ.addEventListener("wheel", FQ, {
            passive: !1
          }), () => {
            QQ.removeEventListener("wheel", FQ)
          }
        }), [qQ, SQ, ZQ, PQ, CQ]);
        const WF = oo(gQ, PQ, ZQ),
          RF = Ho(gQ, qQ),
          OF = Ho(PQ, qQ),
          sF = qQ > 0 ? Ho(ZQ, qQ) : 100,
          rF = null !== uQ,
          IF = null !== (FQ = null === uQ || void 0 === uQ ? void 0 : uQ.inTick) && void 0 !== FQ ? FQ : 0,
          UF = null !== (wQ = null === uQ || void 0 === uQ ? void 0 : uQ.outTick) && void 0 !== wQ ? wQ : qQ,
          NF = Ho(IF, qQ),
          TF = Math.max(Ho(UF, qQ) - NF, 0),
          KF = oo(Math.max(IF, PQ), PQ, ZQ),
          zF = oo(Math.min(UF, ZQ), PQ, ZQ),
          lF = Math.max(zF - KF, 0),
          jF = rF && UF >= PQ && IF <= ZQ,
          aF = oo(IF, PQ, ZQ),
          XF = oo(UF, PQ, ZQ),
          fF = rF && IF >= PQ && IF <= ZQ,
          VF = rF && UF >= PQ && UF <= ZQ,
          hF = Ho(IF, qQ),
          JF = Ho(UF, qQ),
          EF = null !== VQ && void 0 !== VQ ? VQ : JQ ? {
            startTick: JQ.startTick,
            endTick: JQ.endTick
          } : null,
          nF = EF ? oo(Math.max(EF.startTick, PQ), PQ, ZQ) : 0,
          gF = EF ? oo(Math.min(EF.endTick, ZQ), PQ, ZQ) : 0,
          PF = Math.max(gF - nF, 0),
          ZF = null !== EF && EF.endTick >= PQ && EF.startTick <= ZQ,
          yF = (0, LQ.useMemo)((() => bo(0, qQ, kQ)), [qQ, kQ]),
          BF = (0, LQ.useMemo)((() => bo(PQ, ZQ, kQ)), [PQ, ZQ, kQ]),
          dF = (0, LQ.useMemo)((() => qF.filter((QQ => QQ >= PQ && QQ <= ZQ))), [qF, ZQ, PQ]),
          Qw = (0, LQ.useCallback)(((QQ, FQ, wQ) => {
            const LQ = "detail" === FQ ? oo(QQ, PQ, ZQ) : Ho(QQ, qQ),
              DQ = null !== jQ && wQ === jQ.fromTick,
              kQ = null !== XQ && XQ.fH === wQ;
            return (0, mQ.jsx)("button", {
              type: "button",
              className: oQ()("ReplayTimelineCameraKeyframeMarker", "detail" === FQ ? "Detail" : "Overview", {
                Dragging: DQ,
                Selected: kQ
              }),
              style: {
                left: `${LQ}%`
              },
              onPointerDown: vF(wQ, FQ),
              onPointerMove: mF,
              onPointerUp: uF,
              onPointerCancel: uF,
              "aria-label": `Camera keyframe at tick ${wQ}`
            }, `cam-${FQ}-${wQ}`)
          }), [vF, XQ, uF, jQ, qQ, mF, ZQ, PQ]),
          Fw = (0, LQ.useCallback)((QQ => jQ && QQ === jQ.previewTick ? jQ.fromTick : QQ), [jQ]);
        return qQ <= 0 ? null : (0, mQ.jsxs)("div", {
          className: "ReplayTimeline",
          children: [XQ && oF && (0, wo.createPortal)((0, mQ.jsx)(ro, {
            keyframe: oF,
            anchor: XQ,
            hasOutgoingSegment: DF,
            onClose: () => {
              fQ(null)
            },
            onApply: AQ,
            onDelete: tQ,
            onUseCurrentCamera: eQ
          }), document.body), JQ && (0, wo.createPortal)((0, mQ.jsx)(Io, {
            anchor: JQ,
            hasPlaybackMark: rF,
            onClose: FF,
            onMark: cF,
            onZoom: pF,
            onCrop: CF,
            onDeleteKeyframes: SF,
            onClearMark: iF
          }), document.body), (0, mQ.jsxs)("div", {
            className: oQ()("ReplayTimelineOverviewSection", {
              Hidden: CQ <= 1
            }),
            children: [(0, mQ.jsx)("div", {
              className: "ReplayTimelineSectionLabel",
              children: "Overview"
            }), (0, mQ.jsxs)("div", {
              ref: WQ,
              className: "ReplayTimelineOverviewTrack",
              onPointerDown: eF,
              onPointerMove: MF,
              onPointerUp: GF,
              onPointerCancel: GF,
              role: "slider",
              "aria-label": "Recording overview",
              "aria-valuemin": 0,
              "aria-valuemax": qQ,
              "aria-valuenow": gQ,
              tabIndex: 0,
              children: [yF.map((QQ => {
                const FQ = Ho(QQ, qQ);
                return (0, mQ.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Overview",
                  style: {
                    left: `${FQ}%`
                  }
                }, QQ)
              })), rF && (0, mQ.jsxs)(mQ.Fragment, {
                children: [(0, mQ.jsx)("div", {
                  className: "ReplayTimelineMarkRegion Overview",
                  style: {
                    left: `${NF}%`,
                    width: `${TF}%`
                  }
                }), (0, mQ.jsx)("div", {
                  className: "ReplayTimelineMarkMarker In Overview",
                  style: {
                    left: `${hF}%`
                  },
                  "aria-hidden": !0
                }), (0, mQ.jsx)("div", {
                  className: "ReplayTimelineMarkMarker Out Overview",
                  style: {
                    left: `${JF}%`
                  },
                  "aria-hidden": !0
                })]
              }), qF.map((QQ => Qw(QQ, "overview", Fw(QQ)))), (0, mQ.jsx)("div", {
                className: "ReplayTimelineViewport",
                style: {
                  left: `${OF}%`,
                  width: `${Math.max(sF-OF,.5)}%`
                }
              }), (0, mQ.jsx)("button", {
                type: "button",
                className: oQ()("ReplayTimelinePlayhead Overview", {
                  Scrubbing: null !== TQ
                }),
                style: {
                  left: `${RF}%`
                },
                onPointerDown: xF("overview"),
                onPointerMove: AF,
                onPointerUp: tF,
                onPointerCancel: tF,
                "aria-label": "Scrub playhead"
              })]
            })]
          }), (0, mQ.jsxs)("div", {
            className: "ReplayTimelineDetailSection",
            children: [(0, mQ.jsxs)("div", {
              className: "ReplayTimelineDetailHeader",
              children: [(0, mQ.jsx)("span", {
                className: "ReplayTimelineSectionLabel",
                children: "Timeline"
              }), (0, mQ.jsxs)("span", {
                className: "ReplayTimelineDetailRange",
                children: [ko(PQ, kQ), " \u2013 ", ko(ZQ, kQ), CQ > 1 && (0, mQ.jsx)("span", {
                  className: "ReplayTimelineZoomBadge",
                  children: vo(CQ)
                })]
              })]
            }), (0, mQ.jsxs)("div", {
              ref: iQ,
              className: "ReplayTimelineDetailTrack",
              onPointerDown: HF,
              onPointerMove: bF,
              onPointerUp: YF,
              onPointerCancel: YF,
              role: "slider",
              "aria-label": "Recording timeline",
              "aria-valuemin": PQ,
              "aria-valuemax": ZQ,
              "aria-valuenow": gQ,
              tabIndex: 0,
              children: [BF.map((QQ => {
                const FQ = oo(QQ, PQ, ZQ);
                return (0, mQ.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Detail",
                  style: {
                    left: `${FQ}%`
                  }
                }, QQ)
              })), jF && (0, mQ.jsx)("div", {
                className: "ReplayTimelineMarkRegion Detail",
                style: {
                  left: `${KF}%`,
                  width: `${lF}%`
                }
              }), fF && (0, mQ.jsx)("div", {
                className: "ReplayTimelineMarkMarker In Detail",
                style: {
                  left: `${aF}%`
                },
                "aria-label": `Play range start at tick ${IF}`
              }), VF && (0, mQ.jsx)("div", {
                className: "ReplayTimelineMarkMarker Out Detail",
                style: {
                  left: `${XF}%`
                },
                "aria-label": `Play range end at tick ${UF}`
              }), ZF && EF && (0, mQ.jsx)("div", {
                className: "ReplayTimelineSelectionRegion Detail",
                style: {
                  left: `${nF}%`,
                  width: `${PF}%`
                }
              }), dF.map((QQ => Qw(QQ, "detail", Fw(QQ)))), (0, mQ.jsx)("button", {
                type: "button",
                className: oQ()("ReplayTimelinePlayhead Detail", {
                  Scrubbing: null !== TQ
                }),
                style: {
                  left: `${WF}%`
                },
                onPointerDown: xF("detail"),
                onPointerMove: AF,
                onPointerUp: tF,
                onPointerCancel: tF,
                "aria-label": "Scrub playhead"
              })]
            }), (0, mQ.jsxs)("div", {
              className: "ReplayTimelineWheelHint",
              children: [(0, mQ.jsx)("span", {
                className: "Select",
                children: "Drag timeline to select"
              }), " \xb7 Scroll to zoom \xb7 Drag playhead to scrub"]
            })]
          })]
        })
      })),
      No = (0, LQ.memo)((function(QQ) {
        let {
          enabled: FQ
        } = QQ;
        const wQ = (0, LQ.useRef)(!1),
          qQ = (0, LQ.useRef)(null),
          [DQ, kQ] = (0, LQ.useState)(!1),
          vQ = (0, LQ.useCallback)((QQ => {
            FQ && 0 === QQ.button && (wQ.current = !0, kQ(!0), qQ.current = {
              x: QQ.clientX,
              y: QQ.clientY
            }, QQ.currentTarget.setPointerCapture(QQ.pointerId))
          }), [FQ]),
          uQ = (0, LQ.useCallback)((QQ => {
            if (!FQ || !wQ.current || !qQ.current) return;
            const LQ = QQ.clientX - qQ.current.x,
              oQ = QQ.clientY - qQ.current.y;
            qQ.current = {
              x: QQ.clientX,
              y: QQ.clientY
            }, bQ.gameBridge.send("dragReplayCamera", {
              dx: LQ,
              dy: oQ
            })
          }), [FQ]),
          HQ = (0, LQ.useCallback)((QQ => {
            wQ.current && (wQ.current = !1, kQ(!1), qQ.current = null, QQ.currentTarget.releasePointerCapture(QQ.pointerId))
          }), []);
        return FQ ? (0, mQ.jsx)("div", {
          className: oQ()("ReplayViewerCameraDragSurface", {
            Dragging: DQ
          }),
          onPointerDown: vQ,
          onPointerMove: uQ,
          onPointerUp: HQ,
          onPointerCancel: HQ,
          "aria-hidden": !0
        }) : null
      }));
    var To = wQ(36614),
      Ko = wQ(36619);
    const zo = (0, LQ.memo)((function(QQ) {
        var FQ, wQ, qQ;
        let {
          anchorRect: DQ,
          anchorRef: vQ,
          onClose: uQ
        } = QQ;
        const HQ = (0, LQ.useRef)(null),
          bQ = Ro(HQ, DQ),
          [YQ, xQ] = (0, LQ.useState)(Ko.b),
          AQ = (0, LQ.useMemo)((() => Object.values(YQ).every((QQ => QQ))), [YQ]);
        (0, kQ.g)("replayViewer|uiVisibilityChanged", (() => {
          xQ((0, Ko.b)())
        })), Oo(HQ, uQ, vQ);
        const tQ = (0, LQ.useCallback)(((QQ, FQ) => {
            (0, Ko.g)(QQ, FQ), xQ((0, Ko.b)())
          }), []),
          eQ = (0, LQ.useCallback)((QQ => {
            for (const {
                group: FQ
              }
              of To.g)(0, Ko.g)(FQ, QQ);
            xQ((0, Ko.b)())
          }), []),
          MQ = Wo(DQ);
        return (0, wo.createPortal)((0, mQ.jsxs)("div", {
          ref: HQ,
          className: oQ()("ReplayViewerPopover ReplayUiVisibilityPopover", {
            Below: null !== (FQ = null === bQ || void 0 === bQ ? void 0 : bQ.placeBelow) && void 0 !== FQ && FQ,
            Positioned: null !== bQ
          }),
          style: {
            left: `${null!==(wQ=null===bQ||void 0===bQ?void 0:bQ.left)&&void 0!==wQ?wQ:MQ.left}px`,
            top: `${null!==(qQ=null===bQ||void 0===bQ?void 0:bQ.top)&&void 0!==qQ?qQ:MQ.top}px`
          },
          onPointerDown: QQ => {
            QQ.stopPropagation()
          },
          children: [(0, mQ.jsx)("div", {
            className: "ReplayUiVisibilityPopoverHeader",
            children: (0, mQ.jsx)("span", {
              className: "ReplayUiVisibilityPopoverTitle",
              children: "UI visibility"
            })
          }), (0, mQ.jsxs)("div", {
            className: "ReplayUiVisibilityPopoverChecks",
            children: [(0, mQ.jsxs)("div", {
              className: "ReplayUiVisibilityPopoverCheck",
              children: [(0, mQ.jsx)("input", {
                type: "checkbox",
                checked: AQ,
                onChange: QQ => {
                  eQ(QQ.target.checked)
                }
              }), (0, mQ.jsx)("span", {
                children: "SELECT ALL"
              })]
            }), To.g.map((QQ => {
              let {
                group: FQ,
                label: wQ
              } = QQ;
              return (0, mQ.jsxs)("label", {
                className: "ReplayUiVisibilityPopoverCheck",
                children: [(0, mQ.jsx)("input", {
                  type: "checkbox",
                  checked: YQ[FQ],
                  onChange: QQ => {
                    tQ(FQ, QQ.target.checked)
                  }
                }), (0, mQ.jsx)("span", {
                  children: wQ
                })]
              }, FQ)
            }))]
          })]
        }), document.body)
      })),
      jo = (0, LQ.memo)((function(QQ) {
        let {
          disabled: FQ
        } = QQ;
        const wQ = (0, LQ.useRef)(null),
          [qQ, oQ] = (0, LQ.useState)(!1),
          [DQ, kQ] = (0, LQ.useState)(null),
          vQ = (0, LQ.useCallback)((() => {
            wQ.current && (kQ(wQ.current.getBoundingClientRect()), oQ((QQ => !QQ)))
          }), []),
          uQ = (0, LQ.useCallback)((() => {
            oQ(!1)
          }), []);
        return (0, mQ.jsxs)(mQ.Fragment, {
          children: [(0, mQ.jsx)("div", {
            ref: wQ,
            children: (0, mQ.jsx)(Ow.f, {
              className: "ReplayViewerActionButton",
              onClick: vQ,
              disabled: FQ,
              children: (0, mQ.jsx)("span", {
                children: "Hide UI elements"
              })
            })
          }), qQ && DQ && (0, mQ.jsx)(zo, {
            anchorRect: DQ,
            anchorRef: wQ,
            onClose: uQ
          })]
        })
      })),
      ao = ["freeCamUp", "freeCamDown"];

    function Xo(QQ, FQ) {
      bQ.gameBridge.send("holdReplayFreecamVertical", {
        action: QQ,
        ym: FQ
      })
    }
    const fo = (0, LQ.memo)((function() {
        (0, LQ.useEffect)((() => () => {
          ! function() {
            bQ.gameBridge.send("moveReplayFreecam", null);
            for (const QQ of ao) Xo(QQ, !1)
          }()
        }), []);
        const QQ = (0, LQ.useCallback)((QQ => {
            bQ.gameBridge.send("moveReplayFreecam", QQ)
          }), []),
          FQ = (0, LQ.useCallback)((QQ => ({
            onTouchStart: FQ => {
              FQ.preventDefault(), FQ.stopPropagation(), Xo(QQ, !0)
            },
            onTouchEnd: FQ => {
              FQ.preventDefault(), FQ.stopPropagation(), Xo(QQ, !1)
            },
            onTouchCancel: FQ => {
              FQ.preventDefault(), FQ.stopPropagation(), Xo(QQ, !1)
            }
          })), []);
        return (0, mQ.jsxs)("div", {
          className: "ReplayFreecamTouchControls",
          children: [(0, mQ.jsx)("div", {
            className: "ReplayFreecamJoystickWrap",
            children: (0, mQ.jsx)(iF, {
              onMove: QQ,
              mode: "pinned"
            })
          }), (0, mQ.jsxs)("div", {
            className: "ReplayFreecamVerticalButtons",
            children: [(0, mQ.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam up",
              ...FQ("freeCamUp"),
              children: (0, mQ.jsx)(lQ.c, {
                name: "angle-up",
                className: "ReplayFreecamVerticalIcon"
              })
            }), (0, mQ.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam down",
              ...FQ("freeCamDown"),
              children: (0, mQ.jsx)(lQ.c, {
                name: "angle-down",
                className: "ReplayFreecamVerticalIcon"
              })
            })]
          })]
        })
      })),
      Vo = [],
      ho = (0, LQ.memo)((function() {
        const QQ = (0, gQ.l)();
        return (0, SQ.d)("replayViewerRequested", (QQ => {
          (0, gQ.j)("toggle" === QQ ? !(0, gQ.f)() : "open" === QQ)
        })), QQ ? (0, mQ.jsx)(Jo, {}) : null
      })),
      Jo = (0, LQ.memo)((function() {
        var QQ, FQ, wQ, qQ, DQ, kQ, vQ, uQ, HQ, YQ, xQ, AQ;
        const tQ = LQ.useRef(null),
          [eQ, MQ] = (0, LQ.useState)(null),
          [GQ, pQ] = (0, LQ.useState)(1),
          [cQ, CQ] = (0, LQ.useState)(null),
          [RQ, OQ] = (0, LQ.useState)(!1),
          {
            isTouchScreen: sQ
          } = (0, iQ.l)(["isTouchScreen"]),
          rQ = (0, SQ.k)("replay"),
          IQ = (0, SQ.k)("replayEdits"),
          UQ = null !== rQ,
          NQ = null !== (QQ = null === rQ || void 0 === rQ ? void 0 : rQ.fH) && void 0 !== QQ ? QQ : 0,
          TQ = null !== (FQ = null === rQ || void 0 === rQ ? void 0 : rQ.totalTicks) && void 0 !== FQ ? FQ : 0,
          KQ = Math.max(0, TQ - 1),
          jQ = null !== (wQ = null === rQ || void 0 === rQ ? void 0 : rQ.playing) && void 0 !== wQ && wQ,
          aQ = null !== (qQ = null === rQ || void 0 === rQ ? void 0 : rQ.speed) && void 0 !== qQ ? qQ : 1,
          XQ = null !== (DQ = null === rQ || void 0 === rQ ? void 0 : rQ.mN) && void 0 !== DQ ? DQ : 20,
          fQ = null !== cQ && void 0 !== cQ ? cQ : NQ,
          VQ = null !== (kQ = null === rQ || void 0 === rQ ? void 0 : rQ.freecam) && void 0 !== kQ && kQ,
          hQ = null !== (vQ = null === rQ || void 0 === rQ ? void 0 : rQ.cameraMode) && void 0 !== vQ ? vQ : "recording",
          JQ = null !== (uQ = null === IQ || void 0 === IQ ? void 0 : IQ.cameraKeyframes) && void 0 !== uQ ? uQ : Vo,
          EQ = null !== (HQ = null === IQ || void 0 === IQ ? void 0 : IQ.playbackMark) && void 0 !== HQ ? HQ : null,
          nQ = null !== (YQ = null === IQ || void 0 === IQ ? void 0 : IQ.fileName) && void 0 !== YQ ? YQ : null,
          PQ = null !== (xQ = null === IQ || void 0 === IQ ? void 0 : IQ.unsavedChanges) && void 0 !== xQ && xQ,
          ZQ = null !== (AQ = null === IQ || void 0 === IQ ? void 0 : IQ.suggestSaveAs) && void 0 !== AQ && AQ,
          yQ = (0, SQ.k)("replayVideoExporting"),
          BQ = !yQ && UQ && ("freecam" === hQ || ("recording" === hQ || "keyframe" === hQ) && !jQ),
          dQ = sQ && UQ && "freecam" === hQ && !yQ && !RQ;
        (0, Fo.d)(!0, !0, "ReplayViewerOverlay"), (0, LQ.useEffect)((() => {
          bQ.gameBridge.send("syncReplayCameraMode", null)
        }), [VQ]);
        const QF = (0, LQ.useCallback)(((QQ, FQ) => {
            bQ.gameBridge.send("seekReplay", {
              fH: QQ,
              ignorePlaybackMark: null === FQ || void 0 === FQ ? void 0 : FQ.ignorePlaybackMark
            })
          }), []),
          FF = (0, LQ.useCallback)((() => {
            bQ.gameBridge.send("setReplayPlaying", !1)
          }), []),
          wF = (0, LQ.useCallback)(((QQ, FQ) => {
            bQ.gameBridge.send("moveReplayCameraKeyframe", {
              from: QQ,
              to: FQ
            })
          }), []),
          LF = (0, LQ.useCallback)((QQ => {
            bQ.gameBridge.send("setReplayCameraKeyframe", QQ)
          }), []),
          qF = (0, LQ.useCallback)((QQ => {
            bQ.gameBridge.send("deleteReplayCameraKeyframes", {
              start: QQ,
              end: QQ
            })
          }), []),
          oF = (0, LQ.useCallback)((QQ => {
            bQ.gameBridge.send("deleteReplayCameraKeyframes", {
              start: QQ.startTick,
              end: QQ.endTick
            })
          }), []),
          DF = (0, LQ.useCallback)((() => bQ.gameBridge.lookup("replayCamera", null)), []),
          kF = (0, LQ.useCallback)((QQ => {
            CQ(QQ)
          }), []),
          vF = (0, LQ.useCallback)((QQ => {
            bQ.gameBridge.send("setReplayPlaybackMark", {
              inTick: QQ.startTick,
              outTick: QQ.endTick
            })
          }), []),
          mF = (0, LQ.useCallback)((() => {
            bQ.gameBridge.send("setReplayPlaybackMark", null)
          }), []),
          uF = (0, LQ.useCallback)((QQ => {
            const FQ = bQ.gameBridge.latest("replay");
            if (null === FQ || QQ.endTick <= QQ.startTick) return;
            const wQ = QQ.startTick,
              LQ = QQ.endTick;
            yL.NotificationProvider.showPromptPopup({
              title: "Crop recording to the selected range? This cannot be undone.",
              confirmText: "Crop",
              destructive: !0,
              cancelText: "Cancel"
            }).getResult().then((QQ => {
              var qQ;
              if (!0 !== QQ) return;
              if ((null === (qQ = bQ.gameBridge.latest("replay")) || void 0 === qQ ? void 0 : qQ.id) !== FQ.id) return;
              bQ.gameBridge.send("cropReplay", {
                start: wQ,
                end: LQ
              }) && (CQ(null), pQ(1))
            }))
          }), []),
          HF = (0, LQ.useCallback)(((QQ, FQ) => {
            MQ(null), pQ(1), CQ(null), (0, Eq.b)().open(QQ, FQ).catch((QQ => {
              console.error(QQ), MQ(QQ instanceof Error ? QQ.message : "Failed to parse recording")
            }))
          }), []),
          bF = (0, LQ.useCallback)(((QQ, FQ) => {
            null !== bQ.gameBridge.latest("connectedGame").websocketUrl ? yL.NotificationProvider.showPromptPopup({
              title: "Leave current game and play recording?",
              confirmText: "Yes",
              cancelText: "No"
            }).getResult().then((wQ => {
              !0 === wQ && HF(QQ, FQ)
            })) : HF(QQ, FQ)
          }), [HF]),
          YF = (0, LQ.useCallback)((QQ => {
            var FQ;
            const wQ = null === (FQ = QQ.target.files) || void 0 === FQ ? void 0 : FQ[0];
            if (QQ.target.value = "", !wQ) return;
            const LQ = new FileReader;
            LQ.onload = () => {
              bF(new Uint8Array(LQ.result), {
                fileName: wQ.name
              })
            }, LQ.onerror = () => {
              MQ("Failed to read file")
            }, LQ.readAsArrayBuffer(wQ)
          }), [bF]),
          xF = (0, LQ.useCallback)((() => {
            const QQ = () => {
              var QQ;
              null === (QQ = tQ.current) || void 0 === QQ || QQ.click()
            };
            (0, Pq.n)() ? (0, Pq.f)().then((QQ => {
              QQ && bF(QQ.bytes, {
                fileHandle: QQ.handle
              })
            })).catch((FQ => {
              console.error(FQ), QQ()
            })): QQ()
          }), [bF]),
          AF = (0, LQ.useCallback)((async function() {
            let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            let FQ;
            try {
              FQ = await Qo(QQ, {
                files: (0, Eq.b)(),
                pickerSupported: Pq.n,
                chooseFile: Pq.b,
                write: Pq.o,
                download: gq.f,
                onFallback: console.error
              })
            } catch (wQ) {
              return void(QQ => {
                console.error(QQ), yL.NotificationProvider.showAlertPopup({
                  title: "Failed to save recording",
                  subtitle: yq(QQ),
                  confirmText: "OK"
                })
              })(wQ)
            }
            "written" !== FQ && "downloaded" !== FQ || (() => {
              const QQ = yL.NotificationProvider.showAlertPopup({
                title: "Recording saved",
                disableBackground: !0
              });
              setTimeout((() => {
                QQ.tearDownNotification()
              }), 1e3)
            })()
          }), []),
          tF = (0, LQ.useCallback)((QQ => {
            bQ.gameBridge.send("replayAction", QQ)
          }), []),
          eF = (0, LQ.useCallback)((QQ => {
            pQ((FQ => mo(FQ, QQ)))
          }), []),
          MF = (0, LQ.useCallback)((QQ => {
            if (!bQ.gameBridge.latest("replayVideoExporting")) switch (QQ) {
              case "replayLoad":
                xF();
                break;
              case "replaySave":
                AF(!1);
                break;
              case "replaySaveAs":
                AF(!0);
                break;
              case "replayTimelineZoomIn":
                eF("in");
                break;
              case "replayTimelineZoomOut":
                eF("out")
            }
          }), [xF, AF, eF]);
        (0, SQ.d)("replayUiActionRequested", MF);
        const GF = (0, LQ.useCallback)((QQ => {
            bQ.gameBridge.send("setReplayCameraMode", QQ)
          }), []),
          pF = UQ ? Ow.f : Ow.m,
          cF = PQ && !ZQ ? Ow.m : Ow.f,
          CF = PQ && ZQ ? Ow.m : Ow.f;
        return (0, mQ.jsxs)("div", {
          className: "ReplayViewerOverlay",
          children: [(0, mQ.jsx)(No, {
            enabled: BQ
          }), dQ && (0, mQ.jsx)(fo, {}), (0, mQ.jsx)("input", {
            ref: tQ,
            type: "file",
            accept: gq.d,
            className: "ReplayViewerFileInput",
            onChange: YF
          }), (0, mQ.jsxs)("div", {
            className: oQ()("ReplayViewerBar", {
              Collapsed: RQ
            }),
            children: [(0, mQ.jsx)("button", {
              type: "button",
              className: "ReplayViewerCollapseTab",
              onClick: () => {
                RQ ? OQ(!1) : UQ ? OQ(!0) : (0, gQ.c)()
              },
              "aria-expanded": !RQ,
              "aria-label": RQ ? "Expand replay viewer" : "Collapse replay viewer",
              children: (0, mQ.jsx)(lQ.c, {
                name: RQ ? "angle-up" : "angle-down"
              })
            }), !RQ && (0, mQ.jsxs)("div", {
              className: "ReplayViewerBarBody",
              children: [UQ && TQ > 0 && (0, mQ.jsx)(Uo, {
                maxTick: KQ,
                displayTick: fQ,
                mN: XQ,
                cameraKeyframes: JQ,
                playbackMark: EQ,
                onSeek: QF,
                onPause: FF,
                onScrubTickChange: kF,
                onMoveCameraKeyframe: wF,
                onUpdateCameraKeyframe: LF,
                onDeleteCameraKeyframe: qF,
                onUseCurrentCamera: DF,
                onMarkRange: vF,
                onCropRange: uF,
                onDeleteKeyframesInRange: oF,
                onClearMark: mF,
                zoomLevel: GQ,
                onZoomLevelChange: pQ
              }, KQ), (0, mQ.jsxs)("div", {
                className: "ReplayViewerControls",
                children: [(0, mQ.jsxs)("div", {
                  className: "ReplayViewerControlsLeftSide",
                  children: [(0, mQ.jsxs)("div", {
                    className: "ReplayViewerControlsGroup FileGroup",
                    children: [UQ && (0, mQ.jsxs)("div", {
                      className: "ReplayViewerFileName",
                      children: [null !== nQ && void 0 !== nQ ? nQ : "Unsaved recording", PQ ? " *" : ""]
                    }), (0, mQ.jsxs)(pF, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        MF("replayLoad")
                      },
                      children: [(0, mQ.jsx)(WQ.e, {
                        noaAction: "replayLoad",
                        padHidesKey: !0
                      }), (0, mQ.jsx)("span", {
                        children: " Load "
                      })]
                    }), (0, mQ.jsxs)(Ow.f, {
                      className: "ReplayViewerActionButton",
                      onClick: gQ.c,
                      children: [(0, mQ.jsx)(WQ.e, {
                        noaAction: "replayViewerOpen",
                        padHidesKey: !0
                      }), (0, mQ.jsx)("span", {
                        children: " Hide "
                      })]
                    }), (0, mQ.jsxs)(cF, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        MF("replaySave")
                      },
                      disabled: !UQ,
                      children: [(0, mQ.jsx)(WQ.e, {
                        noaAction: "replaySave",
                        padHidesKey: !0
                      }), (0, mQ.jsx)("span", {
                        children: " Save "
                      })]
                    }), (0, mQ.jsxs)(Ow.f, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        bQ.gameBridge.send("leaveGame", {
                          reloadPath: "/"
                        })
                      },
                      disabled: !UQ,
                      children: [(0, mQ.jsx)(WQ.e, {
                        noaAction: "replayExit",
                        padHidesKey: !0
                      }), (0, mQ.jsx)("span", {
                        children: " Exit "
                      })]
                    }), (0, mQ.jsxs)(CF, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        MF("replaySaveAs")
                      },
                      disabled: !UQ,
                      children: [(0, mQ.jsx)(WQ.e, {
                        noaAction: "replaySaveAs",
                        padHidesKey: !0
                      }), (0, mQ.jsx)("span", {
                        children: " Save As "
                      })]
                    }), (0, mQ.jsxs)(Ow.f, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        bQ.gameBridge.send("exportReplayVideo", null)
                      },
                      disabled: !UQ || 0 === TQ || yQ,
                      children: [(0, mQ.jsx)(WQ.e, {
                        noaAction: "replayExportVideo",
                        padHidesKey: !0
                      }), (0, mQ.jsx)("span", {
                        children: " Export "
                      })]
                    })]
                  }), (0, mQ.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, mQ.jsxs)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: [(0, mQ.jsx)("span", {
                        children: " Camera Mode "
                      }), (0, mQ.jsx)(WQ.e, {
                        noaAction: "replayChangeCameraMode",
                        padHidesKey: !0
                      })]
                    }), (0, mQ.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody CameraModes",
                      children: [(0, mQ.jsx)(zQ.f, {
                        tooltipInner: (0, mQ.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Replicate how the camera was set when recorded."
                        }),
                        children: (0, mQ.jsxs)(Ow.L, {
                          className: "ReplayViewerModeButton",
                          active: "recording" === hQ,
                          onClick: () => {
                            GF("recording")
                          },
                          disabled: !UQ,
                          children: ["Recorded ", (0, mQ.jsx)(lQ.c, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, mQ.jsx)(zQ.f, {
                        tooltipInner: (0, mQ.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Move the camera freely around."
                        }),
                        children: (0, mQ.jsxs)(Ow.L, {
                          className: "ReplayViewerModeButton",
                          active: "freecam" === hQ,
                          onClick: () => {
                            GF("freecam")
                          },
                          disabled: !UQ,
                          children: ["Free ", (0, mQ.jsx)(lQ.c, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, mQ.jsx)(zQ.f, {
                        tooltipInner: (0, mQ.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Display the replay in real time using keyframes."
                        }),
                        children: (0, mQ.jsxs)(Ow.L, {
                          className: "ReplayViewerModeButton",
                          active: "keyframe" === hQ,
                          onClick: () => {
                            GF("keyframe")
                          },
                          disabled: !UQ,
                          children: ["Preview ", (0, mQ.jsx)(lQ.c, {
                            name: "circle-info"
                          })]
                        })
                      })]
                    })]
                  })]
                }), (0, mQ.jsxs)("div", {
                  className: "ReplayViewerControlsGroup TimeGroup",
                  children: [(0, mQ.jsxs)("div", {
                    className: "ReplayViewerTimecodeContainer",
                    children: [(0, mQ.jsxs)("span", {
                      className: "ReplayViewerTimecode",
                      children: [(0, mQ.jsx)("span", {
                        className: "ReplayViewerTimecodeNow",
                        children: ko(fQ, XQ)
                      }), (0, mQ.jsx)("span", {
                        className: "ReplayViewerTimecodeDivider",
                        children: "/"
                      }), (0, mQ.jsx)("span", {
                        className: "ReplayViewerTimecodeTotal",
                        children: ko(KQ, XQ)
                      })]
                    }), (0, mQ.jsxs)("span", {
                      className: "ReplayViewerTickLabel",
                      children: ["Tick ", fQ, " / ", KQ]
                    })]
                  }), (0, mQ.jsxs)("div", {
                    className: "ReplayViewerTimecodeControls",
                    children: [(0, mQ.jsxs)(Ow.f, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        tF("replaySkipBack")
                      },
                      disabled: !UQ,
                      children: [(0, mQ.jsxs)("span", {
                        children: [" ", (0, mQ.jsx)(lQ.c, {
                          name: "clock-rotate-left"
                        }), " 1s"]
                      }), (0, mQ.jsx)(WQ.e, {
                        noaAction: "replaySkipBack",
                        padHidesKey: !0
                      })]
                    }), (0, mQ.jsxs)(Ow.m, {
                      className: "ReplayViewerMediaButton PlayButton",
                      onClick: () => {
                        bQ.gameBridge.send("setReplayPlaying", !jQ)
                      },
                      disabled: !UQ,
                      children: [(0, mQ.jsxs)("span", {
                        children: [" ", jQ ? (0, mQ.jsx)(lQ.c, {
                          name: "pause"
                        }) : (0, mQ.jsx)(lQ.c, {
                          name: "play"
                        }), " "]
                      }), (0, mQ.jsx)(WQ.e, {
                        noaAction: "replayPlayPause",
                        padHidesKey: !0
                      })]
                    }), (0, mQ.jsxs)(Ow.f, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        tF("replaySkipForward")
                      },
                      disabled: !UQ,
                      children: [(0, mQ.jsxs)("span", {
                        children: [" ", (0, mQ.jsx)(lQ.c, {
                          name: "rotate-forward"
                        }), " 1s"]
                      }), (0, mQ.jsx)(WQ.e, {
                        noaAction: "replaySkipForward",
                        padHidesKey: !0
                      })]
                    })]
                  })]
                }), (0, mQ.jsxs)("div", {
                  className: "ReplayViewerControlsRightSide",
                  children: [(0, mQ.jsxs)("div", {
                    className: "ReplayViewerControlsGroup RecordKeyframeGroup",
                    children: [(0, mQ.jsxs)(Ow.m, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        tF("replayRecordKeyframe")
                      },
                      disabled: !UQ,
                      children: [(0, mQ.jsx)(WQ.e, {
                        noaAction: "replayRecordKeyframe",
                        padHidesKey: !0
                      }), (0, mQ.jsx)("span", {
                        children: " Record keyframe "
                      })]
                    }), (0, mQ.jsx)(jo, {
                      disabled: !UQ
                    }), EQ && (0, mQ.jsx)(Ow.L, {
                      className: "ReplayViewerActionButton",
                      onClick: mF,
                      disabled: !UQ,
                      children: (0, mQ.jsx)("span", {
                        children: " Clear range "
                      })
                    })]
                  }), (0, mQ.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, mQ.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Speed"
                    }), (0, mQ.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, mQ.jsx)(Ow.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          tF("replaySpeedDown")
                        },
                        disabled: !UQ || (0, nq.h)(aQ),
                        children: (0, mQ.jsx)("span", {
                          children: " \u2212 "
                        })
                      }), (0, mQ.jsxs)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: [aQ, "\xd7"]
                      }), (0, mQ.jsx)(Ow.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          tF("replaySpeedUp")
                        },
                        disabled: !UQ || (0, nq.d)(aQ),
                        children: (0, mQ.jsx)("span", {
                          children: " + "
                        })
                      })]
                    })]
                  }), (0, mQ.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, mQ.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Timeline Zoom"
                    }), (0, mQ.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, mQ.jsxs)(Ow.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          MF("replayTimelineZoomOut")
                        },
                        disabled: !UQ || GQ <= Lo[0],
                        children: [(0, mQ.jsx)("span", {
                          children: " \u2212 "
                        }), (0, mQ.jsx)(WQ.e, {
                          noaAction: "replayTimelineZoomOut",
                          padHidesKey: !0
                        })]
                      }), (0, mQ.jsx)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: vo(GQ)
                      }), (0, mQ.jsxs)(Ow.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          MF("replayTimelineZoomIn")
                        },
                        disabled: !UQ || GQ >= Lo[Lo.length - 1],
                        children: [(0, mQ.jsx)("span", {
                          children: " + "
                        }), (0, mQ.jsx)(WQ.e, {
                          noaAction: "replayTimelineZoomIn",
                          padHidesKey: !0
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0, mQ.jsx)("div", {
                className: "ReplayViewerEmptyState",
                children: !UQ && "Load a recording to begin playback"
              }), eQ && (0, mQ.jsx)("div", {
                className: "ReplayViewerError",
                children: eQ
              })]
            })]
          })]
        })
      }));
    var Eo = wQ(1339);

    function no() {
      const [, QQ] = (0, LQ.useState)(0);
      return (0, kQ.g)("replayViewer|uiVisibilityChanged", (() => {
          QQ((QQ => QQ + 1))
        })), (0, kQ.g)("replayViewer|replayLoaded", (() => {
          QQ((QQ => QQ + 1))
        })),
        function() {
          if (!(0, Eo.e)()) return {};
          const QQ = {
              [To.d]: "true"
            },
            FQ = (0, Ko.b)();
          for (const {
              group: wQ,
              dataAttr: LQ
            }
            of To.g) LQ && !FQ[wQ] && (QQ[LQ] = "true");
          return QQ
        }()
    }
    var go = wQ(9091),
      Po = wQ(2024),
      Zo = wQ(8492),
      yo = wQ(8477),
      Bo = wQ(2032);
    const QD = (0, LQ.memo)((function() {
      var QQ, FQ, wQ;
      const qQ = (0, GQ.l)("customButtons");
      (0, LQ.useEffect)((() => qQ ? (bQ.gameBridge.send("bindCustomButtonKeys", qQ.filter(Zo.i).map((QQ => {
        let {
          id: FQ,
          keycode: wQ
        } = QQ;
        return {
          id: FQ,
          keycode: wQ
        }
      }))), () => {
        bQ.gameBridge.send("bindCustomButtonKeys", [])
      }) : () => {}), [qQ]);
      const oQ = null !== (QQ = null === qQ || void 0 === qQ ? void 0 : qQ.filter(Zo.i)) && void 0 !== QQ ? QQ : [],
        DQ = (0, yo.h)(),
        kQ = null !== (FQ = null === (wQ = (0, Bo.c)()) || void 0 === wQ ? void 0 : wQ.hideButtonHints) && void 0 !== FQ && FQ,
        vQ = "customButton" !== (null === DQ || void 0 === DQ ? void 0 : DQ.kind) || kQ ? null : DQ.id,
        uQ = oQ.length > 0,
        HQ = (0, LQ.useRef)(null);
      return (0, LQ.useLayoutEffect)((() => {
        if (!uQ) return () => {};
        const QQ = HQ.current,
          FQ = QQ.closest(".InGameUi"),
          wQ = () => {
            FQ.style.setProperty("--custom-buttons-top", `${QQ.offsetTop}px`)
          };
        wQ();
        const LQ = new ResizeObserver(wQ);
        return LQ.observe(QQ), LQ.observe(QQ.parentElement), () => {
          LQ.disconnect(), FQ.style.removeProperty("--custom-buttons-top")
        }
      }), [uQ]), (0, mQ.jsx)("div", {
        ref: HQ,
        className: "" + ((0, xq.isMobile)() ? "CustomIconsMobile" : "CustomIcons"),
        children: oQ.map((QQ => {
          var FQ, wQ;
          return (0, mQ.jsx)(FD, {
            button: QQ,
            padGlyph: QQ.id === vQ && null !== (FQ = null === (wQ = (0, fQ.d)()) || void 0 === wQ ? void 0 : wQ.getBoundButton("actionButton")) && void 0 !== FQ ? FQ : null
          }, QQ.id)
        }))
      })
    }));

    function FD(QQ) {
      let {
        button: FQ,
        padGlyph: wQ
      } = QQ;
      const qQ = (0, LQ.useRef)(null),
        oQ = () => {
          null !== qQ.current && (qQ.current = null, bQ.gameBridge.send("pressCustomButton", {
            id: FQ.id,
            down: !1
          }))
        };
      (0, LQ.useEffect)((() => oQ), []);
      const DQ = JF(oQ, {
          pressesOnPointerDown: !0
        }),
        kQ = QQ => {
          qQ.current === QQ.pointerId && oQ()
        };
      return (0, mQ.jsxs)("div", {
        className: "CustomIcon",
        ...DQ,
        onLostPointerCapture: kQ,
        children: [(0, mQ.jsx)(Po.e, {
          icon: FQ.icon,
          keyboardHint: (0, Zo.e)(FQ.keycode),
          padGlyph: wQ,
          onPointerDown: QQ => {
            try {
              QQ.currentTarget.setPointerCapture(QQ.pointerId)
            } catch {
              return
            }
            null === qQ.current && bQ.gameBridge.send("pressCustomButton", {
              id: FQ.id,
              down: !0
            }), qQ.current = QQ.pointerId
          },
          onPointerUp: kQ,
          onPointerCancel: kQ,
          showTouchTutorialPubSubId: !1,
          showRedDotPubSubId: !1
        }), FQ.description && (0, mQ.jsx)("div", {
          className: "CustomIconDescription SmallTextBold",
          children: FQ.description
        })]
      })
    }
    var wD = wQ(2336),
      LD = wQ(259);
    const qD = {
      frame: QQ => {
        const FQ = requestAnimationFrame((() => {
          QQ()
        }));
        return () => {
          cancelAnimationFrame(FQ)
        }
      },
      afterFrame: QQ => {
        const FQ = setTimeout(QQ, 0);
        return () => {
          clearTimeout(FQ)
        }
      }
    };
    class oD {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : LD.d,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qD;
        this.idle = QQ, this.frames = FQ, this.waiting = [], this.cancelIdle = null, this.cancelFrame = null, this.cancelAfterFrame = null, this.starvedFrames = 0, this.shown = !1
      }
      request(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.shown ? (QQ(), () => {}) : (FQ ? this.waiting.unshift(QQ) : this.waiting.push(QQ), this.schedule(), () => {
          const FQ = this.waiting.indexOf(QQ);
          FQ >= 0 && (this.waiting.splice(FQ, 1), this.settle())
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
        const QQ = this.waiting.shift();
        try {
          QQ()
        } finally {
          this.settle()
        }
      }
      settle() {
        0 === this.waiting.length && this.stop()
      }
      stop() {
        var QQ, FQ, wQ;
        null === (QQ = this.cancelIdle) || void 0 === QQ || QQ.call(this), this.cancelIdle = null, null === (FQ = this.cancelFrame) || void 0 === FQ || FQ.call(this), this.cancelFrame = null, null === (wQ = this.cancelAfterFrame) || void 0 === wQ || wQ.call(this), this.cancelAfterFrame = null
      }
    }
    const DD = (0, LQ.createContext)(null);

    function kD(QQ) {
      let {
        children: FQ,
        first: wQ = !1
      } = QQ;
      const qQ = (0, LQ.useContext)(DD),
        [oQ, DQ] = (0, LQ.useState)(null === qQ);
      return (0, LQ.useEffect)((() => {
        if (!oQ && null !== qQ) return qQ.request((() => {
          DQ(!0)
        }), wQ)
      }), [wQ, oQ, qQ]), oQ ? (0, LQ.createElement)(LQ.Fragment, null, FQ) : null
    }
    const vD = (0, LQ.memo)((function(QQ) {
        let {
          shown: FQ
        } = QQ;
        const [wQ] = (0, LQ.useState)((() => new xQ.f(FQ))), [qQ] = (0, LQ.useState)((() => FQ ? null : new oD));
        return (0, LQ.useLayoutEffect)((() => {
          FQ && (null === qQ || void 0 === qQ || qQ.show(), wQ.show())
        }), [FQ, wQ, qQ]), (0, mQ.jsx)(xQ.e.Provider, {
          value: wQ,
          children: (0, mQ.jsx)(DD.Provider, {
            value: qQ,
            children: (0, mQ.jsx)(mD, {})
          })
        })
      })),
      mD = (0, LQ.memo)((function() {
        const {
          isUiHidden: QQ,
          isUiHiddenByCamera: FQ,
          worldPanelHud: wQ,
          isTouchScreen: qQ
        } = (0, iQ.l)(["isUiHidden", "isUiHiddenByCamera", "worldPanelHud", "isTouchScreen"]), DQ = (0, PL.b)(), kQ = no(), vQ = (0, xQ.n)(), uQ = (0, LQ.useRef)(null), HQ = (0, GQ.l)("showKillfeed");
        return function() {
            const QQ = (0, xQ.n)();
            (0, LQ.useEffect)((() => QQ.whenShown(AQ)), [QQ])
          }(),
          function() {
            const QQ = (0, GQ.l)("inventoryColourOverride");
            (0, LQ.useEffect)((() => {
              if (!QQ) return;
              const {
                panel: FQ,
                slot: wQ,
                slotSelected: LQ,
                slotUnavailable: qQ
              } = hQ(QQ), oQ = document.documentElement.style;
              return oQ.setProperty("--InventoryPanelColour", FQ), oQ.setProperty("--InventorySlotColour", wQ), oQ.setProperty("--InventorySlotSelectedColour", LQ), oQ.setProperty("--InventorySlotUnavailableColour", qQ), () => {
                oQ.removeProperty("--InventoryPanelColour"), oQ.removeProperty("--InventorySlotColour"), oQ.removeProperty("--InventorySlotSelectedColour"), oQ.removeProperty("--InventorySlotUnavailableColour")
              }
            }), [QQ])
          }(), (0, LQ.useLayoutEffect)((() => vQ.whenShown((() => {
            var QQ;
            null === (QQ = uQ.current) || void 0 === QQ || QQ.classList.remove("PreMounted")
          }))), [vQ]), (0, mQ.jsxs)(mQ.Fragment, {
            children: [(0, mQ.jsxs)("div", {
              ref: uQ,
              className: oQ()("InGameUi", {
                PreMounted: !vQ.shown,
                Hidden: QQ,
                HiddenByCamera: FQ,
                HiddenByWorldPanel: null !== wQ,
                WorldPanelTouchControl: "touchControls" === wQ
              }),
              ...kQ,
              children: [(0, mQ.jsxs)(kD, {
                children: [(0, mQ.jsx)(hw.b, {}), (0, mQ.jsx)(Pw, {})]
              }), (0, mQ.jsx)(xQ.j, {
                children: (0, mQ.jsx)(Zw, {})
              }), (0, mQ.jsxs)(kD, {
                children: [(0, mQ.jsx)(Cq, {}), (0, mQ.jsx)(rq, {}), qQ && (0, mQ.jsx)(Uq, {})]
              }), (0, mQ.jsxs)(kD, {
                children: [(0, mQ.jsx)(ew, {}), (0, mQ.jsx)(mL.b, {}), (0, mQ.jsx)(tL, {})]
              }), (0, mQ.jsx)(xQ.j, {
                children: (0, mQ.jsx)(Vw, {})
              }), (0, mQ.jsxs)(kD, {
                children: [(0, mQ.jsx)(Rq.d, {}), (0, mQ.jsx)(ho, {})]
              }), (0, mQ.jsxs)(kD, {
                children: [(0, mQ.jsx)(Tq.c, {}), (0, mQ.jsx)(Kq.f, {})]
              }), (0, mQ.jsx)(kD, {
                children: (0, mQ.jsx)(Gw.j, {})
              }), (0, mQ.jsx)(kD, {
                children: (0, mQ.jsx)(tD, {
                  showChat: DQ
                })
              }), (0, mQ.jsxs)(kD, {
                children: [(0, mQ.jsx)(lq, {}), (0, mQ.jsx)(Wq, {})]
              }), (0, mQ.jsxs)("div", {
                className: oQ()("RightElements", {
                  RightElementsTouchscreen: qQ
                }),
                "data-camera-keeper-host": "",
                children: [(0, mQ.jsxs)("div", {
                  className: SL.f,
                  "data-holds-camera-keeper": "",
                  children: [(0, mQ.jsxs)("div", {
                    className: "TopRightElementsLeft",
                    "data-holds-camera-keeper": "",
                    children: [(0, mQ.jsx)(kD, {
                      children: (0, mQ.jsx)(uq.d, {})
                    }), (0, mQ.jsxs)(kD, {
                      children: [(0, mQ.jsx)(jQ, {}), (0, mQ.jsx)(sL.d, {})]
                    }), xq.featureFlags.useSocialFeatures && (0, mQ.jsx)(xQ.j, {
                      children: (0, mQ.jsx)(rL.c, {
                        placement: "inGame"
                      })
                    }), xq.featureFlags.useSocialFeatures && (0, mQ.jsx)(xQ.j, {
                      children: (0, mQ.jsx)(hL, {})
                    }), HQ && (0, mQ.jsx)(xQ.j, {
                      children: (0, mQ.jsx)(vL, {})
                    }), (0, mQ.jsx)(kD, {
                      children: (0, mQ.jsx)(go.c, {})
                    })]
                  }), xq.featureFlags.useSocialFeatures && (0, mQ.jsx)("div", {
                    className: "TopRightElementsRight",
                    children: (0, mQ.jsx)(kD, {
                      children: (0, mQ.jsx)(pq.e, {})
                    })
                  })]
                }), (0, mQ.jsxs)(kD, {
                  children: [(0, mQ.jsx)(Gw.c, {
                    placement: "topRight"
                  }), (0, mQ.jsx)(eD, {})]
                })]
              }), (0, mQ.jsx)("div", {
                className: "LeftCentre",
                children: (0, mQ.jsx)(kD, {
                  children: (0, mQ.jsx)(QD, {})
                })
              }), (0, mQ.jsxs)("div", {
                className: "BottomCentre",
                "data-holds-camera-keeper": qQ ? "" : void 0,
                children: [(0, mQ.jsx)(xQ.j, {
                  children: (0, mQ.jsx)(IQ, {})
                }), (0, mQ.jsx)(kD, {
                  children: (0, mQ.jsx)(HD, {})
                }), (0, mQ.jsxs)("div", {
                  className: "BottomElements",
                  "data-holds-camera-keeper": qQ ? "" : void 0,
                  children: [(0, mQ.jsx)("div", {
                    className: oQ()("BottomLeftElements", {
                      Touch: qQ
                    }),
                    children: (0, mQ.jsxs)(kD, {
                      children: [(0, mQ.jsx)(nL, {}), !qQ && (0, mQ.jsx)(wD.e, {})]
                    })
                  }), (0, mQ.jsx)(kD, {
                    children: (0, mQ.jsx)(AD, {})
                  }), (0, mQ.jsx)(kD, {
                    children: (0, mQ.jsx)(ML, {
                      isTouchScreen: qQ
                    })
                  })]
                })]
              }), (0, mQ.jsx)("div", {
                className: "MiddleLeft"
              }), qQ && (0, mQ.jsx)(kD, {
                children: (0, mQ.jsx)(dF, {})
              }), (0, mQ.jsx)("div", {
                className: "CameraFadeHost",
                ref: GF.h
              })]
            }), (0, mQ.jsx)(xQ.j, {
              children: (0, mQ.jsx)(Jq.e, {})
            }), (0, mQ.jsx)(kD, {
              first: !0,
              children: (0, mQ.jsx)(gL.c, {})
            }), (0, mQ.jsx)(xQ.j, {
              children: (0, mQ.jsx)(uD, {})
            })]
          })
      }));

    function uD() {
      return (0, LQ.useEffect)((() => {
        const QQ = setTimeout((() => {
          (0, pQ.k)()
        }), 0);
        return () => {
          clearTimeout(QQ), pQ.l.QG(!1)
        }
      }), []), null
    }
    const HD = (0, LQ.memo)((function() {
        const QQ = (0, kQ.i)("aimingOverlay", "none");
        (0, eQ.b)();
        const FQ = (0, GQ.o)("middleTextUpper"),
          wQ = (0, GQ.o)("middleTextLower");
        return (0, mQ.jsxs)("div", {
          className: "MiddleTextBottom",
          style: "sniper" === QQ ? {
            visibility: "hidden"
          } : {},
          children: [(0, mQ.jsx)(xD, {
            text: FQ,
            className: "MiddleText MiddleTextUpper SmallTextBold",
            maxHeightFraction: bD
          }), (0, mQ.jsx)(xD, {
            text: wQ,
            className: "MiddleText",
            maxHeightFraction: YD
          })]
        })
      })),
      bD = .3,
      YD = .2;

    function xD(QQ) {
      let {
        text: FQ,
        className: wQ,
        maxHeightFraction: qQ
      } = QQ;
      const oQ = (0, LQ.useRef)(null),
        DQ = (0, LQ.useRef)(null);
      return function(QQ, FQ, wQ, qQ) {
        (0, LQ.useLayoutEffect)((() => {
          const LQ = QQ.current,
            qQ = FQ.current;
          if (!LQ || !qQ) return;
          let oQ = -1,
            DQ = -1;
          const kQ = QQ => (qQ.style.setProperty("zoom", String(QQ)), LQ.getBoundingClientRect().height),
            vQ = () => {
              const QQ = document.documentElement.clientHeight * wQ;
              let FQ = 1;
              if (kQ(1) > QQ) {
                let wQ = .5,
                  LQ = 1;
                for (let FQ = 0; FQ < 6; FQ++) {
                  const FQ = (wQ + LQ) / 2;
                  kQ(FQ) <= QQ ? wQ = FQ : LQ = FQ
                }
                FQ = wQ
              }
              DQ = kQ(FQ), oQ = LQ.getBoundingClientRect().width
            };
          vQ();
          let mQ = 0;
          const uQ = () => {
              cancelAnimationFrame(mQ), mQ = requestAnimationFrame(vQ)
            },
            HQ = new ResizeObserver((() => {
              const {
                width: QQ,
                height: FQ
              } = LQ.getBoundingClientRect();
              QQ === oQ && FQ === DQ || uQ()
            }));
          return HQ.observe(LQ), window.addEventListener("resize", uQ), () => {
            HQ.disconnect(), window.removeEventListener("resize", uQ), cancelAnimationFrame(mQ), qQ.style.removeProperty("zoom")
          }
        }), [QQ, FQ, wQ, qQ])
      }(oQ, DQ, qQ, FQ.content), (0, mQ.jsx)("div", {
        ref: oQ,
        className: "MiddleTextFit",
        children: (0, mQ.jsx)(zq, {
          ref: DQ,
          text: FQ,
          className: wQ
        })
      })
    }
    const AD = (0, LQ.memo)((function() {
        const QQ = (0, kQ.i)("aimingOverlay", "none");
        (0, eQ.b)();
        const FQ = (0, GQ.l)("useInventory");
        return (0, mQ.jsxs)("div", {
          className: "BottomMiddleElements",
          style: "sniper" === QQ ? {
            visibility: "hidden"
          } : {},
          children: [(0, mQ.jsx)(uQ, {}), (0, mQ.jsx)(Gw.c, {}), (0, mQ.jsx)(pw, {}), (0, mQ.jsx)(xQ.j, {
            children: (0, mQ.jsx)(Mq, {})
          }), (0, mQ.jsxs)("div", {
            className: "HotBarRow",
            children: [FQ ? (0, mQ.jsx)(XQ.e, {}) : (0, mQ.jsx)(XQ.g, {}), (0, mQ.jsx)(VQ, {})]
          })]
        })
      })),
      tD = (0, LQ.memo)((function(QQ) {
        let {
          showChat: FQ
        } = QQ;
        const {
          t: wQ
        } = (0, rQ.y)(), {
          clientEscMenuOptions: qQ,
          isTouchScreen: DQ
        } = (0, iQ.l)(["clientEscMenuOptions", "isTouchScreen"]);
        (0, eQ.b)();
        const {
          userContext: kQ,
          isUserContextUpdating: vQ
        } = (0, tQ.e)(), uQ = (0, GQ.l)("hideCoordinates"), bQ = (0, GQ.l)("customVariationTitle"), {
          requestedGameNameWithVariation: YQ,
          gameNameWithVariation: xQ,
          lobbyName: AQ,
          shownLobbyName: pQ
        } = (0, SQ.k)("connectedGame"), cQ = (0, HQ.c)(YQ, AQ, !1), [CQ, WQ] = (0, LQ.useState)(null), RQ = (0, bq.i)(xQ || YQ || ""), OQ = bQ || RQ || "";
        (0, LQ.useEffect)((() => {
          vQ || UL.b.getFavouriteLobbies(kQ).then((QQ => {
            console.log("Got favourite lobbies", QQ), WQ(QQ)
          }))
        }), [vQ, kQ]);
        const sQ = (0, LQ.useRef)(null);
        return (0, LQ.useLayoutEffect)((() => {
          const QQ = sQ.current,
            FQ = document.documentElement,
            wQ = new ResizeObserver((() => {
              FQ.style.setProperty("--InGameHeaderRowsHeight", `${QQ.offsetHeight}px`)
            }));
          return wQ.observe(QQ), () => {
            wQ.disconnect(), FQ.style.removeProperty("--InGameHeaderRowsHeight")
          }
        }), []), OL(sQ), (0, mQ.jsxs)(mQ.Fragment, {
          children: [(0, mQ.jsxs)("div", {
            className: oQ()(SL.d, {
              Touchscreen: DQ
            }),
            ref: sQ,
            children: [(0, mQ.jsxs)("div", {
              className: "InGameHeader",
              children: [(0, mQ.jsxs)("div", {
                className: "InGameHeaderLogo",
                onMouseDown: QQ => {
                  QQ.stopPropagation(), QQ.preventDefault()
                },
                onClick: () => {
                  iQ.c.set({
                    openEverythingMenuName: MQ.n.SETTINGS
                  })
                },
                children: [(0, mQ.jsx)(Hq.c, {
                  showFace: !0,
                  loading: !1
                }), "bloxd.io"]
              }), (0, mQ.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, mQ.jsxs)("div", {
                className: "InGameHeaderGameName",
                children: [null === cQ && (0, mQ.jsx)(Hq.c, {}), null !== cQ && (0, mQ.jsxs)(mQ.Fragment, {
                  children: [cQ, OQ && ` ${OQ}`]
                })]
              }), (0, mQ.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, mQ.jsx)("div", {
                className: "InGameHeaderLobbyName",
                children: pQ
              }), (0, Yq.M)(AQ) && (0, mQ.jsx)(zQ.f, {
                tooltipInner: (0, mQ.jsx)("div", {
                  children: wQ(null !== CQ && CQ.includes(AQ) ? "customLobby:removeFromFavourites" : "customLobby:addToFavourites")
                }),
                children: (0, mQ.jsx)("div", {
                  children: (0, mQ.jsx)(Ow.w, {
                    isLiked: null !== CQ && CQ.includes(AQ),
                    onClick: () => {
                      try {
                        if (!CQ) return;
                        CQ.includes(AQ) ? (UL.b.unfavouriteLobby(kQ, AQ).catch((QQ => {
                          console.error("Failed to favourite lobby", QQ)
                        })), WQ(CQ.filter((QQ => QQ !== AQ)))) : (UL.b.favouriteLobby(kQ, AQ).catch((QQ => {
                          console.error("Failed to favourite lobby", QQ)
                        })), WQ([...CQ, AQ]))
                      } catch (QQ) {
                        console.error("Failed to like lobby", QQ)
                      }
                    },
                    isLoading: null === CQ
                  })
                })
              }), (0, mQ.jsx)(fq, {})]
            }), (0, mQ.jsx)(oq, {
              show: qQ.showFPS
            }), !uQ && qQ.showCoordinates && (0, mQ.jsx)(vq, {}), !uQ && qQ.showChunkCoordinates && (0, mQ.jsx)(mq, {}), (0, mQ.jsx)(jq, {})]
          }), (0, mQ.jsx)("div", {
            className: "TopLeftElements",
            "data-holds-camera-keeper": "",
            children: (0, mQ.jsx)("div", {
              className: "InGameHeaderAndChat",
              "data-holds-camera-keeper": "",
              children: FQ && (0, mQ.jsx)(nQ.b, {})
            })
          })]
        })
      })),
      eD = (0, LQ.memo)((function() {
        (0, eQ.b)();
        const QQ = (0, GQ.o)("RightInfoText"),
          [FQ, wQ] = (0, LQ.useState)(null);
        return (0, xF.j)(FQ, ".RightElements"), QQ.hasText ? (0, mQ.jsx)("div", {
          className: "RightInfoDivContainer",
          children: (0, mQ.jsx)(zq, {
            ref: wQ,
            text: QQ,
            className: "RightInfoDiv",
            children: (0, mQ.jsx)("div", {
              className: "RightInfoDivInner",
              children: (0, mQ.jsx)(vQ.e, {
                text: QQ.content
              })
            })
          })
        }) : null
      }))
  },
  4674: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => kQ
    });
    var LQ = wQ(53),
      qQ = wQ(307),
      oQ = wQ(1887),
      DQ = wQ(1107);

    function kQ(QQ) {
      let {
        text: FQ
      } = QQ;
      const wQ = [];
      let kQ = "";
      return (0, qQ.ec)(FQ).forEach(((QQ, FQ) => {
        if ("string" === typeof QQ || !(0, oQ.g)(QQ.icon)) return void(kQ += "string" === typeof QQ ? QQ : QQ.icon);
        const qQ = Math.max(0, kQ.trimEnd().search(/\S{1,12}$/));
        wQ.push((0, DQ.jsxs)(LQ.Fragment, {
          children: [kQ.slice(0, qQ), (0, DQ.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [kQ.slice(qQ), (0, DQ.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": QQ.icon,
              children: (0, DQ.jsx)(oQ.e, {
                itemName: QQ.icon,
                amount: 0
              })
            })]
          })]
        }, FQ)), kQ = ""
      })), wQ.push(kQ), (0, DQ.jsx)(DQ.Fragment, {
        children: wQ
      })
    }
  },
  36157: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => bQ,
      g: () => uQ,
      j: () => HQ
    });
    var LQ = wQ(53),
      qQ = wQ(1070),
      oQ = wQ.n(qQ),
      DQ = wQ(1887),
      kQ = wQ(1107);
    const vQ = 350;
    let mQ = 0;

    function uQ() {
      return mQ += 1, mQ
    }

    function HQ(QQ, FQ) {
      let wQ = 0;
      for (const LQ of QQ) "ingredient" !== LQ.kind && LQ.wm === FQ && (wQ += LQ.amount);
      return wQ > 0 ? {
        idx: FQ,
        amount: wQ
      } : null
    }

    function bQ(QQ) {
      var FQ, wQ;
      let {
        anim: qQ,
        onComplete: mQ
      } = QQ;
      const uQ = null !== (FQ = qQ.delayMs) && void 0 !== FQ ? FQ : 0,
        HQ = null !== (wQ = qQ.durationMs) && void 0 !== wQ ? wQ : vQ,
        [bQ, YQ] = (0, LQ.useState)(qQ.from),
        [xQ, AQ] = (0, LQ.useState)(0 === uQ),
        [tQ, eQ] = (0, LQ.useState)(!1),
        MQ = (0, LQ.useRef)(!1);
      return (0, LQ.useEffect)((() => {
        let QQ, FQ;
        const wQ = () => {
            MQ.current = !0, AQ(!0), QQ = requestAnimationFrame((() => {
              FQ = requestAnimationFrame((() => {
                YQ({
                  x: qQ.to.x,
                  y: qQ.to.y
                }), eQ(!0)
              }))
            }))
          },
          LQ = MQ.current ? 0 : uQ;
        let oQ;
        LQ > 0 ? oQ = setTimeout(wQ, LQ) : wQ();
        const DQ = setTimeout((() => {
          mQ(qQ.id)
        }), LQ + HQ + 50);
        return () => {
          clearTimeout(oQ), cancelAnimationFrame(QQ), cancelAnimationFrame(FQ), clearTimeout(DQ)
        }
      }), [qQ.id, qQ.to.x, qQ.to.y, mQ, uQ, HQ]), (0, kQ.jsx)("div", {
        className: oQ()("CraftItemFlyAnimation", {
          Ingredient: "ingredient" === qQ.kind,
          Waiting: !xQ,
          Arrived: tQ
        }),
        style: {
          left: bQ.x,
          top: bQ.y,
          "--fly-duration": `${HQ}ms`
        },
        children: (0, kQ.jsx)(DQ.e, {
          itemName: qQ.itemName,
          amount: qQ.amount
        })
      })
    }
  },
  36141: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => KQ,
      g: () => jQ
    });
    var LQ = wQ(53),
      qQ = wQ(2910),
      oQ = wQ(6386),
      DQ = wQ(2024),
      kQ = wQ(2345),
      vQ = wQ(8601),
      mQ = wQ(317),
      uQ = wQ(22),
      HQ = wQ(1447),
      bQ = wQ(27),
      YQ = wQ(1070),
      xQ = wQ.n(YQ),
      AQ = wQ(307),
      tQ = wQ(36147),
      eQ = wQ(1873),
      MQ = wQ(1927),
      GQ = wQ(8431),
      pQ = wQ(1107);

    function cQ(QQ) {
      var FQ, wQ;
      let {
        slotIdx: oQ
      } = QQ;
      const DQ = (0, MQ.g)("hotbar", (QQ => {
          var FQ;
          return null !== (FQ = QQ.items[oQ]) && void 0 !== FQ ? FQ : null
        })),
        vQ = (0, MQ.g)("hotbar", (QQ => QQ.ammo)),
        [uQ, HQ] = (0, LQ.useState)(!1),
        bQ = (0, LQ.useRef)(null),
        [YQ, AQ] = (0, LQ.useState)(null),
        [tQ, cQ] = (0, LQ.useState)(null),
        CQ = (0, kQ.l)("maxAuraLevel"),
        SQ = (0, qQ.b)(),
        iQ = (0, LQ.useCallback)((() => {
          if (clearTimeout(bQ.current), DQ) {
            var QQ, FQ, wQ, LQ;
            const vQ = DQ.displayName,
              uQ = [],
              HQ = Array.isArray(vQ) ? vQ : [vQ],
              bQ = {
                fontStyle: null !== (QQ = DQ.attributes.customAttributes) && void 0 !== QQ && QQ.author ? "italic" : "normal"
              };
            for (const QQ of HQ) QQ.str ? uQ.push(QQ) : uQ.push({
              str: QQ,
              style: bQ
            });
            if (null !== (FQ = DQ.attributes.customAttributes) && void 0 !== FQ && FQ.enchantments) {
              uQ.push(" ");
              const QQ = Object.entries(DQ.attributes.customAttributes.enchantments).sort(((QQ, FQ) => FQ[1] - QQ[1])),
                FQ = DQ.attributes.customAttributes.enchantmentData;
              for (const [wQ, LQ] of QQ) {
                var qQ, oQ;
                const QQ = null !== (qQ = null === FQ || void 0 === FQ || null === (oQ = FQ[wQ]) || void 0 === oQ ? void 0 : oQ.icon) && void 0 !== qQ ? qQ : `${wQ} Enchantment`;
                var kQ;
                if (LQ < 4)
                  for (let FQ = 0; FQ < LQ; FQ++) uQ.push({
                    icon: QQ,
                    style: {
                      fontSize: "1.5em"
                    }
                  });
                else uQ.push({
                  icon: QQ,
                  style: {
                    fontSize: "1.5em"
                  }
                }), uQ.push(null !== (kQ = (0, mQ.S)(LQ)) && void 0 !== kQ ? kQ : LQ.toString())
              }
            }
            AQ(uQ), cQ(null !== (wQ = null === (LQ = DQ.attributes.customAttributes) || void 0 === LQ ? void 0 : LQ.enchantmentTier) && void 0 !== wQ ? wQ : null)
          } else AQ(null), cQ(null);
          HQ(!0), SQ();
          const vQ = null === DQ || void 0 === DQ ? void 0 : DQ.attributes.customAttributes;
          void 0 === (null === vQ || void 0 === vQ ? void 0 : vQ.shotsLeft) && (bQ.current = setTimeout((() => {
            HQ(!1)
          }), 2e3))
        }), [null === DQ || void 0 === DQ ? void 0 : DQ.name, oQ, null === DQ || void 0 === DQ ? void 0 : DQ.instance, null === DQ || void 0 === DQ ? void 0 : DQ.displayName]);
      (0, LQ.useEffect)((() => (iQ(), () => {
        clearTimeout(bQ.current), HQ(!1)
      })), [null === DQ || void 0 === DQ ? void 0 : DQ.name, oQ, null === DQ || void 0 === DQ ? void 0 : DQ.instance, iQ]);
      const WQ = null === DQ || void 0 === DQ || null === (FQ = DQ.attributes.customAttributes) || void 0 === FQ ? void 0 : FQ.shotsLeft,
        RQ = void 0 === WQ ? null : (0, pQ.jsx)("div", {
          className: "SelectedItemShotsLeft",
          children: `${WQ}|${DQ.requiresAmmo?`${vQ}x${DQ.clipSize}`:DQ.clipSize}`
        }),
        OQ = (0, GQ.j)();
      return (0, pQ.jsx)(pQ.Fragment, {
        children: uQ && DQ && !OQ.showing ? (0, pQ.jsxs)("div", {
          className: xQ()("SelectedItemName SmallTextBold", {
            NoAuraBar: 0 === CQ,
            Enchanted: null !== tQ
          }),
          style: {
            "--enchantmentColour": null !== (wQ = mQ.pb[tQ]) && void 0 !== wQ ? wQ : mQ.pb.None,
            "--duration": tQ ? (0, mQ.jb)(tQ) + "s" : void 0
          },
          children: [tQ && (0, pQ.jsxs)("div", {
            className: "SelectedItemNameGradient",
            children: [(0, pQ.jsx)(eQ.e, {
              text: YQ
            }), RQ]
          }), (0, pQ.jsxs)("div", {
            className: "SelectedItemNameNormal",
            children: [(0, pQ.jsx)(eQ.e, {
              text: YQ
            }), RQ]
          })]
        }) : null
      })
    }
    var CQ = wQ(36157),
      SQ = wQ(17),
      iQ = wQ(1897),
      WQ = wQ(619),
      RQ = wQ(2349),
      OQ = wQ(3263),
      sQ = wQ(3268);
    var rQ = wQ(1132),
      IQ = wQ(1130),
      UQ = wQ(2407);

    function NQ() {
      return parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--touch-hotbar-ends-spare")) >= 0
    }
    var TQ = wQ(1464);
    const KQ = (0, LQ.memo)((function() {
      const [QQ, FQ] = (0, LQ.useState)(0), wQ = (0, kQ.l)("useFullInventory"), DQ = (0, kQ.l)("highlightedHotbarSlots"), {
        isTouchScreen: vQ,
        openInGameMenuName: mQ
      } = (0, SQ.l)(["isTouchScreen", "openInGameMenuName"]), bQ = null !== mQ && "inventory" !== mQ, YQ = (0, MQ.k)("fullInventory") && "inventory" === mQ, AQ = function() {
        const QQ = (0, rQ.i)(((QQ, FQ) => `${QQ}:${(0,IQ.d)(QQ,FQ)?"portrait":"landscape"}`)),
          [FQ, wQ] = (0, LQ.useState)(NQ);
        return (0, LQ.useLayoutEffect)((() => {
          wQ(NQ())
        }), [QQ]), (0, HQ.g)(UQ.g, (() => {
          wQ(NQ())
        })), FQ
      }(), eQ = vQ && !AQ;
      ! function(QQ, FQ, wQ) {
        (0, LQ.useLayoutEffect)((() => {
          const LQ = document.documentElement.classList;
          return QQ && (LQ.add("TouchHotbar"), LQ.toggle("TouchHotbarKeysAbove", FQ), LQ.toggle("TouchHotbarHasBag", wQ)), (0, OQ.j)(), uQ.l.GA(sQ.d), () => {
            LQ.remove("TouchHotbar", "TouchHotbarKeysAbove", "TouchHotbarHasBag"), (0, OQ.j)(), uQ.l.GA(sQ.d)
          }
        }), [QQ, FQ, wQ])
      }(vQ, eQ, wQ);
      const [GQ, RQ] = (0, oQ.b)("changedHotbarUsingNumkeys", !0), TQ = (0, MQ.g)("hotbar", (QQ => QQ.selectedSlot)), KQ = null !== TQ && void 0 !== TQ ? TQ : QQ, aQ = (0, qQ.b)(), XQ = (0, LQ.useRef)(null), VQ = (0, HQ.i)("pointerLockUpdate", Boolean(document.pointerLockElement));
      (0, HQ.g)("inventoryDraggedItemUpdated", (QQ => {
        XQ.current = QQ, aQ()
      })), (0, MQ.d)("hotbarScrolled", (QQ => {
        null === TQ && JQ(QQ)
      })), (0, MQ.d)("hotbarSlotRequested", (QQ => {
        hQ(QQ), RQ(!1)
      })), (0, MQ.d)("numberKeyPressed", (() => {
        RQ(!1)
      })), (0, MQ.d)("hotbarDropRequested", (QQ => {
        const FQ = iQ.gameBridge.latest("hotbar").items[KQ];
        if (FQ) {
          var wQ;
          const LQ = QQ && null !== (wQ = FQ.amount) && void 0 !== wQ ? wQ : 1;
          iQ.gameBridge.send("removeInventoryItem", {
            slot: KQ,
            amount: LQ,
            drop: !0
          })
        }
      }));
      const hQ = QQ => {
          iQ.gameBridge.send("selectHotbarSlot", QQ), FQ(QQ)
        },
        JQ = QQ => {
          hQ((KQ + QQ + WQ.l) % WQ.l)
        };
      let EQ, nQ = null,
        gQ = null,
        PQ = QQ => QQ => {},
        ZQ = QQ => FQ => {
          hQ(QQ)
        },
        yQ = QQ => QQ => {},
        BQ = [];
      if (YQ) {
        var dQ;
        const QQ = XQ.current;
        if (null === QQ || void 0 === QQ || !QQ.setHovered) return (0, pQ.jsx)("div", {
          className: xQ()("HotBarContainer", {
            Touch: vQ,
            KeysAbove: eQ
          }),
          children: (0, pQ.jsx)("div", {
            className: "HotBar"
          })
        });
        nQ = QQ.draggedInfo, gQ = QQ.specialItemInfo, PQ = QQ.setHovered, ZQ = QQ.pointerDown, yQ = QQ.pointerUp, EQ = QQ.variation, BQ = null !== (dQ = QQ.craftFlyAnims) && void 0 !== dQ ? dQ : []
      }
      return (0, pQ.jsxs)("div", {
        className: xQ()("HotBarContainer", {
          Touch: vQ,
          PopupOpen: vQ && bQ,
          KeysAbove: eQ
        }),
        children: [(0, pQ.jsxs)("div", {
          className: xQ()("HotBar", {
            HoverDisabled: VQ
          }),
          children: [vQ && (0, pQ.jsxs)(pQ.Fragment, {
            children: [(0, pQ.jsx)(lQ, {
              useFullInventory: wQ,
              inventoryOpen: YQ
            }), (0, pQ.jsx)(zQ, {
              direction: "Previous",
              onPress: () => {
                JQ(-1)
              }
            })]
          }), !vQ && (0, pQ.jsxs)(pQ.Fragment, {
            children: [(0, pQ.jsx)(jQ, {}), (0, pQ.jsx)("div", {
              className: "HotBarFiller"
            })]
          }), (0, pQ.jsx)("div", {
            className: "HotBarGameItemsContainer",
            children: new Array(10).fill(0).map(((QQ, FQ) => (0, pQ.jsx)(tQ.d, {
              idx: FQ,
              draggedInfo: nQ,
              specialItemInfo: gQ,
              craftFlyHoldbackInfo: (0, CQ.j)(BQ, FQ),
              setHovered: PQ(FQ),
              pointerDown: ZQ(FQ),
              pointerUp: yQ(FQ),
              variation: EQ,
              isSelected: FQ === KQ,
              hotbarHighlighted: !0 === (null === DQ || void 0 === DQ ? void 0 : DQ.includes(FQ)),
              hoverDisabled: VQ,
              showNumber: GQ && !vQ
            }, FQ)))
          }), vQ && (0, pQ.jsx)(zQ, {
            direction: "Next",
            onPress: () => {
              JQ(1)
            }
          }), !vQ && (0, pQ.jsxs)(pQ.Fragment, {
            children: [(0, pQ.jsx)("div", {
              className: "HotBarFiller"
            }), (0, pQ.jsx)("div", {
              className: xQ()("HotBarItem ButtonHotBarItem", {
                HiddenButtonHotBarItem: !wQ
              }),
              onPointerDown: () => {
                uQ.l.GA("toggleMenu", "inventory")
              },
              children: (0, pQ.jsx)(fQ, {})
            })]
          })]
        }), (0, pQ.jsx)(cQ, {
          slotIdx: KQ
        })]
      })
    }));

    function zQ(QQ) {
      let {
        direction: FQ,
        onPress: wQ
      } = QQ;
      return (0, pQ.jsx)("div", {
        className: xQ()("HotBarArrow", FQ),
        ...TQ.h,
        children: (0, pQ.jsx)(DQ.e, {
          icon: "Previous" === FQ ? "caret-left" : "caret-right",
          touchPressOn: "pointerdown",
          onClick: wQ
        })
      })
    }
    const lQ = (0, LQ.memo)((function(QQ) {
        let {
          useFullInventory: FQ,
          inventoryOpen: wQ
        } = QQ;
        const qQ = (0, kQ.l)("maxAuraLevel"),
          oQ = (0, LQ.useRef)(null);
        return function(QQ, FQ, wQ) {
          (0, LQ.useLayoutEffect)((() => (document.documentElement.classList.toggle("TouchHotbarHasShop", FQ), () => {
            document.documentElement.classList.remove("TouchHotbarHasShop")
          })), [FQ]), (0, LQ.useLayoutEffect)((() => {
            const FQ = QQ.current.closest(".BottomMiddleElements");
            return FQ.classList.toggle("TouchInventoryOpen", wQ), () => {
              FQ.classList.remove("TouchInventoryOpen")
            }
          }), [QQ, wQ])
        }(oQ, (0, vQ.c)(), wQ), (0, pQ.jsxs)("div", {
          ref: oQ,
          className: xQ()("TouchInventoryKeys", {
            NoAuraBar: 0 === qQ,
            InventoryOpen: wQ
          }),
          children: [(0, pQ.jsx)(jQ, {
            touchKey: !0
          }), (0, pQ.jsx)("div", {
            className: xQ()("TouchInventoryKey BagKey", {
              Hidden: !FQ
            }),
            ...TQ.h,
            children: (0, pQ.jsx)(fQ, {
              touchKey: !0
            })
          })]
        })
      })),
      jQ = (0, LQ.memo)((function(QQ) {
        let {
          touchKey: FQ = !1
        } = QQ;
        const wQ = (0, vQ.c)();
        return (0, pQ.jsx)("div", {
          className: FQ ? xQ()("TouchInventoryKey ShopKey", {
            Hidden: !wQ
          }) : xQ()("HotBarItem ButtonHotBarItem", {
            HiddenButtonHotBarItem: !wQ
          }),
          ...FQ ? TQ.h : {},
          children: (0, pQ.jsx)(DQ.e, {
            icon: (0, mQ.jc)(),
            noaAction: "OpenShop",
            touchPressOn: "pointerdown",
            onClick: () => {
              wQ && SQ.c.set({
                openEverythingMenuName: AQ.n.SHOP
              })
            },
            showTouchTutorialPubSubId: "showShopTouchTutorial",
            showRedDotPubSubId: "showShopIconRedDot",
            touchIconPosition: "topleft"
          })
        })
      }));

    function aQ(QQ) {
      let {
        player: FQ
      } = QQ;
      return FQ.some((QQ => null !== QQ && mQ.Zc.includes(QQ.name)))
    }

    function XQ(QQ) {
      QQ.creative || bQ.i.getItem("LogInInventoryRedDotTutorialComplete") || (aQ(QQ) ? (uQ.l.GA("RedDotOpenInventoryIcon", !0), uQ.l.GA("TouchTutorialOpenInventoryIcon", !0)) : (uQ.l.GA("RedDotOpenInventoryIcon", !1), uQ.l.GA("TouchTutorialOpenInventoryIcon", !1)))
    }
    const fQ = (0, LQ.memo)((function(QQ) {
      let {
        touchKey: FQ = !1
      } = QQ;
      const {
        backpackPointerRequested: wQ
      } = (0, SQ.l)(["backpackPointerRequested"]);
      (0, LQ.useEffect)((() => {
        XQ(iQ.gameBridge.latest("inventory"))
      }), []), (0, MQ.d)("inventory", XQ);
      const qQ = (0, RQ.n)();
      return (0, HQ.g)("toggleMenu", (QQ => {
        qQ.shown && (null !== QQ && void 0 !== QQ && QQ.startsWith("inventory") && aQ(iQ.gameBridge.latest("inventory")) ? (bQ.i.setItem("LogInInventoryRedDotTutorialComplete", !0), uQ.l.GA("RedDotOpenInventoryIcon", !1), uQ.l.GA("TouchTutorialOpenInventoryIcon", !1)) : "shop" === QQ && uQ.l.GA("showShopTouchTutorial", !1))
      })), FQ ? (0, pQ.jsx)(DQ.e, {
        icon: "backpack",
        noaAction: "OpenInventory",
        touchPressOn: "pointerdown",
        onClick: () => {
          uQ.l.GA("toggleMenu", "inventory")
        },
        showRedDotPubSubId: "RedDotOpenInventoryIcon",
        showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
        touchTutorialRequested: wQ,
        touchIconPosition: "topleft"
      }) : (0, pQ.jsx)("div", {
        className: "HotBarButton",
        onPointerDown: () => {
          uQ.l.GA("toggleMenu", "inventory")
        },
        children: (0, pQ.jsx)(DQ.e, {
          icon: "backpack",
          noaAction: "OpenInventory",
          onPointerDown: QQ => {
            uQ.l.GA("toggleMenu", "inventory"), QQ.stopPropagation()
          },
          showRedDotPubSubId: "RedDotOpenInventoryIcon",
          showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
          touchTutorialRequested: wQ,
          touchIconPosition: "topleft"
        })
      })
    }))
  },
  36147: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => tQ,
      e: () => xQ
    });
    var LQ = wQ(53),
      qQ = wQ(1070),
      oQ = wQ.n(qQ),
      DQ = wQ(1895),
      kQ = wQ(1887),
      vQ = wQ(1897),
      mQ = wQ(1927),
      uQ = wQ(36149),
      HQ = wQ(9116),
      bQ = wQ(1395),
      YQ = wQ(1107);
    const xQ = (QQ, FQ, wQ) => {
      let LQ = FQ,
        qQ = !1;
      for (const oQ of wQ)(null === oQ || void 0 === oQ ? void 0 : oQ.idx) === QQ && (qQ = !0, LQ > 0 && (LQ -= oQ.amount));
      return {
        displayedAmt: LQ,
        shown: !qQ || LQ > 0
      }
    };
    const AQ = QQ => {
        let {
          idx: FQ
        } = QQ;
        return (0, bQ.n)() ? null : (0, YQ.jsx)("div", {
          className: "HotbarItemNumber SmallTextBold",
          children: FQ < 9 ? FQ + 1 : 0
        })
      },
      tQ = (0, LQ.memo)((function(QQ) {
        var FQ, wQ, LQ;
        let {
          idx: qQ,
          setHovered: bQ,
          pointerDown: tQ,
          pointerUp: eQ,
          draggedInfo: MQ,
          specialItemInfo: GQ,
          craftFlyHoldbackInfo: pQ,
          defaultIconB64: cQ = null,
          variation: CQ,
          isSelected: SQ = !1,
          hotbarHighlighted: iQ = !1,
          hoverDisabled: WQ = !1,
          showNumber: RQ = !1,
          showNewDot: OQ = !1
        } = QQ;
        const sQ = (0, mQ.g)("inventory", (QQ => qQ === uQ.d ? null : (0, HQ.m)(QQ, qQ)));
        let rQ, IQ, UQ, NQ;
        if (qQ === uQ.d) GQ && (rQ = GQ.name, UQ = GQ.amount, NQ = GQ.attributes);
        else if (sQ) {
          var TQ;
          rQ = sQ.name, IQ = sQ.icon, UQ = null !== (TQ = sQ.amount) && void 0 !== TQ ? TQ : 0, NQ = sQ.attributes
        }
        const KQ = null === (FQ = NQ) || void 0 === FQ || null === (wQ = FQ.customAttributes) || void 0 === wQ ? void 0 : wQ.enchantmentTier,
          zQ = (0, DQ.i)(NQ),
          {
            displayedAmt: lQ,
            shown: jQ
          } = xQ(qQ, UQ, [MQ, GQ, pQ]),
          aQ = rQ && jQ,
          XQ = void 0 !== CQ && function(QQ, FQ) {
            const {
              enchantable: wQ,
              salvageable: LQ
            } = vQ.gameBridge.latest("stationItems");
            return "Enchanting Table" === QQ ? !0 === wQ[FQ] : "Salvaging Table" === QQ && !0 === LQ[FQ]
          }(CQ, rQ);
        return (0, YQ.jsxs)("div", {
          className: oQ()("InvenItem", {
            Highlighted: aQ && XQ,
            Selected: SQ,
            HotbarHighlighted: iQ,
            HoverDisabled: WQ
          }),
          onPointerEnter: () => {
            null === bQ || void 0 === bQ || bQ(!0)
          },
          onPointerLeave: () => {
            null === bQ || void 0 === bQ || bQ(!1)
          },
          onPointerDown: tQ,
          onPointerUp: eQ,
          "data-inven-idx": qQ,
          children: [aQ && (0, YQ.jsx)(kQ.e, {
            itemName: null !== (LQ = IQ) && void 0 !== LQ ? LQ : rQ,
            amount: lQ,
            enchantmentTier: KQ,
            bar: zQ
          }), aQ && OQ && (0, YQ.jsx)("div", {
            className: "InvenItemNewDot"
          }), RQ && (0, YQ.jsx)(AQ, {
            idx: qQ
          }), cQ && !aQ && (0, YQ.jsx)("div", {
            className: "InvenItemUnfilled",
            style: {
              backgroundImage: `url(${cQ})`
            }
          })]
        })
      }))
  },
  9103: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => oQ
    });
    var LQ = wQ(317),
      qQ = wQ(9110);

    function oQ(QQ, FQ, wQ) {
      const oQ = Object.entries(FQ).sort(((QQ, FQ) => FQ[1] - QQ[1])),
        DQ = (0, LQ.ub)(QQ);
      DQ.push(QQ ? "\n\n" : "\n");
      for (const [qQ, xQ] of oQ) {
        var kQ, vQ, mQ;
        const QQ = null !== (kQ = null === wQ || void 0 === wQ || null === (vQ = wQ[qQ]) || void 0 === vQ ? void 0 : vQ.icon) && void 0 !== kQ ? kQ : `${qQ} Enchantment`;
        DQ.push({
          icon: QQ,
          style: {
            fontSize: "1.5rem"
          }
        }), DQ.push({
          str: `${qQ} ${null!==(mQ=(0,LQ.S)(xQ))&&void 0!==mQ?mQ:xQ}\n`
        })
      }
      DQ.push({
        str: "\n"
      });
      for (const [LQ, xQ] of oQ) {
        var uQ, HQ, bQ, YQ;
        const QQ = null !== (uQ = null === wQ || void 0 === wQ || null === (HQ = wQ[LQ]) || void 0 === HQ ? void 0 : HQ.icon) && void 0 !== uQ ? uQ : `${LQ} Enchantment`,
          FQ = null !== (bQ = null === wQ || void 0 === wQ || null === (YQ = wQ[LQ]) || void 0 === YQ ? void 0 : YQ.description) && void 0 !== bQ ? bQ : (0, qQ.g)(LQ);
        DQ.push({
          icon: QQ,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), DQ.push({
          str: FQ,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), DQ.push({
          str: "\n"
        })
      }
      return DQ
    }
  },
  36149: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ,
      d: () => qQ
    });
    const LQ = -1,
      qQ = -2
  },
  9116: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => mQ,
      f: () => MQ,
      j: () => tQ,
      m: () => vQ,
      n: () => eQ,
      o: () => uQ,
      p: () => bQ,
      q: () => AQ,
      s: () => HQ
    });
    var LQ = wQ(307),
      qQ = wQ(619),
      oQ = wQ(317),
      DQ = wQ(4112),
      kQ = wQ(9103);

    function vQ(QQ, FQ) {
      var wQ;
      let {
        player: LQ,
        chestOrCreative: qQ
      } = QQ;
      var oQ;
      return FQ < LQ.length ? null !== (oQ = LQ[FQ]) && void 0 !== oQ ? oQ : null : null !== (wQ = qQ[FQ - LQ.length]) && void 0 !== wQ ? wQ : null
    }

    function mQ(QQ) {
      var FQ;
      return null !== (FQ = QQ.amount) && void 0 !== FQ ? FQ : 0
    }

    function uQ(QQ) {
      return 0 === QQ.button || void 0 === QQ.button
    }

    function HQ(QQ) {
      return !!QQ.shiftKey
    }

    function bQ(QQ) {
      return "touches" in QQ || "touch" === QQ.pointerType || "pen" === QQ.pointerType
    }
    const YQ = new Set,
      xQ = 50;

    function AQ(QQ, FQ) {
      var wQ;
      const LQ = null === (wQ = QQ[FQ]) || void 0 === wQ ? void 0 : wQ.displayName;
      return (0, qQ.F)(LQ) ? "string" !== typeof FQ ? "" : (!YQ.has(FQ) && YQ.size < xQ && (YQ.add(FQ), console.warn(`No item called "${FQ}", so its hover shows the name as given`)), FQ) : LQ
    }

    function tQ(QQ, FQ, wQ) {
      var vQ, mQ, uQ, HQ, bQ, YQ, xQ, tQ, eQ, MQ, GQ, pQ, cQ, CQ;
      const SQ = QQ.attributes,
        iQ = null !== (vQ = null === (mQ = FQ[QQ.name]) || void 0 === mQ ? void 0 : mQ.rootName) && void 0 !== vQ ? vQ : QQ.name,
        WQ = null !== (uQ = null !== (HQ = SQ.customDisplayName) && void 0 !== HQ ? HQ : null === (bQ = FQ[QQ.name]) || void 0 === bQ ? void 0 : bQ.displayName) && void 0 !== uQ ? uQ : AQ(FQ, iQ);
      let RQ = WQ;
      const OQ = null === (YQ = SQ.customAttributes) || void 0 === YQ ? void 0 : YQ.enchantmentTier;
      OQ && (RQ = (0, oQ.ub)(WQ, {
        colour: oQ.pb[OQ]
      }));
      const sQ = null !== (xQ = null !== (tQ = null !== (eQ = function(QQ, FQ) {
        var wQ;
        if (void 0 === QQ || null !== (wQ = FQ.customAttributes) && void 0 !== wQ && wQ.author) return QQ;
        const qQ = (0, LQ.ec)(QQ);
        return qQ.every((QQ => "string" === typeof QQ)) ? QQ : qQ.map((QQ => "string" === typeof QQ ? QQ : {
          icon: QQ.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(SQ.customDescription, SQ)) && void 0 !== eQ ? eQ : null === (MQ = FQ[QQ.name]) || void 0 === MQ ? void 0 : MQ.description) && void 0 !== tQ ? tQ : null === (GQ = FQ[iQ]) || void 0 === GQ ? void 0 : GQ.description) && void 0 !== xQ ? xQ : "";
      let rQ = sQ;
      if (null !== (pQ = SQ.customAttributes) && void 0 !== pQ && pQ.enchantments) rQ = (0, kQ.b)(sQ, SQ.customAttributes.enchantments, SQ.customAttributes.enchantmentData);
      else if (wQ[iQ]) rQ = (0, oQ.ub)(sQ), rQ.push({
        str: "\n"
      }), rQ.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (cQ = SQ.customAttributes) && void 0 !== cQ && cQ.mobSettings) {
        var IQ, UQ;
        const QQ = SQ.customAttributes.mobSettings;
        var NQ, TQ;
        if (rQ = [], (0, qQ.F)(SQ.customAttributes.health) || (rQ.push({
            str: "\n"
          }), rQ.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), rQ.push({
            str: " "
          }), rQ.push({
            str: SQ.customAttributes.health.toString()
          }), (0, qQ.F)(QQ.maxHealth) || (rQ.push({
            str: "/"
          }), rQ.push({
            str: QQ.maxHealth.toString()
          }))), !(0, qQ.F)(QQ.attackDamage) && QQ.attackDamage > 0 && (rQ.push({
            str: "\n"
          }), rQ.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), rQ.push({
            str: " "
          }), rQ.push({
            str: QQ.attackDamage.toString()
          })), !(0, qQ.F)(QQ.secondaryAttackDamage) && QQ.secondaryAttackDamage > 0 && (rQ.push({
            str: "\n"
          }), rQ.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), rQ.push({
            str: " "
          }), rQ.push({
            str: QQ.secondaryAttackDamage.toString()
          })), (0, qQ.F)(QQ.baseRunningSpeed) || (rQ.push({
            str: "\n"
          }), rQ.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), rQ.push({
            str: " "
          }), rQ.push({
            str: QQ.baseRunningSpeed.toFixed(2)
          })), "Saddled" === QQ.metaInfo) rQ.push({
          str: "\n"
        }), rQ.push({
          str: {
            translationKey: "general:has"
          }
        }), rQ.push({
          str: " "
        }), rQ.push({
          icon: null !== (NQ = null === (TQ = QQ.tameInfo) || void 0 === TQ ? void 0 : TQ.saddleItemName) && void 0 !== NQ ? NQ : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (rQ.push({
            str: "\n"
          }), rQ.push({
            str: "\n"
          }), QQ.petInfo && null !== (IQ = QQ.tameInfo) && void 0 !== IQ && IQ.supportsFriendship) {
          const FQ = DQ.b.getIconsFromFriendshipPoints(QQ.petInfo.friendshipPoints);
          for (const QQ of FQ) rQ.push({
            icon: QQ,
            style: {
              fontSize: "1.5em"
            }
          });
          rQ.push({
            str: "\n"
          });
          const wQ = DQ.b.getMobHungerLevel(QQ.petInfo.lastFedAt);
          for (const QQ of DQ.b.hungerLevelIcons[wQ]) rQ.push({
            icon: QQ,
            style: {
              fontSize: "1.5em"
            }
          });
          rQ.push({
            str: " "
          }), rQ.push({
            str: DQ.b.hungerLevelTranslations[wQ],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (QQ.tameInfo && null !== (UQ = QQ.tameInfo) && void 0 !== UQ && UQ.supportsFriendship) {
          var KQ, zQ;
          let FQ = null !== (KQ = QQ.tameInfo.likedFoods) && void 0 !== KQ ? KQ : [];
          rQ.push({
            str: "\n"
          }), rQ.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: DQ.b.feedTextColours[DQ.b.MobFoodType.Superliked]
            }
          }), rQ.push({
            str: " "
          }), null !== (zQ = QQ.petInfo) && void 0 !== zQ && zQ.superlikedFoodKnown ? (rQ.push({
            icon: QQ.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), FQ = FQ.filter((FQ => FQ !== QQ.petInfo.superlikedFood))) : rQ.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), rQ.push({
            str: "\n"
          }), rQ.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: DQ.b.feedTextColours[DQ.b.MobFoodType.Liked]
            }
          }), rQ.push({
            str: " "
          });
          for (const QQ of FQ) rQ.push({
            icon: QQ,
            style: {
              fontSize: "1.5em"
            }
          });
          rQ.push({
            str: "\n"
          }), rQ.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: DQ.b.feedTextColours[DQ.b.MobFoodType.Neutral]
            }
          }), rQ.push({
            str: " "
          });
          for (const wQ of null !== (lQ = QQ.tameInfo.neutralFoods) && void 0 !== lQ ? lQ : []) {
            var lQ;
            rQ.push({
              icon: wQ,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          rQ.push({
            str: "\n"
          }), rQ.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: DQ.b.feedTextColours[DQ.b.MobFoodType.Disliked]
            }
          }), rQ.push({
            str: " "
          });
          for (const wQ of null !== (jQ = QQ.tameInfo.dislikedFoods) && void 0 !== jQ ? jQ : []) {
            var jQ;
            rQ.push({
              icon: wQ,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        rQ.length > 0 ? (rQ.shift(), rQ.unshift(...(0, oQ.ub)(sQ))) : rQ = (0, oQ.ub)(sQ)
      }
      return {
        name: RQ,
        desc: rQ,
        fontStyle: null !== (CQ = SQ.customAttributes) && void 0 !== CQ && CQ.author ? "italic" : "normal"
      }
    }

    function eQ(QQ, FQ, wQ, LQ) {
      const qQ = vQ(QQ, wQ),
        oQ = vQ(QQ, LQ);
      if (!qQ) return !1;
      const DQ = FQ[qQ.name].armourReduction,
        kQ = FQ[oQ.name].armourReduction;
      if (kQ === DQ) {
        var mQ, uQ, HQ, bQ;
        const QQ = null !== (mQ = null === (uQ = qQ.attributes.customAttributes) || void 0 === uQ ? void 0 : uQ.enchantmentTier) && void 0 !== mQ ? mQ : "Tier 0",
          FQ = null !== (HQ = null === (bQ = oQ.attributes.customAttributes) || void 0 === bQ ? void 0 : bQ.enchantmentTier) && void 0 !== HQ ? HQ : "Tier 0";
        return parseInt(QQ.replace("Tier ", "")) >= parseInt(FQ.replace("Tier ", ""))
      }
      return DQ > kQ
    }

    function MQ(QQ) {
      let FQ;
      if ("number" === typeof QQ) {
        const wQ = document.querySelector(`[data-inven-idx="${QQ}"]`);
        if (!wQ) return null;
        FQ = wQ.getBoundingClientRect()
      } else FQ = QQ.getBoundingClientRect();
      return {
        x: FQ.left + FQ.width / 2,
        y: FQ.top + FQ.height / 2
      }
    }
  },
  8995: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => YQ,
      d: () => xQ,
      g: () => AQ
    });
    var LQ = wQ(1451),
      qQ = wQ(53),
      oQ = wQ(1326),
      DQ = wQ(4376),
      kQ = wQ(2276),
      vQ = wQ(1207),
      mQ = wQ(96),
      uQ = wQ(1927),
      HQ = wQ(1348),
      bQ = wQ(1107);

    function YQ(QQ) {
      let {
        show: FQ,
        onClose: wQ
      } = QQ;
      const {
        requestedGameNameWithVariation: LQ,
        lobbyName: qQ,
        shownLobbyName: oQ
      } = (0, uQ.k)("connectedGame"), vQ = (0, kQ.c)(LQ, qQ, !1);
      return mQ.featureFlags.canUseInviteLinks && (0, bQ.jsx)(DQ.d, {
        show: FQ,
        close: wQ,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, bQ.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, bQ.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, bQ.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, bQ.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === vQ ? (0, bQ.jsx)(HQ.c, {}) : vQ, (0, bQ.jsx)("br", {}), "Lobby Name: ", oQ, (0, bQ.jsx)("br", {}), (0, bQ.jsx)("br", {}), (0, bQ.jsx)("br", {}), (0, bQ.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, bQ.jsx)(xQ, {})]
        })
      })
    }

    function xQ() {
      var QQ;
      const {
        t: FQ
      } = (0, vQ.y)(), wQ = null !== (QQ = AQ(mQ.featureFlags.canUseInviteLinks)) && void 0 !== QQ ? QQ : "Loading Link...", [oQ, DQ] = (0, qQ.useState)(0), [kQ, uQ] = (0, qQ.useReducer)((QQ => QQ + 1), 0);
      return (0, qQ.useEffect)((() => {
        const QQ = setTimeout((() => {
          uQ()
        }), 1100);
        return () => {
          clearTimeout(QQ)
        }
      }), [oQ]), mQ.featureFlags.canUseInviteLinks && (0, bQ.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, bQ.jsx)("div", {
          className: "InviteLinkInner",
          children: wQ
        }), (0, bQ.jsx)(LQ.f, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(wQ).catch((QQ => {
              console.error("Failed to copy invite link:", QQ)
            })), DQ(Date.now())
          },
          disabled: Date.now() - oQ < 1e3,
          children: Date.now() - oQ < 1e3 ? FQ("general:copied") : FQ("general:copy")
        })]
      })
    }

    function AQ(QQ) {
      const [FQ, wQ] = (0, qQ.useState)(null);
      return (0, qQ.useEffect)((() => {
        if (!QQ) return;
        let FQ = !0;
        return (0, oQ.E)().then((QQ => {
          FQ && wQ(QQ)
        })).catch((QQ => {
          console.error("Failed to get invite link:", QQ)
        })), () => {
          FQ = !1
        }
      }), [QQ]), FQ
    }
  },
  36625: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => WQ
    });
    var LQ = wQ(53),
      qQ = wQ(2345),
      oQ = wQ(1873),
      DQ = wQ(600),
      kQ = wQ(22),
      vQ = wQ(1070),
      mQ = wQ.n(vQ),
      uQ = wQ(36180),
      HQ = wQ(2494),
      bQ = wQ(36185),
      YQ = wQ(2523),
      xQ = wQ(2501),
      AQ = wQ(3479),
      tQ = wQ(36190),
      eQ = wQ(17),
      MQ = wQ(1994),
      GQ = wQ(2283),
      pQ = wQ(1237),
      cQ = wQ(4746),
      CQ = wQ(1927),
      SQ = wQ(96),
      iQ = wQ(1107);
    const WQ = (0, LQ.memo)((function() {
      const QQ = (0, qQ.l)("lobbyLeaderboardInfo"),
        FQ = (0, CQ.k)("players"),
        wQ = (0, CQ.k)("lobbyLeaderboardRows"),
        kQ = (0, CQ.k)("hiddenPlayerNames"),
        vQ = (0, LQ.useRef)(null),
        [mQ, uQ] = (0, LQ.useReducer)((QQ => QQ + 1), 0);
      return (0, LQ.useEffect)((() => (0, MQ.c)((() => {
        uQ()
      }))), []), (0, iQ.jsx)("div", {
        className: "LobbyLeaderboardContainer Menu",
        children: (0, iQ.jsx)("div", {
          className: "MenuBody",
          children: function() {
            if (!QQ) return (0, iQ.jsx)(iQ.Fragment, {});
            const LQ = JSON.parse(JSON.stringify(QQ)),
              qQ = [...FQ.ids],
              mQ = {},
              uQ = {};
            for (const QQ of qQ) {
              var HQ, YQ;
              mQ[QQ] = null === (HQ = wQ[QQ]) || void 0 === HQ ? void 0 : HQ.colour;
              const FQ = null === (YQ = wQ[QQ]) || void 0 === YQ ? void 0 : YQ.values;
              FQ && (uQ[QQ] = {
                ...FQ
              })
            }
            const xQ = Object.keys(LQ);
            xQ.sort(((QQ, FQ) => LQ[QQ].sortPriority - LQ[FQ].sortPriority)), qQ.sort(((QQ, FQ) => {
              if (!uQ[QQ] || !uQ[FQ]) return 0;
              for (const wQ of xQ) {
                const qQ = uQ[QQ][wQ],
                  oQ = uQ[FQ][wQ];
                let DQ = 0;
                if ("string" == typeof qQ && "string" == typeof oQ ? DQ = qQ.localeCompare(oQ) : "number" == typeof qQ && "number" == typeof oQ ? DQ = qQ - oQ : "number" == typeof qQ && "string" == typeof oQ ? DQ = 1 : "string" == typeof qQ && "number" == typeof oQ && (DQ = -1), DQ) return DQ * ("ascending" === LQ[wQ].sortOrder ? 1 : -1)
              }
              return 0
            }));
            for (const QQ of qQ) {
              var AQ, tQ, eQ;
              const {
                name: LQ,
                ranks: qQ,
                cosmetics: oQ
              } = FQ.byId[QQ], kQ = [], vQ = null !== (AQ = null === (tQ = wQ[QQ]) || void 0 === tQ || null === (eQ = tQ.tags) || void 0 === eQ ? void 0 : eQ.flatMap((QQ => 0 === QQ.length ? QQ : [...QQ, String.fromCharCode(8198)]))) && void 0 !== AQ ? AQ : [];
              kQ.push(...vQ), kQ.push(...(0, pQ.D)(qQ, LQ, (null === oQ || void 0 === oQ ? void 0 : oQ.nameColour) === DQ.d || null === oQ || void 0 === oQ ? void 0 : oQ.nameColour)), uQ[QQ] ??= {}, uQ[QQ].name = kQ
            }

            function CQ(QQ, wQ) {
              if (uQ[QQ] && void 0 !== uQ[QQ][wQ]) {
                if ("name" === wQ) {
                  const {
                    name: LQ,
                    cosmetics: qQ
                  } = FQ.byId[QQ];
                  return (0, iQ.jsxs)("div", {
                    className: "PlayerPfpAndName",
                    children: [qQ && (0, iQ.jsx)(GQ.c, {
                      cosmetics: qQ
                    }), " ", (0, iQ.jsx)(oQ.e, {
                      text: uQ[QQ][wQ],
                      friendBadgeFor: (0, MQ.g)(LQ, kQ) ? LQ : void 0
                    })]
                  })
                }
                return (0, iQ.jsx)(oQ.e, {
                  text: uQ[QQ][wQ]
                })
              }
              return ""
            }
            const SQ = Object.keys(LQ).filter((QQ => !0 !== LQ[QQ].hidden)).map((QQ => {
              var FQ;
              return {
                key: QQ,
                header: (0, iQ.jsx)(oQ.e, {
                  text: null !== (FQ = LQ[QQ].displayName) && void 0 !== FQ ? FQ : ""
                })
              }
            }));
            return (0, iQ.jsx)("div", {
              ref: vQ,
              className: "LobbyLeaderboard",
              children: (0, iQ.jsx)(cQ.e, {
                columns: SQ,
                rows: qQ,
                getRowKey: QQ => QQ,
                renderRow: QQ => {
                  const wQ = QQ !== FQ.localId;
                  return (0, iQ.jsx)(RQ, {
                    playerId: QQ,
                    playerName: FQ.byId[QQ].name,
                    isOtherPlayer: wQ,
                    opensProfileCard: (0, bQ.g)(wQ, FQ.byId[QQ].name, kQ),
                    lobbyLeaderboardInfo: LQ,
                    getPlayerValue: CQ,
                    playerColors: mQ
                  })
                }
              })
            })
          }()
        })
      })
    }));

    function RQ(QQ) {
      let {
        playerId: FQ,
        playerName: wQ,
        isOtherPlayer: qQ,
        opensProfileCard: oQ,
        lobbyLeaderboardInfo: DQ,
        getPlayerValue: vQ,
        playerColors: MQ
      } = QQ;
      const GQ = (0, LQ.useRef)(null);
      (0, LQ.useEffect)((() => () => {
        HQ.e.closeIfOwner(GQ)
      }), []);
      const pQ = {
          icon: "flag",
          text: "Report",
          onClick: () => {
            kQ.l.GA("OpenReportMenu", {
              playerEId: FQ,
              playerName: wQ,
              Om: null,
              serverChatMsgId: null
            })
          }
        },
        cQ = () => ({
          ...(0, bQ.c)(FQ, wQ),
          showLocation: !1,
          status: null,
          extraActions: [pQ],
          moderationActions: null === wQ ? [] : (0, tQ.d)(wQ),
          friendRequestSource: "leaderboard"
        });
      return (0, iQ.jsxs)("tr", {
        ref: GQ,
        "data-pad-focusable": oQ || void 0,
        [HQ.i]: oQ || void 0,
        onClick: oQ ? () => {
          var QQ;
          HQ.e.toggle(GQ, {
            ...cQ(),
            anchor: null !== (QQ = GQ.current.querySelector(".PlayerPfpAndName")) && void 0 !== QQ ? QQ : GQ.current
          })
        } : void 0,
        onContextMenu: oQ ? QQ => {
          (0, YQ.e)(GQ, QQ, cQ(), eQ.c.get("isTouchScreen"))
        } : void 0,
        onPointerDown: oQ ? QQ => {
          (0, xQ.b)(QQ, (() => (0, bQ.c)(FQ, wQ).playerSocialPreview))
        } : void 0,
        children: [Object.keys(DQ).map((QQ => !0 === DQ[QQ].hidden ? null : (0, iQ.jsxs)("td", {
          className: mQ()("LobbyLeaderboardValue SmallTextBold", {
            LobbyLeaderboardValueHighlighted: !qQ
          }),
          children: [(0, iQ.jsx)("div", {
            className: "LobbyLeaderboardValueText",
            children: vQ(FQ, QQ)
          }), (0, iQ.jsx)("div", {
            className: "LobbyLeaderboardValueBg",
            style: {
              backgroundColor: MQ[FQ]
            }
          })]
        }, QQ))), qQ && !oQ && (0, iQ.jsx)(uQ.b, {
          className: "LobbyLeaderboardRowFloatingActions",
          triggerElementRef: GQ,
          options: [{
            icon: pQ.icon,
            text: pQ.text,
            onPointerDown: pQ.onClick
          }, ...null === wQ || SQ.featureFlags.useSocialFeatures ? [] : (0, AQ.c)(null, wQ)]
        })]
      })
    }
  },
  36190: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => uQ
    });
    var LQ = wQ(1911),
      qQ = wQ(2359),
      oQ = wQ(36193);
    const DQ = {
      kick: "lobbyManageEntry:kicked",
      ban: "lobbyManageEntry:banned",
      unban: "lobbyManageEntry:unbanned"
    };

    function kQ(QQ, FQ) {
      return async () => function(QQ, FQ, wQ) {
        return null === FQ ? {
          message: {
            key: "lobbyManageEntry:noAnswer"
          },
          next: null
        } : FQ.ok ? {
          message: {
            key: DQ[QQ.type]
          },
          next: wQ
        } : {
          message: {
            fromServer: FQ.message
          },
          next: null
        }
      }(QQ, await (0, oQ.f)(QQ), FQ())
    }

    function vQ(QQ) {
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
        run: kQ({
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
            run: kQ({
              type: "unban",
              name: QQ
            }, (() => null))
          }
        }(QQ)))
      }
    }

    function mQ(QQ, FQ) {
      if (null === QQ) return [];
      const wQ = [],
        LQ = function(QQ, FQ) {
          var wQ, LQ;
          return null !== (wQ = null !== (LQ = QQ.here.find((QQ => QQ.name === FQ))) && void 0 !== LQ ? LQ : QQ.away.find((QQ => QQ.name === FQ))) && void 0 !== wQ ? wQ : null
        }(QQ, FQ);
      var oQ, DQ;
      return null !== LQ && void 0 !== LQ && LQ.can.kick && wQ.push((oQ = FQ, DQ = LQ.can.ban, {
        kind: "act",
        icon: "person-falling-burst",
        text: "lobbyManageEntry:kick",
        destructive: !1,
        confirm: null,
        analyticsClick: {
          id: "lobby_manage.kick",
          value: "profile_card"
        },
        run: kQ({
          type: "kick",
          name: oQ
        }, (() => DQ ? vQ(oQ) : null))
      })), null !== LQ && void 0 !== LQ && LQ.can.ban && wQ.push(vQ(FQ)), wQ.push({
        kind: "leave",
        icon: "users-gear",
        text: "lobbyManageEntry:manageLobby",
        destructive: !1,
        onClick: () => {
          (0, qQ.e)({
            page: "players",
            focusName: FQ,
            source: "profile_card"
          })
        }
      }), wQ
    }

    function uQ(QQ) {
      var FQ;
      return mQ(null !== (FQ = LQ.b.get("lobbyManage")) && void 0 !== FQ ? FQ : null, QQ)
    }
  },
  36193: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => uQ,
      f: () => vQ
    });
    var LQ = wQ(1471),
      qQ = wQ(1911),
      oQ = wQ(1897);
    const DQ = 1e4;
    let kQ = 0;

    function vQ(QQ) {
      const FQ = ++kQ;
      return new Promise((wQ => {
        const kQ = FQ => {
            vQ(), clearTimeout(mQ), !1 === (null === FQ || void 0 === FQ ? void 0 : FQ.ok) && (0, LQ.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: QQ.type
            }), wQ(FQ)
          },
          vQ = qQ.b.subscribe("lobbyManage", (QQ => {
            const wQ = function(QQ, FQ) {
              var wQ;
              return null !== (wQ = null === QQ || void 0 === QQ ? void 0 : QQ.results.find((QQ => QQ.requestId === FQ))) && void 0 !== wQ ? wQ : null
            }(QQ, FQ);
            null !== wQ && kQ(wQ)
          })),
          mQ = setTimeout((() => {
            kQ(null)
          }), DQ);
        oQ.gameBridge.send("lobbyManage", {
          ...QQ,
          requestId: FQ
        })
      }))
    }
    const mQ = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class uQ {
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vQ;
        this.onChange = QQ, this.sendAction = FQ, this.pending = new Map, this.statuses = new Map
      }
      send(QQ, FQ, wQ) {
        var LQ;
        return this.statuses.delete(FQ), this.pending.set(FQ, (null !== (LQ = this.pending.get(FQ)) && void 0 !== LQ ? LQ : 0) + 1), this.sendAction(QQ).then((QQ => {
          var LQ;
          const qQ = null !== QQ && void 0 !== QQ ? QQ : {
              requestId: -1,
              ok: !1,
              message: mQ
            },
            oQ = (null !== (LQ = this.pending.get(FQ)) && void 0 !== LQ ? LQ : 1) - 1;
          oQ > 0 ? this.pending.set(FQ, oQ) : this.pending.delete(FQ);
          const DQ = !qQ.ok || qQ.message.length > 0 ? qQ.message : null === wQ ? null : [wQ];
          return null !== DQ && this.statuses.set(FQ, {
            ok: qQ.ok,
            text: DQ,
            until: Date.now() + 4e3
          }), this.onChange(), qQ
        }))
      }
      show(QQ, FQ) {
        this.statuses.set(QQ, {
          ...FQ,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(QQ) {
        for (const [FQ, wQ] of this.statuses) wQ.until <= QQ && this.statuses.delete(FQ)
      }
      nextDeadline() {
        let QQ = null;
        for (const wQ of this.statuses.values()) {
          var FQ;
          QQ = Math.min(null !== (FQ = QQ) && void 0 !== FQ ? FQ : 1 / 0, wQ.until)
        }
        return QQ
      }
      statusOf(QQ, FQ) {
        const wQ = this.statuses.get(QQ);
        return !wQ || wQ.until <= FQ ? null : {
          ok: wQ.ok,
          text: wQ.text
        }
      }
      isPending(QQ) {
        return this.pending.has(QQ)
      }
    }
  },
  4612: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => MQ,
      b: () => eQ
    });
    var LQ = wQ(53),
      qQ = wQ(1447),
      oQ = wQ(1873),
      DQ = wQ(4615),
      kQ = wQ(1107);
    const vQ = (0, LQ.memo)((function(QQ) {
      let {
        initialParameters: FQ
      } = QQ;
      const wQ = (0, LQ.useRef)(null),
        qQ = (0, LQ.useRef)(null),
        vQ = (0, LQ.useRef)(0),
        mQ = (0, LQ.useRef)(null),
        uQ = FQ.description,
        HQ = FQ.TL,
        {
          scale: bQ,
          rotation: YQ
        } = null !== FQ && void 0 !== FQ ? FQ : {},
        xQ = (0, DQ.f)();
      return (0, LQ.useEffect)((() => {
        const QQ = xQ.onFrame((() => {
          const QQ = xQ.getState();
          if (!QQ.isActive || !wQ.current || !qQ.current) return;
          const FQ = QQ.state;
          if (wQ.current.value = FQ.progress, FQ.clickCount > vQ.current) {
            vQ.current = FQ.clickCount;
            const QQ = qQ.current;
            QQ.classList.add("pulse"), mQ.current = setTimeout((() => {
              QQ.classList.remove("pulse")
            }), 100)
          }
        }));
        return () => {
          clearTimeout(mQ.current), QQ()
        }
      }), [xQ]), (0, kQ.jsx)(kQ.Fragment, {
        children: (0, kQ.jsxs)("div", {
          className: "QTEProgressBarWrapper",
          style: {
            ...null !== bQ && {
              "--scale": bQ
            },
            ...null !== YQ && {
              "--rotation": `${YQ}deg`
            }
          },
          children: [(0, kQ.jsx)("progress", {
            id: "catch",
            max: 100,
            className: "QTEProgressBar",
            ref: wQ
          }), (0, kQ.jsx)("span", {
            className: "QTEProgressBarInteractionIndicator",
            ref: qQ,
            children: (0, kQ.jsx)(oQ.e, {
              text: [{
                icon: HQ
              }]
            })
          }), (0, kQ.jsx)("div", {
            className: "QTEProgressBarDescription",
            children: (0, kQ.jsx)(oQ.e, {
              text: uQ
            })
          })]
        })
      })
    }));
    var mQ = wQ(1070),
      uQ = wQ.n(mQ);
    const HQ = 2 * Math.PI * 90,
      bQ = (0, LQ.memo)((function(QQ) {
        let {
          initialParameters: FQ
        } = QQ;
        const wQ = (0, LQ.useRef)(null),
          qQ = (0, LQ.useRef)(null),
          vQ = (0, LQ.useRef)(null),
          mQ = FQ.label,
          bQ = FQ.icon,
          YQ = FQ.lL,
          {
            scale: xQ,
            rotation: AQ,
            jL: tQ
          } = null !== FQ && void 0 !== FQ ? FQ : {},
          eQ = (0, DQ.f)();
        return (0, LQ.useEffect)((() => {
          const QQ = eQ.onFrame((() => {
            var QQ, FQ;
            const LQ = eQ.getState();
            if (!LQ.isActive || !qQ.current) return;
            const oQ = LQ.state,
              DQ = null !== (QQ = oQ.timeRemaining) && void 0 !== QQ ? QQ : 0,
              kQ = null !== (FQ = oQ.zL) && void 0 !== FQ ? FQ : 1,
              mQ = HQ * (1 - DQ / kQ);
            qQ.current.style.strokeDashoffset = `${mQ}`, wQ.current && (wQ.current.style.opacity = DQ > 0 ? "1" : "0"), vQ.current && YQ && (vQ.current.textContent = `${(DQ/1e3).toFixed(1)}s`)
          }));
          return () => {
            QQ()
          }
        }), [eQ, YQ]), (0, kQ.jsxs)("div", {
          className: "QTETimedClick",
          ref: wQ,
          style: {
            ...null !== xQ && {
              "--scale": xQ
            },
            ...null !== AQ && {
              "--rotation": `${AQ}deg`
            }
          },
          children: [(0, kQ.jsxs)("div", {
            className: "QTETimedClickCircleContainer",
            children: [(0, kQ.jsxs)("svg", {
              className: "QTETimedClickCircularProgress",
              viewBox: "0 0 200 200",
              children: [(0, kQ.jsx)("circle", {
                className: "QTETimedClickProgressTrack",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12"
              }), (0, kQ.jsx)("circle", {
                className: "QTETimedClickProgressArc",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12",
                strokeLinecap: "square",
                strokeDasharray: HQ,
                ref: qQ
              })]
            }), (0, kQ.jsx)("div", {
              className: "QTETimedClickCenterContent",
              children: (0, kQ.jsx)(oQ.e, {
                text: [{
                  icon: bQ
                }],
                className: uQ()("QTETimedClickInnerText", {
                  QTETimedClickBreathe: tQ
                })
              })
            })]
          }), (0, kQ.jsxs)("div", {
            className: "QTETimedClickRightTextContainer",
            children: [(0, kQ.jsx)(oQ.e, {
              text: mQ,
              className: "QTETimedClickLabelText"
            }), YQ && (0, kQ.jsx)("span", {
              className: "QTETimedClickTimeText",
              ref: vQ
            })]
          })]
        })
      })),
      YQ = (0, LQ.memo)((function(QQ) {
        let {
          initialParameters: FQ
        } = QQ;
        const wQ = (0, LQ.useRef)(null),
          qQ = (0, LQ.useRef)(null),
          vQ = (0, LQ.useRef)(null),
          mQ = (0, LQ.useRef)(!1),
          uQ = FQ.description,
          HQ = null === FQ || void 0 === FQ ? void 0 : FQ.icon,
          bQ = (0, DQ.f)();
        return (0, LQ.useEffect)((() => {
          const QQ = bQ.onFrame((() => {
            const QQ = bQ.getState();
            if (!QQ.isActive) return;
            const FQ = QQ.state;
            if (wQ.current) {
              const QQ = 100 * (FQ.catchZonePosition - FQ.XL / 2);
              wQ.current.style.left = `${QQ}%`, wQ.current.style.width = 100 * FQ.XL + "%", FQ.isCatching !== mQ.current && (mQ.current = FQ.isCatching, FQ.isCatching ? wQ.current.classList.add("catching") : wQ.current.classList.remove("catching"))
            }
            qQ.current && (qQ.current.style.left = 100 * FQ.moverPosition + "%"), vQ.current && (vQ.current.value = FQ.progress)
          }));
          return () => {
            QQ()
          }
        }), [bQ]), (0, kQ.jsxs)("div", {
          className: "QTEGravityBar",
          children: [(0, kQ.jsx)("div", {
            className: "QTEGravityBarDescription",
            children: (0, kQ.jsx)(oQ.e, {
              text: uQ
            })
          }), (0, kQ.jsx)("progress", {
            max: 100,
            className: "QTEGravityBarProgress",
            ref: vQ
          }), (0, kQ.jsxs)("div", {
            className: "QTEGravityBarTrack",
            children: [(0, kQ.jsx)("div", {
              className: "QTEGravityBarCatchZone",
              ref: wQ
            }), (0, kQ.jsx)("div", {
              className: "QTEGravityBarMover",
              ref: qQ,
              children: (0, kQ.jsx)("span", {
                children: HQ && (0, kQ.jsx)(oQ.e, {
                  text: [{
                    icon: HQ,
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
    var xQ = wQ(619);
    const AQ = (0, LQ.memo)((function(QQ) {
        let {
          initialParameters: FQ
        } = QQ;
        const wQ = (0, LQ.useRef)(null),
          qQ = FQ.label,
          vQ = FQ.gL,
          {
            icon: mQ,
            scale: uQ,
            rotation: HQ
          } = null !== FQ && void 0 !== FQ ? FQ : {},
          bQ = 100 * (.5 - vQ / 2),
          YQ = 100 * vQ,
          AQ = (0, DQ.f)();
        return (0, LQ.useEffect)((() => {
          const QQ = AQ.onFrame((() => {
            const QQ = AQ.getState();
            if (!QQ.isActive || !wQ.current) return;
            const FQ = QQ.state;
            wQ.current.style.left = 100 * FQ.markerPosition + "%"
          }));
          return () => {
            QQ()
          }
        }), [AQ]), (0, kQ.jsxs)("div", {
          className: "QTEPrecisionBarWrapper",
          style: {
            ...!(0, xQ.F)(uQ) && {
              "--scale": uQ
            },
            ...!(0, xQ.F)(HQ) && {
              "--rotation": `${HQ}deg`
            }
          },
          children: [mQ && (0, kQ.jsx)(oQ.e, {
            text: [{
              icon: mQ
            }],
            className: "QTEPrecisionBarIcon"
          }), (0, kQ.jsxs)("div", {
            className: "QTEPrecisionBarTrack",
            children: [(0, kQ.jsx)("div", {
              className: "QTEPrecisionBarSuccessZone",
              style: {
                left: `${bQ}%`,
                width: `${YQ}%`
              }
            }), (0, kQ.jsx)("div", {
              className: "QTEPrecisionBarMarker",
              ref: wQ
            })]
          }), (0, kQ.jsx)("div", {
            className: "QTEPrecisionBarLabel",
            children: (0, kQ.jsx)(oQ.e, {
              text: qQ
            })
          })]
        })
      })),
      tQ = (0, LQ.memo)((function(QQ) {
        let {
          initialParameters: FQ
        } = QQ;
        const wQ = (0, LQ.useRef)(null),
          [qQ, vQ] = (0, LQ.useState)((() => new Array(FQ.ZL).fill("pending"))),
          [mQ, uQ] = (0, LQ.useState)((() => {
            const QQ = FQ.dL;
            return (0, xQ.F)(QQ) || QQ <= 0 ? [] : new Array(QQ).fill("pending")
          })),
          HQ = FQ.label,
          {
            icon: bQ
          } = FQ,
          YQ = (0, LQ.useRef)(0),
          AQ = (0, LQ.useRef)(0),
          tQ = (0, LQ.useRef)([]),
          eQ = (0, DQ.f)();
        return (0, LQ.useEffect)((() => {
          const QQ = eQ.onFrame((() => {
            const QQ = eQ.getState();
            if (!QQ.isActive || !wQ.current) return;
            const FQ = QQ.state,
              LQ = 30 + 60 * FQ.outerCircleProgress;
            if (wQ.current.setAttribute("r", String(LQ)), !0 === FQ.lastClickResult && FQ.successes > YQ.current) {
              wQ.current.classList.remove("QTERhythmClickOuterCircle--miss"), wQ.current.classList.add("QTERhythmClickOuterCircle--hit");
              const QQ = setTimeout((() => {
                var QQ;
                null === (QQ = wQ.current) || void 0 === QQ || QQ.classList.remove("QTERhythmClickOuterCircle--hit")
              }), 200);
              tQ.current.push(QQ)
            } else if (!1 === FQ.lastClickResult && FQ.misses > AQ.current) {
              wQ.current.classList.remove("QTERhythmClickOuterCircle--hit"), wQ.current.classList.add("QTERhythmClickOuterCircle--miss");
              const QQ = setTimeout((() => {
                var QQ;
                null === (QQ = wQ.current) || void 0 === QQ || QQ.classList.remove("QTERhythmClickOuterCircle--miss")
              }), 200);
              tQ.current.push(QQ)
            }
            FQ.successes === YQ.current && FQ.misses === AQ.current || (YQ.current = FQ.successes, AQ.current = FQ.misses, vQ((QQ => {
              const wQ = [...QQ];
              for (let LQ = 0; LQ < FQ.ZL; LQ++) wQ[LQ] = LQ < FQ.successes ? "success" : "pending";
              return wQ
            })), uQ((QQ => {
              if (0 === QQ.length) return QQ;
              const wQ = [...QQ];
              for (let LQ = 0; LQ < wQ.length; LQ++) wQ[LQ] = LQ < FQ.misses ? "miss" : "pending";
              return wQ
            })))
          }));
          return () => {
            QQ();
            for (const QQ of tQ.current) clearTimeout(QQ);
            tQ.current = []
          }
        }), [eQ]), (0, kQ.jsxs)("div", {
          className: "QTERhythmClickWrapper",
          children: [(0, kQ.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: qQ.map(((QQ, FQ) => (0, kQ.jsx)("div", {
              className: "QTERhythmClickDot" + ("success" === QQ ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
            }, FQ)))
          }), (0, kQ.jsxs)("div", {
            className: "QTERhythmClickCircleContainer",
            children: [(0, kQ.jsxs)("svg", {
              className: "QTERhythmClickSvg",
              viewBox: "0 0 200 200",
              children: [(0, kQ.jsx)("circle", {
                className: "QTERhythmClickInnerCircle",
                cx: "100",
                cy: "100",
                r: 30
              }), (0, kQ.jsx)("circle", {
                className: "QTERhythmClickOuterCircle",
                cx: "100",
                cy: "100",
                r: 90,
                ref: wQ
              })]
            }), bQ && (0, kQ.jsx)("div", {
              className: "QTERhythmClickCenterContent",
              children: (0, kQ.jsx)(oQ.e, {
                text: [{
                  icon: bQ
                }],
                className: "QTERhythmClickIcon"
              })
            })]
          }), mQ.length > 0 && (0, kQ.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: mQ.map(((QQ, FQ) => (0, kQ.jsx)("div", {
              className: "QTERhythmClickDot" + ("miss" === QQ ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
            }, FQ)))
          }), (0, kQ.jsx)("div", {
            className: "QTERhythmClickLabel",
            children: (0, kQ.jsx)(oQ.e, {
              text: HQ
            })
          })]
        })
      }));

    function eQ(QQ) {
      let {
        qte: FQ
      } = QQ;
      switch (FQ.type) {
        case "progressBar":
          return (0, kQ.jsx)(vQ, {
            initialParameters: FQ.parameters
          });
        case "timedClick":
          return (0, kQ.jsx)(bQ, {
            initialParameters: FQ.parameters
          });
        case "gravityBar":
          return (0, kQ.jsx)(YQ, {
            initialParameters: FQ.parameters
          });
        case "precisionBar":
          return (0, kQ.jsx)(AQ, {
            initialParameters: FQ.parameters
          });
        case "rhythmClick":
          return (0, kQ.jsx)(tQ, {
            initialParameters: FQ.parameters
          });
        default:
          return console.warn("Unknown QTE type"), null
      }
    }
    const MQ = (0, LQ.memo)((function() {
      const [QQ, FQ] = (0, LQ.useState)({
        type: null,
        parameters: null,
        state: null,
        isActive: !1
      });
      return (0, qQ.g)("qteStateUpdated", (QQ => {
        FQ(QQ)
      })), QQ.isActive && QQ.type ? (0, kQ.jsx)("div", {
        className: "QTE",
        "data-camera-keeper": "",
        children: (0, kQ.jsx)(eQ, {
          qte: QQ
        })
      }) : null
    }))
  },
  4615: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => kQ,
      f: () => vQ
    });
    var LQ = wQ(53),
      qQ = wQ(1314),
      oQ = wQ(4619);
    const DQ = {
        getState: () => oQ.c.getCurrentState(),
        onFrame: qQ.q
      },
      kQ = (0, LQ.createContext)(DQ);

    function vQ() {
      return (0, LQ.useContext)(kQ)
    }
  },
  9091: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => mQ
    });
    var LQ = wQ(53),
      qQ = wQ(1070),
      oQ = wQ.n(qQ),
      DQ = wQ(1927),
      kQ = wQ(1107);

    function vQ(QQ) {
      const FQ = Math.floor(QQ / 3600),
        wQ = Math.floor(QQ % 3600 / 60),
        LQ = Math.floor(QQ % 60),
        qQ = `${wQ.toString().padStart(2,"0")}:${LQ.toString().padStart(2,"0")}`;
      return FQ > 0 ? `${FQ}:${qQ}` : qQ
    }
    const mQ = (0, LQ.memo)((function(QQ) {
      let {
        className: FQ
      } = QQ;
      const {
        recording: wQ,
        seconds: LQ
      } = (0, DQ.k)("replayRecorder");
      return wQ ? (0, kQ.jsxs)("div", {
        className: oQ()("RecordingIndicator", FQ),
        children: [(0, kQ.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, kQ.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, kQ.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: vQ(LQ)
        })]
      }) : null
    }))
  },
  36002: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => uQ,
      g: () => bQ
    });
    var LQ = wQ(53),
      qQ = wQ(1362),
      oQ = wQ(1207),
      DQ = wQ(1348),
      kQ = wQ(3356),
      vQ = wQ(4772),
      mQ = wQ(1107);

    function uQ(QQ) {
      let {
        loading: FQ,
        schematics: wQ,
        onSchematicPicked: LQ,
        selectedSchematicIdList: qQ = [],
        disableAutoExport: vQ
      } = QQ;
      const {
        t: uQ
      } = (0, oQ.y)();
      return (0, mQ.jsxs)("div", {
        className: "SchematicList",
        children: [FQ && (0, mQ.jsx)(DQ.c, {}), !FQ && 0 === wQ.length && (0, mQ.jsx)("div", {
          className: "NoSchematicsText",
          children: uQ("worldBuilder:noSavedSchematic")
        }), !FQ && wQ.map((QQ => (0, mQ.jsx)(kQ.f, {
          source: {
            type: "schematic",
            schematic: QQ
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            LQ(QQ)
          },
          isSelected: qQ.includes(QQ.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: QQ.isAutoExported && vQ,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, QQ.schematicId)))]
      })
    }

    function HQ(QQ) {
      let {
        ownedSchematics: FQ,
        currentWorldSchematicId: wQ,
        onClose: qQ
      } = QQ;
      const {
        t: DQ
      } = (0, oQ.y)(), [kQ, HQ] = (0, LQ.useState)(null);
      return (0, mQ.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === kQ && (0, mQ.jsxs)(mQ.Fragment, {
          children: [(0, mQ.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: DQ("worldBuilder:schematicList")
          }), (0, mQ.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: DQ("worldBuilder:clickSchematicForOptions")
          }), (0, mQ.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, mQ.jsx)(uQ, {
              loading: !1,
              schematics: FQ,
              onSchematicPicked: QQ => {
                HQ(QQ)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== kQ && (0, mQ.jsx)(vQ.j, {
          schematic: kQ,
          inSourceWorld: kQ.schematicId === wQ,
          onSchematicUpdate: QQ => {
            HQ(QQ)
          },
          onClose: () => {
            HQ(null), qQ()
          }
        })]
      })
    }

    function bQ(QQ) {
      let {
        ownedSchematics: FQ,
        currentWorldSchematicId: wQ,
        onClose: LQ
      } = QQ;
      qQ.NotificationProvider.showCustomPopup({
        body: QQ => (0, mQ.jsx)(HQ, {
          ownedSchematics: FQ,
          currentWorldSchematicId: wQ,
          onClose: QQ
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: LQ,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  36549: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => cQ,
      g: () => pQ
    });
    var LQ = wQ(4144),
      qQ = wQ(1447),
      oQ = wQ(53),
      DQ = wQ(6314),
      kQ = wQ(4127),
      vQ = wQ(1302),
      mQ = wQ(1897),
      uQ = wQ(1873),
      HQ = wQ(1451),
      bQ = wQ(1207),
      YQ = wQ(36554),
      xQ = wQ(1070),
      AQ = wQ.n(xQ),
      tQ = wQ(1326),
      eQ = wQ(1079),
      MQ = wQ(1295),
      GQ = wQ(1107);
    const pQ = "SleepingOverlay";

    function cQ() {
      const {
        t: QQ
      } = (0, bQ.y)(), [FQ, wQ] = (0, oQ.useState)(!1), [xQ, cQ] = (0, oQ.useState)(null), [SQ, iQ] = (0, oQ.useState)(1), [WQ, RQ] = (0, oQ.useState)(!1), [OQ, sQ] = (0, oQ.useState)(!1), rQ = (0, oQ.useRef)(0), IQ = (0, oQ.useRef)(!1), UQ = (0, oQ.useRef)(!1), NQ = (0, oQ.useRef)(), TQ = (0, oQ.useRef)(null);

      function KQ() {
        const QQ = null !== xQ && void 0 !== xQ ? xQ : "Rested Speed";
        mQ.gameBridge.send("wakeUp", OQ ? QQ : null), TQ.current = null, wQ(!1), cQ(null), iQ(1), RQ(!1), sQ(!1)
      }

      function zQ() {
        return !WQ && (KQ(), !0)
      }
      return (0, qQ.g)("PlayerPhysicsTypeUpdate", (QQ => {
        QQ !== TQ.current && (TQ.current = QQ, QQ === DQ.r.SLEEPING ? (UQ.current || (rQ.current = mQ.gameBridge.lookup("cameraZoom", null), UQ.current = !0), IQ.current = !0, mQ.gameBridge.send("setCameraZoom", 3), wQ(!0), iQ(function() {
          for (const QQ of mQ.gameBridge.lookup("blocksStandingOn", null)) {
            if (YQ.d.leafBeds.includes(QQ)) return console.log(`Found leaf bed: ${QQ}`), 1;
            if (YQ.d.woolBeds.includes(QQ)) return console.log(`Found woold bed: ${QQ}`), 2;
            if (YQ.d.strongBeds.includes(QQ)) return console.log(`Found strong bed ${QQ}`), 3
          }
          return 1
        }())) : (UQ.current = !1, wQ(!1), cQ(null), iQ(1)))
      })), (0, oQ.useEffect)((() => () => {
        (0, vQ.l)(pQ)
      }), []), (0, oQ.useEffect)((() => {
        FQ ? (0, vQ.n)(pQ) : ((0, vQ.l)(pQ), IQ.current && (mQ.gameBridge.send("setCameraZoom", rQ.current), IQ.current = !1))
      }), [FQ]), (0, MQ.m)("overlay", NQ, zQ, FQ), (0, GQ.jsx)(LQ.c, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: FQ,
        timeout: 300,
        nodeRef: NQ,
        unmountOnExit: !0,
        children: (0, GQ.jsx)("div", {
          ref: NQ,
          onClick: QQ => {
            zQ() && QQ.stopPropagation()
          },
          children: (0, GQ.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, GQ.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: kQ.h.map((FQ => (0, GQ.jsxs)(CQ, {
                restedEffect: FQ,
                cD: xQ,
                setChosenRestedEffect: cQ,
                children: [(0, GQ.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, GQ.jsx)(uQ.e, {
                    text: [{
                      icon: FQ
                    }]
                  }), kQ.g[FQ].shortName]
                }), (0, GQ.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: QQ(kQ.g[FQ].description, {
                    time: kQ.g[FQ].effectLevelDurations[SQ] / 6e4
                  })
                })]
              }, FQ)))
            }), (0, GQ.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, GQ.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, GQ.jsxs)(HQ.f, {
                className: "SleepingOverlayWakeUpButton",
                onClick: QQ => {
                  OQ ? KQ() : (RQ(!0), (0, tQ.db)((() => {
                    RQ(!1), sQ(!0)
                  }), !0)), QQ.stopPropagation()
                },
                loading: WQ,
                children: [!OQ && (0, GQ.jsxs)(GQ.Fragment, {
                  children: [(0, GQ.jsx)(eQ.c, {
                    name: "film"
                  }), " ", QQ("classicGame:watchAdToGetRestedPerk")]
                }), OQ && QQ("classicGame:wakeUp")]
              }), (0, GQ.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, GQ.jsx)("div", {
                  className: AQ()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === SQ
                  }),
                  children: (0, GQ.jsx)(uQ.e, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, GQ.jsx)("div", {
                  className: AQ()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === SQ
                  }),
                  children: (0, GQ.jsx)(uQ.e, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, GQ.jsx)("div", {
                  className: AQ()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === SQ
                  }),
                  children: (0, GQ.jsx)(uQ.e, {
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
    const CQ = (0, oQ.memo)((function(QQ) {
      let {
        children: FQ,
        restedEffect: wQ,
        cD: LQ,
        setChosenRestedEffect: qQ
      } = QQ;
      return wQ === LQ ? (0, GQ.jsx)(HQ.m, {
        onClick: QQ => {
          QQ.stopPropagation()
        },
        children: FQ
      }) : (0, GQ.jsx)(HQ.i, {
        onClick: QQ => {
          qQ(wQ), QQ.stopPropagation()
        },
        children: FQ
      })
    }))
  },
  36185: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => mQ,
      g: () => vQ
    });
    var LQ = wQ(600),
      qQ = wQ(1897),
      oQ = wQ(1645),
      DQ = wQ(96),
      kQ = wQ(1276);

    function vQ(QQ, FQ, wQ) {
      return DQ.featureFlags.useSocialFeatures && QQ && null === (0, kQ.b)(FQ, wQ)
    }

    function mQ(QQ, FQ) {
      var wQ, DQ;
      const kQ = oQ.e.getSocialState().friends.find((QQ => QQ.name.toLowerCase() === FQ.toLowerCase())),
        vQ = qQ.gameBridge.latest("players").byId[QQ],
        mQ = void 0 !== vQ && vQ.name === FQ,
        uQ = mQ && null !== (wQ = vQ.cosmetics) && void 0 !== wQ ? wQ : void 0,
        HQ = kQ && uQ ? {
          ...kQ,
          cosmetics: uQ
        } : kQ;
      return {
        playerSocialPreview: null !== HQ && void 0 !== HQ ? HQ : {
          isError: !1,
          name: FQ,
          ranks: mQ ? [...vQ.ranks] : [],
          cosmetics: null !== uQ && void 0 !== uQ ? uQ : {},
          nameColour: null !== (DQ = null === uQ || void 0 === uQ ? void 0 : uQ.nameColour) && void 0 !== DQ ? DQ : LQ.d,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== kQ
      }
    }
  },
  9094: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => oQ
    });
    var LQ = wQ(4380),
      qQ = wQ(4388);

    function oQ(QQ) {
      let {
        children: FQ,
        showing: wQ,
        globallyUniqueKey: oQ,
        alwaysMountChildren: DQ = !1,
        doGameplayStartStopOnShow: kQ = !0,
        keepsMovement: vQ = !1
      } = QQ;
      return (0, qQ.d)(!0, wQ, oQ, vQ), (0, LQ.b)(kQ, wQ), wQ || DQ ? FQ : null
    }
  },
  4746: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => kQ
    });
    var LQ = wQ(53),
      qQ = wQ(1070),
      oQ = wQ.n(qQ),
      DQ = wQ(1107);

    function kQ(QQ) {
      let {
        columns: FQ,
        rows: wQ,
        getRowKey: qQ,
        renderRow: kQ,
        className: vQ
      } = QQ;
      return (0, DQ.jsxs)("table", {
        className: oQ()("Table", vQ),
        children: [(0, DQ.jsx)("thead", {
          children: (0, DQ.jsx)("tr", {
            children: FQ.map((QQ => (0, DQ.jsx)("th", {
              children: QQ.header
            }, QQ.key)))
          })
        }), (0, DQ.jsx)("tbody", {
          children: wQ.map((QQ => (0, DQ.jsx)(LQ.Fragment, {
            children: kQ(QQ)
          }, qQ(QQ))))
        })]
      })
    }
  },
  36508: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => iQ,
      e: () => CQ,
      i: () => SQ,
      l: () => xQ
    });
    var LQ = wQ(1070),
      qQ = wQ.n(LQ),
      oQ = wQ(53),
      DQ = wQ(71),
      kQ = wQ(1370),
      vQ = wQ(1451),
      mQ = wQ(1367),
      uQ = wQ(1295),
      HQ = wQ(1207),
      bQ = wQ(36514),
      YQ = wQ(1107);

    function xQ(QQ) {
      const [FQ, wQ] = (0, oQ.useState)((() => (0, bQ.n)(QQ)));
      return (0, oQ.useEffect)((() => (wQ((0, bQ.n)(QQ)), (0, bQ.J)((() => {
        wQ((0, bQ.n)(QQ))
      })))), [QQ]), FQ
    }

    function AQ(QQ, FQ) {
      "function" === typeof QQ ? QQ(FQ) : QQ && (QQ.current = FQ)
    }

    function tQ(QQ) {
      let {
        tutorial: FQ,
        step: wQ,
        enabled: LQ = !0
      } = QQ;
      const qQ = xQ(FQ);
      return LQ && qQ === wQ
    }

    function eQ(QQ, FQ) {
      const wQ = (0, bQ.o)(QQ),
        LQ = wQ.indexOf(FQ);
      return !wQ.slice(LQ + 1).some((FQ => (0, bQ.u)(QQ, FQ)))
    }

    function MQ(QQ, FQ, wQ, LQ) {
      let {
        tutorial: qQ,
        step: oQ,
        waitForClick: DQ = !1,
        onPrevious: kQ
      } = QQ;
      const vQ = FQ && (0, bQ.s)(qQ, oQ),
        mQ = FQ && !eQ(qQ, oQ),
        HQ = DQ ? LQ : wQ;
      let YQ = null;
      vQ ? YQ = () => {
        null === kQ || void 0 === kQ || kQ(), (0, bQ.r)(qQ, oQ)
      } : mQ && (YQ = () => {
        (0, bQ.l)(qQ)
      }), (0, uQ.m)("popup", null !== HQ && void 0 !== HQ ? HQ : wQ, YQ, FQ && null !== HQ, null, vQ ? void 0 : "controller:menusSkipTutorial")
    }

    function GQ(QQ) {
      let {
        tutorial: FQ,
        step: wQ,
        text: LQ,
        waitForClick: qQ = !1,
        onPrevious: oQ
      } = QQ;
      const {
        t: DQ
      } = (0, HQ.y)(), kQ = eQ(FQ, wQ);
      return (0, YQ.jsxs)(YQ.Fragment, {
        children: [(0, YQ.jsx)("div", {
          className: "TutorialStepText",
          children: LQ
        }), (0, YQ.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, bQ.s)(FQ, wQ) && (0, YQ.jsx)(vQ.i, {
            className: "TutorialStepButton",
            onClick: () => {
              null === oQ || void 0 === oQ || oQ(), (0, bQ.r)(FQ, wQ)
            },
            children: DQ("tutorial:back")
          }), !qQ && (0, YQ.jsx)(vQ.f, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, bQ.f)(wQ)
            },
            padDefaultFocus: !0,
            children: DQ(kQ ? "tutorial:done" : "tutorial:next")
          }), !kQ && (0, YQ.jsx)(vQ.i, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, bQ.l)(FQ)
            },
            children: DQ("tutorial:skip")
          })]
        })]
      })
    }
    const pQ = 6;

    function cQ(QQ) {
      let {
        rect: FQ,
        margin: wQ
      } = QQ;
      const LQ = Math.max(0, FQ.top - wQ),
        qQ = FQ.bottom + wQ,
        oQ = Math.max(0, FQ.left - wQ),
        DQ = FQ.right + wQ;
      return (0, YQ.jsxs)(YQ.Fragment, {
        children: [(0, YQ.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: LQ
          }
        }), (0, YQ.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: qQ,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, YQ.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: LQ,
            left: 0,
            width: oQ,
            height: qQ - LQ
          }
        }), (0, YQ.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: LQ,
            left: DQ,
            right: 0,
            height: qQ - LQ
          }
        })]
      })
    }

    function CQ(QQ) {
      let {
        target: FQ,
        placement: wQ,
        boxRef: LQ,
        className: vQ,
        spotlightMargin: uQ = pQ,
        children: HQ
      } = QQ;
      const {
        getArrowProps: bQ,
        getTooltipProps: xQ,
        setTooltipRef: AQ,
        setTriggerRef: tQ
      } = (0, kQ.c)({
        placement: wQ,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, uQ]
      });
      (0, oQ.useLayoutEffect)((() => {
        tQ(FQ)
      }), [FQ, tQ]);
      const eQ = function(QQ, FQ) {
        const [wQ, LQ] = (0, oQ.useState)(null);
        return (0, oQ.useEffect)((() => {
          if (!FQ || !QQ) return void LQ(null);
          let wQ = 0,
            qQ = null;
          const oQ = () => {
            const FQ = QQ.getBoundingClientRect();
            qQ && FQ.left === qQ.left && FQ.top === qQ.top && FQ.width === qQ.width && FQ.height === qQ.height || (qQ = FQ, LQ(FQ)), wQ = requestAnimationFrame(oQ)
          };
          return oQ(), () => {
            cancelAnimationFrame(wQ)
          }
        }), [QQ, FQ]), wQ
      }(FQ, !0);
      (0, oQ.useEffect)((() => {
        null === FQ || void 0 === FQ || FQ.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [FQ]);
      const MQ = (0, oQ.useCallback)((QQ => {
        AQ(QQ), LQ && (LQ.current = QQ)
      }), [AQ, LQ]);
      return (0, DQ.createPortal)((0, YQ.jsxs)(YQ.Fragment, {
        children: [eQ && (0, YQ.jsx)(cQ, {
          rect: eQ,
          margin: uQ
        }), (0, YQ.jsxs)("div", {
          ref: MQ,
          ...xQ({
            className: qQ()("tooltip-container SmallTextLight TutorialStep", vQ)
          }),
          children: [HQ, (0, YQ.jsx)("div", {
            ...bQ({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, mQ.g)())
    }
    const SQ = (0, oQ.forwardRef)((function(QQ, FQ) {
      let {
        placement: wQ = "right",
        children: LQ,
        ...qQ
      } = QQ;
      const DQ = tQ(qQ),
        kQ = (0, oQ.useRef)(null),
        vQ = (0, oQ.useRef)(null);
      MQ(qQ, DQ, kQ, vQ);
      const [mQ, uQ] = (0, oQ.useState)(null), HQ = LQ.ref, bQ = (0, oQ.useCallback)((QQ => {
        vQ.current = QQ, uQ(QQ), AQ(FQ, QQ), AQ(HQ, QQ)
      }), [FQ, HQ]);
      return (0, YQ.jsxs)(YQ.Fragment, {
        children: [(0, oQ.cloneElement)(LQ, {
          ref: bQ
        }), DQ && (0, YQ.jsx)(CQ, {
          target: mQ,
          placement: wQ,
          boxRef: kQ,
          children: (0, YQ.jsx)(GQ, {
            ...qQ
          })
        })]
      })
    }));

    function iQ(QQ) {
      const FQ = tQ(QQ),
        wQ = (0, oQ.useRef)(null);
      return MQ(QQ, FQ, wQ, null), FQ ? (0, DQ.createPortal)((0, YQ.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, YQ.jsx)("div", {
          ref: wQ,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, YQ.jsx)(GQ, {
            ...QQ
          })
        })
      }), (0, mQ.g)()) : null
    }
  },
  36313: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => oQ,
      d: () => DQ,
      f: () => kQ,
      h: () => vQ
    });
    var LQ = wQ(53),
      qQ = wQ(3002);
    const oQ = 8,
      DQ = "InGameHeaderContainer",
      kQ = "TopRightElements";

    function vQ(QQ) {
      const [FQ] = (0, qQ.b)(), [wQ, vQ] = (0, LQ.useState)(!1);
      return (0, LQ.useLayoutEffect)((() => {
        if (!QQ) return;
        const FQ = document.querySelector(`.${DQ}`),
          wQ = document.querySelector(`.${kQ}`),
          LQ = () => {
            const LQ = QQ.getBoundingClientRect(),
              qQ = FQ ? FQ.getBoundingClientRect().right : 0,
              DQ = wQ ? wQ.getBoundingClientRect().left : window.innerWidth,
              kQ = LQ.left < qQ + oQ,
              mQ = LQ.right > DQ - oQ;
            vQ(kQ || mQ)
          };
        LQ();
        const qQ = new ResizeObserver(LQ);
        return qQ.observe(QQ), FQ && qQ.observe(FQ), wQ && qQ.observe(wQ), () => {
          qQ.disconnect()
        }
      }), [QQ, FQ]), wQ
    }
  },
  6386: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => oQ
    });
    var LQ = wQ(53),
      qQ = wQ(27);

    function oQ(QQ, FQ) {
      var wQ;
      const [oQ, DQ] = (0, LQ.useState)(null !== (wQ = qQ.i.getItem(QQ)) && void 0 !== wQ ? wQ : FQ);
      return [oQ, FQ => {
        qQ.i.setItem(QQ, FQ), DQ(FQ)
      }]
    }
  },
  36362: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => HQ
    });
    var LQ = wQ(53),
      qQ = wQ(1070),
      oQ = wQ.n(qQ),
      DQ = wQ(1682),
      kQ = wQ(1451),
      vQ = wQ(1348),
      mQ = wQ(1079),
      uQ = wQ(1107);

    function HQ(QQ) {
      let {
        label: FQ,
        icon: wQ,
        placeholder: qQ,
        onSubmit: HQ
      } = QQ;
      const bQ = (0, LQ.useRef)(null),
        [YQ, xQ] = (0, LQ.useState)(""),
        [AQ, tQ] = (0, LQ.useState)("Enter"),
        [eQ, MQ] = (0, LQ.useState)(null);
      (0, LQ.useEffect)((() => {
        if ("Success" !== AQ && "Error" !== AQ) return;
        const QQ = setTimeout((() => {
          "Success" === AQ && bQ.current && (bQ.current.value = "", xQ("")), tQ("Enter")
        }), "Success" === AQ ? 1e3 : 4e3);
        return () => {
          clearTimeout(QQ)
        }
      }), [AQ]);
      const GQ = () => {
        const QQ = YQ.trim();
        "" !== QQ && "Enter" === AQ && (tQ("Loading"), HQ(QQ).then((QQ => {
          bQ.current && ("error" in QQ ? null === QQ.error ? tQ("Enter") : (MQ(QQ.error), tQ("Error")) : tQ("Success"))
        })))
      };
      return (0, uQ.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: QQ => {
          QQ.target === bQ.current && "Escape" !== QQ.key && QQ.stopPropagation()
        },
        children: [(0, uQ.jsxs)("div", {
          className: oQ()("AddFriendBodyOverlay", `AddFriendBodyOverlay${AQ}`),
          children: ["Loading" === AQ && (0, uQ.jsx)(vQ.c, {}), "Success" === AQ && (0, uQ.jsx)(mQ.c, {
            name: "check"
          }), "Error" === AQ && eQ]
        }), (0, uQ.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, uQ.jsx)(DQ.b, {
            className: "PlayerSearchInput",
            domRef: bQ,
            maxLength: 32,
            placeholderText: qQ,
            ariaLabel: qQ,
            stopPropagation: !1,
            onValueChange: QQ => {
              xQ(QQ)
            },
            onEnter: GQ
          }), (0, uQ.jsxs)(kQ.f, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== AQ || "" === YQ.trim(),
            onClick: GQ,
            children: [(0, uQ.jsx)(mQ.c, {
              name: wQ
            }), " ", FQ]
          })]
        })]
      })
    }
  },
  36349: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => HQ
    });
    var LQ = wQ(53),
      qQ = wQ(1070),
      oQ = wQ.n(qQ),
      DQ = wQ(1207),
      kQ = wQ(1079),
      vQ = wQ(1107);
    const mQ = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      uQ = ["unlisted", "public", "whitelist", "private"];

    function HQ(QQ) {
      let {
        visibility: FQ,
        onPick: wQ
      } = QQ;
      const {
        t: qQ
      } = (0, DQ.y)(), HQ = (0, LQ.useRef)([]);
      return (0, vQ.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": qQ("worldSocial:whoCanJoin"),
        children: uQ.map(((QQ, LQ) => {
          const DQ = QQ === FQ;
          return (0, vQ.jsxs)("button", {
            ref: QQ => {
              HQ.current[LQ] = QQ
            },
            type: "button",
            className: oQ()("WorldSocialTile", {
              WorldSocialTileSelected: DQ
            }),
            "aria-pressed": DQ,
            tabIndex: DQ ? 0 : -1,
            onKeyDown: QQ => {
              ((QQ, FQ) => {
                const wQ = "ArrowRight" === QQ.key || "ArrowDown" === QQ.key ? 1 : "ArrowLeft" === QQ.key || "ArrowUp" === QQ.key ? -1 : 0;
                var LQ;
                0 !== wQ && (QQ.preventDefault(), null === (LQ = HQ.current[(FQ + wQ + uQ.length) % uQ.length]) || void 0 === LQ || LQ.focus())
              })(QQ, LQ)
            },
            onClick: () => {
              wQ(QQ)
            },
            children: [(0, vQ.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, vQ.jsx)(kQ.c, {
                name: mQ[QQ]
              })
            }), (0, vQ.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, vQ.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: qQ(`worldSocial:${QQ}`)
              }), (0, vQ.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: qQ(`worldSocial:${QQ}Description`)
              })]
            })]
          }, QQ)
        }))
      })
    }
  },
  36356: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => kQ
    });
    var LQ = wQ(1207),
      qQ = wQ(2545),
      oQ = wQ(4233),
      DQ = wQ(1107);

    function kQ(QQ) {
      let {
        fH: FQ,
        children: wQ,
        ...kQ
      } = QQ;
      const {
        t: vQ
      } = (0, LQ.y)();
      return (0, DQ.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          FQ.onChange(!FQ.on)
        },
        children: (0, DQ.jsx)(qQ.f, {
          ...kQ,
          opensProfileCard: !1,
          children: (0, DQ.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: QQ => {
              QQ.stopPropagation()
            },
            children: [wQ, (0, DQ.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, DQ.jsx)(oQ.d, {
                checked: FQ.on,
                disabled: !1,
                ariaLabel: vQ("worldSocial:letJoin", {
                  playerName: kQ.playerSocialPreview.name
                }),
                onChange: QQ => {
                  FQ.onChange(QQ.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  36341: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => xQ
    });
    var LQ = wQ(53),
      qQ = wQ(1207),
      oQ = wQ(1835),
      DQ = wQ(96),
      kQ = wQ(17),
      vQ = wQ(1471),
      mQ = wQ(2580),
      uQ = wQ(8995),
      HQ = wQ(1451),
      bQ = wQ(1079),
      YQ = wQ(1107);

    function xQ(QQ) {
      let {
        worldCode: FQ,
        message: wQ
      } = QQ;
      const {
        t: xQ
      } = (0, qQ.y)(), {
        isTouchScreen: AQ
      } = (0, kQ.l)(["isTouchScreen"]), tQ = DQ.featureFlags.canUseInviteLinks, eQ = (0, uQ.g)(tQ && null === wQ), [MQ, GQ] = (0, mQ.g)(), pQ = (0, LQ.useRef)(null);
      if (null !== wQ) return (0, YQ.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, YQ.jsx)(bQ.c, {
          name: "lock"
        }), (0, YQ.jsx)("span", {
          children: wQ
        })]
      });
      const cQ = tQ ? eQ : FQ,
        CQ = AQ && tQ && (0, mQ.c)();
      return (0, YQ.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!tQ && (0, YQ.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: xQ("worldSocial:worldCode")
        }), (0, YQ.jsx)("input", {
          ref: pQ,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== cQ && void 0 !== cQ ? cQ : "",
          "aria-label": xQ(tQ ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: QQ => {
            QQ.currentTarget.select()
          }
        }), (0, YQ.jsxs)(HQ.f, {
          className: "WorldSocialCopy",
          disabled: null === cQ,
          onClick: () => {
            null !== cQ && (0, mQ.e)(cQ, {
              useShareSheet: CQ,
              onOutcome: QQ => {
                if ((0, vQ.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== QQ || tQ ? QQ : "code"
                  }), "copied" === QQ) GQ();
                else if ("failed" === QQ) {
                  var FQ;
                  null === (FQ = pQ.current) || void 0 === FQ || FQ.focus(), oQ.f.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, YQ.jsx)(bQ.c, {
            name: MQ ? "check" : CQ ? "up-from-bracket" : "copy"
          }), " ", xQ(MQ ? "general:copied" : CQ ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  36353: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => YQ,
      d: () => bQ,
      e: () => HQ
    });
    var LQ = wQ(600),
      qQ = wQ(1207),
      oQ = wQ(1645),
      DQ = wQ(2545),
      kQ = wQ(2489),
      vQ = wQ(1451),
      mQ = wQ(36356),
      uQ = wQ(1107);

    function HQ(QQ, FQ) {
      var wQ;
      return {
        isError: !1,
        name: QQ,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== FQ && void 0 !== FQ ? FQ : {},
        nameColour: null !== (wQ = null === FQ || void 0 === FQ ? void 0 : FQ.nameColour) && void 0 !== wQ ? wQ : LQ.d,
        location: {
          status: "offline"
        }
      }
    }

    function bQ(QQ) {
      let {
        player: FQ,
        isFriend: wQ = !1,
        status: LQ,
        showLocation: vQ = void 0 === LQ,
        fH: HQ,
        onSendFriendRequest: bQ,
        actions: YQ,
        zIndex: xQ
      } = QQ;
      const {
        t: AQ
      } = (0, qQ.y)();
      let tQ = LQ;
      null !== HQ && void 0 !== HQ && HQ.on && (tQ = (0, uQ.jsxs)(uQ.Fragment, {
        children: [null !== LQ && void 0 !== LQ ? LQ : (0, uQ.jsx)(kQ.c, {
          socialPreview: FQ
        }), (0, uQ.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", AQ("worldSocial:canJoin")]
        })]
      }));
      const eQ = {
        playerSocialPreview: FQ,
        isFriend: wQ,
        hideFriendBadge: !0,
        onFriendRemoved: wQ ? QQ => {
          oQ.e.removeFriendFromState(QQ)
        } : void 0,
        status: tQ,
        showLocation: vQ,
        onSendFriendRequest: bQ,
        zIndex: xQ
      };
      return HQ ? (0, uQ.jsx)(mQ.d, {
        ...eQ,
        fH: HQ,
        children: YQ
      }) : (0, uQ.jsx)(DQ.f, {
        ...eQ,
        opensProfileCard: !1,
        children: YQ || void 0
      })
    }

    function YQ(QQ) {
      let {
        row: FQ,
        fH: wQ,
        canInvite: LQ,
        invited: oQ,
        onInvite: DQ,
        zIndex: kQ
      } = QQ;
      const {
        t: mQ
      } = (0, qQ.y)(), HQ = "online" === FQ.place ? vQ.f : vQ.i;
      return (0, uQ.jsx)(bQ, {
        player: FQ.friend,
        isFriend: !0,
        status: "here" === FQ.place ? mQ("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        fH: wQ,
        zIndex: kQ,
        actions: LQ && (0, uQ.jsx)(HQ, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: oQ,
          onClick: DQ,
          ariaLabel: `${mQ("worldSocial:invite")} ${FQ.friend.name}`,
          children: mQ(oQ ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  36329: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => vQ,
      e: () => DQ,
      h: () => mQ
    });
    var LQ = wQ(53),
      qQ = wQ(4435),
      oQ = wQ(1835);

    function DQ(QQ) {
      const FQ = {
        lobbyName: QQ,
        answer: null,
        response: qQ.d.getSocialSettings(QQ)
      };
      return FQ.response.then((QQ => {
        FQ.answer = QQ
      })), FQ
    }
    const kQ = new Map;

    function vQ(QQ) {
      kQ.set(QQ.lobbyName, QQ)
    }

    function mQ(QQ) {
      const [FQ] = (0, LQ.useState)((() => function(QQ) {
        var FQ;
        const wQ = null !== (FQ = kQ.get(QQ)) && void 0 !== FQ ? FQ : null;
        return null !== wQ && void 0 !== wQ && wQ.answer && "error" in wQ.answer ? null : wQ
      }(QQ))), [wQ, DQ] = (0, LQ.useState)((() => null !== FQ && void 0 !== FQ && FQ.answer && "settings" in FQ.answer ? FQ.answer.settings : null)), [vQ, mQ] = (0, LQ.useState)(!0), [uQ, HQ] = (0, LQ.useState)(null !== wQ), bQ = (0, LQ.useRef)(wQ);
      bQ.current = wQ;
      const YQ = (0, LQ.useRef)(0),
        xQ = (0, LQ.useRef)(0),
        AQ = (0, LQ.useRef)(!1),
        tQ = (0, LQ.useRef)(!0),
        eQ = (0, LQ.useCallback)((async FQ => {
          const wQ = ++YQ.current,
            LQ = await (null !== FQ && void 0 !== FQ ? FQ : qQ.d.getSocialSettings(QQ));
          tQ.current && wQ === YQ.current && (HQ(!0), mQ(!1), "error" in LQ || DQ(LQ.settings))
        }), [QQ]),
        MQ = (0, LQ.useCallback)((() => {
          mQ(!0), eQ()
        }), [eQ]),
        GQ = (0, LQ.useCallback)((() => {
          xQ.current > 0 ? AQ.current = !0 : eQ()
        }), [eQ]);
      (0, LQ.useEffect)((() => (tQ.current = !0, kQ.delete(QQ), mQ(!0), eQ(null === FQ || void 0 === FQ ? void 0 : FQ.response), () => {
        tQ.current = !1
      })), [eQ, QQ, FQ]);
      const pQ = QQ => {
        YQ.current++, mQ(!1), bQ.current = QQ, DQ(QQ)
      };
      return {
        settings: wQ,
        loading: vQ,
        answered: uQ,
        retry: MQ,
        refresh: GQ,
        change: async function(FQ, wQ) {
          let {
            quiet: LQ = !1,
            onAnswer: DQ
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const kQ = bQ.current;
          if (null === kQ) return !1;
          pQ(wQ(kQ)), xQ.current > 0 && (AQ.current = !0), xQ.current++;
          const vQ = await qQ.d.setSocialSettings(QQ, FQ);
          xQ.current--;
          const mQ = !("error" in vQ);
          if (!tQ.current) return mQ;
          if (null === DQ || void 0 === DQ || DQ(vQ), LQ);
          else if ("error" in vQ) oQ.f.showMessage({
            translationKey: vQ.error
          });
          else
            for (const QQ of vQ.notFound) oQ.f.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: QQ
              }
            });
          if (xQ.current > 0) return mQ;
          const uQ = AQ.current;
          return AQ.current = !1, !uQ && "settings" in vQ ? pQ(vQ.settings) : (uQ || pQ(kQ), eQ()), mQ
        }
      }
    }
  },
  36369: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => DQ,
      g: () => oQ
    });
    var LQ = wQ(160);
    const qQ = new Map;

    function oQ(QQ, FQ) {
      var wQ;
      const LQ = null !== (wQ = qQ.get(QQ)) && void 0 !== wQ ? wQ : new Map;
      LQ.set(FQ, Date.now()), qQ.set(QQ, LQ)
    }

    function DQ(QQ) {
      const FQ = qQ.get(QQ);
      if (!FQ) return [];
      const wQ = Date.now();
      for (const [qQ, oQ] of FQ) wQ - oQ >= LQ.q && FQ.delete(qQ);
      return [...FQ.keys()]
    }
  },
  36335: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ) {
      const wQ = FQ.toLowerCase();
      for (const LQ of QQ)
        if (LQ.toLowerCase() === wQ) return !0;
      return !1
    }

    function qQ(QQ, FQ, wQ) {
      const qQ = [],
        oQ = [],
        DQ = [];
      for (const kQ of QQ) !kQ.isError && kQ.name && ("inGame" === kQ.location.status && kQ.location.inLobbyName === FQ || LQ(wQ, kQ.name) ? oQ.push({
        friend: kQ,
        place: "here"
      }) : "offline" === kQ.location.status ? DQ.push({
        friend: kQ,
        place: "offline"
      }) : qQ.push({
        friend: kQ,
        place: "online"
      }));
      return [...qQ, ...oQ, ...DQ]
    }

    function oQ(QQ, FQ, wQ) {
      const qQ = [],
        oQ = QQ.flatMap((QQ => "here" === QQ.place ? [QQ.friend.name] : []));
      for (const DQ of [...oQ, ...FQ]) LQ(qQ, DQ) || LQ(wQ, DQ) || qQ.push(DQ);
      return qQ
    }

    function DQ(QQ, FQ) {
      return null === QQ || void 0 === QQ || !QQ.canManage || LQ(QQ.whitelist, FQ) ? "none" : "whitelist" === QQ.visibility ? "required" : "quiet"
    }

    function kQ(QQ) {
      if (null === QQ) return !0;
      const {
        visibility: FQ
      } = QQ;
      return "public" === FQ || "unlisted" === FQ || "whitelist" === FQ && QQ.canManage
    }

    function vQ(QQ, FQ, wQ) {
      if (wQ) {
        const wQ = FQ.filter((FQ => !LQ(QQ.whitelist, FQ)));
        return {
          ...QQ,
          whitelist: [...QQ.whitelist, ...wQ]
        }
      }
      return {
        ...QQ,
        whitelist: QQ.whitelist.filter((QQ => !LQ(FQ, QQ)))
      }
    }

    function mQ(QQ, FQ) {
      const wQ = [];
      for (let LQ = 0; LQ < QQ.length; LQ += FQ) wQ.push(QQ.slice(LQ, LQ + FQ));
      return wQ
    }
    wQ.d(FQ, {
      c: () => kQ,
      f: () => oQ,
      g: () => qQ,
      h: () => LQ,
      j: () => mQ,
      k: () => DQ,
      n: () => vQ
    })
  },
  36529: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => oQ
    });
    var LQ = wQ(17),
      qQ = wQ(1326);

    function oQ() {
      const {
        clientEscMenuOptions: QQ
      } = (0, LQ.l)(["clientEscMenuOptions"]);
      return (0, qQ.C)() && QQ.showChat
    }
  },
  36463: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => vQ
    });
    var LQ = wQ(2676),
      qQ = wQ(3561),
      oQ = wQ(2845);
    const DQ = ["Unable to create vertex buffer"];
    let kQ = {};

    function vQ(QQ, FQ) {
      const wQ = new Date;
      console.error(`${wQ.getUTCHours()}:${wQ.getUTCMinutes()}:${wQ.getUTCSeconds()}`, QQ, FQ, null === FQ || void 0 === FQ ? void 0 : FQ.stack), DQ.includes(null === FQ || void 0 === FQ ? void 0 : FQ.message) && (console.error("Unrecoverable error occurred. Leaving game."), (0, LQ.c)().client.leaveGameUnwanted({
        reason: `Unrecoverable error occurred.\nThis is a bug.\n\nError:\n${FQ.message}\n\nPlease refresh the page.`,
        requiresRefresh: !0,
        canReconnect: !1,
        automaticallyReconnect: !1
      })), (0, oQ.logError)("warning", `${QQ}\n ${FQ} "\n" ${null===FQ||void 0===FQ?void 0:FQ.stack}`);
      const qQ = QQ + FQ + (null === FQ || void 0 === FQ ? void 0 : FQ.stack);
      qQ in kQ || ((0, oQ.logError)("error", `${QQ}\n ${FQ} "\n" ${null===FQ||void 0===FQ?void 0:FQ.stack}`), kQ[qQ] = !0)
    }(0, qQ.onGameReset)((() => {
      kQ = {}
    }))
  },
  4680: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => TQ,
      f: () => NQ
    });
    var LQ = wQ(4686),
      qQ = wQ(307);
    const oQ = 120,
      DQ = 260,
      kQ = 1.15,
      vQ = 1.2,
      mQ = 2,
      uQ = 1.08,
      HQ = .8,
      bQ = .95,
      YQ = 8,
      xQ = "[\"')\\]\u300d\u300f\uff09]*",
      AQ = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${xQ}$`),
      tQ = new RegExp(`[?\uff1f]${xQ}$`),
      eQ = new RegExp(`[!\uff01]${xQ}$`),
      MQ = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      GQ = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      pQ = new RegExp(`[${GQ}]`),
      cQ = new RegExp(`[${GQ}]|[^${GQ}]+`, "g"),
      CQ = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function SQ(QQ) {
      let FQ = 2166136261;
      for (let wQ = 0; wQ < QQ.length; wQ++) FQ ^= QQ.charCodeAt(wQ), FQ = Math.imul(FQ, 16777619);
      return (FQ >>> 0) / 4294967295 * 2 - 1
    }

    function iQ(QQ) {
      var FQ;
      if (pQ.test(QQ)) return 1;
      const wQ = QQ.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        LQ = wQ.replace(/[^0-9]/g, "");
      if (LQ.length > 0 && !/\p{L}/u.test(wQ)) return Math.min(LQ.length, 4);
      const qQ = null !== (FQ = wQ.match(CQ)) && void 0 !== FQ ? FQ : [];
      if (0 === qQ.length) {
        var oQ, DQ;
        const QQ = null !== (oQ = null === (DQ = wQ.match(/\p{L}/gu)) || void 0 === DQ ? void 0 : DQ.length) && void 0 !== oQ ? oQ : 0;
        return 0 === QQ ? 0 : Math.min(Math.max(1, Math.round(QQ / 2.5)), YQ)
      }
      const kQ = wQ.replace(/[^\p{L}]/gu, ""),
        vQ = qQ.length > 1 && "e" === qQ.at(-1) && kQ.endsWith("e") && !kQ.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(QQ.replace(/[^\p{L}]/gu, ""));
      return Math.min(qQ.length - (vQ ? 1 : 0), YQ)
    }

    function WQ(QQ) {
      return QQ.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function RQ(QQ) {
      const FQ = QQ.replace(/[^\p{L}]/gu, "");
      return FQ.length >= 2 && FQ === FQ.toUpperCase() && FQ !== FQ.toLowerCase()
    }

    function OQ(QQ, FQ) {
      var wQ;
      const YQ = FQ && (0, LQ.i)(FQ),
        xQ = null !== (wQ = null === YQ || void 0 === YQ ? void 0 : YQ.syllableMs) && void 0 !== wQ ? wQ : LQ.c,
        GQ = function(QQ) {
          const FQ = [];
          for (const LQ of (0, qQ.ec)(QQ))
            if ("string" === typeof LQ)
              for (const QQ of LQ.split(/(\s+)/)) {
                if ("" === QQ) continue;
                if (/^\s+$/.test(QQ)) {
                  FQ.push({
                    kind: "space",
                    text: QQ
                  });
                  continue
                }
                if (!pQ.test(QQ)) {
                  FQ.push({
                    kind: "word",
                    text: QQ,
                    delayMs: 0
                  });
                  continue
                }
                let LQ = !0;
                for (const qQ of null !== (wQ = QQ.match(cQ)) && void 0 !== wQ ? wQ : []) {
                  var wQ;
                  const QQ = FQ.at(-1);
                  LQ || "word" !== (null === QQ || void 0 === QQ ? void 0 : QQ.kind) || pQ.test(qQ) || /[\p{L}\p{N}]/u.test(qQ) ? (LQ || FQ.push({
                    kind: "space",
                    text: "\u200b"
                  }), FQ.push({
                    kind: "word",
                    text: qQ,
                    delayMs: 0
                  }), LQ = !1) : QQ.text += qQ
                }
              } else FQ.push({
                kind: "icon",
                text: LQ.icon,
                delayMs: 0
              });
          return FQ
        }(QQ),
        CQ = [];
      let OQ = [];
      for (const LQ of GQ) "space" !== LQ.kind && (OQ.push(LQ), AQ.test(LQ.text) && (CQ.push(OQ), OQ = []));
      CQ.push(OQ);
      const sQ = [];
      let rQ = 0;
      for (const LQ of CQ) {
        var IQ, UQ;
        const QQ = null !== (IQ = null === (UQ = LQ.at(-1)) || void 0 === UQ ? void 0 : UQ.text) && void 0 !== IQ ? IQ : "",
          FQ = tQ.test(QQ),
          wQ = eQ.test(QQ),
          qQ = LQ.map((QQ => "word" === QQ.kind ? iQ(QQ.text) : 1)),
          GQ = qQ.findLastIndex((QQ => QQ > 0));
        for (const [tQ, eQ] of LQ.entries()) {
          const QQ = "word" === eQ.kind,
            LQ = qQ[tQ];
          eQ.delayMs = rQ;
          for (let qQ = 0; YQ && qQ < LQ; qQ++) {
            const {
              intonation: oQ
            } = YQ;
            let DQ = GQ > 0 ? -oQ.declineSemitones * (tQ / GQ) : 0;
            DQ += SQ(`${WQ(eQ.text)}|${qQ}`) * oQ.variationSemitones;
            const AQ = Math.min(1, oQ.variationSemitones);
            let MQ = YQ.glideSemitones,
              pQ = 1;
            wQ && (DQ += oQ.exclaimLiftSemitones, pQ *= kQ), FQ && tQ === GQ && (DQ += oQ.questionRiseSemitones * (LQ > 1 ? .5 + .5 * qQ / (LQ - 1) : 1), qQ === LQ - 1 && (MQ = Math.abs(MQ) + oQ.questionRiseSemitones / 2)), QQ && RQ(eQ.text) && (DQ += mQ * AQ, pQ *= vQ), LQ > 1 && 0 === qQ && (DQ += HQ * AQ, pQ *= uQ), sQ.push({
              atMs: rQ + qQ * xQ,
              semitones: DQ,
              glideSemitones: MQ,
              durationMs: qQ < LQ - 1 ? Math.min(YQ.durationMs, xQ * bQ) : YQ.durationMs,
              level: pQ
            })
          }
          rQ += LQ * xQ + (AQ.test(eQ.text) ? DQ : MQ.test(eQ.text) ? oQ : 0)
        }
      }
      return {
        pieces: GQ.map((QQ => "space" === QQ.kind ? QQ : "icon" === QQ.kind ? {
          kind: "icon",
          icon: QQ.text,
          delayMs: QQ.delayMs
        } : {
          kind: "word",
          text: QQ.text,
          delayMs: QQ.delayMs
        })),
        blips: sQ
      }
    }
    var sQ = wQ(1207),
      rQ = wQ(1265),
      IQ = wQ(1899);

    function UQ(QQ) {
      if ("string" === typeof QQ) return QQ;
      const FQ = rQ.e.get().getCurrentLanguageCode();
      return (0, sQ.o)(FQ, QQ.translationKey, (0, sQ.m)(QQ.params, IQ.b.shown))
    }

    function NQ(QQ) {
      const FQ = void 0 === QQ.voice ? null : (0, LQ.k)(QQ.voice),
        wQ = FQ && (0, LQ.i)(FQ);
      return {
        plan: OQ(UQ(QQ.line), wQ),
        synth: wQ
      }
    }

    function TQ(QQ) {
      const FQ = [];
      let wQ = [];
      for (const [qQ, oQ] of QQ.entries()) {
        var LQ;
        "space" === oQ.kind && (" " !== oQ.text || "icon" !== (null === (LQ = QQ[qQ + 1]) || void 0 === LQ ? void 0 : LQ.kind)) ? (wQ.length > 0 && FQ.push(wQ), FQ.push([oQ]), wQ = []) : wQ.push(oQ)
      }
      return wQ.length > 0 && FQ.push(wQ), FQ
    }
  },
  36308: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => qQ
    });
    const LQ = [{
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

    function qQ(QQ, FQ, wQ) {
      const qQ = Math.abs(QQ - FQ),
        oQ = Date.now() - wQ;
      for (const DQ of LQ)
        if (QQ < DQ.maxDist) return qQ >= DQ.hardUpdateDist || oQ > DQ.timeBetweenSoftChecks && qQ >= DQ.softUpdateDist;
      return !1
    }
  },
  36573: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => DQ,
      h: () => oQ,
      l: () => qQ
    });
    const LQ = [.25, .5, 1, 2, 4, 8, 16];

    function qQ(QQ, FQ) {
      const wQ = LQ;
      let qQ = wQ.indexOf(QQ);
      return -1 === qQ && (qQ = wQ.findIndex((FQ => FQ >= QQ)), -1 === qQ && (qQ = wQ.length - 1)), "up" === FQ ? wQ[Math.min(qQ + 1, wQ.length - 1)] : wQ[Math.max(qQ - 1, 0)]
    }

    function oQ(QQ) {
      return QQ <= LQ[0]
    }

    function DQ(QQ) {
      return QQ >= LQ[LQ.length - 1]
    }
  },
  36614: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => LQ,
      g: () => qQ
    });
    const LQ = "data-replay-ui-active",
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
  36619: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => mQ,
      f: () => HQ,
      g: () => uQ
    });
    var LQ = wQ(17),
      qQ = wQ(22),
      oQ = wQ(36614);

    function DQ() {
      const QQ = {};
      for (const {
          group: FQ
        }
        of oQ.g) QQ[FQ] = !0;
      return QQ
    }
    let kQ = DQ();

    function vQ() {
      qQ.l.GA("replayViewer|uiVisibilityChanged")
    }

    function mQ() {
      return kQ
    }

    function uQ(QQ, FQ) {
      kQ[QQ] !== FQ && (kQ = {
        ...kQ,
        [QQ]: FQ
      }, "nametag" === QQ && LQ.c.set({
        areNametagsHidden: !FQ
      }), vQ())
    }

    function HQ() {
      kQ = DQ(), LQ.c.set({
        areNametagsHidden: !1
      }), vQ()
    }
  },
  9142: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => DQ,
      d: () => qQ,
      g: () => uQ
    });
    var LQ = wQ(1560);

    function qQ(QQ) {
      var FQ;
      return {
        ...DQ.store,
        yaw: DQ.store.yaw + (null !== (FQ = LQ.e[QQ].previewYaw) && void 0 !== FQ ? FQ : 0)
      }
    }
    const oQ = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      DQ = {
        player: oQ,
        store: {
          ...oQ,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function kQ(QQ, FQ) {
      QQ instanceof Promise ? QQ.then(FQ).catch((QQ => {
        console.error("Couldn't open the preview", QQ)
      })) : FQ(QQ)
    }
    class vQ {
      constructor(QQ) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, kQ(QQ, (QQ => {
          this.closed ? QQ.close() : (this.opened = QQ, null !== this.size && QQ.resize(this.size.width, this.size.height), null !== this.view && QQ.show(this.view))
        }))
      }
      show(QQ) {
        var FQ;
        this.view = QQ, null === (FQ = this.opened) || void 0 === FQ || FQ.show(QQ)
      }
      resize(QQ, FQ) {
        var wQ;
        this.size = {
          width: QQ,
          height: FQ
        }, null === (wQ = this.opened) || void 0 === wQ || wQ.resize(QQ, FQ)
      }
      close() {
        var QQ;
        this.closed = !0, null === (QQ = this.opened) || void 0 === QQ || QQ.close(), this.opened = null
      }
    }
    class mQ {
      constructor(QQ) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(QQ).then((QQ => QQ.ready)), kQ(QQ, (QQ => {
          this.closed ? QQ.close() : (this.opened = QQ, null !== this.size && QQ.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var QQ, FQ;
        return null !== (QQ = null === (FQ = this.opened) || void 0 === FQ ? void 0 : FQ.isReady()) && void 0 !== QQ && QQ
      }
      setCosmetic(QQ, FQ) {
        var wQ;
        null === (wQ = this.opened) || void 0 === wQ || wQ.setCosmetic(QQ, FQ)
      }
      playEmote(QQ) {
        var FQ;
        null === (FQ = this.opened) || void 0 === FQ || FQ.playEmote(QQ)
      }
      setOrbit(QQ) {
        var FQ;
        null === (FQ = this.opened) || void 0 === FQ || FQ.setOrbit(QQ)
      }
      resetCamera() {
        var QQ;
        null === (QQ = this.opened) || void 0 === QQ || QQ.resetCamera()
      }
      async untilDrawn(QQ) {
        var FQ;
        await this.ready, await (null === (FQ = this.opened) || void 0 === FQ ? void 0 : FQ.untilDrawn(QQ))
      }
      resize(QQ, FQ) {
        var wQ;
        this.size = {
          width: QQ,
          height: FQ
        }, null === (wQ = this.opened) || void 0 === wQ || wQ.resize(QQ, FQ)
      }
      close() {
        var QQ;
        this.closed = !0, null === (QQ = this.opened) || void 0 === QQ || QQ.close(), this.opened = null
      }
    }
    const uQ = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(QQ) {
        this.host = QQ
      }
      setDefaultHost(QQ) {
        this.makeDefault = QQ
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(QQ) {
        return new vQ(this.current().openMob(QQ))
      }
      openPet(QQ) {
        return new vQ(this.current().openPet(QQ))
      }
      openMobLineup(QQ) {
        return new vQ(this.current().openMobLineup(QQ))
      }
      openCharacter(QQ, FQ) {
        return new mQ(this.current().openCharacter(QQ, FQ))
      }
    }
  },
  9137: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => LQ.b,
      c: () => LQ.d,
      d: () => LQ.g
    });
    var LQ = wQ(9142);
    class qQ {
      constructor(QQ) {
        this.load = QQ, this.loaded = null, this.loading = null
      }
      run(QQ) {
        return null !== this.loaded ? QQ(this.loaded) : (this.loading ??= this.load().then((QQ => (this.loaded = QQ, QQ)), (QQ => {
          throw this.loading = null, QQ
        })), this.loading.then(QQ))
      }
    }
    class oQ {
      constructor() {
        this.mobScene = new qQ((() => Promise.all([wQ.e(70), wQ.e(227), wQ.e(226), wQ.e(246), wQ.e(95), wQ.e(247), wQ.e(73), wQ.e(72), wQ.e(244), wQ.e(71), wQ.e(254), wQ.e(248), wQ.e(253), wQ.e(251), wQ.e(243), wQ.e(265), wQ.e(223), wQ.e(238), wQ.e(249), wQ.e(252), wQ.e(75), wQ.e(197), wQ.e(217), wQ.e(94), wQ.e(220), wQ.e(235), wQ.e(114), wQ.e(236), wQ.e(74), wQ.e(113), wQ.e(155)]).then((() => wQ(40492))))), this.characterScene = new qQ((() => Promise.all([wQ.e(70), wQ.e(227), wQ.e(226), wQ.e(246), wQ.e(95), wQ.e(247), wQ.e(73), wQ.e(72), wQ.e(244), wQ.e(71), wQ.e(254), wQ.e(248), wQ.e(253), wQ.e(251), wQ.e(243), wQ.e(265), wQ.e(223), wQ.e(238), wQ.e(249), wQ.e(252), wQ.e(75), wQ.e(197), wQ.e(217), wQ.e(94), wQ.e(220), wQ.e(235), wQ.e(114), wQ.e(236), wQ.e(74), wQ.e(113), wQ.e(154)]).then((() => wQ(40583)))))
      }
      openMob(QQ) {
        return this.mobScene.run((FQ => FQ.openMobPreview(QQ)))
      }
      openPet(QQ) {
        return this.mobScene.run((FQ => FQ.openPetPreview(QQ)))
      }
      openMobLineup(QQ) {
        return this.mobScene.run((FQ => FQ.openMobLineupPreview(QQ)))
      }
      openCharacter(QQ, FQ) {
        return this.characterScene.run((wQ => wQ.openCharacterPreview(QQ, FQ)))
      }
    }
    LQ.g.setDefaultHost((() => new oQ))
  },
  36458: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ,
      e: () => oQ
    });
    const LQ = new Map;

    function qQ(QQ) {
      var FQ;
      return null === QQ ? null : null !== (FQ = LQ.get(QQ)) && void 0 !== FQ ? FQ : null
    }

    function oQ(QQ, FQ) {
      return LQ.set(QQ, FQ), () => {
        LQ.get(QQ) === FQ && LQ.delete(QQ)
      }
    }
  },
  36238: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => oQ,
      g: () => AQ,
      i: () => tQ,
      m: () => kQ,
      n: () => bQ,
      o: () => eQ,
      q: () => HQ,
      u: () => GQ,
      v: () => xQ,
      w: () => MQ
    });
    var LQ = wQ(17),
      qQ = wQ(22);
    const oQ = "clientGameInventoryButtonsChanged",
      DQ = new Map;

    function kQ() {
      return [...DQ.values()].sort(((QQ, FQ) => {
        var wQ, LQ;
        return (null !== (wQ = QQ.order) && void 0 !== wQ ? wQ : 0) - (null !== (LQ = FQ.order) && void 0 !== LQ ? LQ : 0)
      }))
    }
    let vQ = null;

    function mQ(QQ) {
      vQ = QQ
    }
    let uQ = !1;

    function HQ(QQ) {
      uQ = !0;
      try {
        QQ.onClick()
      } finally {
        uQ = !1
      }
      QQ.panel && "clientGame" === LQ.c.get("openInGameMenuName") && mQ(QQ.id)
    }

    function bQ() {
      return uQ
    }

    function YQ() {
      return kQ().filter((QQ => QQ.panel && !QQ.disabled))
    }

    function xQ(QQ) {
      const FQ = YQ(),
        wQ = FQ.findIndex((QQ => QQ.id === vQ));
      return !(wQ < 0 || FQ.length < 2) && (HQ(FQ[(wQ + QQ + FQ.length) % FQ.length]), !0)
    }

    function AQ() {
      return null !== vQ && YQ().length > 1
    }

    function tQ() {
      mQ(null)
    }

    function eQ() {
      "inventory" !== LQ.c.get("openInGameMenuName") && mQ(null)
    }

    function MQ() {
      const QQ = vQ;
      return mQ(null), QQ
    }

    function GQ(QQ) {
      return DQ.set(QQ.id, QQ), qQ.l.GA(oQ, kQ(), !0), () => {
        DQ.get(QQ.id) === QQ && (DQ.delete(QQ.id), qQ.l.GA(oQ, kQ()))
      }
    }
  },
  36235: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => kQ,
      f: () => tQ,
      i: () => eQ,
      j: () => bQ,
      k: () => mQ,
      o: () => AQ,
      q: () => YQ,
      u: () => uQ
    });
    var LQ = wQ(17),
      qQ = wQ(22),
      oQ = wQ(1302),
      DQ = wQ(36238);
    const kQ = "clientGameUiChanged";
    let vQ = null;

    function mQ() {
      return vQ
    }

    function uQ(QQ, FQ) {
      const wQ = {
        content: QQ,
        menu: FQ
      };
      return vQ = wQ, qQ.l.GA(kQ, vQ, !0), () => {
        vQ === wQ && (vQ = null, xQ = !1, tQ(), qQ.l.GA(kQ, null))
      }
    }
    let HQ = null;

    function bQ() {
      return HQ
    }

    function YQ(QQ) {
      return HQ = QQ, () => {
        HQ === QQ && (HQ = null)
      }
    }
    let xQ = !1;

    function AQ() {
      const QQ = LQ.c.get("openInGameMenuName");
      "clientGame" !== QQ && (xQ = "inventory" === QQ), (0, DQ.n)() || (0, DQ.i)(), (0, oQ.n)(oQ.d), LQ.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function tQ() {
      MQ(!1)
    }

    function eQ() {
      MQ(xQ)
    }

    function MQ(QQ) {
      "clientGame" === LQ.c.get("openInGameMenuName") && LQ.c.set({
        openInGameMenuName: QQ ? "inventory" : null
      }), QQ || (0, DQ.i)(), xQ = !1
    }
  },
  36591: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => yF,
      d: () => ZF
    });
    var LQ = wQ(4119),
      qQ = wQ(619),
      oQ = wQ(3605),
      DQ = wQ(3627),
      kQ = wQ.n(DQ);
    const vQ = new Set(["nameTagInfo", "multilineTextBox", "animationScript", "content", "skyBox", "opts", "fromBlockData", "toBlockData", "sharedBlockData"]),
      mQ = "EV_boolean",
      uQ = "EV_double",
      HQ = "EV_string",
      bQ = "EV_doubleArr",
      YQ = "EV_armour",
      xQ = "EV_other",
      AQ = "EV_cosmetics",
      tQ = "OEV_boolean",
      eQ = "OEV_int",
      MQ = "OEV_double",
      GQ = "OEV_string",
      pQ = "OEV_stringArr",
      cQ = "OEV_meshScaling",
      CQ = "IV_int",
      SQ = "IV_string",
      iQ = "IV_doubleArr",
      WQ = "IV_double",
      RQ = "HV_int",
      OQ = "HV_slots",
      sQ = "EnvV_string",
      rQ = "EnvV_double",
      IQ = "EnvV_doubleArr",
      UQ = "EnvV_boolean",
      NQ = {
        type: HQ,
        name: HQ,
        position: bQ,
        rotation: bQ,
        scale: uQ,
        speed: uQ,
        jumping: mQ,
        crouching: mQ,
        cameraPitch: uQ,
        armSwinging: mQ,
        heldItemName: HQ,
        heldItemEnchantmentTier: HQ,
        pose: HQ,
        followingEId: HQ,
        ridingVehicleEId: HQ,
        leaderboardTop: HQ,
        meshKind: HQ,
        meshOpts: HQ,
        followingOffset: bQ,
        shouldMatchFollowingEntityRotation: mQ,
        meshOffset: bQ,
        baseRenderHeading: uQ,
        armour: YQ,
        iK: xQ,
        playerCustomisations: AQ,
        variation: HQ,
        metaInfo: HQ,
        soundName: HQ,
        volume: uQ,
        refDistance: uQ,
        maxHearDist: uQ,
        rate: uQ,
        aiState: HQ
      },
      TQ = {
        opacity: MQ,
        zIndex: eQ,
        overlayColour: GQ,
        canSee: tQ,
        meshScaling: cQ,
        nameTagInfo: GQ,
        multilineTextBox: GQ,
        hasPriorityNametag: tQ,
        ranks: pQ,
        nameColour: GQ,
        _isAlive: tQ,
        _invisibleEffect: tQ,
        _invincible: tQ,
        killfeedColour: GQ,
        hideNameSeed: eQ,
        _glowingEffect: tQ,
        lockHeadToBody: tQ
      },
      KQ = {
        itemName: SQ,
        amount: CQ,
        position: iQ,
        size: WQ,
        attributes: SQ
      },
      zQ = {
        skyBox: sQ,
        fogColourOverride: sQ,
        fogChunkDistanceOverride: rQ,
        cameraTint: IQ,
        fogOnSkybox: UQ,
        fogBlockDistanceOverride: rQ
      },
      lQ = {
        type: "array",
        items: "double"
      },
      jQ = {
        type: "array",
        items: "int"
      },
      aQ = {
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
      XQ = {
        type: "map",
        values: lQ
      };

    function fQ(QQ, FQ) {
      return {
        type: "record",
        name: QQ,
        fields: [{
          name: "x",
          type: FQ
        }]
      }
    }
    const VQ = {
        type: "array",
        items: {
          type: "record",
          name: "OtherEntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", fQ(tQ, "boolean"), fQ(eQ, "int"), fQ(MQ, "double"), fQ(GQ, "string"), fQ(pQ, {
              type: "array",
              items: "string"
            }), fQ(cQ, XQ)]
          }]
        }
      },
      hQ = {
        type: "array",
        items: {
          type: "record",
          name: "EntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", fQ(mQ, "boolean"), fQ(uQ, "double"), fQ(HQ, "string"), fQ(bQ, lQ), fQ(YQ, aQ), fQ(xQ, VQ), fQ(AQ, {
              type: "map",
              values: "string"
            })]
          }]
        }
      },
      JQ = {
        type: "array",
        items: {
          type: "record",
          name: "ItemDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", fQ(CQ, "int"), fQ(SQ, "string"), fQ(WQ, "double"), fQ(iQ, lQ)]
          }]
        }
      },
      EQ = {
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
      nQ = {
        type: "record",
        name: "HotbarDeltaEntry",
        fields: [{
          name: "i",
          type: "int"
        }, {
          name: "v",
          type: ["null", fQ(RQ, "int"), fQ(OQ, EQ)]
        }]
      },
      gQ = {
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
      PQ = {
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
      ZQ = {
        type: "array",
        items: {
          type: "record",
          name: "EnvironmentDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", fQ(sQ, "string"), fQ(rQ, "double"), fQ(IQ, lQ), fQ(UQ, "boolean")]
          }]
        }
      },
      yQ = [{
        name: "KU",
        type: "record",
        fields: [{
          name: "pos",
          type: jQ
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
          type: jQ
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
      BQ = [{
        name: "playSound",
        type: "record",
        fields: [{
          name: "gF",
          type: "string"
        }, {
          name: "volume",
          type: "double"
        }, {
          name: "rate",
          type: "double"
        }, {
          name: "yF",
          type: ["null", {
            type: "record",
            name: "SoundPosSettings",
            fields: [{
              name: "BF",
              type: ["null", "string", lQ],
              default: null
            }, {
              name: "dF",
              type: ["null", "double"],
              default: null
            }, {
              name: "Qw",
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
          name: "DQ",
          type: "string"
        }, {
          name: "kQ",
          type: "int"
        }, {
          name: "animationScript",
          type: ["null", "string"]
        }, {
          name: "vQ",
          type: "double"
        }, {
          name: "mQ",
          type: "double"
        }]
      }, {
        name: "bullet",
        type: "record",
        fields: [{
          name: "tL",
          type: "string"
        }, {
          name: "bulletDirections",
          type: {
            type: "array",
            items: lQ
          }
        }]
      }, {
        name: "lifeformHealth",
        type: "record",
        fields: [{
          name: "fF",
          type: "string"
        }, {
          name: "ww",
          type: ["null", "double"],
          default: null
        }, {
          name: "Lw",
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
          name: "Rw",
          type: "double"
        }, {
          name: "angle",
          type: "double"
        }, {
          name: "Ow",
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
      dQ = [{
        name: "position",
        type: lQ
      }, {
        name: "direction",
        type: lQ
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

    function QF() {
      const QQ = [{
        name: "entities",
        type: {
          type: "map",
          values: hQ
        }
      }, {
        name: "items",
        type: {
          type: "map",
          values: JQ
        }
      }, {
        name: "camera",
        type: {
          type: "record",
          name: "ReplayCameraState",
          fields: dQ
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
              items: nQ
            }
          }]
        }],
        default: null
      }, {
        name: "playerHud",
        type: ["null", gQ],
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
              name: "fF",
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
        type: PQ
      }, {
        name: "environment",
        type: ZQ
      }, {
        name: "structuralEvents",
        type: {
          type: "array",
          items: yQ
        }
      }, {
        name: "ephemeralEvents",
        type: {
          type: "array",
          items: BQ
        }
      }), QQ
    }
    const FF = {
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
                name: "fH",
                type: "int"
              }, {
                name: "position",
                type: lQ
              }, {
                name: "direction",
                type: lQ
              }, {
                name: "easing",
                type: lQ
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
    let wF;

    function LF(QQ) {
      if (9 === QQ) return wF ??= (FQ = [{
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
            name: "mN",
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
              type: jQ
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
            fields: QF()
          }
        }
      }, FF], kQ().Type.forSchema({
        type: "record",
        name: "RecordingState",
        fields: FQ
      }, {
        Bb: Object.create(null)
      })), wF;
      var FQ
    }
    var qF = wQ(2766);
    let oF, DF, kF, vF;
    const mF = 12;
    var uF, HF;
    const bF = [0, 1, 8, 255, "length", "undefined", 63, 6, "fromCodePoint", 7, 12, "push", 91, 8191, 88, 13, 14, 3, 16, 123, 4, 124, 125, !0, 15, 120, 127, 60, 128, "=", ";", null, 2, 10, 5, 11, 9, !1];

    function YF(QQ) {
      return typeof Fw !== bF[5] && Fw ? (new Fw).decode(new ww(QQ)) : typeof Lw !== bF[5] && Lw ? Lw.from(QQ).toString("utf-8") : Dw(QQ)
    }

    function xF() {}

    function AF() {
      AF = function() {}
    }
    var tF, eF;
    AF(uF = {}, HF = ["N+Lwa&rS!]`nV>0fKB", "@iv{Ev9SxM}UBImX:++<", ".njn_b3Y0k?UyUi", "K?k&mv.SXATVQxMXIa>)!/6<ctBrprew]~*<$?LS%8+Y<w=[lGPi", "DUy,qNX<@D9NIL*f=2XK]", "$N?N_eg]8DaPI+E,|,sevaDohK=*~H", "yi|i/(h]cv9m]x<[UHjFiCif?FZ&1H", "TvS(CEzmOIrvc0&w6i^p~!aRDh+EdP{J`RgLA*WUYGcJArV", "5srnmyx5w8%EFo<tkF*ug|:`(~7/Tv_orHXw!QQ<78e", "3E566.}SW]%b*(rt=Fn6Oaae~D+QRw}`whGVcC|U:7", "F_]!Y2io@D;(s.<[:jx|a*0k`ku&%OI", "vE|#K&2#_~#kd2sU7a{J|U2O%+Qes+c[*Ks^E{Req", "DAMD;>u`%EOKm", ",GRK]C2#n+*nrp*)g/QN,nu6bf}", "%XO6N0t,>8IYnr|)9+^ps^:A+8JPm", "E)xKc2j;PXoPE(}U_Hq<=!z</F$!&PaLIm", 'XuZ("QB', 'l+p"my!]p', "HM_F.^i$xF:_L(o)#?)ey=d`B7wEK>_#LI*JJU}NN+<Omo=QTAbi5/KO", "EXH,((?aDVT)G8zL5nm#w", "cJi<YEDe^~#GzOo[#Abiw8RRD!V.Pu,XO($6;~~6lfk(j+8s", "jX;eiSB", "ju&e(6TU38o/qyztnB", "i~RFh!^k6v`X{v$LhK|_k{o798J", "dEuKek{UDV[XN=xRcFjncE_eG5;1@:xwTuYq3.p$.Aj2/q", 'yh$_i"H]e]Vxt.wsq,YDt=Vamvor):AUeh#e>2!UkX|wN[,X`75F90g]H', "wRq!f1VD3}d&p2jQQs{Nt:poq", "xAR6%n1f+TVV@:(RJsW1Br~m", 'a6DiS"okq]}zCp0Qm~zNvk;~"7=pJu,Ue2>e%.Pa|v0XfQZJ', "Kue)C:cm", "tixFr!.Rx7721I?0ifPnd01f5A6=2;:wPm", 'Df[ir"iSfv>(FocQM3a)s:YY^D]VFoT`:6Fwx!=Yf74/:L^tz?@,x::A>DI?B', "D(Pniv];.t)w&pKJrzm6`QJf&E5byvntpu1q7SVDMImFjOJ,^i]!q2,;mF", "YsvVL1+o8}P", "<?,V!Q]~*5Jrukgw>hXrmr5iXK2Uo:9$3?p&ONI]Bv@MdoBo16v)tAGO", "+%?{<SmtEfu*W+7jGK>1_U;m>+F?W*V", "H~a!A&eaYXgIK>S/8R+)ulc6kz>eI+m#c6)(<vr#(AhMZIS`", '_Njnogek"~R18+d,zso,@K$a%Dq?~Ijt:nYq', "xuk6mSd`OvW*&2WUr6#(w;0O", "kKsJZe#5x7;(RH4JeH*!H!T{UFhpzLjP%uL_H{q`Z]pO/>cfF(ADPu~]p", "V,,!N0ee5f}nvHhP_R!p:EK#qt2EULq)F?p<Q}[;zhGrBI|X:*)nKyxD`kUHm", "JhXi$nu~)T+#pHHP88w_S1z`<kd_U.NLz%Ri#eo#;T]Y_2*0B%{)J;$a&{0Em", ":*bF0QBfEfx/@wxGL?N_O/h,Dhuzq2HQy*AD", "m7a)Q?p$M7Z[;.cXlnm#xC6`q", "AGF6UYD#iV4kkCo#sAP6I:}Oi!Zc80/XP,`Y%}Ym", '2L[K98QtOAg_"[A,.Q>Vv/?NmItlY:kJ=iLw?v"bp55Jw0p0Che,[1Tm', 'M6jev/N7tA|1M*xL9D"rqlxe:KjJmy+Rsh_6SeWgj]O6MCBfaLt&8aVoi', "GAv,,Ry7*]CmM[]0cngLu=)t8XFKQ2ZU.*B#:CWm", "bhlKr1+o@DCCFrY[@/#eT:B", 'V~k6#>"agK(X&p', 'xL~e12!,?5F]jOJUppL6xust9zR1J:z0y/Znc2;;"Id*iCY01zP|~yjm', "^6>e71&69GyNY+1t3/(w|g<[k8THtLI", "AR[6&!z`FX(nJu8s!H*p^3%]zhoVFx^L~Qb(4=z[l{K)1:qPqpfw+", "0v4njK}erGzx$(eJ|6;eA6<m!5VrZoo#Ii7,CExe)M}n$0{U~+ae%bWli", "=X]!6}@#[h2)pj8X[LM_@Yw;{5xQKQLJsaM{]!ZP18C{yH", "@Le&l:6`bAxYh(R)n}%Vk&h=Ah7!S=$[B~^<", '&}|_]=I]l{M*"]Qf/Q)JmjX[7hS[32c#bJKpAaoN8hfkAx:/n2sp,e0fAG', "BMG)%QS?VG(Ul*$0Qv]NvveSp", '/2&u&"Y,6K`V%L##oICKBvY](FWt=vi[:8;p|(8m2~Br:0#XTNae7', "./6r^ocUF!Fhe:OQ|v^(4^^PhF})m", "MH?NF=yRtA.aa]1jG~Ci(Y_PZkTkDjgRs,M6o>[=G5j<rI9JH%:&xA<[G5U", "shF^lA;`7hReho<0$RQV]1_PAh`=_pW4AGSp", "ZG!nW1?bB7mYm>u03Ey&^Nya9zZ*r:fJ`R+!#K)Yi", "b6w_G8U<xIjn4q1Lw%trql),F!U2_H", "xA`r9geaDV%", "9Hc,rvB", "kFyqBk),@h,ljLEUPFOY,RB", "su!eCAT{`k>[N(3tGvO", ",hQJEjyR;I_!ewm)ivTNxEz{z+", "6A~1$>25YXprGHE,|,;(Nv1PLX01S=J$1hO", "+(:&n1NfnhVrJ;5PS3|6oY[,IM7h7:Lo*h$Y2Y{UPhEf`rF", "MKM{FCH`&+GQy8_$/AtN{&2kNXyD>vvU}ivVX", "$Lbnw0pP,M>m18`[", ";64eQn(m2IA1my$[vLGNF=w`OA&D6klw]AgJ3.ek^}bc)8&tZ3O", 'dnp"V2Wg6Fi?b;S/l3?"_U;]5Ay&uIc[Z/4!cr<m', 'qLAi==ef)TW7(2dx]vBw2.q~O7~*4"<f;Ew,9Ap$Ez%', 'WjeVRU45Mv~[%Lh)Ms"6FAhsPh?bBH,oXA>V#R)U}k:zWLBPcK6V', "nGi1k6sUAGJPAxi%Of>)u=t;e51,7jGJj?z,~l}a(f~mhro)26,eVSW`H", "]pspBkZabAfYp2u0^Eo)8/1PY8GH}:yJ7R><8{ItG]CCx8SxLRP|ejB", "9$7&6.kaOFVrOLEs*H;1oYC,#~3Xn2~QAh/w/nJ7`kc{a[I", "@%^Ji!.PW]Gryv_PIKdKzC0fXv=mm", '!L~J4e[{e]0XJ;t`csZn"k{]rh^zg2jtzsD|:"4b[X', "Y?/rl:;;9G6}W*Y[b6P(Y2+Sxv/llHHfj?o!]", "As}nh2raV+Xr<w4/HK>!qvR#cA;X9C0QusXK?l4DHtPG+Q@0*n^JBNfei", ">Qunj~Imqk/EE(@LDm", 'Z3jJ;.g,Dk6~k=pPy2._boSei]K1<H~Xrzx|/nOkGF><npOP=$,!i"c6x7', '7uEnI1Ga>}=*=r<QDsy"N"r#OI>~l+70V%M6nC|<oF,PZ;UX6LO_+', "I6T<^Chm}Xmi2;o){FXw6~tU9E+i4CL$H75K.oUAdGk", 'jFuncE4akz#=mQ`)<(+)&"U;/A@TxH', "FsS<]:;m", "is6&MaGe2FX6Cp5,&6o&86a73E;zBwFj}/`wnl)AT5#1UO", "r8k{(6`m", 'mKqVgg"a^zRba*UfcB', "[K6_moB", '_/yN*C)~v}0n[>N[n}z,MC.R38r*"[Jo_Fc{|Rn~i', "o,;(s=WX?]*bQ[fJR6<Kc/|t,8xGb8S/EG,Vi=3<p", 'Lu6NeyRRcKL=[C|szRvN[gZ/?5PP2H$tJF{N*o,YL+J/,2%[,h"rx1<m', 'jhq171t=Y8Dkrwq#6GaeX0m~eK"8S[H)<~1<P;A;Jh$', "](sKPe&=MvSCX2!UkKO6A&&<27m^_8Mo&E*n2yu](An,WO|fOM(_FSfPq", "93S(e6V#c5P6J;E$q?i)@*|,|AL", "FaWFP;aa9hhT&v2Rg*pNfC*e%XeTa[XLv2?q4", "hlQ8h*xf", "m#(nBJjf", "=6&;n", "}8h9*PYW", "$@}0BSiN=_XEkVS/", "r7_4{]WGmYC&zk+L", "Aqg9*5r33K0e!Xo", "GV#Nxuxj&b($ko(]sFvs(tNB;", "hwq&KRrA2xneRoyp;~vLD_jwW", 'r"$19[a{=~YrQ24/hwvL,GR*k', 'hD81MmOk^_J|eqw1c"]LpZ0*GXA4Pj{.5Pb3"', 'wmsBIt/?"7oR0R#!;5Jg#t23bvD$fOSEZ9&Bj', '"wvLQE0*"n)2UFmDd$K,?$=rZxh4ko,7{Pb3<', 'mK;Kq(aAAc^%12L7FY<L?$nAB7F4ko1~zP<L"', "lM<LA]D?fK2unmdG>q+@0`D%{WVa/o1~0P>", "PzGZoBKX", "YYNcv", "Cm6~quXg", "sU.aZ%dn", "YAG;#bDn", "lb`2WoVn", "!;Mw[", "L|Tt", "E|`2F5kn", "%;lU", "4|)6J($n", "tlF?GU#D", "6Lz<n;].", "Hedmn)>I", ":(Kx", "cLq8%lmJ", "]%2>@s4J", 'BVm>TKF(^H_u#"PhO.:y00Gn,q[*xtPh,CjM,OB4eb*Z3&OVtVR=y', 'A<^>0!,4{R~epmZF&LQnXX"#WEK2PTZFedgN::9J&0~liSpj+z', ";d2>exkM]vQrj^W**dDw7XeJ~I)l(e&7OcplN", "$rWJ", "q=2e", "B(OY60=A", 'bJ<"|vjk', "@{s1c(DO", "}=Z`Z]bO", "Kk8aM.9d"]), AF(Qw = function() {
      var QQ, FQ, wQ, LQ = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      AF(QQ = void 0, FQ = []);
      try {
        AF(QQ = Object, FQ[bF[11]]("".__proto__.constructor.name))
      } catch (ww) {}
      QQ: for (wQ = bF[0]; wQ < LQ[bF[4]]; wQ++) try {
        var qQ;
        for (QQ = LQ[wQ](), qQ = bF[0]; qQ < FQ[bF[4]]; qQ++)
          if (typeof QQ[FQ[qQ]] === bF[5]) continue QQ;
        return QQ
      } catch (ww) {}
      return QQ || this
    }() || {}, Fw = Qw.TextDecoder, ww = Qw.Uint8Array, Lw = Qw.Dx, qw = Qw.String || String, ow = Qw.Array || Array, Dw = function() {
      var QQ, FQ, wQ = new ow(bF[28]);
      return AF(QQ = qw[bF[8]] || qw.fromCharCode, FQ = []),
        function(LQ) {
          var qQ, oQ, DQ, kQ;
          for (AF(oQ = void 0, DQ = LQ[bF[4]], FQ[bF[4]] = bF[0]), kQ = bF[0]; kQ < DQ;) AF(oQ = LQ[kQ++], oQ <= bF[26] ? qQ = oQ : oQ <= 223 ? qQ = (31 & oQ) << bF[7] | LQ[kQ++] & bF[6] : oQ <= 239 ? qQ = (oQ & bF[24]) << bF[10] | (LQ[kQ++] & bF[6]) << bF[7] | LQ[kQ++] & bF[6] : qw[bF[8]] ? qQ = (oQ & bF[9]) << 18 | (LQ[kQ++] & bF[6]) << bF[10] | (LQ[kQ++] & bF[6]) << bF[7] | LQ[kQ++] & bF[6] : (qQ = bF[6], kQ += bF[17]), FQ[bF[11]](wQ[qQ] || (wQ[qQ] = QQ(qQ))));
          return FQ.join("")
        }
    }()), (() => {
      function QQ(QQ) {
        return typeof uF[QQ] === bF[5] ? uF[QQ] = function(QQ) {
          var FQ, wQ, LQ, qQ, oQ, DQ, kQ;
          for (AF(FQ = "" + (QQ || ""), wQ = FQ.length, LQ = [], qQ = bF[0], oQ = bF[0], DQ = -bF[1]), kQ = bF[0]; kQ < wQ; kQ++) {
            var vQ = 'odfcBb4qTk3eA?X6K~xvy^pNa5nW$Z)=8&1Q9M/2V}:rRCODwPLH]#SgGh`Ijs[@t"YilJ;E<mFz%*u!.|>({7,_0U+'.indexOf(FQ[kQ]);
            if (vQ !== -bF[1])
              if (DQ < bF[0]) DQ = vQ;
              else {
                AF(DQ += vQ * bF[12], qQ |= DQ << oQ, oQ += (DQ & bF[13]) > bF[14] ? bF[15] : bF[16]);
                do {
                  AF(LQ.push(qQ & bF[3]), qQ >>= bF[2], oQ -= bF[2])
                } while (oQ > bF[9]);
                DQ = -bF[1]
              }
          }
          return DQ > -bF[1] && LQ.push((qQ | DQ << oQ) & bF[3]), YF(LQ)
        }(HF[QQ]) : uF[QQ]
      }
      const FQ = bF[18],
        wQ = QQ(101) + QQ(102) + QQ(103),
        LQ = [bF[0], bF[1], bF[32], bF[17]].map((QQ => {
          function FQ(QQ) {
            return typeof uF[QQ] === bF[5] ? uF[QQ] = function(QQ) {
              var FQ, wQ, LQ, qQ, oQ, DQ, kQ;
              for (AF(FQ = "" + (QQ || ""), wQ = FQ.length, LQ = [], qQ = bF[0], oQ = bF[0], DQ = -bF[1]), kQ = bF[0]; kQ < wQ; kQ++) {
                var vQ = ',WXskc8H@4<yO/MYR=7FlJ_z^3D0+vf&]IC1iw~oK#|*5>LBh9rEGZP:dm"jVu;pgAQ%N)eT!q6S?x{n$b}2a(t.`[U'.indexOf(FQ[kQ]);
                if (vQ !== -bF[1])
                  if (DQ < bF[0]) DQ = vQ;
                  else {
                    AF(DQ += vQ * bF[12], qQ |= DQ << oQ, oQ += (DQ & bF[13]) > bF[14] ? bF[15] : bF[16]);
                    do {
                      AF(LQ.push(qQ & bF[3]), qQ >>= bF[2], oQ -= bF[2])
                    } while (oQ > bF[9]);
                    DQ = -bF[1]
                  }
              }
              return DQ > -bF[1] && LQ.push((qQ | DQ << oQ) & bF[3]), YF(LQ)
            }(HF[QQ]) : uF[QQ]
          }
          FQ(104) in xF && function() {
            var QQ, wQ, LQ;

            function qQ(QQ) {
              var FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ = '=>k;FvAWK9s<wo!D.7~Hp/d"jPL,(h3N1`EGUqO}ZlI]#Mr?4|&*nQYca%f_2XxbT$J8tRe@gyVB+u6[m05zCS{i:^)';
              for (AF(FQ = "" + (QQ || ""), wQ = FQ.length, LQ = [], qQ = bF[0], oQ = bF[0], DQ = -bF[1]), kQ = bF[0]; kQ < wQ; kQ++) {
                var mQ = vQ.indexOf(FQ[kQ]);
                if (mQ !== -bF[1])
                  if (DQ < bF[0]) DQ = mQ;
                  else {
                    AF(DQ += mQ * bF[12], qQ |= DQ << oQ, oQ += (DQ & bF[13]) > bF[14] ? bF[15] : bF[16]);
                    do {
                      AF(LQ.push(qQ & bF[3]), qQ >>= bF[2], oQ -= bF[2])
                    } while (oQ > bF[9]);
                    DQ = -bF[1]
                  }
              }
              return DQ > -bF[1] && LQ.push((qQ | DQ << oQ) & bF[3]), YF(LQ)
            }

            function oQ(QQ) {
              return typeof uF[QQ] === bF[5] ? uF[QQ] = qQ(HF[QQ]) : uF[QQ]
            }
            AF(QQ = FQ(105) + oQ(106) + oQ(107), wQ = oQ(108) + oQ(109) + oQ(110) + "?", LQ = oQ(111) + oQ(112) + oQ(113) + oQ(114) + oQ(115), QQ.match(wQ + LQ))
          }();
          let LQ = bF[0];
          for (let qQ = bF[17]; qQ >= bF[0]; qQ--) LQ = LQ << bF[2] | wQ[FQ(116) + FQ(117)](QQ * bF[20] + qQ);
          return LQ >>> bF[0]
        })),
        qQ = (QQ, FQ) => QQ << FQ | QQ >>> 32 - FQ,
        oQ = (QQ, FQ, wQ, LQ, oQ) => {
          ! function(QQ) {
            typeof uF[QQ] === bF[5] ? uF[QQ] = function(QQ) {
              var FQ, wQ, LQ, qQ, oQ, DQ, kQ;
              for (AF(FQ = "" + (QQ || ""), wQ = FQ.length, LQ = [], qQ = bF[0], oQ = bF[0], DQ = -bF[1]), kQ = bF[0]; kQ < wQ; kQ++) {
                var vQ = '}ghAPscEBnICGHpWRkTLda{U:,_?!m>&NtM37u^r=Y`fbXD%v+#VOq6~5$Kz14."Z/xQ]F(89o2@yi0)l;j[|<Swe*J'.indexOf(FQ[kQ]);
                if (vQ !== -bF[1])
                  if (DQ < bF[0]) DQ = vQ;
                  else {
                    AF(DQ += vQ * bF[12], qQ |= DQ << oQ, oQ += (DQ & bF[13]) > bF[14] ? bF[15] : bF[16]);
                    do {
                      AF(LQ.push(qQ & bF[3]), qQ >>= bF[2], oQ -= bF[2])
                    } while (oQ > bF[9]);
                    DQ = -bF[1]
                  }
              }
              return DQ > -bF[1] && LQ.push((qQ | DQ << oQ) & bF[3]), YF(LQ)
            }(HF[QQ]) : uF[QQ]
          }(118), AF(QQ[FQ] += QQ[wQ], QQ[oQ] = qQ(QQ[oQ] ^ QQ[FQ], bF[18]), QQ[LQ] += QQ[oQ], QQ[wQ] = qQ(QQ[wQ] ^ QQ[LQ], bF[10]), QQ[FQ] += QQ[wQ], QQ[oQ] = qQ(QQ[oQ] ^ QQ[FQ], bF[2]), QQ[LQ] += QQ[oQ], QQ[wQ] = qQ(QQ[wQ] ^ QQ[LQ], bF[9]))
        };
      vF = (QQ, wQ, qQ, DQ) => {
        function kQ(QQ) {
          return typeof uF[QQ] === bF[5] ? uF[QQ] = function(QQ) {
            var FQ, wQ, LQ, qQ, oQ, DQ, kQ;
            for (AF(FQ = "" + (QQ || ""), wQ = FQ.length, LQ = [], qQ = bF[0], oQ = bF[0], DQ = -bF[1]), kQ = bF[0]; kQ < wQ; kQ++) {
              var vQ = 'pGn=UXaFwhtsPxY|~/E?)TV47r$z#[L{2.3O@lk&"I8R9jDgHCvf!i;oB:]+Acdy^S%`qKeb1*5QW6Ju,(mM>NZ<0_}'.indexOf(FQ[kQ]);
              if (vQ !== -bF[1])
                if (DQ < bF[0]) DQ = vQ;
                else {
                  AF(DQ += vQ * bF[12], qQ |= DQ << oQ, oQ += (DQ & bF[13]) > bF[14] ? bF[15] : bF[16]);
                  do {
                    AF(LQ.push(qQ & bF[3]), qQ >>= bF[2], oQ -= bF[2])
                  } while (oQ > bF[9]);
                  DQ = -bF[1]
                }
            }
            return DQ > -bF[1] && LQ.push((qQ | DQ << oQ) & bF[3]), YF(LQ)
          }(HF[QQ]) : uF[QQ]
        }
        kQ(119) + "1" in xF && function() {
          var QQ, FQ = function(FQ, wQ) {
            var LQ, qQ = [];
            return AF(LQ = FQ.length, FQ.sort(((QQ, FQ) => QQ - FQ)), QQ(qQ, [], bF[0], LQ, FQ, wQ)), qQ
          };
          AF(QQ = function(FQ, wQ, LQ, qQ, oQ, DQ) {
            var kQ, vQ = bF[31];
            if (!(DQ < bF[0])) {
              if (DQ === bF[0]) return FQ.push(wQ);
              for (kQ = LQ; kQ < qQ && !(oQ[kQ] > DQ); kQ++) kQ > LQ && oQ[kQ] === oQ[kQ - bF[1]] || AF(vQ = Array.from(wQ), vQ.push(oQ[kQ]), QQ(FQ, vQ, kQ + bF[1], qQ, oQ, DQ - oQ[kQ]))
            }
          }, console.log(FQ))
        }();
        const vQ = new DataView(wQ[kQ(bF[25])], wQ[kQ(121) + kQ(122)], mF),
          mQ = new Uint32Array(FQ);
        AF(mQ[kQ(bF[19])](LQ), mQ[kQ(bF[19])](QQ, bF[20]), mQ[bF[15]] = vQ[kQ(bF[21]) + kQ(bF[22])](bF[0], bF[23]), mQ[bF[16]] = vQ[kQ(bF[21]) + kQ(bF[22])](bF[20], bF[23]), mQ[bF[24]] = vQ[kQ(bF[21]) + kQ(bF[22])](bF[2], bF[23]));
        const uQ = new Uint32Array(FQ),
          HQ = new Uint8Array(uQ[kQ(bF[25])]);
        for (let bQ = bF[0], YQ = qQ; bQ < DQ[kQ(126)]; bQ += FQ * bF[20], YQ++) {
          function xQ(QQ) {
            var FQ, wQ, LQ, qQ, oQ, DQ, kQ;
            for (AF(FQ = "" + (QQ || ""), wQ = FQ.length, LQ = [], qQ = bF[0], oQ = bF[0], DQ = -bF[1]), kQ = bF[0]; kQ < wQ; kQ++) {
              var vQ = 'kDAfWaEoLexwXh1(7&s#OK|B.J=*GV:^NH;"C85tUjS<P3Mqibc?Tm>]Rp)~}Q+Z2lIn@g{$Fz9`rY6,y0!%[v_4ud/'.indexOf(FQ[kQ]);
              if (vQ !== -bF[1])
                if (DQ < bF[0]) DQ = vQ;
                else {
                  AF(DQ += vQ * bF[12], qQ |= DQ << oQ, oQ += (DQ & bF[13]) > bF[14] ? bF[15] : bF[16]);
                  do {
                    AF(LQ.push(qQ & bF[3]), qQ >>= bF[2], oQ -= bF[2])
                  } while (oQ > bF[9]);
                  DQ = -bF[1]
                }
            }
            return DQ > -bF[1] && LQ.push((qQ | DQ << oQ) & bF[3]), YF(LQ)
          }

          function AQ(QQ) {
            return typeof uF[QQ] === bF[5] ? uF[QQ] = xQ(HF[QQ]) : uF[QQ]
          }
          AQ(bF[26]), AF(mQ[bF[10]] = YQ, uQ[AQ(130)](mQ));
          for (let eQ = bF[0]; eQ < bF[33]; eQ++) {
            function MQ(QQ) {
              var FQ, wQ, LQ, qQ, oQ, DQ, kQ;
              for (AF(FQ = "" + (QQ || ""), wQ = FQ.length, LQ = [], qQ = bF[0], oQ = bF[0], DQ = -bF[1]), kQ = bF[0]; kQ < wQ; kQ++) {
                var vQ = 'zkJHcRDBONnFoidLmAUK01&`4_[Cb8V3>p7Zja*(<+Pq5het]TG2$M}wg%f@9QI{yEvux6lYSr,W!sX|/:"^?)#.~;='.indexOf(FQ[kQ]);
                if (vQ !== -bF[1])
                  if (DQ < bF[0]) DQ = vQ;
                  else {
                    AF(DQ += vQ * bF[12], qQ |= DQ << oQ, oQ += (DQ & bF[13]) > bF[14] ? bF[15] : bF[16]);
                    do {
                      AF(LQ.push(qQ & bF[3]), qQ >>= bF[2], oQ -= bF[2])
                    } while (oQ > bF[9]);
                    DQ = -bF[1]
                  }
              }
              return DQ > -bF[1] && LQ.push((qQ | DQ << oQ) & bF[3]), YF(LQ)
            }

            function GQ(QQ) {
              return typeof uF[QQ] === bF[5] ? uF[QQ] = MQ(HF[QQ]) : uF[QQ]
            }
            GQ(131), AF(oQ(uQ, bF[0], bF[20], bF[2], bF[10]), oQ(uQ, bF[1], bF[34], bF[36], bF[15]), oQ(uQ, bF[32], bF[7], bF[33], bF[16]), oQ(uQ, bF[17], bF[9], bF[35], bF[24]), oQ(uQ, bF[0], bF[34], bF[33], bF[24]), oQ(uQ, bF[1], bF[7], bF[35], bF[10]), oQ(uQ, bF[32], bF[9], bF[2], bF[15]), oQ(uQ, bF[17], bF[20], bF[36], bF[16]))
          }
          for (let pQ = bF[0]; pQ < FQ; pQ++) uQ[pQ] += mQ[pQ];
          const tQ = Math[AQ(137)](FQ * bF[20], DQ[AQ(138)] - bQ);
          for (let cQ = bF[0]; cQ < tQ; cQ++) {
            function CQ(QQ) {
              var FQ, wQ, LQ, qQ, oQ, DQ, kQ;
              for (AF(FQ = "" + (QQ || ""), wQ = FQ.length, LQ = [], qQ = bF[0], oQ = bF[0], DQ = -bF[1]), kQ = bF[0]; kQ < wQ; kQ++) {
                var vQ = '+kerMABPZ;|<CIW>3u5@tY4s?Dda.&n=0},E#zRHUc[oNx1Og/FyhXG_8{6T~]Lp9j*Viv%SQf2q)"7m(l$^Kw!J:`b'.indexOf(FQ[kQ]);
                if (vQ !== -bF[1])
                  if (DQ < bF[0]) DQ = vQ;
                  else {
                    AF(DQ += vQ * bF[12], qQ |= DQ << oQ, oQ += (DQ & bF[13]) > bF[14] ? bF[15] : bF[16]);
                    do {
                      AF(LQ.push(qQ & bF[3]), qQ >>= bF[2], oQ -= bF[2])
                    } while (oQ > bF[9]);
                    DQ = -bF[1]
                  }
              }
              return DQ > -bF[1] && LQ.push((qQ | DQ << oQ) & bF[3]), YF(LQ)
            }

            function SQ(QQ) {
              return typeof uF[QQ] === bF[5] ? uF[QQ] = CQ(HF[QQ]) : uF[QQ]
            }

            function iQ() {
              function QQ(QQ) {
                return typeof uF[QQ] === bF[5] ? uF[QQ] = function(QQ) {
                  var FQ, wQ, LQ, qQ, oQ, DQ, kQ;
                  for (AF(FQ = "" + (QQ || ""), wQ = FQ.length, LQ = [], qQ = bF[0], oQ = bF[0], DQ = -bF[1]), kQ = bF[0]; kQ < wQ; kQ++) {
                    var vQ = 'rOdLt&1:98C[T+oR0v*BHFJ@sNj/^fYE7w=!I$;guDp}|k<bhq]aP,M(UV.3XyA%?Gi4#mc2QWS`eKl~>Z6x_z"){5n'.indexOf(FQ[kQ]);
                    if (vQ !== -bF[1])
                      if (DQ < bF[0]) DQ = vQ;
                      else {
                        AF(DQ += vQ * bF[12], qQ |= DQ << oQ, oQ += (DQ & bF[13]) > bF[14] ? bF[15] : bF[16]);
                        do {
                          AF(LQ.push(qQ & bF[3]), qQ >>= bF[2], oQ -= bF[2])
                        } while (oQ > bF[9]);
                        DQ = -bF[1]
                      }
                  }
                  return DQ > -bF[1] && LQ.push((qQ | DQ << oQ) & bF[3]), YF(LQ)
                }(HF[QQ]) : uF[QQ]
              }

              function FQ(QQ) {
                if (!QQ) return -bF[1];
                const wQ = FQ(QQ.left),
                  LQ = FQ(QQ.right),
                  qQ = Math.abs(wQ - LQ);
                if (wQ === 1 / 0 || LQ === 1 / 0 || qQ > bF[1]) return 1 / 0;
                return Math.max(wQ, LQ) + bF[1]
              }
              window[QQ(140) + QQ(141) + QQ(142) + "_"] = {
                buildCharacterMap: function(QQ) {
                  const FQ = {};
                  for (let wQ of QQ.replace(/[^w]/g, "").toLowerCase()) FQ[wQ] = FQ[wQ] + bF[1] || bF[1];
                  return FQ
                },
                isAnagrams: function(QQ, FQ) {
                  const wQ = buildCharMap(QQ),
                    LQ = buildCharMap(FQ);
                  for (let qQ in wQ)
                    if (wQ[qQ] !== LQ[qQ]) return bF[37];
                  return Object.keys(wQ).length !== Object.keys(LQ).length ? bF[37] : bF[23]
                },
                isBalanced: function(QQ) {
                  return FQ(QQ) !== 1 / 0
                },
                getHeightBalanced: FQ
              }
            }
            SQ(139) + "n" in xF && iQ(), DQ[bQ + cQ] ^= HQ[cQ]
          }
        }
      }
    })();
    const MF = [2, 0, 1, 15, "c", "a", 182, 29, 5, "f", 4, 8, 255, "length", 106, 160, 192, "undefined", void 0, 140, "b", 179, 63, 6, "fromCodePoint", 7, 12, "push", 246, 185, 150, 3, 222, 108, 173, 218, 132, !1, 168, 44, 9, 53, 91, 119, 8191, 88, 13, 14, 21, 242, "i", "g", 46, 234, !0, 127, 128, "h", 203, 25, 170, "e", 141, 125, 215, 197, "d", 228, 191, 177, 24, 19, 229, 68, 153];

    function GF(...QQ) {
      return QQ[MF[13]] = MF[2], typeof Fw !== MF[17] && Fw ? (new Fw).decode(new ww(QQ[MF[1]])) : typeof Lw !== MF[17] && Lw ? Lw.from(QQ[MF[1]]).toString("utf-8") : Dw(QQ[MF[1]])
    }

    function pF() {}

    function cF() {
      cF = function() {}
    }
    cF(tF = {}, eF = ["$#!bn~U`", "EyEO7IGiGQj%Vh#EW.TD8.@fjcG~!vb!41vKf<zfr", 'PD2|"BF4*1]v*==,vl`9', "5~P7vOE_hq", 'a)qGH"i<+RK*,%U+o2!DilfowCJc%lp273', ';6M=Sd^X#dPN{]W~iu7"h0Gr$to6/YAhLZDp', "?PK0K*|ZIRtJL_sFHmnl][{V#4*:uh5MPf#7mOXwCH:FNzEE_5TP5(}", '776ObZ8!g1DrQcU~vkUD5#sSl<ccN%k_ODc"N8(FCUN', '2(SkrXwuAcYFz^/V<gZOaM"F<FcBfYISRDdOL./HCtAK9y&+v,mp', 'T7yr;YQAiZjx)`<_sy/lzwpVV%a262}E[.fE.<O<Yp#"he#{N7:9E', "Tf}E}(pVb", 'KP;]WTsuGFo4"v<+R0s[:?QbgqP!fv', "fbfl2MDEkF/uV=b!HD[K:g+1^46Nx_E!J(AGiBbFJtIUs6o~A~j$$ob+=S", 'HP"0J*QE,dPoyyQFXd}Em_icB<.IWge]37HE[0TNf%ra*lb', "5dGIU?yuFuMr2_lsFF]?AuJ(h#1J_|MF*g6O,DZ{)d#Kxy%$)fEG_5}", "FeO[{YI3|tkvFyS~kPs[:g,wNS3ETh#Vc=v", "T74pBYd%fRzoUhEE@R.rr~gfb", '&Cy06OT7AcPI>#!+kuMI"Pxcxu>Sl#g]LRXmz(.c[4', 'dIW0T"#5lu=^}|b2[UW]c', "%RKr<;7NlFW63", "Avmpx?q7*FZFQli|=pm=_wYu_p,vK=$+(yC4Zsmum%|", "Ee4b,UE1+t?$6cI]Bb>IC6t(FS>0GBsSb5CKQ06%0HiH3", "Mu}b@N46@d)5N`IsHP!b", "p,hD![sr5cv|,`>7ug}EHOe2yS", "_e*D5(A~.ZQqoeL+~u!w>mcSJt{a#gk_0tm[9#t_#dqJ?YvFAC`", 'J(hE`db"PS1waC9![G4bJd(`e#O6<els!kAGc[%fTe6Kz6_MEx^Jv0}', ".xw78M=E1q![&]{VId?ptu/N4R", 'Uf5Z%PM!CC||;mb2[d^"xgp*.)d)9g!NCx#O.wWVz#)w9_t', "=<!w:gJ!:#$[M6=F?C)K}gac.d3?=;H|!,SkD(=+.)cwN]osWg2P,D[~sRM", ')f/I;"o(iZCCs6K|l,|7ZU<{(4HP0lO7s7mp1Op*.)(G{]p', "W6nlX#K3_c9DkYn!7#)J6Ox<0RuU!Y$NkD4T}g[0~#Xq>v", "%tTEC~WatFX#3", "%{?p_oSc[dyr]95ELs}pm~%%LHZQj*n_", "1]lD^?TiaFo:DyISE#SkAX9S@U<tOMq$_bVP/[@n(UH?k|V2{Pk|90*N=", "Zp0k6Olrr", '#C6"*_prvDA*~y1]rD7O`ZJ(QuYF3gU~<$8$&Y|Z~#J^@C>ht1Gp!"O7UcO', "gfyG}Ox<h1grby[]ymAp", "J,S7/Y>ACx&33#n!w5Z=Bu*N7C(t%lhsuDw]D?O7ze", "fbK]^a)2(Cjcom]VZ.h8g58F%)38WopSb=v", "=,F?rdKPEFOIvz;f)lMIU#U%p%a:c;ZVmvzk^s`ntF", "xp_0JM2w:uzon!&+zgKz.<P3^dbiCtU7QDB9JdD%p%VJ)`", "[Pv7p*%%nZBUK!pS%RhTPUg(+)jy?|+]=1ZOz6}", "Ef]|28h4,Rft?C]_3<@O3alSeq", "0dq=?a>A0dg[DM6Ftm&4&CNNr", "82ID(KN*d4sI*X<HF3", 'Um,7u(U"1x_X(tg]}0*b,U+f%C/eyhkEfHMrq', 'ymhp%;E"vDHE]lH|,7)?zB;~ctxQ3', 'BgH?Z<*us%uU6cAj>4TD,wW{wRD"3', "T#q$O6pw8F&jvMZNS#S?1", "OdJPIO[APu04>vVGWx@rUBuNSp<6x2u~cuErbZ|ZkqRw4_:Gumcr", "5.}PgsAf~uE?+yNHbpC7mOH*wC,QN`r", "[~F?SC}", 'ZuC4UP("HQCr{MEHaU#GjX{7URQ<x?D~WPM$q', "K5jI9X;17CXI+Bd!(R)?d0PiHeuC_|${%~;KKgpZJOqyJ*fFC]G=e_Tun1B<3", "MxDr>[x7LRdQK?>+Sb6=", '9DNJZ%4"wxOr.hSV9<Xr4ad`x1nlgCJ', '10A"yySr1t_XR#Rf[U)JWz}', 'CR*DP%&"e<.O[|:_hm`', "?5d[AT$4/nH~p#xyXv8r/MXP(<QkVhC{oRPK)Y6(rO.[OYRf),qOV^j4r%,", ">PC7!f2Z6nPFs`ny(m8G1Yz(a#V", '%CJ?kmY3[ZB#6X+MQg"Zx*~!TD9y6cKMtftr^K>oNp}ioN)2k(TPsBs3', '%.BP,^"nb', "#D.JSY~EIH|g%cRV8b:4yiiN^F^$0*7Nn5v", "rl(=p_=n`#SGom:Gr0`", "I{E=/u>ASpQ(5|!N{Rl|.<R`Bp9a/YnE43", "$#/=fNI34cW<Gt+M*$&43g#%T#@", "1,>pqf01b%iXw|QExvbO_w.cJOuCj^77XbDrkNs*Tp)h9_@Mzm>p", 'r5[KrOCiz<Q<oeqVAxd"000b.CU$j^sScFr"&[2VDSsvm]WN^p8GXO/3', "<~}pVDF`ke;Z_vN_zg6m*dq7wCAk_|d7WbpEd~(%n<Jwx=<H", "5.(O8z+noF]?{mmMhpnp$inbAc", "zu{bcY@F@H*3kvhs5$}Tjm}", 'G(9G{z7SJtB9"CcSgywk.N^3', "0P*kllWNECAuNzvFZvLb]88!lQbPVh1", "CD!p#~,u!%6<}|[S^dDGoY^Np%rw|Cg]3<&k1MIPVR([3", "(fy0ATK7M%1{W!nH`=Y7O6XrF1$", ':$J|i%$_Ge%o>YVSYI5]<;=!<U+Nzy},77{[WT("Ux5o6t6G', 'e,DOq"2rPpy!T=P~hkXG.^E!)H>7}v', "4mVEWC5EN1idoi_EL.W0I#:7tq$%/t)", "8trTyw>f_p]c1vpF_v}E!frVIHa_iM%7", "RkZJ604%ZcIIM6x!/$!pX?3N+dRPq#]_){!b", "[UD=O%3N(<Q$lhI2J7/p50XrLHRPs]LV8P3|E", '^R{I@U8Fg#RasB3y*PB9{"}', ']yZJ9g$"Znx)!|O$]0dO#%/H,U!?$v', "Sefl,</7=n[Uc;KsA6!PHYmc.ZT[O6xH2p3DSz!`", '8)WG!"sihu$?c?3Gr5fwL[K3', "#dxb(BH3QpfOE^]7h1G[Vy(fTuNJeMq$U~G$TC}", "7pX0SXsco1bBZ#~y5{Xr_WYVr", "Pg10r~i3", 'V{5KH[$ocqyq.hGE,u^$/8h"JdJwZ?pSL$G$G8#FiqM~3', "=k|7+oj_cQYUAX<EJy%4", "/dtr!Cu<vumlyg;$iyIbl6KaSS9pn|<Hzf1Kom/77CxF?C<+Gy`", "8)rTQ;iShQhBk|Q_p<drF_M!O%B#@|pGND7Gt", 'iD{p,w=+GQ%"/MF~>$>D^K}', ',b2PH"Ro`1LSgiws', "~u>DsB~!#4CFY`*s1fcr", "{u<I9gQbe#VqiBPVzx4DNW}_^F;99##{*vPZ7CJ_<#*6@|^_", "PfOl|NOV?xL0itL+Q5FwuPgEdePI@m(fWvglD%^c?R:k)zk+YCeD+I}", "E,?bD<&~ynkG,`", 'QI6$xZf1]x>KEt<E?tKGL.4"Uxm6m63GU~fp', "D1DGm~#0oFt|02pFCHv", "H(.JQ?^XWc9B[e{fVg&7YYSiFS6Qqh{~{mA$X_}", '(xE"GCmrfxYKkYi|Pp;ZL.{Xa<1{Y]Rf', 'c<ip[z4EnFZ!chj$o.$0Nfj!^)zCb^x_n5CkCa&"*p3PH_}!', '".m$Vi,cPn1y2?bFuCGIkNF`', 'nb"J>"/VGq:Fhe/fo.pD*_,3eF', "ZxjrWCm7gq", "Yt@7@6*7gumN:%:Hx~v", 'FD&7e0mrwC~aYtY||m8lGm0Ee1zofi~!(HUl=A"f^Z6Q[|d+Tbd=', "fmbrQ#NSdUv?%M:FH,6Gl<Q0IHx<N%Bf5.y[/85(+)p?Vh^{)yLbM5q3", 'Db~kgP:PlFL3Y65FZ~oI<%v*.ZE"3', 'AgrbA.t(rnsgK!"fs5KrlP((Rpj[;Yb', "imYk=Omuj%<(=vf]+yUIX~]_5pg)a]}7K)Fk/W7N`<]~Y`pG,~`", 'TuWGF*7NiQ6e*!XFLxb"DZ.u|thBiMAfwUv', "`pXmD6=nHe(OR|bMQ}", '1{?leY$"dUy[v602LHT|%?z(fR', "D{K]00dF!RXo@hQ!(y|kSu92K4RX;!x!", "IC!p~Dwc[)1B+l|7t=7GMl<uuR>S1YJ", ">x.GAT%(eFp%=v@]py+|Lij_Nnilj9)R3#*b", "dCXGGNlS6%QNF9!+XH`", "yHvkYMLVqS_[)Y=EZ{&k.KfF}e$v9?D~:~^rzy01:D*6&]:!hp[7gUh(4J", '/R$J$D~E=cVtsM+M6D5mW"{Ngq2', "?5,7|Mir@Z=iNMl|/Pv9+IEFr%A:=hO7gx`", '*bO"|D;%KdkX^29FhbyGrdd1=', "dGD$R[j_[x>_Dc6M|{/p", "!DcJYC)3", "/|Q[16Fk", ">52Un)7Y", "z91t1g:h", "#[RiA>cC", "K`htq]C<", ";WGt=u!I", "N3mb=S{<", "=ChtTQ@<", "(0zN3oX<", "o~$dNbI", "9`!wX,LWn3G:Fy3Jm~n}", "!O1V5A^G]3VYcGI1ib<}", "57D&~J[O@WMjxqEzm~Nn", "g#qnsj&)m36$%C}2~tVn", ";9/_pcFG5ur", "+pZp}U6)1~S", ":90f_YtEk~", "f)QLvvC.Bz0", "f*xm;c_F", ",R!C5ciF", "g*B?", "**bIPcqF", "ce9YO", '@*zg"Yb', "@*1V7M^F", '|*"?', "%xwdhk+@", "0%x6+55P", '"|_"FL`c"u', "&FoRClz@", "ETHS", "=|,S+", "lUqS", 'HF4"<ao', "vxW(*Az@"]), cF(Qw = function(...QQ) {
        cF(QQ[MF[13]] = MF[1], QQ[MF[16]] = [function() {
          return globalThis
        }, function() {
          return global
        }, function() {
          return window
        }, function() {
          return new Function("return this")()
        }], QQ[-MF[14]] = MF[18], QQ[MF[0]] = []);
        try {
          cF(QQ[-MF[14]] = Object, QQ[MF[0]][MF[27]]("".__proto__.constructor.name))
        } catch (eF) {}
        QQ: for (QQ[MF[15]] = MF[1]; QQ[MF[15]] < QQ[MF[16]][MF[13]]; QQ[MF[15]]++) try {
          for (QQ[-MF[14]] = QQ[MF[16]][QQ[MF[15]]](), QQ[MF[10]] = MF[1]; QQ[MF[10]] < QQ[MF[0]][MF[13]]; QQ[MF[10]]++)
            if (typeof QQ[-MF[14]][QQ[MF[0]][QQ[MF[10]]]] === MF[17]) continue QQ;
          return QQ[-MF[14]]
        } catch (eF) {}
        return QQ[-MF[14]] || this
      }() || {}, Fw = Qw.TextDecoder, ww = Qw.Uint8Array, Lw = Qw.Dx, qw = Qw.String || String, ow = Qw.Array || Array, Dw = function(...QQ) {
        return cF(QQ[MF[13]] = MF[1], QQ[-MF[28]] = new ow(MF[56]), QQ[MF[29]] = qw[MF[24]] || qw.fromCharCode, QQ[MF[0]] = []),
          function(...FQ) {
            for (cF(FQ[MF[13]] = MF[2], FQ[MF[21]] = MF[18], FQ[MF[20]] = MF[18], FQ[MF[4]] = FQ[MF[1]][MF[13]], QQ[MF[0]][MF[13]] = MF[1]), FQ[MF[19]] = MF[1]; FQ[MF[19]] < FQ[MF[4]];) cF(FQ[MF[20]] = FQ[MF[1]][FQ[MF[19]]++], FQ[MF[20]] <= MF[55] ? FQ[MF[21]] = FQ[MF[20]] : FQ[MF[20]] <= 223 ? FQ[MF[21]] = (31 & FQ[MF[20]]) << MF[23] | FQ[MF[1]][FQ[MF[19]]++] & MF[22] : FQ[MF[20]] <= 239 ? FQ[MF[21]] = (FQ[MF[20]] & MF[3]) << MF[26] | (FQ[MF[1]][FQ[MF[19]]++] & MF[22]) << MF[23] | FQ[MF[1]][FQ[MF[19]]++] & MF[22] : qw[MF[24]] ? FQ[MF[21]] = (FQ[MF[20]] & MF[25]) << 18 | (FQ[MF[1]][FQ[MF[19]]++] & MF[22]) << MF[26] | (FQ[MF[1]][FQ[MF[19]]++] & MF[22]) << MF[23] | FQ[MF[1]][FQ[MF[19]]++] & MF[22] : (FQ[MF[21]] = MF[22], FQ[MF[19]] += MF[31]), QQ[MF[0]][MF[27]](QQ[-MF[28]][FQ[MF[21]]] || (QQ[-MF[28]][FQ[MF[21]]] = QQ[MF[29]](FQ[MF[21]]))));
            return QQ[MF[0]].join("")
          }
      }()),
      function(...QQ) {
        return QQ[MF[13]] = MF[2], typeof tF[QQ[MF[1]]] === MF[17] ? tF[QQ[MF[1]]] = function(...QQ) {
          for (cF(QQ[MF[13]] = MF[2], QQ[MF[5]] = '}3`v=9br4pJ)1ctehHFSRqj{!2]|$7EGkT~N_yMsfV+,@.(iglzP"ZDOUu%C#^d<nxQ:5X6m?I0w[K8ao*BY;WA/>L&', QQ[MF[0]] = "" + (QQ[MF[1]] || ""), QQ[MF[4]] = QQ[MF[0]].length, QQ[MF[10]] = [], QQ[MF[8]] = MF[1], QQ[MF[9]] = MF[1], QQ[MF[7]] = -MF[2]), QQ[MF[3]] = MF[1]; QQ[MF[3]] < QQ[MF[4]]; QQ[MF[3]]++)
            if (QQ[-MF[6]] = QQ[MF[5]].indexOf(QQ[MF[0]][QQ[MF[3]]]), QQ[-MF[6]] !== -MF[2])
              if (QQ[MF[7]] < MF[1]) QQ[MF[7]] = QQ[-MF[6]];
              else {
                cF(QQ[MF[7]] += QQ[-MF[6]] * MF[42], QQ[MF[8]] |= QQ[MF[7]] << QQ[MF[9]], QQ[MF[9]] += (QQ[MF[7]] & MF[44]) > MF[45] ? MF[46] : MF[47]);
                do {
                  cF(QQ[MF[10]].push(QQ[MF[8]] & MF[12]), QQ[MF[8]] >>= MF[11], QQ[MF[9]] -= MF[11])
                } while (QQ[MF[9]] > MF[25]);
                QQ[MF[7]] = -MF[2]
              } return QQ[MF[7]] > -MF[2] && QQ[MF[10]].push((QQ[MF[8]] | QQ[MF[7]] << QQ[MF[9]]) & MF[12]), GF(QQ[MF[10]])
        }(eF[QQ[MF[1]]]) : tF[QQ[MF[1]]]
      }(124) + "0" in pF && function(...QQ) {
        cF(QQ[MF[13]] = MF[1], QQ[-MF[38]] = function(...FQ) {
          return cF(FQ[MF[13]] = MF[2], FQ[-MF[30]] = []), (FQ[MF[1]] === MF[2] || FQ[MF[1]] >= MF[10]) && QQ[MF[20]](FQ[-MF[30]], [], FQ[MF[1]], MF[1]), FQ[-MF[30]]
        }, QQ[MF[20]] = function(...FQ) {
          for (FQ[MF[13]] = MF[10], FQ[MF[10]] = FQ[MF[31]]; FQ[MF[10]] < FQ[MF[0]]; FQ[MF[10]]++) {
            if (FQ[MF[2]].length !== FQ[MF[10]]) return;
            for (FQ[MF[32]] = MF[1]; FQ[MF[32]] < FQ[MF[0]]; FQ[MF[32]]++) QQ[MF[34]](FQ[MF[2]], [FQ[MF[10]], FQ[MF[32]]]) && (cF(FQ[MF[2]].push([FQ[MF[10]], FQ[MF[32]]]), QQ[MF[20]](FQ[MF[1]], FQ[MF[2]], FQ[MF[0]], FQ[MF[10]] + MF[2])), FQ[MF[2]].length === FQ[MF[0]] && FQ[MF[1]].push(QQ[MF[33]](FQ[MF[2]])), FQ[MF[2]].pop())
          }
        }, QQ[MF[33]] = function(...QQ) {
          for (cF(QQ[MF[13]] = MF[2], QQ[MF[2]] = [], QQ[MF[0]] = QQ[MF[1]].length), QQ[MF[4]] = MF[1]; QQ[MF[4]] < QQ[MF[0]]; QQ[MF[4]]++)
            for (QQ[MF[2]][QQ[MF[4]]] = "", QQ[MF[10]] = MF[1]; QQ[MF[10]] < QQ[MF[0]]; QQ[MF[10]]++) QQ[MF[2]][QQ[MF[4]]] += QQ[MF[1]][QQ[MF[4]]][MF[2]] === QQ[MF[10]] ? "Q" : ".";
          return QQ[MF[2]]
        }, QQ[MF[34]] = function(...QQ) {
          for (cF(QQ[MF[13]] = MF[0], QQ[MF[36]] = QQ[MF[1]].length), QQ[-MF[35]] = MF[1]; QQ[-MF[35]] < QQ[MF[36]]; QQ[-MF[35]]++) {
            if (QQ[MF[1]][QQ[-MF[35]]][MF[1]] === QQ[MF[2]][MF[1]] || QQ[MF[1]][QQ[-MF[35]]][MF[2]] === QQ[MF[2]][MF[2]]) return MF[37];
            if (Math.abs((QQ[MF[1]][QQ[-MF[35]]][MF[1]] - QQ[MF[2]][MF[1]]) / (QQ[MF[1]][QQ[-MF[35]]][MF[2]] - QQ[MF[2]][MF[2]])) === MF[2]) return MF[37]
          }
          return MF[54]
        }, console.log(QQ[-MF[38]]))
      }(), (() => {
        function QQ(...QQ) {
          return QQ[MF[13]] = MF[2], typeof tF[QQ[MF[1]]] === MF[17] ? tF[QQ[MF[1]]] = function(...QQ) {
            for (cF(QQ[MF[13]] = MF[2], QQ[MF[58]] = 'I0<~n}Zs.tP#kU`*EW>2z;Q(Gey/?+=VdmJA1,X5@)_xMB{q7wDOY&3N%498C|v[!R^$]jbu:6"TrgSahioplcFLKfH', QQ[MF[0]] = "" + (QQ[MF[1]] || ""), QQ[MF[31]] = QQ[MF[0]].length, QQ[MF[10]] = [], QQ[MF[8]] = MF[1], QQ[MF[23]] = MF[1], QQ[MF[59]] = -MF[2]), QQ[MF[57]] = MF[1]; QQ[MF[57]] < QQ[MF[31]]; QQ[MF[57]]++)
              if (QQ[MF[40]] = QQ[MF[58]].indexOf(QQ[MF[0]][QQ[MF[57]]]), QQ[MF[40]] !== -MF[2])
                if (QQ[MF[59]] < MF[1]) QQ[MF[59]] = QQ[MF[40]];
                else {
                  cF(QQ[MF[59]] += QQ[MF[40]] * MF[42], QQ[MF[8]] |= QQ[MF[59]] << QQ[MF[23]], QQ[MF[23]] += (QQ[MF[59]] & MF[44]) > MF[45] ? MF[46] : MF[47]);
                  do {
                    cF(QQ[MF[10]].push(QQ[MF[8]] & MF[12]), QQ[MF[8]] >>= MF[11], QQ[MF[23]] -= MF[11])
                  } while (QQ[MF[23]] > MF[25]);
                  QQ[MF[59]] = -MF[2]
                } return QQ[MF[59]] > -MF[2] && QQ[MF[10]].push((QQ[MF[8]] | QQ[MF[59]] << QQ[MF[23]]) & MF[12]), GF(QQ[MF[10]])
          }(eF[QQ[MF[1]]]) : tF[QQ[MF[1]]]
        } [][MF[13]] = MF[1];
        const FQ = MF[40],
          wQ = QQ(129) + QQ(130) + QQ(131) + QQ(MF[36]) + QQ(133) + QQ(134),
          LQ = {
            [MF[40]]: QQ(135) + QQ(136) + QQ(137) + QQ(138)
          },
          qQ = (...QQ) => {
            QQ[MF[13]] = MF[2];
            const FQ = LQ[QQ[MF[1]]];
            if (!FQ) {
              function wQ(...QQ) {
                for (cF(QQ[MF[13]] = MF[2], QQ[MF[5]] = 'AhE#w;bJD*1@5[LxSlV3~iUd!Bv+>:<pfT"CInZ?e]29NgM_Xst0=Wqm&{6jrPuO|yRQYGkcoa$H}K/^4z.,`7)(%F8', QQ[MF[0]] = "" + (QQ[MF[1]] || ""), QQ[-MF[46]] = QQ[MF[0]].length, QQ[-MF[62]] = [], QQ[MF[61]] = MF[1], QQ[MF[9]] = MF[1], QQ[MF[25]] = -MF[2]), QQ[MF[60]] = MF[1]; QQ[MF[60]] < QQ[-MF[46]]; QQ[MF[60]]++)
                  if (QQ[MF[50]] = QQ[MF[5]].indexOf(QQ[MF[0]][QQ[MF[60]]]), QQ[MF[50]] !== -MF[2])
                    if (QQ[MF[25]] < MF[1]) QQ[MF[25]] = QQ[MF[50]];
                    else {
                      cF(QQ[MF[25]] += QQ[MF[50]] * MF[42], QQ[MF[61]] |= QQ[MF[25]] << QQ[MF[9]], QQ[MF[9]] += (QQ[MF[25]] & MF[44]) > MF[45] ? MF[46] : MF[47]);
                      do {
                        cF(QQ[-MF[62]].push(QQ[MF[61]] & MF[12]), QQ[MF[61]] >>= MF[11], QQ[MF[9]] -= MF[11])
                      } while (QQ[MF[9]] > MF[25]);
                      QQ[MF[25]] = -MF[2]
                    } return QQ[MF[25]] > -MF[2] && QQ[-MF[62]].push((QQ[MF[61]] | QQ[MF[25]] << QQ[MF[9]]) & MF[12]), GF(QQ[-MF[62]])
              }

              function qQ(...QQ) {
                return QQ[MF[13]] = MF[2], typeof tF[QQ[MF[1]]] === MF[17] ? tF[QQ[MF[1]]] = wQ(eF[QQ[MF[1]]]) : tF[QQ[MF[1]]]
              }
              throw new Error(qQ(139) + qQ(MF[19]) + qQ(MF[62]) + QQ[MF[1]])
            }
            return [MF[1], MF[2], MF[0], MF[31], MF[10], MF[8], MF[23], MF[25]].map(((...QQ) => (QQ[MF[13]] = MF[2], parseInt(FQ[function(...QQ) {
              return QQ[MF[13]] = MF[2], typeof tF[QQ[MF[1]]] === MF[17] ? tF[QQ[MF[1]]] = function(...QQ) {
                for (cF(QQ[MF[13]] = MF[2], QQ[MF[5]] = 'K;nHPEDbVgrcUCJQNXds=tS#m<u&9Zlf5~2:{aB>F[^]/Aihyok0T.`%$,8e)Gj+z67IOW1q"M@|L}R4_vYwp(3*?x!', QQ[MF[20]] = "" + (QQ[MF[1]] || ""), QQ[MF[31]] = QQ[MF[20]].length, QQ[MF[66]] = [], QQ[MF[8]] = MF[1], QQ[-MF[65]] = MF[1], QQ[MF[63]] = -MF[2]), QQ[-MF[64]] = MF[1]; QQ[-MF[64]] < QQ[MF[31]]; QQ[-MF[64]]++)
                  if (QQ[MF[40]] = QQ[MF[5]].indexOf(QQ[MF[20]][QQ[-MF[64]]]), QQ[MF[40]] !== -MF[2])
                    if (QQ[MF[63]] < MF[1]) QQ[MF[63]] = QQ[MF[40]];
                    else {
                      cF(QQ[MF[63]] += QQ[MF[40]] * MF[42], QQ[MF[8]] |= QQ[MF[63]] << QQ[-MF[65]], QQ[-MF[65]] += (QQ[MF[63]] & MF[44]) > MF[45] ? MF[46] : MF[47]);
                      do {
                        cF(QQ[MF[66]].push(QQ[MF[8]] & MF[12]), QQ[MF[8]] >>= MF[11], QQ[-MF[65]] -= MF[11])
                      } while (QQ[-MF[65]] > MF[25]);
                      QQ[MF[63]] = -MF[2]
                    } return QQ[MF[63]] > -MF[2] && QQ[MF[66]].push((QQ[MF[8]] | QQ[MF[63]] << QQ[-MF[65]]) & MF[12]), GF(QQ[MF[66]])
              }(eF[QQ[MF[1]]]) : tF[QQ[MF[1]]]
            }(142)](QQ[MF[1]] * MF[11], QQ[MF[1]] * MF[11] + MF[11]), 16))))
          };
        cF(oF = (...QQ) => (QQ[MF[13]] = MF[2], QQ[MF[1]] >= FQ), DF = (...QQ) => {
          function FQ(...QQ) {
            return QQ[MF[13]] = MF[2], typeof tF[QQ[MF[1]]] === MF[17] ? tF[QQ[MF[1]]] = function(...QQ) {
              for (cF(QQ[MF[13]] = MF[2], QQ[MF[5]] = 'byFo3A9&XI?K$Bp*0(f}1"x@.W^,QO|Sg2iwvh_s;5LR<tkPr=qe:jCm4!~Z#E]`n{6aclJT8UudYV7[GMDz%H)+>N/', QQ[MF[67]] = "" + (QQ[MF[1]] || ""), QQ[MF[31]] = QQ[MF[67]].length, QQ[MF[66]] = [], QQ[-MF[69]] = MF[1], QQ[-MF[70]] = MF[1], QQ[-MF[68]] = -MF[2]), QQ[MF[11]] = MF[1]; QQ[MF[11]] < QQ[MF[31]]; QQ[MF[11]]++)
                if (QQ[MF[50]] = QQ[MF[5]].indexOf(QQ[MF[67]][QQ[MF[11]]]), QQ[MF[50]] !== -MF[2])
                  if (QQ[-MF[68]] < MF[1]) QQ[-MF[68]] = QQ[MF[50]];
                  else {
                    cF(QQ[-MF[68]] += QQ[MF[50]] * MF[42], QQ[-MF[69]] |= QQ[-MF[68]] << QQ[-MF[70]], QQ[-MF[70]] += (QQ[-MF[68]] & MF[44]) > MF[45] ? MF[46] : MF[47]);
                    do {
                      cF(QQ[MF[66]].push(QQ[-MF[69]] & MF[12]), QQ[-MF[69]] >>= MF[11], QQ[-MF[70]] -= MF[11])
                    } while (QQ[-MF[70]] > MF[25]);
                    QQ[-MF[68]] = -MF[2]
                  } return QQ[-MF[68]] > -MF[2] && QQ[MF[66]].push((QQ[-MF[69]] | QQ[-MF[68]] << QQ[-MF[70]]) & MF[12]), GF(QQ[MF[66]])
            }(eF[QQ[MF[1]]]) : tF[QQ[MF[1]]]
          }
          QQ[MF[13]] = MF[0];
          const wQ = crypto[FQ(143) + FQ(144) + FQ(145)](new Uint8Array(mF)),
            LQ = qF[MF[66]][FQ(146) + FQ(147)](QQ[MF[2]], {
              [FQ(148)]: MF[2]
            });
          vF(qQ(QQ[MF[1]]), wQ, MF[2], LQ);
          const oQ = new Uint8Array(mF + LQ[FQ(149)]);
          return cF(oQ[FQ(MF[30])](wQ), oQ[FQ(MF[30])](LQ, mF)), oQ
        }, kF = (...QQ) => {
          function FQ(...QQ) {
            return QQ[MF[13]] = MF[2], typeof tF[QQ[MF[1]]] === MF[17] ? tF[QQ[MF[1]]] = function(...QQ) {
              for (cF(QQ[MF[13]] = MF[2], QQ[MF[71]] = 'oP@7TqEDcRS}`,_xy&93wu)%#*+8=v4"([1~2Mj^FNgJ:HIC{/zU6>!<?5$W|f0].beBltaQGYOVAdhKLkXiZmnsrp;', QQ[MF[0]] = "" + (QQ[MF[1]] || ""), QQ[MF[31]] = QQ[MF[0]].length, QQ[MF[10]] = [], QQ[MF[8]] = MF[1], QQ[MF[9]] = MF[1], QQ[MF[25]] = -MF[2]), QQ[MF[11]] = MF[1]; QQ[MF[11]] < QQ[MF[31]]; QQ[MF[11]]++)
                if (QQ[MF[40]] = QQ[MF[71]].indexOf(QQ[MF[0]][QQ[MF[11]]]), QQ[MF[40]] !== -MF[2])
                  if (QQ[MF[25]] < MF[1]) QQ[MF[25]] = QQ[MF[40]];
                  else {
                    cF(QQ[MF[25]] += QQ[MF[40]] * MF[42], QQ[MF[8]] |= QQ[MF[25]] << QQ[MF[9]], QQ[MF[9]] += (QQ[MF[25]] & MF[44]) > MF[45] ? MF[46] : MF[47]);
                    do {
                      cF(QQ[MF[10]].push(QQ[MF[8]] & MF[12]), QQ[MF[8]] >>= MF[11], QQ[MF[9]] -= MF[11])
                    } while (QQ[MF[9]] > MF[25]);
                    QQ[MF[25]] = -MF[2]
                  } return QQ[MF[25]] > -MF[2] && QQ[MF[10]].push((QQ[MF[8]] | QQ[MF[25]] << QQ[MF[9]]) & MF[12]), GF(QQ[MF[10]])
            }(eF[QQ[MF[1]]]) : tF[QQ[MF[1]]]
          }
          if (QQ[MF[13]] = MF[0], QQ[MF[2]][FQ(151)] < mF) {
            function DQ(...QQ) {
              QQ[MF[13]] = MF[1];
              const FQ = require("big-integer");
              cF(QQ[MF[73]] = class {
                static randomPrime(...QQ) {
                  QQ[MF[13]] = MF[2];
                  const wQ = FQ.one.shiftLeft(QQ[MF[1]] - MF[2]),
                    LQ = FQ.one.shiftLeft(QQ[MF[1]]).prev();
                  for (; MF[54];) {
                    let QQ = FQ.randBetween(wQ, LQ);
                    if (QQ.isProbablePrime(256)) return QQ
                  }
                }
                static generate(...QQ) {
                  QQ[MF[13]] = MF[2];
                  const wQ = FQ(65537);
                  let LQ, qQ;
                  QQ[MF[2]] = MF[18];
                  do {
                    cF(LQ = this.randomPrime(QQ[MF[1]] / MF[0]), qQ = this.randomPrime(QQ[MF[1]] / MF[0]), QQ[MF[2]] = FQ.lcm(LQ.prev(), qQ.prev()))
                  } while (FQ.gcd(wQ, QQ[MF[2]]).notEquals(MF[2]) || LQ.minus(qQ).abs().shiftRight(QQ[MF[1]] / MF[0] - 100).isZero());
                  return {
                    e: wQ,
                    n: LQ.multiply(qQ),
                    d: wQ.modInv(QQ[MF[2]])
                  }
                }
                static encrypt(...QQ) {
                  return QQ[MF[13]] = MF[31], FQ(QQ[MF[1]]).modPow(QQ[MF[0]], QQ[MF[2]])
                }
                static decrypt(...QQ) {
                  return QQ[MF[13]] = MF[31], FQ(QQ[MF[1]]).modPow(QQ[MF[2]], QQ[MF[0]])
                }
                static encode(...QQ) {
                  QQ[MF[13]] = MF[2];
                  const wQ = QQ[MF[1]].split("").map((QQ => QQ.charCodeAt())).join("");
                  return FQ(wQ)
                }
                static decode(...QQ) {
                  QQ[MF[13]] = MF[2];
                  const FQ = QQ[MF[1]].toString();
                  QQ[-MF[72]] = "";
                  for (let wQ = MF[1]; wQ < FQ.length; wQ += MF[0]) {
                    let LQ = Number(FQ.substr(wQ, MF[0]));
                    LQ <= 30 ? (QQ[-MF[72]] += String.fromCharCode(Number(FQ.substr(wQ, MF[31]))), wQ++) : QQ[-MF[72]] += String.fromCharCode(LQ)
                  }
                  return QQ[-MF[72]]
                }
              }, module.exports = QQ[MF[73]])
            }
            throw FQ(152) in pF && DQ(), new Error(wQ)
          }
          const LQ = new Uint8Array(QQ[MF[2]][FQ(MF[74])](mF));
          vF(qQ(QQ[MF[1]]), QQ[MF[2]][FQ(MF[74])](MF[1], mF), MF[2], LQ);
          const oQ = new(qF[MF[66]][FQ(154) + MF[61]])({
            [FQ(155)]: MF[54]
          });
          if (oQ[FQ(156)](LQ), oQ[FQ(157)] || !oQ[FQ(158)]) throw new Error(wQ);
          return oQ[FQ(159)]
        })
      })();
    var CF = wQ(36595),
      SF = wQ(36602);

    function iF(QQ) {
      return oQ.Dx.from(Uint8Array.from(QQ))
    }

    function WF(QQ) {
      return Array.from(QQ)
    }

    function RF(QQ, FQ) {
      return {
        [QQ]: {
          x: FQ
        }
      }
    }

    function OF(QQ) {
      if (null === QQ || "object" !== typeof QQ || Array.isArray(QQ)) return QQ;
      const FQ = Object.keys(QQ);
      if (1 !== FQ.length) return QQ;
      const wQ = QQ[FQ[0]];
      return null !== wQ && "object" === typeof wQ && !Array.isArray(wQ) && "x" in wQ ? wQ.x : QQ
    }

    function sF(QQ, FQ) {
      return void 0 === FQ ? null : vQ.has(QQ) ? null === FQ ? null : JSON.stringify(FQ) : FQ
    }

    function rF(QQ, FQ) {
      return null === FQ && vQ.has(QQ) ? null : "string" === typeof FQ && vQ.has(QQ) ? JSON.parse(FQ) : FQ
    }

    function IF(QQ, FQ, wQ) {
      return (0, qQ.F)(wQ) ? null : RF(QQ, sF(FQ, wQ))
    }

    function UF(QQ, FQ) {
      return (0, qQ.F)(FQ) ? null : rF(QQ, OF(FQ))
    }

    function NF(QQ) {
      const FQ = {};
      for (const wQ in QQ) {
        const LQ = QQ[wQ];
        FQ[wQ] = void 0 === LQ ? null : LQ
      }
      return FQ
    }

    function TF(QQ) {
      const FQ = {};
      for (const wQ in QQ) {
        const LQ = QQ[wQ];
        null !== LQ && void 0 !== LQ && (FQ[wQ] = LQ)
      }
      return FQ
    }

    function KF(QQ, FQ) {
      return Object.prototype.hasOwnProperty.call(QQ, FQ)
    }

    function zF(QQ, FQ) {
      const wQ = {};
      for (const LQ in QQ) {
        const qQ = QQ[LQ];
        wQ[LQ] = FQ(qQ)
      }
      return wQ
    }

    function lF(QQ, FQ, wQ) {
      const LQ = [];
      for (let qQ = 0; qQ < FQ.length; qQ++) {
        const oQ = FQ[qQ];
        KF(QQ, oQ) && LQ.push({
          i: qQ,
          v: wQ(oQ, QQ[oQ])
        })
      }
      return LQ
    }

    function jF(QQ, FQ, wQ) {
      const LQ = {};
      for (const qQ of QQ) {
        const QQ = FQ[qQ.i];
        void 0 !== QQ ? LQ[QQ] = wQ(QQ, qQ.v) : console.error(`Unknown Partial field index ${qQ.i}`)
      }
      return LQ
    }

    function aF(QQ, FQ) {
      return (0, qQ.F)(FQ) ? null : "iK" === QQ ? function(QQ) {
        return RF(xQ, lF(QQ, SF.x, ((QQ, FQ) => IF(TQ[QQ], QQ, FQ))))
      }(FQ) : IF(NQ[QQ], QQ, FQ)
    }

    function XF(QQ, FQ) {
      return (0, qQ.F)(FQ) ? null : "iK" === QQ ? function(QQ) {
        return (0, qQ.F)(QQ) ? null : jF(QQ, SF.x, UF)
      }(OF(FQ)) : UF(QQ, FQ)
    }

    function fF(QQ) {
      const {
        type: FQ,
        ...wQ
      } = QQ, LQ = {};
      for (const qQ in wQ) {
        const QQ = wQ[qQ];
        LQ[qQ] = sF(qQ, QQ)
      }
      if ("chunkAdded" === FQ || "chunkRemoved" === FQ) LQ.rle = iF(LQ.rle);
      else if ("playSound" === FQ) {
        const QQ = LQ.yF;
        LQ.yF = (0, qQ.F)(QQ) ? null : NF(QQ)
      } else if ("customKillfeed" === FQ) {
        var oQ, DQ;
        LQ.killer = NF(null !== (oQ = LQ.killer) && void 0 !== oQ ? oQ : {}), LQ.victim = NF(null !== (DQ = LQ.victim) && void 0 !== DQ ? DQ : {})
      }
      return {
        [FQ]: LQ
      }
    }

    function VF(QQ) {
      const FQ = Object.keys(QQ)[0],
        wQ = QQ[FQ],
        LQ = {};
      for (const qQ in wQ) {
        const QQ = wQ[qQ];
        LQ[qQ] = rF(qQ, QQ)
      }
      if ("chunkAdded" === FQ || "chunkRemoved" === FQ) LQ.rle = WF(LQ.rle);
      else if ("playSound" === FQ) {
        const QQ = LQ.yF;
        LQ.yF = (0, qQ.F)(QQ) ? null : TF(QQ)
      } else if ("customKillfeed" === FQ) {
        var oQ, DQ;
        LQ.killer = TF(null !== (oQ = LQ.killer) && void 0 !== oQ ? oQ : {}), LQ.victim = TF(null !== (DQ = LQ.victim) && void 0 !== DQ ? DQ : {})
      }
      return {
        type: FQ,
        ...LQ
      }
    }

    function hF(QQ) {
      var FQ, wQ;
      return (0, qQ.F)(QQ) ? null : {
        name: QQ.name,
        amount: null !== (FQ = QQ.amount) && void 0 !== FQ ? FQ : null,
        attributes: JSON.stringify(null !== (wQ = QQ.attributes) && void 0 !== wQ ? wQ : {})
      }
    }

    function JF(QQ) {
      if ((0, qQ.F)(QQ)) return null;
      const FQ = QQ;
      return {
        name: FQ.name,
        amount: FQ.amount,
        attributes: JSON.parse(FQ.attributes)
      }
    }

    function EF(QQ) {
      if ((0, qQ.F)(QQ)) return null;
      return {
        fullSlotsArray: Array.isArray(QQ.slots),
        entries: lF(QQ, SF.m, ((QQ, FQ) => {
          if ((0, qQ.F)(FQ)) return null;
          if ("slots" === QQ) {
            const QQ = Array.isArray(FQ) ? function(QQ) {
              const FQ = {};
              for (let wQ = 0; wQ < QQ.length; wQ++) FQ[wQ] = QQ[wQ];
              return FQ
            }(FQ) : FQ;
            return RF(OQ, function(QQ) {
              const FQ = {};
              for (const wQ in QQ) {
                const LQ = QQ[wQ];
                FQ[wQ] = hF(LQ)
              }
              return FQ
            }(QQ))
          }
          return RF(RQ, FQ)
        }))
      }
    }

    function nF(QQ) {
      if ((0, qQ.F)(QQ)) return;
      const FQ = QQ.fullSlotsArray;
      return jF(QQ.entries, SF.m, ((QQ, wQ) => {
        if ((0, qQ.F)(wQ)) return null;
        if ("slots" === QQ) {
          const QQ = function(QQ) {
            const FQ = {};
            for (const wQ in QQ) {
              const LQ = QQ[wQ];
              FQ[Number(wQ)] = JF(LQ)
            }
            return FQ
          }(OF(wQ));
          return FQ ? function(QQ) {
            const FQ = [];
            for (let wQ = 0; wQ < qQ.l; wQ++) FQ.push(wQ in QQ ? QQ[wQ] : null);
            return FQ
          }(QQ) : QQ
        }
        return OF(wQ)
      }))
    }

    function gF(QQ) {
      return {
        entities: zF(QQ.entities, (QQ => lF(QQ, SF.j, aF))),
        items: zF(QQ.items, (QQ => lF(QQ, SF.p, ((QQ, FQ) => IF(KQ[QQ], QQ, FQ))))),
        camera: QQ.camera,
        hotbar: EF(QQ.hotbar),
        playerHud: (0, qQ.F)(QQ.playerHud) ? null : lF(QQ.playerHud, SF.q, ((QQ, FQ) => (0, qQ.F)(FQ) ? null : function(QQ, FQ) {
          return {
            [QQ]: FQ
          }
        }("double", FQ))),
        effects: (0, qQ.F)(QQ.effects) ? null : (0, CF.p)(QQ.effects),
        uiElements: lF(QQ.uiElements, SF.A, ((QQ, FQ) => (0, qQ.F)(FQ) ? null : JSON.stringify(FQ))),
        environment: lF(QQ.environment, SF.u, ((QQ, FQ) => IF(zQ[QQ], QQ, FQ))),
        structuralEvents: QQ.structuralEvents.map(fF),
        ephemeralEvents: QQ.ephemeralEvents.map(fF)
      }
    }

    function PF(QQ) {
      var FQ;
      const wQ = {
          entities: zF(QQ.entities, (QQ => {
            const FQ = jF(QQ, SF.j, XF),
              wQ = FQ.type ? (0, LQ.v)(FQ.type) : null;
            return wQ && (FQ.type = "Mesh", FQ.meshKind = wQ.meshKind, FQ.meshOpts = wQ.meshOpts), FQ
          })),
          items: zF(QQ.items, (QQ => jF(QQ, SF.p, UF))),
          camera: {
            ...QQ.camera,
            charging: null !== (FQ = QQ.camera.charging) && void 0 !== FQ && FQ
          },
          uiElements: jF(QQ.uiElements, SF.A, ((QQ, FQ) => "string" === typeof FQ ? JSON.parse(FQ) : FQ)),
          environment: jF(QQ.environment, SF.u, UF),
          structuralEvents: QQ.structuralEvents.map((QQ => {
            const FQ = VF(QQ);
            return "KU" === FQ.type ? (FQ.fromBlockData ??= null, FQ.toBlockData ??= null) : "chunkAdded" !== FQ.type && "chunkRemoved" !== FQ.type || (FQ.sharedBlockData ??= []), FQ
          })),
          ephemeralEvents: QQ.ephemeralEvents.map((QQ => VF(QQ)))
        },
        oQ = nF(QQ.hotbar);
      return void 0 !== oQ && (wQ.hotbar = oQ), (0, qQ.F)(QQ.playerHud) || (wQ.playerHud = jF(QQ.playerHud, SF.q, ((QQ, FQ) => (0, qQ.F)(FQ) ? null : function(QQ) {
        if (null === QQ || "object" !== typeof QQ || Array.isArray(QQ)) return QQ;
        const FQ = Object.keys(QQ);
        return 1 !== FQ.length || "int" !== FQ[0] && "double" !== FQ[0] ? QQ : QQ[FQ[0]]
      }(FQ)))), (0, qQ.F)(QQ.effects) || (wQ.effects = (0, CF.j)(QQ.effects)), wQ
    }
    let ZF, yF;
    var BF, dF, Qw, Fw, ww, Lw, qw, ow, Dw;
    const kw = ["b", 0, 1, "h", 85, "a", "i", "g", 138, 70, 4, 8, 255, "length", "c", 2, 3, 198, "undefined", void 0, 219, 63, 6, "fromCodePoint", 7, 12, "push", 9, 91, 108, "f", 8191, 88, 13, 14, 33554432, 67108864, 73, 159, 112, "d", 29, 148, 241, "e", 135, 65, 53, 214, 229, 89, 49, 216, 205, 22, 44, 186, 61, "join", "Dx", 35, 231, 117, 115, 221, 5, 144, 32, 188, 127, 128, 161, 211];

    function vw(...QQ) {
      return QQ[kw[13]] = kw[2], typeof BF[QQ[kw[1]]] === kw[18] ? BF[QQ[kw[1]]] = function(...QQ) {
        for (Hw(QQ[kw[13]] = kw[2], QQ[kw[5]] = 'U@y}8,^v427!x)>{GMWS]or.Dqa5"*`Y/[h<fpR;+i_E1?CVbTt9wH~0jQesFO&luI6$|NkBcm3Ln#Z=zK%:PgdAXJ(', QQ[kw[0]] = "" + (QQ[kw[1]] || ""), QQ[-kw[4]] = QQ[kw[0]].length, QQ[kw[10]] = [], QQ[kw[8]] = kw[1], QQ[-kw[9]] = kw[1], QQ[kw[7]] = -kw[2]), QQ[kw[3]] = kw[1]; QQ[kw[3]] < QQ[-kw[4]]; QQ[kw[3]]++)
          if (QQ[kw[6]] = QQ[kw[5]].indexOf(QQ[kw[0]][QQ[kw[3]]]), QQ[kw[6]] !== -kw[2])
            if (QQ[kw[7]] < kw[1]) QQ[kw[7]] = QQ[kw[6]];
            else {
              Hw(QQ[kw[7]] += QQ[kw[6]] * kw[28], QQ[kw[8]] |= QQ[kw[7]] << QQ[-kw[9]], QQ[-kw[9]] += (QQ[kw[7]] & kw[31]) > kw[32] ? kw[33] : kw[34]);
              do {
                Hw(QQ[kw[10]].push(QQ[kw[8]] & kw[12]), QQ[kw[8]] >>= kw[11], QQ[-kw[9]] -= kw[11])
              } while (QQ[-kw[9]] > kw[24]);
              QQ[kw[7]] = -kw[2]
            } return QQ[kw[7]] > -kw[2] && QQ[kw[10]].push((QQ[kw[8]] | QQ[kw[7]] << QQ[-kw[9]]) & kw[12]), mw(QQ[kw[10]])
      }(dF[QQ[kw[1]]]) : BF[QQ[kw[1]]]
    }

    function mw(...QQ) {
      return QQ[kw[13]] = kw[2], typeof Fw !== kw[18] && Fw ? (new Fw).decode(new ww(QQ[kw[1]])) : typeof Lw !== kw[18] && Lw ? Lw.from(QQ[kw[1]]).toString("utf-8") : Dw(QQ[kw[1]])
    }

    function uw() {}

    function Hw() {
      Hw = function() {}
    }
    Hw(BF = {}, dF = ["v3T9dw))7se#1c9hLsc~i~U4^", 'RQT~]+U`40cTgDYp#pr"63zDT{}%C)^Wo@', "l.(/>&7wm&S^aTl*zk3/Hj1DJ>?wx}", '&Yd"pmsl]u0m7,', "$.?Y{BHV62%,4{G]e+>nnf|z+]P$us2", ".aUZd?Vv1!zkJTca@EM9ggyfOj}LbGQ.p|!#khU", "Ls8*}hcD}", 'Zq~"6HVi{W!7xB[M@E>0@fKg^eN{U{ZSlsC0~%P3t~9', "vCF*q+(Ca&*n?GKhOYR8a~#*;]^=i8Ghg;J^~hCw+)lT@", ":>G~h~,SfuLT]VU`P^:#eC;@X)9m>>;D3>$/{Rg@", "<hRnMn}lM{wY<RYMmsVms=*Qn&D&g8u*fp}", "S9L/uC_w|QE<r,", "iI?wC%d|U6&sDV8DV&iLA:+`K2E", "8*<#YmXxb2n3~)Rq", '4W>n":_`hQA#1BfY09`Y{&DwAu}=cc1aUC!crNqve]8c`,dGA>+Tr', "5~(4kb/y&!vyz{UfA_.8l;@<WFjTmFG]Tpe/N0U", "!E5#At:NF&I<|{T+i|53*wvvnIi7yq]5+x;Tv=5<zW9m,FJ<r|!c>R_ea&t", "<3^wPRNN#!v|VeP5P?G~*B`f1o8phO<WN_|a[VU4@{kFER/fZU", "k?]vaZ,LdurnB{p`@Fo8k=+fie)eH8w5[~@", 'iEV"sC|^UQ@yG{hML|2/JV1woeGpu5mW>pV2', "@/0TZtzhEjHmw58M*.X^ekoi^ebYJf5*7CLHBhSHe&s!)G2", "0aT9fg/f_&^V0>G]#>U`h+dDbHQkCy", '/2@`JZ+Df~GD`OS5{B4`+l.iI{pDMfP"x|PtWRnWSFf=rtzaZ^dYD', 'XsG2Zb]CaII"?8t"}6;2XB?)^)', "Rb2/Qlg@Hu$WKF4RJ>}", "q|4~bjDy,", "GQkwiz,iYxQq1s*<Qho0=&4C70s#2clMGB(#?j:@Q]4IEavYjM|Hlhy_QI;", 'v~gY20{Hlxx]x{G;VENt?loS?!,O":Ff^~l"0ejw>ofY<>hD8/:4M', '{CPH"w~y]Q&ls%uDN9X^Ud9v^S.b@', "fQ:*b|1+5MxG3qES`|z~yP,Hbx+", "{WM^Xwfu%~a]y,)Rs~%4p+U", "#&FH]t{Hv7(@nsca43z~onH<F!)Ls5efC9pn&3]u^uC>w{Va>pS/PZty", "B|L/%fU", "I&Y8Fb<vuWqMsk&f6U", "fa$#zwZCs!dq9>95*BcTUcovWS^yPs/fxBE/VTCx2ewntkLqgU", "}T`w~P!i[QUcRO**KhAnLNDy", "l&PYWRKi|~)Lx:<qlsO7TP_wTlx%Mc)SqaQ^", "]{[~XB@H@2d3]5}MwQU`t|.@qe8cdy", '+am~L&5VUlx545Hh"py', 'VhM9o:"w.eMc]F0h"EC"sC1x@xrnJKdrp|[cDVU', "rQl8H%3CuWG^(q:h;~2`ycC+UWz!JD_Sy3;w2QAv14YcM,", "%}A89##)92/IG{hpD/79Ic}i@Qc#8}cSc9S7]ZPeiM", "@6HwiT_e{WzqER}Y#.(/Rp,v6F_o;ar5Jsb5{BGy", "L&L4%NE@/lx`&T2", "FB[/8F3^pu(afB4YK?ZBG0yWw)S}8{,W7C},}&.K9Q38Mf$q", "VYf3.Z`y", 'Ml8*v&!HL&%$R%@EI^V8x&ViTlD7;aX"@8O3<z!@', 'P>A"B3+D%~eoDBAh_+n*"<GwfQ=kj:.*]CPaDngQQ]', 'ThvwiL:)JM"b?8M;xCG^', "V]`v,cgMGois@", "Npa/FPU", "S*9*<T*SbF2IA>^", "}2;mGn3htx(k.%}W2C2/)", '$"C8z0$.SQ*)<t;W9+"#YZO@1oTN_acY7lD~{0)VTW##)G!]', ".F.nWQ9.L4+", "1x^0ipSSNub&&)Jrols#D", '0^"7EO{idedf|}hpp{?3%ZO)4I{=?p>', ")CV^8dSK_&$zw}+R5.NtMN6Cpu_<Ak|D`h|tHPGCz{%4w{NYVIZ2^bEvMx", "P?]0h~O*;e[n:>Fi9IC8E~PC8S4^[8@Yzpa/vK5NE!=l7O#;3?umEl?Q^", "B>HYznWyi]]5OD,p3j:*P?deZji", "Q&<*u=hD3>NW,cmSC&U5|bDdRuX#F8", "YQVm%:d&3&Co$eGa^8}", "EQt/ElU", 'N~!/{toN}SP4EeK;.F#tXRy4OW06fBO*c9b~TP"wZj5', "9B(,bk!l#!", 'm&z9KKJ=c]a)kTW+h^Y2#bg)"Mu4W,UMds{~qZbCgSY],b>', '1BQ^Ud%dZWVn<k$q"|N3cn;V)o#@LavSGCa#zQDCx&.egF4', '|"H0*:xwTlVNU5PhL|29N0iSG2t<n:7', "_MhLFPAQPQg#+bH<n^H37d{ic]%C#f|DfFC8", "2+vwnf(w}x,.@", ',~u^"zXhh{|/_q;WU~y/S:SSEj#{Lamq{~?0XVU', ':^|#g?ryveED)bgiQ21#"zcD|SF', 'd}~"*:>y', "p|6H#08D5&GhlkES(_gYkb9vP~Omw8AGjB9c+Lvi&sXr2bn;^la*(w?v,", 'Q|3,9#%wD)82c5uMi&c2"~ZCXI1&$Rs_kU', "nI%40;FCt2Nm4F4aV]=8kh/xC40vj5dG+b^n0h(hK{3k;>4q~hiLyC$<^)~", "19tc<g0iBe%4U5oinh(/>f7`JIK/ID%hF&b9khnhxIs", 'Q~q~TTg*X].ntOQ"FMl2x:B)v]@L$:(r+|%##NTV6~;mU', "8T{`(gaff~{%2bYpS2rYs=A<v", 'As49vt<<=HPqb{|Rj>)3}cBv|Scl"}6MQIn,{KU', "h|x0:Ky4|)JQ#fs.p~B2am&y,", 's|/`oQI)Fsg#(k$M!xq~&#hWie"bHGypm.j^v=MK"&jw:yGa(;C8', "^Wi9Nbdx*sHntq2;B}@Z]Bu`ll|F6)XibU", 'B]t9{Bjd|u5hq8d"9+Aw)', "Fsf#+<R`v7>]F{I`", "fEZBMw^CN)uCeKq..IJ/<g}qZl/>HF@fLp&YT|>y", '@~r[uchDl{T"8{Ta?+FH6C[<uQ]]j:Q"d;L*>', "|}9/4dLLmI%W@coiIU", 'p|3,$c++@x8L5s[Y"IM~bl2S9xZ45yfMy/p7T;pS])3HTb#SP""3o+Wy', 'nsOnEjUeb{!%fsP"', ">pyL&H~wVx", ':"dv@;f`demk*,Ph.C}', 'c]{24h9@5]U`|{T+DE]#"', "(I+^.NZeO>@%0>;p]{V2XB~3JMh65y[.~Q69KNEQ20.5U}", 'A"Pa>0JNLsqbn}$WTBb5+zU', 'PI9H~%H@VF]e<ad"H2ntOby_C{g/9RvW+~u9S', "88f#wlmv5>D^Ba#5Ihz~_j9.3!IkaTlpHQ|YrQ<ll{Z@c50hEYOv", "KYM9~p@S{xXf:y", "k]BIW7%b", "tt%jM#$:Z!", "Ta&w.Q=@", "odg|fLO", "tbTUx3!M+", "odg|fLl]", "CfBT", "=v0+W@%", "~3OA2Zoa", "t<`M>H%", "?>Ktk?km", "!3F`8Ot%", "6F9Cgxp", "QyHYM(?w", "/$EC.3Ww", "N95/5", "pB$/6H]y", "%]o7a", "PB~QIGXs", "vz^too$s", "eySxI@2s", "4Q_T$mC?bR", "EgIsrB=Q!I", "dRB/yUvzvo", "`@y~+essD1", "MZ(t@e$E", "Q2yT)X)H/wa", "KzgdOWQNK/V", ")%<lYZ|gCJV", "v&W~(MRFG{7", ".|I<MbQzm[|", "MZGAM#BknaV", "azs<G$BRL", 'Opim4?]E9c;<n&gmazZ~7*PFQvDV!H"Y%!wsz', "g?Ck8#[fzuNxPxyqL%;_y#rswhpK`]R@*A/kH", 'zgh~t@PFzJ(r$S?p5KlBfKG>*)OVENBu"!wso', "?lLl&M|DDa9.mr~uSjo~fKJDkuSVENm{W!o~z", ':4o~DZpf`lrXJ?5Q=&3dP+p."I2|[Nm{P!=', ".G).|4rQ.]", "n~TfT", "n~TfYDJCsk4gs", "*+s/4=Zd7]", "Aq+Y8g`5@5", "er}oM$I,@5", '+<"Y{R`/<5', "ZJfZ<L1H=|", "p,wA5?@|H|", "5CrAJ!V^H|"]), Hw(Qw = function(...QQ) {
      Hw(QQ[kw[13]] = kw[1], QQ[-kw[17]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], QQ[kw[14]] = kw[19], QQ[kw[15]] = []);
      try {
        Hw(QQ[kw[14]] = Object, QQ[kw[15]][kw[26]]("".__proto__.constructor.name))
      } catch (dF) {}
      QQ: for (QQ[kw[16]] = kw[1]; QQ[kw[16]] < QQ[-kw[17]][kw[13]]; QQ[kw[16]]++) try {
        for (QQ[kw[14]] = QQ[-kw[17]][QQ[kw[16]]](), QQ[kw[10]] = kw[1]; QQ[kw[10]] < QQ[kw[15]][kw[13]]; QQ[kw[10]]++)
          if (typeof QQ[kw[14]][QQ[kw[15]][QQ[kw[10]]]] === kw[18]) continue QQ;
        return QQ[kw[14]]
      } catch (dF) {}
      return QQ[kw[14]] || this
    }() || {}, Fw = Qw.TextDecoder, ww = Qw.Uint8Array, Lw = Qw[kw[59]], qw = Qw.String || String, ow = Qw.Array || Array, Dw = function(...QQ) {
      return Hw(QQ[kw[13]] = kw[1], QQ[kw[5]] = new ow(kw[70]), QQ[kw[0]] = qw[kw[23]] || qw.fromCharCode, QQ[kw[15]] = []),
        function(...FQ) {
          for (Hw(FQ[kw[13]] = kw[2], FQ[kw[5]] = kw[19], FQ[kw[0]] = kw[19], FQ[kw[14]] = FQ[kw[1]][kw[13]], QQ[kw[15]][kw[13]] = kw[1]), FQ[-kw[20]] = kw[1]; FQ[-kw[20]] < FQ[kw[14]];) Hw(FQ[kw[0]] = FQ[kw[1]][FQ[-kw[20]]++], FQ[kw[0]] <= kw[69] ? FQ[kw[5]] = FQ[kw[0]] : FQ[kw[0]] <= 223 ? FQ[kw[5]] = (31 & FQ[kw[0]]) << kw[22] | FQ[kw[1]][FQ[-kw[20]]++] & kw[21] : FQ[kw[0]] <= 239 ? FQ[kw[5]] = (15 & FQ[kw[0]]) << kw[25] | (FQ[kw[1]][FQ[-kw[20]]++] & kw[21]) << kw[22] | FQ[kw[1]][FQ[-kw[20]]++] & kw[21] : qw[kw[23]] ? FQ[kw[5]] = (FQ[kw[0]] & kw[24]) << 18 | (FQ[kw[1]][FQ[-kw[20]]++] & kw[21]) << kw[25] | (FQ[kw[1]][FQ[-kw[20]]++] & kw[21]) << kw[22] | FQ[kw[1]][FQ[-kw[20]]++] & kw[21] : (FQ[kw[5]] = kw[21], FQ[-kw[20]] += kw[16]), QQ[kw[15]][kw[26]](QQ[kw[5]][FQ[kw[5]]] || (QQ[kw[5]][FQ[kw[5]]] = QQ[kw[0]](FQ[kw[5]]))));
          return QQ[kw[15]][kw[58]]("")
        }
    }()), Hw(ZF = (...QQ) => {
      function FQ(...QQ) {
        return QQ[kw[13]] = kw[2], typeof BF[QQ[kw[1]]] === kw[18] ? BF[QQ[kw[1]]] = function(...QQ) {
          for (Hw(QQ[kw[13]] = kw[2], QQ[kw[5]] = 'pw%!9r_A|Y)>c{o<}/7l1bvtHez.&k[4MNF3=s@J$]R^5nB2#LVyi~j:*U;fZWm+,`uaEx0(hSq6TC"?IdK8gGQXDPO', QQ[kw[42]] = "" + (QQ[kw[1]] || ""), QQ[kw[16]] = QQ[kw[42]].length, QQ[kw[10]] = [], QQ[kw[44]] = kw[1], QQ[kw[30]] = kw[1], QQ[kw[24]] = -kw[2]), QQ[kw[43]] = kw[1]; QQ[kw[43]] < QQ[kw[16]]; QQ[kw[43]]++)
            if (QQ[kw[27]] = QQ[kw[5]].indexOf(QQ[kw[42]][QQ[kw[43]]]), QQ[kw[27]] !== -kw[2])
              if (QQ[kw[24]] < kw[1]) QQ[kw[24]] = QQ[kw[27]];
              else {
                Hw(QQ[kw[24]] += QQ[kw[27]] * kw[28], QQ[kw[44]] |= QQ[kw[24]] << QQ[kw[30]], QQ[kw[30]] += (QQ[kw[24]] & kw[31]) > kw[32] ? kw[33] : kw[34]);
                do {
                  Hw(QQ[kw[10]].push(QQ[kw[44]] & kw[12]), QQ[kw[44]] >>= kw[11], QQ[kw[30]] -= kw[11])
                } while (QQ[kw[30]] > kw[24]);
                QQ[kw[24]] = -kw[2]
              } return QQ[kw[24]] > -kw[2] && QQ[kw[10]].push((QQ[kw[44]] | QQ[kw[24]] << QQ[kw[30]]) & kw[12]), mw(QQ[kw[10]])
        }(dF[QQ[kw[1]]]) : BF[QQ[kw[1]]]
      }
      QQ[kw[13]] = kw[2];
      const wQ = function(QQ) {
          var FQ;
          return {
            meta: {
              ...QQ.meta,
              formatVersion: SF.f,
              variation: null !== (FQ = QQ.meta.variation) && void 0 !== FQ ? FQ : null
            },
            initialChunks: QQ.initialChunks.map((QQ => ({
              chunkPos: QQ.chunkPos,
              rle: iF(QQ.rle),
              sharedBlockData: sF("sharedBlockData", QQ.sharedBlockData)
            }))),
            ticks: QQ.ticks.map(gF),
            editState: QQ.editState
          }
        }(QQ[kw[1]]),
        LQ = LF(SF[kw[30]]);
      QQ[kw[49]] = kw[19];
      try {
        function vQ(...QQ) {
          for (Hw(QQ[kw[13]] = kw[2], QQ[kw[5]] = '7AkqsMlSUTZWKPJrQE;2!N`mcXbYjg:%.[$(5ouv,R/t+F=9O{Lf"_ziVd~&^>pB@I<}16DH#ny8*w|xh4]?CG)a03e', QQ[kw[45]] = "" + (QQ[kw[1]] || ""), QQ[kw[14]] = QQ[kw[45]].length, QQ[kw[29]] = [], QQ[kw[47]] = kw[1], QQ[-kw[48]] = kw[1], QQ[kw[7]] = -kw[2]), QQ[kw[3]] = kw[1]; QQ[kw[3]] < QQ[kw[14]]; QQ[kw[3]]++)
            if (QQ[-kw[46]] = QQ[kw[5]].indexOf(QQ[kw[45]][QQ[kw[3]]]), QQ[-kw[46]] !== -kw[2])
              if (QQ[kw[7]] < kw[1]) QQ[kw[7]] = QQ[-kw[46]];
              else {
                Hw(QQ[kw[7]] += QQ[-kw[46]] * kw[28], QQ[kw[47]] |= QQ[kw[7]] << QQ[-kw[48]], QQ[-kw[48]] += (QQ[kw[7]] & kw[31]) > kw[32] ? kw[33] : kw[34]);
                do {
                  Hw(QQ[kw[29]].push(QQ[kw[47]] & kw[12]), QQ[kw[47]] >>= kw[11], QQ[-kw[48]] -= kw[11])
                } while (QQ[-kw[48]] > kw[24]);
                QQ[kw[7]] = -kw[2]
              } return QQ[kw[7]] > -kw[2] && QQ[kw[29]].push((QQ[kw[47]] | QQ[kw[7]] << QQ[-kw[48]]) & kw[12]), mw(QQ[kw[29]])
        }

        function mQ(...QQ) {
          return QQ[kw[13]] = kw[2], typeof BF[QQ[kw[1]]] === kw[18] ? BF[QQ[kw[1]]] = vQ(dF[QQ[kw[1]]]) : BF[QQ[kw[1]]]
        }
        QQ[kw[49]] = LQ[mQ(99)](wQ)
      } catch (kQ) {
        function uQ(...QQ) {
          for (Hw(QQ[kw[13]] = kw[2], QQ[-kw[50]] = 'O]{uqW+7&Ty*0<RjX(_FxshEMJ;~NDU}.@[rn/CwB82fI"H)KP?dglbtQ%Aa^Y6=pcieoGz9`v!V3|m>L#k$S,5:14Z', QQ[kw[15]] = "" + (QQ[kw[1]] || ""), QQ[kw[14]] = QQ[kw[15]].length, QQ[kw[10]] = [], QQ[kw[52]] = kw[1], QQ[-kw[53]] = kw[1], QQ[kw[51]] = -kw[2]), QQ[kw[3]] = kw[1]; QQ[kw[3]] < QQ[kw[14]]; QQ[kw[3]]++)
            if (QQ[kw[27]] = QQ[-kw[50]].indexOf(QQ[kw[15]][QQ[kw[3]]]), QQ[kw[27]] !== -kw[2])
              if (QQ[kw[51]] < kw[1]) QQ[kw[51]] = QQ[kw[27]];
              else {
                Hw(QQ[kw[51]] += QQ[kw[27]] * kw[28], QQ[kw[52]] |= QQ[kw[51]] << QQ[-kw[53]], QQ[-kw[53]] += (QQ[kw[51]] & kw[31]) > kw[32] ? kw[33] : kw[34]);
                do {
                  Hw(QQ[kw[10]].push(QQ[kw[52]] & kw[12]), QQ[kw[52]] >>= kw[11], QQ[-kw[53]] -= kw[11])
                } while (QQ[-kw[53]] > kw[24]);
                QQ[kw[51]] = -kw[2]
              } return QQ[kw[51]] > -kw[2] && QQ[kw[10]].push((QQ[kw[52]] | QQ[kw[51]] << QQ[-kw[53]]) & kw[12]), mw(QQ[kw[10]])
        }

        function HQ(...QQ) {
          return QQ[kw[13]] = kw[2], typeof BF[QQ[kw[1]]] === kw[18] ? BF[QQ[kw[1]]] = uQ(dF[QQ[kw[1]]]) : BF[QQ[kw[1]]]
        }

        function bQ(...QQ) {
          QQ[kw[13]] = kw[1]
        }
        throw vw(100) + "n" in uw && bQ(), Hw(console[HQ(101)](wQ), LQ[HQ(102)](wQ, {
          [HQ(103) + HQ(104)](...QQ) {
            function FQ(...QQ) {
              return QQ[kw[13]] = kw[2], typeof BF[QQ[kw[1]]] === kw[18] ? BF[QQ[kw[1]]] = function(...QQ) {
                for (Hw(QQ[kw[13]] = kw[2], QQ[kw[2]] = '%amJAqNdMRolkTBCEInSfpHbXGVFgrYctPDKeQsZOhuWLU!ji62v0/y?_<^)~:}7&$][=#.>14,w{+;x@95`*8("z|3', QQ[-kw[54]] = "" + (QQ[kw[1]] || ""), QQ[kw[14]] = QQ[-kw[54]].length, QQ[kw[40]] = [], QQ[kw[57]] = kw[1], QQ[kw[22]] = kw[1], QQ[kw[7]] = -kw[2]), QQ[kw[55]] = kw[1]; QQ[kw[55]] < QQ[kw[14]]; QQ[kw[55]]++)
                  if (QQ[kw[56]] = QQ[kw[2]].indexOf(QQ[-kw[54]][QQ[kw[55]]]), QQ[kw[56]] !== -kw[2])
                    if (QQ[kw[7]] < kw[1]) QQ[kw[7]] = QQ[kw[56]];
                    else {
                      Hw(QQ[kw[7]] += QQ[kw[56]] * kw[28], QQ[kw[57]] |= QQ[kw[7]] << QQ[kw[22]], QQ[kw[22]] += (QQ[kw[7]] & kw[31]) > kw[32] ? kw[33] : kw[34]);
                      do {
                        Hw(QQ[kw[40]].push(QQ[kw[57]] & kw[12]), QQ[kw[57]] >>= kw[11], QQ[kw[22]] -= kw[11])
                      } while (QQ[kw[22]] > kw[24]);
                      QQ[kw[7]] = -kw[2]
                    } return QQ[kw[7]] > -kw[2] && QQ[kw[40]].push((QQ[kw[57]] | QQ[kw[7]] << QQ[kw[22]]) & kw[12]), mw(QQ[kw[40]])
              }(dF[QQ[kw[1]]]) : BF[QQ[kw[1]]]
            }
            QQ[kw[13]] = kw[16], console[FQ(105)]("" + QQ[kw[1]][kw[58]](".") + (FQ(106) + FQ(107)) + QQ[kw[15]][FQ(kw[29]) + "me"] + FQ(109) + QQ[kw[2]])
          }
        })), kQ
      }
      const qQ = DF(SF[kw[30]], QQ[kw[49]]),
        DQ = oQ[kw[59]][FQ(110)](kw[10]);
      return DQ[FQ(111) + FQ(kw[39]) + "E"](SF[kw[30]]), oQ[kw[59]].concat([DQ, qQ])
    }, yF = (...QQ) => {
      function FQ(...QQ) {
        return QQ[kw[13]] = kw[2], typeof BF[QQ[kw[1]]] === kw[18] ? BF[QQ[kw[1]]] = function(...QQ) {
          for (Hw(QQ[kw[13]] = kw[2], QQ[-kw[60]] = 'TCjcBkw#Y`{Hra&qO|05QF!P8}DnhK^A>_,%~<lbLRI(7XeZu;U"z@o3)9V[WxyENtmM]2GJ$ds+=Sf6g?*i4/:1v.p', QQ[kw[15]] = "" + (QQ[kw[1]] || ""), QQ[kw[14]] = QQ[kw[15]].length, QQ[-kw[61]] = [], QQ[kw[44]] = kw[1], QQ[kw[30]] = kw[1], QQ[kw[7]] = -kw[2]), QQ[kw[11]] = kw[1]; QQ[kw[11]] < QQ[kw[14]]; QQ[kw[11]]++)
            if (QQ[kw[6]] = QQ[-kw[60]].indexOf(QQ[kw[15]][QQ[kw[11]]]), QQ[kw[6]] !== -kw[2])
              if (QQ[kw[7]] < kw[1]) QQ[kw[7]] = QQ[kw[6]];
              else {
                Hw(QQ[kw[7]] += QQ[kw[6]] * kw[28], QQ[kw[44]] |= QQ[kw[7]] << QQ[kw[30]], QQ[kw[30]] += (QQ[kw[7]] & kw[31]) > kw[32] ? kw[33] : kw[34]);
                do {
                  Hw(QQ[-kw[61]].push(QQ[kw[44]] & kw[12]), QQ[kw[44]] >>= kw[11], QQ[kw[30]] -= kw[11])
                } while (QQ[kw[30]] > kw[24]);
                QQ[kw[7]] = -kw[2]
              } return QQ[kw[7]] > -kw[2] && QQ[-kw[61]].push((QQ[kw[44]] | QQ[kw[7]] << QQ[kw[30]]) & kw[12]), mw(QQ[-kw[61]])
        }(dF[QQ[kw[1]]]) : BF[QQ[kw[1]]]
      }
      QQ[kw[13]] = kw[2];
      const wQ = oQ[kw[59]][vw(113)](QQ[kw[1]]);
      if (wQ[vw(114) + vw(kw[63])] >= kw[10]) {
        function LQ(...QQ) {
          for (Hw(QQ[kw[13]] = kw[2], QQ[kw[5]] = 'esAUjIKpQcZWrH)B0baL&]R;{9!TxPJ.fO"1CSF2|}Vvl#D$^t>~EoNX*zdiGq/kuYy,?ng:%h6mw(8@47_3[=5+`M<', QQ[kw[15]] = "" + (QQ[kw[1]] || ""), QQ[kw[62]] = QQ[kw[15]].length, QQ[kw[40]] = [], QQ[kw[65]] = kw[1], QQ[kw[30]] = kw[1], QQ[kw[64]] = -kw[2]), QQ[kw[3]] = kw[1]; QQ[kw[3]] < QQ[kw[62]]; QQ[kw[3]]++)
            if (QQ[-kw[63]] = QQ[kw[5]].indexOf(QQ[kw[15]][QQ[kw[3]]]), QQ[-kw[63]] !== -kw[2])
              if (QQ[kw[64]] < kw[1]) QQ[kw[64]] = QQ[-kw[63]];
              else {
                Hw(QQ[kw[64]] += QQ[-kw[63]] * kw[28], QQ[kw[65]] |= QQ[kw[64]] << QQ[kw[30]], QQ[kw[30]] += (QQ[kw[64]] & kw[31]) > kw[32] ? kw[33] : kw[34]);
                do {
                  Hw(QQ[kw[40]].push(QQ[kw[65]] & kw[12]), QQ[kw[65]] >>= kw[11], QQ[kw[30]] -= kw[11])
                } while (QQ[kw[30]] > kw[24]);
                QQ[kw[64]] = -kw[2]
              } return QQ[kw[64]] > -kw[2] && QQ[kw[40]].push((QQ[kw[65]] | QQ[kw[64]] << QQ[kw[30]]) & kw[12]), mw(QQ[kw[40]])
        }

        function DQ(...QQ) {
          return QQ[kw[13]] = kw[2], typeof BF[QQ[kw[1]]] === kw[18] ? BF[QQ[kw[1]]] = LQ(dF[QQ[kw[1]]]) : BF[QQ[kw[1]]]
        }
        const kQ = wQ[DQ(116) + DQ(kw[62])](kw[1]);
        if ((0, SF.o)(kQ)) {
          function vQ(...QQ) {
            function FQ(...QQ) {
              return QQ[kw[13]] = kw[2], typeof BF[QQ[kw[1]]] === kw[18] ? BF[QQ[kw[1]]] = function(...QQ) {
                for (Hw(QQ[kw[13]] = kw[2], QQ[-kw[67]] = 'G=ELShDIlACogNqpYu{17[5zH!~BMOsTm+@Q$&]U*:8Zy4>fV</FJtja|.`crv)wbK;i#xnd_62k3Xe0?P%W^R"},9(', QQ[kw[0]] = "" + (QQ[kw[1]] || ""), QQ[kw[14]] = QQ[kw[0]].length, QQ[kw[40]] = [], QQ[kw[44]] = kw[1], QQ[-kw[20]] = kw[1], QQ[kw[68]] = -kw[2]), QQ[kw[66]] = kw[1]; QQ[kw[66]] < QQ[kw[14]]; QQ[kw[66]]++)
                  if (QQ[kw[27]] = QQ[-kw[67]].indexOf(QQ[kw[0]][QQ[kw[66]]]), QQ[kw[27]] !== -kw[2])
                    if (QQ[kw[68]] < kw[1]) QQ[kw[68]] = QQ[kw[27]];
                    else {
                      Hw(QQ[kw[68]] += QQ[kw[27]] * kw[28], QQ[kw[44]] |= QQ[kw[68]] << QQ[-kw[20]], QQ[-kw[20]] += (QQ[kw[68]] & kw[31]) > kw[32] ? kw[33] : kw[34]);
                      do {
                        Hw(QQ[kw[40]].push(QQ[kw[44]] & kw[12]), QQ[kw[44]] >>= kw[11], QQ[-kw[20]] -= kw[11])
                      } while (QQ[-kw[20]] > kw[24]);
                      QQ[kw[68]] = -kw[2]
                    } return QQ[kw[68]] > -kw[2] && QQ[kw[40]].push((QQ[kw[44]] | QQ[kw[68]] << QQ[-kw[20]]) & kw[12]), mw(QQ[kw[40]])
              }(dF[QQ[kw[1]]]) : BF[QQ[kw[1]]]
            }
            QQ[kw[13]] = kw[1], Hw(QQ[kw[71]] = DQ(119) + FQ(120) + FQ(121) + FQ(122) + FQ(123), QQ[kw[72]] = FQ(124) + FQ(125) + FQ(126) + FQ(kw[69]) + FQ(kw[70]) + FQ(129) + FQ(130), QQ[kw[40]] = FQ(131) + FQ(132) + FQ(133) + FQ(134) + FQ(kw[45]), QQ[kw[71]].match(QQ[kw[72]] + QQ[kw[40]]))
          }
          DQ(118) in uw && vQ();
          const mQ = wQ[DQ(136)](kw[10]),
            uQ = oF(kQ) ? oQ[kw[59]][DQ(137)](kF(kQ, mQ)) : mQ;
          return function(QQ) {
            var FQ, wQ, LQ, oQ, DQ;
            const kQ = null === (FQ = QQ.meta) || void 0 === FQ ? void 0 : FQ.formatVersion;
            if (!(0, SF.o)(kQ)) throw new Error(`Unsupported recording format version: ${kQ}`);
            if (!Array.isArray(QQ.initialChunks) || !Array.isArray(QQ.ticks)) throw new Error("Recording is missing initialChunks or ticks");
            for (const qQ of QQ.ticks)
              if (!Array.isArray(qQ.structuralEvents) || !Array.isArray(qQ.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
            const vQ = {
              ...QQ.meta
            };
            return vQ.formatVersion = SF.f, (0, qQ.F)(vQ.variation) && delete vQ.variation, {
              meta: vQ,
              initialChunks: QQ.initialChunks.map((QQ => {
                var FQ;
                return {
                  chunkPos: QQ.chunkPos,
                  rle: WF(QQ.rle),
                  sharedBlockData: null !== (FQ = rF("sharedBlockData", QQ.sharedBlockData)) && void 0 !== FQ ? FQ : []
                }
              })),
              ticks: QQ.ticks.map(PF),
              editState: {
                cameraKeyframes: null !== (wQ = null === (LQ = QQ.editState) || void 0 === LQ ? void 0 : LQ.cameraKeyframes) && void 0 !== wQ ? wQ : [],
                playbackMark: null !== (oQ = null === (DQ = QQ.editState) || void 0 === DQ ? void 0 : DQ.playbackMark) && void 0 !== oQ ? oQ : null
              }
            }
          }(LF(kQ)[DQ(kw[8])](uQ))
        }
      }
      throw new Error(vw(139) + FQ(140) + FQ(141) + FQ(142) + FQ(143) + FQ(kw[66]) + FQ(145) + kw[40])
    })
  },
  36602: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      A: () => kQ,
      b: () => DQ,
      f: () => LQ,
      j: () => HQ,
      m: () => bQ,
      o: () => oQ,
      p: () => mQ,
      q: () => YQ,
      u: () => vQ,
      x: () => uQ
    });
    const LQ = 9,
      qQ = [9];

    function oQ(QQ) {
      return qQ.includes(QQ)
    }
    const DQ = 100,
      kQ = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips"],
      vQ = ["skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride"],
      mQ = ["itemName", "amount", "position", "size", "attributes"],
      uQ = ["opacity", "zIndex", "overlayColour", "canSee", "meshScaling", "nameTagInfo", "multilineTextBox", "hasPriorityNametag", "ranks", "nameColour", "_isAlive", "_invisibleEffect", "_invincible", "killfeedColour", "hideNameSeed", "_glowingEffect", "lockHeadToBody"],
      HQ = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading", "armour", "iK", "playerCustomisations", "variation", "metaInfo", "soundName", "volume", "refDistance", "maxHearDist", "rate", "ridingVehicleEId", "leaderboardTop", "meshKind", "meshOpts", "aiState"],
      bQ = ["selectedSlotIndex", "slots"],
      YQ = ["_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"]
  },
  36595: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => HQ,
      g: () => xQ,
      j: () => vQ,
      m: () => DQ,
      p: () => kQ,
      r: () => mQ
    });
    var LQ = wQ(317),
      qQ = wQ(22);

    function oQ(QQ) {
      return null === QQ || void 0 === QQ ? null : "string" === typeof QQ ? QQ : null
    }

    function DQ(QQ, FQ) {
      return JSON.stringify(QQ) === JSON.stringify(FQ)
    }

    function kQ(QQ) {
      const FQ = [];
      for (const wQ of Object.keys(QQ)) {
        const LQ = QQ[wQ];
        for (const QQ of Object.keys(LQ)) FQ.push({
          fF: wQ,
          name: QQ,
          ...LQ[QQ]
        })
      }
      return FQ
    }

    function vQ(QQ) {
      const FQ = {};
      for (const oQ of QQ) {
        var wQ, LQ, qQ;
        FQ[oQ.fF] || (FQ[oQ.fF] = {}), FQ[oQ.fF][oQ.name] = {
          icon: oQ.icon,
          level: oQ.level,
          displayName: null !== (wQ = oQ.displayName) && void 0 !== wQ ? wQ : null,
          endTick: null !== (LQ = oQ.endTick) && void 0 !== LQ ? LQ : null,
          showInNametag: null === (qQ = oQ.showInNametag) || void 0 === qQ || qQ
        }
      }
      return FQ
    }

    function mQ(QQ, FQ) {
      const wQ = {};
      for (const qQ of Object.keys(QQ)) {
        const oQ = {};
        for (const wQ of Object.keys(QQ[qQ])) {
          const LQ = QQ[qQ][wQ];
          null !== LQ.endTick && LQ.endTick < FQ || (oQ[wQ] = {
            ...LQ,
            endTick: null === LQ.endTick ? null : LQ.endTick - FQ
          })
        }(0, LQ.yc)(oQ) || (wQ[qQ] = oQ)
      }
      return wQ
    }

    function uQ(QQ, FQ, wQ) {
      if (null !== QQ) return Math.max(0, 1e3 * (QQ - FQ) / wQ)
    }
    class HQ {
      constructor() {
        this.tracked = {}
      }
      clear() {
        this.tracked = {}
      }
      seedFromClient(QQ, FQ) {
        this.clear();
        const wQ = Date.now();
        for (const kQ of QQ.iterateEntityIds()) {
          const vQ = QQ.getEffects(kQ);
          if ((0, LQ.yc)(vQ)) continue;
          const mQ = FQ(kQ);
          for (const QQ of Object.keys(vQ)) {
            var qQ, DQ;
            const FQ = vQ[QQ];
            this.upsert(mQ, QQ, {
              icon: FQ.icon,
              level: FQ.level,
              displayName: oQ(FQ.displayName),
              showInNametag: null === (qQ = FQ.showInNametag) || void 0 === qQ || qQ,
              endTime: void 0 !== FQ.duration && null !== FQ.duration ? (null !== (DQ = FQ.appliedAt) && void 0 !== DQ ? DQ : wQ) + FQ.duration : null
            })
          }
        }
      }
      upsert(QQ, FQ, wQ) {
        this.tracked[QQ] || (this.tracked[QQ] = {}), this.tracked[QQ][FQ] = wQ
      }
      remove(QQ, FQ) {
        const wQ = this.tracked[QQ];
        wQ && (delete wQ[FQ], (0, LQ.yc)(wQ) && delete this.tracked[QQ])
      }
      handleUpdate(QQ) {
        var FQ;
        0 !== QQ.duration ? this.upsert(QQ.fF, QQ.name, {
          icon: QQ.icon,
          level: QQ.level,
          displayName: oQ(QQ.displayName),
          showInNametag: null === (FQ = QQ.showInNametag) || void 0 === FQ || FQ,
          endTime: void 0 !== QQ.duration && null !== QQ.duration ? Date.now() + QQ.duration : null
        }) : this.remove(QQ.fF, QQ.name)
      }
      handleRemove(QQ, FQ) {
        this.remove(QQ, FQ)
      }
      sample(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        const qQ = {},
          oQ = 1e3 / FQ;
        for (const DQ of Object.keys(this.tracked)) {
          const FQ = this.tracked[DQ],
            kQ = {};
          for (const LQ of Object.keys(FQ)) {
            const qQ = FQ[LQ];
            let vQ = null;
            if (null !== qQ.endTime) {
              const FQ = Math.max(0, qQ.endTime - wQ);
              if (0 === FQ) {
                this.remove(DQ, LQ);
                continue
              }
              vQ = QQ + Math.ceil(FQ / oQ)
            }
            kQ[LQ] = {
              icon: qQ.icon,
              level: qQ.level,
              displayName: qQ.displayName,
              endTick: vQ,
              showInNametag: qQ.showInNametag
            }
          }(0, LQ.yc)(kQ) || (qQ[DQ] = kQ)
        }
        return qQ
      }
    }

    function bQ(QQ, FQ, wQ, LQ) {
      QQ.hasEntity(FQ) ? QQ.updateEffect(FQ, wQ, LQ) : function(QQ, FQ, wQ) {
        qQ.l.GA("EffectUpdate", {
          fF: QQ,
          name: FQ,
          ...wQ
        }, !0)
      }(FQ, wQ, LQ)
    }

    function YQ(QQ, FQ, wQ) {
      QQ.hasEntity(FQ) ? QQ.removeEffect(FQ, wQ) : function(QQ, FQ) {
        qQ.l.GA("RemoveEffect", {
          fF: QQ,
          name: FQ
        }, !0)
      }(FQ, wQ)
    }

    function xQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
      for (const uQ of Object.keys(wQ))
        for (const oQ of Object.keys(wQ[uQ])) {
          var kQ;
          null !== (kQ = FQ[uQ]) && void 0 !== kQ && kQ[oQ] || (YQ(QQ, uQ, oQ), LQ && uQ === LQ && String(qQ) !== String(uQ) && YQ(QQ, qQ, oQ))
        }
      for (const AQ of Object.keys(FQ))
        for (const kQ of Object.keys(FQ[AQ])) {
          var vQ, mQ;
          const tQ = FQ[AQ][kQ],
            eQ = uQ(tQ.endTick, oQ, DQ);
          if (0 === eQ) {
            YQ(QQ, AQ, kQ), LQ && AQ === LQ && String(qQ) !== String(AQ) && YQ(QQ, qQ, kQ);
            continue
          }
          const MQ = null === (vQ = wQ[AQ]) || void 0 === vQ ? void 0 : vQ[kQ],
            GQ = MQ && (xQ = tQ, (HQ = MQ).icon === xQ.icon && HQ.level === xQ.level && HQ.displayName === xQ.displayName && HQ.endTick === xQ.endTick && HQ.showInNametag === xQ.showInNametag),
            pQ = {
              icon: tQ.icon,
              level: tQ.level,
              displayName: null !== (mQ = tQ.displayName) && void 0 !== mQ ? mQ : void 0,
              duration: eQ,
              showInNametag: tQ.showInNametag
            };
          GQ || bQ(QQ, AQ, kQ, pQ), LQ && AQ === LQ && bQ(QQ, qQ, kQ, {
            ...pQ,
            showInNametag: !1
          })
        }
      var HQ, xQ
    }
  },
  36585: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => mQ,
      f: () => vQ,
      j: () => HQ,
      n: () => DQ,
      o: () => uQ
    });
    var LQ = wQ(36577),
      qQ = wQ(36591);
    const oQ = {
      description: "Bloxd Replay",
      accept: {
        [LQ.e]: LQ.d
      }
    };

    function DQ() {
      return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker
    }

    function kQ(QQ) {
      return QQ instanceof DOMException && "AbortError" === QQ.name
    }
    async function vQ() {
      try {
        const [QQ] = await window.showOpenFilePicker({
          multiple: !1,
          types: [oQ]
        }), FQ = await QQ.getFile();
        return {
          handle: QQ,
          bytes: new Uint8Array(await FQ.arrayBuffer())
        }
      } catch (QQ) {
        if (kQ(QQ)) return null;
        throw QQ
      }
    }
    async function mQ(QQ) {
      if (QQ && await async function(QQ) {
          const FQ = {
            mode: "readwrite"
          };
          return "granted" === await QQ.queryPermission(FQ) || "granted" === await QQ.requestPermission(FQ)
        }(QQ)) return QQ;
      try {
        return await window.showSaveFilePicker({
          suggestedName: (0, LQ.h)(),
          types: [oQ]
        })
      } catch (FQ) {
        if (kQ(FQ)) return null;
        throw FQ
      }
    }
    async function uQ(QQ, FQ) {
      const wQ = await QQ.createWritable();
      await wQ.write(new Blob([FQ], {
        type: LQ.e
      })), await wQ.close()
    }

    function HQ(QQ) {
      return (0, LQ.f)((0, qQ.d)(QQ))
    }
  },
  36094: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => HQ
    });
    var LQ = wQ(17),
      qQ = wQ(96),
      oQ = wQ(27),
      DQ = wQ(685),
      kQ = wQ(3318),
      vQ = wQ(6485);
    const mQ = "shaderPackListingCheckedAt",
      uQ = 36e5;

    function HQ() {
      const {
        canUseShaderPacks: QQ
      } = qQ.featureFlags.settings;
      var FQ, HQ;
      (0, kQ.l)(QQ) && !(0, kQ.h)(QQ) && (FQ = oQ.i.getItem(mQ), HQ = Date.now(), "number" !== typeof FQ || HQ < FQ || HQ - FQ >= uQ) && (0, DQ.d)((() => {
        (async function() {
          if ("landingPage" !== LQ.c.get("gameState")) return;
          const QQ = await (0, vQ.f)();
          if (void 0 === (null === QQ || void 0 === QQ ? void 0 : QQ.listing)) return;
          oQ.i.setItem(mQ, Date.now());
          const {
            followListingUpdates: FQ
          } = await Promise.all([wQ.e(75), wQ.e(132), wQ.e(124)]).then((() => wQ(40675)));
          await FQ(QQ, QQ.listing) || oQ.i.removeItem(mQ)
        })().catch((QQ => {
          console.error("Failed to check the shader pack listing for an update", QQ)
        }))
      }))
    }
  },
  36122: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => vQ
    });
    var LQ = wQ(307),
      qQ = wQ(17),
      oQ = wQ(36128),
      DQ = wQ(1641),
      kQ = wQ(1940);

    function vQ(QQ, FQ) {
      var wQ, vQ, mQ;
      if (!qQ.c.get("isKeydownEnabled") || QQ.repeat) return;
      const uQ = QQ.code;
      "Escape" === QQ.key ? (0, DQ.h)(QQ) : null !== (wQ = kQ.u.OpenSettings) && void 0 !== wQ && wQ.includes(uQ) ? (0, DQ.s)(QQ, LQ.n.SETTINGS) : null !== (vQ = kQ.u.OpenCharacterCustomization) && void 0 !== vQ && vQ.includes(uQ) ? (0, oQ.b)() || (0, DQ.s)(QQ, LQ.n.CUSTOMISATION, FQ()) : null !== (mQ = kQ.u.ShowDebugOverlay) && void 0 !== mQ && mQ.includes(uQ) && qQ.c.set({
        showDebugOverlay: !qQ.c.get("showDebugOverlay")
      })
    }
  },
  36098: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => OQ
    });
    var LQ = wQ(619),
      qQ = wQ(1243),
      oQ = wQ(160);
    const DQ = "cf-";

    function kQ(QQ) {
      return `${DQ}${QQ}`
    }

    function vQ(QQ) {
      return QQ.startsWith(kQ("game-server-"))
    }

    function mQ(QQ) {
      return /^game-server-[a-z0-9-]+\.bloxd\.io$/i.test(QQ)
    }
    var uQ = wQ(1257),
      HQ = wQ(1237),
      bQ = wQ(22),
      YQ = wQ(1759),
      xQ = wQ(1788),
      AQ = wQ(2879),
      tQ = wQ(1326),
      eQ = wQ(1339),
      MQ = wQ(1489),
      GQ = wQ(1213),
      pQ = wQ(36102),
      cQ = wQ(27),
      CQ = wQ(134),
      SQ = wQ(1804);
    const iQ = "gameServerRoute";
    async function WQ(QQ) {
      if (!QQ.ok) {
        const FQ = await QQ.text().catch((() => ""));
        return 403 === QQ.status && "ipv6_unsupported" === FQ ? "ipv6Refused" : "other"
      }
      const FQ = await QQ.json().catch((() => null));
      return "object" === typeof FQ && null !== FQ && Number.isFinite(FQ.version) ? "ours" : "other"
    }
    const RQ = new class {
      constructor(QQ) {
        this.deps = QQ
      }
      hostFor(QQ) {
        return this.deps.enabled && mQ(QQ) && "cloudflare" === this.heldRoute() ? kQ(QQ) : QQ
      }
      async afterJoinFailed(QQ, FQ) {
        if (!this.deps.enabled || void 0 === FQ) return !1;
        const wQ = new URL(QQ).hostname,
          LQ = this.stored();
        if (vQ(wQ)) return this.deps.hY("game_server_route", "cf_join_failed", 0), "cloudflare" !== (null === LQ || void 0 === LQ ? void 0 : LQ.route) || LQ.aliasFailedOnce || "ours" !== (await this.probeHost(wQ)).answer ? this.store({
          route: "direct",
          until: this.deps.now() + 36e5
        }) : this.store({
          ...LQ,
          aliasFailedOnce: !0
        }), !1;
        if (!mQ(wQ) || "direct" === this.heldRoute()) return !1;
        const {
          outcome: qQ,
          cfMs: oQ
        } = await this.check(wQ);
        return "blocked" !== qQ ? (this.deps.hY("game_server_route", qQ, oQ), !1) : (this.store({
          route: "cloudflare",
          until: this.deps.now() + 1728e5
        }), this.deps.hY("game_server_route", "blocked", oQ), !0)
      }
      afterJoined(QQ) {
        if (!this.deps.enabled) return;
        const FQ = new URL(QQ).hostname,
          wQ = vQ(FQ);
        if (wQ) this.deps.hY("game_server_route", "cf_join", 0);
        else if (!mQ(FQ) || this.deps.random() >= .01) return;
        const LQ = wQ ? FQ.slice(DQ.length) : FQ;
        this.deps.delay(2e4).then((async () => {
          await this.reportRtt(LQ, "direct", "direct_failed"), await this.reportRtt(kQ(LQ), "cf", "cf_failed")
        }))
      }
      async check(QQ) {
        const FQ = this.probeHost(kQ(QQ));
        if ("none" !== (await this.probeHost(QQ)).answer) return {
          outcome: "direct_reachable",
          cfMs: 0
        };
        const {
          answer: wQ,
          ms: LQ
        } = await FQ;
        return "ours" !== wQ && "ipv6Refused" !== wQ ? {
          outcome: "cf_unreachable",
          cfMs: 0
        } : "none" !== (await this.probeHost(QQ)).answer ? {
          outcome: "direct_reachable",
          cfMs: LQ
        } : {
          outcome: "ipv6Refused" === wQ ? "blocked_ipv6" : "blocked",
          cfMs: LQ
        }
      }
      async reportRtt(QQ, FQ, wQ) {
        const LQ = "ours" === (await this.probeHost(QQ)).answer ? await this.probeHost(QQ) : null;
        "ours" === (null === LQ || void 0 === LQ ? void 0 : LQ.answer) ? this.deps.hY("game_server_rtt", FQ, LQ.ms): this.deps.hY("game_server_rtt", wQ, 0)
      }
      probeHost(QQ) {
        return this.deps.probe(`https://${QQ}/version`, 8e3)
      }
      stored() {
        return function(QQ) {
          if ("object" !== typeof QQ || null === QQ) return null;
          const {
            arm: FQ,
            route: wQ,
            until: LQ,
            aliasFailedOnce: qQ
          } = QQ;
          return "holdout" === FQ || "cloudflare" !== wQ && "direct" !== wQ || "number" !== typeof LQ ? null : !0 === qQ ? {
            route: wQ,
            until: LQ,
            aliasFailedOnce: qQ
          } : {
            route: wQ,
            until: LQ
          }
        }(this.deps.storage.getItem(iQ))
      }
      heldRoute() {
        const QQ = this.stored();
        return null !== QQ && QQ.until > this.deps.now() ? QQ.route : null
      }
      store(QQ) {
        this.deps.storage.setItem(iQ, {
          ...QQ,
          arm: "cloudflare"
        })
      }
    }({
      storage: cQ.i,
      probe: async function(QQ, FQ) {
        const wQ = performance.now(),
          LQ = await (0, SQ.k)(QQ, {
            cache: "no-store"
          }, FQ, (async QQ => {
            const FQ = Math.round(performance.now() - wQ);
            return {
              answer: await WQ(QQ),
              ms: FQ
            }
          }));
        return null !== LQ && void 0 !== LQ ? LQ : {
          answer: "none",
          ms: 0
        }
      },
      hY: YQ.u,
      enabled: !(0, CQ.d)(),
      now: Date.now,
      random: Math.random,
      delay: QQ => new Promise((FQ => {
        setTimeout(FQ, QQ)
      }))
    });

    function OQ(QQ) {
      return async (FQ, wQ, DQ, kQ, mQ) => {
        let HQ;
        if ((0, LQ.F)(DQ)) {
          if (mQ.aborted) return sQ();
          const QQ = await rQ(FQ, wQ, kQ);
          if (mQ.aborted || AQ.i.matchmakingEnded(QQ.isError() ? null : performance.now()), QQ.isError()) {
            const FQ = QQ.asError();
            return console.log("Join room did not succeed, reason:", FQ.message), FQ.forward()
          }
          HQ = QQ.getValue()
        } else {
          AQ.i.skipPlayWait();
          const QQ = IQ(DQ.replace("https://", "").replace("http://", ""));
          if (QQ.isError()) return QQ.asError().forward();
          HQ = {
            endpoint: QQ.getValue(),
            gameNameWithVariation: wQ,
            lobbyName: FQ instanceof qQ.h ? FQ.getLobbyName() : FQ
          }
        }
        if (mQ.aborted) return sQ();
        console.log(`Connecting to ${HQ.gameNameWithVariation} in lobby ${HQ.lobbyName} on game server ${HQ.endpoint}`), bQ.l.GA("matchmakeAndPlayStepCompleted", {
          step: oQ.o.REQUEST_TO_MATCHMAKING,
          totalSubSteps: 1
        }), (0, YQ.k)(), xQ.b.markGameLoadStart(), (0, eQ.s)({
          websocketUrl: HQ.endpoint,
          gameNameWithVariation: HQ.gameNameWithVariation,
          lobbyName: HQ.lobbyName
        }), bQ.l.GA("loadingScreenState", "loadingPage:loadingGame");
        const MQ = async () => {
          const QQ = await async function(QQ, FQ, wQ, LQ) {
            const qQ = await rQ(QQ, FQ, wQ);
            if (!qQ.isError() && !LQ.aborted) {
              const {
                endpoint: QQ,
                gameNameWithVariation: FQ,
                lobbyName: wQ
              } = qQ.getValue();
              (0, eQ.s)({
                websocketUrl: QQ,
                gameNameWithVariation: FQ,
                lobbyName: wQ
              })
            }
            return qQ
          }(FQ, wQ, kQ, mQ);
          return QQ.isError() || (HQ = QQ.getValue()), QQ
        }, GQ = !(0, LQ.F)(DQ), pQ = () => QQ({
          place: HQ,
          userContext: kQ,
          direct: GQ,
          rematch: MQ
        }, mQ);
        let cQ = await pQ();
        const CQ = cQ.isError() && !0 === cQ.asError().debugResult.rematch;
        if (cQ.isError() && !GQ && !mQ.aborted && (CQ || await RQ.afterJoinFailed(HQ.endpoint, cQ.asError().debugResult.gameServerUnreachable))) {
          if (mQ.aborted) return sQ();
          console.log("Matchmaking again");
          const QQ = await MQ();
          if (QQ.isError()) return QQ.asError().forward();
          if (mQ.aborted) return sQ();
          cQ = await pQ(), !cQ.isError() || CQ && !vQ(new URL(HQ.endpoint).hostname) || await RQ.afterJoinFailed(HQ.endpoint, cQ.asError().debugResult.gameServerUnreachable)
        }
        return cQ.isError() ? cQ.asError().forward() : (RQ.afterJoined(HQ.endpoint), (0, tQ.Y)(), window.gtag ? window.gtag("event", "conversion", {
          send_to: "AW-16469618203/ipUBCJKWoJUZEJvcqa09"
        }) : console.error("window.gtag not defined"), uQ.d.value({
          gameNameWithVariation: HQ.gameNameWithVariation,
          lobbyName: HQ.lobbyName,
          addLobbyToRecentlyPlayed: !(FQ instanceof qQ.h)
        }))
      }
    }

    function sQ() {
      return uQ.d.errorWithCode("Left the game while it loaded", oQ.o.REQUEST_TO_MATCHMAKING, {
        severity: "low",
        wF: !0
      })
    }
    async function rQ(QQ, FQ, wQ) {
      return (0, LQ.F)(QQ) || QQ instanceof qQ.h || !(QQ.length > HQ.T) ? await MQ.b.matchmakePlayer(wQ, QQ, FQ, (0, pQ.d)()).then((QQ => {
        if (!1 === QQ.succeeded) return uQ.d.errorWithCode(QQ.failReason, oQ.o.REQUEST_TO_MATCHMAKING, {
          severity: "low"
        });
        const {
          gameServerHost: FQ,
          lobbyName: wQ,
          gameNameWithVariation: LQ
        } = QQ, qQ = IQ(RQ.hostFor(FQ));
        return qQ.isError() ? qQ.asError().forward() : uQ.d.value({
          endpoint: qQ.getValue(),
          gameNameWithVariation: LQ,
          lobbyName: wQ
        })
      })).catch((QQ => (console.error("Bad response from the matchmaking server:", QQ), uQ.d.errorWithCode(QQ.toString(), oQ.o.REQUEST_TO_MATCHMAKING, {
        error: QQ,
        severity: "medium"
      })))) : (console.error("Invalid lobby ID:", QQ), uQ.d.errorWithCode("This lobby link's name is too long. Ask for a new link.", oQ.o.REQUEST_TO_MATCHMAKING, {
        severity: "low"
      }))
    }

    function IQ(QQ) {
      const FQ = GQ.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(QQ);
      return FQ.isError() ? uQ.d.errorWithCode(FQ.asError().message, oQ.o.CONNECT_TO_GAME_SERVER, {
        severity: "medium"
      }) : uQ.d.value(FQ.getValue())
    }
    setTimeout((() => {
      window.initialD ? Date.now = window.initialD : console.error("window.initialD not defined")
    }), 3e3), window.leaveGame = () => {
      (0, eQ.l)("/")
    }
  },
  8997: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => YQ,
      d: () => bQ
    });
    var LQ = wQ(17),
      qQ = wQ(1694),
      oQ = wQ(27),
      DQ = wQ(1362),
      kQ = wQ(3542),
      vQ = wQ(1471),
      mQ = wQ(1395);
    const uQ = 2592e5,
      HQ = "notificationOptInLastPromptedAt";
    async function bQ() {
      var QQ;
      const FQ = await YQ();
      if (null === FQ) return;
      const wQ = null !== (QQ = oQ.i.getItem(HQ)) && void 0 !== QQ ? QQ : 0;
      if (Date.now() - wQ < uQ) return;
      if ((0, mQ.d)()) return;
      const LQ = await DQ.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: qQ.d.supports("notifications") ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOn: "cancel"
      }).getResult();
      "notificationTornDown" !== LQ && (oQ.i.setItem(HQ, Date.now()), (0, vQ.reportAnalyticsClick)({
        id: !0 === LQ ? "push.allow" : "push.deny",
        value: qQ.d.supports("notifications") ? "app" : "browser"
      }), !0 === LQ && FQ().catch((QQ => {
        console.error("Failed to ask for push notifications:", QQ)
      })))
    }
    async function YQ() {
      return await qQ.d.ready, qQ.d.supports("notifications") ? LQ.c.get("mobilePushNotificationsCanAsk") ? async () => {
        qQ.d.request("notifications.requestPermission", {}).then((QQ => {
          let {
            canAsk: FQ
          } = QQ;
          LQ.c.set({
            mobilePushNotificationsCanAsk: FQ
          })
        }), (QQ => {
          console.error("The app couldn't ask for push notifications:", QQ)
        }))
      }: null: await kQ.c.canAsk() ? () => kQ.c.requestPermission() : null
    }
  },
  36110: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => bQ,
      g: () => uQ,
      h: () => YQ,
      j: () => HQ
    });
    var LQ = wQ(317),
      qQ = wQ(647),
      oQ = wQ(651),
      DQ = wQ(27);
    const kQ = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      vQ = "playSessionGameNameWithVariation",
      mQ = "wasMatchmakePlayer";

    function uQ() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DQ.m;
      (0, oQ.f)(QQ, kQ)
    }

    function HQ() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DQ.m).setItem(mQ, !0)
    }

    function bQ() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DQ.m;
      return (0, oQ.b)(QQ, kQ)
    }

    function YQ(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DQ.m;
      const wQ = (0, oQ.b)(FQ, kQ),
        uQ = function(QQ) {
          const FQ = QQ.getItem(vQ);
          return "string" !== typeof FQ ? null : FQ
        }(FQ),
        HQ = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DQ.m).getItem(mQ)
        }(FQ);
      let bQ;
      return bQ = null !== wQ && null !== uQ && (0, oQ.d)(FQ, kQ) && function(QQ, FQ, wQ) {
          const qQ = (0, LQ.Wb)(QQ),
            oQ = (0, LQ.Wb)(FQ),
            DQ = (0, LQ.Pb)(QQ),
            kQ = (0, LQ.Pb)(FQ);
          return !(qQ !== oQ || !wQ) || qQ === oQ && DQ === kQ
        }(uQ, QQ, HQ) ? wQ : (0, qQ.d)(), (0, oQ.g)(FQ, kQ, bQ), FQ.setItem(vQ, QQ),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DQ.m).removeItem(mQ)
        }(FQ), bQ
    }
  },
  36102: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => MQ,
      f: () => GQ
    });
    var LQ = wQ(1038),
      qQ = wQ(626),
      oQ = wQ(317),
      DQ = wQ(1044),
      kQ = wQ(634),
      vQ = wQ(656),
      mQ = wQ(4367),
      uQ = wQ(96),
      HQ = wQ(134),
      bQ = wQ(1725),
      YQ = wQ(114),
      xQ = wQ(36110),
      AQ = wQ(27),
      tQ = wQ(649),
      eQ = wQ(36117);

    function MQ() {
      var QQ, FQ;
      return [...null !== (QQ = navigator.languages) && void 0 !== QQ ? QQ : [null !== (FQ = navigator.language) && void 0 !== FQ ? FQ : "none"], "EN-gb"]
    }

    function GQ(QQ, FQ, wQ, GQ, pQ) {
      const cQ = (0, LQ.f)(FQ) ? (0, LQ.l)(FQ) : null,
        CQ = {
          cookies: (0, bQ.getAllCookiesForGameNameWithVariation)(FQ),
          isMobile: (0, uQ.isMobile)(),
          isUsingCustomGameTexturePack: null !== cQ && pQ(cQ),
          generalCookies: {
            joinDiscord: !!AQ.i.getItem("DiscordPressed"),
            newGo: mQ.e,
            ...QQ.getMetricsCookies(),
            trafficCode: GQ,
            compliance: uQ.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, uQ.getBrowserName)(),
            version: (0, uQ.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, uQ.getPlatformType)(),
            deviceType: (0, YQ.e)()
          },
          isLoggedIn: QQ.isLoggedIn(),
          lobbyName: wQ,
          languages: MQ(),
          version: qQ.b,
          siteUsed: HQ.r,
          subsiteUsed: HQ.w,
          playSessionId: (0, xQ.h)(FQ),
          visitSessionId: (0, tQ.c)(),
          clientReason: kQ.j.reason,
          budgetBasis: (0, eQ.f)(),
          ...null !== vQ.n && {
            diagClaim: vQ.n.claimId
          }
        };
      return null !== cQ && (0, oQ.Hc)(cQ) ? (CQ.lobbyName = (0, LQ.d)(cQ, (0, LQ.i)(FQ), wQ), {
        roomName: `classic_${DQ.h}`,
        joinOptions: CQ
      }) : {
        roomName: FQ,
        joinOptions: CQ
      }
    }
  },
  36209: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ) {
      for (let wQ = 0; wQ < QQ.length; wQ++)
        if (QQ[wQ].identifier === FQ) return QQ[wQ];
      return null
    }

    function qQ(QQ, FQ) {
      return null !== LQ(QQ, FQ)
    }
    wQ.d(FQ, {
      d: () => LQ,
      f: () => qQ
    })
  },
  36514: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      C: () => zQ,
      G: () => lQ,
      I: () => TQ,
      J: () => jQ,
      b: () => vQ,
      f: () => sQ,
      j: () => kQ,
      l: () => NQ,
      n: () => RQ,
      o: () => CQ,
      r: () => UQ,
      s: () => IQ,
      u: () => WQ,
      y: () => KQ
    });
    var LQ = wQ(27);
    const qQ = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      oQ = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      DQ = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      kQ = oQ.filter((QQ => "docsButton" !== QQ)),
      vQ = DQ.filter((QQ => "aiHelperButton" !== QQ)),
      mQ = "codeEditorTutorials",
      uQ = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      HQ = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let bQ = null,
      YQ = null;
    const xQ = new Set,
      AQ = new Set;
    let tQ = null;
    const eQ = new Set,
      MQ = new Set;

    function GQ() {
      MQ.forEach((QQ => {
        QQ()
      }))
    }

    function pQ() {
      if (!bQ) {
        const QQ = LQ.i.getItem(mQ);
        bQ = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof QQ && null !== QQ ? QQ : {}
        }
      }
      return bQ
    }

    function cQ(QQ) {
      const FQ = pQ();
      FQ[QQ] || (bQ = {
        ...FQ,
        [QQ]: !0
      }, LQ.i.setItem(mQ, bQ))
    }

    function CQ(QQ) {
      return "docsOverview" === QQ ? oQ : "aiHelperOverview" === QQ ? DQ : YQ ? qQ[YQ] : []
    }

    function SQ(QQ) {
      return ("worldCodeButton" !== QQ || !pQ().worldCodeIntroShown) && !eQ.has(QQ)
    }

    function iQ(QQ) {
      var FQ;
      return (null === (FQ = tQ) || void 0 === FQ ? void 0 : FQ.name) === QQ ? tQ.stepsDone : xQ
    }

    function WQ(QQ, FQ) {
      if (! function(QQ) {
          return tQ ? tQ.name === QQ : "welcome" === QQ
        }(QQ) || !SQ(FQ) || iQ(QQ).has(FQ)) return !1;
      if (tQ) return !0;
      const wQ = uQ[FQ];
      return wQ ? !pQ()[wQ] || AQ.has(FQ) : !pQ()[HQ[QQ]]
    }

    function RQ(QQ) {
      var FQ;
      return null !== (FQ = CQ(QQ).find((FQ => WQ(QQ, FQ)))) && void 0 !== FQ ? FQ : null
    }

    function OQ(QQ) {
      var FQ;
      cQ(HQ[QQ]), (null === (FQ = tQ) || void 0 === FQ ? void 0 : FQ.name) === QQ && (tQ = null)
    }

    function sQ(QQ) {
      const FQ = (tQ ? [tQ.name] : ["welcome", "docsOverview"]).find((FQ => RQ(FQ) === QQ));
      if (!FQ) return;
      iQ(FQ).add(QQ);
      const wQ = uQ[QQ];
      wQ && (cQ(wQ), tQ || AQ.add(QQ)), null === RQ(FQ) && OQ(FQ), GQ()
    }

    function rQ(QQ, FQ) {
      const wQ = CQ(QQ),
        LQ = iQ(QQ);
      for (let qQ = wQ.indexOf(FQ) - 1; qQ >= 0; qQ--)
        if (LQ.has(wQ[qQ]) && SQ(wQ[qQ])) return wQ[qQ];
      return null
    }

    function IQ(QQ, FQ) {
      return null !== rQ(QQ, FQ)
    }

    function UQ(QQ, FQ) {
      const wQ = rQ(QQ, FQ);
      wQ && (iQ(QQ).delete(wQ), GQ())
    }

    function NQ(QQ) {
      OQ(QQ), "welcome" === QQ && CQ("welcome").forEach((QQ => {
        const FQ = uQ[QQ];
        FQ && cQ(FQ)
      })), GQ()
    }

    function TQ(QQ) {
      tQ = {
        name: QQ,
        stepsDone: new Set
      }, GQ()
    }

    function KQ() {
      (tQ || 0 !== xQ.size || 0 !== AQ.size) && (tQ = null, xQ.clear(), AQ.clear(), GQ())
    }

    function zQ(QQ, FQ) {
      const wQ = FQ ? QQ : YQ === QQ ? null : YQ;
      wQ !== YQ && (YQ = wQ, GQ())
    }

    function lQ(QQ, FQ) {
      eQ.has(QQ) === FQ && (FQ ? eQ.delete(QQ) : eQ.add(QQ), GQ())
    }

    function jQ(QQ) {
      return MQ.add(QQ), () => {
        MQ.delete(QQ)
      }
    }
  },
  35938: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => LQ,
      h: () => qQ,
      i: () => oQ,
      l: () => DQ
    });
    const LQ = 1024,
      qQ = 1024 * LQ;

    function oQ(QQ) {
      return 2 ** Math.floor(Math.log2(Math.max(1, QQ / qQ)))
    }

    function DQ(QQ) {
      return (QQ / qQ).toFixed(1)
    }
  },
  36119: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => oQ,
      e: () => kQ,
      f: () => DQ,
      h: () => vQ,
      l: () => mQ,
      o: () => uQ
    });
    var LQ = wQ(201);
    const qQ = 32 * wQ(35938).h,
      oQ = 6144,
      DQ = 4608,
      kQ = 512;

    function vQ(QQ) {
      return Math.floor(qQ * QQ / oQ)
    }

    function mQ(QQ) {
      const FQ = QQ - Math.floor(QQ / 6);
      let wQ = LQ.e.maxChunkHorizAddDistance,
        qQ = LQ.e.maxChunkVertAddDistance;
      if (uQ(wQ + 1, qQ + 1) <= FQ) return null;
      for (; uQ(wQ + 1, qQ + 1) > FQ && (wQ > 0 || qQ > 0);) wQ > qQ ? wQ-- : qQ--;
      return {
        horizontal: wQ,
        vertical: qQ
      }
    }

    function uQ(QQ, FQ) {
      const wQ = Math.max(QQ, FQ);
      let LQ = 0;
      for (let qQ = -wQ; qQ <= wQ; qQ++)
        for (let oQ = -wQ; oQ <= wQ; oQ++)
          for (let DQ = -wQ; DQ <= wQ; DQ++) HQ(QQ, FQ, qQ, oQ, DQ) && LQ++;
      return LQ
    }

    function HQ(QQ, FQ, wQ, LQ, qQ) {
      const oQ = wQ * wQ + qQ * qQ;
      return QQ === FQ ? oQ + LQ * LQ <= QQ * QQ : QQ > FQ ? Math.abs(LQ) <= FQ && oQ + LQ * LQ <= QQ * QQ : oQ <= QQ * QQ && oQ + LQ * LQ <= FQ * FQ
    }
  },
  36117: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => CQ,
      f: () => cQ,
      g: () => pQ
    });
    var LQ = wQ(201),
      qQ = wQ(96),
      oQ = wQ(2836),
      DQ = wQ(4253),
      kQ = wQ(641),
      vQ = wQ(36119);
    const mQ = 1048576,
      uQ = 1024 * mQ,
      HQ = 400 * mQ,
      bQ = 147456,
      YQ = .5,
      xQ = 1.5 * uQ,
      AQ = 768 * mQ;

    function tQ(QQ) {
      return HQ + QQ * bQ
    }

    function eQ(QQ, FQ, wQ) {
      var qQ, DQ;
      let {
        footprintBytes: kQ,
        basis: mQ,
        namesLimit: eQ
      } = function(QQ) {
        const {
          os: FQ,
          deviceMemory: wQ
        } = QQ;
        if ("ios" === FQ) switch ((0, oQ.e)(QQ)) {
          case "ipad_m":
            return {
              footprintBytes: tQ(vQ.d), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: AQ, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: xQ, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: AQ, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof wQ && Number.isFinite(wQ) && wQ > 0 ? {
          footprintBytes: wQ * uQ * YQ,
          basis: `memory-${wQ}`,
          namesLimit: !0
        } : "android" === FQ ? {
          footprintBytes: AQ,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: tQ(vQ.f),
          basis: "unreported",
          namesLimit: !1
        }
      }(QQ);
      if (wQ) {
        const QQ = Math.min(kQ, tQ(vQ.d));
        kQ = HQ + Math.max(0, QQ - HQ) / 2, mQ += "+killed", eQ = !0
      }
      null !== FQ && tQ(FQ) < kQ && (kQ = tQ(FQ), mQ += "+learned", eQ = !0);
      const MQ = function(QQ) {
          const FQ = Math.floor((QQ - HQ) / bQ);
          return Math.min(vQ.d, Math.max(vQ.e, FQ))
        }(kQ),
        GQ = (0, vQ.l)(MQ);
      return {
        footprintBytes: kQ,
        shedFootprintBytes: eQ ? Math.max(kQ, tQ(MQ)) : null,
        chunkCap: MQ,
        maxHorizDistance: null !== (qQ = null === GQ || void 0 === GQ ? void 0 : GQ.horizontal) && void 0 !== qQ ? qQ : LQ.e.maxChunkHorizAddDistance,
        maxVertDistance: null !== (DQ = null === GQ || void 0 === GQ ? void 0 : GQ.vertical) && void 0 !== DQ ? DQ : LQ.e.maxChunkVertAddDistance,
        basis: mQ
      }
    }
    let MQ = null;

    function GQ() {
      return eQ({
        os: (0, qQ.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, oQ.h)()
      }, (0, DQ.d)(), (0, kQ.B)("wasm").length > 0)
    }

    function pQ() {
      return MQ ??= GQ(), MQ
    }

    function cQ() {
      var QQ;
      return (null !== (QQ = MQ) && void 0 !== QQ ? QQ : GQ()).basis
    }

    function CQ(QQ, FQ) {
      return QQ.setChunkCap(FQ.chunkCap)
    }
  },
  36224: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => uQ,
      g: () => bQ,
      j: () => eQ,
      n: () => mQ
    });
    var LQ = wQ(17),
      qQ = wQ(2313),
      oQ = wQ(2320),
      DQ = wQ(2327),
      kQ = wQ(2407),
      vQ = wQ(22);

    function mQ(QQ, FQ) {
      return (!(0, DQ.b)() || 0 === QQ && 0 === FQ) && (0, oQ.w)(qQ.i.Joystick, 0, QQ, FQ, 0)
    }
    const uQ = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function HQ(QQ) {
      return QQ.classList.contains("TouchKeyHit") && YQ() ? null : QQ.firstElementChild
    }

    function bQ(QQ) {
      return QQ.classList.contains("TouchKeyHit") && !QQ.classList.contains("CanvasZone") ? {
        whole: !YQ(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: xQ(HQ(QQ))
      }
    }

    function YQ() {
      return document.documentElement.classList.contains(kQ.o)
    }

    function xQ(QQ) {
      return !(QQ instanceof HTMLElement) || QQ.offsetWidth <= 0 || QQ.offsetHeight <= 0 ? null : {
        width: QQ.offsetWidth,
        height: QQ.offsetHeight
      }
    }

    function AQ(QQ, FQ) {
      const wQ = QQ => Math.min(65535, Math.round(4 * QQ));
      return (wQ(QQ) | wQ(FQ) << 16) >>> 0
    }

    function tQ(QQ) {
      return {
        x: QQ.left + QQ.width / 2,
        y: QQ.top + QQ.height / 2,
        radius: Math.min(QQ.width, QQ.height) / 2
      }
    }
    const eQ = new class {
      constructor(QQ) {
        this.write = QQ, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        FQ ? this.elements.set(QQ, {
          element: FQ,
          hidden: wQ
        }) : this.elements.delete(QQ), this.measureOne(QQ)
      }
      measure() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = QQ.left, this.canvasTop = QQ.top;
        for (const FQ of this.elements.keys()) this.measureOne(FQ)
      }
      hitZone(QQ, FQ) {
        let wQ = null,
          LQ = 1;
        for (const qQ of this.elements.keys()) {
          const oQ = this.shown(qQ);
          if (!oQ) continue;
          const {
            rect: DQ,
            element: kQ
          } = oQ, vQ = tQ(DQ), mQ = Math.max(0, DQ.width / 2 - vQ.radius), uQ = Math.max(0, DQ.height / 2 - vQ.radius), bQ = Math.max(0, Math.abs(QQ - vQ.x) - mQ), YQ = Math.max(0, Math.abs(FQ - vQ.y) - uQ), AQ = kQ.firstElementChild;
          let eQ = Math.hypot(bQ, YQ) / vQ.radius;
          const MQ = xQ(HQ(kQ));
          MQ && (eQ = Math.min(eQ, Math.max(2 * Math.abs(QQ - vQ.x) / MQ.width, 2 * Math.abs(FQ - vQ.y) / MQ.height))), eQ < LQ && (wQ = {
            code: qQ,
            element: kQ,
            key: AQ,
            ...vQ
          }, LQ = eQ)
        }
        return wQ
      }
      measureOne(QQ) {
        const FQ = this.shown(QQ);
        if (!FQ) return void this.write(qQ.i.TouchZone, QQ, 0, 0, 0);
        const {
          rect: wQ,
          element: LQ
        } = FQ, oQ = tQ(wQ);
        this.write(qQ.i.TouchZone, QQ, oQ.x - this.canvasLeft, oQ.y - this.canvasTop, AQ(wQ.width, wQ.height));
        const DQ = xQ(HQ(LQ));
        this.write(qQ.i.TouchZone, 256 | QQ, 0, 0, DQ ? AQ(DQ.width, DQ.height) : 0)
      }
      shown(QQ) {
        const FQ = this.elements.get(QQ),
          wQ = LQ.c.get("worldPanelHud");
        if (!FQ || FQ.hidden || "none" === wQ) return null;
        const qQ = FQ.element.getBoundingClientRect();
        return qQ.width <= 0 || qQ.height <= 0 ? null : {
          rect: qQ,
          element: FQ.element
        }
      }
    }(oQ.w);
    (0, vQ.o)(kQ.g, (() => {
      eQ.measure()
    }))
  },
  36470: (QQ, FQ, wQ) => {
    function LQ(QQ) {
      return "fetch" === QQ || "timeout" === QQ || "integrity" === QQ ? "download" : "browser"
    }
    wQ.d(FQ, {
      d: () => qQ,
      g: () => DQ,
      k: () => vQ,
      n: () => kQ,
      r: () => LQ,
      s: () => oQ
    });
    const qQ = "https://discord.gg/playbloxd";

    function oQ(QQ) {
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

    function DQ(QQ, FQ) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: FQ ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: QQ.code
        },
        discordLink: FQ,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function kQ() {
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

    function vQ(QQ, FQ, wQ) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: wQ ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: QQ.reason
        },
        discordLink: null === QQ.name,
        confirm: FQ ? "general:reconnect" : QQ.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  36523: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ) {
      return null === QQ || null === FQ ? QQ === FQ : QQ[0] === FQ[0] && QQ[1] === FQ[1] && QQ[2] === FQ[2]
    }

    function qQ(QQ) {
      return [QQ[0] + .5, QQ[1] + .5, QQ[2] + .5]
    }
    wQ.d(FQ, {
      d: () => qQ,
      g: () => LQ
    })
  },
  36472: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => vQ,
      e: () => kQ
    });
    const LQ = {
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
      oQ = {
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
      DQ = {
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
      kQ = {
        debug: {
          name: "debug",
          specifier: "@plugins/debug",
          sourceVfsPath: "/node_modules/@plugins/debug/index.ts",
          typesVfsPath: "/node_modules/@plugins/debug/index.d.ts",
          files: LQ.files,
          dependencies: LQ.dependencies,
          bundledSource: LQ.bundledSource,
          types: LQ.types
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
          files: oQ.files,
          dependencies: oQ.dependencies,
          bundledSource: oQ.bundledSource,
          types: oQ.types
        },
        sessionBasedGame: {
          name: "sessionBasedGame",
          specifier: "@plugins/sessionBasedGame",
          sourceVfsPath: "/node_modules/@plugins/sessionBasedGame/index.ts",
          typesVfsPath: "/node_modules/@plugins/sessionBasedGame/index.d.ts",
          files: DQ.files,
          dependencies: DQ.dependencies,
          bundledSource: DQ.bundledSource,
          types: DQ.types
        }
      };

    function vQ(QQ) {
      const FQ = [],
        wQ = new Set,
        LQ = QQ => {
          if (wQ.has(QQ)) return;
          const qQ = kQ[QQ];
          if (qQ) {
            wQ.add(QQ);
            for (const QQ of qQ.dependencies) LQ(QQ);
            FQ.push(QQ)
          }
        };
      for (const qQ of QQ) LQ(qQ);
      return FQ
    }
  },
  36481: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => vQ,
      c: () => kQ,
      f: () => DQ,
      j: () => oQ,
      l: () => mQ,
      m: () => uQ,
      n: () => xQ,
      p: () => YQ,
      t: () => bQ
    });
    var LQ = wQ(1254);
    const qQ = ["quickjs", "ses"];

    function oQ(QQ) {
      return qQ.includes(QQ)
    }

    function DQ(QQ) {
      return QQ === LQ.i || QQ === LQ.m
    }

    function kQ(QQ, FQ) {
      return QQ === LQ.i && FQ === LQ.m || QQ === LQ.m && FQ === LQ.i
    }

    function vQ(QQ) {
      const FQ = LQ.m in QQ,
        wQ = LQ.i in QQ;
      return FQ && wQ ? null : FQ ? LQ.m : wQ ? LQ.i : null
    }

    function mQ(QQ, FQ, wQ) {
      const LQ = `${FQ}/`;
      return QQ.filter((QQ => QQ.startsWith(LQ))).map((QQ => [QQ, `${wQ}/${QQ.slice(LQ.length)}`]))
    }

    function uQ(QQ, FQ) {
      let wQ = 0;
      for (const [LQ, qQ] of Object.entries(QQ)) LQ !== FQ && (wQ += qQ.length);
      return wQ
    }
    const HQ = "@plugins/";

    function bQ(QQ) {
      return `${HQ}${QQ}`
    }

    function YQ(QQ, FQ) {
      return `/node_modules/@plugins/${QQ}/${FQ}`
    }

    function xQ(QQ) {
      if (!QQ.startsWith(HQ)) return null;
      const FQ = QQ.slice(HQ.length);
      return function(QQ) {
        return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(QQ)
      }(FQ) ? FQ : null
    }
  },
  36486: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => kQ,
      d: () => qQ,
      g: () => DQ,
      h: () => vQ,
      k: () => oQ
    });
    var LQ = wQ(36483);
    const qQ = 5,
      oQ = "[SCHEMATIC]",
      DQ = 1024e4;

    function kQ(QQ) {
      return QQ.endsWith(".bloxdschem") && (0, LQ.p)(QQ.slice(0, -11) + ".ts") && QQ.length <= 64
    }

    function vQ(QQ) {
      return Object.fromEntries(Object.keys(QQ).map((QQ => [QQ, oQ])))
    }
  },
  36483: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ,
      h: () => oQ,
      k: () => bQ,
      l: () => kQ,
      n: () => vQ,
      o: () => mQ,
      p: () => HQ,
      t: () => uQ,
      w: () => DQ
    });
    var LQ = wQ(1254);
    let qQ = function(QQ) {
        return QQ[QQ.Join = 0] = "Join", QQ[QQ.Leave = 1] = "Leave", QQ[QQ.Push = 2] = "Push", QQ[QQ.Cursor = 3] = "Cursor", QQ[QQ.Submit = 4] = "Submit", QQ[QQ.ReloadAsVariation = 5] = "ReloadAsVariation", QQ[QQ.CreateFile = 6] = "CreateFile", QQ[QQ.RenameFile = 7] = "RenameFile", QQ[QQ.DeleteFile = 8] = "DeleteFile", QQ[QQ.SetEngine = 9] = "SetEngine", QQ[QQ.RenameFolder = 10] = "RenameFolder", QQ
      }({}),
      oQ = function(QQ) {
        return QQ[QQ.Joined = 0] = "Joined", QQ[QQ.Updates = 1] = "Updates", QQ[QQ.Presence = 2] = "Presence", QQ[QQ.RemoteCursor = 3] = "RemoteCursor", QQ[QQ.ForceClose = 4] = "ForceClose", QQ[QQ.LobbyFilesChanged = 5] = "LobbyFilesChanged", QQ[QQ.EngineSettings = 6] = "EngineSettings", QQ
      }({});

    function DQ(QQ) {
      return "lobby" === QQ.kind ? `lobby:${QQ.path}` : `codeBlock:${QQ.pos[0]},${QQ.pos[1]},${QQ.pos[2]}`
    }

    function kQ(QQ) {
      if ("lobby" === QQ) return {
        kind: "lobby",
        path: LQ.i
      };
      if (QQ.startsWith("lobby:")) {
        const FQ = QQ.slice(6);
        return HQ(FQ) ? {
          kind: "lobby",
          path: FQ
        } : null
      }
      const FQ = QQ.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return FQ ? {
        kind: "codeBlock",
        pos: [parseInt(FQ[1]), parseInt(FQ[2]), parseInt(FQ[3])]
      } : null
    }

    function vQ(QQ) {
      return QQ.endsWith(".d.ts")
    }

    function mQ(QQ) {
      return QQ.endsWith(".ts") && !vQ(QQ)
    }
    const uQ = 64;

    function HQ(QQ) {
      if (!QQ || QQ !== QQ.trim()) return !1;
      if (QQ.length > uQ) return !1;
      if (QQ.startsWith("/") || QQ.includes("\\") || QQ.includes("\0")) return !1;
      if (!vQ(QQ) && !mQ(QQ) && ! function(QQ) {
          return QQ.endsWith(".js") && !QQ.endsWith(".min.js") && !QQ.endsWith(".bundle.js")
        }(QQ)) return !1;
      const FQ = QQ.split("/");
      for (const wQ of FQ)
        if ("" === wQ || "." === wQ || ".." === wQ) return !1;
      return !0
    }
    const bQ = 14e3
  },
  4686: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => qQ,
      d: () => LQ,
      f: () => oQ,
      i: () => vQ,
      k: () => DQ
    });
    const LQ = ["sine", "triangle", "square", "sawtooth"],
      qQ = 55,
      oQ = {
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

    function DQ(QQ) {
      return "string" !== typeof QQ ? QQ : Object.hasOwn(oQ, QQ) ? oQ[QQ] : null
    }

    function kQ(QQ, FQ, wQ) {
      return Math.min(wQ, Math.max(FQ, QQ))
    }

    function vQ(QQ) {
      const FQ = kQ(QQ.durationMs, 10, 500),
        wQ = kQ(QQ.attackMs, 0, FQ),
        {
          intonation: qQ
        } = QQ;
      return {
        waveform: LQ.includes(QQ.waveform) ? QQ.waveform : "sine",
        pitchHz: kQ(QQ.pitchHz, 20, 4e3),
        glideSemitones: kQ(QQ.glideSemitones, -24, 24),
        durationMs: FQ,
        attackMs: wQ,
        releaseMs: kQ(QQ.releaseMs, 0, FQ - wQ),
        lowpassHz: null === QQ.lowpassHz ? null : kQ(QQ.lowpassHz, 20, 2e4),
        volume: kQ(QQ.volume, 0, 2),
        intonation: {
          variationSemitones: kQ(qQ.variationSemitones, 0, 6),
          declineSemitones: kQ(qQ.declineSemitones, 0, 12),
          questionRiseSemitones: kQ(qQ.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: kQ(qQ.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: kQ(QQ.syllableMs, 25, 200)
      }
    }
  },
  9933: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAHklEQVR4nGNY3x/6nxjMQH2Fcyq8/hODaWA11d0IAPvLyX36T0UzAAAAAElFTkSuQmCC"
  },
  18175: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAC4CAYAAADqkK6nAAAAAXNSR0IArs4c6QAAAuxJREFUeJzt1jFOFHEchuEfxpqeaGusuYDhCpbewMbEwmNYmNBwA0quYLgAtaGF2HuBtVpEWHBNXnBXnqeanUzxT+bNtzMDsOl21nhm8eCnYBvd2c6zxzwFT8N9S7WYmfn0am9mZl6+2H2M87DhLi5/zMzM5/Pvy1u3GrJU5FYt1WJm5svB60c+Ctvo49dvy8urliwVuetL5RuKv7bqG8tSkXt+88afFurN+3czM7P/9sPDnIiNcHZy+Nvv06Pjlc9d9fJrqXxT0bu1VHexUE/Tzfd912JdZ6nIrb1UFop1WSpyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIit3ZUZyeHc3Zy+JBn4T9hqcg9X/fB06Pj337vv/2QH4bNs/x3uvn+72OpyO1cu17MzHx6tTczMy9f7P6L87BlLi5/zMzM5/Pvy1s7lorczop7i5mZLwevH/kobKOPX78tL69aslTkVi3Vkm8sbln1DXXzGUtF7r6lWlo8+CnYRne2Y6mAzfcTBsFAqM32XQcAAAAASUVORK5CYII="
  },
  20052: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJUlEQVR4nGMwsIpkIAYz0FThfyjGymcgVSFMEJtCsBjJCgcgeABOGmAZtndiFgAAAABJRU5ErkJggg=="
  },
  20061: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJ0lEQVR4nGMwsIpkIAYzQBn/kTBWMQYsgtgwA+0UMuBTNIgU4g1wAE6xgffL0CuLAAAAAElFTkSuQmCC"
  },
  20066: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJElEQVR4nGMwsIpkIAYzkKrwPxLGKsZAc4UMaJh8hdQPHoIKAboeZhN3YNlSAAAAAElFTkSuQmCC"
  },
  20071: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMUlEQVR4nGMwsIpkIAYzoAn8R8MM2BSiK/qPrJiQov8wxWQrxMkm2USiPUNS8OANcADc3H37DfNNQQAAAABJRU5ErkJggg=="
  },
  20077: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAKElEQVR4nGMwsIpkIAYzIHH+48AMyApxKfoPU0yRQgZsYkNJIcEABwCQU3/5LLo7QwAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);