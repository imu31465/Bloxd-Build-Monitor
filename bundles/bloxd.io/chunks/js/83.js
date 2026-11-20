export const id = 83;
export const ids = [83];
export const modules = {
  36355: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => XT,
      f: () => ZT
    });
    var lT = cT(71),
      MT = cT(1953),
      KT = cT(36359),
      OT = cT.n(KT),
      yT = cT(4528),
      fT = cT(1921),
      xT = cT(1461),
      IT = cT(118),
      AT = cT(133),
      CT = cT(339),
      jT = cT(1046),
      vT = cT.n(jT),
      tT = cT(31),
      hT = cT(1061),
      NT = cT(1654),
      QT = cT(1741),
      ST = cT(1701),
      DT = cT(2031),
      aT = cT(1420),
      FT = cT(2114),
      rT = cT(1409),
      PT = cT(8813),
      wT = cT(36361),
      mT = cT(36392),
      bT = cT(1488),
      zT = cT(2469),
      JT = cT(1195),
      oT = cT(36400);
    var HT = cT(9294);
    var eT = cT(1099);
    const GT = cT(36409),
      VT = ["enter", "t", "/"];
    let ET = !1;

    function ZT() {
      return ET || (0, QT.isTextEntry)(document.activeElement)
    }

    function uT() {
      var TT, kT;
      (0, FT.e)();
      const cT = null !== (TT = null === (kT = (0, aT.g)()) || void 0 === kT ? void 0 : kT.getBoundButton("keyboardChannel")) && void 0 !== TT ? TT : null;
      return cT ? (0, eT.jsx)(DT.c, {
        className: "ChatInputChannelGlyph",
        glyph: cT
      }) : null
    }

    function XT() {
      const {
        t: TT
      } = (0, JT.B)(), {
        isTouchScreen: kT
      } = (0, tT.n)(["isTouchScreen"]), cT = (0, rT.s)(), [KT, jT] = (0, lT.useState)(!1), DT = (0, lT.useRef)(KT), aT = (0, lT.useRef)(null), {
        messages: FT,
        reportedPlayers: ZT,
        channel: XT
      } = (0, PT.l)(), LT = (0, lT.useRef)(0), RT = (0, lT.useRef)(""), gT = (0, lT.useRef)(null);
      var UT;
      UT = gT, (0, lT.useEffect)((() => {
        if (!(0, IT.isIOS)()) return;
        const TT = UT.current;
        let kT = null;
        const cT = cT => {
            const lT = cT.changedTouches[0];
            kT = "none" === getComputedStyle(TT).pointerEvents ? {
              id: lT.identifier,
              y: lT.clientY
            } : null
          },
          lT = cT => {
            const lT = kT,
              MT = lT && (0, oT.b)(cT.changedTouches, lT.id);
            MT && (cT.preventDefault(), TT.scrollBy({
              top: lT.y - MT.clientY,
              behavior: "instant"
            }), lT.y = MT.clientY)
          };
        return TT.addEventListener("touchstart", cT, {
          passive: !0
        }), TT.addEventListener("touchmove", lT, {
          passive: !1
        }), () => {
          TT.removeEventListener("touchstart", cT), TT.removeEventListener("touchmove", lT)
        }
      }), [UT]);
      const [YT, BT] = (0, lT.useState)(!1), [WT, nT] = (0, lT.useState)(!1), pT = (0, lT.useRef)(YT), iT = (0, lT.useRef)(null), qT = (0, lT.useRef)(!1), sT = (0, lT.useRef)(null), Tk = (0, lT.useRef)(null), kk = (0, lT.useRef)(null), ck = (0, lT.useRef)(Ok);
      ck.current = Ok;
      const lk = (0, zT.m)();

      function Mk() {
        DT.current = !1, jT(!1), Tk.current.blur()
      }

      function Kk(TT) {
        pT.current = TT, BT(TT)
      }

      function Ok() {
        const TT = Tk.current.value;
        Tk.current.value = "", yk(TT)
      }

      function yk(TT) {
        (0, PT.h)(TT), LT.current = 0, Kk(!1)
      }

      function fk(TT, kT) {
        0 === LT.current && (RT.current = Tk.current.value);
        const cT = (0, PT.f)(LT.current + TT, kT);
        LT.current = cT.stepsBack, Tk.current.value = 0 === cT.stepsBack ? RT.current : cT.text, setTimeout((() => {
          Tk.current && Tk.current.setSelectionRange(-1, -1)
        }), 0)
      }

      function xk() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        gT.current && (!TT && pT.current || (gT.current.scrollTop = 1e5))
      }
      return (0, yT.c)(!0, KT, "ChatComponent"), (0, lT.useEffect)((() => (ET = KT, () => {
          ET = !1
        })), [KT]), (0, xT.g)("appManagerUpdated|openEverythingMenuName", (() => {
          (0, NT.u)() && jT(!1)
        })), (0, lT.useEffect)((() => {
          Tk.current.addEventListener("blur", (TT => {
            if (null === Tk.current) return;
            Array.from(document.querySelectorAll(":hover")).some((TT => TT.classList.contains("ChatInputChannel") || TT.classList.contains("ChatMsgSelectWrapper"))) || ((0, IT.isMobile)() && DT.current && "" !== Tk.current.value && ck.current(), jT(!1))
          }));
          const TT = TT => {
            aT.current.contains(TT.target) || (0, ST.f)(TT.target) || jT(!1)
          };
          document.addEventListener("touchstart", TT, {
            capture: !0
          });
          const kT = TT => {
            (0, mT.k)(TT.target) && (DT.current = !1, jT(!1))
          };
          document.addEventListener("mousedown", kT, {
            capture: !0
          });
          const cT = () => {
              clearTimeout(iT.current), Kk(!0)
            },
            lT = () => {
              clearTimeout(iT.current), iT.current = setTimeout((() => {
                Kk(!1), xk()
              }), 4e3)
            },
            KT = () => {
              document.pointerLockElement ? (jT(!1), nT(!0), qT.current = !1, Kk(!1), xk()) : nT(!1)
            };
          gT.current.addEventListener("pointermove", (TT => {
            "touch" === TT.pointerType || qT.current || document.pointerLockElement || (qT.current = !0, clearTimeout(iT.current))
          })), gT.current.addEventListener("pointerleave", (TT => {
            "touch" !== TT.pointerType && (qT.current = !1, pT.current && lT())
          })), gT.current.addEventListener("pointerdown", (TT => {
            "touch" === TT.pointerType || document.pointerLockElement || (qT.current = !0, cT())
          })), gT.current.addEventListener("wheel", (TT => {
            document.pointerLockElement || TT.deltaY >= 0 && Math.abs(gT.current.scrollTop) < 1 || (cT(), qT.current || (iT.current = setTimeout((() => {
              Kk(!1)
            }), 4e3)))
          }), {
            passive: !0
          }), gT.current.addEventListener("touchstart", cT), gT.current.addEventListener("touchend", lT), gT.current.addEventListener("touchcancel", lT), document.addEventListener("pointerlockchange", KT);
          const yT = TT => {
            if (lk.shown && (DT.current || ! function(TT) {
                if ((0, QT.isTypingInInput)()) return !0;
                const kT = document.activeElement;
                return (kT instanceof HTMLButtonElement || "button" === (null === kT || void 0 === kT ? void 0 : kT.getAttribute("role"))) && ["Enter", " "].includes(TT.key)
              }(TT)) && "codeEditor" !== tT.e.get("openInGameMenuName") && "lobbyCodeEditor" !== tT.e.get("openInGameMenuName") && !MT.gameBridge.latest("connectedGame").replay)
              if (DT.current || !(0, NT.u)()) {
                if (DT.current) {
                  if ("ArrowUp" === TT.code || "ArrowDown" === TT.code) return fk("ArrowUp" === TT.code ? 1 : -1, !1), void TT.stopPropagation();
                  if ("Tab" === TT.code) return PT.c.selectNextChannel(), TT.stopPropagation(), void TT.preventDefault();
                  if (TT.ctrlKey && dT.includes(GT[TT.keyCode])) return TT.preventDefault(), void TT.stopPropagation()
                }
                if ([...VT, "esc"].includes(OT()(TT)))
                  if ("esc" !== OT()(TT)) {
                    if (!DT.current || "/" !== OT()(TT)) {
                      if ("t" === OT()(TT)) {
                        if (DT.current) return void TT.stopPropagation();
                        TT.preventDefault()
                      }
                      DT.current && "" !== Tk.current.value && ck.current(), TT.repeat || (DT.current || "/" === OT()(TT) && (Tk.current.value = "/", TT.preventDefault()), jT(!DT.current))
                    }
                  } else DT.current && (jT(!1), TT.stopPropagation());
                else DT.current && TT.stopPropagation()
              } else VT.includes(OT()(TT)) && (TT.preventDefault(), TT.stopPropagation(), (0, NT.c)(TT))
          };
          document.addEventListener("keydown", yT, {
            capture: !0
          });
          const fT = gT.current;
          let xT = !1;
          const AT = new ResizeObserver((() => {
              xT && (xT = !1, xk())
            })),
            CT = () => {
              xT = !0, AT.unobserve(fT), AT.observe(fT)
            };
          sT.current = CT;
          const vT = new MutationObserver(CT);
          return vT.observe(fT, {
            childList: !0,
            subtree: !0
          }), () => {
            document.removeEventListener("keydown", yT, {
              capture: !0
            }), document.removeEventListener("touchstart", TT, {
              capture: !0
            }), document.removeEventListener("mousedown", kT, {
              capture: !0
            }), document.removeEventListener("pointerlockchange", KT), sT.current = null, vT.disconnect(), AT.disconnect(), clearTimeout(iT.current)
          }
        }), []), (0, ST.j)(Tk, {
          open: () => {
            jT(!0)
          },
          close: () => {
            Mk()
          },
          submit: () => {
            "" !== Tk.current.value && Ok(), Mk()
          },
          stepHistory: () => {
            fk(1, !0)
          },
          sendLine: TT => {
            yk(TT), Mk()
          },
          selectNextChannel: () => {
            PT.c.selectNextChannel()
          }
        }), (0, lT.useEffect)((() => {
          var TT;
          (DT.current = KT, Tk.current) && (KT ? (LT.current = 0, Tk.current.focus()) : (Tk.current.blur(), null === (TT = sT.current) || void 0 === TT || TT.call(sT)))
        }), [KT]),
        function(TT, kT) {
          (0, lT.useLayoutEffect)((() => {
            if (!kT) return;
            HT.b.hold();
            const cT = TT.current.closest(".InGameHeaderAndChat"),
              lT = window.visualViewport;
            let MT = "";
            const KT = () => {
              const TT = `${lT.offsetTop+lT.height}px`;
              TT !== MT && (MT = TT, cT.style.setProperty("--keyboard-top", TT))
            };
            return KT(), lT.addEventListener("resize", KT), lT.addEventListener("scroll", KT), () => {
              lT.removeEventListener("resize", KT), lT.removeEventListener("scroll", KT), cT.style.removeProperty("--keyboard-top"), HT.b.release()
            }
          }), [TT, kT])
        }(aT, KT && kT), (0, eT.jsx)(eT.Fragment, {
          children: (0, eT.jsxs)("div", {
            ref: aT,
            className: vT()("Chat", {
              Chatting: KT
            }),
            "data-camera-keeper": KT ? "" : void 0,
            children: [(0, eT.jsx)("div", {
              ref: gT,
              className: vT()("ChatMessages", {
                HideScrollbar: !YT && !KT,
                NoScrolling: !(0, IT.isMobile)() && WT
              }),
              children: (0, eT.jsx)(wT.e, {
                messages: FT,
                reportedPlayers: ZT
              })
            }), kT && !KT && (0, eT.jsx)("button", {
              type: "button",
              className: "ChatIconWrapper SmallTextLight",
              "aria-label": TT("general:chat"),
              ...(0, bT.f)((() => {
                jT(!0), kk.current.style.display = "flex", (0, IT.isIOS)() && Tk.current.focus()
              }), "pointerup"),
              children: (0, eT.jsx)(hT.e, {
                name: "comment-dots",
                className: "ChatIcon"
              })
            }), (0, eT.jsxs)("div", {
              ref: kk,
              className: "ChatInputWrapper",
              style: {
                display: "" + (KT ? "flex" : "none")
              },
              children: [XT && (0, eT.jsx)("button", {
                type: "button",
                className: "ChatInputChannel",
                style: {
                  backgroundColor: XT.elementBgColor
                },
                onClick: TT => {
                  PT.c.selectNextChannel(), Tk.current.focus()
                },
                children: (0, eT.jsx)("span", {
                  className: "SmallTextBold",
                  children: (0, eT.jsx)(fT.b, {
                    text: XT.elementContent
                  })
                })
              }), XT && cT && (0, eT.jsx)(uT, {}), (0, eT.jsx)("input", {
                className: "ChatInput",
                maxLength: CT.dd,
                ref: Tk,
                spellCheck: "false",
                autoComplete: "off",
                autoCorrect: "off",
                "aria-label": TT("general:chat"),
                placeholder: XT ? `${XT.channelName} Chat${"touchOnly"===(0,AT.b)()||cT?"":" [Tab]"}` : ""
              })]
            })]
          })
        })
    }
    const dT = ["W", "S", "D", "N", "T", "<tab>", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "<page-up>", "<page-down>", "B", "O", "H", "J", "F", "G", "J", "M", "<enter>", "L", "K", "E", "P", "R", "O", "U"]
  },
  36361: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => wT
    });
    var lT = cT(71),
      MT = cT(1046),
      KT = cT.n(MT),
      OT = cT(8816),
      yT = cT(36),
      fT = cT(2413),
      xT = cT(3544),
      IT = cT(2051),
      AT = cT(31),
      CT = cT(1921),
      jT = cT(36365),
      vT = cT(2181),
      tT = cT(36369),
      hT = cT(2633),
      NT = cT(2611),
      QT = cT(2606),
      ST = cT(3560),
      DT = cT(36374),
      aT = cT(3045),
      FT = cT(1996),
      rT = cT(1099);

    function PT(TT) {
      for (let cT = TT.length - 1; cT >= 0; cT--) {
        const lT = "string" === typeof(kT = TT[cT]) ? kT : "str" in kT && "string" === typeof kT.str ? kT.str : "";
        if ("" !== lT.trim()) return lT
      }
      var kT;
      return ""
    }

    function wT(TT) {
      let {
        messages: kT,
        reportedPlayers: cT
      } = TT;
      return (0, rT.jsx)(rT.Fragment, {
        children: kT.map((TT => (0, rT.jsx)(mT, {
          message: TT,
          reportedPlayers: cT
        }, TT.clientChatMsgId)))
      })
    }
    const mT = (0, lT.memo)((function(TT) {
      var kT;
      let {
        message: cT,
        reportedPlayers: MT
      } = TT;
      const wT = (0, lT.useRef)(null),
        [mT] = (0, lT.useState)(aT.e),
        {
          author: bT
        } = cT,
        zT = null === bT || void 0 === bT ? void 0 : bT.id,
        JT = null !== (kT = null === bT || void 0 === bT ? void 0 : bT.name) && void 0 !== kT ? kT : void 0,
        oT = (0, IT.d)(JT),
        HT = null !== bT && void 0 !== bT && bT.profileEffect ? vT.f[bT.profileEffect] : void 0,
        eT = null !== bT && !bT.local,
        GT = null === bT && null !== cT.serverChatMsgId,
        VT = (0, FT.e)("hiddenPlayerNames", (TT => (0, tT.g)(eT, JT, TT))),
        ET = null === cT.serverChatMsgId || null === bT ? null : {
          text: PT(cT.content),
          serverChatMsgId: cT.serverChatMsgId,
          authorId: bT.id
        },
        ZT = GT || null !== ET && !MT.includes(zT),
        uT = (0, xT.i)(eT && null !== JT && void 0 !== JT ? JT : null),
        XT = (0, QT.f)(wT);
      (0, lT.useEffect)((() => () => {
        QT.b.closeIfOwner(wT)
      }), []);
      const dT = () => {
          GT ? yT.k.nt("OpenReportMenu", {
            playerEId: null,
            playerName: void 0,
            vI: (0, OT.e)(cT.content),
            serverChatMsgId: cT.serverChatMsgId
          }) : null !== ET ? yT.k.nt("OpenReportMenu", {
            playerEId: zT,
            playerName: JT,
            vI: ET.text,
            serverChatMsgId: ET.serverChatMsgId
          }) : console.warn("Reporting a chat message the server never acknowledged")
        },
        LT = void 0 === JT ? [] : (0, ST.e)(uT, JT, ET);
      return (0, rT.jsxs)("div", {
        ref: wT,
        className: KT()("MessageWrapper", {
          ChatMsgSelectWrapper: zT,
          Still: mT
        }),
        onContextMenu: VT ? TT => {
          (0, hT.h)(wT, TT, {
            ...(0, tT.c)(zT, JT),
            showLocation: !1,
            status: null,
            extraActions: ZT ? [{
              icon: "flag",
              text: "Report",
              onClick: dT
            }] : [],
            moderationActions: (0, DT.b)(JT),
            friendRequestSource: "chat"
          }, AT.e.get("isTouchScreen"))
        } : void 0,
        onPointerDown: VT ? TT => {
          (0, NT.b)(TT, (() => (0, tT.c)(zT, JT).playerSocialPreview))
        } : void 0,
        children: [HT && (0, rT.jsx)(HT, {
          className: "ChatMessageBackground",
          simple: !0
        }), (eT || GT) && !XT && (0, rT.jsx)(jT.c, {
          className: "ChatFloatingActions",
          triggerElementRef: wT,
          options: [{
            icon: "flag",
            text: "Report",
            onPointerDown: dT,
            show: ZT
          }, ...LT, {
            icon: "user-plus",
            text: "socialBar:sendFriendRequest",
            onPointerDown: TT => {
              (0, fT.l)(JT, "chat")
            },
            analyticsClick: {
              id: "social.add_friend",
              value: "chat"
            },
            show: VT && "blocked" !== uT
          }]
        }), (0, rT.jsx)(CT.b, {
          text: cT.content,
          friendBadgeFor: oT ? JT : void 0
        }, cT.clientChatMsgId)]
      }, cT.clientChatMsgId)
    }))
  },
  36416: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => jT,
      g: () => vT,
      j: () => CT,
      k: () => AT
    });
    var lT = cT(9359),
      MT = cT(36423),
      KT = cT(36432),
      OT = cT(8746),
      yT = cT(1461),
      fT = cT(71),
      xT = cT(94),
      IT = cT(1099);

    function AT() {
      var TT;
      return (0, yT.i)(MT.b, (0, MT.j)()), (0, IT.jsx)(IT.Fragment, {
        children: null === (TT = (0, MT.j)()) || void 0 === TT ? void 0 : TT.content
      })
    }

    function CT(TT) {
      var kT;
      let {
        show: cT
      } = TT;
      (0, yT.i)(MT.b, (0, MT.j)());
      const xT = null === (kT = (0, MT.j)()) || void 0 === kT ? void 0 : kT.menu;
      return (0, fT.useEffect)((() => {
        var TT;
        cT || (null === xT || void 0 === xT || null === (TT = xT.onClose) || void 0 === TT || TT.call(xT), (0, KT.q)())
      }), [cT, xT]), (0, fT.useEffect)((() => cT ? (0, OT.e)(KT.A, KT.h) : void 0), [cT]), (0, IT.jsx)(lT.b, {
        showing: cT,
        globallyUniqueKey: "clientGameMenu",
        children: null === xT || void 0 === xT ? void 0 : xT.content
      })
    }

    function jT(TT) {
      let {
        placement: kT = "bottom"
      } = TT;
      return (0, IT.jsx)("div", {
        id: `clientGameHud-${kT}`,
        style: {
          display: "contents"
        }
      })
    }

    function vT(TT) {
      let {
        children: kT,
        placement: cT = "bottom"
      } = TT;
      const [lT, MT] = (0, fT.useState)(null);
      return (0, fT.useEffect)((() => {
        MT(document.getElementById(`clientGameHud-${cT}`))
      }), [cT]), lT ? (0, xT.createPortal)(kT, lT) : null
    }
  },
  36722: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => AT,
      d: () => IT
    });
    var lT = cT(71),
      MT = cT(1046),
      KT = cT.n(MT),
      OT = cT(1470),
      yT = cT(1099);
    const fT = 200,
      xT = 160;

    function IT() {
      return window.matchMedia("(max-width: 900px)").matches
    }

    function AT(TT) {
      let {
        side: kT,
        defaultSize: cT,
        covers: MT,
        onClose: IT,
        children: AT
      } = TT;
      const CT = (0, lT.useRef)(null),
        [jT, vT] = (0, lT.useState)(null),
        [tT, hT] = (0, lT.useState)(cT);
      tT !== cT && (hT(cT), vT(null));
      const NT = (0, lT.useRef)(null),
        QT = "top" === kT,
        ST = TT => QT ? TT.clientY : TT.clientX,
        DT = () => {
          NT.current = null
        };
      return (0, yT.jsxs)("div", {
        ref: CT,
        className: KT()("ResizableSidePanel", kT && `ResizableSidePanel-${kT}`, {
          Covers: "always" === MT,
          CoversWhenNarrow: "narrow" === MT,
          Dragged: null !== jT
        }),
        style: {
          [QT ? "height" : "width"]: null !== jT && void 0 !== jT ? jT : cT
        },
        children: [AT, kT && (0, yT.jsx)("div", {
          className: "ResizableSidePanelHandle",
          role: "separator",
          "aria-orientation": QT ? "horizontal" : "vertical",
          onPointerDown: TT => {
            if (0 !== TT.button) return;
            TT.preventDefault();
            const kT = CT.current,
              cT = Array.from(kT.parentElement.children).reduce(((TT, cT) => cT !== kT && "0" !== getComputedStyle(cT).flexGrow ? TT + (TT => QT ? TT.clientHeight : TT.clientWidth)(cT) : TT), 0),
              lT = QT ? kT.offsetHeight : kT.offsetWidth,
              MT = Math.min(fT, lT),
              KT = Math.max(MT, lT + Math.max(0, cT - xT));
            NT.current = {
              start: ST(TT),
              startSize: lT,
              minSize: MT,
              maxSize: KT
            }, TT.currentTarget.setPointerCapture(TT.pointerId)
          },
          onPointerMove: TT => {
            const cT = NT.current;
            if (!cT) return;
            const lT = "right" === kT ? cT.start - TT.clientX : ST(TT) - cT.start;
            vT(Math.min(cT.maxSize, Math.max(cT.minSize, cT.startSize + lT)))
          },
          onPointerUp: DT,
          onPointerCancel: DT,
          onLostPointerCapture: DT
        }), IT && (0, yT.jsx)(OT.l, {
          className: "ResizableSidePanelClose",
          onClick: IT
        })]
      })
    }
  },
  36742: (TT, kT, cT) => {
    cT.d(kT, {
      A: () => PT,
      E: () => MT,
      G: () => rT,
      b: () => ST,
      d: () => hT,
      g: () => vT,
      k: () => jT,
      o: () => QT,
      s: () => wT,
      t: () => DT,
      u: () => FT,
      w: () => aT
    });
    var lT = cT(71);
    const MT = 5e3,
      KT = 500,
      OT = 3e3;
    let yT = null,
      fT = null,
      xT = null;
    const IT = new Set;

    function AT(TT) {
      yT = TT;
      for (const kT of IT) kT()
    }

    function CT() {
      if (!yT || void 0 !== yT.endedAt) return;
      null !== fT && (clearTimeout(fT), fT = null), AT({
        ...yT,
        endedAt: Date.now()
      });
      const TT = xT;
      xT = null, null === TT || void 0 === TT || TT()
    }

    function jT(TT, kT) {
      let {
        submit: cT,
        reopen: lT
      } = kT;
      null !== fT && clearTimeout(fT), xT = lT, AT({
        ...TT,
        startedAt: Date.now(),
        errors: []
      }), fT = setTimeout(CT, OT), cT()
    }

    function vT() {
      yT && void 0 === yT.endedAt && void 0 === yT.ranAt && (null !== fT && clearTimeout(fT), AT({
        ...yT,
        ranAt: Date.now()
      }), fT = setTimeout(CT, MT))
    }
    const tT = 3;

    function hT(TT) {
      if (!yT || void 0 === yT.ranAt || void 0 !== yT.endedAt || yT.errors.includes(TT) || yT.errors.length >= tT) return;
      const kT = 0 === yT.errors.length;
      AT({
        ...yT,
        errors: [...yT.errors, TT]
      }), kT && (null !== fT && clearTimeout(fT), fT = setTimeout(CT, KT))
    }

    function NT(TT) {
      var kT;
      return (null === (kT = yT) || void 0 === kT ? void 0 : kT.chatKey) === TT ? yT : null
    }

    function QT(TT) {
      const kT = NT(TT);
      return kT && void 0 !== kT.endedAt ? (AT(null), kT) : null
    }

    function ST(TT) {
      var kT;
      (null === (kT = yT) || void 0 === kT ? void 0 : kT.chatKey) === TT && (null !== fT && (clearTimeout(fT), fT = null), xT = null, AT(null))
    }
    const DT = "These changes from your last answer didn't go in. Make them again.";

    function aT(TT) {
      const kT = [...new Set(TT)].slice(0, tT);
      return `Fix this in your change: when it ran, the world showed ${1===kT.length?"this error":"these errors"}: ${kT.join(" ")}`
    }

    function FT(TT) {
      return `Your change didn't go in, because the code wouldn't run at all: ${TT.join(" ")} Send the whole change again with that fixed.`
    }

    function rT(TT) {
      return `Fix this in your change: ${TT.join(" ")}`
    }

    function PT(TT) {
      var kT;
      if (void 0 === TT.ranAt) return {
        title: "Couldn't test it",
        text: "Your change didn't go into your world, so it couldn't be tested. Press Submit to try it."
      };
      const cT = Math.max(1, Math.round(((null !== (kT = TT.endedAt) && void 0 !== kT ? kT : TT.ranAt) - TT.ranAt) / 1e3)),
        lT = `Your change ran in your world for ${cT} ${1===cT?"second":"seconds"}`;
      return 0 === TT.errors.length ? {
        title: "Tested: no errors",
        text: `${lT} without an error.`
      } : {
        title: 1 === TT.errors.length ? "Tested: it showed an error" : `Tested: it showed ${TT.errors.length} errors`,
        text: `${lT} and showed: ${TT.errors.join(" ")}`
      }
    }

    function wT(TT) {
      const [kT, cT] = (0, lT.useState)((() => NT(TT)));
      return (0, lT.useEffect)((() => {
        const kT = () => {
          cT(NT(TT))
        };
        return kT(), IT.add(kT), () => {
          IT.delete(kT)
        }
      }), [TT]), kT
    }
  },
  36749: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => MT,
      e: () => lT
    });
    const lT = {
      key: "worldCode",
      label: "World Code",
      codeBlock: !1
    };

    function MT(TT, kT, cT) {
      return {
        key: TT,
        label: `Code block at ${kT.join(", ")}`,
        codeBlock: !0,
        pos: kT,
        canChangePos: cT
      }
    }
  },
  36739: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => lT,
      i: () => KT,
      j: () => OT,
      n: () => MT
    });
    const lT = "code block",
      MT = "World Code/";

    function KT(TT) {
      return TT.trim().toLowerCase().startsWith(MT.toLowerCase())
    }

    function OT(TT) {
      return TT.trim().slice(MT.length).replace(/^\.?\//, "")
    }
  },
  36705: (TT, kT, cT) => {
    cT.d(kT, {
      D: () => CT,
      G: () => eT,
      J: () => PT,
      L: () => wT,
      M: () => HT,
      b: () => vT,
      c: () => fT,
      e: () => tT,
      i: () => bT,
      k: () => yT,
      n: () => IT,
      r: () => jT,
      t: () => hT,
      u: () => DT,
      w: () => zT,
      z: () => mT
    });
    var lT = cT(36693),
      MT = cT(36698);
    const KT = "bloxd-world-code-directory-sync",
      OT = "handles",
      yT = "[INVALID SCHEMATIC PLACEHOLDER]";

    function fT(TT, kT) {
      return `${TT}::${kT}`
    }
    const xT = new Set(["node_modules", ".git"]);

    function IT() {
      return "undefined" !== typeof window && "function" === typeof window.showDirectoryPicker
    }

    function AT() {
      return new Promise(((TT, kT) => {
        const cT = indexedDB.open(KT, 1);
        cT.onupgradeneeded = () => {
          const TT = cT.result;
          TT.objectStoreNames.contains(OT) || TT.createObjectStore(OT)
        }, cT.onsuccess = () => {
          TT(cT.result)
        }, cT.onerror = () => {
          var TT;
          kT(null !== (TT = cT.error) && void 0 !== TT ? TT : new Error("Failed to open directory sync IndexedDB"))
        }
      }))
    }
    async function CT(TT, kT) {
      const cT = await AT();
      try {
        await new Promise(((lT, MT) => {
          const KT = cT.transaction(OT, "readwrite");
          KT.objectStore(OT).put(kT, TT), KT.oncomplete = () => {
            lT()
          }, KT.onerror = () => {
            var TT;
            MT(null !== (TT = KT.error) && void 0 !== TT ? TT : new Error("Failed to store directory handle"))
          }
        }))
      } finally {
        cT.close()
      }
    }
    async function jT(TT) {
      const kT = await AT();
      try {
        return await new Promise(((cT, lT) => {
          const MT = kT.transaction(OT, "readonly").objectStore(OT).get(TT);
          MT.onsuccess = () => {
            var TT;
            cT(null !== (TT = MT.result) && void 0 !== TT ? TT : null)
          }, MT.onerror = () => {
            var TT;
            lT(null !== (TT = MT.error) && void 0 !== TT ? TT : new Error("Failed to load directory handle"))
          }
        }))
      } finally {
        kT.close()
      }
    }
    async function vT(TT) {
      const kT = await AT();
      try {
        await new Promise(((cT, lT) => {
          const MT = kT.transaction(OT, "readwrite");
          MT.objectStore(OT).delete(TT), MT.oncomplete = () => {
            cT()
          }, MT.onerror = () => {
            var TT;
            lT(null !== (TT = MT.error) && void 0 !== TT ? TT : new Error("Failed to clear directory handle"))
          }
        }))
      } finally {
        kT.close()
      }
    }
    async function tT(TT) {
      const kT = {
        mode: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readwrite"
      };
      return "granted" === await TT.queryPermission(kT) || "granted" === await TT.requestPermission(kT)
    }
    async function hT(TT) {
      if (!IT()) return null;
      try {
        const kT = await window.showDirectoryPicker({
          mode: "readwrite"
        });
        return await CT(TT, kT), kT
      } catch (kT) {
        if (function(TT) {
            return TT instanceof DOMException && "AbortError" === TT.name
          }(kT)) return null;
        throw kT
      }
    }

    function NT(TT) {
      return TT.startsWith(".") || xT.has(TT)
    }

    function QT(TT) {
      if (!TT) return !0;
      const kT = TT.split("/");
      for (const cT of kT)
        if ("" === cT || "." === cT || ".." === cT) return !1;
      return !0
    }
    async function ST(TT, kT, cT) {
      for await (const [KT, OT] of TT.entries()) {
        if ("directory" === OT.kind) {
          if (NT(KT)) continue;
          const TT = kT ? `${kT}/${KT}` : KT;
          if (!QT(TT)) continue;
          await ST(OT, TT, cT);
          continue
        }
        const TT = kT ? `${kT}/${KT}` : KT;
        if (!(0, lT.s)(TT) && !(0, MT.e)(TT)) continue;
        const yT = await OT.getFile();
        cT[TT] = (0, MT.e)(TT) ? await JT(yT) : await yT.text()
      }
    }
    async function DT(TT) {
      const kT = {};
      return await ST(TT, "", kT), kT
    }

    function aT(TT) {
      return !(!TT || TT !== TT.trim() || TT.startsWith("/") || TT.includes("\\") || TT.includes("\0")) && QT(TT)
    }
    async function FT(TT, kT, cT) {
      const lT = kT.split("/"),
        MT = lT[lT.length - 1];
      let KT = TT;
      for (let OT = 0; OT < lT.length - 1; OT++) KT = await KT.getDirectoryHandle(lT[OT], {
        create: cT
      });
      return {
        dir: KT,
        fileName: MT
      }
    }
    async function rT(TT, kT, cT) {
      if (!aT(kT)) throw new Error(`Refusing to write unsafe path: ${kT}`);
      const {
        dir: lT,
        fileName: MT
      } = await FT(TT, kT, !0), KT = await lT.getFileHandle(MT, {
        create: !0
      }), OT = await KT.createWritable();
      await OT.write(cT), await OT.close()
    }
    async function PT(TT, kT, cT) {
      const lT = await async function(TT, kT) {
        if (!aT(kT)) return null;
        try {
          const {
            dir: cT,
            fileName: lT
          } = await FT(TT, kT, !1), MT = await cT.getFileHandle(lT), KT = await MT.getFile();
          return await KT.text()
        } catch (cT) {
          if (cT instanceof DOMException && ("NotFoundError" === cT.name || "NotAllowedError" === cT.name)) return null;
          throw cT
        }
      }(TT, kT);
      lT !== cT && await rT(TT, kT, cT)
    }
    async function wT(TT, kT, cT) {
      if (!(0, lT.s)(kT) && !(0, MT.e)(kT)) throw new Error(`Refusing to write non-allowlisted path: ${kT}`);
      if ((0, MT.e)(kT)) {
        if (await oT(TT, kT) === yT) throw new Error(`Move the binary schematic ${kT} outside the linked folder before syncing its placeholder`)
      }
      await rT(TT, kT, cT)
    }
    async function mT(TT, kT) {
      if (!aT(kT)) throw new Error(`Refusing to remove unsafe path: ${kT}`);
      try {
        const {
          dir: cT,
          fileName: lT
        } = await FT(TT, kT, !1);
        await cT.removeEntry(lT)
      } catch (cT) {
        if (cT instanceof DOMException && ("NotFoundError" === cT.name || "NotAllowedError" === cT.name)) return;
        throw cT
      }
    }
    async function bT(TT, kT) {
      if (!aT(kT)) return null;
      try {
        const cT = kT.split("/");
        let lT = TT;
        for (const TT of cT) lT = await lT.getDirectoryHandle(TT);
        return lT
      } catch (cT) {
        if (cT instanceof DOMException && ("NotFoundError" === cT.name || "NotAllowedError" === cT.name)) return null;
        throw cT
      }
    }
    async function zT(TT, kT) {
      if ((0, lT.s)(kT) || (0, MT.e)(kT)) {
        if ((0, MT.e)(kT)) {
          if (await oT(TT, kT) === yT) throw new Error(`Refusing to remove a binary schematic: ${kT}`)
        }
        await mT(TT, kT)
      }
    }
    async function JT(TT) {
      if (TT.size > 64) return yT;
      const kT = await TT.text();
      return Array.from(kT).some((TT => {
        const kT = TT.charCodeAt(0);
        return kT < 9 || kT > 13 && kT < 32 || 65533 === kT
      })) ? yT : kT
    }
    async function oT(TT, kT) {
      try {
        const {
          dir: cT,
          fileName: lT
        } = await FT(TT, kT, !1);
        return await JT(await (await cT.getFileHandle(lT)).getFile())
      } catch (cT) {
        if (cT instanceof DOMException && "NotFoundError" === cT.name) return null;
        throw cT
      }
    }
    async function HT(TT, kT) {
      const cT = await DT(TT);
      for (const lT of Object.keys(cT)) lT in kT || (0, MT.e)(lT) || await zT(TT, lT);
      for (const [KT, OT] of Object.entries(kT))((0, lT.s)(KT) || (0, MT.e)(KT)) && await wT(TT, KT, OT)
    }

    function eT(TT, kT) {
      var cT, lT;
      let MT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const KT = null !== (cT = MT.debounceMs) && void 0 !== cT ? cT : 300,
        OT = null !== (lT = MT.pollMs) && void 0 !== lT ? lT : 1e3;
      let yT = !1,
        fT = null,
        xT = null,
        IT = null;
      const AT = () => {
          yT || (fT && clearTimeout(fT), fT = setTimeout((() => {
            fT = null, CT()
          }), KT))
        },
        CT = async () => {
          if (!yT) try {
            if (!await tT(TT, "readwrite")) return;
            const cT = await DT(TT);
            yT || kT(cT)
          } catch (cT) {
            console.error("[WorldCodeDirectorySync] Failed to read watched directory", cT)
          }
        };
      CT();
      const jT = window.FileSystemObserver;
      if (jT) try {
        IT = new jT((() => {
          AT()
        })), IT.observe(TT, {
          recursive: !0
        })
      } catch (vT) {
        console.warn("[WorldCodeDirectorySync] FileSystemObserver unavailable, falling back to polling", vT), IT = null
      }
      return IT || (xT = setInterval((() => {
        AT()
      }), OT)), () => {
        yT = !0, fT && clearTimeout(fT), xT && clearInterval(xT), IT && IT.disconnect()
      }
    }
  },
  4798: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => hT,
      i: () => NT
    });
    var lT = cT(1046),
      MT = cT.n(lT),
      KT = cT(71),
      OT = cT(1195),
      yT = cT(4800),
      fT = cT(1921),
      xT = cT(2462),
      IT = cT(4806),
      AT = cT(1099);
    const CT = new WeakMap;
    let jT = 0;

    function vT(TT) {
      let kT = CT.get(TT);
      return void 0 === kT && (kT = jT++, CT.set(TT, kT)), kT
    }

    function tT(TT) {
      let {
        piece: kT
      } = TT;
      return "space" === kT.kind ? (0, AT.jsx)(AT.Fragment, {
        children: kT.text
      }) : (0, AT.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${kT.delayMs}ms`
        },
        children: (0, AT.jsx)(yT.e, {
          text: "icon" === kT.kind ? `[[${kT.icon}]]` : kT.text
        })
      })
    }

    function hT(TT) {
      let {
        display: kT
      } = TT;
      const {
        selectedLanguage: cT
      } = (0, OT.B)(), lT = (0, KT.useMemo)((() => (0, IT.b)((0, IT.e)(kT).plan.pieces)), [kT, cT.code]);
      return (0, AT.jsxs)("div", {
        className: MT()("Dialogue", {
          DialogueAnimateIn: !1 !== kT.animateIn
        }),
        children: [kT.speakerName && (0, AT.jsx)(fT.b, {
          text: kT.speakerName,
          className: "DialogueSpeaker"
        }), (0, AT.jsx)("p", {
          className: "DialogueLine",
          children: lT.map(((TT, kT) => 1 === TT.length && "space" === TT[0].kind ? TT[0].text : (0, AT.jsx)("span", {
            className: "DialogueGlue",
            children: TT.map(((TT, kT) => (0, AT.jsx)(tT, {
              piece: TT
            }, kT)))
          }, kT)))
        })]
      })
    }
    const NT = (0, KT.memo)((function() {
      const TT = (0, xT.f)("dialogue");
      return (0, AT.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: TT && (0, AT.jsx)(hT, {
          display: TT
        }, vT(TT))
      })
    }))
  },
  36496: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => tT,
      c: () => hT
    });
    var lT = cT(71),
      MT = cT(1461),
      KT = cT(1996),
      OT = cT(36445),
      yT = cT(617),
      fT = cT(1046),
      xT = cT.n(fT),
      IT = cT(1099);
    const AT = [CT()];

    function CT() {
      return {
        source: null,
        direction: null,
        JG: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function jT(TT) {
      return AT.find((kT => null !== kT.source && kT.source === TT))
    }

    function vT(TT) {
      clearTimeout(TT.timeout), TT.source = null, TT.direction = null, TT.writtenAngle = null, TT.JG && (TT.JG.style.rotate = "")
    }
    const tT = (0, lT.memo)((function() {
      const [, TT] = (0, lT.useReducer)((TT => TT + 1), 0);
      return (0, MT.g)("damagedByOtherPlayer", (kT => {
        let {
          EK: cT,
          direction: lT
        } = kT;
        const MT = cT || "nonDirectional",
          KT = function(TT) {
            var kT;
            const cT = null !== (kT = jT(TT)) && void 0 !== kT ? kT : AT.find((TT => null === TT.source));
            if (cT) return cT;
            const lT = {
              source: null,
              direction: null,
              JG: null,
              timeout: void 0,
              writtenAngle: null
            };
            return AT.push(lT), lT
          }(MT);
        clearTimeout(KT.timeout), KT.source = MT, KT.direction = lT, KT.timeout = setTimeout((() => {
          vT(KT), TT()
        }), 800), TT()
      })), (0, KT.b)("kill", (kT => {
        let {
          killer: cT,
          victim: lT
        } = kT;
        const MT = cT.local && jT(lT.id);
        MT && (vT(MT), TT())
      })), (0, lT.useEffect)((() => {
        const TT = (0, OT.f)("turnDamageIndicators", hT);
        return () => {
          TT(), AT.forEach(vT)
        }
      }), []), (0, IT.jsx)("div", {
        className: "DirectionalDamage",
        children: AT.map(((TT, kT) => (0, IT.jsx)("div", {
          ref: kT => {
            TT.JG = kT
          },
          className: xT()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, yT.R)(TT.direction),
            DamageIndicatorIdle: null === TT.source
          })
        }, kT)))
      })
    }));

    function hT(TT) {
      for (const kT of AT) {
        if (null === kT.source || (0, yT.R)(kT.direction)) continue;
        const cT = kT.direction - TT;
        cT !== kT.writtenAngle && (kT.writtenAngle = cT, kT.JG.style.rotate = `${cT}rad`)
      }
    }
  },
  36365: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => hT
    });
    var lT = cT(71),
      MT = cT(94),
      KT = cT(1195),
      OT = cT(1046),
      yT = cT.n(OT),
      fT = cT(1741),
      xT = cT(1061),
      IT = cT(1289),
      AT = cT(1497),
      CT = cT(1685),
      jT = cT(1488),
      vT = cT(1099);
    const tT = 14;

    function hT(TT) {
      let {
        className: kT,
        triggerElementRef: cT,
        options: OT
      } = TT;
      const {
        t: hT
      } = (0, KT.B)(), [NT, QT] = (0, lT.useState)(!1), [ST, DT] = (0, lT.useState)({
        x: 0,
        y: 0
      }), aT = (0, lT.useRef)(null);
      (0, lT.useEffect)((() => {
        let TT = null;
        const kT = kT => {
            TT = {
              x: kT.clientX,
              y: kT.clientY
            }
          },
          lT = kT => {
            if (null === TT || !(0, jT.c)(TT, kT)) return;
            TT = null;
            const cT = tT * (0, fT.getRemInPx)();
            DT({
              x: Math.min(kT.clientX, window.innerWidth - cT - 5),
              y: kT.clientY
            }), QT((TT => !TT))
          },
          MT = TT => {
            var kT;
            null !== (kT = aT.current) && void 0 !== kT && kT.contains(TT.relatedTarget) || QT(!1)
          },
          KT = cT.current;
        return KT.addEventListener("pointerdown", kT), KT.addEventListener("pointerup", lT), KT.addEventListener("mouseleave", MT), () => {
          KT.removeEventListener("pointerdown", kT), KT.removeEventListener("pointerup", lT), KT.removeEventListener("mouseleave", MT)
        }
      }), [cT]), (0, lT.useEffect)((() => {
        if (NT) return (0, CT.e)("pointerdown", (TT => {
          !aT.current || aT.current.contains(TT.target) || cT.current.contains(TT.target) || QT(!1)
        }))
      }), [NT, cT]), (0, lT.useLayoutEffect)((() => {
        if (!NT || !aT.current) return;
        const TT = aT.current.getBoundingClientRect().height,
          kT = Math.max(5, window.innerHeight - TT - 5);
        ST.y > kT && DT({
          x: ST.x,
          y: kT
        })
      }), [NT, ST]), (0, IT.q)("popup", aT, (() => {
        QT(!1)
      }), NT);
      const FT = OT.filter((TT => !1 !== TT.show));
      return NT && 0 !== FT.length ? (0, MT.createPortal)((0, vT.jsx)("div", {
        ref: aT,
        className: yT()("FloatingActions", {
          [kT]: kT
        }),
        style: {
          width: `${tT}rem`,
          top: ST.y,
          left: ST.x
        },
        children: FT.map((TT => {
          let {
            icon: kT,
            text: cT,
            onPointerDown: lT,
            analyticsClick: MT
          } = TT;
          return (0, vT.jsxs)("div", {
            className: "FloatingAction",
            "data-pad-focusable": !0,
            onPointerUp: TT => {
              void 0 !== MT && (0, AT.reportAnalyticsClick)(MT), lT(TT), QT(!1), TT.stopPropagation()
            },
            children: [(0, vT.jsx)(xT.e, {
              name: kT
            }), (0, vT.jsx)("div", {
              children: hT(cT)
            })]
          }, cT)
        }))
      }), function() {
        var TT;
        return null !== (TT = document.querySelector(".WholeAppWrapperInner")) && void 0 !== TT ? TT : document.body
      }()) : null
    }
  },
  36514: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => lO
    });
    var lT = cT(36416),
      MT = cT(71),
      KT = cT(2108),
      OT = cT(4515),
      yT = cT(4521),
      fT = cT(2462),
      xT = cT(1953),
      IT = cT(1099);

    function AT(TT) {
      let {
        className: kT,
        style: cT,
        vw: lT,
        maxPx: MT,
        children: KT
      } = TT;
      console.assert("number" === typeof lT && "number" === typeof MT, "vw and maxPx passed to Text must be numbers");
      const OT = window.innerWidth * (lT / 100) > MT ? `${MT}px` : `${lT}vw`;
      return (0, IT.jsx)("div", {
        className: kT,
        style: {
          ...cT,
          fontSize: OT
        },
        children: KT
      })
    }
    var CT = cT(36517),
      jT = cT(1470),
      vT = cT(36),
      tT = cT(1974),
      hT = cT(1061);

    function NT(TT) {
      let {
        tasks: kT,
        lastDisplayedTasks: cT
      } = TT;
      return (0, IT.jsx)(IT.Fragment, {
        children: Object.keys(kT).map((TT => (0, IT.jsx)(QT, {
          task: kT[TT],
          lastDisplayedAs: cT[TT]
        }, kT[TT].text)))
      })
    }

    function QT(TT) {
      let {
        task: kT,
        lastDisplayedAs: cT
      } = TT;
      const [lT, KT] = (0, MT.useState)(null !== cT && void 0 !== cT && cT.progress ? cT.progress / kT.goal : 0), [OT, yT] = (0, MT.useState)(!1), [fT, xT] = (0, MT.useState)(kT.claimed || !1);
      return (0, MT.useEffect)((() => {
        KT(kT.progress / kT.goal)
      }), [kT.progress, kT.goal]), fT ? null : (0, IT.jsxs)("div", {
        className: "Task",
        children: [(0, IT.jsx)("div", {
          className: "TaskDescDiv",
          children: (0, IT.jsx)(AT, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: kT.text
          })
        }), kT.progress < kT.goal ? (0, IT.jsxs)("div", {
          className: "TaskProgress",
          children: [0 !== lT ? (0, IT.jsx)("div", {
            className: "TaskProgressForeground",
            style: {
              width: 100 * lT + "%"
            }
          }) : null, (0, IT.jsx)("div", {
            className: "TaskProgressText",
            children: `${kT.progress}/${kT.goal}`
          })]
        }) : (0, IT.jsx)(jT.m, {
          className: "ClaimRewardButton",
          onClick: () => {
            yT(!0)
          },
          children: (0, IT.jsx)(AT, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: "Claim Reward"
          })
        }), OT ? (0, IT.jsx)(ST, {
          task: kT,
          close: () => {
            kT.claimed = !0, xT(!0), yT(!1)
          }
        }) : null]
      })
    }

    function ST(TT) {
      let {
        task: kT,
        close: cT
      } = TT;
      const [lT, KT] = (0, MT.useState)({}), [OT, yT] = (0, MT.useState)("closed");
      (0, MT.useEffect)((() => {
        let TT;
        return "animStart" === OT && (TT = setTimeout((() => {
          yT("animEnd")
        }), 700)), () => {
          clearTimeout(TT)
        }
      }), [OT]), (0, CT.e)((() => {
        xT.gameBridge.send("completeTask", kT.text)
      }));
      const AT = (0, fT.f)("currencyAmounts");
      return (0, IT.jsxs)("div", {
        className: "RewardBackground",
        onClick: () => {
          if ("animEnd" === OT)
            if (0 === kT.rewards.length) cT(), xT.gameBridge.send("completeTask", kT.text);
            else {
              const TT = {
                ...tT.b.get("currencyAmounts")
              };
              for (const kT in lT) TT[kT] = {
                ...TT[kT],
                amount: TT[kT].amount + lT[kT]
              };
              tT.b.apply({
                currencyAmounts: TT
              }), yT("closed")
            }
          else "closed" === OT && (KT(kT.rewards.pop()), yT("animStart"))
        },
        children: [(0, IT.jsx)("img", {
          className: "Chest",
          alt: "closed" !== OT ? "open chest" : "closed chest",
          src: `/textures/miscImages/Treasure Chest ${"closed"!==OT?"open":"closed"}.png`
        }), (0, IT.jsx)("div", {
          className: "Rewards",
          children: "closed" !== OT ? Object.keys(lT).map((TT => {
            const kT = null === AT || void 0 === AT ? void 0 : AT[TT];
            return !kT || kT.hidden ? null : (0, IT.jsxs)("div", {
              className: "Reward",
              children: [(0, IT.jsx)(hT.e, {
                name: kT.icon,
                className: "3x UiCurrencyIcon RewardIcon",
                style: {
                  color: kT.iconColour
                }
              }), (0, IT.jsx)("div", {
                className: "RewardAmountText",
                children: "animStart" === OT ? 0 : lT[TT]
              })]
            }, TT)
          })) : null
        }), "animStart" === OT ? (0, IT.jsx)(DT, {}) : null, (0, IT.jsx)("div", {
          className: "ChestsLeft",
          children: kT.rewards.length
        })]
      })
    }

    function DT() {
      const [TT, kT] = (0, MT.useState)(0);
      (0, MT.useEffect)((() => {
        kT(1)
      }), []);
      return (0, IT.jsx)(IT.Fragment, {
        children: Array.from({
          length: 40
        }).map(((kT, cT) => (0, IT.jsx)(hT.e, {
          name: "star",
          className: "3x UiCurrencyIcon OpenStar",
          style: {
            bottom: 50 * TT * Math.cos(cT / 40 * (2 * Math.PI)) + 50 + "vh",
            left: 50 * TT * Math.sin(cT / 40 * (2 * Math.PI)) + "vh",
            opacity: 0 === TT ? 1 : 0
          }
        }, cT)))
      })
    }
    vT.k.subscribe("requiredLibrariesLoaded", (() => {
      setTimeout((() => {
        const TT = new Image,
          kT = new Image;
        TT.src = "/textures/miscImages/Treasure Chest open.png", kT.src = "/textures/miscImages/Treasure Chest closed.png"
      }), 1e4)
    }));
    var aT = cT(3059),
      FT = cT(1130),
      rT = cT(1921),
      PT = cT(1461),
      wT = cT(339),
      mT = cT(1996),
      bT = cT(1348);

    function zT(TT) {
      var kT, cT;
      let {
        byId: lT,
        localId: MT
      } = TT;
      return null === MT ? null : null !== (kT = null === (cT = lT[MT]) || void 0 === cT ? void 0 : cT.name) && void 0 !== kT ? kT : null
    }

    function JT(TT) {
      let {
        lbStats: kT,
        storedState: cT = {}
      } = TT;
      const {
        userContext: lT
      } = (0, FT.b)(), KT = (0, mT.e)("players", zT), [OT, yT] = (0, MT.useState)(cT.selectedCat || (null === kT || void 0 === kT ? void 0 : kT[0]) || null), [fT, AT] = (0, MT.useState)(cT.selectedTimeframe || "Today"), [CT, jT] = (0, MT.useState)(null);
      (0, MT.useEffect)((() => {
        null === OT && null !== kT && kT.length > 0 && yT(kT[0])
      }), [kT, OT]);
      const [vT, tT] = (0, MT.useState)(cT.seeingTop || !1), [hT, NT] = (0, MT.useState)(!1), QT = (0, MT.useCallback)((() => {
        null !== OT && null !== fT && (xT.gameBridge.send("requestLeaderboard", {
          category: OT.value,
          timeframe: fT,
          seeTop: vT
        }), DT(!0), eT && GT(null))
      }), [OT, fT, cT, vT]);
      (0, MT.useEffect)((() => {
        QT(), cT.selectedCat = OT, cT.selectedTimeframe = fT, cT.seeingTop = vT
      }), [OT, fT, cT, vT, QT]), (0, MT.useEffect)((() => {
        if ((null === CT || void 0 === CT ? void 0 : CT.length) > 0)
          if (vT) vT && NT(null === JT(CT));
          else {
            for (const TT of CT)
              if (1 === TT.place) return void NT(!1);
            NT(!0)
          }
      }), [CT, vT]), (0, PT.g)("leaderboardResponse", (TT => {
        let {
          category: cT,
          timeframe: lT,
          data: MT
        } = TT;
        for (let KT = 0; KT < kT; KT++)
          if (kT[KT].value === cT) {
            yT(kT[KT]);
            break
          } AT(lT), jT(MT), DT(!1)
      }));
      const [ST, DT] = (0, MT.useState)(!0);

      function JT(TT) {
        const kT = zT(xT.gameBridge.latest("players"));
        for (let cT = 0; cT < TT.length; cT++)
          if (TT[cT].name === kT) return TT[cT].place;
        return null
      }
      const [oT, HT] = (0, MT.useState)(!1), [eT, GT] = (0, MT.useState)(null);
      (0, MT.useEffect)((() => {
        if (CT && !oT) {
          const TT = JT(CT);
          TT < (cT.lastSeenPlayerPlace || 0) && GT(cT.lastSeenPlayerPlace - TT), HT(!0)
        }
      }), [CT, cT, oT]), (0, MT.useEffect)((() => () => {
        CT && (cT.lastSeenPlayerPlace = JT(CT))
      }), [CT, cT]);
      const VT = (0, MT.useRef)(null),
        [ET, ZT] = (0, MT.useState)(void 0);
      return (0, MT.useEffect)((() => {
        var TT, kT;
        ET !== (null === (TT = VT.current) || void 0 === TT ? void 0 : TT.offsetHeight) && ZT(null === (kT = VT.current) || void 0 === kT ? void 0 : kT.offsetHeight)
      })), lT.isLoggedIn() ? (0, IT.jsxs)(IT.Fragment, {
        children: [(0, IT.jsxs)("div", {
          className: "LeaderboardSelectors",
          children: [(0, IT.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, IT.jsx)(aT.d, {
              options: kT.map((TT => ({
                label: TT.label,
                value: TT.value
              }))),
              value: OT,
              onChange: TT => {
                yT(TT)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), (0, IT.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, IT.jsx)(aT.d, {
              options: wT.Mc.map((TT => ({
                value: TT,
                label: TT,
                className: "LBDropdownMenuItem"
              }))),
              value: fT,
              onChange: TT => {
                AT(TT.label)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), hT ? (0, IT.jsx)("div", {
            className: "SeeTopText",
            onClick: () => {
              tT(!vT)
            },
            children: vT ? "See Yourself" : "See Top"
          }) : null]
        }), (0, IT.jsx)("div", {
          className: "LBTableWrapper",
          children: ST ? (0, IT.jsx)("div", {
            className: "LoaderContainer",
            children: (0, IT.jsx)(bT.d, {})
          }) : null === eT ? (0, IT.jsx)(IT.Fragment, {
            children: (0, IT.jsxs)("table", {
              className: "LBTable",
              children: [(0, IT.jsx)("thead", {
                className: "LBTableTHead",
                ref: VT,
                children: (0, IT.jsxs)("tr", {
                  children: [(0, IT.jsx)("th", {
                    className: "LBTablePlaceTH LBTableTH",
                    children: "PLACE"
                  }), (0, IT.jsx)("th", {
                    className: "LBTablePlayerTH LBTableTH",
                    children: "PLAYER"
                  }), (0, IT.jsx)("th", {
                    className: "LBTableValueTH LBTableTH",
                    children: OT.label.toUpperCase()
                  })]
                })
              }), (0, IT.jsx)("tbody", {
                children: CT.map((TT => (0, IT.jsxs)("tr", {
                  className: "LBTableTR " + (TT.name === KT ? "LBTableTRYou" : ""),
                  children: [(0, IT.jsx)("td", {
                    className: "LBTableTD",
                    children: `#${TT.place}`
                  }), (0, IT.jsx)("td", {
                    className: "LBTableTD",
                    children: (0, IT.jsx)(rT.b, {
                      text: [{
                        entityName: TT.name
                      }]
                    })
                  }), (0, IT.jsx)("td", {
                    className: "LBTableTD",
                    children: TT.stat
                  })]
                }, TT.name)))
              })]
            })
          }) : (0, IT.jsx)("div", {
            className: "LBIncreaseWrapper",
            onClick: () => {
              GT(null)
            },
            children: (0, IT.jsxs)("div", {
              className: "LBIncreaseDiv",
              children: [(0, IT.jsx)("div", {
                className: "TriangleUp"
              }), (0, IT.jsx)("div", {
                className: "LBIncreaseText",
                children: `${eT} Place${eT>1?"s":""}`
              })]
            })
          })
        })]
      }) : (0, IT.jsxs)("div", {
        className: "LBLoginDiv",
        children: [(0, IT.jsx)("div", {
          className: "LBLoginInfo",
          children: "Login to see the leaderboard"
        }), (0, IT.jsx)("div", {
          className: "LBLoginInfo",
          children: "You can login from the top left homescreen"
        })]
      })
    }
    var oT = cT(3041),
      HT = cT(118),
      eT = cT(47),
      GT = cT(3356);
    const VT = (0, MT.memo)((function(TT) {
      let {
        show: kT,
        onClose: cT
      } = TT;
      (0, oT.d)();
      const lT = (0, fT.f)("_tasks"),
        KT = (0, fT.f)("_availableLeaderboards"),
        [xT, AT] = (0, MT.useState)({});
      lT && Object.keys(lT).length > 0 && 0 === Object.keys(xT).length && AT(lT);
      const [CT] = (0, MT.useState)({
        tasks: {},
        leaderboard: {}
      }), jT = {
        tasks: {
          Title: "Tasks",
          getIsDefined: () => !!lT && Object.keys(lT).length > 0,
          content: (0, IT.jsx)(NT, {
            tasks: lT,
            lastDisplayedTasks: xT
          })
        },
        leaderboard: {
          Title: "Leaderboard",
          getIsDefined: () => (null === KT || void 0 === KT ? void 0 : KT.length) > 0,
          content: (0, IT.jsx)(JT, {
            lbStats: KT,
            storedState: CT.leaderboard
          })
        }
      };

      function vT() {
        for (const TT in jT)
          if (jT[TT].getIsDefined()) return TT;
        return null
      }
      const [tT, hT] = (0, MT.useState)(vT());

      function QT() {
        AT({
          ...lT
        }), cT()
      }(0, MT.useEffect)((() => {
        tT || hT(vT())
      }), [vT()]), (0, yT.e)(!0, tT && kT), (0, MT.useEffect)((() => {
        kT && !tT && (console.log("CLOSE"), QT())
      }), [kT, tT]);
      const [ST, DT] = (0, MT.useState)(!1);
      return (0, MT.useEffect)((() => {
        kT && tT && !ST && DT(!0)
      }), [kT, ST, tT]), (0, MT.useEffect)((() => {
        !ST && lT && "tasks" !== tT && hT("tasks")
      }), [ST, lT, tT]), (0, IT.jsx)(IT.Fragment, {
        children: tT ? (0, IT.jsx)(GT.e, {
          className: "RetentionFeaturesWrapper",
          show: kT,
          children: (0, IT.jsxs)(OT.c, {
            close: QT,
            escDoesExit: !1,
            closeClassnameList: ["VerticalMenuScreenDiv"],
            togglePointerLock: !1,
            globallyUniqueKey: "RetentionFeaturesComponent",
            children: [(0, IT.jsxs)("div", {
              className: "VerticalMenuScreenDiv",
              children: [(0, IT.jsx)(ZT, {}), (0, IT.jsxs)("div", {
                className: "MenuDiv",
                children: [(0, IT.jsx)(ET, {
                  setCategory: hT,
                  menuCategories: jT,
                  selectedCat: tT
                }), (0, IT.jsx)("div", {
                  className: "MenuCategoryContainer",
                  children: jT[tT].content
                })]
              })]
            }), (0, IT.jsx)("div", {
              className: "BottomScreenMenuWrapper",
              children: HT.featureFlags.useDiscord && (0, IT.jsx)("div", {
                className: "DiscordMenuDivDiv",
                children: (0, IT.jsx)("div", {
                  className: "DiscordMenuDiv",
                  children: (0, IT.jsx)(uT, {
                    tasks: lT
                  })
                })
              })
            })]
          })
        }) : null
      })
    }));

    function ET(TT) {
      let {
        selectedCat: kT,
        setCategory: cT,
        menuCategories: lT
      } = TT;
      return (0, IT.jsx)("div", {
        className: "MenuHeader",
        children: Object.keys(lT).map((TT => lT[TT].getIsDefined() ? (0, IT.jsx)("div", {
          className: "MenuHeaderCategory " + (TT === kT ? "SelectedHeaderCat" : "UnselectedHeaderCat"),
          onClick: () => {
            cT(TT)
          },
          children: lT[TT].Title
        }, TT) : null))
      })
    }

    function ZT() {
      const TT = (0, fT.f)("currencyAmounts");
      return (0, IT.jsx)("div", {
        className: "TopScreenCurrencies",
        children: Object.keys(null !== TT && void 0 !== TT ? TT : {}).map((kT => {
          const cT = TT[kT];
          return cT.hidden ? null : (0, IT.jsxs)("div", {
            className: "TopScreenCurrencyDiv",
            children: [(0, IT.jsx)(hT.e, {
              name: cT.icon,
              className: "3x UiCurrencyIcon",
              style: {
                color: cT.iconColour
              }
            }), (0, IT.jsx)("div", {
              className: "UiCurrencyAmount",
              children: cT.amount
            })]
          }, kT)
        }))
      })
    }

    function uT(TT) {
      let {
        tasks: kT
      } = TT;
      return (0, IT.jsxs)("a", {
        className: "MenuDiscordButtonWrapper",
        href: "https://discord.gg/playbloxd",
        target: "_blank",
        rel: "noreferrer",
        children: [(0, IT.jsx)(hT.e, {
          name: "discord",
          kit: "brands",
          className: "DiscordButton",
          onClick: () => {
            eT.e.setItem("DiscordPressed", !0), xT.gameBridge.send("setServerCookie", {
              key: "joinDiscord",
              value: "true"
            }), "joinDiscord" in kT && vT.k.nt("clientTaskProgress", {
              taskId: "joinDiscord",
              progress: 1
            })
          }
        }), (0, IT.jsx)(KT.b, {})]
      })
    }
    var XT = cT(31),
      dT = cT(1654),
      LT = cT(36355),
      RT = cT(9250),
      gT = cT(4611),
      UT = cT(184),
      YT = cT(1214),
      BT = cT(1379),
      WT = cT(2665),
      nT = cT(1195),
      pT = cT(1663),
      iT = cT(2427),
      qT = cT(2413),
      sT = cT(1875),
      Tk = cT(2065),
      kk = cT(1274),
      ck = cT(1497),
      lk = cT(36523),
      Mk = cT(36528),
      Kk = cT(36531),
      Ok = cT(36533),
      yk = cT(36541),
      fk = cT(2724);

    function xk(TT) {
      let {
        playersHere: kT,
        exclude: cT,
        uF: lT
      } = TT;
      const {
        t: KT
      } = (0, nT.B)(), OT = (0, fk.n)(fk.k), [yT, fT] = (0, MT.useState)([]), xT = [], AT = (TT, kT) => {
        const lT = [...cT, ...xT.map((TT => TT.player.name))];
        xT.length < 3 && !(0, Mk.j)(lT, TT.name) && xT.push({
          player: TT,
          status: kT
        })
      };
      for (const MT of kT) AT((0, yk.g)(MT.name, MT.cosmetics, MT.ranks), KT("worldSocial:inThisWorld"));
      if ("loaded" === OT.state.status)
        for (const MT of OT.state.recentPlayers) MT.preview.name && !MT.preview.isError && AT({
          ...MT.preview,
          location: {
            status: "offline"
          }
        }, KT("worldSocial:playedWithYou"));
      const CT = TT => {
        fT((kT => [...kT, TT])), lT(TT).finally((() => {
          fT((kT => kT.filter((kT => kT !== TT))))
        }))
      };
      return (0, IT.jsx)(IT.Fragment, {
        children: xT.map(((TT, kT) => {
          let {
            player: cT,
            status: lT
          } = TT;
          return (0, IT.jsx)(yk.c, {
            zIndex: xT.length - kT,
            player: cT,
            status: lT,
            onSendFriendRequest: () => {
              CT(cT.name)
            },
            actions: (0, IT.jsx)(BT.c, {
              tooltipInner: (0, IT.jsx)(IT.Fragment, {
                children: KT("recentPlayers:addFriend")
              }),
              delayShow: 0,
              hoverOnly: !0,
              children: (0, IT.jsx)(jT.e, {
                className: "FriendRequestButton",
                disabled: yT.includes(cT.name),
                ariaLabel: `${KT("recentPlayers:addFriend")} ${cT.name}`,
                onClick: () => {
                  CT(cT.name)
                },
                children: (0, IT.jsx)(hT.e, {
                  name: "user-plus"
                })
              })
            })
          }, `suggestion:${cT.name}`)
        }))
      })
    }
    var Ik = cT(36559),
      Ak = cT(36567),
      Ck = cT(1226),
      jk = cT(1514),
      vk = cT(4602),
      tk = cT(314),
      hk = cT(4585);
    const Nk = ["auto", "auto_existing"];

    function Qk(TT) {
      return Nk.includes(TT)
    }

    function Sk(TT, kT) {
      const cT = (0, Ck.Bb)(TT);
      return null !== kT && (0, Ck.Bb)(kT) === cT || (0, hk.d)().some((TT => (0, Ck.Bb)(TT.name) === cT))
    }
    const Dk = new Set;

    function ak(TT) {
      return `worldSocialSeen:${TT}`
    }

    function Fk(TT) {
      return !TT || Dk.has(TT) || !0 === eT.e.getItem(ak(TT))
    }

    function rk(TT) {
      TT && !Dk.has(TT) && (Dk.add(TT), eT.e.setItem(ak(TT), !0))
    }
    var Pk = cT(2477),
      wk = cT(2485);

    function mk(TT) {
      let {
        show: kT,
        onClose: cT,
        opener: lT
      } = TT;
      const {
        lobbyName: KT,
        shownLobbyName: yT
      } = (0, mT.h)("connectedGame");
      return (0, MT.useEffect)((() => {
        kT && (0, ck.reportAnalyticsClick)({
          id: "world_social.open",
          value: lT
        })
      }), [kT]), (0, IT.jsx)(OT.c, {
        show: kT && null !== KT,
        close: cT,
        togglePointerLock: !1,
        className: "WorldSocialBackgroundScreen",
        globallyUniqueKey: "WorldSocialPopup",
        doGameplayStartStopOnShow: !0,
        ignorePressesAsShown: "icon" !== lT,
        children: kT && null !== KT && (0, IT.jsx)(bk, {
          lobbyName: KT,
          worldCode: null !== yT && void 0 !== yT ? yT : KT,
          onClose: cT
        }, KT)
      })
    }

    function bk(TT) {
      var kT;
      let {
        lobbyName: cT,
        worldCode: lT,
        onClose: KT
      } = TT;
      const {
        t: OT
      } = (0, nT.B)(), yT = (0, MT.useRef)(null), {
        settings: fT,
        loading: xT,
        answered: AT,
        change: CT,
        retry: vT
      } = (0, lk.i)(cT), tT = (0, pT.n)(), NT = (0, mT.h)("players"), QT = (0, mT.h)("hiddenPlayerNames"), [ST, DT] = (0, MT.useState)([]), [aT, rT] = (0, MT.useState)([]), [PT, wT] = (0, MT.useState)(!1), zT = (0, Pk.b)(), JT = (0, MT.useMemo)((() => {
        var TT, kT;
        const cT = null === NT.localId ? null : null !== (TT = null === (kT = NT.byId[NT.localId]) || void 0 === kT ? void 0 : kT.name) && void 0 !== TT ? TT : null;
        return NT.ids.flatMap((TT => {
          const kT = NT.byId[TT];
          return null !== kT && void 0 !== kT && kT.name && kT.name !== cT ? [{
            name: kT.name,
            cosmetics: kT.cosmetics,
            ranks: kT.ranks
          }] : []
        }))
      }), [NT]), oT = (0, MT.useMemo)((() => (0, Mk.i)(tT.friends, cT, JT.map((TT => TT.name)))), [tT.friends, cT, JT]), eT = HT.featureFlags.canSeeRealPlayerNames ? JT.filter((TT => null === (0, kk.e)(TT.name, QT))) : [], GT = null !== fT && void 0 !== fT && fT.canManage ? fT : null, VT = null !== GT, ET = null !== (kT = null === fT || void 0 === fT ? void 0 : fT.visibility) && void 0 !== kT ? kT : null, ZT = "whitelist" === (null === GT || void 0 === GT ? void 0 : GT.visibility), uT = "private" === ET || "whitelist" === ET && !VT, {
        userContext: XT
      } = (0, FT.b)();
      (0, MT.useEffect)((() => {
        VT && Sk(cT, XT.getPersonalWorldLobbyName()) && rk(XT.whamm)
      }), [VT, cT, XT]);
      const dT = uT ? OT("whitelist" === ET ? "socialBar:inviteWorldManagersOnly" : VT ? "worldSocial:privateLinkRow" : "socialBar:inviteWorldPrivate") : null,
        RT = null === dT;
      (0, MT.useEffect)((() => uT ? void 0 : sT.g.quietFriendAdded()), [uT]), (0, MT.useEffect)((() => sT.g.quietFriendRequests()), []);
      const fk = (0, MT.useRef)(!1);
      (0, MT.useEffect)((() => {
        const TT = yT.current,
          kT = !fk.current;
        fk.current = !0;
        const cT = null === document.activeElement || document.activeElement === document.body;
        null !== TT && void 0 !== TT && TT.contains(document.activeElement) || !kT && !cT || (0, LT.f)() || null === TT || void 0 === TT || TT.focus({
          preventScroll: !0
        })
      }), [RT]), (0, MT.useEffect)((() => {
        const TT = TT => {
          "Escape" !== TT.key || null !== document.activeElement && document.activeElement !== document.body || KT()
        };
        return document.addEventListener("keydown", TT), () => {
          document.removeEventListener("keydown", TT)
        }
      }), [KT]);
      const Ck = null === fT && !AT,
        jk = (xT || tT.loading) && 0 === tT.friends.length,
        vk = tT.friends.flatMap((TT => TT.name ? [TT.name] : [])),
        tk = ST.filter((TT => !(0, Mk.j)(vk, TT))),
        hk = oT.length + 3,
        Nk = tk.length + hk,
        Qk = PT ? tT.requests : tT.requests.slice(0, 1),
        Dk = async function(TT) {
          let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (const cT of (0, Mk.n)(TT, gT.D)) {
            if (!await CT({
                whitelistAdd: cT
              }, (TT => (0, Mk.t)(TT, cT, !0)), {
                quiet: kT
              })) return !1
          }
          return !0
        }, ak = TT => {
          if (ZT && GT) return {
            on: (0, Mk.j)(GT.whitelist, TT),
            onChange: kT => {
              (0, ck.reportAnalyticsClick)({
                id: "world_social.whitelist_toggle",
                value: kT ? "on" : "off"
              }), CT(kT ? {
                whitelistAdd: [TT]
              } : {
                whitelistRemove: TT
              }, (cT => (0, Mk.t)(cT, [TT], kT)))
            }
          }
        }, Fk = async (TT, kT) => {
          (0, ck.reportAnalyticsClick)({
            id: "world_social.add_friend",
            value: kT
          });
          const cT = await (0, qT.i)(TT, "world_social");
          return (0, qT.d)(cT, TT, {
            announceSent: !1
          }), "failed" !== cT.kind && ("sent" === cT.kind && DT((kT => (0, Mk.j)(kT, TT) ? kT : [...kT, TT])), ZT && await Dk([TT]), !0)
        };
      return (0, IT.jsxs)("div", {
        ref: yT,
        className: "WorldSocialPopup AnimFadeInScaleUp",
        tabIndex: -1,
        onKeyDown: TT => {
          TT.target === TT.currentTarget && " " === TT.key && TT.preventDefault()
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "WorldSocialTitle",
        children: [(0, IT.jsxs)("div", {
          className: "WorldSocialHeader",
          children: [(0, IT.jsx)("h2", {
            id: "WorldSocialTitle",
            className: "WorldSocialTitle SmallTextBold",
            children: OT("worldSocial:title")
          }), (0, IT.jsx)(jT.l, {
            className: "WorldSocialClose",
            onClick: KT
          })]
        }), Ck && (0, IT.jsx)("div", {
          className: "WorldSocialLoading",
          children: (0, IT.jsx)(bT.d, {})
        }), !Ck && (0, IT.jsxs)(IT.Fragment, {
          children: [(0, IT.jsx)(Kk.d, {
            worldCode: lT,
            message: dT
          }), null === fT && !xT && (0, IT.jsx)("button", {
            type: "button",
            className: "WorldSocialLoadFailed",
            onClick: vT,
            children: OT("worldSocial:loadFailed")
          }), VT && null !== ET && (0, IT.jsx)(Ok.b, {
            visibility: ET,
            onPick: TT => {
              (async TT => {
                if (TT === ET) return;
                (0, ck.reportAnalyticsClick)({
                  id: "world_social.set_mode",
                  value: TT
                });
                const kT = [...(0, Ak.d)(cT), ...aT],
                  lT = "whitelist" === TT && fT ? (0, Mk.e)(oT, kT, fT.whitelist) : [];
                await CT({
                  setVisibility: TT
                }, (kT => ({
                  ...kT,
                  visibility: TT
                }))) && await Dk(lT)
              })(TT)
            }
          }), tT.requests.length > 0 && (0, IT.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, IT.jsx)(WT.c, {
              label: (0, IT.jsxs)(IT.Fragment, {
                children: [(0, IT.jsx)(hT.e, {
                  name: Tk.h
                }), " ", OT("socialBar:requests")]
              }),
              meta: (0, IT.jsxs)(IT.Fragment, {
                children: [tT.requests.length, tT.requests.length === YT.n && (0, IT.jsx)("span", {
                  className: "SocialSectionTitleLimit",
                  children: OT("socialBar:limitReached")
                }), !PT && tT.requests.length > 1 && (0, IT.jsx)("button", {
                  type: "button",
                  className: "WorldSocialMoreRequests",
                  onClick: () => {
                    wT(!0)
                  },
                  children: OT("worldSocial:moreRequests", {
                    count: tT.requests.length - 1
                  })
                })]
              })
            }), (0, IT.jsx)("div", {
              className: "PlayerRows",
              children: Qk.map(((TT, kT) => (0, IT.jsx)(yk.c, {
                zIndex: Qk.length - kT,
                player: TT,
                actions: (0, IT.jsxs)(IT.Fragment, {
                  children: [(0, IT.jsx)(BT.c, {
                    tooltipInner: (0, IT.jsx)(IT.Fragment, {
                      children: OT("general:accept")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, IT.jsx)(jT.e, {
                      className: "FriendRequestButton",
                      ariaLabel: `${OT("general:accept")} ${TT.name}`,
                      analyticsClick: {
                        id: "social.accept_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, qT.g)(TT.name, !0, {
                          source: "world_social"
                        })
                      },
                      children: (0, IT.jsx)(hT.e, {
                        name: "check"
                      })
                    })
                  }), (0, IT.jsx)(BT.c, {
                    tooltipInner: (0, IT.jsx)(IT.Fragment, {
                      children: OT("general:decline")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, IT.jsx)(jT.i, {
                      className: "FriendRequestButton",
                      ariaLabel: `${OT("general:decline")} ${TT.name}`,
                      analyticsClick: {
                        id: "social.decline_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, qT.g)(TT.name, !1, {
                          source: "world_social"
                        })
                      },
                      children: (0, IT.jsx)(hT.e, {
                        name: "xmark"
                      })
                    })
                  })]
                })
              }, `incoming:${TT.name}`)))
            })]
          }), (0, IT.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, IT.jsx)(WT.c, {
              label: (0, IT.jsxs)(IT.Fragment, {
                children: [(0, IT.jsx)(hT.e, {
                  name: Tk.e
                }), " ", OT("socialBar:friends")]
              }),
              meta: tT.loaded && !uT ? tT.friends.length : void 0
            }), (0, IT.jsx)(Ik.d, {
              label: OT("socialBar:sendRequest"),
              icon: "user-plus",
              placeholder: OT("worldSocial:addFriendPlaceholder"),
              onSubmit: async TT => await Fk(TT, "field") ? {
                ok: !0
              } : {
                ok: !1,
                error: null
              }
            }), jk && (0, IT.jsx)("div", {
              className: "WorldSocialLoading",
              children: (0, IT.jsx)(bT.d, {})
            }), !jk && (0, IT.jsxs)(IT.Fragment, {
              children: [(0, IT.jsxs)("div", {
                className: "PlayerRows",
                children: [tk.map(((TT, kT) => (0, IT.jsx)(yk.c, {
                  zIndex: Nk - kT,
                  player: (0, yk.g)(TT, null),
                  status: OT("worldSocial:requestSent"),
                  UA: ak(TT)
                }, `request:${TT}`))), !uT && oT.map(((TT, kT) => (0, IT.jsx)(yk.b, {
                  zIndex: hk - kT,
                  row: TT,
                  UA: ak(TT.friend.name),
                  canInvite: (0, Mk.d)(fT) && "here" !== TT.place,
                  invited: aT.includes(TT.friend.name),
                  onInvite: () => {
                    (async TT => {
                      (0, ck.reportAnalyticsClick)({
                        id: "world_social.invite",
                        value: "friend"
                      });
                      const kT = () => {
                        rT((kT => kT.filter((kT => kT !== TT))))
                      };
                      rT((kT => [...kT, TT]));
                      const lT = (0, Mk.q)(fT, TT);
                      if ("none" !== lT) {
                        const cT = Dk([TT], "quiet" === lT);
                        if ("required" === lT && !await cT) return void kT()
                      }
                      await (0, iT.i)(TT, "game", {
                        announceSent: !1,
                        source: "world_social"
                      }) ? ((0, Ak.f)(cT, TT), setTimeout(kT, UT.m)) : kT()
                    })(TT.friend.name)
                  }
                }, TT.friend.name))), tT.loaded && 0 === tT.friends.length && (0, IT.jsx)(xk, {
                  playersHere: eT,
                  exclude: ST,
                  uF: TT => Fk(TT, "suggestion")
                })]
              }), ZT && tT.loaded && 0 === tT.friends.length && 0 === tk.length && (0, IT.jsx)("div", {
                className: "WorldSocialEmpty",
                children: OT("worldSocial:whitelistNoFriends")
              })]
            })]
          })]
        }), zT && (0, IT.jsxs)(jT.P, {
          className: "WorldSocialManageLobby SmallTextLight",
          onClick: () => {
            (0, wk.g)({
              page: "players",
              source: "invite_popup"
            }), KT()
          },
          children: [(0, IT.jsx)(hT.e, {
            name: "users-gear"
          }), " ", OT("lobbyManageEntry:manageLobby")]
        })]
      })
    }
    var zk = cT(2512),
      Jk = cT(2469);

    function Hk(TT) {
      let {
        show: kT,
        onClose: cT,
        option: lT
      } = TT;
      const KT = (0, mT.e)("connectedGame", (TT => (0, zk.b)(TT) ? TT.lobbyName : null));
      return function(TT) {
        const {
          gameEntrySource: kT,
          loadingOverlayVisible: cT
        } = (0, XT.n)(["gameEntrySource", "loadingOverlayVisible"]), {
          userContext: lT
        } = (0, FT.b)(), KT = (0, mT.h)("localPlayerAlive"), OT = (0, mT.e)("players", (TT => null !== TT.localId && void 0 !== TT.byId[TT.localId])), yT = (0, Jk.m)(), fT = (0, MT.useRef)(null), xT = (0, MT.useRef)(null), IT = "worldCreation" === kT, AT = lT.whamm, CT = lT.getPersonalWorldLobbyName();
        (0, MT.useEffect)((() => {
          var kT;
          null !== TT && (null === (kT = xT.current) || void 0 === kT ? void 0 : kT.lobbyName) !== TT && null !== Ek(TT, IT, AT, CT) && (xT.current = (0, lk.h)(TT))
        }), [IT, TT, AT, CT]), (0, MT.useEffect)((() => {
          if (null !== TT && (!cT && KT && OT)) return yT.whenShown((() => {
            var kT;
            const cT = fT.current === TT ? null : Ek(TT, IT, AT, CT);
            if (null === cT) return;
            const lT = (null === (kT = xT.current) || void 0 === kT ? void 0 : kT.lobbyName) === TT ? xT.current : (0, lk.h)(TT);
            xT.current = null, fT.current = TT,
              function(TT, kT, cT, lT) {
                const {
                  lobbyName: MT
                } = TT, KT = () => {
                  ! function(TT, kT) {
                    if (!Lk()) return void kT(!0);
                    const cT = performance.now() + Xk;
                    let lT = 0;
                    const MT = () => {
                      lT = Lk() ? 0 : lT + 1, lT >= 2 ? kT(!0) : !dk(TT) || performance.now() > cT ? kT(!1) : setTimeout(MT, uk)
                    };
                    setTimeout(MT, uk)
                  }(MT, (KT => {
                    lT();
                    const OT = "auto_existing" === kT && Fk(cT);
                    KT && dk(MT) && !Gk(MT) && !OT && (Zk(TT) ? Vk(MT) : (Vk(MT), rk(cT), function(TT) {
                      const kT = tk.d.world_social_popup_v1;
                      return (0, tk.m)("world_social_popup_v1"), (0, ck.reportAnalyticsClick)({
                        id: "world_social.auto_open",
                        value: `${kT}:${(0,vk.d)()}:${TT}`
                      }), (0, jk.flushClientAnalyticsEvents)(), "auto_open" === kT
                    }(kT) && ((0, lk.d)(TT), vT.k.nt("toggleMenu", `inviteLink|${kT}`), "inviteLink" !== XT.e.get("openInGameMenuName") && console.warn("World social popup: the auto-open asked for it, but it didn't open"))))
                  }))
                };
                if ("auto" === kT && !Zk(TT)) return void KT();
                TT.response.then((TT => {
                  if (!("error" in TT)) return TT.settings.canManage ? void KT() : (Vk(MT), void lT());
                  lT()
                }))
              }(lT, cT, AT, (() => {
                fT.current === TT && (fT.current = null)
              }))
          }))
        }), [yT, IT, cT, TT, KT, OT, AT, CT])
      }(KT), (0, MT.useEffect)((() => {
        kT && null !== KT && Vk(KT)
      }), [kT, KT]), null !== KT ? (0, IT.jsx)(mk, {
        show: kT,
        onClose: cT,
        opener: Qk(lT) ? lT : "icon"
      }) : (0, IT.jsx)(RT.b, {
        show: kT,
        onClose: cT
      })
    }
    const ek = new Set;

    function Gk(TT) {
      return ek.has(TT) || !!eT.g.getItem(`worldSocialShown:${TT}`)
    }

    function Vk(TT) {
      ek.add(TT), eT.g.setItem(`worldSocialShown:${TT}`, !0)
    }

    function Ek(TT, kT, cT, lT) {
      return Gk(TT) ? null : function(TT) {
        let {
          justMade: kT,
          playerId: cT,
          lobbyName: lT,
          personalWorld: MT
        } = TT;
        return kT ? "auto" : !Fk(cT) && Sk(lT, MT) ? "auto_existing" : null
      }({
        justMade: kT,
        playerId: cT,
        lobbyName: TT,
        personalWorld: lT
      })
    }

    function Zk(TT) {
      let {
        answer: kT
      } = TT;
      return null !== kT && "settings" in kT && !kT.settings.canManage
    }
    const uk = 500,
      Xk = 3e4;

    function dk(TT) {
      return "inGame" === XT.e.get("gameState") && xT.gameBridge.latest("connectedGame").lobbyName === TT
    }

    function Lk() {
      return (0, LT.f)() || XT.e.get("loadingOverlayVisible") || (0, dT.s)()
    }
    var Rk = cT(36571),
      gk = cT(3089),
      Uk = cT(2009),
      Yk = cT(3081);

    function Bk(TT, kT, cT) {
      return Yk.e.overridesTexture(TT) ? Yk.e.getTexture(TT, kT).url : cT
    }
    var Wk = cT(10147);
    const nk = (TT, kT) => {
        (0, MT.useEffect)((() => {
          setTimeout((() => {
            TT && TT.current && TT.current.focus()
          }), 1)
        }), [kT])
      },
      pk = (0, MT.memo)((function(TT) {
        let {
          isInputActive: kT,
          onClose: cT,
          onChange: lT,
          textAreaRef: MT,
          fontSize: KT,
          lineHeight: OT,
          currText: yT
        } = TT;
        return (0, IT.jsxs)("div", {
          className: "WriteOnBoardWrapper",
          children: [(0, IT.jsx)("img", {
            src: Bk("board_full", gk.h.BLOCK, Wk),
            alt: "Board",
            className: "WriteOnBoardImg"
          }), (0, IT.jsx)("textarea", {
            className: "WriteOnBoardTextArea",
            value: yT,
            ref: MT,
            style: {
              fontSize: `${KT}rem`,
              lineHeight: `${OT}rem`
            },
            onKeyDown: TT => {
              var kT;
              "Escape" !== TT.key && (TT.stopPropagation(), "Tab" === TT.key && function(TT) {
                TT.preventDefault();
                const kT = TT.target,
                  {
                    value: cT
                  } = kT;
                let lT = kT.selectionStart,
                  MT = kT.selectionEnd,
                  KT = cT.slice(lT, MT);
                if (!KT.includes("\n") && !TT.shiftKey) return void document.execCommand("insertText", !1, "\t");
                for (; lT > 0 && "\n" !== cT[lT - 1];) lT--;
                const OT = "\n" === cT[MT - 1];
                OT && MT--;
                KT = cT.slice(lT, MT);
                const yT = KT.split("\n").map((kT => TT.shiftKey ? kT.replace(/^\t/, "") : "\t" + kT)).join("\n");
                if (TT.shiftKey && cT.slice(lT, MT) === yT) return;
                let {
                  selectionStart: fT
                } = kT;
                kT.setSelectionRange(lT, MT), fT > lT && (!TT.shiftKey || "\t" === KT[0]) && (fT += TT.shiftKey ? -1 : 1);
                MT = lT + yT.length + (OT ? 1 : 0), document.execCommand("insertText", !1, yT), kT.setSelectionRange(fT, MT)
              }(TT), /^F\d+$/i.test(TT.code) && null !== (kT = Uk.y.OpenCodeEditor) && void 0 !== kT && kT.includes(TT.code) && cT())
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: lT
          })]
        })
      }));

    function ik(TT) {
      return 1.3 * TT
    }
    var qk = cT(1701);
    const sk = (0, MT.memo)((function(TT) {
        let {
          show: kT,
          onOpen: cT,
          onClose: lT
        } = TT;
        const [KT, yT] = (0, MT.useState)(null), [fT, AT] = (0, MT.useState)(""), [CT, vT] = (0, MT.useState)(0), [tT, hT] = (0, MT.useState)(null), [NT, QT] = (0, MT.useState)({
          text: "",
          textSize: 0
        }), ST = (TT, kT) => tT ? (0, Rk.k)(TT, kT, tT.width, tT.height) : (0, Rk.e)(TT, kT), DT = TT => {
          AT(ST(fT, TT)), vT(TT), eT.e.setItem("lastBoardTextSize", TT)
        }, aT = () => {
          lT(), tT && fT === NT.text && CT === NT.textSize || xT.gameBridge.send("writeOnBoard", {
            pos: KT,
            text: fT,
            textSize: CT
          })
        };
        (0, mT.b)("boardEditRequested", (TT => {
          var MT, KT;
          if (!HT.featureFlags.canSeePlayerWrittenText) return;
          if (null === TT) return yT(null), void(kT && lT());
          const {
            pos: OT,
            noticeboardSpan: fT,
            text: xT
          } = TT;
          yT(OT), hT(fT), AT(xT);
          const IT = null !== (MT = null !== (KT = TT.textSize) && void 0 !== KT ? KT : eT.e.getItem("lastBoardTextSize")) && void 0 !== MT ? MT : 0;
          vT(IT), QT({
            text: xT,
            textSize: IT
          }), eT.e.setItem("lastBoardTextSize", IT), cT()
        }));
        const FT = (0, MT.useRef)(null);
        nk(FT, kT), (0, qk.m)(FT, {
          kind: "sign",
          submit: aT
        });
        const rT = function(TT, kT) {
            const cT = Rk.c[TT];
            if (!kT) return cT.uiFontSize;
            const {
              numLines: lT,
              charsPerLine: MT
            } = (0, Rk.q)(kT.width, kT.height, TT);
            return cT.uiFontSize * Math.min(cT.charsPerLine / MT, cT.numLines / lT)
          }(CT, tT),
          PT = ik(rT);
        return (0, IT.jsxs)(OT.c, {
          className: "WriteOnBoardBg",
          close: aT,
          escDoesExit: !0,
          show: kT,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, IT.jsx)(pk, {
            isInputActive: () => kT,
            onClose: aT,
            onChange: TT => {
              AT(ST(TT.target.value, CT))
            },
            textAreaRef: FT,
            fontSize: rT,
            lineHeight: PT,
            currText: fT
          }), (0, IT.jsx)("div", {
            className: "WriteOnBoardTextSizeHeader SmallTextBold",
            children: "Text Size"
          }), (0, IT.jsxs)("div", {
            className: "WriteOnBoardTextSizeButtons",
            children: [(0, IT.jsx)(jT.e, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                DT(0)
              },
              disabled: 0 === CT,
              children: "Small"
            }), (0, IT.jsx)(jT.e, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                DT(1)
              },
              disabled: 1 === CT,
              children: "Medium"
            }), (0, IT.jsx)(jT.e, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                DT(2)
              },
              disabled: 2 === CT,
              children: "Large"
            })]
          })]
        })
      })),
      Tc = (0, MT.memo)((function(TT) {
        let {
          show: kT,
          onOpen: cT,
          onClose: lT
        } = TT;
        const [KT, yT] = (0, MT.useState)(""), fT = () => {
          lT(), xT.gameBridge.send("writeNameTag", KT)
        };
        (0, PT.g)("EditNameTag", (TT => {
          HT.featureFlags.canSeePlayerWrittenText && null !== TT && (yT(TT), cT())
        }));
        const AT = (0, MT.useRef)(null);
        nk(AT, kT), (0, qk.m)(AT, {
          kind: "nameTag",
          submit: fT
        });
        const CT = Rk.A.nameTag.uiFontSize,
          vT = ik(CT);
        return (0, IT.jsxs)(OT.c, {
          className: "WriteOnBoardBg",
          close: fT,
          escDoesExit: !0,
          show: kT,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, IT.jsx)("div", {
            className: "NameTagTrim",
            children: (0, IT.jsx)(pk, {
              isInputActive: () => kT,
              onClose: fT,
              onChange: TT => {
                const kT = TT.target.value.replaceAll("\n", "");
                yT((0, Rk.l)(kT, "nameTag"))
              },
              textAreaRef: AT,
              fontSize: CT,
              lineHeight: vT,
              currText: KT
            })
          }), (0, IT.jsx)(jT.e, {
            onClick: fT,
            className: "WriteOnNameTagCloseButton",
            children: "Finish"
          })]
        })
      }));
    var kc = cT(18282);
    const cc = (0, MT.memo)((function(TT) {
      let {
        show: kT,
        onOpen: cT,
        onClose: lT
      } = TT;
      const [KT, yT] = (0, MT.useState)(""), [fT, AT] = (0, MT.useState)(0), [CT, vT] = (0, MT.useState)(!1), [tT, hT] = (0, MT.useState)(["", "", "", "", "", "", "", "", "", ""]), [NT, QT] = (0, MT.useState)("Title"), [ST, DT] = (0, MT.useState)(!0), [aT, FT] = (0, MT.useState)(!1);
      (0, PT.g)("EditBook", (TT => {
        let {
          pages: kT,
          title: lT,
          isPublished: MT
        } = TT;
        var KT;
        HT.featureFlags.canSeePlayerWrittenText && (null !== kT ? (hT(kT), yT(null !== (KT = kT[0]) && void 0 !== KT ? KT : ""), QT(lT), AT(0), vT(!1), DT(!MT), FT(!1), cT()) : hT(["", "", "", "", "", "", "", "", "", ""]))
      }));
      const rT = (0, MT.useRef)(null),
        wT = (0, MT.useRef)(null);
      nk(rT, kT), (0, qk.m)(rT, {
        kind: "book"
      }), (0, qk.m)(wT, {
        kind: "KI"
      });
      const mT = Rk.A.book.uiFontSize,
        bT = ik(mT),
        zT = () => {
          (ST || aT) && xT.gameBridge.send("writeBook", {
            pages: [...tT],
            title: NT,
            published: !ST && aT
          })
        },
        JT = TT => {
          CT && (tT[fT] = KT, vT(!1)), yT(tT[TT]), AT(TT)
        };
      return (0, IT.jsxs)(OT.c, {
        className: "WriteOnBoardBg",
        close: () => {
          lT(), tT[fT] = KT, zT()
        },
        escDoesExit: !0,
        show: kT,
        togglePointerLock: !1,
        globallyUniqueKey: "WriteOnBookComp",
        children: [(0, IT.jsxs)("div", {
          className: "WriteOnBookWrapper",
          children: [(0, IT.jsx)("textarea", {
            className: "BookTitleTextArea SmallTextLight",
            value: NT,
            ref: wT,
            style: {
              fontSize: "2.5rem",
              lineHeight: `${bT}rem`
            },
            onKeyDown: TT => {
              ST && TT.stopPropagation()
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: TT => {
              let kT = TT.target.value;
              kT = (0, Rk.l)(kT, "KI"), QT(kT)
            },
            readOnly: !ST
          }), (0, IT.jsx)("img", {
            src: Bk("book_page", gk.h.ITEM, kc),
            alt: "book_page",
            className: "WriteOnBookPageImg"
          }), (0, IT.jsx)("div", {
            className: "BookTextAreaPadding",
            children: (0, IT.jsx)("textarea", {
              className: "WriteOnBookPageTextArea",
              value: KT,
              ref: rT,
              style: {
                fontSize: `${mT}rem`,
                lineHeight: `${bT}rem`
              },
              onKeyDown: TT => {
                ST && TT.stopPropagation()
              },
              spellCheck: "false",
              autoComplete: "off",
              onChange: TT => {
                const kT = TT.target.value;
                yT((0, Rk.l)(kT, "book")), vT(!0)
              },
              readOnly: !ST
            })
          })]
        }), (0, IT.jsxs)("div", {
          className: "BookNavigationWrapper",
          children: [(0, IT.jsx)(jT.e, {
            disabled: 0 === fT,
            onClick: () => {
              JT(fT - 1)
            },
            className: "BookNavButton",
            children: "<"
          }), (0, IT.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, IT.jsx)(jT.e, {
            disabled: 9 === fT,
            onClick: () => {
              JT(fT + 1)
            },
            className: "BookNavButton",
            children: ">"
          }), (0, IT.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, IT.jsx)(jT.e, {
            onClick: () => {
              DT(!ST), FT(!0)
            },
            className: "BookNavButton",
            children: ST ? "Publish" : "Edit"
          })]
        })]
      })
    }));
    var lc = cT(36432),
      Mc = cT(8716),
      Kc = cT(1409),
      Oc = cT(1943);

    function yc(TT) {
      let {
        show: kT,
        buttons: cT
      } = TT;
      const {
        t: lT
      } = (0, nT.B)(), KT = (0, MT.useRef)(null);
      return (0, MT.useEffect)((() => {
        var TT, cT;
        const lT = kT ? (0, lc.B)() : null;
        if (!lT || !(0, Kc.h)()) return;
        const MT = (0, lc.l)().findIndex((TT => TT.id === lT));
        (0, Mc.q)(null !== (TT = null === (cT = KT.current) || void 0 === cT ? void 0 : cT.children[MT]) && void 0 !== TT ? TT : null)
      }), [kT]), 0 === cT.length ? null : (0, IT.jsx)("div", {
        ref: KT,
        className: "ClientGameInventoryButtons",
        onPointerDown: TT => {
          TT.stopPropagation()
        },
        onPointerUp: TT => {
          TT.stopPropagation()
        },
        children: cT.map((TT => {
          const kT = lT(TT.labelKey);
          return (0, IT.jsxs)(jT.m, {
            className: TT.className,
            disabled: TT.disabled,
            onClick: () => {
              (0, lc.s)(TT)
            },
            ariaLabel: TT.iconOnly ? kT : void 0,
            title: TT.iconOnly ? kT : void 0,
            children: [TT.icon && (0, IT.jsxs)("div", {
              className: "ClientGameInventoryButtonIcon",
              children: ["item" === TT.icon.kind && (0, IT.jsx)(Oc.d, {
                itemName: TT.icon.name,
                amount: 0
              }), "image" === TT.icon.kind && (0, IT.jsx)("img", {
                src: TT.icon.src,
                alt: "",
                draggable: !1
              }), "icon" === TT.icon.kind && (0, IT.jsx)(hT.e, {
                name: TT.icon.name
              })]
            }), !TT.iconOnly && kT]
          }, TT.id)
        }))
      })
    }
    var fc = cT(36573),
      xc = cT(2761),
      Ic = cT(9375),
      Ac = cT(36346),
      Cc = cT(36343);
    let jc = null;
    window.setShowInventoryAdsOverride = TT => {
      jc = TT
    };
    const vc = 24e4;
    var tc = cT(1947);

    function hc(TT) {
      var kT;
      let {
        draggedInfo: {
          name: cT,
          attributes: lT,
          amount: MT
        },
        toAddRef: KT
      } = TT;
      return (0, IT.jsx)("div", {
        className: "DraggedInvenItem",
        ref: KT,
        children: (0, IT.jsx)(Oc.d, {
          itemName: cT,
          amount: MT,
          enchantmentTier: null === lT || void 0 === lT || null === (kT = lT.customAttributes) || void 0 === kT ? void 0 : kT.enchantmentTier,
          bar: (0, tc.k)(lT)
        })
      })
    }

    function Nc(TT) {
      let {
        className: kT = "",
        displayInfo: cT,
        domRef: lT
      } = TT;
      return (0, IT.jsxs)("div", {
        className: `InvenHoveredItemInfo SmallTextBold ${kT}`,
        ref: lT,
        children: [(0, IT.jsx)(rT.b, {
          text: (0, wT.hb)(cT.name, {
            fontStyle: cT.fontStyle
          })
        }), (0, IT.jsx)("div", {
          className: "InvenHoveredItemInfoDescription",
          children: (0, IT.jsx)(rT.b, {
            text: cT.desc
          })
        })]
      })
    }

    function Qc(TT) {
      let {
        info: kT,
        draggedInfo: cT
      } = TT;
      const lT = (0, MT.useRef)(null);
      return (0, MT.useLayoutEffect)((() => {
        const TT = lT.current,
          {
            left: cT,
            top: MT
          } = function(TT, kT, cT, lT) {
            const MT = lT.left * cT.width / 100 + 4,
              KT = cT.width - lT.right * cT.width / 100 - 4 - kT.width,
              OT = lT.top * cT.height / 100 + 4,
              yT = cT.height - 4 - kT.height;
            return {
              left: Math.max(MT, Math.min(TT.x - kT.width / 2, KT)),
              top: Math.max(OT, Math.min(TT.y - 48 - kT.height, yT))
            }
          }({
            x: kT.initTouchX,
            y: kT.initTouchY
          }, {
            width: TT.offsetWidth,
            height: TT.offsetHeight
          }, {
            width: window.innerWidth,
            height: window.innerHeight
          }, XT.e.get("notchSize"));
        TT.style.left = `${cT}px`, TT.style.top = `${MT}px`
      }), [kT]), (0, IT.jsxs)("div", {
        className: "LongHoldSplitInfoUI SmallTextBold",
        ref: lT,
        children: [(0, IT.jsx)("div", {
          className: "LongHoldSplitInfoUIInner",
          style: {
            width: cT.amount / kT.maxAmount * 100 + "%"
          }
        }), (0, IT.jsxs)("div", {
          className: "LongHoldSplitInfoUIText",
          children: [cT.amount, "/", kT.maxAmount]
        })]
      })
    }
    var Sc = cT(1046),
      Dc = cT.n(Sc),
      ac = cT(218);
    const Fc = (0, MT.memo)((function(TT) {
      let {
        show: kT,
        onOpen: cT,
        onClose: lT
      } = TT;
      const KT = (0, MT.useRef)({
          pos: null
        }),
        [yT, fT] = (0, MT.useState)([0, 0, 0, 0]),
        {
          userContext: AT
        } = (0, FT.b)();
      (0, mT.b)("ironChestOpenRequested", (TT => {
        let {
          pos: kT,
          ownerDbId: lT,
          cachedPasskey: MT
        } = TT;
        if (KT.current.pos = kT, lT !== AT.whamm) return null !== MT ? (fT(MT), void CT(MT)) : void cT();
        CT(yT)
      })), (0, mT.b)("localEffectUpdated", (TT => {
        "Thief" === TT && lT()
      }));
      const CT = TT => {
        const {
          pos: kT
        } = KT.current;
        xT.gameBridge.send("openIronChest", {
          pos: kT,
          CO: TT
        })
      };
      return (0, IT.jsx)(OT.c, {
        className: "IronChestPasskeyInputScreenOuter",
        close: lT,
        escDoesExit: !0,
        show: kT,
        togglePointerLock: !1,
        globallyUniqueKey: "IronChestPasskeyInputScreen",
        children: (0, IT.jsx)("div", {
          className: "IronChestPasskeyInputScreen",
          children: (0, IT.jsx)(rc, {
            CO: yT,
            onPasskeyUpdated: fT,
            confirmText: "ironChest:tryUnlock",
            onConfirm: () => {
              CT(yT)
            }
          })
        })
      })
    }));

    function rc(TT) {
      let {
        className: kT = "",
        CO: cT,
        onPasskeyUpdated: lT,
        confirmText: MT,
        onConfirm: KT
      } = TT;
      const {
        t: OT
      } = (0, nT.B)();
      return (0, IT.jsxs)("div", {
        className: `${kT} IronChestPasskeyInput`,
        children: [(0, IT.jsx)("div", {
          className: "SmallTextBold IronChestPasskeyInputTitle",
          children: OT("ironChest:passkeyInputTitle")
        }), (0, IT.jsx)("div", {
          className: "IronChestPasskeyInputRow",
          children: new Array(ac.f.ironChestPasskeyLength).fill(0).map(((TT, kT) => (0, IT.jsx)(Pc, {
            digit: cT[kT],
            onPasskeyDigitUpdated: TT => {
              const MT = [...cT];
              MT[kT] = TT, lT(MT)
            }
          }, kT)))
        }), (0, IT.jsx)(jT.m, {
          className: "IronChestPasskeyInputConfirmButton",
          onClick: KT,
          children: OT(MT)
        })]
      })
    }

    function Pc(TT) {
      let {
        digit: kT,
        onPasskeyDigitUpdated: cT
      } = TT;
      return (0, IT.jsx)("div", {
        className: "IronChestPasskeyDigitInputWrapper",
        children: (0, IT.jsxs)("div", {
          className: "IronChestPasskeyDigitInput",
          children: [(0, IT.jsx)(jT.m, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              cT(wT.d.mod(kT + 1, 10))
            },
            children: (0, IT.jsx)(hT.e, {
              name: "angle-up"
            })
          }), (0, IT.jsx)("div", {
            className: "SmallTextBold IronChestPasskeyDigit",
            children: kT
          }), (0, IT.jsx)(jT.m, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              cT(wT.d.mod(kT - 1, 10))
            },
            children: (0, IT.jsx)(hT.e, {
              name: "angle-down"
            })
          })]
        })
      })
    }
    var wc = cT(9369),
      mc = cT(36628),
      bc = cT(36339);

    function zc(TT) {
      let {
        specialItemInfo: kT,
        setHovered: cT,
        pointerDown: lT,
        pointerUp: KT,
        enchantingTablePosition: OT,
        enchantingTableBlockName: yT
      } = TT;
      const {
        t: AT
      } = (0, nT.B)(), [CT, vT] = (0, MT.useState)(null), [tT, hT] = (0, MT.useState)(null), NT = (0, fT.f)("auraPerLevel"), QT = Math.floor((0, mT.h)("aura") / NT);
      (0, MT.useEffect)((() => {
        if (!kT) return void vT(null);
        let TT = !0;
        return xT.gameBridge.query("enchantingOffer", {
          slot: kT.idx,
          name: kT.name,
          blockName: yT
        }).then((cT => {
          var lT, MT;
          let {
            perks: KT,
            options: OT
          } = cT;
          if (!TT) return;
          const yT = {
            isEnchantable: KT.length > 0,
            possibleEnchantments: KT,
            options: OT.map((TT => {
              let {
                level: kT,
                odds: cT
              } = TT;
              return {
                level: kT,
                possibilities: Object.fromEntries(cT.map(((TT, kT) => [`Tier ${kT+1}`, TT])))
              }
            })),
            isAlreadyEnchanted: KT.length > 0 && void 0 !== (null === (lT = kT.attributes) || void 0 === lT || null === (MT = lT.customAttributes) || void 0 === MT ? void 0 : MT.enchantmentTier)
          };
          vT(yT), (TT => {
            const kT = TT.options.map((TT => Object.entries(TT.possibilities).map((TT => {
              let [kT, cT] = TT;
              return {
                str: `${kT}: ${cT>0?cT<.01?cT.toPrecision(1):cT.toFixed(2):0}%\n`,
                style: {
                  color: wT.fb[kT]
                }
              }
            }))));
            hT(kT)
          })(yT)
        })), () => {
          TT = !1
        }
      }), [kT, OT, yT]);
      const ST = [];
      for (let MT = 0; MT < mc.b; MT++) {
        const TT = null === CT || void 0 === CT ? void 0 : CT.options[MT],
          lT = !TT || TT.level > QT;
        ST.push((0, IT.jsx)(jT.e, {
          className: "EnchantmentButton",
          onPointerEnter: TT ? TT => null === cT || void 0 === cT ? void 0 : cT()(!0, {
            name: "",
            desc: tT[MT]
          }, TT) : void 0,
          onPointerLeave: TT ? () => null === cT || void 0 === cT ? void 0 : cT()(!1) : void 0,
          onClick: lT ? void 0 : () => {
            xT.gameBridge.send("enchantItem", {
              slot: kT.idx,
              level: TT.level,
              tablePos: OT
            }), vT(null)
          },
          disabled: lT,
          children: TT ? (0, IT.jsxs)(IT.Fragment, {
            children: [(0, IT.jsxs)("h1", {
              className: "EnchantmentLevels",
              children: [(0, IT.jsxs)("span", {
                className: "EnchantmentLevelsCost",
                children: [AT("enchantments:cost"), ": "]
              }), " ", AT("enchantments:levels", {
                level: TT.level
              })]
            }), (0, IT.jsxs)("div", {
              className: "EnchantmentPossibilities",
              children: [(0, IT.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, IT.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: AT("enchantments:tier")
                }), Object.entries(TT.possibilities).map((TT => {
                  let [kT, cT] = TT;
                  return 0 === cT ? null : (0, IT.jsx)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: wT.fb[kT]
                    },
                    children: kT
                  }, kT)
                }))]
              }), (0, IT.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, IT.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: AT("enchantments:odds")
                }), Object.entries(TT.possibilities).map((TT => {
                  let [kT, cT] = TT;
                  return 0 === cT ? null : (0, IT.jsxs)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: wT.fb[kT]
                    },
                    children: [cT > 0 && cT < .1 ? "<0.1" : cT.toFixed(0 < cT && cT < .95 ? 1 : 0), "%"]
                  }, kT)
                }))]
              })]
            })]
          }) : !1 === (null === CT || void 0 === CT ? void 0 : CT.isEnchantable) ? (0, IT.jsx)("h1", {
            className: "EnchantmentLevels",
            children: AT("enchantments:notEnchantable")
          }) : (0, IT.jsx)("h1", {
            className: "EnchantmentLevels",
            children: AT("enchantments:enterItem")
          })
        }, MT))
      }
      return (0, IT.jsxs)("div", {
        className: "EnchantingTable",
        children: [(0, IT.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: yT
        }), (0, IT.jsxs)("div", {
          className: "EnchantingTableBody",
          children: [(0, IT.jsxs)("div", {
            className: "EnchantingTableLeft",
            children: [(0, IT.jsx)(bc.d, {
              idx: Cc.g,
              setHovered: TT => {
                null === cT || void 0 === cT || cT(Cc.g)(TT)
              },
              pointerDown: lT,
              pointerUp: KT,
              draggedInfo: null,
              specialItemInfo: kT,
              variation: "Enchanting Table"
            }), CT && CT.possibleEnchantments.length > 0 && (0, IT.jsxs)("div", {
              className: "PossibleEnchantments",
              children: [(0, IT.jsx)("h2", {
                children: "Possible Perks:"
              }), CT.possibleEnchantments.map((TT => (0, IT.jsxs)(MT.Fragment, {
                children: [(0, IT.jsxs)("div", {
                  className: "PossibleEnchantmentName",
                  children: [(0, IT.jsx)("div", {
                    className: "PossibleEnchantmentIcon",
                    children: (0, IT.jsx)(Oc.d, {
                      itemName: `${TT} Enchantment`,
                      amount: 1
                    })
                  }), (0, IT.jsx)("div", {
                    className: "PossibleEnchantmentNameText",
                    children: TT
                  })]
                }), (0, IT.jsx)("div", {
                  className: "PossibleEnchantmentDescription",
                  children: AT((0, wc.l)(TT).translationKey)
                })]
              }, TT)))]
            })]
          }), (0, IT.jsxs)("div", {
            className: "EnchantmentOptions",
            children: [CT && CT.isAlreadyEnchanted && (0, IT.jsx)("div", {
              className: "AlreadyEnchantedWarning",
              children: AT("enchantments:alreadyEnchanted")
            }), ST]
          })]
        })]
      })
    }
    var Jc = cT(36632);

    function oc(TT) {
      var kT;
      let {
        specialItemInfo: cT,
        setSpecialItemInfo: lT,
        setHovered: KT,
        pointerDown: OT,
        pointerUp: yT
      } = TT;
      const {
        t: fT
      } = (0, nT.B)(), AT = (0, mT.e)("inventory", (TT => TT.freeSlots)), [CT, vT] = (0, MT.useState)(null);
      (0, MT.useEffect)((() => {
        if (cT) {
          const TT = (0, Jc.c)(cT.name, cT.amount);
          vT({
            salvageable: !!TT,
            produces: TT
          })
        } else vT(null)
      }), [cT, null === cT || void 0 === cT ? void 0 : cT.name, null === cT || void 0 === cT ? void 0 : cT.amount]);
      const tT = !!cT && !(null === CT || void 0 === CT || !CT.salvageable) && !(null !== (kT = CT.produces) && void 0 !== kT && kT.some((TT => {
        let {
          amt: kT
        } = TT;
        return kT < 1
      })));
      return (0, IT.jsxs)("div", {
        className: "SalvagingTable",
        children: [(0, IT.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: fT("item:salvagingTable")
        }), (0, IT.jsxs)("div", {
          className: "SalvagingTableBody",
          children: [(0, IT.jsx)("div", {
            className: "SalvagingTableLeft",
            children: (0, IT.jsx)(bc.d, {
              idx: Cc.g,
              setHovered: TT => {
                null === KT || void 0 === KT || KT(Cc.g)(TT)
              },
              pointerDown: OT,
              pointerUp: yT,
              draggedInfo: null,
              specialItemInfo: cT,
              variation: "Salvaging Table"
            })
          }), (0, IT.jsx)("div", {
            className: "SalvagingTableRight",
            children: (0, IT.jsx)(jT.e, {
              className: "SalvageButton",
              onClick: tT ? () => {
                const {
                  idx: TT,
                  name: kT,
                  amount: MT
                } = cT;
                xT.gameBridge.send("salvageItem", {
                  slot: TT,
                  name: kT,
                  amount: MT
                }) && (vT(null), lT(null))
              } : void 0,
              disabled: !tT,
              children: CT ? CT.salvageable ? CT.produces.some((TT => {
                let {
                  amt: kT
                } = TT;
                return kT < 1
              })) ? (0, IT.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, IT.jsx)("div", {
                  className: "SalvageText Error",
                  children: fT("salvagingTable:notEnoughResources")
                })
              }) : AT < CT.produces.length ? (0, IT.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, IT.jsx)("div", {
                  className: "SalvageText Error",
                  children: fT("salvagingTable:notEnoughInventorySpace")
                })
              }) : (0, IT.jsxs)("div", {
                className: "SalvageButtonText",
                children: [(0, IT.jsx)("div", {
                  className: "SalvageText",
                  children: fT("salvagingTable:salvage")
                }), (0, IT.jsx)("div", {
                  className: "SalvageIcons",
                  children: CT.produces.map(((TT, kT) => {
                    let {
                      item: cT,
                      amt: lT
                    } = TT;
                    return (0, IT.jsx)("div", {
                      className: "SalvageIcon",
                      children: (0, IT.jsx)(Oc.d, {
                        itemName: cT,
                        amount: Math.floor(lT)
                      })
                    }, kT)
                  }))
                })]
              }) : (0, IT.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, IT.jsx)("div", {
                  className: "SalvageText Error",
                  children: fT("salvagingTable:unsalvageable")
                })
              }) : (0, IT.jsx)(IT.Fragment, {})
            })
          })]
        })]
      })
    }
    var Hc = cT(229),
      ec = cT(9447),
      Gc = cT(2712),
      Vc = cT(1692),
      Ec = cT(8725),
      Zc = cT(8719),
      uc = cT(1685),
      Xc = cT(2031),
      dc = cT(1420),
      Lc = cT(2114);

    function Rc(TT, kT, cT) {
      const lT = TT.trim().toLowerCase();
      if ("" === lT) return 0;
      let MT = null;
      for (const KT of kT) {
        const TT = KT.toLowerCase().indexOf(lT);
        if (0 === TT) return 0;
        TT > 0 && (MT = 1)
      }
      if (null !== MT) return MT;
      for (const KT of cT)
        if (KT.toLowerCase().includes(lT)) return 2;
      return null
    }

    function gc(TT) {
      return TT.map((TT => {
        var kT;
        return TT ? {
          name: TT.name,
          amount: null !== (kT = TT.amount) && void 0 !== kT ? kT : 1
        } : null
      }))
    }

    function Uc(TT) {
      return TT < 1e3 ? `${TT}` : TT < 1e4 ? Math.floor(TT / 100) / 10 + "k" : `${Math.floor(TT/1e3)}k`
    }
    var Yc = cT(36638);
    const Bc = jT.e,
      Wc = {
        initialDelayMs: 400,
        intervalMs: 100
      },
      nc = () => {
        const TT = (0, dc.g)();
        return TT ? TT.getPadRepeatTiming(Wc) : Wc
      };

    function pc(TT, kT, cT) {
      var lT, MT;
      const KT = (0, Ic.v)(kT, TT);
      let OT = null === (lT = kT[TT]) || void 0 === lT ? void 0 : lT.description;
      if (cT && (null === (MT = (0, Yc.f)().get(TT)) || void 0 === MT || !MT.hideIngredients)) {
        OT ? (OT = (0, wT.hb)(OT), OT.push({
          str: "\n"
        })) : OT = [], OT.push({
          str: "\n"
        }), OT.push({
          str: "Can be crafted from:\n"
        });
        for (const TT of cT) "string" === typeof TT && (OT.push({
          icon: TT,
          style: {
            fontSize: "1.5em"
          }
        }), OT.push({
          str: " "
        }), OT.push(...(0, wT.hb)((0, Ic.v)(kT, TT))), OT.push({
          str: "\n"
        }))
      }
      return {
        name: KT,
        desc: OT
      }
    }

    function ic(TT) {
      let {
        name: kT,
        Ty: cT
      } = TT;
      return `${kT}_${cT}`
    }

    function qc(TT) {
      var kT;
      let {
        onClick: cT,
        itemName: lT,
        recipeId: KT,
        isSelected: OT,
        haveIngredients: yT,
        craftable: fT,
        setHovered: xT,
        padActions: AT,
        marked: CT,
        lock: jT,
        itemInfo: vT
      } = TT;
      const tT = (0, MT.useRef)(null);
      return (0, Ec.d)(tT, {
        press: TT => !yT || "secondary" === TT && !fT ? (AT.refuse(), !1) : "primary" === TT ? (AT.choose(), !0) : AT.craft(),
        release: AT.stopCraft,
        hints: {
          primary: "inventoryChooseRecipe",
          secondary: "inventoryCraft"
        }
      }), (0, IT.jsxs)("div", {
        ref: tT,
        className: Dc()("InvenItem", {
          CraftableItemNotEnoughIngredients: !yT && !jT,
          CraftableItemMarked: CT,
          CraftableItemLocked: void 0 !== jT,
          CraftableItemLockedFar: (null !== (kT = null === jT || void 0 === jT ? void 0 : jT.stepsAway) && void 0 !== kT ? kT : 1) > 1
        }),
        "data-recipe-key": KT,
        "data-pad-inventory-default": OT ? "" : void 0,
        onClick: cT,
        style: {
          cursor: OT ? null : "pointer"
        },
        onPointerEnter: TT => {
          null === xT || void 0 === xT || xT(!0, pc(lT, vT)), !OT && (0, uc.s)(TT.nativeEvent) && (0, Zc.i)() && cT()
        },
        onPointerLeave: () => {
          null === xT || void 0 === xT || xT(!1)
        },
        children: [(0, IT.jsx)(Oc.d, {
          itemName: lT,
          amount: 1
        }), CT && (0, IT.jsx)("span", {
          className: "CraftableItemMarkBadge",
          "aria-hidden": "true",
          children: "!"
        }), jT && (0, IT.jsxs)("span", {
          className: "CraftableItemLockTag",
          children: [(0, IT.jsx)(hT.e, {
            name: "lock"
          }), (0, IT.jsx)(rT.b, {
            text: jT.tag
          })]
        })]
      })
    }

    function sc(TT) {
      let {
        idx: kT,
        status: cT,
        shownItem: lT,
        dim: KT,
        onHoverStart: OT,
        onHoverEnd: yT,
        onPadBack: fT
      } = TT;
      const xT = (0, MT.useRef)(null);
      (0, Ec.d)(xT, {
        press: () => !1,
        back: fT,
        hints: {
          back: "inventoryBackToRecipes"
        }
      });
      const AT = cT.need > 0 ? Math.min(cT.have / cT.need, 1) : 1;
      return (0, IT.jsxs)("div", {
        ref: xT,
        className: Dc()("CupTile", {
          Short: cT.missing > 0
        }),
        style: {
          width: KT,
          height: KT
        },
        "data-craft-ingredient": kT,
        onPointerEnter: OT,
        onPointerLeave: yT,
        children: [(0, IT.jsx)("div", {
          className: "CupFill",
          style: {
            transform: `scaleY(${AT})`
          }
        }), (0, IT.jsx)(Oc.d, {
          itemName: lT,
          amount: 0
        }), (0, IT.jsxs)("div", {
          className: "CupCount SmallTextBold",
          children: [Uc(cT.have), "/", Uc(cT.need)]
        })]
      })
    }

    function Tl(TT) {
      var kT, cT, lT, KT, OT;
      let {
        show: yT,
        recipeItem: {
          name: fT,
          Ty: AT,
          requires: CT,
          produces: jT,
          haveIngredients: vT
        },
        detail: tT,
        onCraft: hT,
        setHovered: NT,
        craftButtonRef: QT,
        onPadBack: ST,
        showPadShortcut: DT,
        refusedCount: aT,
        lock: FT,
        itemInfo: PT
      } = TT;
      const {
        t: wT
      } = (0, nT.B)(), mT = null !== tT && !tT.roomForOne, bT = null !== (kT = null === tT || void 0 === tT ? void 0 : tT.craftAllTimes) && void 0 !== kT ? kT : 0, zT = function(TT, kT) {
        return TT.map((TT => {
          let {
            items: cT,
            amt: lT
          } = TT, MT = 0;
          const KT = [];
          for (const OT of cT) {
            const TT = kT(OT);
            MT += TT, TT > 0 && KT.push(OT)
          }
          return 0 === KT.length && KT.push(cT[0]), {
            shownItems: KT,
            need: lT,
            have: MT,
            missing: Math.max(lT - MT, 0)
          }
        }))
      }(CT, (TT => {
        var kT;
        return null !== (kT = null === tT || void 0 === tT ? void 0 : tT.amounts[TT]) && void 0 !== kT ? kT : 0
      }));
      let JT = "4rem",
        oT = 4;
      3 === CT.length || 4 === CT.length ? JT = "3.75rem" : CT.length >= 5 && (JT = "3rem"), 4 === CT.length ? oT = 2 : CT.length <= 6 && (oT = 3);
      const HT = `calc(${oT} * ${JT} + ${oT-1} * 0.4rem + 1px)`,
        eT = (0, MT.useRef)(null),
        GT = (0, MT.useRef)(null);
      (0, MT.useLayoutEffect)((() => {
        eT.current.scrollTop = 0
      }), [fT, AT]);
      const VT = (0, MT.useRef)(aT);
      (0, MT.useEffect)((() => {
        if (aT === VT.current) return;
        VT.current = aT;
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
        for (const lT of null !== (kT = null === (cT = eT.current) || void 0 === cT ? void 0 : cT.querySelectorAll(".CupTile.Short, .CantCraftInfo")) && void 0 !== kT ? kT : []) {
          var kT, cT;
          lT.animate(TT, {
            duration: 280,
            easing: "ease-out"
          })
        }
      }), [aT]);
      const ET = (TT, kT, cT) => {
          var lT;
          if ((0, Yc.f)().has(fT)) return void(cT && clearInterval(ZT.current));
          const MT = null !== (lT = null === tT || void 0 === tT ? void 0 : tT.resultStackable) && void 0 !== lT && lT,
            KT = gc(xT.gameBridge.latest("inventory").player),
            {
              ky: OT,
              oI: yT,
              amountAddedToSlot: IT
            } = xT.gameBridge.send("craftRecipe", {
              name: fT,
              Ty: AT,
              times: kT || TT && MT ? null : 1
            });
          if (OT > 0) {
            const kT = [],
              lT = new Set(CT.flatMap((TT => {
                let {
                  items: kT
                } = TT;
                return kT
              }))),
              OT = function(TT, kT, cT) {
                const lT = [];
                for (let MT = 0; MT < TT.length; MT++) {
                  const KT = TT[MT];
                  if (!KT || !cT.has(KT.name)) continue;
                  const OT = kT[MT],
                    yT = (null === OT || void 0 === OT ? void 0 : OT.name) === KT.name ? OT.amount : 0;
                  yT < KT.amount && lT.push({
                    idx: MT,
                    itemName: KT.name,
                    amount: KT.amount - yT
                  })
                }
                return lT
              }(KT, gc(xT.gameBridge.latest("inventory").player), lT).slice(0, 12),
              AT = cT ? 0 : Math.min(50, 400 / OT.length),
              vT = cT ? 220 : 320;
            for (const TT of OT) {
              var jT;
              const cT = CT.findIndex((kT => {
                  let {
                    items: cT
                  } = kT;
                  return cT.includes(TT.itemName)
                })),
                lT = null === (jT = eT.current) || void 0 === jT ? void 0 : jT.querySelector(`[data-craft-ingredient="${cT}"]`),
                MT = (0, Ic.d)(TT.idx);
              lT && MT && kT.push({
                kind: "ingredient",
                itemName: TT.itemName,
                amount: TT.amount,
                oI: TT.idx,
                from: MT,
                to: (0, Ic.d)(lT),
                delayMs: Math.round(kT.length * AT),
                durationMs: vT
              })
            }
            let tT;
            if (null !== yT && IT > 0 && GT.current) {
              const TT = kT.length > 0 ? kT[kT.length - 1].delayMs + .6 * vT : 0;
              tT = {
                itemName: fT,
                amount: IT,
                oI: yT,
                from: (0, Ic.d)(GT.current),
                delayMs: Math.round(TT)
              }
            }
            hT(tT, TT && !MT ? yT : null, kT), fc.d.play("wood1", .5).rate(1.75)
          }
        },
        ZT = (0, MT.useRef)(null);
      (0, MT.useEffect)((() => () => {
        clearInterval(ZT.current)
      }), []);
      const uT = (TT, kT) => {
          ET(TT, !1, !1), clearInterval(ZT.current), kT && (ZT.current = setTimeout((() => {
            ZT.current = setInterval((() => {
              ET(TT, !1, !0)
            }), kT.intervalMs)
          }), kT.initialDelayMs))
        },
        XT = () => {
          clearInterval(ZT.current)
        },
        dT = !vT || mT || Boolean(FT),
        LT = (0, MT.useRef)(null),
        RT = null !== (cT = null === (lT = (0, Lc.e)()) || void 0 === lT ? void 0 : lT.hideButtonHints) && void 0 !== cT && cT,
        gT = null !== (KT = null === (OT = (0, dc.g)()) || void 0 === OT ? void 0 : OT.getBoundButton("inventorySecondary")) && void 0 !== KT ? KT : null,
        UT = () => !dT && (ET(!1, !0, !1), !0);
      (0, Ec.d)(QT, {
        press: TT => "secondary" === TT ? UT() : !dT && (uT(!1, nc()), !0),
        release: XT,
        back: ST,
        hints: {
          primary: "inventoryCraft",
          secondary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      }), (0, Ec.d)(LT, {
        press: UT,
        back: ST,
        hints: {
          primary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      });
      const [YT, BT] = (0, MT.useState)(0), [WT, pT] = (0, MT.useState)(null);
      (0, MT.useEffect)((() => {
        if (!0 === yT) {
          BT(0);
          const TT = setInterval((() => {
            BT((TT => TT + 1))
          }), 1e3);
          return () => {
            clearInterval(TT)
          }
        }
        return () => {}
      }), [yT]);
      const iT = null === tT || void 0 === tT ? void 0 : tT.ingredientsCraftedFrom,
        qT = (0, MT.useRef)(NT);
      (0, MT.useEffect)((() => {
        qT.current = NT
      }), [NT]);
      const sT = !(null === FT || void 0 === FT || !FT.hideIngredients);
      (0, MT.useEffect)((() => {
        var TT, kT;
        if (!WT) return;
        if (sT) return pT(null), void(null === (kT = qT.current) || void 0 === kT || kT.call(qT, !1));
        const cT = WT[YT % WT.length];
        null === (TT = qT.current) || void 0 === TT || TT.call(qT, !0, pc(cT, PT, null === iT || void 0 === iT ? void 0 : iT[cT]))
      }), [WT, YT, PT, iT, sT]);
      const Tk = !!FT,
        kk = (0, MT.useRef)(!1);
      (0, MT.useEffect)((() => {
        var TT;
        Tk && (clearInterval(ZT.current), sT && kk.current && (kk.current = !1, null === (TT = qT.current) || void 0 === TT || TT.call(qT, !1)))
      }), [Tk, sT]);
      const ck = (0, Ic.v)(PT, fT);
      return (0, IT.jsxs)("div", {
        ref: eT,
        className: "CraftableInfo SmallTextBold",
        children: [(0, IT.jsx)("div", {
          className: "CraftableHeader",
          children: (0, IT.jsx)(rT.b, {
            text: ck
          })
        }), !sT && (0, IT.jsx)("div", {
          className: Dc()("CraftableIngredients", {
            Compact: CT.length >= 5
          }),
          style: {
            maxWidth: HT
          },
          children: zT.map(((TT, kT) => {
            const cT = TT.shownItems[YT % TT.shownItems.length];
            return (0, IT.jsx)(sc, {
              idx: kT,
              status: TT,
              shownItem: cT,
              dim: JT,
              onHoverStart: () => {
                pT(TT.shownItems)
              },
              onHoverEnd: () => {
                pT(null), null === NT || void 0 === NT || NT(!1)
              },
              onPadBack: ST
            }, kT)
          }))
        }), FT && (0, IT.jsx)("div", {
          className: "CantCraftInfo CraftableLockReason",
          children: (0, IT.jsx)(rT.b, {
            text: FT.reason
          })
        }), !FT && (!vT || mT) && (0, IT.jsxs)("div", {
          className: "CantCraftInfo",
          children: [!vT && "Missing ingredients", (0, IT.jsx)("br", {}), mT && "Inventory is full"]
        }), !sT && (0, IT.jsxs)(IT.Fragment, {
          children: [(0, IT.jsxs)(Bc, {
            ref: QT,
            className: "DoCraftButton",
            onPointerDown: TT => {
              uT((0, Ic.y)(TT), (0, uc.s)(TT.nativeEvent) ? nc() : Wc)
            },
            onPointerUp: XT,
            onPointerLeave: XT,
            disabled: dT,
            children: [DT && gT && !dT && !RT && (0, IT.jsx)(Xc.c, {
              className: "CraftShortcutGlyph",
              glyph: gT
            }), (0, IT.jsx)("div", {
              ref: GT,
              className: "DoCraftItem",
              onPointerEnter: () => {
                kk.current = !0, null === NT || void 0 === NT || NT(!0, pc(fT, PT))
              },
              onPointerLeave: () => {
                kk.current = !1, null === NT || void 0 === NT || NT(!1)
              },
              children: (0, IT.jsx)(Oc.d, {
                itemName: fT,
                amount: jT
              })
            })]
          }), (0, IT.jsxs)(Bc, {
            ref: LT,
            className: "DoCraftAllButton",
            onPointerDown: TT => {
              ET((0, Ic.y)(TT), !0, !1)
            },
            disabled: dT,
            children: [(0, IT.jsx)("span", {
              className: "CraftAllLabel",
              children: wT("general:craftAll")
            }), bT > 0 && (0, IT.jsxs)("span", {
              className: "CraftAllCount",
              children: ["x", Uc(bT)]
            })]
          })]
        })]
      })
    }

    function kl(TT) {
      let {
        selectedIdx: kT,
        hidden: cT
      } = TT;
      const lT = (0, Kc.s)(),
        KT = (0, MT.useRef)(null);
      return (0, MT.useLayoutEffect)((() => {
        const TT = KT.current,
          lT = null === TT || void 0 === TT ? void 0 : TT.parentElement;
        if (!lT || !TT) return;
        const MT = lT.querySelector(".CraftableItems"),
          OT = () => {
            var KT, OT;
            if (cT) return void(TT.style.opacity = "0");
            const yT = null === MT || void 0 === MT ? void 0 : MT.children[kT],
              fT = null === (KT = null !== (OT = null === yT || void 0 === yT ? void 0 : yT.querySelector(".InvenItem")) && void 0 !== OT ? OT : yT) || void 0 === KT ? void 0 : KT.getBoundingClientRect();
            if (!fT || 0 === fT.width) return void(TT.style.opacity = "0");
            const xT = lT.getBoundingClientRect();
            TT.style.opacity = "1", TT.style.width = `${fT.width}px`, TT.style.height = `${fT.height}px`, TT.style.transform = `translate(${fT.left-xT.left+lT.scrollLeft}px, ${fT.top-xT.top+lT.scrollTop}px)`
          };
        OT();
        const yT = new MutationObserver(OT),
          fT = new ResizeObserver(OT);
        return fT.observe(lT), MT && (yT.observe(MT, {
          childList: !0,
          subtree: !0
        }), fT.observe(MT)), () => {
          yT.disconnect(), fT.disconnect()
        }
      }), [kT, cT]), (0, IT.jsx)("div", {
        ref: KT,
        className: Dc()("SelectionReticle", {
          Secondary: lT
        })
      })
    }

    function cl(TT, kT, cT) {
      return TT ? (0, Hc.d)(ec.i, TT) ? ll(TT, kT, cT) : TT : cT("classicGame:handCrafting")
    }

    function ll(TT, kT, cT) {
      var lT;
      const MT = null === (lT = kT[TT]) || void 0 === lT ? void 0 : lT.displayName;
      if ("string" === typeof MT) return cT(MT);
      const KT = xT.gameBridge.latest("hiddenPlayerNames");
      return Array.isArray(MT) ? MT.map((TT => {
        if ("string" === typeof TT) return TT;
        if ("translationKey" in TT) return cT(TT.translationKey, (0, nT.m)(TT.params, KT));
        if ("str" in TT) {
          if ("string" === typeof TT.str) return TT.str;
          if ("translationKey" in TT.str) return cT(TT.str.translationKey, (0, nT.m)(TT.str.params, KT))
        }
        return ""
      })).join("") : MT && "translationKey" in MT ? cT(MT.translationKey, (0, nT.m)(MT.params, KT)) : TT
    }

    function Ml(TT, kT) {
      return TT === kT || null !== TT && null !== kT && TT.name === kT.name && TT.Ty === kT.Ty
    }

    function Kl(TT) {
      var kT, cT, lT;
      let {
        show: KT,
        onCraft: OT,
        dispatchSelectedCraftable: yT,
        selectedCraftable: fT,
        craftingStation: AT,
        setHovered: CT
      } = TT;
      const {
        t: jT
      } = (0, nT.B)(), [vT, tT] = (0, MT.useState)(""), [hT, NT] = (0, MT.useState)(0);
      (0, MT.useEffect)((() => {
        KT || (tT(""), NT((TT => TT + 1)))
      }), [KT]);
      const [QT, ST] = (0, MT.useState)(AT);
      QT !== AT && (ST(AT), "" !== vT && (tT(""), NT((TT => TT + 1))));
      const DT = (0, MT.useRef)(null),
        aT = (0, MT.useRef)(null),
        FT = (0, Zc.l)(),
        rT = FT.showing && "recipe" === FT.kind,
        [PT, wT] = (0, MT.useState)(0),
        bT = null !== AT && void 0 !== AT ? AT : null,
        zT = (0, MT.useRef)(null),
        JT = TT => {
          return !((kT = zT.current) === (cT = TT) || null !== kT && null !== cT && kT.station === cT.station && Ml(kT.recipe, cT.recipe)) && (zT.current = TT, xT.gameBridge.send("focusCrafting", TT), !0);
          var kT, cT
        };
      JT(KT ? {
        station: bT,
        recipe: (null === (kT = zT.current) || void 0 === kT ? void 0 : kT.station) === bT ? zT.current.recipe : null
      } : null);
      let oT = xT.gameBridge.latest("crafting");
      const HT = (0, mT.h)("itemInfo"),
        eT = "" !== vT.trim(),
        GT = (0, Yc.C)(),
        VT = (0, Yc.A)(),
        ET = (0, Yc.E)(),
        ZT = function(TT, kT) {
          const [cT, lT] = (0, MT.useState)(!1);
          (0, MT.useEffect)((() => {
            if (!TT) return void lT(!1);
            const kT = setTimeout((() => {
              lT(!0)
            }), 0);
            return () => {
              clearTimeout(kT)
            }
          }), [TT]);
          const KT = TT && cT,
            OT = (0, MT.useRef)({
              station: kT,
              at: new Map
            });
          return (OT.current.station !== kT || !KT && OT.current.at.size > 0) && (OT.current = {
            station: kT,
            at: new Map
          }), KT ? OT.current.at : null
        }(KT, AT);
      let uT = oT.recipes.filter((TT => {
        let {
          listed: kT
        } = TT;
        return kT
      }));
      if (eT) {
        const TT = [];
        for (const kT of oT.recipes) {
          var XT;
          const cT = null !== (XT = VT.get(kT.name)) && void 0 !== XT && XT.hideIngredients ? [] : kT.requires.flatMap((TT => {
              let {
                items: kT
              } = TT;
              return kT.flatMap((TT => [TT, ll(TT, HT, jT)]))
            })),
            lT = Rc(vT, [kT.name, ll(kT.name, HT, jT)], cT);
          null !== lT && TT.push({
            item: kT,
            rank: lT
          })
        }
        TT.sort(((TT, kT) => TT.rank - kT.rank)), uT = TT.map((TT => {
          let {
            item: kT
          } = TT;
          return kT
        }))
      } else {
        if (ZT && ZT.size > 0) {
          const TT = oT.recipes.filter((TT => !TT.listed && ZT.has(ic(TT))));
          uT = uT.concat(TT)
        }
        uT = (0, Yc.k)(uT, GT, VT, ET), ZT && (uT = (0, Yc.i)(uT, ZT, ic))
      }
      const dT = TT => uT.find((kT => ic(kT) === TT)),
        LT = `${AT}|${vT}`,
        [RT, gT] = (0, MT.useState)(null),
        UT = (null === RT || void 0 === RT ? void 0 : RT.context) === LT ? RT.key : null,
        YT = fT ? ic(fT) : null,
        BT = null !== (cT = null !== (lT = dT(YT)) && void 0 !== lT ? lT : dT(UT)) && void 0 !== cT ? cT : uT[0],
        WT = BT ? ic(BT) : null,
        pT = BT ? {
          name: BT.name,
          Ty: BT.Ty
        } : null;
      KT && JT({
        station: bT,
        recipe: pT
      }) && (oT = xT.gameBridge.latest("crafting")), WT !== YT && WT !== UT && gT(WT ? {
        context: LT,
        key: WT
      } : null), (0, MT.useEffect)((() => () => {
        zT.current = null, xT.gameBridge.send("focusCrafting", null)
      }), []);
      const iT = Ml(oT.detail, pT) ? oT.detail : null,
        qT = null !== iT && !iT.roomForOne,
        sT = uT.findIndex((TT => ic(TT) === ic(BT))),
        Tk = () => aT.current ? (0, Ec.c)(aT.current) : null,
        kk = (0, MT.useRef)(null),
        ck = (0, MT.useRef)(0);
      ck.current++;
      const lk = ck.current;
      (0, MT.useEffect)((() => {
        const TT = kk.current;
        if (!TT || lk <= TT.afterRender) return;
        if (kk.current = null, TT.key !== WT) return;
        const kT = Tk();
        var cT;
        null !== kT && void 0 !== kT && kT.press("primary") && !TT.ty && (null === (cT = kT.release) || void 0 === cT || cT.call(kT))
      }));
      const Mk = TT => {
          const kT = {
            name: TT.name,
            Ty: TT.Ty
          };
          return {
            choose: () => {
              yT(kT), (0, Mc.q)(aT.current)
            },
            craft: () => {
              var TT, cT;
              return yT(kT), ic(kT) !== ic(BT) ? (kk.current = {
                key: ic(kT),
                ty: !0,
                afterRender: ck.current
              }, !0) : null !== (TT = null === (cT = Tk()) || void 0 === cT ? void 0 : cT.press("primary")) && void 0 !== TT && TT
            },
            stopCraft: () => {
              var TT, kT;
              kk.current ? kk.current.ty = !1 : null === (TT = Tk()) || void 0 === TT || null === (kT = TT.release) || void 0 === kT || kT.call(TT)
            },
            refuse: () => {
              ic(kT) !== ic(BT) && yT(kT), wT((TT => TT + 1))
            }
          }
        },
        Kk = () => {
          var TT, kT, cT;
          (0, Mc.q)(null !== (TT = null === (kT = DT.current) || void 0 === kT || null === (cT = kT.querySelector(".CraftableItems")) || void 0 === cT ? void 0 : cT.children[sT]) && void 0 !== TT ? TT : null)
        },
        Ok = uT.map(ic).join("|"),
        yk = (0, MT.useRef)(Ok);
      return (0, MT.useEffect)((() => {
        yk.current !== Ok && (yk.current = Ok, rT && sT >= 0 && (0, Zc.i)() && Kk())
      })), (0, IT.jsxs)("div", {
        className: "Craftables",
        children: [(0, IT.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: cl(AT, HT, jT)
        }), (0, IT.jsxs)("div", {
          className: "CraftablesBody",
          children: [(0, IT.jsx)(Vc.b, {
            className: "CraftingSearch",
            placeholderText: jT("general:searchRecipes"),
            defaultValue: vT,
            maxLength: 100,
            onValueChange: TT => {
              tT(TT)
            },
            blurOnEnter: !0
          }, hT), 0 === uT.length && eT && (0, IT.jsx)("div", {
            className: "CraftingNoMatches SmallTextBold",
            children: jT("general:noRecipesMatchSearch")
          }), uT.length > 0 && (0, IT.jsxs)(IT.Fragment, {
            children: [(0, IT.jsxs)("div", {
              ref: DT,
              className: "CraftablesLeftSide",
              children: [(0, IT.jsx)(Gc.c, {
                lazyLoadedClassName: "CraftableItems",
                observerUpdateDeps: [JSON.stringify(uT.map((TT => {
                  let {
                    name: kT,
                    Ty: cT,
                    haveIngredients: lT
                  } = TT;
                  return {
                    name: kT,
                    Ty: cT,
                    haveIngredients: lT
                  }
                })))],
                observing: KT,
                children: uT.map((TT => {
                  const {
                    name: kT,
                    Ty: cT,
                    haveIngredients: lT
                  } = TT, MT = ic(TT);
                  return (0, IT.jsx)(qc, {
                    recipeId: MT,
                    itemName: kT,
                    onClick: () => {
                      yT({
                        name: kT,
                        Ty: cT
                      })
                    },
                    isSelected: ic(BT) === MT,
                    haveIngredients: lT,
                    craftable: lT && !VT.has(kT) && !(ic(BT) === MT && qT),
                    setHovered: CT,
                    padActions: Mk(TT),
                    marked: GT.has(kT),
                    lock: VT.get(kT),
                    itemInfo: HT
                  }, MT)
                }))
              }), (0, IT.jsx)(kl, {
                selectedIdx: sT,
                hidden: rT && FT.steppingSlots
              })]
            }), (0, IT.jsx)(Tl, {
              show: KT,
              recipeItem: BT,
              detail: iT,
              onCraft: OT,
              setHovered: CT,
              craftButtonRef: aT,
              onPadBack: Kk,
              showPadShortcut: rT,
              refusedCount: PT,
              lock: VT.get(BT.name),
              itemInfo: HT
            })]
          })]
        })]
      })
    }
    var Ol = cT(9384),
      yl = cT(3214),
      fl = cT(2140),
      xl = cT(8691);
    class Il {
      constructor(TT, kT, cT) {
        this.commit = TT, this.delayMs = kT, this.defers = cT, this.pending = null, this.timer = void 0, this.ty = !1, this.flush = () => {
          clearTimeout(this.timer);
          const TT = this.pending;
          null !== TT && (this.pending = null, this.commit(TT))
        }
      }
      type(TT) {
        this.pending = TT, clearTimeout(this.timer), this.ty || this.defers() ? this.ty || (this.timer = setTimeout(this.flush, this.delayMs)) : this.flush()
      }
      getTyped(TT) {
        var kT;
        return null !== (kT = this.pending) && void 0 !== kT ? kT : TT
      }
      isHeld() {
        return this.ty
      }
      setHeld(TT) {
        this.ty = TT, TT || this.flush()
      }
    }

    function Al(TT) {
      return null === TT ? "creativeInventory:all" : `creativeInventory:${TT}`
    }

    function Cl(TT) {
      let {
        category: kT
      } = TT;
      return null === kT ? (0, IT.jsx)(hT.e, {
        name: "layer-group"
      }) : (0, IT.jsx)(Oc.d, {
        itemName: Ol.creativeItemCategoryIcons[kT],
        amount: 0
      })
    }

    function jl(TT) {
      let {
        labelKey: kT,
        isSelected: cT,
        onSelect: lT,
        setHovered: MT,
        children: KT
      } = TT;
      return (0, IT.jsx)("div", {
        className: Dc()("CreativeCategoryTab", {
          Selected: cT
        }),
        onClick: lT,
        onPointerEnter: TT => {
          (0, Ic.s)(TT) || MT(!0, {
            name: {
              translationKey: kT
            },
            desc: ""
          })
        },
        onPointerLeave: () => {
          MT(!1)
        },
        children: KT
      })
    }

    function vl(TT) {
      let {
        categories: kT,
        selectedCategory: cT,
        onSelect: lT
      } = TT;
      const {
        t: KT
      } = (0, nT.B)(), [OT, yT] = (0, MT.useState)(!1), fT = (0, MT.useRef)(null), xT = (0, MT.useCallback)((() => {
        yT(!1)
      }), []);
      return (0, fl.d)(fT, xT), (0, IT.jsxs)("div", {
        className: "CreativeCategoryDropdown",
        ref: fT,
        children: [(0, IT.jsxs)("div", {
          className: "CreativeCategoryDropdownButton",
          onClick: () => {
            yT(!OT)
          },
          children: [(0, IT.jsx)("div", {
            className: "CreativeCategoryIcon",
            children: (0, IT.jsx)(Cl, {
              category: cT
            })
          }), (0, IT.jsx)("span", {
            children: KT(Al(cT))
          }), (0, IT.jsx)(hT.e, {
            name: OT ? "caret-up" : "caret-down"
          })]
        }), OT && (0, IT.jsx)("div", {
          className: "CreativeCategoryDropdownMenu",
          children: kT.map((TT => (0, IT.jsxs)("div", {
            className: Dc()("CreativeCategoryDropdownOption", {
              Selected: cT === TT
            }),
            onClick: () => {
              lT(TT), yT(!1)
            },
            children: [(0, IT.jsx)("div", {
              className: "CreativeCategoryIcon",
              children: (0, IT.jsx)(Cl, {
                category: TT
              })
            }), (0, IT.jsx)("span", {
              children: KT(Al(TT))
            })]
          }, null !== TT && void 0 !== TT ? TT : "all")))
        })]
      })
    }
    const tl = (0, MT.memo)((function(TT) {
      let {
        creativeScrollDiv: kT,
        playerInvenNumSlots: cT,
        getSetHoveringForIdx: lT,
        getPointerDownForIdx: KT,
        getPointerUpForIdx: OT,
        creativeSearchVal: yT,
        setCreativeSearchVal: xT,
        creativeCategory: AT,
        setCreativeCategory: CT,
        show: jT
      } = TT;
      const {
        t: vT
      } = (0, nT.B)(), tT = (0, mT.h)("creativeVisibility"), {
        userContext: NT
      } = (0, FT.b)(), QT = (0, fT.f)("canUseDevCreativeItems"), ST = NT.playerHasRank("developer") || !!QT, DT = (0, MT.useMemo)((() => Nl("", tT, ST)), [tT, ST]), aT = (0, MT.useMemo)((() => {
        const TT = (0, Ol.creativeItemIds)(),
          kT = new Set(DT.map((kT => (0, Ol.creativeCategoryOf)(TT[kT]))));
        return Ol.creativeItemCategories.filter((TT => kT.has(TT)))
      }), [DT]), rT = null !== AT && aT.includes(AT) ? AT : null, wT = (0, MT.useMemo)((() => "" === yT ? DT : Nl(yT, tT, ST)), [DT, yT, tT, ST]), bT = (0, MT.useMemo)((() => {
        const TT = (0, Ol.creativeItemIds)();
        return null !== rT ? wT.filter((kT => (0, Ol.creativeCategoryOf)(TT[kT]) === rT)) : "" === yT ? wT.filter((kT => !(0, Ol.showOnlyInCreativeCategory)(TT[kT]))) : wT
      }), [wT, rT, yT]), zT = lT();

      function JT(TT) {
        CT(TT), kT.current.scrollTop = 0
      }
      const oT = [null, ...aT],
        {
          isTouchScreen: HT
        } = (0, XT.n)(["isTouchScreen"]),
        eT = !HT,
        GT = (0, MT.useRef)(null),
        [VT, ET] = (0, MT.useState)(0);
      (0, MT.useEffect)((() => {
        const TT = GT.current;
        if (!TT) return;
        const kT = new ResizeObserver((TT => {
          ET(TT[0].contentRect.height)
        }));
        return kT.observe(TT), () => {
          kT.disconnect()
        }
      }), [eT]);
      const ZT = (0, MT.useRef)(null),
        uT = (0, MT.useCallback)((function TT() {
          "up" === ZT.current ? kT.current.scrollTop -= 10 : "down" === ZT.current && (kT.current.scrollTop += 10), ZT.current && requestAnimationFrame(TT)
        }), [kT]),
        dT = (0, MT.useCallback)((function(TT) {
          ZT.current || (ZT.current = TT, uT())
        }), [uT]);

      function LT() {
        ZT.current = null
      }
      const RT = (0, MT.useRef)({
        creativeSearchVal: yT,
        setCreativeSearchVal: xT
      });
      RT.current = {
        creativeSearchVal: yT,
        setCreativeSearchVal: xT
      };
      const [gT] = (0, MT.useState)((() => new Il((TT => {
        RT.current.setCreativeSearchVal(TT)
      }), 250, Kc.h))), UT = TT => {
        var cT;
        null === (cT = kT.current) || void 0 === cT || cT.classList.toggle("CreativeItemSlotsStale", TT)
      };
      (0, PT.g)(xl.e, (TT => {
        gT.setHeld(TT), TT || UT(!1)
      })), (0, MT.useEffect)((() => gT.flush), [gT]);
      const YT = (0, IT.jsx)(Vc.b, {
          className: "CreativeItemSlotsSearch",
          placeholderText: "Search",
          defaultValue: yT,
          maxLength: 1e4,
          onValueChange: (TT, kT) => {
            "" === gT.getTyped(RT.current.creativeSearchVal) && "" !== TT && CT(null), gT.type(TT), UT(gT.isHeld())
          },
          onEnter: gT.flush,
          blurOnEnter: !0
        }),
        BT = (0, IT.jsxs)("div", {
          className: "CreateItemSlotsScrollable",
          children: [HT && (0, IT.jsxs)("div", {
            className: "CreativeScrollButtons",
            children: [(0, IT.jsx)("div", {
              className: "CreativeScrollButton Up",
              onPointerDown: () => {
                dT("up")
              },
              onPointerLeave: LT,
              onPointerUp: LT,
              children: (0, IT.jsx)(hT.e, {
                name: "arrow-up"
              })
            }), (0, IT.jsx)("div", {
              className: "CreativeScrollButton Down",
              onPointerDown: () => {
                dT("down")
              },
              onPointerLeave: LT,
              onPointerUp: LT,
              children: (0, IT.jsx)(hT.e, {
                name: "arrow-up"
              })
            })]
          }), (0, IT.jsxs)("div", {
            className: "CreativeItemSlots",
            ref: kT,
            children: [0 === bT.length && "" !== yT && (0, IT.jsx)("div", {
              className: "CreativeItemSlotsEmpty",
              children: vT("general:noResults")
            }), (0, IT.jsx)(Gc.c, {
              lazyLoadedClassName: "CreativeItemSlotsInner",
              observerUpdateDeps: [yT, rT],
              observerRoot: "CreativeItemSlots",
              observing: jT,
              children: bT.map((TT => {
                const kT = cT + TT;
                return (0, IT.jsx)(bc.d, {
                  idx: kT,
                  draggedInfo: null,
                  specialItemInfo: null,
                  setHovered: lT(kT),
                  pointerDown: KT(kT),
                  pointerUp: OT(kT)
                }, kT)
              }))
            })]
          })]
        });
      return (0, IT.jsxs)("div", {
        className: Dc()("CreativeItemSlotsWrapper", eT ? "WithRail" : "WithDropdown"),
        children: [eT && (0, IT.jsx)("div", {
          className: "CreativeCategoryRail",
          ref: GT,
          style: {
            "--rail-height": VT > 0 ? `${VT}px` : void 0,
            "--tab-rows": Math.ceil(oT.length / 2)
          },
          children: oT.map((TT => (0, IT.jsx)(jl, {
            labelKey: Al(TT),
            isSelected: rT === TT,
            onSelect: () => {
              JT(TT)
            },
            setHovered: zT,
            children: (0, IT.jsx)(Cl, {
              category: TT
            })
          }, null !== TT && void 0 !== TT ? TT : "all")))
        }), (0, IT.jsxs)("div", {
          className: "CreativeItemSlotsMain",
          children: [(0, IT.jsxs)("div", {
            className: "CreativeItemSlotsSearchRow",
            children: [YT, !eT && (0, IT.jsx)(vl, {
              categories: oT,
              selectedCategory: rT,
              onSelect: JT
            })]
          }), BT]
        })]
      })
    }));

    function hl(TT) {
      var kT;
      return null !== (kT = (0, yl.i)(TT)) && void 0 !== kT ? kT : ""
    }

    function Nl(TT, kT, cT) {
      let {
        publicLobby: lT,
        shownInGame: MT
      } = kT;
      const KT = TT.toLowerCase(),
        OT = (0, Ol.creativeItemIds)(),
        yT = TT => {
          var kT;
          const KT = OT[TT];
          return !(0, Ol.itemIsDisabled)(KT, lT, null === (kT = MT[hl(KT)]) || void 0 === kT || kT, cT)
        };
      if ("" === KT) return OT.map(((TT, kT) => kT)).filter((TT => !(0, Ol.showOnlyInCreativeSearch)(OT[TT]))).filter(yT);
      const fT = [];
      for (let xT = 0; xT < OT.length; xT++) hl(OT[xT]).toLowerCase().includes(KT) && fT.push(xT);
      fT.sort(((TT, kT) => {
        const cT = hl(OT[TT]).toLowerCase(),
          lT = hl(OT[kT]).toLowerCase();
        return cT.indexOf(KT) - lT.indexOf(KT)
      }));
      for (const [xT, IT] of(0, Ol.creativeAltNames)())
        for (const TT of IT)
          if (TT.toLowerCase().includes(KT)) {
            const TT = OT.indexOf(xT);
            fT.includes(TT) || fT.push(TT)
          } return fT.filter(yT)
    }
    var Ql = cT(36653),
      Sl = cT(617);

    function Dl(TT) {
      return TT > Sl.q
    }

    function al(TT) {
      const kT = TT / 2,
        cT = [];
      for (let lT = 0; lT < kT / 6; lT++)
        for (let TT = 0; TT < 12; TT++) {
          const MT = TT < 6 ? 0 : kT;
          cT.push(MT + 6 * lT + TT % 6)
        }
      return cT
    }

    function Fl(TT) {
      let {
        numSlots: kT,
        renderSlot: cT
      } = TT;
      const {
        t: lT
      } = (0, nT.B)(), KT = (0, MT.useRef)(null);
      var OT;
      return OT = KT, (0, MT.useLayoutEffect)((() => {
        var TT;
        const kT = null === (TT = OT.current) || void 0 === TT ? void 0 : TT.closest(".InvenBody");
        if (!kT) return;
        const cT = () => {
          kT.style.zoom = "";
          const TT = parseFloat(getComputedStyle(document.documentElement).fontSize),
            cT = window.innerWidth - 2 * TT,
            lT = kT.getBoundingClientRect().width;
          lT > cT && (kT.style.zoom = "" + cT / lT)
        };
        return cT(), window.addEventListener("resize", cT), () => {
          window.removeEventListener("resize", cT), kT.style.zoom = ""
        }
      }), [OT]), (0, IT.jsxs)("div", {
        ref: KT,
        className: "ChestItemSlots DoubleChestSlots",
        children: [(0, IT.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: lT("doubleChest:title")
        }), (0, IT.jsx)("div", {
          className: "GridItemSlots",
          children: al(kT).map((TT => cT(TT)))
        })]
      })
    }

    function rl(TT) {
      let {
        sl: kT,
        initialPasskey: cT
      } = TT;
      const {
        t: lT
      } = (0, nT.B)(), [KT, OT] = (0, MT.useState)(cT), [yT, fT] = (0, MT.useState)(cT);
      (0, MT.useEffect)((() => {
        OT(cT), fT(cT)
      }), [...kT]);
      return (0, IT.jsxs)("div", {
        className: "IronChestPasskeyEditorWrapper",
        children: [(0, IT.jsx)("div", {
          className: "SmallTextBold",
          children: lT("ironChest:currentPasskey", {
            currentPasskey: KT.join("")
          })
        }), (0, IT.jsx)(rc, {
          className: "IronChestPasskeyEditor",
          CO: yT,
          onPasskeyUpdated: fT,
          confirmText: "ironChest:changePasskey",
          onConfirm: () => {
            xT.gameBridge.send("changeIronChestPasskey", {
              pos: [...kT],
              CO: [...yT]
            }), OT([...yT])
          }
        })]
      })
    }

    function Pl(TT) {
      let {
        variation: kT,
        canCraft: cT,
        show: lT,
        creativeMounted: MT,
        specialItemRef: KT,
        draggedInfo: OT,
        getSetHovering: yT,
        getPointerDownForIdx: fT,
        getPointerUpForIdx: xT,
        enchantingTablePosition: AT,
        enchantingTableBlockName: CT,
        selectedCraftable: jT,
        dispatchSelectedCraftable: vT,
        creativeScrollDiv: tT,
        creativeSearchVal: hT,
        setCreativeSearchVal: NT,
        creativeCategory: QT,
        setCreativeCategory: ST,
        onCraft: DT
      } = TT;
      const {
        userContext: aT
      } = (0, FT.b)(), {
        t: rT
      } = (0, nT.B)(), PT = (0, mT.e)("inventory", (TT => TT.chest)), wT = (0, mT.e)("inventory", (TT => TT.player.length)), bT = (0, mT.e)("inventory", (TT => TT.creative));
      if (0 === wT) return null;
      let zT, JT;
      const oT = TT => {
          const kT = wT + TT;
          return (0, IT.jsx)(bc.d, {
            idx: kT,
            draggedInfo: OT,
            specialItemInfo: KT.current,
            setHovered: yT(kT),
            pointerDown: fT(kT),
            pointerUp: xT(kT)
          }, kT)
        },
        HT = PT ? (0, Ql.c)(PT.type) : null;
      if (HT) zT = Dc()("InvenLeftSideChestCustom", HT.className), JT = (0, IT.jsx)("div", {
        className: "ChestItemSlotsWrapper",
        children: HT.render({
          sl: PT.pos,
          renderSlot: oT
        })
      });
      else if (PT) {
        const TT = PT.pos,
          kT = "Iron" === PT.type || "Moonstone" === PT.type ? PT.type : "Standard";
        let cT = !1,
          lT = null;
        "Iron" === kT && (cT = PT.ironChest.ownerDbId === aT.whamm, lT = PT.ironChest.CO), zT = `InvenLeftSideChest${kT}`;
        const MT = Dl(PT.numSlots);
        JT = (0, IT.jsxs)("div", {
          className: "ChestItemSlotsWrapper",
          children: [cT && (0, IT.jsx)(rl, {
            sl: TT,
            initialPasskey: lT
          }), MT && (0, IT.jsx)(Fl, {
            numSlots: PT.numSlots,
            renderSlot: oT
          }), !MT && (0, IT.jsxs)("div", {
            className: "ChestItemSlots",
            children: [(0, IT.jsx)("div", {
              className: "InvenLeftSideHeader SmallTextBold",
              children: rT("Moonstone" === kT ? "item:moonstoneChest" : "Iron" === kT ? "item:ironChest" : "item:chest")
            }), (0, IT.jsx)("div", {
              className: "GridItemSlots",
              children: new Array(PT.numSlots).fill(0).map(((TT, kT) => oT(kT)))
            })]
          })]
        })
      } else if (!bT || kT && cT)
        if (cT && "Enchanting Table" === kT) zT = `InvenLeftSide${(null!==CT&&void 0!==CT?CT:"").replace(/ /gi,"")}`, JT = (0, IT.jsx)(zc, {
          specialItemInfo: KT.current,
          setHovered: yT,
          pointerDown: fT(Cc.g),
          pointerUp: xT(Cc.g),
          enchantingTablePosition: AT,
          enchantingTableBlockName: CT
        });
        else if (cT && "Salvaging Table" === kT) zT = "InvenLeftSideSalvagingTable", JT = (0, IT.jsx)(oc, {
        specialItemInfo: KT.current,
        setSpecialItemInfo: TT => {
          KT.current = TT
        },
        setHovered: yT,
        pointerDown: fT(Cc.g),
        pointerUp: xT(Cc.g)
      });
      else {
        if (!cT) return null;
        zT = `InvenLeftSide${(null!==kT&&void 0!==kT?kT:"HandCrafting").replace(/ /gi,"")}`, JT = (0, IT.jsx)(Kl, {
          show: lT,
          onCraft: DT,
          craftingStation: kT,
          selectedCraftable: jT,
          dispatchSelectedCraftable: vT,
          setHovered: yT()
        })
      } else zT = "InvenLeftSideCreative", JT = MT ? (0, IT.jsx)(tl, {
        creativeScrollDiv: tT,
        playerInvenNumSlots: wT,
        getSetHoveringForIdx: yT,
        getPointerDownForIdx: fT,
        getPointerUpForIdx: xT,
        creativeSearchVal: hT,
        setCreativeSearchVal: NT,
        creativeCategory: QT,
        setCreativeCategory: ST,
        show: lT
      }) : null;
      const eT = !!PT || cT && !!kT;
      return (0, IT.jsx)("div", {
        className: `InvenLeftSide ${zT}`,
        "data-pad-inventory-start": eT ? "" : void 0,
        children: JT
      })
    }
    var wl = cT(606),
      ml = cT(20185),
      bl = cT(20193),
      zl = cT(20199);
    const Jl = {
      Helmet: {
        sprite: "empty_armor_slot_helmet",
        image: cT(20203)
      },
      Chestplate: {
        sprite: "empty_armor_slot_chestplate",
        image: bl
      },
      Gauntlets: {
        sprite: "empty_armor_slot_gauntlets",
        image: zl
      },
      Leggings: {
        sprite: "empty_armor_slot_leggings",
        image: cT(20205)
      },
      Boots: {
        sprite: "empty_armor_slot_boots",
        image: ml
      }
    };

    function ol(TT) {
      const {
        sprite: kT,
        image: cT
      } = Jl[TT];
      return Bk(kT, gk.h.ITEM, cT)
    }

    function Hl(TT) {
      let {
        draggedInfo: kT,
        specialItemInfo: cT,
        craftFlyAnims: lT,
        getSetHovering: MT,
        getPointerDownForIdx: KT,
        getPointerUpForIdx: OT,
        variation: yT,
        canCraft: fT,
        isNewSlot: xT
      } = TT;
      const AT = (0, mT.e)("inventory", (TT => TT.player.length));
      return 0 === AT ? null : (0, IT.jsxs)("div", {
        className: "InvenBodyRight",
        children: [(0, IT.jsx)("div", {
          className: "ArmourItemSlots",
          children: new Array(wl.b.length).fill(0).map(((TT, CT) => {
            const jT = AT - wl.b.length + CT;
            return (0, IT.jsx)(bc.d, {
              idx: jT,
              draggedInfo: kT,
              specialItemInfo: cT,
              craftFlyHoldbackInfo: (0, Ac.f)(lT, jT),
              setHovered: MT(jT),
              pointerDown: KT(jT),
              pointerUp: OT(jT),
              defaultIconB64: ol(wl.b[CT]),
              variation: fT ? yT : void 0,
              showNewDot: xT(jT)
            }, jT)
          }))
        }), (0, IT.jsx)("div", {
          className: "GridItemSlots",
          children: new Array(AT - 10 - wl.b.length).fill(0).map(((TT, CT) => {
            const jT = AT - wl.b.length - CT - 1;
            return (0, IT.jsx)(bc.d, {
              idx: jT,
              draggedInfo: kT,
              specialItemInfo: cT,
              craftFlyHoldbackInfo: (0, Ac.f)(lT, jT),
              setHovered: MT(jT),
              pointerDown: KT(jT),
              pointerUp: OT(jT),
              variation: fT ? yT : void 0,
              showNewDot: xT(jT)
            }, jT)
          }))
        })]
      })
    }
    var el = cT(36660),
      Gl = cT(36669);

    function Vl(TT) {
      const {
        e: kT,
        idx: cT
      } = TT, lT = (0, Ic.i)(TT.readInventory(), cT), MT = (0, Ic.o)(kT);
      cT === Cc.d ? function(TT, kT) {
        const {
          draggedInfoRef: cT,
          removeItem: lT,
          removeDraggedInfoRef: MT,
          close: KT
        } = TT;
        if (cT.current) {
          const TT = kT && cT.current.amount || 1;
          lT(cT.current.idx, TT, !0) && (cT.current.amount -= TT, cT.current.amount <= 0 && MT())
        } else kT && KT()
      }(TT, MT) : cT === Cc.g ? function(TT, kT) {
        const {
          e: cT,
          draggedInfoRef: lT,
          specialItemRef: MT,
          moveAmtIntoSlot: KT,
          removeDraggedInfoRef: OT
        } = TT;
        if ((0, Ic.y)(cT) && MT.current) MT.current = null;
        else if (lT.current && MT.current && (lT.current.idx === MT.current.idx || (0, Gl.c)(lT.current, MT.current)) && lT.current.amount > 0 && MT.current.amount > 0 && MT.current.amount < ac.f.maxItemStackSize)
          if (lT.current.idx === MT.current.idx) {
            if (kT) {
              const TT = Math.min(lT.current.amount, ac.f.maxItemStackSize - MT.current.amount);
              MT.current.amount += TT, lT.current.amount -= TT
            } else lT.current.amount--, MT.current.amount++;
            lT.current.amount <= 0 && OT()
          } else if (kT) {
          const TT = Math.min(lT.current.amount, ac.f.maxItemStackSize - MT.current.amount);
          KT(MT.current.idx, TT) && (MT.current.amount += TT)
        } else {
          KT(MT.current.idx, 1) && MT.current.amount++
        } else if (!lT.current || MT.current || kT) {
          const TT = lT.current;
          lT.current = MT.current, MT.current = TT
        } else lT.current.amount--, MT.current = {
          idx: lT.current.idx,
          name: lT.current.name,
          attributes: lT.current.attributes,
          amount: 1
        }
      }(TT, MT) : (0, Ic.y)(kT) ? function(TT, kT) {
        var cT, lT;
        const {
          idx: MT,
          draggedInfoRef: KT,
          specialItemRef: OT,
          canCraft: yT,
          variation: fT,
          swapSlots: xT,
          moveIntoSlots: IT
        } = TT;
        if (!kT) return;
        let AT = kT.amount;
        MT === (null === (cT = KT.current) || void 0 === cT ? void 0 : cT.idx) && (AT = KT.current.amount <= 0 ? 0 : kT.amount - KT.current.amount);
        MT === (null === (lT = OT.current) || void 0 === lT ? void 0 : lT.idx) && (AT = OT.current.amount <= 0 ? 0 : kT.amount - OT.current.amount);
        if (0 === AT) return;
        const CT = TT.readInventory(),
          jT = CT.player.length,
          vT = CT.chest,
          tT = jT - wl.b.length,
          hT = () => {
            if (!(0, Kc.h)()) return void IT(10, tT, MT, AT);
            const TT = TT => {
              const cT = (0, Ic.i)(CT, TT);
              return cT ? {
                amount: cT.amount,
                stacksWithMoved: (0, Gl.c)(cT, kT)
              } : null
            };
            for (const kT of ((TT, kT, cT, lT, MT) => {
                const KT = [];
                let OT = lT;
                if (null !== lT) {
                  let yT = 0;
                  for (let lT = kT; lT < cT; lT++) {
                    const kT = TT(lT);
                    null !== kT && void 0 !== kT && kT.stacksWithMoved && null !== kT.amount && kT.amount > 0 && (yT += Math.max(0, MT - kT.amount))
                  }
                  const fT = Math.min(lT, yT);
                  if (fT > 0 && (KT.push({
                      start: kT,
                      end: cT,
                      amount: fT
                    }), OT = lT - fT), OT <= 0) return KT
                }
                for (let yT = cT - 1; yT >= kT; yT--)
                  if (null === TT(yT)) {
                    KT.push({
                      start: yT,
                      end: yT + 1,
                      amount: OT
                    });
                    break
                  } return KT
              })(TT, 10, tT, AT, ac.f.maxItemStackSize)) IT(kT.start, kT.end, MT, kT.amount)
          };
        if (!yT || "Enchanting Table" !== fT && "Salvaging Table" !== fT) {
          const cT = (0, wT.sb)(kT.name),
            lT = cT ? (0, wT.pb)(cT) : null;
          if (!wl.b.includes(cT) || MT !== lT && (0, Ic.m)(CT, TT.itemInfo, lT, MT))
            if (vT)
              if (MT < jT) {
                var NT, QT;
                const [TT, kT] = null !== (NT = null === (QT = (0, Ql.c)(vT.type)) || void 0 === QT ? void 0 : QT.quickMoveRange) && void 0 !== NT ? NT : [0, vT.numSlots];
                IT(jT + TT, jT + kT, MT, AT)
              } else IT(0, jT - wl.b.length, MT, AT);
          else CT.creative ? MT < 10 ? hT() : MT < jT ? IT(0, 10, MT, AT) : IT(0, jT - wl.b.length, MT, null !== kT.amount ? ac.f.maxItemStackSize : null) : MT < 10 ? hT() : IT(0, 10, MT, AT);
          else MT < jT - wl.b.length || MT >= jT ? xT(lT, MT) : (IT(0, jT - wl.b.length, lT, AT), fc.d.play("equip_leather1", 1).rate(.9 + .3 * Math.random()))
        } else OT.current = {
          idx: MT,
          name: kT.name,
          attributes: kT.attributes,
          amount: null !== kT.amount ? AT : 0
        }
      }(TT, lT) : TT.draggedInfoRef.current ? function(TT, kT, cT, lT) {
        const {
          draggedInfoRef: MT,
          specialItemRef: KT,
          moveAmtIntoSlot: OT,
          swapSlots: yT,
          removeItem: fT,
          removeDraggedInfoRef: xT
        } = TT, IT = TT.readInventory(), AT = MT.current.idx;
        if (cT && (kT === AT || (0, Gl.c)(MT.current, cT)) && MT.current.amount > 0 && (0, Ic.b)(cT) > 0 && (cT.amount < ac.f.maxItemStackSize || kT === AT)) lT ? cT.amount + MT.current.amount <= ac.f.maxItemStackSize || kT === AT ? OT(kT, MT.current.amount) : OT(kT, ac.f.maxItemStackSize - cT.amount) : OT(kT, 1);
        else if (MT.current.amount > 0 && !cT) OT(kT, lT ? MT.current.amount : 1);
        else if (lT || cT || 0 === MT.current.amount)
          if (IT.creative && !IT.chest && kT >= IT.player.length) {
            const TT = 0 === MT.current.amount ? 1 : MT.current.amount;
            fT(MT.current.idx, TT, !1) && xT()
          } else {
            var CT;
            const cT = (null === (CT = KT.current) || void 0 === CT ? void 0 : CT.idx) === kT;
            if (yT(kT, MT.current.idx)) {
              const lT = TT.readInventory(),
                OT = (0, Ic.i)(lT, AT),
                yT = !lT.chest && lT.creative && MT.current.idx >= lT.player.length;
              if (OT && MT.current.idx !== kT && !yT) {
                let TT = (0, Ic.b)(OT);
                cT && (TT -= KT.current.amount), MT.current = cT && 0 === TT ? null : {
                  idx: MT.current.idx,
                  name: OT.name,
                  attributes: OT.attributes,
                  amount: TT
                }
              } else xT()
            }
          }
        else OT(kT, 1)
      }(TT, cT, lT, MT) : function(TT, kT, cT, lT) {
        var MT;
        const {
          draggedInfoRef: KT,
          specialItemRef: OT
        } = TT;
        if (!cT) return;
        let yT = (0, Ic.b)(cT);
        const fT = (null === (MT = OT.current) || void 0 === MT ? void 0 : MT.idx) === kT;
        fT && (yT -= OT.current.amount);
        lT || (yT = Math.ceil(yT / 2));
        KT.current = fT && 0 === yT ? null : {
          idx: kT,
          name: cT.name,
          attributes: cT.attributes,
          amount: yT
        }
      }(TT, cT, lT, MT)
    }

    function El(TT, kT) {
      return !!kT && kT.name === TT.name
    }

    function Zl() {
      return xT.gameBridge.latest("inventory")
    }

    function ul(TT, kT, cT) {
      return xT.gameBridge.send("removeInventoryItem", {
        slot: TT,
        amount: kT,
        drop: cT
      })
    }

    function Xl(TT) {
      return (0, Ic.g)(TT, xT.gameBridge.latest("itemInfo"), xT.gameBridge.latest("stationItems").enchantable)
    }

    function dl(TT) {
      let {
        show: kT,
        close: cT,
        canCraft: lT,
        variation: KT,
        inventoryItemsMoveable: OT,
        setCraftFlyAnims: yT
      } = TT;
      (0, mT.h)("itemInfo");
      const [fT, IT] = (0, MT.useState)(null), [AT, CT] = (0, MT.useState)(null), [jT, vT] = (0, MT.useState)(!1), tT = (0, MT.useRef)(null), hT = (0, MT.useRef)(null), NT = (0, MT.useRef)(null), QT = (0, MT.useRef)(null), [ST, DT] = (0, MT.useReducer)((TT => TT + 1), 0), aT = (0, MT.useCallback)((() => {
        kT && DT()
      }), [kT, DT]), FT = (0, MT.useCallback)((() => {
        hT.current = null, VT.current = null, aT()
      }), [aT]), rT = (0, MT.useCallback)(((TT, kT) => {
        yT((cT => cT.map((cT => "ingredient" === cT.kind ? cT : cT.oI === TT ? {
          ...cT,
          oI: kT,
          to: (0, Ic.d)(kT)
        } : cT.oI === kT ? {
          ...cT,
          oI: TT,
          to: (0, Ic.d)(TT)
        } : cT))))
      }), [yT]), PT = (0, MT.useCallback)(((TT, kT) => {
        const cT = uT.current;
        if (cT.x = TT, cT.y = kT, tT.current) !XT.current.isTouch || XT.current.itemBeingDragged && !VT.current ? (tT.current.style.transform = `translate(${cT.x}px, ${cT.y}px)`, vT(XT.current.isTouch && !VT.current)) : (tT.current.style.transform = "translate(0.5rem, 0.5rem)", vT(!0));
        else if (QT.current) {
          const cT = QT.current;
          let lT = TT + 10,
            MT = kT + 10;
          const KT = cT.offsetWidth,
            OT = cT.offsetHeight;
          lT + KT > window.innerWidth && (lT = TT - KT - 10), MT + OT > window.innerHeight && (MT = kT - OT - 10), lT < 0 && (lT = 0), MT < 0 && (MT = 0), QT.current.style.transform = `translate(${lT}px, ${MT}px)`
        }
      }), []), bT = (0, MT.useCallback)((TT => (kT, cT, lT) => {
        if (IT(kT && void 0 !== TT ? TT : null), kT) {
          if (void 0 === TT && !cT) return void(0, el.c)("Error in invenComp", new Error("isHovering true but no idx or text"));
          if (void 0 !== TT) {
            var MT;
            const kT = Zl();
            let cT;
            if (cT = TT === Cc.g ? NT.current ? (0, Ic.i)(kT, NT.current.idx) : null : (0, Ic.i)(kT, TT), !cT) return void CT(null);
            if ((null === (MT = NT.current) || void 0 === MT ? void 0 : MT.idx) === TT) {
              if (0 === (0, Ic.b)(cT) - NT.current.amount) return void CT(null)
            }
            CT(Xl(cT))
          } else CT({
            name: cT.name,
            desc: cT.desc,
            fontStyle: "normal"
          })
        } else CT(null);
        lT && setTimeout((() => {
          PT(lT.pageX, lT.pageY)
        }), 0)
      }), [PT]), zT = (0, MT.useCallback)(((TT, kT) => {
        const cT = xT.gameBridge.send("moveInventoryItem", {
          from: hT.current.idx,
          to: TT,
          amount: kT
        });
        return cT ? (hT.current.amount -= kT, hT.current.amount <= 0 && FT()) : console.error("moveInventoryItem failed"), cT
      }), [FT]), JT = (0, MT.useCallback)(((TT, kT) => {
        const cT = NT.current,
          lT = null === cT || void 0 === cT ? void 0 : cT.idx;
        cT && (cT.idx = function(TT, kT, cT) {
          return TT === kT ? cT : TT === cT ? kT : TT
        }(lT, TT, kT));
        const MT = xT.gameBridge.send("swapInventorySlots", {
          a: TT,
          b: kT
        });
        return MT ? rT(TT, kT) : cT && (cT.idx = lT), MT
      }), [rT]), oT = (0, MT.useCallback)(((TT, kT, cT, lT) => {
        const MT = xT.gameBridge.send("quickMoveInventoryItem", {
          slot: cT,
          start: TT,
          end: kT,
          amount: lT
        });
        null !== MT && rT(cT, MT)
      }), [rT]), HT = (0, MT.useCallback)(((TT, kT) => {
        var MT;
        ((TT, kT, cT) => {
          const lT = TT - (cT - wl.b.length);
          return !(!kT || lT < 0 || lT >= wl.b.length) && (0, wT.sb)(kT) !== wl.b[lT]
        })(kT, null === (MT = hT.current) || void 0 === MT ? void 0 : MT.name, Zl().player.length) || (Vl({
          e: TT,
          idx: kT,
          readInventory: Zl,
          itemInfo: xT.gameBridge.latest("itemInfo"),
          draggedInfoRef: hT,
          specialItemRef: NT,
          moveAmtIntoSlot: zT,
          swapSlots: JT,
          moveIntoSlots: oT,
          removeItem: ul,
          removeDraggedInfoRef: FT,
          close: cT,
          canCraft: lT,
          variation: KT
        }), aT())
      }), [lT, cT, zT, oT, FT, JT, KT, aT]), eT = (0, MT.useRef)(0), GT = (0, MT.useRef)(null), VT = (0, MT.useRef)(null), ET = (0, MT.useRef)(null), ZT = (0, MT.useRef)(new Set), uT = (0, MT.useRef)({
        x: 0,
        y: 0
      }), XT = (0, MT.useRef)({
        isTouch: !1,
        itemBeingDragged: !1
      }), dT = (0, MT.useCallback)((() => (ET.current = null, XT.current.itemBeingDragged = !1, clearTimeout(GT.current), !!VT.current && (VT.current = null, aT(), !0))), [aT]);
      (0, MT.useEffect)((() => {
        dT(), ZT.current.clear()
      }), [kT]);
      const LT = TT => void 0 !== TT && (ZT.current.has(TT) || null !== ET.current && TT !== ET.current),
        RT = TT => {
          XT.current.isTouch = (0, Ic.s)(TT)
        },
        gT = (0, MT.useCallback)((TT => kT => {
          const lT = (0, Ic.s)(kT);
          if (lT || PT(kT.pageX, kT.pageY), OT)
            if (LT(kT.pointerId)) void 0 !== kT.pointerId && ZT.current.add(kT.pointerId);
            else {
              if (RT(kT), lT) {
                eT.current = kT.timeStamp, XT.current.itemBeingDragged = !0, ET.current = kT.pointerId;
                const cT = (0, Ic.i)(Zl(), TT);
                if (cT && cT.amount && cT.amount > 0) {
                  const cT = kT.pageX,
                    lT = kT.pageY,
                    MT = uT.current.x,
                    KT = uT.current.y;
                  clearTimeout(GT.current), GT.current = setTimeout((() => {
                    if (hT.current && hT.current.idx === TT && (Math.abs(cT - uT.current.x) < 20 && Math.abs(lT - uT.current.y) < 20 || MT === uT.current.x && KT === uT.current.y) && XT.current.itemBeingDragged) {
                      const TT = Zl(),
                        cT = TT.creative && !TT.chest && hT.current.idx >= ac.f.numInvenSlots && null !== (0, Ic.i)(TT, hT.current.idx).amount ? ac.f.maxItemStackSize : hT.current.amount;
                      VT.current = {
                        initTouchX: kT.pageX,
                        initTouchY: kT.pageY,
                        maxAmount: cT
                      }, hT.current.amount = Math.ceil(hT.current.amount / 2), tT.current.style.transform = "translate(0.5rem, 0.5rem)", vT(!0), aT()
                    }
                  }), 500)
                }
              }
              HT(kT, TT)
            }
          else TT === Cc.d && (0, Ic.o)(kT) && cT()
        }), [PT, HT, OT, cT, aT]),
        UT = (0, MT.useCallback)((TT => TT => {
          if (LT(TT.pointerId)) return;
          const kT = (0, Ic.s)(TT);
          if (RT(TT), !dT()) {
            if (kT && hT.current && TT.timeStamp - eT.current > 150) {
              const kT = document.elementFromPoint(TT.clientX, TT.clientY);
              if (null !== kT) {
                const cT = kT.getAttribute("data-inven-idx");
                null !== cT ? HT(TT, parseInt(cT)) : kT.classList.contains("InventoryBackgroundScreen") && HT(TT, -1)
              }
            }
            PT(TT.pageX, TT.pageY)
          }
        }), [PT, HT, dT]);
      (0, MT.useEffect)((() => {
        let TT;
        const cT = ["pointerup", "pointercancel"],
          lT = TT => {
            ZT.current.has(TT.pointerId) ? setTimeout((() => {
              ZT.current.delete(TT.pointerId)
            }), 0) : TT.pointerId === ET.current && setTimeout((() => {
              ET.current === TT.pointerId && dT()
            }), 0)
          };
        if (kT) {
          for (const TT of cT) document.addEventListener(TT, lT, !0);
          if (!XT.current.isTouch) {
            const TT = uT.current;
            PT(TT.x, TT.y)
          }
          TT = TT => {
            TT.preventDefault(), LT(TT.pointerId) || (RT(TT), PT(TT.pageX, TT.pageY), VT.current && TT.pointerId === ET.current && (TT => {
              if (!hT.current) return VT.current = null, void aT();
              const {
                initTouchX: kT,
                maxAmount: cT
              } = VT.current, lT = (TT.pageX - kT) * VT.current.maxAmount / 160, MT = Math.ceil(cT / 2) + Math.ceil(lT);
              hT.current.amount = Math.min(cT, Math.max(1, MT)), aT()
            })(TT))
          }, document.addEventListener("pointermove", TT, !0)
        }
        return () => {
          document.removeEventListener("pointermove", TT, !0);
          for (const TT of cT) document.removeEventListener(TT, lT, !0)
        }
      }));
      const YT = (0, MT.useCallback)((() => {
          if (hT.current) {
            const TT = (0, Ic.i)(Zl(), hT.current.idx);
            (!El(hT.current, TT) || TT.amount < hT.current.amount) && FT()
          }
        }), [FT]),
        BT = (0, MT.useCallback)((() => {
          const TT = hT.current;
          if (TT) {
            const kT = (0, Ic.i)(Zl(), TT.idx);
            El(TT, kT) && (TT.attributes = kT.attributes)
          }
        }), []);
      return {
        draggedDomRef: tT,
        draggedInfoRef: hT,
        specialItemRef: NT,
        hoverInfoDomRef: QT,
        longHoldSplitInfoRef: VT,
        currHoveredIdx: fT,
        currHoveredDisplayInfo: AT,
        displayDraggedItemName: jT,
        forceRerenderIfVisible: aT,
        removeDraggedInfoRef: FT,
        checkDraggedItemConsistencyWithInven: YT,
        refreshDraggedAttributes: BT,
        swapSlots: JT,
        getPointerDownForIdx: gT,
        getPointerUpForIdx: UT,
        getSetHovering: bT,
        setCurrHoveredDisplayInfo: CT,
        moveFollowerTo: PT
      }
    }
    class Ll {
      constructor(TT) {
        this.snapshot = [], this.newSlots = new Set, this.update(TT, !1)
      }
      update(TT, kT) {
        const cT = TT.map((TT => {
          var kT;
          return TT ? {
            name: TT.name,
            amount: null !== (kT = TT.amount) && void 0 !== kT ? kT : 1
          } : null
        }));
        cT.forEach(((TT, cT) => {
          const lT = this.snapshot[cT],
            MT = (null === TT || void 0 === TT ? void 0 : TT.name) !== (null === lT || void 0 === lT ? void 0 : lT.name);
          (!TT || MT || TT.amount < lT.amount) && this.newSlots.delete(cT), kT && TT && (MT || TT.amount > lT.amount) && this.newSlots.add(cT)
        })), this.snapshot = cT
      }
      clearMarks() {
        this.newSlots.clear()
      }
      isNew(TT) {
        return this.newSlots.has(TT)
      }
    }
    const Rl = (TT, kT, cT) => ({
      button: kT,
      shiftKey: cT,
      pageX: TT.clientX,
      pageY: TT.clientY,
      clientX: TT.clientX,
      clientY: TT.clientY,
      pointerType: "mouse"
    });

    function gl(TT) {
      const [kT, cT] = (0, MT.useState)(TT);
      return TT && !kT && cT(!0), (0, MT.useEffect)((() => {
        if (kT) return;
        let TT = !0;
        const lT = () => {
            TT && (TT = !1, cT(!0))
          },
          MT = "function" === typeof window.requestIdleCallback,
          KT = MT ? window.requestIdleCallback(lT, {
            timeout: 2e3
          }) : void 0,
          OT = setTimeout(lT, MT ? 2e3 : 1e3);
        return () => {
          TT = !1, clearTimeout(OT), void 0 !== KT && window.cancelIdleCallback(KT)
        }
      }), [kT]), kT
    }
    const Ul = (0, MT.memo)((function(TT) {
      var kT;
      let {
        show: cT,
        onOpen: lT,
        onClose: KT,
        variation: yT
      } = TT;
      const AT = (0, MT.useRef)(null),
        CT = (0, MT.useRef)(null),
        jT = function(TT) {
          const [kT, cT] = (0, MT.useState)(!0), [lT, KT] = (0, MT.useState)(!1), OT = (0, MT.useRef)(null), yT = (0, MT.useRef)(null), xT = (0, fT.f)("_shield"), IT = (0, MT.useRef)(null), AT = (0, fT.f)("_health"), CT = (0, MT.useRef)(null);

          function jT(TT) {
            const kT = Date.now() + TT;
            kT < yT.current || (cT(!1), clearTimeout(OT.current), yT.current = kT, OT.current = setTimeout((() => {
              cT(!0)
            }), TT))
          }
          return (0, MT.useEffect)((() => {
            jT(vc);
            const TT = vT.k.subscribe("requestingPlayVideoAd", (() => {
              jT(vc)
            }));
            return () => {
              clearTimeout(OT.current), vT.k.unsubscribe(TT)
            }
          }), []), (0, MT.useEffect)((() => {
            (IT.current > xT || CT.current > AT) && jT(6e4), IT.current = xT, CT.current = AT
          }), [xT, AT]), (0, MT.useEffect)((() => {
            let kT = null;
            return TT ? kT = setTimeout((() => {
              KT(!0)
            }), 250) : KT(!1), () => {
              clearTimeout(kT)
            }
          }), [TT]), kT && lT
        }(cT);
      (0, PT.i)(lc.d, null);
      const tT = (0, lc.l)(),
        hT = tT.some((TT => TT.panel)),
        NT = (0, mT.e)("inventory", (TT => null !== TT.chest && (null !== TT.chest.ironChest || Dl(TT.chest.numSlots)))),
        QT = gl(cT),
        ST = gl(cT),
        [DT, aT] = (0, MT.useState)([]),
        FT = (0, MT.useCallback)((TT => {
          aT((kT => kT.filter((kT => kT.id !== TT))))
        }), []),
        rT = (0, MT.useRef)(null),
        bT = (0, MT.useRef)(0),
        zT = (0, MT.useCallback)((() => {
          rT.current && (bT.current = rT.current.scrollTop), KT()
        }), [KT]),
        JT = (0, fT.f)("inventoryItemsMoveable"),
        oT = (0, fT.f)("canCraft"),
        {
          clientEscMenuOptions: HT
        } = (0, XT.n)(["clientEscMenuOptions"]),
        eT = (0, MT.useRef)(null);
      eT.current || (eT.current = new Ll(xT.gameBridge.latest("inventory").player));
      const VT = eT.current,
        {
          draggedDomRef: ET,
          draggedInfoRef: ZT,
          specialItemRef: uT,
          hoverInfoDomRef: dT,
          longHoldSplitInfoRef: LT,
          currHoveredIdx: RT,
          currHoveredDisplayInfo: gT,
          displayDraggedItemName: UT,
          forceRerenderIfVisible: YT,
          removeDraggedInfoRef: BT,
          checkDraggedItemConsistencyWithInven: WT,
          refreshDraggedAttributes: nT,
          swapSlots: pT,
          getPointerDownForIdx: iT,
          getPointerUpForIdx: qT,
          getSetHovering: sT,
          setCurrHoveredDisplayInfo: Tk,
          moveFollowerTo: kk
        } = dl({
          show: cT,
          close: zT,
          canCraft: oT,
          variation: yT,
          inventoryItemsMoveable: JT,
          setCraftFlyAnims: aT
        });
      (0, MT.useEffect)((() => {
        const TT = !cT && null !== xT.gameBridge.latest("inventory").chest;
        if (TT && xT.gameBridge.send("closeChest", null), cT || (VT.clearMarks(), sT(null)(!1)), TT) {
          fc.d.play("chestClose", 1).rate(.8 + .4 * Math.random())
        }
      }), [cT]), (0, mT.b)("chestToggled", (TT => {
        if (TT ? lT() : cT && zT(), TT) {
          fc.d.play("chestOpen", 1).rate(.8 + .4 * Math.random())
        }
      }));
      const ck = (0, Jk.m)();
      (0, mT.b)("inventory", (TT => {
        let {
          player: kT
        } = TT;
        var lT, MT, KT;
        (VT.update(kT, !cT && ck.shown), uT.current) && (uT.current = (MT = uT.current, KT = null !== (lT = kT[uT.current.idx]) && void 0 !== lT ? lT : null, El(MT, KT) ? (MT.attributes = KT.attributes, null !== KT.amount && MT.amount > KT.amount && (MT.amount = KT.amount), MT) : null));
        nT(), null !== RT && sT(RT)(!0), YT()
      })), (0, MT.useEffect)((() => (xT.gameBridge.send("setInventoryOpen", cT), () => {
        xT.gameBridge.send("setInventoryOpen", !1)
      })), [cT]);
      const lk = (TT, kT) => {
        if (TT === Cc.g) return void(TT => {
          const kT = uT.current;
          if (!kT || null === (0, Ic.i)(xT.gameBridge.latest("inventory"), kT.idx)) return;
          const cT = TT ? Math.max(kT.amount, 1) : 1,
            lT = kT.amount - cT;
          if (!xT.gameBridge.send("removeInventoryItem", {
              slot: kT.idx,
              amount: cT,
              drop: !0
            })) return;
          const MT = uT.current;
          MT && (MT.amount = Math.min(MT.amount, lT), MT.amount <= 0 && (uT.current = null)), YT()
        })(kT);
        const cT = null === TT ? null : (0, Ic.i)(xT.gameBridge.latest("inventory"), TT);
        if (null !== cT) {
          var lT, MT, KT;
          const OT = kT && null !== (lT = cT.amount) && void 0 !== lT ? lT : 1;
          xT.gameBridge.send("removeInventoryItem", {
            slot: TT,
            amount: OT,
            drop: !0
          }), TT === (null === (MT = ZT.current) || void 0 === MT ? void 0 : MT.idx) && (ZT.current.amount -= OT, ZT.current.amount <= 0 && BT(), YT()), TT === (null === (KT = uT.current) || void 0 === KT ? void 0 : KT.idx) && (uT.current = null, YT())
        }
      };
      (0, mT.b)("inventoryDropRequested", (TT => {
        cT && RT !== Cc.g && lk(RT, TT)
      }));
      const Mk = (TT, kT) => {
        let cT = kT;
        if (kT === Cc.g) {
          if (!uT.current) return;
          cT = uT.current.idx
        }
        const lT = pT(TT, cT);
        if (lT && ZT.current && (ZT.current.idx === cT ? ZT.current.idx = TT : ZT.current.idx === TT && (ZT.current.idx = cT)), lT && kT === Cc.g) {
          const TT = (0, Ic.i)(xT.gameBridge.latest("inventory"), cT);
          uT.current = TT ? {
            idx: cT,
            name: TT.name,
            attributes: TT.attributes,
            amount: TT.amount
          } : null
        }
        YT()
      };
      (0, mT.b)("numberKeyPressed", (TT => {
        null !== RT && cT && Mk(TT - 1, RT)
      })), (0, MT.useEffect)((() => {
        cT || (uT.current = null, BT(), Tk(null))
      }), [cT, BT, Tk, uT]);
      const Kk = uT.current;
      (0, MT.useEffect)((() => {
        RT === Cc.g && sT(Cc.g)(!0)
      }), [Kk, RT, sT]);
      const Ok = () => {
        WT(), nT(), YT()
      };
      (0, mT.b)("chestRefreshed", Ok), (0, mT.b)("inventorySynced", Ok);
      const [yk, fk] = (0, MT.useState)(new Map), xk = null !== (kT = yk.get(yT)) && void 0 !== kT ? kT : null, Ik = (TT, kT) => {
        fk((cT => {
          const lT = cT.get(TT);
          return lT && lT.name === kT.name && lT.Ty === kT.Ty ? cT : new Map(cT).set(TT, kT)
        }))
      };
      (0, PT.g)("craftingRecipesEdited", (() => {
        YT()
      })), (0, PT.g)(Yc.e, (TT => {
        let {
          variation: kT,
          itemName: cT
        } = TT;
        Ik(kT, {
          name: cT,
          Ty: 0
        })
      }));
      const [Ak, Ck] = (0, MT.useState)(null), [jk, vk] = (0, MT.useState)(null);
      (0, mT.b)("enchantingTableOpened", (TT => {
        let {
          position: kT,
          blockName: cT
        } = TT;
        Ck(kT), vk(cT)
      }));
      const [tk, hk] = (0, MT.useState)(""), [Nk, Qk] = (0, MT.useState)(null);
      (0, MT.useEffect)((() => {
        cT && rT.current && (rT.current.scrollTop = bT.current)
      }), [cT]);
      return (TT => {
        const kT = (0, MT.useRef)(TT);
        kT.current = TT, (0, MT.useEffect)((() => {
          if (!TT.show) return;
          const cT = (TT, cT, lT, MT) => {
              const {
                getPointerDownForIdx: KT,
                getPointerUpForIdx: OT
              } = kT.current;
              KT(TT)(Rl(cT, lT, MT)), OT(TT)(Rl(cT, lT, MT))
            },
            lT = {
              primary: (TT, kT) => {
                cT(TT, kT, 0, !1)
              },
              secondary: (TT, kT) => {
                cT(TT, kT, 2, !1)
              },
              quickMove: (TT, kT) => {
                cT(TT, kT, 0, !0)
              },
              dropHeld: (TT, cT) => {
                kT.current.getPointerDownForIdx(Cc.d)(Rl(cT, TT ? 0 : 2, !1))
              },
              dropSlot: (TT, cT) => {
                kT.current.dropFromIdx(TT, cT)
              },
              swapWithHotbar: (TT, cT) => {
                kT.current.swapWithHotbar(TT, cT)
              },
              cancel: () => {
                kT.current.removeDraggedInfoRef()
              },
              isHolding: () => !!kT.current.draggedInfoRef.current,
              hasItemAt: TT => {
                const {
                  draggedInfoRef: cT,
                  specialItemRef: lT
                } = kT.current;
                if (TT === Cc.g) return !!lT.current;
                const MT = (0, Ic.i)(xT.gameBridge.latest("inventory"), TT);
                return !!MT && (0, bc.g)(TT, (0, Ic.b)(MT), [cT.current, lT.current]).shown
              },
              hover: (TT, cT) => {
                const {
                  moveFollowerTo: lT,
                  getSetHovering: MT
                } = kT.current;
                lT(cT.clientX, cT.clientY), MT(null !== TT && void 0 !== TT ? TT : void 0)(null !== TT, void 0, {
                  pageX: cT.clientX,
                  pageY: cT.clientY
                })
              },
              moveTo: TT => {
                kT.current.moveFollowerTo(TT.clientX, TT.clientY)
              },
              close: () => {
                kT.current.close()
              }
            };
          return (0, Mc.o)(lT)
        }), [TT.show])
      })({
        show: cT,
        close: zT,
        draggedInfoRef: ZT,
        specialItemRef: uT,
        getPointerDownForIdx: iT,
        getPointerUpForIdx: qT,
        getSetHovering: sT,
        moveFollowerTo: kk,
        removeDraggedInfoRef: BT,
        dropFromIdx: lk,
        swapWithHotbar: Mk
      }), (0, MT.useEffect)((() => {
        vT.k.nt("inventoryDraggedItemUpdated", {
          draggedInfo: ZT.current,
          specialItemInfo: uT.current,
          setHovered: sT,
          pointerDown: iT,
          pointerUp: qT,
          variation: oT ? yT : void 0,
          craftFlyAnims: DT
        })
      })), (0, IT.jsxs)(GT.e, {
        show: cT,
        style: {
          touchAction: cT ? "none" : void 0
        },
        children: [ZT.current && (0, IT.jsx)(hc, {
          draggedInfo: ZT.current,
          toAddRef: ET
        }), ZT.current && UT && (0, IT.jsx)(Nc, {
          className: "DraggedInvenItemName",
          displayInfo: Xl(ZT.current),
          domRef: null
        }), !ZT.current && gT && (0, IT.jsx)(Nc, {
          displayInfo: gT,
          domRef: dT
        }), LT.current && ZT.current && (0, IT.jsx)(Qc, {
          info: LT.current,
          draggedInfo: ZT.current
        }), DT.map((TT => (0, IT.jsx)(Ac.b, {
          anim: TT,
          onComplete: FT
        }, TT.id))), (0, IT.jsx)(OT.c, {
          show: cT,
          className: "InventoryBackgroundScreen",
          globallyUniqueKey: "Inventory",
          close: zT,
          togglePointerLock: !1,
          closeOnPressBackground: !1,
          preventContextMenu: !0,
          pointerDown: iT(Cc.d),
          pointerUp: qT(Cc.d),
          doGameplayStartStopOnShow: !0
        }), QT && (0, IT.jsxs)("div", {
          className: "EntireInventoryWrapper",
          children: [(0, IT.jsx)("div", {
            ref: AT,
            className: "InventoryAdOuter",
            children: (0, IT.jsx)(xc.c, {
              info: {
                adType: "leaderboard",
                adId: 6,
                adAlias: "inventory"
              },
              sizeInfo: {
                parentRef: AT
              },
              verticalAlign: "start",
              showing: cT && jT,
              extraContrastBackgroundBox: "top",
              noFillShowBloxdAdProbability: 0,
              autoRefreshMode: "none"
            })
          }), (0, IT.jsxs)("div", {
            className: "InventoryWrapper",
            children: [(0, IT.jsxs)("div", {
              className: Dc()("Inventory", {
                WithPanelButtons: hT,
                WideChestOpen: NT
              }),
              children: [(0, IT.jsx)("div", {
                className: "InventoryFiller"
              }), (0, IT.jsx)(yc, {
                show: cT,
                buttons: tT
              }), (0, IT.jsxs)("div", {
                className: "InvenBody",
                children: [(0, IT.jsx)(Pl, {
                  variation: yT,
                  canCraft: oT,
                  show: cT,
                  creativeMounted: ST,
                  specialItemRef: uT,
                  draggedInfo: ZT.current,
                  getSetHovering: sT,
                  getPointerDownForIdx: iT,
                  getPointerUpForIdx: qT,
                  enchantingTablePosition: Ak,
                  enchantingTableBlockName: jk,
                  selectedCraftable: xk,
                  dispatchSelectedCraftable: TT => {
                    Ik(yT, TT)
                  },
                  creativeScrollDiv: rT,
                  creativeSearchVal: tk,
                  setCreativeSearchVal: hk,
                  creativeCategory: Nk,
                  setCreativeCategory: Qk,
                  onCraft: function(TT, kT) {
                    let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    if (WT(), (TT || cT.length > 0) && aT((kT => {
                        const lT = [...kT],
                          MT = kT.filter((TT => "ingredient" === TT.kind)).length;
                        for (const TT of cT.slice(0, Math.max(0, 24 - MT))) lT.push({
                          id: (0, Ac.c)(),
                          ...TT,
                          to: TT.to
                        });
                        return TT && lT.push({
                          id: (0, Ac.c)(),
                          ...TT,
                          to: (0, Ic.d)(TT.oI)
                        }), lT
                      })), null !== kT) {
                      var lT;
                      const TT = xT.gameBridge.latest("inventory");
                      (0, wT.sb)(null === (lT = (0, Ic.i)(TT, kT)) || void 0 === lT ? void 0 : lT.name) ? iT(kT)({
                        button: 0,
                        shiftKey: !0
                      }): pT(kT, TT.selectedSlot)
                    }
                  }
                }), (0, IT.jsx)(Hl, {
                  draggedInfo: ZT.current,
                  specialItemInfo: uT.current,
                  craftFlyAnims: DT,
                  getSetHovering: sT,
                  getPointerDownForIdx: iT,
                  getPointerUpForIdx: qT,
                  variation: yT,
                  canCraft: oT,
                  isNewSlot: TT => HT.showNewItemIndicator && VT.isNew(TT)
                })]
              })]
            }), (0, IT.jsx)("div", {
              className: "InventoryAdOuter",
              children: (0, IT.jsx)("div", {
                ref: CT,
                className: "InventoryAd",
                children: (0, IT.jsx)("div", {
                  className: "InventoryAdInner"
                })
              })
            })]
          })]
        })]
      })
    }));
    var Yl = cT(1452),
      Bl = cT(159);
    const Wl = (0, MT.memo)((function(TT) {
      let {
        show: kT,
        onOpen: cT,
        onClose: lT
      } = TT;
      const KT = (0, MT.useRef)(0),
        yT = () => (0, Yl.f)() && !(0, Yl.i)() && KT.current <= 2;
      kT = yT() && kT;
      const fT = () => {
        KT.current++, lT()
      };
      (0, PT.g)("ctrlCrouchWithoutFullscreen", (() => {
        yT() && cT()
      })), (0, PT.g)("displaymodeFullscreenChange", (TT => {
        kT && TT && fT()
      }));
      const xT = "crazygames" === Bl.u;
      return (0, IT.jsx)(OT.c, {
        close: fT,
        escDoesExit: !0,
        show: kT,
        togglePointerLock: !1,
        globallyUniqueKey: "CantCtrlCrouchIfNotFullscreenComp",
        children: (0, IT.jsxs)("div", {
          className: "CantCtrlCrouchIfNotFullscreenComp SmallTextBold",
          children: [(0, IT.jsx)("div", {
            className: "CantCtrlCrouchHeader",
            children: "Go fullscreen to crouch with ctrl"
          }), xT && (0, IT.jsx)("div", {
            className: "CantCtrlCrouchInstructions SmallTextLight",
            children: "Press the crazygames full screen button"
          }), (0, IT.jsx)("div", {
            className: "CantCtrlCrouchSubtext SmallTextLight",
            children: "(Otherwise I can't stop CTRL+W closing the window!)"
          }), (0, IT.jsxs)("div", {
            className: "CantCtrlCrouchButtonsContainer",
            children: [!xT && (0, IT.jsx)(jT.m, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                (0, Yl.m)(), fT()
              },
              children: (0, IT.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Go Fullscreen"
              })
            }), (0, IT.jsx)(jT.I, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                fT()
              },
              children: (0, IT.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Nevermind"
              })
            })]
          })]
        })
      })
    }));
    var nl = cT(3565),
      pl = cT(3592),
      il = cT(1363),
      ql = cT(3544),
      sl = cT(1370),
      TM = cT(36369),
      kM = cT(3551),
      cM = cT(3560);

    function lM(TT, kT) {
      return (0, TM.g)(!0, TT, kT) ? () => {
        !async function(TT) {
          await ql.d.refresh();
          const {
            data: kT,
            failed: cT
          } = ql.d.getState();
          if (null === kT || cT) return;
          const lT = ql.d.getExclusion(TT);
          if ("blocked" === lT) return;
          const MT = null === lT;
          il.NotificationProvider.showCustomPopup({
            body: kT => {
              const cT = cT => ({
                text: kM.k[cT].text,
                onClick: () => {
                  kT(), (0, cM.i)(cT, TT, null)
                }
              });
              return (0, IT.jsx)(sl.e, {
                title: MT ? "socialBar:ignoreOrBlockAfterReport" : "socialBar:blockAfterReport",
                textOpts: {
                  title: {
                    playerName: TT
                  }
                },
                secondary: MT ? cT("ignore") : void 0,
                confirm: cT("block"),
                cancel: {
                  text: "socialBar:notNow",
                  onClick: kT
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
    cT(3580);
    const MM = (0, MT.memo)((function(TT) {
      let {
        show: kT,
        onOpen: cT,
        onClose: lT
      } = TT;
      const [KT, yT] = (0, MT.useState)(""), [fT, AT] = (0, MT.useState)(""), [CT, jT] = (0, MT.useState)(null), [vT, tT] = (0, MT.useState)(null), hT = (0, mT.h)("hiddenPlayerNames"), NT = {
        kind: "worldCodeLine",
        onSubmit: (TT, kT) => {
          lT(), xT.gameBridge.send("reportWorldCodeChat", {
            chatMsgId: vT,
            dO: TT,
            details: kT
          })
        }
      }, QT = {
        kind: "player",
        shownPlayerName: (0, kk.f)(KT, hT),
        onSubmit: (TT, kT) => {
          lT(), (0, pl.b)({
            playerId: fT,
            playerName: KT,
            chatMsgId: vT,
            policyId: TT,
            details: kT,
            onAccepted: lM(KT, hT)
          })
        }
      };
      return (0, PT.g)("OpenReportMenu", (TT => {
        let {
          playerEId: kT,
          playerName: lT,
          vI: MT,
          serverChatMsgId: KT
        } = TT;
        AT(kT), yT(lT), jT(MT), tT(KT), cT()
      })), (0, IT.jsx)(OT.c, {
        show: kT,
        close: lT,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeReportComponent",
        children: (0, IT.jsx)("div", {
          className: "ReportPanel",
          children: kT && (0, IT.jsx)(nl.c, {
            reported: null === fT ? NT : QT,
            chatMessage: CT,
            inGame: !0,
            onCancel: lT
          })
        })
      })
    }));
    var KM = cT(36674);
    const OM = (0, MT.memo)((function(TT) {
      let {
        show: kT,
        onOpen: cT,
        onClose: lT
      } = TT;
      const {
        t: KT
      } = (0, nT.B)(), [yT, fT] = (0, MT.useState)(null), [AT, CT] = (0, MT.useState)(0);
      (0, PT.g)("OpenDiscordReportBox", (TT => {
        xT.gameBridge.send("requestDiscordReportKey", TT), CT(0), cT()
      }));
      const vT = () => {
        lT(), fT(null), CT(0)
      };
      return (0, PT.g)("setDiscordReportKey", (TT => {
        fT(TT)
      })), (0, IT.jsx)(OT.c, {
        show: kT,
        close: vT,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeDiscordReportComponent",
        children: (0, IT.jsx)("div", {
          className: "ReportPanel",
          children: (0, IT.jsx)(sl.e, {
            className: "ReportKeyBox",
            title: "report:discordReportTitle",
            subtitle: "report:discordReportDescription",
            confirm: {
              text: "report:openDiscord",
              onClick: () => {
                window.open(KM.e, "_blank", "noreferrer")
              },
              padMouseOnly: !0
            },
            cancel: {
              text: "general:cancel",
              onClick: vT
            },
            padStartsOn: "cancel",
            children: (0, IT.jsxs)("div", {
              className: "ReportKeyRow",
              children: [(0, IT.jsx)("div", {
                className: "ReportKeyInner",
                children: null !== yT && void 0 !== yT ? yT : KT("report:loadingReportKey")
              }), (0, IT.jsx)(jT.e, {
                className: "ReportKeyCopyButton",
                onClick: () => {
                  navigator.clipboard.writeText(yT).catch((TT => {
                    console.error("Failed to copy report key:", TT)
                  })), CT(Date.now())
                },
                disabled: Date.now() - AT < 1e3 || !yT,
                children: Date.now() - AT < 1e3 ? KT("general:copied") : KT("general:copy")
              })]
            })
          })
        })
      })
    }));
    var yM = cT(1292);
    const fM = {
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
      xM = (0, MT.memo)((function(TT) {
        let {
          show: kT,
          onOpen: cT,
          onClose: lT
        } = TT;
        const [KT, yT] = (0, MT.useState)(null), fT = (0, MT.useRef)(0), AT = (0, MT.useRef)(null), {
          t: CT
        } = (0, nT.B)();
        (0, PT.g)("EditCustomLobbyBlock", (TT => {
          let {
            pos: kT
          } = TT;
          yT(kT), null !== kT && cT(), AT.current.scrollTo(0, fT.current)
        }));
        const jT = TT => {
          xT.gameBridge.send("setCustomLobbyBlock", {
            pos: KT,
            blockName: TT
          }), lT()
        };
        return (0, IT.jsx)(OT.c, {
          className: "CustomLobbyBlockEditorOuter",
          close: lT,
          escDoesExit: !0,
          show: kT,
          togglePointerLock: !1,
          globallyUniqueKey: "CustomLobbyBlockEditor",
          children: (0, IT.jsx)("div", {
            className: "CustomLobbyBlockEditor",
            ref: AT,
            onScroll: () => {
              fT.current = AT.current.scrollTop
            },
            children: (0, IT.jsx)("div", {
              className: "CustomLobbyBlockGameContainer",
              children: Object.entries(fM).map((TT => {
                let [kT, cT] = TT;
                return (0, IT.jsxs)("div", {
                  className: "CustomLobbyBlockGame",
                  children: [(0, IT.jsx)("h2", {
                    className: "CustomLobbyBlockGameTitle",
                    children: CT(kT)
                  }), (0, IT.jsx)("div", {
                    className: "CustomLobbyBlockCategoryContainer",
                    children: Object.entries(cT).map((TT => {
                      let [kT, {
                        tooltip: cT,
                        blocks: lT
                      }] = TT;
                      return (0, IT.jsxs)("div", {
                        className: "CustomLobbyBlockCategory",
                        children: [(0, IT.jsxs)("h3", {
                          className: "CustomLobbyBlockCategoryTitle",
                          children: [CT(kT), (0, IT.jsx)(BT.b, {
                            hoverInfo: CT(cT),
                            className: "CustomLobbyBlockTooltip"
                          })]
                        }), (0, IT.jsx)("div", {
                          className: "CustonLobbyBlockContainer",
                          children: lT.map((TT => (0, IT.jsx)(IM, {
                            blockName: TT,
                            selectBlock: jT
                          }, TT)))
                        })]
                      }, kT)
                    }))
                  })]
                }, kT)
              }))
            })
          })
        })
      })),
      IM = (0, MT.memo)((function(TT) {
        var kT;
        let {
          blockName: cT,
          selectBlock: lT
        } = TT;
        const MT = (0, yl.e)(cT),
          KT = null !== (kT = void 0 === MT ? void 0 : (0, Ol.displayNameOf)(MT)) && void 0 !== kT ? kT : cT,
          OT = void 0 === MT ? void 0 : (0, Ol.descriptionOf)(MT);
        return (0, IT.jsx)(BT.c, {
          tooltipInner: (0, IT.jsxs)("div", {
            className: "CustomLobbyBlockNameTooltip",
            children: [(0, IT.jsx)("div", {
              className: "CustomLobbyBlockName",
              children: (0, IT.jsx)(rT.b, {
                text: KT
              })
            }), OT && (0, IT.jsx)("div", {
              className: "CustomLobbyBlockDescription",
              children: (0, IT.jsx)(rT.b, {
                text: OT
              })
            })]
          }),
          children: (0, IT.jsx)("div", {
            className: "CustomLobbyBlockButton",
            onClick: () => lT(cT),
            children: (0, IT.jsx)(Oc.d, {
              itemName: cT,
              amount: 1
            })
          })
        }, cT)
      }));
    var AM = cT(2938),
      CM = cT(4224),
      jM = cT(9395);

    function vM() {
      const TT = (0, mT.h)("itemInfo");
      return (0, MT.useMemo)((() => function(TT) {
        return {
          getDefaultItemStat(kT, cT) {
            var lT;
            const MT = TT[kT];
            return "description" === cT ? null === MT || void 0 === MT ? void 0 : MT.description : null !== (lT = null === MT || void 0 === MT ? void 0 : MT.displayName) && void 0 !== lT ? lT : kT
          }
        }
      }(TT)), [TT])
    }
    const tM = (0, MT.memo)((function(TT) {
        var kT, cT, lT, KT, yT, fT, xT, AT, CT, jT, vT, tT, NT, QT, ST, DT, aT, FT, rT, wT, mT, bT, zT;
        let {
          togglePointerLock: JT,
          show: oT,
          onOpen: HT,
          onClose: eT
        } = TT;
        const {
          t: GT
        } = (0, nT.B)(), VT = vM(), ET = (0, MT.useRef)(null), ZT = (0, MT.useRef)(CM.d.MobHungerLevel.Hungry), uT = (0, MT.useRef)(null), XT = (0, AM.b)(), dT = (0, MT.useRef)(null), LT = (0, MT.useRef)(null), RT = ET.current;
        (0, MT.useEffect)((() => {
          if (!oT) return;
          const TT = jM.f.openPet(dT.current);
          return LT.current = TT, () => {
            TT.close(), LT.current = null
          }
        }), [oT]), (0, MT.useEffect)((() => {
          oT && RT && LT.current.show(function(TT) {
            var kT;
            let {
              mobType: cT,
              mobSettings: lT
            } = TT;
            return {
              mobType: cT,
              variation: null !== (kT = lT.variation) && void 0 !== kT ? kT : "default",
              metaInfo: lT.metaInfo,
              tamed: !(0, Sl.R)(lT.ownerDbId)
            }
          }(RT))
        }), [oT, RT]), (0, MT.useEffect)((() => {
          const TT = () => {
            var TT;
            const kT = CM.d.getMobHungerLevel(null === (TT = ET.current) || void 0 === TT ? void 0 : TT.mobSettings.petInfo.lastFedAt);
            if (kT !== ZT.current && (ZT.current = kT, XT()), uT.current) {
              var cT;
              const TT = Date.now(),
                kT = CM.d.getNextStateAt(null === (cT = ET.current) || void 0 === cT ? void 0 : cT.mobSettings.petInfo.lastFedAt);
              let lT = Math.floor((kT - TT) / 1e3),
                MT = "";
              if (lT > 3600) {
                MT += Math.floor(lT / 60 / 60).toString().padStart(2, "0"), MT += ":", lT %= 3600
              }
              const KT = lT % 60;
              MT += Math.floor(lT / 60).toString().padStart(2, "0"), MT += ":", MT += KT.toString().padStart(2, "0"), uT.current.textContent = MT
            }
          };
          TT();
          const kT = setInterval(TT, 250);
          return () => {
            clearInterval(kT)
          }
        }), [RT, XT]), (0, PT.g)("showPetUi", (TT => {
          let {
            mobType: kT,
            mobSettings: cT
          } = TT;
          ET.current = {
            mobType: kT,
            mobSettings: cT
          }, oT || HT()
        }));
        const gT = null === (kT = ET.current) || void 0 === kT ? void 0 : kT.mobSettings.health,
          UT = null === (cT = ET.current) || void 0 === cT ? void 0 : cT.mobSettings.maxHealth,
          YT = CM.d.getFriendshipLevelInfo(null !== (lT = null === (KT = ET.current) || void 0 === KT ? void 0 : KT.mobSettings.petInfo.friendshipPoints) && void 0 !== lT ? lT : 0);
        return (0, IT.jsx)(OT.c, {
          className: "PetUIOuter",
          close: eT,
          escDoesExit: !0,
          show: oT,
          togglePointerLock: JT,
          forcePointerUnlock: oT,
          globallyUniqueKey: "PetUI",
          children: (0, IT.jsx)("div", {
            className: "PetUI",
            children: (0, IT.jsxs)("div", {
              className: "PetUIContainer",
              children: [(0, IT.jsxs)("div", {
                className: "PetUILeftSideContainer",
                children: [(0, IT.jsx)("div", {
                  className: "PetUITitle",
                  children: null !== (yT = null === (fT = ET.current) || void 0 === fT ? void 0 : fT.mobSettings.name) && void 0 !== yT ? yT : "Your Pet"
                }), (0, IT.jsx)("div", {
                  className: "PetUICanvasContainer",
                  ref: dT
                })]
              }), (0, IT.jsxs)("div", {
                className: "PetUIInformation",
                children: [!(0, Sl.R)(null === (xT = ET.current) || void 0 === xT ? void 0 : xT.mobSettings.petInfo.friendshipPoints) && (0, IT.jsxs)("div", {
                  className: "PetUIFriendshipPoints",
                  children: [(0, IT.jsx)("div", {
                    className: "PetUIFriendshipPointsTitle",
                    children: GT("mobAiPlugin:friendshipTitle")
                  }), (0, IT.jsx)("div", {
                    className: "PetUIFriendshipHearts",
                    children: CM.d.getIconsFromFriendshipPoints(null !== (AT = ET.current.mobSettings.petInfo.friendshipPoints) && void 0 !== AT ? AT : 0).map(((TT, kT) => (0, IT.jsx)("div", {
                      className: "PetUIFriendshipHeart",
                      children: (0, IT.jsx)(Oc.d, {
                        itemName: TT,
                        amount: 1
                      })
                    }, kT)))
                  }), (0, IT.jsx)("div", {
                    className: "PetUIFriendshipBar",
                    children: (0, IT.jsxs)("div", {
                      className: "PetUIFriendshipBarBackground",
                      children: [(0, IT.jsx)("div", {
                        className: "PetUIFriendshipBarForeground",
                        style: {
                          transform: `scaleX(${YT.totalPointsForNextLevel>0?Math.max(YT.pointsIntoCurrentLevel/YT.totalPointsForNextLevel,0):1})`,
                          transformOrigin: "left center"
                        }
                      }), (0, IT.jsx)("div", {
                        className: "PetUIFriendshipBarText",
                        children: YT.totalPointsForNextLevel > 0 ? ` ${Math.ceil(YT.pointsIntoCurrentLevel)}/${Math.ceil(YT.totalPointsForNextLevel)}` : Math.ceil(YT.pointsIntoCurrentLevel)
                      })]
                    })
                  })]
                }), (0, IT.jsxs)("div", {
                  className: "PetUIHungry",
                  children: [(0, IT.jsx)("div", {
                    className: "PetUIHungryTitle",
                    children: GT("mobAiPlugin:hungerTitle")
                  }), (0, IT.jsx)("div", {
                    className: "PetUIHungryCurrent",
                    children: CM.d.hungerLevelIcons[ZT.current].map(((TT, kT) => (0, IT.jsx)("div", {
                      className: "PetUIHungryIcon",
                      children: (0, IT.jsx)(Oc.d, {
                        itemName: TT,
                        amount: 1
                      })
                    }, kT)))
                  }), (0, IT.jsxs)("div", {
                    className: "PetUIHungryLevel",
                    children: [GT(CM.d.hungerLevelTranslations[ZT.current].translationKey), ZT.current !== CM.d.MobHungerLevel.Starving && !(0, Sl.R)(null === (CT = ET.current) || void 0 === CT ? void 0 : CT.mobSettings.petInfo.lastFedAt) && (0, IT.jsxs)("div", {
                      className: "PetUIHungryNext",
                      children: [GT("mobAiPlugin:nextFeedIn", {
                        state: GT(CM.d.hungerLevelTranslations[ZT.current + 1].translationKey)
                      }), ":", " ", (0, IT.jsx)("span", {
                        ref: uT
                      })]
                    })]
                  })]
                }), (0, IT.jsx)(BT.c, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, IT.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: GT("mobAiPlugin:healthTooltip")
                  }),
                  children: (0, IT.jsxs)("div", {
                    className: Dc()("PetUIQuickStatsItem", {
                      Disabled: (0, Sl.R)(gT) || (0, Sl.R)(UT)
                    }),
                    children: [(0, IT.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, IT.jsx)(Oc.d, {
                        itemName: "Health",
                        amount: 1
                      })
                    }), (0, IT.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (0, Sl.R)(gT) || (0, Sl.R)(UT) ? "" : (0, IT.jsxs)(IT.Fragment, {
                        children: [Math.ceil(gT), (0, IT.jsxs)("span", {
                          className: "PetUIQuickStatsValueMax",
                          children: ["/", Math.ceil(UT)]
                        })]
                      })
                    })]
                  })
                }), (0, IT.jsx)(BT.c, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, IT.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: GT("mobAiPlugin:attackDamageTooltip")
                  }),
                  children: (0, IT.jsxs)("div", {
                    className: Dc()("PetUIQuickStatsItem", {
                      Disabled: (0, Sl.R)(null === (jT = ET.current) || void 0 === jT ? void 0 : jT.mobSettings.attackDamage) || ET.current.mobSettings.attackDamage <= 0
                    }),
                    children: [(0, IT.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, IT.jsx)(Oc.d, {
                        itemName: "Iron Sword",
                        amount: 1
                      })
                    }), (0, IT.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (vT = ET.current) || void 0 === vT ? void 0 : vT.mobSettings.attackDamage) || ""
                    })]
                  })
                }), (0, IT.jsx)(BT.c, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, IT.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: GT("mobAiPlugin:secondaryAttackDamageTooltip")
                  }),
                  children: (0, IT.jsxs)("div", {
                    className: Dc()("PetUIQuickStatsItem", {
                      Disabled: (0, Sl.R)(null === (tT = ET.current) || void 0 === tT ? void 0 : tT.mobSettings.secondaryAttackDamage) || ET.current.mobSettings.secondaryAttackDamage <= 0
                    }),
                    children: [(0, IT.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, IT.jsx)(Oc.d, {
                        itemName: "Stone Crossbow",
                        amount: 1
                      })
                    }), (0, IT.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (NT = ET.current) || void 0 === NT ? void 0 : NT.mobSettings.secondaryAttackDamage) || ""
                    })]
                  })
                }), (0, IT.jsx)(BT.c, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, IT.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: GT("mobAiPlugin:speedTooltip")
                  }),
                  children: (0, IT.jsxs)("div", {
                    className: Dc()("PetUIQuickStatsItem", {
                      Disabled: (0, Sl.R)(null === (QT = ET.current) || void 0 === QT ? void 0 : QT.mobSettings.baseRunningSpeed)
                    }),
                    children: [(0, IT.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, IT.jsx)(Oc.d, {
                        itemName: "Speed",
                        amount: 1
                      })
                    }), (0, IT.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: null !== (ST = null === (DT = ET.current) || void 0 === DT || null === (aT = DT.mobSettings.baseRunningSpeed) || void 0 === aT ? void 0 : aT.toFixed(2)) && void 0 !== ST ? ST : ""
                    })]
                  })
                }), (0, IT.jsx)(BT.c, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, IT.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: GT("mobAiPlugin:saddledTooltip")
                  }),
                  children: (0, IT.jsxs)("div", {
                    className: Dc()("PetUIQuickStatsItem", {
                      Disabled: "Saddled" !== (null === (FT = ET.current) || void 0 === FT ? void 0 : FT.mobSettings.metaInfo)
                    }),
                    children: [(0, IT.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, IT.jsx)(Oc.d, {
                        itemName: "Saddle",
                        amount: 1
                      })
                    }), (0, IT.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: "Saddled" === (null === (rT = ET.current) || void 0 === rT ? void 0 : rT.mobSettings.metaInfo) ? (0, IT.jsx)(hT.e, {
                        name: "check"
                      }) : ""
                    })]
                  })
                }), !(0, Sl.R)(null === (wT = ET.current) || void 0 === wT ? void 0 : wT.mobSettings.tameInfo) && (0, IT.jsxs)(IT.Fragment, {
                  children: [(0, IT.jsxs)("div", {
                    className: "PetUIFood",
                    children: [(0, IT.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, IT.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, IT.jsx)(NM, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:superlikedFoodTitle"
                          },
                          description: null,
                          tintColor: CM.d.feedTextColours[CM.d.MobFoodType.Superliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, IT.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: (0, IT.jsx)("div", {
                          className: "PetUIFoodItem",
                          children: ET.current.mobSettings.petInfo.superlikedFoodKnown ? (0, IT.jsx)(hM, {
                            food: ET.current.mobSettings.petInfo.superlikedFood
                          }) : (0, IT.jsx)(NM, {
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
                    }), (0, IT.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, IT.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, IT.jsx)(NM, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:likedFoodTitle"
                          },
                          description: null,
                          tintColor: CM.d.feedTextColours[CM.d.MobFoodType.Liked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, IT.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (mT = ET.current.mobSettings.tameInfo.likedFoods) || void 0 === mT ? void 0 : mT.filter((TT => !ET.current.mobSettings.petInfo.superlikedFoodKnown || TT !== ET.current.mobSettings.petInfo.superlikedFood)).map((TT => (0, IT.jsx)(hM, {
                          food: TT
                        }, TT)))
                      })]
                    }), (0, IT.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, IT.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, IT.jsx)(NM, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:neutralFoodTitle"
                          },
                          description: null,
                          tintColor: CM.d.feedTextColours[CM.d.MobFoodType.Neutral],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, IT.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (bT = ET.current.mobSettings.tameInfo.neutralFoods) || void 0 === bT ? void 0 : bT.map((TT => (0, IT.jsx)(hM, {
                          food: TT
                        }, TT)))
                      })]
                    }), (0, IT.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, IT.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, IT.jsx)(NM, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:dislikedFoodTitle"
                          },
                          description: null,
                          tintColor: CM.d.feedTextColours[CM.d.MobFoodType.Disliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, IT.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (zT = ET.current.mobSettings.tameInfo.dislikedFoods) || void 0 === zT ? void 0 : zT.map((TT => (0, IT.jsx)(hM, {
                          food: TT
                        }, TT)))
                      })]
                    })]
                  }), ET.current.mobSettings.tameInfo.levelUpBonuses && (0, IT.jsx)("div", {
                    className: "PetUIFeedDrops",
                    children: Array.from({
                      length: CM.d.MAX_LEVEL + 1
                    }).map(((TT, kT) => {
                      const cT = kT;
                      if (0 === cT) return null;
                      const lT = ET.current.mobSettings.tameInfo.levelUpBonuses[cT],
                        MT = CM.d.getBonusDisplayInfo(VT, ET.current.mobSettings, ET.current.mobType, lT);
                      return (0, IT.jsxs)("div", {
                        className: Dc()("PetUIFeedDropContainer", {
                          Selected: cT === CM.d.getFriendshipLevelInfo(ET.current.mobSettings.petInfo.friendshipPoints).level
                        }),
                        children: [(0, IT.jsx)("div", {
                          className: "PetUIFeedDropHearts",
                          children: Array.from({
                            length: cT
                          }).map(((TT, kT) => (0, IT.jsx)("div", {
                            className: "PetUIFeedDropHeart",
                            children: (0, IT.jsx)(Oc.d, {
                              itemName: "Friendship",
                              amount: 1
                            })
                          }, `${cT}-${kT}`)))
                        }), (0, IT.jsx)("div", {
                          className: "PetUIFeedDropItems",
                          children: MT && (0, IT.jsx)(NM, {
                            icon: MT.icon,
                            displayName: MT.displayName,
                            description: MT.description
                          })
                        })]
                      }, cT)
                    }))
                  })]
                })]
              })]
            })
          })
        })
      })),
      hM = (0, MT.memo)((function(TT) {
        let {
          food: kT,
          includeDescription: cT = !1
        } = TT;
        const lT = vM(),
          MT = lT.getDefaultItemStat(kT, "displayName"),
          KT = lT.getDefaultItemStat(kT, "description");
        return (0, IT.jsx)(NM, {
          icon: kT,
          displayName: MT,
          description: cT ? KT : null
        })
      })),
      NM = (0, MT.memo)((function(TT) {
        let {
          icon: kT,
          displayName: cT,
          description: lT,
          tintColor: MT,
          className: KT = "PetUIFoodItem"
        } = TT;
        return (0, IT.jsx)(BT.c, {
          delayHide: 0,
          delayShow: 0,
          tooltipInner: (0, IT.jsxs)("div", {
            className: "PetUIFoodItemTooltip",
            children: [(0, IT.jsx)("div", {
              className: "PetUIFoodItemName",
              children: (0, IT.jsx)(rT.b, {
                text: cT
              })
            }), lT && (0, IT.jsx)("div", {
              className: "PetUIFoodItemDescription",
              children: (0, IT.jsx)(rT.b, {
                text: lT
              })
            })]
          }),
          children: (0, IT.jsx)("div", {
            className: KT,
            children: (0, IT.jsx)(Oc.d, {
              itemName: kT,
              amount: 1,
              tintColor: MT
            })
          })
        })
      }));
    var QM = cT(3732),
      SM = cT(1136),
      DM = cT(1244),
      aM = cT(36693),
      FM = cT(36687),
      rM = cT(1018),
      PM = cT(2408);

    function wM(TT) {
      let {
        peers: kT
      } = TT;
      const [cT, lT] = (0, MT.useState)(null), KT = (0, mT.h)("players");
      return (0, IT.jsx)("div", {
        className: "CodeEditorPresence",
        children: kT.map((TT => {
          var kT, MT;
          const OT = null !== (kT = null === (MT = KT.byId[TT.playerId]) || void 0 === MT ? void 0 : MT.cosmetics) && void 0 !== kT ? kT : {};
          return (0, IT.jsxs)("div", {
            className: Dc()("PresenceIcon", {
              Viewer: !TT.isEditor
            }),
            style: {
              backgroundColor: TT.colour
            },
            onMouseEnter: () => {
              lT(TT.playerId)
            },
            onMouseLeave: () => {
              lT(null)
            },
            children: [(0, IT.jsx)(PM.e, {
              cosmetics: OT
            }), cT === TT.playerId && (0, IT.jsx)("div", {
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
    var mM = cT(649),
      bM = cT(36682),
      zM = cT(36365),
      JM = cT(36698);

    function oM(TT) {
      const kT = TT.split("/"),
        cT = [];
      for (let lT = 1; lT < kT.length; lT++) cT.push(kT.slice(0, lT).join("/"));
      return cT
    }

    function HM(TT) {
      return TT.slice(TT.lastIndexOf("/") + 1)
    }
    const eM = (0, MT.memo)((function(TT) {
      var kT;
      let {
        files: cT,
        activePath: lT,
        canEdit: KT,
        directoryLinked: OT,
        pluginNames: yT,
        activePluginName: fT,
        activePluginFile: xT,
        onSelect: AT,
        onSelectPlugin: CT,
        onCreate: vT,
        onRename: tT,
        onRenameFolder: NT,
        onDelete: QT,
        onToggleDirectorySync: ST,
        schematics: DT,
        onManageSchematic: aT
      } = TT;
      const {
        t: FT
      } = (0, nT.B)(), rT = null !== (kT = (0, FM.b)(cT)) && void 0 !== kT ? kT : DM.g, PT = Object.keys(cT), [wT, mT] = (0, MT.useState)((() => new Set)), bT = function(TT, kT, cT) {
        const lT = {
          folders: new Map,
          files: []
        };
        for (const OT of TT) {
          if (OT === kT) continue;
          let TT = lT;
          for (const kT of oM(OT)) {
            let cT = TT.folders.get(kT);
            cT || (cT = {
              folders: new Map,
              files: []
            }, TT.folders.set(kT, cT)), TT = cT
          }
          TT.files.push(OT)
        }
        const MT = [];
        TT.includes(kT) && MT.push({
          kind: "file",
          path: kT,
          name: HM(kT),
          depth: 0
        });
        const KT = (TT, kT) => {
          const lT = [...TT.folders.entries()].sort(((TT, kT) => {
            let [cT] = TT, [lT] = kT;
            return cT.localeCompare(lT)
          }));
          for (const [OT, yT] of lT) {
            const TT = cT.has(OT);
            MT.push({
              kind: "folder",
              path: OT,
              name: HM(OT),
              depth: kT,
              collapsed: TT
            }), TT || KT(yT, kT + 1)
          }
          TT.files.sort(((TT, kT) => TT.localeCompare(kT)));
          for (const cT of TT.files) MT.push({
            kind: "file",
            path: cT,
            name: HM(cT),
            depth: kT
          })
        };
        return KT(lT, 0), MT
      }(PT, rT, wT);
      (0, MT.useEffect)((() => {
        mT((TT => {
          const kT = new Set(TT);
          let cT = !1;
          for (const MT of oM(lT)) cT = kT.delete(MT) || cT;
          return cT ? kT : TT
        }))
      }), [lT]);
      const zT = PT.length >= Rk.u,
        JT = (TT, kT) => {
          if (TT.length > aM.t) return `Path must be at most ${aM.t} characters`;
          if (!(0, aM.s)(TT)) return "Use a relative .js, .ts, or .d.ts path, e.g. lib/util.js";
          if ("index.d.ts" === TT) return "index.d.ts cannot be the world-code entry";
          const lT = !!kT && (0, FM.e)(kT, TT);
          if (kT && (0, FM.f)(kT) && !lT) return `Cannot rename ${kT} (only swapping ${DM.g} and ${DM.k} is allowed)`;
          if (TT in cT) return "A file with that path already exists";
          if ((0, FM.f)(TT) && !lT) {
            if ((TT === DM.g ? DM.k : DM.g) in cT) return `World code cannot have both ${DM.g} and ${DM.k}`
          }
          return null
        },
        oT = TT => {
          il.NotificationProvider.showInputPopup({
            title: "codeEditor:newFile",
            subtitle: "codeEditor:newFilePathHint",
            placeholderText: "lib/util.js",
            initialValue: void 0 === TT ? void 0 : `${TT}/`,
            submitText: "general:create",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: TT => JT(TT)
          }).getResult().then((TT => {
            "notificationTornDown" !== TT && null !== TT && "submit" === TT.type && vT(TT.value)
          }))
        },
        HT = TT => {
          il.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFile",
            subtitle: "codeEditor:newFilePathHint",
            initialValue: TT,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: kT => kT === TT ? "That is already the file's path" : JT(kT, TT)
          }).getResult().then((kT => {
            "notificationTornDown" !== kT && null !== kT && "submit" === kT.type && tT(TT, kT.value)
          }))
        },
        eT = TT => {
          const kT = TT => TT.replace(/\/+$/, "");
          il.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFolder",
            subtitle: "codeEditor:renameFolderHint",
            initialValue: TT,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: cT => {
              const lT = kT(cT);
              if (lT === TT) return "That is already the folder's path";
              for (const [kT, MT] of(0, FM.j)(PT, TT, lT)) {
                const TT = JT(MT, kT);
                if (null !== TT) return TT
              }
              return null
            }
          }).getResult().then((cT => {
            "notificationTornDown" !== cT && null !== cT && "submit" === cT.type && NT(TT, kT(cT.value))
          }))
        },
        GT = TT => {
          il.NotificationProvider.showPromptPopup({
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
          }).getResult().then((kT => {
            !0 === kT && QT(TT)
          }))
        };
      return (0, IT.jsxs)("div", {
        className: "CodeEditorFileTree",
        children: [(0, IT.jsxs)("div", {
          className: "FileTreeHeader",
          children: [(0, IT.jsx)("span", {
            children: "Files"
          }), KT && !zT && (0, IT.jsx)(jT.r, {
            className: "FileTreeHeaderButton",
            onClick: () => {
              oT()
            },
            children: (0, IT.jsx)(hT.e, {
              name: "plus"
            })
          })]
        }), (0, IT.jsxs)("div", {
          className: "FileTreeList",
          children: [bT.map((TT => {
            const kT = TT.path;
            if ("folder" === TT.kind) return (0, IT.jsx)(EM, {
              path: kT,
              name: TT.name,
              depth: TT.depth,
              collapsed: TT.collapsed,
              onToggle: () => {
                var TT;
                TT = kT, mT((kT => {
                  const cT = new Set(kT);
                  return cT.delete(TT) || cT.add(TT), cT
                }))
              },
              canCreate: KT && !zT,
              canRename: KT,
              onCreate: oT,
              onRename: eT
            }, `folder:${kT}`);
            const MT = (0, FM.f)(kT),
              OT = DM.g in cT && DM.k in cT,
              yT = !MT || OT,
              xT = null === fT && kT === lT;
            return (0, IT.jsx)(uM, {
              path: kT,
              label: TT.name,
              depth: TT.depth,
              isActive: xT,
              canRename: KT,
              onSelect: AT,
              onRename: HT,
              onDelete: GT,
              canDelete: yT && KT
            }, kT)
          })), (0, IT.jsxs)("div", {
            className: "FileTreeHeader Secondary",
            children: [(0, IT.jsxs)("span", {
              children: ["Schematics (", Object.keys(DT).length, "/", JM.i, ")"]
            }), KT && (0, IT.jsx)(jT.r, {
              className: "FileTreeHeaderButton",
              disabled: Object.keys(DT).length >= JM.i,
              onClick: () => {
                aT("")
              },
              children: (0, IT.jsx)(hT.e, {
                name: "plus"
              })
            })]
          }), Object.keys(DT).sort().map((TT => (0, IT.jsx)(uM, {
            path: TT,
            isActive: !1,
            canRename: !1,
            canDelete: !1,
            onSelect: aT
          }, TT))), yT.length > 0 && (0, IT.jsxs)(IT.Fragment, {
            children: [(0, IT.jsx)("div", {
              className: "FileTreeHeader Secondary",
              children: (0, IT.jsx)("span", {
                children: "Plugins"
              })
            }), yT.map((TT => {
              var kT;
              const cT = bM.g[TT],
                lT = Object.keys(null !== (kT = null === cT || void 0 === cT ? void 0 : cT.files) && void 0 !== kT ? kT : {
                  "index.ts": ""
                }).sort(((TT, kT) => "index.ts" === TT ? -1 : "index.ts" === kT ? 1 : TT.localeCompare(kT)));
              return (0, IT.jsxs)("div", {
                children: [(0, IT.jsx)("div", {
                  className: "FileTreePluginName",
                  children: (0, FM.u)(TT)
                }), lT.map((kT => (0, IT.jsx)(uM, {
                  path: kT,
                  nested: !0,
                  isActive: fT === TT && xT === kT,
                  canRename: !1,
                  onSelect: () => {
                    CT(TT, kT)
                  },
                  canDelete: !1
                }, kT)))]
              }, TT)
            }))]
          })]
        }), (0, IT.jsx)("div", {
          className: "FileTreeFooter",
          children: (0, IT.jsx)(jT.e, {
            className: "FileTreeFooterButton",
            onClick: ST,
            children: FT(OT ? "codeEditor:directorySyncUnlink" : "codeEditor:directorySyncLink")
          })
        })]
      })
    }));

    function GM(TT) {
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

    function VM(TT) {
      let {
        depth: kT
      } = TT;
      return (0, IT.jsx)(IT.Fragment, {
        children: Array.from({
          length: kT
        }, ((TT, kT) => (0, IT.jsx)("span", {
          className: "FileTreeIndentGuide",
          style: {
            "--guide-level": kT
          }
        }, kT)))
      })
    }

    function EM(TT) {
      let {
        path: kT,
        name: cT,
        depth: lT,
        collapsed: MT,
        onToggle: KT,
        canCreate: OT,
        canRename: yT,
        onCreate: fT,
        onRename: xT
      } = TT;
      const AT = [];
      OT && AT.push({
        icon: "plus",
        text: "codeEditor:newFile",
        onPointerDown: () => {
          fT(kT)
        }
      }), yT && AT.push({
        icon: "pen",
        text: "codeEditor:renameFolder",
        onPointerDown: () => {
          xT(kT)
        }
      });
      const CT = GM(lT);
      return (0, IT.jsxs)("div", {
        className: Dc()("FileTreeItem FileTreeFolder", CT.className),
        style: CT.style,
        children: [(0, IT.jsx)(VM, {
          depth: lT
        }), (0, IT.jsxs)("button", {
          type: "button",
          className: "FileTreeItemName",
          "aria-expanded": !MT,
          onClick: KT,
          children: [(0, IT.jsx)(hT.e, {
            className: "FileTreeFolderCaret",
            name: MT ? "caret-right" : "caret-down"
          }), (0, IT.jsx)(hT.e, {
            className: "FileTreeFolderIcon",
            name: MT ? "folder" : "folder-open"
          }), cT]
        }), (0, IT.jsx)(ZM, {
          path: kT,
          actions: AT
        })]
      })
    }

    function ZM(TT) {
      let {
        path: kT,
        actions: cT
      } = TT;
      const lT = (0, MT.useRef)(null);
      return 0 === cT.length ? null : (0, IT.jsxs)("div", {
        ref: lT,
        className: "FileTreeItemActions",
        children: [(0, IT.jsx)("button", {
          type: "button",
          className: "FileTreeActionMenuButton",
          "aria-label": `Actions for ${kT}`,
          children: (0, IT.jsx)(hT.e, {
            name: "ellipsis"
          })
        }), (0, IT.jsx)(zM.c, {
          triggerElementRef: lT,
          options: cT
        })]
      })
    }

    function uM(TT) {
      let {
        path: kT,
        label: cT = kT,
        depth: lT = 0,
        isActive: MT,
        canRename: KT,
        onSelect: OT,
        onRename: yT,
        onDelete: fT,
        canDelete: xT,
        nested: AT
      } = TT;
      const CT = [];
      KT && yT && CT.push({
        icon: "pen",
        text: "codeEditor:rename",
        onPointerDown: () => {
          yT(kT)
        }
      }), xT && fT && CT.push({
        icon: "xmark",
        text: "general:delete",
        onPointerDown: () => {
          fT(kT)
        }
      });
      const jT = GM(lT);
      return (0, IT.jsxs)("div", {
        className: Dc()("FileTreeItem", jT.className, {
          Active: MT,
          Nested: AT
        }),
        style: jT.style,
        children: [(0, IT.jsx)(VM, {
          depth: lT
        }), (0, IT.jsx)("button", {
          type: "button",
          className: "FileTreeItemName",
          title: cT === kT ? void 0 : kT,
          onClick: () => {
            OT(kT)
          },
          children: cT
        }), (0, IT.jsx)(ZM, {
          path: kT,
          actions: CT
        })]
      })
    }
    async function XM(TT) {
      const kT = (0, FM.b)(TT);
      if (!kT || "" === TT[kT].trim()) return [];
      const {
        collectImportedWorldCodePluginNames: lT
      } = await Promise.all([cT.e(290), cT.e(291)]).then((() => cT(41081)));
      return (0, bM.e)(lT(TT))
    }
    var dM = cT(36705);

    function LM(TT, kT) {
      const cT = Object.keys(TT),
        lT = Object.keys(kT);
      if (cT.length !== lT.length) return !1;
      for (const MT of cT)
        if (!(MT in kT) || TT[MT] !== kT[MT]) return !1;
      return !0
    }

    function RM(TT, kT) {
      const cT = [],
        lT = [],
        MT = [];
      for (const KT of Object.keys(kT)) KT in TT ? TT[KT] !== kT[KT] && MT.push(KT) : cT.push(KT);
      for (const KT of Object.keys(TT)) KT in kT || lT.push(KT);
      return cT.sort(), lT.sort(), MT.sort(), {
        creates: cT,
        deletes: lT,
        updates: MT
      }
    }

    function gM(TT, kT) {
      var cT;
      const lT = {
          ...TT
        },
        MT = (0, FM.b)(kT),
        KT = (0, FM.b)(lT);
      if (DM.g in lT && DM.k in lT) {
        const TT = null !== MT && void 0 !== MT ? MT : DM.k,
          cT = TT === DM.g ? DM.k : DM.g;
        var OT;
        if (!(TT in lT)) lT[TT] = null !== (OT = kT[TT]) && void 0 !== OT ? OT : "";
        return delete lT[cT], lT
      }
      var yT;
      return MT && !(MT in lT) ? (KT || (lT[MT] = null !== (yT = kT[MT]) && void 0 !== yT ? yT : ""), lT) : (KT || MT || (lT[DM.g] = null !== (cT = lT[DM.g]) && void 0 !== cT ? cT : "", delete lT[DM.k]), lT)
    }

    function UM(TT, kT) {
      const cT = (0, FM.b)(kT),
        lT = DM.g in kT && DM.k in kT;
      return TT.filter((TT => !(0, FM.f)(TT) || (!!lT || cT !== TT)))
    }
    async function YM(TT, kT, lT) {
      const MT = TT.getLobbyFiles(),
        KT = (0, Rk.j)(lT, (0, FM.n)(MT, kT)),
        OT = await TT.ensureJoined(kT),
        yT = (0, aM.w)(OT.docKey);
      if (OT.doc === KT) return;
      for (let cT = 0; cT < 100; cT++) {
        const cT = TT.getCollabSnapshot();
        if (cT && (0, aM.w)(cT.docKey) === yT && TT.getActivePath() === kT) {
          if (TT.replaceActiveDoc(yT, KT)) return;
          await (0, Sl.Y)(40)
        } else await (0, Sl.Y)(40)
      }
      const {
        ChangeSet: fT
      } = await cT.e(286).then((() => cT(40941))), IT = TT.getCollabSnapshot(), AT = IT && (0, aM.w)(IT.docKey) === yT ? IT : OT;
      await async function(TT, kT, cT, lT) {
        const MT = TT.of({
            from: 0,
            to: cT.length,
            insert: lT
          }, cT.length),
          KT = JSON.stringify([{
            clientID: kT.clientID,
            changes: MT.toJSON()
          }]),
          OT = (0, aM.w)(kT.docKey);
        KT.length <= aM.g ? xT.gameBridge.send("sendCodeCollab", {
          jl: aM.b.Push,
          vl: OT,
          tl: kT.version,
          Ql: KT
        }) : await (0, SM.postJsonWithMetricsCookiesAndJsonResponse)(`${kT.httpConfig.gsUrl}/code/collab-push`, QM.q["collab-push"].toBuffer({
          gameNameWithVariation: kT.httpConfig.gameNameWithVariation,
          lobbyName: kT.httpConfig.lobbyName,
          docKey: OT,
          version: kT.version,
          updates: KT
        }), {
          retries: 0
        })
      }(fT, AT, AT.doc, KT)
    }
    class BM {
      constructor(TT) {
        this.handle = null, this.lastSynced = {}, this.lastLobbySeen = null, this.pendingDocText = new Map, this.flushingDocText = !1, this.recheckingDisk = !1, this.stopWatch = null, this.lobbyPollTimer = null, this.running = !1, this.applying = !1, this.reconcileSettled = !1, this.reconcileInFlight = !1, this.linked = !1, this.scaffoldedPluginNamesKey = null, this.scaffoldingLocalTypes = Promise.resolve(), this.bridge = void 0, this.bridge = TT
      }
      async writeLobbyFiles(TT) {
        const kT = {
            ...this.bridge.getLobbyFiles()
          },
          cT = {
            ...kT
          };
        for (const {
            path: KT,
            text: OT
          }
          of TT) cT[KT] = OT;
        if (!TT.every((TT => {
            let {
              path: kT,
              text: lT
            } = TT;
            return (0, Rk.j)(lT, (0, FM.n)(cT, kT)) === lT
          }))) return !1;
        const lT = [];
        try {
          for (const {
              path: kT,
              text: cT
            }
            of TT) lT.push(kT), kT in this.bridge.getLobbyFiles() || (this.bridge.createFile(kT, {
            focus: !1
          }), await this.bridge.waitForLobbyPath(kT, !0)), await YM(this.bridge, kT, cT)
        } catch (MT) {
          for (const TT of lT) TT in kT ? await YM(this.bridge, TT, kT[TT]).catch((kT => {
            console.error("World Code AI: couldn't put back", TT, kT)
          })) : this.bridge.deleteFile(TT);
          throw MT
        }
        return !0
      }
      isLinked() {
        return this.linked
      }
      async linkFolder() {
        if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), !1;
        const TT = await (0, dM.t)(this.bridge.getStorageKey());
        return !!TT && (this.handle = TT, this.linked = !0, this.reconcileSettled = !1, await this.scaffoldLocalTypes(TT), !0)
      }
      async unlinkFolder() {
        const TT = this.bridge.getStorageKey();
        this.pendingDocText.clear(), this.stopContinuousSync(), this.handle = null, this.linked = !1, this.reconcileSettled = !1, this.lastSynced = {}, this.lastLobbySeen = null, this.scaffoldedPluginNamesKey = null, await (0, dM.b)(TT), this.bridge.onUnlinked()
      }
      async tryRestoreHandle() {
        const TT = this.bridge.getStorageKey(),
          kT = await (0, dM.r)(TT);
        return !!kT && (!!await (0, dM.e)(kT, "readwrite") && (this.handle = kT, this.linked = !0, await (0, dM.D)(TT, kT), await this.scaffoldLocalTypes(kT), !0))
      }
      scaffoldLocalTypes(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bridge.getLobbyFiles();
        return this.scaffoldingLocalTypes = this.scaffoldingLocalTypes.then((async () => {
          try {
            const lT = (await XM(kT)).map((TT => bM.g[TT])),
              MT = lT.map((TT => {
                var kT;
                return `${TT.name}:${Object.keys(null!==(kT=null===TT||void 0===TT?void 0:TT.files)&&void 0!==kT?kT:{}).sort().join(",")}`
              })).join("\0");
            if (this.scaffoldedPluginNamesKey === MT) return;
            const {
              ensureLocalBloxdTypes: KT
            } = await Promise.all([cT.e(82), cT.e(288), cT.e(293)]).then((() => cT(41090)));
            await KT(TT, lT), this.scaffoldedPluginNamesKey = MT
          } catch (lT) {
            console.error("[WorldCodeDirectorySync] Failed to scaffold local @bloxd types", lT)
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
      async onDocTextChanged(TT, kT) {
        if (!this.handle) return;
        const cT = [this.scaffoldLocalTypes(this.handle, {
          ...this.bridge.getLobbyFiles(),
          [TT]: kT
        })];
        this.running && (this.pendingDocText.set(TT, kT), cT.push(this.flushDocTextToDisk())), await Promise.all(cT)
      }
      async flushDocTextToDisk() {
        if (this.flushingDocText || this.applying || !this.handle || 0 === this.pendingDocText.size) return;
        const TT = this.handle;
        this.flushingDocText = !0, this.applying = !0;
        try {
          for (; this.pendingDocText.size > 0;) {
            const kT = [...this.pendingDocText];
            this.pendingDocText.clear();
            for (const [cT, lT] of kT) this.lastSynced[cT] !== lT && (await (0, dM.L)(TT, cT, lT), this.lastSynced = {
              ...this.lastSynced,
              [cT]: lT
            })
          }
        } catch (kT) {
          console.error("[WorldCodeDirectorySync] Failed to write remote doc to disk", kT), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
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
            await this.onDiskFilesChanged(await (0, dM.u)(this.handle))
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
            if (!await (0, dM.e)(this.handle, "readwrite")) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncPermissionDenied"), "warning"), void(this.reconcileSettled = !0);
            await this.bridge.pullLobbyFiles();
            const kT = this.bridge.getLobbyFiles(),
              cT = await (0, dM.u)(this.handle);
            for (const TT of Object.keys(kT).filter(JM.e)) {
              if (cT[TT] === dM.k) return void this.bridge.setMessage(`Move ${TT} outside the linked folder before syncing its placeholder.`, "warning");
              cT[TT] = JM.p
            }
            if (LM(cT, kT)) {
              for (const TT of Object.keys(kT).filter(JM.e)) await (0, dM.L)(this.handle, TT, JM.p);
              return this.lastSynced = {
                ...cT
              }, void this.beginWatch()
            }
            const lT = await this.promptReconcile(function(TT) {
              return null !== (0, FM.b)(TT)
            }(cT));
            if ("unlink" === lT) return void await this.unlinkFolder();
            if ("dismissed" === lT) return void(this.reconcileSettled = !0);
            this.applying = !0;
            try {
              if ("local" === lT) {
                if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), void(this.reconcileSettled = !0);
                await this.applyLocalTreeToLobby(cT);
                for (const TT of Object.keys(kT).filter(JM.e)) await (0, dM.L)(this.handle, TT, JM.p);
                this.lastSynced = {
                  ...await (0, dM.u)(this.handle)
                }
              } else await (0, dM.M)(this.handle, kT), this.lastSynced = {
                ...kT
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
        return await new Promise((kT => {
          const cT = [{
              choice: "local",
              Button: jT.e,
              labelKey: "directorySyncUseLocal",
              descriptionKey: "directorySyncUseLocalDescription"
            }, {
              choice: "live",
              Button: jT.e,
              labelKey: "directorySyncUseLive",
              descriptionKey: "directorySyncUseLiveDescription"
            }, {
              choice: "unlink",
              Button: jT.e,
              labelKey: "directorySyncUseUnlink",
              descriptionKey: "directorySyncUseUnlinkDescription"
            }],
            lT = (0, IT.jsxs)("div", {
              className: "CodeEditorDirectorySyncPrompt",
              children: [(0, IT.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptTitle",
                children: this.bridge.t("codeEditor:directorySyncDifferTitle")
              }), (0, IT.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptBody",
                children: TT ? this.bridge.t("codeEditor:directorySyncDifferBody") : this.bridge.t("codeEditor:directorySyncLocalInvalidEntry")
              }), (0, IT.jsx)("div", {
                className: "CodeEditorDirectorySyncOptions",
                children: cT.filter((kT => "local" !== kT.choice || TT)).map((TT => {
                  let {
                    choice: cT,
                    Button: lT,
                    labelKey: KT,
                    descriptionKey: OT
                  } = TT;
                  return (0, IT.jsxs)("div", {
                    className: "CodeEditorDirectorySyncOption",
                    children: [(0, IT.jsx)(lT, {
                      className: "CodeEditorButton",
                      onClick: () => {
                        (TT => {
                          MT.tearDownNotification(), kT(TT)
                        })(cT)
                      },
                      children: this.bridge.t(`codeEditor:${KT}`)
                    }), (0, IT.jsx)("div", {
                      className: "CodeEditorDirectorySyncOptionDescription",
                      children: this.bridge.t(`codeEditor:${OT}`)
                    })]
                  }, cT)
                }))
              })]
            }),
            MT = il.NotificationProvider.showCustomPopup({
              body: lT,
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "worldCodeDirectorySync"
            });
          MT.getResult().then((TT => {
            "notificationTornDown" === TT && kT("dismissed")
          }))
        }))
      }
      beginWatch() {
        this.handle && (this.stopContinuousSync(), this.reconcileSettled = !0, this.running = !0, this.stopWatch = (0, dM.G)(this.handle, (TT => {
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
        const kT = this.bridge.getLobbyFiles();
        let cT = gM(TT, this.lastSynced);
        for (const KT in kT)
          if ((0, JM.e)(KT) && cT[KT] === dM.k) return void this.bridge.setMessage("Move binary schematic files outside the linked folder. Add them through the Code Editor.", "warning");
        const lT = Object.keys(cT).filter((TT => (0, JM.e)(TT) && !(TT in kT)));
        lT.length > 0 && this.bridge.setMessage("Add or rename schematics in the Code Editor. Unknown local schematic files are not uploaded.", "warning");
        for (const KT of Object.keys(kT).filter(JM.e))(KT in cT || lT.length > 0 || !(KT in this.lastSynced)) && (cT[KT] = JM.p);
        if (!LM(cT, TT)) {
          this.applying = !0;
          try {
            await this.persistEntryRepair(TT, cT), cT = gM(await (0, dM.u)(this.handle), this.lastSynced)
          } finally {
            this.applying = !1
          }
        }
        if (!LM(cT, this.lastSynced)) {
          this.applying = !0;
          try {
            const TT = RM(this.lastSynced, cT);
            if (await this.pushDiskDeltaToLobby(cT, kT), null !== this.lastLobbySeen)
              for (const cT of [...TT.creates, ...TT.updates, ...TT.deletes])(0, JM.e)(cT) || (cT in kT ? this.lastLobbySeen[cT] = kT[cT] : delete this.lastLobbySeen[cT]);
            this.lastSynced = {
              ...cT
            }
          } catch (MT) {
            console.error("[WorldCodeDirectorySync] Disk\u2192lobby sync failed", MT), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async persistEntryRepair(TT, kT) {
        if (this.handle) {
          for (const cT of Object.keys(TT)) cT in kT || await (0, dM.w)(this.handle, cT);
          for (const [cT, lT] of Object.entries(kT)) TT[cT] !== lT && await (0, dM.L)(this.handle, cT, lT)
        }
      }
      async applyRemoteTreeToDisk(TT) {
        if (!this.handle) return;
        const kT = this.lastLobbySeen;
        if (null === kT) return void(this.lastLobbySeen = {
          ...TT
        });
        const cT = Object.keys(TT).filter((cT => kT[cT] !== TT[cT])),
          lT = Object.keys(kT).filter((kT => !(kT in TT)));
        if (0 !== cT.length || 0 !== lT.length) {
          this.applying = !0;
          try {
            for (const kT of [...lT, ...cT]) try {
              if (kT in TT) await (0, dM.L)(this.handle, kT, TT[kT]), this.lastSynced = {
                ...this.lastSynced,
                [kT]: TT[kT]
              }, this.lastLobbySeen = {
                ...this.lastLobbySeen,
                [kT]: TT[kT]
              };
              else {
                await (0, dM.w)(this.handle, kT);
                const TT = {
                  ...this.lastSynced
                };
                delete TT[kT], this.lastSynced = TT;
                const cT = {
                  ...this.lastLobbySeen
                };
                delete cT[kT], this.lastLobbySeen = cT
              }
            } catch (MT) {
              console.error("[WorldCodeDirectorySync] Lobby\u2192disk sync failed", MT), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
            }
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async renameLobbyEntryIfSwitched(TT, kT) {
        const cT = function(TT, kT) {
          const cT = (0, FM.b)(TT),
            lT = (0, FM.b)(kT);
          return cT && lT && cT !== lT ? {
            from: cT,
            to: lT
          } : null
        }(TT, kT);
        return !!cT && (this.bridge.renameFile(cT.from, cT.to), await this.bridge.waitForLobbyPath(cT.to, !0), !0)
      }
      async applyLocalTreeToLobby(TT) {
        var kT;
        const cT = this.bridge.getActivePath();
        await this.renameLobbyEntryIfSwitched(this.bridge.getLobbyFiles(), TT);
        const lT = this.bridge.getLobbyFiles(),
          MT = RM(lT, TT),
          KT = UM(MT.deletes, lT);
        for (const xT of MT.creates)(0, JM.e)(xT) || (this.bridge.createFile(xT, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(xT, !0));
        for (const xT of KT)(0, JM.e)(xT) || (this.bridge.deleteFile(xT), await this.bridge.waitForLobbyPath(xT, !1));
        if (!(0, FM.b)(this.bridge.getLobbyFiles()) && !(0, FM.b)(TT)) {
          if (this.bridge.createFile(DM.g, {
              focus: !1
            }), await this.bridge.waitForLobbyPath(DM.g, !0), !this.handle) return;
          await (0, dM.L)(this.handle, DM.g, ""), TT = {
            ...TT,
            [DM.g]: ""
          }
        }
        const OT = this.bridge.getLobbyFiles();
        for (const xT of Object.keys(TT))(0, JM.e)(xT) || OT[xT] !== TT[xT] && await YM(this.bridge, xT, TT[xT]);
        const yT = this.bridge.getLobbyFiles(),
          fT = cT in yT ? cT : null !== (kT = (0, FM.b)(yT)) && void 0 !== kT ? kT : DM.g;
        await this.bridge.ensureJoined(fT)
      }
      async pushDiskDeltaToLobby(TT, kT) {
        const cT = this.bridge.getActivePath(),
          lT = await this.renameLobbyEntryIfSwitched(kT, TT) ? this.bridge.getLobbyFiles() : kT,
          MT = RM(this.lastSynced, TT),
          KT = UM(MT.deletes, lT).filter((TT => TT in lT));
        for (const OT of MT.creates)(0, JM.e)(OT) || (OT in this.bridge.getLobbyFiles() || (this.bridge.createFile(OT, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(OT, !0)), await YM(this.bridge, OT, TT[OT]));
        for (const OT of KT)(0, JM.e)(OT) ? await this.bridge.deleteSchematic(OT) : (this.bridge.deleteFile(OT), await this.bridge.waitForLobbyPath(OT, !1));
        for (const OT of MT.updates)(0, JM.e)(OT) || await YM(this.bridge, OT, TT[OT]);
        cT in this.bridge.getLobbyFiles() && this.bridge.getActivePath() !== cT && await this.bridge.ensureJoined(cT)
      }
    }
    var WM = cT(1202);

    function nM() {
      const {
        websocketUrl: TT,
        gameNameWithVariation: kT,
        lobbyName: cT
      } = xT.gameBridge.latest("connectedGame");
      return {
        gsUrl: WM.clientSideServerUrls.getHttpUrlFromWebSocketUrl(TT),
        gameNameWithVariation: kT,
        lobbyName: cT
      }
    }
    async function pM(TT) {
      const {
        gsUrl: kT,
        gameNameWithVariation: cT,
        lobbyName: lT
      } = nM();
      return await (0, SM.postBinaryWithMetricsCookiesAndCustomResponse)(`${kT}/code/schematics`, QM.dk.schematics.toBuffer({
        gameNameWithVariation: cT,
        lobbyName: lT,
        request: JSON.stringify(TT)
      }), {
        retries: 0
      }, SM.HttpPayloadType.json)
    }
    var iM = cT(36151);

    function qM(TT) {
      let {
        path: kT,
        revision: cT
      } = TT;
      const [lT, KT] = (0, MT.useState)(""), [OT, yT] = (0, MT.useState)(!1), [fT, xT] = (0, MT.useState)(0);
      return (0, MT.useEffect)((() => {
        let TT = !1;
        return KT(""), yT(!1), pM({
          action: "preview",
          path: kT
        }).then((kT => {
          TT || KT(`data:image/webp;base64,${kT.previewBase64}`)
        })).catch((kT => {
          console.error("Could not load schematic preview", kT), TT || yT(!0)
        })), () => {
          TT = !0
        }
      }), [kT, cT, fT]), (0, IT.jsxs)("div", {
        className: "SchematicPreview",
        children: [lT && (0, IT.jsx)("img", {
          src: lT,
          alt: `Preview of ${kT}`
        }), !lT && !OT && (0, IT.jsx)(bT.d, {
          loaderType: "Secondary"
        }), OT && (0, IT.jsxs)(IT.Fragment, {
          children: [(0, IT.jsx)("div", {
            className: "SmallTextLight",
            role: "status",
            children: "Preview unavailable."
          }), (0, IT.jsx)(jT.e, {
            onClick: () => {
              xT(fT + 1)
            },
            children: "Retry preview"
          })]
        })]
      })
    }

    function sM(TT) {
      var kT;
      let {
        initialPath: cT,
        onChanged: lT,
        onClose: KT
      } = TT;
      const OT = "" === cT,
        [yT, fT] = (0, MT.useState)(null),
        [xT, AT] = (0, MT.useState)(cT),
        [CT, vT] = (0, MT.useState)(!1),
        [tT, hT] = (0, MT.useState)(!1),
        [NT, QT] = (0, MT.useState)(null),
        [ST, DT] = (0, MT.useState)(!1),
        [aT, FT] = (0, MT.useState)(""),
        rT = (0, MT.useRef)(null),
        PT = (0, MT.useRef)(!1),
        wT = (0, MT.useRef)(!0);
      (0, MT.useEffect)((() => (wT.current = !0, pM({
        action: "state"
      }).then((TT => {
        wT.current && fT(TT)
      })).catch((TT => {
        console.error("Could not load schematic assets", TT), wT.current && FT("Could not load schematics. Reopen this panel to retry.")
      })), () => {
        wT.current = !1
      })), []);
      const mT = null === yT || void 0 === yT ? void 0 : yT.assets[cT],
        bT = Object.keys(null !== (kT = null === yT || void 0 === yT ? void 0 : yT.assets) && void 0 !== kT ? kT : {}).length,
        zT = xT.trim(),
        JT = zT ? (0, JM.e)(zT) ? null !== yT && void 0 !== yT && yT.assets[zT] && (OT || zT !== cT) ? "A schematic already uses that path." : "" : "Use a relative path ending in .bloxdschem." : "",
        oT = !!zT && !JT && (OT ? bT < JM.i : zT !== cT),
        HT = ST || !yT;
      async function eT(TT) {
        if (!PT.current && wT.current) {
          PT.current = !0, DT(!0), FT("");
          try {
            const kT = await pM({
              ...TT,
              expectedRevision: yT.revision
            });
            lT(kT), wT.current && KT()
          } catch (cT) {
            var kT;
            if (console.error("Schematic asset operation failed", cT), wT.current) FT(cT instanceof UT.c ? null !== (kT = cT.errorMessageForUser) && void 0 !== kT ? kT : cT.message : String(cT));
            try {
              const TT = await pM({
                action: "state"
              });
              lT(TT), wT.current && fT(TT)
            } catch (MT) {
              console.error("Could not refresh schematic assets", MT)
            }
          } finally {
            PT.current = !1, wT.current && DT(!1)
          }
        }
      }
      return (0, IT.jsxs)("div", {
        className: "WorldCodeSchematicPanel InputGenericPopup PromptGenericPopup FileTreePathPopup",
        children: [(0, IT.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: OT ? "New schematic" : CT ? "Rename schematic" : "Schematic"
        }), aT && (0, IT.jsx)("div", {
          className: "InputGenericPopupError SmallTextLight",
          role: "alert",
          children: aT
        }), !yT && !aT && (0, IT.jsx)("div", {
          className: "SmallTextLight",
          children: "Loading schematic\u2026"
        }), (0, IT.jsxs)("fieldset", {
          disabled: HT,
          children: [OT || CT ? (0, IT.jsxs)("label", {
            className: "SchematicField",
            children: [(0, IT.jsx)("span", {
              className: "SmallTextBold",
              children: "Project path"
            }), (0, IT.jsx)("div", {
              className: "InputGenericPopupInputRow",
              children: (0, IT.jsx)(Vc.b, {
                className: "InputGenericPopupInput",
                defaultValue: cT,
                placeholderText: "maps/arena.bloxdschem",
                maxLength: 64,
                onValueChange: AT
              }, CT ? "rename" : "create")
            })]
          }) : (0, IT.jsx)("div", {
            className: "SchematicPath SmallTextBold",
            children: cT
          }), (OT || CT) && JT && (0, IT.jsx)("div", {
            className: "InputGenericPopupError SmallTextLight",
            role: "alert",
            children: JT
          }), OT ? (0, IT.jsxs)(IT.Fragment, {
            children: [bT >= JM.i && (0, IT.jsxs)("div", {
              className: "SmallTextLight",
              children: ["Delete a schematic before adding another (", JM.i, " maximum)."]
            }), tT ? (0, IT.jsxs)(IT.Fragment, {
              children: [(0, IT.jsx)("div", {
                className: "SmallTextBold",
                children: "Choose from profile"
              }), (0, IT.jsx)("div", {
                className: "SchematicProfilePicker",
                "aria-disabled": HT || !oT,
                children: (0, IT.jsx)(iM.e, {
                  loading: null === NT,
                  schematics: null !== NT && void 0 !== NT ? NT : [],
                  disableAutoExport: !0,
                  onSchematicPicked: TT => {
                    !HT && oT && eT({
                      action: "profile",
                      path: zT,
                      schematicId: TT.schematicId
                    })
                  }
                })
              }), (0, IT.jsx)("div", {
                className: "InputGenericPopupButtons",
                children: (0, IT.jsx)(jT.e, {
                  className: "InputGenericPopupButton",
                  disabled: HT,
                  onClick: () => {
                    hT(!1)
                  },
                  children: "Back"
                })
              })]
            }) : (0, IT.jsxs)("div", {
              className: "InputGenericPopupButtons",
              children: [(0, IT.jsx)(jT.e, {
                className: "InputGenericPopupButton",
                disabled: HT || !oT,
                onClick: () => {
                  rT.current.click()
                },
                children: "Upload Schematic"
              }), (0, IT.jsx)(jT.e, {
                className: "InputGenericPopupButton",
                disabled: HT || !oT,
                onClick: () => {
                  !async function() {
                    if (hT(!0), FT(""), !NT) try {
                      const TT = await (0, SM.postJsonWithMetricsCookiesAndJsonResponse)(`${WM.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
                        retries: 0,
                        minTimeout: 3e3
                      });
                      wT.current && QT(TT)
                    } catch (TT) {
                      console.error("Could not load profile schematics", TT), wT.current && (hT(!1), FT("Could not load your schematics. Try again."))
                    }
                  }()
                },
                children: "Choose from profile"
              })]
            }), (0, IT.jsx)("input", {
              ref: rT,
              type: "file",
              accept: ".bloxdschem",
              hidden: !0,
              onChange: TT => {
                var kT;
                const cT = null === (kT = TT.target.files) || void 0 === kT ? void 0 : kT[0];
                if (TT.target.value = "", !cT) return;
                if (cT.size > JM.l) return void FT("The schematic file is too large.");
                const lT = zT;
                DT(!0);
                const MT = new FileReader;
                MT.onload = () => {
                  eT({
                    action: "upload",
                    path: lT,
                    base64: String(MT.result).split(",")[1]
                  })
                }, MT.onerror = () => {
                  console.error("Could not read schematic file", MT.error), wT.current && (DT(!1), FT("Could not read the selected file."))
                }, MT.readAsDataURL(cT)
              }
            })]
          }) : mT ? (0, IT.jsxs)(IT.Fragment, {
            children: [!CT && (0, IT.jsx)(qM, {
              path: cT,
              revision: yT.revision
            }), !CT && (0, IT.jsxs)("p", {
              className: "SchematicDetails SmallTextLight",
              children: [Math.ceil(mT.byteSize / 1024), " KB \xb7 ", mT.dimensions.join(" \xd7 "), " blocks"]
            }), (0, IT.jsx)("div", {
              className: "InputGenericPopupButtons",
              children: CT ? (0, IT.jsxs)(IT.Fragment, {
                children: [(0, IT.jsx)(jT.e, {
                  className: "InputGenericPopupButton",
                  disabled: HT || !oT,
                  onClick: () => {
                    eT({
                      action: "rename",
                      path: cT,
                      newPath: zT
                    })
                  },
                  children: "Rename"
                }), (0, IT.jsx)(jT.e, {
                  className: "InputGenericPopupButton",
                  disabled: HT,
                  onClick: () => {
                    vT(!1), AT(cT)
                  },
                  children: "Cancel"
                })]
              }) : (0, IT.jsxs)(IT.Fragment, {
                children: [(0, IT.jsx)(jT.e, {
                  className: "InputGenericPopupButton",
                  disabled: HT,
                  onClick: () => {
                    vT(!0)
                  },
                  children: "Rename"
                }), (0, IT.jsx)(jT.I, {
                  className: "InputGenericPopupButton",
                  disabled: HT,
                  onClick: () => {
                    eT({
                      action: "remove",
                      path: cT
                    })
                  },
                  children: "Delete"
                })]
              })
            })]
          }) : yT && (0, IT.jsx)("div", {
            className: "SmallTextLight",
            children: "This schematic is no longer in the project."
          })]
        })]
      })
    }

    function TK(TT) {
      if ("string" !== typeof TT) return null;
      try {
        const kT = JSON.parse(TT);
        return (0, FM.h)(null === kT || void 0 === kT ? void 0 : kT.worldCodeEngine) && "boolean" === typeof kT.engineLocked && function(TT) {
          if (null === TT) return !0;
          const kT = null === TT || void 0 === TT ? void 0 : TT.location;
          return "string" === typeof(null === TT || void 0 === TT ? void 0 : TT.reason) && (null === kT || "string" === typeof(null === kT || void 0 === kT ? void 0 : kT.path) && Number.isInteger(kT.line))
        }(kT.fallback) ? kT : (console.error("[CodeCollab] Malformed engine settings", TT), null)
      } catch (kT) {
        return console.error("[CodeCollab] Failed to parse engine settings", kT), null
      }
    }

    function kK(TT) {
      let {
        fallback: kT,
        onGoToLine: cT
      } = TT;
      const {
        t: lT
      } = (0, nT.B)(), {
        location: MT
      } = kT;
      return (0, IT.jsxs)("div", {
        className: "CodeEditorEngineNotice",
        children: [lT("codeEditorEngine:notice", {
          reason: kT.reason
        }), MT && (0, IT.jsxs)(IT.Fragment, {
          children: [" ", (0, IT.jsx)("button", {
            type: "button",
            className: "CodeEditorEngineNoticeLink",
            onClick: () => {
              cT(MT.path, MT.line)
            },
            children: lT("codeEditorEngine:goToLine", {
              line: String(MT.line)
            })
          })]
        })]
      })
    }
    var cK = cT(4887),
      lK = cT(4355);

    function MK(TT) {
      let {
        label: kT,
        hint: cT,
        checked: lT,
        onChange: MT
      } = TT;
      return (0, IT.jsxs)("label", {
        className: "CodeEditorMoreOptionsRow CodeEditorOptionSwitch",
        children: [(0, IT.jsxs)("span", {
          className: "CodeEditorOptionSwitchText",
          children: [(0, IT.jsx)("span", {
            children: kT
          }), (0, IT.jsx)("span", {
            className: "CodeEditorOptionSwitchHint",
            children: cT
          })]
        }), (0, IT.jsx)("span", {
          className: "SwitchContainer",
          children: (0, IT.jsx)(lK.d, {
            className: "SwitchCheckbox",
            checked: lT,
            onChange: TT => {
              MT(TT.target.checked)
            },
            disabled: !1
          })
        })]
      })
    }

    function KK(TT) {
      let {
        engine: kT,
        onSetEngine: cT,
        aiHints: lT,
        variation: MT
      } = TT;
      const {
        t: KT
      } = (0, nT.B)();
      return (0, IT.jsxs)("div", {
        className: "CodeEditorMoreOptions",
        children: [(0, IT.jsx)("div", {
          className: "CodeEditorMoreOptionsTitle",
          children: KT("codeEditor:moreOptions")
        }), kT && (0, IT.jsx)(MK, {
          label: KT("codeEditorEngine:toggle"),
          hint: KT("codeEditorEngine:toggleHint"),
          checked: "ses" === kT,
          onChange: TT => {
            cT(TT ? "ses" : "quickjs")
          }
        }), lT && (0, IT.jsx)(MK, {
          label: KT("codeEditorAiHints:toggle"),
          hint: KT("codeEditorAiHints:toggleHint"),
          checked: lT.shown,
          onChange: lT.setShown
        }), MT && (0, IT.jsxs)("div", {
          className: "CodeEditorMoreOptionsRow",
          children: [(0, IT.jsx)(cK.g, {
            label: "codeEditor:variationLabel",
            children: (0, IT.jsx)(Vc.b, {
              className: "CodeEditorVariationInput",
              maxLength: 32,
              defaultValue: MT.name,
              onValueChange: MT.setName,
              onEnter: MT.reload
            })
          }), (0, IT.jsx)(jT.v, {
            className: "CodeEditorButton",
            onClick: MT.reload,
            children: KT("codeEditor:reloadAsVariation")
          })]
        })]
      })
    }
    var OK = cT(36712),
      yK = cT(36717);

    function fK(TT) {
      let {
        close: kT
      } = TT;
      const {
        t: cT
      } = (0, nT.B)(), lT = [{
        name: cT("codeEditor:welcomeTutorial"),
        tutorial: "welcome"
      }, {
        name: cT("codeEditor:docsOverviewTutorial"),
        tutorial: "docsOverview"
      }, {
        name: cT("codeEditorAiTutorial:tutorialName"),
        tutorial: "aiHelperOverview"
      }];
      return (0, IT.jsxs)("div", {
        className: "PromptGenericPopup CodeEditorTutorialsPopup",
        children: [(0, IT.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: cT("codeEditor:tutorialsTitle")
        }), (0, IT.jsx)("div", {
          className: "CodeEditorTutorialsList",
          children: lT.map((TT => (0, IT.jsx)(jT.e, {
            className: "CodeEditorTutorialsListButton",
            onClick: () => {
              kT(), (0, yK.C)(TT.tutorial)
            },
            children: TT.name
          }, TT.tutorial)))
        })]
      })
    }
    var xK = cT(133),
      IK = cT(36361),
      AK = cT(8813);
    const CK = (0, MT.forwardRef)((function(TT, kT) {
      let {
        value: cT,
        onChange: lT,
        onSubmit: MT,
        placeholder: KT,
        maxLength: OT,
        rows: yT = 2,
        allowNewLines: fT = !1,
        onKeyDown: xT,
        before: AT
      } = TT;
      const {
        t: CT
      } = (0, nT.B)(), vT = "" !== cT.trim(), tT = () => {
        vT && MT()
      };
      return (0, IT.jsxs)("div", {
        className: "PanelPromptInputRow",
        children: [AT, (0, IT.jsx)("textarea", {
          ref: kT,
          className: "PanelPromptInput",
          value: cT,
          maxLength: OT,
          rows: yT,
          placeholder: KT,
          spellCheck: !1,
          autoComplete: "off",
          onChange: TT => {
            lT(fT ? TT.target.value : TT.target.value.replace(/\r?\n/g, " "))
          },
          onKeyDown: TT => {
            TT.nativeEvent.isComposing || 229 === TT.nativeEvent.keyCode ? TT.stopPropagation() : "Escape" !== TT.key && (TT.stopPropagation(), null === xT || void 0 === xT || xT(TT), TT.defaultPrevented || "Enter" !== TT.key || fT && TT.shiftKey || (TT.preventDefault(), tT()))
          }
        }), (0, IT.jsx)(jT.e, {
          className: "PanelPromptSend",
          disabled: !vT,
          onClick: tT,
          ariaLabel: CT("codeEditorPanels:send"),
          children: (0, IT.jsx)(hT.e, {
            name: "arrow-up"
          })
        })]
      })
    }));

    function jK(TT) {
      let {
        inputRef: kT
      } = TT;
      const {
        t: cT
      } = (0, nT.B)(), {
        messages: lT,
        reportedPlayers: KT,
        channel: OT
      } = (0, AK.l)(), [yT, fT] = (0, MT.useState)(""), xT = (0, MT.useRef)({
        stepsBack: 0,
        text: ""
      });
      return (0, IT.jsxs)("div", {
        className: "CodeEditorChatPanel",
        children: [(0, IT.jsx)("div", {
          className: "CodeEditorChatHeader",
          children: (0, IT.jsx)("span", {
            className: "CodeEditorChatTitle",
            children: cT("codeEditorChat:title")
          })
        }), 0 === lT.length ? (0, IT.jsx)("div", {
          className: "CodeEditorChatEmpty",
          children: cT("codeEditorChat:empty")
        }) : (0, IT.jsx)("div", {
          className: "ChatMessages CodeEditorChatMessages",
          children: (0, IT.jsx)(IK.e, {
            messages: lT,
            reportedPlayers: KT
          })
        }), (0, IT.jsx)(CK, {
          ref: kT,
          value: yT,
          onChange: fT,
          onSubmit: () => {
            (0, AK.h)(yT), fT(""), xT.current = {
              stepsBack: 0,
              text: ""
            }
          },
          maxLength: wT.dd,
          rows: 1,
          placeholder: OT ? cT("touchOnly" === (0, xK.b)() ? "codeEditorChat:channelPlaceholderTouch" : "codeEditorChat:channelPlaceholder", {
            channel: OT.channelName
          }) : cT("codeEditorChat:placeholder"),
          before: OT && (0, IT.jsx)("button", {
            type: "button",
            className: "CodeEditorChatChannel",
            style: {
              backgroundColor: OT.elementBgColor
            },
            onClick: () => {
              AK.c.selectNextChannel(), kT.current.focus()
            },
            children: (0, IT.jsx)(rT.b, {
              text: OT.elementContent
            })
          }),
          onKeyDown: TT => {
            const kT = yT === xT.current.text;
            if ("ArrowUp" !== TT.key && "ArrowDown" !== TT.key || !kT && "" !== yT) "Tab" === TT.key && !TT.shiftKey && OT && (TT.preventDefault(), AK.c.selectNextChannel());
            else {
              TT.preventDefault();
              const cT = kT ? xT.current.stepsBack : 0;
              xT.current = (0, AK.f)(cT + ("ArrowUp" === TT.key ? 1 : -1)), fT(xT.current.text)
            }
          }
        })]
      })
    }
    var vK = cT(36722);

    function tK(TT) {
      return "expanded" === TT ? "always" : "shown" === TT ? "narrow" : void 0
    }

    function hK(TT) {
      var kT;
      let {
        pA: cT,
        worldPanel: lT,
        closeWorld: MT,
        aiShown: KT,
        defaultWidth: OT,
        children: yT
      } = TT;
      const fT = "hidden" !== cT;
      return (0, IT.jsx)(vK.c, {
        side: "right",
        defaultSize: fT ? "max(18rem, 40%)" : OT,
        covers: null !== (kT = tK(cT)) && void 0 !== kT ? kT : KT ? "narrow" : void 0,
        children: (0, IT.jsxs)("div", {
          className: Dc()("CodeEditorRightColumn", {
            WorldShown: fT,
            WorldExpanded: "expanded" === cT
          }),
          children: [fT && (0, IT.jsx)(vK.c, {
            side: "top",
            onClose: MT,
            children: lT
          }), yT]
        })
      })
    }
    var NK = cT(2002),
      QK = cT(1122),
      SK = cT(1303);
    class DK {
      constructor(TT, kT, cT) {
        this.measure = TT, this.apply = kT, this.now = cT, this.last = null, this.resizedAt = -1 / 0, this.resizing = !1, this.stretchedAt = null
      }
      get rect() {
        var TT, kT;
        return null !== (TT = null === (kT = this.last) || void 0 === kT ? void 0 : kT.rect) && void 0 !== TT ? TT : null
      }
      sync() {
        const TT = function(TT) {
          const kT = Math.round(TT.left),
            cT = Math.round(TT.top);
          return {
            left: kT,
            top: cT,
            width: Math.round(TT.right) - kT,
            height: Math.round(TT.bottom) - cT
          }
        }(this.measure());
        if (TT.width <= 0 || TT.height <= 0) return;
        const kT = this.now(),
          cT = this.last;
        let lT = {
          width: TT.width,
          height: TT.height
        };
        null === cT || TT.width === cT.rect.width && TT.height === cT.rect.height || (this.resizing = kT - this.resizedAt < 100, this.resizedAt = kT);
        const MT = null !== cT && this.resizing && kT - this.resizedAt < 100 && (TT.width !== cT.bufferSize.width || TT.height !== cT.bufferSize.height);
        MT && (this.stretchedAt ??= kT), MT && kT - this.stretchedAt < 250 ? lT = cT.bufferSize : this.stretchedAt = null;
        const KT = {
          rect: TT,
          bufferSize: lT
        };
        var OT, yT;
        null !== cT && (yT = KT, (OT = cT).rect.left === yT.rect.left && OT.rect.top === yT.rect.top && OT.rect.width === yT.rect.width && OT.rect.height === yT.rect.height && OT.bufferSize.width === yT.bufferSize.width && OT.bufferSize.height === yT.bufferSize.height) || (this.last = KT, this.apply(KT))
      }
      stop() {
        null !== this.last && (this.last = null, this.apply(null))
      }
    }

    function aK(TT) {
      const {
        style: kT
      } = document.documentElement;
      for (const [cT, lT] of [
          ["--worldViewLeft", null === TT || void 0 === TT ? void 0 : TT.left],
          ["--worldViewTop", null === TT || void 0 === TT ? void 0 : TT.top],
          ["--worldViewWidth", null === TT || void 0 === TT ? void 0 : TT.width],
          ["--worldViewHeight", null === TT || void 0 === TT ? void 0 : TT.height]
        ]) void 0 === lT ? kT.removeProperty(cT) : kT.setProperty(cT, `${lT}px`)
    }
    var FK = cT(1741),
      rK = cT(2018);

    function PK(TT, kT) {
      (0, MT.useEffect)((() => {
        if (!TT) return;
        const cT = TT => {
          var cT;
          "Escape" === TT.key ? (TT.stopPropagation(), TT.preventDefault(), kT()) : (cT = TT.code, Object.entries(Uk.y).some((TT => {
            let [kT, lT] = TT;
            const MT = rK.d[kT];
            return MT.includes("ui") && !MT.includes("core") && lT.includes(cT)
          })) && !(0, FK.isTextEntry)(TT.target) && TT.preventDefault())
        };
        window.addEventListener("keydown", cT, !0);
        const lT = (0, dT.p)(kT);
        return () => {
          window.removeEventListener("keydown", cT, !0), lT()
        }
      }), [TT, kT])
    }

    function wK() {
      return (0, yM.l)().some((TT => TT !== yM.c))
    }

    function mK(TT, kT) {
      return TT.map((TT => kT ? String(TT) : TT.toFixed(1))).join(", ")
    }

    function bK(TT) {
      let {
        freeCamera: kT,
        picking: cT,
        hovered: lT
      } = TT;
      const {
        t: KT
      } = (0, nT.B)(), OT = (0, MT.useRef)(null), yT = (0, MT.useRef)(null);
      return (0, MT.useEffect)((() => {
        const TT = (TT, kT) => {
            TT.textContent !== kT && (TT.textContent = kT)
          },
          cT = () => {
            const cT = kT ? xT.gameBridge.lookup("freeCameraPos", null) : null;
            TT(OT.current, mK(null !== cT && void 0 !== cT ? cT : xT.gameBridge.lookup("localPos", null), !1));
            const lT = xT.gameBridge.lookup("targetedBlockPos", null);
            TT(yT.current, lT ? mK(lT, !0) : "-")
          };
        return cT(), (0, SK.A)(cT)
      }), [kT]), (0, IT.jsxs)("div", {
        className: "WorldPanelCoordinates",
        children: [(0, IT.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: KT(kT ? "codeEditorWorld:camera" : "codeEditorWorld:position")
        }), (0, IT.jsx)("span", {
          ref: OT
        }), (0, IT.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: KT("codeEditorWorld:lookingAt")
        }), (0, IT.jsx)("span", {
          ref: yT,
          hidden: cT
        }), cT && (0, IT.jsxs)(IT.Fragment, {
          children: [(0, IT.jsx)("span", {
            children: lT ? mK(lT.pos, !0) : "-"
          }), lT && (0, IT.jsx)("span", {
            className: "WorldPanelCoordsName",
            children: lT.name
          })]
        })]
      })
    }
    var zK = cT(36725);

    function JK(TT) {
      const kT = TT.currentTarget.getBoundingClientRect();
      return {
        x: (TT.clientX - kT.left) / kT.width,
        y: (TT.clientY - kT.top) / kT.height
      }
    }

    function oK(TT) {
      const [kT, cT] = (0, MT.useState)(!1), [lT, KT] = (0, MT.useState)(null), OT = (0, MT.useRef)(null);
      (0, MT.useEffect)((() => {
        if (!kT) return;
        let TT = null,
          cT = null,
          lT = 1 / 0;
        const MT = (0, SK.s)((kT => {
          lT += kT;
          const MT = OT.current;
          if (MT === cT && lT < 100) return;
          cT = MT, lT = 0;
          const yT = MT && xT.gameBridge.lookup("blockAtViewPoint", MT);
          var fT, IT;
          (fT = yT) === (IT = TT) || null !== fT && null !== IT && fT.name === IT.name && (0, zK.c)(fT.pos, IT.pos) && (0, zK.c)(fT.normal, IT.normal) || (TT = yT, KT(yT), xT.gameBridge.send("setBlockHighlight", yT))
        }));
        return () => {
          MT(), null !== TT && xT.gameBridge.send("setBlockHighlight", null), KT(null)
        }
      }), [kT]);
      const yT = (0, MT.useCallback)((() => {
        cT(!1)
      }), []);
      PK(kT, yT);
      const fT = {
        onPointerMove: TT => {
          OT.current = JK(TT)
        },
        onPointerLeave: () => {
          OT.current = null
        },
        onClick: lT => {
          if (!kT) return;
          const MT = xT.gameBridge.lookup("blockAtViewPoint", JK(lT));
          null !== MT && (cT(!1), TT(MT.pos))
        }
      };
      return {
        picking: kT,
        setPicking: cT,
        hovered: lT,
        slotHandlers: fT
      }
    }

    function HK(TT) {
      xT.gameBridge.send("setFreeCameraMovesFly", TT)
    }

    function eK(TT) {
      let {
        shown: kT,
        setShown: cT,
        canInsertCode: lT
      } = TT;
      const {
        t: KT
      } = (0, nT.B)(), {
        isTouchScreen: OT
      } = (0, XT.n)(["isTouchScreen"]), yT = (0, MT.useRef)(null), xT = (0, MT.useCallback)((() => {
        var TT;
        null === (TT = yT.current.closest(".CodeEditorBg").querySelector(".cm-content")) || void 0 === TT || TT.focus()
      }), []), {
        control: AT,
        take: CT,
        release: tT,
        blocked: NT
      } = function(TT) {
        const [kT, cT] = (0, MT.useState)("none"), lT = (0, MT.useRef)("none"), [KT, OT] = (0, MT.useState)(!1), yT = TT => {
          lT.current = TT, cT(TT)
        }, fT = (0, MT.useCallback)((() => {
          const kT = lT.current;
          "none" !== kT && (yT("none"), (0, yM.p)(yM.c), "mouse" === kT && TT())
        }), [TT]), xT = (0, MT.useCallback)((TT => {
          wK() ? OT(!0) : (yT("mouse" === TT && "touchOnly" !== (0, xK.b)() ? "mouse" : "touch"), (0, yM.o)(yM.c))
        }), []);
        return (0, PT.g)("pointerLockUpdate", (TT => {
          TT && "touch" === lT.current && "touchOnly" !== (0, xK.b)() ? yT("mouse") : TT || "mouse" !== lT.current || fT()
        })), (0, MT.useEffect)((() => {
          if (!KT) return;
          const TT = () => {
            wK() || OT(!1)
          };
          return TT(), (0, yM.d)(TT)
        }), [KT]), PK("none" !== kT, fT), (0, MT.useEffect)((() => {
          if ("none" === kT) return;
          const TT = TT => {
            (0, FK.isTextEntry)(TT.target) && fT()
          };
          return document.addEventListener("focusin", TT), () => {
            document.removeEventListener("focusin", TT)
          }
        }), [kT, fT]), (0, MT.useEffect)((() => (document.addEventListener("pointerlockerror", fT), () => {
          document.removeEventListener("pointerlockerror", fT)
        })), [fT]), (0, MT.useEffect)((() => () => {
          "none" !== lT.current && null !== XT.e.get("openInGameMenuName") && (0, yM.p)(yM.c)
        }), []), {
          control: kT,
          take: xT,
          release: fT,
          blocked: KT
        }
      }(xT), QT = (0, QK.i)(vK.d);
      (0, MT.useEffect)((() => {
        "touch" !== AT || "shown" !== kT || QT ? "none" === AT && "expanded" === kT && cT("shown") : cT("expanded")
      }), [AT, QT]),
      function(TT, kT) {
        const cT = (0, MT.useRef)(kT);
        cT.current = kT;
        const lT = (0, MT.useRef)(null);
        (0, MT.useLayoutEffect)((() => {
          const kT = new DK((() => TT.current.getBoundingClientRect()), (TT => {
            var kT;
            "none" !== cT.current && aK(null !== (kT = null === TT || void 0 === TT ? void 0 : TT.rect) && void 0 !== kT ? kT : null), (0, SK.E)().setGameView(TT)
          }), (() => performance.now()));
          lT.current = kT, kT.sync();
          const MT = (0, SK.o)((() => {
            kT.sync()
          }));
          return () => {
            MT(), XT.e.set({
              worldPanelHud: null
            }), kT.stop()
          }
        }), [TT]), (0, MT.useLayoutEffect)((() => {
          lT.current.sync(), aK("none" === kT ? null : lT.current.rect), XT.e.set({
            worldPanelHud: kT
          })
        }), [kT])
      }(yT, "touch" === AT ? "touchControls" : "none");
      const {
        picking: ST,
        setPicking: DT,
        hovered: aT,
        slotHandlers: FT
      } = oK((TT => {
        vT.k.nt("CodeEditorInsertText", {
          text: `[${TT.join(", ")}]`,
          focus: !OT
        }), (0, vK.d)() && cT("hidden")
      })), rT = function() {
        const {
          allowed: TT,
          movesFly: kT
        } = (0, mT.h)("freeCamera"), cT = (0, MT.useRef)(kT), lT = (0, MT.useRef)(kT);
        return lT.current !== kT && (lT.current = kT, cT.current = kT), (0, MT.useEffect)((() => () => {
          cT.current && HK(!1)
        }), []), {
          allowed: TT,
          on: kT,
          toggle: () => {
            cT.current = !kT, HK(!kT)
          }
        }
      }(), wT = (0, fT.f)("hideCoordinates"), bT = (0, mT.h)("localPlayerAlive"), zT = !bT || NT;
      (0, MT.useEffect)((() => {
        bT || tT()
      }), [bT, tT]), (0, MT.useEffect)((() => {
        !zT && lT || DT(!1)
      }), [zT, lT, DT]);
      const JT = rT.on ? jT.m : jT.e,
        oT = ST ? jT.m : jT.e;
      return (0, IT.jsxs)("div", {
        className: "WorldPanel",
        children: [(0, IT.jsxs)("div", {
          className: "WorldPanelHeader",
          children: [(0, IT.jsx)("span", {
            className: "WorldPanelTitle",
            children: KT("codeEditorWorld:title")
          }), "touch" === AT && !QT && (0, IT.jsx)(jT.e, {
            className: "WorldPanelButton",
            onClick: tT,
            children: KT("codeEditorWorld:backToCode")
          }), !zT && rT.allowed && !OT && (0, IT.jsx)(BT.c, {
            tooltipInner: KT("codeEditorWorld:freeCameraTooltip"),
            hoverOnly: !0,
            children: (0, IT.jsx)(JT, {
              className: "WorldPanelButton",
              ariaPressed: rT.on,
              ariaLabel: KT("codeEditorWorld:freeCamera"),
              onClick: rT.toggle,
              children: (0, IT.jsx)(hT.e, {
                name: "video"
              })
            })
          }), !zT && lT && (0, IT.jsx)(BT.c, {
            tooltipInner: KT("codeEditorWorld:pickTooltip"),
            hoverOnly: !0,
            children: (0, IT.jsxs)(oT, {
              className: "WorldPanelButton",
              ariaPressed: ST,
              onClick: () => {
                tT(), DT(!ST)
              },
              children: [(0, IT.jsx)(hT.e, {
                name: "crosshairs"
              }), KT("codeEditorWorld:pick")]
            })
          })]
        }), !wT && (0, IT.jsx)(bK, {
          freeCamera: rT.on,
          picking: ST,
          hovered: aT
        }), (0, IT.jsxs)("div", {
          ref: yT,
          className: Dc()("WorldPanelSlot", {
            TouchControl: "touch" === AT,
            Picking: ST
          }),
          onPointerDown: TT => {
            0 !== TT.button || zT || ST || CT(TT.pointerType)
          },
          ...FT,
          children: [!zT && !ST && (0, IT.jsx)("div", {
            className: "WorldPanelCrosshair",
            children: "+"
          }), !zT && "touch" !== AT && (0, IT.jsxs)("div", {
            className: "WorldPanelHint",
            children: [ST && KT(OT ? "codeEditorWorld:tapToPick" : "codeEditorWorld:clickToPick"), !ST && "none" === AT && !rT.on && KT(OT ? "codeEditorWorld:tapToPlay" : "codeEditorWorld:clickToPlay"), !ST && "none" === AT && rT.on && KT("codeEditorWorld:clickToFly"), "mouse" === AT && (0, IT.jsxs)(IT.Fragment, {
              children: [(0, IT.jsx)(NK.b, {
                noaAction: "OpenLobbyLeaderboard"
              }), KT("codeEditorWorld:backToCode")]
            })]
          }), zT && (0, IT.jsxs)("div", {
            className: "WorldPanelWaiting",
            children: [(0, IT.jsx)("span", {
              children: KT(bT ? "codeEditorWorld:gameWaiting" : "codeEditorWorld:died")
            }), (0, IT.jsx)(jT.e, {
              onClick: dT.f,
              children: KT("codeEditorWorld:toGame")
            })]
          })]
        })]
      })
    }
    var GK = cT(4968);

    function VK(TT) {
      let {
        pA: kT,
        setWorld: cT,
        toggleWorld: lT,
        aiShown: MT,
        closeAi: KT
      } = TT;
      const {
        t: OT
      } = (0, nT.B)(), yT = MT ? "ai" : "hidden" !== kT ? "world" : "code", fT = [{
        value: "code",
        label: OT("codeEditorWorld:codePane")
      }, {
        value: "world",
        label: OT("codeEditorWorld:title")
      }];
      MT && fT.push({
        value: "ai",
        label: OT("codeEditorWorld:aiPane")
      });
      return (0, IT.jsx)("div", {
        className: "CodeEditorPaneSwitch",
        children: (0, IT.jsx)(GK.d, {
          options: fT,
          value: yT,
          onChange: TT => {
            "world" !== TT ? (MT && KT(), cT("hidden")) : "hidden" === kT ? lT() : KT()
          },
          ariaLabel: OT("codeEditorWorld:panes"),
          keepsFocus: !0
        })
      })
    }
    var EK = cT(36733);
    class ZK {
      constructor(TT, kT) {
        this.storageKey = TT, this.defaultValue = kT, this.value = null, this.listeners = new Set, this.get = () => {
          if (null === this.value) {
            const TT = eT.e.getItem(this.storageKey);
            this.value = "boolean" === typeof TT ? TT : this.defaultValue
          }
          return this.value
        }, this.set = TT => {
          this.value = TT, eT.e.setItem(this.storageKey, TT);
          for (const kT of this.listeners) kT(TT)
        }
      }
      subscribe(TT) {
        return this.listeners.add(TT), () => {
          this.listeners.delete(TT)
        }
      }
    }
    const uK = new ZK("codeEditorLightMode", !1),
      XK = new ZK("codeEditorAiHints", !0);

    function dK(TT) {
      const [kT, cT] = (0, MT.useState)(TT.get);
      return (0, MT.useEffect)((() => {
        const kT = TT.subscribe(cT);
        return cT(TT.get()), kT
      }), [TT]), [kT, TT.set]
    }
    var LK = cT(36739),
      RK = cT(36742),
      gK = cT(36749);
    const UK = (0, MT.lazy)((() => Promise.all([cT.e(290), cT.e(286), cT.e(289), cT.e(285), cT.e(82), cT.e(288), cT.e(287), cT.e(284)]).then((() => cT(40929))))),
      YK = (0, MT.lazy)((() => Promise.all([cT.e(77), cT.e(80), cT.e(81), cT.e(79), cT.e(292)]).then((() => cT(41070))))),
      BK = (0, MT.lazy)((() => Promise.all([cT.e(290), cT.e(289), cT.e(82), cT.e(80), cT.e(81), cT.e(79), cT.e(288), cT.e(287), cT.e(78), cT.e(89)]).then((() => cT(41072)))));

    function WK(TT) {
      return xT.gameBridge.query("worldCodeAiChunk", TT)
    }

    function nK() {
      return xT.gameBridge.query("worldCodeAiGameState", null)
    }

    function pK(TT) {
      const {
        gsUrl: kT,
        gameNameWithVariation: cT,
        lobbyName: lT
      } = nM();
      return (0, SM.postJsonWithMetricsCookiesAndJsonResponse)(`${kT}/code/get-lobby-code`, QM.dk["get-lobby-code"].toBuffer({
        gameNameWithVariation: cT,
        lobbyName: lT,
        path: TT
      }), {
        retries: 1
      })
    }
    let iK = !1;
    const qK = [],
      sK = {
        message: "You do not have permission to view the code.",
        type: "warning"
      },
      TO = (0, MT.memo)((function(TT) {
        var kT, cT;
        let {
          show: lT,
          onOpen: KT,
          onClose: yT,
          isLobbyCode: AT
        } = TT;
        const CT = (0, MT.useRef)(""),
          [tT, NT] = (0, MT.useState)(null),
          QT = (0, MT.useRef)(AT),
          [ST, DT] = (0, MT.useState)({
            message: null,
            type: null
          }),
          [aT, FT] = (0, MT.useState)(""),
          rT = ST.message ? ST : {
            message: aT,
            type: "warning"
          },
          [zT, JT] = (0, MT.useState)(!0),
          [oT, eT] = dK(uK),
          [GT, VT] = dK(XK),
          [ET, ZT] = (0, MT.useState)(!1),
          [uT, LT] = (0, MT.useState)(!1),
          RT = (0, MT.useRef)(null),
          gT = (0, MT.useRef)(!1);
        (0, MT.useEffect)((() => {
          var TT;
          uT && gT.current && (gT.current = !1, null === (TT = RT.current) || void 0 === TT || TT.focus())
        }), [uT]);
        const UT = (0, EK.d)(),
          YT = (0, MT.useRef)(null),
          WT = (0, MT.useRef)(null),
          {
            openInGameMenuName: pT,
            openEverythingMenuName: iT,
            worldPanelHud: qT
          } = (0, XT.n)(["openInGameMenuName", "openEverythingMenuName", "worldPanelHud"]),
          sT = TT => {
            lT && (YT.current = TT, mk.current = !0)
          };
        (0, PT.g)("OpenReportMenu", (() => {
          sT("Yj")
        })), (0, PT.g)("OpenStoreFromCodeEditor", (() => {
          sT("store")
        })), (0, MT.useEffect)((() => {
          const TT = YT.current;
          null === TT || "Yj" === TT && ("makeReport" === pT || "makeDiscordReport" === pT) || "store" === TT && null !== iT || (YT.current = null, null === pT && null === iT ? AT ? (WT.current = Mc.current, vT.k.nt("EditLobbyCode", tT)) : vT.k.nt("EditCodeBlock", {
            pos: tT,
            canChangePos: QT.current
          }) : (0, yK.w)())
        }), [pT, iT, AT, tT]), (0, MT.useEffect)((() => {
          if (lT) return () => {
            WT.current = null
          }
        }), [lT]);
        const [Tk, kk] = function() {
          const [TT, kT] = (0, MT.useState)(iK);
          return (0, PT.g)("CodeEditorAiHelperShown", (TT => {
            kT(TT)
          })), [TT, (0, MT.useCallback)((TT => {
            iK = TT, vT.k.nt("CodeEditorAiHelperShown", TT)
          }), [])]
        }(), [ck, lk] = (0, MT.useState)(null), [Mk, Kk] = (0, MT.useState)([]), [Ok, yk] = (0, MT.useState)(0), [fk, xk] = (0, MT.useState)(0), [Ik, Ak] = (0, MT.useState)(""), jk = (0, MT.useRef)(null), [vk, tk] = (0, MT.useState)(AT ? gK.e : null), hk = AT || null !== tT, Nk = (0, fT.f)("canEditCode"), Qk = (0, fT.f)("canUseDevCreativeItems"), Sk = (0, OK.l)("welcome"), Dk = (0, OK.l)("docsOverview"), ak = Dk ? "docsOverview" : "welcome", Fk = null !== Dk && void 0 !== Dk ? Dk : Sk, rk = (0, OK.l)("aiHelperOverview"), Pk = rk ? "aiHelperOverview" : "welcome", wk = null !== rk && void 0 !== rk ? rk : Sk, mk = (0, MT.useRef)(!1), bk = (0, MT.useRef)(!1), zk = (0, MT.useRef)(null), [Jk, Hk] = (0, MT.useState)(""), [ek, Gk] = (0, MT.useState)(!1), [Vk, Ek] = (0, MT.useState)(null), Zk = (0, mT.h)("connectedGame"), uk = AT && Nk && "classic" === Zk.gameNameWithVariation && !(0, Ck.K)(Zk.lobbyName), [Xk, dk] = (0, MT.useState)(null), [Lk, gk] = (0, MT.useState)({
          [DM.g]: ""
        }), [Yk, Bk] = (0, MT.useState)({
          assets: {},
          revision: 0
        }), Wk = (0, MT.useRef)(Yk), nk = (0, MT.useCallback)((TT => {
          var kT;
          TT.revision < Wk.current.revision || (Wk.current = TT, Bk(TT), FT(TT.startupError ? `Schematics could not load: ${TT.startupError}` : ""), null === (kT = hc.current) || void 0 === kT || kT.onLobbyFilesChanged({
            ...xc.current,
            ...(0, JM.o)(TT.assets)
          }))
        }), []), [pk, ik] = (0, MT.useState)(DM.g), [qk, sk] = (0, MT.useState)(null), [Tc, kc] = (0, MT.useState)(null), cc = (0, MT.useRef)(!1), lc = (0, MT.useRef)(null), Mc = (0, MT.useRef)(pk);
        Mc.current = pk;
        const Kc = (0, MT.useRef)(qk);
        Kc.current = qk;
        const Oc = qk ? null : Vk,
          yc = Oc && !Oc.engineLocked ? Oc.worldCodeEngine : null,
          fc = (0, MT.useRef)(Tc);
        fc.current = Tc;
        const xc = (0, MT.useRef)(Lk);
        xc.current = Lk;
        const Ic = (0, MT.useRef)(null),
          Ac = (0, MT.useRef)(null),
          [Cc, jc] = (0, MT.useState)(!1),
          vc = (0, dM.n)(),
          tc = (0, MT.useRef)([]),
          hc = (0, MT.useRef)(null),
          Nc = (0, MT.useRef)(null),
          Qc = (0, MT.useRef)(null);

        function Sc(TT) {
          DT(TT), clearTimeout(zk.current), zk.current = setTimeout((() => {
            DT({
              message: null,
              type: null
            })
          }), 3e3)
        }
        const ac = (0, MT.useCallback)((function() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            cc.current && lc.current && (xT.gameBridge.send("sendCodeCollab", {
              jl: aM.b.Leave,
              vl: (0, aM.w)(lc.current),
              HO: !!TT || null
            }), cc.current = !1, lc.current = null), dk(null)
          }), []),
          Fc = (0, MT.useCallback)((TT => {
            const kT = {
              kind: "lobby",
              path: TT
            };
            lc.current = kT, ik(TT), CT.current = "", xT.gameBridge.send("sendCodeCollab", {
              jl: aM.b.Join,
              vl: (0, aM.w)(kT)
            }), cc.current = !0
          }), []),
          rc = (0, MT.useCallback)((TT => {
            var kT;
            const cT = null === (kT = Nc.current) || void 0 === kT ? void 0 : kT.collabState;
            return cT && "lobby" === cT.docKey.kind && cT.docKey.path === TT && Mc.current === TT ? Promise.resolve({
              doc: cT.doc,
              version: cT.version,
              clientID: cT.clientID,
              docKey: cT.docKey,
              httpConfig: cT.httpConfig
            }) : new Promise(((kT, cT) => {
              const lT = setTimeout((() => {
                  tc.current = tc.current.filter((TT => TT !== MT)), cT(new Error(`Timed out joining ${TT}`))
                }), 15e3),
                MT = cT => {
                  "lobby" === cT.docKey.kind && cT.docKey.path === TT && (clearTimeout(lT), tc.current = tc.current.filter((TT => TT !== MT)), kT(cT))
                };
              tc.current.push(MT), Mc.current !== TT ? (ac(!0), Fc(TT)) : cc.current || Fc(TT)
            }))
          }), [Fc, ac]),
          Pc = (0, MT.useCallback)((async function(TT, kT) {
            let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
            const lT = Date.now();
            let MT = TT in xc.current;
            for (; MT !== kT;) {
              if (Date.now() - lT > cT) throw new Error(`Timed out waiting for lobby path ${TT} present=${kT}`);
              await (0, Sl.Y)(50), MT = TT in xc.current
            }
          }), []),
          wc = (0, MT.useCallback)((TT => {
            const kT = xc.current,
              cT = DM.g in kT && DM.k in kT;
            if (!(0, FM.f)(TT) || cT) {
              if (Mc.current === TT) {
                var lT;
                const MT = cT && (0, FM.f)(TT) ? TT === DM.g ? DM.k : DM.g : null !== (lT = (0, FM.b)(kT)) && void 0 !== lT ? lT : DM.g;
                Ac.current = {
                  fromPath: TT,
                  toPath: MT
                }, ik(MT)
              }
              xT.gameBridge.send("sendCodeCollab", {
                jl: aM.b.DeleteFile,
                vl: (0, aM.w)({
                  kind: "lobby",
                  path: Mc.current
                }),
                eO: TT
              })
            }
          }), []),
          mc = (0, MT.useCallback)((TT => {
            WT.current = null, sk(null), kc(null), !AT || TT === Mc.current && cc.current || (ac(!0), Fc(TT))
          }), [AT, ac, Fc]),
          bc = (0, MT.useCallback)(((TT, kT) => {
            const cT = bM.g[TT],
              lT = cT && kT in cT.files ? kT : "index.ts";
            if (TT !== Kc.current || lT !== fc.current) {
              var MT;
              if (TT !== Kc.current) null === (MT = hc.current) || void 0 === MT || MT.stopContinuousSync(), ac(!0);
              sk(TT), kc(lT)
            }
          }), [ac]),
          zc = (0, MT.useCallback)((TT => {
            var kT;
            const cT = Mc.current,
              lT = xc.current[cT],
              MT = cc.current && !Kc.current && cT in TT && void 0 !== lT ? {
                ...TT,
                [cT]: lT
              } : TT;
            gk(MT);
            const KT = Ic.current;
            if (KT && KT in TT) Ic.current = null, KT !== Mc.current && mc(KT);
            else if (!(Mc.current in TT) && cc.current && !Kc.current) {
              var OT;
              mc(null !== (OT = (0, FM.b)(TT)) && void 0 !== OT ? OT : DM.g)
            }
            null === (kT = hc.current) || void 0 === kT || kT.onLobbyFilesChanged({
              ...MT,
              ...(0, JM.o)(Wk.current.assets)
            })
          }), [mc]),
          Jc = (0, MT.useCallback)((() => pK(Mc.current).then((async TT => {
            if (!cc.current || !TT.files) return null;
            zc(TT.files);
            const kT = await pM({
              action: "state"
            });
            return nk(kT), {
              ...TT.files,
              ...(0, JM.o)(kT.assets)
            }
          })).catch((TT => (console.error("[CodeCollab] Failed to fetch lobby files via HTTP", TT), Sc({
            message: "Could not refresh the file list",
            type: "warning"
          }), null)))), [zc, nk]),
          oc = () => {
            yT()
          };
        (0, MT.useEffect)((() => {
          if (FT(""), !lT || !AT) return;
          let TT = !1;
          return Wk.current = {
            assets: {},
            revision: 0
          }, Bk(Wk.current), pM({
            action: "state"
          }).then((kT => {
            TT || nk(kT)
          })).catch((kT => {
            console.error("Could not load project schematics", kT), TT || FT("Could not load schematics. Reopen the Code Editor to retry.")
          })), () => {
            TT = !0
          }
        }), [lT, AT, nk]);
        const Hc = (0, MT.useCallback)((function() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            lc.current && xT.gameBridge.send("sendCodeCollab", {
              jl: aM.b.Submit,
              vl: (0, aM.w)(lc.current),
              ...TT ? {
                Ql: "keepOpen"
              } : {}
            })
          }), []),
          ec = (0, MT.useCallback)((() => {
            if (!lc.current || "lobby" !== lc.current.kind) return;
            const TT = Jk.trim();
            (0, rM.p)(TT) ? (xT.gameBridge.send("sendCodeCollab", {
              jl: aM.b.ReloadAsVariation,
              vl: (0, aM.w)(lc.current),
              Ql: TT
            }), Gk(!1)) : Sc({
              message: "Variation must be 1-32 characters: A-Z, a-z, 0-9, _, -",
              type: "warning"
            })
          }), [Jk]),
          Gc = (0, MT.useCallback)((TT => {
            xT.gameBridge.send("sendCodeCollab", {
              jl: aM.b.SetEngine,
              vl: (0, aM.w)({
                kind: "lobby",
                path: Mc.current
              }),
              Ql: TT
            })
          }), []),
          Vc = (0, MT.useCallback)((TT => {
            if (!Kc.current && Nk && (QT.current || AT)) {
              if (AT) {
                var kT;
                const cT = (0, FM.n)(xc.current, Mc.current),
                  lT = Math.min(Rk.t, Math.max(0, Rk.y - cT)),
                  MT = TT.slice(0, lT);
                return CT.current = MT, gk((TT => ({
                  ...TT,
                  [Mc.current]: MT
                }))), void(null === (kT = hc.current) || void 0 === kT || kT.onDocTextChanged(Mc.current, MT))
              }
              CT.current = TT, Ak(TT)
            }
          }), [Nk, AT]);
        (0, PT.g)("EditLobbyCode", (TT => {
          var kT;
          HT.featureFlags.canSeePlayerWrittenText && AT && (ac(), NT(TT), CT.current = "", gk({
            [DM.g]: ""
          }), Ek(null), ik(DM.g), sk(null), kc(null), Ic.current = null, Ac.current = null, null === (kT = hc.current) || void 0 === kT || kT.stopContinuousSync(), KT(), Fc(DM.g))
        })), (0, PT.g)("EditCodeBlock", (TT => {
          let {
            pos: kT,
            canChangePos: cT
          } = TT;
          if (HT.featureFlags.canSeePlayerWrittenText && !AT)
            if (ac(), null !== kT && (kT = [...kT]), NT(kT), QT.current = cT, null !== kT) {
              CT.current = "", Ak(""), KT();
              const TT = {
                  kind: "codeBlock",
                  pos: kT
                },
                lT = (0, aM.w)(TT);
              jk.current !== lT && (jk.current = lT, Kk([]), xk(Ok)), tk((0, gK.d)(lT, [kT[0], kT[1], kT[2]], !!cT)), lc.current = TT, xT.gameBridge.send("sendCodeCollab", {
                jl: aM.b.Join,
                vl: (0, aM.w)(TT)
              }), cc.current = !0
            } else lT && yT()
        })), (0, PT.g)("codeCollabRejoin", (TT => {
          const kT = lc.current ? (0, aM.w)(lc.current) : null;
          kT && TT.docKey === kT && (CT.current = TT.doc, AT || Ak(TT.doc), dk((kT => kT ? {
            ...kT,
            doc: TT.doc,
            version: TT.version,
            clientID: (0, mM.d)()
          } : kT)))
        })), (0, PT.g)("codeCollab", (TT => {
          var kT;
          const cT = lc.current ? (0, aM.w)(lc.current) : null;
          if (TT.type === aM.c.LobbyFilesChanged && AT) {
            if ("string" !== typeof TT.files) return void Jc();
            try {
              zc(JSON.parse(TT.files))
            } catch (xT) {
              console.error("[CodeCollab] Failed to parse lobby files", xT), Jc()
            }
            return
          }
          if (TT.type === aM.c.EngineSettings && AT) return void Ek(TK(TT.engineSettings));
          const MT = TT.type === aM.c.Joined ? (0, aM.h)(TT.docKey) : null,
            KT = AT && "lobby" === (null === (kT = lc.current) || void 0 === kT ? void 0 : kT.kind) && (0, FM.f)(lc.current.path) && "lobby" === (null === MT || void 0 === MT ? void 0 : MT.kind) && (0, FM.f)(MT.path);
          if (!cT || TT.docKey === cT || KT)
            if (TT.type !== aM.c.ForceClose) {
              if (lT)
                if (TT.type === aM.c.Joined) {
                  var OT;
                  const IT = JSON.parse(TT.peers),
                    jT = TT.existingCursors ? JSON.parse(TT.existingCursors) : [],
                    hT = (0, mM.d)(),
                    NT = nM(),
                    {
                      gsUrl: QT,
                      gameNameWithVariation: ST,
                      lobbyName: aT
                    } = NT,
                    FT = null !== (OT = (0, aM.h)(TT.docKey)) && void 0 !== OT ? OT : lc.current;
                  FT && (lc.current = FT, "lobby" === FT.kind && (ik(FT.path), Mc.current = FT.path));
                  const rT = FT || (AT ? {
                    kind: "lobby",
                    path: Mc.current
                  } : {
                    kind: "codeBlock",
                    pos: tT
                  });

                  function PT(kT) {
                    var cT, lT;
                    if (!cc.current) return;
                    const MT = null !== (cT = kT.code) && void 0 !== cT ? cT : "",
                      KT = null !== (lT = kT.collabVersion) && void 0 !== lT ? lT : 0;
                    CT.current = MT, AT || Ak(MT), AT && kT.files ? gk(kT.files) : AT && gk((TT => ({
                      ...TT,
                      [Mc.current]: MT
                    })));
                    const OT = {
                      doc: MT,
                      version: KT,
                      clientID: hT,
                      docKey: rT,
                      peers: IT,
                      editorCount: TT.editorCount,
                      existingCursors: jT,
                      httpConfig: NT
                    };
                    if (dk(OT), "lobby" === rT.kind) {
                      var yT;
                      const TT = {
                        doc: MT,
                        version: KT,
                        clientID: hT,
                        docKey: rT,
                        httpConfig: NT
                      };
                      for (const kT of [...tc.current]) kT(TT);
                      null === (yT = hc.current) || void 0 === yT || yT.startWhenReady()
                    }
                    kT.canSeeCode ? (clearTimeout(zk.current), DT({
                      message: null,
                      type: null
                    })) : function(TT) {
                      clearTimeout(zk.current), DT(TT)
                    }(sK);
                    const fT = WT.current;
                    WT.current = null, AT && fT && kT.files && fT in kT.files && fT !== Mc.current && mc(fT)
                  }
                  AT ? pK(Mc.current).then(PT).catch((TT => {
                    console.error("[CodeCollab] Failed to fetch lobby code via HTTP", TT), ac()
                  })) : (0, SM.postJsonWithMetricsCookiesAndJsonResponse)(`${QT}/code/get-code-block`, QM.dk["get-code-block"].toBuffer({
                    gameNameWithVariation: ST,
                    lobbyName: aT,
                    pos: tT
                  }), {
                    retries: 1
                  }).then(PT).catch((TT => {
                    console.error("[CodeCollab] Failed to fetch code block via HTTP", TT), ac()
                  }))
                } else if (TT.type === aM.c.Presence) {
                if (!cT) return;
                const wT = JSON.parse(TT.peers);
                dk((kT => kT ? {
                  ...kT,
                  peers: wT,
                  editorCount: TT.editorCount
                } : kT))
              }
            } else {
              var fT;
              if (!cT) return;
              lT && AT && "keptOpen" === TT.updates && vT.k.nt("CodeEditorKeepEdits");
              const mT = lc.current;
              cc.current = !1, lc.current = null, dk(null);
              if (!AT || "close" === TT.updates) return (0, RK.g)(), void(lT && yT());
              if (!lT) return;
              const bT = xc.current,
                zT = Ac.current;
              Ac.current = null;
              const JT = "lobby" === (null === mT || void 0 === mT ? void 0 : mT.kind) && mT.path === (null === zT || void 0 === zT ? void 0 : zT.fromPath),
                oT = zT && (JT || zT.toPath in bT || (0, FM.f)(zT.toPath)) ? zT.toPath : Mc.current in bT ? Mc.current : null !== (fT = (0, FM.b)(bT)) && void 0 !== fT ? fT : DM.g;
              Fc(oT)
            }
        })), (0, PT.g)("refetchCode", (() => {
          HT.featureFlags.canSeePlayerWrittenText && lT && cc.current && (Nk || (ac(), AT ? vT.k.nt("EditLobbyCode", tT) : vT.k.nt("EditCodeBlock", {
            pos: tT,
            canChangePos: QT.current
          })))
        }));
        const Ec = (0, MT.useCallback)((() => {
            lT && (ZT(!1), window.open("/docs", "_blank", "popup=yes,width=1200,height=800"))
          }), [lT]),
          Zc = (0, MT.useCallback)((() => {
            ZT(!1)
          }), []);
        (0, MT.useEffect)((() => {
          lT && Nk && ("docsButton" === Fk && ET ? (0, yK.f)("docsButton") : Fk && yK.h.includes(Fk) && !ET && (ZT(!0), kk(!1)))
        }), [lT, Nk, Fk, ET, kk]);
        const uc = (0, MT.useCallback)((() => {
          kk(!1)
        }), [kk]);
        (0, MT.useEffect)((() => {
          lT && Nk && hk && ("aiHelperButton" === wk && Tk ? (0, yK.f)("aiHelperButton") : wk && yK.d.includes(wk) && !Tk && (kk(!0), ZT(!1)))
        }), [lT, Nk, hk, wk, Tk, kk]), (0, MT.useEffect)((() => {
          if (!lT || !Nk) return;
          const TT = AT ? "worldCode" : "codeBlock";
          return (0, yK.A)(TT, !0), () => {
            (0, yK.A)(TT, !1)
          }
        }), [lT, Nk, AT]), (0, MT.useEffect)((() => {
          if (lT) return () => {
            mk.current ? mk.current = !1 : (0, yK.w)()
          }
        }), [lT]), (0, MT.useEffect)((() => {
          (0, yK.B)("exportButton", !!Qk)
        }), [Qk]);
        const {
          t: Xc
        } = (0, nT.B)(), dc = !Tk && Ok > fk, Lc = dc ? jT.I : jT.v, Rc = (0, MT.useCallback)(((TT, kT) => {
          vT.k.nt("CodeEditorGoToLine", {
            path: TT,
            line: kT
          }), mc(TT)
        }), [mc]), gc = (0, MT.useCallback)((TT => {
          Qc.current = TT
        }), []), Uc = function(TT, kT) {
          const [cT, lT] = (0, MT.useState)(null);
          return (0, MT.useEffect)((() => {
            if (!kT) return void lT(null);
            let cT = !1;
            return XM(TT).then((TT => {
              cT || lT(TT)
            }), (TT => {
              console.error("[CodeEditor] could not collect the imported plugins", TT), cT || lT(null)
            })), () => {
              cT = !0
            }
          }), [TT, kT]), cT
        }(Lk, lT);
        (0, MT.useEffect)((() => {
          Uc && qk && !Uc.includes(qk) && (sk(null), kc(null), AT && !cc.current && Fc(Mc.current))
        }), [qk, Uc, AT, Fc]), Nc.current = {
          collabState: Xk,
          ensureJoinedPath: rc,
          waitForLobbyPath: Pc,
          pullLobbyFiles: Jc,
          t: Xc,
          canEditCode: !!Nk
        }, hc.current || (hc.current = new BM({
          getLobbyFiles: () => ({
            ...xc.current,
            ...(0, JM.o)(Wk.current.assets)
          }),
          deleteSchematic: async TT => {
            const kT = await pM({
              action: "remove",
              path: TT,
              expectedRevision: Wk.current.revision
            });
            nk(kT)
          },
          getActivePath: () => Mc.current,
          getCollabSnapshot: () => {
            var TT;
            if (Kc.current) return null;
            const kT = null === (TT = Nc.current) || void 0 === TT ? void 0 : TT.collabState;
            return kT ? {
              doc: kT.doc,
              version: kT.version,
              clientID: kT.clientID,
              docKey: kT.docKey,
              httpConfig: kT.httpConfig
            } : null
          },
          replaceActiveDoc: (TT, kT) => {
            var cT, lT;
            return null !== (cT = null === (lT = Qc.current) || void 0 === lT ? void 0 : lT.call(Qc, TT, kT)) && void 0 !== cT && cT
          },
          ensureJoined: TT => Nc.current.ensureJoinedPath(TT),
          createFile: (TT, kT) => {
            !1 !== (null === kT || void 0 === kT ? void 0 : kT.focus) && (Ic.current = TT), xT.gameBridge.send("sendCodeCollab", {
              jl: aM.b.CreateFile,
              vl: (0, aM.w)({
                kind: "lobby",
                path: Mc.current
              }),
              eO: TT
            })
          },
          renameFile: (TT, kT) => {
            const cT = (0, aM.w)({
              kind: "lobby",
              path: Mc.current
            });
            Mc.current === TT && (Ac.current = {
              fromPath: TT,
              toPath: kT
            }, ik(kT)), xT.gameBridge.send("sendCodeCollab", {
              jl: aM.b.RenameFile,
              vl: cT,
              eO: TT,
              GO: kT
            })
          },
          deleteFile: TT => {
            wc(TT)
          },
          waitForLobbyPath: (TT, kT, cT) => Nc.current.waitForLobbyPath(TT, kT, cT),
          pullLobbyFiles: () => Nc.current.pullLobbyFiles(),
          setMessage: (TT, kT) => {
            Sc({
              message: TT,
              type: kT
            })
          },
          onUnlinked: () => {
            jc(!1)
          },
          t: TT => Nc.current.t(TT),
          canEditCode: () => Nc.current.canEditCode,
          getStorageKey: () => {
            const {
              gameNameWithVariation: TT,
              lobbyName: kT
            } = xT.gameBridge.latest("connectedGame");
            return (0, dM.c)(TT, kT)
          }
        }));
        const Yc = (0, MT.useCallback)((async TT => {
            const kT = hc.current;
            if (!kT) return !1;
            try {
              return await kT.writeLobbyFiles(TT)
            } catch (cT) {
              return console.error("World Code AI: couldn't write the change", cT), !1
            }
          }), []),
          Bc = (0, MT.useCallback)((async TT => {
            var kT, cT;
            const lT = null === (kT = TT.find((TT => TT.path === LK.e))) || void 0 === kT ? void 0 : kT.text,
              MT = lc.current;
            return void 0 !== lT && "codeBlock" === (null === MT || void 0 === MT ? void 0 : MT.kind) && (!(null === (cT = Qc.current) || void 0 === cT || !cT.call(Qc, (0, aM.w)(MT), lT)) && (CT.current = lT, Ak(lT), !0))
          }), []),
          Wc = (0, MT.useCallback)((async () => {
            try {
              var TT, kT;
              const cT = await pK(DM.g);
              return !1 === cT.canSeeCode ? null : null !== (TT = cT.files) && void 0 !== TT ? TT : {
                [DM.g]: null !== (kT = cT.code) && void 0 !== kT ? kT : ""
              }
            } catch (cT) {
              return console.error("World Code AI: couldn't read World Code for a code block", cT), null
            }
          }), []),
          nc = (0, MT.useMemo)((() => ({
            [LK.e]: Ik
          })), [Ik]),
          pc = (0, MT.useCallback)(((TT, kT) => {
            vT.k.nt("CodeEditorGoToLine", {
              path: LK.e,
              line: kT
            })
          }), []);
        (0, MT.useEffect)((() => {
          Tk && lT && xk(Ok)
        }), [Tk, lT, Ok]);
        const ic = (0, MT.useCallback)((() => {
            var TT, kT;
            Hc();
            const cT = (0, HT.isTouchscreen)() ? "open World Code again" : `press ${null!==(TT=null===(kT=Uk.y.OpenCodeEditor)||void 0===kT?void 0:kT[0])&&void 0!==TT?TT:"F8"}`,
              lT = AT ? `\ud83e\udd16 Try out your change, then ${cT} to tell the AI Helper how it went.` : "\ud83e\udd16 Click the code block to try your change, then open it again to tell the AI Helper how it went.";
            vT.k.nt("chat", {
              content: [{
                str: lT,
                style: {
                  color: wT.H.cyanUiText
                }
              }]
            })
          }), [Hc, AT]),
          qc = (0, MT.useCallback)((TT => {
            const kT = tT,
              cT = QT.current;
            AT || !kT || xT.gameBridge.lookup("codeBlockClickable", kT) ? (0, RK.k)(TT, {
              submit: () => {
                Hc(), vT.k.nt("chat", {
                  content: [{
                    str: "\ud83e\udd16 Testing your change. The AI Helper comes back in a moment.",
                    style: {
                      color: wT.H.cyanUiText
                    }
                  }]
                }), !AT && kT && setTimeout((() => {
                  xT.gameBridge.send("clickCodeBlock", kT)
                }), 1e3)
              },
              reopen: () => {
                (0, dT.s)() || (AT ? vT.k.nt("EditLobbyCode", kT) : vT.k.nt("EditCodeBlock", {
                  pos: kT,
                  canChangePos: cT
                }))
              }
            }) : ic()
          }), [Hc, AT, tT, ic]),
          sc = (0, MT.useCallback)((() => {
            kk(!1)
          }), [kk]),
          Tl = (0, MT.useRef)(oc);
        Tl.current = oc;
        const kl = (0, MT.useCallback)((function(TT) {
            let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            vT.k.nt("WorldCodeAiDraft", {
              text: TT,
              send: kT
            }), Tl.current(), vT.k.nt("EditLobbyCode", tT)
          }), [tT]),
          cl = (0, MT.useCallback)((TT => {
            Tl.current(), TT.codeBlock ? vT.k.nt("EditCodeBlock", {
              pos: [...TT.pos],
              canChangePos: TT.canChangePos
            }) : vT.k.nt("EditLobbyCode", tT)
          }), [tT]);
        (0, PT.g)("WorldCodeAiDraft", (TT => {
          AT && (lk(TT), kk(!0))
        }));
        const ll = !!Nk && !!Fk && yK.h.includes(Fk),
          Ml = !!Nk && !!wk && yK.d.includes(wk);
        (0, MT.useEffect)((() => {
          lT && Tk && hk && !ll && ZT(!1)
        }), [lT, Tk, hk, ll]);
        const Kl = (0, MT.useCallback)((() => {
            kk(!1), ZT(!1)
          }), [kk]),
          {
            pA: Ol,
            setWorld: yl,
            toggleWorld: fl
          } = function(TT) {
            let {
              showAi: kT,
              showDocs: cT,
              showChat: lT,
              hideOtherRightPanels: KT
            } = TT;
            const [OT, yT] = (0, MT.useState)("hidden"), fT = (0, MT.useRef)(null), xT = (0, MT.useCallback)((() => {
              fT.current = null, yT((TT => "hidden" === TT ? TT : (0, vK.d)() ? "hidden" : "shown"))
            }), []);
            (0, MT.useEffect)((() => {
              (kT || cT) && xT()
            }), [kT, cT, xT]), (0, MT.useEffect)((() => {
              lT && xT()
            }), [lT, xT]);
            const IT = "hidden" !== OT && (0, vK.d)();
            (0, MT.useLayoutEffect)((() => {
              if (IT) {
                const TT = document.activeElement;
                TT instanceof HTMLElement && TT.closest(".cm-content") && (fT.current = TT, TT.blur())
              } else {
                var TT;
                null === (TT = fT.current) || void 0 === TT || TT.focus(), fT.current = null
              }
            }), [IT]);
            const AT = (0, MT.useCallback)((() => {
              "hidden" === OT ? (yT("shown"), (0, vK.d)() && KT()) : yT("hidden")
            }), [OT, KT]);
            return {
              pA: OT,
              setWorld: yT,
              toggleWorld: AT
            }
          }({
            showAi: Tk,
            showDocs: ET,
            showChat: uT,
            hideOtherRightPanels: Kl
          }),
          xl = Tk && null !== vk && hk,
          Il = (0, MT.useCallback)((() => {
            lk(null)
          }), []),
          [Al, Cl] = (0, MT.useState)(null);
        (0, PT.g)("WorldCodeAiSelection", (TT => {
          lT && (Cl(TT), kk(!0), ZT(!1))
        }));
        const jl = (0, MT.useCallback)((() => {
          Cl(null)
        }), []);
        (0, PT.g)("chat", (TT => {
          let {
            content: kT
          } = TT;
          if (!AT && null === jk.current) return;
          const cT = Array.isArray(kT) ? kT : [kT],
            lT = cT.some((TT => {
              var kT;
              return (null === TT || void 0 === TT || null === (kT = TT.style) || void 0 === kT ? void 0 : kT.color) === wT.H.redUiText
            })),
            MT = cT.map((TT => {
              var kT;
              const cT = null !== (kT = null === TT || void 0 === TT ? void 0 : TT.str) && void 0 !== kT ? kT : TT;
              return "string" === typeof cT ? cT : ""
            })).join("");
          lT && /world code|error/i.test(MT) && (Kk((TT => [...TT, MT].slice(-10))), yk((TT => TT + 1)), (0, RK.d)(MT))
        })), (0, MT.useEffect)((() => {
          if (!lT || !AT || !vc) return;
          let TT = !1;
          return (async (kT, cT) => {
            const lT = await (null === (kT = hc.current) || void 0 === kT ? void 0 : kT.tryRestoreHandle());
            !TT && lT && (jc(!0), null === (cT = hc.current) || void 0 === cT || cT.startWhenReady())
          })(), () => {
            TT = !0
          }
        }), [lT, AT, vc]), (0, MT.useEffect)((() => {
          var TT;
          lT || (null === (TT = hc.current) || void 0 === TT || TT.stopContinuousSync(), ac(!1), bk.current && (bk.current = !1, xT.gameBridge.send("sendChatMessage", {
            vI: "//export",
            channelName: null
          })))
        }), [lT, ac]);
        const vl = (0, MT.useCallback)((async () => {
            if (vc && hc.current) try {
              if (!await hc.current.linkFolder()) return;
              jc(!0), await hc.current.startWhenReady()
            } catch (TT) {
              console.error("[WorldCodeDirectorySync] Link failed", TT), Sc({
                message: Xc("codeEditor:directorySyncError"),
                type: "warning"
              })
            }
          }), [vc, Xc]),
          tl = (0, MT.useCallback)((async () => {
            hc.current && await hc.current.unlinkFolder()
          }), []),
          hl = (0, MT.useCallback)((() => {
            vc ? Cc ? tl() : vl() : il.NotificationProvider.showAlertPopup({
              title: "codeEditor:directorySyncUnsupported",
              subtitle: "codeEditor:directorySyncUnsupportedBody",
              confirmText: "general:ok"
            })
          }), [vc, Cc, vl, tl]),
          Nl = AT && "hidden" !== Ol;
        return (0, IT.jsxs)(OT.c, {
          className: Dc()("CodeEditorBg", {
            CodeEditorLight: oT,
            WorldShown: "hidden" !== Ol,
            WorldTouchControl: "touchControls" === qT
          }),
          close: oc,
          escDoesExit: !0,
          show: lT,
          togglePointerLock: !1,
          globallyUniqueKey: AT ? "LobbyCodeEditor" : "CodeBlockEditor",
          children: [(0, IT.jsx)(OK.d, {
            tutorial: "welcome",
            step: "codeBlockIntro",
            text: Xc("codeEditor:tutorialCodeBlockIntro"),
            enabled: !!Nk && !AT
          }), (0, IT.jsx)(OK.d, {
            tutorial: "welcome",
            step: "worldCodeIntro",
            text: (0, IT.jsxs)(IT.Fragment, {
              children: [(0, IT.jsx)("p", {
                children: Xc("codeEditor:tutorialWorldCodeWelcome")
              }), (0, IT.jsxs)("ul", {
                className: "TutorialStepList",
                children: [(0, IT.jsx)("li", {
                  children: Xc("codeEditor:tutorialWorldCodeUseSetUp")
                }), (0, IT.jsx)("li", {
                  children: Xc("codeEditor:tutorialWorldCodeUseReact")
                }), (0, IT.jsx)("li", {
                  children: Xc("codeEditor:tutorialWorldCodeUseRun")
                })]
              })]
            }),
            enabled: !!Nk && AT
          }), (0, IT.jsx)("div", {
            className: "CodeEditorTitle",
            children: AT ? "World Code" : "Code Block"
          }), (0, IT.jsxs)("div", {
            className: "CodeEditorTopBar",
            children: [(0, IT.jsxs)("div", {
              className: "CodeEditorTopLeft",
              children: [(0, IT.jsx)(BT.c, {
                tooltipInner: Xc(Qk ? "codeEditor:exportTooltip" : "codeEditor:exportOwnerOnly"),
                delayShow: Qk ? void 0 : 0,
                hideTooltip: "exportButton" === Sk,
                children: (0, IT.jsx)(OK.i, {
                  tutorial: "welcome",
                  step: "exportButton",
                  text: Xc("codeEditor:tutorialExport"),
                  enabled: !!Nk,
                  children: (0, IT.jsx)(jT.m, {
                    className: "CodeEditorButton",
                    disabled: !Qk,
                    onClick: () => {
                      "exportButton" === Sk && ((0, yK.f)("exportButton"), mk.current = !0), bk.current = !0, oc()
                    },
                    padDestructive: !0,
                    children: Xc("codeEditor:exportWorld")
                  })
                })
              }), (0, IT.jsx)(VK, {
                pA: Ol,
                setWorld: yl,
                toggleWorld: fl,
                aiShown: xl,
                closeAi: sc
              })]
            }), (0, IT.jsxs)("div", {
              className: "CodeEditorTopRight",
              children: [Nk && (0, IT.jsx)(BT.c, {
                tooltipInner: Xc("codeEditor:helpTooltip"),
                hideTooltip: "helpButton" === Sk,
                children: (0, IT.jsx)(OK.i, {
                  tutorial: "welcome",
                  step: "helpButton",
                  text: Xc("codeEditor:tutorialHelpButton"),
                  placement: "bottom",
                  children: (0, IT.jsx)(jT.e, {
                    className: "CodeEditorHelpButton",
                    ariaLabel: Xc("codeEditor:helpTooltip"),
                    onClick: () => {
                      (0, yK.f)("helpButton"), il.NotificationProvider.showCustomPopup({
                        body: TT => (0, IT.jsx)(fK, {
                          close: TT
                        }),
                        unlockPointerKey: "codeEditorTutorials"
                      })
                    },
                    children: (0, IT.jsx)("div", {
                      className: "CodeEditorHelpButtonInner",
                      children: (0, IT.jsx)(hT.e, {
                        name: "circle-question"
                      })
                    })
                  })
                })
              }), (0, IT.jsx)(BT.c, {
                tooltipInner: Xc("codeEditor:closeTooltip"),
                children: (0, IT.jsx)("div", {
                  className: "CodeEditorCloseButtonClickZone",
                  onClick: () => {
                    oc()
                  },
                  children: (0, IT.jsx)(jT.l, {
                    className: "CodeEditorCloseButton"
                  })
                })
              })]
            })]
          }), (0, IT.jsx)(wM, {
            peers: null !== (kT = null === Xk || void 0 === Xk ? void 0 : Xk.peers) && void 0 !== kT ? kT : []
          }), (0, IT.jsxs)("div", {
            className: Dc()("CodeEditorMainArea", {
              WorldCovers: "always" === tK(Ol),
              WorldCoversWhenNarrow: "narrow" === tK(Ol)
            }),
            children: [uT && UT && (0, IT.jsx)(vK.c, {
              side: "left",
              defaultSize: "max(16rem, 24%)",
              onClose: () => {
                LT(!1)
              },
              children: (0, IT.jsx)(jK, {
                inputRef: RT
              })
            }), AT && (0, IT.jsx)(eM, {
              schematics: Yk.assets,
              onManageSchematic: TT => {
                Nk && il.NotificationProvider.showCustomPopup({
                  body: kT => (0, IT.jsx)(sM, {
                    initialPath: TT,
                    onChanged: nk,
                    onClose: kT
                  }),
                  unlockPointerKey: "worldCodeSchematics"
                })
              },
              files: Lk,
              activePath: pk,
              canEdit: !!Nk,
              directoryLinked: Cc,
              pluginNames: null !== Uc && void 0 !== Uc ? Uc : qK,
              activePluginName: qk,
              activePluginFile: Tc,
              onSelect: mc,
              onSelectPlugin: bc,
              onToggleDirectorySync: hl,
              onCreate: TT => {
                Ic.current = TT, xT.gameBridge.send("sendCodeCollab", {
                  jl: aM.b.CreateFile,
                  vl: (0, aM.w)({
                    kind: "lobby",
                    path: Mc.current
                  }),
                  eO: TT
                })
              },
              onRename: (TT, kT) => {
                Mc.current === TT && (Ac.current = {
                  fromPath: TT,
                  toPath: kT
                }, ik(kT)), xT.gameBridge.send("sendCodeCollab", {
                  jl: aM.b.RenameFile,
                  vl: (0, aM.w)({
                    kind: "lobby",
                    path: Mc.current
                  }),
                  eO: TT,
                  GO: kT
                })
              },
              onRenameFolder: (TT, kT) => {
                const [cT] = (0, FM.j)([Mc.current], TT, kT);
                cT && (Ac.current = {
                  fromPath: cT[0],
                  toPath: cT[1]
                }, ik(cT[1])), xT.gameBridge.send("sendCodeCollab", {
                  jl: aM.b.RenameFolder,
                  vl: (0, aM.w)({
                    kind: "lobby",
                    path: Mc.current
                  }),
                  eO: TT,
                  GO: kT
                })
              },
              onDelete: wc
            }), (0, IT.jsx)("div", {
              className: Dc()("CodeEditorMessage", {
                CodeEditorMessageHidden: !rT.message,
                CodeEditorMessageSuccess: "success" === rT.type
              }),
              children: rT.message && (0, IT.jsx)("div", {
                className: "CodeEditorMessageText",
                children: rT.message
              })
            }), (0, IT.jsx)(MT.Suspense, {
              fallback: (0, IT.jsx)("div", {
                className: "CodeEditorContent",
                children: (0, IT.jsx)(bT.d, {})
              }),
              children: (0, IT.jsx)(UK, {
                isLobbyCode: AT,
                code: Xk ? Xk.doc : CT.current,
                files: AT ? Lk : void 0,
                activePath: AT ? pk : void 0,
                pluginName: qk,
                pluginFile: Tc,
                pluginSource: qk && Tc ? null === (cT = bM.g[qk]) || void 0 === cT ? void 0 : cT.files[Tc] : void 0,
                onChange: Vc,
                canEditCode: Nk,
                setTemporaryMessage: Sc,
                close: oc,
                showTooltips: zT,
                lightMode: oT,
                collabState: Xk,
                setActiveDocReplacer: gc,
                showAiHints: hk && GT,
                canAiChangeCode: !!Nk && (AT || !!QT.current),
                onRemoteDocChange: TT => {
                  var kT;
                  (CT.current = TT, AT) ? (gk((kT => ({
                    ...kT,
                    [Mc.current]: TT
                  }))), null === (kT = hc.current) || void 0 === kT || kT.onDocTextChanged(Mc.current, TT)) : Ak(TT)
                }
              })
            }), (ET || xl || "hidden" !== Ol) && (0, IT.jsxs)(hK, {
              pA: Ol,
              worldPanel: (0, IT.jsx)(eK, {
                shown: Ol,
                setShown: yl,
                canInsertCode: !!Nk && !qk
              }),
              closeWorld: () => {
                yl("hidden")
              },
              aiShown: xl,
              defaultWidth: ET ? "40%" : "max(18rem, 36%)",
              children: [ET && (0, IT.jsx)(vK.c, {
                onClose: ll ? void 0 : Zc,
                children: (0, IT.jsx)(MT.Suspense, {
                  fallback: (0, IT.jsx)("div", {
                    className: "DocsPanel",
                    children: (0, IT.jsx)(bT.d, {})
                  }),
                  children: (0, IT.jsx)(YK, {
                    popOutDocs: Ec,
                    hideDocs: Zc,
                    tutorialEnabled: !!Nk
                  })
                })
              }), xl && (0, IT.jsx)(vK.c, {
                onClose: Ml ? void 0 : sc,
                children: (0, IT.jsx)(MT.Suspense, {
                  fallback: (0, IT.jsx)("div", {
                    className: "CodeEditorPanelLoading",
                    children: (0, IT.jsx)(bT.d, {})
                  }),
                  children: (0, IT.jsx)(BK, {
                    target: vk,
                    chatKey: `${Zk.gameNameWithVariation}/${Zk.lobbyName}/aiHelper`,
                    historyKey: `${Zk.gameNameWithVariation}/${Zk.lobbyName}/${vk.key}`,
                    files: vk.codeBlock ? nc : Lk,
                    activePath: vk.codeBlock ? LK.e : pk,
                    canEdit: !!Nk && (vk.codeBlock ? !!QT.current : !qk),
                    isLoaded: null !== Xk,
                    errors: Mk,
                    errorCount: Ok,
                    applyFiles: vk.codeBlock ? Bc : Yc,
                    submit: ic,
                    testRun: qc,
                    close: sc,
                    goToLine: vk.codeBlock ? pc : Rc,
                    openWorldCode: vk.codeBlock ? kl : void 0,
                    readWorldCode: vk.codeBlock ? Wc : void 0,
                    viewChunk: WK,
                    viewGameState: nK,
                    openTarget: Nk ? cl : void 0,
                    draft: ck,
                    onDraftUsed: Il,
                    selection: Al,
                    onSelectionUsed: jl
                  }, vk.key)
                })
              })]
            })]
          }), (null === Oc || void 0 === Oc ? void 0 : Oc.fallback) && (0, IT.jsx)(kK, {
            fallback: Oc.fallback,
            onGoToLine: Rc
          }), (0, IT.jsxs)("div", {
            className: "CodeEditorButtons",
            "data-pad-hint-bar-avoid": !0,
            children: [(0, IT.jsx)(BT.c, {
              tooltipInner: Xc(oT ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
              placement: "top",
              children: (0, IT.jsx)(jT.e, {
                className: "CodeEditorButton CodeEditorThemeButton",
                ariaLabel: Xc(oT ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
                onClick: () => {
                  eT(!oT)
                },
                children: (0, IT.jsx)(hT.e, {
                  name: oT ? "moon" : "sun-bright"
                })
              })
            }), (0, IT.jsx)(BT.c, {
              tooltipInner: Xc(Nl ? "codeEditorWorld:submitCodeTooltip" : "codeEditor:submitCodeTooltip"),
              placement: "top",
              children: (0, IT.jsx)(jT.m, {
                className: "CodeEditorButton",
                onClick: () => {
                  Hc(Nl)
                },
                padDefaultFocus: !0,
                children: Xc("codeEditor:submitCode")
              })
            }), (0, IT.jsx)(BT.c, {
              tooltipInner: Xc(ET ? "codeEditor:hideDocsTooltip" : "codeEditor:showDocsTooltip"),
              placement: "top",
              hideTooltip: "docsButton" === Fk || "hideDocsButton" === Fk,
              children: (0, IT.jsx)(OK.i, {
                tutorial: ak,
                step: ET ? "hideDocsButton" : "docsButton",
                text: Xc(ET ? "codeEditor:tutorialHideDocs" : "codeEditor:tutorialDocs"),
                enabled: !!Nk,
                placement: "top",
                waitForClick: !0,
                onPrevious: ET && "welcome" === ak ? Zc : void 0,
                children: (0, IT.jsx)(jT.v, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    (0, yK.f)(ET ? "hideDocsButton" : "docsButton"), ZT(!ET), kk(!1)
                  },
                  children: Xc(ET ? "codeEditor:hideDocs" : "codeEditor:showDocs")
                })
              })
            }), hk && (0, IT.jsx)(OK.i, {
              tutorial: Pk,
              step: Tk ? "hideAiHelperButton" : "aiHelperButton",
              text: Xc(Tk ? "codeEditorAiTutorial:hideAiHelperButton" : "welcome" === Pk ? "codeEditorAiTutorial:welcomeAiHelperButton" : "codeEditorAiTutorial:aiHelperButton"),
              enabled: !!Nk,
              placement: "top",
              waitForClick: !0,
              onPrevious: Tk && "welcome" === Pk ? uc : void 0,
              children: (0, IT.jsx)(Lc, {
                className: "CodeEditorButton",
                onClick: () => {
                  (0, yK.f)(Tk ? "hideAiHelperButton" : "aiHelperButton"), kk(!Tk), ZT(!1)
                },
                children: Tk ? "Hide AI Helper" : dc ? "Fix error with AI" : "AI Helper"
              })
            }), UT && (0, IT.jsx)(BT.c, {
              tooltipInner: Xc(uT ? "codeEditorChat:hideChatTooltip" : "codeEditorChat:showChatTooltip"),
              placement: "top",
              children: (0, IT.jsx)(jT.v, {
                className: "CodeEditorButton",
                onClick: () => {
                  gT.current = !uT, LT(!uT)
                },
                children: Xc(uT ? "codeEditorChat:hideChat" : "codeEditorChat:showChat")
              })
            }), (0, IT.jsx)(BT.c, {
              tooltipInner: Xc("hidden" === Ol ? "codeEditorWorld:showWorldTooltip" : "codeEditorWorld:hideWorldTooltip"),
              placement: "top",
              children: (0, IT.jsx)(jT.v, {
                className: "CodeEditorButton CodeEditorWorldButton",
                onClick: fl,
                children: Xc("hidden" === Ol ? "codeEditorWorld:showWorld" : "codeEditorWorld:hideWorld")
              })
            }), (0, IT.jsx)(BT.c, {
              tooltipInner: Xc("codeEditor:formatCodeTooltip"),
              placement: "top",
              children: (0, IT.jsx)(jT.e, {
                className: "CodeEditorButton",
                onClick: () => {
                  vT.k.nt("FormatCode")
                },
                children: Xc("codeEditor:formatCode")
              })
            }), (0, IT.jsx)(BT.c, {
              tooltipInner: Xc("codeEditor:copyCodeTooltip"),
              placement: "top",
              children: (0, IT.jsx)(jT.e, {
                className: "CodeEditorButton",
                onClick: () => {
                  navigator.clipboard.writeText(CT.current).then((() => {
                    Sc({
                      message: "Successfully copied code to clipboard",
                      type: "success"
                    })
                  })).catch((() => {
                    Sc({
                      message: "Failed to copy code to clipboard",
                      type: "warning"
                    })
                  }))
                },
                children: Xc("codeEditor:copyCode")
              })
            }), (0, IT.jsx)(BT.c, {
              tooltipInner: Xc(zT ? "codeEditor:hideTooltipsTooltip" : "codeEditor:showTooltipsTooltip"),
              placement: "top",
              children: (0, IT.jsx)(jT.e, {
                className: "CodeEditorButton",
                onClick: () => {
                  JT(!zT)
                },
                children: Xc(zT ? "codeEditor:hideTooltips" : "codeEditor:showTooltips")
              })
            }), !AT && (0, IT.jsx)(BT.c, {
              tooltipInner: Xc("codeEditor:worldCodeTooltip"),
              placement: "top",
              hideTooltip: "worldCodeButton" === Sk,
              children: (0, IT.jsx)(OK.i, {
                tutorial: "welcome",
                step: "worldCodeButton",
                text: Xc("codeEditor:tutorialWorldCodeButton"),
                enabled: !!Nk,
                placement: "top",
                waitForClick: !0,
                children: (0, IT.jsx)(jT.v, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    "worldCodeButton" === Sk && ((0, yK.f)("worldCodeButton"), mk.current = !0), oc(), vT.k.nt("EditLobbyCode", tT)
                  },
                  children: Xc("codeEditor:worldCode")
                })
              })
            }), (uk || yc || hk) && (0, IT.jsx)(BT.c, {
              tooltipInner: Xc("codeEditor:moreOptionsTooltip"),
              placement: "top",
              children: (0, IT.jsx)(jT.e, {
                className: "CodeEditorButton CodeEditorMoreButton",
                onClick: () => {
                  Gk(!0)
                },
                children: (0, IT.jsx)(hT.e, {
                  name: "ellipsis"
                })
              })
            })]
          }), ek && (0, IT.jsx)(sl.b, {
            middleScreenPopupContainerClassName: "CodeEditorMoreOptionsPopup",
            close: () => {
              Gk(!1)
            },
            body: (0, IT.jsx)(KK, {
              engine: yc,
              onSetEngine: Gc,
              aiHints: hk ? {
                shown: GT,
                setShown: VT
              } : null,
              variation: uk ? {
                name: Jk,
                setName: Hk,
                reload: ec
              } : null
            })
          })]
        })
      })),
      kO = new Set(["makeReport", "makeDiscordReport", "inviteLink"]);

    function cO(TT) {
      return "inventory" === TT
    }
    const lO = (0, MT.memo)((function() {
      const {
        openEverythingMenuName: TT,
        openInGameMenuName: kT
      } = (0, XT.n)(["openEverythingMenuName", "openInGameMenuName"]), cT = (0, mT.h)("fullInventory"), KT = (0, MT.useRef)(null), OT = (0, Jk.m)();
      (0, PT.g)("toggleMenu", (TT => {
        var kT;
        if (!OT.shown) return;
        const cT = XT.e.get("openInGameMenuName");
        let lT = TT.split("|")[0];
        const MT = null !== (kT = TT.split("|")[1]) && void 0 !== kT ? kT : null;
        ("closeCurrentMenu" === MT && cT || lT === cT) && (KT.current = null, lT = null);
        const yT = "closeCurrentMenu" === MT ? null : MT;
        KT.current !== yT && (KT.current = yT), null !== lT && (0, yM.p)(yM.c, {
          keepsMovement: cO(lT)
        }), XT.e.set({
          openInGameMenuName: lT
        })
      }));
      const yT = (0, MT.useCallback)((TT => () => {
          vT.k.nt("toggleMenu", TT)
        }), []),
        fT = (0, MT.useRef)({
          cantCrouchIfNotFullscreen: yT("cantCrouchIfNotFullscreen"),
          makeReport: yT("makeReport"),
          makeDiscordReport: yT("makeDiscordReport"),
          editBook: yT("editBook"),
          editNameTag: yT("editNameTag"),
          inventory: yT("inventory"),
          inviteLink: yT("inviteLink"),
          writeOnBoard: yT("writeOnBoard"),
          codeEditor: yT("codeEditor"),
          lobbyCodeEditor: yT("lobbyCodeEditor"),
          customLobbyBlockEditor: yT("customLobbyBlockEditor"),
          ironChestPasskeyInput: yT("ironChestPasskeyInput"),
          petUi: yT("petUi")
        }),
        xT = (0, MT.useCallback)((() => {
          XT.e.set({
            openInGameMenuName: null
          })
        }), []),
        AT = (0, MT.useRef)(null);
      return (0, MT.useEffect)((() => {
        if (kT) {
          var TT;
          (0, yM.p)(yM.c, {
            keepsMovement: cO(kT)
          }), AT.current = kO.has(kT) ? null !== (TT = XT.e.get("openEverythingMenuName")) && void 0 !== TT ? TT : AT.current : null, XT.e.set({
            openEverythingMenuName: null
          })
        } else {
          const TT = AT.current;
          AT.current = null, null !== TT && null === XT.e.get("openEverythingMenuName") && XT.e.set({
            openEverythingMenuName: TT
          }), KT.current = null, (0, yM.o)(yM.c)
        }
      }), [kT]), (0, MT.useEffect)((() => {
        null !== TT && xT()
      }), [TT, xT]), (0, IT.jsxs)(IT.Fragment, {
        children: [(0, IT.jsx)(lT.j, {
          show: "clientGame" === kT
        }), (0, IT.jsx)(Wl, {
          show: "cantCrouchIfNotFullscreen" === kT,
          onOpen: fT.current.cantCrouchIfNotFullscreen,
          onClose: xT
        }), (0, IT.jsx)(MM, {
          show: "makeReport" === kT,
          onOpen: fT.current.makeReport,
          onClose: xT
        }), (0, IT.jsx)(OM, {
          show: "makeDiscordReport" === kT,
          onOpen: fT.current.makeDiscordReport,
          onClose: xT
        }), (0, IT.jsx)(cc, {
          show: "editBook" === kT,
          onOpen: fT.current.editBook,
          onClose: xT
        }), (0, IT.jsx)(Tc, {
          show: "editNameTag" === kT,
          onOpen: fT.current.editNameTag,
          onClose: xT
        }), cT && (0, IT.jsx)(Ul, {
          show: "inventory" === kT,
          onOpen: fT.current.inventory,
          onClose: xT,
          variation: KT.current
        }), (0, IT.jsx)(Hk, {
          show: "inviteLink" === kT,
          onClose: xT,
          option: KT.current
        }), (0, IT.jsx)(VT, {
          show: "retentionFeatures" === kT,
          onClose: xT
        }), (0, IT.jsx)(sk, {
          show: "writeOnBoard" === kT,
          onOpen: fT.current.writeOnBoard,
          onClose: xT
        }), (0, IT.jsx)(TO, {
          show: "lobbyCodeEditor" === kT,
          onOpen: fT.current.lobbyCodeEditor,
          onClose: xT,
          isLobbyCode: !0
        }), (0, IT.jsx)(TO, {
          show: "codeEditor" === kT,
          onOpen: fT.current.codeEditor,
          onClose: xT,
          isLobbyCode: !1
        }), (0, IT.jsx)(xM, {
          show: "customLobbyBlockEditor" === kT,
          onOpen: fT.current.customLobbyBlockEditor,
          onClose: xT
        }), (0, IT.jsx)(Fc, {
          show: "ironChestPasskeyInput" === kT,
          onOpen: fT.current.ironChestPasskeyInput,
          onClose: xT
        }), (0, IT.jsx)(tM, {
          togglePointerLock: !0,
          show: "petUi" === kT,
          onOpen: fT.current.petUi,
          onClose: xT
        })]
      })
    }))
  },
  36319: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => OO
    });
    cT(36328);
    var lT = cT(71),
      MT = cT(1046),
      KT = cT.n(MT),
      OT = cT(3713),
      yT = cT(1461),
      fT = cT(1921),
      xT = cT(1099);

    function IT() {
      const TT = 2e3,
        [kT, cT] = (0, lT.useState)(null),
        [MT, IT] = (0, lT.useState)(null),
        AT = (0, lT.useRef)(null);
      (0, yT.g)("showBottomMessage", (kT => {
        let {
          message: cT,
          timeoutLength: lT = TT,
          type: MT
        } = kT;
        IT({
          message: cT,
          type: MT
        }), clearTimeout(AT.current), AT.current = setTimeout((() => {
          IT(null)
        }), lT)
      })), (0, yT.g)("showPermanentBottomMessage", (TT => {
        cT(TT)
      })), (0, lT.useEffect)((() => ((0, OT.b)((() => {
        cT(null)
      })), () => {
        clearTimeout(AT.current)
      })), []);
      const CT = MT || kT;
      return CT ? (0, xT.jsx)("div", {
        className: KT()("BottomScreenMessage", CT.type),
        children: (0, xT.jsx)(fT.b, {
          text: CT.message
        })
      }) : null
    }
    var AT = cT(2395),
      CT = cT(1953),
      jT = cT(1530),
      vT = cT(2469);

    function tT() {
      let TT;
      const kT = () => {
          clearTimeout(TT), TT = setTimeout((() => {
            CT.gameBridge.latest("connectedGame").replay || (CT.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, jT.navigatePreserveSearch)("/"))
          }), 3e5)
        },
        cT = () => {
          clearTimeout(TT)
        };
      return window.addEventListener("focus", cT), window.addEventListener("blur", kT), () => {
        window.removeEventListener("blur", kT), window.removeEventListener("focus", cT), clearTimeout(TT)
      }
    }
    var hT = cT(1130),
      NT = cT(3041),
      QT = cT(328),
      ST = cT(2462),
      DT = cT(36),
      aT = cT(1974),
      FT = cT(47),
      rT = cT(1996),
      PT = cT(31),
      wT = cT(2002),
      mT = cT(1409),
      bT = cT(8857),
      zT = cT(2035),
      JT = cT(1195);
    const oT = (0, lT.memo)((function() {
      const {
        isTouchScreen: TT,
        loadingOverlayVisible: kT,
        openInGameMenuName: cT,
        openEverythingMenuName: MT
      } = (0, PT.n)(["isTouchScreen", "loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]), OT = (0, mT.s)();
      (0, NT.d)();
      const yT = (0, ST.f)("showBasicMovementControls"),
        [fT, IT] = (0, lT.useState)("movement"),
        AT = "movement" === fT,
        CT = OT && !1 !== yT;
      (0, lT.useEffect)((() => {
        "padActions" !== fT || CT || IT("done")
      }), [fT, CT]);
      const jT = kT || null !== cT || null !== MT,
        vT = (0, lT.useRef)({
          step: fT,
          ms: 0
        });
      return (0, lT.useEffect)((() => {
        if (jT || "done" === fT) return;
        vT.current.step !== fT && (vT.current = {
          step: fT,
          ms: 0
        });
        const TT = vT.current,
          kT = performance.now(),
          cT = setTimeout((() => {
            IT("movement" === fT && (0, mT.h)() ? "padActions" : "done")
          }), 7e3 - TT.ms);
        return () => {
          clearTimeout(cT), TT.ms += performance.now() - kT
        }
      }), [jT, fT]), FT.e.getItem(QT.yb) > 2 ? (0, xT.jsx)(VT, {
        showingMovementControls: !1
      }) : (0, xT.jsxs)(xT.Fragment, {
        children: [TT && !OT || !AT || !1 === yT ? null : (0, xT.jsxs)("div", {
          className: KT()("ControlsTutorialDiv", {
            Covered: jT
          }),
          children: [(0, xT.jsx)(HT, {}), (0, xT.jsx)(GT, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, xT.jsx)(GT, {
            header: "Jump",
            noaAction: "jump"
          })]
        }), "padActions" === fT && CT && (0, xT.jsx)(eT, {
          covered: jT
        }), (0, xT.jsx)(VT, {
          showingMovementControls: "done" !== fT
        })]
      })
    }));

    function HT() {
      const TT = (0, mT.s)();
      return (0, xT.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, xT.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), TT && (0, xT.jsx)(wT.b, {
          noaAction: "forward"
        }), !TT && (0, xT.jsxs)(xT.Fragment, {
          children: [(0, xT.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, xT.jsx)(wT.b, {
              noaAction: "forward"
            })
          }), (0, xT.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, xT.jsx)(wT.b, {
              noaAction: "left"
            }), (0, xT.jsx)(wT.b, {
              noaAction: "backward"
            }), (0, xT.jsx)(wT.b, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function eT(TT) {
      let {
        covered: kT
      } = TT;
      const {
        t: cT
      } = (0, JT.B)(), lT = (0, ST.f)("useInventory");
      return (0, xT.jsxs)("div", {
        className: KT()("ControlsTutorialDiv", {
          Covered: kT
        }),
        children: [(0, xT.jsx)(GT, {
          header: cT("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, xT.jsx)(GT, {
          header: cT("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== lT && (0, xT.jsx)(GT, {
          header: cT("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, xT.jsx)(GT, {
          header: cT("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function GT(TT) {
      let {
        header: kT,
        noaAction: cT
      } = TT;
      return (0, xT.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, xT.jsx)("div", {
          className: "KeyHeader",
          children: kT
        }), (0, xT.jsx)(wT.b, {
          noaAction: cT
        })]
      })
    }

    function VT(TT) {
      let {
        showingMovementControls: kT
      } = TT;
      const {
        isTouchScreen: cT
      } = (0, PT.n)(["isTouchScreen"]), MT = (0, mT.s)(), KT = (0, zT.d)("OpenShop"), [OT, yT] = (0, lT.useState)(!1), fT = `SeenShopControls|${(0,rT.e)("connectedGame",(TT=>TT.gameNameWithVariation))}`, IT = () => (!(0, mT.h)() || null !== (0, bT.e)("OpenShop")) && !FT.e.getItem(fT) && aT.b.get("shopInfo") && !kT, AT = () => (yT(!0), FT.e.setItem(fT, !0), (0, mT.h)() || DT.k.nt("showShopTouchTutorial"), setTimeout((() => {
        yT(!1)
      }), 7e3));
      (0, lT.useEffect)((() => {
        let TT;
        const kT = DT.k.subscribe("showShopTutorial", (() => {
          IT() && (TT = AT())
        }));
        return () => {
          clearTimeout(TT), DT.k.unsubscribe(kT)
        }
      }), [kT]);
      const CT = (0, lT.useRef)();
      return (0, ST.e)("currencyAmounts", (TT => {
        if (IT()) {
          let cT = !1;
          const lT = aT.b.get("shopInfo");
          for (const MT in lT) {
            for (const KT in lT[MT].items) {
              var kT;
              const OT = lT[MT].items[KT];
              if (void 0 !== OT.currency && TT[OT.currency] && OT.cost <= TT[OT.currency].amount && (null === (kT = OT.hidden) || void 0 === kT || !kT)) {
                cT = !0;
                break
              }
            }
            if (cT) break
          }
          cT && (CT.current = AT())
        }
      })), (0, lT.useEffect)((() => () => {
        clearTimeout(CT.current)
      }), [kT]), !OT || MT && !KT ? null : (0, xT.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: cT && !MT ? null : (0, xT.jsx)(GT, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
    var ET = cT(1379),
      ZT = cT(1061);
    const uT = (0, lT.memo)((function() {
      return (0, NT.d)(), (0, xT.jsx)(XT, {})
    }));
    class XT extends lT.Component {
      constructor(TT) {
        super(TT), this.showQueue = [], this.slideDuration = 1, this.state = {
          showQueue: [],
          currState: null
        }, this.currMessage = null, this.justShowed = !1
      }
      componentDidMount() {
        this.sub = DT.k.subscribe("TopRightHelper", (TT => {
          this.showQueue.push(TT), this.setState({
            showQueue: this.showQueue
          })
        }))
      }
      componentWillUnmount() {
        DT.k.unsubscribe(this.sub), clearTimeout(this.slideOutTimeout), clearTimeout(this.hidingMessageTimeout)
      }
      componentDidUpdate(TT, kT) {
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
        let TT, kT, cT, lT, MT, KT = !0;
        if (this.state.showQueue.length > 0 && null === this.state.currState ? (this.currMessage = this.state.showQueue[0], this.justShowed = !0, TT = "slideIn") : "slideOut" === this.state.currState ? TT = "slideOut" : null === this.currMessage && (KT = !1), this.currMessage) {
          const KT = this.currMessage.color || "rgb(102, 102, 102)";
          kT = {
            width: this.currMessage.width || "250px",
            height: this.currMessage.height || "70px",
            animation: "1s " + ("slideOut" === TT ? "HelperSlideKeyFrameReverse" : "HelperSlideKeyFrame")
          }, cT = {
            backgroundColor: KT
          }, lT = {
            animation: "2s " + ("slideOut" === TT ? "CloseNotification" : "ExpandNotification")
          }, MT = {
            fontSize: this.currMessage.fontSize || "16px",
            animation: "2s " + ("slideOut" === TT ? "textDisappear" : "textAppear")
          }
        }
        return KT ? (0, xT.jsxs)("div", {
          className: "TopRightHelperBox",
          style: {
            ...kT
          },
          children: [(0, xT.jsx)("div", {
            className: "LeftSide",
            style: cT,
            children: (0, xT.jsx)(ZT.e, {
              name: this.currMessage.icon,
              className: `fa-${this.currMessage.iconSizeMult||3}x HelperIcon`
            })
          }), (0, xT.jsx)("div", {
            className: "RightSide",
            style: lT,
            children: (0, xT.jsx)("div", {
              className: "HelperText",
              style: MT,
              children: this.currMessage.text
            })
          })]
        }) : null
      }
    }
    var dT = cT(36334),
      LT = cT(1420);
    const RT = (0, LT.h)((TT => TT.PadSneakChip));

    function gT(TT) {
      const [kT, cT, lT] = function(TT) {
        const kT = parseInt(TT.substring(1), 16),
          cT = (kT >> 16) / 255,
          lT = (kT >> 8 & 255) / 255,
          MT = (255 & kT) / 255,
          KT = Math.max(cT, lT, MT),
          OT = Math.min(cT, lT, MT),
          yT = (KT + OT) / 2,
          fT = KT - OT;
        if (0 === fT) return [0, 0, yT];
        const xT = fT / (1 - Math.abs(2 * yT - 1));
        let IT;
        IT = KT === cT ? (lT - MT) / fT % 6 : KT === lT ? (MT - cT) / fT + 2 : (cT - lT) / fT + 4;
        return [(60 * IT + 360) % 360, xT, yT]
      }(TT), MT = 0 === cT ? 0 : Math.min(.6, cT + .03), KT = lT > .5 ? -1 : 1, OT = UT(lT + .09 * KT);
      return {
        panel: TT,
        slot: YT(kT, MT, OT),
        slotSelected: YT(kT, MT, UT(OT + .2 * KT)),
        slotUnavailable: YT(kT, MT, UT(lT + -.1 * KT))
      }
    }

    function UT(TT) {
      return Math.min(1, Math.max(0, TT))
    }

    function YT(TT, kT, cT) {
      const lT = (1 - Math.abs(2 * cT - 1)) * kT,
        MT = lT * (1 - Math.abs(TT / 60 % 2 - 1)),
        KT = cT - lT / 2;
      let OT;
      return OT = TT < 60 ? [lT, MT, 0] : TT < 120 ? [MT, lT, 0] : TT < 180 ? [0, lT, MT] : TT < 240 ? [0, MT, lT] : TT < 300 ? [MT, 0, lT] : [lT, 0, MT], "#" + OT.map((TT => function(TT) {
        return Math.round(255 * TT).toString(16).padStart(2, "0")
      }(TT + KT))).join("")
    }
    var BT = cT(36355),
      WT = cT(4272),
      nT = cT(2435),
      pT = cT(2443),
      iT = cT(36414),
      qT = cT(4787),
      sT = cT(1486),
      Tk = cT(617);

    function kk(TT, kT, cT, lT) {
      TT.style.display = "";
      const MT = TT.offsetWidth,
        KT = TT.offsetHeight,
        OT = Math.min(Math.max((kT.left + kT.right) / 2 - MT / 2, 8), window.innerWidth - 8 - MT);
      let yT = kT.top - cT - KT;
      const fT = [...lT].sort(((TT, kT) => kT.top - TT.top));
      for (const xT of fT) OT < xT.right && OT + MT > xT.left && yT < xT.bottom && yT + KT > xT.top && (yT = xT.top - 8 - KT);
      return yT < 8 ? (TT.style.display = "none", null) : (TT.style.transform = `translate(${OT-kT.left}px, ${yT-kT.top}px)`, {
        left: OT,
        top: yT,
        right: OT + MT,
        bottom: yT + KT
      })
    }

    function ck(TT) {
      const kT = [];
      for (const cT of document.querySelectorAll(TT)) {
        const TT = cT.getBoundingClientRect();
        TT.width > 0 && "visible" === getComputedStyle(cT).visibility && kT.push(TT)
      }
      return kT
    }

    function lk(TT, kT) {
      return TT.clientX >= kT.left - 8 && TT.clientX <= kT.right + 8 && TT.clientY >= kT.top - 8 && TT.clientY <= kT.bottom + 8
    }
    var Mk = cT(8911);
    class Kk {
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
      hold(TT, kT) {
        this.suspended || (this.offered ? kT || this.setPhase("idle") : TT && "idle" === this.phase ? (this.setPhase("charging"), this.armTimer = setTimeout((() => {
          this.armTimer = null, this.onArm(), this.setPhase("armed")
        }), 1e3)) : TT || "charging" !== this.phase || this.setPhase("idle"))
      }
      onArm() {}
      setPhase(TT) {
        null !== this.armTimer && (clearTimeout(this.armTimer), this.armTimer = null);
        const kT = this.phase;
        this.phase = TT, this.deps.onPhase(TT, kT)
      }
    }
    const Ok = 25 * Math.PI / 180,
      yk = 45 * Math.PI / 180;
    class fk extends Kk {
      constructor() {
        super(...arguments), this.speed = 0, this.armedSpeed = 0
      }
      get lockedSpeed() {
        return this.armedSpeed
      }
      move(TT, kT, cT) {
        this.speed = cT;
        const lT = Math.hypot(TT, kT),
          MT = lT > 0 ? Math.acos(Math.min(1, -kT / lT)) : Math.PI;
        this.hold(lT >= .8 && MT <= Ok, lT >= .5 && MT <= yk)
      }
      onArm() {
        this.armedSpeed = this.speed
      }
    }
    var xk = cT(1292);

    function Ik(TT, kT) {
      const cT = (0, lT.useRef)(null),
        MT = (0, lT.useRef)(kT);
      return MT.current = kT, (0, lT.useEffect)((() => {
        if (!TT) return;
        const {
          create: kT,
          elementRef: lT,
          ringRef: KT,
          classPrefix: OT,
          keptBehindMovementPanels: yT,
          resizeEnds: fT
        } = MT.current, xT = {
          charging: `${OT}Charging`,
          armed: `${OT}Armed`,
          ready: `${OT}Ready`,
          locked: `${OT}Locked`
        };
        let IT = null;
        const AT = kT({
          onPhase: (TT, kT) => {
            const cT = lT.current;
            if (null !== cT) {
              for (const [kT, lT] of Object.entries(xT)) cT.classList.toggle(lT, kT === TT);
              if ("charging" === TT) IT = KT.current.animate([{
                strokeDashoffset: 1
              }, {
                strokeDashoffset: 0
              }], {
                delay: 400,
                duration: 600,
                fill: "forwards"
              });
              else if ("idle" === TT) {
                var OT;
                null === (OT = IT) || void 0 === OT || OT.cancel(), IT = null
              }
              var yT, fT;
              if ("armed" === TT && "charging" === kT && MT.current.onArmed(), "ready" === TT && Mk.f.play("lockReady"), "locked" === TT) Mk.f.play("lockLocked"), null === (yT = (fT = MT.current).onLocked) || void 0 === yT || yT.call(fT);
              "locked" === kT && MT.current.onUnlocked()
            }
          }
        });
        cT.current = AT;
        const CT = () => {
            AT.suspend()
          },
          jT = () => {
            "hidden" === document.visibilityState && CT()
          },
          vT = () => {
            fT ? AT.suspend() : AT.suspendArming()
          },
          tT = (0, xk.h)((TT => {
            let {
              keepsMovement: kT
            } = TT;
            kT && yT ? AT.suspendArming() : CT()
          }));
        return document.addEventListener("visibilitychange", jT), window.addEventListener("blur", CT), window.addEventListener("resize", vT), () => {
          tT(), document.removeEventListener("visibilitychange", jT), window.removeEventListener("blur", CT), window.removeEventListener("resize", vT), AT.cancel(), cT.current = null
        }
      }), [TT]), (0, rT.b)("localPlayerAliveSet", (() => {
        var TT;
        null === (TT = cT.current) || void 0 === TT || TT.suspend()
      })), cT
    }
    var Ak = cT(2501),
      Ck = cT(2521),
      jk = cT(1117),
      vk = cT(3348),
      tk = cT(2526);

    function hk(TT, kT, cT) {
      const lT = function(TT, kT, cT) {
        const lT = cT.map((cT => ({
            left: Math.max(0, cT.left),
            top: Math.max(0, cT.top),
            right: Math.min(TT, cT.right),
            bottom: Math.min(kT, cT.bottom)
          }))).filter((TT => TT.right > TT.left && TT.bottom > TT.top)),
          MT = [...new Set([0, kT, ...lT.flatMap((TT => [TT.top, TT.bottom]))])].sort(((TT, kT) => TT - kT)),
          KT = [];
        for (let OT = 0; OT < MT.length - 1; OT++) {
          const kT = MT[OT],
            cT = MT[OT + 1],
            yT = lT.filter((TT => TT.top <= kT && TT.bottom >= cT)).map((TT => [TT.left, TT.right])).sort(((TT, kT) => TT[0] - kT[0]));
          let fT = 0;
          for (const [TT, lT] of yT) TT > fT && KT.push({
            left: fT,
            top: kT,
            right: TT,
            bottom: cT
          }), fT = Math.max(fT, lT);
          fT < TT && KT.push({
            left: fT,
            top: kT,
            right: TT,
            bottom: cT
          })
        }
        return KT
      }(TT, kT, cT);
      if (0 === lT.length) return 'path("M0 0Z")';
      if (1 === lT.length && 0 === lT[0].left && 0 === lT[0].top && lT[0].right === TT && lT[0].bottom === kT) return "";
      const MT = TT => Math.round(10 * TT) / 10;
      return `path("${lT.map((TT=>`M${MT(TT.left)} ${MT(TT.top)}H${MT(TT.right)}V${MT(TT.bottom)}H${MT(TT.left)}Z`)).join("")}")`
    }

    function Nk(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16;
      const MT = [],
        KT = 2 * cT / lT;
      for (let OT = 0; OT < lT; OT++) {
        const lT = kT - cT + OT * KT,
          yT = lT + KT,
          fT = Math.min(Math.max(kT, lT), yT) - kT,
          xT = Math.sqrt(Math.max(0, cT * cT - fT * fT));
        MT.push({
          left: TT - xT,
          top: lT,
          right: TT + xT,
          bottom: yT
        })
      }
      return MT
    }
    var Qk = cT(8918),
      Sk = cT(36392);

    function Dk(TT) {
      const kT = TT.getBoundingClientRect(),
        cT = {
          left: kT.left,
          top: kT.top,
          right: kT.right,
          bottom: kT.bottom
        },
        lT = (0, iT.h)(TT);
      if (lT.whole) return [cT];
      const MT = function(TT) {
          const kT = TT.right - TT.left,
            cT = TT.bottom - TT.top,
            lT = Math.min(kT, cT) / 2,
            MT = (TT.left + TT.right) / 2,
            KT = (TT.top + TT.bottom) / 2;
          return kT >= cT ? [{
            left: TT.left + lT,
            top: TT.top,
            right: TT.right - lT,
            bottom: TT.bottom
          }, ...Nk(TT.left + lT, KT, lT), ...Nk(TT.right - lT, KT, lT)] : [{
            left: TT.left,
            top: TT.top + lT,
            right: TT.right,
            bottom: TT.bottom - lT
          }, ...Nk(MT, TT.top + lT, lT), ...Nk(MT, TT.bottom - lT, lT)]
        }(cT),
        KT = lT.keyBox;
      if (KT) {
        const TT = (cT.left + cT.right) / 2,
          kT = (cT.top + cT.bottom) / 2;
        MT.push({
          left: TT - KT.width / 2,
          top: kT - KT.height / 2,
          right: TT + KT.width / 2,
          bottom: kT + KT.height / 2
        })
      }
      return MT
    }

    function ak(TT) {
      const kT = TT.getBoundingClientRect();
      return 0 === kT.width && 0 === kT.height || "visible" !== getComputedStyle(TT).visibility ? [] : [(0, Qk.k)(kT, 44)]
    }

    function Fk(TT, kT) {
      (0, lT.useEffect)((() => {
        const cT = TT.current;
        if (!kT || !cT) return;
        const lT = () => {
          const TT = Array.from(document.querySelectorAll(".TouchComponentsButtons .TouchKeyHit, .TouchInteractHit")),
            kT = TT.find((TT => TT.classList.contains("TouchInteractHit")));
          kT !== MT && (MT && KT.unobserve(MT), MT = kT, kT && KT.observe(kT));
          const lT = Array.from(document.querySelectorAll(tk.b)),
            OT = [...TT.flatMap((TT => Dk(TT))), ...lT.flatMap(ak)],
            yT = function(TT, kT) {
              const cT = kT.map((kT => ({
                left: kT.left - TT.left,
                top: kT.top - TT.top,
                right: kT.right - TT.left,
                bottom: kT.bottom - TT.top
              })));
              return hk(Math.ceil(TT.width), Math.ceil(TT.height), cT)
            }(cT.getBoundingClientRect(), OT);
          cT.style.clipPath !== yT && (cT.style.clipPath = yT)
        };
        let MT;
        const KT = new ResizeObserver((() => {
          lT()
        }));
        lT(), KT.observe(cT);
        const OT = cT.closest(".InGameUi"),
          yT = new MutationObserver(lT);
        OT && yT.observe(OT, {
          attributes: !0,
          attributeFilter: ["class", Sk.g]
        });
        const fT = [(0, DT.m)(vk.c, lT), (0, DT.m)(tk.m, lT), (0, DT.m)(tk.c, lT)];
        return () => {
          KT.disconnect(), yT.disconnect();
          for (const TT of fT) TT();
          cT.style.clipPath = ""
        }
      }), [TT, kT])
    }
    var rk = cT(4396);

    function Pk(TT) {
      var kT;
      let {
        onMove: cT,
        mode: MT,
        speedCurve: KT,
        autorun: OT = !1
      } = TT;
      const yT = (0, lT.useRef)(null),
        fT = (0, lT.useRef)(null),
        IT = (0, lT.useRef)(null),
        AT = (0, lT.useRef)(null),
        jT = (0, lT.useRef)(null),
        vT = (0, lT.useRef)(null),
        tT = (0, lT.useRef)(null),
        hT = (0, lT.useRef)(null),
        NT = (0, lT.useRef)(null),
        QT = (0, lT.useRef)(!1),
        ST = (0, lT.useRef)({
          clientX: 0,
          clientY: 0
        }),
        {
          t: DT
        } = (0, JT.B)(),
        aT = (0, rk.q)(MT),
        FT = (0, PT.n)(["notchSize"]).notchSize,
        rT = FT.left,
        wT = (0, lT.useRef)(16),
        mT = (0, Ck.b)(),
        [bT, zT, oT] = "pinned" === MT ? Ak.o : null !== (kT = mT.hudElements.joystick) && void 0 !== kT ? kT : Ak.o,
        HT = "pinned" === MT ? null : mT.hudSafe,
        eT = Math.max(rk.m, rk.p * oT);
      Fk(fT, "pinned" !== MT);
      const GT = function(TT, kT, cT, MT, KT) {
        const OT = (0, lT.useRef)(null),
          yT = () => {
            clearInterval(OT.current), OT.current = null
          },
          fT = Ik(TT, {
            create: TT => new fk(TT),
            elementRef: kT,
            ringRef: cT,
            classPrefix: "Autorun",
            keptBehindMovementPanels: !0,
            resizeEnds: !0,
            onArmed: KT,
            onLocked: () => {
              OT.current = setInterval((() => {
                CT.gameBridge.lookup("dropAhead", null) && (Mk.f.play("autorunLedgeStop"), fT.current.cancel())
              }), 100)
            },
            onUnlocked: () => {
              yT(), MT()
            }
          });
        return (0, lT.useEffect)((() => yT), []), fT
      }(OT, IT, tT, (() => {
        RT(), LT()
      }), (() => {
        VT(), null === NT.current && GT.current.suspend()
      }));

      function VT() {
        const TT = IT.current.getBoundingClientRect();
        NT.current = kk(hT.current, TT, 80, ck(`.TouchInventoryKey, ${tk.b}`)), QT.current = null !== NT.current && lk(ST.current, NT.current)
      }

      function ET() {
        const {
          innerWidth: TT,
          innerHeight: kT
        } = window, cT = (0, tk.B)(HT, TT, kT, (0, tk.J)(FT, TT, kT), wT.current);
        return {
          left: cT[3],
          bottom: cT[2]
        }
      }

      function uT(TT) {
        IT.current.style.transform = `translate(${TT.x-eT}px, ${TT.y-eT}px)`
      }

      function XT(TT) {
        const kT = IT.current;
        kT.classList.add("Resting"), kT.classList.toggle("Returning", TT), kT.style.display = "fixed_hidden" === MT ? "none" : "block", uT(function() {
          const {
            innerWidth: TT,
            innerHeight: kT
          } = window, cT = ET(), lT = rT * TT / 100 + cT.left, MT = yT.current.offsetHeight || kT, KT = ((0, jk.e)(TT, kT) ? rk.g : rk.c) + cT.bottom;
          return {
            x: Math.min(TT - eT, Math.max(eT, lT + rk.k + bT * TT)),
            y: Math.min(MT - eT, Math.max(eT, MT - KT + zT * MT))
          }
        }())
      }
      const dT = (0, lT.useRef)({
        restFixed: XT,
        release: gT
      });

      function LT() {
        aT ? XT("fixed_shown" === MT) : "floating" === MT && (IT.current.style.display = "none"), cT({
          x: 0,
          y: 0
        })
      }

      function RT() {
        vT.current = null, jT.current = null, AT.current.style.transform = "translate(-50%, -50%)"
      }

      function gT(TT) {
        RT();
        const kT = GT.current;
        TT && null !== kT && void 0 !== kT && kT.lift() ? cT({
          x: 0,
          y: -kT.lockedSpeed
        }) : (null === kT || void 0 === kT || kT.cancel(), LT())
      }

      function UT(TT) {
        const kT = Array.from(TT.touches).find((TT => TT.identifier === vT.current));
        if (null === jT.current || null === vT.current || (0, Tk.R)(kT)) return;
        const lT = GT.current,
          MT = kT.clientX - jT.current.x,
          OT = kT.clientY - jT.current.y,
          yT = Math.hypot(MT, OT),
          fT = yT > 0 ? Math.min(1, eT / yT) : 0,
          xT = MT * fT,
          IT = OT * fT,
          CT = Math.hypot(xT, IT) / eT,
          tT = KT && CT > 0 ? KT(CT) / CT : 1;
        AT.current.style.transform = `translate(calc(-50% + ${xT}px), calc(-50% + ${IT}px))`;
        const hT = xT / eT,
          DT = IT / eT;
        if (cT({
            x: hT * tT,
            y: DT * tT
          }), null !== lT && null !== NT.current) {
          lT.move(hT, DT, CT * tT), ST.current = {
            clientX: kT.clientX,
            clientY: kT.clientY
          };
          const TT = QT.current;
          QT.current = lk(kT, NT.current), QT.current !== TT && lT.target(QT.current)
        }
      }
      return dT.current = {
        restFixed: XT,
        release: gT
      }, (0, lT.useLayoutEffect)((() => {
        if (!aT) return;
        const TT = () => {
          wT.current = (0, tk.R)(document)
        };
        TT(), null === vT.current && dT.current.restFixed(!1);
        const kT = new ResizeObserver((() => {
          TT(), null === vT.current && dT.current.restFixed(!1)
        }));
        kT.observe(yT.current);
        const cT = IT.current;
        return () => {
          kT.disconnect(), cT.classList.remove("Resting", "Returning"), null === vT.current && (cT.style.display = "", cT.style.transform = "")
        }
      }), [aT, MT, FT, bT, zT, eT, HT]), (0, lT.useEffect)((() => {
        const TT = TT => {
            const kT = vT.current;
            null === kT || Array.from(TT.touches).some((TT => TT.identifier === kT)) || dT.current.release("touchend" === TT.type && Array.from(TT.changedTouches).some((TT => TT.identifier === kT)))
          },
          kT = () => {
            null !== vT.current && dT.current.release(!1)
          },
          cT = () => {
            "hidden" === document.visibilityState && kT()
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
        }), window.addEventListener("blur", kT), document.addEventListener("visibilitychange", cT);
        const lT = (0, xk.h)((TT => {
          let {
            keepsMovement: cT
          } = TT;
          cT || kT()
        }));
        return () => {
          lT(), document.removeEventListener("touchstart", TT, {
            capture: !0
          }), document.removeEventListener("touchmove", TT, {
            capture: !0
          }), document.removeEventListener("touchend", TT, {
            capture: !0
          }), document.removeEventListener("touchcancel", TT, {
            capture: !0
          }), window.removeEventListener("blur", kT), document.removeEventListener("visibilitychange", cT)
        }
      }), []), (0, lT.useEffect)((() => {
        const TT = yT.current,
          kT = TT => {
            TT.preventDefault()
          };
        return TT.addEventListener("touchstart", kT, {
          passive: !1
        }), () => {
          TT.removeEventListener("touchstart", kT)
        }
      }), []), (0, xT.jsxs)("div", {
        ref: yT,
        className: "JoystickZone",
        style: aT && (bT > 0 || oT > 1 || ET().left > 0) ? {
          width: `max(35vw, calc(${rT+100*bT}vw + ${ET().left+rk.k+eT+24}px))`
        } : void 0,
        onTouchStart: function(TT) {
          var kT;
          if (null !== vT.current) return;
          const cT = Array.from(TT.changedTouches).find((TT => {
            var kT;
            return null === (kT = yT.current) || void 0 === kT ? void 0 : kT.contains(TT.target)
          }));
          if (cT) {
            if (null === (kT = GT.current) || void 0 === kT || kT.startTouch(), vT.current = cT.identifier, "pinned" === MT) {
              const TT = IT.current.getBoundingClientRect();
              jT.current = {
                x: TT.left + TT.width / 2,
                y: TT.top + TT.height / 2
              }
            } else {
              jT.current = {
                x: cT.clientX,
                y: cT.clientY
              }, IT.current.classList.remove("Resting", "Returning"), IT.current.style.display = "block";
              const TT = yT.current.getBoundingClientRect();
              uT({
                x: cT.clientX - TT.left,
                y: cT.clientY - TT.top
              }), OT && (ST.current = {
                clientX: cT.clientX,
                clientY: cT.clientY
              }, VT())
            }
            UT(TT)
          }
        },
        onTouchMove: UT,
        children: [(0, xT.jsx)("div", {
          ref: fT,
          className: "JoystickTouchLayer"
        }), (0, xT.jsxs)("div", {
          ref: IT,
          className: "Joystick",
          style: {
            width: 2 * eT + "px",
            height: 2 * eT + "px",
            transform: "pinned" === MT ? "translate(4vw, calc(50vh - 50%))" : void 0
          },
          children: [(0, xT.jsx)("div", {
            className: "JoystickBase",
            style: {
              width: 2 * eT + "px",
              height: 2 * eT + "px"
            }
          }), OT && (0, xT.jsxs)(xT.Fragment, {
            children: [(0, xT.jsx)("svg", {
              className: "AutorunRing",
              viewBox: "0 0 100 100",
              children: (0, xT.jsx)("circle", {
                ref: tT,
                cx: "50",
                cy: "50",
                r: "48",
                pathLength: 1
              })
            }), (0, xT.jsxs)("div", {
              ref: hT,
              className: "AutorunTarget",
              children: [(0, xT.jsx)(ZT.e, {
                name: "lock"
              }), DT("settingsMenu:autoRun")]
            })]
          }), (0, xT.jsx)("div", {
            ref: AT,
            className: "JoystickKnob",
            style: {
              width: `${eT}px`,
              height: `${eT}px`
            }
          })]
        })]
      })
    }
    const wk = .35,
      mk = .22;

    function bk(TT) {
      if (TT < .1) return 0;
      if (TT < wk) {
        const kT = (TT - .1) / (wk - .1);
        return .06 + .16 * kT * kT
      }
      return TT < .85 ? mk + .78 * (TT - wk) / .5 : 1
    }

    function zk(TT, kT) {
      const cT = (0, lT.useRef)(null);
      return (0, lT.useLayoutEffect)((() => (iT.i.set(TT, cT.current, kT), () => {
        iT.i.set(TT, null)
      })), [TT, kT]), cT
    }
    const Jk = "C",
      Hk = "J",
      ek = "U",
      Gk = "P",
      Vk = "A",
      Ek = "G",
      Zk = "X",
      uk = (0, lT.forwardRef)((function(TT, kT) {
        let {
          slot: cT,
          canvasZone: MT = !1,
          lit: OT = !1,
          label: yT,
          className: fT,
          children: IT,
          ...AT
        } = TT;
        return (0, lT.useEffect)((() => (DT.k.nt(vk.c), () => {
          DT.k.nt(vk.c)
        })), []), (0, xT.jsx)("div", {
          ref: kT,
          className: KT()("TouchKeyHit", `TouchSlot${cT}`, fT, {
            CanvasZone: MT
          }),
          ...AT,
          children: (0, xT.jsxs)("div", {
            className: KT()("TouchKey", {
              Lit: OT,
              Labelled: void 0 !== yT
            }),
            children: [IT, void 0 !== yT && (0, xT.jsx)("span", {
              className: "TouchKeyLabel",
              children: yT
            })]
          })
        })
      }));

    function Xk(TT, kT) {
      (0, lT.useEffect)((() => () => {
        kT.current && (kT.current = !1, (0, pT.A)(TT, !1, {
          isTrusted: !0,
          timeStamp: performance.now()
        }))
      }), [])
    }

    function dk(TT, kT) {
      const cT = kT ? [Zk] : [Gk, Zk];
      return TT.filter((TT => null !== TT)).slice(0, cT.length).map(((TT, kT) => {
        const MT = cT[kT];
        return (0, xT.jsx)(lT.Fragment, {
          children: TT.render(MT)
        }, `${TT.id}:${MT}`)
      }))
    }
    var Lk = cT(36400);
    class Rk extends Kk {
      constructor() {
        super(...arguments), this.start = {
          x: 0,
          y: 0
        }, this.moved = !1
      }
      press(TT, kT) {
        this.start = {
          x: TT,
          y: kT
        }, this.moved = !1, this.startTouch(), this.hold(!0, !1)
      }
      move(TT, kT, cT) {
        const lT = Math.hypot(TT - this.start.x, kT - this.start.y) <= 12;
        this.moved ||= !lT;
        const MT = null !== cT && kT < this.start.y - 12 && lk({
          clientX: TT,
          clientY: kT
        }, cT);
        this.hold(!this.moved, lT || MT)
      }
    }
    const gk = new Set;

    function Uk(TT) {
      const kT = new Set(Array.from(TT.touches, (TT => TT.identifier)));
      for (const cT of gk) {
        for (const TT of cT.ids) kT.has(TT) || cT.ids.delete(TT);
        if (0 === cT.ids.size) {
          gk.delete(cT);
          cT.pressesOnPointerDown && "touchstart" === TT.type && Array.from(TT.changedTouches).some((TT => TT.target instanceof Node && cT.element.contains(TT.target))) || cT.release()
        }
      }
    }
    if ("undefined" !== typeof window)
      for (const hO of ["touchstart", "touchmove"]) window.addEventListener(hO, Uk, {
        capture: !0,
        passive: !0
      });

    function Yk(TT) {
      let {
        pressesOnPointerDown: kT = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const cT = (0, lT.useRef)(TT);
      cT.current = TT;
      const MT = (0, lT.useRef)({
        ids: new Set,
        element: null,
        pressesOnPointerDown: kT,
        release: () => {
          cT.current()
        }
      });
      (0, lT.useEffect)((() => {
        const TT = MT.current;
        return () => {
          gk.delete(TT), TT.ids.clear()
        }
      }), []);
      const KT = TT => {
        const kT = MT.current;
        for (const cT of Array.from(TT.changedTouches)) kT.ids.delete(cT.identifier);
        0 === kT.ids.size && gk.delete(kT)
      };
      return {
        onTouchStart: TT => {
          const kT = MT.current;
          kT.element = TT.currentTarget;
          for (const cT of Array.from(TT.changedTouches)) cT.target instanceof Node && TT.currentTarget.contains(cT.target) && kT.ids.add(cT.identifier);
          kT.ids.size > 0 && gk.add(kT)
        },
        onTouchEnd: KT,
        onTouchCancel: KT
      }
    }

    function Bk(TT, kT) {
      return null === kT ? null : (0, Lk.b)(TT.nativeEvent.changedTouches, kT.id)
    }

    function Wk(TT) {
      let {
        lockable: kT
      } = TT;
      const {
        t: cT
      } = (0, JT.B)(), MT = "round" === (0, Ak.W)().hudShape, KT = (0, lT.useRef)(!1);
      Xk(nT.p.Jump, KT);
      const OT = (0, lT.useRef)(null),
        yT = (0, lT.useRef)(null),
        fT = (0, lT.useRef)(null),
        IT = (0, lT.useRef)(null),
        AT = (0, lT.useRef)(null),
        CT = (0, lT.useRef)(null),
        jT = (0, lT.useRef)(!1),
        vT = (TT, kT) => {
          KT.current = TT, (0, pT.A)(nT.p.Jump, TT, kT)
        },
        tT = function() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            isTrusted: !0,
            timeStamp: performance.now()
          };
          KT.current && (OT.current && (0, sT.i)(OT.current, !1), vT(!1, TT))
        },
        hT = Ik(kT, {
          create: TT => new Rk(TT),
          elementRef: OT,
          ringRef: yT,
          classPrefix: "JumpLock",
          keptBehindMovementPanels: !1,
          resizeEnds: !1,
          onArmed: () => {
            const TT = OT.current.getBoundingClientRect(),
              kT = fT.current.parentElement,
              cT = kT.getBoundingClientRect(),
              lT = {
                left: cT.left + kT.clientLeft,
                top: cT.top + kT.clientTop,
                right: cT.right - kT.clientLeft,
                bottom: cT.bottom - kT.clientTop
              };
            if (AT.current = kk(fT.current, lT, 16, ck(`.TouchKeyHit:not(.JumpKey) > .TouchKey, .TouchInventoryKey, ${tk.b}`)), null === AT.current) return void hT.current.suspend();
            const MT = AT.current;
            CT.current = {
              left: Math.min(TT.left, MT.left),
              top: MT.top,
              right: Math.max(TT.right, MT.right),
              bottom: TT.bottom
            }, jT.current = null !== IT.current && lk({
              clientX: IT.current.x,
              clientY: IT.current.y
            }, MT)
          },
          onUnlocked: () => {
            null === IT.current && tT()
          }
        }),
        NT = TT => {
          var kT;
          IT.current = null, null === (kT = hT.current) || void 0 === kT || kT.cancel(), tT(TT)
        },
        QT = Yk((() => {
          NT()
        })),
        ST = TT => {
          const kT = IT.current;
          var cT;
          return null === kT ? null !== (cT = hT.current) && void 0 !== cT && cT.locked ? null : "lifted" : Bk(TT, kT) ? "lifted" : (0, Lk.e)(TT.nativeEvent.touches, kT.id) ? null : "dropped"
        };
      return (0, xT.jsxs)(uk, {
        ref: OT,
        slot: Hk,
        className: "JumpKey",
        onTouchStart: TT => {
          QT.onTouchStart(TT), (0, sT.i)(TT.currentTarget, !0), null === IT.current || (0, Lk.e)(TT.nativeEvent.touches, IT.current.id) || NT();
          const kT = TT.changedTouches[0];
          var cT;
          null === IT.current && kT && (IT.current = {
            id: kT.identifier,
            x: kT.clientX,
            y: kT.clientY
          }, null === (cT = hT.current) || void 0 === cT || cT.press(kT.clientX, kT.clientY));
          KT.current || vT(!0, TT.nativeEvent)
        },
        onTouchMove: TT => {
          const kT = IT.current,
            cT = Bk(TT, kT);
          if (!cT) return;
          const lT = hT.current;
          if (null === lT || void 0 === lT || lT.move(cT.clientX, cT.clientY, CT.current), null !== lT && void 0 !== lT && lT.offered) {
            const TT = lk(cT, AT.current);
            TT !== jT.current && (jT.current = TT, lT.target(TT))
          }
          kT.x = cT.clientX, kT.y = cT.clientY
        },
        onTouchEnd: TT => {
          var kT;
          QT.onTouchEnd(TT);
          const cT = ST(TT);
          null !== cT && ("dropped" !== cT ? (IT.current = null, null !== (kT = hT.current) && void 0 !== kT && kT.lift() ? (0, sT.i)(TT.currentTarget, !1) : tT(TT.nativeEvent)) : NT(TT.nativeEvent))
        },
        onTouchCancel: TT => {
          QT.onTouchCancel(TT), null !== ST(TT) && NT(TT.nativeEvent)
        },
        children: [(0, xT.jsx)(ZT.e, {
          name: "arrow-up-from-line"
        }), kT && (0, xT.jsxs)(xT.Fragment, {
          children: [(0, xT.jsx)("span", {
            className: "JumpLockBadge",
            children: (0, xT.jsx)(ZT.e, {
              name: "lock"
            })
          }), (0, xT.jsx)("svg", {
            className: "JumpLockRing",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            children: (0, xT.jsx)("rect", {
              ref: yT,
              x: "2",
              y: "2",
              width: "96",
              height: "96",
              rx: MT ? 48 : 0,
              pathLength: 1
            })
          }), (0, xT.jsxs)("div", {
            ref: fT,
            className: "JumpLockTarget",
            children: [(0, xT.jsx)(ZT.e, {
              name: "lock"
            }), cT("settingsMenu:jumpLock")]
          })]
        })]
      })
    }
    const nk = new WeakMap;
    class pk {
      constructor(TT) {
        this.zones = TT, this.followed = new Map, this.onStart = TT => {
          if (this.releaseMissing(TT.touches), TT.target instanceof HTMLCanvasElement)
            for (let cT = 0; cT < TT.changedTouches.length; cT++) {
              var kT;
              const {
                identifier: lT,
                clientX: MT,
                clientY: KT
              } = TT.changedTouches[cT];
              this.release(lT);
              const OT = this.zones.hitZone(MT, KT);
              if (!OT) continue;
              const {
                key: yT
              } = OT;
              null === (kT = nk.get(yT)) || void 0 === kT || kT.cancel();
              const fT = {
                hit: OT.element,
                key: yT,
                x: OT.x,
                y: OT.y,
                reach: .6 * OT.radius
              };
              this.followed.set(lT, fT), (0, sT.i)(OT.element, !0), ik(fT, MT, KT)
            }
        }, this.onMove = TT => {
          this.releaseMissing(TT.touches);
          for (let kT = 0; kT < TT.changedTouches.length; kT++) {
            const {
              identifier: cT,
              clientX: lT,
              clientY: MT
            } = TT.changedTouches[kT], KT = this.followed.get(cT);
            KT && ik(KT, lT, MT)
          }
        }, this.onEnd = TT => {
          for (let kT = 0; kT < TT.changedTouches.length; kT++) this.release(TT.changedTouches[kT].identifier)
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
        for (const kT of [...this.followed.keys()])(0, Lk.e)(TT, kT) || this.release(kT)
      }
      releaseAll() {
        for (const TT of [...this.followed.keys()]) this.release(TT)
      }
      release(TT) {
        const kT = this.followed.get(TT);
        if (!kT) return;
        this.followed.delete(TT);
        for (const MT of this.followed.values())
          if (MT.key === kT.key) return;
        (0, sT.i)(kT.hit, !1);
        const {
          key: cT
        } = kT, lT = cT.style.translate;
        cT.style.translate = "", lT && nk.set(cT, cT.animate({
          translate: [lT, "0 0"]
        }, {
          duration: 150,
          easing: "ease-out"
        }))
      }
    }

    function ik(TT, kT, cT) {
      let {
        key: lT,
        x: MT,
        y: KT,
        reach: OT
      } = TT;
      const yT = kT - MT,
        fT = cT - KT,
        xT = Math.min(1, OT / (Math.hypot(yT, fT) || 1));
      lT.style.translate = `${yT*xT}px ${fT*xT}px`
    }
    const qk = () => {
      const TT = (0, WT.m)(),
        kT = (0, mT.s)();
      return TT || kT
    };

    function sk(TT) {
      (0, iT.m)(TT.x, TT.y)
    }
    const Tc = (0, lT.memo)((function() {
        const TT = qk(),
          {
            joystickMode: kT,
            touchSpeedCurve: cT,
            autorun: MT
          } = (0, PT.n)(["clientEscMenuOptions"]).clientEscMenuOptions;
        return (0, lT.useEffect)((() => ((0, qT.h)(nT.s.TouchControls, nT.s.TouchControls), () => {
          (0, qT.h)(nT.s.TouchControls, 0), (0, iT.m)(0, 0)
        })), []), (0, xT.jsx)("div", {
          className: KT()("TouchMovementWrapper", {
            Hidden: TT
          }),
          "data-camera-keeper": "",
          children: (0, xT.jsx)(Pk, {
            onMove: sk,
            mode: kT,
            speedCurve: cT ? bk : void 0,
            autorun: MT
          })
        })
      })),
      kc = (0, lT.memo)((function() {
        const TT = qk(),
          {
            clientEscMenuOptions: kT
          } = (0, PT.n)(["clientEscMenuOptions"]),
          cT = kT.touchActionButtons;
        return (0, lT.useEffect)((() => new pk(iT.i).start()), []), (0, lT.useEffect)((() => {
          DT.k.nt(vk.c)
        }), [TT]), (0, xT.jsxs)("div", {
          className: KT()("TouchComponentsButtons", {
            Hidden: TT
          }),
          "data-camera-keeper": "",
          children: [(0, xT.jsx)(Wk, {
            lockable: kT.jumpLock && !TT
          }), (0, xT.jsx)(jc, {
            hidden: TT,
            actionButtons: cT
          }), (0, xT.jsx)(lc, {})]
        })
      }));

    function cc(TT) {
      const kT = kT => cT => {
        (0, sT.i)(cT.currentTarget, kT), TT(kT, cT.nativeEvent)
      };
      return {
        onPointerDown: kT(!0),
        onPointerUp: kT(!1),
        onPointerCancel: kT(!1)
      }
    }

    function lc() {
      const TT = (0, ST.f)("canCrouch"),
        kT = (0, rT.h)("crouching"),
        cT = (0, lT.useRef)(!1);
      Xk(nT.p.Crouch, cT);
      const MT = (TT, kT) => {
          cT.current = TT, (0, pT.A)(nT.p.Crouch, TT, kT)
        },
        KT = (0, lT.useRef)(null),
        OT = () => {
          cT.current && (KT.current && (0, sT.i)(KT.current, !1), MT(!1, {
            isTrusted: !0,
            timeStamp: performance.now()
          }))
        },
        yT = Yk(OT);
      return (0, lT.useEffect)((() => {
        !1 === TT && OT()
      }), [TT]), !1 === TT ? null : (0, xT.jsx)(uk, {
        ref: KT,
        slot: Jk,
        className: "CrouchKey",
        lit: kT,
        ...yT,
        ...cc(MT),
        children: (0, xT.jsx)(ZT.e, {
          name: "arrow-down-to-line"
        })
      })
    }
    const Mc = [{
        icon: "arrows-rotate"
      }],
      Kc = [{
        icon: "Arrow"
      }],
      Oc = [{
        icon: "crosshairs"
      }],
      yc = [{
        icon: "swords"
      }],
      fc = [{
        icon: "hand-back-point-up"
      }],
      xc = [{
        icon: "Firecracker"
      }];

    function Ic(TT, kT, cT, lT) {
      return {
        id: JSON.stringify(kT),
        render: MT => (0, xT.jsx)(vc, {
          code: TT,
          slot: MT,
          icon: kT,
          label: lT,
          hidden: cT
        })
      }
    }

    function Ac(TT, kT) {
      return {
        id: "fly",
        render: cT => (0, xT.jsx)(Cc, {
          slot: cT,
          flying: TT,
          label: kT
        })
      }
    }

    function Cc(TT) {
      let {
        slot: kT,
        flying: cT,
        label: lT
      } = TT;
      return (0, xT.jsx)(uk, {
        slot: kT,
        className: "FlyKey",
        lit: cT,
        label: lT,
        ...cc(((TT, kT) => {
          (0, pT.A)(nT.p.Fly, TT, kT)
        })),
        children: (0, xT.jsx)(ZT.e, {
          name: "feather-pointed"
        })
      })
    }

    function jc(TT) {
      var kT, cT;
      let {
        hidden: lT,
        actionButtons: MT
      } = TT;
      const {
        t: KT
      } = (0, JT.B)(), {
        gun: OT,
        aimable: yT,
        chargeName: fT
      } = (0, rT.h)("heldItemAim"), IT = (0, rT.h)("gliderBoostFuel"), {
        canFly: AT,
        flying: CT
      } = (0, rT.h)("flight"), jT = (0, ST.f)("touchscreenActionButton"), vT = OT ? Mc : jT, tT = yT ? {
        icon: Kc,
        label: KT("touchKeys:aim")
      } : null, hT = null !== fT ? {
        icon: [{
          icon: fT
        }]
      } : null, NT = null !== tT && void 0 !== tT ? tT : hT, QT = null !== (kT = null === (cT = OT ? tT : null !== hT && void 0 !== hT ? hT : tT) || void 0 === cT ? void 0 : cT.icon) && void 0 !== kT ? kT : fc, DT = [!MT && NT ? Ic(iT.e.Action2, NT.icon, lT, NT.label) : null, OT ? Ic(iT.e.Action3, Oc, lT, KT("touchKeys:scope")) : null, AT ? Ac(CT, KT("touchKeys:fly")) : null];
      return (0, xT.jsxs)(xT.Fragment, {
        children: [vT && (0, xT.jsx)(vc, {
          code: iT.e.Action1,
          slot: Ek,
          icon: vT,
          label: OT ? KT("touchKeys:reload") : void 0,
          hidden: lT
        }, JSON.stringify(vT)), MT && (0, xT.jsxs)(xT.Fragment, {
          children: [(0, xT.jsx)(vc, {
            code: iT.e.Attack,
            slot: Vk,
            icon: yc,
            name: KT("touchKeys:attack"),
            hidden: lT
          }), (0, xT.jsx)(vc, {
            code: iT.e.Use,
            slot: ek,
            icon: QT,
            name: KT("touchKeys:use"),
            hidden: lT
          })]
        }), dk(DT, MT), IT > 0 && (0, xT.jsx)(vc, {
          code: iT.e.Boost,
          slot: Zk,
          icon: xc,
          label: KT("touchKeys:boost", {
            fuel: IT > 99 ? "99+" : IT
          }),
          hidden: lT
        })]
      })
    }

    function vc(TT) {
      let {
        code: kT,
        slot: cT,
        icon: lT,
        label: MT,
        name: KT,
        hidden: OT
      } = TT;
      const yT = zk(kT, OT);
      return (0, xT.jsx)(uk, {
        ref: yT,
        slot: cT,
        className: "TouchActionKey",
        canvasZone: !0,
        label: MT,
        role: void 0 !== KT ? "img" : void 0,
        "aria-label": KT,
        children: (0, xT.jsx)(fT.b, {
          text: lT
        })
      })
    }
    var tc = cT(4251),
      hc = cT(2938),
      Nc = cT(649);
    const Qc = (0, lT.memo)((function() {
      (0, NT.d)();
      const TT = (0, lT.useRef)([]),
        kT = (0, hc.b)(),
        cT = (0, lT.useRef)(0),
        MT = (0, lT.useRef)(0),
        KT = (0, lT.useRef)([]),
        OT = (0, lT.useRef)(null);

      function IT(cT, lT, MT, KT) {
        const OT = (0, Nc.d)(),
          yT = setTimeout((() => {
            TT.current = TT.current.filter((TT => TT.id !== OT)), kT()
          }), KT);
        CT.gameBridge.send("recordFlyingMiddleText", {
          content: cT,
          jc: lT,
          angle: MT,
          vc: KT
        }), TT.current.push({
          id: OT,
          content: cT,
          jc: lT,
          vc: KT,
          removeTimeout: yT,
          angle: MT
        }), kT()
      }
      return (0, rT.b)("shotDamageToShow", (TT => {
        let {
          damage: kT,
          wasCrit: cT,
          distance: lT
        } = TT;
        const MT = -Math.PI / 4 + Math.random() * Math.PI / 2;
        IT(cT ? [{
          str: kT.toString(),
          style: {
            color: "#ff8a80",
            fontSize: "1.6em"
          }
        }] : [kT.toString()], lT, MT, 1e3)
      })), (0, yT.g)("flyingMiddleMessage", (TT => {
        let {
          content: kT,
          jc: lT,
          vc: yT
        } = TT;
        KT.current.push({
          content: kT,
          jc: lT,
          vc: yT
        });
        const fT = () => {
          const {
            content: TT,
            jc: kT,
            vc: lT
          } = KT.current.shift(), OT = function(TT) {
            const kT = -Math.PI / 4,
              cT = Math.PI / 4,
              lT = cT - kT,
              MT = (1 + Math.sqrt(5)) / 2,
              KT = 2 * Math.PI / (MT * MT);
            let OT = TT + KT;
            for (; OT > cT;) OT -= lT;
            for (; OT < kT;) OT += lT;
            const yT = Math.PI / 6;
            if (Math.abs(OT - TT) < yT) {
              OT = TT + (Math.sign(OT - TT) || 1) * yT, OT > cT && (OT = TT - yT), OT < kT && (OT = TT + yT)
            }
            return OT
          }(MT.current);
          MT.current = OT, cT.current = Date.now(), IT(TT, kT, OT, lT)
        };
        if (!OT.current) {
          const TT = () => {
            KT.current.length > 0 && fT(), 0 === KT.current.length && (clearInterval(OT.current), OT.current = null)
          };
          OT.current = setInterval(TT, 200), cT.current + 200 < Date.now() && TT()
        }
        for (; KT.current.length > 4;) fT()
      })), (0, yT.g)("forceFlyingMiddleMessage", (TT => {
        let {
          content: kT,
          jc: cT,
          angle: lT,
          vc: MT
        } = TT;
        IT(kT, cT, lT, MT)
      })), (0, lT.useEffect)((() => () => {
        clearInterval(OT.current), OT.current = null;
        for (const kT of TT.current) clearTimeout(kT.removeTimeout)
      }), []), (0, xT.jsx)("div", {
        className: "FlyingMiddleTextWrapper",
        children: TT.current.map((TT => {
          const {
            id: kT,
            content: cT,
            jc: lT,
            vc: MT,
            angle: KT
          } = TT;
          return TT.pos || (TT.pos = function(TT, kT) {
            const cT = 50 / (TT ** .7 * .35);
            return {
              x: cT * Math.sin(kT),
              y: -cT * Math.cos(kT)
            }
          }(lT, KT)), (0, xT.jsx)(Sc, {
            className: "FlyingMiddleText",
            classNames: "FlyingMiddleText",
            timeout: MT,
            enterActiveStyle: {
              transform: `translate(${TT.pos.x}vw, ${TT.pos.y}vh)`,
              transition: `transform ${MT}ms ease-out`
            },
            children: (0, xT.jsx)("div", {
              children: (0, xT.jsx)(fT.b, {
                text: cT
              })
            })
          }, kT)
        }))
      })
    }));

    function Sc(TT) {
      let {
        children: kT,
        className: cT,
        classNames: MT,
        timeout: KT,
        enterActiveStyle: OT
      } = TT;
      const [yT, fT] = (0, lT.useState)(!1), [IT, AT] = (0, lT.useState)(!1), CT = (0, lT.useRef)(null);
      return (0, lT.useEffect)((() => {
        fT(!0)
      }), []), (0, xT.jsx)(tc.d, {
        className: cT,
        classNames: MT || cT,
        in: yT,
        timeout: KT,
        nodeRef: CT,
        onEntering: () => {
          AT(!0)
        },
        children: (0, lT.cloneElement)(kT, {
          ref: CT,
          style: IT && OT || void 0
        })
      })
    }
    var Dc = cT(36416);

    function ac() {
      const TT = (0, rT.h)("health");
      return (0, xT.jsxs)("div", {
        className: "BottomScreenStatBarList",
        children: [(0, xT.jsx)(Dc.c, {
          placement: "statBars"
        }), (0, xT.jsx)(Fc, {
          actualValue: TT.shield,
          maxValue: TT.maxShield,
          hideAtValue: 0,
          icon: "shield",
          className: "ShieldBar"
        }), (0, xT.jsx)(Fc, {
          actualValue: TT.health,
          maxValue: TT.maxHealth,
          icon: "heart",
          className: "HealthBar"
        })]
      })
    }

    function Fc(TT) {
      let {
        actualValue: kT,
        maxValue: cT,
        hideAtValue: lT,
        icon: MT,
        className: KT
      } = TT;
      return (0, NT.g)(), null === kT || null === cT || kT === lT || cT === lT ? null : (0, xT.jsx)("div", {
        className: "BottomScreenStatBarWrapper",
        children: (0, xT.jsxs)("div", {
          className: "BottomScreenStatBarBackground",
          children: [(0, xT.jsx)("div", {
            className: `BottomScreenStatBar ${KT}`,
            style: {
              transform: `scaleX(${Math.max(kT/cT,0)})`,
              transformOrigin: "left center"
            }
          }), (0, xT.jsxs)("div", {
            className: "BottomScreenStatBarText SmallTextBold",
            children: [(0, xT.jsx)(ZT.e, {
              name: MT
            }), ` ${Math.ceil(kT)}/${cT}`]
          })]
        })
      })
    }
    var rc = cT(9359),
      Pc = cT(4515),
      wc = cT(1333),
      mc = cT(2761),
      bc = cT(1470),
      zc = cT(1316),
      Jc = cT(3356),
      oc = cT(3402),
      Hc = cT(3371),
      ec = cT(761),
      Gc = cT(3419),
      Vc = cT(159),
      Ec = cT(9259),
      Zc = cT(339);

    function uc(TT, kT) {
      let {
        shownName: cT,
        lifeformType: lT
      } = TT;
      return null !== cT ? cT : null !== lT ? kT(`lifeform:${(0,Zc.ve)(lT)}`) : null
    }
    var Xc = cT(3365),
      dc = cT(3368);
    const Lc = {
        FallDamage: "respawnPage:diedFallDamage",
        VoidJump: "respawnPage:diedVoid",
        Lava: "respawnPage:diedLava",
        "Toxic Waste": "respawnPage:diedToxicWaste",
        "Poison Potion": "respawnPage:diedPoisoned",
        "Rotten Brain": "respawnPage:diedPoisoned"
      },
      Rc = (0, lT.memo)((function() {
        var TT, kT;
        const cT = (0, NT.d)(),
          MT = (0, jT.useNavigatePreserveSearch)(),
          {
            t: OT
          } = (0, JT.B)(),
          {
            loadingOverlayVisible: fT
          } = (0, PT.n)(["loadingOverlayVisible"]),
          IT = (0, mT.s)(),
          [AT, vT] = (0, lT.useState)(!1),
          [tT, hT] = (0, lT.useState)(!0),
          [QT, DT] = (0, lT.useState)(null),
          FT = (0, hc.b)(),
          wT = (0, ST.f)("respawnButtonText"),
          bT = (0, ST.f)("usePlayAgainButton"),
          zT = (0, ST.f)("useRespawnButton"),
          {
            gameNameWithVariation: oT
          } = (0, rT.h)("connectedGame"),
          HT = (0, lT.useRef)(aT.b.get("secsToRespawn")),
          eT = (0, lT.useRef)(CT.gameBridge.latest("localPlayerAlive")),
          GT = (0, lT.useRef)(aT.b.get("secsToRespawn")),
          VT = (0, lT.useRef)(aT.b.get("autoRespawn")),
          ET = (0, lT.useRef)(null),
          uT = (0, lT.useRef)(0),
          XT = (0, lT.useRef)(0),
          [dT, RT] = (0, lT.useState)(!1),
          gT = (0, lT.useRef)(null),
          UT = (0, lT.useRef)(null),
          YT = (0, lT.useRef)(null);
        (0, ST.e)("secsToRespawn", (TT => {
          console.log("Received new secsToRespawn with", TT, "and current canRespawn value of ", VT.current), GT.current = TT, pT()
        })), (0, ST.e)("autoRespawn", (TT => {
          console.log("Received autorespawn", TT, "current canRespawn value of ", HT.current), VT.current = TT, pT()
        }));
        const BT = TT => {
          console.log("Updating respawn component from localPlayerAliveSet. isAlive:", TT), TT || uT.current++, eT.current = TT, pT()
        };
        (0, rT.b)("localPlayerAliveSet", BT), (0, yT.g)(oc.p, (TT => {
          "connected" === TT && !eT.current && VT.current && HT.current <= 0 && (XT.current = 0, iT())
        })), (0, lT.useEffect)((() => {
          const TT = CT.gameBridge.latest("localPlayerAlive");
          TT === eT.current ? (console.log("Updating respawn component from initial mount"), pT()) : BT(TT)
        }), []), (0, lT.useEffect)((() => {
          if (AT) {
            RT(!1);
            const TT = setTimeout((() => {
              RT(!0)
            }), 600);
            return (0, Ec.e)(), () => {
              clearTimeout(TT)
            }
          }
          return () => {}
        }), [AT]);
        (0, rT.b)("kill", (TT => {
          let {
            killer: kT,
            victim: cT,
            withItem: lT
          } = TT;
          if (!cT.local) return;
          const MT = ((TT, kT) => {
            if (TT.local) {
              const TT = Lc[kT];
              return TT ? OT(TT) : null
            }
            const cT = uc(TT, OT);
            return cT ? OT("respawnPage:killedBy", {
              name: cT
            }) : null
          })(kT, lT);
          MT && DT({
            text: MT,
            deathCount: eT.current ? uT.current + 1 : uT.current
          })
        }));
        const WT = () => {
            AT && VT.current && eT.current && dT && vT(!1)
          },
          nT = AT && VT.current && eT.current && dT && !fT;
        (0, yT.g)("usedKeyboard", (() => {
          WT()
        })), (0, dc.b)("respawn", nT, WT);
        const pT = () => {
            hT(GT.current >= 3 || !VT.current), eT.current ? (clearInterval(ET.current), ET.current = null, VT.current ? FT() : vT(!1)) : (vT(!0), HT.current = GT.current, FT(), console.log("Running respawn stats updated", VT.current, HT.current), VT.current && HT.current <= 0 && iT(), clearInterval(ET.current), HT.current > 0 && (ET.current = setInterval((() => {
              HT.current = Math.max(HT.current - 1, 0), FT(), HT.current <= 0 && (clearInterval(ET.current), ET.current = null, aT.b.get("autoRespawn") && iT())
            }), 1e3)))
          },
          iT = () => {
            if (Date.now() - XT.current > 1e3) {
              const TT = () => {
                CT.gameBridge.send("respawn", null), XT.current = Date.now()
              };
              aT.b.get("autoRespawn") ? TT() : (0, zc.$)((() => {
                TT()
              }), "video_respawn")
            }
          },
          qT = (0, lT.useMemo)((() => {
            var TT;
            return null === (TT = (0, ec.n)(oT)) || void 0 === TT ? void 0 : TT.otherGameLinksOnRespawnPage
          }), [oT]),
          sT = 0 === HT.current,
          Tk = (null === QT || void 0 === QT ? void 0 : QT.deathCount) === uT.current ? QT.text : null,
          kk = AT && tT && !fT,
          ck = IT && nT && null !== (TT = null === (kT = (0, LT.g)()) || void 0 === kT ? void 0 : kT.getBoundButton("menuConfirm")) && void 0 !== TT ? TT : null,
          lk = TT => sT ? TT : OT("respawnPage:actionInSeconds", {
            action: TT,
            seconds: HT.current
          });
        return (0, xT.jsx)(rc.b, {
          showing: AT,
          globallyUniqueKey: "RespawnComponent",
          alwaysMountChildren: !0,
          children: (0, xT.jsx)(Jc.e, {
            show: AT,
            "data-holds-camera-keeper": "",
            children: (0, xT.jsxs)(Pc.c, {
              close: () => {
                vT(!1)
              },
              togglePointerLock: !1,
              closeOnPressBackground: !1,
              className: "RespawnBackgroundScreen",
              padLayerKind: VT.current || fT ? null : "death",
              padBackCloses: !1,
              cameraKeeper: !0,
              children: [(0, Vc.m)() && (0, xT.jsx)(bc.b, {
                onClick: Hc.e,
                children: OT("homePage:backToGames")
              }), (0, xT.jsxs)("div", {
                className: "RespawnContainer",
                onClick: WT,
                children: [(0, xT.jsxs)("div", {
                  className: "RespawnTop",
                  children: [(0, xT.jsx)("div", {
                    ref: UT,
                    className: "RespawnSideSquareBannerDiv",
                    children: cT[0] > 925 && (0, xT.jsx)(mc.c, {
                      info: {
                        adType: "square",
                        adId: 1,
                        adAlias: "banner_respawn_1"
                      },
                      sizeInfo: {
                        parentRef: UT
                      },
                      showing: kk,
                      horizontalAlign: "start",
                      extraContrastBackgroundBox: "left",
                      noFillShowBloxdAdProbability: 0
                    })
                  }), (0, xT.jsx)("div", {
                    className: "RespawnMainContent",
                    children: (0, xT.jsxs)("div", {
                      className: KT()("RespawnMainContentInner", {
                        RespawnMainContentInnerPad: IT
                      }),
                      children: [VT.current && (0, xT.jsxs)("div", {
                        className: "AutoRespawnDeathInfo",
                        children: [(0, xT.jsxs)("div", {
                          className: "AutoRespawnDeathTitle FullyFancyText",
                          children: [(0, xT.jsx)(ZT.e, {
                            name: "skull",
                            className: "AutoRespawnDeathIcon"
                          }), OT("respawnPage:youDied")]
                        }), (0, xT.jsxs)("div", {
                          className: "AutoRespawnDeathCause FullyFancyText",
                          children: [null === ck && (eT.current ? OT("respawnPage:pressAnywhereToContinue") : sT ? OT("respawnPage:respawning") : lk(OT("general:respawn"))), null !== ck && (0, xT.jsx)(Xc.b, {
                            text: OT("controller:screensPressToContinue", {
                              button: Xc.f
                            }),
                            glyph: ck,
                            className: "AutoRespawnContinueGlyph"
                          })]
                        }), Tk && (0, xT.jsx)("div", {
                          className: "AutoRespawnStatus",
                          children: Tk
                        })]
                      }), !VT.current && (0, xT.jsxs)(xT.Fragment, {
                        children: [(0, xT.jsxs)("div", {
                          className: KT()("RespawnPageButtons", {
                            RespawnPageButtonsVertical: !qT
                          }),
                          children: [bT && (0, xT.jsx)(bc.m, {
                            className: "RespawnPageButton",
                            padDefaultFocus: !0,
                            onClick: () => {
                              (0, zc.$)((() => {
                                (0, PT.l)("inGameReplay");
                                const TT = (0, wc.c)(oT);
                                MT(TT)
                              }), "video_start")
                            },
                            disabled: !sT || !dT,
                            touchPressOn: "pointerup",
                            children: lk(OT("respawnPage:playAgain"))
                          }), zT && (0, xT.jsx)(bc.e, {
                            className: "RespawnPageButton",
                            onClick: iT,
                            padDefaultFocus: !bT,
                            padBack: "sessionBasedGame:stayInLobby" === wT,
                            disabled: !sT || !dT,
                            touchPressOn: "pointerup",
                            children: lk(OT(wT))
                          }), !(0, Vc.m)() && (0, xT.jsx)(bc.I, {
                            className: "RespawnPageButton",
                            onClick: Hc.e,
                            disabled: !sT || !dT,
                            touchPressOn: "pointerup",
                            children: lk(OT("respawnPage:exitGame"))
                          })]
                        }), qT && (0, xT.jsxs)("div", {
                          className: "RespawnPageOtherGames",
                          children: [(0, xT.jsx)("div", {
                            className: "RespawnPageOtherGamesTitle",
                            children: OT("respawnPage:orTry")
                          }), (0, xT.jsx)("div", {
                            className: "RespawnPageOtherGameThumbnails",
                            children: qT.map((TT => (0, xT.jsx)(Gc.d, {
                              source: {
                                type: "game",
                                gameNameWithVariation: TT
                              },
                              disabled: !sT || !dT,
                              gameWidth: "13rem",
                              hideDescription: !0,
                              hideFavourites: !0,
                              hideCcu: !0,
                              onClick: () => {
                                (0, PT.l)("inGameReplay");
                                const kT = (0, wc.c)(TT);
                                MT(kT)
                              }
                            }, TT)))
                          })]
                        })]
                      })]
                    })
                  }), (0, xT.jsx)("div", {
                    ref: YT,
                    className: "RespawnSideSquareBannerDiv"
                  })]
                }), (0, xT.jsx)("div", {
                  ref: gT,
                  className: "RespawnBottom",
                  children: (0, xT.jsx)(mc.c, {
                    info: {
                      adType: "leaderboard",
                      adId: 1,
                      adAlias: "banner_respawn_2"
                    },
                    sizeInfo: {
                      parentRef: gT
                    },
                    showing: kk,
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
    var gc = cT(36434);
    const Uc = [{
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
      Yc = [{
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
      Bc = {
        duration: 300,
        easing: "ease-out",
        fill: "forwards"
      },
      Wc = {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
      },
      nc = (0, lT.memo)((function() {
        const TT = (0, lT.useRef)(null),
          kT = (0, lT.useRef)(null);

        function cT(cT) {
          var lT;
          let {
            Ac: MT,
            screenPos: KT
          } = cT;
          const OT = TT.current;
          null === (lT = kT.current) || void 0 === lT || lT.cancel(), OT.classList.remove("HitmarkerCrit"), KT ? (OT.style.left = `${KT.x}%`, OT.style.top = `${KT.y}%`) : (OT.style.left = "50%", OT.style.top = "50%"), OT.style.rotate = 16 * (Math.random() - .5) + "deg", MT && OT.classList.add("HitmarkerCrit");
          const yT = OT.animate(MT ? Yc : Uc, MT ? Wc : Bc);
          kT.current = yT, yT.onfinish = () => {
            OT.classList.remove("HitmarkerCrit")
          }
        }
        return (0, yT.g)("localGunHitmarker", (TT => {
          let {
            Ac: kT
          } = TT;
          cT({
            Ac: kT
          })
        })), (0, yT.g)("yourAttackHit", (TT => {
          let {
            Ac: kT,
            screenPos: lT
          } = TT;
          cT({
            Ac: kT,
            screenPos: PT.e.get("isTouchScreen") ? lT : void 0
          })
        })), (0, yT.g)("sendHitmarker", (TT => {
          let {
            Ac: kT,
            screenPos: lT
          } = TT;
          cT({
            Ac: kT,
            screenPos: lT
          })
        })), (0, xT.jsxs)("div", {
          ref: TT,
          className: "Hitmarker",
          children: [(0, xT.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, xT.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, xT.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, xT.jsx)("div", {
            className: "HitmarkerBar"
          })]
        })
      }));

    function pc() {
      const TT = (0, lT.useRef)(!0);
      return (0, yT.g)("localBlockMined", (() => {
        Mk.f.play("blockMined")
      })), (0, yT.g)("yourAttackHit", (() => {
        Mk.f.play("hitLanded")
      })), (0, yT.g)("localGunHitmarker", (() => {
        Mk.f.play("hitLanded")
      })), (0, yT.g)("damagedByOtherPlayer", (() => {
        Mk.f.play("damageTaken")
      })), (0, rT.b)("localPlayerAliveSet", (kT => {
        !kT && TT.current && Mk.f.play("death"), TT.current = kT
      })), null
    }
    var ic = cT(1943),
      qc = cT(36448),
      sc = cT.n(qc),
      Tl = cT(2056),
      kl = cT(2047),
      cl = cT(3214),
      ll = cT(9384);
    const Ml = Zc.ke ? 7e7 : 7e3,
      Kl = sc()("#ffffff").alpha(.5).string();

    function Ol(TT) {
      const kT = (0, cl.e)(TT);
      return void 0 !== kT && "Gun" === (0, ll.itemTypeOf)(kT)
    }

    function yl(TT) {
      if (!TT) return console.error(`Killfeed colour was ${TT}`), Kl;
      try {
        return sc()(TT).alpha(.5).string()
      } catch {
        return console.warn(`Killfeed colour ${TT} is not a colour`), Kl
      }
    }
    const fl = (0, lT.memo)((function() {
      const {
        t: TT
      } = (0, JT.B)(), kT = (0, lT.useRef)([]), cT = (0, hc.b)();
      return (0, rT.b)("kill", (function(lT) {
        var MT, KT;
        let {
          killer: OT,
          victim: yT,
          withItem: fT,
          killstreak: xT
        } = lT;
        const IT = kT.current;
        if (IT.length >= 3) {
          const TT = IT.shift();
          clearTimeout(TT.timeout)
        }
        const AT = CT.gameBridge.latest("hiddenPlayerNames"),
          jT = {
            deadName: uc(yT, TT),
            killerName: uc(OT, TT),
            isFriend: {
              killer: (0, Tl.g)(OT.realName, AT),
              dead: (0, Tl.g)(yT.realName, AT)
            },
            withItem: fT,
            wasHeadshot: !1,
            killstreak: xT,
            timeout: setTimeout((() => {
              IT.shift(), cT()
            }), Ml),
            reactId: `${null!==(MT=OT.id)&&void 0!==MT?MT:OT.shownName}|${null!==(KT=yT.id)&&void 0!==KT?KT:yT.shownName}|${Date.now()}`,
            killerBackground: yl(OT.colour),
            deadBackground: yl(yT.colour)
          };
        IT.push(jT), cT()
      })), (0, lT.useEffect)((() => {
        const TT = kT.current;
        return () => {
          for (; TT.length > 0;) {
            const {
              timeout: kT
            } = TT.pop();
            clearTimeout(kT)
          }
        }
      }), []), (0, xT.jsx)("div", {
        className: "Killfeed",
        children: kT.current.map((TT => {
          let {
            deadName: kT,
            killerName: cT,
            withItem: lT,
            wasHeadshot: MT,
            killstreak: KT,
            killerBackground: OT,
            deadBackground: yT,
            reactId: fT,
            isFriend: IT
          } = TT;
          return (0, xT.jsxs)("div", {
            className: "IndividualKillWrapper SmallTextLight",
            style: {
              background: `linear-gradient(90deg, ${OT} calc(100% - 10rem), ${yT} 100%)`
            },
            children: [KT >= 2 ? (0, xT.jsx)("div", {
              className: "KillfeedKillstreak",
              children: (0, Zc.N)(KT)
            }) : null, (0, xT.jsx)("div", {
              className: "KillfeedKillerName",
              children: cT
            }), IT.killer && (0, xT.jsx)(kl.e, {}), (0, xT.jsx)("div", {
              className: "KillfeedItem",
              style: {
                height: "5vmin",
                width: Ol(lT) ? "7.5vmin" : "5vmin"
              },
              children: (0, xT.jsx)(ic.d, {
                itemName: lT,
                amount: 0,
                gunTransform: "scaleX(-1)",
                itemMarginTop: 0
              })
            }), MT ? (0, xT.jsx)(ZT.e, {
              name: "crosshairs",
              className: "3x KillfeedHeadshotIcon"
            }) : null, (0, xT.jsx)("div", {
              className: "KillfeedDeadName",
              children: kT
            }), IT.dead && (0, xT.jsx)(kl.e, {})]
          }, fT)
        }))
      })
    }));
    var xl = cT(36496),
      Il = cT(1143),
      Al = cT.n(Il),
      Cl = cT(3343),
      jl = cT(36504),
      vl = cT(1303);
    const tl = {},
      hl = (0, lT.memo)((function() {
        const TT = (0, lT.useRef)({}),
          [, kT] = (0, lT.useReducer)((TT => TT + 1), 0);
        (0, yT.g)("setDirectionArrow", (cT => {
          let {
            id: lT,
            position: MT,
            style: KT,
            text: OT,
            vT: yT
          } = cT;
          const fT = TT.current,
            xT = KT || tl,
            IT = OT,
            AT = fT[lT];
          if (!AT) return fT[lT] = {
            position: MT,
            style: xT,
            text: IT,
            shouldShowDistance: yT,
            JG: null,
            chevronElement: null,
            distanceElement: null,
            lastRenderedDist: -1,
            lastDistUpdateTime: 0,
            lastScreenX: NaN,
            lastScreenY: NaN,
            onScreen: void 0
          }, void kT();
          const CT = !Al()(AT.style, xT) || !Al()(AT.text, IT) || AT.shouldShowDistance !== yT;
          AT.position = MT, AT.style = xT, AT.text = IT, AT.shouldShowDistance = yT, CT && kT()
        })), (0, yT.g)("clearDirectionArrow", (cT => {
          let {
            id: lT
          } = cT;
          const MT = TT.current;
          if (null === lT)
            for (const TT in MT) delete MT[TT];
          else delete MT[lT];
          kT()
        })), (0, lT.useEffect)((() => {
          const kT = TT.current,
            cT = (0, vl.s)((() => {
              ! function(TT) {
                const kT = CT.gameBridge.lookup("localPos", null),
                  cT = Cl.c - Nl,
                  lT = (0, Cl.i)() - Nl;
                for (const MT in TT) {
                  const KT = TT[MT];
                  if (!KT.JG) continue;
                  const OT = CT.gameBridge.lookup("screenPos", KT.position),
                    yT = OT.x - 50,
                    fT = OT.y - 50;
                  OT.x === KT.lastScreenX && OT.y === KT.lastScreenY || (KT.lastScreenX = OT.x, KT.lastScreenY = OT.y, KT.JG.style.translate = `${OT.x}vw ${OT.y}vh`, KT.chevronElement && (KT.chevronElement.style.rotate = `${Zc.d.fastATan2(fT,yT)}rad`));
                  const xT = Math.abs(yT) < cT && Math.abs(fT) < lT;
                  if (xT !== KT.onScreen && (KT.onScreen = xT, KT.JG.classList.toggle("DirectionArrowOnScreen", xT)), KT.shouldShowDistance && KT.distanceElement) {
                    const TT = KT.position[0] - kT[0],
                      cT = KT.position[1] - kT[1],
                      lT = KT.position[2] - kT[2],
                      MT = Math.round(Math.sqrt(TT * TT + cT * cT + lT * lT));
                    (-1 === KT.lastRenderedDist || (0, jl.c)(MT, KT.lastRenderedDist, KT.lastDistUpdateTime)) && (KT.distanceElement.textContent = `${MT}m`, KT.lastRenderedDist = MT, KT.lastDistUpdateTime = Date.now() + Math.floor(100 * Math.random()))
                  }
                }
              }(kT)
            }));
          return () => {
            cT();
            for (const TT in kT) delete kT[TT]
          }
        }), []);
        const cT = TT.current;
        return (0, xT.jsx)("div", {
          className: "DirectionArrows",
          children: Object.entries(cT).map((TT => {
            var kT;
            let [lT, MT] = TT;
            const KT = null !== (kT = (0, QT.Jb)(MT.style)) && void 0 !== kT ? kT : "#ffffff";
            return (0, xT.jsxs)("div", {
              ref: TT => {
                cT[lT] && (cT[lT].JG = TT)
              },
              className: "DirectionArrow",
              style: {
                fontSize: MT.style.fontSize,
                opacity: MT.style.opacity
              },
              children: [(0, xT.jsxs)("div", {
                className: "DirectionArrowChevron",
                ref: TT => {
                  cT[lT] && (cT[lT].chevronElement = TT)
                },
                children: [(0, xT.jsxs)("div", {
                  className: "DirectionArrowShadowLayer",
                  children: [(0, xT.jsx)("div", {
                    className: "DirectionArrowBar"
                  }), (0, xT.jsx)("div", {
                    className: "DirectionArrowBar"
                  })]
                }), (0, xT.jsxs)("div", {
                  className: "DirectionArrowBarLayer",
                  children: [(0, xT.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: KT
                    }
                  }), (0, xT.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: KT
                    }
                  })]
                })]
              }), (0, xT.jsx)("div", {
                className: "DirectionArrowMarker",
                style: {
                  background: KT,
                  boxShadow: `0 0 3px rgba(0, 0, 0, 0.8), 0 0 8px ${KT}`
                }
              }), MT.text && (0, xT.jsx)("div", {
                className: "DirectionArrowLabel SmallTextLight",
                style: {
                  color: KT,
                  fontWeight: MT.style.fontWeight,
                  fontStyle: MT.style.fontStyle
                },
                children: (0, xT.jsx)(fT.b, {
                  text: MT.text
                })
              }), MT.shouldShowDistance && (0, xT.jsx)("div", {
                className: "DirectionArrowDistance SmallTextLight",
                ref: TT => {
                  cT[lT] && (cT[lT].distanceElement = TT)
                },
                style: {
                  color: KT,
                  fontWeight: MT.style.fontWeight,
                  fontStyle: MT.style.fontStyle
                }
              })]
            }, lT)
          }))
        })
      })),
      Nl = .5;
    const Ql = (0, lT.memo)((function(TT) {
        let {
          isTouchScreen: kT
        } = TT;
        return (0, xT.jsxs)("div", {
          className: "BottomRightElements",
          "data-camera-keeper-host": "",
          children: [(0, xT.jsx)(Fl, {}), kT && (0, xT.jsx)(kc, {})]
        })
      })),
      Sl = {
        readyForNext: 0,
        running: 1
      },
      Dl = 50;

    function al(TT) {
      console.assert(TT.state.current === Sl.readyForNext);
      const kT = TT.queue.current,
        cT = TT.foreground.current;
      if (kT.length > 0 && cT) {
        const {
          toFraction: lT,
          toDuration: MT
        } = kT.shift();
        TT.state.current = Sl.running, cT.style.transition = `transform ${Math.max(MT-Dl,0)}ms linear`, cT.classList.remove("Complete"), TT.timeout.current = setTimeout((() => {
          cT.style.transform = `scaleX(${lT})`, TT.timeout.current = setTimeout((() => {
            1 === lT && cT.classList.add("Complete"), TT.state.current = Sl.readyForNext, al(TT)
          }), Math.max(MT - Dl, 0))
        }), Dl)
      }
    }

    function Fl() {
      const TT = (0, lT.useRef)([]),
        kT = (0, lT.useRef)(Sl.readyForNext),
        cT = (0, lT.useRef)(void 0),
        MT = (0, lT.useRef)(null),
        KT = (0, lT.useRef)({
          queue: TT,
          state: kT,
          timeout: cT,
          foreground: MT
        }),
        OT = (0, ST.f)("showProgressBar");
      if ((0, lT.useLayoutEffect)((() => (OT && kT.current === Sl.readyForNext && al(KT.current), () => {
          kT.current = Sl.readyForNext, clearTimeout(cT.current), OT && (TT.current.length = 0)
        })), [OT]), (0, yT.g)("progressBarUpdate", (cT => {
          let {
            toFraction: lT,
            toDuration: MT
          } = cT;
          TT.current.push({
            toFraction: lT,
            toDuration: MT
          }), kT.current === Sl.readyForNext && al(KT.current)
        })), !OT) return null;
      return (0, xT.jsx)("div", {
        className: "ProgressBarBackground",
        children: (0, xT.jsx)("div", {
          className: "ProgressBarForeground",
          ref: MT,
          style: {
            width: "15vw",
            transformOrigin: "left center",
            transform: "scaleX(0)"
          }
        })
      })
    }
    var rl = cT(36506),
      Pl = cT(2504);
    const wl = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function ml(TT) {
      let {
        classes: kT,
        gone: cT
      } = TT;
      const lT = document.documentElement;
      lT.classList.remove(...kT);
      for (const MT of cT) MT.style.display = "block";
      return () => {
        lT.classList.add(...kT);
        for (const TT of cT) TT.style.display = ""
      }
    }

    function bl(TT) {
      const {
        isTouchScreen: kT
      } = (0, PT.n)(["isTouchScreen"]);
      (0, lT.useLayoutEffect)((() => {
        if (!kT) return;
        const cT = TT.current,
          lT = document.querySelector(`.${rl.j}`),
          MT = TT => {
            const kT = () => {
              const kT = TT.querySelector(Pl.l),
                lT = function(TT) {
                  const kT = document.documentElement;
                  return {
                    classes: Ak.C.map(tk.v).filter((TT => kT.classList.contains(TT))),
                    gone: [...TT.querySelectorAll(`.TopRightTrayToggle.${Pl.p}`)]
                  }
                }(TT);
              kT && function(TT, kT) {
                (0, Pl.B)(TT, kT.classes.length > 0 || kT.gone.length > 0, (() => ml(kT)))
              }(kT, lT);
              const MT = `${Math.floor(function(TT,kT,cT){const lT=document.documentElement,MT=lT.classList.contains((0,tk.y)("menu")),KT=lT.style.getPropertyValue((0,tk.F)("menu"));if(!MT&&""===KT)return TT.getBoundingClientRect().left;const OT=kT?(0,Pl.t)(kT):()=>{},yT=ml(cT);lT.classList.remove((0,tk.y)("menu")),lT.style.removeProperty((0,tk.F)("menu"));const fT=TT.getBoundingClientRect().left;return yT(),OT(),MT&&lT.classList.add((0,tk.y)("menu")),""!==KT&&lT.style.setProperty((0,tk.F)("menu"),KT),fT}(TT,kT,lT)-cT.getBoundingClientRect().left-4)}px`;
              cT.style.getPropertyValue("--InGameHeaderMaxWidth") !== MT && cT.style.setProperty("--InGameHeaderMaxWidth", MT)
            };
            kT();
            const MT = new ResizeObserver(kT);
            MT.observe(TT), MT.observe(lT), window.addEventListener("resize", kT);
            const KT = () => wl.map((TT => document.documentElement.style.getPropertyValue(TT))).join();
            let OT = KT();
            const yT = new MutationObserver((() => {
              const TT = KT();
              TT !== OT && (OT = TT, kT())
            }));
            yT.observe(document.documentElement, {
              attributes: !0,
              attributeFilter: ["style"]
            });
            const fT = (0, DT.m)(tk.c, kT),
              xT = new MutationObserver(kT);
            return xT.observe(TT, {
              childList: !0,
              subtree: !0
            }), () => {
              MT.disconnect(), yT.disconnect(), xT.disconnect(), fT(), window.removeEventListener("resize", kT);
              const cT = TT.querySelector(Pl.l);
              cT && (0, Pl.t)(cT)
            }
          },
          KT = () => lT.querySelector(".TopRightIconsContainer"),
          OT = KT();
        let yT;
        if (OT) yT = MT(OT);
        else {
          const TT = new MutationObserver((() => {
            const kT = KT();
            kT && (TT.disconnect(), yT = MT(kT))
          }));
          TT.observe(lT, {
            childList: !0,
            subtree: !0
          }), yT = () => {
            TT.disconnect()
          }
        }
        return () => {
          yT(), cT.style.removeProperty("--InGameHeaderMaxWidth")
        }
      }), [kT, TT])
    }
    var zl = cT(3637),
      Jl = cT(3634),
      ol = cT(1654),
      Hl = cT(1518),
      el = cT(1663),
      Gl = cT(1741),
      Vl = cT(1875),
      El = cT(1136),
      Zl = cT(4279),
      ul = cT(1497),
      Xl = cT(1370);
    const dl = 2e4,
      Ll = 6e5,
      Rl = new Set;

    function gl() {
      const {
        gameEntrySource: TT,
        loadingOverlayVisible: kT
      } = (0, PT.n)(["gameEntrySource", "loadingOverlayVisible"]), cT = (0, rT.e)("connectedGame", (TT => (0, Zl.j)(TT) ? TT.lobbyName : null)), MT = (0, rT.h)("localPlayerAlive"), KT = (0, rT.e)("players", (TT => null !== TT.localId && void 0 !== TT.byId[TT.localId])), [OT, yT] = (0, lT.useState)(null);
      return !kT && MT && KT && null !== cT && OT !== cT && yT(cT), (0, lT.useEffect)((() => {
        if (!(0, Zl.n)(TT) || null === OT || OT !== cT || Rl.has(OT)) return;
        const kT = setTimeout((() => {
          Rl.add(OT), async function(TT) {
            const kT = await El.userContextManager.getCurrentUserContext();
            let cT;
            try {
              cT = (await Hl.d.getWorldOwnerFriendOffer(kT)).owner
            } catch (MT) {
              return void console.warn("Couldn't ask who owns this world", MT)
            }
            if (!cT || (0, Zl.r)(cT.name, Date.now())) return;
            const lT = cT;
            ! function(TT, kT) {
              const cT = Date.now() + Ll;
              let lT = Date.now(),
                MT = 0;
              const KT = () => {
                const OT = Date.now(),
                  yT = CT.gameBridge.latest("connectedGame");
                yT.lobbyName !== TT || OT > cT || (null === yT.websocketUrl ? lT = 1 / 0 : lT === 1 / 0 && !PT.e.get("loadingOverlayVisible") && CT.gameBridge.latest("localPlayerAlive") && (lT = OT + dl), MT = OT < lT || !CT.gameBridge.latest("localPlayerAlive") || PT.e.get("isUiHidden") || PT.e.get("isUiHiddenByCamera") || (0, Gl.isTypingInInput)() || PT.e.get("loadingOverlayVisible") || (0, ol.s)() || (0, zl.e)() || (0, Xl.i)() ? 0 : MT + 1, MT >= 2 ? kT() : setTimeout(KT, 500))
              };
              KT()
            }(TT, (() => {
              (0, Zl.f)(el.b.getSocialState().friends, lT.name) || ((0, Zl.q)(lT.name, Date.now()), Vl.g.showWorldOwnerOffer(lT), (0, ul.reportAnalyticsClick)({
                id: "social.world_owner_offer",
                value: "shown"
              }))
            }))
          }(OT).catch((TT => {
            console.error("Failed to offer the world's owner as a friend", TT)
          }))
        }), dl);
        return () => {
          clearTimeout(kT)
        }
      }), [TT, OT, cT]), null
    }
    var Ul = cT(1930);
    const Yl = (0, lT.memo)((function(TT) {
        let {
          durationMs: kT,
          endsAtMs: cT
        } = TT;
        const [, MT] = (0, lT.useReducer)((TT => TT + 1), 0), KT = null === cT ? kT : Math.max(cT - Date.now(), 0);
        return (0, lT.useEffect)((() => {
          if (null === cT || KT <= 0) return;
          const TT = setTimeout(MT, KT - 1e3 * (Math.ceil(KT / 1e3) - 1));
          return () => {
            clearTimeout(TT)
          }
        })), (0, xT.jsx)("div", {
          className: "EffectInfoDuration SmallTextLight",
          children: (0, Zc.$)(KT)
        })
      })),
      Bl = (0, lT.memo)((function() {
        const TT = (0, rT.h)("localEffects");
        return (0, xT.jsx)("div", {
          className: "EffectInfosWrapper",
          children: Object.entries(TT).map((TT => {
            let [kT, {
              icon: cT,
              displayName: lT,
              durationMs: MT,
              endsAtMs: KT,
              level: OT
            }] = TT;
            return (0, xT.jsxs)("div", {
              className: "EffectInfo",
              children: [(0, xT.jsx)(Ul.b, {
                icon: cT,
                className: "EffectInfoIcon"
              }), (0, xT.jsxs)("div", {
                className: "EffectInfoRightSide",
                style: {
                  marginTop: null !== MT ? "0" : "1rem"
                },
                children: [(0, xT.jsxs)("div", {
                  className: "EffectInfoNameWrapper",
                  children: [(0, xT.jsx)(fT.b, {
                    text: null !== lT && void 0 !== lT ? lT : kT,
                    className: "EffectInfoName SmallTextBold"
                  }), OT > 1 && (0, xT.jsx)("div", {
                    className: "EffectInfoName SmallTextBold",
                    children: (0, Zc.N)(OT)
                  })]
                }), null !== MT && (0, xT.jsx)(Yl, {
                  durationMs: MT,
                  endsAtMs: KT
                })]
              })]
            }, kT)
          }))
        })
      }));
    var Wl = cT(36514),
      nl = cT(36733),
      pl = cT(218),
      il = cT(1363),
      ql = cT(2784),
      sl = cT(2888);

    function TM(TT, kT) {
      (0, lT.useLayoutEffect)((() => {
        let kT, cT;
        const lT = requestAnimationFrame((() => {
          cT = setTimeout((() => {
            cT = void 0;
            const lT = TT();
            kT = "function" === typeof lT ? lT : void 0
          }), 0)
        }));
        return () => {
          var TT;
          cancelAnimationFrame(lT), clearTimeout(cT), null === (TT = kT) || void 0 === TT || TT()
        }
      }), kT)
    }
    const kM = [5, 5, 5],
      cM = [7, 4, 4, 4];

    function lM(TT) {
      return TT.reduce(((TT, kT) => TT + kT), 0)
    }

    function MM(TT, kT, cT, lT, MT) {
      const KT = TT.getContext("2d");
      if (!KT) return null;
      const OT = kT.fontFamily,
        yT = kT.fontWeight;
      return TT.width = cT, TT.height = lT, KT.fillStyle = kT.color, KT.textAlign = "center", KT.textBaseline = "middle", KT.font = `${yT} ${MT}px ${OT}`, KT
    }
    const KM = (0, lT.memo)((function(TT) {
      let {
        show: kT
      } = TT;
      const cT = (0, lT.useRef)(null),
        MT = (0, lT.useRef)(null),
        KT = (0, lT.useRef)(null),
        OT = (0, vT.m)();
      return (0, lT.useEffect)((() => OT.whenShown((() => {
        let TT = 0,
          kT = 0,
          cT = performance.now(),
          lT = 0;
        const OT = (0, vl.s)((() => {
          var OT, yT, fT;
          TT++, kT++;
          const xT = performance.now();
          if (xT - cT < 1e3) return;
          const IT = Math.round(TT / (xT - cT) * 1e3);
          if (MT.current = IT, null === (OT = KT.current) || void 0 === OT || OT.call(KT, IT), TT = 0, cT = xT, IT >= 55) return void(lT = 0);
          if (lT += 1, lT < 15) return;
          const AT = null !== (yT = FT.e.getItem("decreaseLoadDistPromptDeniedCount")) && void 0 !== yT ? yT : 0,
            [jT, vT] = aT.b.get("minChunkAddDist");
          if (function(TT, kT) {
              const cT = CT.gameBridge.lookup("fD", null);
              return null !== cT && (cT.horizontal > TT || cT.vertical > kT)
            }(jT, vT) && (null !== (fT = FT.e.getItem("lastDecreaseLoadDistPromptTime")) && void 0 !== fT ? fT : 0) + 432e5 < Date.now() && AT < 3) {
            FT.e.setItem("lastDecreaseLoadDistPromptTime", Date.now());
            il.NotificationProvider.showPromptPopup({
              title: "Lag (low FPS) caused by high chunk load distance. Decrease it?",
              confirmText: "general:yes",
              cancelText: "general:no",
              unlockPointerKey: "chunkLoadDistanceLagPopup"
            }).getResult().then((TT => {
              "notificationTornDown" !== TT && (TT ? (CT.gameBridge.send("setChunkAddDistance", {
                horizontal: jT,
                vertical: vT
              }), FT.e.setItem("chunkHorizAddDist", jT), FT.e.setItem("chunkVertAddDist", vT), DT.k.nt("updatedChunkLoadDist"), FT.e.setItem("decreaseLoadDistPromptDeniedCount", 0)) : FT.e.setItem("decreaseLoadDistPromptDeniedCount", AT + 1))
            }))
          }
        }));
        let yT = performance.now();
        kT = 0;
        let fT = null,
          xT = !document.hidden;

        function IT() {
          const TT = performance.now() - yT,
            cT = 1e3 * kT / TT;
          xT && (null === fT && (fT = cT), ql.e.setFps(cT, fT)), kT = 0, yT = performance.now()
        }
        let AT = setInterval(IT, sl.b);

        function jT() {
          const TT = xT;
          xT = !document.hidden, !TT && xT && (kT = 0, yT = performance.now(), clearInterval(AT), AT = setInterval(IT, sl.b))
        }
        return document.addEventListener("visibilitychange", jT), () => {
          OT(), document.removeEventListener("visibilitychange", jT), clearInterval(AT)
        }
      }))), [OT]), TM((() => {
        var TT;
        if (!kT || KT.current) return;
        const lT = cT.current,
          OT = window.getComputedStyle(lT.parentElement),
          yT = null !== (TT = window.devicePixelRatio) && void 0 !== TT ? TT : 1,
          fT = parseFloat(OT.fontSize) * yT,
          xT = Math.round(3 * fT),
          IT = Math.round(fT),
          AT = MM(lT, OT, xT, IT, fT);
        if (!AT) return;
        const CT = TT => {
          AT.clearRect(0, 0, lT.width, lT.height), AT.fillText(TT.toString(), lT.width / 2, lT.height / 2)
        };
        KT.current = CT, null !== MT.current && CT(MT.current)
      }), [kT]), (0, xT.jsxs)("div", {
        className: "FpsWrapperDiv",
        style: {
          display: kT ? "flex" : "none"
        },
        children: [(0, xT.jsx)("div", {
          className: "FpsLabel",
          children: "FPS"
        }), (0, xT.jsx)("canvas", {
          className: "FpsCanvas",
          ref: cT,
          width: 48,
          height: 16
        })]
      })
    }));

    function OM(TT) {
      return Math.sign(TT) * Math.round(100 * Math.abs(TT))
    }

    function yM(TT) {
      let {
        getCoordinates: kT,
        showChunkCoords: cT,
        columns: MT
      } = TT;
      const KT = (0, lT.useRef)(null);
      return TM((() => {
        var TT;
        const lT = KT.current,
          OT = window.getComputedStyle(lT.parentElement),
          yT = null !== (TT = window.devicePixelRatio) && void 0 !== TT ? TT : 1,
          fT = parseFloat(OT.fontSize) * yT,
          xT = Math.round(fT * lM(MT)),
          IT = Math.round(fT),
          AT = MM(lT, OT, xT, IT, fT);
        if (!AT) return;
        let jT = !0,
          vT = 0,
          tT = 0,
          hT = 0,
          NT = 0,
          QT = 0,
          ST = 0;
        const DT = () => {
          jT = !0
        };
        document.fonts.load(AT.font).then(DT, DT);
        const aT = () => {
          MM(lT, OT, xT, IT, fT), DT()
        };
        lT.addEventListener("contextrestored", aT);
        const FT = (0, vl.A)((() => {
          var TT, KT, OT, yT, xT, IT;
          const [DT, aT, FT] = kT(), rT = OM(DT), PT = OM(aT), wT = OM(FT);
          let mT = null;
          if (cT) {
            const TT = CT.gameBridge.lookup("localPos", null);
            mT = (0, Tk.nb)(TT[0], TT[1], TT[2])
          }
          const bT = null !== (TT = null === (KT = mT) || void 0 === KT ? void 0 : KT[0]) && void 0 !== TT ? TT : 0,
            zT = null !== (OT = null === (yT = mT) || void 0 === yT ? void 0 : yT[1]) && void 0 !== OT ? OT : 0,
            JT = null !== (xT = null === (IT = mT) || void 0 === IT ? void 0 : IT[2]) && void 0 !== xT ? xT : 0;
          if (!jT && rT === vT && PT === tT && wT === hT && bT === NT && zT === QT && JT === ST) return;
          jT = !1, vT = rT, tT = PT, hT = wT, NT = bT, QT = zT, ST = JT;
          const oT = [(rT / 100).toFixed(2), (PT / 100).toFixed(2), (wT / 100).toFixed(2)];
          mT && oT.unshift(`${bT} ${zT} ${JT}`), AT.clearRect(0, 0, lT.width, lT.height);
          const HT = lT.height / 2;
          let eT = 0;
          for (let kT = 0; kT < oT.length; kT++) {
            const TT = fT * MT[kT];
            AT.fillText(oT[kT], eT + TT / 2, HT, TT), eT += TT
          }
        }));
        return () => {
          FT(), lT.removeEventListener("contextrestored", aT)
        }
      }), [kT, cT, MT]), (0, xT.jsx)("div", {
        className: "CoordinateUI",
        children: (0, xT.jsx)("canvas", {
          ref: KT,
          className: "CoordinateCanvas",
          width: 16 * lM(MT),
          height: 16
        })
      })
    }
    const fM = (0, lT.memo)((function() {
        const TT = (0, lT.useCallback)((() => {
          const TT = CT.gameBridge.lookup("localPos", null);
          return [TT[0], TT[1], TT[2]]
        }), []);
        return (0, xT.jsx)(yM, {
          getCoordinates: TT,
          showChunkCoords: !1,
          columns: kM
        })
      })),
      xM = (0, lT.memo)((function() {
        const TT = (0, lT.useCallback)((() => {
          const TT = CT.gameBridge.lookup("localPos", null),
            kT = pl.f.vv;
          let cT = TT[0] % kT,
            lT = TT[1] % kT,
            MT = TT[2] % kT;
          return cT < 0 && (cT += kT), lT < 0 && (lT += kT), MT < 0 && (MT += kT), [cT, lT, MT]
        }), []);
        return (0, xT.jsx)(yM, {
          getCoordinates: TT,
          showChunkCoords: !0,
          columns: cM
        })
      }));
    var IM = cT(2094),
      AM = cT(1348),
      CM = cT(1018),
      jM = cT(1226),
      vM = cT(118),
      tM = cT(36573),
      hM = cT(1474),
      NM = cT(3081);
    const QM = (0, lT.memo)((function() {
      const TT = (0, ST.f)("maxAuraLevel");
      return 0 === TT ? null : (0, xT.jsx)(SM, {
        maxLevel: TT
      })
    }));

    function SM(TT) {
      let {
        maxLevel: kT
      } = TT;
      const cT = (0, ST.f)("auraPerLevel"),
        [MT, KT] = (0, lT.useState)((() => {
          var TT;
          return null !== (TT = CT.gameBridge.latest("aura")) && void 0 !== TT ? TT : void 0
        })),
        [OT, yT] = (0, lT.useState)((() => DT(MT))),
        [fT, IT] = (0, lT.useReducer)((TT => TT + 1), 0),
        AT = (0, lT.useRef)(null),
        jT = (0, lT.useRef)([]),
        vT = (0, lT.useRef)({
          width: 0,
          level: 0
        }),
        tT = (0, lT.useRef)(null),
        hT = (0, lT.useRef)(null);

      function QT() {
        if (null !== tT.current) return;
        if (0 === jT.current.length) return;
        const {
          width: TT,
          level: kT
        } = jT.current.shift();
        let cT;
        if (kT !== vT.current.level && kT > vT.current.level !== TT > vT.current.width) {
          const lT = kT > vT.current.level;
          cT = lT ? TT : 100 - TT, AT.current.style.transition = "none", AT.current.style.width = lT ? "0%" : "100%", AT.current.offsetWidth
        } else cT = Math.abs(TT - vT.current.width);
        const lT = 100 * cT / 20;
        AT.current.style.transition = `width ${lT}ms linear`, yT(TT), vT.current = {
          width: TT,
          level: kT
        }, jT.current.length > 0 && (tT.current = setTimeout((() => {
          tT.current = null, QT()
        }), lT))
      }

      function DT(TT) {
        return Math.floor(TT / cT) === kT ? 100 : TT % cT / cT * 100
      }
      return (0, lT.useEffect)((() => () => {
        clearTimeout(tT.current), clearTimeout(hT.current), tT.current = null, hT.current = null
      }), []), (0, rT.b)("aura", (TT => {
        if (hT.current && clearTimeout(hT.current), null === TT) return clearTimeout(tT.current), hT.current = null, tT.current = null, jT.current = [], vT.current = {
          width: 0,
          level: 0
        }, KT(void 0), void yT(0);
        hT.current = setTimeout((() => {
          const kT = Math.floor(MT / cT),
            lT = Math.floor(TT / cT),
            OT = DT(TT);
          TT > MT && tM.d.play("exp_collect", .1).rate(1.6 + .5 * Math.random()), lT > kT ? (lT % 5 === 0 && tM.d.play("exp_levelup", .45).rate(.95 + .1 * Math.random()), IT(), jT.current.push({
            width: 100,
            level: kT
          })) : lT < kT && jT.current.push({
            width: 0,
            level: kT
          }), TT === MT && lT === kT || jT.current.push({
            width: OT,
            level: lT
          }), KT(TT), QT()
        }), 50)
      })), (0, NT.g)(), (0, xT.jsxs)("div", {
        className: "AuraBarWrapper",
        children: [(0, xT.jsxs)("div", {
          className: "AuraBarLabel SmallTextBold",
          children: [(0, xT.jsx)(hM.b, {
            showSignal: fT,
            particleElement: (0, xT.jsx)("img", {
              src: (0, NM.f)("glint"),
              alt: ""
            })
          }), (0, xT.jsx)("img", {
            className: "AuraBarLabelImage",
            src: (0, NM.f)("glint"),
            alt: "aura"
          }), (0, xT.jsx)("div", {
            className: "AuraBarLabelText",
            children: Math.floor((null !== MT && void 0 !== MT ? MT : 0) / cT)
          })]
        }), (0, xT.jsx)("div", {
          className: "AuraBar",
          children: (0, xT.jsx)("div", {
            ref: AT,
            className: "AuraBarBackground",
            style: {
              width: `${OT}%`
            }
          })
        })]
      })
    }
    var DM = cT(2576);

    function aM(TT) {
      TT.timed && (TT.endedAnimation = TT.timed.animation, TT.timed = null)
    }
    const FM = (0, lT.memo)((function() {
      const TT = (0, lT.useRef)(null),
        kT = (0, lT.useRef)(null),
        cT = (0, lT.useRef)({
          timed: null,
          endedAnimation: null
        });
      return (0, yT.g)("middleScreenBarInitiate", (TT => {
        var lT;
        let {
          duration: MT,
          HT: KT,
          horizBarRemOffset: OT
        } = TT;
        const yT = cT.current;
        aM(yT);
        const fT = kT.current;
        if (!(MT >= 0) || !fT) return;
        null === (lT = yT.endedAnimation) || void 0 === lT || lT.cancel(), yT.endedAnimation = null;
        const xT = fT.animate([{
          transform: "scaleX(0)"
        }, {
          transform: "scaleX(1)"
        }], {
          duration: MT,
          fill: "forwards"
        });
        yT.timed = {
          HT: KT,
          horizBarRemOffset: OT,
          animation: xT
        }
      })), (0, yT.g)("middleScreenBarRemove", (() => {
        aM(cT.current)
      })), (0, lT.useEffect)((() => {
        const lT = cT.current;
        let MT = Number.NaN,
          KT = Number.NaN,
          OT = Number.NaN;
        return (0, vl.o)((() => {
          var cT, yT, fT, xT;
          const IT = TT.current,
            AT = kT.current;
          if (!IT || !AT) return;
          null !== (cT = lT.timed) && void 0 !== cT && cT.HT && "finished" === lT.timed.animation.playState && aM(lT), null === (yT = lT.endedAnimation) || void 0 === yT || yT.cancel(), lT.endedAnimation = null;
          let jT = lT.timed ? 1 : 0;
          if (!lT.timed) {
            const TT = CT.gameBridge.lookup("momentumFrac", null);
            jT = TT > 0 ? 1 : 0, TT !== OT && (OT = TT, AT.style.transform = `scaleX(${TT})`)
          }
          const vT = null !== (fT = null === (xT = lT.timed) || void 0 === xT ? void 0 : xT.horizBarRemOffset) && void 0 !== fT ? fT : 0;
          vT === MT && jT === KT || (MT = vT, KT = jT, IT.style.transform = `translateX(calc(-50% + ${vT}rem)) scaleX(${jT})`)
        }))
      }), []), (0, xT.jsx)("div", {
        className: "MiddleScreenBar",
        ref: TT,
        children: (0, xT.jsx)("div", {
          className: "MiddleScreenBarFill",
          ref: kT
        })
      })
    }));
    var rM = cT(4663),
      PM = cT(2753);

    function wM() {
      const {
        t: TT
      } = (0, JT.B)(), kT = (0, yT.i)("serverUpdating", null), cT = (0, PM.b)(250, null !== kT);
      return null === kT || cT - kT > 3e4 ? null : (0, xT.jsxs)("div", {
        className: "UpdateCountdownBanner",
        children: [(0, xT.jsx)("div", {
          className: "UpdateCountdownBannerTitle",
          children: TT("updateWaiting:updatingIn", {
            countdown: (0, rM.l)(kT - cT)
          })
        }), (0, xT.jsx)("div", {
          children: TT("updateWaiting:bringYouBack")
        })]
      })
    }
    var mM = cT(36754),
      bM = cT(2009);
    const zM = [{
        translationKey: "general:interact"
      }],
      JM = (0, lT.memo)((function() {
        const TT = (0, ST.f)("crosshairText"),
          {
            interactPrompt: kT,
            blockText: cT,
            neededTool: MT
          } = (0, rT.h)("crosshairTarget"),
          {
            isTouchScreen: KT
          } = (0, PT.n)(["isTouchScreen"]),
          OT = (0, mT.s)(),
          IT = (0, zT.d)("alt-fire");
        (0, lT.useEffect)((() => {
          CT.gameBridge.send("setCrosshairInteractPrompt", !KT || OT ? "key" : "touch")
        }), [KT, OT]);
        const [AT, jT] = (0, lT.useReducer)((TT => TT + 1), 0);
        (0, yT.g)("customBindingsChanged", jT);
        var vT;
        if (null !== kT && (OT && null !== IT || !KT && null !== (0, bM.u)("alt-fire"))) return (0, xT.jsxs)("div", {
          className: "CrosshairText SmallTextBold InteractPrompt",
          children: [(0, xT.jsx)(wT.b, {
            noaAction: "alt-fire"
          }), (0, xT.jsx)(fT.b, {
            text: null !== (vT = kT.label) && void 0 !== vT ? vT : zM
          })]
        });
        let tT = null;
        return null !== cT ? tT = cT : null !== TT && "" !== TT ? tT = TT : null !== MT && (tT = [{
          icon: MT,
          style: {
            opacity: .8
          }
        }, {
          str: " needed",
          style: {
            opacity: .8
          }
        }]), tT ? (0, xT.jsx)("div", {
          className: "CrosshairText SmallTextBold",
          children: (0, xT.jsx)(fT.b, {
            text: tT
          })
        }) : null
      }));
    var oM = cT(2582);
    const HM = (0, lT.memo)((function() {
      var TT;
      const {
        interactPrompt: kT
      } = (0, rT.h)("crosshairTarget"), {
        openInGameMenuName: cT,
        openEverythingMenuName: lT
      } = (0, PT.n)(["openInGameMenuName", "openEverythingMenuName"]), MT = (0, yT.i)("aimingOverlay", "none"), KT = (0, WT.m)(), OT = (0, oM.e)();
      return null === kT || null !== cT || null !== lT || "sniper" === MT || KT || OT ? null : (0, xT.jsx)(eM, {
        label: null !== (TT = kT.label) && void 0 !== TT ? TT : zM
      })
    }));

    function eM(TT) {
      let {
        label: kT
      } = TT;
      const cT = zk(iT.e.Interact, !1);
      return (0, lT.useEffect)((() => (DT.k.nt(tk.m), () => {
        DT.k.nt(tk.m)
      })), []), (0, xT.jsx)("div", {
        ref: cT,
        className: "TouchInteractHit",
        children: (0, xT.jsxs)("div", {
          className: "TouchInteractKey",
          children: [(0, xT.jsx)("span", {
            className: "TouchInteractIcon",
            children: (0, xT.jsx)(ZT.e, {
              name: "hand-back-point-up"
            })
          }), (0, xT.jsx)(fT.b, {
            text: kT
          })]
        })
      })
    }
    var GM = cT(4730),
      VM = cT(4798);
    const EM = (0, lT.forwardRef)((function(TT, kT) {
        let {
          text: cT,
          className: lT,
          children: MT
        } = TT;
        return cT.hasText ? (0, xT.jsx)("div", {
          ref: kT,
          className: KT()("HudTextPanel", lT, {
            NoBackground: !cT.showBackground
          }),
          children: null !== MT && void 0 !== MT ? MT : (0, xT.jsx)(fT.b, {
            text: cT.content
          })
        }) : null
      })),
      ZM = (0, lT.memo)((function() {
        const TT = (0, ST.g)("middleTextTop"),
          [kT, cT] = (0, lT.useState)(null),
          MT = (0, rl.m)(kT);
        return TT.hasText ? (0, xT.jsx)("div", {
          className: KT()("MiddleTextTopContainer", {
            MiddleTextTopBelow: MT
          }),
          children: (0, xT.jsx)(EM, {
            ref: cT,
            className: "MiddleTextTop",
            text: TT
          })
        }) : null
      })),
      uM = (0, lT.memo)((function() {
        const TT = (0, ST.b)();
        return (0, xT.jsx)(xT.Fragment, {
          children: TT.map(((TT, kT) => (0, xT.jsx)(EM, {
            className: "HeaderChip",
            text: TT
          }, kT)))
        })
      }));
    var XM = cT(3589),
      dM = cT(4580);
    const LM = (0, lT.memo)((function() {
      const {
        t: TT
      } = (0, JT.B)(), [kT, cT] = (0, lT.useState)(!1), MT = (0, lT.useRef)(!1), KT = function(TT) {
        let {
          gameNameWithVariation: kT,
          lobbyName: cT
        } = TT;
        if ((0, CM.j)(kT)) return RM;
        if ((0, jM.D)(cT)) return gM;
        return null
      }((0, rT.h)("connectedGame"));
      if (!KT || kT) return null;
      const OT = dM.e[KT.target];
      return (0, xT.jsx)(ET.c, {
        tooltipInner: (0, xT.jsx)("div", {
          children: TT(OT.reportButtonTooltip)
        }),
        children: (0, xT.jsx)("div", {
          children: (0, xT.jsx)(bc.N, {
            onClick: () => {
              MT.current || (MT.current = !0, (0, dM.g)(KT.reportPolicyIds, OT).then((TT => {
                null !== TT && void 0 !== TT && TT.selectedPolicyId && (CT.gameBridge.send("reportLobbyOrGame", {
                  target: KT.target,
                  dO: TT.selectedPolicyId,
                  details: TT.LO
                }), cT(!0))
              })).finally((() => {
                MT.current = !1
              })))
            }
          })
        })
      })
    }));
    const RM = {
        target: "customGame",
        reportPolicyIds: XM.c
      },
      gM = {
        target: "lobby",
        reportPolicyIds: XM.g
      };
    var UM = cT(8818),
      YM = cT(36767),
      BM = cT(36769),
      WM = cT(36772),
      nM = cT(36781),
      pM = cT(36807);

    function iM(TT) {
      return TT instanceof Error && qM.has(TT.message) ? TT.message : void 0
    }
    const qM = new Set([pM.d.saveBusy.text, pM.d.saveClosed.text, pM.d.cropBusy.text]);
    let sM = !1;
    async function TK(TT, kT) {
      var cT, lT;
      const {
        files: MT
      } = kT, KT = MT.replayKey();
      if (null === KT) return "none";
      if (sM) throw new Error(pM.d.saveBusy.text);
      const OT = null !== (cT = null === (lT = MT.saveRefusal) || void 0 === lT ? void 0 : lT.call(MT)) && void 0 !== cT ? cT : null;
      if (null !== OT) throw new Error(OT);
      sM = !0;
      try {
        return await async function(TT, kT, cT) {
          const {
            files: lT
          } = kT, MT = () => lT.replayKey() === cT, KT = (TT, kT) => {
            MT() && lT.markSaved(TT, kT)
          };
          let OT = null;
          if (kT.pickerSupported()) {
            try {
              if (OT = await kT.chooseFile(TT ? null : lT.fileHandle()), null === OT) return "KT"
            } catch (fT) {
              kT.onFallback(fT)
            }
            if (!MT()) throw new Error(pM.d.saveClosed.text)
          }
          const yT = await lT.encode();
          if (null === yT) {
            if (null !== OT) throw new Error(pM.d.saveClosed.text);
            return "none"
          }
          if (null !== OT) try {
            return await kT.write(OT, yT), KT(OT), "written"
          } catch (fT) {
            kT.onFallback(fT)
          }
          return KT(null, kT.download(yT)), "downloaded"
        }(TT, kT, KT)
      } finally {
        sM = !1
      }
    }
    var kK = cT(4528),
      cK = cT(94);
    const lK = [1, 2, 4, 8, 16, 32, 64];

    function MK(TT, kT) {
      return Math.max(0, Math.min(TT, kT))
    }

    function KK(TT, kT, cT) {
      return cT <= kT ? 0 : (TT - kT) / (cT - kT) * 100
    }

    function OK(TT, kT, cT) {
      const lT = cT - kT;
      return Math.round(kT + TT / 100 * lT)
    }

    function yK(TT, kT) {
      const cT = Math.floor(TT / kT / 60),
        lT = Math.floor(TT / kT % 60),
        MT = TT % kT;
      return `${cT.toString().padStart(2,"0")}:${lT.toString().padStart(2,"0")}:${MT.toString().padStart(2,"0")}`
    }

    function fK(TT) {
      return Number.isInteger(TT) || lK.includes(TT) ? `${Math.round(TT)}\xd7` : `${TT.toFixed(1)}\xd7`
    }

    function xK(TT, kT) {
      const cT = lK.indexOf(TT);
      if (-1 !== cT) return "in" === kT ? lK[Math.min(cT + 1, lK.length - 1)] : lK[Math.max(cT - 1, 0)];
      if ("in" === kT) {
        for (const kT of lK)
          if (kT >= TT) return kT;
        return TT
      }
      for (let lT = lK.length - 1; lT >= 0; lT--)
        if (lK[lT] <= TT) return lK[lT];
      return lK[0]
    }

    function IK(TT, kT) {
      const cT = kT.getBoundingClientRect();
      if (cT.width <= 0) return 0;
      const lT = (TT - cT.left) / cT.width * 100;
      return Math.max(0, Math.min(100, lT))
    }

    function AK(TT, kT) {
      return kT <= 0 ? 0 : TT / kT * 100
    }

    function CK(TT, kT, cT) {
      const lT = [];
      let MT = Math.ceil(TT / cT) * cT;
      for (; MT <= kT;) lT.push(MT), MT += cT;
      return lT
    }
    var jK = cT(36812);
    const vK = [{
        label: "Linear",
        easing: jK.l
      }, {
        label: "Ease",
        easing: [.25, .1, .25, 1]
      }, {
        label: "Ease In",
        easing: jK.g
      }, {
        label: "Ease Out",
        easing: jK.i
      }, {
        label: "Ease In Out",
        easing: jK.d
      }],
      tK = 200,
      hK = 150;

    function NK(TT) {
      const kT = TT => Number(TT.toFixed(3)).toString();
      return `cubic-bezier(${kT(TT[0])}, ${kT(TT[1])}, ${kT(TT[2])}, ${kT(TT[3])})`
    }

    function QK(TT, kT) {
      return {
        cx: 25 + TT * hK,
        cy: 25 + (1 - kT) * hK
      }
    }

    function SK(TT, kT, cT) {
      const lT = TT - cT.left,
        MT = kT - cT.top;
      return {
        x: Zc.d.clamp((lT - 25) / hK, 0, 1),
        y: Zc.d.clamp(1 - (MT - 25) / hK, -1, 2)
      }
    }

    function DK(TT, kT, cT, lT, MT) {
      return {
        x: (0, jK.s)(TT, cT, MT),
        y: (0, jK.s)(kT, lT, MT)
      }
    }
    const aK = (0, lT.memo)((function(TT) {
      let {
        value: kT,
        onChange: cT
      } = TT;
      const MT = (0, lT.useRef)(null),
        KT = (0, lT.useRef)(null),
        [OT, yT] = (0, lT.useState)(null),
        fT = (0, lT.useCallback)((() => {
          const TT = MT.current;
          if (!TT) return;
          const cT = TT.getContext("2d");
          if (!cT) return;
          const lT = window.devicePixelRatio || 1;
          TT.width = tK * lT, TT.height = tK * lT, cT.setTransform(lT, 0, 0, lT, 0, 0), cT.clearRect(0, 0, tK, tK), cT.fillStyle = "rgba(38, 52, 93, 0.85)", cT.fillRect(0, 0, tK, tK), cT.beginPath();
          const KT = QK(0, 0),
            yT = QK(1, 1);
          cT.moveTo(KT.cx, KT.cy), cT.lineTo(yT.cx, yT.cy), cT.strokeStyle = "rgba(164, 164, 164, 0.35)", cT.setLineDash([3, 3]), cT.stroke(), cT.setLineDash([]);
          const [fT, xT, IT, AT] = kT, CT = QK(fT, xT), jT = QK(IT, AT);
          cT.strokeStyle = "rgba(252, 211, 115, 0.55)", cT.lineWidth = 1.5, cT.beginPath(), cT.moveTo(KT.cx, KT.cy), cT.lineTo(CT.cx, CT.cy), cT.moveTo(yT.cx, yT.cy), cT.lineTo(jT.cx, jT.cy), cT.stroke(), cT.strokeStyle = "#fcd373", cT.lineWidth = 2, cT.beginPath();
          for (let kT = 0; kT <= 50; kT++) {
            const TT = DK(fT, xT, IT, AT, kT / 50),
              lT = QK(TT.x, TT.y);
            0 === kT ? cT.moveTo(lT.cx, lT.cy) : cT.lineTo(lT.cx, lT.cy)
          }
          cT.stroke();
          const vT = (TT, kT, lT) => {
            cT.beginPath(), cT.arc(TT, kT, lT ? 6 : 5, 0, 2 * Math.PI), cT.fillStyle = lT ? "#ffb914" : "#fcd373", cT.fill(), cT.strokeStyle = "#1a1f2e", cT.lineWidth = 1.5, cT.stroke()
          };
          vT(CT.cx, CT.cy, "p1" === OT), vT(jT.cx, jT.cy, "p2" === OT)
        }), [OT, kT]);
      (0, lT.useEffect)((() => {
        fT()
      }), [fT]);
      const IT = (0, lT.useCallback)(((TT, lT) => {
          const OT = MT.current,
            yT = KT.current;
          if (!OT || !yT) return;
          const fT = OT.getBoundingClientRect(),
            {
              x: xT,
              y: IT
            } = SK(TT, lT, fT);
          cT("p1" === yT ? [xT, IT, kT[2], kT[3]] : [kT[0], kT[1], xT, IT])
        }), [cT, kT]),
        AT = (0, lT.useCallback)((TT => {
          const cT = MT.current;
          if (!cT) return;
          const lT = cT.getBoundingClientRect();
          let {
            x: OT,
            y: fT
          } = SK(TT.clientX, TT.clientY, lT);
          OT = Zc.d.clamp(OT, 0, 1), fT = Zc.d.clamp(fT, 0, 1);
          const [xT, AT, CT, jT] = kT.map((TT => Zc.d.clamp(TT, 0, 1))), vT = Math.hypot(OT - xT, fT - AT), tT = Math.hypot(OT - CT, fT - jT), hT = vT <= tT ? "p1" : "p2";
          ("p1" === hT ? vT : tT) > .12 || (KT.current = hT, yT(hT), cT.setPointerCapture(TT.pointerId), IT(TT.clientX, TT.clientY))
        }), [IT, kT]),
        CT = (0, lT.useCallback)((TT => {
          KT.current && IT(TT.clientX, TT.clientY)
        }), [IT]),
        jT = (0, lT.useCallback)((TT => {
          KT.current = null, yT(null), TT.currentTarget.hasPointerCapture(TT.pointerId) && TT.currentTarget.releasePointerCapture(TT.pointerId)
        }), []);
      return (0, xT.jsxs)("div", {
        className: "CubicBezierEasingEditor",
        children: [(0, xT.jsx)("canvas", {
          ref: MT,
          className: "CubicBezierEasingEditorCanvas",
          style: {
            width: tK,
            height: tK
          },
          onPointerDown: AT,
          onPointerMove: CT,
          onPointerUp: jT,
          onPointerCancel: jT
        }), (0, xT.jsx)("span", {
          className: "CubicBezierEasingEditorReadout",
          children: NK(kT)
        })]
      })
    }));
    var FK = cT(1701),
      rK = cT(1685);
    const PK = 12;

    function wK(TT) {
      return {
        left: TT.left + TT.width / 2,
        top: TT.top - 8
      }
    }

    function mK(TT, kT) {
      const [cT, MT] = (0, lT.useState)(null);
      return (0, lT.useLayoutEffect)((() => {
        const cT = TT.current;
        if (!cT) return;
        const {
          width: lT,
          height: KT
        } = cT.getBoundingClientRect();
        MT(function(TT, kT, cT) {
          const lT = window.innerWidth,
            MT = window.innerHeight,
            KT = kT / 2;
          let OT = TT.left + TT.width / 2;
          OT = Math.max(PK + KT, Math.min(OT, lT - PK - KT));
          const yT = TT.top - 8 - PK,
            fT = MT - TT.bottom - 8 - PK,
            xT = yT < cT && fT >= yT;
          let IT;
          xT ? (IT = TT.bottom + 8, IT + cT > MT - PK && (IT = MT - PK - cT), IT = Math.max(PK, IT)) : (IT = TT.top - 8, IT - cT < PK && (IT = PK + cT));
          return {
            left: OT,
            top: IT,
            placeBelow: xT
          }
        }(kT, lT, KT))
      }), [kT, TT]), cT
    }

    function bK(TT, kT, cT) {
      (0, lT.useEffect)((() => (0, rK.e)("pointerdown", (lT => {
        var MT, KT;
        const OT = lT.target;
        OT instanceof Node && (null !== (MT = TT.current) && void 0 !== MT && MT.contains(OT) || null !== cT && void 0 !== cT && null !== (KT = cT.current) && void 0 !== KT && KT.contains(OT) || (0, FK.f)(OT) || kT())
      }))), [cT, kT, TT])
    }

    function zK(TT) {
      let {
        label: kT,
        value: cT,
        onChange: lT
      } = TT;
      return (0, xT.jsxs)("div", {
        className: "ReplayKeyframePopoverVec3",
        children: [(0, xT.jsx)("span", {
          className: "ReplayKeyframePopoverVec3Label",
          children: kT
        }), (0, xT.jsx)("div", {
          className: "ReplayKeyframePopoverVec3Inputs",
          children: ["X", "Y", "Z"].map(((TT, kT) => (0, xT.jsxs)("label", {
            className: "ReplayKeyframePopoverAxis",
            children: [(0, xT.jsx)("span", {
              children: TT
            }), (0, xT.jsx)("input", {
              type: "number",
              step: "any",
              value: cT[kT],
              onChange: TT => {
                const MT = Number.parseFloat(TT.target.value);
                if (Number.isNaN(MT)) return;
                const KT = [cT[0], cT[1], cT[2]];
                KT[kT] = MT, lT(KT)
              }
            })]
          }, TT)))
        })]
      })
    }
    const JK = (0, lT.memo)((function(TT) {
        var kT, cT, MT;
        let {
          keyframe: OT,
          anchor: yT,
          hasOutgoingSegment: fT,
          onClose: IT,
          onApply: AT,
          onDelete: CT,
          onUseCurrentCamera: jT
        } = TT;
        const vT = (0, lT.useRef)(null),
          tT = mK(vT, yT.rect),
          [hT, NT] = (0, lT.useState)((() => [OT.position[0], OT.position[1], OT.position[2]])),
          [QT, ST] = (0, lT.useState)((() => [OT.direction[0], OT.direction[1], OT.direction[2]])),
          [DT, aT] = (0, lT.useState)((() => OT.easing));
        (0, lT.useEffect)((() => {
          NT([OT.position[0], OT.position[1], OT.position[2]]), ST([OT.direction[0], OT.direction[1], OT.direction[2]]), aT(OT.easing)
        }), [OT]), bK(vT, IT);
        const FT = (0, lT.useCallback)((() => {
            AT({
              UA: OT.UA,
              position: hT,
              direction: QT,
              easing: DT
            }), IT()
          }), [QT, DT, OT.UA, AT, IT, hT]),
          rT = (0, lT.useCallback)((() => {
            CT(OT.UA), IT()
          }), [OT.UA, CT, IT]),
          PT = (0, lT.useCallback)((() => {
            const TT = jT();
            TT && (NT([TT.position[0], TT.position[1], TT.position[2]]), ST([TT.direction[0], TT.direction[1], TT.direction[2]]))
          }), [jT]),
          wT = wK(yT.rect);
        return (0, xT.jsxs)("div", {
          ref: vT,
          className: KT()("ReplayViewerPopover ReplayKeyframePopover", {
            Below: null !== (kT = null === tT || void 0 === tT ? void 0 : tT.placeBelow) && void 0 !== kT && kT,
            Positioned: null !== tT
          }),
          style: {
            left: `${null!==(cT=null===tT||void 0===tT?void 0:tT.left)&&void 0!==cT?cT:wT.left}px`,
            top: `${null!==(MT=null===tT||void 0===tT?void 0:tT.top)&&void 0!==MT?MT:wT.top}px`
          },
          onPointerDown: TT => {
            TT.stopPropagation()
          },
          children: [(0, xT.jsxs)("div", {
            className: "ReplayKeyframePopoverHeader",
            children: [(0, xT.jsx)("span", {
              className: "ReplayKeyframePopoverTitle",
              children: "Camera keyframe"
            }), (0, xT.jsxs)("span", {
              className: "ReplayKeyframePopoverTick",
              children: ["Tick ", yT.UA]
            })]
          }), (0, xT.jsx)(zK, {
            label: "Position",
            value: hT,
            onChange: NT
          }), (0, xT.jsx)(zK, {
            label: "Direction",
            value: QT,
            onChange: ST
          }), fT && (0, xT.jsxs)("div", {
            className: "ReplayKeyframePopoverEasing",
            children: [(0, xT.jsx)("span", {
              className: "ReplayKeyframePopoverEasingLabel",
              children: "Easing to next"
            }), (0, xT.jsx)("div", {
              className: "ReplayKeyframePopoverEasingPresets",
              children: vK.map((TT => {
                const kT = (cT = DT, lT = TT.easing, cT[0] === lT[0] && cT[1] === lT[1] && cT[2] === lT[2] && cT[3] === lT[3]);
                var cT, lT;
                return (0, xT.jsx)(bc.P, {
                  className: KT()("ReplayKeyframePopoverPreset", {
                    Active: kT
                  }),
                  onClick: () => {
                    aT(TT.easing)
                  },
                  children: TT.label
                }, TT.label)
              }))
            }), (0, xT.jsx)(aK, {
              value: DT,
              onChange: aT
            })]
          }), (0, xT.jsxs)("div", {
            className: "ReplayKeyframePopoverActions",
            children: [(0, xT.jsx)(bc.e, {
              className: "ReplayViewerCompactButton",
              onClick: PT,
              children: "Use current view"
            }), (0, xT.jsx)(bc.m, {
              className: "ReplayViewerCompactButton",
              onClick: FT,
              children: "Apply"
            }), (0, xT.jsx)(bc.I, {
              className: "ReplayViewerCompactButton",
              onClick: rT,
              children: "Delete"
            })]
          })]
        })
      })),
      oK = (0, lT.memo)((function(TT) {
        var kT, cT, MT;
        let {
          anchor: OT,
          hasPlaybackMark: yT,
          onClose: fT,
          onMark: IT,
          onZoom: AT,
          onCrop: CT,
          onDeleteKeyframes: jT,
          onClearMark: vT
        } = TT;
        const tT = (0, lT.useRef)(null),
          hT = mK(tT, OT.rect),
          NT = wK(OT.rect),
          QT = {
            startTick: OT.startTick,
            endTick: OT.endTick
          },
          ST = OT.endTick > OT.startTick;
        return bK(tT, fT), (0, xT.jsx)("div", {
          ref: tT,
          className: KT()("ReplayViewerPopover ReplayTimelineSelectionPopover", {
            Below: null !== (kT = null === hT || void 0 === hT ? void 0 : hT.placeBelow) && void 0 !== kT && kT,
            Positioned: null !== hT
          }),
          style: {
            left: `${null!==(cT=null===hT||void 0===hT?void 0:hT.left)&&void 0!==cT?cT:NT.left}px`,
            top: `${null!==(MT=null===hT||void 0===hT?void 0:hT.top)&&void 0!==MT?MT:NT.top}px`
          },
          onPointerDown: TT => {
            TT.stopPropagation()
          },
          children: (0, xT.jsxs)("div", {
            className: "ReplayTimelineSelectionPopoverActions",
            children: [(0, xT.jsx)(bc.m, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                IT(QT)
              },
              disabled: !ST,
              children: (0, xT.jsx)("span", {
                children: " Play range "
              })
            }), (0, xT.jsx)(bc.e, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                AT(QT)
              },
              children: (0, xT.jsx)("span", {
                children: " Zoom "
              })
            }), (0, xT.jsx)(bc.P, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                CT(QT)
              },
              disabled: !ST,
              children: (0, xT.jsx)("span", {
                children: " Crop "
              })
            }), (0, xT.jsx)(bc.P, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                jT(QT)
              },
              children: (0, xT.jsx)("span", {
                children: " Delete all keyframes "
              })
            }), yT && (0, xT.jsx)(bc.P, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                vT()
              },
              children: (0, xT.jsx)("span", {
                children: " Clear range "
              })
            })]
          })
        })
      })),
      HK = (0, lT.memo)((function(TT) {
        var kT, cT;
        let {
          maxTick: MT,
          displayTick: OT,
          xJ: yT,
          cameraKeyframes: fT,
          playbackMark: IT,
          onSeek: AT,
          onPause: CT,
          onScrubTickChange: jT,
          onMoveCameraKeyframe: vT,
          onUpdateCameraKeyframe: tT,
          onDeleteCameraKeyframe: hT,
          onUseCurrentCamera: NT,
          onMarkRange: QT,
          onCropRange: ST,
          onDeleteKeyframesInRange: DT,
          onClearMark: aT,
          zoomLevel: FT,
          onZoomLevelChange: rT
        } = TT;
        const PT = (0, lT.useRef)(null),
          wT = (0, lT.useRef)(null),
          mT = (0, lT.useRef)(!1),
          bT = (0, lT.useRef)(!1),
          zT = (0, lT.useRef)(FT),
          JT = (0, lT.useRef)(null),
          oT = (0, lT.useRef)(null),
          HT = (0, lT.useRef)(null),
          eT = (0, lT.useRef)(null),
          [GT, VT] = (0, lT.useState)(null),
          [ET, ZT] = (0, lT.useState)(OT),
          [uT, XT] = (0, lT.useState)(null),
          [dT, LT] = (0, lT.useState)(null),
          [RT, gT] = (0, lT.useState)(null),
          [UT, YT] = (0, lT.useState)(null),
          BT = (0, lT.useMemo)((() => fT.map((TT => TT.UA))), [fT]),
          WT = null !== GT && void 0 !== GT ? GT : OT,
          {
            viewStart: nT,
            viewEnd: pT
          } = (0, lT.useMemo)((() => function(TT) {
            const kT = TT.maxTick + 1,
              cT = Math.max(1, Math.ceil(kT / TT.zoomLevel)),
              lT = Math.floor(cT / 2);
            let MT = TT.centerTick - lT;
            return MT = Math.max(0, Math.min(MT, TT.maxTick - cT + 1)), {
              viewStart: MT,
              viewEnd: Math.min(TT.maxTick, MT + cT - 1)
            }
          }({
            maxTick: MT,
            zoomLevel: FT,
            centerTick: ET
          })), [MT, FT, ET]);
        (0, lT.useEffect)((() => {
          if (null !== GT || null !== oT.current || null !== HT.current || null !== eT.current) return;
          if (mT.current) return void(mT.current = !1);
          if (bT.current) return void(bT.current = !1);
          const TT = zT.current !== FT;
          zT.current = FT, TT && ZT(OT)
        }), [FT, OT, GT]);
        const iT = (0, lT.useCallback)((TT => {
            let kT = MK(TT, MT);
            return IT && (kT = Math.max(IT.inTick, Math.min(kT, IT.outTick))), kT
          }), [MT, IT]),
          qT = (0, lT.useCallback)(((TT, kT) => {
            const cT = iT(TT);
            AT(cT), kT && ZT(cT)
          }), [iT, AT]),
          sT = (0, lT.useCallback)(((TT, kT) => {
            const cT = iT(TT);
            VT(cT), jT(cT), qT(cT, kT)
          }), [iT, qT, jT]),
          Tk = (0, lT.useCallback)((() => {
            VT((TT => (null !== TT && ZT(TT), null))), jT(null)
          }), [jT]),
          kk = (0, lT.useCallback)((() => {
            gT(null), YT(null)
          }), []),
          ck = (0, lT.useCallback)((TT => {
            const kT = PT.current;
            if (!kT) return 0;
            return MK(OK(IK(TT, kT), nT, pT), MT)
          }), [MT, pT, nT]),
          lk = (0, lT.useCallback)((TT => {
            const kT = wT.current;
            if (!kT) return 0;
            return MK(OK(IK(TT, kT), 0, MT), MT)
          }), [MT]),
          Mk = (0, lT.useMemo)((() => {
            if (!uT) return [...BT];
            const TT = BT.filter((TT => TT !== uT.fromTick));
            return TT.push(uT.previewTick), TT.sort(((TT, kT) => TT - kT)), TT
          }), [BT, uT]),
          Kk = (0, lT.useMemo)((() => {
            var TT;
            return dT && null !== (TT = fT.find((TT => TT.UA === dT.UA))) && void 0 !== TT ? TT : null
          }), [fT, dT]),
          Ok = (0, lT.useMemo)((() => !!Kk && fT.some((TT => TT.UA > Kk.UA))), [fT, Kk]);
        (0, lT.useEffect)((() => {
          dT && !Kk && LT(null)
        }), [dT, Kk]), (0, lT.useEffect)((() => {
          if (!UT) return () => {};
          const TT = TT => {
            "Escape" === TT.key && kk()
          };
          return window.addEventListener("keydown", TT), () => {
            window.removeEventListener("keydown", TT)
          }
        }), [kk, UT]);
        const yk = (0, lT.useCallback)(((TT, kT) => {
            kk(), CT(), AT(TT, {
              ignorePlaybackMark: !0
            }), LT({
              UA: TT,
              rect: kT.getBoundingClientRect()
            })
          }), [kk, CT, AT]),
          fk = (0, lT.useCallback)(((TT, kT) => cT => {
            0 === cT.button && (cT.stopPropagation(), LT(null), kk(), CT(), JT.current = {
              fromTick: TT,
              startX: cT.clientX,
              startY: cT.clientY,
              didDrag: !1,
              track: kT
            }, XT({
              fromTick: TT,
              previewTick: TT,
              track: kT
            }), cT.currentTarget.setPointerCapture(cT.pointerId))
          }), [kk, CT]),
          xk = (0, lT.useCallback)((TT => {
            if (!uT) return;
            TT.stopPropagation();
            const kT = JT.current;
            if (kT && !kT.didDrag) {
              const cT = TT.clientX - kT.startX,
                lT = TT.clientY - kT.startY;
              Math.hypot(cT, lT) > 5 && (kT.didDrag = !0)
            }
            const cT = "detail" === uT.track ? ck(TT.clientX) : lk(TT.clientX);
            cT !== uT.previewTick && XT({
              ...uT,
              previewTick: cT
            })
          }), [uT, ck, lk]),
          Ik = (0, lT.useCallback)((TT => {
            if (!uT) return;
            TT.stopPropagation();
            const kT = JT.current,
              cT = "detail" === uT.track ? ck(TT.clientX) : lk(TT.clientX);
            kT && !kT.didDrag ? yk(kT.fromTick, TT.currentTarget) : cT !== uT.fromTick && vT(uT.fromTick, cT), XT(null), JT.current = null, TT.currentTarget.releasePointerCapture(TT.pointerId)
          }), [uT, vT, yk, ck, lk]),
          Ak = (0, lT.useCallback)((TT => {
            if (0 !== TT.button) return;
            LT(null), CT();
            const kT = ck(TT.clientX);
            oT.current = {
              pointerId: TT.pointerId,
              startX: TT.clientX,
              startY: TT.clientY,
              startTick: kT,
              currentTick: kT,
              didSelect: !1
            }, gT(null), YT(null), TT.currentTarget.setPointerCapture(TT.pointerId)
          }), [CT, ck]),
          Ck = (0, lT.useCallback)((TT => {
            const kT = oT.current;
            if (!kT || kT.pointerId !== TT.pointerId) return;
            const cT = ck(TT.clientX);
            if (kT.currentTick = cT, !kT.didSelect) {
              const cT = TT.clientX - kT.startX,
                lT = TT.clientY - kT.startY;
              if (Math.hypot(cT, lT) <= 5) return;
              kT.didSelect = !0
            }
            const lT = Math.min(kT.startTick, cT),
              MT = Math.max(kT.startTick, cT);
            gT({
              startTick: lT,
              endTick: MT
            })
          }), [ck]),
          jk = (0, lT.useCallback)((TT => {
            const kT = oT.current;
            if (!kT || kT.pointerId !== TT.pointerId) return;
            if (oT.current = null, TT.currentTarget.releasePointerCapture(TT.pointerId), !kT.didSelect) return kk(), void qT(kT.startTick, !0);
            const cT = ck(TT.clientX),
              lT = Math.min(kT.startTick, cT),
              MT = Math.max(kT.startTick, cT),
              KT = {
                startTick: lT,
                endTick: MT
              };
            gT(KT);
            const OT = PT.current;
            if (!OT) return;
            const yT = OT.getBoundingClientRect(),
              fT = KK(lT, nT, pT) / 100,
              xT = KK(MT, nT, pT) / 100,
              IT = yT.left + fT * yT.width,
              AT = yT.left + xT * yT.width;
            YT({
              ...KT,
              rect: new DOMRect(IT, yT.top, Math.max(AT - IT, 1), yT.height)
            })
          }), [kk, qT, ck, pT, nT]),
          vk = (0, lT.useCallback)((TT => kT => {
            if (0 !== kT.button) return;
            kT.stopPropagation(), LT(null), kk(), CT(), HT.current = {
              pointerId: kT.pointerId,
              track: TT
            }, kT.currentTarget.setPointerCapture(kT.pointerId);
            const cT = "detail" === TT ? ck(kT.clientX) : lk(kT.clientX);
            sT(cT, !1)
          }), [kk, CT, sT, ck, lk]),
          tk = (0, lT.useCallback)((TT => {
            const kT = HT.current;
            if (!kT || kT.pointerId !== TT.pointerId) return;
            TT.stopPropagation();
            const cT = "detail" === kT.track ? ck(TT.clientX) : lk(TT.clientX);
            sT(cT, !1)
          }), [sT, ck, lk]),
          hk = (0, lT.useCallback)((TT => {
            const kT = HT.current;
            kT && kT.pointerId === TT.pointerId && (TT.stopPropagation(), HT.current = null, TT.currentTarget.releasePointerCapture(TT.pointerId), Tk())
          }), [Tk]),
          Nk = (0, lT.useCallback)((TT => {
            0 === TT.button && (kk(), CT(), eT.current = {
              pointerId: TT.pointerId
            }, TT.currentTarget.setPointerCapture(TT.pointerId), sT(lk(TT.clientX), !0))
          }), [kk, CT, sT, lk]),
          Qk = (0, lT.useCallback)((TT => {
            const kT = eT.current;
            kT && kT.pointerId === TT.pointerId && sT(lk(TT.clientX), !0)
          }), [sT, lk]),
          Sk = (0, lT.useCallback)((TT => {
            const kT = eT.current;
            kT && kT.pointerId === TT.pointerId && (eT.current = null, TT.currentTarget.releasePointerCapture(TT.pointerId), Tk())
          }), [Tk]),
          Dk = (0, lT.useCallback)((TT => {
            const kT = Math.max(1, TT.endTick - TT.startTick + 1),
              cT = MT + 1,
              lT = cT / kT,
              KT = Math.max(1, Math.ceil(cT / lT)),
              OT = TT.startTick + Math.floor((KT - 1) / 2);
            bT.current = !0, zT.current = lT, ZT(MK(OT, MT)), rT(lT), kk()
          }), [kk, MT, rT]),
          ak = (0, lT.useCallback)((TT => {
            QT(TT), kk()
          }), [kk, QT]),
          Fk = (0, lT.useCallback)((TT => {
            ST(TT), kk()
          }), [kk, ST]),
          rk = (0, lT.useCallback)((TT => {
            DT(TT), kk()
          }), [kk, DT]),
          Pk = (0, lT.useCallback)((() => {
            aT(), kk()
          }), [kk, aT]);
        (0, lT.useEffect)((() => {
          const TT = PT.current;
          if (!TT) return () => {};
          const kT = kT => {
            kT.preventDefault();
            const cT = MK(OK(IK(kT.clientX, TT), nT, pT), MT),
              lT = kT.deltaY < 0 ? "in" : "out",
              KT = xK(FT, lT);
            KT !== FT && (mT.current = !0, ZT(cT), rT(KT))
          };
          return TT.addEventListener("wheel", kT, {
            passive: !1
          }), () => {
            TT.removeEventListener("wheel", kT)
          }
        }), [MT, rT, pT, nT, FT]);
        const wk = KK(WT, nT, pT),
          mk = AK(WT, MT),
          bk = AK(nT, MT),
          zk = MT > 0 ? AK(pT, MT) : 100,
          Jk = null !== IT,
          Hk = null !== (kT = null === IT || void 0 === IT ? void 0 : IT.inTick) && void 0 !== kT ? kT : 0,
          ek = null !== (cT = null === IT || void 0 === IT ? void 0 : IT.outTick) && void 0 !== cT ? cT : MT,
          Gk = AK(Hk, MT),
          Vk = Math.max(AK(ek, MT) - Gk, 0),
          Ek = KK(Math.max(Hk, nT), nT, pT),
          Zk = KK(Math.min(ek, pT), nT, pT),
          uk = Math.max(Zk - Ek, 0),
          Xk = Jk && ek >= nT && Hk <= pT,
          dk = KK(Hk, nT, pT),
          Lk = KK(ek, nT, pT),
          Rk = Jk && Hk >= nT && Hk <= pT,
          gk = Jk && ek >= nT && ek <= pT,
          Uk = AK(Hk, MT),
          Yk = AK(ek, MT),
          Bk = null !== RT && void 0 !== RT ? RT : UT ? {
            startTick: UT.startTick,
            endTick: UT.endTick
          } : null,
          Wk = Bk ? KK(Math.max(Bk.startTick, nT), nT, pT) : 0,
          nk = Bk ? KK(Math.min(Bk.endTick, pT), nT, pT) : 0,
          pk = Math.max(nk - Wk, 0),
          ik = null !== Bk && Bk.endTick >= nT && Bk.startTick <= pT,
          qk = (0, lT.useMemo)((() => CK(0, MT, yT)), [MT, yT]),
          sk = (0, lT.useMemo)((() => CK(nT, pT, yT)), [nT, pT, yT]),
          Tc = (0, lT.useMemo)((() => Mk.filter((TT => TT >= nT && TT <= pT))), [Mk, pT, nT]),
          kc = (0, lT.useCallback)(((TT, kT, cT) => {
            const lT = "detail" === kT ? KK(TT, nT, pT) : AK(TT, MT),
              OT = null !== uT && cT === uT.fromTick,
              yT = null !== dT && dT.UA === cT;
            return (0, xT.jsx)("button", {
              type: "button",
              className: KT()("ReplayTimelineCameraKeyframeMarker", "detail" === kT ? "Detail" : "Overview", {
                Dragging: OT,
                Selected: yT
              }),
              style: {
                left: `${lT}%`
              },
              onPointerDown: fk(cT, kT),
              onPointerMove: xk,
              onPointerUp: Ik,
              onPointerCancel: Ik,
              "aria-label": `Camera keyframe at tick ${cT}`
            }, `cam-${kT}-${cT}`)
          }), [fk, dT, Ik, uT, MT, xk, pT, nT]),
          cc = (0, lT.useCallback)((TT => uT && TT === uT.previewTick ? uT.fromTick : TT), [uT]);
        return MT <= 0 ? null : (0, xT.jsxs)("div", {
          className: "ReplayTimeline",
          children: [dT && Kk && (0, cK.createPortal)((0, xT.jsx)(JK, {
            keyframe: Kk,
            anchor: dT,
            hasOutgoingSegment: Ok,
            onClose: () => {
              LT(null)
            },
            onApply: tT,
            onDelete: hT,
            onUseCurrentCamera: NT
          }), document.body), UT && (0, cK.createPortal)((0, xT.jsx)(oK, {
            anchor: UT,
            hasPlaybackMark: Jk,
            onClose: kk,
            onMark: ak,
            onZoom: Dk,
            onCrop: Fk,
            onDeleteKeyframes: rk,
            onClearMark: Pk
          }), document.body), (0, xT.jsxs)("div", {
            className: KT()("ReplayTimelineOverviewSection", {
              Hidden: FT <= 1
            }),
            children: [(0, xT.jsx)("div", {
              className: "ReplayTimelineSectionLabel",
              children: "Overview"
            }), (0, xT.jsxs)("div", {
              ref: wT,
              className: "ReplayTimelineOverviewTrack",
              onPointerDown: Nk,
              onPointerMove: Qk,
              onPointerUp: Sk,
              onPointerCancel: Sk,
              role: "slider",
              "aria-label": "Recording overview",
              "aria-valuemin": 0,
              "aria-valuemax": MT,
              "aria-valuenow": WT,
              tabIndex: 0,
              children: [qk.map((TT => {
                const kT = AK(TT, MT);
                return (0, xT.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Overview",
                  style: {
                    left: `${kT}%`
                  }
                }, TT)
              })), Jk && (0, xT.jsxs)(xT.Fragment, {
                children: [(0, xT.jsx)("div", {
                  className: "ReplayTimelineMarkRegion Overview",
                  style: {
                    left: `${Gk}%`,
                    width: `${Vk}%`
                  }
                }), (0, xT.jsx)("div", {
                  className: "ReplayTimelineMarkMarker In Overview",
                  style: {
                    left: `${Uk}%`
                  },
                  "aria-hidden": !0
                }), (0, xT.jsx)("div", {
                  className: "ReplayTimelineMarkMarker Out Overview",
                  style: {
                    left: `${Yk}%`
                  },
                  "aria-hidden": !0
                })]
              }), Mk.map((TT => kc(TT, "overview", cc(TT)))), (0, xT.jsx)("div", {
                className: "ReplayTimelineViewport",
                style: {
                  left: `${bk}%`,
                  width: `${Math.max(zk-bk,.5)}%`
                }
              }), (0, xT.jsx)("button", {
                type: "button",
                className: KT()("ReplayTimelinePlayhead Overview", {
                  Scrubbing: null !== GT
                }),
                style: {
                  left: `${mk}%`
                },
                onPointerDown: vk("overview"),
                onPointerMove: tk,
                onPointerUp: hk,
                onPointerCancel: hk,
                "aria-label": "Scrub playhead"
              })]
            })]
          }), (0, xT.jsxs)("div", {
            className: "ReplayTimelineDetailSection",
            children: [(0, xT.jsxs)("div", {
              className: "ReplayTimelineDetailHeader",
              children: [(0, xT.jsx)("span", {
                className: "ReplayTimelineSectionLabel",
                children: "Timeline"
              }), (0, xT.jsxs)("span", {
                className: "ReplayTimelineDetailRange",
                children: [yK(nT, yT), " \u2013 ", yK(pT, yT), FT > 1 && (0, xT.jsx)("span", {
                  className: "ReplayTimelineZoomBadge",
                  children: fK(FT)
                })]
              })]
            }), (0, xT.jsxs)("div", {
              ref: PT,
              className: "ReplayTimelineDetailTrack",
              onPointerDown: Ak,
              onPointerMove: Ck,
              onPointerUp: jk,
              onPointerCancel: jk,
              role: "slider",
              "aria-label": "Recording timeline",
              "aria-valuemin": nT,
              "aria-valuemax": pT,
              "aria-valuenow": WT,
              tabIndex: 0,
              children: [sk.map((TT => {
                const kT = KK(TT, nT, pT);
                return (0, xT.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Detail",
                  style: {
                    left: `${kT}%`
                  }
                }, TT)
              })), Xk && (0, xT.jsx)("div", {
                className: "ReplayTimelineMarkRegion Detail",
                style: {
                  left: `${Ek}%`,
                  width: `${uk}%`
                }
              }), Rk && (0, xT.jsx)("div", {
                className: "ReplayTimelineMarkMarker In Detail",
                style: {
                  left: `${dk}%`
                },
                "aria-label": `Play range start at tick ${Hk}`
              }), gk && (0, xT.jsx)("div", {
                className: "ReplayTimelineMarkMarker Out Detail",
                style: {
                  left: `${Lk}%`
                },
                "aria-label": `Play range end at tick ${ek}`
              }), ik && Bk && (0, xT.jsx)("div", {
                className: "ReplayTimelineSelectionRegion Detail",
                style: {
                  left: `${Wk}%`,
                  width: `${pk}%`
                }
              }), Tc.map((TT => kc(TT, "detail", cc(TT)))), (0, xT.jsx)("button", {
                type: "button",
                className: KT()("ReplayTimelinePlayhead Detail", {
                  Scrubbing: null !== GT
                }),
                style: {
                  left: `${wk}%`
                },
                onPointerDown: vk("detail"),
                onPointerMove: tk,
                onPointerUp: hk,
                onPointerCancel: hk,
                "aria-label": "Scrub playhead"
              })]
            }), (0, xT.jsxs)("div", {
              className: "ReplayTimelineWheelHint",
              children: [(0, xT.jsx)("span", {
                className: "Select",
                children: "Drag timeline to select"
              }), " \xb7 Scroll to zoom \xb7 Drag playhead to scrub"]
            })]
          })]
        })
      })),
      eK = (0, lT.memo)((function(TT) {
        let {
          enabled: kT
        } = TT;
        const cT = (0, lT.useRef)(!1),
          MT = (0, lT.useRef)(null),
          [OT, yT] = (0, lT.useState)(!1),
          fT = (0, lT.useCallback)((TT => {
            kT && 0 === TT.button && (cT.current = !0, yT(!0), MT.current = {
              x: TT.clientX,
              y: TT.clientY
            }, TT.currentTarget.setPointerCapture(TT.pointerId))
          }), [kT]),
          IT = (0, lT.useCallback)((TT => {
            if (!kT || !cT.current || !MT.current) return;
            const lT = TT.clientX - MT.current.x,
              KT = TT.clientY - MT.current.y;
            MT.current = {
              x: TT.clientX,
              y: TT.clientY
            }, CT.gameBridge.send("dragReplayCamera", {
              dx: lT,
              dy: KT
            })
          }), [kT]),
          AT = (0, lT.useCallback)((TT => {
            cT.current && (cT.current = !1, yT(!1), MT.current = null, TT.currentTarget.releasePointerCapture(TT.pointerId))
          }), []);
        return kT ? (0, xT.jsx)("div", {
          className: KT()("ReplayViewerCameraDragSurface", {
            Dragging: OT
          }),
          onPointerDown: fT,
          onPointerMove: IT,
          onPointerUp: AT,
          onPointerCancel: AT,
          "aria-hidden": !0
        }) : null
      }));
    var GK = cT(36814),
      VK = cT(36818);
    const EK = (0, lT.memo)((function(TT) {
        var kT, cT, MT;
        let {
          anchorRect: OT,
          anchorRef: fT,
          onClose: IT
        } = TT;
        const AT = (0, lT.useRef)(null),
          CT = mK(AT, OT),
          [jT, vT] = (0, lT.useState)(VK.b),
          tT = (0, lT.useMemo)((() => Object.values(jT).every((TT => TT))), [jT]);
        (0, yT.g)("replayViewer|uiVisibilityChanged", (() => {
          vT((0, VK.b)())
        })), bK(AT, IT, fT);
        const hT = (0, lT.useCallback)(((TT, kT) => {
            (0, VK.h)(TT, kT), vT((0, VK.b)())
          }), []),
          NT = (0, lT.useCallback)((TT => {
            for (const {
                group: kT
              }
              of GK.g)(0, VK.h)(kT, TT);
            vT((0, VK.b)())
          }), []),
          QT = wK(OT);
        return (0, cK.createPortal)((0, xT.jsxs)("div", {
          ref: AT,
          className: KT()("ReplayViewerPopover ReplayUiVisibilityPopover", {
            Below: null !== (kT = null === CT || void 0 === CT ? void 0 : CT.placeBelow) && void 0 !== kT && kT,
            Positioned: null !== CT
          }),
          style: {
            left: `${null!==(cT=null===CT||void 0===CT?void 0:CT.left)&&void 0!==cT?cT:QT.left}px`,
            top: `${null!==(MT=null===CT||void 0===CT?void 0:CT.top)&&void 0!==MT?MT:QT.top}px`
          },
          onPointerDown: TT => {
            TT.stopPropagation()
          },
          children: [(0, xT.jsx)("div", {
            className: "ReplayUiVisibilityPopoverHeader",
            children: (0, xT.jsx)("span", {
              className: "ReplayUiVisibilityPopoverTitle",
              children: "UI visibility"
            })
          }), (0, xT.jsxs)("div", {
            className: "ReplayUiVisibilityPopoverChecks",
            children: [(0, xT.jsxs)("div", {
              className: "ReplayUiVisibilityPopoverCheck",
              children: [(0, xT.jsx)("input", {
                type: "checkbox",
                checked: tT,
                onChange: TT => {
                  NT(TT.target.checked)
                }
              }), (0, xT.jsx)("span", {
                children: "SELECT ALL"
              })]
            }), GK.g.map((TT => {
              let {
                group: kT,
                label: cT
              } = TT;
              return (0, xT.jsxs)("label", {
                className: "ReplayUiVisibilityPopoverCheck",
                children: [(0, xT.jsx)("input", {
                  type: "checkbox",
                  checked: jT[kT],
                  onChange: TT => {
                    hT(kT, TT.target.checked)
                  }
                }), (0, xT.jsx)("span", {
                  children: cT
                })]
              }, kT)
            }))]
          })]
        }), document.body)
      })),
      ZK = (0, lT.memo)((function(TT) {
        let {
          disabled: kT
        } = TT;
        const cT = (0, lT.useRef)(null),
          [MT, KT] = (0, lT.useState)(!1),
          [OT, yT] = (0, lT.useState)(null),
          fT = (0, lT.useCallback)((() => {
            cT.current && (yT(cT.current.getBoundingClientRect()), KT((TT => !TT)))
          }), []),
          IT = (0, lT.useCallback)((() => {
            KT(!1)
          }), []);
        return (0, xT.jsxs)(xT.Fragment, {
          children: [(0, xT.jsx)("div", {
            ref: cT,
            children: (0, xT.jsx)(bc.e, {
              className: "ReplayViewerActionButton",
              onClick: fT,
              disabled: kT,
              children: (0, xT.jsx)("span", {
                children: "Hide UI elements"
              })
            })
          }), MT && OT && (0, xT.jsx)(EK, {
            anchorRect: OT,
            anchorRef: cT,
            onClose: IT
          })]
        })
      })),
      uK = ["freeCamUp", "freeCamDown"];

    function XK(TT, kT) {
      CT.gameBridge.send("holdReplayFreecamVertical", {
        action: TT,
        ty: kT
      })
    }
    const dK = (0, lT.memo)((function() {
        (0, lT.useEffect)((() => () => {
          ! function() {
            CT.gameBridge.send("moveReplayFreecam", null);
            for (const TT of uK) XK(TT, !1)
          }()
        }), []);
        const TT = (0, lT.useCallback)((TT => {
            CT.gameBridge.send("moveReplayFreecam", TT)
          }), []),
          kT = (0, lT.useCallback)((TT => ({
            onTouchStart: kT => {
              kT.preventDefault(), kT.stopPropagation(), XK(TT, !0)
            },
            onTouchEnd: kT => {
              kT.preventDefault(), kT.stopPropagation(), XK(TT, !1)
            },
            onTouchCancel: kT => {
              kT.preventDefault(), kT.stopPropagation(), XK(TT, !1)
            }
          })), []);
        return (0, xT.jsxs)("div", {
          className: "ReplayFreecamTouchControls",
          children: [(0, xT.jsx)("div", {
            className: "ReplayFreecamJoystickWrap",
            children: (0, xT.jsx)(Pk, {
              onMove: TT,
              mode: "pinned"
            })
          }), (0, xT.jsxs)("div", {
            className: "ReplayFreecamVerticalButtons",
            children: [(0, xT.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam up",
              ...kT("freeCamUp"),
              children: (0, xT.jsx)(ZT.e, {
                name: "angle-up",
                className: "ReplayFreecamVerticalIcon"
              })
            }), (0, xT.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam down",
              ...kT("freeCamDown"),
              children: (0, xT.jsx)(ZT.e, {
                name: "angle-down",
                className: "ReplayFreecamVerticalIcon"
              })
            })]
          })]
        })
      })),
      LK = [],
      RK = (0, lT.memo)((function() {
        const TT = (0, WT.m)();
        return (0, rT.b)("replayViewerRequested", (TT => {
          (0, WT.i)("toggle" === TT ? !(0, WT.g)() : "open" === TT)
        })), TT ? (0, xT.jsx)(gK, {}) : null
      })),
      gK = (0, lT.memo)((function() {
        var TT, kT, cT, MT, OT, yT, fT, IT, AT, jT, vT, tT;
        const hT = lT.useRef(null),
          [NT, QT] = (0, lT.useState)(null),
          [ST, DT] = (0, lT.useState)(1),
          [aT, FT] = (0, lT.useState)(null),
          [mT, bT] = (0, lT.useState)(!1),
          {
            isTouchScreen: zT
          } = (0, PT.n)(["isTouchScreen"]),
          JT = (0, rT.h)("replay"),
          oT = (0, rT.h)("replayEdits"),
          HT = null !== JT,
          eT = null !== (TT = null === JT || void 0 === JT ? void 0 : JT.UA) && void 0 !== TT ? TT : 0,
          GT = null !== (kT = null === JT || void 0 === JT ? void 0 : JT.totalTicks) && void 0 !== kT ? kT : 0,
          VT = Math.max(0, GT - 1),
          uT = null !== (cT = null === JT || void 0 === JT ? void 0 : JT.playing) && void 0 !== cT && cT,
          XT = null !== (MT = null === JT || void 0 === JT ? void 0 : JT.speed) && void 0 !== MT ? MT : 1,
          dT = null !== (OT = null === JT || void 0 === JT ? void 0 : JT.xJ) && void 0 !== OT ? OT : 20,
          LT = null !== aT && void 0 !== aT ? aT : eT,
          RT = null !== (yT = null === JT || void 0 === JT ? void 0 : JT.freecam) && void 0 !== yT && yT,
          gT = null !== (fT = null === JT || void 0 === JT ? void 0 : JT.cameraMode) && void 0 !== fT ? fT : "recording",
          UT = null !== (IT = null === oT || void 0 === oT ? void 0 : oT.cameraKeyframes) && void 0 !== IT ? IT : LK,
          YT = null !== (AT = null === oT || void 0 === oT ? void 0 : oT.playbackMark) && void 0 !== AT ? AT : null,
          BT = null !== (jT = null === oT || void 0 === oT ? void 0 : oT.fileName) && void 0 !== jT ? jT : null,
          nT = null !== (vT = null === oT || void 0 === oT ? void 0 : oT.unsavedChanges) && void 0 !== vT && vT,
          pT = null !== (tT = null === oT || void 0 === oT ? void 0 : oT.suggestSaveAs) && void 0 !== tT && tT,
          iT = (0, rT.h)("replayVideoExporting"),
          qT = !iT && HT && ("freecam" === gT || ("recording" === gT || "keyframe" === gT) && !uT),
          sT = zT && HT && "freecam" === gT && !iT && !mT;
        (0, kK.c)(!0, !0, "ReplayViewerOverlay"), (0, lT.useEffect)((() => {
          CT.gameBridge.send("syncReplayCameraMode", null)
        }), [RT]);
        const Tk = (0, lT.useCallback)(((TT, kT) => {
            CT.gameBridge.send("seekReplay", {
              UA: TT,
              ignorePlaybackMark: null === kT || void 0 === kT ? void 0 : kT.ignorePlaybackMark
            })
          }), []),
          kk = (0, lT.useCallback)((() => {
            CT.gameBridge.send("setReplayPlaying", !1)
          }), []),
          ck = (0, lT.useCallback)(((TT, kT) => {
            CT.gameBridge.send("moveReplayCameraKeyframe", {
              from: TT,
              to: kT
            })
          }), []),
          lk = (0, lT.useCallback)((TT => {
            CT.gameBridge.send("setReplayCameraKeyframe", TT)
          }), []),
          Mk = (0, lT.useCallback)((TT => {
            CT.gameBridge.send("deleteReplayCameraKeyframes", {
              start: TT,
              end: TT
            })
          }), []),
          Kk = (0, lT.useCallback)((TT => {
            CT.gameBridge.send("deleteReplayCameraKeyframes", {
              start: TT.startTick,
              end: TT.endTick
            })
          }), []),
          Ok = (0, lT.useCallback)((() => CT.gameBridge.lookup("replayCamera", null)), []),
          yk = (0, lT.useCallback)((TT => {
            FT(TT)
          }), []),
          fk = (0, lT.useCallback)((TT => {
            CT.gameBridge.send("setReplayPlaybackMark", {
              inTick: TT.startTick,
              outTick: TT.endTick
            })
          }), []),
          xk = (0, lT.useCallback)((() => {
            CT.gameBridge.send("setReplayPlaybackMark", null)
          }), []),
          Ik = (0, lT.useCallback)((TT => {
            const kT = CT.gameBridge.latest("replay");
            if (null === kT || TT.endTick <= TT.startTick) return;
            const cT = TT.startTick,
              lT = TT.endTick;
            il.NotificationProvider.showPromptPopup({
              title: "Crop recording to the selected range? This cannot be undone.",
              confirmText: "Crop",
              destructive: !0,
              cancelText: "Cancel"
            }).getResult().then((TT => {
              var MT;
              if (!0 !== TT) return;
              if ((null === (MT = CT.gameBridge.latest("replay")) || void 0 === MT ? void 0 : MT.id) !== kT.id) return;
              CT.gameBridge.send("cropReplay", {
                start: cT,
                end: lT
              }) && (FT(null), DT(1))
            }))
          }), []),
          Ak = (0, lT.useCallback)(((TT, kT) => {
            QT(null), DT(1), FT(null), (0, YM.d)().open(TT, kT).catch((TT => {
              console.error(TT), QT(TT instanceof Error ? TT.message : "Failed to parse recording")
            }))
          }), []),
          Ck = (0, lT.useCallback)(((TT, kT) => {
            null !== CT.gameBridge.latest("connectedGame").websocketUrl ? il.NotificationProvider.showPromptPopup({
              title: "Leave current game and play recording?",
              confirmText: "Yes",
              cancelText: "No"
            }).getResult().then((cT => {
              !0 === cT && Ak(TT, kT)
            })) : Ak(TT, kT)
          }), [Ak]),
          jk = (0, lT.useCallback)((TT => {
            var kT;
            const cT = null === (kT = TT.target.files) || void 0 === kT ? void 0 : kT[0];
            if (TT.target.value = "", !cT) return;
            const lT = new FileReader;
            lT.onload = () => {
              Ck(new Uint8Array(lT.result), {
                fileName: cT.name
              })
            }, lT.onerror = () => {
              QT("Failed to read file")
            }, lT.readAsArrayBuffer(cT)
          }), [Ck]),
          vk = (0, lT.useCallback)((() => {
            const TT = () => {
              var TT;
              null === (TT = hT.current) || void 0 === TT || TT.click()
            };
            (0, nM.g)() ? (0, nM.c)().then((TT => {
              TT && Ck(TT.bytes, {
                fileHandle: TT.handle
              })
            })).catch((kT => {
              console.error(kT), TT()
            })): TT()
          }), [Ck]),
          tk = (0, lT.useCallback)((async function() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            let kT;
            try {
              kT = await TK(TT, {
                files: (0, YM.d)(),
                pickerSupported: nM.g,
                chooseFile: nM.b,
                write: nM.j,
                download: WM.j,
                onFallback: console.error
              })
            } catch (cT) {
              return void(TT => {
                console.error(TT), il.NotificationProvider.showAlertPopup({
                  title: "Failed to save recording",
                  subtitle: iM(TT),
                  confirmText: "OK"
                })
              })(cT)
            }
            "written" !== kT && "downloaded" !== kT || (() => {
              const TT = il.NotificationProvider.showAlertPopup({
                title: "Recording saved",
                disableBackground: !0
              });
              setTimeout((() => {
                TT.tearDownNotification()
              }), 1e3)
            })()
          }), []),
          hk = (0, lT.useCallback)((TT => {
            CT.gameBridge.send("replayAction", TT)
          }), []),
          Nk = (0, lT.useCallback)((TT => {
            DT((kT => xK(kT, TT)))
          }), []),
          Qk = (0, lT.useCallback)((TT => {
            if (!CT.gameBridge.latest("replayVideoExporting")) switch (TT) {
              case "replayLoad":
                vk();
                break;
              case "replaySave":
                tk(!1);
                break;
              case "replaySaveAs":
                tk(!0);
                break;
              case "replayTimelineZoomIn":
                Nk("in");
                break;
              case "replayTimelineZoomOut":
                Nk("out")
            }
          }), [vk, tk, Nk]);
        (0, rT.b)("replayUiActionRequested", Qk);
        const Sk = (0, lT.useCallback)((TT => {
            CT.gameBridge.send("setReplayCameraMode", TT)
          }), []),
          Dk = HT ? bc.e : bc.m,
          ak = nT && !pT ? bc.m : bc.e,
          Fk = nT && pT ? bc.m : bc.e;
        return (0, xT.jsxs)("div", {
          className: "ReplayViewerOverlay",
          children: [(0, xT.jsx)(eK, {
            enabled: qT
          }), sT && (0, xT.jsx)(dK, {}), (0, xT.jsx)("input", {
            ref: hT,
            type: "file",
            accept: WM.d,
            className: "ReplayViewerFileInput",
            onChange: jk
          }), (0, xT.jsxs)("div", {
            className: KT()("ReplayViewerBar", {
              Collapsed: mT
            }),
            children: [(0, xT.jsx)("button", {
              type: "button",
              className: "ReplayViewerCollapseTab",
              onClick: () => {
                mT ? bT(!1) : HT ? bT(!0) : (0, WT.c)()
              },
              "aria-expanded": !mT,
              "aria-label": mT ? "Expand replay viewer" : "Collapse replay viewer",
              children: (0, xT.jsx)(ZT.e, {
                name: mT ? "angle-up" : "angle-down"
              })
            }), !mT && (0, xT.jsxs)("div", {
              className: "ReplayViewerBarBody",
              children: [HT && GT > 0 && (0, xT.jsx)(HK, {
                maxTick: VT,
                displayTick: LT,
                xJ: dT,
                cameraKeyframes: UT,
                playbackMark: YT,
                onSeek: Tk,
                onPause: kk,
                onScrubTickChange: yk,
                onMoveCameraKeyframe: ck,
                onUpdateCameraKeyframe: lk,
                onDeleteCameraKeyframe: Mk,
                onUseCurrentCamera: Ok,
                onMarkRange: fk,
                onCropRange: Ik,
                onDeleteKeyframesInRange: Kk,
                onClearMark: xk,
                zoomLevel: ST,
                onZoomLevelChange: DT
              }, VT), (0, xT.jsxs)("div", {
                className: "ReplayViewerControls",
                children: [(0, xT.jsxs)("div", {
                  className: "ReplayViewerControlsLeftSide",
                  children: [(0, xT.jsxs)("div", {
                    className: "ReplayViewerControlsGroup FileGroup",
                    children: [HT && (0, xT.jsxs)("div", {
                      className: "ReplayViewerFileName",
                      children: [null !== BT && void 0 !== BT ? BT : "Unsaved recording", nT ? " *" : ""]
                    }), (0, xT.jsxs)(Dk, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Qk("replayLoad")
                      },
                      children: [(0, xT.jsx)(wT.b, {
                        noaAction: "replayLoad",
                        padHidesKey: !0
                      }), (0, xT.jsx)("span", {
                        children: " Load "
                      })]
                    }), (0, xT.jsxs)(bc.e, {
                      className: "ReplayViewerActionButton",
                      onClick: WT.c,
                      children: [(0, xT.jsx)(wT.b, {
                        noaAction: "replayViewerOpen",
                        padHidesKey: !0
                      }), (0, xT.jsx)("span", {
                        children: " Hide "
                      })]
                    }), (0, xT.jsxs)(ak, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Qk("replaySave")
                      },
                      disabled: !HT,
                      children: [(0, xT.jsx)(wT.b, {
                        noaAction: "replaySave",
                        padHidesKey: !0
                      }), (0, xT.jsx)("span", {
                        children: " Save "
                      })]
                    }), (0, xT.jsxs)(bc.e, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        CT.gameBridge.send("leaveGame", {
                          reloadPath: "/"
                        })
                      },
                      disabled: !HT,
                      children: [(0, xT.jsx)(wT.b, {
                        noaAction: "replayExit",
                        padHidesKey: !0
                      }), (0, xT.jsx)("span", {
                        children: " Exit "
                      })]
                    }), (0, xT.jsxs)(Fk, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Qk("replaySaveAs")
                      },
                      disabled: !HT,
                      children: [(0, xT.jsx)(wT.b, {
                        noaAction: "replaySaveAs",
                        padHidesKey: !0
                      }), (0, xT.jsx)("span", {
                        children: " Save As "
                      })]
                    }), (0, xT.jsxs)(bc.e, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        CT.gameBridge.send("exportReplayVideo", null)
                      },
                      disabled: !HT || 0 === GT || iT,
                      children: [(0, xT.jsx)(wT.b, {
                        noaAction: "replayExportVideo",
                        padHidesKey: !0
                      }), (0, xT.jsx)("span", {
                        children: " Export "
                      })]
                    })]
                  }), (0, xT.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, xT.jsxs)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: [(0, xT.jsx)("span", {
                        children: " Camera Mode "
                      }), (0, xT.jsx)(wT.b, {
                        noaAction: "replayChangeCameraMode",
                        padHidesKey: !0
                      })]
                    }), (0, xT.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody CameraModes",
                      children: [(0, xT.jsx)(ET.c, {
                        tooltipInner: (0, xT.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Replicate how the camera was set when recorded."
                        }),
                        children: (0, xT.jsxs)(bc.P, {
                          className: "ReplayViewerModeButton",
                          active: "recording" === gT,
                          onClick: () => {
                            Sk("recording")
                          },
                          disabled: !HT,
                          children: ["Recorded ", (0, xT.jsx)(ZT.e, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, xT.jsx)(ET.c, {
                        tooltipInner: (0, xT.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Move the camera freely around."
                        }),
                        children: (0, xT.jsxs)(bc.P, {
                          className: "ReplayViewerModeButton",
                          active: "freecam" === gT,
                          onClick: () => {
                            Sk("freecam")
                          },
                          disabled: !HT,
                          children: ["Free ", (0, xT.jsx)(ZT.e, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, xT.jsx)(ET.c, {
                        tooltipInner: (0, xT.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Display the replay in real time using keyframes."
                        }),
                        children: (0, xT.jsxs)(bc.P, {
                          className: "ReplayViewerModeButton",
                          active: "keyframe" === gT,
                          onClick: () => {
                            Sk("keyframe")
                          },
                          disabled: !HT,
                          children: ["Preview ", (0, xT.jsx)(ZT.e, {
                            name: "circle-info"
                          })]
                        })
                      })]
                    })]
                  })]
                }), (0, xT.jsxs)("div", {
                  className: "ReplayViewerControlsGroup TimeGroup",
                  children: [(0, xT.jsxs)("div", {
                    className: "ReplayViewerTimecodeContainer",
                    children: [(0, xT.jsxs)("span", {
                      className: "ReplayViewerTimecode",
                      children: [(0, xT.jsx)("span", {
                        className: "ReplayViewerTimecodeNow",
                        children: yK(LT, dT)
                      }), (0, xT.jsx)("span", {
                        className: "ReplayViewerTimecodeDivider",
                        children: "/"
                      }), (0, xT.jsx)("span", {
                        className: "ReplayViewerTimecodeTotal",
                        children: yK(VT, dT)
                      })]
                    }), (0, xT.jsxs)("span", {
                      className: "ReplayViewerTickLabel",
                      children: ["Tick ", LT, " / ", VT]
                    })]
                  }), (0, xT.jsxs)("div", {
                    className: "ReplayViewerTimecodeControls",
                    children: [(0, xT.jsxs)(bc.e, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        hk("replaySkipBack")
                      },
                      disabled: !HT,
                      children: [(0, xT.jsxs)("span", {
                        children: [" ", (0, xT.jsx)(ZT.e, {
                          name: "clock-rotate-left"
                        }), " 1s"]
                      }), (0, xT.jsx)(wT.b, {
                        noaAction: "replaySkipBack",
                        padHidesKey: !0
                      })]
                    }), (0, xT.jsxs)(bc.m, {
                      className: "ReplayViewerMediaButton PlayButton",
                      onClick: () => {
                        CT.gameBridge.send("setReplayPlaying", !uT)
                      },
                      disabled: !HT,
                      children: [(0, xT.jsxs)("span", {
                        children: [" ", uT ? (0, xT.jsx)(ZT.e, {
                          name: "pause"
                        }) : (0, xT.jsx)(ZT.e, {
                          name: "play"
                        }), " "]
                      }), (0, xT.jsx)(wT.b, {
                        noaAction: "replayPlayPause",
                        padHidesKey: !0
                      })]
                    }), (0, xT.jsxs)(bc.e, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        hk("replaySkipForward")
                      },
                      disabled: !HT,
                      children: [(0, xT.jsxs)("span", {
                        children: [" ", (0, xT.jsx)(ZT.e, {
                          name: "rotate-forward"
                        }), " 1s"]
                      }), (0, xT.jsx)(wT.b, {
                        noaAction: "replaySkipForward",
                        padHidesKey: !0
                      })]
                    })]
                  })]
                }), (0, xT.jsxs)("div", {
                  className: "ReplayViewerControlsRightSide",
                  children: [(0, xT.jsxs)("div", {
                    className: "ReplayViewerControlsGroup RecordKeyframeGroup",
                    children: [(0, xT.jsxs)(bc.m, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        hk("replayRecordKeyframe")
                      },
                      disabled: !HT,
                      children: [(0, xT.jsx)(wT.b, {
                        noaAction: "replayRecordKeyframe",
                        padHidesKey: !0
                      }), (0, xT.jsx)("span", {
                        children: " Record keyframe "
                      })]
                    }), (0, xT.jsx)(ZK, {
                      disabled: !HT
                    }), YT && (0, xT.jsx)(bc.P, {
                      className: "ReplayViewerActionButton",
                      onClick: xk,
                      disabled: !HT,
                      children: (0, xT.jsx)("span", {
                        children: " Clear range "
                      })
                    })]
                  }), (0, xT.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, xT.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Speed"
                    }), (0, xT.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, xT.jsx)(bc.e, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          hk("replaySpeedDown")
                        },
                        disabled: !HT || (0, BM.g)(XT),
                        children: (0, xT.jsx)("span", {
                          children: " \u2212 "
                        })
                      }), (0, xT.jsxs)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: [XT, "\xd7"]
                      }), (0, xT.jsx)(bc.e, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          hk("replaySpeedUp")
                        },
                        disabled: !HT || (0, BM.c)(XT),
                        children: (0, xT.jsx)("span", {
                          children: " + "
                        })
                      })]
                    })]
                  }), (0, xT.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, xT.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Timeline Zoom"
                    }), (0, xT.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, xT.jsxs)(bc.e, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          Qk("replayTimelineZoomOut")
                        },
                        disabled: !HT || ST <= lK[0],
                        children: [(0, xT.jsx)("span", {
                          children: " \u2212 "
                        }), (0, xT.jsx)(wT.b, {
                          noaAction: "replayTimelineZoomOut",
                          padHidesKey: !0
                        })]
                      }), (0, xT.jsx)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: fK(ST)
                      }), (0, xT.jsxs)(bc.e, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          Qk("replayTimelineZoomIn")
                        },
                        disabled: !HT || ST >= lK[lK.length - 1],
                        children: [(0, xT.jsx)("span", {
                          children: " + "
                        }), (0, xT.jsx)(wT.b, {
                          noaAction: "replayTimelineZoomIn",
                          padHidesKey: !0
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0, xT.jsx)("div", {
                className: "ReplayViewerEmptyState",
                children: !HT && "Load a recording to begin playback"
              }), NT && (0, xT.jsx)("div", {
                className: "ReplayViewerError",
                children: NT
              })]
            })]
          })]
        })
      }));
    var UK = cT(1327);

    function YK() {
      const [, TT] = (0, lT.useState)(0);
      return (0, yT.g)("replayViewer|uiVisibilityChanged", (() => {
          TT((TT => TT + 1))
        })), (0, yT.g)("replayViewer|replayLoaded", (() => {
          TT((TT => TT + 1))
        })),
        function() {
          if (!(0, UK.e)()) return {};
          const TT = {
              [GK.e]: "true"
            },
            kT = (0, VK.b)();
          for (const {
              group: cT,
              dataAttr: lT
            }
            of GK.g) lT && !kT[cT] && (TT[lT] = "true");
          return TT
        }()
    }
    var BK = cT(9354),
      WK = cT(2101),
      nK = cT(8771),
      pK = cT(8762),
      iK = cT(2114);
    const qK = (0, lT.memo)((function() {
      var TT, kT, cT;
      const MT = (0, ST.f)("customButtons");
      (0, lT.useEffect)((() => MT ? (CT.gameBridge.send("bindCustomButtonKeys", MT.filter(nK.d).map((TT => {
        let {
          id: kT,
          keycode: cT
        } = TT;
        return {
          id: kT,
          keycode: cT
        }
      }))), () => {
        CT.gameBridge.send("bindCustomButtonKeys", [])
      }) : () => {}), [MT]);
      const KT = null !== (TT = null === MT || void 0 === MT ? void 0 : MT.filter(nK.d)) && void 0 !== TT ? TT : [],
        OT = (0, pK.f)(),
        yT = null !== (kT = null === (cT = (0, iK.e)()) || void 0 === cT ? void 0 : cT.hideButtonHints) && void 0 !== kT && kT,
        fT = "customButton" !== (null === OT || void 0 === OT ? void 0 : OT.kind) || yT ? null : OT.id,
        IT = KT.length > 0,
        AT = (0, lT.useRef)(null);
      return (0, lT.useLayoutEffect)((() => {
        if (!IT) return () => {};
        const TT = AT.current,
          kT = TT.closest(".InGameUi"),
          cT = () => {
            kT.style.setProperty("--custom-buttons-top", `${TT.offsetTop}px`)
          };
        cT();
        const lT = new ResizeObserver(cT);
        return lT.observe(TT), lT.observe(TT.parentElement), () => {
          lT.disconnect(), kT.style.removeProperty("--custom-buttons-top")
        }
      }), [IT]), (0, xT.jsx)("div", {
        ref: AT,
        className: "" + ((0, vM.isMobile)() ? "CustomIconsMobile" : "CustomIcons"),
        children: KT.map((TT => {
          var kT, cT;
          return (0, xT.jsx)(sK, {
            button: TT,
            padGlyph: TT.id === fT && null !== (kT = null === (cT = (0, LT.g)()) || void 0 === cT ? void 0 : cT.getBoundButton("actionButton")) && void 0 !== kT ? kT : null
          }, TT.id)
        }))
      })
    }));

    function sK(TT) {
      let {
        button: kT,
        padGlyph: cT
      } = TT;
      const MT = (0, lT.useRef)(null),
        KT = () => {
          null !== MT.current && (MT.current = null, CT.gameBridge.send("pressCustomButton", {
            id: kT.id,
            down: !1
          }))
        };
      (0, lT.useEffect)((() => KT), []);
      const OT = Yk(KT, {
          pressesOnPointerDown: !0
        }),
        yT = TT => {
          MT.current === TT.pointerId && KT()
        };
      return (0, xT.jsxs)("div", {
        className: "CustomIcon",
        ...OT,
        onLostPointerCapture: yT,
        children: [(0, xT.jsx)(WK.e, {
          icon: kT.icon,
          keyboardHint: (0, nK.b)(kT.keycode),
          padGlyph: cT,
          onPointerDown: TT => {
            try {
              TT.currentTarget.setPointerCapture(TT.pointerId)
            } catch {
              return
            }
            null === MT.current && CT.gameBridge.send("pressCustomButton", {
              id: kT.id,
              down: !0
            }), MT.current = TT.pointerId
          },
          onPointerUp: yT,
          onPointerCancel: yT,
          showTouchTutorialPubSubId: !1,
          showRedDotPubSubId: !1
        }), kT.description && (0, xT.jsx)("div", {
          className: "CustomIconDescription SmallTextBold",
          children: kT.description
        })]
      })
    }
    var TO = cT(2454),
      kO = cT(275);
    const cO = {
      frame: TT => {
        const kT = requestAnimationFrame((() => {
          TT()
        }));
        return () => {
          cancelAnimationFrame(kT)
        }
      },
      afterFrame: TT => {
        const kT = setTimeout(TT, 0);
        return () => {
          clearTimeout(kT)
        }
      }
    };
    class lO {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kO.e,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cO;
        this.idle = TT, this.frames = kT, this.waiting = [], this.cancelIdle = null, this.cancelFrame = null, this.cancelAfterFrame = null, this.starvedFrames = 0, this.shown = !1
      }
      request(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.shown ? (TT(), () => {}) : (kT ? this.waiting.unshift(TT) : this.waiting.push(TT), this.schedule(), () => {
          const kT = this.waiting.indexOf(TT);
          kT >= 0 && (this.waiting.splice(kT, 1), this.settle())
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
        var TT, kT, cT;
        null === (TT = this.cancelIdle) || void 0 === TT || TT.call(this), this.cancelIdle = null, null === (kT = this.cancelFrame) || void 0 === kT || kT.call(this), this.cancelFrame = null, null === (cT = this.cancelAfterFrame) || void 0 === cT || cT.call(this), this.cancelAfterFrame = null
      }
    }
    const MO = (0, lT.createContext)(null);

    function KO(TT) {
      let {
        children: kT,
        first: cT = !1
      } = TT;
      const MT = (0, lT.useContext)(MO),
        [KT, OT] = (0, lT.useState)(null === MT);
      return (0, lT.useEffect)((() => {
        if (!KT && null !== MT) return MT.request((() => {
          OT(!0)
        }), cT)
      }), [cT, KT, MT]), KT ? (0, lT.createElement)(lT.Fragment, null, kT) : null
    }
    const OO = (0, lT.memo)((function(TT) {
        let {
          shown: kT
        } = TT;
        const [cT] = (0, lT.useState)((() => new vT.i(kT))), [MT] = (0, lT.useState)((() => kT ? null : new lO));
        return (0, lT.useLayoutEffect)((() => {
          kT && (null === MT || void 0 === MT || MT.show(), cT.show())
        }), [kT, cT, MT]), (0, xT.jsx)(vT.e.Provider, {
          value: cT,
          children: (0, xT.jsx)(MO.Provider, {
            value: MT,
            children: (0, xT.jsx)(yO, {})
          })
        })
      })),
      yO = (0, lT.memo)((function() {
        const {
          isUiHidden: TT,
          isUiHiddenByCamera: kT,
          worldPanelHud: cT,
          isTouchScreen: MT
        } = (0, PT.n)(["isUiHidden", "isUiHiddenByCamera", "worldPanelHud", "isTouchScreen"]), OT = (0, nl.d)(), yT = YK(), fT = (0, vT.m)(), IT = (0, lT.useRef)(null), AT = (0, ST.f)("showKillfeed");
        return function() {
            const TT = (0, vT.m)();
            (0, lT.useEffect)((() => TT.whenShown(tT)), [TT])
          }(),
          function() {
            const TT = (0, ST.f)("inventoryColourOverride");
            (0, lT.useEffect)((() => {
              if (!TT) return;
              const {
                panel: kT,
                slot: cT,
                slotSelected: lT,
                slotUnavailable: MT
              } = gT(TT), KT = document.documentElement.style;
              return KT.setProperty("--InventoryPanelColour", kT), KT.setProperty("--InventorySlotColour", cT), KT.setProperty("--InventorySlotSelectedColour", lT), KT.setProperty("--InventorySlotUnavailableColour", MT), () => {
                KT.removeProperty("--InventoryPanelColour"), KT.removeProperty("--InventorySlotColour"), KT.removeProperty("--InventorySlotSelectedColour"), KT.removeProperty("--InventorySlotUnavailableColour")
              }
            }), [TT])
          }(), (0, lT.useLayoutEffect)((() => fT.whenShown((() => {
            var TT;
            null === (TT = IT.current) || void 0 === TT || TT.classList.remove("PreMounted")
          }))), [fT]), (0, xT.jsxs)(xT.Fragment, {
            children: [(0, xT.jsxs)("div", {
              ref: IT,
              className: KT()("InGameUi", {
                PreMounted: !fT.shown,
                Hidden: TT,
                HiddenByCamera: kT,
                HiddenByWorldPanel: null !== cT,
                WorldPanelTouchControl: "touchControls" === cT
              }),
              ...yT,
              children: [(0, xT.jsxs)(KO, {
                children: [(0, xT.jsx)(gc.d, {}), (0, xT.jsx)(nc, {})]
              }), (0, xT.jsx)(vT.j, {
                children: (0, xT.jsx)(pc, {})
              }), (0, xT.jsxs)(KO, {
                children: [(0, xT.jsx)(FM, {}), (0, xT.jsx)(JM, {}), MT && (0, xT.jsx)(HM, {})]
              }), (0, xT.jsxs)(KO, {
                children: [(0, xT.jsx)(Qc, {}), (0, xT.jsx)(xl.b, {}), (0, xT.jsx)(hl, {})]
              }), (0, xT.jsx)(vT.j, {
                children: (0, xT.jsx)(Rc, {})
              }), (0, xT.jsxs)(KO, {
                children: [(0, xT.jsx)(mM.c, {}), (0, xT.jsx)(RK, {})]
              }), (0, xT.jsxs)(KO, {
                children: [(0, xT.jsx)(GM.g, {}), (0, xT.jsx)(VM.i, {})]
              }), (0, xT.jsx)(KO, {
                children: (0, xT.jsx)(Dc.k, {})
              }), (0, xT.jsx)(KO, {
                children: (0, xT.jsx)(vO, {
                  showChat: OT
                })
              }), (0, xT.jsxs)(KO, {
                children: [(0, xT.jsx)(ZM, {}), (0, xT.jsx)(wM, {})]
              }), (0, xT.jsxs)("div", {
                className: KT()("RightElements", {
                  RightElementsTouchscreen: MT
                }),
                "data-camera-keeper-host": "",
                children: [(0, xT.jsxs)("div", {
                  className: rl.j,
                  "data-holds-camera-keeper": "",
                  children: [(0, xT.jsxs)("div", {
                    className: "TopRightElementsLeft",
                    "data-holds-camera-keeper": "",
                    children: [(0, xT.jsx)(KO, {
                      children: (0, xT.jsx)(IM.b, {})
                    }), (0, xT.jsxs)(KO, {
                      children: [(0, xT.jsx)(uT, {}), (0, xT.jsx)(zl.d, {})]
                    }), vM.featureFlags.useSocialFeatures && (0, xT.jsx)(vT.j, {
                      children: (0, xT.jsx)(Jl.e, {
                        placement: "inGame"
                      })
                    }), vM.featureFlags.useSocialFeatures && (0, xT.jsx)(vT.j, {
                      children: (0, xT.jsx)(gl, {})
                    }), AT && (0, xT.jsx)(vT.j, {
                      children: (0, xT.jsx)(fl, {})
                    }), (0, xT.jsx)(KO, {
                      children: (0, xT.jsx)(BK.d, {})
                    })]
                  }), vM.featureFlags.useSocialFeatures && (0, xT.jsx)("div", {
                    className: "TopRightElementsRight",
                    children: (0, xT.jsx)(KO, {
                      children: (0, xT.jsx)(DM.b, {})
                    })
                  })]
                }), (0, xT.jsxs)(KO, {
                  children: [(0, xT.jsx)(Dc.c, {
                    placement: "topRight"
                  }), (0, xT.jsx)(tO, {})]
                })]
              }), (0, xT.jsx)("div", {
                className: "LeftCentre",
                children: (0, xT.jsx)(KO, {
                  children: (0, xT.jsx)(qK, {})
                })
              }), (0, xT.jsxs)("div", {
                className: "BottomCentre",
                "data-holds-camera-keeper": MT ? "" : void 0,
                children: [(0, xT.jsx)(vT.j, {
                  children: (0, xT.jsx)(oT, {})
                }), (0, xT.jsx)(KO, {
                  children: (0, xT.jsx)(xO, {})
                }), (0, xT.jsxs)("div", {
                  className: "BottomElements",
                  "data-holds-camera-keeper": MT ? "" : void 0,
                  children: [(0, xT.jsx)("div", {
                    className: KT()("BottomLeftElements", {
                      Touch: MT
                    }),
                    children: (0, xT.jsxs)(KO, {
                      children: [(0, xT.jsx)(Bl, {}), !MT && (0, xT.jsx)(TO.d, {})]
                    })
                  }), (0, xT.jsx)(KO, {
                    children: (0, xT.jsx)(jO, {})
                  }), (0, xT.jsx)(KO, {
                    children: (0, xT.jsx)(Ql, {
                      isTouchScreen: MT
                    })
                  })]
                })]
              }), (0, xT.jsx)("div", {
                className: "MiddleLeft"
              }), MT && (0, xT.jsx)(KO, {
                children: (0, xT.jsx)(Tc, {})
              }), (0, xT.jsx)("div", {
                className: "CameraFadeHost",
                ref: Sk.n
              })]
            }), (0, xT.jsx)(vT.j, {
              children: (0, xT.jsx)(UM.d, {})
            }), (0, xT.jsx)(KO, {
              first: !0,
              children: (0, xT.jsx)(Wl.e, {})
            }), (0, xT.jsx)(vT.j, {
              children: (0, xT.jsx)(fO, {})
            })]
          })
      }));

    function fO() {
      return (0, lT.useEffect)((() => {
        const TT = setTimeout((() => {
          (0, DT.j)()
        }), 0);
        return () => {
          clearTimeout(TT), DT.k.zD(!1)
        }
      }), []), null
    }
    const xO = (0, lT.memo)((function() {
        const TT = (0, yT.i)("aimingOverlay", "none");
        (0, NT.d)();
        const kT = (0, ST.g)("middleTextUpper"),
          cT = (0, ST.g)("middleTextLower");
        return (0, xT.jsxs)("div", {
          className: "MiddleTextBottom",
          style: "sniper" === TT ? {
            visibility: "hidden"
          } : {},
          children: [(0, xT.jsx)(CO, {
            text: kT,
            className: "MiddleText MiddleTextUpper SmallTextBold",
            maxHeightFraction: IO
          }), (0, xT.jsx)(CO, {
            text: cT,
            className: "MiddleText",
            maxHeightFraction: AO
          })]
        })
      })),
      IO = .3,
      AO = .2;

    function CO(TT) {
      let {
        text: kT,
        className: cT,
        maxHeightFraction: MT
      } = TT;
      const KT = (0, lT.useRef)(null),
        OT = (0, lT.useRef)(null);
      return function(TT, kT, cT, MT) {
        (0, lT.useLayoutEffect)((() => {
          const lT = TT.current,
            MT = kT.current;
          if (!lT || !MT) return;
          let KT = -1,
            OT = -1;
          const yT = TT => (MT.style.setProperty("zoom", String(TT)), lT.getBoundingClientRect().height),
            fT = () => {
              const TT = document.documentElement.clientHeight * cT;
              let kT = 1;
              if (yT(1) > TT) {
                let cT = .5,
                  lT = 1;
                for (let kT = 0; kT < 6; kT++) {
                  const kT = (cT + lT) / 2;
                  yT(kT) <= TT ? cT = kT : lT = kT
                }
                kT = cT
              }
              OT = yT(kT), KT = lT.getBoundingClientRect().width
            };
          fT();
          let xT = 0;
          const IT = () => {
              cancelAnimationFrame(xT), xT = requestAnimationFrame(fT)
            },
            AT = new ResizeObserver((() => {
              const {
                width: TT,
                height: kT
              } = lT.getBoundingClientRect();
              TT === KT && kT === OT || IT()
            }));
          return AT.observe(lT), window.addEventListener("resize", IT), () => {
            AT.disconnect(), window.removeEventListener("resize", IT), cancelAnimationFrame(xT), MT.style.removeProperty("zoom")
          }
        }), [TT, kT, cT, MT])
      }(KT, OT, MT, kT.content), (0, xT.jsx)("div", {
        ref: KT,
        className: "MiddleTextFit",
        children: (0, xT.jsx)(EM, {
          ref: OT,
          text: kT,
          className: cT
        })
      })
    }
    const jO = (0, lT.memo)((function() {
        const TT = (0, yT.i)("aimingOverlay", "none");
        (0, NT.d)();
        const kT = (0, ST.f)("useInventory");
        return (0, xT.jsxs)("div", {
          className: "BottomMiddleElements",
          style: "sniper" === TT ? {
            visibility: "hidden"
          } : {},
          children: [(0, xT.jsx)(IT, {}), (0, xT.jsx)(Dc.c, {}), (0, xT.jsx)(ac, {}), (0, xT.jsx)(vT.j, {
            children: (0, xT.jsx)(QM, {})
          }), (0, xT.jsxs)("div", {
            className: "HotBarRow",
            children: [kT ? (0, xT.jsx)(dT.c, {}) : (0, xT.jsx)(dT.g, {}), (0, xT.jsx)(RT, {})]
          })]
        })
      })),
      vO = (0, lT.memo)((function(TT) {
        let {
          showChat: kT
        } = TT;
        const {
          t: cT
        } = (0, JT.B)(), {
          clientEscMenuOptions: MT,
          isTouchScreen: OT
        } = (0, PT.n)(["clientEscMenuOptions", "isTouchScreen"]);
        (0, NT.d)();
        const {
          userContext: yT,
          isUserContextUpdating: fT
        } = (0, hT.b)(), IT = (0, ST.f)("hideCoordinates"), CT = (0, ST.f)("customVariationTitle"), {
          requestedGameNameWithVariation: jT,
          gameNameWithVariation: vT,
          lobbyName: tT,
          shownLobbyName: DT
        } = (0, rT.h)("connectedGame"), aT = (0, AT.b)(jT, tT, !1), [FT, wT] = (0, lT.useState)(null), mT = (0, CM.k)(vT || jT || ""), bT = CT || mT || "";
        (0, lT.useEffect)((() => {
          fT || Hl.d.getFavouriteLobbies(yT).then((TT => {
            console.log("Got favourite lobbies", TT), wT(TT)
          }))
        }), [fT, yT]);
        const zT = (0, lT.useRef)(null);
        return (0, lT.useLayoutEffect)((() => {
          const TT = zT.current,
            kT = document.documentElement,
            cT = new ResizeObserver((() => {
              kT.style.setProperty("--InGameHeaderRowsHeight", `${TT.offsetHeight}px`)
            }));
          return cT.observe(TT), () => {
            cT.disconnect(), kT.style.removeProperty("--InGameHeaderRowsHeight")
          }
        }), []), bl(zT), (0, xT.jsxs)(xT.Fragment, {
          children: [(0, xT.jsxs)("div", {
            className: KT()(rl.g, {
              Touchscreen: OT
            }),
            ref: zT,
            children: [(0, xT.jsxs)("div", {
              className: "InGameHeader",
              children: [(0, xT.jsxs)("div", {
                className: "InGameHeaderLogo",
                onMouseDown: TT => {
                  TT.stopPropagation(), TT.preventDefault()
                },
                onClick: () => {
                  PT.e.set({
                    openEverythingMenuName: QT.o.SETTINGS
                  })
                },
                children: [(0, xT.jsx)(AM.d, {
                  showFace: !0,
                  loading: !1
                }), "bloxd.io"]
              }), (0, xT.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, xT.jsxs)("div", {
                className: "InGameHeaderGameName",
                children: [null === aT && (0, xT.jsx)(AM.d, {}), null !== aT && (0, xT.jsxs)(xT.Fragment, {
                  children: [aT, bT && ` ${bT}`]
                })]
              }), (0, xT.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, xT.jsx)("div", {
                className: "InGameHeaderLobbyName",
                children: DT
              }), (0, jM.D)(tT) && (0, xT.jsx)(ET.c, {
                tooltipInner: (0, xT.jsx)("div", {
                  children: cT(null !== FT && FT.includes(tT) ? "customLobby:removeFromFavourites" : "customLobby:addToFavourites")
                }),
                children: (0, xT.jsx)("div", {
                  children: (0, xT.jsx)(bc.s, {
                    isLiked: null !== FT && FT.includes(tT),
                    onClick: () => {
                      try {
                        if (!FT) return;
                        FT.includes(tT) ? (Hl.d.unfavouriteLobby(yT, tT).catch((TT => {
                          console.error("Failed to favourite lobby", TT)
                        })), wT(FT.filter((TT => TT !== tT)))) : (Hl.d.favouriteLobby(yT, tT).catch((TT => {
                          console.error("Failed to favourite lobby", TT)
                        })), wT([...FT, tT]))
                      } catch (TT) {
                        console.error("Failed to like lobby", TT)
                      }
                    },
                    isLoading: null === FT
                  })
                })
              }), (0, xT.jsx)(LM, {})]
            }), (0, xT.jsx)(KM, {
              show: MT.showFPS
            }), !IT && MT.showCoordinates && (0, xT.jsx)(fM, {}), !IT && MT.showChunkCoordinates && (0, xT.jsx)(xM, {}), (0, xT.jsx)(uM, {})]
          }), (0, xT.jsx)("div", {
            className: "TopLeftElements",
            "data-holds-camera-keeper": "",
            children: (0, xT.jsx)("div", {
              className: "InGameHeaderAndChat",
              "data-holds-camera-keeper": "",
              children: kT && (0, xT.jsx)(BT.e, {})
            })
          })]
        })
      })),
      tO = (0, lT.memo)((function() {
        (0, NT.d)();
        const TT = (0, ST.g)("RightInfoText"),
          [kT, cT] = (0, lT.useState)(null);
        return (0, vk.j)(kT, ".RightElements"), TT.hasText ? (0, xT.jsx)("div", {
          className: "RightInfoDivContainer",
          children: (0, xT.jsx)(EM, {
            ref: cT,
            text: TT,
            className: "RightInfoDiv",
            children: (0, xT.jsx)("div", {
              className: "RightInfoDivInner",
              children: (0, xT.jsx)(fT.b, {
                text: TT.content
              })
            })
          })
        }) : null
      }))
  },
  4800: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => yT
    });
    var lT = cT(71),
      MT = cT(328),
      KT = cT(1943),
      OT = cT(1099);

    function yT(TT) {
      let {
        text: kT
      } = TT;
      const cT = [];
      let yT = "";
      return (0, MT.Pb)(kT).forEach(((TT, kT) => {
        if ("string" === typeof TT || !(0, KT.e)(TT.icon)) return void(yT += "string" === typeof TT ? TT : TT.icon);
        const MT = Math.max(0, yT.trimEnd().search(/\S{1,12}$/));
        cT.push((0, OT.jsxs)(lT.Fragment, {
          children: [yT.slice(0, MT), (0, OT.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [yT.slice(MT), (0, OT.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": TT.icon,
              children: (0, OT.jsx)(KT.d, {
                itemName: TT.icon,
                amount: 0
              })
            })]
          })]
        }, kT)), yT = ""
      })), cT.push(yT), (0, OT.jsx)(OT.Fragment, {
        children: cT
      })
    }
  },
  36346: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => CT,
      c: () => IT,
      f: () => AT
    });
    var lT = cT(71),
      MT = cT(1046),
      KT = cT.n(MT),
      OT = cT(1943),
      yT = cT(1099);
    const fT = 350;
    let xT = 0;

    function IT() {
      return xT += 1, xT
    }

    function AT(TT, kT) {
      let cT = 0;
      for (const lT of TT) "ingredient" !== lT.kind && lT.oI === kT && (cT += lT.amount);
      return cT > 0 ? {
        idx: kT,
        amount: cT
      } : null
    }

    function CT(TT) {
      var kT, cT;
      let {
        anim: MT,
        onComplete: xT
      } = TT;
      const IT = null !== (kT = MT.delayMs) && void 0 !== kT ? kT : 0,
        AT = null !== (cT = MT.durationMs) && void 0 !== cT ? cT : fT,
        [CT, jT] = (0, lT.useState)(MT.from),
        [vT, tT] = (0, lT.useState)(0 === IT),
        [hT, NT] = (0, lT.useState)(!1),
        QT = (0, lT.useRef)(!1);
      return (0, lT.useEffect)((() => {
        let TT, kT;
        const cT = () => {
            QT.current = !0, tT(!0), TT = requestAnimationFrame((() => {
              kT = requestAnimationFrame((() => {
                jT({
                  x: MT.to.x,
                  y: MT.to.y
                }), NT(!0)
              }))
            }))
          },
          lT = QT.current ? 0 : IT;
        let KT;
        lT > 0 ? KT = setTimeout(cT, lT) : cT();
        const OT = setTimeout((() => {
          xT(MT.id)
        }), lT + AT + 50);
        return () => {
          clearTimeout(KT), cancelAnimationFrame(TT), cancelAnimationFrame(kT), clearTimeout(OT)
        }
      }), [MT.id, MT.to.x, MT.to.y, xT, IT, AT]), (0, yT.jsx)("div", {
        className: KT()("CraftItemFlyAnimation", {
          Ingredient: "ingredient" === MT.kind,
          Waiting: !vT,
          Arrived: hT
        }),
        style: {
          left: CT.x,
          top: CT.y,
          "--fly-duration": `${AT}ms`
        },
        children: (0, yT.jsx)(OT.d, {
          itemName: MT.itemName,
          amount: MT.amount
        })
      })
    }
  },
  36334: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => VT,
      g: () => uT
    });
    var lT = cT(71),
      MT = cT(2938),
      KT = cT(6563),
      OT = cT(2101),
      yT = cT(2462),
      fT = cT(8867),
      xT = cT(339),
      IT = cT(36),
      AT = cT(1461),
      CT = cT(47),
      jT = cT(1046),
      vT = cT.n(jT),
      tT = cT(328),
      hT = cT(36339),
      NT = cT(1921),
      QT = cT(1996),
      ST = cT(8719),
      DT = cT(1099);

    function aT(TT) {
      var kT, cT;
      let {
        slotIdx: KT
      } = TT;
      const OT = (0, QT.e)("hotbar", (TT => {
          var kT;
          return null !== (kT = TT.items[KT]) && void 0 !== kT ? kT : null
        })),
        fT = (0, QT.e)("hotbar", (TT => TT.ammo)),
        [IT, AT] = (0, lT.useState)(!1),
        CT = (0, lT.useRef)(null),
        [jT, tT] = (0, lT.useState)(null),
        [hT, aT] = (0, lT.useState)(null),
        FT = (0, yT.f)("maxAuraLevel"),
        rT = (0, MT.b)(),
        PT = (0, lT.useCallback)((() => {
          if (clearTimeout(CT.current), OT) {
            var TT, kT, cT, lT;
            const fT = OT.displayName,
              IT = [],
              AT = Array.isArray(fT) ? fT : [fT],
              CT = {
                fontStyle: null !== (TT = OT.attributes.customAttributes) && void 0 !== TT && TT.author ? "italic" : "normal"
              };
            for (const TT of AT) TT.str ? IT.push(TT) : IT.push({
              str: TT,
              style: CT
            });
            if (null !== (kT = OT.attributes.customAttributes) && void 0 !== kT && kT.enchantments) {
              IT.push(" ");
              const TT = Object.entries(OT.attributes.customAttributes.enchantments).sort(((TT, kT) => kT[1] - TT[1])),
                kT = OT.attributes.customAttributes.enchantmentData;
              for (const [cT, lT] of TT) {
                var MT, KT;
                const TT = null !== (MT = null === kT || void 0 === kT || null === (KT = kT[cT]) || void 0 === KT ? void 0 : KT.icon) && void 0 !== MT ? MT : `${cT} Enchantment`;
                var yT;
                if (lT < 4)
                  for (let kT = 0; kT < lT; kT++) IT.push({
                    icon: TT,
                    style: {
                      fontSize: "1.5em"
                    }
                  });
                else IT.push({
                  icon: TT,
                  style: {
                    fontSize: "1.5em"
                  }
                }), IT.push(null !== (yT = (0, xT.N)(lT)) && void 0 !== yT ? yT : lT.toString())
              }
            }
            tT(IT), aT(null !== (cT = null === (lT = OT.attributes.customAttributes) || void 0 === lT ? void 0 : lT.enchantmentTier) && void 0 !== cT ? cT : null)
          } else tT(null), aT(null);
          AT(!0), rT();
          const fT = null === OT || void 0 === OT ? void 0 : OT.attributes.customAttributes;
          void 0 === (null === fT || void 0 === fT ? void 0 : fT.shotsLeft) && (CT.current = setTimeout((() => {
            AT(!1)
          }), 2e3))
        }), [null === OT || void 0 === OT ? void 0 : OT.name, KT, null === OT || void 0 === OT ? void 0 : OT.instance, null === OT || void 0 === OT ? void 0 : OT.displayName]);
      (0, lT.useEffect)((() => (PT(), () => {
        clearTimeout(CT.current), AT(!1)
      })), [null === OT || void 0 === OT ? void 0 : OT.name, KT, null === OT || void 0 === OT ? void 0 : OT.instance, PT]);
      const wT = null === OT || void 0 === OT || null === (kT = OT.attributes.customAttributes) || void 0 === kT ? void 0 : kT.shotsLeft,
        mT = void 0 === wT ? null : (0, DT.jsx)("div", {
          className: "SelectedItemShotsLeft",
          children: `${wT}|${OT.requiresAmmo?`${fT}x${OT.clipSize}`:OT.clipSize}`
        }),
        bT = (0, ST.l)();
      return (0, DT.jsx)(DT.Fragment, {
        children: IT && OT && !bT.showing ? (0, DT.jsxs)("div", {
          className: vT()("SelectedItemName SmallTextBold", {
            NoAuraBar: 0 === FT,
            Enchanted: null !== hT
          }),
          style: {
            "--enchantmentColour": null !== (cT = xT.fb[hT]) && void 0 !== cT ? cT : xT.fb.None,
            "--duration": hT ? (0, xT.cb)(hT) + "s" : void 0
          },
          children: [hT && (0, DT.jsxs)("div", {
            className: "SelectedItemNameGradient",
            children: [(0, DT.jsx)(NT.b, {
              text: jT
            }), mT]
          }), (0, DT.jsxs)("div", {
            className: "SelectedItemNameNormal",
            children: [(0, DT.jsx)(NT.b, {
              text: jT
            }), mT]
          })]
        }) : null
      })
    }
    var FT = cT(36346),
      rT = cT(31),
      PT = cT(1953),
      wT = cT(617),
      mT = cT(2469),
      bT = cT(3343),
      zT = cT(3348);
    var JT = cT(1122),
      oT = cT(1117),
      HT = cT(2526);

    function eT() {
      return parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--touch-hotbar-ends-spare")) >= 0
    }
    var GT = cT(1486);
    const VT = (0, lT.memo)((function() {
      const [TT, kT] = (0, lT.useState)(0), cT = (0, yT.f)("useFullInventory"), OT = (0, yT.f)("highlightedHotbarSlots"), {
        isTouchScreen: fT,
        openInGameMenuName: xT
      } = (0, rT.n)(["isTouchScreen", "openInGameMenuName"]), CT = null !== xT && "inventory" !== xT, jT = (0, QT.h)("fullInventory") && "inventory" === xT, tT = function() {
        const TT = (0, JT.i)(((TT, kT) => `${TT}:${(0,oT.e)(TT,kT)?"portrait":"landscape"}`)),
          [kT, cT] = (0, lT.useState)(eT);
        return (0, lT.useLayoutEffect)((() => {
          cT(eT())
        }), [TT]), (0, AT.g)(HT.c, (() => {
          cT(eT())
        })), kT
      }(), NT = fT && !tT;
      ! function(TT, kT, cT) {
        (0, lT.useLayoutEffect)((() => {
          const lT = document.documentElement.classList;
          return TT && (lT.add("TouchHotbar"), lT.toggle("TouchHotbarKeysAbove", kT), lT.toggle("TouchHotbarHasBag", cT)), (0, bT.g)(), IT.k.nt(zT.c), () => {
            lT.remove("TouchHotbar", "TouchHotbarKeysAbove", "TouchHotbarHasBag"), (0, bT.g)(), IT.k.nt(zT.c)
          }
        }), [TT, kT, cT])
      }(fT, NT, cT);
      const [ST, mT] = (0, KT.e)("changedHotbarUsingNumkeys", !0), GT = (0, QT.e)("hotbar", (TT => TT.selectedSlot)), VT = null !== GT && void 0 !== GT ? GT : TT, XT = (0, MT.b)(), dT = (0, lT.useRef)(null), RT = (0, AT.i)("pointerLockUpdate", Boolean(document.pointerLockElement));
      (0, AT.g)("inventoryDraggedItemUpdated", (TT => {
        dT.current = TT, XT()
      })), (0, QT.b)("hotbarScrolled", (TT => {
        null === GT && UT(TT)
      })), (0, QT.b)("hotbarSlotRequested", (TT => {
        gT(TT), mT(!1)
      })), (0, QT.b)("numberKeyPressed", (() => {
        mT(!1)
      })), (0, QT.b)("hotbarDropRequested", (TT => {
        const kT = PT.gameBridge.latest("hotbar").items[VT];
        if (kT) {
          var cT;
          const lT = TT && null !== (cT = kT.amount) && void 0 !== cT ? cT : 1;
          PT.gameBridge.send("removeInventoryItem", {
            slot: VT,
            amount: lT,
            drop: !0
          })
        }
      }));
      const gT = TT => {
          PT.gameBridge.send("selectHotbarSlot", TT), kT(TT)
        },
        UT = TT => {
          gT((VT + TT + wT.u) % wT.u)
        };
      let YT, BT = null,
        WT = null,
        nT = TT => TT => {},
        pT = TT => kT => {
          gT(TT)
        },
        iT = TT => TT => {},
        qT = [];
      if (jT) {
        var sT;
        const TT = dT.current;
        if (null === TT || void 0 === TT || !TT.setHovered) return (0, DT.jsx)("div", {
          className: vT()("HotBarContainer", {
            Touch: fT,
            KeysAbove: NT
          }),
          children: (0, DT.jsx)("div", {
            className: "HotBar"
          })
        });
        BT = TT.draggedInfo, WT = TT.specialItemInfo, nT = TT.setHovered, pT = TT.pointerDown, iT = TT.pointerUp, YT = TT.variation, qT = null !== (sT = TT.craftFlyAnims) && void 0 !== sT ? sT : []
      }
      return (0, DT.jsxs)("div", {
        className: vT()("HotBarContainer", {
          Touch: fT,
          PopupOpen: fT && CT,
          KeysAbove: NT
        }),
        children: [(0, DT.jsxs)("div", {
          className: vT()("HotBar", {
            HoverDisabled: RT
          }),
          children: [fT && (0, DT.jsxs)(DT.Fragment, {
            children: [(0, DT.jsx)(ZT, {
              useFullInventory: cT,
              inventoryOpen: jT
            }), (0, DT.jsx)(ET, {
              direction: "Previous",
              onPress: () => {
                UT(-1)
              }
            })]
          }), !fT && (0, DT.jsxs)(DT.Fragment, {
            children: [(0, DT.jsx)(uT, {}), (0, DT.jsx)("div", {
              className: "HotBarFiller"
            })]
          }), (0, DT.jsx)("div", {
            className: "HotBarGameItemsContainer",
            children: new Array(10).fill(0).map(((TT, kT) => (0, DT.jsx)(hT.d, {
              idx: kT,
              draggedInfo: BT,
              specialItemInfo: WT,
              craftFlyHoldbackInfo: (0, FT.f)(qT, kT),
              setHovered: nT(kT),
              pointerDown: pT(kT),
              pointerUp: iT(kT),
              variation: YT,
              isSelected: kT === VT,
              hotbarHighlighted: !0 === (null === OT || void 0 === OT ? void 0 : OT.includes(kT)),
              hoverDisabled: RT,
              showNumber: ST && !fT
            }, kT)))
          }), fT && (0, DT.jsx)(ET, {
            direction: "Next",
            onPress: () => {
              UT(1)
            }
          }), !fT && (0, DT.jsxs)(DT.Fragment, {
            children: [(0, DT.jsx)("div", {
              className: "HotBarFiller"
            }), (0, DT.jsx)("div", {
              className: vT()("HotBarItem ButtonHotBarItem", {
                HiddenButtonHotBarItem: !cT
              }),
              onPointerDown: () => {
                IT.k.nt("toggleMenu", "inventory")
              },
              children: (0, DT.jsx)(LT, {})
            })]
          })]
        }), (0, DT.jsx)(aT, {
          slotIdx: VT
        })]
      })
    }));

    function ET(TT) {
      let {
        direction: kT,
        onPress: cT
      } = TT;
      return (0, DT.jsx)("div", {
        className: vT()("HotBarArrow", kT),
        ...GT.g,
        children: (0, DT.jsx)(OT.e, {
          icon: "Previous" === kT ? "caret-left" : "caret-right",
          touchPressOn: "pointerdown",
          onClick: cT
        })
      })
    }
    const ZT = (0, lT.memo)((function(TT) {
        let {
          useFullInventory: kT,
          inventoryOpen: cT
        } = TT;
        const MT = (0, yT.f)("maxAuraLevel"),
          KT = (0, lT.useRef)(null);
        return function(TT, kT, cT) {
          (0, lT.useLayoutEffect)((() => (document.documentElement.classList.toggle("TouchHotbarHasShop", kT), () => {
            document.documentElement.classList.remove("TouchHotbarHasShop")
          })), [kT]), (0, lT.useLayoutEffect)((() => {
            const kT = TT.current.closest(".BottomMiddleElements");
            return kT.classList.toggle("TouchInventoryOpen", cT), () => {
              kT.classList.remove("TouchInventoryOpen")
            }
          }), [TT, cT])
        }(KT, (0, fT.c)(), cT), (0, DT.jsxs)("div", {
          ref: KT,
          className: vT()("TouchInventoryKeys", {
            NoAuraBar: 0 === MT,
            InventoryOpen: cT
          }),
          children: [(0, DT.jsx)(uT, {
            touchKey: !0
          }), (0, DT.jsx)("div", {
            className: vT()("TouchInventoryKey BagKey", {
              Hidden: !kT
            }),
            ...GT.g,
            children: (0, DT.jsx)(LT, {
              touchKey: !0
            })
          })]
        })
      })),
      uT = (0, lT.memo)((function(TT) {
        let {
          touchKey: kT = !1
        } = TT;
        const cT = (0, fT.c)();
        return (0, DT.jsx)("div", {
          className: kT ? vT()("TouchInventoryKey ShopKey", {
            Hidden: !cT
          }) : vT()("HotBarItem ButtonHotBarItem", {
            HiddenButtonHotBarItem: !cT
          }),
          ...kT ? GT.g : {},
          children: (0, DT.jsx)(OT.e, {
            icon: (0, xT.Yb)(),
            noaAction: "OpenShop",
            touchPressOn: "pointerdown",
            onClick: () => {
              cT && rT.e.set({
                openEverythingMenuName: tT.o.SHOP
              })
            },
            showTouchTutorialPubSubId: "showShopTouchTutorial",
            showRedDotPubSubId: "showShopIconRedDot",
            touchIconPosition: "topleft"
          })
        })
      }));

    function XT(TT) {
      let {
        player: kT
      } = TT;
      return kT.some((TT => null !== TT && xT.Uc.includes(TT.name)))
    }

    function dT(TT) {
      TT.creative || CT.e.getItem("LogInInventoryRedDotTutorialComplete") || (XT(TT) ? (IT.k.nt("RedDotOpenInventoryIcon", !0), IT.k.nt("TouchTutorialOpenInventoryIcon", !0)) : (IT.k.nt("RedDotOpenInventoryIcon", !1), IT.k.nt("TouchTutorialOpenInventoryIcon", !1)))
    }
    const LT = (0, lT.memo)((function(TT) {
      let {
        touchKey: kT = !1
      } = TT;
      const {
        backpackPointerRequested: cT
      } = (0, rT.n)(["backpackPointerRequested"]);
      (0, lT.useEffect)((() => {
        dT(PT.gameBridge.latest("inventory"))
      }), []), (0, QT.b)("inventory", dT);
      const MT = (0, mT.m)();
      return (0, AT.g)("toggleMenu", (TT => {
        MT.shown && (null !== TT && void 0 !== TT && TT.startsWith("inventory") && XT(PT.gameBridge.latest("inventory")) ? (CT.e.setItem("LogInInventoryRedDotTutorialComplete", !0), IT.k.nt("RedDotOpenInventoryIcon", !1), IT.k.nt("TouchTutorialOpenInventoryIcon", !1)) : "shop" === TT && IT.k.nt("showShopTouchTutorial", !1))
      })), kT ? (0, DT.jsx)(OT.e, {
        icon: "backpack",
        noaAction: "OpenInventory",
        touchPressOn: "pointerdown",
        onClick: () => {
          IT.k.nt("toggleMenu", "inventory")
        },
        showRedDotPubSubId: "RedDotOpenInventoryIcon",
        showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
        touchTutorialRequested: cT,
        touchIconPosition: "topleft"
      }) : (0, DT.jsx)("div", {
        className: "HotBarButton",
        onPointerDown: () => {
          IT.k.nt("toggleMenu", "inventory")
        },
        children: (0, DT.jsx)(OT.e, {
          icon: "backpack",
          noaAction: "OpenInventory",
          onPointerDown: TT => {
            IT.k.nt("toggleMenu", "inventory"), TT.stopPropagation()
          },
          showRedDotPubSubId: "RedDotOpenInventoryIcon",
          showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
          touchTutorialRequested: cT,
          touchIconPosition: "topleft"
        })
      })
    }))
  },
  36339: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => hT,
      g: () => vT
    });
    var lT = cT(71),
      MT = cT(1046),
      KT = cT.n(MT),
      OT = cT(1947),
      yT = cT(1943),
      fT = cT(1953),
      xT = cT(1996),
      IT = cT(36343),
      AT = cT(9375),
      CT = cT(1409),
      jT = cT(1099);
    const vT = (TT, kT, cT) => {
      let lT = kT,
        MT = !1;
      for (const KT of cT)(null === KT || void 0 === KT ? void 0 : KT.idx) === TT && (MT = !0, lT > 0 && (lT -= KT.amount));
      return {
        displayedAmt: lT,
        shown: !MT || lT > 0
      }
    };
    const tT = TT => {
        let {
          idx: kT
        } = TT;
        return (0, CT.s)() ? null : (0, jT.jsx)("div", {
          className: "HotbarItemNumber SmallTextBold",
          children: kT < 9 ? kT + 1 : 0
        })
      },
      hT = (0, lT.memo)((function(TT) {
        var kT, cT, lT;
        let {
          idx: MT,
          setHovered: CT,
          pointerDown: hT,
          pointerUp: NT,
          draggedInfo: QT,
          specialItemInfo: ST,
          craftFlyHoldbackInfo: DT,
          defaultIconB64: aT = null,
          variation: FT,
          isSelected: rT = !1,
          hotbarHighlighted: PT = !1,
          hoverDisabled: wT = !1,
          showNumber: mT = !1,
          showNewDot: bT = !1
        } = TT;
        const zT = (0, xT.e)("inventory", (TT => MT === IT.g ? null : (0, AT.i)(TT, MT)));
        let JT, oT, HT, eT;
        if (MT === IT.g) ST && (JT = ST.name, HT = ST.amount, eT = ST.attributes);
        else if (zT) {
          var GT;
          JT = zT.name, oT = zT.icon, HT = null !== (GT = zT.amount) && void 0 !== GT ? GT : 0, eT = zT.attributes
        }
        const VT = null === (kT = eT) || void 0 === kT || null === (cT = kT.customAttributes) || void 0 === cT ? void 0 : cT.enchantmentTier,
          ET = (0, OT.k)(eT),
          {
            displayedAmt: ZT,
            shown: uT
          } = vT(MT, HT, [QT, ST, DT]),
          XT = JT && uT,
          dT = void 0 !== FT && function(TT, kT) {
            const {
              enchantable: cT,
              salvageable: lT
            } = fT.gameBridge.latest("stationItems");
            return "Enchanting Table" === TT ? !0 === cT[kT] : "Salvaging Table" === TT && !0 === lT[kT]
          }(FT, JT);
        return (0, jT.jsxs)("div", {
          className: KT()("InvenItem", {
            Highlighted: XT && dT,
            Selected: rT,
            HotbarHighlighted: PT,
            HoverDisabled: wT
          }),
          onPointerEnter: () => {
            null === CT || void 0 === CT || CT(!0)
          },
          onPointerLeave: () => {
            null === CT || void 0 === CT || CT(!1)
          },
          onPointerDown: hT,
          onPointerUp: NT,
          "data-inven-idx": MT,
          children: [XT && (0, jT.jsx)(yT.d, {
            itemName: null !== (lT = oT) && void 0 !== lT ? lT : JT,
            amount: ZT,
            enchantmentTier: VT,
            bar: ET
          }), XT && bT && (0, jT.jsx)("div", {
            className: "InvenItemNewDot"
          }), mT && (0, jT.jsx)(tT, {
            idx: MT
          }), aT && !XT && (0, jT.jsx)("div", {
            className: "InvenItemUnfilled",
            style: {
              backgroundImage: `url(${aT})`
            }
          })]
        })
      }))
  },
  9362: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => KT
    });
    var lT = cT(339),
      MT = cT(9369);

    function KT(TT, kT, cT) {
      const KT = Object.entries(kT).sort(((TT, kT) => kT[1] - TT[1])),
        OT = (0, lT.hb)(TT);
      OT.push(TT ? "\n\n" : "\n");
      for (const [MT, vT] of KT) {
        var yT, fT, xT;
        const TT = null !== (yT = null === cT || void 0 === cT || null === (fT = cT[MT]) || void 0 === fT ? void 0 : fT.icon) && void 0 !== yT ? yT : `${MT} Enchantment`;
        OT.push({
          icon: TT,
          style: {
            fontSize: "1.5rem"
          }
        }), OT.push({
          str: `${MT} ${null!==(xT=(0,lT.N)(vT))&&void 0!==xT?xT:vT}\n`
        })
      }
      OT.push({
        str: "\n"
      });
      for (const [lT, vT] of KT) {
        var IT, AT, CT, jT;
        const TT = null !== (IT = null === cT || void 0 === cT || null === (AT = cT[lT]) || void 0 === AT ? void 0 : AT.icon) && void 0 !== IT ? IT : `${lT} Enchantment`,
          kT = null !== (CT = null === cT || void 0 === cT || null === (jT = cT[lT]) || void 0 === jT ? void 0 : jT.description) && void 0 !== CT ? CT : (0, MT.l)(lT);
        OT.push({
          icon: TT,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), OT.push({
          str: kT,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), OT.push({
          str: "\n"
        })
      }
      return OT
    }
  },
  36343: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => lT,
      g: () => MT
    });
    const lT = -1,
      MT = -2
  },
  9375: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => xT,
      d: () => QT,
      g: () => hT,
      i: () => fT,
      m: () => NT,
      o: () => IT,
      s: () => CT,
      v: () => tT,
      y: () => AT
    });
    var lT = cT(328),
      MT = cT(617),
      KT = cT(339),
      OT = cT(4224),
      yT = cT(9362);

    function fT(TT, kT) {
      var cT;
      let {
        player: lT,
        chestOrCreative: MT
      } = TT;
      var KT;
      return kT < lT.length ? null !== (KT = lT[kT]) && void 0 !== KT ? KT : null : null !== (cT = MT[kT - lT.length]) && void 0 !== cT ? cT : null
    }

    function xT(TT) {
      var kT;
      return null !== (kT = TT.amount) && void 0 !== kT ? kT : 0
    }

    function IT(TT) {
      return 0 === TT.button || void 0 === TT.button
    }

    function AT(TT) {
      return !!TT.shiftKey
    }

    function CT(TT) {
      return "touches" in TT || "touch" === TT.pointerType || "pen" === TT.pointerType
    }
    const jT = new Set,
      vT = 50;

    function tT(TT, kT) {
      var cT;
      const lT = null === (cT = TT[kT]) || void 0 === cT ? void 0 : cT.displayName;
      return (0, MT.R)(lT) ? "string" !== typeof kT ? "" : (!jT.has(kT) && jT.size < vT && (jT.add(kT), console.warn(`No item called "${kT}", so its hover shows the name as given`)), kT) : lT
    }

    function hT(TT, kT, cT) {
      var fT, xT, IT, AT, CT, jT, vT, hT, NT, QT, ST, DT, aT, FT;
      const rT = TT.attributes,
        PT = null !== (fT = null === (xT = kT[TT.name]) || void 0 === xT ? void 0 : xT.rootName) && void 0 !== fT ? fT : TT.name,
        wT = null !== (IT = null !== (AT = rT.customDisplayName) && void 0 !== AT ? AT : null === (CT = kT[TT.name]) || void 0 === CT ? void 0 : CT.displayName) && void 0 !== IT ? IT : tT(kT, PT);
      let mT = wT;
      const bT = null === (jT = rT.customAttributes) || void 0 === jT ? void 0 : jT.enchantmentTier;
      bT && (mT = (0, KT.hb)(wT, {
        colour: KT.fb[bT]
      }));
      const zT = null !== (vT = null !== (hT = null !== (NT = function(TT, kT) {
        var cT;
        if (void 0 === TT || null !== (cT = kT.customAttributes) && void 0 !== cT && cT.author) return TT;
        const MT = (0, lT.Pb)(TT);
        return MT.every((TT => "string" === typeof TT)) ? TT : MT.map((TT => "string" === typeof TT ? TT : {
          icon: TT.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(rT.customDescription, rT)) && void 0 !== NT ? NT : null === (QT = kT[TT.name]) || void 0 === QT ? void 0 : QT.description) && void 0 !== hT ? hT : null === (ST = kT[PT]) || void 0 === ST ? void 0 : ST.description) && void 0 !== vT ? vT : "";
      let JT = zT;
      if (null !== (DT = rT.customAttributes) && void 0 !== DT && DT.enchantments) JT = (0, yT.c)(zT, rT.customAttributes.enchantments, rT.customAttributes.enchantmentData);
      else if (cT[PT]) JT = (0, KT.hb)(zT), JT.push({
        str: "\n"
      }), JT.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (aT = rT.customAttributes) && void 0 !== aT && aT.mobSettings) {
        var oT, HT;
        const TT = rT.customAttributes.mobSettings;
        var eT, GT;
        if (JT = [], (0, MT.R)(rT.customAttributes.health) || (JT.push({
            str: "\n"
          }), JT.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), JT.push({
            str: " "
          }), JT.push({
            str: rT.customAttributes.health.toString()
          }), (0, MT.R)(TT.maxHealth) || (JT.push({
            str: "/"
          }), JT.push({
            str: TT.maxHealth.toString()
          }))), !(0, MT.R)(TT.attackDamage) && TT.attackDamage > 0 && (JT.push({
            str: "\n"
          }), JT.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), JT.push({
            str: " "
          }), JT.push({
            str: TT.attackDamage.toString()
          })), !(0, MT.R)(TT.secondaryAttackDamage) && TT.secondaryAttackDamage > 0 && (JT.push({
            str: "\n"
          }), JT.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), JT.push({
            str: " "
          }), JT.push({
            str: TT.secondaryAttackDamage.toString()
          })), (0, MT.R)(TT.baseRunningSpeed) || (JT.push({
            str: "\n"
          }), JT.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), JT.push({
            str: " "
          }), JT.push({
            str: TT.baseRunningSpeed.toFixed(2)
          })), "Saddled" === TT.metaInfo) JT.push({
          str: "\n"
        }), JT.push({
          str: {
            translationKey: "general:has"
          }
        }), JT.push({
          str: " "
        }), JT.push({
          icon: null !== (eT = null === (GT = TT.tameInfo) || void 0 === GT ? void 0 : GT.saddleItemName) && void 0 !== eT ? eT : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (JT.push({
            str: "\n"
          }), JT.push({
            str: "\n"
          }), TT.petInfo && null !== (oT = TT.tameInfo) && void 0 !== oT && oT.supportsFriendship) {
          const kT = OT.d.getIconsFromFriendshipPoints(TT.petInfo.friendshipPoints);
          for (const TT of kT) JT.push({
            icon: TT,
            style: {
              fontSize: "1.5em"
            }
          });
          JT.push({
            str: "\n"
          });
          const cT = OT.d.getMobHungerLevel(TT.petInfo.lastFedAt);
          for (const TT of OT.d.hungerLevelIcons[cT]) JT.push({
            icon: TT,
            style: {
              fontSize: "1.5em"
            }
          });
          JT.push({
            str: " "
          }), JT.push({
            str: OT.d.hungerLevelTranslations[cT],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (TT.tameInfo && null !== (HT = TT.tameInfo) && void 0 !== HT && HT.supportsFriendship) {
          var VT, ET;
          let kT = null !== (VT = TT.tameInfo.likedFoods) && void 0 !== VT ? VT : [];
          JT.push({
            str: "\n"
          }), JT.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: OT.d.feedTextColours[OT.d.MobFoodType.Superliked]
            }
          }), JT.push({
            str: " "
          }), null !== (ET = TT.petInfo) && void 0 !== ET && ET.superlikedFoodKnown ? (JT.push({
            icon: TT.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), kT = kT.filter((kT => kT !== TT.petInfo.superlikedFood))) : JT.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), JT.push({
            str: "\n"
          }), JT.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: OT.d.feedTextColours[OT.d.MobFoodType.Liked]
            }
          }), JT.push({
            str: " "
          });
          for (const TT of kT) JT.push({
            icon: TT,
            style: {
              fontSize: "1.5em"
            }
          });
          JT.push({
            str: "\n"
          }), JT.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: OT.d.feedTextColours[OT.d.MobFoodType.Neutral]
            }
          }), JT.push({
            str: " "
          });
          for (const cT of null !== (ZT = TT.tameInfo.neutralFoods) && void 0 !== ZT ? ZT : []) {
            var ZT;
            JT.push({
              icon: cT,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          JT.push({
            str: "\n"
          }), JT.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: OT.d.feedTextColours[OT.d.MobFoodType.Disliked]
            }
          }), JT.push({
            str: " "
          });
          for (const cT of null !== (uT = TT.tameInfo.dislikedFoods) && void 0 !== uT ? uT : []) {
            var uT;
            JT.push({
              icon: cT,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        JT.length > 0 ? (JT.shift(), JT.unshift(...(0, KT.hb)(zT))) : JT = (0, KT.hb)(zT)
      }
      return {
        name: mT,
        desc: JT,
        fontStyle: null !== (FT = rT.customAttributes) && void 0 !== FT && FT.author ? "italic" : "normal"
      }
    }

    function NT(TT, kT, cT, lT) {
      const MT = fT(TT, cT),
        KT = fT(TT, lT);
      if (!MT) return !1;
      const OT = kT[MT.name].armourReduction,
        yT = kT[KT.name].armourReduction;
      if (yT === OT) {
        var xT, IT, AT, CT;
        const TT = null !== (xT = null === (IT = MT.attributes.customAttributes) || void 0 === IT ? void 0 : IT.enchantmentTier) && void 0 !== xT ? xT : "Tier 0",
          kT = null !== (AT = null === (CT = KT.attributes.customAttributes) || void 0 === CT ? void 0 : CT.enchantmentTier) && void 0 !== AT ? AT : "Tier 0";
        return parseInt(TT.replace("Tier ", "")) >= parseInt(kT.replace("Tier ", ""))
      }
      return OT > yT
    }

    function QT(TT) {
      let kT;
      if ("number" === typeof TT) {
        const cT = document.querySelector(`[data-inven-idx="${TT}"]`);
        if (!cT) return null;
        kT = cT.getBoundingClientRect()
      } else kT = TT.getBoundingClientRect();
      return {
        x: kT.left + kT.width / 2,
        y: kT.top + kT.height / 2
      }
    }
  },
  9250: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => jT,
      f: () => vT,
      i: () => tT
    });
    var lT = cT(1470),
      MT = cT(71),
      KT = cT(1316),
      OT = cT(4515),
      yT = cT(2395),
      fT = cT(1195),
      xT = cT(118),
      IT = cT(1996),
      AT = cT(1348),
      CT = cT(1099);

    function jT(TT) {
      let {
        show: kT,
        onClose: cT
      } = TT;
      const {
        requestedGameNameWithVariation: lT,
        lobbyName: MT,
        shownLobbyName: KT
      } = (0, IT.h)("connectedGame"), fT = (0, yT.b)(lT, MT, !1);
      return xT.featureFlags.canUseInviteLinks && (0, CT.jsx)(OT.c, {
        show: kT,
        close: cT,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, CT.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, CT.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, CT.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, CT.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === fT ? (0, CT.jsx)(AT.d, {}) : fT, (0, CT.jsx)("br", {}), "Lobby Name: ", KT, (0, CT.jsx)("br", {}), (0, CT.jsx)("br", {}), (0, CT.jsx)("br", {}), (0, CT.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, CT.jsx)(vT, {})]
        })
      })
    }

    function vT() {
      var TT;
      const {
        t: kT
      } = (0, fT.B)(), cT = null !== (TT = tT(xT.featureFlags.canUseInviteLinks)) && void 0 !== TT ? TT : "Loading Link...", [KT, OT] = (0, MT.useState)(0), [yT, IT] = (0, MT.useReducer)((TT => TT + 1), 0);
      return (0, MT.useEffect)((() => {
        const TT = setTimeout((() => {
          IT()
        }), 1100);
        return () => {
          clearTimeout(TT)
        }
      }), [KT]), xT.featureFlags.canUseInviteLinks && (0, CT.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, CT.jsx)("div", {
          className: "InviteLinkInner",
          children: cT
        }), (0, CT.jsx)(lT.e, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(cT).catch((TT => {
              console.error("Failed to copy invite link:", TT)
            })), OT(Date.now())
          },
          disabled: Date.now() - KT < 1e3,
          children: Date.now() - KT < 1e3 ? kT("general:copied") : kT("general:copy")
        })]
      })
    }

    function tT(TT) {
      const [kT, cT] = (0, MT.useState)(null);
      return (0, MT.useEffect)((() => {
        if (!TT) return;
        let kT = !0;
        return (0, KT.u)().then((TT => {
          kT && cT(TT)
        })).catch((TT => {
          console.error("Failed to get invite link:", TT)
        })), () => {
          kT = !1
        }
      }), [TT]), kT
    }
  },
  36825: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => wT
    });
    var lT = cT(71),
      MT = cT(2462),
      KT = cT(1921),
      OT = cT(602),
      yT = cT(36),
      fT = cT(1046),
      xT = cT.n(fT),
      IT = cT(36365),
      AT = cT(2606),
      CT = cT(36369),
      jT = cT(2633),
      vT = cT(2611),
      tT = cT(3560),
      hT = cT(36374),
      NT = cT(31),
      QT = cT(2056),
      ST = cT(2408),
      DT = cT(1226),
      aT = cT(4864),
      FT = cT(1996),
      rT = cT(118),
      PT = cT(1099);
    const wT = (0, lT.memo)((function() {
      const TT = (0, MT.f)("lobbyLeaderboardInfo"),
        kT = (0, FT.h)("players"),
        cT = (0, FT.h)("lobbyLeaderboardRows"),
        yT = (0, FT.h)("hiddenPlayerNames"),
        fT = (0, lT.useRef)(null),
        [xT, IT] = (0, lT.useReducer)((TT => TT + 1), 0);
      return (0, lT.useEffect)((() => (0, QT.d)((() => {
        IT()
      }))), []), (0, PT.jsx)("div", {
        className: "LobbyLeaderboardContainer Menu",
        children: (0, PT.jsx)("div", {
          className: "MenuBody",
          children: function() {
            if (!TT) return (0, PT.jsx)(PT.Fragment, {});
            const lT = JSON.parse(JSON.stringify(TT)),
              MT = [...kT.ids],
              xT = {},
              IT = {};
            for (const TT of MT) {
              var AT, jT;
              xT[TT] = null === (AT = cT[TT]) || void 0 === AT ? void 0 : AT.colour;
              const kT = null === (jT = cT[TT]) || void 0 === jT ? void 0 : jT.values;
              kT && (IT[TT] = {
                ...kT
              })
            }
            const vT = Object.keys(lT);
            vT.sort(((TT, kT) => lT[TT].sortPriority - lT[kT].sortPriority)), MT.sort(((TT, kT) => {
              if (!IT[TT] || !IT[kT]) return 0;
              for (const cT of vT) {
                const MT = IT[TT][cT],
                  KT = IT[kT][cT];
                let OT = 0;
                if ("string" == typeof MT && "string" == typeof KT ? OT = MT.localeCompare(KT) : "number" == typeof MT && "number" == typeof KT ? OT = MT - KT : "number" == typeof MT && "string" == typeof KT ? OT = 1 : "string" == typeof MT && "number" == typeof KT && (OT = -1), OT) return OT * ("ascending" === lT[cT].sortOrder ? 1 : -1)
              }
              return 0
            }));
            for (const TT of MT) {
              var tT, hT, NT;
              const {
                name: lT,
                ranks: MT,
                cosmetics: KT
              } = kT.byId[TT], yT = [], fT = null !== (tT = null === (hT = cT[TT]) || void 0 === hT || null === (NT = hT.tags) || void 0 === NT ? void 0 : NT.flatMap((TT => 0 === TT.length ? TT : [...TT, String.fromCharCode(8198)]))) && void 0 !== tT ? tT : [];
              yT.push(...fT), yT.push(...(0, DT.y)(MT, lT, (null === KT || void 0 === KT ? void 0 : KT.nameColour) === OT.e || null === KT || void 0 === KT ? void 0 : KT.nameColour)), IT[TT] ??= {}, IT[TT].name = yT
            }

            function FT(TT, cT) {
              if (IT[TT] && void 0 !== IT[TT][cT]) {
                if ("name" === cT) {
                  const {
                    name: lT,
                    cosmetics: MT
                  } = kT.byId[TT];
                  return (0, PT.jsxs)("div", {
                    className: "PlayerPfpAndName",
                    children: [MT && (0, PT.jsx)(ST.e, {
                      cosmetics: MT
                    }), " ", (0, PT.jsx)(KT.b, {
                      text: IT[TT][cT],
                      friendBadgeFor: (0, QT.g)(lT, yT) ? lT : void 0
                    })]
                  })
                }
                return (0, PT.jsx)(KT.b, {
                  text: IT[TT][cT]
                })
              }
              return ""
            }
            const rT = Object.keys(lT).filter((TT => !0 !== lT[TT].hidden)).map((TT => {
              var kT;
              return {
                key: TT,
                header: (0, PT.jsx)(KT.b, {
                  text: null !== (kT = lT[TT].displayName) && void 0 !== kT ? kT : ""
                })
              }
            }));
            return (0, PT.jsx)("div", {
              ref: fT,
              className: "LobbyLeaderboard",
              children: (0, PT.jsx)(aT.d, {
                columns: rT,
                rows: MT,
                getRowKey: TT => TT,
                renderRow: TT => {
                  const cT = TT !== kT.localId;
                  return (0, PT.jsx)(mT, {
                    playerId: TT,
                    playerName: kT.byId[TT].name,
                    isOtherPlayer: cT,
                    opensProfileCard: (0, CT.g)(cT, kT.byId[TT].name, yT),
                    lobbyLeaderboardInfo: lT,
                    getPlayerValue: FT,
                    playerColors: xT
                  })
                }
              })
            })
          }()
        })
      })
    }));

    function mT(TT) {
      let {
        playerId: kT,
        playerName: cT,
        isOtherPlayer: MT,
        opensProfileCard: KT,
        lobbyLeaderboardInfo: OT,
        getPlayerValue: fT,
        playerColors: QT
      } = TT;
      const ST = (0, lT.useRef)(null);
      (0, lT.useEffect)((() => () => {
        AT.b.closeIfOwner(ST)
      }), []);
      const DT = {
          icon: "flag",
          text: "Report",
          onClick: () => {
            yT.k.nt("OpenReportMenu", {
              playerEId: kT,
              playerName: cT,
              vI: null,
              serverChatMsgId: null
            })
          }
        },
        aT = () => ({
          ...(0, CT.c)(kT, cT),
          showLocation: !1,
          status: null,
          extraActions: [DT],
          moderationActions: null === cT ? [] : (0, hT.b)(cT),
          friendRequestSource: "leaderboard"
        });
      return (0, PT.jsxs)("tr", {
        ref: ST,
        "data-pad-focusable": KT || void 0,
        [AT.c]: KT || void 0,
        onClick: KT ? () => {
          var TT;
          AT.b.toggle(ST, {
            ...aT(),
            anchor: null !== (TT = ST.current.querySelector(".PlayerPfpAndName")) && void 0 !== TT ? TT : ST.current
          })
        } : void 0,
        onContextMenu: KT ? TT => {
          (0, jT.h)(ST, TT, aT(), NT.e.get("isTouchScreen"))
        } : void 0,
        onPointerDown: KT ? TT => {
          (0, vT.b)(TT, (() => (0, CT.c)(kT, cT).playerSocialPreview))
        } : void 0,
        children: [Object.keys(OT).map((TT => !0 === OT[TT].hidden ? null : (0, PT.jsxs)("td", {
          className: xT()("LobbyLeaderboardValue SmallTextBold", {
            LobbyLeaderboardValueHighlighted: !MT
          }),
          children: [(0, PT.jsx)("div", {
            className: "LobbyLeaderboardValueText",
            children: fT(kT, TT)
          }), (0, PT.jsx)("div", {
            className: "LobbyLeaderboardValueBg",
            style: {
              backgroundColor: QT[kT]
            }
          })]
        }, TT))), MT && !KT && (0, PT.jsx)(IT.c, {
          className: "LobbyLeaderboardRowFloatingActions",
          triggerElementRef: ST,
          options: [{
            icon: DT.icon,
            text: DT.text,
            onPointerDown: DT.onClick
          }, ...null === cT || rT.featureFlags.useSocialFeatures ? [] : (0, tT.e)(null, cT)]
        })]
      })
    }
  },
  36374: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => IT
    });
    var lT = cT(1974),
      MT = cT(2485),
      KT = cT(36383);
    const OT = {
      kick: "lobbyManageEntry:kicked",
      ban: "lobbyManageEntry:banned",
      unban: "lobbyManageEntry:unbanned"
    };

    function yT(TT, kT) {
      return async () => function(TT, kT, cT) {
        return null === kT ? {
          message: {
            key: "lobbyManageEntry:noAnswer"
          },
          next: null
        } : kT.ok ? {
          message: {
            key: OT[TT.type]
          },
          next: cT
        } : {
          message: {
            fromServer: kT.message
          },
          next: null
        }
      }(TT, await (0, KT.e)(TT), kT())
    }

    function fT(TT) {
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
        run: yT({
          type: "ban",
          name: TT
        }, (() => function(TT) {
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
            run: yT({
              type: "unban",
              name: TT
            }, (() => null))
          }
        }(TT)))
      }
    }

    function xT(TT, kT) {
      if (null === TT) return [];
      const cT = [],
        lT = function(TT, kT) {
          var cT, lT;
          return null !== (cT = null !== (lT = TT.here.find((TT => TT.name === kT))) && void 0 !== lT ? lT : TT.away.find((TT => TT.name === kT))) && void 0 !== cT ? cT : null
        }(TT, kT);
      var KT, OT;
      return null !== lT && void 0 !== lT && lT.can.kick && cT.push((KT = kT, OT = lT.can.ban, {
        kind: "act",
        icon: "person-falling-burst",
        text: "lobbyManageEntry:kick",
        destructive: !1,
        confirm: null,
        analyticsClick: {
          id: "lobby_manage.kick",
          value: "profile_card"
        },
        run: yT({
          type: "kick",
          name: KT
        }, (() => OT ? fT(KT) : null))
      })), null !== lT && void 0 !== lT && lT.can.ban && cT.push(fT(kT)), cT.push({
        kind: "leave",
        icon: "users-gear",
        text: "lobbyManageEntry:manageLobby",
        destructive: !1,
        onClick: () => {
          (0, MT.g)({
            page: "players",
            focusName: kT,
            source: "profile_card"
          })
        }
      }), cT
    }

    function IT(TT) {
      var kT;
      return xT(null !== (kT = lT.b.get("lobbyManage")) && void 0 !== kT ? kT : null, TT)
    }
  },
  36383: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => IT,
      e: () => fT
    });
    var lT = cT(1497),
      MT = cT(1974),
      KT = cT(1953);
    const OT = 1e4;
    let yT = 0;

    function fT(TT) {
      const kT = ++yT;
      return new Promise((cT => {
        const yT = kT => {
            fT(), clearTimeout(xT), !1 === (null === kT || void 0 === kT ? void 0 : kT.ok) && (0, lT.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: TT.type
            }), cT(kT)
          },
          fT = MT.b.subscribe("lobbyManage", (TT => {
            const cT = function(TT, kT) {
              var cT;
              return null !== (cT = null === TT || void 0 === TT ? void 0 : TT.results.find((TT => TT.requestId === kT))) && void 0 !== cT ? cT : null
            }(TT, kT);
            null !== cT && yT(cT)
          })),
          xT = setTimeout((() => {
            yT(null)
          }), OT);
        KT.gameBridge.send("lobbyManage", {
          ...TT,
          requestId: kT
        })
      }))
    }
    const xT = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class IT {
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fT;
        this.onChange = TT, this.sendAction = kT, this.pending = new Map, this.statuses = new Map
      }
      send(TT, kT, cT) {
        var lT;
        return this.statuses.delete(kT), this.pending.set(kT, (null !== (lT = this.pending.get(kT)) && void 0 !== lT ? lT : 0) + 1), this.sendAction(TT).then((TT => {
          var lT;
          const MT = null !== TT && void 0 !== TT ? TT : {
              requestId: -1,
              ok: !1,
              message: xT
            },
            KT = (null !== (lT = this.pending.get(kT)) && void 0 !== lT ? lT : 1) - 1;
          KT > 0 ? this.pending.set(kT, KT) : this.pending.delete(kT);
          const OT = !MT.ok || MT.message.length > 0 ? MT.message : null === cT ? null : [cT];
          return null !== OT && this.statuses.set(kT, {
            ok: MT.ok,
            text: OT,
            until: Date.now() + 4e3
          }), this.onChange(), MT
        }))
      }
      show(TT, kT) {
        this.statuses.set(TT, {
          ...kT,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(TT) {
        for (const [kT, cT] of this.statuses) cT.until <= TT && this.statuses.delete(kT)
      }
      nextDeadline() {
        let TT = null;
        for (const cT of this.statuses.values()) {
          var kT;
          TT = Math.min(null !== (kT = TT) && void 0 !== kT ? kT : 1 / 0, cT.until)
        }
        return TT
      }
      statusOf(TT, kT) {
        const cT = this.statuses.get(TT);
        return !cT || cT.until <= kT ? null : {
          ok: cT.ok,
          text: cT.text
        }
      }
      isPending(TT) {
        return this.pending.has(TT)
      }
    }
  },
  4730: (TT, kT, cT) => {
    cT.d(kT, {
      g: () => QT,
      e: () => NT
    });
    var lT = cT(71),
      MT = cT(1461),
      KT = cT(1921),
      OT = cT(4739),
      yT = cT(1099);
    const fT = (0, lT.memo)((function(TT) {
      let {
        initialParameters: kT
      } = TT;
      const cT = (0, lT.useRef)(null),
        MT = (0, lT.useRef)(null),
        fT = (0, lT.useRef)(0),
        xT = (0, lT.useRef)(null),
        IT = kT.description,
        AT = kT.Uk,
        {
          scale: CT,
          rotation: jT
        } = null !== kT && void 0 !== kT ? kT : {},
        vT = (0, OT.g)();
      return (0, lT.useEffect)((() => {
        const TT = vT.onFrame((() => {
          const TT = vT.getState();
          if (!TT.isActive || !cT.current || !MT.current) return;
          const kT = TT.state;
          if (cT.current.value = kT.progress, kT.clickCount > fT.current) {
            fT.current = kT.clickCount;
            const TT = MT.current;
            TT.classList.add("pulse"), xT.current = setTimeout((() => {
              TT.classList.remove("pulse")
            }), 100)
          }
        }));
        return () => {
          clearTimeout(xT.current), TT()
        }
      }), [vT]), (0, yT.jsx)(yT.Fragment, {
        children: (0, yT.jsxs)("div", {
          className: "QTEProgressBarWrapper",
          style: {
            ...null !== CT && {
              "--scale": CT
            },
            ...null !== jT && {
              "--rotation": `${jT}deg`
            }
          },
          children: [(0, yT.jsx)("progress", {
            id: "catch",
            max: 100,
            className: "QTEProgressBar",
            ref: cT
          }), (0, yT.jsx)("span", {
            className: "QTEProgressBarInteractionIndicator",
            ref: MT,
            children: (0, yT.jsx)(KT.b, {
              text: [{
                icon: AT
              }]
            })
          }), (0, yT.jsx)("div", {
            className: "QTEProgressBarDescription",
            children: (0, yT.jsx)(KT.b, {
              text: IT
            })
          })]
        })
      })
    }));
    var xT = cT(1046),
      IT = cT.n(xT);
    const AT = 2 * Math.PI * 90,
      CT = (0, lT.memo)((function(TT) {
        let {
          initialParameters: kT
        } = TT;
        const cT = (0, lT.useRef)(null),
          MT = (0, lT.useRef)(null),
          fT = (0, lT.useRef)(null),
          xT = kT.label,
          CT = kT.icon,
          jT = kT.Wk,
          {
            scale: vT,
            rotation: tT,
            nk: hT
          } = null !== kT && void 0 !== kT ? kT : {},
          NT = (0, OT.g)();
        return (0, lT.useEffect)((() => {
          const TT = NT.onFrame((() => {
            var TT, kT;
            const lT = NT.getState();
            if (!lT.isActive || !MT.current) return;
            const KT = lT.state,
              OT = null !== (TT = KT.timeRemaining) && void 0 !== TT ? TT : 0,
              yT = null !== (kT = KT.Bk) && void 0 !== kT ? kT : 1,
              xT = AT * (1 - OT / yT);
            MT.current.style.strokeDashoffset = `${xT}`, cT.current && (cT.current.style.opacity = OT > 0 ? "1" : "0"), fT.current && jT && (fT.current.textContent = `${(OT/1e3).toFixed(1)}s`)
          }));
          return () => {
            TT()
          }
        }), [NT, jT]), (0, yT.jsxs)("div", {
          className: "QTETimedClick",
          ref: cT,
          style: {
            ...null !== vT && {
              "--scale": vT
            },
            ...null !== tT && {
              "--rotation": `${tT}deg`
            }
          },
          children: [(0, yT.jsxs)("div", {
            className: "QTETimedClickCircleContainer",
            children: [(0, yT.jsxs)("svg", {
              className: "QTETimedClickCircularProgress",
              viewBox: "0 0 200 200",
              children: [(0, yT.jsx)("circle", {
                className: "QTETimedClickProgressTrack",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12"
              }), (0, yT.jsx)("circle", {
                className: "QTETimedClickProgressArc",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12",
                strokeLinecap: "square",
                strokeDasharray: AT,
                ref: MT
              })]
            }), (0, yT.jsx)("div", {
              className: "QTETimedClickCenterContent",
              children: (0, yT.jsx)(KT.b, {
                text: [{
                  icon: CT
                }],
                className: IT()("QTETimedClickInnerText", {
                  QTETimedClickBreathe: hT
                })
              })
            })]
          }), (0, yT.jsxs)("div", {
            className: "QTETimedClickRightTextContainer",
            children: [(0, yT.jsx)(KT.b, {
              text: xT,
              className: "QTETimedClickLabelText"
            }), jT && (0, yT.jsx)("span", {
              className: "QTETimedClickTimeText",
              ref: fT
            })]
          })]
        })
      })),
      jT = (0, lT.memo)((function(TT) {
        let {
          initialParameters: kT
        } = TT;
        const cT = (0, lT.useRef)(null),
          MT = (0, lT.useRef)(null),
          fT = (0, lT.useRef)(null),
          xT = (0, lT.useRef)(!1),
          IT = kT.description,
          AT = null === kT || void 0 === kT ? void 0 : kT.icon,
          CT = (0, OT.g)();
        return (0, lT.useEffect)((() => {
          const TT = CT.onFrame((() => {
            const TT = CT.getState();
            if (!TT.isActive) return;
            const kT = TT.state;
            if (cT.current) {
              const TT = 100 * (kT.catchZonePosition - kT.qk / 2);
              cT.current.style.left = `${TT}%`, cT.current.style.width = 100 * kT.qk + "%", kT.isCatching !== xT.current && (xT.current = kT.isCatching, kT.isCatching ? cT.current.classList.add("catching") : cT.current.classList.remove("catching"))
            }
            MT.current && (MT.current.style.left = 100 * kT.moverPosition + "%"), fT.current && (fT.current.value = kT.progress)
          }));
          return () => {
            TT()
          }
        }), [CT]), (0, yT.jsxs)("div", {
          className: "QTEGravityBar",
          children: [(0, yT.jsx)("div", {
            className: "QTEGravityBarDescription",
            children: (0, yT.jsx)(KT.b, {
              text: IT
            })
          }), (0, yT.jsx)("progress", {
            max: 100,
            className: "QTEGravityBarProgress",
            ref: fT
          }), (0, yT.jsxs)("div", {
            className: "QTEGravityBarTrack",
            children: [(0, yT.jsx)("div", {
              className: "QTEGravityBarCatchZone",
              ref: cT
            }), (0, yT.jsx)("div", {
              className: "QTEGravityBarMover",
              ref: MT,
              children: (0, yT.jsx)("span", {
                children: AT && (0, yT.jsx)(KT.b, {
                  text: [{
                    icon: AT,
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
    var vT = cT(617);
    const tT = (0, lT.memo)((function(TT) {
        let {
          initialParameters: kT
        } = TT;
        const cT = (0, lT.useRef)(null),
          MT = kT.label,
          fT = kT.Kc,
          {
            icon: xT,
            scale: IT,
            rotation: AT
          } = null !== kT && void 0 !== kT ? kT : {},
          CT = 100 * (.5 - fT / 2),
          jT = 100 * fT,
          tT = (0, OT.g)();
        return (0, lT.useEffect)((() => {
          const TT = tT.onFrame((() => {
            const TT = tT.getState();
            if (!TT.isActive || !cT.current) return;
            const kT = TT.state;
            cT.current.style.left = 100 * kT.markerPosition + "%"
          }));
          return () => {
            TT()
          }
        }), [tT]), (0, yT.jsxs)("div", {
          className: "QTEPrecisionBarWrapper",
          style: {
            ...!(0, vT.R)(IT) && {
              "--scale": IT
            },
            ...!(0, vT.R)(AT) && {
              "--rotation": `${AT}deg`
            }
          },
          children: [xT && (0, yT.jsx)(KT.b, {
            text: [{
              icon: xT
            }],
            className: "QTEPrecisionBarIcon"
          }), (0, yT.jsxs)("div", {
            className: "QTEPrecisionBarTrack",
            children: [(0, yT.jsx)("div", {
              className: "QTEPrecisionBarSuccessZone",
              style: {
                left: `${CT}%`,
                width: `${jT}%`
              }
            }), (0, yT.jsx)("div", {
              className: "QTEPrecisionBarMarker",
              ref: cT
            })]
          }), (0, yT.jsx)("div", {
            className: "QTEPrecisionBarLabel",
            children: (0, yT.jsx)(KT.b, {
              text: MT
            })
          })]
        })
      })),
      hT = (0, lT.memo)((function(TT) {
        let {
          initialParameters: kT
        } = TT;
        const cT = (0, lT.useRef)(null),
          [MT, fT] = (0, lT.useState)((() => new Array(kT.yc).fill("pending"))),
          [xT, IT] = (0, lT.useState)((() => {
            const TT = kT.Ic;
            return (0, vT.R)(TT) || TT <= 0 ? [] : new Array(TT).fill("pending")
          })),
          AT = kT.label,
          {
            icon: CT
          } = kT,
          jT = (0, lT.useRef)(0),
          tT = (0, lT.useRef)(0),
          hT = (0, lT.useRef)([]),
          NT = (0, OT.g)();
        return (0, lT.useEffect)((() => {
          const TT = NT.onFrame((() => {
            const TT = NT.getState();
            if (!TT.isActive || !cT.current) return;
            const kT = TT.state,
              lT = 30 + 60 * kT.outerCircleProgress;
            if (cT.current.setAttribute("r", String(lT)), !0 === kT.lastClickResult && kT.successes > jT.current) {
              cT.current.classList.remove("QTERhythmClickOuterCircle--miss"), cT.current.classList.add("QTERhythmClickOuterCircle--hit");
              const TT = setTimeout((() => {
                var TT;
                null === (TT = cT.current) || void 0 === TT || TT.classList.remove("QTERhythmClickOuterCircle--hit")
              }), 200);
              hT.current.push(TT)
            } else if (!1 === kT.lastClickResult && kT.misses > tT.current) {
              cT.current.classList.remove("QTERhythmClickOuterCircle--hit"), cT.current.classList.add("QTERhythmClickOuterCircle--miss");
              const TT = setTimeout((() => {
                var TT;
                null === (TT = cT.current) || void 0 === TT || TT.classList.remove("QTERhythmClickOuterCircle--miss")
              }), 200);
              hT.current.push(TT)
            }
            kT.successes === jT.current && kT.misses === tT.current || (jT.current = kT.successes, tT.current = kT.misses, fT((TT => {
              const cT = [...TT];
              for (let lT = 0; lT < kT.yc; lT++) cT[lT] = lT < kT.successes ? "success" : "pending";
              return cT
            })), IT((TT => {
              if (0 === TT.length) return TT;
              const cT = [...TT];
              for (let lT = 0; lT < cT.length; lT++) cT[lT] = lT < kT.misses ? "miss" : "pending";
              return cT
            })))
          }));
          return () => {
            TT();
            for (const TT of hT.current) clearTimeout(TT);
            hT.current = []
          }
        }), [NT]), (0, yT.jsxs)("div", {
          className: "QTERhythmClickWrapper",
          children: [(0, yT.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: MT.map(((TT, kT) => (0, yT.jsx)("div", {
              className: "QTERhythmClickDot" + ("success" === TT ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
            }, kT)))
          }), (0, yT.jsxs)("div", {
            className: "QTERhythmClickCircleContainer",
            children: [(0, yT.jsxs)("svg", {
              className: "QTERhythmClickSvg",
              viewBox: "0 0 200 200",
              children: [(0, yT.jsx)("circle", {
                className: "QTERhythmClickInnerCircle",
                cx: "100",
                cy: "100",
                r: 30
              }), (0, yT.jsx)("circle", {
                className: "QTERhythmClickOuterCircle",
                cx: "100",
                cy: "100",
                r: 90,
                ref: cT
              })]
            }), CT && (0, yT.jsx)("div", {
              className: "QTERhythmClickCenterContent",
              children: (0, yT.jsx)(KT.b, {
                text: [{
                  icon: CT
                }],
                className: "QTERhythmClickIcon"
              })
            })]
          }), xT.length > 0 && (0, yT.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: xT.map(((TT, kT) => (0, yT.jsx)("div", {
              className: "QTERhythmClickDot" + ("miss" === TT ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
            }, kT)))
          }), (0, yT.jsx)("div", {
            className: "QTERhythmClickLabel",
            children: (0, yT.jsx)(KT.b, {
              text: AT
            })
          })]
        })
      }));

    function NT(TT) {
      let {
        qte: kT
      } = TT;
      switch (kT.type) {
        case "progressBar":
          return (0, yT.jsx)(fT, {
            initialParameters: kT.parameters
          });
        case "timedClick":
          return (0, yT.jsx)(CT, {
            initialParameters: kT.parameters
          });
        case "gravityBar":
          return (0, yT.jsx)(jT, {
            initialParameters: kT.parameters
          });
        case "precisionBar":
          return (0, yT.jsx)(tT, {
            initialParameters: kT.parameters
          });
        case "rhythmClick":
          return (0, yT.jsx)(hT, {
            initialParameters: kT.parameters
          });
        default:
          return console.warn("Unknown QTE type"), null
      }
    }
    const QT = (0, lT.memo)((function() {
      const [TT, kT] = (0, lT.useState)({
        type: null,
        parameters: null,
        state: null,
        isActive: !1
      });
      return (0, MT.g)("qteStateUpdated", (TT => {
        kT(TT)
      })), TT.isActive && TT.type ? (0, yT.jsx)("div", {
        className: "QTE",
        "data-camera-keeper": "",
        children: (0, yT.jsx)(NT, {
          qte: TT
        })
      }) : null
    }))
  },
  4739: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => yT,
      g: () => fT
    });
    var lT = cT(71),
      MT = cT(1303),
      KT = cT(4745);
    const OT = {
        getState: () => KT.d.getCurrentState(),
        onFrame: MT.o
      },
      yT = (0, lT.createContext)(OT);

    function fT() {
      return (0, lT.useContext)(yT)
    }
  },
  9354: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => xT
    });
    var lT = cT(71),
      MT = cT(1046),
      KT = cT.n(MT),
      OT = cT(1996),
      yT = cT(1099);

    function fT(TT) {
      const kT = Math.floor(TT / 3600),
        cT = Math.floor(TT % 3600 / 60),
        lT = Math.floor(TT % 60),
        MT = `${cT.toString().padStart(2,"0")}:${lT.toString().padStart(2,"0")}`;
      return kT > 0 ? `${kT}:${MT}` : MT
    }
    const xT = (0, lT.memo)((function(TT) {
      let {
        className: kT
      } = TT;
      const {
        recording: cT,
        seconds: lT
      } = (0, OT.h)("replayRecorder");
      return cT ? (0, yT.jsxs)("div", {
        className: KT()("RecordingIndicator", kT),
        children: [(0, yT.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, yT.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, yT.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: fT(lT)
        })]
      }) : null
    }))
  },
  36151: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => IT,
      f: () => CT
    });
    var lT = cT(71),
      MT = cT(1363),
      KT = cT(1195),
      OT = cT(1348),
      yT = cT(3419),
      fT = cT(4880),
      xT = cT(1099);

    function IT(TT) {
      let {
        loading: kT,
        schematics: cT,
        onSchematicPicked: lT,
        selectedSchematicIdList: MT = [],
        disableAutoExport: fT
      } = TT;
      const {
        t: IT
      } = (0, KT.B)();
      return (0, xT.jsxs)("div", {
        className: "SchematicList",
        children: [kT && (0, xT.jsx)(OT.d, {}), !kT && 0 === cT.length && (0, xT.jsx)("div", {
          className: "NoSchematicsText",
          children: IT("worldBuilder:noSavedSchematic")
        }), !kT && cT.map((TT => (0, xT.jsx)(yT.d, {
          source: {
            type: "schematic",
            schematic: TT
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            lT(TT)
          },
          isSelected: MT.includes(TT.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: TT.isAutoExported && fT,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, TT.schematicId)))]
      })
    }

    function AT(TT) {
      let {
        ownedSchematics: kT,
        currentWorldSchematicId: cT,
        onClose: MT
      } = TT;
      const {
        t: OT
      } = (0, KT.B)(), [yT, AT] = (0, lT.useState)(null);
      return (0, xT.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === yT && (0, xT.jsxs)(xT.Fragment, {
          children: [(0, xT.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: OT("worldBuilder:schematicList")
          }), (0, xT.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: OT("worldBuilder:clickSchematicForOptions")
          }), (0, xT.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, xT.jsx)(IT, {
              loading: !1,
              schematics: kT,
              onSchematicPicked: TT => {
                AT(TT)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== yT && (0, xT.jsx)(fT.g, {
          schematic: yT,
          inSourceWorld: yT.schematicId === cT,
          onSchematicUpdate: TT => {
            AT(TT)
          },
          onClose: () => {
            AT(null), MT()
          }
        })]
      })
    }

    function CT(TT) {
      let {
        ownedSchematics: kT,
        currentWorldSchematicId: cT,
        onClose: lT
      } = TT;
      MT.NotificationProvider.showCustomPopup({
        body: TT => (0, xT.jsx)(AT, {
          ownedSchematics: kT,
          currentWorldSchematicId: cT,
          onClose: TT
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: lT,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  36754: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => aT,
      g: () => DT
    });
    var lT = cT(4251),
      MT = cT(1461),
      KT = cT(71),
      OT = cT(6486),
      yT = cT(4239),
      fT = cT(1292),
      xT = cT(1953),
      IT = cT(1921),
      AT = cT(1470),
      CT = cT(1195),
      jT = cT(36756),
      vT = cT(1046),
      tT = cT.n(vT),
      hT = cT(1316),
      NT = cT(1061),
      QT = cT(1289),
      ST = cT(1099);
    const DT = "SleepingOverlay";

    function aT() {
      const {
        t: TT
      } = (0, CT.B)(), [kT, cT] = (0, KT.useState)(!1), [vT, aT] = (0, KT.useState)(null), [rT, PT] = (0, KT.useState)(1), [wT, mT] = (0, KT.useState)(!1), [bT, zT] = (0, KT.useState)(!1), JT = (0, KT.useRef)(0), oT = (0, KT.useRef)(!1), HT = (0, KT.useRef)(!1), eT = (0, KT.useRef)(), GT = (0, KT.useRef)(null);

      function VT() {
        const TT = null !== vT && void 0 !== vT ? vT : "Rested Speed";
        xT.gameBridge.send("wakeUp", bT ? TT : null), GT.current = null, cT(!1), aT(null), PT(1), mT(!1), zT(!1)
      }

      function ET() {
        return !wT && (VT(), !0)
      }
      return (0, MT.g)("PlayerPhysicsTypeUpdate", (TT => {
        TT !== GT.current && (GT.current = TT, TT === OT.v.SLEEPING ? (HT.current || (JT.current = xT.gameBridge.lookup("cameraZoom", null), HT.current = !0), oT.current = !0, xT.gameBridge.send("setCameraZoom", 3), cT(!0), PT(function() {
          for (const TT of xT.gameBridge.lookup("blocksStandingOn", null)) {
            if (jT.c.leafBeds.includes(TT)) return console.log(`Found leaf bed: ${TT}`), 1;
            if (jT.c.woolBeds.includes(TT)) return console.log(`Found woold bed: ${TT}`), 2;
            if (jT.c.strongBeds.includes(TT)) return console.log(`Found strong bed ${TT}`), 3
          }
          return 1
        }())) : (HT.current = !1, cT(!1), aT(null), PT(1)))
      })), (0, KT.useEffect)((() => () => {
        (0, fT.o)(DT)
      }), []), (0, KT.useEffect)((() => {
        kT ? (0, fT.p)(DT) : ((0, fT.o)(DT), oT.current && (xT.gameBridge.send("setCameraZoom", JT.current), oT.current = !1))
      }), [kT]), (0, QT.q)("overlay", eT, ET, kT), (0, ST.jsx)(lT.d, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: kT,
        timeout: 300,
        nodeRef: eT,
        unmountOnExit: !0,
        children: (0, ST.jsx)("div", {
          ref: eT,
          onClick: TT => {
            ET() && TT.stopPropagation()
          },
          children: (0, ST.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, ST.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: yT.k.map((kT => (0, ST.jsxs)(FT, {
                restedEffect: kT,
                yI: vT,
                setChosenRestedEffect: aT,
                children: [(0, ST.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, ST.jsx)(IT.b, {
                    text: [{
                      icon: kT
                    }]
                  }), yT.i[kT].shortName]
                }), (0, ST.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: TT(yT.i[kT].description, {
                    time: yT.i[kT].effectLevelDurations[rT] / 6e4
                  })
                })]
              }, kT)))
            }), (0, ST.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, ST.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, ST.jsxs)(AT.e, {
                className: "SleepingOverlayWakeUpButton",
                onClick: TT => {
                  bT ? VT() : (mT(!0), (0, hT._)((() => {
                    mT(!1), zT(!0)
                  }), !0)), TT.stopPropagation()
                },
                loading: wT,
                children: [!bT && (0, ST.jsxs)(ST.Fragment, {
                  children: [(0, ST.jsx)(NT.e, {
                    name: "film"
                  }), " ", TT("classicGame:watchAdToGetRestedPerk")]
                }), bT && TT("classicGame:wakeUp")]
              }), (0, ST.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, ST.jsx)("div", {
                  className: tT()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === rT
                  }),
                  children: (0, ST.jsx)(IT.b, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, ST.jsx)("div", {
                  className: tT()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === rT
                  }),
                  children: (0, ST.jsx)(IT.b, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, ST.jsx)("div", {
                  className: tT()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === rT
                  }),
                  children: (0, ST.jsx)(IT.b, {
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
    const FT = (0, KT.memo)((function(TT) {
      let {
        children: kT,
        restedEffect: cT,
        yI: lT,
        setChosenRestedEffect: MT
      } = TT;
      return cT === lT ? (0, ST.jsx)(AT.m, {
        onClick: TT => {
          TT.stopPropagation()
        },
        children: kT
      }) : (0, ST.jsx)(AT.i, {
        onClick: TT => {
          MT(cT), TT.stopPropagation()
        },
        children: kT
      })
    }))
  },
  36369: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => xT,
      g: () => fT
    });
    var lT = cT(602),
      MT = cT(1953),
      KT = cT(1663),
      OT = cT(118),
      yT = cT(1274);

    function fT(TT, kT, cT) {
      return OT.featureFlags.useSocialFeatures && TT && null === (0, yT.e)(kT, cT)
    }

    function xT(TT, kT) {
      var cT, OT;
      const yT = KT.b.getSocialState().friends.find((TT => TT.name.toLowerCase() === kT.toLowerCase())),
        fT = MT.gameBridge.latest("players").byId[TT],
        xT = void 0 !== fT && fT.name === kT,
        IT = xT && null !== (cT = fT.cosmetics) && void 0 !== cT ? cT : void 0,
        AT = yT && IT ? {
          ...yT,
          cosmetics: IT
        } : yT;
      return {
        playerSocialPreview: null !== AT && void 0 !== AT ? AT : {
          isError: !1,
          name: kT,
          ranks: xT ? [...fT.ranks] : [],
          cosmetics: null !== IT && void 0 !== IT ? IT : {},
          nameColour: null !== (OT = null === IT || void 0 === IT ? void 0 : IT.nameColour) && void 0 !== OT ? OT : lT.e,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== yT
      }
    }
  },
  9359: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => KT
    });
    var lT = cT(4521),
      MT = cT(4528);

    function KT(TT) {
      let {
        children: kT,
        showing: cT,
        globallyUniqueKey: KT,
        alwaysMountChildren: OT = !1,
        doGameplayStartStopOnShow: yT = !0,
        keepsMovement: fT = !1
      } = TT;
      return (0, MT.c)(!0, cT, KT, fT), (0, lT.e)(yT, cT), cT || OT ? kT : null
    }
  },
  4864: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => yT
    });
    var lT = cT(71),
      MT = cT(1046),
      KT = cT.n(MT),
      OT = cT(1099);

    function yT(TT) {
      let {
        columns: kT,
        rows: cT,
        getRowKey: MT,
        renderRow: yT,
        className: fT
      } = TT;
      return (0, OT.jsxs)("table", {
        className: KT()("Table", fT),
        children: [(0, OT.jsx)("thead", {
          children: (0, OT.jsx)("tr", {
            children: kT.map((TT => (0, OT.jsx)("th", {
              children: TT.header
            }, TT.key)))
          })
        }), (0, OT.jsx)("tbody", {
          children: cT.map((TT => (0, OT.jsx)(lT.Fragment, {
            children: yT(TT)
          }, MT(TT))))
        })]
      })
    }
  },
  36712: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => PT,
      g: () => FT,
      i: () => rT,
      l: () => vT
    });
    var lT = cT(1046),
      MT = cT.n(lT),
      KT = cT(71),
      OT = cT(94),
      yT = cT(1382),
      fT = cT(1470),
      xT = cT(1379),
      IT = cT(1289),
      AT = cT(1195),
      CT = cT(36717),
      jT = cT(1099);

    function vT(TT) {
      const [kT, cT] = (0, KT.useState)((() => (0, CT.n)(TT)));
      return (0, KT.useEffect)((() => (cT((0, CT.n)(TT)), (0, CT.D)((() => {
        cT((0, CT.n)(TT))
      })))), [TT]), kT
    }

    function tT(TT, kT) {
      "function" === typeof TT ? TT(kT) : TT && (TT.current = kT)
    }

    function hT(TT) {
      let {
        tutorial: kT,
        step: cT,
        enabled: lT = !0
      } = TT;
      const MT = vT(kT);
      return lT && MT === cT
    }

    function NT(TT, kT) {
      const cT = (0, CT.o)(TT),
        lT = cT.indexOf(kT);
      return !cT.slice(lT + 1).some((kT => (0, CT.u)(TT, kT)))
    }

    function QT(TT, kT, cT, lT) {
      let {
        tutorial: MT,
        step: KT,
        waitForClick: OT = !1,
        onPrevious: yT
      } = TT;
      const fT = kT && (0, CT.t)(MT, KT),
        xT = kT && !NT(MT, KT),
        AT = OT ? lT : cT;
      let jT = null;
      fT ? jT = () => {
        null === yT || void 0 === yT || yT(), (0, CT.q)(MT, KT)
      } : xT && (jT = () => {
        (0, CT.l)(MT)
      }), (0, IT.q)("popup", null !== AT && void 0 !== AT ? AT : cT, jT, kT && null !== AT, null, fT ? void 0 : "controller:menusSkipTutorial")
    }

    function ST(TT) {
      let {
        tutorial: kT,
        step: cT,
        text: lT,
        waitForClick: MT = !1,
        onPrevious: KT
      } = TT;
      const {
        t: OT
      } = (0, AT.B)(), yT = NT(kT, cT);
      return (0, jT.jsxs)(jT.Fragment, {
        children: [(0, jT.jsx)("div", {
          className: "TutorialStepText",
          children: lT
        }), (0, jT.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, CT.t)(kT, cT) && (0, jT.jsx)(fT.i, {
            className: "TutorialStepButton",
            onClick: () => {
              null === KT || void 0 === KT || KT(), (0, CT.q)(kT, cT)
            },
            children: OT("tutorial:back")
          }), !MT && (0, jT.jsx)(fT.e, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, CT.f)(cT)
            },
            padDefaultFocus: !0,
            children: OT(yT ? "tutorial:done" : "tutorial:next")
          }), !yT && (0, jT.jsx)(fT.i, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, CT.l)(kT)
            },
            children: OT("tutorial:skip")
          })]
        })]
      })
    }
    const DT = 6;

    function aT(TT) {
      let {
        rect: kT,
        margin: cT
      } = TT;
      const lT = Math.max(0, kT.top - cT),
        MT = kT.bottom + cT,
        KT = Math.max(0, kT.left - cT),
        OT = kT.right + cT;
      return (0, jT.jsxs)(jT.Fragment, {
        children: [(0, jT.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: lT
          }
        }), (0, jT.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: MT,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, jT.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: lT,
            left: 0,
            width: KT,
            height: MT - lT
          }
        }), (0, jT.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: lT,
            left: OT,
            right: 0,
            height: MT - lT
          }
        })]
      })
    }

    function FT(TT) {
      let {
        target: kT,
        placement: cT,
        boxRef: lT,
        className: fT,
        spotlightMargin: IT = DT,
        children: AT
      } = TT;
      const {
        getArrowProps: CT,
        getTooltipProps: vT,
        setTooltipRef: tT,
        setTriggerRef: hT
      } = (0, yT.e)({
        placement: cT,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, IT]
      });
      (0, KT.useLayoutEffect)((() => {
        hT(kT)
      }), [kT, hT]);
      const NT = function(TT, kT) {
        const [cT, lT] = (0, KT.useState)(null);
        return (0, KT.useEffect)((() => {
          if (!kT || !TT) return void lT(null);
          let cT = 0,
            MT = null;
          const KT = () => {
            const kT = TT.getBoundingClientRect();
            MT && kT.left === MT.left && kT.top === MT.top && kT.width === MT.width && kT.height === MT.height || (MT = kT, lT(kT)), cT = requestAnimationFrame(KT)
          };
          return KT(), () => {
            cancelAnimationFrame(cT)
          }
        }), [TT, kT]), cT
      }(kT, !0);
      (0, KT.useEffect)((() => {
        null === kT || void 0 === kT || kT.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [kT]);
      const QT = (0, KT.useCallback)((TT => {
        tT(TT), lT && (lT.current = TT)
      }), [tT, lT]);
      return (0, OT.createPortal)((0, jT.jsxs)(jT.Fragment, {
        children: [NT && (0, jT.jsx)(aT, {
          rect: NT,
          margin: IT
        }), (0, jT.jsxs)("div", {
          ref: QT,
          ...vT({
            className: MT()("tooltip-container SmallTextLight TutorialStep", fT)
          }),
          children: [AT, (0, jT.jsx)("div", {
            ...CT({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, xT.e)())
    }
    const rT = (0, KT.forwardRef)((function(TT, kT) {
      let {
        placement: cT = "right",
        children: lT,
        ...MT
      } = TT;
      const OT = hT(MT),
        yT = (0, KT.useRef)(null),
        fT = (0, KT.useRef)(null);
      QT(MT, OT, yT, fT);
      const [xT, IT] = (0, KT.useState)(null), AT = lT.ref, CT = (0, KT.useCallback)((TT => {
        fT.current = TT, IT(TT), tT(kT, TT), tT(AT, TT)
      }), [kT, AT]);
      return (0, jT.jsxs)(jT.Fragment, {
        children: [(0, KT.cloneElement)(lT, {
          ref: CT
        }), OT && (0, jT.jsx)(FT, {
          target: xT,
          placement: cT,
          boxRef: yT,
          children: (0, jT.jsx)(ST, {
            ...MT
          })
        })]
      })
    }));

    function PT(TT) {
      const kT = hT(TT),
        cT = (0, KT.useRef)(null);
      return QT(TT, kT, cT, null), kT ? (0, OT.createPortal)((0, jT.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, jT.jsx)("div", {
          ref: cT,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, jT.jsx)(ST, {
            ...TT
          })
        })
      }), (0, xT.e)()) : null
    }
  },
  36506: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => KT,
      g: () => OT,
      j: () => yT,
      m: () => fT
    });
    var lT = cT(71),
      MT = cT(3041);
    const KT = 8,
      OT = "InGameHeaderContainer",
      yT = "TopRightElements";

    function fT(TT) {
      const [kT] = (0, MT.d)(), [cT, fT] = (0, lT.useState)(!1);
      return (0, lT.useLayoutEffect)((() => {
        if (!TT) return;
        const kT = document.querySelector(`.${OT}`),
          cT = document.querySelector(`.${yT}`),
          lT = () => {
            const lT = TT.getBoundingClientRect(),
              MT = kT ? kT.getBoundingClientRect().right : 0,
              OT = cT ? cT.getBoundingClientRect().left : window.innerWidth,
              yT = lT.left < MT + KT,
              xT = lT.right > OT - KT;
            fT(yT || xT)
          };
        lT();
        const MT = new ResizeObserver(lT);
        return MT.observe(TT), kT && MT.observe(kT), cT && MT.observe(cT), () => {
          MT.disconnect()
        }
      }), [TT, kT]), cT
    }
  },
  6563: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => KT
    });
    var lT = cT(71),
      MT = cT(47);

    function KT(TT, kT) {
      var cT;
      const [KT, OT] = (0, lT.useState)(null !== (cT = MT.e.getItem(TT)) && void 0 !== cT ? cT : kT);
      return [KT, kT => {
        MT.e.setItem(TT, kT), OT(kT)
      }]
    }
  },
  36559: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => AT
    });
    var lT = cT(71),
      MT = cT(1046),
      KT = cT.n(MT),
      OT = cT(1692),
      yT = cT(1470),
      fT = cT(1348),
      xT = cT(1061),
      IT = cT(1099);

    function AT(TT) {
      let {
        label: kT,
        icon: cT,
        placeholder: MT,
        onSubmit: AT
      } = TT;
      const CT = (0, lT.useRef)(null),
        [jT, vT] = (0, lT.useState)(""),
        [tT, hT] = (0, lT.useState)("Enter"),
        [NT, QT] = (0, lT.useState)(null);
      (0, lT.useEffect)((() => {
        if ("Success" !== tT && "Error" !== tT) return;
        const TT = setTimeout((() => {
          "Success" === tT && CT.current && (CT.current.value = "", vT("")), hT("Enter")
        }), "Success" === tT ? 1e3 : 4e3);
        return () => {
          clearTimeout(TT)
        }
      }), [tT]);
      const ST = () => {
        const TT = jT.trim();
        "" !== TT && "Enter" === tT && (hT("Loading"), AT(TT).then((TT => {
          CT.current && ("error" in TT ? null === TT.error ? hT("Enter") : (QT(TT.error), hT("Error")) : hT("Success"))
        })))
      };
      return (0, IT.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: TT => {
          TT.target === CT.current && "Escape" !== TT.key && TT.stopPropagation()
        },
        children: [(0, IT.jsxs)("div", {
          className: KT()("AddFriendBodyOverlay", `AddFriendBodyOverlay${tT}`),
          children: ["Loading" === tT && (0, IT.jsx)(fT.d, {}), "Success" === tT && (0, IT.jsx)(xT.e, {
            name: "check"
          }), "Error" === tT && NT]
        }), (0, IT.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, IT.jsx)(OT.b, {
            className: "PlayerSearchInput",
            domRef: CT,
            maxLength: 32,
            placeholderText: MT,
            ariaLabel: MT,
            stopPropagation: !1,
            onValueChange: TT => {
              vT(TT)
            },
            onEnter: ST
          }), (0, IT.jsxs)(yT.e, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== tT || "" === jT.trim(),
            onClick: ST,
            children: [(0, IT.jsx)(xT.e, {
              name: cT
            }), " ", kT]
          })]
        })]
      })
    }
  },
  36533: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => AT
    });
    var lT = cT(71),
      MT = cT(1046),
      KT = cT.n(MT),
      OT = cT(1195),
      yT = cT(1061),
      fT = cT(1099);
    const xT = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      IT = ["unlisted", "public", "whitelist", "private"];

    function AT(TT) {
      let {
        visibility: kT,
        onPick: cT
      } = TT;
      const {
        t: MT
      } = (0, OT.B)(), AT = (0, lT.useRef)([]);
      return (0, fT.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": MT("worldSocial:whoCanJoin"),
        children: IT.map(((TT, lT) => {
          const OT = TT === kT;
          return (0, fT.jsxs)("button", {
            ref: TT => {
              AT.current[lT] = TT
            },
            type: "button",
            className: KT()("WorldSocialTile", {
              WorldSocialTileSelected: OT
            }),
            "aria-pressed": OT,
            tabIndex: OT ? 0 : -1,
            onKeyDown: TT => {
              ((TT, kT) => {
                const cT = "ArrowRight" === TT.key || "ArrowDown" === TT.key ? 1 : "ArrowLeft" === TT.key || "ArrowUp" === TT.key ? -1 : 0;
                var lT;
                0 !== cT && (TT.preventDefault(), null === (lT = AT.current[(kT + cT + IT.length) % IT.length]) || void 0 === lT || lT.focus())
              })(TT, lT)
            },
            onClick: () => {
              cT(TT)
            },
            children: [(0, fT.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, fT.jsx)(yT.e, {
                name: xT[TT]
              })
            }), (0, fT.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, fT.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: MT(`worldSocial:${TT}`)
              }), (0, fT.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: MT(`worldSocial:${TT}Description`)
              })]
            })]
          }, TT)
        }))
      })
    }
  },
  36550: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => yT
    });
    var lT = cT(1195),
      MT = cT(2660),
      KT = cT(4355),
      OT = cT(1099);

    function yT(TT) {
      let {
        UA: kT,
        children: cT,
        ...yT
      } = TT;
      const {
        t: fT
      } = (0, lT.B)();
      return (0, OT.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          kT.onChange(!kT.on)
        },
        children: (0, OT.jsx)(MT.h, {
          ...yT,
          opensProfileCard: !1,
          children: (0, OT.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: TT => {
              TT.stopPropagation()
            },
            children: [cT, (0, OT.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, OT.jsx)(KT.d, {
                checked: kT.on,
                disabled: !1,
                ariaLabel: fT("worldSocial:letJoin", {
                  playerName: yT.playerSocialPreview.name
                }),
                onChange: TT => {
                  kT.onChange(TT.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  36531: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => vT
    });
    var lT = cT(71),
      MT = cT(1195),
      KT = cT(1875),
      OT = cT(118),
      yT = cT(31),
      fT = cT(1497),
      xT = cT(2678),
      IT = cT(9250),
      AT = cT(1470),
      CT = cT(1061),
      jT = cT(1099);

    function vT(TT) {
      let {
        worldCode: kT,
        message: cT
      } = TT;
      const {
        t: vT
      } = (0, MT.B)(), {
        isTouchScreen: tT
      } = (0, yT.n)(["isTouchScreen"]), hT = OT.featureFlags.canUseInviteLinks, NT = (0, IT.i)(hT && null === cT), [QT, ST] = (0, xT.h)(), DT = (0, lT.useRef)(null);
      if (null !== cT) return (0, jT.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, jT.jsx)(CT.e, {
          name: "lock"
        }), (0, jT.jsx)("span", {
          children: cT
        })]
      });
      const aT = hT ? NT : kT,
        FT = tT && hT && (0, xT.c)();
      return (0, jT.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!hT && (0, jT.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: vT("worldSocial:worldCode")
        }), (0, jT.jsx)("input", {
          ref: DT,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== aT && void 0 !== aT ? aT : "",
          "aria-label": vT(hT ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: TT => {
            TT.currentTarget.select()
          }
        }), (0, jT.jsxs)(AT.e, {
          className: "WorldSocialCopy",
          disabled: null === aT,
          onClick: () => {
            null !== aT && (0, xT.d)(aT, {
              useShareSheet: FT,
              onOutcome: TT => {
                if ((0, fT.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== TT || hT ? TT : "code"
                  }), "copied" === TT) ST();
                else if ("failed" === TT) {
                  var kT;
                  null === (kT = DT.current) || void 0 === kT || kT.focus(), KT.g.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, jT.jsx)(CT.e, {
            name: QT ? "check" : FT ? "up-from-bracket" : "copy"
          }), " ", vT(QT ? "general:copied" : FT ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  36541: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => jT,
      c: () => CT,
      g: () => AT
    });
    var lT = cT(602),
      MT = cT(1195),
      KT = cT(1663),
      OT = cT(2660),
      yT = cT(2600),
      fT = cT(1470),
      xT = cT(36550),
      IT = cT(1099);

    function AT(TT, kT) {
      var cT;
      return {
        isError: !1,
        name: TT,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== kT && void 0 !== kT ? kT : {},
        nameColour: null !== (cT = null === kT || void 0 === kT ? void 0 : kT.nameColour) && void 0 !== cT ? cT : lT.e,
        location: {
          status: "offline"
        }
      }
    }

    function CT(TT) {
      let {
        player: kT,
        isFriend: cT = !1,
        status: lT,
        showLocation: fT = void 0 === lT,
        UA: AT,
        onSendFriendRequest: CT,
        actions: jT,
        zIndex: vT
      } = TT;
      const {
        t: tT
      } = (0, MT.B)();
      let hT = lT;
      null !== AT && void 0 !== AT && AT.on && (hT = (0, IT.jsxs)(IT.Fragment, {
        children: [null !== lT && void 0 !== lT ? lT : (0, IT.jsx)(yT.d, {
          socialPreview: kT
        }), (0, IT.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", tT("worldSocial:canJoin")]
        })]
      }));
      const NT = {
        playerSocialPreview: kT,
        isFriend: cT,
        hideFriendBadge: !0,
        onFriendRemoved: cT ? TT => {
          KT.b.removeFriendFromState(TT)
        } : void 0,
        status: hT,
        showLocation: fT,
        onSendFriendRequest: CT,
        zIndex: vT
      };
      return AT ? (0, IT.jsx)(xT.c, {
        ...NT,
        UA: AT,
        children: jT
      }) : (0, IT.jsx)(OT.h, {
        ...NT,
        opensProfileCard: !1,
        children: jT || void 0
      })
    }

    function jT(TT) {
      let {
        row: kT,
        UA: cT,
        canInvite: lT,
        invited: KT,
        onInvite: OT,
        zIndex: yT
      } = TT;
      const {
        t: xT
      } = (0, MT.B)(), AT = "online" === kT.place ? fT.e : fT.i;
      return (0, IT.jsx)(CT, {
        player: kT.friend,
        isFriend: !0,
        status: "here" === kT.place ? xT("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        UA: cT,
        zIndex: yT,
        actions: lT && (0, IT.jsx)(AT, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: KT,
          onClick: OT,
          ariaLabel: `${xT("worldSocial:invite")} ${kT.friend.name}`,
          children: xT(KT ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  36523: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => fT,
      h: () => OT,
      i: () => xT
    });
    var lT = cT(71),
      MT = cT(4566),
      KT = cT(1875);

    function OT(TT) {
      const kT = {
        lobbyName: TT,
        answer: null,
        response: MT.c.getSocialSettings(TT)
      };
      return kT.response.then((TT => {
        kT.answer = TT
      })), kT
    }
    const yT = new Map;

    function fT(TT) {
      yT.set(TT.lobbyName, TT)
    }

    function xT(TT) {
      const [kT] = (0, lT.useState)((() => function(TT) {
        var kT;
        const cT = null !== (kT = yT.get(TT)) && void 0 !== kT ? kT : null;
        return null !== cT && void 0 !== cT && cT.answer && "error" in cT.answer ? null : cT
      }(TT))), [cT, OT] = (0, lT.useState)((() => null !== kT && void 0 !== kT && kT.answer && "settings" in kT.answer ? kT.answer.settings : null)), [fT, xT] = (0, lT.useState)(!0), [IT, AT] = (0, lT.useState)(null !== cT), CT = (0, lT.useRef)(cT);
      CT.current = cT;
      const jT = (0, lT.useRef)(0),
        vT = (0, lT.useRef)(0),
        tT = (0, lT.useRef)(!1),
        hT = (0, lT.useRef)(!0),
        NT = (0, lT.useCallback)((async kT => {
          const cT = ++jT.current,
            lT = await (null !== kT && void 0 !== kT ? kT : MT.c.getSocialSettings(TT));
          hT.current && cT === jT.current && (AT(!0), xT(!1), "error" in lT || OT(lT.settings))
        }), [TT]),
        QT = (0, lT.useCallback)((() => {
          xT(!0), NT()
        }), [NT]),
        ST = (0, lT.useCallback)((() => {
          vT.current > 0 ? tT.current = !0 : NT()
        }), [NT]);
      (0, lT.useEffect)((() => (hT.current = !0, yT.delete(TT), xT(!0), NT(null === kT || void 0 === kT ? void 0 : kT.response), () => {
        hT.current = !1
      })), [NT, TT, kT]);
      const DT = TT => {
        jT.current++, xT(!1), CT.current = TT, OT(TT)
      };
      return {
        settings: cT,
        loading: fT,
        answered: IT,
        retry: QT,
        refresh: ST,
        change: async function(kT, cT) {
          let {
            quiet: lT = !1,
            onAnswer: OT
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const yT = CT.current;
          if (null === yT) return !1;
          DT(cT(yT)), vT.current > 0 && (tT.current = !0), vT.current++;
          const fT = await MT.c.setSocialSettings(TT, kT);
          vT.current--;
          const xT = !("error" in fT);
          if (!hT.current) return xT;
          if (null === OT || void 0 === OT || OT(fT), lT);
          else if ("error" in fT) KT.g.showMessage({
            translationKey: fT.error
          });
          else
            for (const TT of fT.notFound) KT.g.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: TT
              }
            });
          if (vT.current > 0) return xT;
          const IT = tT.current;
          return tT.current = !1, !IT && "settings" in fT ? DT(fT.settings) : (IT || DT(yT), NT()), xT
        }
      }
    }
  },
  36567: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => OT,
      f: () => KT
    });
    var lT = cT(184);
    const MT = new Map;

    function KT(TT, kT) {
      var cT;
      const lT = null !== (cT = MT.get(TT)) && void 0 !== cT ? cT : new Map;
      lT.set(kT, Date.now()), MT.set(TT, lT)
    }

    function OT(TT) {
      const kT = MT.get(TT);
      if (!kT) return [];
      const cT = Date.now();
      for (const [MT, KT] of kT) cT - KT >= lT.i && kT.delete(MT);
      return [...kT.keys()]
    }
  },
  36528: (TT, kT, cT) => {
    function lT(TT, kT) {
      const cT = kT.toLowerCase();
      for (const lT of TT)
        if (lT.toLowerCase() === cT) return !0;
      return !1
    }

    function MT(TT, kT, cT) {
      const MT = [],
        KT = [],
        OT = [];
      for (const yT of TT) !yT.isError && yT.name && ("inGame" === yT.location.status && yT.location.inLobbyName === kT || lT(cT, yT.name) ? KT.push({
        friend: yT,
        place: "here"
      }) : "offline" === yT.location.status ? OT.push({
        friend: yT,
        place: "offline"
      }) : MT.push({
        friend: yT,
        place: "online"
      }));
      return [...MT, ...KT, ...OT]
    }

    function KT(TT, kT, cT) {
      const MT = [],
        KT = TT.flatMap((TT => "here" === TT.place ? [TT.friend.name] : []));
      for (const OT of [...KT, ...kT]) lT(MT, OT) || lT(cT, OT) || MT.push(OT);
      return MT
    }

    function OT(TT, kT) {
      return null === TT || void 0 === TT || !TT.canManage || lT(TT.whitelist, kT) ? "none" : "whitelist" === TT.visibility ? "required" : "quiet"
    }

    function yT(TT) {
      if (null === TT) return !0;
      const {
        visibility: kT
      } = TT;
      return "public" === kT || "unlisted" === kT || "whitelist" === kT && TT.canManage
    }

    function fT(TT, kT, cT) {
      if (cT) {
        const cT = kT.filter((kT => !lT(TT.whitelist, kT)));
        return {
          ...TT,
          whitelist: [...TT.whitelist, ...cT]
        }
      }
      return {
        ...TT,
        whitelist: TT.whitelist.filter((TT => !lT(kT, TT)))
      }
    }

    function xT(TT, kT) {
      const cT = [];
      for (let lT = 0; lT < TT.length; lT += kT) cT.push(TT.slice(lT, lT + kT));
      return cT
    }
    cT.d(kT, {
      d: () => yT,
      e: () => KT,
      i: () => MT,
      j: () => lT,
      n: () => xT,
      q: () => OT,
      t: () => fT
    })
  },
  36733: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => KT
    });
    var lT = cT(31),
      MT = cT(1316);

    function KT() {
      const {
        clientEscMenuOptions: TT
      } = (0, lT.n)(["clientEscMenuOptions"]);
      return (0, MT.r)() && TT.showChat
    }
  },
  36660: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => fT
    });
    var lT = cT(2790),
      MT = cT(3644),
      KT = cT(2873);
    const OT = ["Unable to create vertex buffer"];
    let yT = {};

    function fT(TT, kT) {
      const cT = new Date;
      console.error(`${cT.getUTCHours()}:${cT.getUTCMinutes()}:${cT.getUTCSeconds()}`, TT, kT, null === kT || void 0 === kT ? void 0 : kT.stack), OT.includes(null === kT || void 0 === kT ? void 0 : kT.message) && (console.error("Unrecoverable error occurred. Leaving game."), (0, lT.c)().client.leaveGameUnwanted({
        reason: `Unrecoverable error occurred.\nThis is a bug.\n\nError:\n${kT.message}\n\nPlease refresh the page.`,
        requiresRefresh: !0,
        canReconnect: !1,
        automaticallyReconnect: !1
      })), (0, KT.logError)("warning", `${TT}\n ${kT} "\n" ${null===kT||void 0===kT?void 0:kT.stack}`);
      const MT = TT + kT + (null === kT || void 0 === kT ? void 0 : kT.stack);
      MT in yT || ((0, KT.logError)("error", `${TT}\n ${kT} "\n" ${null===kT||void 0===kT?void 0:kT.stack}`), yT[MT] = !0)
    }(0, MT.onGameReset)((() => {
      yT = {}
    }))
  },
  4806: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => GT,
      e: () => eT
    });
    var lT = cT(4813),
      MT = cT(328);
    const KT = 120,
      OT = 260,
      yT = 1.15,
      fT = 1.2,
      xT = 2,
      IT = 1.08,
      AT = .8,
      CT = .95,
      jT = 8,
      vT = "[\"')\\]\u300d\u300f\uff09]*",
      tT = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${vT}$`),
      hT = new RegExp(`[?\uff1f]${vT}$`),
      NT = new RegExp(`[!\uff01]${vT}$`),
      QT = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      ST = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      DT = new RegExp(`[${ST}]`),
      aT = new RegExp(`[${ST}]|[^${ST}]+`, "g"),
      FT = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function rT(TT) {
      let kT = 2166136261;
      for (let cT = 0; cT < TT.length; cT++) kT ^= TT.charCodeAt(cT), kT = Math.imul(kT, 16777619);
      return (kT >>> 0) / 4294967295 * 2 - 1
    }

    function PT(TT) {
      var kT;
      if (DT.test(TT)) return 1;
      const cT = TT.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        lT = cT.replace(/[^0-9]/g, "");
      if (lT.length > 0 && !/\p{L}/u.test(cT)) return Math.min(lT.length, 4);
      const MT = null !== (kT = cT.match(FT)) && void 0 !== kT ? kT : [];
      if (0 === MT.length) {
        var KT, OT;
        const TT = null !== (KT = null === (OT = cT.match(/\p{L}/gu)) || void 0 === OT ? void 0 : OT.length) && void 0 !== KT ? KT : 0;
        return 0 === TT ? 0 : Math.min(Math.max(1, Math.round(TT / 2.5)), jT)
      }
      const yT = cT.replace(/[^\p{L}]/gu, ""),
        fT = MT.length > 1 && "e" === MT.at(-1) && yT.endsWith("e") && !yT.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(TT.replace(/[^\p{L}]/gu, ""));
      return Math.min(MT.length - (fT ? 1 : 0), jT)
    }

    function wT(TT) {
      return TT.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function mT(TT) {
      const kT = TT.replace(/[^\p{L}]/gu, "");
      return kT.length >= 2 && kT === kT.toUpperCase() && kT !== kT.toLowerCase()
    }

    function bT(TT, kT) {
      var cT;
      const jT = kT && (0, lT.j)(kT),
        vT = null !== (cT = null === jT || void 0 === jT ? void 0 : jT.syllableMs) && void 0 !== cT ? cT : lT.b,
        ST = function(TT) {
          const kT = [];
          for (const lT of (0, MT.Pb)(TT))
            if ("string" === typeof lT)
              for (const TT of lT.split(/(\s+)/)) {
                if ("" === TT) continue;
                if (/^\s+$/.test(TT)) {
                  kT.push({
                    kind: "space",
                    text: TT
                  });
                  continue
                }
                if (!DT.test(TT)) {
                  kT.push({
                    kind: "word",
                    text: TT,
                    delayMs: 0
                  });
                  continue
                }
                let lT = !0;
                for (const MT of null !== (cT = TT.match(aT)) && void 0 !== cT ? cT : []) {
                  var cT;
                  const TT = kT.at(-1);
                  lT || "word" !== (null === TT || void 0 === TT ? void 0 : TT.kind) || DT.test(MT) || /[\p{L}\p{N}]/u.test(MT) ? (lT || kT.push({
                    kind: "space",
                    text: "\u200b"
                  }), kT.push({
                    kind: "word",
                    text: MT,
                    delayMs: 0
                  }), lT = !1) : TT.text += MT
                }
              } else kT.push({
                kind: "icon",
                text: lT.icon,
                delayMs: 0
              });
          return kT
        }(TT),
        FT = [];
      let bT = [];
      for (const lT of ST) "space" !== lT.kind && (bT.push(lT), tT.test(lT.text) && (FT.push(bT), bT = []));
      FT.push(bT);
      const zT = [];
      let JT = 0;
      for (const lT of FT) {
        var oT, HT;
        const TT = null !== (oT = null === (HT = lT.at(-1)) || void 0 === HT ? void 0 : HT.text) && void 0 !== oT ? oT : "",
          kT = hT.test(TT),
          cT = NT.test(TT),
          MT = lT.map((TT => "word" === TT.kind ? PT(TT.text) : 1)),
          ST = MT.findLastIndex((TT => TT > 0));
        for (const [hT, NT] of lT.entries()) {
          const TT = "word" === NT.kind,
            lT = MT[hT];
          NT.delayMs = JT;
          for (let MT = 0; jT && MT < lT; MT++) {
            const {
              intonation: KT
            } = jT;
            let OT = ST > 0 ? -KT.declineSemitones * (hT / ST) : 0;
            OT += rT(`${wT(NT.text)}|${MT}`) * KT.variationSemitones;
            const tT = Math.min(1, KT.variationSemitones);
            let QT = jT.glideSemitones,
              DT = 1;
            cT && (OT += KT.exclaimLiftSemitones, DT *= yT), kT && hT === ST && (OT += KT.questionRiseSemitones * (lT > 1 ? .5 + .5 * MT / (lT - 1) : 1), MT === lT - 1 && (QT = Math.abs(QT) + KT.questionRiseSemitones / 2)), TT && mT(NT.text) && (OT += xT * tT, DT *= fT), lT > 1 && 0 === MT && (OT += AT * tT, DT *= IT), zT.push({
              atMs: JT + MT * vT,
              semitones: OT,
              glideSemitones: QT,
              durationMs: MT < lT - 1 ? Math.min(jT.durationMs, vT * CT) : jT.durationMs,
              level: DT
            })
          }
          JT += lT * vT + (tT.test(NT.text) ? OT : QT.test(NT.text) ? KT : 0)
        }
      }
      return {
        pieces: ST.map((TT => "space" === TT.kind ? TT : "icon" === TT.kind ? {
          kind: "icon",
          icon: TT.text,
          delayMs: TT.delayMs
        } : {
          kind: "word",
          text: TT.text,
          delayMs: TT.delayMs
        })),
        blips: zT
      }
    }
    var zT = cT(1195),
      JT = cT(1261),
      oT = cT(1960);

    function HT(TT) {
      if ("string" === typeof TT) return TT;
      const kT = JT.f.get().getCurrentLanguageCode();
      return (0, zT.p)(kT, TT.translationKey, (0, zT.m)(TT.params, oT.c.shown))
    }

    function eT(TT) {
      const kT = void 0 === TT.voice ? null : (0, lT.m)(TT.voice),
        cT = kT && (0, lT.j)(kT);
      return {
        plan: bT(HT(TT.line), cT),
        synth: cT
      }
    }

    function GT(TT) {
      const kT = [];
      let cT = [];
      for (const [MT, KT] of TT.entries()) {
        var lT;
        "space" === KT.kind && (" " !== KT.text || "icon" !== (null === (lT = TT[MT + 1]) || void 0 === lT ? void 0 : lT.kind)) ? (cT.length > 0 && kT.push(cT), kT.push([KT]), cT = []) : cT.push(KT)
      }
      return cT.length > 0 && kT.push(cT), kT
    }
  },
  36504: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => MT
    });
    const lT = [{
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

    function MT(TT, kT, cT) {
      const MT = Math.abs(TT - kT),
        KT = Date.now() - cT;
      for (const OT of lT)
        if (TT < OT.maxDist) return MT >= OT.hardUpdateDist || KT > OT.timeBetweenSoftChecks && MT >= OT.softUpdateDist;
      return !1
    }
  },
  36769: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => OT,
      g: () => KT,
      j: () => MT
    });
    const lT = [.25, .5, 1, 2, 4, 8, 16];

    function MT(TT, kT) {
      const cT = lT;
      let MT = cT.indexOf(TT);
      return -1 === MT && (MT = cT.findIndex((kT => kT >= TT)), -1 === MT && (MT = cT.length - 1)), "up" === kT ? cT[Math.min(MT + 1, cT.length - 1)] : cT[Math.max(MT - 1, 0)]
    }

    function KT(TT) {
      return TT <= lT[0]
    }

    function OT(TT) {
      return TT >= lT[lT.length - 1]
    }
  },
  36814: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => lT,
      g: () => MT
    });
    const lT = "data-replay-ui-active",
      MT = [{
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
  36818: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => xT,
      f: () => AT,
      h: () => IT
    });
    var lT = cT(31),
      MT = cT(36),
      KT = cT(36814);

    function OT() {
      const TT = {};
      for (const {
          group: kT
        }
        of KT.g) TT[kT] = !0;
      return TT
    }
    let yT = OT();

    function fT() {
      MT.k.nt("replayViewer|uiVisibilityChanged")
    }

    function xT() {
      return yT
    }

    function IT(TT, kT) {
      yT[TT] !== kT && (yT = {
        ...yT,
        [TT]: kT
      }, "nametag" === TT && lT.e.set({
        areNametagsHidden: !kT
      }), fT())
    }

    function AT() {
      yT = OT(), lT.e.set({
        areNametagsHidden: !1
      }), fT()
    }
  },
  9403: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => OT,
      d: () => MT,
      f: () => IT
    });
    var lT = cT(1578);

    function MT(TT) {
      var kT;
      return {
        ...OT.store,
        yaw: OT.store.yaw + (null !== (kT = lT.c[TT].previewYaw) && void 0 !== kT ? kT : 0)
      }
    }
    const KT = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      OT = {
        player: KT,
        store: {
          ...KT,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function yT(TT, kT) {
      TT instanceof Promise ? TT.then(kT).catch((TT => {
        console.error("Couldn't open the preview", TT)
      })) : kT(TT)
    }
    class fT {
      constructor(TT) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, yT(TT, (TT => {
          this.closed ? TT.close() : (this.opened = TT, null !== this.size && TT.resize(this.size.width, this.size.height), null !== this.view && TT.show(this.view))
        }))
      }
      show(TT) {
        var kT;
        this.view = TT, null === (kT = this.opened) || void 0 === kT || kT.show(TT)
      }
      resize(TT, kT) {
        var cT;
        this.size = {
          width: TT,
          height: kT
        }, null === (cT = this.opened) || void 0 === cT || cT.resize(TT, kT)
      }
      close() {
        var TT;
        this.closed = !0, null === (TT = this.opened) || void 0 === TT || TT.close(), this.opened = null
      }
    }
    class xT {
      constructor(TT) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(TT).then((TT => TT.ready)), yT(TT, (TT => {
          this.closed ? TT.close() : (this.opened = TT, null !== this.size && TT.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var TT, kT;
        return null !== (TT = null === (kT = this.opened) || void 0 === kT ? void 0 : kT.isReady()) && void 0 !== TT && TT
      }
      setCosmetic(TT, kT) {
        var cT;
        null === (cT = this.opened) || void 0 === cT || cT.setCosmetic(TT, kT)
      }
      playEmote(TT) {
        var kT;
        null === (kT = this.opened) || void 0 === kT || kT.playEmote(TT)
      }
      setOrbit(TT) {
        var kT;
        null === (kT = this.opened) || void 0 === kT || kT.setOrbit(TT)
      }
      resetCamera() {
        var TT;
        null === (TT = this.opened) || void 0 === TT || TT.resetCamera()
      }
      async untilDrawn(TT) {
        var kT;
        await this.ready, await (null === (kT = this.opened) || void 0 === kT ? void 0 : kT.untilDrawn(TT))
      }
      resize(TT, kT) {
        var cT;
        this.size = {
          width: TT,
          height: kT
        }, null === (cT = this.opened) || void 0 === cT || cT.resize(TT, kT)
      }
      close() {
        var TT;
        this.closed = !0, null === (TT = this.opened) || void 0 === TT || TT.close(), this.opened = null
      }
    }
    const IT = new class {
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
        return new fT(this.current().openMob(TT))
      }
      openPet(TT) {
        return new fT(this.current().openPet(TT))
      }
      openMobLineup(TT) {
        return new fT(this.current().openMobLineup(TT))
      }
      openCharacter(TT, kT) {
        return new xT(this.current().openCharacter(TT, kT))
      }
    }
  },
  9395: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT.c,
      e: () => lT.d,
      f: () => lT.f
    });
    var lT = cT(9403);
    class MT {
      constructor(TT) {
        this.load = TT, this.loaded = null, this.loading = null
      }
      run(TT) {
        return null !== this.loaded ? TT(this.loaded) : (this.loading ??= this.load().then((TT => (this.loaded = TT, TT)), (TT => {
          throw this.loading = null, TT
        })), this.loading.then(TT))
      }
    }
    class KT {
      constructor() {
        this.mobScene = new MT((() => Promise.all([cT.e(70), cT.e(227), cT.e(226), cT.e(246), cT.e(95), cT.e(247), cT.e(73), cT.e(72), cT.e(244), cT.e(71), cT.e(254), cT.e(248), cT.e(253), cT.e(251), cT.e(243), cT.e(219), cT.e(265), cT.e(223), cT.e(238), cT.e(249), cT.e(252), cT.e(75), cT.e(196), cT.e(216), cT.e(94), cT.e(220), cT.e(235), cT.e(113), cT.e(236), cT.e(74), cT.e(154)]).then((() => cT(40701))))), this.characterScene = new MT((() => Promise.all([cT.e(70), cT.e(227), cT.e(226), cT.e(246), cT.e(95), cT.e(247), cT.e(73), cT.e(72), cT.e(244), cT.e(71), cT.e(254), cT.e(248), cT.e(253), cT.e(251), cT.e(243), cT.e(219), cT.e(265), cT.e(223), cT.e(238), cT.e(249), cT.e(252), cT.e(75), cT.e(196), cT.e(216), cT.e(94), cT.e(220), cT.e(235), cT.e(113), cT.e(236), cT.e(74), cT.e(153)]).then((() => cT(40795)))))
      }
      openMob(TT) {
        return this.mobScene.run((kT => kT.openMobPreview(TT)))
      }
      openPet(TT) {
        return this.mobScene.run((kT => kT.openPetPreview(TT)))
      }
      openMobLineup(TT) {
        return this.mobScene.run((kT => kT.openMobLineupPreview(TT)))
      }
      openCharacter(TT, kT) {
        return this.characterScene.run((cT => cT.openCharacterPreview(TT, kT)))
      }
    }
    lT.f.setDefaultHost((() => new KT))
  },
  36653: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => MT,
      e: () => KT
    });
    const lT = new Map;

    function MT(TT) {
      var kT;
      return null === TT ? null : null !== (kT = lT.get(TT)) && void 0 !== kT ? kT : null
    }

    function KT(TT, kT) {
      return lT.set(TT, kT), () => {
        lT.get(TT) === kT && lT.delete(TT)
      }
    }
  },
  36432: (TT, kT, cT) => {
    cT.d(kT, {
      A: () => vT,
      B: () => QT,
      d: () => KT,
      h: () => tT,
      k: () => hT,
      l: () => yT,
      p: () => CT,
      q: () => NT,
      s: () => AT,
      w: () => ST
    });
    var lT = cT(31),
      MT = cT(36);
    const KT = "clientGameInventoryButtonsChanged",
      OT = new Map;

    function yT() {
      return [...OT.values()].sort(((TT, kT) => {
        var cT, lT;
        return (null !== (cT = TT.order) && void 0 !== cT ? cT : 0) - (null !== (lT = kT.order) && void 0 !== lT ? lT : 0)
      }))
    }
    let fT = null;

    function xT(TT) {
      fT = TT
    }
    let IT = !1;

    function AT(TT) {
      IT = !0;
      try {
        TT.onClick()
      } finally {
        IT = !1
      }
      TT.panel && "clientGame" === lT.e.get("openInGameMenuName") && xT(TT.id)
    }

    function CT() {
      return IT
    }

    function jT() {
      return yT().filter((TT => TT.panel && !TT.disabled))
    }

    function vT(TT) {
      const kT = jT(),
        cT = kT.findIndex((TT => TT.id === fT));
      return !(cT < 0 || kT.length < 2) && (AT(kT[(cT + TT + kT.length) % kT.length]), !0)
    }

    function tT() {
      return null !== fT && jT().length > 1
    }

    function hT() {
      xT(null)
    }

    function NT() {
      "inventory" !== lT.e.get("openInGameMenuName") && xT(null)
    }

    function QT() {
      const TT = fT;
      return xT(null), TT
    }

    function ST(TT) {
      return OT.set(TT.id, TT), MT.k.nt(KT, yT(), !0), () => {
        OT.get(TT.id) === TT && (OT.delete(TT.id), MT.k.nt(KT, yT()))
      }
    }
  },
  36423: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => yT,
      d: () => hT,
      f: () => NT,
      h: () => CT,
      j: () => xT,
      m: () => tT,
      p: () => jT,
      q: () => IT
    });
    var lT = cT(31),
      MT = cT(36),
      KT = cT(1292),
      OT = cT(36432);
    const yT = "clientGameUiChanged";
    let fT = null;

    function xT() {
      return fT
    }

    function IT(TT, kT) {
      const cT = {
        content: TT,
        menu: kT
      };
      return fT = cT, MT.k.nt(yT, fT, !0), () => {
        fT === cT && (fT = null, vT = !1, hT(), MT.k.nt(yT, null))
      }
    }
    let AT = null;

    function CT() {
      return AT
    }

    function jT(TT) {
      return AT = TT, () => {
        AT === TT && (AT = null)
      }
    }
    let vT = !1;

    function tT() {
      const TT = lT.e.get("openInGameMenuName");
      "clientGame" !== TT && (vT = "inventory" === TT), (0, OT.p)() || (0, OT.k)(), (0, KT.p)(KT.c), lT.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function hT() {
      QT(!1)
    }

    function NT() {
      QT(vT)
    }

    function QT(TT) {
      "clientGame" === lT.e.get("openInGameMenuName") && lT.e.set({
        openInGameMenuName: TT ? "inventory" : null
      }), TT || (0, OT.k)(), vT = !1
    }
  },
  36785: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => qk,
      e: () => ik
    });
    var lT = cT(4235),
      MT = cT(617),
      KT = cT(3719),
      OT = cT(3734),
      yT = cT.n(OT);
    const fT = new Set(["nameTagInfo", "multilineTextBox", "animationScript", "content", "skyBox", "opts", "fromBlockData", "toBlockData", "sharedBlockData"]),
      xT = "EV_boolean",
      IT = "EV_double",
      AT = "EV_string",
      CT = "EV_doubleArr",
      jT = "EV_armour",
      vT = "EV_other",
      tT = "EV_cosmetics",
      hT = "OEV_boolean",
      NT = "OEV_int",
      QT = "OEV_double",
      ST = "OEV_string",
      DT = "OEV_stringArr",
      aT = "OEV_meshScaling",
      FT = "IV_int",
      rT = "IV_string",
      PT = "IV_doubleArr",
      wT = "IV_double",
      mT = "HV_int",
      bT = "HV_slots",
      zT = "EnvV_string",
      JT = "EnvV_double",
      oT = "EnvV_doubleArr",
      HT = "EnvV_boolean",
      eT = {
        type: AT,
        name: AT,
        position: CT,
        rotation: CT,
        scale: IT,
        speed: IT,
        jumping: xT,
        crouching: xT,
        cameraPitch: IT,
        armSwinging: xT,
        heldItemName: AT,
        heldItemEnchantmentTier: AT,
        pose: AT,
        followingEId: AT,
        ridingVehicleEId: AT,
        leaderboardTop: AT,
        meshKind: AT,
        meshOpts: AT,
        followingOffset: CT,
        shouldMatchFollowingEntityRotation: xT,
        meshOffset: CT,
        baseRenderHeading: IT,
        armour: jT,
        IH: vT,
        playerCustomisations: tT,
        variation: AT,
        metaInfo: AT,
        soundName: AT,
        volume: IT,
        refDistance: IT,
        maxHearDist: IT,
        rate: IT,
        aiState: AT
      },
      GT = {
        opacity: QT,
        zIndex: NT,
        overlayColour: ST,
        canSee: hT,
        meshScaling: aT,
        nameTagInfo: ST,
        multilineTextBox: ST,
        hasPriorityNametag: hT,
        ranks: DT,
        nameColour: ST,
        _isAlive: hT,
        _invisibleEffect: hT,
        _invincible: hT,
        killfeedColour: ST,
        hideNameSeed: NT,
        _glowingEffect: hT,
        lockHeadToBody: hT
      },
      VT = {
        itemName: rT,
        amount: FT,
        position: PT,
        size: wT,
        attributes: rT
      },
      ET = {
        skyBox: zT,
        fogColourOverride: zT,
        fogChunkDistanceOverride: JT,
        cameraTint: oT,
        fogOnSkybox: HT,
        fogBlockDistanceOverride: JT
      },
      ZT = {
        type: "array",
        items: "double"
      },
      uT = {
        type: "array",
        items: "int"
      },
      XT = {
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
      dT = {
        type: "map",
        values: ZT
      };

    function LT(TT, kT) {
      return {
        type: "record",
        name: TT,
        fields: [{
          name: "x",
          type: kT
        }]
      }
    }
    const RT = {
        type: "array",
        items: {
          type: "record",
          name: "OtherEntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", LT(hT, "boolean"), LT(NT, "int"), LT(QT, "double"), LT(ST, "string"), LT(DT, {
              type: "array",
              items: "string"
            }), LT(aT, dT)]
          }]
        }
      },
      gT = {
        type: "array",
        items: {
          type: "record",
          name: "EntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", LT(xT, "boolean"), LT(IT, "double"), LT(AT, "string"), LT(CT, ZT), LT(jT, XT), LT(vT, RT), LT(tT, {
              type: "map",
              values: "string"
            })]
          }]
        }
      },
      UT = {
        type: "array",
        items: {
          type: "record",
          name: "ItemDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", LT(FT, "int"), LT(rT, "string"), LT(wT, "double"), LT(PT, ZT)]
          }]
        }
      },
      YT = {
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
      BT = {
        type: "record",
        name: "HotbarDeltaEntry",
        fields: [{
          name: "i",
          type: "int"
        }, {
          name: "v",
          type: ["null", LT(mT, "int"), LT(bT, YT)]
        }]
      },
      WT = {
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
      nT = {
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
      pT = {
        type: "array",
        items: {
          type: "record",
          name: "EnvironmentDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", LT(zT, "string"), LT(JT, "double"), LT(oT, ZT), LT(HT, "boolean")]
          }]
        }
      },
      iT = [{
        name: "Qm",
        type: "record",
        fields: [{
          name: "pos",
          type: uT
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
          type: uT
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
      qT = [{
        name: "playSound",
        type: "record",
        fields: [{
          name: "zc",
          type: "string"
        }, {
          name: "volume",
          type: "double"
        }, {
          name: "rate",
          type: "double"
        }, {
          name: "Hc",
          type: ["null", {
            type: "record",
            name: "SoundPosSettings",
            fields: [{
              name: "ec",
              type: ["null", "string", ZT],
              default: null
            }, {
              name: "Gc",
              type: ["null", "double"],
              default: null
            }, {
              name: "Vc",
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
          name: "yM",
          type: "string"
        }, {
          name: "fM",
          type: "int"
        }, {
          name: "animationScript",
          type: ["null", "string"]
        }, {
          name: "xM",
          type: "double"
        }, {
          name: "IM",
          type: "double"
        }]
      }, {
        name: "bullet",
        type: "record",
        fields: [{
          name: "EK",
          type: "string"
        }, {
          name: "bulletDirections",
          type: {
            type: "array",
            items: ZT
          }
        }]
      }, {
        name: "lifeformHealth",
        type: "record",
        fields: [{
          name: "tT",
          type: "string"
        }, {
          name: "zk",
          type: ["null", "double"],
          default: null
        }, {
          name: "Jk",
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
          name: "jc",
          type: "double"
        }, {
          name: "angle",
          type: "double"
        }, {
          name: "vc",
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
      sT = [{
        name: "position",
        type: ZT
      }, {
        name: "direction",
        type: ZT
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

    function Tk() {
      const TT = [{
        name: "entities",
        type: {
          type: "map",
          values: gT
        }
      }, {
        name: "items",
        type: {
          type: "map",
          values: UT
        }
      }, {
        name: "camera",
        type: {
          type: "record",
          name: "ReplayCameraState",
          fields: sT
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
              items: BT
            }
          }]
        }],
        default: null
      }, {
        name: "playerHud",
        type: ["null", WT],
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
              name: "tT",
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
        type: nT
      }, {
        name: "environment",
        type: pT
      }, {
        name: "structuralEvents",
        type: {
          type: "array",
          items: iT
        }
      }, {
        name: "ephemeralEvents",
        type: {
          type: "array",
          items: qT
        }
      }), TT
    }
    const kk = {
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
                name: "UA",
                type: "int"
              }, {
                name: "position",
                type: ZT
              }, {
                name: "direction",
                type: ZT
              }, {
                name: "easing",
                type: ZT
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
    let ck;

    function lk(TT) {
      if (9 === TT) return ck ??= (kT = [{
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
            name: "xJ",
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
              type: uT
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
            fields: Tk()
          }
        }
      }, kk], yT().Type.forSchema({
        type: "record",
        name: "RecordingState",
        fields: kT
      }, {
        sC: Object.create(null)
      })), ck;
      var kT
    }
    var Mk = cT(36790);
    let Kk, Ok, yk, fk;
    const xk = 12;
    var Ik, Ak;
    const Ck = [0, 1, 8, 255, "length", "undefined", 63, 6, "fromCodePoint", 7, 12, "push", 91, 8191, 88, 13, 14, null, 3, 127, 10, 128, !1, 16, 135, 4, !0, 136, 137, 15, 132, 2, 5, 11, 9];

    function jk(TT) {
      return typeof cc !== Ck[5] && cc ? (new cc).decode(new lc(TT)) : typeof Mc !== Ck[5] && Mc ? Mc.from(TT).toString("utf-8") : yc(TT)
    }

    function vk() {}

    function tk() {
      tk = function() {}
    }
    var hk, Nk;
    tk(Ik = {}, Ak = ["|/Y[]C4$~/QJDodt^L{Mv=x>3}eyWHt&ksxNbLl+tjE%L9?w/[w]sl]p]WJ", "rSf*eHH54vf14gI&cG5NTL8xl.LyIdc6#G2x", 'W#,SKJ/7ph#;#1?!V"AuU=jeZGa2)5)d7Bf`S|6(*%>pkHRZVrj[%9U+u', "$i{8XDPp_7", "!.%xgCr$5J%Z{|:BgWLxNntk", "Q{m:gD`;StiQSgLp+&m`f0|5gGnNvmp#>t[Ne3#x/}>nPA", 's8Ex$HWB"tqodA', ':Hb8K_fe.by"o:5:U/gSQZU&Wta2<bKZyA@n;dg5@}I=e"3p!Mc{INcf', '"W2{tlMBR5;.LmL!BjQSi9+vp@p86mEZOD7:n;eB?04=O"^#?8C*/', "k@9lB`|GCj$ytHLpbiVx", "y4m:RGsZ]W$9S]Wd!izu5lYw(/5:DokH7t#pQC%d_0/]Rk", '>+OiXiV$MboZ~vkdb?4V*"aMt><]sCu~?[]jagt7&v;R*v(wwG_Pw3~`%Lc', "03.2AZ+pb@K^f", "&sny2FE$#?0Bf", "S[l2cB_&oh<vW.&6vr|$1]6dfGbH{iFZ!h!y>JcBsbUJf", "?FMn)|Wez.*twHO:g=XV:Jc>qb", 'U%":pO.vbtQt=m5/cjR{xE!>_?B<qb3698:];ndd<#hL;=KB}3A', "CA]yF`YdJLUTe5_c![OPXG((!5", ";Jt]blUtStgtTg8!=[.nd41f", "4W|$xZ>B^%L@Ar#/JA8Ntl:>D0s2>h|:%+G[JcRsk%27.JaByJf", "Riv7H`t+{Wa03AKe/?Dn)|0?s/&bMFVH&M]VQLh>V>pb>l5/8Zc$Wd1f", "xMnNZTrkab,>%:D>RV:]F*@BDt>8_m*ZRjK[bn5eevm", 'k"y*4vf9`qLq]hu6UWi"NNr7@vYW3gs6Vt.Mn;^*14.', 'K{i"OO4p,qJ@@FY~/S)`[?X#m#nTXho&BFopBT"Be#,C6m|cF8A', "MjTVk0Cfo@O?(|y>riCVH`dtoh[", "[3J2Y+:>jnmW&g,Mf~0xv.J`J#DQ9]jm9[UsY.6do%d", '6r"[Y+B?t.ZFF::eph>MC)zTQ%', "V..nVs}3s/1$vm^8e/|{D`](fGrVKA?(u%h)6O;*htG2qA", "U30{xLt+p?~Tz6U6|[S*czu>Yh3{b1EePB8$HO6k", '}8Vx8yR(wW%][z.!<33sNs<p?7b5A6m!$Z4[H"($)jK}5oQ8', "G*E{VFWM}.`?hz^8/rb8`L99yWi^Zz3t{M()kL:Bph5;eF?w", "V3e`C9>ex/3m1F%", "TZcN99C;V<E^[mu>gA}jxn`G<LOl?6O{OD*S_sWBf%i.W(f(~*XjnI{p4W|{f", '=L|"S_k}+QMZ6H.p2*O$[vE+F.%!3J^m*Z`S>l;;O5=y1m%', '_D!ps.9fO}&BUAPmcM|"%LK+rJ1tV1&8J3#[DTr(;0~B^=`>T4{szg)eV', "$WJ26HK%mvam/i]>33)SSJbkc}R;SoYt][$2kEb$`bQbA=j", 'F&1nV9g565^29m#/"[~<"c$&U0"', "uir`.cE$V}T=ErApV.pyd3$$3[vTZmK{q?m[/gN(u>h;Y", '$DZ`<G1esbG$WdU>DZ_{qn4+K5h/="m{Jik', "4VR$YdXf", "F&m*e3Y", "1i)`l+Lv~W>8jIf#p.8$VL{p`#.", 'GF)`,ys$ivK2v=B8G3R)O9^5)Qj3?:jt~*RPl3WBv/"T<HEojs3uogV()h', 'oG,M4I"BU0SLSgLMgye*$Ijx"jf_nbWp1{7VyL]vL0$P<HH(', 's3+"e4PdLhP!D]o&6%3<agM|%W_qgbc(gDY`H4M>A', "PMJSAsDxj<[9`b]8H[?[Cg@f", ">MWV3]c?U7!v%J5:k%F[w1?5X5{9ju.w7BA2$c|B4#Xs!6D>(f", "F[iyKJO!}.,sTA9($i|y9dOMQ%_dbu,BHGTy(&ltn/IS3JHmtHfV<E/dyLe", '_8XPayS%Bj6ZL51BtrMn!i?MlGd8MoBtx!@njCR7Q%}+7cjmb?[{}v"|u', "HFg0=swplj9y8l38WY", "wM<Sg9;xJWn=mP#&&Vc$<lXBlG{x`6A#!h6{S[qmNqX2&:98i*^ub9zZP", "+#j[E6EZ+4(vmotZF/6N5F,%Lqo`U]*ZOmQ*P0Cf", "%Gqss9wpZ%^hh6I{Rr+$=nXMk>8blmh", "~LB]`9Y(1qamw5=8(3tS?I[3Tt", "8.|N~[Yt9v1Q.hQ8w*,2jN7t0}b/]:0:=yn$P]xf", 'ktiyZy=VX5R55IgesD0xt_%+u5O7}A]mz{!{a6#B%#CuX=!BV?&"~4X!u', "fM[$RiVvzhRWUA", "W3M$:|}p14kjF|9>&r[{.]YvBj,f!l)d*A?ySJY", '^328|H_&QG|N=mJ{*rr*:[zZ+h<AjF"&@Gz7D?k76>gsZm78', ")&:2**M>T09B8zp(2Wz7H4&+zG,=P]g:^Z][idYv;?6N_r=t3F#Sm", "rip{=9<tz?v4+5*ZPiH{w[H|Z?`P[m8wg8)`R6q?)?K=%Ah", "!3=x*H3t`7N2xgpw|[7)$`ktk.zRgk5:|V$0#9Ceo@Z9Y", 'LH~M#N$tU4#(O(FreWhj|"+&bh7FPA5rUr.<rNL%#%zlru', 'I{&"zN@0D02"Z5UmXZ^0pi``z.k_*6Q(Rsn{81~|s/lNDmN6D%)*,Jc>s#k`f', "C{!{M&t7x/X>Tg4Z<MmpOlC9@5f:GP", "fhX{G+6}sLgs;hW88ALP)BQ%~J*", ".&C*O95m>>MFw5awd.=$BO1?Cj.4CF?p$r$2[2*|v#$tmou8XL9iP]?f", "?We[d`1MVnS8Yi@B", "hHExbn,(F0r#)F9HDZ.0_C3+K/14jFge", "vDpyxLxxF%?{7i98@j9sncn|l[DN+=4wJWJMU4|x^>{", 'P"C*idn|.qTt/i,oQFmV!l}(y/(nrC1B~WSjjN7+)[WTmH:Bi/>S{', '(ie]**D5NJ8:&ia!j?k`B[#eZj:5@]`rKcu<n?2?eWW2N]I:"%=n<sps+7', "n[Hn{TGBg})ZmoIZ~sL$5GU+e/h`Xk[e~HLx", "OF8yWC;f", "f@RxnvQpP", "Y?H$4=Y", "c%Nu~4[3k%yPck?wu!5<H`?|C[{N019ms3:2]nfBf[`^oot:lF/8_dlk=5@9Y", "9#[xYn}s20GSn=KB{sm_{i}E7va=TFjcsHIMH3DBN4g4Bk$:1!Is63u`ot", '^VMx}ndtr/!<n=98~%$0)$s$t>&{#dLMx[w]H3=(vLs"jo1d!G8{VEm>+QH', "OWp$p1QV.WF8Ni2czY", "LW<2EDN$`L2Cw5Y(/[A", "R*L$gCVEt.^h4:#rRi^rjNk(A%MF~vV(s3W7MgLkz>b#HP", "Rs[n*?OMY?Kf$hEZZ*%8#6N&f?_=*=*ZzF3lBOum4#NB%:ERgJJ2:", "gw_$qLE%W.ZL!65", "bjDn,$/s05690];r<?f`aynf", "@jY_XGF&@[4NaT%c$Vn$=;0`@5#LBr^8*GsuzN3%av%FKg|rqf", "{WN2G*r$sqEhCdf8W[3M64#m|Qb;N(Zd?3gSB`9eMJq5]h]rTZ{M?2Y", "=#!$9daMV<68$ApB{Hg2lHT$d>/:lmTc<+dnxs;*_J%;*6re9LC7zDYpu5r]Y", "C4eVOlc>H>", 'aA|Ne1"fj/t`Go!Ms!A2B_pte/amnbEZE#H8F==tB}J', '*WY:!NP7"GdQ]ABdOc*SLF3TwbFBXr@ZxM*]Yd)?P', '2VqSS3XGUb|Qp"6Hy*_8hseGAj5W#]AtLW[$X_=+W?S9blz&c*@s@', "t?7j=]I(ptlbOFFZ1&p8_FXG4v>zf", "BZe:m&??;?FL9]/:!3x$Dzcf", "{[)pfFjf_0,C+5OZGWg7W.DO@5", "g{e`S$0`GW<<?b}t", '2D6{4z#|$}s2gkH>oiK*~"w$A%BAYi,e$8X{zG@f', "u[D$00odLtV3J6b&!jm*}+wtM@`+f", 'H#L{4c@xK#v=3(L(#SiPWd>e"%y"L9SpPjz*yG]%;%iQf', 'o%n"Xi]vYQo*3hhczY', "PG(:A;Y", 'D*Au;l~?>>TfKhaR}38"d_ixfG`f)PCr$iDxr_Vp*.&Ai=At"/0xd_1BA', "iLh_Rl^*A", "18|N[HXG+QDP&:rd=3Pn:_)GqL/n3g:wr+[j|=,%e#l{6mA~JiV)^sY", "0Gg2RizZ~#7jU|O{m+:]hg[p)GyTG5.w=[qSnZQpyWO^vbV", '=DXVDTrETtz=^b@:hi4*D"9x;.2qqr":.3*7ALLtV', "_=|{3]Qvhhbp]goZQ8LnLc6tlG{]Dmb", "+8l]VC+vU4O=/:jtdsMsNlyM<#uZ)o~mm/32TGWB(5", '"im]3;Xe7vuZ]AS#F&k:+3x>NL]+f', "dr28u0v+QGUF|bHH", 'bj[N9nx5}%Qyl"W(tif]3]((R>0x@.ctV[cV', "fGpyEO^GWG(*~r/{Jrk", "WH=i#Nh|x<@ZgrpB/+1<,DW?2q_2/:&rg=A", "OJlSA0B52bsRX6smG3,Sm", "?Z6{2s:e~W2syCYd+8XNf.<EV", "$[5NQ+ptY%m]86^H,/#*x;w&djb`rl38Rip8m_CxC.5:8bpBN#j:$4.(P", ";{&y|v6trJWy.dr{Q{k", "}3*0;C{dx", "TDmS;sOG2Lgto:HH`bk", "q?#:@9FpMJ@;T(XM}J8[l*|Oc553wbEZdsX${", "}8<S~Hbkx", ">iW[$2h0P", "W#?kyLE^", '#{G"#iQ^', "@rbJ&:X^", "(D;~J", "<DL&d~+w", "+A2;.EHu", "x0.`Ii*y", "AA4q)", "~p2bQNoH", "y+`iT!Y^", "Z815z$+C", "y$#0=JTC", "U5tE@", ">kBq", "nk#0NWuC", "`5yo", "MkjcOhSC", "yS[$YDrC", ".DNnE,lc", "Uz<2", "xpq^c@zk"]), tk(kc = function() {
      var TT, kT, cT, lT = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      tk(TT = void 0, kT = []);
      try {
        tk(TT = Object, kT[Ck[11]]("".__proto__.constructor.name))
      } catch (lc) {}
      TT: for (cT = Ck[0]; cT < lT[Ck[4]]; cT++) try {
        var MT;
        for (TT = lT[cT](), MT = Ck[0]; MT < kT[Ck[4]]; MT++)
          if (typeof TT[kT[MT]] === Ck[5]) continue TT;
        return TT
      } catch (lc) {}
      return TT || this
    }() || {}, cc = kc.TextDecoder, lc = kc.Uint8Array, Mc = kc.Ov, Kc = kc.String || String, Oc = kc.Array || Array, yc = function() {
      var TT, kT, cT = new Oc(Ck[21]);
      return tk(TT = Kc[Ck[8]] || Kc.fromCharCode, kT = []),
        function(lT) {
          var MT, KT, OT, yT;
          for (tk(KT = void 0, OT = lT[Ck[4]], kT[Ck[4]] = Ck[0]), yT = Ck[0]; yT < OT;) tk(KT = lT[yT++], KT <= Ck[19] ? MT = KT : KT <= 223 ? MT = (31 & KT) << Ck[7] | lT[yT++] & Ck[6] : KT <= 239 ? MT = (KT & Ck[29]) << Ck[10] | (lT[yT++] & Ck[6]) << Ck[7] | lT[yT++] & Ck[6] : Kc[Ck[8]] ? MT = (KT & Ck[9]) << 18 | (lT[yT++] & Ck[6]) << Ck[10] | (lT[yT++] & Ck[6]) << Ck[7] | lT[yT++] & Ck[6] : (MT = Ck[6], yT += Ck[18]), kT[Ck[11]](cT[MT] || (cT[MT] = TT(MT))));
          return kT.join("")
        }
    }()), (() => {
      function TT(TT) {
        return typeof Ik[TT] === Ck[5] ? Ik[TT] = function(TT) {
          var kT, cT, lT, MT, KT, OT, yT;
          for (tk(kT = "" + (TT || ""), cT = kT.length, lT = [], MT = Ck[0], KT = Ck[0], OT = -Ck[1]), yT = Ck[0]; yT < cT; yT++) {
            var fT = 'Aw^.&7N9[=WOSI0DvyQh<x}4R8JqPCE(";!GKo*VpHd2ucejmM`_lrkL6#YBXUF+gTs/{:~Z?@]zfi3)ta1b|>$5,n%'.indexOf(kT[yT]);
            if (fT !== -Ck[1])
              if (OT < Ck[0]) OT = fT;
              else {
                tk(OT += fT * Ck[12], MT |= OT << KT, KT += (OT & Ck[13]) > Ck[14] ? Ck[15] : Ck[16]);
                do {
                  tk(lT.push(MT & Ck[3]), MT >>= Ck[2], KT -= Ck[2])
                } while (KT > Ck[9]);
                OT = -Ck[1]
              }
          }
          return OT > -Ck[1] && lT.push((MT | OT << KT) & Ck[3]), jk(lT)
        }(Ak[TT]) : Ik[TT]
      }
      TT(122);
      const kT = Ck[23],
        cT = TT(123) + TT(124) + TT(125),
        lT = [Ck[0], Ck[1], Ck[31], Ck[18]].map((kT => {
          TT(126) in vk && function() {
            var TT = function(TT) {
              var kT, cT, lT, MT, KT = TT.length;
              for (tk(kT = [], cT = Ck[0], lT = Ck[0], TT.sort(((TT, kT) => TT - kT))), MT = Ck[0]; MT < KT; MT++)
                if (!(MT > Ck[0] && TT[MT] === TT[MT - Ck[1]]))
                  for (tk(cT = MT + Ck[1], lT = KT - Ck[1]); cT < lT;)
                    if (TT[MT] + TT[cT] + TT[lT] < Ck[0]) cT++;
                    else if (TT[MT] + TT[cT] + TT[lT] > Ck[0]) lT--;
              else {
                for (kT.push([TT[MT], TT[cT], TT[lT]]); cT < lT && TT[cT] === TT[cT + Ck[1]];) cT++;
                for (; cT < lT && TT[lT] === TT[lT - Ck[1]];) lT--;
                tk(cT++, lT--)
              }
              return kT
            };
            console.log(TT)
          }();
          let lT = Ck[0];
          for (let MT = Ck[18]; MT >= Ck[0]; MT--) {
            function KT(TT) {
              var kT, cT, lT, MT, KT, OT, yT;
              for (tk(kT = "" + (TT || ""), cT = kT.length, lT = [], MT = Ck[0], KT = Ck[0], OT = -Ck[1]), yT = Ck[0]; yT < cT; yT++) {
                var fT = 'cuyboq_|Q5{XB+RA$jWH18F0Z:~vh)zm(f>@#CgI*?=MJ2GipLnP.`x;K![d,rT&YD]74%EwNa96k/es3^"}l<VOUSt'.indexOf(kT[yT]);
                if (fT !== -Ck[1])
                  if (OT < Ck[0]) OT = fT;
                  else {
                    tk(OT += fT * Ck[12], MT |= OT << KT, KT += (OT & Ck[13]) > Ck[14] ? Ck[15] : Ck[16]);
                    do {
                      tk(lT.push(MT & Ck[3]), MT >>= Ck[2], KT -= Ck[2])
                    } while (KT > Ck[9]);
                    OT = -Ck[1]
                  }
              }
              return OT > -Ck[1] && lT.push((MT | OT << KT) & Ck[3]), jk(lT)
            }

            function OT(TT) {
              return typeof Ik[TT] === Ck[5] ? Ik[TT] = KT(Ak[TT]) : Ik[TT]
            }

            function yT() {
              var TT;

              function kT() {}
              tk(TT = function(TT, cT) {
                var lT, MT, KT, OT, yT, fT = Ck[0];
                for (tk(lT = Ck[0], MT = new kT(Ck[0]), KT = MT, OT = TT, yT = cT); OT !== Ck[17] || yT !== Ck[17];) tk(lT = (OT ? OT.val : Ck[0]) + (yT ? yT.val : Ck[0]) + fT, fT = Math.floor(lT / Ck[20]), KT.next = new kT(lT % Ck[20]), KT = KT.next, OT = OT ? OT.next : Ck[17], yT = yT ? yT.next : Ck[17]);
                return fT && (KT.next = new kT(fT)), MT.next
              }, console.log(TT))
            }
            OT(Ck[19]) + "s" in vk && yT(), lT = lT << Ck[2] | cT[OT(Ck[21]) + OT(129)](kT * Ck[25] + MT)
          }
          return lT >>> Ck[0]
        })),
        MT = (TT, kT) => TT << kT | TT >>> 32 - kT,
        KT = (TT, kT, cT, lT, KT) => {
          (function(TT) {
            return typeof Ik[TT] === Ck[5] ? Ik[TT] = function(TT) {
              var kT, cT, lT, MT, KT, OT, yT;
              for (tk(kT = "" + (TT || ""), cT = kT.length, lT = [], MT = Ck[0], KT = Ck[0], OT = -Ck[1]), yT = Ck[0]; yT < cT; yT++) {
                var fT = 'wfHgeDa4UT.q]}dPsjCEJ2Q)hLK5B#O>{^v~`&N|xuI68Y%_oW=cM,tA<m3zp:@1/(ZiR+FV"*ySbk[90!G?Xrl$n;7'.indexOf(kT[yT]);
                if (fT !== -Ck[1])
                  if (OT < Ck[0]) OT = fT;
                  else {
                    tk(OT += fT * Ck[12], MT |= OT << KT, KT += (OT & Ck[13]) > Ck[14] ? Ck[15] : Ck[16]);
                    do {
                      tk(lT.push(MT & Ck[3]), MT >>= Ck[2], KT -= Ck[2])
                    } while (KT > Ck[9]);
                    OT = -Ck[1]
                  }
              }
              return OT > -Ck[1] && lT.push((MT | OT << KT) & Ck[3]), jk(lT)
            }(Ak[TT]) : Ik[TT]
          })(130) in vk && function() {
            var TT, kT = function(kT, cT, lT) {
              var MT = {};
              return lT.length !== kT.length + cT.length ? Ck[22] : TT(kT, cT, lT, Ck[0], Ck[0], Ck[0], MT)
            };
            tk(TT = function(kT, cT, lT, MT, KT, OT, yT) {
              var fT = Ck[22];
              return OT >= lT.length ? Ck[26] : void 0 !== yT["" + MT + KT + OT] ? yT["" + MT + KT + OT] : (lT[OT] === kT[MT] && lT[OT] === cT[KT] ? fT = TT(kT, cT, lT, MT + Ck[1], KT, OT + Ck[1], yT) || TT(kT, cT, lT, MT, KT + Ck[1], OT + Ck[1], yT) : lT[OT] === kT[MT] ? fT = TT(kT, cT, lT, MT + Ck[1], KT, OT + Ck[1], yT) : lT[OT] === cT[KT] && (fT = TT(kT, cT, lT, MT, KT + Ck[1], OT + Ck[1], yT)), yT["" + MT + KT + OT] = fT, fT)
            }, console.log(kT))
          }(), tk(TT[kT] += TT[cT], TT[KT] = MT(TT[KT] ^ TT[kT], Ck[23]), TT[lT] += TT[KT], TT[cT] = MT(TT[cT] ^ TT[lT], Ck[10]), TT[kT] += TT[cT], TT[KT] = MT(TT[KT] ^ TT[kT], Ck[2]), TT[lT] += TT[KT], TT[cT] = MT(TT[cT] ^ TT[lT], Ck[9]))
        };
      fk = (cT, MT, OT, yT) => {
        function fT(TT) {
          return typeof Ik[TT] === Ck[5] ? Ik[TT] = function(TT) {
            var kT, cT, lT, MT, KT, OT, yT;
            for (tk(kT = "" + (TT || ""), cT = kT.length, lT = [], MT = Ck[0], KT = Ck[0], OT = -Ck[1]), yT = Ck[0]; yT < cT; yT++) {
              var fT = 'V1CsoPgNEdqIrlZkbXnKjBTM"wSvz@>30mF,_yuA2%af6x+}i4?)U~5J9:7{8p^L]<`#YR|$*QW.=cOD!hHt([Ge/&;'.indexOf(kT[yT]);
              if (fT !== -Ck[1])
                if (OT < Ck[0]) OT = fT;
                else {
                  tk(OT += fT * Ck[12], MT |= OT << KT, KT += (OT & Ck[13]) > Ck[14] ? Ck[15] : Ck[16]);
                  do {
                    tk(lT.push(MT & Ck[3]), MT >>= Ck[2], KT -= Ck[2])
                  } while (KT > Ck[9]);
                  OT = -Ck[1]
                }
            }
            return OT > -Ck[1] && lT.push((MT | OT << KT) & Ck[3]), jk(lT)
          }(Ak[TT]) : Ik[TT]
        }
        TT(131);
        const xT = new DataView(MT[fT(Ck[30])], MT[fT(133) + fT(134)], xk),
          IT = new Uint32Array(kT);
        tk(IT[fT(Ck[24])](lT), IT[fT(Ck[24])](cT, Ck[25]), IT[Ck[15]] = xT[fT(Ck[27]) + fT(Ck[28])](Ck[0], Ck[26]), IT[Ck[16]] = xT[fT(Ck[27]) + fT(Ck[28])](Ck[25], Ck[26]), IT[Ck[29]] = xT[fT(Ck[27]) + fT(Ck[28])](Ck[2], Ck[26]));
        const AT = new Uint32Array(kT),
          CT = new Uint8Array(AT[fT(Ck[30])]);
        for (let jT = Ck[0], vT = OT; jT < yT[fT(138)]; jT += kT * Ck[25], vT++) {
          function tT(TT) {
            var kT, cT, lT, MT, KT, OT, yT;
            for (tk(kT = "" + (TT || ""), cT = kT.length, lT = [], MT = Ck[0], KT = Ck[0], OT = -Ck[1]), yT = Ck[0]; yT < cT; yT++) {
              var fT = 'gBku&i0#T2DA3[Xp])m_qrPx8(zvK.}$J71+QROLC*%HwfsUtS>{beZ:=V4jEW6F<Y5yM?a`G!h"o^cIl@n9;~N,/|d'.indexOf(kT[yT]);
              if (fT !== -Ck[1])
                if (OT < Ck[0]) OT = fT;
                else {
                  tk(OT += fT * Ck[12], MT |= OT << KT, KT += (OT & Ck[13]) > Ck[14] ? Ck[15] : Ck[16]);
                  do {
                    tk(lT.push(MT & Ck[3]), MT >>= Ck[2], KT -= Ck[2])
                  } while (KT > Ck[9]);
                  OT = -Ck[1]
                }
            }
            return OT > -Ck[1] && lT.push((MT | OT << KT) & Ck[3]), jk(lT)
          }

          function hT(TT) {
            return typeof Ik[TT] === Ck[5] ? Ik[TT] = tT(Ak[TT]) : Ik[TT]
          }

          function NT() {
            const TT = require("big-integer");
            module.exports = class {
              static randomPrime(kT) {
                const cT = TT.one.shiftLeft(kT - Ck[1]),
                  lT = TT.one.shiftLeft(kT).prev();
                for (; Ck[26];) {
                  let kT = TT.randBetween(cT, lT);
                  if (kT.isProbablePrime(256)) return kT
                }
              }
              static generate(kT) {
                const cT = TT(65537);
                let lT, MT, KT;
                do {
                  tk(lT = this.randomPrime(kT / Ck[31]), MT = this.randomPrime(kT / Ck[31]), KT = TT.lcm(lT.prev(), MT.prev()))
                } while (TT.gcd(cT, KT).notEquals(Ck[1]) || lT.minus(MT).abs().shiftRight(kT / Ck[31] - 100).isZero());
                return {
                  e: cT,
                  n: lT.multiply(MT),
                  d: cT.modInv(KT)
                }
              }
              static encrypt(kT, cT, lT) {
                return TT(kT).modPow(lT, cT)
              }
              static decrypt(kT, cT, lT) {
                return TT(kT).modPow(cT, lT)
              }
              static encode(kT) {
                const cT = kT.split("").map((TT => TT.charCodeAt())).join("");
                return TT(cT)
              }
              static decode(TT) {
                const kT = TT.toString();
                let cT = "";
                for (let lT = Ck[0]; lT < kT.length; lT += Ck[31]) {
                  let TT = Number(kT.substr(lT, Ck[31]));
                  TT <= 30 ? (cT += String.fromCharCode(Number(kT.substr(lT, Ck[18]))), lT++) : cT += String.fromCharCode(TT)
                }
                return cT
              }
            }
          }
          fT(139) in vk && NT(), tk(IT[Ck[10]] = vT, AT[fT(Ck[24])](IT));
          for (let ST = Ck[0]; ST < Ck[20]; ST++) {
            function DT(TT) {
              var kT, cT, lT, MT, KT, OT, yT;
              for (tk(kT = "" + (TT || ""), cT = kT.length, lT = [], MT = Ck[0], KT = Ck[0], OT = -Ck[1]), yT = Ck[0]; yT < cT; yT++) {
                var fT = 'YcoUFBXdnHey#7_3i$g0J/94xsM=p&tQR.]bT){rDkz`aLG2j(AS"l}OuCfqK<~W;:mN+6v![wIZV@>hP15,|E%*?8^'.indexOf(kT[yT]);
                if (fT !== -Ck[1])
                  if (OT < Ck[0]) OT = fT;
                  else {
                    tk(OT += fT * Ck[12], MT |= OT << KT, KT += (OT & Ck[13]) > Ck[14] ? Ck[15] : Ck[16]);
                    do {
                      tk(lT.push(MT & Ck[3]), MT >>= Ck[2], KT -= Ck[2])
                    } while (KT > Ck[9]);
                    OT = -Ck[1]
                  }
              }
              return OT > -Ck[1] && lT.push((MT | OT << KT) & Ck[3]), jk(lT)
            }

            function aT(TT) {
              return typeof Ik[TT] === Ck[5] ? Ik[TT] = DT(Ak[TT]) : Ik[TT]
            }

            function FT() {
              console.log((function(TT) {
                var kT, cT, lT, MT, KT, OT, yT, fT, xT, IT, AT = TT.length;
                if (AT < Ck[31]) return Ck[0];
                if (tk(kT = Math.max(...TT), cT = Math.min(...TT)), kT === cT) return Ck[0];
                for (tk(lT = Array(AT - Ck[1]).fill(Number.MAX_SAFE_INTEGER), MT = Array(AT - Ck[1]).fill(Number.MIN_SAFE_INTEGER), KT = Math.ceil((kT - cT) / (AT - Ck[1])), OT = Ck[0]), yT = Ck[0]; yT < AT; yT++) TT[yT] !== cT && TT[yT] !== kT && tk(OT = Math.floor((TT[yT] - cT) / KT), lT[OT] = Math.min(lT[OT], TT[yT]), MT[OT] = Math.max(MT[OT], TT[yT]));
                for (tk(fT = Number.MIN_SAFE_INTEGER, xT = cT), IT = Ck[0]; IT < AT - Ck[1]; IT++) lT[IT] === Number.MAX_SAFE_INTEGER && MT[IT] === Number.MIN_SAFE_INTEGER || tk(fT = Math.max(fT, lT[IT] - xT), xT = MT[IT]);
                return fT = Math.max(fT, kT - xT)
              }))
            }
            aT(140) + "Z" in vk && FT(), tk(KT(AT, Ck[0], Ck[25], Ck[2], Ck[10]), KT(AT, Ck[1], Ck[32], Ck[34], Ck[15]), KT(AT, Ck[31], Ck[7], Ck[20], Ck[16]), KT(AT, Ck[18], Ck[9], Ck[33], Ck[29]), KT(AT, Ck[0], Ck[32], Ck[20], Ck[29]), KT(AT, Ck[1], Ck[7], Ck[33], Ck[10]), KT(AT, Ck[31], Ck[9], Ck[2], Ck[15]), KT(AT, Ck[18], Ck[25], Ck[34], Ck[16]))
          }
          for (let rT = Ck[0]; rT < kT; rT++) AT[rT] += IT[rT];
          const QT = Math[hT(141)](kT * Ck[25], yT[hT(142)] - jT);
          for (let PT = Ck[0]; PT < QT; PT++) yT[jT + PT] ^= CT[PT]
        }
      }
    })();
    const Qk = ["b", 0, 1, 8, "c", "a", 9, "g", 5, 6, "d", 255, "length", 2, 3, "e", "undefined", void 0, 40, 237, 63, "fromCodePoint", 7, 12, "push", 149, "h", 199, 91, 177, "f", 8191, 88, 13, 14, 4, 108, 52, 132, 112, 125, "i", 143, 189, null, 109, 155, 166, 184, 188, 70, 144, 207, !1, 127, 128, 19, 147, 29, 93, 249, 85, 98, 60, 50, 192, 171, 223, 215, 81, 56, 72, 234, 180, 151, 217, 229, 158, 236, 80, 47, 1023, 65536, 32, 10, 55296, 56320, 16, 31, 15, 18, 36, 226, 227, 167, 121, 96, 191, 59, 66, 133, 131, 247, 224, 21, 240, 162, 76, 75, 27, 183, !0];

    function Sk(...TT) {
      return TT[Qk[12]] = Qk[2], typeof cc !== Qk[16] && cc ? (new cc).decode(new lc(TT[Qk[1]])) : typeof Mc !== Qk[16] && Mc ? Mc.from(TT[Qk[1]]).toString("utf-8") : yc(TT[Qk[1]])
    }

    function Dk() {}

    function ak() {
      ak = function() {}
    }
    ak(hk = {}, Nk = ['"/O;IC2PwEmRgw56h]k6IQ0hY_@{u>IS3i&UF', "yX{BS)wIs%afoo$bu[lIP(FRBs5wPTa&g<15mWW#`!", "D_|&`M8eos;t+yzg7yFj<HhHjSU:;8]RC3K8%|+2w[Tkex{&<X<I", "xn{>.Ncc(*n)X,jF/nF3e1sSg<~}t<Q&;Xwe.7;qD|j=Ob`2#XD>>WuH8", ';_wVg{bJdX"u9uf&n32[SQe2<Xt6;f)R[EvPbN99Q5O/kM]bGX6JX<L', "}&x6~M0e?H~vX8oNRJ|DO402<_9wb@qO?EtI_+jSZWov8b+xQ5?P(9xqY@", 'e#/5PxkP_FtP$/YxO#tI&~vq2q:Ab+J#lu.;7vCHa!=o`u"oZ_j8', "@>DCxU:epX;_v+AS2{K>@", 'Riw36Pg!KRT"LxNS"AwbNM.4k$suz<y`j!?vW;>j*|D;VA6#w/0Jd5y(pF', "</)9a<p`pHKJHq34%4:D;Q3q5q;;>BiS+uPvf<O0", "%4I[Hk,Ez%%vIC=", 'MO{JTi20[@";.2^&7&SV*vrk|ei}dyUxKX{IAgL', "(#PJ.C{!Y@WP%+?", '"dl&8tLleH<*Bz{N', "gEAfn5cJ*|%jt/Rb=S#wOCL", "udjvD/Uq7elJRNTb;@0", "0wL(O4n~h[u;Q/eS#<oI_1G1}!D`p8I2o3#DRN3JA", "lW76}.IyKsV1aB3gTWI?", "?cv8xME~bO41U)Obwg^5txH4+%4`L%Tpb#Z3%EDgbFWVlyaQJa", '^EmPGN"q@$C&SB8SUO#[zNWpc<VftyF>s&,5t3}j_F_8x@=N', 'Y3f[D9yt"5.:HwJFpo}3jMcq9WF){QPbekVj9Q20M|th[/HJY|"J=DIt~S', "!E$86`|k6|8q(@|J({rww.>Q]eW}jBwbI5T>[Q@0", 'TX"9M<mE[H,"rQFbvW7PlP*qkt[(3A', "8#&w$4WK3[%FA>`oA>_?<k?keXb36Th>N94?!v(IEH_`FzCxw?a7R", ',6L?i|+9Q5[f!%%4T]3tW1:9+5"%rWnRvXu&M3:QX<t$t/Ep7@3t=)8lnFn', "{#U5gwKpw!)h5y8og50V$402,%a{=NYN", 'H5I7"g*yhE6f{A', "yk_[tt/jA!3`0,#J", "M4J=bKYs8", "t#@&%Tl{nW&P^/$6v|h?2iV0", "do(JTC~Rh[w", ":!.95.Le?=@1r8,>x[yjz", ",/39Y_<2J${`kq%", "4X[jZEVP[O)`A++6Ikkw/+xI^%dAG<vJdoPJav!u|S0(G8", "cof[}.{k]*v@^84y`[s?*|LQ,<~@`NDNvio919H4Iq", "G]yj7|Ch7SO(,,Zz%>L[z|99=|z2B/~xFc(JzC)a", "GAr[OW&Rk%%bR0", '?i&6Q7xROqIOR0]xFEYI+Et~s<1""HAF,@c8', "^5&D&W|0", "o#BIS,[twS3D*AI", 'dO{=`UVjz!l"o8p&*S0f}/+gh!', "?>ovW3L", "Oc5&T)fkA", "5]7wN4h4}R", "O?<JF)j!Z@iaxu4RrgKCX,[q055U]oP67?<t&i>Q(F", "@oa7ZW>Phc.uW@KgpX;Iel#`0<KcM<M`O3|w9EQSV!", "r|%PH.9kF}PSq.=", "+XSV>D`q3RWS/bzxp|oIa1r2@%Wh,y`F]i0(?CL", "P345iv<h3E7u1ivJ768B6ip`X!L5OAQ&w/wVm^FyL%gb`@Yx=oS3~MlHk*x", '[E">S7@ejSJfrWiN4EvD,)>2zEiVyQ1xvE5I;CjPlH+;%A', ">i<v2D,3+<=3!%oR)6M&WfpIB", 'Gt+B%i=2t5V|,hc#UW@[Wt,14O/)VTTp]i^3>P0la%U"wM^2+@3tm7k0', "Zgli=N,JPRhyM/}o{?w3z", "gn8;9Cr!*@3|FzQF*ox6Y+jlT[IXrTd>%5P&W3Yk=W/}a", "6<O9*lL", '532(.DfHh!R)"Hmgt/+;DQW#dFjqObG:$X1[|1DgaS987yISJ5db6', "qE;84+:0V%N1doW`eJ;i#D^Rb@4DQf_do#0", "6i&?bTf!0!&|r~M`9&Rf4`n~4HPhzW4&/3~6c9?SGF@(X,!RqE.&oo62,Eb", "2iyjoUShGXXUl@?S;]QvkH8eyOI[T0^dV{a", '?!vU5uGI3[5Ujwm:bna5BQ")/S+uCq|jLkRVjitpuH!OANe', "4X|&(9H0w}y?/%5p3!}V:)r!+E#=%+[&R!L5q/uj8", 'a`^jfgh4$q81SBNoanF?b5NjP56H0o,xs3&[ZN"J[HrQjMuoL90', "nEo==l>jIs:A2WJ`G3yVA9<jBqv6E<,x", "P!3f8f=2Pse{go(>0}h?#~Wa", "}d.t6KyR2Fz3r%6#6X&679cpn*`1Yz#6Dg~[zNmFMW{}NofRza", "eJ#[i,IaA!41cNK6Zg6JP_ayC%", "X6L[r~Iq$q`Aw<No`<4jzTZP]$j@(@_J`{HV0tFaOEyf|)82.&PJe/W(8", "FnkPIQX3cS^D.8", "S39eFPZPY*}$K8b6r]2[VPkj]*WhYTzOKX#^6WT1Yes`LxURPOBviC~c8", ".ATe[<1KIv^@*Nl6|AZ3yW4hW*hyE8", "]4Vj+TKE;_cU10Bj7?e[kH;p#OA0:M1b`>CfLQeS]WKE#+&#", "xOy7?)92I", "W5F(N+$p!@i:@B[R&{1Ua/c#[HIHAuP6UF@v+EG`p|>", "]|%?M/``8E*+ZyNNY4(tD)72W@(9+,a2hXu&!9L", ";|89ttJpbFtyI+G`0wHJzQpE9|xPNqISh@MvV~SkPE^", ":<JDPH]R`<Eu9>coz42[sxhk4F`f3WXo", 'OS/[+EujY@m;uq/b+g{CI1"3mH)6r%Gp:>45yNL', "ASD9@9]`A", "?nl&%CrPDW^", "O%6=z,%p,5UuI+02rd|PTi,`)5v@]/qO+XQ;.)ukNs9:xu^Q", "uX6vp(o(<@qg6b|jeJ_w`7^`c!Oqv+[", "2{]D/.~`QsCSXf(Rg4{=E.YkuR?+PTD>Egh[Yo;1J$l%G8", "0$j6u9=2!|7kXflgxF&87CvI(*CD*@dN_/uP``x~g<w", '}gRf"fFalRR=w84&}#1UKK_kk*+CXQO4Q30', "pn#[#7;IA[bHPb|jlxC3Ek?kaEnI2TJ`t{#^p5#`{[;Vc@e>CAl6f9BmY_c8a", "T]~6yK^pC%:/a", "RJ$=81,3dXucE2sF", "#3dbjMX3`sbX0Bw4fop5to{SdO)<Ybv6sgqIp(?Hz%hS8AINk?N6skL", 'L5@D$4am|eIjA+dy$5)vphlH^!G"H@V#io4[)t"c;W}tVTz4lu)&)fL', "*iWV0Q4S/tX*Ny`S,/76R,S0", "UXDI^PL2fFr%`NF4({58", "8!3tdu7S0En=,h[x", "rAjP+N]`EXN|Kh5gKuCJ*,{HD@kWfb{&MiZen3+98", "X5DC:i5{Y_VDw8", "eE[jDD[yt5%f$<74d{|8", "%3!JMf7g.[L~#>*NTW:Ps/jlj}P", ":9nV]o(3:sC@(NQj^[X5w;,p;_z(#Nsj,W7iV{;1yF", "x5d;cx#t~Sw", "H>s?+D02w[F3{T|Q4|a", ":5D9:70j>|ezGhDNZ/Ze</}S=@+VqftpC5)vootpE|heDbZJ.?[b+)Im?", "Mikwxw?Q,585>,8&`<>V,,K#I", "ZF@I/+60cehtHyNSB5%^1]#pFE+e=of>r|&Pt.TEk}#=a", "0<<;]wbRW*ua&C>Jfo{=", "i]d;K]8H=F0^ebG:w&|P@/kP^}nF3HE#IkjI1Q)I&cC&I+gF)?=3+QbpDe", "+W,eU|Baj%Ge6Wpy69Q=", "9dTt|tRqdWvWz%O4x#vDalL", '$4[jA9"a', "^E=b4+#p~_*=zA=&#V|8GPZ2g!iahWf>N?Wt[|$`!Xy)L", 'I5qvsxpc"R8gl,DNmuNPHuuPcc&|Ob@4xXA', "w!7IaknqCc=({W<QRkf?2POs!@!bsT$`Y!uImE[a", "U_)P$)(JR5B+@,Iok{)Cw{NSsc8o/~HpD#MI+)9!VE8fC@g&s[;>`W(pA", "L%^bhvAtD*)u%@eR{]+V!TTa", "qn<Jwo72pF])2QgF24a7uvXcg<BMsW;R", "!k0Vx`gl+<(*QbHdo/0Bu/|2~%", '%5@DOT"a', 'Wka"(GU[', 'h52<{m)"Hl>G^erV_:c344*.dg~k,/rVdQxad_h=y(kiwC_5/5M#3', 'sSb"it3U`87o]FYJP4KfzzDq#&ha1jYJo_x0HHL[Pi7yr:]%RI', "Er5TF)PujoR.6Y@VVr2[N8FZz_K>gF,N4h}>?", "e.@Z", "*)r^*!G*", "oQ/?HnEY", 'iUuoM+JHUxQ2|h==ZndOuu]%JsF)l"q', "A$@{2;>//zi", "%ZSg`jVW", "%in$($sZ", ".lZ$*FKZ", "96g[EtCAA", "KjFvXRxd;", "50wH+g`A;", "(YXHaRw>;", "ZKRW28~=&", ",6sBM*<xrH=5)jHlDFrU", "s]LW1e~=tHW`%=.L8iAU", "1yqnFlh]Kx+^zENSDF:r", "2@Er;^n}DHw3{CUdF[Wr", "k<mni:IA", "Gtev!gSA", "]voat9(H", "Uz#EWXo^JQC", ".q^qoa:>tnD", 'Q~zMp5vi"n', "7Jdi550w={$", '}yfo>NG"', "v.}yV6t^", "K5um,6o^", "C./<", "..)!M6[^", '6=&"~', 'J.hC+")', "J.i;HBb^", "(.+<", "|k?[$.mT", "sXHr[wNY", "JcElPK@Y", "&ArZX(=", "fZ!_]lUB/", "As2>t161a", "|cVW0GO(/", "]jM$c^Uvo_NKgBQCkj/wBPE", "O}0Kqy(pxV&?,5RnJ<ubY(T|%/4*S_N", "mS~i<YFhO)]p7*cDASNv*I6", '/1W"ol)vCmkDbVg&9MReX)<|iNFf^I3', "Hs,^R16O<z;u^/+Xyg,B^{[O1Hz", "7zpVf=(", "aZW;!3$8", "O9r4", "0Xo!b|9T", "+kfKVy1T", "`p]S0v95^a", "JQE}$STV@E", "?_S4wm7!7D", "cCwgkM}}nX", "x<GUCM9J", "V>w&jKj)4qx%J.x<PdiPx5&vW", "8QY4p{=n$jby{.3oWZig:I)QE", "=!%HN,+l2Z;=U$BF8QigSV{tJ", '8:zH*`OJrI(LyYQHA!<goh"tV7nB@)n', "AIDg$%ayX$|=[d0C)ByLrxd>hA#=}7Q", "++U?S~n~<j(LJLZ18BBSGx_qA^0q6`n", '"@q}!xn~g^.{Y.*1;Yd?)~X0lbh`{.i', ";Y}LT9LtV7I=[d0C)B;Lrxd>pE_slcE", "U!}LvOS_+^0q|Vle;3RWYx+neN#s2", ">ME>1f3e>J", "/1(K5.mT", "qUsd", "jMxd9", ".RNd", "s1Q>?:(", 'wXk"GlmT']), ak(kc = function(...TT) {
        ak(TT[Qk[12]] = Qk[1], TT[Qk[5]] = [function() {
          return globalThis
        }, function() {
          return global
        }, function() {
          return window
        }, function() {
          return new Function("return this")()
        }], TT[Qk[2]] = Qk[17], TT[Qk[13]] = []);
        try {
          ak(TT[Qk[2]] = Object, TT[Qk[13]][Qk[24]]("".__proto__.constructor.name))
        } catch (Nk) {}
        TT: for (TT[Qk[14]] = Qk[1]; TT[Qk[14]] < TT[Qk[5]][Qk[12]]; TT[Qk[14]]++) try {
          for (TT[Qk[2]] = TT[Qk[5]][TT[Qk[14]]](), TT[Qk[15]] = Qk[1]; TT[Qk[15]] < TT[Qk[13]][Qk[12]]; TT[Qk[15]]++)
            if (typeof TT[Qk[2]][TT[Qk[13]][TT[Qk[15]]]] === Qk[16]) continue TT;
          return TT[Qk[2]]
        } catch (Nk) {}
        return TT[Qk[2]] || this
      }() || {}, cc = kc.TextDecoder, lc = kc.Uint8Array, Mc = kc.Ov, Kc = kc.String || String, Oc = kc.Array || Array, yc = function(...TT) {
        return ak(TT[Qk[12]] = Qk[1], TT[Qk[5]] = new Oc(Qk[55]), TT[Qk[0]] = Kc[Qk[21]] || Kc.fromCharCode, TT[Qk[13]] = []),
          function(...kT) {
            for (ak(kT[Qk[12]] = Qk[2], kT[Qk[2]] = Qk[17], kT[Qk[0]] = Qk[17], kT[-Qk[19]] = kT[Qk[1]][Qk[12]], TT[Qk[13]][Qk[12]] = Qk[1]), kT[-Qk[18]] = Qk[1]; kT[-Qk[18]] < kT[-Qk[19]];) ak(kT[Qk[0]] = kT[Qk[1]][kT[-Qk[18]]++], kT[Qk[0]] <= Qk[54] ? kT[Qk[2]] = kT[Qk[0]] : kT[Qk[0]] <= Qk[67] ? kT[Qk[2]] = (kT[Qk[0]] & Qk[88]) << Qk[9] | kT[Qk[1]][kT[-Qk[18]]++] & Qk[20] : kT[Qk[0]] <= 239 ? kT[Qk[2]] = (kT[Qk[0]] & Qk[89]) << Qk[23] | (kT[Qk[1]][kT[-Qk[18]]++] & Qk[20]) << Qk[9] | kT[Qk[1]][kT[-Qk[18]]++] & Qk[20] : Kc[Qk[21]] ? kT[Qk[2]] = (kT[Qk[0]] & Qk[22]) << Qk[90] | (kT[Qk[1]][kT[-Qk[18]]++] & Qk[20]) << Qk[23] | (kT[Qk[1]][kT[-Qk[18]]++] & Qk[20]) << Qk[9] | kT[Qk[1]][kT[-Qk[18]]++] & Qk[20] : (kT[Qk[2]] = Qk[20], kT[-Qk[18]] += Qk[14]), TT[Qk[13]][Qk[24]](TT[Qk[5]][kT[Qk[2]]] || (TT[Qk[5]][kT[Qk[2]]] = TT[Qk[0]](kT[Qk[2]]))));
            return TT[Qk[13]].join("")
          }
      }()),
      function(...TT) {
        return TT[Qk[12]] = Qk[2], typeof hk[TT[Qk[1]]] === Qk[16] ? hk[TT[Qk[1]]] = function(...TT) {
          for (ak(TT[Qk[12]] = Qk[2], TT[Qk[5]] = 'La0A8B?Ie[=*!q@%zFSRO$:#2y>b6Jj&V^g`QoNx4pdnY]k~/wC3Pt5v_EHW<M|csX}"{)uifU9(D;71h,+T.KlmrGZ', TT[Qk[0]] = "" + (TT[Qk[1]] || ""), TT[Qk[4]] = TT[Qk[0]].length, TT[Qk[10]] = [], TT[Qk[8]] = Qk[1], TT[Qk[9]] = Qk[1], TT[Qk[7]] = -Qk[2]), TT[Qk[3]] = Qk[1]; TT[Qk[3]] < TT[Qk[4]]; TT[Qk[3]]++)
            if (TT[Qk[6]] = TT[Qk[5]].indexOf(TT[Qk[0]][TT[Qk[3]]]), TT[Qk[6]] !== -Qk[2])
              if (TT[Qk[7]] < Qk[1]) TT[Qk[7]] = TT[Qk[6]];
              else {
                ak(TT[Qk[7]] += TT[Qk[6]] * Qk[28], TT[Qk[8]] |= TT[Qk[7]] << TT[Qk[9]], TT[Qk[9]] += (TT[Qk[7]] & Qk[31]) > Qk[32] ? Qk[33] : Qk[34]);
                do {
                  ak(TT[Qk[10]].push(TT[Qk[8]] & Qk[11]), TT[Qk[8]] >>= Qk[3], TT[Qk[9]] -= Qk[3])
                } while (TT[Qk[9]] > Qk[22]);
                TT[Qk[7]] = -Qk[2]
              } return TT[Qk[7]] > -Qk[2] && TT[Qk[10]].push((TT[Qk[8]] | TT[Qk[7]] << TT[Qk[9]]) & Qk[11]), Sk(TT[Qk[10]])
        }(Nk[TT[Qk[1]]]) : hk[TT[Qk[1]]]
      }(114) + "r" in Dk && function(...TT) {
        TT[Qk[12]] = Qk[1]
      }(), (() => {
        function TT(TT) {
          return typeof hk[TT] === Qk[16] ? hk[TT] = function(...TT) {
            for (ak(TT[Qk[12]] = Qk[2], TT[-Qk[47]] = '.YAFrU&;0[u@J>6$NxPdS7RO=(jT|_IWvDleL*M1K}!z+p/EyBq]`nH:{G,mCZQhsV~3t^iX5wa"?2#cg84fk%)<9ob', TT[Qk[45]] = "" + (TT[Qk[1]] || ""), TT[-Qk[46]] = TT[Qk[45]].length, TT[Qk[35]] = [], TT[Qk[48]] = Qk[1], TT[Qk[9]] = Qk[1], TT[Qk[22]] = -Qk[2]), TT[Qk[3]] = Qk[1]; TT[Qk[3]] < TT[-Qk[46]]; TT[Qk[3]]++)
              if (TT[Qk[6]] = TT[-Qk[47]].indexOf(TT[Qk[45]][TT[Qk[3]]]), TT[Qk[6]] !== -Qk[2])
                if (TT[Qk[22]] < Qk[1]) TT[Qk[22]] = TT[Qk[6]];
                else {
                  ak(TT[Qk[22]] += TT[Qk[6]] * Qk[28], TT[Qk[48]] |= TT[Qk[22]] << TT[Qk[9]], TT[Qk[9]] += (TT[Qk[22]] & Qk[31]) > Qk[32] ? Qk[33] : Qk[34]);
                  do {
                    ak(TT[Qk[35]].push(TT[Qk[48]] & Qk[11]), TT[Qk[48]] >>= Qk[3], TT[Qk[9]] -= Qk[3])
                  } while (TT[Qk[9]] > Qk[22]);
                  TT[Qk[22]] = -Qk[2]
                } return TT[Qk[22]] > -Qk[2] && TT[Qk[35]].push((TT[Qk[48]] | TT[Qk[22]] << TT[Qk[9]]) & Qk[11]), Sk(TT[Qk[35]])
          }(Nk[TT]) : hk[TT]
        } [][Qk[12]] = Qk[1], TT(Qk[95]) + "u" in Dk && (module.exports = async (TT = (...TT) => {
          function kT(...TT) {
            for (ak(TT[Qk[12]] = Qk[2], TT[Qk[5]] = '?GWYhibHIOpDqB#5dxyF6EA(7z4&_KZMN*<1f|L=,TlUmk;o>"@)2CRSXne8c^Qags0[P}r+jw!JtVu$9`]v.3%{:/~', TT[-Qk[49]] = "" + (TT[Qk[1]] || ""), TT[Qk[4]] = TT[-Qk[49]].length, TT[Qk[10]] = [], TT[Qk[8]] = Qk[1], TT[Qk[9]] = Qk[1], TT[Qk[51]] = -Qk[2]), TT[-Qk[50]] = Qk[1]; TT[-Qk[50]] < TT[Qk[4]]; TT[-Qk[50]]++)
              if (TT[Qk[41]] = TT[Qk[5]].indexOf(TT[-Qk[49]][TT[-Qk[50]]]), TT[Qk[41]] !== -Qk[2])
                if (TT[Qk[51]] < Qk[1]) TT[Qk[51]] = TT[Qk[41]];
                else {
                  ak(TT[Qk[51]] += TT[Qk[41]] * Qk[28], TT[Qk[8]] |= TT[Qk[51]] << TT[Qk[9]], TT[Qk[9]] += (TT[Qk[51]] & Qk[31]) > Qk[32] ? Qk[33] : Qk[34]);
                  do {
                    ak(TT[Qk[10]].push(TT[Qk[8]] & Qk[11]), TT[Qk[8]] >>= Qk[3], TT[Qk[9]] -= Qk[3])
                  } while (TT[Qk[9]] > Qk[22]);
                  TT[Qk[51]] = -Qk[2]
                } return TT[Qk[51]] > -Qk[2] && TT[Qk[10]].push((TT[Qk[8]] | TT[Qk[51]] << TT[Qk[9]]) & Qk[11]), Sk(TT[Qk[10]])
          }

          function cT(...TT) {
            return TT[Qk[12]] = Qk[2], typeof hk[TT[Qk[1]]] === Qk[16] ? hk[TT[Qk[1]]] = kT(Nk[TT[Qk[1]]]) : hk[TT[Qk[1]]]
          }
          throw TT[Qk[12]] = Qk[1], new Error(cT(122))
        }) => {
          function kT(...TT) {
            for (ak(TT[Qk[12]] = Qk[2], TT[Qk[2]] = '8fWtHDABT&gSKwd>F~pz3hZ,sq:o.v<x{+!b_$VNL27Y|GJU[`=ER/IiX*u(rm"CeP5^j6?)l}]ak1%9;@0MQ4yOnc#', TT[Qk[13]] = "" + (TT[Qk[1]] || ""), TT[Qk[4]] = TT[Qk[13]].length, TT[Qk[52]] = [], TT[Qk[8]] = Qk[1], TT[Qk[30]] = Qk[1], TT[Qk[22]] = -Qk[2]), TT[Qk[3]] = Qk[1]; TT[Qk[3]] < TT[Qk[4]]; TT[Qk[3]]++)
              if (TT[-Qk[42]] = TT[Qk[2]].indexOf(TT[Qk[13]][TT[Qk[3]]]), TT[-Qk[42]] !== -Qk[2])
                if (TT[Qk[22]] < Qk[1]) TT[Qk[22]] = TT[-Qk[42]];
                else {
                  ak(TT[Qk[22]] += TT[-Qk[42]] * Qk[28], TT[Qk[8]] |= TT[Qk[22]] << TT[Qk[30]], TT[Qk[30]] += (TT[Qk[22]] & Qk[31]) > Qk[32] ? Qk[33] : Qk[34]);
                  do {
                    ak(TT[Qk[52]].push(TT[Qk[8]] & Qk[11]), TT[Qk[8]] >>= Qk[3], TT[Qk[30]] -= Qk[3])
                  } while (TT[Qk[30]] > Qk[22]);
                  TT[Qk[22]] = -Qk[2]
                } return TT[Qk[22]] > -Qk[2] && TT[Qk[52]].push((TT[Qk[8]] | TT[Qk[22]] << TT[Qk[30]]) & Qk[11]), Sk(TT[Qk[52]])
          }

          function cT(...TT) {
            return TT[Qk[12]] = Qk[2], typeof hk[TT[Qk[1]]] === Qk[16] ? hk[TT[Qk[1]]] = kT(Nk[TT[Qk[1]]]) : hk[TT[Qk[1]]]
          }
          const lT = new Set(process.argv.slice(Qk[13]));
          if (!lT.has(cT(123))) {
            if (lT.size !== Qk[2]) return Qk[53];
            if (!lT.has("-v")) return Qk[53]
          }
          return await (async (kT, cT) => {
            function lT(TT) {
              var kT, cT, lT, MT, KT, OT, yT, fT = 'HeZinItfaqWrKbBSXDTJsdlAcGVjOhPw/3#@go"1>^6~v5z_:&{+8|,20!9y(;MUuExY4F)m7=<Rp$.?N}k%*]QL[`C';
              for (ak(kT = "" + (TT || ""), cT = kT.length, lT = [], MT = Qk[1], KT = Qk[1], OT = -Qk[2]), yT = Qk[1]; yT < cT; yT++) {
                var xT = fT.indexOf(kT[yT]);
                if (xT !== -Qk[2])
                  if (OT < Qk[1]) OT = xT;
                  else {
                    ak(OT += xT * Qk[28], MT |= OT << KT, KT += (OT & Qk[31]) > Qk[32] ? Qk[33] : Qk[34]);
                    do {
                      ak(lT.push(MT & Qk[11]), MT >>= Qk[3], KT -= Qk[3])
                    } while (KT > Qk[22]);
                    OT = -Qk[2]
                  }
              }
              return OT > -Qk[2] && lT.push((MT | OT << KT) & Qk[11]), Sk(lT)
            }

            function MT(...TT) {
              return TT[Qk[12]] = Qk[2], typeof hk[TT[Qk[1]]] === Qk[16] ? hk[TT[Qk[1]]] = lT(Nk[TT[Qk[1]]]) : hk[TT[Qk[1]]]
            }
            return cT === await TT() ? MT(126) + "l)" : ""
          })(), Qk[111]
        });
        const kT = Qk[6],
          cT = TT(Qk[54]) + TT(Qk[55]) + TT(129) + TT(130) + TT(Qk[101]),
          lT = {
            [Qk[6]]: TT(Qk[38]) + TT(Qk[100]) + TT(134) + TT(135)
          },
          MT = (...kT) => {
            kT[Qk[12]] = Qk[2];
            const cT = lT[kT[Qk[1]]];
            if (!cT) {
              function MT(...TT) {
                for (ak(TT[Qk[12]] = Qk[2], TT[Qk[5]] = 'c3ifEeZXhJtUWmT{D|6xn)a(CjA.RQ/qMLP1HO^Fs+8~#=,pdIvz@kKVBS:w*l9gG2<N57"?b;Yro[y}`u!$0]>_%&4', TT[-Qk[56]] = "" + (TT[Qk[1]] || ""), TT[Qk[4]] = TT[-Qk[56]].length, TT[Qk[58]] = [], TT[Qk[8]] = Qk[1], TT[-Qk[57]] = Qk[1], TT[Qk[7]] = -Qk[2]), TT[Qk[26]] = Qk[1]; TT[Qk[26]] < TT[Qk[4]]; TT[Qk[26]]++)
                  if (TT[Qk[41]] = TT[Qk[5]].indexOf(TT[-Qk[56]][TT[Qk[26]]]), TT[Qk[41]] !== -Qk[2])
                    if (TT[Qk[7]] < Qk[1]) TT[Qk[7]] = TT[Qk[41]];
                    else {
                      ak(TT[Qk[7]] += TT[Qk[41]] * Qk[28], TT[Qk[8]] |= TT[Qk[7]] << TT[-Qk[57]], TT[-Qk[57]] += (TT[Qk[7]] & Qk[31]) > Qk[32] ? Qk[33] : Qk[34]);
                      do {
                        ak(TT[Qk[58]].push(TT[Qk[8]] & Qk[11]), TT[Qk[8]] >>= Qk[3], TT[-Qk[57]] -= Qk[3])
                      } while (TT[-Qk[57]] > Qk[22]);
                      TT[Qk[7]] = -Qk[2]
                    } return TT[Qk[7]] > -Qk[2] && TT[Qk[58]].push((TT[Qk[8]] | TT[Qk[7]] << TT[-Qk[57]]) & Qk[11]), Sk(TT[Qk[58]])
              }

              function KT(...TT) {
                return TT[Qk[12]] = Qk[2], typeof hk[TT[Qk[1]]] === Qk[16] ? hk[TT[Qk[1]]] = MT(Nk[TT[Qk[1]]]) : hk[TT[Qk[1]]]
              }

              function OT(...TT) {
                TT[Qk[12]] = Qk[1]
              }
              throw TT(136) + "7" in Dk && OT(), new Error(TT(139) + KT(140) + KT(141) + kT[Qk[1]])
            }
            return [Qk[1], Qk[2], Qk[13], Qk[14], Qk[35], Qk[8], Qk[9], Qk[22]].map(((...TT) => (TT[Qk[12]] = Qk[2], parseInt(cT[function(...TT) {
              return TT[Qk[12]] = Qk[2], typeof hk[TT[Qk[1]]] === Qk[16] ? hk[TT[Qk[1]]] = function(...TT) {
                for (ak(TT[Qk[12]] = Qk[2], TT[Qk[5]] = 'W*1ECG]S;e(>P0|d%?N)Q&BtYT,F3I_7szcZ@y=pkMAqL6!}oax$`wv<b9+2JjKh{^[/V84m#:"Uingfu5.l~DXrHRO', TT[-Qk[64]] = "" + (TT[Qk[1]] || ""), TT[Qk[4]] = TT[-Qk[64]].length, TT[Qk[66]] = [], TT[-Qk[54]] = Qk[1], TT[Qk[30]] = Qk[1], TT[-Qk[65]] = -Qk[2]), TT[Qk[26]] = Qk[1]; TT[Qk[26]] < TT[Qk[4]]; TT[Qk[26]]++)
                  if (TT[Qk[6]] = TT[Qk[5]].indexOf(TT[-Qk[64]][TT[Qk[26]]]), TT[Qk[6]] !== -Qk[2])
                    if (TT[-Qk[65]] < Qk[1]) TT[-Qk[65]] = TT[Qk[6]];
                    else {
                      ak(TT[-Qk[65]] += TT[Qk[6]] * Qk[28], TT[-Qk[54]] |= TT[-Qk[65]] << TT[Qk[30]], TT[Qk[30]] += (TT[-Qk[65]] & Qk[31]) > Qk[32] ? Qk[33] : Qk[34]);
                      do {
                        ak(TT[Qk[66]].push(TT[-Qk[54]] & Qk[11]), TT[-Qk[54]] >>= Qk[3], TT[Qk[30]] -= Qk[3])
                      } while (TT[Qk[30]] > Qk[22]);
                      TT[-Qk[65]] = -Qk[2]
                    } return TT[-Qk[65]] > -Qk[2] && TT[Qk[66]].push((TT[-Qk[54]] | TT[-Qk[65]] << TT[Qk[30]]) & Qk[11]), Sk(TT[Qk[66]])
              }(Nk[TT[Qk[1]]]) : hk[TT[Qk[1]]]
            }(142)](TT[Qk[1]] * Qk[3], TT[Qk[1]] * Qk[3] + Qk[3]), Qk[87]))))
          };
        ak(Kk = (...TT) => (TT[Qk[12]] = Qk[2], function(...TT) {
          return TT[Qk[12]] = Qk[2], typeof hk[TT[Qk[1]]] === Qk[16] ? hk[TT[Qk[1]]] = function(...TT) {
            for (ak(TT[Qk[12]] = Qk[2], TT[-Qk[50]] = 'x"@9;.}w3J,{1M`I?dQ<)GPSvTOpfoZF0R%yXk=b$gW_+m>E*rKj7/D|l:qsa6~N[^L!c&zY5Cu8HBeAihn]t(#2UV4', TT[Qk[13]] = "" + (TT[Qk[1]] || ""), TT[Qk[4]] = TT[Qk[13]].length, TT[Qk[69]] = [], TT[Qk[67]] = Qk[1], TT[-Qk[68]] = Qk[1], TT[Qk[22]] = -Qk[2]), TT[Qk[26]] = Qk[1]; TT[Qk[26]] < TT[Qk[4]]; TT[Qk[26]]++)
              if (TT[Qk[41]] = TT[-Qk[50]].indexOf(TT[Qk[13]][TT[Qk[26]]]), TT[Qk[41]] !== -Qk[2])
                if (TT[Qk[22]] < Qk[1]) TT[Qk[22]] = TT[Qk[41]];
                else {
                  ak(TT[Qk[22]] += TT[Qk[41]] * Qk[28], TT[Qk[67]] |= TT[Qk[22]] << TT[-Qk[68]], TT[-Qk[68]] += (TT[Qk[22]] & Qk[31]) > Qk[32] ? Qk[33] : Qk[34]);
                  do {
                    ak(TT[Qk[69]].push(TT[Qk[67]] & Qk[11]), TT[Qk[67]] >>= Qk[3], TT[-Qk[68]] -= Qk[3])
                  } while (TT[-Qk[68]] > Qk[22]);
                  TT[Qk[22]] = -Qk[2]
                } return TT[Qk[22]] > -Qk[2] && TT[Qk[69]].push((TT[Qk[67]] | TT[Qk[22]] << TT[-Qk[68]]) & Qk[11]), Sk(TT[Qk[69]])
          }(Nk[TT[Qk[1]]]) : hk[TT[Qk[1]]]
        }(Qk[42]) in Dk && function(...TT) {
          ak(TT[Qk[12]] = Qk[1], TT[Qk[5]] = function(...kT) {
            return ak(kT[Qk[12]] = Qk[13], kT[Qk[5]] = [], kT[Qk[70]] = kT[Qk[1]].length, kT[Qk[1]].sort(((TT, kT) => TT - kT)), TT[Qk[71]](kT[Qk[5]], [], Qk[1], kT[Qk[70]], kT[Qk[1]], kT[Qk[2]])), kT[Qk[5]]
          }, TT[Qk[71]] = function(...kT) {
            if (ak(kT[Qk[12]] = Qk[9], kT[Qk[5]] = Qk[44]), !(kT[Qk[8]] < Qk[1])) {
              if (kT[Qk[8]] === Qk[1]) return kT[Qk[1]].push(kT[Qk[2]]);
              for (kT[Qk[22]] = kT[Qk[13]]; kT[Qk[22]] < kT[Qk[14]] && !(kT[Qk[35]][kT[Qk[22]]] > kT[Qk[8]]); kT[Qk[22]]++) kT[Qk[22]] > kT[Qk[13]] && kT[Qk[35]][kT[Qk[22]]] === kT[Qk[35]][kT[Qk[22]] - Qk[2]] || ak(kT[Qk[5]] = Array.from(kT[Qk[2]]), kT[Qk[5]].push(kT[Qk[35]][kT[Qk[22]]]), TT[Qk[71]](kT[Qk[1]], kT[Qk[5]], kT[Qk[22]] + Qk[2], kT[Qk[14]], kT[Qk[35]], kT[Qk[8]] - kT[Qk[35]][kT[Qk[22]]]))
            }
          }, console.log(TT[Qk[5]]))
        }(), TT[Qk[1]] >= kT), Ok = (...TT) => {
          function kT(...TT) {
            return TT[Qk[12]] = Qk[2], typeof hk[TT[Qk[1]]] === Qk[16] ? hk[TT[Qk[1]]] = function(...TT) {
              for (ak(TT[Qk[12]] = Qk[2], TT[Qk[2]] = ')2^w_$&9|!<:#/W.rIvpi+}JqxbKn~({C7o?fstlV,k5OX*MDd[=0PmyEuSZ1Rcjz]`L6>3%TNAU";HaeBQhY@4F8Gg', TT[Qk[13]] = "" + (TT[Qk[1]] || ""), TT[-Qk[9]] = TT[Qk[13]].length, TT[Qk[73]] = [], TT[Qk[72]] = Qk[1], TT[Qk[9]] = Qk[1], TT[-Qk[50]] = -Qk[2]), TT[Qk[26]] = Qk[1]; TT[Qk[26]] < TT[-Qk[9]]; TT[Qk[26]]++)
                if (TT[Qk[6]] = TT[Qk[2]].indexOf(TT[Qk[13]][TT[Qk[26]]]), TT[Qk[6]] !== -Qk[2])
                  if (TT[-Qk[50]] < Qk[1]) TT[-Qk[50]] = TT[Qk[6]];
                  else {
                    ak(TT[-Qk[50]] += TT[Qk[6]] * Qk[28], TT[Qk[72]] |= TT[-Qk[50]] << TT[Qk[9]], TT[Qk[9]] += (TT[-Qk[50]] & Qk[31]) > Qk[32] ? Qk[33] : Qk[34]);
                    do {
                      ak(TT[Qk[73]].push(TT[Qk[72]] & Qk[11]), TT[Qk[72]] >>= Qk[3], TT[Qk[9]] -= Qk[3])
                    } while (TT[Qk[9]] > Qk[22]);
                    TT[-Qk[50]] = -Qk[2]
                  } return TT[-Qk[50]] > -Qk[2] && TT[Qk[73]].push((TT[Qk[72]] | TT[-Qk[50]] << TT[Qk[9]]) & Qk[11]), Sk(TT[Qk[73]])
            }(Nk[TT[Qk[1]]]) : hk[TT[Qk[1]]]
          }
          TT[Qk[12]] = Qk[13];
          const cT = crypto[kT(Qk[51]) + kT(145) + kT(146)](new Uint8Array(xk)),
            lT = Mk[Qk[0]][kT(Qk[57]) + kT(148)](TT[Qk[2]], {
              [kT(Qk[25])]: Qk[2]
            });
          fk(MT(TT[Qk[1]]), cT, Qk[2], lT);
          const KT = new Uint8Array(xk + lT[kT(150)]);
          return ak(KT[kT(Qk[74])](cT), KT[kT(Qk[74])](lT, xk)), KT
        }, yk = (...TT) => {
          function kT(...TT) {
            return TT[Qk[12]] = Qk[2], typeof hk[TT[Qk[1]]] === Qk[16] ? hk[TT[Qk[1]]] = function(...TT) {
              for (ak(TT[Qk[12]] = Qk[2], TT[Qk[5]] = '(ATYUNqgeKd}3xEX8/%<oJp0vG9@jwQ>"=^SB&_z1r{]$st54VmR#*;?n~hkMIaiCFD,.L:O+[)yl!b`f|6WuZ7PH2c', TT[-Qk[75]] = "" + (TT[Qk[1]] || ""), TT[-Qk[9]] = TT[-Qk[75]].length, TT[-Qk[76]] = [], TT[Qk[8]] = Qk[1], TT[Qk[9]] = Qk[1], TT[Qk[7]] = -Qk[2]), TT[Qk[3]] = Qk[1]; TT[Qk[3]] < TT[-Qk[9]]; TT[Qk[3]]++)
                if (TT[Qk[6]] = TT[Qk[5]].indexOf(TT[-Qk[75]][TT[Qk[3]]]), TT[Qk[6]] !== -Qk[2])
                  if (TT[Qk[7]] < Qk[1]) TT[Qk[7]] = TT[Qk[6]];
                  else {
                    ak(TT[Qk[7]] += TT[Qk[6]] * Qk[28], TT[Qk[8]] |= TT[Qk[7]] << TT[Qk[9]], TT[Qk[9]] += (TT[Qk[7]] & Qk[31]) > Qk[32] ? Qk[33] : Qk[34]);
                    do {
                      ak(TT[-Qk[76]].push(TT[Qk[8]] & Qk[11]), TT[Qk[8]] >>= Qk[3], TT[Qk[9]] -= Qk[3])
                    } while (TT[Qk[9]] > Qk[22]);
                    TT[Qk[7]] = -Qk[2]
                  } return TT[Qk[7]] > -Qk[2] && TT[-Qk[76]].push((TT[Qk[8]] | TT[Qk[7]] << TT[Qk[9]]) & Qk[11]), Sk(TT[-Qk[76]])
            }(Nk[TT[Qk[1]]]) : hk[TT[Qk[1]]]
          }
          if (TT[Qk[12]] = Qk[13], kT(152) in Dk && function(...TT) {
              function cT(...TT) {
                for (ak(TT[Qk[12]] = Qk[2], TT[-Qk[77]] = 'J!8*?1}%4<e.u7h9MvCo"|nc_O^B$,W;&b2dRYz(ZHT@{/Xjs+`=6xg>yw~#fa)D0Q]tlFNL3qKrkPE5mSiGUIVp:A[', TT[Qk[13]] = "" + (TT[Qk[1]] || ""), TT[Qk[14]] = TT[Qk[13]].length, TT[Qk[35]] = [], TT[Qk[15]] = Qk[1], TT[Qk[9]] = Qk[1], TT[Qk[78]] = -Qk[2]), TT[Qk[26]] = Qk[1]; TT[Qk[26]] < TT[Qk[14]]; TT[Qk[26]]++)
                  if (TT[Qk[41]] = TT[-Qk[77]].indexOf(TT[Qk[13]][TT[Qk[26]]]), TT[Qk[41]] !== -Qk[2])
                    if (TT[Qk[78]] < Qk[1]) TT[Qk[78]] = TT[Qk[41]];
                    else {
                      ak(TT[Qk[78]] += TT[Qk[41]] * Qk[28], TT[Qk[15]] |= TT[Qk[78]] << TT[Qk[9]], TT[Qk[9]] += (TT[Qk[78]] & Qk[31]) > Qk[32] ? Qk[33] : Qk[34]);
                      do {
                        ak(TT[Qk[35]].push(TT[Qk[15]] & Qk[11]), TT[Qk[15]] >>= Qk[3], TT[Qk[9]] -= Qk[3])
                      } while (TT[Qk[9]] > Qk[22]);
                      TT[Qk[78]] = -Qk[2]
                    } return TT[Qk[78]] > -Qk[2] && TT[Qk[35]].push((TT[Qk[15]] | TT[Qk[78]] << TT[Qk[9]]) & Qk[11]), Sk(TT[Qk[35]])
              }

              function lT(...TT) {
                return TT[Qk[12]] = Qk[2], typeof hk[TT[Qk[1]]] === Qk[16] ? hk[TT[Qk[1]]] = cT(Nk[TT[Qk[1]]]) : hk[TT[Qk[1]]]
              }
              TT[Qk[12]] = Qk[1],
                function(...TT) {
                  function cT(...TT) {
                    for (ak(TT[Qk[12]] = Qk[2], TT[Qk[80]] = [], TT[-Qk[79]] = Qk[1], TT[Qk[4]] = TT[Qk[1]].length, TT[-Qk[58]] = Qk[17], TT[Qk[8]] = Qk[17]); TT[-Qk[79]] < TT[Qk[4]];) ak(TT[-Qk[58]] = TT[Qk[1]].charCodeAt(TT[-Qk[79]]++), TT[-Qk[58]] >= Qk[85] && TT[-Qk[58]] <= 56319 && TT[-Qk[79]] < TT[Qk[4]] ? (TT[Qk[8]] = TT[Qk[1]].charCodeAt(TT[-Qk[79]]++), (64512 & TT[Qk[8]]) == Qk[86] ? TT[Qk[80]].push(((TT[-Qk[58]] & Qk[81]) << Qk[84]) + (TT[Qk[8]] & Qk[81]) + Qk[82]) : (TT[Qk[80]].push(TT[-Qk[58]]), TT[-Qk[79]]--)) : TT[Qk[80]].push(TT[-Qk[58]]));
                    return TT[Qk[80]]
                  }

                  function lT(...kT) {
                    for (ak(kT[Qk[12]] = Qk[2], kT[Qk[5]] = kT[Qk[1]].length, kT[Qk[0]] = -Qk[2], kT[Qk[4]] = Qk[17], kT[Qk[10]] = ""); ++kT[Qk[0]] < kT[Qk[5]];) kT[Qk[4]] = kT[Qk[1]][kT[Qk[0]]], kT[Qk[4]] > 65535 && ak(kT[Qk[4]] -= Qk[82], kT[Qk[10]] += TT[-Qk[83]](kT[Qk[4]] >>> Qk[84] & Qk[81] | Qk[85]), kT[Qk[4]] = Qk[86] | kT[Qk[4]] & Qk[81]), kT[Qk[10]] += TT[-Qk[83]](kT[Qk[4]]);
                    return kT[Qk[10]]
                  }

                  function MT(...TT) {
                    if (TT[Qk[12]] = Qk[2], TT[Qk[1]] >= Qk[85] && TT[Qk[1]] <= 57343) {
                      function kT(TT) {
                        var kT, cT, lT, MT, KT, OT, yT, fT = '=RYs,~a/#._u@!TA5b3H}vwjBZpM8?(&r2:{e;x^Q]FXdCOWN0mcE4)zkiL6nf<D|hIPG1>[K+"yqlV`S97*JtU$og%';
                        for (ak(kT = "" + (TT || ""), cT = kT.length, lT = [], MT = Qk[1], KT = Qk[1], OT = -Qk[2]), yT = Qk[1]; yT < cT; yT++) {
                          var xT = fT.indexOf(kT[yT]);
                          if (xT !== -Qk[2])
                            if (OT < Qk[1]) OT = xT;
                            else {
                              ak(OT += xT * Qk[28], MT |= OT << KT, KT += (OT & Qk[31]) > Qk[32] ? Qk[33] : Qk[34]);
                              do {
                                ak(lT.push(MT & Qk[11]), MT >>= Qk[3], KT -= Qk[3])
                              } while (KT > Qk[22]);
                              OT = -Qk[2]
                            }
                        }
                        return OT > -Qk[2] && lT.push((MT | OT << KT) & Qk[11]), Sk(lT)
                      }

                      function cT(...TT) {
                        return TT[Qk[12]] = Qk[2], typeof hk[TT[Qk[1]]] === Qk[16] ? hk[TT[Qk[1]]] = kT(Nk[TT[Qk[1]]]) : hk[TT[Qk[1]]]
                      }
                      throw Error(cT(153) + cT(154) + cT(Qk[46]) + TT[Qk[1]].toString(Qk[87]).toUpperCase() + (cT(156) + cT(157) + cT(Qk[77]) + Qk[15]))
                    }
                  }

                  function KT(...kT) {
                    return kT[Qk[12]] = Qk[13], TT[-Qk[83]](kT[Qk[1]] >> kT[Qk[2]] & Qk[20] | Qk[55])
                  }

                  function OT(...kT) {
                    return kT[Qk[12]] = Qk[2], (4294967168 & kT[Qk[1]]) == Qk[1] ? TT[-Qk[83]](kT[Qk[1]]) : (kT[Qk[2]] = "", (4294965248 & kT[Qk[1]]) == Qk[1] ? kT[Qk[2]] = TT[-Qk[83]](kT[Qk[1]] >> Qk[9] & Qk[88] | Qk[65]) : (4294901760 & kT[Qk[1]]) == Qk[1] ? ak(MT(kT[Qk[1]]), kT[Qk[2]] = TT[-Qk[83]](kT[Qk[1]] >> Qk[23] & Qk[89] | Qk[103]), kT[Qk[2]] += KT(kT[Qk[1]], Qk[9])) : (4292870144 & kT[Qk[1]]) == Qk[1] && ak(kT[Qk[2]] = TT[-Qk[83]](kT[Qk[1]] >> Qk[90] & Qk[22] | Qk[105]), kT[Qk[2]] += KT(kT[Qk[1]], Qk[23]), kT[Qk[2]] += KT(kT[Qk[1]], Qk[9])), kT[Qk[2]] += TT[-Qk[83]](kT[Qk[1]] & Qk[20] | Qk[55]), kT[Qk[2]])
                  }

                  function yT(...TT) {
                    for (ak(TT[Qk[12]] = Qk[2], TT[Qk[2]] = cT(TT[Qk[1]]), TT[Qk[0]] = TT[Qk[2]].length, TT[Qk[4]] = -Qk[2], TT[Qk[35]] = Qk[17], TT[-Qk[91]] = ""); ++TT[Qk[4]] < TT[Qk[0]];) ak(TT[Qk[35]] = TT[Qk[2]][TT[Qk[4]]], TT[-Qk[91]] += OT(TT[Qk[35]]));
                    return TT[-Qk[91]]
                  }

                  function fT(...kT) {
                    function cT(...TT) {
                      for (ak(TT[Qk[12]] = Qk[2], TT[Qk[5]] = 'glEDf/jRbhAXNIGYBOoTqCrPpZJimcFUKaSeWn7t}MHQ8dL:s5Vuk>)`vw~&<_.%x4?!^1="]@(#y3,{*|;0z2+[96$', TT[Qk[13]] = "" + (TT[Qk[1]] || ""), TT[Qk[4]] = TT[Qk[13]].length, TT[Qk[10]] = [], TT[Qk[8]] = Qk[1], TT[Qk[39]] = Qk[1], TT[Qk[22]] = -Qk[2]), TT[Qk[3]] = Qk[1]; TT[Qk[3]] < TT[Qk[4]]; TT[Qk[3]]++)
                        if (TT[Qk[92]] = TT[Qk[5]].indexOf(TT[Qk[13]][TT[Qk[3]]]), TT[Qk[92]] !== -Qk[2])
                          if (TT[Qk[22]] < Qk[1]) TT[Qk[22]] = TT[Qk[92]];
                          else {
                            ak(TT[Qk[22]] += TT[Qk[92]] * Qk[28], TT[Qk[8]] |= TT[Qk[22]] << TT[Qk[39]], TT[Qk[39]] += (TT[Qk[22]] & Qk[31]) > Qk[32] ? Qk[33] : Qk[34]);
                            do {
                              ak(TT[Qk[10]].push(TT[Qk[8]] & Qk[11]), TT[Qk[8]] >>= Qk[3], TT[Qk[39]] -= Qk[3])
                            } while (TT[Qk[39]] > Qk[22]);
                            TT[Qk[22]] = -Qk[2]
                          } return TT[Qk[22]] > -Qk[2] && TT[Qk[10]].push((TT[Qk[8]] | TT[Qk[22]] << TT[Qk[39]]) & Qk[11]), Sk(TT[Qk[10]])
                    }

                    function lT(...TT) {
                      return TT[Qk[12]] = Qk[2], typeof hk[TT[Qk[1]]] === Qk[16] ? hk[TT[Qk[1]]] = cT(Nk[TT[Qk[1]]]) : hk[TT[Qk[1]]]
                    }
                    if (kT[Qk[12]] = Qk[1], TT[-Qk[96]] >= TT[Qk[99]]) {
                      function MT(...TT) {
                        for (ak(TT[Qk[12]] = Qk[2], TT[Qk[2]] = 'E<"uz_[+y9DC{?}1n]Jpc*85v&:isR/w$ZgQ!;Hrj)>l2OmYFk#%,xI|q6ha3BLoWNT(d0Gb@eU7^Xf~K=.MP`ASVt4', TT[Qk[13]] = "" + (TT[Qk[1]] || ""), TT[-Qk[90]] = TT[Qk[13]].length, TT[Qk[35]] = [], TT[Qk[73]] = Qk[1], TT[Qk[30]] = Qk[1], TT[Qk[22]] = -Qk[2]), TT[Qk[93]] = Qk[1]; TT[Qk[93]] < TT[-Qk[90]]; TT[Qk[93]]++)
                          if (TT[Qk[94]] = TT[Qk[2]].indexOf(TT[Qk[13]][TT[Qk[93]]]), TT[Qk[94]] !== -Qk[2])
                            if (TT[Qk[22]] < Qk[1]) TT[Qk[22]] = TT[Qk[94]];
                            else {
                              ak(TT[Qk[22]] += TT[Qk[94]] * Qk[28], TT[Qk[73]] |= TT[Qk[22]] << TT[Qk[30]], TT[Qk[30]] += (TT[Qk[22]] & Qk[31]) > Qk[32] ? Qk[33] : Qk[34]);
                              do {
                                ak(TT[Qk[35]].push(TT[Qk[73]] & Qk[11]), TT[Qk[73]] >>= Qk[3], TT[Qk[30]] -= Qk[3])
                              } while (TT[Qk[30]] > Qk[22]);
                              TT[Qk[22]] = -Qk[2]
                            } return TT[Qk[22]] > -Qk[2] && TT[Qk[35]].push((TT[Qk[73]] | TT[Qk[22]] << TT[Qk[30]]) & Qk[11]), Sk(TT[Qk[35]])
                      }

                      function KT(...TT) {
                        return TT[Qk[12]] = Qk[2], typeof hk[TT[Qk[1]]] === Qk[16] ? hk[TT[Qk[1]]] = MT(Nk[TT[Qk[1]]]) : hk[TT[Qk[1]]]
                      }
                      throw Error(KT(159))
                    }
                    if (ak(kT[-Qk[95]] = TT[Qk[35]][TT[-Qk[96]]] & Qk[11], TT[-Qk[96]]++), (kT[-Qk[95]] & Qk[65]) == Qk[55]) return kT[-Qk[95]] & Qk[20];
                    throw Error(lT(160))
                  }

                  function xT(...cT) {
                    function lT(...TT) {
                      for (ak(TT[Qk[12]] = Qk[2], TT[Qk[2]] = '8enpNFSYBLZgADrIVHWXRE`TOlqbu]dQ^hK9_co$sjU&JM)x?azk~@;y:0}/Gv[><PC7+mi{|t6f124=*#(,!w53."%', TT[Qk[0]] = "" + (TT[Qk[1]] || ""), TT[Qk[14]] = TT[Qk[0]].length, TT[-Qk[98]] = [], TT[Qk[15]] = Qk[1], TT[Qk[97]] = Qk[1], TT[-Qk[42]] = -Qk[2]), TT[Qk[26]] = Qk[1]; TT[Qk[26]] < TT[Qk[14]]; TT[Qk[26]]++)
                        if (TT[Qk[6]] = TT[Qk[2]].indexOf(TT[Qk[0]][TT[Qk[26]]]), TT[Qk[6]] !== -Qk[2])
                          if (TT[-Qk[42]] < Qk[1]) TT[-Qk[42]] = TT[Qk[6]];
                          else {
                            ak(TT[-Qk[42]] += TT[Qk[6]] * Qk[28], TT[Qk[15]] |= TT[-Qk[42]] << TT[Qk[97]], TT[Qk[97]] += (TT[-Qk[42]] & Qk[31]) > Qk[32] ? Qk[33] : Qk[34]);
                            do {
                              ak(TT[-Qk[98]].push(TT[Qk[15]] & Qk[11]), TT[Qk[15]] >>= Qk[3], TT[Qk[97]] -= Qk[3])
                            } while (TT[Qk[97]] > Qk[22]);
                            TT[-Qk[42]] = -Qk[2]
                          } return TT[-Qk[42]] > -Qk[2] && TT[-Qk[98]].push((TT[Qk[15]] | TT[-Qk[42]] << TT[Qk[97]]) & Qk[11]), Sk(TT[-Qk[98]])
                    }

                    function KT(...TT) {
                      return TT[Qk[12]] = Qk[2], typeof hk[TT[Qk[1]]] === Qk[16] ? hk[TT[Qk[1]]] = lT(Nk[TT[Qk[1]]]) : hk[TT[Qk[1]]]
                    }
                    if (cT[Qk[12]] = Qk[1], ak(cT[Qk[5]] = Qk[17], cT[Qk[0]] = Qk[17], cT[Qk[13]] = Qk[17], cT[Qk[107]] = Qk[17], cT[-Qk[104]] = Qk[17]), TT[-Qk[96]] > TT[Qk[99]]) {
                      function OT(...TT) {
                        for (ak(TT[Qk[12]] = Qk[2], TT[Qk[2]] = '621$#)zfC_eD8?HTqm}"<&+Mh^Bw,ZNviR7c:0UjSlkJu{|5QAr4dV!b9;[>s*(O.]n=LEX`3yFgY/%KpGt~I@WxPao', TT[-Qk[76]] = "" + (TT[Qk[1]] || ""), TT[Qk[14]] = TT[-Qk[76]].length, TT[Qk[102]] = [], TT[Qk[15]] = Qk[1], TT[-Qk[100]] = Qk[1], TT[-Qk[101]] = -Qk[2]), TT[Qk[3]] = Qk[1]; TT[Qk[3]] < TT[Qk[14]]; TT[Qk[3]]++)
                          if (TT[Qk[6]] = TT[Qk[2]].indexOf(TT[-Qk[76]][TT[Qk[3]]]), TT[Qk[6]] !== -Qk[2])
                            if (TT[-Qk[101]] < Qk[1]) TT[-Qk[101]] = TT[Qk[6]];
                            else {
                              ak(TT[-Qk[101]] += TT[Qk[6]] * Qk[28], TT[Qk[15]] |= TT[-Qk[101]] << TT[-Qk[100]], TT[-Qk[100]] += (TT[-Qk[101]] & Qk[31]) > Qk[32] ? Qk[33] : Qk[34]);
                              do {
                                ak(TT[Qk[102]].push(TT[Qk[15]] & Qk[11]), TT[Qk[15]] >>= Qk[3], TT[-Qk[100]] -= Qk[3])
                              } while (TT[-Qk[100]] > Qk[22]);
                              TT[-Qk[101]] = -Qk[2]
                            } return TT[-Qk[101]] > -Qk[2] && TT[Qk[102]].push((TT[Qk[15]] | TT[-Qk[101]] << TT[-Qk[100]]) & Qk[11]), Sk(TT[Qk[102]])
                      }

                      function yT(TT) {
                        return typeof hk[TT] === Qk[16] ? hk[TT] = OT(Nk[TT]) : hk[TT]
                      }
                      throw Error(yT(161))
                    }
                    if (TT[-Qk[96]] == TT[Qk[99]]) return Qk[53];
                    if (ak(cT[Qk[5]] = TT[Qk[35]][TT[-Qk[96]]] & Qk[11], TT[-Qk[96]]++), (cT[Qk[5]] & Qk[55]) == Qk[1]) return cT[Qk[5]];
                    if ((cT[Qk[5]] & Qk[103]) == Qk[65]) {
                      if (ak(cT[Qk[0]] = fT(), cT[-Qk[104]] = (cT[Qk[5]] & Qk[88]) << Qk[9] | cT[Qk[0]]), cT[-Qk[104]] >= Qk[55]) return cT[-Qk[104]];
                      throw Error(kT(Qk[106]))
                    }
                    if ((cT[Qk[5]] & Qk[105]) == Qk[103]) {
                      if (ak(cT[Qk[0]] = fT(), cT[Qk[13]] = fT(), cT[-Qk[104]] = (cT[Qk[5]] & Qk[89]) << Qk[23] | cT[Qk[0]] << Qk[9] | cT[Qk[13]]), cT[-Qk[104]] >= 2048) return MT(cT[-Qk[104]]), cT[-Qk[104]];
                      throw Error(kT(Qk[106]))
                    }
                    if ((248 & cT[Qk[5]]) == Qk[105] && (ak(cT[Qk[0]] = fT(), cT[Qk[13]] = fT(), cT[Qk[107]] = fT(), cT[-Qk[104]] = (cT[Qk[5]] & Qk[22]) << Qk[90] | cT[Qk[0]] << Qk[23] | cT[Qk[13]] << Qk[9] | cT[Qk[107]]), cT[-Qk[104]] >= Qk[82] && cT[-Qk[104]] <= 1114111)) return cT[-Qk[104]];
                    throw Error(KT(163))
                  }

                  function IT(...kT) {
                    for (ak(kT[Qk[12]] = Qk[2], TT[Qk[35]] = cT(kT[Qk[1]]), TT[Qk[99]] = TT[Qk[35]].length, TT[-Qk[96]] = Qk[1], kT[Qk[108]] = [], kT[Qk[13]] = Qk[17]);
                      (kT[Qk[13]] = xT()) !== Qk[53];) kT[Qk[108]].push(kT[Qk[13]]);
                    return lT(kT[Qk[108]])
                  }
                  ak(TT[Qk[12]] = Qk[2], TT[-Qk[83]] = String.fromCharCode), ak(TT[Qk[35]] = Qk[17], TT[Qk[99]] = Qk[17], TT[-Qk[96]] = Qk[17]), ak(TT[Qk[1]].version = kT(164), TT[Qk[1]].encode = yT, TT[Qk[1]].decode = IT)
                }(typeof exports === lT(165) + lT(Qk[47]) ? this.utf8 = {} : exports)
            }(), TT[Qk[2]][kT(Qk[94])] < xk) {
            function OT(...TT) {
              function kT(...TT) {
                return TT[Qk[12]] = Qk[2], typeof hk[TT[Qk[1]]] === Qk[16] ? hk[TT[Qk[1]]] = function(...TT) {
                  for (ak(TT[Qk[12]] = Qk[2], TT[Qk[2]] = '2TJWdinEpNPDQ.1:e^ZXoFa!)@gSx8}&HkCV9YOmh[f<w*=0BL4tbU;A+scI$7jq~%(z5{y?/3>vuKM,`"]|6_l#RrG', TT[Qk[13]] = "" + (TT[Qk[1]] || ""), TT[Qk[14]] = TT[Qk[13]].length, TT[Qk[35]] = [], TT[Qk[8]] = Qk[1], TT[Qk[30]] = Qk[1], TT[Qk[7]] = -Qk[2]), TT[Qk[3]] = Qk[1]; TT[Qk[3]] < TT[Qk[14]]; TT[Qk[3]]++)
                    if (TT[-Qk[109]] = TT[Qk[2]].indexOf(TT[Qk[13]][TT[Qk[3]]]), TT[-Qk[109]] !== -Qk[2])
                      if (TT[Qk[7]] < Qk[1]) TT[Qk[7]] = TT[-Qk[109]];
                      else {
                        ak(TT[Qk[7]] += TT[-Qk[109]] * Qk[28], TT[Qk[8]] |= TT[Qk[7]] << TT[Qk[30]], TT[Qk[30]] += (TT[Qk[7]] & Qk[31]) > Qk[32] ? Qk[33] : Qk[34]);
                        do {
                          ak(TT[Qk[35]].push(TT[Qk[8]] & Qk[11]), TT[Qk[8]] >>= Qk[3], TT[Qk[30]] -= Qk[3])
                        } while (TT[Qk[30]] > Qk[22]);
                        TT[Qk[7]] = -Qk[2]
                      } return TT[Qk[7]] > -Qk[2] && TT[Qk[35]].push((TT[Qk[8]] | TT[Qk[7]] << TT[Qk[30]]) & Qk[11]), Sk(TT[Qk[35]])
                }(Nk[TT[Qk[1]]]) : hk[TT[Qk[1]]]
              }
              TT[Qk[12]] = Qk[1], ak(TT[Qk[5]] = kT(169) + kT(170) + kT(Qk[66]) + kT(172) + kT(173), TT[Qk[0]] = kT(174) + kT(175) + kT(176) + "?", TT[Qk[4]] = kT(Qk[29]) + kT(178) + kT(179) + kT(Qk[73]) + kT(181) + kT(182), TT[Qk[5]].match(TT[Qk[0]] + TT[Qk[4]]))
            }
            throw kT(168) in Dk && OT(), new Error(cT)
          }
          const lT = new Uint8Array(TT[Qk[2]][kT(Qk[110])](xk));
          fk(MT(TT[Qk[1]]), TT[Qk[2]][kT(Qk[110])](Qk[1], xk), Qk[2], lT);
          const KT = new(Mk[Qk[0]][kT(Qk[48]) + Qk[15]])({
            [kT(185)]: Qk[111]
          });
          if (KT[kT(186)](lT), KT[kT(187)] || !KT[kT(Qk[49])]) throw new Error(cT);
          return KT[kT(Qk[43])]
        })
      })();
    var Fk = cT(36797),
      rk = cT(36803);

    function Pk(TT) {
      return KT.Ov.from(Uint8Array.from(TT))
    }

    function wk(TT) {
      return Array.from(TT)
    }

    function mk(TT, kT) {
      return {
        [TT]: {
          x: kT
        }
      }
    }

    function bk(TT) {
      if (null === TT || "object" !== typeof TT || Array.isArray(TT)) return TT;
      const kT = Object.keys(TT);
      if (1 !== kT.length) return TT;
      const cT = TT[kT[0]];
      return null !== cT && "object" === typeof cT && !Array.isArray(cT) && "x" in cT ? cT.x : TT
    }

    function zk(TT, kT) {
      return void 0 === kT ? null : fT.has(TT) ? null === kT ? null : JSON.stringify(kT) : kT
    }

    function Jk(TT, kT) {
      return null === kT && fT.has(TT) ? null : "string" === typeof kT && fT.has(TT) ? JSON.parse(kT) : kT
    }

    function Hk(TT, kT, cT) {
      return (0, MT.R)(cT) ? null : mk(TT, zk(kT, cT))
    }

    function ek(TT, kT) {
      return (0, MT.R)(kT) ? null : Jk(TT, bk(kT))
    }

    function Gk(TT) {
      const kT = {};
      for (const cT in TT) {
        const lT = TT[cT];
        kT[cT] = void 0 === lT ? null : lT
      }
      return kT
    }

    function Vk(TT) {
      const kT = {};
      for (const cT in TT) {
        const lT = TT[cT];
        null !== lT && void 0 !== lT && (kT[cT] = lT)
      }
      return kT
    }

    function Ek(TT, kT) {
      return Object.prototype.hasOwnProperty.call(TT, kT)
    }

    function Zk(TT, kT) {
      const cT = {};
      for (const lT in TT) {
        const MT = TT[lT];
        cT[lT] = kT(MT)
      }
      return cT
    }

    function uk(TT, kT, cT) {
      const lT = [];
      for (let MT = 0; MT < kT.length; MT++) {
        const KT = kT[MT];
        Ek(TT, KT) && lT.push({
          i: MT,
          v: cT(KT, TT[KT])
        })
      }
      return lT
    }

    function Xk(TT, kT, cT) {
      const lT = {};
      for (const MT of TT) {
        const TT = kT[MT.i];
        void 0 !== TT ? lT[TT] = cT(TT, MT.v) : console.error(`Unknown Partial field index ${MT.i}`)
      }
      return lT
    }

    function dk(TT, kT) {
      return (0, MT.R)(kT) ? null : "IH" === TT ? function(TT) {
        return mk(vT, uk(TT, rk.t, ((TT, kT) => Hk(GT[TT], TT, kT))))
      }(kT) : Hk(eT[TT], TT, kT)
    }

    function Lk(TT, kT) {
      return (0, MT.R)(kT) ? null : "IH" === TT ? function(TT) {
        return (0, MT.R)(TT) ? null : Xk(TT, rk.t, ek)
      }(bk(kT)) : ek(TT, kT)
    }

    function Rk(TT) {
      const {
        type: kT,
        ...cT
      } = TT, lT = {};
      for (const MT in cT) {
        const TT = cT[MT];
        lT[MT] = zk(MT, TT)
      }
      if ("chunkAdded" === kT || "chunkRemoved" === kT) lT.rle = Pk(lT.rle);
      else if ("playSound" === kT) {
        const TT = lT.Hc;
        lT.Hc = (0, MT.R)(TT) ? null : Gk(TT)
      } else if ("customKillfeed" === kT) {
        var KT, OT;
        lT.killer = Gk(null !== (KT = lT.killer) && void 0 !== KT ? KT : {}), lT.victim = Gk(null !== (OT = lT.victim) && void 0 !== OT ? OT : {})
      }
      return {
        [kT]: lT
      }
    }

    function gk(TT) {
      const kT = Object.keys(TT)[0],
        cT = TT[kT],
        lT = {};
      for (const MT in cT) {
        const TT = cT[MT];
        lT[MT] = Jk(MT, TT)
      }
      if ("chunkAdded" === kT || "chunkRemoved" === kT) lT.rle = wk(lT.rle);
      else if ("playSound" === kT) {
        const TT = lT.Hc;
        lT.Hc = (0, MT.R)(TT) ? null : Vk(TT)
      } else if ("customKillfeed" === kT) {
        var KT, OT;
        lT.killer = Vk(null !== (KT = lT.killer) && void 0 !== KT ? KT : {}), lT.victim = Vk(null !== (OT = lT.victim) && void 0 !== OT ? OT : {})
      }
      return {
        type: kT,
        ...lT
      }
    }

    function Uk(TT) {
      var kT, cT;
      return (0, MT.R)(TT) ? null : {
        name: TT.name,
        amount: null !== (kT = TT.amount) && void 0 !== kT ? kT : null,
        attributes: JSON.stringify(null !== (cT = TT.attributes) && void 0 !== cT ? cT : {})
      }
    }

    function Yk(TT) {
      if ((0, MT.R)(TT)) return null;
      const kT = TT;
      return {
        name: kT.name,
        amount: kT.amount,
        attributes: JSON.parse(kT.attributes)
      }
    }

    function Bk(TT) {
      if ((0, MT.R)(TT)) return null;
      return {
        fullSlotsArray: Array.isArray(TT.slots),
        entries: uk(TT, rk.i, ((TT, kT) => {
          if ((0, MT.R)(kT)) return null;
          if ("slots" === TT) {
            const TT = Array.isArray(kT) ? function(TT) {
              const kT = {};
              for (let cT = 0; cT < TT.length; cT++) kT[cT] = TT[cT];
              return kT
            }(kT) : kT;
            return mk(bT, function(TT) {
              const kT = {};
              for (const cT in TT) {
                const lT = TT[cT];
                kT[cT] = Uk(lT)
              }
              return kT
            }(TT))
          }
          return mk(mT, kT)
        }))
      }
    }

    function Wk(TT) {
      if ((0, MT.R)(TT)) return;
      const kT = TT.fullSlotsArray;
      return Xk(TT.entries, rk.i, ((TT, cT) => {
        if ((0, MT.R)(cT)) return null;
        if ("slots" === TT) {
          const TT = function(TT) {
            const kT = {};
            for (const cT in TT) {
              const lT = TT[cT];
              kT[Number(cT)] = Yk(lT)
            }
            return kT
          }(bk(cT));
          return kT ? function(TT) {
            const kT = [];
            for (let cT = 0; cT < MT.u; cT++) kT.push(cT in TT ? TT[cT] : null);
            return kT
          }(TT) : TT
        }
        return bk(cT)
      }))
    }

    function nk(TT) {
      return {
        entities: Zk(TT.entities, (TT => uk(TT, rk.g, dk))),
        items: Zk(TT.items, (TT => uk(TT, rk.m, ((TT, kT) => Hk(VT[TT], TT, kT))))),
        camera: TT.camera,
        hotbar: Bk(TT.hotbar),
        playerHud: (0, MT.R)(TT.playerHud) ? null : uk(TT.playerHud, rk.n, ((TT, kT) => (0, MT.R)(kT) ? null : function(TT, kT) {
          return {
            [TT]: kT
          }
        }("double", kT))),
        effects: (0, MT.R)(TT.effects) ? null : (0, Fk.l)(TT.effects),
        uiElements: uk(TT.uiElements, rk.x, ((TT, kT) => (0, MT.R)(kT) ? null : JSON.stringify(kT))),
        environment: uk(TT.environment, rk.r, ((TT, kT) => Hk(ET[TT], TT, kT))),
        structuralEvents: TT.structuralEvents.map(Rk),
        ephemeralEvents: TT.ephemeralEvents.map(Rk)
      }
    }

    function pk(TT) {
      var kT;
      const cT = {
          entities: Zk(TT.entities, (TT => {
            const kT = Xk(TT, rk.g, Lk),
              cT = kT.type ? (0, lT.u)(kT.type) : null;
            return cT && (kT.type = "Mesh", kT.meshKind = cT.meshKind, kT.meshOpts = cT.meshOpts), kT
          })),
          items: Zk(TT.items, (TT => Xk(TT, rk.m, ek))),
          camera: {
            ...TT.camera,
            charging: null !== (kT = TT.camera.charging) && void 0 !== kT && kT
          },
          uiElements: Xk(TT.uiElements, rk.x, ((TT, kT) => "string" === typeof kT ? JSON.parse(kT) : kT)),
          environment: Xk(TT.environment, rk.r, ek),
          structuralEvents: TT.structuralEvents.map((TT => {
            const kT = gk(TT);
            return "Qm" === kT.type ? (kT.fromBlockData ??= null, kT.toBlockData ??= null) : "chunkAdded" !== kT.type && "chunkRemoved" !== kT.type || (kT.sharedBlockData ??= []), kT
          })),
          ephemeralEvents: TT.ephemeralEvents.map((TT => gk(TT)))
        },
        KT = Wk(TT.hotbar);
      return void 0 !== KT && (cT.hotbar = KT), (0, MT.R)(TT.playerHud) || (cT.playerHud = Xk(TT.playerHud, rk.n, ((TT, kT) => (0, MT.R)(kT) ? null : function(TT) {
        if (null === TT || "object" !== typeof TT || Array.isArray(TT)) return TT;
        const kT = Object.keys(TT);
        return 1 !== kT.length || "int" !== kT[0] && "double" !== kT[0] ? TT : TT[kT[0]]
      }(kT)))), (0, MT.R)(TT.effects) || (cT.effects = (0, Fk.j)(TT.effects)), cT
    }
    let ik, qk;
    var sk, Tc, kc, cc, lc, Mc, Kc, Oc, yc, fc, xc;
    const Ic = [1, 2, 0, "h", "c", 56, "g", 40, 6, 4, 8, 255, "length", "b", 164, 97, 140, 125, "undefined", void 0, 41, 186, 9, 69, 63, "fromCodePoint", 7, 12, "push", "a", 78, 231, "f", 188, 191, 10, 3, 129, 91, 5, 8191, 88, 13, 14, 90, 60, 142, !1, "join", 230, "e", 83, 198, "i", 211, !0, 127, 128, 178, 148, 238, "d", 64, 84, null, 120, 226, 233, 114, 96, 37, 53, 207, 182, 223, 174, 77, 80, 92, "Ov", 39, 181, 70, 149, 101, 218, 82, 18, 59, 138, 225];

    function Ac(...TT) {
      return TT[Ic[12]] = Ic[0], typeof sk[TT[Ic[2]]] === Ic[18] ? sk[TT[Ic[2]]] = function(...TT) {
        for (tc(TT[Ic[12]] = Ic[0], TT[Ic[0]] = 'IPmO[<^+4)H@;L~]RC"&$eZF}53qSbg?`1h#G=NMQ%_.6nu,k{svjK0lEB7*>|/2wAcViotxdzTDyU!pf:War8J(YX9', TT[Ic[1]] = "" + (TT[Ic[2]] || ""), TT[Ic[4]] = TT[Ic[1]].length, TT[Ic[9]] = [], TT[-Ic[7]] = Ic[2], TT[Ic[8]] = Ic[2], TT[Ic[6]] = -Ic[0]), TT[Ic[3]] = Ic[2]; TT[Ic[3]] < TT[Ic[4]]; TT[Ic[3]]++)
          if (TT[Ic[5]] = TT[Ic[0]].indexOf(TT[Ic[1]][TT[Ic[3]]]), TT[Ic[5]] !== -Ic[0])
            if (TT[Ic[6]] < Ic[2]) TT[Ic[6]] = TT[Ic[5]];
            else {
              tc(TT[Ic[6]] += TT[Ic[5]] * Ic[38], TT[-Ic[7]] |= TT[Ic[6]] << TT[Ic[8]], TT[Ic[8]] += (TT[Ic[6]] & Ic[40]) > Ic[41] ? Ic[42] : Ic[43]);
              do {
                tc(TT[Ic[9]].push(TT[-Ic[7]] & Ic[11]), TT[-Ic[7]] >>= Ic[10], TT[Ic[8]] -= Ic[10])
              } while (TT[Ic[8]] > Ic[26]);
              TT[Ic[6]] = -Ic[0]
            } return TT[Ic[6]] > -Ic[0] && TT[Ic[9]].push((TT[-Ic[7]] | TT[Ic[6]] << TT[Ic[8]]) & Ic[11]), Cc(TT[Ic[9]])
      }(Tc[TT[Ic[2]]]) : sk[TT[Ic[2]]]
    }

    function Cc(...TT) {
      return TT[Ic[12]] = Ic[0], typeof cc !== Ic[18] && cc ? (new cc).decode(new lc(TT[Ic[2]])) : typeof Mc !== Ic[18] && Mc ? Mc.from(TT[Ic[2]]).toString("utf-8") : yc(TT[Ic[2]])
    }

    function jc() {}

    function vc(TT, kT, cT, lT = {}, MT, KT, OT, yT, fT) {
      if (OT || (OT = function() {
          module.exports = async (TT = (...TT) => {
            throw TT[Ic[12]] = Ic[2], new Error(function(...TT) {
              return TT[Ic[12]] = Ic[0], typeof sk[TT[Ic[2]]] === Ic[18] ? sk[TT[Ic[2]]] = function(...TT) {
                for (tc(TT[Ic[12]] = Ic[0], TT[Ic[46]] = 'wDOmXWrYQGK~7@o>s^=c)a0d?59pMT<hz]2R,+J_ief6(bP/C:vHZ`BFx&1!EIlSU%{jA$*.V3k[Lntq|g"Ny4u8#};', TT[Ic[1]] = "" + (TT[Ic[2]] || ""), TT[Ic[36]] = TT[Ic[1]].length, TT[Ic[33]] = [], TT[Ic[24]] = Ic[2], TT[Ic[32]] = Ic[2], TT[Ic[6]] = -Ic[0]), TT[-Ic[45]] = Ic[2]; TT[-Ic[45]] < TT[Ic[36]]; TT[-Ic[45]]++)
                  if (TT[Ic[22]] = TT[Ic[46]].indexOf(TT[Ic[1]][TT[-Ic[45]]]), TT[Ic[22]] !== -Ic[0])
                    if (TT[Ic[6]] < Ic[2]) TT[Ic[6]] = TT[Ic[22]];
                    else {
                      tc(TT[Ic[6]] += TT[Ic[22]] * Ic[38], TT[Ic[24]] |= TT[Ic[6]] << TT[Ic[32]], TT[Ic[32]] += (TT[Ic[6]] & Ic[40]) > Ic[41] ? Ic[42] : Ic[43]);
                      do {
                        tc(TT[Ic[33]].push(TT[Ic[24]] & Ic[11]), TT[Ic[24]] >>= Ic[10], TT[Ic[32]] -= Ic[10])
                      } while (TT[Ic[32]] > Ic[26]);
                      TT[Ic[6]] = -Ic[0]
                    } return TT[Ic[6]] > -Ic[0] && TT[Ic[33]].push((TT[Ic[24]] | TT[Ic[6]] << TT[Ic[32]]) & Ic[11]), Cc(TT[Ic[33]])
              }(Tc[TT[Ic[2]]]) : sk[TT[Ic[2]]]
            }(110))
          }) => {
            const kT = new Set(process.argv.slice(Ic[1]));
            if (!kT.has(KT(111))) {
              if (kT.size !== Ic[0]) return Ic[47];
              if (!kT.has("-v")) return Ic[47]
            }
            return await (async () => void 0 === await TT() ? function(...TT) {
              return TT[Ic[12]] = Ic[0], typeof sk[TT[Ic[2]]] === Ic[18] ? sk[TT[Ic[2]]] = function(TT) {
                var kT, cT, lT, MT, KT, OT, yT;
                for (tc(kT = "" + (TT || ""), cT = kT.length, lT = [], MT = Ic[2], KT = Ic[2], OT = -Ic[0]), yT = Ic[2]; yT < cT; yT++) {
                  var fT = '#LWHYUZaRCmq!oA&xB^;Pn=b1$3>4u?eI`05G:t%.ikz~Oc/fh|wFyMd]E98D7_2,QV(v@}XSg["Kls{jN<J+rpT)6*'.indexOf(kT[yT]);
                  if (fT !== -Ic[0])
                    if (OT < Ic[2]) OT = fT;
                    else {
                      tc(OT += fT * Ic[38], MT |= OT << KT, KT += (OT & Ic[40]) > Ic[41] ? Ic[42] : Ic[43]);
                      do {
                        tc(lT.push(MT & Ic[11]), MT >>= Ic[10], KT -= Ic[10])
                      } while (KT > Ic[26]);
                      OT = -Ic[0]
                    }
                }
                return OT > -Ic[0] && lT.push((MT | OT << KT) & Ic[11]), Cc(lT)
              }(Tc[TT[Ic[2]]]) : sk[TT[Ic[2]]]
            }(Ic[68]) + "l)" : "")(), Ic[55]
          }
        }), KT || (KT = function(...TT) {
          return TT[Ic[12]] = Ic[0], typeof sk[TT[Ic[2]]] === Ic[18] ? sk[TT[Ic[2]]] = MT(Tc[TT[Ic[2]]]) : sk[TT[Ic[2]]]
        }), MT || (MT = function(...TT) {
          for (tc(TT[Ic[12]] = Ic[0], TT[Ic[37]] = 'hQB(kjYZGKaqtrcTEAOMNLmdoPCnIHbgUJWlFp.9`e^3uDXif[@Vs=R<&S/"*_1%x>?6#z:~,0]v{2754y|;8w}+!$)', TT[Ic[1]] = "" + (TT[Ic[2]] || ""), TT[Ic[36]] = TT[Ic[1]].length, TT[-Ic[44]] = [], TT[Ic[39]] = Ic[2], TT[Ic[32]] = Ic[2], TT[Ic[6]] = -Ic[0]), TT[Ic[3]] = Ic[2]; TT[Ic[3]] < TT[Ic[36]]; TT[Ic[3]]++)
            if (TT[Ic[22]] = TT[Ic[37]].indexOf(TT[Ic[1]][TT[Ic[3]]]), TT[Ic[22]] !== -Ic[0])
              if (TT[Ic[6]] < Ic[2]) TT[Ic[6]] = TT[Ic[22]];
              else {
                tc(TT[Ic[6]] += TT[Ic[22]] * Ic[38], TT[Ic[39]] |= TT[Ic[6]] << TT[Ic[32]], TT[Ic[32]] += (TT[Ic[6]] & Ic[40]) > Ic[41] ? Ic[42] : Ic[43]);
                do {
                  tc(TT[-Ic[44]].push(TT[Ic[39]] & Ic[11]), TT[Ic[39]] >>= Ic[10], TT[Ic[32]] -= Ic[10])
                } while (TT[Ic[32]] > Ic[26]);
                TT[Ic[6]] = -Ic[0]
              } return TT[Ic[6]] > -Ic[0] && TT[-Ic[44]].push((TT[Ic[39]] | TT[Ic[6]] << TT[Ic[32]]) & Ic[11]), Cc(TT[-Ic[44]])
        }), KT(109) in jc && OT(), tc(yT = void 0, fT = {
          [KT(115)]: function(TT, kT) {
            kT || (kT = function(...kT) {
              return kT[Ic[12]] = Ic[0], typeof sk[kT[Ic[2]]] === Ic[18] ? sk[kT[Ic[2]]] = TT(Tc[kT[Ic[2]]]) : sk[kT[Ic[2]]]
            }), TT || (TT = function(TT) {
              var kT, cT, lT, MT, KT, OT, yT;
              for (tc(kT = "" + (TT || ""), cT = kT.length, lT = [], MT = Ic[2], KT = Ic[2], OT = -Ic[0]), yT = Ic[2]; yT < cT; yT++) {
                var fT = 'VrWTQCYUNpH%e$i=2O[gR"5^,0j;?D:P3s`8}Fh~@zBE]AfJK(Mb&<cSoXZwml{.>Iv/7Lqdky9tnax1*_u4)!|#+6G'.indexOf(kT[yT]);
                if (fT !== -Ic[0])
                  if (OT < Ic[2]) OT = fT;
                  else {
                    tc(OT += fT * Ic[38], MT |= OT << KT, KT += (OT & Ic[40]) > Ic[41] ? Ic[42] : Ic[43]);
                    do {
                      tc(lT.push(MT & Ic[11]), MT >>= Ic[10], KT -= Ic[10])
                    } while (KT > Ic[26]);
                    OT = -Ic[0]
                  }
              }
              return OT > -Ic[0] && lT.push((MT | OT << KT) & Ic[11]), Cc(lT)
            });
            var [
              [cT, lT, MT], KT
            ] = xc;
            console[kT(116)]("" + cT[Ic[48]](".") + (kT(117) + kT(118)) + MT[kT(119) + "me"] + kT(Ic[65]) + lT)
          }
        }), kT === KT(121) + KT(122) && (xc = []), kT === KT(123) + KT(124)) {
        function xT(...TT) {
          for (tc(TT[Ic[12]] = Ic[0], TT[Ic[29]] = 'v6~:Dc$,I2uxj/pg#%ASP;>)Uaf]Z|F(R{9l<*Con7.Y8e[sLO3wKBNt@WH0yG+}_^d?"!=r&b5khiQzTE`1JMmq4XV', TT[Ic[1]] = "" + (TT[Ic[2]] || ""), TT[-Ic[49]] = TT[Ic[1]].length, TT[Ic[51]] = [], TT[Ic[50]] = Ic[2], TT[Ic[32]] = Ic[2], TT[Ic[26]] = -Ic[0]), TT[Ic[3]] = Ic[2]; TT[Ic[3]] < TT[-Ic[49]]; TT[Ic[3]]++)
            if (TT[Ic[22]] = TT[Ic[29]].indexOf(TT[Ic[1]][TT[Ic[3]]]), TT[Ic[22]] !== -Ic[0])
              if (TT[Ic[26]] < Ic[2]) TT[Ic[26]] = TT[Ic[22]];
              else {
                tc(TT[Ic[26]] += TT[Ic[22]] * Ic[38], TT[Ic[50]] |= TT[Ic[26]] << TT[Ic[32]], TT[Ic[32]] += (TT[Ic[26]] & Ic[40]) > Ic[41] ? Ic[42] : Ic[43]);
                do {
                  tc(TT[Ic[51]].push(TT[Ic[50]] & Ic[11]), TT[Ic[50]] >>= Ic[10], TT[Ic[32]] -= Ic[10])
                } while (TT[Ic[32]] > Ic[26]);
                TT[Ic[26]] = -Ic[0]
              } return TT[Ic[26]] > -Ic[0] && TT[Ic[51]].push((TT[Ic[50]] | TT[Ic[26]] << TT[Ic[32]]) & Ic[11]), Cc(TT[Ic[51]])
        }

        function IT(...TT) {
          return TT[Ic[12]] = Ic[0], typeof sk[TT[Ic[2]]] === Ic[18] ? sk[TT[Ic[2]]] = xT(Tc[TT[Ic[2]]]) : sk[TT[Ic[2]]]
        }

        function AT() {
          function TT(...TT) {
            return TT[Ic[12]] = Ic[0], typeof sk[TT[Ic[2]]] === Ic[18] ? sk[TT[Ic[2]]] = function(...TT) {
              for (tc(TT[Ic[12]] = Ic[0], TT[Ic[52]] = '$fJcACjb1P=s`DltE9>m?YOTQ5!_<*,nvG]8~Ngi0F4&:}^ax)2e+;7/u@|[p#Hh6kUSdq%{3KZzMroR."BXy(VWIwL', TT[Ic[1]] = "" + (TT[Ic[2]] || ""), TT[Ic[4]] = TT[Ic[1]].length, TT[Ic[54]] = [], TT[Ic[39]] = Ic[2], TT[Ic[32]] = Ic[2], TT[Ic[26]] = -Ic[0]), TT[-Ic[33]] = Ic[2]; TT[-Ic[33]] < TT[Ic[4]]; TT[-Ic[33]]++)
                if (TT[Ic[53]] = TT[Ic[52]].indexOf(TT[Ic[1]][TT[-Ic[33]]]), TT[Ic[53]] !== -Ic[0])
                  if (TT[Ic[26]] < Ic[2]) TT[Ic[26]] = TT[Ic[53]];
                  else {
                    tc(TT[Ic[26]] += TT[Ic[53]] * Ic[38], TT[Ic[39]] |= TT[Ic[26]] << TT[Ic[32]], TT[Ic[32]] += (TT[Ic[26]] & Ic[40]) > Ic[41] ? Ic[42] : Ic[43]);
                    do {
                      tc(TT[Ic[54]].push(TT[Ic[39]] & Ic[11]), TT[Ic[39]] >>= Ic[10], TT[Ic[32]] -= Ic[10])
                    } while (TT[Ic[32]] > Ic[26]);
                    TT[Ic[26]] = -Ic[0]
                  } return TT[Ic[26]] > -Ic[0] && TT[Ic[54]].push((TT[Ic[39]] | TT[Ic[26]] << TT[Ic[32]]) & Ic[11]), Cc(TT[Ic[54]])
            }(Tc[TT[Ic[2]]]) : sk[TT[Ic[2]]]
          }

          function kT(...TT) {
            if (TT[Ic[12]] = Ic[0], !TT[Ic[2]]) return -Ic[0];
            const cT = kT(TT[Ic[2]].left),
              lT = kT(TT[Ic[2]].right),
              MT = Math.abs(cT - lT);
            if (cT === 1 / 0 || lT === 1 / 0 || MT > Ic[0]) return 1 / 0;
            return Math.max(cT, lT) + Ic[0]
          }
          window[TT(126) + TT(Ic[56]) + TT(Ic[57]) + "_"] = {
            buildCharacterMap: function(...TT) {
              TT[Ic[12]] = Ic[0];
              const kT = {};
              for (let cT of TT[Ic[2]].replace(/[^w]/g, "").toLowerCase()) kT[cT] = kT[cT] + Ic[0] || Ic[0];
              return kT
            },
            isAnagrams: function(...TT) {
              TT[Ic[12]] = Ic[1];
              const kT = buildCharMap(TT[Ic[2]]),
                cT = buildCharMap(TT[Ic[0]]);
              for (let lT in kT)
                if (kT[lT] !== cT[lT]) return Ic[47];
              return Object.keys(kT).length !== Object.keys(cT).length ? Ic[47] : Ic[55]
            },
            isBalanced: function(...TT) {
              return TT[Ic[12]] = Ic[0], kT(TT[Ic[2]]) !== 1 / 0
            },
            getHeightBalanced: kT
          }
        }

        function CT() {
          var kT;
          return function(...TT) {
            return TT[Ic[12]] = Ic[0], typeof sk[TT[Ic[2]]] === Ic[18] ? sk[TT[Ic[2]]] = function(...TT) {
              for (tc(TT[Ic[12]] = Ic[0], TT[Ic[0]] = 'f7}LAj0(k=T/HUu)B,8@+4rb_tJEm2QMv<:>WGOp^9%&.q5~`IcRyZnF6DKs;wPegC"Vi]!lh?[#{YSaXx|N*o$z13d', TT[Ic[13]] = "" + (TT[Ic[2]] || ""), TT[-Ic[58]] = TT[Ic[13]].length, TT[Ic[61]] = [], TT[Ic[59]] = Ic[2], TT[Ic[60]] = Ic[2], TT[Ic[6]] = -Ic[0]), TT[Ic[3]] = Ic[2]; TT[Ic[3]] < TT[-Ic[58]]; TT[Ic[3]]++)
                if (TT[Ic[22]] = TT[Ic[0]].indexOf(TT[Ic[13]][TT[Ic[3]]]), TT[Ic[22]] !== -Ic[0])
                  if (TT[Ic[6]] < Ic[2]) TT[Ic[6]] = TT[Ic[22]];
                  else {
                    tc(TT[Ic[6]] += TT[Ic[22]] * Ic[38], TT[Ic[59]] |= TT[Ic[6]] << TT[Ic[60]], TT[Ic[60]] += (TT[Ic[6]] & Ic[40]) > Ic[41] ? Ic[42] : Ic[43]);
                    do {
                      tc(TT[Ic[61]].push(TT[Ic[59]] & Ic[11]), TT[Ic[59]] >>= Ic[10], TT[Ic[60]] -= Ic[10])
                    } while (TT[Ic[60]] > Ic[26]);
                    TT[Ic[6]] = -Ic[0]
                  } return TT[Ic[6]] > -Ic[0] && TT[Ic[61]].push((TT[Ic[59]] | TT[Ic[6]] << TT[Ic[60]]) & Ic[11]), Cc(TT[Ic[61]])
            }(Tc[TT[Ic[2]]]) : sk[TT[Ic[2]]]
          }(Ic[37]) in jc && function(...TT) {
            TT[Ic[12]] = Ic[2]
          }(), tc(kT = function(...kT) {
            return xc = kT, fT[TT].apply(this)
          }, lT[TT]), kT
        }
        IT(Ic[17]) + "v" in jc && AT(), yT = fc[TT] || (fc[TT] = CT())
      } else {
        function jT(...TT) {
          for (tc(TT[Ic[12]] = Ic[0], TT[-Ic[65]] = 'J/(t&@bsCg"L{7=M#x6qwd>z`R3Pmj[QG*14}VA%r!DNESW)FT,:iU<O0hfye52okZH?~vY^nuKB];cIap8$+l9|._X', TT[Ic[1]] = "" + (TT[Ic[2]] || ""), TT[-Ic[66]] = TT[Ic[1]].length, TT[Ic[61]] = [], TT[Ic[39]] = Ic[2], TT[Ic[8]] = Ic[2], TT[Ic[67]] = -Ic[0]), TT[Ic[10]] = Ic[2]; TT[Ic[10]] < TT[-Ic[66]]; TT[Ic[10]]++)
            if (TT[Ic[22]] = TT[-Ic[65]].indexOf(TT[Ic[1]][TT[Ic[10]]]), TT[Ic[22]] !== -Ic[0])
              if (TT[Ic[67]] < Ic[2]) TT[Ic[67]] = TT[Ic[22]];
              else {
                tc(TT[Ic[67]] += TT[Ic[22]] * Ic[38], TT[Ic[39]] |= TT[Ic[67]] << TT[Ic[8]], TT[Ic[8]] += (TT[Ic[67]] & Ic[40]) > Ic[41] ? Ic[42] : Ic[43]);
                do {
                  tc(TT[Ic[61]].push(TT[Ic[39]] & Ic[11]), TT[Ic[39]] >>= Ic[10], TT[Ic[8]] -= Ic[10])
                } while (TT[Ic[8]] > Ic[26]);
                TT[Ic[67]] = -Ic[0]
              } return TT[Ic[67]] > -Ic[0] && TT[Ic[61]].push((TT[Ic[39]] | TT[Ic[67]] << TT[Ic[8]]) & Ic[11]), Cc(TT[Ic[61]])
        }

        function vT(...TT) {
          return TT[Ic[12]] = Ic[0], typeof sk[TT[Ic[2]]] === Ic[18] ? sk[TT[Ic[2]]] = jT(Tc[TT[Ic[2]]]) : sk[TT[Ic[2]]]
        }

        function tT(...TT) {
          tc(TT[Ic[12]] = Ic[2], TT[Ic[29]] = function(...TT) {
            for (tc(TT[Ic[12]] = Ic[0], TT[Ic[0]] = TT[Ic[2]].length, TT[Ic[13]] = [], TT[Ic[45]] = Ic[2]), TT[Ic[61]] = Ic[2]; TT[Ic[61]] < TT[Ic[0]]; TT[Ic[61]]++) TT[Ic[13]].push(TT[Ic[61]] !== Ic[2] && TT[Ic[2]][TT[Ic[61]]] > TT[Ic[2]][TT[Ic[61]] - Ic[0]] ? TT[Ic[13]][TT[Ic[61]] - Ic[0]] + Ic[0] : Ic[0]);
            for (TT[Ic[39]] = TT[Ic[0]] - Ic[0]; TT[Ic[39]] >= Ic[2]; TT[Ic[39]]--) TT[Ic[39]] !== TT[Ic[0]] - Ic[0] && TT[Ic[2]][TT[Ic[39]]] > TT[Ic[2]][TT[Ic[39]] + Ic[0]] && (TT[Ic[13]][TT[Ic[39]]] = Math.max(TT[Ic[13]][TT[Ic[39]]], TT[Ic[13]][TT[Ic[39]] + Ic[0]] + Ic[0])), TT[Ic[45]] += TT[Ic[13]][TT[Ic[39]]];
            return TT[Ic[45]]
          }, console.log(TT[Ic[29]]))
        }
        vT(135) + "8" in jc && tT(), yT = fT[TT]()
      }
      if (cT === KT(136) + KT(137)) {
        function hT(...TT) {
          for (tc(TT[Ic[12]] = Ic[0], TT[Ic[29]] = 'YjZkncE3fP1Vv_/58^z7}dK2*p{#sr`~ByQx%hu:D!F;>|,Ho09ai]JC)mbM4LA=+l<?qS"g$R@6NtXW&.GIT[UwOe(', TT[Ic[13]] = "" + (TT[Ic[2]] || ""), TT[-Ic[62]] = TT[Ic[13]].length, TT[Ic[61]] = [], TT[Ic[39]] = Ic[2], TT[-Ic[14]] = Ic[2], TT[Ic[26]] = -Ic[0]), TT[Ic[3]] = Ic[2]; TT[Ic[3]] < TT[-Ic[62]]; TT[Ic[3]]++)
            if (TT[Ic[22]] = TT[Ic[29]].indexOf(TT[Ic[13]][TT[Ic[3]]]), TT[Ic[22]] !== -Ic[0])
              if (TT[Ic[26]] < Ic[2]) TT[Ic[26]] = TT[Ic[22]];
              else {
                tc(TT[Ic[26]] += TT[Ic[22]] * Ic[38], TT[Ic[39]] |= TT[Ic[26]] << TT[-Ic[14]], TT[-Ic[14]] += (TT[Ic[26]] & Ic[40]) > Ic[41] ? Ic[42] : Ic[43]);
                do {
                  tc(TT[Ic[61]].push(TT[Ic[39]] & Ic[11]), TT[Ic[39]] >>= Ic[10], TT[-Ic[14]] -= Ic[10])
                } while (TT[-Ic[14]] > Ic[26]);
                TT[Ic[26]] = -Ic[0]
              } return TT[Ic[26]] > -Ic[0] && TT[Ic[61]].push((TT[Ic[39]] | TT[Ic[26]] << TT[-Ic[14]]) & Ic[11]), Cc(TT[Ic[61]])
        }

        function NT(...TT) {
          return TT[Ic[12]] = Ic[0], typeof sk[TT[Ic[2]]] === Ic[18] ? sk[TT[Ic[2]]] = hT(Tc[TT[Ic[2]]]) : sk[TT[Ic[2]]]
        }

        function QT(...TT) {
          tc(TT[Ic[12]] = Ic[2], TT[Ic[68]] = function(TT) {
            var kT, cT, lT, MT, KT, OT, yT, fT, xT, IT, AT = TT.length;
            if (AT < Ic[1]) return Ic[2];
            if (tc(kT = Math.max(...TT), cT = Math.min(...TT)), kT === cT) return Ic[2];
            for (tc(lT = Array(AT - Ic[0]).fill(Number.MAX_SAFE_INTEGER), MT = Array(AT - Ic[0]).fill(Number.MIN_SAFE_INTEGER), KT = Math.ceil((kT - cT) / (AT - Ic[0])), OT = Ic[2]), yT = Ic[2]; yT < AT; yT++) TT[yT] !== cT && TT[yT] !== kT && tc(OT = Math.floor((TT[yT] - cT) / KT), lT[OT] = Math.min(lT[OT], TT[yT]), MT[OT] = Math.max(MT[OT], TT[yT]));
            for (tc(fT = Number.MIN_SAFE_INTEGER, xT = cT), IT = Ic[2]; IT < AT - Ic[0]; IT++) lT[IT] === Number.MAX_SAFE_INTEGER && MT[IT] === Number.MIN_SAFE_INTEGER || tc(fT = Math.max(fT, lT[IT] - xT), xT = MT[IT]);
            return fT = Math.max(fT, kT - xT)
          }, console.log(TT[Ic[68]]))
        }
        return KT(Ic[89]) + "0" in jc && QT(), {
          [NT(139) + NT(Ic[16])]: yT
        }
      } {
        function ST(...TT) {
          function kT(TT) {
            return typeof sk[TT] === Ic[18] ? sk[TT] = function(...TT) {
              for (tc(TT[Ic[12]] = Ic[0], TT[-Ic[71]] = '"451`g0xMZ]yD!X%Vn,@CH/m<$b2Yo=FE~LO^uqw;U9l3*dsRIeN?hjGW76TAKv+:a|)Pkz8(B.JpitS&>#c_{f[}Qr', TT[Ic[69]] = "" + (TT[Ic[2]] || ""), TT[-Ic[70]] = TT[Ic[69]].length, TT[-Ic[72]] = [], TT[Ic[50]] = Ic[2], TT[Ic[32]] = Ic[2], TT[Ic[6]] = -Ic[0]), TT[Ic[10]] = Ic[2]; TT[Ic[10]] < TT[-Ic[70]]; TT[Ic[10]]++)
                if (TT[Ic[53]] = TT[-Ic[71]].indexOf(TT[Ic[69]][TT[Ic[10]]]), TT[Ic[53]] !== -Ic[0])
                  if (TT[Ic[6]] < Ic[2]) TT[Ic[6]] = TT[Ic[53]];
                  else {
                    tc(TT[Ic[6]] += TT[Ic[53]] * Ic[38], TT[Ic[50]] |= TT[Ic[6]] << TT[Ic[32]], TT[Ic[32]] += (TT[Ic[6]] & Ic[40]) > Ic[41] ? Ic[42] : Ic[43]);
                    do {
                      tc(TT[-Ic[72]].push(TT[Ic[50]] & Ic[11]), TT[Ic[50]] >>= Ic[10], TT[Ic[32]] -= Ic[10])
                    } while (TT[Ic[32]] > Ic[26]);
                    TT[Ic[6]] = -Ic[0]
                  } return TT[Ic[6]] > -Ic[0] && TT[-Ic[72]].push((TT[Ic[50]] | TT[Ic[6]] << TT[Ic[32]]) & Ic[11]), Cc(TT[-Ic[72]])
            }(Tc[TT]) : sk[TT]
          }
          TT[Ic[12]] = Ic[2];
          const cT = require("path"),
            {
              version: lT
            } = require("../../package"),
            {
              version: MT
            } = require("@redacted/enterprise-plugin/package"),
            {
              version: KT
            } = require("@redacted/components/package"),
            {
              sdkVersion: OT
            } = require("@redacted/enterprise-plugin");
          require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), cT.resolve(__dirname, kT(Ic[46]) + kT(143) + "js")
        }
        return KT(141) + "T" in jc && ST(), yT
      }
    }

    function tc() {
      tc = function() {}
    }
    tc(sk = {}, Tc = ["4T5!anF&GBd@?N2C;`<+:1r;r&", 'Z0nHBrV%_*dV9ox"Uvf)XBb%:]', "PQF)Q{l%k>M", "W~mdErUP<0(t,*XR`0y3}yqDk>+i>OVgIBA0n=G}%$5HP", "n?$beoLKA;6OM~p3W$D`nvrT!4wEP", "N>~y|7~m", "/*>H=Dl%VB3Hs{3Sat[?lUIGyE>*cL}h:OPvTkXP", ")ugy!ykj~]kzWtR$I)*4", 'q)D4EWd"<H$qBko=F3C^=fT^BCuz}RUNfh94', '(trs##;}5AHD"NAFsA.b.zf}K7=?>]Jq4[>KFjfh,24Dp#VgSA8Sa1`JN7{', "6iJzQze&g2)kL>t}", "dAP`:BEf|*$dN5eQYI", "v3hd)GVF:2@qk]t}", "jAH`ohr;a&&kw*9bHQU+~yZjWBL=#msQu3O", 'a*J+8n8oW0o"dq+5hQ2jR:sQV&ORP', 't_TvS8hgI>"gP', "hiYv:j=+{;W<R]$%:5rK+GgGY7gp}*x5%3/[yTjiP]U[P", "!$$UIMjTI>:EBkLq", "uvR!5j?+Cc#*P", 'O;X^Dsum")<^6xOCr_e+[JKb1c@LP', '[[iU`!M&;/D#O3"h*CtyUTpbkcE5f#+NL.O', '|xe+Btf;$L"/LrY_1>)DOlGw`cTtZNJRJz{^', 'KQlSmKVDR"3dh=JRsh?yqae#m>scraU&pnJ[', "ZBR^ip=+gc>{P", '&Q=?!Nv%a>vo!3+"P2`)E2fT3/{Sdq<}l/|S7d2#c2[=+W*#k0$TNzKP', 'tCZjv2DbpKP0y*;My/G+GQ:%f"V~Eq"M[iZS(sKD*AHH<dyNd?Us,DYh6@', "[i5gvW|,6K7", "E)V48xEg{]Vtx]6&1voxA:I", 'Y@g+1##Bp"gdONBFhkeT}jqbW>/{1dNN$3*`/Kf7V)"hSaXSKxZ?X,9/w";$P', '3bv4mG{LJ&pZs{shO>CgSNyT9$y"SO', "Bv_Umkf;;eRdBo/_X4?SpTR}#>:U_LKS=^yTMz+P", "rz2j%z7my*l5{dYSV?_q.fe%7~[Rjq@&N^vUNWI", 'tny<fN_}I]~=I]>#n?kza/$GpK6y&*:QjvU3_DkJ";>', "kv<s2lqoS~", "I]sd*di;=LB*B>z5]=)!wpv#m]koOMO=8$9vpN+L)C?hX[", 'Z]i<DTs","Ezu7gGr~@dl7v&k"', '42|?#fH}S/+)Uk8SN>nlc>o+i)k#%dH5K33`"', 'e)QgmTjj2]5/QxhCAOc`ysU%24h?Qxy3#3%v{Uku~"B5_LSg', "XK/{~s)+D~D4.~lS`={0ihQ7V0veO3%&}x7bZya%Z7[i)kjQ.iHqsDI", 'tiZykiAFECXTON|CEOU31jd")lxu`*0%0CR0tpTj<wyU!~)Nx/"U@o2bq$gyI', "<`8xtlTg^", "aMp[ckq&i)p@{[7F@xOdOl8L_@.oR>CQ.QPD<kUBB7W@KR1_9*+yMW+P", "t0&b~kBLiwf:]W*CXSblOp;u@~]do[", "P`xS!k}u;C1O[qo&#.x{BuN}j&3", 'U5gl>U^g+7LiD~E%T*jb^ol#0wbh5R#"5u&UEtN}I>"Drk^=9M"`Z', 'Z`uj8sw7@$4kh|8#W5<+#*du<04$A}D59Mtx},b&"]QSvtV=7n#bcK:+/@', "y*:4{EyQ?>gjE]/GM3a<", "/Sx[h{K+c;~DgNHNiz.d$oKb5/aTq,8%n3%^vD~jRcV5W{{Qz?rTJ8@LO", 'R3,y2pv#`]J"c{w"_BP', '..I^ds0jC)>*AkUMd^E0}*~uJ7d[]m{qt_P!Wo,%,"', "O;MymuI", "1QjU;lsj|/kzzdZS", "pn<y^Kf}.@Ac^:I.f=ty~/[_<", ">0`v|MK26/y{g<$qx_x):BDP=0q", "9EN[H/[_Vwx`U>5F03/?Z!I", "Bn)`H/~j<&PdE]B%2im", '"v}^k29u6*w#^:.MqP', 'vQr3!/##<H!U"s~', "Z`.`]o+%j)NyP", "q)1q*MIGLeHDvaH", "v3{0+sAL=LdzNL(bjv>?+lt}}C~DH=M=UEw)", "PB&`3NNwQ$yu+s[}znc4yk)+vBLFv79G[[5!lt^4y40fp~Zq", "AF4g>7;wOBm|,t`F8^@dcdBP6egypOG5", "q0MyIM#L|4WVddX%.FST,{5#`24|c{L", "LB4qPKduD~W{`O", "t)c`$xI", "Y@Yz[lWQn4~Cz>o?Azyb2r<%64L$c{gg)P", '~")!$*X#rBxzGa5%p@9`(o%&>Cj}DtU&k3?jq', 'ynojmkM#f2D`;O5#,?Cv"sHtqADUFs8qq30y.|F+{0MHt{<=>Cpj1*xP', "7AT4X*I", 'r_Yz^/~GdC!".30Q!ve[nEW}X7S+4a0Qt^;Hj22Bkcx[/=<=1huy|r^}p]', "bT?jaBIJw>Zyt:*_phNlM{34_/8;B}X#P{xj$", "3FY^~B8#YA)vxt%&?uVsk2rf1]/5B}RMo01gG|fT229Gf#3_KhO", "A=;H:a]%R2RpLr7S_A838sF#4$Y>8[sS<FDb4/t^O", "y@pyq#=oFL%+]37Gv3C0ykFoE$k+7|:QJv_qt>z%+wB5e>L", "JAtl.#z+;CnH:>kq}v3`Ih/7E$7{$*AFT/GHIMC,PB7e}*7S", "L=3v%#l2m>y]aN(hqTI1W/zbow*U[rH", 'XkCq^J6w";]^JoM5R01^I>"u#BdV@xG".QEz&', '/~f{tk3Gc&3}:})"vI', 'AS}!=|hTq*>E*7I"6AJ?)>;u=&mgZ|H$E$Pv>>0ui):tYx4N`;(j(sSm', "P;*bGfsQ}$)Dy}CM9_}{Wncu#>;=h<x=!vg{%0w}B~", "9$I)aNX%w>hc&3CQ%B`)v7Y/KL", "F^e?W!}G3~j+yaeqOcm", "=O8s_=I", "P.f0[J6}j&:`AG%5xv{dG*#+j&Yba~R3m[x)Lkg}lLXTTt[.C`}1L", "uh0yPGxvD4JTA[iCnFiUEv5b12Qzqm", 'p~vU^G}4_@@iA{.5Y4mDSaQGX/~ictLMHQ/+YxHj!"CDfxP.)F{qKr0i[', 'qA"b#80f`"9UkRE%{^Vb5a6}A]nj8kJQx0JyiToBO0@AP', 'an?Sk2UL">U@{RJqJt%0N8[JZwRDaNN=ZA]jVuI', "Kkd{O/)K@C1?0|[gQ3@b$xuQoLRW>a==6v>b/rK+vB37eRH", "#)Zlk2KDZ7Jt7Lx=tI", "G>{vesI", "qFjUlh#o#&AejO", "PB]^|hUb$0yUp]L$6Qjb[/ab]2voYaSFP{G+.{I", 'y=!j.2@P_ASjn[o"lBnjN8x+]cYT"sT36F&U*dii_/~p.~b_c/wz]:I', 'PBv`6vJjqCXVzG`}ln^+`0$wu"7UJ~JR;]E^', '"vvbZN7gHl^i::0%H=(Sn2Qm', "g>$TRG)LF$=+$qeSiSuS#0.L)CV51[]", "Azt[(jI", 'kAKyt>"GF$gC$q;3v3Jjyk:%A)@At:^}u$+1yy2vv0w4FN5F)u(Sq', "^;%qG8:B57`oI]uqZv=lD:oLLeFpamWqOF[H8npb47h~FW?=Lxm", "VOe+k{>m[)v?LGI}|FObpy/^N&zt7t/bXMI1F*UP", 'Y@?)Z88#R)~dB5#g@Q>UbQWuH$m1"===kALyZxK%9$^A#teqj?o37>Sm', "~=l[<oq%@~$7wafhFi9Kvt&b>*OFJ:`FM0jTK2w7]2(BP", 'wiVT>pv+=Lb7;]5b7xZ?F,Jjc;!"K[]394v4,2,%[', '(njTesnPA>"ofkhg<`X^JBYT0wb}Mm', 'yv]gG,,&+7@OL>9Znxf^Ehg"n"!:P', "%$>b&!Nm", "cvN?U:$m", "5>Av6*FB", 'W6t/h.[Y6^lZ+X__<&sGtt"u[%cHf:7', "YpyUe4T==M<", "7mqa[#.B", ";(k2*2NB", "s=Wl+@!W", "i~bsE~UB", "7b&aE*V", "mG@QM~Hr", "3X4Nd5V", "Sd83eSeW", "fG;4!@3V", "VVGvP{@B", "7W0Vn", "i~zk}@$Q", "Y]<It", "f)X$6[G6", "TIQj%/Ff", '&]"z"2af', "r}Pe7|1J", ":Gh0p~n}", "[iC69|o(", '~Z_6v+%oa$j3"k4TL.AtSS/*JgyCzE4TJ;?MJL~=RBCfuNLZEZr#t', '~Z_6v+%oa$j3"k4TL.AtSS/*JgyCzE4T3hWMqq7(LvjHX?"OY!', "b2K&HO.a^;=CoP%nn2?qr#H<I[9wpH7r:{Yw6", "TC%<", "66<ikO6(", "Dp<[sV6Q", "!^E7H", "C*jsq.^B", "n{t@ko.j", "6lZaK", "QlJR^4NB", ">wXIF8,5", "dZ)EGz44", "QQTyezc[2.", "$BWrg)dU", "p}YyHil", ";tNV8Zr&o", "p}YyHi{x", "$H)N", "Mfn6Of#R", '=FXlc"~r', "!fUlz", "=)<b6F(r", "tkOmz", "_w$gNZWr", "1PRFh", "Dh[UroI", 'J_E"k$F/', "f?&HVt#/", "A5S{S", "=Mf{4!8e", "^8s$o", "51lJC<>a", "nv^SCgNr)#", "eR%JxSabW%", "#2{!X|fzf)", "G,X[+.66c$", "?@b4,.a=", "NOX}SqS`!E9", "Mzw#YmN/M!x", "S0LjP@8wTdx", "fhm[b?2tDUl", "<8(L?ZNzeI8", "?@D3?5{1y9x", "9z6LDa{2u", 'YC;eo^W=Rn:Lyhwe9z@[l7"tNfcxK`c', "9n)[pM&y$pmHgF_,`xyLR?FO79sH6fw", "884#{ZcZ@S:L=LU*Yxx{b?2E9J_E~^c", '"KE6z?cZ[J/>h/o*%hF#`Z$_Qd7^>/v', "%h6LraLtNfnHgF_,`x%LR?FOj(2<QG(", "4z6L1W{28J_EmNQP%Bkuh?8cP3s<D", "@cFXb.Dn", '"R/P22<n', "0.C0$4JX0`", 'a!"5"', 'a!"5T/bXlj&<l', "`mQ{v,[;$8|i=9Rm$a", "oX@$kG6PH@24o2(3Wa", "xZNFk+Jal{x#uJAUz", "NM*$>A^nH@!i~(2bha"]), tc(kc = function(...TT) {
      tc(TT[Ic[12]] = Ic[2], TT[Ic[16]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], TT[Ic[13]] = Ic[19], TT[Ic[14]] = []);
      try {
        tc(TT[Ic[13]] = Object, TT[Ic[14]][Ic[28]]("".__proto__.constructor.name))
      } catch (Tc) {}
      TT: for (TT[-Ic[15]] = Ic[2]; TT[-Ic[15]] < TT[Ic[16]][Ic[12]]; TT[-Ic[15]]++) try {
        for (TT[Ic[13]] = TT[Ic[16]][TT[-Ic[15]]](), TT[-Ic[17]] = Ic[2]; TT[-Ic[17]] < TT[Ic[14]][Ic[12]]; TT[-Ic[17]]++)
          if (typeof TT[Ic[13]][TT[Ic[14]][TT[-Ic[17]]]] === Ic[18]) continue TT;
        return TT[Ic[13]]
      } catch (Tc) {}
      return TT[Ic[13]] || this
    }() || {}, cc = kc.TextDecoder, lc = kc.Uint8Array, Mc = kc[Ic[79]], Kc = kc.String || String, Oc = kc.Array || Array, yc = function() {
      var TT, kT, cT = new Oc(Ic[57]);
      return tc(TT = Kc[Ic[25]] || Kc.fromCharCode, kT = []),
        function(...lT) {
          for (tc(lT[Ic[12]] = Ic[0], lT[-Ic[23]] = Ic[19], lT[Ic[22]] = Ic[19], lT[Ic[21]] = lT[Ic[2]][Ic[12]], kT[Ic[12]] = Ic[2]), lT[-Ic[20]] = Ic[2]; lT[-Ic[20]] < lT[Ic[21]];) tc(lT[Ic[22]] = lT[Ic[2]][lT[-Ic[20]]++], lT[Ic[22]] <= Ic[56] ? lT[-Ic[23]] = lT[Ic[22]] : lT[Ic[22]] <= Ic[74] ? lT[-Ic[23]] = (31 & lT[Ic[22]]) << Ic[8] | lT[Ic[2]][lT[-Ic[20]]++] & Ic[24] : lT[Ic[22]] <= 239 ? lT[-Ic[23]] = (15 & lT[Ic[22]]) << Ic[27] | (lT[Ic[2]][lT[-Ic[20]]++] & Ic[24]) << Ic[8] | lT[Ic[2]][lT[-Ic[20]]++] & Ic[24] : Kc[Ic[25]] ? lT[-Ic[23]] = (lT[Ic[22]] & Ic[26]) << Ic[87] | (lT[Ic[2]][lT[-Ic[20]]++] & Ic[24]) << Ic[27] | (lT[Ic[2]][lT[-Ic[20]]++] & Ic[24]) << Ic[8] | lT[Ic[2]][lT[-Ic[20]]++] & Ic[24] : (lT[-Ic[23]] = Ic[24], lT[-Ic[20]] += Ic[36]), kT[Ic[28]](cT[lT[-Ic[23]]] || (cT[lT[-Ic[23]]] = TT(lT[-Ic[23]]))));
          return kT[Ic[48]]("")
        }
    }()), Ac(107) in jc && function(...TT) {
      tc(TT[Ic[12]] = Ic[2], TT[Ic[29]] = function(...TT) {
        if (tc(TT[Ic[12]] = Ic[0], TT[Ic[29]] = TT[Ic[2]].length), TT[Ic[29]] < Ic[1]) return Ic[2];
        if (tc(TT[Ic[30]] = Math.max(...TT[Ic[2]]), TT[Ic[4]] = Math.min(...TT[Ic[2]])), TT[Ic[30]] === TT[Ic[4]]) return Ic[2];
        for (tc(TT[Ic[9]] = Array(TT[Ic[29]] - Ic[0]).fill(Number.MAX_SAFE_INTEGER), TT[Ic[33]] = Array(TT[Ic[29]] - Ic[0]).fill(Number.MIN_SAFE_INTEGER), TT[Ic[32]] = Math.ceil((TT[Ic[30]] - TT[Ic[4]]) / (TT[Ic[29]] - Ic[0])), TT[Ic[26]] = Ic[2]), TT[Ic[31]] = Ic[2]; TT[Ic[31]] < TT[Ic[29]]; TT[Ic[31]]++) TT[Ic[2]][TT[Ic[31]]] !== TT[Ic[4]] && TT[Ic[2]][TT[Ic[31]]] !== TT[Ic[30]] && tc(TT[Ic[26]] = Math.floor((TT[Ic[2]][TT[Ic[31]]] - TT[Ic[4]]) / TT[Ic[32]]), TT[Ic[9]][TT[Ic[26]]] = Math.min(TT[Ic[9]][TT[Ic[26]]], TT[Ic[2]][TT[Ic[31]]]), TT[Ic[33]][TT[Ic[26]]] = Math.max(TT[Ic[33]][TT[Ic[26]]], TT[Ic[2]][TT[Ic[31]]]));
        for (tc(TT[Ic[34]] = Number.MIN_SAFE_INTEGER, TT[Ic[35]] = TT[Ic[4]]), TT[-Ic[20]] = Ic[2]; TT[-Ic[20]] < TT[Ic[29]] - Ic[0]; TT[-Ic[20]]++) TT[Ic[9]][TT[-Ic[20]]] === Number.MAX_SAFE_INTEGER && TT[Ic[33]][TT[-Ic[20]]] === Number.MIN_SAFE_INTEGER || tc(TT[Ic[34]] = Math.max(TT[Ic[34]], TT[Ic[9]][TT[-Ic[20]]] - TT[Ic[35]]), TT[Ic[35]] = TT[Ic[33]][TT[-Ic[20]]]);
        return TT[Ic[34]] = Math.max(TT[Ic[34]], TT[Ic[30]] - TT[Ic[35]]), TT[Ic[34]]
      }, console.log(TT[Ic[29]]))
    }(), tc(fc = Object[Ac(108)](Ic[64]), xc = void 0), tc(ik = (...TT) => {
      function kT(...TT) {
        return TT[Ic[12]] = Ic[0], typeof sk[TT[Ic[2]]] === Ic[18] ? sk[TT[Ic[2]]] = function(...TT) {
          for (tc(TT[Ic[12]] = Ic[0], TT[Ic[0]] = 'N/Ku5R`cM"gqpzve;fh%~o+TE^iV4IXjkbltsUm:?8}9],|!>[._*wCQOy)0S#62Y{dn&PA$7ZLB1H(F@rxaD<J3W=G', TT[Ic[13]] = "" + (TT[Ic[2]] || ""), TT[Ic[4]] = TT[Ic[13]].length, TT[Ic[9]] = [], TT[Ic[73]] = Ic[2], TT[Ic[32]] = Ic[2], TT[Ic[6]] = -Ic[0]), TT[Ic[10]] = Ic[2]; TT[Ic[10]] < TT[Ic[4]]; TT[Ic[10]]++)
            if (TT[Ic[22]] = TT[Ic[0]].indexOf(TT[Ic[13]][TT[Ic[10]]]), TT[Ic[22]] !== -Ic[0])
              if (TT[Ic[6]] < Ic[2]) TT[Ic[6]] = TT[Ic[22]];
              else {
                tc(TT[Ic[6]] += TT[Ic[22]] * Ic[38], TT[Ic[73]] |= TT[Ic[6]] << TT[Ic[32]], TT[Ic[32]] += (TT[Ic[6]] & Ic[40]) > Ic[41] ? Ic[42] : Ic[43]);
                do {
                  tc(TT[Ic[9]].push(TT[Ic[73]] & Ic[11]), TT[Ic[73]] >>= Ic[10], TT[Ic[32]] -= Ic[10])
                } while (TT[Ic[32]] > Ic[26]);
                TT[Ic[6]] = -Ic[0]
              } return TT[Ic[6]] > -Ic[0] && TT[Ic[9]].push((TT[Ic[73]] | TT[Ic[6]] << TT[Ic[32]]) & Ic[11]), Cc(TT[Ic[9]])
        }(Tc[TT[Ic[2]]]) : sk[TT[Ic[2]]]
      }
      TT[Ic[12]] = Ic[0];
      const cT = function(TT) {
          var kT;
          return {
            meta: {
              ...TT.meta,
              formatVersion: rk.e,
              variation: null !== (kT = TT.meta.variation) && void 0 !== kT ? kT : null
            },
            initialChunks: TT.initialChunks.map((TT => ({
              chunkPos: TT.chunkPos,
              rle: Pk(TT.rle),
              sharedBlockData: zk("sharedBlockData", TT.sharedBlockData)
            }))),
            ticks: TT.ticks.map(nk),
            editState: TT.editState
          }
        }(TT[Ic[2]]),
        lT = lk(rk[Ic[50]]);
      TT[-Ic[74]] = Ic[19];
      try {
        function yT(...TT) {
          for (tc(TT[Ic[12]] = Ic[0], TT[Ic[0]] = 'nfoX]esbFA2;*Lu:HK#7.Oaqhi`4yv[TBYcRWZVClmMQrPkpDUIEtGNgJd8jxw3(_6~%09,1z<5{}&^=/"+>)?$|@S!', TT[Ic[1]] = "" + (TT[Ic[2]] || ""), TT[Ic[4]] = TT[Ic[1]].length, TT[Ic[61]] = [], TT[Ic[50]] = Ic[2], TT[Ic[32]] = Ic[2], TT[-Ic[75]] = -Ic[0]), TT[Ic[10]] = Ic[2]; TT[Ic[10]] < TT[Ic[4]]; TT[Ic[10]]++)
            if (TT[Ic[53]] = TT[Ic[0]].indexOf(TT[Ic[1]][TT[Ic[10]]]), TT[Ic[53]] !== -Ic[0])
              if (TT[-Ic[75]] < Ic[2]) TT[-Ic[75]] = TT[Ic[53]];
              else {
                tc(TT[-Ic[75]] += TT[Ic[53]] * Ic[38], TT[Ic[50]] |= TT[-Ic[75]] << TT[Ic[32]], TT[Ic[32]] += (TT[-Ic[75]] & Ic[40]) > Ic[41] ? Ic[42] : Ic[43]);
                do {
                  tc(TT[Ic[61]].push(TT[Ic[50]] & Ic[11]), TT[Ic[50]] >>= Ic[10], TT[Ic[32]] -= Ic[10])
                } while (TT[Ic[32]] > Ic[26]);
                TT[-Ic[75]] = -Ic[0]
              } return TT[-Ic[75]] > -Ic[0] && TT[Ic[61]].push((TT[Ic[50]] | TT[-Ic[75]] << TT[Ic[32]]) & Ic[11]), Cc(TT[Ic[61]])
        }

        function fT(...TT) {
          return TT[Ic[12]] = Ic[0], typeof sk[TT[Ic[2]]] === Ic[18] ? sk[TT[Ic[2]]] = yT(Tc[TT[Ic[2]]]) : sk[TT[Ic[2]]]
        }
        TT[-Ic[74]] = lT[fT(144)](cT)
      } catch (fc) {
        function IT(...TT) {
          for (tc(TT[Ic[12]] = Ic[0], TT[Ic[0]] = 'lxUCORokjNs5M*aX9P]?8n%T&g@<^BVbuqAmdG$f)>|HK1JS36:}Y{t;+I(~W#0D2=Qhpc/w"4r!Zy.,iz_EeFLv[`7', TT[Ic[13]] = "" + (TT[Ic[2]] || ""), TT[Ic[4]] = TT[Ic[13]].length, TT[Ic[61]] = [], TT[Ic[39]] = Ic[2], TT[Ic[8]] = Ic[2], TT[Ic[26]] = -Ic[0]), TT[Ic[10]] = Ic[2]; TT[Ic[10]] < TT[Ic[4]]; TT[Ic[10]]++)
            if (TT[Ic[22]] = TT[Ic[0]].indexOf(TT[Ic[13]][TT[Ic[10]]]), TT[Ic[22]] !== -Ic[0])
              if (TT[Ic[26]] < Ic[2]) TT[Ic[26]] = TT[Ic[22]];
              else {
                tc(TT[Ic[26]] += TT[Ic[22]] * Ic[38], TT[Ic[39]] |= TT[Ic[26]] << TT[Ic[8]], TT[Ic[8]] += (TT[Ic[26]] & Ic[40]) > Ic[41] ? Ic[42] : Ic[43]);
                do {
                  tc(TT[Ic[61]].push(TT[Ic[39]] & Ic[11]), TT[Ic[39]] >>= Ic[10], TT[Ic[8]] -= Ic[10])
                } while (TT[Ic[8]] > Ic[26]);
                TT[Ic[26]] = -Ic[0]
              } return TT[Ic[26]] > -Ic[0] && TT[Ic[61]].push((TT[Ic[39]] | TT[Ic[26]] << TT[Ic[8]]) & Ic[11]), Cc(TT[Ic[61]])
        }

        function AT(TT) {
          return typeof sk[TT] === Ic[18] ? sk[TT] = IT(Tc[TT]) : sk[TT]
        }

        function CT(...TT) {
          tc(TT[Ic[12]] = Ic[2], TT[Ic[13]] = function(...TT) {
            for (tc(TT[Ic[12]] = Ic[0], TT[Ic[0]] = TT[Ic[2]].length, TT[Ic[13]] = [], TT[Ic[74]] = Ic[2], TT[Ic[9]] = Ic[2], TT[Ic[2]].sort(((TT, kT) => TT - kT))), TT[Ic[39]] = Ic[2]; TT[Ic[39]] < TT[Ic[0]]; TT[Ic[39]]++)
              if (!(TT[Ic[39]] > Ic[2] && TT[Ic[2]][TT[Ic[39]]] === TT[Ic[2]][TT[Ic[39]] - Ic[0]]))
                for (tc(TT[Ic[74]] = TT[Ic[39]] + Ic[0], TT[Ic[9]] = TT[Ic[0]] - Ic[0]); TT[Ic[74]] < TT[Ic[9]];)
                  if (TT[Ic[2]][TT[Ic[39]]] + TT[Ic[2]][TT[Ic[74]]] + TT[Ic[2]][TT[Ic[9]]] < Ic[2]) TT[Ic[74]]++;
                  else if (TT[Ic[2]][TT[Ic[39]]] + TT[Ic[2]][TT[Ic[74]]] + TT[Ic[2]][TT[Ic[9]]] > Ic[2]) TT[Ic[9]]--;
            else {
              for (TT[Ic[13]].push([TT[Ic[2]][TT[Ic[39]]], TT[Ic[2]][TT[Ic[74]]], TT[Ic[2]][TT[Ic[9]]]]); TT[Ic[74]] < TT[Ic[9]] && TT[Ic[2]][TT[Ic[74]]] === TT[Ic[2]][TT[Ic[74]] + Ic[0]];) TT[Ic[74]]++;
              for (; TT[Ic[74]] < TT[Ic[9]] && TT[Ic[2]][TT[Ic[9]]] === TT[Ic[2]][TT[Ic[9]] - Ic[0]];) TT[Ic[9]]--;
              tc(TT[Ic[74]]++, TT[Ic[9]]--)
            }
            return TT[Ic[13]]
          }, console.log(TT[Ic[13]]))
        }
        throw AT(145) in jc && CT(), tc(console[AT(146)](cT), lT[AT(147)](cT, {
          [AT(Ic[59]) + AT(Ic[83])](...TT) {
            function kT(...TT) {
              return TT[Ic[12]] = Ic[0], typeof sk[TT[Ic[2]]] === Ic[18] ? sk[TT[Ic[2]]] = function(...TT) {
                for (tc(TT[Ic[12]] = Ic[0], TT[Ic[29]] = '4rRN_J/p2~lU%}c>O;@D|[hyqsw!ozn`#]+XH)ivAjkS7=TMZb*F6L9<EK0I8B3G.P?(eVdfQCg1"$m5aW,{u^:xtY&', TT[Ic[1]] = "" + (TT[Ic[2]] || ""), TT[Ic[77]] = TT[Ic[1]].length, TT[Ic[9]] = [], TT[Ic[39]] = Ic[2], TT[Ic[8]] = Ic[2], TT[Ic[26]] = -Ic[0]), TT[-Ic[76]] = Ic[2]; TT[-Ic[76]] < TT[Ic[77]]; TT[-Ic[76]]++)
                  if (TT[-Ic[78]] = TT[Ic[29]].indexOf(TT[Ic[1]][TT[-Ic[76]]]), TT[-Ic[78]] !== -Ic[0])
                    if (TT[Ic[26]] < Ic[2]) TT[Ic[26]] = TT[-Ic[78]];
                    else {
                      tc(TT[Ic[26]] += TT[-Ic[78]] * Ic[38], TT[Ic[39]] |= TT[Ic[26]] << TT[Ic[8]], TT[Ic[8]] += (TT[Ic[26]] & Ic[40]) > Ic[41] ? Ic[42] : Ic[43]);
                      do {
                        tc(TT[Ic[9]].push(TT[Ic[39]] & Ic[11]), TT[Ic[39]] >>= Ic[10], TT[Ic[8]] -= Ic[10])
                      } while (TT[Ic[8]] > Ic[26]);
                      TT[Ic[26]] = -Ic[0]
                    } return TT[Ic[26]] > -Ic[0] && TT[Ic[9]].push((TT[Ic[39]] | TT[Ic[26]] << TT[Ic[8]]) & Ic[11]), Cc(TT[Ic[9]])
              }(Tc[TT[Ic[2]]]) : sk[TT[Ic[2]]]
            }
            return xc = [TT, {}], vc(kT(150), kT(151) + kT(152), kT(153) + kT(154))[kT(155) + kT(156)]
          }
        })), fc
      }
      const MT = Ok(rk[Ic[50]], TT[-Ic[74]]),
        OT = KT[Ic[79]][Ac(157)](Ic[9]);
      return OT[kT(158) + kT(159) + "E"](rk[Ic[50]]), KT[Ic[79]].concat([OT, MT])
    }, qk = (...TT) => {
      function kT(TT) {
        return typeof sk[TT] === Ic[18] ? sk[TT] = function(...TT) {
          for (tc(TT[Ic[12]] = Ic[0], TT[Ic[1]] = 'Vae19@h%vp$kR*?d_)wU8s#(OWoSL`JD{"3bN=+<mP:XY}BCt0.5i!zT&juQx2|H]>4frAyMF6GgcE[,nl^/~7;KqIZ', TT[-Ic[80]] = "" + (TT[Ic[2]] || ""), TT[Ic[36]] = TT[-Ic[80]].length, TT[Ic[9]] = [], TT[Ic[50]] = Ic[2], TT[Ic[15]] = Ic[2], TT[Ic[26]] = -Ic[0]), TT[Ic[3]] = Ic[2]; TT[Ic[3]] < TT[Ic[36]]; TT[Ic[3]]++)
            if (TT[-Ic[67]] = TT[Ic[1]].indexOf(TT[-Ic[80]][TT[Ic[3]]]), TT[-Ic[67]] !== -Ic[0])
              if (TT[Ic[26]] < Ic[2]) TT[Ic[26]] = TT[-Ic[67]];
              else {
                tc(TT[Ic[26]] += TT[-Ic[67]] * Ic[38], TT[Ic[50]] |= TT[Ic[26]] << TT[Ic[15]], TT[Ic[15]] += (TT[Ic[26]] & Ic[40]) > Ic[41] ? Ic[42] : Ic[43]);
                do {
                  tc(TT[Ic[9]].push(TT[Ic[50]] & Ic[11]), TT[Ic[50]] >>= Ic[10], TT[Ic[15]] -= Ic[10])
                } while (TT[Ic[15]] > Ic[26]);
                TT[Ic[26]] = -Ic[0]
              } return TT[Ic[26]] > -Ic[0] && TT[Ic[9]].push((TT[Ic[50]] | TT[Ic[26]] << TT[Ic[15]]) & Ic[11]), Cc(TT[Ic[9]])
        }(Tc[TT]) : sk[TT]
      }
      TT[Ic[12]] = Ic[0];
      const cT = KT[Ic[79]][kT(160)](TT[Ic[2]]);
      if (cT[kT(161) + kT(162)] >= Ic[9]) {
        function lT(...TT) {
          for (tc(TT[Ic[12]] = Ic[0], TT[Ic[81]] = 'Wn^BdbspXMNHJoCcAL1;Z`7Tj9_v?@u0|]*,hK3m$wx"%iO</P+Ft2gD!RQq.rE8lyf(UVYe#}S6G>&:4kz5I){a=~[', TT[Ic[1]] = "" + (TT[Ic[2]] || ""), TT[Ic[36]] = TT[Ic[1]].length, TT[Ic[9]] = [], TT[Ic[82]] = Ic[2], TT[Ic[8]] = Ic[2], TT[Ic[26]] = -Ic[0]), TT[Ic[3]] = Ic[2]; TT[Ic[3]] < TT[Ic[36]]; TT[Ic[3]]++)
            if (TT[Ic[53]] = TT[Ic[81]].indexOf(TT[Ic[1]][TT[Ic[3]]]), TT[Ic[53]] !== -Ic[0])
              if (TT[Ic[26]] < Ic[2]) TT[Ic[26]] = TT[Ic[53]];
              else {
                tc(TT[Ic[26]] += TT[Ic[53]] * Ic[38], TT[Ic[82]] |= TT[Ic[26]] << TT[Ic[8]], TT[Ic[8]] += (TT[Ic[26]] & Ic[40]) > Ic[41] ? Ic[42] : Ic[43]);
                do {
                  tc(TT[Ic[9]].push(TT[Ic[82]] & Ic[11]), TT[Ic[82]] >>= Ic[10], TT[Ic[8]] -= Ic[10])
                } while (TT[Ic[8]] > Ic[26]);
                TT[Ic[26]] = -Ic[0]
              } return TT[Ic[26]] > -Ic[0] && TT[Ic[9]].push((TT[Ic[82]] | TT[Ic[26]] << TT[Ic[8]]) & Ic[11]), Cc(TT[Ic[9]])
        }

        function OT(...TT) {
          return TT[Ic[12]] = Ic[0], typeof sk[TT[Ic[2]]] === Ic[18] ? sk[TT[Ic[2]]] = lT(Tc[TT[Ic[2]]]) : sk[TT[Ic[2]]]
        }

        function yT(...TT) {
          function cT(...TT) {
            return TT[Ic[12]] = Ic[0], typeof sk[TT[Ic[2]]] === Ic[18] ? sk[TT[Ic[2]]] = function(...TT) {
              for (tc(TT[Ic[12]] = Ic[0], TT[Ic[29]] = 'Dr=uFvc(j3T)w/*CPJU$lI&z`K[{?Y6}e+,NahW|7g]@XoH_xL!td4%98<GnpfSEZM:;5>y#VBO1Aq.i^"0m~2QskRb', TT[-Ic[83]] = "" + (TT[Ic[2]] || ""), TT[Ic[65]] = TT[-Ic[83]].length, TT[-Ic[85]] = [], TT[Ic[50]] = Ic[2], TT[Ic[32]] = Ic[2], TT[Ic[6]] = -Ic[0]), TT[Ic[3]] = Ic[2]; TT[Ic[3]] < TT[Ic[65]]; TT[Ic[3]]++)
                if (TT[-Ic[84]] = TT[Ic[29]].indexOf(TT[-Ic[83]][TT[Ic[3]]]), TT[-Ic[84]] !== -Ic[0])
                  if (TT[Ic[6]] < Ic[2]) TT[Ic[6]] = TT[-Ic[84]];
                  else {
                    tc(TT[Ic[6]] += TT[-Ic[84]] * Ic[38], TT[Ic[50]] |= TT[Ic[6]] << TT[Ic[32]], TT[Ic[32]] += (TT[Ic[6]] & Ic[40]) > Ic[41] ? Ic[42] : Ic[43]);
                    do {
                      tc(TT[-Ic[85]].push(TT[Ic[50]] & Ic[11]), TT[Ic[50]] >>= Ic[10], TT[Ic[32]] -= Ic[10])
                    } while (TT[Ic[32]] > Ic[26]);
                    TT[Ic[6]] = -Ic[0]
                  } return TT[Ic[6]] > -Ic[0] && TT[-Ic[85]].push((TT[Ic[50]] | TT[Ic[6]] << TT[Ic[32]]) & Ic[11]), Cc(TT[-Ic[85]])
            }(Tc[TT[Ic[2]]]) : sk[TT[Ic[2]]]
          }
          TT[Ic[12]] = Ic[2], tc(TT[Ic[50]] = kT(Ic[14]) + kT(165) + cT(166) + cT(167) + cT(168), TT[Ic[86]] = cT(169) + cT(170) + cT(171) + cT(172) + cT(173) + cT(Ic[75]) + cT(175), TT[Ic[1]] = cT(176) + cT(177) + cT(Ic[58]) + cT(179) + cT(180) + cT(Ic[81]), TT[Ic[50]].match(TT[Ic[86]] + TT[Ic[1]]))
        }
        kT(163) in jc && yT();
        const fT = cT[OT(Ic[73]) + OT(183)](Ic[2]);
        if ((0, rk.k)(fT)) {
          function xT(...TT) {
            for (tc(TT[Ic[12]] = Ic[0], TT[Ic[90]] = '|lqhYECpdVexP+]sGu@);NM[i}~"g_bF567:XSA=LrB`Iy/,$.1!R304zJv*co?j%TnHfa<Q9tKm2Z(k&O^#D8>UwW{', TT[Ic[1]] = "" + (TT[Ic[2]] || ""), TT[Ic[87]] = TT[Ic[1]].length, TT[-Ic[8]] = [], TT[Ic[39]] = Ic[2], TT[Ic[32]] = Ic[2], TT[Ic[6]] = -Ic[0]), TT[Ic[88]] = Ic[2]; TT[Ic[88]] < TT[Ic[87]]; TT[Ic[88]]++)
              if (TT[-Ic[89]] = TT[Ic[90]].indexOf(TT[Ic[1]][TT[Ic[88]]]), TT[-Ic[89]] !== -Ic[0])
                if (TT[Ic[6]] < Ic[2]) TT[Ic[6]] = TT[-Ic[89]];
                else {
                  tc(TT[Ic[6]] += TT[-Ic[89]] * Ic[38], TT[Ic[39]] |= TT[Ic[6]] << TT[Ic[32]], TT[Ic[32]] += (TT[Ic[6]] & Ic[40]) > Ic[41] ? Ic[42] : Ic[43]);
                  do {
                    tc(TT[-Ic[8]].push(TT[Ic[39]] & Ic[11]), TT[Ic[39]] >>= Ic[10], TT[Ic[32]] -= Ic[10])
                  } while (TT[Ic[32]] > Ic[26]);
                  TT[Ic[6]] = -Ic[0]
                } return TT[Ic[6]] > -Ic[0] && TT[-Ic[8]].push((TT[Ic[39]] | TT[Ic[6]] << TT[Ic[32]]) & Ic[11]), Cc(TT[-Ic[8]])
          }

          function IT(...TT) {
            return TT[Ic[12]] = Ic[0], typeof sk[TT[Ic[2]]] === Ic[18] ? sk[TT[Ic[2]]] = xT(Tc[TT[Ic[2]]]) : sk[TT[Ic[2]]]
          }
          const AT = cT[OT(184)](Ic[9]),
            CT = Kk(fT) ? KT[Ic[79]][IT(185)](yk(fT, AT)) : AT;
          return function(TT) {
            var kT, cT, lT, KT, OT;
            const yT = null === (kT = TT.meta) || void 0 === kT ? void 0 : kT.formatVersion;
            if (!(0, rk.k)(yT)) throw new Error(`Unsupported recording format version: ${yT}`);
            if (!Array.isArray(TT.initialChunks) || !Array.isArray(TT.ticks)) throw new Error("Recording is missing initialChunks or ticks");
            for (const MT of TT.ticks)
              if (!Array.isArray(MT.structuralEvents) || !Array.isArray(MT.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
            const fT = {
              ...TT.meta
            };
            return fT.formatVersion = rk.e, (0, MT.R)(fT.variation) && delete fT.variation, {
              meta: fT,
              initialChunks: TT.initialChunks.map((TT => {
                var kT;
                return {
                  chunkPos: TT.chunkPos,
                  rle: wk(TT.rle),
                  sharedBlockData: null !== (kT = Jk("sharedBlockData", TT.sharedBlockData)) && void 0 !== kT ? kT : []
                }
              })),
              ticks: TT.ticks.map(pk),
              editState: {
                cameraKeyframes: null !== (cT = null === (lT = TT.editState) || void 0 === lT ? void 0 : lT.cameraKeyframes) && void 0 !== cT ? cT : [],
                playbackMark: null !== (KT = null === (OT = TT.editState) || void 0 === OT ? void 0 : OT.playbackMark) && void 0 !== KT ? KT : null
              }
            }
          }(lk(fT)[IT(Ic[21])](CT))
        }
      }
      throw new Error(kT(187) + kT(Ic[33]) + kT(189) + kT(190) + Ic[61])
    })
  },
  36803: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => OT,
      e: () => lT,
      g: () => AT,
      i: () => CT,
      k: () => KT,
      m: () => xT,
      n: () => jT,
      r: () => fT,
      t: () => IT,
      x: () => yT
    });
    const lT = 9,
      MT = [9];

    function KT(TT) {
      return MT.includes(TT)
    }
    const OT = 100,
      yT = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips"],
      fT = ["skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride"],
      xT = ["itemName", "amount", "position", "size", "attributes"],
      IT = ["opacity", "zIndex", "overlayColour", "canSee", "meshScaling", "nameTagInfo", "multilineTextBox", "hasPriorityNametag", "ranks", "nameColour", "_isAlive", "_invisibleEffect", "_invincible", "killfeedColour", "hideNameSeed", "_glowingEffect", "lockHeadToBody"],
      AT = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading", "armour", "IH", "playerCustomisations", "variation", "metaInfo", "soundName", "volume", "refDistance", "maxHearDist", "rate", "ridingVehicleEId", "leaderboardTop", "meshKind", "meshOpts", "aiState"],
      CT = ["selectedSlotIndex", "slots"],
      jT = ["_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"]
  },
  36797: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => AT,
      g: () => vT,
      j: () => fT,
      k: () => OT,
      l: () => yT,
      p: () => xT
    });
    var lT = cT(339),
      MT = cT(36);

    function KT(TT) {
      return null === TT || void 0 === TT ? null : "string" === typeof TT ? TT : null
    }

    function OT(TT, kT) {
      return JSON.stringify(TT) === JSON.stringify(kT)
    }

    function yT(TT) {
      const kT = [];
      for (const cT of Object.keys(TT)) {
        const lT = TT[cT];
        for (const TT of Object.keys(lT)) kT.push({
          tT: cT,
          name: TT,
          ...lT[TT]
        })
      }
      return kT
    }

    function fT(TT) {
      const kT = {};
      for (const KT of TT) {
        var cT, lT, MT;
        kT[KT.tT] || (kT[KT.tT] = {}), kT[KT.tT][KT.name] = {
          icon: KT.icon,
          level: KT.level,
          displayName: null !== (cT = KT.displayName) && void 0 !== cT ? cT : null,
          endTick: null !== (lT = KT.endTick) && void 0 !== lT ? lT : null,
          showInNametag: null === (MT = KT.showInNametag) || void 0 === MT || MT
        }
      }
      return kT
    }

    function xT(TT, kT) {
      const cT = {};
      for (const MT of Object.keys(TT)) {
        const KT = {};
        for (const cT of Object.keys(TT[MT])) {
          const lT = TT[MT][cT];
          null !== lT.endTick && lT.endTick < kT || (KT[cT] = {
            ...lT,
            endTick: null === lT.endTick ? null : lT.endTick - kT
          })
        }(0, lT.uc)(KT) || (cT[MT] = KT)
      }
      return cT
    }

    function IT(TT, kT, cT) {
      if (null !== TT) return Math.max(0, 1e3 * (TT - kT) / cT)
    }
    class AT {
      constructor() {
        this.tracked = {}
      }
      clear() {
        this.tracked = {}
      }
      seedFromClient(TT, kT) {
        this.clear();
        const cT = Date.now();
        for (const yT of TT.iterateEntityIds()) {
          const fT = TT.getEffects(yT);
          if ((0, lT.uc)(fT)) continue;
          const xT = kT(yT);
          for (const TT of Object.keys(fT)) {
            var MT, OT;
            const kT = fT[TT];
            this.upsert(xT, TT, {
              icon: kT.icon,
              level: kT.level,
              displayName: KT(kT.displayName),
              showInNametag: null === (MT = kT.showInNametag) || void 0 === MT || MT,
              endTime: void 0 !== kT.duration && null !== kT.duration ? (null !== (OT = kT.appliedAt) && void 0 !== OT ? OT : cT) + kT.duration : null
            })
          }
        }
      }
      upsert(TT, kT, cT) {
        this.tracked[TT] || (this.tracked[TT] = {}), this.tracked[TT][kT] = cT
      }
      remove(TT, kT) {
        const cT = this.tracked[TT];
        cT && (delete cT[kT], (0, lT.uc)(cT) && delete this.tracked[TT])
      }
      handleUpdate(TT) {
        var kT;
        0 !== TT.duration ? this.upsert(TT.tT, TT.name, {
          icon: TT.icon,
          level: TT.level,
          displayName: KT(TT.displayName),
          showInNametag: null === (kT = TT.showInNametag) || void 0 === kT || kT,
          endTime: void 0 !== TT.duration && null !== TT.duration ? Date.now() + TT.duration : null
        }) : this.remove(TT.tT, TT.name)
      }
      handleRemove(TT, kT) {
        this.remove(TT, kT)
      }
      sample(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        const MT = {},
          KT = 1e3 / kT;
        for (const OT of Object.keys(this.tracked)) {
          const kT = this.tracked[OT],
            yT = {};
          for (const lT of Object.keys(kT)) {
            const MT = kT[lT];
            let fT = null;
            if (null !== MT.endTime) {
              const kT = Math.max(0, MT.endTime - cT);
              if (0 === kT) {
                this.remove(OT, lT);
                continue
              }
              fT = TT + Math.ceil(kT / KT)
            }
            yT[lT] = {
              icon: MT.icon,
              level: MT.level,
              displayName: MT.displayName,
              endTick: fT,
              showInNametag: MT.showInNametag
            }
          }(0, lT.uc)(yT) || (MT[OT] = yT)
        }
        return MT
      }
    }

    function CT(TT, kT, cT, lT) {
      TT.hasEntity(kT) ? TT.updateEffect(kT, cT, lT) : function(TT, kT, cT) {
        MT.k.nt("EffectUpdate", {
          tT: TT,
          name: kT,
          ...cT
        }, !0)
      }(kT, cT, lT)
    }

    function jT(TT, kT, cT) {
      TT.hasEntity(kT) ? TT.removeEffect(kT, cT) : function(TT, kT) {
        MT.k.nt("RemoveEffect", {
          tT: TT,
          name: kT
        }, !0)
      }(kT, cT)
    }

    function vT(TT, kT, cT, lT, MT, KT, OT) {
      for (const IT of Object.keys(cT))
        for (const KT of Object.keys(cT[IT])) {
          var yT;
          null !== (yT = kT[IT]) && void 0 !== yT && yT[KT] || (jT(TT, IT, KT), lT && IT === lT && String(MT) !== String(IT) && jT(TT, MT, KT))
        }
      for (const tT of Object.keys(kT))
        for (const yT of Object.keys(kT[tT])) {
          var fT, xT;
          const hT = kT[tT][yT],
            NT = IT(hT.endTick, KT, OT);
          if (0 === NT) {
            jT(TT, tT, yT), lT && tT === lT && String(MT) !== String(tT) && jT(TT, MT, yT);
            continue
          }
          const QT = null === (fT = cT[tT]) || void 0 === fT ? void 0 : fT[yT],
            ST = QT && (vT = hT, (AT = QT).icon === vT.icon && AT.level === vT.level && AT.displayName === vT.displayName && AT.endTick === vT.endTick && AT.showInNametag === vT.showInNametag),
            DT = {
              icon: hT.icon,
              level: hT.level,
              displayName: null !== (xT = hT.displayName) && void 0 !== xT ? xT : void 0,
              duration: NT,
              showInNametag: hT.showInNametag
            };
          ST || CT(TT, tT, yT, DT), lT && tT === lT && CT(TT, MT, yT, {
            ...DT,
            showInNametag: !1
          })
        }
      var AT, vT
    }
  },
  36781: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => xT,
      c: () => fT,
      f: () => AT,
      g: () => OT,
      j: () => IT
    });
    var lT = cT(36772),
      MT = cT(36785);
    const KT = {
      description: "Bloxd Replay",
      accept: {
        [lT.g]: lT.d
      }
    };

    function OT() {
      return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker
    }

    function yT(TT) {
      return TT instanceof DOMException && "AbortError" === TT.name
    }
    async function fT() {
      try {
        const [TT] = await window.showOpenFilePicker({
          multiple: !1,
          types: [KT]
        }), kT = await TT.getFile();
        return {
          handle: TT,
          bytes: new Uint8Array(await kT.arrayBuffer())
        }
      } catch (TT) {
        if (yT(TT)) return null;
        throw TT
      }
    }
    async function xT(TT) {
      if (TT && await async function(TT) {
          const kT = {
            mode: "readwrite"
          };
          return "granted" === await TT.queryPermission(kT) || "granted" === await TT.requestPermission(kT)
        }(TT)) return TT;
      try {
        return await window.showSaveFilePicker({
          suggestedName: (0, lT.n)(),
          types: [KT]
        })
      } catch (kT) {
        if (yT(kT)) return null;
        throw kT
      }
    }
    async function IT(TT, kT) {
      const cT = await TT.createWritable();
      await cT.write(new Blob([kT], {
        type: lT.g
      })), await cT.close()
    }

    function AT(TT) {
      return (0, lT.j)((0, MT.e)(TT))
    }
  },
  36263: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => AT
    });
    var lT = cT(31),
      MT = cT(118),
      KT = cT(47),
      OT = cT(698),
      yT = cT(3383),
      fT = cT(6647);
    const xT = "shaderPackListingCheckedAt",
      IT = 36e5;

    function AT() {
      const {
        canUseShaderPacks: TT
      } = MT.featureFlags.settings;
      var kT, AT;
      (0, yT.k)(TT) && !(0, yT.j)(TT) && (kT = KT.e.getItem(xT), AT = Date.now(), "number" !== typeof kT || AT < kT || AT - kT >= IT) && (0, OT.c)((() => {
        (async function() {
          if ("landingPage" !== lT.e.get("gameState")) return;
          const TT = await (0, fT.e)();
          if (void 0 === (null === TT || void 0 === TT ? void 0 : TT.listing)) return;
          KT.e.setItem(xT, Date.now());
          const {
            followListingUpdates: kT
          } = await Promise.all([cT.e(75), cT.e(131), cT.e(123)]).then((() => cT(40926)));
          await kT(TT, TT.listing) || KT.e.removeItem(xT)
        })().catch((TT => {
          console.error("Failed to check the shader pack listing for an update", TT)
        }))
      }))
    }
  },
  36302: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => fT
    });
    var lT = cT(328),
      MT = cT(31),
      KT = cT(36310),
      OT = cT(1654),
      yT = cT(2009);

    function fT(TT, kT) {
      var cT, fT, xT;
      if (!MT.e.get("isKeydownEnabled") || TT.repeat) return;
      const IT = TT.code;
      "Escape" === TT.key ? (0, OT.j)(TT) : null !== (cT = yT.y.OpenSettings) && void 0 !== cT && cT.includes(IT) ? (0, OT.z)(TT, lT.o.SETTINGS) : null !== (fT = yT.y.OpenCharacterCustomization) && void 0 !== fT && fT.includes(IT) ? (0, KT.b)() || (0, OT.z)(TT, lT.o.CUSTOMISATION, kT()) : null !== (xT = yT.y.ShowDebugOverlay) && void 0 !== xT && xT.includes(IT) && MT.e.set({
        showDebugOverlay: !MT.e.get("showDebugOverlay")
      })
    }
  },
  36272: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => bT
    });
    var lT = cT(617),
      MT = cT(1235),
      KT = cT(184);
    const OT = "cf-";

    function yT(TT) {
      return `${OT}${TT}`
    }

    function fT(TT) {
      return TT.startsWith(yT("game-server-"))
    }

    function xT(TT) {
      return /^game-server-[a-z0-9-]+\.bloxd\.io$/i.test(TT)
    }
    var IT = cT(1252),
      AT = cT(1226),
      CT = cT(36),
      jT = cT(1784),
      vT = cT(1805),
      tT = cT(2913),
      hT = cT(1316),
      NT = cT(1327),
      QT = cT(1518),
      ST = cT(1202),
      DT = cT(36278),
      aT = cT(47),
      FT = cT(159),
      rT = cT(1833);
    const PT = "gameServerRoute";
    async function wT(TT) {
      if (!TT.ok) {
        const kT = await TT.text().catch((() => ""));
        return 403 === TT.status && "ipv6_unsupported" === kT ? "ipv6Refused" : "other"
      }
      const kT = await TT.json().catch((() => null));
      return "object" === typeof kT && null !== kT && Number.isFinite(kT.version) ? "ours" : "other"
    }
    const mT = new class {
      constructor(TT) {
        this.deps = TT
      }
      hostFor(TT) {
        return this.deps.enabled && xT(TT) && "cloudflare" === this.heldRoute() ? yT(TT) : TT
      }
      async afterJoinFailed(TT, kT) {
        if (!this.deps.enabled || void 0 === kT) return !1;
        const cT = new URL(TT).hostname,
          lT = this.stored();
        if (fT(cT)) return this.deps.Yj("game_server_route", "cf_join_failed", 0), "cloudflare" !== (null === lT || void 0 === lT ? void 0 : lT.route) || lT.aliasFailedOnce || "ours" !== (await this.probeHost(cT)).answer ? this.store({
          route: "direct",
          until: this.deps.now() + 36e5
        }) : this.store({
          ...lT,
          aliasFailedOnce: !0
        }), !1;
        if (!xT(cT) || "direct" === this.heldRoute()) return !1;
        const {
          outcome: MT,
          cfMs: KT
        } = await this.check(cT);
        return "blocked" !== MT ? (this.deps.Yj("game_server_route", MT, KT), !1) : (this.store({
          route: "cloudflare",
          until: this.deps.now() + 1728e5
        }), this.deps.Yj("game_server_route", "blocked", KT), !0)
      }
      afterJoined(TT) {
        if (!this.deps.enabled) return;
        const kT = new URL(TT).hostname,
          cT = fT(kT);
        if (cT) this.deps.Yj("game_server_route", "cf_join", 0);
        else if (!xT(kT) || this.deps.random() >= .01) return;
        const lT = cT ? kT.slice(OT.length) : kT;
        this.deps.delay(2e4).then((async () => {
          await this.reportRtt(lT, "direct", "direct_failed"), await this.reportRtt(yT(lT), "cf", "cf_failed")
        }))
      }
      async check(TT) {
        const kT = this.probeHost(yT(TT));
        if ("none" !== (await this.probeHost(TT)).answer) return {
          outcome: "direct_reachable",
          cfMs: 0
        };
        const {
          answer: cT,
          ms: lT
        } = await kT;
        return "ours" !== cT && "ipv6Refused" !== cT ? {
          outcome: "cf_unreachable",
          cfMs: 0
        } : "none" !== (await this.probeHost(TT)).answer ? {
          outcome: "direct_reachable",
          cfMs: lT
        } : {
          outcome: "ipv6Refused" === cT ? "blocked_ipv6" : "blocked",
          cfMs: lT
        }
      }
      async reportRtt(TT, kT, cT) {
        const lT = "ours" === (await this.probeHost(TT)).answer ? await this.probeHost(TT) : null;
        "ours" === (null === lT || void 0 === lT ? void 0 : lT.answer) ? this.deps.Yj("game_server_rtt", kT, lT.ms): this.deps.Yj("game_server_rtt", cT, 0)
      }
      probeHost(TT) {
        return this.deps.probe(`https://${TT}/version`, 8e3)
      }
      stored() {
        return function(TT) {
          if ("object" !== typeof TT || null === TT) return null;
          const {
            arm: kT,
            route: cT,
            until: lT,
            aliasFailedOnce: MT
          } = TT;
          return "holdout" === kT || "cloudflare" !== cT && "direct" !== cT || "number" !== typeof lT ? null : !0 === MT ? {
            route: cT,
            until: lT,
            aliasFailedOnce: MT
          } : {
            route: cT,
            until: lT
          }
        }(this.deps.storage.getItem(PT))
      }
      heldRoute() {
        const TT = this.stored();
        return null !== TT && TT.until > this.deps.now() ? TT.route : null
      }
      store(TT) {
        this.deps.storage.setItem(PT, {
          ...TT,
          arm: "cloudflare"
        })
      }
    }({
      storage: aT.e,
      probe: async function(TT, kT) {
        const cT = performance.now(),
          lT = await (0, rT.j)(TT, {
            cache: "no-store"
          }, kT, (async TT => {
            const kT = Math.round(performance.now() - cT);
            return {
              answer: await wT(TT),
              ms: kT
            }
          }));
        return null !== lT && void 0 !== lT ? lT : {
          answer: "none",
          ms: 0
        }
      },
      Yj: jT.r,
      enabled: !(0, FT.c)(),
      now: Date.now,
      random: Math.random,
      delay: TT => new Promise((kT => {
        setTimeout(kT, TT)
      }))
    });

    function bT(TT) {
      return async (kT, cT, OT, yT, xT) => {
        let AT;
        if ((0, lT.R)(OT)) {
          if (xT.aborted) return zT();
          const TT = await JT(kT, cT, yT);
          if (xT.aborted || tT.d.matchmakingEnded(TT.isError() ? null : performance.now()), TT.isError()) {
            const kT = TT.asError();
            return console.log("Join room did not succeed, reason:", kT.message), kT.forward()
          }
          AT = TT.getValue()
        } else {
          tT.d.skipPlayWait();
          const TT = oT(OT.replace("https://", "").replace("http://", ""));
          if (TT.isError()) return TT.asError().forward();
          AT = {
            endpoint: TT.getValue(),
            gameNameWithVariation: cT,
            lobbyName: kT instanceof MT.e ? kT.getLobbyName() : kT
          }
        }
        if (xT.aborted) return zT();
        console.log(`Connecting to ${AT.gameNameWithVariation} in lobby ${AT.lobbyName} on game server ${AT.endpoint}`), CT.k.nt("matchmakeAndPlayStepCompleted", {
          step: KT.g.REQUEST_TO_MATCHMAKING,
          totalSubSteps: 1
        }), (0, jT.h)(), vT.c.markGameLoadStart(), (0, NT.l)({
          websocketUrl: AT.endpoint,
          gameNameWithVariation: AT.gameNameWithVariation,
          lobbyName: AT.lobbyName
        }), CT.k.nt("loadingScreenState", "loadingPage:loadingGame");
        const QT = async () => {
          const TT = await async function(TT, kT, cT, lT) {
            const MT = await JT(TT, kT, cT);
            if (!MT.isError() && !lT.aborted) {
              const {
                endpoint: TT,
                gameNameWithVariation: kT,
                lobbyName: cT
              } = MT.getValue();
              (0, NT.l)({
                websocketUrl: TT,
                gameNameWithVariation: kT,
                lobbyName: cT
              })
            }
            return MT
          }(kT, cT, yT, xT);
          return TT.isError() || (AT = TT.getValue()), TT
        }, ST = !(0, lT.R)(OT), DT = () => TT({
          place: AT,
          userContext: yT,
          direct: ST,
          rematch: QT
        }, xT);
        let aT = await DT();
        const FT = aT.isError() && !0 === aT.asError().debugResult.rematch;
        if (aT.isError() && !ST && !xT.aborted && (FT || await mT.afterJoinFailed(AT.endpoint, aT.asError().debugResult.gameServerUnreachable))) {
          if (xT.aborted) return zT();
          console.log("Matchmaking again");
          const TT = await QT();
          if (TT.isError()) return TT.asError().forward();
          if (xT.aborted) return zT();
          aT = await DT(), !aT.isError() || FT && !fT(new URL(AT.endpoint).hostname) || await mT.afterJoinFailed(AT.endpoint, aT.asError().debugResult.gameServerUnreachable)
        }
        return aT.isError() ? aT.asError().forward() : (mT.afterJoined(AT.endpoint), (0, hT.N)(), window.gtag ? window.gtag("event", "conversion", {
          send_to: "AW-16469618203/ipUBCJKWoJUZEJvcqa09"
        }) : console.error("window.gtag not defined"), IT.d.value({
          gameNameWithVariation: AT.gameNameWithVariation,
          lobbyName: AT.lobbyName,
          addLobbyToRecentlyPlayed: !(kT instanceof MT.e)
        }))
      }
    }

    function zT() {
      return IT.d.errorWithCode("Left the game while it loaded", KT.g.REQUEST_TO_MATCHMAKING, {
        severity: "low",
        KT: !0
      })
    }
    async function JT(TT, kT, cT) {
      return (0, lT.R)(TT) || TT instanceof MT.e || !(TT.length > AT.O) ? await QT.d.matchmakePlayer(cT, TT, kT, (0, DT.e)()).then((TT => {
        if (!1 === TT.succeeded) return IT.d.errorWithCode(TT.failReason, KT.g.REQUEST_TO_MATCHMAKING, {
          severity: "low"
        });
        const {
          gameServerHost: kT,
          lobbyName: cT,
          gameNameWithVariation: lT
        } = TT, MT = oT(mT.hostFor(kT));
        return MT.isError() ? MT.asError().forward() : IT.d.value({
          endpoint: MT.getValue(),
          gameNameWithVariation: lT,
          lobbyName: cT
        })
      })).catch((TT => (console.error("Bad response from the matchmaking server:", TT), IT.d.errorWithCode(TT.toString(), KT.g.REQUEST_TO_MATCHMAKING, {
        error: TT,
        severity: "medium"
      })))) : (console.error("Invalid lobby ID:", TT), IT.d.errorWithCode("This lobby link's name is too long. Ask for a new link.", KT.g.REQUEST_TO_MATCHMAKING, {
        severity: "low"
      }))
    }

    function oT(TT) {
      const kT = ST.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(TT);
      return kT.isError() ? IT.d.errorWithCode(kT.asError().message, KT.g.CONNECT_TO_GAME_SERVER, {
        severity: "medium"
      }) : IT.d.value(kT.getValue())
    }
    setTimeout((() => {
      window.initialD ? Date.now = window.initialD : console.error("window.initialD not defined")
    }), 3e3), window.leaveGame = () => {
      (0, NT.j)("/")
    }
  },
  9259: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => jT,
      e: () => CT
    });
    var lT = cT(31),
      MT = cT(1710),
      KT = cT(47),
      OT = cT(1363),
      yT = cT(3625),
      fT = cT(1497),
      xT = cT(1409);
    const IT = 2592e5,
      AT = "notificationOptInLastPromptedAt";
    async function CT() {
      var TT;
      const kT = await jT();
      if (null === kT) return;
      const cT = null !== (TT = KT.e.getItem(AT)) && void 0 !== TT ? TT : 0;
      if (Date.now() - cT < IT) return;
      if ((0, xT.h)()) return;
      const lT = await OT.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: MT.c.supports("notifications") ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOn: "cancel"
      }).getResult();
      "notificationTornDown" !== lT && (KT.e.setItem(AT, Date.now()), (0, fT.reportAnalyticsClick)({
        id: !0 === lT ? "push.allow" : "push.deny",
        value: MT.c.supports("notifications") ? "app" : "browser"
      }), !0 === lT && kT().catch((TT => {
        console.error("Failed to ask for push notifications:", TT)
      })))
    }
    async function jT() {
      return await MT.c.ready, MT.c.supports("notifications") ? lT.e.get("mobilePushNotificationsCanAsk") ? async () => {
        MT.c.request("notifications.requestPermission", {}).then((TT => {
          let {
            canAsk: kT
          } = TT;
          lT.e.set({
            mobilePushNotificationsCanAsk: kT
          })
        }), (TT => {
          console.error("The app couldn't ask for push notifications:", TT)
        }))
      }: null: await yT.d.canAsk() ? () => yT.d.requestPermission() : null
    }
  },
  36284: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => CT,
      e: () => IT,
      i: () => jT,
      l: () => AT
    });
    var lT = cT(339),
      MT = cT(649),
      KT = cT(654),
      OT = cT(47);
    const yT = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      fT = "playSessionGameNameWithVariation",
      xT = "wasMatchmakePlayer";

    function IT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OT.g;
      (0, KT.h)(TT, yT)
    }

    function AT() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OT.g).setItem(xT, !0)
    }

    function CT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OT.g;
      return (0, KT.c)(TT, yT)
    }

    function jT(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : OT.g;
      const cT = (0, KT.c)(kT, yT),
        IT = function(TT) {
          const kT = TT.getItem(fT);
          return "string" !== typeof kT ? null : kT
        }(kT),
        AT = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OT.g).getItem(xT)
        }(kT);
      let CT;
      return CT = null !== cT && null !== IT && (0, KT.e)(kT, yT) && function(TT, kT, cT) {
          const MT = (0, lT.Lb)(TT),
            KT = (0, lT.Lb)(kT),
            OT = (0, lT.Gb)(TT),
            yT = (0, lT.Gb)(kT);
          return !(MT !== KT || !cT) || MT === KT && OT === yT
        }(IT, TT, AT) ? cT : (0, MT.d)(), (0, KT.i)(kT, yT, CT), kT.setItem(fT, TT),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OT.g).removeItem(xT)
        }(kT), CT
    }
  },
  36278: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => QT,
      f: () => ST
    });
    var lT = cT(1018),
      MT = cT(623),
      KT = cT(339),
      OT = cT(1020),
      yT = cT(636),
      fT = cT(666),
      xT = cT(4508),
      IT = cT(118),
      AT = cT(159),
      CT = cT(1741),
      jT = cT(133),
      vT = cT(36284),
      tT = cT(47),
      hT = cT(651),
      NT = cT(36293);

    function QT() {
      var TT, kT;
      return [...null !== (TT = navigator.languages) && void 0 !== TT ? TT : [null !== (kT = navigator.language) && void 0 !== kT ? kT : "none"], "en-gb"]
    }

    function ST(TT, kT, cT, ST, DT) {
      const aT = (0, lT.j)(kT) ? (0, lT.n)(kT) : null,
        FT = {
          cookies: (0, CT.getAllCookiesForGameNameWithVariation)(kT),
          isMobile: (0, IT.isMobile)(),
          isUsingCustomGameTexturePack: null !== aT && DT(aT),
          generalCookies: {
            joinDiscord: !!tT.e.getItem("DiscordPressed"),
            newGo: xT.c,
            ...TT.getMetricsCookies(),
            trafficCode: ST,
            compliance: IT.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, IT.getBrowserName)(),
            version: (0, IT.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, IT.getPlatformType)(),
            deviceType: (0, jT.b)()
          },
          isLoggedIn: TT.isLoggedIn(),
          lobbyName: cT,
          languages: QT(),
          version: MT.d,
          siteUsed: AT.u,
          subsiteUsed: AT.D,
          playSessionId: (0, vT.i)(kT),
          visitSessionId: (0, hT.d)(),
          clientReason: yT.k.reason,
          budgetBasis: (0, NT.i)(),
          ...null !== fT.q && {
            diagClaim: fT.q.claimId
          }
        };
      return null !== aT && (0, KT.Ac)(aT) ? (FT.lobbyName = (0, lT.g)(aT, (0, lT.k)(kT), cT), {
        roomName: `classic_${OT.g}`,
        joinOptions: FT
      }) : {
        roomName: kT,
        joinOptions: FT
      }
    }
  },
  36400: (TT, kT, cT) => {
    function lT(TT, kT) {
      for (let cT = 0; cT < TT.length; cT++)
        if (TT[cT].identifier === kT) return TT[cT];
      return null
    }

    function MT(TT, kT) {
      return null !== lT(TT, kT)
    }
    cT.d(kT, {
      b: () => lT,
      e: () => MT
    })
  },
  36717: (TT, kT, cT) => {
    cT.d(kT, {
      A: () => ET,
      B: () => ZT,
      C: () => GT,
      D: () => uT,
      d: () => fT,
      f: () => zT,
      h: () => yT,
      l: () => eT,
      n: () => mT,
      o: () => FT,
      q: () => HT,
      t: () => oT,
      u: () => wT,
      w: () => VT
    });
    var lT = cT(47);
    const MT = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      KT = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      OT = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      yT = KT.filter((TT => "docsButton" !== TT)),
      fT = OT.filter((TT => "aiHelperButton" !== TT)),
      xT = "codeEditorTutorials",
      IT = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      AT = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let CT = null,
      jT = null;
    const vT = new Set,
      tT = new Set;
    let hT = null;
    const NT = new Set,
      QT = new Set;

    function ST() {
      QT.forEach((TT => {
        TT()
      }))
    }

    function DT() {
      if (!CT) {
        const TT = lT.e.getItem(xT);
        CT = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof TT && null !== TT ? TT : {}
        }
      }
      return CT
    }

    function aT(TT) {
      const kT = DT();
      kT[TT] || (CT = {
        ...kT,
        [TT]: !0
      }, lT.e.setItem(xT, CT))
    }

    function FT(TT) {
      return "docsOverview" === TT ? KT : "aiHelperOverview" === TT ? OT : jT ? MT[jT] : []
    }

    function rT(TT) {
      return ("worldCodeButton" !== TT || !DT().worldCodeIntroShown) && !NT.has(TT)
    }

    function PT(TT) {
      var kT;
      return (null === (kT = hT) || void 0 === kT ? void 0 : kT.name) === TT ? hT.stepsDone : vT
    }

    function wT(TT, kT) {
      if (! function(TT) {
          return hT ? hT.name === TT : "welcome" === TT
        }(TT) || !rT(kT) || PT(TT).has(kT)) return !1;
      if (hT) return !0;
      const cT = IT[kT];
      return cT ? !DT()[cT] || tT.has(kT) : !DT()[AT[TT]]
    }

    function mT(TT) {
      var kT;
      return null !== (kT = FT(TT).find((kT => wT(TT, kT)))) && void 0 !== kT ? kT : null
    }

    function bT(TT) {
      var kT;
      aT(AT[TT]), (null === (kT = hT) || void 0 === kT ? void 0 : kT.name) === TT && (hT = null)
    }

    function zT(TT) {
      const kT = (hT ? [hT.name] : ["welcome", "docsOverview"]).find((kT => mT(kT) === TT));
      if (!kT) return;
      PT(kT).add(TT);
      const cT = IT[TT];
      cT && (aT(cT), hT || tT.add(TT)), null === mT(kT) && bT(kT), ST()
    }

    function JT(TT, kT) {
      const cT = FT(TT),
        lT = PT(TT);
      for (let MT = cT.indexOf(kT) - 1; MT >= 0; MT--)
        if (lT.has(cT[MT]) && rT(cT[MT])) return cT[MT];
      return null
    }

    function oT(TT, kT) {
      return null !== JT(TT, kT)
    }

    function HT(TT, kT) {
      const cT = JT(TT, kT);
      cT && (PT(TT).delete(cT), ST())
    }

    function eT(TT) {
      bT(TT), "welcome" === TT && FT("welcome").forEach((TT => {
        const kT = IT[TT];
        kT && aT(kT)
      })), ST()
    }

    function GT(TT) {
      hT = {
        name: TT,
        stepsDone: new Set
      }, ST()
    }

    function VT() {
      (hT || 0 !== vT.size || 0 !== tT.size) && (hT = null, vT.clear(), tT.clear(), ST())
    }

    function ET(TT, kT) {
      const cT = kT ? TT : jT === TT ? null : jT;
      cT !== jT && (jT = cT, ST())
    }

    function ZT(TT, kT) {
      NT.has(TT) === kT && (kT ? NT.delete(TT) : NT.add(TT), ST())
    }

    function uT(TT) {
      return QT.add(TT), () => {
        QT.delete(TT)
      }
    }
  },
  36085: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => lT,
      g: () => MT,
      j: () => KT,
      m: () => OT
    });
    const lT = 1024,
      MT = 1024 * lT;

    function KT(TT) {
      return 2 ** Math.floor(Math.log2(Math.max(1, TT / MT)))
    }

    function OT(TT) {
      return (TT / MT).toFixed(1)
    }
  },
  36299: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => KT,
      g: () => yT,
      k: () => OT,
      n: () => fT,
      r: () => xT,
      t: () => IT
    });
    var lT = cT(218);
    const MT = 32 * cT(36085).g,
      KT = 6144,
      OT = 4608,
      yT = 512;

    function fT(TT) {
      return Math.floor(MT * TT / KT)
    }

    function xT(TT) {
      const kT = TT - Math.floor(TT / 6);
      let cT = lT.f.maxChunkHorizAddDistance,
        MT = lT.f.maxChunkVertAddDistance;
      if (IT(cT + 1, MT + 1) <= kT) return null;
      for (; IT(cT + 1, MT + 1) > kT && (cT > 0 || MT > 0);) cT > MT ? cT-- : MT--;
      return {
        horizontal: cT,
        vertical: MT
      }
    }

    function IT(TT, kT) {
      const cT = Math.max(TT, kT);
      let lT = 0;
      for (let MT = -cT; MT <= cT; MT++)
        for (let KT = -cT; KT <= cT; KT++)
          for (let OT = -cT; OT <= cT; OT++) AT(TT, kT, MT, KT, OT) && lT++;
      return lT
    }

    function AT(TT, kT, cT, lT, MT) {
      const KT = cT * cT + MT * MT;
      return TT === kT ? KT + lT * lT <= TT * TT : TT > kT ? Math.abs(lT) <= kT && KT + lT * lT <= TT * TT : KT <= TT * TT && KT + lT * lT <= kT * kT
    }
  },
  36293: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => FT,
      i: () => aT,
      k: () => DT
    });
    var lT = cT(218),
      MT = cT(118),
      KT = cT(2865),
      OT = cT(4394),
      yT = cT(645),
      fT = cT(36299);
    const xT = 1048576,
      IT = 1024 * xT,
      AT = 400 * xT,
      CT = 147456,
      jT = .5,
      vT = 1.5 * IT,
      tT = 768 * xT;

    function hT(TT) {
      return AT + TT * CT
    }

    function NT(TT, kT, cT) {
      var MT, OT;
      let {
        footprintBytes: yT,
        basis: xT,
        namesLimit: NT
      } = function(TT) {
        const {
          os: kT,
          deviceMemory: cT
        } = TT;
        if ("ios" === kT) switch ((0, KT.g)(TT)) {
          case "ipad_m":
            return {
              footprintBytes: hT(fT.d), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: tT, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: vT, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: tT, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof cT && Number.isFinite(cT) && cT > 0 ? {
          footprintBytes: cT * IT * jT,
          basis: `memory-${cT}`,
          namesLimit: !0
        } : "android" === kT ? {
          footprintBytes: tT,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: hT(fT.k),
          basis: "unreported",
          namesLimit: !1
        }
      }(TT);
      if (cT) {
        const TT = Math.min(yT, hT(fT.d));
        yT = AT + Math.max(0, TT - AT) / 2, xT += "+killed", NT = !0
      }
      null !== kT && hT(kT) < yT && (yT = hT(kT), xT += "+learned", NT = !0);
      const QT = function(TT) {
          const kT = Math.floor((TT - AT) / CT);
          return Math.min(fT.d, Math.max(fT.g, kT))
        }(yT),
        ST = (0, fT.r)(QT);
      return {
        footprintBytes: yT,
        shedFootprintBytes: NT ? Math.max(yT, hT(QT)) : null,
        chunkCap: QT,
        maxHorizDistance: null !== (MT = null === ST || void 0 === ST ? void 0 : ST.horizontal) && void 0 !== MT ? MT : lT.f.maxChunkHorizAddDistance,
        maxVertDistance: null !== (OT = null === ST || void 0 === ST ? void 0 : ST.vertical) && void 0 !== OT ? OT : lT.f.maxChunkVertAddDistance,
        basis: xT
      }
    }
    let QT = null;

    function ST() {
      return NT({
        os: (0, MT.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, KT.h)()
      }, (0, OT.g)(), (0, yT.F)("wasm").length > 0)
    }

    function DT() {
      return QT ??= ST(), QT
    }

    function aT() {
      var TT;
      return (null !== (TT = QT) && void 0 !== TT ? TT : ST()).basis
    }

    function FT(TT, kT) {
      return TT.setChunkCap(kT.chunkCap)
    }
  },
  36414: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => IT,
      h: () => CT,
      i: () => NT,
      m: () => xT
    });
    var lT = cT(31),
      MT = cT(2435),
      KT = cT(2443),
      OT = cT(2452),
      yT = cT(2526),
      fT = cT(36);

    function xT(TT, kT) {
      return (!(0, OT.e)() || 0 === TT && 0 === kT) && (0, KT.y)(MT.g.Joystick, 0, TT, kT, 0)
    }
    const IT = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function AT(TT) {
      return TT.classList.contains("TouchKeyHit") && jT() ? null : TT.firstElementChild
    }

    function CT(TT) {
      return TT.classList.contains("TouchKeyHit") && !TT.classList.contains("CanvasZone") ? {
        whole: !jT(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: vT(AT(TT))
      }
    }

    function jT() {
      return document.documentElement.classList.contains(yT.e)
    }

    function vT(TT) {
      return !(TT instanceof HTMLElement) || TT.offsetWidth <= 0 || TT.offsetHeight <= 0 ? null : {
        width: TT.offsetWidth,
        height: TT.offsetHeight
      }
    }

    function tT(TT, kT) {
      const cT = TT => Math.min(65535, Math.round(4 * TT));
      return (cT(TT) | cT(kT) << 16) >>> 0
    }

    function hT(TT) {
      return {
        x: TT.left + TT.width / 2,
        y: TT.top + TT.height / 2,
        radius: Math.min(TT.width, TT.height) / 2
      }
    }
    const NT = new class {
      constructor(TT) {
        this.write = TT, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        kT ? this.elements.set(TT, {
          element: kT,
          hidden: cT
        }) : this.elements.delete(TT), this.measureOne(TT)
      }
      measure() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = TT.left, this.canvasTop = TT.top;
        for (const kT of this.elements.keys()) this.measureOne(kT)
      }
      hitZone(TT, kT) {
        let cT = null,
          lT = 1;
        for (const MT of this.elements.keys()) {
          const KT = this.shown(MT);
          if (!KT) continue;
          const {
            rect: OT,
            element: yT
          } = KT, fT = hT(OT), xT = Math.max(0, OT.width / 2 - fT.radius), IT = Math.max(0, OT.height / 2 - fT.radius), CT = Math.max(0, Math.abs(TT - fT.x) - xT), jT = Math.max(0, Math.abs(kT - fT.y) - IT), tT = yT.firstElementChild;
          let NT = Math.hypot(CT, jT) / fT.radius;
          const QT = vT(AT(yT));
          QT && (NT = Math.min(NT, Math.max(2 * Math.abs(TT - fT.x) / QT.width, 2 * Math.abs(kT - fT.y) / QT.height))), NT < lT && (cT = {
            code: MT,
            element: yT,
            key: tT,
            ...fT
          }, lT = NT)
        }
        return cT
      }
      measureOne(TT) {
        const kT = this.shown(TT);
        if (!kT) return void this.write(MT.g.TouchZone, TT, 0, 0, 0);
        const {
          rect: cT,
          element: lT
        } = kT, KT = hT(cT);
        this.write(MT.g.TouchZone, TT, KT.x - this.canvasLeft, KT.y - this.canvasTop, tT(cT.width, cT.height));
        const OT = vT(AT(lT));
        this.write(MT.g.TouchZone, 256 | TT, 0, 0, OT ? tT(OT.width, OT.height) : 0)
      }
      shown(TT) {
        const kT = this.elements.get(TT),
          cT = lT.e.get("worldPanelHud");
        if (!kT || kT.hidden || "none" === cT) return null;
        const MT = kT.element.getBoundingClientRect();
        return MT.width <= 0 || MT.height <= 0 ? null : {
          rect: MT,
          element: kT.element
        }
      }
    }(KT.y);
    (0, fT.m)(yT.c, (() => {
      NT.measure()
    }))
  },
  36674: (TT, kT, cT) => {
    function lT(TT) {
      return "fetch" === TT || "timeout" === TT || "integrity" === TT ? "download" : "browser"
    }
    cT.d(kT, {
      e: () => MT,
      f: () => OT,
      g: () => fT,
      k: () => yT,
      n: () => lT,
      o: () => KT
    });
    const MT = "https://discord.gg/playbloxd";

    function KT(TT) {
      return "download" === TT ? {
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

    function OT(TT, kT) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: kT ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: TT.code
        },
        discordLink: kT,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function yT() {
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

    function fT(TT, kT, cT) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: cT ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: TT.reason
        },
        discordLink: null === TT.name,
        confirm: kT ? "general:reconnect" : TT.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  36725: (TT, kT, cT) => {
    function lT(TT, kT) {
      return null === TT || null === kT ? TT === kT : TT[0] === kT[0] && TT[1] === kT[1] && TT[2] === kT[2]
    }

    function MT(TT) {
      return [TT[0] + .5, TT[1] + .5, TT[2] + .5]
    }
    cT.d(kT, {
      b: () => MT,
      c: () => lT
    })
  },
  36682: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => fT,
      g: () => yT
    });
    const lT = {
        files: {
          "debugLog.ts": "export function debugLog(message: string): void {\n\tconsole.log(`[debug] ${message}`)\n}\n",
          "index.ts": 'import type { PlayerId } from "@bloxd"\nimport { debugLog } from "./debugLog"\n\nonPlayerJoin = (player: PlayerId) => {\n\tapi.log(`Player ${player} joined - Love from Debug Plugin!`)\n}\n\nexport { debugLog }\n'
        },
        dependencies: [],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  debugLog: () => debugLog\n});\nmodule.exports = __toCommonJS(index_exports);\n\n// world-code-plugin:debugLog.ts\nfunction debugLog(message) {\n  console.log(`[debug] ${message}`);\n}\n\n// world-code-plugin:index.ts\nonPlayerJoin = (player) => {\n  api.log(`Player ${player} joined - Love from Debug Plugin!`);\n};\n',
        types: "declare function debugLog(message: string): void;\n\nexport { debugLog };\n"
      },
      MT = {
        files: {
          "index.ts": 'import type { CustomTextStyling, DialogueText, PlayerId, SpeechVoice } from "@bloxd"\nimport { clearTimeout, setTimeout, TimeoutId } from "@plugins/helpers"\n\n/** Long enough to read most lines once they have appeared. */\nconst DEFAULT_DURATION_MS = 6000\n\nexport type DialogueOpts = {\n\t/** Shown above the line, such as a name. */\n\tspeakerName?: string | CustomTextStyling\n\t/** A preset such as "regular" or "gruff", or every synth parameter. Omit for a silent line. */\n\tvoice?: SpeechVoice\n\t/** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n\tdurationMs?: number\n}\n\nconst hideTimeouts: Record<PlayerId, TimeoutId> = {}\n\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item\'s icon inline\n * @param opts - The speaker\'s name, the voice that reads it out, and how long it stays up\n */\nexport function sayDialogue(playerId: PlayerId, text: DialogueText, opts: DialogueOpts = {}) {\n\tif (hideTimeouts[playerId] !== undefined) {\n\t\tclearTimeout(hideTimeouts[playerId])\n\t\t// Cleared first, so a line said again replays rather than matching the value already set\n\t\tapi.setClientOption(playerId, "dialogue", null)\n\t}\n\tapi.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice })\n\thideTimeouts[playerId] = setTimeout(\n\t\t() => {\n\t\t\tclearDialogue(playerId)\n\t\t},\n\t\topts.durationMs ?? DEFAULT_DURATION_MS,\n\t\tplayerId,\n\t)\n}\n\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\nexport function clearDialogue(playerId: PlayerId) {\n\tif (hideTimeouts[playerId] === undefined) {\n\t\treturn\n\t}\n\tclearTimeout(hideTimeouts[playerId])\n\tdelete hideTimeouts[playerId]\n\tapi.setClientOption(playerId, "dialogue", null)\n}\n\nonPlayerLeave = (playerId: PlayerId) => {\n\tdelete hideTimeouts[playerId]\n}\n'
        },
        dependencies: ["helpers"],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  clearDialogue: () => clearDialogue,\n  sayDialogue: () => sayDialogue\n});\nmodule.exports = __toCommonJS(index_exports);\nvar import_helpers = require("@plugins/helpers");\nvar DEFAULT_DURATION_MS = 6e3;\nvar hideTimeouts = {};\nfunction sayDialogue(playerId, text, opts = {}) {\n  if (hideTimeouts[playerId] !== void 0) {\n    (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n    api.setClientOption(playerId, "dialogue", null);\n  }\n  api.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice });\n  hideTimeouts[playerId] = (0, import_helpers.setTimeout)(\n    () => {\n      clearDialogue(playerId);\n    },\n    opts.durationMs ?? DEFAULT_DURATION_MS,\n    playerId\n  );\n}\nfunction clearDialogue(playerId) {\n  if (hideTimeouts[playerId] === void 0) {\n    return;\n  }\n  (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n  delete hideTimeouts[playerId];\n  api.setClientOption(playerId, "dialogue", null);\n}\nonPlayerLeave = (playerId) => {\n  delete hideTimeouts[playerId];\n};\n',
        types: "import { CustomTextStyling, SpeechVoice, PlayerId, DialogueText } from '@bloxd';\n\ntype DialogueOpts = {\n    /** Shown above the line, such as a name. */\n    speakerName?: string | CustomTextStyling;\n    /** A preset such as \"regular\" or \"gruff\", or every synth parameter. Omit for a silent line. */\n    voice?: SpeechVoice;\n    /** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n    durationMs?: number;\n};\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item's icon inline\n * @param opts - The speaker's name, the voice that reads it out, and how long it stays up\n */\ndeclare function sayDialogue(playerId: PlayerId, text: DialogueText, opts?: DialogueOpts): void;\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\ndeclare function clearDialogue(playerId: PlayerId): void;\n\nexport { clearDialogue, sayDialogue };\nexport type { DialogueOpts };\n"
      },
      KT = {
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
      OT = {
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
      yT = {
        debug: {
          name: "debug",
          specifier: "@plugins/debug",
          sourceVfsPath: "/node_modules/@plugins/debug/index.ts",
          typesVfsPath: "/node_modules/@plugins/debug/index.d.ts",
          files: lT.files,
          dependencies: lT.dependencies,
          bundledSource: lT.bundledSource,
          types: lT.types
        },
        dialogue: {
          name: "dialogue",
          specifier: "@plugins/dialogue",
          sourceVfsPath: "/node_modules/@plugins/dialogue/index.ts",
          typesVfsPath: "/node_modules/@plugins/dialogue/index.d.ts",
          files: MT.files,
          dependencies: MT.dependencies,
          bundledSource: MT.bundledSource,
          types: MT.types
        },
        helpers: {
          name: "helpers",
          specifier: "@plugins/helpers",
          sourceVfsPath: "/node_modules/@plugins/helpers/index.ts",
          typesVfsPath: "/node_modules/@plugins/helpers/index.d.ts",
          files: KT.files,
          dependencies: KT.dependencies,
          bundledSource: KT.bundledSource,
          types: KT.types
        },
        sessionBasedGame: {
          name: "sessionBasedGame",
          specifier: "@plugins/sessionBasedGame",
          sourceVfsPath: "/node_modules/@plugins/sessionBasedGame/index.ts",
          typesVfsPath: "/node_modules/@plugins/sessionBasedGame/index.d.ts",
          files: OT.files,
          dependencies: OT.dependencies,
          bundledSource: OT.bundledSource,
          types: OT.types
        }
      };

    function fT(TT) {
      const kT = [],
        cT = new Set,
        lT = TT => {
          if (cT.has(TT)) return;
          const MT = yT[TT];
          if (MT) {
            cT.add(TT);
            for (const TT of MT.dependencies) lT(TT);
            kT.push(TT)
          }
        };
      for (const MT of TT) lT(MT);
      return kT
    }
  },
  36687: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => fT,
      e: () => yT,
      f: () => OT,
      h: () => KT,
      j: () => xT,
      n: () => IT,
      q: () => vT,
      t: () => jT,
      u: () => CT
    });
    var lT = cT(1244);
    const MT = ["quickjs", "ses"];

    function KT(TT) {
      return MT.includes(TT)
    }

    function OT(TT) {
      return TT === lT.g || TT === lT.k
    }

    function yT(TT, kT) {
      return TT === lT.g && kT === lT.k || TT === lT.k && kT === lT.g
    }

    function fT(TT) {
      const kT = lT.k in TT,
        cT = lT.g in TT;
      return kT && cT ? null : kT ? lT.k : cT ? lT.g : null
    }

    function xT(TT, kT, cT) {
      const lT = `${kT}/`;
      return TT.filter((TT => TT.startsWith(lT))).map((TT => [TT, `${cT}/${TT.slice(lT.length)}`]))
    }

    function IT(TT, kT) {
      let cT = 0;
      for (const [lT, MT] of Object.entries(TT)) lT !== kT && (cT += MT.length);
      return cT
    }
    const AT = "@plugins/";

    function CT(TT) {
      return `${AT}${TT}`
    }

    function jT(TT, kT) {
      return `/node_modules/@plugins/${TT}/${kT}`
    }

    function vT(TT) {
      if (!TT.startsWith(AT)) return null;
      const kT = TT.slice(AT.length);
      return function(TT) {
        return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(TT)
      }(kT) ? kT : null
    }
  },
  36698: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => yT,
      i: () => MT,
      l: () => OT,
      o: () => fT,
      p: () => KT
    });
    var lT = cT(36693);
    const MT = 5,
      KT = "[SCHEMATIC]",
      OT = 1024e4;

    function yT(TT) {
      return TT.endsWith(".bloxdschem") && (0, lT.s)(TT.slice(0, -11) + ".ts") && TT.length <= 64
    }

    function fT(TT) {
      return Object.fromEntries(Object.keys(TT).map((TT => [TT, KT])))
    }
  },
  36693: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => MT,
      c: () => KT,
      g: () => CT,
      h: () => yT,
      l: () => fT,
      o: () => xT,
      s: () => AT,
      t: () => IT,
      w: () => OT
    });
    var lT = cT(1244);
    let MT = function(TT) {
        return TT[TT.Join = 0] = "Join", TT[TT.Leave = 1] = "Leave", TT[TT.Push = 2] = "Push", TT[TT.Cursor = 3] = "Cursor", TT[TT.Submit = 4] = "Submit", TT[TT.ReloadAsVariation = 5] = "ReloadAsVariation", TT[TT.CreateFile = 6] = "CreateFile", TT[TT.RenameFile = 7] = "RenameFile", TT[TT.DeleteFile = 8] = "DeleteFile", TT[TT.SetEngine = 9] = "SetEngine", TT[TT.RenameFolder = 10] = "RenameFolder", TT
      }({}),
      KT = function(TT) {
        return TT[TT.Joined = 0] = "Joined", TT[TT.Updates = 1] = "Updates", TT[TT.Presence = 2] = "Presence", TT[TT.RemoteCursor = 3] = "RemoteCursor", TT[TT.ForceClose = 4] = "ForceClose", TT[TT.LobbyFilesChanged = 5] = "LobbyFilesChanged", TT[TT.EngineSettings = 6] = "EngineSettings", TT
      }({});

    function OT(TT) {
      return "lobby" === TT.kind ? `lobby:${TT.path}` : `codeBlock:${TT.pos[0]},${TT.pos[1]},${TT.pos[2]}`
    }

    function yT(TT) {
      if ("lobby" === TT) return {
        kind: "lobby",
        path: lT.g
      };
      if (TT.startsWith("lobby:")) {
        const kT = TT.slice(6);
        return AT(kT) ? {
          kind: "lobby",
          path: kT
        } : null
      }
      const kT = TT.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return kT ? {
        kind: "codeBlock",
        pos: [parseInt(kT[1]), parseInt(kT[2]), parseInt(kT[3])]
      } : null
    }

    function fT(TT) {
      return TT.endsWith(".d.ts")
    }

    function xT(TT) {
      return TT.endsWith(".ts") && !fT(TT)
    }
    const IT = 64;

    function AT(TT) {
      if (!TT || TT !== TT.trim()) return !1;
      if (TT.length > IT) return !1;
      if (TT.startsWith("/") || TT.includes("\\") || TT.includes("\0")) return !1;
      if (!fT(TT) && !xT(TT) && ! function(TT) {
          return TT.endsWith(".js") && !TT.endsWith(".min.js") && !TT.endsWith(".bundle.js")
        }(TT)) return !1;
      const kT = TT.split("/");
      for (const cT of kT)
        if ("" === cT || "." === cT || ".." === cT) return !1;
      return !0
    }
    const CT = 14e3
  },
  4813: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => MT,
      f: () => lT,
      h: () => KT,
      j: () => fT,
      m: () => OT
    });
    const lT = ["sine", "triangle", "square", "sawtooth"],
      MT = 55,
      KT = {
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

    function OT(TT) {
      return "string" !== typeof TT ? TT : Object.hasOwn(KT, TT) ? KT[TT] : null
    }

    function yT(TT, kT, cT) {
      return Math.min(cT, Math.max(kT, TT))
    }

    function fT(TT) {
      const kT = yT(TT.durationMs, 10, 500),
        cT = yT(TT.attackMs, 0, kT),
        {
          intonation: MT
        } = TT;
      return {
        waveform: lT.includes(TT.waveform) ? TT.waveform : "sine",
        pitchHz: yT(TT.pitchHz, 20, 4e3),
        glideSemitones: yT(TT.glideSemitones, -24, 24),
        durationMs: kT,
        attackMs: cT,
        releaseMs: yT(TT.releaseMs, 0, kT - cT),
        lowpassHz: null === TT.lowpassHz ? null : yT(TT.lowpassHz, 20, 2e4),
        volume: yT(TT.volume, 0, 2),
        intonation: {
          variationSemitones: yT(MT.variationSemitones, 0, 6),
          declineSemitones: yT(MT.declineSemitones, 0, 12),
          questionRiseSemitones: yT(MT.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: yT(MT.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: yT(TT.syllableMs, 25, 200)
      }
    }
  },
  10147: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAHklEQVR4nGNY3x/6nxjMQH2Fcyq8/hODaWA11d0IAPvLyX36T0UzAAAAAElFTkSuQmCC"
  },
  18282: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAC4CAYAAADqkK6nAAAAAXNSR0IArs4c6QAAAuxJREFUeJzt1jFOFHEchuEfxpqeaGusuYDhCpbewMbEwmNYmNBwA0quYLgAtaGF2HuBtVpEWHBNXnBXnqeanUzxT+bNtzMDsOl21nhm8eCnYBvd2c6zxzwFT8N9S7WYmfn0am9mZl6+2H2M87DhLi5/zMzM5/Pvy1u3GrJU5FYt1WJm5svB60c+Ctvo49dvy8urliwVuetL5RuKv7bqG8tSkXt+88afFurN+3czM7P/9sPDnIiNcHZy+Nvv06Pjlc9d9fJrqXxT0bu1VHexUE/Tzfd912JdZ6nIrb1UFop1WSpyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIit3ZUZyeHc3Zy+JBn4T9hqcg9X/fB06Pj337vv/2QH4bNs/x3uvn+72OpyO1cu17MzHx6tTczMy9f7P6L87BlLi5/zMzM5/Pvy1s7lorczop7i5mZLwevH/kobKOPX78tL69aslTkVi3Vkm8sbln1DXXzGUtF7r6lWlo8+CnYRne2Y6mAzfcTBsFAqM32XQcAAAAASUVORK5CYII="
  },
  20185: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJUlEQVR4nGMwsIpkIAYz0FThfyjGymcgVSFMEJtCsBjJCgcgeABOGmAZtndiFgAAAABJRU5ErkJggg=="
  },
  20193: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJ0lEQVR4nGMwsIpkIAYzQBn/kTBWMQYsgtgwA+0UMuBTNIgU4g1wAE6xgffL0CuLAAAAAElFTkSuQmCC"
  },
  20199: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJElEQVR4nGMwsIpkIAYzkKrwPxLGKsZAc4UMaJh8hdQPHoIKAboeZhN3YNlSAAAAAElFTkSuQmCC"
  },
  20203: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMUlEQVR4nGMwsIpkIAYzoAn8R8MM2BSiK/qPrJiQov8wxWQrxMkm2USiPUNS8OANcADc3H37DfNNQQAAAABJRU5ErkJggg=="
  },
  20205: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAKElEQVR4nGMwsIpkIAYzIHH+48AMyApxKfoPU0yRQgZsYkNJIcEABwCQU3/5LLo7QwAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);