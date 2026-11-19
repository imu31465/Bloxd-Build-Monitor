export const id = 82;
export const ids = [82];
export const modules = {
  35540: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => nT,
      g: () => OT
    });
    var iT = IT(46),
      zT = IT(1751),
      kT = IT(35546),
      WT = IT.n(kT),
      XT = IT(4061),
      BT = IT(1729),
      FT = IT(1403),
      ST = IT(90),
      DT = IT(112),
      LT = IT(314),
      xT = IT(1042),
      cT = IT.n(xT),
      KT = IT(12),
      MT = IT(1055),
      rT = IT(1585),
      AT = IT(1665),
      gT = IT(1632),
      hT = IT(1810),
      wT = IT(1365),
      mT = IT(1884),
      eT = IT(1357),
      RT = IT(8205),
      uT = IT(35553),
      vT = IT(35570),
      ET = IT(1422),
      fT = IT(2231),
      CT = IT(1171),
      jT = IT(35582);
    var JT = IT(8680);
    var UT = IT(1083);
    const aT = IT(35587),
      YT = ["enter", "t", "/"];
    let QT = !1;

    function OT() {
      return QT || (0, AT.isTextEntry)(document.activeElement)
    }

    function HT() {
      var TT, oT;
      (0, mT.c)();
      const IT = null !== (TT = null === (oT = (0, wT.d)()) || void 0 === oT ? void 0 : oT.getBoundButton("keyboardChannel")) && void 0 !== TT ? TT : null;
      return IT ? (0, UT.jsx)(hT.c, {
        className: "ChatInputChannelGlyph",
        glyph: IT
      }) : null
    }

    function nT() {
      const {
        t: TT
      } = (0, CT.t)(), {
        isTouchScreen: oT
      } = (0, KT.k)(["isTouchScreen"]), IT = (0, eT.p)(), [kT, xT] = (0, iT.useState)(!1), hT = (0, iT.useRef)(kT), wT = (0, iT.useRef)(null), {
        messages: mT,
        reportedPlayers: OT,
        channel: nT
      } = (0, RT.l)(), ZT = (0, iT.useRef)(0), lT = (0, iT.useRef)(""), sT = (0, iT.useRef)(null);
      var tT;
      tT = sT, (0, iT.useEffect)((() => {
        if (!(0, ST.isIOS)()) return;
        const TT = tT.current;
        let oT = null;
        const IT = IT => {
            const iT = IT.changedTouches[0];
            oT = "none" === getComputedStyle(TT).pointerEvents ? {
              id: iT.identifier,
              y: iT.clientY
            } : null
          },
          iT = IT => {
            const iT = oT,
              zT = iT && (0, jT.b)(IT.changedTouches, iT.id);
            zT && (IT.preventDefault(), TT.scrollBy({
              top: iT.y - zT.clientY,
              behavior: "instant"
            }), iT.y = zT.clientY)
          };
        return TT.addEventListener("touchstart", IT, {
          passive: !0
        }), TT.addEventListener("touchmove", iT, {
          passive: !1
        }), () => {
          TT.removeEventListener("touchstart", IT), TT.removeEventListener("touchmove", iT)
        }
      }), [tT]);
      const [GT, pT] = (0, iT.useState)(!1), [bT, yT] = (0, iT.useState)(!1), NT = (0, iT.useRef)(GT), PT = (0, iT.useRef)(null), dT = (0, iT.useRef)(!1), VT = (0, iT.useRef)(null), To = (0, iT.useRef)(null), oo = (0, iT.useRef)(null), Io = (0, iT.useRef)(Wo);
      Io.current = Wo;
      const io = (0, fT.o)();

      function zo() {
        hT.current = !1, xT(!1), To.current.blur()
      }

      function ko(TT) {
        NT.current = TT, pT(TT)
      }

      function Wo() {
        const TT = To.current.value;
        To.current.value = "", Xo(TT)
      }

      function Xo(TT) {
        (0, RT.j)(TT), ZT.current = 0, ko(!1)
      }

      function Bo(TT, oT) {
        0 === ZT.current && (lT.current = To.current.value);
        const IT = (0, RT.i)(ZT.current + TT, oT);
        ZT.current = IT.stepsBack, To.current.value = 0 === IT.stepsBack ? lT.current : IT.text, setTimeout((() => {
          To.current && To.current.setSelectionRange(-1, -1)
        }), 0)
      }

      function Fo() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        sT.current && (!TT && NT.current || (sT.current.scrollTop = 1e5))
      }
      return (0, XT.d)(!0, kT, "ChatComponent"), (0, iT.useEffect)((() => (QT = kT, () => {
          QT = !1
        })), [kT]), (0, FT.g)("appManagerUpdated|openEverythingMenuName", (() => {
          (0, rT.u)() && xT(!1)
        })), (0, iT.useEffect)((() => {
          To.current.addEventListener("blur", (TT => {
            if (null === To.current) return;
            Array.from(document.querySelectorAll(":hover")).some((TT => TT.classList.contains("ChatInputChannel") || TT.classList.contains("ChatMsgSelectWrapper"))) || ((0, ST.isMobile)() && hT.current && "" !== To.current.value && Io.current(), xT(!1))
          }));
          const TT = TT => {
            wT.current.contains(TT.target) || (0, gT.i)(TT.target) || xT(!1)
          };
          document.addEventListener("touchstart", TT, {
            capture: !0
          });
          const oT = TT => {
            (0, vT.h)(TT.target) && (hT.current = !1, xT(!1))
          };
          document.addEventListener("mousedown", oT, {
            capture: !0
          });
          const IT = () => {
              clearTimeout(PT.current), ko(!0)
            },
            iT = () => {
              clearTimeout(PT.current), PT.current = setTimeout((() => {
                ko(!1), Fo()
              }), 4e3)
            },
            kT = () => {
              document.pointerLockElement ? (xT(!1), yT(!0), dT.current = !1, ko(!1), Fo()) : yT(!1)
            };
          sT.current.addEventListener("pointermove", (TT => {
            "touch" === TT.pointerType || dT.current || document.pointerLockElement || (dT.current = !0, clearTimeout(PT.current))
          })), sT.current.addEventListener("pointerleave", (TT => {
            "touch" !== TT.pointerType && (dT.current = !1, NT.current && iT())
          })), sT.current.addEventListener("pointerdown", (TT => {
            "touch" === TT.pointerType || document.pointerLockElement || (dT.current = !0, IT())
          })), sT.current.addEventListener("wheel", (TT => {
            document.pointerLockElement || TT.deltaY >= 0 && Math.abs(sT.current.scrollTop) < 1 || (IT(), dT.current || (PT.current = setTimeout((() => {
              ko(!1)
            }), 4e3)))
          }), {
            passive: !0
          }), sT.current.addEventListener("touchstart", IT), sT.current.addEventListener("touchend", iT), sT.current.addEventListener("touchcancel", iT), document.addEventListener("pointerlockchange", kT);
          const XT = TT => {
            if (io.shown && (hT.current || ! function(TT) {
                if ((0, AT.isTypingInInput)()) return !0;
                const oT = document.activeElement;
                return (oT instanceof HTMLButtonElement || "button" === (null === oT || void 0 === oT ? void 0 : oT.getAttribute("role"))) && ["Enter", " "].includes(TT.key)
              }(TT)) && "codeEditor" !== KT.c.get("openInGameMenuName") && "lobbyCodeEditor" !== KT.c.get("openInGameMenuName") && !zT.gameBridge.latest("connectedGame").replay)
              if (hT.current || !(0, rT.u)()) {
                if (hT.current) {
                  if ("ArrowUp" === TT.code || "ArrowDown" === TT.code) return Bo("ArrowUp" === TT.code ? 1 : -1, !1), void TT.stopPropagation();
                  if ("Tab" === TT.code) return RT.b.selectNextChannel(), TT.stopPropagation(), void TT.preventDefault();
                  if (TT.ctrlKey && qT.includes(aT[TT.keyCode])) return TT.preventDefault(), void TT.stopPropagation()
                }
                if ([...YT, "esc"].includes(WT()(TT)))
                  if ("esc" !== WT()(TT)) {
                    if (!hT.current || "/" !== WT()(TT)) {
                      if ("t" === WT()(TT)) {
                        if (hT.current) return void TT.stopPropagation();
                        TT.preventDefault()
                      }
                      hT.current && "" !== To.current.value && Io.current(), TT.repeat || (hT.current || "/" === WT()(TT) && (To.current.value = "/", TT.preventDefault()), xT(!hT.current))
                    }
                  } else hT.current && (xT(!1), TT.stopPropagation());
                else hT.current && TT.stopPropagation()
              } else YT.includes(WT()(TT)) && (TT.preventDefault(), TT.stopPropagation(), (0, rT.e)(TT))
          };
          document.addEventListener("keydown", XT, {
            capture: !0
          });
          const BT = sT.current;
          let FT = !1;
          const DT = new ResizeObserver((() => {
              FT && (FT = !1, Fo())
            })),
            LT = () => {
              FT = !0, DT.unobserve(BT), DT.observe(BT)
            };
          VT.current = LT;
          const cT = new MutationObserver(LT);
          return cT.observe(BT, {
            childList: !0,
            subtree: !0
          }), () => {
            document.removeEventListener("keydown", XT, {
              capture: !0
            }), document.removeEventListener("touchstart", TT, {
              capture: !0
            }), document.removeEventListener("mousedown", oT, {
              capture: !0
            }), document.removeEventListener("pointerlockchange", kT), VT.current = null, cT.disconnect(), DT.disconnect(), clearTimeout(PT.current)
          }
        }), []), (0, gT.k)(To, {
          open: () => {
            xT(!0)
          },
          close: () => {
            zo()
          },
          submit: () => {
            "" !== To.current.value && Wo(), zo()
          },
          stepHistory: () => {
            Bo(1, !0)
          },
          sendLine: TT => {
            Xo(TT), zo()
          },
          selectNextChannel: () => {
            RT.b.selectNextChannel()
          }
        }), (0, iT.useEffect)((() => {
          var TT;
          (hT.current = kT, To.current) && (kT ? (ZT.current = 0, To.current.focus()) : (To.current.blur(), null === (TT = VT.current) || void 0 === TT || TT.call(VT)))
        }), [kT]),
        function(TT, oT) {
          (0, iT.useLayoutEffect)((() => {
            if (!oT) return;
            JT.e.hold();
            const IT = TT.current.closest(".InGameHeaderAndChat"),
              iT = window.visualViewport;
            let zT = "";
            const kT = () => {
              const TT = `${iT.offsetTop+iT.height}px`;
              TT !== zT && (zT = TT, IT.style.setProperty("--keyboard-top", TT))
            };
            return kT(), iT.addEventListener("resize", kT), iT.addEventListener("scroll", kT), () => {
              iT.removeEventListener("resize", kT), iT.removeEventListener("scroll", kT), IT.style.removeProperty("--keyboard-top"), JT.e.release()
            }
          }), [TT, oT])
        }(wT, kT && oT), (0, UT.jsx)(UT.Fragment, {
          children: (0, UT.jsxs)("div", {
            ref: wT,
            className: cT()("Chat", {
              Chatting: kT
            }),
            "data-camera-keeper": kT ? "" : void 0,
            children: [(0, UT.jsx)("div", {
              ref: sT,
              className: cT()("ChatMessages", {
                HideScrollbar: !GT && !kT,
                NoScrolling: !(0, ST.isMobile)() && bT
              }),
              children: (0, UT.jsx)(uT.c, {
                messages: mT,
                reportedPlayers: OT
              })
            }), oT && !kT && (0, UT.jsx)("button", {
              type: "button",
              className: "ChatIconWrapper SmallTextLight",
              "aria-label": TT("general:chat"),
              ...(0, ET.f)((() => {
                xT(!0), oo.current.style.display = "flex", (0, ST.isIOS)() && To.current.focus()
              }), "pointerup"),
              children: (0, UT.jsx)(MT.e, {
                name: "comment-dots",
                className: "ChatIcon"
              })
            }), (0, UT.jsxs)("div", {
              ref: oo,
              className: "ChatInputWrapper",
              style: {
                display: "" + (kT ? "flex" : "none")
              },
              children: [nT && (0, UT.jsx)("button", {
                type: "button",
                className: "ChatInputChannel",
                style: {
                  backgroundColor: nT.elementBgColor
                },
                onClick: TT => {
                  RT.b.selectNextChannel(), To.current.focus()
                },
                children: (0, UT.jsx)("span", {
                  className: "SmallTextBold",
                  children: (0, UT.jsx)(BT.c, {
                    text: nT.elementContent
                  })
                })
              }), nT && IT && (0, UT.jsx)(HT, {}), (0, UT.jsx)("input", {
                className: "ChatInput",
                maxLength: LT.Nc,
                ref: To,
                spellCheck: "false",
                autoComplete: "off",
                autoCorrect: "off",
                "aria-label": TT("general:chat"),
                placeholder: nT ? `${nT.channelName} Chat${"touchOnly"===(0,DT.b)()||IT?"":" [Tab]"}` : ""
              })]
            })]
          })
        })
    }
    const qT = ["W", "S", "D", "N", "T", "<tab>", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "<page-up>", "<page-down>", "B", "O", "H", "J", "F", "G", "J", "M", "<enter>", "L", "K", "E", "P", "R", "O", "U"]
  },
  35553: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => RT
    });
    var iT = IT(46),
      zT = IT(1042),
      kT = IT.n(zT),
      WT = IT(8214),
      XT = IT(16),
      BT = IT(2180),
      FT = IT(3149),
      ST = IT(1841),
      DT = IT(12),
      LT = IT(1729),
      xT = IT(35559),
      cT = IT(1957),
      KT = IT(35566),
      MT = IT(2341),
      rT = IT(2318),
      AT = IT(2312),
      gT = IT(3163),
      hT = IT(2679),
      wT = IT(1784),
      mT = IT(1083);

    function eT(TT) {
      for (let IT = TT.length - 1; IT >= 0; IT--) {
        const iT = "string" === typeof(oT = TT[IT]) ? oT : "str" in oT && "string" === typeof oT.str ? oT.str : "";
        if ("" !== iT.trim()) return iT
      }
      var oT;
      return ""
    }

    function RT(TT) {
      let {
        messages: oT,
        reportedPlayers: IT
      } = TT;
      return (0, mT.jsx)(mT.Fragment, {
        children: oT.map((TT => (0, mT.jsx)(uT, {
          message: TT,
          reportedPlayers: IT
        }, TT.clientChatMsgId)))
      })
    }
    const uT = (0, iT.memo)((function(TT) {
      var oT;
      let {
        message: IT,
        reportedPlayers: zT
      } = TT;
      const RT = (0, iT.useRef)(null),
        [uT] = (0, iT.useState)(hT.h),
        {
          author: vT
        } = IT,
        ET = null === vT || void 0 === vT ? void 0 : vT.id,
        fT = null !== (oT = null === vT || void 0 === vT ? void 0 : vT.name) && void 0 !== oT ? oT : void 0,
        CT = (0, ST.d)(fT),
        jT = null !== vT && void 0 !== vT && vT.profileEffect ? cT.h[vT.profileEffect] : void 0,
        JT = null !== vT && !vT.local,
        UT = null === vT && null !== IT.serverChatMsgId,
        aT = (0, wT.d)("hiddenPlayerNames", (TT => (0, KT.g)(JT, fT, TT))),
        YT = null === IT.serverChatMsgId || null === vT ? null : {
          text: eT(IT.content),
          serverChatMsgId: IT.serverChatMsgId,
          authorId: vT.id
        },
        QT = UT || null !== YT && !zT.includes(ET),
        OT = (0, FT.h)(JT && null !== fT && void 0 !== fT ? fT : null),
        HT = (0, AT.l)(RT);
      (0, iT.useEffect)((() => () => {
        AT.e.closeIfOwner(RT)
      }), []);
      const nT = () => {
          UT ? XT.h.XM("OpenReportMenu", {
            playerEId: null,
            playerName: void 0,
            US: (0, WT.e)(IT.content),
            serverChatMsgId: IT.serverChatMsgId
          }) : null !== YT ? XT.h.XM("OpenReportMenu", {
            playerEId: ET,
            playerName: fT,
            US: YT.text,
            serverChatMsgId: YT.serverChatMsgId
          }) : console.warn("Reporting a chat message the server never acknowledged")
        },
        qT = void 0 === fT ? [] : (0, gT.e)(OT, fT, YT);
      return (0, mT.jsxs)("div", {
        ref: RT,
        className: kT()("MessageWrapper", {
          ChatMsgSelectWrapper: ET,
          Still: uT
        }),
        onContextMenu: aT ? TT => {
          (0, MT.f)(RT, TT, {
            ...(0, KT.c)(ET, fT),
            showLocation: !1,
            status: null,
            extraActions: QT ? [{
              icon: "flag",
              text: "Report",
              onClick: nT
            }] : [],
            friendRequestSource: "chat"
          }, DT.c.get("isTouchScreen"))
        } : void 0,
        onPointerDown: aT ? TT => {
          (0, rT.b)(TT, (() => (0, KT.c)(ET, fT).playerSocialPreview))
        } : void 0,
        children: [jT && (0, mT.jsx)(jT, {
          className: "ChatMessageBackground",
          simple: !0
        }), (JT || UT) && !HT && (0, mT.jsx)(xT.c, {
          className: "ChatFloatingActions",
          triggerElementRef: RT,
          options: [{
            icon: "flag",
            text: "Report",
            onPointerDown: nT,
            show: QT
          }, ...qT, {
            icon: "user-plus",
            text: "socialBar:sendFriendRequest",
            onPointerDown: TT => {
              (0, BT.k)(fT, "chat")
            },
            analyticsClick: {
              id: "social.add_friend",
              value: "chat"
            },
            show: aT && "blocked" !== OT
          }]
        }), (0, mT.jsx)(LT.c, {
          text: IT.content,
          friendBadgeFor: CT ? fT : void 0
        }, IT.clientChatMsgId)]
      }, IT.clientChatMsgId)
    }))
  },
  35594: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => xT,
      e: () => cT,
      h: () => LT,
      l: () => DT
    });
    var iT = IT(8743),
      zT = IT(35599),
      kT = IT(35601),
      WT = IT(8139),
      XT = IT(1403),
      BT = IT(46),
      FT = IT(68),
      ST = IT(1083);

    function DT() {
      var TT;
      return (0, XT.i)(zT.c, (0, zT.k)()), (0, ST.jsx)(ST.Fragment, {
        children: null === (TT = (0, zT.k)()) || void 0 === TT ? void 0 : TT.content
      })
    }

    function LT(TT) {
      var oT;
      let {
        show: IT
      } = TT;
      (0, XT.i)(zT.c, (0, zT.k)());
      const FT = null === (oT = (0, zT.k)()) || void 0 === oT ? void 0 : oT.menu;
      return (0, BT.useEffect)((() => {
        var TT;
        IT || (null === FT || void 0 === FT || null === (TT = FT.onClose) || void 0 === TT || TT.call(FT), (0, kT.r)())
      }), [IT, FT]), (0, BT.useEffect)((() => IT ? (0, WT.f)(kT.x, kT.g) : void 0), [IT]), (0, ST.jsx)(iT.c, {
        showing: IT,
        globallyUniqueKey: "clientGameMenu",
        children: null === FT || void 0 === FT ? void 0 : FT.content
      })
    }

    function xT(TT) {
      let {
        placement: oT = "bottom"
      } = TT;
      return (0, ST.jsx)("div", {
        id: `clientGameHud-${oT}`,
        style: {
          display: "contents"
        }
      })
    }

    function cT(TT) {
      let {
        children: oT,
        placement: IT = "bottom"
      } = TT;
      const [iT, zT] = (0, BT.useState)(null);
      return (0, BT.useEffect)((() => {
        zT(document.getElementById(`clientGameHud-${IT}`))
      }), [IT]), iT ? (0, FT.createPortal)(oT, iT) : null
    }
  },
  35847: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => ST,
      d: () => FT
    });
    var iT = IT(46),
      zT = IT(1042),
      kT = IT.n(zT),
      WT = IT(1083);
    const XT = 200,
      BT = 160;

    function FT() {
      return window.matchMedia("(max-width: 900px)").matches
    }

    function ST(TT) {
      let {
        side: oT,
        defaultSize: IT,
        covers: zT,
        children: FT
      } = TT;
      const ST = (0, iT.useRef)(null),
        [DT, LT] = (0, iT.useState)(null),
        [xT, cT] = (0, iT.useState)(IT);
      xT !== IT && (cT(IT), LT(null));
      const KT = (0, iT.useRef)(null),
        MT = "top" === oT,
        rT = TT => MT ? TT.clientY : TT.clientX,
        AT = () => {
          KT.current = null
        };
      return (0, WT.jsxs)("div", {
        ref: ST,
        className: kT()("ResizableSidePanel", `ResizableSidePanel-${oT}`, {
          Covers: "always" === zT,
          CoversWhenNarrow: "narrow" === zT,
          Dragged: null !== DT
        }),
        style: {
          [MT ? "height" : "width"]: null !== DT && void 0 !== DT ? DT : IT
        },
        children: [FT, (0, WT.jsx)("div", {
          className: "ResizableSidePanelHandle",
          role: "separator",
          "aria-orientation": MT ? "horizontal" : "vertical",
          onPointerDown: TT => {
            if (0 !== TT.button) return;
            TT.preventDefault();
            const oT = ST.current,
              IT = Array.from(oT.parentElement.children).reduce(((TT, IT) => IT !== oT && "0" !== getComputedStyle(IT).flexGrow ? TT + (TT => MT ? TT.clientHeight : TT.clientWidth)(IT) : TT), 0),
              iT = MT ? oT.offsetHeight : oT.offsetWidth,
              zT = Math.min(XT, iT),
              kT = Math.max(zT, iT + Math.max(0, IT - BT));
            KT.current = {
              start: rT(TT),
              startSize: iT,
              minSize: zT,
              maxSize: kT
            }, TT.currentTarget.setPointerCapture(TT.pointerId)
          },
          onPointerMove: TT => {
            const IT = KT.current;
            if (!IT) return;
            const iT = "right" === oT ? IT.start - TT.clientX : rT(TT) - IT.start;
            LT(Math.min(IT.maxSize, Math.max(IT.minSize, IT.startSize + iT)))
          },
          onPointerUp: AT,
          onPointerCancel: AT,
          onLostPointerCapture: AT
        })]
      })
    }
  },
  35869: (TT, oT, IT) => {
    IT.d(oT, {
      A: () => eT,
      c: () => gT,
      d: () => MT,
      e: () => cT,
      i: () => xT,
      j: () => AT,
      l: () => uT,
      o: () => hT,
      s: () => mT,
      t: () => wT,
      u: () => RT,
      y: () => zT
    });
    var iT = IT(46);
    const zT = 5e3,
      kT = 500,
      WT = 3e3;
    let XT = null,
      BT = null,
      FT = null;
    const ST = new Set;

    function DT(TT) {
      XT = TT;
      for (const oT of ST) oT()
    }

    function LT() {
      if (!XT || void 0 !== XT.endedAt) return;
      null !== BT && (clearTimeout(BT), BT = null), DT({
        ...XT,
        endedAt: Date.now()
      });
      const TT = FT;
      FT = null, null === TT || void 0 === TT || TT()
    }

    function xT(TT, oT) {
      let {
        submit: IT,
        reopen: iT
      } = oT;
      null !== BT && clearTimeout(BT), FT = iT, DT({
        ...TT,
        startedAt: Date.now(),
        errors: []
      }), BT = setTimeout(LT, WT), IT()
    }

    function cT() {
      XT && void 0 === XT.endedAt && void 0 === XT.ranAt && (null !== BT && clearTimeout(BT), DT({
        ...XT,
        ranAt: Date.now()
      }), BT = setTimeout(LT, zT))
    }
    const KT = 3;

    function MT(TT) {
      if (!XT || void 0 === XT.ranAt || void 0 !== XT.endedAt || XT.errors.includes(TT) || XT.errors.length >= KT) return;
      const oT = 0 === XT.errors.length;
      DT({
        ...XT,
        errors: [...XT.errors, TT]
      }), oT && (null !== BT && clearTimeout(BT), BT = setTimeout(LT, kT))
    }

    function rT(TT) {
      var oT;
      return (null === (oT = XT) || void 0 === oT ? void 0 : oT.chatKey) === TT ? XT : null
    }

    function AT(TT) {
      const oT = rT(TT);
      return oT && void 0 !== oT.endedAt ? (DT(null), oT) : null
    }

    function gT(TT) {
      var oT;
      (null === (oT = XT) || void 0 === oT ? void 0 : oT.chatKey) === TT && (null !== BT && (clearTimeout(BT), BT = null), FT = null, DT(null))
    }
    const hT = "These changes from your last answer didn't go in. Make them again.";

    function wT(TT) {
      const oT = [...new Set(TT)].slice(0, KT);
      return `Fix this in your change: when it ran, the world showed ${1===oT.length?"this error":"these errors"}: ${oT.join(" ")}`
    }

    function mT(TT) {
      return `Your change didn't go in, because the code wouldn't run at all: ${TT.join(" ")} Send the whole change again with that fixed.`
    }

    function eT(TT) {
      return `Fix this in your change: ${TT.join(" ")}`
    }

    function RT(TT) {
      var oT;
      if (void 0 === TT.ranAt) return {
        title: "Couldn't test it",
        text: "Your change didn't go into your world, so it couldn't be tested. Press Submit to try it."
      };
      const IT = Math.max(1, Math.round(((null !== (oT = TT.endedAt) && void 0 !== oT ? oT : TT.ranAt) - TT.ranAt) / 1e3)),
        iT = `Your change ran in your world for ${IT} ${1===IT?"second":"seconds"}`;
      return 0 === TT.errors.length ? {
        title: "Tested: no errors",
        text: `${iT} without an error.`
      } : {
        title: 1 === TT.errors.length ? "Tested: it showed an error" : `Tested: it showed ${TT.errors.length} errors`,
        text: `${iT} and showed: ${TT.errors.join(" ")}`
      }
    }

    function uT(TT) {
      const [oT, IT] = (0, iT.useState)((() => rT(TT)));
      return (0, iT.useEffect)((() => {
        const oT = () => {
          IT(rT(TT))
        };
        return oT(), ST.add(oT), () => {
          ST.delete(oT)
        }
      }), [TT]), oT
    }
  },
  35872: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => zT,
      g: () => iT
    });
    const iT = {
      key: "worldCode",
      label: "World Code",
      codeBlock: !1
    };

    function zT(TT, oT, IT) {
      return {
        key: TT,
        label: `Code block at ${oT.join(", ")}`,
        codeBlock: !0,
        pos: oT,
        canChangePos: IT
      }
    }
  },
  35861: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => iT,
      f: () => kT,
      h: () => WT,
      l: () => zT
    });
    const iT = "code block",
      zT = "World Code/";

    function kT(TT) {
      return TT.trim().toLowerCase().startsWith(zT.toLowerCase())
    }

    function WT(TT) {
      return TT.trim().slice(zT.length).replace(/^\.?\//, "")
    }
  },
  35830: (TT, oT, IT) => {
    IT.d(oT, {
      C: () => LT,
      E: () => UT,
      I: () => RT,
      M: () => uT,
      O: () => JT,
      c: () => cT,
      d: () => BT,
      h: () => KT,
      l: () => ET,
      m: () => XT,
      o: () => ST,
      q: () => xT,
      r: () => MT,
      v: () => hT,
      w: () => fT,
      y: () => vT
    });
    var iT = IT(35823),
      zT = IT(35827);
    const kT = "bloxd-world-code-directory-sync",
      WT = "handles",
      XT = "[INVALID SCHEMATIC PLACEHOLDER]";

    function BT(TT, oT) {
      return `${TT}::${oT}`
    }
    const FT = new Set(["node_modules", ".git"]);

    function ST() {
      return "undefined" !== typeof window && "function" === typeof window.showDirectoryPicker
    }

    function DT() {
      return new Promise(((TT, oT) => {
        const IT = indexedDB.open(kT, 1);
        IT.onupgradeneeded = () => {
          const TT = IT.result;
          TT.objectStoreNames.contains(WT) || TT.createObjectStore(WT)
        }, IT.onsuccess = () => {
          TT(IT.result)
        }, IT.onerror = () => {
          var TT;
          oT(null !== (TT = IT.error) && void 0 !== TT ? TT : new Error("Failed to open directory sync IndexedDB"))
        }
      }))
    }
    async function LT(TT, oT) {
      const IT = await DT();
      try {
        await new Promise(((iT, zT) => {
          const kT = IT.transaction(WT, "readwrite");
          kT.objectStore(WT).put(oT, TT), kT.oncomplete = () => {
            iT()
          }, kT.onerror = () => {
            var TT;
            zT(null !== (TT = kT.error) && void 0 !== TT ? TT : new Error("Failed to store directory handle"))
          }
        }))
      } finally {
        IT.close()
      }
    }
    async function xT(TT) {
      const oT = await DT();
      try {
        return await new Promise(((IT, iT) => {
          const zT = oT.transaction(WT, "readonly").objectStore(WT).get(TT);
          zT.onsuccess = () => {
            var TT;
            IT(null !== (TT = zT.result) && void 0 !== TT ? TT : null)
          }, zT.onerror = () => {
            var TT;
            iT(null !== (TT = zT.error) && void 0 !== TT ? TT : new Error("Failed to load directory handle"))
          }
        }))
      } finally {
        oT.close()
      }
    }
    async function cT(TT) {
      const oT = await DT();
      try {
        await new Promise(((IT, iT) => {
          const zT = oT.transaction(WT, "readwrite");
          zT.objectStore(WT).delete(TT), zT.oncomplete = () => {
            IT()
          }, zT.onerror = () => {
            var TT;
            iT(null !== (TT = zT.error) && void 0 !== TT ? TT : new Error("Failed to clear directory handle"))
          }
        }))
      } finally {
        oT.close()
      }
    }
    async function KT(TT) {
      const oT = {
        mode: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readwrite"
      };
      return "granted" === await TT.queryPermission(oT) || "granted" === await TT.requestPermission(oT)
    }
    async function MT(TT) {
      if (!ST()) return null;
      try {
        const oT = await window.showDirectoryPicker({
          mode: "readwrite"
        });
        return await LT(TT, oT), oT
      } catch (oT) {
        if (function(TT) {
            return TT instanceof DOMException && "AbortError" === TT.name
          }(oT)) return null;
        throw oT
      }
    }

    function rT(TT) {
      return TT.startsWith(".") || FT.has(TT)
    }

    function AT(TT) {
      if (!TT) return !0;
      const oT = TT.split("/");
      for (const IT of oT)
        if ("" === IT || "." === IT || ".." === IT) return !1;
      return !0
    }
    async function gT(TT, oT, IT) {
      for await (const [kT, WT] of TT.entries()) {
        if ("directory" === WT.kind) {
          if (rT(kT)) continue;
          const TT = oT ? `${oT}/${kT}` : kT;
          if (!AT(TT)) continue;
          await gT(WT, TT, IT);
          continue
        }
        const TT = oT ? `${oT}/${kT}` : kT;
        if (!(0, iT.q)(TT) && !(0, zT.d)(TT)) continue;
        const XT = await WT.getFile();
        IT[TT] = (0, zT.d)(TT) ? await CT(XT) : await XT.text()
      }
    }
    async function hT(TT) {
      const oT = {};
      return await gT(TT, "", oT), oT
    }

    function wT(TT) {
      return !(!TT || TT !== TT.trim() || TT.startsWith("/") || TT.includes("\\") || TT.includes("\0")) && AT(TT)
    }
    async function mT(TT, oT, IT) {
      const iT = oT.split("/"),
        zT = iT[iT.length - 1];
      let kT = TT;
      for (let WT = 0; WT < iT.length - 1; WT++) kT = await kT.getDirectoryHandle(iT[WT], {
        create: IT
      });
      return {
        dir: kT,
        fileName: zT
      }
    }
    async function eT(TT, oT, IT) {
      if (!wT(oT)) throw new Error(`Refusing to write unsafe path: ${oT}`);
      const {
        dir: iT,
        fileName: zT
      } = await mT(TT, oT, !0), kT = await iT.getFileHandle(zT, {
        create: !0
      }), WT = await kT.createWritable();
      await WT.write(IT), await WT.close()
    }
    async function RT(TT, oT, IT) {
      const iT = await async function(TT, oT) {
        if (!wT(oT)) return null;
        try {
          const {
            dir: IT,
            fileName: iT
          } = await mT(TT, oT, !1), zT = await IT.getFileHandle(iT), kT = await zT.getFile();
          return await kT.text()
        } catch (IT) {
          if (IT instanceof DOMException && ("NotFoundError" === IT.name || "NotAllowedError" === IT.name)) return null;
          throw IT
        }
      }(TT, oT);
      iT !== IT && await eT(TT, oT, IT)
    }
    async function uT(TT, oT, IT) {
      if (!(0, iT.q)(oT) && !(0, zT.d)(oT)) throw new Error(`Refusing to write non-allowlisted path: ${oT}`);
      if ((0, zT.d)(oT)) {
        if (await jT(TT, oT) === XT) throw new Error(`Move the binary schematic ${oT} outside the linked folder before syncing its placeholder`)
      }
      await eT(TT, oT, IT)
    }
    async function vT(TT, oT) {
      if (!wT(oT)) throw new Error(`Refusing to remove unsafe path: ${oT}`);
      try {
        const {
          dir: IT,
          fileName: iT
        } = await mT(TT, oT, !1);
        await IT.removeEntry(iT)
      } catch (IT) {
        if (IT instanceof DOMException && ("NotFoundError" === IT.name || "NotAllowedError" === IT.name)) return;
        throw IT
      }
    }
    async function ET(TT, oT) {
      if (!wT(oT)) return null;
      try {
        const IT = oT.split("/");
        let iT = TT;
        for (const TT of IT) iT = await iT.getDirectoryHandle(TT);
        return iT
      } catch (IT) {
        if (IT instanceof DOMException && ("NotFoundError" === IT.name || "NotAllowedError" === IT.name)) return null;
        throw IT
      }
    }
    async function fT(TT, oT) {
      if ((0, iT.q)(oT) || (0, zT.d)(oT)) {
        if ((0, zT.d)(oT)) {
          if (await jT(TT, oT) === XT) throw new Error(`Refusing to remove a binary schematic: ${oT}`)
        }
        await vT(TT, oT)
      }
    }
    async function CT(TT) {
      if (TT.size > 64) return XT;
      const oT = await TT.text();
      return Array.from(oT).some((TT => {
        const oT = TT.charCodeAt(0);
        return oT < 9 || oT > 13 && oT < 32 || 65533 === oT
      })) ? XT : oT
    }
    async function jT(TT, oT) {
      try {
        const {
          dir: IT,
          fileName: iT
        } = await mT(TT, oT, !1);
        return await CT(await (await IT.getFileHandle(iT)).getFile())
      } catch (IT) {
        if (IT instanceof DOMException && "NotFoundError" === IT.name) return null;
        throw IT
      }
    }
    async function JT(TT, oT) {
      const IT = await hT(TT);
      for (const iT of Object.keys(IT)) iT in oT || (0, zT.d)(iT) || await fT(TT, iT);
      for (const [kT, WT] of Object.entries(oT))((0, iT.q)(kT) || (0, zT.d)(kT)) && await uT(TT, kT, WT)
    }

    function UT(TT, oT) {
      var IT, iT;
      let zT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const kT = null !== (IT = zT.debounceMs) && void 0 !== IT ? IT : 300,
        WT = null !== (iT = zT.pollMs) && void 0 !== iT ? iT : 1e3;
      let XT = !1,
        BT = null,
        FT = null,
        ST = null;
      const DT = () => {
          XT || (BT && clearTimeout(BT), BT = setTimeout((() => {
            BT = null, LT()
          }), kT))
        },
        LT = async () => {
          if (!XT) try {
            if (!await KT(TT, "readwrite")) return;
            const IT = await hT(TT);
            XT || oT(IT)
          } catch (IT) {
            console.error("[WorldCodeDirectorySync] Failed to read watched directory", IT)
          }
        };
      LT();
      const xT = window.FileSystemObserver;
      if (xT) try {
        ST = new xT((() => {
          DT()
        })), ST.observe(TT, {
          recursive: !0
        })
      } catch (cT) {
        console.warn("[WorldCodeDirectorySync] FileSystemObserver unavailable, falling back to polling", cT), ST = null
      }
      return ST || (FT = setInterval((() => {
        DT()
      }), WT)), () => {
        XT = !0, BT && clearTimeout(BT), FT && clearInterval(FT), ST && ST.disconnect()
      }
    }
  },
  4311: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => MT,
      g: () => rT
    });
    var iT = IT(1042),
      zT = IT.n(iT),
      kT = IT(46),
      WT = IT(1171),
      XT = IT(4320),
      BT = IT(1729),
      FT = IT(2227),
      ST = IT(4328),
      DT = IT(1083);
    const LT = new WeakMap;
    let xT = 0;

    function cT(TT) {
      let oT = LT.get(TT);
      return void 0 === oT && (oT = xT++, LT.set(TT, oT)), oT
    }

    function KT(TT) {
      let {
        piece: oT
      } = TT;
      return "space" === oT.kind ? (0, DT.jsx)(DT.Fragment, {
        children: oT.text
      }) : (0, DT.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${oT.delayMs}ms`
        },
        children: (0, DT.jsx)(XT.c, {
          text: "icon" === oT.kind ? `[[${oT.icon}]]` : oT.text
        })
      })
    }

    function MT(TT) {
      let {
        display: oT
      } = TT;
      const {
        selectedLanguage: IT
      } = (0, WT.t)(), iT = (0, kT.useMemo)((() => (0, ST.d)((0, ST.h)(oT).plan.pieces)), [oT, IT.code]);
      return (0, DT.jsxs)("div", {
        className: zT()("Dialogue", {
          DialogueAnimateIn: !1 !== oT.animateIn
        }),
        children: [oT.speakerName && (0, DT.jsx)(BT.c, {
          text: oT.speakerName,
          className: "DialogueSpeaker"
        }), (0, DT.jsx)("p", {
          className: "DialogueLine",
          children: iT.map(((TT, oT) => 1 === TT.length && "space" === TT[0].kind ? TT[0].text : (0, DT.jsx)("span", {
            className: "DialogueGlue",
            children: TT.map(((TT, oT) => (0, DT.jsx)(KT, {
              piece: TT
            }, oT)))
          }, oT)))
        })]
      })
    }
    const rT = (0, kT.memo)((function() {
      const TT = (0, FT.g)("dialogue");
      return (0, DT.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: TT && (0, DT.jsx)(MT, {
          display: TT
        }, cT(TT))
      })
    }))
  },
  35676: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => xT,
      g: () => cT
    });
    var iT = IT(46),
      zT = IT(2610),
      kT = IT(1403),
      WT = IT(1784),
      XT = IT(35627),
      BT = IT(618),
      FT = IT(1042),
      ST = IT.n(FT),
      DT = IT(1083);
    const LT = {},
      xT = (0, iT.memo)((function() {
        const TT = (0, zT.c)();
        return (0, kT.g)("damagedByOtherPlayer", (oT => {
          let {
            Ri: IT,
            direction: iT
          } = oT;
          const zT = IT || "nonDirectional";
          if (LT[zT]) {
            const oT = LT[zT];
            clearTimeout(oT.timeout), oT.direction = iT, oT.timeout = setTimeout((() => {
              delete LT[zT], TT()
            }), 800)
          } else LT[zT] = {
            direction: iT,
            rY: null,
            timeout: setTimeout((() => {
              delete LT[zT], TT()
            }), 800)
          };
          TT()
        })), (0, WT.c)("kill", (oT => {
          let {
            killer: IT,
            victim: iT
          } = oT;
          const zT = iT.id;
          IT.local && zT && zT in LT && (clearTimeout(LT[zT].timeout), delete LT[zT], TT())
        })), (0, iT.useEffect)((() => {
          const TT = (0, XT.f)("turnDamageIndicators", cT);
          return () => {
            TT();
            for (const TT in LT) clearTimeout(LT[TT].timeout), delete LT[TT]
          }
        }), []), (0, DT.jsx)("div", {
          className: "DirectionalDamage",
          children: Object.entries(LT).map((TT => {
            let [oT, IT] = TT;
            const iT = (0, BT.K)(IT.direction);
            return (0, DT.jsx)("div", {
              ref: TT => {
                LT[oT] && (LT[oT].rY = TT)
              },
              className: ST()("DamageIndicator", {
                DamageIndicatorFullCircle: iT
              })
            }, oT)
          }))
        })
      }));

    function cT(TT) {
      for (const oT in LT) {
        const {
          direction: IT,
          rY: iT
        } = LT[oT];
        if ((0, BT.K)(IT)) continue;
        const zT = IT - TT;
        iT.style.rotate = `${zT}rad`
      }
    }
  },
  8223: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => jT,
      g: () => vT,
      h: () => ET
    });
    var iT = IT(46),
      zT = IT(4061),
      kT = IT(1110),
      WT = IT(1403),
      XT = IT(16),
      BT = IT(2976),
      FT = IT(2029),
      ST = IT(1214),
      DT = IT(8248),
      LT = IT(1751),
      xT = IT(1784),
      cT = IT(1171),
      KT = IT(12),
      MT = IT(1585),
      rT = IT(1042),
      AT = IT.n(rT),
      gT = IT(8226),
      hT = IT(8229),
      wT = IT(8231),
      mT = IT(8135),
      eT = IT(8238),
      RT = (IT(8244), IT(1083));
    let uT = null;

    function vT() {
      return null !== uT
    }

    function ET() {
      return "pad" === uT
    }

    function fT() {
      return "inGame" === KT.c.get("gameState") && !(0, MT.t)()
    }

    function CT(TT) {
      return (0, hT.t)(TT, ST.k, hT.g, hT.h, hT.l)
    }
    const jT = (0, iT.memo)((function() {
      const {
        t: TT
      } = (0, cT.t)(), {
        userContext: oT
      } = (0, kT.b)(), [IT, KT] = (0, iT.useState)(null), [rT, vT] = (0, iT.useState)(null), ET = (0, iT.useRef)(null), jT = (0, iT.useCallback)((TT => {
        ET.current = TT, vT(TT)
      }), []), JT = (0, iT.useRef)(0), UT = (0, iT.useRef)(null), aT = (0, iT.useRef)({
        x: 0,
        y: 0
      }), [YT, QT] = (0, iT.useState)(0), OT = (0, iT.useMemo)((() => function(TT) {
        const oT = [];
        for (let iT = 0; iT < ST.k; iT++) {
          var IT;
          oT.push(null !== (IT = TT[iT]) && void 0 !== IT ? IT : null)
        }
        return oT
      }((0, DT.h)(oT.getPlayerCosmetics().emote))), [oT, YT]);
      (0, xT.c)("cosmeticsUpdated", (TT => {
        TT.some((TT => TT.local && "emote" === TT.oT)) && QT((TT => TT + 1))
      }));
      const HT = (0, iT.useRef)(!1),
        nT = (0, iT.useCallback)((function(TT) {
          let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === TT && (0, wT.h)(), HT.current = oT, aT.current = {
            x: 0,
            y: 0
          }, jT(null), KT(TT)
        }), [jT]),
        qT = (0, iT.useCallback)((() => {
          KT(null), jT(null), aT.current = {
            x: 0,
            y: 0
          }
        }), [jT]),
        ZT = (0, iT.useCallback)((TT => {
          if (Date.now() < JT.current) return;
          const oT = (0, FT.g)(TT),
            IT = !!oT.holdUntilMove,
            iT = IT ? 600 : Math.ceil(1e3 * oT.animation.animation_length / FT.c) + 200;
          JT.current = Date.now() + iT, UT.current = TT, LT.gameBridge.send("playEmote", TT), LT.gameBridge.send("applyTemporaryThirdPerson", IT ? {} : {
            durationMs: iT
          })
        }), []);
      (0, WT.g)("requestToggleEmoteWheel", (() => {
        null === IT ? fT() && nT("click") : qT()
      })), (0, WT.g)("requestEmoteWheelHoldOpen", (() => {
        null === IT && fT() && nT((0, gT.b)() ? "hold" : "click")
      })), (0, WT.g)("requestEmoteWheelPadOpen", (TT => {
        null !== IT || !fT() || (0, mT.c)() || (0, eT.p)() || nT("pad", TT)
      })), (0, WT.g)("requestEmoteRepeatLast", (() => {
        if (null !== IT || !fT() || (0, mT.c)() || (0, eT.p)()) return;
        const TT = UT.current;
        null !== TT && OT.includes(TT) ? ZT(TT) : nT("pad", !0)
      }));
      const lT = () => {
        const TT = ET.current,
          oT = null !== TT ? OT[TT] : null;
        null !== oT && "pad" === IT && Date.now() < JT.current || (qT(), null !== oT && ZT(oT))
      };
      (0, WT.g)("emoteWheelPadAim", (TT => {
        if ("pad" !== IT) return;
        const oT = (0, hT.H)(TT, ST.k, ET.current);
        jT(null !== oT && null !== OT[oT] ? oT : null)
      })), (0, WT.g)("requestEmoteWheelPadCommit", (TT => {
        "pad" !== IT || TT && HT.current || lT()
      })), (0, WT.g)("appManagerUpdated|activeInputDevice", (TT => {
        null !== IT && "pad" === IT !== ("gamepad" === TT) && qT()
      })), (0, iT.useLayoutEffect)((() => (uT = IT, (0, BT.x)("emoteWheel", "pad" === IT), XT.h.XM(BT.o), () => {
        uT = null, (0, BT.x)("emoteWheel", !1), XT.h.XM(BT.o)
      })), [IT]), (0, WT.g)("requestEmoteWheelHoldRelease", (() => {
        "hold" === IT && lT()
      })), (0, WT.g)("requestEmoteWheelClose", (() => {
        null !== IT && qT()
      })), (0, WT.g)("appManagerUpdated|gameState", (TT => {
        "inGame" !== TT && qT()
      }));
      const sT = () => {
        (0, MT.t)() && qT()
      };
      if ((0, WT.g)("appManagerUpdated|openEverythingMenuName", sT), (0, WT.g)("appManagerUpdated|openInGameMenuName", sT), (0, WT.g)("pointerLockUpdate", (TT => {
          TT || "hold" !== IT || qT()
        })), (0, iT.useEffect)((() => {
          if (null === IT) return;
          const TT = TT => {
            "Escape" === TT.key && (TT.stopImmediatePropagation(), TT.preventDefault(), qT())
          };
          return document.addEventListener("keydown", TT, !0), () => {
            document.removeEventListener("keydown", TT, !0)
          }
        }), [IT, qT]), (0, zT.d)(!0, "click" === IT, "EmoteWheelOverlay"), (0, iT.useEffect)((() => {
          if ("hold" === IT) return LT.gameBridge.send("holdEmoteWheel", !0), () => {
            LT.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [IT]), (0, iT.useEffect)((() => {
          if ("hold" !== IT) return;
          const TT = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            oT = hT.p * TT,
            iT = hT.o * TT,
            zT = TT => {
              let IT = aT.current.x + TT.movementX,
                zT = aT.current.y + TT.movementY;
              const kT = Math.hypot(IT, zT);
              if (kT > oT) {
                const TT = oT / kT;
                IT *= TT, zT *= TT
              }
              aT.current = {
                x: IT,
                y: zT
              }, jT(function(TT, oT, IT, iT) {
                if (Math.hypot(TT, oT) < IT) return null;
                const zT = (0, hT.x)(TT, oT, ST.k);
                return null === iT[zT] ? null : zT
              }(IT, zT, iT, OT))
            };
          return document.addEventListener("mousemove", zT), () => {
            document.removeEventListener("mousemove", zT)
          }
        }), [IT, OT, jT]), null === IT) return null;
      const tT = "hold" === IT || "pad" === IT,
        GT = null !== rT ? OT[rT] : null,
        pT = null !== GT ? (0, FT.g)(GT).displayName : TT("emotes:pickEmote");
      return (0, RT.jsx)("div", {
        className: AT()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === IT
        }),
        onMouseDown: TT => {
          TT.target === TT.currentTarget && qT()
        },
        children: (0, RT.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * hT.p + "rem",
            height: 2 * hT.p + "rem"
          },
          children: [(0, RT.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${hT.n} ${hT.n}`,
            children: [OT.map(((oT, IT) => {
              const iT = null !== oT,
                zT = tT && IT === rT;
              return (0, RT.jsx)("path", {
                d: CT(IT),
                className: AT()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: zT,
                  EmoteWheelWedgeDisabled: !iT
                }),
                onClick: TT => {
                  TT.stopPropagation(), null !== oT && (TT => {
                    qT(), ZT(TT)
                  })(oT)
                },
                "aria-label": null !== oT ? (0, FT.g)(oT).displayName : TT("emotes:emptySlot")
              }, IT)
            })), (0, RT.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: hT.g,
              cy: hT.g,
              r: hT.l
            }), (0, RT.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: hT.g,
              cy: hT.g,
              r: hT.h
            }), tT && null !== rT && (0, RT.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: CT(rT)
            })]
          }), OT.map(((TT, oT) => {
            const IT = null !== TT,
              iT = tT && oT === rT,
              zT = (0, hT.B)(oT, ST.k),
              kT = hT.d * Math.cos(zT),
              WT = hT.d * Math.sin(zT);
            return (0, RT.jsx)("div", {
              className: AT()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: iT,
                EmoteWheelSlotIconDisabled: !IT
              }),
              style: {
                left: `calc(50% + ${kT}rem)`,
                top: `calc(50% + ${WT}rem)`,
                backgroundImage: IT ? `url(/textures/charSkins/previews/emote_${TT}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, oT)
          })), (0, RT.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: pT
          })]
        })
      })
    }))
  },
  35559: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => MT
    });
    var iT = IT(46),
      zT = IT(68),
      kT = IT(1171),
      WT = IT(1042),
      XT = IT.n(WT),
      BT = IT(1665),
      FT = IT(1055),
      ST = IT(1249),
      DT = IT(1427),
      LT = IT(1612),
      xT = IT(1422),
      cT = IT(1083);
    const KT = 14;

    function MT(TT) {
      let {
        className: oT,
        triggerElementRef: IT,
        options: WT
      } = TT;
      const {
        t: MT
      } = (0, kT.t)(), [rT, AT] = (0, iT.useState)(!1), [gT, hT] = (0, iT.useState)({
        x: 0,
        y: 0
      }), wT = (0, iT.useRef)(null);
      (0, iT.useEffect)((() => {
        let TT = null;
        const oT = oT => {
            TT = {
              x: oT.clientX,
              y: oT.clientY
            }
          },
          iT = oT => {
            if (null === TT || !(0, xT.d)(TT, oT)) return;
            TT = null;
            const IT = KT * (0, BT.getRemInPx)();
            hT({
              x: Math.min(oT.clientX, window.innerWidth - IT - 5),
              y: oT.clientY
            }), AT((TT => !TT))
          },
          zT = TT => {
            var oT;
            null !== (oT = wT.current) && void 0 !== oT && oT.contains(TT.relatedTarget) || AT(!1)
          },
          kT = IT.current;
        return kT.addEventListener("pointerdown", oT), kT.addEventListener("pointerup", iT), kT.addEventListener("mouseleave", zT), () => {
          kT.removeEventListener("pointerdown", oT), kT.removeEventListener("pointerup", iT), kT.removeEventListener("mouseleave", zT)
        }
      }), [IT]), (0, iT.useEffect)((() => {
        if (rT) return (0, LT.e)("pointerdown", (TT => {
          !wT.current || wT.current.contains(TT.target) || IT.current.contains(TT.target) || AT(!1)
        }))
      }), [rT, IT]), (0, iT.useLayoutEffect)((() => {
        if (!rT || !wT.current) return;
        const TT = wT.current.getBoundingClientRect().height,
          oT = Math.max(5, window.innerHeight - TT - 5);
        gT.y > oT && hT({
          x: gT.x,
          y: oT
        })
      }), [rT, gT]), (0, ST.s)("popup", wT, (() => {
        AT(!1)
      }), rT);
      const mT = WT.filter((TT => !1 !== TT.show));
      return rT && 0 !== mT.length ? (0, zT.createPortal)((0, cT.jsx)("div", {
        ref: wT,
        className: XT()("FloatingActions", {
          [oT]: oT
        }),
        style: {
          width: `${KT}rem`,
          top: gT.y,
          left: gT.x
        },
        children: mT.map((TT => {
          let {
            icon: oT,
            text: IT,
            onPointerDown: iT,
            analyticsClick: zT
          } = TT;
          return (0, cT.jsxs)("div", {
            className: "FloatingAction",
            "data-pad-focusable": !0,
            onPointerUp: TT => {
              void 0 !== zT && (0, DT.reportAnalyticsClick)(zT), iT(TT), AT(!1), TT.stopPropagation()
            },
            children: [(0, cT.jsx)(FT.e, {
              name: oT
            }), (0, cT.jsx)("div", {
              children: MT(IT)
            })]
          }, IT)
        }))
      }), function() {
        var TT;
        return null !== (TT = document.querySelector(".WholeAppWrapperInner")) && void 0 !== TT ? TT : document.body
      }()) : null
    }
  },
  35696: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => rW
    });
    var iT = IT(35594),
      zT = IT(46),
      kT = IT(1880),
      WT = IT(4050),
      XT = IT(4057),
      BT = IT(2227),
      FT = IT(1751),
      ST = IT(1083);

    function DT(TT) {
      let {
        className: oT,
        style: IT,
        vw: iT,
        maxPx: zT,
        children: kT
      } = TT;
      console.assert("number" === typeof iT && "number" === typeof zT, "vw and maxPx passed to Text must be numbers");
      const WT = window.innerWidth * (iT / 100) > zT ? `${zT}px` : `${iT}vw`;
      return (0, ST.jsx)("div", {
        className: oT,
        style: {
          ...IT,
          fontSize: WT
        },
        children: kT
      })
    }
    var LT = IT(35700),
      xT = IT(1408),
      cT = IT(16),
      KT = IT(1770),
      MT = IT(1055);

    function rT(TT) {
      let {
        tasks: oT,
        lastDisplayedTasks: IT
      } = TT;
      return (0, ST.jsx)(ST.Fragment, {
        children: Object.keys(oT).map((TT => (0, ST.jsx)(AT, {
          task: oT[TT],
          lastDisplayedAs: IT[TT]
        }, oT[TT].text)))
      })
    }

    function AT(TT) {
      let {
        task: oT,
        lastDisplayedAs: IT
      } = TT;
      const [iT, kT] = (0, zT.useState)(null !== IT && void 0 !== IT && IT.progress ? IT.progress / oT.goal : 0), [WT, XT] = (0, zT.useState)(!1), [BT, FT] = (0, zT.useState)(oT.claimed || !1);
      return (0, zT.useEffect)((() => {
        kT(oT.progress / oT.goal)
      }), [oT.progress, oT.goal]), BT ? null : (0, ST.jsxs)("div", {
        className: "Task",
        children: [(0, ST.jsx)("div", {
          className: "TaskDescDiv",
          children: (0, ST.jsx)(DT, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: oT.text
          })
        }), oT.progress < oT.goal ? (0, ST.jsxs)("div", {
          className: "TaskProgress",
          children: [0 !== iT ? (0, ST.jsx)("div", {
            className: "TaskProgressForeground",
            style: {
              width: 100 * iT + "%"
            }
          }) : null, (0, ST.jsx)("div", {
            className: "TaskProgressText",
            children: `${oT.progress}/${oT.goal}`
          })]
        }) : (0, ST.jsx)(xT.m, {
          className: "ClaimRewardButton",
          onClick: () => {
            XT(!0)
          },
          children: (0, ST.jsx)(DT, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: "Claim Reward"
          })
        }), WT ? (0, ST.jsx)(gT, {
          task: oT,
          close: () => {
            oT.claimed = !0, FT(!0), XT(!1)
          }
        }) : null]
      })
    }

    function gT(TT) {
      let {
        task: oT,
        close: IT
      } = TT;
      const [iT, kT] = (0, zT.useState)({}), [WT, XT] = (0, zT.useState)("closed");
      (0, zT.useEffect)((() => {
        let TT;
        return "animStart" === WT && (TT = setTimeout((() => {
          XT("animEnd")
        }), 700)), () => {
          clearTimeout(TT)
        }
      }), [WT]), (0, LT.d)((() => {
        FT.gameBridge.send("completeTask", oT.text)
      }));
      const DT = (0, BT.g)("currencyAmounts");
      return (0, ST.jsxs)("div", {
        className: "RewardBackground",
        onClick: () => {
          if ("animEnd" === WT)
            if (0 === oT.rewards.length) IT(), FT.gameBridge.send("completeTask", oT.text);
            else {
              const TT = {
                ...KT.e.get("currencyAmounts")
              };
              for (const oT in iT) TT[oT] = {
                ...TT[oT],
                amount: TT[oT].amount + iT[oT]
              };
              KT.e.apply({
                currencyAmounts: TT
              }), XT("closed")
            }
          else "closed" === WT && (kT(oT.rewards.pop()), XT("animStart"))
        },
        children: [(0, ST.jsx)("img", {
          className: "Chest",
          alt: "closed" !== WT ? "open chest" : "closed chest",
          src: `/textures/miscImages/Treasure Chest ${"closed"!==WT?"open":"closed"}.png`
        }), (0, ST.jsx)("div", {
          className: "Rewards",
          children: "closed" !== WT ? Object.keys(iT).map((TT => {
            const oT = null === DT || void 0 === DT ? void 0 : DT[TT];
            return !oT || oT.hidden ? null : (0, ST.jsxs)("div", {
              className: "Reward",
              children: [(0, ST.jsx)(MT.e, {
                name: oT.icon,
                className: "3x UiCurrencyIcon RewardIcon",
                style: {
                  color: oT.iconColour
                }
              }), (0, ST.jsx)("div", {
                className: "RewardAmountText",
                children: "animStart" === WT ? 0 : iT[TT]
              })]
            }, TT)
          })) : null
        }), "animStart" === WT ? (0, ST.jsx)(hT, {}) : null, (0, ST.jsx)("div", {
          className: "ChestsLeft",
          children: oT.rewards.length
        })]
      })
    }

    function hT() {
      const [TT, oT] = (0, zT.useState)(0);
      (0, zT.useEffect)((() => {
        oT(1)
      }), []);
      return (0, ST.jsx)(ST.Fragment, {
        children: Array.from({
          length: 40
        }).map(((oT, IT) => (0, ST.jsx)(MT.e, {
          name: "star",
          className: "3x UiCurrencyIcon OpenStar",
          style: {
            bottom: 50 * TT * Math.cos(IT / 40 * (2 * Math.PI)) + 50 + "vh",
            left: 50 * TT * Math.sin(IT / 40 * (2 * Math.PI)) + "vh",
            opacity: 0 === TT ? 1 : 0
          }
        }, IT)))
      })
    }
    cT.h.subscribe("requiredLibrariesLoaded", (() => {
      setTimeout((() => {
        const TT = new Image,
          oT = new Image;
        TT.src = "/textures/miscImages/Treasure Chest open.png", oT.src = "/textures/miscImages/Treasure Chest closed.png"
      }), 1e4)
    }));
    var wT = IT(2695),
      mT = IT(1110),
      eT = IT(1729),
      RT = IT(1403),
      uT = IT(314),
      vT = IT(1784),
      ET = IT(1310);

    function fT(TT) {
      var oT, IT;
      let {
        byId: iT,
        localId: zT
      } = TT;
      return null === zT ? null : null !== (oT = null === (IT = iT[zT]) || void 0 === IT ? void 0 : IT.name) && void 0 !== oT ? oT : null
    }

    function CT(TT) {
      let {
        lbStats: oT,
        storedState: IT = {}
      } = TT;
      const {
        userContext: iT
      } = (0, mT.b)(), kT = (0, vT.d)("players", fT), [WT, XT] = (0, zT.useState)(IT.selectedCat || (null === oT || void 0 === oT ? void 0 : oT[0]) || null), [BT, DT] = (0, zT.useState)(IT.selectedTimeframe || "Today"), [LT, xT] = (0, zT.useState)(null);
      (0, zT.useEffect)((() => {
        null === WT && null !== oT && oT.length > 0 && XT(oT[0])
      }), [oT, WT]);
      const [cT, KT] = (0, zT.useState)(IT.seeingTop || !1), [MT, rT] = (0, zT.useState)(!1), AT = (0, zT.useCallback)((() => {
        null !== WT && null !== BT && (FT.gameBridge.send("requestLeaderboard", {
          category: WT.value,
          timeframe: BT,
          seeTop: cT
        }), hT(!0), UT && aT(null))
      }), [WT, BT, IT, cT]);
      (0, zT.useEffect)((() => {
        AT(), IT.selectedCat = WT, IT.selectedTimeframe = BT, IT.seeingTop = cT
      }), [WT, BT, IT, cT, AT]), (0, zT.useEffect)((() => {
        if ((null === LT || void 0 === LT ? void 0 : LT.length) > 0)
          if (cT) cT && rT(null === CT(LT));
          else {
            for (const TT of LT)
              if (1 === TT.place) return void rT(!1);
            rT(!0)
          }
      }), [LT, cT]), (0, RT.g)("leaderboardResponse", (TT => {
        let {
          category: IT,
          timeframe: iT,
          data: zT
        } = TT;
        for (let kT = 0; kT < oT; kT++)
          if (oT[kT].value === IT) {
            XT(oT[kT]);
            break
          } DT(iT), xT(zT), hT(!1)
      }));
      const [gT, hT] = (0, zT.useState)(!0);

      function CT(TT) {
        const oT = fT(FT.gameBridge.latest("players"));
        for (let IT = 0; IT < TT.length; IT++)
          if (TT[IT].name === oT) return TT[IT].place;
        return null
      }
      const [jT, JT] = (0, zT.useState)(!1), [UT, aT] = (0, zT.useState)(null);
      (0, zT.useEffect)((() => {
        if (LT && !jT) {
          const TT = CT(LT);
          TT < (IT.lastSeenPlayerPlace || 0) && aT(IT.lastSeenPlayerPlace - TT), JT(!0)
        }
      }), [LT, IT, jT]), (0, zT.useEffect)((() => () => {
        LT && (IT.lastSeenPlayerPlace = CT(LT))
      }), [LT, IT]);
      const YT = (0, zT.useRef)(null),
        [QT, OT] = (0, zT.useState)(void 0);
      return (0, zT.useEffect)((() => {
        var TT, oT;
        QT !== (null === (TT = YT.current) || void 0 === TT ? void 0 : TT.offsetHeight) && OT(null === (oT = YT.current) || void 0 === oT ? void 0 : oT.offsetHeight)
      })), iT.isLoggedIn() ? (0, ST.jsxs)(ST.Fragment, {
        children: [(0, ST.jsxs)("div", {
          className: "LeaderboardSelectors",
          children: [(0, ST.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, ST.jsx)(wT.d, {
              options: oT.map((TT => ({
                label: TT.label,
                value: TT.value
              }))),
              value: WT,
              onChange: TT => {
                XT(TT)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), (0, ST.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, ST.jsx)(wT.d, {
              options: uT.Cc.map((TT => ({
                value: TT,
                label: TT,
                className: "LBDropdownMenuItem"
              }))),
              value: BT,
              onChange: TT => {
                DT(TT.label)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), MT ? (0, ST.jsx)("div", {
            className: "SeeTopText",
            onClick: () => {
              KT(!cT)
            },
            children: cT ? "See Yourself" : "See Top"
          }) : null]
        }), (0, ST.jsx)("div", {
          className: "LBTableWrapper",
          children: gT ? (0, ST.jsx)("div", {
            className: "LoaderContainer",
            children: (0, ST.jsx)(ET.d, {})
          }) : null === UT ? (0, ST.jsx)(ST.Fragment, {
            children: (0, ST.jsxs)("table", {
              className: "LBTable",
              children: [(0, ST.jsx)("thead", {
                className: "LBTableTHead",
                ref: YT,
                children: (0, ST.jsxs)("tr", {
                  children: [(0, ST.jsx)("th", {
                    className: "LBTablePlaceTH LBTableTH",
                    children: "PLACE"
                  }), (0, ST.jsx)("th", {
                    className: "LBTablePlayerTH LBTableTH",
                    children: "PLAYER"
                  }), (0, ST.jsx)("th", {
                    className: "LBTableValueTH LBTableTH",
                    children: WT.label.toUpperCase()
                  })]
                })
              }), (0, ST.jsx)("tbody", {
                children: LT.map((TT => (0, ST.jsxs)("tr", {
                  className: "LBTableTR " + (TT.name === kT ? "LBTableTRYou" : ""),
                  children: [(0, ST.jsx)("td", {
                    className: "LBTableTD",
                    children: `#${TT.place}`
                  }), (0, ST.jsx)("td", {
                    className: "LBTableTD",
                    children: (0, ST.jsx)(eT.c, {
                      text: [{
                        entityName: TT.name
                      }]
                    })
                  }), (0, ST.jsx)("td", {
                    className: "LBTableTD",
                    children: TT.stat
                  })]
                }, TT.name)))
              })]
            })
          }) : (0, ST.jsx)("div", {
            className: "LBIncreaseWrapper",
            onClick: () => {
              aT(null)
            },
            children: (0, ST.jsxs)("div", {
              className: "LBIncreaseDiv",
              children: [(0, ST.jsx)("div", {
                className: "TriangleUp"
              }), (0, ST.jsx)("div", {
                className: "LBIncreaseText",
                children: `${UT} Place${UT>1?"s":""}`
              })]
            })
          })
        })]
      }) : (0, ST.jsxs)("div", {
        className: "LBLoginDiv",
        children: [(0, ST.jsx)("div", {
          className: "LBLoginInfo",
          children: "Login to see the leaderboard"
        }), (0, ST.jsx)("div", {
          className: "LBLoginInfo",
          children: "You can login from the top left homescreen"
        })]
      })
    }
    var jT = IT(1108),
      JT = IT(90),
      UT = IT(26),
      aT = IT(2974);
    const YT = (0, zT.memo)((function(TT) {
      let {
        show: oT,
        onClose: IT
      } = TT;
      (0, jT.e)();
      const iT = (0, BT.g)("_tasks"),
        kT = (0, BT.g)("_availableLeaderboards"),
        [FT, DT] = (0, zT.useState)({});
      iT && Object.keys(iT).length > 0 && 0 === Object.keys(FT).length && DT(iT);
      const [LT] = (0, zT.useState)({
        tasks: {},
        leaderboard: {}
      }), xT = {
        tasks: {
          Title: "Tasks",
          getIsDefined: () => !!iT && Object.keys(iT).length > 0,
          content: (0, ST.jsx)(rT, {
            tasks: iT,
            lastDisplayedTasks: FT
          })
        },
        leaderboard: {
          Title: "Leaderboard",
          getIsDefined: () => (null === kT || void 0 === kT ? void 0 : kT.length) > 0,
          content: (0, ST.jsx)(CT, {
            lbStats: kT,
            storedState: LT.leaderboard
          })
        }
      };

      function cT() {
        for (const TT in xT)
          if (xT[TT].getIsDefined()) return TT;
        return null
      }
      const [KT, MT] = (0, zT.useState)(cT());

      function AT() {
        DT({
          ...iT
        }), IT()
      }(0, zT.useEffect)((() => {
        KT || MT(cT())
      }), [cT()]), (0, XT.e)(!0, KT && oT), (0, zT.useEffect)((() => {
        oT && !KT && (console.log("CLOSE"), AT())
      }), [oT, KT]);
      const [gT, hT] = (0, zT.useState)(!1);
      return (0, zT.useEffect)((() => {
        oT && KT && !gT && hT(!0)
      }), [oT, gT, KT]), (0, zT.useEffect)((() => {
        !gT && iT && "tasks" !== KT && MT("tasks")
      }), [gT, iT, KT]), (0, ST.jsx)(ST.Fragment, {
        children: KT ? (0, ST.jsx)(aT.c, {
          className: "RetentionFeaturesWrapper",
          show: oT,
          children: (0, ST.jsxs)(WT.e, {
            close: AT,
            escDoesExit: !1,
            closeClassnameList: ["VerticalMenuScreenDiv"],
            togglePointerLock: !1,
            globallyUniqueKey: "RetentionFeaturesComponent",
            children: [(0, ST.jsxs)("div", {
              className: "VerticalMenuScreenDiv",
              children: [(0, ST.jsx)(OT, {}), (0, ST.jsxs)("div", {
                className: "MenuDiv",
                children: [(0, ST.jsx)(QT, {
                  setCategory: MT,
                  menuCategories: xT,
                  selectedCat: KT
                }), (0, ST.jsx)("div", {
                  className: "MenuCategoryContainer",
                  children: xT[KT].content
                })]
              })]
            }), (0, ST.jsx)("div", {
              className: "BottomScreenMenuWrapper",
              children: JT.featureFlags.useDiscord && (0, ST.jsx)("div", {
                className: "DiscordMenuDivDiv",
                children: (0, ST.jsx)("div", {
                  className: "DiscordMenuDiv",
                  children: (0, ST.jsx)(HT, {
                    tasks: iT
                  })
                })
              })
            })]
          })
        }) : null
      })
    }));

    function QT(TT) {
      let {
        selectedCat: oT,
        setCategory: IT,
        menuCategories: iT
      } = TT;
      return (0, ST.jsx)("div", {
        className: "MenuHeader",
        children: Object.keys(iT).map((TT => iT[TT].getIsDefined() ? (0, ST.jsx)("div", {
          className: "MenuHeaderCategory " + (TT === oT ? "SelectedHeaderCat" : "UnselectedHeaderCat"),
          onClick: () => {
            IT(TT)
          },
          children: iT[TT].Title
        }, TT) : null))
      })
    }

    function OT() {
      const TT = (0, BT.g)("currencyAmounts");
      return (0, ST.jsx)("div", {
        className: "TopScreenCurrencies",
        children: Object.keys(null !== TT && void 0 !== TT ? TT : {}).map((oT => {
          const IT = TT[oT];
          return IT.hidden ? null : (0, ST.jsxs)("div", {
            className: "TopScreenCurrencyDiv",
            children: [(0, ST.jsx)(MT.e, {
              name: IT.icon,
              className: "3x UiCurrencyIcon",
              style: {
                color: IT.iconColour
              }
            }), (0, ST.jsx)("div", {
              className: "UiCurrencyAmount",
              children: IT.amount
            })]
          }, oT)
        }))
      })
    }

    function HT(TT) {
      let {
        tasks: oT
      } = TT;
      return (0, ST.jsxs)("a", {
        className: "MenuDiscordButtonWrapper",
        href: "https://discord.gg/playbloxd",
        target: "_blank",
        rel: "noreferrer",
        children: [(0, ST.jsx)(MT.e, {
          name: "discord",
          kit: "brands",
          className: "DiscordButton",
          onClick: () => {
            UT.e.setItem("DiscordPressed", !0), FT.gameBridge.send("setServerCookie", {
              key: "joinDiscord",
              value: "true"
            }), "joinDiscord" in oT && cT.h.XM("clientTaskProgress", {
              taskId: "joinDiscord",
              progress: 1
            })
          }
        }), (0, ST.jsx)(kT.d, {})]
      })
    }
    var nT = IT(12),
      qT = IT(1585),
      ZT = IT(35540),
      lT = IT(8652),
      sT = IT(4137),
      tT = IT(159),
      GT = IT(1188),
      pT = IT(1337),
      bT = IT(2363),
      yT = IT(1171),
      NT = IT(1591),
      PT = IT(2189),
      dT = IT(2180),
      VT = IT(1910),
      To = IT(1852),
      oo = IT(1231),
      Io = IT(1427),
      io = IT(4098);

    function zo(TT) {
      const oT = {
        lobbyName: TT,
        answer: null,
        response: io.e.getSocialSettings(TT)
      };
      return oT.response.then((TT => {
        oT.answer = TT
      })), oT
    }
    const ko = new Map;

    function Wo(TT) {
      const [oT] = (0, zT.useState)((() => function(TT) {
        var oT;
        const IT = null !== (oT = ko.get(TT)) && void 0 !== oT ? oT : null;
        return null !== IT && void 0 !== IT && IT.answer && "error" in IT.answer ? null : IT
      }(TT))), [IT, iT] = (0, zT.useState)((() => null !== oT && void 0 !== oT && oT.answer && "settings" in oT.answer ? oT.answer.settings : null)), [kT, WT] = (0, zT.useState)(!0), [XT, BT] = (0, zT.useState)(null !== IT), FT = (0, zT.useRef)(IT);
      FT.current = IT;
      const ST = (0, zT.useRef)(0),
        DT = (0, zT.useRef)(0),
        LT = (0, zT.useRef)(!1),
        xT = (0, zT.useRef)(!0),
        cT = (0, zT.useCallback)((async oT => {
          const IT = ++ST.current,
            zT = await (null !== oT && void 0 !== oT ? oT : io.e.getSocialSettings(TT));
          xT.current && IT === ST.current && (BT(!0), WT(!1), "error" in zT || iT(zT.settings))
        }), [TT]),
        KT = (0, zT.useCallback)((() => {
          WT(!0), cT()
        }), [cT]);
      (0, zT.useEffect)((() => (xT.current = !0, ko.delete(TT), WT(!0), cT(null === oT || void 0 === oT ? void 0 : oT.response), () => {
        xT.current = !1
      })), [cT, TT, oT]);
      const MT = TT => {
        ST.current++, WT(!1), FT.current = TT, iT(TT)
      };
      return {
        settings: IT,
        loading: kT,
        answered: XT,
        retry: KT,
        change: async function(oT, IT) {
          let {
            quiet: iT = !1
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const zT = FT.current;
          if (null === zT) return !1;
          MT(IT(zT)), DT.current > 0 && (LT.current = !0), DT.current++;
          const kT = await io.e.setSocialSettings(TT, oT);
          DT.current--;
          const WT = !("error" in kT);
          if (!xT.current) return WT;
          if (iT);
          else if ("error" in kT) VT.e.showMessage({
            translationKey: kT.error
          });
          else
            for (const TT of kT.notFound) VT.e.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: TT
              }
            });
          if (DT.current > 0) return WT;
          const XT = LT.current;
          return LT.current = !1, !XT && "settings" in kT ? MT(kT.settings) : (XT || MT(zT), cT()), WT
        }
      }
    }

    function Xo(TT, oT) {
      const IT = oT.toLowerCase();
      for (const iT of TT)
        if (iT.toLowerCase() === IT) return !0;
      return !1
    }

    function Bo(TT) {
      if (null === TT) return !0;
      const {
        visibility: oT
      } = TT;
      return "public" === oT || "unlisted" === oT || "whitelist" === oT && TT.canManage
    }

    function Fo(TT, oT, IT) {
      if (IT) {
        const IT = oT.filter((oT => !Xo(TT.whitelist, oT)));
        return {
          ...TT,
          whitelist: [...TT.whitelist, ...IT]
        }
      }
      return {
        ...TT,
        whitelist: TT.whitelist.filter((TT => !Xo(oT, TT)))
      }
    }
    var So = IT(2382);

    function Do(TT) {
      let {
        worldCode: oT,
        message: IT
      } = TT;
      const {
        t: iT
      } = (0, yT.t)(), {
        isTouchScreen: kT
      } = (0, nT.k)(["isTouchScreen"]), WT = JT.featureFlags.canUseInviteLinks, XT = (0, lT.h)(WT && null === IT), [BT, FT] = (0, So.i)(), DT = (0, zT.useRef)(null);
      if (null !== IT) return (0, ST.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, ST.jsx)(MT.e, {
          name: "lock"
        }), (0, ST.jsx)("span", {
          children: IT
        })]
      });
      const LT = WT ? XT : oT,
        cT = kT && WT && (0, So.e)();
      return (0, ST.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!WT && (0, ST.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: iT("worldSocial:worldCode")
        }), (0, ST.jsx)("input", {
          ref: DT,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== LT && void 0 !== LT ? LT : "",
          "aria-label": iT(WT ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: TT => {
            TT.currentTarget.select()
          }
        }), (0, ST.jsxs)(xT.e, {
          className: "WorldSocialCopy",
          disabled: null === LT,
          onClick: () => {
            null !== LT && (0, So.f)(LT, {
              useShareSheet: cT,
              onOutcome: TT => {
                if ((0, Io.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== TT || WT ? TT : "code"
                  }), "copied" === TT) FT();
                else if ("failed" === TT) {
                  var oT;
                  null === (oT = DT.current) || void 0 === oT || oT.focus(), VT.e.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, ST.jsx)(MT.e, {
            name: BT ? "check" : cT ? "up-from-bracket" : "copy"
          }), " ", iT(BT ? "general:copied" : cT ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
    var Lo = IT(1042),
      xo = IT.n(Lo);
    const co = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      Ko = ["unlisted", "public", "whitelist", "private"];

    function Mo(TT) {
      let {
        visibility: oT,
        onPick: IT
      } = TT;
      const {
        t: iT
      } = (0, yT.t)(), kT = (0, zT.useRef)([]);
      return (0, ST.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": iT("worldSocial:whoCanJoin"),
        children: Ko.map(((TT, zT) => {
          const WT = TT === oT;
          return (0, ST.jsxs)("button", {
            ref: TT => {
              kT.current[zT] = TT
            },
            type: "button",
            className: xo()("WorldSocialTile", {
              WorldSocialTileSelected: WT
            }),
            "aria-pressed": WT,
            tabIndex: WT ? 0 : -1,
            onKeyDown: TT => {
              ((TT, oT) => {
                const IT = "ArrowRight" === TT.key || "ArrowDown" === TT.key ? 1 : "ArrowLeft" === TT.key || "ArrowUp" === TT.key ? -1 : 0;
                var iT;
                0 !== IT && (TT.preventDefault(), null === (iT = kT.current[(oT + IT + Ko.length) % Ko.length]) || void 0 === iT || iT.focus())
              })(TT, zT)
            },
            onClick: () => {
              IT(TT)
            },
            children: [(0, ST.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, ST.jsx)(MT.e, {
                name: co[TT]
              })
            }), (0, ST.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, ST.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: iT(`worldSocial:${TT}`)
              }), (0, ST.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: iT(`worldSocial:${TT}Description`)
              })]
            })]
          }, TT)
        }))
      })
    }
    var ro = IT(596),
      Ao = IT(2357),
      go = IT(2303),
      ho = IT(3899);

    function wo(TT, oT) {
      var IT;
      return {
        isError: !1,
        name: TT,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== oT && void 0 !== oT ? oT : {},
        nameColour: null !== (IT = null === oT || void 0 === oT ? void 0 : oT.nameColour) && void 0 !== IT ? IT : ro.d,
        location: {
          status: "offline"
        }
      }
    }

    function mo(TT) {
      let {
        player: oT,
        isFriend: IT = !1,
        status: iT,
        showLocation: zT = void 0 === iT,
        dD: kT,
        onSendFriendRequest: WT,
        actions: XT,
        zIndex: BT
      } = TT;
      const {
        t: FT
      } = (0, yT.t)();
      let DT, LT = iT;
      return null !== kT && void 0 !== kT && kT.on && (LT = (0, ST.jsxs)(ST.Fragment, {
        children: [null !== iT && void 0 !== iT ? iT : (0, ST.jsx)(go.e, {
          socialPreview: oT
        }), (0, ST.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", FT("worldSocial:canJoin")]
        })]
      })), (XT || kT) && (DT = (0, ST.jsxs)(ST.Fragment, {
        children: [XT, kT && (0, ST.jsx)("label", {
          className: "WorldSocialTick",
          children: (0, ST.jsx)(ho.d, {
            checked: kT.on,
            disabled: !1,
            ariaLabel: FT("worldSocial:letJoin", {
              playerName: oT.name
            }),
            onChange: TT => {
              kT.onChange(TT.target.checked)
            }
          })
        })]
      })), (0, ST.jsx)(Ao.c, {
        playerSocialPreview: oT,
        isFriend: IT,
        hideFriendBadge: !0,
        onFriendRemoved: IT ? TT => {
          NT.e.removeFriendFromState(TT)
        } : void 0,
        status: LT,
        showLocation: zT,
        onSendFriendRequest: WT,
        opensProfileCard: !1,
        zIndex: BT,
        children: DT
      })
    }

    function eo(TT) {
      let {
        row: oT,
        dD: IT,
        canInvite: iT,
        invited: zT,
        onInvite: kT,
        zIndex: WT
      } = TT;
      const {
        t: XT
      } = (0, yT.t)(), BT = "online" === oT.place ? xT.e : xT.i;
      return (0, ST.jsx)(mo, {
        player: oT.friend,
        isFriend: !0,
        status: "here" === oT.place ? XT("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        dD: IT,
        zIndex: WT,
        actions: iT && (0, ST.jsx)(BT, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: zT,
          onClick: kT,
          ariaLabel: `${XT("worldSocial:invite")} ${oT.friend.name}`,
          children: XT(zT ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
    var Ro = IT(2417);

    function uo(TT) {
      let {
        playersHere: oT,
        exclude: IT,
        Om: iT
      } = TT;
      const {
        t: kT
      } = (0, yT.t)(), WT = (0, Ro.k)(Ro.f), [XT, BT] = (0, zT.useState)([]), FT = [], DT = (TT, oT) => {
        const iT = [...IT, ...FT.map((TT => TT.player.name))];
        FT.length < 3 && !Xo(iT, TT.name) && FT.push({
          player: TT,
          status: oT
        })
      };
      for (const zT of oT) DT(wo(zT.name, zT.cosmetics, zT.ranks), kT("worldSocial:inThisWorld"));
      if ("loaded" === WT.state.status)
        for (const zT of WT.state.recentPlayers) zT.preview.name && !zT.preview.isError && DT({
          ...zT.preview,
          location: {
            status: "offline"
          }
        }, kT("worldSocial:playedWithYou"));
      const LT = TT => {
        BT((oT => [...oT, TT])), iT(TT).finally((() => {
          BT((oT => oT.filter((oT => oT !== TT))))
        }))
      };
      return (0, ST.jsx)(ST.Fragment, {
        children: FT.map(((TT, oT) => {
          let {
            player: IT,
            status: iT
          } = TT;
          return (0, ST.jsx)(mo, {
            zIndex: FT.length - oT,
            player: IT,
            status: iT,
            onSendFriendRequest: () => {
              LT(IT.name)
            },
            actions: (0, ST.jsx)(pT.e, {
              tooltipInner: (0, ST.jsx)(ST.Fragment, {
                children: kT("recentPlayers:addFriend")
              }),
              delayShow: 0,
              hoverOnly: !0,
              children: (0, ST.jsx)(xT.e, {
                className: "FriendRequestButton",
                disabled: XT.includes(IT.name),
                ariaLabel: `${kT("recentPlayers:addFriend")} ${IT.name}`,
                onClick: () => {
                  LT(IT.name)
                },
                children: (0, ST.jsx)(MT.e, {
                  name: "user-plus"
                })
              })
            })
          }, `suggestion:${IT.name}`)
        }))
      })
    }
    var vo = IT(1624);

    function Eo(TT) {
      let {
        Om: oT
      } = TT;
      const {
        t: IT
      } = (0, yT.t)(), iT = (0, zT.useRef)(null), [kT, WT] = (0, zT.useState)(""), [XT, BT] = (0, zT.useState)(!1), FT = () => {
        const TT = kT.trim();
        "" === TT || XT || (BT(!0), oT(TT).then((TT => {
          TT && iT.current && (iT.current.value = "", WT(""))
        })).finally((() => {
          BT(!1)
        })))
      };
      return (0, ST.jsxs)("div", {
        className: "WorldSocialAddFriend",
        onKeyDown: TT => {
          TT.target === iT.current && "Escape" !== TT.key && TT.stopPropagation()
        },
        children: [(0, ST.jsx)(vo.e, {
          className: "WorldSocialAddFriendInput",
          domRef: iT,
          maxLength: 32,
          placeholderText: IT("worldSocial:addFriendPlaceholder"),
          ariaLabel: IT("worldSocial:addFriendPlaceholder"),
          stopPropagation: !1,
          onValueChange: TT => {
            WT(TT)
          },
          onEnter: FT
        }), (0, ST.jsxs)(xT.e, {
          className: "WorldSocialAddFriendButton SmallTextLight",
          disabled: XT || "" === kT.trim(),
          onClick: FT,
          children: [(0, ST.jsx)(MT.e, {
            name: "user-plus"
          }), " ", IT("socialBar:sendRequest")]
        })]
      })
    }
    const fo = new Map;

    function Co(TT) {
      const oT = fo.get(TT);
      if (!oT) return [];
      const IT = Date.now();
      for (const [iT, zT] of oT) IT - zT >= tT.l && oT.delete(iT);
      return [...oT.keys()]
    }
    var jo = IT(1193),
      Jo = IT(1444),
      Uo = IT(4131),
      ao = IT(289),
      Yo = IT(4114);
    const Qo = ["auto", "auto_existing"];

    function Oo(TT) {
      return Qo.includes(TT)
    }

    function Ho(TT, oT) {
      const IT = (0, jo.Db)(TT);
      return null !== oT && (0, jo.Db)(oT) === IT || (0, Yo.d)().some((TT => (0, jo.Db)(TT.name) === IT))
    }
    const no = new Set;

    function qo(TT) {
      return `worldSocialSeen:${TT}`
    }

    function Zo(TT) {
      return !TT || no.has(TT) || !0 === UT.e.getItem(qo(TT))
    }

    function so(TT) {
      TT && !no.has(TT) && (no.add(TT), UT.e.setItem(qo(TT), !0))
    }

    function to(TT) {
      let {
        show: oT,
        onClose: IT,
        opener: iT
      } = TT;
      const {
        lobbyName: kT,
        shownLobbyName: XT
      } = (0, vT.f)("connectedGame");
      return (0, zT.useEffect)((() => {
        oT && (0, Io.reportAnalyticsClick)({
          id: "world_social.open",
          value: iT
        })
      }), [oT]), (0, ST.jsx)(WT.e, {
        show: oT && null !== kT,
        close: IT,
        togglePointerLock: !1,
        className: "WorldSocialBackgroundScreen",
        globallyUniqueKey: "WorldSocialPopup",
        doGameplayStartStopOnShow: !0,
        ignorePressesAsShown: "icon" !== iT,
        children: oT && null !== kT && (0, ST.jsx)(Go, {
          lobbyName: kT,
          worldCode: null !== XT && void 0 !== XT ? XT : kT,
          onClose: IT
        }, kT)
      })
    }

    function Go(TT) {
      var oT;
      let {
        lobbyName: IT,
        worldCode: iT,
        onClose: kT
      } = TT;
      const {
        t: WT
      } = (0, yT.t)(), XT = (0, zT.useRef)(null), {
        settings: BT,
        loading: FT,
        answered: DT,
        change: LT,
        retry: cT
      } = Wo(IT), KT = (0, NT.l)(), rT = (0, vT.f)("players"), AT = (0, vT.f)("hiddenPlayerNames"), [gT, hT] = (0, zT.useState)([]), [wT, eT] = (0, zT.useState)([]), [RT, uT] = (0, zT.useState)(!1), fT = (0, zT.useMemo)((() => {
        var TT, oT;
        const IT = null === rT.localId ? null : null !== (TT = null === (oT = rT.byId[rT.localId]) || void 0 === oT ? void 0 : oT.name) && void 0 !== TT ? TT : null;
        return rT.ids.flatMap((TT => {
          const oT = rT.byId[TT];
          return null !== oT && void 0 !== oT && oT.name && oT.name !== IT ? [{
            name: oT.name,
            cosmetics: oT.cosmetics,
            ranks: oT.ranks
          }] : []
        }))
      }), [rT]), CT = (0, zT.useMemo)((() => function(TT, oT, IT) {
        const iT = [],
          zT = [],
          kT = [];
        for (const WT of TT) !WT.isError && WT.name && ("inGame" === WT.location.status && WT.location.inLobbyName === oT || Xo(IT, WT.name) ? zT.push({
          friend: WT,
          place: "here"
        }) : "offline" === WT.location.status ? kT.push({
          friend: WT,
          place: "offline"
        }) : iT.push({
          friend: WT,
          place: "online"
        }));
        return [...iT, ...zT, ...kT]
      }(KT.friends, IT, fT.map((TT => TT.name)))), [KT.friends, IT, fT]), jT = JT.featureFlags.canSeeRealPlayerNames ? fT.filter((TT => null === (0, oo.b)(TT.name, AT))) : [], UT = null !== BT && void 0 !== BT && BT.canManage ? BT : null, aT = null !== UT, YT = null !== (oT = null === BT || void 0 === BT ? void 0 : BT.visibility) && void 0 !== oT ? oT : null, QT = "whitelist" === (null === UT || void 0 === UT ? void 0 : UT.visibility), OT = "private" === YT || "whitelist" === YT && !aT, {
        userContext: HT
      } = (0, mT.b)();
      (0, zT.useEffect)((() => {
        aT && Ho(IT, HT.getPersonalWorldLobbyName()) && so(HT.whamm)
      }), [aT, IT, HT]);
      const nT = OT ? WT("whitelist" === YT ? "socialBar:inviteWorldManagersOnly" : aT ? "worldSocial:privateLinkRow" : "socialBar:inviteWorldPrivate") : null,
        qT = null === nT;
      (0, zT.useEffect)((() => OT ? void 0 : VT.e.quietFriendAdded()), [OT]), (0, zT.useEffect)((() => VT.e.quietFriendRequests()), []);
      const lT = (0, zT.useRef)(!1);
      (0, zT.useEffect)((() => {
        const TT = XT.current,
          oT = !lT.current;
        lT.current = !0;
        const IT = null === document.activeElement || document.activeElement === document.body;
        null !== TT && void 0 !== TT && TT.contains(document.activeElement) || !oT && !IT || (0, ZT.g)() || null === TT || void 0 === TT || TT.focus({
          preventScroll: !0
        })
      }), [qT]), (0, zT.useEffect)((() => {
        const TT = TT => {
          "Escape" !== TT.key || null !== document.activeElement && document.activeElement !== document.body || kT()
        };
        return document.addEventListener("keydown", TT), () => {
          document.removeEventListener("keydown", TT)
        }
      }), [kT]);
      const io = null === BT && !DT,
        zo = (FT || KT.loading) && 0 === KT.friends.length,
        ko = KT.friends.flatMap((TT => TT.name ? [TT.name] : [])),
        So = gT.filter((TT => !Xo(ko, TT))),
        Lo = CT.length + 3,
        xo = So.length + Lo,
        co = RT ? KT.requests : KT.requests.slice(0, 1),
        Ko = async function(TT) {
          let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (const IT of function(TT, oT) {
              const IT = [];
              for (let iT = 0; iT < TT.length; iT += oT) IT.push(TT.slice(iT, iT + oT));
              return IT
            }(TT, sT.x)) {
            if (!await LT({
                whitelistAdd: IT
              }, (TT => Fo(TT, IT, !0)), {
                quiet: oT
              })) return !1
          }
          return !0
        }, ro = async TT => {
          if (TT === YT) return;
          (0, Io.reportAnalyticsClick)({
            id: "world_social.set_mode",
            value: TT
          });
          const oT = [...Co(IT), ...wT],
            iT = "whitelist" === TT && BT ? function(TT, oT, IT) {
              const iT = [],
                zT = TT.flatMap((TT => "here" === TT.place ? [TT.friend.name] : []));
              for (const kT of [...zT, ...oT]) Xo(iT, kT) || Xo(IT, kT) || iT.push(kT);
              return iT
            }(CT, oT, BT.whitelist) : [];
          await LT({
            setVisibility: TT
          }, (oT => ({
            ...oT,
            visibility: TT
          }))) && await Ko(iT)
        }, Ao = TT => {
          if (QT && UT) return {
            on: Xo(UT.whitelist, TT),
            onChange: oT => {
              (0, Io.reportAnalyticsClick)({
                id: "world_social.whitelist_toggle",
                value: oT ? "on" : "off"
              }), LT(oT ? {
                whitelistAdd: [TT]
              } : {
                whitelistRemove: TT
              }, (IT => Fo(IT, [TT], oT)))
            }
          }
        }, go = async TT => {
          (0, Io.reportAnalyticsClick)({
            id: "world_social.invite",
            value: "friend"
          });
          const oT = () => {
            eT((oT => oT.filter((oT => oT !== TT))))
          };
          eT((oT => [...oT, TT]));
          const iT = function(TT, oT) {
            return null === TT || void 0 === TT || !TT.canManage || Xo(TT.whitelist, oT) ? "none" : "whitelist" === TT.visibility ? "required" : "quiet"
          }(BT, TT);
          if ("none" !== iT) {
            const IT = Ko([TT], "quiet" === iT);
            if ("required" === iT && !await IT) return void oT()
          }
          await (0, PT.k)(TT, "game", {
            announceSent: !1,
            source: "world_social"
          }) ? (! function(TT, oT) {
            var IT;
            const iT = null !== (IT = fo.get(TT)) && void 0 !== IT ? IT : new Map;
            iT.set(oT, Date.now()), fo.set(TT, iT)
          }(IT, TT), setTimeout(oT, tT.p)) : oT()
        }, ho = async (TT, oT) => {
          (0, Io.reportAnalyticsClick)({
            id: "world_social.add_friend",
            value: oT
          });
          const IT = await (0, dT.i)(TT, "world_social");
          return (0, dT.b)(IT, TT, {
            announceSent: !1
          }), "failed" !== IT.kind && ("sent" === IT.kind && hT((oT => Xo(oT, TT) ? oT : [...oT, TT])), QT && await Ko([TT]), !0)
        };
      return (0, ST.jsxs)("div", {
        ref: XT,
        className: "WorldSocialPopup AnimFadeInScaleUp",
        tabIndex: -1,
        onKeyDown: TT => {
          TT.target === TT.currentTarget && " " === TT.key && TT.preventDefault()
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "WorldSocialTitle",
        children: [(0, ST.jsxs)("div", {
          className: "WorldSocialHeader",
          children: [(0, ST.jsx)("h2", {
            id: "WorldSocialTitle",
            className: "WorldSocialTitle SmallTextBold",
            children: WT("worldSocial:title")
          }), (0, ST.jsx)(xT.j, {
            className: "WorldSocialClose",
            onClick: kT
          })]
        }), io && (0, ST.jsx)("div", {
          className: "WorldSocialLoading",
          children: (0, ST.jsx)(ET.d, {})
        }), !io && (0, ST.jsxs)(ST.Fragment, {
          children: [(0, ST.jsx)(Do, {
            worldCode: iT,
            message: nT
          }), null === BT && !FT && (0, ST.jsx)("button", {
            type: "button",
            className: "WorldSocialLoadFailed",
            onClick: cT,
            children: WT("worldSocial:loadFailed")
          }), aT && null !== YT && (0, ST.jsx)(Mo, {
            visibility: YT,
            onPick: TT => {
              ro(TT)
            }
          }), KT.requests.length > 0 && (0, ST.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, ST.jsx)(bT.d, {
              label: (0, ST.jsxs)(ST.Fragment, {
                children: [(0, ST.jsx)(MT.e, {
                  name: To.d
                }), " ", WT("socialBar:requests")]
              }),
              meta: (0, ST.jsxs)(ST.Fragment, {
                children: [KT.requests.length, KT.requests.length === GT.n && (0, ST.jsx)("span", {
                  className: "SocialSectionTitleLimit",
                  children: WT("socialBar:limitReached")
                }), !RT && KT.requests.length > 1 && (0, ST.jsx)("button", {
                  type: "button",
                  className: "WorldSocialMoreRequests",
                  onClick: () => {
                    uT(!0)
                  },
                  children: WT("worldSocial:moreRequests", {
                    count: KT.requests.length - 1
                  })
                })]
              })
            }), (0, ST.jsx)("div", {
              className: "PlayerRows",
              children: co.map(((TT, oT) => (0, ST.jsx)(mo, {
                zIndex: co.length - oT,
                player: TT,
                actions: (0, ST.jsxs)(ST.Fragment, {
                  children: [(0, ST.jsx)(pT.e, {
                    tooltipInner: (0, ST.jsx)(ST.Fragment, {
                      children: WT("general:accept")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, ST.jsx)(xT.e, {
                      className: "FriendRequestButton",
                      ariaLabel: `${WT("general:accept")} ${TT.name}`,
                      analyticsClick: {
                        id: "social.accept_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, dT.e)(TT.name, !0, {
                          source: "world_social"
                        })
                      },
                      children: (0, ST.jsx)(MT.e, {
                        name: "check"
                      })
                    })
                  }), (0, ST.jsx)(pT.e, {
                    tooltipInner: (0, ST.jsx)(ST.Fragment, {
                      children: WT("general:decline")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, ST.jsx)(xT.i, {
                      className: "FriendRequestButton",
                      ariaLabel: `${WT("general:decline")} ${TT.name}`,
                      analyticsClick: {
                        id: "social.decline_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, dT.e)(TT.name, !1, {
                          source: "world_social"
                        })
                      },
                      children: (0, ST.jsx)(MT.e, {
                        name: "xmark"
                      })
                    })
                  })]
                })
              }, `incoming:${TT.name}`)))
            })]
          }), (0, ST.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, ST.jsx)(bT.d, {
              label: (0, ST.jsxs)(ST.Fragment, {
                children: [(0, ST.jsx)(MT.e, {
                  name: To.c
                }), " ", WT("socialBar:friends")]
              }),
              meta: KT.loaded && !OT ? KT.friends.length : void 0
            }), (0, ST.jsx)(Eo, {
              Om: TT => ho(TT, "field")
            }), zo && (0, ST.jsx)("div", {
              className: "WorldSocialLoading",
              children: (0, ST.jsx)(ET.d, {})
            }), !zo && (0, ST.jsxs)(ST.Fragment, {
              children: [(0, ST.jsxs)("div", {
                className: "PlayerRows",
                children: [So.map(((TT, oT) => (0, ST.jsx)(mo, {
                  zIndex: xo - oT,
                  player: wo(TT, null),
                  status: WT("worldSocial:requestSent"),
                  dD: Ao(TT)
                }, `request:${TT}`))), !OT && CT.map(((TT, oT) => (0, ST.jsx)(eo, {
                  zIndex: Lo - oT,
                  row: TT,
                  dD: Ao(TT.friend.name),
                  canInvite: Bo(BT) && "here" !== TT.place,
                  invited: wT.includes(TT.friend.name),
                  onInvite: () => {
                    go(TT.friend.name)
                  }
                }, TT.friend.name))), KT.loaded && 0 === KT.friends.length && (0, ST.jsx)(uo, {
                  playersHere: jT,
                  exclude: gT,
                  Om: TT => ho(TT, "suggestion")
                })]
              }), QT && KT.loaded && 0 === KT.friends.length && 0 === So.length && (0, ST.jsx)("div", {
                className: "WorldSocialEmpty",
                children: WT("worldSocial:whitelistNoFriends")
              })]
            })]
          })]
        })]
      })
    }
    var po = IT(2214),
      bo = IT(2231);

    function yo(TT) {
      let {
        show: oT,
        onClose: IT,
        option: iT
      } = TT;
      const kT = (0, vT.d)("connectedGame", (TT => (0, po.c)(TT) ? TT.lobbyName : null));
      return function(TT) {
        const {
          gameEntrySource: oT,
          loadingOverlayVisible: IT
        } = (0, nT.k)(["gameEntrySource", "loadingOverlayVisible"]), {
          userContext: iT
        } = (0, mT.b)(), kT = (0, vT.f)("localPlayerAlive"), WT = (0, vT.d)("players", (TT => null !== TT.localId && void 0 !== TT.byId[TT.localId])), XT = (0, bo.o)(), BT = (0, zT.useRef)(null), FT = (0, zT.useRef)(null), ST = "worldCreation" === oT, DT = iT.whamm, LT = iT.getPersonalWorldLobbyName();
        (0, zT.useEffect)((() => {
          var oT;
          null !== TT && (null === (oT = FT.current) || void 0 === oT ? void 0 : oT.lobbyName) !== TT && null !== TI(TT, ST, DT, LT) && (FT.current = zo(TT))
        }), [ST, TT, DT, LT]), (0, zT.useEffect)((() => {
          if (null !== TT && (!IT && kT && WT)) return XT.whenShown((() => {
            var oT;
            const IT = BT.current === TT ? null : TI(TT, ST, DT, LT);
            if (null === IT) return;
            const iT = (null === (oT = FT.current) || void 0 === oT ? void 0 : oT.lobbyName) === TT ? FT.current : zo(TT);
            FT.current = null, BT.current = TT,
              function(TT, oT, IT, iT) {
                const {
                  lobbyName: zT
                } = TT, kT = () => {
                  ! function(TT, oT) {
                    if (!kI()) return void oT(!0);
                    const IT = performance.now() + iI;
                    let iT = 0;
                    const zT = () => {
                      iT = kI() ? 0 : iT + 1, iT >= 2 ? oT(!0) : !zI(TT) || performance.now() > IT ? oT(!1) : setTimeout(zT, II)
                    };
                    setTimeout(zT, II)
                  }(zT, (kT => {
                    iT();
                    const WT = "auto_existing" === oT && Zo(IT);
                    kT && zI(zT) && !Po(zT) && !WT && (oI(TT) ? Vo(zT) : (Vo(zT), so(IT), function(TT) {
                      const oT = ao.c.world_social_popup_v1;
                      return (0, ao.g)("world_social_popup_v1"), (0, Io.reportAnalyticsClick)({
                        id: "world_social.auto_open",
                        value: `${oT}:${(0,Uo.b)()}:${TT}`
                      }), (0, Jo.flushClientAnalyticsEvents)(), "auto_open" === oT
                    }(oT) && (! function(TT) {
                      ko.set(TT.lobbyName, TT)
                    }(TT), cT.h.XM("toggleMenu", `inviteLink|${oT}`), "inviteLink" !== nT.c.get("openInGameMenuName") && console.warn("World social popup: the auto-open asked for it, but it didn't open"))))
                  }))
                };
                if ("auto" === oT && !oI(TT)) return void kT();
                TT.response.then((TT => {
                  if (!("error" in TT)) return TT.settings.canManage ? void kT() : (Vo(zT), void iT());
                  iT()
                }))
              }(iT, IT, DT, (() => {
                BT.current === TT && (BT.current = null)
              }))
          }))
        }), [XT, ST, IT, TT, kT, WT, DT, LT])
      }(kT), (0, zT.useEffect)((() => {
        oT && null !== kT && Vo(kT)
      }), [oT, kT]), null !== kT ? (0, ST.jsx)(to, {
        show: oT,
        onClose: IT,
        opener: Oo(iT) ? iT : "icon"
      }) : (0, ST.jsx)(lT.e, {
        show: oT,
        onClose: IT
      })
    }
    const No = new Set;

    function Po(TT) {
      return No.has(TT) || !!UT.h.getItem(`worldSocialShown:${TT}`)
    }

    function Vo(TT) {
      No.add(TT), UT.h.setItem(`worldSocialShown:${TT}`, !0)
    }

    function TI(TT, oT, IT, iT) {
      return Po(TT) ? null : function(TT) {
        let {
          justMade: oT,
          playerId: IT,
          lobbyName: iT,
          personalWorld: zT
        } = TT;
        return oT ? "auto" : !Zo(IT) && Ho(iT, zT) ? "auto_existing" : null
      }({
        justMade: oT,
        playerId: IT,
        lobbyName: TT,
        personalWorld: iT
      })
    }

    function oI(TT) {
      let {
        answer: oT
      } = TT;
      return null !== oT && "settings" in oT && !oT.settings.canManage
    }
    const II = 500,
      iI = 3e4;

    function zI(TT) {
      return "inGame" === nT.c.get("gameState") && FT.gameBridge.latest("connectedGame").lobbyName === TT
    }

    function kI() {
      return (0, ZT.g)() || nT.c.get("loadingOverlayVisible") || (0, qT.t)()
    }
    var WI = IT(35704),
      XI = IT(2713),
      BI = IT(1794),
      FI = IT(2710);

    function SI(TT, oT, IT) {
      return FI.e.overridesTexture(TT) ? FI.e.getTexture(TT, oT).url : IT
    }
    var DI = IT(9552);
    const LI = (TT, oT) => {
        (0, zT.useEffect)((() => {
          setTimeout((() => {
            TT && TT.current && TT.current.focus()
          }), 1)
        }), [oT])
      },
      xI = (0, zT.memo)((function(TT) {
        let {
          isInputActive: oT,
          onClose: IT,
          onChange: iT,
          textAreaRef: zT,
          fontSize: kT,
          lineHeight: WT,
          currText: XT
        } = TT;
        return (0, ST.jsxs)("div", {
          className: "WriteOnBoardWrapper",
          children: [(0, ST.jsx)("img", {
            src: SI("board_full", XI.i.BLOCK, DI),
            alt: "Board",
            className: "WriteOnBoardImg"
          }), (0, ST.jsx)("textarea", {
            className: "WriteOnBoardTextArea",
            value: XT,
            ref: zT,
            style: {
              fontSize: `${kT}rem`,
              lineHeight: `${WT}rem`
            },
            onKeyDown: TT => {
              var oT;
              "Escape" !== TT.key && (TT.stopPropagation(), "Tab" === TT.key && function(TT) {
                TT.preventDefault();
                const oT = TT.target,
                  {
                    value: IT
                  } = oT;
                let iT = oT.selectionStart,
                  zT = oT.selectionEnd,
                  kT = IT.slice(iT, zT);
                if (!kT.includes("\n") && !TT.shiftKey) return void document.execCommand("insertText", !1, "\t");
                for (; iT > 0 && "\n" !== IT[iT - 1];) iT--;
                const WT = "\n" === IT[zT - 1];
                WT && zT--;
                kT = IT.slice(iT, zT);
                const XT = kT.split("\n").map((oT => TT.shiftKey ? oT.replace(/^\t/, "") : "\t" + oT)).join("\n");
                if (TT.shiftKey && IT.slice(iT, zT) === XT) return;
                let {
                  selectionStart: BT
                } = oT;
                oT.setSelectionRange(iT, zT), BT > iT && (!TT.shiftKey || "\t" === kT[0]) && (BT += TT.shiftKey ? -1 : 1);
                zT = iT + XT.length + (WT ? 1 : 0), document.execCommand("insertText", !1, XT), oT.setSelectionRange(BT, zT)
              }(TT), /^F\d+$/i.test(TT.code) && null !== (oT = BI.z.OpenCodeEditor) && void 0 !== oT && oT.includes(TT.code) && IT())
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: iT
          })]
        })
      }));

    function cI(TT) {
      return 1.3 * TT
    }
    var KI = IT(1632);
    const MI = (0, zT.memo)((function(TT) {
        let {
          show: oT,
          onOpen: IT,
          onClose: iT
        } = TT;
        const [kT, XT] = (0, zT.useState)(null), [BT, DT] = (0, zT.useState)(""), [LT, cT] = (0, zT.useState)(0), [KT, MT] = (0, zT.useState)(null), [rT, AT] = (0, zT.useState)({
          text: "",
          textSize: 0
        }), gT = (TT, oT) => KT ? (0, WI.k)(TT, oT, KT.width, KT.height) : (0, WI.e)(TT, oT), hT = TT => {
          DT(gT(BT, TT)), cT(TT), UT.e.setItem("lastBoardTextSize", TT)
        }, wT = () => {
          iT(), KT && BT === rT.text && LT === rT.textSize || FT.gameBridge.send("writeOnBoard", {
            pos: kT,
            text: BT,
            textSize: LT
          })
        };
        (0, vT.c)("boardEditRequested", (TT => {
          var zT, kT;
          if (!JT.featureFlags.canSeePlayerWrittenText) return;
          if (null === TT) return XT(null), void(oT && iT());
          const {
            pos: WT,
            noticeboardSpan: BT,
            text: FT
          } = TT;
          XT(WT), MT(BT), DT(FT);
          const ST = null !== (zT = null !== (kT = TT.textSize) && void 0 !== kT ? kT : UT.e.getItem("lastBoardTextSize")) && void 0 !== zT ? zT : 0;
          cT(ST), AT({
            text: FT,
            textSize: ST
          }), UT.e.setItem("lastBoardTextSize", ST), IT()
        }));
        const mT = (0, zT.useRef)(null);
        LI(mT, oT), (0, KI.n)(mT, {
          kind: "sign",
          submit: wT
        });
        const eT = function(TT, oT) {
            const IT = WI.b[TT];
            if (!oT) return IT.uiFontSize;
            const {
              numLines: iT,
              charsPerLine: zT
            } = (0, WI.p)(oT.width, oT.height, TT);
            return IT.uiFontSize * Math.min(IT.charsPerLine / zT, IT.numLines / iT)
          }(LT, KT),
          RT = cI(eT);
        return (0, ST.jsxs)(WT.e, {
          className: "WriteOnBoardBg",
          close: wT,
          escDoesExit: !0,
          show: oT,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, ST.jsx)(xI, {
            isInputActive: () => oT,
            onClose: wT,
            onChange: TT => {
              DT(gT(TT.target.value, LT))
            },
            textAreaRef: mT,
            fontSize: eT,
            lineHeight: RT,
            currText: BT
          }), (0, ST.jsx)("div", {
            className: "WriteOnBoardTextSizeHeader SmallTextBold",
            children: "Text Size"
          }), (0, ST.jsxs)("div", {
            className: "WriteOnBoardTextSizeButtons",
            children: [(0, ST.jsx)(xT.e, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                hT(0)
              },
              disabled: 0 === LT,
              children: "Small"
            }), (0, ST.jsx)(xT.e, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                hT(1)
              },
              disabled: 1 === LT,
              children: "Medium"
            }), (0, ST.jsx)(xT.e, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                hT(2)
              },
              disabled: 2 === LT,
              children: "Large"
            })]
          })]
        })
      })),
      rI = (0, zT.memo)((function(TT) {
        let {
          show: oT,
          onOpen: IT,
          onClose: iT
        } = TT;
        const [kT, XT] = (0, zT.useState)(""), BT = () => {
          iT(), FT.gameBridge.send("writeNameTag", kT)
        };
        (0, RT.g)("EditNameTag", (TT => {
          JT.featureFlags.canSeePlayerWrittenText && null !== TT && (XT(TT), IT())
        }));
        const DT = (0, zT.useRef)(null);
        LI(DT, oT), (0, KI.n)(DT, {
          kind: "nameTag",
          submit: BT
        });
        const LT = WI.A.nameTag.uiFontSize,
          cT = cI(LT);
        return (0, ST.jsxs)(WT.e, {
          className: "WriteOnBoardBg",
          close: BT,
          escDoesExit: !0,
          show: oT,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, ST.jsx)("div", {
            className: "NameTagTrim",
            children: (0, ST.jsx)(xI, {
              isInputActive: () => oT,
              onClose: BT,
              onChange: TT => {
                const oT = TT.target.value.replaceAll("\n", "");
                XT((0, WI.m)(oT, "nameTag"))
              },
              textAreaRef: DT,
              fontSize: LT,
              lineHeight: cT,
              currText: kT
            })
          }), (0, ST.jsx)(xT.e, {
            onClick: BT,
            className: "WriteOnNameTagCloseButton",
            children: "Finish"
          })]
        })
      }));
    var AI = IT(17633);
    const gI = (0, zT.memo)((function(TT) {
      let {
        show: oT,
        onOpen: IT,
        onClose: iT
      } = TT;
      const [kT, XT] = (0, zT.useState)(""), [BT, DT] = (0, zT.useState)(0), [LT, cT] = (0, zT.useState)(!1), [KT, MT] = (0, zT.useState)(["", "", "", "", "", "", "", "", "", ""]), [rT, AT] = (0, zT.useState)("Title"), [gT, hT] = (0, zT.useState)(!0), [wT, mT] = (0, zT.useState)(!1);
      (0, RT.g)("EditBook", (TT => {
        let {
          pages: oT,
          title: iT,
          isPublished: zT
        } = TT;
        var kT;
        JT.featureFlags.canSeePlayerWrittenText && (null !== oT ? (MT(oT), XT(null !== (kT = oT[0]) && void 0 !== kT ? kT : ""), AT(iT), DT(0), cT(!1), hT(!zT), mT(!1), IT()) : MT(["", "", "", "", "", "", "", "", "", ""]))
      }));
      const eT = (0, zT.useRef)(null),
        uT = (0, zT.useRef)(null);
      LI(eT, oT), (0, KI.n)(eT, {
        kind: "book"
      }), (0, KI.n)(uT, {
        kind: "gX"
      });
      const vT = WI.A.book.uiFontSize,
        ET = cI(vT),
        fT = () => {
          (gT || wT) && FT.gameBridge.send("writeBook", {
            pages: [...KT],
            title: rT,
            published: !gT && wT
          })
        },
        CT = TT => {
          LT && (KT[BT] = kT, cT(!1)), XT(KT[TT]), DT(TT)
        };
      return (0, ST.jsxs)(WT.e, {
        className: "WriteOnBoardBg",
        close: () => {
          iT(), KT[BT] = kT, fT()
        },
        escDoesExit: !0,
        show: oT,
        togglePointerLock: !1,
        globallyUniqueKey: "WriteOnBookComp",
        children: [(0, ST.jsxs)("div", {
          className: "WriteOnBookWrapper",
          children: [(0, ST.jsx)("textarea", {
            className: "BookTitleTextArea SmallTextLight",
            value: rT,
            ref: uT,
            style: {
              fontSize: "2.5rem",
              lineHeight: `${ET}rem`
            },
            onKeyDown: TT => {
              gT && TT.stopPropagation()
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: TT => {
              let oT = TT.target.value;
              oT = (0, WI.m)(oT, "gX"), AT(oT)
            },
            readOnly: !gT
          }), (0, ST.jsx)("img", {
            src: SI("book_page", XI.i.ITEM, AI),
            alt: "book_page",
            className: "WriteOnBookPageImg"
          }), (0, ST.jsx)("div", {
            className: "BookTextAreaPadding",
            children: (0, ST.jsx)("textarea", {
              className: "WriteOnBookPageTextArea",
              value: kT,
              ref: eT,
              style: {
                fontSize: `${vT}rem`,
                lineHeight: `${ET}rem`
              },
              onKeyDown: TT => {
                gT && TT.stopPropagation()
              },
              spellCheck: "false",
              autoComplete: "off",
              onChange: TT => {
                const oT = TT.target.value;
                XT((0, WI.m)(oT, "book")), cT(!0)
              },
              readOnly: !gT
            })
          })]
        }), (0, ST.jsxs)("div", {
          className: "BookNavigationWrapper",
          children: [(0, ST.jsx)(xT.e, {
            disabled: 0 === BT,
            onClick: () => {
              CT(BT - 1)
            },
            className: "BookNavButton",
            children: "<"
          }), (0, ST.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, ST.jsx)(xT.e, {
            disabled: 9 === BT,
            onClick: () => {
              CT(BT + 1)
            },
            className: "BookNavButton",
            children: ">"
          }), (0, ST.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, ST.jsx)(xT.e, {
            onClick: () => {
              hT(!gT), mT(!0)
            },
            className: "BookNavButton",
            children: gT ? "Publish" : "Edit"
          })]
        })]
      })
    }));
    var hI = IT(35601),
      wI = IT(8105),
      mI = IT(1357),
      eI = IT(1747);

    function RI(TT) {
      let {
        show: oT,
        buttons: IT
      } = TT;
      const {
        t: iT
      } = (0, yT.t)(), kT = (0, zT.useRef)(null);
      return (0, zT.useEffect)((() => {
        var TT, IT;
        const iT = oT ? (0, hI.y)() : null;
        if (!iT || !(0, mI.f)()) return;
        const zT = (0, hI.m)().findIndex((TT => TT.id === iT));
        (0, wI.p)(null !== (TT = null === (IT = kT.current) || void 0 === IT ? void 0 : IT.children[zT]) && void 0 !== TT ? TT : null)
      }), [oT]), 0 === IT.length ? null : (0, ST.jsx)("div", {
        ref: kT,
        className: "ClientGameInventoryButtons",
        onPointerDown: TT => {
          TT.stopPropagation()
        },
        onPointerUp: TT => {
          TT.stopPropagation()
        },
        children: IT.map((TT => {
          const oT = iT(TT.labelKey);
          return (0, ST.jsxs)(xT.m, {
            className: TT.className,
            disabled: TT.disabled,
            onClick: () => {
              (0, hI.s)(TT)
            },
            ariaLabel: TT.iconOnly ? oT : void 0,
            title: TT.iconOnly ? oT : void 0,
            children: [TT.icon && (0, ST.jsxs)("div", {
              className: "ClientGameInventoryButtonIcon",
              children: ["item" === TT.icon.kind && (0, ST.jsx)(eI.c, {
                itemName: TT.icon.name,
                amount: 0
              }), "image" === TT.icon.kind && (0, ST.jsx)("img", {
                src: TT.icon.src,
                alt: "",
                draggable: !1
              }), "icon" === TT.icon.kind && (0, ST.jsx)(MT.e, {
                name: TT.icon.name
              })]
            }), !TT.iconOnly && oT]
          }, TT.id)
        }))
      })
    }
    var uI = IT(35706),
      vI = IT(2445),
      EI = IT(8758),
      fI = IT(35531),
      CI = IT(35527);
    let jI = null;
    window.setShowInventoryAdsOverride = TT => {
      jI = TT
    };
    const JI = 24e4;
    var UI = IT(1749);

    function aI(TT) {
      var oT;
      let {
        draggedInfo: {
          name: IT,
          attributes: iT,
          amount: zT
        },
        toAddRef: kT
      } = TT;
      return (0, ST.jsx)("div", {
        className: "DraggedInvenItem",
        ref: kT,
        children: (0, ST.jsx)(eI.c, {
          itemName: IT,
          amount: zT,
          enchantmentTier: null === iT || void 0 === iT || null === (oT = iT.customAttributes) || void 0 === oT ? void 0 : oT.enchantmentTier,
          bar: (0, UI.i)(iT)
        })
      })
    }

    function YI(TT) {
      let {
        className: oT = "",
        displayInfo: IT,
        domRef: iT
      } = TT;
      return (0, ST.jsxs)("div", {
        className: `InvenHoveredItemInfo SmallTextBold ${oT}`,
        ref: iT,
        children: [(0, ST.jsx)(eT.c, {
          text: (0, uT.ob)(IT.name, {
            fontStyle: IT.fontStyle
          })
        }), (0, ST.jsx)("div", {
          className: "InvenHoveredItemInfoDescription",
          children: (0, ST.jsx)(eT.c, {
            text: IT.desc
          })
        })]
      })
    }

    function QI(TT) {
      let {
        info: oT,
        draggedInfo: IT
      } = TT;
      const iT = (0, zT.useRef)(null);
      return (0, zT.useLayoutEffect)((() => {
        const TT = iT.current,
          {
            left: IT,
            top: zT
          } = function(TT, oT, IT, iT) {
            const zT = iT.left * IT.width / 100 + 4,
              kT = IT.width - iT.right * IT.width / 100 - 4 - oT.width,
              WT = iT.top * IT.height / 100 + 4,
              XT = IT.height - 4 - oT.height;
            return {
              left: Math.max(zT, Math.min(TT.x - oT.width / 2, kT)),
              top: Math.max(WT, Math.min(TT.y - 48 - oT.height, XT))
            }
          }({
            x: oT.initTouchX,
            y: oT.initTouchY
          }, {
            width: TT.offsetWidth,
            height: TT.offsetHeight
          }, {
            width: window.innerWidth,
            height: window.innerHeight
          }, nT.c.get("notchSize"));
        TT.style.left = `${IT}px`, TT.style.top = `${zT}px`
      }), [oT]), (0, ST.jsxs)("div", {
        className: "LongHoldSplitInfoUI SmallTextBold",
        ref: iT,
        children: [(0, ST.jsx)("div", {
          className: "LongHoldSplitInfoUIInner",
          style: {
            width: IT.amount / oT.maxAmount * 100 + "%"
          }
        }), (0, ST.jsxs)("div", {
          className: "LongHoldSplitInfoUIText",
          children: [IT.amount, "/", oT.maxAmount]
        })]
      })
    }
    var OI = IT(193);
    const HI = (0, zT.memo)((function(TT) {
      let {
        show: oT,
        onOpen: IT,
        onClose: iT
      } = TT;
      const kT = (0, zT.useRef)({
          pos: null
        }),
        [XT, BT] = (0, zT.useState)([0, 0, 0, 0]),
        {
          userContext: DT
        } = (0, mT.b)();
      (0, vT.c)("ironChestOpenRequested", (TT => {
        let {
          pos: oT,
          ownerDbId: iT,
          cachedPasskey: zT
        } = TT;
        if (kT.current.pos = oT, iT !== DT.whamm) return null !== zT ? (BT(zT), void LT(zT)) : void IT();
        LT(XT)
      })), (0, vT.c)("localEffectUpdated", (TT => {
        "Thief" === TT && iT()
      }));
      const LT = TT => {
        const {
          pos: oT
        } = kT.current;
        FT.gameBridge.send("openIronChest", {
          pos: oT,
          cW: TT
        })
      };
      return (0, ST.jsx)(WT.e, {
        className: "IronChestPasskeyInputScreenOuter",
        close: iT,
        escDoesExit: !0,
        show: oT,
        togglePointerLock: !1,
        globallyUniqueKey: "IronChestPasskeyInputScreen",
        children: (0, ST.jsx)("div", {
          className: "IronChestPasskeyInputScreen",
          children: (0, ST.jsx)(nI, {
            cW: XT,
            onPasskeyUpdated: BT,
            confirmText: "ironChest:tryUnlock",
            onConfirm: () => {
              LT(XT)
            }
          })
        })
      })
    }));

    function nI(TT) {
      let {
        className: oT = "",
        cW: IT,
        onPasskeyUpdated: iT,
        confirmText: zT,
        onConfirm: kT
      } = TT;
      const {
        t: WT
      } = (0, yT.t)();
      return (0, ST.jsxs)("div", {
        className: `${oT} IronChestPasskeyInput`,
        children: [(0, ST.jsx)("div", {
          className: "SmallTextBold IronChestPasskeyInputTitle",
          children: WT("ironChest:passkeyInputTitle")
        }), (0, ST.jsx)("div", {
          className: "IronChestPasskeyInputRow",
          children: new Array(OI.c.ironChestPasskeyLength).fill(0).map(((TT, oT) => (0, ST.jsx)(qI, {
            digit: IT[oT],
            onPasskeyDigitUpdated: TT => {
              const zT = [...IT];
              zT[oT] = TT, iT(zT)
            }
          }, oT)))
        }), (0, ST.jsx)(xT.m, {
          className: "IronChestPasskeyInputConfirmButton",
          onClick: kT,
          children: WT(zT)
        })]
      })
    }

    function qI(TT) {
      let {
        digit: oT,
        onPasskeyDigitUpdated: IT
      } = TT;
      return (0, ST.jsx)("div", {
        className: "IronChestPasskeyDigitInputWrapper",
        children: (0, ST.jsxs)("div", {
          className: "IronChestPasskeyDigitInput",
          children: [(0, ST.jsx)(xT.m, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              IT(uT.e.mod(oT + 1, 10))
            },
            children: (0, ST.jsx)(MT.e, {
              name: "angle-up"
            })
          }), (0, ST.jsx)("div", {
            className: "SmallTextBold IronChestPasskeyDigit",
            children: oT
          }), (0, ST.jsx)(xT.m, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              IT(uT.e.mod(oT - 1, 10))
            },
            children: (0, ST.jsx)(MT.e, {
              name: "angle-down"
            })
          })]
        })
      })
    }
    var ZI = IT(8754),
      lI = IT(35744),
      sI = IT(35523);

    function tI(TT) {
      let {
        specialItemInfo: oT,
        setHovered: IT,
        pointerDown: iT,
        pointerUp: kT,
        enchantingTablePosition: WT,
        enchantingTableBlockName: XT
      } = TT;
      const {
        t: DT
      } = (0, yT.t)(), [LT, cT] = (0, zT.useState)(null), [KT, MT] = (0, zT.useState)(null), rT = (0, BT.g)("auraPerLevel"), AT = Math.floor((0, vT.f)("aura") / rT);
      (0, zT.useEffect)((() => {
        if (!oT) return void cT(null);
        let TT = !0;
        return FT.gameBridge.query("enchantingOffer", {
          slot: oT.idx,
          name: oT.name,
          blockName: XT
        }).then((IT => {
          var iT, zT;
          let {
            perks: kT,
            options: WT
          } = IT;
          if (!TT) return;
          const XT = {
            isEnchantable: kT.length > 0,
            possibleEnchantments: kT,
            options: WT.map((TT => {
              let {
                level: oT,
                odds: IT
              } = TT;
              return {
                level: oT,
                possibilities: Object.fromEntries(IT.map(((TT, oT) => [`Tier ${oT+1}`, TT])))
              }
            })),
            isAlreadyEnchanted: kT.length > 0 && void 0 !== (null === (iT = oT.attributes) || void 0 === iT || null === (zT = iT.customAttributes) || void 0 === zT ? void 0 : zT.enchantmentTier)
          };
          cT(XT), (TT => {
            const oT = TT.options.map((TT => Object.entries(TT.possibilities).map((TT => {
              let [oT, IT] = TT;
              return {
                str: `${oT}: ${IT>0?IT<.01?IT.toPrecision(1):IT.toFixed(2):0}%\n`,
                style: {
                  color: uT.lb[oT]
                }
              }
            }))));
            MT(oT)
          })(XT)
        })), () => {
          TT = !1
        }
      }), [oT, WT, XT]);
      const gT = [];
      for (let zT = 0; zT < lI.d; zT++) {
        const TT = null === LT || void 0 === LT ? void 0 : LT.options[zT],
          iT = !TT || TT.level > AT;
        gT.push((0, ST.jsx)(xT.e, {
          className: "EnchantmentButton",
          onPointerEnter: TT ? TT => null === IT || void 0 === IT ? void 0 : IT()(!0, {
            name: "",
            desc: KT[zT]
          }, TT) : void 0,
          onPointerLeave: TT ? () => null === IT || void 0 === IT ? void 0 : IT()(!1) : void 0,
          onClick: iT ? void 0 : () => {
            FT.gameBridge.send("enchantItem", {
              slot: oT.idx,
              level: TT.level,
              tablePos: WT
            }), cT(null)
          },
          disabled: iT,
          children: TT ? (0, ST.jsxs)(ST.Fragment, {
            children: [(0, ST.jsxs)("h1", {
              className: "EnchantmentLevels",
              children: [(0, ST.jsxs)("span", {
                className: "EnchantmentLevelsCost",
                children: [DT("enchantments:cost"), ": "]
              }), " ", DT("enchantments:levels", {
                level: TT.level
              })]
            }), (0, ST.jsxs)("div", {
              className: "EnchantmentPossibilities",
              children: [(0, ST.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, ST.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: DT("enchantments:tier")
                }), Object.entries(TT.possibilities).map((TT => {
                  let [oT, IT] = TT;
                  return 0 === IT ? null : (0, ST.jsx)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: uT.lb[oT]
                    },
                    children: oT
                  }, oT)
                }))]
              }), (0, ST.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, ST.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: DT("enchantments:odds")
                }), Object.entries(TT.possibilities).map((TT => {
                  let [oT, IT] = TT;
                  return 0 === IT ? null : (0, ST.jsxs)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: uT.lb[oT]
                    },
                    children: [IT > 0 && IT < .1 ? "<0.1" : IT.toFixed(0 < IT && IT < .95 ? 1 : 0), "%"]
                  }, oT)
                }))]
              })]
            })]
          }) : !1 === (null === LT || void 0 === LT ? void 0 : LT.isEnchantable) ? (0, ST.jsx)("h1", {
            className: "EnchantmentLevels",
            children: DT("enchantments:notEnchantable")
          }) : (0, ST.jsx)("h1", {
            className: "EnchantmentLevels",
            children: DT("enchantments:enterItem")
          })
        }, zT))
      }
      return (0, ST.jsxs)("div", {
        className: "EnchantingTable",
        children: [(0, ST.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: XT
        }), (0, ST.jsxs)("div", {
          className: "EnchantingTableBody",
          children: [(0, ST.jsxs)("div", {
            className: "EnchantingTableLeft",
            children: [(0, ST.jsx)(sI.d, {
              idx: CI.g,
              setHovered: TT => {
                null === IT || void 0 === IT || IT(CI.g)(TT)
              },
              pointerDown: iT,
              pointerUp: kT,
              draggedInfo: null,
              specialItemInfo: oT,
              variation: "Enchanting Table"
            }), LT && LT.possibleEnchantments.length > 0 && (0, ST.jsxs)("div", {
              className: "PossibleEnchantments",
              children: [(0, ST.jsx)("h2", {
                children: "Possible Perks:"
              }), LT.possibleEnchantments.map((TT => (0, ST.jsxs)(zT.Fragment, {
                children: [(0, ST.jsxs)("div", {
                  className: "PossibleEnchantmentName",
                  children: [(0, ST.jsx)("div", {
                    className: "PossibleEnchantmentIcon",
                    children: (0, ST.jsx)(eI.c, {
                      itemName: `${TT} Enchantment`,
                      amount: 1
                    })
                  }), (0, ST.jsx)("div", {
                    className: "PossibleEnchantmentNameText",
                    children: TT
                  })]
                }), (0, ST.jsx)("div", {
                  className: "PossibleEnchantmentDescription",
                  children: DT((0, ZI.k)(TT).translationKey)
                })]
              }, TT)))]
            })]
          }), (0, ST.jsxs)("div", {
            className: "EnchantmentOptions",
            children: [LT && LT.isAlreadyEnchanted && (0, ST.jsx)("div", {
              className: "AlreadyEnchantedWarning",
              children: DT("enchantments:alreadyEnchanted")
            }), gT]
          })]
        })]
      })
    }
    var GI = IT(35750);

    function pI(TT) {
      var oT;
      let {
        specialItemInfo: IT,
        setSpecialItemInfo: iT,
        setHovered: kT,
        pointerDown: WT,
        pointerUp: XT
      } = TT;
      const {
        t: BT
      } = (0, yT.t)(), DT = (0, vT.d)("inventory", (TT => TT.freeSlots)), [LT, cT] = (0, zT.useState)(null);
      (0, zT.useEffect)((() => {
        if (IT) {
          const TT = (0, GI.c)(IT.name, IT.amount);
          cT({
            salvageable: !!TT,
            produces: TT
          })
        } else cT(null)
      }), [IT, null === IT || void 0 === IT ? void 0 : IT.name, null === IT || void 0 === IT ? void 0 : IT.amount]);
      const KT = !!IT && !(null === LT || void 0 === LT || !LT.salvageable) && !(null !== (oT = LT.produces) && void 0 !== oT && oT.some((TT => {
        let {
          amt: oT
        } = TT;
        return oT < 1
      })));
      return (0, ST.jsxs)("div", {
        className: "SalvagingTable",
        children: [(0, ST.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: BT("item:salvagingTable")
        }), (0, ST.jsxs)("div", {
          className: "SalvagingTableBody",
          children: [(0, ST.jsx)("div", {
            className: "SalvagingTableLeft",
            children: (0, ST.jsx)(sI.d, {
              idx: CI.g,
              setHovered: TT => {
                null === kT || void 0 === kT || kT(CI.g)(TT)
              },
              pointerDown: WT,
              pointerUp: XT,
              draggedInfo: null,
              specialItemInfo: IT,
              variation: "Salvaging Table"
            })
          }), (0, ST.jsx)("div", {
            className: "SalvagingTableRight",
            children: (0, ST.jsx)(xT.e, {
              className: "SalvageButton",
              onClick: KT ? () => {
                const {
                  idx: TT,
                  name: oT,
                  amount: zT
                } = IT;
                FT.gameBridge.send("salvageItem", {
                  slot: TT,
                  name: oT,
                  amount: zT
                }) && (cT(null), iT(null))
              } : void 0,
              disabled: !KT,
              children: LT ? LT.salvageable ? LT.produces.some((TT => {
                let {
                  amt: oT
                } = TT;
                return oT < 1
              })) ? (0, ST.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, ST.jsx)("div", {
                  className: "SalvageText Error",
                  children: BT("salvagingTable:notEnoughResources")
                })
              }) : DT < LT.produces.length ? (0, ST.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, ST.jsx)("div", {
                  className: "SalvageText Error",
                  children: BT("salvagingTable:notEnoughInventorySpace")
                })
              }) : (0, ST.jsxs)("div", {
                className: "SalvageButtonText",
                children: [(0, ST.jsx)("div", {
                  className: "SalvageText",
                  children: BT("salvagingTable:salvage")
                }), (0, ST.jsx)("div", {
                  className: "SalvageIcons",
                  children: LT.produces.map(((TT, oT) => {
                    let {
                      item: IT,
                      amt: iT
                    } = TT;
                    return (0, ST.jsx)("div", {
                      className: "SalvageIcon",
                      children: (0, ST.jsx)(eI.c, {
                        itemName: IT,
                        amount: Math.floor(iT)
                      })
                    }, oT)
                  }))
                })]
              }) : (0, ST.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, ST.jsx)("div", {
                  className: "SalvageText Error",
                  children: BT("salvagingTable:unsalvageable")
                })
              }) : (0, ST.jsx)(ST.Fragment, {})
            })
          })]
        })]
      })
    }
    var bI = IT(199),
      yI = IT(8829),
      NI = IT(2404),
      PI = IT(8121),
      dI = IT(8114),
      VI = IT(1612),
      Ti = IT(1810),
      oi = IT(1365),
      Ii = IT(1884);

    function ii(TT, oT, IT) {
      const iT = TT.trim().toLowerCase();
      if ("" === iT) return 0;
      let zT = null;
      for (const kT of oT) {
        const TT = kT.toLowerCase().indexOf(iT);
        if (0 === TT) return 0;
        TT > 0 && (zT = 1)
      }
      if (null !== zT) return zT;
      for (const kT of IT)
        if (kT.toLowerCase().includes(iT)) return 2;
      return null
    }

    function zi(TT) {
      return TT.map((TT => {
        var oT;
        return TT ? {
          name: TT.name,
          amount: null !== (oT = TT.amount) && void 0 !== oT ? oT : 1
        } : null
      }))
    }

    function ki(TT) {
      return TT < 1e3 ? `${TT}` : TT < 1e4 ? Math.floor(TT / 100) / 10 + "k" : `${Math.floor(TT/1e3)}k`
    }
    var Wi = IT(35758);
    const Xi = xT.e,
      Bi = {
        initialDelayMs: 400,
        intervalMs: 100
      },
      Fi = () => {
        const TT = (0, oi.d)();
        return TT ? TT.getPadRepeatTiming(Bi) : Bi
      };

    function Si(TT, oT, IT) {
      var iT, zT;
      const kT = (0, EI.q)(oT, TT);
      let WT = null === (iT = oT[TT]) || void 0 === iT ? void 0 : iT.description;
      if (IT && (null === (zT = (0, Wi.c)().get(TT)) || void 0 === zT || !zT.hideIngredients)) {
        WT ? (WT = (0, uT.ob)(WT), WT.push({
          str: "\n"
        })) : WT = [], WT.push({
          str: "\n"
        }), WT.push({
          str: "Can be crafted from:\n"
        });
        for (const TT of IT) "string" === typeof TT && (WT.push({
          icon: TT,
          style: {
            fontSize: "1.5em"
          }
        }), WT.push({
          str: " "
        }), WT.push(...(0, uT.ob)((0, EI.q)(oT, TT))), WT.push({
          str: "\n"
        }))
      }
      return {
        name: kT,
        desc: WT
      }
    }

    function Di(TT) {
      let {
        name: oT,
        nS: IT
      } = TT;
      return `${oT}_${IT}`
    }

    function Li(TT) {
      var oT;
      let {
        onClick: IT,
        itemName: iT,
        recipeId: kT,
        isSelected: WT,
        haveIngredients: XT,
        craftable: BT,
        setHovered: FT,
        padActions: DT,
        marked: LT,
        lock: xT,
        itemInfo: cT
      } = TT;
      const KT = (0, zT.useRef)(null);
      return (0, PI.f)(KT, {
        press: TT => !XT || "secondary" === TT && !BT ? (DT.refuse(), !1) : "primary" === TT ? (DT.choose(), !0) : DT.craft(),
        release: DT.stopCraft,
        hints: {
          primary: "inventoryChooseRecipe",
          secondary: "inventoryCraft"
        }
      }), (0, ST.jsxs)("div", {
        ref: KT,
        className: xo()("InvenItem", {
          CraftableItemNotEnoughIngredients: !XT && !xT,
          CraftableItemMarked: LT,
          CraftableItemLocked: void 0 !== xT,
          CraftableItemLockedFar: (null !== (oT = null === xT || void 0 === xT ? void 0 : xT.stepsAway) && void 0 !== oT ? oT : 1) > 1
        }),
        "data-recipe-key": kT,
        "data-pad-inventory-default": WT ? "" : void 0,
        onClick: IT,
        style: {
          cursor: WT ? null : "pointer"
        },
        onPointerEnter: TT => {
          null === FT || void 0 === FT || FT(!0, Si(iT, cT)), !WT && (0, VI.p)(TT.nativeEvent) && (0, dI.g)() && IT()
        },
        onPointerLeave: () => {
          null === FT || void 0 === FT || FT(!1)
        },
        children: [(0, ST.jsx)(eI.c, {
          itemName: iT,
          amount: 1
        }), LT && (0, ST.jsx)("span", {
          className: "CraftableItemMarkBadge",
          "aria-hidden": "true",
          children: "!"
        }), xT && (0, ST.jsxs)("span", {
          className: "CraftableItemLockTag",
          children: [(0, ST.jsx)(MT.e, {
            name: "lock"
          }), (0, ST.jsx)(eT.c, {
            text: xT.tag
          })]
        })]
      })
    }

    function xi(TT) {
      let {
        idx: oT,
        status: IT,
        shownItem: iT,
        dim: kT,
        onHoverStart: WT,
        onHoverEnd: XT,
        onPadBack: BT
      } = TT;
      const FT = (0, zT.useRef)(null);
      (0, PI.f)(FT, {
        press: () => !1,
        back: BT,
        hints: {
          back: "inventoryBackToRecipes"
        }
      });
      const DT = IT.need > 0 ? Math.min(IT.have / IT.need, 1) : 1;
      return (0, ST.jsxs)("div", {
        ref: FT,
        className: xo()("CupTile", {
          Short: IT.missing > 0
        }),
        style: {
          width: kT,
          height: kT
        },
        "data-craft-ingredient": oT,
        onPointerEnter: WT,
        onPointerLeave: XT,
        children: [(0, ST.jsx)("div", {
          className: "CupFill",
          style: {
            transform: `scaleY(${DT})`
          }
        }), (0, ST.jsx)(eI.c, {
          itemName: iT,
          amount: 0
        }), (0, ST.jsxs)("div", {
          className: "CupCount SmallTextBold",
          children: [ki(IT.have), "/", ki(IT.need)]
        })]
      })
    }

    function ci(TT) {
      var oT, IT, iT, kT, WT;
      let {
        show: XT,
        recipeItem: {
          name: BT,
          nS: DT,
          requires: LT,
          produces: xT,
          haveIngredients: cT
        },
        detail: KT,
        onCraft: MT,
        setHovered: rT,
        craftButtonRef: AT,
        onPadBack: gT,
        showPadShortcut: hT,
        refusedCount: wT,
        lock: mT,
        itemInfo: RT
      } = TT;
      const {
        t: uT
      } = (0, yT.t)(), vT = null !== KT && !KT.roomForOne, ET = null !== (oT = null === KT || void 0 === KT ? void 0 : KT.craftAllTimes) && void 0 !== oT ? oT : 0, fT = function(TT, oT) {
        return TT.map((TT => {
          let {
            items: IT,
            amt: iT
          } = TT, zT = 0;
          const kT = [];
          for (const WT of IT) {
            const TT = oT(WT);
            zT += TT, TT > 0 && kT.push(WT)
          }
          return 0 === kT.length && kT.push(IT[0]), {
            shownItems: kT,
            need: iT,
            have: zT,
            missing: Math.max(iT - zT, 0)
          }
        }))
      }(LT, (TT => {
        var oT;
        return null !== (oT = null === KT || void 0 === KT ? void 0 : KT.amounts[TT]) && void 0 !== oT ? oT : 0
      }));
      let CT = "4rem",
        jT = 4;
      3 === LT.length || 4 === LT.length ? CT = "3.75rem" : LT.length >= 5 && (CT = "3rem"), 4 === LT.length ? jT = 2 : LT.length <= 6 && (jT = 3);
      const JT = `calc(${jT} * ${CT} + ${jT-1} * 0.4rem + 1px)`,
        UT = (0, zT.useRef)(null),
        aT = (0, zT.useRef)(null);
      (0, zT.useLayoutEffect)((() => {
        UT.current.scrollTop = 0
      }), [BT, DT]);
      const YT = (0, zT.useRef)(wT);
      (0, zT.useEffect)((() => {
        if (wT === YT.current) return;
        YT.current = wT;
        const TT = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? [{
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
        for (const iT of null !== (oT = null === (IT = UT.current) || void 0 === IT ? void 0 : IT.querySelectorAll(".CupTile.Short, .CantCraftInfo")) && void 0 !== oT ? oT : []) {
          var oT, IT;
          iT.animate(TT, {
            duration: 280,
            easing: "ease-out"
          })
        }
      }), [wT]);
      const QT = (TT, oT, IT) => {
          var iT;
          if ((0, Wi.c)().has(BT)) return void(IT && clearInterval(OT.current));
          const zT = null !== (iT = null === KT || void 0 === KT ? void 0 : KT.resultStackable) && void 0 !== iT && iT,
            kT = zi(FT.gameBridge.latest("inventory").player),
            {
              qS: WT,
              XS: XT,
              amountAddedToSlot: ST
            } = FT.gameBridge.send("craftRecipe", {
              name: BT,
              nS: DT,
              times: oT || TT && zT ? null : 1
            });
          if (WT > 0) {
            const oT = [],
              iT = new Set(LT.flatMap((TT => {
                let {
                  items: oT
                } = TT;
                return oT
              }))),
              WT = function(TT, oT, IT) {
                const iT = [];
                for (let zT = 0; zT < TT.length; zT++) {
                  const kT = TT[zT];
                  if (!kT || !IT.has(kT.name)) continue;
                  const WT = oT[zT],
                    XT = (null === WT || void 0 === WT ? void 0 : WT.name) === kT.name ? WT.amount : 0;
                  XT < kT.amount && iT.push({
                    idx: zT,
                    itemName: kT.name,
                    amount: kT.amount - XT
                  })
                }
                return iT
              }(kT, zi(FT.gameBridge.latest("inventory").player), iT).slice(0, 12),
              DT = IT ? 0 : Math.min(50, 400 / WT.length),
              cT = IT ? 220 : 320;
            for (const TT of WT) {
              var xT;
              const IT = LT.findIndex((oT => {
                  let {
                    items: IT
                  } = oT;
                  return IT.includes(TT.itemName)
                })),
                iT = null === (xT = UT.current) || void 0 === xT ? void 0 : xT.querySelector(`[data-craft-ingredient="${IT}"]`),
                zT = (0, EI.d)(TT.idx);
              iT && zT && oT.push({
                kind: "ingredient",
                itemName: TT.itemName,
                amount: TT.amount,
                XS: TT.idx,
                from: zT,
                to: (0, EI.d)(iT),
                delayMs: Math.round(oT.length * DT),
                durationMs: cT
              })
            }
            let KT;
            if (null !== XT && ST > 0 && aT.current) {
              const TT = oT.length > 0 ? oT[oT.length - 1].delayMs + .6 * cT : 0;
              KT = {
                itemName: BT,
                amount: ST,
                XS: XT,
                from: (0, EI.d)(aT.current),
                delayMs: Math.round(TT)
              }
            }
            MT(KT, TT && !zT ? XT : null, oT), uI.d.play("wood1", .5).rate(1.75)
          }
        },
        OT = (0, zT.useRef)(null);
      (0, zT.useEffect)((() => () => {
        clearInterval(OT.current)
      }), []);
      const HT = (TT, oT) => {
          QT(TT, !1, !1), clearInterval(OT.current), oT && (OT.current = setTimeout((() => {
            OT.current = setInterval((() => {
              QT(TT, !1, !0)
            }), oT.intervalMs)
          }), oT.initialDelayMs))
        },
        nT = () => {
          clearInterval(OT.current)
        },
        qT = !cT || vT || Boolean(mT),
        ZT = (0, zT.useRef)(null),
        lT = null !== (IT = null === (iT = (0, Ii.c)()) || void 0 === iT ? void 0 : iT.hideButtonHints) && void 0 !== IT && IT,
        sT = null !== (kT = null === (WT = (0, oi.d)()) || void 0 === WT ? void 0 : WT.getBoundButton("inventorySecondary")) && void 0 !== kT ? kT : null,
        tT = () => !qT && (QT(!1, !0, !1), !0);
      (0, PI.f)(AT, {
        press: TT => "secondary" === TT ? tT() : !qT && (HT(!1, Fi()), !0),
        release: nT,
        back: gT,
        hints: {
          primary: "inventoryCraft",
          secondary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      }), (0, PI.f)(ZT, {
        press: tT,
        back: gT,
        hints: {
          primary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      });
      const [GT, pT] = (0, zT.useState)(0), [bT, NT] = (0, zT.useState)(null);
      (0, zT.useEffect)((() => {
        if (!0 === XT) {
          pT(0);
          const TT = setInterval((() => {
            pT((TT => TT + 1))
          }), 1e3);
          return () => {
            clearInterval(TT)
          }
        }
        return () => {}
      }), [XT]);
      const PT = null === KT || void 0 === KT ? void 0 : KT.ingredientsCraftedFrom,
        dT = (0, zT.useRef)(rT);
      (0, zT.useEffect)((() => {
        dT.current = rT
      }), [rT]);
      const VT = !(null === mT || void 0 === mT || !mT.hideIngredients);
      (0, zT.useEffect)((() => {
        var TT, oT;
        if (!bT) return;
        if (VT) return NT(null), void(null === (oT = dT.current) || void 0 === oT || oT.call(dT, !1));
        const IT = bT[GT % bT.length];
        null === (TT = dT.current) || void 0 === TT || TT.call(dT, !0, Si(IT, RT, null === PT || void 0 === PT ? void 0 : PT[IT]))
      }), [bT, GT, RT, PT, VT]);
      const To = !!mT,
        oo = (0, zT.useRef)(!1);
      (0, zT.useEffect)((() => {
        var TT;
        To && (clearInterval(OT.current), VT && oo.current && (oo.current = !1, null === (TT = dT.current) || void 0 === TT || TT.call(dT, !1)))
      }), [To, VT]);
      const Io = (0, EI.q)(RT, BT);
      return (0, ST.jsxs)("div", {
        ref: UT,
        className: "CraftableInfo SmallTextBold",
        children: [(0, ST.jsx)("div", {
          className: "CraftableHeader",
          children: (0, ST.jsx)(eT.c, {
            text: Io
          })
        }), !VT && (0, ST.jsx)("div", {
          className: xo()("CraftableIngredients", {
            Compact: LT.length >= 5
          }),
          style: {
            maxWidth: JT
          },
          children: fT.map(((TT, oT) => {
            const IT = TT.shownItems[GT % TT.shownItems.length];
            return (0, ST.jsx)(xi, {
              idx: oT,
              status: TT,
              shownItem: IT,
              dim: CT,
              onHoverStart: () => {
                NT(TT.shownItems)
              },
              onHoverEnd: () => {
                NT(null), null === rT || void 0 === rT || rT(!1)
              },
              onPadBack: gT
            }, oT)
          }))
        }), mT && (0, ST.jsx)("div", {
          className: "CantCraftInfo CraftableLockReason",
          children: (0, ST.jsx)(eT.c, {
            text: mT.reason
          })
        }), !mT && (!cT || vT) && (0, ST.jsxs)("div", {
          className: "CantCraftInfo",
          children: [!cT && "Missing ingredients", (0, ST.jsx)("br", {}), vT && "Inventory is full"]
        }), !VT && (0, ST.jsxs)(ST.Fragment, {
          children: [(0, ST.jsxs)(Xi, {
            ref: AT,
            className: "DoCraftButton",
            onPointerDown: TT => {
              HT((0, EI.r)(TT), (0, VI.p)(TT.nativeEvent) ? Fi() : Bi)
            },
            onPointerUp: nT,
            onPointerLeave: nT,
            disabled: qT,
            children: [hT && sT && !qT && !lT && (0, ST.jsx)(Ti.c, {
              className: "CraftShortcutGlyph",
              glyph: sT
            }), (0, ST.jsx)("div", {
              ref: aT,
              className: "DoCraftItem",
              onPointerEnter: () => {
                oo.current = !0, null === rT || void 0 === rT || rT(!0, Si(BT, RT))
              },
              onPointerLeave: () => {
                oo.current = !1, null === rT || void 0 === rT || rT(!1)
              },
              children: (0, ST.jsx)(eI.c, {
                itemName: BT,
                amount: xT
              })
            })]
          }), (0, ST.jsxs)(Xi, {
            ref: ZT,
            className: "DoCraftAllButton",
            onPointerDown: TT => {
              QT((0, EI.r)(TT), !0, !1)
            },
            disabled: qT,
            children: [(0, ST.jsx)("span", {
              className: "CraftAllLabel",
              children: uT("general:craftAll")
            }), ET > 0 && (0, ST.jsxs)("span", {
              className: "CraftAllCount",
              children: ["x", ki(ET)]
            })]
          })]
        })]
      })
    }

    function Ki(TT) {
      let {
        selectedIdx: oT,
        hidden: IT
      } = TT;
      const iT = (0, mI.p)(),
        kT = (0, zT.useRef)(null);
      return (0, zT.useLayoutEffect)((() => {
        const TT = kT.current,
          iT = null === TT || void 0 === TT ? void 0 : TT.parentElement;
        if (!iT || !TT) return;
        const zT = iT.querySelector(".CraftableItems"),
          WT = () => {
            var kT, WT;
            if (IT) return void(TT.style.opacity = "0");
            const XT = null === zT || void 0 === zT ? void 0 : zT.children[oT],
              BT = null === (kT = null !== (WT = null === XT || void 0 === XT ? void 0 : XT.querySelector(".InvenItem")) && void 0 !== WT ? WT : XT) || void 0 === kT ? void 0 : kT.getBoundingClientRect();
            if (!BT || 0 === BT.width) return void(TT.style.opacity = "0");
            const FT = iT.getBoundingClientRect();
            TT.style.opacity = "1", TT.style.width = `${BT.width}px`, TT.style.height = `${BT.height}px`, TT.style.transform = `translate(${BT.left-FT.left+iT.scrollLeft}px, ${BT.top-FT.top+iT.scrollTop}px)`
          };
        WT();
        const XT = new MutationObserver(WT),
          BT = new ResizeObserver(WT);
        return BT.observe(iT), zT && (XT.observe(zT, {
          childList: !0,
          subtree: !0
        }), BT.observe(zT)), () => {
          XT.disconnect(), BT.disconnect()
        }
      }), [oT, IT]), (0, ST.jsx)("div", {
        ref: kT,
        className: xo()("SelectionReticle", {
          Secondary: iT
        })
      })
    }

    function Mi(TT, oT, IT) {
      return TT ? (0, bI.b)(yI.j, TT) ? ri(TT, oT, IT) : TT : IT("classicGame:handCrafting")
    }

    function ri(TT, oT, IT) {
      var iT;
      const zT = null === (iT = oT[TT]) || void 0 === iT ? void 0 : iT.displayName;
      if ("string" === typeof zT) return IT(zT);
      const kT = FT.gameBridge.latest("hiddenPlayerNames");
      return Array.isArray(zT) ? zT.map((TT => {
        if ("string" === typeof TT) return TT;
        if ("translationKey" in TT) return IT(TT.translationKey, (0, yT.m)(TT.params, kT));
        if ("str" in TT) {
          if ("string" === typeof TT.str) return TT.str;
          if ("translationKey" in TT.str) return IT(TT.str.translationKey, (0, yT.m)(TT.str.params, kT))
        }
        return ""
      })).join("") : zT && "translationKey" in zT ? IT(zT.translationKey, (0, yT.m)(zT.params, kT)) : TT
    }

    function Ai(TT, oT) {
      return TT === oT || null !== TT && null !== oT && TT.name === oT.name && TT.nS === oT.nS
    }

    function gi(TT) {
      var oT, IT, iT;
      let {
        show: kT,
        onCraft: WT,
        dispatchSelectedCraftable: XT,
        selectedCraftable: BT,
        craftingStation: DT,
        setHovered: LT
      } = TT;
      const {
        t: xT
      } = (0, yT.t)(), [cT, KT] = (0, zT.useState)(""), [MT, rT] = (0, zT.useState)(0);
      (0, zT.useEffect)((() => {
        kT || (KT(""), rT((TT => TT + 1)))
      }), [kT]);
      const [AT, gT] = (0, zT.useState)(DT);
      AT !== DT && (gT(DT), "" !== cT && (KT(""), rT((TT => TT + 1))));
      const hT = (0, zT.useRef)(null),
        wT = (0, zT.useRef)(null),
        mT = (0, dI.i)(),
        eT = mT.showing && "recipe" === mT.kind,
        [RT, uT] = (0, zT.useState)(0),
        ET = null !== DT && void 0 !== DT ? DT : null,
        fT = (0, zT.useRef)(null),
        CT = TT => {
          return !((oT = fT.current) === (IT = TT) || null !== oT && null !== IT && oT.station === IT.station && Ai(oT.recipe, IT.recipe)) && (fT.current = TT, FT.gameBridge.send("focusCrafting", TT), !0);
          var oT, IT
        };
      CT(kT ? {
        station: ET,
        recipe: (null === (oT = fT.current) || void 0 === oT ? void 0 : oT.station) === ET ? fT.current.recipe : null
      } : null);
      let jT = FT.gameBridge.latest("crafting");
      const JT = (0, vT.f)("itemInfo"),
        UT = "" !== cT.trim(),
        aT = (0, Wi.C)(),
        YT = (0, Wi.y)(),
        QT = (0, Wi.G)(),
        OT = function(TT, oT) {
          const [IT, iT] = (0, zT.useState)(!1);
          (0, zT.useEffect)((() => {
            if (!TT) return void iT(!1);
            const oT = setTimeout((() => {
              iT(!0)
            }), 0);
            return () => {
              clearTimeout(oT)
            }
          }), [TT]);
          const kT = TT && IT,
            WT = (0, zT.useRef)({
              station: oT,
              at: new Map
            });
          return (WT.current.station !== oT || !kT && WT.current.at.size > 0) && (WT.current = {
            station: oT,
            at: new Map
          }), kT ? WT.current.at : null
        }(kT, DT);
      let HT = jT.recipes.filter((TT => {
        let {
          listed: oT
        } = TT;
        return oT
      }));
      if (UT) {
        const TT = [];
        for (const oT of jT.recipes) {
          var nT;
          const IT = null !== (nT = YT.get(oT.name)) && void 0 !== nT && nT.hideIngredients ? [] : oT.requires.flatMap((TT => {
              let {
                items: oT
              } = TT;
              return oT.flatMap((TT => [TT, ri(TT, JT, xT)]))
            })),
            iT = ii(cT, [oT.name, ri(oT.name, JT, xT)], IT);
          null !== iT && TT.push({
            item: oT,
            rank: iT
          })
        }
        TT.sort(((TT, oT) => TT.rank - oT.rank)), HT = TT.map((TT => {
          let {
            item: oT
          } = TT;
          return oT
        }))
      } else {
        if (OT && OT.size > 0) {
          const TT = jT.recipes.filter((TT => !TT.listed && OT.has(Di(TT))));
          HT = HT.concat(TT)
        }
        HT = (0, Wi.e)(HT, aT, YT, QT), OT && (HT = (0, Wi.d)(HT, OT, Di))
      }
      const qT = TT => HT.find((oT => Di(oT) === TT)),
        ZT = `${DT}|${cT}`,
        [lT, sT] = (0, zT.useState)(null),
        tT = (null === lT || void 0 === lT ? void 0 : lT.context) === ZT ? lT.key : null,
        GT = BT ? Di(BT) : null,
        pT = null !== (IT = null !== (iT = qT(GT)) && void 0 !== iT ? iT : qT(tT)) && void 0 !== IT ? IT : HT[0],
        bT = pT ? Di(pT) : null,
        NT = pT ? {
          name: pT.name,
          nS: pT.nS
        } : null;
      kT && CT({
        station: ET,
        recipe: NT
      }) && (jT = FT.gameBridge.latest("crafting")), bT !== GT && bT !== tT && sT(bT ? {
        context: ZT,
        key: bT
      } : null), (0, zT.useEffect)((() => () => {
        fT.current = null, FT.gameBridge.send("focusCrafting", null)
      }), []);
      const PT = Ai(jT.detail, NT) ? jT.detail : null,
        dT = null !== PT && !PT.roomForOne,
        VT = HT.findIndex((TT => Di(TT) === Di(pT))),
        To = () => wT.current ? (0, PI.e)(wT.current) : null,
        oo = (0, zT.useRef)(null),
        Io = (0, zT.useRef)(0);
      Io.current++;
      const io = Io.current;
      (0, zT.useEffect)((() => {
        const TT = oo.current;
        if (!TT || io <= TT.afterRender) return;
        if (oo.current = null, TT.key !== bT) return;
        const oT = To();
        var IT;
        null !== oT && void 0 !== oT && oT.press("primary") && !TT.kS && (null === (IT = oT.release) || void 0 === IT || IT.call(oT))
      }));
      const zo = TT => {
          const oT = {
            name: TT.name,
            nS: TT.nS
          };
          return {
            choose: () => {
              XT(oT), (0, wI.p)(wT.current)
            },
            craft: () => {
              var TT, IT;
              return XT(oT), Di(oT) !== Di(pT) ? (oo.current = {
                key: Di(oT),
                kS: !0,
                afterRender: Io.current
              }, !0) : null !== (TT = null === (IT = To()) || void 0 === IT ? void 0 : IT.press("primary")) && void 0 !== TT && TT
            },
            stopCraft: () => {
              var TT, oT;
              oo.current ? oo.current.kS = !1 : null === (TT = To()) || void 0 === TT || null === (oT = TT.release) || void 0 === oT || oT.call(TT)
            },
            refuse: () => {
              Di(oT) !== Di(pT) && XT(oT), uT((TT => TT + 1))
            }
          }
        },
        ko = () => {
          var TT, oT, IT;
          (0, wI.p)(null !== (TT = null === (oT = hT.current) || void 0 === oT || null === (IT = oT.querySelector(".CraftableItems")) || void 0 === IT ? void 0 : IT.children[VT]) && void 0 !== TT ? TT : null)
        },
        Wo = HT.map(Di).join("|"),
        Xo = (0, zT.useRef)(Wo);
      return (0, zT.useEffect)((() => {
        Xo.current !== Wo && (Xo.current = Wo, eT && VT >= 0 && (0, dI.g)() && ko())
      })), (0, ST.jsxs)("div", {
        className: "Craftables",
        children: [(0, ST.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: Mi(DT, JT, xT)
        }), (0, ST.jsxs)("div", {
          className: "CraftablesBody",
          children: [(0, ST.jsx)(vo.e, {
            className: "CraftingSearch",
            placeholderText: xT("general:searchRecipes"),
            defaultValue: cT,
            maxLength: 100,
            onValueChange: TT => {
              KT(TT)
            },
            blurOnEnter: !0
          }, MT), 0 === HT.length && UT && (0, ST.jsx)("div", {
            className: "CraftingNoMatches SmallTextBold",
            children: xT("general:noRecipesMatchSearch")
          }), HT.length > 0 && (0, ST.jsxs)(ST.Fragment, {
            children: [(0, ST.jsxs)("div", {
              ref: hT,
              className: "CraftablesLeftSide",
              children: [(0, ST.jsx)(NI.d, {
                lazyLoadedClassName: "CraftableItems",
                observerUpdateDeps: [JSON.stringify(HT.map((TT => {
                  let {
                    name: oT,
                    nS: IT,
                    haveIngredients: iT
                  } = TT;
                  return {
                    name: oT,
                    nS: IT,
                    haveIngredients: iT
                  }
                })))],
                observing: kT,
                children: HT.map((TT => {
                  const {
                    name: oT,
                    nS: IT,
                    haveIngredients: iT
                  } = TT, zT = Di(TT);
                  return (0, ST.jsx)(Li, {
                    recipeId: zT,
                    itemName: oT,
                    onClick: () => {
                      XT({
                        name: oT,
                        nS: IT
                      })
                    },
                    isSelected: Di(pT) === zT,
                    haveIngredients: iT,
                    craftable: iT && !YT.has(oT) && !(Di(pT) === zT && dT),
                    setHovered: LT,
                    padActions: zo(TT),
                    marked: aT.has(oT),
                    lock: YT.get(oT),
                    itemInfo: JT
                  }, zT)
                }))
              }), (0, ST.jsx)(Ki, {
                selectedIdx: VT,
                hidden: eT && mT.steppingSlots
              })]
            }), (0, ST.jsx)(ci, {
              show: kT,
              recipeItem: pT,
              detail: PT,
              onCraft: WT,
              setHovered: LT,
              craftButtonRef: wT,
              onPadBack: ko,
              showPadShortcut: eT,
              refusedCount: RT,
              lock: YT.get(pT.name),
              itemInfo: JT
            })]
          })]
        })]
      })
    }
    var wi = IT(8763),
      mi = IT(2844),
      ei = IT(1921),
      Ri = IT(8097);
    class ui {
      constructor(TT, oT, IT) {
        this.commit = TT, this.delayMs = oT, this.defers = IT, this.pending = null, this.timer = void 0, this.kS = !1, this.flush = () => {
          clearTimeout(this.timer);
          const TT = this.pending;
          null !== TT && (this.pending = null, this.commit(TT))
        }
      }
      type(TT) {
        this.pending = TT, clearTimeout(this.timer), this.kS || this.defers() ? this.kS || (this.timer = setTimeout(this.flush, this.delayMs)) : this.flush()
      }
      getTyped(TT) {
        var oT;
        return null !== (oT = this.pending) && void 0 !== oT ? oT : TT
      }
      isHeld() {
        return this.kS
      }
      setHeld(TT) {
        this.kS = TT, TT || this.flush()
      }
    }

    function vi(TT) {
      return null === TT ? "creativeInventory:all" : `creativeInventory:${TT}`
    }

    function Ei(TT) {
      let {
        category: oT
      } = TT;
      return null === oT ? (0, ST.jsx)(MT.e, {
        name: "layer-group"
      }) : (0, ST.jsx)(eI.c, {
        itemName: wi.creativeItemCategoryIcons[oT],
        amount: 0
      })
    }

    function fi(TT) {
      let {
        labelKey: oT,
        isSelected: IT,
        onSelect: iT,
        setHovered: zT,
        children: kT
      } = TT;
      return (0, ST.jsx)("div", {
        className: xo()("CreativeCategoryTab", {
          Selected: IT
        }),
        onClick: iT,
        onPointerEnter: TT => {
          (0, EI.o)(TT) || zT(!0, {
            name: {
              translationKey: oT
            },
            desc: ""
          })
        },
        onPointerLeave: () => {
          zT(!1)
        },
        children: kT
      })
    }

    function Ci(TT) {
      let {
        categories: oT,
        selectedCategory: IT,
        onSelect: iT
      } = TT;
      const {
        t: kT
      } = (0, yT.t)(), [WT, XT] = (0, zT.useState)(!1), BT = (0, zT.useRef)(null), FT = (0, zT.useCallback)((() => {
        XT(!1)
      }), []);
      return (0, ei.c)(BT, FT), (0, ST.jsxs)("div", {
        className: "CreativeCategoryDropdown",
        ref: BT,
        children: [(0, ST.jsxs)("div", {
          className: "CreativeCategoryDropdownButton",
          onClick: () => {
            XT(!WT)
          },
          children: [(0, ST.jsx)("div", {
            className: "CreativeCategoryIcon",
            children: (0, ST.jsx)(Ei, {
              category: IT
            })
          }), (0, ST.jsx)("span", {
            children: kT(vi(IT))
          }), (0, ST.jsx)(MT.e, {
            name: WT ? "caret-up" : "caret-down"
          })]
        }), WT && (0, ST.jsx)("div", {
          className: "CreativeCategoryDropdownMenu",
          children: oT.map((TT => (0, ST.jsxs)("div", {
            className: xo()("CreativeCategoryDropdownOption", {
              Selected: IT === TT
            }),
            onClick: () => {
              iT(TT), XT(!1)
            },
            children: [(0, ST.jsx)("div", {
              className: "CreativeCategoryIcon",
              children: (0, ST.jsx)(Ei, {
                category: TT
              })
            }), (0, ST.jsx)("span", {
              children: kT(vi(TT))
            })]
          }, null !== TT && void 0 !== TT ? TT : "all")))
        })]
      })
    }
    const ji = (0, zT.memo)((function(TT) {
      let {
        creativeScrollDiv: oT,
        playerInvenNumSlots: IT,
        getSetHoveringForIdx: iT,
        getPointerDownForIdx: kT,
        getPointerUpForIdx: WT,
        creativeSearchVal: XT,
        setCreativeSearchVal: FT,
        creativeCategory: DT,
        setCreativeCategory: LT,
        show: xT
      } = TT;
      const {
        t: cT
      } = (0, yT.t)(), KT = (0, vT.f)("creativeVisibility"), {
        userContext: rT
      } = (0, mT.b)(), AT = (0, BT.g)("canUseDevCreativeItems"), gT = rT.playerHasRank("developer") || !!AT, hT = (0, zT.useMemo)((() => Ui("", KT, gT)), [KT, gT]), wT = (0, zT.useMemo)((() => {
        const TT = (0, wi.creativeItemIds)(),
          oT = new Set(hT.map((oT => (0, wi.creativeCategoryOf)(TT[oT]))));
        return wi.creativeItemCategories.filter((TT => oT.has(TT)))
      }), [hT]), eT = null !== DT && wT.includes(DT) ? DT : null, uT = (0, zT.useMemo)((() => "" === XT ? hT : Ui(XT, KT, gT)), [hT, XT, KT, gT]), ET = (0, zT.useMemo)((() => {
        const TT = (0, wi.creativeItemIds)();
        return null !== eT ? uT.filter((oT => (0, wi.creativeCategoryOf)(TT[oT]) === eT)) : "" === XT ? uT.filter((oT => !(0, wi.showOnlyInCreativeCategory)(TT[oT]))) : uT
      }), [uT, eT, XT]), fT = iT();

      function CT(TT) {
        LT(TT), oT.current.scrollTop = 0
      }
      const jT = [null, ...wT],
        {
          isTouchScreen: JT
        } = (0, nT.k)(["isTouchScreen"]),
        UT = !JT,
        aT = (0, zT.useRef)(null),
        [YT, QT] = (0, zT.useState)(0);
      (0, zT.useEffect)((() => {
        const TT = aT.current;
        if (!TT) return;
        const oT = new ResizeObserver((TT => {
          QT(TT[0].contentRect.height)
        }));
        return oT.observe(TT), () => {
          oT.disconnect()
        }
      }), [UT]);
      const OT = (0, zT.useRef)(null),
        HT = (0, zT.useCallback)((function TT() {
          "up" === OT.current ? oT.current.scrollTop -= 10 : "down" === OT.current && (oT.current.scrollTop += 10), OT.current && requestAnimationFrame(TT)
        }), [oT]),
        qT = (0, zT.useCallback)((function(TT) {
          OT.current || (OT.current = TT, HT())
        }), [HT]);

      function ZT() {
        OT.current = null
      }
      const lT = (0, zT.useRef)({
        creativeSearchVal: XT,
        setCreativeSearchVal: FT
      });
      lT.current = {
        creativeSearchVal: XT,
        setCreativeSearchVal: FT
      };
      const [sT] = (0, zT.useState)((() => new ui((TT => {
        lT.current.setCreativeSearchVal(TT)
      }), 250, mI.f))), tT = TT => {
        var IT;
        null === (IT = oT.current) || void 0 === IT || IT.classList.toggle("CreativeItemSlotsStale", TT)
      };
      (0, RT.g)(Ri.d, (TT => {
        sT.setHeld(TT), TT || tT(!1)
      })), (0, zT.useEffect)((() => sT.flush), [sT]);
      const GT = (0, ST.jsx)(vo.e, {
          className: "CreativeItemSlotsSearch",
          placeholderText: "Search",
          defaultValue: XT,
          maxLength: 1e4,
          onValueChange: (TT, oT) => {
            "" === sT.getTyped(lT.current.creativeSearchVal) && "" !== TT && LT(null), sT.type(TT), tT(sT.isHeld())
          },
          onEnter: sT.flush,
          blurOnEnter: !0
        }),
        pT = (0, ST.jsxs)("div", {
          className: "CreateItemSlotsScrollable",
          children: [JT && (0, ST.jsxs)("div", {
            className: "CreativeScrollButtons",
            children: [(0, ST.jsx)("div", {
              className: "CreativeScrollButton Up",
              onPointerDown: () => {
                qT("up")
              },
              onPointerLeave: ZT,
              onPointerUp: ZT,
              children: (0, ST.jsx)(MT.e, {
                name: "arrow-up"
              })
            }), (0, ST.jsx)("div", {
              className: "CreativeScrollButton Down",
              onPointerDown: () => {
                qT("down")
              },
              onPointerLeave: ZT,
              onPointerUp: ZT,
              children: (0, ST.jsx)(MT.e, {
                name: "arrow-up"
              })
            })]
          }), (0, ST.jsxs)("div", {
            className: "CreativeItemSlots",
            ref: oT,
            children: [0 === ET.length && "" !== XT && (0, ST.jsx)("div", {
              className: "CreativeItemSlotsEmpty",
              children: cT("general:noResults")
            }), (0, ST.jsx)(NI.d, {
              lazyLoadedClassName: "CreativeItemSlotsInner",
              observerUpdateDeps: [XT, eT],
              observerRoot: "CreativeItemSlots",
              observing: xT,
              children: ET.map((TT => {
                const oT = IT + TT;
                return (0, ST.jsx)(sI.d, {
                  idx: oT,
                  draggedInfo: null,
                  specialItemInfo: null,
                  setHovered: iT(oT),
                  pointerDown: kT(oT),
                  pointerUp: WT(oT)
                }, oT)
              }))
            })]
          })]
        });
      return (0, ST.jsxs)("div", {
        className: xo()("CreativeItemSlotsWrapper", UT ? "WithRail" : "WithDropdown"),
        children: [UT && (0, ST.jsx)("div", {
          className: "CreativeCategoryRail",
          ref: aT,
          style: {
            "--rail-height": YT > 0 ? `${YT}px` : void 0,
            "--tab-rows": Math.ceil(jT.length / 2)
          },
          children: jT.map((TT => (0, ST.jsx)(fi, {
            labelKey: vi(TT),
            isSelected: eT === TT,
            onSelect: () => {
              CT(TT)
            },
            setHovered: fT,
            children: (0, ST.jsx)(Ei, {
              category: TT
            })
          }, null !== TT && void 0 !== TT ? TT : "all")))
        }), (0, ST.jsxs)("div", {
          className: "CreativeItemSlotsMain",
          children: [(0, ST.jsxs)("div", {
            className: "CreativeItemSlotsSearchRow",
            children: [GT, !UT && (0, ST.jsx)(Ci, {
              categories: jT,
              selectedCategory: eT,
              onSelect: CT
            })]
          }), pT]
        })]
      })
    }));

    function Ji(TT) {
      var oT;
      return null !== (oT = (0, mi.g)(TT)) && void 0 !== oT ? oT : ""
    }

    function Ui(TT, oT, IT) {
      let {
        publicLobby: iT,
        shownInGame: zT
      } = oT;
      const kT = TT.toLowerCase(),
        WT = (0, wi.creativeItemIds)(),
        XT = TT => {
          var oT;
          const kT = WT[TT];
          return !(0, wi.itemIsDisabled)(kT, iT, null === (oT = zT[Ji(kT)]) || void 0 === oT || oT, IT)
        };
      if ("" === kT) return WT.map(((TT, oT) => oT)).filter((TT => !(0, wi.showOnlyInCreativeSearch)(WT[TT]))).filter(XT);
      const BT = [];
      for (let FT = 0; FT < WT.length; FT++) Ji(WT[FT]).toLowerCase().includes(kT) && BT.push(FT);
      BT.sort(((TT, oT) => {
        const IT = Ji(WT[TT]).toLowerCase(),
          iT = Ji(WT[oT]).toLowerCase();
        return IT.indexOf(kT) - iT.indexOf(kT)
      }));
      for (const [FT, ST] of(0, wi.creativeAltNames)())
        for (const TT of ST)
          if (TT.toLowerCase().includes(kT)) {
            const TT = WT.indexOf(FT);
            BT.includes(TT) || BT.push(TT)
          } return BT.filter(XT)
    }
    var ai = IT(35777),
      Yi = IT(618);

    function Qi(TT) {
      return TT > Yi.j
    }

    function Oi(TT) {
      const oT = TT / 2,
        IT = [];
      for (let iT = 0; iT < oT / 6; iT++)
        for (let TT = 0; TT < 12; TT++) {
          const zT = TT < 6 ? 0 : oT;
          IT.push(zT + 6 * iT + TT % 6)
        }
      return IT
    }

    function Hi(TT) {
      let {
        numSlots: oT,
        renderSlot: IT
      } = TT;
      const {
        t: iT
      } = (0, yT.t)(), kT = (0, zT.useRef)(null);
      var WT;
      return WT = kT, (0, zT.useLayoutEffect)((() => {
        var TT;
        const oT = null === (TT = WT.current) || void 0 === TT ? void 0 : TT.closest(".InvenBody");
        if (!oT) return;
        const IT = () => {
          oT.style.zoom = "";
          const TT = parseFloat(getComputedStyle(document.documentElement).fontSize),
            IT = window.innerWidth - 2 * TT,
            iT = oT.getBoundingClientRect().width;
          iT > IT && (oT.style.zoom = "" + IT / iT)
        };
        return IT(), window.addEventListener("resize", IT), () => {
          window.removeEventListener("resize", IT), oT.style.zoom = ""
        }
      }), [WT]), (0, ST.jsxs)("div", {
        ref: kT,
        className: "ChestItemSlots DoubleChestSlots",
        children: [(0, ST.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: iT("doubleChest:title")
        }), (0, ST.jsx)("div", {
          className: "GridItemSlots",
          children: Oi(oT).map((TT => IT(TT)))
        })]
      })
    }

    function ni(TT) {
      let {
        ai: oT,
        initialPasskey: IT
      } = TT;
      const {
        t: iT
      } = (0, yT.t)(), [kT, WT] = (0, zT.useState)(IT), [XT, BT] = (0, zT.useState)(IT);
      (0, zT.useEffect)((() => {
        WT(IT), BT(IT)
      }), [...oT]);
      return (0, ST.jsxs)("div", {
        className: "IronChestPasskeyEditorWrapper",
        children: [(0, ST.jsx)("div", {
          className: "SmallTextBold",
          children: iT("ironChest:currentPasskey", {
            currentPasskey: kT.join("")
          })
        }), (0, ST.jsx)(nI, {
          className: "IronChestPasskeyEditor",
          cW: XT,
          onPasskeyUpdated: BT,
          confirmText: "ironChest:changePasskey",
          onConfirm: () => {
            FT.gameBridge.send("changeIronChestPasskey", {
              pos: [...oT],
              cW: [...XT]
            }), WT([...XT])
          }
        })]
      })
    }

    function qi(TT) {
      let {
        variation: oT,
        canCraft: IT,
        show: iT,
        creativeMounted: zT,
        specialItemRef: kT,
        draggedInfo: WT,
        getSetHovering: XT,
        getPointerDownForIdx: BT,
        getPointerUpForIdx: FT,
        enchantingTablePosition: DT,
        enchantingTableBlockName: LT,
        selectedCraftable: xT,
        dispatchSelectedCraftable: cT,
        creativeScrollDiv: KT,
        creativeSearchVal: MT,
        setCreativeSearchVal: rT,
        creativeCategory: AT,
        setCreativeCategory: gT,
        onCraft: hT
      } = TT;
      const {
        userContext: wT
      } = (0, mT.b)(), {
        t: eT
      } = (0, yT.t)(), RT = (0, vT.d)("inventory", (TT => TT.chest)), uT = (0, vT.d)("inventory", (TT => TT.player.length)), ET = (0, vT.d)("inventory", (TT => TT.creative));
      if (0 === uT) return null;
      let fT, CT;
      const jT = TT => {
          const oT = uT + TT;
          return (0, ST.jsx)(sI.d, {
            idx: oT,
            draggedInfo: WT,
            specialItemInfo: kT.current,
            setHovered: XT(oT),
            pointerDown: BT(oT),
            pointerUp: FT(oT)
          }, oT)
        },
        JT = RT ? (0, ai.e)(RT.type) : null;
      if (JT) fT = xo()("InvenLeftSideChestCustom", JT.className), CT = (0, ST.jsx)("div", {
        className: "ChestItemSlotsWrapper",
        children: JT.render({
          ai: RT.pos,
          renderSlot: jT
        })
      });
      else if (RT) {
        const TT = RT.pos,
          oT = "Iron" === RT.type || "Moonstone" === RT.type ? RT.type : "Standard";
        let IT = !1,
          iT = null;
        "Iron" === oT && (IT = RT.ironChest.ownerDbId === wT.whamm, iT = RT.ironChest.cW), fT = `InvenLeftSideChest${oT}`;
        const zT = Qi(RT.numSlots);
        CT = (0, ST.jsxs)("div", {
          className: "ChestItemSlotsWrapper",
          children: [IT && (0, ST.jsx)(ni, {
            ai: TT,
            initialPasskey: iT
          }), zT && (0, ST.jsx)(Hi, {
            numSlots: RT.numSlots,
            renderSlot: jT
          }), !zT && (0, ST.jsxs)("div", {
            className: "ChestItemSlots",
            children: [(0, ST.jsx)("div", {
              className: "InvenLeftSideHeader SmallTextBold",
              children: eT("Moonstone" === oT ? "item:moonstoneChest" : "Iron" === oT ? "item:ironChest" : "item:chest")
            }), (0, ST.jsx)("div", {
              className: "GridItemSlots",
              children: new Array(RT.numSlots).fill(0).map(((TT, oT) => jT(oT)))
            })]
          })]
        })
      } else if (!ET || oT && IT)
        if (IT && "Enchanting Table" === oT) fT = `InvenLeftSide${(null!==LT&&void 0!==LT?LT:"").replace(/ /gi,"")}`, CT = (0, ST.jsx)(tI, {
          specialItemInfo: kT.current,
          setHovered: XT,
          pointerDown: BT(CI.g),
          pointerUp: FT(CI.g),
          enchantingTablePosition: DT,
          enchantingTableBlockName: LT
        });
        else if (IT && "Salvaging Table" === oT) fT = "InvenLeftSideSalvagingTable", CT = (0, ST.jsx)(pI, {
        specialItemInfo: kT.current,
        setSpecialItemInfo: TT => {
          kT.current = TT
        },
        setHovered: XT,
        pointerDown: BT(CI.g),
        pointerUp: FT(CI.g)
      });
      else {
        if (!IT) return null;
        fT = `InvenLeftSide${(null!==oT&&void 0!==oT?oT:"HandCrafting").replace(/ /gi,"")}`, CT = (0, ST.jsx)(gi, {
          show: iT,
          onCraft: hT,
          craftingStation: oT,
          selectedCraftable: xT,
          dispatchSelectedCraftable: cT,
          setHovered: XT()
        })
      } else fT = "InvenLeftSideCreative", CT = zT ? (0, ST.jsx)(ji, {
        creativeScrollDiv: KT,
        playerInvenNumSlots: uT,
        getSetHoveringForIdx: XT,
        getPointerDownForIdx: BT,
        getPointerUpForIdx: FT,
        creativeSearchVal: MT,
        setCreativeSearchVal: rT,
        creativeCategory: AT,
        setCreativeCategory: gT,
        show: iT
      }) : null;
      const UT = !!RT || IT && !!oT;
      return (0, ST.jsx)("div", {
        className: `InvenLeftSide ${fT}`,
        "data-pad-inventory-start": UT ? "" : void 0,
        children: CT
      })
    }
    var Zi = IT(601),
      li = IT(19517),
      si = IT(19520),
      ti = IT(19525);
    const Gi = {
      Helmet: {
        sprite: "empty_armor_slot_helmet",
        image: IT(19530)
      },
      Chestplate: {
        sprite: "empty_armor_slot_chestplate",
        image: si
      },
      Gauntlets: {
        sprite: "empty_armor_slot_gauntlets",
        image: ti
      },
      Leggings: {
        sprite: "empty_armor_slot_leggings",
        image: IT(19534)
      },
      Boots: {
        sprite: "empty_armor_slot_boots",
        image: li
      }
    };

    function bi(TT) {
      const {
        sprite: oT,
        image: IT
      } = Gi[TT];
      return SI(oT, XI.i.ITEM, IT)
    }

    function yi(TT) {
      let {
        draggedInfo: oT,
        specialItemInfo: IT,
        craftFlyAnims: iT,
        getSetHovering: zT,
        getPointerDownForIdx: kT,
        getPointerUpForIdx: WT,
        variation: XT,
        canCraft: BT,
        isNewSlot: FT
      } = TT;
      const DT = (0, vT.d)("inventory", (TT => TT.player.length));
      return 0 === DT ? null : (0, ST.jsxs)("div", {
        className: "InvenBodyRight",
        children: [(0, ST.jsx)("div", {
          className: "ArmourItemSlots",
          children: new Array(Zi.b.length).fill(0).map(((TT, LT) => {
            const xT = DT - Zi.b.length + LT;
            return (0, ST.jsx)(sI.d, {
              idx: xT,
              draggedInfo: oT,
              specialItemInfo: IT,
              craftFlyHoldbackInfo: (0, fI.k)(iT, xT),
              setHovered: zT(xT),
              pointerDown: kT(xT),
              pointerUp: WT(xT),
              defaultIconB64: bi(Zi.b[LT]),
              variation: BT ? XT : void 0,
              showNewDot: FT(xT)
            }, xT)
          }))
        }), (0, ST.jsx)("div", {
          className: "GridItemSlots",
          children: new Array(DT - 10 - Zi.b.length).fill(0).map(((TT, LT) => {
            const xT = DT - Zi.b.length - LT - 1;
            return (0, ST.jsx)(sI.d, {
              idx: xT,
              draggedInfo: oT,
              specialItemInfo: IT,
              craftFlyHoldbackInfo: (0, fI.k)(iT, xT),
              setHovered: zT(xT),
              pointerDown: kT(xT),
              pointerUp: WT(xT),
              variation: BT ? XT : void 0,
              showNewDot: FT(xT)
            }, xT)
          }))
        })]
      })
    }
    var Ni = IT(35780),
      Pi = IT(35788);

    function di(TT) {
      const {
        e: oT,
        idx: IT
      } = TT, iT = (0, EI.h)(TT.readInventory(), IT), zT = (0, EI.k)(oT);
      IT === CI.c ? function(TT, oT) {
        const {
          draggedInfoRef: IT,
          removeItem: iT,
          removeDraggedInfoRef: zT,
          close: kT
        } = TT;
        if (IT.current) {
          const TT = oT && IT.current.amount || 1;
          iT(IT.current.idx, TT, !0) && (IT.current.amount -= TT, IT.current.amount <= 0 && zT())
        } else oT && kT()
      }(TT, zT) : IT === CI.g ? function(TT, oT) {
        const {
          e: IT,
          draggedInfoRef: iT,
          specialItemRef: zT,
          moveAmtIntoSlot: kT,
          removeDraggedInfoRef: WT
        } = TT;
        if ((0, EI.r)(IT) && zT.current) zT.current = null;
        else if (iT.current && zT.current && (iT.current.idx === zT.current.idx || (0, Pi.e)(iT.current, zT.current)) && iT.current.amount > 0 && zT.current.amount > 0 && zT.current.amount < OI.c.maxItemStackSize)
          if (iT.current.idx === zT.current.idx) {
            if (oT) {
              const TT = Math.min(iT.current.amount, OI.c.maxItemStackSize - zT.current.amount);
              zT.current.amount += TT, iT.current.amount -= TT
            } else iT.current.amount--, zT.current.amount++;
            iT.current.amount <= 0 && WT()
          } else if (oT) {
          const TT = Math.min(iT.current.amount, OI.c.maxItemStackSize - zT.current.amount);
          kT(zT.current.idx, TT) && (zT.current.amount += TT)
        } else {
          kT(zT.current.idx, 1) && zT.current.amount++
        } else if (!iT.current || zT.current || oT) {
          const TT = iT.current;
          iT.current = zT.current, zT.current = TT
        } else iT.current.amount--, zT.current = {
          idx: iT.current.idx,
          name: iT.current.name,
          attributes: iT.current.attributes,
          amount: 1
        }
      }(TT, zT) : (0, EI.r)(oT) ? function(TT, oT) {
        var IT, iT;
        const {
          idx: zT,
          draggedInfoRef: kT,
          specialItemRef: WT,
          canCraft: XT,
          variation: BT,
          swapSlots: FT,
          moveIntoSlots: ST
        } = TT;
        if (!oT) return;
        let DT = oT.amount;
        zT === (null === (IT = kT.current) || void 0 === IT ? void 0 : IT.idx) && (DT = kT.current.amount <= 0 ? 0 : oT.amount - kT.current.amount);
        zT === (null === (iT = WT.current) || void 0 === iT ? void 0 : iT.idx) && (DT = WT.current.amount <= 0 ? 0 : oT.amount - WT.current.amount);
        if (0 === DT) return;
        const LT = TT.readInventory(),
          xT = LT.player.length,
          cT = LT.chest,
          KT = xT - Zi.b.length,
          MT = () => {
            if (!(0, mI.f)()) return void ST(10, KT, zT, DT);
            const TT = TT => {
              const IT = (0, EI.h)(LT, TT);
              return IT ? {
                amount: IT.amount,
                stacksWithMoved: (0, Pi.e)(IT, oT)
              } : null
            };
            for (const oT of ((TT, oT, IT, iT, zT) => {
                const kT = [];
                let WT = iT;
                if (null !== iT) {
                  let XT = 0;
                  for (let iT = oT; iT < IT; iT++) {
                    const oT = TT(iT);
                    null !== oT && void 0 !== oT && oT.stacksWithMoved && null !== oT.amount && oT.amount > 0 && (XT += Math.max(0, zT - oT.amount))
                  }
                  const BT = Math.min(iT, XT);
                  if (BT > 0 && (kT.push({
                      start: oT,
                      end: IT,
                      amount: BT
                    }), WT = iT - BT), WT <= 0) return kT
                }
                for (let XT = IT - 1; XT >= oT; XT--)
                  if (null === TT(XT)) {
                    kT.push({
                      start: XT,
                      end: XT + 1,
                      amount: WT
                    });
                    break
                  } return kT
              })(TT, 10, KT, DT, OI.c.maxItemStackSize)) ST(oT.start, oT.end, zT, oT.amount)
          };
        if (!XT || "Enchanting Table" !== BT && "Salvaging Table" !== BT) {
          const IT = (0, uT.vb)(oT.name),
            iT = IT ? (0, uT.ub)(IT) : null;
          if (!Zi.b.includes(IT) || zT !== iT && (0, EI.i)(LT, TT.itemInfo, iT, zT))
            if (cT)
              if (zT < xT) {
                var rT, AT;
                const [TT, oT] = null !== (rT = null === (AT = (0, ai.e)(cT.type)) || void 0 === AT ? void 0 : AT.quickMoveRange) && void 0 !== rT ? rT : [0, cT.numSlots];
                ST(xT + TT, xT + oT, zT, DT)
              } else ST(0, xT - Zi.b.length, zT, DT);
          else LT.creative ? zT < 10 ? MT() : zT < xT ? ST(0, 10, zT, DT) : ST(0, xT - Zi.b.length, zT, null !== oT.amount ? OI.c.maxItemStackSize : null) : zT < 10 ? MT() : ST(0, 10, zT, DT);
          else zT < xT - Zi.b.length || zT >= xT ? FT(iT, zT) : (ST(0, xT - Zi.b.length, iT, DT), uI.d.play("equip_leather1", 1).rate(.9 + .3 * Math.random()))
        } else WT.current = {
          idx: zT,
          name: oT.name,
          attributes: oT.attributes,
          amount: null !== oT.amount ? DT : 0
        }
      }(TT, iT) : TT.draggedInfoRef.current ? function(TT, oT, IT, iT) {
        const {
          draggedInfoRef: zT,
          specialItemRef: kT,
          moveAmtIntoSlot: WT,
          swapSlots: XT,
          removeItem: BT,
          removeDraggedInfoRef: FT
        } = TT, ST = TT.readInventory(), DT = zT.current.idx;
        if (IT && (oT === DT || (0, Pi.e)(zT.current, IT)) && zT.current.amount > 0 && (0, EI.b)(IT) > 0 && (IT.amount < OI.c.maxItemStackSize || oT === DT)) iT ? IT.amount + zT.current.amount <= OI.c.maxItemStackSize || oT === DT ? WT(oT, zT.current.amount) : WT(oT, OI.c.maxItemStackSize - IT.amount) : WT(oT, 1);
        else if (zT.current.amount > 0 && !IT) WT(oT, iT ? zT.current.amount : 1);
        else if (iT || IT || 0 === zT.current.amount)
          if (ST.creative && !ST.chest && oT >= ST.player.length) {
            const TT = 0 === zT.current.amount ? 1 : zT.current.amount;
            BT(zT.current.idx, TT, !1) && FT()
          } else {
            var LT;
            const IT = (null === (LT = kT.current) || void 0 === LT ? void 0 : LT.idx) === oT;
            if (XT(oT, zT.current.idx)) {
              const iT = TT.readInventory(),
                WT = (0, EI.h)(iT, DT),
                XT = !iT.chest && iT.creative && zT.current.idx >= iT.player.length;
              if (WT && zT.current.idx !== oT && !XT) {
                let TT = (0, EI.b)(WT);
                IT && (TT -= kT.current.amount), zT.current = IT && 0 === TT ? null : {
                  idx: zT.current.idx,
                  name: WT.name,
                  attributes: WT.attributes,
                  amount: TT
                }
              } else FT()
            }
          }
        else WT(oT, 1)
      }(TT, IT, iT, zT) : function(TT, oT, IT, iT) {
        var zT;
        const {
          draggedInfoRef: kT,
          specialItemRef: WT
        } = TT;
        if (!IT) return;
        let XT = (0, EI.b)(IT);
        const BT = (null === (zT = WT.current) || void 0 === zT ? void 0 : zT.idx) === oT;
        BT && (XT -= WT.current.amount);
        iT || (XT = Math.ceil(XT / 2));
        kT.current = BT && 0 === XT ? null : {
          idx: oT,
          name: IT.name,
          attributes: IT.attributes,
          amount: XT
        }
      }(TT, IT, iT, zT)
    }

    function Vi(TT, oT) {
      return !!oT && oT.name === TT.name
    }

    function Tz() {
      return FT.gameBridge.latest("inventory")
    }

    function oz(TT, oT, IT) {
      return FT.gameBridge.send("removeInventoryItem", {
        slot: TT,
        amount: oT,
        drop: IT
      })
    }

    function Iz(TT) {
      return (0, EI.g)(TT, FT.gameBridge.latest("itemInfo"), FT.gameBridge.latest("stationItems").enchantable)
    }

    function iz(TT) {
      let {
        show: oT,
        close: IT,
        canCraft: iT,
        variation: kT,
        inventoryItemsMoveable: WT,
        setCraftFlyAnims: XT
      } = TT;
      (0, vT.f)("itemInfo");
      const [BT, ST] = (0, zT.useState)(null), [DT, LT] = (0, zT.useState)(null), [xT, cT] = (0, zT.useState)(!1), KT = (0, zT.useRef)(null), MT = (0, zT.useRef)(null), rT = (0, zT.useRef)(null), AT = (0, zT.useRef)(null), [gT, hT] = (0, zT.useReducer)((TT => TT + 1), 0), wT = (0, zT.useCallback)((() => {
        oT && hT()
      }), [oT, hT]), mT = (0, zT.useCallback)((() => {
        MT.current = null, YT.current = null, wT()
      }), [wT]), eT = (0, zT.useCallback)(((TT, oT) => {
        XT((IT => IT.map((IT => "ingredient" === IT.kind ? IT : IT.XS === TT ? {
          ...IT,
          XS: oT,
          to: (0, EI.d)(oT)
        } : IT.XS === oT ? {
          ...IT,
          XS: TT,
          to: (0, EI.d)(TT)
        } : IT))))
      }), [XT]), RT = (0, zT.useCallback)(((TT, oT) => {
        const IT = HT.current;
        if (IT.x = TT, IT.y = oT, KT.current) !nT.current.isTouch || nT.current.itemBeingDragged && !YT.current ? (KT.current.style.transform = `translate(${IT.x}px, ${IT.y}px)`, cT(nT.current.isTouch && !YT.current)) : (KT.current.style.transform = "translate(0.5rem, 0.5rem)", cT(!0));
        else if (AT.current) {
          const IT = AT.current;
          let iT = TT + 10,
            zT = oT + 10;
          const kT = IT.offsetWidth,
            WT = IT.offsetHeight;
          iT + kT > window.innerWidth && (iT = TT - kT - 10), zT + WT > window.innerHeight && (zT = oT - WT - 10), iT < 0 && (iT = 0), zT < 0 && (zT = 0), AT.current.style.transform = `translate(${iT}px, ${zT}px)`
        }
      }), []), ET = (0, zT.useCallback)((TT => (oT, IT, iT) => {
        if (ST(oT && void 0 !== TT ? TT : null), oT) {
          if (void 0 === TT && !IT) return void(0, Ni.b)("Error in invenComp", new Error("isHovering true but no idx or text"));
          if (void 0 !== TT) {
            var zT;
            const oT = Tz();
            let IT;
            if (IT = TT === CI.g ? rT.current ? (0, EI.h)(oT, rT.current.idx) : null : (0, EI.h)(oT, TT), !IT) return void LT(null);
            if ((null === (zT = rT.current) || void 0 === zT ? void 0 : zT.idx) === TT) {
              if (0 === (0, EI.b)(IT) - rT.current.amount) return void LT(null)
            }
            LT(Iz(IT))
          } else LT({
            name: IT.name,
            desc: IT.desc,
            fontStyle: "normal"
          })
        } else LT(null);
        iT && setTimeout((() => {
          RT(iT.pageX, iT.pageY)
        }), 0)
      }), [RT]), fT = (0, zT.useCallback)(((TT, oT) => {
        const IT = FT.gameBridge.send("moveInventoryItem", {
          from: MT.current.idx,
          to: TT,
          amount: oT
        });
        return IT ? (MT.current.amount -= oT, MT.current.amount <= 0 && mT()) : console.error("moveInventoryItem failed"), IT
      }), [mT]), CT = (0, zT.useCallback)(((TT, oT) => {
        const IT = rT.current,
          iT = null === IT || void 0 === IT ? void 0 : IT.idx;
        IT && (IT.idx = function(TT, oT, IT) {
          return TT === oT ? IT : TT === IT ? oT : TT
        }(iT, TT, oT));
        const zT = FT.gameBridge.send("swapInventorySlots", {
          a: TT,
          b: oT
        });
        return zT ? eT(TT, oT) : IT && (IT.idx = iT), zT
      }), [eT]), jT = (0, zT.useCallback)(((TT, oT, IT, iT) => {
        const zT = FT.gameBridge.send("quickMoveInventoryItem", {
          slot: IT,
          start: TT,
          end: oT,
          amount: iT
        });
        null !== zT && eT(IT, zT)
      }), [eT]), JT = (0, zT.useCallback)(((TT, oT) => {
        var zT;
        ((TT, oT, IT) => {
          const iT = TT - (IT - Zi.b.length);
          return !(!oT || iT < 0 || iT >= Zi.b.length) && (0, uT.vb)(oT) !== Zi.b[iT]
        })(oT, null === (zT = MT.current) || void 0 === zT ? void 0 : zT.name, Tz().player.length) || (di({
          e: TT,
          idx: oT,
          readInventory: Tz,
          itemInfo: FT.gameBridge.latest("itemInfo"),
          draggedInfoRef: MT,
          specialItemRef: rT,
          moveAmtIntoSlot: fT,
          swapSlots: CT,
          moveIntoSlots: jT,
          removeItem: oz,
          removeDraggedInfoRef: mT,
          close: IT,
          canCraft: iT,
          variation: kT
        }), wT())
      }), [iT, IT, fT, jT, mT, CT, kT, wT]), UT = (0, zT.useRef)(0), aT = (0, zT.useRef)(null), YT = (0, zT.useRef)(null), QT = (0, zT.useRef)(null), OT = (0, zT.useRef)(new Set), HT = (0, zT.useRef)({
        x: 0,
        y: 0
      }), nT = (0, zT.useRef)({
        isTouch: !1,
        itemBeingDragged: !1
      }), qT = (0, zT.useCallback)((() => (QT.current = null, nT.current.itemBeingDragged = !1, clearTimeout(aT.current), !!YT.current && (YT.current = null, wT(), !0))), [wT]);
      (0, zT.useEffect)((() => {
        qT(), OT.current.clear()
      }), [oT]);
      const ZT = TT => void 0 !== TT && (OT.current.has(TT) || null !== QT.current && TT !== QT.current),
        lT = TT => {
          nT.current.isTouch = (0, EI.o)(TT)
        },
        sT = (0, zT.useCallback)((TT => oT => {
          const iT = (0, EI.o)(oT);
          if (iT || RT(oT.pageX, oT.pageY), WT)
            if (ZT(oT.pointerId)) void 0 !== oT.pointerId && OT.current.add(oT.pointerId);
            else {
              if (lT(oT), iT) {
                UT.current = oT.timeStamp, nT.current.itemBeingDragged = !0, QT.current = oT.pointerId;
                const IT = (0, EI.h)(Tz(), TT);
                if (IT && IT.amount && IT.amount > 0) {
                  const IT = oT.pageX,
                    iT = oT.pageY,
                    zT = HT.current.x,
                    kT = HT.current.y;
                  clearTimeout(aT.current), aT.current = setTimeout((() => {
                    if (MT.current && MT.current.idx === TT && (Math.abs(IT - HT.current.x) < 20 && Math.abs(iT - HT.current.y) < 20 || zT === HT.current.x && kT === HT.current.y) && nT.current.itemBeingDragged) {
                      const TT = Tz(),
                        IT = TT.creative && !TT.chest && MT.current.idx >= OI.c.numInvenSlots && null !== (0, EI.h)(TT, MT.current.idx).amount ? OI.c.maxItemStackSize : MT.current.amount;
                      YT.current = {
                        initTouchX: oT.pageX,
                        initTouchY: oT.pageY,
                        maxAmount: IT
                      }, MT.current.amount = Math.ceil(MT.current.amount / 2), KT.current.style.transform = "translate(0.5rem, 0.5rem)", cT(!0), wT()
                    }
                  }), 500)
                }
              }
              JT(oT, TT)
            }
          else TT === CI.c && (0, EI.k)(oT) && IT()
        }), [RT, JT, WT, IT, wT]),
        tT = (0, zT.useCallback)((TT => TT => {
          if (ZT(TT.pointerId)) return;
          const oT = (0, EI.o)(TT);
          if (lT(TT), !qT()) {
            if (oT && MT.current && TT.timeStamp - UT.current > 150) {
              const oT = document.elementFromPoint(TT.clientX, TT.clientY);
              if (null !== oT) {
                const IT = oT.getAttribute("data-inven-idx");
                null !== IT ? JT(TT, parseInt(IT)) : oT.classList.contains("InventoryBackgroundScreen") && JT(TT, -1)
              }
            }
            RT(TT.pageX, TT.pageY)
          }
        }), [RT, JT, qT]);
      (0, zT.useEffect)((() => {
        let TT;
        const IT = ["pointerup", "pointercancel"],
          iT = TT => {
            OT.current.has(TT.pointerId) ? setTimeout((() => {
              OT.current.delete(TT.pointerId)
            }), 0) : TT.pointerId === QT.current && setTimeout((() => {
              QT.current === TT.pointerId && qT()
            }), 0)
          };
        if (oT) {
          for (const TT of IT) document.addEventListener(TT, iT, !0);
          if (!nT.current.isTouch) {
            const TT = HT.current;
            RT(TT.x, TT.y)
          }
          TT = TT => {
            TT.preventDefault(), ZT(TT.pointerId) || (lT(TT), RT(TT.pageX, TT.pageY), YT.current && TT.pointerId === QT.current && (TT => {
              if (!MT.current) return YT.current = null, void wT();
              const {
                initTouchX: oT,
                maxAmount: IT
              } = YT.current, iT = (TT.pageX - oT) * YT.current.maxAmount / 160, zT = Math.ceil(IT / 2) + Math.ceil(iT);
              MT.current.amount = Math.min(IT, Math.max(1, zT)), wT()
            })(TT))
          }, document.addEventListener("pointermove", TT, !0)
        }
        return () => {
          document.removeEventListener("pointermove", TT, !0);
          for (const TT of IT) document.removeEventListener(TT, iT, !0)
        }
      }));
      const GT = (0, zT.useCallback)((() => {
          if (MT.current) {
            const TT = (0, EI.h)(Tz(), MT.current.idx);
            (!Vi(MT.current, TT) || TT.amount < MT.current.amount) && mT()
          }
        }), [mT]),
        pT = (0, zT.useCallback)((() => {
          const TT = MT.current;
          if (TT) {
            const oT = (0, EI.h)(Tz(), TT.idx);
            Vi(TT, oT) && (TT.attributes = oT.attributes)
          }
        }), []);
      return {
        draggedDomRef: KT,
        draggedInfoRef: MT,
        specialItemRef: rT,
        hoverInfoDomRef: AT,
        longHoldSplitInfoRef: YT,
        currHoveredIdx: BT,
        currHoveredDisplayInfo: DT,
        displayDraggedItemName: xT,
        forceRerenderIfVisible: wT,
        removeDraggedInfoRef: mT,
        checkDraggedItemConsistencyWithInven: GT,
        refreshDraggedAttributes: pT,
        swapSlots: CT,
        getPointerDownForIdx: sT,
        getPointerUpForIdx: tT,
        getSetHovering: ET,
        setCurrHoveredDisplayInfo: LT,
        moveFollowerTo: RT
      }
    }
    class zz {
      constructor(TT) {
        this.snapshot = [], this.newSlots = new Set, this.update(TT, !1)
      }
      update(TT, oT) {
        const IT = TT.map((TT => {
          var oT;
          return TT ? {
            name: TT.name,
            amount: null !== (oT = TT.amount) && void 0 !== oT ? oT : 1
          } : null
        }));
        IT.forEach(((TT, IT) => {
          const iT = this.snapshot[IT],
            zT = (null === TT || void 0 === TT ? void 0 : TT.name) !== (null === iT || void 0 === iT ? void 0 : iT.name);
          (!TT || zT || TT.amount < iT.amount) && this.newSlots.delete(IT), oT && TT && (zT || TT.amount > iT.amount) && this.newSlots.add(IT)
        })), this.snapshot = IT
      }
      clearMarks() {
        this.newSlots.clear()
      }
      isNew(TT) {
        return this.newSlots.has(TT)
      }
    }
    const kz = (TT, oT, IT) => ({
      button: oT,
      shiftKey: IT,
      pageX: TT.clientX,
      pageY: TT.clientY,
      clientX: TT.clientX,
      clientY: TT.clientY,
      pointerType: "mouse"
    });

    function Wz(TT) {
      const [oT, IT] = (0, zT.useState)(TT);
      return TT && !oT && IT(!0), (0, zT.useEffect)((() => {
        if (oT) return;
        let TT = !0;
        const iT = () => {
            TT && (TT = !1, IT(!0))
          },
          zT = "function" === typeof window.requestIdleCallback,
          kT = zT ? window.requestIdleCallback(iT, {
            timeout: 2e3
          }) : void 0,
          WT = setTimeout(iT, zT ? 2e3 : 1e3);
        return () => {
          TT = !1, clearTimeout(WT), void 0 !== kT && window.cancelIdleCallback(kT)
        }
      }), [oT]), oT
    }
    const Xz = (0, zT.memo)((function(TT) {
      var oT;
      let {
        show: IT,
        onOpen: iT,
        onClose: kT,
        variation: XT
      } = TT;
      const DT = (0, zT.useRef)(null),
        LT = (0, zT.useRef)(null),
        xT = function(TT) {
          const [oT, IT] = (0, zT.useState)(!0), [iT, kT] = (0, zT.useState)(!1), WT = (0, zT.useRef)(null), XT = (0, zT.useRef)(null), FT = (0, BT.g)("_shield"), ST = (0, zT.useRef)(null), DT = (0, BT.g)("_health"), LT = (0, zT.useRef)(null);

          function xT(TT) {
            const oT = Date.now() + TT;
            oT < XT.current || (IT(!1), clearTimeout(WT.current), XT.current = oT, WT.current = setTimeout((() => {
              IT(!0)
            }), TT))
          }
          return (0, zT.useEffect)((() => {
            xT(JI);
            const TT = cT.h.subscribe("requestingPlayVideoAd", (() => {
              xT(JI)
            }));
            return () => {
              clearTimeout(WT.current), cT.h.unsubscribe(TT)
            }
          }), []), (0, zT.useEffect)((() => {
            (ST.current > FT || LT.current > DT) && xT(6e4), ST.current = FT, LT.current = DT
          }), [FT, DT]), (0, zT.useEffect)((() => {
            let oT = null;
            return TT ? oT = setTimeout((() => {
              kT(!0)
            }), 250) : kT(!1), () => {
              clearTimeout(oT)
            }
          }), [TT]), oT && iT
        }(IT);
      (0, RT.i)(hI.d, null);
      const KT = (0, hI.m)(),
        MT = KT.some((TT => TT.panel)),
        rT = (0, vT.d)("inventory", (TT => null !== TT.chest && (null !== TT.chest.ironChest || Qi(TT.chest.numSlots)))),
        AT = Wz(IT),
        gT = Wz(IT),
        [hT, wT] = (0, zT.useState)([]),
        mT = (0, zT.useCallback)((TT => {
          wT((oT => oT.filter((oT => oT.id !== TT))))
        }), []),
        eT = (0, zT.useRef)(null),
        ET = (0, zT.useRef)(0),
        fT = (0, zT.useCallback)((() => {
          eT.current && (ET.current = eT.current.scrollTop), kT()
        }), [kT]),
        CT = (0, BT.g)("inventoryItemsMoveable"),
        jT = (0, BT.g)("canCraft"),
        {
          clientEscMenuOptions: JT
        } = (0, nT.k)(["clientEscMenuOptions"]),
        UT = (0, zT.useRef)(null);
      UT.current || (UT.current = new zz(FT.gameBridge.latest("inventory").player));
      const YT = UT.current,
        {
          draggedDomRef: QT,
          draggedInfoRef: OT,
          specialItemRef: HT,
          hoverInfoDomRef: qT,
          longHoldSplitInfoRef: ZT,
          currHoveredIdx: lT,
          currHoveredDisplayInfo: sT,
          displayDraggedItemName: tT,
          forceRerenderIfVisible: GT,
          removeDraggedInfoRef: pT,
          checkDraggedItemConsistencyWithInven: bT,
          refreshDraggedAttributes: yT,
          swapSlots: NT,
          getPointerDownForIdx: PT,
          getPointerUpForIdx: dT,
          getSetHovering: VT,
          setCurrHoveredDisplayInfo: To,
          moveFollowerTo: oo
        } = iz({
          show: IT,
          close: fT,
          canCraft: jT,
          variation: XT,
          inventoryItemsMoveable: CT,
          setCraftFlyAnims: wT
        });
      (0, zT.useEffect)((() => {
        const TT = !IT && null !== FT.gameBridge.latest("inventory").chest;
        if (TT && FT.gameBridge.send("closeChest", null), IT || (YT.clearMarks(), VT(null)(!1)), TT) {
          uI.d.play("chestClose", 1).rate(.8 + .4 * Math.random())
        }
      }), [IT]), (0, vT.c)("chestToggled", (TT => {
        if (TT ? iT() : IT && fT(), TT) {
          uI.d.play("chestOpen", 1).rate(.8 + .4 * Math.random())
        }
      }));
      const Io = (0, bo.o)();
      (0, vT.c)("inventory", (TT => {
        let {
          player: oT
        } = TT;
        var iT, zT, kT;
        (YT.update(oT, !IT && Io.shown), HT.current) && (HT.current = (zT = HT.current, kT = null !== (iT = oT[HT.current.idx]) && void 0 !== iT ? iT : null, Vi(zT, kT) ? (zT.attributes = kT.attributes, null !== kT.amount && zT.amount > kT.amount && (zT.amount = kT.amount), zT) : null));
        yT(), null !== lT && VT(lT)(!0), GT()
      })), (0, zT.useEffect)((() => (FT.gameBridge.send("setInventoryOpen", IT), () => {
        FT.gameBridge.send("setInventoryOpen", !1)
      })), [IT]);
      const io = (TT, oT) => {
        if (TT === CI.g) return void(TT => {
          const oT = HT.current;
          if (!oT || null === (0, EI.h)(FT.gameBridge.latest("inventory"), oT.idx)) return;
          const IT = TT ? Math.max(oT.amount, 1) : 1,
            iT = oT.amount - IT;
          if (!FT.gameBridge.send("removeInventoryItem", {
              slot: oT.idx,
              amount: IT,
              drop: !0
            })) return;
          const zT = HT.current;
          zT && (zT.amount = Math.min(zT.amount, iT), zT.amount <= 0 && (HT.current = null)), GT()
        })(oT);
        const IT = null === TT ? null : (0, EI.h)(FT.gameBridge.latest("inventory"), TT);
        if (null !== IT) {
          var iT, zT, kT;
          const WT = oT && null !== (iT = IT.amount) && void 0 !== iT ? iT : 1;
          FT.gameBridge.send("removeInventoryItem", {
            slot: TT,
            amount: WT,
            drop: !0
          }), TT === (null === (zT = OT.current) || void 0 === zT ? void 0 : zT.idx) && (OT.current.amount -= WT, OT.current.amount <= 0 && pT(), GT()), TT === (null === (kT = HT.current) || void 0 === kT ? void 0 : kT.idx) && (HT.current = null, GT())
        }
      };
      (0, vT.c)("inventoryDropRequested", (TT => {
        IT && lT !== CI.g && io(lT, TT)
      }));
      const zo = (TT, oT) => {
        let IT = oT;
        if (oT === CI.g) {
          if (!HT.current) return;
          IT = HT.current.idx
        }
        const iT = NT(TT, IT);
        if (iT && OT.current && (OT.current.idx === IT ? OT.current.idx = TT : OT.current.idx === TT && (OT.current.idx = IT)), iT && oT === CI.g) {
          const TT = (0, EI.h)(FT.gameBridge.latest("inventory"), IT);
          HT.current = TT ? {
            idx: IT,
            name: TT.name,
            attributes: TT.attributes,
            amount: TT.amount
          } : null
        }
        GT()
      };
      (0, vT.c)("numberKeyPressed", (TT => {
        null !== lT && IT && zo(TT - 1, lT)
      })), (0, zT.useEffect)((() => {
        IT || (HT.current = null, pT(), To(null))
      }), [IT, pT, To, HT]);
      const ko = HT.current;
      (0, zT.useEffect)((() => {
        lT === CI.g && VT(CI.g)(!0)
      }), [ko, lT, VT]);
      const Wo = () => {
        bT(), yT(), GT()
      };
      (0, vT.c)("chestRefreshed", Wo), (0, vT.c)("inventorySynced", Wo);
      const [Xo, Bo] = (0, zT.useState)(new Map), Fo = null !== (oT = Xo.get(XT)) && void 0 !== oT ? oT : null, So = (TT, oT) => {
        Bo((IT => {
          const iT = IT.get(TT);
          return iT && iT.name === oT.name && iT.nS === oT.nS ? IT : new Map(IT).set(TT, oT)
        }))
      };
      (0, RT.g)("craftingRecipesEdited", (() => {
        GT()
      })), (0, RT.g)(Wi.b, (TT => {
        let {
          variation: oT,
          itemName: IT
        } = TT;
        So(oT, {
          name: IT,
          nS: 0
        })
      }));
      const [Do, Lo] = (0, zT.useState)(null), [co, Ko] = (0, zT.useState)(null);
      (0, vT.c)("enchantingTableOpened", (TT => {
        let {
          position: oT,
          blockName: IT
        } = TT;
        Lo(oT), Ko(IT)
      }));
      const [Mo, ro] = (0, zT.useState)(""), [Ao, go] = (0, zT.useState)(null);
      (0, zT.useEffect)((() => {
        IT && eT.current && (eT.current.scrollTop = ET.current)
      }), [IT]);
      return (TT => {
        const oT = (0, zT.useRef)(TT);
        oT.current = TT, (0, zT.useEffect)((() => {
          if (!TT.show) return;
          const IT = (TT, IT, iT, zT) => {
              const {
                getPointerDownForIdx: kT,
                getPointerUpForIdx: WT
              } = oT.current;
              kT(TT)(kz(IT, iT, zT)), WT(TT)(kz(IT, iT, zT))
            },
            iT = {
              primary: (TT, oT) => {
                IT(TT, oT, 0, !1)
              },
              secondary: (TT, oT) => {
                IT(TT, oT, 2, !1)
              },
              quickMove: (TT, oT) => {
                IT(TT, oT, 0, !0)
              },
              dropHeld: (TT, IT) => {
                oT.current.getPointerDownForIdx(CI.c)(kz(IT, TT ? 0 : 2, !1))
              },
              dropSlot: (TT, IT) => {
                oT.current.dropFromIdx(TT, IT)
              },
              swapWithHotbar: (TT, IT) => {
                oT.current.swapWithHotbar(TT, IT)
              },
              cancel: () => {
                oT.current.removeDraggedInfoRef()
              },
              isHolding: () => !!oT.current.draggedInfoRef.current,
              hasItemAt: TT => {
                const {
                  draggedInfoRef: IT,
                  specialItemRef: iT
                } = oT.current;
                if (TT === CI.g) return !!iT.current;
                const zT = (0, EI.h)(FT.gameBridge.latest("inventory"), TT);
                return !!zT && (0, sI.h)(TT, (0, EI.b)(zT), [IT.current, iT.current]).shown
              },
              hover: (TT, IT) => {
                const {
                  moveFollowerTo: iT,
                  getSetHovering: zT
                } = oT.current;
                iT(IT.clientX, IT.clientY), zT(null !== TT && void 0 !== TT ? TT : void 0)(null !== TT, void 0, {
                  pageX: IT.clientX,
                  pageY: IT.clientY
                })
              },
              moveTo: TT => {
                oT.current.moveFollowerTo(TT.clientX, TT.clientY)
              },
              close: () => {
                oT.current.close()
              }
            };
          return (0, wI.n)(iT)
        }), [TT.show])
      })({
        show: IT,
        close: fT,
        draggedInfoRef: OT,
        specialItemRef: HT,
        getPointerDownForIdx: PT,
        getPointerUpForIdx: dT,
        getSetHovering: VT,
        moveFollowerTo: oo,
        removeDraggedInfoRef: pT,
        dropFromIdx: io,
        swapWithHotbar: zo
      }), (0, zT.useEffect)((() => {
        cT.h.XM("inventoryDraggedItemUpdated", {
          draggedInfo: OT.current,
          specialItemInfo: HT.current,
          setHovered: VT,
          pointerDown: PT,
          pointerUp: dT,
          variation: jT ? XT : void 0,
          craftFlyAnims: hT
        })
      })), (0, ST.jsxs)(aT.c, {
        show: IT,
        style: {
          touchAction: IT ? "none" : void 0
        },
        children: [OT.current && (0, ST.jsx)(aI, {
          draggedInfo: OT.current,
          toAddRef: QT
        }), OT.current && tT && (0, ST.jsx)(YI, {
          className: "DraggedInvenItemName",
          displayInfo: Iz(OT.current),
          domRef: null
        }), !OT.current && sT && (0, ST.jsx)(YI, {
          displayInfo: sT,
          domRef: qT
        }), ZT.current && OT.current && (0, ST.jsx)(QI, {
          info: ZT.current,
          draggedInfo: OT.current
        }), hT.map((TT => (0, ST.jsx)(fI.e, {
          anim: TT,
          onComplete: mT
        }, TT.id))), (0, ST.jsx)(WT.e, {
          show: IT,
          className: "InventoryBackgroundScreen",
          globallyUniqueKey: "Inventory",
          close: fT,
          togglePointerLock: !1,
          closeOnPressBackground: !1,
          preventContextMenu: !0,
          pointerDown: PT(CI.c),
          pointerUp: dT(CI.c),
          doGameplayStartStopOnShow: !0
        }), AT && (0, ST.jsxs)("div", {
          className: "EntireInventoryWrapper",
          children: [(0, ST.jsx)("div", {
            ref: DT,
            className: "InventoryAdOuter",
            children: (0, ST.jsx)(vI.c, {
              info: {
                adType: "leaderboard",
                adId: 6,
                adAlias: "inventory"
              },
              sizeInfo: {
                parentRef: DT
              },
              verticalAlign: "start",
              showing: IT && xT,
              extraContrastBackgroundBox: "top",
              noFillShowBloxdAdProbability: 0,
              autoRefreshMode: "none"
            })
          }), (0, ST.jsxs)("div", {
            className: "InventoryWrapper",
            children: [(0, ST.jsxs)("div", {
              className: xo()("Inventory", {
                WithPanelButtons: MT,
                WideChestOpen: rT
              }),
              children: [(0, ST.jsx)("div", {
                className: "InventoryFiller"
              }), (0, ST.jsx)(RI, {
                show: IT,
                buttons: KT
              }), (0, ST.jsxs)("div", {
                className: "InvenBody",
                children: [(0, ST.jsx)(qi, {
                  variation: XT,
                  canCraft: jT,
                  show: IT,
                  creativeMounted: gT,
                  specialItemRef: HT,
                  draggedInfo: OT.current,
                  getSetHovering: VT,
                  getPointerDownForIdx: PT,
                  getPointerUpForIdx: dT,
                  enchantingTablePosition: Do,
                  enchantingTableBlockName: co,
                  selectedCraftable: Fo,
                  dispatchSelectedCraftable: TT => {
                    So(XT, TT)
                  },
                  creativeScrollDiv: eT,
                  creativeSearchVal: Mo,
                  setCreativeSearchVal: ro,
                  creativeCategory: Ao,
                  setCreativeCategory: go,
                  onCraft: function(TT, oT) {
                    let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    if (bT(), (TT || IT.length > 0) && wT((oT => {
                        const iT = [...oT],
                          zT = oT.filter((TT => "ingredient" === TT.kind)).length;
                        for (const TT of IT.slice(0, Math.max(0, 24 - zT))) iT.push({
                          id: (0, fI.h)(),
                          ...TT,
                          to: TT.to
                        });
                        return TT && iT.push({
                          id: (0, fI.h)(),
                          ...TT,
                          to: (0, EI.d)(TT.XS)
                        }), iT
                      })), null !== oT) {
                      var iT;
                      const TT = FT.gameBridge.latest("inventory");
                      (0, uT.vb)(null === (iT = (0, EI.h)(TT, oT)) || void 0 === iT ? void 0 : iT.name) ? PT(oT)({
                        button: 0,
                        shiftKey: !0
                      }): NT(oT, TT.selectedSlot)
                    }
                  }
                }), (0, ST.jsx)(yi, {
                  draggedInfo: OT.current,
                  specialItemInfo: HT.current,
                  craftFlyAnims: hT,
                  getSetHovering: VT,
                  getPointerDownForIdx: PT,
                  getPointerUpForIdx: dT,
                  variation: XT,
                  canCraft: jT,
                  isNewSlot: TT => JT.showNewItemIndicator && YT.isNew(TT)
                })]
              })]
            }), (0, ST.jsx)("div", {
              className: "InventoryAdOuter",
              children: (0, ST.jsx)("div", {
                ref: LT,
                className: "InventoryAd",
                children: (0, ST.jsx)("div", {
                  className: "InventoryAdInner"
                })
              })
            })]
          })]
        })]
      })
    }));
    var Bz = IT(1398),
      Fz = IT(139);
    const Sz = (0, zT.memo)((function(TT) {
      let {
        show: oT,
        onOpen: IT,
        onClose: iT
      } = TT;
      const kT = (0, zT.useRef)(0),
        XT = () => (0, Bz.f)() && !(0, Bz.n)() && kT.current <= 2;
      oT = XT() && oT;
      const BT = () => {
        kT.current++, iT()
      };
      (0, RT.g)("ctrlCrouchWithoutFullscreen", (() => {
        XT() && IT()
      })), (0, RT.g)("displaymodeFullscreenChange", (TT => {
        oT && TT && BT()
      }));
      const FT = "crazygames" === Fz.p;
      return (0, ST.jsx)(WT.e, {
        close: BT,
        escDoesExit: !0,
        show: oT,
        togglePointerLock: !1,
        globallyUniqueKey: "CantCtrlCrouchIfNotFullscreenComp",
        children: (0, ST.jsxs)("div", {
          className: "CantCtrlCrouchIfNotFullscreenComp SmallTextBold",
          children: [(0, ST.jsx)("div", {
            className: "CantCtrlCrouchHeader",
            children: "Go fullscreen to crouch with ctrl"
          }), FT && (0, ST.jsx)("div", {
            className: "CantCtrlCrouchInstructions SmallTextLight",
            children: "Press the crazygames full screen button"
          }), (0, ST.jsx)("div", {
            className: "CantCtrlCrouchSubtext SmallTextLight",
            children: "(Otherwise I can't stop CTRL+W closing the window!)"
          }), (0, ST.jsxs)("div", {
            className: "CantCtrlCrouchButtonsContainer",
            children: [!FT && (0, ST.jsx)(xT.m, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                (0, Bz.s)(), BT()
              },
              children: (0, ST.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Go Fullscreen"
              })
            }), (0, ST.jsx)(xT.C, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                BT()
              },
              children: (0, ST.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Nevermind"
              })
            })]
          })]
        })
      })
    }));
    var Dz = IT(3170),
      Lz = IT(3184),
      xz = IT(1325),
      cz = IT(3149),
      Kz = IT(1332),
      Mz = IT(35566),
      rz = IT(3155),
      Az = IT(3163);

    function gz(TT, oT) {
      return (0, Mz.g)(!0, TT, oT) ? () => {
        !async function(TT) {
          await cz.b.refresh();
          const {
            data: oT,
            failed: IT
          } = cz.b.getState();
          if (null === oT || IT) return;
          const iT = cz.b.getExclusion(TT);
          if ("blocked" === iT) return;
          const zT = null === iT;
          xz.NotificationProvider.showCustomPopup({
            body: oT => {
              const IT = IT => ({
                text: rz.j[IT].text,
                onClick: () => {
                  oT(), (0, Az.g)(IT, TT, null)
                }
              });
              return (0, ST.jsx)(Kz.l, {
                title: zT ? "socialBar:ignoreOrBlockAfterReport" : "socialBar:blockAfterReport",
                textOpts: {
                  title: {
                    playerName: TT
                  }
                },
                secondary: zT ? IT("ignore") : void 0,
                confirm: IT("block"),
                cancel: {
                  text: "socialBar:notNow",
                  onClick: oT
                },
                destructive: !0
              })
            },
            disableExitButton: !0,
            unlockPointerKey: "exclusionAfterReport"
          })
        }(TT)
      } : null
    }
    IT(3177);
    const hz = (0, zT.memo)((function(TT) {
        let {
          show: oT,
          onOpen: IT,
          onClose: iT
        } = TT;
        const [kT, XT] = (0, zT.useState)(""), [BT, DT] = (0, zT.useState)(""), [LT, xT] = (0, zT.useState)(null), [cT, KT] = (0, zT.useState)(null), MT = (0, vT.f)("hiddenPlayerNames"), rT = {
          kind: "worldCodeLine",
          onSubmit: (TT, oT) => {
            iT(), FT.gameBridge.send("reportWorldCodeChat", {
              chatMsgId: cT,
              QF: TT,
              details: oT
            })
          }
        }, AT = {
          kind: "player",
          shownPlayerName: (0, oo.f)(kT, MT),
          onSubmit: (TT, oT) => {
            iT(), (0, Lz.e)({
              playerId: BT,
              playerName: kT,
              chatMsgId: cT,
              policyId: TT,
              details: oT,
              onAccepted: gz(kT, MT)
            })
          }
        };
        return (0, RT.g)("OpenReportMenu", (TT => {
          let {
            playerEId: oT,
            playerName: iT,
            US: zT,
            serverChatMsgId: kT
          } = TT;
          DT(oT), XT(iT), xT(zT), KT(kT), IT()
        })), (0, ST.jsx)(WT.e, {
          show: oT,
          close: iT,
          padShowsHud: !0,
          togglePointerLock: !1,
          escDoesExit: !0,
          centerChildren: !1,
          className: "MakeReportBackgroundScreen",
          globallyUniqueKey: "MakeReportComponent",
          children: (0, ST.jsx)("div", {
            className: "ReportMenu",
            children: oT && (0, ST.jsx)(Dz.c, {
              reported: null === BT ? rT : AT,
              chatMessage: LT,
              inGame: !0,
              onCancel: iT
            })
          })
        })
      })),
      wz = (0, zT.memo)((function(TT) {
        let {
          show: oT,
          onOpen: IT,
          onClose: iT
        } = TT;
        const [kT, XT] = (0, zT.useState)(null), [BT, DT] = (0, zT.useState)(0);
        (0, RT.g)("OpenDiscordReportBox", (TT => {
          FT.gameBridge.send("requestDiscordReportKey", TT), DT(0), IT()
        }));
        return (0, RT.g)("setDiscordReportKey", (TT => {
          XT(TT)
        })), (0, ST.jsx)(WT.e, {
          show: oT,
          close: () => {
            iT(), XT(null), DT(0)
          },
          padShowsHud: !0,
          togglePointerLock: !1,
          escDoesExit: !0,
          centerChildren: !1,
          className: "MakeDiscordReportBackgroundScreen",
          globallyUniqueKey: "MakeDiscordReportComponent",
          children: (0, ST.jsxs)("div", {
            className: "ReportKeyBox",
            children: [(0, ST.jsx)("div", {
              className: "ReportKeyBoxHeader SmallTextBold",
              children: "Report via Discord"
            }), (0, ST.jsxs)("div", {
              className: "ReportKeyBoxDescription SmallTextLight",
              children: ["Hacking/auto-clicking and explicit build reports must be made via discord.", (0, ST.jsx)("br", {}), (0, ST.jsx)("br", {}), "1. Join the Bloxd discord server", " ", (0, ST.jsx)("a", {
                href: "https://discord.gg/playbloxd",
                target: "_blank",
                rel: "noreferrer",
                children: "here"
              }), ".", (0, ST.jsx)("br", {}), "2. Copy the Report Key below", (0, ST.jsx)("br", {}), "3. Raise a report ticket (and include the report key!)", (0, ST.jsx)("div", {
                className: "ReportKeyBoxSubheader SmallTextBold",
                children: "Report Key:"
              })]
            }), (0, ST.jsxs)("div", {
              className: "ReportKeyInnerWrapper",
              children: [(0, ST.jsx)("div", {
                className: "ReportKeyInner",
                children: null !== kT && void 0 !== kT ? kT : "Loading report key..."
              }), (0, ST.jsx)(xT.e, {
                className: "ReportKeyCopyButton",
                onClick: () => {
                  navigator.clipboard.writeText(kT).catch((TT => {
                    console.error("Failed to copy report key:", TT)
                  })), DT(Date.now())
                },
                disabled: Date.now() - BT < 1e3 || !kT,
                children: Date.now() - BT < 1e3 ? "Copied" : "Copy"
              })]
            })]
          })
        })
      }));
    var mz = IT(1253);
    const ez = {
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
      Rz = (0, zT.memo)((function(TT) {
        let {
          show: oT,
          onOpen: IT,
          onClose: iT
        } = TT;
        const [kT, XT] = (0, zT.useState)(null), BT = (0, zT.useRef)(0), DT = (0, zT.useRef)(null), {
          t: LT
        } = (0, yT.t)();
        (0, RT.g)("EditCustomLobbyBlock", (TT => {
          let {
            pos: oT
          } = TT;
          XT(oT), null !== oT && IT(), DT.current.scrollTo(0, BT.current)
        }));
        const xT = TT => {
          FT.gameBridge.send("setCustomLobbyBlock", {
            pos: kT,
            blockName: TT
          }), iT()
        };
        return (0, ST.jsx)(WT.e, {
          className: "CustomLobbyBlockEditorOuter",
          close: iT,
          escDoesExit: !0,
          show: oT,
          togglePointerLock: !1,
          globallyUniqueKey: "CustomLobbyBlockEditor",
          children: (0, ST.jsx)("div", {
            className: "CustomLobbyBlockEditor",
            ref: DT,
            onScroll: () => {
              BT.current = DT.current.scrollTop
            },
            children: (0, ST.jsx)("div", {
              className: "CustomLobbyBlockGameContainer",
              children: Object.entries(ez).map((TT => {
                let [oT, IT] = TT;
                return (0, ST.jsxs)("div", {
                  className: "CustomLobbyBlockGame",
                  children: [(0, ST.jsx)("h2", {
                    className: "CustomLobbyBlockGameTitle",
                    children: LT(oT)
                  }), (0, ST.jsx)("div", {
                    className: "CustomLobbyBlockCategoryContainer",
                    children: Object.entries(IT).map((TT => {
                      let [oT, {
                        tooltip: IT,
                        blocks: iT
                      }] = TT;
                      return (0, ST.jsxs)("div", {
                        className: "CustomLobbyBlockCategory",
                        children: [(0, ST.jsxs)("h3", {
                          className: "CustomLobbyBlockCategoryTitle",
                          children: [LT(oT), (0, ST.jsx)(pT.d, {
                            hoverInfo: LT(IT),
                            className: "CustomLobbyBlockTooltip"
                          })]
                        }), (0, ST.jsx)("div", {
                          className: "CustonLobbyBlockContainer",
                          children: iT.map((TT => (0, ST.jsx)(uz, {
                            blockName: TT,
                            selectBlock: xT
                          }, TT)))
                        })]
                      }, oT)
                    }))
                  })]
                }, oT)
              }))
            })
          })
        })
      })),
      uz = (0, zT.memo)((function(TT) {
        var oT;
        let {
          blockName: IT,
          selectBlock: iT
        } = TT;
        const zT = (0, mi.d)(IT),
          kT = null !== (oT = void 0 === zT ? void 0 : (0, wi.displayNameOf)(zT)) && void 0 !== oT ? oT : IT,
          WT = void 0 === zT ? void 0 : (0, wi.descriptionOf)(zT);
        return (0, ST.jsx)(pT.e, {
          tooltipInner: (0, ST.jsxs)("div", {
            className: "CustomLobbyBlockNameTooltip",
            children: [(0, ST.jsx)("div", {
              className: "CustomLobbyBlockName",
              children: (0, ST.jsx)(eT.c, {
                text: kT
              })
            }), WT && (0, ST.jsx)("div", {
              className: "CustomLobbyBlockDescription",
              children: (0, ST.jsx)(eT.c, {
                text: WT
              })
            })]
          }),
          children: (0, ST.jsx)("div", {
            className: "CustomLobbyBlockButton",
            onClick: () => iT(IT),
            children: (0, ST.jsx)(eI.c, {
              itemName: IT,
              amount: 1
            })
          })
        }, IT)
      }));
    var vz = IT(2610),
      Ez = IT(3800),
      fz = IT(35795);

    function Cz() {
      const TT = (0, vT.f)("itemInfo");
      return (0, zT.useMemo)((() => function(TT) {
        return {
          getDefaultItemStat(oT, IT) {
            var iT;
            const zT = TT[oT];
            return "description" === IT ? null === zT || void 0 === zT ? void 0 : zT.description : null !== (iT = null === zT || void 0 === zT ? void 0 : zT.displayName) && void 0 !== iT ? iT : oT
          }
        }
      }(TT)), [TT])
    }
    const jz = (0, zT.memo)((function(TT) {
        var oT, IT, iT, kT, XT, BT, FT, DT, LT, xT, cT, KT, rT, AT, gT, hT, wT, mT, eT, uT, vT, ET, fT;
        let {
          togglePointerLock: CT,
          show: jT,
          onOpen: JT,
          onClose: UT
        } = TT;
        const {
          t: aT
        } = (0, yT.t)(), YT = Cz(), QT = (0, zT.useRef)(null), OT = (0, zT.useRef)(Ez.d.MobHungerLevel.Hungry), HT = (0, zT.useRef)(null), nT = (0, vz.c)(), qT = (0, zT.useRef)(null), ZT = (0, zT.useRef)(null), lT = QT.current;
        (0, zT.useEffect)((() => {
          if (!jT) return;
          const TT = fz.b.openPet(qT.current);
          return ZT.current = TT, () => {
            TT.close(), ZT.current = null
          }
        }), [jT]), (0, zT.useEffect)((() => {
          jT && lT && ZT.current.show(function(TT) {
            var oT;
            let {
              mobType: IT,
              mobSettings: iT
            } = TT;
            return {
              mobType: IT,
              variation: null !== (oT = iT.variation) && void 0 !== oT ? oT : "default",
              metaInfo: iT.metaInfo,
              tamed: !(0, Yi.K)(iT.ownerDbId)
            }
          }(lT))
        }), [jT, lT]), (0, zT.useEffect)((() => {
          const TT = () => {
            var TT;
            const oT = Ez.d.getMobHungerLevel(null === (TT = QT.current) || void 0 === TT ? void 0 : TT.mobSettings.petInfo.lastFedAt);
            if (oT !== OT.current && (OT.current = oT, nT()), HT.current) {
              var IT;
              const TT = Date.now(),
                oT = Ez.d.getNextStateAt(null === (IT = QT.current) || void 0 === IT ? void 0 : IT.mobSettings.petInfo.lastFedAt);
              let iT = Math.floor((oT - TT) / 1e3),
                zT = "";
              if (iT > 3600) {
                zT += Math.floor(iT / 60 / 60).toString().padStart(2, "0"), zT += ":", iT %= 3600
              }
              const kT = iT % 60;
              zT += Math.floor(iT / 60).toString().padStart(2, "0"), zT += ":", zT += kT.toString().padStart(2, "0"), HT.current.textContent = zT
            }
          };
          TT();
          const oT = setInterval(TT, 250);
          return () => {
            clearInterval(oT)
          }
        }), [lT, nT]), (0, RT.g)("showPetUi", (TT => {
          let {
            mobType: oT,
            mobSettings: IT
          } = TT;
          QT.current = {
            mobType: oT,
            mobSettings: IT
          }, jT || JT()
        }));
        const sT = null === (oT = QT.current) || void 0 === oT ? void 0 : oT.mobSettings.health,
          tT = null === (IT = QT.current) || void 0 === IT ? void 0 : IT.mobSettings.maxHealth,
          GT = Ez.d.getFriendshipLevelInfo(null !== (iT = null === (kT = QT.current) || void 0 === kT ? void 0 : kT.mobSettings.petInfo.friendshipPoints) && void 0 !== iT ? iT : 0);
        return (0, ST.jsx)(WT.e, {
          className: "PetUIOuter",
          close: UT,
          escDoesExit: !0,
          show: jT,
          togglePointerLock: CT,
          forcePointerUnlock: jT,
          globallyUniqueKey: "PetUI",
          children: (0, ST.jsx)("div", {
            className: "PetUI",
            children: (0, ST.jsxs)("div", {
              className: "PetUIContainer",
              children: [(0, ST.jsxs)("div", {
                className: "PetUILeftSideContainer",
                children: [(0, ST.jsx)("div", {
                  className: "PetUITitle",
                  children: null !== (XT = null === (BT = QT.current) || void 0 === BT ? void 0 : BT.mobSettings.name) && void 0 !== XT ? XT : "Your Pet"
                }), (0, ST.jsx)("div", {
                  className: "PetUICanvasContainer",
                  ref: qT
                })]
              }), (0, ST.jsxs)("div", {
                className: "PetUIInformation",
                children: [!(0, Yi.K)(null === (FT = QT.current) || void 0 === FT ? void 0 : FT.mobSettings.petInfo.friendshipPoints) && (0, ST.jsxs)("div", {
                  className: "PetUIFriendshipPoints",
                  children: [(0, ST.jsx)("div", {
                    className: "PetUIFriendshipPointsTitle",
                    children: aT("mobAiPlugin:friendshipTitle")
                  }), (0, ST.jsx)("div", {
                    className: "PetUIFriendshipHearts",
                    children: Ez.d.getIconsFromFriendshipPoints(null !== (DT = QT.current.mobSettings.petInfo.friendshipPoints) && void 0 !== DT ? DT : 0).map(((TT, oT) => (0, ST.jsx)("div", {
                      className: "PetUIFriendshipHeart",
                      children: (0, ST.jsx)(eI.c, {
                        itemName: TT,
                        amount: 1
                      })
                    }, oT)))
                  }), (0, ST.jsx)("div", {
                    className: "PetUIFriendshipBar",
                    children: (0, ST.jsxs)("div", {
                      className: "PetUIFriendshipBarBackground",
                      children: [(0, ST.jsx)("div", {
                        className: "PetUIFriendshipBarForeground",
                        style: {
                          transform: `scaleX(${GT.totalPointsForNextLevel>0?Math.max(GT.pointsIntoCurrentLevel/GT.totalPointsForNextLevel,0):1})`,
                          transformOrigin: "left center"
                        }
                      }), (0, ST.jsx)("div", {
                        className: "PetUIFriendshipBarText",
                        children: GT.totalPointsForNextLevel > 0 ? ` ${Math.ceil(GT.pointsIntoCurrentLevel)}/${Math.ceil(GT.totalPointsForNextLevel)}` : Math.ceil(GT.pointsIntoCurrentLevel)
                      })]
                    })
                  })]
                }), (0, ST.jsxs)("div", {
                  className: "PetUIHungry",
                  children: [(0, ST.jsx)("div", {
                    className: "PetUIHungryTitle",
                    children: aT("mobAiPlugin:hungerTitle")
                  }), (0, ST.jsx)("div", {
                    className: "PetUIHungryCurrent",
                    children: Ez.d.hungerLevelIcons[OT.current].map(((TT, oT) => (0, ST.jsx)("div", {
                      className: "PetUIHungryIcon",
                      children: (0, ST.jsx)(eI.c, {
                        itemName: TT,
                        amount: 1
                      })
                    }, oT)))
                  }), (0, ST.jsxs)("div", {
                    className: "PetUIHungryLevel",
                    children: [aT(Ez.d.hungerLevelTranslations[OT.current].translationKey), OT.current !== Ez.d.MobHungerLevel.Starving && !(0, Yi.K)(null === (LT = QT.current) || void 0 === LT ? void 0 : LT.mobSettings.petInfo.lastFedAt) && (0, ST.jsxs)("div", {
                      className: "PetUIHungryNext",
                      children: [aT("mobAiPlugin:nextFeedIn", {
                        state: aT(Ez.d.hungerLevelTranslations[OT.current + 1].translationKey)
                      }), ":", " ", (0, ST.jsx)("span", {
                        ref: HT
                      })]
                    })]
                  })]
                }), (0, ST.jsx)(pT.e, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, ST.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: aT("mobAiPlugin:healthTooltip")
                  }),
                  children: (0, ST.jsxs)("div", {
                    className: xo()("PetUIQuickStatsItem", {
                      Disabled: (0, Yi.K)(sT) || (0, Yi.K)(tT)
                    }),
                    children: [(0, ST.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, ST.jsx)(eI.c, {
                        itemName: "Health",
                        amount: 1
                      })
                    }), (0, ST.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (0, Yi.K)(sT) || (0, Yi.K)(tT) ? "" : (0, ST.jsxs)(ST.Fragment, {
                        children: [Math.ceil(sT), (0, ST.jsxs)("span", {
                          className: "PetUIQuickStatsValueMax",
                          children: ["/", Math.ceil(tT)]
                        })]
                      })
                    })]
                  })
                }), (0, ST.jsx)(pT.e, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, ST.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: aT("mobAiPlugin:attackDamageTooltip")
                  }),
                  children: (0, ST.jsxs)("div", {
                    className: xo()("PetUIQuickStatsItem", {
                      Disabled: (0, Yi.K)(null === (xT = QT.current) || void 0 === xT ? void 0 : xT.mobSettings.attackDamage) || QT.current.mobSettings.attackDamage <= 0
                    }),
                    children: [(0, ST.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, ST.jsx)(eI.c, {
                        itemName: "Iron Sword",
                        amount: 1
                      })
                    }), (0, ST.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (cT = QT.current) || void 0 === cT ? void 0 : cT.mobSettings.attackDamage) || ""
                    })]
                  })
                }), (0, ST.jsx)(pT.e, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, ST.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: aT("mobAiPlugin:secondaryAttackDamageTooltip")
                  }),
                  children: (0, ST.jsxs)("div", {
                    className: xo()("PetUIQuickStatsItem", {
                      Disabled: (0, Yi.K)(null === (KT = QT.current) || void 0 === KT ? void 0 : KT.mobSettings.secondaryAttackDamage) || QT.current.mobSettings.secondaryAttackDamage <= 0
                    }),
                    children: [(0, ST.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, ST.jsx)(eI.c, {
                        itemName: "Stone Crossbow",
                        amount: 1
                      })
                    }), (0, ST.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (rT = QT.current) || void 0 === rT ? void 0 : rT.mobSettings.secondaryAttackDamage) || ""
                    })]
                  })
                }), (0, ST.jsx)(pT.e, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, ST.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: aT("mobAiPlugin:speedTooltip")
                  }),
                  children: (0, ST.jsxs)("div", {
                    className: xo()("PetUIQuickStatsItem", {
                      Disabled: (0, Yi.K)(null === (AT = QT.current) || void 0 === AT ? void 0 : AT.mobSettings.baseRunningSpeed)
                    }),
                    children: [(0, ST.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, ST.jsx)(eI.c, {
                        itemName: "Speed",
                        amount: 1
                      })
                    }), (0, ST.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: null !== (gT = null === (hT = QT.current) || void 0 === hT || null === (wT = hT.mobSettings.baseRunningSpeed) || void 0 === wT ? void 0 : wT.toFixed(2)) && void 0 !== gT ? gT : ""
                    })]
                  })
                }), (0, ST.jsx)(pT.e, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, ST.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: aT("mobAiPlugin:saddledTooltip")
                  }),
                  children: (0, ST.jsxs)("div", {
                    className: xo()("PetUIQuickStatsItem", {
                      Disabled: "Saddled" !== (null === (mT = QT.current) || void 0 === mT ? void 0 : mT.mobSettings.metaInfo)
                    }),
                    children: [(0, ST.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, ST.jsx)(eI.c, {
                        itemName: "Saddle",
                        amount: 1
                      })
                    }), (0, ST.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: "Saddled" === (null === (eT = QT.current) || void 0 === eT ? void 0 : eT.mobSettings.metaInfo) ? (0, ST.jsx)(MT.e, {
                        name: "check"
                      }) : ""
                    })]
                  })
                }), !(0, Yi.K)(null === (uT = QT.current) || void 0 === uT ? void 0 : uT.mobSettings.tameInfo) && (0, ST.jsxs)(ST.Fragment, {
                  children: [(0, ST.jsxs)("div", {
                    className: "PetUIFood",
                    children: [(0, ST.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, ST.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, ST.jsx)(Uz, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:superlikedFoodTitle"
                          },
                          description: null,
                          tintColor: Ez.d.feedTextColours[Ez.d.MobFoodType.Superliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, ST.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: (0, ST.jsx)("div", {
                          className: "PetUIFoodItem",
                          children: QT.current.mobSettings.petInfo.superlikedFoodKnown ? (0, ST.jsx)(Jz, {
                            food: QT.current.mobSettings.petInfo.superlikedFood
                          }) : (0, ST.jsx)(Uz, {
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
                    }), (0, ST.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, ST.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, ST.jsx)(Uz, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:likedFoodTitle"
                          },
                          description: null,
                          tintColor: Ez.d.feedTextColours[Ez.d.MobFoodType.Liked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, ST.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (vT = QT.current.mobSettings.tameInfo.likedFoods) || void 0 === vT ? void 0 : vT.filter((TT => !QT.current.mobSettings.petInfo.superlikedFoodKnown || TT !== QT.current.mobSettings.petInfo.superlikedFood)).map((TT => (0, ST.jsx)(Jz, {
                          food: TT
                        }, TT)))
                      })]
                    }), (0, ST.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, ST.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, ST.jsx)(Uz, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:neutralFoodTitle"
                          },
                          description: null,
                          tintColor: Ez.d.feedTextColours[Ez.d.MobFoodType.Neutral],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, ST.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (ET = QT.current.mobSettings.tameInfo.neutralFoods) || void 0 === ET ? void 0 : ET.map((TT => (0, ST.jsx)(Jz, {
                          food: TT
                        }, TT)))
                      })]
                    }), (0, ST.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, ST.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, ST.jsx)(Uz, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:dislikedFoodTitle"
                          },
                          description: null,
                          tintColor: Ez.d.feedTextColours[Ez.d.MobFoodType.Disliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, ST.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (fT = QT.current.mobSettings.tameInfo.dislikedFoods) || void 0 === fT ? void 0 : fT.map((TT => (0, ST.jsx)(Jz, {
                          food: TT
                        }, TT)))
                      })]
                    })]
                  }), QT.current.mobSettings.tameInfo.levelUpBonuses && (0, ST.jsx)("div", {
                    className: "PetUIFeedDrops",
                    children: Array.from({
                      length: Ez.d.MAX_LEVEL + 1
                    }).map(((TT, oT) => {
                      const IT = oT;
                      if (0 === IT) return null;
                      const iT = QT.current.mobSettings.tameInfo.levelUpBonuses[IT],
                        zT = Ez.d.getBonusDisplayInfo(YT, QT.current.mobSettings, QT.current.mobType, iT);
                      return (0, ST.jsxs)("div", {
                        className: xo()("PetUIFeedDropContainer", {
                          Selected: IT === Ez.d.getFriendshipLevelInfo(QT.current.mobSettings.petInfo.friendshipPoints).level
                        }),
                        children: [(0, ST.jsx)("div", {
                          className: "PetUIFeedDropHearts",
                          children: Array.from({
                            length: IT
                          }).map(((TT, oT) => (0, ST.jsx)("div", {
                            className: "PetUIFeedDropHeart",
                            children: (0, ST.jsx)(eI.c, {
                              itemName: "Friendship",
                              amount: 1
                            })
                          }, `${IT}-${oT}`)))
                        }), (0, ST.jsx)("div", {
                          className: "PetUIFeedDropItems",
                          children: zT && (0, ST.jsx)(Uz, {
                            icon: zT.icon,
                            displayName: zT.displayName,
                            description: zT.description
                          })
                        })]
                      }, IT)
                    }))
                  })]
                })]
              })]
            })
          })
        })
      })),
      Jz = (0, zT.memo)((function(TT) {
        let {
          food: oT,
          includeDescription: IT = !1
        } = TT;
        const iT = Cz(),
          zT = iT.getDefaultItemStat(oT, "displayName"),
          kT = iT.getDefaultItemStat(oT, "description");
        return (0, ST.jsx)(Uz, {
          icon: oT,
          displayName: zT,
          description: IT ? kT : null
        })
      })),
      Uz = (0, zT.memo)((function(TT) {
        let {
          icon: oT,
          displayName: IT,
          description: iT,
          tintColor: zT,
          className: kT = "PetUIFoodItem"
        } = TT;
        return (0, ST.jsx)(pT.e, {
          delayHide: 0,
          delayShow: 0,
          tooltipInner: (0, ST.jsxs)("div", {
            className: "PetUIFoodItemTooltip",
            children: [(0, ST.jsx)("div", {
              className: "PetUIFoodItemName",
              children: (0, ST.jsx)(eT.c, {
                text: IT
              })
            }), iT && (0, ST.jsx)("div", {
              className: "PetUIFoodItemDescription",
              children: (0, ST.jsx)(eT.c, {
                text: iT
              })
            })]
          }),
          children: (0, ST.jsx)("div", {
            className: kT,
            children: (0, ST.jsx)(eI.c, {
              itemName: oT,
              amount: 1,
              tintColor: zT
            })
          })
        })
      }));
    var az = IT(3330),
      Yz = IT(1117),
      Qz = IT(1214),
      Oz = IT(35823),
      Hz = IT(35815),
      nz = IT(1007),
      qz = IT(2176);

    function Zz(TT) {
      let {
        peers: oT
      } = TT;
      const [IT, iT] = (0, zT.useState)(null), kT = (0, vT.f)("players");
      return (0, ST.jsx)("div", {
        className: "CodeEditorPresence",
        children: oT.map((TT => {
          var oT, zT;
          const WT = null !== (oT = null === (zT = kT.byId[TT.playerId]) || void 0 === zT ? void 0 : zT.cosmetics) && void 0 !== oT ? oT : {};
          return (0, ST.jsxs)("div", {
            className: xo()("PresenceIcon", {
              Viewer: !TT.isEditor
            }),
            style: {
              backgroundColor: TT.colour
            },
            onMouseEnter: () => {
              iT(TT.playerId)
            },
            onMouseLeave: () => {
              iT(null)
            },
            children: [(0, ST.jsx)(qz.b, {
              cosmetics: WT
            }), IT === TT.playerId && (0, ST.jsx)("div", {
              className: "PresenceTooltip",
              style: {
                backgroundColor: TT.colour
              },
              children: TT.playerName
            })]
          }, TT.playerId)
        }))
      })
    }
    var lz = IT(643),
      sz = IT(35808),
      tz = IT(35559),
      Gz = IT(35827);

    function pz(TT) {
      const oT = TT.split("/"),
        IT = [];
      for (let iT = 1; iT < oT.length; iT++) IT.push(oT.slice(0, iT).join("/"));
      return IT
    }

    function bz(TT) {
      return TT.slice(TT.lastIndexOf("/") + 1)
    }
    const yz = (0, zT.memo)((function(TT) {
      var oT;
      let {
        files: IT,
        activePath: iT,
        canEdit: kT,
        directoryLinked: WT,
        pluginNames: XT,
        activePluginName: BT,
        activePluginFile: FT,
        onSelect: DT,
        onSelectPlugin: LT,
        onCreate: cT,
        onRename: KT,
        onRenameFolder: rT,
        onDelete: AT,
        onToggleDirectorySync: gT,
        schematics: hT,
        onManageSchematic: wT
      } = TT;
      const {
        t: mT
      } = (0, yT.t)(), eT = null !== (oT = (0, Hz.c)(IT)) && void 0 !== oT ? oT : Qz.h, RT = Object.keys(IT), [uT, vT] = (0, zT.useState)((() => new Set)), ET = function(TT, oT, IT) {
        const iT = {
          folders: new Map,
          files: []
        };
        for (const WT of TT) {
          if (WT === oT) continue;
          let TT = iT;
          for (const oT of pz(WT)) {
            let IT = TT.folders.get(oT);
            IT || (IT = {
              folders: new Map,
              files: []
            }, TT.folders.set(oT, IT)), TT = IT
          }
          TT.files.push(WT)
        }
        const zT = [];
        TT.includes(oT) && zT.push({
          kind: "file",
          path: oT,
          name: bz(oT),
          depth: 0
        });
        const kT = (TT, oT) => {
          const iT = [...TT.folders.entries()].sort(((TT, oT) => {
            let [IT] = TT, [iT] = oT;
            return IT.localeCompare(iT)
          }));
          for (const [WT, XT] of iT) {
            const TT = IT.has(WT);
            zT.push({
              kind: "folder",
              path: WT,
              name: bz(WT),
              depth: oT,
              collapsed: TT
            }), TT || kT(XT, oT + 1)
          }
          TT.files.sort(((TT, oT) => TT.localeCompare(oT)));
          for (const IT of TT.files) zT.push({
            kind: "file",
            path: IT,
            name: bz(IT),
            depth: oT
          })
        };
        return kT(iT, 0), zT
      }(RT, eT, uT);
      (0, zT.useEffect)((() => {
        vT((TT => {
          const oT = new Set(TT);
          let IT = !1;
          for (const zT of pz(iT)) IT = oT.delete(zT) || IT;
          return IT ? oT : TT
        }))
      }), [iT]);
      const fT = RT.length >= WI.x,
        CT = (TT, oT) => {
          if (TT.length > Oz.r) return `Path must be at most ${Oz.r} characters`;
          if (!(0, Oz.q)(TT)) return "Use a relative .js, .ts, or .d.ts path, e.g. lib/util.js";
          if ("index.d.ts" === TT) return "index.d.ts cannot be the world-code entry";
          const iT = !!oT && (0, Hz.d)(oT, TT);
          if (oT && (0, Hz.e)(oT) && !iT) return `Cannot rename ${oT} (only swapping ${Qz.h} and ${Qz.i} is allowed)`;
          if (TT in IT) return "A file with that path already exists";
          if ((0, Hz.e)(TT) && !iT) {
            if ((TT === Qz.h ? Qz.i : Qz.h) in IT) return `World code cannot have both ${Qz.h} and ${Qz.i}`
          }
          return null
        },
        jT = TT => {
          xz.NotificationProvider.showInputPopup({
            title: "codeEditor:newFile",
            subtitle: "codeEditor:newFilePathHint",
            placeholderText: "lib/util.js",
            initialValue: void 0 === TT ? void 0 : `${TT}/`,
            submitText: "general:create",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: TT => CT(TT)
          }).getResult().then((TT => {
            "notificationTornDown" !== TT && null !== TT && "submit" === TT.type && cT(TT.value)
          }))
        },
        JT = TT => {
          xz.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFile",
            subtitle: "codeEditor:newFilePathHint",
            initialValue: TT,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: oT => oT === TT ? "That is already the file's path" : CT(oT, TT)
          }).getResult().then((oT => {
            "notificationTornDown" !== oT && null !== oT && "submit" === oT.type && KT(TT, oT.value)
          }))
        },
        UT = TT => {
          const oT = TT => TT.replace(/\/+$/, "");
          xz.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFolder",
            subtitle: "codeEditor:renameFolderHint",
            initialValue: TT,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: IT => {
              const iT = oT(IT);
              if (iT === TT) return "That is already the folder's path";
              for (const [oT, zT] of(0, Hz.i)(RT, TT, iT)) {
                const TT = CT(zT, oT);
                if (null !== TT) return TT
              }
              return null
            }
          }).getResult().then((IT => {
            "notificationTornDown" !== IT && null !== IT && "submit" === IT.type && rT(TT, oT(IT.value))
          }))
        },
        aT = TT => {
          xz.NotificationProvider.showPromptPopup({
            title: "codeEditor:deleteFile",
            subtitle: "codeEditor:deleteFileConfirm",
            textOpts: {
              subtitle: {
                path: TT
              }
            },
            confirmText: "general:delete",
            destructive: !0,
            cancelText: "general:cancel"
          }).getResult().then((oT => {
            !0 === oT && AT(TT)
          }))
        };
      return (0, ST.jsxs)("div", {
        className: "CodeEditorFileTree",
        children: [(0, ST.jsxs)("div", {
          className: "FileTreeHeader",
          children: [(0, ST.jsx)("span", {
            children: "Files"
          }), kT && !fT && (0, ST.jsx)(xT.r, {
            className: "FileTreeHeaderButton",
            onClick: () => {
              jT()
            },
            children: (0, ST.jsx)(MT.e, {
              name: "plus"
            })
          })]
        }), (0, ST.jsxs)("div", {
          className: "FileTreeList",
          children: [ET.map((TT => {
            const oT = TT.path;
            if ("folder" === TT.kind) return (0, ST.jsx)(dz, {
              path: oT,
              name: TT.name,
              depth: TT.depth,
              collapsed: TT.collapsed,
              onToggle: () => {
                var TT;
                TT = oT, vT((oT => {
                  const IT = new Set(oT);
                  return IT.delete(TT) || IT.add(TT), IT
                }))
              },
              canCreate: kT && !fT,
              canRename: kT,
              onCreate: jT,
              onRename: UT
            }, `folder:${oT}`);
            const zT = (0, Hz.e)(oT),
              WT = Qz.h in IT && Qz.i in IT,
              XT = !zT || WT,
              FT = null === BT && oT === iT;
            return (0, ST.jsx)(Tk, {
              path: oT,
              label: TT.name,
              depth: TT.depth,
              isActive: FT,
              canRename: kT,
              onSelect: DT,
              onRename: JT,
              onDelete: aT,
              canDelete: XT && kT
            }, oT)
          })), (0, ST.jsxs)("div", {
            className: "FileTreeHeader Secondary",
            children: [(0, ST.jsxs)("span", {
              children: ["Schematics (", Object.keys(hT).length, "/", Gz.e, ")"]
            }), kT && (0, ST.jsx)(xT.r, {
              className: "FileTreeHeaderButton",
              disabled: Object.keys(hT).length >= Gz.e,
              onClick: () => {
                wT("")
              },
              children: (0, ST.jsx)(MT.e, {
                name: "plus"
              })
            })]
          }), Object.keys(hT).sort().map((TT => (0, ST.jsx)(Tk, {
            path: TT,
            isActive: !1,
            canRename: !1,
            canDelete: !1,
            onSelect: wT
          }, TT))), XT.length > 0 && (0, ST.jsxs)(ST.Fragment, {
            children: [(0, ST.jsx)("div", {
              className: "FileTreeHeader Secondary",
              children: (0, ST.jsx)("span", {
                children: "Plugins"
              })
            }), XT.map((TT => {
              var oT;
              const IT = sz.e[TT],
                iT = Object.keys(null !== (oT = null === IT || void 0 === IT ? void 0 : IT.files) && void 0 !== oT ? oT : {
                  "index.ts": ""
                }).sort(((TT, oT) => "index.ts" === TT ? -1 : "index.ts" === oT ? 1 : TT.localeCompare(oT)));
              return (0, ST.jsxs)("div", {
                children: [(0, ST.jsx)("div", {
                  className: "FileTreePluginName",
                  children: (0, Hz.r)(TT)
                }), iT.map((oT => (0, ST.jsx)(Tk, {
                  path: oT,
                  nested: !0,
                  isActive: BT === TT && FT === oT,
                  canRename: !1,
                  onSelect: () => {
                    LT(TT, oT)
                  },
                  canDelete: !1
                }, oT)))]
              }, TT)
            }))]
          })]
        }), (0, ST.jsx)("div", {
          className: "FileTreeFooter",
          children: (0, ST.jsx)(xT.e, {
            className: "FileTreeFooterButton",
            onClick: gT,
            children: mT(WT ? "codeEditor:directorySyncUnlink" : "codeEditor:directorySyncLink")
          })
        })]
      })
    }));

    function Nz(TT) {
      return TT > 0 ? {
        className: "Indented",
        style: {
          "--tree-depth": TT
        }
      } : {
        className: void 0,
        style: void 0
      }
    }

    function Pz(TT) {
      let {
        depth: oT
      } = TT;
      return (0, ST.jsx)(ST.Fragment, {
        children: Array.from({
          length: oT
        }, ((TT, oT) => (0, ST.jsx)("span", {
          className: "FileTreeIndentGuide",
          style: {
            "--guide-level": oT
          }
        }, oT)))
      })
    }

    function dz(TT) {
      let {
        path: oT,
        name: IT,
        depth: iT,
        collapsed: zT,
        onToggle: kT,
        canCreate: WT,
        canRename: XT,
        onCreate: BT,
        onRename: FT
      } = TT;
      const DT = [];
      WT && DT.push({
        icon: "plus",
        text: "codeEditor:newFile",
        onPointerDown: () => {
          BT(oT)
        }
      }), XT && DT.push({
        icon: "pen",
        text: "codeEditor:renameFolder",
        onPointerDown: () => {
          FT(oT)
        }
      });
      const LT = Nz(iT);
      return (0, ST.jsxs)("div", {
        className: xo()("FileTreeItem FileTreeFolder", LT.className),
        style: LT.style,
        children: [(0, ST.jsx)(Pz, {
          depth: iT
        }), (0, ST.jsxs)("button", {
          type: "button",
          className: "FileTreeItemName",
          "aria-expanded": !zT,
          onClick: kT,
          children: [(0, ST.jsx)(MT.e, {
            className: "FileTreeFolderCaret",
            name: zT ? "caret-right" : "caret-down"
          }), (0, ST.jsx)(MT.e, {
            className: "FileTreeFolderIcon",
            name: zT ? "folder" : "folder-open"
          }), IT]
        }), (0, ST.jsx)(Vz, {
          path: oT,
          actions: DT
        })]
      })
    }

    function Vz(TT) {
      let {
        path: oT,
        actions: IT
      } = TT;
      const iT = (0, zT.useRef)(null);
      return 0 === IT.length ? null : (0, ST.jsxs)("div", {
        ref: iT,
        className: "FileTreeItemActions",
        children: [(0, ST.jsx)("button", {
          type: "button",
          className: "FileTreeActionMenuButton",
          "aria-label": `Actions for ${oT}`,
          children: (0, ST.jsx)(MT.e, {
            name: "ellipsis"
          })
        }), (0, ST.jsx)(tz.c, {
          triggerElementRef: iT,
          options: IT
        })]
      })
    }

    function Tk(TT) {
      let {
        path: oT,
        label: IT = oT,
        depth: iT = 0,
        isActive: zT,
        canRename: kT,
        onSelect: WT,
        onRename: XT,
        onDelete: BT,
        canDelete: FT,
        nested: DT
      } = TT;
      const LT = [];
      kT && XT && LT.push({
        icon: "pen",
        text: "codeEditor:rename",
        onPointerDown: () => {
          XT(oT)
        }
      }), FT && BT && LT.push({
        icon: "xmark",
        text: "general:delete",
        onPointerDown: () => {
          BT(oT)
        }
      });
      const xT = Nz(iT);
      return (0, ST.jsxs)("div", {
        className: xo()("FileTreeItem", xT.className, {
          Active: zT,
          Nested: DT
        }),
        style: xT.style,
        children: [(0, ST.jsx)(Pz, {
          depth: iT
        }), (0, ST.jsx)("button", {
          type: "button",
          className: "FileTreeItemName",
          title: IT === oT ? void 0 : oT,
          onClick: () => {
            WT(oT)
          },
          children: IT
        }), (0, ST.jsx)(Vz, {
          path: oT,
          actions: LT
        })]
      })
    }
    async function Ik(TT) {
      const oT = (0, Hz.c)(TT);
      if (!oT || "" === TT[oT].trim()) return [];
      const {
        collectImportedWorldCodePluginNames: iT
      } = await Promise.all([IT.e(289), IT.e(290)]).then((() => IT(40299)));
      return (0, sz.c)(iT(TT))
    }
    var ik = IT(35830);

    function zk(TT, oT) {
      const IT = Object.keys(TT),
        iT = Object.keys(oT);
      if (IT.length !== iT.length) return !1;
      for (const zT of IT)
        if (!(zT in oT) || TT[zT] !== oT[zT]) return !1;
      return !0
    }

    function kk(TT, oT) {
      const IT = [],
        iT = [],
        zT = [];
      for (const kT of Object.keys(oT)) kT in TT ? TT[kT] !== oT[kT] && zT.push(kT) : IT.push(kT);
      for (const kT of Object.keys(TT)) kT in oT || iT.push(kT);
      return IT.sort(), iT.sort(), zT.sort(), {
        creates: IT,
        deletes: iT,
        updates: zT
      }
    }

    function Wk(TT, oT) {
      var IT;
      const iT = {
          ...TT
        },
        zT = (0, Hz.c)(oT),
        kT = (0, Hz.c)(iT);
      if (Qz.h in iT && Qz.i in iT) {
        const TT = null !== zT && void 0 !== zT ? zT : Qz.i,
          IT = TT === Qz.h ? Qz.i : Qz.h;
        var WT;
        if (!(TT in iT)) iT[TT] = null !== (WT = oT[TT]) && void 0 !== WT ? WT : "";
        return delete iT[IT], iT
      }
      var XT;
      return zT && !(zT in iT) ? (kT || (iT[zT] = null !== (XT = oT[zT]) && void 0 !== XT ? XT : ""), iT) : (kT || zT || (iT[Qz.h] = null !== (IT = iT[Qz.h]) && void 0 !== IT ? IT : "", delete iT[Qz.i]), iT)
    }

    function Xk(TT, oT) {
      const IT = (0, Hz.c)(oT),
        iT = Qz.h in oT && Qz.i in oT;
      return TT.filter((TT => !(0, Hz.e)(TT) || (!!iT || IT !== TT)))
    }
    async function Bk(TT, oT, iT) {
      const zT = TT.getLobbyFiles(),
        kT = (0, WI.h)(iT, (0, Hz.j)(zT, oT)),
        WT = await TT.ensureJoined(oT),
        XT = (0, Oz.v)(WT.docKey);
      if (WT.doc === kT) return;
      for (let IT = 0; IT < 100; IT++) {
        const IT = TT.getCollabSnapshot();
        if (IT && (0, Oz.v)(IT.docKey) === XT && TT.getActivePath() === oT) {
          if (TT.replaceActiveDoc(XT, kT)) return;
          await (0, Yi.M)(40)
        } else await (0, Yi.M)(40)
      }
      const {
        ChangeSet: BT
      } = await IT.e(285).then((() => IT(40110))), ST = TT.getCollabSnapshot(), DT = ST && (0, Oz.v)(ST.docKey) === XT ? ST : WT;
      await async function(TT, oT, IT, iT) {
        const zT = TT.of({
            from: 0,
            to: IT.length,
            insert: iT
          }, IT.length),
          kT = JSON.stringify([{
            clientID: oT.clientID,
            changes: zT.toJSON()
          }]),
          WT = (0, Oz.v)(oT.docKey);
        kT.length <= Oz.j ? FT.gameBridge.send("sendCodeCollab", {
          po: Oz.e.Push,
          bo: WT,
          yo: oT.version,
          TI: kT
        }) : await (0, Yz.postJsonWithMetricsCookiesAndJsonResponse)(`${oT.httpConfig.gsUrl}/code/collab-push`, az.o["collab-push"].toBuffer({
          gameNameWithVariation: oT.httpConfig.gameNameWithVariation,
          lobbyName: oT.httpConfig.lobbyName,
          docKey: WT,
          version: oT.version,
          updates: kT
        }), {
          retries: 0
        })
      }(BT, DT, DT.doc, kT)
    }
    class Fk {
      constructor(TT) {
        this.handle = null, this.lastSynced = {}, this.lastLobbySeen = null, this.pendingDocText = new Map, this.flushingDocText = !1, this.recheckingDisk = !1, this.stopWatch = null, this.lobbyPollTimer = null, this.running = !1, this.applying = !1, this.reconcileSettled = !1, this.reconcileInFlight = !1, this.linked = !1, this.scaffoldedPluginNamesKey = null, this.scaffoldingLocalTypes = Promise.resolve(), this.bridge = void 0, this.bridge = TT
      }
      async writeLobbyFiles(TT) {
        const oT = {
            ...this.bridge.getLobbyFiles()
          },
          IT = {
            ...oT
          };
        for (const {
            path: kT,
            text: WT
          }
          of TT) IT[kT] = WT;
        if (!TT.every((TT => {
            let {
              path: oT,
              text: iT
            } = TT;
            return (0, WI.h)(iT, (0, Hz.j)(IT, oT)) === iT
          }))) return !1;
        const iT = [];
        try {
          for (const {
              path: oT,
              text: IT
            }
            of TT) iT.push(oT), oT in this.bridge.getLobbyFiles() || (this.bridge.createFile(oT, {
            focus: !1
          }), await this.bridge.waitForLobbyPath(oT, !0)), await Bk(this.bridge, oT, IT)
        } catch (zT) {
          for (const TT of iT) TT in oT ? await Bk(this.bridge, TT, oT[TT]).catch((oT => {
            console.error("World Code AI: couldn't put back", TT, oT)
          })) : this.bridge.deleteFile(TT);
          throw zT
        }
        return !0
      }
      isLinked() {
        return this.linked
      }
      async linkFolder() {
        if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), !1;
        const TT = await (0, ik.r)(this.bridge.getStorageKey());
        return !!TT && (this.handle = TT, this.linked = !0, this.reconcileSettled = !1, await this.scaffoldLocalTypes(TT), !0)
      }
      async unlinkFolder() {
        const TT = this.bridge.getStorageKey();
        this.pendingDocText.clear(), this.stopContinuousSync(), this.handle = null, this.linked = !1, this.reconcileSettled = !1, this.lastSynced = {}, this.lastLobbySeen = null, this.scaffoldedPluginNamesKey = null, await (0, ik.c)(TT), this.bridge.onUnlinked()
      }
      async tryRestoreHandle() {
        const TT = this.bridge.getStorageKey(),
          oT = await (0, ik.q)(TT);
        return !!oT && (!!await (0, ik.h)(oT, "readwrite") && (this.handle = oT, this.linked = !0, await (0, ik.C)(TT, oT), await this.scaffoldLocalTypes(oT), !0))
      }
      scaffoldLocalTypes(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bridge.getLobbyFiles();
        return this.scaffoldingLocalTypes = this.scaffoldingLocalTypes.then((async () => {
          try {
            const iT = (await Ik(oT)).map((TT => sz.e[TT])),
              zT = iT.map((TT => {
                var oT;
                return `${TT.name}:${Object.keys(null!==(oT=null===TT||void 0===TT?void 0:TT.files)&&void 0!==oT?oT:{}).sort().join(",")}`
              })).join("\0");
            if (this.scaffoldedPluginNamesKey === zT) return;
            const {
              ensureLocalBloxdTypes: kT
            } = await Promise.all([IT.e(81), IT.e(287), IT.e(292)]).then((() => IT(40305)));
            await kT(TT, iT), this.scaffoldedPluginNamesKey = zT
          } catch (iT) {
            console.error("[WorldCodeDirectorySync] Failed to scaffold local @bloxd types", iT)
          }
        })), this.scaffoldingLocalTypes
      }
      async startWhenReady() {
        this.linked && this.handle && !this.running && !this.reconcileInFlight && this.bridge.getCollabSnapshot() && (this.reconcileSettled ? this.beginWatch() : await this.runInitialReconcileAndSync())
      }
      stopContinuousSync() {
        this.flushDocTextToDisk(), this.running = !1, this.stopWatch && (this.stopWatch(), this.stopWatch = null), this.lobbyPollTimer && (clearInterval(this.lobbyPollTimer), this.lobbyPollTimer = null)
      }
      async onLobbyFilesChanged(TT) {
        this.handle && await this.scaffoldLocalTypes(this.handle, TT), this.running && this.handle && !this.applying && await this.applyRemoteTreeToDisk(TT)
      }
      async onDocTextChanged(TT, oT) {
        if (!this.handle) return;
        const IT = [this.scaffoldLocalTypes(this.handle, {
          ...this.bridge.getLobbyFiles(),
          [TT]: oT
        })];
        this.running && (this.pendingDocText.set(TT, oT), IT.push(this.flushDocTextToDisk())), await Promise.all(IT)
      }
      async flushDocTextToDisk() {
        if (this.flushingDocText || this.applying || !this.handle || 0 === this.pendingDocText.size) return;
        const TT = this.handle;
        this.flushingDocText = !0, this.applying = !0;
        try {
          for (; this.pendingDocText.size > 0;) {
            const oT = [...this.pendingDocText];
            this.pendingDocText.clear();
            for (const [IT, iT] of oT) this.lastSynced[IT] !== iT && (await (0, ik.M)(TT, IT, iT), this.lastSynced = {
              ...this.lastSynced,
              [IT]: iT
            })
          }
        } catch (oT) {
          console.error("[WorldCodeDirectorySync] Failed to write remote doc to disk", oT), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
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
            await this.onDiskFilesChanged(await (0, ik.v)(this.handle))
          } catch (TT) {
            console.error("[WorldCodeDirectorySync] Failed to re-check disk after sync", TT)
          } finally {
            this.recheckingDisk = !1
          }
        }
      }
      async runInitialReconcileAndSync() {
        if (this.handle && !this.reconcileInFlight) {
          this.reconcileInFlight = !0;
          try {
            if (!await (0, ik.h)(this.handle, "readwrite")) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncPermissionDenied"), "warning"), void(this.reconcileSettled = !0);
            await this.bridge.pullLobbyFiles();
            const oT = this.bridge.getLobbyFiles(),
              IT = await (0, ik.v)(this.handle);
            for (const TT of Object.keys(oT).filter(Gz.d)) {
              if (IT[TT] === ik.m) return void this.bridge.setMessage(`Move ${TT} outside the linked folder before syncing its placeholder.`, "warning");
              IT[TT] = Gz.m
            }
            if (zk(IT, oT)) {
              for (const TT of Object.keys(oT).filter(Gz.d)) await (0, ik.M)(this.handle, TT, Gz.m);
              return this.lastSynced = {
                ...IT
              }, void this.beginWatch()
            }
            const iT = await this.promptReconcile(function(TT) {
              return null !== (0, Hz.c)(TT)
            }(IT));
            if ("unlink" === iT) return void await this.unlinkFolder();
            if ("dismissed" === iT) return void(this.reconcileSettled = !0);
            this.applying = !0;
            try {
              if ("local" === iT) {
                if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), void(this.reconcileSettled = !0);
                await this.applyLocalTreeToLobby(IT);
                for (const TT of Object.keys(oT).filter(Gz.d)) await (0, ik.M)(this.handle, TT, Gz.m);
                this.lastSynced = {
                  ...await (0, ik.v)(this.handle)
                }
              } else await (0, ik.O)(this.handle, oT), this.lastSynced = {
                ...oT
              }
            } catch (TT) {
              return console.error("[WorldCodeDirectorySync] Reconcile failed", TT), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning"), void(this.reconcileSettled = !0)
            } finally {
              this.applying = !1, this.settleAfterApplying()
            }
            this.beginWatch()
          } finally {
            this.reconcileInFlight = !1
          }
        }
      }
      async promptReconcile(TT) {
        return await new Promise((oT => {
          const IT = [{
              choice: "local",
              Button: xT.e,
              labelKey: "directorySyncUseLocal",
              descriptionKey: "directorySyncUseLocalDescription"
            }, {
              choice: "live",
              Button: xT.e,
              labelKey: "directorySyncUseLive",
              descriptionKey: "directorySyncUseLiveDescription"
            }, {
              choice: "unlink",
              Button: xT.e,
              labelKey: "directorySyncUseUnlink",
              descriptionKey: "directorySyncUseUnlinkDescription"
            }],
            iT = (0, ST.jsxs)("div", {
              className: "CodeEditorDirectorySyncPrompt",
              children: [(0, ST.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptTitle",
                children: this.bridge.t("codeEditor:directorySyncDifferTitle")
              }), (0, ST.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptBody",
                children: TT ? this.bridge.t("codeEditor:directorySyncDifferBody") : this.bridge.t("codeEditor:directorySyncLocalInvalidEntry")
              }), (0, ST.jsx)("div", {
                className: "CodeEditorDirectorySyncOptions",
                children: IT.filter((oT => "local" !== oT.choice || TT)).map((TT => {
                  let {
                    choice: IT,
                    Button: iT,
                    labelKey: kT,
                    descriptionKey: WT
                  } = TT;
                  return (0, ST.jsxs)("div", {
                    className: "CodeEditorDirectorySyncOption",
                    children: [(0, ST.jsx)(iT, {
                      className: "CodeEditorButton",
                      onClick: () => {
                        (TT => {
                          zT.tearDownNotification(), oT(TT)
                        })(IT)
                      },
                      children: this.bridge.t(`codeEditor:${kT}`)
                    }), (0, ST.jsx)("div", {
                      className: "CodeEditorDirectorySyncOptionDescription",
                      children: this.bridge.t(`codeEditor:${WT}`)
                    })]
                  }, IT)
                }))
              })]
            }),
            zT = xz.NotificationProvider.showCustomPopup({
              body: iT,
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "worldCodeDirectorySync"
            });
          zT.getResult().then((TT => {
            "notificationTornDown" === TT && oT("dismissed")
          }))
        }))
      }
      beginWatch() {
        this.handle && (this.stopContinuousSync(), this.reconcileSettled = !0, this.running = !0, this.stopWatch = (0, ik.E)(this.handle, (TT => {
          this.onDiskFilesChanged(TT)
        })), this.lobbyPollTimer = setInterval((() => {
          this.pollRemoteLobbyFiles()
        }), 2e3))
      }
      async pollRemoteLobbyFiles() {
        if (this.running && !this.applying) try {
          await this.bridge.pullLobbyFiles()
        } catch (TT) {
          console.error("[WorldCodeDirectorySync] Lobby poll failed", TT)
        }
      }
      async onDiskFilesChanged(TT) {
        if (!this.running || !this.handle || this.applying) return;
        if (!this.bridge.canEditCode()) return;
        const oT = this.bridge.getLobbyFiles();
        let IT = Wk(TT, this.lastSynced);
        for (const kT in oT)
          if ((0, Gz.d)(kT) && IT[kT] === ik.m) return void this.bridge.setMessage("Move binary schematic files outside the linked folder. Add them through the Code Editor.", "warning");
        const iT = Object.keys(IT).filter((TT => (0, Gz.d)(TT) && !(TT in oT)));
        iT.length > 0 && this.bridge.setMessage("Add or rename schematics in the Code Editor. Unknown local schematic files are not uploaded.", "warning");
        for (const kT of Object.keys(oT).filter(Gz.d))(kT in IT || iT.length > 0 || !(kT in this.lastSynced)) && (IT[kT] = Gz.m);
        if (!zk(IT, TT)) {
          this.applying = !0;
          try {
            await this.persistEntryRepair(TT, IT), IT = Wk(await (0, ik.v)(this.handle), this.lastSynced)
          } finally {
            this.applying = !1
          }
        }
        if (!zk(IT, this.lastSynced)) {
          this.applying = !0;
          try {
            const TT = kk(this.lastSynced, IT);
            if (await this.pushDiskDeltaToLobby(IT, oT), null !== this.lastLobbySeen)
              for (const IT of [...TT.creates, ...TT.updates, ...TT.deletes])(0, Gz.d)(IT) || (IT in oT ? this.lastLobbySeen[IT] = oT[IT] : delete this.lastLobbySeen[IT]);
            this.lastSynced = {
              ...IT
            }
          } catch (zT) {
            console.error("[WorldCodeDirectorySync] Disk\u2192lobby sync failed", zT), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async persistEntryRepair(TT, oT) {
        if (this.handle) {
          for (const IT of Object.keys(TT)) IT in oT || await (0, ik.w)(this.handle, IT);
          for (const [IT, iT] of Object.entries(oT)) TT[IT] !== iT && await (0, ik.M)(this.handle, IT, iT)
        }
      }
      async applyRemoteTreeToDisk(TT) {
        if (!this.handle) return;
        const oT = this.lastLobbySeen;
        if (null === oT) return void(this.lastLobbySeen = {
          ...TT
        });
        const IT = Object.keys(TT).filter((IT => oT[IT] !== TT[IT])),
          iT = Object.keys(oT).filter((oT => !(oT in TT)));
        if (0 !== IT.length || 0 !== iT.length) {
          this.applying = !0;
          try {
            for (const oT of [...iT, ...IT]) try {
              if (oT in TT) await (0, ik.M)(this.handle, oT, TT[oT]), this.lastSynced = {
                ...this.lastSynced,
                [oT]: TT[oT]
              }, this.lastLobbySeen = {
                ...this.lastLobbySeen,
                [oT]: TT[oT]
              };
              else {
                await (0, ik.w)(this.handle, oT);
                const TT = {
                  ...this.lastSynced
                };
                delete TT[oT], this.lastSynced = TT;
                const IT = {
                  ...this.lastLobbySeen
                };
                delete IT[oT], this.lastLobbySeen = IT
              }
            } catch (zT) {
              console.error("[WorldCodeDirectorySync] Lobby\u2192disk sync failed", zT), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
            }
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async renameLobbyEntryIfSwitched(TT, oT) {
        const IT = function(TT, oT) {
          const IT = (0, Hz.c)(TT),
            iT = (0, Hz.c)(oT);
          return IT && iT && IT !== iT ? {
            from: IT,
            to: iT
          } : null
        }(TT, oT);
        return !!IT && (this.bridge.renameFile(IT.from, IT.to), await this.bridge.waitForLobbyPath(IT.to, !0), !0)
      }
      async applyLocalTreeToLobby(TT) {
        var oT;
        const IT = this.bridge.getActivePath();
        await this.renameLobbyEntryIfSwitched(this.bridge.getLobbyFiles(), TT);
        const iT = this.bridge.getLobbyFiles(),
          zT = kk(iT, TT),
          kT = Xk(zT.deletes, iT);
        for (const FT of zT.creates)(0, Gz.d)(FT) || (this.bridge.createFile(FT, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(FT, !0));
        for (const FT of kT)(0, Gz.d)(FT) || (this.bridge.deleteFile(FT), await this.bridge.waitForLobbyPath(FT, !1));
        if (!(0, Hz.c)(this.bridge.getLobbyFiles()) && !(0, Hz.c)(TT)) {
          if (this.bridge.createFile(Qz.h, {
              focus: !1
            }), await this.bridge.waitForLobbyPath(Qz.h, !0), !this.handle) return;
          await (0, ik.M)(this.handle, Qz.h, ""), TT = {
            ...TT,
            [Qz.h]: ""
          }
        }
        const WT = this.bridge.getLobbyFiles();
        for (const FT of Object.keys(TT))(0, Gz.d)(FT) || WT[FT] !== TT[FT] && await Bk(this.bridge, FT, TT[FT]);
        const XT = this.bridge.getLobbyFiles(),
          BT = IT in XT ? IT : null !== (oT = (0, Hz.c)(XT)) && void 0 !== oT ? oT : Qz.h;
        await this.bridge.ensureJoined(BT)
      }
      async pushDiskDeltaToLobby(TT, oT) {
        const IT = this.bridge.getActivePath(),
          iT = await this.renameLobbyEntryIfSwitched(oT, TT) ? this.bridge.getLobbyFiles() : oT,
          zT = kk(this.lastSynced, TT),
          kT = Xk(zT.deletes, iT).filter((TT => TT in iT));
        for (const WT of zT.creates)(0, Gz.d)(WT) || (WT in this.bridge.getLobbyFiles() || (this.bridge.createFile(WT, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(WT, !0)), await Bk(this.bridge, WT, TT[WT]));
        for (const WT of kT)(0, Gz.d)(WT) ? await this.bridge.deleteSchematic(WT) : (this.bridge.deleteFile(WT), await this.bridge.waitForLobbyPath(WT, !1));
        for (const WT of zT.updates)(0, Gz.d)(WT) || await Bk(this.bridge, WT, TT[WT]);
        IT in this.bridge.getLobbyFiles() && this.bridge.getActivePath() !== IT && await this.bridge.ensureJoined(IT)
      }
    }
    var Sk = IT(1183);

    function Dk() {
      const {
        websocketUrl: TT,
        gameNameWithVariation: oT,
        lobbyName: IT
      } = FT.gameBridge.latest("connectedGame");
      return {
        gsUrl: Sk.clientSideServerUrls.getHttpUrlFromWebSocketUrl(TT),
        gameNameWithVariation: oT,
        lobbyName: IT
      }
    }
    async function Lk(TT) {
      const {
        gsUrl: oT,
        gameNameWithVariation: IT,
        lobbyName: iT
      } = Dk();
      return await (0, Yz.postBinaryWithMetricsCookiesAndCustomResponse)(`${oT}/code/schematics`, az.jk.schematics.toBuffer({
        gameNameWithVariation: IT,
        lobbyName: iT,
        request: JSON.stringify(TT)
      }), {
        retries: 0
      }, Yz.HttpPayloadType.json)
    }
    var xk = IT(35364);

    function ck(TT) {
      let {
        path: oT,
        revision: IT
      } = TT;
      const [iT, kT] = (0, zT.useState)(""), [WT, XT] = (0, zT.useState)(!1), [BT, FT] = (0, zT.useState)(0);
      return (0, zT.useEffect)((() => {
        let TT = !1;
        return kT(""), XT(!1), Lk({
          action: "preview",
          path: oT
        }).then((oT => {
          TT || kT(`data:image/webp;base64,${oT.previewBase64}`)
        })).catch((oT => {
          console.error("Could not load schematic preview", oT), TT || XT(!0)
        })), () => {
          TT = !0
        }
      }), [oT, IT, BT]), (0, ST.jsxs)("div", {
        className: "SchematicPreview",
        children: [iT && (0, ST.jsx)("img", {
          src: iT,
          alt: `Preview of ${oT}`
        }), !iT && !WT && (0, ST.jsx)(ET.d, {
          loaderType: "Secondary"
        }), WT && (0, ST.jsxs)(ST.Fragment, {
          children: [(0, ST.jsx)("div", {
            className: "SmallTextLight",
            role: "status",
            children: "Preview unavailable."
          }), (0, ST.jsx)(xT.e, {
            onClick: () => {
              FT(BT + 1)
            },
            children: "Retry preview"
          })]
        })]
      })
    }

    function Kk(TT) {
      var oT;
      let {
        initialPath: IT,
        onChanged: iT,
        onClose: kT
      } = TT;
      const WT = "" === IT,
        [XT, BT] = (0, zT.useState)(null),
        [FT, DT] = (0, zT.useState)(IT),
        [LT, cT] = (0, zT.useState)(!1),
        [KT, MT] = (0, zT.useState)(!1),
        [rT, AT] = (0, zT.useState)(null),
        [gT, hT] = (0, zT.useState)(!1),
        [wT, mT] = (0, zT.useState)(""),
        eT = (0, zT.useRef)(null),
        RT = (0, zT.useRef)(!1),
        uT = (0, zT.useRef)(!0);
      (0, zT.useEffect)((() => (uT.current = !0, Lk({
        action: "state"
      }).then((TT => {
        uT.current && BT(TT)
      })).catch((TT => {
        console.error("Could not load schematic assets", TT), uT.current && mT("Could not load schematics. Reopen this panel to retry.")
      })), () => {
        uT.current = !1
      })), []);
      const vT = null === XT || void 0 === XT ? void 0 : XT.assets[IT],
        ET = Object.keys(null !== (oT = null === XT || void 0 === XT ? void 0 : XT.assets) && void 0 !== oT ? oT : {}).length,
        fT = FT.trim(),
        CT = fT ? (0, Gz.d)(fT) ? null !== XT && void 0 !== XT && XT.assets[fT] && (WT || fT !== IT) ? "A schematic already uses that path." : "" : "Use a relative path ending in .bloxdschem." : "",
        jT = !!fT && !CT && (WT ? ET < Gz.e : fT !== IT),
        JT = gT || !XT;
      async function UT(TT) {
        if (!RT.current && uT.current) {
          RT.current = !0, hT(!0), mT("");
          try {
            const oT = await Lk({
              ...TT,
              expectedRevision: XT.revision
            });
            iT(oT), uT.current && kT()
          } catch (IT) {
            var oT;
            if (console.error("Schematic asset operation failed", IT), uT.current) mT(IT instanceof tT.d ? null !== (oT = IT.errorMessageForUser) && void 0 !== oT ? oT : IT.message : String(IT));
            try {
              const TT = await Lk({
                action: "state"
              });
              iT(TT), uT.current && BT(TT)
            } catch (zT) {
              console.error("Could not refresh schematic assets", zT)
            }
          } finally {
            RT.current = !1, uT.current && hT(!1)
          }
        }
      }
      return (0, ST.jsxs)("div", {
        className: "WorldCodeSchematicPanel InputGenericPopup PromptGenericPopup FileTreePathPopup",
        children: [(0, ST.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: WT ? "New schematic" : LT ? "Rename schematic" : "Schematic"
        }), wT && (0, ST.jsx)("div", {
          className: "InputGenericPopupError SmallTextLight",
          role: "alert",
          children: wT
        }), !XT && !wT && (0, ST.jsx)("div", {
          className: "SmallTextLight",
          children: "Loading schematic\u2026"
        }), (0, ST.jsxs)("fieldset", {
          disabled: JT,
          children: [WT || LT ? (0, ST.jsxs)("label", {
            className: "SchematicField",
            children: [(0, ST.jsx)("span", {
              className: "SmallTextBold",
              children: "Project path"
            }), (0, ST.jsx)("div", {
              className: "InputGenericPopupInputRow",
              children: (0, ST.jsx)(vo.e, {
                className: "InputGenericPopupInput",
                defaultValue: IT,
                placeholderText: "maps/arena.bloxdschem",
                maxLength: 64,
                onValueChange: DT
              }, LT ? "rename" : "create")
            })]
          }) : (0, ST.jsx)("div", {
            className: "SchematicPath SmallTextBold",
            children: IT
          }), (WT || LT) && CT && (0, ST.jsx)("div", {
            className: "InputGenericPopupError SmallTextLight",
            role: "alert",
            children: CT
          }), WT ? (0, ST.jsxs)(ST.Fragment, {
            children: [ET >= Gz.e && (0, ST.jsxs)("div", {
              className: "SmallTextLight",
              children: ["Delete a schematic before adding another (", Gz.e, " maximum)."]
            }), KT ? (0, ST.jsxs)(ST.Fragment, {
              children: [(0, ST.jsx)("div", {
                className: "SmallTextBold",
                children: "Choose from profile"
              }), (0, ST.jsx)("div", {
                className: "SchematicProfilePicker",
                "aria-disabled": JT || !jT,
                children: (0, ST.jsx)(xk.c, {
                  loading: null === rT,
                  schematics: null !== rT && void 0 !== rT ? rT : [],
                  disableAutoExport: !0,
                  onSchematicPicked: TT => {
                    !JT && jT && UT({
                      action: "profile",
                      path: fT,
                      schematicId: TT.schematicId
                    })
                  }
                })
              }), (0, ST.jsx)("div", {
                className: "InputGenericPopupButtons",
                children: (0, ST.jsx)(xT.e, {
                  className: "InputGenericPopupButton",
                  disabled: JT,
                  onClick: () => {
                    MT(!1)
                  },
                  children: "Back"
                })
              })]
            }) : (0, ST.jsxs)("div", {
              className: "InputGenericPopupButtons",
              children: [(0, ST.jsx)(xT.e, {
                className: "InputGenericPopupButton",
                disabled: JT || !jT,
                onClick: () => {
                  eT.current.click()
                },
                children: "Upload Schematic"
              }), (0, ST.jsx)(xT.e, {
                className: "InputGenericPopupButton",
                disabled: JT || !jT,
                onClick: () => {
                  !async function() {
                    if (MT(!0), mT(""), !rT) try {
                      const TT = await (0, Yz.postJsonWithMetricsCookiesAndJsonResponse)(`${Sk.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
                        retries: 0,
                        minTimeout: 3e3
                      });
                      uT.current && AT(TT)
                    } catch (TT) {
                      console.error("Could not load profile schematics", TT), uT.current && (MT(!1), mT("Could not load your schematics. Try again."))
                    }
                  }()
                },
                children: "Choose from profile"
              })]
            }), (0, ST.jsx)("input", {
              ref: eT,
              type: "file",
              accept: ".bloxdschem",
              hidden: !0,
              onChange: TT => {
                var oT;
                const IT = null === (oT = TT.target.files) || void 0 === oT ? void 0 : oT[0];
                if (TT.target.value = "", !IT) return;
                if (IT.size > Gz.i) return void mT("The schematic file is too large.");
                const iT = fT;
                hT(!0);
                const zT = new FileReader;
                zT.onload = () => {
                  UT({
                    action: "upload",
                    path: iT,
                    base64: String(zT.result).split(",")[1]
                  })
                }, zT.onerror = () => {
                  console.error("Could not read schematic file", zT.error), uT.current && (hT(!1), mT("Could not read the selected file."))
                }, zT.readAsDataURL(IT)
              }
            })]
          }) : vT ? (0, ST.jsxs)(ST.Fragment, {
            children: [!LT && (0, ST.jsx)(ck, {
              path: IT,
              revision: XT.revision
            }), !LT && (0, ST.jsxs)("p", {
              className: "SchematicDetails SmallTextLight",
              children: [Math.ceil(vT.byteSize / 1024), " KB \xb7 ", vT.dimensions.join(" \xd7 "), " blocks"]
            }), (0, ST.jsx)("div", {
              className: "InputGenericPopupButtons",
              children: LT ? (0, ST.jsxs)(ST.Fragment, {
                children: [(0, ST.jsx)(xT.e, {
                  className: "InputGenericPopupButton",
                  disabled: JT || !jT,
                  onClick: () => {
                    UT({
                      action: "rename",
                      path: IT,
                      newPath: fT
                    })
                  },
                  children: "Rename"
                }), (0, ST.jsx)(xT.e, {
                  className: "InputGenericPopupButton",
                  disabled: JT,
                  onClick: () => {
                    cT(!1), DT(IT)
                  },
                  children: "Cancel"
                })]
              }) : (0, ST.jsxs)(ST.Fragment, {
                children: [(0, ST.jsx)(xT.e, {
                  className: "InputGenericPopupButton",
                  disabled: JT,
                  onClick: () => {
                    cT(!0)
                  },
                  children: "Rename"
                }), (0, ST.jsx)(xT.C, {
                  className: "InputGenericPopupButton",
                  disabled: JT,
                  onClick: () => {
                    UT({
                      action: "remove",
                      path: IT
                    })
                  },
                  children: "Delete"
                })]
              })
            })]
          }) : XT && (0, ST.jsx)("div", {
            className: "SmallTextLight",
            children: "This schematic is no longer in the project."
          })]
        })]
      })
    }

    function Mk(TT) {
      if ("string" !== typeof TT) return null;
      try {
        const oT = JSON.parse(TT);
        return (0, Hz.h)(null === oT || void 0 === oT ? void 0 : oT.worldCodeEngine) && "boolean" === typeof oT.engineLocked && function(TT) {
          if (null === TT) return !0;
          const oT = null === TT || void 0 === TT ? void 0 : TT.location;
          return "string" === typeof(null === TT || void 0 === TT ? void 0 : TT.reason) && (null === oT || "string" === typeof(null === oT || void 0 === oT ? void 0 : oT.path) && Number.isInteger(oT.line))
        }(oT.fallback) ? oT : (console.error("[CodeCollab] Malformed engine settings", TT), null)
      } catch (oT) {
        return console.error("[CodeCollab] Failed to parse engine settings", oT), null
      }
    }

    function rk(TT) {
      let {
        fallback: oT,
        onGoToLine: IT
      } = TT;
      const {
        t: iT
      } = (0, yT.t)(), {
        location: zT
      } = oT;
      return (0, ST.jsxs)("div", {
        className: "CodeEditorEngineNotice",
        children: [iT("codeEditorEngine:notice", {
          reason: oT.reason
        }), zT && (0, ST.jsxs)(ST.Fragment, {
          children: [" ", (0, ST.jsx)("button", {
            type: "button",
            className: "CodeEditorEngineNoticeLink",
            onClick: () => {
              IT(zT.path, zT.line)
            },
            children: iT("codeEditorEngine:goToLine", {
              line: String(zT.line)
            })
          })]
        })]
      })
    }
    var Ak = IT(4414);

    function gk(TT) {
      let {
        label: oT,
        hint: IT,
        checked: iT,
        onChange: zT
      } = TT;
      return (0, ST.jsxs)("label", {
        className: "CodeEditorMoreOptionsRow CodeEditorOptionSwitch",
        children: [(0, ST.jsxs)("span", {
          className: "CodeEditorOptionSwitchText",
          children: [(0, ST.jsx)("span", {
            children: oT
          }), (0, ST.jsx)("span", {
            className: "CodeEditorOptionSwitchHint",
            children: IT
          })]
        }), (0, ST.jsx)("span", {
          className: "SwitchContainer",
          children: (0, ST.jsx)(ho.d, {
            className: "SwitchCheckbox",
            checked: iT,
            onChange: TT => {
              zT(TT.target.checked)
            },
            disabled: !1
          })
        })]
      })
    }

    function hk(TT) {
      let {
        engine: oT,
        onSetEngine: IT,
        aiHints: iT,
        variation: zT
      } = TT;
      const {
        t: kT
      } = (0, yT.t)();
      return (0, ST.jsxs)("div", {
        className: "CodeEditorMoreOptions",
        children: [(0, ST.jsx)("div", {
          className: "CodeEditorMoreOptionsTitle",
          children: kT("codeEditor:moreOptions")
        }), oT && (0, ST.jsx)(gk, {
          label: kT("codeEditorEngine:toggle"),
          hint: kT("codeEditorEngine:toggleHint"),
          checked: "ses" === oT,
          onChange: TT => {
            IT(TT ? "ses" : "quickjs")
          }
        }), iT && (0, ST.jsx)(gk, {
          label: kT("codeEditorAiHints:toggle"),
          hint: kT("codeEditorAiHints:toggleHint"),
          checked: iT.shown,
          onChange: iT.setShown
        }), zT && (0, ST.jsxs)("div", {
          className: "CodeEditorMoreOptionsRow",
          children: [(0, ST.jsx)(Ak.h, {
            label: "codeEditor:variationLabel",
            children: (0, ST.jsx)(vo.e, {
              className: "CodeEditorVariationInput",
              maxLength: 32,
              defaultValue: zT.name,
              onValueChange: zT.setName,
              onEnter: zT.reload
            })
          }), (0, ST.jsx)(xT.v, {
            className: "CodeEditorButton",
            onClick: zT.reload,
            children: kT("codeEditor:reloadAsVariation")
          })]
        })]
      })
    }
    var wk = IT(35839),
      mk = IT(35842);

    function ek(TT) {
      let {
        close: oT
      } = TT;
      const {
        t: IT
      } = (0, yT.t)(), iT = [{
        name: IT("codeEditor:welcomeTutorial"),
        tutorial: "welcome"
      }, {
        name: IT("codeEditor:docsOverviewTutorial"),
        tutorial: "docsOverview"
      }, {
        name: IT("codeEditorAiTutorial:tutorialName"),
        tutorial: "aiHelperOverview"
      }];
      return (0, ST.jsxs)("div", {
        className: "PromptGenericPopup CodeEditorTutorialsPopup",
        children: [(0, ST.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: IT("codeEditor:tutorialsTitle")
        }), (0, ST.jsx)("div", {
          className: "CodeEditorTutorialsList",
          children: iT.map((TT => (0, ST.jsx)(xT.e, {
            className: "CodeEditorTutorialsListButton",
            onClick: () => {
              oT(), (0, mk.Q)(TT.tutorial)
            },
            children: TT.name
          }, TT.tutorial)))
        })]
      })
    }
    var Rk = IT(112),
      uk = IT(35553),
      vk = IT(8205);
    const Ek = (0, zT.forwardRef)((function(TT, oT) {
      let {
        value: IT,
        onChange: iT,
        onSubmit: zT,
        placeholder: kT,
        maxLength: WT,
        rows: XT = 2,
        allowNewLines: BT = !1,
        onKeyDown: FT,
        before: DT
      } = TT;
      const {
        t: LT
      } = (0, yT.t)(), cT = "" !== IT.trim(), KT = () => {
        cT && zT()
      };
      return (0, ST.jsxs)("div", {
        className: "PanelPromptInputRow",
        children: [DT, (0, ST.jsx)("textarea", {
          ref: oT,
          className: "PanelPromptInput",
          value: IT,
          maxLength: WT,
          rows: XT,
          placeholder: kT,
          spellCheck: !1,
          autoComplete: "off",
          onChange: TT => {
            iT(BT ? TT.target.value : TT.target.value.replace(/\r?\n/g, " "))
          },
          onKeyDown: TT => {
            TT.nativeEvent.isComposing || 229 === TT.nativeEvent.keyCode ? TT.stopPropagation() : "Escape" !== TT.key && (TT.stopPropagation(), null === FT || void 0 === FT || FT(TT), TT.defaultPrevented || "Enter" !== TT.key || BT && TT.shiftKey || (TT.preventDefault(), KT()))
          }
        }), (0, ST.jsx)(xT.e, {
          className: "PanelPromptSend",
          disabled: !cT,
          onClick: KT,
          ariaLabel: LT("codeEditorPanels:send"),
          children: (0, ST.jsx)(MT.e, {
            name: "arrow-up"
          })
        })]
      })
    }));

    function fk(TT) {
      let {
        close: oT,
        inputRef: IT
      } = TT;
      const {
        t: iT
      } = (0, yT.t)(), {
        messages: kT,
        reportedPlayers: WT,
        channel: XT
      } = (0, vk.l)(), [BT, FT] = (0, zT.useState)(""), DT = (0, zT.useRef)({
        stepsBack: 0,
        text: ""
      });
      return (0, ST.jsxs)("div", {
        className: "CodeEditorChatPanel",
        children: [(0, ST.jsxs)("div", {
          className: "CodeEditorChatHeader",
          children: [(0, ST.jsx)("span", {
            className: "CodeEditorChatTitle",
            children: iT("codeEditorChat:title")
          }), (0, ST.jsx)(xT.j, {
            className: "CodeEditorChatHide",
            onClick: oT
          })]
        }), 0 === kT.length ? (0, ST.jsx)("div", {
          className: "CodeEditorChatEmpty",
          children: iT("codeEditorChat:empty")
        }) : (0, ST.jsx)("div", {
          className: "ChatMessages CodeEditorChatMessages",
          children: (0, ST.jsx)(uk.c, {
            messages: kT,
            reportedPlayers: WT
          })
        }), (0, ST.jsx)(Ek, {
          ref: IT,
          value: BT,
          onChange: FT,
          onSubmit: () => {
            (0, vk.j)(BT), FT(""), DT.current = {
              stepsBack: 0,
              text: ""
            }
          },
          maxLength: uT.Nc,
          rows: 1,
          placeholder: XT ? iT("touchOnly" === (0, Rk.b)() ? "codeEditorChat:channelPlaceholderTouch" : "codeEditorChat:channelPlaceholder", {
            channel: XT.channelName
          }) : iT("codeEditorChat:placeholder"),
          before: XT && (0, ST.jsx)("button", {
            type: "button",
            className: "CodeEditorChatChannel",
            style: {
              backgroundColor: XT.elementBgColor
            },
            onClick: () => {
              vk.b.selectNextChannel(), IT.current.focus()
            },
            children: (0, ST.jsx)(eT.c, {
              text: XT.elementContent
            })
          }),
          onKeyDown: TT => {
            const oT = BT === DT.current.text;
            if ("ArrowUp" !== TT.key && "ArrowDown" !== TT.key || !oT && "" !== BT) "Tab" === TT.key && !TT.shiftKey && XT && (TT.preventDefault(), vk.b.selectNextChannel());
            else {
              TT.preventDefault();
              const IT = oT ? DT.current.stepsBack : 0;
              DT.current = (0, vk.i)(IT + ("ArrowUp" === TT.key ? 1 : -1)), FT(DT.current.text)
            }
          }
        })]
      })
    }
    var Ck = IT(35847);

    function jk(TT) {
      let {
        iL: oT,
        worldPanel: IT,
        aiShown: iT,
        defaultWidth: zT,
        children: kT
      } = TT;
      const WT = "hidden" !== oT;
      return (0, ST.jsx)(Ck.c, {
        side: "right",
        defaultSize: WT ? "max(18rem, 40%)" : zT,
        covers: "expanded" === oT ? "always" : WT || iT ? "narrow" : void 0,
        children: (0, ST.jsxs)("div", {
          className: xo()("CodeEditorRightColumn", {
            WorldExpanded: "expanded" === oT
          }),
          children: [WT && (0, ST.jsx)(Ck.c, {
            side: "top",
            children: IT
          }), kT]
        })
      })
    }
    var Jk = IT(1787),
      Uk = IT(1896),
      ak = IT(1266);
    class Yk {
      constructor(TT, oT, IT) {
        this.measure = TT, this.apply = oT, this.now = IT, this.last = null, this.resizedAt = -1 / 0, this.resizing = !1, this.stretchedAt = null
      }
      get rect() {
        var TT, oT;
        return null !== (TT = null === (oT = this.last) || void 0 === oT ? void 0 : oT.rect) && void 0 !== TT ? TT : null
      }
      sync() {
        const TT = function(TT) {
          const oT = Math.round(TT.left),
            IT = Math.round(TT.top);
          return {
            left: oT,
            top: IT,
            width: Math.round(TT.right) - oT,
            height: Math.round(TT.bottom) - IT
          }
        }(this.measure());
        if (TT.width <= 0 || TT.height <= 0) return;
        const oT = this.now(),
          IT = this.last;
        let iT = {
          width: TT.width,
          height: TT.height
        };
        null === IT || TT.width === IT.rect.width && TT.height === IT.rect.height || (this.resizing = oT - this.resizedAt < 100, this.resizedAt = oT);
        const zT = null !== IT && this.resizing && oT - this.resizedAt < 100 && (TT.width !== IT.bufferSize.width || TT.height !== IT.bufferSize.height);
        zT && (this.stretchedAt ??= oT), zT && oT - this.stretchedAt < 250 ? iT = IT.bufferSize : this.stretchedAt = null;
        const kT = {
          rect: TT,
          bufferSize: iT
        };
        var WT, XT;
        null !== IT && (XT = kT, (WT = IT).rect.left === XT.rect.left && WT.rect.top === XT.rect.top && WT.rect.width === XT.rect.width && WT.rect.height === XT.rect.height && WT.bufferSize.width === XT.bufferSize.width && WT.bufferSize.height === XT.bufferSize.height) || (this.last = kT, this.apply(kT))
      }
      stop() {
        null !== this.last && (this.last = null, this.apply(null))
      }
    }

    function Qk(TT) {
      const {
        style: oT
      } = document.documentElement;
      for (const [IT, iT] of [
          ["--worldViewLeft", null === TT || void 0 === TT ? void 0 : TT.left],
          ["--worldViewTop", null === TT || void 0 === TT ? void 0 : TT.top],
          ["--worldViewWidth", null === TT || void 0 === TT ? void 0 : TT.width],
          ["--worldViewHeight", null === TT || void 0 === TT ? void 0 : TT.height]
        ]) void 0 === iT ? oT.removeProperty(IT) : oT.setProperty(IT, `${iT}px`)
    }
    var Ok = IT(1665),
      Hk = IT(1799);

    function nk(TT, oT) {
      (0, zT.useEffect)((() => {
        if (!TT) return;
        const IT = TT => {
          var IT;
          "Escape" === TT.key ? (TT.stopPropagation(), TT.preventDefault(), oT()) : (IT = TT.code, Object.entries(BI.z).some((TT => {
            let [oT, iT] = TT;
            const zT = Hk.g[oT];
            return zT.includes("ui") && !zT.includes("core") && iT.includes(IT)
          })) && !(0, Ok.isTextEntry)(TT.target) && TT.preventDefault())
        };
        window.addEventListener("keydown", IT, !0);
        const iT = (0, qT.r)(oT);
        return () => {
          window.removeEventListener("keydown", IT, !0), iT()
        }
      }), [TT, oT])
    }

    function qk() {
      return (0, mz.l)().some((TT => TT !== mz.c))
    }

    function Zk(TT, oT) {
      return TT.map((TT => oT ? String(TT) : TT.toFixed(1))).join(", ")
    }

    function lk(TT) {
      let {
        freeCamera: oT,
        picking: IT,
        hovered: iT
      } = TT;
      const {
        t: kT
      } = (0, yT.t)(), WT = (0, zT.useRef)(null), XT = (0, zT.useRef)(null);
      return (0, zT.useEffect)((() => {
        const TT = (TT, oT) => {
            TT.textContent !== oT && (TT.textContent = oT)
          },
          IT = () => {
            const IT = oT ? FT.gameBridge.lookup("freeCameraPos", null) : null;
            TT(WT.current, Zk(null !== IT && void 0 !== IT ? IT : FT.gameBridge.lookup("localPos", null), !1));
            const iT = FT.gameBridge.lookup("targetedBlockPos", null);
            TT(XT.current, iT ? Zk(iT, !0) : "-")
          };
        return IT(), (0, ak.u)(IT)
      }), [oT]), (0, ST.jsxs)("div", {
        className: "WorldPanelCoordinates",
        children: [(0, ST.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: kT(oT ? "codeEditorWorld:camera" : "codeEditorWorld:position")
        }), (0, ST.jsx)("span", {
          ref: WT
        }), (0, ST.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: kT("codeEditorWorld:lookingAt")
        }), (0, ST.jsx)("span", {
          ref: XT,
          hidden: IT
        }), IT && (0, ST.jsxs)(ST.Fragment, {
          children: [(0, ST.jsx)("span", {
            children: iT ? Zk(iT.pos, !0) : "-"
          }), iT && (0, ST.jsx)("span", {
            className: "WorldPanelCoordsName",
            children: iT.name
          })]
        })]
      })
    }
    var sk = IT(35852);

    function tk(TT) {
      const oT = TT.currentTarget.getBoundingClientRect();
      return {
        x: (TT.clientX - oT.left) / oT.width,
        y: (TT.clientY - oT.top) / oT.height
      }
    }

    function Gk(TT) {
      const [oT, IT] = (0, zT.useState)(!1), [iT, kT] = (0, zT.useState)(null), WT = (0, zT.useRef)(null);
      (0, zT.useEffect)((() => {
        if (!oT) return;
        let TT = null,
          IT = null,
          iT = 1 / 0;
        const zT = (0, ak.p)((oT => {
          iT += oT;
          const zT = WT.current;
          if (zT === IT && iT < 100) return;
          IT = zT, iT = 0;
          const XT = zT && FT.gameBridge.lookup("blockAtViewPoint", zT);
          var BT, ST;
          (BT = XT) === (ST = TT) || null !== BT && null !== ST && BT.name === ST.name && (0, sk.c)(BT.pos, ST.pos) && (0, sk.c)(BT.normal, ST.normal) || (TT = XT, kT(XT), FT.gameBridge.send("setBlockHighlight", XT))
        }));
        return () => {
          zT(), null !== TT && FT.gameBridge.send("setBlockHighlight", null), kT(null)
        }
      }), [oT]);
      const XT = (0, zT.useCallback)((() => {
        IT(!1)
      }), []);
      nk(oT, XT);
      const BT = {
        onPointerMove: TT => {
          WT.current = tk(TT)
        },
        onPointerLeave: () => {
          WT.current = null
        },
        onClick: iT => {
          if (!oT) return;
          const zT = FT.gameBridge.lookup("blockAtViewPoint", tk(iT));
          null !== zT && (IT(!1), TT(zT.pos))
        }
      };
      return {
        picking: oT,
        setPicking: IT,
        hovered: iT,
        slotHandlers: BT
      }
    }

    function pk(TT) {
      FT.gameBridge.send("setFreeCameraMovesFly", TT)
    }

    function bk(TT) {
      let {
        shown: oT,
        setShown: IT,
        canInsertCode: iT
      } = TT;
      const {
        t: kT
      } = (0, yT.t)(), {
        isTouchScreen: WT
      } = (0, nT.k)(["isTouchScreen"]), XT = (0, zT.useRef)(null), FT = (0, zT.useCallback)((() => {
        var TT;
        null === (TT = XT.current.closest(".CodeEditorBg").querySelector(".cm-content")) || void 0 === TT || TT.focus()
      }), []), {
        control: DT,
        take: LT,
        release: KT,
        blocked: rT
      } = function(TT) {
        const [oT, IT] = (0, zT.useState)("none"), iT = (0, zT.useRef)("none"), [kT, WT] = (0, zT.useState)(!1), XT = TT => {
          iT.current = TT, IT(TT)
        }, BT = (0, zT.useCallback)((() => {
          const oT = iT.current;
          "none" !== oT && (XT("none"), (0, mz.o)(mz.c), "mouse" === oT && TT())
        }), [TT]), FT = (0, zT.useCallback)((TT => {
          qk() ? WT(!0) : (XT("mouse" === TT && "touchOnly" !== (0, Rk.b)() ? "mouse" : "touch"), (0, mz.n)(mz.c))
        }), []);
        return (0, RT.g)("pointerLockUpdate", (TT => {
          TT && "touch" === iT.current && "touchOnly" !== (0, Rk.b)() ? XT("mouse") : TT || "mouse" !== iT.current || BT()
        })), (0, zT.useEffect)((() => {
          if (!kT) return;
          const TT = () => {
            qk() || WT(!1)
          };
          return TT(), (0, mz.d)(TT)
        }), [kT]), nk("none" !== oT, BT), (0, zT.useEffect)((() => {
          if ("none" === oT) return;
          const TT = TT => {
            (0, Ok.isTextEntry)(TT.target) && BT()
          };
          return document.addEventListener("focusin", TT), () => {
            document.removeEventListener("focusin", TT)
          }
        }), [oT, BT]), (0, zT.useEffect)((() => (document.addEventListener("pointerlockerror", BT), () => {
          document.removeEventListener("pointerlockerror", BT)
        })), [BT]), (0, zT.useEffect)((() => () => {
          "none" !== iT.current && null !== nT.c.get("openInGameMenuName") && (0, mz.o)(mz.c)
        }), []), {
          control: oT,
          take: FT,
          release: BT,
          blocked: kT
        }
      }(FT), AT = (0, Uk.e)(Ck.d);
      (0, zT.useEffect)((() => {
        "touch" !== DT || "shown" !== oT || AT ? "none" === DT && "expanded" === oT && IT("shown") : IT("expanded")
      }), [DT, AT]),
      function(TT, oT) {
        const IT = (0, zT.useRef)(oT);
        IT.current = oT;
        const iT = (0, zT.useRef)(null);
        (0, zT.useLayoutEffect)((() => {
          const oT = new Yk((() => TT.current.getBoundingClientRect()), (TT => {
            var oT;
            "none" !== IT.current && Qk(null !== (oT = null === TT || void 0 === TT ? void 0 : TT.rect) && void 0 !== oT ? oT : null), (0, ak.A)().setGameView(TT)
          }), (() => performance.now()));
          iT.current = oT, oT.sync();
          const zT = (0, ak.n)((() => {
            oT.sync()
          }));
          return () => {
            zT(), nT.c.set({
              worldPanelHud: null
            }), oT.stop()
          }
        }), [TT]), (0, zT.useLayoutEffect)((() => {
          iT.current.sync(), Qk("none" === oT ? null : iT.current.rect), nT.c.set({
            worldPanelHud: oT
          })
        }), [oT])
      }(XT, "touch" === DT ? "touchControls" : "none");
      const {
        picking: gT,
        setPicking: hT,
        hovered: wT,
        slotHandlers: mT
      } = Gk((TT => {
        cT.h.XM("CodeEditorInsertText", {
          text: `[${TT.join(", ")}]`,
          focus: !WT
        }), (0, Ck.d)() && IT("hidden")
      })), eT = function() {
        const {
          allowed: TT,
          movesFly: oT
        } = (0, vT.f)("freeCamera"), IT = (0, zT.useRef)(oT), iT = (0, zT.useRef)(oT);
        return iT.current !== oT && (iT.current = oT, IT.current = oT), (0, zT.useEffect)((() => () => {
          IT.current && pk(!1)
        }), []), {
          allowed: TT,
          on: oT,
          toggle: () => {
            IT.current = !oT, pk(!oT)
          }
        }
      }(), uT = (0, BT.g)("hideCoordinates"), ET = (0, vT.f)("localPlayerAlive"), fT = !ET || rT;
      (0, zT.useEffect)((() => {
        ET || KT()
      }), [ET, KT]), (0, zT.useEffect)((() => {
        !fT && iT || hT(!1)
      }), [fT, iT, hT]);
      const CT = eT.on ? xT.m : xT.e,
        jT = gT ? xT.m : xT.e;
      return (0, ST.jsxs)("div", {
        className: "WorldPanel",
        children: [(0, ST.jsxs)("div", {
          className: "WorldPanelHeader",
          children: [(0, ST.jsx)("span", {
            className: "WorldPanelTitle",
            children: kT("codeEditorWorld:title")
          }), "touch" === DT && !AT && (0, ST.jsx)(xT.e, {
            className: "WorldPanelButton",
            onClick: KT,
            children: kT("codeEditorWorld:backToCode")
          }), !fT && eT.allowed && !WT && (0, ST.jsx)(pT.e, {
            tooltipInner: kT("codeEditorWorld:freeCameraTooltip"),
            hoverOnly: !0,
            children: (0, ST.jsx)(CT, {
              className: "WorldPanelButton",
              ariaPressed: eT.on,
              ariaLabel: kT("codeEditorWorld:freeCamera"),
              onClick: eT.toggle,
              children: (0, ST.jsx)(MT.e, {
                name: "video"
              })
            })
          }), !fT && iT && (0, ST.jsx)(pT.e, {
            tooltipInner: kT("codeEditorWorld:pickTooltip"),
            hoverOnly: !0,
            children: (0, ST.jsxs)(jT, {
              className: "WorldPanelButton",
              ariaPressed: gT,
              onClick: () => {
                KT(), hT(!gT)
              },
              children: [(0, ST.jsx)(MT.e, {
                name: "crosshairs"
              }), kT("codeEditorWorld:pick")]
            })
          }), (0, ST.jsx)(xT.j, {
            className: "WorldPanelHide",
            onClick: () => {
              IT("hidden")
            }
          })]
        }), !uT && (0, ST.jsx)(lk, {
          freeCamera: eT.on,
          picking: gT,
          hovered: wT
        }), (0, ST.jsxs)("div", {
          ref: XT,
          className: xo()("WorldPanelSlot", {
            TouchControl: "touch" === DT,
            Picking: gT
          }),
          onPointerDown: TT => {
            0 !== TT.button || fT || gT || LT(TT.pointerType)
          },
          ...mT,
          children: [!fT && !gT && (0, ST.jsx)("div", {
            className: "WorldPanelCrosshair",
            children: "+"
          }), !fT && "touch" !== DT && (0, ST.jsxs)("div", {
            className: "WorldPanelHint",
            children: [gT && kT(WT ? "codeEditorWorld:tapToPick" : "codeEditorWorld:clickToPick"), !gT && "none" === DT && !eT.on && kT(WT ? "codeEditorWorld:tapToPlay" : "codeEditorWorld:clickToPlay"), !gT && "none" === DT && eT.on && kT("codeEditorWorld:clickToFly"), "mouse" === DT && (0, ST.jsxs)(ST.Fragment, {
              children: [(0, ST.jsx)(Jk.e, {
                noaAction: "OpenLobbyLeaderboard"
              }), kT("codeEditorWorld:backToCode")]
            })]
          }), fT && (0, ST.jsxs)("div", {
            className: "WorldPanelWaiting",
            children: [(0, ST.jsx)("span", {
              children: kT(ET ? "codeEditorWorld:gameWaiting" : "codeEditorWorld:died")
            }), (0, ST.jsx)(xT.e, {
              onClick: qT.i,
              children: kT("codeEditorWorld:toGame")
            })]
          })]
        })]
      })
    }
    var yk = IT(4509);

    function Nk(TT) {
      let {
        iL: oT,
        setWorld: IT,
        toggleWorld: iT,
        aiShown: zT,
        closeAi: kT
      } = TT;
      const {
        t: WT
      } = (0, yT.t)(), XT = zT ? "ai" : "hidden" !== oT ? "world" : "code", BT = [{
        value: "code",
        label: WT("codeEditorWorld:codePane")
      }, {
        value: "world",
        label: WT("codeEditorWorld:title")
      }];
      zT && BT.push({
        value: "ai",
        label: WT("codeEditorWorld:aiPane")
      });
      return (0, ST.jsx)("div", {
        className: "CodeEditorPaneSwitch",
        children: (0, ST.jsx)(yk.e, {
          options: BT,
          value: XT,
          onChange: TT => {
            "world" !== TT ? (zT && kT(), IT("hidden")) : "hidden" === oT ? iT() : kT()
          },
          ariaLabel: WT("codeEditorWorld:panes"),
          keepsFocus: !0
        })
      })
    }
    var Pk = IT(35856);
    class dk {
      constructor(TT, oT) {
        this.storageKey = TT, this.defaultValue = oT, this.value = null, this.listeners = new Set, this.get = () => {
          if (null === this.value) {
            const TT = UT.e.getItem(this.storageKey);
            this.value = "boolean" === typeof TT ? TT : this.defaultValue
          }
          return this.value
        }, this.set = TT => {
          this.value = TT, UT.e.setItem(this.storageKey, TT);
          for (const oT of this.listeners) oT(TT)
        }
      }
      subscribe(TT) {
        return this.listeners.add(TT), () => {
          this.listeners.delete(TT)
        }
      }
    }
    const Vk = new dk("codeEditorLightMode", !1),
      TW = new dk("codeEditorAiHints", !0);

    function oW(TT) {
      const [oT, IT] = (0, zT.useState)(TT.get);
      return (0, zT.useEffect)((() => {
        const oT = TT.subscribe(IT);
        return IT(TT.get()), oT
      }), [TT]), [oT, TT.set]
    }
    var IW = IT(35861),
      iW = IT(35869),
      zW = IT(35872);
    const kW = (0, zT.lazy)((() => Promise.all([IT.e(289), IT.e(285), IT.e(288), IT.e(284), IT.e(81), IT.e(287), IT.e(286), IT.e(283)]).then((() => IT(40097))))),
      WW = (0, zT.lazy)((() => Promise.all([IT.e(76), IT.e(79), IT.e(80), IT.e(78), IT.e(291)]).then((() => IT(40282))))),
      XW = (0, zT.lazy)((() => Promise.all([IT.e(289), IT.e(288), IT.e(81), IT.e(79), IT.e(80), IT.e(78), IT.e(287), IT.e(286), IT.e(77), IT.e(88)]).then((() => IT(40288)))));

    function BW(TT) {
      return FT.gameBridge.query("worldCodeAiChunk", TT)
    }

    function FW() {
      return FT.gameBridge.query("worldCodeAiGameState", null)
    }

    function SW(TT) {
      const {
        gsUrl: oT,
        gameNameWithVariation: IT,
        lobbyName: iT
      } = Dk();
      return (0, Yz.postJsonWithMetricsCookiesAndJsonResponse)(`${oT}/code/get-lobby-code`, az.jk["get-lobby-code"].toBuffer({
        gameNameWithVariation: IT,
        lobbyName: iT,
        path: TT
      }), {
        retries: 1
      })
    }
    let DW = !1;
    const LW = [],
      xW = {
        message: "You do not have permission to view the code.",
        type: "warning"
      },
      cW = (0, zT.memo)((function(TT) {
        var oT, IT;
        let {
          show: iT,
          onOpen: kT,
          onClose: XT,
          isLobbyCode: DT
        } = TT;
        const LT = (0, zT.useRef)(""),
          [KT, rT] = (0, zT.useState)(null),
          AT = (0, zT.useRef)(DT),
          [gT, hT] = (0, zT.useState)({
            message: null,
            type: null
          }),
          [wT, mT] = (0, zT.useState)(""),
          eT = gT.message ? gT : {
            message: wT,
            type: "warning"
          },
          [fT, CT] = (0, zT.useState)(!0),
          [jT, UT] = oW(Vk),
          [aT, YT] = oW(TW),
          [QT, OT] = (0, zT.useState)(!1),
          [HT, ZT] = (0, zT.useState)(!1),
          lT = (0, zT.useRef)(null),
          sT = (0, zT.useRef)(!1);
        (0, zT.useEffect)((() => {
          var TT;
          HT && sT.current && (sT.current = !1, null === (TT = lT.current) || void 0 === TT || TT.focus())
        }), [HT]);
        const tT = (0, Pk.c)(),
          GT = (0, zT.useRef)(null),
          bT = (0, zT.useRef)(null),
          {
            openInGameMenuName: NT,
            openEverythingMenuName: PT
          } = (0, nT.k)(["openInGameMenuName", "openEverythingMenuName"]),
          dT = TT => {
            iT && (GT.current = TT, uo.current = !0)
          };
        (0, RT.g)("OpenReportMenu", (() => {
          dT("Bc")
        })), (0, RT.g)("OpenStoreFromCodeEditor", (() => {
          dT("store")
        })), (0, zT.useEffect)((() => {
          const TT = GT.current;
          null === TT || "Bc" === TT && ("makeReport" === NT || "makeDiscordReport" === NT) || "store" === TT && null !== PT || (GT.current = null, null === NT && null === PT ? DT ? (bT.current = iI.current, cT.h.XM("EditLobbyCode", KT)) : cT.h.XM("EditCodeBlock", {
            pos: KT,
            canChangePos: AT.current
          }) : (0, mk.G)())
        }), [NT, PT, DT, KT]), (0, zT.useEffect)((() => {
          if (iT) return () => {
            bT.current = null
          }
        }), [iT]);
        const [VT, To] = function() {
          const [TT, oT] = (0, zT.useState)(DW);
          return (0, RT.g)("CodeEditorAiHelperShown", (TT => {
            oT(TT)
          })), [TT, (0, zT.useCallback)((TT => {
            DW = TT, cT.h.XM("CodeEditorAiHelperShown", TT)
          }), [])]
        }(), [oo, Io] = (0, zT.useState)(null), [io, zo] = (0, zT.useState)([]), [ko, Wo] = (0, zT.useState)(0), [Xo, Bo] = (0, zT.useState)(0), [Fo, So] = (0, zT.useState)(""), Do = (0, zT.useRef)(null), [Lo, co] = (0, zT.useState)(DT ? zW.g : null), Ko = DT || null !== KT, Mo = (0, BT.g)("canEditCode"), ro = (0, BT.g)("canUseDevCreativeItems"), Ao = (0, wk.i)("welcome"), go = (0, wk.i)("docsOverview"), ho = go ? "docsOverview" : "welcome", wo = null !== go && void 0 !== go ? go : Ao, mo = (0, wk.i)("aiHelperOverview"), eo = mo ? "aiHelperOverview" : "welcome", Ro = null !== mo && void 0 !== mo ? mo : Ao, uo = (0, zT.useRef)(!1), vo = (0, zT.useRef)(!1), Eo = (0, zT.useRef)(null), [fo, Co] = (0, zT.useState)(""), [Jo, Uo] = (0, zT.useState)(!1), [ao, Yo] = (0, zT.useState)(null), Qo = (0, vT.f)("connectedGame"), Oo = DT && Mo && "classic" === Qo.gameNameWithVariation && !(0, jo.L)(Qo.lobbyName), [Ho, no] = (0, zT.useState)(null), [qo, Zo] = (0, zT.useState)({
          [Qz.h]: ""
        }), [so, to] = (0, zT.useState)({
          assets: {},
          revision: 0
        }), Go = (0, zT.useRef)(so), po = (0, zT.useCallback)((TT => {
          var oT;
          TT.revision < Go.current.revision || (Go.current = TT, to(TT), mT(TT.startupError ? `Schematics could not load: ${TT.startupError}` : ""), null === (oT = rI.current) || void 0 === oT || oT.onLobbyFilesChanged({
            ...SI.current,
            ...(0, Gz.j)(TT.assets)
          }))
        }), []), [bo, yo] = (0, zT.useState)(Qz.h), [No, Po] = (0, zT.useState)(null), [Vo, TI] = (0, zT.useState)(null), oI = (0, zT.useRef)(!1), II = (0, zT.useRef)(null), iI = (0, zT.useRef)(bo);
        iI.current = bo;
        const zI = (0, zT.useRef)(No);
        zI.current = No;
        const kI = No ? null : ao,
          XI = kI && !kI.engineLocked ? kI.worldCodeEngine : null,
          FI = (0, zT.useRef)(Vo);
        FI.current = Vo;
        const SI = (0, zT.useRef)(qo);
        SI.current = qo;
        const DI = (0, zT.useRef)(null),
          LI = (0, zT.useRef)(null),
          [xI, cI] = (0, zT.useState)(!1),
          KI = (0, ik.o)(),
          MI = (0, zT.useRef)([]),
          rI = (0, zT.useRef)(null),
          AI = (0, zT.useRef)(null),
          gI = (0, zT.useRef)(null);

        function hI(TT) {
          hT(TT), clearTimeout(Eo.current), Eo.current = setTimeout((() => {
            hT({
              message: null,
              type: null
            })
          }), 3e3)
        }
        const wI = (0, zT.useCallback)((function() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            oI.current && II.current && (FT.gameBridge.send("sendCodeCollab", {
              po: Oz.e.Leave,
              bo: (0, Oz.v)(II.current),
              lF: !!TT || null
            }), oI.current = !1, II.current = null), no(null)
          }), []),
          mI = (0, zT.useCallback)((TT => {
            const oT = {
              kind: "lobby",
              path: TT
            };
            II.current = oT, yo(TT), LT.current = "", FT.gameBridge.send("sendCodeCollab", {
              po: Oz.e.Join,
              bo: (0, Oz.v)(oT)
            }), oI.current = !0
          }), []),
          eI = (0, zT.useCallback)((TT => {
            var oT;
            const IT = null === (oT = AI.current) || void 0 === oT ? void 0 : oT.collabState;
            return IT && "lobby" === IT.docKey.kind && IT.docKey.path === TT && iI.current === TT ? Promise.resolve({
              doc: IT.doc,
              version: IT.version,
              clientID: IT.clientID,
              docKey: IT.docKey,
              httpConfig: IT.httpConfig
            }) : new Promise(((oT, IT) => {
              const iT = setTimeout((() => {
                  MI.current = MI.current.filter((TT => TT !== zT)), IT(new Error(`Timed out joining ${TT}`))
                }), 15e3),
                zT = IT => {
                  "lobby" === IT.docKey.kind && IT.docKey.path === TT && (clearTimeout(iT), MI.current = MI.current.filter((TT => TT !== zT)), oT(IT))
                };
              MI.current.push(zT), iI.current !== TT ? (wI(!0), mI(TT)) : oI.current || mI(TT)
            }))
          }), [mI, wI]),
          RI = (0, zT.useCallback)((async function(TT, oT) {
            let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
            const iT = Date.now();
            let zT = TT in SI.current;
            for (; zT !== oT;) {
              if (Date.now() - iT > IT) throw new Error(`Timed out waiting for lobby path ${TT} present=${oT}`);
              await (0, Yi.M)(50), zT = TT in SI.current
            }
          }), []),
          uI = (0, zT.useCallback)((TT => {
            const oT = SI.current,
              IT = Qz.h in oT && Qz.i in oT;
            if (!(0, Hz.e)(TT) || IT) {
              if (iI.current === TT) {
                var iT;
                const zT = IT && (0, Hz.e)(TT) ? TT === Qz.h ? Qz.i : Qz.h : null !== (iT = (0, Hz.c)(oT)) && void 0 !== iT ? iT : Qz.h;
                LI.current = {
                  fromPath: TT,
                  toPath: zT
                }, yo(zT)
              }
              FT.gameBridge.send("sendCodeCollab", {
                po: Oz.e.DeleteFile,
                bo: (0, Oz.v)({
                  kind: "lobby",
                  path: iI.current
                }),
                sF: TT
              })
            }
          }), []),
          vI = (0, zT.useCallback)((TT => {
            bT.current = null, Po(null), TI(null), !DT || TT === iI.current && oI.current || (wI(!0), mI(TT))
          }), [DT, wI, mI]),
          EI = (0, zT.useCallback)(((TT, oT) => {
            const IT = sz.e[TT],
              iT = IT && oT in IT.files ? oT : "index.ts";
            if (TT !== zI.current || iT !== FI.current) {
              var zT;
              if (TT !== zI.current) null === (zT = rI.current) || void 0 === zT || zT.stopContinuousSync(), wI(!0);
              Po(TT), TI(iT)
            }
          }), [wI]),
          fI = (0, zT.useCallback)((TT => {
            var oT;
            const IT = iI.current,
              iT = SI.current[IT],
              zT = oI.current && !zI.current && IT in TT && void 0 !== iT ? {
                ...TT,
                [IT]: iT
              } : TT;
            Zo(zT);
            const kT = DI.current;
            if (kT && kT in TT) DI.current = null, kT !== iI.current && vI(kT);
            else if (!(iI.current in TT) && oI.current && !zI.current) {
              var WT;
              vI(null !== (WT = (0, Hz.c)(TT)) && void 0 !== WT ? WT : Qz.h)
            }
            null === (oT = rI.current) || void 0 === oT || oT.onLobbyFilesChanged({
              ...zT,
              ...(0, Gz.j)(Go.current.assets)
            })
          }), [vI]),
          CI = (0, zT.useCallback)((() => SW(iI.current).then((async TT => {
            if (!oI.current || !TT.files) return null;
            fI(TT.files);
            const oT = await Lk({
              action: "state"
            });
            return po(oT), {
              ...TT.files,
              ...(0, Gz.j)(oT.assets)
            }
          })).catch((TT => (console.error("[CodeCollab] Failed to fetch lobby files via HTTP", TT), hI({
            message: "Could not refresh the file list",
            type: "warning"
          }), null)))), [fI, po]),
          jI = () => {
            XT()
          };
        (0, zT.useEffect)((() => {
          if (mT(""), !iT || !DT) return;
          let TT = !1;
          return Go.current = {
            assets: {},
            revision: 0
          }, to(Go.current), Lk({
            action: "state"
          }).then((oT => {
            TT || po(oT)
          })).catch((oT => {
            console.error("Could not load project schematics", oT), TT || mT("Could not load schematics. Reopen the Code Editor to retry.")
          })), () => {
            TT = !0
          }
        }), [iT, DT, po]);
        const JI = (0, zT.useCallback)((function() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            II.current && FT.gameBridge.send("sendCodeCollab", {
              po: Oz.e.Submit,
              bo: (0, Oz.v)(II.current),
              ...TT ? {
                TI: "keepOpen"
              } : {}
            })
          }), []),
          UI = (0, zT.useCallback)((() => {
            if (!II.current || "lobby" !== II.current.kind) return;
            const TT = fo.trim();
            (0, nz.q)(TT) ? (FT.gameBridge.send("sendCodeCollab", {
              po: Oz.e.ReloadAsVariation,
              bo: (0, Oz.v)(II.current),
              TI: TT
            }), Uo(!1)) : hI({
              message: "Variation must be 1-32 characters: A-Z, a-z, 0-9, _, -",
              type: "warning"
            })
          }), [fo]),
          aI = (0, zT.useCallback)((TT => {
            FT.gameBridge.send("sendCodeCollab", {
              po: Oz.e.SetEngine,
              bo: (0, Oz.v)({
                kind: "lobby",
                path: iI.current
              }),
              TI: TT
            })
          }), []),
          YI = (0, zT.useCallback)((TT => {
            if (!zI.current && Mo && (AT.current || DT)) {
              if (DT) {
                var oT;
                const IT = (0, Hz.j)(SI.current, iI.current),
                  iT = Math.min(WI.t, Math.max(0, WI.y - IT)),
                  zT = TT.slice(0, iT);
                return LT.current = zT, Zo((TT => ({
                  ...TT,
                  [iI.current]: zT
                }))), void(null === (oT = rI.current) || void 0 === oT || oT.onDocTextChanged(iI.current, zT))
              }
              LT.current = TT, So(TT)
            }
          }), [Mo, DT]);
        (0, RT.g)("EditLobbyCode", (TT => {
          var oT;
          JT.featureFlags.canSeePlayerWrittenText && DT && (wI(), rT(TT), LT.current = "", Zo({
            [Qz.h]: ""
          }), Yo(null), yo(Qz.h), Po(null), TI(null), DI.current = null, LI.current = null, null === (oT = rI.current) || void 0 === oT || oT.stopContinuousSync(), kT(), mI(Qz.h))
        })), (0, RT.g)("EditCodeBlock", (TT => {
          let {
            pos: oT,
            canChangePos: IT
          } = TT;
          if (JT.featureFlags.canSeePlayerWrittenText && !DT)
            if (wI(), null !== oT && (oT = [...oT]), rT(oT), AT.current = IT, null !== oT) {
              LT.current = "", So(""), kT();
              const TT = {
                  kind: "codeBlock",
                  pos: oT
                },
                iT = (0, Oz.v)(TT);
              Do.current !== iT && (Do.current = iT, zo([]), Bo(ko)), co((0, zW.c)(iT, [oT[0], oT[1], oT[2]], !!IT)), II.current = TT, FT.gameBridge.send("sendCodeCollab", {
                po: Oz.e.Join,
                bo: (0, Oz.v)(TT)
              }), oI.current = !0
            } else iT && XT()
        })), (0, RT.g)("codeCollabRejoin", (TT => {
          const oT = II.current ? (0, Oz.v)(II.current) : null;
          oT && TT.docKey === oT && (LT.current = TT.doc, DT || So(TT.doc), no((oT => oT ? {
            ...oT,
            doc: TT.doc,
            version: TT.version,
            clientID: (0, lz.b)()
          } : oT)))
        })), (0, RT.g)("codeCollab", (TT => {
          var oT;
          const IT = II.current ? (0, Oz.v)(II.current) : null;
          if (TT.type === Oz.h.LobbyFilesChanged && DT) {
            if ("string" !== typeof TT.files) return void CI();
            try {
              fI(JSON.parse(TT.files))
            } catch (FT) {
              console.error("[CodeCollab] Failed to parse lobby files", FT), CI()
            }
            return
          }
          if (TT.type === Oz.h.EngineSettings && DT) return void Yo(Mk(TT.engineSettings));
          const zT = TT.type === Oz.h.Joined ? (0, Oz.m)(TT.docKey) : null,
            kT = DT && "lobby" === (null === (oT = II.current) || void 0 === oT ? void 0 : oT.kind) && (0, Hz.e)(II.current.path) && "lobby" === (null === zT || void 0 === zT ? void 0 : zT.kind) && (0, Hz.e)(zT.path);
          if (!IT || TT.docKey === IT || kT)
            if (TT.type !== Oz.h.ForceClose) {
              if (iT)
                if (TT.type === Oz.h.Joined) {
                  var WT;
                  const ST = JSON.parse(TT.peers),
                    xT = TT.existingCursors ? JSON.parse(TT.existingCursors) : [],
                    MT = (0, lz.b)(),
                    rT = Dk(),
                    {
                      gsUrl: AT,
                      gameNameWithVariation: gT,
                      lobbyName: wT
                    } = rT,
                    mT = null !== (WT = (0, Oz.m)(TT.docKey)) && void 0 !== WT ? WT : II.current;
                  mT && (II.current = mT, "lobby" === mT.kind && (yo(mT.path), iI.current = mT.path));
                  const eT = mT || (DT ? {
                    kind: "lobby",
                    path: iI.current
                  } : {
                    kind: "codeBlock",
                    pos: KT
                  });

                  function RT(oT) {
                    var IT, iT;
                    if (!oI.current) return;
                    const zT = null !== (IT = oT.code) && void 0 !== IT ? IT : "",
                      kT = null !== (iT = oT.collabVersion) && void 0 !== iT ? iT : 0;
                    LT.current = zT, DT || So(zT), DT && oT.files ? Zo(oT.files) : DT && Zo((TT => ({
                      ...TT,
                      [iI.current]: zT
                    })));
                    const WT = {
                      doc: zT,
                      version: kT,
                      clientID: MT,
                      docKey: eT,
                      peers: ST,
                      editorCount: TT.editorCount,
                      existingCursors: xT,
                      httpConfig: rT
                    };
                    if (no(WT), "lobby" === eT.kind) {
                      var XT;
                      const TT = {
                        doc: zT,
                        version: kT,
                        clientID: MT,
                        docKey: eT,
                        httpConfig: rT
                      };
                      for (const oT of [...MI.current]) oT(TT);
                      null === (XT = rI.current) || void 0 === XT || XT.startWhenReady()
                    }
                    oT.canSeeCode ? (clearTimeout(Eo.current), hT({
                      message: null,
                      type: null
                    })) : function(TT) {
                      clearTimeout(Eo.current), hT(TT)
                    }(xW);
                    const BT = bT.current;
                    bT.current = null, DT && BT && oT.files && BT in oT.files && BT !== iI.current && vI(BT)
                  }
                  DT ? SW(iI.current).then(RT).catch((TT => {
                    console.error("[CodeCollab] Failed to fetch lobby code via HTTP", TT), wI()
                  })) : (0, Yz.postJsonWithMetricsCookiesAndJsonResponse)(`${AT}/code/get-code-block`, az.jk["get-code-block"].toBuffer({
                    gameNameWithVariation: gT,
                    lobbyName: wT,
                    pos: KT
                  }), {
                    retries: 1
                  }).then(RT).catch((TT => {
                    console.error("[CodeCollab] Failed to fetch code block via HTTP", TT), wI()
                  }))
                } else if (TT.type === Oz.h.Presence) {
                if (!IT) return;
                const uT = JSON.parse(TT.peers);
                no((oT => oT ? {
                  ...oT,
                  peers: uT,
                  editorCount: TT.editorCount
                } : oT))
              }
            } else {
              var BT;
              if (!IT) return;
              iT && DT && "keptOpen" === TT.updates && cT.h.XM("CodeEditorKeepEdits");
              const vT = II.current;
              oI.current = !1, II.current = null, no(null);
              if (!DT || "close" === TT.updates) return (0, iW.e)(), void(iT && XT());
              if (!iT) return;
              const ET = SI.current,
                fT = LI.current;
              LI.current = null;
              const CT = "lobby" === (null === vT || void 0 === vT ? void 0 : vT.kind) && vT.path === (null === fT || void 0 === fT ? void 0 : fT.fromPath),
                jT = fT && (CT || fT.toPath in ET || (0, Hz.e)(fT.toPath)) ? fT.toPath : iI.current in ET ? iI.current : null !== (BT = (0, Hz.c)(ET)) && void 0 !== BT ? BT : Qz.h;
              mI(jT)
            }
        })), (0, RT.g)("refetchCode", (() => {
          JT.featureFlags.canSeePlayerWrittenText && iT && oI.current && (Mo || (wI(), DT ? cT.h.XM("EditLobbyCode", KT) : cT.h.XM("EditCodeBlock", {
            pos: KT,
            canChangePos: AT.current
          })))
        }));
        const QI = (0, zT.useCallback)((() => {
            iT && (OT(!1), window.open("/docs", "_blank", "popup=yes,width=1200,height=800"))
          }), [iT]),
          OI = (0, zT.useCallback)((() => {
            OT(!1)
          }), []);
        (0, zT.useEffect)((() => {
          iT && Mo && ("docsButton" === wo && QT ? (0, mk.e)("docsButton") : wo && mk.i.includes(wo) && !QT && (OT(!0), To(!1)))
        }), [iT, Mo, wo, QT, To]);
        const HI = (0, zT.useCallback)((() => {
          To(!1)
        }), [To]);
        (0, zT.useEffect)((() => {
          iT && Mo && Ko && ("aiHelperButton" === Ro && VT ? (0, mk.e)("aiHelperButton") : Ro && mk.b.includes(Ro) && !VT && (To(!0), OT(!1)))
        }), [iT, Mo, Ko, Ro, VT, To]), (0, zT.useEffect)((() => {
          if (!iT || !Mo) return;
          const TT = DT ? "worldCode" : "codeBlock";
          return (0, mk.K)(TT, !0), () => {
            (0, mk.K)(TT, !1)
          }
        }), [iT, Mo, DT]), (0, zT.useEffect)((() => {
          if (iT) return () => {
            uo.current ? uo.current = !1 : (0, mk.G)()
          }
        }), [iT]), (0, zT.useEffect)((() => {
          (0, mk.N)("exportButton", !!ro)
        }), [ro]);
        const {
          t: nI
        } = (0, yT.t)(), qI = !VT && ko > Xo, ZI = qI ? xT.C : xT.v, lI = (0, zT.useCallback)(((TT, oT) => {
          cT.h.XM("CodeEditorGoToLine", {
            path: TT,
            line: oT
          }), vI(TT)
        }), [vI]), sI = (0, zT.useCallback)((TT => {
          gI.current = TT
        }), []), tI = function(TT, oT) {
          const [IT, iT] = (0, zT.useState)(null);
          return (0, zT.useEffect)((() => {
            if (!oT) return void iT(null);
            let IT = !1;
            return Ik(TT).then((TT => {
              IT || iT(TT)
            }), (TT => {
              console.error("[CodeEditor] could not collect the imported plugins", TT), IT || iT(null)
            })), () => {
              IT = !0
            }
          }), [TT, oT]), IT
        }(qo, iT);
        (0, zT.useEffect)((() => {
          tI && No && !tI.includes(No) && (Po(null), TI(null), DT && !oI.current && mI(iI.current))
        }), [No, tI, DT, mI]), AI.current = {
          collabState: Ho,
          ensureJoinedPath: eI,
          waitForLobbyPath: RI,
          pullLobbyFiles: CI,
          t: nI,
          canEditCode: !!Mo
        }, rI.current || (rI.current = new Fk({
          getLobbyFiles: () => ({
            ...SI.current,
            ...(0, Gz.j)(Go.current.assets)
          }),
          deleteSchematic: async TT => {
            const oT = await Lk({
              action: "remove",
              path: TT,
              expectedRevision: Go.current.revision
            });
            po(oT)
          },
          getActivePath: () => iI.current,
          getCollabSnapshot: () => {
            var TT;
            if (zI.current) return null;
            const oT = null === (TT = AI.current) || void 0 === TT ? void 0 : TT.collabState;
            return oT ? {
              doc: oT.doc,
              version: oT.version,
              clientID: oT.clientID,
              docKey: oT.docKey,
              httpConfig: oT.httpConfig
            } : null
          },
          replaceActiveDoc: (TT, oT) => {
            var IT, iT;
            return null !== (IT = null === (iT = gI.current) || void 0 === iT ? void 0 : iT.call(gI, TT, oT)) && void 0 !== IT && IT
          },
          ensureJoined: TT => AI.current.ensureJoinedPath(TT),
          createFile: (TT, oT) => {
            !1 !== (null === oT || void 0 === oT ? void 0 : oT.focus) && (DI.current = TT), FT.gameBridge.send("sendCodeCollab", {
              po: Oz.e.CreateFile,
              bo: (0, Oz.v)({
                kind: "lobby",
                path: iI.current
              }),
              sF: TT
            })
          },
          renameFile: (TT, oT) => {
            const IT = (0, Oz.v)({
              kind: "lobby",
              path: iI.current
            });
            iI.current === TT && (LI.current = {
              fromPath: TT,
              toPath: oT
            }, yo(oT)), FT.gameBridge.send("sendCodeCollab", {
              po: Oz.e.RenameFile,
              bo: IT,
              sF: TT,
              tF: oT
            })
          },
          deleteFile: TT => {
            uI(TT)
          },
          waitForLobbyPath: (TT, oT, IT) => AI.current.waitForLobbyPath(TT, oT, IT),
          pullLobbyFiles: () => AI.current.pullLobbyFiles(),
          setMessage: (TT, oT) => {
            hI({
              message: TT,
              type: oT
            })
          },
          onUnlinked: () => {
            cI(!1)
          },
          t: TT => AI.current.t(TT),
          canEditCode: () => AI.current.canEditCode,
          getStorageKey: () => {
            const {
              gameNameWithVariation: TT,
              lobbyName: oT
            } = FT.gameBridge.latest("connectedGame");
            return (0, ik.d)(TT, oT)
          }
        }));
        const GI = (0, zT.useCallback)((async TT => {
            const oT = rI.current;
            if (!oT) return !1;
            try {
              return await oT.writeLobbyFiles(TT)
            } catch (IT) {
              return console.error("World Code AI: couldn't write the change", IT), !1
            }
          }), []),
          pI = (0, zT.useCallback)((async TT => {
            var oT, IT;
            const iT = null === (oT = TT.find((TT => TT.path === IW.d))) || void 0 === oT ? void 0 : oT.text,
              zT = II.current;
            return void 0 !== iT && "codeBlock" === (null === zT || void 0 === zT ? void 0 : zT.kind) && (!(null === (IT = gI.current) || void 0 === IT || !IT.call(gI, (0, Oz.v)(zT), iT)) && (LT.current = iT, So(iT), !0))
          }), []),
          bI = (0, zT.useCallback)((async () => {
            try {
              var TT, oT;
              const IT = await SW(Qz.h);
              return !1 === IT.canSeeCode ? null : null !== (TT = IT.files) && void 0 !== TT ? TT : {
                [Qz.h]: null !== (oT = IT.code) && void 0 !== oT ? oT : ""
              }
            } catch (IT) {
              return console.error("World Code AI: couldn't read World Code for a code block", IT), null
            }
          }), []),
          yI = (0, zT.useMemo)((() => ({
            [IW.d]: Fo
          })), [Fo]),
          NI = (0, zT.useCallback)(((TT, oT) => {
            cT.h.XM("CodeEditorGoToLine", {
              path: IW.d,
              line: oT
            })
          }), []);
        (0, zT.useEffect)((() => {
          VT && iT && Bo(ko)
        }), [VT, iT, ko]);
        const PI = (0, zT.useCallback)((() => {
            var TT, oT;
            JI();
            const IT = (0, JT.isTouchscreen)() ? "open World Code again" : `press ${null!==(TT=null===(oT=BI.z.OpenCodeEditor)||void 0===oT?void 0:oT[0])&&void 0!==TT?TT:"F8"}`,
              iT = DT ? `\ud83e\udd16 Try out your change, then ${IT} to tell the AI Helper how it went.` : "\ud83e\udd16 Click the code block to try your change, then open it again to tell the AI Helper how it went.";
            cT.h.XM("chat", {
              content: [{
                str: iT,
                style: {
                  color: uT.L.cyanUiText
                }
              }]
            })
          }), [JI, DT]),
          dI = (0, zT.useCallback)((TT => {
            const oT = KT,
              IT = AT.current;
            DT || !oT || FT.gameBridge.lookup("codeBlockClickable", oT) ? (0, iW.i)(TT, {
              submit: () => {
                JI(), cT.h.XM("chat", {
                  content: [{
                    str: "\ud83e\udd16 Testing your change. The AI Helper comes back in a moment.",
                    style: {
                      color: uT.L.cyanUiText
                    }
                  }]
                }), !DT && oT && setTimeout((() => {
                  FT.gameBridge.send("clickCodeBlock", oT)
                }), 1e3)
              },
              reopen: () => {
                (0, qT.t)() || (DT ? cT.h.XM("EditLobbyCode", oT) : cT.h.XM("EditCodeBlock", {
                  pos: oT,
                  canChangePos: IT
                }))
              }
            }) : PI()
          }), [JI, DT, KT, PI]),
          VI = (0, zT.useCallback)((() => {
            To(!1)
          }), [To]),
          Ti = (0, zT.useRef)(jI);
        Ti.current = jI;
        const oi = (0, zT.useCallback)((function(TT) {
            let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            cT.h.XM("WorldCodeAiDraft", {
              text: TT,
              send: oT
            }), Ti.current(), cT.h.XM("EditLobbyCode", KT)
          }), [KT]),
          Ii = (0, zT.useCallback)((TT => {
            Ti.current(), TT.codeBlock ? cT.h.XM("EditCodeBlock", {
              pos: [...TT.pos],
              canChangePos: TT.canChangePos
            }) : cT.h.XM("EditLobbyCode", KT)
          }), [KT]);
        (0, RT.g)("WorldCodeAiDraft", (TT => {
          DT && (Io(TT), To(!0))
        }));
        const ii = !!Mo && !!wo && mk.i.includes(wo);
        (0, zT.useEffect)((() => {
          iT && VT && Ko && !ii && OT(!1)
        }), [iT, VT, Ko, ii]);
        const zi = (0, zT.useCallback)((() => {
            To(!1), OT(!1)
          }), [To]),
          {
            iL: ki,
            setWorld: Wi,
            toggleWorld: Xi
          } = function(TT) {
            let {
              showAi: oT,
              showDocs: IT,
              showChat: iT,
              hideOtherRightPanels: kT
            } = TT;
            const [WT, XT] = (0, zT.useState)("hidden"), BT = (0, zT.useRef)(null), FT = (0, zT.useCallback)((() => {
              BT.current = null, XT((TT => "hidden" === TT ? TT : (0, Ck.d)() ? "hidden" : "shown"))
            }), []);
            (0, zT.useEffect)((() => {
              (oT || IT) && FT()
            }), [oT, IT, FT]), (0, zT.useEffect)((() => {
              iT && FT()
            }), [iT, FT]);
            const ST = "hidden" !== WT && (0, Ck.d)();
            (0, zT.useLayoutEffect)((() => {
              if (ST) {
                const TT = document.activeElement;
                TT instanceof HTMLElement && TT.closest(".cm-content") && (BT.current = TT, TT.blur())
              } else {
                var TT;
                null === (TT = BT.current) || void 0 === TT || TT.focus(), BT.current = null
              }
            }), [ST]);
            const DT = (0, zT.useCallback)((() => {
              "hidden" === WT ? (XT("shown"), (0, Ck.d)() && kT()) : XT("hidden")
            }), [WT, kT]);
            return {
              iL: WT,
              setWorld: XT,
              toggleWorld: DT
            }
          }({
            showAi: VT,
            showDocs: QT,
            showChat: HT,
            hideOtherRightPanels: zi
          }),
          Bi = VT && null !== Lo && Ko,
          Fi = (0, zT.useCallback)((() => {
            Io(null)
          }), []),
          [Si, Di] = (0, zT.useState)(null);
        (0, RT.g)("WorldCodeAiSelection", (TT => {
          iT && (Di(TT), To(!0), OT(!1))
        }));
        const Li = (0, zT.useCallback)((() => {
          Di(null)
        }), []);
        (0, RT.g)("chat", (TT => {
          let {
            content: oT
          } = TT;
          if (!DT && null === Do.current) return;
          const IT = Array.isArray(oT) ? oT : [oT],
            iT = IT.some((TT => {
              var oT;
              return (null === TT || void 0 === TT || null === (oT = TT.style) || void 0 === oT ? void 0 : oT.color) === uT.L.redUiText
            })),
            zT = IT.map((TT => {
              var oT;
              const IT = null !== (oT = null === TT || void 0 === TT ? void 0 : TT.str) && void 0 !== oT ? oT : TT;
              return "string" === typeof IT ? IT : ""
            })).join("");
          iT && /world code|error/i.test(zT) && (zo((TT => [...TT, zT].slice(-10))), Wo((TT => TT + 1)), (0, iW.d)(zT))
        })), (0, zT.useEffect)((() => {
          if (!iT || !DT || !KI) return;
          let TT = !1;
          return (async (oT, IT) => {
            const iT = await (null === (oT = rI.current) || void 0 === oT ? void 0 : oT.tryRestoreHandle());
            !TT && iT && (cI(!0), null === (IT = rI.current) || void 0 === IT || IT.startWhenReady())
          })(), () => {
            TT = !0
          }
        }), [iT, DT, KI]), (0, zT.useEffect)((() => {
          var TT;
          iT || (null === (TT = rI.current) || void 0 === TT || TT.stopContinuousSync(), wI(!1), vo.current && (vo.current = !1, FT.gameBridge.send("sendChatMessage", {
            US: "//export",
            channelName: null
          })))
        }), [iT, wI]);
        const xi = (0, zT.useCallback)((async () => {
            if (KI && rI.current) try {
              if (!await rI.current.linkFolder()) return;
              cI(!0), await rI.current.startWhenReady()
            } catch (TT) {
              console.error("[WorldCodeDirectorySync] Link failed", TT), hI({
                message: nI("codeEditor:directorySyncError"),
                type: "warning"
              })
            }
          }), [KI, nI]),
          ci = (0, zT.useCallback)((async () => {
            rI.current && await rI.current.unlinkFolder()
          }), []),
          Ki = (0, zT.useCallback)((() => {
            KI ? xI ? ci() : xi() : xz.NotificationProvider.showAlertPopup({
              title: "codeEditor:directorySyncUnsupported",
              subtitle: "codeEditor:directorySyncUnsupportedBody",
              confirmText: "general:ok"
            })
          }), [KI, xI, xi, ci]),
          Mi = DT && "hidden" !== ki;
        return (0, ST.jsxs)(WT.e, {
          className: xo()("CodeEditorBg", {
            CodeEditorLight: jT,
            WorldShown: "hidden" !== ki
          }),
          close: jI,
          escDoesExit: !0,
          show: iT,
          togglePointerLock: !1,
          globallyUniqueKey: DT ? "LobbyCodeEditor" : "CodeBlockEditor",
          children: [(0, ST.jsx)(wk.b, {
            tutorial: "welcome",
            step: "codeBlockIntro",
            text: nI("codeEditor:tutorialCodeBlockIntro"),
            enabled: !!Mo && !DT
          }), (0, ST.jsx)(wk.b, {
            tutorial: "welcome",
            step: "worldCodeIntro",
            text: (0, ST.jsxs)(ST.Fragment, {
              children: [(0, ST.jsx)("p", {
                children: nI("codeEditor:tutorialWorldCodeWelcome")
              }), (0, ST.jsxs)("ul", {
                className: "TutorialStepList",
                children: [(0, ST.jsx)("li", {
                  children: nI("codeEditor:tutorialWorldCodeUseSetUp")
                }), (0, ST.jsx)("li", {
                  children: nI("codeEditor:tutorialWorldCodeUseReact")
                }), (0, ST.jsx)("li", {
                  children: nI("codeEditor:tutorialWorldCodeUseRun")
                })]
              })]
            }),
            enabled: !!Mo && DT
          }), (0, ST.jsx)("div", {
            className: "CodeEditorTitle",
            children: DT ? "World Code" : "Code Block"
          }), (0, ST.jsxs)("div", {
            className: "CodeEditorTopBar",
            children: [(0, ST.jsxs)("div", {
              className: "CodeEditorTopLeft",
              children: [(0, ST.jsx)(pT.e, {
                tooltipInner: nI(ro ? "codeEditor:exportTooltip" : "codeEditor:exportOwnerOnly"),
                delayShow: ro ? void 0 : 0,
                hideTooltip: "exportButton" === Ao,
                children: (0, ST.jsx)(wk.g, {
                  tutorial: "welcome",
                  step: "exportButton",
                  text: nI("codeEditor:tutorialExport"),
                  enabled: !!Mo,
                  children: (0, ST.jsx)(xT.m, {
                    className: "CodeEditorButton",
                    disabled: !ro,
                    onClick: () => {
                      "exportButton" === Ao && ((0, mk.e)("exportButton"), uo.current = !0), vo.current = !0, jI()
                    },
                    padDestructive: !0,
                    children: nI("codeEditor:exportWorld")
                  })
                })
              }), (0, ST.jsx)(Nk, {
                iL: ki,
                setWorld: Wi,
                toggleWorld: Xi,
                aiShown: Bi,
                closeAi: VI
              })]
            }), (0, ST.jsxs)("div", {
              className: "CodeEditorTopRight",
              children: [Mo && (0, ST.jsx)(pT.e, {
                tooltipInner: nI("codeEditor:helpTooltip"),
                hideTooltip: "helpButton" === Ao,
                children: (0, ST.jsx)(wk.g, {
                  tutorial: "welcome",
                  step: "helpButton",
                  text: nI("codeEditor:tutorialHelpButton"),
                  placement: "bottom",
                  children: (0, ST.jsx)(xT.e, {
                    className: "CodeEditorHelpButton",
                    ariaLabel: nI("codeEditor:helpTooltip"),
                    onClick: () => {
                      (0, mk.e)("helpButton"), xz.NotificationProvider.showCustomPopup({
                        body: TT => (0, ST.jsx)(ek, {
                          close: TT
                        }),
                        unlockPointerKey: "codeEditorTutorials"
                      })
                    },
                    children: (0, ST.jsx)("div", {
                      className: "CodeEditorHelpButtonInner",
                      children: (0, ST.jsx)(MT.e, {
                        name: "circle-question"
                      })
                    })
                  })
                })
              }), (0, ST.jsx)(pT.e, {
                tooltipInner: nI("codeEditor:closeTooltip"),
                children: (0, ST.jsx)("div", {
                  className: "CodeEditorCloseButtonClickZone",
                  onClick: () => {
                    jI()
                  },
                  children: (0, ST.jsx)(xT.j, {
                    className: "CodeEditorCloseButton"
                  })
                })
              })]
            })]
          }), (0, ST.jsx)(Zz, {
            peers: null !== (oT = null === Ho || void 0 === Ho ? void 0 : Ho.peers) && void 0 !== oT ? oT : []
          }), (0, ST.jsxs)("div", {
            className: "CodeEditorMainArea",
            children: [HT && tT && (0, ST.jsx)(Ck.c, {
              side: "left",
              defaultSize: "max(16rem, 24%)",
              children: (0, ST.jsx)(fk, {
                inputRef: lT,
                close: () => {
                  ZT(!1)
                }
              })
            }), DT && (0, ST.jsx)(yz, {
              schematics: so.assets,
              onManageSchematic: TT => {
                Mo && xz.NotificationProvider.showCustomPopup({
                  body: oT => (0, ST.jsx)(Kk, {
                    initialPath: TT,
                    onChanged: po,
                    onClose: oT
                  }),
                  unlockPointerKey: "worldCodeSchematics"
                })
              },
              files: qo,
              activePath: bo,
              canEdit: !!Mo,
              directoryLinked: xI,
              pluginNames: null !== tI && void 0 !== tI ? tI : LW,
              activePluginName: No,
              activePluginFile: Vo,
              onSelect: vI,
              onSelectPlugin: EI,
              onToggleDirectorySync: Ki,
              onCreate: TT => {
                DI.current = TT, FT.gameBridge.send("sendCodeCollab", {
                  po: Oz.e.CreateFile,
                  bo: (0, Oz.v)({
                    kind: "lobby",
                    path: iI.current
                  }),
                  sF: TT
                })
              },
              onRename: (TT, oT) => {
                iI.current === TT && (LI.current = {
                  fromPath: TT,
                  toPath: oT
                }, yo(oT)), FT.gameBridge.send("sendCodeCollab", {
                  po: Oz.e.RenameFile,
                  bo: (0, Oz.v)({
                    kind: "lobby",
                    path: iI.current
                  }),
                  sF: TT,
                  tF: oT
                })
              },
              onRenameFolder: (TT, oT) => {
                const [IT] = (0, Hz.i)([iI.current], TT, oT);
                IT && (LI.current = {
                  fromPath: IT[0],
                  toPath: IT[1]
                }, yo(IT[1])), FT.gameBridge.send("sendCodeCollab", {
                  po: Oz.e.RenameFolder,
                  bo: (0, Oz.v)({
                    kind: "lobby",
                    path: iI.current
                  }),
                  sF: TT,
                  tF: oT
                })
              },
              onDelete: uI
            }), (0, ST.jsx)("div", {
              className: xo()("CodeEditorMessage", {
                CodeEditorMessageHidden: !eT.message,
                CodeEditorMessageSuccess: "success" === eT.type
              }),
              children: eT.message && (0, ST.jsx)("div", {
                className: "CodeEditorMessageText",
                children: eT.message
              })
            }), (0, ST.jsx)(zT.Suspense, {
              fallback: (0, ST.jsx)("div", {
                className: "CodeEditorContent",
                children: (0, ST.jsx)(ET.d, {})
              }),
              children: (0, ST.jsx)(kW, {
                isLobbyCode: DT,
                code: Ho ? Ho.doc : LT.current,
                files: DT ? qo : void 0,
                activePath: DT ? bo : void 0,
                pluginName: No,
                pluginFile: Vo,
                pluginSource: No && Vo ? null === (IT = sz.e[No]) || void 0 === IT ? void 0 : IT.files[Vo] : void 0,
                onChange: YI,
                canEditCode: Mo,
                setTemporaryMessage: hI,
                close: jI,
                showTooltips: fT,
                lightMode: jT,
                collabState: Ho,
                setActiveDocReplacer: sI,
                showAiHints: Ko && aT,
                canAiChangeCode: !!Mo && (DT || !!AT.current),
                onRemoteDocChange: TT => {
                  var oT;
                  (LT.current = TT, DT) ? (Zo((oT => ({
                    ...oT,
                    [iI.current]: TT
                  }))), null === (oT = rI.current) || void 0 === oT || oT.onDocTextChanged(iI.current, TT)) : So(TT)
                }
              })
            }), (QT || Bi || "hidden" !== ki) && (0, ST.jsxs)(jk, {
              iL: ki,
              worldPanel: (0, ST.jsx)(bk, {
                shown: ki,
                setShown: Wi,
                canInsertCode: !!Mo && !No
              }),
              aiShown: Bi,
              defaultWidth: QT ? "40%" : "max(18rem, 36%)",
              children: [QT && (0, ST.jsx)(zT.Suspense, {
                fallback: (0, ST.jsx)("div", {
                  className: "DocsPanel",
                  children: (0, ST.jsx)(ET.d, {})
                }),
                children: (0, ST.jsx)(WW, {
                  popOutDocs: QI,
                  hideDocs: OI,
                  tutorialEnabled: !!Mo
                })
              }), Bi && (0, ST.jsx)(zT.Suspense, {
                fallback: (0, ST.jsx)("div", {
                  className: "CodeEditorPanelLoading",
                  children: (0, ST.jsx)(ET.d, {})
                }),
                children: (0, ST.jsx)(XW, {
                  target: Lo,
                  chatKey: `${Qo.gameNameWithVariation}/${Qo.lobbyName}/aiHelper`,
                  historyKey: `${Qo.gameNameWithVariation}/${Qo.lobbyName}/${Lo.key}`,
                  files: Lo.codeBlock ? yI : qo,
                  activePath: Lo.codeBlock ? IW.d : bo,
                  canEdit: !!Mo && (Lo.codeBlock ? !!AT.current : !No),
                  isLoaded: null !== Ho,
                  errors: io,
                  errorCount: ko,
                  applyFiles: Lo.codeBlock ? pI : GI,
                  submit: PI,
                  testRun: dI,
                  close: VI,
                  goToLine: Lo.codeBlock ? NI : lI,
                  openWorldCode: Lo.codeBlock ? oi : void 0,
                  readWorldCode: Lo.codeBlock ? bI : void 0,
                  viewChunk: BW,
                  viewGameState: FW,
                  openTarget: Mo ? Ii : void 0,
                  draft: oo,
                  onDraftUsed: Fi,
                  selection: Si,
                  onSelectionUsed: Li
                }, Lo.key)
              })]
            })]
          }), (null === kI || void 0 === kI ? void 0 : kI.fallback) && (0, ST.jsx)(rk, {
            fallback: kI.fallback,
            onGoToLine: lI
          }), (0, ST.jsxs)("div", {
            className: "CodeEditorButtons",
            "data-pad-hint-bar-avoid": !0,
            children: [(0, ST.jsx)(pT.e, {
              tooltipInner: nI(jT ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
              placement: "top",
              children: (0, ST.jsx)(xT.e, {
                className: "CodeEditorButton CodeEditorThemeButton",
                ariaLabel: nI(jT ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
                onClick: () => {
                  UT(!jT)
                },
                children: (0, ST.jsx)(MT.e, {
                  name: jT ? "moon" : "sun-bright"
                })
              })
            }), (0, ST.jsx)(pT.e, {
              tooltipInner: nI(Mi ? "codeEditorWorld:submitCodeTooltip" : "codeEditor:submitCodeTooltip"),
              placement: "top",
              children: (0, ST.jsx)(xT.m, {
                className: "CodeEditorButton",
                onClick: () => {
                  JI(Mi)
                },
                padDefaultFocus: !0,
                children: nI("codeEditor:submitCode")
              })
            }), (0, ST.jsx)(pT.e, {
              tooltipInner: nI(QT ? "codeEditor:hideDocsTooltip" : "codeEditor:showDocsTooltip"),
              placement: "top",
              hideTooltip: "docsButton" === wo || "hideDocsButton" === wo,
              children: (0, ST.jsx)(wk.g, {
                tutorial: ho,
                step: QT ? "hideDocsButton" : "docsButton",
                text: nI(QT ? "codeEditor:tutorialHideDocs" : "codeEditor:tutorialDocs"),
                enabled: !!Mo,
                placement: "top",
                waitForClick: !0,
                onPrevious: QT && "welcome" === ho ? OI : void 0,
                children: (0, ST.jsx)(xT.v, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    (0, mk.e)(QT ? "hideDocsButton" : "docsButton"), OT(!QT), To(!1)
                  },
                  children: nI(QT ? "codeEditor:hideDocs" : "codeEditor:showDocs")
                })
              })
            }), Ko && (0, ST.jsx)(wk.g, {
              tutorial: eo,
              step: VT ? "hideAiHelperButton" : "aiHelperButton",
              text: nI(VT ? "codeEditorAiTutorial:hideAiHelperButton" : "welcome" === eo ? "codeEditorAiTutorial:welcomeAiHelperButton" : "codeEditorAiTutorial:aiHelperButton"),
              enabled: !!Mo,
              placement: "top",
              waitForClick: !0,
              onPrevious: VT && "welcome" === eo ? HI : void 0,
              children: (0, ST.jsx)(ZI, {
                className: "CodeEditorButton",
                onClick: () => {
                  (0, mk.e)(VT ? "hideAiHelperButton" : "aiHelperButton"), To(!VT), OT(!1)
                },
                children: VT ? "Hide AI Helper" : qI ? "Fix error with AI" : "AI Helper"
              })
            }), tT && (0, ST.jsx)(pT.e, {
              tooltipInner: nI(HT ? "codeEditorChat:hideChatTooltip" : "codeEditorChat:showChatTooltip"),
              placement: "top",
              children: (0, ST.jsx)(xT.v, {
                className: "CodeEditorButton",
                onClick: () => {
                  sT.current = !HT, ZT(!HT)
                },
                children: nI(HT ? "codeEditorChat:hideChat" : "codeEditorChat:showChat")
              })
            }), (0, ST.jsx)(pT.e, {
              tooltipInner: nI("hidden" === ki ? "codeEditorWorld:showWorldTooltip" : "codeEditorWorld:hideWorldTooltip"),
              placement: "top",
              children: (0, ST.jsx)(xT.v, {
                className: "CodeEditorButton CodeEditorWorldButton",
                onClick: Xi,
                children: nI("hidden" === ki ? "codeEditorWorld:showWorld" : "codeEditorWorld:hideWorld")
              })
            }), (0, ST.jsx)(pT.e, {
              tooltipInner: nI("codeEditor:formatCodeTooltip"),
              placement: "top",
              children: (0, ST.jsx)(xT.e, {
                className: "CodeEditorButton",
                onClick: () => {
                  cT.h.XM("FormatCode")
                },
                children: nI("codeEditor:formatCode")
              })
            }), (0, ST.jsx)(pT.e, {
              tooltipInner: nI("codeEditor:copyCodeTooltip"),
              placement: "top",
              children: (0, ST.jsx)(xT.e, {
                className: "CodeEditorButton",
                onClick: () => {
                  navigator.clipboard.writeText(LT.current).then((() => {
                    hI({
                      message: "Successfully copied code to clipboard",
                      type: "success"
                    })
                  })).catch((() => {
                    hI({
                      message: "Failed to copy code to clipboard",
                      type: "warning"
                    })
                  }))
                },
                children: nI("codeEditor:copyCode")
              })
            }), (0, ST.jsx)(pT.e, {
              tooltipInner: nI(fT ? "codeEditor:hideTooltipsTooltip" : "codeEditor:showTooltipsTooltip"),
              placement: "top",
              children: (0, ST.jsx)(xT.e, {
                className: "CodeEditorButton",
                onClick: () => {
                  CT(!fT)
                },
                children: nI(fT ? "codeEditor:hideTooltips" : "codeEditor:showTooltips")
              })
            }), !DT && (0, ST.jsx)(pT.e, {
              tooltipInner: nI("codeEditor:worldCodeTooltip"),
              placement: "top",
              hideTooltip: "worldCodeButton" === Ao,
              children: (0, ST.jsx)(wk.g, {
                tutorial: "welcome",
                step: "worldCodeButton",
                text: nI("codeEditor:tutorialWorldCodeButton"),
                enabled: !!Mo,
                placement: "top",
                waitForClick: !0,
                children: (0, ST.jsx)(xT.v, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    "worldCodeButton" === Ao && ((0, mk.e)("worldCodeButton"), uo.current = !0), jI(), cT.h.XM("EditLobbyCode", KT)
                  },
                  children: nI("codeEditor:worldCode")
                })
              })
            }), (Oo || XI || Ko) && (0, ST.jsx)(pT.e, {
              tooltipInner: nI("codeEditor:moreOptionsTooltip"),
              placement: "top",
              children: (0, ST.jsx)(xT.e, {
                className: "CodeEditorButton CodeEditorMoreButton",
                onClick: () => {
                  Uo(!0)
                },
                children: (0, ST.jsx)(MT.e, {
                  name: "ellipsis"
                })
              })
            })]
          }), Jo && (0, ST.jsx)(Kz.e, {
            middleScreenPopupContainerClassName: "CodeEditorMoreOptionsPopup",
            close: () => {
              Uo(!1)
            },
            body: (0, ST.jsx)(hk, {
              engine: XI,
              onSetEngine: aI,
              aiHints: Ko ? {
                shown: aT,
                setShown: YT
              } : null,
              variation: Oo ? {
                name: fo,
                setName: Co,
                reload: UI
              } : null
            })
          })]
        })
      })),
      KW = new Set(["makeReport", "makeDiscordReport", "inviteLink"]);

    function MW(TT) {
      return "inventory" === TT
    }
    const rW = (0, zT.memo)((function() {
      const {
        openEverythingMenuName: TT,
        openInGameMenuName: oT
      } = (0, nT.k)(["openEverythingMenuName", "openInGameMenuName"]), IT = (0, vT.f)("fullInventory"), kT = (0, zT.useRef)(null), WT = (0, bo.o)();
      (0, RT.g)("toggleMenu", (TT => {
        var oT;
        if (!WT.shown) return;
        const IT = nT.c.get("openInGameMenuName");
        let iT = TT.split("|")[0];
        const zT = null !== (oT = TT.split("|")[1]) && void 0 !== oT ? oT : null;
        ("closeCurrentMenu" === zT && IT || iT === IT) && (kT.current = null, iT = null);
        const XT = "closeCurrentMenu" === zT ? null : zT;
        kT.current !== XT && (kT.current = XT), null !== iT && (0, mz.o)(mz.c, {
          keepsMovement: MW(iT)
        }), nT.c.set({
          openInGameMenuName: iT
        })
      }));
      const XT = (0, zT.useCallback)((TT => () => {
          cT.h.XM("toggleMenu", TT)
        }), []),
        BT = (0, zT.useRef)({
          cantCrouchIfNotFullscreen: XT("cantCrouchIfNotFullscreen"),
          makeReport: XT("makeReport"),
          makeDiscordReport: XT("makeDiscordReport"),
          editBook: XT("editBook"),
          editNameTag: XT("editNameTag"),
          inventory: XT("inventory"),
          inviteLink: XT("inviteLink"),
          writeOnBoard: XT("writeOnBoard"),
          codeEditor: XT("codeEditor"),
          lobbyCodeEditor: XT("lobbyCodeEditor"),
          customLobbyBlockEditor: XT("customLobbyBlockEditor"),
          ironChestPasskeyInput: XT("ironChestPasskeyInput"),
          petUi: XT("petUi")
        }),
        FT = (0, zT.useCallback)((() => {
          nT.c.set({
            openInGameMenuName: null
          })
        }), []),
        DT = (0, zT.useRef)(null);
      return (0, zT.useEffect)((() => {
        if (oT) {
          var TT;
          (0, mz.o)(mz.c, {
            keepsMovement: MW(oT)
          }), DT.current = KW.has(oT) ? null !== (TT = nT.c.get("openEverythingMenuName")) && void 0 !== TT ? TT : DT.current : null, nT.c.set({
            openEverythingMenuName: null
          })
        } else {
          const TT = DT.current;
          DT.current = null, null !== TT && null === nT.c.get("openEverythingMenuName") && nT.c.set({
            openEverythingMenuName: TT
          }), kT.current = null, (0, mz.n)(mz.c)
        }
      }), [oT]), (0, zT.useEffect)((() => {
        null !== TT && FT()
      }), [TT, FT]), (0, ST.jsxs)(ST.Fragment, {
        children: [(0, ST.jsx)(iT.h, {
          show: "clientGame" === oT
        }), (0, ST.jsx)(Sz, {
          show: "cantCrouchIfNotFullscreen" === oT,
          onOpen: BT.current.cantCrouchIfNotFullscreen,
          onClose: FT
        }), (0, ST.jsx)(hz, {
          show: "makeReport" === oT,
          onOpen: BT.current.makeReport,
          onClose: FT
        }), (0, ST.jsx)(wz, {
          show: "makeDiscordReport" === oT,
          onOpen: BT.current.makeDiscordReport,
          onClose: FT
        }), (0, ST.jsx)(gI, {
          show: "editBook" === oT,
          onOpen: BT.current.editBook,
          onClose: FT
        }), (0, ST.jsx)(rI, {
          show: "editNameTag" === oT,
          onOpen: BT.current.editNameTag,
          onClose: FT
        }), IT && (0, ST.jsx)(Xz, {
          show: "inventory" === oT,
          onOpen: BT.current.inventory,
          onClose: FT,
          variation: kT.current
        }), (0, ST.jsx)(yo, {
          show: "inviteLink" === oT,
          onClose: FT,
          option: kT.current
        }), (0, ST.jsx)(YT, {
          show: "retentionFeatures" === oT,
          onClose: FT
        }), (0, ST.jsx)(MI, {
          show: "writeOnBoard" === oT,
          onOpen: BT.current.writeOnBoard,
          onClose: FT
        }), (0, ST.jsx)(cW, {
          show: "lobbyCodeEditor" === oT,
          onOpen: BT.current.lobbyCodeEditor,
          onClose: FT,
          isLobbyCode: !0
        }), (0, ST.jsx)(cW, {
          show: "codeEditor" === oT,
          onOpen: BT.current.codeEditor,
          onClose: FT,
          isLobbyCode: !1
        }), (0, ST.jsx)(Rz, {
          show: "customLobbyBlockEditor" === oT,
          onOpen: BT.current.customLobbyBlockEditor,
          onClose: FT
        }), (0, ST.jsx)(HI, {
          show: "ironChestPasskeyInput" === oT,
          onOpen: BT.current.ironChestPasskeyInput,
          onClose: FT
        }), (0, ST.jsx)(jz, {
          togglePointerLock: !0,
          show: "petUi" === oT,
          onOpen: BT.current.petUi,
          onClose: FT
        })]
      })
    }))
  },
  35503: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => XW
    });
    IT(35512);
    var iT = IT(46),
      zT = IT(1042),
      kT = IT.n(zT),
      WT = IT(3308),
      XT = IT(1403),
      BT = IT(1729),
      FT = IT(1083);

    function ST() {
      const TT = 2e3,
        [oT, IT] = (0, iT.useState)(null),
        [zT, ST] = (0, iT.useState)(null),
        DT = (0, iT.useRef)(null);
      (0, XT.g)("showBottomMessage", (oT => {
        let {
          message: IT,
          timeoutLength: iT = TT,
          type: zT
        } = oT;
        ST({
          message: IT,
          type: zT
        }), clearTimeout(DT.current), DT.current = setTimeout((() => {
          ST(null)
        }), iT)
      })), (0, XT.g)("showPermanentBottomMessage", (TT => {
        IT(TT)
      })), (0, iT.useEffect)((() => ((0, WT.d)((() => {
        IT(null)
      })), () => {
        clearTimeout(DT.current)
      })), []);
      const LT = zT || oT;
      return LT ? (0, FT.jsx)("div", {
        className: kT()("BottomScreenMessage", LT.type),
        children: (0, FT.jsx)(BT.c, {
          text: LT.message
        })
      }) : null
    }
    var DT = IT(2168),
      LT = IT(1751),
      xT = IT(1468),
      cT = IT(2231);

    function KT() {
      let TT;
      const oT = () => {
          clearTimeout(TT), TT = setTimeout((() => {
            LT.gameBridge.latest("connectedGame").replay || (LT.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, xT.navigatePreserveSearch)("/"))
          }), 3e5)
        },
        IT = () => {
          clearTimeout(TT)
        };
      return window.addEventListener("focus", IT), window.addEventListener("blur", oT), () => {
        window.removeEventListener("blur", oT), window.removeEventListener("focus", IT), clearTimeout(TT)
      }
    }
    var MT = IT(1110),
      rT = IT(1108),
      AT = IT(306),
      gT = IT(2227),
      hT = IT(16),
      wT = IT(1770),
      mT = IT(26),
      eT = IT(1784),
      RT = IT(12),
      uT = IT(1787),
      vT = IT(1357),
      ET = IT(8254),
      fT = IT(1819),
      CT = IT(1171);
    const jT = (0, iT.memo)((function() {
      const {
        isTouchScreen: TT,
        loadingOverlayVisible: oT,
        openInGameMenuName: IT,
        openEverythingMenuName: zT
      } = (0, RT.k)(["isTouchScreen", "loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]), WT = (0, vT.p)();
      (0, rT.e)();
      const XT = (0, gT.g)("showBasicMovementControls"),
        [BT, ST] = (0, iT.useState)("movement"),
        DT = "movement" === BT,
        LT = WT && !1 !== XT;
      (0, iT.useEffect)((() => {
        "padActions" !== BT || LT || ST("done")
      }), [BT, LT]);
      const xT = oT || null !== IT || null !== zT,
        cT = (0, iT.useRef)({
          step: BT,
          ms: 0
        });
      return (0, iT.useEffect)((() => {
        if (xT || "done" === BT) return;
        cT.current.step !== BT && (cT.current = {
          step: BT,
          ms: 0
        });
        const TT = cT.current,
          oT = performance.now(),
          IT = setTimeout((() => {
            ST("movement" === BT && (0, vT.f)() ? "padActions" : "done")
          }), 7e3 - TT.ms);
        return () => {
          clearTimeout(IT), TT.ms += performance.now() - oT
        }
      }), [xT, BT]), mT.e.getItem(AT.Ib) > 2 ? (0, FT.jsx)(YT, {
        showingMovementControls: !1
      }) : (0, FT.jsxs)(FT.Fragment, {
        children: [TT && !WT || !DT || !1 === XT ? null : (0, FT.jsxs)("div", {
          className: kT()("ControlsTutorialDiv", {
            Covered: xT
          }),
          children: [(0, FT.jsx)(JT, {}), (0, FT.jsx)(aT, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, FT.jsx)(aT, {
            header: "Jump",
            noaAction: "jump"
          })]
        }), "padActions" === BT && LT && (0, FT.jsx)(UT, {
          covered: xT
        }), (0, FT.jsx)(YT, {
          showingMovementControls: "done" !== BT
        })]
      })
    }));

    function JT() {
      const TT = (0, vT.p)();
      return (0, FT.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, FT.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), TT && (0, FT.jsx)(uT.e, {
          noaAction: "forward"
        }), !TT && (0, FT.jsxs)(FT.Fragment, {
          children: [(0, FT.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, FT.jsx)(uT.e, {
              noaAction: "forward"
            })
          }), (0, FT.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, FT.jsx)(uT.e, {
              noaAction: "left"
            }), (0, FT.jsx)(uT.e, {
              noaAction: "backward"
            }), (0, FT.jsx)(uT.e, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function UT(TT) {
      let {
        covered: oT
      } = TT;
      const {
        t: IT
      } = (0, CT.t)(), iT = (0, gT.g)("useInventory");
      return (0, FT.jsxs)("div", {
        className: kT()("ControlsTutorialDiv", {
          Covered: oT
        }),
        children: [(0, FT.jsx)(aT, {
          header: IT("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, FT.jsx)(aT, {
          header: IT("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== iT && (0, FT.jsx)(aT, {
          header: IT("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, FT.jsx)(aT, {
          header: IT("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function aT(TT) {
      let {
        header: oT,
        noaAction: IT
      } = TT;
      return (0, FT.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, FT.jsx)("div", {
          className: "KeyHeader",
          children: oT
        }), (0, FT.jsx)(uT.e, {
          noaAction: IT
        })]
      })
    }

    function YT(TT) {
      let {
        showingMovementControls: oT
      } = TT;
      const {
        isTouchScreen: IT
      } = (0, RT.k)(["isTouchScreen"]), zT = (0, vT.p)(), kT = (0, fT.c)("OpenShop"), [WT, XT] = (0, iT.useState)(!1), BT = `SeenShopControls|${(0,eT.d)("connectedGame",(TT=>TT.gameNameWithVariation))}`, ST = () => (!(0, vT.f)() || null !== (0, ET.b)("OpenShop")) && !mT.e.getItem(BT) && wT.e.get("shopInfo") && !oT, DT = () => (XT(!0), mT.e.setItem(BT, !0), (0, vT.f)() || hT.h.XM("showShopTouchTutorial"), setTimeout((() => {
        XT(!1)
      }), 7e3));
      (0, iT.useEffect)((() => {
        let TT;
        const oT = hT.h.subscribe("showShopTutorial", (() => {
          ST() && (TT = DT())
        }));
        return () => {
          clearTimeout(TT), hT.h.unsubscribe(oT)
        }
      }), [oT]);
      const LT = (0, iT.useRef)();
      return (0, gT.e)("currencyAmounts", (TT => {
        if (ST()) {
          let IT = !1;
          const iT = wT.e.get("shopInfo");
          for (const zT in iT) {
            for (const kT in iT[zT].items) {
              var oT;
              const WT = iT[zT].items[kT];
              if (void 0 !== WT.currency && TT[WT.currency] && WT.cost <= TT[WT.currency].amount && (null === (oT = WT.hidden) || void 0 === oT || !oT)) {
                IT = !0;
                break
              }
            }
            if (IT) break
          }
          IT && (LT.current = DT())
        }
      })), (0, iT.useEffect)((() => () => {
        clearTimeout(LT.current)
      }), [oT]), !WT || zT && !kT ? null : (0, FT.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: IT && !zT ? null : (0, FT.jsx)(aT, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
    var QT = IT(1337),
      OT = IT(1055);
    const HT = (0, iT.memo)((function() {
      return (0, rT.e)(), (0, FT.jsx)(nT, {})
    }));
    class nT extends iT.Component {
      constructor(TT) {
        super(TT), this.showQueue = [], this.slideDuration = 1, this.state = {
          showQueue: [],
          currState: null
        }, this.currMessage = null, this.justShowed = !1
      }
      componentDidMount() {
        this.sub = hT.h.subscribe("TopRightHelper", (TT => {
          this.showQueue.push(TT), this.setState({
            showQueue: this.showQueue
          })
        }))
      }
      componentWillUnmount() {
        hT.h.unsubscribe(this.sub), clearTimeout(this.slideOutTimeout), clearTimeout(this.hidingMessageTimeout)
      }
      componentDidUpdate(TT, oT) {
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
        let TT, oT, IT, iT, zT, kT = !0;
        if (this.state.showQueue.length > 0 && null === this.state.currState ? (this.currMessage = this.state.showQueue[0], this.justShowed = !0, TT = "slideIn") : "slideOut" === this.state.currState ? TT = "slideOut" : null === this.currMessage && (kT = !1), this.currMessage) {
          const kT = this.currMessage.color || "rgb(102, 102, 102)";
          oT = {
            width: this.currMessage.width || "250px",
            height: this.currMessage.height || "70px",
            animation: "1s " + ("slideOut" === TT ? "HelperSlideKeyFrameReverse" : "HelperSlideKeyFrame")
          }, IT = {
            backgroundColor: kT
          }, iT = {
            animation: "2s " + ("slideOut" === TT ? "CloseNotification" : "ExpandNotification")
          }, zT = {
            fontSize: this.currMessage.fontSize || "16px",
            animation: "2s " + ("slideOut" === TT ? "textDisappear" : "textAppear")
          }
        }
        return kT ? (0, FT.jsxs)("div", {
          className: "TopRightHelperBox",
          style: {
            ...oT
          },
          children: [(0, FT.jsx)("div", {
            className: "LeftSide",
            style: IT,
            children: (0, FT.jsx)(OT.e, {
              name: this.currMessage.icon,
              className: `fa-${this.currMessage.iconSizeMult||3}x HelperIcon`
            })
          }), (0, FT.jsx)("div", {
            className: "RightSide",
            style: iT,
            children: (0, FT.jsx)("div", {
              className: "HelperText",
              style: zT,
              children: this.currMessage.text
            })
          })]
        }) : null
      }
    }
    var qT = IT(35520),
      ZT = IT(1365);
    const lT = (0, ZT.f)((TT => TT.PadSneakChip));

    function sT(TT) {
      const [oT, IT, iT] = function(TT) {
        const oT = parseInt(TT.substring(1), 16),
          IT = (oT >> 16) / 255,
          iT = (oT >> 8 & 255) / 255,
          zT = (255 & oT) / 255,
          kT = Math.max(IT, iT, zT),
          WT = Math.min(IT, iT, zT),
          XT = (kT + WT) / 2,
          BT = kT - WT;
        if (0 === BT) return [0, 0, XT];
        const FT = BT / (1 - Math.abs(2 * XT - 1));
        let ST;
        ST = kT === IT ? (iT - zT) / BT % 6 : kT === iT ? (zT - IT) / BT + 2 : (IT - iT) / BT + 4;
        return [(60 * ST + 360) % 360, FT, XT]
      }(TT), zT = 0 === IT ? 0 : Math.min(.6, IT + .03), kT = iT > .5 ? -1 : 1, WT = tT(iT + .09 * kT);
      return {
        panel: TT,
        slot: GT(oT, zT, WT),
        slotSelected: GT(oT, zT, tT(WT + .2 * kT)),
        slotUnavailable: GT(oT, zT, tT(iT + -.1 * kT))
      }
    }

    function tT(TT) {
      return Math.min(1, Math.max(0, TT))
    }

    function GT(TT, oT, IT) {
      const iT = (1 - Math.abs(2 * IT - 1)) * oT,
        zT = iT * (1 - Math.abs(TT / 60 % 2 - 1)),
        kT = IT - iT / 2;
      let WT;
      return WT = TT < 60 ? [iT, zT, 0] : TT < 120 ? [zT, iT, 0] : TT < 180 ? [0, iT, zT] : TT < 240 ? [0, zT, iT] : TT < 300 ? [zT, 0, iT] : [iT, 0, zT], "#" + WT.map((TT => function(TT) {
        return Math.round(255 * TT).toString(16).padStart(2, "0")
      }(TT + kT))).join("")
    }
    var pT = IT(35540),
      bT = IT(3841),
      yT = IT(2201),
      NT = IT(2204),
      PT = IT(35591),
      dT = IT(4299),
      VT = IT(1420),
      To = IT(618);

    function oo(TT, oT, IT, iT) {
      TT.style.display = "";
      const zT = TT.offsetWidth,
        kT = TT.offsetHeight,
        WT = Math.min(Math.max((oT.left + oT.right) / 2 - zT / 2, 8), window.innerWidth - 8 - zT);
      let XT = oT.top - IT - kT;
      const BT = [...iT].sort(((TT, oT) => oT.top - TT.top));
      for (const FT of BT) WT < FT.right && WT + zT > FT.left && XT < FT.bottom && XT + kT > FT.top && (XT = FT.top - 8 - kT);
      return XT < 8 ? (TT.style.display = "none", null) : (TT.style.transform = `translate(${WT-oT.left}px, ${XT-oT.top}px)`, {
        left: WT,
        top: XT,
        right: WT + zT,
        bottom: XT + kT
      })
    }

    function Io(TT) {
      const oT = [];
      for (const IT of document.querySelectorAll(TT)) {
        const TT = IT.getBoundingClientRect();
        TT.width > 0 && "visible" === getComputedStyle(IT).visibility && oT.push(TT)
      }
      return oT
    }

    function io(TT, oT) {
      return TT.clientX >= oT.left - 8 && TT.clientX <= oT.right + 8 && TT.clientY >= oT.top - 8 && TT.clientY <= oT.bottom + 8
    }
    var zo = IT(8307);
    class ko {
      constructor(TT) {
        this.deps = TT, this.phase = "idle", this.armTimer = null, this.suspended = !1
      }
      get locked() {
        return "locked" === this.phase
      }
      get offered() {
        return "armed" === this.phase || "ready" === this.phase
      }
      target(TT) {
        TT && "armed" === this.phase ? this.setPhase("ready") : TT || "ready" !== this.phase || this.setPhase("armed")
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
      hold(TT, oT) {
        this.suspended || (this.offered ? oT || this.setPhase("idle") : TT && "idle" === this.phase ? (this.setPhase("charging"), this.armTimer = setTimeout((() => {
          this.armTimer = null, this.onArm(), this.setPhase("armed")
        }), 1e3)) : TT || "charging" !== this.phase || this.setPhase("idle"))
      }
      onArm() {}
      setPhase(TT) {
        null !== this.armTimer && (clearTimeout(this.armTimer), this.armTimer = null);
        const oT = this.phase;
        this.phase = TT, this.deps.onPhase(TT, oT)
      }
    }
    const Wo = 25 * Math.PI / 180,
      Xo = 45 * Math.PI / 180;
    class Bo extends ko {
      constructor() {
        super(...arguments), this.speed = 0, this.armedSpeed = 0
      }
      get lockedSpeed() {
        return this.armedSpeed
      }
      move(TT, oT, IT) {
        this.speed = IT;
        const iT = Math.hypot(TT, oT),
          zT = iT > 0 ? Math.acos(Math.min(1, -oT / iT)) : Math.PI;
        this.hold(iT >= .8 && zT <= Wo, iT >= .5 && zT <= Xo)
      }
      onArm() {
        this.armedSpeed = this.speed
      }
    }
    var Fo = IT(1253);

    function So(TT, oT) {
      const IT = (0, iT.useRef)(null),
        zT = (0, iT.useRef)(oT);
      return zT.current = oT, (0, iT.useEffect)((() => {
        if (!TT) return;
        const {
          create: oT,
          elementRef: iT,
          ringRef: kT,
          classPrefix: WT,
          keptBehindMovementPanels: XT,
          resizeEnds: BT
        } = zT.current, FT = {
          charging: `${WT}Charging`,
          armed: `${WT}Armed`,
          ready: `${WT}Ready`,
          locked: `${WT}Locked`
        };
        let ST = null;
        const DT = oT({
          onPhase: (TT, oT) => {
            const IT = iT.current;
            if (null !== IT) {
              for (const [oT, iT] of Object.entries(FT)) IT.classList.toggle(iT, oT === TT);
              if ("charging" === TT) ST = kT.current.animate([{
                strokeDashoffset: 1
              }, {
                strokeDashoffset: 0
              }], {
                delay: 400,
                duration: 600,
                fill: "forwards"
              });
              else if ("idle" === TT) {
                var WT;
                null === (WT = ST) || void 0 === WT || WT.cancel(), ST = null
              }
              var XT, BT;
              if ("armed" === TT && "charging" === oT && zT.current.onArmed(), "ready" === TT && zo.g.play("lockReady"), "locked" === TT) zo.g.play("lockLocked"), null === (XT = (BT = zT.current).onLocked) || void 0 === XT || XT.call(BT);
              "locked" === oT && zT.current.onUnlocked()
            }
          }
        });
        IT.current = DT;
        const LT = () => {
            DT.suspend()
          },
          xT = () => {
            "hidden" === document.visibilityState && LT()
          },
          cT = () => {
            BT ? DT.suspend() : DT.suspendArming()
          },
          KT = (0, Fo.h)((TT => {
            let {
              keepsMovement: oT
            } = TT;
            oT && XT ? DT.suspendArming() : LT()
          }));
        return document.addEventListener("visibilitychange", xT), window.addEventListener("blur", LT), window.addEventListener("resize", cT), () => {
          KT(), document.removeEventListener("visibilitychange", xT), window.removeEventListener("blur", LT), window.removeEventListener("resize", cT), DT.cancel(), IT.current = null
        }
      }), [TT]), (0, eT.c)("localPlayerAliveSet", (() => {
        var TT;
        null === (TT = IT.current) || void 0 === TT || TT.suspend()
      })), IT
    }
    var Do = IT(3924),
      Lo = IT(8314),
      xo = IT(1102),
      co = IT(2961),
      Ko = IT(3932);

    function Mo(TT, oT, IT) {
      const iT = function(TT, oT, IT) {
        const iT = IT.map((IT => ({
            left: Math.max(0, IT.left),
            top: Math.max(0, IT.top),
            right: Math.min(TT, IT.right),
            bottom: Math.min(oT, IT.bottom)
          }))).filter((TT => TT.right > TT.left && TT.bottom > TT.top)),
          zT = [...new Set([0, oT, ...iT.flatMap((TT => [TT.top, TT.bottom]))])].sort(((TT, oT) => TT - oT)),
          kT = [];
        for (let WT = 0; WT < zT.length - 1; WT++) {
          const oT = zT[WT],
            IT = zT[WT + 1],
            XT = iT.filter((TT => TT.top <= oT && TT.bottom >= IT)).map((TT => [TT.left, TT.right])).sort(((TT, oT) => TT[0] - oT[0]));
          let BT = 0;
          for (const [TT, iT] of XT) TT > BT && kT.push({
            left: BT,
            top: oT,
            right: TT,
            bottom: IT
          }), BT = Math.max(BT, iT);
          BT < TT && kT.push({
            left: BT,
            top: oT,
            right: TT,
            bottom: IT
          })
        }
        return kT
      }(TT, oT, IT);
      if (0 === iT.length) return 'path("M0 0Z")';
      if (1 === iT.length && 0 === iT[0].left && 0 === iT[0].top && iT[0].right === TT && iT[0].bottom === oT) return "";
      const zT = TT => Math.round(10 * TT) / 10;
      return `path("${iT.map((TT=>`M${zT(TT.left)} ${zT(TT.top)}H${zT(TT.right)}V${zT(TT.bottom)}H${zT(TT.left)}Z`)).join("")}")`
    }

    function ro(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16;
      const zT = [],
        kT = 2 * IT / iT;
      for (let WT = 0; WT < iT; WT++) {
        const iT = oT - IT + WT * kT,
          XT = iT + kT,
          BT = Math.min(Math.max(oT, iT), XT) - oT,
          FT = Math.sqrt(Math.max(0, IT * IT - BT * BT));
        zT.push({
          left: TT - FT,
          top: iT,
          right: TT + FT,
          bottom: XT
        })
      }
      return zT
    }

    function Ao(TT) {
      const oT = TT.getBoundingClientRect(),
        IT = {
          left: oT.left,
          top: oT.top,
          right: oT.right,
          bottom: oT.bottom
        },
        iT = (0, PT.d)(TT);
      if (iT.whole) return [IT];
      const zT = function(TT) {
          const oT = TT.right - TT.left,
            IT = TT.bottom - TT.top,
            iT = Math.min(oT, IT) / 2,
            zT = (TT.left + TT.right) / 2,
            kT = (TT.top + TT.bottom) / 2;
          return oT >= IT ? [{
            left: TT.left + iT,
            top: TT.top,
            right: TT.right - iT,
            bottom: TT.bottom
          }, ...ro(TT.left + iT, kT, iT), ...ro(TT.right - iT, kT, iT)] : [{
            left: TT.left,
            top: TT.top + iT,
            right: TT.right,
            bottom: TT.bottom - iT
          }, ...ro(zT, TT.top + iT, iT), ...ro(zT, TT.bottom - iT, iT)]
        }(IT),
        kT = iT.keyBox;
      if (kT) {
        const TT = (IT.left + IT.right) / 2,
          oT = (IT.top + IT.bottom) / 2;
        zT.push({
          left: TT - kT.width / 2,
          top: oT - kT.height / 2,
          right: TT + kT.width / 2,
          bottom: oT + kT.height / 2
        })
      }
      return zT
    }
    const go = "joystickZoneAvoidChanged";

    function ho(TT, oT) {
      (0, iT.useEffect)((() => {
        const IT = TT.current;
        if (!oT || !IT) return;
        const iT = () => {
          const TT = Array.from(document.querySelectorAll(".TouchComponentsButtons .TouchKeyHit, .TouchInteractHit")),
            oT = TT.find((TT => TT.classList.contains("TouchInteractHit")));
          oT !== zT && (zT && kT.unobserve(zT), zT = oT, oT && kT.observe(oT));
          const iT = TT.flatMap((TT => Ao(TT))),
            WT = function(TT, oT) {
              const IT = oT.map((oT => ({
                left: oT.left - TT.left,
                top: oT.top - TT.top,
                right: oT.right - TT.left,
                bottom: oT.bottom - TT.top
              })));
              return Mo(Math.ceil(TT.width), Math.ceil(TT.height), IT)
            }(IT.getBoundingClientRect(), iT);
          IT.style.clipPath !== WT && (IT.style.clipPath = WT)
        };
        let zT;
        const kT = new ResizeObserver((() => {
          iT()
        }));
        iT(), kT.observe(IT);
        const WT = [(0, hT.k)(co.b, iT), (0, hT.k)(go, iT), (0, hT.k)(Ko.g, iT)];
        return () => {
          kT.disconnect();
          for (const TT of WT) TT();
          IT.style.clipPath = ""
        }
      }), [TT, oT])
    }
    var wo = IT(3929);

    function mo(TT) {
      var oT;
      let {
        onMove: IT,
        mode: zT,
        speedCurve: kT,
        autorun: WT = !1
      } = TT;
      const XT = (0, iT.useRef)(null),
        BT = (0, iT.useRef)(null),
        ST = (0, iT.useRef)(null),
        DT = (0, iT.useRef)(null),
        xT = (0, iT.useRef)(null),
        cT = (0, iT.useRef)(null),
        KT = (0, iT.useRef)(null),
        MT = (0, iT.useRef)(null),
        rT = (0, iT.useRef)(null),
        AT = (0, iT.useRef)(!1),
        gT = (0, iT.useRef)({
          clientX: 0,
          clientY: 0
        }),
        {
          t: hT
        } = (0, CT.t)(),
        wT = (0, wo.o)(zT),
        mT = (0, RT.k)(["notchSize"]).notchSize,
        eT = mT.left,
        uT = (0, iT.useRef)(16),
        vT = (0, Lo.b)(),
        [ET, fT, jT] = "pinned" === zT ? Do.t : null !== (oT = vT.hudElements.joystick) && void 0 !== oT ? oT : Do.t,
        JT = "pinned" === zT ? null : vT.hudSafe,
        UT = Math.max(wo.l, wo.n * jT);
      ho(BT, "pinned" !== zT);
      const aT = function(TT, oT, IT, zT, kT) {
        const WT = (0, iT.useRef)(null),
          XT = () => {
            clearInterval(WT.current), WT.current = null
          },
          BT = So(TT, {
            create: TT => new Bo(TT),
            elementRef: oT,
            ringRef: IT,
            classPrefix: "Autorun",
            keptBehindMovementPanels: !0,
            resizeEnds: !0,
            onArmed: kT,
            onLocked: () => {
              WT.current = setInterval((() => {
                LT.gameBridge.lookup("dropAhead", null) && (zo.g.play("autorunLedgeStop"), BT.current.cancel())
              }), 100)
            },
            onUnlocked: () => {
              XT(), zT()
            }
          });
        return (0, iT.useEffect)((() => XT), []), BT
      }(WT, ST, KT, (() => {
        lT(), ZT()
      }), (() => {
        YT(), null === rT.current && aT.current.suspend()
      }));

      function YT() {
        const TT = ST.current.getBoundingClientRect();
        rT.current = oo(MT.current, TT, 80, Io(`.TouchInventoryKey, ${Ko.d}`)), AT.current = null !== rT.current && io(gT.current, rT.current)
      }

      function QT() {
        const {
          innerWidth: TT,
          innerHeight: oT
        } = window, IT = (0, Ko.D)(JT, TT, oT, (0, Ko.G)(mT, TT, oT), uT.current);
        return {
          left: IT[3],
          bottom: IT[2]
        }
      }

      function HT(TT) {
        ST.current.style.transform = `translate(${TT.x-UT}px, ${TT.y-UT}px)`
      }

      function nT(TT) {
        const oT = ST.current;
        oT.classList.add("Resting"), oT.classList.toggle("Returning", TT), oT.style.display = "fixed_hidden" === zT ? "none" : "block", HT(function() {
          const {
            innerWidth: TT,
            innerHeight: oT
          } = window, IT = QT(), iT = eT * TT / 100 + IT.left, zT = XT.current.offsetHeight || oT, kT = ((0, xo.e)(TT, oT) ? wo.g : wo.c) + IT.bottom;
          return {
            x: Math.min(TT - UT, Math.max(UT, iT + wo.i + ET * TT)),
            y: Math.min(zT - UT, Math.max(UT, zT - kT + fT * zT))
          }
        }())
      }
      const qT = (0, iT.useRef)({
        restFixed: nT,
        release: sT
      });

      function ZT() {
        wT ? nT("fixed_shown" === zT) : "floating" === zT && (ST.current.style.display = "none"), IT({
          x: 0,
          y: 0
        })
      }

      function lT() {
        cT.current = null, xT.current = null, DT.current.style.transform = "translate(-50%, -50%)"
      }

      function sT(TT) {
        lT();
        const oT = aT.current;
        TT && null !== oT && void 0 !== oT && oT.lift() ? IT({
          x: 0,
          y: -oT.lockedSpeed
        }) : (null === oT || void 0 === oT || oT.cancel(), ZT())
      }

      function tT(TT) {
        const oT = Array.from(TT.touches).find((TT => TT.identifier === cT.current));
        if (null === xT.current || null === cT.current || (0, To.K)(oT)) return;
        const iT = aT.current,
          zT = oT.clientX - xT.current.x,
          WT = oT.clientY - xT.current.y,
          XT = Math.hypot(zT, WT),
          BT = XT > 0 ? Math.min(1, UT / XT) : 0,
          FT = zT * BT,
          ST = WT * BT,
          LT = Math.hypot(FT, ST) / UT,
          KT = kT && LT > 0 ? kT(LT) / LT : 1;
        DT.current.style.transform = `translate(calc(-50% + ${FT}px), calc(-50% + ${ST}px))`;
        const MT = FT / UT,
          hT = ST / UT;
        if (IT({
            x: MT * KT,
            y: hT * KT
          }), null !== iT && null !== rT.current) {
          iT.move(MT, hT, LT * KT), gT.current = {
            clientX: oT.clientX,
            clientY: oT.clientY
          };
          const TT = AT.current;
          AT.current = io(oT, rT.current), AT.current !== TT && iT.target(AT.current)
        }
      }
      return qT.current = {
        restFixed: nT,
        release: sT
      }, (0, iT.useLayoutEffect)((() => {
        if (!wT) return;
        const TT = () => {
          uT.current = (0, Ko.I)(document)
        };
        TT(), null === cT.current && qT.current.restFixed(!1);
        const oT = new ResizeObserver((() => {
          TT(), null === cT.current && qT.current.restFixed(!1)
        }));
        oT.observe(XT.current);
        const IT = ST.current;
        return () => {
          oT.disconnect(), IT.classList.remove("Resting", "Returning"), null === cT.current && (IT.style.display = "", IT.style.transform = "")
        }
      }), [wT, zT, mT, ET, fT, UT, JT]), (0, iT.useEffect)((() => {
        const TT = TT => {
            const oT = cT.current;
            null === oT || Array.from(TT.touches).some((TT => TT.identifier === oT)) || qT.current.release("touchend" === TT.type && Array.from(TT.changedTouches).some((TT => TT.identifier === oT)))
          },
          oT = () => {
            null !== cT.current && qT.current.release(!1)
          },
          IT = () => {
            "hidden" === document.visibilityState && oT()
          };
        document.addEventListener("touchstart", TT, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchmove", TT, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchend", TT, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchcancel", TT, {
          capture: !0,
          passive: !0
        }), window.addEventListener("blur", oT), document.addEventListener("visibilitychange", IT);
        const iT = (0, Fo.h)((TT => {
          let {
            keepsMovement: IT
          } = TT;
          IT || oT()
        }));
        return () => {
          iT(), document.removeEventListener("touchstart", TT, {
            capture: !0
          }), document.removeEventListener("touchmove", TT, {
            capture: !0
          }), document.removeEventListener("touchend", TT, {
            capture: !0
          }), document.removeEventListener("touchcancel", TT, {
            capture: !0
          }), window.removeEventListener("blur", oT), document.removeEventListener("visibilitychange", IT)
        }
      }), []), (0, iT.useEffect)((() => {
        const TT = XT.current,
          oT = TT => {
            TT.preventDefault()
          };
        return TT.addEventListener("touchstart", oT, {
          passive: !1
        }), () => {
          TT.removeEventListener("touchstart", oT)
        }
      }), []), (0, FT.jsxs)("div", {
        ref: XT,
        className: "JoystickZone",
        style: wT && (ET > 0 || jT > 1 || QT().left > 0) ? {
          width: `max(35vw, calc(${eT+100*ET}vw + ${QT().left+wo.i+UT+24}px))`
        } : void 0,
        onTouchStart: function(TT) {
          var oT;
          if (null !== cT.current) return;
          const IT = Array.from(TT.changedTouches).find((TT => {
            var oT;
            return null === (oT = XT.current) || void 0 === oT ? void 0 : oT.contains(TT.target)
          }));
          if (IT) {
            if (null === (oT = aT.current) || void 0 === oT || oT.startTouch(), cT.current = IT.identifier, "pinned" === zT) {
              const TT = ST.current.getBoundingClientRect();
              xT.current = {
                x: TT.left + TT.width / 2,
                y: TT.top + TT.height / 2
              }
            } else {
              xT.current = {
                x: IT.clientX,
                y: IT.clientY
              }, ST.current.classList.remove("Resting", "Returning"), ST.current.style.display = "block";
              const TT = XT.current.getBoundingClientRect();
              HT({
                x: IT.clientX - TT.left,
                y: IT.clientY - TT.top
              }), WT && (gT.current = {
                clientX: IT.clientX,
                clientY: IT.clientY
              }, YT())
            }
            tT(TT)
          }
        },
        onTouchMove: tT,
        children: [(0, FT.jsx)("div", {
          ref: BT,
          className: "JoystickTouchLayer"
        }), (0, FT.jsxs)("div", {
          ref: ST,
          className: "Joystick",
          style: {
            width: 2 * UT + "px",
            height: 2 * UT + "px",
            transform: "pinned" === zT ? "translate(4vw, calc(50vh - 50%))" : void 0
          },
          children: [(0, FT.jsx)("div", {
            className: "JoystickBase",
            style: {
              width: 2 * UT + "px",
              height: 2 * UT + "px"
            }
          }), WT && (0, FT.jsxs)(FT.Fragment, {
            children: [(0, FT.jsx)("svg", {
              className: "AutorunRing",
              viewBox: "0 0 100 100",
              children: (0, FT.jsx)("circle", {
                ref: KT,
                cx: "50",
                cy: "50",
                r: "48",
                pathLength: 1
              })
            }), (0, FT.jsxs)("div", {
              ref: MT,
              className: "AutorunTarget",
              children: [(0, FT.jsx)(OT.e, {
                name: "lock"
              }), hT("settingsMenu:autoRun")]
            })]
          }), (0, FT.jsx)("div", {
            ref: DT,
            className: "JoystickKnob",
            style: {
              width: `${UT}px`,
              height: `${UT}px`
            }
          })]
        })]
      })
    }
    const eo = .35,
      Ro = .22;

    function uo(TT) {
      if (TT < .1) return 0;
      if (TT < eo) {
        const oT = (TT - .1) / (eo - .1);
        return .06 + .16 * oT * oT
      }
      return TT < .85 ? Ro + .78 * (TT - eo) / .5 : 1
    }

    function vo(TT, oT) {
      const IT = (0, iT.useRef)(null);
      return (0, iT.useLayoutEffect)((() => (PT.h.set(TT, IT.current, oT), () => {
        PT.h.set(TT, null)
      })), [TT, oT]), IT
    }
    const Eo = "C",
      fo = "J",
      Co = "U",
      jo = "P",
      Jo = "A",
      Uo = "G",
      ao = "X",
      Yo = (0, iT.forwardRef)((function(TT, oT) {
        let {
          slot: IT,
          canvasZone: zT = !1,
          lit: WT = !1,
          label: XT,
          className: BT,
          children: ST,
          ...DT
        } = TT;
        return (0, iT.useEffect)((() => (hT.h.XM(co.b), () => {
          hT.h.XM(co.b)
        })), []), (0, FT.jsx)("div", {
          ref: oT,
          className: kT()("TouchKeyHit", `TouchSlot${IT}`, BT, {
            CanvasZone: zT
          }),
          ...DT,
          children: (0, FT.jsxs)("div", {
            className: kT()("TouchKey", {
              Lit: WT,
              Labelled: void 0 !== XT
            }),
            children: [ST, void 0 !== XT && (0, FT.jsx)("span", {
              className: "TouchKeyLabel",
              children: XT
            })]
          })
        })
      }));

    function Qo(TT, oT) {
      (0, iT.useEffect)((() => () => {
        oT.current && (oT.current = !1, (0, NT.A)(TT, !1, {
          isTrusted: !0,
          timeStamp: performance.now()
        }))
      }), [])
    }

    function Oo(TT, oT) {
      const IT = oT ? [ao] : [jo, ao];
      return TT.filter((TT => null !== TT)).slice(0, IT.length).map(((TT, oT) => {
        const zT = IT[oT];
        return (0, FT.jsx)(iT.Fragment, {
          children: TT.render(zT)
        }, `${TT.id}:${zT}`)
      }))
    }
    var Ho = IT(35582);
    class no extends ko {
      constructor() {
        super(...arguments), this.start = {
          x: 0,
          y: 0
        }, this.moved = !1
      }
      press(TT, oT) {
        this.start = {
          x: TT,
          y: oT
        }, this.moved = !1, this.startTouch(), this.hold(!0, !1)
      }
      move(TT, oT, IT) {
        const iT = Math.hypot(TT - this.start.x, oT - this.start.y) <= 12;
        this.moved ||= !iT;
        const zT = null !== IT && oT < this.start.y - 12 && io({
          clientX: TT,
          clientY: oT
        }, IT);
        this.hold(!this.moved, iT || zT)
      }
    }
    const qo = new Set;

    function Zo(TT) {
      const oT = new Set(Array.from(TT.touches, (TT => TT.identifier)));
      for (const IT of qo) {
        for (const TT of IT.ids) oT.has(TT) || IT.ids.delete(TT);
        if (0 === IT.ids.size) {
          qo.delete(IT);
          IT.pressesOnPointerDown && "touchstart" === TT.type && Array.from(TT.changedTouches).some((TT => TT.target instanceof Node && IT.element.contains(TT.target))) || IT.release()
        }
      }
    }
    if ("undefined" !== typeof window)
      for (const rW of ["touchstart", "touchmove"]) window.addEventListener(rW, Zo, {
        capture: !0,
        passive: !0
      });

    function so(TT) {
      let {
        pressesOnPointerDown: oT = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const IT = (0, iT.useRef)(TT);
      IT.current = TT;
      const zT = (0, iT.useRef)({
        ids: new Set,
        element: null,
        pressesOnPointerDown: oT,
        release: () => {
          IT.current()
        }
      });
      (0, iT.useEffect)((() => {
        const TT = zT.current;
        return () => {
          qo.delete(TT), TT.ids.clear()
        }
      }), []);
      const kT = TT => {
        const oT = zT.current;
        for (const IT of Array.from(TT.changedTouches)) oT.ids.delete(IT.identifier);
        0 === oT.ids.size && qo.delete(oT)
      };
      return {
        onTouchStart: TT => {
          const oT = zT.current;
          oT.element = TT.currentTarget;
          for (const IT of Array.from(TT.changedTouches)) IT.target instanceof Node && TT.currentTarget.contains(IT.target) && oT.ids.add(IT.identifier);
          oT.ids.size > 0 && qo.add(oT)
        },
        onTouchEnd: kT,
        onTouchCancel: kT
      }
    }

    function to(TT, oT) {
      return null === oT ? null : (0, Ho.b)(TT.nativeEvent.changedTouches, oT.id)
    }

    function Go(TT) {
      let {
        lockable: oT
      } = TT;
      const {
        t: IT
      } = (0, CT.t)(), zT = "round" === (0, Do.V)().hudShape, kT = (0, iT.useRef)(!1);
      Qo(yT.w.Jump, kT);
      const WT = (0, iT.useRef)(null),
        XT = (0, iT.useRef)(null),
        BT = (0, iT.useRef)(null),
        ST = (0, iT.useRef)(null),
        DT = (0, iT.useRef)(null),
        LT = (0, iT.useRef)(null),
        xT = (0, iT.useRef)(!1),
        cT = (TT, oT) => {
          kT.current = TT, (0, NT.A)(yT.w.Jump, TT, oT)
        },
        KT = function() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            isTrusted: !0,
            timeStamp: performance.now()
          };
          kT.current && (WT.current && (0, VT.g)(WT.current, !1), cT(!1, TT))
        },
        MT = So(oT, {
          create: TT => new no(TT),
          elementRef: WT,
          ringRef: XT,
          classPrefix: "JumpLock",
          keptBehindMovementPanels: !1,
          resizeEnds: !1,
          onArmed: () => {
            const TT = WT.current.getBoundingClientRect(),
              oT = BT.current.parentElement,
              IT = oT.getBoundingClientRect(),
              iT = {
                left: IT.left + oT.clientLeft,
                top: IT.top + oT.clientTop,
                right: IT.right - oT.clientLeft,
                bottom: IT.bottom - oT.clientTop
              };
            if (DT.current = oo(BT.current, iT, 16, Io(`.TouchKeyHit:not(.JumpKey) > .TouchKey, .TouchInventoryKey, ${Ko.d}`)), null === DT.current) return void MT.current.suspend();
            const zT = DT.current;
            LT.current = {
              left: Math.min(TT.left, zT.left),
              top: zT.top,
              right: Math.max(TT.right, zT.right),
              bottom: TT.bottom
            }, xT.current = null !== ST.current && io({
              clientX: ST.current.x,
              clientY: ST.current.y
            }, zT)
          },
          onUnlocked: () => {
            null === ST.current && KT()
          }
        }),
        rT = TT => {
          var oT;
          ST.current = null, null === (oT = MT.current) || void 0 === oT || oT.cancel(), KT(TT)
        },
        AT = so((() => {
          rT()
        })),
        gT = TT => {
          const oT = ST.current;
          var IT;
          return null === oT ? null !== (IT = MT.current) && void 0 !== IT && IT.locked ? null : "lifted" : to(TT, oT) ? "lifted" : (0, Ho.c)(TT.nativeEvent.touches, oT.id) ? null : "dropped"
        };
      return (0, FT.jsxs)(Yo, {
        ref: WT,
        slot: fo,
        className: "JumpKey",
        onTouchStart: TT => {
          AT.onTouchStart(TT), (0, VT.g)(TT.currentTarget, !0), null === ST.current || (0, Ho.c)(TT.nativeEvent.touches, ST.current.id) || rT();
          const oT = TT.changedTouches[0];
          var IT;
          null === ST.current && oT && (ST.current = {
            id: oT.identifier,
            x: oT.clientX,
            y: oT.clientY
          }, null === (IT = MT.current) || void 0 === IT || IT.press(oT.clientX, oT.clientY));
          kT.current || cT(!0, TT.nativeEvent)
        },
        onTouchMove: TT => {
          const oT = ST.current,
            IT = to(TT, oT);
          if (!IT) return;
          const iT = MT.current;
          if (null === iT || void 0 === iT || iT.move(IT.clientX, IT.clientY, LT.current), null !== iT && void 0 !== iT && iT.offered) {
            const TT = io(IT, DT.current);
            TT !== xT.current && (xT.current = TT, iT.target(TT))
          }
          oT.x = IT.clientX, oT.y = IT.clientY
        },
        onTouchEnd: TT => {
          var oT;
          AT.onTouchEnd(TT);
          const IT = gT(TT);
          null !== IT && ("dropped" !== IT ? (ST.current = null, null !== (oT = MT.current) && void 0 !== oT && oT.lift() ? (0, VT.g)(TT.currentTarget, !1) : KT(TT.nativeEvent)) : rT(TT.nativeEvent))
        },
        onTouchCancel: TT => {
          AT.onTouchCancel(TT), null !== gT(TT) && rT(TT.nativeEvent)
        },
        children: [(0, FT.jsx)(OT.e, {
          name: "arrow-up-from-line"
        }), oT && (0, FT.jsxs)(FT.Fragment, {
          children: [(0, FT.jsx)("span", {
            className: "JumpLockBadge",
            children: (0, FT.jsx)(OT.e, {
              name: "lock"
            })
          }), (0, FT.jsx)("svg", {
            className: "JumpLockRing",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            children: (0, FT.jsx)("rect", {
              ref: XT,
              x: "2",
              y: "2",
              width: "96",
              height: "96",
              rx: zT ? 48 : 0,
              pathLength: 1
            })
          }), (0, FT.jsxs)("div", {
            ref: BT,
            className: "JumpLockTarget",
            children: [(0, FT.jsx)(OT.e, {
              name: "lock"
            }), IT("settingsMenu:jumpLock")]
          })]
        })]
      })
    }
    const po = new WeakMap;
    class bo {
      constructor(TT) {
        this.zones = TT, this.followed = new Map, this.onStart = TT => {
          if (this.releaseMissing(TT.touches), TT.target instanceof HTMLCanvasElement)
            for (let IT = 0; IT < TT.changedTouches.length; IT++) {
              var oT;
              const {
                identifier: iT,
                clientX: zT,
                clientY: kT
              } = TT.changedTouches[IT];
              this.release(iT);
              const WT = this.zones.hitZone(zT, kT);
              if (!WT) continue;
              const {
                key: XT
              } = WT;
              null === (oT = po.get(XT)) || void 0 === oT || oT.cancel();
              const BT = {
                hit: WT.element,
                key: XT,
                x: WT.x,
                y: WT.y,
                reach: .6 * WT.radius
              };
              this.followed.set(iT, BT), (0, VT.g)(WT.element, !0), yo(BT, zT, kT)
            }
        }, this.onMove = TT => {
          this.releaseMissing(TT.touches);
          for (let oT = 0; oT < TT.changedTouches.length; oT++) {
            const {
              identifier: IT,
              clientX: iT,
              clientY: zT
            } = TT.changedTouches[oT], kT = this.followed.get(IT);
            kT && yo(kT, iT, zT)
          }
        }, this.onEnd = TT => {
          for (let oT = 0; oT < TT.changedTouches.length; oT++) this.release(TT.changedTouches[oT].identifier)
        }, this.onVisibilityChange = () => {
          document.hidden && this.releaseAll()
        }
      }
      start() {
        const TT = {
          passive: !0
        };
        return document.addEventListener("touchstart", this.onStart, TT), document.addEventListener("touchmove", this.onMove, TT), document.addEventListener("touchend", this.onEnd, TT), document.addEventListener("touchcancel", this.onEnd, TT), document.addEventListener("visibilitychange", this.onVisibilityChange), () => {
          document.removeEventListener("touchstart", this.onStart), document.removeEventListener("touchmove", this.onMove), document.removeEventListener("touchend", this.onEnd), document.removeEventListener("touchcancel", this.onEnd), document.removeEventListener("visibilitychange", this.onVisibilityChange), this.releaseAll()
        }
      }
      releaseMissing(TT) {
        for (const oT of [...this.followed.keys()])(0, Ho.c)(TT, oT) || this.release(oT)
      }
      releaseAll() {
        for (const TT of [...this.followed.keys()]) this.release(TT)
      }
      release(TT) {
        const oT = this.followed.get(TT);
        if (!oT) return;
        this.followed.delete(TT);
        for (const zT of this.followed.values())
          if (zT.key === oT.key) return;
        (0, VT.g)(oT.hit, !1);
        const {
          key: IT
        } = oT, iT = IT.style.translate;
        IT.style.translate = "", iT && po.set(IT, IT.animate({
          translate: [iT, "0 0"]
        }, {
          duration: 150,
          easing: "ease-out"
        }))
      }
    }

    function yo(TT, oT, IT) {
      let {
        key: iT,
        x: zT,
        y: kT,
        reach: WT
      } = TT;
      const XT = oT - zT,
        BT = IT - kT,
        FT = Math.min(1, WT / (Math.hypot(XT, BT) || 1));
      iT.style.translate = `${XT*FT}px ${BT*FT}px`
    }
    const No = () => {
      const TT = (0, bT.m)(),
        oT = (0, vT.p)();
      return TT || oT
    };

    function Po(TT) {
      (0, PT.l)(TT.x, TT.y)
    }
    const Vo = (0, iT.memo)((function() {
        const TT = No(),
          {
            joystickMode: oT,
            touchSpeedCurve: IT,
            autorun: zT
          } = (0, RT.k)(["clientEscMenuOptions"]).clientEscMenuOptions;
        return (0, iT.useEffect)((() => ((0, dT.g)(yT.A.TouchControls, yT.A.TouchControls), () => {
          (0, dT.g)(yT.A.TouchControls, 0), (0, PT.l)(0, 0)
        })), []), (0, FT.jsx)("div", {
          className: kT()("TouchMovementWrapper", {
            Hidden: TT
          }),
          "data-camera-keeper": "",
          children: (0, FT.jsx)(mo, {
            onMove: Po,
            mode: oT,
            speedCurve: IT ? uo : void 0,
            autorun: zT
          })
        })
      })),
      TI = (0, iT.memo)((function() {
        const TT = No(),
          {
            clientEscMenuOptions: oT
          } = (0, RT.k)(["clientEscMenuOptions"]),
          IT = oT.touchActionButtons;
        return (0, iT.useEffect)((() => new bo(PT.h).start()), []), (0, iT.useEffect)((() => {
          hT.h.XM(co.b)
        }), [TT]), (0, FT.jsxs)("div", {
          className: kT()("TouchComponentsButtons", {
            Hidden: TT
          }),
          "data-camera-keeper": "",
          children: [(0, FT.jsx)(Go, {
            lockable: oT.jumpLock && !TT
          }), (0, FT.jsx)(LI, {
            hidden: TT,
            actionButtons: IT
          }), (0, FT.jsx)(II, {})]
        })
      }));

    function oI(TT) {
      const oT = oT => IT => {
        (0, VT.g)(IT.currentTarget, oT), TT(oT, IT.nativeEvent)
      };
      return {
        onPointerDown: oT(!0),
        onPointerUp: oT(!1),
        onPointerCancel: oT(!1)
      }
    }

    function II() {
      const TT = (0, gT.g)("canCrouch"),
        oT = (0, eT.f)("crouching"),
        IT = (0, iT.useRef)(!1);
      Qo(yT.w.Crouch, IT);
      const zT = (TT, oT) => {
          IT.current = TT, (0, NT.A)(yT.w.Crouch, TT, oT)
        },
        kT = (0, iT.useRef)(null),
        WT = () => {
          IT.current && (kT.current && (0, VT.g)(kT.current, !1), zT(!1, {
            isTrusted: !0,
            timeStamp: performance.now()
          }))
        },
        XT = so(WT);
      return (0, iT.useEffect)((() => {
        !1 === TT && WT()
      }), [TT]), !1 === TT ? null : (0, FT.jsx)(Yo, {
        ref: kT,
        slot: Eo,
        className: "CrouchKey",
        lit: oT,
        ...XT,
        ...oI(zT),
        children: (0, FT.jsx)(OT.e, {
          name: "arrow-down-to-line"
        })
      })
    }
    const iI = [{
        icon: "arrows-rotate"
      }],
      zI = [{
        icon: "Arrow"
      }],
      kI = [{
        icon: "crosshairs"
      }],
      WI = [{
        icon: "swords"
      }],
      XI = [{
        icon: "hand-back-point-up"
      }],
      BI = [{
        icon: "Firecracker"
      }];

    function FI(TT, oT, IT, iT) {
      return {
        id: JSON.stringify(oT),
        render: zT => (0, FT.jsx)(xI, {
          code: TT,
          slot: zT,
          icon: oT,
          label: iT,
          hidden: IT
        })
      }
    }

    function SI(TT, oT) {
      return {
        id: "fly",
        render: IT => (0, FT.jsx)(DI, {
          slot: IT,
          flying: TT,
          label: oT
        })
      }
    }

    function DI(TT) {
      let {
        slot: oT,
        flying: IT,
        label: iT
      } = TT;
      return (0, FT.jsx)(Yo, {
        slot: oT,
        className: "FlyKey",
        lit: IT,
        label: iT,
        ...oI(((TT, oT) => {
          (0, NT.A)(yT.w.Fly, TT, oT)
        })),
        children: (0, FT.jsx)(OT.e, {
          name: "feather-pointed"
        })
      })
    }

    function LI(TT) {
      var oT, IT;
      let {
        hidden: iT,
        actionButtons: zT
      } = TT;
      const {
        t: kT
      } = (0, CT.t)(), {
        gun: WT,
        aimable: XT,
        chargeName: BT
      } = (0, eT.f)("heldItemAim"), ST = (0, eT.f)("gliderBoostFuel"), {
        canFly: DT,
        flying: LT
      } = (0, eT.f)("flight"), xT = (0, gT.g)("touchscreenActionButton"), cT = WT ? iI : xT, KT = XT ? {
        icon: zI,
        label: kT("touchKeys:aim")
      } : null, MT = null !== BT ? {
        icon: [{
          icon: BT
        }]
      } : null, rT = null !== KT && void 0 !== KT ? KT : MT, AT = null !== (oT = null === (IT = WT ? KT : null !== MT && void 0 !== MT ? MT : KT) || void 0 === IT ? void 0 : IT.icon) && void 0 !== oT ? oT : XI, hT = [!zT && rT ? FI(PT.c.Action2, rT.icon, iT, rT.label) : null, WT ? FI(PT.c.Action3, kI, iT, kT("touchKeys:scope")) : null, DT ? SI(LT, kT("touchKeys:fly")) : null];
      return (0, FT.jsxs)(FT.Fragment, {
        children: [cT && (0, FT.jsx)(xI, {
          code: PT.c.Action1,
          slot: Uo,
          icon: cT,
          label: WT ? kT("touchKeys:reload") : void 0,
          hidden: iT
        }, JSON.stringify(cT)), zT && (0, FT.jsxs)(FT.Fragment, {
          children: [(0, FT.jsx)(xI, {
            code: PT.c.Attack,
            slot: Jo,
            icon: WI,
            name: kT("touchKeys:attack"),
            hidden: iT
          }), (0, FT.jsx)(xI, {
            code: PT.c.Use,
            slot: Co,
            icon: AT,
            name: kT("touchKeys:use"),
            hidden: iT
          })]
        }), Oo(hT, zT), ST > 0 && (0, FT.jsx)(xI, {
          code: PT.c.Boost,
          slot: ao,
          icon: BI,
          label: kT("touchKeys:boost", {
            fuel: ST > 99 ? "99+" : ST
          }),
          hidden: iT
        })]
      })
    }

    function xI(TT) {
      let {
        code: oT,
        slot: IT,
        icon: iT,
        label: zT,
        name: kT,
        hidden: WT
      } = TT;
      const XT = vo(oT, WT);
      return (0, FT.jsx)(Yo, {
        ref: XT,
        slot: IT,
        className: "TouchActionKey",
        canvasZone: !0,
        label: zT,
        role: void 0 !== kT ? "img" : void 0,
        "aria-label": kT,
        children: (0, FT.jsx)(BT.c, {
          text: iT
        })
      })
    }
    var cI = IT(3826),
      KI = IT(2610),
      MI = IT(643);
    const rI = (0, iT.memo)((function() {
      (0, rT.e)();
      const TT = (0, iT.useRef)([]),
        oT = (0, KI.c)(),
        IT = (0, iT.useRef)(0),
        zT = (0, iT.useRef)(0),
        kT = (0, iT.useRef)([]),
        WT = (0, iT.useRef)(null);

      function ST(IT, iT, zT, kT) {
        const WT = (0, MI.b)(),
          XT = setTimeout((() => {
            TT.current = TT.current.filter((TT => TT.id !== WT)), oT()
          }), kT);
        LT.gameBridge.send("recordFlyingMiddleText", {
          content: IT,
          QT: iT,
          angle: zT,
          OT: kT
        }), TT.current.push({
          id: WT,
          content: IT,
          QT: iT,
          OT: kT,
          removeTimeout: XT,
          angle: zT
        }), oT()
      }
      return (0, eT.c)("shotDamageToShow", (TT => {
        let {
          damage: oT,
          wasCrit: IT,
          distance: iT
        } = TT;
        const zT = -Math.PI / 4 + Math.random() * Math.PI / 2;
        ST(IT ? [{
          str: oT.toString(),
          style: {
            color: "#ff8a80",
            fontSize: "1.6em"
          }
        }] : [oT.toString()], iT, zT, 1e3)
      })), (0, XT.g)("flyingMiddleMessage", (TT => {
        let {
          content: oT,
          QT: iT,
          OT: XT
        } = TT;
        kT.current.push({
          content: oT,
          QT: iT,
          OT: XT
        });
        const BT = () => {
          const {
            content: TT,
            QT: oT,
            OT: iT
          } = kT.current.shift(), WT = function(TT) {
            const oT = -Math.PI / 4,
              IT = Math.PI / 4,
              iT = IT - oT,
              zT = (1 + Math.sqrt(5)) / 2,
              kT = 2 * Math.PI / (zT * zT);
            let WT = TT + kT;
            for (; WT > IT;) WT -= iT;
            for (; WT < oT;) WT += iT;
            const XT = Math.PI / 6;
            if (Math.abs(WT - TT) < XT) {
              WT = TT + (Math.sign(WT - TT) || 1) * XT, WT > IT && (WT = TT - XT), WT < oT && (WT = TT + XT)
            }
            return WT
          }(zT.current);
          zT.current = WT, IT.current = Date.now(), ST(TT, oT, WT, iT)
        };
        if (!WT.current) {
          const TT = () => {
            kT.current.length > 0 && BT(), 0 === kT.current.length && (clearInterval(WT.current), WT.current = null)
          };
          WT.current = setInterval(TT, 200), IT.current + 200 < Date.now() && TT()
        }
        for (; kT.current.length > 4;) BT()
      })), (0, XT.g)("forceFlyingMiddleMessage", (TT => {
        let {
          content: oT,
          QT: IT,
          angle: iT,
          OT: zT
        } = TT;
        ST(oT, IT, iT, zT)
      })), (0, iT.useEffect)((() => () => {
        clearInterval(WT.current), WT.current = null;
        for (const oT of TT.current) clearTimeout(oT.removeTimeout)
      }), []), (0, FT.jsx)("div", {
        className: "FlyingMiddleTextWrapper",
        children: TT.current.map((TT => {
          const {
            id: oT,
            content: IT,
            QT: iT,
            OT: zT,
            angle: kT
          } = TT;
          return TT.pos || (TT.pos = function(TT, oT) {
            const IT = 50 / (TT ** .7 * .35);
            return {
              x: IT * Math.sin(oT),
              y: -IT * Math.cos(oT)
            }
          }(iT, kT)), (0, FT.jsx)(AI, {
            className: "FlyingMiddleText",
            classNames: "FlyingMiddleText",
            timeout: zT,
            enterActiveStyle: {
              transform: `translate(${TT.pos.x}vw, ${TT.pos.y}vh)`,
              transition: `transform ${zT}ms ease-out`
            },
            children: (0, FT.jsx)("div", {
              children: (0, FT.jsx)(BT.c, {
                text: IT
              })
            })
          }, oT)
        }))
      })
    }));

    function AI(TT) {
      let {
        children: oT,
        className: IT,
        classNames: zT,
        timeout: kT,
        enterActiveStyle: WT
      } = TT;
      const [XT, BT] = (0, iT.useState)(!1), [ST, DT] = (0, iT.useState)(!1), LT = (0, iT.useRef)(null);
      return (0, iT.useEffect)((() => {
        BT(!0)
      }), []), (0, FT.jsx)(cI.b, {
        className: IT,
        classNames: zT || IT,
        in: XT,
        timeout: kT,
        nodeRef: LT,
        onEntering: () => {
          DT(!0)
        },
        children: (0, iT.cloneElement)(oT, {
          ref: LT,
          style: ST && WT || void 0
        })
      })
    }
    var gI = IT(35594);

    function hI() {
      const TT = (0, eT.f)("health");
      return (0, FT.jsxs)("div", {
        className: "BottomScreenStatBarList",
        children: [(0, FT.jsx)(gI.d, {
          placement: "statBars"
        }), (0, FT.jsx)(wI, {
          actualValue: TT.shield,
          maxValue: TT.maxShield,
          hideAtValue: 0,
          icon: "shield",
          className: "ShieldBar"
        }), (0, FT.jsx)(wI, {
          actualValue: TT.health,
          maxValue: TT.maxHealth,
          icon: "heart",
          className: "HealthBar"
        })]
      })
    }

    function wI(TT) {
      let {
        actualValue: oT,
        maxValue: IT,
        hideAtValue: iT,
        icon: zT,
        className: kT
      } = TT;
      return (0, rT.g)(), null === oT || null === IT || oT === iT || IT === iT ? null : (0, FT.jsx)("div", {
        className: "BottomScreenStatBarWrapper",
        children: (0, FT.jsxs)("div", {
          className: "BottomScreenStatBarBackground",
          children: [(0, FT.jsx)("div", {
            className: `BottomScreenStatBar ${kT}`,
            style: {
              transform: `scaleX(${Math.max(oT/IT,0)})`,
              transformOrigin: "left center"
            }
          }), (0, FT.jsxs)("div", {
            className: "BottomScreenStatBarText SmallTextBold",
            children: [(0, FT.jsx)(OT.e, {
              name: zT
            }), ` ${Math.ceil(oT)}/${IT}`]
          })]
        })
      })
    }
    var mI = IT(8743),
      eI = IT(4050),
      RI = IT(1296),
      uI = IT(2445),
      vI = IT(1408),
      EI = IT(1280),
      fI = IT(2974),
      CI = IT(3022),
      jI = IT(2992),
      JI = IT(748),
      UI = IT(3041),
      aI = IT(139),
      YI = IT(8660),
      QI = IT(314);

    function OI(TT, oT) {
      let {
        shownName: IT,
        lifeformType: iT
      } = TT;
      return null !== IT ? IT : null !== iT ? oT(`lifeform:${(0,QI.re)(iT)}`) : null
    }
    var HI = IT(2980),
      nI = IT(2985);
    const qI = {
        FallDamage: "respawnPage:diedFallDamage",
        VoidJump: "respawnPage:diedVoid",
        Lava: "respawnPage:diedLava",
        "Toxic Waste": "respawnPage:diedToxicWaste",
        "Poison Potion": "respawnPage:diedPoisoned",
        "Rotten Brain": "respawnPage:diedPoisoned"
      },
      ZI = (0, iT.memo)((function() {
        var TT, oT;
        const IT = (0, rT.e)(),
          zT = (0, xT.useNavigatePreserveSearch)(),
          {
            t: WT
          } = (0, CT.t)(),
          {
            loadingOverlayVisible: BT
          } = (0, RT.k)(["loadingOverlayVisible"]),
          ST = (0, vT.p)(),
          [DT, cT] = (0, iT.useState)(!1),
          [KT, MT] = (0, iT.useState)(!0),
          [AT, hT] = (0, iT.useState)(null),
          mT = (0, KI.c)(),
          uT = (0, gT.g)("respawnButtonText"),
          ET = (0, gT.g)("usePlayAgainButton"),
          fT = (0, gT.g)("useRespawnButton"),
          {
            gameNameWithVariation: jT
          } = (0, eT.f)("connectedGame"),
          JT = (0, iT.useRef)(wT.e.get("secsToRespawn")),
          UT = (0, iT.useRef)(LT.gameBridge.latest("localPlayerAlive")),
          aT = (0, iT.useRef)(wT.e.get("secsToRespawn")),
          YT = (0, iT.useRef)(wT.e.get("autoRespawn")),
          QT = (0, iT.useRef)(null),
          HT = (0, iT.useRef)(0),
          nT = (0, iT.useRef)(0),
          [qT, lT] = (0, iT.useState)(!1),
          sT = (0, iT.useRef)(null),
          tT = (0, iT.useRef)(null),
          GT = (0, iT.useRef)(null);
        (0, gT.e)("secsToRespawn", (TT => {
          console.log("Received new secsToRespawn with", TT, "and current canRespawn value of ", YT.current), aT.current = TT, NT()
        })), (0, gT.e)("autoRespawn", (TT => {
          console.log("Received autorespawn", TT, "current canRespawn value of ", JT.current), YT.current = TT, NT()
        }));
        const pT = TT => {
          console.log("Updating respawn component from localPlayerAliveSet. isAlive:", TT), TT || HT.current++, UT.current = TT, NT()
        };
        (0, eT.c)("localPlayerAliveSet", pT), (0, XT.g)(CI.k, (TT => {
          "connected" === TT && !UT.current && YT.current && JT.current <= 0 && (nT.current = 0, PT())
        })), (0, iT.useEffect)((() => {
          const TT = LT.gameBridge.latest("localPlayerAlive");
          TT === UT.current ? (console.log("Updating respawn component from initial mount"), NT()) : pT(TT)
        }), []), (0, iT.useEffect)((() => {
          if (DT) {
            lT(!1);
            const TT = setTimeout((() => {
              lT(!0)
            }), 600);
            return (0, YI.d)(), () => {
              clearTimeout(TT)
            }
          }
          return () => {}
        }), [DT]);
        (0, eT.c)("kill", (TT => {
          let {
            killer: oT,
            victim: IT,
            withItem: iT
          } = TT;
          if (!IT.local) return;
          const zT = ((TT, oT) => {
            if (TT.local) {
              const TT = qI[oT];
              return TT ? WT(TT) : null
            }
            const IT = OI(TT, WT);
            return IT ? WT("respawnPage:killedBy", {
              name: IT
            }) : null
          })(oT, iT);
          zT && hT({
            text: zT,
            deathCount: UT.current ? HT.current + 1 : HT.current
          })
        }));
        const bT = () => {
            DT && YT.current && UT.current && qT && cT(!1)
          },
          yT = DT && YT.current && UT.current && qT && !BT;
        (0, XT.g)("usedKeyboard", (() => {
          bT()
        })), (0, nI.e)("respawn", yT, bT);
        const NT = () => {
            MT(aT.current >= 3 || !YT.current), UT.current ? (clearInterval(QT.current), QT.current = null, YT.current ? mT() : cT(!1)) : (cT(!0), JT.current = aT.current, mT(), console.log("Running respawn stats updated", YT.current, JT.current), YT.current && JT.current <= 0 && PT(), clearInterval(QT.current), JT.current > 0 && (QT.current = setInterval((() => {
              JT.current = Math.max(JT.current - 1, 0), mT(), JT.current <= 0 && (clearInterval(QT.current), QT.current = null, wT.e.get("autoRespawn") && PT())
            }), 1e3)))
          },
          PT = () => {
            if (Date.now() - nT.current > 1e3) {
              const TT = () => {
                LT.gameBridge.send("respawn", null), nT.current = Date.now()
              };
              wT.e.get("autoRespawn") ? TT() : (0, EI.db)((() => {
                TT()
              }), "video_respawn")
            }
          },
          dT = (0, iT.useMemo)((() => {
            var TT;
            return null === (TT = (0, JI.j)(jT)) || void 0 === TT ? void 0 : TT.otherGameLinksOnRespawnPage
          }), [jT]),
          VT = 0 === JT.current,
          To = (null === AT || void 0 === AT ? void 0 : AT.deathCount) === HT.current ? AT.text : null,
          oo = DT && KT && !BT,
          Io = ST && yT && null !== (TT = null === (oT = (0, ZT.d)()) || void 0 === oT ? void 0 : oT.getBoundButton("menuConfirm")) && void 0 !== TT ? TT : null,
          io = TT => VT ? TT : WT("respawnPage:actionInSeconds", {
            action: TT,
            seconds: JT.current
          });
        return (0, FT.jsx)(mI.c, {
          showing: DT,
          globallyUniqueKey: "RespawnComponent",
          alwaysMountChildren: !0,
          children: (0, FT.jsx)(fI.c, {
            show: DT,
            "data-holds-camera-keeper": "",
            children: (0, FT.jsxs)(eI.e, {
              close: () => {
                cT(!1)
              },
              togglePointerLock: !1,
              closeOnPressBackground: !1,
              className: "RespawnBackgroundScreen",
              padLayerKind: YT.current || BT ? null : "death",
              padBackCloses: !1,
              cameraKeeper: !0,
              children: [(0, aI.j)() && (0, FT.jsx)(vI.c, {
                onClick: jI.c,
                children: WT("homePage:backToGames")
              }), (0, FT.jsxs)("div", {
                className: "RespawnContainer",
                onClick: bT,
                children: [(0, FT.jsxs)("div", {
                  className: "RespawnTop",
                  children: [(0, FT.jsx)("div", {
                    ref: tT,
                    className: "RespawnSideSquareBannerDiv",
                    children: IT[0] > 925 && (0, FT.jsx)(uI.c, {
                      info: {
                        adType: "square",
                        adId: 1,
                        adAlias: "banner_respawn_1"
                      },
                      sizeInfo: {
                        parentRef: tT
                      },
                      showing: oo,
                      horizontalAlign: "start",
                      extraContrastBackgroundBox: "left",
                      noFillShowBloxdAdProbability: 0
                    })
                  }), (0, FT.jsx)("div", {
                    className: "RespawnMainContent",
                    children: (0, FT.jsxs)("div", {
                      className: kT()("RespawnMainContentInner", {
                        RespawnMainContentInnerPad: ST
                      }),
                      children: [YT.current && (0, FT.jsxs)("div", {
                        className: "AutoRespawnDeathInfo",
                        children: [(0, FT.jsxs)("div", {
                          className: "AutoRespawnDeathTitle FullyFancyText",
                          children: [(0, FT.jsx)(OT.e, {
                            name: "skull",
                            className: "AutoRespawnDeathIcon"
                          }), WT("respawnPage:youDied")]
                        }), (0, FT.jsxs)("div", {
                          className: "AutoRespawnDeathCause FullyFancyText",
                          children: [null === Io && (UT.current ? WT("respawnPage:pressAnywhereToContinue") : VT ? WT("respawnPage:respawning") : io(WT("general:respawn"))), null !== Io && (0, FT.jsx)(HI.d, {
                            text: WT("controller:screensPressToContinue", {
                              button: HI.h
                            }),
                            glyph: Io,
                            className: "AutoRespawnContinueGlyph"
                          })]
                        }), To && (0, FT.jsx)("div", {
                          className: "AutoRespawnStatus",
                          children: To
                        })]
                      }), !YT.current && (0, FT.jsxs)(FT.Fragment, {
                        children: [(0, FT.jsxs)("div", {
                          className: kT()("RespawnPageButtons", {
                            RespawnPageButtonsVertical: !dT
                          }),
                          children: [ET && (0, FT.jsx)(vI.m, {
                            className: "RespawnPageButton",
                            padDefaultFocus: !0,
                            onClick: () => {
                              (0, EI.db)((() => {
                                (0, RT.h)("inGameReplay");
                                const TT = (0, RI.c)(jT);
                                zT(TT)
                              }), "video_start")
                            },
                            disabled: !VT || !qT,
                            touchPressOn: "pointerup",
                            children: io(WT("respawnPage:playAgain"))
                          }), fT && (0, FT.jsx)(vI.e, {
                            className: "RespawnPageButton",
                            onClick: PT,
                            padDefaultFocus: !ET,
                            padBack: "sessionBasedGame:stayInLobby" === uT,
                            disabled: !VT || !qT,
                            touchPressOn: "pointerup",
                            children: io(WT(uT))
                          }), !(0, aI.j)() && (0, FT.jsx)(vI.C, {
                            className: "RespawnPageButton",
                            onClick: jI.c,
                            disabled: !VT || !qT,
                            touchPressOn: "pointerup",
                            children: io(WT("respawnPage:exitGame"))
                          })]
                        }), dT && (0, FT.jsxs)("div", {
                          className: "RespawnPageOtherGames",
                          children: [(0, FT.jsx)("div", {
                            className: "RespawnPageOtherGamesTitle",
                            children: WT("respawnPage:orTry")
                          }), (0, FT.jsx)("div", {
                            className: "RespawnPageOtherGameThumbnails",
                            children: dT.map((TT => (0, FT.jsx)(UI.g, {
                              source: {
                                type: "game",
                                gameNameWithVariation: TT
                              },
                              disabled: !VT || !qT,
                              gameWidth: "13rem",
                              hideDescription: !0,
                              hideFavourites: !0,
                              hideCcu: !0,
                              onClick: () => {
                                (0, RT.h)("inGameReplay");
                                const oT = (0, RI.c)(TT);
                                zT(oT)
                              }
                            }, TT)))
                          })]
                        })]
                      })]
                    })
                  }), (0, FT.jsx)("div", {
                    ref: GT,
                    className: "RespawnSideSquareBannerDiv"
                  })]
                }), (0, FT.jsx)("div", {
                  ref: sT,
                  className: "RespawnBottom",
                  children: (0, FT.jsx)(uI.c, {
                    info: {
                      adType: "leaderboard",
                      adId: 1,
                      adAlias: "banner_respawn_2"
                    },
                    sizeInfo: {
                      parentRef: sT
                    },
                    showing: oo,
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
    var lI = IT(35610);
    const sI = [{
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
      tI = [{
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
      GI = {
        duration: 300,
        easing: "ease-out",
        fill: "forwards"
      },
      pI = {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
      },
      bI = (0, iT.memo)((function() {
        const TT = (0, iT.useRef)(null),
          oT = (0, iT.useRef)(null);

        function IT(IT) {
          var iT;
          let {
            rI: zT,
            screenPos: kT
          } = IT;
          const WT = TT.current;
          null === (iT = oT.current) || void 0 === iT || iT.cancel(), WT.classList.remove("HitmarkerCrit"), kT ? (WT.style.left = `${kT.x}%`, WT.style.top = `${kT.y}%`) : (WT.style.left = "50%", WT.style.top = "50%"), WT.style.rotate = 16 * (Math.random() - .5) + "deg", zT && WT.classList.add("HitmarkerCrit");
          const XT = WT.animate(zT ? tI : sI, zT ? pI : GI);
          oT.current = XT, XT.onfinish = () => {
            WT.classList.remove("HitmarkerCrit")
          }
        }
        return (0, XT.g)("localGunHitmarker", (TT => {
          let {
            rI: oT
          } = TT;
          IT({
            rI: oT
          })
        })), (0, XT.g)("yourAttackHit", (TT => {
          let {
            rI: oT,
            screenPos: iT
          } = TT;
          IT({
            rI: oT,
            screenPos: RT.c.get("isTouchScreen") ? iT : void 0
          })
        })), (0, XT.g)("sendHitmarker", (TT => {
          let {
            rI: oT,
            screenPos: iT
          } = TT;
          IT({
            rI: oT,
            screenPos: iT
          })
        })), (0, FT.jsxs)("div", {
          ref: TT,
          className: "Hitmarker",
          children: [(0, FT.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, FT.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, FT.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, FT.jsx)("div", {
            className: "HitmarkerBar"
          })]
        })
      }));

    function yI() {
      const TT = (0, iT.useRef)(!0);
      return (0, XT.g)("localBlockMined", (() => {
        zo.g.play("blockMined")
      })), (0, XT.g)("yourAttackHit", (() => {
        zo.g.play("hitLanded")
      })), (0, XT.g)("localGunHitmarker", (() => {
        zo.g.play("hitLanded")
      })), (0, XT.g)("damagedByOtherPlayer", (() => {
        zo.g.play("damageTaken")
      })), (0, eT.c)("localPlayerAliveSet", (oT => {
        !oT && TT.current && zo.g.play("death"), TT.current = oT
      })), null
    }
    var NI = IT(1747),
      PI = IT(35636),
      dI = IT.n(PI),
      VI = IT(1847),
      Ti = IT(1834),
      oi = IT(2844),
      Ii = IT(8763);
    const ii = QI.ce ? 7e7 : 7e3,
      zi = dI()("#ffffff").alpha(.5).string();

    function ki(TT) {
      const oT = (0, oi.d)(TT);
      return void 0 !== oT && "Gun" === (0, Ii.itemTypeOf)(oT)
    }

    function Wi(TT) {
      if (!TT) return console.error(`Killfeed colour was ${TT}`), zi;
      try {
        return dI()(TT).alpha(.5).string()
      } catch {
        return console.warn(`Killfeed colour ${TT} is not a colour`), zi
      }
    }
    const Xi = (0, iT.memo)((function() {
      const {
        t: TT
      } = (0, CT.t)(), oT = (0, iT.useRef)([]), IT = (0, KI.c)();
      return (0, eT.c)("kill", (function(iT) {
        var zT, kT;
        let {
          killer: WT,
          victim: XT,
          withItem: BT,
          killstreak: FT
        } = iT;
        const ST = oT.current;
        if (ST.length >= 3) {
          const TT = ST.shift();
          clearTimeout(TT.timeout)
        }
        const DT = LT.gameBridge.latest("hiddenPlayerNames"),
          xT = {
            deadName: OI(XT, TT),
            killerName: OI(WT, TT),
            isFriend: {
              killer: (0, VI.d)(WT.realName, DT),
              dead: (0, VI.d)(XT.realName, DT)
            },
            withItem: BT,
            wasHeadshot: !1,
            killstreak: FT,
            timeout: setTimeout((() => {
              ST.shift(), IT()
            }), ii),
            reactId: `${null!==(zT=WT.id)&&void 0!==zT?zT:WT.shownName}|${null!==(kT=XT.id)&&void 0!==kT?kT:XT.shownName}|${Date.now()}`,
            killerBackground: Wi(WT.colour),
            deadBackground: Wi(XT.colour)
          };
        ST.push(xT), IT()
      })), (0, iT.useEffect)((() => {
        const TT = oT.current;
        return () => {
          for (; TT.length > 0;) {
            const {
              timeout: oT
            } = TT.pop();
            clearTimeout(oT)
          }
        }
      }), []), (0, FT.jsx)("div", {
        className: "Killfeed",
        children: oT.current.map((TT => {
          let {
            deadName: oT,
            killerName: IT,
            withItem: iT,
            wasHeadshot: zT,
            killstreak: kT,
            killerBackground: WT,
            deadBackground: XT,
            reactId: BT,
            isFriend: ST
          } = TT;
          return (0, FT.jsxs)("div", {
            className: "IndividualKillWrapper SmallTextLight",
            style: {
              background: `linear-gradient(90deg, ${WT} calc(100% - 10rem), ${XT} 100%)`
            },
            children: [kT >= 2 ? (0, FT.jsx)("div", {
              className: "KillfeedKillstreak",
              children: (0, QI.U)(kT)
            }) : null, (0, FT.jsx)("div", {
              className: "KillfeedKillerName",
              children: IT
            }), ST.killer && (0, FT.jsx)(Ti.e, {}), (0, FT.jsx)("div", {
              className: "KillfeedItem",
              style: {
                height: "5vmin",
                width: ki(iT) ? "7.5vmin" : "5vmin"
              },
              children: (0, FT.jsx)(NI.c, {
                itemName: iT,
                amount: 0,
                gunTransform: "scaleX(-1)",
                itemMarginTop: 0
              })
            }), zT ? (0, FT.jsx)(OT.e, {
              name: "crosshairs",
              className: "3x KillfeedHeadshotIcon"
            }) : null, (0, FT.jsx)("div", {
              className: "KillfeedDeadName",
              children: oT
            }), ST.dead && (0, FT.jsx)(Ti.e, {})]
          }, BT)
        }))
      })
    }));
    var Bi = IT(35676),
      Fi = IT(35680),
      Si = IT.n(Fi),
      Di = IT(2956),
      Li = IT(35686),
      xi = IT(1266);
    const ci = {},
      Ki = (0, iT.memo)((function() {
        const TT = (0, iT.useRef)({}),
          [, oT] = (0, iT.useReducer)((TT => TT + 1), 0);
        (0, XT.g)("setDirectionArrow", (IT => {
          let {
            id: iT,
            position: zT,
            style: kT,
            text: WT,
            FT: XT
          } = IT;
          const BT = TT.current,
            FT = kT || ci,
            ST = WT,
            DT = BT[iT];
          if (!DT) return BT[iT] = {
            position: zT,
            style: FT,
            text: ST,
            shouldShowDistance: XT,
            rY: null,
            chevronElement: null,
            distanceElement: null,
            lastRenderedDist: -1,
            lastDistUpdateTime: 0,
            lastScreenX: NaN,
            lastScreenY: NaN,
            onScreen: void 0
          }, void oT();
          const LT = !Si()(DT.style, FT) || !Si()(DT.text, ST) || DT.shouldShowDistance !== XT;
          DT.position = zT, DT.style = FT, DT.text = ST, DT.shouldShowDistance = XT, LT && oT()
        })), (0, XT.g)("clearDirectionArrow", (IT => {
          let {
            id: iT
          } = IT;
          const zT = TT.current;
          if (null === iT)
            for (const TT in zT) delete zT[TT];
          else delete zT[iT];
          oT()
        })), (0, iT.useEffect)((() => {
          const oT = TT.current,
            IT = (0, xi.p)((() => {
              ! function(TT) {
                const oT = LT.gameBridge.lookup("localPos", null),
                  IT = Di.c - Mi,
                  iT = (0, Di.k)() - Mi;
                for (const zT in TT) {
                  const kT = TT[zT];
                  if (!kT.rY) continue;
                  const WT = LT.gameBridge.lookup("screenPos", kT.position),
                    XT = WT.x - 50,
                    BT = WT.y - 50;
                  WT.x === kT.lastScreenX && WT.y === kT.lastScreenY || (kT.lastScreenX = WT.x, kT.lastScreenY = WT.y, kT.rY.style.translate = `${WT.x}vw ${WT.y}vh`, kT.chevronElement && (kT.chevronElement.style.rotate = `${QI.e.fastATan2(BT,XT)}rad`));
                  const FT = Math.abs(XT) < IT && Math.abs(BT) < iT;
                  if (FT !== kT.onScreen && (kT.onScreen = FT, kT.rY.classList.toggle("DirectionArrowOnScreen", FT)), kT.shouldShowDistance && kT.distanceElement) {
                    const TT = kT.position[0] - oT[0],
                      IT = kT.position[1] - oT[1],
                      iT = kT.position[2] - oT[2],
                      zT = Math.round(Math.sqrt(TT * TT + IT * IT + iT * iT));
                    (-1 === kT.lastRenderedDist || (0, Li.c)(zT, kT.lastRenderedDist, kT.lastDistUpdateTime)) && (kT.distanceElement.textContent = `${zT}m`, kT.lastRenderedDist = zT, kT.lastDistUpdateTime = Date.now() + Math.floor(100 * Math.random()))
                  }
                }
              }(oT)
            }));
          return () => {
            IT();
            for (const TT in oT) delete oT[TT]
          }
        }), []);
        const IT = TT.current;
        return (0, FT.jsx)("div", {
          className: "DirectionArrows",
          children: Object.entries(IT).map((TT => {
            var oT;
            let [iT, zT] = TT;
            const kT = null !== (oT = (0, AT.Sb)(zT.style)) && void 0 !== oT ? oT : "#ffffff";
            return (0, FT.jsxs)("div", {
              ref: TT => {
                IT[iT] && (IT[iT].rY = TT)
              },
              className: "DirectionArrow",
              style: {
                fontSize: zT.style.fontSize,
                opacity: zT.style.opacity
              },
              children: [(0, FT.jsxs)("div", {
                className: "DirectionArrowChevron",
                ref: TT => {
                  IT[iT] && (IT[iT].chevronElement = TT)
                },
                children: [(0, FT.jsxs)("div", {
                  className: "DirectionArrowShadowLayer",
                  children: [(0, FT.jsx)("div", {
                    className: "DirectionArrowBar"
                  }), (0, FT.jsx)("div", {
                    className: "DirectionArrowBar"
                  })]
                }), (0, FT.jsxs)("div", {
                  className: "DirectionArrowBarLayer",
                  children: [(0, FT.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: kT
                    }
                  }), (0, FT.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: kT
                    }
                  })]
                })]
              }), (0, FT.jsx)("div", {
                className: "DirectionArrowMarker",
                style: {
                  background: kT,
                  boxShadow: `0 0 3px rgba(0, 0, 0, 0.8), 0 0 8px ${kT}`
                }
              }), zT.text && (0, FT.jsx)("div", {
                className: "DirectionArrowLabel SmallTextLight",
                style: {
                  color: kT,
                  fontWeight: zT.style.fontWeight,
                  fontStyle: zT.style.fontStyle
                },
                children: (0, FT.jsx)(BT.c, {
                  text: zT.text
                })
              }), zT.shouldShowDistance && (0, FT.jsx)("div", {
                className: "DirectionArrowDistance SmallTextLight",
                ref: TT => {
                  IT[iT] && (IT[iT].distanceElement = TT)
                },
                style: {
                  color: kT,
                  fontWeight: zT.style.fontWeight,
                  fontStyle: zT.style.fontStyle
                }
              })]
            }, iT)
          }))
        })
      })),
      Mi = .5;
    const ri = (0, iT.memo)((function(TT) {
        let {
          isTouchScreen: oT
        } = TT;
        return (0, FT.jsxs)("div", {
          className: "BottomRightElements",
          "data-camera-keeper-host": "",
          children: [(0, FT.jsx)(mi, {}), oT && (0, FT.jsx)(TI, {})]
        })
      })),
      Ai = {
        readyForNext: 0,
        running: 1
      },
      gi = 50;

    function wi(TT) {
      console.assert(TT.state.current === Ai.readyForNext);
      const oT = TT.queue.current,
        IT = TT.foreground.current;
      if (oT.length > 0 && IT) {
        const {
          toFraction: iT,
          toDuration: zT
        } = oT.shift();
        TT.state.current = Ai.running, IT.style.transition = `transform ${Math.max(zT-gi,0)}ms linear`, IT.classList.remove("Complete"), TT.timeout.current = setTimeout((() => {
          IT.style.transform = `scaleX(${iT})`, TT.timeout.current = setTimeout((() => {
            1 === iT && IT.classList.add("Complete"), TT.state.current = Ai.readyForNext, wi(TT)
          }), Math.max(zT - gi, 0))
        }), gi)
      }
    }

    function mi() {
      const TT = (0, iT.useRef)([]),
        oT = (0, iT.useRef)(Ai.readyForNext),
        IT = (0, iT.useRef)(void 0),
        zT = (0, iT.useRef)(null),
        kT = (0, iT.useRef)({
          queue: TT,
          state: oT,
          timeout: IT,
          foreground: zT
        }),
        WT = (0, gT.g)("showProgressBar");
      if ((0, iT.useLayoutEffect)((() => (WT && oT.current === Ai.readyForNext && wi(kT.current), () => {
          oT.current = Ai.readyForNext, clearTimeout(IT.current), WT && (TT.current.length = 0)
        })), [WT]), (0, XT.g)("progressBarUpdate", (IT => {
          let {
            toFraction: iT,
            toDuration: zT
          } = IT;
          TT.current.push({
            toFraction: iT,
            toDuration: zT
          }), oT.current === Ai.readyForNext && wi(kT.current)
        })), !WT) return null;
      return (0, FT.jsx)("div", {
        className: "ProgressBarBackground",
        children: (0, FT.jsx)("div", {
          className: "ProgressBarForeground",
          ref: zT,
          style: {
            width: "15vw",
            transformOrigin: "left center",
            transform: "scaleX(0)"
          }
        })
      })
    }
    var ei = IT(35692);
    const Ri = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function ui(TT) {
      const {
        isTouchScreen: oT
      } = (0, RT.k)(["isTouchScreen"]);
      (0, iT.useLayoutEffect)((() => {
        if (!oT) return;
        const IT = TT.current,
          iT = document.querySelector(`.${ei.k}`),
          zT = TT => {
            const oT = () => {
              const oT = `${Math.floor(function(TT){const oT=document.documentElement,IT=oT.classList.contains((0,Ko.B)("menu")),iT=oT.style.getPropertyValue((0,Ko.E)("menu"));if(!IT&&""===iT)return TT.getBoundingClientRect().left;oT.classList.remove((0,Ko.B)("menu")),oT.style.removeProperty((0,Ko.E)("menu"));const zT=TT.getBoundingClientRect().left;return IT&&oT.classList.add((0,Ko.B)("menu")),""!==iT&&oT.style.setProperty((0,Ko.E)("menu"),iT),zT}(TT)-IT.getBoundingClientRect().left-4)}px`;
              IT.style.getPropertyValue("--InGameHeaderMaxWidth") !== oT && IT.style.setProperty("--InGameHeaderMaxWidth", oT)
            };
            oT();
            const zT = new ResizeObserver(oT);
            zT.observe(TT), zT.observe(iT), window.addEventListener("resize", oT);
            const kT = () => Ri.map((TT => document.documentElement.style.getPropertyValue(TT))).join();
            let WT = kT();
            const XT = new MutationObserver((() => {
              const TT = kT();
              TT !== WT && (WT = TT, oT())
            }));
            XT.observe(document.documentElement, {
              attributes: !0,
              attributeFilter: ["style"]
            });
            const BT = (0, hT.k)(Ko.g, oT);
            return () => {
              zT.disconnect(), XT.disconnect(), BT(), window.removeEventListener("resize", oT)
            }
          },
          kT = () => iT.querySelector(".TopRightIconsContainer"),
          WT = kT();
        let XT;
        if (WT) XT = zT(WT);
        else {
          const TT = new MutationObserver((() => {
            const oT = kT();
            oT && (TT.disconnect(), XT = zT(oT))
          }));
          TT.observe(iT, {
            childList: !0,
            subtree: !0
          }), XT = () => {
            TT.disconnect()
          }
        }
        return () => {
          XT(), IT.style.removeProperty("--InGameHeaderMaxWidth")
        }
      }), [oT, TT])
    }
    var vi = IT(3246),
      Ei = IT(3240),
      fi = IT(1585),
      Ci = IT(1451),
      ji = IT(1591),
      Ji = IT(1665),
      Ui = IT(1910),
      ai = IT(1117),
      Yi = IT(3848),
      Qi = IT(1427),
      Oi = IT(1332);
    const Hi = 2e4,
      ni = 6e5,
      qi = new Set;

    function Zi() {
      const {
        gameEntrySource: TT,
        loadingOverlayVisible: oT
      } = (0, RT.k)(["gameEntrySource", "loadingOverlayVisible"]), IT = (0, eT.d)("connectedGame", (TT => (0, Yi.i)(TT) ? TT.lobbyName : null)), zT = (0, eT.f)("localPlayerAlive"), kT = (0, eT.d)("players", (TT => null !== TT.localId && void 0 !== TT.byId[TT.localId])), [WT, XT] = (0, iT.useState)(null);
      return !oT && zT && kT && null !== IT && WT !== IT && XT(IT), (0, iT.useEffect)((() => {
        if (!(0, Yi.m)(TT) || null === WT || WT !== IT || qi.has(WT)) return;
        const oT = setTimeout((() => {
          qi.add(WT), async function(TT) {
            const oT = await ai.userContextManager.getCurrentUserContext();
            let IT;
            try {
              IT = (await Ci.e.getWorldOwnerFriendOffer(oT)).owner
            } catch (zT) {
              return void console.warn("Couldn't ask who owns this world", zT)
            }
            if (!IT || (0, Yi.q)(IT.name, Date.now())) return;
            const iT = IT;
            ! function(TT, oT) {
              const IT = Date.now() + ni;
              let iT = Date.now(),
                zT = 0;
              const kT = () => {
                const WT = Date.now(),
                  XT = LT.gameBridge.latest("connectedGame");
                XT.lobbyName !== TT || WT > IT || (null === XT.websocketUrl ? iT = 1 / 0 : iT === 1 / 0 && !RT.c.get("loadingOverlayVisible") && LT.gameBridge.latest("localPlayerAlive") && (iT = WT + Hi), zT = WT < iT || !LT.gameBridge.latest("localPlayerAlive") || RT.c.get("isUiHidden") || RT.c.get("isUiHiddenByCamera") || (0, Ji.isTypingInInput)() || RT.c.get("loadingOverlayVisible") || (0, fi.t)() || (0, vi.c)() || (0, Oi.n)() ? 0 : zT + 1, zT >= 2 ? oT() : setTimeout(kT, 500))
              };
              kT()
            }(TT, (() => {
              (0, Yi.e)(ji.e.getSocialState().friends, iT.name) || ((0, Yi.n)(iT.name, Date.now()), Ui.e.showWorldOwnerOffer(iT), (0, Qi.reportAnalyticsClick)({
                id: "social.world_owner_offer",
                value: "shown"
              }))
            }))
          }(WT).catch((TT => {
            console.error("Failed to offer the world's owner as a friend", TT)
          }))
        }), Hi);
        return () => {
          clearTimeout(oT)
        }
      }), [TT, WT, IT]), null
    }
    var li = IT(1736);
    const si = (0, iT.memo)((function(TT) {
        let {
          durationMs: oT,
          endsAtMs: IT
        } = TT;
        const [, zT] = (0, iT.useReducer)((TT => TT + 1), 0), kT = null === IT ? oT : Math.max(IT - Date.now(), 0);
        return (0, iT.useEffect)((() => {
          if (null === IT || kT <= 0) return;
          const TT = setTimeout(zT, kT - 1e3 * (Math.ceil(kT / 1e3) - 1));
          return () => {
            clearTimeout(TT)
          }
        })), (0, FT.jsx)("div", {
          className: "EffectInfoDuration SmallTextLight",
          children: (0, QI.db)(kT)
        })
      })),
      ti = (0, iT.memo)((function() {
        const TT = (0, eT.f)("localEffects");
        return (0, FT.jsx)("div", {
          className: "EffectInfosWrapper",
          children: Object.entries(TT).map((TT => {
            let [oT, {
              icon: IT,
              displayName: iT,
              durationMs: zT,
              endsAtMs: kT,
              level: WT
            }] = TT;
            return (0, FT.jsxs)("div", {
              className: "EffectInfo",
              children: [(0, FT.jsx)(li.b, {
                icon: IT,
                className: "EffectInfoIcon"
              }), (0, FT.jsxs)("div", {
                className: "EffectInfoRightSide",
                style: {
                  marginTop: null !== zT ? "0" : "1rem"
                },
                children: [(0, FT.jsxs)("div", {
                  className: "EffectInfoNameWrapper",
                  children: [(0, FT.jsx)(BT.c, {
                    text: null !== iT && void 0 !== iT ? iT : oT,
                    className: "EffectInfoName SmallTextBold"
                  }), WT > 1 && (0, FT.jsx)("div", {
                    className: "EffectInfoName SmallTextBold",
                    children: (0, QI.U)(WT)
                  })]
                }), null !== zT && (0, FT.jsx)(si, {
                  durationMs: zT,
                  endsAtMs: kT
                })]
              })]
            }, oT)
          }))
        })
      }));
    var Gi = IT(35696),
      bi = IT(35856),
      yi = IT(193),
      Ni = IT(1325),
      Pi = IT(2458),
      di = IT(2575);

    function Vi(TT, oT) {
      (0, iT.useLayoutEffect)((() => {
        let oT, IT;
        const iT = requestAnimationFrame((() => {
          IT = setTimeout((() => {
            IT = void 0;
            const iT = TT();
            oT = "function" === typeof iT ? iT : void 0
          }), 0)
        }));
        return () => {
          var TT;
          cancelAnimationFrame(iT), clearTimeout(IT), null === (TT = oT) || void 0 === TT || TT()
        }
      }), oT)
    }
    const Tz = [5, 5, 5],
      oz = [7, 4, 4, 4];

    function Iz(TT) {
      return TT.reduce(((TT, oT) => TT + oT), 0)
    }

    function iz(TT, oT, IT, iT, zT) {
      const kT = TT.getContext("2d");
      if (!kT) return null;
      const WT = oT.fontFamily,
        XT = oT.fontWeight;
      return TT.width = IT, TT.height = iT, kT.fillStyle = oT.color, kT.textAlign = "center", kT.textBaseline = "middle", kT.font = `${XT} ${zT}px ${WT}`, kT
    }
    const zz = (0, iT.memo)((function(TT) {
      let {
        show: oT
      } = TT;
      const IT = (0, iT.useRef)(null),
        zT = (0, iT.useRef)(null),
        kT = (0, iT.useRef)(null),
        WT = (0, cT.o)();
      return (0, iT.useEffect)((() => WT.whenShown((() => {
        let TT = 0,
          oT = 0,
          IT = 0,
          iT = 0;
        const WT = (0, xi.p)((() => {
          var WT;
          TT++, oT++;
          const XT = performance.now();
          if (XT - IT < 1e3) return;
          const BT = Math.round(TT / (XT - IT) * 1e3);
          if (zT.current = BT, null === (WT = kT.current) || void 0 === WT || WT.call(kT, BT), TT = 0, IT = XT, BT < 55) {
            var FT, ST;
            iT += 1;
            const TT = mT.e.getItem("decreaseLoadDistPromptDeniedCount"),
              [oT, IT] = wT.e.get("minChunkAddDist");
            if (iT >= 15 && function(TT, oT) {
                const IT = LT.gameBridge.lookup("Jm", null);
                return null !== IT && (IT.horizontal > TT || IT.vertical > oT)
              }(oT, IT) && (null !== (FT = mT.e.getItem("lastDecreaseLoadDistPromptTime")) && void 0 !== FT ? FT : 0) + 432e5 < Date.now() && (null !== (ST = mT.e.getItem("decreaseLoadDistPromptDeniedCount")) && void 0 !== ST ? ST : 0) < 3) {
              mT.e.setItem("lastDecreaseLoadDistPromptTime", Date.now());
              Ni.NotificationProvider.showPromptPopup({
                title: "Lag (low FPS) caused by high chunk load distance. Decrease it?",
                confirmText: "general:yes",
                cancelText: "general:no",
                unlockPointerKey: "chunkLoadDistanceLagPopup"
              }).getResult().then((iT => {
                "notificationTornDown" !== iT && (iT ? (LT.gameBridge.send("setChunkAddDistance", {
                  horizontal: oT,
                  vertical: IT
                }), mT.e.setItem("chunkHorizAddDist", oT), mT.e.setItem("chunkVertAddDist", IT), hT.h.XM("updatedChunkLoadDist"), mT.e.setItem("decreaseLoadDistPromptDeniedCount", 0)) : mT.e.setItem("decreaseLoadDistPromptDeniedCount", TT + 1))
              }))
            }
          } else iT = 0
        }));
        let XT = performance.now();
        oT = 0;
        let BT = null,
          FT = !document.hidden;

        function ST() {
          const TT = performance.now() - XT,
            IT = 1e3 * oT / TT;
          FT && (null === BT && (BT = IT), Pi.c.setFps(IT, BT)), oT = 0, XT = performance.now()
        }
        let DT = setInterval(ST, di.c);

        function xT() {
          const TT = FT;
          FT = !document.hidden, !TT && FT && (oT = 0, XT = performance.now(), clearInterval(DT), DT = setInterval(ST, di.c))
        }
        return document.addEventListener("visibilitychange", xT), () => {
          WT(), document.removeEventListener("visibilitychange", xT), clearInterval(DT)
        }
      }))), [WT]), Vi((() => {
        var TT;
        if (!oT || kT.current) return;
        const iT = IT.current,
          WT = window.getComputedStyle(iT.parentElement),
          XT = null !== (TT = window.devicePixelRatio) && void 0 !== TT ? TT : 1,
          BT = parseFloat(WT.fontSize) * XT,
          FT = Math.round(3 * BT),
          ST = Math.round(BT),
          DT = iz(iT, WT, FT, ST, BT);
        if (!DT) return;
        const LT = TT => {
          DT.clearRect(0, 0, iT.width, iT.height), DT.fillText(TT.toString(), iT.width / 2, iT.height / 2)
        };
        kT.current = LT, null !== zT.current && LT(zT.current)
      }), [oT]), (0, FT.jsxs)("div", {
        className: "FpsWrapperDiv",
        style: {
          display: oT ? "flex" : "none"
        },
        children: [(0, FT.jsx)("div", {
          className: "FpsLabel",
          children: "FPS"
        }), (0, FT.jsx)("canvas", {
          className: "FpsCanvas",
          ref: IT,
          width: 48,
          height: 16
        })]
      })
    }));

    function kz(TT) {
      return Math.sign(TT) * Math.round(100 * Math.abs(TT))
    }

    function Wz(TT) {
      let {
        getCoordinates: oT,
        showChunkCoords: IT,
        columns: zT
      } = TT;
      const kT = (0, iT.useRef)(null);
      return Vi((() => {
        var TT;
        const iT = kT.current,
          WT = window.getComputedStyle(iT.parentElement),
          XT = null !== (TT = window.devicePixelRatio) && void 0 !== TT ? TT : 1,
          BT = parseFloat(WT.fontSize) * XT,
          FT = Math.round(BT * Iz(zT)),
          ST = Math.round(BT),
          DT = iz(iT, WT, FT, ST, BT);
        if (!DT) return;
        let xT = !0,
          cT = 0,
          KT = 0,
          MT = 0,
          rT = 0,
          AT = 0,
          gT = 0;
        const hT = () => {
          xT = !0
        };
        document.fonts.load(DT.font).then(hT, hT);
        const wT = () => {
          iz(iT, WT, FT, ST, BT), hT()
        };
        iT.addEventListener("contextrestored", wT);
        const mT = (0, xi.u)((() => {
          var TT, kT, WT, XT, FT, ST;
          const [hT, wT, mT] = oT(), eT = kz(hT), RT = kz(wT), uT = kz(mT);
          let vT = null;
          if (IT) {
            const TT = LT.gameBridge.lookup("localPos", null);
            vT = (0, To.Y)(TT[0], TT[1], TT[2])
          }
          const ET = null !== (TT = null === (kT = vT) || void 0 === kT ? void 0 : kT[0]) && void 0 !== TT ? TT : 0,
            fT = null !== (WT = null === (XT = vT) || void 0 === XT ? void 0 : XT[1]) && void 0 !== WT ? WT : 0,
            CT = null !== (FT = null === (ST = vT) || void 0 === ST ? void 0 : ST[2]) && void 0 !== FT ? FT : 0;
          if (!xT && eT === cT && RT === KT && uT === MT && ET === rT && fT === AT && CT === gT) return;
          xT = !1, cT = eT, KT = RT, MT = uT, rT = ET, AT = fT, gT = CT;
          const jT = [(eT / 100).toFixed(2), (RT / 100).toFixed(2), (uT / 100).toFixed(2)];
          vT && jT.unshift(`${ET} ${fT} ${CT}`), DT.clearRect(0, 0, iT.width, iT.height);
          const JT = iT.height / 2;
          let UT = 0;
          for (let oT = 0; oT < jT.length; oT++) {
            const TT = BT * zT[oT];
            DT.fillText(jT[oT], UT + TT / 2, JT, TT), UT += TT
          }
        }));
        return () => {
          mT(), iT.removeEventListener("contextrestored", wT)
        }
      }), [oT, IT, zT]), (0, FT.jsx)("div", {
        className: "CoordinateUI",
        children: (0, FT.jsx)("canvas", {
          ref: kT,
          className: "CoordinateCanvas",
          width: 16 * Iz(zT),
          height: 16
        })
      })
    }
    const Xz = (0, iT.memo)((function() {
        const TT = (0, iT.useCallback)((() => {
          const TT = LT.gameBridge.lookup("localPos", null);
          return [TT[0], TT[1], TT[2]]
        }), []);
        return (0, FT.jsx)(Wz, {
          getCoordinates: TT,
          showChunkCoords: !1,
          columns: Tz
        })
      })),
      Bz = (0, iT.memo)((function() {
        const TT = (0, iT.useCallback)((() => {
          const TT = LT.gameBridge.lookup("localPos", null),
            oT = yi.c.Yc;
          let IT = TT[0] % oT,
            iT = TT[1] % oT,
            zT = TT[2] % oT;
          return IT < 0 && (IT += oT), iT < 0 && (iT += oT), zT < 0 && (zT += oT), [IT, iT, zT]
        }), []);
        return (0, FT.jsx)(Wz, {
          getCoordinates: TT,
          showChunkCoords: !0,
          columns: oz
        })
      }));
    var Fz = IT(1868),
      Sz = IT(1310),
      Dz = IT(1007),
      Lz = IT(1193),
      xz = IT(90),
      cz = IT(35706),
      Kz = IT(1412),
      Mz = IT(2710);
    const rz = (0, iT.memo)((function() {
      const TT = (0, gT.g)("maxAuraLevel");
      return 0 === TT ? null : (0, FT.jsx)(Az, {
        maxLevel: TT
      })
    }));

    function Az(TT) {
      let {
        maxLevel: oT
      } = TT;
      const IT = (0, gT.g)("auraPerLevel"),
        [zT, kT] = (0, iT.useState)((() => {
          var TT;
          return null !== (TT = LT.gameBridge.latest("aura")) && void 0 !== TT ? TT : void 0
        })),
        [WT, XT] = (0, iT.useState)((() => hT(zT))),
        [BT, ST] = (0, iT.useReducer)((TT => TT + 1), 0),
        DT = (0, iT.useRef)(null),
        xT = (0, iT.useRef)([]),
        cT = (0, iT.useRef)({
          width: 0,
          level: 0
        }),
        KT = (0, iT.useRef)(null),
        MT = (0, iT.useRef)(null);

      function AT() {
        if (null !== KT.current) return;
        if (0 === xT.current.length) return;
        const {
          width: TT,
          level: oT
        } = xT.current.shift();
        let IT;
        if (oT !== cT.current.level && oT > cT.current.level !== TT > cT.current.width) {
          const iT = oT > cT.current.level;
          IT = iT ? TT : 100 - TT, DT.current.style.transition = "none", DT.current.style.width = iT ? "0%" : "100%", DT.current.offsetWidth
        } else IT = Math.abs(TT - cT.current.width);
        const iT = 100 * IT / 20;
        DT.current.style.transition = `width ${iT}ms linear`, XT(TT), cT.current = {
          width: TT,
          level: oT
        }, xT.current.length > 0 && (KT.current = setTimeout((() => {
          KT.current = null, AT()
        }), iT))
      }

      function hT(TT) {
        return Math.floor(TT / IT) === oT ? 100 : TT % IT / IT * 100
      }
      return (0, iT.useEffect)((() => () => {
        clearTimeout(KT.current), clearTimeout(MT.current), KT.current = null, MT.current = null
      }), []), (0, eT.c)("aura", (TT => {
        if (MT.current && clearTimeout(MT.current), null === TT) return clearTimeout(KT.current), MT.current = null, KT.current = null, xT.current = [], cT.current = {
          width: 0,
          level: 0
        }, kT(void 0), void XT(0);
        MT.current = setTimeout((() => {
          const oT = Math.floor(zT / IT),
            iT = Math.floor(TT / IT),
            WT = hT(TT);
          TT > zT && cz.d.play("exp_collect", .1).rate(1.6 + .5 * Math.random()), iT > oT ? (iT % 5 === 0 && cz.d.play("exp_levelup", .45).rate(.95 + .1 * Math.random()), ST(), xT.current.push({
            width: 100,
            level: oT
          })) : iT < oT && xT.current.push({
            width: 0,
            level: oT
          }), TT === zT && iT === oT || xT.current.push({
            width: WT,
            level: iT
          }), kT(TT), AT()
        }), 50)
      })), (0, rT.g)(), (0, FT.jsxs)("div", {
        className: "AuraBarWrapper",
        children: [(0, FT.jsxs)("div", {
          className: "AuraBarLabel SmallTextBold",
          children: [(0, FT.jsx)(Kz.d, {
            showSignal: BT,
            particleElement: (0, FT.jsx)("img", {
              src: (0, Mz.i)("glint"),
              alt: ""
            })
          }), (0, FT.jsx)("img", {
            className: "AuraBarLabelImage",
            src: (0, Mz.i)("glint"),
            alt: "aura"
          }), (0, FT.jsx)("div", {
            className: "AuraBarLabelText",
            children: Math.floor((null !== zT && void 0 !== zT ? zT : 0) / IT)
          })]
        }), (0, FT.jsx)("div", {
          className: "AuraBar",
          children: (0, FT.jsx)("div", {
            ref: DT,
            className: "AuraBarBackground",
            style: {
              width: `${WT}%`
            }
          })
        })]
      })
    }
    var gz = IT(2281);

    function hz(TT) {
      TT.timed && (TT.endedAnimation = TT.timed.animation, TT.timed = null)
    }
    const wz = (0, iT.memo)((function() {
      const TT = (0, iT.useRef)(null),
        oT = (0, iT.useRef)(null),
        IT = (0, iT.useRef)({
          timed: null,
          endedAnimation: null
        });
      return (0, XT.g)("middleScreenBarInitiate", (TT => {
        var iT;
        let {
          duration: zT,
          fo: kT,
          horizBarRemOffset: WT
        } = TT;
        const XT = IT.current;
        hz(XT);
        const BT = oT.current;
        if (!(zT >= 0) || !BT) return;
        null === (iT = XT.endedAnimation) || void 0 === iT || iT.cancel(), XT.endedAnimation = null;
        const FT = BT.animate([{
          transform: "scaleX(0)"
        }, {
          transform: "scaleX(1)"
        }], {
          duration: zT,
          fill: "forwards"
        });
        XT.timed = {
          fo: kT,
          horizBarRemOffset: WT,
          animation: FT
        }
      })), (0, XT.g)("middleScreenBarRemove", (() => {
        hz(IT.current)
      })), (0, iT.useEffect)((() => {
        const iT = IT.current;
        let zT = Number.NaN,
          kT = Number.NaN,
          WT = Number.NaN;
        return (0, xi.n)((() => {
          var IT, XT, BT, FT;
          const ST = TT.current,
            DT = oT.current;
          if (!ST || !DT) return;
          null !== (IT = iT.timed) && void 0 !== IT && IT.fo && "finished" === iT.timed.animation.playState && hz(iT), null === (XT = iT.endedAnimation) || void 0 === XT || XT.cancel(), iT.endedAnimation = null;
          let xT = iT.timed ? 1 : 0;
          if (!iT.timed) {
            const TT = LT.gameBridge.lookup("momentumFrac", null);
            xT = TT > 0 ? 1 : 0, TT !== WT && (WT = TT, DT.style.transform = `scaleX(${TT})`)
          }
          const cT = null !== (BT = null === (FT = iT.timed) || void 0 === FT ? void 0 : FT.horizBarRemOffset) && void 0 !== BT ? BT : 0;
          cT === zT && xT === kT || (zT = cT, kT = xT, ST.style.transform = `translateX(calc(-50% + ${cT}rem)) scaleX(${xT})`)
        }))
      }), []), (0, FT.jsx)("div", {
        className: "MiddleScreenBar",
        ref: TT,
        children: (0, FT.jsx)("div", {
          className: "MiddleScreenBarFill",
          ref: oT
        })
      })
    }));
    var mz = IT(4181),
      ez = IT(2438);

    function Rz() {
      const {
        t: TT
      } = (0, CT.t)(), oT = (0, XT.i)("serverUpdating", null), IT = (0, ez.d)(250, null !== oT);
      return null === oT || IT - oT > 3e4 ? null : (0, FT.jsxs)("div", {
        className: "UpdateCountdownBanner",
        children: [(0, FT.jsx)("div", {
          className: "UpdateCountdownBannerTitle",
          children: TT("updateWaiting:updatingIn", {
            countdown: (0, mz.q)(oT - IT)
          })
        }), (0, FT.jsx)("div", {
          children: TT("updateWaiting:bringYouBack")
        })]
      })
    }
    var uz = IT(35874),
      vz = IT(1794);
    const Ez = [{
        translationKey: "general:interact"
      }],
      fz = (0, iT.memo)((function() {
        const TT = (0, gT.g)("crosshairText"),
          {
            interactPrompt: oT,
            blockText: IT,
            neededTool: zT
          } = (0, eT.f)("crosshairTarget"),
          {
            isTouchScreen: kT
          } = (0, RT.k)(["isTouchScreen"]),
          WT = (0, vT.p)(),
          ST = (0, fT.c)("alt-fire");
        (0, iT.useEffect)((() => {
          LT.gameBridge.send("setCrosshairInteractPrompt", !kT || WT ? "key" : "touch")
        }), [kT, WT]);
        const [DT, xT] = (0, iT.useReducer)((TT => TT + 1), 0);
        (0, XT.g)("customBindingsChanged", xT);
        var cT;
        if (null !== oT && (WT && null !== ST || !kT && null !== (0, vz.v)("alt-fire"))) return (0, FT.jsxs)("div", {
          className: "CrosshairText SmallTextBold InteractPrompt",
          children: [(0, FT.jsx)(uT.e, {
            noaAction: "alt-fire"
          }), (0, FT.jsx)(BT.c, {
            text: null !== (cT = oT.label) && void 0 !== cT ? cT : Ez
          })]
        });
        let KT = null;
        return null !== IT ? KT = IT : null !== TT && "" !== TT ? KT = TT : null !== zT && (KT = [{
          icon: zT,
          style: {
            opacity: .8
          }
        }, {
          str: " needed",
          style: {
            opacity: .8
          }
        }]), KT ? (0, FT.jsx)("div", {
          className: "CrosshairText SmallTextBold",
          children: (0, FT.jsx)(BT.c, {
            text: KT
          })
        }) : null
      }));
    var Cz = IT(2287);
    const jz = (0, iT.memo)((function() {
      var TT;
      const {
        interactPrompt: oT
      } = (0, eT.f)("crosshairTarget"), {
        openInGameMenuName: IT,
        openEverythingMenuName: iT
      } = (0, RT.k)(["openInGameMenuName", "openEverythingMenuName"]), zT = (0, XT.i)("aimingOverlay", "none"), kT = (0, bT.m)(), WT = (0, Cz.c)();
      return null === oT || null !== IT || null !== iT || "sniper" === zT || kT || WT ? null : (0, FT.jsx)(Jz, {
        label: null !== (TT = oT.label) && void 0 !== TT ? TT : Ez
      })
    }));

    function Jz(TT) {
      let {
        label: oT
      } = TT;
      const IT = vo(PT.c.Interact, !1);
      return (0, iT.useEffect)((() => (hT.h.XM(go), () => {
        hT.h.XM(go)
      })), []), (0, FT.jsx)("div", {
        ref: IT,
        className: "TouchInteractHit",
        children: (0, FT.jsxs)("div", {
          className: "TouchInteractKey",
          children: [(0, FT.jsx)("span", {
            className: "TouchInteractIcon",
            children: (0, FT.jsx)(OT.e, {
              name: "hand-back-point-up"
            })
          }), (0, FT.jsx)(BT.c, {
            text: oT
          })]
        })
      })
    }
    var Uz = IT(4251),
      az = IT(4311);
    const Yz = (0, iT.forwardRef)((function(TT, oT) {
        let {
          text: IT,
          className: iT,
          children: zT
        } = TT;
        return IT.hasText ? (0, FT.jsx)("div", {
          ref: oT,
          className: kT()("HudTextPanel", iT, {
            NoBackground: !IT.showBackground
          }),
          children: null !== zT && void 0 !== zT ? zT : (0, FT.jsx)(BT.c, {
            text: IT.content
          })
        }) : null
      })),
      Qz = (0, iT.memo)((function() {
        const TT = (0, gT.j)("middleTextTop"),
          [oT, IT] = (0, iT.useState)(null),
          zT = (0, ei.l)(oT);
        return TT.hasText ? (0, FT.jsx)("div", {
          className: kT()("MiddleTextTopContainer", {
            MiddleTextTopBelow: zT
          }),
          children: (0, FT.jsx)(Yz, {
            ref: IT,
            className: "MiddleTextTop",
            text: TT
          })
        }) : null
      })),
      Oz = (0, iT.memo)((function() {
        const TT = (0, gT.d)();
        return (0, FT.jsx)(FT.Fragment, {
          children: TT.map(((TT, oT) => (0, FT.jsx)(Yz, {
            className: "HeaderChip",
            text: TT
          }, oT)))
        })
      }));
    var Hz = IT(3182),
      nz = IT(4111);
    const qz = (0, iT.memo)((function() {
      const {
        t: TT
      } = (0, CT.t)(), [oT, IT] = (0, iT.useState)(!1), zT = (0, iT.useRef)(!1), kT = function(TT) {
        let {
          gameNameWithVariation: oT,
          lobbyName: IT
        } = TT;
        if ((0, Dz.m)(oT)) return Zz;
        if ((0, Lz.H)(IT)) return lz;
        return null
      }((0, eT.f)("connectedGame"));
      if (!kT || oT) return null;
      const WT = nz.d[kT.target];
      return (0, FT.jsx)(QT.e, {
        tooltipInner: (0, FT.jsx)("div", {
          children: TT(WT.reportButtonTooltip)
        }),
        children: (0, FT.jsx)("div", {
          children: (0, FT.jsx)(vI.H, {
            onClick: () => {
              zT.current || (zT.current = !0, (0, nz.f)(kT.reportPolicyIds, WT).then((TT => {
                null !== TT && void 0 !== TT && TT.selectedPolicyId && (LT.gameBridge.send("reportLobbyOrGame", {
                  target: kT.target,
                  QF: TT.selectedPolicyId,
                  details: TT.HF
                }), IT(!0))
              })).finally((() => {
                zT.current = !1
              })))
            }
          })
        })
      })
    }));
    const Zz = {
        target: "customGame",
        reportPolicyIds: Hz.c
      },
      lz = {
        target: "lobby",
        reportPolicyIds: Hz.g
      };
    var sz = IT(8223),
      tz = IT(35890),
      Gz = IT(35898),
      pz = IT(35906),
      bz = IT(35911),
      yz = IT(35944);

    function Nz(TT) {
      return TT instanceof Error && Pz.has(TT.message) ? TT.message : void 0
    }
    const Pz = new Set([yz.e.saveBusy.text, yz.e.saveClosed.text, yz.e.cropBusy.text]);
    let dz = !1;
    async function Vz(TT, oT) {
      var IT, iT;
      const {
        files: zT
      } = oT, kT = zT.replayKey();
      if (null === kT) return "none";
      if (dz) throw new Error(yz.e.saveBusy.text);
      const WT = null !== (IT = null === (iT = zT.saveRefusal) || void 0 === iT ? void 0 : iT.call(zT)) && void 0 !== IT ? IT : null;
      if (null !== WT) throw new Error(WT);
      dz = !0;
      try {
        return await async function(TT, oT, IT) {
          const {
            files: iT
          } = oT, zT = () => iT.replayKey() === IT, kT = (TT, oT) => {
            zT() && iT.markSaved(TT, oT)
          };
          let WT = null;
          if (oT.pickerSupported()) {
            try {
              if (WT = await oT.chooseFile(TT ? null : iT.fileHandle()), null === WT) return "Jo"
            } catch (BT) {
              oT.onFallback(BT)
            }
            if (!zT()) throw new Error(yz.e.saveClosed.text)
          }
          const XT = await iT.encode();
          if (null === XT) {
            if (null !== WT) throw new Error(yz.e.saveClosed.text);
            return "none"
          }
          if (null !== WT) try {
            return await oT.write(WT, XT), kT(WT), "written"
          } catch (BT) {
            oT.onFallback(BT)
          }
          return kT(null, oT.download(XT)), "downloaded"
        }(TT, oT, kT)
      } finally {
        dz = !1
      }
    }
    var Tk = IT(4061),
      Ik = IT(68);
    const ik = [1, 2, 4, 8, 16, 32, 64];

    function zk(TT, oT) {
      return Math.max(0, Math.min(TT, oT))
    }

    function kk(TT, oT, IT) {
      return IT <= oT ? 0 : (TT - oT) / (IT - oT) * 100
    }

    function Wk(TT, oT, IT) {
      const iT = IT - oT;
      return Math.round(oT + TT / 100 * iT)
    }

    function Xk(TT, oT) {
      const IT = Math.floor(TT / oT / 60),
        iT = Math.floor(TT / oT % 60),
        zT = TT % oT;
      return `${IT.toString().padStart(2,"0")}:${iT.toString().padStart(2,"0")}:${zT.toString().padStart(2,"0")}`
    }

    function Bk(TT) {
      return Number.isInteger(TT) || ik.includes(TT) ? `${Math.round(TT)}\xd7` : `${TT.toFixed(1)}\xd7`
    }

    function Fk(TT, oT) {
      const IT = ik.indexOf(TT);
      if (-1 !== IT) return "in" === oT ? ik[Math.min(IT + 1, ik.length - 1)] : ik[Math.max(IT - 1, 0)];
      if ("in" === oT) {
        for (const oT of ik)
          if (oT >= TT) return oT;
        return TT
      }
      for (let iT = ik.length - 1; iT >= 0; iT--)
        if (ik[iT] <= TT) return ik[iT];
      return ik[0]
    }

    function Sk(TT, oT) {
      const IT = oT.getBoundingClientRect();
      if (IT.width <= 0) return 0;
      const iT = (TT - IT.left) / IT.width * 100;
      return Math.max(0, Math.min(100, iT))
    }

    function Dk(TT, oT) {
      return oT <= 0 ? 0 : TT / oT * 100
    }

    function Lk(TT, oT, IT) {
      const iT = [];
      let zT = Math.ceil(TT / IT) * IT;
      for (; zT <= oT;) iT.push(zT), zT += IT;
      return iT
    }
    var xk = IT(35948);
    const ck = [{
        label: "Linear",
        easing: xk.f
      }, {
        label: "Ease",
        easing: [.25, .1, .25, 1]
      }, {
        label: "Ease In",
        easing: xk.c
      }, {
        label: "Ease Out",
        easing: xk.d
      }, {
        label: "Ease In Out",
        easing: xk.b
      }],
      Kk = 200,
      Mk = 150;

    function rk(TT) {
      const oT = TT => Number(TT.toFixed(3)).toString();
      return `cubic-bezier(${oT(TT[0])}, ${oT(TT[1])}, ${oT(TT[2])}, ${oT(TT[3])})`
    }

    function Ak(TT, oT) {
      return {
        cx: 25 + TT * Mk,
        cy: 25 + (1 - oT) * Mk
      }
    }

    function gk(TT, oT, IT) {
      const iT = TT - IT.left,
        zT = oT - IT.top;
      return {
        x: QI.e.clamp((iT - 25) / Mk, 0, 1),
        y: QI.e.clamp(1 - (zT - 25) / Mk, -1, 2)
      }
    }

    function hk(TT, oT, IT, iT, zT) {
      return {
        x: (0, xk.m)(TT, IT, zT),
        y: (0, xk.m)(oT, iT, zT)
      }
    }
    const wk = (0, iT.memo)((function(TT) {
      let {
        value: oT,
        onChange: IT
      } = TT;
      const zT = (0, iT.useRef)(null),
        kT = (0, iT.useRef)(null),
        [WT, XT] = (0, iT.useState)(null),
        BT = (0, iT.useCallback)((() => {
          const TT = zT.current;
          if (!TT) return;
          const IT = TT.getContext("2d");
          if (!IT) return;
          const iT = window.devicePixelRatio || 1;
          TT.width = Kk * iT, TT.height = Kk * iT, IT.setTransform(iT, 0, 0, iT, 0, 0), IT.clearRect(0, 0, Kk, Kk), IT.fillStyle = "rgba(38, 52, 93, 0.85)", IT.fillRect(0, 0, Kk, Kk), IT.beginPath();
          const kT = Ak(0, 0),
            XT = Ak(1, 1);
          IT.moveTo(kT.cx, kT.cy), IT.lineTo(XT.cx, XT.cy), IT.strokeStyle = "rgba(164, 164, 164, 0.35)", IT.setLineDash([3, 3]), IT.stroke(), IT.setLineDash([]);
          const [BT, FT, ST, DT] = oT, LT = Ak(BT, FT), xT = Ak(ST, DT);
          IT.strokeStyle = "rgba(252, 211, 115, 0.55)", IT.lineWidth = 1.5, IT.beginPath(), IT.moveTo(kT.cx, kT.cy), IT.lineTo(LT.cx, LT.cy), IT.moveTo(XT.cx, XT.cy), IT.lineTo(xT.cx, xT.cy), IT.stroke(), IT.strokeStyle = "#fcd373", IT.lineWidth = 2, IT.beginPath();
          for (let oT = 0; oT <= 50; oT++) {
            const TT = hk(BT, FT, ST, DT, oT / 50),
              iT = Ak(TT.x, TT.y);
            0 === oT ? IT.moveTo(iT.cx, iT.cy) : IT.lineTo(iT.cx, iT.cy)
          }
          IT.stroke();
          const cT = (TT, oT, iT) => {
            IT.beginPath(), IT.arc(TT, oT, iT ? 6 : 5, 0, 2 * Math.PI), IT.fillStyle = iT ? "#ffb914" : "#fcd373", IT.fill(), IT.strokeStyle = "#1a1f2e", IT.lineWidth = 1.5, IT.stroke()
          };
          cT(LT.cx, LT.cy, "p1" === WT), cT(xT.cx, xT.cy, "p2" === WT)
        }), [WT, oT]);
      (0, iT.useEffect)((() => {
        BT()
      }), [BT]);
      const ST = (0, iT.useCallback)(((TT, iT) => {
          const WT = zT.current,
            XT = kT.current;
          if (!WT || !XT) return;
          const BT = WT.getBoundingClientRect(),
            {
              x: FT,
              y: ST
            } = gk(TT, iT, BT);
          IT("p1" === XT ? [FT, ST, oT[2], oT[3]] : [oT[0], oT[1], FT, ST])
        }), [IT, oT]),
        DT = (0, iT.useCallback)((TT => {
          const IT = zT.current;
          if (!IT) return;
          const iT = IT.getBoundingClientRect();
          let {
            x: WT,
            y: BT
          } = gk(TT.clientX, TT.clientY, iT);
          WT = QI.e.clamp(WT, 0, 1), BT = QI.e.clamp(BT, 0, 1);
          const [FT, DT, LT, xT] = oT.map((TT => QI.e.clamp(TT, 0, 1))), cT = Math.hypot(WT - FT, BT - DT), KT = Math.hypot(WT - LT, BT - xT), MT = cT <= KT ? "p1" : "p2";
          ("p1" === MT ? cT : KT) > .12 || (kT.current = MT, XT(MT), IT.setPointerCapture(TT.pointerId), ST(TT.clientX, TT.clientY))
        }), [ST, oT]),
        LT = (0, iT.useCallback)((TT => {
          kT.current && ST(TT.clientX, TT.clientY)
        }), [ST]),
        xT = (0, iT.useCallback)((TT => {
          kT.current = null, XT(null), TT.currentTarget.hasPointerCapture(TT.pointerId) && TT.currentTarget.releasePointerCapture(TT.pointerId)
        }), []);
      return (0, FT.jsxs)("div", {
        className: "CubicBezierEasingEditor",
        children: [(0, FT.jsx)("canvas", {
          ref: zT,
          className: "CubicBezierEasingEditorCanvas",
          style: {
            width: Kk,
            height: Kk
          },
          onPointerDown: DT,
          onPointerMove: LT,
          onPointerUp: xT,
          onPointerCancel: xT
        }), (0, FT.jsx)("span", {
          className: "CubicBezierEasingEditorReadout",
          children: rk(oT)
        })]
      })
    }));
    var mk = IT(1632),
      ek = IT(1612);
    const Rk = 12;

    function uk(TT) {
      return {
        left: TT.left + TT.width / 2,
        top: TT.top - 8
      }
    }

    function vk(TT, oT) {
      const [IT, zT] = (0, iT.useState)(null);
      return (0, iT.useLayoutEffect)((() => {
        const IT = TT.current;
        if (!IT) return;
        const {
          width: iT,
          height: kT
        } = IT.getBoundingClientRect();
        zT(function(TT, oT, IT) {
          const iT = window.innerWidth,
            zT = window.innerHeight,
            kT = oT / 2;
          let WT = TT.left + TT.width / 2;
          WT = Math.max(Rk + kT, Math.min(WT, iT - Rk - kT));
          const XT = TT.top - 8 - Rk,
            BT = zT - TT.bottom - 8 - Rk,
            FT = XT < IT && BT >= XT;
          let ST;
          FT ? (ST = TT.bottom + 8, ST + IT > zT - Rk && (ST = zT - Rk - IT), ST = Math.max(Rk, ST)) : (ST = TT.top - 8, ST - IT < Rk && (ST = Rk + IT));
          return {
            left: WT,
            top: ST,
            placeBelow: FT
          }
        }(oT, iT, kT))
      }), [oT, TT]), IT
    }

    function Ek(TT, oT, IT) {
      (0, iT.useEffect)((() => (0, ek.e)("pointerdown", (iT => {
        var zT, kT;
        const WT = iT.target;
        WT instanceof Node && (null !== (zT = TT.current) && void 0 !== zT && zT.contains(WT) || null !== IT && void 0 !== IT && null !== (kT = IT.current) && void 0 !== kT && kT.contains(WT) || (0, mk.i)(WT) || oT())
      }))), [IT, oT, TT])
    }

    function fk(TT) {
      let {
        label: oT,
        value: IT,
        onChange: iT
      } = TT;
      return (0, FT.jsxs)("div", {
        className: "ReplayKeyframePopoverVec3",
        children: [(0, FT.jsx)("span", {
          className: "ReplayKeyframePopoverVec3Label",
          children: oT
        }), (0, FT.jsx)("div", {
          className: "ReplayKeyframePopoverVec3Inputs",
          children: ["X", "Y", "Z"].map(((TT, oT) => (0, FT.jsxs)("label", {
            className: "ReplayKeyframePopoverAxis",
            children: [(0, FT.jsx)("span", {
              children: TT
            }), (0, FT.jsx)("input", {
              type: "number",
              step: "any",
              value: IT[oT],
              onChange: TT => {
                const zT = Number.parseFloat(TT.target.value);
                if (Number.isNaN(zT)) return;
                const kT = [IT[0], IT[1], IT[2]];
                kT[oT] = zT, iT(kT)
              }
            })]
          }, TT)))
        })]
      })
    }
    const Ck = (0, iT.memo)((function(TT) {
        var oT, IT, zT;
        let {
          keyframe: WT,
          anchor: XT,
          hasOutgoingSegment: BT,
          onClose: ST,
          onApply: DT,
          onDelete: LT,
          onUseCurrentCamera: xT
        } = TT;
        const cT = (0, iT.useRef)(null),
          KT = vk(cT, XT.rect),
          [MT, rT] = (0, iT.useState)((() => [WT.position[0], WT.position[1], WT.position[2]])),
          [AT, gT] = (0, iT.useState)((() => [WT.direction[0], WT.direction[1], WT.direction[2]])),
          [hT, wT] = (0, iT.useState)((() => WT.easing));
        (0, iT.useEffect)((() => {
          rT([WT.position[0], WT.position[1], WT.position[2]]), gT([WT.direction[0], WT.direction[1], WT.direction[2]]), wT(WT.easing)
        }), [WT]), Ek(cT, ST);
        const mT = (0, iT.useCallback)((() => {
            DT({
              dD: WT.dD,
              position: MT,
              direction: AT,
              easing: hT
            }), ST()
          }), [AT, hT, WT.dD, DT, ST, MT]),
          eT = (0, iT.useCallback)((() => {
            LT(WT.dD), ST()
          }), [WT.dD, LT, ST]),
          RT = (0, iT.useCallback)((() => {
            const TT = xT();
            TT && (rT([TT.position[0], TT.position[1], TT.position[2]]), gT([TT.direction[0], TT.direction[1], TT.direction[2]]))
          }), [xT]),
          uT = uk(XT.rect);
        return (0, FT.jsxs)("div", {
          ref: cT,
          className: kT()("ReplayViewerPopover ReplayKeyframePopover", {
            Below: null !== (oT = null === KT || void 0 === KT ? void 0 : KT.placeBelow) && void 0 !== oT && oT,
            Positioned: null !== KT
          }),
          style: {
            left: `${null!==(IT=null===KT||void 0===KT?void 0:KT.left)&&void 0!==IT?IT:uT.left}px`,
            top: `${null!==(zT=null===KT||void 0===KT?void 0:KT.top)&&void 0!==zT?zT:uT.top}px`
          },
          onPointerDown: TT => {
            TT.stopPropagation()
          },
          children: [(0, FT.jsxs)("div", {
            className: "ReplayKeyframePopoverHeader",
            children: [(0, FT.jsx)("span", {
              className: "ReplayKeyframePopoverTitle",
              children: "Camera keyframe"
            }), (0, FT.jsxs)("span", {
              className: "ReplayKeyframePopoverTick",
              children: ["Tick ", XT.dD]
            })]
          }), (0, FT.jsx)(fk, {
            label: "Position",
            value: MT,
            onChange: rT
          }), (0, FT.jsx)(fk, {
            label: "Direction",
            value: AT,
            onChange: gT
          }), BT && (0, FT.jsxs)("div", {
            className: "ReplayKeyframePopoverEasing",
            children: [(0, FT.jsx)("span", {
              className: "ReplayKeyframePopoverEasingLabel",
              children: "Easing to next"
            }), (0, FT.jsx)("div", {
              className: "ReplayKeyframePopoverEasingPresets",
              children: ck.map((TT => {
                const oT = (IT = hT, iT = TT.easing, IT[0] === iT[0] && IT[1] === iT[1] && IT[2] === iT[2] && IT[3] === iT[3]);
                var IT, iT;
                return (0, FT.jsx)(vI.J, {
                  className: kT()("ReplayKeyframePopoverPreset", {
                    Active: oT
                  }),
                  onClick: () => {
                    wT(TT.easing)
                  },
                  children: TT.label
                }, TT.label)
              }))
            }), (0, FT.jsx)(wk, {
              value: hT,
              onChange: wT
            })]
          }), (0, FT.jsxs)("div", {
            className: "ReplayKeyframePopoverActions",
            children: [(0, FT.jsx)(vI.e, {
              className: "ReplayViewerCompactButton",
              onClick: RT,
              children: "Use current view"
            }), (0, FT.jsx)(vI.m, {
              className: "ReplayViewerCompactButton",
              onClick: mT,
              children: "Apply"
            }), (0, FT.jsx)(vI.C, {
              className: "ReplayViewerCompactButton",
              onClick: eT,
              children: "Delete"
            })]
          })]
        })
      })),
      jk = (0, iT.memo)((function(TT) {
        var oT, IT, zT;
        let {
          anchor: WT,
          hasPlaybackMark: XT,
          onClose: BT,
          onMark: ST,
          onZoom: DT,
          onCrop: LT,
          onDeleteKeyframes: xT,
          onClearMark: cT
        } = TT;
        const KT = (0, iT.useRef)(null),
          MT = vk(KT, WT.rect),
          rT = uk(WT.rect),
          AT = {
            startTick: WT.startTick,
            endTick: WT.endTick
          },
          gT = WT.endTick > WT.startTick;
        return Ek(KT, BT), (0, FT.jsx)("div", {
          ref: KT,
          className: kT()("ReplayViewerPopover ReplayTimelineSelectionPopover", {
            Below: null !== (oT = null === MT || void 0 === MT ? void 0 : MT.placeBelow) && void 0 !== oT && oT,
            Positioned: null !== MT
          }),
          style: {
            left: `${null!==(IT=null===MT||void 0===MT?void 0:MT.left)&&void 0!==IT?IT:rT.left}px`,
            top: `${null!==(zT=null===MT||void 0===MT?void 0:MT.top)&&void 0!==zT?zT:rT.top}px`
          },
          onPointerDown: TT => {
            TT.stopPropagation()
          },
          children: (0, FT.jsxs)("div", {
            className: "ReplayTimelineSelectionPopoverActions",
            children: [(0, FT.jsx)(vI.m, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                ST(AT)
              },
              disabled: !gT,
              children: (0, FT.jsx)("span", {
                children: " Play range "
              })
            }), (0, FT.jsx)(vI.e, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                DT(AT)
              },
              children: (0, FT.jsx)("span", {
                children: " Zoom "
              })
            }), (0, FT.jsx)(vI.J, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                LT(AT)
              },
              disabled: !gT,
              children: (0, FT.jsx)("span", {
                children: " Crop "
              })
            }), (0, FT.jsx)(vI.J, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                xT(AT)
              },
              children: (0, FT.jsx)("span", {
                children: " Delete all keyframes "
              })
            }), XT && (0, FT.jsx)(vI.J, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                cT()
              },
              children: (0, FT.jsx)("span", {
                children: " Clear range "
              })
            })]
          })
        })
      })),
      Jk = (0, iT.memo)((function(TT) {
        var oT, IT;
        let {
          maxTick: zT,
          displayTick: WT,
          sC: XT,
          cameraKeyframes: BT,
          playbackMark: ST,
          onSeek: DT,
          onPause: LT,
          onScrubTickChange: xT,
          onMoveCameraKeyframe: cT,
          onUpdateCameraKeyframe: KT,
          onDeleteCameraKeyframe: MT,
          onUseCurrentCamera: rT,
          onMarkRange: AT,
          onCropRange: gT,
          onDeleteKeyframesInRange: hT,
          onClearMark: wT,
          zoomLevel: mT,
          onZoomLevelChange: eT
        } = TT;
        const RT = (0, iT.useRef)(null),
          uT = (0, iT.useRef)(null),
          vT = (0, iT.useRef)(!1),
          ET = (0, iT.useRef)(!1),
          fT = (0, iT.useRef)(mT),
          CT = (0, iT.useRef)(null),
          jT = (0, iT.useRef)(null),
          JT = (0, iT.useRef)(null),
          UT = (0, iT.useRef)(null),
          [aT, YT] = (0, iT.useState)(null),
          [QT, OT] = (0, iT.useState)(WT),
          [HT, nT] = (0, iT.useState)(null),
          [qT, ZT] = (0, iT.useState)(null),
          [lT, sT] = (0, iT.useState)(null),
          [tT, GT] = (0, iT.useState)(null),
          pT = (0, iT.useMemo)((() => BT.map((TT => TT.dD))), [BT]),
          bT = null !== aT && void 0 !== aT ? aT : WT,
          {
            viewStart: yT,
            viewEnd: NT
          } = (0, iT.useMemo)((() => function(TT) {
            const oT = TT.maxTick + 1,
              IT = Math.max(1, Math.ceil(oT / TT.zoomLevel)),
              iT = Math.floor(IT / 2);
            let zT = TT.centerTick - iT;
            return zT = Math.max(0, Math.min(zT, TT.maxTick - IT + 1)), {
              viewStart: zT,
              viewEnd: Math.min(TT.maxTick, zT + IT - 1)
            }
          }({
            maxTick: zT,
            zoomLevel: mT,
            centerTick: QT
          })), [zT, mT, QT]);
        (0, iT.useEffect)((() => {
          if (null !== aT || null !== jT.current || null !== JT.current || null !== UT.current) return;
          if (vT.current) return void(vT.current = !1);
          if (ET.current) return void(ET.current = !1);
          const TT = fT.current !== mT;
          fT.current = mT, TT && OT(WT)
        }), [mT, WT, aT]);
        const PT = (0, iT.useCallback)((TT => {
            let oT = zk(TT, zT);
            return ST && (oT = Math.max(ST.inTick, Math.min(oT, ST.outTick))), oT
          }), [zT, ST]),
          dT = (0, iT.useCallback)(((TT, oT) => {
            const IT = PT(TT);
            DT(IT), oT && OT(IT)
          }), [PT, DT]),
          VT = (0, iT.useCallback)(((TT, oT) => {
            const IT = PT(TT);
            YT(IT), xT(IT), dT(IT, oT)
          }), [PT, dT, xT]),
          To = (0, iT.useCallback)((() => {
            YT((TT => (null !== TT && OT(TT), null))), xT(null)
          }), [xT]),
          oo = (0, iT.useCallback)((() => {
            sT(null), GT(null)
          }), []),
          Io = (0, iT.useCallback)((TT => {
            const oT = RT.current;
            if (!oT) return 0;
            return zk(Wk(Sk(TT, oT), yT, NT), zT)
          }), [zT, NT, yT]),
          io = (0, iT.useCallback)((TT => {
            const oT = uT.current;
            if (!oT) return 0;
            return zk(Wk(Sk(TT, oT), 0, zT), zT)
          }), [zT]),
          zo = (0, iT.useMemo)((() => {
            if (!HT) return [...pT];
            const TT = pT.filter((TT => TT !== HT.fromTick));
            return TT.push(HT.previewTick), TT.sort(((TT, oT) => TT - oT)), TT
          }), [pT, HT]),
          ko = (0, iT.useMemo)((() => {
            var TT;
            return qT && null !== (TT = BT.find((TT => TT.dD === qT.dD))) && void 0 !== TT ? TT : null
          }), [BT, qT]),
          Wo = (0, iT.useMemo)((() => !!ko && BT.some((TT => TT.dD > ko.dD))), [BT, ko]);
        (0, iT.useEffect)((() => {
          qT && !ko && ZT(null)
        }), [qT, ko]), (0, iT.useEffect)((() => {
          if (!tT) return () => {};
          const TT = TT => {
            "Escape" === TT.key && oo()
          };
          return window.addEventListener("keydown", TT), () => {
            window.removeEventListener("keydown", TT)
          }
        }), [oo, tT]);
        const Xo = (0, iT.useCallback)(((TT, oT) => {
            oo(), LT(), DT(TT, {
              ignorePlaybackMark: !0
            }), ZT({
              dD: TT,
              rect: oT.getBoundingClientRect()
            })
          }), [oo, LT, DT]),
          Bo = (0, iT.useCallback)(((TT, oT) => IT => {
            0 === IT.button && (IT.stopPropagation(), ZT(null), oo(), LT(), CT.current = {
              fromTick: TT,
              startX: IT.clientX,
              startY: IT.clientY,
              didDrag: !1,
              track: oT
            }, nT({
              fromTick: TT,
              previewTick: TT,
              track: oT
            }), IT.currentTarget.setPointerCapture(IT.pointerId))
          }), [oo, LT]),
          Fo = (0, iT.useCallback)((TT => {
            if (!HT) return;
            TT.stopPropagation();
            const oT = CT.current;
            if (oT && !oT.didDrag) {
              const IT = TT.clientX - oT.startX,
                iT = TT.clientY - oT.startY;
              Math.hypot(IT, iT) > 5 && (oT.didDrag = !0)
            }
            const IT = "detail" === HT.track ? Io(TT.clientX) : io(TT.clientX);
            IT !== HT.previewTick && nT({
              ...HT,
              previewTick: IT
            })
          }), [HT, Io, io]),
          So = (0, iT.useCallback)((TT => {
            if (!HT) return;
            TT.stopPropagation();
            const oT = CT.current,
              IT = "detail" === HT.track ? Io(TT.clientX) : io(TT.clientX);
            oT && !oT.didDrag ? Xo(oT.fromTick, TT.currentTarget) : IT !== HT.fromTick && cT(HT.fromTick, IT), nT(null), CT.current = null, TT.currentTarget.releasePointerCapture(TT.pointerId)
          }), [HT, cT, Xo, Io, io]),
          Do = (0, iT.useCallback)((TT => {
            if (0 !== TT.button) return;
            ZT(null), LT();
            const oT = Io(TT.clientX);
            jT.current = {
              pointerId: TT.pointerId,
              startX: TT.clientX,
              startY: TT.clientY,
              startTick: oT,
              currentTick: oT,
              didSelect: !1
            }, sT(null), GT(null), TT.currentTarget.setPointerCapture(TT.pointerId)
          }), [LT, Io]),
          Lo = (0, iT.useCallback)((TT => {
            const oT = jT.current;
            if (!oT || oT.pointerId !== TT.pointerId) return;
            const IT = Io(TT.clientX);
            if (oT.currentTick = IT, !oT.didSelect) {
              const IT = TT.clientX - oT.startX,
                iT = TT.clientY - oT.startY;
              if (Math.hypot(IT, iT) <= 5) return;
              oT.didSelect = !0
            }
            const iT = Math.min(oT.startTick, IT),
              zT = Math.max(oT.startTick, IT);
            sT({
              startTick: iT,
              endTick: zT
            })
          }), [Io]),
          xo = (0, iT.useCallback)((TT => {
            const oT = jT.current;
            if (!oT || oT.pointerId !== TT.pointerId) return;
            if (jT.current = null, TT.currentTarget.releasePointerCapture(TT.pointerId), !oT.didSelect) return oo(), void dT(oT.startTick, !0);
            const IT = Io(TT.clientX),
              iT = Math.min(oT.startTick, IT),
              zT = Math.max(oT.startTick, IT),
              kT = {
                startTick: iT,
                endTick: zT
              };
            sT(kT);
            const WT = RT.current;
            if (!WT) return;
            const XT = WT.getBoundingClientRect(),
              BT = kk(iT, yT, NT) / 100,
              FT = kk(zT, yT, NT) / 100,
              ST = XT.left + BT * XT.width,
              DT = XT.left + FT * XT.width;
            GT({
              ...kT,
              rect: new DOMRect(ST, XT.top, Math.max(DT - ST, 1), XT.height)
            })
          }), [oo, dT, Io, NT, yT]),
          co = (0, iT.useCallback)((TT => oT => {
            if (0 !== oT.button) return;
            oT.stopPropagation(), ZT(null), oo(), LT(), JT.current = {
              pointerId: oT.pointerId,
              track: TT
            }, oT.currentTarget.setPointerCapture(oT.pointerId);
            const IT = "detail" === TT ? Io(oT.clientX) : io(oT.clientX);
            VT(IT, !1)
          }), [oo, LT, VT, Io, io]),
          Ko = (0, iT.useCallback)((TT => {
            const oT = JT.current;
            if (!oT || oT.pointerId !== TT.pointerId) return;
            TT.stopPropagation();
            const IT = "detail" === oT.track ? Io(TT.clientX) : io(TT.clientX);
            VT(IT, !1)
          }), [VT, Io, io]),
          Mo = (0, iT.useCallback)((TT => {
            const oT = JT.current;
            oT && oT.pointerId === TT.pointerId && (TT.stopPropagation(), JT.current = null, TT.currentTarget.releasePointerCapture(TT.pointerId), To())
          }), [To]),
          ro = (0, iT.useCallback)((TT => {
            0 === TT.button && (oo(), LT(), UT.current = {
              pointerId: TT.pointerId
            }, TT.currentTarget.setPointerCapture(TT.pointerId), VT(io(TT.clientX), !0))
          }), [oo, LT, VT, io]),
          Ao = (0, iT.useCallback)((TT => {
            const oT = UT.current;
            oT && oT.pointerId === TT.pointerId && VT(io(TT.clientX), !0)
          }), [VT, io]),
          go = (0, iT.useCallback)((TT => {
            const oT = UT.current;
            oT && oT.pointerId === TT.pointerId && (UT.current = null, TT.currentTarget.releasePointerCapture(TT.pointerId), To())
          }), [To]),
          ho = (0, iT.useCallback)((TT => {
            const oT = Math.max(1, TT.endTick - TT.startTick + 1),
              IT = zT + 1,
              iT = IT / oT,
              kT = Math.max(1, Math.ceil(IT / iT)),
              WT = TT.startTick + Math.floor((kT - 1) / 2);
            ET.current = !0, fT.current = iT, OT(zk(WT, zT)), eT(iT), oo()
          }), [oo, zT, eT]),
          wo = (0, iT.useCallback)((TT => {
            AT(TT), oo()
          }), [oo, AT]),
          mo = (0, iT.useCallback)((TT => {
            gT(TT), oo()
          }), [oo, gT]),
          eo = (0, iT.useCallback)((TT => {
            hT(TT), oo()
          }), [oo, hT]),
          Ro = (0, iT.useCallback)((() => {
            wT(), oo()
          }), [oo, wT]);
        (0, iT.useEffect)((() => {
          const TT = RT.current;
          if (!TT) return () => {};
          const oT = oT => {
            oT.preventDefault();
            const IT = zk(Wk(Sk(oT.clientX, TT), yT, NT), zT),
              iT = oT.deltaY < 0 ? "in" : "out",
              kT = Fk(mT, iT);
            kT !== mT && (vT.current = !0, OT(IT), eT(kT))
          };
          return TT.addEventListener("wheel", oT, {
            passive: !1
          }), () => {
            TT.removeEventListener("wheel", oT)
          }
        }), [zT, eT, NT, yT, mT]);
        const uo = kk(bT, yT, NT),
          vo = Dk(bT, zT),
          Eo = Dk(yT, zT),
          fo = zT > 0 ? Dk(NT, zT) : 100,
          Co = null !== ST,
          jo = null !== (oT = null === ST || void 0 === ST ? void 0 : ST.inTick) && void 0 !== oT ? oT : 0,
          Jo = null !== (IT = null === ST || void 0 === ST ? void 0 : ST.outTick) && void 0 !== IT ? IT : zT,
          Uo = Dk(jo, zT),
          ao = Math.max(Dk(Jo, zT) - Uo, 0),
          Yo = kk(Math.max(jo, yT), yT, NT),
          Qo = kk(Math.min(Jo, NT), yT, NT),
          Oo = Math.max(Qo - Yo, 0),
          Ho = Co && Jo >= yT && jo <= NT,
          no = kk(jo, yT, NT),
          qo = kk(Jo, yT, NT),
          Zo = Co && jo >= yT && jo <= NT,
          so = Co && Jo >= yT && Jo <= NT,
          to = Dk(jo, zT),
          Go = Dk(Jo, zT),
          po = null !== lT && void 0 !== lT ? lT : tT ? {
            startTick: tT.startTick,
            endTick: tT.endTick
          } : null,
          bo = po ? kk(Math.max(po.startTick, yT), yT, NT) : 0,
          yo = po ? kk(Math.min(po.endTick, NT), yT, NT) : 0,
          No = Math.max(yo - bo, 0),
          Po = null !== po && po.endTick >= yT && po.startTick <= NT,
          Vo = (0, iT.useMemo)((() => Lk(0, zT, XT)), [zT, XT]),
          TI = (0, iT.useMemo)((() => Lk(yT, NT, XT)), [yT, NT, XT]),
          oI = (0, iT.useMemo)((() => zo.filter((TT => TT >= yT && TT <= NT))), [zo, NT, yT]),
          II = (0, iT.useCallback)(((TT, oT, IT) => {
            const iT = "detail" === oT ? kk(TT, yT, NT) : Dk(TT, zT),
              WT = null !== HT && IT === HT.fromTick,
              XT = null !== qT && qT.dD === IT;
            return (0, FT.jsx)("button", {
              type: "button",
              className: kT()("ReplayTimelineCameraKeyframeMarker", "detail" === oT ? "Detail" : "Overview", {
                Dragging: WT,
                Selected: XT
              }),
              style: {
                left: `${iT}%`
              },
              onPointerDown: Bo(IT, oT),
              onPointerMove: Fo,
              onPointerUp: So,
              onPointerCancel: So,
              "aria-label": `Camera keyframe at tick ${IT}`
            }, `cam-${oT}-${IT}`)
          }), [Bo, qT, So, HT, zT, Fo, NT, yT]),
          iI = (0, iT.useCallback)((TT => HT && TT === HT.previewTick ? HT.fromTick : TT), [HT]);
        return zT <= 0 ? null : (0, FT.jsxs)("div", {
          className: "ReplayTimeline",
          children: [qT && ko && (0, Ik.createPortal)((0, FT.jsx)(Ck, {
            keyframe: ko,
            anchor: qT,
            hasOutgoingSegment: Wo,
            onClose: () => {
              ZT(null)
            },
            onApply: KT,
            onDelete: MT,
            onUseCurrentCamera: rT
          }), document.body), tT && (0, Ik.createPortal)((0, FT.jsx)(jk, {
            anchor: tT,
            hasPlaybackMark: Co,
            onClose: oo,
            onMark: wo,
            onZoom: ho,
            onCrop: mo,
            onDeleteKeyframes: eo,
            onClearMark: Ro
          }), document.body), (0, FT.jsxs)("div", {
            className: kT()("ReplayTimelineOverviewSection", {
              Hidden: mT <= 1
            }),
            children: [(0, FT.jsx)("div", {
              className: "ReplayTimelineSectionLabel",
              children: "Overview"
            }), (0, FT.jsxs)("div", {
              ref: uT,
              className: "ReplayTimelineOverviewTrack",
              onPointerDown: ro,
              onPointerMove: Ao,
              onPointerUp: go,
              onPointerCancel: go,
              role: "slider",
              "aria-label": "Recording overview",
              "aria-valuemin": 0,
              "aria-valuemax": zT,
              "aria-valuenow": bT,
              tabIndex: 0,
              children: [Vo.map((TT => {
                const oT = Dk(TT, zT);
                return (0, FT.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Overview",
                  style: {
                    left: `${oT}%`
                  }
                }, TT)
              })), Co && (0, FT.jsxs)(FT.Fragment, {
                children: [(0, FT.jsx)("div", {
                  className: "ReplayTimelineMarkRegion Overview",
                  style: {
                    left: `${Uo}%`,
                    width: `${ao}%`
                  }
                }), (0, FT.jsx)("div", {
                  className: "ReplayTimelineMarkMarker In Overview",
                  style: {
                    left: `${to}%`
                  },
                  "aria-hidden": !0
                }), (0, FT.jsx)("div", {
                  className: "ReplayTimelineMarkMarker Out Overview",
                  style: {
                    left: `${Go}%`
                  },
                  "aria-hidden": !0
                })]
              }), zo.map((TT => II(TT, "overview", iI(TT)))), (0, FT.jsx)("div", {
                className: "ReplayTimelineViewport",
                style: {
                  left: `${Eo}%`,
                  width: `${Math.max(fo-Eo,.5)}%`
                }
              }), (0, FT.jsx)("button", {
                type: "button",
                className: kT()("ReplayTimelinePlayhead Overview", {
                  Scrubbing: null !== aT
                }),
                style: {
                  left: `${vo}%`
                },
                onPointerDown: co("overview"),
                onPointerMove: Ko,
                onPointerUp: Mo,
                onPointerCancel: Mo,
                "aria-label": "Scrub playhead"
              })]
            })]
          }), (0, FT.jsxs)("div", {
            className: "ReplayTimelineDetailSection",
            children: [(0, FT.jsxs)("div", {
              className: "ReplayTimelineDetailHeader",
              children: [(0, FT.jsx)("span", {
                className: "ReplayTimelineSectionLabel",
                children: "Timeline"
              }), (0, FT.jsxs)("span", {
                className: "ReplayTimelineDetailRange",
                children: [Xk(yT, XT), " \u2013 ", Xk(NT, XT), mT > 1 && (0, FT.jsx)("span", {
                  className: "ReplayTimelineZoomBadge",
                  children: Bk(mT)
                })]
              })]
            }), (0, FT.jsxs)("div", {
              ref: RT,
              className: "ReplayTimelineDetailTrack",
              onPointerDown: Do,
              onPointerMove: Lo,
              onPointerUp: xo,
              onPointerCancel: xo,
              role: "slider",
              "aria-label": "Recording timeline",
              "aria-valuemin": yT,
              "aria-valuemax": NT,
              "aria-valuenow": bT,
              tabIndex: 0,
              children: [TI.map((TT => {
                const oT = kk(TT, yT, NT);
                return (0, FT.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Detail",
                  style: {
                    left: `${oT}%`
                  }
                }, TT)
              })), Ho && (0, FT.jsx)("div", {
                className: "ReplayTimelineMarkRegion Detail",
                style: {
                  left: `${Yo}%`,
                  width: `${Oo}%`
                }
              }), Zo && (0, FT.jsx)("div", {
                className: "ReplayTimelineMarkMarker In Detail",
                style: {
                  left: `${no}%`
                },
                "aria-label": `Play range start at tick ${jo}`
              }), so && (0, FT.jsx)("div", {
                className: "ReplayTimelineMarkMarker Out Detail",
                style: {
                  left: `${qo}%`
                },
                "aria-label": `Play range end at tick ${Jo}`
              }), Po && po && (0, FT.jsx)("div", {
                className: "ReplayTimelineSelectionRegion Detail",
                style: {
                  left: `${bo}%`,
                  width: `${No}%`
                }
              }), oI.map((TT => II(TT, "detail", iI(TT)))), (0, FT.jsx)("button", {
                type: "button",
                className: kT()("ReplayTimelinePlayhead Detail", {
                  Scrubbing: null !== aT
                }),
                style: {
                  left: `${uo}%`
                },
                onPointerDown: co("detail"),
                onPointerMove: Ko,
                onPointerUp: Mo,
                onPointerCancel: Mo,
                "aria-label": "Scrub playhead"
              })]
            }), (0, FT.jsxs)("div", {
              className: "ReplayTimelineWheelHint",
              children: [(0, FT.jsx)("span", {
                className: "Select",
                children: "Drag timeline to select"
              }), " \xb7 Scroll to zoom \xb7 Drag playhead to scrub"]
            })]
          })]
        })
      })),
      Uk = (0, iT.memo)((function(TT) {
        let {
          enabled: oT
        } = TT;
        const IT = (0, iT.useRef)(!1),
          zT = (0, iT.useRef)(null),
          [WT, XT] = (0, iT.useState)(!1),
          BT = (0, iT.useCallback)((TT => {
            oT && 0 === TT.button && (IT.current = !0, XT(!0), zT.current = {
              x: TT.clientX,
              y: TT.clientY
            }, TT.currentTarget.setPointerCapture(TT.pointerId))
          }), [oT]),
          ST = (0, iT.useCallback)((TT => {
            if (!oT || !IT.current || !zT.current) return;
            const iT = TT.clientX - zT.current.x,
              kT = TT.clientY - zT.current.y;
            zT.current = {
              x: TT.clientX,
              y: TT.clientY
            }, LT.gameBridge.send("dragReplayCamera", {
              dx: iT,
              dy: kT
            })
          }), [oT]),
          DT = (0, iT.useCallback)((TT => {
            IT.current && (IT.current = !1, XT(!1), zT.current = null, TT.currentTarget.releasePointerCapture(TT.pointerId))
          }), []);
        return oT ? (0, FT.jsx)("div", {
          className: kT()("ReplayViewerCameraDragSurface", {
            Dragging: WT
          }),
          onPointerDown: BT,
          onPointerMove: ST,
          onPointerUp: DT,
          onPointerCancel: DT,
          "aria-hidden": !0
        }) : null
      }));
    var ak = IT(35956),
      Yk = IT(35965);
    const Qk = (0, iT.memo)((function(TT) {
        var oT, IT, zT;
        let {
          anchorRect: WT,
          anchorRef: BT,
          onClose: ST
        } = TT;
        const DT = (0, iT.useRef)(null),
          LT = vk(DT, WT),
          [xT, cT] = (0, iT.useState)(Yk.d),
          KT = (0, iT.useMemo)((() => Object.values(xT).every((TT => TT))), [xT]);
        (0, XT.g)("replayViewer|uiVisibilityChanged", (() => {
          cT((0, Yk.d)())
        })), Ek(DT, ST, BT);
        const MT = (0, iT.useCallback)(((TT, oT) => {
            (0, Yk.i)(TT, oT), cT((0, Yk.d)())
          }), []),
          rT = (0, iT.useCallback)((TT => {
            for (const {
                group: oT
              }
              of ak.d)(0, Yk.i)(oT, TT);
            cT((0, Yk.d)())
          }), []),
          AT = uk(WT);
        return (0, Ik.createPortal)((0, FT.jsxs)("div", {
          ref: DT,
          className: kT()("ReplayViewerPopover ReplayUiVisibilityPopover", {
            Below: null !== (oT = null === LT || void 0 === LT ? void 0 : LT.placeBelow) && void 0 !== oT && oT,
            Positioned: null !== LT
          }),
          style: {
            left: `${null!==(IT=null===LT||void 0===LT?void 0:LT.left)&&void 0!==IT?IT:AT.left}px`,
            top: `${null!==(zT=null===LT||void 0===LT?void 0:LT.top)&&void 0!==zT?zT:AT.top}px`
          },
          onPointerDown: TT => {
            TT.stopPropagation()
          },
          children: [(0, FT.jsx)("div", {
            className: "ReplayUiVisibilityPopoverHeader",
            children: (0, FT.jsx)("span", {
              className: "ReplayUiVisibilityPopoverTitle",
              children: "UI visibility"
            })
          }), (0, FT.jsxs)("div", {
            className: "ReplayUiVisibilityPopoverChecks",
            children: [(0, FT.jsxs)("div", {
              className: "ReplayUiVisibilityPopoverCheck",
              children: [(0, FT.jsx)("input", {
                type: "checkbox",
                checked: KT,
                onChange: TT => {
                  rT(TT.target.checked)
                }
              }), (0, FT.jsx)("span", {
                children: "SELECT ALL"
              })]
            }), ak.d.map((TT => {
              let {
                group: oT,
                label: IT
              } = TT;
              return (0, FT.jsxs)("label", {
                className: "ReplayUiVisibilityPopoverCheck",
                children: [(0, FT.jsx)("input", {
                  type: "checkbox",
                  checked: xT[oT],
                  onChange: TT => {
                    MT(oT, TT.target.checked)
                  }
                }), (0, FT.jsx)("span", {
                  children: IT
                })]
              }, oT)
            }))]
          })]
        }), document.body)
      })),
      Ok = (0, iT.memo)((function(TT) {
        let {
          disabled: oT
        } = TT;
        const IT = (0, iT.useRef)(null),
          [zT, kT] = (0, iT.useState)(!1),
          [WT, XT] = (0, iT.useState)(null),
          BT = (0, iT.useCallback)((() => {
            IT.current && (XT(IT.current.getBoundingClientRect()), kT((TT => !TT)))
          }), []),
          ST = (0, iT.useCallback)((() => {
            kT(!1)
          }), []);
        return (0, FT.jsxs)(FT.Fragment, {
          children: [(0, FT.jsx)("div", {
            ref: IT,
            children: (0, FT.jsx)(vI.e, {
              className: "ReplayViewerActionButton",
              onClick: BT,
              disabled: oT,
              children: (0, FT.jsx)("span", {
                children: "Hide UI elements"
              })
            })
          }), zT && WT && (0, FT.jsx)(Qk, {
            anchorRect: WT,
            anchorRef: IT,
            onClose: ST
          })]
        })
      })),
      Hk = ["freeCamUp", "freeCamDown"];

    function nk(TT, oT) {
      LT.gameBridge.send("holdReplayFreecamVertical", {
        action: TT,
        kS: oT
      })
    }
    const qk = (0, iT.memo)((function() {
        (0, iT.useEffect)((() => () => {
          ! function() {
            LT.gameBridge.send("moveReplayFreecam", null);
            for (const TT of Hk) nk(TT, !1)
          }()
        }), []);
        const TT = (0, iT.useCallback)((TT => {
            LT.gameBridge.send("moveReplayFreecam", TT)
          }), []),
          oT = (0, iT.useCallback)((TT => ({
            onTouchStart: oT => {
              oT.preventDefault(), oT.stopPropagation(), nk(TT, !0)
            },
            onTouchEnd: oT => {
              oT.preventDefault(), oT.stopPropagation(), nk(TT, !1)
            },
            onTouchCancel: oT => {
              oT.preventDefault(), oT.stopPropagation(), nk(TT, !1)
            }
          })), []);
        return (0, FT.jsxs)("div", {
          className: "ReplayFreecamTouchControls",
          children: [(0, FT.jsx)("div", {
            className: "ReplayFreecamJoystickWrap",
            children: (0, FT.jsx)(mo, {
              onMove: TT,
              mode: "pinned"
            })
          }), (0, FT.jsxs)("div", {
            className: "ReplayFreecamVerticalButtons",
            children: [(0, FT.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam up",
              ...oT("freeCamUp"),
              children: (0, FT.jsx)(OT.e, {
                name: "arrow-up",
                className: "ReplayFreecamVerticalIcon"
              })
            }), (0, FT.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam down",
              ...oT("freeCamDown"),
              children: (0, FT.jsx)(OT.e, {
                name: "angle-down",
                className: "ReplayFreecamVerticalIcon"
              })
            })]
          })]
        })
      })),
      Zk = [],
      lk = (0, iT.memo)((function() {
        const TT = (0, bT.m)();
        return (0, eT.c)("replayViewerRequested", (TT => {
          (0, bT.i)("toggle" === TT ? !(0, bT.e)() : "open" === TT)
        })), TT ? (0, FT.jsx)(sk, {}) : null
      })),
      sk = (0, iT.memo)((function() {
        var TT, oT, IT, zT, WT, XT, BT, ST, DT, xT, cT, KT;
        const MT = iT.useRef(null),
          [rT, AT] = (0, iT.useState)(null),
          [gT, hT] = (0, iT.useState)(1),
          [wT, mT] = (0, iT.useState)(null),
          [vT, ET] = (0, iT.useState)(!1),
          {
            isTouchScreen: fT
          } = (0, RT.k)(["isTouchScreen"]),
          CT = (0, eT.f)("replay"),
          jT = (0, eT.f)("replayEdits"),
          JT = null !== CT,
          UT = null !== (TT = null === CT || void 0 === CT ? void 0 : CT.dD) && void 0 !== TT ? TT : 0,
          aT = null !== (oT = null === CT || void 0 === CT ? void 0 : CT.totalTicks) && void 0 !== oT ? oT : 0,
          YT = Math.max(0, aT - 1),
          HT = null !== (IT = null === CT || void 0 === CT ? void 0 : CT.playing) && void 0 !== IT && IT,
          nT = null !== (zT = null === CT || void 0 === CT ? void 0 : CT.speed) && void 0 !== zT ? zT : 1,
          qT = null !== (WT = null === CT || void 0 === CT ? void 0 : CT.sC) && void 0 !== WT ? WT : 20,
          ZT = null !== wT && void 0 !== wT ? wT : UT,
          lT = null !== (XT = null === CT || void 0 === CT ? void 0 : CT.freecam) && void 0 !== XT && XT,
          sT = null !== (BT = null === CT || void 0 === CT ? void 0 : CT.cameraMode) && void 0 !== BT ? BT : "recording",
          tT = null !== (ST = null === jT || void 0 === jT ? void 0 : jT.cameraKeyframes) && void 0 !== ST ? ST : Zk,
          GT = null !== (DT = null === jT || void 0 === jT ? void 0 : jT.playbackMark) && void 0 !== DT ? DT : null,
          pT = null !== (xT = null === jT || void 0 === jT ? void 0 : jT.fileName) && void 0 !== xT ? xT : null,
          yT = null !== (cT = null === jT || void 0 === jT ? void 0 : jT.unsavedChanges) && void 0 !== cT && cT,
          NT = null !== (KT = null === jT || void 0 === jT ? void 0 : jT.suggestSaveAs) && void 0 !== KT && KT,
          PT = (0, eT.f)("replayVideoExporting"),
          dT = !PT && JT && ("freecam" === sT || ("recording" === sT || "keyframe" === sT) && !HT),
          VT = fT && JT && "freecam" === sT && !PT && !vT;
        (0, Tk.d)(!0, !0, "ReplayViewerOverlay"), (0, iT.useEffect)((() => {
          LT.gameBridge.send("syncReplayCameraMode", null)
        }), [lT]);
        const To = (0, iT.useCallback)(((TT, oT) => {
            LT.gameBridge.send("seekReplay", {
              dD: TT,
              ignorePlaybackMark: null === oT || void 0 === oT ? void 0 : oT.ignorePlaybackMark
            })
          }), []),
          oo = (0, iT.useCallback)((() => {
            LT.gameBridge.send("setReplayPlaying", !1)
          }), []),
          Io = (0, iT.useCallback)(((TT, oT) => {
            LT.gameBridge.send("moveReplayCameraKeyframe", {
              from: TT,
              to: oT
            })
          }), []),
          io = (0, iT.useCallback)((TT => {
            LT.gameBridge.send("setReplayCameraKeyframe", TT)
          }), []),
          zo = (0, iT.useCallback)((TT => {
            LT.gameBridge.send("deleteReplayCameraKeyframes", {
              start: TT,
              end: TT
            })
          }), []),
          ko = (0, iT.useCallback)((TT => {
            LT.gameBridge.send("deleteReplayCameraKeyframes", {
              start: TT.startTick,
              end: TT.endTick
            })
          }), []),
          Wo = (0, iT.useCallback)((() => LT.gameBridge.lookup("replayCamera", null)), []),
          Xo = (0, iT.useCallback)((TT => {
            mT(TT)
          }), []),
          Bo = (0, iT.useCallback)((TT => {
            LT.gameBridge.send("setReplayPlaybackMark", {
              inTick: TT.startTick,
              outTick: TT.endTick
            })
          }), []),
          Fo = (0, iT.useCallback)((() => {
            LT.gameBridge.send("setReplayPlaybackMark", null)
          }), []),
          So = (0, iT.useCallback)((TT => {
            const oT = LT.gameBridge.latest("replay");
            if (null === oT || TT.endTick <= TT.startTick) return;
            const IT = TT.startTick,
              iT = TT.endTick;
            Ni.NotificationProvider.showPromptPopup({
              title: "Crop recording to the selected range? This cannot be undone.",
              confirmText: "Crop",
              destructive: !0,
              cancelText: "Cancel"
            }).getResult().then((TT => {
              var zT;
              if (!0 !== TT) return;
              if ((null === (zT = LT.gameBridge.latest("replay")) || void 0 === zT ? void 0 : zT.id) !== oT.id) return;
              LT.gameBridge.send("cropReplay", {
                start: IT,
                end: iT
              }) && (mT(null), hT(1))
            }))
          }), []),
          Do = (0, iT.useCallback)(((TT, oT) => {
            AT(null), hT(1), mT(null), (0, tz.b)().open(TT, oT).catch((TT => {
              console.error(TT), AT(TT instanceof Error ? TT.message : "Failed to parse recording")
            }))
          }), []),
          Lo = (0, iT.useCallback)(((TT, oT) => {
            null !== LT.gameBridge.latest("connectedGame").websocketUrl ? Ni.NotificationProvider.showPromptPopup({
              title: "Leave current game and play recording?",
              confirmText: "Yes",
              cancelText: "No"
            }).getResult().then((IT => {
              !0 === IT && Do(TT, oT)
            })) : Do(TT, oT)
          }), [Do]),
          xo = (0, iT.useCallback)((TT => {
            var oT;
            const IT = null === (oT = TT.target.files) || void 0 === oT ? void 0 : oT[0];
            if (TT.target.value = "", !IT) return;
            const iT = new FileReader;
            iT.onload = () => {
              Lo(new Uint8Array(iT.result), {
                fileName: IT.name
              })
            }, iT.onerror = () => {
              AT("Failed to read file")
            }, iT.readAsArrayBuffer(IT)
          }), [Lo]),
          co = (0, iT.useCallback)((() => {
            const TT = () => {
              var TT;
              null === (TT = MT.current) || void 0 === TT || TT.click()
            };
            (0, bz.m)() ? (0, bz.g)().then((TT => {
              TT && Lo(TT.bytes, {
                fileHandle: TT.handle
              })
            })).catch((oT => {
              console.error(oT), TT()
            })): TT()
          }), [Lo]),
          Ko = (0, iT.useCallback)((async function() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            let oT;
            try {
              oT = await Vz(TT, {
                files: (0, tz.b)(),
                pickerSupported: bz.m,
                chooseFile: bz.e,
                write: bz.p,
                download: pz.g,
                onFallback: console.error
              })
            } catch (IT) {
              return void(TT => {
                console.error(TT), Ni.NotificationProvider.showAlertPopup({
                  title: "Failed to save recording",
                  subtitle: Nz(TT),
                  confirmText: "OK"
                })
              })(IT)
            }
            "written" !== oT && "downloaded" !== oT || (() => {
              const TT = Ni.NotificationProvider.showAlertPopup({
                title: "Recording saved",
                disableBackground: !0
              });
              setTimeout((() => {
                TT.tearDownNotification()
              }), 1e3)
            })()
          }), []),
          Mo = (0, iT.useCallback)((TT => {
            LT.gameBridge.send("replayAction", TT)
          }), []),
          ro = (0, iT.useCallback)((TT => {
            hT((oT => Fk(oT, TT)))
          }), []),
          Ao = (0, iT.useCallback)((TT => {
            if (!LT.gameBridge.latest("replayVideoExporting")) switch (TT) {
              case "replayLoad":
                co();
                break;
              case "replaySave":
                Ko(!1);
                break;
              case "replaySaveAs":
                Ko(!0);
                break;
              case "replayTimelineZoomIn":
                ro("in");
                break;
              case "replayTimelineZoomOut":
                ro("out")
            }
          }), [co, Ko, ro]);
        (0, eT.c)("replayUiActionRequested", Ao);
        const go = (0, iT.useCallback)((TT => {
            LT.gameBridge.send("setReplayCameraMode", TT)
          }), []),
          ho = JT ? vI.e : vI.m,
          wo = yT && !NT ? vI.m : vI.e,
          mo = yT && NT ? vI.m : vI.e;
        return (0, FT.jsxs)("div", {
          className: "ReplayViewerOverlay",
          children: [(0, FT.jsx)(Uk, {
            enabled: dT
          }), VT && (0, FT.jsx)(qk, {}), (0, FT.jsx)("input", {
            ref: MT,
            type: "file",
            accept: pz.d,
            className: "ReplayViewerFileInput",
            onChange: xo
          }), (0, FT.jsxs)("div", {
            className: kT()("ReplayViewerBar", {
              Collapsed: vT
            }),
            children: [(0, FT.jsx)("button", {
              type: "button",
              className: "ReplayViewerCollapseTab",
              onClick: () => {
                vT ? ET(!1) : JT ? ET(!0) : (0, bT.d)()
              },
              "aria-expanded": !vT,
              "aria-label": vT ? "Expand replay viewer" : "Collapse replay viewer",
              children: (0, FT.jsx)(OT.e, {
                name: vT ? "angle-up" : "angle-down"
              })
            }), !vT && (0, FT.jsxs)("div", {
              className: "ReplayViewerBarBody",
              children: [JT && aT > 0 && (0, FT.jsx)(Jk, {
                maxTick: YT,
                displayTick: ZT,
                sC: qT,
                cameraKeyframes: tT,
                playbackMark: GT,
                onSeek: To,
                onPause: oo,
                onScrubTickChange: Xo,
                onMoveCameraKeyframe: Io,
                onUpdateCameraKeyframe: io,
                onDeleteCameraKeyframe: zo,
                onUseCurrentCamera: Wo,
                onMarkRange: Bo,
                onCropRange: So,
                onDeleteKeyframesInRange: ko,
                onClearMark: Fo,
                zoomLevel: gT,
                onZoomLevelChange: hT
              }, YT), (0, FT.jsxs)("div", {
                className: "ReplayViewerControls",
                children: [(0, FT.jsxs)("div", {
                  className: "ReplayViewerControlsLeftSide",
                  children: [(0, FT.jsxs)("div", {
                    className: "ReplayViewerControlsGroup FileGroup",
                    children: [JT && (0, FT.jsxs)("div", {
                      className: "ReplayViewerFileName",
                      children: [null !== pT && void 0 !== pT ? pT : "Unsaved recording", yT ? " *" : ""]
                    }), (0, FT.jsxs)(ho, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Ao("replayLoad")
                      },
                      children: [(0, FT.jsx)(uT.e, {
                        noaAction: "replayLoad",
                        padHidesKey: !0
                      }), (0, FT.jsx)("span", {
                        children: " Load "
                      })]
                    }), (0, FT.jsxs)(vI.e, {
                      className: "ReplayViewerActionButton",
                      onClick: bT.d,
                      children: [(0, FT.jsx)(uT.e, {
                        noaAction: "replayViewerOpen",
                        padHidesKey: !0
                      }), (0, FT.jsx)("span", {
                        children: " Hide "
                      })]
                    }), (0, FT.jsxs)(wo, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Ao("replaySave")
                      },
                      disabled: !JT,
                      children: [(0, FT.jsx)(uT.e, {
                        noaAction: "replaySave",
                        padHidesKey: !0
                      }), (0, FT.jsx)("span", {
                        children: " Save "
                      })]
                    }), (0, FT.jsxs)(vI.e, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        LT.gameBridge.send("leaveGame", {
                          reloadPath: "/"
                        })
                      },
                      disabled: !JT,
                      children: [(0, FT.jsx)(uT.e, {
                        noaAction: "replayExit",
                        padHidesKey: !0
                      }), (0, FT.jsx)("span", {
                        children: " Exit "
                      })]
                    }), (0, FT.jsxs)(mo, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Ao("replaySaveAs")
                      },
                      disabled: !JT,
                      children: [(0, FT.jsx)(uT.e, {
                        noaAction: "replaySaveAs",
                        padHidesKey: !0
                      }), (0, FT.jsx)("span", {
                        children: " Save As "
                      })]
                    }), (0, FT.jsxs)(vI.e, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        LT.gameBridge.send("exportReplayVideo", null)
                      },
                      disabled: !JT || 0 === aT || PT,
                      children: [(0, FT.jsx)(uT.e, {
                        noaAction: "replayExportVideo",
                        padHidesKey: !0
                      }), (0, FT.jsx)("span", {
                        children: " Export "
                      })]
                    })]
                  }), (0, FT.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, FT.jsxs)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: [(0, FT.jsx)("span", {
                        children: " Camera Mode "
                      }), (0, FT.jsx)(uT.e, {
                        noaAction: "replayChangeCameraMode",
                        padHidesKey: !0
                      })]
                    }), (0, FT.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody CameraModes",
                      children: [(0, FT.jsx)(QT.e, {
                        tooltipInner: (0, FT.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Replicate how the camera was set when recorded."
                        }),
                        children: (0, FT.jsxs)(vI.J, {
                          className: "ReplayViewerModeButton",
                          active: "recording" === sT,
                          onClick: () => {
                            go("recording")
                          },
                          disabled: !JT,
                          children: ["Recorded ", (0, FT.jsx)(OT.e, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, FT.jsx)(QT.e, {
                        tooltipInner: (0, FT.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Move the camera freely around."
                        }),
                        children: (0, FT.jsxs)(vI.J, {
                          className: "ReplayViewerModeButton",
                          active: "freecam" === sT,
                          onClick: () => {
                            go("freecam")
                          },
                          disabled: !JT,
                          children: ["Free ", (0, FT.jsx)(OT.e, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, FT.jsx)(QT.e, {
                        tooltipInner: (0, FT.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Display the replay in real time using keyframes."
                        }),
                        children: (0, FT.jsxs)(vI.J, {
                          className: "ReplayViewerModeButton",
                          active: "keyframe" === sT,
                          onClick: () => {
                            go("keyframe")
                          },
                          disabled: !JT,
                          children: ["Preview ", (0, FT.jsx)(OT.e, {
                            name: "circle-info"
                          })]
                        })
                      })]
                    })]
                  })]
                }), (0, FT.jsxs)("div", {
                  className: "ReplayViewerControlsGroup TimeGroup",
                  children: [(0, FT.jsxs)("div", {
                    className: "ReplayViewerTimecodeContainer",
                    children: [(0, FT.jsxs)("span", {
                      className: "ReplayViewerTimecode",
                      children: [(0, FT.jsx)("span", {
                        className: "ReplayViewerTimecodeNow",
                        children: Xk(ZT, qT)
                      }), (0, FT.jsx)("span", {
                        className: "ReplayViewerTimecodeDivider",
                        children: "/"
                      }), (0, FT.jsx)("span", {
                        className: "ReplayViewerTimecodeTotal",
                        children: Xk(YT, qT)
                      })]
                    }), (0, FT.jsxs)("span", {
                      className: "ReplayViewerTickLabel",
                      children: ["Tick ", ZT, " / ", YT]
                    })]
                  }), (0, FT.jsxs)("div", {
                    className: "ReplayViewerTimecodeControls",
                    children: [(0, FT.jsxs)(vI.e, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        Mo("replaySkipBack")
                      },
                      disabled: !JT,
                      children: [(0, FT.jsxs)("span", {
                        children: [" ", (0, FT.jsx)(OT.e, {
                          name: "clock-rotate-left"
                        }), " 1s"]
                      }), (0, FT.jsx)(uT.e, {
                        noaAction: "replaySkipBack",
                        padHidesKey: !0
                      })]
                    }), (0, FT.jsxs)(vI.m, {
                      className: "ReplayViewerMediaButton PlayButton",
                      onClick: () => {
                        LT.gameBridge.send("setReplayPlaying", !HT)
                      },
                      disabled: !JT,
                      children: [(0, FT.jsxs)("span", {
                        children: [" ", HT ? (0, FT.jsx)(OT.e, {
                          name: "pause"
                        }) : (0, FT.jsx)(OT.e, {
                          name: "play"
                        }), " "]
                      }), (0, FT.jsx)(uT.e, {
                        noaAction: "replayPlayPause",
                        padHidesKey: !0
                      })]
                    }), (0, FT.jsxs)(vI.e, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        Mo("replaySkipForward")
                      },
                      disabled: !JT,
                      children: [(0, FT.jsxs)("span", {
                        children: [" ", (0, FT.jsx)(OT.e, {
                          name: "rotate-forward"
                        }), " 1s"]
                      }), (0, FT.jsx)(uT.e, {
                        noaAction: "replaySkipForward",
                        padHidesKey: !0
                      })]
                    })]
                  })]
                }), (0, FT.jsxs)("div", {
                  className: "ReplayViewerControlsRightSide",
                  children: [(0, FT.jsxs)("div", {
                    className: "ReplayViewerControlsGroup RecordKeyframeGroup",
                    children: [(0, FT.jsxs)(vI.m, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Mo("replayRecordKeyframe")
                      },
                      disabled: !JT,
                      children: [(0, FT.jsx)(uT.e, {
                        noaAction: "replayRecordKeyframe",
                        padHidesKey: !0
                      }), (0, FT.jsx)("span", {
                        children: " Record keyframe "
                      })]
                    }), (0, FT.jsx)(Ok, {
                      disabled: !JT
                    }), GT && (0, FT.jsx)(vI.J, {
                      className: "ReplayViewerActionButton",
                      onClick: Fo,
                      disabled: !JT,
                      children: (0, FT.jsx)("span", {
                        children: " Clear range "
                      })
                    })]
                  }), (0, FT.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, FT.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Speed"
                    }), (0, FT.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, FT.jsx)(vI.e, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          Mo("replaySpeedDown")
                        },
                        disabled: !JT || (0, Gz.e)(nT),
                        children: (0, FT.jsx)("span", {
                          children: " \u2212 "
                        })
                      }), (0, FT.jsxs)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: [nT, "\xd7"]
                      }), (0, FT.jsx)(vI.e, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          Mo("replaySpeedUp")
                        },
                        disabled: !JT || (0, Gz.c)(nT),
                        children: (0, FT.jsx)("span", {
                          children: " + "
                        })
                      })]
                    })]
                  }), (0, FT.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, FT.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Timeline Zoom"
                    }), (0, FT.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, FT.jsxs)(vI.e, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          Ao("replayTimelineZoomOut")
                        },
                        disabled: !JT || gT <= ik[0],
                        children: [(0, FT.jsx)("span", {
                          children: " \u2212 "
                        }), (0, FT.jsx)(uT.e, {
                          noaAction: "replayTimelineZoomOut",
                          padHidesKey: !0
                        })]
                      }), (0, FT.jsx)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: Bk(gT)
                      }), (0, FT.jsxs)(vI.e, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          Ao("replayTimelineZoomIn")
                        },
                        disabled: !JT || gT >= ik[ik.length - 1],
                        children: [(0, FT.jsx)("span", {
                          children: " + "
                        }), (0, FT.jsx)(uT.e, {
                          noaAction: "replayTimelineZoomIn",
                          padHidesKey: !0
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0, FT.jsx)("div", {
                className: "ReplayViewerEmptyState",
                children: !JT && "Load a recording to begin playback"
              }), rT && (0, FT.jsx)("div", {
                className: "ReplayViewerError",
                children: rT
              })]
            })]
          })]
        })
      }));
    var tk = IT(1293);

    function Gk() {
      const [, TT] = (0, iT.useState)(0);
      return (0, XT.g)("replayViewer|uiVisibilityChanged", (() => {
          TT((TT => TT + 1))
        })), (0, XT.g)("replayViewer|replayLoaded", (() => {
          TT((TT => TT + 1))
        })),
        function() {
          if (!(0, tk.h)()) return {};
          const TT = {
              [ak.c]: "true"
            },
            oT = (0, Yk.d)();
          for (const {
              group: IT,
              dataAttr: iT
            }
            of ak.d) iT && !oT[IT] && (TT[iT] = "true");
          return TT
        }()
    }
    var pk = IT(8735),
      bk = IT(1872),
      yk = IT(8154),
      Nk = IT(8149),
      Pk = IT(1884);
    const dk = (0, iT.memo)((function() {
      var TT, oT, IT;
      const zT = (0, gT.g)("customButtons");
      (0, iT.useEffect)((() => zT ? (LT.gameBridge.send("bindCustomButtonKeys", zT.filter(yk.g).map((TT => {
        let {
          id: oT,
          keycode: IT
        } = TT;
        return {
          id: oT,
          keycode: IT
        }
      }))), () => {
        LT.gameBridge.send("bindCustomButtonKeys", [])
      }) : () => {}), [zT]);
      const kT = null !== (TT = null === zT || void 0 === zT ? void 0 : zT.filter(yk.g)) && void 0 !== TT ? TT : [],
        WT = (0, Nk.g)(),
        XT = null !== (oT = null === (IT = (0, Pk.c)()) || void 0 === IT ? void 0 : IT.hideButtonHints) && void 0 !== oT && oT,
        BT = "customButton" !== (null === WT || void 0 === WT ? void 0 : WT.kind) || XT ? null : WT.id,
        ST = kT.length > 0,
        DT = (0, iT.useRef)(null);
      return (0, iT.useLayoutEffect)((() => {
        if (!ST) return () => {};
        const TT = DT.current,
          oT = TT.closest(".InGameUi"),
          IT = () => {
            oT.style.setProperty("--custom-buttons-top", `${TT.offsetTop}px`)
          };
        IT();
        const iT = new ResizeObserver(IT);
        return iT.observe(TT), iT.observe(TT.parentElement), () => {
          iT.disconnect(), oT.style.removeProperty("--custom-buttons-top")
        }
      }), [ST]), (0, FT.jsx)("div", {
        ref: DT,
        className: "" + ((0, xz.isMobile)() ? "CustomIconsMobile" : "CustomIcons"),
        children: kT.map((TT => {
          var oT, IT;
          return (0, FT.jsx)(Vk, {
            button: TT,
            padGlyph: TT.id === BT && null !== (oT = null === (IT = (0, ZT.d)()) || void 0 === IT ? void 0 : IT.getBoundButton("actionButton")) && void 0 !== oT ? oT : null
          }, TT.id)
        }))
      })
    }));

    function Vk(TT) {
      let {
        button: oT,
        padGlyph: IT
      } = TT;
      const zT = (0, iT.useRef)(null),
        kT = () => {
          null !== zT.current && (zT.current = null, LT.gameBridge.send("pressCustomButton", {
            id: oT.id,
            down: !1
          }))
        };
      (0, iT.useEffect)((() => kT), []);
      const WT = so(kT, {
          pressesOnPointerDown: !0
        }),
        XT = TT => {
          zT.current === TT.pointerId && kT()
        };
      return (0, FT.jsxs)("div", {
        className: "CustomIcon",
        ...WT,
        onLostPointerCapture: XT,
        children: [(0, FT.jsx)(bk.c, {
          icon: oT.icon,
          keyboardHint: (0, yk.e)(oT.keycode),
          padGlyph: IT,
          onPointerDown: TT => {
            try {
              TT.currentTarget.setPointerCapture(TT.pointerId)
            } catch {
              return
            }
            null === zT.current && LT.gameBridge.send("pressCustomButton", {
              id: oT.id,
              down: !0
            }), zT.current = TT.pointerId
          },
          onPointerUp: XT,
          onPointerCancel: XT,
          showTouchTutorialPubSubId: !1,
          showRedDotPubSubId: !1
        }), oT.description && (0, FT.jsx)("div", {
          className: "CustomIconDescription SmallTextBold",
          children: oT.description
        })]
      })
    }
    var TW = IT(2222),
      oW = IT(35570),
      IW = IT(250);
    const iW = {
      frame: TT => {
        const oT = requestAnimationFrame((() => {
          TT()
        }));
        return () => {
          cancelAnimationFrame(oT)
        }
      },
      afterFrame: TT => {
        const oT = setTimeout(TT, 0);
        return () => {
          clearTimeout(oT)
        }
      }
    };
    class zW {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IW.b,
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iW;
        this.idle = TT, this.frames = oT, this.waiting = [], this.cancelIdle = null, this.cancelFrame = null, this.cancelAfterFrame = null, this.starvedFrames = 0, this.shown = !1
      }
      request(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.shown ? (TT(), () => {}) : (oT ? this.waiting.unshift(TT) : this.waiting.push(TT), this.schedule(), () => {
          const oT = this.waiting.indexOf(TT);
          oT >= 0 && (this.waiting.splice(oT, 1), this.settle())
        })
      }
      show() {
        for (this.shown = !0; this.waiting.length > 0;) this.mountNext()
      }
      schedule() {
        0 !== this.waiting.length && (this.cancelIdle ??= this.idle((TT => {
          for (this.cancelIdle = null; this.waiting.length > 0 && TT.timeRemaining() >= 8;) this.mountNext();
          this.schedule()
        })), this.cancelFrame ??= this.frames.frame((() => {
          this.cancelFrame = null, this.starvedFrames++, this.starvedFrames >= 4 && (this.cancelAfterFrame ??= this.frames.afterFrame((() => {
            this.cancelAfterFrame = null, this.mountNext(), this.schedule()
          }))), this.schedule()
        })))
      }
      mountNext() {
        this.starvedFrames = 0;
        const TT = this.waiting.shift();
        try {
          TT()
        } finally {
          this.settle()
        }
      }
      settle() {
        0 === this.waiting.length && this.stop()
      }
      stop() {
        var TT, oT, IT;
        null === (TT = this.cancelIdle) || void 0 === TT || TT.call(this), this.cancelIdle = null, null === (oT = this.cancelFrame) || void 0 === oT || oT.call(this), this.cancelFrame = null, null === (IT = this.cancelAfterFrame) || void 0 === IT || IT.call(this), this.cancelAfterFrame = null
      }
    }
    const kW = (0, iT.createContext)(null);

    function WW(TT) {
      let {
        children: oT,
        first: IT = !1
      } = TT;
      const zT = (0, iT.useContext)(kW),
        [kT, WT] = (0, iT.useState)(null === zT);
      return (0, iT.useEffect)((() => {
        if (!kT && null !== zT) return zT.request((() => {
          WT(!0)
        }), IT)
      }), [IT, kT, zT]), kT ? (0, iT.createElement)(iT.Fragment, null, oT) : null
    }
    const XW = (0, iT.memo)((function(TT) {
        let {
          shown: oT
        } = TT;
        const [IT] = (0, iT.useState)((() => new cT.g(oT))), [zT] = (0, iT.useState)((() => oT ? null : new zW));
        return (0, iT.useLayoutEffect)((() => {
          oT && (null === zT || void 0 === zT || zT.show(), IT.show())
        }), [oT, IT, zT]), (0, FT.jsx)(cT.e.Provider, {
          value: IT,
          children: (0, FT.jsx)(kW.Provider, {
            value: zT,
            children: (0, FT.jsx)(BW, {})
          })
        })
      })),
      BW = (0, iT.memo)((function() {
        const {
          isUiHidden: TT,
          isUiHiddenByCamera: oT,
          worldPanelHud: IT,
          isTouchScreen: zT
        } = (0, RT.k)(["isUiHidden", "isUiHiddenByCamera", "worldPanelHud", "isTouchScreen"]), WT = (0, bi.c)(), XT = Gk(), BT = (0, cT.o)(), ST = (0, iT.useRef)(null), DT = (0, gT.g)("showKillfeed");
        return function() {
            const TT = (0, cT.o)();
            (0, iT.useEffect)((() => TT.whenShown(KT)), [TT])
          }(),
          function() {
            const TT = (0, gT.g)("inventoryColourOverride");
            (0, iT.useEffect)((() => {
              if (!TT) return;
              const {
                panel: oT,
                slot: IT,
                slotSelected: iT,
                slotUnavailable: zT
              } = sT(TT), kT = document.documentElement.style;
              return kT.setProperty("--InventoryPanelColour", oT), kT.setProperty("--InventorySlotColour", IT), kT.setProperty("--InventorySlotSelectedColour", iT), kT.setProperty("--InventorySlotUnavailableColour", zT), () => {
                kT.removeProperty("--InventoryPanelColour"), kT.removeProperty("--InventorySlotColour"), kT.removeProperty("--InventorySlotSelectedColour"), kT.removeProperty("--InventorySlotUnavailableColour")
              }
            }), [TT])
          }(), (0, iT.useLayoutEffect)((() => BT.whenShown((() => {
            var TT;
            null === (TT = ST.current) || void 0 === TT || TT.classList.remove("PreMounted")
          }))), [BT]), (0, FT.jsxs)(FT.Fragment, {
            children: [(0, FT.jsxs)("div", {
              ref: ST,
              className: kT()("InGameUi", {
                PreMounted: !BT.shown,
                Hidden: TT,
                HiddenByCamera: oT,
                HiddenByWorldPanel: null !== IT,
                WorldPanelTouchControl: "touchControls" === IT
              }),
              ...XT,
              children: [(0, FT.jsxs)(WW, {
                children: [(0, FT.jsx)(lI.c, {}), (0, FT.jsx)(bI, {})]
              }), (0, FT.jsx)(cT.k, {
                children: (0, FT.jsx)(yI, {})
              }), (0, FT.jsxs)(WW, {
                children: [(0, FT.jsx)(wz, {}), (0, FT.jsx)(fz, {}), zT && (0, FT.jsx)(jz, {})]
              }), (0, FT.jsxs)(WW, {
                children: [(0, FT.jsx)(rI, {}), (0, FT.jsx)(Bi.c, {}), (0, FT.jsx)(Ki, {})]
              }), (0, FT.jsx)(cT.k, {
                children: (0, FT.jsx)(ZI, {})
              }), (0, FT.jsxs)(WW, {
                children: [(0, FT.jsx)(uz.e, {}), (0, FT.jsx)(lk, {})]
              }), (0, FT.jsxs)(WW, {
                children: [(0, FT.jsx)(Uz.f, {}), (0, FT.jsx)(az.g, {})]
              }), (0, FT.jsx)(WW, {
                children: (0, FT.jsx)(gI.l, {})
              }), (0, FT.jsx)(WW, {
                children: (0, FT.jsx)(KW, {
                  showChat: WT
                })
              }), (0, FT.jsxs)(WW, {
                children: [(0, FT.jsx)(Qz, {}), (0, FT.jsx)(Rz, {})]
              }), (0, FT.jsxs)("div", {
                className: kT()("RightElements", {
                  RightElementsTouchscreen: zT
                }),
                "data-camera-keeper-host": "",
                children: [(0, FT.jsxs)("div", {
                  className: ei.k,
                  "data-holds-camera-keeper": "",
                  children: [(0, FT.jsxs)("div", {
                    className: "TopRightElementsLeft",
                    "data-holds-camera-keeper": "",
                    children: [(0, FT.jsx)(WW, {
                      children: (0, FT.jsx)(Fz.d, {})
                    }), (0, FT.jsxs)(WW, {
                      children: [(0, FT.jsx)(HT, {}), (0, FT.jsx)(vi.b, {})]
                    }), xz.featureFlags.useSocialFeatures && (0, FT.jsx)(cT.k, {
                      children: (0, FT.jsx)(Ei.c, {
                        placement: "inGame"
                      })
                    }), xz.featureFlags.useSocialFeatures && (0, FT.jsx)(cT.k, {
                      children: (0, FT.jsx)(Zi, {})
                    }), DT && (0, FT.jsx)(cT.k, {
                      children: (0, FT.jsx)(Xi, {})
                    }), (0, FT.jsx)(WW, {
                      children: (0, FT.jsx)(pk.b, {})
                    })]
                  }), xz.featureFlags.useSocialFeatures && (0, FT.jsx)("div", {
                    className: "TopRightElementsRight",
                    children: (0, FT.jsx)(WW, {
                      children: (0, FT.jsx)(gz.b, {})
                    })
                  })]
                }), (0, FT.jsxs)(WW, {
                  children: [(0, FT.jsx)(gI.d, {
                    placement: "topRight"
                  }), (0, FT.jsx)(MW, {})]
                })]
              }), (0, FT.jsx)("div", {
                className: "LeftCentre",
                children: (0, FT.jsx)(WW, {
                  children: (0, FT.jsx)(dk, {})
                })
              }), (0, FT.jsxs)("div", {
                className: "BottomCentre",
                "data-holds-camera-keeper": zT ? "" : void 0,
                children: [(0, FT.jsx)(cT.k, {
                  children: (0, FT.jsx)(jT, {})
                }), (0, FT.jsx)(WW, {
                  children: (0, FT.jsx)(SW, {})
                }), (0, FT.jsxs)("div", {
                  className: "BottomElements",
                  "data-holds-camera-keeper": zT ? "" : void 0,
                  children: [(0, FT.jsx)("div", {
                    className: kT()("BottomLeftElements", {
                      Touch: zT
                    }),
                    children: (0, FT.jsxs)(WW, {
                      children: [(0, FT.jsx)(ti, {}), !zT && (0, FT.jsx)(TW.e, {})]
                    })
                  }), (0, FT.jsx)(WW, {
                    children: (0, FT.jsx)(cW, {})
                  }), (0, FT.jsx)(WW, {
                    children: (0, FT.jsx)(ri, {
                      isTouchScreen: zT
                    })
                  })]
                })]
              }), (0, FT.jsx)("div", {
                className: "MiddleLeft"
              }), zT && (0, FT.jsx)(WW, {
                children: (0, FT.jsx)(Vo, {})
              }), (0, FT.jsx)("div", {
                className: "CameraFadeHost",
                ref: oW.l
              })]
            }), (0, FT.jsx)(cT.k, {
              children: (0, FT.jsx)(sz.d, {})
            }), (0, FT.jsx)(WW, {
              first: !0,
              children: (0, FT.jsx)(Gi.b, {})
            }), (0, FT.jsx)(cT.k, {
              children: (0, FT.jsx)(FW, {})
            })]
          })
      }));

    function FW() {
      return (0, iT.useEffect)((() => {
        const TT = setTimeout((() => {
          (0, hT.g)()
        }), 0);
        return () => {
          clearTimeout(TT), hT.h.rA(!1)
        }
      }), []), null
    }
    const SW = (0, iT.memo)((function() {
        const TT = (0, XT.i)("aimingOverlay", "none");
        (0, rT.e)();
        const oT = (0, gT.j)("middleTextUpper"),
          IT = (0, gT.j)("middleTextLower");
        return (0, FT.jsxs)("div", {
          className: "MiddleTextBottom",
          style: "sniper" === TT ? {
            visibility: "hidden"
          } : {},
          children: [(0, FT.jsx)(xW, {
            text: oT,
            className: "MiddleText MiddleTextUpper SmallTextBold",
            maxHeightFraction: DW
          }), (0, FT.jsx)(xW, {
            text: IT,
            className: "MiddleText",
            maxHeightFraction: LW
          })]
        })
      })),
      DW = .3,
      LW = .2;

    function xW(TT) {
      let {
        text: oT,
        className: IT,
        maxHeightFraction: zT
      } = TT;
      const kT = (0, iT.useRef)(null),
        WT = (0, iT.useRef)(null);
      return function(TT, oT, IT, zT) {
        (0, iT.useLayoutEffect)((() => {
          const iT = TT.current,
            zT = oT.current;
          if (!iT || !zT) return;
          let kT = -1,
            WT = -1;
          const XT = TT => (zT.style.setProperty("zoom", String(TT)), iT.getBoundingClientRect().height),
            BT = () => {
              const TT = document.documentElement.clientHeight * IT;
              let oT = 1;
              if (XT(1) > TT) {
                let IT = .5,
                  iT = 1;
                for (let oT = 0; oT < 6; oT++) {
                  const oT = (IT + iT) / 2;
                  XT(oT) <= TT ? IT = oT : iT = oT
                }
                oT = IT
              }
              WT = XT(oT), kT = iT.getBoundingClientRect().width
            };
          BT();
          let FT = 0;
          const ST = () => {
              cancelAnimationFrame(FT), FT = requestAnimationFrame(BT)
            },
            DT = new ResizeObserver((() => {
              const {
                width: TT,
                height: oT
              } = iT.getBoundingClientRect();
              TT === kT && oT === WT || ST()
            }));
          return DT.observe(iT), window.addEventListener("resize", ST), () => {
            DT.disconnect(), window.removeEventListener("resize", ST), cancelAnimationFrame(FT), zT.style.removeProperty("zoom")
          }
        }), [TT, oT, IT, zT])
      }(kT, WT, zT, oT.content), (0, FT.jsx)("div", {
        ref: kT,
        className: "MiddleTextFit",
        children: (0, FT.jsx)(Yz, {
          ref: WT,
          text: oT,
          className: IT
        })
      })
    }
    const cW = (0, iT.memo)((function() {
        const TT = (0, XT.i)("aimingOverlay", "none");
        (0, rT.e)();
        const oT = (0, gT.g)("useInventory");
        return (0, FT.jsxs)("div", {
          className: "BottomMiddleElements",
          style: "sniper" === TT ? {
            visibility: "hidden"
          } : {},
          children: [(0, FT.jsx)(ST, {}), (0, FT.jsx)(gI.d, {}), (0, FT.jsx)(hI, {}), (0, FT.jsx)(cT.k, {
            children: (0, FT.jsx)(rz, {})
          }), (0, FT.jsxs)("div", {
            className: "HotBarRow",
            children: [oT ? (0, FT.jsx)(qT.d, {}) : (0, FT.jsx)(qT.e, {}), (0, FT.jsx)(lT, {})]
          })]
        })
      })),
      KW = (0, iT.memo)((function(TT) {
        let {
          showChat: oT
        } = TT;
        const {
          t: IT
        } = (0, CT.t)(), {
          clientEscMenuOptions: zT,
          isTouchScreen: WT
        } = (0, RT.k)(["clientEscMenuOptions", "isTouchScreen"]);
        (0, rT.e)();
        const {
          userContext: XT,
          isUserContextUpdating: BT
        } = (0, MT.b)(), ST = (0, gT.g)("hideCoordinates"), LT = (0, gT.g)("customVariationTitle"), {
          requestedGameNameWithVariation: xT,
          gameNameWithVariation: cT,
          lobbyName: KT,
          shownLobbyName: hT
        } = (0, eT.f)("connectedGame"), wT = (0, DT.c)(xT, KT, !1), [mT, uT] = (0, iT.useState)(null), vT = (0, Dz.n)(cT || xT || ""), ET = LT || vT || "";
        (0, iT.useEffect)((() => {
          BT || Ci.e.getFavouriteLobbies(XT).then((TT => {
            console.log("Got favourite lobbies", TT), uT(TT)
          }))
        }), [BT, XT]);
        const fT = (0, iT.useRef)(null);
        return (0, iT.useLayoutEffect)((() => {
          const TT = fT.current,
            oT = document.documentElement,
            IT = new ResizeObserver((() => {
              oT.style.setProperty("--InGameHeaderRowsHeight", `${TT.offsetHeight}px`)
            }));
          return IT.observe(TT), () => {
            IT.disconnect(), oT.style.removeProperty("--InGameHeaderRowsHeight")
          }
        }), []), ui(fT), (0, FT.jsxs)(FT.Fragment, {
          children: [(0, FT.jsxs)("div", {
            className: kT()(ei.g, {
              Touchscreen: WT
            }),
            ref: fT,
            children: [(0, FT.jsxs)("div", {
              className: "InGameHeader",
              children: [(0, FT.jsxs)("div", {
                className: "InGameHeaderLogo",
                onMouseDown: TT => {
                  TT.stopPropagation(), TT.preventDefault()
                },
                onClick: () => {
                  RT.c.set({
                    openEverythingMenuName: AT.q.SETTINGS
                  })
                },
                children: [(0, FT.jsx)(Sz.d, {
                  showFace: !0,
                  loading: !1
                }), "bloxd.io"]
              }), (0, FT.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, FT.jsxs)("div", {
                className: "InGameHeaderGameName",
                children: [null === wT && (0, FT.jsx)(Sz.d, {}), null !== wT && (0, FT.jsxs)(FT.Fragment, {
                  children: [wT, ET && ` ${ET}`]
                })]
              }), (0, FT.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, FT.jsx)("div", {
                className: "InGameHeaderLobbyName",
                children: hT
              }), (0, Lz.H)(KT) && (0, FT.jsx)(QT.e, {
                tooltipInner: (0, FT.jsx)("div", {
                  children: IT(null !== mT && mT.includes(KT) ? "customLobby:removeFromFavourites" : "customLobby:addToFavourites")
                }),
                children: (0, FT.jsx)("div", {
                  children: (0, FT.jsx)(vI.t, {
                    isLiked: null !== mT && mT.includes(KT),
                    onClick: () => {
                      try {
                        if (!mT) return;
                        mT.includes(KT) ? (Ci.e.unfavouriteLobby(XT, KT).catch((TT => {
                          console.error("Failed to favourite lobby", TT)
                        })), uT(mT.filter((TT => TT !== KT)))) : (Ci.e.favouriteLobby(XT, KT).catch((TT => {
                          console.error("Failed to favourite lobby", TT)
                        })), uT([...mT, KT]))
                      } catch (TT) {
                        console.error("Failed to like lobby", TT)
                      }
                    },
                    isLoading: null === mT
                  })
                })
              }), (0, FT.jsx)(qz, {})]
            }), (0, FT.jsx)(zz, {
              show: zT.showFPS
            }), !ST && zT.showCoordinates && (0, FT.jsx)(Xz, {}), !ST && zT.showChunkCoordinates && (0, FT.jsx)(Bz, {}), (0, FT.jsx)(Oz, {})]
          }), (0, FT.jsx)("div", {
            className: "TopLeftElements",
            "data-holds-camera-keeper": "",
            children: (0, FT.jsx)("div", {
              className: "InGameHeaderAndChat",
              "data-holds-camera-keeper": "",
              children: oT && (0, FT.jsx)(pT.c, {})
            })
          })]
        })
      })),
      MW = (0, iT.memo)((function() {
        (0, rT.e)();
        const TT = (0, gT.j)("RightInfoText"),
          [oT, IT] = (0, iT.useState)(null);
        return (0, co.f)(oT, ".RightElements"), TT.hasText ? (0, FT.jsx)("div", {
          className: "RightInfoDivContainer",
          children: (0, FT.jsx)(Yz, {
            ref: IT,
            text: TT,
            className: "RightInfoDiv",
            children: (0, FT.jsx)("div", {
              className: "RightInfoDivInner",
              children: (0, FT.jsx)(BT.c, {
                text: TT.content
              })
            })
          })
        }) : null
      }))
  },
  4320: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => XT
    });
    var iT = IT(46),
      zT = IT(306),
      kT = IT(1747),
      WT = IT(1083);

    function XT(TT) {
      let {
        text: oT
      } = TT;
      const IT = [];
      let XT = "";
      return (0, zT.ac)(oT).forEach(((TT, oT) => {
        if ("string" === typeof TT || !(0, kT.g)(TT.icon)) return void(XT += "string" === typeof TT ? TT : TT.icon);
        const zT = Math.max(0, XT.trimEnd().search(/\S{1,12}$/));
        IT.push((0, WT.jsxs)(iT.Fragment, {
          children: [XT.slice(0, zT), (0, WT.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [XT.slice(zT), (0, WT.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": TT.icon,
              children: (0, WT.jsx)(kT.c, {
                itemName: TT.icon,
                amount: 0
              })
            })]
          })]
        }, oT)), XT = ""
      })), IT.push(XT), (0, WT.jsx)(WT.Fragment, {
        children: IT
      })
    }
  },
  35531: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => LT,
      h: () => ST,
      k: () => DT
    });
    var iT = IT(46),
      zT = IT(1042),
      kT = IT.n(zT),
      WT = IT(1747),
      XT = IT(1083);
    const BT = 350;
    let FT = 0;

    function ST() {
      return FT += 1, FT
    }

    function DT(TT, oT) {
      let IT = 0;
      for (const iT of TT) "ingredient" !== iT.kind && iT.XS === oT && (IT += iT.amount);
      return IT > 0 ? {
        idx: oT,
        amount: IT
      } : null
    }

    function LT(TT) {
      var oT, IT;
      let {
        anim: zT,
        onComplete: FT
      } = TT;
      const ST = null !== (oT = zT.delayMs) && void 0 !== oT ? oT : 0,
        DT = null !== (IT = zT.durationMs) && void 0 !== IT ? IT : BT,
        [LT, xT] = (0, iT.useState)(zT.from),
        [cT, KT] = (0, iT.useState)(0 === ST),
        [MT, rT] = (0, iT.useState)(!1),
        AT = (0, iT.useRef)(!1);
      return (0, iT.useEffect)((() => {
        let TT, oT;
        const IT = () => {
            AT.current = !0, KT(!0), TT = requestAnimationFrame((() => {
              oT = requestAnimationFrame((() => {
                xT({
                  x: zT.to.x,
                  y: zT.to.y
                }), rT(!0)
              }))
            }))
          },
          iT = AT.current ? 0 : ST;
        let kT;
        iT > 0 ? kT = setTimeout(IT, iT) : IT();
        const WT = setTimeout((() => {
          FT(zT.id)
        }), iT + DT + 50);
        return () => {
          clearTimeout(kT), cancelAnimationFrame(TT), cancelAnimationFrame(oT), clearTimeout(WT)
        }
      }), [zT.id, zT.to.x, zT.to.y, FT, ST, DT]), (0, XT.jsx)("div", {
        className: kT()("CraftItemFlyAnimation", {
          Ingredient: "ingredient" === zT.kind,
          Waiting: !cT,
          Arrived: MT
        }),
        style: {
          left: LT.x,
          top: LT.y,
          "--fly-duration": `${DT}ms`
        },
        children: (0, XT.jsx)(WT.c, {
          itemName: zT.itemName,
          amount: zT.amount
        })
      })
    }
  },
  35520: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => YT,
      e: () => HT
    });
    var iT = IT(46),
      zT = IT(2610),
      kT = IT(6062),
      WT = IT(1872),
      XT = IT(2227),
      BT = IT(8260),
      FT = IT(314),
      ST = IT(16),
      DT = IT(1403),
      LT = IT(26),
      xT = IT(1042),
      cT = IT.n(xT),
      KT = IT(306),
      MT = IT(35523),
      rT = IT(1729),
      AT = IT(1784),
      gT = IT(8114),
      hT = IT(1083);

    function wT(TT) {
      var oT, IT;
      let {
        slotIdx: kT
      } = TT;
      const WT = (0, AT.d)("hotbar", (TT => {
          var oT;
          return null !== (oT = TT.items[kT]) && void 0 !== oT ? oT : null
        })),
        BT = (0, AT.d)("hotbar", (TT => TT.ammo)),
        [ST, DT] = (0, iT.useState)(!1),
        LT = (0, iT.useRef)(null),
        [xT, KT] = (0, iT.useState)(null),
        [MT, wT] = (0, iT.useState)(null),
        mT = (0, XT.g)("maxAuraLevel"),
        eT = (0, zT.c)(),
        RT = (0, iT.useCallback)((() => {
          if (clearTimeout(LT.current), WT) {
            var TT, oT, IT, iT;
            const BT = WT.displayName,
              ST = [],
              DT = Array.isArray(BT) ? BT : [BT],
              LT = {
                fontStyle: null !== (TT = WT.attributes.customAttributes) && void 0 !== TT && TT.author ? "italic" : "normal"
              };
            for (const TT of DT) TT.str ? ST.push(TT) : ST.push({
              str: TT,
              style: LT
            });
            if (null !== (oT = WT.attributes.customAttributes) && void 0 !== oT && oT.enchantments) {
              ST.push(" ");
              const TT = Object.entries(WT.attributes.customAttributes.enchantments).sort(((TT, oT) => oT[1] - TT[1])),
                oT = WT.attributes.customAttributes.enchantmentData;
              for (const [IT, iT] of TT) {
                var zT, kT;
                const TT = null !== (zT = null === oT || void 0 === oT || null === (kT = oT[IT]) || void 0 === kT ? void 0 : kT.icon) && void 0 !== zT ? zT : `${IT} Enchantment`;
                var XT;
                if (iT < 4)
                  for (let oT = 0; oT < iT; oT++) ST.push({
                    icon: TT,
                    style: {
                      fontSize: "1.5em"
                    }
                  });
                else ST.push({
                  icon: TT,
                  style: {
                    fontSize: "1.5em"
                  }
                }), ST.push(null !== (XT = (0, FT.U)(iT)) && void 0 !== XT ? XT : iT.toString())
              }
            }
            KT(ST), wT(null !== (IT = null === (iT = WT.attributes.customAttributes) || void 0 === iT ? void 0 : iT.enchantmentTier) && void 0 !== IT ? IT : null)
          } else KT(null), wT(null);
          DT(!0), eT();
          const BT = null === WT || void 0 === WT ? void 0 : WT.attributes.customAttributes;
          void 0 === (null === BT || void 0 === BT ? void 0 : BT.shotsLeft) && (LT.current = setTimeout((() => {
            DT(!1)
          }), 2e3))
        }), [null === WT || void 0 === WT ? void 0 : WT.name, kT, null === WT || void 0 === WT ? void 0 : WT.instance, null === WT || void 0 === WT ? void 0 : WT.displayName]);
      (0, iT.useEffect)((() => (RT(), () => {
        clearTimeout(LT.current), DT(!1)
      })), [null === WT || void 0 === WT ? void 0 : WT.name, kT, null === WT || void 0 === WT ? void 0 : WT.instance, RT]);
      const uT = null === WT || void 0 === WT || null === (oT = WT.attributes.customAttributes) || void 0 === oT ? void 0 : oT.shotsLeft,
        vT = void 0 === uT ? null : (0, hT.jsx)("div", {
          className: "SelectedItemShotsLeft",
          children: `${uT}|${WT.requiresAmmo?`${BT}x${WT.clipSize}`:WT.clipSize}`
        }),
        ET = (0, gT.i)();
      return (0, hT.jsx)(hT.Fragment, {
        children: ST && WT && !ET.showing ? (0, hT.jsxs)("div", {
          className: cT()("SelectedItemName SmallTextBold", {
            NoAuraBar: 0 === mT,
            Enchanted: null !== MT
          }),
          style: {
            "--enchantmentColour": null !== (IT = FT.lb[MT]) && void 0 !== IT ? IT : FT.lb.None,
            "--duration": MT ? (0, FT.eb)(MT) + "s" : void 0
          },
          children: [MT && (0, hT.jsxs)("div", {
            className: "SelectedItemNameGradient",
            children: [(0, hT.jsx)(rT.c, {
              text: xT
            }), vT]
          }), (0, hT.jsxs)("div", {
            className: "SelectedItemNameNormal",
            children: [(0, hT.jsx)(rT.c, {
              text: xT
            }), vT]
          })]
        }) : null
      })
    }
    var mT = IT(35531),
      eT = IT(12),
      RT = IT(1751),
      uT = IT(618),
      vT = IT(2231),
      ET = IT(2956),
      fT = IT(2961);
    var CT = IT(1896),
      jT = IT(1102),
      JT = IT(3932);

    function UT() {
      return parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--touch-hotbar-ends-spare")) >= 0
    }
    var aT = IT(1420);
    const YT = (0, iT.memo)((function() {
      const [TT, oT] = (0, iT.useState)(0), IT = (0, XT.g)("useFullInventory"), WT = (0, XT.g)("highlightedHotbarSlots"), {
        isTouchScreen: BT,
        openInGameMenuName: FT
      } = (0, eT.k)(["isTouchScreen", "openInGameMenuName"]), LT = null !== FT && "inventory" !== FT, xT = (0, AT.f)("fullInventory") && "inventory" === FT, KT = function() {
        const TT = (0, CT.e)(((TT, oT) => `${TT}:${(0,jT.e)(TT,oT)?"portrait":"landscape"}`)),
          [oT, IT] = (0, iT.useState)(UT);
        return (0, iT.useLayoutEffect)((() => {
          IT(UT())
        }), [TT]), (0, DT.g)(JT.g, (() => {
          IT(UT())
        })), oT
      }(), rT = BT && !KT;
      ! function(TT, oT, IT) {
        (0, iT.useLayoutEffect)((() => {
          const iT = document.documentElement.classList;
          return TT && (iT.add("TouchHotbar"), iT.toggle("TouchHotbarKeysAbove", oT), iT.toggle("TouchHotbarHasBag", IT)), (0, ET.g)(), ST.h.XM(fT.b), () => {
            iT.remove("TouchHotbar", "TouchHotbarKeysAbove", "TouchHotbarHasBag"), (0, ET.g)(), ST.h.XM(fT.b)
          }
        }), [TT, oT, IT])
      }(BT, rT, IT);
      const [gT, vT] = (0, kT.c)("changedHotbarUsingNumkeys", !0), aT = (0, AT.d)("hotbar", (TT => TT.selectedSlot)), YT = null !== aT && void 0 !== aT ? aT : TT, nT = (0, zT.c)(), qT = (0, iT.useRef)(null), lT = (0, DT.i)("pointerLockUpdate", Boolean(document.pointerLockElement));
      (0, DT.g)("inventoryDraggedItemUpdated", (TT => {
        qT.current = TT, nT()
      })), (0, AT.c)("hotbarScrolled", (TT => {
        null === aT && tT(TT)
      })), (0, AT.c)("hotbarSlotRequested", (TT => {
        sT(TT), vT(!1)
      })), (0, AT.c)("numberKeyPressed", (() => {
        vT(!1)
      })), (0, AT.c)("hotbarDropRequested", (TT => {
        const oT = RT.gameBridge.latest("hotbar").items[YT];
        if (oT) {
          var IT;
          const iT = TT && null !== (IT = oT.amount) && void 0 !== IT ? IT : 1;
          RT.gameBridge.send("removeInventoryItem", {
            slot: YT,
            amount: iT,
            drop: !0
          })
        }
      }));
      const sT = TT => {
          RT.gameBridge.send("selectHotbarSlot", TT), oT(TT)
        },
        tT = TT => {
          sT((YT + TT + uT.k) % uT.k)
        };
      let GT, pT = null,
        bT = null,
        yT = TT => TT => {},
        NT = TT => oT => {
          sT(TT)
        },
        PT = TT => TT => {},
        dT = [];
      if (xT) {
        var VT;
        const TT = qT.current;
        if (null === TT || void 0 === TT || !TT.setHovered) return (0, hT.jsx)("div", {
          className: cT()("HotBarContainer", {
            Touch: BT,
            KeysAbove: rT
          }),
          children: (0, hT.jsx)("div", {
            className: "HotBar"
          })
        });
        pT = TT.draggedInfo, bT = TT.specialItemInfo, yT = TT.setHovered, NT = TT.pointerDown, PT = TT.pointerUp, GT = TT.variation, dT = null !== (VT = TT.craftFlyAnims) && void 0 !== VT ? VT : []
      }
      return (0, hT.jsxs)("div", {
        className: cT()("HotBarContainer", {
          Touch: BT,
          PopupOpen: BT && LT,
          KeysAbove: rT
        }),
        children: [(0, hT.jsxs)("div", {
          className: cT()("HotBar", {
            HoverDisabled: lT
          }),
          children: [BT && (0, hT.jsxs)(hT.Fragment, {
            children: [(0, hT.jsx)(OT, {
              useFullInventory: IT,
              inventoryOpen: xT
            }), (0, hT.jsx)(QT, {
              direction: "Previous",
              onPress: () => {
                tT(-1)
              }
            })]
          }), !BT && (0, hT.jsxs)(hT.Fragment, {
            children: [(0, hT.jsx)(HT, {}), (0, hT.jsx)("div", {
              className: "HotBarFiller"
            })]
          }), (0, hT.jsx)("div", {
            className: "HotBarGameItemsContainer",
            children: new Array(10).fill(0).map(((TT, oT) => (0, hT.jsx)(MT.d, {
              idx: oT,
              draggedInfo: pT,
              specialItemInfo: bT,
              craftFlyHoldbackInfo: (0, mT.k)(dT, oT),
              setHovered: yT(oT),
              pointerDown: NT(oT),
              pointerUp: PT(oT),
              variation: GT,
              isSelected: oT === YT,
              hotbarHighlighted: !0 === (null === WT || void 0 === WT ? void 0 : WT.includes(oT)),
              hoverDisabled: lT,
              showNumber: gT && !BT
            }, oT)))
          }), BT && (0, hT.jsx)(QT, {
            direction: "Next",
            onPress: () => {
              tT(1)
            }
          }), !BT && (0, hT.jsxs)(hT.Fragment, {
            children: [(0, hT.jsx)("div", {
              className: "HotBarFiller"
            }), (0, hT.jsx)("div", {
              className: cT()("HotBarItem ButtonHotBarItem", {
                HiddenButtonHotBarItem: !IT
              }),
              onPointerDown: () => {
                ST.h.XM("toggleMenu", "inventory")
              },
              children: (0, hT.jsx)(ZT, {})
            })]
          })]
        }), (0, hT.jsx)(wT, {
          slotIdx: YT
        })]
      })
    }));

    function QT(TT) {
      let {
        direction: oT,
        onPress: IT
      } = TT;
      return (0, hT.jsx)("div", {
        className: cT()("HotBarArrow", oT),
        ...aT.d,
        children: (0, hT.jsx)(WT.c, {
          icon: "Previous" === oT ? "caret-left" : "caret-right",
          touchPressOn: "pointerdown",
          onClick: IT
        })
      })
    }
    const OT = (0, iT.memo)((function(TT) {
        let {
          useFullInventory: oT,
          inventoryOpen: IT
        } = TT;
        const zT = (0, XT.g)("maxAuraLevel"),
          kT = (0, iT.useRef)(null);
        return function(TT, oT, IT) {
          (0, iT.useLayoutEffect)((() => (document.documentElement.classList.toggle("TouchHotbarHasShop", oT), () => {
            document.documentElement.classList.remove("TouchHotbarHasShop")
          })), [oT]), (0, iT.useLayoutEffect)((() => {
            const oT = TT.current.closest(".BottomMiddleElements");
            return oT.classList.toggle("TouchInventoryOpen", IT), () => {
              oT.classList.remove("TouchInventoryOpen")
            }
          }), [TT, IT])
        }(kT, (0, BT.d)(), IT), (0, hT.jsxs)("div", {
          ref: kT,
          className: cT()("TouchInventoryKeys", {
            NoAuraBar: 0 === zT,
            InventoryOpen: IT
          }),
          children: [(0, hT.jsx)(HT, {
            touchKey: !0
          }), (0, hT.jsx)("div", {
            className: cT()("TouchInventoryKey BagKey", {
              Hidden: !oT
            }),
            ...aT.d,
            children: (0, hT.jsx)(ZT, {
              touchKey: !0
            })
          })]
        })
      })),
      HT = (0, iT.memo)((function(TT) {
        let {
          touchKey: oT = !1
        } = TT;
        const IT = (0, BT.d)();
        return (0, hT.jsx)("div", {
          className: oT ? cT()("TouchInventoryKey ShopKey", {
            Hidden: !IT
          }) : cT()("HotBarItem ButtonHotBarItem", {
            HiddenButtonHotBarItem: !IT
          }),
          ...oT ? aT.d : {},
          children: (0, hT.jsx)(WT.c, {
            icon: (0, FT.Ub)(),
            noaAction: "OpenShop",
            touchPressOn: "pointerdown",
            onClick: () => {
              IT && eT.c.set({
                openEverythingMenuName: KT.q.SHOP
              })
            },
            showTouchTutorialPubSubId: "showShopTouchTutorial",
            showRedDotPubSubId: "showShopIconRedDot",
            touchIconPosition: "topleft"
          })
        })
      }));

    function nT(TT) {
      let {
        player: oT
      } = TT;
      return oT.some((TT => null !== TT && FT.Ic.includes(TT.name)))
    }

    function qT(TT) {
      TT.creative || LT.e.getItem("LogInInventoryRedDotTutorialComplete") || (nT(TT) ? (ST.h.XM("RedDotOpenInventoryIcon", !0), ST.h.XM("TouchTutorialOpenInventoryIcon", !0)) : (ST.h.XM("RedDotOpenInventoryIcon", !1), ST.h.XM("TouchTutorialOpenInventoryIcon", !1)))
    }
    const ZT = (0, iT.memo)((function(TT) {
      let {
        touchKey: oT = !1
      } = TT;
      const {
        backpackPointerRequested: IT
      } = (0, eT.k)(["backpackPointerRequested"]);
      (0, iT.useEffect)((() => {
        qT(RT.gameBridge.latest("inventory"))
      }), []), (0, AT.c)("inventory", qT);
      const zT = (0, vT.o)();
      return (0, DT.g)("toggleMenu", (TT => {
        zT.shown && (null !== TT && void 0 !== TT && TT.startsWith("inventory") && nT(RT.gameBridge.latest("inventory")) ? (LT.e.setItem("LogInInventoryRedDotTutorialComplete", !0), ST.h.XM("RedDotOpenInventoryIcon", !1), ST.h.XM("TouchTutorialOpenInventoryIcon", !1)) : "shop" === TT && ST.h.XM("showShopTouchTutorial", !1))
      })), oT ? (0, hT.jsx)(WT.c, {
        icon: "backpack",
        noaAction: "OpenInventory",
        touchPressOn: "pointerdown",
        onClick: () => {
          ST.h.XM("toggleMenu", "inventory")
        },
        showRedDotPubSubId: "RedDotOpenInventoryIcon",
        showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
        touchTutorialRequested: IT,
        touchIconPosition: "topleft"
      }) : (0, hT.jsx)("div", {
        className: "HotBarButton",
        onPointerDown: () => {
          ST.h.XM("toggleMenu", "inventory")
        },
        children: (0, hT.jsx)(WT.c, {
          icon: "backpack",
          noaAction: "OpenInventory",
          onPointerDown: TT => {
            ST.h.XM("toggleMenu", "inventory"), TT.stopPropagation()
          },
          showRedDotPubSubId: "RedDotOpenInventoryIcon",
          showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
          touchTutorialRequested: IT,
          touchIconPosition: "topleft"
        })
      })
    }))
  },
  35523: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => MT,
      h: () => cT
    });
    var iT = IT(46),
      zT = IT(1042),
      kT = IT.n(zT),
      WT = IT(1749),
      XT = IT(1747),
      BT = IT(1751),
      FT = IT(1784),
      ST = IT(35527),
      DT = IT(8758),
      LT = IT(1357),
      xT = IT(1083);
    const cT = (TT, oT, IT) => {
      let iT = oT,
        zT = !1;
      for (const kT of IT)(null === kT || void 0 === kT ? void 0 : kT.idx) === TT && (zT = !0, iT > 0 && (iT -= kT.amount));
      return {
        displayedAmt: iT,
        shown: !zT || iT > 0
      }
    };
    const KT = TT => {
        let {
          idx: oT
        } = TT;
        return (0, LT.p)() ? null : (0, xT.jsx)("div", {
          className: "HotbarItemNumber SmallTextBold",
          children: oT < 9 ? oT + 1 : 0
        })
      },
      MT = (0, iT.memo)((function(TT) {
        var oT, IT, iT;
        let {
          idx: zT,
          setHovered: LT,
          pointerDown: MT,
          pointerUp: rT,
          draggedInfo: AT,
          specialItemInfo: gT,
          craftFlyHoldbackInfo: hT,
          defaultIconB64: wT = null,
          variation: mT,
          isSelected: eT = !1,
          hotbarHighlighted: RT = !1,
          hoverDisabled: uT = !1,
          showNumber: vT = !1,
          showNewDot: ET = !1
        } = TT;
        const fT = (0, FT.d)("inventory", (TT => zT === ST.g ? null : (0, DT.h)(TT, zT)));
        let CT, jT, JT, UT;
        if (zT === ST.g) gT && (CT = gT.name, JT = gT.amount, UT = gT.attributes);
        else if (fT) {
          var aT;
          CT = fT.name, jT = fT.icon, JT = null !== (aT = fT.amount) && void 0 !== aT ? aT : 0, UT = fT.attributes
        }
        const YT = null === (oT = UT) || void 0 === oT || null === (IT = oT.customAttributes) || void 0 === IT ? void 0 : IT.enchantmentTier,
          QT = (0, WT.i)(UT),
          {
            displayedAmt: OT,
            shown: HT
          } = cT(zT, JT, [AT, gT, hT]),
          nT = CT && HT,
          qT = void 0 !== mT && function(TT, oT) {
            const {
              enchantable: IT,
              salvageable: iT
            } = BT.gameBridge.latest("stationItems");
            return "Enchanting Table" === TT ? !0 === IT[oT] : "Salvaging Table" === TT && !0 === iT[oT]
          }(mT, CT);
        return (0, xT.jsxs)("div", {
          className: kT()("InvenItem", {
            Highlighted: nT && qT,
            Selected: eT,
            HotbarHighlighted: RT,
            HoverDisabled: uT
          }),
          onPointerEnter: () => {
            null === LT || void 0 === LT || LT(!0)
          },
          onPointerLeave: () => {
            null === LT || void 0 === LT || LT(!1)
          },
          onPointerDown: MT,
          onPointerUp: rT,
          "data-inven-idx": zT,
          children: [nT && (0, xT.jsx)(XT.c, {
            itemName: null !== (iT = jT) && void 0 !== iT ? iT : CT,
            amount: OT,
            enchantmentTier: YT,
            bar: QT
          }), nT && ET && (0, xT.jsx)("div", {
            className: "InvenItemNewDot"
          }), vT && (0, xT.jsx)(KT, {
            idx: zT
          }), wT && !nT && (0, xT.jsx)("div", {
            className: "InvenItemUnfilled",
            style: {
              backgroundImage: `url(${wT})`
            }
          })]
        })
      }))
  },
  8745: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => kT
    });
    var iT = IT(314),
      zT = IT(8754);

    function kT(TT, oT, IT) {
      const kT = Object.entries(oT).sort(((TT, oT) => oT[1] - TT[1])),
        WT = (0, iT.ob)(TT);
      WT.push(TT ? "\n\n" : "\n");
      for (const [zT, cT] of kT) {
        var XT, BT, FT;
        const TT = null !== (XT = null === IT || void 0 === IT || null === (BT = IT[zT]) || void 0 === BT ? void 0 : BT.icon) && void 0 !== XT ? XT : `${zT} Enchantment`;
        WT.push({
          icon: TT,
          style: {
            fontSize: "1.5rem"
          }
        }), WT.push({
          str: `${zT} ${null!==(FT=(0,iT.U)(cT))&&void 0!==FT?FT:cT}\n`
        })
      }
      WT.push({
        str: "\n"
      });
      for (const [iT, cT] of kT) {
        var ST, DT, LT, xT;
        const TT = null !== (ST = null === IT || void 0 === IT || null === (DT = IT[iT]) || void 0 === DT ? void 0 : DT.icon) && void 0 !== ST ? ST : `${iT} Enchantment`,
          oT = null !== (LT = null === IT || void 0 === IT || null === (xT = IT[iT]) || void 0 === xT ? void 0 : xT.description) && void 0 !== LT ? LT : (0, zT.k)(iT);
        WT.push({
          icon: TT,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), WT.push({
          str: oT,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), WT.push({
          str: "\n"
        })
      }
      return WT
    }
  },
  35527: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => iT,
      g: () => zT
    });
    const iT = -1,
      zT = -2
  },
  8758: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => FT,
      d: () => AT,
      g: () => MT,
      h: () => BT,
      i: () => rT,
      k: () => ST,
      o: () => LT,
      q: () => KT,
      r: () => DT
    });
    var iT = IT(306),
      zT = IT(618),
      kT = IT(314),
      WT = IT(3800),
      XT = IT(8745);

    function BT(TT, oT) {
      var IT;
      let {
        player: iT,
        chestOrCreative: zT
      } = TT;
      var kT;
      return oT < iT.length ? null !== (kT = iT[oT]) && void 0 !== kT ? kT : null : null !== (IT = zT[oT - iT.length]) && void 0 !== IT ? IT : null
    }

    function FT(TT) {
      var oT;
      return null !== (oT = TT.amount) && void 0 !== oT ? oT : 0
    }

    function ST(TT) {
      return 0 === TT.button || void 0 === TT.button
    }

    function DT(TT) {
      return !!TT.shiftKey
    }

    function LT(TT) {
      return "touches" in TT || "touch" === TT.pointerType || "pen" === TT.pointerType
    }
    const xT = new Set,
      cT = 50;

    function KT(TT, oT) {
      var IT;
      const iT = null === (IT = TT[oT]) || void 0 === IT ? void 0 : IT.displayName;
      return (0, zT.K)(iT) ? "string" !== typeof oT ? "" : (!xT.has(oT) && xT.size < cT && (xT.add(oT), console.warn(`No item called "${oT}", so its hover shows the name as given`)), oT) : iT
    }

    function MT(TT, oT, IT) {
      var BT, FT, ST, DT, LT, xT, cT, MT, rT, AT, gT, hT, wT, mT;
      const eT = TT.attributes,
        RT = null !== (BT = null === (FT = oT[TT.name]) || void 0 === FT ? void 0 : FT.rootName) && void 0 !== BT ? BT : TT.name,
        uT = null !== (ST = null !== (DT = eT.customDisplayName) && void 0 !== DT ? DT : null === (LT = oT[TT.name]) || void 0 === LT ? void 0 : LT.displayName) && void 0 !== ST ? ST : KT(oT, RT);
      let vT = uT;
      const ET = null === (xT = eT.customAttributes) || void 0 === xT ? void 0 : xT.enchantmentTier;
      ET && (vT = (0, kT.ob)(uT, {
        colour: kT.lb[ET]
      }));
      const fT = null !== (cT = null !== (MT = null !== (rT = function(TT, oT) {
        var IT;
        if (void 0 === TT || null !== (IT = oT.customAttributes) && void 0 !== IT && IT.author) return TT;
        const zT = (0, iT.ac)(TT);
        return zT.every((TT => "string" === typeof TT)) ? TT : zT.map((TT => "string" === typeof TT ? TT : {
          icon: TT.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(eT.customDescription, eT)) && void 0 !== rT ? rT : null === (AT = oT[TT.name]) || void 0 === AT ? void 0 : AT.description) && void 0 !== MT ? MT : null === (gT = oT[RT]) || void 0 === gT ? void 0 : gT.description) && void 0 !== cT ? cT : "";
      let CT = fT;
      if (null !== (hT = eT.customAttributes) && void 0 !== hT && hT.enchantments) CT = (0, XT.e)(fT, eT.customAttributes.enchantments, eT.customAttributes.enchantmentData);
      else if (IT[RT]) CT = (0, kT.ob)(fT), CT.push({
        str: "\n"
      }), CT.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (wT = eT.customAttributes) && void 0 !== wT && wT.mobSettings) {
        var jT, JT;
        const TT = eT.customAttributes.mobSettings;
        var UT, aT;
        if (CT = [], (0, zT.K)(eT.customAttributes.health) || (CT.push({
            str: "\n"
          }), CT.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), CT.push({
            str: " "
          }), CT.push({
            str: eT.customAttributes.health.toString()
          }), (0, zT.K)(TT.maxHealth) || (CT.push({
            str: "/"
          }), CT.push({
            str: TT.maxHealth.toString()
          }))), !(0, zT.K)(TT.attackDamage) && TT.attackDamage > 0 && (CT.push({
            str: "\n"
          }), CT.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), CT.push({
            str: " "
          }), CT.push({
            str: TT.attackDamage.toString()
          })), !(0, zT.K)(TT.secondaryAttackDamage) && TT.secondaryAttackDamage > 0 && (CT.push({
            str: "\n"
          }), CT.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), CT.push({
            str: " "
          }), CT.push({
            str: TT.secondaryAttackDamage.toString()
          })), (0, zT.K)(TT.baseRunningSpeed) || (CT.push({
            str: "\n"
          }), CT.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), CT.push({
            str: " "
          }), CT.push({
            str: TT.baseRunningSpeed.toFixed(2)
          })), "Saddled" === TT.metaInfo) CT.push({
          str: "\n"
        }), CT.push({
          str: {
            translationKey: "general:has"
          }
        }), CT.push({
          str: " "
        }), CT.push({
          icon: null !== (UT = null === (aT = TT.tameInfo) || void 0 === aT ? void 0 : aT.saddleItemName) && void 0 !== UT ? UT : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (CT.push({
            str: "\n"
          }), CT.push({
            str: "\n"
          }), TT.petInfo && null !== (jT = TT.tameInfo) && void 0 !== jT && jT.supportsFriendship) {
          const oT = WT.d.getIconsFromFriendshipPoints(TT.petInfo.friendshipPoints);
          for (const TT of oT) CT.push({
            icon: TT,
            style: {
              fontSize: "1.5em"
            }
          });
          CT.push({
            str: "\n"
          });
          const IT = WT.d.getMobHungerLevel(TT.petInfo.lastFedAt);
          for (const TT of WT.d.hungerLevelIcons[IT]) CT.push({
            icon: TT,
            style: {
              fontSize: "1.5em"
            }
          });
          CT.push({
            str: " "
          }), CT.push({
            str: WT.d.hungerLevelTranslations[IT],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (TT.tameInfo && null !== (JT = TT.tameInfo) && void 0 !== JT && JT.supportsFriendship) {
          var YT, QT;
          let oT = null !== (YT = TT.tameInfo.likedFoods) && void 0 !== YT ? YT : [];
          CT.push({
            str: "\n"
          }), CT.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: WT.d.feedTextColours[WT.d.MobFoodType.Superliked]
            }
          }), CT.push({
            str: " "
          }), null !== (QT = TT.petInfo) && void 0 !== QT && QT.superlikedFoodKnown ? (CT.push({
            icon: TT.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), oT = oT.filter((oT => oT !== TT.petInfo.superlikedFood))) : CT.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), CT.push({
            str: "\n"
          }), CT.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: WT.d.feedTextColours[WT.d.MobFoodType.Liked]
            }
          }), CT.push({
            str: " "
          });
          for (const TT of oT) CT.push({
            icon: TT,
            style: {
              fontSize: "1.5em"
            }
          });
          CT.push({
            str: "\n"
          }), CT.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: WT.d.feedTextColours[WT.d.MobFoodType.Neutral]
            }
          }), CT.push({
            str: " "
          });
          for (const IT of null !== (OT = TT.tameInfo.neutralFoods) && void 0 !== OT ? OT : []) {
            var OT;
            CT.push({
              icon: IT,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          CT.push({
            str: "\n"
          }), CT.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: WT.d.feedTextColours[WT.d.MobFoodType.Disliked]
            }
          }), CT.push({
            str: " "
          });
          for (const IT of null !== (HT = TT.tameInfo.dislikedFoods) && void 0 !== HT ? HT : []) {
            var HT;
            CT.push({
              icon: IT,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        CT.length > 0 ? (CT.shift(), CT.unshift(...(0, kT.ob)(fT))) : CT = (0, kT.ob)(fT)
      }
      return {
        name: vT,
        desc: CT,
        fontStyle: null !== (mT = eT.customAttributes) && void 0 !== mT && mT.author ? "italic" : "normal"
      }
    }

    function rT(TT, oT, IT, iT) {
      const zT = BT(TT, IT),
        kT = BT(TT, iT);
      if (!zT) return !1;
      const WT = oT[zT.name].armourReduction,
        XT = oT[kT.name].armourReduction;
      if (XT === WT) {
        var FT, ST, DT, LT;
        const TT = null !== (FT = null === (ST = zT.attributes.customAttributes) || void 0 === ST ? void 0 : ST.enchantmentTier) && void 0 !== FT ? FT : "Tier 0",
          oT = null !== (DT = null === (LT = kT.attributes.customAttributes) || void 0 === LT ? void 0 : LT.enchantmentTier) && void 0 !== DT ? DT : "Tier 0";
        return parseInt(TT.replace("Tier ", "")) >= parseInt(oT.replace("Tier ", ""))
      }
      return WT > XT
    }

    function AT(TT) {
      let oT;
      if ("number" === typeof TT) {
        const IT = document.querySelector(`[data-inven-idx="${TT}"]`);
        if (!IT) return null;
        oT = IT.getBoundingClientRect()
      } else oT = TT.getBoundingClientRect();
      return {
        x: oT.left + oT.width / 2,
        y: oT.top + oT.height / 2
      }
    }
  },
  8652: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => xT,
      f: () => cT,
      h: () => KT
    });
    var iT = IT(1408),
      zT = IT(46),
      kT = IT(1280),
      WT = IT(4050),
      XT = IT(2168),
      BT = IT(1171),
      FT = IT(90),
      ST = IT(1784),
      DT = IT(1310),
      LT = IT(1083);

    function xT(TT) {
      let {
        show: oT,
        onClose: IT
      } = TT;
      const {
        requestedGameNameWithVariation: iT,
        lobbyName: zT,
        shownLobbyName: kT
      } = (0, ST.f)("connectedGame"), BT = (0, XT.c)(iT, zT, !1);
      return FT.featureFlags.canUseInviteLinks && (0, LT.jsx)(WT.e, {
        show: oT,
        close: IT,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, LT.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, LT.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, LT.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, LT.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === BT ? (0, LT.jsx)(DT.d, {}) : BT, (0, LT.jsx)("br", {}), "Lobby Name: ", kT, (0, LT.jsx)("br", {}), (0, LT.jsx)("br", {}), (0, LT.jsx)("br", {}), (0, LT.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, LT.jsx)(cT, {})]
        })
      })
    }

    function cT() {
      var TT;
      const {
        t: oT
      } = (0, BT.t)(), IT = null !== (TT = KT(FT.featureFlags.canUseInviteLinks)) && void 0 !== TT ? TT : "Loading Link...", [kT, WT] = (0, zT.useState)(0), [XT, ST] = (0, zT.useReducer)((TT => TT + 1), 0);
      return (0, zT.useEffect)((() => {
        const TT = setTimeout((() => {
          ST()
        }), 1100);
        return () => {
          clearTimeout(TT)
        }
      }), [kT]), FT.featureFlags.canUseInviteLinks && (0, LT.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, LT.jsx)("div", {
          className: "InviteLinkInner",
          children: IT
        }), (0, LT.jsx)(iT.e, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(IT).catch((TT => {
              console.error("Failed to copy invite link:", TT)
            })), WT(Date.now())
          },
          disabled: Date.now() - kT < 1e3,
          children: Date.now() - kT < 1e3 ? oT("general:copied") : oT("general:copy")
        })]
      })
    }

    function KT(TT) {
      const [oT, IT] = (0, zT.useState)(null);
      return (0, zT.useEffect)((() => {
        if (!TT) return;
        let oT = !0;
        return (0, kT.D)().then((TT => {
          oT && IT(TT)
        })).catch((TT => {
          console.error("Failed to get invite link:", TT)
        })), () => {
          oT = !1
        }
      }), [TT]), oT
    }
  },
  35974: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => RT
    });
    var iT = IT(46),
      zT = IT(2227),
      kT = IT(1729),
      WT = IT(596),
      XT = IT(16),
      BT = IT(1042),
      FT = IT.n(BT),
      ST = IT(35559),
      DT = IT(2312),
      LT = IT(35566),
      xT = IT(2341),
      cT = IT(2318),
      KT = IT(3163),
      MT = IT(12),
      rT = IT(1847),
      AT = IT(2176),
      gT = IT(1193),
      hT = IT(4400),
      wT = IT(1784),
      mT = IT(90),
      eT = IT(1083);
    const RT = (0, iT.memo)((function() {
      const TT = (0, zT.g)("lobbyLeaderboardInfo"),
        oT = (0, wT.f)("players"),
        IT = (0, wT.f)("lobbyLeaderboardRows"),
        XT = (0, wT.f)("hiddenPlayerNames"),
        BT = (0, iT.useRef)(null),
        [FT, ST] = (0, iT.useReducer)((TT => TT + 1), 0);
      return (0, iT.useEffect)((() => (0, rT.b)((() => {
        ST()
      }))), []), (0, eT.jsx)("div", {
        className: "LobbyLeaderboardContainer Menu",
        children: (0, eT.jsx)("div", {
          className: "MenuBody",
          children: function() {
            if (!TT) return (0, eT.jsx)(eT.Fragment, {});
            const iT = JSON.parse(JSON.stringify(TT)),
              zT = [...oT.ids],
              FT = {},
              ST = {};
            for (const TT of zT) {
              var DT, xT;
              FT[TT] = null === (DT = IT[TT]) || void 0 === DT ? void 0 : DT.colour;
              const oT = null === (xT = IT[TT]) || void 0 === xT ? void 0 : xT.values;
              oT && (ST[TT] = {
                ...oT
              })
            }
            const cT = Object.keys(iT);
            cT.sort(((TT, oT) => iT[TT].sortPriority - iT[oT].sortPriority)), zT.sort(((TT, oT) => {
              if (!ST[TT] || !ST[oT]) return 0;
              for (const IT of cT) {
                const zT = ST[TT][IT],
                  kT = ST[oT][IT];
                let WT = 0;
                if ("string" == typeof zT && "string" == typeof kT ? WT = zT.localeCompare(kT) : "number" == typeof zT && "number" == typeof kT ? WT = zT - kT : "number" == typeof zT && "string" == typeof kT ? WT = 1 : "string" == typeof zT && "number" == typeof kT && (WT = -1), WT) return WT * ("ascending" === iT[IT].sortOrder ? 1 : -1)
              }
              return 0
            }));
            for (const TT of zT) {
              var KT, MT, wT;
              const {
                name: iT,
                ranks: zT,
                cosmetics: kT
              } = oT.byId[TT], XT = [], BT = null !== (KT = null === (MT = IT[TT]) || void 0 === MT || null === (wT = MT.tags) || void 0 === wT ? void 0 : wT.flatMap((TT => 0 === TT.length ? TT : [...TT, String.fromCharCode(8198)]))) && void 0 !== KT ? KT : [];
              XT.push(...BT), XT.push(...(0, gT.x)(zT, iT, (null === kT || void 0 === kT ? void 0 : kT.nameColour) === WT.d || null === kT || void 0 === kT ? void 0 : kT.nameColour)), ST[TT] ??= {}, ST[TT].name = XT
            }

            function mT(TT, IT) {
              if (ST[TT] && void 0 !== ST[TT][IT]) {
                if ("name" === IT) {
                  const {
                    name: iT,
                    cosmetics: zT
                  } = oT.byId[TT];
                  return (0, eT.jsxs)("div", {
                    className: "PlayerPfpAndName",
                    children: [zT && (0, eT.jsx)(AT.b, {
                      cosmetics: zT
                    }), " ", (0, eT.jsx)(kT.c, {
                      text: ST[TT][IT],
                      friendBadgeFor: (0, rT.d)(iT, XT) ? iT : void 0
                    })]
                  })
                }
                return (0, eT.jsx)(kT.c, {
                  text: ST[TT][IT]
                })
              }
              return ""
            }
            const RT = Object.keys(iT).filter((TT => !0 !== iT[TT].hidden)).map((TT => {
              var oT;
              return {
                key: TT,
                header: (0, eT.jsx)(kT.c, {
                  text: null !== (oT = iT[TT].displayName) && void 0 !== oT ? oT : ""
                })
              }
            }));
            return (0, eT.jsx)("div", {
              ref: BT,
              className: "LobbyLeaderboard",
              children: (0, eT.jsx)(hT.b, {
                columns: RT,
                rows: zT,
                getRowKey: TT => TT,
                renderRow: TT => {
                  const IT = TT !== oT.localId;
                  return (0, eT.jsx)(uT, {
                    playerId: TT,
                    playerName: oT.byId[TT].name,
                    isOtherPlayer: IT,
                    opensProfileCard: (0, LT.g)(IT, oT.byId[TT].name, XT),
                    lobbyLeaderboardInfo: iT,
                    getPlayerValue: mT,
                    playerColors: FT
                  })
                }
              })
            })
          }()
        })
      })
    }));

    function uT(TT) {
      let {
        playerId: oT,
        playerName: IT,
        isOtherPlayer: zT,
        opensProfileCard: kT,
        lobbyLeaderboardInfo: WT,
        getPlayerValue: BT,
        playerColors: rT
      } = TT;
      const AT = (0, iT.useRef)(null);
      (0, iT.useEffect)((() => () => {
        DT.e.closeIfOwner(AT)
      }), []);
      const gT = {
          icon: "flag",
          text: "Report",
          onClick: () => {
            XT.h.XM("OpenReportMenu", {
              playerEId: oT,
              playerName: IT,
              US: null,
              serverChatMsgId: null
            })
          }
        },
        hT = () => ({
          ...(0, LT.c)(oT, IT),
          showLocation: !1,
          status: null,
          extraActions: [gT],
          friendRequestSource: "leaderboard"
        });
      return (0, eT.jsxs)("tr", {
        ref: AT,
        "data-pad-focusable": kT || void 0,
        [DT.i]: kT || void 0,
        onClick: kT ? () => {
          var TT;
          DT.e.toggle(AT, {
            ...hT(),
            anchor: null !== (TT = AT.current.querySelector(".PlayerPfpAndName")) && void 0 !== TT ? TT : AT.current
          })
        } : void 0,
        onContextMenu: kT ? TT => {
          (0, xT.f)(AT, TT, hT(), MT.c.get("isTouchScreen"))
        } : void 0,
        onPointerDown: kT ? TT => {
          (0, cT.b)(TT, (() => (0, LT.c)(oT, IT).playerSocialPreview))
        } : void 0,
        children: [Object.keys(WT).map((TT => !0 === WT[TT].hidden ? null : (0, eT.jsxs)("td", {
          className: FT()("LobbyLeaderboardValue SmallTextBold", {
            LobbyLeaderboardValueHighlighted: !zT
          }),
          children: [(0, eT.jsx)("div", {
            className: "LobbyLeaderboardValueText",
            children: BT(oT, TT)
          }), (0, eT.jsx)("div", {
            className: "LobbyLeaderboardValueBg",
            style: {
              backgroundColor: rT[oT]
            }
          })]
        }, TT))), zT && !kT && (0, eT.jsx)(ST.c, {
          className: "LobbyLeaderboardRowFloatingActions",
          triggerElementRef: AT,
          options: [{
            icon: gT.icon,
            text: gT.text,
            onPointerDown: gT.onClick
          }, ...null === IT || mT.featureFlags.useSocialFeatures ? [] : (0, KT.e)(null, IT)]
        })]
      })
    }
  },
  4251: (TT, oT, IT) => {
    IT.d(oT, {
      f: () => AT,
      d: () => rT
    });
    var iT = IT(46),
      zT = IT(1403),
      kT = IT(1729),
      WT = IT(4260),
      XT = IT(1083);
    const BT = (0, iT.memo)((function(TT) {
      let {
        initialParameters: oT
      } = TT;
      const IT = (0, iT.useRef)(null),
        zT = (0, iT.useRef)(null),
        BT = (0, iT.useRef)(0),
        FT = (0, iT.useRef)(null),
        ST = oT.description,
        DT = oT.yI,
        {
          scale: LT,
          rotation: xT
        } = null !== oT && void 0 !== oT ? oT : {},
        cT = (0, WT.g)();
      return (0, iT.useEffect)((() => {
        const TT = cT.onFrame((() => {
          const TT = cT.getState();
          if (!TT.isActive || !IT.current || !zT.current) return;
          const oT = TT.state;
          if (IT.current.value = oT.progress, oT.clickCount > BT.current) {
            BT.current = oT.clickCount;
            const TT = zT.current;
            TT.classList.add("pulse"), FT.current = setTimeout((() => {
              TT.classList.remove("pulse")
            }), 100)
          }
        }));
        return () => {
          clearTimeout(FT.current), TT()
        }
      }), [cT]), (0, XT.jsx)(XT.Fragment, {
        children: (0, XT.jsxs)("div", {
          className: "QTEProgressBarWrapper",
          style: {
            ...null !== LT && {
              "--scale": LT
            },
            ...null !== xT && {
              "--rotation": `${xT}deg`
            }
          },
          children: [(0, XT.jsx)("progress", {
            id: "catch",
            max: 100,
            className: "QTEProgressBar",
            ref: IT
          }), (0, XT.jsx)("span", {
            className: "QTEProgressBarInteractionIndicator",
            ref: zT,
            children: (0, XT.jsx)(kT.c, {
              text: [{
                icon: DT
              }]
            })
          }), (0, XT.jsx)("div", {
            className: "QTEProgressBarDescription",
            children: (0, XT.jsx)(kT.c, {
              text: ST
            })
          })]
        })
      })
    }));
    var FT = IT(1042),
      ST = IT.n(FT);
    const DT = 2 * Math.PI * 90,
      LT = (0, iT.memo)((function(TT) {
        let {
          initialParameters: oT
        } = TT;
        const IT = (0, iT.useRef)(null),
          zT = (0, iT.useRef)(null),
          BT = (0, iT.useRef)(null),
          FT = oT.label,
          LT = oT.icon,
          xT = oT.VI,
          {
            scale: cT,
            rotation: KT,
            Ti: MT
          } = null !== oT && void 0 !== oT ? oT : {},
          rT = (0, WT.g)();
        return (0, iT.useEffect)((() => {
          const TT = rT.onFrame((() => {
            var TT, oT;
            const iT = rT.getState();
            if (!iT.isActive || !zT.current) return;
            const kT = iT.state,
              WT = null !== (TT = kT.timeRemaining) && void 0 !== TT ? TT : 0,
              XT = null !== (oT = kT.dI) && void 0 !== oT ? oT : 1,
              FT = DT * (1 - WT / XT);
            zT.current.style.strokeDashoffset = `${FT}`, IT.current && (IT.current.style.opacity = WT > 0 ? "1" : "0"), BT.current && xT && (BT.current.textContent = `${(WT/1e3).toFixed(1)}s`)
          }));
          return () => {
            TT()
          }
        }), [rT, xT]), (0, XT.jsxs)("div", {
          className: "QTETimedClick",
          ref: IT,
          style: {
            ...null !== cT && {
              "--scale": cT
            },
            ...null !== KT && {
              "--rotation": `${KT}deg`
            }
          },
          children: [(0, XT.jsxs)("div", {
            className: "QTETimedClickCircleContainer",
            children: [(0, XT.jsxs)("svg", {
              className: "QTETimedClickCircularProgress",
              viewBox: "0 0 200 200",
              children: [(0, XT.jsx)("circle", {
                className: "QTETimedClickProgressTrack",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12"
              }), (0, XT.jsx)("circle", {
                className: "QTETimedClickProgressArc",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12",
                strokeLinecap: "square",
                strokeDasharray: DT,
                ref: zT
              })]
            }), (0, XT.jsx)("div", {
              className: "QTETimedClickCenterContent",
              children: (0, XT.jsx)(kT.c, {
                text: [{
                  icon: LT
                }],
                className: ST()("QTETimedClickInnerText", {
                  QTETimedClickBreathe: MT
                })
              })
            })]
          }), (0, XT.jsxs)("div", {
            className: "QTETimedClickRightTextContainer",
            children: [(0, XT.jsx)(kT.c, {
              text: FT,
              className: "QTETimedClickLabelText"
            }), xT && (0, XT.jsx)("span", {
              className: "QTETimedClickTimeText",
              ref: BT
            })]
          })]
        })
      })),
      xT = (0, iT.memo)((function(TT) {
        let {
          initialParameters: oT
        } = TT;
        const IT = (0, iT.useRef)(null),
          zT = (0, iT.useRef)(null),
          BT = (0, iT.useRef)(null),
          FT = (0, iT.useRef)(!1),
          ST = oT.description,
          DT = null === oT || void 0 === oT ? void 0 : oT.icon,
          LT = (0, WT.g)();
        return (0, iT.useEffect)((() => {
          const TT = LT.onFrame((() => {
            const TT = LT.getState();
            if (!TT.isActive) return;
            const oT = TT.state;
            if (IT.current) {
              const TT = 100 * (oT.catchZonePosition - oT.Ii / 2);
              IT.current.style.left = `${TT}%`, IT.current.style.width = 100 * oT.Ii + "%", oT.isCatching !== FT.current && (FT.current = oT.isCatching, oT.isCatching ? IT.current.classList.add("catching") : IT.current.classList.remove("catching"))
            }
            zT.current && (zT.current.style.left = 100 * oT.moverPosition + "%"), BT.current && (BT.current.value = oT.progress)
          }));
          return () => {
            TT()
          }
        }), [LT]), (0, XT.jsxs)("div", {
          className: "QTEGravityBar",
          children: [(0, XT.jsx)("div", {
            className: "QTEGravityBarDescription",
            children: (0, XT.jsx)(kT.c, {
              text: ST
            })
          }), (0, XT.jsx)("progress", {
            max: 100,
            className: "QTEGravityBarProgress",
            ref: BT
          }), (0, XT.jsxs)("div", {
            className: "QTEGravityBarTrack",
            children: [(0, XT.jsx)("div", {
              className: "QTEGravityBarCatchZone",
              ref: IT
            }), (0, XT.jsx)("div", {
              className: "QTEGravityBarMover",
              ref: zT,
              children: (0, XT.jsx)("span", {
                children: DT && (0, XT.jsx)(kT.c, {
                  text: [{
                    icon: DT,
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
    var cT = IT(618);
    const KT = (0, iT.memo)((function(TT) {
        let {
          initialParameters: oT
        } = TT;
        const IT = (0, iT.useRef)(null),
          zT = oT.label,
          BT = oT.Fi,
          {
            icon: FT,
            scale: ST,
            rotation: DT
          } = null !== oT && void 0 !== oT ? oT : {},
          LT = 100 * (.5 - BT / 2),
          xT = 100 * BT,
          KT = (0, WT.g)();
        return (0, iT.useEffect)((() => {
          const TT = KT.onFrame((() => {
            const TT = KT.getState();
            if (!TT.isActive || !IT.current) return;
            const oT = TT.state;
            IT.current.style.left = 100 * oT.markerPosition + "%"
          }));
          return () => {
            TT()
          }
        }), [KT]), (0, XT.jsxs)("div", {
          className: "QTEPrecisionBarWrapper",
          style: {
            ...!(0, cT.K)(ST) && {
              "--scale": ST
            },
            ...!(0, cT.K)(DT) && {
              "--rotation": `${DT}deg`
            }
          },
          children: [FT && (0, XT.jsx)(kT.c, {
            text: [{
              icon: FT
            }],
            className: "QTEPrecisionBarIcon"
          }), (0, XT.jsxs)("div", {
            className: "QTEPrecisionBarTrack",
            children: [(0, XT.jsx)("div", {
              className: "QTEPrecisionBarSuccessZone",
              style: {
                left: `${LT}%`,
                width: `${xT}%`
              }
            }), (0, XT.jsx)("div", {
              className: "QTEPrecisionBarMarker",
              ref: IT
            })]
          }), (0, XT.jsx)("div", {
            className: "QTEPrecisionBarLabel",
            children: (0, XT.jsx)(kT.c, {
              text: zT
            })
          })]
        })
      })),
      MT = (0, iT.memo)((function(TT) {
        let {
          initialParameters: oT
        } = TT;
        const IT = (0, iT.useRef)(null),
          [zT, BT] = (0, iT.useState)((() => new Array(oT.Di).fill("pending"))),
          [FT, ST] = (0, iT.useState)((() => {
            const TT = oT.Ki;
            return (0, cT.K)(TT) || TT <= 0 ? [] : new Array(TT).fill("pending")
          })),
          DT = oT.label,
          {
            icon: LT
          } = oT,
          xT = (0, iT.useRef)(0),
          KT = (0, iT.useRef)(0),
          MT = (0, iT.useRef)([]),
          rT = (0, WT.g)();
        return (0, iT.useEffect)((() => {
          const TT = rT.onFrame((() => {
            const TT = rT.getState();
            if (!TT.isActive || !IT.current) return;
            const oT = TT.state,
              iT = 30 + 60 * oT.outerCircleProgress;
            if (IT.current.setAttribute("r", String(iT)), !0 === oT.lastClickResult && oT.successes > xT.current) {
              IT.current.classList.remove("QTERhythmClickOuterCircle--miss"), IT.current.classList.add("QTERhythmClickOuterCircle--hit");
              const TT = setTimeout((() => {
                var TT;
                null === (TT = IT.current) || void 0 === TT || TT.classList.remove("QTERhythmClickOuterCircle--hit")
              }), 200);
              MT.current.push(TT)
            } else if (!1 === oT.lastClickResult && oT.misses > KT.current) {
              IT.current.classList.remove("QTERhythmClickOuterCircle--hit"), IT.current.classList.add("QTERhythmClickOuterCircle--miss");
              const TT = setTimeout((() => {
                var TT;
                null === (TT = IT.current) || void 0 === TT || TT.classList.remove("QTERhythmClickOuterCircle--miss")
              }), 200);
              MT.current.push(TT)
            }
            oT.successes === xT.current && oT.misses === KT.current || (xT.current = oT.successes, KT.current = oT.misses, BT((TT => {
              const IT = [...TT];
              for (let iT = 0; iT < oT.Di; iT++) IT[iT] = iT < oT.successes ? "success" : "pending";
              return IT
            })), ST((TT => {
              if (0 === TT.length) return TT;
              const IT = [...TT];
              for (let iT = 0; iT < IT.length; iT++) IT[iT] = iT < oT.misses ? "miss" : "pending";
              return IT
            })))
          }));
          return () => {
            TT();
            for (const TT of MT.current) clearTimeout(TT);
            MT.current = []
          }
        }), [rT]), (0, XT.jsxs)("div", {
          className: "QTERhythmClickWrapper",
          children: [(0, XT.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: zT.map(((TT, oT) => (0, XT.jsx)("div", {
              className: "QTERhythmClickDot" + ("success" === TT ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
            }, oT)))
          }), (0, XT.jsxs)("div", {
            className: "QTERhythmClickCircleContainer",
            children: [(0, XT.jsxs)("svg", {
              className: "QTERhythmClickSvg",
              viewBox: "0 0 200 200",
              children: [(0, XT.jsx)("circle", {
                className: "QTERhythmClickInnerCircle",
                cx: "100",
                cy: "100",
                r: 30
              }), (0, XT.jsx)("circle", {
                className: "QTERhythmClickOuterCircle",
                cx: "100",
                cy: "100",
                r: 90,
                ref: IT
              })]
            }), LT && (0, XT.jsx)("div", {
              className: "QTERhythmClickCenterContent",
              children: (0, XT.jsx)(kT.c, {
                text: [{
                  icon: LT
                }],
                className: "QTERhythmClickIcon"
              })
            })]
          }), FT.length > 0 && (0, XT.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: FT.map(((TT, oT) => (0, XT.jsx)("div", {
              className: "QTERhythmClickDot" + ("miss" === TT ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
            }, oT)))
          }), (0, XT.jsx)("div", {
            className: "QTERhythmClickLabel",
            children: (0, XT.jsx)(kT.c, {
              text: DT
            })
          })]
        })
      }));

    function rT(TT) {
      let {
        qte: oT
      } = TT;
      switch (oT.type) {
        case "progressBar":
          return (0, XT.jsx)(BT, {
            initialParameters: oT.parameters
          });
        case "timedClick":
          return (0, XT.jsx)(LT, {
            initialParameters: oT.parameters
          });
        case "gravityBar":
          return (0, XT.jsx)(xT, {
            initialParameters: oT.parameters
          });
        case "precisionBar":
          return (0, XT.jsx)(KT, {
            initialParameters: oT.parameters
          });
        case "rhythmClick":
          return (0, XT.jsx)(MT, {
            initialParameters: oT.parameters
          });
        default:
          return console.warn("Unknown QTE type"), null
      }
    }
    const AT = (0, iT.memo)((function() {
      const [TT, oT] = (0, iT.useState)({
        type: null,
        parameters: null,
        state: null,
        isActive: !1
      });
      return (0, zT.g)("qteStateUpdated", (TT => {
        oT(TT)
      })), TT.isActive && TT.type ? (0, XT.jsx)("div", {
        className: "QTE",
        "data-camera-keeper": "",
        children: (0, XT.jsx)(rT, {
          qte: TT
        })
      }) : null
    }))
  },
  4260: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => XT,
      g: () => BT
    });
    var iT = IT(46),
      zT = IT(1266),
      kT = IT(4266);
    const WT = {
        getState: () => kT.e.getCurrentState(),
        onFrame: zT.n
      },
      XT = (0, iT.createContext)(WT);

    function BT() {
      return (0, iT.useContext)(XT)
    }
  },
  8735: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => FT
    });
    var iT = IT(46),
      zT = IT(1042),
      kT = IT.n(zT),
      WT = IT(1784),
      XT = IT(1083);

    function BT(TT) {
      const oT = Math.floor(TT / 3600),
        IT = Math.floor(TT % 3600 / 60),
        iT = Math.floor(TT % 60),
        zT = `${IT.toString().padStart(2,"0")}:${iT.toString().padStart(2,"0")}`;
      return oT > 0 ? `${oT}:${zT}` : zT
    }
    const FT = (0, iT.memo)((function(TT) {
      let {
        className: oT
      } = TT;
      const {
        recording: IT,
        seconds: iT
      } = (0, WT.f)("replayRecorder");
      return IT ? (0, XT.jsxs)("div", {
        className: kT()("RecordingIndicator", oT),
        children: [(0, XT.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, XT.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, XT.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: BT(iT)
        })]
      }) : null
    }))
  },
  35364: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => ST,
      d: () => LT
    });
    var iT = IT(46),
      zT = IT(1325),
      kT = IT(1171),
      WT = IT(1310),
      XT = IT(3041),
      BT = IT(4410),
      FT = IT(1083);

    function ST(TT) {
      let {
        loading: oT,
        schematics: IT,
        onSchematicPicked: iT,
        selectedSchematicIdList: zT = [],
        disableAutoExport: BT
      } = TT;
      const {
        t: ST
      } = (0, kT.t)();
      return (0, FT.jsxs)("div", {
        className: "SchematicList",
        children: [oT && (0, FT.jsx)(WT.d, {}), !oT && 0 === IT.length && (0, FT.jsx)("div", {
          className: "NoSchematicsText",
          children: ST("worldBuilder:noSavedSchematic")
        }), !oT && IT.map((TT => (0, FT.jsx)(XT.g, {
          source: {
            type: "schematic",
            schematic: TT
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            iT(TT)
          },
          isSelected: zT.includes(TT.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: TT.isAutoExported && BT,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, TT.schematicId)))]
      })
    }

    function DT(TT) {
      let {
        ownedSchematics: oT,
        currentWorldSchematicId: IT,
        onClose: zT
      } = TT;
      const {
        t: WT
      } = (0, kT.t)(), [XT, DT] = (0, iT.useState)(null);
      return (0, FT.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === XT && (0, FT.jsxs)(FT.Fragment, {
          children: [(0, FT.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: WT("worldBuilder:schematicList")
          }), (0, FT.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: WT("worldBuilder:clickSchematicForOptions")
          }), (0, FT.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, FT.jsx)(ST, {
              loading: !1,
              schematics: oT,
              onSchematicPicked: TT => {
                DT(TT)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== XT && (0, FT.jsx)(BT.f, {
          schematic: XT,
          inSourceWorld: XT.schematicId === IT,
          onSchematicUpdate: TT => {
            DT(TT)
          },
          onClose: () => {
            DT(null), zT()
          }
        })]
      })
    }

    function LT(TT) {
      let {
        ownedSchematics: oT,
        currentWorldSchematicId: IT,
        onClose: iT
      } = TT;
      zT.NotificationProvider.showCustomPopup({
        body: TT => (0, FT.jsx)(DT, {
          ownedSchematics: oT,
          currentWorldSchematicId: IT,
          onClose: TT
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: iT,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  35874: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => wT,
      f: () => hT
    });
    var iT = IT(3826),
      zT = IT(1403),
      kT = IT(46),
      WT = IT(5975),
      XT = IT(3814),
      BT = IT(1253),
      FT = IT(1751),
      ST = IT(1729),
      DT = IT(1408),
      LT = IT(1171),
      xT = IT(35877),
      cT = IT(1042),
      KT = IT.n(cT),
      MT = IT(1280),
      rT = IT(1055),
      AT = IT(1249),
      gT = IT(1083);
    const hT = "SleepingOverlay";

    function wT() {
      const {
        t: TT
      } = (0, LT.t)(), [oT, IT] = (0, kT.useState)(!1), [cT, wT] = (0, kT.useState)(null), [eT, RT] = (0, kT.useState)(1), [uT, vT] = (0, kT.useState)(!1), [ET, fT] = (0, kT.useState)(!1), CT = (0, kT.useRef)(0), jT = (0, kT.useRef)(!1), JT = (0, kT.useRef)(!1), UT = (0, kT.useRef)(), aT = (0, kT.useRef)(null);

      function YT() {
        const TT = null !== cT && void 0 !== cT ? cT : "Rested Speed";
        FT.gameBridge.send("wakeUp", ET ? TT : null), aT.current = null, IT(!1), wT(null), RT(1), vT(!1), fT(!1)
      }

      function QT() {
        return !uT && (YT(), !0)
      }
      return (0, zT.g)("PlayerPhysicsTypeUpdate", (TT => {
        TT !== aT.current && (aT.current = TT, TT === WT.r.SLEEPING ? (JT.current || (CT.current = FT.gameBridge.lookup("cameraZoom", null), JT.current = !0), jT.current = !0, FT.gameBridge.send("setCameraZoom", 3), IT(!0), RT(function() {
          for (const TT of FT.gameBridge.lookup("blocksStandingOn", null)) {
            if (xT.d.leafBeds.includes(TT)) return console.log(`Found leaf bed: ${TT}`), 1;
            if (xT.d.woolBeds.includes(TT)) return console.log(`Found woold bed: ${TT}`), 2;
            if (xT.d.strongBeds.includes(TT)) return console.log(`Found strong bed ${TT}`), 3
          }
          return 1
        }())) : (JT.current = !1, IT(!1), wT(null), RT(1)))
      })), (0, kT.useEffect)((() => () => {
        (0, BT.n)(hT)
      }), []), (0, kT.useEffect)((() => {
        oT ? (0, BT.o)(hT) : ((0, BT.n)(hT), jT.current && (FT.gameBridge.send("setCameraZoom", CT.current), jT.current = !1))
      }), [oT]), (0, AT.s)("overlay", UT, QT, oT), (0, gT.jsx)(iT.b, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: oT,
        timeout: 300,
        nodeRef: UT,
        unmountOnExit: !0,
        children: (0, gT.jsx)("div", {
          ref: UT,
          onClick: TT => {
            QT() && TT.stopPropagation()
          },
          children: (0, gT.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, gT.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: XT.i.map((oT => (0, gT.jsxs)(mT, {
                restedEffect: oT,
                pW: cT,
                setChosenRestedEffect: wT,
                children: [(0, gT.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, gT.jsx)(ST.c, {
                    text: [{
                      icon: oT
                    }]
                  }), XT.f[oT].shortName]
                }), (0, gT.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: TT(XT.f[oT].description, {
                    time: XT.f[oT].effectLevelDurations[eT] / 6e4
                  })
                })]
              }, oT)))
            }), (0, gT.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, gT.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, gT.jsxs)(DT.e, {
                className: "SleepingOverlayWakeUpButton",
                onClick: TT => {
                  ET ? YT() : (vT(!0), (0, MT.ab)((() => {
                    vT(!1), fT(!0)
                  }), !0)), TT.stopPropagation()
                },
                loading: uT,
                children: [!ET && (0, gT.jsxs)(gT.Fragment, {
                  children: [(0, gT.jsx)(rT.e, {
                    name: "film"
                  }), " ", TT("classicGame:watchAdToGetRestedPerk")]
                }), ET && TT("classicGame:wakeUp")]
              }), (0, gT.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, gT.jsx)("div", {
                  className: KT()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === eT
                  }),
                  children: (0, gT.jsx)(ST.c, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, gT.jsx)("div", {
                  className: KT()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === eT
                  }),
                  children: (0, gT.jsx)(ST.c, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, gT.jsx)("div", {
                  className: KT()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === eT
                  }),
                  children: (0, gT.jsx)(ST.c, {
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
    const mT = (0, kT.memo)((function(TT) {
      let {
        children: oT,
        restedEffect: IT,
        pW: iT,
        setChosenRestedEffect: zT
      } = TT;
      return IT === iT ? (0, gT.jsx)(DT.m, {
        onClick: TT => {
          TT.stopPropagation()
        },
        children: oT
      }) : (0, gT.jsx)(DT.i, {
        onClick: TT => {
          zT(IT), TT.stopPropagation()
        },
        children: oT
      })
    }))
  },
  35566: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => FT,
      g: () => BT
    });
    var iT = IT(596),
      zT = IT(1751),
      kT = IT(1591),
      WT = IT(90),
      XT = IT(1231);

    function BT(TT, oT, IT) {
      return WT.featureFlags.useSocialFeatures && TT && null === (0, XT.b)(oT, IT)
    }

    function FT(TT, oT) {
      var IT, WT;
      const XT = kT.e.getSocialState().friends.find((TT => TT.name.toLowerCase() === oT.toLowerCase())),
        BT = zT.gameBridge.latest("players").byId[TT],
        FT = void 0 !== BT && BT.name === oT,
        ST = FT && null !== (IT = BT.cosmetics) && void 0 !== IT ? IT : void 0,
        DT = XT && ST ? {
          ...XT,
          cosmetics: ST
        } : XT;
      return {
        playerSocialPreview: null !== DT && void 0 !== DT ? DT : {
          isError: !1,
          name: oT,
          ranks: FT ? [...BT.ranks] : [],
          cosmetics: null !== ST && void 0 !== ST ? ST : {},
          nameColour: null !== (WT = null === ST || void 0 === ST ? void 0 : ST.nameColour) && void 0 !== WT ? WT : iT.d,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== XT
      }
    }
  },
  8743: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => kT
    });
    var iT = IT(4057),
      zT = IT(4061);

    function kT(TT) {
      let {
        children: oT,
        showing: IT,
        globallyUniqueKey: kT,
        alwaysMountChildren: WT = !1,
        doGameplayStartStopOnShow: XT = !0,
        keepsMovement: BT = !1
      } = TT;
      return (0, zT.d)(!0, IT, kT, BT), (0, iT.e)(XT, IT), IT || WT ? oT : null
    }
  },
  4400: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => XT
    });
    var iT = IT(46),
      zT = IT(1042),
      kT = IT.n(zT),
      WT = IT(1083);

    function XT(TT) {
      let {
        columns: oT,
        rows: IT,
        getRowKey: zT,
        renderRow: XT,
        className: BT
      } = TT;
      return (0, WT.jsxs)("table", {
        className: kT()("Table", BT),
        children: [(0, WT.jsx)("thead", {
          children: (0, WT.jsx)("tr", {
            children: oT.map((TT => (0, WT.jsx)("th", {
              children: TT.header
            }, TT.key)))
          })
        }), (0, WT.jsx)("tbody", {
          children: IT.map((TT => (0, WT.jsx)(iT.Fragment, {
            children: XT(TT)
          }, zT(TT))))
        })]
      })
    }
  },
  35839: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => RT,
      c: () => mT,
      g: () => eT,
      i: () => cT
    });
    var iT = IT(1042),
      zT = IT.n(iT),
      kT = IT(46),
      WT = IT(68),
      XT = IT(1340),
      BT = IT(1408),
      FT = IT(1337),
      ST = IT(1249),
      DT = IT(1171),
      LT = IT(35842),
      xT = IT(1083);

    function cT(TT) {
      const [oT, IT] = (0, kT.useState)((() => (0, LT.n)(TT)));
      return (0, kT.useEffect)((() => (IT((0, LT.n)(TT)), (0, LT.S)((() => {
        IT((0, LT.n)(TT))
      })))), [TT]), oT
    }

    function KT(TT, oT) {
      "function" === typeof TT ? TT(oT) : TT && (TT.current = oT)
    }

    function MT(TT) {
      let {
        tutorial: oT,
        step: IT,
        enabled: iT = !0
      } = TT;
      const zT = cT(oT);
      return iT && zT === IT
    }

    function rT(TT, oT) {
      const IT = (0, LT.r)(TT),
        iT = IT.indexOf(oT);
      return !IT.slice(iT + 1).some((oT => (0, LT.D)(TT, oT)))
    }

    function AT(TT, oT, IT, iT) {
      let {
        tutorial: zT,
        step: kT,
        waitForClick: WT = !1,
        onPrevious: XT
      } = TT;
      const BT = oT && (0, LT.z)(zT, kT),
        FT = oT && !rT(zT, kT),
        DT = WT ? iT : IT;
      let xT = null;
      BT ? xT = () => {
        null === XT || void 0 === XT || XT(), (0, LT.v)(zT, kT)
      } : FT && (xT = () => {
        (0, LT.m)(zT)
      }), (0, ST.s)("popup", null !== DT && void 0 !== DT ? DT : IT, xT, oT && null !== DT, null, BT ? void 0 : "controller:menusSkipTutorial")
    }

    function gT(TT) {
      let {
        tutorial: oT,
        step: IT,
        text: iT,
        waitForClick: zT = !1,
        onPrevious: kT
      } = TT;
      const {
        t: WT
      } = (0, DT.t)(), XT = rT(oT, IT);
      return (0, xT.jsxs)(xT.Fragment, {
        children: [(0, xT.jsx)("div", {
          className: "TutorialStepText",
          children: iT
        }), (0, xT.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, LT.z)(oT, IT) && (0, xT.jsx)(BT.i, {
            className: "TutorialStepButton",
            onClick: () => {
              null === kT || void 0 === kT || kT(), (0, LT.v)(oT, IT)
            },
            children: WT("tutorial:back")
          }), !zT && (0, xT.jsx)(BT.e, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, LT.e)(IT)
            },
            padDefaultFocus: !0,
            children: WT(XT ? "tutorial:done" : "tutorial:next")
          }), !XT && (0, xT.jsx)(BT.i, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, LT.m)(oT)
            },
            children: WT("tutorial:skip")
          })]
        })]
      })
    }
    const hT = 6;

    function wT(TT) {
      let {
        rect: oT,
        margin: IT
      } = TT;
      const iT = Math.max(0, oT.top - IT),
        zT = oT.bottom + IT,
        kT = Math.max(0, oT.left - IT),
        WT = oT.right + IT;
      return (0, xT.jsxs)(xT.Fragment, {
        children: [(0, xT.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: iT
          }
        }), (0, xT.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: zT,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, xT.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: iT,
            left: 0,
            width: kT,
            height: zT - iT
          }
        }), (0, xT.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: iT,
            left: WT,
            right: 0,
            height: zT - iT
          }
        })]
      })
    }

    function mT(TT) {
      let {
        target: oT,
        placement: IT,
        boxRef: iT,
        className: BT,
        spotlightMargin: ST = hT,
        children: DT
      } = TT;
      const {
        getArrowProps: LT,
        getTooltipProps: cT,
        setTooltipRef: KT,
        setTriggerRef: MT
      } = (0, XT.b)({
        placement: IT,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, ST]
      });
      (0, kT.useLayoutEffect)((() => {
        MT(oT)
      }), [oT, MT]);
      const rT = function(TT, oT) {
        const [IT, iT] = (0, kT.useState)(null);
        return (0, kT.useEffect)((() => {
          if (!oT || !TT) return void iT(null);
          let IT = 0,
            zT = null;
          const kT = () => {
            const oT = TT.getBoundingClientRect();
            zT && oT.left === zT.left && oT.top === zT.top && oT.width === zT.width && oT.height === zT.height || (zT = oT, iT(oT)), IT = requestAnimationFrame(kT)
          };
          return kT(), () => {
            cancelAnimationFrame(IT)
          }
        }), [TT, oT]), IT
      }(oT, !0);
      (0, kT.useEffect)((() => {
        null === oT || void 0 === oT || oT.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [oT]);
      const AT = (0, kT.useCallback)((TT => {
        KT(TT), iT && (iT.current = TT)
      }), [KT, iT]);
      return (0, WT.createPortal)((0, xT.jsxs)(xT.Fragment, {
        children: [rT && (0, xT.jsx)(wT, {
          rect: rT,
          margin: ST
        }), (0, xT.jsxs)("div", {
          ref: AT,
          ...cT({
            className: zT()("tooltip-container SmallTextLight TutorialStep", BT)
          }),
          children: [DT, (0, xT.jsx)("div", {
            ...LT({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, FT.g)())
    }
    const eT = (0, kT.forwardRef)((function(TT, oT) {
      let {
        placement: IT = "right",
        children: iT,
        ...zT
      } = TT;
      const WT = MT(zT),
        XT = (0, kT.useRef)(null),
        BT = (0, kT.useRef)(null);
      AT(zT, WT, XT, BT);
      const [FT, ST] = (0, kT.useState)(null), DT = iT.ref, LT = (0, kT.useCallback)((TT => {
        BT.current = TT, ST(TT), KT(oT, TT), KT(DT, TT)
      }), [oT, DT]);
      return (0, xT.jsxs)(xT.Fragment, {
        children: [(0, kT.cloneElement)(iT, {
          ref: LT
        }), WT && (0, xT.jsx)(mT, {
          target: FT,
          placement: IT,
          boxRef: XT,
          children: (0, xT.jsx)(gT, {
            ...zT
          })
        })]
      })
    }));

    function RT(TT) {
      const oT = MT(TT),
        IT = (0, kT.useRef)(null);
      return AT(TT, oT, IT, null), oT ? (0, WT.createPortal)((0, xT.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, xT.jsx)("div", {
          ref: IT,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, xT.jsx)(gT, {
            ...TT
          })
        })
      }), (0, FT.g)()) : null
    }
  },
  35692: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => kT,
      g: () => WT,
      k: () => XT,
      l: () => BT
    });
    var iT = IT(46),
      zT = IT(1108);
    const kT = 8,
      WT = "InGameHeaderContainer",
      XT = "TopRightElements";

    function BT(TT) {
      const [oT] = (0, zT.e)(), [IT, BT] = (0, iT.useState)(!1);
      return (0, iT.useLayoutEffect)((() => {
        if (!TT) return;
        const oT = document.querySelector(`.${WT}`),
          IT = document.querySelector(`.${XT}`),
          iT = () => {
            const iT = TT.getBoundingClientRect(),
              zT = oT ? oT.getBoundingClientRect().right : 0,
              WT = IT ? IT.getBoundingClientRect().left : window.innerWidth,
              XT = iT.left < zT + kT,
              FT = iT.right > WT - kT;
            BT(XT || FT)
          };
        iT();
        const zT = new ResizeObserver(iT);
        return zT.observe(TT), oT && zT.observe(oT), IT && zT.observe(IT), () => {
          zT.disconnect()
        }
      }), [TT, oT]), IT
    }
  },
  6062: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => kT
    });
    var iT = IT(46),
      zT = IT(26);

    function kT(TT, oT) {
      var IT;
      const [kT, WT] = (0, iT.useState)(null !== (IT = zT.e.getItem(TT)) && void 0 !== IT ? IT : oT);
      return [kT, oT => {
        zT.e.setItem(TT, oT), WT(oT)
      }]
    }
  },
  8205: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => DT,
      e: () => cT,
      i: () => KT,
      j: () => xT,
      l: () => LT
    });
    var iT = IT(46),
      zT = IT(8214),
      kT = IT(16),
      WT = IT(1751),
      XT = IT(26),
      BT = IT(1231),
      FT = IT(1770);
    const ST = 50;
    const DT = new class {
      constructor() {
        this.state = {
          messages: [],
          reportedPlayers: [],
          channel: null
        }, this.listeners = new Set, this.stopListening = [], this.nextClientChatMsgId = 0, this.subscribe = TT => {
          if (0 === this.listeners.size) {
            var oT, IT;
            this.state = {
              ...this.state,
              channel: null !== (oT = null === (IT = FT.e.get("chatChannels")) || void 0 === IT ? void 0 : IT[0]) && void 0 !== oT ? oT : null
            };
            const TT = kT.h.subscribe("reportPlayer", (TT => {
              let {
                playerEId: oT
              } = TT;
              this.setState({
                ...this.state,
                reportedPlayers: [...this.state.reportedPlayers, oT]
              })
            }));
            this.stopListening = [WT.gameBridge.subscribe("chatReceived", (TT => {
              let {
                serverChatMsgId: oT,
                content: IT,
                author: iT
              } = TT;
              this.addMessage(oT, IT, iT)
            })), () => {
              kT.h.unsubscribe(TT)
            }, FT.e.subscribe("chatChannels", (TT => {
              var oT;
              this.setState({
                ...this.state,
                channel: null !== (oT = null === TT || void 0 === TT ? void 0 : TT[0]) && void 0 !== oT ? oT : null
              })
            }))]
          }
          return this.listeners.add(TT), () => {
            if (this.listeners.delete(TT), 0 === this.listeners.size) {
              for (const TT of this.stopListening) TT();
              this.stopListening = [], this.state = {
                messages: [],
                reportedPlayers: [],
                channel: null
              }
            }
          }
        }, this.getState = () => this.state
      }
      addMessage(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const iT = {
          serverChatMsgId: TT,
          content: oT,
          clientChatMsgId: this.nextClientChatMsgId++,
          author: IT
        };
        this.setState({
          ...this.state,
          messages: [iT, ...this.state.messages].slice(0, zT.i)
        })
      }
      selectNextChannel() {
        const TT = FT.e.get("chatChannels");
        if (TT) {
          const oT = TT.findIndex((TT => {
            var oT;
            return TT.channelName === (null === (oT = this.state.channel) || void 0 === oT ? void 0 : oT.channelName)
          }));
          this.setState({
            ...this.state,
            channel: TT[(oT + 1) % TT.length]
          })
        }
      }
      setState(TT) {
        this.state = TT;
        for (const oT of this.listeners) oT()
      }
    };

    function LT() {
      const [TT, oT] = (0, iT.useState)(DT.getState);
      return (0, iT.useEffect)((() => {
        const TT = DT.subscribe((() => {
          oT(DT.getState())
        }));
        return oT(DT.getState()), TT
      }), []), TT
    }

    function xT(TT) {
      var oT, IT;
      if (TT.startsWith("/report")) {
        var iT;
        const oT = null !== (iT = TT.replace("/report", "").trim().split(" ")[0]) && void 0 !== iT ? iT : "";
        if ("" === oT) return void DT.addMessage(null, [{
          str: "You must type a player's name when reporting them.\nExample:\n/report Bob"
        }]);
        const IT = WT.gameBridge.latest("players"),
          zT = WT.gameBridge.latest("hiddenPlayerNames"),
          XT = TT => {
            var iT, kT;
            const WT = null !== (iT = null === (kT = IT.byId[TT]) || void 0 === kT ? void 0 : kT.name) && void 0 !== iT ? iT : null;
            return null !== WT && (WT === oT || (0, BT.b)(WT, zT) === oT)
          };
        if (null !== IT.localId && XT(IT.localId)) return void DT.addMessage(null, [{
          str: "You cannot report yourself."
        }]);
        for (const TT of IT.ids)
          if (XT(TT)) return kT.h.XM("OpenReportMenu", {
            playerEId: TT,
            playerName: IT.byId[TT].name,
            US: null,
            serverChatMsgId: null
          }), void console.log("Opening report menu...");
        DT.addMessage(null, [{
          str: "Player not found in lobby."
        }])
      }
      WT.gameBridge.send("sendChatMessage", {
          US: TT,
          channelName: null !== (oT = null === (IT = DT.getState().channel) || void 0 === IT ? void 0 : IT.channelName) && void 0 !== oT ? oT : null
        }),
        function(TT) {
          var oT;
          const IT = null !== (oT = XT.e.getItem("recentlySentChatMsgs")) && void 0 !== oT ? oT : [];
          IT.push(TT), IT.length > ST && IT.shift();
          XT.e.setItem("recentlySentChatMsgs", IT)
        }(TT)
    }

    function cT() {
      var TT;
      return null !== (TT = XT.e.getItem("recentlySentChatMsgs")) && void 0 !== TT ? TT : []
    }

    function KT(TT) {
      var oT;
      let IT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const iT = null !== (oT = XT.e.getItem("recentlySentChatMsgs")) && void 0 !== oT ? oT : [],
        zT = iT.length + 1,
        kT = IT ? (TT % zT + zT) % zT : Math.min(iT.length, Math.max(0, TT));
      return {
        stepsBack: kT,
        text: 0 === kT ? "" : iT[iT.length - kT]
      }
    }
  },
  8154: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => WT,
      g: () => kT
    });
    var iT = IT(1803);
    const zT = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      kT = TT => "string" === typeof TT.icon && "" !== TT.icon && "string" === typeof TT.keycode && zT.test(TT.keycode),
      WT = TT => "Space" === TT ? "_" : iT.e[TT]
  },
  8226: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => zT
    });
    var iT = IT(12);

    function zT() {
      return !iT.c.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  8314: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => WT,
      d: () => kT
    });
    var iT = IT(46),
      zT = IT(3924);

    function kT() {
      const [TT, oT] = (0, iT.useState)(zT.p);
      return (0, iT.useEffect)((() => {
        const TT = () => {
          oT((0, zT.p)())
        };
        return window.addEventListener("resize", TT), () => {
          window.removeEventListener("resize", TT)
        }
      }), []), TT
    }

    function WT() {
      return (0, zT.V)().hudLayouts[kT()]
    }
  },
  8229: (TT, oT, IT) => {
    IT.d(oT, {
      B: () => ST,
      D: () => LT,
      H: () => xT,
      d: () => kT,
      g: () => XT,
      h: () => FT,
      l: () => BT,
      n: () => WT,
      o: () => zT,
      p: () => iT,
      t: () => cT,
      x: () => DT
    });
    const iT = 14,
      zT = 6,
      kT = (iT + zT) / 2,
      WT = 200,
      XT = WT / 2,
      BT = WT / 2 - 1,
      FT = zT / iT * (WT / 2),
      ST = (TT, oT) => -Math.PI / 2 + 2 * TT * Math.PI / oT,
      DT = (TT, oT, IT) => {
        const iT = 2 * Math.PI / IT;
        return (Math.round((Math.atan2(oT, TT) + Math.PI / 2) / iT) % IT + IT) % IT
      },
      LT = .5,
      xT = (TT, oT, IT) => Math.hypot(TT.x, TT.y) < LT ? IT : DT(TT.x, TT.y, oT),
      cT = (TT, oT, IT, iT, zT) => {
        const kT = Math.PI / oT,
          WT = ST(TT, oT),
          XT = WT - kT,
          BT = WT + kT,
          FT = (TT, oT) => `${IT+TT*Math.cos(oT)} ${IT+TT*Math.sin(oT)}`;
        return [`M ${FT(iT,XT)}`, `L ${FT(zT,XT)}`, `A ${zT} ${zT} 0 0 1 ${FT(zT,BT)}`, `L ${FT(iT,BT)}`, `A ${iT} ${iT} 0 0 0 ${FT(iT,XT)}`, "Z"].join(" ")
      }
  },
  35856: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => kT
    });
    var iT = IT(12),
      zT = IT(1280);

    function kT() {
      const {
        clientEscMenuOptions: TT
      } = (0, iT.k)(["clientEscMenuOptions"]);
      return (0, zT.z)() && TT.showChat
    }
  },
  8260: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => WT
    });
    var iT = IT(46),
      zT = IT(8193),
      kT = IT(2227);

    function WT() {
      const TT = (0, kT.g)("shopInfo"),
        [, oT] = (0, iT.useReducer)((TT => TT + 1), 0);
      return (0, kT.e)("shopInfo", oT), !(0, zT.e)(TT)
    }
  },
  35780: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => BT
    });
    var iT = IT(2465),
      zT = IT(3251),
      kT = IT(2556);
    const WT = ["Unable to create vertex buffer"];
    let XT = {};

    function BT(TT, oT) {
      const IT = new Date;
      console.error(`${IT.getUTCHours()}:${IT.getUTCMinutes()}:${IT.getUTCSeconds()}`, TT, oT, null === oT || void 0 === oT ? void 0 : oT.stack), WT.includes(null === oT || void 0 === oT ? void 0 : oT.message) && (console.error("Unrecoverable error occurred. Leaving game."), (0, iT.e)().client.leaveGameUnwanted({
        reason: `Unrecoverable error occurred.\nThis is a bug.\n\nError:\n${oT.message}\n\nPlease refresh the page.`,
        requiresRefresh: !0,
        canReconnect: !1,
        automaticallyReconnect: !1
      })), (0, kT.logError)("warning", `${TT}\n ${oT} "\n" ${null===oT||void 0===oT?void 0:oT.stack}`);
      const zT = TT + oT + (null === oT || void 0 === oT ? void 0 : oT.stack);
      zT in XT || ((0, kT.logError)("error", `${TT}\n ${oT} "\n" ${null===oT||void 0===oT?void 0:oT.stack}`), XT[zT] = !0)
    }(0, zT.onGameReset)((() => {
      XT = {}
    }))
  },
  4328: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => aT,
      h: () => UT
    });
    var iT = IT(4336),
      zT = IT(306);
    const kT = 120,
      WT = 260,
      XT = 1.15,
      BT = 1.2,
      FT = 2,
      ST = 1.08,
      DT = .8,
      LT = .95,
      xT = 8,
      cT = "[\"')\\]\u300d\u300f\uff09]*",
      KT = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${cT}$`),
      MT = new RegExp(`[?\uff1f]${cT}$`),
      rT = new RegExp(`[!\uff01]${cT}$`),
      AT = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      gT = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      hT = new RegExp(`[${gT}]`),
      wT = new RegExp(`[${gT}]|[^${gT}]+`, "g"),
      mT = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function eT(TT) {
      let oT = 2166136261;
      for (let IT = 0; IT < TT.length; IT++) oT ^= TT.charCodeAt(IT), oT = Math.imul(oT, 16777619);
      return (oT >>> 0) / 4294967295 * 2 - 1
    }

    function RT(TT) {
      var oT;
      if (hT.test(TT)) return 1;
      const IT = TT.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        iT = IT.replace(/[^0-9]/g, "");
      if (iT.length > 0 && !/\p{L}/u.test(IT)) return Math.min(iT.length, 4);
      const zT = null !== (oT = IT.match(mT)) && void 0 !== oT ? oT : [];
      if (0 === zT.length) {
        var kT, WT;
        const TT = null !== (kT = null === (WT = IT.match(/\p{L}/gu)) || void 0 === WT ? void 0 : WT.length) && void 0 !== kT ? kT : 0;
        return 0 === TT ? 0 : Math.min(Math.max(1, Math.round(TT / 2.5)), xT)
      }
      const XT = IT.replace(/[^\p{L}]/gu, ""),
        BT = zT.length > 1 && "e" === zT.at(-1) && XT.endsWith("e") && !XT.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(TT.replace(/[^\p{L}]/gu, ""));
      return Math.min(zT.length - (BT ? 1 : 0), xT)
    }

    function uT(TT) {
      return TT.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function vT(TT) {
      const oT = TT.replace(/[^\p{L}]/gu, "");
      return oT.length >= 2 && oT === oT.toUpperCase() && oT !== oT.toLowerCase()
    }

    function ET(TT, oT) {
      var IT;
      const xT = oT && (0, iT.j)(oT),
        cT = null !== (IT = null === xT || void 0 === xT ? void 0 : xT.syllableMs) && void 0 !== IT ? IT : iT.d,
        gT = function(TT) {
          const oT = [];
          for (const iT of (0, zT.ac)(TT))
            if ("string" === typeof iT)
              for (const TT of iT.split(/(\s+)/)) {
                if ("" === TT) continue;
                if (/^\s+$/.test(TT)) {
                  oT.push({
                    kind: "space",
                    text: TT
                  });
                  continue
                }
                if (!hT.test(TT)) {
                  oT.push({
                    kind: "word",
                    text: TT,
                    delayMs: 0
                  });
                  continue
                }
                let iT = !0;
                for (const zT of null !== (IT = TT.match(wT)) && void 0 !== IT ? IT : []) {
                  var IT;
                  const TT = oT.at(-1);
                  iT || "word" !== (null === TT || void 0 === TT ? void 0 : TT.kind) || hT.test(zT) || /[\p{L}\p{N}]/u.test(zT) ? (iT || oT.push({
                    kind: "space",
                    text: "\u200b"
                  }), oT.push({
                    kind: "word",
                    text: zT,
                    delayMs: 0
                  }), iT = !1) : TT.text += zT
                }
              } else oT.push({
                kind: "icon",
                text: iT.icon,
                delayMs: 0
              });
          return oT
        }(TT),
        mT = [];
      let ET = [];
      for (const iT of gT) "space" !== iT.kind && (ET.push(iT), KT.test(iT.text) && (mT.push(ET), ET = []));
      mT.push(ET);
      const fT = [];
      let CT = 0;
      for (const iT of mT) {
        var jT, JT;
        const TT = null !== (jT = null === (JT = iT.at(-1)) || void 0 === JT ? void 0 : JT.text) && void 0 !== jT ? jT : "",
          oT = MT.test(TT),
          IT = rT.test(TT),
          zT = iT.map((TT => "word" === TT.kind ? RT(TT.text) : 1)),
          gT = zT.findLastIndex((TT => TT > 0));
        for (const [MT, rT] of iT.entries()) {
          const TT = "word" === rT.kind,
            iT = zT[MT];
          rT.delayMs = CT;
          for (let zT = 0; xT && zT < iT; zT++) {
            const {
              intonation: kT
            } = xT;
            let WT = gT > 0 ? -kT.declineSemitones * (MT / gT) : 0;
            WT += eT(`${uT(rT.text)}|${zT}`) * kT.variationSemitones;
            const KT = Math.min(1, kT.variationSemitones);
            let AT = xT.glideSemitones,
              hT = 1;
            IT && (WT += kT.exclaimLiftSemitones, hT *= XT), oT && MT === gT && (WT += kT.questionRiseSemitones * (iT > 1 ? .5 + .5 * zT / (iT - 1) : 1), zT === iT - 1 && (AT = Math.abs(AT) + kT.questionRiseSemitones / 2)), TT && vT(rT.text) && (WT += FT * KT, hT *= BT), iT > 1 && 0 === zT && (WT += DT * KT, hT *= ST), fT.push({
              atMs: CT + zT * cT,
              semitones: WT,
              glideSemitones: AT,
              durationMs: zT < iT - 1 ? Math.min(xT.durationMs, cT * LT) : xT.durationMs,
              level: hT
            })
          }
          CT += iT * cT + (KT.test(rT.text) ? WT : AT.test(rT.text) ? kT : 0)
        }
      }
      return {
        pieces: gT.map((TT => "space" === TT.kind ? TT : "icon" === TT.kind ? {
          kind: "icon",
          icon: TT.text,
          delayMs: TT.delayMs
        } : {
          kind: "word",
          text: TT.text,
          delayMs: TT.delayMs
        })),
        blips: fT
      }
    }
    var fT = IT(1171),
      CT = IT(1220),
      jT = IT(1755);

    function JT(TT) {
      if ("string" === typeof TT) return TT;
      const oT = CT.d.get().getCurrentLanguageCode();
      return (0, fT.n)(oT, TT.translationKey, (0, fT.m)(TT.params, jT.e.shown))
    }

    function UT(TT) {
      const oT = void 0 === TT.voice ? null : (0, iT.m)(TT.voice),
        IT = oT && (0, iT.j)(oT);
      return {
        plan: ET(JT(TT.line), IT),
        synth: IT
      }
    }

    function aT(TT) {
      const oT = [];
      let IT = [];
      for (const [zT, kT] of TT.entries()) {
        var iT;
        "space" === kT.kind && (" " !== kT.text || "icon" !== (null === (iT = TT[zT + 1]) || void 0 === iT ? void 0 : iT.kind)) ? (IT.length > 0 && oT.push(IT), oT.push([kT]), IT = []) : IT.push(kT)
      }
      return IT.length > 0 && oT.push(IT), oT
    }
  },
  35686: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => zT
    });
    const iT = [{
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

    function zT(TT, oT, IT) {
      const zT = Math.abs(TT - oT),
        kT = Date.now() - IT;
      for (const WT of iT)
        if (TT < WT.maxDist) return zT >= WT.hardUpdateDist || kT > WT.timeBetweenSoftChecks && zT >= WT.softUpdateDist;
      return !1
    }
  },
  35898: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => WT,
      e: () => kT,
      h: () => zT
    });
    const iT = [.25, .5, 1, 2, 4, 8, 16];

    function zT(TT, oT) {
      const IT = iT;
      let zT = IT.indexOf(TT);
      return -1 === zT && (zT = IT.findIndex((oT => oT >= TT)), -1 === zT && (zT = IT.length - 1)), "up" === oT ? IT[Math.min(zT + 1, IT.length - 1)] : IT[Math.max(zT - 1, 0)]
    }

    function kT(TT) {
      return TT <= iT[0]
    }

    function WT(TT) {
      return TT >= iT[iT.length - 1]
    }
  },
  35956: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => iT,
      d: () => zT
    });
    const iT = "data-replay-ui-active",
      zT = [{
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
  35965: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => FT,
      e: () => DT,
      i: () => ST
    });
    var iT = IT(12),
      zT = IT(16),
      kT = IT(35956);

    function WT() {
      const TT = {};
      for (const {
          group: oT
        }
        of kT.d) TT[oT] = !0;
      return TT
    }
    let XT = WT();

    function BT() {
      zT.h.XM("replayViewer|uiVisibilityChanged")
    }

    function FT() {
      return XT
    }

    function ST(TT, oT) {
      XT[TT] !== oT && (XT = {
        ...XT,
        [TT]: oT
      }, "nametag" === TT && iT.c.set({
        areNametagsHidden: !oT
      }), BT())
    }

    function DT() {
      XT = WT(), iT.c.set({
        areNametagsHidden: !1
      }), BT()
    }
  },
  8152: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => kT,
      f: () => WT,
      g: () => XT,
      h: () => zT
    });
    var iT = IT(8154);
    const zT = TT => {
        const oT = [];
        TT.holdingGun && oT.push({
          kind: "reload"
        }), TT.touchscreenActionButton && oT.push({
          kind: "touchButton",
          label: TT.touchscreenActionButton
        });
        for (const kT of null !== (IT = null === (zT = TT.customButtons) || void 0 === zT ? void 0 : zT.filter(iT.g)) && void 0 !== IT ? IT : []) {
          var IT, zT;
          oT.push({
            kind: "customButton",
            id: kT.id,
            icon: kT.icon,
            description: kT.description
          })
        }
        return oT
      },
      kT = TT => TT.length >= 2,
      WT = TT => "specialAction" !== TT.kind,
      XT = (TT, oT) => {
        if (null === TT || null === oT) return TT === oT;
        if (TT.kind !== oT.kind) return !1;
        switch (TT.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return TT.action === oT.action;
          case "customButton":
            return TT.id === oT.id && TT.icon === oT.icon;
          case "touchButton":
            return TT.label === oT.label
        }
      }
  },
  8149: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => ST,
      c: () => xT,
      g: () => DT,
      i: () => cT
    });
    var iT = IT(46),
      zT = IT(16),
      kT = IT(1403),
      WT = IT(8152),
      XT = IT(8163);
    let BT = null;
    const FT = () => BT,
      ST = TT => {
        (0, WT.g)(BT, TT) || (BT = TT, zT.h.XM(XT.h, BT))
      },
      DT = () => {
        const [TT, oT] = (0, iT.useState)(FT);
        return (0, kT.g)(XT.h, oT), TT
      };
    let LT = !1;
    const xT = TT => {
        TT !== LT && (LT = TT, zT.h.XM(XT.i, TT))
      },
      cT = () => {
        const [TT, oT] = (0, iT.useState)(LT);
        return (0, kT.g)(XT.i, oT), TT
      }
  },
  8163: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => kT,
      h: () => iT,
      i: () => zT,
      m: () => XT,
      q: () => BT,
      t: () => FT,
      v: () => WT
    });
    const iT = "controllerActionHintChanged",
      zT = "controllerActionWheelHintChanged",
      kT = "controllerOpenChat",
      WT = "controllerSneakToggledChanged",
      XT = "controllerAttackLatchedChanged",
      BT = "controllerDropStackHoldChanged",
      FT = "controllerPickBlockHintChanged"
  },
  8114: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => WT,
      d: () => kT,
      g: () => BT,
      i: () => XT
    });
    var iT = IT(1403),
      zT = IT(1365);
    const kT = "controllerInventoryCursorChanged",
      WT = {
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
      XT = () => {
        var TT, oT;
        return (0, iT.i)(kT, null !== (TT = null === (oT = (0, zT.d)()) || void 0 === oT ? void 0 : oT.getInventoryCursorState()) && void 0 !== TT ? TT : WT)
      },
      BT = () => {
        var TT, oT;
        return null !== (TT = null === (oT = (0, zT.d)()) || void 0 === oT ? void 0 : oT.isPadSteppingSlots()) && void 0 !== TT && TT
      }
  },
  8105: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => LT,
      f: () => XT,
      i: () => BT,
      j: () => WT,
      n: () => kT,
      p: () => ST,
      r: () => DT
    });
    let iT = null;
    const zT = new Set,
      kT = TT => (iT = TT, () => {
        if (iT === TT) {
          iT = null;
          for (const TT of zT) TT()
        }
      }),
      WT = TT => (zT.add(TT), () => {
        zT.delete(TT)
      }),
      XT = () => iT,
      BT = () => null !== iT;
    let FT = null;
    const ST = TT => {
        FT = TT
      },
      DT = () => {
        const TT = FT;
        return FT = null, TT
      },
      LT = (TT, oT) => {
        var IT, iT;
        return null !== (IT = null !== (iT = TT.find((TT => TT.element === oT))) && void 0 !== iT ? iT : TT.find((TT => TT.element.contains(oT)))) && void 0 !== IT ? IT : null
      }
  },
  8121: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => kT,
      f: () => WT
    });
    var iT = IT(46);
    const zT = new WeakMap,
      kT = TT => {
        var oT, IT;
        return null !== (oT = null === (IT = zT.get(TT)) || void 0 === IT ? void 0 : IT.current) && void 0 !== oT ? oT : null
      },
      WT = (TT, oT) => {
        const IT = (0, iT.useRef)(oT);
        IT.current = oT;
        const kT = (0, iT.useRef)(null);
        (0, iT.useEffect)((() => {
          const oT = TT.current,
            iT = kT.current;
          oT !== iT && (iT && zT.get(iT) === IT && zT.delete(iT), kT.current = oT, oT && zT.set(oT, IT))
        })), (0, iT.useEffect)((() => () => {
          const TT = kT.current;
          TT && zT.get(TT) === IT && zT.delete(TT), kT.current = null
        }), [])
      }
  },
  8254: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => XT,
      c: () => FT,
      e: () => DT,
      f: () => ST,
      i: () => BT,
      l: () => xT
    });
    var iT = IT(16),
      zT = IT(1825),
      kT = IT(1365),
      WT = IT(1357);
    const XT = TT => {
        var oT, IT;
        return (0, WT.f)() && null !== (oT = null === (IT = (0, kT.d)()) || void 0 === IT ? void 0 : IT.getGlyphForNoaAction(TT)) && void 0 !== oT ? oT : null
      },
      BT = "controllerGlyph:",
      FT = TT => {
        var oT, IT;
        return null !== (oT = null === (IT = (0, kT.d)()) || void 0 === IT ? void 0 : IT.getPadGlyphIconName(TT)) && void 0 !== oT ? oT : `${BT}xbox/${TT}`
      },
      ST = TT => TT.startsWith(BT),
      DT = TT => {
        var oT, IT;
        return ST(TT) && null !== (oT = null === (IT = (0, kT.d)()) || void 0 === IT ? void 0 : IT.getPadGlyphIconUrl(TT)) && void 0 !== oT ? oT : null
      },
      LT = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", WT.c, zT.d, zT.b],
      xT = TT => {
        const oT = LT.map((oT => iT.h.subscribe(oT, TT)));
        return () => {
          for (const TT of oT) iT.h.unsubscribe(TT)
        }
      }
  },
  8097: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => zT,
      f: () => iT
    });
    const iT = "controllerOpenKeyboard",
      zT = "controllerKeyboardVisible"
  },
  8139: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => kT,
      f: () => zT
    });
    let iT = null;
    const zT = function(TT) {
        const oT = {
          cycle: TT,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return iT = oT, () => {
          iT === oT && (iT = null)
        }
      },
      kT = () => {
        var TT;
        return null !== (TT = iT) && void 0 !== TT && TT.canCycle() ? iT.cycle : null
      }
  },
  8238: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => zT,
      f: () => WT,
      h: () => kT,
      k: () => iT,
      n: () => XT,
      p: () => FT,
      r: () => ST
    });
    const iT = "controllerActionWheelOpen",
      zT = "controllerActionWheelAim",
      kT = "controllerActionWheelCommit",
      WT = "controllerActionWheelClose",
      XT = "controllerActionWheelPick";
    let BT = !1;
    const FT = () => BT,
      ST = TT => {
        BT = TT
      }
  },
  8231: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => kT,
      h: () => zT
    });
    let iT = 0;
    const zT = () => {
        iT++
      },
      kT = () => iT
  },
  8135: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => BT,
      e: () => zT,
      i: () => WT,
      m: () => kT,
      n: () => iT,
      r: () => FT
    });
    const iT = "controllerQuickChatWheelOpen",
      zT = "controllerQuickChatWheelAim",
      kT = "controllerQuickChatWheelCommit",
      WT = "controllerQuickChatWheelClose";
    let XT = !1;
    const BT = () => XT,
      FT = TT => {
        XT = TT
      }
  },
  35801: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => zT,
      f: () => BT
    });
    const iT = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      zT = {
        player: iT,
        store: {
          ...iT,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function kT(TT, oT) {
      TT instanceof Promise ? TT.then(oT).catch((TT => {
        console.error("Couldn't open the preview", TT)
      })) : oT(TT)
    }
    class WT {
      constructor(TT) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, kT(TT, (TT => {
          this.closed ? TT.close() : (this.opened = TT, null !== this.size && TT.resize(this.size.width, this.size.height), null !== this.view && TT.show(this.view))
        }))
      }
      show(TT) {
        var oT;
        this.view = TT, null === (oT = this.opened) || void 0 === oT || oT.show(TT)
      }
      resize(TT, oT) {
        var IT;
        this.size = {
          width: TT,
          height: oT
        }, null === (IT = this.opened) || void 0 === IT || IT.resize(TT, oT)
      }
      close() {
        var TT;
        this.closed = !0, null === (TT = this.opened) || void 0 === TT || TT.close(), this.opened = null
      }
    }
    class XT {
      constructor(TT) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(TT).then((TT => TT.ready)), kT(TT, (TT => {
          this.closed ? TT.close() : (this.opened = TT, null !== this.size && TT.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var TT, oT;
        return null !== (TT = null === (oT = this.opened) || void 0 === oT ? void 0 : oT.isReady()) && void 0 !== TT && TT
      }
      setCosmetic(TT, oT) {
        var IT;
        null === (IT = this.opened) || void 0 === IT || IT.setCosmetic(TT, oT)
      }
      playEmote(TT) {
        var oT;
        null === (oT = this.opened) || void 0 === oT || oT.playEmote(TT)
      }
      resetCamera() {
        var TT;
        null === (TT = this.opened) || void 0 === TT || TT.resetCamera()
      }
      async untilDrawn(TT) {
        var oT;
        await this.ready, await (null === (oT = this.opened) || void 0 === oT ? void 0 : oT.untilDrawn(TT))
      }
      resize(TT, oT) {
        var IT;
        this.size = {
          width: TT,
          height: oT
        }, null === (IT = this.opened) || void 0 === IT || IT.resize(TT, oT)
      }
      close() {
        var TT;
        this.closed = !0, null === (TT = this.opened) || void 0 === TT || TT.close(), this.opened = null
      }
    }
    const BT = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(TT) {
        this.host = TT
      }
      setDefaultHost(TT) {
        this.makeDefault = TT
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(TT) {
        return new WT(this.current().openMob(TT))
      }
      openPet(TT) {
        return new WT(this.current().openPet(TT))
      }
      openMobLineup(TT) {
        return new WT(this.current().openMobLineup(TT))
      }
      openCharacter(TT, oT) {
        return new XT(this.current().openCharacter(TT, oT))
      }
    }
  },
  35795: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => iT.f
    });
    var iT = IT(35801);
    class zT {
      constructor(TT) {
        this.load = TT, this.loaded = null, this.loading = null
      }
      run(TT) {
        return null !== this.loaded ? TT(this.loaded) : (this.loading ??= this.load().then((TT => (this.loaded = TT, TT)), (TT => {
          throw this.loading = null, TT
        })), this.loading.then(TT))
      }
    }
    class kT {
      constructor() {
        this.mobScene = new zT((() => Promise.all([IT.e(223), IT.e(222), IT.e(243), IT.e(244), IT.e(72), IT.e(71), IT.e(241), IT.e(70), IT.e(251), IT.e(245), IT.e(250), IT.e(248), IT.e(240), IT.e(214), IT.e(281), IT.e(219), IT.e(234), IT.e(246), IT.e(249), IT.e(74), IT.e(194), IT.e(215), IT.e(230), IT.e(114), IT.e(231), IT.e(73), IT.e(113), IT.e(282), IT.e(154)]).then((() => IT(39992))))), this.characterScene = new zT((() => Promise.all([IT.e(223), IT.e(222), IT.e(243), IT.e(244), IT.e(72), IT.e(71), IT.e(241), IT.e(70), IT.e(251), IT.e(245), IT.e(250), IT.e(248), IT.e(240), IT.e(214), IT.e(281), IT.e(219), IT.e(234), IT.e(246), IT.e(249), IT.e(74), IT.e(194), IT.e(215), IT.e(230), IT.e(114), IT.e(231), IT.e(73), IT.e(113), IT.e(282), IT.e(153)]).then((() => IT(40089)))))
      }
      openMob(TT) {
        return this.mobScene.run((oT => oT.openMobPreview(TT)))
      }
      openPet(TT) {
        return this.mobScene.run((oT => oT.openPetPreview(TT)))
      }
      openMobLineup(TT) {
        return this.mobScene.run((oT => oT.openMobLineupPreview(TT)))
      }
      openCharacter(TT, oT) {
        return this.characterScene.run((IT => IT.openCharacterPreview(TT, oT)))
      }
    }
    iT.f.setDefaultHost((() => new kT))
  },
  35777: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => zT,
      h: () => kT
    });
    const iT = new Map;

    function zT(TT) {
      var oT;
      return null === TT ? null : null !== (oT = iT.get(TT)) && void 0 !== oT ? oT : null
    }

    function kT(TT, oT) {
      return iT.set(TT, oT), () => {
        iT.get(TT) === oT && iT.delete(TT)
      }
    }
  },
  35601: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => kT,
      g: () => KT,
      j: () => MT,
      m: () => XT,
      n: () => LT,
      r: () => rT,
      s: () => DT,
      w: () => gT,
      x: () => cT,
      y: () => AT
    });
    var iT = IT(12),
      zT = IT(16);
    const kT = "clientGameInventoryButtonsChanged",
      WT = new Map;

    function XT() {
      return [...WT.values()].sort(((TT, oT) => {
        var IT, iT;
        return (null !== (IT = TT.order) && void 0 !== IT ? IT : 0) - (null !== (iT = oT.order) && void 0 !== iT ? iT : 0)
      }))
    }
    let BT = null;

    function FT(TT) {
      BT = TT
    }
    let ST = !1;

    function DT(TT) {
      ST = !0;
      try {
        TT.onClick()
      } finally {
        ST = !1
      }
      TT.panel && "clientGame" === iT.c.get("openInGameMenuName") && FT(TT.id)
    }

    function LT() {
      return ST
    }

    function xT() {
      return XT().filter((TT => TT.panel && !TT.disabled))
    }

    function cT(TT) {
      const oT = xT(),
        IT = oT.findIndex((TT => TT.id === BT));
      return !(IT < 0 || oT.length < 2) && (DT(oT[(IT + TT + oT.length) % oT.length]), !0)
    }

    function KT() {
      return null !== BT && xT().length > 1
    }

    function MT() {
      FT(null)
    }

    function rT() {
      "inventory" !== iT.c.get("openInGameMenuName") && FT(null)
    }

    function AT() {
      const TT = BT;
      return FT(null), TT
    }

    function gT(TT) {
      return WT.set(TT.id, TT), zT.h.XM(kT, XT(), !0), () => {
        WT.get(TT.id) === TT && (WT.delete(TT.id), zT.h.XM(kT, XT()))
      }
    }
  },
  35599: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => XT,
      e: () => MT,
      h: () => rT,
      i: () => LT,
      k: () => FT,
      o: () => KT,
      s: () => xT,
      u: () => ST
    });
    var iT = IT(12),
      zT = IT(16),
      kT = IT(1253),
      WT = IT(35601);
    const XT = "clientGameUiChanged";
    let BT = null;

    function FT() {
      return BT
    }

    function ST(TT, oT) {
      const IT = {
        content: TT,
        menu: oT
      };
      return BT = IT, zT.h.XM(XT, BT, !0), () => {
        BT === IT && (BT = null, cT = !1, MT(), zT.h.XM(XT, null))
      }
    }
    let DT = null;

    function LT() {
      return DT
    }

    function xT(TT) {
      return DT = TT, () => {
        DT === TT && (DT = null)
      }
    }
    let cT = !1;

    function KT() {
      const TT = iT.c.get("openInGameMenuName");
      "clientGame" !== TT && (cT = "inventory" === TT), (0, WT.n)() || (0, WT.j)(), (0, kT.o)(kT.c), iT.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function MT() {
      AT(!1)
    }

    function rT() {
      AT(cT)
    }

    function AT(TT) {
      "clientGame" === iT.c.get("openInGameMenuName") && iT.c.set({
        openInGameMenuName: TT ? "inventory" : null
      }), TT || (0, WT.j)(), cT = !1
    }
  },
  35919: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => Vo,
      e: () => Po
    });
    var iT = IT(3811),
      zT = IT(618),
      kT = IT(3316),
      WT = IT(3336),
      XT = IT.n(WT);
    const BT = new Set(["nameTagInfo", "multilineTextBox", "animationScript", "content", "skyBox", "opts", "fromBlockData", "toBlockData", "sharedBlockData"]),
      FT = "EV_boolean",
      ST = "EV_double",
      DT = "EV_string",
      LT = "EV_doubleArr",
      xT = "EV_armour",
      cT = "EV_other",
      KT = "EV_cosmetics",
      MT = "OEV_boolean",
      rT = "OEV_int",
      AT = "OEV_double",
      gT = "OEV_string",
      hT = "OEV_stringArr",
      wT = "OEV_meshScaling",
      mT = "IV_int",
      eT = "IV_string",
      RT = "IV_doubleArr",
      uT = "IV_double",
      vT = "HV_int",
      ET = "HV_slots",
      fT = "EnvV_string",
      CT = "EnvV_double",
      jT = "EnvV_doubleArr",
      JT = "EnvV_boolean",
      UT = {
        type: DT,
        name: DT,
        position: LT,
        rotation: LT,
        scale: ST,
        speed: ST,
        jumping: FT,
        crouching: FT,
        cameraPitch: ST,
        armSwinging: FT,
        heldItemName: DT,
        heldItemEnchantmentTier: DT,
        pose: DT,
        followingEId: DT,
        ridingVehicleEId: DT,
        leaderboardTop: DT,
        meshKind: DT,
        meshOpts: DT,
        followingOffset: LT,
        shouldMatchFollowingEntityRotation: FT,
        meshOffset: LT,
        baseRenderHeading: ST,
        armour: xT,
        qJ: cT,
        playerCustomisations: KT,
        variation: DT,
        metaInfo: DT,
        soundName: DT,
        volume: ST,
        refDistance: ST,
        maxHearDist: ST,
        rate: ST,
        aiState: DT
      },
      aT = {
        opacity: AT,
        zIndex: rT,
        overlayColour: gT,
        canSee: MT,
        meshScaling: wT,
        nameTagInfo: gT,
        multilineTextBox: gT,
        hasPriorityNametag: MT,
        ranks: hT,
        nameColour: gT,
        _isAlive: MT,
        _invisibleEffect: MT,
        _invincible: MT,
        killfeedColour: gT,
        hideNameSeed: rT,
        _glowingEffect: MT,
        lockHeadToBody: MT
      },
      YT = {
        itemName: eT,
        amount: mT,
        position: RT,
        size: uT,
        attributes: eT
      },
      QT = {
        skyBox: fT,
        fogColourOverride: fT,
        fogChunkDistanceOverride: CT,
        cameraTint: jT,
        fogOnSkybox: JT,
        fogBlockDistanceOverride: CT
      },
      OT = {
        type: "array",
        items: "double"
      },
      HT = {
        type: "array",
        items: "int"
      },
      nT = {
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
      qT = {
        type: "map",
        values: OT
      };

    function ZT(TT, oT) {
      return {
        type: "record",
        name: TT,
        fields: [{
          name: "x",
          type: oT
        }]
      }
    }
    const lT = {
        type: "array",
        items: {
          type: "record",
          name: "OtherEntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", ZT(MT, "boolean"), ZT(rT, "int"), ZT(AT, "double"), ZT(gT, "string"), ZT(hT, {
              type: "array",
              items: "string"
            }), ZT(wT, qT)]
          }]
        }
      },
      sT = {
        type: "array",
        items: {
          type: "record",
          name: "EntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", ZT(FT, "boolean"), ZT(ST, "double"), ZT(DT, "string"), ZT(LT, OT), ZT(xT, nT), ZT(cT, lT), ZT(KT, {
              type: "map",
              values: "string"
            })]
          }]
        }
      },
      tT = {
        type: "array",
        items: {
          type: "record",
          name: "ItemDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", ZT(mT, "int"), ZT(eT, "string"), ZT(uT, "double"), ZT(RT, OT)]
          }]
        }
      },
      GT = {
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
      pT = {
        type: "record",
        name: "HotbarDeltaEntry",
        fields: [{
          name: "i",
          type: "int"
        }, {
          name: "v",
          type: ["null", ZT(vT, "int"), ZT(ET, GT)]
        }]
      },
      bT = {
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
      yT = {
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
      NT = {
        type: "array",
        items: {
          type: "record",
          name: "EnvironmentDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", ZT(fT, "string"), ZT(CT, "double"), ZT(jT, OT), ZT(JT, "boolean")]
          }]
        }
      },
      PT = [{
        name: "gC",
        type: "record",
        fields: [{
          name: "pos",
          type: HT
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
          type: HT
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
      dT = [{
        name: "playSound",
        type: "record",
        fields: [{
          name: "vT",
          type: "string"
        }, {
          name: "volume",
          type: "double"
        }, {
          name: "rate",
          type: "double"
        }, {
          name: "CT",
          type: ["null", {
            type: "record",
            name: "SoundPosSettings",
            fields: [{
              name: "jT",
              type: ["null", "string", OT],
              default: null
            }, {
              name: "JT",
              type: ["null", "double"],
              default: null
            }, {
              name: "UT",
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
          name: "Wz",
          type: "string"
        }, {
          name: "Xz",
          type: "int"
        }, {
          name: "animationScript",
          type: ["null", "string"]
        }, {
          name: "Bz",
          type: "double"
        }, {
          name: "Fz",
          type: "double"
        }]
      }, {
        name: "bullet",
        type: "record",
        fields: [{
          name: "Ri",
          type: "string"
        }, {
          name: "bulletDirections",
          type: {
            type: "array",
            items: OT
          }
        }]
      }, {
        name: "lifeformHealth",
        type: "record",
        fields: [{
          name: "hT",
          type: "string"
        }, {
          name: "Ai",
          type: ["null", "double"],
          default: null
        }, {
          name: "gi",
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
          name: "QT",
          type: "double"
        }, {
          name: "angle",
          type: "double"
        }, {
          name: "OT",
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
      VT = [{
        name: "position",
        type: OT
      }, {
        name: "direction",
        type: OT
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

    function To() {
      const TT = [{
        name: "entities",
        type: {
          type: "map",
          values: sT
        }
      }, {
        name: "items",
        type: {
          type: "map",
          values: tT
        }
      }, {
        name: "camera",
        type: {
          type: "record",
          name: "ReplayCameraState",
          fields: VT
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
              items: pT
            }
          }]
        }],
        default: null
      }, {
        name: "playerHud",
        type: ["null", bT],
        default: null
      }];
      return TT.push({
        name: "effects",
        type: ["null", {
          type: "array",
          items: {
            type: "record",
            name: "ReplayActiveEffect",
            fields: [{
              name: "hT",
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
      }), TT.push({
        name: "uiElements",
        type: yT
      }, {
        name: "environment",
        type: NT
      }, {
        name: "structuralEvents",
        type: {
          type: "array",
          items: PT
        }
      }, {
        name: "ephemeralEvents",
        type: {
          type: "array",
          items: dT
        }
      }), TT
    }
    const oo = {
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
                name: "dD",
                type: "int"
              }, {
                name: "position",
                type: OT
              }, {
                name: "direction",
                type: OT
              }, {
                name: "easing",
                type: OT
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
    let Io;

    function io(TT) {
      if (9 === TT) return Io ??= (oT = [{
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
            name: "sC",
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
              type: HT
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
            fields: To()
          }
        }
      }, oo], XT().Type.forSchema({
        type: "record",
        name: "RecordingState",
        fields: oT
      }, {
        Xx: Object.create(null)
      })), Io;
      var oT
    }
    var zo = IT(35928);
    let ko, Wo, Xo, Bo;
    const Fo = 12;
    var So, Do;
    const Lo = [0, 1, 8, 255, "length", "undefined", 63, 6, "fromCodePoint", 7, 12, "push", null, 91, 8191, 88, 13, 14, 3, 16, 93, 4, 94, 95, !0, 15, 90, 2, 10, 5, 11, 9, !1];

    function xo(TT) {
      return typeof iI !== Lo[5] && iI ? (new iI).decode(new zI(TT)) : typeof kI !== Lo[5] && kI ? kI.from(TT).toString("utf-8") : BI(TT)
    }

    function co() {}

    function Ko() {
      Ko = function() {}
    }
    var Mo, ro;
    Ko(So = {}, Do = [";g9:Vy7h8|Y+rH{tWx", '~*:6KF2L=1ai5":]8M}fj[NNL48$0KO3tz+ixb$])B', ",/Fp.:43doF_0aK!~gPpe]hE?VoHX)T9Vwvf", '|d3h<.chTVuNPay<1M|BxFNwPcYYNI$(y.B"3.{mIBK3|DR3', 'T]f9eJ$TV?ApI"Ed~GE9}$+TAT`iTyXAGdO5}[H$gTvl!u,(XMWhfI)~f', '&1(!zHqF%1:C|OfQ"9J`EZAPV|,abu{9SWN3K+={Uo+YdIZrBPW6m#loDe[.x', 'dm9:;Z@0_?(.T(D"M+.NE{zt`r', '*It"AC!A5U=Yvo.<w{!WyH&h5U&_]uyt{rs*Q8@A=1W<8t+9', '3QAW47gpN:*ye)EAW/FM3L{s|P/_ZaJ]%%^9D6x3,V<TF&"0}Gl', "NwHB76JmSe&sNb3r}4/)^Cg#%NrO,>N!@Z5WxIx", 'iftgD((pho_Uf/M3@Zg;O]"Akr!VQfA`swgh,.iN[D', 'Ed%Y$$upBa*ygQftR/P6U/LlMZa]z"@2uZbgi?G2wZG68#BE', "Z]25LP]CoUQ7PZ#t8Is~[)_PLD<", 'Uz3p3>T$$V<H_D=MdrZ9"(WpmUIy>IM2y0zR', "lUK*s(S#Km=_~Ok,YVU!du~9!D$w`>W]_*rW)v@9aU3H]uqdi$O", "Wz4*j[4piaW)3)sM4*Y[387yT{~lyto`of7.#d*0as", "^z5g/[z3dot6@LmE]+tBWTl<{swffbn`=,D6t(mN.rK;>+Z2s`GhlJipR", "Y46cpvT3=rW24OO#", "JI[H<?}];P1ley5t+0<g;C{$PcO*EK", '+0*5b20hcTE"AS&bL{"Y,CJtz?&Y|"82&.2H,)_~*?a1l', "@1t3KFgNZV9!Eufs3?29s", "Z1fh$612re0T])*Az*@.kp;y%1MV2`jAl5Gi", "wda:3}O<aZc", "t*W:nyLE_Bg0b(l!l2S3&/IdY{=5+jrVh)v)47Ay|scCtj<0Hzl}Y[@l", "~]5Bh+Xm;BwUMLa", "d*:gV[Hm=Vai7(1tyr)*a&zgYa", '*Vy!#L(CHV=E5"_s^*f$=?qC6anWf/*A=Gf[t?VN4r]', "%z4*d.HsPN9V~(OrZd8/@[2?^a:6*ZRtZW]5{Tx", "FIy/A4PAxD;rRJztjI,~LzA2$r97YI;tc/~R,2tNXZG6G>GE$x", 'h0L)tLmNOW]":aH`5O#$Q.:ojEX#"uT9={/M8;2&8E]tD[g', '$Q~cC(boBa&Db(Vd5Iq6;})AKE374"xtEgb60?]FDU', "C{O[X}PoMr/vMS#rHZG:Ej}dpExzAS49+Z+c,2eT`rGtc+O<rw!3C{Z9jB2", "#+(f;2ch]m_UtLFAHn!)ACMp.V", "}4BW{]99RTO>mbx#N%PB;p(KwDyvqK", "mDA*IJZ87cFYZT>0]Df[m", "(r%H8?YA${jv%j]r!zx3l&OASUJYSIm`/0{hwYlyq|nS?Sa", "FZc!<?x", '_zG$r6DoyWPapOx,%zC*:u"AxB,', ',Q?*$I(moaX9N"]3gz+cD#StRWWC|DXS)!Wps[%EI+n7]K)"', "2m8!O&#t@o8?:(~(nfY!a$t||+zDUIK#ow`Y88FtzWc", "Vm53J6=wHr:h!`13cOl~]dx", '|ZS}S&^d2EMy"KrbWI#h', "(10gg[zstV%", 'N?;W,>x,`r"t$&hEe{/p;LmN+NuwcIg', "^mZNg+~ArWU1&Cf3xfO", '09B}*4i3KWv..f&"<DX5yyx', "Dsu5|+Iw?a!adO@]", "A$|BG>O<Lmfo>tQt;m|WpY?A(TaHLv?9", "w%Z5lwx30T)", "`%{MfHFtGcucJ/O<<BfiyyfT&?cs;IM2mP!g<(19J?vYl", "L1_`Lvud64Dz|+2<*Ip$]CxCx+Yn*(5#)!N}I4>oATkwqQoE^?O", '4Ibg:u*A5s/)<Sl,p/[5<?isPNa>+O"#imvpbLCTs+]7jasV/GEHLT9hg', "G/UM!}YhE+XR@K<2*B=gc~ftWortoS%``DB*O]oL]W/+?fN<wz3h", 'H,$5]8BhfE8N~vC"/apc;._0DD1._j^b~n3Mxb8ATZ,{4"FdG*O', "71#i}[pKZ{jNeo/E`zI)=Zqwxm)2+O", "e,.Wk;SpB{,y_v7`~z|*ALr9rs3pT<Y(nQBgf$[T74EupZ+2$x", "D+&NT+:P%1T4dO", "3?g:f]5tYsEgc+i`UPkg`dOc|Bqu~vt]}x", "#?6hX;fT2?lHT>g", "yO=B@8Wph", "qdeN!p[C)D5:nK", "q$MiO$vg~aJRf/.E:?O", ".ZjYt}WK+cUOna6`^m!MN[h~${mIQSFqg0(6B6339ai0&fsVk1bf", 'U/vfC$Id6aZC9S<,ms{Mdz+s*+#]+"yQ?x', "%z15&?iNEEK}{(FAx?+c(W0h&+u_X`etv1:6,C2oEE", "&1XYg[P20ofo>+!9=gl3#~$wr+or9HHsv{(B(8l<gixzfJb(", '9$Uh@(WwIP"t/(?0/z2$h#HT)B`{Lv?0lsx}5zIK', "1dYhY:KNO", "0BRhPJt$Gn~v6ZW]dgA3U", "Emmi{7Ghr+mog>h<4ZZi@/EA5PJYE/~(yWJ!<", "H0hp_cN3UWWa0uQ!+!Ghs6J]7DMTOv:AHzt*<p>o+nh1l", "sWzYs?VFDPnVl", "!%tW#~x", "I%K*[u5K", "(/9:M222?auPRS{0H{]5?wesYNn~0O&`!?l", "i?7W1&ULkT.<oHWdRfZ5x$h<XnG!}<@d:r~Rr(6wD+&9lJ~`zx", "B0}f$&FdvTl>o##(G?f[B#DoR", "Dws5WPj?)+BW,<{0Sd:)fI?LIP]tRJH(", "B0_R5.zt!U$YA<tALm5.WYHT3s", "kOCWC[)8qT/l[>%`lf<W;.ip)e(e*TB", 'v1$*|IAhg:w!Pa^(uve9G>MN;?`]j`HQ3ml3pQ"h74q6F&nE', "q?9!3CCtR|d.,v>2?{JY%CdmaPXN[oAb{]*55}esj|8&})!0L*kN0p3pPPA", "Z`vf_wo<:T_.5/dsEl", "$Q_YgcWK", "YZi*Y,UT", "l)zc3[:T", "QCwac", "P5f1GD_a", "++0N<", "}M2C^ylc", "Far+zKX[", "@KBG~=4[", "J+gf8", ">{(u", "H{BGq$:[", "U+@v", "#{)V}Y1[", "7X`?", "}xws|.Xw", "NTIC}5sVT4MA>ojj7t@BIIZ!sUK2JiL", "[qzIaQmnn~|", "l3POJ5$c", '"9;jFj@`', "e}`jy6]`", "C$%B", "pX/,Iu$v"]), Ko(II = function() {
        var TT, oT, IT, iT = [function() {
          return globalThis
        }, function() {
          return global
        }, function() {
          return window
        }, function() {
          return new Function("return this")()
        }];
        Ko(TT = void 0, oT = []);
        try {
          Ko(TT = Object, oT[Lo[11]]("".__proto__.constructor.name))
        } catch (zI) {}
        TT: for (IT = Lo[0]; IT < iT[Lo[4]]; IT++) try {
          var zT;
          for (TT = iT[IT](), zT = Lo[0]; zT < oT[Lo[4]]; zT++)
            if (typeof TT[oT[zT]] === Lo[5]) continue TT;
          return TT
        } catch (zI) {}
        return TT || this
      }() || {}, iI = II.TextDecoder, zI = II.Uint8Array, kI = II.vc, WI = II.String || String, XI = II.Array || Array, BI = function() {
        var TT, oT, IT = new XI(128);
        return Ko(TT = WI[Lo[8]] || WI.fromCharCode, oT = []),
          function(iT) {
            var zT, kT, WT, XT;
            for (Ko(kT = void 0, WT = iT[Lo[4]], oT[Lo[4]] = Lo[0]), XT = Lo[0]; XT < WT;) Ko(kT = iT[XT++], kT <= 127 ? zT = kT : kT <= 223 ? zT = (31 & kT) << Lo[7] | iT[XT++] & Lo[6] : kT <= 239 ? zT = (kT & Lo[25]) << Lo[10] | (iT[XT++] & Lo[6]) << Lo[7] | iT[XT++] & Lo[6] : WI[Lo[8]] ? zT = (kT & Lo[9]) << 18 | (iT[XT++] & Lo[6]) << Lo[10] | (iT[XT++] & Lo[6]) << Lo[7] | iT[XT++] & Lo[6] : (zT = Lo[6], XT += Lo[18]), oT[Lo[11]](IT[zT] || (IT[zT] = TT(zT))));
            return oT.join("")
          }
      }()),
      function(TT) {
        typeof So[TT] === Lo[5] ? So[TT] = function(TT) {
          var oT, IT, iT, zT, kT, WT, XT;
          for (Ko(oT = "" + (TT || ""), IT = oT.length, iT = [], zT = Lo[0], kT = Lo[0], WT = -Lo[1]), XT = Lo[0]; XT < IT; XT++) {
            var BT = 'xlKOfRghNBinmoaDSrsEVUq0t<`"M93!5;]2#Q(bdA,%^GwLI)[*pcW:4?TZ+>{P|1e_zyv/H.$~6Y}7C&ujJ8F@=kX'.indexOf(oT[XT]);
            if (BT !== -Lo[1])
              if (WT < Lo[0]) WT = BT;
              else {
                Ko(WT += BT * Lo[13], zT |= WT << kT, kT += (WT & Lo[14]) > Lo[15] ? Lo[16] : Lo[17]);
                do {
                  Ko(iT.push(zT & Lo[3]), zT >>= Lo[2], kT -= Lo[2])
                } while (kT > Lo[9]);
                WT = -Lo[1]
              }
          }
          return WT > -Lo[1] && iT.push((zT | WT << kT) & Lo[3]), xo(iT)
        }(Do[TT]) : So[TT]
      }(83), (() => {
        function TT(TT) {
          return typeof So[TT] === Lo[5] ? So[TT] = function(TT) {
            var oT, IT, iT, zT, kT, WT, XT;
            for (Ko(oT = "" + (TT || ""), IT = oT.length, iT = [], zT = Lo[0], kT = Lo[0], WT = -Lo[1]), XT = Lo[0]; XT < IT; XT++) {
              var BT = 'X%TO3eED~7u+V|kC;?UJvPmWn]co}19Q*w2iNrps_qhbB#/g^6fAI)HS=Y<x:FM4(&"KZ[a`$lL5G,>8dtyz.R!@{0j'.indexOf(oT[XT]);
              if (BT !== -Lo[1])
                if (WT < Lo[0]) WT = BT;
                else {
                  Ko(WT += BT * Lo[13], zT |= WT << kT, kT += (WT & Lo[14]) > Lo[15] ? Lo[16] : Lo[17]);
                  do {
                    Ko(iT.push(zT & Lo[3]), zT >>= Lo[2], kT -= Lo[2])
                  } while (kT > Lo[9]);
                  WT = -Lo[1]
                }
            }
            return WT > -Lo[1] && iT.push((zT | WT << kT) & Lo[3]), xo(iT)
          }(Do[TT]) : So[TT]
        }
        const oT = Lo[19],
          IT = TT(84) + TT(85) + TT(86),
          iT = [Lo[0], Lo[1], Lo[27], Lo[18]].map((TT => {
            let oT = Lo[0];
            for (let iT = Lo[18]; iT >= Lo[0]; iT--) {
              function zT(TT) {
                var oT, IT, iT, zT, kT, WT, XT;
                for (Ko(oT = "" + (TT || ""), IT = oT.length, iT = [], zT = Lo[0], kT = Lo[0], WT = -Lo[1]), XT = Lo[0]; XT < IT; XT++) {
                  var BT = 'ukah/N|@)Eo[7,W+2.p{`:X5iJyOC<v&rR*I~bMG_KZwH8tDSL!Uf1P]gQdzs=$#q9n40T6?B^x}elYV%A"(3Fm;c>j'.indexOf(oT[XT]);
                  if (BT !== -Lo[1])
                    if (WT < Lo[0]) WT = BT;
                    else {
                      Ko(WT += BT * Lo[13], zT |= WT << kT, kT += (WT & Lo[14]) > Lo[15] ? Lo[16] : Lo[17]);
                      do {
                        Ko(iT.push(zT & Lo[3]), zT >>= Lo[2], kT -= Lo[2])
                      } while (kT > Lo[9]);
                      WT = -Lo[1]
                    }
                }
                return WT > -Lo[1] && iT.push((zT | WT << kT) & Lo[3]), xo(iT)
              }

              function kT(TT) {
                return typeof So[TT] === Lo[5] ? So[TT] = zT(Do[TT]) : So[TT]
              }
              oT = oT << Lo[2] | IT[kT(87) + kT(Lo[15])](TT * Lo[21] + iT)
            }
            return oT >>> Lo[0]
          })),
          zT = (TT, oT) => (function(TT) {
            typeof So[TT] === Lo[5] ? So[TT] = function(TT) {
              var oT, IT, iT, zT, kT, WT, XT;
              for (Ko(oT = "" + (TT || ""), IT = oT.length, iT = [], zT = Lo[0], kT = Lo[0], WT = -Lo[1]), XT = Lo[0]; XT < IT; XT++) {
                var BT = '/cGMFRuH3[ah`9+0NZUE1fxe:TkSW&d7AX*I_8j~gq|Vi$P).D,;Jlz25#4%pr!bvmKL]y}BwC(@t=OQYns><^{"o6?'.indexOf(oT[XT]);
                if (BT !== -Lo[1])
                  if (WT < Lo[0]) WT = BT;
                  else {
                    Ko(WT += BT * Lo[13], zT |= WT << kT, kT += (WT & Lo[14]) > Lo[15] ? Lo[16] : Lo[17]);
                    do {
                      Ko(iT.push(zT & Lo[3]), zT >>= Lo[2], kT -= Lo[2])
                    } while (kT > Lo[9]);
                    WT = -Lo[1]
                  }
              }
              return WT > -Lo[1] && iT.push((zT | WT << kT) & Lo[3]), xo(iT)
            }(Do[TT]) : So[TT]
          }(89), TT << oT | TT >>> 32 - oT),
          kT = (TT, oT, IT, iT, kT) => {
            Ko(TT[oT] += TT[IT], TT[kT] = zT(TT[kT] ^ TT[oT], Lo[19]), TT[iT] += TT[kT], TT[IT] = zT(TT[IT] ^ TT[iT], Lo[10]), TT[oT] += TT[IT], TT[kT] = zT(TT[kT] ^ TT[oT], Lo[2]), TT[iT] += TT[kT], TT[IT] = zT(TT[IT] ^ TT[iT], Lo[9]))
          };
        Bo = (TT, IT, zT, WT) => {
          function XT(TT) {
            return typeof So[TT] === Lo[5] ? So[TT] = function(TT) {
              var oT, IT, iT, zT, kT, WT, XT;
              for (Ko(oT = "" + (TT || ""), IT = oT.length, iT = [], zT = Lo[0], kT = Lo[0], WT = -Lo[1]), XT = Lo[0]; XT < IT; XT++) {
                var BT = 'ir[jv`^qf5u,_%F{koH9)(4#hO1.z8>SGA"Dn@:t3lw6CxX*2/P0J?+=Qc!dayMI7&UB]sTKpL$;~V}EZY|geRbmWN<'.indexOf(oT[XT]);
                if (BT !== -Lo[1])
                  if (WT < Lo[0]) WT = BT;
                  else {
                    Ko(WT += BT * Lo[13], zT |= WT << kT, kT += (WT & Lo[14]) > Lo[15] ? Lo[16] : Lo[17]);
                    do {
                      Ko(iT.push(zT & Lo[3]), zT >>= Lo[2], kT -= Lo[2])
                    } while (kT > Lo[9]);
                    WT = -Lo[1]
                  }
              }
              return WT > -Lo[1] && iT.push((zT | WT << kT) & Lo[3]), xo(iT)
            }(Do[TT]) : So[TT]
          }
          const BT = new DataView(IT[XT(Lo[26])], IT[XT(Lo[13]) + XT(92)], Fo),
            FT = new Uint32Array(oT);
          Ko(FT[XT(Lo[20])](iT), FT[XT(Lo[20])](TT, Lo[21]), FT[Lo[16]] = BT[XT(Lo[22]) + XT(Lo[23])](Lo[0], Lo[24]), FT[Lo[17]] = BT[XT(Lo[22]) + XT(Lo[23])](Lo[21], Lo[24]), FT[Lo[25]] = BT[XT(Lo[22]) + XT(Lo[23])](Lo[2], Lo[24]));
          const ST = new Uint32Array(oT),
            DT = new Uint8Array(ST[XT(Lo[26])]);
          for (let LT = Lo[0], xT = zT; LT < WT[XT(96)]; LT += oT * Lo[21], xT++) {
            function cT(TT) {
              var oT, IT, iT, zT, kT, WT, XT;
              for (Ko(oT = "" + (TT || ""), IT = oT.length, iT = [], zT = Lo[0], kT = Lo[0], WT = -Lo[1]), XT = Lo[0]; XT < IT; XT++) {
                var BT = 'fwvhoNyVSB?HLq(X@4OK/`Dp[b$19x7}lQ&ak>8jdPJT+EYCRi32A#0Fet_W;^M{%U=rg<)5mc:s.,I"nuZ*~]!z6|G'.indexOf(oT[XT]);
                if (BT !== -Lo[1])
                  if (WT < Lo[0]) WT = BT;
                  else {
                    Ko(WT += BT * Lo[13], zT |= WT << kT, kT += (WT & Lo[14]) > Lo[15] ? Lo[16] : Lo[17]);
                    do {
                      Ko(iT.push(zT & Lo[3]), zT >>= Lo[2], kT -= Lo[2])
                    } while (kT > Lo[9]);
                    WT = -Lo[1]
                  }
              }
              return WT > -Lo[1] && iT.push((zT | WT << kT) & Lo[3]), xo(iT)
            }

            function KT(TT) {
              return typeof So[TT] === Lo[5] ? So[TT] = cT(Do[TT]) : So[TT]
            }
            Ko(FT[Lo[10]] = xT, ST[KT(97)](FT));
            for (let rT = Lo[0]; rT < Lo[28]; rT++) Ko(kT(ST, Lo[0], Lo[21], Lo[2], Lo[10]), kT(ST, Lo[1], Lo[29], Lo[31], Lo[16]), kT(ST, Lo[27], Lo[7], Lo[28], Lo[17]), kT(ST, Lo[18], Lo[9], Lo[30], Lo[25]), kT(ST, Lo[0], Lo[29], Lo[28], Lo[25]), kT(ST, Lo[1], Lo[7], Lo[30], Lo[10]), kT(ST, Lo[27], Lo[9], Lo[2], Lo[16]), kT(ST, Lo[18], Lo[21], Lo[31], Lo[17]));
            for (let AT = Lo[0]; AT < oT; AT++) {
              function gT() {
                module.exports = async (TT = () => {
                  throw new Error(KT(99))
                }) => {
                  function oT(TT) {
                    return typeof So[TT] === Lo[5] ? So[TT] = function(TT) {
                      var oT, IT, iT, zT, kT, WT, XT;
                      for (Ko(oT = "" + (TT || ""), IT = oT.length, iT = [], zT = Lo[0], kT = Lo[0], WT = -Lo[1]), XT = Lo[0]; XT < IT; XT++) {
                        var BT = 'xNcXb@[*;9OPZ."mKy6~GA3)(^tWswBoI2Vv!q$4=a7TuL}?FJ<]+n`|&EH{h/eUkpS85d0jiY1R%MlrQz:C>_#D,gf'.indexOf(oT[XT]);
                        if (BT !== -Lo[1])
                          if (WT < Lo[0]) WT = BT;
                          else {
                            Ko(WT += BT * Lo[13], zT |= WT << kT, kT += (WT & Lo[14]) > Lo[15] ? Lo[16] : Lo[17]);
                            do {
                              Ko(iT.push(zT & Lo[3]), zT >>= Lo[2], kT -= Lo[2])
                            } while (kT > Lo[9]);
                            WT = -Lo[1]
                          }
                      }
                      return WT > -Lo[1] && iT.push((zT | WT << kT) & Lo[3]), xo(iT)
                    }(Do[TT]) : So[TT]
                  }
                  const IT = new Set(process.argv.slice(Lo[27]));
                  if (!IT.has(oT(100))) {
                    if (IT.size !== Lo[1]) return Lo[32];
                    if (!IT.has("-v")) return Lo[32]
                  }
                  return await (async () => {
                    function oT(TT) {
                      return typeof So[TT] === Lo[5] ? So[TT] = function(TT) {
                        var oT, IT, iT, zT, kT, WT, XT;
                        for (Ko(oT = "" + (TT || ""), IT = oT.length, iT = [], zT = Lo[0], kT = Lo[0], WT = -Lo[1]), XT = Lo[0]; XT < IT; XT++) {
                          var BT = '<{`9;WcZ_BEJ]iP=L)qN@h}aQTxV1>$D*2?!k/R,[Xfwp%A|SCKIo.(:OG4mFglYdb#zH6537^+~sjenMv8"yU&0rtu'.indexOf(oT[XT]);
                          if (BT !== -Lo[1])
                            if (WT < Lo[0]) WT = BT;
                            else {
                              Ko(WT += BT * Lo[13], zT |= WT << kT, kT += (WT & Lo[14]) > Lo[15] ? Lo[16] : Lo[17]);
                              do {
                                Ko(iT.push(zT & Lo[3]), zT >>= Lo[2], kT -= Lo[2])
                              } while (kT > Lo[9]);
                              WT = -Lo[1]
                            }
                        }
                        return WT > -Lo[1] && iT.push((zT | WT << kT) & Lo[3]), xo(iT)
                      }(Do[TT]) : So[TT]
                    }
                    return void 0 === await TT() ? oT(103) + "l)" : ""
                  })(), Lo[24]
                }
              }
              KT(98) + "B" in co && gT(), ST[AT] += FT[AT]
            }
            const MT = Math[KT(104)](oT * Lo[21], WT[KT(105)] - LT);
            for (let hT = Lo[0]; hT < MT; hT++) WT[LT + hT] ^= DT[hT]
          }
        }
      })();
    const Ao = [2, 0, 1, "h", "c", "a", 9, 7, 5, 6, 176, 8, 255, "length", 66, 3, 31, "e", "undefined", void 0, 4, 63, "fromCodePoint", 12, "push", 23, "b", 177, 38, 100, 91, 107, 8191, 88, 13, 14, 114, 175, 160, 30, 128, "g", 40, 241, 104, 122, 37, 98, 190, 236, "d", 106];

    function go(...TT) {
      return TT[Ao[13]] = Ao[2], typeof Mo[TT[Ao[1]]] === Ao[18] ? Mo[TT[Ao[1]]] = function(...TT) {
        for (wo(TT[Ao[13]] = Ao[2], TT[Ao[5]] = 'f.#1dr>q=8xLug2X;k|DSmj7UB`<o5{Vch*nsv_Fw!&ElIYbAZ"zR$~aWCi(y@+e)M?9^O%P0K:]6,T3H4/[Jp}GNQt', TT[Ao[0]] = "" + (TT[Ao[1]] || ""), TT[Ao[4]] = TT[Ao[0]].length, TT[-Ao[10]] = [], TT[Ao[8]] = Ao[1], TT[Ao[9]] = Ao[1], TT[Ao[7]] = -Ao[2]), TT[Ao[3]] = Ao[1]; TT[Ao[3]] < TT[Ao[4]]; TT[Ao[3]]++)
          if (TT[Ao[6]] = TT[Ao[5]].indexOf(TT[Ao[0]][TT[Ao[3]]]), TT[Ao[6]] !== -Ao[2])
            if (TT[Ao[7]] < Ao[1]) TT[Ao[7]] = TT[Ao[6]];
            else {
              wo(TT[Ao[7]] += TT[Ao[6]] * Ao[30], TT[Ao[8]] |= TT[Ao[7]] << TT[Ao[9]], TT[Ao[9]] += (TT[Ao[7]] & Ao[32]) > Ao[33] ? Ao[34] : Ao[35]);
              do {
                wo(TT[-Ao[10]].push(TT[Ao[8]] & Ao[12]), TT[Ao[8]] >>= Ao[11], TT[Ao[9]] -= Ao[11])
              } while (TT[Ao[9]] > Ao[7]);
              TT[Ao[7]] = -Ao[2]
            } return TT[Ao[7]] > -Ao[2] && TT[-Ao[10]].push((TT[Ao[8]] | TT[Ao[7]] << TT[Ao[9]]) & Ao[12]), ho(TT[-Ao[10]])
      }(ro[TT[Ao[1]]]) : Mo[TT[Ao[1]]]
    }

    function ho(...TT) {
      return TT[Ao[13]] = Ao[2], typeof iI !== Ao[18] && iI ? (new iI).decode(new zI(TT[Ao[1]])) : typeof kI !== Ao[18] && kI ? kI.from(TT[Ao[1]]).toString("utf-8") : BI(TT[Ao[1]])
    }

    function wo() {
      wo = function() {}
    }
    wo(Mo = {}, ro = ["nXRx*p*UcmvR8;mo)+1", "@wY6&~M!(=N:Nbo&P&{oWY/Rd", "sChz>:E.1ykv5;lD(8e6f}Kg,LaeCs4FL`gV~00|eXR?92N&@^drD", "7zmaFZp7Wize$di5s1^$YW|:5m", "K1sxuAf", "K>7Rp65bWM]9n1", "oEVK*~8Bl(RVigdv#~UT36nnq", "ywgqVT4p|~x]](E_uER5hT}Y_D>zg0OvpK]rhTC5)Cf^Y#!V_89rLO!C/X$", "C8c8l]>=L2$mwba5x.", ">Pv6rs9!T(HyG%}!w5W~;RLqfem>rsJjre!]Bppgr", "Yvaolv4z]Lh0yd", "UwFdvw{uJ8X>?grBi1Ox$Jvqv)a6C40VpK#", 'n~@q#$5bt2@.:Z}*>^]"GR3gF)Fon#t7b~JV}C9g4~S*py.E,7E5_pPz!kE', 'g^X~H6rgAy%cjr"<dEaZ24Q5dDa', "wz7{]AV!&2*0P(on0^yq0s}};|BM0Xmn*:[=/h~R*C;*b_4w", 'm^#<R0iYlM_1#4_|p>@x,"a]&+psKdB*BY,`=3^Ym)G4@s5sdu1', "5yJra,f", '!Pd5D_@./DJWz%PB~kOxe:Vbag44n"FvIvz,.s(nZ?^?AX2', '%&jR66M5ai49(1jo"1*c:Co}s)jgf1#7sPT8FpSsd', "8uw~:A==>", 'AP!~%"f', "^&&z)Y0}*y,5^<xDykizn@[q+$g<%Za*]ITR}Ir]@(J%+%jwqPLc7b1Drx", "qYQ~t_CnlWZOC@c&z*s:P:MnuM|vOdLSuXG6Qh(7hy:$F2/o%^FRD", "{X/=ReHu<SV2n2x`<M#z4_iiwgdi.", "mSUZk_OC;m9eP_*sq7Dc8A&)qgq;J[EDs^>azv2=h~5Ve%E_Ldw~<", ":^dxZZg4;uxMBsfE=|Zz4Ixib=jMr;$*w5b8fJjU(MHsr;C&KzIq", '`P)z)A<!bu3|@y{k`E.<3:B$iL(nQUvVbv"<_b<4{|GD24^_mS1', "AVk>G_Kg8Si", "Cw9cFKAi^C2]u(.k7y;]bzV!+$%%3`/o/IE57[^ui(VOHXd_PS0Z0y9.", "<w&0daNHbem/.", '@~A8G"J*X?yLP2ODG2x<5HxU<+=;MU2', "ru8<s@{U~)b+7_)7g^c]M4FgHX^Kl[c|v~ya6sf", "y^mo+$6Yx+OK^[AFHV4z4OwstLT4.", "`8n,3a9.S8?He(OU02A8!b^UMyeKn[kS", '=^7d+FR}MeZk^<1k%&+qC3Lgai9Kk0So>EKzNhf&"e?=[#f||>Czg63gS8l', '4K]cI/AY98{gky|*.:/zL}7nvD8@1%dEh~6rE]cu/8zL+v=D"`z,N6wi6(/Y.', ">`gal])UvgJj;<X<}A%a)i5qr", 'E:"<*R(.', "e~28}6P.HXW6D[@s$~c~>}@n!+n?6PSw`w@x@0;U0i9n(/q_D`x<u:;UPgw", "lC+Zp[M.sDX0~Bwv>7dr", "G1D,fFZe3$fTBr6B4Msqu[$!beDOxr`n5.", "/>Q>~FNw@(*040$ouC6PN[apY?50H1~<3%!0+*Cb_)vmQH*k4%VRRJG7@2LS.", "#eZ~/hB]<MFogAQ5e2s5g", '}%YRx+Gn)eA(%g__qZmx2"*sbm|3s0WoB8R5W*LOt+CHsP%v?Iqh6O8.', "`YpoI/p7]()2%gy!d`d,p6;s+|<U`ZNo;P,R[+*:<M~HMy:``cn07CGkr", "ZC@xG_nn6Wgas(ID#na8", '62VdHPxRjga6tB+{,Lr"6a].ACH=z/o{071', "85F8~/2s+$rzv0IFB^C>b,yi=S^HE/,D~^m6s]jU#uI6|r>VW()8", "e>($G6(nnD)Z)1V&_z`c.JB$q", "xds,&H4p2|H9Md", "cE<5=+POFgcasb{srn(=|RM!EL_6H1v{.|N>", "Fu$xZJuR1Dck^[1E;C4~|635%)7zl[7nowy,jP#{Uiz", '85=8^YlR+(R6[X=D^oSx)Y~:})2a_B"w851', "K&cZ~*:Yy(O,229|*z#ziY9ge=@mZ0f7&+@RKaf", "42FdP3h5^~PcL`isuCt$t_q!XX|0bi~*wM,:}pfs?876ig+UoXTRwZTRq", "dX{6)Jb.52$d$0qVm^WKAWf", "qPBcO0Cg|Dc1Md_V<YVdbekgWiy,7#", "RuFo=}5C1Dy,72]`N&P8<p@5`MXvy1Cn`Y65~/N*1", '7cH8:AJ*ImYK`4;w6MN8P"QqDyKHT_fU`y/zWzK!`Mt`}4J*4z.', "f:;~IHo#lMxgn2v_mY/=D", 'x`PRx"~R^)OmtO[<AP0zO:csRDC%aX9VtI2a#0cUR876c<8|Wf', 'dC_dP+x}{?[:Msj![z56HPkOEM>M]2w|;ufT`wLg3$"W.', ".5YoB[e7*u2*pdlDkv#]Qp6*k~k<7/=", "G>{RJIRY{mfvE%$n$f", "cC~K;+`##880&%hvGz.zVn)Y3XGs8yx`k|9cd$tYUS", "a`}R;aKz=iAR^XNj/(gas^j}Kkx~z%9vUy$VmPp5>DJ:GP|oX.", "|C&<CFlUZ?soD/rVg`o:84t+vD}:/Os|xY{Zxs4nvgtj,U,DJf", "%MYq>0cse=f]P_KFs1h<TOR{&M:df1nvYzB{>0bCl2,:l[x", 'JB]r$W^>Ay7ML"[!U^#0bi6||8O%`"i!8Y8>>Af', "!>eK*nee~)N94U+&FSH8", "F`w~D4HU>gjzX/YwK^pR=4x{,(ck)1ykT>NZS", ']M7o/"zga)J,4Z(7TvR$vZ14A?@(dPUoe~J`sp%|4~)2R(poj.', "P~sa44:|$DIO[non)(gRleZ.y(p$!;.|=.", "&^h]M4ww+|[ejr", '"~>6ae={oM;/.', "QzoqNTZ!oM:L.", "a22VmCJi}gp%CB}!Ov>a>aa!agr3`Ztj8YL,L[iYlM1#o<0|Tf", "tkPK3[rOl=yH|_N&jw?zfs0{5(Yk#4N&IP6,i,6UeXS<dFj!Y+.", 'vC1,9Y}Y2XNDTB,`zSj6;+kD]+d>Z0joa*Z~7"zn~)!R.', "n^jV%*=Y<Sn3e/*k", "8:PRo_`)L(x]SP`5QKi=aeT>;eC2~@Mse~}oyJY{g(0B%Og", "N2H8b^y#", "mkU8{P)f", "R7=Z9Hh?", "9Idli>E?", "X6wR7Wn?", 'W}c"RZa', "]JP{no_N|78fE|", 'PG#t"EKzguHZE|', 'g/"T_n0K|7,dn?', '"}al:=xM6C}Q@|', "8V{p1n)~dlOVk?", "I(<+{o[LFu8", '^Su/n?pw+k"', "fnInP>JaxD8", "hS4d/Ml[XD", "P^)H//7W{.I", "S&%yO1e/", ")ABdT1>/", "q&,`", "&&5^L1J/", '1j"Ds', "b&rqMD5", "b&HXf#Z/", "a&M`", "X;wBH:t?", "%aN%d<ES%^", ")dGrq2{;", "XJIh", "faoh}", "2&(h", "Id]%vCG", '"Y[>ZQ{;']), wo(II = function(...TT) {
      wo(TT[Ao[13]] = Ao[1], TT[Ao[16]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], TT[Ao[14]] = Ao[19], TT[Ao[0]] = []);
      try {
        wo(TT[Ao[14]] = Object, TT[Ao[0]][Ao[24]]("".__proto__.constructor.name))
      } catch (ro) {}
      TT: for (TT[Ao[15]] = Ao[1]; TT[Ao[15]] < TT[Ao[16]][Ao[13]]; TT[Ao[15]]++) try {
        for (TT[Ao[14]] = TT[Ao[16]][TT[Ao[15]]](), TT[Ao[17]] = Ao[1]; TT[Ao[17]] < TT[Ao[0]][Ao[13]]; TT[Ao[17]]++)
          if (typeof TT[Ao[14]][TT[Ao[0]][TT[Ao[17]]]] === Ao[18]) continue TT;
        return TT[Ao[14]]
      } catch (ro) {}
      return TT[Ao[14]] || this
    }() || {}, iI = II.TextDecoder, zI = II.Uint8Array, kI = II.vc, WI = II.String || String, XI = II.Array || Array, BI = function(...TT) {
      return wo(TT[Ao[13]] = Ao[1], TT[Ao[25]] = new XI(Ao[40]), TT[Ao[2]] = WI[Ao[22]] || WI.fromCharCode, TT[Ao[0]] = []),
        function(...oT) {
          for (wo(oT[Ao[13]] = Ao[2], oT[Ao[2]] = Ao[19], oT[Ao[0]] = Ao[19], oT[Ao[15]] = oT[Ao[1]][Ao[13]], TT[Ao[0]][Ao[13]] = Ao[1]), oT[Ao[20]] = Ao[1]; oT[Ao[20]] < oT[Ao[15]];) wo(oT[Ao[0]] = oT[Ao[1]][oT[Ao[20]]++], oT[Ao[0]] <= 127 ? oT[Ao[2]] = oT[Ao[0]] : oT[Ao[0]] <= 223 ? oT[Ao[2]] = (oT[Ao[0]] & Ao[16]) << Ao[9] | oT[Ao[1]][oT[Ao[20]]++] & Ao[21] : oT[Ao[0]] <= 239 ? oT[Ao[2]] = (15 & oT[Ao[0]]) << Ao[23] | (oT[Ao[1]][oT[Ao[20]]++] & Ao[21]) << Ao[9] | oT[Ao[1]][oT[Ao[20]]++] & Ao[21] : WI[Ao[22]] ? oT[Ao[2]] = (oT[Ao[0]] & Ao[7]) << 18 | (oT[Ao[1]][oT[Ao[20]]++] & Ao[21]) << Ao[23] | (oT[Ao[1]][oT[Ao[20]]++] & Ao[21]) << Ao[9] | oT[Ao[1]][oT[Ao[20]]++] & Ao[21] : (oT[Ao[2]] = Ao[21], oT[Ao[20]] += Ao[15]), TT[Ao[0]][Ao[24]](TT[Ao[25]][oT[Ao[2]]] || (TT[Ao[25]][oT[Ao[2]]] = TT[Ao[2]](oT[Ao[2]]))));
          return TT[Ao[0]].join("")
        }
    }()), (() => {
      function TT(...TT) {
        return TT[Ao[13]] = Ao[2], typeof Mo[TT[Ao[1]]] === Ao[18] ? Mo[TT[Ao[1]]] = function(...TT) {
          for (wo(TT[Ao[13]] = Ao[2], TT[Ao[2]] = 'a6?}|sG)plm1xzJ;ONM~wr>X8ytT!b9^"=LK@onkEFUq,Sh5&{YV.37Rv$](IDuCP/2c<jZ+fgei*BHQd:W0%#[_`4A', TT[Ao[26]] = "" + (TT[Ao[1]] || ""), TT[-Ao[27]] = TT[Ao[26]].length, TT[-Ao[36]] = [], TT[Ao[8]] = Ao[1], TT[Ao[31]] = Ao[1], TT[-Ao[29]] = -Ao[2]), TT[Ao[14]] = Ao[1]; TT[Ao[14]] < TT[-Ao[27]]; TT[Ao[14]]++)
            if (TT[Ao[28]] = TT[Ao[2]].indexOf(TT[Ao[26]][TT[Ao[14]]]), TT[Ao[28]] !== -Ao[2])
              if (TT[-Ao[29]] < Ao[1]) TT[-Ao[29]] = TT[Ao[28]];
              else {
                wo(TT[-Ao[29]] += TT[Ao[28]] * Ao[30], TT[Ao[8]] |= TT[-Ao[29]] << TT[Ao[31]], TT[Ao[31]] += (TT[-Ao[29]] & Ao[32]) > Ao[33] ? Ao[34] : Ao[35]);
                do {
                  wo(TT[-Ao[36]].push(TT[Ao[8]] & Ao[12]), TT[Ao[8]] >>= Ao[11], TT[Ao[31]] -= Ao[11])
                } while (TT[Ao[31]] > Ao[7]);
                TT[-Ao[29]] = -Ao[2]
              } return TT[-Ao[29]] > -Ao[2] && TT[-Ao[36]].push((TT[Ao[8]] | TT[-Ao[29]] << TT[Ao[31]]) & Ao[12]), ho(TT[-Ao[36]])
        }(ro[TT[Ao[1]]]) : Mo[TT[Ao[1]]]
      } [][Ao[13]] = Ao[1];
      const oT = Ao[6],
        IT = go(81) + go(82) + TT(83) + TT(84) + TT(85) + TT(86),
        iT = {
          [Ao[6]]: TT(87) + TT(Ao[33]) + TT(89) + TT(90) + TT(Ao[30]) + TT(92)
        },
        zT = TT => {
          const oT = iT[TT];
          if (!oT) {
            function IT(...TT) {
              for (wo(TT[Ao[13]] = Ao[2], TT[Ao[2]] = '$:[(1^y#~`x<+*278{6%DC>=VmUfLhsndQHGAZIqbWNSE0i/t)l4B!K.F9Jv"Tkj@&r;MwX?,YOgPRu}_e3]|caozp5', TT[-Ao[37]] = "" + (TT[Ao[1]] || ""), TT[-Ao[38]] = TT[-Ao[37]].length, TT[Ao[20]] = [], TT[Ao[8]] = Ao[1], TT[Ao[9]] = Ao[1], TT[Ao[7]] = -Ao[2]), TT[Ao[3]] = Ao[1]; TT[Ao[3]] < TT[-Ao[38]]; TT[Ao[3]]++)
                if (TT[Ao[6]] = TT[Ao[2]].indexOf(TT[-Ao[37]][TT[Ao[3]]]), TT[Ao[6]] !== -Ao[2])
                  if (TT[Ao[7]] < Ao[1]) TT[Ao[7]] = TT[Ao[6]];
                  else {
                    wo(TT[Ao[7]] += TT[Ao[6]] * Ao[30], TT[Ao[8]] |= TT[Ao[7]] << TT[Ao[9]], TT[Ao[9]] += (TT[Ao[7]] & Ao[32]) > Ao[33] ? Ao[34] : Ao[35]);
                    do {
                      wo(TT[Ao[20]].push(TT[Ao[8]] & Ao[12]), TT[Ao[8]] >>= Ao[11], TT[Ao[9]] -= Ao[11])
                    } while (TT[Ao[9]] > Ao[7]);
                    TT[Ao[7]] = -Ao[2]
                  } return TT[Ao[7]] > -Ao[2] && TT[Ao[20]].push((TT[Ao[8]] | TT[Ao[7]] << TT[Ao[9]]) & Ao[12]), ho(TT[Ao[20]])
            }

            function zT(...TT) {
              return TT[Ao[13]] = Ao[2], typeof Mo[TT[Ao[1]]] === Ao[18] ? Mo[TT[Ao[1]]] = IT(ro[TT[Ao[1]]]) : Mo[TT[Ao[1]]]
            }
            throw new Error(zT(93) + zT(94) + zT(95) + TT)
          }
          return [Ao[1], Ao[2], Ao[0], Ao[15], Ao[20], Ao[8], Ao[9], Ao[7]].map((TT => parseInt(oT[function(TT) {
            return typeof Mo[TT] === Ao[18] ? Mo[TT] = function(...TT) {
              for (wo(TT[Ao[13]] = Ao[2], TT[Ao[2]] = '?NcqGKDoSLe8Y7()VjaZF|}XJC:zgwyP;43EM,{~fmdb@hT&5BsIrWU]Q!<>^i=R.960[+#_$kAtHxOvn/%*u`p12"l', TT[Ao[0]] = "" + (TT[Ao[1]] || ""), TT[Ao[39]] = TT[Ao[0]].length, TT[Ao[43]] = [], TT[Ao[42]] = Ao[1], TT[Ao[9]] = Ao[1], TT[Ao[41]] = -Ao[2]), TT[Ao[3]] = Ao[1]; TT[Ao[3]] < TT[Ao[39]]; TT[Ao[3]]++)
                if (TT[-Ao[40]] = TT[Ao[2]].indexOf(TT[Ao[0]][TT[Ao[3]]]), TT[-Ao[40]] !== -Ao[2])
                  if (TT[Ao[41]] < Ao[1]) TT[Ao[41]] = TT[-Ao[40]];
                  else {
                    wo(TT[Ao[41]] += TT[-Ao[40]] * Ao[30], TT[Ao[42]] |= TT[Ao[41]] << TT[Ao[9]], TT[Ao[9]] += (TT[Ao[41]] & Ao[32]) > Ao[33] ? Ao[34] : Ao[35]);
                    do {
                      wo(TT[Ao[43]].push(TT[Ao[42]] & Ao[12]), TT[Ao[42]] >>= Ao[11], TT[Ao[9]] -= Ao[11])
                    } while (TT[Ao[9]] > Ao[7]);
                    TT[Ao[41]] = -Ao[2]
                  } return TT[Ao[41]] > -Ao[2] && TT[Ao[43]].push((TT[Ao[42]] | TT[Ao[41]] << TT[Ao[9]]) & Ao[12]), ho(TT[Ao[43]])
            }(ro[TT]) : Mo[TT]
          }(96)](TT * Ao[11], TT * Ao[11] + Ao[11]), 16)))
        };
      wo(ko = (...TT) => (TT[Ao[13]] = Ao[2], TT[Ao[1]] >= oT), Wo = (TT, oT) => {
        function IT(TT) {
          return typeof Mo[TT] === Ao[18] ? Mo[TT] = function(TT) {
            var oT, IT, iT, zT, kT, WT, XT;
            for (wo(oT = "" + (TT || ""), IT = oT.length, iT = [], zT = Ao[1], kT = Ao[1], WT = -Ao[2]), XT = Ao[1]; XT < IT; XT++) {
              var BT = '5./}4z"6;^`:9,?&+8SYHM%bKCZ)xsa=qt>QR~e(OTwAiF2L{!JjE*dyPBGu$cIg]Uv71[mlkp_0DXfNV#3rn|@Wo<h'.indexOf(oT[XT]);
              if (BT !== -Ao[2])
                if (WT < Ao[1]) WT = BT;
                else {
                  wo(WT += BT * Ao[30], zT |= WT << kT, kT += (WT & Ao[32]) > Ao[33] ? Ao[34] : Ao[35]);
                  do {
                    wo(iT.push(zT & Ao[12]), zT >>= Ao[11], kT -= Ao[11])
                  } while (kT > Ao[7]);
                  WT = -Ao[2]
                }
            }
            return WT > -Ao[2] && iT.push((zT | WT << kT) & Ao[12]), ho(iT)
          }(ro[TT]) : Mo[TT]
        }
        const iT = crypto[IT(97) + IT(Ao[47]) + IT(99)](new Uint8Array(Fo)),
          kT = zo[Ao[17]][IT(Ao[29]) + IT(101)](oT, {
            [IT(102)]: Ao[2]
          });
        Bo(zT(TT), iT, Ao[2], kT);
        const WT = new Uint8Array(Fo + kT[IT(103)]);
        return wo(WT[IT(Ao[44])](iT), WT[IT(Ao[44])](kT, Fo)), WT
      }, Xo = (...oT) => {
        function iT(...TT) {
          return TT[Ao[13]] = Ao[2], typeof Mo[TT[Ao[1]]] === Ao[18] ? Mo[TT[Ao[1]]] = function(...TT) {
            for (wo(TT[Ao[13]] = Ao[2], TT[Ao[2]] = 'G1;`J(X/Srh.EoNYT)KDi^zO@Z}pf"]%>F_e|bm$dPMcnIUqlL{&g54vtVR[aj+:?W=92wC!3*8HQBk6<#0~7sux,yA', TT[-Ao[45]] = "" + (TT[Ao[1]] || ""), TT[-Ao[46]] = TT[-Ao[45]].length, TT[Ao[50]] = [], TT[Ao[17]] = Ao[1], TT[Ao[49]] = Ao[1], TT[-Ao[48]] = -Ao[2]), TT[Ao[3]] = Ao[1]; TT[Ao[3]] < TT[-Ao[46]]; TT[Ao[3]]++)
              if (TT[-Ao[47]] = TT[Ao[2]].indexOf(TT[-Ao[45]][TT[Ao[3]]]), TT[-Ao[47]] !== -Ao[2])
                if (TT[-Ao[48]] < Ao[1]) TT[-Ao[48]] = TT[-Ao[47]];
                else {
                  wo(TT[-Ao[48]] += TT[-Ao[47]] * Ao[30], TT[Ao[17]] |= TT[-Ao[48]] << TT[Ao[49]], TT[Ao[49]] += (TT[-Ao[48]] & Ao[32]) > Ao[33] ? Ao[34] : Ao[35]);
                  do {
                    wo(TT[Ao[50]].push(TT[Ao[17]] & Ao[12]), TT[Ao[17]] >>= Ao[11], TT[Ao[49]] -= Ao[11])
                  } while (TT[Ao[49]] > Ao[7]);
                  TT[-Ao[48]] = -Ao[2]
                } return TT[-Ao[48]] > -Ao[2] && TT[Ao[50]].push((TT[Ao[17]] | TT[-Ao[48]] << TT[Ao[49]]) & Ao[12]), ho(TT[Ao[50]])
          }(ro[TT[Ao[1]]]) : Mo[TT[Ao[1]]]
        }
        if (oT[Ao[13]] = Ao[0], oT[Ao[2]][TT(105)] < Fo) throw new Error(IT);
        const kT = new Uint8Array(oT[Ao[2]][iT(Ao[51])](Fo));
        Bo(zT(oT[Ao[1]]), oT[Ao[2]][iT(Ao[51])](Ao[1], Fo), Ao[2], kT);
        const WT = new(zo[Ao[17]][iT(Ao[31]) + Ao[17]])({
          [iT(108)]: !0
        });
        if (WT[iT(109)](kT), WT[iT(110)] || !WT[iT(111)]) throw new Error(IT);
        return WT[iT(112)]
      })
    })();
    var mo = IT(35932),
      eo = IT(35937);

    function Ro(TT) {
      return kT.vc.from(Uint8Array.from(TT))
    }

    function uo(TT) {
      return Array.from(TT)
    }

    function vo(TT, oT) {
      return {
        [TT]: {
          x: oT
        }
      }
    }

    function Eo(TT) {
      if (null === TT || "object" !== typeof TT || Array.isArray(TT)) return TT;
      const oT = Object.keys(TT);
      if (1 !== oT.length) return TT;
      const IT = TT[oT[0]];
      return null !== IT && "object" === typeof IT && !Array.isArray(IT) && "x" in IT ? IT.x : TT
    }

    function fo(TT, oT) {
      return void 0 === oT ? null : BT.has(TT) ? null === oT ? null : JSON.stringify(oT) : oT
    }

    function Co(TT, oT) {
      return null === oT && BT.has(TT) ? null : "string" === typeof oT && BT.has(TT) ? JSON.parse(oT) : oT
    }

    function jo(TT, oT, IT) {
      return (0, zT.K)(IT) ? null : vo(TT, fo(oT, IT))
    }

    function Jo(TT, oT) {
      return (0, zT.K)(oT) ? null : Co(TT, Eo(oT))
    }

    function Uo(TT) {
      const oT = {};
      for (const IT in TT) {
        const iT = TT[IT];
        oT[IT] = void 0 === iT ? null : iT
      }
      return oT
    }

    function ao(TT) {
      const oT = {};
      for (const IT in TT) {
        const iT = TT[IT];
        null !== iT && void 0 !== iT && (oT[IT] = iT)
      }
      return oT
    }

    function Yo(TT, oT) {
      return Object.prototype.hasOwnProperty.call(TT, oT)
    }

    function Qo(TT, oT) {
      const IT = {};
      for (const iT in TT) {
        const zT = TT[iT];
        IT[iT] = oT(zT)
      }
      return IT
    }

    function Oo(TT, oT, IT) {
      const iT = [];
      for (let zT = 0; zT < oT.length; zT++) {
        const kT = oT[zT];
        Yo(TT, kT) && iT.push({
          i: zT,
          v: IT(kT, TT[kT])
        })
      }
      return iT
    }

    function Ho(TT, oT, IT) {
      const iT = {};
      for (const zT of TT) {
        const TT = oT[zT.i];
        void 0 !== TT ? iT[TT] = IT(TT, zT.v) : console.error(`Unknown Partial field index ${zT.i}`)
      }
      return iT
    }

    function no(TT, oT) {
      return (0, zT.K)(oT) ? null : "qJ" === TT ? function(TT) {
        return vo(cT, Oo(TT, eo.A, ((TT, oT) => jo(aT[TT], TT, oT))))
      }(oT) : jo(UT[TT], TT, oT)
    }

    function qo(TT, oT) {
      return (0, zT.K)(oT) ? null : "qJ" === TT ? function(TT) {
        return (0, zT.K)(TT) ? null : Ho(TT, eo.A, Jo)
      }(Eo(oT)) : Jo(TT, oT)
    }

    function Zo(TT) {
      const {
        type: oT,
        ...IT
      } = TT, iT = {};
      for (const zT in IT) {
        const TT = IT[zT];
        iT[zT] = fo(zT, TT)
      }
      if ("chunkAdded" === oT || "chunkRemoved" === oT) iT.rle = Ro(iT.rle);
      else if ("playSound" === oT) {
        const TT = iT.CT;
        iT.CT = (0, zT.K)(TT) ? null : Uo(TT)
      } else if ("customKillfeed" === oT) {
        var kT, WT;
        iT.killer = Uo(null !== (kT = iT.killer) && void 0 !== kT ? kT : {}), iT.victim = Uo(null !== (WT = iT.victim) && void 0 !== WT ? WT : {})
      }
      return {
        [oT]: iT
      }
    }

    function so(TT) {
      const oT = Object.keys(TT)[0],
        IT = TT[oT],
        iT = {};
      for (const zT in IT) {
        const TT = IT[zT];
        iT[zT] = Co(zT, TT)
      }
      if ("chunkAdded" === oT || "chunkRemoved" === oT) iT.rle = uo(iT.rle);
      else if ("playSound" === oT) {
        const TT = iT.CT;
        iT.CT = (0, zT.K)(TT) ? null : ao(TT)
      } else if ("customKillfeed" === oT) {
        var kT, WT;
        iT.killer = ao(null !== (kT = iT.killer) && void 0 !== kT ? kT : {}), iT.victim = ao(null !== (WT = iT.victim) && void 0 !== WT ? WT : {})
      }
      return {
        type: oT,
        ...iT
      }
    }

    function to(TT) {
      var oT, IT;
      return (0, zT.K)(TT) ? null : {
        name: TT.name,
        amount: null !== (oT = TT.amount) && void 0 !== oT ? oT : null,
        attributes: JSON.stringify(null !== (IT = TT.attributes) && void 0 !== IT ? IT : {})
      }
    }

    function Go(TT) {
      if ((0, zT.K)(TT)) return null;
      const oT = TT;
      return {
        name: oT.name,
        amount: oT.amount,
        attributes: JSON.parse(oT.attributes)
      }
    }

    function po(TT) {
      if ((0, zT.K)(TT)) return null;
      return {
        fullSlotsArray: Array.isArray(TT.slots),
        entries: Oo(TT, eo.l, ((TT, oT) => {
          if ((0, zT.K)(oT)) return null;
          if ("slots" === TT) {
            const TT = Array.isArray(oT) ? function(TT) {
              const oT = {};
              for (let IT = 0; IT < TT.length; IT++) oT[IT] = TT[IT];
              return oT
            }(oT) : oT;
            return vo(ET, function(TT) {
              const oT = {};
              for (const IT in TT) {
                const iT = TT[IT];
                oT[IT] = to(iT)
              }
              return oT
            }(TT))
          }
          return vo(vT, oT)
        }))
      }
    }

    function bo(TT) {
      if ((0, zT.K)(TT)) return;
      const oT = TT.fullSlotsArray;
      return Ho(TT.entries, eo.l, ((TT, IT) => {
        if ((0, zT.K)(IT)) return null;
        if ("slots" === TT) {
          const TT = function(TT) {
            const oT = {};
            for (const IT in TT) {
              const iT = TT[IT];
              oT[Number(IT)] = Go(iT)
            }
            return oT
          }(Eo(IT));
          return oT ? function(TT) {
            const oT = [];
            for (let IT = 0; IT < zT.k; IT++) oT.push(IT in TT ? TT[IT] : null);
            return oT
          }(TT) : TT
        }
        return Eo(IT)
      }))
    }

    function yo(TT) {
      return {
        entities: Qo(TT.entities, (TT => Oo(TT, eo.i, no))),
        items: Qo(TT.items, (TT => Oo(TT, eo.r, ((TT, oT) => jo(YT[TT], TT, oT))))),
        camera: TT.camera,
        hotbar: po(TT.hotbar),
        playerHud: (0, zT.K)(TT.playerHud) ? null : Oo(TT.playerHud, eo.v, ((TT, oT) => (0, zT.K)(oT) ? null : function(TT, oT) {
          return {
            [TT]: oT
          }
        }("double", oT))),
        effects: (0, zT.K)(TT.effects) ? null : (0, mo.n)(TT.effects),
        uiElements: Oo(TT.uiElements, eo.C, ((TT, oT) => (0, zT.K)(oT) ? null : JSON.stringify(oT))),
        environment: Oo(TT.environment, eo.z, ((TT, oT) => jo(QT[TT], TT, oT))),
        structuralEvents: TT.structuralEvents.map(Zo),
        ephemeralEvents: TT.ephemeralEvents.map(Zo)
      }
    }

    function No(TT) {
      var oT;
      const IT = {
          entities: Qo(TT.entities, (TT => {
            const oT = Ho(TT, eo.i, qo),
              IT = oT.type ? (0, iT.z)(oT.type) : null;
            return IT && (oT.type = "Mesh", oT.meshKind = IT.meshKind, oT.meshOpts = IT.meshOpts), oT
          })),
          items: Qo(TT.items, (TT => Ho(TT, eo.r, Jo))),
          camera: {
            ...TT.camera,
            charging: null !== (oT = TT.camera.charging) && void 0 !== oT && oT
          },
          uiElements: Ho(TT.uiElements, eo.C, ((TT, oT) => "string" === typeof oT ? JSON.parse(oT) : oT)),
          environment: Ho(TT.environment, eo.z, Jo),
          structuralEvents: TT.structuralEvents.map((TT => {
            const oT = so(TT);
            return "gC" === oT.type ? (oT.fromBlockData ??= null, oT.toBlockData ??= null) : "chunkAdded" !== oT.type && "chunkRemoved" !== oT.type || (oT.sharedBlockData ??= []), oT
          })),
          ephemeralEvents: TT.ephemeralEvents.map((TT => so(TT)))
        },
        kT = bo(TT.hotbar);
      return void 0 !== kT && (IT.hotbar = kT), (0, zT.K)(TT.playerHud) || (IT.playerHud = Ho(TT.playerHud, eo.v, ((TT, oT) => (0, zT.K)(oT) ? null : function(TT) {
        if (null === TT || "object" !== typeof TT || Array.isArray(TT)) return TT;
        const oT = Object.keys(TT);
        return 1 !== oT.length || "int" !== oT[0] && "double" !== oT[0] ? TT : TT[oT[0]]
      }(oT)))), (0, zT.K)(TT.effects) || (IT.effects = (0, mo.h)(TT.effects)), IT
    }
    let Po, Vo;
    var TI, oI, II, iI, zI, kI, WI, XI, BI, FI, SI;
    const DI = [165, 0, 1, "h", 3, "a", 185, "g", 104, 6, 4, 8, 255, "length", 119, "e", 129, 243, "undefined", void 0, 164, "b", 63, "fromCodePoint", 7, 12, "push", "c", "d", 46, 86, "i", 91, 157, "f", 8191, 88, 13, 14, 25, 212, 214, 132, 2, 100, 225, 247, 36, 62, 106, 210, 136, 112, 220, "join", 126, 122, 9, 33554432, 67108864, 5, 171, 142, 144, "k", 137, 130, 124, 97, "j", 82, 127, 128, 170, 79, 176, "om", "?", ")", 110, 11, 161, 199, 84, 184, 31, 77, 113, 109, 201, 59, 16, 186, 512, 256, 55, 202, 41, 168, 15, 175, 143, 244, 207, 235, 39, 94, 178, 99, 1023, 240, 18, 32, 51, 24, 10, 19, 64, 237, 65535, "vc", "E", 135, 248, 215, 26, 200, 45, 60, 179, 246, 222, 192];

    function LI(...TT) {
      return TT[DI[13]] = DI[2], typeof TI[TT[DI[1]]] === DI[18] ? TI[TT[DI[1]]] = function(...TT) {
        for (rI(TT[DI[13]] = DI[2], TT[DI[5]] = '^0=x5"cUALQ7RO%<9[B/za`.r!1ymVeD4HIW8{MPjfoYq:uvN$*dSw@,2g?sFCJ#l;E(GZ~i&b>k}+pX|Kht)6n3_T]', TT[DI[0]] = "" + (TT[DI[1]] || ""), TT[DI[4]] = TT[DI[0]].length, TT[DI[10]] = [], TT[DI[8]] = DI[1], TT[DI[9]] = DI[1], TT[DI[7]] = -DI[2]), TT[DI[3]] = DI[1]; TT[DI[3]] < TT[DI[4]]; TT[DI[3]]++)
          if (TT[DI[6]] = TT[DI[5]].indexOf(TT[DI[0]][TT[DI[3]]]), TT[DI[6]] !== -DI[2])
            if (TT[DI[7]] < DI[1]) TT[DI[7]] = TT[DI[6]];
            else {
              rI(TT[DI[7]] += TT[DI[6]] * DI[32], TT[DI[8]] |= TT[DI[7]] << TT[DI[9]], TT[DI[9]] += (TT[DI[7]] & DI[35]) > DI[36] ? DI[37] : DI[38]);
              do {
                rI(TT[DI[10]].push(TT[DI[8]] & DI[12]), TT[DI[8]] >>= DI[11], TT[DI[9]] -= DI[11])
              } while (TT[DI[9]] > DI[24]);
              TT[DI[7]] = -DI[2]
            } return TT[DI[7]] > -DI[2] && TT[DI[10]].push((TT[DI[8]] | TT[DI[7]] << TT[DI[9]]) & DI[12]), xI(TT[DI[10]])
      }(oI[TT[DI[1]]]) : TI[TT[DI[1]]]
    }

    function xI(...TT) {
      return TT[DI[13]] = DI[2], typeof iI !== DI[18] && iI ? (new iI).decode(new zI(TT[DI[1]])) : typeof kI !== DI[18] && kI ? kI.from(TT[DI[1]]).toString("utf-8") : BI(TT[DI[1]])
    }

    function cI(...TT) {
      if (TT[DI[13]] = DI[4], TT[DI[1]] === function(...TT) {
          return TT[DI[13]] = DI[2], typeof TI[TT[DI[1]]] === DI[18] ? TI[TT[DI[1]]] = function(...TT) {
            for (rI(TT[DI[13]] = DI[2], TT[DI[5]] = '1YdpoyXJ9$=u/A#!F`zHsZWvhU_4wr)B:nq+(6|?m~0fL&bMQa8Et{V[x;.*c>7IC"D2N]g,3ljG@eP%ikRK5^}TS<O', TT[-DI[29]] = "" + (TT[DI[1]] || ""), TT[-DI[30]] = TT[-DI[29]].length, TT[DI[39]] = [], TT[-DI[33]] = DI[1], TT[DI[34]] = DI[1], TT[DI[7]] = -DI[2]), TT[DI[3]] = DI[1]; TT[DI[3]] < TT[-DI[30]]; TT[DI[3]]++)
              if (TT[DI[31]] = TT[DI[5]].indexOf(TT[-DI[29]][TT[DI[3]]]), TT[DI[31]] !== -DI[2])
                if (TT[DI[7]] < DI[1]) TT[DI[7]] = TT[DI[31]];
                else {
                  rI(TT[DI[7]] += TT[DI[31]] * DI[32], TT[-DI[33]] |= TT[DI[7]] << TT[DI[34]], TT[DI[34]] += (TT[DI[7]] & DI[35]) > DI[36] ? DI[37] : DI[38]);
                  do {
                    rI(TT[DI[39]].push(TT[-DI[33]] & DI[12]), TT[-DI[33]] >>= DI[11], TT[DI[34]] -= DI[11])
                  } while (TT[DI[34]] > DI[24]);
                  TT[DI[7]] = -DI[2]
                } return TT[DI[7]] > -DI[2] && TT[DI[39]].push((TT[-DI[33]] | TT[DI[7]] << TT[DI[34]]) & DI[12]), xI(TT[DI[39]])
          }(oI[TT[DI[1]]]) : TI[TT[DI[1]]]
        }(DI[44])) return TT[DI[2]] + TT[DI[43]]
    }

    function KI() {}

    function MI(TT, oT, IT, iT = {}, zT, kT, WT, XT, BT) {
      if (WT || (WT = function(...TT) {
          TT[DI[13]] = DI[1];
          const oT = require("big-integer");
          rI(TT[DI[45]] = class {
            static randomPrime(...TT) {
              TT[DI[13]] = DI[2];
              const IT = oT.one.shiftLeft(TT[DI[1]] - DI[2]),
                iT = oT.one.shiftLeft(TT[DI[1]]).prev();
              for (;;) {
                let TT = oT.randBetween(IT, iT);
                if (TT.isProbablePrime(DI[94])) return TT
              }
            }
            static generate(...TT) {
              TT[DI[13]] = DI[2];
              const IT = oT(65537);
              let iT, zT;
              TT[DI[5]] = DI[19];
              do {
                rI(iT = this.randomPrime(TT[DI[1]] / DI[43]), zT = this.randomPrime(TT[DI[1]] / DI[43]), TT[DI[5]] = oT.lcm(iT.prev(), zT.prev()))
              } while (oT.gcd(IT, TT[DI[5]]).notEquals(DI[2]) || iT.minus(zT).abs().shiftRight(TT[DI[1]] / DI[43] - DI[44]).isZero());
              return {
                e: IT,
                n: iT.multiply(zT),
                d: IT.modInv(TT[DI[5]])
              }
            }
            static encrypt(...TT) {
              return TT[DI[13]] = DI[4], oT(TT[DI[1]]).modPow(TT[DI[43]], TT[DI[2]])
            }
            static decrypt(TT, IT, iT) {
              return oT(TT).modPow(IT, iT)
            }
            static encode(TT) {
              const IT = TT.split("").map((TT => TT.charCodeAt())).join("");
              return oT(IT)
            }
            static decode(...TT) {
              TT[DI[13]] = DI[2];
              const oT = TT[DI[1]].toString();
              TT[DI[5]] = "";
              for (let IT = DI[1]; IT < oT.length; IT += DI[43]) {
                let iT = Number(oT.substr(IT, DI[43]));
                iT <= 30 ? (TT[DI[5]] += String.fromCharCode(Number(oT.substr(IT, DI[4]))), IT++) : TT[DI[5]] += String.fromCharCode(iT)
              }
              return TT[DI[5]]
            }
          }, module.exports = TT[DI[45]])
        }), kT || (kT = function(...TT) {
          return TT[DI[13]] = DI[2], typeof TI[TT[DI[1]]] === DI[18] ? TI[TT[DI[1]]] = zT(oI[TT[DI[1]]]) : TI[TT[DI[1]]]
        }), zT || (zT = function(...TT) {
          for (rI(TT[DI[13]] = DI[2], TT[DI[2]] = 'LUASB,*3$i}"gJM94~;kqF/|eco.[Dxplh6OEmuV+az0T%r&dZIj)8YtX!<QHNP5Rf=b@s?W_2vG71yKC(^w`>#{n]:', TT[DI[21]] = "" + (TT[DI[1]] || ""), TT[DI[40]] = TT[DI[21]].length, TT[DI[42]] = [], TT[DI[15]] = DI[1], TT[DI[9]] = DI[1], TT[-DI[41]] = -DI[2]), TT[DI[3]] = DI[1]; TT[DI[3]] < TT[DI[40]]; TT[DI[3]]++)
            if (TT[DI[31]] = TT[DI[2]].indexOf(TT[DI[21]][TT[DI[3]]]), TT[DI[31]] !== -DI[2])
              if (TT[-DI[41]] < DI[1]) TT[-DI[41]] = TT[DI[31]];
              else {
                rI(TT[-DI[41]] += TT[DI[31]] * DI[32], TT[DI[15]] |= TT[-DI[41]] << TT[DI[9]], TT[DI[9]] += (TT[-DI[41]] & DI[35]) > DI[36] ? DI[37] : DI[38]);
                do {
                  rI(TT[DI[42]].push(TT[DI[15]] & DI[12]), TT[DI[15]] >>= DI[11], TT[DI[9]] -= DI[11])
                } while (TT[DI[9]] > DI[24]);
                TT[-DI[41]] = -DI[2]
              } return TT[-DI[41]] > -DI[2] && TT[DI[42]].push((TT[DI[15]] | TT[-DI[41]] << TT[DI[9]]) & DI[12]), xI(TT[DI[42]])
        }), kT(102) + "H" in KI && WT(), rI(XT = void 0, BT = {
          [kT(103)]: function(...TT) {
            function oT(...TT) {
              return TT[DI[13]] = DI[2], typeof TI[TT[DI[1]]] === DI[18] ? TI[TT[DI[1]]] = function(...TT) {
                for (rI(TT[DI[13]] = DI[2], TT[DI[2]] = ';<u$3[.6v014P)Xrti!l5bDwf}|W2EYyd*TJ7&:zKm?LMxGjkh%#c{g~H>oNnI9,aQU]F/(s@AqpB^+RCe`Z8OVS="_', TT[DI[43]] = "" + (TT[DI[1]] || ""), TT[DI[27]] = TT[DI[43]].length, TT[-DI[48]] = [], TT[DI[15]] = DI[1], TT[DI[34]] = DI[1], TT[DI[47]] = -DI[2]), TT[DI[46]] = DI[1]; TT[DI[46]] < TT[DI[27]]; TT[DI[46]]++)
                  if (TT[DI[31]] = TT[DI[2]].indexOf(TT[DI[43]][TT[DI[46]]]), TT[DI[31]] !== -DI[2])
                    if (TT[DI[47]] < DI[1]) TT[DI[47]] = TT[DI[31]];
                    else {
                      rI(TT[DI[47]] += TT[DI[31]] * DI[32], TT[DI[15]] |= TT[DI[47]] << TT[DI[34]], TT[DI[34]] += (TT[DI[47]] & DI[35]) > DI[36] ? DI[37] : DI[38]);
                      do {
                        rI(TT[-DI[48]].push(TT[DI[15]] & DI[12]), TT[DI[15]] >>= DI[11], TT[DI[34]] -= DI[11])
                      } while (TT[DI[34]] > DI[24]);
                      TT[DI[47]] = -DI[2]
                    } return TT[DI[47]] > -DI[2] && TT[-DI[48]].push((TT[DI[15]] | TT[DI[47]] << TT[DI[34]]) & DI[12]), xI(TT[-DI[48]])
              }(oI[TT[DI[1]]]) : TI[TT[DI[1]]]
            }
            oT(DI[8]) + "L" in KI && function(...TT) {
              rI(TT[DI[13]] = DI[1], TT[DI[5]] = function(...TT) {
                for (rI(TT[DI[13]] = DI[2], TT[DI[49]] = DI[1], TT[DI[21]] = {}, TT[DI[27]] = DI[1], TT[-DI[49]] = DI[1], TT[-DI[52]] = DI[1], TT[DI[34]] = TT[DI[1]].length), TT[-DI[50]] = DI[1]; TT[-DI[50]] < TT[DI[34]]; TT[-DI[50]]++) {
                  for (rI(TT[DI[21]] = {}, TT[DI[27]] = DI[1], TT[-DI[49]] = DI[2]), TT[DI[51]] = TT[-DI[50]] + DI[2]; TT[DI[51]] < TT[DI[34]]; TT[DI[51]]++) TT[DI[1]][TT[-DI[50]]].x !== TT[DI[1]][TT[DI[51]]].x || TT[DI[1]][TT[-DI[50]]].y !== TT[DI[1]][TT[DI[51]]].y ? (TT[DI[1]][TT[-DI[50]]].y === TT[DI[1]][TT[DI[51]]].y ? TT[-DI[52]] = Number.MAX_SAFE_INTEGER : TT[-DI[52]] = (TT[DI[1]][TT[-DI[50]]].x - TT[DI[1]][TT[DI[51]]].x) / (TT[DI[1]][TT[-DI[50]]].y - TT[DI[1]][TT[DI[51]]].y), TT[DI[21]][TT[-DI[52]]] || (TT[DI[21]][TT[-DI[52]]] = DI[1]), rI(TT[DI[21]][TT[-DI[52]]]++, TT[DI[27]] = Math.max(TT[DI[27]], TT[DI[21]][TT[-DI[52]]]))) : TT[-DI[49]]++;
                  rI(TT[DI[27]] += TT[-DI[49]], TT[DI[49]] = Math.max(TT[DI[49]], TT[DI[27]]))
                }
                return TT[DI[49]]
              }, console.log(TT[DI[5]]))
            }(), rI([
              [TT[DI[53]], TT[DI[21]], TT[DI[55]]], TT[DI[4]]
            ] = SI, console[oT(105)]("" + TT[DI[53]][DI[54]](".") + (oT(DI[49]) + oT(107)) + TT[DI[55]][oT(108) + "me"] + oT(DI[88]) + TT[DI[21]]))
          }
        }), oT === kT(DI[79]) + kT(111)) {
        function FT(...TT) {
          for (rI(TT[DI[13]] = DI[2], TT[DI[2]] = '%cBlMfHdKtpCx|&wkAOV07FS91}~he;3YnqRZ$G,=?5j:6.`^zTLb"Ei+8QarvDJyg#]WPIUus_N)[m2!@X<o/(4*>{', TT[DI[43]] = "" + (TT[DI[1]] || ""), TT[-DI[56]] = TT[DI[43]].length, TT[DI[28]] = [], TT[DI[15]] = DI[1], TT[DI[9]] = DI[1], TT[DI[7]] = -DI[2]), TT[DI[11]] = DI[1]; TT[DI[11]] < TT[-DI[56]]; TT[DI[11]]++)
            if (TT[DI[57]] = TT[DI[2]].indexOf(TT[DI[43]][TT[DI[11]]]), TT[DI[57]] !== -DI[2])
              if (TT[DI[7]] < DI[1]) TT[DI[7]] = TT[DI[57]];
              else {
                rI(TT[DI[7]] += TT[DI[57]] * DI[32], TT[DI[15]] |= TT[DI[7]] << TT[DI[9]], TT[DI[9]] += (TT[DI[7]] & DI[35]) > DI[36] ? DI[37] : DI[38]);
                do {
                  rI(TT[DI[28]].push(TT[DI[15]] & DI[12]), TT[DI[15]] >>= DI[11], TT[DI[9]] -= DI[11])
                } while (TT[DI[9]] > DI[24]);
                TT[DI[7]] = -DI[2]
              } return TT[DI[7]] > -DI[2] && TT[DI[28]].push((TT[DI[15]] | TT[DI[7]] << TT[DI[9]]) & DI[12]), xI(TT[DI[28]])
        }

        function ST(TT) {
          return typeof TI[TT] === DI[18] ? TI[TT] = FT(oI[TT]) : TI[TT]
        }

        function DT(...TT) {
          function oT(...TT) {
            return TT[DI[13]] = DI[2], TT[DI[1]][DI[2]] * DI[59] + (TT[DI[1]][DI[1]] < DI[1] ? DI[58] | TT[DI[1]][DI[1]] : TT[DI[1]][DI[1]])
          }

          function IT(...TT) {
            switch (TT[DI[13]] = DI[2], ((TT[DI[1]] & DI[58]) !== DI[1]) * DI[2] + (TT[DI[1]] < DI[1]) * DI[43]) {
              case DI[1]:
                return [TT[DI[1]] % DI[58], Math.trunc(TT[DI[1]] / DI[59])];
              case DI[2]:
                return [TT[DI[1]] % DI[58] - DI[58], Math.trunc(TT[DI[1]] / DI[59]) + DI[2]];
              case DI[43]:
                return [((TT[DI[1]] + DI[58]) % DI[58] + DI[58]) % DI[58], Math.round(TT[DI[1]] / DI[59])];
              case DI[4]:
                return [TT[DI[1]] % DI[58], Math.trunc(TT[DI[1]] / DI[59])]
            }
          }
          TT[DI[13]] = DI[1], rI(TT[DI[5]] = oT([DI[43], DI[10]]), TT[DI[2]] = oT([DI[2], DI[43]]), TT[DI[27]] = TT[DI[5]] + TT[DI[2]], TT[DI[4]] = TT[DI[27]] - TT[DI[2]], TT[DI[15]] = TT[DI[4]] * DI[43], TT[DI[60]] = TT[DI[15]] / DI[43], console.log(IT(TT[DI[27]])), console.log(IT(TT[DI[4]])), console.log(IT(TT[DI[15]])), console.log(IT(TT[DI[60]])))
        }
        ST(DI[52]) + DI[121] in KI && DT(), SI = []
      }
      if (oT === kT(DI[87]) + kT(114)) {
        function LT(...oT) {
          var IT;
          if (oT[DI[13]] = DI[1], kT(115) in KI && function(...TT) {
              rI(TT[DI[13]] = DI[1], TT[DI[28]] = function(...TT) {
                if (rI(TT[DI[13]] = DI[2], TT[DI[5]] = TT[DI[1]].length), TT[DI[5]] < DI[43]) return DI[1];
                if (rI(TT[DI[43]] = Math.max(...TT[DI[1]]), TT[DI[27]] = Math.min(...TT[DI[1]])), TT[DI[43]] === TT[DI[27]]) return DI[1];
                for (rI(TT[DI[10]] = Array(TT[DI[5]] - DI[2]).fill(Number.MAX_SAFE_INTEGER), TT[-DI[63]] = Array(TT[DI[5]] - DI[2]).fill(Number.MIN_SAFE_INTEGER), TT[DI[9]] = Math.ceil((TT[DI[43]] - TT[DI[27]]) / (TT[DI[5]] - DI[2])), TT[DI[62]] = DI[1]), TT[-DI[61]] = DI[1]; TT[-DI[61]] < TT[DI[5]]; TT[-DI[61]]++) TT[DI[1]][TT[-DI[61]]] !== TT[DI[27]] && TT[DI[1]][TT[-DI[61]]] !== TT[DI[43]] && rI(TT[DI[62]] = Math.floor((TT[DI[1]][TT[-DI[61]]] - TT[DI[27]]) / TT[DI[9]]), TT[DI[10]][TT[DI[62]]] = Math.min(TT[DI[10]][TT[DI[62]]], TT[DI[1]][TT[-DI[61]]]), TT[-DI[63]][TT[DI[62]]] = Math.max(TT[-DI[63]][TT[DI[62]]], TT[DI[1]][TT[-DI[61]]]));
                for (rI(TT[DI[31]] = Number.MIN_SAFE_INTEGER, TT[DI[65]] = TT[DI[27]]), TT[DI[64]] = DI[1]; TT[DI[64]] < TT[DI[5]] - DI[2]; TT[DI[64]]++) TT[DI[10]][TT[DI[64]]] === Number.MAX_SAFE_INTEGER && TT[-DI[63]][TT[DI[64]]] === Number.MIN_SAFE_INTEGER || rI(TT[DI[31]] = Math.max(TT[DI[31]], TT[DI[10]][TT[DI[64]]] - TT[DI[65]]), TT[DI[65]] = TT[-DI[63]][TT[DI[64]]]);
                return TT[DI[31]] = Math.max(TT[DI[31]], TT[DI[43]] - TT[DI[65]]), TT[DI[31]]
              }, console.log(TT[DI[28]]))
            }(), rI(IT = function(...oT) {
              return SI = oT, BT[TT].apply(this)
            }, oT[DI[5]] = iT[TT]), oT[DI[5]]) {
            function zT(...TT) {
              for (rI(TT[DI[13]] = DI[2], TT[DI[5]] = 'wQTnmArKdCEDG4]80yhqfPY<SxR(1#Bs$*.^oOzp+9e6{/@Vcv~[k`g&u=!>a|_;XZ7UNI?"3})MFiHjL%,l2J5:tWb', TT[DI[21]] = "" + (TT[DI[1]] || ""), TT[DI[27]] = TT[DI[21]].length, TT[DI[10]] = [], TT[DI[67]] = DI[1], TT[DI[34]] = DI[1], TT[-DI[66]] = -DI[2]), TT[DI[3]] = DI[1]; TT[DI[3]] < TT[DI[27]]; TT[DI[3]]++)
                if (TT[DI[57]] = TT[DI[5]].indexOf(TT[DI[21]][TT[DI[3]]]), TT[DI[57]] !== -DI[2])
                  if (TT[-DI[66]] < DI[1]) TT[-DI[66]] = TT[DI[57]];
                  else {
                    rI(TT[-DI[66]] += TT[DI[57]] * DI[32], TT[DI[67]] |= TT[-DI[66]] << TT[DI[34]], TT[DI[34]] += (TT[-DI[66]] & DI[35]) > DI[36] ? DI[37] : DI[38]);
                    do {
                      rI(TT[DI[10]].push(TT[DI[67]] & DI[12]), TT[DI[67]] >>= DI[11], TT[DI[34]] -= DI[11])
                    } while (TT[DI[34]] > DI[24]);
                    TT[-DI[66]] = -DI[2]
                  } return TT[-DI[66]] > -DI[2] && TT[DI[10]].push((TT[DI[67]] | TT[-DI[66]] << TT[DI[34]]) & DI[12]), xI(TT[DI[10]])
            }

            function WT(...TT) {
              return TT[DI[13]] = DI[2], typeof TI[TT[DI[1]]] === DI[18] ? TI[TT[DI[1]]] = zT(oI[TT[DI[1]]]) : TI[TT[DI[1]]]
            }

            function XT(...TT) {
              TT[DI[13]] = DI[1]
            }
            WT(116) + "A" in KI && XT(), oT[DI[5]]
          }
          return IT
        }
        XT = FI[TT] || (FI[TT] = LT())
      } else {
        function xT(...TT) {
          function oT(...TT) {
            return TT[DI[13]] = DI[2], typeof TI[TT[DI[1]]] === DI[18] ? TI[TT[DI[1]]] = function(...TT) {
              for (rI(TT[DI[13]] = DI[2], TT[DI[68]] = '?HTMdhW0;`ie$}FzPo[:t&6"KEO8DspQUlcS+(3{C7.>VqBy#@=GxL!^aJZ9bf1kwr|NA25_nY*/v4I~<jg%uRm),]X', TT[DI[21]] = "" + (TT[DI[1]] || ""), TT[DI[4]] = TT[DI[21]].length, TT[DI[28]] = [], TT[DI[60]] = DI[1], TT[-DI[70]] = DI[1], TT[DI[3]] = -DI[2]), TT[DI[11]] = DI[1]; TT[DI[11]] < TT[DI[4]]; TT[DI[11]]++)
                if (TT[DI[69]] = TT[DI[68]].indexOf(TT[DI[21]][TT[DI[11]]]), TT[DI[69]] !== -DI[2])
                  if (TT[DI[3]] < DI[1]) TT[DI[3]] = TT[DI[69]];
                  else {
                    rI(TT[DI[3]] += TT[DI[69]] * DI[32], TT[DI[60]] |= TT[DI[3]] << TT[-DI[70]], TT[-DI[70]] += (TT[DI[3]] & DI[35]) > DI[36] ? DI[37] : DI[38]);
                    do {
                      rI(TT[DI[28]].push(TT[DI[60]] & DI[12]), TT[DI[60]] >>= DI[11], TT[-DI[70]] -= DI[11])
                    } while (TT[-DI[70]] > DI[24]);
                    TT[DI[3]] = -DI[2]
                  } return TT[DI[3]] > -DI[2] && TT[DI[28]].push((TT[DI[60]] | TT[DI[3]] << TT[-DI[70]]) & DI[12]), xI(TT[DI[28]])
            }(oI[TT[DI[1]]]) : TI[TT[DI[1]]]
          }
          TT[DI[13]] = DI[1], rI(TT[DI[73]] = oT(118) + oT(DI[14]) + oT(120) + oT(121) + oT(DI[56]) + oT(123) + DI[76], TT[DI[2]] = oT(DI[67]) + oT(125) + oT(DI[55]) + oT(DI[71]) + oT(DI[72]) + oT(DI[16]) + DI[77], TT[DI[43]] = oT(DI[66]) + oT(131) + oT(DI[42]) + DI[78], TT[DI[73]].match(TT[DI[2]] + TT[DI[43]]))
        }
        kT(117) + "O" in KI && xT(), XT = BT[TT]()
      }
      if (IT === kT(133) + kT(134)) {
        function cT(...TT) {
          for (rI(TT[DI[13]] = DI[2], TT[DI[2]] = 'H_JC";}ibyp[KOLl,NIn]=)Vt`w3!&uTr8X#Zz5MSDRQ|7B(><U0gEocA@9*+$?^~1.:xFkfG2P{sv/6WmY%4qdahje', TT[DI[37]] = "" + (TT[DI[1]] || ""), TT[DI[27]] = TT[DI[37]].length, TT[DI[28]] = [], TT[DI[74]] = DI[1], TT[DI[75]] = DI[1], TT[DI[7]] = -DI[2]), TT[DI[49]] = DI[1]; TT[DI[49]] < TT[DI[27]]; TT[DI[49]]++)
            if (TT[DI[57]] = TT[DI[2]].indexOf(TT[DI[37]][TT[DI[49]]]), TT[DI[57]] !== -DI[2])
              if (TT[DI[7]] < DI[1]) TT[DI[7]] = TT[DI[57]];
              else {
                rI(TT[DI[7]] += TT[DI[57]] * DI[32], TT[DI[74]] |= TT[DI[7]] << TT[DI[75]], TT[DI[75]] += (TT[DI[7]] & DI[35]) > DI[36] ? DI[37] : DI[38]);
                do {
                  rI(TT[DI[28]].push(TT[DI[74]] & DI[12]), TT[DI[74]] >>= DI[11], TT[DI[75]] -= DI[11])
                } while (TT[DI[75]] > DI[24]);
                TT[DI[7]] = -DI[2]
              } return TT[DI[7]] > -DI[2] && TT[DI[28]].push((TT[DI[74]] | TT[DI[7]] << TT[DI[75]]) & DI[12]), xI(TT[DI[28]])
        }

        function KT(TT) {
          return typeof TI[TT] === DI[18] ? TI[TT] = cT(oI[TT]) : TI[TT]
        }

        function MT(...TT) {
          function oT(...TT) {
            return TT[DI[13]] = DI[2], typeof TI[TT[DI[1]]] === DI[18] ? TI[TT[DI[1]]] = function(...TT) {
              for (rI(TT[DI[13]] = DI[2], TT[DI[5]] = 'iFSGnrqRshXgJEIWjYHpAPQcMfkoBbdCVmDza9~Zt$e@K_{?L|!T>#&NU;/,l("%76`4wvy*+u8<[.x:)]}=02^531O', TT[DI[21]] = "" + (TT[DI[1]] || ""), TT[DI[27]] = TT[DI[21]].length, TT[DI[10]] = [], TT[DI[60]] = DI[1], TT[DI[34]] = DI[1], TT[DI[24]] = -DI[2]), TT[DI[3]] = DI[1]; TT[DI[3]] < TT[DI[27]]; TT[DI[3]]++)
                if (TT[DI[31]] = TT[DI[5]].indexOf(TT[DI[21]][TT[DI[3]]]), TT[DI[31]] !== -DI[2])
                  if (TT[DI[24]] < DI[1]) TT[DI[24]] = TT[DI[31]];
                  else {
                    rI(TT[DI[24]] += TT[DI[31]] * DI[32], TT[DI[60]] |= TT[DI[24]] << TT[DI[34]], TT[DI[34]] += (TT[DI[24]] & DI[35]) > DI[36] ? DI[37] : DI[38]);
                    do {
                      rI(TT[DI[10]].push(TT[DI[60]] & DI[12]), TT[DI[60]] >>= DI[11], TT[DI[34]] -= DI[11])
                    } while (TT[DI[34]] > DI[24]);
                    TT[DI[24]] = -DI[2]
                  } return TT[DI[24]] > -DI[2] && TT[DI[10]].push((TT[DI[60]] | TT[DI[24]] << TT[DI[34]]) & DI[12]), xI(TT[DI[10]])
            }(oI[TT[DI[1]]]) : TI[TT[DI[1]]]
          }
          TT[DI[13]] = DI[1], rI(TT[DI[5]] = KT(DI[51]) + oT(DI[65]) + oT(138) + oT(139) + oT(140) + oT(141) + DI[76], TT[DI[2]] = oT(DI[62]) + oT(DI[101]) + oT(DI[63]) + DI[77], TT[DI[43]] = oT(145) + oT(146) + oT(147) + oT(148) + oT(149) + oT(150) + oT(151) + DI[78], TT[DI[5]].match(TT[DI[2]] + TT[DI[43]]))
        }
        return KT(DI[122]) in KI && MT(), {
          [KT(152) + KT(153)]: XT
        }
      }
      return XT
    }

    function rI() {
      rI = function() {}
    }
    rI(TI = {}, oI = ["<B5QcNJcxlfrR<}1", "UV2c=NB>.O[[5xdm@%+1?+^", "i%{>^Xnu9g`xs~af_P1yI@5?NB`{Sx", "IFc,(wwO^B;|gZ^8)!dABg/O;B=@P12m", "^@(4+}oRg;.xo$afC[YVtiCZYsz{KNlo9<JDbFB~.O", "HV4$Tt{g:%k>Y%:PcG@$x&bg8Lm?=!QDvD>do2(drO", "a@(Q,u5eCBNURy4rk:Sw5uvO%#Ps:Nc", 'yu2@MvqBtFh4jtayaz7VKJfW}wt<PhiBAY1&THu=7zUz"9o!IcM5', "n:+5Dp2SO%,}Pv185ivmA*mB9B:JTFhj90", 'd:w,q@)I4FfbLN"D6DZUTsNjp73~!{BIkDV>8sF=', 'AVo&~Z>j"?[hrx,V4@4yX,KVv#/ruO_m=$RQ~8yW?7?bRFzmqJ#SYCmr"Q', "Y.AH+,6gFARXONP/j;}Vb,ouk[^kY1F.uglbw+3U5/", '"Gy+cJ^', "4Njy$~t61zK068lrP@I4$~u?h#/Xo!ABgiG18G%?LQ<,k1L", "}JP5jh#vRadBcKL!J.V,!t^", "lJFV/Mce>%", 'zg3@qCHULz*2:NrWc>W+mj/W}w]*B"', 'p~F>vP~r[F>wB"C8F.N@S?^e#w~F9<De`Lx', "aui5Bp^", '!i{U>ghuuBkwltdf/1IyQnuR%a[{9x({+7@DVj"wv2=y1CC[', '8Y4$!iAe"Ok(Yv$j]A5>g+`l#waOZ57!N;?+u$!kBFLz+&MMf1x', '=L>dv$##?z3>dh={PVzV!g"0', 'o1imN?jef;PSdM"!', 'D<#$"Kfv!%qSiM^o_;*&<gnSr?RzV&,faFApz', "RGHe7,FuER", "iLIy|gQnY;g+.iZ{Yg%S(,JRW/dWL9TVm;F,tZ6Us[(+TNeVORPbu#:0Q,I", ">;Y>*kPUv<l~MhHDVi,cQNtWp2=?~Z;{*x=", "ZJPmv?2e|FA?4ixDFm35Ykf6pAE|^", "WF%UcXce/@A?$9MBHY.bvPj=U?AG%=Zec$*Au+gv9<", "_:*yI@rAR;pFa&/fvL}VPW%8?zi(Fr@yjGyQi,;dj[(a1K;DgL{UR", "11y4_pI8Ng.[>$eo", "p:lbZIVU+wuUM![1*1$d7tpI=@3+Z$*mz4@m{2^", '[BcD<,s0^<zk]=ayX!T@qdX0<B:a_v}M<@CSk*/W^R/Q@OQPQjx+(u|I"?+>^', '_N]d86=~:a3R~K"D5#Q&7n,U5lJmk%GDr<aU,~@BlB|(/=', "8Nn}zt[0v2X~;r7Py@<Sk>&SBgnK|tNP7Rv}lX0ftL", ")Dr@&J#0CBWD~$`IFDPSy@P07z#s.=DrUix&1gOw9E{X3={My;ZDC+o=", "/Vg@Y{Pgy[Wak%hyPYx", "kJi}f|qulBDI+5L", "x$=Vq{9r]zK$?O]o_znU", "}.FVqd9S1[IZu{kPSi`54W%S7;#bLNYPY;~m.MP/IR>`Q{uj_N#Smt!KrzIr0", "bsAL7t`l|B1JR<<", '4u=+Tgb#!;Rk,M"D&2XL', "xRp5w?vO@/K2K&x{eF5DS+:gYz:mjy?VLg4bxw:UNL2", 'Nihd/Kb0zg8m}i0YcWpm{v.fBRyZZ5lVBi|@gPnSk2C5Q"%jPg0', ">D~UcwgfMlKw!9~MX%CD.6ERj?#E;8,W", "74dA&X:#C7acP%G!a#0", "Cmje^>2jNE,~P~sV", 'oRdVK:@et@V}it!VED~,cJVUJ7q5Gt"/T7Ac7gb0k%', "r1[d|K?emabA.*{{?:{>5N;W(LE$Z5]V;Nx", "Y>FwL}OO(/fS~$LD?s|b+8huwOZ2~Kx!@:d+/*YgY[b0?{@IFD#}c8z=", 'R5s+UXHgq[qDJ{/y"<<L4SbU@O:%qyRzLiDeV6[VH<_uKF6m+^', "#c^Hz*r8x", ")mGVF+mnKL2}Nx$PfYJmepE|(Lu}$$JVG@R>3vSlpBGBGx", ")m{U]HtV+s/rgNo!L.okyjOUn/~!&x", '".!cN~P#b;5Glyc', "*I*4.v#04#WyN<`I#s.$Sk?jv2m", "fY&@q{=8T%b~Ss08jG,L;N(.x", "TI|@{Wx![Rh(RtGD{1ULY{J|%EuaU1>!M1Iyypnu]s)BLNSm5EiSvk}uq2S", "`<[@V6s.Ml](@!I.k2!cGNQ8sAX~.%FW3;eU", "ejz+X})>D<RC]$e8uL.mLK>S%acO[FNj,d3m1MYvQ,[{0", 'Ou`mo@NSQ;KKJ$x{gL*&9t"Zg[{&PtKPagmQ4WjR]J;WmsBzLu?A3Z>S@Om', "O<j@#>Alf;b|/imWLB|bti6fes9xX%1mQjc},)z?OJ^L0", '@IiLlX>eU?FmJ{0{<B3SW@30Js6`="AMK{0ya}jSM/t#W?9j~^', "di*yxnsWfJ6+p%8DyV=", "{[8>3p>R)LuZ@?A1H>0pD@!wxg9Js?)m1uNL^I=rXR", 'n%mQnH]R"', "ViMbbKb#v#3~^8RPi{[kEKBAx", "WIVQcIpry%>`(hEBk2MD3p7!IL[r(~xeJ{[d[ST[YzC%.1J.", "Dx@}KtDfVat*I$c", "(Ja}N$~>n?$%Y1c", 'K!"U)tsVm;=e0', '}cMUWb=ot@MS")E8[1%,"I/f#R/IqtDoXm*&iI|cD<VN.=me_zGwguUU@/oQ0', "@gG,ej2ex", "m@Y>:2CfNB@$Rte[", "Zd=d=FHUNLy?d~Ny5i]+Y#./_;6V5ywj$NBy<8cAqAPblsBI", "cYXbg+<KG@%J^<1f4uBVg)XfTJ4z,%}/U1x", "~G{}s&!f(g=p+&Y1qi~U~Zme}J[[V&%", "n:.bWC^", "mLPmw2TVJwh~0", "t%2@`*P/+AcXY=ujzz;dlF9u~l<X:Ne8", '@cgcS&vgn?*Z$OVo;LJUPCe=#FdZVCLP@j4e/ter:2"I)vxYvD=', "zdubP#cA0F%G+N#eQ{i5", "5@gdFNAr//", "JxhdR}_ReE$|:N`fld04w&{UilRO}xuy#xnm`SCVxRR{9i71G@0k0&M=", "dcPLdh.w?z/IrsiB{.J,L,2?^<?U]$;8tddw;wPOj;qE)<Je;D~i2u6f>[", '"g/&w+[W:%', "$Iy+eS@e0B8IkM9P_dG>,X^8S/ngb&kM#[s+E>o|hFPx0", 'HFk"xIRrlwFmo!yoc@]VsuDv+AcC#~8rFj#Sh:4=', "YD,LfbTf!?OO?!!I;Nv5pK>B!?X($9DrGNv$S)u=", "VFe}:+;0$B*EsM2IuD^HTbA8+A;~u?(BIjgc_i^", "o{&@;)qRF2]w3%V.2d{,Y2&RU,oaX1Y/J@pD^FPUCBaXw{wyUgcL", '"FnUj@#vX<#UR<lVyz#$ygbd*LWQqidI1L$cS&]GpARNRtdIYi~i@{_J]Jqa0', "3%JD1t7Uq;&|>M1VB#8U7Nu?1;@", "D@,m6ipcCJjxyMe8CGe}`6{/4<,b6!R", "f>H@K8`8bJn!s%LMY1_b:C&r%sW", "FDeU6*CvILT0|vE[0$oV=NhRZ?/{;re8;x!ciXOfk%TAO8x[:jlLBZk0", 'Q>B&SPJG>Jluv=jBEdh"', 'b:9e/M"0tR]+PiYPa#6}.vGB,?$Z^', '8>("VWbd$R@bqNU{Hgk4rS3fS/>Vsh<P;.[cLn3Zj?U93=', "M.[c|S6Wv<6A!9GrTs~idhd0TJJaX1P!UV3$X*9r+%QLY%.VWNic[gWU~O", "5lU)LGVd", "EdMD+Kz=", "2daYaCIA", "G|/3a5WU", "M07^?Cfu", "F#c^LC;", "n_K3%z1<", "d>ZvsD;", "~sJdP~Pu", "G_WZOKd;", "[HD[]u4A", "pvT}M", "Yx5~4m@c", "Yf}jV@jU", "]%@DD", "5PD}c),U", "uCQg6v1T", ";WFtgd2U", "<;g8y/<?", "hRoWLb~H", "25VQ|,lH", "@oC8>57H", "ZcVOlI[T", "dS{vI_BT", "S*VQ141K=kDrH", "2Ev^@ABT0oUm?", "s$(=;2BWb1x5?", "mEw8TnBWnFL5H", 'B"rU`~am?[!BH', "bg<8!5BWvLmJ?", 'szNUq<3T]9|@5($U^">OtCjGSfW#EKmPgEkp.)V+WfxxEK[F{1K8mDRk71KnH', 'iH(xoI<[0fy3e3OSH(/O6Cd*a0*a&}(:jEkp"DWwOo}2(}qF!(d_Kw:ymxC<?', 'mEkpLcW["xH7F}9SWWhOw+/G6x5al}B&8WhOi34G`e*a&}?[4Ea875T*Z;{Y?', "=js3nw(U", "F5~_q", "tlqP9vLJ", "WbY3({WH", "r2Yq#l:F", "vyKC`3mF", "|Yto@y$F", "/DKkmxHS", "nzZ[x*{S", 'z8KC"."M!%B6SEB@XnrXBwC<G', 'bJ9!sv{ql">yvEuAGHrkW,MJR', "{c6Vh:U^iH&{#lLPbJrkozvTS", "bW4V_)~S1,`|y9JVNc@kAt]TDj", "gqTL]muTz(}01+XVJWTLaB[DLh", "yf7<*vFp[YBBu)EVn.Q[:v{MhR", "bLLoOB2%NY?%0)VHG}1G4vcEhR", 'mLLo?6i{t"JTG/kY5ygk}C[Dih', "yf7<dwP?cYEvuvKIG}|G3BK8MY", "MLf+1B]cX>WvQSKIp9usvC#cjh", "J&tyR<7_", "ixkf&", "<F.Hw&4=", 'YYDm"&IeQz', "0#ZVCi2", "?k/:ht*a.", "0#ZVCiP]", "|C>/", '%ROKL"e]', "_.45", "hjf0]2GoD.mg2(&2", "3}$QJ2VxeZ7RaM/;", "o}G4F;2opQD+r(e2", "hV>FuIHxZJ%6R(te", "D.)FfSZCsguu94o", "KbE^|vt4", 'h4mRL0"k', "DGED{8Qk", "r]a6Y", "DGEDpb$g", "iMmOv", '*"lHBLKnBodpsL2V', "H1&s]o0POj@~!jM*", 'u"3yCvozguhhkZ1<', 'T1%~/>e[hi#EZ2"1', "~LKv6XKa6R/>t>H", "&C@3v0=G", "CiDs25J", "W$I*fPS3", "u_:s)e~3", "ziY)Y", "MmX)`hyB", ".yT5D", "PH%3*6@j", "s~,lVteg", "Zw{HV1?R", "5mcSMEXx", "U.=G__Nx", "*E$*@>)S*F", 's"!1!', 's"!1$C*8<6kh<', "n6()e?FL5yUEMP16#:;|>QIB", ".yF4,F(u]ly.+8uV4mF4M6pd", 'n<8:4}3kc#&N"PNr5j3)0}tB']), rI(II = function(...TT) {
      rI(TT[DI[13]] = DI[1], TT[-DI[16]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], TT[-DI[14]] = DI[19], TT[DI[15]] = []);
      try {
        rI(TT[-DI[14]] = Object, TT[DI[15]][DI[26]]("".__proto__.constructor.name))
      } catch (oI) {}
      TT: for (TT[DI[4]] = DI[1]; TT[DI[4]] < TT[-DI[16]][DI[13]]; TT[DI[4]]++) try {
        for (TT[-DI[14]] = TT[-DI[16]][TT[DI[4]]](), TT[DI[17]] = DI[1]; TT[DI[17]] < TT[DI[15]][DI[13]]; TT[DI[17]]++)
          if (typeof TT[-DI[14]][TT[DI[15]][TT[DI[17]]]] === DI[18]) continue TT;
        return TT[-DI[14]]
      } catch (oI) {}
      return TT[-DI[14]] || this
    }() || {}, iI = II.TextDecoder, zI = II.Uint8Array, kI = II[DI[120]], WI = II.String || String, XI = II.Array || Array, BI = function(...TT) {
      return rI(TT[DI[13]] = DI[1], TT[DI[27]] = new XI(DI[72]), TT[DI[28]] = WI[DI[23]] || WI.fromCharCode, TT[DI[15]] = []),
        function(...oT) {
          for (rI(oT[DI[13]] = DI[2], oT[DI[5]] = DI[19], oT[DI[21]] = DI[19], oT[DI[20]] = oT[DI[1]][DI[13]], TT[DI[15]][DI[13]] = DI[1]), oT[DI[10]] = DI[1]; oT[DI[10]] < oT[DI[20]];) rI(oT[DI[21]] = oT[DI[1]][oT[DI[10]]++], oT[DI[21]] <= DI[71] ? oT[DI[5]] = oT[DI[21]] : oT[DI[21]] <= 223 ? oT[DI[5]] = (oT[DI[21]] & DI[85]) << DI[9] | oT[DI[1]][oT[DI[10]]++] & DI[22] : oT[DI[21]] <= 239 ? oT[DI[5]] = (oT[DI[21]] & DI[99]) << DI[25] | (oT[DI[1]][oT[DI[10]]++] & DI[22]) << DI[9] | oT[DI[1]][oT[DI[10]]++] & DI[22] : WI[DI[23]] ? oT[DI[5]] = (oT[DI[21]] & DI[24]) << DI[111] | (oT[DI[1]][oT[DI[10]]++] & DI[22]) << DI[25] | (oT[DI[1]][oT[DI[10]]++] & DI[22]) << DI[9] | oT[DI[1]][oT[DI[10]]++] & DI[22] : (oT[DI[5]] = DI[22], oT[DI[10]] += DI[4]), TT[DI[15]][DI[26]](TT[DI[27]][oT[DI[5]]] || (TT[DI[27]][oT[DI[5]]] = TT[DI[28]](oT[DI[5]]))));
          return TT[DI[15]][DI[54]]("")
        }
    }()), rI(FI = Object[LI(101)](null), SI = void 0), [][DI[13]] = DI[1], LI(154) + DI[28] in KI && function(...TT) {
      rI(TT[DI[13]] = DI[1], TT[DI[27]] = function(...TT) {
        if (rI(TT[DI[13]] = DI[2], TT[DI[2]] = TT[DI[1]].length), TT[DI[2]] < DI[43]) return DI[1];
        if (rI(TT[DI[43]] = Math.max(...TT[DI[1]]), TT[DI[27]] = Math.min(...TT[DI[1]])), TT[DI[43]] === TT[DI[27]]) return DI[1];
        for (rI(TT[DI[10]] = Array(TT[DI[2]] - DI[2]).fill(Number.MAX_SAFE_INTEGER), TT[-DI[79]] = Array(TT[DI[2]] - DI[2]).fill(Number.MIN_SAFE_INTEGER), TT[DI[34]] = Math.ceil((TT[DI[43]] - TT[DI[27]]) / (TT[DI[2]] - DI[2])), TT[DI[7]] = DI[1]), TT[DI[3]] = DI[1]; TT[DI[3]] < TT[DI[2]]; TT[DI[3]]++) TT[DI[1]][TT[DI[3]]] !== TT[DI[27]] && TT[DI[1]][TT[DI[3]]] !== TT[DI[43]] && rI(TT[DI[7]] = Math.floor((TT[DI[1]][TT[DI[3]]] - TT[DI[27]]) / TT[DI[34]]), TT[DI[10]][TT[DI[7]]] = Math.min(TT[DI[10]][TT[DI[7]]], TT[DI[1]][TT[DI[3]]]), TT[-DI[79]][TT[DI[7]]] = Math.max(TT[-DI[79]][TT[DI[7]]], TT[DI[1]][TT[DI[3]]]));
        for (rI(TT[DI[57]] = Number.MIN_SAFE_INTEGER, TT[-DI[81]] = TT[DI[27]]), TT[DI[80]] = DI[1]; TT[DI[80]] < TT[DI[2]] - DI[2]; TT[DI[80]]++) TT[DI[10]][TT[DI[80]]] === Number.MAX_SAFE_INTEGER && TT[-DI[79]][TT[DI[80]]] === Number.MIN_SAFE_INTEGER || rI(TT[DI[57]] = Math.max(TT[DI[57]], TT[DI[10]][TT[DI[80]]] - TT[-DI[81]]), TT[-DI[81]] = TT[-DI[79]][TT[DI[80]]]);
        return TT[DI[57]] = Math.max(TT[DI[57]], TT[DI[43]] - TT[-DI[81]]), TT[DI[57]]
      }, console.log(TT[DI[27]]))
    }(), rI(Po = (...TT) => {
      function oT(...TT) {
        return TT[DI[13]] = DI[2], typeof TI[TT[DI[1]]] === DI[18] ? TI[TT[DI[1]]] = function(...TT) {
          for (rI(TT[DI[13]] = DI[2], TT[DI[5]] = 'J3FADavY<*b`(@mrcuV"z8pNIO!)?X+]f0ieUtMg_[LT%Q}46HE$1{y,&dKBl~Gwk>=^:5|Pj;.C#sRSxq9h2oW7Zn/', TT[DI[21]] = "" + (TT[DI[1]] || ""), TT[DI[4]] = TT[DI[21]].length, TT[DI[28]] = [], TT[DI[60]] = DI[1], TT[DI[9]] = DI[1], TT[DI[7]] = -DI[2]), TT[DI[3]] = DI[1]; TT[DI[3]] < TT[DI[4]]; TT[DI[3]]++)
            if (TT[DI[57]] = TT[DI[5]].indexOf(TT[DI[21]][TT[DI[3]]]), TT[DI[57]] !== -DI[2])
              if (TT[DI[7]] < DI[1]) TT[DI[7]] = TT[DI[57]];
              else {
                rI(TT[DI[7]] += TT[DI[57]] * DI[32], TT[DI[60]] |= TT[DI[7]] << TT[DI[9]], TT[DI[9]] += (TT[DI[7]] & DI[35]) > DI[36] ? DI[37] : DI[38]);
                do {
                  rI(TT[DI[28]].push(TT[DI[60]] & DI[12]), TT[DI[60]] >>= DI[11], TT[DI[9]] -= DI[11])
                } while (TT[DI[9]] > DI[24]);
                TT[DI[7]] = -DI[2]
              } return TT[DI[7]] > -DI[2] && TT[DI[28]].push((TT[DI[60]] | TT[DI[7]] << TT[DI[9]]) & DI[12]), xI(TT[DI[28]])
        }(oI[TT[DI[1]]]) : TI[TT[DI[1]]]
      }
      TT[DI[13]] = DI[2];
      const IT = function(TT) {
          var oT;
          return {
            meta: {
              ...TT.meta,
              formatVersion: eo.g,
              variation: null !== (oT = TT.meta.variation) && void 0 !== oT ? oT : null
            },
            initialChunks: TT.initialChunks.map((TT => ({
              chunkPos: TT.chunkPos,
              rle: Ro(TT.rle),
              sharedBlockData: fo("sharedBlockData", TT.sharedBlockData)
            }))),
            ticks: TT.ticks.map(yo),
            editState: TT.editState
          }
        }(TT[DI[1]]),
        iT = io(eo[DI[7]]);
      TT[DI[5]] = DI[19];
      try {
        TT[DI[5]] = iT[LI(155)](IT)
      } catch (XI) {
        function BT(...TT) {
          for (rI(TT[DI[13]] = DI[2], TT[DI[2]] = '2]7&Go.K5/[,T}OU!^W)hxQHanXw~v:%yYElc@|8>dDCN3m9"Mq#ZPk?6<BuRsz_j{p40ALFJS*+tVb;ie=g$(r1`If', TT[DI[43]] = "" + (TT[DI[1]] || ""), TT[DI[4]] = TT[DI[43]].length, TT[DI[10]] = [], TT[DI[15]] = DI[1], TT[DI[83]] = DI[1], TT[DI[7]] = -DI[2]), TT[DI[11]] = DI[1]; TT[DI[11]] < TT[DI[4]]; TT[DI[11]]++)
            if (TT[-DI[82]] = TT[DI[2]].indexOf(TT[DI[43]][TT[DI[11]]]), TT[-DI[82]] !== -DI[2])
              if (TT[DI[7]] < DI[1]) TT[DI[7]] = TT[-DI[82]];
              else {
                rI(TT[DI[7]] += TT[-DI[82]] * DI[32], TT[DI[15]] |= TT[DI[7]] << TT[DI[83]], TT[DI[83]] += (TT[DI[7]] & DI[35]) > DI[36] ? DI[37] : DI[38]);
                do {
                  rI(TT[DI[10]].push(TT[DI[15]] & DI[12]), TT[DI[15]] >>= DI[11], TT[DI[83]] -= DI[11])
                } while (TT[DI[83]] > DI[24]);
                TT[DI[7]] = -DI[2]
              } return TT[DI[7]] > -DI[2] && TT[DI[10]].push((TT[DI[15]] | TT[DI[7]] << TT[DI[83]]) & DI[12]), xI(TT[DI[10]])
        }

        function FT(...TT) {
          return TT[DI[13]] = DI[2], typeof TI[TT[DI[1]]] === DI[18] ? TI[TT[DI[1]]] = BT(oI[TT[DI[1]]]) : TI[TT[DI[1]]]
        }
        throw rI(console[FT(156)](IT), iT[FT(DI[33])](IT, {
          [FT(158) + FT(159)]: (...TT) => (FT(160) in KI && function(...TT) {
            rI(TT[DI[13]] = DI[1], TT[-DI[110]] = function(...TT) {
              function oT(TT) {
                return XT(kT(ST(TT)))
              }

              function IT(...TT) {
                return TT[DI[13]] = DI[43], XT(WT(ST(TT[DI[1]]), ST(TT[DI[2]])))
              }

              function iT(...TT) {
                return TT[DI[13]] = DI[43], BT(WT(ST(TT[DI[1]]), ST(TT[DI[2]])))
              }

              function zT(...TT) {
                return TT[DI[13]] = DI[4], FT(WT(ST(TT[DI[1]]), ST(TT[DI[2]])), TT[DI[43]])
              }

              function kT(TT) {
                return LT(wT(DT(TT), TT.length * DI[11]))
              }

              function WT(...TT) {
                function oT(...TT) {
                  for (rI(TT[DI[13]] = DI[2], TT[DI[5]] = 'lD4gQ1nV!5h[=d"$8(c@Y2?PSEe&</^MW7~jTGFm3:Uo|r#CJ.xI`ptuHq0zLyNk6+*%;]9{ab)vf_iZOwBsKXA>},R', TT[DI[21]] = "" + (TT[DI[1]] || ""), TT[-DI[87]] = TT[DI[21]].length, TT[DI[90]] = [], TT[-DI[89]] = DI[1], TT[DI[34]] = DI[1], TT[DI[24]] = -DI[2]), TT[DI[31]] = DI[1]; TT[DI[31]] < TT[-DI[87]]; TT[DI[31]]++)
                    if (TT[DI[88]] = TT[DI[5]].indexOf(TT[DI[21]][TT[DI[31]]]), TT[DI[88]] !== -DI[2])
                      if (TT[DI[24]] < DI[1]) TT[DI[24]] = TT[DI[88]];
                      else {
                        rI(TT[DI[24]] += TT[DI[88]] * DI[32], TT[-DI[89]] |= TT[DI[24]] << TT[DI[34]], TT[DI[34]] += (TT[DI[24]] & DI[35]) > DI[36] ? DI[37] : DI[38]);
                        do {
                          rI(TT[DI[90]].push(TT[-DI[89]] & DI[12]), TT[-DI[89]] >>= DI[11], TT[DI[34]] -= DI[11])
                        } while (TT[DI[34]] > DI[24]);
                        TT[DI[24]] = -DI[2]
                      } return TT[DI[24]] > -DI[2] && TT[DI[90]].push((TT[-DI[89]] | TT[DI[24]] << TT[DI[34]]) & DI[12]), xI(TT[DI[90]])
                }

                function IT(...TT) {
                  return TT[DI[13]] = DI[2], typeof TI[TT[DI[1]]] === DI[18] ? TI[TT[DI[1]]] = oT(oI[TT[DI[1]]]) : TI[TT[DI[1]]]
                }
                TT[DI[13]] = DI[43], TT[DI[5]] = DT(TT[DI[1]]), TT[DI[5]].length > DI[91] && (TT[DI[5]] = wT(TT[DI[5]], TT[DI[1]].length * DI[11]));
                var iT = Array(DI[91]),
                  zT = Array(DI[91]);
                for (TT[DI[92]] = DI[1]; TT[DI[92]] < DI[91]; TT[DI[92]]++) rI(iT[TT[DI[92]]] = 909522486 ^ TT[DI[5]][TT[DI[92]]], zT[TT[DI[92]]] = 1549556828 ^ TT[DI[5]][TT[DI[92]]]);
                return TT[DI[27]] = wT(iT.concat(DT(TT[DI[2]])), DI[93] + TT[DI[2]].length * DI[11]), LT(wT(zT.concat(TT[DI[27]]), cI(IT(167), DI[93], DI[94])))
              }

              function XT(oT) {
                var IT, iT, zT, kT;

                function WT(...TT) {
                  for (rI(TT[DI[13]] = DI[2], TT[DI[96]] = '=kgtAJK,Uau]MB$"jYdI&N5VCv1D_#!ihXpc0`|:EQ3/[8el4<.6%OxW7)*(PSoFLG9fbTqR@~wy+^}{zs>nm?2HZ;r', TT[-DI[95]] = "" + (TT[DI[1]] || ""), TT[DI[27]] = TT[-DI[95]].length, TT[-DI[10]] = [], TT[DI[15]] = DI[1], TT[DI[9]] = DI[1], TT[DI[24]] = -DI[2]), TT[DI[3]] = DI[1]; TT[DI[3]] < TT[DI[27]]; TT[DI[3]]++)
                    if (TT[DI[97]] = TT[DI[96]].indexOf(TT[-DI[95]][TT[DI[3]]]), TT[DI[97]] !== -DI[2])
                      if (TT[DI[24]] < DI[1]) TT[DI[24]] = TT[DI[97]];
                      else {
                        rI(TT[DI[24]] += TT[DI[97]] * DI[32], TT[DI[15]] |= TT[DI[24]] << TT[DI[9]], TT[DI[9]] += (TT[DI[24]] & DI[35]) > DI[36] ? DI[37] : DI[38]);
                        do {
                          rI(TT[-DI[10]].push(TT[DI[15]] & DI[12]), TT[DI[15]] >>= DI[11], TT[DI[9]] -= DI[11])
                        } while (TT[DI[9]] > DI[24]);
                        TT[DI[24]] = -DI[2]
                      } return TT[DI[24]] > -DI[2] && TT[-DI[10]].push((TT[DI[15]] | TT[DI[24]] << TT[DI[9]]) & DI[12]), xI(TT[-DI[10]])
                }

                function XT(...TT) {
                  return TT[DI[13]] = DI[2], typeof TI[TT[DI[1]]] === DI[18] ? TI[TT[DI[1]]] = WT(oI[TT[DI[1]]]) : TI[TT[DI[1]]]
                }
                try {
                  TT[DI[5]]
                } catch (BT) {
                  TT[DI[5]] = DI[1]
                }
                for (rI(IT = TT[DI[5]] ? XT(DI[98]) + XT(169) + XT(DI[73]) : XT(DI[98]) + XT(DI[61]) + XT(172), iT = "", zT = void 0), kT = DI[1]; kT < oT.length; kT++) rI(zT = oT.charCodeAt(kT), iT += IT.charAt(zT >>> DI[10] & DI[99]) + IT.charAt(zT & DI[99]));
                return iT
              }

              function BT(...oT) {
                function IT(...TT) {
                  for (rI(TT[DI[13]] = DI[2], TT[DI[2]] = 'O#Je:H"xyR|D!5pj2U8ri=94P[mVCs0*~ga%XT<fnzd1/SG$LZ?&`({F,oYhtI}u6Bk37^MvwN.@;WEb>]clK)AqQ_+', TT[DI[100]] = "" + (TT[DI[1]] || ""), TT[DI[4]] = TT[DI[100]].length, TT[DI[28]] = [], TT[DI[101]] = DI[1], TT[-DI[102]] = DI[1], TT[-DI[24]] = -DI[2]), TT[DI[11]] = DI[1]; TT[DI[11]] < TT[DI[4]]; TT[DI[11]]++)
                    if (TT[DI[31]] = TT[DI[2]].indexOf(TT[DI[100]][TT[DI[11]]]), TT[DI[31]] !== -DI[2])
                      if (TT[-DI[24]] < DI[1]) TT[-DI[24]] = TT[DI[31]];
                      else {
                        rI(TT[-DI[24]] += TT[DI[31]] * DI[32], TT[DI[101]] |= TT[-DI[24]] << TT[-DI[102]], TT[-DI[102]] += (TT[-DI[24]] & DI[35]) > DI[36] ? DI[37] : DI[38]);
                        do {
                          rI(TT[DI[28]].push(TT[DI[101]] & DI[12]), TT[DI[101]] >>= DI[11], TT[-DI[102]] -= DI[11])
                        } while (TT[-DI[102]] > DI[24]);
                        TT[-DI[24]] = -DI[2]
                      } return TT[-DI[24]] > -DI[2] && TT[DI[28]].push((TT[DI[101]] | TT[-DI[24]] << TT[-DI[102]]) & DI[12]), xI(TT[DI[28]])
                }

                function iT(...TT) {
                  return TT[DI[13]] = DI[2], typeof TI[TT[DI[1]]] === DI[18] ? TI[TT[DI[1]]] = IT(oI[TT[DI[1]]]) : TI[TT[DI[1]]]
                }
                oT[DI[13]] = DI[2];
                try {
                  TT[-DI[85]]
                } catch (zT) {
                  TT[-DI[85]] = ""
                }
                for (rI(oT[-DI[105]] = iT(173) + iT(174) + iT(DI[100]) + iT(DI[75]) + iT(177), oT[DI[21]] = "", oT[DI[4]] = oT[DI[1]].length), oT[-DI[103]] = DI[1]; oT[-DI[103]] < oT[DI[4]]; oT[-DI[103]] += DI[4])
                  for (oT[DI[60]] = oT[DI[1]].charCodeAt(oT[-DI[103]]) << DI[91] | (oT[-DI[103]] + DI[2] < oT[DI[4]] ? oT[DI[1]].charCodeAt(oT[-DI[103]] + DI[2]) << DI[11] : DI[1]) | (oT[-DI[103]] + DI[43] < oT[DI[4]] ? oT[DI[1]].charCodeAt(oT[-DI[103]] + DI[43]) : DI[1]), oT[DI[104]] = DI[1]; oT[DI[104]] < DI[10]; oT[DI[104]]++) oT[-DI[103]] * DI[11] + oT[DI[104]] * DI[9] > oT[DI[1]].length * DI[11] ? oT[DI[21]] += TT[-DI[85]] : oT[DI[21]] += oT[-DI[105]].charAt(oT[DI[60]] >>> DI[9] * (DI[4] - oT[DI[104]]) & DI[22]);
                return oT[DI[21]]
              }

              function FT(...TT) {
                var oT, IT, iT, zT;
                for (rI(TT[DI[13]] = DI[43], TT[-DI[106]] = TT[DI[2]].length, TT[DI[107]] = Array()), TT[DI[10]] = Array(Math.ceil(TT[DI[1]].length / DI[43])), oT = DI[1]; oT < TT[DI[10]].length; oT++) TT[DI[10]][oT] = TT[DI[1]].charCodeAt(oT * DI[43]) << DI[11] | TT[DI[1]].charCodeAt(oT * DI[43] + DI[2]);
                for (; TT[DI[10]].length > DI[1];) {
                  for (rI(zT = Array(), iT = DI[1]), oT = DI[1]; oT < TT[DI[10]].length; oT++) rI(iT = (iT << DI[91]) + TT[DI[10]][oT], IT = Math.floor(iT / TT[-DI[106]]), iT -= IT * TT[-DI[106]]), (zT.length > DI[1] || IT > DI[1]) && (zT[zT.length] = IT);
                  rI(TT[DI[107]][TT[DI[107]].length] = iT, TT[DI[10]] = zT)
                }
                for (TT[DI[28]] = "", oT = TT[DI[107]].length - DI[2]; oT >= DI[1]; oT--) TT[DI[28]] += TT[DI[2]].charAt(TT[DI[107]][oT]);
                for (TT[DI[15]] = Math.ceil(TT[DI[1]].length * DI[11] / (Math.log(TT[DI[2]].length) / Math.log(DI[43]))), oT = TT[DI[28]].length; oT < TT[DI[15]]; oT++) TT[DI[28]] = TT[DI[2]][DI[1]] + TT[DI[28]];
                return TT[DI[28]]
              }

              function ST(...TT) {
                var oT, IT;
                for (rI(TT[DI[13]] = DI[2], TT[DI[5]] = "", TT[-DI[108]] = -DI[2]); ++TT[-DI[108]] < TT[DI[1]].length;) rI(oT = TT[DI[1]].charCodeAt(TT[-DI[108]]), IT = TT[-DI[108]] + DI[2] < TT[DI[1]].length ? TT[DI[1]].charCodeAt(TT[-DI[108]] + DI[2]) : DI[1]), 55296 <= oT && oT <= 56319 && 56320 <= IT && IT <= 57343 && rI(oT = 65536 + ((oT & DI[109]) << DI[115]) + (IT & DI[109]), TT[-DI[108]]++), oT <= DI[71] ? TT[DI[5]] += String.fromCharCode(oT) : oT <= 2047 ? TT[DI[5]] += String.fromCharCode(DI[132] | oT >>> DI[9] & DI[85], DI[72] | oT & DI[22]) : oT <= DI[119] ? TT[DI[5]] += String.fromCharCode(224 | oT >>> DI[25] & DI[99], DI[72] | oT >>> DI[9] & DI[22], DI[72] | oT & DI[22]) : oT <= 2097151 && (TT[DI[5]] += String.fromCharCode(DI[110] | oT >>> DI[111] & DI[24], DI[72] | oT >>> DI[25] & DI[22], DI[72] | oT >>> DI[9] & DI[22], DI[72] | oT & DI[22]));
                return TT[DI[5]]
              }

              function DT(...TT) {
                for (rI(TT[DI[13]] = DI[2], TT[DI[2]] = Array(TT[DI[1]].length >> DI[43])), TT[DI[43]] = DI[1]; TT[DI[43]] < TT[DI[2]].length; TT[DI[43]]++) TT[DI[2]][TT[DI[43]]] = DI[1];
                for (TT[DI[43]] = DI[1]; TT[DI[43]] < TT[DI[1]].length * DI[11]; TT[DI[43]] += DI[11]) TT[DI[2]][TT[DI[43]] >> DI[60]] |= (TT[DI[1]].charCodeAt(TT[DI[43]] / DI[11]) & DI[12]) << DI[114] - TT[DI[43]] % DI[112];
                return TT[DI[2]]
              }

              function LT(...TT) {
                for (rI(TT[DI[13]] = DI[2], TT[DI[113]] = ""), TT[DI[43]] = DI[1]; TT[DI[43]] < TT[DI[1]].length * DI[112]; TT[DI[43]] += DI[11]) TT[DI[113]] += String.fromCharCode(TT[DI[1]][TT[DI[43]] >> DI[60]] >>> DI[114] - TT[DI[43]] % DI[112] & DI[12]);
                return TT[DI[113]]
              }

              function xT(...TT) {
                return TT[DI[13]] = DI[43], TT[DI[1]] >>> TT[DI[2]] | TT[DI[1]] << DI[112] - TT[DI[2]]
              }

              function cT(...TT) {
                return TT[DI[13]] = DI[43], TT[DI[1]] >>> TT[DI[2]]
              }

              function KT(...TT) {
                return TT[DI[13]] = DI[4], TT[DI[1]] & TT[DI[2]] ^ ~TT[DI[1]] & TT[DI[43]]
              }

              function MT(...TT) {
                return TT[DI[13]] = DI[4], TT[DI[1]] & TT[DI[2]] ^ TT[DI[1]] & TT[DI[43]] ^ TT[DI[2]] & TT[DI[43]]
              }

              function rT(...TT) {
                return TT[DI[13]] = DI[2], xT(TT[DI[1]], DI[43]) ^ xT(TT[DI[1]], DI[37]) ^ xT(TT[DI[1]], 22)
              }

              function AT(TT) {
                return xT(TT, DI[9]) ^ xT(TT, DI[80]) ^ xT(TT, DI[39])
              }

              function gT(...TT) {
                return TT[DI[13]] = DI[2], xT(TT[DI[1]], DI[24]) ^ xT(TT[DI[1]], DI[111]) ^ cT(TT[DI[1]], DI[4])
              }

              function hT(...TT) {
                return TT[DI[13]] = DI[2], xT(TT[DI[1]], 17) ^ xT(TT[DI[1]], DI[116]) ^ cT(TT[DI[1]], DI[115])
              }

              function wT(...oT) {
                var IT, iT, zT, kT, WT, XT, BT, FT, ST, DT, LT, xT;
                for (rI(oT[DI[13]] = DI[43], oT[DI[5]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), oT[DI[118]] = new Array(DI[117])), rI(oT[DI[1]][oT[DI[2]] >> DI[60]] |= DI[72] << DI[114] - oT[DI[2]] % DI[112], oT[DI[1]][(oT[DI[2]] + DI[117] >> DI[57] << DI[10]) + DI[99]] = oT[DI[2]]), ST = DI[1]; ST < oT[DI[1]].length; ST += DI[91]) {
                  for (rI(IT = oT[DI[5]][DI[1]], iT = oT[DI[5]][DI[2]], zT = oT[DI[5]][DI[43]], kT = oT[DI[5]][DI[4]], WT = oT[DI[5]][DI[10]], XT = oT[DI[5]][DI[60]], BT = oT[DI[5]][DI[9]], FT = oT[DI[5]][DI[24]]), DT = DI[1]; DT < DI[117]; DT++) rI(DT < DI[91] ? oT[DI[118]][DT] = oT[DI[1]][DT + ST] : oT[DI[118]][DT] = mT(mT(mT(hT(oT[DI[118]][DT - DI[43]]), oT[DI[118]][DT - DI[24]]), gT(oT[DI[118]][DT - DI[99]])), oT[DI[118]][DT - DI[91]]), LT = mT(mT(mT(mT(FT, AT(WT)), KT(WT, XT, BT)), TT[DI[43]][DT]), oT[DI[118]][DT]), xT = mT(rT(IT), MT(IT, iT, zT)), FT = BT, BT = XT, XT = WT, WT = mT(kT, LT), kT = zT, zT = iT, iT = IT, IT = mT(LT, xT));
                  rI(oT[DI[5]][DI[1]] = mT(IT, oT[DI[5]][DI[1]]), oT[DI[5]][DI[2]] = mT(iT, oT[DI[5]][DI[2]]), oT[DI[5]][DI[43]] = mT(zT, oT[DI[5]][DI[43]]), oT[DI[5]][DI[4]] = mT(kT, oT[DI[5]][DI[4]]), oT[DI[5]][DI[10]] = mT(WT, oT[DI[5]][DI[10]]), oT[DI[5]][DI[60]] = mT(XT, oT[DI[5]][DI[60]]), oT[DI[5]][DI[9]] = mT(BT, oT[DI[5]][DI[9]]), oT[DI[5]][DI[24]] = mT(FT, oT[DI[5]][DI[24]]))
                }
                return oT[DI[5]]
              }

              function mT(...TT) {
                return rI(TT[DI[13]] = DI[43], TT[DI[5]] = (TT[DI[1]] & DI[119]) + (TT[DI[2]] & DI[119]), TT[DI[21]] = (TT[DI[1]] >> DI[91]) + (TT[DI[2]] >> DI[91]) + (TT[DI[5]] >> DI[91])), TT[DI[21]] << DI[91] | TT[DI[5]] & DI[119]
              }
              return rI(TT[DI[13]] = DI[1], TT[DI[5]] = DI[1], TT[-DI[85]] = ""), TT[DI[43]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                hex: oT,
                b64: iT,
                any: zT,
                hex_hmac: IT,
                b64_hmac: iT,
                any_hmac: zT
              }
            }(), console.log(TT[-DI[110]]))
          }(), SI = [TT, {}], MI(function(...TT) {
            return TT[DI[13]] = DI[2], typeof TI[TT[DI[1]]] === DI[18] ? TI[TT[DI[1]]] = function(...TT) {
              for (rI(TT[DI[13]] = DI[2], TT[DI[5]] = 'SGr<(Xx3h#H_eTnW%Y`*9O@C7?VZyo{RzBM)d$EwDv/L+c,mpIbqf4uQjFK85i~0;k1AU"a=!2l&g|^:.J6P>[s}tN]', TT[-DI[84]] = "" + (TT[DI[1]] || ""), TT[DI[27]] = TT[-DI[84]].length, TT[DI[28]] = [], TT[DI[57]] = DI[1], TT[DI[34]] = DI[1], TT[DI[7]] = -DI[2]), TT[DI[11]] = DI[1]; TT[DI[11]] < TT[DI[27]]; TT[DI[11]]++)
                if (TT[DI[64]] = TT[DI[5]].indexOf(TT[-DI[84]][TT[DI[11]]]), TT[DI[64]] !== -DI[2])
                  if (TT[DI[7]] < DI[1]) TT[DI[7]] = TT[DI[64]];
                  else {
                    rI(TT[DI[7]] += TT[DI[64]] * DI[32], TT[DI[57]] |= TT[DI[7]] << TT[DI[34]], TT[DI[34]] += (TT[DI[7]] & DI[35]) > DI[36] ? DI[37] : DI[38]);
                    do {
                      rI(TT[DI[28]].push(TT[DI[57]] & DI[12]), TT[DI[57]] >>= DI[11], TT[DI[34]] -= DI[11])
                    } while (TT[DI[34]] > DI[24]);
                    TT[DI[7]] = -DI[2]
                  } return TT[DI[7]] > -DI[2] && TT[DI[28]].push((TT[DI[57]] | TT[DI[7]] << TT[DI[34]]) & DI[12]), xI(TT[DI[28]])
            }(oI[TT[DI[1]]]) : TI[TT[DI[1]]]
          }(DI[107])))
        })), XI
      }
      const zT = Wo(eo[DI[7]], TT[DI[5]]),
        WT = kT[DI[120]][oT(DI[129])](DI[10]);
      return WT[oT(180) + oT(181) + DI[121]](eo[DI[7]]), kT[DI[120]].concat([WT, zT])
    }, Vo = (...TT) => {
      function oT(...TT) {
        return TT[DI[13]] = DI[2], typeof TI[TT[DI[1]]] === DI[18] ? TI[TT[DI[1]]] = function(...TT) {
          for (rI(TT[DI[13]] = DI[2], TT[DI[2]] = 'djB!PwaAe:5]1v[<+ltkyT$%*{DYIng,)WrGSMVZ6sRbo0N423#iEh|~x9>(C@UHpc`X}zQmq;Ju7"F?8K.O=/L&_^f', TT[DI[43]] = "" + (TT[DI[1]] || ""), TT[-DI[123]] = TT[DI[43]].length, TT[DI[28]] = [], TT[DI[15]] = DI[1], TT[DI[9]] = DI[1], TT[DI[24]] = -DI[2]), TT[DI[122]] = DI[1]; TT[DI[122]] < TT[-DI[123]]; TT[DI[122]]++)
            if (TT[DI[31]] = TT[DI[2]].indexOf(TT[DI[43]][TT[DI[122]]]), TT[DI[31]] !== -DI[2])
              if (TT[DI[24]] < DI[1]) TT[DI[24]] = TT[DI[31]];
              else {
                rI(TT[DI[24]] += TT[DI[31]] * DI[32], TT[DI[15]] |= TT[DI[24]] << TT[DI[9]], TT[DI[9]] += (TT[DI[24]] & DI[35]) > DI[36] ? DI[37] : DI[38]);
                do {
                  rI(TT[DI[28]].push(TT[DI[15]] & DI[12]), TT[DI[15]] >>= DI[11], TT[DI[9]] -= DI[11])
                } while (TT[DI[9]] > DI[24]);
                TT[DI[24]] = -DI[2]
              } return TT[DI[24]] > -DI[2] && TT[DI[28]].push((TT[DI[15]] | TT[DI[24]] << TT[DI[9]]) & DI[12]), xI(TT[DI[28]])
        }(oI[TT[DI[1]]]) : TI[TT[DI[1]]]
      }
      TT[DI[13]] = DI[2];
      const IT = kT[DI[120]][oT(182)](TT[DI[1]]);
      if (IT[oT(183) + oT(DI[84])] >= DI[10]) {
        function iT(...TT) {
          for (rI(TT[DI[13]] = DI[2], TT[DI[5]] = 'pxw]fMyhS^;s)q$m!~(&<FR9+aAb|5H*07}t?DO/@oWUi2jN=G{cK_dXB.lYE6e84JV#C3,ru"QP1v:k>%`TLnIzZg[', TT[DI[124]] = "" + (TT[DI[1]] || ""), TT[DI[27]] = TT[DI[124]].length, TT[DI[10]] = [], TT[-DI[125]] = DI[1], TT[DI[9]] = DI[1], TT[DI[7]] = -DI[2]), TT[DI[3]] = DI[1]; TT[DI[3]] < TT[DI[27]]; TT[DI[3]]++)
            if (TT[DI[25]] = TT[DI[5]].indexOf(TT[DI[124]][TT[DI[3]]]), TT[DI[25]] !== -DI[2])
              if (TT[DI[7]] < DI[1]) TT[DI[7]] = TT[DI[25]];
              else {
                rI(TT[DI[7]] += TT[DI[25]] * DI[32], TT[-DI[125]] |= TT[DI[7]] << TT[DI[9]], TT[DI[9]] += (TT[DI[7]] & DI[35]) > DI[36] ? DI[37] : DI[38]);
                do {
                  rI(TT[DI[10]].push(TT[-DI[125]] & DI[12]), TT[-DI[125]] >>= DI[11], TT[DI[9]] -= DI[11])
                } while (TT[DI[9]] > DI[24]);
                TT[DI[7]] = -DI[2]
              } return TT[DI[7]] > -DI[2] && TT[DI[10]].push((TT[-DI[125]] | TT[DI[7]] << TT[DI[9]]) & DI[12]), xI(TT[DI[10]])
        }

        function WT(...TT) {
          return TT[DI[13]] = DI[2], typeof TI[TT[DI[1]]] === DI[18] ? TI[TT[DI[1]]] = iT(oI[TT[DI[1]]]) : TI[TT[DI[1]]]
        }

        function XT(...TT) {
          TT[DI[13]] = DI[1]
        }
        oT(DI[6]) in KI && XT();
        const BT = IT[WT(188) + WT(189)](DI[1]);
        if ((DI[1], eo.o)(BT)) {
          function FT(...TT) {
            for (rI(TT[DI[13]] = DI[2], TT[DI[2]] = ':<SApXm{g;Ej7Vw2D(9b0l35^&t!ev*+1qHY8BzWOuTG.%C`)R="/|nJ?fLKFQ#6x$IU4shcZ,yMi>dokr~a}@P]_[N', TT[DI[21]] = "" + (TT[DI[1]] || ""), TT[DI[130]] = TT[DI[21]].length, TT[DI[131]] = [], TT[DI[60]] = DI[1], TT[DI[129]] = DI[1], TT[DI[24]] = -DI[2]), TT[DI[3]] = DI[1]; TT[DI[3]] < TT[DI[130]]; TT[DI[3]]++)
              if (TT[DI[31]] = TT[DI[2]].indexOf(TT[DI[21]][TT[DI[3]]]), TT[DI[31]] !== -DI[2])
                if (TT[DI[24]] < DI[1]) TT[DI[24]] = TT[DI[31]];
                else {
                  rI(TT[DI[24]] += TT[DI[31]] * DI[32], TT[DI[60]] |= TT[DI[24]] << TT[DI[129]], TT[DI[129]] += (TT[DI[24]] & DI[35]) > DI[36] ? DI[37] : DI[38]);
                  do {
                    rI(TT[DI[131]].push(TT[DI[60]] & DI[12]), TT[DI[60]] >>= DI[11], TT[DI[129]] -= DI[11])
                  } while (TT[DI[129]] > DI[24]);
                  TT[DI[24]] = -DI[2]
                } return TT[DI[24]] > -DI[2] && TT[DI[131]].push((TT[DI[60]] | TT[DI[24]] << TT[DI[129]]) & DI[12]), xI(TT[DI[131]])
          }

          function ST(...TT) {
            return TT[DI[13]] = DI[2], typeof TI[TT[DI[1]]] === DI[18] ? TI[TT[DI[1]]] = FT(oI[TT[DI[1]]]) : TI[TT[DI[1]]]
          }
          const DT = IT[WT(190)](DI[10]),
            LT = ko(BT) ? kT[DI[120]][ST(191)](Xo(BT, DT)) : DT;
          return function(TT) {
            var oT, IT, iT, kT, WT;
            const XT = null === (oT = TT.meta) || void 0 === oT ? void 0 : oT.formatVersion;
            if (!(0, eo.o)(XT)) throw new Error(`Unsupported recording format version: ${XT}`);
            if (!Array.isArray(TT.initialChunks) || !Array.isArray(TT.ticks)) throw new Error("Recording is missing initialChunks or ticks");
            for (const zT of TT.ticks)
              if (!Array.isArray(zT.structuralEvents) || !Array.isArray(zT.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
            const BT = {
              ...TT.meta
            };
            return BT.formatVersion = eo.g, (0, zT.K)(BT.variation) && delete BT.variation, {
              meta: BT,
              initialChunks: TT.initialChunks.map((TT => {
                var oT;
                return {
                  chunkPos: TT.chunkPos,
                  rle: uo(TT.rle),
                  sharedBlockData: null !== (oT = Co("sharedBlockData", TT.sharedBlockData)) && void 0 !== oT ? oT : []
                }
              })),
              ticks: TT.ticks.map(No),
              editState: {
                cameraKeyframes: null !== (IT = null === (iT = TT.editState) || void 0 === iT ? void 0 : iT.cameraKeyframes) && void 0 !== IT ? IT : [],
                playbackMark: null !== (kT = null === (WT = TT.editState) || void 0 === WT ? void 0 : WT.playbackMark) && void 0 !== kT ? kT : null
              }
            }
          }(io(BT)[ST(DI[132])](LT))
        }
      }
      throw new Error(oT(193) + oT(194) + oT(195))
    })
  },
  35937: (TT, oT, IT) => {
    IT.d(oT, {
      A: () => ST,
      C: () => XT,
      d: () => WT,
      g: () => iT,
      i: () => DT,
      l: () => LT,
      o: () => kT,
      r: () => FT,
      v: () => xT,
      z: () => BT
    });
    const iT = 9,
      zT = [9];

    function kT(TT) {
      return zT.includes(TT)
    }
    const WT = 100,
      XT = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips"],
      BT = ["skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride"],
      FT = ["itemName", "amount", "position", "size", "attributes"],
      ST = ["opacity", "zIndex", "overlayColour", "canSee", "meshScaling", "nameTagInfo", "multilineTextBox", "hasPriorityNametag", "ranks", "nameColour", "_isAlive", "_invisibleEffect", "_invincible", "killfeedColour", "hideNameSeed", "_glowingEffect", "lockHeadToBody"],
      DT = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading", "armour", "qJ", "playerCustomisations", "variation", "metaInfo", "soundName", "volume", "refDistance", "maxHearDist", "rate", "ridingVehicleEId", "leaderboardTop", "meshKind", "meshOpts", "aiState"],
      LT = ["selectedSlotIndex", "slots"],
      xT = ["_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"]
  },
  35932: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => DT,
      g: () => cT,
      h: () => BT,
      j: () => WT,
      n: () => XT,
      r: () => FT
    });
    var iT = IT(314),
      zT = IT(16);

    function kT(TT) {
      return null === TT || void 0 === TT ? null : "string" === typeof TT ? TT : null
    }

    function WT(TT, oT) {
      return JSON.stringify(TT) === JSON.stringify(oT)
    }

    function XT(TT) {
      const oT = [];
      for (const IT of Object.keys(TT)) {
        const iT = TT[IT];
        for (const TT of Object.keys(iT)) oT.push({
          hT: IT,
          name: TT,
          ...iT[TT]
        })
      }
      return oT
    }

    function BT(TT) {
      const oT = {};
      for (const kT of TT) {
        var IT, iT, zT;
        oT[kT.hT] || (oT[kT.hT] = {}), oT[kT.hT][kT.name] = {
          icon: kT.icon,
          level: kT.level,
          displayName: null !== (IT = kT.displayName) && void 0 !== IT ? IT : null,
          endTick: null !== (iT = kT.endTick) && void 0 !== iT ? iT : null,
          showInNametag: null === (zT = kT.showInNametag) || void 0 === zT || zT
        }
      }
      return oT
    }

    function FT(TT, oT) {
      const IT = {};
      for (const zT of Object.keys(TT)) {
        const kT = {};
        for (const IT of Object.keys(TT[zT])) {
          const iT = TT[zT][IT];
          null !== iT.endTick && iT.endTick < oT || (kT[IT] = {
            ...iT,
            endTick: null === iT.endTick ? null : iT.endTick - oT
          })
        }(0, iT.mc)(kT) || (IT[zT] = kT)
      }
      return IT
    }

    function ST(TT, oT, IT) {
      if (null !== TT) return Math.max(0, 1e3 * (TT - oT) / IT)
    }
    class DT {
      constructor() {
        this.tracked = {}
      }
      clear() {
        this.tracked = {}
      }
      seedFromClient(TT, oT) {
        this.clear();
        const IT = Date.now();
        for (const XT of TT.iterateEntityIds()) {
          const BT = TT.getEffects(XT);
          if ((0, iT.mc)(BT)) continue;
          const FT = oT(XT);
          for (const TT of Object.keys(BT)) {
            var zT, WT;
            const oT = BT[TT];
            this.upsert(FT, TT, {
              icon: oT.icon,
              level: oT.level,
              displayName: kT(oT.displayName),
              showInNametag: null === (zT = oT.showInNametag) || void 0 === zT || zT,
              endTime: void 0 !== oT.duration && null !== oT.duration ? (null !== (WT = oT.appliedAt) && void 0 !== WT ? WT : IT) + oT.duration : null
            })
          }
        }
      }
      upsert(TT, oT, IT) {
        this.tracked[TT] || (this.tracked[TT] = {}), this.tracked[TT][oT] = IT
      }
      remove(TT, oT) {
        const IT = this.tracked[TT];
        IT && (delete IT[oT], (0, iT.mc)(IT) && delete this.tracked[TT])
      }
      handleUpdate(TT) {
        var oT;
        0 !== TT.duration ? this.upsert(TT.hT, TT.name, {
          icon: TT.icon,
          level: TT.level,
          displayName: kT(TT.displayName),
          showInNametag: null === (oT = TT.showInNametag) || void 0 === oT || oT,
          endTime: void 0 !== TT.duration && null !== TT.duration ? Date.now() + TT.duration : null
        }) : this.remove(TT.hT, TT.name)
      }
      handleRemove(TT, oT) {
        this.remove(TT, oT)
      }
      sample(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        const zT = {},
          kT = 1e3 / oT;
        for (const WT of Object.keys(this.tracked)) {
          const oT = this.tracked[WT],
            XT = {};
          for (const iT of Object.keys(oT)) {
            const zT = oT[iT];
            let BT = null;
            if (null !== zT.endTime) {
              const oT = Math.max(0, zT.endTime - IT);
              if (0 === oT) {
                this.remove(WT, iT);
                continue
              }
              BT = TT + Math.ceil(oT / kT)
            }
            XT[iT] = {
              icon: zT.icon,
              level: zT.level,
              displayName: zT.displayName,
              endTick: BT,
              showInNametag: zT.showInNametag
            }
          }(0, iT.mc)(XT) || (zT[WT] = XT)
        }
        return zT
      }
    }

    function LT(TT, oT, IT, iT) {
      TT.hasEntity(oT) ? TT.updateEffect(oT, IT, iT) : function(TT, oT, IT) {
        zT.h.XM("EffectUpdate", {
          hT: TT,
          name: oT,
          ...IT
        }, !0)
      }(oT, IT, iT)
    }

    function xT(TT, oT, IT) {
      TT.hasEntity(oT) ? TT.removeEffect(oT, IT) : function(TT, oT) {
        zT.h.XM("RemoveEffect", {
          hT: TT,
          name: oT
        }, !0)
      }(oT, IT)
    }

    function cT(TT, oT, IT, iT, zT, kT, WT) {
      for (const ST of Object.keys(IT))
        for (const kT of Object.keys(IT[ST])) {
          var XT;
          null !== (XT = oT[ST]) && void 0 !== XT && XT[kT] || (xT(TT, ST, kT), iT && ST === iT && String(zT) !== String(ST) && xT(TT, zT, kT))
        }
      for (const KT of Object.keys(oT))
        for (const XT of Object.keys(oT[KT])) {
          var BT, FT;
          const MT = oT[KT][XT],
            rT = ST(MT.endTick, kT, WT);
          if (0 === rT) {
            xT(TT, KT, XT), iT && KT === iT && String(zT) !== String(KT) && xT(TT, zT, XT);
            continue
          }
          const AT = null === (BT = IT[KT]) || void 0 === BT ? void 0 : BT[XT],
            gT = AT && (cT = MT, (DT = AT).icon === cT.icon && DT.level === cT.level && DT.displayName === cT.displayName && DT.endTick === cT.endTick && DT.showInNametag === cT.showInNametag),
            hT = {
              icon: MT.icon,
              level: MT.level,
              displayName: null !== (FT = MT.displayName) && void 0 !== FT ? FT : void 0,
              duration: rT,
              showInNametag: MT.showInNametag
            };
          gT || LT(TT, KT, XT, hT), iT && KT === iT && LT(TT, zT, XT, {
            ...hT,
            showInNametag: !1
          })
        }
      var DT, cT
    }
  },
  35911: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => FT,
      g: () => BT,
      k: () => DT,
      m: () => WT,
      p: () => ST
    });
    var iT = IT(35906),
      zT = IT(35919);
    const kT = {
      description: "Bloxd Replay",
      accept: {
        [iT.f]: iT.d
      }
    };

    function WT() {
      return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker
    }

    function XT(TT) {
      return TT instanceof DOMException && "AbortError" === TT.name
    }
    async function BT() {
      try {
        const [TT] = await window.showOpenFilePicker({
          multiple: !1,
          types: [kT]
        }), oT = await TT.getFile();
        return {
          handle: TT,
          bytes: new Uint8Array(await oT.arrayBuffer())
        }
      } catch (TT) {
        if (XT(TT)) return null;
        throw TT
      }
    }
    async function FT(TT) {
      if (TT && await async function(TT) {
          const oT = {
            mode: "readwrite"
          };
          return "granted" === await TT.queryPermission(oT) || "granted" === await TT.requestPermission(oT)
        }(TT)) return TT;
      try {
        return await window.showSaveFilePicker({
          suggestedName: (0, iT.h)(),
          types: [kT]
        })
      } catch (oT) {
        if (XT(oT)) return null;
        throw oT
      }
    }
    async function ST(TT, oT) {
      const IT = await TT.createWritable();
      await IT.write(new Blob([oT], {
        type: iT.f
      })), await IT.close()
    }

    function DT(TT) {
      return (0, iT.g)((0, zT.e)(TT))
    }
  },
  35451: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => DT
    });
    var iT = IT(12),
      zT = IT(90),
      kT = IT(26),
      WT = IT(690),
      XT = IT(3012),
      BT = IT(6158);
    const FT = "shaderPackListingCheckedAt",
      ST = 36e5;

    function DT() {
      const {
        canUseShaderPacks: TT
      } = zT.featureFlags.settings;
      var oT, DT;
      (0, XT.l)(TT) && !(0, XT.j)(TT) && (oT = kT.e.getItem(FT), DT = Date.now(), "number" !== typeof oT || DT < oT || DT - oT >= ST) && (0, WT.b)((() => {
        (async function() {
          if ("landingPage" !== iT.c.get("gameState")) return;
          const TT = await (0, BT.e)();
          if (void 0 === (null === TT || void 0 === TT ? void 0 : TT.listing)) return;
          kT.e.setItem(FT, Date.now());
          const {
            followListingUpdates: oT
          } = await Promise.all([IT.e(74), IT.e(132), IT.e(124)]).then((() => IT(39984)));
          await oT(TT, TT.listing) || kT.e.removeItem(FT)
        })().catch((TT => {
          console.error("Failed to check the shader pack listing for an update", TT)
        }))
      }))
    }
  },
  35490: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => BT
    });
    var iT = IT(306),
      zT = IT(12),
      kT = IT(35498),
      WT = IT(1585),
      XT = IT(1794);

    function BT(TT, oT) {
      var IT, BT, FT;
      if (!zT.c.get("isKeydownEnabled") || TT.repeat) return;
      const ST = TT.code;
      "Escape" === TT.key ? (0, WT.k)(TT) : null !== (IT = XT.z.OpenSettings) && void 0 !== IT && IT.includes(ST) ? (0, WT.y)(TT, iT.q.SETTINGS) : null !== (BT = XT.z.OpenCharacterCustomization) && void 0 !== BT && BT.includes(ST) ? (0, kT.e)() || (0, WT.y)(TT, iT.q.CUSTOMISATION, oT()) : null !== (FT = XT.z.ShowDebugOverlay) && void 0 !== FT && FT.includes(ST) && zT.c.set({
        showDebugOverlay: !zT.c.get("showDebugOverlay")
      })
    }
  },
  8307: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => XT,
      g: () => BT
    });
    var iT = IT(12),
      zT = IT(1293),
      kT = IT(90);
    const WT = {
      blockMined: {
        pattern: [18],
        priority: 1,
        minGapMs: 120
      },
      hitLanded: {
        pattern: [20],
        priority: 2,
        minGapMs: 80
      },
      damageTaken: {
        pattern: [45],
        priority: 3,
        minGapMs: 250
      },
      fishBite: {
        pattern: null,
        priority: 3,
        minGapMs: 0
      },
      death: {
        pattern: [60, 70, 120],
        priority: 4,
        minGapMs: 0
      },
      lockReady: {
        pattern: [8],
        priority: 2,
        minGapMs: 0
      },
      lockLocked: {
        pattern: [15, 50, 15],
        priority: 2,
        minGapMs: 0
      },
      autorunLedgeStop: {
        pattern: [40],
        priority: 3,
        minGapMs: 0
      }
    };

    function XT() {
      return (0, kT.isMobile)() && "function" === typeof navigator.vibrate
    }
    const BT = new class {
      constructor(TT) {
        this.deps = TT, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(TT, oT) {
        var IT;
        if (!this.deps.enabled()) return;
        const iT = WT[TT],
          zT = null !== oT && void 0 !== oT ? oT : iT.pattern;
        if (null === zT) return void console.warn("No vibration pattern for", TT);
        const kT = this.deps.now();
        kT - this.lastAnyAt < 40 && iT.priority < this.playingPriority || kT - (null !== (IT = this.lastAt.get(TT)) && void 0 !== IT ? IT : -1 / 0) < iT.minGapMs || kT < this.playingUntil && iT.priority < this.playingPriority || (this.lastAt.set(TT, kT), this.lastAnyAt = kT, this.playingUntil = kT + zT.reduce(((TT, oT) => TT + oT), 0), this.playingPriority = iT.priority, this.deps.vibrate(zT))
      }
    }({
      vibrate: TT => {
        navigator.vibrate([...TT])
      },
      now: () => performance.now(),
      enabled: () => XT() && iT.c.get("isTouchScreen") && iT.c.get("clientEscMenuOptions").vibration && !(0, zT.h)()
    })
  },
  35458: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => CT
    });
    var iT = IT(618),
      zT = IT(1199),
      kT = IT(159);
    const WT = "cf-";

    function XT(TT) {
      return `${WT}${TT}`
    }

    function BT(TT) {
      return TT.startsWith(XT("game-server-"))
    }

    function FT(TT) {
      return /^game-server-[a-z0-9-]+\.bloxd\.io$/i.test(TT)
    }
    var ST = IT(1216),
      DT = IT(1193),
      LT = IT(16),
      xT = IT(1684),
      cT = IT(1697),
      KT = IT(2585),
      MT = IT(1280),
      rT = IT(1293),
      AT = IT(1451),
      gT = IT(1183),
      hT = IT(35465),
      wT = IT(26),
      mT = IT(139),
      eT = IT(3210);
    const RT = Date.UTC(2026, 10, 25),
      uT = 1728e5,
      vT = "gameServerRoute";
    async function ET(TT) {
      if (!TT.ok) {
        const oT = await TT.text().catch((() => ""));
        return 403 === TT.status && "ipv6_unsupported" === oT ? "ipv6Refused" : "other"
      }
      const oT = await TT.json().catch((() => null));
      return "object" === typeof oT && null !== oT && Number.isFinite(oT.version) ? "ours" : "other"
    }
    const fT = new class {
      constructor(TT) {
        this.deps = TT
      }
      hostFor(TT) {
        return this.deps.enabled && FT(TT) && "cloudflare" === this.heldRoute() ? XT(TT) : TT
      }
      async afterJoinFailed(TT, oT) {
        var IT;
        if (!this.deps.enabled || void 0 === oT) return !1;
        const iT = new URL(TT).hostname,
          zT = this.stored();
        if (BT(iT)) {
          var kT;
          if (this.deps.Bc("game_server_route", "cf_join_failed", 0), "cloudflare" !== (null === zT || void 0 === zT ? void 0 : zT.route) || zT.aliasFailedOnce || "ours" !== (await this.probeHost(iT)).answer) this.store({
            arm: null !== (kT = null === zT || void 0 === zT ? void 0 : zT.arm) && void 0 !== kT ? kT : "cloudflare",
            route: "direct",
            until: this.deps.now() + 36e5
          });
          else this.store({
            ...zT,
            aliasFailedOnce: !0
          });
          return !1
        }
        if (!FT(iT) || "direct" === this.heldRoute()) return !1;
        const {
          outcome: WT,
          cfMs: XT
        } = await this.check(iT);
        if ("blocked" !== WT) return this.deps.Bc("game_server_route", WT, XT), !1;
        const ST = this.deps.now() >= RT ? "cloudflare" : null !== (IT = null === zT || void 0 === zT ? void 0 : zT.arm) && void 0 !== IT ? IT : 100 * this.deps.random() < 20 ? "holdout" : "cloudflare";
        return "holdout" === ST ? (this.store({
          arm: ST,
          route: "direct",
          until: Math.min(this.deps.now() + uT, RT)
        }), this.deps.Bc("game_server_route", "blocked_holdout", XT), !1) : (this.store({
          arm: ST,
          route: "cloudflare",
          until: this.deps.now() + uT
        }), this.deps.Bc("game_server_route", "blocked", XT), !0)
      }
      afterJoined(TT) {
        if (!this.deps.enabled) return;
        const oT = new URL(TT).hostname,
          IT = BT(oT);
        if (IT) this.deps.Bc("game_server_route", "cf_join", 0);
        else if (!FT(oT) || this.deps.random() >= .01) return;
        const iT = IT ? oT.slice(WT.length) : oT;
        this.deps.delay(2e4).then((async () => {
          await this.reportRtt(iT, "direct", "direct_failed"), await this.reportRtt(XT(iT), "cf", "cf_failed")
        }))
      }
      async check(TT) {
        const oT = this.probeHost(XT(TT));
        if ("none" !== (await this.probeHost(TT)).answer) return {
          outcome: "direct_reachable",
          cfMs: 0
        };
        const {
          answer: IT,
          ms: iT
        } = await oT;
        return "ours" !== IT && "ipv6Refused" !== IT ? {
          outcome: "cf_unreachable",
          cfMs: 0
        } : "none" !== (await this.probeHost(TT)).answer ? {
          outcome: "direct_reachable",
          cfMs: iT
        } : {
          outcome: "ipv6Refused" === IT ? "blocked_ipv6" : "blocked",
          cfMs: iT
        }
      }
      async reportRtt(TT, oT, IT) {
        const iT = "ours" === (await this.probeHost(TT)).answer ? await this.probeHost(TT) : null;
        "ours" === (null === iT || void 0 === iT ? void 0 : iT.answer) ? this.deps.Bc("game_server_rtt", oT, iT.ms): this.deps.Bc("game_server_rtt", IT, 0)
      }
      probeHost(TT) {
        return this.deps.probe(`https://${TT}/version`, 8e3)
      }
      stored() {
        return function(TT) {
          if ("object" !== typeof TT || null === TT) return null;
          const {
            arm: oT,
            route: IT,
            until: iT,
            aliasFailedOnce: zT
          } = TT;
          return "cloudflare" !== oT && "holdout" !== oT || "cloudflare" !== IT && "direct" !== IT || "number" !== typeof iT ? null : !0 === zT ? {
            arm: oT,
            route: IT,
            until: iT,
            aliasFailedOnce: zT
          } : {
            arm: oT,
            route: IT,
            until: iT
          }
        }(this.deps.storage.getItem(vT))
      }
      heldRoute() {
        const TT = this.stored();
        return null !== TT && TT.until > this.deps.now() ? TT.route : null
      }
      store(TT) {
        this.deps.storage.setItem(vT, TT)
      }
    }({
      storage: wT.e,
      probe: async function(TT, oT) {
        const IT = performance.now(),
          iT = await (0, eT.k)(TT, {
            cache: "no-store"
          }, oT, (async TT => {
            const oT = Math.round(performance.now() - IT);
            return {
              answer: await ET(TT),
              ms: oT
            }
          }));
        return null !== iT && void 0 !== iT ? iT : {
          answer: "none",
          ms: 0
        }
      },
      Bc: xT.t,
      enabled: !(0, mT.c)(),
      now: Date.now,
      random: Math.random,
      delay: TT => new Promise((oT => {
        setTimeout(oT, TT)
      }))
    });

    function CT(TT) {
      return async (oT, IT, WT, XT, FT) => {
        let DT;
        if ((0, iT.K)(WT)) {
          if (FT.aborted) return jT();
          const TT = await JT(oT, IT, XT);
          if (FT.aborted || KT.g.matchmakingEnded(TT.isError() ? null : performance.now()), TT.isError()) {
            const oT = TT.asError();
            return console.log("Join room did not succeed, reason:", oT.message), oT.forward()
          }
          DT = TT.getValue()
        } else {
          KT.g.skipPlayWait();
          const TT = UT(WT.replace("https://", "").replace("http://", ""));
          if (TT.isError()) return TT.asError().forward();
          DT = {
            endpoint: TT.getValue(),
            gameNameWithVariation: IT,
            lobbyName: oT instanceof zT.i ? oT.getLobbyName() : oT
          }
        }
        if (FT.aborted) return jT();
        console.log(`Connecting to ${DT.gameNameWithVariation} in lobby ${DT.lobbyName} on game server ${DT.endpoint}`), LT.h.XM("matchmakeAndPlayStepCompleted", {
          step: kT.j.REQUEST_TO_MATCHMAKING,
          totalSubSteps: 1
        }), (0, xT.m)(), cT.d.markGameLoadStart(), (0, rT.o)({
          websocketUrl: DT.endpoint,
          gameNameWithVariation: DT.gameNameWithVariation,
          lobbyName: DT.lobbyName
        }), LT.h.XM("loadingScreenState", "loadingPage:loadingGame");
        const AT = async () => {
          const TT = await async function(TT, oT, IT, iT) {
            const zT = await JT(TT, oT, IT);
            if (!zT.isError() && !iT.aborted) {
              const {
                endpoint: TT,
                gameNameWithVariation: oT,
                lobbyName: IT
              } = zT.getValue();
              (0, rT.o)({
                websocketUrl: TT,
                gameNameWithVariation: oT,
                lobbyName: IT
              })
            }
            return zT
          }(oT, IT, XT, FT);
          return TT.isError() || (DT = TT.getValue()), TT
        }, gT = !(0, iT.K)(WT), hT = () => TT({
          place: DT,
          userContext: XT,
          direct: gT,
          rematch: AT
        }, FT);
        let wT = await hT();
        const mT = wT.isError() && !0 === wT.asError().debugResult.rematch;
        if (wT.isError() && !gT && !FT.aborted && (mT || await fT.afterJoinFailed(DT.endpoint, wT.asError().debugResult.gameServerUnreachable))) {
          if (FT.aborted) return jT();
          console.log("Matchmaking again");
          const TT = await AT();
          if (TT.isError()) return TT.asError().forward();
          if (FT.aborted) return jT();
          wT = await hT(), !wT.isError() || mT && !BT(new URL(DT.endpoint).hostname) || await fT.afterJoinFailed(DT.endpoint, wT.asError().debugResult.gameServerUnreachable)
        }
        return wT.isError() ? wT.asError().forward() : (fT.afterJoined(DT.endpoint), (0, MT.S)(), window.gtag ? window.gtag("event", "conversion", {
          send_to: "AW-16469618203/ipUBCJKWoJUZEJvcqa09"
        }) : console.error("window.gtag not defined"), ST.b.value({
          gameNameWithVariation: DT.gameNameWithVariation,
          lobbyName: DT.lobbyName,
          addLobbyToRecentlyPlayed: !(oT instanceof zT.i)
        }))
      }
    }

    function jT() {
      return ST.b.errorWithCode("Left the game while it loaded", kT.j.REQUEST_TO_MATCHMAKING, {
        severity: "low",
        Jo: !0
      })
    }
    async function JT(TT, oT, IT) {
      return (0, iT.K)(TT) || TT instanceof zT.i || !(TT.length > DT.O) ? await AT.e.matchmakePlayer(IT, TT, oT, (0, hT.e)()).then((TT => {
        if (!1 === TT.succeeded) return ST.b.errorWithCode(TT.failReason, kT.j.REQUEST_TO_MATCHMAKING, {
          severity: "low"
        });
        const {
          gameServerHost: oT,
          lobbyName: IT,
          gameNameWithVariation: iT
        } = TT, zT = UT(fT.hostFor(oT));
        return zT.isError() ? zT.asError().forward() : ST.b.value({
          endpoint: zT.getValue(),
          gameNameWithVariation: iT,
          lobbyName: IT
        })
      })).catch((TT => (console.error("Bad response from the matchmaking server:", TT), ST.b.errorWithCode(TT.toString(), kT.j.REQUEST_TO_MATCHMAKING, {
        error: TT,
        severity: "medium"
      })))) : (console.error("Invalid lobby ID:", TT), ST.b.errorWithCode("This lobby link's name is too long. Ask for a new link.", kT.j.REQUEST_TO_MATCHMAKING, {
        severity: "low"
      }))
    }

    function UT(TT) {
      const oT = gT.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(TT);
      return oT.isError() ? ST.b.errorWithCode(oT.asError().message, kT.j.CONNECT_TO_GAME_SERVER, {
        severity: "medium"
      }) : ST.b.value(oT.getValue())
    }
    setTimeout((() => {
      window.initialD ? Date.now = window.initialD : console.error("window.initialD not defined")
    }), 3e3), window.leaveGame = () => {
      (0, rT.k)("/")
    }
  },
  8660: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => xT,
      d: () => LT
    });
    var iT = IT(12),
      zT = IT(1635),
      kT = IT(26),
      WT = IT(1325),
      XT = IT(3232),
      BT = IT(1427),
      FT = IT(1357);
    const ST = 2592e5,
      DT = "notificationOptInLastPromptedAt";
    async function LT() {
      var TT;
      const oT = await xT();
      if (null === oT) return;
      const IT = null !== (TT = kT.e.getItem(DT)) && void 0 !== TT ? TT : 0;
      if (Date.now() - IT < ST) return;
      if ((0, FT.f)()) return;
      const iT = await WT.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: zT.c.supports("notifications") ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOnCancel: !0
      }).getResult();
      "notificationTornDown" !== iT && (kT.e.setItem(DT, Date.now()), (0, BT.reportAnalyticsClick)({
        id: !0 === iT ? "push.allow" : "push.deny",
        value: zT.c.supports("notifications") ? "app" : "browser"
      }), !0 === iT && oT().catch((TT => {
        console.error("Failed to ask for push notifications:", TT)
      })))
    }
    async function xT() {
      return await zT.c.ready, zT.c.supports("notifications") ? iT.c.get("mobilePushNotificationsCanAsk") ? async () => {
        zT.c.request("notifications.requestPermission", {}).then((TT => {
          let {
            canAsk: oT
          } = TT;
          iT.c.set({
            mobilePushNotificationsCanAsk: oT
          })
        }), (TT => {
          console.error("The app couldn't ask for push notifications:", TT)
        }))
      }: null: await XT.b.canAsk() ? () => XT.b.requestPermission() : null
    }
  },
  35468: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => LT,
      i: () => ST,
      j: () => xT,
      l: () => DT
    });
    var iT = IT(314),
      zT = IT(643),
      kT = IT(651),
      WT = IT(26);
    const XT = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      BT = "playSessionGameNameWithVariation",
      FT = "wasMatchmakePlayer";

    function ST() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WT.h;
      (0, kT.i)(TT, XT)
    }

    function DT() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WT.h).setItem(FT, !0)
    }

    function LT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WT.h;
      return (0, kT.c)(TT, XT)
    }

    function xT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WT.h;
      const IT = (0, kT.c)(oT, XT),
        ST = function(TT) {
          const oT = TT.getItem(BT);
          return "string" !== typeof oT ? null : oT
        }(oT),
        DT = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WT.h).getItem(FT)
        }(oT);
      let LT;
      return LT = null !== IT && null !== ST && (0, kT.f)(oT, XT) && function(TT, oT, IT) {
          const zT = (0, iT.Ib)(TT),
            kT = (0, iT.Ib)(oT),
            WT = (0, iT.Fb)(TT),
            XT = (0, iT.Fb)(oT);
          return !(zT !== kT || !IT) || zT === kT && WT === XT
        }(ST, TT, DT) ? IT : (0, zT.b)(), (0, kT.k)(oT, XT, LT), oT.setItem(BT, TT),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WT.h).removeItem(FT)
        }(oT), LT
    }
  },
  35465: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => AT,
      i: () => gT
    });
    var iT = IT(1007),
      zT = IT(623),
      kT = IT(314),
      WT = IT(1014),
      XT = IT(637),
      BT = IT(661),
      FT = IT(4041),
      ST = IT(90),
      DT = IT(139),
      LT = IT(1665),
      xT = IT(112),
      cT = IT(35468),
      KT = IT(26),
      MT = IT(648),
      rT = IT(35475);

    function AT() {
      var TT, oT;
      return [...null !== (TT = navigator.languages) && void 0 !== TT ? TT : [null !== (oT = navigator.language) && void 0 !== oT ? oT : "none"], "EN-gb"]
    }

    function gT(TT, oT, IT, gT, hT) {
      const wT = (0, iT.m)(oT) ? (0, iT.p)(oT) : null,
        mT = {
          cookies: (0, LT.getAllCookiesForGameNameWithVariation)(oT),
          isMobile: (0, ST.isMobile)(),
          isUsingCustomGameTexturePack: null !== wT && hT(wT),
          generalCookies: {
            joinDiscord: !!KT.e.getItem("DiscordPressed"),
            newGo: FT.b,
            ...TT.getMetricsCookies(),
            trafficCode: gT,
            compliance: ST.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, ST.getBrowserName)(),
            version: (0, ST.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, ST.getPlatformType)(),
            deviceType: (0, xT.b)()
          },
          isLoggedIn: TT.isLoggedIn(),
          lobbyName: IT,
          languages: AT(),
          version: zT.c,
          siteUsed: DT.p,
          subsiteUsed: DT.w,
          playSessionId: (0, cT.j)(oT),
          visitSessionId: (0, MT.e)(),
          clientReason: XT.n.reason,
          budgetBasis: (0, rT.h)(),
          ...null !== BT.t && {
            diagClaim: BT.t.claimId
          }
        };
      return null !== wT && (0, kT.rc)(wT) ? (mT.lobbyName = (0, iT.j)(wT, (0, iT.n)(oT), IT), {
        roomName: `classic_${WT.d}`,
        joinOptions: mT
      }) : {
        roomName: oT,
        joinOptions: mT
      }
    }
  },
  8193: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => WT
    });
    var iT = IT(8201),
      zT = IT(618),
      kT = IT(139);

    function WT(TT) {
      var oT, IT;
      if ((0, zT.K)(TT)) return !0;
      const WT = null !== (oT = null === (IT = kT.k[kT.p]) || void 0 === IT ? void 0 : IT.adConfig.showRewardedAds) && void 0 !== oT && oT;
      for (const zT in TT) {
        const oT = TT[zT];
        if (null !== oT && void 0 !== oT && oT.items)
          for (const TT in oT.items)
            if ((0, iT.k)(oT.items[TT], WT)) return !1
      }
      return !0
    }
  },
  35582: (TT, oT, IT) => {
    function iT(TT, oT) {
      for (let IT = 0; IT < TT.length; IT++)
        if (TT[IT].identifier === oT) return TT[IT];
      return null
    }

    function zT(TT, oT) {
      return null !== iT(TT, oT)
    }
    IT.d(oT, {
      b: () => iT,
      c: () => zT
    })
  },
  35842: (TT, oT, IT) => {
    IT.d(oT, {
      D: () => uT,
      G: () => YT,
      K: () => QT,
      N: () => OT,
      Q: () => aT,
      S: () => HT,
      b: () => BT,
      e: () => fT,
      i: () => XT,
      m: () => UT,
      n: () => vT,
      r: () => mT,
      v: () => JT,
      z: () => jT
    });
    var iT = IT(26);
    const zT = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      kT = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      WT = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      XT = kT.filter((TT => "docsButton" !== TT)),
      BT = WT.filter((TT => "aiHelperButton" !== TT)),
      FT = "codeEditorTutorials",
      ST = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      DT = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let LT = null,
      xT = null;
    const cT = new Set,
      KT = new Set;
    let MT = null;
    const rT = new Set,
      AT = new Set;

    function gT() {
      AT.forEach((TT => {
        TT()
      }))
    }

    function hT() {
      if (!LT) {
        const TT = iT.e.getItem(FT);
        LT = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof TT && null !== TT ? TT : {}
        }
      }
      return LT
    }

    function wT(TT) {
      const oT = hT();
      oT[TT] || (LT = {
        ...oT,
        [TT]: !0
      }, iT.e.setItem(FT, LT))
    }

    function mT(TT) {
      return "docsOverview" === TT ? kT : "aiHelperOverview" === TT ? WT : xT ? zT[xT] : []
    }

    function eT(TT) {
      return ("worldCodeButton" !== TT || !hT().worldCodeIntroShown) && !rT.has(TT)
    }

    function RT(TT) {
      var oT;
      return (null === (oT = MT) || void 0 === oT ? void 0 : oT.name) === TT ? MT.stepsDone : cT
    }

    function uT(TT, oT) {
      if (! function(TT) {
          return MT ? MT.name === TT : "welcome" === TT
        }(TT) || !eT(oT) || RT(TT).has(oT)) return !1;
      if (MT) return !0;
      const IT = ST[oT];
      return IT ? !hT()[IT] || KT.has(oT) : !hT()[DT[TT]]
    }

    function vT(TT) {
      var oT;
      return null !== (oT = mT(TT).find((oT => uT(TT, oT)))) && void 0 !== oT ? oT : null
    }

    function ET(TT) {
      var oT;
      wT(DT[TT]), (null === (oT = MT) || void 0 === oT ? void 0 : oT.name) === TT && (MT = null)
    }

    function fT(TT) {
      const oT = (MT ? [MT.name] : ["welcome", "docsOverview"]).find((oT => vT(oT) === TT));
      if (!oT) return;
      RT(oT).add(TT);
      const IT = ST[TT];
      IT && (wT(IT), MT || KT.add(TT)), null === vT(oT) && ET(oT), gT()
    }

    function CT(TT, oT) {
      const IT = mT(TT),
        iT = RT(TT);
      for (let zT = IT.indexOf(oT) - 1; zT >= 0; zT--)
        if (iT.has(IT[zT]) && eT(IT[zT])) return IT[zT];
      return null
    }

    function jT(TT, oT) {
      return null !== CT(TT, oT)
    }

    function JT(TT, oT) {
      const IT = CT(TT, oT);
      IT && (RT(TT).delete(IT), gT())
    }

    function UT(TT) {
      ET(TT), "welcome" === TT && mT("welcome").forEach((TT => {
        const oT = ST[TT];
        oT && wT(oT)
      })), gT()
    }

    function aT(TT) {
      MT = {
        name: TT,
        stepsDone: new Set
      }, gT()
    }

    function YT() {
      (MT || 0 !== cT.size || 0 !== KT.size) && (MT = null, cT.clear(), KT.clear(), gT())
    }

    function QT(TT, oT) {
      const IT = oT ? TT : xT === TT ? null : xT;
      IT !== xT && (xT = IT, gT())
    }

    function OT(TT, oT) {
      rT.has(TT) === oT && (oT ? rT.delete(TT) : rT.add(TT), gT())
    }

    function HT(TT) {
      return AT.add(TT), () => {
        AT.delete(TT)
      }
    }
  },
  35488: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => iT,
      f: () => zT,
      h: () => kT
    });
    const iT = 1024,
      zT = 1024 * iT;

    function kT(TT) {
      return (TT / zT).toFixed(1)
    }
  },
  35479: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => kT,
      f: () => XT,
      g: () => WT,
      h: () => BT,
      i: () => FT
    });
    var iT = IT(193);
    const zT = 32 * IT(35488).f,
      kT = 6144,
      WT = 4608,
      XT = 512;

    function BT(TT) {
      return Math.floor(zT * TT / kT)
    }

    function FT(TT) {
      const oT = TT - Math.floor(TT / 6);
      let IT = iT.c.maxChunkHorizAddDistance,
        zT = iT.c.maxChunkVertAddDistance;
      if (ST(IT + 1, zT + 1) <= oT) return null;
      for (; ST(IT + 1, zT + 1) > oT && (IT > 0 || zT > 0);) IT > zT ? IT-- : zT--;
      return {
        horizontal: IT,
        vertical: zT
      }
    }

    function ST(TT, oT) {
      const IT = Math.max(TT, oT);
      let iT = 0;
      for (let zT = -IT; zT <= IT; zT++)
        for (let kT = -IT; kT <= IT; kT++)
          for (let WT = -IT; WT <= IT; WT++) DT(TT, oT, zT, kT, WT) && iT++;
      return iT
    }

    function DT(TT, oT, IT, iT, zT) {
      const kT = IT * IT + zT * zT;
      return TT === oT ? kT + iT * iT <= TT * TT : TT > oT ? Math.abs(iT) <= oT && kT + iT * iT <= TT * TT : kT <= TT * TT && kT + iT * iT <= oT * oT
    }
  },
  35475: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => mT,
      h: () => wT,
      j: () => hT
    });
    var iT = IT(193),
      zT = IT(90),
      kT = IT(2552),
      WT = IT(3916),
      XT = IT(641),
      BT = IT(35479);
    const FT = 1048576,
      ST = 1024 * FT,
      DT = 400 * FT,
      LT = 147456,
      xT = .5,
      cT = 1.5 * ST,
      KT = 768 * FT;

    function MT(TT) {
      return DT + TT * LT
    }

    function rT(TT, oT, IT) {
      var zT, WT;
      let {
        footprintBytes: XT,
        basis: FT,
        namesLimit: rT
      } = function(TT) {
        const {
          os: oT,
          deviceMemory: IT
        } = TT;
        if ("ios" === oT) switch ((0, kT.i)(TT)) {
          case "ipad_m":
            return {
              footprintBytes: MT(BT.c), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: KT, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: cT, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: KT, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof IT && Number.isFinite(IT) && IT > 0 ? {
          footprintBytes: IT * ST * xT,
          basis: `memory-${IT}`,
          namesLimit: !0
        } : "android" === oT ? {
          footprintBytes: KT,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: MT(BT.g),
          basis: "unreported",
          namesLimit: !1
        }
      }(TT);
      if (IT) {
        const TT = Math.min(XT, MT(BT.c));
        XT = DT + Math.max(0, TT - DT) / 2, FT += "+killed", rT = !0
      }
      null !== oT && MT(oT) < XT && (XT = MT(oT), FT += "+learned", rT = !0);
      const AT = function(TT) {
          const oT = Math.floor((TT - DT) / LT);
          return Math.min(BT.c, Math.max(BT.f, oT))
        }(XT),
        gT = (0, BT.i)(AT);
      return {
        footprintBytes: XT,
        shedFootprintBytes: rT ? Math.max(XT, MT(AT)) : null,
        chunkCap: AT,
        maxHorizDistance: null !== (zT = null === gT || void 0 === gT ? void 0 : gT.horizontal) && void 0 !== zT ? zT : iT.c.maxChunkHorizAddDistance,
        maxVertDistance: null !== (WT = null === gT || void 0 === gT ? void 0 : gT.vertical) && void 0 !== WT ? WT : iT.c.maxChunkVertAddDistance,
        basis: FT
      }
    }
    let AT = null;

    function gT() {
      return rT({
        os: (0, zT.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, kT.l)()
      }, (0, WT.g)(), (0, XT.F)("wasm").length > 0)
    }

    function hT() {
      return AT ??= gT(), AT
    }

    function wT() {
      var TT;
      return (null !== (TT = AT) && void 0 !== TT ? TT : gT()).basis
    }

    function mT(TT, oT) {
      return TT.setChunkCap(oT.chunkCap)
    }
  },
  35591: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => ST,
      d: () => LT,
      h: () => rT,
      l: () => FT
    });
    var iT = IT(12),
      zT = IT(2201),
      kT = IT(2204),
      WT = IT(2210),
      XT = IT(3932),
      BT = IT(16);

    function FT(TT, oT) {
      return (!(0, WT.e)() || 0 === TT && 0 === oT) && (0, kT.w)(zT.j.Joystick, 0, TT, oT, 0)
    }
    const ST = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function DT(TT) {
      return TT.classList.contains("TouchKeyHit") && xT() ? null : TT.firstElementChild
    }

    function LT(TT) {
      return TT.classList.contains("TouchKeyHit") && !TT.classList.contains("CanvasZone") ? {
        whole: !xT(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: cT(DT(TT))
      }
    }

    function xT() {
      return document.documentElement.classList.contains(XT.k)
    }

    function cT(TT) {
      return !(TT instanceof HTMLElement) || TT.offsetWidth <= 0 || TT.offsetHeight <= 0 ? null : {
        width: TT.offsetWidth,
        height: TT.offsetHeight
      }
    }

    function KT(TT, oT) {
      const IT = TT => Math.min(65535, Math.round(4 * TT));
      return (IT(TT) | IT(oT) << 16) >>> 0
    }

    function MT(TT) {
      return {
        x: TT.left + TT.width / 2,
        y: TT.top + TT.height / 2,
        radius: Math.min(TT.width, TT.height) / 2
      }
    }
    const rT = new class {
      constructor(TT) {
        this.write = TT, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        oT ? this.elements.set(TT, {
          element: oT,
          hidden: IT
        }) : this.elements.delete(TT), this.measureOne(TT)
      }
      measure() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = TT.left, this.canvasTop = TT.top;
        for (const oT of this.elements.keys()) this.measureOne(oT)
      }
      hitZone(TT, oT) {
        let IT = null,
          iT = 1;
        for (const zT of this.elements.keys()) {
          const kT = this.shown(zT);
          if (!kT) continue;
          const {
            rect: WT,
            element: XT
          } = kT, BT = MT(WT), FT = Math.max(0, WT.width / 2 - BT.radius), ST = Math.max(0, WT.height / 2 - BT.radius), LT = Math.max(0, Math.abs(TT - BT.x) - FT), xT = Math.max(0, Math.abs(oT - BT.y) - ST), KT = XT.firstElementChild;
          let rT = Math.hypot(LT, xT) / BT.radius;
          const AT = cT(DT(XT));
          AT && (rT = Math.min(rT, Math.max(2 * Math.abs(TT - BT.x) / AT.width, 2 * Math.abs(oT - BT.y) / AT.height))), rT < iT && (IT = {
            code: zT,
            element: XT,
            key: KT,
            ...BT
          }, iT = rT)
        }
        return IT
      }
      measureOne(TT) {
        const oT = this.shown(TT);
        if (!oT) return void this.write(zT.j.TouchZone, TT, 0, 0, 0);
        const {
          rect: IT,
          element: iT
        } = oT, kT = MT(IT);
        this.write(zT.j.TouchZone, TT, kT.x - this.canvasLeft, kT.y - this.canvasTop, KT(IT.width, IT.height));
        const WT = cT(DT(iT));
        this.write(zT.j.TouchZone, 256 | TT, 0, 0, WT ? KT(WT.width, WT.height) : 0)
      }
      shown(TT) {
        const oT = this.elements.get(TT),
          IT = iT.c.get("worldPanelHud");
        if (!oT || oT.hidden || "none" === IT) return null;
        const zT = oT.element.getBoundingClientRect();
        return zT.width <= 0 || zT.height <= 0 ? null : {
          rect: zT,
          element: oT.element
        }
      }
    }(kT.w);
    (0, BT.k)(XT.g, (() => {
      rT.measure()
    }))
  },
  35852: (TT, oT, IT) => {
    function iT(TT, oT) {
      return null === TT || null === oT ? TT === oT : TT[0] === oT[0] && TT[1] === oT[1] && TT[2] === oT[2]
    }

    function zT(TT) {
      return [TT[0] + .5, TT[1] + .5, TT[2] + .5]
    }
    IT.d(oT, {
      b: () => zT,
      c: () => iT
    })
  },
  8214: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => zT,
      i: () => iT
    });
    const iT = 100;

    function zT(TT) {
      let {
        translationKeys: oT = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return TT.map((TT => {
        var IT;
        return null !== (IT = function(TT, oT) {
          if ("string" === typeof TT) return TT;
          const IT = "str" in TT ? TT.str : TT;
          if ("string" === typeof IT) return IT;
          if ("entityName" in IT) return IT.entityName;
          if (oT && "translationKey" in IT) return `{${IT.translationKey}${void 0===IT.params?"":` ${JSON.stringify(IT.params)}`}}`;
          return null
        }(TT, oT)) && void 0 !== IT ? IT : " "
      })).join("")
    }
  },
  8248: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => ST,
      h: () => XT,
      j: () => BT
    });
    var iT = IT(2026),
      zT = IT(1214),
      kT = IT(2029);
    const WT = ",";

    function XT(TT) {
      if (!TT) return [];
      const oT = new Set,
        IT = [];
      for (const iT of TT.split(WT)) {
        const TT = iT.trim();
        if ((0, kT.h)(TT) && !oT.has(TT) && (oT.add(TT), IT.push(TT), IT.length >= zT.k)) break
      }
      return IT
    }

    function BT(TT) {
      const oT = new Set,
        IT = [];
      for (const iT of TT)
        if ((0, kT.h)(iT) && !oT.has(iT) && (oT.add(iT), IT.push(iT), IT.length >= zT.k)) break;
      return IT.join(WT)
    }

    function FT() {
      return BT(kT.d)
    }

    function ST(TT) {
      var oT;
      return "emote" === TT ? FT() : null !== (oT = DT[TT][0]) && void 0 !== oT ? oT : LT[TT]
    }
    const DT = zT.v.reduce(((TT, oT) => {
        const IT = [];
        for (const kT in iT.c[oT]) {
          var zT;
          "default" === (null === (zT = (0, iT.g)(oT, kT)) || void 0 === zT ? void 0 : zT.cosmeticPack) && IT.push(kT)
        }
        return TT[oT] = IT, TT
      }), {}),
      LT = zT.v.reduce(((TT, oT) => (TT[oT] = Object.keys(iT.c[oT])[0], TT)), {})
  },
  35808: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => BT,
      e: () => XT
    });
    const iT = {
        files: {
          "debugLog.ts": "export function debugLog(message: string): void {\n\tconsole.log(`[debug] ${message}`)\n}\n",
          "index.ts": 'import type { PlayerId } from "@bloxd"\nimport { debugLog } from "./debugLog"\n\nonPlayerJoin = (player: PlayerId) => {\n\tapi.log(`Player ${player} joined - Love from Debug Plugin!`)\n}\n\nexport { debugLog }\n'
        },
        dependencies: [],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  debugLog: () => debugLog\n});\nmodule.exports = __toCommonJS(index_exports);\n\n// world-code-plugin:debugLog.ts\nfunction debugLog(message) {\n  console.log(`[debug] ${message}`);\n}\n\n// world-code-plugin:index.ts\nonPlayerJoin = (player) => {\n  api.log(`Player ${player} joined - Love from Debug Plugin!`);\n};\n',
        types: "declare function debugLog(message: string): void;\n\nexport { debugLog };\n"
      },
      zT = {
        files: {
          "index.ts": 'import type { CustomTextStyling, DialogueText, PlayerId, SpeechVoice } from "@bloxd"\nimport { clearTimeout, setTimeout, TimeoutId } from "@plugins/helpers"\n\n/** Long enough to read most lines once they have appeared. */\nconst DEFAULT_DURATION_MS = 6000\n\nexport type DialogueOpts = {\n\t/** Shown above the line, such as a name. */\n\tspeakerName?: string | CustomTextStyling\n\t/** A preset such as "regular" or "gruff", or every synth parameter. Omit for a silent line. */\n\tvoice?: SpeechVoice\n\t/** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n\tdurationMs?: number\n}\n\nconst hideTimeouts: Record<PlayerId, TimeoutId> = {}\n\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item\'s icon inline\n * @param opts - The speaker\'s name, the voice that reads it out, and how long it stays up\n */\nexport function sayDialogue(playerId: PlayerId, text: DialogueText, opts: DialogueOpts = {}) {\n\tif (hideTimeouts[playerId] !== undefined) {\n\t\tclearTimeout(hideTimeouts[playerId])\n\t\t// Cleared first, so a line said again replays rather than matching the value already set\n\t\tapi.setClientOption(playerId, "dialogue", null)\n\t}\n\tapi.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice })\n\thideTimeouts[playerId] = setTimeout(\n\t\t() => {\n\t\t\tclearDialogue(playerId)\n\t\t},\n\t\topts.durationMs ?? DEFAULT_DURATION_MS,\n\t\tplayerId,\n\t)\n}\n\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\nexport function clearDialogue(playerId: PlayerId) {\n\tif (hideTimeouts[playerId] === undefined) {\n\t\treturn\n\t}\n\tclearTimeout(hideTimeouts[playerId])\n\tdelete hideTimeouts[playerId]\n\tapi.setClientOption(playerId, "dialogue", null)\n}\n\nonPlayerLeave = (playerId: PlayerId) => {\n\tdelete hideTimeouts[playerId]\n}\n'
        },
        dependencies: ["helpers"],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  clearDialogue: () => clearDialogue,\n  sayDialogue: () => sayDialogue\n});\nmodule.exports = __toCommonJS(index_exports);\nvar import_helpers = require("@plugins/helpers");\nvar DEFAULT_DURATION_MS = 6e3;\nvar hideTimeouts = {};\nfunction sayDialogue(playerId, text, opts = {}) {\n  if (hideTimeouts[playerId] !== void 0) {\n    (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n    api.setClientOption(playerId, "dialogue", null);\n  }\n  api.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice });\n  hideTimeouts[playerId] = (0, import_helpers.setTimeout)(\n    () => {\n      clearDialogue(playerId);\n    },\n    opts.durationMs ?? DEFAULT_DURATION_MS,\n    playerId\n  );\n}\nfunction clearDialogue(playerId) {\n  if (hideTimeouts[playerId] === void 0) {\n    return;\n  }\n  (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n  delete hideTimeouts[playerId];\n  api.setClientOption(playerId, "dialogue", null);\n}\nonPlayerLeave = (playerId) => {\n  delete hideTimeouts[playerId];\n};\n',
        types: "import { CustomTextStyling, SpeechVoice, PlayerId, DialogueText } from '@bloxd';\n\ntype DialogueOpts = {\n    /** Shown above the line, such as a name. */\n    speakerName?: string | CustomTextStyling;\n    /** A preset such as \"regular\" or \"gruff\", or every synth parameter. Omit for a silent line. */\n    voice?: SpeechVoice;\n    /** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n    durationMs?: number;\n};\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item's icon inline\n * @param opts - The speaker's name, the voice that reads it out, and how long it stays up\n */\ndeclare function sayDialogue(playerId: PlayerId, text: DialogueText, opts?: DialogueOpts): void;\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\ndeclare function clearDialogue(playerId: PlayerId): void;\n\nexport { clearDialogue, sayDialogue };\nexport type { DialogueOpts };\n"
      },
      kT = {
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
      WT = {
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
      XT = {
        debug: {
          name: "debug",
          specifier: "@plugins/debug",
          sourceVfsPath: "/node_modules/@plugins/debug/index.ts",
          typesVfsPath: "/node_modules/@plugins/debug/index.d.ts",
          files: iT.files,
          dependencies: iT.dependencies,
          bundledSource: iT.bundledSource,
          types: iT.types
        },
        dialogue: {
          name: "dialogue",
          specifier: "@plugins/dialogue",
          sourceVfsPath: "/node_modules/@plugins/dialogue/index.ts",
          typesVfsPath: "/node_modules/@plugins/dialogue/index.d.ts",
          files: zT.files,
          dependencies: zT.dependencies,
          bundledSource: zT.bundledSource,
          types: zT.types
        },
        helpers: {
          name: "helpers",
          specifier: "@plugins/helpers",
          sourceVfsPath: "/node_modules/@plugins/helpers/index.ts",
          typesVfsPath: "/node_modules/@plugins/helpers/index.d.ts",
          files: kT.files,
          dependencies: kT.dependencies,
          bundledSource: kT.bundledSource,
          types: kT.types
        },
        sessionBasedGame: {
          name: "sessionBasedGame",
          specifier: "@plugins/sessionBasedGame",
          sourceVfsPath: "/node_modules/@plugins/sessionBasedGame/index.ts",
          typesVfsPath: "/node_modules/@plugins/sessionBasedGame/index.d.ts",
          files: WT.files,
          dependencies: WT.dependencies,
          bundledSource: WT.bundledSource,
          types: WT.types
        }
      };

    function BT(TT) {
      const oT = [],
        IT = new Set,
        iT = TT => {
          if (IT.has(TT)) return;
          const zT = XT[TT];
          if (zT) {
            IT.add(TT);
            for (const TT of zT.dependencies) iT(TT);
            oT.push(TT)
          }
        };
      for (const zT of TT) iT(zT);
      return oT
    }
  },
  35815: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => BT,
      d: () => XT,
      e: () => WT,
      h: () => kT,
      i: () => FT,
      j: () => ST,
      m: () => cT,
      q: () => xT,
      r: () => LT
    });
    var iT = IT(1214);
    const zT = ["quickjs", "ses"];

    function kT(TT) {
      return zT.includes(TT)
    }

    function WT(TT) {
      return TT === iT.h || TT === iT.i
    }

    function XT(TT, oT) {
      return TT === iT.h && oT === iT.i || TT === iT.i && oT === iT.h
    }

    function BT(TT) {
      const oT = iT.i in TT,
        IT = iT.h in TT;
      return oT && IT ? null : oT ? iT.i : IT ? iT.h : null
    }

    function FT(TT, oT, IT) {
      const iT = `${oT}/`;
      return TT.filter((TT => TT.startsWith(iT))).map((TT => [TT, `${IT}/${TT.slice(iT.length)}`]))
    }

    function ST(TT, oT) {
      let IT = 0;
      for (const [iT, zT] of Object.entries(TT)) iT !== oT && (IT += zT.length);
      return IT
    }
    const DT = "@plugins/";

    function LT(TT) {
      return `${DT}${TT}`
    }

    function xT(TT, oT) {
      return `/node_modules/@plugins/${TT}/${oT}`
    }

    function cT(TT) {
      if (!TT.startsWith(DT)) return null;
      const oT = TT.slice(DT.length);
      return function(TT) {
        return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(TT)
      }(oT) ? oT : null
    }
  },
  35827: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => XT,
      e: () => zT,
      i: () => WT,
      j: () => BT,
      m: () => kT
    });
    var iT = IT(35823);
    const zT = 5,
      kT = "[SCHEMATIC]",
      WT = 1024e4;

    function XT(TT) {
      return TT.endsWith(".bloxdschem") && (0, iT.q)(TT.slice(0, -11) + ".ts") && TT.length <= 64
    }

    function BT(TT) {
      return Object.fromEntries(Object.keys(TT).map((TT => [TT, kT])))
    }
  },
  8201: (TT, oT, IT) => {
    function iT(TT, oT) {
      return !TT.hidden && (oT || !TT.isRewardedAd)
    }

    function zT(TT) {
      return "object" === typeof TT ? TT.option : TT
    }

    function kT(TT, oT) {
      var IT;
      if ("dropdown" === (null === (IT = TT.userInput) || void 0 === IT ? void 0 : IT.type) && "object" === typeof TT.userInput.dropdownOptions[0]) {
        for (const IT of TT.userInput.dropdownOptions)
          if (zT(IT) === oT) return "object" === typeof IT ? IT.cost : TT.cost;
        console.error("Didn't find matching option for dropdown item. Item:", TT, "input:", oT)
      }
      return TT.cost
    }

    function WT(TT, oT, IT) {
      var iT;
      const zT = null !== (iT = IT.excludedPlayers) && void 0 !== iT ? iT : [oT];
      return TT.filter((TT => !zT.includes(TT)))
    }
    IT.d(oT, {
      e: () => kT,
      f: () => zT,
      j: () => WT,
      k: () => iT
    })
  },
  35823: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => zT,
      h: () => kT,
      j: () => LT,
      m: () => XT,
      o: () => BT,
      p: () => FT,
      q: () => DT,
      r: () => ST,
      v: () => WT
    });
    var iT = IT(1214);
    let zT = function(TT) {
        return TT[TT.Join = 0] = "Join", TT[TT.Leave = 1] = "Leave", TT[TT.Push = 2] = "Push", TT[TT.Cursor = 3] = "Cursor", TT[TT.Submit = 4] = "Submit", TT[TT.ReloadAsVariation = 5] = "ReloadAsVariation", TT[TT.CreateFile = 6] = "CreateFile", TT[TT.RenameFile = 7] = "RenameFile", TT[TT.DeleteFile = 8] = "DeleteFile", TT[TT.SetEngine = 9] = "SetEngine", TT[TT.RenameFolder = 10] = "RenameFolder", TT
      }({}),
      kT = function(TT) {
        return TT[TT.Joined = 0] = "Joined", TT[TT.Updates = 1] = "Updates", TT[TT.Presence = 2] = "Presence", TT[TT.RemoteCursor = 3] = "RemoteCursor", TT[TT.ForceClose = 4] = "ForceClose", TT[TT.LobbyFilesChanged = 5] = "LobbyFilesChanged", TT[TT.EngineSettings = 6] = "EngineSettings", TT
      }({});

    function WT(TT) {
      return "lobby" === TT.kind ? `lobby:${TT.path}` : `codeBlock:${TT.pos[0]},${TT.pos[1]},${TT.pos[2]}`
    }

    function XT(TT) {
      if ("lobby" === TT) return {
        kind: "lobby",
        path: iT.h
      };
      if (TT.startsWith("lobby:")) {
        const oT = TT.slice(6);
        return DT(oT) ? {
          kind: "lobby",
          path: oT
        } : null
      }
      const oT = TT.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return oT ? {
        kind: "codeBlock",
        pos: [parseInt(oT[1]), parseInt(oT[2]), parseInt(oT[3])]
      } : null
    }

    function BT(TT) {
      return TT.endsWith(".d.ts")
    }

    function FT(TT) {
      return TT.endsWith(".ts") && !BT(TT)
    }
    const ST = 64;

    function DT(TT) {
      if (!TT || TT !== TT.trim()) return !1;
      if (TT.length > ST) return !1;
      if (TT.startsWith("/") || TT.includes("\\") || TT.includes("\0")) return !1;
      if (!BT(TT) && !FT(TT) && ! function(TT) {
          return TT.endsWith(".js") && !TT.endsWith(".min.js") && !TT.endsWith(".bundle.js")
        }(TT)) return !1;
      const oT = TT.split("/");
      for (const IT of oT)
        if ("" === IT || "." === IT || ".." === IT) return !1;
      return !0
    }
    const LT = 14e3
  },
  4336: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => zT,
      f: () => iT,
      g: () => kT,
      j: () => BT,
      m: () => WT
    });
    const iT = ["sine", "triangle", "square", "sawtooth"],
      zT = 55,
      kT = {
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

    function WT(TT) {
      return "string" !== typeof TT ? TT : Object.hasOwn(kT, TT) ? kT[TT] : null
    }

    function XT(TT, oT, IT) {
      return Math.min(IT, Math.max(oT, TT))
    }

    function BT(TT) {
      const oT = XT(TT.durationMs, 10, 500),
        IT = XT(TT.attackMs, 0, oT),
        {
          intonation: zT
        } = TT;
      return {
        waveform: iT.includes(TT.waveform) ? TT.waveform : "sine",
        pitchHz: XT(TT.pitchHz, 20, 4e3),
        glideSemitones: XT(TT.glideSemitones, -24, 24),
        durationMs: oT,
        attackMs: IT,
        releaseMs: XT(TT.releaseMs, 0, oT - IT),
        lowpassHz: null === TT.lowpassHz ? null : XT(TT.lowpassHz, 20, 2e4),
        volume: XT(TT.volume, 0, 2),
        intonation: {
          variationSemitones: XT(zT.variationSemitones, 0, 6),
          declineSemitones: XT(zT.declineSemitones, 0, 12),
          questionRiseSemitones: XT(zT.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: XT(zT.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: XT(TT.syllableMs, 25, 200)
      }
    }
  },
  8244: () => {},
  9552: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAHklEQVR4nGNY3x/6nxjMQH2Fcyq8/hODaWA11d0IAPvLyX36T0UzAAAAAElFTkSuQmCC"
  },
  17633: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAC4CAYAAADqkK6nAAAAAXNSR0IArs4c6QAAAuxJREFUeJzt1jFOFHEchuEfxpqeaGusuYDhCpbewMbEwmNYmNBwA0quYLgAtaGF2HuBtVpEWHBNXnBXnqeanUzxT+bNtzMDsOl21nhm8eCnYBvd2c6zxzwFT8N9S7WYmfn0am9mZl6+2H2M87DhLi5/zMzM5/Pvy1u3GrJU5FYt1WJm5svB60c+Ctvo49dvy8urliwVuetL5RuKv7bqG8tSkXt+88afFurN+3czM7P/9sPDnIiNcHZy+Nvv06Pjlc9d9fJrqXxT0bu1VHexUE/Tzfd912JdZ6nIrb1UFop1WSpyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIit3ZUZyeHc3Zy+JBn4T9hqcg9X/fB06Pj337vv/2QH4bNs/x3uvn+72OpyO1cu17MzHx6tTczMy9f7P6L87BlLi5/zMzM5/Pvy1s7lorczop7i5mZLwevH/kobKOPX78tL69aslTkVi3Vkm8sbln1DXXzGUtF7r6lWlo8+CnYRne2Y6mAzfcTBsFAqM32XQcAAAAASUVORK5CYII="
  },
  19517: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJUlEQVR4nGMwsIpkIAYz0FThfyjGymcgVSFMEJtCsBjJCgcgeABOGmAZtndiFgAAAABJRU5ErkJggg=="
  },
  19520: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJ0lEQVR4nGMwsIpkIAYzQBn/kTBWMQYsgtgwA+0UMuBTNIgU4g1wAE6xgffL0CuLAAAAAElFTkSuQmCC"
  },
  19525: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJElEQVR4nGMwsIpkIAYzkKrwPxLGKsZAc4UMaJh8hdQPHoIKAboeZhN3YNlSAAAAAElFTkSuQmCC"
  },
  19530: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMUlEQVR4nGMwsIpkIAYzoAn8R8MM2BSiK/qPrJiQov8wxWQrxMkm2USiPUNS8OANcADc3H37DfNNQQAAAABJRU5ErkJggg=="
  },
  19534: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAKElEQVR4nGMwsIpkIAYzIHH+48AMyApxKfoPU0yRQgZsYkNJIcEABwCQU3/5LLo7QwAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);