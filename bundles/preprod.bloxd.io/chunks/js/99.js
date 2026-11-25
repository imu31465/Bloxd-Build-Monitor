export const id = 99;
export const ids = [99];
export const modules = {
  37482: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => NM,
      c: () => fM
    });
    var OM = iM(44),
      SM = iM(2039),
      jM = iM(37484),
      aM = iM.n(jM),
      PM = iM(4923),
      nM = iM(2006),
      QM = iM(1516),
      zM = iM(83),
      LM = iM(103),
      mM = iM(332),
      HM = iM(1116),
      hM = iM.n(HM),
      JM = iM(19),
      dM = iM(1398),
      yM = iM(1717),
      lM = iM(1830),
      EM = iM(1765),
      UM = iM(2104),
      GM = iM(1474),
      CM = iM(2198),
      eM = iM(1464),
      bM = iM(3009),
      wM = iM(37486),
      tM = iM(37501),
      gM = iM(1541),
      uM = iM(2645),
      RM = iM(1188),
      pM = iM(37515);
    var WM = iM(34971),
      sM = iM(1295);
    var DM = iM(1303);
    const kM = iM(37517),
      ZM = ["enter", "t", "/"];
    let oM = !1;

    function fM() {
      return oM || (0, lM.isTextEntry)(document.activeElement)
    }

    function YM() {
      var MM, rM;
      (0, CM.d)();
      const iM = null !== (MM = null === (rM = (0, GM.d)()) || void 0 === rM ? void 0 : rM.getBoundButton("keyboardChannel")) && void 0 !== MM ? MM : null;
      return iM ? (0, DM.jsx)(UM.b, {
        className: "ChatInputChannelGlyph",
        glyph: iM
      }) : null
    }

    function NM() {
      const {
        t: MM
      } = (0, RM.A)(), {
        isTouchScreen: rM
      } = (0, JM.m)(["isTouchScreen"]), iM = (0, eM.y)(), [jM, HM] = (0, OM.useState)(!1), UM = (0, OM.useRef)(jM), GM = (0, OM.useRef)(null), {
        messages: CM,
        reportedPlayers: fM,
        channel: NM
      } = (0, bM.m)(), xM = (0, OM.useRef)(0), vM = (0, OM.useRef)(""), FM = (0, OM.useRef)(null);
      var BM;
      BM = FM, (0, OM.useEffect)((() => {
        if (!(0, zM.isIOS)()) return;
        const MM = BM.current;
        let rM = null;
        const iM = iM => {
            const OM = iM.changedTouches[0];
            rM = "none" === getComputedStyle(MM).pointerEvents ? {
              id: OM.identifier,
              y: OM.clientY
            } : null
          },
          OM = iM => {
            const OM = rM,
              SM = OM && (0, pM.e)(iM.changedTouches, OM.id);
            SM && (iM.preventDefault(), MM.scrollBy({
              top: OM.y - SM.clientY,
              behavior: "instant"
            }), OM.y = SM.clientY)
          };
        return MM.addEventListener("touchstart", iM, {
          passive: !0
        }), MM.addEventListener("touchmove", OM, {
          passive: !1
        }), () => {
          MM.removeEventListener("touchstart", iM), MM.removeEventListener("touchmove", OM)
        }
      }), [BM]);
      const [XM, IM] = (0, OM.useState)(!1), [KM, qM] = (0, OM.useState)(!1), TM = (0, OM.useRef)(XM), VM = (0, OM.useRef)(null), cM = (0, OM.useRef)(!1), Mr = (0, OM.useRef)(null), rr = (0, OM.useRef)(null), ir = (0, OM.useRef)(null), Or = (0, OM.useRef)(Pr);
      Or.current = Pr;
      const Sr = (0, uM.h)();

      function jr() {
        UM.current = !1, HM(!1), rr.current.blur()
      }

      function ar(MM) {
        TM.current = MM, IM(MM)
      }

      function Pr() {
        const MM = rr.current.value;
        rr.current.value = "", nr(MM)
      }

      function nr(MM) {
        (0, bM.i)(MM), xM.current = 0, ar(!1)
      }

      function Qr(MM, rM) {
        0 === xM.current && (vM.current = rr.current.value);
        const iM = (0, bM.f)(xM.current + MM, rM);
        xM.current = iM.stepsBack, rr.current.value = 0 === iM.stepsBack ? vM.current : iM.text, setTimeout((() => {
          rr.current && rr.current.setSelectionRange(-1, -1)
        }), 0)
      }

      function zr() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        FM.current && (!MM && TM.current || (FM.current.scrollTop = 1e5))
      }
      return (0, PM.c)(!0, jM, "ChatComponent"), (0, OM.useEffect)((() => (oM = jM, () => {
          oM = !1
        })), [jM]), (0, QM.d)("appManagerUpdated|openEverythingMenuName", (() => {
          (0, yM.v)() && HM(!1)
        })), (0, OM.useEffect)((() => {
          rr.current.addEventListener("blur", (MM => {
            if (null === rr.current) return;
            Array.from(document.querySelectorAll(":hover")).some((MM => MM.classList.contains("ChatInputChannel") || MM.classList.contains("ChatMsgSelectWrapper"))) || ((0, zM.isMobile)() && UM.current && "" !== rr.current.value && Or.current(), HM(!1))
          }));
          const MM = MM => {
            GM.current.contains(MM.target) || (0, EM.n)(MM.target) || HM(!1)
          };
          document.addEventListener("touchstart", MM, {
            capture: !0
          });
          const rM = MM => {
            (0, tM.i)(MM.target) && (UM.current = !1, HM(!1))
          };
          document.addEventListener("mousedown", rM, {
            capture: !0
          });
          const iM = () => {
              clearTimeout(VM.current), ar(!0)
            },
            OM = () => {
              clearTimeout(VM.current), VM.current = setTimeout((() => {
                ar(!1), zr()
              }), 4e3)
            },
            jM = () => {
              document.pointerLockElement ? (HM(!1), qM(!0), cM.current = !1, ar(!1), zr()) : qM(!1)
            };
          FM.current.addEventListener("pointermove", (MM => {
            "touch" === MM.pointerType || cM.current || document.pointerLockElement || (cM.current = !0, clearTimeout(VM.current))
          })), FM.current.addEventListener("pointerleave", (MM => {
            "touch" !== MM.pointerType && (cM.current = !1, TM.current && OM())
          })), FM.current.addEventListener("pointerdown", (MM => {
            "touch" === MM.pointerType || document.pointerLockElement || (cM.current = !0, iM())
          })), FM.current.addEventListener("wheel", (MM => {
            document.pointerLockElement || MM.deltaY >= 0 && Math.abs(FM.current.scrollTop) < 1 || (iM(), cM.current || (VM.current = setTimeout((() => {
              ar(!1)
            }), 4e3)))
          }), {
            passive: !0
          }), FM.current.addEventListener("touchstart", iM), FM.current.addEventListener("touchend", OM), FM.current.addEventListener("touchcancel", OM), document.addEventListener("pointerlockchange", jM);
          const PM = MM => {
            if (Sr.shown && (UM.current || ! function(MM) {
                if ((0, lM.isTypingInInput)()) return !0;
                const rM = document.activeElement;
                return (rM instanceof HTMLButtonElement || "button" === (null === rM || void 0 === rM ? void 0 : rM.getAttribute("role"))) && ["Enter", " "].includes(MM.key)
              }(MM)) && "codeEditor" !== JM.d.get("openInGameMenuName") && "lobbyCodeEditor" !== JM.d.get("openInGameMenuName") && !SM.gameBridge.latest("connectedGame").replay)
              if (UM.current || !(0, yM.v)()) {
                if (UM.current) {
                  if ("ArrowUp" === MM.code || "ArrowDown" === MM.code) return Qr("ArrowUp" === MM.code ? 1 : -1, !1), void MM.stopPropagation();
                  if ("Tab" === MM.code) return bM.b.selectNextChannel(), MM.stopPropagation(), void MM.preventDefault();
                  if (MM.ctrlKey && AM.includes(kM[MM.keyCode])) return MM.preventDefault(), void MM.stopPropagation()
                }
                if ([...ZM, "esc"].includes(aM()(MM)))
                  if ("esc" !== aM()(MM)) {
                    if (!UM.current || "/" !== aM()(MM)) {
                      if ("t" === aM()(MM)) {
                        if (UM.current) return void MM.stopPropagation();
                        MM.preventDefault()
                      }
                      UM.current && "" !== rr.current.value && Or.current(), MM.repeat || (UM.current || "/" === aM()(MM) && (rr.current.value = "/", MM.preventDefault()), HM(!UM.current))
                    }
                  } else UM.current && (HM(!1), MM.stopPropagation());
                else UM.current && MM.stopPropagation()
              } else ZM.includes(aM()(MM)) && (MM.preventDefault(), MM.stopPropagation(), (0, yM.e)(MM))
          };
          document.addEventListener("keydown", PM, {
            capture: !0
          });
          const nM = FM.current;
          let QM = !1;
          const LM = new ResizeObserver((() => {
              QM && (QM = !1, zr())
            })),
            mM = () => {
              QM = !0, LM.unobserve(nM), LM.observe(nM)
            };
          Mr.current = mM;
          const hM = new MutationObserver(mM);
          return hM.observe(nM, {
            childList: !0,
            subtree: !0
          }), () => {
            document.removeEventListener("keydown", PM, {
              capture: !0
            }), document.removeEventListener("touchstart", MM, {
              capture: !0
            }), document.removeEventListener("mousedown", rM, {
              capture: !0
            }), document.removeEventListener("pointerlockchange", jM), Mr.current = null, hM.disconnect(), LM.disconnect(), clearTimeout(VM.current)
          }
        }), []), (0, EM.r)(rr, {
          open: () => {
            HM(!0)
          },
          close: () => {
            jr()
          },
          submit: () => {
            "" !== rr.current.value && Pr(), jr()
          },
          stepHistory: () => {
            Qr(1, !0)
          },
          sendLine: MM => {
            nr(MM), jr()
          },
          selectNextChannel: () => {
            bM.b.selectNextChannel()
          }
        }), (0, OM.useEffect)((() => {
          var MM;
          (UM.current = jM, rr.current) && (jM ? (xM.current = 0, rr.current.focus()) : (rr.current.blur(), null === (MM = Mr.current) || void 0 === MM || MM.call(Mr)))
        }), [jM]),
        function(MM, rM) {
          (0, OM.useLayoutEffect)((() => {
            if (!rM) return;
            WM.c.hold();
            const iM = MM.current.closest(".InGameHeaderAndChat"),
              OM = (0, sM.d)((MM => {
                let {
                  top: rM,
                  height: OM
                } = MM;
                iM.style.setProperty("--keyboard-top", `${rM+OM}px`)
              }));
            return () => {
              OM(), iM.style.removeProperty("--keyboard-top"), WM.c.release()
            }
          }), [MM, rM])
        }(GM, jM && rM), (0, DM.jsx)(DM.Fragment, {
          children: (0, DM.jsxs)("div", {
            ref: GM,
            className: hM()("Chat", {
              Chatting: jM
            }),
            "data-camera-keeper": jM ? "" : void 0,
            children: [(0, DM.jsx)("div", {
              ref: FM,
              className: hM()("ChatMessages", {
                HideScrollbar: !XM && !jM,
                NoScrolling: !(0, zM.isMobile)() && KM
              }),
              children: (0, DM.jsx)(wM.d, {
                messages: CM,
                reportedPlayers: fM
              })
            }), rM && !jM && (0, DM.jsx)("button", {
              type: "button",
              className: "ChatIconWrapper SmallTextLight",
              "aria-label": MM("general:chat"),
              ...(0, gM.g)((() => {
                HM(!0), ir.current.style.display = "flex", (0, zM.isIOS)() && rr.current.focus()
              }), "pointerup"),
              children: (0, DM.jsx)(dM.b, {
                name: "comment-dots",
                className: "ChatIcon"
              })
            }), (0, DM.jsxs)("div", {
              ref: ir,
              className: "ChatInputWrapper",
              style: {
                display: "" + (jM ? "flex" : "none")
              },
              children: [NM && (0, DM.jsx)("button", {
                type: "button",
                className: "ChatInputChannel",
                style: {
                  backgroundColor: NM.elementBgColor
                },
                onClick: MM => {
                  bM.b.selectNextChannel(), rr.current.focus()
                },
                children: (0, DM.jsx)("span", {
                  className: "SmallTextBold",
                  children: (0, DM.jsx)(nM.b, {
                    text: NM.elementContent
                  })
                })
              }), NM && iM && (0, DM.jsx)(YM, {}), (0, DM.jsx)("input", {
                className: "ChatInput",
                maxLength: mM.ad,
                ref: rr,
                spellCheck: "false",
                autoComplete: "off",
                autoCorrect: "off",
                "aria-label": MM("general:chat"),
                placeholder: NM ? `${NM.channelName} Chat${"touchOnly"===(0,LM.c)()||iM?"":" [Tab]"}` : ""
              })]
            })]
          })
        })
    }
    const AM = ["W", "S", "D", "N", "T", "<tab>", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "<page-up>", "<page-down>", "B", "O", "H", "J", "F", "G", "J", "M", "<enter>", "L", "K", "E", "P", "R", "O", "U"]
  },
  37486: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => wM
    });
    var OM = iM(44),
      SM = iM(1116),
      jM = iM.n(SM),
      aM = iM(3016),
      PM = iM(22),
      nM = iM(2494),
      QM = iM(3977),
      zM = iM(2137),
      LM = iM(19),
      mM = iM(2006),
      HM = iM(37492),
      hM = iM(2280),
      JM = iM(3025),
      dM = iM(2856),
      yM = iM(2826),
      lM = iM(2823),
      EM = iM(3989),
      UM = iM(37495),
      GM = iM(3511),
      CM = iM(2084),
      eM = iM(1303);

    function bM(MM) {
      for (let iM = MM.length - 1; iM >= 0; iM--) {
        const OM = "string" === typeof(rM = MM[iM]) ? rM : "str" in rM && "string" === typeof rM.str ? rM.str : "";
        if ("" !== OM.trim()) return OM
      }
      var rM;
      return ""
    }

    function wM(MM) {
      let {
        messages: rM,
        reportedPlayers: iM
      } = MM;
      return (0, eM.jsx)(eM.Fragment, {
        children: rM.map((MM => (0, eM.jsx)(tM, {
          message: MM,
          reportedPlayers: iM
        }, MM.clientChatMsgId)))
      })
    }
    const tM = (0, OM.memo)((function(MM) {
      var rM;
      let {
        message: iM,
        reportedPlayers: SM
      } = MM;
      const wM = (0, OM.useRef)(null),
        [tM] = (0, OM.useState)(GM.f),
        {
          author: gM
        } = iM,
        uM = null === gM || void 0 === gM ? void 0 : gM.id,
        RM = null !== (rM = null === gM || void 0 === gM ? void 0 : gM.name) && void 0 !== rM ? rM : void 0,
        pM = (0, zM.c)(RM),
        WM = null !== gM && void 0 !== gM && gM.profileEffect ? hM.f[gM.profileEffect] : void 0,
        sM = null !== gM && !gM.local,
        {
          worldCodeLineId: DM
        } = iM,
        kM = (0, CM.f)("hiddenPlayerNames", (MM => (0, JM.i)(sM, RM, MM))),
        ZM = null === iM.serverChatMsgId || null === gM ? null : {
          text: bM(iM.content),
          hiddenFromReplay: iM.hiddenFromReplay,
          serverChatMsgId: iM.serverChatMsgId,
          authorId: gM.id
        },
        oM = (0, QM.g)(sM && null !== RM && void 0 !== RM ? RM : null),
        fM = (0, lM.k)(wM);
      (0, OM.useEffect)((() => () => {
        lM.e.closeIfOwner(wM)
      }), []);
      const YM = null !== gM && null !== DM,
        NM = [];
      sM && null !== ZM && !SM.includes(uM) && NM.push({
        icon: "flag",
        text: YM ? "general:reportPlayer" : "general:report",
        onClick: () => {
          PM.i.Tz("OpenReportMenu", {
            playerEId: uM,
            playerName: RM,
            Kz: ZM,
            serverChatMsgId: ZM.serverChatMsgId
          })
        }
      }), null !== DM && NM.push({
        icon: "flag",
        text: YM ? "general:reportGameMessage" : "general:report",
        onClick: () => {
          PM.i.Tz("OpenReportMenu", {
            playerEId: null,
            playerName: void 0,
            Kz: {
              text: (0, aM.d)(iM.content),
              hiddenFromReplay: iM.hiddenFromReplay
            },
            serverChatMsgId: DM
          })
        }
      });
      const AM = sM && void 0 !== RM ? (0, EM.c)(oM, RM, ZM) : [];
      return (0, eM.jsxs)("div", {
        ref: wM,
        className: jM()("MessageWrapper", {
          ChatMsgSelectWrapper: uM,
          Still: tM
        }),
        "data-replay-hidden": iM.hiddenFromReplay ? "" : void 0,
        onContextMenu: kM ? MM => {
          (0, dM.c)(wM, MM, {
            ...(0, JM.g)(uM, RM),
            showLocation: !1,
            status: null,
            extraActions: NM,
            moderationActions: (0, UM.b)(RM),
            friendRequestSource: "chat"
          }, LM.d.get("isTouchScreen"))
        } : void 0,
        onPointerDown: kM ? MM => {
          (0, yM.b)(MM, (() => (0, JM.g)(uM, RM).playerSocialPreview))
        } : void 0,
        children: [WM && (0, eM.jsx)(WM, {
          className: "ChatMessageBackground",
          simple: !0
        }), (sM || null !== DM) && !fM && (0, eM.jsx)(HM.d, {
          className: "ChatFloatingActions",
          triggerElementRef: wM,
          options: [...NM.map((MM => {
            let {
              icon: rM,
              text: iM,
              onClick: OM
            } = MM;
            return {
              icon: rM,
              text: iM,
              onPointerDown: OM
            }
          })), ...AM, {
            icon: "user-plus",
            text: "socialBar:sendFriendRequest",
            onPointerDown: MM => {
              (0, nM.j)(RM, "chat")
            },
            analyticsClick: {
              id: "social.add_friend",
              value: "chat"
            },
            show: kM && "blocked" !== oM
          }]
        }), (0, eM.jsx)(mM.b, {
          text: iM.content,
          friendBadgeFor: pM ? RM : void 0
        }, iM.clientChatMsgId)]
      }, iM.clientChatMsgId)
    }))
  },
  37830: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => LM,
      i: () => zM
    });
    var OM = iM(44),
      SM = iM(1116),
      jM = iM.n(SM),
      aM = iM(1520),
      PM = iM(1303);
    const nM = 200,
      QM = 160;

    function zM() {
      return window.matchMedia("(max-width: 900px)").matches
    }

    function LM(MM) {
      let {
        side: rM,
        defaultSize: iM,
        covers: SM,
        onClose: zM,
        children: LM
      } = MM;
      const mM = (0, OM.useRef)(null),
        [HM, hM] = (0, OM.useState)(null),
        [JM, dM] = (0, OM.useState)(iM);
      JM !== iM && (dM(iM), hM(null));
      const yM = (0, OM.useRef)(null),
        lM = "top" === rM,
        EM = MM => lM ? MM.clientY : MM.clientX,
        UM = () => {
          yM.current = null
        };
      return (0, PM.jsxs)("div", {
        ref: mM,
        className: jM()("ResizableSidePanel", rM && `ResizableSidePanel-${rM}`, {
          Covers: "always" === SM,
          CoversWhenNarrow: "narrow" === SM,
          Dragged: null !== HM
        }),
        style: {
          [lM ? "height" : "width"]: null !== HM && void 0 !== HM ? HM : iM
        },
        children: [LM, rM && (0, PM.jsx)("div", {
          className: "ResizableSidePanelHandle",
          role: "separator",
          "aria-orientation": lM ? "horizontal" : "vertical",
          onPointerDown: MM => {
            if (0 !== MM.button) return;
            MM.preventDefault();
            const rM = mM.current,
              iM = Array.from(rM.parentElement.children).reduce(((MM, iM) => iM !== rM && "0" !== getComputedStyle(iM).flexGrow ? MM + (MM => lM ? MM.clientHeight : MM.clientWidth)(iM) : MM), 0),
              OM = lM ? rM.offsetHeight : rM.offsetWidth,
              SM = Math.min(nM, OM),
              jM = Math.max(SM, OM + Math.max(0, iM - QM));
            yM.current = {
              start: EM(MM),
              startSize: OM,
              minSize: SM,
              maxSize: jM
            }, MM.currentTarget.setPointerCapture(MM.pointerId)
          },
          onPointerMove: MM => {
            const iM = yM.current;
            if (!iM) return;
            const OM = "right" === rM ? iM.start - MM.clientX : EM(MM) - iM.start;
            hM(Math.min(iM.maxSize, Math.max(iM.minSize, iM.startSize + OM)))
          },
          onPointerUp: UM,
          onPointerCancel: UM,
          onLostPointerCapture: UM
        }), zM && (0, PM.jsx)(aM.l, {
          className: "ResizableSidePanelClose",
          onClick: zM
        })]
      })
    }
  },
  37846: (MM, rM, iM) => {
    iM.d(rM, {
      C: () => bM,
      E: () => SM,
      G: () => eM,
      b: () => EM,
      f: () => dM,
      i: () => hM,
      l: () => HM,
      p: () => lM,
      q: () => wM,
      u: () => UM,
      y: () => CM,
      z: () => GM
    });
    var OM = iM(44);
    const SM = 5e3,
      jM = 500,
      aM = 3e3;
    let PM = null,
      nM = null,
      QM = null;
    const zM = new Set;

    function LM(MM) {
      PM = MM;
      for (const rM of zM) rM()
    }

    function mM() {
      if (!PM || void 0 !== PM.endedAt) return;
      null !== nM && (clearTimeout(nM), nM = null), LM({
        ...PM,
        endedAt: Date.now()
      });
      const MM = QM;
      QM = null, null === MM || void 0 === MM || MM()
    }

    function HM(MM, rM) {
      let {
        submit: iM,
        reopen: OM
      } = rM;
      null !== nM && clearTimeout(nM), QM = OM, LM({
        ...MM,
        startedAt: Date.now(),
        errors: []
      }), nM = setTimeout(mM, aM), iM()
    }

    function hM() {
      PM && void 0 === PM.endedAt && void 0 === PM.ranAt && (null !== nM && clearTimeout(nM), LM({
        ...PM,
        ranAt: Date.now()
      }), nM = setTimeout(mM, SM))
    }
    const JM = 3;

    function dM(MM) {
      if (!PM || void 0 === PM.ranAt || void 0 !== PM.endedAt || PM.errors.includes(MM) || PM.errors.length >= JM) return;
      const rM = 0 === PM.errors.length;
      LM({
        ...PM,
        errors: [...PM.errors, MM]
      }), rM && (null !== nM && clearTimeout(nM), nM = setTimeout(mM, jM))
    }

    function yM(MM) {
      var rM;
      return (null === (rM = PM) || void 0 === rM ? void 0 : rM.chatKey) === MM ? PM : null
    }

    function lM(MM) {
      const rM = yM(MM);
      return rM && void 0 !== rM.endedAt ? (LM(null), rM) : null
    }

    function EM(MM) {
      var rM;
      (null === (rM = PM) || void 0 === rM ? void 0 : rM.chatKey) === MM && (null !== nM && (clearTimeout(nM), nM = null), QM = null, LM(null))
    }
    const UM = "These changes from your last answer didn't go in. Make them again.";

    function GM(MM) {
      const rM = [...new Set(MM)].slice(0, JM);
      return `Fix this in your change: when it ran, the world showed ${1===rM.length?"this error":"these errors"}: ${rM.join(" ")}`
    }

    function CM(MM) {
      return `Your change didn't go in, because the code wouldn't run at all: ${MM.join(" ")} Send the whole change again with that fixed.`
    }

    function eM(MM) {
      return `Fix this in your change: ${MM.join(" ")}`
    }

    function bM(MM) {
      var rM;
      if (void 0 === MM.ranAt) return {
        title: "Couldn't test it",
        text: "Your change didn't go into your world, so it couldn't be tested. Press Submit to try it."
      };
      const iM = Math.max(1, Math.round(((null !== (rM = MM.endedAt) && void 0 !== rM ? rM : MM.ranAt) - MM.ranAt) / 1e3)),
        OM = `Your change ran in your world for ${iM} ${1===iM?"second":"seconds"}`;
      return 0 === MM.errors.length ? {
        title: "Tested: no errors",
        text: `${OM} without an error.`
      } : {
        title: 1 === MM.errors.length ? "Tested: it showed an error" : `Tested: it showed ${MM.errors.length} errors`,
        text: `${OM} and showed: ${MM.errors.join(" ")}`
      }
    }

    function wM(MM) {
      const [rM, iM] = (0, OM.useState)((() => yM(MM)));
      return (0, OM.useEffect)((() => {
        const rM = () => {
          iM(yM(MM))
        };
        return rM(), zM.add(rM), () => {
          zM.delete(rM)
        }
      }), [MM]), rM
    }
  },
  37849: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => SM,
      h: () => OM
    });
    const OM = {
      key: "worldCode",
      label: "World Code",
      codeBlock: !1
    };

    function SM(MM, rM, iM) {
      return {
        key: MM,
        label: `Code block at ${rM.join(", ")}`,
        codeBlock: !0,
        pos: rM,
        canChangePos: iM
      }
    }
  },
  37839: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => OM,
      f: () => jM,
      g: () => aM,
      k: () => SM
    });
    const OM = "code block",
      SM = "World Code/";

    function jM(MM) {
      return MM.trim().toLowerCase().startsWith(SM.toLowerCase())
    }

    function aM(MM) {
      return MM.trim().slice(SM.length).replace(/^\.?\//, "")
    }
  },
  37816: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => nM,
      f: () => QM,
      h: () => PM,
      j: () => zM
    });
    var OM = iM(44),
      SM = iM(30),
      jM = iM(83);
    class aM {
      constructor(MM, rM) {
        let iM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.storageKey = MM, this.defaultValue = rM, this.canChange = iM, this.value = null, this.listeners = new Set, this.get = () => {
          if (!this.canChange) return this.defaultValue;
          if (null === this.value) {
            const MM = SM.g.getItem(this.storageKey);
            this.value = "boolean" === typeof MM ? MM : this.defaultValue
          }
          return this.value
        }, this.set = MM => {
          this.value = MM, SM.g.setItem(this.storageKey, MM);
          for (const rM of this.listeners) rM(MM)
        }
      }
      subscribe(MM) {
        return this.listeners.add(MM), () => {
          this.listeners.delete(MM)
        }
      }
    }
    const PM = new aM("codeEditorLightMode", !1),
      nM = new aM("codeEditorAiHints", !0),
      QM = new aM("codeEditorAiKeySafetyCheck", !0, jM.featureFlags.isOwnTopLevelSite);

    function zM(MM) {
      const [rM, iM] = (0, OM.useState)(MM.get);
      return (0, OM.useEffect)((() => {
        const rM = MM.subscribe(iM);
        return iM(MM.get()), rM
      }), [MM]), [rM, MM.set]
    }
  },
  37810: (MM, rM, iM) => {
    iM.d(rM, {
      A: () => dM,
      D: () => UM,
      F: () => uM,
      H: () => tM,
      J: () => mM,
      N: () => sM,
      Q: () => bM,
      S: () => wM,
      U: () => WM,
      d: () => hM,
      g: () => nM,
      j: () => JM,
      n: () => gM,
      q: () => PM,
      t: () => zM,
      w: () => HM
    });
    var OM = iM(2638),
      SM = iM(37807);
    const jM = "bloxd-world-code-directory-sync",
      aM = "handles",
      PM = "[INVALID SCHEMATIC PLACEHOLDER]";

    function nM(MM, rM) {
      return `${MM}::${rM}`
    }
    const QM = new Set(["node_modules", ".git"]);

    function zM() {
      return "undefined" !== typeof window && "function" === typeof window.showDirectoryPicker
    }

    function LM() {
      return new Promise(((MM, rM) => {
        const iM = indexedDB.open(jM, 1);
        iM.onupgradeneeded = () => {
          const MM = iM.result;
          MM.objectStoreNames.contains(aM) || MM.createObjectStore(aM)
        }, iM.onsuccess = () => {
          MM(iM.result)
        }, iM.onerror = () => {
          var MM;
          rM(null !== (MM = iM.error) && void 0 !== MM ? MM : new Error("Failed to open directory sync IndexedDB"))
        }
      }))
    }
    async function mM(MM, rM) {
      const iM = await LM();
      try {
        await new Promise(((OM, SM) => {
          const jM = iM.transaction(aM, "readwrite");
          jM.objectStore(aM).put(rM, MM), jM.oncomplete = () => {
            OM()
          }, jM.onerror = () => {
            var MM;
            SM(null !== (MM = jM.error) && void 0 !== MM ? MM : new Error("Failed to store directory handle"))
          }
        }))
      } finally {
        iM.close()
      }
    }
    async function HM(MM) {
      const rM = await LM();
      try {
        return await new Promise(((iM, OM) => {
          const SM = rM.transaction(aM, "readonly").objectStore(aM).get(MM);
          SM.onsuccess = () => {
            var MM;
            iM(null !== (MM = SM.result) && void 0 !== MM ? MM : null)
          }, SM.onerror = () => {
            var MM;
            OM(null !== (MM = SM.error) && void 0 !== MM ? MM : new Error("Failed to load directory handle"))
          }
        }))
      } finally {
        rM.close()
      }
    }
    async function hM(MM) {
      const rM = await LM();
      try {
        await new Promise(((iM, OM) => {
          const SM = rM.transaction(aM, "readwrite");
          SM.objectStore(aM).delete(MM), SM.oncomplete = () => {
            iM()
          }, SM.onerror = () => {
            var MM;
            OM(null !== (MM = SM.error) && void 0 !== MM ? MM : new Error("Failed to clear directory handle"))
          }
        }))
      } finally {
        rM.close()
      }
    }
    async function JM(MM) {
      const rM = {
        mode: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readwrite"
      };
      return "granted" === await MM.queryPermission(rM) || "granted" === await MM.requestPermission(rM)
    }
    async function dM(MM) {
      if (!zM()) return null;
      try {
        const rM = await window.showDirectoryPicker({
          mode: "readwrite"
        });
        return await mM(MM, rM), rM
      } catch (rM) {
        if (function(MM) {
            return MM instanceof DOMException && "AbortError" === MM.name
          }(rM)) return null;
        throw rM
      }
    }

    function yM(MM) {
      return MM.startsWith(".") || QM.has(MM)
    }

    function lM(MM) {
      if (!MM) return !0;
      const rM = MM.split("/");
      for (const iM of rM)
        if ("" === iM || "." === iM || ".." === iM) return !1;
      return !0
    }
    async function EM(MM, rM, iM) {
      for await (const [jM, aM] of MM.entries()) {
        if ("directory" === aM.kind) {
          if (yM(jM)) continue;
          const MM = rM ? `${rM}/${jM}` : jM;
          if (!lM(MM)) continue;
          await EM(aM, MM, iM);
          continue
        }
        const MM = rM ? `${rM}/${jM}` : jM;
        if (!(0, OM.r)(MM) && !(0, SM.e)(MM)) continue;
        const PM = await aM.getFile();
        iM[MM] = (0, SM.e)(MM) ? await RM(PM) : await PM.text()
      }
    }
    async function UM(MM) {
      const rM = {};
      return await EM(MM, "", rM), rM
    }

    function GM(MM) {
      return !(!MM || MM !== MM.trim() || MM.startsWith("/") || MM.includes("\\") || MM.includes("\0")) && lM(MM)
    }
    async function CM(MM, rM, iM) {
      const OM = rM.split("/"),
        SM = OM[OM.length - 1];
      let jM = MM;
      for (let aM = 0; aM < OM.length - 1; aM++) jM = await jM.getDirectoryHandle(OM[aM], {
        create: iM
      });
      return {
        dir: jM,
        fileName: SM
      }
    }
    async function eM(MM, rM, iM) {
      if (!GM(rM)) throw new Error(`Refusing to write unsafe path: ${rM}`);
      const {
        dir: OM,
        fileName: SM
      } = await CM(MM, rM, !0), jM = await OM.getFileHandle(SM, {
        create: !0
      }), aM = await jM.createWritable();
      await aM.write(iM), await aM.close()
    }
    async function bM(MM, rM, iM) {
      const OM = await async function(MM, rM) {
        if (!GM(rM)) return null;
        try {
          const {
            dir: iM,
            fileName: OM
          } = await CM(MM, rM, !1), SM = await iM.getFileHandle(OM), jM = await SM.getFile();
          return await jM.text()
        } catch (iM) {
          if (iM instanceof DOMException && ("NotFoundError" === iM.name || "NotAllowedError" === iM.name)) return null;
          throw iM
        }
      }(MM, rM);
      OM !== iM && await eM(MM, rM, iM)
    }
    async function wM(MM, rM, iM) {
      if (!(0, OM.r)(rM) && !(0, SM.e)(rM)) throw new Error(`Refusing to write non-allowlisted path: ${rM}`);
      if ((0, SM.e)(rM)) {
        if (await pM(MM, rM) === PM) throw new Error(`Move the binary schematic ${rM} outside the linked folder before syncing its placeholder`)
      }
      await eM(MM, rM, iM)
    }
    async function tM(MM, rM) {
      if (!GM(rM)) throw new Error(`Refusing to remove unsafe path: ${rM}`);
      try {
        const {
          dir: iM,
          fileName: OM
        } = await CM(MM, rM, !1);
        await iM.removeEntry(OM)
      } catch (iM) {
        if (iM instanceof DOMException && ("NotFoundError" === iM.name || "NotAllowedError" === iM.name)) return;
        throw iM
      }
    }
    async function gM(MM, rM) {
      if (!GM(rM)) return null;
      try {
        const iM = rM.split("/");
        let OM = MM;
        for (const MM of iM) OM = await OM.getDirectoryHandle(MM);
        return OM
      } catch (iM) {
        if (iM instanceof DOMException && ("NotFoundError" === iM.name || "NotAllowedError" === iM.name)) return null;
        throw iM
      }
    }
    async function uM(MM, rM) {
      if ((0, OM.r)(rM) || (0, SM.e)(rM)) {
        if ((0, SM.e)(rM)) {
          if (await pM(MM, rM) === PM) throw new Error(`Refusing to remove a binary schematic: ${rM}`)
        }
        await tM(MM, rM)
      }
    }
    async function RM(MM) {
      if (MM.size > 64) return PM;
      const rM = await MM.text();
      return Array.from(rM).some((MM => {
        const rM = MM.charCodeAt(0);
        return rM < 9 || rM > 13 && rM < 32 || 65533 === rM
      })) ? PM : rM
    }
    async function pM(MM, rM) {
      try {
        const {
          dir: iM,
          fileName: OM
        } = await CM(MM, rM, !1);
        return await RM(await (await iM.getFileHandle(OM)).getFile())
      } catch (iM) {
        if (iM instanceof DOMException && "NotFoundError" === iM.name) return null;
        throw iM
      }
    }
    async function WM(MM, rM) {
      const iM = await UM(MM);
      for (const OM of Object.keys(iM)) OM in rM || (0, SM.e)(OM) || await uM(MM, OM);
      for (const [jM, aM] of Object.entries(rM))((0, OM.r)(jM) || (0, SM.e)(jM)) && await wM(MM, jM, aM)
    }

    function sM(MM, rM) {
      var iM, OM;
      let SM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const jM = null !== (iM = SM.debounceMs) && void 0 !== iM ? iM : 300,
        aM = null !== (OM = SM.pollMs) && void 0 !== OM ? OM : 1e3;
      let PM = !1,
        nM = null,
        QM = null,
        zM = null;
      const LM = () => {
          PM || (nM && clearTimeout(nM), nM = setTimeout((() => {
            nM = null, mM()
          }), jM))
        },
        mM = async () => {
          if (!PM) try {
            if (!await JM(MM, "readwrite")) return;
            const iM = await UM(MM);
            PM || rM(iM)
          } catch (iM) {
            console.error("[WorldCodeDirectorySync] Failed to read watched directory", iM)
          }
        };
      mM();
      const HM = window.FileSystemObserver;
      if (HM) try {
        zM = new HM((() => {
          LM()
        })), zM.observe(MM, {
          recursive: !0
        })
      } catch (hM) {
        console.warn("[WorldCodeDirectorySync] FileSystemObserver unavailable, falling back to polling", hM), zM = null
      }
      return zM || (QM = setInterval((() => {
        LM()
      }), aM)), () => {
        PM = !0, nM && clearTimeout(nM), QM && clearInterval(QM), zM && zM.disconnect()
      }
    }
  },
  37454: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => tM,
      e: () => eM,
      f: () => bM,
      i: () => GM,
      k: () => CM
    });
    var OM = iM(44),
      SM = iM(1116),
      jM = iM.n(SM),
      aM = iM(3508),
      PM = iM(313),
      nM = iM(2640),
      QM = iM(22),
      zM = iM(2067),
      LM = iM(30),
      mM = iM(2084),
      HM = iM(19),
      hM = iM(2088),
      JM = iM(1464),
      dM = iM(9419),
      yM = iM(2111),
      lM = iM(1188),
      EM = iM(1303);
    const UM = 7e3;

    function GM() {
      const {
        loadingOverlayVisible: MM,
        openInGameMenuName: rM,
        openEverythingMenuName: iM
      } = (0, HM.m)(["loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]);
      return MM || null !== rM || null !== iM
    }

    function CM(MM, rM, iM) {
      const SM = (0, OM.useRef)(iM);
      SM.current = iM;
      const jM = (0, OM.useRef)({
        card: MM,
        ms: 0
      });
      (0, OM.useEffect)((() => {
        if (rM || null === MM) return;
        jM.current.card !== MM && (jM.current = {
          card: MM,
          ms: 0
        });
        const iM = jM.current,
          OM = performance.now(),
          aM = setTimeout((() => {
            SM.current()
          }), UM - iM.ms);
        return () => {
          clearTimeout(aM), iM.ms += performance.now() - OM
        }
      }), [rM, MM])
    }
    const eM = (0, OM.memo)((function() {
      const {
        isTouchScreen: MM
      } = (0, HM.m)(["isTouchScreen"]), rM = (0, JM.y)();
      (0, aM.d)();
      const iM = (0, nM.f)("showBasicMovementControls"),
        [SM, QM] = (0, OM.useState)("movement"),
        zM = "movement" === SM,
        mM = rM && !1 !== iM;
      (0, OM.useEffect)((() => {
        "padActions" !== SM || mM || QM("done")
      }), [SM, mM]);
      const hM = GM();
      return CM("done" === SM ? null : SM, hM, (() => {
        QM("movement" === SM && (0, JM.l)() ? "padActions" : "done")
      })), LM.g.getItem(PM.Cb) > 2 ? (0, EM.jsx)(gM, {
        showingMovementControls: !1
      }) : (0, EM.jsxs)(EM.Fragment, {
        children: [MM && !rM || !zM || !1 === iM ? null : (0, EM.jsxs)("div", {
          className: jM()("ControlsTutorialDiv", {
            Covered: hM
          }),
          children: [(0, EM.jsx)(bM, {}), (0, EM.jsx)(tM, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, EM.jsx)(tM, {
            header: "Jump",
            noaAction: "jump"
          })]
        }), "padActions" === SM && mM && (0, EM.jsx)(wM, {
          covered: hM
        }), (0, EM.jsx)(gM, {
          showingMovementControls: "done" !== SM
        })]
      })
    }));

    function bM() {
      const MM = (0, JM.y)();
      return (0, EM.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, EM.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), MM && (0, EM.jsx)(hM.d, {
          noaAction: "forward"
        }), !MM && (0, EM.jsxs)(EM.Fragment, {
          children: [(0, EM.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, EM.jsx)(hM.d, {
              noaAction: "forward"
            })
          }), (0, EM.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, EM.jsx)(hM.d, {
              noaAction: "left"
            }), (0, EM.jsx)(hM.d, {
              noaAction: "backward"
            }), (0, EM.jsx)(hM.d, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function wM(MM) {
      let {
        covered: rM
      } = MM;
      const {
        t: iM
      } = (0, lM.A)(), OM = (0, nM.f)("useInventory");
      return (0, EM.jsxs)("div", {
        className: jM()("ControlsTutorialDiv", {
          Covered: rM
        }),
        children: [(0, EM.jsx)(tM, {
          header: iM("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, EM.jsx)(tM, {
          header: iM("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== OM && (0, EM.jsx)(tM, {
          header: iM("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, EM.jsx)(tM, {
          header: iM("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function tM(MM) {
      let {
        header: rM,
        noaAction: iM
      } = MM;
      return (0, EM.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, EM.jsx)("div", {
          className: "KeyHeader",
          children: rM
        }), (0, EM.jsx)(hM.d, {
          noaAction: iM
        })]
      })
    }

    function gM(MM) {
      let {
        showingMovementControls: rM
      } = MM;
      const {
        isTouchScreen: iM
      } = (0, HM.m)(["isTouchScreen"]), SM = (0, JM.y)(), jM = (0, yM.c)("OpenShop"), [aM, PM] = (0, OM.useState)(!1), hM = `SeenShopControls|${(0,mM.f)("connectedGame",(MM=>MM.gameNameWithVariation))}`, lM = () => (!(0, JM.l)() || null !== (0, dM.e)("OpenShop")) && !LM.g.getItem(hM) && zM.d.get("shopInfo") && !rM, UM = () => (PM(!0), LM.g.setItem(hM, !0), (0, JM.l)() || QM.i.Tz("showShopTouchTutorial"), setTimeout((() => {
        PM(!1)
      }), 7e3));
      (0, OM.useEffect)((() => {
        let MM;
        const rM = QM.i.subscribe("showShopTutorial", (() => {
          lM() && (MM = UM())
        }));
        return () => {
          clearTimeout(MM), QM.i.unsubscribe(rM)
        }
      }), [rM]);
      const GM = (0, OM.useRef)();
      return (0, nM.c)("currencyAmounts", (MM => {
        if (lM()) {
          let iM = !1;
          const OM = zM.d.get("shopInfo");
          for (const SM in OM) {
            for (const jM in OM[SM].items) {
              var rM;
              const aM = OM[SM].items[jM];
              if (void 0 !== aM.currency && MM[aM.currency] && aM.cost <= MM[aM.currency].amount && (null === (rM = aM.hidden) || void 0 === rM || !rM)) {
                iM = !0;
                break
              }
            }
            if (iM) break
          }
          iM && (GM.current = UM())
        }
      })), (0, OM.useEffect)((() => () => {
        clearTimeout(GM.current)
      }), [rM]), !aM || SM && !jM ? null : (0, EM.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: iM && !SM ? null : (0, EM.jsx)(tM, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
  },
  5233: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => dM,
      e: () => yM
    });
    var OM = iM(1116),
      SM = iM.n(OM),
      jM = iM(44),
      aM = iM(1188),
      PM = iM(5242),
      nM = iM(2006),
      QM = iM(2640),
      zM = iM(5248),
      LM = iM(1303);
    const mM = new WeakMap;
    let HM = 0;

    function hM(MM) {
      let rM = mM.get(MM);
      return void 0 === rM && (rM = HM++, mM.set(MM, rM)), rM
    }

    function JM(MM) {
      let {
        piece: rM
      } = MM;
      return "space" === rM.kind ? (0, LM.jsx)(LM.Fragment, {
        children: rM.text
      }) : (0, LM.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${rM.delayMs}ms`
        },
        children: (0, LM.jsx)(PM.c, {
          text: "icon" === rM.kind ? `[[${rM.icon}]]` : rM.text
        })
      })
    }

    function dM(MM) {
      let {
        display: rM
      } = MM;
      const {
        selectedLanguage: iM
      } = (0, aM.A)(), OM = (0, jM.useMemo)((() => (0, zM.e)((0, zM.i)(rM).plan.pieces)), [rM, iM.code]);
      return (0, LM.jsxs)("div", {
        className: SM()("Dialogue", {
          DialogueAnimateIn: !1 !== rM.animateIn
        }),
        children: [rM.speakerName && (0, LM.jsx)(nM.b, {
          text: rM.speakerName,
          className: "DialogueSpeaker"
        }), (0, LM.jsx)("p", {
          className: "DialogueLine",
          children: OM.map(((MM, rM) => 1 === MM.length && "space" === MM[0].kind ? MM[0].text : (0, LM.jsx)("span", {
            className: "DialogueGlue",
            children: MM.map(((MM, rM) => (0, LM.jsx)(JM, {
              piece: MM
            }, rM)))
          }, rM)))
        })]
      })
    }
    const yM = (0, jM.memo)((function() {
      const MM = (0, QM.f)("dialogue");
      return (0, LM.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: MM && (0, LM.jsx)(dM, {
          display: MM
        }, hM(MM))
      })
    }))
  },
  37620: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => JM,
      d: () => dM
    });
    var OM = iM(44),
      SM = iM(1516),
      jM = iM(2084),
      aM = iM(37559),
      PM = iM(625),
      nM = iM(1116),
      QM = iM.n(nM),
      zM = iM(1303);
    const LM = [mM()];

    function mM() {
      return {
        source: null,
        direction: null,
        mN: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function HM(MM) {
      return LM.find((rM => null !== rM.source && rM.source === MM))
    }

    function hM(MM) {
      clearTimeout(MM.timeout), MM.source = null, MM.direction = null, MM.writtenAngle = null, MM.mN && (MM.mN.style.rotate = "")
    }
    const JM = (0, OM.memo)((function() {
      const [, MM] = (0, OM.useReducer)((MM => MM + 1), 0);
      return (0, SM.d)("damagedByOtherPlayer", (rM => {
        let {
          xj: iM,
          direction: OM
        } = rM;
        const SM = iM || "nonDirectional",
          jM = function(MM) {
            var rM;
            const iM = null !== (rM = HM(MM)) && void 0 !== rM ? rM : LM.find((MM => null === MM.source));
            if (iM) return iM;
            const OM = {
              source: null,
              direction: null,
              mN: null,
              timeout: void 0,
              writtenAngle: null
            };
            return LM.push(OM), OM
          }(SM);
        clearTimeout(jM.timeout), jM.source = SM, jM.direction = OM, jM.timeout = setTimeout((() => {
          hM(jM), MM()
        }), 800), MM()
      })), (0, jM.c)("kill", (rM => {
        let {
          killer: iM,
          victim: OM
        } = rM;
        const SM = iM.local && HM(OM.id);
        SM && (hM(SM), MM())
      })), (0, OM.useEffect)((() => {
        const MM = (0, aM.h)("turnDamageIndicators", dM);
        return () => {
          MM(), LM.forEach(hM)
        }
      }), []), (0, zM.jsx)("div", {
        className: "DirectionalDamage",
        children: LM.map(((MM, rM) => (0, zM.jsx)("div", {
          ref: rM => {
            MM.mN = rM
          },
          className: QM()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, PM.J)(MM.direction),
            DamageIndicatorIdle: null === MM.source
          })
        }, rM)))
      })
    }));

    function dM(MM) {
      for (const rM of LM) {
        if (null === rM.source || (0, PM.J)(rM.direction)) continue;
        const iM = rM.direction - MM;
        iM !== rM.writtenAngle && (rM.writtenAngle = iM, rM.mN.style.rotate = `${iM}rad`)
      }
    }
  },
  9383: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => WM,
      g: () => gM,
      i: () => uM
    });
    var OM = iM(44),
      SM = iM(4923),
      jM = iM(1142),
      aM = iM(1516),
      PM = iM(22),
      nM = iM(3831),
      QM = iM(2367),
      zM = iM(1242),
      LM = iM(2762),
      mM = iM(2039),
      HM = iM(2084),
      hM = iM(1188),
      JM = iM(19),
      dM = iM(1717),
      yM = iM(1116),
      lM = iM.n(yM),
      EM = iM(9392),
      UM = iM(9400),
      GM = iM(9403),
      CM = iM(9324),
      eM = iM(9408),
      bM = iM(3495),
      wM = (iM(9410), iM(1303));
    let tM = null;

    function gM() {
      return null !== tM
    }

    function uM() {
      return "pad" === tM
    }

    function RM() {
      return "inGame" === JM.d.get("gameState") && !(0, dM.r)()
    }

    function pM(MM) {
      return (0, UM.x)(MM, zM.o, UM.h, UM.j, UM.l)
    }
    const WM = (0, OM.memo)((function() {
      const {
        t: MM
      } = (0, hM.A)(), {
        userContext: rM
      } = (0, jM.b)(), [iM, JM] = (0, OM.useState)(null), [yM, gM] = (0, OM.useState)(null), uM = (0, OM.useRef)(null), WM = (0, OM.useCallback)((MM => {
        uM.current = MM, gM(MM)
      }), []), sM = (0, OM.useRef)(0), DM = (0, OM.useRef)(null), kM = (0, OM.useRef)({
        x: 0,
        y: 0
      }), [ZM, oM] = (0, OM.useState)(0), fM = (0, OM.useMemo)((() => function(MM) {
        const rM = [];
        for (let OM = 0; OM < zM.o; OM++) {
          var iM;
          rM.push(null !== (iM = MM[OM]) && void 0 !== iM ? iM : null)
        }
        return rM
      }((0, LM.g)(rM.getPlayerCosmetics().emote))), [rM, ZM]);
      (0, HM.c)("cosmeticsUpdated", (MM => {
        MM.some((MM => MM.local && "emote" === MM.Ii)) && oM((MM => MM + 1))
      }));
      const YM = (0, OM.useRef)(!1),
        NM = (0, OM.useCallback)((function(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === MM && (0, GM.f)(), YM.current = rM, kM.current = {
            x: 0,
            y: 0
          }, WM(null), JM(MM)
        }), [WM]),
        AM = (0, OM.useCallback)((() => {
          JM(null), WM(null), kM.current = {
            x: 0,
            y: 0
          }
        }), [WM]),
        xM = (0, OM.useCallback)((MM => {
          if (Date.now() < sM.current) return;
          const rM = (0, QM.e)(MM),
            iM = !!rM.holdUntilMove,
            OM = iM ? 600 : Math.ceil(1e3 * rM.animation.animation_length / QM.b) + 200;
          sM.current = Date.now() + OM, DM.current = MM, mM.gameBridge.send("playEmote", MM), mM.gameBridge.send("applyTemporaryThirdPerson", iM ? {} : {
            durationMs: OM
          })
        }), []);
      (0, aM.d)("requestToggleEmoteWheel", (() => {
        null === iM ? RM() && NM("click") : AM()
      })), (0, aM.d)("requestEmoteWheelHoldOpen", (() => {
        null === iM && RM() && NM((0, EM.e)() ? "hold" : "click")
      })), (0, aM.d)("requestEmoteWheelPadOpen", (MM => {
        null !== iM || !RM() || (0, CM.c)() || (0, eM.s)() || NM("pad", MM)
      })), (0, aM.d)("requestEmoteRepeatLast", (() => {
        if (null !== iM || !RM() || (0, CM.c)() || (0, eM.s)()) return;
        const MM = DM.current;
        null !== MM && fM.includes(MM) ? xM(MM) : NM("pad", !0)
      }));
      const vM = () => {
        const MM = uM.current,
          rM = null !== MM ? fM[MM] : null;
        null !== rM && "pad" === iM && Date.now() < sM.current || (AM(), null !== rM && xM(rM))
      };
      (0, aM.d)("emoteWheelPadAim", (MM => {
        if ("pad" !== iM) return;
        const rM = (0, UM.I)(MM, zM.o, uM.current);
        WM(null !== rM && null !== fM[rM] ? rM : null)
      })), (0, aM.d)("requestEmoteWheelPadCommit", (MM => {
        "pad" !== iM || MM && YM.current || vM()
      })), (0, aM.d)("appManagerUpdated|activeInputDevice", (MM => {
        null !== iM && "pad" === iM !== ("gamepad" === MM) && AM()
      })), (0, OM.useLayoutEffect)((() => (tM = iM, (0, nM.q)("emoteWheel", "pad" === iM), PM.i.Tz(nM.l), () => {
        tM = null, (0, nM.q)("emoteWheel", !1), PM.i.Tz(nM.l)
      })), [iM]), (0, aM.d)("requestEmoteWheelHoldRelease", (() => {
        "hold" === iM && vM()
      })), (0, aM.d)("requestEmoteWheelClose", (() => {
        null !== iM && AM()
      })), (0, aM.d)("appManagerUpdated|gameState", (MM => {
        "inGame" !== MM && AM()
      }));
      const FM = () => {
        (0, dM.r)() && AM()
      };
      if ((0, aM.d)("appManagerUpdated|openEverythingMenuName", FM), (0, aM.d)("appManagerUpdated|openInGameMenuName", FM), (0, aM.d)("pointerLockUpdate", (MM => {
          MM || "hold" !== iM || AM()
        })), (0, OM.useEffect)((() => {
          if (null === iM) return;
          const MM = MM => {
            "Escape" === MM.key && (MM.stopImmediatePropagation(), MM.preventDefault(), AM())
          };
          return document.addEventListener("keydown", MM, !0), () => {
            document.removeEventListener("keydown", MM, !0)
          }
        }), [iM, AM]), (0, SM.c)(!0, "click" === iM, "EmoteWheelOverlay"), (0, OM.useEffect)((() => {
          if ("hold" === iM) return mM.gameBridge.send("holdEmoteWheel", !0), () => {
            mM.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [iM]), (0, OM.useEffect)((() => {
          if ("hold" !== iM) return;
          const MM = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            rM = UM.u * MM,
            OM = UM.r * MM,
            SM = MM => {
              let iM = kM.current.x + MM.movementX,
                SM = kM.current.y + MM.movementY;
              const jM = Math.hypot(iM, SM);
              if (jM > rM) {
                const MM = rM / jM;
                iM *= MM, SM *= MM
              }
              kM.current = {
                x: iM,
                y: SM
              }, WM(function(MM, rM, iM, OM) {
                if (Math.hypot(MM, rM) < iM) return null;
                const SM = (0, UM.z)(MM, rM, zM.o);
                return null === OM[SM] ? null : SM
              }(iM, SM, OM, fM))
            };
          return document.addEventListener("mousemove", SM), () => {
            document.removeEventListener("mousemove", SM)
          }
        }), [iM, fM, WM]), null === iM) return null;
      const BM = "hold" === iM || "pad" === iM,
        XM = null !== yM ? fM[yM] : null,
        IM = null !== XM ? (0, QM.e)(XM).displayName : MM("emotes:pickEmote");
      return (0, wM.jsx)("div", {
        className: lM()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === iM
        }),
        onMouseDown: MM => {
          MM.target === MM.currentTarget && AM()
        },
        children: (0, wM.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * UM.u + "rem",
            height: 2 * UM.u + "rem"
          },
          children: [(0, wM.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${UM.n} ${UM.n}`,
            children: [fM.map(((rM, iM) => {
              const OM = null !== rM,
                SM = BM && iM === yM;
              return (0, wM.jsx)("path", {
                d: pM(iM),
                className: lM()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: SM,
                  EmoteWheelWedgeDisabled: !OM
                }),
                onClick: MM => {
                  MM.stopPropagation(), null !== rM && (MM => {
                    AM(), xM(MM)
                  })(rM)
                },
                "aria-label": null !== rM ? (0, QM.e)(rM).displayName : MM("emotes:emptySlot")
              }, iM)
            })), (0, wM.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: UM.h,
              cy: UM.h,
              r: UM.l
            }), (0, wM.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: UM.h,
              cy: UM.h,
              r: UM.j
            }), BM && null !== yM && (0, wM.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: pM(yM)
            })]
          }), fM.map(((MM, rM) => {
            const iM = null !== MM,
              OM = BM && rM === yM,
              SM = (0, UM.C)(rM, zM.o),
              jM = UM.e * Math.cos(SM),
              aM = UM.e * Math.sin(SM);
            return (0, wM.jsx)("div", {
              className: lM()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: OM,
                EmoteWheelSlotIconDisabled: !iM
              }),
              style: {
                left: `calc(50% + ${jM}rem)`,
                top: `calc(50% + ${aM}rem)`,
                backgroundImage: iM ? `url(${(0,bM.c)("emote",MM)})` : void 0
              },
              "aria-hidden": !0
            }, rM)
          })), (0, wM.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: IM
          })]
        })
      })
    }))
  },
  37492: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => dM
    });
    var OM = iM(44),
      SM = iM(65),
      jM = iM(1188),
      aM = iM(1116),
      PM = iM.n(aM),
      nM = iM(1830),
      QM = iM(1398),
      zM = iM(1287),
      LM = iM(1548),
      mM = iM(1750),
      HM = iM(1541),
      hM = iM(1303);
    const JM = 14;

    function dM(MM) {
      let {
        className: rM,
        triggerElementRef: iM,
        options: aM
      } = MM;
      const {
        t: dM
      } = (0, jM.A)(), [yM, lM] = (0, OM.useState)(!1), [EM, UM] = (0, OM.useState)({
        x: 0,
        y: 0
      }), GM = (0, OM.useRef)(null);
      (0, OM.useEffect)((() => {
        let MM = null;
        const rM = rM => {
            MM = {
              x: rM.clientX,
              y: rM.clientY
            }
          },
          OM = rM => {
            if (null === MM || !(0, HM.e)(MM, rM)) return;
            MM = null;
            const iM = JM * (0, nM.getRemInPx)();
            UM({
              x: Math.min(rM.clientX, window.innerWidth - iM - 5),
              y: rM.clientY
            }), lM((MM => !MM))
          },
          SM = MM => {
            var rM;
            null !== (rM = GM.current) && void 0 !== rM && rM.contains(MM.relatedTarget) || lM(!1)
          },
          jM = iM.current;
        return jM.addEventListener("pointerdown", rM), jM.addEventListener("pointerup", OM), jM.addEventListener("mouseleave", SM), () => {
          jM.removeEventListener("pointerdown", rM), jM.removeEventListener("pointerup", OM), jM.removeEventListener("mouseleave", SM)
        }
      }), [iM]), (0, OM.useEffect)((() => {
        if (yM) return (0, mM.b)("pointerdown", (MM => {
          !GM.current || GM.current.contains(MM.target) || iM.current.contains(MM.target) || lM(!1)
        }))
      }), [yM, iM]), (0, OM.useLayoutEffect)((() => {
        if (!yM || !GM.current) return;
        const MM = GM.current.getBoundingClientRect().height,
          rM = Math.max(5, window.innerHeight - MM - 5);
        EM.y > rM && UM({
          x: EM.x,
          y: rM
        })
      }), [yM, EM]), (0, zM.v)("popup", GM, (() => {
        lM(!1)
      }), yM);
      const CM = aM.filter((MM => !1 !== MM.show));
      return yM && 0 !== CM.length ? (0, SM.createPortal)((0, hM.jsx)("div", {
        ref: GM,
        className: PM()("FloatingActions", {
          [rM]: rM
        }),
        style: {
          width: `${JM}rem`,
          top: EM.y,
          left: EM.x
        },
        children: CM.map((MM => {
          let {
            icon: rM,
            text: iM,
            onPointerDown: OM,
            analyticsClick: SM
          } = MM;
          return (0, hM.jsxs)("div", {
            className: "FloatingAction",
            "data-pad-focusable": !0,
            onPointerUp: MM => {
              void 0 !== SM && (0, LM.reportAnalyticsClick)(SM), OM(MM), lM(!1), MM.stopPropagation()
            },
            children: [(0, hM.jsx)(QM.b, {
              name: rM
            }), (0, hM.jsx)("div", {
              children: dM(iM)
            })]
          }, iM)
        }))
      }), function() {
        var MM;
        return null !== (MM = document.querySelector(".WholeAppWrapperInner")) && void 0 !== MM ? MM : document.body
      }()) : null
    }
  },
  37638: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => ha
    });
    var OM = iM(37538),
      SM = iM(44),
      jM = iM(2190),
      aM = iM(4917),
      PM = iM(4919),
      nM = iM(2640),
      QM = iM(2039),
      zM = iM(1303);

    function LM(MM) {
      let {
        className: rM,
        style: iM,
        vw: OM,
        maxPx: SM,
        children: jM
      } = MM;
      console.assert("number" === typeof OM && "number" === typeof SM, "vw and maxPx passed to Text must be numbers");
      const aM = window.innerWidth * (OM / 100) > SM ? `${SM}px` : `${OM}vw`;
      return (0, zM.jsx)("div", {
        className: rM,
        style: {
          ...iM,
          fontSize: aM
        },
        children: jM
      })
    }
    var mM = iM(37640),
      HM = iM(1520),
      hM = iM(22),
      JM = iM(2067),
      dM = iM(1398);

    function yM(MM) {
      let {
        tasks: rM,
        lastDisplayedTasks: iM
      } = MM;
      return (0, zM.jsx)(zM.Fragment, {
        children: Object.keys(rM).map((MM => (0, zM.jsx)(lM, {
          task: rM[MM],
          lastDisplayedAs: iM[MM]
        }, rM[MM].text)))
      })
    }

    function lM(MM) {
      let {
        task: rM,
        lastDisplayedAs: iM
      } = MM;
      const [OM, jM] = (0, SM.useState)(null !== iM && void 0 !== iM && iM.progress ? iM.progress / rM.goal : 0), [aM, PM] = (0, SM.useState)(!1), [nM, QM] = (0, SM.useState)(rM.claimed || !1);
      return (0, SM.useEffect)((() => {
        jM(rM.progress / rM.goal)
      }), [rM.progress, rM.goal]), nM ? null : (0, zM.jsxs)("div", {
        className: "Task",
        children: [(0, zM.jsx)("div", {
          className: "TaskDescDiv",
          children: (0, zM.jsx)(LM, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: rM.text
          })
        }), rM.progress < rM.goal ? (0, zM.jsxs)("div", {
          className: "TaskProgress",
          children: [0 !== OM ? (0, zM.jsx)("div", {
            className: "TaskProgressForeground",
            style: {
              width: 100 * OM + "%"
            }
          }) : null, (0, zM.jsx)("div", {
            className: "TaskProgressText",
            children: `${rM.progress}/${rM.goal}`
          })]
        }) : (0, zM.jsx)(HM.p, {
          className: "ClaimRewardButton",
          onClick: () => {
            PM(!0)
          },
          children: (0, zM.jsx)(LM, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: "Claim Reward"
          })
        }), aM ? (0, zM.jsx)(EM, {
          task: rM,
          close: () => {
            rM.claimed = !0, QM(!0), PM(!1)
          }
        }) : null]
      })
    }

    function EM(MM) {
      let {
        task: rM,
        close: iM
      } = MM;
      const [OM, jM] = (0, SM.useState)({}), [aM, PM] = (0, SM.useState)("closed");
      (0, SM.useEffect)((() => {
        let MM;
        return "animStart" === aM && (MM = setTimeout((() => {
          PM("animEnd")
        }), 700)), () => {
          clearTimeout(MM)
        }
      }), [aM]), (0, mM.e)((() => {
        QM.gameBridge.send("completeTask", rM.text)
      }));
      const LM = (0, nM.f)("currencyAmounts");
      return (0, zM.jsxs)("div", {
        className: "RewardBackground",
        onClick: () => {
          if ("animEnd" === aM)
            if (0 === rM.rewards.length) iM(), QM.gameBridge.send("completeTask", rM.text);
            else {
              const MM = {
                ...JM.d.get("currencyAmounts")
              };
              for (const rM in OM) MM[rM] = {
                ...MM[rM],
                amount: MM[rM].amount + OM[rM]
              };
              JM.d.apply({
                currencyAmounts: MM
              }), PM("closed")
            }
          else "closed" === aM && (jM(rM.rewards.pop()), PM("animStart"))
        },
        children: [(0, zM.jsx)("img", {
          className: "Chest",
          alt: "closed" !== aM ? "open chest" : "closed chest",
          src: `/textures/miscImages/Treasure Chest ${"closed"!==aM?"open":"closed"}.png`
        }), (0, zM.jsx)("div", {
          className: "Rewards",
          children: "closed" !== aM ? Object.keys(OM).map((MM => {
            const rM = null === LM || void 0 === LM ? void 0 : LM[MM];
            return !rM || rM.hidden ? null : (0, zM.jsxs)("div", {
              className: "Reward",
              children: [(0, zM.jsx)(dM.b, {
                name: rM.icon,
                className: "3x UiCurrencyIcon RewardIcon",
                style: {
                  color: rM.iconColour
                }
              }), (0, zM.jsx)("div", {
                className: "RewardAmountText",
                children: "animStart" === aM ? 0 : OM[MM]
              })]
            }, MM)
          })) : null
        }), "animStart" === aM ? (0, zM.jsx)(UM, {}) : null, (0, zM.jsx)("div", {
          className: "ChestsLeft",
          children: rM.rewards.length
        })]
      })
    }

    function UM() {
      const [MM, rM] = (0, SM.useState)(0);
      (0, SM.useEffect)((() => {
        rM(1)
      }), []);
      return (0, zM.jsx)(zM.Fragment, {
        children: Array.from({
          length: 40
        }).map(((rM, iM) => (0, zM.jsx)(dM.b, {
          name: "star",
          className: "3x UiCurrencyIcon OpenStar",
          style: {
            bottom: 50 * MM * Math.cos(iM / 40 * (2 * Math.PI)) + 50 + "vh",
            left: 50 * MM * Math.sin(iM / 40 * (2 * Math.PI)) + "vh",
            opacity: 0 === MM ? 1 : 0
          }
        }, iM)))
      })
    }
    hM.i.subscribe("requiredLibrariesLoaded", (() => {
      setTimeout((() => {
        const MM = new Image,
          rM = new Image;
        MM.src = "/textures/miscImages/Treasure Chest open.png", rM.src = "/textures/miscImages/Treasure Chest closed.png"
      }), 1e4)
    }));
    var GM = iM(3530),
      CM = iM(1142),
      eM = iM(2006),
      bM = iM(1516),
      wM = iM(332),
      tM = iM(2084),
      gM = iM(1396);

    function uM(MM) {
      var rM, iM;
      let {
        byId: OM,
        localId: SM
      } = MM;
      return null === SM ? null : null !== (rM = null === (iM = OM[SM]) || void 0 === iM ? void 0 : iM.name) && void 0 !== rM ? rM : null
    }

    function RM(MM) {
      let {
        lbStats: rM,
        storedState: iM = {}
      } = MM;
      const {
        userContext: OM
      } = (0, CM.b)(), jM = (0, tM.f)("players", uM), [aM, PM] = (0, SM.useState)(iM.selectedCat || (null === rM || void 0 === rM ? void 0 : rM[0]) || null), [nM, LM] = (0, SM.useState)(iM.selectedTimeframe || "Today"), [mM, HM] = (0, SM.useState)(null);
      (0, SM.useEffect)((() => {
        null === aM && null !== rM && rM.length > 0 && PM(rM[0])
      }), [rM, aM]);
      const [hM, JM] = (0, SM.useState)(iM.seeingTop || !1), [dM, yM] = (0, SM.useState)(!1), lM = (0, SM.useCallback)((() => {
        null !== aM && null !== nM && (QM.gameBridge.send("requestLeaderboard", {
          category: aM.value,
          timeframe: nM,
          seeTop: hM
        }), UM(!0), sM && DM(null))
      }), [aM, nM, iM, hM]);
      (0, SM.useEffect)((() => {
        lM(), iM.selectedCat = aM, iM.selectedTimeframe = nM, iM.seeingTop = hM
      }), [aM, nM, iM, hM, lM]), (0, SM.useEffect)((() => {
        if ((null === mM || void 0 === mM ? void 0 : mM.length) > 0)
          if (hM) hM && yM(null === RM(mM));
          else {
            for (const MM of mM)
              if (1 === MM.place) return void yM(!1);
            yM(!0)
          }
      }), [mM, hM]), (0, bM.d)("leaderboardResponse", (MM => {
        let {
          category: iM,
          timeframe: OM,
          data: SM
        } = MM;
        for (let jM = 0; jM < rM; jM++)
          if (rM[jM].value === iM) {
            PM(rM[jM]);
            break
          } LM(OM), HM(SM), UM(!1)
      }));
      const [EM, UM] = (0, SM.useState)(!0);

      function RM(MM) {
        const rM = uM(QM.gameBridge.latest("players"));
        for (let iM = 0; iM < MM.length; iM++)
          if (MM[iM].name === rM) return MM[iM].place;
        return null
      }
      const [pM, WM] = (0, SM.useState)(!1), [sM, DM] = (0, SM.useState)(null);
      (0, SM.useEffect)((() => {
        if (mM && !pM) {
          const MM = RM(mM);
          MM < (iM.lastSeenPlayerPlace || 0) && DM(iM.lastSeenPlayerPlace - MM), WM(!0)
        }
      }), [mM, iM, pM]), (0, SM.useEffect)((() => () => {
        mM && (iM.lastSeenPlayerPlace = RM(mM))
      }), [mM, iM]);
      const kM = (0, SM.useRef)(null),
        [ZM, oM] = (0, SM.useState)(void 0);
      return (0, SM.useEffect)((() => {
        var MM, rM;
        ZM !== (null === (MM = kM.current) || void 0 === MM ? void 0 : MM.offsetHeight) && oM(null === (rM = kM.current) || void 0 === rM ? void 0 : rM.offsetHeight)
      })), OM.isLoggedIn() ? (0, zM.jsxs)(zM.Fragment, {
        children: [(0, zM.jsxs)("div", {
          className: "LeaderboardSelectors",
          children: [(0, zM.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, zM.jsx)(GM.e, {
              options: rM.map((MM => ({
                label: MM.label,
                value: MM.value
              }))),
              value: aM,
              onChange: MM => {
                PM(MM)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), (0, zM.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, zM.jsx)(GM.e, {
              options: wM.Lc.map((MM => ({
                value: MM,
                label: MM,
                className: "LBDropdownMenuItem"
              }))),
              value: nM,
              onChange: MM => {
                LM(MM.label)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), dM ? (0, zM.jsx)("div", {
            className: "SeeTopText",
            onClick: () => {
              JM(!hM)
            },
            children: hM ? "See Yourself" : "See Top"
          }) : null]
        }), (0, zM.jsx)("div", {
          className: "LBTableWrapper",
          children: EM ? (0, zM.jsx)("div", {
            className: "LoaderContainer",
            children: (0, zM.jsx)(gM.d, {})
          }) : null === sM ? (0, zM.jsx)(zM.Fragment, {
            children: (0, zM.jsxs)("table", {
              className: "LBTable",
              children: [(0, zM.jsx)("thead", {
                className: "LBTableTHead",
                ref: kM,
                children: (0, zM.jsxs)("tr", {
                  children: [(0, zM.jsx)("th", {
                    className: "LBTablePlaceTH LBTableTH",
                    children: "PLACE"
                  }), (0, zM.jsx)("th", {
                    className: "LBTablePlayerTH LBTableTH",
                    children: "PLAYER"
                  }), (0, zM.jsx)("th", {
                    className: "LBTableValueTH LBTableTH",
                    children: aM.label.toUpperCase()
                  })]
                })
              }), (0, zM.jsx)("tbody", {
                children: mM.map((MM => (0, zM.jsxs)("tr", {
                  className: "LBTableTR " + (MM.name === jM ? "LBTableTRYou" : ""),
                  children: [(0, zM.jsx)("td", {
                    className: "LBTableTD",
                    children: `#${MM.place}`
                  }), (0, zM.jsx)("td", {
                    className: "LBTableTD",
                    children: (0, zM.jsx)(eM.b, {
                      text: [{
                        entityName: MM.name
                      }]
                    })
                  }), (0, zM.jsx)("td", {
                    className: "LBTableTD",
                    children: MM.stat
                  })]
                }, MM.name)))
              })]
            })
          }) : (0, zM.jsx)("div", {
            className: "LBIncreaseWrapper",
            onClick: () => {
              DM(null)
            },
            children: (0, zM.jsxs)("div", {
              className: "LBIncreaseDiv",
              children: [(0, zM.jsx)("div", {
                className: "TriangleUp"
              }), (0, zM.jsx)("div", {
                className: "LBIncreaseText",
                children: `${sM} Place${sM>1?"s":""}`
              })]
            })
          })
        })]
      }) : (0, zM.jsxs)("div", {
        className: "LBLoginDiv",
        children: [(0, zM.jsx)("div", {
          className: "LBLoginInfo",
          children: "Login to see the leaderboard"
        }), (0, zM.jsx)("div", {
          className: "LBLoginInfo",
          children: "You can login from the top left homescreen"
        })]
      })
    }
    var pM = iM(3508),
      WM = iM(83),
      sM = iM(30),
      DM = iM(3827);
    const kM = (0, SM.memo)((function(MM) {
      let {
        show: rM,
        onClose: iM
      } = MM;
      (0, pM.d)();
      const OM = (0, nM.f)("_tasks"),
        jM = (0, nM.f)("_availableLeaderboards"),
        [QM, LM] = (0, SM.useState)({});
      OM && Object.keys(OM).length > 0 && 0 === Object.keys(QM).length && LM(OM);
      const [mM] = (0, SM.useState)({
        tasks: {},
        leaderboard: {}
      }), HM = {
        tasks: {
          Title: "Tasks",
          getIsDefined: () => !!OM && Object.keys(OM).length > 0,
          content: (0, zM.jsx)(yM, {
            tasks: OM,
            lastDisplayedTasks: QM
          })
        },
        leaderboard: {
          Title: "Leaderboard",
          getIsDefined: () => (null === jM || void 0 === jM ? void 0 : jM.length) > 0,
          content: (0, zM.jsx)(RM, {
            lbStats: jM,
            storedState: mM.leaderboard
          })
        }
      };

      function hM() {
        for (const MM in HM)
          if (HM[MM].getIsDefined()) return MM;
        return null
      }
      const [JM, dM] = (0, SM.useState)(hM());

      function lM() {
        LM({
          ...OM
        }), iM()
      }(0, SM.useEffect)((() => {
        JM || dM(hM())
      }), [hM()]), (0, PM.c)(!0, JM && rM), (0, SM.useEffect)((() => {
        rM && !JM && (console.log("CLOSE"), lM())
      }), [rM, JM]);
      const [EM, UM] = (0, SM.useState)(!1);
      return (0, SM.useEffect)((() => {
        rM && JM && !EM && UM(!0)
      }), [rM, EM, JM]), (0, SM.useEffect)((() => {
        !EM && OM && "tasks" !== JM && dM("tasks")
      }), [EM, OM, JM]), (0, zM.jsx)(zM.Fragment, {
        children: JM ? (0, zM.jsx)(DM.d, {
          className: "RetentionFeaturesWrapper",
          show: rM,
          children: (0, zM.jsxs)(aM.e, {
            close: lM,
            escDoesExit: !1,
            closeClassnameList: ["VerticalMenuScreenDiv"],
            togglePointerLock: !1,
            globallyUniqueKey: "RetentionFeaturesComponent",
            children: [(0, zM.jsxs)("div", {
              className: "VerticalMenuScreenDiv",
              children: [(0, zM.jsx)(oM, {}), (0, zM.jsxs)("div", {
                className: "MenuDiv",
                children: [(0, zM.jsx)(ZM, {
                  setCategory: dM,
                  menuCategories: HM,
                  selectedCat: JM
                }), (0, zM.jsx)("div", {
                  className: "MenuCategoryContainer",
                  children: HM[JM].content
                })]
              })]
            }), (0, zM.jsx)("div", {
              className: "BottomScreenMenuWrapper",
              children: WM.featureFlags.useDiscord && (0, zM.jsx)("div", {
                className: "DiscordMenuDivDiv",
                children: (0, zM.jsx)("div", {
                  className: "DiscordMenuDiv",
                  children: (0, zM.jsx)(fM, {
                    tasks: OM
                  })
                })
              })
            })]
          })
        }) : null
      })
    }));

    function ZM(MM) {
      let {
        selectedCat: rM,
        setCategory: iM,
        menuCategories: OM
      } = MM;
      return (0, zM.jsx)("div", {
        className: "MenuHeader",
        children: Object.keys(OM).map((MM => OM[MM].getIsDefined() ? (0, zM.jsx)("div", {
          className: "MenuHeaderCategory " + (MM === rM ? "SelectedHeaderCat" : "UnselectedHeaderCat"),
          onClick: () => {
            iM(MM)
          },
          children: OM[MM].Title
        }, MM) : null))
      })
    }

    function oM() {
      const MM = (0, nM.f)("currencyAmounts");
      return (0, zM.jsx)("div", {
        className: "TopScreenCurrencies",
        children: Object.keys(null !== MM && void 0 !== MM ? MM : {}).map((rM => {
          const iM = MM[rM];
          return iM.hidden ? null : (0, zM.jsxs)("div", {
            className: "TopScreenCurrencyDiv",
            children: [(0, zM.jsx)(dM.b, {
              name: iM.icon,
              className: "3x UiCurrencyIcon",
              style: {
                color: iM.iconColour
              }
            }), (0, zM.jsx)("div", {
              className: "UiCurrencyAmount",
              children: iM.amount
            })]
          }, rM)
        }))
      })
    }

    function fM(MM) {
      let {
        tasks: rM
      } = MM;
      return (0, zM.jsxs)("a", {
        className: "MenuDiscordButtonWrapper",
        href: "https://discord.gg/playbloxd",
        target: "_blank",
        rel: "noreferrer",
        children: [(0, zM.jsx)(dM.b, {
          name: "discord",
          kit: "brands",
          className: "DiscordButton",
          onClick: () => {
            sM.g.setItem("DiscordPressed", !0), QM.gameBridge.send("setServerCookie", {
              key: "joinDiscord",
              value: "true"
            }), "joinDiscord" in rM && hM.i.Tz("clientTaskProgress", {
              taskId: "joinDiscord",
              progress: 1
            })
          }
        }), (0, zM.jsx)(jM.d, {})]
      })
    }
    var YM = iM(19),
      NM = iM(1717),
      AM = iM(37482),
      xM = iM(34938),
      vM = iM(5003),
      FM = iM(143),
      BM = iM(1217),
      XM = iM(1440),
      IM = iM(2880),
      KM = iM(1188),
      qM = iM(1722),
      TM = iM(2533),
      VM = iM(2494),
      cM = iM(1963),
      Mr = iM(2148),
      rr = iM(1270),
      ir = iM(1548),
      Or = iM(37647),
      Sr = iM(37654),
      jr = iM(37658),
      ar = iM(37662),
      Pr = iM(37667),
      nr = iM(2950);

    function Qr(MM) {
      let {
        playersHere: rM,
        exclude: iM,
        PU: OM
      } = MM;
      const {
        t: jM
      } = (0, KM.A)(), aM = (0, nr.p)(nr.h), [PM, nM] = (0, SM.useState)([]), QM = [], LM = (MM, rM) => {
        const OM = [...iM, ...QM.map((MM => MM.player.name))];
        QM.length < 3 && !(0, Sr.j)(OM, MM.name) && QM.push({
          player: MM,
          status: rM
        })
      };
      for (const SM of rM) LM((0, Pr.h)(SM.name, SM.cosmetics, SM.ranks), jM("worldSocial:inThisWorld"));
      if ("loaded" === aM.state.status)
        for (const SM of aM.state.recentPlayers) SM.preview.name && !SM.preview.isError && LM({
          ...SM.preview,
          location: {
            status: "offline"
          }
        }, jM("worldSocial:playedWithYou"));
      const mM = MM => {
        nM((rM => [...rM, MM])), OM(MM).finally((() => {
          nM((rM => rM.filter((rM => rM !== MM))))
        }))
      };
      return (0, zM.jsx)(zM.Fragment, {
        children: QM.map(((MM, rM) => {
          let {
            player: iM,
            status: OM
          } = MM;
          return (0, zM.jsx)(Pr.g, {
            zIndex: QM.length - rM,
            player: iM,
            status: OM,
            onSendFriendRequest: () => {
              mM(iM.name)
            },
            actions: (0, zM.jsx)(XM.i, {
              tooltipInner: (0, zM.jsx)(zM.Fragment, {
                children: jM("recentPlayers:addFriend")
              }),
              delayShow: 0,
              hoverOnly: !0,
              children: (0, zM.jsx)(HM.e, {
                className: "FriendRequestButton",
                disabled: PM.includes(iM.name),
                ariaLabel: `${jM("recentPlayers:addFriend")} ${iM.name}`,
                onClick: () => {
                  mM(iM.name)
                },
                children: (0, zM.jsx)(dM.b, {
                  name: "user-plus"
                })
              })
            })
          }, `suggestion:${iM.name}`)
        }))
      })
    }
    var zr = iM(37678),
      Lr = iM(37687),
      mr = iM(1229),
      Hr = iM(1568),
      hr = iM(4684),
      Jr = iM(255),
      dr = iM(4981);
    const yr = ["auto", "auto_existing"];

    function lr(MM) {
      return yr.includes(MM)
    }

    function Er(MM, rM) {
      const iM = (0, mr.vb)(MM);
      return null !== rM && (0, mr.vb)(rM) === iM || (0, dr.c)().some((MM => (0, mr.vb)(MM.name) === iM))
    }
    const Ur = new Set;

    function Gr(MM) {
      return `worldSocialSeen:${MM}`
    }

    function Cr(MM) {
      return !MM || Ur.has(MM) || !0 === sM.g.getItem(Gr(MM))
    }

    function er(MM) {
      MM && !Ur.has(MM) && (Ur.add(MM), sM.g.setItem(Gr(MM), !0))
    }
    var br = iM(2647),
      wr = iM(2653);

    function tr(MM) {
      let {
        show: rM,
        onClose: iM,
        opener: OM
      } = MM;
      const {
        lobbyName: jM,
        shownLobbyName: PM
      } = (0, tM.j)("connectedGame");
      return (0, SM.useEffect)((() => {
        rM && (0, ir.reportAnalyticsClick)({
          id: "world_social.open",
          value: OM
        })
      }), [rM]), (0, zM.jsx)(aM.e, {
        show: rM && null !== jM,
        close: iM,
        togglePointerLock: !1,
        className: "WorldSocialBackgroundScreen",
        globallyUniqueKey: "WorldSocialPopup",
        doGameplayStartStopOnShow: !0,
        ignorePressesAsShown: "icon" !== OM,
        children: rM && null !== jM && (0, zM.jsx)(gr, {
          lobbyName: jM,
          worldCode: null !== PM && void 0 !== PM ? PM : jM,
          onClose: iM
        }, jM)
      })
    }

    function gr(MM) {
      var rM;
      let {
        lobbyName: iM,
        worldCode: OM,
        onClose: jM
      } = MM;
      const {
        t: aM
      } = (0, KM.A)(), PM = (0, SM.useRef)(null), {
        settings: nM,
        loading: QM,
        answered: LM,
        change: mM,
        retry: hM
      } = (0, Or.j)(iM), JM = (0, qM.m)(), yM = (0, tM.j)("players"), lM = (0, tM.j)("hiddenPlayerNames"), [EM, UM] = (0, SM.useState)([]), [GM, eM] = (0, SM.useState)([]), [bM, wM] = (0, SM.useState)(!1), uM = (0, br.d)(), RM = (0, SM.useMemo)((() => {
        var MM, rM;
        const iM = null === yM.localId ? null : null !== (MM = null === (rM = yM.byId[yM.localId]) || void 0 === rM ? void 0 : rM.name) && void 0 !== MM ? MM : null;
        return yM.ids.flatMap((MM => {
          const rM = yM.byId[MM];
          return null !== rM && void 0 !== rM && rM.name && rM.name !== iM ? [{
            name: rM.name,
            cosmetics: rM.cosmetics,
            ranks: rM.ranks
          }] : []
        }))
      }), [yM]), pM = (0, SM.useMemo)((() => (0, Sr.g)(JM.friends, iM, RM.map((MM => MM.name)))), [JM.friends, iM, RM]), sM = WM.featureFlags.canSeeRealPlayerNames ? RM.filter((MM => null === (0, rr.b)(MM.name, lM))) : [], DM = null !== nM && void 0 !== nM && nM.canManage ? nM : null, kM = null !== DM, ZM = null !== (rM = null === nM || void 0 === nM ? void 0 : nM.visibility) && void 0 !== rM ? rM : null, oM = "whitelist" === (null === DM || void 0 === DM ? void 0 : DM.visibility), fM = "private" === ZM || "whitelist" === ZM && !kM, {
        userContext: YM
      } = (0, CM.b)();
      (0, SM.useEffect)((() => {
        kM && Er(iM, YM.getPersonalWorldLobbyName()) && er(YM.whamm)
      }), [kM, iM, YM]);
      const NM = fM ? aM("whitelist" === ZM ? "socialBar:inviteWorldManagersOnly" : kM ? "worldSocial:privateLinkRow" : "socialBar:inviteWorldPrivate") : null,
        xM = null === NM;
      (0, SM.useEffect)((() => fM ? void 0 : cM.k.quietFriendAdded()), [fM]), (0, SM.useEffect)((() => cM.k.quietFriendRequests()), []);
      const nr = (0, SM.useRef)(!1);
      (0, SM.useEffect)((() => {
        const MM = PM.current,
          rM = !nr.current;
        nr.current = !0;
        const iM = null === document.activeElement || document.activeElement === document.body;
        null !== MM && void 0 !== MM && MM.contains(document.activeElement) || !rM && !iM || (0, AM.c)() || null === MM || void 0 === MM || MM.focus({
          preventScroll: !0
        })
      }), [xM]), (0, SM.useEffect)((() => {
        const MM = MM => {
          "Escape" !== MM.key || null !== document.activeElement && document.activeElement !== document.body || jM()
        };
        return document.addEventListener("keydown", MM), () => {
          document.removeEventListener("keydown", MM)
        }
      }), [jM]);
      const mr = null === nM && !LM,
        Hr = (QM || JM.loading) && 0 === JM.friends.length,
        hr = JM.friends.flatMap((MM => MM.name ? [MM.name] : [])),
        Jr = EM.filter((MM => !(0, Sr.j)(hr, MM))),
        dr = pM.length + 3,
        yr = Jr.length + dr,
        lr = bM ? JM.requests : JM.requests.slice(0, 1),
        Ur = async function(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (const iM of (0, Sr.l)(MM, vM.z)) {
            if (!await mM({
                whitelistAdd: iM
              }, (MM => (0, Sr.r)(MM, iM, !0)), {
                quiet: rM
              })) return !1
          }
          return !0
        }, Gr = MM => {
          if (oM && DM) return {
            on: (0, Sr.j)(DM.whitelist, MM),
            onChange: rM => {
              (0, ir.reportAnalyticsClick)({
                id: "world_social.whitelist_toggle",
                value: rM ? "on" : "off"
              }), mM(rM ? {
                whitelistAdd: [MM]
              } : {
                whitelistRemove: MM
              }, (iM => (0, Sr.r)(iM, [MM], rM)))
            }
          }
        }, Cr = async (MM, rM) => {
          (0, ir.reportAnalyticsClick)({
            id: "world_social.add_friend",
            value: rM
          });
          const iM = await (0, VM.h)(MM, "world_social");
          return (0, VM.b)(iM, MM, {
            announceSent: !1
          }), "failed" !== iM.kind && ("sent" === iM.kind && UM((rM => (0, Sr.j)(rM, MM) ? rM : [...rM, MM])), oM && await Ur([MM]), !0)
        };
      return (0, zM.jsxs)("div", {
        ref: PM,
        className: "WorldSocialPopup AnimFadeInScaleUp",
        tabIndex: -1,
        onKeyDown: MM => {
          MM.target === MM.currentTarget && " " === MM.key && MM.preventDefault()
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "WorldSocialTitle",
        children: [(0, zM.jsxs)("div", {
          className: "WorldSocialHeader",
          children: [(0, zM.jsx)("h2", {
            id: "WorldSocialTitle",
            className: "WorldSocialTitle SmallTextBold",
            children: aM("worldSocial:title")
          }), (0, zM.jsx)(HM.l, {
            className: "WorldSocialClose",
            onClick: jM
          })]
        }), mr && (0, zM.jsx)("div", {
          className: "WorldSocialLoading",
          children: (0, zM.jsx)(gM.d, {})
        }), !mr && (0, zM.jsxs)(zM.Fragment, {
          children: [(0, zM.jsx)(jr.e, {
            worldCode: OM,
            message: NM
          }), null === nM && !QM && (0, zM.jsx)("button", {
            type: "button",
            className: "WorldSocialLoadFailed",
            onClick: hM,
            children: aM("worldSocial:loadFailed")
          }), kM && null !== ZM && (0, zM.jsx)(ar.e, {
            visibility: ZM,
            onPick: MM => {
              (async MM => {
                if (MM === ZM) return;
                (0, ir.reportAnalyticsClick)({
                  id: "world_social.set_mode",
                  value: MM
                });
                const rM = [...(0, Lr.c)(iM), ...GM],
                  OM = "whitelist" === MM && nM ? (0, Sr.d)(pM, rM, nM.whitelist) : [];
                await mM({
                  setVisibility: MM
                }, (rM => ({
                  ...rM,
                  visibility: MM
                }))) && await Ur(OM)
              })(MM)
            }
          }), JM.requests.length > 0 && (0, zM.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, zM.jsx)(IM.d, {
              label: (0, zM.jsxs)(zM.Fragment, {
                children: [(0, zM.jsx)(dM.b, {
                  name: Mr.g
                }), " ", aM("socialBar:requests")]
              }),
              meta: (0, zM.jsxs)(zM.Fragment, {
                children: [JM.requests.length, JM.requests.length === BM.q && (0, zM.jsx)("span", {
                  className: "SocialSectionTitleLimit",
                  children: aM("socialBar:limitReached")
                }), !bM && JM.requests.length > 1 && (0, zM.jsx)("button", {
                  type: "button",
                  className: "WorldSocialMoreRequests",
                  onClick: () => {
                    wM(!0)
                  },
                  children: aM("worldSocial:moreRequests", {
                    count: JM.requests.length - 1
                  })
                })]
              })
            }), (0, zM.jsx)("div", {
              className: "PlayerRows",
              children: lr.map(((MM, rM) => (0, zM.jsx)(Pr.g, {
                zIndex: lr.length - rM,
                player: MM,
                actions: (0, zM.jsxs)(zM.Fragment, {
                  children: [(0, zM.jsx)(XM.i, {
                    tooltipInner: (0, zM.jsx)(zM.Fragment, {
                      children: aM("general:accept")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, zM.jsx)(HM.e, {
                      className: "FriendRequestButton",
                      ariaLabel: `${aM("general:accept")} ${MM.name}`,
                      analyticsClick: {
                        id: "social.accept_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, VM.e)(MM.name, !0, {
                          source: "world_social"
                        })
                      },
                      children: (0, zM.jsx)(dM.b, {
                        name: "check"
                      })
                    })
                  }), (0, zM.jsx)(XM.i, {
                    tooltipInner: (0, zM.jsx)(zM.Fragment, {
                      children: aM("general:decline")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, zM.jsx)(HM.i, {
                      className: "FriendRequestButton",
                      ariaLabel: `${aM("general:decline")} ${MM.name}`,
                      analyticsClick: {
                        id: "social.decline_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, VM.e)(MM.name, !1, {
                          source: "world_social"
                        })
                      },
                      children: (0, zM.jsx)(dM.b, {
                        name: "xmark"
                      })
                    })
                  })]
                })
              }, `incoming:${MM.name}`)))
            })]
          }), (0, zM.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, zM.jsx)(IM.d, {
              label: (0, zM.jsxs)(zM.Fragment, {
                children: [(0, zM.jsx)(dM.b, {
                  name: Mr.e
                }), " ", aM("socialBar:friends")]
              }),
              meta: JM.loaded && !fM ? JM.friends.length : void 0
            }), (0, zM.jsx)(zr.e, {
              label: aM("socialBar:sendRequest"),
              icon: "user-plus",
              placeholder: aM("worldSocial:addFriendPlaceholder"),
              onSubmit: async MM => await Cr(MM, "field") ? {
                ok: !0
              } : {
                ok: !1,
                error: null
              }
            }), Hr && (0, zM.jsx)("div", {
              className: "WorldSocialLoading",
              children: (0, zM.jsx)(gM.d, {})
            }), !Hr && (0, zM.jsxs)(zM.Fragment, {
              children: [(0, zM.jsxs)("div", {
                className: "PlayerRows",
                children: [Jr.map(((MM, rM) => (0, zM.jsx)(Pr.g, {
                  zIndex: yr - rM,
                  player: (0, Pr.h)(MM, null),
                  status: aM("worldSocial:requestSent"),
                  bL: Gr(MM)
                }, `request:${MM}`))), !fM && pM.map(((MM, rM) => (0, zM.jsx)(Pr.c, {
                  zIndex: dr - rM,
                  row: MM,
                  bL: Gr(MM.friend.name),
                  canInvite: (0, Sr.c)(nM) && "here" !== MM.place,
                  invited: GM.includes(MM.friend.name),
                  onInvite: () => {
                    (async MM => {
                      (0, ir.reportAnalyticsClick)({
                        id: "world_social.invite",
                        value: "friend"
                      });
                      const rM = () => {
                        eM((rM => rM.filter((rM => rM !== MM))))
                      };
                      eM((rM => [...rM, MM]));
                      const OM = (0, Sr.o)(nM, MM);
                      if ("none" !== OM) {
                        const iM = Ur([MM], "quiet" === OM);
                        if ("required" === OM && !await iM) return void rM()
                      }
                      await (0, TM.k)(MM, "game", {
                        announceSent: !1,
                        source: "world_social"
                      }) ? ((0, Lr.d)(iM, MM), setTimeout(rM, FM.v)) : rM()
                    })(MM.friend.name)
                  }
                }, MM.friend.name))), JM.loaded && 0 === JM.friends.length && (0, zM.jsx)(Qr, {
                  playersHere: sM,
                  exclude: EM,
                  PU: MM => Cr(MM, "suggestion")
                })]
              }), oM && JM.loaded && 0 === JM.friends.length && 0 === Jr.length && (0, zM.jsx)("div", {
                className: "WorldSocialEmpty",
                children: aM("worldSocial:whitelistNoFriends")
              })]
            })]
          })]
        }), uM && (0, zM.jsxs)(HM.V, {
          className: "WorldSocialManageLobby SmallTextLight",
          onClick: () => {
            (0, wr.h)({
              page: "players",
              source: "invite_popup"
            }), jM()
          },
          children: [(0, zM.jsx)(dM.b, {
            name: "users-gear"
          }), " ", aM("lobbyManageEntry:manageLobby")]
        })]
      })
    }
    var ur = iM(2674),
      Rr = iM(2645);

    function pr(MM) {
      let {
        show: rM,
        onClose: iM,
        option: OM
      } = MM;
      const jM = (0, tM.f)("connectedGame", (MM => (0, ur.b)(MM) ? MM.lobbyName : null));
      return function(MM) {
        const {
          gameEntrySource: rM,
          loadingOverlayVisible: iM
        } = (0, YM.m)(["gameEntrySource", "loadingOverlayVisible"]), {
          userContext: OM
        } = (0, CM.b)(), jM = (0, tM.j)("localPlayerAlive"), aM = (0, tM.f)("players", (MM => null !== MM.localId && void 0 !== MM.byId[MM.localId])), PM = (0, Rr.h)(), nM = (0, SM.useRef)(null), QM = (0, SM.useRef)(null), zM = "worldCreation" === rM, LM = OM.whamm, mM = OM.getPersonalWorldLobbyName();
        (0, SM.useEffect)((() => {
          var rM;
          null !== MM && (null === (rM = QM.current) || void 0 === rM ? void 0 : rM.lobbyName) !== MM && null !== kr(MM, zM, LM, mM) && (QM.current = (0, Or.g)(MM))
        }), [zM, MM, LM, mM]), (0, SM.useEffect)((() => {
          if (null !== MM && (!iM && jM && aM)) return PM.whenShown((() => {
            var rM;
            const iM = nM.current === MM ? null : kr(MM, zM, LM, mM);
            if (null === iM) return;
            const OM = (null === (rM = QM.current) || void 0 === rM ? void 0 : rM.lobbyName) === MM ? QM.current : (0, Or.g)(MM);
            QM.current = null, nM.current = MM,
              function(MM, rM, iM, OM) {
                const {
                  lobbyName: SM
                } = MM, jM = () => {
                  ! function(MM, rM) {
                    if (!Nr()) return void rM(!0);
                    const iM = performance.now() + fr;
                    let OM = 0;
                    const SM = () => {
                      OM = Nr() ? 0 : OM + 1, OM >= 2 ? rM(!0) : !Yr(MM) || performance.now() > iM ? rM(!1) : setTimeout(SM, or)
                    };
                    setTimeout(SM, or)
                  }(SM, (jM => {
                    OM();
                    const aM = "auto_existing" === rM && Cr(iM);
                    jM && Yr(SM) && !sr(SM) && !aM && (Zr(MM) ? Dr(SM) : (Dr(SM), er(iM), function(MM) {
                      const rM = Jr.e.world_social_popup_v1;
                      return (0, Jr.l)("world_social_popup_v1"), (0, ir.reportAnalyticsClick)({
                        id: "world_social.auto_open",
                        value: `${rM}:${(0,hr.c)()}:${MM}`
                      }), (0, Hr.flushClientAnalyticsEvents)(), "auto_open" === rM
                    }(rM) && ((0, Or.e)(MM), hM.i.Tz("toggleMenu", `inviteLink|${rM}`), "inviteLink" !== YM.d.get("openInGameMenuName") && console.warn("World social popup: the auto-open asked for it, but it didn't open"))))
                  }))
                };
                if ("auto" === rM && !Zr(MM)) return void jM();
                MM.response.then((MM => {
                  if (!("error" in MM)) return MM.settings.canManage ? void jM() : (Dr(SM), void OM());
                  OM()
                }))
              }(OM, iM, LM, (() => {
                nM.current === MM && (nM.current = null)
              }))
          }))
        }), [PM, zM, iM, MM, jM, aM, LM, mM])
      }(jM), (0, SM.useEffect)((() => {
        rM && null !== jM && Dr(jM)
      }), [rM, jM]), null !== jM ? (0, zM.jsx)(tr, {
        show: rM,
        onClose: iM,
        opener: lr(OM) ? OM : "icon"
      }) : (0, zM.jsx)(xM.d, {
        show: rM,
        onClose: iM
      })
    }
    const Wr = new Set;

    function sr(MM) {
      return Wr.has(MM) || !!sM.k.getItem(`worldSocialShown:${MM}`)
    }

    function Dr(MM) {
      Wr.add(MM), sM.k.setItem(`worldSocialShown:${MM}`, !0)
    }

    function kr(MM, rM, iM, OM) {
      return sr(MM) ? null : function(MM) {
        let {
          justMade: rM,
          playerId: iM,
          lobbyName: OM,
          personalWorld: SM
        } = MM;
        return rM ? "auto" : !Cr(iM) && Er(OM, SM) ? "auto_existing" : null
      }({
        justMade: rM,
        playerId: iM,
        lobbyName: MM,
        personalWorld: OM
      })
    }

    function Zr(MM) {
      let {
        answer: rM
      } = MM;
      return null !== rM && "settings" in rM && !rM.settings.canManage
    }
    const or = 500,
      fr = 3e4;

    function Yr(MM) {
      return "inGame" === YM.d.get("gameState") && QM.gameBridge.latest("connectedGame").lobbyName === MM
    }

    function Nr() {
      return (0, AM.c)() || YM.d.get("loadingOverlayVisible") || (0, NM.r)()
    }
    var Ar = iM(37696),
      xr = iM(3571),
      vr = iM(2093),
      Fr = iM(3563);

    function Br(MM, rM, iM) {
      return Fr.e.overridesTexture(MM) ? Fr.e.getTexture(MM, rM).url : iM
    }
    var Xr = iM(10557);
    const Ir = (MM, rM) => {
        (0, SM.useEffect)((() => {
          setTimeout((() => {
            MM && MM.current && MM.current.focus()
          }), 1)
        }), [rM])
      },
      Kr = (0, SM.memo)((function(MM) {
        let {
          isInputActive: rM,
          onClose: iM,
          onChange: OM,
          textAreaRef: SM,
          fontSize: jM,
          lineHeight: aM,
          currText: PM
        } = MM;
        return (0, zM.jsxs)("div", {
          className: "WriteOnBoardWrapper",
          children: [(0, zM.jsx)("img", {
            src: Br("board_full", xr.f.BLOCK, Xr),
            alt: "Board",
            className: "WriteOnBoardImg"
          }), (0, zM.jsx)("textarea", {
            className: "WriteOnBoardTextArea",
            value: PM,
            ref: SM,
            style: {
              fontSize: `${jM}rem`,
              lineHeight: `${aM}rem`
            },
            onKeyDown: MM => {
              var rM;
              "Escape" !== MM.key && (MM.stopPropagation(), "Tab" === MM.key && function(MM) {
                MM.preventDefault();
                const rM = MM.target,
                  {
                    value: iM
                  } = rM;
                let OM = rM.selectionStart,
                  SM = rM.selectionEnd,
                  jM = iM.slice(OM, SM);
                if (!jM.includes("\n") && !MM.shiftKey) return void document.execCommand("insertText", !1, "\t");
                for (; OM > 0 && "\n" !== iM[OM - 1];) OM--;
                const aM = "\n" === iM[SM - 1];
                aM && SM--;
                jM = iM.slice(OM, SM);
                const PM = jM.split("\n").map((rM => MM.shiftKey ? rM.replace(/^\t/, "") : "\t" + rM)).join("\n");
                if (MM.shiftKey && iM.slice(OM, SM) === PM) return;
                let {
                  selectionStart: nM
                } = rM;
                rM.setSelectionRange(OM, SM), nM > OM && (!MM.shiftKey || "\t" === jM[0]) && (nM += MM.shiftKey ? -1 : 1);
                SM = OM + PM.length + (aM ? 1 : 0), document.execCommand("insertText", !1, PM), rM.setSelectionRange(nM, SM)
              }(MM), /^F\d+$/i.test(MM.code) && null !== (rM = vr.v.OpenCodeEditor) && void 0 !== rM && rM.includes(MM.code) && iM())
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: OM
          })]
        })
      }));

    function qr(MM) {
      return 1.3 * MM
    }
    var Tr = iM(1765);
    const Vr = (0, SM.memo)((function(MM) {
        let {
          show: rM,
          onOpen: iM,
          onClose: OM
        } = MM;
        const [jM, PM] = (0, SM.useState)(null), [nM, LM] = (0, SM.useState)(""), [mM, hM] = (0, SM.useState)(0), [JM, dM] = (0, SM.useState)(null), [yM, lM] = (0, SM.useState)({
          text: "",
          textSize: 0
        }), EM = (MM, rM) => JM ? (0, Ar.l)(MM, rM, JM.width, JM.height) : (0, Ar.g)(MM, rM), UM = MM => {
          LM(EM(nM, MM)), hM(MM), sM.g.setItem("lastBoardTextSize", MM)
        }, GM = () => {
          OM(), JM && nM === yM.text && mM === yM.textSize || QM.gameBridge.send("writeOnBoard", {
            pos: jM,
            text: nM,
            textSize: mM
          })
        };
        (0, tM.c)("boardEditRequested", (MM => {
          var SM, jM;
          if (!WM.featureFlags.canSeePlayerWrittenText) return;
          if (null === MM) return PM(null), void(rM && OM());
          const {
            pos: aM,
            noticeboardSpan: nM,
            text: QM
          } = MM;
          PM(aM), dM(nM), LM(QM);
          const zM = null !== (SM = null !== (jM = MM.textSize) && void 0 !== jM ? jM : sM.g.getItem("lastBoardTextSize")) && void 0 !== SM ? SM : 0;
          hM(zM), lM({
            text: QM,
            textSize: zM
          }), sM.g.setItem("lastBoardTextSize", zM), iM()
        }));
        const CM = (0, SM.useRef)(null);
        Ir(CM, rM), (0, Tr.s)(CM, {
          kind: "sign",
          submit: GM
        });
        const eM = function(MM, rM) {
            const iM = Ar.e[MM];
            if (!rM) return iM.uiFontSize;
            const {
              numLines: OM,
              charsPerLine: SM
            } = (0, Ar.r)(rM.width, rM.height, MM);
            return iM.uiFontSize * Math.min(iM.charsPerLine / SM, iM.numLines / OM)
          }(mM, JM),
          bM = qr(eM);
        return (0, zM.jsxs)(aM.e, {
          className: "WriteOnBoardBg",
          close: GM,
          escDoesExit: !0,
          show: rM,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, zM.jsx)(Kr, {
            isInputActive: () => rM,
            onClose: GM,
            onChange: MM => {
              LM(EM(MM.target.value, mM))
            },
            textAreaRef: CM,
            fontSize: eM,
            lineHeight: bM,
            currText: nM
          }), (0, zM.jsx)("div", {
            className: "WriteOnBoardTextSizeHeader SmallTextBold",
            children: "Text Size"
          }), (0, zM.jsxs)("div", {
            className: "WriteOnBoardTextSizeButtons",
            children: [(0, zM.jsx)(HM.e, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                UM(0)
              },
              disabled: 0 === mM,
              children: "Small"
            }), (0, zM.jsx)(HM.e, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                UM(1)
              },
              disabled: 1 === mM,
              children: "Medium"
            }), (0, zM.jsx)(HM.e, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                UM(2)
              },
              disabled: 2 === mM,
              children: "Large"
            })]
          })]
        })
      })),
      cr = (0, SM.memo)((function(MM) {
        let {
          show: rM,
          onOpen: iM,
          onClose: OM
        } = MM;
        const [jM, PM] = (0, SM.useState)(""), nM = () => {
          OM(), QM.gameBridge.send("writeNameTag", jM)
        };
        (0, bM.d)("EditNameTag", (MM => {
          WM.featureFlags.canSeePlayerWrittenText && null !== MM && (PM(MM), iM())
        }));
        const LM = (0, SM.useRef)(null);
        Ir(LM, rM), (0, Tr.s)(LM, {
          kind: "nameTag",
          submit: nM
        });
        const mM = Ar.C.nameTag.uiFontSize,
          hM = qr(mM);
        return (0, zM.jsxs)(aM.e, {
          className: "WriteOnBoardBg",
          close: nM,
          escDoesExit: !0,
          show: rM,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, zM.jsx)("div", {
            className: "NameTagTrim",
            children: (0, zM.jsx)(Kr, {
              isInputActive: () => rM,
              onClose: nM,
              onChange: MM => {
                const rM = MM.target.value.replaceAll("\n", "");
                PM((0, Ar.o)(rM, "nameTag"))
              },
              textAreaRef: LM,
              fontSize: mM,
              lineHeight: hM,
              currText: jM
            })
          }), (0, zM.jsx)(HM.e, {
            onClick: nM,
            className: "WriteOnNameTagCloseButton",
            children: "Finish"
          })]
        })
      }));
    var Mi = iM(18684);
    const ri = (0, SM.memo)((function(MM) {
      let {
        show: rM,
        onOpen: iM,
        onClose: OM
      } = MM;
      const [jM, PM] = (0, SM.useState)(""), [nM, LM] = (0, SM.useState)(0), [mM, hM] = (0, SM.useState)(!1), [JM, dM] = (0, SM.useState)(["", "", "", "", "", "", "", "", "", ""]), [yM, lM] = (0, SM.useState)("Title"), [EM, UM] = (0, SM.useState)(!0), [GM, CM] = (0, SM.useState)(!1);
      (0, bM.d)("EditBook", (MM => {
        let {
          pages: rM,
          title: OM,
          isPublished: SM
        } = MM;
        var jM;
        WM.featureFlags.canSeePlayerWrittenText && (null !== rM ? (dM(rM), PM(null !== (jM = rM[0]) && void 0 !== jM ? jM : ""), lM(OM), LM(0), hM(!1), UM(!SM), CM(!1), iM()) : dM(["", "", "", "", "", "", "", "", "", ""]))
      }));
      const eM = (0, SM.useRef)(null),
        wM = (0, SM.useRef)(null);
      Ir(eM, rM), (0, Tr.s)(eM, {
        kind: "book"
      }), (0, Tr.s)(wM, {
        kind: "nQ"
      });
      const tM = Ar.C.book.uiFontSize,
        gM = qr(tM),
        uM = () => {
          (EM || GM) && QM.gameBridge.send("writeBook", {
            pages: [...JM],
            title: yM,
            published: !EM && GM
          })
        },
        RM = MM => {
          mM && (JM[nM] = jM, hM(!1)), PM(JM[MM]), LM(MM)
        };
      return (0, zM.jsxs)(aM.e, {
        className: "WriteOnBoardBg",
        close: () => {
          OM(), JM[nM] = jM, uM()
        },
        escDoesExit: !0,
        show: rM,
        togglePointerLock: !1,
        globallyUniqueKey: "WriteOnBookComp",
        children: [(0, zM.jsxs)("div", {
          className: "WriteOnBookWrapper",
          children: [(0, zM.jsx)("textarea", {
            className: "BookTitleTextArea SmallTextLight",
            value: yM,
            ref: wM,
            style: {
              fontSize: "2.5rem",
              lineHeight: `${gM}rem`
            },
            onKeyDown: MM => {
              EM && MM.stopPropagation()
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: MM => {
              let rM = MM.target.value;
              rM = (0, Ar.o)(rM, "nQ"), lM(rM)
            },
            readOnly: !EM
          }), (0, zM.jsx)("img", {
            src: Br("book_page", xr.f.ITEM, Mi),
            alt: "book_page",
            className: "WriteOnBookPageImg"
          }), (0, zM.jsx)("div", {
            className: "BookTextAreaPadding",
            children: (0, zM.jsx)("textarea", {
              className: "WriteOnBookPageTextArea",
              value: jM,
              ref: eM,
              style: {
                fontSize: `${tM}rem`,
                lineHeight: `${gM}rem`
              },
              onKeyDown: MM => {
                EM && MM.stopPropagation()
              },
              spellCheck: "false",
              autoComplete: "off",
              onChange: MM => {
                const rM = MM.target.value;
                PM((0, Ar.o)(rM, "book")), hM(!0)
              },
              readOnly: !EM
            })
          })]
        }), (0, zM.jsxs)("div", {
          className: "BookNavigationWrapper",
          children: [(0, zM.jsx)(HM.e, {
            disabled: 0 === nM,
            onClick: () => {
              RM(nM - 1)
            },
            className: "BookNavButton",
            children: "<"
          }), (0, zM.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, zM.jsx)(HM.e, {
            disabled: 9 === nM,
            onClick: () => {
              RM(nM + 1)
            },
            className: "BookNavButton",
            children: ">"
          }), (0, zM.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, zM.jsx)(HM.e, {
            onClick: () => {
              UM(!EM), CM(!0)
            },
            className: "BookNavButton",
            children: EM ? "Publish" : "Edit"
          })]
        })]
      })
    }));
    var ii = iM(37544),
      Oi = iM(9293),
      Si = iM(1464),
      ji = iM(2026);

    function ai(MM) {
      let {
        show: rM,
        buttons: iM
      } = MM;
      const {
        t: OM
      } = (0, KM.A)(), jM = (0, SM.useRef)(null);
      return (0, SM.useEffect)((() => {
        var MM, iM;
        const OM = rM ? (0, ii.B)() : null;
        if (!OM || !(0, Si.l)()) return;
        const SM = (0, ii.j)().findIndex((MM => MM.id === OM));
        (0, Oi.r)(null !== (MM = null === (iM = jM.current) || void 0 === iM ? void 0 : iM.children[SM]) && void 0 !== MM ? MM : null)
      }), [rM]), 0 === iM.length ? null : (0, zM.jsx)("div", {
        ref: jM,
        className: "ClientGameInventoryButtons",
        onPointerDown: MM => {
          MM.stopPropagation()
        },
        onPointerUp: MM => {
          MM.stopPropagation()
        },
        children: iM.map((MM => {
          const rM = OM(MM.labelKey);
          return (0, zM.jsxs)(HM.p, {
            className: MM.className,
            disabled: MM.disabled,
            onClick: () => {
              (0, ii.u)(MM)
            },
            ariaLabel: MM.iconOnly ? rM : void 0,
            title: MM.iconOnly ? rM : void 0,
            children: [MM.icon && (0, zM.jsxs)("div", {
              className: "ClientGameInventoryButtonIcon",
              children: ["item" === MM.icon.kind && (0, zM.jsx)(ji.b, {
                itemName: MM.icon.name,
                amount: 0
              }), "image" === MM.icon.kind && (0, zM.jsx)("img", {
                src: MM.icon.src,
                alt: "",
                draggable: !1
              }), "icon" === MM.icon.kind && (0, zM.jsx)(dM.b, {
                name: MM.icon.name
              })]
            }), !MM.iconOnly && rM]
          }, MM.id)
        }))
      })
    }
    var Pi = iM(37699),
      ni = iM(3038),
      Qi = iM(35035),
      zi = iM(37476),
      Li = iM(37467);
    let mi = null;
    window.setShowInventoryAdsOverride = MM => {
      mi = MM
    };
    const Hi = 24e4;
    var Ji = iM(2032);

    function di(MM) {
      var rM;
      let {
        draggedInfo: {
          name: iM,
          attributes: OM,
          amount: SM
        },
        toAddRef: jM
      } = MM;
      return (0, zM.jsx)("div", {
        className: "DraggedInvenItem",
        ref: jM,
        children: (0, zM.jsx)(ji.b, {
          itemName: iM,
          amount: SM,
          enchantmentTier: null === OM || void 0 === OM || null === (rM = OM.customAttributes) || void 0 === rM ? void 0 : rM.enchantmentTier,
          bar: (0, Ji.f)(OM)
        })
      })
    }

    function yi(MM) {
      let {
        className: rM = "",
        displayInfo: iM,
        domRef: OM
      } = MM;
      return (0, zM.jsxs)("div", {
        className: `InvenHoveredItemInfo SmallTextBold ${rM}`,
        ref: OM,
        children: [(0, zM.jsx)(eM.b, {
          text: (0, wM.ob)(iM.name, {
            fontStyle: iM.fontStyle
          })
        }), (0, zM.jsx)("div", {
          className: "InvenHoveredItemInfoDescription",
          children: (0, zM.jsx)(eM.b, {
            text: iM.desc
          })
        })]
      })
    }

    function li(MM) {
      let {
        info: rM,
        draggedInfo: iM
      } = MM;
      const OM = (0, SM.useRef)(null);
      return (0, SM.useLayoutEffect)((() => {
        const MM = OM.current,
          {
            left: iM,
            top: SM
          } = function(MM, rM, iM, OM) {
            const SM = OM.left * iM.width / 100 + 4,
              jM = iM.width - OM.right * iM.width / 100 - 4 - rM.width,
              aM = OM.top * iM.height / 100 + 4,
              PM = iM.height - 4 - rM.height;
            return {
              left: Math.max(SM, Math.min(MM.x - rM.width / 2, jM)),
              top: Math.max(aM, Math.min(MM.y - 48 - rM.height, PM))
            }
          }({
            x: rM.initTouchX,
            y: rM.initTouchY
          }, {
            width: MM.offsetWidth,
            height: MM.offsetHeight
          }, {
            width: window.innerWidth,
            height: window.innerHeight
          }, YM.d.get("notchSize"));
        MM.style.left = `${iM}px`, MM.style.top = `${SM}px`
      }), [rM]), (0, zM.jsxs)("div", {
        className: "LongHoldSplitInfoUI SmallTextBold",
        ref: OM,
        children: [(0, zM.jsx)("div", {
          className: "LongHoldSplitInfoUIInner",
          style: {
            width: iM.amount / rM.maxAmount * 100 + "%"
          }
        }), (0, zM.jsxs)("div", {
          className: "LongHoldSplitInfoUIText",
          children: [iM.amount, "/", rM.maxAmount]
        })]
      })
    }
    var Ei = iM(1116),
      Ui = iM.n(Ei),
      Gi = iM(181);
    const Ci = (0, SM.memo)((function(MM) {
      let {
        show: rM,
        onOpen: iM,
        onClose: OM
      } = MM;
      const jM = (0, SM.useRef)({
          pos: null
        }),
        [PM, nM] = (0, SM.useState)([0, 0, 0, 0]),
        {
          userContext: LM
        } = (0, CM.b)();
      (0, tM.c)("ironChestOpenRequested", (MM => {
        let {
          pos: rM,
          ownerDbId: OM,
          cachedPasskey: SM
        } = MM;
        if (jM.current.pos = rM, OM !== LM.whamm) return null !== SM ? (nM(SM), void mM(SM)) : void iM();
        mM(PM)
      })), (0, tM.c)("localEffectUpdated", (MM => {
        "Thief" === MM && OM()
      }));
      const mM = MM => {
        const {
          pos: rM
        } = jM.current;
        QM.gameBridge.send("openIronChest", {
          pos: rM,
          oa: MM
        })
      };
      return (0, zM.jsx)(aM.e, {
        className: "IronChestPasskeyInputScreenOuter",
        close: OM,
        escDoesExit: !0,
        show: rM,
        togglePointerLock: !1,
        globallyUniqueKey: "IronChestPasskeyInputScreen",
        children: (0, zM.jsx)("div", {
          className: "IronChestPasskeyInputScreen",
          children: (0, zM.jsx)(ei, {
            oa: PM,
            onPasskeyUpdated: nM,
            confirmText: "ironChest:tryUnlock",
            onConfirm: () => {
              mM(PM)
            }
          })
        })
      })
    }));

    function ei(MM) {
      let {
        className: rM = "",
        oa: iM,
        onPasskeyUpdated: OM,
        confirmText: SM,
        onConfirm: jM
      } = MM;
      const {
        t: aM
      } = (0, KM.A)();
      return (0, zM.jsxs)("div", {
        className: `${rM} IronChestPasskeyInput`,
        children: [(0, zM.jsx)("div", {
          className: "SmallTextBold IronChestPasskeyInputTitle",
          children: aM("ironChest:passkeyInputTitle")
        }), (0, zM.jsx)("div", {
          className: "IronChestPasskeyInputRow",
          children: new Array(Gi.f.ironChestPasskeyLength).fill(0).map(((MM, rM) => (0, zM.jsx)(bi, {
            digit: iM[rM],
            onPasskeyDigitUpdated: MM => {
              const SM = [...iM];
              SM[rM] = MM, OM(SM)
            }
          }, rM)))
        }), (0, zM.jsx)(HM.p, {
          className: "IronChestPasskeyInputConfirmButton",
          onClick: jM,
          children: aM(SM)
        })]
      })
    }

    function bi(MM) {
      let {
        digit: rM,
        onPasskeyDigitUpdated: iM
      } = MM;
      return (0, zM.jsx)("div", {
        className: "IronChestPasskeyDigitInputWrapper",
        children: (0, zM.jsxs)("div", {
          className: "IronChestPasskeyDigitInput",
          children: [(0, zM.jsx)(HM.p, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              iM(wM.d.mod(rM + 1, 10))
            },
            children: (0, zM.jsx)(dM.b, {
              name: "angle-up"
            })
          }), (0, zM.jsx)("div", {
            className: "SmallTextBold IronChestPasskeyDigit",
            children: rM
          }), (0, zM.jsx)(HM.p, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              iM(wM.d.mod(rM - 1, 10))
            },
            children: (0, zM.jsx)(dM.b, {
              name: "angle-down"
            })
          })]
        })
      })
    }
    var wi = iM(35029),
      ti = iM(37764),
      gi = iM(37464);

    function ui(MM) {
      let {
        specialItemInfo: rM,
        setHovered: iM,
        pointerDown: OM,
        pointerUp: jM,
        enchantingTablePosition: aM,
        enchantingTableBlockName: PM
      } = MM;
      const {
        t: LM
      } = (0, KM.A)(), [mM, hM] = (0, SM.useState)(null), [JM, dM] = (0, SM.useState)(null), yM = (0, nM.f)("auraPerLevel"), lM = Math.floor((0, tM.j)("aura") / yM);
      (0, SM.useEffect)((() => {
        if (!rM) return void hM(null);
        let MM = !0;
        return QM.gameBridge.query("enchantingOffer", {
          slot: rM.idx,
          name: rM.name,
          blockName: PM
        }).then((iM => {
          var OM, SM;
          let {
            perks: jM,
            options: aM
          } = iM;
          if (!MM) return;
          const PM = {
            isEnchantable: jM.length > 0,
            possibleEnchantments: jM,
            options: aM.map((MM => {
              let {
                level: rM,
                odds: iM
              } = MM;
              return {
                level: rM,
                possibilities: Object.fromEntries(iM.map(((MM, rM) => [`Tier ${rM+1}`, MM])))
              }
            })),
            isAlreadyEnchanted: jM.length > 0 && void 0 !== (null === (OM = rM.attributes) || void 0 === OM || null === (SM = OM.customAttributes) || void 0 === SM ? void 0 : SM.enchantmentTier)
          };
          hM(PM), (MM => {
            const rM = MM.options.map((MM => Object.entries(MM.possibilities).map((MM => {
              let [rM, iM] = MM;
              return {
                str: `${rM}: ${iM>0?iM<.01?iM.toPrecision(1):iM.toFixed(2):0}%\n`,
                style: {
                  color: wM.kb[rM]
                }
              }
            }))));
            dM(rM)
          })(PM)
        })), () => {
          MM = !1
        }
      }), [rM, aM, PM]);
      const EM = [];
      for (let SM = 0; SM < ti.d; SM++) {
        const MM = null === mM || void 0 === mM ? void 0 : mM.options[SM],
          OM = !MM || MM.level > lM;
        EM.push((0, zM.jsx)(HM.e, {
          className: "EnchantmentButton",
          onPointerEnter: MM ? MM => null === iM || void 0 === iM ? void 0 : iM()(!0, {
            name: "",
            desc: JM[SM]
          }, MM) : void 0,
          onPointerLeave: MM ? () => null === iM || void 0 === iM ? void 0 : iM()(!1) : void 0,
          onClick: OM ? void 0 : () => {
            QM.gameBridge.send("enchantItem", {
              slot: rM.idx,
              level: MM.level,
              tablePos: aM
            }), hM(null)
          },
          disabled: OM,
          children: MM ? (0, zM.jsxs)(zM.Fragment, {
            children: [(0, zM.jsxs)("h1", {
              className: "EnchantmentLevels",
              children: [(0, zM.jsxs)("span", {
                className: "EnchantmentLevelsCost",
                children: [LM("enchantments:cost"), ": "]
              }), " ", LM("enchantments:levels", {
                level: MM.level
              })]
            }), (0, zM.jsxs)("div", {
              className: "EnchantmentPossibilities",
              children: [(0, zM.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, zM.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: LM("enchantments:tier")
                }), Object.entries(MM.possibilities).map((MM => {
                  let [rM, iM] = MM;
                  return 0 === iM ? null : (0, zM.jsx)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: wM.kb[rM]
                    },
                    children: rM
                  }, rM)
                }))]
              }), (0, zM.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, zM.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: LM("enchantments:odds")
                }), Object.entries(MM.possibilities).map((MM => {
                  let [rM, iM] = MM;
                  return 0 === iM ? null : (0, zM.jsxs)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: wM.kb[rM]
                    },
                    children: [iM > 0 && iM < .1 ? "<0.1" : iM.toFixed(0 < iM && iM < .95 ? 1 : 0), "%"]
                  }, rM)
                }))]
              })]
            })]
          }) : !1 === (null === mM || void 0 === mM ? void 0 : mM.isEnchantable) ? (0, zM.jsx)("h1", {
            className: "EnchantmentLevels",
            children: LM("enchantments:notEnchantable")
          }) : (0, zM.jsx)("h1", {
            className: "EnchantmentLevels",
            children: LM("enchantments:enterItem")
          })
        }, SM))
      }
      return (0, zM.jsxs)("div", {
        className: "EnchantingTable",
        children: [(0, zM.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: PM
        }), (0, zM.jsxs)("div", {
          className: "EnchantingTableBody",
          children: [(0, zM.jsxs)("div", {
            className: "EnchantingTableLeft",
            children: [(0, zM.jsx)(gi.d, {
              idx: Li.e,
              setHovered: MM => {
                null === iM || void 0 === iM || iM(Li.e)(MM)
              },
              pointerDown: OM,
              pointerUp: jM,
              draggedInfo: null,
              specialItemInfo: rM,
              variation: "Enchanting Table"
            }), mM && mM.possibleEnchantments.length > 0 && (0, zM.jsxs)("div", {
              className: "PossibleEnchantments",
              children: [(0, zM.jsx)("h2", {
                children: "Possible Perks:"
              }), mM.possibleEnchantments.map((MM => (0, zM.jsxs)(SM.Fragment, {
                children: [(0, zM.jsxs)("div", {
                  className: "PossibleEnchantmentName",
                  children: [(0, zM.jsx)("div", {
                    className: "PossibleEnchantmentIcon",
                    children: (0, zM.jsx)(ji.b, {
                      itemName: `${MM} Enchantment`,
                      amount: 1
                    })
                  }), (0, zM.jsx)("div", {
                    className: "PossibleEnchantmentNameText",
                    children: MM
                  })]
                }), (0, zM.jsx)("div", {
                  className: "PossibleEnchantmentDescription",
                  children: LM((0, wi.k)(MM).translationKey)
                })]
              }, MM)))]
            })]
          }), (0, zM.jsxs)("div", {
            className: "EnchantmentOptions",
            children: [mM && mM.isAlreadyEnchanted && (0, zM.jsx)("div", {
              className: "AlreadyEnchantedWarning",
              children: LM("enchantments:alreadyEnchanted")
            }), EM]
          })]
        })]
      })
    }
    var Ri = iM(37767);

    function Wi(MM) {
      var rM;
      let {
        specialItemInfo: iM,
        setSpecialItemInfo: OM,
        setHovered: jM,
        pointerDown: aM,
        pointerUp: PM
      } = MM;
      const {
        t: nM
      } = (0, KM.A)(), LM = (0, tM.f)("inventory", (MM => MM.freeSlots)), [mM, hM] = (0, SM.useState)(null);
      (0, SM.useEffect)((() => {
        if (iM) {
          const MM = (0, Ri.d)(iM.name, iM.amount);
          hM({
            salvageable: !!MM,
            produces: MM
          })
        } else hM(null)
      }), [iM, null === iM || void 0 === iM ? void 0 : iM.name, null === iM || void 0 === iM ? void 0 : iM.amount]);
      const JM = !!iM && !(null === mM || void 0 === mM || !mM.salvageable) && !(null !== (rM = mM.produces) && void 0 !== rM && rM.some((MM => {
        let {
          amt: rM
        } = MM;
        return rM < 1
      })));
      return (0, zM.jsxs)("div", {
        className: "SalvagingTable",
        children: [(0, zM.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: nM("item:salvagingTable")
        }), (0, zM.jsxs)("div", {
          className: "SalvagingTableBody",
          children: [(0, zM.jsx)("div", {
            className: "SalvagingTableLeft",
            children: (0, zM.jsx)(gi.d, {
              idx: Li.e,
              setHovered: MM => {
                null === jM || void 0 === jM || jM(Li.e)(MM)
              },
              pointerDown: aM,
              pointerUp: PM,
              draggedInfo: null,
              specialItemInfo: iM,
              variation: "Salvaging Table"
            })
          }), (0, zM.jsx)("div", {
            className: "SalvagingTableRight",
            children: (0, zM.jsx)(HM.e, {
              className: "SalvageButton",
              onClick: JM ? () => {
                const {
                  idx: MM,
                  name: rM,
                  amount: SM
                } = iM;
                QM.gameBridge.send("salvageItem", {
                  slot: MM,
                  name: rM,
                  amount: SM
                }) && (hM(null), OM(null))
              } : void 0,
              disabled: !JM,
              children: mM ? mM.salvageable ? mM.produces.some((MM => {
                let {
                  amt: rM
                } = MM;
                return rM < 1
              })) ? (0, zM.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, zM.jsx)("div", {
                  className: "SalvageText Error",
                  children: nM("salvagingTable:notEnoughResources")
                })
              }) : LM < mM.produces.length ? (0, zM.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, zM.jsx)("div", {
                  className: "SalvageText Error",
                  children: nM("salvagingTable:notEnoughInventorySpace")
                })
              }) : (0, zM.jsxs)("div", {
                className: "SalvageButtonText",
                children: [(0, zM.jsx)("div", {
                  className: "SalvageText",
                  children: nM("salvagingTable:salvage")
                }), (0, zM.jsx)("div", {
                  className: "SalvageIcons",
                  children: mM.produces.map(((MM, rM) => {
                    let {
                      item: iM,
                      amt: OM
                    } = MM;
                    return (0, zM.jsx)("div", {
                      className: "SalvageIcon",
                      children: (0, zM.jsx)(ji.b, {
                        itemName: iM,
                        amount: Math.floor(OM)
                      })
                    }, rM)
                  }))
                })]
              }) : (0, zM.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, zM.jsx)("div", {
                  className: "SalvageText Error",
                  children: nM("salvagingTable:unsalvageable")
                })
              }) : (0, zM.jsx)(zM.Fragment, {})
            })
          })]
        })]
      })
    }
    var si = iM(187),
      Di = iM(9816),
      ki = iM(2932),
      Zi = iM(1763),
      oi = iM(9310),
      fi = iM(9301),
      Yi = iM(1750),
      Ni = iM(2104),
      Ai = iM(1474),
      xi = iM(2198);

    function vi(MM, rM, iM) {
      const OM = MM.trim().toLowerCase();
      if ("" === OM) return 0;
      let SM = null;
      for (const jM of rM) {
        const MM = jM.toLowerCase().indexOf(OM);
        if (0 === MM) return 0;
        MM > 0 && (SM = 1)
      }
      if (null !== SM) return SM;
      for (const jM of iM)
        if (jM.toLowerCase().includes(OM)) return 2;
      return null
    }

    function Fi(MM) {
      return MM.map((MM => {
        var rM;
        return MM ? {
          name: MM.name,
          amount: null !== (rM = MM.amount) && void 0 !== rM ? rM : 1
        } : null
      }))
    }

    function Bi(MM) {
      return MM < 1e3 ? `${MM}` : MM < 1e4 ? Math.floor(MM / 100) / 10 + "k" : `${Math.floor(MM/1e3)}k`
    }
    var Xi = iM(37769);
    const Ii = HM.e,
      Ki = {
        initialDelayMs: 400,
        intervalMs: 100
      },
      qi = () => {
        const MM = (0, Ai.d)();
        return MM ? MM.getPadRepeatTiming(Ki) : Ki
      };

    function Ti(MM, rM, iM) {
      var OM, SM;
      const jM = (0, Qi.u)(rM, MM);
      let aM = null === (OM = rM[MM]) || void 0 === OM ? void 0 : OM.description;
      if (iM && (null === (SM = (0, Xi.g)().get(MM)) || void 0 === SM || !SM.hideIngredients)) {
        aM ? (aM = (0, wM.ob)(aM), aM.push({
          str: "\n"
        })) : aM = [], aM.push({
          str: "\n"
        }), aM.push({
          str: "Can be crafted from:\n"
        });
        for (const MM of iM) "string" === typeof MM && (aM.push({
          icon: MM,
          style: {
            fontSize: "1.5em"
          }
        }), aM.push({
          str: " "
        }), aM.push(...(0, wM.ob)((0, Qi.u)(rM, MM))), aM.push({
          str: "\n"
        }))
      }
      return {
        name: jM,
        desc: aM
      }
    }

    function Vi(MM) {
      let {
        name: rM,
        ma: iM
      } = MM;
      return `${rM}_${iM}`
    }

    function ci(MM) {
      var rM;
      let {
        onClick: iM,
        itemName: OM,
        recipeId: jM,
        isSelected: aM,
        haveIngredients: PM,
        craftable: nM,
        setHovered: QM,
        padActions: LM,
        marked: mM,
        lock: HM,
        itemInfo: hM
      } = MM;
      const JM = (0, SM.useRef)(null);
      return (0, oi.c)(JM, {
        press: MM => !PM || "secondary" === MM && !nM ? (LM.refuse(), !1) : "primary" === MM ? (LM.choose(), !0) : LM.craft(),
        release: LM.stopCraft,
        hints: {
          primary: "inventoryChooseRecipe",
          secondary: "inventoryCraft"
        }
      }), (0, zM.jsxs)("div", {
        ref: JM,
        className: Ui()("InvenItem", {
          CraftableItemNotEnoughIngredients: !PM && !HM,
          CraftableItemMarked: mM,
          CraftableItemLocked: void 0 !== HM,
          CraftableItemLockedFar: (null !== (rM = null === HM || void 0 === HM ? void 0 : HM.stepsAway) && void 0 !== rM ? rM : 1) > 1
        }),
        "data-recipe-key": jM,
        "data-pad-inventory-default": aM ? "" : void 0,
        onClick: iM,
        style: {
          cursor: aM ? null : "pointer"
        },
        onPointerEnter: MM => {
          null === QM || void 0 === QM || QM(!0, Ti(OM, hM)), !aM && (0, Yi.s)(MM.nativeEvent) && (0, fi.j)() && iM()
        },
        onPointerLeave: () => {
          null === QM || void 0 === QM || QM(!1)
        },
        children: [(0, zM.jsx)(ji.b, {
          itemName: OM,
          amount: 1
        }), mM && (0, zM.jsx)("span", {
          className: "CraftableItemMarkBadge",
          "aria-hidden": "true",
          children: "!"
        }), HM && (0, zM.jsxs)("span", {
          className: "CraftableItemLockTag",
          children: [(0, zM.jsx)(dM.b, {
            name: "lock"
          }), (0, zM.jsx)(eM.b, {
            text: HM.tag
          })]
        })]
      })
    }

    function MO(MM) {
      let {
        idx: rM,
        status: iM,
        shownItem: OM,
        dim: jM,
        onHoverStart: aM,
        onHoverEnd: PM,
        onPadBack: nM
      } = MM;
      const QM = (0, SM.useRef)(null);
      (0, oi.c)(QM, {
        press: () => !1,
        back: nM,
        hints: {
          back: "inventoryBackToRecipes"
        }
      });
      const LM = iM.need > 0 ? Math.min(iM.have / iM.need, 1) : 1;
      return (0, zM.jsxs)("div", {
        ref: QM,
        className: Ui()("CupTile", {
          Short: iM.missing > 0
        }),
        style: {
          width: jM,
          height: jM
        },
        "data-craft-ingredient": rM,
        onPointerEnter: aM,
        onPointerLeave: PM,
        children: [(0, zM.jsx)("div", {
          className: "CupFill",
          style: {
            transform: `scaleY(${LM})`
          }
        }), (0, zM.jsx)(ji.b, {
          itemName: OM,
          amount: 0
        }), (0, zM.jsxs)("div", {
          className: "CupCount SmallTextBold",
          children: [Bi(iM.have), "/", Bi(iM.need)]
        })]
      })
    }

    function rO(MM) {
      var rM, iM, OM, jM, aM;
      let {
        show: PM,
        recipeItem: {
          name: nM,
          ma: LM,
          requires: mM,
          produces: HM,
          haveIngredients: hM
        },
        detail: JM,
        onCraft: dM,
        setHovered: yM,
        craftButtonRef: lM,
        onPadBack: EM,
        showPadShortcut: UM,
        refusedCount: GM,
        lock: CM,
        itemInfo: bM
      } = MM;
      const {
        t: wM
      } = (0, KM.A)(), tM = null !== JM && !JM.roomForOne, gM = null !== (rM = null === JM || void 0 === JM ? void 0 : JM.craftAllTimes) && void 0 !== rM ? rM : 0, uM = function(MM, rM) {
        return MM.map((MM => {
          let {
            items: iM,
            amt: OM
          } = MM, SM = 0;
          const jM = [];
          for (const aM of iM) {
            const MM = rM(aM);
            SM += MM, MM > 0 && jM.push(aM)
          }
          return 0 === jM.length && jM.push(iM[0]), {
            shownItems: jM,
            need: OM,
            have: SM,
            missing: Math.max(OM - SM, 0)
          }
        }))
      }(mM, (MM => {
        var rM;
        return null !== (rM = null === JM || void 0 === JM ? void 0 : JM.amounts[MM]) && void 0 !== rM ? rM : 0
      }));
      let RM = "4rem",
        pM = 4;
      3 === mM.length || 4 === mM.length ? RM = "3.75rem" : mM.length >= 5 && (RM = "3rem"), 4 === mM.length ? pM = 2 : mM.length <= 6 && (pM = 3);
      const WM = `calc(${pM} * ${RM} + ${pM-1} * 0.4rem + 1px)`,
        sM = (0, SM.useRef)(null),
        DM = (0, SM.useRef)(null);
      (0, SM.useLayoutEffect)((() => {
        sM.current.scrollTop = 0
      }), [nM, LM]);
      const kM = (0, SM.useRef)(GM);
      (0, SM.useEffect)((() => {
        if (GM === kM.current) return;
        kM.current = GM;
        const MM = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? [{
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
        for (const OM of null !== (rM = null === (iM = sM.current) || void 0 === iM ? void 0 : iM.querySelectorAll(".CupTile.Short, .CantCraftInfo")) && void 0 !== rM ? rM : []) {
          var rM, iM;
          OM.animate(MM, {
            duration: 280,
            easing: "ease-out"
          })
        }
      }), [GM]);
      const ZM = (MM, rM, iM) => {
          var OM;
          if ((0, Xi.g)().has(nM)) return void(iM && clearInterval(oM.current));
          const SM = null !== (OM = null === JM || void 0 === JM ? void 0 : JM.resultStackable) && void 0 !== OM && OM,
            jM = Fi(QM.gameBridge.latest("inventory").player),
            {
              Ha: aM,
              Pz: PM,
              amountAddedToSlot: zM
            } = QM.gameBridge.send("craftRecipe", {
              name: nM,
              ma: LM,
              times: rM || MM && SM ? null : 1
            });
          if (aM > 0) {
            const rM = [],
              OM = new Set(mM.flatMap((MM => {
                let {
                  items: rM
                } = MM;
                return rM
              }))),
              aM = function(MM, rM, iM) {
                const OM = [];
                for (let SM = 0; SM < MM.length; SM++) {
                  const jM = MM[SM];
                  if (!jM || !iM.has(jM.name)) continue;
                  const aM = rM[SM],
                    PM = (null === aM || void 0 === aM ? void 0 : aM.name) === jM.name ? aM.amount : 0;
                  PM < jM.amount && OM.push({
                    idx: SM,
                    itemName: jM.name,
                    amount: jM.amount - PM
                  })
                }
                return OM
              }(jM, Fi(QM.gameBridge.latest("inventory").player), OM).slice(0, 12),
              LM = iM ? 0 : Math.min(50, 400 / aM.length),
              hM = iM ? 220 : 320;
            for (const MM of aM) {
              var HM;
              const iM = mM.findIndex((rM => {
                  let {
                    items: iM
                  } = rM;
                  return iM.includes(MM.itemName)
                })),
                OM = null === (HM = sM.current) || void 0 === HM ? void 0 : HM.querySelector(`[data-craft-ingredient="${iM}"]`),
                SM = (0, Qi.c)(MM.idx);
              OM && SM && rM.push({
                kind: "ingredient",
                itemName: MM.itemName,
                amount: MM.amount,
                Pz: MM.idx,
                from: SM,
                to: (0, Qi.c)(OM),
                delayMs: Math.round(rM.length * LM),
                durationMs: hM
              })
            }
            let JM;
            if (null !== PM && zM > 0 && DM.current) {
              const MM = rM.length > 0 ? rM[rM.length - 1].delayMs + .6 * hM : 0;
              JM = {
                itemName: nM,
                amount: zM,
                Pz: PM,
                from: (0, Qi.c)(DM.current),
                delayMs: Math.round(MM)
              }
            }
            dM(JM, MM && !SM ? PM : null, rM), Pi.e.play("wood1", .5).rate(1.75)
          }
        },
        oM = (0, SM.useRef)(null);
      (0, SM.useEffect)((() => () => {
        clearInterval(oM.current)
      }), []);
      const fM = (MM, rM) => {
          ZM(MM, !1, !1), clearInterval(oM.current), rM && (oM.current = setTimeout((() => {
            oM.current = setInterval((() => {
              ZM(MM, !1, !0)
            }), rM.intervalMs)
          }), rM.initialDelayMs))
        },
        YM = () => {
          clearInterval(oM.current)
        },
        NM = !hM || tM || Boolean(CM),
        AM = (0, SM.useRef)(null),
        xM = null !== (iM = null === (OM = (0, xi.d)()) || void 0 === OM ? void 0 : OM.hideButtonHints) && void 0 !== iM && iM,
        vM = null !== (jM = null === (aM = (0, Ai.d)()) || void 0 === aM ? void 0 : aM.getBoundButton("inventorySecondary")) && void 0 !== jM ? jM : null,
        FM = () => !NM && (ZM(!1, !0, !1), !0);
      (0, oi.c)(lM, {
        press: MM => "secondary" === MM ? FM() : !NM && (fM(!1, qi()), !0),
        release: YM,
        back: EM,
        hints: {
          primary: "inventoryCraft",
          secondary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      }), (0, oi.c)(AM, {
        press: FM,
        back: EM,
        hints: {
          primary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      });
      const [BM, XM] = (0, SM.useState)(0), [IM, qM] = (0, SM.useState)(null);
      (0, SM.useEffect)((() => {
        if (!0 === PM) {
          XM(0);
          const MM = setInterval((() => {
            XM((MM => MM + 1))
          }), 1e3);
          return () => {
            clearInterval(MM)
          }
        }
        return () => {}
      }), [PM]);
      const TM = null === JM || void 0 === JM ? void 0 : JM.ingredientsCraftedFrom,
        VM = (0, SM.useRef)(yM);
      (0, SM.useEffect)((() => {
        VM.current = yM
      }), [yM]);
      const cM = !(null === CM || void 0 === CM || !CM.hideIngredients);
      (0, SM.useEffect)((() => {
        var MM, rM;
        if (!IM) return;
        if (cM) return qM(null), void(null === (rM = VM.current) || void 0 === rM || rM.call(VM, !1));
        const iM = IM[BM % IM.length];
        null === (MM = VM.current) || void 0 === MM || MM.call(VM, !0, Ti(iM, bM, null === TM || void 0 === TM ? void 0 : TM[iM]))
      }), [IM, BM, bM, TM, cM]);
      const Mr = !!CM,
        rr = (0, SM.useRef)(!1);
      (0, SM.useEffect)((() => {
        var MM;
        Mr && (clearInterval(oM.current), cM && rr.current && (rr.current = !1, null === (MM = VM.current) || void 0 === MM || MM.call(VM, !1)))
      }), [Mr, cM]);
      const ir = (0, Qi.u)(bM, nM);
      return (0, zM.jsxs)("div", {
        ref: sM,
        className: "CraftableInfo SmallTextBold",
        children: [(0, zM.jsx)("div", {
          className: "CraftableHeader",
          children: (0, zM.jsx)(eM.b, {
            text: ir
          })
        }), !cM && (0, zM.jsx)("div", {
          className: Ui()("CraftableIngredients", {
            Compact: mM.length >= 5
          }),
          style: {
            maxWidth: WM
          },
          children: uM.map(((MM, rM) => {
            const iM = MM.shownItems[BM % MM.shownItems.length];
            return (0, zM.jsx)(MO, {
              idx: rM,
              status: MM,
              shownItem: iM,
              dim: RM,
              onHoverStart: () => {
                qM(MM.shownItems)
              },
              onHoverEnd: () => {
                qM(null), null === yM || void 0 === yM || yM(!1)
              },
              onPadBack: EM
            }, rM)
          }))
        }), CM && (0, zM.jsx)("div", {
          className: "CantCraftInfo CraftableLockReason",
          children: (0, zM.jsx)(eM.b, {
            text: CM.reason
          })
        }), !CM && (!hM || tM) && (0, zM.jsxs)("div", {
          className: "CantCraftInfo",
          children: [!hM && "Missing ingredients", (0, zM.jsx)("br", {}), tM && "Inventory is full"]
        }), !cM && (0, zM.jsxs)(zM.Fragment, {
          children: [(0, zM.jsxs)(Ii, {
            ref: lM,
            className: "DoCraftButton",
            onPointerDown: MM => {
              fM((0, Qi.x)(MM), (0, Yi.s)(MM.nativeEvent) ? qi() : Ki)
            },
            onPointerUp: YM,
            onPointerLeave: YM,
            disabled: NM,
            children: [UM && vM && !NM && !xM && (0, zM.jsx)(Ni.b, {
              className: "CraftShortcutGlyph",
              glyph: vM
            }), (0, zM.jsx)("div", {
              ref: DM,
              className: "DoCraftItem",
              onPointerEnter: () => {
                rr.current = !0, null === yM || void 0 === yM || yM(!0, Ti(nM, bM))
              },
              onPointerLeave: () => {
                rr.current = !1, null === yM || void 0 === yM || yM(!1)
              },
              children: (0, zM.jsx)(ji.b, {
                itemName: nM,
                amount: HM
              })
            })]
          }), (0, zM.jsxs)(Ii, {
            ref: AM,
            className: "DoCraftAllButton",
            onPointerDown: MM => {
              ZM((0, Qi.x)(MM), !0, !1)
            },
            disabled: NM,
            children: [(0, zM.jsx)("span", {
              className: "CraftAllLabel",
              children: wM("general:craftAll")
            }), gM > 0 && (0, zM.jsxs)("span", {
              className: "CraftAllCount",
              children: ["x", Bi(gM)]
            })]
          })]
        })]
      })
    }

    function iO(MM) {
      let {
        selectedIdx: rM,
        hidden: iM
      } = MM;
      const OM = (0, Si.y)(),
        jM = (0, SM.useRef)(null);
      return (0, SM.useLayoutEffect)((() => {
        const MM = jM.current,
          OM = null === MM || void 0 === MM ? void 0 : MM.parentElement;
        if (!OM || !MM) return;
        const SM = OM.querySelector(".CraftableItems"),
          aM = () => {
            var jM, aM;
            if (iM) return void(MM.style.opacity = "0");
            const PM = null === SM || void 0 === SM ? void 0 : SM.children[rM],
              nM = null === (jM = null !== (aM = null === PM || void 0 === PM ? void 0 : PM.querySelector(".InvenItem")) && void 0 !== aM ? aM : PM) || void 0 === jM ? void 0 : jM.getBoundingClientRect();
            if (!nM || 0 === nM.width) return void(MM.style.opacity = "0");
            const QM = OM.getBoundingClientRect();
            MM.style.opacity = "1", MM.style.width = `${nM.width}px`, MM.style.height = `${nM.height}px`, MM.style.transform = `translate(${nM.left-QM.left+OM.scrollLeft}px, ${nM.top-QM.top+OM.scrollTop}px)`
          };
        aM();
        const PM = new MutationObserver(aM),
          nM = new ResizeObserver(aM);
        return nM.observe(OM), SM && (PM.observe(SM, {
          childList: !0,
          subtree: !0
        }), nM.observe(SM)), () => {
          PM.disconnect(), nM.disconnect()
        }
      }), [rM, iM]), (0, zM.jsx)("div", {
        ref: jM,
        className: Ui()("SelectionReticle", {
          Secondary: OM
        })
      })
    }

    function OO(MM, rM, iM) {
      return MM ? (0, si.d)(Di.k, MM) ? SO(MM, rM, iM) : MM : iM("classicGame:handCrafting")
    }

    function SO(MM, rM, iM) {
      var OM;
      const SM = null === (OM = rM[MM]) || void 0 === OM ? void 0 : OM.displayName;
      if ("string" === typeof SM) return iM(SM);
      const jM = QM.gameBridge.latest("hiddenPlayerNames");
      return Array.isArray(SM) ? SM.map((MM => {
        if ("string" === typeof MM) return MM;
        if ("translationKey" in MM) return iM(MM.translationKey, (0, KM.o)(MM.params, jM));
        if ("str" in MM) {
          if ("string" === typeof MM.str) return MM.str;
          if ("translationKey" in MM.str) return iM(MM.str.translationKey, (0, KM.o)(MM.str.params, jM))
        }
        return ""
      })).join("") : SM && "translationKey" in SM ? iM(SM.translationKey, (0, KM.o)(SM.params, jM)) : MM
    }

    function jO(MM, rM) {
      return MM === rM || null !== MM && null !== rM && MM.name === rM.name && MM.ma === rM.ma
    }

    function aO(MM) {
      var rM, iM, OM;
      let {
        show: jM,
        onCraft: aM,
        dispatchSelectedCraftable: PM,
        selectedCraftable: nM,
        craftingStation: LM,
        setHovered: mM
      } = MM;
      const {
        t: HM
      } = (0, KM.A)(), [hM, JM] = (0, SM.useState)(""), [dM, yM] = (0, SM.useState)(0);
      (0, SM.useEffect)((() => {
        jM || (JM(""), yM((MM => MM + 1)))
      }), [jM]);
      const [lM, EM] = (0, SM.useState)(LM);
      lM !== LM && (EM(LM), "" !== hM && (JM(""), yM((MM => MM + 1))));
      const UM = (0, SM.useRef)(null),
        GM = (0, SM.useRef)(null),
        CM = (0, fi.n)(),
        eM = CM.showing && "recipe" === CM.kind,
        [bM, wM] = (0, SM.useState)(0),
        gM = null !== LM && void 0 !== LM ? LM : null,
        uM = (0, SM.useRef)(null),
        RM = MM => {
          return !((rM = uM.current) === (iM = MM) || null !== rM && null !== iM && rM.station === iM.station && jO(rM.recipe, iM.recipe)) && (uM.current = MM, QM.gameBridge.send("focusCrafting", MM), !0);
          var rM, iM
        };
      RM(jM ? {
        station: gM,
        recipe: (null === (rM = uM.current) || void 0 === rM ? void 0 : rM.station) === gM ? uM.current.recipe : null
      } : null);
      let pM = QM.gameBridge.latest("crafting");
      const WM = (0, tM.j)("itemInfo"),
        sM = "" !== hM.trim(),
        DM = (0, Xi.C)(),
        kM = (0, Xi.y)(),
        ZM = (0, Xi.F)(),
        oM = function(MM, rM) {
          const [iM, OM] = (0, SM.useState)(!1);
          (0, SM.useEffect)((() => {
            if (!MM) return void OM(!1);
            const rM = setTimeout((() => {
              OM(!0)
            }), 0);
            return () => {
              clearTimeout(rM)
            }
          }), [MM]);
          const jM = MM && iM,
            aM = (0, SM.useRef)({
              station: rM,
              at: new Map
            });
          return (aM.current.station !== rM || !jM && aM.current.at.size > 0) && (aM.current = {
            station: rM,
            at: new Map
          }), jM ? aM.current.at : null
        }(jM, LM);
      let fM = pM.recipes.filter((MM => {
        let {
          listed: rM
        } = MM;
        return rM
      }));
      if (sM) {
        const MM = [];
        for (const rM of pM.recipes) {
          var YM;
          const iM = null !== (YM = kM.get(rM.name)) && void 0 !== YM && YM.hideIngredients ? [] : rM.requires.flatMap((MM => {
              let {
                items: rM
              } = MM;
              return rM.flatMap((MM => [MM, SO(MM, WM, HM)]))
            })),
            OM = vi(hM, [rM.name, SO(rM.name, WM, HM)], iM);
          null !== OM && MM.push({
            item: rM,
            rank: OM
          })
        }
        MM.sort(((MM, rM) => MM.rank - rM.rank)), fM = MM.map((MM => {
          let {
            item: rM
          } = MM;
          return rM
        }))
      } else {
        if (oM && oM.size > 0) {
          const MM = pM.recipes.filter((MM => !MM.listed && oM.has(Vi(MM))));
          fM = fM.concat(MM)
        }
        fM = (0, Xi.m)(fM, DM, kM, ZM), oM && (fM = (0, Xi.k)(fM, oM, Vi))
      }
      const NM = MM => fM.find((rM => Vi(rM) === MM)),
        AM = `${LM}|${hM}`,
        [xM, vM] = (0, SM.useState)(null),
        FM = (null === xM || void 0 === xM ? void 0 : xM.context) === AM ? xM.key : null,
        BM = nM ? Vi(nM) : null,
        XM = null !== (iM = null !== (OM = NM(BM)) && void 0 !== OM ? OM : NM(FM)) && void 0 !== iM ? iM : fM[0],
        IM = XM ? Vi(XM) : null,
        qM = XM ? {
          name: XM.name,
          ma: XM.ma
        } : null;
      jM && RM({
        station: gM,
        recipe: qM
      }) && (pM = QM.gameBridge.latest("crafting")), IM !== BM && IM !== FM && vM(IM ? {
        context: AM,
        key: IM
      } : null), (0, SM.useEffect)((() => () => {
        uM.current = null, QM.gameBridge.send("focusCrafting", null)
      }), []);
      const TM = jO(pM.detail, qM) ? pM.detail : null,
        VM = null !== TM && !TM.roomForOne,
        cM = fM.findIndex((MM => Vi(MM) === Vi(XM))),
        Mr = () => GM.current ? (0, oi.b)(GM.current) : null,
        rr = (0, SM.useRef)(null),
        ir = (0, SM.useRef)(0);
      ir.current++;
      const Or = ir.current;
      (0, SM.useEffect)((() => {
        const MM = rr.current;
        if (!MM || Or <= MM.afterRender) return;
        if (rr.current = null, MM.key !== IM) return;
        const rM = Mr();
        var iM;
        null !== rM && void 0 !== rM && rM.press("primary") && !MM.sQ && (null === (iM = rM.release) || void 0 === iM || iM.call(rM))
      }));
      const Sr = MM => {
          const rM = {
            name: MM.name,
            ma: MM.ma
          };
          return {
            choose: () => {
              PM(rM), (0, Oi.r)(GM.current)
            },
            craft: () => {
              var MM, iM;
              return PM(rM), Vi(rM) !== Vi(XM) ? (rr.current = {
                key: Vi(rM),
                sQ: !0,
                afterRender: ir.current
              }, !0) : null !== (MM = null === (iM = Mr()) || void 0 === iM ? void 0 : iM.press("primary")) && void 0 !== MM && MM
            },
            stopCraft: () => {
              var MM, rM;
              rr.current ? rr.current.sQ = !1 : null === (MM = Mr()) || void 0 === MM || null === (rM = MM.release) || void 0 === rM || rM.call(MM)
            },
            refuse: () => {
              Vi(rM) !== Vi(XM) && PM(rM), wM((MM => MM + 1))
            }
          }
        },
        jr = () => {
          var MM, rM, iM;
          (0, Oi.r)(null !== (MM = null === (rM = UM.current) || void 0 === rM || null === (iM = rM.querySelector(".CraftableItems")) || void 0 === iM ? void 0 : iM.children[cM]) && void 0 !== MM ? MM : null)
        },
        ar = fM.map(Vi).join("|"),
        Pr = (0, SM.useRef)(ar);
      return (0, SM.useEffect)((() => {
        Pr.current !== ar && (Pr.current = ar, eM && cM >= 0 && (0, fi.j)() && jr())
      })), (0, zM.jsxs)("div", {
        className: "Craftables",
        children: [(0, zM.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: OO(LM, WM, HM)
        }), (0, zM.jsxs)("div", {
          className: "CraftablesBody",
          children: [(0, zM.jsx)(Zi.b, {
            className: "CraftingSearch",
            placeholderText: HM("general:searchRecipes"),
            defaultValue: hM,
            maxLength: 100,
            onValueChange: MM => {
              JM(MM)
            },
            blurOnEnter: !0
          }, dM), 0 === fM.length && sM && (0, zM.jsx)("div", {
            className: "CraftingNoMatches SmallTextBold",
            children: HM("general:noRecipesMatchSearch")
          }), fM.length > 0 && (0, zM.jsxs)(zM.Fragment, {
            children: [(0, zM.jsxs)("div", {
              ref: UM,
              className: "CraftablesLeftSide",
              children: [(0, zM.jsx)(ki.e, {
                lazyLoadedClassName: "CraftableItems",
                observerUpdateDeps: [JSON.stringify(fM.map((MM => {
                  let {
                    name: rM,
                    ma: iM,
                    haveIngredients: OM
                  } = MM;
                  return {
                    name: rM,
                    ma: iM,
                    haveIngredients: OM
                  }
                })))],
                observing: jM,
                children: fM.map((MM => {
                  const {
                    name: rM,
                    ma: iM,
                    haveIngredients: OM
                  } = MM, SM = Vi(MM);
                  return (0, zM.jsx)(ci, {
                    recipeId: SM,
                    itemName: rM,
                    onClick: () => {
                      PM({
                        name: rM,
                        ma: iM
                      })
                    },
                    isSelected: Vi(XM) === SM,
                    haveIngredients: OM,
                    craftable: OM && !kM.has(rM) && !(Vi(XM) === SM && VM),
                    setHovered: mM,
                    padActions: Sr(MM),
                    marked: DM.has(rM),
                    lock: kM.get(rM),
                    itemInfo: WM
                  }, SM)
                }))
              }), (0, zM.jsx)(iO, {
                selectedIdx: cM,
                hidden: eM && CM.steppingSlots
              })]
            }), (0, zM.jsx)(rO, {
              show: jM,
              recipeItem: XM,
              detail: TM,
              onCraft: aM,
              setHovered: mM,
              craftButtonRef: GM,
              onPadBack: jr,
              showPadShortcut: eM,
              refusedCount: bM,
              lock: kM.get(XM.name),
              itemInfo: WM
            })]
          })]
        })]
      })
    }
    var PO = iM(35037),
      nO = iM(3693),
      QO = iM(2230),
      zO = iM(9279);
    class LO {
      constructor(MM, rM, iM) {
        this.commit = MM, this.delayMs = rM, this.defers = iM, this.pending = null, this.timer = void 0, this.sQ = !1, this.flush = () => {
          clearTimeout(this.timer);
          const MM = this.pending;
          null !== MM && (this.pending = null, this.commit(MM))
        }
      }
      type(MM) {
        this.pending = MM, clearTimeout(this.timer), this.sQ || this.defers() ? this.sQ || (this.timer = setTimeout(this.flush, this.delayMs)) : this.flush()
      }
      getTyped(MM) {
        var rM;
        return null !== (rM = this.pending) && void 0 !== rM ? rM : MM
      }
      isHeld() {
        return this.sQ
      }
      setHeld(MM) {
        this.sQ = MM, MM || this.flush()
      }
    }

    function mO(MM) {
      return null === MM ? "creativeInventory:all" : `creativeInventory:${MM}`
    }

    function HO(MM) {
      let {
        category: rM
      } = MM;
      return null === rM ? (0, zM.jsx)(dM.b, {
        name: "layer-group"
      }) : (0, zM.jsx)(ji.b, {
        itemName: PO.creativeItemCategoryIcons[rM],
        amount: 0
      })
    }

    function hO(MM) {
      let {
        labelKey: rM,
        isSelected: iM,
        onSelect: OM,
        setHovered: SM,
        children: jM
      } = MM;
      return (0, zM.jsx)("div", {
        className: Ui()("CreativeCategoryTab", {
          Selected: iM
        }),
        onClick: OM,
        onPointerEnter: MM => {
          (0, Qi.q)(MM) || SM(!0, {
            name: {
              translationKey: rM
            },
            desc: ""
          })
        },
        onPointerLeave: () => {
          SM(!1)
        },
        children: jM
      })
    }

    function JO(MM) {
      let {
        categories: rM,
        selectedCategory: iM,
        onSelect: OM
      } = MM;
      const {
        t: jM
      } = (0, KM.A)(), [aM, PM] = (0, SM.useState)(!1), nM = (0, SM.useRef)(null), QM = (0, SM.useCallback)((() => {
        PM(!1)
      }), []);
      return (0, QO.e)(nM, QM), (0, zM.jsxs)("div", {
        className: "CreativeCategoryDropdown",
        ref: nM,
        children: [(0, zM.jsxs)("div", {
          className: "CreativeCategoryDropdownButton",
          onClick: () => {
            PM(!aM)
          },
          children: [(0, zM.jsx)("div", {
            className: "CreativeCategoryIcon",
            children: (0, zM.jsx)(HO, {
              category: iM
            })
          }), (0, zM.jsx)("span", {
            children: jM(mO(iM))
          }), (0, zM.jsx)(dM.b, {
            name: aM ? "caret-up" : "caret-down"
          })]
        }), aM && (0, zM.jsx)("div", {
          className: "CreativeCategoryDropdownMenu",
          children: rM.map((MM => (0, zM.jsxs)("div", {
            className: Ui()("CreativeCategoryDropdownOption", {
              Selected: iM === MM
            }),
            onClick: () => {
              OM(MM), PM(!1)
            },
            children: [(0, zM.jsx)("div", {
              className: "CreativeCategoryIcon",
              children: (0, zM.jsx)(HO, {
                category: MM
              })
            }), (0, zM.jsx)("span", {
              children: jM(mO(MM))
            })]
          }, null !== MM && void 0 !== MM ? MM : "all")))
        })]
      })
    }
    const dO = (0, SM.memo)((function(MM) {
      let {
        creativeScrollDiv: rM,
        playerInvenNumSlots: iM,
        getSetHoveringForIdx: OM,
        getPointerDownForIdx: jM,
        getPointerUpForIdx: aM,
        creativeSearchVal: PM,
        setCreativeSearchVal: QM,
        creativeCategory: LM,
        setCreativeCategory: mM,
        show: HM
      } = MM;
      const {
        t: hM
      } = (0, KM.A)(), JM = (0, tM.j)("creativeVisibility"), {
        userContext: yM
      } = (0, CM.b)(), lM = (0, nM.f)("canUseDevCreativeItems"), EM = yM.playerHasRank("developer") || !!lM, UM = (0, SM.useMemo)((() => lO("", JM, EM)), [JM, EM]), GM = (0, SM.useMemo)((() => {
        const MM = (0, PO.creativeItemIds)(),
          rM = new Set(UM.map((rM => (0, PO.creativeCategoryOf)(MM[rM]))));
        return PO.creativeItemCategories.filter((MM => rM.has(MM)))
      }), [UM]), eM = null !== LM && GM.includes(LM) ? LM : null, wM = (0, SM.useMemo)((() => "" === PM ? UM : lO(PM, JM, EM)), [UM, PM, JM, EM]), gM = (0, SM.useMemo)((() => {
        const MM = (0, PO.creativeItemIds)();
        return null !== eM ? wM.filter((rM => (0, PO.creativeCategoryOf)(MM[rM]) === eM)) : "" === PM ? wM.filter((rM => !(0, PO.showOnlyInCreativeCategory)(MM[rM]))) : wM
      }), [wM, eM, PM]), uM = OM();

      function RM(MM) {
        mM(MM), rM.current.scrollTop = 0
      }
      const pM = [null, ...GM],
        {
          isTouchScreen: WM
        } = (0, YM.m)(["isTouchScreen"]),
        sM = !WM,
        DM = (0, SM.useRef)(null),
        [kM, ZM] = (0, SM.useState)(0);
      (0, SM.useEffect)((() => {
        const MM = DM.current;
        if (!MM) return;
        const rM = new ResizeObserver((MM => {
          ZM(MM[0].contentRect.height)
        }));
        return rM.observe(MM), () => {
          rM.disconnect()
        }
      }), [sM]);
      const oM = (0, SM.useRef)(null),
        fM = (0, SM.useCallback)((function MM() {
          "up" === oM.current ? rM.current.scrollTop -= 10 : "down" === oM.current && (rM.current.scrollTop += 10), oM.current && requestAnimationFrame(MM)
        }), [rM]),
        NM = (0, SM.useCallback)((function(MM) {
          oM.current || (oM.current = MM, fM())
        }), [fM]);

      function AM() {
        oM.current = null
      }
      const xM = (0, SM.useRef)({
        creativeSearchVal: PM,
        setCreativeSearchVal: QM
      });
      xM.current = {
        creativeSearchVal: PM,
        setCreativeSearchVal: QM
      };
      const [vM] = (0, SM.useState)((() => new LO((MM => {
        xM.current.setCreativeSearchVal(MM)
      }), 250, Si.l))), FM = MM => {
        var iM;
        null === (iM = rM.current) || void 0 === iM || iM.classList.toggle("CreativeItemSlotsStale", MM)
      };
      (0, bM.d)(zO.e, (MM => {
        vM.setHeld(MM), MM || FM(!1)
      })), (0, SM.useEffect)((() => vM.flush), [vM]);
      const BM = (0, zM.jsx)(Zi.b, {
          className: "CreativeItemSlotsSearch",
          placeholderText: "Search",
          defaultValue: PM,
          maxLength: 1e4,
          onValueChange: (MM, rM) => {
            "" === vM.getTyped(xM.current.creativeSearchVal) && "" !== MM && mM(null), vM.type(MM), FM(vM.isHeld())
          },
          onEnter: vM.flush,
          blurOnEnter: !0
        }),
        XM = (0, zM.jsxs)("div", {
          className: "CreateItemSlotsScrollable",
          children: [WM && (0, zM.jsxs)("div", {
            className: "CreativeScrollButtons",
            children: [(0, zM.jsx)("div", {
              className: "CreativeScrollButton Up",
              onPointerDown: () => {
                NM("up")
              },
              onPointerLeave: AM,
              onPointerUp: AM,
              children: (0, zM.jsx)(dM.b, {
                name: "arrow-up"
              })
            }), (0, zM.jsx)("div", {
              className: "CreativeScrollButton Down",
              onPointerDown: () => {
                NM("down")
              },
              onPointerLeave: AM,
              onPointerUp: AM,
              children: (0, zM.jsx)(dM.b, {
                name: "arrow-up"
              })
            })]
          }), (0, zM.jsxs)("div", {
            className: "CreativeItemSlots",
            ref: rM,
            children: [0 === gM.length && "" !== PM && (0, zM.jsx)("div", {
              className: "CreativeItemSlotsEmpty",
              children: hM("general:noResults")
            }), (0, zM.jsx)(ki.e, {
              lazyLoadedClassName: "CreativeItemSlotsInner",
              observerUpdateDeps: [PM, eM],
              observerRoot: "CreativeItemSlots",
              observing: HM,
              children: gM.map((MM => {
                const rM = iM + MM;
                return (0, zM.jsx)(gi.d, {
                  idx: rM,
                  draggedInfo: null,
                  specialItemInfo: null,
                  setHovered: OM(rM),
                  pointerDown: jM(rM),
                  pointerUp: aM(rM)
                }, rM)
              }))
            })]
          })]
        });
      return (0, zM.jsxs)("div", {
        className: Ui()("CreativeItemSlotsWrapper", sM ? "WithRail" : "WithDropdown"),
        children: [sM && (0, zM.jsx)("div", {
          className: "CreativeCategoryRail",
          ref: DM,
          style: {
            "--rail-height": kM > 0 ? `${kM}px` : void 0,
            "--tab-rows": Math.ceil(pM.length / 2)
          },
          children: pM.map((MM => (0, zM.jsx)(hO, {
            labelKey: mO(MM),
            isSelected: eM === MM,
            onSelect: () => {
              RM(MM)
            },
            setHovered: uM,
            children: (0, zM.jsx)(HO, {
              category: MM
            })
          }, null !== MM && void 0 !== MM ? MM : "all")))
        }), (0, zM.jsxs)("div", {
          className: "CreativeItemSlotsMain",
          children: [(0, zM.jsxs)("div", {
            className: "CreativeItemSlotsSearchRow",
            children: [BM, !sM && (0, zM.jsx)(JO, {
              categories: pM,
              selectedCategory: eM,
              onSelect: RM
            })]
          }), XM]
        })]
      })
    }));

    function yO(MM) {
      var rM;
      return null !== (rM = (0, nO.g)(MM)) && void 0 !== rM ? rM : ""
    }

    function lO(MM, rM, iM) {
      let {
        publicLobby: OM,
        shownInGame: SM
      } = rM;
      const jM = MM.toLowerCase(),
        aM = (0, PO.creativeItemIds)(),
        PM = MM => {
          var rM;
          const jM = aM[MM];
          return !(0, PO.itemIsDisabled)(jM, OM, null === (rM = SM[yO(jM)]) || void 0 === rM || rM, iM)
        };
      if ("" === jM) return aM.map(((MM, rM) => rM)).filter((MM => !(0, PO.showOnlyInCreativeSearch)(aM[MM]))).filter(PM);
      const nM = [];
      for (let QM = 0; QM < aM.length; QM++) yO(aM[QM]).toLowerCase().includes(jM) && nM.push(QM);
      nM.sort(((MM, rM) => {
        const iM = yO(aM[MM]).toLowerCase(),
          OM = yO(aM[rM]).toLowerCase();
        return iM.indexOf(jM) - OM.indexOf(jM)
      }));
      for (const [QM, zM] of(0, PO.creativeAltNames)())
        for (const MM of zM)
          if (MM.toLowerCase().includes(jM)) {
            const MM = aM.indexOf(QM);
            nM.includes(MM) || nM.push(MM)
          } return nM.filter(PM)
    }
    var EO = iM(37776),
      UO = iM(625);

    function GO(MM) {
      return MM > UO.p
    }

    function CO(MM) {
      const rM = MM / 2,
        iM = [];
      for (let OM = 0; OM < rM / 6; OM++)
        for (let MM = 0; MM < 12; MM++) {
          const SM = MM < 6 ? 0 : rM;
          iM.push(SM + 6 * OM + MM % 6)
        }
      return iM
    }

    function eO(MM) {
      let {
        numSlots: rM,
        renderSlot: iM
      } = MM;
      const {
        t: OM
      } = (0, KM.A)(), jM = (0, SM.useRef)(null);
      var aM;
      return aM = jM, (0, SM.useLayoutEffect)((() => {
        var MM;
        const rM = null === (MM = aM.current) || void 0 === MM ? void 0 : MM.closest(".InvenBody");
        if (!rM) return;
        const iM = () => {
          rM.style.zoom = "";
          const MM = parseFloat(getComputedStyle(document.documentElement).fontSize),
            iM = window.innerWidth - 2 * MM,
            OM = rM.getBoundingClientRect().width;
          OM > iM && (rM.style.zoom = "" + iM / OM)
        };
        return iM(), window.addEventListener("resize", iM), () => {
          window.removeEventListener("resize", iM), rM.style.zoom = ""
        }
      }), [aM]), (0, zM.jsxs)("div", {
        ref: jM,
        className: "ChestItemSlots DoubleChestSlots",
        children: [(0, zM.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: OM("doubleChest:title")
        }), (0, zM.jsx)("div", {
          className: "GridItemSlots",
          children: CO(rM).map((MM => iM(MM)))
        })]
      })
    }

    function bO(MM) {
      let {
        ti: rM,
        initialPasskey: iM
      } = MM;
      const {
        t: OM
      } = (0, KM.A)(), [jM, aM] = (0, SM.useState)(iM), [PM, nM] = (0, SM.useState)(iM);
      (0, SM.useEffect)((() => {
        aM(iM), nM(iM)
      }), [...rM]);
      return (0, zM.jsxs)("div", {
        className: "IronChestPasskeyEditorWrapper",
        children: [(0, zM.jsx)("div", {
          className: "SmallTextBold",
          children: OM("ironChest:currentPasskey", {
            currentPasskey: jM.join("")
          })
        }), (0, zM.jsx)(ei, {
          className: "IronChestPasskeyEditor",
          oa: PM,
          onPasskeyUpdated: nM,
          confirmText: "ironChest:changePasskey",
          onConfirm: () => {
            QM.gameBridge.send("changeIronChestPasskey", {
              pos: [...rM],
              oa: [...PM]
            }), aM([...PM])
          }
        })]
      })
    }

    function wO(MM, rM) {
      return "Iron" === MM.type && MM.ironChest.ownerDbId === rM
    }

    function tO(MM) {
      let {
        variation: rM,
        canCraft: iM,
        show: OM,
        creativeMounted: SM,
        specialItemRef: jM,
        draggedInfo: aM,
        getSetHovering: PM,
        getPointerDownForIdx: nM,
        getPointerUpForIdx: QM,
        enchantingTablePosition: LM,
        enchantingTableBlockName: mM,
        selectedCraftable: HM,
        dispatchSelectedCraftable: hM,
        creativeScrollDiv: JM,
        creativeSearchVal: dM,
        setCreativeSearchVal: yM,
        creativeCategory: lM,
        setCreativeCategory: EM,
        onCraft: UM
      } = MM;
      const {
        userContext: GM
      } = (0, CM.b)(), {
        t: eM
      } = (0, KM.A)(), bM = (0, tM.f)("inventory", (MM => MM.chest)), wM = (0, tM.f)("inventory", (MM => MM.player.length)), gM = (0, tM.f)("inventory", (MM => MM.creative));
      if (0 === wM) return null;
      let uM, RM;
      const pM = MM => {
          const rM = wM + MM;
          return (0, zM.jsx)(gi.d, {
            idx: rM,
            draggedInfo: aM,
            specialItemInfo: jM.current,
            setHovered: PM(rM),
            pointerDown: nM(rM),
            pointerUp: QM(rM)
          }, rM)
        },
        WM = bM ? (0, EO.d)(bM.type) : null;
      if (WM) uM = Ui()("InvenLeftSideChestCustom", WM.className), RM = (0, zM.jsx)("div", {
        className: "ChestItemSlotsWrapper",
        children: WM.render({
          ti: bM.pos,
          renderSlot: pM
        })
      });
      else if (bM) {
        const MM = bM.pos,
          rM = "Iron" === bM.type || "Moonstone" === bM.type ? bM.type : "Standard";
        uM = `InvenLeftSideChest${rM}`;
        const iM = GO(bM.numSlots);
        RM = (0, zM.jsxs)("div", {
          className: "ChestItemSlotsWrapper",
          children: [wO(bM, GM.whamm) && (0, zM.jsx)(bO, {
            ti: MM,
            initialPasskey: bM.ironChest.oa
          }), iM && (0, zM.jsx)(eO, {
            numSlots: bM.numSlots,
            renderSlot: pM
          }), !iM && (0, zM.jsxs)("div", {
            className: "ChestItemSlots",
            children: [(0, zM.jsx)("div", {
              className: "InvenLeftSideHeader SmallTextBold",
              children: eM("Moonstone" === rM ? "item:moonstoneChest" : "Iron" === rM ? "item:ironChest" : "item:chest")
            }), (0, zM.jsx)("div", {
              className: "GridItemSlots",
              children: new Array(bM.numSlots).fill(0).map(((MM, rM) => pM(rM)))
            })]
          })]
        })
      } else if (!gM || rM && iM)
        if (iM && "Enchanting Table" === rM) uM = `InvenLeftSide${(null!==mM&&void 0!==mM?mM:"").replace(/ /gi,"")}`, RM = (0, zM.jsx)(ui, {
          specialItemInfo: jM.current,
          setHovered: PM,
          pointerDown: nM(Li.e),
          pointerUp: QM(Li.e),
          enchantingTablePosition: LM,
          enchantingTableBlockName: mM
        });
        else if (iM && "Salvaging Table" === rM) uM = "InvenLeftSideSalvagingTable", RM = (0, zM.jsx)(Wi, {
        specialItemInfo: jM.current,
        setSpecialItemInfo: MM => {
          jM.current = MM
        },
        setHovered: PM,
        pointerDown: nM(Li.e),
        pointerUp: QM(Li.e)
      });
      else {
        if (!iM) return null;
        uM = `InvenLeftSide${(null!==rM&&void 0!==rM?rM:"HandCrafting").replace(/ /gi,"")}`, RM = (0, zM.jsx)(aO, {
          show: OM,
          onCraft: UM,
          craftingStation: rM,
          selectedCraftable: HM,
          dispatchSelectedCraftable: hM,
          setHovered: PM()
        })
      } else uM = "InvenLeftSideCreative", RM = SM ? (0, zM.jsx)(dO, {
        creativeScrollDiv: JM,
        playerInvenNumSlots: wM,
        getSetHoveringForIdx: PM,
        getPointerDownForIdx: nM,
        getPointerUpForIdx: QM,
        creativeSearchVal: dM,
        setCreativeSearchVal: yM,
        creativeCategory: lM,
        setCreativeCategory: EM,
        show: OM
      }) : null;
      const sM = !!bM || iM && !!rM;
      return (0, zM.jsx)("div", {
        className: `InvenLeftSide ${uM}`,
        "data-pad-inventory-start": sM ? "" : void 0,
        children: RM
      })
    }
    var gO = iM(613),
      uO = iM(20639),
      RO = iM(20642),
      pO = iM(20649);
    const WO = {
      Helmet: {
        sprite: "empty_armor_slot_helmet",
        image: iM(20657)
      },
      Chestplate: {
        sprite: "empty_armor_slot_chestplate",
        image: RO
      },
      Gauntlets: {
        sprite: "empty_armor_slot_gauntlets",
        image: pO
      },
      Leggings: {
        sprite: "empty_armor_slot_leggings",
        image: iM(20663)
      },
      Boots: {
        sprite: "empty_armor_slot_boots",
        image: uO
      }
    };

    function sO(MM) {
      const {
        sprite: rM,
        image: iM
      } = WO[MM];
      return Br(rM, xr.f.ITEM, iM)
    }

    function DO(MM) {
      let {
        draggedInfo: rM,
        specialItemInfo: iM,
        craftFlyAnims: OM,
        getSetHovering: SM,
        getPointerDownForIdx: jM,
        getPointerUpForIdx: aM,
        variation: PM,
        canCraft: nM,
        isNewSlot: QM
      } = MM;
      const LM = (0, tM.f)("inventory", (MM => MM.player.length));
      return 0 === LM ? null : (0, zM.jsxs)("div", {
        className: "InvenBodyRight",
        children: [(0, zM.jsx)("div", {
          className: "ArmourItemSlots",
          children: new Array(gO.b.length).fill(0).map(((MM, mM) => {
            const HM = LM - gO.b.length + mM;
            return (0, zM.jsx)(gi.d, {
              idx: HM,
              draggedInfo: rM,
              specialItemInfo: iM,
              craftFlyHoldbackInfo: (0, zi.g)(OM, HM),
              setHovered: SM(HM),
              pointerDown: jM(HM),
              pointerUp: aM(HM),
              defaultIconB64: sO(gO.b[mM]),
              variation: nM ? PM : void 0,
              showNewDot: QM(HM)
            }, HM)
          }))
        }), (0, zM.jsx)("div", {
          className: "GridItemSlots",
          children: new Array(LM - 10 - gO.b.length).fill(0).map(((MM, mM) => {
            const HM = LM - gO.b.length - mM - 1;
            return (0, zM.jsx)(gi.d, {
              idx: HM,
              draggedInfo: rM,
              specialItemInfo: iM,
              craftFlyHoldbackInfo: (0, zi.g)(OM, HM),
              setHovered: SM(HM),
              pointerDown: jM(HM),
              pointerUp: aM(HM),
              variation: nM ? PM : void 0,
              showNewDot: QM(HM)
            }, HM)
          }))
        })]
      })
    }
    var kO = iM(37778),
      ZO = iM(37787);

    function oO(MM) {
      const {
        e: rM,
        idx: iM
      } = MM, OM = (0, Qi.j)(MM.readInventory(), iM), SM = (0, Qi.o)(rM);
      iM === Li.b ? function(MM, rM) {
        const {
          draggedInfoRef: iM,
          removeItem: OM,
          removeDraggedInfoRef: SM,
          close: jM
        } = MM;
        if (iM.current) {
          const MM = rM && iM.current.amount || 1;
          OM(iM.current.idx, MM, !0) && (iM.current.amount -= MM, iM.current.amount <= 0 && SM())
        } else rM && jM()
      }(MM, SM) : iM === Li.e ? function(MM, rM) {
        const {
          e: iM,
          draggedInfoRef: OM,
          specialItemRef: SM,
          moveAmtIntoSlot: jM,
          removeDraggedInfoRef: aM
        } = MM;
        if ((0, Qi.x)(iM) && SM.current) SM.current = null;
        else if (OM.current && SM.current && (OM.current.idx === SM.current.idx || (0, ZO.d)(OM.current, SM.current)) && OM.current.amount > 0 && SM.current.amount > 0 && SM.current.amount < Gi.f.maxItemStackSize)
          if (OM.current.idx === SM.current.idx) {
            if (rM) {
              const MM = Math.min(OM.current.amount, Gi.f.maxItemStackSize - SM.current.amount);
              SM.current.amount += MM, OM.current.amount -= MM
            } else OM.current.amount--, SM.current.amount++;
            OM.current.amount <= 0 && aM()
          } else if (rM) {
          const MM = Math.min(OM.current.amount, Gi.f.maxItemStackSize - SM.current.amount);
          jM(SM.current.idx, MM) && (SM.current.amount += MM)
        } else {
          jM(SM.current.idx, 1) && SM.current.amount++
        } else if (OM.current && !SM.current && !rM && OM.current.amount > 0) OM.current.amount--, SM.current = {
          idx: OM.current.idx,
          name: OM.current.name,
          attributes: OM.current.attributes,
          amount: 1
        }, OM.current.amount <= 0 && aM();
        else {
          const MM = OM.current;
          OM.current = SM.current, SM.current = MM
        }
      }(MM, SM) : (0, Qi.x)(rM) ? function(MM, rM) {
        var iM, OM;
        const {
          idx: SM,
          draggedInfoRef: jM,
          specialItemRef: aM,
          canCraft: PM,
          variation: nM,
          swapSlots: QM,
          moveIntoSlots: zM
        } = MM;
        if (!rM) return;
        let LM = rM.amount;
        SM === (null === (iM = jM.current) || void 0 === iM ? void 0 : iM.idx) && (LM = jM.current.amount <= 0 ? 0 : rM.amount - jM.current.amount);
        SM === (null === (OM = aM.current) || void 0 === OM ? void 0 : OM.idx) && (LM = aM.current.amount <= 0 ? 0 : rM.amount - aM.current.amount);
        if (0 === LM) return;
        const mM = MM.readInventory(),
          HM = mM.player.length,
          hM = mM.chest,
          JM = HM - gO.b.length,
          dM = () => {
            if (!(0, Si.l)()) return void zM(10, JM, SM, LM);
            const MM = MM => {
              const iM = (0, Qi.j)(mM, MM);
              return iM ? {
                amount: iM.amount,
                stacksWithMoved: (0, ZO.d)(iM, rM)
              } : null
            };
            for (const rM of ((MM, rM, iM, OM, SM) => {
                const jM = [];
                let aM = OM;
                if (null !== OM) {
                  let PM = 0;
                  for (let OM = rM; OM < iM; OM++) {
                    const rM = MM(OM);
                    null !== rM && void 0 !== rM && rM.stacksWithMoved && null !== rM.amount && rM.amount > 0 && (PM += Math.max(0, SM - rM.amount))
                  }
                  const nM = Math.min(OM, PM);
                  if (nM > 0 && (jM.push({
                      start: rM,
                      end: iM,
                      amount: nM
                    }), aM = OM - nM), aM <= 0) return jM
                }
                for (let PM = iM - 1; PM >= rM; PM--)
                  if (null === MM(PM)) {
                    jM.push({
                      start: PM,
                      end: PM + 1,
                      amount: aM
                    });
                    break
                  } return jM
              })(MM, 10, JM, LM, Gi.f.maxItemStackSize)) zM(rM.start, rM.end, SM, rM.amount)
          };
        if (!PM || "Enchanting Table" !== nM && "Salvaging Table" !== nM) {
          const iM = (0, wM.ub)(rM.name),
            OM = iM ? (0, wM.sb)(iM) : null;
          if (!gO.b.includes(iM) || SM !== OM && (0, Qi.l)(mM, MM.itemInfo, OM, SM))
            if (hM)
              if (SM < HM) {
                var yM, lM;
                const [MM, rM] = null !== (yM = null === (lM = (0, EO.d)(hM.type)) || void 0 === lM ? void 0 : lM.quickMoveRange) && void 0 !== yM ? yM : [0, hM.numSlots];
                zM(HM + MM, HM + rM, SM, LM)
              } else zM(0, HM - gO.b.length, SM, LM);
          else mM.creative ? SM < 10 ? dM() : SM < HM ? zM(0, 10, SM, LM) : zM(0, HM - gO.b.length, SM, null !== rM.amount ? Gi.f.maxItemStackSize : null) : SM < 10 ? dM() : zM(0, 10, SM, LM);
          else SM < HM - gO.b.length || SM >= HM ? QM(OM, SM) : (zM(0, HM - gO.b.length, OM, LM), Pi.e.play("equip_leather1", 1).rate(.9 + .3 * Math.random()))
        } else aM.current = {
          idx: SM,
          name: rM.name,
          attributes: rM.attributes,
          amount: null !== rM.amount ? LM : 0
        }
      }(MM, OM) : MM.draggedInfoRef.current ? function(MM, rM, iM, OM) {
        const {
          draggedInfoRef: SM,
          specialItemRef: jM,
          moveAmtIntoSlot: aM,
          swapSlots: PM,
          removeItem: nM,
          removeDraggedInfoRef: QM
        } = MM, zM = MM.readInventory(), LM = SM.current.idx;
        if (iM && (rM === LM || (0, ZO.d)(SM.current, iM)) && SM.current.amount > 0 && (0, Qi.b)(iM) > 0 && (iM.amount < Gi.f.maxItemStackSize || rM === LM)) OM ? iM.amount + SM.current.amount <= Gi.f.maxItemStackSize || rM === LM ? aM(rM, SM.current.amount) : aM(rM, Gi.f.maxItemStackSize - iM.amount) : aM(rM, 1);
        else if (SM.current.amount > 0 && !iM) aM(rM, OM ? SM.current.amount : 1);
        else if (OM || iM || 0 === SM.current.amount)
          if (zM.creative && !zM.chest && rM >= zM.player.length) {
            const MM = 0 === SM.current.amount ? 1 : SM.current.amount;
            nM(SM.current.idx, MM, !1) && QM()
          } else {
            var mM;
            const iM = (null === (mM = jM.current) || void 0 === mM ? void 0 : mM.idx) === rM;
            if (PM(rM, SM.current.idx)) {
              const OM = MM.readInventory(),
                aM = (0, Qi.j)(OM, LM),
                PM = !OM.chest && OM.creative && SM.current.idx >= OM.player.length;
              if (aM && SM.current.idx !== rM && !PM) {
                let MM = (0, Qi.b)(aM);
                iM && (MM -= jM.current.amount), SM.current = iM && 0 === MM ? null : {
                  idx: SM.current.idx,
                  name: aM.name,
                  attributes: aM.attributes,
                  amount: MM
                }
              } else QM()
            }
          }
        else aM(rM, 1)
      }(MM, iM, OM, SM) : function(MM, rM, iM, OM) {
        var SM;
        const {
          draggedInfoRef: jM,
          specialItemRef: aM
        } = MM;
        if (!iM) return;
        let PM = (0, Qi.b)(iM);
        const nM = (null === (SM = aM.current) || void 0 === SM ? void 0 : SM.idx) === rM;
        nM && (PM -= aM.current.amount);
        OM || (PM = Math.ceil(PM / 2));
        jM.current = nM && 0 === PM ? null : {
          idx: rM,
          name: iM.name,
          attributes: iM.attributes,
          amount: PM
        }
      }(MM, iM, OM, SM)
    }
    var fO = iM(2690);

    function YO(MM, rM, iM) {
      return Math.round((rM + MM) * iM) / iM - rM
    }
    const NO = new WeakMap;

    function AO(MM) {
      const rM = window.devicePixelRatio || 1,
        iM = NO.get(MM);
      if (iM && iM.pixelRatio === rM && iM.width === window.innerWidth && iM.height === window.innerHeight) return iM;
      let OM = 0,
        SM = 0;
      const jM = MM.offsetParent;
      if (jM) {
        const MM = jM.getBoundingClientRect();
        OM = MM.left + jM.clientLeft, SM = MM.top + jM.clientTop
      }
      const aM = {
        left: OM,
        top: SM,
        pixelRatio: rM,
        width: window.innerWidth,
        height: window.innerHeight,
        halfRem: .5 * (0, fO.T)(document)
      };
      return NO.set(MM, aM), aM
    }

    function xO(MM, rM, iM) {
      const {
        left: OM,
        top: SM,
        pixelRatio: jM
      } = AO(MM);
      return `translate(${YO(rM,OM,jM)}px, ${YO(iM,SM,jM)}px)`
    }

    function vO(MM) {
      const {
        halfRem: rM
      } = AO(MM);
      return xO(MM, rM, rM)
    }

    function FO(MM, rM) {
      return !!rM && rM.name === MM.name
    }

    function BO() {
      return QM.gameBridge.latest("inventory")
    }

    function XO(MM, rM, iM) {
      return QM.gameBridge.send("removeInventoryItem", {
        slot: MM,
        amount: rM,
        drop: iM
      })
    }

    function IO(MM) {
      return (0, Qi.f)(MM, QM.gameBridge.latest("itemInfo"), QM.gameBridge.latest("stationItems").enchantable)
    }

    function KO(MM) {
      let {
        show: rM,
        close: iM,
        canCraft: OM,
        variation: jM,
        inventoryItemsMoveable: aM,
        setCraftFlyAnims: PM
      } = MM;
      (0, tM.j)("itemInfo");
      const [nM, zM] = (0, SM.useState)(null), [LM, mM] = (0, SM.useState)(null), [HM, hM] = (0, SM.useState)(!1), JM = (0, SM.useRef)(null), dM = (0, SM.useRef)(null), yM = (0, SM.useRef)(null), lM = (0, SM.useRef)(null), [EM, UM] = (0, SM.useReducer)((MM => MM + 1), 0), GM = (0, SM.useCallback)((() => {
        rM && UM()
      }), [rM, UM]), CM = (0, SM.useCallback)((() => {
        dM.current = null, kM.current = null, GM()
      }), [GM]), eM = (0, SM.useCallback)(((MM, rM) => {
        PM((iM => iM.map((iM => "ingredient" === iM.kind ? iM : iM.Pz === MM ? {
          ...iM,
          Pz: rM,
          to: (0, Qi.c)(rM)
        } : iM.Pz === rM ? {
          ...iM,
          Pz: MM,
          to: (0, Qi.c)(MM)
        } : iM))))
      }), [PM]), bM = (0, SM.useCallback)(((MM, rM) => {
        const iM = fM.current;
        if (iM.x = MM, iM.y = rM, JM.current) !YM.current.isTouch || YM.current.itemBeingDragged && !kM.current ? (JM.current.style.transform = xO(JM.current, iM.x, iM.y), hM(YM.current.isTouch && !kM.current)) : (JM.current.style.transform = vO(JM.current), hM(!0));
        else if (lM.current) {
          const iM = lM.current;
          let OM = MM + 10,
            SM = rM + 10;
          const jM = iM.offsetWidth,
            aM = iM.offsetHeight;
          OM + jM > window.innerWidth && (OM = MM - jM - 10), SM + aM > window.innerHeight && (SM = rM - aM - 10), OM < 0 && (OM = 0), SM < 0 && (SM = 0), lM.current.style.transform = `translate(${OM}px, ${SM}px)`
        }
      }), []), gM = (0, SM.useCallback)((MM => (rM, iM, OM) => {
        if (zM(rM && void 0 !== MM ? MM : null), rM) {
          if (void 0 === MM && !iM) return void(0, kO.b)("Error in invenComp", new Error("isHovering true but no idx or text"));
          if (void 0 !== MM) {
            var SM;
            const rM = BO();
            let iM;
            if (iM = MM === Li.e ? yM.current ? (0, Qi.j)(rM, yM.current.idx) : null : (0, Qi.j)(rM, MM), !iM) return void mM(null);
            if ((null === (SM = yM.current) || void 0 === SM ? void 0 : SM.idx) === MM) {
              if (0 === (0, Qi.b)(iM) - yM.current.amount) return void mM(null)
            }
            mM(IO(iM))
          } else mM({
            name: iM.name,
            desc: iM.desc,
            fontStyle: "normal"
          })
        } else mM(null);
        OM && setTimeout((() => {
          bM(OM.pageX, OM.pageY)
        }), 0)
      }), [bM]), uM = (0, SM.useCallback)(((MM, rM) => {
        const iM = QM.gameBridge.send("moveInventoryItem", {
          from: dM.current.idx,
          to: MM,
          amount: rM
        });
        return iM ? (dM.current.amount -= rM, dM.current.amount <= 0 && CM()) : console.error("moveInventoryItem failed"), iM
      }), [CM]), RM = (0, SM.useCallback)(((MM, rM) => {
        const iM = yM.current,
          OM = null === iM || void 0 === iM ? void 0 : iM.idx;
        iM && (iM.idx = function(MM, rM, iM) {
          return MM === rM ? iM : MM === iM ? rM : MM
        }(OM, MM, rM));
        const SM = QM.gameBridge.send("swapInventorySlots", {
          a: MM,
          b: rM
        });
        return SM ? eM(MM, rM) : iM && (iM.idx = OM), SM
      }), [eM]), pM = (0, SM.useCallback)(((MM, rM, iM, OM) => {
        const SM = QM.gameBridge.send("quickMoveInventoryItem", {
          slot: iM,
          start: MM,
          end: rM,
          amount: OM
        });
        null !== SM && eM(iM, SM)
      }), [eM]), WM = (0, SM.useCallback)(((MM, rM) => {
        var SM;
        ((MM, rM, iM) => {
          const OM = MM - (iM - gO.b.length);
          return !(!rM || OM < 0 || OM >= gO.b.length) && (0, wM.ub)(rM) !== gO.b[OM]
        })(rM, null === (SM = dM.current) || void 0 === SM ? void 0 : SM.name, BO().player.length) || (oO({
          e: MM,
          idx: rM,
          readInventory: BO,
          itemInfo: QM.gameBridge.latest("itemInfo"),
          draggedInfoRef: dM,
          specialItemRef: yM,
          moveAmtIntoSlot: uM,
          swapSlots: RM,
          moveIntoSlots: pM,
          removeItem: XO,
          removeDraggedInfoRef: CM,
          close: iM,
          canCraft: OM,
          variation: jM
        }), GM())
      }), [OM, iM, uM, pM, CM, RM, jM, GM]), sM = (0, SM.useRef)(0), DM = (0, SM.useRef)(null), kM = (0, SM.useRef)(null), ZM = (0, SM.useRef)(null), oM = (0, SM.useRef)(new Set), fM = (0, SM.useRef)({
        x: 0,
        y: 0
      }), YM = (0, SM.useRef)({
        isTouch: !1,
        itemBeingDragged: !1
      }), NM = (0, SM.useCallback)((() => (ZM.current = null, YM.current.itemBeingDragged = !1, clearTimeout(DM.current), !!kM.current && (kM.current = null, GM(), !0))), [GM]);
      (0, SM.useEffect)((() => {
        NM(), oM.current.clear()
      }), [rM]);
      const AM = MM => void 0 !== MM && (oM.current.has(MM) || null !== ZM.current && MM !== ZM.current),
        xM = MM => {
          YM.current.isTouch = (0, Qi.q)(MM)
        },
        vM = (0, SM.useCallback)((MM => rM => {
          const OM = (0, Qi.q)(rM);
          if (OM || bM(rM.pageX, rM.pageY), aM)
            if (AM(rM.pointerId)) void 0 !== rM.pointerId && oM.current.add(rM.pointerId);
            else {
              if (xM(rM), OM) {
                sM.current = rM.timeStamp, YM.current.itemBeingDragged = !0, ZM.current = rM.pointerId;
                const iM = (0, Qi.j)(BO(), MM);
                if (iM && iM.amount && iM.amount > 0) {
                  const iM = rM.pageX,
                    OM = rM.pageY,
                    SM = fM.current.x,
                    jM = fM.current.y;
                  clearTimeout(DM.current), DM.current = setTimeout((() => {
                    if (dM.current && dM.current.idx === MM && (Math.abs(iM - fM.current.x) < 20 && Math.abs(OM - fM.current.y) < 20 || SM === fM.current.x && jM === fM.current.y) && YM.current.itemBeingDragged) {
                      const MM = BO(),
                        iM = MM.creative && !MM.chest && dM.current.idx >= Gi.f.numInvenSlots && null !== (0, Qi.j)(MM, dM.current.idx).amount ? Gi.f.maxItemStackSize : dM.current.amount;
                      kM.current = {
                        initTouchX: rM.pageX,
                        initTouchY: rM.pageY,
                        maxAmount: iM
                      }, dM.current.amount = Math.ceil(dM.current.amount / 2), JM.current.style.transform = vO(JM.current), hM(!0), GM()
                    }
                  }), 500)
                }
              }
              WM(rM, MM)
            }
          else MM === Li.b && (0, Qi.o)(rM) && iM()
        }), [bM, WM, aM, iM, GM]),
        FM = (0, SM.useCallback)((MM => MM => {
          if (AM(MM.pointerId)) return;
          const rM = (0, Qi.q)(MM);
          if (xM(MM), !NM()) {
            if (rM && dM.current && MM.timeStamp - sM.current > 150) {
              const rM = document.elementFromPoint(MM.clientX, MM.clientY);
              if (null !== rM) {
                const iM = rM.getAttribute("data-inven-idx");
                null !== iM ? WM(MM, parseInt(iM)) : rM.classList.contains("InventoryBackgroundScreen") && WM(MM, -1)
              }
            }
            bM(MM.pageX, MM.pageY)
          }
        }), [bM, WM, NM]);
      (0, SM.useEffect)((() => {
        let MM;
        const iM = ["pointerup", "pointercancel"],
          OM = MM => {
            oM.current.has(MM.pointerId) ? setTimeout((() => {
              oM.current.delete(MM.pointerId)
            }), 0) : MM.pointerId === ZM.current && setTimeout((() => {
              ZM.current === MM.pointerId && NM()
            }), 0)
          };
        if (rM) {
          for (const MM of iM) document.addEventListener(MM, OM, !0);
          if (!YM.current.isTouch) {
            const MM = fM.current;
            bM(MM.x, MM.y)
          }
          MM = MM => {
            MM.preventDefault(), AM(MM.pointerId) || (xM(MM), bM(MM.pageX, MM.pageY), kM.current && MM.pointerId === ZM.current && (MM => {
              if (!dM.current) return kM.current = null, void GM();
              const {
                initTouchX: rM,
                maxAmount: iM
              } = kM.current, OM = (MM.pageX - rM) * kM.current.maxAmount / 160, SM = Math.ceil(iM / 2) + Math.ceil(OM);
              dM.current.amount = Math.min(iM, Math.max(1, SM)), GM()
            })(MM))
          }, document.addEventListener("pointermove", MM, !0)
        }
        return () => {
          document.removeEventListener("pointermove", MM, !0);
          for (const MM of iM) document.removeEventListener(MM, OM, !0)
        }
      }));
      const BM = (0, SM.useCallback)((() => {
          if (dM.current) {
            const MM = (0, Qi.j)(BO(), dM.current.idx);
            (!FO(dM.current, MM) || MM.amount < dM.current.amount) && CM()
          }
        }), [CM]),
        XM = (0, SM.useCallback)((() => {
          const MM = dM.current;
          if (MM) {
            const rM = (0, Qi.j)(BO(), MM.idx);
            FO(MM, rM) && (MM.attributes = rM.attributes)
          }
        }), []);
      return {
        draggedDomRef: JM,
        draggedInfoRef: dM,
        specialItemRef: yM,
        hoverInfoDomRef: lM,
        longHoldSplitInfoRef: kM,
        currHoveredIdx: nM,
        currHoveredDisplayInfo: LM,
        displayDraggedItemName: HM,
        forceRerenderIfVisible: GM,
        removeDraggedInfoRef: CM,
        checkDraggedItemConsistencyWithInven: BM,
        refreshDraggedAttributes: XM,
        swapSlots: RM,
        getPointerDownForIdx: vM,
        getPointerUpForIdx: FM,
        getSetHovering: gM,
        setCurrHoveredDisplayInfo: mM,
        moveFollowerTo: bM
      }
    }
    class qO {
      constructor(MM) {
        this.snapshot = [], this.newSlots = new Set, this.update(MM, !1)
      }
      update(MM, rM) {
        const iM = MM.map((MM => {
          var rM;
          return MM ? {
            name: MM.name,
            amount: null !== (rM = MM.amount) && void 0 !== rM ? rM : 1
          } : null
        }));
        iM.forEach(((MM, iM) => {
          const OM = this.snapshot[iM],
            SM = (null === MM || void 0 === MM ? void 0 : MM.name) !== (null === OM || void 0 === OM ? void 0 : OM.name);
          (!MM || SM || MM.amount < OM.amount) && this.newSlots.delete(iM), rM && MM && (SM || MM.amount > OM.amount) && this.newSlots.add(iM)
        })), this.snapshot = iM
      }
      clearMarks() {
        this.newSlots.clear()
      }
      isNew(MM) {
        return this.newSlots.has(MM)
      }
    }
    const TO = (MM, rM, iM) => ({
      button: rM,
      shiftKey: iM,
      pageX: MM.clientX,
      pageY: MM.clientY,
      clientX: MM.clientX,
      clientY: MM.clientY,
      pointerType: "mouse"
    });

    function VO(MM) {
      const [rM, iM] = (0, SM.useState)(MM);
      return MM && !rM && iM(!0), (0, SM.useEffect)((() => {
        if (rM) return;
        let MM = !0;
        const OM = () => {
            MM && (MM = !1, iM(!0))
          },
          SM = "function" === typeof window.requestIdleCallback,
          jM = SM ? window.requestIdleCallback(OM, {
            timeout: 2e3
          }) : void 0,
          aM = setTimeout(OM, SM ? 2e3 : 1e3);
        return () => {
          MM = !1, clearTimeout(aM), void 0 !== jM && window.cancelIdleCallback(jM)
        }
      }), [rM]), rM
    }
    const cO = (0, SM.memo)((function(MM) {
      var rM;
      let {
        show: iM,
        onOpen: OM,
        onClose: jM,
        variation: PM
      } = MM;
      const LM = (0, SM.useRef)(null),
        mM = (0, SM.useRef)(null),
        HM = function(MM) {
          const [rM, iM] = (0, SM.useState)(!0), [OM, jM] = (0, SM.useState)(!1), aM = (0, SM.useRef)(null), PM = (0, SM.useRef)(null), QM = (0, nM.f)("_shield"), zM = (0, SM.useRef)(null), LM = (0, nM.f)("_health"), mM = (0, SM.useRef)(null);

          function HM(MM) {
            const rM = Date.now() + MM;
            rM < PM.current || (iM(!1), clearTimeout(aM.current), PM.current = rM, aM.current = setTimeout((() => {
              iM(!0)
            }), MM))
          }
          return (0, SM.useEffect)((() => {
            HM(Hi);
            const MM = hM.i.subscribe("requestingPlayVideoAd", (() => {
              HM(Hi)
            }));
            return () => {
              clearTimeout(aM.current), hM.i.unsubscribe(MM)
            }
          }), []), (0, SM.useEffect)((() => {
            (zM.current > QM || mM.current > LM) && HM(6e4), zM.current = QM, mM.current = LM
          }), [QM, LM]), (0, SM.useEffect)((() => {
            let rM = null;
            return MM ? rM = setTimeout((() => {
              jM(!0)
            }), 250) : jM(!1), () => {
              clearTimeout(rM)
            }
          }), [MM]), rM && OM
        }(iM);
      (0, bM.e)(ii.b, null);
      const JM = (0, ii.j)(),
        dM = JM.some((MM => MM.panel)),
        {
          userContext: yM
        } = (0, CM.b)(),
        lM = (0, tM.f)("inventory", (MM => {
          const rM = MM.chest;
          return null !== rM && (GO(rM.numSlots) || wO(rM, yM.whamm))
        })),
        EM = VO(iM),
        UM = VO(iM),
        [GM, eM] = (0, SM.useState)([]),
        gM = (0, SM.useCallback)((MM => {
          eM((rM => rM.filter((rM => rM.id !== MM))))
        }), []),
        uM = (0, SM.useRef)(null),
        RM = (0, SM.useRef)(0),
        pM = (0, SM.useCallback)((() => {
          uM.current && (RM.current = uM.current.scrollTop), jM()
        }), [jM]),
        WM = (0, nM.f)("inventoryItemsMoveable"),
        sM = (0, nM.f)("canCraft"),
        {
          clientEscMenuOptions: kM
        } = (0, YM.m)(["clientEscMenuOptions"]),
        ZM = (0, SM.useRef)(null);
      ZM.current || (ZM.current = new qO(QM.gameBridge.latest("inventory").player));
      const oM = ZM.current,
        {
          draggedDomRef: fM,
          draggedInfoRef: NM,
          specialItemRef: AM,
          hoverInfoDomRef: xM,
          longHoldSplitInfoRef: vM,
          currHoveredIdx: FM,
          currHoveredDisplayInfo: BM,
          displayDraggedItemName: XM,
          forceRerenderIfVisible: IM,
          removeDraggedInfoRef: KM,
          checkDraggedItemConsistencyWithInven: qM,
          refreshDraggedAttributes: TM,
          swapSlots: VM,
          getPointerDownForIdx: cM,
          getPointerUpForIdx: Mr,
          getSetHovering: rr,
          setCurrHoveredDisplayInfo: ir,
          moveFollowerTo: Or
        } = KO({
          show: iM,
          close: pM,
          canCraft: sM,
          variation: PM,
          inventoryItemsMoveable: WM,
          setCraftFlyAnims: eM
        });
      (0, SM.useEffect)((() => {
        const MM = !iM && null !== QM.gameBridge.latest("inventory").chest;
        if (MM && QM.gameBridge.send("closeChest", null), iM || (oM.clearMarks(), rr(null)(!1)), MM) {
          Pi.e.play("chestClose", 1).rate(.8 + .4 * Math.random())
        }
      }), [iM]), (0, tM.c)("chestToggled", (MM => {
        if (MM ? OM() : iM && pM(), MM) {
          Pi.e.play("chestOpen", 1).rate(.8 + .4 * Math.random())
        }
      }));
      const Sr = (0, Rr.h)();
      (0, tM.c)("inventory", (MM => {
        let {
          player: rM
        } = MM;
        var OM, SM, jM;
        (oM.update(rM, !iM && Sr.shown), AM.current) && (AM.current = (SM = AM.current, jM = null !== (OM = rM[AM.current.idx]) && void 0 !== OM ? OM : null, FO(SM, jM) ? (SM.attributes = jM.attributes, null !== jM.amount && SM.amount > jM.amount && (SM.amount = jM.amount), SM) : null));
        TM(), null !== FM && rr(FM)(!0), IM()
      })), (0, SM.useEffect)((() => (QM.gameBridge.send("setInventoryOpen", iM), () => {
        QM.gameBridge.send("setInventoryOpen", !1)
      })), [iM]);
      const jr = (MM, rM) => {
        if (MM === Li.e) return void(MM => {
          const rM = AM.current;
          if (!rM || null === (0, Qi.j)(QM.gameBridge.latest("inventory"), rM.idx)) return;
          const iM = MM ? Math.max(rM.amount, 1) : 1,
            OM = rM.amount - iM;
          if (!QM.gameBridge.send("removeInventoryItem", {
              slot: rM.idx,
              amount: iM,
              drop: !0
            })) return;
          const SM = AM.current;
          SM && (SM.amount = Math.min(SM.amount, OM), SM.amount <= 0 && (AM.current = null)), IM()
        })(rM);
        const iM = null === MM ? null : (0, Qi.j)(QM.gameBridge.latest("inventory"), MM);
        if (null !== iM) {
          var OM, SM, jM;
          const aM = rM && null !== (OM = iM.amount) && void 0 !== OM ? OM : 1;
          QM.gameBridge.send("removeInventoryItem", {
            slot: MM,
            amount: aM,
            drop: !0
          }), MM === (null === (SM = NM.current) || void 0 === SM ? void 0 : SM.idx) && (NM.current.amount -= aM, NM.current.amount <= 0 && KM(), IM()), MM === (null === (jM = AM.current) || void 0 === jM ? void 0 : jM.idx) && (AM.current = null, IM())
        }
      };
      (0, tM.c)("inventoryDropRequested", (MM => {
        iM && FM !== Li.e && jr(FM, MM)
      }));
      const ar = (MM, rM) => {
        let iM = rM;
        if (rM === Li.e) {
          if (!AM.current) return;
          iM = AM.current.idx
        }
        const OM = VM(MM, iM);
        if (OM && NM.current && (NM.current.idx === iM ? NM.current.idx = MM : NM.current.idx === MM && (NM.current.idx = iM)), OM && rM === Li.e) {
          const MM = (0, Qi.j)(QM.gameBridge.latest("inventory"), iM);
          AM.current = MM ? {
            idx: iM,
            name: MM.name,
            attributes: MM.attributes,
            amount: (0, Qi.b)(MM)
          } : null
        }
        IM()
      };
      (0, tM.c)("numberKeyPressed", (MM => {
        null !== FM && iM && ar(MM - 1, FM)
      })), (0, SM.useEffect)((() => {
        iM || (AM.current = null, KM(), ir(null))
      }), [iM, KM, ir, AM]);
      const Pr = AM.current;
      (0, SM.useEffect)((() => {
        FM === Li.e && rr(Li.e)(!0)
      }), [Pr, FM, rr]);
      const nr = () => {
        qM(), TM(), IM()
      };
      (0, tM.c)("chestRefreshed", nr), (0, tM.c)("inventorySynced", nr);
      const [Qr, zr] = (0, SM.useState)(new Map), Lr = null !== (rM = Qr.get(PM)) && void 0 !== rM ? rM : null, mr = (MM, rM) => {
        zr((iM => {
          const OM = iM.get(MM);
          return OM && OM.name === rM.name && OM.ma === rM.ma ? iM : new Map(iM).set(MM, rM)
        }))
      };
      (0, bM.d)("craftingRecipesEdited", (() => {
        IM()
      })), (0, bM.d)(Xi.c, (MM => {
        let {
          variation: rM,
          itemName: iM
        } = MM;
        mr(rM, {
          name: iM,
          ma: 0
        })
      }));
      const [Hr, hr] = (0, SM.useState)(null), [Jr, dr] = (0, SM.useState)(null);
      (0, tM.c)("enchantingTableOpened", (MM => {
        let {
          position: rM,
          blockName: iM
        } = MM;
        hr(rM), dr(iM)
      }));
      const [yr, lr] = (0, SM.useState)(""), [Er, Ur] = (0, SM.useState)(null);
      (0, SM.useEffect)((() => {
        iM && uM.current && (uM.current.scrollTop = RM.current)
      }), [iM]);
      return (MM => {
        const rM = (0, SM.useRef)(MM);
        rM.current = MM, (0, SM.useEffect)((() => {
          if (!MM.show) return;
          const iM = (MM, iM, OM, SM) => {
              const {
                getPointerDownForIdx: jM,
                getPointerUpForIdx: aM
              } = rM.current;
              jM(MM)(TO(iM, OM, SM)), aM(MM)(TO(iM, OM, SM))
            },
            OM = {
              primary: (MM, rM) => {
                iM(MM, rM, 0, !1)
              },
              secondary: (MM, rM) => {
                iM(MM, rM, 2, !1)
              },
              quickMove: (MM, rM) => {
                iM(MM, rM, 0, !0)
              },
              dropHeld: (MM, iM) => {
                rM.current.getPointerDownForIdx(Li.b)(TO(iM, MM ? 0 : 2, !1))
              },
              dropSlot: (MM, iM) => {
                rM.current.dropFromIdx(MM, iM)
              },
              swapWithHotbar: (MM, iM) => {
                rM.current.swapWithHotbar(MM, iM)
              },
              cancel: () => {
                rM.current.removeDraggedInfoRef()
              },
              isHolding: () => !!rM.current.draggedInfoRef.current,
              hasItemAt: MM => {
                const {
                  draggedInfoRef: iM,
                  specialItemRef: OM
                } = rM.current;
                if (MM === Li.e) return !!OM.current;
                const SM = (0, Qi.j)(QM.gameBridge.latest("inventory"), MM);
                return !!SM && (0, gi.g)(MM, (0, Qi.b)(SM), [iM.current, OM.current]).shown
              },
              hover: (MM, iM) => {
                const {
                  moveFollowerTo: OM,
                  getSetHovering: SM
                } = rM.current;
                OM(iM.clientX, iM.clientY), SM(null !== MM && void 0 !== MM ? MM : void 0)(null !== MM, void 0, {
                  pageX: iM.clientX,
                  pageY: iM.clientY
                })
              },
              moveTo: MM => {
                rM.current.moveFollowerTo(MM.clientX, MM.clientY)
              },
              close: () => {
                rM.current.close()
              }
            };
          return (0, Oi.p)(OM)
        }), [MM.show])
      })({
        show: iM,
        close: pM,
        draggedInfoRef: NM,
        specialItemRef: AM,
        getPointerDownForIdx: cM,
        getPointerUpForIdx: Mr,
        getSetHovering: rr,
        moveFollowerTo: Or,
        removeDraggedInfoRef: KM,
        dropFromIdx: jr,
        swapWithHotbar: ar
      }), (0, SM.useEffect)((() => {
        hM.i.Tz("inventoryDraggedItemUpdated", {
          draggedInfo: NM.current,
          specialItemInfo: AM.current,
          setHovered: rr,
          pointerDown: cM,
          pointerUp: Mr,
          variation: sM ? PM : void 0,
          craftFlyAnims: GM
        })
      })), (0, zM.jsxs)(DM.d, {
        show: iM,
        style: {
          touchAction: iM ? "none" : void 0
        },
        children: [NM.current && (0, zM.jsx)(di, {
          draggedInfo: NM.current,
          toAddRef: fM
        }), NM.current && XM && (0, zM.jsx)(yi, {
          className: "DraggedInvenItemName",
          displayInfo: IO(NM.current),
          domRef: null
        }), !NM.current && BM && (0, zM.jsx)(yi, {
          displayInfo: BM,
          domRef: xM
        }), vM.current && NM.current && (0, zM.jsx)(li, {
          info: vM.current,
          draggedInfo: NM.current
        }), GM.map((MM => (0, zM.jsx)(zi.c, {
          anim: MM,
          onComplete: gM
        }, MM.id))), (0, zM.jsx)(aM.e, {
          show: iM,
          className: "InventoryBackgroundScreen",
          globallyUniqueKey: "Inventory",
          close: pM,
          togglePointerLock: !1,
          closeOnPressBackground: !1,
          preventContextMenu: !0,
          pointerDown: cM(Li.b),
          pointerUp: Mr(Li.b),
          doGameplayStartStopOnShow: !0
        }), EM && (0, zM.jsxs)("div", {
          className: "EntireInventoryWrapper",
          children: [(0, zM.jsx)("div", {
            ref: LM,
            className: "InventoryAdOuter",
            children: (0, zM.jsx)(ni.e, {
              info: {
                adType: "leaderboard",
                adId: 6,
                adAlias: "inventory"
              },
              sizeInfo: {
                parentRef: LM
              },
              verticalAlign: "start",
              showing: iM && HM,
              extraContrastBackgroundBox: "top",
              noFillShowBloxdAdProbability: 0,
              autoRefreshMode: "none"
            })
          }), (0, zM.jsxs)("div", {
            className: "InventoryWrapper",
            children: [(0, zM.jsxs)("div", {
              className: Ui()("Inventory", {
                WithGameButtons: JM.length > 0,
                WithPanelButtons: dM,
                WideChestOpen: lM
              }),
              children: [(0, zM.jsx)("div", {
                className: "InventoryFiller"
              }), (0, zM.jsx)(ai, {
                show: iM,
                buttons: JM
              }), (0, zM.jsxs)("div", {
                className: "InvenBody",
                children: [(0, zM.jsx)(tO, {
                  variation: PM,
                  canCraft: sM,
                  show: iM,
                  creativeMounted: UM,
                  specialItemRef: AM,
                  draggedInfo: NM.current,
                  getSetHovering: rr,
                  getPointerDownForIdx: cM,
                  getPointerUpForIdx: Mr,
                  enchantingTablePosition: Hr,
                  enchantingTableBlockName: Jr,
                  selectedCraftable: Lr,
                  dispatchSelectedCraftable: MM => {
                    mr(PM, MM)
                  },
                  creativeScrollDiv: uM,
                  creativeSearchVal: yr,
                  setCreativeSearchVal: lr,
                  creativeCategory: Er,
                  setCreativeCategory: Ur,
                  onCraft: function(MM, rM) {
                    let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    if (qM(), (MM || iM.length > 0) && eM((rM => {
                        const OM = [...rM],
                          SM = rM.filter((MM => "ingredient" === MM.kind)).length;
                        for (const MM of iM.slice(0, Math.max(0, 24 - SM))) OM.push({
                          id: (0, zi.f)(),
                          ...MM,
                          to: MM.to
                        });
                        return MM && OM.push({
                          id: (0, zi.f)(),
                          ...MM,
                          to: (0, Qi.c)(MM.Pz)
                        }), OM
                      })), null !== rM) {
                      var OM;
                      const MM = QM.gameBridge.latest("inventory");
                      (0, wM.ub)(null === (OM = (0, Qi.j)(MM, rM)) || void 0 === OM ? void 0 : OM.name) ? cM(rM)({
                        button: 0,
                        shiftKey: !0
                      }): VM(rM, MM.selectedSlot)
                    }
                  }
                }), (0, zM.jsx)(DO, {
                  draggedInfo: NM.current,
                  specialItemInfo: AM.current,
                  craftFlyAnims: GM,
                  getSetHovering: rr,
                  getPointerDownForIdx: cM,
                  getPointerUpForIdx: Mr,
                  variation: PM,
                  canCraft: sM,
                  isNewSlot: MM => kM.showNewItemIndicator && oM.isNew(MM)
                })]
              })]
            }), (0, zM.jsx)("div", {
              className: "InventoryAdOuter",
              children: (0, zM.jsx)("div", {
                ref: mM,
                className: "InventoryAd",
                children: (0, zM.jsx)("div", {
                  className: "InventoryAdInner"
                })
              })
            })]
          })]
        })]
      })
    }));
    var MS = iM(1503),
      rS = iM(119);
    const iS = (0, SM.memo)((function(MM) {
      let {
        show: rM,
        onOpen: iM,
        onClose: OM
      } = MM;
      const jM = (0, SM.useRef)(0),
        PM = () => (0, MS.j)() && !(0, MS.q)() && jM.current <= 2;
      rM = PM() && rM;
      const nM = () => {
        jM.current++, OM()
      };
      (0, bM.d)("ctrlCrouchWithoutFullscreen", (() => {
        PM() && iM()
      })), (0, bM.d)("displaymodeFullscreenChange", (MM => {
        rM && MM && nM()
      }));
      const QM = "crazygames" === rS.siteUsed;
      return (0, zM.jsx)(aM.e, {
        close: nM,
        escDoesExit: !0,
        show: rM,
        togglePointerLock: !1,
        globallyUniqueKey: "CantCtrlCrouchIfNotFullscreenComp",
        children: (0, zM.jsxs)("div", {
          className: "CantCtrlCrouchIfNotFullscreenComp SmallTextBold",
          children: [(0, zM.jsx)("div", {
            className: "CantCtrlCrouchHeader",
            children: "Go fullscreen to crouch with ctrl"
          }), QM && (0, zM.jsx)("div", {
            className: "CantCtrlCrouchInstructions SmallTextLight",
            children: "Press the crazygames full screen button"
          }), (0, zM.jsx)("div", {
            className: "CantCtrlCrouchSubtext SmallTextLight",
            children: "(Otherwise I can't stop CTRL+W closing the window!)"
          }), (0, zM.jsxs)("div", {
            className: "CantCtrlCrouchButtonsContainer",
            children: [!QM && (0, zM.jsx)(HM.p, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                (0, MS.u)(), nM()
              },
              children: (0, zM.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Go Fullscreen"
              })
            }), (0, zM.jsx)(HM.J, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                nM()
              },
              children: (0, zM.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Nevermind"
              })
            })]
          })]
        })
      })
    }));
    var OS = iM(2969),
      SS = iM(3e3),
      jS = iM(1429),
      aS = iM(3977),
      PS = iM(1438),
      nS = iM(3025),
      QS = iM(3983),
      zS = iM(3989);

    function LS(MM, rM) {
      return (0, nS.i)(!0, MM, rM) ? () => {
        !async function(MM) {
          await aS.c.refresh();
          const {
            data: rM,
            failed: iM
          } = aS.c.getState();
          if (null === rM || iM) return;
          const OM = aS.c.getExclusion(MM);
          if ("blocked" === OM) return;
          const SM = null === OM;
          jS.NotificationProvider.showCustomPopup({
            body: rM => {
              const iM = iM => ({
                text: QS.l[iM].text,
                onClick: () => {
                  rM(), (0, zS.d)(iM, MM, null)
                }
              });
              return (0, zM.jsx)(PS.i, {
                title: SM ? "socialBar:ignoreOrBlockAfterReport" : "socialBar:blockAfterReport",
                textOpts: {
                  title: {
                    playerName: MM
                  }
                },
                secondary: SM ? iM("ignore") : void 0,
                confirm: iM("block"),
                cancel: {
                  text: "socialBar:notNow",
                  onClick: rM
                },
                destructive: !0
              })
            },
            disableExitButton: !0,
            unlockPointerKey: "exclusionAfterReport"
          })
        }(MM)
      } : null
    }
    iM(2986);
    const mS = (0, SM.memo)((function(MM) {
      let {
        show: rM,
        onOpen: iM,
        onClose: OM
      } = MM;
      const [jM, PM] = (0, SM.useState)(""), [nM, LM] = (0, SM.useState)(""), [mM, HM] = (0, SM.useState)(null), [hM, JM] = (0, SM.useState)(null), dM = (0, tM.j)("hiddenPlayerNames"), yM = {
        kind: "worldCodeLine",
        onSubmit: (MM, rM) => {
          OM(), QM.gameBridge.send("reportWorldCodeChat", {
            chatMsgId: hM,
            lQ: MM,
            details: rM
          })
        }
      }, lM = {
        kind: "player",
        shownPlayerName: (0, rr.d)(jM, dM),
        onSubmit: (MM, rM) => {
          OM(), (0, SS.d)({
            playerId: nM,
            playerName: jM,
            chatMsgId: hM,
            policyId: MM,
            details: rM,
            onAccepted: LS(jM, dM)
          })
        }
      };
      return (0, bM.d)("OpenReportMenu", (MM => {
        let {
          playerEId: rM,
          playerName: OM,
          Kz: SM,
          serverChatMsgId: jM
        } = MM;
        LM(rM), PM(OM), HM(SM), JM(jM), iM()
      })), (0, zM.jsx)(aM.e, {
        show: rM,
        close: OM,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeReportComponent",
        children: (0, zM.jsx)("div", {
          className: "ReportPanel",
          children: rM && (0, zM.jsx)(OS.c, {
            reported: null === nM ? yM : lM,
            chatMessage: mM,
            inGame: !0,
            onCancel: OM
          })
        })
      })
    }));
    var HS = iM(37790),
      hS = iM(2978);
    const JS = {
        playerGone: "report:reportKeyPlayerGone",
        rateLimited: "report:reportKeyRateLimited",
        timedOut: "report:reportKeyTimedOut"
      },
      dS = (0, SM.memo)((function(MM) {
        var rM, iM;
        let {
          show: OM,
          onOpen: jM,
          onClose: PM
        } = MM;
        const {
          t: nM
        } = (0, KM.A)(), [LM, mM] = (0, SM.useState)(null), [hM, JM] = (0, SM.useState)(0);
        (0, bM.d)("OpenDiscordReportBox", (MM => {
          QM.gameBridge.send("requestDiscordReportKey", MM), mM(null), JM(0), jM()
        })), (0, bM.d)("setDiscordReportKey", mM);
        const dM = OM && null === LM;
        (0, SM.useEffect)((() => {
          if (!dM) return;
          const MM = setTimeout((() => {
            console.warn("No answer to a Discord report key request within 10000 ms"), mM({
              LM: null,
              mM: "timedOut"
            })
          }), 1e4);
          return () => {
            clearTimeout(MM)
          }
        }), [dM]);
        const yM = null !== (rM = null === LM || void 0 === LM ? void 0 : LM.LM) && void 0 !== rM ? rM : null,
          lM = null !== (iM = null === LM || void 0 === LM ? void 0 : LM.mM) && void 0 !== iM ? iM : null;
        return (0, zM.jsx)(aM.e, {
          show: OM,
          close: PM,
          padShowsHud: !0,
          togglePointerLock: !1,
          escDoesExit: !0,
          className: "ReportBackgroundScreen",
          globallyUniqueKey: "MakeDiscordReportComponent",
          children: (0, zM.jsx)("div", {
            className: "ReportPanel",
            children: (0, zM.jsxs)(PS.i, {
              className: "ReportKeyBox",
              title: "report:discordReportTitle",
              subtitle: null === lM ? "report:discordReportDescription" : void 0,
              confirm: null === lM ? {
                text: "report:openDiscord",
                onClick: () => {
                  window.open(HS.d, "_blank", "noreferrer")
                },
                padMouseOnly: !0
              } : void 0,
              cancel: {
                text: null === lM ? "general:cancel" : "general:ok",
                onClick: PM
              },
              padStartsOn: "cancel",
              children: [null !== lM && (0, zM.jsx)(hS.b, {
                children: nM(JS[lM])
              }), null === lM && (0, zM.jsxs)("div", {
                className: "ReportKeyRow",
                children: [(0, zM.jsx)("div", {
                  className: "ReportKeyInner",
                  children: null !== yM && void 0 !== yM ? yM : nM("report:loadingReportKey")
                }), (0, zM.jsx)(HM.e, {
                  className: "ReportKeyCopyButton",
                  onClick: () => {
                    navigator.clipboard.writeText(yM).catch((MM => {
                      console.error("Failed to copy report key:", MM)
                    })), JM(Date.now())
                  },
                  disabled: Date.now() - hM < 1e3 || !yM,
                  children: Date.now() - hM < 1e3 ? nM("general:copied") : nM("general:copy")
                })]
              })]
            })
          })
        })
      }));
    var yS = iM(1313);
    const lS = {
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
      ES = (0, SM.memo)((function(MM) {
        let {
          show: rM,
          onOpen: iM,
          onClose: OM
        } = MM;
        const [jM, PM] = (0, SM.useState)(null), nM = (0, SM.useRef)(0), LM = (0, SM.useRef)(null), {
          t: mM
        } = (0, KM.A)();
        (0, bM.d)("EditCustomLobbyBlock", (MM => {
          let {
            pos: rM
          } = MM;
          PM(rM), null !== rM && iM(), LM.current.scrollTo(0, nM.current)
        }));
        const HM = MM => {
          QM.gameBridge.send("setCustomLobbyBlock", {
            pos: jM,
            blockName: MM
          }), OM()
        };
        return (0, zM.jsx)(aM.e, {
          className: "CustomLobbyBlockEditorOuter",
          close: OM,
          escDoesExit: !0,
          show: rM,
          togglePointerLock: !1,
          globallyUniqueKey: "CustomLobbyBlockEditor",
          children: (0, zM.jsx)("div", {
            className: "CustomLobbyBlockEditor",
            ref: LM,
            onScroll: () => {
              nM.current = LM.current.scrollTop
            },
            children: (0, zM.jsx)("div", {
              className: "CustomLobbyBlockGameContainer",
              children: Object.entries(lS).map((MM => {
                let [rM, iM] = MM;
                return (0, zM.jsxs)("div", {
                  className: "CustomLobbyBlockGame",
                  children: [(0, zM.jsx)("h2", {
                    className: "CustomLobbyBlockGameTitle",
                    children: mM(rM)
                  }), (0, zM.jsx)("div", {
                    className: "CustomLobbyBlockCategoryContainer",
                    children: Object.entries(iM).map((MM => {
                      let [rM, {
                        tooltip: iM,
                        blocks: OM
                      }] = MM;
                      return (0, zM.jsxs)("div", {
                        className: "CustomLobbyBlockCategory",
                        children: [(0, zM.jsxs)("h3", {
                          className: "CustomLobbyBlockCategoryTitle",
                          children: [mM(rM), (0, zM.jsx)(XM.e, {
                            hoverInfo: mM(iM),
                            className: "CustomLobbyBlockTooltip"
                          })]
                        }), (0, zM.jsx)("div", {
                          className: "CustonLobbyBlockContainer",
                          children: OM.map((MM => (0, zM.jsx)(US, {
                            blockName: MM,
                            selectBlock: HM
                          }, MM)))
                        })]
                      }, rM)
                    }))
                  })]
                }, rM)
              }))
            })
          })
        })
      })),
      US = (0, SM.memo)((function(MM) {
        var rM;
        let {
          blockName: iM,
          selectBlock: OM
        } = MM;
        const SM = (0, nO.d)(iM),
          jM = null !== (rM = void 0 === SM ? void 0 : (0, PO.displayNameOf)(SM)) && void 0 !== rM ? rM : iM,
          aM = void 0 === SM ? void 0 : (0, PO.descriptionOf)(SM);
        return (0, zM.jsx)(XM.i, {
          tooltipInner: (0, zM.jsxs)("div", {
            className: "CustomLobbyBlockNameTooltip",
            children: [(0, zM.jsx)("div", {
              className: "CustomLobbyBlockName",
              children: (0, zM.jsx)(eM.b, {
                text: jM
              })
            }), aM && (0, zM.jsx)("div", {
              className: "CustomLobbyBlockDescription",
              children: (0, zM.jsx)(eM.b, {
                text: aM
              })
            })]
          }),
          children: (0, zM.jsx)("div", {
            className: "CustomLobbyBlockButton",
            onClick: () => OM(iM),
            children: (0, zM.jsx)(ji.b, {
              itemName: iM,
              amount: 1
            })
          })
        }, iM)
      }));
    var GS = iM(2798),
      CS = iM(4565),
      eS = iM(35051);

    function bS() {
      const MM = (0, tM.j)("itemInfo");
      return (0, SM.useMemo)((() => function(MM) {
        return {
          getDefaultItemStat(rM, iM) {
            var OM;
            const SM = MM[rM];
            return "description" === iM ? null === SM || void 0 === SM ? void 0 : SM.description : null !== (OM = null === SM || void 0 === SM ? void 0 : SM.displayName) && void 0 !== OM ? OM : rM
          }
        }
      }(MM)), [MM])
    }
    const wS = (0, SM.memo)((function(MM) {
        var rM, iM, OM, jM, PM, nM, QM, LM, mM, HM, hM, JM, yM, lM, EM, UM, GM, CM, eM, wM, tM, gM, uM;
        let {
          togglePointerLock: RM,
          show: pM,
          onOpen: WM,
          onClose: sM
        } = MM;
        const {
          t: DM
        } = (0, KM.A)(), kM = bS(), ZM = (0, SM.useRef)(null), oM = (0, SM.useRef)(CS.d.MobHungerLevel.Hungry), fM = (0, SM.useRef)(null), YM = (0, GS.b)(), NM = (0, SM.useRef)(null), AM = (0, SM.useRef)(null), xM = ZM.current;
        (0, SM.useEffect)((() => {
          if (!pM) return;
          const MM = eS.l.openPet(NM.current);
          return AM.current = MM, () => {
            MM.close(), AM.current = null
          }
        }), [pM]), (0, SM.useEffect)((() => {
          pM && xM && AM.current.show(function(MM) {
            var rM;
            let {
              mobType: iM,
              mobSettings: OM
            } = MM;
            return {
              mobType: iM,
              variation: null !== (rM = OM.variation) && void 0 !== rM ? rM : "default",
              metaInfo: OM.metaInfo,
              tamed: !(0, UO.J)(OM.ownerDbId)
            }
          }(xM))
        }), [pM, xM]), (0, SM.useEffect)((() => {
          const MM = () => {
            var MM;
            const rM = CS.d.getMobHungerLevel(null === (MM = ZM.current) || void 0 === MM ? void 0 : MM.mobSettings.petInfo.lastFedAt);
            if (rM !== oM.current && (oM.current = rM, YM()), fM.current) {
              var iM;
              const MM = Date.now(),
                rM = CS.d.getNextStateAt(null === (iM = ZM.current) || void 0 === iM ? void 0 : iM.mobSettings.petInfo.lastFedAt);
              let OM = Math.floor((rM - MM) / 1e3),
                SM = "";
              if (OM > 3600) {
                SM += Math.floor(OM / 60 / 60).toString().padStart(2, "0"), SM += ":", OM %= 3600
              }
              const jM = OM % 60;
              SM += Math.floor(OM / 60).toString().padStart(2, "0"), SM += ":", SM += jM.toString().padStart(2, "0"), fM.current.textContent = SM
            }
          };
          MM();
          const rM = setInterval(MM, 250);
          return () => {
            clearInterval(rM)
          }
        }), [xM, YM]), (0, bM.d)("showPetUi", (MM => {
          let {
            mobType: rM,
            mobSettings: iM
          } = MM;
          ZM.current = {
            mobType: rM,
            mobSettings: iM
          }, pM || WM()
        }));
        const vM = null === (rM = ZM.current) || void 0 === rM ? void 0 : rM.mobSettings.health,
          FM = null === (iM = ZM.current) || void 0 === iM ? void 0 : iM.mobSettings.maxHealth,
          BM = CS.d.getFriendshipLevelInfo(null !== (OM = null === (jM = ZM.current) || void 0 === jM ? void 0 : jM.mobSettings.petInfo.friendshipPoints) && void 0 !== OM ? OM : 0);
        return (0, zM.jsx)(aM.e, {
          className: "PetUIOuter",
          close: sM,
          escDoesExit: !0,
          show: pM,
          togglePointerLock: RM,
          forcePointerUnlock: pM,
          globallyUniqueKey: "PetUI",
          children: (0, zM.jsx)("div", {
            className: "PetUI",
            children: (0, zM.jsxs)("div", {
              className: "PetUIContainer",
              children: [(0, zM.jsxs)("div", {
                className: "PetUILeftSideContainer",
                children: [(0, zM.jsx)("div", {
                  className: "PetUITitle",
                  children: null !== (PM = null === (nM = ZM.current) || void 0 === nM ? void 0 : nM.mobSettings.name) && void 0 !== PM ? PM : "Your Pet"
                }), (0, zM.jsx)("div", {
                  className: "PetUICanvasContainer",
                  ref: NM
                })]
              }), (0, zM.jsxs)("div", {
                className: "PetUIInformation",
                children: [!(0, UO.J)(null === (QM = ZM.current) || void 0 === QM ? void 0 : QM.mobSettings.petInfo.friendshipPoints) && (0, zM.jsxs)("div", {
                  className: "PetUIFriendshipPoints",
                  children: [(0, zM.jsx)("div", {
                    className: "PetUIFriendshipPointsTitle",
                    children: DM("mobAiPlugin:friendshipTitle")
                  }), (0, zM.jsx)("div", {
                    className: "PetUIFriendshipHearts",
                    children: CS.d.getIconsFromFriendshipPoints(null !== (LM = ZM.current.mobSettings.petInfo.friendshipPoints) && void 0 !== LM ? LM : 0).map(((MM, rM) => (0, zM.jsx)("div", {
                      className: "PetUIFriendshipHeart",
                      children: (0, zM.jsx)(ji.b, {
                        itemName: MM,
                        amount: 1
                      })
                    }, rM)))
                  }), (0, zM.jsx)("div", {
                    className: "PetUIFriendshipBar",
                    children: (0, zM.jsxs)("div", {
                      className: "PetUIFriendshipBarBackground",
                      children: [(0, zM.jsx)("div", {
                        className: "PetUIFriendshipBarForeground",
                        style: {
                          transform: `scaleX(${BM.totalPointsForNextLevel>0?Math.max(BM.pointsIntoCurrentLevel/BM.totalPointsForNextLevel,0):1})`,
                          transformOrigin: "left center"
                        }
                      }), (0, zM.jsx)("div", {
                        className: "PetUIFriendshipBarText",
                        children: CS.d.getFriendshipBarText(BM)
                      })]
                    })
                  })]
                }), (0, zM.jsxs)("div", {
                  className: "PetUIHungry",
                  children: [(0, zM.jsx)("div", {
                    className: "PetUIHungryTitle",
                    children: DM("mobAiPlugin:hungerTitle")
                  }), (0, zM.jsx)("div", {
                    className: "PetUIHungryCurrent",
                    children: CS.d.hungerLevelIcons[oM.current].map(((MM, rM) => (0, zM.jsx)("div", {
                      className: "PetUIHungryIcon",
                      children: (0, zM.jsx)(ji.b, {
                        itemName: MM,
                        amount: 1
                      })
                    }, rM)))
                  }), (0, zM.jsxs)("div", {
                    className: "PetUIHungryLevel",
                    children: [DM(CS.d.hungerLevelTranslations[oM.current].translationKey), oM.current !== CS.d.MobHungerLevel.Starving && !(0, UO.J)(null === (mM = ZM.current) || void 0 === mM ? void 0 : mM.mobSettings.petInfo.lastFedAt) && (0, zM.jsxs)("div", {
                      className: "PetUIHungryNext",
                      children: [DM("mobAiPlugin:nextFeedIn", {
                        state: DM(CS.d.hungerLevelTranslations[oM.current + 1].translationKey)
                      }), ":", " ", (0, zM.jsx)("span", {
                        ref: fM
                      })]
                    })]
                  })]
                }), (0, zM.jsx)(XM.i, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, zM.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: DM("mobAiPlugin:healthTooltip")
                  }),
                  children: (0, zM.jsxs)("div", {
                    className: Ui()("PetUIQuickStatsItem", {
                      Disabled: (0, UO.J)(vM) || (0, UO.J)(FM)
                    }),
                    children: [(0, zM.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, zM.jsx)(ji.b, {
                        itemName: "Health",
                        amount: 1
                      })
                    }), (0, zM.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (0, UO.J)(vM) || (0, UO.J)(FM) ? "" : (0, zM.jsxs)(zM.Fragment, {
                        children: [Math.ceil(vM), (0, zM.jsxs)("span", {
                          className: "PetUIQuickStatsValueMax",
                          children: ["/", Math.ceil(FM)]
                        })]
                      })
                    })]
                  })
                }), (0, zM.jsx)(XM.i, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, zM.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: DM("mobAiPlugin:attackDamageTooltip")
                  }),
                  children: (0, zM.jsxs)("div", {
                    className: Ui()("PetUIQuickStatsItem", {
                      Disabled: (0, UO.J)(null === (HM = ZM.current) || void 0 === HM ? void 0 : HM.mobSettings.attackDamage) || ZM.current.mobSettings.attackDamage <= 0
                    }),
                    children: [(0, zM.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, zM.jsx)(ji.b, {
                        itemName: "Iron Sword",
                        amount: 1
                      })
                    }), (0, zM.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (hM = ZM.current) || void 0 === hM ? void 0 : hM.mobSettings.attackDamage) || ""
                    })]
                  })
                }), (0, zM.jsx)(XM.i, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, zM.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: DM("mobAiPlugin:secondaryAttackDamageTooltip")
                  }),
                  children: (0, zM.jsxs)("div", {
                    className: Ui()("PetUIQuickStatsItem", {
                      Disabled: (0, UO.J)(null === (JM = ZM.current) || void 0 === JM ? void 0 : JM.mobSettings.secondaryAttackDamage) || ZM.current.mobSettings.secondaryAttackDamage <= 0
                    }),
                    children: [(0, zM.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, zM.jsx)(ji.b, {
                        itemName: "Stone Crossbow",
                        amount: 1
                      })
                    }), (0, zM.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (yM = ZM.current) || void 0 === yM ? void 0 : yM.mobSettings.secondaryAttackDamage) || ""
                    })]
                  })
                }), (0, zM.jsx)(XM.i, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, zM.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: DM("mobAiPlugin:speedTooltip")
                  }),
                  children: (0, zM.jsxs)("div", {
                    className: Ui()("PetUIQuickStatsItem", {
                      Disabled: (0, UO.J)(null === (lM = ZM.current) || void 0 === lM ? void 0 : lM.mobSettings.baseRunningSpeed)
                    }),
                    children: [(0, zM.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, zM.jsx)(ji.b, {
                        itemName: "Speed",
                        amount: 1
                      })
                    }), (0, zM.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: null !== (EM = null === (UM = ZM.current) || void 0 === UM || null === (GM = UM.mobSettings.baseRunningSpeed) || void 0 === GM ? void 0 : GM.toFixed(2)) && void 0 !== EM ? EM : ""
                    })]
                  })
                }), (0, zM.jsx)(XM.i, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, zM.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: DM("mobAiPlugin:saddledTooltip")
                  }),
                  children: (0, zM.jsxs)("div", {
                    className: Ui()("PetUIQuickStatsItem", {
                      Disabled: "Saddled" !== (null === (CM = ZM.current) || void 0 === CM ? void 0 : CM.mobSettings.metaInfo)
                    }),
                    children: [(0, zM.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, zM.jsx)(ji.b, {
                        itemName: "Saddle",
                        amount: 1
                      })
                    }), (0, zM.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: "Saddled" === (null === (eM = ZM.current) || void 0 === eM ? void 0 : eM.mobSettings.metaInfo) ? (0, zM.jsx)(dM.b, {
                        name: "check"
                      }) : ""
                    })]
                  })
                }), !(0, UO.J)(null === (wM = ZM.current) || void 0 === wM ? void 0 : wM.mobSettings.tameInfo) && (0, zM.jsxs)(zM.Fragment, {
                  children: [(0, zM.jsxs)("div", {
                    className: "PetUIFood",
                    children: [(0, zM.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, zM.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, zM.jsx)(gS, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:superlikedFoodTitle"
                          },
                          description: null,
                          tintColor: CS.d.feedTextColours[CS.d.MobFoodType.Superliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, zM.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: (0, zM.jsx)("div", {
                          className: "PetUIFoodItem",
                          children: ZM.current.mobSettings.petInfo.superlikedFoodKnown ? (0, zM.jsx)(tS, {
                            food: ZM.current.mobSettings.petInfo.superlikedFood
                          }) : (0, zM.jsx)(gS, {
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
                    }), (0, zM.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, zM.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, zM.jsx)(gS, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:likedFoodTitle"
                          },
                          description: null,
                          tintColor: CS.d.feedTextColours[CS.d.MobFoodType.Liked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, zM.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (tM = ZM.current.mobSettings.tameInfo.likedFoods) || void 0 === tM ? void 0 : tM.filter((MM => !ZM.current.mobSettings.petInfo.superlikedFoodKnown || MM !== ZM.current.mobSettings.petInfo.superlikedFood)).map((MM => (0, zM.jsx)(tS, {
                          food: MM
                        }, MM)))
                      })]
                    }), (0, zM.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, zM.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, zM.jsx)(gS, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:neutralFoodTitle"
                          },
                          description: null,
                          tintColor: CS.d.feedTextColours[CS.d.MobFoodType.Neutral],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, zM.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (gM = ZM.current.mobSettings.tameInfo.neutralFoods) || void 0 === gM ? void 0 : gM.map((MM => (0, zM.jsx)(tS, {
                          food: MM
                        }, MM)))
                      })]
                    }), (0, zM.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, zM.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, zM.jsx)(gS, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:dislikedFoodTitle"
                          },
                          description: null,
                          tintColor: CS.d.feedTextColours[CS.d.MobFoodType.Disliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, zM.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (uM = ZM.current.mobSettings.tameInfo.dislikedFoods) || void 0 === uM ? void 0 : uM.map((MM => (0, zM.jsx)(tS, {
                          food: MM
                        }, MM)))
                      })]
                    })]
                  }), ZM.current.mobSettings.tameInfo.levelUpBonuses && (0, zM.jsx)("div", {
                    className: "PetUIFeedDrops",
                    children: Array.from({
                      length: CS.d.MAX_LEVEL + 1
                    }).map(((MM, rM) => {
                      const iM = rM;
                      if (0 === iM) return null;
                      const OM = ZM.current.mobSettings.tameInfo.levelUpBonuses[iM],
                        SM = CS.d.getBonusDisplayInfo(kM, ZM.current.mobSettings, ZM.current.mobType, OM);
                      return (0, zM.jsxs)("div", {
                        className: Ui()("PetUIFeedDropContainer", {
                          Selected: iM === CS.d.getFriendshipLevelInfo(ZM.current.mobSettings.petInfo.friendshipPoints).level
                        }),
                        children: [(0, zM.jsx)("div", {
                          className: "PetUIFeedDropHearts",
                          children: Array.from({
                            length: iM
                          }).map(((MM, rM) => (0, zM.jsx)("div", {
                            className: "PetUIFeedDropHeart",
                            children: (0, zM.jsx)(ji.b, {
                              itemName: "Friendship",
                              amount: 1
                            })
                          }, `${iM}-${rM}`)))
                        }), (0, zM.jsx)("div", {
                          className: "PetUIFeedDropItems",
                          children: SM && (0, zM.jsx)(gS, {
                            icon: SM.icon,
                            displayName: SM.displayName,
                            description: SM.description
                          })
                        })]
                      }, iM)
                    }))
                  })]
                })]
              })]
            })
          })
        })
      })),
      tS = (0, SM.memo)((function(MM) {
        let {
          food: rM,
          includeDescription: iM = !1
        } = MM;
        const OM = bS(),
          SM = OM.getDefaultItemStat(rM, "displayName"),
          jM = OM.getDefaultItemStat(rM, "description");
        return (0, zM.jsx)(gS, {
          icon: rM,
          displayName: SM,
          description: iM ? jM : null
        })
      })),
      gS = (0, SM.memo)((function(MM) {
        let {
          icon: rM,
          displayName: iM,
          description: OM,
          tintColor: SM,
          className: jM = "PetUIFoodItem"
        } = MM;
        return (0, zM.jsx)(XM.i, {
          delayHide: 0,
          delayShow: 0,
          tooltipInner: (0, zM.jsxs)("div", {
            className: "PetUIFoodItemTooltip",
            children: [(0, zM.jsx)("div", {
              className: "PetUIFoodItemName",
              children: (0, zM.jsx)(eM.b, {
                text: iM
              })
            }), OM && (0, zM.jsx)("div", {
              className: "PetUIFoodItemDescription",
              children: (0, zM.jsx)(eM.b, {
                text: OM
              })
            })]
          }),
          children: (0, zM.jsx)("div", {
            className: jM,
            children: (0, zM.jsx)(ji.b, {
              itemName: rM,
              amount: 1,
              tintColor: SM
            })
          })
        })
      }));
    var uS = iM(4129),
      RS = iM(1144),
      pS = iM(1242),
      WS = iM(2638),
      sS = iM(37802),
      DS = iM(1073),
      kS = iM(2488);

    function ZS(MM) {
      let {
        peers: rM
      } = MM;
      const [iM, OM] = (0, SM.useState)(null), jM = (0, tM.j)("players");
      return (0, zM.jsx)("div", {
        className: "CodeEditorPresence",
        children: rM.map((MM => {
          var rM, SM;
          const aM = null !== (rM = null === (SM = jM.byId[MM.playerId]) || void 0 === SM ? void 0 : SM.cosmetics) && void 0 !== rM ? rM : {};
          return (0, zM.jsxs)("div", {
            className: Ui()("PresenceIcon", {
              Viewer: !MM.isEditor
            }),
            style: {
              backgroundColor: MM.colour
            },
            onMouseEnter: () => {
              OM(MM.playerId)
            },
            onMouseLeave: () => {
              OM(null)
            },
            children: [(0, zM.jsx)(kS.c, {
              cosmetics: aM
            }), iM === MM.playerId && (0, zM.jsx)("div", {
              className: "PresenceTooltip",
              style: {
                backgroundColor: MM.colour
              },
              children: MM.playerName
            })]
          }, MM.playerId)
        }))
      })
    }
    var oS = iM(670),
      fS = iM(37799),
      YS = iM(37492),
      NS = iM(37807);

    function AS(MM) {
      const rM = MM.split("/"),
        iM = [];
      for (let OM = 1; OM < rM.length; OM++) iM.push(rM.slice(0, OM).join("/"));
      return iM
    }

    function xS(MM) {
      return MM.slice(MM.lastIndexOf("/") + 1)
    }
    const vS = (0, SM.memo)((function(MM) {
      var rM;
      let {
        files: iM,
        activePath: OM,
        canEdit: jM,
        directoryLinked: aM,
        pluginNames: PM,
        activePluginName: nM,
        activePluginFile: QM,
        onSelect: LM,
        onSelectPlugin: mM,
        onCreate: hM,
        onRename: JM,
        onRenameFolder: yM,
        onDelete: lM,
        onToggleDirectorySync: EM,
        schematics: UM,
        onManageSchematic: GM
      } = MM;
      const {
        t: CM
      } = (0, KM.A)(), eM = null !== (rM = (0, sS.d)(iM)) && void 0 !== rM ? rM : pS.i, bM = Object.keys(iM), [wM, tM] = (0, SM.useState)((() => new Set)), gM = function(MM, rM, iM) {
        const OM = {
          folders: new Map,
          files: []
        };
        for (const aM of MM) {
          if (aM === rM) continue;
          let MM = OM;
          for (const rM of AS(aM)) {
            let iM = MM.folders.get(rM);
            iM || (iM = {
              folders: new Map,
              files: []
            }, MM.folders.set(rM, iM)), MM = iM
          }
          MM.files.push(aM)
        }
        const SM = [];
        MM.includes(rM) && SM.push({
          kind: "file",
          path: rM,
          name: xS(rM),
          depth: 0
        });
        const jM = (MM, rM) => {
          const OM = [...MM.folders.entries()].sort(((MM, rM) => {
            let [iM] = MM, [OM] = rM;
            return iM.localeCompare(OM)
          }));
          for (const [aM, PM] of OM) {
            const MM = iM.has(aM);
            SM.push({
              kind: "folder",
              path: aM,
              name: xS(aM),
              depth: rM,
              collapsed: MM
            }), MM || jM(PM, rM + 1)
          }
          MM.files.sort(((MM, rM) => MM.localeCompare(rM)));
          for (const iM of MM.files) SM.push({
            kind: "file",
            path: iM,
            name: xS(iM),
            depth: rM
          })
        };
        return jM(OM, 0), SM
      }(bM, eM, wM);
      (0, SM.useEffect)((() => {
        tM((MM => {
          const rM = new Set(MM);
          let iM = !1;
          for (const SM of AS(OM)) iM = rM.delete(SM) || iM;
          return iM ? rM : MM
        }))
      }), [OM]);
      const uM = bM.length >= Ar.u,
        RM = (MM, rM) => {
          if (MM.length > WS.v) return `Path must be at most ${WS.v} characters`;
          if (!(0, WS.r)(MM)) return "Use a relative .js, .ts, or .d.ts path, e.g. lib/util.js";
          if ("index.d.ts" === MM) return "index.d.ts cannot be the world-code entry";
          const OM = !!rM && (0, sS.h)(rM, MM);
          if (rM && (0, sS.i)(rM) && !OM) return `Cannot rename ${rM} (only swapping ${pS.i} and ${pS.m} is allowed)`;
          if (MM in iM) return "A file with that path already exists";
          if ((0, sS.i)(MM) && !OM) {
            if ((MM === pS.i ? pS.m : pS.i) in iM) return `World code cannot have both ${pS.i} and ${pS.m}`
          }
          return null
        },
        pM = MM => {
          jS.NotificationProvider.showInputPopup({
            title: "codeEditor:newFile",
            subtitle: "codeEditor:newFilePathHint",
            placeholderText: "lib/util.js",
            initialValue: void 0 === MM ? void 0 : `${MM}/`,
            submitText: "general:create",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: MM => RM(MM)
          }).getResult().then((MM => {
            "notificationTornDown" !== MM && null !== MM && "submit" === MM.type && hM(MM.value)
          }))
        },
        WM = MM => {
          jS.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFile",
            subtitle: "codeEditor:newFilePathHint",
            initialValue: MM,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: rM => rM === MM ? "That is already the file's path" : RM(rM, MM)
          }).getResult().then((rM => {
            "notificationTornDown" !== rM && null !== rM && "submit" === rM.type && JM(MM, rM.value)
          }))
        },
        sM = MM => {
          const rM = MM => MM.replace(/\/+$/, "");
          jS.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFolder",
            subtitle: "codeEditor:renameFolderHint",
            initialValue: MM,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: iM => {
              const OM = rM(iM);
              if (OM === MM) return "That is already the folder's path";
              for (const [rM, SM] of(0, sS.o)(bM, MM, OM)) {
                const MM = RM(SM, rM);
                if (null !== MM) return MM
              }
              return null
            }
          }).getResult().then((iM => {
            "notificationTornDown" !== iM && null !== iM && "submit" === iM.type && yM(MM, rM(iM.value))
          }))
        },
        DM = MM => {
          jS.NotificationProvider.showPromptPopup({
            title: "codeEditor:deleteFile",
            subtitle: "codeEditor:deleteFileConfirm",
            textOpts: {
              subtitle: {
                path: MM
              }
            },
            confirmText: "general:delete",
            destructive: !0,
            cancelText: "general:cancel"
          }).getResult().then((rM => {
            !0 === rM && lM(MM)
          }))
        };
      return (0, zM.jsxs)("div", {
        className: "CodeEditorFileTree",
        children: [(0, zM.jsxs)("div", {
          className: "FileTreeHeader",
          children: [(0, zM.jsx)("span", {
            children: "Files"
          }), jM && !uM && (0, zM.jsx)(HM.u, {
            className: "FileTreeHeaderButton",
            onClick: () => {
              pM()
            },
            children: (0, zM.jsx)(dM.b, {
              name: "plus"
            })
          })]
        }), (0, zM.jsxs)("div", {
          className: "FileTreeList",
          children: [gM.map((MM => {
            const rM = MM.path;
            if ("folder" === MM.kind) return (0, zM.jsx)(XS, {
              path: rM,
              name: MM.name,
              depth: MM.depth,
              collapsed: MM.collapsed,
              onToggle: () => {
                var MM;
                MM = rM, tM((rM => {
                  const iM = new Set(rM);
                  return iM.delete(MM) || iM.add(MM), iM
                }))
              },
              canCreate: jM && !uM,
              canRename: jM,
              onCreate: pM,
              onRename: sM
            }, `folder:${rM}`);
            const SM = (0, sS.i)(rM),
              aM = pS.i in iM && pS.m in iM,
              PM = !SM || aM,
              QM = null === nM && rM === OM;
            return (0, zM.jsx)(KS, {
              path: rM,
              label: MM.name,
              depth: MM.depth,
              isActive: QM,
              canRename: jM,
              onSelect: LM,
              onRename: WM,
              onDelete: DM,
              canDelete: PM && jM
            }, rM)
          })), (0, zM.jsxs)("div", {
            className: "FileTreeHeader Secondary",
            children: [(0, zM.jsxs)("span", {
              children: ["Schematics (", Object.keys(UM).length, "/", NS.f, ")"]
            }), jM && (0, zM.jsx)(HM.u, {
              className: "FileTreeHeaderButton",
              disabled: Object.keys(UM).length >= NS.f,
              onClick: () => {
                GM("")
              },
              children: (0, zM.jsx)(dM.b, {
                name: "plus"
              })
            })]
          }), Object.keys(UM).sort().map((MM => (0, zM.jsx)(KS, {
            path: MM,
            isActive: !1,
            canRename: !1,
            canDelete: !1,
            onSelect: GM
          }, MM))), PM.length > 0 && (0, zM.jsxs)(zM.Fragment, {
            children: [(0, zM.jsx)("div", {
              className: "FileTreeHeader Secondary",
              children: (0, zM.jsx)("span", {
                children: "Plugins"
              })
            }), PM.map((MM => {
              var rM;
              const iM = fS.i[MM],
                OM = Object.keys(null !== (rM = null === iM || void 0 === iM ? void 0 : iM.files) && void 0 !== rM ? rM : {
                  "index.ts": ""
                }).sort(((MM, rM) => "index.ts" === MM ? -1 : "index.ts" === rM ? 1 : MM.localeCompare(rM)));
              return (0, zM.jsxs)("div", {
                children: [(0, zM.jsx)("div", {
                  className: "FileTreePluginName",
                  children: (0, sS.y)(MM)
                }), OM.map((rM => (0, zM.jsx)(KS, {
                  path: rM,
                  nested: !0,
                  isActive: nM === MM && QM === rM,
                  canRename: !1,
                  onSelect: () => {
                    mM(MM, rM)
                  },
                  canDelete: !1
                }, rM)))]
              }, MM)
            }))]
          })]
        }), (0, zM.jsx)("div", {
          className: "FileTreeFooter",
          children: (0, zM.jsx)(HM.e, {
            className: "FileTreeFooterButton",
            onClick: EM,
            children: CM(aM ? "codeEditor:directorySyncUnlink" : "codeEditor:directorySyncLink")
          })
        })]
      })
    }));

    function FS(MM) {
      return MM > 0 ? {
        className: "Indented",
        style: {
          "--tree-depth": MM
        }
      } : {
        className: void 0,
        style: void 0
      }
    }

    function BS(MM) {
      let {
        depth: rM
      } = MM;
      return (0, zM.jsx)(zM.Fragment, {
        children: Array.from({
          length: rM
        }, ((MM, rM) => (0, zM.jsx)("span", {
          className: "FileTreeIndentGuide",
          style: {
            "--guide-level": rM
          }
        }, rM)))
      })
    }

    function XS(MM) {
      let {
        path: rM,
        name: iM,
        depth: OM,
        collapsed: SM,
        onToggle: jM,
        canCreate: aM,
        canRename: PM,
        onCreate: nM,
        onRename: QM
      } = MM;
      const LM = [];
      aM && LM.push({
        icon: "plus",
        text: "codeEditor:newFile",
        onPointerDown: () => {
          nM(rM)
        }
      }), PM && LM.push({
        icon: "pen",
        text: "codeEditor:renameFolder",
        onPointerDown: () => {
          QM(rM)
        }
      });
      const mM = FS(OM);
      return (0, zM.jsxs)("div", {
        className: Ui()("FileTreeItem FileTreeFolder", mM.className),
        style: mM.style,
        children: [(0, zM.jsx)(BS, {
          depth: OM
        }), (0, zM.jsxs)("button", {
          type: "button",
          className: "FileTreeItemName",
          "aria-expanded": !SM,
          onClick: jM,
          children: [(0, zM.jsx)(dM.b, {
            className: "FileTreeFolderCaret",
            name: SM ? "caret-right" : "caret-down"
          }), (0, zM.jsx)(dM.b, {
            className: "FileTreeFolderIcon",
            name: SM ? "folder" : "folder-open"
          }), iM]
        }), (0, zM.jsx)(IS, {
          path: rM,
          actions: LM
        })]
      })
    }

    function IS(MM) {
      let {
        path: rM,
        actions: iM
      } = MM;
      const OM = (0, SM.useRef)(null);
      return 0 === iM.length ? null : (0, zM.jsxs)("div", {
        ref: OM,
        className: "FileTreeItemActions",
        children: [(0, zM.jsx)("button", {
          type: "button",
          className: "FileTreeActionMenuButton",
          "aria-label": `Actions for ${rM}`,
          children: (0, zM.jsx)(dM.b, {
            name: "ellipsis"
          })
        }), (0, zM.jsx)(YS.d, {
          triggerElementRef: OM,
          options: iM
        })]
      })
    }

    function KS(MM) {
      let {
        path: rM,
        label: iM = rM,
        depth: OM = 0,
        isActive: SM,
        canRename: jM,
        onSelect: aM,
        onRename: PM,
        onDelete: nM,
        canDelete: QM,
        nested: LM
      } = MM;
      const mM = [];
      jM && PM && mM.push({
        icon: "pen",
        text: "codeEditor:rename",
        onPointerDown: () => {
          PM(rM)
        }
      }), QM && nM && mM.push({
        icon: "xmark",
        text: "general:delete",
        onPointerDown: () => {
          nM(rM)
        }
      });
      const HM = FS(OM);
      return (0, zM.jsxs)("div", {
        className: Ui()("FileTreeItem", HM.className, {
          Active: SM,
          Nested: LM
        }),
        style: HM.style,
        children: [(0, zM.jsx)(BS, {
          depth: OM
        }), (0, zM.jsx)("button", {
          type: "button",
          className: "FileTreeItemName",
          title: iM === rM ? void 0 : rM,
          onClick: () => {
            aM(rM)
          },
          children: iM
        }), (0, zM.jsx)(IS, {
          path: rM,
          actions: mM
        })]
      })
    }
    async function qS(MM) {
      const rM = (0, sS.d)(MM);
      if (!rM || "" === MM[rM].trim()) return [];
      const {
        collectImportedWorldCodePluginNames: OM
      } = await Promise.all([iM.e(608), iM.e(609)]).then((() => iM(44141)));
      return (0, fS.e)(OM(MM))
    }
    var TS = iM(37810);

    function VS(MM, rM) {
      const iM = Object.keys(MM),
        OM = Object.keys(rM);
      if (iM.length !== OM.length) return !1;
      for (const SM of iM)
        if (!(SM in rM) || MM[SM] !== rM[SM]) return !1;
      return !0
    }

    function cS(MM, rM) {
      const iM = [],
        OM = [],
        SM = [];
      for (const jM of Object.keys(rM)) jM in MM ? MM[jM] !== rM[jM] && SM.push(jM) : iM.push(jM);
      for (const jM of Object.keys(MM)) jM in rM || OM.push(jM);
      return iM.sort(), OM.sort(), SM.sort(), {
        creates: iM,
        deletes: OM,
        updates: SM
      }
    }

    function Mj(MM, rM) {
      var iM;
      const OM = {
          ...MM
        },
        SM = (0, sS.d)(rM),
        jM = (0, sS.d)(OM);
      if (pS.i in OM && pS.m in OM) {
        const MM = null !== SM && void 0 !== SM ? SM : pS.m,
          iM = MM === pS.i ? pS.m : pS.i;
        var aM;
        if (!(MM in OM)) OM[MM] = null !== (aM = rM[MM]) && void 0 !== aM ? aM : "";
        return delete OM[iM], OM
      }
      var PM;
      return SM && !(SM in OM) ? (jM || (OM[SM] = null !== (PM = rM[SM]) && void 0 !== PM ? PM : ""), OM) : (jM || SM || (OM[pS.i] = null !== (iM = OM[pS.i]) && void 0 !== iM ? iM : "", delete OM[pS.m]), OM)
    }

    function rj(MM, rM) {
      const iM = (0, sS.d)(rM),
        OM = pS.i in rM && pS.m in rM;
      return MM.filter((MM => !(0, sS.i)(MM) || (!!OM || iM !== MM)))
    }
    async function ij(MM, rM, OM) {
      const SM = MM.getLobbyFiles(),
        jM = (0, Ar.j)(OM, (0, sS.s)(SM, rM)),
        aM = await MM.ensureJoined(rM),
        PM = (0, WS.z)(aM.docKey);
      if (aM.doc === jM) return;
      for (let iM = 0; iM < 100; iM++) {
        const iM = MM.getCollabSnapshot();
        if (iM && (0, WS.z)(iM.docKey) === PM && MM.getActivePath() === rM) {
          if (MM.replaceActiveDoc(PM, jM)) return;
          await (0, UO.Q)(40)
        } else await (0, UO.Q)(40)
      }
      const {
        ChangeSet: nM
      } = await iM.e(604).then((() => iM(43972))), zM = MM.getCollabSnapshot(), LM = zM && (0, WS.z)(zM.docKey) === PM ? zM : aM;
      await async function(MM, rM, iM, OM) {
        const SM = MM.of({
            from: 0,
            to: iM.length,
            insert: OM
          }, iM.length),
          jM = JSON.stringify([{
            clientID: rM.clientID,
            changes: SM.toJSON()
          }]),
          aM = (0, WS.z)(rM.docKey);
        jM.length <= WS.e ? QM.gameBridge.send("sendCodeCollab", {
          hM: WS.c.Push,
          JM: aM,
          dM: rM.version,
          EM: jM
        }) : await (0, RS.postJsonWithMetricsCookiesAndJsonResponse)(`${rM.httpConfig.gsUrl}/code/collab-push`, uS.p["collab-push"].toBuffer({
          gameNameWithVariation: rM.httpConfig.gameNameWithVariation,
          lobbyName: rM.httpConfig.lobbyName,
          docKey: aM,
          version: rM.version,
          updates: jM
        }), {
          retries: 0
        })
      }(nM, LM, LM.doc, jM)
    }
    class Oj {
      constructor(MM) {
        this.handle = null, this.lastSynced = {}, this.lastLobbySeen = null, this.pendingDocText = new Map, this.flushingDocText = !1, this.recheckingDisk = !1, this.stopWatch = null, this.lobbyPollTimer = null, this.running = !1, this.applying = !1, this.reconcileSettled = !1, this.reconcileInFlight = !1, this.linked = !1, this.scaffoldedPluginNamesKey = null, this.scaffoldingLocalTypes = Promise.resolve(), this.bridge = void 0, this.bridge = MM
      }
      async writeLobbyFiles(MM) {
        const rM = {
            ...this.bridge.getLobbyFiles()
          },
          iM = {
            ...rM
          };
        for (const {
            path: jM,
            text: aM
          }
          of MM) iM[jM] = aM;
        if (!MM.every((MM => {
            let {
              path: rM,
              text: OM
            } = MM;
            return (0, Ar.j)(OM, (0, sS.s)(iM, rM)) === OM
          }))) return !1;
        const OM = [];
        try {
          for (const {
              path: rM,
              text: iM
            }
            of MM) OM.push(rM), rM in this.bridge.getLobbyFiles() || (this.bridge.createFile(rM, {
            focus: !1
          }), await this.bridge.waitForLobbyPath(rM, !0)), await ij(this.bridge, rM, iM)
        } catch (SM) {
          for (const MM of OM) MM in rM ? await ij(this.bridge, MM, rM[MM]).catch((rM => {
            console.error("World Code AI: couldn't put back", MM, rM)
          })) : this.bridge.deleteFile(MM);
          throw SM
        }
        return !0
      }
      isLinked() {
        return this.linked
      }
      async linkFolder() {
        if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), !1;
        const MM = await (0, TS.A)(this.bridge.getStorageKey());
        return !!MM && (this.handle = MM, this.linked = !0, this.reconcileSettled = !1, await this.scaffoldLocalTypes(MM), !0)
      }
      async unlinkFolder() {
        const MM = this.bridge.getStorageKey();
        this.pendingDocText.clear(), this.stopContinuousSync(), this.handle = null, this.linked = !1, this.reconcileSettled = !1, this.lastSynced = {}, this.lastLobbySeen = null, this.scaffoldedPluginNamesKey = null, await (0, TS.d)(MM), this.bridge.onUnlinked()
      }
      async tryRestoreHandle() {
        const MM = this.bridge.getStorageKey(),
          rM = await (0, TS.w)(MM);
        return !!rM && (!!await (0, TS.j)(rM, "readwrite") && (this.handle = rM, this.linked = !0, await (0, TS.J)(MM, rM), await this.scaffoldLocalTypes(rM), !0))
      }
      scaffoldLocalTypes(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bridge.getLobbyFiles();
        return this.scaffoldingLocalTypes = this.scaffoldingLocalTypes.then((async () => {
          try {
            const OM = (await qS(rM)).map((MM => fS.i[MM])),
              SM = OM.map((MM => {
                var rM;
                return `${MM.name}:${Object.keys(null!==(rM=null===MM||void 0===MM?void 0:MM.files)&&void 0!==rM?rM:{}).sort().join(",")}`
              })).join("\0");
            if (this.scaffoldedPluginNamesKey === SM) return;
            const {
              ensureLocalBloxdTypes: jM
            } = await Promise.all([iM.e(98), iM.e(606), iM.e(611)]).then((() => iM(44150)));
            await jM(MM, OM), this.scaffoldedPluginNamesKey = SM
          } catch (OM) {
            console.error("[WorldCodeDirectorySync] Failed to scaffold local @bloxd types", OM)
          }
        })), this.scaffoldingLocalTypes
      }
      async startWhenReady() {
        this.linked && this.handle && !this.running && !this.reconcileInFlight && this.bridge.getCollabSnapshot() && (this.reconcileSettled ? this.beginWatch() : await this.runInitialReconcileAndSync())
      }
      stopContinuousSync() {
        this.flushDocTextToDisk(), this.running = !1, this.stopWatch && (this.stopWatch(), this.stopWatch = null), this.lobbyPollTimer && (clearInterval(this.lobbyPollTimer), this.lobbyPollTimer = null)
      }
      async onLobbyFilesChanged(MM) {
        this.handle && await this.scaffoldLocalTypes(this.handle, MM), this.running && this.handle && !this.applying && await this.applyRemoteTreeToDisk(MM)
      }
      async onDocTextChanged(MM, rM) {
        if (!this.handle) return;
        const iM = [this.scaffoldLocalTypes(this.handle, {
          ...this.bridge.getLobbyFiles(),
          [MM]: rM
        })];
        this.running && (this.pendingDocText.set(MM, rM), iM.push(this.flushDocTextToDisk())), await Promise.all(iM)
      }
      async flushDocTextToDisk() {
        if (this.flushingDocText || this.applying || !this.handle || 0 === this.pendingDocText.size) return;
        const MM = this.handle;
        this.flushingDocText = !0, this.applying = !0;
        try {
          for (; this.pendingDocText.size > 0;) {
            const rM = [...this.pendingDocText];
            this.pendingDocText.clear();
            for (const [iM, OM] of rM) this.lastSynced[iM] !== OM && (await (0, TS.S)(MM, iM, OM), this.lastSynced = {
              ...this.lastSynced,
              [iM]: OM
            })
          }
        } catch (rM) {
          console.error("[WorldCodeDirectorySync] Failed to write remote doc to disk", rM), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
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
            await this.onDiskFilesChanged(await (0, TS.D)(this.handle))
          } catch (MM) {
            console.error("[WorldCodeDirectorySync] Failed to re-check disk after sync", MM)
          } finally {
            this.recheckingDisk = !1
          }
        }
      }
      async runInitialReconcileAndSync() {
        if (this.handle && !this.reconcileInFlight) {
          this.reconcileInFlight = !0;
          try {
            if (!await (0, TS.j)(this.handle, "readwrite")) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncPermissionDenied"), "warning"), void(this.reconcileSettled = !0);
            await this.bridge.pullLobbyFiles();
            const rM = this.bridge.getLobbyFiles(),
              iM = await (0, TS.D)(this.handle);
            for (const MM of Object.keys(rM).filter(NS.e)) {
              if (iM[MM] === TS.q) return void this.bridge.setMessage(`Move ${MM} outside the linked folder before syncing its placeholder.`, "warning");
              iM[MM] = NS.p
            }
            if (VS(iM, rM)) {
              for (const MM of Object.keys(rM).filter(NS.e)) await (0, TS.S)(this.handle, MM, NS.p);
              return this.lastSynced = {
                ...iM
              }, void this.beginWatch()
            }
            const OM = await this.promptReconcile(function(MM) {
              return null !== (0, sS.d)(MM)
            }(iM));
            if ("unlink" === OM) return void await this.unlinkFolder();
            if ("dismissed" === OM) return void(this.reconcileSettled = !0);
            this.applying = !0;
            try {
              if ("local" === OM) {
                if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), void(this.reconcileSettled = !0);
                await this.applyLocalTreeToLobby(iM);
                for (const MM of Object.keys(rM).filter(NS.e)) await (0, TS.S)(this.handle, MM, NS.p);
                this.lastSynced = {
                  ...await (0, TS.D)(this.handle)
                }
              } else await (0, TS.U)(this.handle, rM), this.lastSynced = {
                ...rM
              }
            } catch (MM) {
              return console.error("[WorldCodeDirectorySync] Reconcile failed", MM), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning"), void(this.reconcileSettled = !0)
            } finally {
              this.applying = !1, this.settleAfterApplying()
            }
            this.beginWatch()
          } finally {
            this.reconcileInFlight = !1
          }
        }
      }
      async promptReconcile(MM) {
        return await new Promise((rM => {
          const iM = [{
              choice: "local",
              Button: HM.e,
              labelKey: "directorySyncUseLocal",
              descriptionKey: "directorySyncUseLocalDescription"
            }, {
              choice: "live",
              Button: HM.e,
              labelKey: "directorySyncUseLive",
              descriptionKey: "directorySyncUseLiveDescription"
            }, {
              choice: "unlink",
              Button: HM.e,
              labelKey: "directorySyncUseUnlink",
              descriptionKey: "directorySyncUseUnlinkDescription"
            }],
            OM = (0, zM.jsxs)("div", {
              className: "CodeEditorDirectorySyncPrompt",
              children: [(0, zM.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptTitle",
                children: this.bridge.t("codeEditor:directorySyncDifferTitle")
              }), (0, zM.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptBody",
                children: MM ? this.bridge.t("codeEditor:directorySyncDifferBody") : this.bridge.t("codeEditor:directorySyncLocalInvalidEntry")
              }), (0, zM.jsx)("div", {
                className: "CodeEditorDirectorySyncOptions",
                children: iM.filter((rM => "local" !== rM.choice || MM)).map((MM => {
                  let {
                    choice: iM,
                    Button: OM,
                    labelKey: jM,
                    descriptionKey: aM
                  } = MM;
                  return (0, zM.jsxs)("div", {
                    className: "CodeEditorDirectorySyncOption",
                    children: [(0, zM.jsx)(OM, {
                      className: "CodeEditorButton",
                      onClick: () => {
                        (MM => {
                          SM.tearDownNotification(), rM(MM)
                        })(iM)
                      },
                      children: this.bridge.t(`codeEditor:${jM}`)
                    }), (0, zM.jsx)("div", {
                      className: "CodeEditorDirectorySyncOptionDescription",
                      children: this.bridge.t(`codeEditor:${aM}`)
                    })]
                  }, iM)
                }))
              })]
            }),
            SM = jS.NotificationProvider.showCustomPopup({
              body: OM,
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "worldCodeDirectorySync"
            });
          SM.getResult().then((MM => {
            "notificationTornDown" === MM && rM("dismissed")
          }))
        }))
      }
      beginWatch() {
        this.handle && (this.stopContinuousSync(), this.reconcileSettled = !0, this.running = !0, this.stopWatch = (0, TS.N)(this.handle, (MM => {
          this.onDiskFilesChanged(MM)
        })), this.lobbyPollTimer = setInterval((() => {
          this.pollRemoteLobbyFiles()
        }), 2e3))
      }
      async pollRemoteLobbyFiles() {
        if (this.running && !this.applying) try {
          await this.bridge.pullLobbyFiles()
        } catch (MM) {
          console.error("[WorldCodeDirectorySync] Lobby poll failed", MM)
        }
      }
      async onDiskFilesChanged(MM) {
        if (!this.running || !this.handle || this.applying) return;
        if (!this.bridge.canEditCode()) return;
        const rM = this.bridge.getLobbyFiles();
        let iM = Mj(MM, this.lastSynced);
        for (const jM in rM)
          if ((0, NS.e)(jM) && iM[jM] === TS.q) return void this.bridge.setMessage("Move binary schematic files outside the linked folder. Add them through the Code Editor.", "warning");
        const OM = Object.keys(iM).filter((MM => (0, NS.e)(MM) && !(MM in rM)));
        OM.length > 0 && this.bridge.setMessage("Add or rename schematics in the Code Editor. Unknown local schematic files are not uploaded.", "warning");
        for (const jM of Object.keys(rM).filter(NS.e))(jM in iM || OM.length > 0 || !(jM in this.lastSynced)) && (iM[jM] = NS.p);
        if (!VS(iM, MM)) {
          this.applying = !0;
          try {
            await this.persistEntryRepair(MM, iM), iM = Mj(await (0, TS.D)(this.handle), this.lastSynced)
          } finally {
            this.applying = !1
          }
        }
        if (!VS(iM, this.lastSynced)) {
          this.applying = !0;
          try {
            const MM = cS(this.lastSynced, iM);
            if (await this.pushDiskDeltaToLobby(iM, rM), null !== this.lastLobbySeen)
              for (const iM of [...MM.creates, ...MM.updates, ...MM.deletes])(0, NS.e)(iM) || (iM in rM ? this.lastLobbySeen[iM] = rM[iM] : delete this.lastLobbySeen[iM]);
            this.lastSynced = {
              ...iM
            }
          } catch (SM) {
            console.error("[WorldCodeDirectorySync] Disk\u2192lobby sync failed", SM), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async persistEntryRepair(MM, rM) {
        if (this.handle) {
          for (const iM of Object.keys(MM)) iM in rM || await (0, TS.F)(this.handle, iM);
          for (const [iM, OM] of Object.entries(rM)) MM[iM] !== OM && await (0, TS.S)(this.handle, iM, OM)
        }
      }
      async applyRemoteTreeToDisk(MM) {
        if (!this.handle) return;
        const rM = this.lastLobbySeen;
        if (null === rM) return void(this.lastLobbySeen = {
          ...MM
        });
        const iM = Object.keys(MM).filter((iM => rM[iM] !== MM[iM])),
          OM = Object.keys(rM).filter((rM => !(rM in MM)));
        if (0 !== iM.length || 0 !== OM.length) {
          this.applying = !0;
          try {
            for (const rM of [...OM, ...iM]) try {
              if (rM in MM) await (0, TS.S)(this.handle, rM, MM[rM]), this.lastSynced = {
                ...this.lastSynced,
                [rM]: MM[rM]
              }, this.lastLobbySeen = {
                ...this.lastLobbySeen,
                [rM]: MM[rM]
              };
              else {
                await (0, TS.F)(this.handle, rM);
                const MM = {
                  ...this.lastSynced
                };
                delete MM[rM], this.lastSynced = MM;
                const iM = {
                  ...this.lastLobbySeen
                };
                delete iM[rM], this.lastLobbySeen = iM
              }
            } catch (SM) {
              console.error("[WorldCodeDirectorySync] Lobby\u2192disk sync failed", SM), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
            }
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async renameLobbyEntryIfSwitched(MM, rM) {
        const iM = function(MM, rM) {
          const iM = (0, sS.d)(MM),
            OM = (0, sS.d)(rM);
          return iM && OM && iM !== OM ? {
            from: iM,
            to: OM
          } : null
        }(MM, rM);
        return !!iM && (this.bridge.renameFile(iM.from, iM.to), await this.bridge.waitForLobbyPath(iM.to, !0), !0)
      }
      async applyLocalTreeToLobby(MM) {
        var rM;
        const iM = this.bridge.getActivePath();
        await this.renameLobbyEntryIfSwitched(this.bridge.getLobbyFiles(), MM);
        const OM = this.bridge.getLobbyFiles(),
          SM = cS(OM, MM),
          jM = rj(SM.deletes, OM);
        for (const QM of SM.creates)(0, NS.e)(QM) || (this.bridge.createFile(QM, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(QM, !0));
        for (const QM of jM)(0, NS.e)(QM) || (this.bridge.deleteFile(QM), await this.bridge.waitForLobbyPath(QM, !1));
        if (!(0, sS.d)(this.bridge.getLobbyFiles()) && !(0, sS.d)(MM)) {
          if (this.bridge.createFile(pS.i, {
              focus: !1
            }), await this.bridge.waitForLobbyPath(pS.i, !0), !this.handle) return;
          await (0, TS.S)(this.handle, pS.i, ""), MM = {
            ...MM,
            [pS.i]: ""
          }
        }
        const aM = this.bridge.getLobbyFiles();
        for (const QM of Object.keys(MM))(0, NS.e)(QM) || aM[QM] !== MM[QM] && await ij(this.bridge, QM, MM[QM]);
        const PM = this.bridge.getLobbyFiles(),
          nM = iM in PM ? iM : null !== (rM = (0, sS.d)(PM)) && void 0 !== rM ? rM : pS.i;
        await this.bridge.ensureJoined(nM)
      }
      async pushDiskDeltaToLobby(MM, rM) {
        const iM = this.bridge.getActivePath(),
          OM = await this.renameLobbyEntryIfSwitched(rM, MM) ? this.bridge.getLobbyFiles() : rM,
          SM = cS(this.lastSynced, MM),
          jM = rj(SM.deletes, OM).filter((MM => MM in OM));
        for (const aM of SM.creates)(0, NS.e)(aM) || (aM in this.bridge.getLobbyFiles() || (this.bridge.createFile(aM, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(aM, !0)), await ij(this.bridge, aM, MM[aM]));
        for (const aM of jM)(0, NS.e)(aM) ? await this.bridge.deleteSchematic(aM) : (this.bridge.deleteFile(aM), await this.bridge.waitForLobbyPath(aM, !1));
        for (const aM of SM.updates)(0, NS.e)(aM) || await ij(this.bridge, aM, MM[aM]);
        iM in this.bridge.getLobbyFiles() && this.bridge.getActivePath() !== iM && await this.bridge.ensureJoined(iM)
      }
    }
    var Sj = iM(1202);

    function jj() {
      const {
        websocketUrl: MM,
        gameNameWithVariation: rM,
        lobbyName: iM
      } = QM.gameBridge.latest("connectedGame");
      return {
        gsUrl: Sj.clientSideServerUrls.getHttpUrlFromWebSocketUrl(MM),
        gameNameWithVariation: rM,
        lobbyName: iM
      }
    }
    async function aj(MM) {
      const {
        gsUrl: rM,
        gameNameWithVariation: iM,
        lobbyName: OM
      } = jj();
      return await (0, RS.postBinaryWithMetricsCookiesAndCustomResponse)(`${rM}/code/schematics`, uS.bk.schematics.toBuffer({
        gameNameWithVariation: iM,
        lobbyName: OM,
        request: JSON.stringify(MM)
      }), {
        retries: 0
      }, RS.HttpPayloadType.json)
    }
    var Pj = iM(37291);

    function nj(MM) {
      let {
        path: rM,
        revision: iM
      } = MM;
      const [OM, jM] = (0, SM.useState)(""), [aM, PM] = (0, SM.useState)(!1), [nM, QM] = (0, SM.useState)(0);
      return (0, SM.useEffect)((() => {
        let MM = !1;
        return jM(""), PM(!1), aj({
          action: "preview",
          path: rM
        }).then((rM => {
          MM || jM(`data:image/webp;base64,${rM.previewBase64}`)
        })).catch((rM => {
          console.error("Could not load schematic preview", rM), MM || PM(!0)
        })), () => {
          MM = !0
        }
      }), [rM, iM, nM]), (0, zM.jsxs)("div", {
        className: "SchematicPreview",
        children: [OM && (0, zM.jsx)("img", {
          src: OM,
          alt: `Preview of ${rM}`
        }), !OM && !aM && (0, zM.jsx)(gM.d, {
          loaderType: "Secondary"
        }), aM && (0, zM.jsxs)(zM.Fragment, {
          children: [(0, zM.jsx)("div", {
            className: "SmallTextLight",
            role: "status",
            children: "Preview unavailable."
          }), (0, zM.jsx)(HM.e, {
            onClick: () => {
              QM(nM + 1)
            },
            children: "Retry preview"
          })]
        })]
      })
    }
    var Qj = iM(3540);

    function zj(MM) {
      var rM;
      let {
        initialPath: iM,
        onChanged: OM,
        onClose: jM
      } = MM;
      const aM = "" === iM,
        [PM, nM] = (0, SM.useState)(null),
        [QM, LM] = (0, SM.useState)(iM),
        [mM, hM] = (0, SM.useState)(!1),
        [JM, dM] = (0, SM.useState)(!1),
        [yM, lM] = (0, SM.useState)(null),
        [EM, UM] = (0, SM.useState)(!1),
        [GM, CM] = (0, SM.useState)(""),
        eM = (0, SM.useRef)(null),
        bM = (0, SM.useRef)(!1),
        wM = (0, SM.useRef)(!0);
      (0, SM.useEffect)((() => (wM.current = !0, aj({
        action: "state"
      }).then((MM => {
        wM.current && nM(MM)
      })).catch((MM => {
        console.error("Could not load schematic assets", MM), wM.current && CM("Could not load schematics. Reopen this panel to retry.")
      })), () => {
        wM.current = !1
      })), []);
      const tM = null === PM || void 0 === PM ? void 0 : PM.assets[iM],
        gM = Object.keys(null !== (rM = null === PM || void 0 === PM ? void 0 : PM.assets) && void 0 !== rM ? rM : {}).length,
        uM = QM.trim(),
        RM = uM ? (0, NS.e)(uM) ? null !== PM && void 0 !== PM && PM.assets[uM] && (aM || uM !== iM) ? "A schematic already uses that path." : "" : "Use a relative path ending in .bloxdschem." : "",
        pM = !!uM && !RM && (aM ? gM < NS.f : uM !== iM),
        WM = EM || !PM;
      async function sM(MM) {
        if (!bM.current && wM.current) {
          bM.current = !0, UM(!0), CM("");
          try {
            const rM = await aj({
              ...MM,
              expectedRevision: PM.revision
            });
            OM(rM), wM.current && jM()
          } catch (iM) {
            var rM;
            if (console.error("Schematic asset operation failed", iM), wM.current) CM(iM instanceof FM.e ? null !== (rM = iM.errorMessageForUser) && void 0 !== rM ? rM : iM.message : String(iM));
            try {
              const MM = await aj({
                action: "state"
              });
              OM(MM), wM.current && nM(MM)
            } catch (SM) {
              console.error("Could not refresh schematic assets", SM)
            }
          } finally {
            bM.current = !1, wM.current && UM(!1)
          }
        }
      }
      return (0, zM.jsxs)("div", {
        className: "WorldCodeSchematicPanel InputGenericPopup PromptGenericPopup FileTreePathPopup",
        children: [(0, zM.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: aM ? "New schematic" : mM ? "Rename schematic" : "Schematic"
        }), GM && (0, zM.jsx)("div", {
          className: "InputGenericPopupError SmallTextLight",
          role: "alert",
          children: GM
        }), !PM && !GM && (0, zM.jsx)("div", {
          className: "SmallTextLight",
          children: "Loading schematic\u2026"
        }), (0, zM.jsxs)("fieldset", {
          disabled: WM,
          children: [aM || mM ? (0, zM.jsxs)("label", {
            className: "SchematicField",
            children: [(0, zM.jsx)("span", {
              className: "SmallTextBold",
              children: "Project path"
            }), (0, zM.jsx)("div", {
              className: "InputGenericPopupInputRow",
              children: (0, zM.jsx)(Zi.b, {
                className: "InputGenericPopupInput",
                defaultValue: iM,
                placeholderText: "maps/arena.bloxdschem",
                maxLength: 64,
                onValueChange: LM
              }, mM ? "rename" : "create")
            })]
          }) : (0, zM.jsx)("div", {
            className: "SchematicPath SmallTextBold",
            children: iM
          }), (aM || mM) && RM && (0, zM.jsx)("div", {
            className: "InputGenericPopupError SmallTextLight",
            role: "alert",
            children: RM
          }), aM ? (0, zM.jsxs)(zM.Fragment, {
            children: [gM >= NS.f && (0, zM.jsxs)("div", {
              className: "SmallTextLight",
              children: ["Delete a schematic before adding another (", NS.f, " maximum)."]
            }), JM ? (0, zM.jsxs)(zM.Fragment, {
              children: [(0, zM.jsx)("div", {
                className: "SmallTextBold",
                children: "Choose from profile"
              }), (0, zM.jsx)("div", {
                className: "SchematicProfilePicker",
                "aria-disabled": WM || !pM,
                children: (0, zM.jsx)(Pj.d, {
                  loading: null === yM,
                  schematics: null !== yM && void 0 !== yM ? yM : [],
                  disableAutoExport: !0,
                  onSchematicPicked: MM => {
                    !WM && pM && sM({
                      action: "profile",
                      path: uM,
                      schematicId: MM.schematicId
                    })
                  }
                })
              }), (0, zM.jsx)("div", {
                className: "InputGenericPopupButtons",
                children: (0, zM.jsx)(HM.e, {
                  className: "InputGenericPopupButton",
                  disabled: WM,
                  onClick: () => {
                    dM(!1)
                  },
                  children: "Back"
                })
              })]
            }) : (0, zM.jsxs)("div", {
              className: "InputGenericPopupButtons",
              children: [(0, zM.jsx)(HM.e, {
                className: "InputGenericPopupButton",
                disabled: WM || !pM,
                onClick: () => {
                  (0, Qj.f)(eM.current)
                },
                children: "Upload Schematic"
              }), (0, zM.jsx)(HM.e, {
                className: "InputGenericPopupButton",
                disabled: WM || !pM,
                onClick: () => {
                  !async function() {
                    if (dM(!0), CM(""), !yM) try {
                      const MM = await (0, RS.postJsonWithMetricsCookiesAndJsonResponse)(`${Sj.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
                        retries: 0,
                        minTimeout: 3e3
                      });
                      wM.current && lM(MM)
                    } catch (MM) {
                      console.error("Could not load profile schematics", MM), wM.current && (dM(!1), CM("Could not load your schematics. Try again."))
                    }
                  }()
                },
                children: "Choose from profile"
              })]
            }), (0, zM.jsx)("input", {
              ref: eM,
              type: "file",
              accept: ".bloxdschem",
              hidden: !0,
              onChange: MM => {
                var rM;
                const iM = null === (rM = MM.target.files) || void 0 === rM ? void 0 : rM[0];
                if (MM.target.value = "", !iM) return;
                if (iM.size > NS.j) return void CM("The schematic file is too large.");
                const OM = uM;
                UM(!0);
                const SM = new FileReader;
                SM.onload = () => {
                  sM({
                    action: "upload",
                    path: OM,
                    base64: String(SM.result).split(",")[1]
                  })
                }, SM.onerror = () => {
                  console.error("Could not read schematic file", SM.error), wM.current && (UM(!1), CM("Could not read the selected file."))
                }, SM.readAsDataURL(iM)
              }
            })]
          }) : tM ? (0, zM.jsxs)(zM.Fragment, {
            children: [!mM && (0, zM.jsx)(nj, {
              path: iM,
              revision: PM.revision
            }), !mM && (0, zM.jsxs)("p", {
              className: "SchematicDetails SmallTextLight",
              children: [Math.ceil(tM.byteSize / 1024), " KB \xb7 ", tM.dimensions.join(" \xd7 "), " blocks"]
            }), (0, zM.jsx)("div", {
              className: "InputGenericPopupButtons",
              children: mM ? (0, zM.jsxs)(zM.Fragment, {
                children: [(0, zM.jsx)(HM.e, {
                  className: "InputGenericPopupButton",
                  disabled: WM || !pM,
                  onClick: () => {
                    sM({
                      action: "rename",
                      path: iM,
                      newPath: uM
                    })
                  },
                  children: "Rename"
                }), (0, zM.jsx)(HM.e, {
                  className: "InputGenericPopupButton",
                  disabled: WM,
                  onClick: () => {
                    hM(!1), LM(iM)
                  },
                  children: "Cancel"
                })]
              }) : (0, zM.jsxs)(zM.Fragment, {
                children: [(0, zM.jsx)(HM.e, {
                  className: "InputGenericPopupButton",
                  disabled: WM,
                  onClick: () => {
                    hM(!0)
                  },
                  children: "Rename"
                }), (0, zM.jsx)(HM.J, {
                  className: "InputGenericPopupButton",
                  disabled: WM,
                  onClick: () => {
                    sM({
                      action: "remove",
                      path: iM
                    })
                  },
                  children: "Delete"
                })]
              })
            })]
          }) : PM && (0, zM.jsx)("div", {
            className: "SmallTextLight",
            children: "This schematic is no longer in the project."
          })]
        })]
      })
    }

    function Lj(MM) {
      if ("string" !== typeof MM) return null;
      try {
        const rM = JSON.parse(MM);
        return (0, sS.m)(null === rM || void 0 === rM ? void 0 : rM.worldCodeEngine) && "boolean" === typeof rM.engineLocked && function(MM) {
          if (null === MM) return !0;
          const rM = null === MM || void 0 === MM ? void 0 : MM.location;
          return "string" === typeof(null === MM || void 0 === MM ? void 0 : MM.reason) && (null === rM || "string" === typeof(null === rM || void 0 === rM ? void 0 : rM.path) && Number.isInteger(rM.line))
        }(rM.fallback) ? rM : (console.error("[CodeCollab] Malformed engine settings", MM), null)
      } catch (rM) {
        return console.error("[CodeCollab] Failed to parse engine settings", rM), null
      }
    }

    function mj(MM) {
      let {
        fallback: rM,
        onGoToLine: iM
      } = MM;
      const {
        t: OM
      } = (0, KM.A)(), {
        location: SM
      } = rM;
      return (0, zM.jsxs)("div", {
        className: "CodeEditorEngineNotice",
        children: [OM("codeEditorEngine:notice", {
          reason: rM.reason
        }), SM && (0, zM.jsxs)(zM.Fragment, {
          children: [" ", (0, zM.jsx)("button", {
            type: "button",
            className: "CodeEditorEngineNoticeLink",
            onClick: () => {
              iM(SM.path, SM.line)
            },
            children: OM("codeEditorEngine:goToLine", {
              line: String(SM.line)
            })
          })]
        })]
      })
    }
    var Hj = iM(5343),
      hj = iM(4720),
      Jj = iM(37816);

    function dj(MM) {
      let {
        label: rM,
        hint: iM,
        checked: OM,
        onChange: SM
      } = MM;
      return (0, zM.jsxs)("label", {
        className: "CodeEditorMoreOptionsRow CodeEditorOptionSwitch",
        children: [(0, zM.jsxs)("span", {
          className: "CodeEditorOptionSwitchText",
          children: [(0, zM.jsx)("span", {
            children: rM
          }), (0, zM.jsx)("span", {
            className: "CodeEditorOptionSwitchHint",
            children: iM
          })]
        }), (0, zM.jsx)("span", {
          className: "SwitchContainer",
          children: (0, zM.jsx)(hj.c, {
            className: "SwitchCheckbox",
            checked: OM,
            onChange: MM => {
              SM(MM.target.checked)
            },
            disabled: !1
          })
        })]
      })
    }

    function yj(MM) {
      let {
        engine: rM,
        onSetEngine: iM,
        aiHints: OM,
        variation: SM
      } = MM;
      const {
        t: jM
      } = (0, KM.A)(), [aM, PM] = (0, Jj.j)(Jj.f);
      return (0, zM.jsxs)("div", {
        className: "CodeEditorMoreOptions",
        children: [(0, zM.jsx)("div", {
          className: "CodeEditorMoreOptionsTitle",
          children: jM("codeEditor:moreOptions")
        }), rM && (0, zM.jsx)(dj, {
          label: jM("codeEditorEngine:toggle"),
          hint: jM("codeEditorEngine:toggleHint"),
          checked: "ses" === rM,
          onChange: MM => {
            iM(MM ? "ses" : "quickjs")
          }
        }), OM && (0, zM.jsx)(dj, {
          label: jM("codeEditorAiHints:toggle"),
          hint: jM("codeEditorAiHints:toggleHint"),
          checked: OM.shown,
          onChange: OM.setShown
        }), OM && Jj.f.canChange && (0, zM.jsx)(dj, {
          label: jM("codeEditorAiKeySafetyCheck:toggle"),
          hint: jM("codeEditorAiKeySafetyCheck:toggleHint"),
          checked: aM,
          onChange: MM => {
            MM ? PM(!0) : jS.NotificationProvider.showPromptPopup({
              title: "codeEditorAiKeySafetyCheck:offWarning",
              confirmText: "general:yes",
              destructive: !0,
              cancelText: "general:no"
            }).getResult().then((MM => {
              !0 === MM && PM(!1)
            }))
          }
        }), SM && (0, zM.jsxs)("div", {
          className: "CodeEditorMoreOptionsRow",
          children: [(0, zM.jsx)(Hj.d, {
            label: "codeEditor:variationLabel",
            children: (0, zM.jsx)(Zi.b, {
              className: "CodeEditorVariationInput",
              maxLength: 32,
              defaultValue: SM.name,
              onValueChange: SM.setName,
              onEnter: SM.reload
            })
          }), (0, zM.jsx)(HM.A, {
            className: "CodeEditorButton",
            onClick: SM.reload,
            children: jM("codeEditor:reloadAsVariation")
          })]
        })]
      })
    }
    var lj = iM(37821),
      Ej = iM(37828);

    function Uj(MM) {
      let {
        close: rM
      } = MM;
      const {
        t: iM
      } = (0, KM.A)(), OM = [{
        name: iM("codeEditor:welcomeTutorial"),
        tutorial: "welcome"
      }, {
        name: iM("codeEditor:docsOverviewTutorial"),
        tutorial: "docsOverview"
      }, {
        name: iM("codeEditorAiTutorial:tutorialName"),
        tutorial: "aiHelperOverview"
      }];
      return (0, zM.jsxs)("div", {
        className: "PromptGenericPopup CodeEditorTutorialsPopup",
        children: [(0, zM.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: iM("codeEditor:tutorialsTitle")
        }), (0, zM.jsx)("div", {
          className: "CodeEditorTutorialsList",
          children: OM.map((MM => (0, zM.jsx)(HM.e, {
            className: "CodeEditorTutorialsListButton",
            onClick: () => {
              rM(), (0, Ej.E)(MM.tutorial)
            },
            children: MM.name
          }, MM.tutorial)))
        })]
      })
    }
    var Gj = iM(103),
      Cj = iM(37486),
      ej = iM(3009);
    const bj = (0, SM.forwardRef)((function(MM, rM) {
      let {
        value: iM,
        onChange: OM,
        onSubmit: SM,
        placeholder: jM,
        maxLength: aM,
        rows: PM = 2,
        allowNewLines: nM = !1,
        onKeyDown: QM,
        before: LM
      } = MM;
      const {
        t: mM
      } = (0, KM.A)(), hM = "" !== iM.trim(), JM = () => {
        hM && SM()
      };
      return (0, zM.jsxs)("div", {
        className: "PanelPromptInputRow",
        children: [LM, (0, zM.jsx)("textarea", {
          ref: rM,
          className: "PanelPromptInput",
          value: iM,
          maxLength: aM,
          rows: PM,
          placeholder: jM,
          spellCheck: !1,
          autoComplete: "off",
          onChange: MM => {
            OM(nM ? MM.target.value : MM.target.value.replace(/\r?\n/g, " "))
          },
          onKeyDown: MM => {
            MM.nativeEvent.isComposing || 229 === MM.nativeEvent.keyCode ? MM.stopPropagation() : "Escape" !== MM.key && (MM.stopPropagation(), null === QM || void 0 === QM || QM(MM), MM.defaultPrevented || "Enter" !== MM.key || nM && MM.shiftKey || (MM.preventDefault(), JM()))
          }
        }), (0, zM.jsx)(HM.e, {
          className: "PanelPromptSend",
          disabled: !hM,
          onClick: JM,
          ariaLabel: mM("codeEditorPanels:send"),
          children: (0, zM.jsx)(dM.b, {
            name: "arrow-up"
          })
        })]
      })
    }));

    function wj(MM) {
      let {
        inputRef: rM
      } = MM;
      const {
        t: iM
      } = (0, KM.A)(), {
        messages: OM,
        reportedPlayers: jM,
        channel: aM
      } = (0, ej.m)(), [PM, nM] = (0, SM.useState)(""), QM = (0, SM.useRef)({
        stepsBack: 0,
        text: ""
      });
      return (0, zM.jsxs)("div", {
        className: "CodeEditorChatPanel",
        "data-replay-redact": !0,
        children: [(0, zM.jsx)("div", {
          className: "CodeEditorChatHeader",
          children: (0, zM.jsx)("span", {
            className: "CodeEditorChatTitle",
            children: iM("codeEditorChat:title")
          })
        }), 0 === OM.length ? (0, zM.jsx)("div", {
          className: "CodeEditorChatEmpty",
          children: iM("codeEditorChat:empty")
        }) : (0, zM.jsx)("div", {
          className: "ChatMessages CodeEditorChatMessages",
          children: (0, zM.jsx)(Cj.d, {
            messages: OM,
            reportedPlayers: jM
          })
        }), (0, zM.jsx)(bj, {
          ref: rM,
          value: PM,
          onChange: nM,
          onSubmit: () => {
            (0, ej.i)(PM), nM(""), QM.current = {
              stepsBack: 0,
              text: ""
            }
          },
          maxLength: wM.ad,
          rows: 1,
          placeholder: aM ? iM("touchOnly" === (0, Gj.c)() ? "codeEditorChat:channelPlaceholderTouch" : "codeEditorChat:channelPlaceholder", {
            channel: aM.channelName
          }) : iM("codeEditorChat:placeholder"),
          before: aM && (0, zM.jsx)("button", {
            type: "button",
            className: "CodeEditorChatChannel",
            style: {
              backgroundColor: aM.elementBgColor
            },
            onClick: () => {
              ej.b.selectNextChannel(), rM.current.focus()
            },
            children: (0, zM.jsx)(eM.b, {
              text: aM.elementContent
            })
          }),
          onKeyDown: MM => {
            const rM = PM === QM.current.text;
            if ("ArrowUp" !== MM.key && "ArrowDown" !== MM.key || !rM && "" !== PM) "Tab" === MM.key && !MM.shiftKey && aM && (MM.preventDefault(), ej.b.selectNextChannel());
            else {
              MM.preventDefault();
              const iM = rM ? QM.current.stepsBack : 0;
              QM.current = (0, ej.f)(iM + ("ArrowUp" === MM.key ? 1 : -1)), nM(QM.current.text)
            }
          }
        })]
      })
    }
    var tj = iM(37830);

    function gj(MM) {
      return "expanded" === MM ? "always" : "shown" === MM ? "narrow" : void 0
    }

    function uj(MM) {
      var rM;
      let {
        uL: iM,
        worldPanel: OM,
        closeWorld: SM,
        aiShown: jM,
        defaultWidth: aM,
        children: PM
      } = MM;
      const nM = "hidden" !== iM;
      return (0, zM.jsx)(tj.e, {
        side: "right",
        defaultSize: nM ? "max(18rem, 40%)" : aM,
        covers: null !== (rM = gj(iM)) && void 0 !== rM ? rM : jM ? "narrow" : void 0,
        children: (0, zM.jsxs)("div", {
          className: Ui()("CodeEditorRightColumn", {
            WorldShown: nM,
            WorldExpanded: "expanded" === iM
          }),
          children: [nM && (0, zM.jsx)(tj.e, {
            side: "top",
            onClose: SM,
            children: OM
          }), PM]
        })
      })
    }
    var Rj = iM(2088),
      pj = iM(1135),
      Wj = iM(1327);
    class sj {
      constructor(MM, rM, iM) {
        this.measure = MM, this.apply = rM, this.now = iM, this.last = null, this.resizedAt = -1 / 0, this.resizing = !1, this.stretchedAt = null
      }
      get rect() {
        var MM, rM;
        return null !== (MM = null === (rM = this.last) || void 0 === rM ? void 0 : rM.rect) && void 0 !== MM ? MM : null
      }
      sync() {
        const MM = function(MM) {
          const rM = Math.round(MM.left),
            iM = Math.round(MM.top);
          return {
            left: rM,
            top: iM,
            width: Math.round(MM.right) - rM,
            height: Math.round(MM.bottom) - iM
          }
        }(this.measure());
        if (MM.width <= 0 || MM.height <= 0) return;
        const rM = this.now(),
          iM = this.last;
        let OM = {
          width: MM.width,
          height: MM.height
        };
        null === iM || MM.width === iM.rect.width && MM.height === iM.rect.height || (this.resizing = rM - this.resizedAt < 100, this.resizedAt = rM);
        const SM = null !== iM && this.resizing && rM - this.resizedAt < 100 && (MM.width !== iM.bufferSize.width || MM.height !== iM.bufferSize.height);
        SM && (this.stretchedAt ??= rM), SM && rM - this.stretchedAt < 250 ? OM = iM.bufferSize : this.stretchedAt = null;
        const jM = {
          rect: MM,
          bufferSize: OM
        };
        var aM, PM;
        null !== iM && (PM = jM, (aM = iM).rect.left === PM.rect.left && aM.rect.top === PM.rect.top && aM.rect.width === PM.rect.width && aM.rect.height === PM.rect.height && aM.bufferSize.width === PM.bufferSize.width && aM.bufferSize.height === PM.bufferSize.height) || (this.last = jM, this.apply(jM))
      }
      stop() {
        null !== this.last && (this.last = null, this.apply(null))
      }
    }

    function Dj(MM) {
      const {
        style: rM
      } = document.documentElement;
      for (const [iM, OM] of [
          ["--worldViewLeft", null === MM || void 0 === MM ? void 0 : MM.left],
          ["--worldViewTop", null === MM || void 0 === MM ? void 0 : MM.top],
          ["--worldViewWidth", null === MM || void 0 === MM ? void 0 : MM.width],
          ["--worldViewHeight", null === MM || void 0 === MM ? void 0 : MM.height]
        ]) void 0 === OM ? rM.removeProperty(iM) : rM.setProperty(iM, `${OM}px`)
    }
    var kj = iM(1830),
      Zj = iM(2096);

    function oj(MM, rM) {
      (0, SM.useEffect)((() => {
        if (!MM) return;
        const iM = MM => {
          var iM;
          "Escape" === MM.key ? (MM.stopPropagation(), MM.preventDefault(), rM()) : (iM = MM.code, Object.entries(vr.v).some((MM => {
            let [rM, OM] = MM;
            const SM = Zj.g[rM];
            return SM.includes("ui") && !SM.includes("core") && OM.includes(iM)
          })) && !(0, kj.isTextEntry)(MM.target) && MM.preventDefault())
        };
        window.addEventListener("keydown", iM, !0);
        const OM = (0, NM.p)(rM);
        return () => {
          window.removeEventListener("keydown", iM, !0), OM()
        }
      }), [MM, rM])
    }

    function fj() {
      return (0, yS.u)().some((MM => MM !== yS.e))
    }

    function Yj(MM, rM) {
      return MM.map((MM => rM ? String(MM) : MM.toFixed(1))).join(", ")
    }

    function Nj(MM) {
      let {
        freeCamera: rM,
        picking: iM,
        hovered: OM
      } = MM;
      const {
        t: jM
      } = (0, KM.A)(), aM = (0, SM.useRef)(null), PM = (0, SM.useRef)(null);
      return (0, SM.useEffect)((() => {
        const MM = (MM, rM) => {
            MM.textContent !== rM && (MM.textContent = rM)
          },
          iM = () => {
            const iM = rM ? QM.gameBridge.lookup("freeCameraPos", null) : null;
            MM(aM.current, Yj(null !== iM && void 0 !== iM ? iM : QM.gameBridge.lookup("localPos", null), !1));
            const OM = QM.gameBridge.lookup("targetedBlockPos", null);
            MM(PM.current, OM ? Yj(OM, !0) : "-")
          };
        return iM(), (0, Wj.E)(iM)
      }), [rM]), (0, zM.jsxs)("div", {
        className: "WorldPanelCoordinates",
        children: [(0, zM.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: jM(rM ? "codeEditorWorld:camera" : "codeEditorWorld:position")
        }), (0, zM.jsx)("span", {
          ref: aM
        }), (0, zM.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: jM("codeEditorWorld:lookingAt")
        }), (0, zM.jsx)("span", {
          ref: PM,
          hidden: iM
        }), iM && (0, zM.jsxs)(zM.Fragment, {
          children: [(0, zM.jsx)("span", {
            children: OM ? Yj(OM.pos, !0) : "-"
          }), OM && (0, zM.jsx)("span", {
            className: "WorldPanelCoordsName",
            children: OM.name
          })]
        })]
      })
    }
    var Aj = iM(37833),
      xj = iM(1541);

    function vj(MM) {
      const rM = MM.currentTarget.getBoundingClientRect();
      return {
        x: (MM.clientX - rM.left) / rM.width,
        y: (MM.clientY - rM.top) / rM.height
      }
    }

    function Fj(MM) {
      const [rM, iM] = (0, SM.useState)(!1), [OM, jM] = (0, SM.useState)(null), aM = (0, SM.useRef)(null);
      (0, SM.useEffect)((() => {
        if (!rM) return;
        let MM = null,
          iM = null,
          OM = 1 / 0;
        const SM = (0, Wj.x)((rM => {
          OM += rM;
          const SM = aM.current;
          if (SM === iM && OM < 100) return;
          iM = SM, OM = 0;
          const PM = SM && QM.gameBridge.lookup("blockAtViewPoint", SM);
          var nM, zM;
          (nM = PM) === (zM = MM) || null !== nM && null !== zM && nM.name === zM.name && (0, Aj.d)(nM.pos, zM.pos) && (0, Aj.d)(nM.normal, zM.normal) || (MM = PM, jM(PM), QM.gameBridge.send("setBlockHighlight", PM))
        }));
        return () => {
          SM(), null !== MM && QM.gameBridge.send("setBlockHighlight", null), jM(null)
        }
      }), [rM]);
      const PM = (0, SM.useCallback)((() => {
        iM(!1)
      }), []);
      oj(rM, PM);
      const nM = OM => {
          if (!rM) return;
          const SM = QM.gameBridge.lookup("blockAtViewPoint", vj(OM));
          null !== SM && (iM(!1), MM(SM.pos))
        },
        zM = rM ? (0, xj.g)(nM, "pointerup") : null,
        LM = {
          onPointerDown: MM => {
            null === zM || void 0 === zM || zM.onPointerDown(MM)
          },
          onPointerMove: MM => {
            aM.current = vj(MM)
          },
          onPointerLeave: () => {
            aM.current = null
          },
          onPointerUp: null === zM || void 0 === zM ? void 0 : zM.onPointerUp,
          onClick: MM => {
            "pointerType" in MM.nativeEvent && "touch" === MM.nativeEvent.pointerType || nM(MM)
          }
        };
      return {
        picking: rM,
        setPicking: iM,
        hovered: OM,
        slotHandlers: LM
      }
    }

    function Bj(MM) {
      QM.gameBridge.send("setFreeCameraMovesFly", MM)
    }

    function Xj(MM) {
      let {
        shown: rM,
        setShown: iM,
        canInsertCode: OM
      } = MM;
      const {
        t: jM
      } = (0, KM.A)(), {
        isTouchScreen: aM
      } = (0, YM.m)(["isTouchScreen"]), PM = (0, SM.useRef)(null), QM = (0, SM.useCallback)((() => {
        var MM;
        null === (MM = PM.current.closest(".CodeEditorBg").querySelector(".cm-content")) || void 0 === MM || MM.focus()
      }), []), {
        control: LM,
        take: mM,
        release: JM,
        blocked: yM
      } = function(MM) {
        const [rM, iM] = (0, SM.useState)("none"), OM = (0, SM.useRef)("none"), [jM, aM] = (0, SM.useState)(!1), PM = MM => {
          OM.current = MM, iM(MM)
        }, nM = (0, SM.useCallback)((() => {
          const rM = OM.current;
          "none" !== rM && (PM("none"), (0, yS.z)(yS.e), "mouse" === rM && MM())
        }), [MM]), QM = (0, SM.useCallback)((MM => {
          fj() ? aM(!0) : (PM("mouse" === MM && "touchOnly" !== (0, Gj.c)() ? "mouse" : "touch"), (0, yS.v)(yS.e))
        }), []);
        return (0, bM.d)("pointerLockUpdate", (MM => {
          MM && "touch" === OM.current && "touchOnly" !== (0, Gj.c)() ? PM("mouse") : MM || "mouse" !== OM.current || nM()
        })), (0, SM.useEffect)((() => {
          if (!jM) return;
          const MM = () => {
            fj() || aM(!1)
          };
          return MM(), (0, yS.o)(MM)
        }), [jM]), oj("none" !== rM, nM), (0, SM.useEffect)((() => {
          if ("none" === rM) return;
          const MM = MM => {
            (0, kj.isTextEntry)(MM.target) && nM()
          };
          return document.addEventListener("focusin", MM), () => {
            document.removeEventListener("focusin", MM)
          }
        }), [rM, nM]), (0, SM.useEffect)((() => (document.addEventListener("pointerlockerror", nM), () => {
          document.removeEventListener("pointerlockerror", nM)
        })), [nM]), (0, SM.useEffect)((() => () => {
          "none" !== OM.current && null !== YM.d.get("openInGameMenuName") && (0, yS.z)(yS.e)
        }), []), {
          control: rM,
          take: QM,
          release: nM,
          blocked: jM
        }
      }(QM), lM = (0, pj.k)(tj.i);
      (0, SM.useEffect)((() => {
        "touch" !== LM || "shown" !== rM || lM ? "none" === LM && "expanded" === rM && iM("shown") : iM("expanded")
      }), [LM, lM]),
      function(MM, rM) {
        const iM = (0, SM.useRef)(rM);
        iM.current = rM;
        const OM = (0, SM.useRef)(null);
        (0, SM.useLayoutEffect)((() => {
          const rM = new sj((() => MM.current.getBoundingClientRect()), (MM => {
            var rM;
            "none" !== iM.current && Dj(null !== (rM = null === MM || void 0 === MM ? void 0 : MM.rect) && void 0 !== rM ? rM : null), (0, Wj.M)().setGameView(MM)
          }), (() => performance.now()));
          OM.current = rM, rM.sync();
          const SM = (0, Wj.v)((() => {
            rM.sync()
          }));
          return () => {
            SM(), YM.d.set({
              worldPanelHud: null
            }), rM.stop()
          }
        }), [MM]), (0, SM.useLayoutEffect)((() => {
          OM.current.sync(), Dj("none" === rM ? null : OM.current.rect), YM.d.set({
            worldPanelHud: rM
          })
        }), [rM])
      }(PM, "touch" === LM ? "touchControls" : "none");
      const {
        picking: EM,
        setPicking: UM,
        hovered: GM,
        slotHandlers: {
          onPointerDown: CM,
          ...eM
        }
      } = Fj((MM => {
        hM.i.Tz("CodeEditorInsertText", {
          text: `[${MM.join(", ")}]`,
          focus: !aM
        }), (0, tj.i)() && iM("hidden")
      })), wM = function() {
        const {
          allowed: MM,
          movesFly: rM
        } = (0, tM.j)("freeCamera"), iM = (0, SM.useRef)(rM), OM = (0, SM.useRef)(rM);
        return OM.current !== rM && (OM.current = rM, iM.current = rM), (0, SM.useEffect)((() => () => {
          iM.current && Bj(!1)
        }), []), {
          allowed: MM,
          on: rM,
          toggle: () => {
            iM.current = !rM, Bj(!rM)
          }
        }
      }(), gM = (0, nM.f)("hideCoordinates"), uM = (0, tM.j)("localPlayerAlive"), RM = !uM || yM;
      (0, SM.useEffect)((() => {
        uM || JM()
      }), [uM, JM]), (0, SM.useEffect)((() => {
        !RM && OM || UM(!1)
      }), [RM, OM, UM]);
      const pM = wM.on ? HM.p : HM.e,
        WM = EM ? HM.p : HM.e;
      return (0, zM.jsxs)("div", {
        className: "WorldPanel",
        children: [(0, zM.jsxs)("div", {
          className: "WorldPanelHeader",
          children: [(0, zM.jsx)("span", {
            className: "WorldPanelTitle",
            children: jM("codeEditorWorld:title")
          }), "touch" === LM && !lM && (0, zM.jsx)(HM.e, {
            className: "WorldPanelButton",
            onClick: JM,
            children: jM("codeEditorWorld:backToCode")
          }), !RM && wM.allowed && !aM && (0, zM.jsx)(XM.i, {
            tooltipInner: jM("codeEditorWorld:freeCameraTooltip"),
            hoverOnly: !0,
            children: (0, zM.jsx)(pM, {
              className: "WorldPanelButton",
              ariaPressed: wM.on,
              ariaLabel: jM("codeEditorWorld:freeCamera"),
              onClick: wM.toggle,
              children: (0, zM.jsx)(dM.b, {
                name: "video"
              })
            })
          }), !RM && OM && (0, zM.jsx)(XM.i, {
            tooltipInner: jM("codeEditorWorld:pickTooltip"),
            hoverOnly: !0,
            children: (0, zM.jsxs)(WM, {
              className: "WorldPanelButton",
              ariaPressed: EM,
              onClick: () => {
                JM(), UM(!EM)
              },
              children: [(0, zM.jsx)(dM.b, {
                name: "crosshairs"
              }), jM("codeEditorWorld:pick")]
            })
          })]
        }), !gM && (0, zM.jsx)(Nj, {
          freeCamera: wM.on,
          picking: EM,
          hovered: GM
        }), (0, zM.jsxs)("div", {
          ref: PM,
          className: Ui()("WorldPanelSlot", {
            TouchControl: "touch" === LM,
            Picking: EM
          }),
          onPointerDown: MM => {
            0 !== MM.button || RM || EM || mM(MM.pointerType), CM(MM)
          },
          ...eM,
          children: [!RM && !EM && (0, zM.jsx)("div", {
            className: "WorldPanelCrosshair",
            children: "+"
          }), !RM && "touch" !== LM && (0, zM.jsxs)("div", {
            className: "WorldPanelHint",
            children: [EM && jM(aM ? "codeEditorWorld:tapToPick" : "codeEditorWorld:clickToPick"), !EM && "none" === LM && !wM.on && jM(aM ? "codeEditorWorld:tapToPlay" : "codeEditorWorld:clickToPlay"), !EM && "none" === LM && wM.on && jM("codeEditorWorld:clickToFly"), "mouse" === LM && (0, zM.jsxs)(zM.Fragment, {
              children: [(0, zM.jsx)(Rj.d, {
                noaAction: "OpenLobbyLeaderboard"
              }), jM("codeEditorWorld:backToCode")]
            })]
          }), RM && (0, zM.jsxs)("div", {
            className: "WorldPanelWaiting",
            children: [(0, zM.jsx)("span", {
              children: jM(uM ? "codeEditorWorld:gameWaiting" : "codeEditorWorld:died")
            }), (0, zM.jsx)(HM.e, {
              onClick: NM.i,
              children: jM("codeEditorWorld:toGame")
            })]
          })]
        })]
      })
    }
    var Ij = iM(5417);

    function Kj(MM) {
      let {
        uL: rM,
        setWorld: iM,
        toggleWorld: OM,
        aiShown: SM,
        closeAi: jM
      } = MM;
      const {
        t: aM
      } = (0, KM.A)(), PM = SM ? "ai" : "hidden" !== rM ? "world" : "code", nM = [{
        value: "code",
        label: aM("codeEditorWorld:codePane")
      }, {
        value: "world",
        label: aM("codeEditorWorld:title")
      }];
      SM && nM.push({
        value: "ai",
        label: aM("codeEditorWorld:aiPane")
      });
      return (0, zM.jsx)("div", {
        className: "CodeEditorPaneSwitch",
        children: (0, zM.jsx)(Ij.e, {
          options: nM,
          value: PM,
          onChange: MM => {
            "world" !== MM ? (SM && jM(), iM("hidden")) : "hidden" === rM ? OM() : jM()
          },
          ariaLabel: aM("codeEditorWorld:panes"),
          keepsFocus: !0
        })
      })
    }
    var qj = iM(37837),
      Tj = iM(37839),
      Vj = iM(37846),
      cj = iM(37849);
    const Ma = (0, SM.lazy)((() => Promise.all([iM.e(608), iM.e(604), iM.e(607), iM.e(603), iM.e(98), iM.e(606), iM.e(605), iM.e(602)]).then((() => iM(43965))))),
      ra = (0, SM.lazy)((() => Promise.all([iM.e(93), iM.e(96), iM.e(97), iM.e(95), iM.e(610)]).then((() => iM(44122))))),
      ia = (0, SM.lazy)((() => Promise.all([iM.e(608), iM.e(607), iM.e(98), iM.e(96), iM.e(97), iM.e(95), iM.e(606), iM.e(605), iM.e(94), iM.e(105)]).then((() => iM(44130)))));

    function Oa(MM) {
      return QM.gameBridge.query("worldCodeAiChunk", MM)
    }

    function Sa() {
      return QM.gameBridge.query("worldCodeAiGameState", null)
    }

    function ja(MM) {
      const {
        gsUrl: rM,
        gameNameWithVariation: iM,
        lobbyName: OM
      } = jj();
      return (0, RS.postJsonWithMetricsCookiesAndJsonResponse)(`${rM}/code/get-lobby-code`, uS.bk["get-lobby-code"].toBuffer({
        gameNameWithVariation: iM,
        lobbyName: OM,
        path: MM
      }), {
        retries: 1
      })
    }
    let aa = !1;
    const Pa = [],
      na = {
        message: "You do not have permission to view the code.",
        type: "warning"
      },
      Qa = (0, SM.memo)((function(MM) {
        var rM, iM;
        let {
          show: OM,
          onOpen: jM,
          onClose: PM,
          isLobbyCode: LM
        } = MM;
        const mM = (0, SM.useRef)(""),
          [JM, yM] = (0, SM.useState)(null),
          lM = (0, SM.useRef)(LM),
          [EM, UM] = (0, SM.useState)({
            message: null,
            type: null
          }),
          [GM, CM] = (0, SM.useState)(""),
          eM = EM.message ? EM : {
            message: GM,
            type: "warning"
          },
          [uM, RM] = (0, SM.useState)(!0),
          [pM, sM] = (0, Jj.j)(Jj.h),
          [DM, kM] = (0, Jj.j)(Jj.e),
          [ZM, oM] = (0, SM.useState)(!1),
          [fM, AM] = (0, SM.useState)(!1),
          xM = (0, SM.useRef)(null),
          vM = (0, SM.useRef)(!1);
        (0, SM.useEffect)((() => {
          var MM;
          fM && vM.current && (vM.current = !1, null === (MM = xM.current) || void 0 === MM || MM.focus())
        }), [fM]);
        const FM = (0, qj.b)(),
          BM = (0, SM.useRef)(null),
          IM = (0, SM.useRef)(null),
          {
            openInGameMenuName: qM,
            openEverythingMenuName: TM,
            worldPanelHud: VM
          } = (0, YM.m)(["openInGameMenuName", "openEverythingMenuName", "worldPanelHud"]),
          cM = MM => {
            OM && (BM.current = MM, tr.current = !0)
          };
        (0, bM.d)("OpenReportMenu", (() => {
          cM("aL")
        })), (0, bM.d)("OpenStoreFromCodeEditor", (() => {
          cM("store")
        })), (0, SM.useEffect)((() => {
          const MM = BM.current;
          null === MM || "aL" === MM && ("makeReport" === qM || "makeDiscordReport" === qM) || "store" === MM && null !== TM || (BM.current = null, null === qM && null === TM ? LM ? (IM.current = Oi.current, hM.i.Tz("EditLobbyCode", JM)) : hM.i.Tz("EditCodeBlock", {
            pos: JM,
            canChangePos: lM.current
          }) : (0, Ej.y)())
        }), [qM, TM, LM, JM]), (0, SM.useEffect)((() => {
          if (OM) return () => {
            IM.current = null
          }
        }), [OM]);
        const [Mr, rr] = function() {
          const [MM, rM] = (0, SM.useState)(aa);
          return (0, bM.d)("CodeEditorAiHelperShown", (MM => {
            rM(MM)
          })), [MM, (0, SM.useCallback)((MM => {
            aa = MM, hM.i.Tz("CodeEditorAiHelperShown", MM)
          }), [])]
        }(), [ir, Or] = (0, SM.useState)(null), [Sr, jr] = (0, SM.useState)([]), [ar, Pr] = (0, SM.useState)(0), [nr, Qr] = (0, SM.useState)(0), [zr, Lr] = (0, SM.useState)(""), Hr = (0, SM.useRef)(null), [hr, Jr] = (0, SM.useState)(LM ? cj.h : null), dr = LM || null !== JM, yr = (0, nM.f)("canEditCode"), lr = (0, nM.f)("canUseDevCreativeItems"), Er = (0, lj.k)("welcome"), Ur = (0, lj.k)("docsOverview"), Gr = Ur ? "docsOverview" : "welcome", Cr = null !== Ur && void 0 !== Ur ? Ur : Er, er = (0, lj.k)("aiHelperOverview"), br = er ? "aiHelperOverview" : "welcome", wr = null !== er && void 0 !== er ? er : Er, tr = (0, SM.useRef)(!1), gr = (0, SM.useRef)(!1), ur = (0, SM.useRef)(null), [Rr, pr] = (0, SM.useState)(""), [Wr, sr] = (0, SM.useState)(!1), [Dr, kr] = (0, SM.useState)(null), Zr = (0, tM.j)("connectedGame"), or = LM && yr && "classic" === Zr.gameNameWithVariation && !(0, mr.P)(Zr.lobbyName), [fr, Yr] = (0, SM.useState)(null), [Nr, xr] = (0, SM.useState)({
          [pS.i]: ""
        }), [Fr, Br] = (0, SM.useState)({
          assets: {},
          revision: 0
        }), Xr = (0, SM.useRef)(Fr), Ir = (0, SM.useCallback)((MM => {
          var rM;
          MM.revision < Xr.current.revision || (Xr.current = MM, Br(MM), CM(MM.startupError ? `Schematics could not load: ${MM.startupError}` : ""), null === (rM = di.current) || void 0 === rM || rM.onLobbyFilesChanged({
            ...ni.current,
            ...(0, NS.n)(MM.assets)
          }))
        }), []), [Kr, qr] = (0, SM.useState)(pS.i), [Tr, Vr] = (0, SM.useState)(null), [cr, Mi] = (0, SM.useState)(null), ri = (0, SM.useRef)(!1), ii = (0, SM.useRef)(null), Oi = (0, SM.useRef)(Kr);
        Oi.current = Kr;
        const Si = (0, SM.useRef)(Tr);
        Si.current = Tr;
        const ji = Tr ? null : Dr,
          ai = ji && !ji.engineLocked ? ji.worldCodeEngine : null,
          Pi = (0, SM.useRef)(cr);
        Pi.current = cr;
        const ni = (0, SM.useRef)(Nr);
        ni.current = Nr;
        const Qi = (0, SM.useRef)(null),
          zi = (0, SM.useRef)(null),
          [Li, mi] = (0, SM.useState)(!1),
          Hi = (0, TS.t)(),
          Ji = (0, SM.useRef)([]),
          di = (0, SM.useRef)(null),
          yi = (0, SM.useRef)(null),
          li = (0, SM.useRef)(null);

        function Ei(MM) {
          UM(MM), clearTimeout(ur.current), ur.current = setTimeout((() => {
            UM({
              message: null,
              type: null
            })
          }), 3e3)
        }
        const Gi = (0, SM.useCallback)((function() {
            let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            ri.current && ii.current && (QM.gameBridge.send("sendCodeCollab", {
              hM: WS.c.Leave,
              JM: (0, WS.z)(ii.current),
              cn: !!MM || null
            }), ri.current = !1, ii.current = null), Yr(null)
          }), []),
          Ci = (0, SM.useCallback)((MM => {
            const rM = {
              kind: "lobby",
              path: MM
            };
            ii.current = rM, qr(MM), mM.current = "", QM.gameBridge.send("sendCodeCollab", {
              hM: WS.c.Join,
              JM: (0, WS.z)(rM)
            }), ri.current = !0
          }), []),
          ei = (0, SM.useCallback)((MM => {
            var rM;
            const iM = null === (rM = yi.current) || void 0 === rM ? void 0 : rM.collabState;
            return iM && "lobby" === iM.docKey.kind && iM.docKey.path === MM && Oi.current === MM ? Promise.resolve({
              doc: iM.doc,
              version: iM.version,
              clientID: iM.clientID,
              docKey: iM.docKey,
              httpConfig: iM.httpConfig
            }) : new Promise(((rM, iM) => {
              const OM = setTimeout((() => {
                  Ji.current = Ji.current.filter((MM => MM !== SM)), iM(new Error(`Timed out joining ${MM}`))
                }), 15e3),
                SM = iM => {
                  "lobby" === iM.docKey.kind && iM.docKey.path === MM && (clearTimeout(OM), Ji.current = Ji.current.filter((MM => MM !== SM)), rM(iM))
                };
              Ji.current.push(SM), Oi.current !== MM ? (Gi(!0), Ci(MM)) : ri.current || Ci(MM)
            }))
          }), [Ci, Gi]),
          bi = (0, SM.useCallback)((async function(MM, rM) {
            let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
            const OM = Date.now();
            let SM = MM in ni.current;
            for (; SM !== rM;) {
              if (Date.now() - OM > iM) throw new Error(`Timed out waiting for lobby path ${MM} present=${rM}`);
              await (0, UO.Q)(50), SM = MM in ni.current
            }
          }), []),
          wi = (0, SM.useCallback)((MM => {
            const rM = ni.current,
              iM = pS.i in rM && pS.m in rM;
            if (!(0, sS.i)(MM) || iM) {
              if (Oi.current === MM) {
                var OM;
                const SM = iM && (0, sS.i)(MM) ? MM === pS.i ? pS.m : pS.i : null !== (OM = (0, sS.d)(rM)) && void 0 !== OM ? OM : pS.i;
                zi.current = {
                  fromPath: MM,
                  toPath: SM
                }, qr(SM)
              }
              QM.gameBridge.send("sendCodeCollab", {
                hM: WS.c.DeleteFile,
                JM: (0, WS.z)({
                  kind: "lobby",
                  path: Oi.current
                }),
                MQ: MM
              })
            }
          }), []),
          ti = (0, SM.useCallback)((MM => {
            IM.current = null, Vr(null), Mi(null), !LM || MM === Oi.current && ri.current || (Gi(!0), Ci(MM))
          }), [LM, Gi, Ci]),
          gi = (0, SM.useCallback)(((MM, rM) => {
            const iM = fS.i[MM],
              OM = iM && rM in iM.files ? rM : "index.ts";
            if (MM !== Si.current || OM !== Pi.current) {
              var SM;
              if (MM !== Si.current) null === (SM = di.current) || void 0 === SM || SM.stopContinuousSync(), Gi(!0);
              Vr(MM), Mi(OM)
            }
          }), [Gi]),
          ui = (0, SM.useCallback)((MM => {
            var rM;
            const iM = Oi.current,
              OM = ni.current[iM],
              SM = ri.current && !Si.current && iM in MM && void 0 !== OM ? {
                ...MM,
                [iM]: OM
              } : MM;
            xr(SM);
            const jM = Qi.current;
            if (jM && jM in MM) Qi.current = null, jM !== Oi.current && ti(jM);
            else if (!(Oi.current in MM) && ri.current && !Si.current) {
              var aM;
              ti(null !== (aM = (0, sS.d)(MM)) && void 0 !== aM ? aM : pS.i)
            }
            null === (rM = di.current) || void 0 === rM || rM.onLobbyFilesChanged({
              ...SM,
              ...(0, NS.n)(Xr.current.assets)
            })
          }), [ti]),
          Ri = (0, SM.useCallback)((() => ja(Oi.current).then((async MM => {
            if (!ri.current || !MM.files) return null;
            ui(MM.files);
            const rM = await aj({
              action: "state"
            });
            return Ir(rM), {
              ...MM.files,
              ...(0, NS.n)(rM.assets)
            }
          })).catch((MM => (console.error("[CodeCollab] Failed to fetch lobby files via HTTP", MM), Ei({
            message: "Could not refresh the file list",
            type: "warning"
          }), null)))), [ui, Ir]),
          Wi = () => {
            PM()
          };
        (0, SM.useEffect)((() => {
          if (CM(""), !OM || !LM) return;
          let MM = !1;
          return Xr.current = {
            assets: {},
            revision: 0
          }, Br(Xr.current), aj({
            action: "state"
          }).then((rM => {
            MM || Ir(rM)
          })).catch((rM => {
            console.error("Could not load project schematics", rM), MM || CM("Could not load schematics. Reopen the Code Editor to retry.")
          })), () => {
            MM = !0
          }
        }), [OM, LM, Ir]);
        const si = (0, SM.useCallback)((function() {
            let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            ii.current && QM.gameBridge.send("sendCodeCollab", {
              hM: WS.c.Submit,
              JM: (0, WS.z)(ii.current),
              ...MM ? {
                EM: "keepOpen"
              } : {}
            })
          }), []),
          Di = (0, SM.useCallback)((() => {
            if (!ii.current || "lobby" !== ii.current.kind) return;
            const MM = Rr.trim();
            (0, DS.t)(MM) ? (QM.gameBridge.send("sendCodeCollab", {
              hM: WS.c.ReloadAsVariation,
              JM: (0, WS.z)(ii.current),
              EM: MM
            }), sr(!1)) : Ei({
              message: "Variation must be 1-32 characters: A-Z, a-z, 0-9, _, -",
              type: "warning"
            })
          }), [Rr]),
          ki = (0, SM.useCallback)((MM => {
            QM.gameBridge.send("sendCodeCollab", {
              hM: WS.c.SetEngine,
              JM: (0, WS.z)({
                kind: "lobby",
                path: Oi.current
              }),
              EM: MM
            })
          }), []),
          Zi = (0, SM.useCallback)((MM => {
            if (!Si.current && yr && (lM.current || LM)) {
              if (LM) {
                var rM;
                const iM = (0, sS.s)(ni.current, Oi.current),
                  OM = Math.min(Ar.s, Math.max(0, Ar.y - iM)),
                  SM = MM.slice(0, OM);
                return mM.current = SM, xr((MM => ({
                  ...MM,
                  [Oi.current]: SM
                }))), void(null === (rM = di.current) || void 0 === rM || rM.onDocTextChanged(Oi.current, SM))
              }
              mM.current = MM, Lr(MM)
            }
          }), [yr, LM]);
        (0, bM.d)("EditLobbyCode", (MM => {
          var rM;
          WM.featureFlags.canSeePlayerWrittenText && LM && (Gi(), yM(MM), mM.current = "", xr({
            [pS.i]: ""
          }), kr(null), qr(pS.i), Vr(null), Mi(null), Qi.current = null, zi.current = null, null === (rM = di.current) || void 0 === rM || rM.stopContinuousSync(), jM(), Ci(pS.i))
        })), (0, bM.d)("EditCodeBlock", (MM => {
          let {
            pos: rM,
            canChangePos: iM
          } = MM;
          if (WM.featureFlags.canSeePlayerWrittenText && !LM)
            if (Gi(), null !== rM && (rM = [...rM]), yM(rM), lM.current = iM, null !== rM) {
              mM.current = "", Lr(""), jM();
              const MM = {
                  kind: "codeBlock",
                  pos: rM
                },
                OM = (0, WS.z)(MM);
              Hr.current !== OM && (Hr.current = OM, jr([]), Qr(ar)), Jr((0, cj.e)(OM, [rM[0], rM[1], rM[2]], !!iM)), ii.current = MM, QM.gameBridge.send("sendCodeCollab", {
                hM: WS.c.Join,
                JM: (0, WS.z)(MM)
              }), ri.current = !0
            } else OM && PM()
        })), (0, bM.d)("codeCollabRejoin", (MM => {
          const rM = ii.current ? (0, WS.z)(ii.current) : null;
          rM && MM.docKey === rM && (mM.current = MM.doc, LM || Lr(MM.doc), Yr((rM => rM ? {
            ...rM,
            doc: MM.doc,
            version: MM.version,
            clientID: (0, oS.e)()
          } : rM)))
        })), (0, bM.d)("codeCollab", (MM => {
          var rM;
          const iM = ii.current ? (0, WS.z)(ii.current) : null;
          if (MM.type === WS.d.LobbyFilesChanged && LM) {
            if ("string" !== typeof MM.files) return void Ri();
            try {
              ui(JSON.parse(MM.files))
            } catch (QM) {
              console.error("[CodeCollab] Failed to parse lobby files", QM), Ri()
            }
            return
          }
          if (MM.type === WS.d.EngineSettings && LM) return void kr(Lj(MM.engineSettings));
          const SM = MM.type === WS.d.Joined ? (0, WS.h)(MM.docKey) : null,
            jM = LM && "lobby" === (null === (rM = ii.current) || void 0 === rM ? void 0 : rM.kind) && (0, sS.i)(ii.current.path) && "lobby" === (null === SM || void 0 === SM ? void 0 : SM.kind) && (0, sS.i)(SM.path);
          if (!iM || MM.docKey === iM || jM)
            if (MM.type !== WS.d.ForceClose) {
              if (OM)
                if (MM.type === WS.d.Joined) {
                  var aM;
                  const zM = JSON.parse(MM.peers),
                    HM = MM.existingCursors ? JSON.parse(MM.existingCursors) : [],
                    dM = (0, oS.e)(),
                    yM = jj(),
                    {
                      gsUrl: lM,
                      gameNameWithVariation: EM,
                      lobbyName: GM
                    } = yM,
                    CM = null !== (aM = (0, WS.h)(MM.docKey)) && void 0 !== aM ? aM : ii.current;
                  CM && (ii.current = CM, "lobby" === CM.kind && (qr(CM.path), Oi.current = CM.path));
                  const eM = CM || (LM ? {
                    kind: "lobby",
                    path: Oi.current
                  } : {
                    kind: "codeBlock",
                    pos: JM
                  });

                  function bM(rM) {
                    var iM, OM;
                    if (!ri.current) return;
                    const SM = null !== (iM = rM.code) && void 0 !== iM ? iM : "",
                      jM = null !== (OM = rM.collabVersion) && void 0 !== OM ? OM : 0;
                    mM.current = SM, LM || Lr(SM), LM && rM.files ? xr(rM.files) : LM && xr((MM => ({
                      ...MM,
                      [Oi.current]: SM
                    })));
                    const aM = {
                      doc: SM,
                      version: jM,
                      clientID: dM,
                      docKey: eM,
                      peers: zM,
                      editorCount: MM.editorCount,
                      existingCursors: HM,
                      httpConfig: yM
                    };
                    if (Yr(aM), "lobby" === eM.kind) {
                      var PM;
                      const MM = {
                        doc: SM,
                        version: jM,
                        clientID: dM,
                        docKey: eM,
                        httpConfig: yM
                      };
                      for (const rM of [...Ji.current]) rM(MM);
                      null === (PM = di.current) || void 0 === PM || PM.startWhenReady()
                    }
                    rM.canSeeCode ? (clearTimeout(ur.current), UM({
                      message: null,
                      type: null
                    })) : function(MM) {
                      clearTimeout(ur.current), UM(MM)
                    }(na);
                    const nM = IM.current;
                    IM.current = null, LM && nM && rM.files && nM in rM.files && nM !== Oi.current && ti(nM)
                  }
                  LM ? ja(Oi.current).then(bM).catch((MM => {
                    console.error("[CodeCollab] Failed to fetch lobby code via HTTP", MM), Gi()
                  })) : (0, RS.postJsonWithMetricsCookiesAndJsonResponse)(`${lM}/code/get-code-block`, uS.bk["get-code-block"].toBuffer({
                    gameNameWithVariation: EM,
                    lobbyName: GM,
                    pos: JM
                  }), {
                    retries: 1
                  }).then(bM).catch((MM => {
                    console.error("[CodeCollab] Failed to fetch code block via HTTP", MM), Gi()
                  }))
                } else if (MM.type === WS.d.Presence) {
                if (!iM) return;
                const wM = JSON.parse(MM.peers);
                Yr((rM => rM ? {
                  ...rM,
                  peers: wM,
                  editorCount: MM.editorCount
                } : rM))
              }
            } else {
              var nM;
              if (!iM) return;
              OM && LM && "keptOpen" === MM.updates && hM.i.Tz("CodeEditorKeepEdits");
              const tM = ii.current;
              ri.current = !1, ii.current = null, Yr(null);
              if (!LM || "close" === MM.updates) return (0, Vj.i)(), void(OM && PM());
              if (!OM) return;
              const gM = ni.current,
                uM = zi.current;
              zi.current = null;
              const RM = "lobby" === (null === tM || void 0 === tM ? void 0 : tM.kind) && tM.path === (null === uM || void 0 === uM ? void 0 : uM.fromPath),
                pM = uM && (RM || uM.toPath in gM || (0, sS.i)(uM.toPath)) ? uM.toPath : Oi.current in gM ? Oi.current : null !== (nM = (0, sS.d)(gM)) && void 0 !== nM ? nM : pS.i;
              Ci(pM)
            }
        })), (0, bM.d)("refetchCode", (() => {
          WM.featureFlags.canSeePlayerWrittenText && OM && ri.current && (yr || (Gi(), LM ? hM.i.Tz("EditLobbyCode", JM) : hM.i.Tz("EditCodeBlock", {
            pos: JM,
            canChangePos: lM.current
          })))
        }));
        const oi = (0, SM.useCallback)((() => {
            OM && (oM(!1), window.open("/docs", "_blank", "popup=yes,width=1200,height=800"))
          }), [OM]),
          fi = (0, SM.useCallback)((() => {
            oM(!1)
          }), []);
        (0, SM.useEffect)((() => {
          OM && yr && ("docsButton" === Cr && ZM ? (0, Ej.h)("docsButton") : Cr && Ej.j.includes(Cr) && !ZM && (oM(!0), rr(!1)))
        }), [OM, yr, Cr, ZM, rr]);
        const Yi = (0, SM.useCallback)((() => {
          rr(!1)
        }), [rr]);
        (0, SM.useEffect)((() => {
          OM && yr && dr && ("aiHelperButton" === wr && Mr ? (0, Ej.h)("aiHelperButton") : wr && Ej.d.includes(wr) && !Mr && (rr(!0), oM(!1)))
        }), [OM, yr, dr, wr, Mr, rr]), (0, SM.useEffect)((() => {
          if (!OM || !yr) return;
          const MM = LM ? "worldCode" : "codeBlock";
          return (0, Ej.z)(MM, !0), () => {
            (0, Ej.z)(MM, !1)
          }
        }), [OM, yr, LM]), (0, SM.useEffect)((() => {
          if (OM) return () => {
            tr.current ? tr.current = !1 : (0, Ej.y)()
          }
        }), [OM]), (0, SM.useEffect)((() => {
          (0, Ej.D)("exportButton", !!lr)
        }), [lr]);
        const {
          t: Ni
        } = (0, KM.A)(), Ai = !Mr && ar > nr, xi = Ai ? HM.J : HM.A, vi = (0, SM.useCallback)(((MM, rM) => {
          hM.i.Tz("CodeEditorGoToLine", {
            path: MM,
            line: rM
          }), ti(MM)
        }), [ti]), Fi = (0, SM.useCallback)((MM => {
          li.current = MM
        }), []), Bi = function(MM, rM) {
          const [iM, OM] = (0, SM.useState)(null);
          return (0, SM.useEffect)((() => {
            if (!rM) return void OM(null);
            let iM = !1;
            return qS(MM).then((MM => {
              iM || OM(MM)
            }), (MM => {
              console.error("[CodeEditor] could not collect the imported plugins", MM), iM || OM(null)
            })), () => {
              iM = !0
            }
          }), [MM, rM]), iM
        }(Nr, OM);
        (0, SM.useEffect)((() => {
          Bi && Tr && !Bi.includes(Tr) && (Vr(null), Mi(null), LM && !ri.current && Ci(Oi.current))
        }), [Tr, Bi, LM, Ci]), yi.current = {
          collabState: fr,
          ensureJoinedPath: ei,
          waitForLobbyPath: bi,
          pullLobbyFiles: Ri,
          t: Ni,
          canEditCode: !!yr
        }, di.current || (di.current = new Oj({
          getLobbyFiles: () => ({
            ...ni.current,
            ...(0, NS.n)(Xr.current.assets)
          }),
          deleteSchematic: async MM => {
            const rM = await aj({
              action: "remove",
              path: MM,
              expectedRevision: Xr.current.revision
            });
            Ir(rM)
          },
          getActivePath: () => Oi.current,
          getCollabSnapshot: () => {
            var MM;
            if (Si.current) return null;
            const rM = null === (MM = yi.current) || void 0 === MM ? void 0 : MM.collabState;
            return rM ? {
              doc: rM.doc,
              version: rM.version,
              clientID: rM.clientID,
              docKey: rM.docKey,
              httpConfig: rM.httpConfig
            } : null
          },
          replaceActiveDoc: (MM, rM) => {
            var iM, OM;
            return null !== (iM = null === (OM = li.current) || void 0 === OM ? void 0 : OM.call(li, MM, rM)) && void 0 !== iM && iM
          },
          ensureJoined: MM => yi.current.ensureJoinedPath(MM),
          createFile: (MM, rM) => {
            !1 !== (null === rM || void 0 === rM ? void 0 : rM.focus) && (Qi.current = MM), QM.gameBridge.send("sendCodeCollab", {
              hM: WS.c.CreateFile,
              JM: (0, WS.z)({
                kind: "lobby",
                path: Oi.current
              }),
              MQ: MM
            })
          },
          renameFile: (MM, rM) => {
            const iM = (0, WS.z)({
              kind: "lobby",
              path: Oi.current
            });
            Oi.current === MM && (zi.current = {
              fromPath: MM,
              toPath: rM
            }, qr(rM)), QM.gameBridge.send("sendCodeCollab", {
              hM: WS.c.RenameFile,
              JM: iM,
              MQ: MM,
              rQ: rM
            })
          },
          deleteFile: MM => {
            wi(MM)
          },
          waitForLobbyPath: (MM, rM, iM) => yi.current.waitForLobbyPath(MM, rM, iM),
          pullLobbyFiles: () => yi.current.pullLobbyFiles(),
          setMessage: (MM, rM) => {
            Ei({
              message: MM,
              type: rM
            })
          },
          onUnlinked: () => {
            mi(!1)
          },
          t: MM => yi.current.t(MM),
          canEditCode: () => yi.current.canEditCode,
          getStorageKey: () => {
            const {
              gameNameWithVariation: MM,
              lobbyName: rM
            } = QM.gameBridge.latest("connectedGame");
            return (0, TS.g)(MM, rM)
          }
        }));
        const Xi = (0, SM.useCallback)((async MM => {
            const rM = di.current;
            if (!rM) return !1;
            try {
              return await rM.writeLobbyFiles(MM)
            } catch (iM) {
              return console.error("World Code AI: couldn't write the change", iM), !1
            }
          }), []),
          Ii = (0, SM.useCallback)((async MM => {
            var rM, iM;
            const OM = null === (rM = MM.find((MM => MM.path === Tj.d))) || void 0 === rM ? void 0 : rM.text,
              SM = ii.current;
            return void 0 !== OM && "codeBlock" === (null === SM || void 0 === SM ? void 0 : SM.kind) && (!(null === (iM = li.current) || void 0 === iM || !iM.call(li, (0, WS.z)(SM), OM)) && (mM.current = OM, Lr(OM), !0))
          }), []),
          Ki = (0, SM.useCallback)((async () => {
            try {
              var MM, rM;
              const iM = await ja(pS.i);
              return !1 === iM.canSeeCode ? null : null !== (MM = iM.files) && void 0 !== MM ? MM : {
                [pS.i]: null !== (rM = iM.code) && void 0 !== rM ? rM : ""
              }
            } catch (iM) {
              return console.error("World Code AI: couldn't read World Code for a code block", iM), null
            }
          }), []),
          qi = (0, SM.useMemo)((() => ({
            [Tj.d]: zr
          })), [zr]),
          Ti = (0, SM.useCallback)(((MM, rM) => {
            hM.i.Tz("CodeEditorGoToLine", {
              path: Tj.d,
              line: rM
            })
          }), []);
        (0, SM.useEffect)((() => {
          Mr && OM && Qr(ar)
        }), [Mr, OM, ar]);
        const Vi = (0, SM.useCallback)((() => {
            var MM, rM;
            si();
            const iM = (0, WM.isTouchscreen)() ? "open World Code again" : `press ${null!==(MM=null===(rM=vr.v.OpenCodeEditor)||void 0===rM?void 0:rM[0])&&void 0!==MM?MM:"F8"}`,
              OM = LM ? `\ud83e\udd16 Try out your change, then ${iM} to tell the AI Helper how it went.` : "\ud83e\udd16 Click the code block to try your change, then open it again to tell the AI Helper how it went.";
            hM.i.Tz("chat", {
              content: [{
                str: OM,
                style: {
                  color: wM.L.cyanUiText
                }
              }]
            })
          }), [si, LM]),
          ci = (0, SM.useCallback)((MM => {
            const rM = JM,
              iM = lM.current;
            LM || !rM || QM.gameBridge.lookup("codeBlockClickable", rM) ? (0, Vj.l)(MM, {
              submit: () => {
                si(), hM.i.Tz("chat", {
                  content: [{
                    str: "\ud83e\udd16 Testing your change. The AI Helper comes back in a moment.",
                    style: {
                      color: wM.L.cyanUiText
                    }
                  }]
                }), !LM && rM && setTimeout((() => {
                  QM.gameBridge.send("clickCodeBlock", rM)
                }), 1e3)
              },
              reopen: () => {
                (0, NM.r)() || (LM ? hM.i.Tz("EditLobbyCode", rM) : hM.i.Tz("EditCodeBlock", {
                  pos: rM,
                  canChangePos: iM
                }))
              }
            }) : Vi()
          }), [si, LM, JM, Vi]),
          MO = (0, SM.useCallback)((() => {
            rr(!1)
          }), [rr]),
          rO = (0, SM.useRef)(Wi);
        rO.current = Wi;
        const iO = (0, SM.useCallback)((function(MM) {
            let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            hM.i.Tz("WorldCodeAiDraft", {
              text: MM,
              send: rM
            }), rO.current(), hM.i.Tz("EditLobbyCode", JM)
          }), [JM]),
          OO = (0, SM.useCallback)((MM => {
            rO.current(), MM.codeBlock ? hM.i.Tz("EditCodeBlock", {
              pos: [...MM.pos],
              canChangePos: MM.canChangePos
            }) : hM.i.Tz("EditLobbyCode", JM)
          }), [JM]);
        (0, bM.d)("WorldCodeAiDraft", (MM => {
          LM && (Or(MM), rr(!0))
        }));
        const SO = !!yr && !!Cr && Ej.j.includes(Cr),
          jO = !!yr && !!wr && Ej.d.includes(wr);
        (0, SM.useEffect)((() => {
          OM && Mr && dr && !SO && oM(!1)
        }), [OM, Mr, dr, SO]);
        const aO = (0, SM.useCallback)((() => {
            rr(!1), oM(!1)
          }), [rr]),
          {
            uL: PO,
            setWorld: nO,
            toggleWorld: QO
          } = function(MM) {
            let {
              showAi: rM,
              showDocs: iM,
              showChat: OM,
              hideOtherRightPanels: jM
            } = MM;
            const [aM, PM] = (0, SM.useState)("hidden"), nM = (0, SM.useRef)(null), QM = (0, SM.useCallback)((() => {
              nM.current = null, PM((MM => "hidden" === MM ? MM : (0, tj.i)() ? "hidden" : "shown"))
            }), []);
            (0, SM.useEffect)((() => {
              (rM || iM) && QM()
            }), [rM, iM, QM]), (0, SM.useEffect)((() => {
              OM && QM()
            }), [OM, QM]);
            const zM = "hidden" !== aM && (0, tj.i)();
            (0, SM.useLayoutEffect)((() => {
              if (zM) {
                const MM = document.activeElement;
                MM instanceof HTMLElement && MM.closest(".cm-content") && (nM.current = MM, MM.blur())
              } else {
                var MM;
                null === (MM = nM.current) || void 0 === MM || MM.focus(), nM.current = null
              }
            }), [zM]);
            const LM = (0, SM.useCallback)((() => {
              "hidden" === aM ? (PM("shown"), (0, tj.i)() && jM()) : PM("hidden")
            }), [aM, jM]);
            return {
              uL: aM,
              setWorld: PM,
              toggleWorld: LM
            }
          }({
            showAi: Mr,
            showDocs: ZM,
            showChat: fM,
            hideOtherRightPanels: aO
          }),
          zO = Mr && null !== hr && dr,
          LO = (0, SM.useCallback)((() => {
            Or(null)
          }), []),
          [mO, HO] = (0, SM.useState)(null);
        (0, bM.d)("WorldCodeAiSelection", (MM => {
          OM && (HO(MM), rr(!0), oM(!1))
        }));
        const hO = (0, SM.useCallback)((() => {
          HO(null)
        }), []);
        (0, bM.d)("chat", (MM => {
          let {
            content: rM
          } = MM;
          if (!LM && null === Hr.current) return;
          const iM = Array.isArray(rM) ? rM : [rM],
            OM = iM.some((MM => {
              var rM;
              return (null === MM || void 0 === MM || null === (rM = MM.style) || void 0 === rM ? void 0 : rM.color) === wM.L.redUiText
            })),
            SM = iM.map((MM => {
              var rM;
              const iM = null !== (rM = null === MM || void 0 === MM ? void 0 : MM.str) && void 0 !== rM ? rM : MM;
              return "string" === typeof iM ? iM : ""
            })).join("");
          OM && /world code|error/i.test(SM) && (jr((MM => [...MM, SM].slice(-10))), Pr((MM => MM + 1)), (0, Vj.f)(SM))
        })), (0, SM.useEffect)((() => {
          if (!OM || !LM || !Hi) return;
          let MM = !1;
          return (async (rM, iM) => {
            const OM = await (null === (rM = di.current) || void 0 === rM ? void 0 : rM.tryRestoreHandle());
            !MM && OM && (mi(!0), null === (iM = di.current) || void 0 === iM || iM.startWhenReady())
          })(), () => {
            MM = !0
          }
        }), [OM, LM, Hi]), (0, SM.useEffect)((() => {
          var MM;
          OM || (null === (MM = di.current) || void 0 === MM || MM.stopContinuousSync(), Gi(!1), gr.current && (gr.current = !1, QM.gameBridge.send("sendChatMessage", {
            Kz: "//export",
            channelName: null
          })))
        }), [OM, Gi]);
        const JO = (0, SM.useCallback)((async () => {
            if (Hi && di.current) try {
              if (!await di.current.linkFolder()) return;
              mi(!0), await di.current.startWhenReady()
            } catch (MM) {
              console.error("[WorldCodeDirectorySync] Link failed", MM), Ei({
                message: Ni("codeEditor:directorySyncError"),
                type: "warning"
              })
            }
          }), [Hi, Ni]),
          dO = (0, SM.useCallback)((async () => {
            di.current && await di.current.unlinkFolder()
          }), []),
          yO = (0, SM.useCallback)((() => {
            Hi ? Li ? dO() : JO() : jS.NotificationProvider.showAlertPopup({
              title: "codeEditor:directorySyncUnsupported",
              subtitle: "codeEditor:directorySyncUnsupportedBody",
              confirmText: "general:ok"
            })
          }), [Hi, Li, JO, dO]),
          lO = LM && "hidden" !== PO;
        return (0, zM.jsxs)(aM.e, {
          className: Ui()("CodeEditorBg", {
            CodeEditorLight: pM,
            WorldShown: "hidden" !== PO,
            WorldTouchControl: "touchControls" === VM
          }),
          close: Wi,
          escDoesExit: !0,
          show: OM,
          togglePointerLock: !1,
          globallyUniqueKey: LM ? "LobbyCodeEditor" : "CodeBlockEditor",
          children: [(0, zM.jsx)(lj.d, {
            tutorial: "welcome",
            step: "codeBlockIntro",
            text: Ni("codeEditor:tutorialCodeBlockIntro"),
            enabled: !!yr && !LM
          }), (0, zM.jsx)(lj.d, {
            tutorial: "welcome",
            step: "worldCodeIntro",
            text: (0, zM.jsxs)(zM.Fragment, {
              children: [(0, zM.jsx)("p", {
                children: Ni("codeEditor:tutorialWorldCodeWelcome")
              }), (0, zM.jsxs)("ul", {
                className: "TutorialStepList",
                children: [(0, zM.jsx)("li", {
                  children: Ni("codeEditor:tutorialWorldCodeUseSetUp")
                }), (0, zM.jsx)("li", {
                  children: Ni("codeEditor:tutorialWorldCodeUseReact")
                }), (0, zM.jsx)("li", {
                  children: Ni("codeEditor:tutorialWorldCodeUseRun")
                })]
              })]
            }),
            enabled: !!yr && LM
          }), (0, zM.jsx)("div", {
            className: "CodeEditorTitle",
            children: LM ? "World Code" : "Code Block"
          }), (0, zM.jsxs)("div", {
            className: "CodeEditorTopBar",
            children: [(0, zM.jsxs)("div", {
              className: "CodeEditorTopLeft",
              children: [(0, zM.jsx)(XM.i, {
                tooltipInner: Ni(lr ? "codeEditor:exportTooltip" : "codeEditor:exportOwnerOnly"),
                delayShow: lr ? void 0 : 0,
                hideTooltip: "exportButton" === Er,
                children: (0, zM.jsx)(lj.g, {
                  tutorial: "welcome",
                  step: "exportButton",
                  text: Ni("codeEditor:tutorialExport"),
                  enabled: !!yr,
                  children: (0, zM.jsx)(HM.p, {
                    className: "CodeEditorButton",
                    disabled: !lr,
                    onClick: () => {
                      "exportButton" === Er && ((0, Ej.h)("exportButton"), tr.current = !0), gr.current = !0, Wi()
                    },
                    padDestructive: !0,
                    children: Ni("codeEditor:exportWorld")
                  })
                })
              }), (0, zM.jsx)(Kj, {
                uL: PO,
                setWorld: nO,
                toggleWorld: QO,
                aiShown: zO,
                closeAi: MO
              })]
            }), (0, zM.jsxs)("div", {
              className: "CodeEditorTopRight",
              children: [yr && (0, zM.jsx)(XM.i, {
                tooltipInner: Ni("codeEditor:helpTooltip"),
                hideTooltip: "helpButton" === Er,
                children: (0, zM.jsx)(lj.g, {
                  tutorial: "welcome",
                  step: "helpButton",
                  text: Ni("codeEditor:tutorialHelpButton"),
                  placement: "bottom",
                  children: (0, zM.jsx)(HM.e, {
                    className: "CodeEditorHelpButton",
                    ariaLabel: Ni("codeEditor:helpTooltip"),
                    onClick: () => {
                      (0, Ej.h)("helpButton"), jS.NotificationProvider.showCustomPopup({
                        body: MM => (0, zM.jsx)(Uj, {
                          close: MM
                        }),
                        unlockPointerKey: "codeEditorTutorials"
                      })
                    },
                    children: (0, zM.jsx)("div", {
                      className: "CodeEditorHelpButtonInner",
                      children: (0, zM.jsx)(dM.b, {
                        name: "circle-question"
                      })
                    })
                  })
                })
              }), (0, zM.jsx)(XM.i, {
                tooltipInner: Ni("codeEditor:closeTooltip"),
                children: (0, zM.jsx)("div", {
                  className: "CodeEditorCloseButtonClickZone",
                  onClick: () => {
                    Wi()
                  },
                  children: (0, zM.jsx)(HM.l, {
                    className: "CodeEditorCloseButton"
                  })
                })
              })]
            })]
          }), (0, zM.jsx)(ZS, {
            peers: null !== (rM = null === fr || void 0 === fr ? void 0 : fr.peers) && void 0 !== rM ? rM : []
          }), (0, zM.jsxs)("div", {
            className: Ui()("CodeEditorMainArea", {
              WorldCovers: "always" === gj(PO),
              WorldCoversWhenNarrow: "narrow" === gj(PO)
            }),
            children: [fM && FM && (0, zM.jsx)(tj.e, {
              side: "left",
              defaultSize: "max(16rem, 24%)",
              onClose: () => {
                AM(!1)
              },
              children: (0, zM.jsx)(wj, {
                inputRef: xM
              })
            }), LM && (0, zM.jsx)(vS, {
              schematics: Fr.assets,
              onManageSchematic: MM => {
                yr && jS.NotificationProvider.showCustomPopup({
                  body: rM => (0, zM.jsx)(zj, {
                    initialPath: MM,
                    onChanged: Ir,
                    onClose: rM
                  }),
                  unlockPointerKey: "worldCodeSchematics"
                })
              },
              files: Nr,
              activePath: Kr,
              canEdit: !!yr,
              directoryLinked: Li,
              pluginNames: null !== Bi && void 0 !== Bi ? Bi : Pa,
              activePluginName: Tr,
              activePluginFile: cr,
              onSelect: ti,
              onSelectPlugin: gi,
              onToggleDirectorySync: yO,
              onCreate: MM => {
                Qi.current = MM, QM.gameBridge.send("sendCodeCollab", {
                  hM: WS.c.CreateFile,
                  JM: (0, WS.z)({
                    kind: "lobby",
                    path: Oi.current
                  }),
                  MQ: MM
                })
              },
              onRename: (MM, rM) => {
                Oi.current === MM && (zi.current = {
                  fromPath: MM,
                  toPath: rM
                }, qr(rM)), QM.gameBridge.send("sendCodeCollab", {
                  hM: WS.c.RenameFile,
                  JM: (0, WS.z)({
                    kind: "lobby",
                    path: Oi.current
                  }),
                  MQ: MM,
                  rQ: rM
                })
              },
              onRenameFolder: (MM, rM) => {
                const [iM] = (0, sS.o)([Oi.current], MM, rM);
                iM && (zi.current = {
                  fromPath: iM[0],
                  toPath: iM[1]
                }, qr(iM[1])), QM.gameBridge.send("sendCodeCollab", {
                  hM: WS.c.RenameFolder,
                  JM: (0, WS.z)({
                    kind: "lobby",
                    path: Oi.current
                  }),
                  MQ: MM,
                  rQ: rM
                })
              },
              onDelete: wi
            }), (0, zM.jsx)("div", {
              className: Ui()("CodeEditorMessage", {
                CodeEditorMessageHidden: !eM.message,
                CodeEditorMessageSuccess: "success" === eM.type
              }),
              children: eM.message && (0, zM.jsx)("div", {
                className: "CodeEditorMessageText",
                children: eM.message
              })
            }), (0, zM.jsx)(SM.Suspense, {
              fallback: (0, zM.jsx)("div", {
                className: "CodeEditorContent",
                children: (0, zM.jsx)(gM.d, {})
              }),
              children: (0, zM.jsx)(Ma, {
                isLobbyCode: LM,
                code: fr ? fr.doc : mM.current,
                files: LM ? Nr : void 0,
                activePath: LM ? Kr : void 0,
                pluginName: Tr,
                pluginFile: cr,
                pluginSource: Tr && cr ? null === (iM = fS.i[Tr]) || void 0 === iM ? void 0 : iM.files[cr] : void 0,
                onChange: Zi,
                canEditCode: yr,
                setTemporaryMessage: Ei,
                close: Wi,
                showTooltips: uM,
                lightMode: pM,
                collabState: fr,
                setActiveDocReplacer: Fi,
                showAiHints: dr && DM,
                canAiChangeCode: !!yr && (LM || !!lM.current),
                onRemoteDocChange: MM => {
                  var rM;
                  (mM.current = MM, LM) ? (xr((rM => ({
                    ...rM,
                    [Oi.current]: MM
                  }))), null === (rM = di.current) || void 0 === rM || rM.onDocTextChanged(Oi.current, MM)) : Lr(MM)
                }
              })
            }), (ZM || zO || "hidden" !== PO) && (0, zM.jsxs)(uj, {
              uL: PO,
              worldPanel: (0, zM.jsx)(Xj, {
                shown: PO,
                setShown: nO,
                canInsertCode: !!yr && !Tr
              }),
              closeWorld: () => {
                nO("hidden")
              },
              aiShown: zO,
              defaultWidth: ZM ? "40%" : "max(18rem, 36%)",
              children: [ZM && (0, zM.jsx)(tj.e, {
                onClose: SO ? void 0 : fi,
                children: (0, zM.jsx)(SM.Suspense, {
                  fallback: (0, zM.jsx)("div", {
                    className: "DocsPanel",
                    children: (0, zM.jsx)(gM.d, {})
                  }),
                  children: (0, zM.jsx)(ra, {
                    popOutDocs: oi,
                    hideDocs: fi,
                    tutorialEnabled: !!yr
                  })
                })
              }), zO && (0, zM.jsx)(tj.e, {
                onClose: jO ? void 0 : MO,
                children: (0, zM.jsx)(SM.Suspense, {
                  fallback: (0, zM.jsx)("div", {
                    className: "CodeEditorPanelLoading",
                    children: (0, zM.jsx)(gM.d, {})
                  }),
                  children: (0, zM.jsx)(ia, {
                    target: hr,
                    chatKey: `${Zr.gameNameWithVariation}/${Zr.lobbyName}/aiHelper`,
                    historyKey: `${Zr.gameNameWithVariation}/${Zr.lobbyName}/${hr.key}`,
                    files: hr.codeBlock ? qi : Nr,
                    activePath: hr.codeBlock ? Tj.d : Kr,
                    canEdit: !!yr && (hr.codeBlock ? !!lM.current : !Tr),
                    isLoaded: null !== fr,
                    errors: Sr,
                    errorCount: ar,
                    applyFiles: hr.codeBlock ? Ii : Xi,
                    submit: Vi,
                    testRun: ci,
                    close: MO,
                    goToLine: hr.codeBlock ? Ti : vi,
                    openWorldCode: hr.codeBlock ? iO : void 0,
                    readWorldCode: hr.codeBlock ? Ki : void 0,
                    viewChunk: Oa,
                    viewGameState: Sa,
                    openTarget: yr ? OO : void 0,
                    draft: ir,
                    onDraftUsed: LO,
                    selection: mO,
                    onSelectionUsed: hO
                  }, hr.key)
                })
              })]
            })]
          }), (null === ji || void 0 === ji ? void 0 : ji.fallback) && (0, zM.jsx)(mj, {
            fallback: ji.fallback,
            onGoToLine: vi
          }), (0, zM.jsxs)("div", {
            className: "CodeEditorButtons",
            "data-pad-hint-bar-avoid": !0,
            children: [(0, zM.jsx)(XM.i, {
              tooltipInner: Ni(pM ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
              placement: "top",
              children: (0, zM.jsx)(HM.e, {
                className: "CodeEditorButton CodeEditorThemeButton",
                ariaLabel: Ni(pM ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
                onClick: () => {
                  sM(!pM)
                },
                children: (0, zM.jsx)(dM.b, {
                  name: pM ? "moon" : "sun-bright"
                })
              })
            }), (0, zM.jsx)(XM.i, {
              tooltipInner: Ni(lO ? "codeEditorWorld:submitCodeTooltip" : "codeEditor:submitCodeTooltip"),
              placement: "top",
              children: (0, zM.jsx)(HM.p, {
                className: "CodeEditorButton",
                onClick: () => {
                  si(lO)
                },
                padDefaultFocus: !0,
                children: Ni("codeEditor:submitCode")
              })
            }), (0, zM.jsx)(XM.i, {
              tooltipInner: Ni(ZM ? "codeEditor:hideDocsTooltip" : "codeEditor:showDocsTooltip"),
              placement: "top",
              hideTooltip: "docsButton" === Cr || "hideDocsButton" === Cr,
              children: (0, zM.jsx)(lj.g, {
                tutorial: Gr,
                step: ZM ? "hideDocsButton" : "docsButton",
                text: Ni(ZM ? "codeEditor:tutorialHideDocs" : "codeEditor:tutorialDocs"),
                enabled: !!yr,
                placement: "top",
                waitForClick: !0,
                onPrevious: ZM && "welcome" === Gr ? fi : void 0,
                children: (0, zM.jsx)(HM.A, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    (0, Ej.h)(ZM ? "hideDocsButton" : "docsButton"), oM(!ZM), rr(!1)
                  },
                  children: Ni(ZM ? "codeEditor:hideDocs" : "codeEditor:showDocs")
                })
              })
            }), dr && (0, zM.jsx)(lj.g, {
              tutorial: br,
              step: Mr ? "hideAiHelperButton" : "aiHelperButton",
              text: Ni(Mr ? "codeEditorAiTutorial:hideAiHelperButton" : "welcome" === br ? "codeEditorAiTutorial:welcomeAiHelperButton" : "codeEditorAiTutorial:aiHelperButton"),
              enabled: !!yr,
              placement: "top",
              waitForClick: !0,
              onPrevious: Mr && "welcome" === br ? Yi : void 0,
              children: (0, zM.jsx)(xi, {
                className: "CodeEditorButton",
                onClick: () => {
                  (0, Ej.h)(Mr ? "hideAiHelperButton" : "aiHelperButton"), rr(!Mr), oM(!1)
                },
                children: Mr ? "Hide AI Helper" : Ai ? "Fix error with AI" : "AI Helper"
              })
            }), FM && (0, zM.jsx)(XM.i, {
              tooltipInner: Ni(fM ? "codeEditorChat:hideChatTooltip" : "codeEditorChat:showChatTooltip"),
              placement: "top",
              children: (0, zM.jsx)(HM.A, {
                className: "CodeEditorButton",
                onClick: () => {
                  vM.current = !fM, AM(!fM)
                },
                children: Ni(fM ? "codeEditorChat:hideChat" : "codeEditorChat:showChat")
              })
            }), (0, zM.jsx)(XM.i, {
              tooltipInner: Ni("hidden" === PO ? "codeEditorWorld:showWorldTooltip" : "codeEditorWorld:hideWorldTooltip"),
              placement: "top",
              children: (0, zM.jsx)(HM.A, {
                className: "CodeEditorButton CodeEditorWorldButton",
                onClick: QO,
                children: Ni("hidden" === PO ? "codeEditorWorld:showWorld" : "codeEditorWorld:hideWorld")
              })
            }), (0, zM.jsx)(XM.i, {
              tooltipInner: Ni("codeEditor:formatCodeTooltip"),
              placement: "top",
              children: (0, zM.jsx)(HM.e, {
                className: "CodeEditorButton",
                onClick: () => {
                  hM.i.Tz("FormatCode")
                },
                children: Ni("codeEditor:formatCode")
              })
            }), (0, zM.jsx)(XM.i, {
              tooltipInner: Ni("codeEditor:copyCodeTooltip"),
              placement: "top",
              children: (0, zM.jsx)(HM.e, {
                className: "CodeEditorButton",
                onClick: () => {
                  navigator.clipboard.writeText(mM.current).then((() => {
                    Ei({
                      message: "Successfully copied code to clipboard",
                      type: "success"
                    })
                  })).catch((() => {
                    Ei({
                      message: "Failed to copy code to clipboard",
                      type: "warning"
                    })
                  }))
                },
                children: Ni("codeEditor:copyCode")
              })
            }), (0, zM.jsx)(XM.i, {
              tooltipInner: Ni(uM ? "codeEditor:hideTooltipsTooltip" : "codeEditor:showTooltipsTooltip"),
              placement: "top",
              children: (0, zM.jsx)(HM.e, {
                className: "CodeEditorButton",
                onClick: () => {
                  RM(!uM)
                },
                children: Ni(uM ? "codeEditor:hideTooltips" : "codeEditor:showTooltips")
              })
            }), !LM && (0, zM.jsx)(XM.i, {
              tooltipInner: Ni("codeEditor:worldCodeTooltip"),
              placement: "top",
              hideTooltip: "worldCodeButton" === Er,
              children: (0, zM.jsx)(lj.g, {
                tutorial: "welcome",
                step: "worldCodeButton",
                text: Ni("codeEditor:tutorialWorldCodeButton"),
                enabled: !!yr,
                placement: "top",
                waitForClick: !0,
                children: (0, zM.jsx)(HM.A, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    "worldCodeButton" === Er && ((0, Ej.h)("worldCodeButton"), tr.current = !0), Wi(), hM.i.Tz("EditLobbyCode", JM)
                  },
                  children: Ni("codeEditor:worldCode")
                })
              })
            }), (or || ai || dr) && (0, zM.jsx)(XM.i, {
              tooltipInner: Ni("codeEditor:moreOptionsTooltip"),
              placement: "top",
              children: (0, zM.jsx)(HM.e, {
                className: "CodeEditorButton CodeEditorMoreButton",
                onClick: () => {
                  sr(!0)
                },
                children: (0, zM.jsx)(dM.b, {
                  name: "ellipsis"
                })
              })
            })]
          }), Wr && (0, zM.jsx)(PS.d, {
            middleScreenPopupContainerClassName: "CodeEditorMoreOptionsPopup",
            close: () => {
              sr(!1)
            },
            body: (0, zM.jsx)(yj, {
              engine: ai,
              onSetEngine: ki,
              aiHints: dr ? {
                shown: DM,
                setShown: kM
              } : null,
              variation: or ? {
                name: Rr,
                setName: pr,
                reload: Di
              } : null
            })
          })]
        })
      }));
    var za = iM(37542);
    const La = new Set(["inventory", "ironChestPasskeyInput"]);
    const ma = new Set(["makeReport", "makeDiscordReport", "inviteLink"]);

    function Ha(MM) {
      return "inventory" === MM
    }
    const ha = (0, SM.memo)((function() {
      const {
        openEverythingMenuName: MM,
        openInGameMenuName: rM
      } = (0, YM.m)(["openEverythingMenuName", "openInGameMenuName"]), iM = (0, tM.j)("fullInventory"), jM = (0, SM.useRef)(null), aM = (0, Rr.h)();
      (0, bM.d)("toggleMenu", (MM => {
        var rM;
        if (!aM.shown) return;
        const iM = YM.d.get("openInGameMenuName");
        let OM = MM.split("|")[0];
        const SM = null !== (rM = MM.split("|")[1]) && void 0 !== rM ? rM : null;
        if (("closeCurrentMenu" === SM && iM || OM === iM) && (jM.current = null, OM = null), null !== OM && (PM = !QM.gameBridge.latest("localPlayerAlive"), nM = OM, PM && La.has(nM))) return void(null !== QM.gameBridge.latest("inventory").chest && QM.gameBridge.send("closeChest", null));
        var PM, nM;
        const zM = "closeCurrentMenu" === SM ? null : SM;
        jM.current !== zM && (jM.current = zM), null !== OM && (0, yS.z)(yS.e, {
          keepsMovement: Ha(OM)
        }), YM.d.set({
          openInGameMenuName: OM
        })
      })), (0, tM.c)("localPlayerAliveSet", (MM => {
        MM || function() {
          (0, za.g)();
          const MM = YM.d.get("openInGameMenuName");
          null !== MM && La.has(MM) && YM.d.set({
            openInGameMenuName: null
          })
        }()
      }));
      const PM = (0, SM.useCallback)((MM => () => {
          hM.i.Tz("toggleMenu", MM)
        }), []),
        nM = (0, SM.useRef)({
          cantCrouchIfNotFullscreen: PM("cantCrouchIfNotFullscreen"),
          makeReport: PM("makeReport"),
          makeDiscordReport: PM("makeDiscordReport"),
          editBook: PM("editBook"),
          editNameTag: PM("editNameTag"),
          inventory: PM("inventory"),
          inviteLink: PM("inviteLink"),
          writeOnBoard: PM("writeOnBoard"),
          codeEditor: PM("codeEditor"),
          lobbyCodeEditor: PM("lobbyCodeEditor"),
          customLobbyBlockEditor: PM("customLobbyBlockEditor"),
          ironChestPasskeyInput: PM("ironChestPasskeyInput"),
          petUi: PM("petUi")
        }),
        LM = (0, SM.useCallback)((() => {
          YM.d.set({
            openInGameMenuName: null
          })
        }), []),
        mM = (0, SM.useRef)(null);
      return (0, SM.useEffect)((() => {
        if (rM) {
          var MM;
          (0, yS.z)(yS.e, {
            keepsMovement: Ha(rM)
          }), mM.current = ma.has(rM) ? null !== (MM = YM.d.get("openEverythingMenuName")) && void 0 !== MM ? MM : mM.current : null, YM.d.set({
            openEverythingMenuName: null
          })
        } else {
          const MM = mM.current;
          mM.current = null, null !== MM && null === YM.d.get("openEverythingMenuName") && YM.d.set({
            openEverythingMenuName: MM
          }), jM.current = null, (0, yS.v)(yS.e)
        }
      }), [rM]), (0, SM.useEffect)((() => {
        null !== MM && LM()
      }), [MM, LM]), (0, zM.jsxs)(zM.Fragment, {
        children: [(0, zM.jsx)(OM.m, {
          show: "clientGame" === rM
        }), (0, zM.jsx)(iS, {
          show: "cantCrouchIfNotFullscreen" === rM,
          onOpen: nM.current.cantCrouchIfNotFullscreen,
          onClose: LM
        }), (0, zM.jsx)(mS, {
          show: "makeReport" === rM,
          onOpen: nM.current.makeReport,
          onClose: LM
        }), (0, zM.jsx)(dS, {
          show: "makeDiscordReport" === rM,
          onOpen: nM.current.makeDiscordReport,
          onClose: LM
        }), (0, zM.jsx)(ri, {
          show: "editBook" === rM,
          onOpen: nM.current.editBook,
          onClose: LM
        }), (0, zM.jsx)(cr, {
          show: "editNameTag" === rM,
          onOpen: nM.current.editNameTag,
          onClose: LM
        }), iM && (0, zM.jsx)(cO, {
          show: "inventory" === rM,
          onOpen: nM.current.inventory,
          onClose: LM,
          variation: jM.current
        }), (0, zM.jsx)(pr, {
          show: "inviteLink" === rM,
          onClose: LM,
          option: jM.current
        }), (0, zM.jsx)(kM, {
          show: "retentionFeatures" === rM,
          onClose: LM
        }), (0, zM.jsx)(Vr, {
          show: "writeOnBoard" === rM,
          onOpen: nM.current.writeOnBoard,
          onClose: LM
        }), (0, zM.jsx)(Qa, {
          show: "lobbyCodeEditor" === rM,
          onOpen: nM.current.lobbyCodeEditor,
          onClose: LM,
          isLobbyCode: !0
        }), (0, zM.jsx)(Qa, {
          show: "codeEditor" === rM,
          onOpen: nM.current.codeEditor,
          onClose: LM,
          isLobbyCode: !1
        }), (0, zM.jsx)(ES, {
          show: "customLobbyBlockEditor" === rM,
          onOpen: nM.current.customLobbyBlockEditor,
          onClose: LM
        }), (0, zM.jsx)(Ci, {
          show: "ironChestPasskeyInput" === rM,
          onOpen: nM.current.ironChestPasskeyInput,
          onClose: LM
        }), (0, zM.jsx)(wS, {
          togglePointerLock: !0,
          show: "petUi" === rM,
          onOpen: nM.current.petUi,
          onClose: LM
        })]
      })
    }))
  },
  37442: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => Fa
    });
    iM(37451);
    var OM = iM(1911),
      SM = iM(44),
      jM = iM(1116),
      aM = iM.n(jM),
      PM = iM(4110),
      nM = iM(1516),
      QM = iM(2006),
      zM = iM(1303);

    function LM() {
      const MM = 2e3,
        [rM, iM] = (0, SM.useState)(null),
        [OM, jM] = (0, SM.useState)(null),
        LM = (0, SM.useRef)(null);
      (0, nM.d)("showBottomMessage", (rM => {
        let {
          message: iM,
          timeoutLength: OM = MM,
          type: SM
        } = rM;
        jM({
          message: iM,
          type: SM
        }), clearTimeout(LM.current), LM.current = setTimeout((() => {
          jM(null)
        }), OM)
      })), (0, nM.d)("showPermanentBottomMessage", (MM => {
        iM(MM)
      })), (0, SM.useEffect)((() => ((0, PM.c)((() => {
        iM(null)
      })), () => {
        clearTimeout(LM.current)
      })), []);
      const mM = OM || rM;
      return mM ? (0, zM.jsx)("div", {
        className: aM()("BottomScreenMessage", mM.type),
        children: (0, zM.jsx)(QM.b, {
          text: mM.message
        })
      }) : null
    }
    var mM = iM(2474),
      HM = iM(22),
      hM = iM(2039),
      JM = iM(1591),
      dM = iM(2645);

    function yM() {
      let MM;
      const rM = () => {
          clearTimeout(MM), MM = setTimeout((() => {
            hM.gameBridge.latest("connectedGame").replay || (HM.i.Tz("kickedForAfk"), hM.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, JM.navigatePreserveSearch)("/"))
          }), 3e5)
        },
        iM = () => {
          clearTimeout(MM)
        };
      return window.addEventListener("focus", iM), window.addEventListener("blur", rM), () => {
        window.removeEventListener("blur", rM), window.removeEventListener("focus", iM), clearTimeout(MM)
      }
    }
    var lM = iM(1142),
      EM = iM(37454),
      UM = iM(2640),
      GM = iM(1440),
      CM = iM(3508),
      eM = iM(1398);
    const bM = (0, SM.memo)((function() {
      return (0, CM.d)(), (0, zM.jsx)(wM, {})
    }));
    class wM extends SM.Component {
      constructor(MM) {
        super(MM), this.showQueue = [], this.slideDuration = 1, this.state = {
          showQueue: [],
          currState: null
        }, this.currMessage = null, this.justShowed = !1
      }
      componentDidMount() {
        this.sub = HM.i.subscribe("TopRightHelper", (MM => {
          this.showQueue.push(MM), this.setState({
            showQueue: this.showQueue
          })
        }))
      }
      componentWillUnmount() {
        HM.i.unsubscribe(this.sub), clearTimeout(this.slideOutTimeout), clearTimeout(this.hidingMessageTimeout)
      }
      componentDidUpdate(MM, rM) {
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
        let MM, rM, iM, OM, SM, jM = !0;
        if (this.state.showQueue.length > 0 && null === this.state.currState ? (this.currMessage = this.state.showQueue[0], this.justShowed = !0, MM = "slideIn") : "slideOut" === this.state.currState ? MM = "slideOut" : null === this.currMessage && (jM = !1), this.currMessage) {
          const jM = this.currMessage.color || "rgb(102, 102, 102)";
          rM = {
            width: this.currMessage.width || "250px",
            height: this.currMessage.height || "70px",
            animation: "1s " + ("slideOut" === MM ? "HelperSlideKeyFrameReverse" : "HelperSlideKeyFrame")
          }, iM = {
            backgroundColor: jM
          }, OM = {
            animation: "2s " + ("slideOut" === MM ? "CloseNotification" : "ExpandNotification")
          }, SM = {
            fontSize: this.currMessage.fontSize || "16px",
            animation: "2s " + ("slideOut" === MM ? "textDisappear" : "textAppear")
          }
        }
        return jM ? (0, zM.jsxs)("div", {
          className: "TopRightHelperBox",
          style: {
            ...rM
          },
          children: [(0, zM.jsx)("div", {
            className: "LeftSide",
            style: iM,
            children: (0, zM.jsx)(eM.b, {
              name: this.currMessage.icon,
              className: `fa-${this.currMessage.iconSizeMult||3}x HelperIcon`
            })
          }), (0, zM.jsx)("div", {
            className: "RightSide",
            style: OM,
            children: (0, zM.jsx)("div", {
              className: "HelperText",
              style: SM,
              children: this.currMessage.text
            })
          })]
        }) : null
      }
    }
    var tM = iM(37460),
      gM = iM(1474);
    const uM = (0, gM.g)((MM => MM.PadSneakChip));

    function RM(MM) {
      const [rM, iM, OM] = function(MM) {
        const rM = parseInt(MM.substring(1), 16),
          iM = (rM >> 16) / 255,
          OM = (rM >> 8 & 255) / 255,
          SM = (255 & rM) / 255,
          jM = Math.max(iM, OM, SM),
          aM = Math.min(iM, OM, SM),
          PM = (jM + aM) / 2,
          nM = jM - aM;
        if (0 === nM) return [0, 0, PM];
        const QM = nM / (1 - Math.abs(2 * PM - 1));
        let zM;
        zM = jM === iM ? (OM - SM) / nM % 6 : jM === OM ? (SM - iM) / nM + 2 : (iM - OM) / nM + 4;
        return [(60 * zM + 360) % 360, QM, PM]
      }(MM), SM = 0 === iM ? 0 : Math.min(.6, iM + .03), jM = OM > .5 ? -1 : 1, aM = pM(OM + .09 * jM);
      return {
        panel: MM,
        slot: WM(rM, SM, aM),
        slotSelected: WM(rM, SM, pM(aM + .2 * jM)),
        slotUnavailable: WM(rM, SM, pM(OM + -.1 * jM))
      }
    }

    function pM(MM) {
      return Math.min(1, Math.max(0, MM))
    }

    function WM(MM, rM, iM) {
      const OM = (1 - Math.abs(2 * iM - 1)) * rM,
        SM = OM * (1 - Math.abs(MM / 60 % 2 - 1)),
        jM = iM - OM / 2;
      let aM;
      return aM = MM < 60 ? [OM, SM, 0] : MM < 120 ? [SM, OM, 0] : MM < 180 ? [0, OM, SM] : MM < 240 ? [0, SM, OM] : MM < 300 ? [SM, 0, OM] : [OM, 0, SM], "#" + aM.map((MM => function(MM) {
        return Math.round(255 * MM).toString(16).padStart(2, "0")
      }(MM + jM))).join("")
    }
    var sM = iM(37482),
      DM = iM(19),
      kM = iM(2084),
      ZM = iM(4613),
      oM = iM(1464),
      fM = iM(2619),
      YM = iM(2622),
      NM = iM(37524),
      AM = iM(5214),
      xM = iM(1533),
      vM = iM(1188),
      FM = iM(625);

    function BM(MM, rM, iM, OM) {
      MM.style.display = "";
      const SM = MM.offsetWidth,
        jM = MM.offsetHeight,
        aM = Math.min(Math.max((rM.left + rM.right) / 2 - SM / 2, 8), window.innerWidth - 8 - SM);
      let PM = rM.top - iM - jM;
      const nM = [...OM].sort(((MM, rM) => rM.top - MM.top));
      for (const QM of nM) aM < QM.right && aM + SM > QM.left && PM < QM.bottom && PM + jM > QM.top && (PM = QM.top - 8 - jM);
      return PM < 8 ? (MM.style.display = "none", null) : (MM.style.transform = `translate(${aM-rM.left}px, ${PM-rM.top}px)`, {
        left: aM,
        top: PM,
        right: aM + SM,
        bottom: PM + jM
      })
    }

    function XM(MM) {
      const rM = [];
      for (const iM of document.querySelectorAll(MM)) {
        const MM = iM.getBoundingClientRect();
        MM.width > 0 && "visible" === getComputedStyle(iM).visibility && rM.push(MM)
      }
      return rM
    }

    function IM(MM, rM) {
      return MM.clientX >= rM.left - 8 && MM.clientX <= rM.right + 8 && MM.clientY >= rM.top - 8 && MM.clientY <= rM.bottom + 8
    }
    var KM = iM(9467);
    class qM {
      constructor(MM) {
        this.deps = MM, this.phase = "idle", this.armTimer = null, this.suspended = !1
      }
      get locked() {
        return "locked" === this.phase
      }
      get offered() {
        return "armed" === this.phase || "ready" === this.phase
      }
      target(MM) {
        MM && "armed" === this.phase ? this.setPhase("ready") : MM || "ready" !== this.phase || this.setPhase("armed")
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
      hold(MM, rM) {
        this.suspended || (this.offered ? rM || this.setPhase("idle") : MM && "idle" === this.phase ? (this.setPhase("charging"), this.armTimer = setTimeout((() => {
          this.armTimer = null, this.onArm(), this.setPhase("armed")
        }), 1e3)) : MM || "charging" !== this.phase || this.setPhase("idle"))
      }
      onArm() {}
      setPhase(MM) {
        null !== this.armTimer && (clearTimeout(this.armTimer), this.armTimer = null);
        const rM = this.phase;
        this.phase = MM, this.deps.onPhase(MM, rM)
      }
    }
    const TM = 25 * Math.PI / 180,
      VM = 45 * Math.PI / 180;
    class cM extends qM {
      constructor() {
        super(...arguments), this.speed = 0, this.armedSpeed = 0
      }
      get lockedSpeed() {
        return this.armedSpeed
      }
      move(MM, rM, iM) {
        this.speed = iM;
        const OM = Math.hypot(MM, rM),
          SM = OM > 0 ? Math.acos(Math.min(1, -rM / OM)) : Math.PI;
        this.hold(OM >= .8 && SM <= TM, OM >= .5 && SM <= VM)
      }
      onArm() {
        this.armedSpeed = this.speed
      }
    }
    var Mr = iM(1313);

    function rr(MM, rM) {
      const iM = (0, SM.useRef)(null),
        OM = (0, SM.useRef)(rM);
      return OM.current = rM, (0, SM.useEffect)((() => {
        if (!MM) return;
        const {
          create: rM,
          elementRef: SM,
          ringRef: jM,
          classPrefix: aM,
          keptBehindMovementPanels: PM,
          resizeEnds: nM
        } = OM.current, QM = {
          charging: `${aM}Charging`,
          armed: `${aM}Armed`,
          ready: `${aM}Ready`,
          locked: `${aM}Locked`
        };
        let zM = null;
        const LM = rM({
          onPhase: (MM, rM) => {
            const iM = SM.current;
            if (null !== iM) {
              for (const [rM, OM] of Object.entries(QM)) iM.classList.toggle(OM, rM === MM);
              if ("charging" === MM) zM = jM.current.animate([{
                strokeDashoffset: 1
              }, {
                strokeDashoffset: 0
              }], {
                delay: 400,
                duration: 600,
                fill: "forwards"
              });
              else if ("idle" === MM) {
                var aM;
                null === (aM = zM) || void 0 === aM || aM.cancel(), zM = null
              }
              var PM, nM;
              if ("armed" === MM && "charging" === rM && OM.current.onArmed(), "ready" === MM && KM.e.play("lockReady"), "locked" === MM) KM.e.play("lockLocked"), null === (PM = (nM = OM.current).onLocked) || void 0 === PM || PM.call(nM);
              "locked" === rM && OM.current.onUnlocked()
            }
          }
        });
        iM.current = LM;
        const mM = () => {
            LM.suspend()
          },
          HM = () => {
            "hidden" === document.visibilityState && mM()
          },
          hM = () => {
            nM ? LM.suspend() : LM.suspendArming()
          },
          JM = (0, Mr.r)((MM => {
            let {
              keepsMovement: rM
            } = MM;
            rM && PM ? LM.suspendArming() : mM()
          }));
        return document.addEventListener("visibilitychange", HM), window.addEventListener("blur", mM), window.addEventListener("resize", hM), () => {
          JM(), document.removeEventListener("visibilitychange", HM), window.removeEventListener("blur", mM), window.removeEventListener("resize", hM), LM.cancel(), iM.current = null
        }
      }), [MM]), (0, kM.c)("localPlayerAliveSet", (() => {
        var MM;
        null === (MM = iM.current) || void 0 === MM || MM.suspend()
      })), iM
    }
    const ir = "data-joystick-tap";

    function Or(MM) {
      var rM, iM;
      const OM = null === (rM = (iM = MM).closest) || void 0 === rM ? void 0 : rM.call(iM, `[${ir}]`);
      return OM instanceof HTMLElement ? OM : null
    }
    class Sr {
      constructor() {
        this.tap = null
      }
      get touchId() {
        var MM, rM;
        return null !== (MM = null === (rM = this.tap) || void 0 === rM ? void 0 : rM.id) && void 0 !== MM ? MM : null
      }
      land(MM, rM) {
        null === this.tap && (this.tap = {
          key: MM,
          id: rM.identifier,
          x: rM.clientX,
          y: rM.clientY
        }, (0, xM.e)(MM, !0))
      }
      slidFrom(MM) {
        const rM = this.tap,
          iM = rM ? MM.find((MM => MM.identifier === rM.id)) : void 0;
        return !iM || Math.hypot(iM.clientX - rM.x, iM.clientY - rM.y) <= 12 ? null : (this.end(!1), {
          identifier: rM.id,
          clientX: rM.x,
          clientY: rM.y
        })
      }
      end(MM) {
        const rM = this.tap;
        rM && (this.tap = null, (0, xM.e)(rM.key, !1), MM && rM.key.click())
      }
    }
    var jr = iM(2666),
      ar = iM(2677),
      Pr = iM(1130),
      nr = iM(3815),
      Qr = iM(2690);

    function zr(MM, rM, iM) {
      const OM = function(MM, rM, iM) {
        const OM = iM.map((iM => ({
            left: Math.max(0, iM.left),
            top: Math.max(0, iM.top),
            right: Math.min(MM, iM.right),
            bottom: Math.min(rM, iM.bottom)
          }))).filter((MM => MM.right > MM.left && MM.bottom > MM.top)),
          SM = [...new Set([0, rM, ...OM.flatMap((MM => [MM.top, MM.bottom]))])].sort(((MM, rM) => MM - rM)),
          jM = [];
        for (let aM = 0; aM < SM.length - 1; aM++) {
          const rM = SM[aM],
            iM = SM[aM + 1],
            PM = OM.filter((MM => MM.top <= rM && MM.bottom >= iM)).map((MM => [MM.left, MM.right])).sort(((MM, rM) => MM[0] - rM[0]));
          let nM = 0;
          for (const [MM, OM] of PM) MM > nM && jM.push({
            left: nM,
            top: rM,
            right: MM,
            bottom: iM
          }), nM = Math.max(nM, OM);
          nM < MM && jM.push({
            left: nM,
            top: rM,
            right: MM,
            bottom: iM
          })
        }
        return jM
      }(MM, rM, iM);
      if (0 === OM.length) return 'path("M0 0Z")';
      if (1 === OM.length && 0 === OM[0].left && 0 === OM[0].top && OM[0].right === MM && OM[0].bottom === rM) return "";
      const SM = MM => Math.round(10 * MM) / 10;
      return `path("${OM.map((MM=>`M${SM(MM.left)} ${SM(MM.top)}H${SM(MM.right)}V${SM(MM.bottom)}H${SM(MM.left)}Z`)).join("")}")`
    }

    function Lr(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16;
      const SM = [],
        jM = 2 * iM / OM;
      for (let aM = 0; aM < OM; aM++) {
        const OM = rM - iM + aM * jM,
          PM = OM + jM,
          nM = Math.min(Math.max(rM, OM), PM) - rM,
          QM = Math.sqrt(Math.max(0, iM * iM - nM * nM));
        SM.push({
          left: MM - QM,
          top: OM,
          right: MM + QM,
          bottom: PM
        })
      }
      return SM
    }
    var mr = iM(9484),
      Hr = iM(37501);

    function hr(MM) {
      const rM = MM.getBoundingClientRect(),
        iM = {
          left: rM.left,
          top: rM.top,
          right: rM.right,
          bottom: rM.bottom
        },
        OM = (0, NM.g)(MM);
      if (OM.whole) return [iM];
      const SM = function(MM) {
          const rM = MM.right - MM.left,
            iM = MM.bottom - MM.top,
            OM = Math.min(rM, iM) / 2,
            SM = (MM.left + MM.right) / 2,
            jM = (MM.top + MM.bottom) / 2;
          return rM >= iM ? [{
            left: MM.left + OM,
            top: MM.top,
            right: MM.right - OM,
            bottom: MM.bottom
          }, ...Lr(MM.left + OM, jM, OM), ...Lr(MM.right - OM, jM, OM)] : [{
            left: MM.left,
            top: MM.top + OM,
            right: MM.right,
            bottom: MM.bottom - OM
          }, ...Lr(SM, MM.top + OM, OM), ...Lr(SM, MM.bottom - OM, OM)]
        }(iM),
        jM = OM.keyBox;
      if (jM) {
        const MM = (iM.left + iM.right) / 2,
          rM = (iM.top + iM.bottom) / 2;
        SM.push({
          left: MM - jM.width / 2,
          top: rM - jM.height / 2,
          right: MM + jM.width / 2,
          bottom: rM + jM.height / 2
        })
      }
      return SM
    }

    function Jr(MM) {
      const rM = MM.getBoundingClientRect();
      return 0 === rM.width && 0 === rM.height || "visible" !== getComputedStyle(MM).visibility ? [] : [(0, mr.t)(rM, 44)]
    }

    function dr(MM, rM) {
      (0, SM.useEffect)((() => {
        const iM = MM.current;
        if (!rM || !iM) return;
        const OM = () => {
          const MM = Array.from(document.querySelectorAll(".TouchComponentsButtons .TouchKeyHit, .TouchInteractHit")),
            rM = MM.find((MM => MM.classList.contains("TouchInteractHit")));
          rM !== SM && (SM && jM.unobserve(SM), SM = rM, rM && jM.observe(rM));
          const OM = Array.from(document.querySelectorAll(Qr.d)),
            aM = [...MM.flatMap((MM => hr(MM))), ...OM.flatMap(Jr)],
            PM = function(MM, rM) {
              const iM = rM.map((rM => ({
                left: rM.left - MM.left,
                top: rM.top - MM.top,
                right: rM.right - MM.left,
                bottom: rM.bottom - MM.top
              })));
              return zr(Math.ceil(MM.width), Math.ceil(MM.height), iM)
            }(iM.getBoundingClientRect(), aM);
          iM.style.clipPath !== PM && (iM.style.clipPath = PM)
        };
        let SM;
        const jM = new ResizeObserver((() => {
          OM()
        }));
        OM(), jM.observe(iM);
        const aM = iM.closest(".InGameUi"),
          PM = new MutationObserver(OM);
        aM && PM.observe(aM, {
          attributes: !0,
          attributeFilter: ["class", Hr.g]
        });
        const nM = [(0, HM.j)(nr.d, OM), (0, HM.j)(Qr.s, OM), (0, HM.j)(Qr.f, OM)];
        return () => {
          jM.disconnect(), PM.disconnect();
          for (const MM of nM) MM();
          iM.style.clipPath = ""
        }
      }), [MM, rM])
    }
    var yr = iM(4791);

    function lr(MM) {
      var rM;
      let {
        onMove: iM,
        mode: OM,
        speedCurve: jM,
        autorun: aM = !1,
        keys: PM
      } = MM;
      const nM = (0, SM.useRef)(null),
        QM = (0, SM.useRef)(null),
        LM = (0, SM.useRef)(null),
        mM = (0, SM.useRef)(null),
        HM = (0, SM.useRef)(null),
        JM = (0, SM.useRef)(null),
        dM = (0, SM.useRef)(new Sr).current,
        yM = (0, SM.useRef)(null),
        lM = (0, SM.useRef)(null),
        EM = (0, SM.useRef)(null),
        UM = (0, SM.useRef)(!1),
        GM = (0, SM.useRef)({
          clientX: 0,
          clientY: 0
        }),
        {
          t: CM
        } = (0, vM.A)(),
        bM = (0, yr.q)(OM),
        wM = (0, DM.m)(["notchSize"]).notchSize,
        tM = wM.left,
        gM = (0, SM.useRef)(16),
        uM = (0, ar.f)(),
        [RM, pM, WM] = "pinned" === OM ? jr.k : null !== (rM = uM.hudElements.joystick) && void 0 !== rM ? rM : jr.k,
        sM = "pinned" === OM ? null : uM.hudSafe,
        kM = Math.max(yr.n, yr.o * WM);
      dr(QM, "pinned" !== OM);
      const ZM = function(MM, rM, iM, OM, jM) {
        const aM = (0, SM.useRef)(null),
          PM = () => {
            clearInterval(aM.current), aM.current = null
          },
          nM = rr(MM, {
            create: MM => new cM(MM),
            elementRef: rM,
            ringRef: iM,
            classPrefix: "Autorun",
            keptBehindMovementPanels: !0,
            resizeEnds: !0,
            onArmed: jM,
            onLocked: () => {
              aM.current = setInterval((() => {
                hM.gameBridge.lookup("dropAhead", null) && (KM.e.play("autorunLedgeStop"), nM.current.cancel())
              }), 100)
            },
            onUnlocked: () => {
              PM(), OM()
            }
          });
        return (0, SM.useEffect)((() => PM), []), nM
      }(aM, LM, yM, (() => {
        qM(), xM()
      }), (() => {
        oM(), null === EM.current && ZM.current.suspend()
      }));

      function oM() {
        const MM = LM.current.getBoundingClientRect();
        EM.current = BM(lM.current, MM, 80, XM(`.TouchInventoryKey, .TouchSprintKey, ${Qr.d}`)), UM.current = null !== EM.current && IM(GM.current, EM.current)
      }

      function fM() {
        const {
          innerWidth: MM,
          innerHeight: rM
        } = window, iM = (0, Qr.G)(sM, MM, rM, (0, Qr.O)(wM, MM, rM), gM.current);
        return {
          left: iM[3],
          bottom: iM[2]
        }
      }

      function YM(MM) {
        LM.current.style.transform = `translate(${MM.x-kM}px, ${MM.y-kM}px)`
      }

      function NM(MM) {
        const rM = LM.current;
        rM.classList.add("Resting"), rM.classList.toggle("Returning", MM), rM.style.display = "fixed_hidden" === OM ? "none" : "block", YM(function() {
          const {
            innerWidth: MM,
            innerHeight: rM
          } = window, iM = fM(), OM = tM * MM / 100 + iM.left, SM = nM.current.offsetHeight || rM, jM = ((0, Pr.d)(MM, rM) ? yr.i : yr.e) + iM.bottom;
          return {
            x: Math.min(MM - kM, Math.max(kM, OM + yr.m + RM * MM)),
            y: Math.min(SM - kM, Math.max(kM, SM - jM + pM * SM))
          }
        }())
      }
      const AM = (0, SM.useRef)({
        restFixed: NM,
        release: TM
      });

      function xM() {
        bM ? NM("fixed_shown" === OM) : "floating" === OM && (LM.current.style.display = "none"), iM({
          x: 0,
          y: 0
        })
      }

      function qM() {
        JM.current = null, HM.current = null, mM.current.style.transform = "translate(-50%, -50%)"
      }

      function TM(MM) {
        qM();
        const rM = ZM.current;
        MM && null !== rM && void 0 !== rM && rM.lift() ? iM({
          x: 0,
          y: -rM.lockedSpeed
        }) : (null === rM || void 0 === rM || rM.cancel(), xM())
      }

      function VM(MM) {
        var rM;
        if (null === (rM = ZM.current) || void 0 === rM || rM.startTouch(), "pinned" === OM) {
          const MM = LM.current.getBoundingClientRect();
          HM.current = {
            x: MM.left + MM.width / 2,
            y: MM.top + MM.height / 2
          }
        } else {
          HM.current = {
            x: MM.clientX,
            y: MM.clientY
          }, LM.current.classList.remove("Resting", "Returning"), LM.current.style.display = "block";
          const rM = nM.current.getBoundingClientRect();
          YM({
            x: MM.clientX - rM.left,
            y: MM.clientY - rM.top
          }), aM && (GM.current = {
            clientX: MM.clientX,
            clientY: MM.clientY
          }, oM())
        }
      }

      function ir(MM) {
        const rM = dM.slidFrom(Array.from(MM.touches));
        rM && null === JM.current && (JM.current = rM.identifier, VM(rM));
        const OM = Array.from(MM.touches).find((MM => MM.identifier === JM.current));
        if (null === HM.current || null === JM.current || (0, FM.J)(OM)) return;
        const SM = ZM.current,
          aM = OM.clientX - HM.current.x,
          PM = OM.clientY - HM.current.y,
          nM = Math.hypot(aM, PM),
          QM = nM > 0 ? Math.min(1, kM / nM) : 0,
          zM = aM * QM,
          LM = PM * QM,
          hM = Math.hypot(zM, LM) / kM,
          yM = jM && hM > 0 ? jM(hM) / hM : 1;
        mM.current.style.transform = `translate(calc(-50% + ${zM}px), calc(-50% + ${LM}px))`;
        const lM = zM / kM,
          CM = LM / kM;
        if (iM({
            x: lM * yM,
            y: CM * yM
          }), null !== SM && null !== EM.current) {
          SM.move(lM, CM, hM * yM), GM.current = {
            clientX: OM.clientX,
            clientY: OM.clientY
          };
          const MM = UM.current;
          UM.current = IM(OM, EM.current), UM.current !== MM && SM.target(UM.current)
        }
      }
      return AM.current = {
        restFixed: NM,
        release: TM
      }, (0, SM.useLayoutEffect)((() => {
        if (!bM) return;
        const MM = () => {
          gM.current = (0, Qr.T)(document)
        };
        MM(), null === JM.current && AM.current.restFixed(!1);
        const rM = new ResizeObserver((() => {
          MM(), null === JM.current && AM.current.restFixed(!1)
        }));
        rM.observe(nM.current);
        const iM = LM.current;
        return () => {
          rM.disconnect(), iM.classList.remove("Resting", "Returning"), null === JM.current && (iM.style.display = "", iM.style.transform = "")
        }
      }), [bM, OM, wM, RM, pM, kM, sM]), (0, SM.useEffect)((() => {
        const MM = (MM, rM) => void 0 === rM || null === rM || Array.from(MM.touches).some((MM => MM.identifier === rM)) ? null : {
            lifted: "touchend" === MM.type && Array.from(MM.changedTouches).some((MM => MM.identifier === rM))
          },
          rM = rM => {
            const iM = MM(rM, JM.current);
            iM && AM.current.release(iM.lifted);
            const OM = MM(rM, dM.touchId);
            OM && dM.end(OM.lifted)
          },
          iM = () => {
            null !== JM.current && AM.current.release(!1), dM.end(!1)
          },
          OM = () => {
            "hidden" === document.visibilityState && iM()
          };
        document.addEventListener("touchstart", rM, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchmove", rM, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchend", rM, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchcancel", rM, {
          capture: !0,
          passive: !0
        }), window.addEventListener("blur", iM), document.addEventListener("visibilitychange", OM);
        const SM = (0, Mr.r)((MM => {
          let {
            keepsMovement: rM
          } = MM;
          rM || iM()
        }));
        return () => {
          SM(), document.removeEventListener("touchstart", rM, {
            capture: !0
          }), document.removeEventListener("touchmove", rM, {
            capture: !0
          }), document.removeEventListener("touchend", rM, {
            capture: !0
          }), document.removeEventListener("touchcancel", rM, {
            capture: !0
          }), window.removeEventListener("blur", iM), document.removeEventListener("visibilitychange", OM)
        }
      }), []), (0, SM.useEffect)((() => {
        const MM = nM.current,
          rM = MM => {
            MM.preventDefault()
          };
        return MM.addEventListener("touchstart", rM, {
          passive: !1
        }), () => {
          MM.removeEventListener("touchstart", rM)
        }
      }), []), (0, zM.jsxs)("div", {
        ref: nM,
        className: "JoystickZone",
        style: bM && (RM > 0 || WM > 1 || fM().left > 0) ? {
          width: `max(35vw, calc(${tM+100*RM}vw + ${fM().left+yr.m+kM+24}px))`
        } : void 0,
        onTouchStart: function(MM) {
          const rM = Array.from(MM.changedTouches).filter((MM => {
            var rM;
            return null === (rM = nM.current) || void 0 === rM ? void 0 : rM.contains(MM.target)
          }));
          for (const OM of rM) {
            const MM = Or(OM.target);
            MM && dM.land(MM, OM)
          }
          const iM = rM.find((MM => null === Or(MM.target)));
          iM && null === JM.current && (JM.current = iM.identifier, VM(iM), ir(MM))
        },
        onTouchMove: ir,
        children: [(0, zM.jsx)("div", {
          ref: QM,
          className: "JoystickTouchLayer"
        }), (0, zM.jsxs)("div", {
          ref: LM,
          className: "Joystick",
          style: {
            width: 2 * kM + "px",
            height: 2 * kM + "px",
            transform: "pinned" === OM ? "translate(4vw, calc(50vh - 50%))" : void 0
          },
          children: [(0, zM.jsx)("div", {
            className: "JoystickBase",
            style: {
              width: 2 * kM + "px",
              height: 2 * kM + "px"
            }
          }), aM && (0, zM.jsxs)(zM.Fragment, {
            children: [(0, zM.jsx)("svg", {
              className: "AutorunRing",
              viewBox: "0 0 100 100",
              children: (0, zM.jsx)("circle", {
                ref: yM,
                cx: "50",
                cy: "50",
                r: "48",
                pathLength: 1
              })
            }), (0, zM.jsxs)("div", {
              ref: lM,
              className: "AutorunTarget",
              children: [(0, zM.jsx)(eM.b, {
                name: "lock"
              }), CM("settingsMenu:autoRun")]
            })]
          }), (0, zM.jsx)("div", {
            ref: mM,
            className: "JoystickKnob",
            style: {
              width: `${kM}px`,
              height: `${kM}px`
            }
          })]
        }), PM]
      })
    }
    var Er = iM(255);
    const Ur = {
        deadZone: .1,
        creepEnd: .35,
        fullSpeedAt: .85,
        creepMin: .06,
        creepMax: .22
      },
      Gr = {
        short_creep: {
          ...Ur,
          creepEnd: .25,
          fullSpeedAt: .75
        },
        long_creep: {
          ...Ur,
          creepEnd: .45,
          fullSpeedAt: .95
        },
        small_dead_zone: {
          ...Ur,
          deadZone: .05
        },
        control: Ur
      };

    function Cr(MM) {
      return function(MM, rM) {
        const {
          deadZone: iM,
          creepEnd: OM,
          fullSpeedAt: SM,
          creepMin: jM,
          creepMax: aM
        } = MM;
        if (rM < iM) return 0;
        if (rM < OM) {
          const MM = (rM - iM) / (OM - iM);
          return jM + (aM - jM) * MM * MM
        }
        return rM < SM ? aM + (1 - aM) * (rM - OM) / (SM - OM) : 1
      }(Gr[Er.e.mobile_walk_curve_v1], MM)
    }

    function er(MM, rM) {
      const iM = (0, SM.useRef)(null);
      return (0, SM.useLayoutEffect)((() => (NM.k.set(MM, iM.current, rM), () => {
        NM.k.set(MM, null)
      })), [MM, rM]), iM
    }
    const br = "C",
      wr = "J",
      tr = "U",
      gr = "A",
      ur = "G",
      Rr = "X",
      pr = (0, SM.forwardRef)((function(MM, rM) {
        let {
          slot: iM,
          canvasZone: OM = !1,
          lit: jM = !1,
          label: PM,
          className: nM,
          children: QM,
          ...LM
        } = MM;
        return (0, SM.useEffect)((() => (HM.i.Tz(nr.d), () => {
          HM.i.Tz(nr.d)
        })), []), (0, zM.jsx)("div", {
          ref: rM,
          className: aM()("TouchKeyHit", `TouchSlot${iM}`, nM, {
            CanvasZone: OM
          }),
          ...LM,
          children: (0, zM.jsxs)("div", {
            className: aM()("TouchKey", {
              Lit: jM,
              Labelled: void 0 !== PM
            }),
            children: [QM, void 0 !== PM && (0, zM.jsx)("span", {
              className: "TouchKeyLabel",
              children: PM
            })]
          })
        })
      }));

    function Wr(MM, rM) {
      (0, SM.useEffect)((() => () => {
        rM.current && (rM.current = !1, (0, YM.A)(MM, !1, {
          isTrusted: !0,
          timeStamp: performance.now()
        }))
      }), [])
    }
    var sr = iM(37515);
    class Dr extends qM {
      constructor() {
        super(...arguments), this.start = {
          x: 0,
          y: 0
        }, this.moved = !1
      }
      press(MM, rM) {
        this.start = {
          x: MM,
          y: rM
        }, this.moved = !1, this.startTouch(), this.hold(!0, !1)
      }
      move(MM, rM, iM) {
        const OM = Math.hypot(MM - this.start.x, rM - this.start.y) <= 12;
        this.moved ||= !OM;
        const SM = null !== iM && rM < this.start.y - 12 && IM({
          clientX: MM,
          clientY: rM
        }, iM);
        this.hold(!this.moved, OM || SM)
      }
    }
    const kr = new Set;

    function Zr(MM) {
      const rM = new Set(Array.from(MM.touches, (MM => MM.identifier)));
      for (const iM of kr) {
        for (const MM of iM.ids) rM.has(MM) || iM.ids.delete(MM);
        if (0 === iM.ids.size) {
          kr.delete(iM);
          iM.pressesOnPointerDown && "touchstart" === MM.type && Array.from(MM.changedTouches).some((MM => MM.target instanceof Node && iM.element.contains(MM.target))) || iM.release()
        }
      }
    }
    if ("undefined" !== typeof window)
      for (const rP of ["touchstart", "touchmove"]) window.addEventListener(rP, Zr, {
        capture: !0,
        passive: !0
      });

    function or(MM) {
      let {
        pressesOnPointerDown: rM = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const iM = (0, SM.useRef)(MM);
      iM.current = MM;
      const OM = (0, SM.useRef)({
        ids: new Set,
        element: null,
        pressesOnPointerDown: rM,
        release: () => {
          iM.current()
        }
      });
      (0, SM.useEffect)((() => {
        const MM = OM.current;
        return () => {
          kr.delete(MM), MM.ids.clear()
        }
      }), []);
      const jM = MM => {
        const rM = OM.current;
        for (const iM of Array.from(MM.changedTouches)) rM.ids.delete(iM.identifier);
        0 === rM.ids.size && kr.delete(rM)
      };
      return {
        onTouchStart: MM => {
          const rM = OM.current;
          rM.element = MM.currentTarget;
          for (const iM of Array.from(MM.changedTouches)) iM.target instanceof Node && MM.currentTarget.contains(iM.target) && rM.ids.add(iM.identifier);
          rM.ids.size > 0 && kr.add(rM)
        },
        onTouchEnd: jM,
        onTouchCancel: jM
      }
    }

    function fr(MM, rM) {
      return null === rM ? null : (0, sr.e)(MM.nativeEvent.changedTouches, rM.id)
    }

    function Yr(MM) {
      let {
        lockable: rM
      } = MM;
      const {
        t: iM
      } = (0, vM.A)(), OM = "round" === (0, jr.ab)().hudShape, jM = (0, SM.useRef)(!1);
      Wr(fM.y.Jump, jM);
      const aM = (0, SM.useRef)(null),
        PM = (0, SM.useRef)(null),
        nM = (0, SM.useRef)(null),
        QM = (0, SM.useRef)(null),
        LM = (0, SM.useRef)(null),
        mM = (0, SM.useRef)(null),
        HM = (0, SM.useRef)(!1),
        hM = (MM, rM) => {
          jM.current = MM, (0, YM.A)(fM.y.Jump, MM, rM)
        },
        JM = function() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            isTrusted: !0,
            timeStamp: performance.now()
          };
          jM.current && (aM.current && (0, xM.e)(aM.current, !1), hM(!1, MM))
        },
        dM = rr(rM, {
          create: MM => new Dr(MM),
          elementRef: aM,
          ringRef: PM,
          classPrefix: "JumpLock",
          keptBehindMovementPanels: !1,
          resizeEnds: !1,
          onArmed: () => {
            const MM = aM.current.getBoundingClientRect(),
              rM = nM.current.parentElement,
              iM = rM.getBoundingClientRect(),
              OM = {
                left: iM.left + rM.clientLeft,
                top: iM.top + rM.clientTop,
                right: iM.right - rM.clientLeft,
                bottom: iM.bottom - rM.clientTop
              };
            if (LM.current = BM(nM.current, OM, 16, XM(`.TouchKeyHit:not(.JumpKey) > .TouchKey, .TouchInventoryKey, .TouchSprintKey, ${Qr.d}`)), null === LM.current) return void dM.current.suspend();
            const SM = LM.current;
            mM.current = {
              left: Math.min(MM.left, SM.left),
              top: SM.top,
              right: Math.max(MM.right, SM.right),
              bottom: MM.bottom
            }, HM.current = null !== QM.current && IM({
              clientX: QM.current.x,
              clientY: QM.current.y
            }, SM)
          },
          onUnlocked: () => {
            null === QM.current && JM()
          }
        }),
        yM = MM => {
          var rM;
          QM.current = null, null === (rM = dM.current) || void 0 === rM || rM.cancel(), JM(MM)
        },
        lM = or((() => {
          yM()
        })),
        EM = MM => {
          const rM = QM.current;
          var iM;
          return null === rM ? null !== (iM = dM.current) && void 0 !== iM && iM.locked ? null : "lifted" : fr(MM, rM) ? "lifted" : (0, sr.i)(MM.nativeEvent.touches, rM.id) ? null : "dropped"
        };
      return (0, zM.jsxs)(pr, {
        ref: aM,
        slot: wr,
        className: "JumpKey",
        onTouchStart: MM => {
          lM.onTouchStart(MM), (0, xM.e)(MM.currentTarget, !0), null === QM.current || (0, sr.i)(MM.nativeEvent.touches, QM.current.id) || yM();
          const rM = MM.changedTouches[0];
          var iM;
          null === QM.current && rM && (QM.current = {
            id: rM.identifier,
            x: rM.clientX,
            y: rM.clientY
          }, null === (iM = dM.current) || void 0 === iM || iM.press(rM.clientX, rM.clientY));
          jM.current || hM(!0, MM.nativeEvent)
        },
        onTouchMove: MM => {
          const rM = QM.current,
            iM = fr(MM, rM);
          if (!iM) return;
          const OM = dM.current;
          if (null === OM || void 0 === OM || OM.move(iM.clientX, iM.clientY, mM.current), null !== OM && void 0 !== OM && OM.offered) {
            const MM = IM(iM, LM.current);
            MM !== HM.current && (HM.current = MM, OM.target(MM))
          }
          rM.x = iM.clientX, rM.y = iM.clientY
        },
        onTouchEnd: MM => {
          var rM;
          lM.onTouchEnd(MM);
          const iM = EM(MM);
          null !== iM && ("dropped" !== iM ? (QM.current = null, null !== (rM = dM.current) && void 0 !== rM && rM.lift() ? (0, xM.e)(MM.currentTarget, !1) : JM(MM.nativeEvent)) : yM(MM.nativeEvent))
        },
        onTouchCancel: MM => {
          lM.onTouchCancel(MM), null !== EM(MM) && yM(MM.nativeEvent)
        },
        children: [(0, zM.jsx)(eM.b, {
          name: "arrow-up-from-line"
        }), rM && (0, zM.jsxs)(zM.Fragment, {
          children: [(0, zM.jsx)("span", {
            className: "JumpLockBadge",
            children: (0, zM.jsx)(eM.b, {
              name: "lock"
            })
          }), (0, zM.jsx)("svg", {
            className: "JumpLockRing",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            children: (0, zM.jsx)("rect", {
              ref: PM,
              x: "2",
              y: "2",
              width: "96",
              height: "96",
              rx: OM ? 48 : 0,
              pathLength: 1
            })
          }), (0, zM.jsxs)("div", {
            ref: nM,
            className: "JumpLockTarget",
            children: [(0, zM.jsx)(eM.b, {
              name: "lock"
            }), iM("settingsMenu:jumpLock")]
          })]
        })]
      })
    }
    var Nr = iM(37529);

    function Ar(MM) {
      let {
        atHome: rM
      } = MM;
      const {
        t: iM
      } = (0, vM.A)(), OM = (jM = (0, UM.f)("runningSpeed"), PM = (0, UM.f)("walkingSpeed"), null !== jM && null !== PM && jM > PM);
      var jM, PM;
      const QM = (0, jr.p)((0, ar.f)().hudElements, "sprint"),
        LM = (0, nM.e)(Nr.c, (0, Nr.e)());
      return (0, SM.useEffect)((() => {
        OM && !QM || (0, Nr.g)(!0)
      }), [OM, QM]), (0, SM.useEffect)((() => () => {
        (0, Nr.g)(!0)
      }), []), OM ? (0, zM.jsx)("div", {
        className: aM()("TouchSprintHit", {
          AtHome: rM
        }),
        role: "switch",
        "aria-checked": LM,
        "aria-label": iM("touchKeys:sprint"),
        [ir]: "",
        onClick: () => {
          (0, Nr.g)(!(0, Nr.e)())
        },
        children: (0, zM.jsx)("div", {
          className: aM()("TouchKey TouchSprintKey", {
            Lit: LM
          }),
          children: (0, zM.jsx)(eM.b, {
            name: LM ? "person-running" : "person-walking"
          })
        })
      }) : null
    }
    var xr = iM(9489),
      vr = iM(9487);

    function Fr(MM) {
      const rM = MM.getBoundingClientRect();
      return rM.width > 0 && rM.height > 0 ? (0, mr.j)(rM) : null
    }

    function Br(MM) {
      const rM = MM.ownerDocument.documentElement.classList,
        iM = MM.classList.contains("ShopKey") ? "HudHide-shop" : MM.classList.contains("BagKey") ? "HudHide-bag" : null;
      return null !== iM && (rM.contains(iM) || rM.contains("HudHide-inventory")) ? null : Fr(MM)
    }

    function Xr(MM) {
      const rM = Fr(MM),
        iM = MM.firstElementChild;
      if (null === rM) return null;
      const {
        x: OM,
        y: SM
      } = (0, mr.e)(rM), jM = iM.offsetWidth / 2, aM = iM.offsetHeight / 2;
      return {
        left: OM - jM,
        top: SM - aM,
        right: OM + jM,
        bottom: SM + aM
      }
    }

    function Ir(MM, rM) {
      const iM = MM.ownerDocument.createElement("div");
      iM.className = `TouchSlotProbe TouchSlot${rM}`, MM.append(iM);
      const OM = Fr(iM);
      return iM.remove(), OM
    }
    const Kr = `.TouchInventoryKey, .TouchSprintKey, ${Qr.d}`;

    function qr(MM, rM) {
      const iM = rM.map((rM => ({
        slot: rM,
        face: Ir(MM, rM)
      })));
      if (iM.every((MM => {
          let {
            face: rM
          } = MM;
          return null === rM
        }))) return null;
      return function(MM, rM) {
        const iM = [...rM],
          OM = [],
          SM = [];
        for (const {
            face: aM,
            slot: PM
          }
          of MM) null !== aM && (iM.some((MM => (0, mr.r)(aM, MM, vr.b))) ? SM.push(PM) : (OM.push(PM), iM.push(aM)));
        const jM = [...OM, ...SM];
        return MM.map((MM => {
          let {
            slot: rM,
            face: iM
          } = MM;
          return null === iM ? rM : jM.shift()
        }))
      }(iM, [...[...MM.querySelectorAll(":scope > .TouchKeyHit")].filter((MM => MM.classList.contains("BoostKey") || !rM.some((rM => MM.classList.contains(`TouchSlot${rM}`))))).map(Xr), ...[...MM.ownerDocument.querySelectorAll(Kr)].map(Br)].filter((MM => null !== MM)))
    }
    const Tr = new WeakMap;
    class Vr {
      constructor(MM) {
        this.zones = MM, this.followed = new Map, this.onStart = MM => {
          if (this.releaseMissing(MM.touches), MM.target instanceof HTMLCanvasElement)
            for (let iM = 0; iM < MM.changedTouches.length; iM++) {
              var rM;
              const {
                identifier: OM,
                clientX: SM,
                clientY: jM
              } = MM.changedTouches[iM];
              this.release(OM);
              const aM = this.zones.hitZone(SM, jM);
              if (!aM) continue;
              const {
                key: PM
              } = aM;
              null === (rM = Tr.get(PM)) || void 0 === rM || rM.cancel();
              const nM = {
                hit: aM.element,
                key: PM,
                x: aM.x,
                y: aM.y,
                reach: .6 * aM.radius
              };
              this.followed.set(OM, nM), (0, xM.e)(aM.element, !0), cr(nM, SM, jM)
            }
        }, this.onMove = MM => {
          this.releaseMissing(MM.touches);
          for (let rM = 0; rM < MM.changedTouches.length; rM++) {
            const {
              identifier: iM,
              clientX: OM,
              clientY: SM
            } = MM.changedTouches[rM], jM = this.followed.get(iM);
            jM && cr(jM, OM, SM)
          }
        }, this.onEnd = MM => {
          for (let rM = 0; rM < MM.changedTouches.length; rM++) this.release(MM.changedTouches[rM].identifier)
        }, this.onVisibilityChange = () => {
          document.hidden && this.releaseAll()
        }
      }
      start() {
        const MM = {
          passive: !0
        };
        return document.addEventListener("touchstart", this.onStart, MM), document.addEventListener("touchmove", this.onMove, MM), document.addEventListener("touchend", this.onEnd, MM), document.addEventListener("touchcancel", this.onEnd, MM), document.addEventListener("visibilitychange", this.onVisibilityChange), () => {
          document.removeEventListener("touchstart", this.onStart), document.removeEventListener("touchmove", this.onMove), document.removeEventListener("touchend", this.onEnd), document.removeEventListener("touchcancel", this.onEnd), document.removeEventListener("visibilitychange", this.onVisibilityChange), this.releaseAll()
        }
      }
      releaseMissing(MM) {
        for (const rM of [...this.followed.keys()])(0, sr.i)(MM, rM) || this.release(rM)
      }
      releaseAll() {
        for (const MM of [...this.followed.keys()]) this.release(MM)
      }
      release(MM) {
        const rM = this.followed.get(MM);
        if (!rM) return;
        this.followed.delete(MM);
        for (const SM of this.followed.values())
          if (SM.key === rM.key) return;
        (0, xM.e)(rM.hit, !1);
        const {
          key: iM
        } = rM, OM = iM.style.translate;
        iM.style.translate = "", OM && Tr.set(iM, iM.animate({
          translate: [OM, "0 0"]
        }, {
          duration: 150,
          easing: "ease-out"
        }))
      }
    }

    function cr(MM, rM, iM) {
      let {
        key: OM,
        x: SM,
        y: jM,
        reach: aM
      } = MM;
      const PM = rM - SM,
        nM = iM - jM,
        QM = Math.min(1, aM / (Math.hypot(PM, nM) || 1));
      OM.style.translate = `${PM*QM}px ${nM*QM}px`
    }
    var Mi = iM(1548),
      ri = iM(83),
      ii = iM(1429),
      Oi = iM(30);
    const Si = "threeFingerHintShown",
      ji = {
        android: "touchHint:threeFingerAndroid",
        ios: "touchHint:threeFingerIos"
      };
    let ai = 0,
      Pi = !1;

    function ni() {
      const MM = new Set;
      let rM = -1 / 0,
        iM = -1 / 0,
        OM = null,
        SM = 0;
      const jM = () => {
          MM.clear()
        },
        aM = jM => {
          if (jM.touches.length > 0) return;
          for (let rM = 0; rM < jM.changedTouches.length; rM++) MM.add(jM.changedTouches[rM].identifier);
          const aM = MM.size;
          if (aM < 3 || !(0, Mr.B)()) return;
          if (SM = aM, null !== OM) return;
          const PM = performance.now(),
            nM = rM >= PM - 200;
          OM = setTimeout((() => {
            if (OM = null, !(0, Mr.B)()) return;
            const MM = iM >= PM - 200 || document.hidden;
            ! function(MM, rM) {
              var iM;
              const OM = (0, ri.getOperatingSystem)();
              ai < 5 && (ai++, (0, Mi.reportAnalyticsClick)({
                id: "touch.os_cancel",
                value: null === rM ? `${OM}:${MM}` : `${OM}:${MM}:${rM}`
              })), null === rM && (Pi || !0 === Oi.g.getItem(Si) || (Pi = !0, Oi.g.setItem(Si, !0), ii.NotificationProvider.showAlertPopup({
                title: "touchHint:threeFingerTitle",
                subtitle: null !== (iM = ji[OM]) && void 0 !== iM ? iM : "touchHint:threeFingerOther",
                confirmText: "general:ok",
                disablePressBackgroundToClose: !0,
                unlockPointerKey: "threeFingerHint"
              })))
            }(SM, MM ? "hide" : nM ? "blur" : null)
          }), 500)
        },
        PM = () => {
          iM = performance.now()
        },
        nM = () => {
          rM = performance.now()
        },
        QM = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("touchstart", jM, QM), document.addEventListener("touchcancel", aM, QM), document.addEventListener("visibilitychange", PM), window.addEventListener("blur", nM), window.addEventListener("resize", PM), window.addEventListener("orientationchange", PM), () => {
        document.removeEventListener("touchstart", jM, QM), document.removeEventListener("touchcancel", aM, QM), document.removeEventListener("visibilitychange", PM), window.removeEventListener("blur", nM), window.removeEventListener("resize", PM), window.removeEventListener("orientationchange", PM), null !== OM && clearTimeout(OM)
      }
    }
    const Qi = () => {
      const MM = (0, ZM.m)(),
        rM = (0, oM.z)();
      return MM || rM
    };

    function zi(MM) {
      (0, NM.m)(MM.x, MM.y)
    }
    const Li = (0, SM.memo)((function() {
        const MM = Qi(),
          {
            joystickMode: rM,
            touchSpeedCurve: iM,
            autorun: OM
          } = (0, DM.m)(["clientEscMenuOptions"]).clientEscMenuOptions;
        return (0, SM.useEffect)((() => ((0, AM.k)(fM.C.TouchControls, fM.C.TouchControls), () => {
          (0, AM.k)(fM.C.TouchControls, 0), (0, NM.m)(0, 0)
        })), []), (0, SM.useEffect)(ni, []), (0, zM.jsx)("div", {
          className: aM()("TouchMovementWrapper", {
            Hidden: MM
          }),
          "data-camera-keeper": "",
          children: (0, zM.jsx)(lr, {
            onMove: zi,
            mode: rM,
            speedCurve: iM ? Cr : void 0,
            autorun: OM,
            keys: (0, zM.jsx)(Ar, {
              atHome: !(0, yr.q)(rM)
            })
          })
        })
      })),
      mi = (0, SM.memo)((function() {
        const MM = Qi(),
          {
            clientEscMenuOptions: rM
          } = (0, DM.m)(["clientEscMenuOptions"]),
          iM = rM.touchActionButtons;
        (0, SM.useEffect)((() => new Vr(NM.k).start()), []), (0, SM.useEffect)((() => {
          HM.i.Tz(nr.d)
        }), [MM]);
        const OM = (0, SM.useRef)(null),
          jM = function(MM, rM) {
            const [iM, OM] = (0, SM.useState)((() => (0, xr.j)(MM)));
            return (0, SM.useLayoutEffect)((() => {
              var iM;
              const SM = rM.current;
              if (!SM) return;
              const jM = (0, xr.j)(MM),
                aM = () => {
                  const MM = qr(SM, jM);
                  OM((rM => {
                    const iM = null !== MM && void 0 !== MM ? MM : rM.length === jM.length ? rM : jM;
                    return iM.join() === rM.join() ? rM : iM
                  }))
                };
              aM(), window.addEventListener("resize", aM);
              const PM = "undefined" === typeof ResizeObserver ? null : new ResizeObserver(aM);
              null === PM || void 0 === PM || PM.observe(null !== (iM = SM.closest(".BottomRightElements")) && void 0 !== iM ? iM : SM);
              const nM = [(0, HM.j)(Qr.f, aM), (0, HM.j)(nr.d, aM), (0, HM.j)(Qr.s, aM)];
              return () => {
                window.removeEventListener("resize", aM), null === PM || void 0 === PM || PM.disconnect();
                for (const MM of nM) MM()
              }
            }), [MM, rM]), iM.length === (0, xr.j)(MM).length ? iM : (0, xr.j)(MM)
          }(iM, OM);
        return (0, zM.jsxs)("div", {
          ref: OM,
          className: aM()("TouchComponentsButtons", {
            Hidden: MM
          }),
          "data-camera-keeper": "",
          children: [(0, zM.jsx)(Yr, {
            lockable: rM.jumpLock && !MM
          }), (0, zM.jsx)(wi, {
            hidden: MM,
            actionButtons: iM,
            contextSlots: jM
          }), (0, zM.jsx)(Ji, {})]
        })
      }));

    function Hi(MM) {
      const rM = rM => iM => {
        (0, xM.e)(iM.currentTarget, rM), MM(rM, iM.nativeEvent)
      };
      return {
        onPointerDown: rM(!0),
        onPointerUp: rM(!1),
        onPointerCancel: rM(!1)
      }
    }

    function Ji() {
      const MM = (0, UM.f)("canCrouch"),
        rM = (0, kM.j)("crouching"),
        iM = (0, SM.useRef)(!1);
      Wr(fM.y.Crouch, iM);
      const OM = (MM, rM) => {
          iM.current = MM, (0, YM.A)(fM.y.Crouch, MM, rM)
        },
        jM = (0, SM.useRef)(null),
        aM = () => {
          iM.current && (jM.current && (0, xM.e)(jM.current, !1), OM(!1, {
            isTrusted: !0,
            timeStamp: performance.now()
          }))
        },
        PM = or(aM);
      return (0, SM.useEffect)((() => {
        !1 === MM && aM()
      }), [MM]), !1 === MM ? null : (0, zM.jsx)(pr, {
        ref: jM,
        slot: br,
        className: "CrouchKey",
        lit: rM,
        ...PM,
        ...Hi(OM),
        children: (0, zM.jsx)(eM.b, {
          name: "arrow-down-to-line"
        })
      })
    }
    const di = [{
        icon: "arrows-rotate"
      }],
      yi = [{
        icon: "Arrow"
      }],
      li = [{
        icon: "crosshairs"
      }],
      Ei = [{
        icon: "swords"
      }],
      Ui = [{
        icon: "hand-back-point-up"
      }],
      Gi = [{
        icon: "Firecracker"
      }];

    function Ci(MM, rM, iM, OM) {
      return {
        id: JSON.stringify(rM),
        render: SM => (0, zM.jsx)(ti, {
          code: MM,
          slot: SM,
          icon: rM,
          label: OM,
          hidden: iM
        })
      }
    }

    function ei(MM, rM) {
      return {
        id: "fly",
        render: iM => (0, zM.jsx)(bi, {
          slot: iM,
          flying: MM,
          label: rM
        })
      }
    }

    function bi(MM) {
      let {
        slot: rM,
        flying: iM,
        label: OM
      } = MM;
      return (0, zM.jsx)(pr, {
        slot: rM,
        className: "FlyKey",
        lit: iM,
        label: OM,
        ...Hi(((MM, rM) => {
          (0, YM.A)(fM.y.Fly, MM, rM)
        })),
        children: (0, zM.jsx)(eM.b, {
          name: "feather-pointed"
        })
      })
    }

    function wi(MM) {
      var rM, iM;
      let {
        hidden: OM,
        actionButtons: jM,
        contextSlots: aM
      } = MM;
      const {
        t: PM
      } = (0, vM.A)(), {
        gun: nM,
        aimable: QM,
        chargeName: LM
      } = (0, kM.j)("heldItemAim"), mM = (0, kM.j)("gliderBoostFuel"), {
        canFly: HM,
        flying: hM
      } = (0, kM.j)("flight"), JM = (0, UM.f)("touchscreenActionButton"), dM = nM ? di : JM, yM = QM ? {
        icon: yi,
        label: PM("touchKeys:aim")
      } : null, lM = null !== LM ? {
        icon: [{
          icon: LM
        }]
      } : null, EM = null !== yM && void 0 !== yM ? yM : lM, GM = null !== (rM = null === (iM = nM ? yM : null !== lM && void 0 !== lM ? lM : yM) || void 0 === iM ? void 0 : iM.icon) && void 0 !== rM ? rM : Ui, CM = [!jM && EM ? Ci(NM.e.Action2, EM.icon, OM, EM.label) : null, nM ? Ci(NM.e.Action3, li, OM, PM("touchKeys:scope")) : null, HM ? ei(hM, PM("touchKeys:fly")) : null];
      return (0, zM.jsxs)(zM.Fragment, {
        children: [dM && (0, zM.jsx)(ti, {
          code: NM.e.Action1,
          slot: ur,
          icon: dM,
          label: nM ? PM("touchKeys:reload") : void 0,
          hidden: OM
        }, JSON.stringify(dM)), jM && (0, zM.jsxs)(zM.Fragment, {
          children: [(0, zM.jsx)(ti, {
            code: NM.e.Attack,
            slot: gr,
            icon: Ei,
            name: PM("touchKeys:attack"),
            hidden: OM
          }), (0, zM.jsx)(ti, {
            code: NM.e.Use,
            slot: tr,
            icon: GM,
            name: PM("touchKeys:use"),
            hidden: OM
          })]
        }), (eM = CM, bM = aM, eM.filter((MM => null !== MM)).slice(0, bM.length).map(((MM, rM) => {
          const iM = bM[rM];
          return (0, zM.jsx)(SM.Fragment, {
            children: MM.render(iM)
          }, `${MM.id}:${iM}`)
        }))), mM > 0 && (0, zM.jsx)(ti, {
          code: NM.e.Boost,
          slot: Rr,
          className: "BoostKey",
          icon: Gi,
          label: PM("touchKeys:boost", {
            fuel: mM > 99 ? "99+" : mM
          }),
          hidden: OM
        })]
      });
      var eM, bM
    }

    function ti(MM) {
      let {
        code: rM,
        slot: iM,
        icon: OM,
        label: SM,
        name: jM,
        hidden: PM,
        className: nM
      } = MM;
      const LM = er(rM, PM);
      return (0, zM.jsx)(pr, {
        ref: LM,
        slot: iM,
        className: aM()("TouchActionKey", nM),
        canvasZone: !0,
        label: SM,
        role: void 0 !== jM ? "img" : void 0,
        "aria-label": jM,
        children: (0, zM.jsx)(QM.b, {
          text: OM
        })
      })
    }
    var gi = iM(4589),
      ui = iM(2798),
      Ri = iM(670);
    const Wi = (0, SM.memo)((function() {
      (0, CM.d)();
      const MM = (0, SM.useRef)([]),
        rM = (0, ui.b)(),
        iM = (0, SM.useRef)(0),
        OM = (0, SM.useRef)(0),
        jM = (0, SM.useRef)([]),
        aM = (0, SM.useRef)(null);

      function PM(iM, OM, SM, jM) {
        const aM = (0, Ri.e)(),
          PM = setTimeout((() => {
            MM.current = MM.current.filter((MM => MM.id !== aM)), rM()
          }), jM);
        hM.gameBridge.send("recordFlyingMiddleText", {
          content: iM,
          oi: OM,
          angle: SM,
          Yi: jM
        }), MM.current.push({
          id: aM,
          content: iM,
          oi: OM,
          Yi: jM,
          removeTimeout: PM,
          angle: SM
        }), rM()
      }
      return (0, kM.c)("shotDamageToShow", (MM => {
        let {
          damage: rM,
          wasCrit: iM,
          distance: OM
        } = MM;
        const SM = -Math.PI / 4 + Math.random() * Math.PI / 2;
        PM(iM ? [{
          str: rM.toString(),
          style: {
            color: "#ff8a80",
            fontSize: "1.6em"
          }
        }] : [rM.toString()], OM, SM, 1e3)
      })), (0, nM.d)("flyingMiddleMessage", (MM => {
        let {
          content: rM,
          oi: SM,
          Yi: nM
        } = MM;
        jM.current.push({
          content: rM,
          oi: SM,
          Yi: nM
        });
        const QM = () => {
          const {
            content: MM,
            oi: rM,
            Yi: SM
          } = jM.current.shift(), aM = function(MM) {
            const rM = -Math.PI / 4,
              iM = Math.PI / 4,
              OM = iM - rM,
              SM = (1 + Math.sqrt(5)) / 2,
              jM = 2 * Math.PI / (SM * SM);
            let aM = MM + jM;
            for (; aM > iM;) aM -= OM;
            for (; aM < rM;) aM += OM;
            const PM = Math.PI / 6;
            if (Math.abs(aM - MM) < PM) {
              aM = MM + (Math.sign(aM - MM) || 1) * PM, aM > iM && (aM = MM - PM), aM < rM && (aM = MM + PM)
            }
            return aM
          }(OM.current);
          OM.current = aM, iM.current = Date.now(), PM(MM, rM, aM, SM)
        };
        if (!aM.current) {
          const MM = () => {
            jM.current.length > 0 && QM(), 0 === jM.current.length && (clearInterval(aM.current), aM.current = null)
          };
          aM.current = setInterval(MM, 200), iM.current + 200 < Date.now() && MM()
        }
        for (; jM.current.length > 4;) QM()
      })), (0, nM.d)("forceFlyingMiddleMessage", (MM => {
        let {
          content: rM,
          oi: iM,
          angle: OM,
          Yi: SM
        } = MM;
        PM(rM, iM, OM, SM)
      })), (0, SM.useEffect)((() => () => {
        clearInterval(aM.current), aM.current = null;
        for (const rM of MM.current) clearTimeout(rM.removeTimeout)
      }), []), (0, zM.jsx)("div", {
        className: "FlyingMiddleTextWrapper",
        children: MM.current.map((MM => {
          const {
            id: rM,
            content: iM,
            oi: OM,
            Yi: SM,
            angle: jM
          } = MM;
          return MM.pos || (MM.pos = function(MM, rM) {
            const iM = 50 / (MM ** .7 * .35);
            return {
              x: iM * Math.sin(rM),
              y: -iM * Math.cos(rM)
            }
          }(OM, jM)), (0, zM.jsx)(si, {
            className: "FlyingMiddleText",
            classNames: "FlyingMiddleText",
            timeout: SM,
            enterActiveStyle: {
              transform: `translate(${MM.pos.x}vw, ${MM.pos.y}vh)`,
              transition: `transform ${SM}ms ease-out`
            },
            children: (0, zM.jsx)("div", {
              children: (0, zM.jsx)(QM.b, {
                text: iM
              })
            })
          }, rM)
        }))
      })
    }));

    function si(MM) {
      let {
        children: rM,
        className: iM,
        classNames: OM,
        timeout: jM,
        enterActiveStyle: aM
      } = MM;
      const [PM, nM] = (0, SM.useState)(!1), [QM, LM] = (0, SM.useState)(!1), mM = (0, SM.useRef)(null);
      return (0, SM.useEffect)((() => {
        nM(!0)
      }), []), (0, zM.jsx)(gi.d, {
        className: iM,
        classNames: OM || iM,
        in: PM,
        timeout: jM,
        nodeRef: mM,
        onEntering: () => {
          LM(!0)
        },
        children: (0, SM.cloneElement)(rM, {
          ref: mM,
          style: QM && aM || void 0
        })
      })
    }
    var Di = iM(37538);

    function ki() {
      const MM = (0, kM.j)("health");
      return (0, zM.jsxs)("div", {
        className: "BottomScreenStatBarList",
        children: [(0, zM.jsx)(Di.e, {
          placement: "statBars"
        }), (0, zM.jsx)(Zi, {
          actualValue: MM.shield,
          maxValue: MM.maxShield,
          hideAtValue: 0,
          icon: "shield",
          className: "ShieldBar"
        }), (0, zM.jsx)(Zi, {
          actualValue: MM.health,
          maxValue: MM.maxHealth,
          icon: "heart",
          className: "HealthBar"
        })]
      })
    }

    function Zi(MM) {
      let {
        actualValue: rM,
        maxValue: iM,
        hideAtValue: OM,
        icon: SM,
        className: jM
      } = MM;
      return (0, CM.h)(), null === rM || null === iM || rM === OM || iM === OM ? null : (0, zM.jsx)("div", {
        className: "BottomScreenStatBarWrapper",
        children: (0, zM.jsxs)("div", {
          className: "BottomScreenStatBarBackground",
          children: [(0, zM.jsx)("div", {
            className: `BottomScreenStatBar ${jM}`,
            style: {
              transform: `scaleX(${Math.max(rM/iM,0)})`,
              transformOrigin: "left center"
            }
          }), (0, zM.jsxs)("div", {
            className: "BottomScreenStatBarText SmallTextBold",
            children: [(0, zM.jsx)(eM.b, {
              name: SM
            }), ` ${Math.ceil(rM)}/${iM}`]
          })]
        })
      })
    }
    var oi = iM(35017),
      fi = iM(4917),
      Yi = iM(1382),
      Ni = iM(3038),
      Ai = iM(1520),
      xi = iM(1360),
      vi = iM(3827),
      Fi = iM(3324),
      Bi = iM(2067),
      Xi = iM(2252),
      Ii = iM(821),
      Ki = iM(3875),
      qi = iM(119),
      Ti = iM(332);

    function Vi(MM, rM) {
      let {
        shownName: iM,
        lifeformType: OM
      } = MM;
      return null !== iM ? iM : null !== OM ? rM(`lifeform:${(0,Ti.me)(OM)}`) : null
    }
    var ci = iM(4035),
      MO = iM(4011),
      rO = iM(4007),
      iO = iM(4039),
      OO = iM(4032),
      SO = iM(4630),
      jO = iM(35086);

    function aO(MM) {
      let {
        config: rM,
        track: iM,
        xp: OM,
        tileState: SM
      } = MM;
      const {
        t: jM
      } = (0, vM.A)(), PM = (0, OO.j)(rM, OM), nM = (0, OO.l)(rM, OM), QM = PM < rM.tierCount ? PM + 1 : null, LM = Math.min(4, rM.tierCount), mM = Math.max(1, Math.min(PM - 1, rM.tierCount - LM + 1)), HM = null !== QM ? QM - mM : PM - mM, hM = null !== QM && QM > mM ? QM - mM : HM + 1, JM = nM.xpForNextTier - nM.xpIntoTier, dM = nM.xpForNextTier > 0 ? nM.xpIntoTier / nM.xpForNextTier : 1, yM = {
        "--road-cols": LM,
        "--road-fill": HM,
        "--road-chip": hM
      }, lM = [];
      for (let aM = 0; aM < LM; aM++) lM.push(mM + aM);
      return (0, zM.jsxs)("div", {
        className: "SeasonPassRoad",
        style: yM,
        children: [(0, zM.jsxs)("div", {
          className: "SeasonPassRoadColumns",
          children: [(0, zM.jsx)("div", {
            className: "SeasonPassRoadLine"
          }), (0, zM.jsx)("div", {
            className: "SeasonPassRoadLine SeasonPassRoadLineFill"
          }), lM.map((MM => (0, zM.jsxs)("div", {
            className: aM()("SeasonPassRoadColumn", {
              SeasonPassRoadColumnEarning: MM === QM,
              SeasonPassRoadColumnAhead: null !== QM && MM > QM
            }),
            children: [(0, zM.jsx)(SO.d, {
              reward: (0, OO.g)(rM, {
                tier: MM,
                track: iM
              }),
              tileState: SM(MM),
              track: iM,
              size: "small"
            }), (0, zM.jsx)(jO.d, {
              tier: MM,
              state: MM === QM ? "earning" : MM <= PM ? "reached" : "locked",
              progress: dM,
              size: "small"
            })]
          }, MM))), null !== QM && (0, zM.jsx)("span", {
            className: "SeasonPassRoadChip SmallTextBold",
            children: jM("seasonPass:xpToGo", {
              xp: JM
            })
          })]
        }), mM + LM - 1 < rM.tierCount && (0, zM.jsxs)("span", {
          className: "SeasonPassRoadEnd SmallTextBold",
          children: ["\u2026 ", rM.tierCount]
        })]
      })
    }
    const PO = (0, SM.memo)((function() {
      const {
        t: MM
      } = (0, vM.A)(), rM = (0, iO.d)(), iM = (0, rO.g)("listen");
      if (null === rM || rM.seasonPassRoomXp <= 0) return null;
      const OM = "loaded" === iM.status ? iM.view : null,
        SM = OM ? OM.config : (0, ci.g)(Date.now()),
        jM = rO.e.getProvisionalXp(rM),
        aM = rM.seasonPassLifeXp > 0 ? MM("seasonPass:xpThisLife", {
          xp: rM.seasonPassLifeXp
        }) : MM("seasonPass:xpThisGame", {
          xp: rM.seasonPassRoomXp
        });
      return (0, zM.jsxs)("div", {
        className: "SeasonPassRespawnBanner",
        children: [(0, zM.jsx)("div", {
          className: "SeasonPassRespawnBannerGained FullyFancyText",
          children: aM
        }), SM && null !== jM && (0, zM.jsx)(nO, {
          config: SM,
          view: OM,
          xp: jM
        }), rM.seasonPassXpCapped && (0, zM.jsx)("div", {
          className: "SeasonPassRespawnBannerCapped SmallTextBold",
          children: MM("seasonPass:dailyCapReached")
        })]
      })
    }));

    function nO(MM) {
      var rM;
      let {
        config: iM,
        view: OM,
        xp: SM
      } = MM;
      const jM = null !== OM && void 0 !== OM && OM.state.hasSuperRank ? "super" : "free",
        aM = OM ? {
          ...OM.state,
          xp: Math.max(SM, OM.state.xp)
        } : null;
      return (0, zM.jsx)(aO, {
        config: iM,
        track: jM,
        xp: null !== (rM = null === aM || void 0 === aM ? void 0 : aM.xp) && void 0 !== rM ? rM : SM,
        tileState: MM => aM ? (0, MO.i)(iM, aM, {
          tier: MM,
          track: jM
        }) : "locked"
      })
    }
    var QO = iM(3834),
      zO = iM(3837);
    const LO = {
        FallDamage: "respawnPage:diedFallDamage",
        VoidJump: "respawnPage:diedVoid",
        Lava: "respawnPage:diedLava",
        "Toxic Waste": "respawnPage:diedToxicWaste",
        "Poison Potion": "respawnPage:diedPoisoned",
        "Rotten Brain": "respawnPage:diedPoisoned"
      },
      mO = (0, SM.memo)((function() {
        var MM, rM;
        const iM = (0, CM.d)(),
          OM = (0, JM.useNavigatePreserveSearch)(),
          {
            t: jM
          } = (0, vM.A)(),
          {
            loadingOverlayVisible: PM
          } = (0, DM.m)(["loadingOverlayVisible"]),
          QM = (0, oM.y)(),
          [LM, mM] = (0, SM.useState)(!1),
          [HM, dM] = (0, SM.useState)(!0),
          [yM, lM] = (0, SM.useState)(null),
          EM = (0, ui.b)(),
          GM = (0, UM.f)("respawnButtonText"),
          bM = (0, UM.f)("usePlayAgainButton"),
          wM = (0, UM.f)("useRespawnButton"),
          {
            gameNameWithVariation: tM
          } = (0, kM.j)("connectedGame"),
          uM = (0, SM.useRef)(Bi.d.get("secsToRespawn")),
          RM = (0, SM.useRef)(hM.gameBridge.latest("localPlayerAlive")),
          pM = (0, SM.useRef)(Bi.d.get("secsToRespawn")),
          WM = (0, SM.useRef)(Bi.d.get("autoRespawn")),
          sM = (0, SM.useRef)(null),
          ZM = (0, SM.useRef)(0),
          fM = (0, SM.useRef)(0),
          [YM, NM] = (0, SM.useState)(!1),
          AM = (0, SM.useRef)(null),
          xM = (0, SM.useRef)(null),
          FM = (0, SM.useRef)(null);
        (0, UM.c)("secsToRespawn", (MM => {
          console.log("Received new secsToRespawn with", MM, "and current canRespawn value of ", WM.current), pM.current = MM, KM()
        })), (0, UM.c)("autoRespawn", (MM => {
          console.log("Received autorespawn", MM, "current canRespawn value of ", uM.current), WM.current = MM, KM()
        }));
        const BM = MM => {
          console.log("Updating respawn component from localPlayerAliveSet. isAlive:", MM), MM || ZM.current++, RM.current = MM, KM()
        };
        (0, kM.c)("localPlayerAliveSet", BM), (0, nM.d)(Fi.k, (MM => {
          "connected" === MM && !RM.current && WM.current && uM.current <= 0 && (fM.current = 0, qM())
        })), (0, SM.useEffect)((() => {
          const MM = hM.gameBridge.latest("localPlayerAlive");
          MM === RM.current ? (console.log("Updating respawn component from initial mount"), KM()) : BM(MM)
        }), []), (0, SM.useEffect)((() => {
          if (LM) {
            NM(!1);
            const MM = setTimeout((() => {
              NM(!0)
            }), 600);
            return () => {
              clearTimeout(MM)
            }
          }
          return () => {}
        }), [LM]);
        (0, kM.c)("kill", (MM => {
          let {
            killer: rM,
            victim: iM,
            withItem: OM
          } = MM;
          if (!iM.local) return;
          const SM = ((MM, rM) => {
            if (MM.local) {
              const MM = LO[rM];
              return MM ? jM(MM) : null
            }
            const iM = Vi(MM, jM);
            return iM ? jM("respawnPage:killedBy", {
              name: iM
            }) : null
          })(rM, OM);
          SM && lM({
            text: SM,
            deathCount: RM.current ? ZM.current + 1 : ZM.current
          })
        }));
        const XM = () => {
            LM && WM.current && RM.current && YM && mM(!1)
          },
          IM = LM && WM.current && RM.current && YM && !PM;
        (0, nM.d)("usedKeyboard", (() => {
          XM()
        })), (0, zO.c)("respawn", IM, XM);
        const KM = () => {
            dM(pM.current >= 3 || !WM.current), RM.current ? (clearInterval(sM.current), sM.current = null, WM.current ? EM() : mM(!1)) : (mM(!0), uM.current = pM.current, EM(), console.log("Running respawn stats updated", WM.current, uM.current), WM.current && uM.current <= 0 && qM(), clearInterval(sM.current), uM.current > 0 && (sM.current = setInterval((() => {
              uM.current = Math.max(uM.current - 1, 0), EM(), uM.current <= 0 && (clearInterval(sM.current), sM.current = null, Bi.d.get("autoRespawn") && qM())
            }), 1e3)))
          },
          qM = () => {
            if (Date.now() - fM.current > 1e3) {
              const MM = () => {
                hM.gameBridge.send("respawn", null), fM.current = Date.now()
              };
              Bi.d.get("autoRespawn") ? MM() : (0, xi.bb)((() => {
                MM()
              }), "video_respawn")
            }
          },
          TM = (0, SM.useMemo)((() => {
            var MM;
            return null === (MM = (0, Ii.m)(tM)) || void 0 === MM ? void 0 : MM.otherGameLinksOnRespawnPage
          }), [tM]),
          VM = 0 === uM.current,
          cM = (null === yM || void 0 === yM ? void 0 : yM.deathCount) === ZM.current ? yM.text : null,
          Mr = LM && HM && !PM,
          rr = QM && IM && null !== (MM = null === (rM = (0, gM.d)()) || void 0 === rM ? void 0 : rM.getBoundButton("menuConfirm")) && void 0 !== MM ? MM : null,
          ir = MM => VM ? MM : jM("respawnPage:actionInSeconds", {
            action: MM,
            seconds: uM.current
          });
        return (0, zM.jsx)(oi.e, {
          showing: LM,
          globallyUniqueKey: "RespawnComponent",
          alwaysMountChildren: !0,
          children: (0, zM.jsx)(vi.d, {
            show: LM,
            "data-holds-camera-keeper": "",
            children: (0, zM.jsxs)(fi.e, {
              close: () => {
                mM(!1)
              },
              togglePointerLock: !1,
              closeOnPressBackground: !1,
              className: "RespawnBackgroundScreen",
              padLayerKind: WM.current || PM ? null : "death",
              padBackCloses: !1,
              cameraKeeper: !0,
              children: [(0, qi.is99NightsCrazyGamesBundle)() && (0, zM.jsx)(Ai.c, {
                onClick: Xi.e,
                children: jM("homePage:backToGames")
              }), (0, zM.jsxs)("div", {
                className: "RespawnContainer",
                onClick: XM,
                children: [(0, zM.jsxs)("div", {
                  className: "RespawnTop",
                  children: [(0, zM.jsx)("div", {
                    ref: xM,
                    className: "RespawnSideSquareBannerDiv",
                    children: iM[0] > 925 && (0, zM.jsx)(Ni.e, {
                      info: {
                        adType: "square",
                        adId: 1,
                        adAlias: "banner_respawn_1"
                      },
                      sizeInfo: {
                        parentRef: xM
                      },
                      showing: Mr,
                      horizontalAlign: "start",
                      extraContrastBackgroundBox: "left",
                      noFillShowBloxdAdProbability: 0
                    })
                  }), (0, zM.jsx)("div", {
                    className: "RespawnMainContent",
                    children: (0, zM.jsxs)("div", {
                      className: aM()("RespawnMainContentInner", {
                        RespawnMainContentInnerPad: QM
                      }),
                      children: [WM.current && (0, zM.jsxs)("div", {
                        className: "AutoRespawnDeathInfo",
                        children: [(0, zM.jsxs)("div", {
                          className: "AutoRespawnDeathTitle FullyFancyText",
                          children: [(0, zM.jsx)(eM.b, {
                            name: "skull",
                            className: "AutoRespawnDeathIcon"
                          }), jM("respawnPage:youDied")]
                        }), (0, zM.jsxs)("div", {
                          className: "AutoRespawnDeathCause FullyFancyText",
                          children: [null === rr && (RM.current ? jM("respawnPage:pressAnywhereToContinue") : VM ? jM("respawnPage:respawning") : ir(jM("general:respawn"))), null !== rr && (0, zM.jsx)(QO.e, {
                            text: jM("controller:screensPressToContinue", {
                              button: QO.i
                            }),
                            glyph: rr,
                            className: "AutoRespawnContinueGlyph"
                          })]
                        }), cM && (0, zM.jsx)("div", {
                          className: "AutoRespawnStatus",
                          children: cM
                        })]
                      }), !WM.current && (0, zM.jsxs)(zM.Fragment, {
                        children: [(0, zM.jsxs)("div", {
                          className: aM()("RespawnPageButtons", {
                            RespawnPageButtonsVertical: !TM
                          }),
                          children: [bM && (0, zM.jsx)(Ai.p, {
                            className: "RespawnPageButton",
                            padDefaultFocus: !0,
                            onClick: () => {
                              (0, xi.bb)((() => {
                                (0, DM.j)("inGameReplay");
                                const MM = (0, Yi.b)(tM);
                                OM(MM)
                              }), "video_start")
                            },
                            disabled: !VM || !YM,
                            touchPressOn: "pointerup",
                            children: ir(jM("respawnPage:playAgain"))
                          }), wM && (0, zM.jsx)(Ai.e, {
                            className: "RespawnPageButton",
                            onClick: qM,
                            padDefaultFocus: !bM,
                            padBack: "sessionBasedGame:stayInLobby" === GM,
                            disabled: !VM || !YM,
                            touchPressOn: "pointerup",
                            children: ir(jM(GM))
                          }), !(0, qi.is99NightsCrazyGamesBundle)() && (0, zM.jsx)(Ai.J, {
                            className: "RespawnPageButton",
                            onClick: Xi.e,
                            disabled: !VM || !YM,
                            touchPressOn: "pointerup",
                            children: ir(jM("respawnPage:exitGame"))
                          })]
                        }), TM && (0, zM.jsxs)("div", {
                          className: "RespawnPageOtherGames",
                          children: [(0, zM.jsx)("div", {
                            className: "RespawnPanelSectionTitle",
                            children: jM("respawnPage:orTry")
                          }), (0, zM.jsx)("div", {
                            className: "RespawnPageOtherGameThumbnails",
                            children: TM.map((MM => (0, zM.jsx)(Ki.h, {
                              source: {
                                type: "game",
                                gameNameWithVariation: MM
                              },
                              disabled: !VM || !YM,
                              gameWidth: "13rem",
                              hideDescription: !0,
                              hideFavourites: !0,
                              hideCcu: !0,
                              onClick: () => {
                                (0, DM.j)("inGameReplay");
                                const rM = (0, Yi.b)(MM);
                                OM(rM)
                              }
                            }, MM)))
                          })]
                        })]
                      }), LM && (0, zM.jsx)(PO, {})]
                    })
                  }), (0, zM.jsx)("div", {
                    ref: FM,
                    className: "RespawnSideSquareBannerDiv"
                  })]
                }), (0, zM.jsx)("div", {
                  ref: AM,
                  className: "RespawnBottom",
                  children: (0, zM.jsx)(Ni.e, {
                    info: {
                      adType: "leaderboard",
                      adId: 1,
                      adAlias: "banner_respawn_2"
                    },
                    sizeInfo: {
                      parentRef: AM
                    },
                    showing: Mr,
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
    var HO = iM(37546);
    const hO = [{
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
      JO = [{
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
      dO = {
        duration: 300,
        easing: "ease-out",
        fill: "forwards"
      },
      yO = {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
      },
      lO = (0, SM.memo)((function() {
        const MM = (0, SM.useRef)(null),
          rM = (0, SM.useRef)(null);

        function iM(iM) {
          var OM;
          let {
            mO: SM,
            screenPos: jM
          } = iM;
          const aM = MM.current;
          null === (OM = rM.current) || void 0 === OM || OM.cancel(), aM.classList.remove("HitmarkerCrit"), jM ? (aM.style.left = `${jM.x}%`, aM.style.top = `${jM.y}%`) : (aM.style.left = "50%", aM.style.top = "50%"), aM.style.rotate = 16 * (Math.random() - .5) + "deg", SM && aM.classList.add("HitmarkerCrit");
          const PM = aM.animate(SM ? JO : hO, SM ? yO : dO);
          rM.current = PM, PM.onfinish = () => {
            aM.classList.remove("HitmarkerCrit")
          }
        }
        return (0, nM.d)("localGunHitmarker", (MM => {
          let {
            mO: rM
          } = MM;
          iM({
            mO: rM
          })
        })), (0, nM.d)("yourAttackHit", (MM => {
          let {
            mO: rM,
            screenPos: OM
          } = MM;
          iM({
            mO: rM,
            screenPos: DM.d.get("isTouchScreen") ? OM : void 0
          })
        })), (0, nM.d)("sendHitmarker", (MM => {
          let {
            mO: rM,
            screenPos: OM
          } = MM;
          iM({
            mO: rM,
            screenPos: OM
          })
        })), (0, zM.jsxs)("div", {
          ref: MM,
          className: "Hitmarker",
          children: [(0, zM.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, zM.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, zM.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, zM.jsx)("div", {
            className: "HitmarkerBar"
          })]
        })
      }));

    function EO() {
      const MM = (0, SM.useRef)(!0);
      return (0, nM.d)("localBlockMined", (() => {
        KM.e.play("blockMined")
      })), (0, nM.d)("yourAttackHit", (() => {
        KM.e.play("hitLanded")
      })), (0, nM.d)("localGunHitmarker", (() => {
        KM.e.play("hitLanded")
      })), (0, nM.d)("damagedByOtherPlayer", (() => {
        KM.e.play("damageTaken")
      })), (0, kM.c)("localPlayerAliveSet", (rM => {
        !rM && MM.current && KM.e.play("death"), MM.current = rM
      })), null
    }
    var UO = iM(2026),
      GO = iM(37563),
      CO = iM.n(GO),
      eO = iM(2141),
      bO = iM(2129),
      wO = iM(3693),
      tO = iM(35037);
    const gO = Ti._d ? 7e7 : 7e3,
      uO = CO()("#ffffff").alpha(.5).string();

    function RO(MM) {
      const rM = (0, wO.d)(MM);
      return void 0 !== rM && "Gun" === (0, tO.itemTypeOf)(rM)
    }

    function pO(MM) {
      if (!MM) return console.error(`Killfeed colour was ${MM}`), uO;
      try {
        return CO()(MM).alpha(.5).string()
      } catch {
        return console.warn(`Killfeed colour ${MM} is not a colour`), uO
      }
    }
    const WO = (0, SM.memo)((function() {
      const {
        t: MM
      } = (0, vM.A)(), rM = (0, SM.useRef)([]), iM = (0, ui.b)();
      return (0, kM.c)("kill", (function(OM) {
        var SM, jM;
        let {
          killer: aM,
          victim: PM,
          withItem: nM,
          killstreak: QM
        } = OM;
        const zM = rM.current;
        if (zM.length >= 3) {
          const MM = zM.shift();
          clearTimeout(MM.timeout)
        }
        const LM = hM.gameBridge.latest("hiddenPlayerNames"),
          mM = {
            deadName: Vi(PM, MM),
            killerName: Vi(aM, MM),
            isFriend: {
              killer: (0, eO.f)(aM.realName, LM),
              dead: (0, eO.f)(PM.realName, LM)
            },
            withItem: nM,
            wasHeadshot: !1,
            killstreak: QM,
            timeout: setTimeout((() => {
              zM.shift(), iM()
            }), gO),
            reactId: `${null!==(SM=aM.id)&&void 0!==SM?SM:aM.shownName}|${null!==(jM=PM.id)&&void 0!==jM?jM:PM.shownName}|${Date.now()}`,
            killerBackground: pO(aM.colour),
            deadBackground: pO(PM.colour)
          };
        zM.push(mM), iM()
      })), (0, SM.useEffect)((() => {
        const MM = rM.current;
        return () => {
          for (; MM.length > 0;) {
            const {
              timeout: rM
            } = MM.pop();
            clearTimeout(rM)
          }
        }
      }), []), (0, zM.jsx)("div", {
        className: "Killfeed",
        children: rM.current.map((MM => {
          let {
            deadName: rM,
            killerName: iM,
            withItem: OM,
            wasHeadshot: SM,
            killstreak: jM,
            killerBackground: aM,
            deadBackground: PM,
            reactId: nM,
            isFriend: QM
          } = MM;
          return (0, zM.jsxs)("div", {
            className: "IndividualKillWrapper SmallTextLight",
            style: {
              background: `linear-gradient(90deg, ${aM} calc(100% - 10rem), ${PM} 100%)`
            },
            children: [jM >= 2 ? (0, zM.jsx)("div", {
              className: "KillfeedKillstreak",
              children: (0, Ti.T)(jM)
            }) : null, (0, zM.jsx)("div", {
              className: "KillfeedKillerName",
              children: iM
            }), QM.killer && (0, zM.jsx)(bO.b, {}), (0, zM.jsx)("div", {
              className: "KillfeedItem",
              style: {
                height: "5vmin",
                width: RO(OM) ? "7.5vmin" : "5vmin"
              },
              children: (0, zM.jsx)(UO.b, {
                itemName: OM,
                amount: 0,
                gunTransform: "scaleX(-1)",
                itemMarginTop: 0
              })
            }), SM ? (0, zM.jsx)(eM.b, {
              name: "crosshairs",
              className: "3x KillfeedHeadshotIcon"
            }) : null, (0, zM.jsx)("div", {
              className: "KillfeedDeadName",
              children: rM
            }), QM.dead && (0, zM.jsx)(bO.b, {})]
          }, nM)
        }))
      })
    }));
    var sO = iM(37620),
      DO = iM(1146),
      kO = iM.n(DO),
      ZO = iM(313),
      oO = iM(3809),
      fO = iM(37624),
      YO = iM(1327);
    const NO = {},
      AO = (0, SM.memo)((function() {
        const MM = (0, SM.useRef)({}),
          [, rM] = (0, SM.useReducer)((MM => MM + 1), 0);
        (0, nM.d)("setDirectionArrow", (iM => {
          let {
            id: OM,
            position: SM,
            style: jM,
            text: aM,
            dO: PM
          } = iM;
          const nM = MM.current,
            QM = jM || NO,
            zM = aM,
            LM = nM[OM];
          if (!LM) return nM[OM] = {
            position: SM,
            style: QM,
            text: zM,
            shouldShowDistance: PM,
            mN: null,
            chevronElement: null,
            distanceElement: null,
            lastRenderedDist: -1,
            lastDistUpdateTime: 0,
            lastScreenX: NaN,
            lastScreenY: NaN,
            onScreen: void 0
          }, void rM();
          const mM = !kO()(LM.style, QM) || !kO()(LM.text, zM) || LM.shouldShowDistance !== PM;
          LM.position = SM, LM.style = QM, LM.text = zM, LM.shouldShowDistance = PM, mM && rM()
        })), (0, nM.d)("clearDirectionArrow", (iM => {
          let {
            id: OM
          } = iM;
          const SM = MM.current;
          if (null === OM)
            for (const MM in SM) delete SM[MM];
          else delete SM[OM];
          rM()
        })), (0, SM.useEffect)((() => {
          const rM = MM.current,
            iM = (0, YO.x)((() => {
              ! function(MM) {
                const rM = hM.gameBridge.lookup("localPos", null),
                  iM = oO.e - xO,
                  OM = (0, oO.k)() - xO;
                for (const SM in MM) {
                  const jM = MM[SM];
                  if (!jM.mN) continue;
                  const aM = hM.gameBridge.lookup("screenPos", jM.position),
                    PM = aM.x - 50,
                    nM = aM.y - 50;
                  aM.x === jM.lastScreenX && aM.y === jM.lastScreenY || (jM.lastScreenX = aM.x, jM.lastScreenY = aM.y, jM.mN.style.translate = `${aM.x}vw ${aM.y}vh`, jM.chevronElement && (jM.chevronElement.style.rotate = `${Ti.d.fastATan2(nM,PM)}rad`));
                  const QM = Math.abs(PM) < iM && Math.abs(nM) < OM;
                  if (QM !== jM.onScreen && (jM.onScreen = QM, jM.mN.classList.toggle("DirectionArrowOnScreen", QM)), jM.shouldShowDistance && jM.distanceElement) {
                    const MM = jM.position[0] - rM[0],
                      iM = jM.position[1] - rM[1],
                      OM = jM.position[2] - rM[2],
                      SM = Math.round(Math.sqrt(MM * MM + iM * iM + OM * OM));
                    (-1 === jM.lastRenderedDist || (0, fO.c)(SM, jM.lastRenderedDist, jM.lastDistUpdateTime)) && (jM.distanceElement.textContent = `${SM}m`, jM.lastRenderedDist = SM, jM.lastDistUpdateTime = Date.now() + Math.floor(100 * Math.random()))
                  }
                }
              }(rM)
            }));
          return () => {
            iM();
            for (const MM in rM) delete rM[MM]
          }
        }), []);
        const iM = MM.current;
        return (0, zM.jsx)("div", {
          className: "DirectionArrows",
          children: Object.entries(iM).map((MM => {
            var rM;
            let [OM, SM] = MM;
            const jM = null !== (rM = (0, ZO.Ub)(SM.style)) && void 0 !== rM ? rM : "#ffffff";
            return (0, zM.jsxs)("div", {
              ref: MM => {
                iM[OM] && (iM[OM].mN = MM)
              },
              className: "DirectionArrow",
              style: {
                fontSize: SM.style.fontSize,
                opacity: SM.style.opacity
              },
              children: [(0, zM.jsxs)("div", {
                className: "DirectionArrowChevron",
                ref: MM => {
                  iM[OM] && (iM[OM].chevronElement = MM)
                },
                children: [(0, zM.jsxs)("div", {
                  className: "DirectionArrowShadowLayer",
                  children: [(0, zM.jsx)("div", {
                    className: "DirectionArrowBar"
                  }), (0, zM.jsx)("div", {
                    className: "DirectionArrowBar"
                  })]
                }), (0, zM.jsxs)("div", {
                  className: "DirectionArrowBarLayer",
                  children: [(0, zM.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: jM
                    }
                  }), (0, zM.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: jM
                    }
                  })]
                })]
              }), (0, zM.jsx)("div", {
                className: "DirectionArrowMarker",
                style: {
                  background: jM,
                  boxShadow: `0 0 3px rgba(0, 0, 0, 0.8), 0 0 8px ${jM}`
                }
              }), SM.text && (0, zM.jsx)("div", {
                className: "DirectionArrowLabel SmallTextLight",
                style: {
                  color: jM,
                  fontWeight: SM.style.fontWeight,
                  fontStyle: SM.style.fontStyle
                },
                children: (0, zM.jsx)(QM.b, {
                  text: SM.text
                })
              }), SM.shouldShowDistance && (0, zM.jsx)("div", {
                className: "DirectionArrowDistance SmallTextLight",
                ref: MM => {
                  iM[OM] && (iM[OM].distanceElement = MM)
                },
                style: {
                  color: jM,
                  fontWeight: SM.style.fontWeight,
                  fontStyle: SM.style.fontStyle
                }
              })]
            }, OM)
          }))
        })
      })),
      xO = .5;
    const vO = (0, SM.memo)((function(MM) {
        let {
          isTouchScreen: rM
        } = MM;
        return (0, zM.jsxs)("div", {
          className: "BottomRightElements",
          "data-camera-keeper-host": "",
          children: [(0, zM.jsx)(IO, {}), rM && (0, zM.jsx)(mi, {})]
        })
      })),
      FO = {
        readyForNext: 0,
        running: 1
      },
      BO = 50;

    function XO(MM) {
      console.assert(MM.state.current === FO.readyForNext);
      const rM = MM.queue.current,
        iM = MM.foreground.current;
      if (rM.length > 0 && iM) {
        const {
          toFraction: OM,
          toDuration: SM
        } = rM.shift();
        MM.state.current = FO.running, iM.style.transition = `transform ${Math.max(SM-BO,0)}ms linear`, iM.classList.remove("Complete"), MM.timeout.current = setTimeout((() => {
          iM.style.transform = `scaleX(${OM})`, MM.timeout.current = setTimeout((() => {
            1 === OM && iM.classList.add("Complete"), MM.state.current = FO.readyForNext, XO(MM)
          }), Math.max(SM - BO, 0))
        }), BO)
      }
    }

    function IO() {
      const MM = (0, SM.useRef)([]),
        rM = (0, SM.useRef)(FO.readyForNext),
        iM = (0, SM.useRef)(void 0),
        OM = (0, SM.useRef)(null),
        jM = (0, SM.useRef)({
          queue: MM,
          state: rM,
          timeout: iM,
          foreground: OM
        }),
        aM = (0, UM.f)("showProgressBar");
      if ((0, SM.useLayoutEffect)((() => (aM && rM.current === FO.readyForNext && XO(jM.current), () => {
          rM.current = FO.readyForNext, clearTimeout(iM.current), aM && (MM.current.length = 0)
        })), [aM]), (0, nM.d)("progressBarUpdate", (iM => {
          let {
            toFraction: OM,
            toDuration: SM
          } = iM;
          MM.current.push({
            toFraction: OM,
            toDuration: SM
          }), rM.current === FO.readyForNext && XO(jM.current)
        })), !aM) return null;
      return (0, zM.jsx)("div", {
        className: "ProgressBarBackground",
        children: (0, zM.jsx)("div", {
          className: "ProgressBarForeground",
          ref: OM,
          style: {
            width: "15vw",
            transformOrigin: "left center",
            transform: "scaleX(0)"
          }
        })
      })
    }
    var KO = iM(37629),
      qO = iM(2668);
    const TO = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function VO(MM) {
      let {
        classes: rM,
        gone: iM
      } = MM;
      const OM = document.documentElement;
      OM.classList.remove(...rM);
      for (const SM of iM) SM.style.display = "block";
      return () => {
        OM.classList.add(...rM);
        for (const MM of iM) MM.style.display = ""
      }
    }

    function cO(MM) {
      const {
        isTouchScreen: rM
      } = (0, DM.m)(["isTouchScreen"]);
      (0, SM.useLayoutEffect)((() => {
        if (!rM) return;
        const iM = MM.current,
          OM = document.querySelector(`.${KO.g}`),
          SM = MM => {
            const rM = () => {
              const rM = MM.querySelector(qO.f),
                OM = function(MM) {
                  const rM = document.documentElement;
                  return {
                    classes: jr.x.map(Qr.x).filter((MM => rM.classList.contains(MM))),
                    gone: [...MM.querySelectorAll(`.TopRightTrayToggle.${qO.i}`)]
                  }
                }(MM);
              rM && function(MM, rM) {
                (0, qO.y)(MM, rM.classes.length > 0 || rM.gone.length > 0, (() => VO(rM)))
              }(rM, OM);
              const SM = `${Math.floor(function(MM,rM,iM){const OM=document.documentElement,SM=OM.classList.contains((0,Qr.C)("menu")),jM=OM.style.getPropertyValue((0,Qr.K)("menu"));if(!SM&&""===jM)return MM.getBoundingClientRect().left;const aM=rM?(0,qO.l)(rM):()=>{},PM=VO(iM);OM.classList.remove((0,Qr.C)("menu")),OM.style.removeProperty((0,Qr.K)("menu"));const nM=MM.getBoundingClientRect().left;return PM(),aM(),SM&&OM.classList.add((0,Qr.C)("menu")),""!==jM&&OM.style.setProperty((0,Qr.K)("menu"),jM),nM}(MM,rM,OM)-iM.getBoundingClientRect().left-4)}px`;
              iM.style.getPropertyValue("--InGameHeaderMaxWidth") !== SM && iM.style.setProperty("--InGameHeaderMaxWidth", SM)
            };
            rM();
            const SM = new ResizeObserver(rM);
            SM.observe(MM), SM.observe(OM), window.addEventListener("resize", rM);
            const jM = () => TO.map((MM => document.documentElement.style.getPropertyValue(MM))).join();
            let aM = jM();
            const PM = new MutationObserver((() => {
              const MM = jM();
              MM !== aM && (aM = MM, rM())
            }));
            PM.observe(document.documentElement, {
              attributes: !0,
              attributeFilter: ["style"]
            });
            const nM = (0, HM.j)(Qr.f, rM),
              QM = new MutationObserver(rM);
            return QM.observe(MM, {
              childList: !0,
              subtree: !0
            }), () => {
              SM.disconnect(), PM.disconnect(), QM.disconnect(), nM(), window.removeEventListener("resize", rM);
              const iM = MM.querySelector(qO.f);
              iM && (0, qO.l)(iM)
            }
          },
          jM = () => OM.querySelector(".TopRightIconsContainer"),
          aM = jM();
        let PM;
        if (aM) PM = SM(aM);
        else {
          const MM = new MutationObserver((() => {
            const rM = jM();
            rM && (MM.disconnect(), PM = SM(rM))
          }));
          MM.observe(OM, {
            childList: !0,
            subtree: !0
          }), PM = () => {
            MM.disconnect()
          }
        }
        return () => {
          PM(), iM.style.removeProperty("--InGameHeaderMaxWidth")
        }
      }), [rM, MM])
    }
    var MS = iM(4066),
      rS = iM(4061),
      iS = iM(1717),
      OS = iM(1573),
      SS = iM(1722),
      jS = iM(1830),
      aS = iM(1963),
      PS = iM(1144),
      nS = iM(4620),
      QS = iM(1438);
    const zS = 2e4,
      LS = 6e5,
      mS = new Set;

    function HS() {
      const {
        gameEntrySource: MM,
        loadingOverlayVisible: rM
      } = (0, DM.m)(["gameEntrySource", "loadingOverlayVisible"]), iM = (0, kM.f)("connectedGame", (MM => (0, nS.h)(MM) ? MM.lobbyName : null)), OM = (0, kM.j)("localPlayerAlive"), jM = (0, kM.f)("players", (MM => null !== MM.localId && void 0 !== MM.byId[MM.localId])), [aM, PM] = (0, SM.useState)(null);
      return !rM && OM && jM && null !== iM && aM !== iM && PM(iM), (0, SM.useEffect)((() => {
        if (!(0, nS.l)(MM) || null === aM || aM !== iM || mS.has(aM)) return;
        const rM = setTimeout((() => {
          mS.add(aM), async function(MM) {
            const rM = await PS.userContextManager.getCurrentUserContext();
            let iM;
            try {
              iM = (await OS.c.getWorldOwnerFriendOffer(rM)).owner
            } catch (SM) {
              return void console.warn("Couldn't ask who owns this world", SM)
            }
            if (!iM || (0, nS.p)(iM.name, Date.now())) return;
            const OM = iM;
            ! function(MM, rM) {
              const iM = Date.now() + LS;
              let OM = Date.now(),
                SM = 0;
              const jM = () => {
                const aM = Date.now(),
                  PM = hM.gameBridge.latest("connectedGame");
                PM.lobbyName !== MM || aM > iM || (null === PM.websocketUrl ? OM = 1 / 0 : OM === 1 / 0 && !DM.d.get("loadingOverlayVisible") && hM.gameBridge.latest("localPlayerAlive") && (OM = aM + zS), SM = aM < OM || !hM.gameBridge.latest("localPlayerAlive") || DM.d.get("isUiHidden") || DM.d.get("isUiHiddenByCamera") || (0, jS.isTypingInInput)() || DM.d.get("loadingOverlayVisible") || (0, iS.r)() || (0, MS.d)() || (0, QS.m)() ? 0 : SM + 1, SM >= 2 ? rM() : setTimeout(jM, 500))
              };
              jM()
            }(MM, (() => {
              (0, nS.e)(SS.e.getSocialState().friends, OM.name) || ((0, nS.m)(OM.name, Date.now()), aS.k.showWorldOwnerOffer(OM), (0, Mi.reportAnalyticsClick)({
                id: "social.world_owner_offer",
                value: "shown"
              }))
            }))
          }(aM).catch((MM => {
            console.error("Failed to offer the world's owner as a friend", MM)
          }))
        }), zS);
        return () => {
          clearTimeout(rM)
        }
      }), [MM, aM, iM]), null
    }
    var hS = iM(2013);
    const JS = (0, SM.memo)((function(MM) {
        let {
          durationMs: rM,
          endsAtMs: iM
        } = MM;
        const [, OM] = (0, SM.useReducer)((MM => MM + 1), 0), jM = null === iM ? rM : Math.max(iM - Date.now(), 0);
        return (0, SM.useEffect)((() => {
          if (null === iM || jM <= 0) return;
          const MM = setTimeout(OM, jM - 1e3 * (Math.ceil(jM / 1e3) - 1));
          return () => {
            clearTimeout(MM)
          }
        })), (0, zM.jsx)("div", {
          className: "EffectInfoDuration SmallTextLight",
          children: (0, Ti.eb)(jM)
        })
      })),
      dS = (0, SM.memo)((function() {
        const MM = (0, kM.j)("localEffects");
        return (0, zM.jsxs)("div", {
          className: "EffectInfosWrapper",
          children: [Object.entries(MM).map((MM => {
            let [rM, {
              icon: iM,
              displayName: OM,
              durationMs: SM,
              endsAtMs: jM,
              level: aM
            }] = MM;
            return (0, zM.jsxs)("div", {
              className: "EffectInfo",
              children: [(0, zM.jsx)(hS.c, {
                icon: iM,
                className: "EffectInfoIcon"
              }), (0, zM.jsxs)("div", {
                className: "EffectInfoRightSide",
                style: {
                  marginTop: null !== SM ? "0" : "1rem"
                },
                children: [(0, zM.jsxs)("div", {
                  className: "EffectInfoNameWrapper",
                  children: [(0, zM.jsx)(QM.b, {
                    text: null !== OM && void 0 !== OM ? OM : rM,
                    className: "EffectInfoName SmallTextBold"
                  }), aM > 1 && (0, zM.jsx)("div", {
                    className: "EffectInfoName SmallTextBold",
                    children: (0, Ti.T)(aM)
                  })]
                }), null !== SM && (0, zM.jsx)(JS, {
                  durationMs: SM,
                  endsAtMs: jM
                })]
              })]
            }, rM)
          })), (0, zM.jsx)(Di.e, {
            placement: "bottomLeft"
          })]
        })
      }));
    var yS = iM(37638),
      lS = iM(37837),
      ES = iM(181),
      US = iM(3057);
    var GS = iM(3251);

    function CS(MM, rM) {
      (0, SM.useLayoutEffect)((() => {
        let rM, iM;
        const OM = requestAnimationFrame((() => {
          iM = setTimeout((() => {
            iM = void 0;
            const OM = MM();
            rM = "function" === typeof OM ? OM : void 0
          }), 0)
        }));
        return () => {
          var MM;
          cancelAnimationFrame(OM), clearTimeout(iM), null === (MM = rM) || void 0 === MM || MM()
        }
      }), rM)
    }
    const eS = [5, 5, 5],
      bS = [7, 4, 4, 4];

    function wS(MM) {
      return MM.reduce(((MM, rM) => MM + rM), 0)
    }

    function tS(MM, rM, iM, OM, SM) {
      const jM = MM.getContext("2d");
      if (!jM) return null;
      const aM = rM.color,
        PM = `${rM.fontWeight} ${SM}px ${rM.fontFamily}`,
        nM = () => {
          MM.width = iM, MM.height = OM, jM.fillStyle = aM, jM.textAlign = "center", jM.textBaseline = "middle", jM.font = PM
        };
      return nM(), {
        ctx: jM,
        reset: nM
      }
    }
    const gS = (0, SM.memo)((function(MM) {
      let {
        show: rM,
        asText: iM
      } = MM;
      const OM = (0, SM.useRef)(null),
        jM = (0, SM.useRef)(null),
        aM = (0, SM.useRef)(null),
        PM = (0, SM.useRef)(null),
        nM = (0, dM.h)();
      return (0, SM.useEffect)((() => nM.whenShown((() => {
        let MM = 0,
          rM = 0,
          iM = performance.now(),
          OM = 0;
        const SM = (0, YO.x)((() => {
          var SM, jM, nM;
          MM++, rM++;
          const QM = performance.now();
          if (QM - iM < 1e3) return;
          const zM = Math.round(MM / (QM - iM) * 1e3);
          if (aM.current = zM, null === (SM = PM.current) || void 0 === SM || SM.call(PM, zM), MM = 0, iM = QM, zM >= 55) return void(OM = 0);
          if (OM += 1, OM < 15) return;
          const LM = null !== (jM = Oi.g.getItem("decreaseLoadDistPromptDeniedCount")) && void 0 !== jM ? jM : 0,
            [mM, JM] = Bi.d.get("minChunkAddDist");
          if (function(MM, rM) {
              const iM = hM.gameBridge.lookup("jU", null);
              return null !== iM && (iM.horizontal > MM || iM.vertical > rM)
            }(mM, JM) && (null !== (nM = Oi.g.getItem("lastDecreaseLoadDistPromptTime")) && void 0 !== nM ? nM : 0) + 432e5 < Date.now() && LM < 3) {
            Oi.g.setItem("lastDecreaseLoadDistPromptTime", Date.now());
            ii.NotificationProvider.showPromptPopup({
              title: "Lag (low FPS) caused by high chunk load distance. Decrease it?",
              confirmText: "general:yes",
              cancelText: "general:no",
              unlockPointerKey: "chunkLoadDistanceLagPopup"
            }).getResult().then((MM => {
              "notificationTornDown" !== MM && (MM ? (hM.gameBridge.send("setChunkAddDistance", {
                horizontal: mM,
                vertical: JM
              }), Oi.g.setItem("chunkHorizAddDist", mM), Oi.g.setItem("chunkVertAddDist", JM), HM.i.Tz("updatedChunkLoadDist"), Oi.g.setItem("decreaseLoadDistPromptDeniedCount", 0)) : Oi.g.setItem("decreaseLoadDistPromptDeniedCount", LM + 1))
            }))
          }
        }));
        let jM = performance.now();
        rM = 0;
        let nM = null,
          QM = !document.hidden,
          zM = !1;

        function LM() {
          const MM = performance.now() - jM,
            iM = 1e3 * rM / MM;
          QM && !zM && (null === nM && (nM = iM), US.b.setFps(iM, nM)), rM = 0, jM = performance.now()
        }
        let mM = setInterval(LM, GS.b);

        function JM() {
          rM = 0, jM = performance.now(), clearInterval(mM), mM = setInterval(LM, GS.b)
        }

        function dM() {
          const MM = QM;
          QM = !document.hidden, !MM && QM && JM()
        }
        document.addEventListener("visibilitychange", dM);
        const yM = (0, HM.j)(Fi.k, (MM => {
          const rM = zM;
          zM = (0, Fi.o)(MM), rM && !zM && JM()
        }));
        return () => {
          SM(), document.removeEventListener("visibilitychange", dM), yM(), clearInterval(mM)
        }
      }))), [nM]), CS((() => {
        var MM;
        if (iM) {
          const MM = document.createTextNode("");
          jM.current.appendChild(MM);
          const rM = function(MM) {
            return rM => {
              const iM = rM.toString();
              MM.data !== iM && (MM.data = iM)
            }
          }(MM);
          return PM.current = rM, null !== aM.current && rM(aM.current), () => {
            MM.remove(), PM.current = null
          }
        }
        if (!rM || PM.current) return;
        const SM = OM.current,
          nM = window.getComputedStyle(SM.parentElement),
          QM = null !== (MM = window.devicePixelRatio) && void 0 !== MM ? MM : 1,
          zM = parseFloat(nM.fontSize) * QM,
          LM = Math.round(3 * zM),
          mM = Math.round(zM),
          HM = tS(SM, nM, LM, mM, zM);
        if (!HM) return;
        const {
          ctx: hM,
          reset: JM
        } = HM, dM = MM => {
          JM(), hM.fillText(MM.toString(), SM.width / 2, SM.height / 2)
        };
        PM.current = dM, null !== aM.current && dM(aM.current)
      }), [rM, iM]), (0, zM.jsxs)("div", {
        className: "FpsWrapperDiv",
        style: {
          display: rM ? "flex" : "none"
        },
        children: [(0, zM.jsx)("div", {
          className: "FpsLabel",
          children: "FPS"
        }), iM && (0, zM.jsx)("span", {
          className: "FpsText",
          ref: jM
        }), !iM && (0, zM.jsx)("canvas", {
          className: "FpsCanvas",
          ref: OM,
          width: 48,
          height: 16
        })]
      })
    }));

    function uS(MM) {
      return Math.sign(MM) * Math.round(100 * Math.abs(MM))
    }

    function RS(MM) {
      let {
        getCoordinates: rM,
        showChunkCoords: iM,
        columns: OM
      } = MM;
      const jM = (0, SM.useRef)(null);
      return CS((() => {
        var MM;
        const SM = jM.current,
          aM = window.getComputedStyle(SM.parentElement),
          PM = null !== (MM = window.devicePixelRatio) && void 0 !== MM ? MM : 1,
          nM = parseFloat(aM.fontSize) * PM,
          QM = Math.round(nM * wS(OM)),
          zM = Math.round(nM),
          LM = tS(SM, aM, QM, zM, nM);
        if (!LM) return;
        const {
          ctx: mM,
          reset: HM
        } = LM;
        let JM = !0,
          dM = 0,
          yM = 0,
          lM = 0,
          EM = 0,
          UM = 0,
          GM = 0;
        const CM = () => {
          JM = !0
        };
        document.fonts.load(mM.font).then(CM, CM);
        const eM = () => {
          HM(), CM()
        };
        SM.addEventListener("contextrestored", eM);
        let bM = performance.now();
        const wM = (0, YO.E)((() => {
          var MM, jM, aM, PM, QM, zM;
          const LM = performance.now();
          LM - bM >= 1e3 && (bM = LM, HM(), CM());
          const [eM, wM, tM] = rM(), gM = uS(eM), uM = uS(wM), RM = uS(tM);
          let pM = null;
          if (iM) {
            const MM = hM.gameBridge.lookup("localPos", null);
            pM = (0, FM.ab)(MM[0], MM[1], MM[2])
          }
          const WM = null !== (MM = null === (jM = pM) || void 0 === jM ? void 0 : jM[0]) && void 0 !== MM ? MM : 0,
            sM = null !== (aM = null === (PM = pM) || void 0 === PM ? void 0 : PM[1]) && void 0 !== aM ? aM : 0,
            DM = null !== (QM = null === (zM = pM) || void 0 === zM ? void 0 : zM[2]) && void 0 !== QM ? QM : 0;
          if (!JM && gM === dM && uM === yM && RM === lM && WM === EM && sM === UM && DM === GM) return;
          JM = !1, dM = gM, yM = uM, lM = RM, EM = WM, UM = sM, GM = DM;
          const kM = [(gM / 100).toFixed(2), (uM / 100).toFixed(2), (RM / 100).toFixed(2)];
          pM && kM.unshift(`${WM} ${sM} ${DM}`), mM.clearRect(0, 0, SM.width, SM.height);
          const ZM = SM.height / 2;
          let oM = 0;
          for (let rM = 0; rM < kM.length; rM++) {
            const MM = nM * OM[rM];
            mM.fillText(kM[rM], oM + MM / 2, ZM, MM), oM += MM
          }
        }));
        return () => {
          wM(), SM.removeEventListener("contextrestored", eM)
        }
      }), [rM, iM, OM]), (0, zM.jsx)("div", {
        className: "CoordinateUI",
        children: (0, zM.jsx)("canvas", {
          ref: jM,
          className: "CoordinateCanvas",
          width: 16 * wS(OM),
          height: 16
        })
      })
    }
    const pS = (0, SM.memo)((function() {
        const MM = (0, SM.useCallback)((() => {
          const MM = hM.gameBridge.lookup("localPos", null);
          return [MM[0], MM[1], MM[2]]
        }), []);
        return (0, zM.jsx)(RS, {
          getCoordinates: MM,
          showChunkCoords: !1,
          columns: eS
        })
      })),
      WS = (0, SM.memo)((function() {
        const MM = (0, SM.useCallback)((() => {
          const MM = hM.gameBridge.lookup("localPos", null),
            rM = ES.f.HL;
          let iM = MM[0] % rM,
            OM = MM[1] % rM,
            SM = MM[2] % rM;
          return iM < 0 && (iM += rM), OM < 0 && (OM += rM), SM < 0 && (SM += rM), [iM, OM, SM]
        }), []);
        return (0, zM.jsx)(RS, {
          getCoordinates: MM,
          showChunkCoords: !0,
          columns: bS
        })
      }));
    var sS = iM(2172),
      DS = iM(1396),
      kS = iM(1073),
      ZS = iM(1229),
      oS = iM(37699),
      fS = iM(1522),
      YS = iM(3563);
    const NS = (0, SM.memo)((function() {
      const MM = (0, UM.f)("maxAuraLevel");
      return 0 === MM ? null : (0, zM.jsx)(AS, {
        maxLevel: MM
      })
    }));

    function AS(MM) {
      let {
        maxLevel: rM
      } = MM;
      const iM = (0, UM.f)("auraPerLevel"),
        [OM, jM] = (0, SM.useState)((() => {
          var MM;
          return null !== (MM = hM.gameBridge.latest("aura")) && void 0 !== MM ? MM : void 0
        })),
        [aM, PM] = (0, SM.useState)((() => lM(OM))),
        [nM, QM] = (0, SM.useReducer)((MM => MM + 1), 0),
        LM = (0, SM.useRef)(null),
        mM = (0, SM.useRef)([]),
        HM = (0, SM.useRef)({
          width: 0,
          level: 0
        }),
        JM = (0, SM.useRef)(null),
        dM = (0, SM.useRef)(null);

      function yM() {
        if (null !== JM.current) return;
        if (0 === mM.current.length) return;
        const {
          width: MM,
          level: rM
        } = mM.current.shift();
        let iM;
        if (rM !== HM.current.level && rM > HM.current.level !== MM > HM.current.width) {
          const OM = rM > HM.current.level;
          iM = OM ? MM : 100 - MM, LM.current.style.transition = "none", LM.current.style.width = OM ? "0%" : "100%", LM.current.offsetWidth
        } else iM = Math.abs(MM - HM.current.width);
        const OM = 100 * iM / 20;
        LM.current.style.transition = `width ${OM}ms linear`, PM(MM), HM.current = {
          width: MM,
          level: rM
        }, mM.current.length > 0 && (JM.current = setTimeout((() => {
          JM.current = null, yM()
        }), OM))
      }

      function lM(MM) {
        return Math.floor(MM / iM) === rM ? 100 : MM % iM / iM * 100
      }
      return (0, SM.useEffect)((() => () => {
        clearTimeout(JM.current), clearTimeout(dM.current), JM.current = null, dM.current = null
      }), []), (0, kM.c)("aura", (MM => {
        if (dM.current && clearTimeout(dM.current), null === MM) return clearTimeout(JM.current), dM.current = null, JM.current = null, mM.current = [], HM.current = {
          width: 0,
          level: 0
        }, jM(void 0), void PM(0);
        dM.current = setTimeout((() => {
          const rM = Math.floor(OM / iM),
            SM = Math.floor(MM / iM),
            aM = lM(MM);
          MM > OM && oS.e.play("exp_collect", .1).rate(1.6 + .5 * Math.random()), SM > rM ? (SM % 5 === 0 && oS.e.play("exp_levelup", .45).rate(.95 + .1 * Math.random()), QM(), mM.current.push({
            width: 100,
            level: rM
          })) : SM < rM && mM.current.push({
            width: 0,
            level: rM
          }), MM === OM && SM === rM || mM.current.push({
            width: aM,
            level: SM
          }), jM(MM), yM()
        }), 50)
      })), (0, CM.h)(), (0, zM.jsxs)("div", {
        className: "AuraBarWrapper",
        children: [(0, zM.jsxs)("div", {
          className: "AuraBarLabel SmallTextBold",
          children: [(0, zM.jsx)(fS.d, {
            showSignal: nM,
            particleElement: (0, zM.jsx)("img", {
              src: (0, YS.f)("glint"),
              alt: ""
            })
          }), (0, zM.jsx)("img", {
            className: "AuraBarLabelImage",
            src: (0, YS.f)("glint"),
            alt: "aura"
          }), (0, zM.jsx)("div", {
            className: "AuraBarLabelText",
            children: Math.floor((null !== OM && void 0 !== OM ? OM : 0) / iM)
          })]
        }), (0, zM.jsx)("div", {
          className: "AuraBar",
          children: (0, zM.jsx)("div", {
            ref: LM,
            className: "AuraBarBackground",
            style: {
              width: `${aM}%`
            }
          })
        })]
      })
    }
    var xS = iM(2805);

    function vS(MM) {
      MM.timed && (MM.endedAnimation = MM.timed.animation, MM.timed = null)
    }
    const FS = (0, SM.memo)((function() {
      const MM = (0, SM.useRef)(null),
        rM = (0, SM.useRef)(null),
        iM = (0, SM.useRef)({
          timed: null,
          endedAnimation: null
        });
      return (0, nM.d)("middleScreenBarInitiate", (MM => {
        var OM;
        let {
          duration: SM,
          zO: jM,
          horizBarRemOffset: aM
        } = MM;
        const PM = iM.current;
        vS(PM);
        const nM = rM.current;
        if (!(SM >= 0) || !nM) return;
        null === (OM = PM.endedAnimation) || void 0 === OM || OM.cancel(), PM.endedAnimation = null;
        const QM = nM.animate([{
          transform: "scaleX(0)"
        }, {
          transform: "scaleX(1)"
        }], {
          duration: SM,
          fill: "forwards"
        });
        PM.timed = {
          zO: jM,
          horizBarRemOffset: aM,
          animation: QM
        }
      })), (0, nM.d)("middleScreenBarRemove", (() => {
        vS(iM.current)
      })), (0, SM.useEffect)((() => {
        const OM = iM.current;
        let SM = Number.NaN,
          jM = Number.NaN,
          aM = Number.NaN;
        return (0, YO.v)((() => {
          var iM, PM, nM, QM;
          const zM = MM.current,
            LM = rM.current;
          if (!zM || !LM) return;
          null !== (iM = OM.timed) && void 0 !== iM && iM.zO && "finished" === OM.timed.animation.playState && vS(OM), null === (PM = OM.endedAnimation) || void 0 === PM || PM.cancel(), OM.endedAnimation = null;
          let mM = OM.timed ? 1 : 0;
          if (!OM.timed) {
            const MM = hM.gameBridge.lookup("momentumFrac", null);
            mM = MM > 0 ? 1 : 0, MM !== aM && (aM = MM, LM.style.transform = `scaleX(${MM})`)
          }
          const HM = null !== (nM = null === (QM = OM.timed) || void 0 === QM ? void 0 : QM.horizBarRemOffset) && void 0 !== nM ? nM : 0;
          HM === SM && mM === jM || (SM = HM, jM = mM, zM.style.transform = `translateX(calc(-50% + ${HM}rem)) scaleX(${mM})`)
        }))
      }), []), (0, zM.jsx)("div", {
        className: "MiddleScreenBar",
        ref: MM,
        children: (0, zM.jsx)("div", {
          className: "MiddleScreenBarFill",
          ref: rM
        })
      })
    }));
    var BS = iM(5052),
      XS = iM(3032);

    function IS() {
      const {
        t: MM
      } = (0, vM.A)(), rM = (0, nM.e)("serverUpdating", null), iM = (0, XS.e)(250, null !== rM);
      return null === rM || iM - rM > 3e4 ? null : (0, zM.jsxs)("div", {
        className: "UpdateCountdownBanner",
        children: [(0, zM.jsx)("div", {
          className: "UpdateCountdownBannerTitle",
          children: MM("updateWaiting:updatingIn", {
            countdown: (0, BS.q)(rM - iM)
          })
        }), (0, zM.jsx)("div", {
          children: MM("updateWaiting:bringYouBack")
        })]
      })
    }
    var KS = iM(37852),
      qS = iM(2093),
      TS = iM(2111),
      VS = iM(2088);
    const cS = [{
        translationKey: "general:interact"
      }],
      Mj = (0, SM.memo)((function() {
        const MM = (0, UM.f)("crosshairText"),
          {
            interactPrompt: rM,
            blockText: iM,
            neededTool: OM
          } = (0, kM.j)("crosshairTarget"),
          {
            isTouchScreen: jM
          } = (0, DM.m)(["isTouchScreen"]),
          aM = (0, oM.y)(),
          PM = (0, TS.c)("alt-fire");
        (0, SM.useEffect)((() => {
          hM.gameBridge.send("setCrosshairInteractPrompt", !jM || aM ? "key" : "touch")
        }), [jM, aM]);
        const [LM, mM] = (0, SM.useReducer)((MM => MM + 1), 0);
        (0, nM.d)("customBindingsChanged", mM);
        var HM;
        if (null !== rM && (aM && null !== PM || !jM && null !== (0, qS.p)("alt-fire"))) return (0, zM.jsxs)("div", {
          className: "CrosshairText SmallTextBold InteractPrompt",
          children: [(0, zM.jsx)(VS.d, {
            noaAction: "alt-fire"
          }), (0, zM.jsx)(QM.b, {
            text: null !== (HM = rM.label) && void 0 !== HM ? HM : cS
          })]
        });
        let JM = null;
        return null !== iM ? JM = iM : null !== MM && "" !== MM ? JM = MM : null !== OM && (JM = [{
          icon: OM,
          style: {
            opacity: .8
          }
        }, {
          str: " needed",
          style: {
            opacity: .8
          }
        }]), JM ? (0, zM.jsx)("div", {
          className: "CrosshairText SmallTextBold",
          children: (0, zM.jsx)(QM.b, {
            text: JM
          })
        }) : null
      }));
    var rj = iM(2811);
    const ij = (0, SM.memo)((function() {
      var MM;
      const {
        interactPrompt: rM
      } = (0, kM.j)("crosshairTarget"), {
        openInGameMenuName: iM,
        openEverythingMenuName: OM
      } = (0, DM.m)(["openInGameMenuName", "openEverythingMenuName"]), SM = (0, nM.e)("aimingOverlay", "none"), jM = (0, ZM.m)(), aM = (0, rj.b)();
      return null === rM || null !== iM || null !== OM || "sniper" === SM || jM || aM ? null : (0, zM.jsx)(Oj, {
        label: null !== (MM = rM.label) && void 0 !== MM ? MM : cS
      })
    }));

    function Oj(MM) {
      let {
        label: rM
      } = MM;
      const iM = er(NM.e.Interact, !1);
      return (0, SM.useEffect)((() => (HM.i.Tz(Qr.s), () => {
        HM.i.Tz(Qr.s)
      })), []), (0, zM.jsx)("div", {
        ref: iM,
        className: "TouchInteractHit",
        children: (0, zM.jsxs)("div", {
          className: "TouchInteractKey",
          children: [(0, zM.jsx)("span", {
            className: "TouchInteractIcon",
            children: (0, zM.jsx)(eM.b, {
              name: "hand-back-point-up"
            })
          }), (0, zM.jsx)(QM.b, {
            text: rM
          })]
        })
      })
    }
    var Sj = iM(65),
      jj = iM(34940),
      aj = iM(1845),
      Pj = iM(34952);
    const nj = "ScreenshotMode";
    let Qj = [];
    const zj = new Set;

    function Lj(MM) {
      Qj = MM;
      for (const rM of zj) rM(MM)
    }
    const mj = (0, SM.memo)((function() {
      const {
        screenshotMode: MM,
        isTouchScreen: rM,
        openEverythingMenuName: iM,
        openInGameMenuName: OM
      } = (0, DM.m)(["screenshotMode", "isTouchScreen", "openEverythingMenuName", "openInGameMenuName"]), jM = null !== iM || null !== OM, aM = (0, kM.j)("localPlayerAlive");
      return (0, SM.useEffect)((() => {
        !MM || !jM && rM && aM || (0, jj.f)()
      }), [MM, jM, rM, aM]), (0, SM.useEffect)((() => jj.f), []), (0, SM.useEffect)((() => {
        if (MM) return document.documentElement.classList.add(nj), (0, AM.k)(fM.C.ScreenshotMode, fM.C.ScreenshotMode, "screenshotMode"), () => {
          document.documentElement.classList.remove(nj), (0, AM.k)(fM.C.ScreenshotMode, 0, "screenshotMode")
        }
      }), [MM]), MM ? (0, Sj.createPortal)((0, zM.jsx)(Hj, {}), document.body) : null
    }));

    function Hj() {
      const {
        t: MM
      } = (0, vM.A)(), [rM, iM] = (0, SM.useState)(!1), [OM, jM] = (0, SM.useState)(0), [aM, PM] = (0, SM.useState)(null), nM = function() {
        const [MM, rM] = (0, SM.useState)(Qj);
        return (0, SM.useEffect)((() => (zj.add(rM), rM(Qj), () => {
          zj.delete(rM)
        })), []), MM
      }(), QM = (0, SM.useRef)(), LM = (0, SM.useRef)(!1);
      (0, SM.useEffect)((() => () => {
        clearTimeout(QM.current)
      }), []);
      const mM = MM => {
          clearTimeout(QM.current), PM(MM), MM && (QM.current = setTimeout((() => {
            PM(null)
          }), 2e3))
        },
        HM = (rM, iM) => {
          switch (rM) {
            case "saved":
              mM(MM("screenshotMode:saved"));
              break;
            case "denied":
              mM(MM("screenshotMode:denied"));
              break;
            case "needsTap":
              Qj.length >= 8 ? (console.error("Screenshot mode: 8 photos already wait on Save photo"), mM(MM("screenshotMode:saveWaitingFirst"))) : Lj([...Qj, iM])
          }
        },
        hM = rM => {
          console.error("Screenshot mode: the photo wasn't saved", rM), mM(MM("screenshotMode:failed"))
        };
      return (0, zM.jsxs)("div", {
        className: "ScreenshotModeOverlay",
        children: [(0, zM.jsx)("div", {
          className: "ScreenshotModeViewfinder",
          "aria-hidden": !0
        }), (0, zM.jsx)("div", {
          className: "ScreenshotModeCentre",
          "aria-hidden": !0
        }), OM > 0 && (0, zM.jsx)("div", {
          className: "ScreenshotModeFlash"
        }, OM), (0, zM.jsx)("button", {
          type: "button",
          className: "ScreenshotModeButton ScreenshotModeBack",
          "aria-label": MM("screenshotMode:back"),
          onClick: jj.f,
          children: (0, zM.jsx)(eM.b, {
            name: "arrow-left"
          })
        }), (0, zM.jsx)("button", {
          type: "button",
          className: "ScreenshotModeButton ScreenshotModeShutter",
          "aria-label": MM("screenshotMode:takePhoto"),
          "aria-busy": rM,
          onClick: () => {
            (async () => {
              if (!rM) {
                iM(!0), mM(null);
                try {
                  const MM = await (0, jj.h)();
                  jM((MM => MM + 1)), HM(await (0, Pj.f)(MM), MM)
                } catch (MM) {
                  hM(MM)
                } finally {
                  iM(!1)
                }
              }
            })()
          },
          children: (0, zM.jsx)(eM.b, {
            name: "camera-alt"
          })
        }), null !== aM ? (0, zM.jsx)("div", {
          className: "ScreenshotModeNote",
          role: "status",
          children: aM
        }) : nM.length > 0 && (0, zM.jsxs)("button", {
          type: "button",
          className: "ScreenshotModeNote ScreenshotModeSaveNote",
          onClick: () => {
            if (LM.current) return;
            LM.current = !0;
            const [MM] = Qj;
            Lj(Qj.slice(1));
            const rM = rM => {
              console.warn("Screenshot mode: downloading a photo the share sheet didn't take", rM), (0, aj.c)(MM, MM.name), HM("saved", MM)
            };
            (0, Pj.j)(MM).then((iM => {
              "needsTap" === iM ? rM(iM) : HM(iM, MM)
            }), rM).catch(hM).finally((() => {
              LM.current = !1
            }))
          },
          children: [(0, zM.jsx)(eM.b, {
            name: "image"
          }), MM("screenshotMode:savePhoto"), nM.length > 1 && ` (${nM.length})`]
        })]
      })
    }
    var hj = iM(5173),
      Jj = iM(5233);
    const dj = (0, SM.forwardRef)((function(MM, rM) {
        let {
          text: iM,
          className: OM,
          children: SM
        } = MM;
        return iM.hasText ? (0, zM.jsx)("div", {
          ref: rM,
          className: aM()("HudTextPanel", OM, {
            NoBackground: !iM.showBackground
          }),
          children: null !== SM && void 0 !== SM ? SM : (0, zM.jsx)(QM.b, {
            text: iM.content
          })
        }) : null
      })),
      yj = (0, SM.memo)((function() {
        const MM = (0, UM.i)("middleTextTop"),
          [rM, iM] = (0, SM.useState)(null),
          OM = (0, KO.h)(rM);
        return MM.hasText ? (0, zM.jsx)("div", {
          className: aM()("MiddleTextTopContainer", {
            MiddleTextTopBelow: OM
          }),
          children: (0, zM.jsx)(dj, {
            ref: iM,
            className: "MiddleTextTop",
            text: MM
          })
        }) : null
      })),
      lj = (0, SM.memo)((function() {
        const MM = (0, UM.b)();
        return (0, zM.jsx)(zM.Fragment, {
          children: MM.map(((MM, rM) => (0, zM.jsx)(dj, {
            className: "HeaderChip",
            text: MM
          }, rM)))
        })
      }));
    var Ej = iM(2992),
      Uj = iM(4973);
    const Gj = (0, SM.memo)((function() {
      const {
        t: MM
      } = (0, vM.A)(), [rM, iM] = (0, SM.useState)(!1), OM = (0, SM.useRef)(!1), jM = function(MM) {
        let {
          gameNameWithVariation: rM,
          lobbyName: iM
        } = MM;
        if ((0, kS.m)(rM)) return Cj;
        if ((0, ZS.J)(iM)) return ej;
        return null
      }((0, kM.j)("connectedGame"));
      if (!jM || rM) return null;
      const aM = Uj.b[jM.target];
      return (0, zM.jsx)(GM.i, {
        tooltipInner: (0, zM.jsx)("div", {
          children: MM(aM.reportButtonTooltip)
        }),
        children: (0, zM.jsx)("div", {
          children: (0, zM.jsx)(Ai.R, {
            onClick: () => {
              OM.current || (OM.current = !0, (0, Uj.f)(jM.reportPolicyIds, aM).then((MM => {
                null !== MM && void 0 !== MM && MM.selectedPolicyId && (hM.gameBridge.send("reportLobbyOrGame", {
                  target: jM.target,
                  lQ: MM.selectedPolicyId,
                  details: MM.EQ
                }), iM(!0))
              })).finally((() => {
                OM.current = !1
              })))
            }
          })
        })
      })
    }));
    const Cj = {
        target: "customGame",
        reportPolicyIds: Ej.h
      },
      ej = {
        target: "lobby",
        reportPolicyIds: Ej.j
      };
    var bj = iM(2542),
      wj = iM(1135),
      tj = iM(9383),
      gj = iM(37864),
      uj = iM(37876),
      Rj = iM(37885),
      pj = iM(37891),
      Wj = iM(37872);
    let sj = !1;
    async function Dj(MM, rM) {
      var iM, OM;
      const {
        files: SM
      } = rM, jM = SM.replayKey();
      if (null === jM) return "none";
      if (sj) throw new Error(Wj.c.saveBusy.text);
      const aM = null !== (iM = null === (OM = SM.saveRefusal) || void 0 === OM ? void 0 : OM.call(SM)) && void 0 !== iM ? iM : null;
      if (null !== aM) throw new Error(aM);
      sj = !0;
      try {
        return await async function(MM, rM, iM) {
          const {
            files: OM
          } = rM, SM = () => OM.replayKey() === iM, jM = (MM, rM) => {
            SM() && OM.markSaved(MM, rM)
          };
          let aM = null;
          if (rM.pickerSupported()) {
            try {
              if (aM = await rM.chooseFile(MM ? null : OM.fileHandle()), null === aM) return "Ti"
            } catch (nM) {
              rM.onFallback(nM)
            }
            if (!SM()) throw new Error(Wj.c.saveClosed.text)
          }
          const PM = await OM.encode();
          if (null === PM) {
            if (null !== aM) throw new Error(Wj.c.saveClosed.text);
            return "none"
          }
          if (null !== aM) try {
            return await rM.write(aM, PM), jM(aM), "written"
          } catch (nM) {
            rM.onFallback(nM)
          }
          return jM(null, rM.download(PM)), "downloaded"
        }(MM, rM, jM)
      } finally {
        sj = !1
      }
    }
    var kj = iM(37913),
      Zj = iM(4923);
    const oj = [1, 2, 4, 8, 16, 32, 64];

    function fj(MM, rM) {
      return Math.max(0, Math.min(MM, rM))
    }

    function Yj(MM, rM, iM) {
      return iM <= rM ? 0 : (MM - rM) / (iM - rM) * 100
    }

    function Nj(MM, rM, iM) {
      const OM = iM - rM;
      return Math.round(rM + MM / 100 * OM)
    }

    function Aj(MM, rM) {
      const iM = Math.floor(MM / rM / 60),
        OM = Math.floor(MM / rM % 60),
        SM = MM % rM;
      return `${iM.toString().padStart(2,"0")}:${OM.toString().padStart(2,"0")}:${SM.toString().padStart(2,"0")}`
    }

    function xj(MM) {
      return Number.isInteger(MM) || oj.includes(MM) ? `${Math.round(MM)}\xd7` : `${MM.toFixed(1)}\xd7`
    }

    function vj(MM, rM) {
      const iM = oj.indexOf(MM);
      if (-1 !== iM) return "in" === rM ? oj[Math.min(iM + 1, oj.length - 1)] : oj[Math.max(iM - 1, 0)];
      if ("in" === rM) {
        for (const rM of oj)
          if (rM >= MM) return rM;
        return MM
      }
      for (let OM = oj.length - 1; OM >= 0; OM--)
        if (oj[OM] <= MM) return oj[OM];
      return oj[0]
    }

    function Fj(MM, rM) {
      const iM = rM.getBoundingClientRect();
      if (iM.width <= 0) return 0;
      const OM = (MM - iM.left) / iM.width * 100;
      return Math.max(0, Math.min(100, OM))
    }

    function Bj(MM, rM) {
      return rM <= 0 ? 0 : MM / rM * 100
    }

    function Xj(MM, rM, iM) {
      const OM = [];
      let SM = Math.ceil(MM / iM) * iM;
      for (; SM <= rM;) OM.push(SM), SM += iM;
      return OM
    }
    var Ij = iM(37922);
    const Kj = [{
        label: "Linear",
        easing: Ij.j
      }, {
        label: "Ease",
        easing: [.25, .1, .25, 1]
      }, {
        label: "Ease In",
        easing: Ij.d
      }, {
        label: "Ease Out",
        easing: Ij.f
      }, {
        label: "Ease In Out",
        easing: Ij.c
      }],
      qj = 200,
      Tj = 150;

    function Vj(MM) {
      const rM = MM => Number(MM.toFixed(3)).toString();
      return `cubic-bezier(${rM(MM[0])}, ${rM(MM[1])}, ${rM(MM[2])}, ${rM(MM[3])})`
    }

    function cj(MM, rM) {
      return {
        cx: 25 + MM * Tj,
        cy: 25 + (1 - rM) * Tj
      }
    }

    function Ma(MM, rM, iM) {
      const OM = MM - iM.left,
        SM = rM - iM.top;
      return {
        x: Ti.d.clamp((OM - 25) / Tj, 0, 1),
        y: Ti.d.clamp(1 - (SM - 25) / Tj, -1, 2)
      }
    }

    function ra(MM, rM, iM, OM, SM) {
      return {
        x: (0, Ij.s)(MM, iM, SM),
        y: (0, Ij.s)(rM, OM, SM)
      }
    }
    const ia = (0, SM.memo)((function(MM) {
      let {
        value: rM,
        onChange: iM
      } = MM;
      const OM = (0, SM.useRef)(null),
        jM = (0, SM.useRef)(null),
        [aM, PM] = (0, SM.useState)(null),
        nM = (0, SM.useCallback)((() => {
          const MM = OM.current;
          if (!MM) return;
          const iM = MM.getContext("2d");
          if (!iM) return;
          const SM = window.devicePixelRatio || 1;
          MM.width = qj * SM, MM.height = qj * SM, iM.setTransform(SM, 0, 0, SM, 0, 0), iM.clearRect(0, 0, qj, qj), iM.fillStyle = "rgba(38, 52, 93, 0.85)", iM.fillRect(0, 0, qj, qj), iM.beginPath();
          const jM = cj(0, 0),
            PM = cj(1, 1);
          iM.moveTo(jM.cx, jM.cy), iM.lineTo(PM.cx, PM.cy), iM.strokeStyle = "rgba(164, 164, 164, 0.35)", iM.setLineDash([3, 3]), iM.stroke(), iM.setLineDash([]);
          const [nM, QM, zM, LM] = rM, mM = cj(nM, QM), HM = cj(zM, LM);
          iM.strokeStyle = "rgba(252, 211, 115, 0.55)", iM.lineWidth = 1.5, iM.beginPath(), iM.moveTo(jM.cx, jM.cy), iM.lineTo(mM.cx, mM.cy), iM.moveTo(PM.cx, PM.cy), iM.lineTo(HM.cx, HM.cy), iM.stroke(), iM.strokeStyle = "#fcd373", iM.lineWidth = 2, iM.beginPath();
          for (let rM = 0; rM <= 50; rM++) {
            const MM = ra(nM, QM, zM, LM, rM / 50),
              OM = cj(MM.x, MM.y);
            0 === rM ? iM.moveTo(OM.cx, OM.cy) : iM.lineTo(OM.cx, OM.cy)
          }
          iM.stroke();
          const hM = (MM, rM, OM) => {
            iM.beginPath(), iM.arc(MM, rM, OM ? 6 : 5, 0, 2 * Math.PI), iM.fillStyle = OM ? "#ffb914" : "#fcd373", iM.fill(), iM.strokeStyle = "#1a1f2e", iM.lineWidth = 1.5, iM.stroke()
          };
          hM(mM.cx, mM.cy, "p1" === aM), hM(HM.cx, HM.cy, "p2" === aM)
        }), [aM, rM]);
      (0, SM.useEffect)((() => {
        nM()
      }), [nM]);
      const QM = (0, SM.useCallback)(((MM, SM) => {
          const aM = OM.current,
            PM = jM.current;
          if (!aM || !PM) return;
          const nM = aM.getBoundingClientRect(),
            {
              x: QM,
              y: zM
            } = Ma(MM, SM, nM);
          iM("p1" === PM ? [QM, zM, rM[2], rM[3]] : [rM[0], rM[1], QM, zM])
        }), [iM, rM]),
        LM = (0, SM.useCallback)((MM => {
          const iM = OM.current;
          if (!iM) return;
          const SM = iM.getBoundingClientRect();
          let {
            x: aM,
            y: nM
          } = Ma(MM.clientX, MM.clientY, SM);
          aM = Ti.d.clamp(aM, 0, 1), nM = Ti.d.clamp(nM, 0, 1);
          const [zM, LM, mM, HM] = rM.map((MM => Ti.d.clamp(MM, 0, 1))), hM = Math.hypot(aM - zM, nM - LM), JM = Math.hypot(aM - mM, nM - HM), dM = hM <= JM ? "p1" : "p2";
          ("p1" === dM ? hM : JM) > .12 || (jM.current = dM, PM(dM), iM.setPointerCapture(MM.pointerId), QM(MM.clientX, MM.clientY))
        }), [QM, rM]),
        mM = (0, SM.useCallback)((MM => {
          jM.current && QM(MM.clientX, MM.clientY)
        }), [QM]),
        HM = (0, SM.useCallback)((MM => {
          jM.current = null, PM(null), MM.currentTarget.hasPointerCapture(MM.pointerId) && MM.currentTarget.releasePointerCapture(MM.pointerId)
        }), []);
      return (0, zM.jsxs)("div", {
        className: "CubicBezierEasingEditor",
        children: [(0, zM.jsx)("canvas", {
          ref: OM,
          className: "CubicBezierEasingEditorCanvas",
          style: {
            width: qj,
            height: qj
          },
          onPointerDown: LM,
          onPointerMove: mM,
          onPointerUp: HM,
          onPointerCancel: HM
        }), (0, zM.jsx)("span", {
          className: "CubicBezierEasingEditorReadout",
          children: Vj(rM)
        })]
      })
    }));
    var Oa = iM(1765),
      Sa = iM(1750);
    const ja = 12;

    function aa(MM) {
      return {
        left: MM.left + MM.width / 2,
        top: MM.top - 8
      }
    }

    function Pa(MM, rM) {
      const [iM, OM] = (0, SM.useState)(null);
      return (0, SM.useLayoutEffect)((() => {
        const iM = MM.current;
        if (!iM) return;
        const {
          width: SM,
          height: jM
        } = iM.getBoundingClientRect();
        OM(function(MM, rM, iM) {
          const OM = window.innerWidth,
            SM = window.innerHeight,
            jM = rM / 2;
          let aM = MM.left + MM.width / 2;
          aM = Math.max(ja + jM, Math.min(aM, OM - ja - jM));
          const PM = MM.top - 8 - ja,
            nM = SM - MM.bottom - 8 - ja,
            QM = PM < iM && nM >= PM;
          let zM;
          QM ? (zM = MM.bottom + 8, zM + iM > SM - ja && (zM = SM - ja - iM), zM = Math.max(ja, zM)) : (zM = MM.top - 8, zM - iM < ja && (zM = ja + iM));
          return {
            left: aM,
            top: zM,
            placeBelow: QM
          }
        }(rM, SM, jM))
      }), [rM, MM]), iM
    }

    function na(MM, rM, iM) {
      (0, SM.useEffect)((() => (0, Sa.b)("pointerdown", (OM => {
        var SM, jM;
        const aM = OM.target;
        aM instanceof Node && (null !== (SM = MM.current) && void 0 !== SM && SM.contains(aM) || null !== iM && void 0 !== iM && null !== (jM = iM.current) && void 0 !== jM && jM.contains(aM) || (0, Oa.n)(aM) || rM())
      }))), [iM, rM, MM])
    }

    function Qa(MM) {
      let {
        label: rM,
        value: iM,
        onChange: OM
      } = MM;
      return (0, zM.jsxs)("div", {
        className: "ReplayKeyframePopoverVec3",
        children: [(0, zM.jsx)("span", {
          className: "ReplayKeyframePopoverVec3Label",
          children: rM
        }), (0, zM.jsx)("div", {
          className: "ReplayKeyframePopoverVec3Inputs",
          children: ["X", "Y", "Z"].map(((MM, rM) => (0, zM.jsxs)("label", {
            className: "ReplayKeyframePopoverAxis",
            children: [(0, zM.jsx)("span", {
              children: MM
            }), (0, zM.jsx)("input", {
              type: "number",
              step: "any",
              value: iM[rM],
              onChange: MM => {
                const SM = Number.parseFloat(MM.target.value);
                if (Number.isNaN(SM)) return;
                const jM = [iM[0], iM[1], iM[2]];
                jM[rM] = SM, OM(jM)
              }
            })]
          }, MM)))
        })]
      })
    }
    const za = (0, SM.memo)((function(MM) {
        var rM, iM, OM;
        let {
          keyframe: jM,
          anchor: PM,
          hasOutgoingSegment: nM,
          onClose: QM,
          onApply: LM,
          onDelete: mM,
          onUseCurrentCamera: HM
        } = MM;
        const hM = (0, SM.useRef)(null),
          JM = Pa(hM, PM.rect),
          [dM, yM] = (0, SM.useState)((() => [jM.position[0], jM.position[1], jM.position[2]])),
          [lM, EM] = (0, SM.useState)((() => [jM.direction[0], jM.direction[1], jM.direction[2]])),
          [UM, GM] = (0, SM.useState)((() => jM.easing));
        (0, SM.useEffect)((() => {
          yM([jM.position[0], jM.position[1], jM.position[2]]), EM([jM.direction[0], jM.direction[1], jM.direction[2]]), GM(jM.easing)
        }), [jM]), na(hM, QM);
        const CM = (0, SM.useCallback)((() => {
            LM({
              bL: jM.bL,
              position: dM,
              direction: lM,
              easing: UM
            }), QM()
          }), [lM, UM, jM.bL, LM, QM, dM]),
          eM = (0, SM.useCallback)((() => {
            mM(jM.bL), QM()
          }), [jM.bL, mM, QM]),
          bM = (0, SM.useCallback)((() => {
            const MM = HM();
            MM && (yM([MM.position[0], MM.position[1], MM.position[2]]), EM([MM.direction[0], MM.direction[1], MM.direction[2]]))
          }), [HM]),
          wM = aa(PM.rect);
        return (0, zM.jsxs)("div", {
          ref: hM,
          className: aM()("ReplayViewerPopover ReplayKeyframePopover", {
            Below: null !== (rM = null === JM || void 0 === JM ? void 0 : JM.placeBelow) && void 0 !== rM && rM,
            Positioned: null !== JM
          }),
          style: {
            left: `${null!==(iM=null===JM||void 0===JM?void 0:JM.left)&&void 0!==iM?iM:wM.left}px`,
            top: `${null!==(OM=null===JM||void 0===JM?void 0:JM.top)&&void 0!==OM?OM:wM.top}px`
          },
          onPointerDown: MM => {
            MM.stopPropagation()
          },
          children: [(0, zM.jsxs)("div", {
            className: "ReplayKeyframePopoverHeader",
            children: [(0, zM.jsx)("span", {
              className: "ReplayKeyframePopoverTitle",
              children: "Camera keyframe"
            }), (0, zM.jsxs)("span", {
              className: "ReplayKeyframePopoverTick",
              children: ["Tick ", PM.bL]
            })]
          }), (0, zM.jsx)(Qa, {
            label: "Position",
            value: dM,
            onChange: yM
          }), (0, zM.jsx)(Qa, {
            label: "Direction",
            value: lM,
            onChange: EM
          }), nM && (0, zM.jsxs)("div", {
            className: "ReplayKeyframePopoverEasing",
            children: [(0, zM.jsx)("span", {
              className: "ReplayKeyframePopoverEasingLabel",
              children: "Easing to next"
            }), (0, zM.jsx)("div", {
              className: "ReplayKeyframePopoverEasingPresets",
              children: Kj.map((MM => {
                const rM = (iM = UM, OM = MM.easing, iM[0] === OM[0] && iM[1] === OM[1] && iM[2] === OM[2] && iM[3] === OM[3]);
                var iM, OM;
                return (0, zM.jsx)(Ai.V, {
                  className: aM()("ReplayKeyframePopoverPreset", {
                    Active: rM
                  }),
                  onClick: () => {
                    GM(MM.easing)
                  },
                  children: MM.label
                }, MM.label)
              }))
            }), (0, zM.jsx)(ia, {
              value: UM,
              onChange: GM
            })]
          }), (0, zM.jsxs)("div", {
            className: "ReplayKeyframePopoverActions",
            children: [(0, zM.jsx)(Ai.e, {
              className: "ReplayViewerCompactButton",
              onClick: bM,
              children: "Use current view"
            }), (0, zM.jsx)(Ai.p, {
              className: "ReplayViewerCompactButton",
              onClick: CM,
              children: "Apply"
            }), (0, zM.jsx)(Ai.J, {
              className: "ReplayViewerCompactButton",
              onClick: eM,
              children: "Delete"
            })]
          })]
        })
      })),
      La = (0, SM.memo)((function(MM) {
        var rM, iM, OM;
        let {
          anchor: jM,
          hasPlaybackMark: PM,
          onClose: nM,
          onMark: QM,
          onZoom: LM,
          onCrop: mM,
          onDeleteKeyframes: HM,
          onClearMark: hM
        } = MM;
        const JM = (0, SM.useRef)(null),
          dM = Pa(JM, jM.rect),
          yM = aa(jM.rect),
          lM = {
            startTick: jM.startTick,
            endTick: jM.endTick
          },
          EM = jM.endTick > jM.startTick;
        return na(JM, nM), (0, zM.jsx)("div", {
          ref: JM,
          className: aM()("ReplayViewerPopover ReplayTimelineSelectionPopover", {
            Below: null !== (rM = null === dM || void 0 === dM ? void 0 : dM.placeBelow) && void 0 !== rM && rM,
            Positioned: null !== dM
          }),
          style: {
            left: `${null!==(iM=null===dM||void 0===dM?void 0:dM.left)&&void 0!==iM?iM:yM.left}px`,
            top: `${null!==(OM=null===dM||void 0===dM?void 0:dM.top)&&void 0!==OM?OM:yM.top}px`
          },
          onPointerDown: MM => {
            MM.stopPropagation()
          },
          children: (0, zM.jsxs)("div", {
            className: "ReplayTimelineSelectionPopoverActions",
            children: [(0, zM.jsx)(Ai.p, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                QM(lM)
              },
              disabled: !EM,
              children: (0, zM.jsx)("span", {
                children: " Play range "
              })
            }), (0, zM.jsx)(Ai.e, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                LM(lM)
              },
              children: (0, zM.jsx)("span", {
                children: " Zoom "
              })
            }), (0, zM.jsx)(Ai.V, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                mM(lM)
              },
              disabled: !EM,
              children: (0, zM.jsx)("span", {
                children: " Crop "
              })
            }), (0, zM.jsx)(Ai.V, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                HM(lM)
              },
              children: (0, zM.jsx)("span", {
                children: " Delete all keyframes "
              })
            }), PM && (0, zM.jsx)(Ai.V, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                hM()
              },
              children: (0, zM.jsx)("span", {
                children: " Clear range "
              })
            })]
          })
        })
      })),
      ma = (0, SM.memo)((function(MM) {
        var rM, iM;
        let {
          maxTick: OM,
          displayTick: jM,
          zk: PM,
          cameraKeyframes: nM,
          playbackMark: QM,
          onSeek: LM,
          onPause: mM,
          onScrubTickChange: HM,
          onMoveCameraKeyframe: hM,
          onUpdateCameraKeyframe: JM,
          onDeleteCameraKeyframe: dM,
          onUseCurrentCamera: yM,
          onMarkRange: lM,
          onCropRange: EM,
          onDeleteKeyframesInRange: UM,
          onClearMark: GM,
          zoomLevel: CM,
          onZoomLevelChange: eM
        } = MM;
        const bM = (0, SM.useRef)(null),
          wM = (0, SM.useRef)(null),
          tM = (0, SM.useRef)(!1),
          gM = (0, SM.useRef)(!1),
          uM = (0, SM.useRef)(CM),
          RM = (0, SM.useRef)(null),
          pM = (0, SM.useRef)(null),
          WM = (0, SM.useRef)(null),
          sM = (0, SM.useRef)(null),
          [DM, kM] = (0, SM.useState)(null),
          [ZM, oM] = (0, SM.useState)(jM),
          [fM, YM] = (0, SM.useState)(null),
          [NM, AM] = (0, SM.useState)(null),
          [xM, vM] = (0, SM.useState)(null),
          [FM, BM] = (0, SM.useState)(null),
          XM = (0, SM.useMemo)((() => nM.map((MM => MM.bL))), [nM]),
          IM = null !== DM && void 0 !== DM ? DM : jM,
          {
            viewStart: KM,
            viewEnd: qM
          } = (0, SM.useMemo)((() => function(MM) {
            const rM = MM.maxTick + 1,
              iM = Math.max(1, Math.ceil(rM / MM.zoomLevel)),
              OM = Math.floor(iM / 2);
            let SM = MM.centerTick - OM;
            return SM = Math.max(0, Math.min(SM, MM.maxTick - iM + 1)), {
              viewStart: SM,
              viewEnd: Math.min(MM.maxTick, SM + iM - 1)
            }
          }({
            maxTick: OM,
            zoomLevel: CM,
            centerTick: ZM
          })), [OM, CM, ZM]);
        (0, SM.useEffect)((() => {
          if (null !== DM || null !== pM.current || null !== WM.current || null !== sM.current) return;
          if (tM.current) return void(tM.current = !1);
          if (gM.current) return void(gM.current = !1);
          const MM = uM.current !== CM;
          uM.current = CM, MM && oM(jM)
        }), [CM, jM, DM]);
        const TM = (0, SM.useCallback)((MM => {
            let rM = fj(MM, OM);
            return QM && (rM = Math.max(QM.inTick, Math.min(rM, QM.outTick))), rM
          }), [OM, QM]),
          VM = (0, SM.useCallback)(((MM, rM) => {
            const iM = TM(MM);
            LM(iM), rM && oM(iM)
          }), [TM, LM]),
          cM = (0, SM.useCallback)(((MM, rM) => {
            const iM = TM(MM);
            kM(iM), HM(iM), VM(iM, rM)
          }), [TM, VM, HM]),
          Mr = (0, SM.useCallback)((() => {
            kM((MM => (null !== MM && oM(MM), null))), HM(null)
          }), [HM]),
          rr = (0, SM.useCallback)((() => {
            vM(null), BM(null)
          }), []),
          ir = (0, SM.useCallback)((MM => {
            const rM = bM.current;
            if (!rM) return 0;
            return fj(Nj(Fj(MM, rM), KM, qM), OM)
          }), [OM, qM, KM]),
          Or = (0, SM.useCallback)((MM => {
            const rM = wM.current;
            if (!rM) return 0;
            return fj(Nj(Fj(MM, rM), 0, OM), OM)
          }), [OM]),
          Sr = (0, SM.useMemo)((() => {
            if (!fM) return [...XM];
            const MM = XM.filter((MM => MM !== fM.fromTick));
            return MM.push(fM.previewTick), MM.sort(((MM, rM) => MM - rM)), MM
          }), [XM, fM]),
          jr = (0, SM.useMemo)((() => {
            var MM;
            return NM && null !== (MM = nM.find((MM => MM.bL === NM.bL))) && void 0 !== MM ? MM : null
          }), [nM, NM]),
          ar = (0, SM.useMemo)((() => !!jr && nM.some((MM => MM.bL > jr.bL))), [nM, jr]);
        (0, SM.useEffect)((() => {
          NM && !jr && AM(null)
        }), [NM, jr]), (0, SM.useEffect)((() => {
          if (!FM) return () => {};
          const MM = MM => {
            "Escape" === MM.key && rr()
          };
          return window.addEventListener("keydown", MM), () => {
            window.removeEventListener("keydown", MM)
          }
        }), [rr, FM]);
        const Pr = (0, SM.useCallback)(((MM, rM) => {
            rr(), mM(), LM(MM, {
              ignorePlaybackMark: !0
            }), AM({
              bL: MM,
              rect: rM.getBoundingClientRect()
            })
          }), [rr, mM, LM]),
          nr = (0, SM.useCallback)(((MM, rM) => iM => {
            0 === iM.button && (iM.stopPropagation(), AM(null), rr(), mM(), RM.current = {
              fromTick: MM,
              startX: iM.clientX,
              startY: iM.clientY,
              didDrag: !1,
              track: rM
            }, YM({
              fromTick: MM,
              previewTick: MM,
              track: rM
            }), iM.currentTarget.setPointerCapture(iM.pointerId))
          }), [rr, mM]),
          Qr = (0, SM.useCallback)((MM => {
            if (!fM) return;
            MM.stopPropagation();
            const rM = RM.current;
            if (rM && !rM.didDrag) {
              const iM = MM.clientX - rM.startX,
                OM = MM.clientY - rM.startY;
              Math.hypot(iM, OM) > 5 && (rM.didDrag = !0)
            }
            const iM = "detail" === fM.track ? ir(MM.clientX) : Or(MM.clientX);
            iM !== fM.previewTick && YM({
              ...fM,
              previewTick: iM
            })
          }), [fM, ir, Or]),
          zr = (0, SM.useCallback)((MM => {
            if (!fM) return;
            MM.stopPropagation();
            const rM = RM.current,
              iM = "detail" === fM.track ? ir(MM.clientX) : Or(MM.clientX);
            rM && !rM.didDrag ? Pr(rM.fromTick, MM.currentTarget) : iM !== fM.fromTick && hM(fM.fromTick, iM), YM(null), RM.current = null, MM.currentTarget.releasePointerCapture(MM.pointerId)
          }), [fM, hM, Pr, ir, Or]),
          Lr = (0, SM.useCallback)((MM => {
            if (0 !== MM.button) return;
            AM(null), mM();
            const rM = ir(MM.clientX);
            pM.current = {
              pointerId: MM.pointerId,
              startX: MM.clientX,
              startY: MM.clientY,
              startTick: rM,
              currentTick: rM,
              didSelect: !1
            }, vM(null), BM(null), MM.currentTarget.setPointerCapture(MM.pointerId)
          }), [mM, ir]),
          mr = (0, SM.useCallback)((MM => {
            const rM = pM.current;
            if (!rM || rM.pointerId !== MM.pointerId) return;
            const iM = ir(MM.clientX);
            if (rM.currentTick = iM, !rM.didSelect) {
              const iM = MM.clientX - rM.startX,
                OM = MM.clientY - rM.startY;
              if (Math.hypot(iM, OM) <= 5) return;
              rM.didSelect = !0
            }
            const OM = Math.min(rM.startTick, iM),
              SM = Math.max(rM.startTick, iM);
            vM({
              startTick: OM,
              endTick: SM
            })
          }), [ir]),
          Hr = (0, SM.useCallback)((MM => {
            const rM = pM.current;
            if (!rM || rM.pointerId !== MM.pointerId) return;
            if (pM.current = null, MM.currentTarget.releasePointerCapture(MM.pointerId), !rM.didSelect) return rr(), void VM(rM.startTick, !0);
            const iM = ir(MM.clientX),
              OM = Math.min(rM.startTick, iM),
              SM = Math.max(rM.startTick, iM),
              jM = {
                startTick: OM,
                endTick: SM
              };
            vM(jM);
            const aM = bM.current;
            if (!aM) return;
            const PM = aM.getBoundingClientRect(),
              nM = Yj(OM, KM, qM) / 100,
              QM = Yj(SM, KM, qM) / 100,
              zM = PM.left + nM * PM.width,
              LM = PM.left + QM * PM.width;
            BM({
              ...jM,
              rect: new DOMRect(zM, PM.top, Math.max(LM - zM, 1), PM.height)
            })
          }), [rr, VM, ir, qM, KM]),
          hr = (0, SM.useCallback)((MM => rM => {
            if (0 !== rM.button) return;
            rM.stopPropagation(), AM(null), rr(), mM(), WM.current = {
              pointerId: rM.pointerId,
              track: MM
            }, rM.currentTarget.setPointerCapture(rM.pointerId);
            const iM = "detail" === MM ? ir(rM.clientX) : Or(rM.clientX);
            cM(iM, !1)
          }), [rr, mM, cM, ir, Or]),
          Jr = (0, SM.useCallback)((MM => {
            const rM = WM.current;
            if (!rM || rM.pointerId !== MM.pointerId) return;
            MM.stopPropagation();
            const iM = "detail" === rM.track ? ir(MM.clientX) : Or(MM.clientX);
            cM(iM, !1)
          }), [cM, ir, Or]),
          dr = (0, SM.useCallback)((MM => {
            const rM = WM.current;
            rM && rM.pointerId === MM.pointerId && (MM.stopPropagation(), WM.current = null, MM.currentTarget.releasePointerCapture(MM.pointerId), Mr())
          }), [Mr]),
          yr = (0, SM.useCallback)((MM => {
            0 === MM.button && (rr(), mM(), sM.current = {
              pointerId: MM.pointerId
            }, MM.currentTarget.setPointerCapture(MM.pointerId), cM(Or(MM.clientX), !0))
          }), [rr, mM, cM, Or]),
          lr = (0, SM.useCallback)((MM => {
            const rM = sM.current;
            rM && rM.pointerId === MM.pointerId && cM(Or(MM.clientX), !0)
          }), [cM, Or]),
          Er = (0, SM.useCallback)((MM => {
            const rM = sM.current;
            rM && rM.pointerId === MM.pointerId && (sM.current = null, MM.currentTarget.releasePointerCapture(MM.pointerId), Mr())
          }), [Mr]),
          Ur = (0, SM.useCallback)((MM => {
            const rM = Math.max(1, MM.endTick - MM.startTick + 1),
              iM = OM + 1,
              SM = iM / rM,
              jM = Math.max(1, Math.ceil(iM / SM)),
              aM = MM.startTick + Math.floor((jM - 1) / 2);
            gM.current = !0, uM.current = SM, oM(fj(aM, OM)), eM(SM), rr()
          }), [rr, OM, eM]),
          Gr = (0, SM.useCallback)((MM => {
            lM(MM), rr()
          }), [rr, lM]),
          Cr = (0, SM.useCallback)((MM => {
            EM(MM), rr()
          }), [rr, EM]),
          er = (0, SM.useCallback)((MM => {
            UM(MM), rr()
          }), [rr, UM]),
          br = (0, SM.useCallback)((() => {
            GM(), rr()
          }), [rr, GM]);
        (0, SM.useEffect)((() => {
          const MM = bM.current;
          if (!MM) return () => {};
          const rM = rM => {
            rM.preventDefault();
            const iM = fj(Nj(Fj(rM.clientX, MM), KM, qM), OM),
              SM = rM.deltaY < 0 ? "in" : "out",
              jM = vj(CM, SM);
            jM !== CM && (tM.current = !0, oM(iM), eM(jM))
          };
          return MM.addEventListener("wheel", rM, {
            passive: !1
          }), () => {
            MM.removeEventListener("wheel", rM)
          }
        }), [OM, eM, qM, KM, CM]);
        const wr = Yj(IM, KM, qM),
          tr = Bj(IM, OM),
          gr = Bj(KM, OM),
          ur = OM > 0 ? Bj(qM, OM) : 100,
          Rr = null !== QM,
          pr = null !== (rM = null === QM || void 0 === QM ? void 0 : QM.inTick) && void 0 !== rM ? rM : 0,
          Wr = null !== (iM = null === QM || void 0 === QM ? void 0 : QM.outTick) && void 0 !== iM ? iM : OM,
          sr = Bj(pr, OM),
          Dr = Math.max(Bj(Wr, OM) - sr, 0),
          kr = Yj(Math.max(pr, KM), KM, qM),
          Zr = Yj(Math.min(Wr, qM), KM, qM),
          or = Math.max(Zr - kr, 0),
          fr = Rr && Wr >= KM && pr <= qM,
          Yr = Yj(pr, KM, qM),
          Nr = Yj(Wr, KM, qM),
          Ar = Rr && pr >= KM && pr <= qM,
          xr = Rr && Wr >= KM && Wr <= qM,
          vr = Bj(pr, OM),
          Fr = Bj(Wr, OM),
          Br = null !== xM && void 0 !== xM ? xM : FM ? {
            startTick: FM.startTick,
            endTick: FM.endTick
          } : null,
          Xr = Br ? Yj(Math.max(Br.startTick, KM), KM, qM) : 0,
          Ir = Br ? Yj(Math.min(Br.endTick, qM), KM, qM) : 0,
          Kr = Math.max(Ir - Xr, 0),
          qr = null !== Br && Br.endTick >= KM && Br.startTick <= qM,
          Tr = (0, SM.useMemo)((() => Xj(0, OM, PM)), [OM, PM]),
          Vr = (0, SM.useMemo)((() => Xj(KM, qM, PM)), [KM, qM, PM]),
          cr = (0, SM.useMemo)((() => Sr.filter((MM => MM >= KM && MM <= qM))), [Sr, qM, KM]),
          Mi = (0, SM.useCallback)(((MM, rM, iM) => {
            const SM = "detail" === rM ? Yj(MM, KM, qM) : Bj(MM, OM),
              jM = null !== fM && iM === fM.fromTick,
              PM = null !== NM && NM.bL === iM;
            return (0, zM.jsx)("button", {
              type: "button",
              className: aM()("ReplayTimelineCameraKeyframeMarker", "detail" === rM ? "Detail" : "Overview", {
                Dragging: jM,
                Selected: PM
              }),
              style: {
                left: `${SM}%`
              },
              onPointerDown: nr(iM, rM),
              onPointerMove: Qr,
              onPointerUp: zr,
              onPointerCancel: zr,
              "aria-label": `Camera keyframe at tick ${iM}`
            }, `cam-${rM}-${iM}`)
          }), [nr, NM, zr, fM, OM, Qr, qM, KM]),
          ri = (0, SM.useCallback)((MM => fM && MM === fM.previewTick ? fM.fromTick : MM), [fM]);
        return OM <= 0 ? null : (0, zM.jsxs)("div", {
          className: "ReplayTimeline",
          children: [NM && jr && (0, Sj.createPortal)((0, zM.jsx)(za, {
            keyframe: jr,
            anchor: NM,
            hasOutgoingSegment: ar,
            onClose: () => {
              AM(null)
            },
            onApply: JM,
            onDelete: dM,
            onUseCurrentCamera: yM
          }), document.body), FM && (0, Sj.createPortal)((0, zM.jsx)(La, {
            anchor: FM,
            hasPlaybackMark: Rr,
            onClose: rr,
            onMark: Gr,
            onZoom: Ur,
            onCrop: Cr,
            onDeleteKeyframes: er,
            onClearMark: br
          }), document.body), (0, zM.jsxs)("div", {
            className: aM()("ReplayTimelineOverviewSection", {
              Hidden: CM <= 1
            }),
            children: [(0, zM.jsx)("div", {
              className: "ReplayTimelineSectionLabel",
              children: "Overview"
            }), (0, zM.jsxs)("div", {
              ref: wM,
              className: "ReplayTimelineOverviewTrack",
              onPointerDown: yr,
              onPointerMove: lr,
              onPointerUp: Er,
              onPointerCancel: Er,
              role: "slider",
              "aria-label": "Recording overview",
              "aria-valuemin": 0,
              "aria-valuemax": OM,
              "aria-valuenow": IM,
              tabIndex: 0,
              children: [Tr.map((MM => {
                const rM = Bj(MM, OM);
                return (0, zM.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Overview",
                  style: {
                    left: `${rM}%`
                  }
                }, MM)
              })), Rr && (0, zM.jsxs)(zM.Fragment, {
                children: [(0, zM.jsx)("div", {
                  className: "ReplayTimelineMarkRegion Overview",
                  style: {
                    left: `${sr}%`,
                    width: `${Dr}%`
                  }
                }), (0, zM.jsx)("div", {
                  className: "ReplayTimelineMarkMarker In Overview",
                  style: {
                    left: `${vr}%`
                  },
                  "aria-hidden": !0
                }), (0, zM.jsx)("div", {
                  className: "ReplayTimelineMarkMarker Out Overview",
                  style: {
                    left: `${Fr}%`
                  },
                  "aria-hidden": !0
                })]
              }), Sr.map((MM => Mi(MM, "overview", ri(MM)))), (0, zM.jsx)("div", {
                className: "ReplayTimelineViewport",
                style: {
                  left: `${gr}%`,
                  width: `${Math.max(ur-gr,.5)}%`
                }
              }), (0, zM.jsx)("button", {
                type: "button",
                className: aM()("ReplayTimelinePlayhead Overview", {
                  Scrubbing: null !== DM
                }),
                style: {
                  left: `${tr}%`
                },
                onPointerDown: hr("overview"),
                onPointerMove: Jr,
                onPointerUp: dr,
                onPointerCancel: dr,
                "aria-label": "Scrub playhead"
              })]
            })]
          }), (0, zM.jsxs)("div", {
            className: "ReplayTimelineDetailSection",
            children: [(0, zM.jsxs)("div", {
              className: "ReplayTimelineDetailHeader",
              children: [(0, zM.jsx)("span", {
                className: "ReplayTimelineSectionLabel",
                children: "Timeline"
              }), (0, zM.jsxs)("span", {
                className: "ReplayTimelineDetailRange",
                children: [Aj(KM, PM), " \u2013 ", Aj(qM, PM), CM > 1 && (0, zM.jsx)("span", {
                  className: "ReplayTimelineZoomBadge",
                  children: xj(CM)
                })]
              })]
            }), (0, zM.jsxs)("div", {
              ref: bM,
              className: "ReplayTimelineDetailTrack",
              onPointerDown: Lr,
              onPointerMove: mr,
              onPointerUp: Hr,
              onPointerCancel: Hr,
              role: "slider",
              "aria-label": "Recording timeline",
              "aria-valuemin": KM,
              "aria-valuemax": qM,
              "aria-valuenow": IM,
              tabIndex: 0,
              children: [Vr.map((MM => {
                const rM = Yj(MM, KM, qM);
                return (0, zM.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Detail",
                  style: {
                    left: `${rM}%`
                  }
                }, MM)
              })), fr && (0, zM.jsx)("div", {
                className: "ReplayTimelineMarkRegion Detail",
                style: {
                  left: `${kr}%`,
                  width: `${or}%`
                }
              }), Ar && (0, zM.jsx)("div", {
                className: "ReplayTimelineMarkMarker In Detail",
                style: {
                  left: `${Yr}%`
                },
                "aria-label": `Play range start at tick ${pr}`
              }), xr && (0, zM.jsx)("div", {
                className: "ReplayTimelineMarkMarker Out Detail",
                style: {
                  left: `${Nr}%`
                },
                "aria-label": `Play range end at tick ${Wr}`
              }), qr && Br && (0, zM.jsx)("div", {
                className: "ReplayTimelineSelectionRegion Detail",
                style: {
                  left: `${Xr}%`,
                  width: `${Kr}%`
                }
              }), cr.map((MM => Mi(MM, "detail", ri(MM)))), (0, zM.jsx)("button", {
                type: "button",
                className: aM()("ReplayTimelinePlayhead Detail", {
                  Scrubbing: null !== DM
                }),
                style: {
                  left: `${wr}%`
                },
                onPointerDown: hr("detail"),
                onPointerMove: Jr,
                onPointerUp: dr,
                onPointerCancel: dr,
                "aria-label": "Scrub playhead"
              })]
            }), (0, zM.jsxs)("div", {
              className: "ReplayTimelineWheelHint",
              children: [(0, zM.jsx)("span", {
                className: "Select",
                children: "Drag timeline to select"
              }), " \xb7 Scroll to zoom \xb7 Drag playhead to scrub"]
            })]
          })]
        })
      })),
      Ha = (0, SM.memo)((function(MM) {
        let {
          enabled: rM
        } = MM;
        const iM = (0, SM.useRef)(!1),
          OM = (0, SM.useRef)(null),
          [jM, PM] = (0, SM.useState)(!1),
          nM = (0, SM.useCallback)((MM => {
            rM && 0 === MM.button && (iM.current = !0, PM(!0), OM.current = {
              x: MM.clientX,
              y: MM.clientY
            }, MM.currentTarget.setPointerCapture(MM.pointerId))
          }), [rM]),
          QM = (0, SM.useCallback)((MM => {
            if (!rM || !iM.current || !OM.current) return;
            const SM = MM.clientX - OM.current.x,
              jM = MM.clientY - OM.current.y;
            OM.current = {
              x: MM.clientX,
              y: MM.clientY
            }, hM.gameBridge.send("dragReplayCamera", {
              dx: SM,
              dy: jM
            })
          }), [rM]),
          LM = (0, SM.useCallback)((MM => {
            iM.current && (iM.current = !1, PM(!1), OM.current = null, MM.currentTarget.releasePointerCapture(MM.pointerId))
          }), []);
        return rM ? (0, zM.jsx)("div", {
          className: aM()("ReplayViewerCameraDragSurface", {
            Dragging: jM
          }),
          onPointerDown: nM,
          onPointerMove: QM,
          onPointerUp: LM,
          onPointerCancel: LM,
          "aria-hidden": !0
        }) : null
      }));
    var ha = iM(37926),
      Ja = iM(37935);
    const da = (0, SM.memo)((function(MM) {
        var rM, iM, OM;
        let {
          anchorRect: jM,
          anchorRef: PM,
          onClose: QM
        } = MM;
        const LM = (0, SM.useRef)(null),
          mM = Pa(LM, jM),
          [HM, hM] = (0, SM.useState)(Ja.c),
          JM = (0, SM.useMemo)((() => Object.values(HM).every((MM => MM))), [HM]);
        (0, nM.d)("replayViewer|uiVisibilityChanged", (() => {
          hM((0, Ja.c)())
        })), na(LM, QM, PM);
        const dM = (0, SM.useCallback)(((MM, rM) => {
            (0, Ja.g)(MM, rM), hM((0, Ja.c)())
          }), []),
          yM = (0, SM.useCallback)((MM => {
            for (const {
                group: rM
              }
              of ha.c)(0, Ja.g)(rM, MM);
            hM((0, Ja.c)())
          }), []),
          lM = aa(jM);
        return (0, Sj.createPortal)((0, zM.jsxs)("div", {
          ref: LM,
          className: aM()("ReplayViewerPopover ReplayUiVisibilityPopover", {
            Below: null !== (rM = null === mM || void 0 === mM ? void 0 : mM.placeBelow) && void 0 !== rM && rM,
            Positioned: null !== mM
          }),
          style: {
            left: `${null!==(iM=null===mM||void 0===mM?void 0:mM.left)&&void 0!==iM?iM:lM.left}px`,
            top: `${null!==(OM=null===mM||void 0===mM?void 0:mM.top)&&void 0!==OM?OM:lM.top}px`
          },
          onPointerDown: MM => {
            MM.stopPropagation()
          },
          children: [(0, zM.jsx)("div", {
            className: "ReplayUiVisibilityPopoverHeader",
            children: (0, zM.jsx)("span", {
              className: "ReplayUiVisibilityPopoverTitle",
              children: "UI visibility"
            })
          }), (0, zM.jsxs)("div", {
            className: "ReplayUiVisibilityPopoverChecks",
            children: [(0, zM.jsxs)("div", {
              className: "ReplayUiVisibilityPopoverCheck",
              children: [(0, zM.jsx)("input", {
                type: "checkbox",
                checked: JM,
                onChange: MM => {
                  yM(MM.target.checked)
                }
              }), (0, zM.jsx)("span", {
                children: "SELECT ALL"
              })]
            }), ha.c.map((MM => {
              let {
                group: rM,
                label: iM
              } = MM;
              return (0, zM.jsxs)("label", {
                className: "ReplayUiVisibilityPopoverCheck",
                children: [(0, zM.jsx)("input", {
                  type: "checkbox",
                  checked: HM[rM],
                  onChange: MM => {
                    dM(rM, MM.target.checked)
                  }
                }), (0, zM.jsx)("span", {
                  children: iM
                })]
              }, rM)
            }))]
          })]
        }), document.body)
      })),
      ya = (0, SM.memo)((function(MM) {
        let {
          disabled: rM
        } = MM;
        const iM = (0, SM.useRef)(null),
          [OM, jM] = (0, SM.useState)(!1),
          [aM, PM] = (0, SM.useState)(null),
          nM = (0, SM.useCallback)((() => {
            iM.current && (PM(iM.current.getBoundingClientRect()), jM((MM => !MM)))
          }), []),
          QM = (0, SM.useCallback)((() => {
            jM(!1)
          }), []);
        return (0, zM.jsxs)(zM.Fragment, {
          children: [(0, zM.jsx)("div", {
            ref: iM,
            children: (0, zM.jsx)(Ai.e, {
              className: "ReplayViewerActionButton",
              onClick: nM,
              disabled: rM,
              children: (0, zM.jsx)("span", {
                children: "Hide UI elements"
              })
            })
          }), OM && aM && (0, zM.jsx)(da, {
            anchorRect: aM,
            anchorRef: iM,
            onClose: QM
          })]
        })
      })),
      la = ["freeCamUp", "freeCamDown"];

    function Ea(MM, rM) {
      hM.gameBridge.send("holdReplayFreecamVertical", {
        action: MM,
        sQ: rM
      })
    }
    const Ua = (0, SM.memo)((function() {
      (0, SM.useEffect)((() => () => {
        ! function() {
          hM.gameBridge.send("moveReplayFreecam", null);
          for (const MM of la) Ea(MM, !1)
        }()
      }), []);
      const MM = (0, SM.useCallback)((MM => {
          hM.gameBridge.send("moveReplayFreecam", MM)
        }), []),
        rM = (0, SM.useCallback)((MM => ({
          onTouchStart: rM => {
            rM.preventDefault(), rM.stopPropagation(), Ea(MM, !0)
          },
          onTouchEnd: rM => {
            rM.preventDefault(), rM.stopPropagation(), Ea(MM, !1)
          },
          onTouchCancel: rM => {
            rM.preventDefault(), rM.stopPropagation(), Ea(MM, !1)
          }
        })), []);
      return (0, zM.jsxs)("div", {
        className: "ReplayFreecamTouchControls",
        children: [(0, zM.jsx)("div", {
          className: "ReplayFreecamJoystickWrap",
          children: (0, zM.jsx)(lr, {
            onMove: MM,
            mode: "pinned"
          })
        }), (0, zM.jsxs)("div", {
          className: "ReplayFreecamVerticalButtons",
          children: [(0, zM.jsx)("button", {
            type: "button",
            className: "ReplayFreecamVerticalButton",
            "aria-label": "Freecam up",
            ...rM("freeCamUp"),
            children: (0, zM.jsx)(eM.b, {
              name: "angle-up",
              className: "ReplayFreecamVerticalIcon"
            })
          }), (0, zM.jsx)("button", {
            type: "button",
            className: "ReplayFreecamVerticalButton",
            "aria-label": "Freecam down",
            ...rM("freeCamDown"),
            children: (0, zM.jsx)(eM.b, {
              name: "angle-down",
              className: "ReplayFreecamVerticalIcon"
            })
          })]
        })]
      })
    }));
    var Ga = iM(3540);
    const Ca = [],
      ea = "Failed to load recording";

    function ba(MM, rM, iM) {
      var OM;
      console.error(rM), ii.NotificationProvider.showAlertPopup({
        title: MM,
        subtitle: null !== (OM = (0, Wj.f)(rM)) && void 0 !== OM ? OM : iM,
        confirmText: "OK"
      })
    }

    function wa(MM) {
      ba(ea, MM, Wj.c.cantOpen.text)
    }
    const ta = (0, SM.memo)((function() {
        const MM = (0, ZM.m)(),
          {
            gameState: rM
          } = (0, DM.m)(["gameState"]),
          iM = "inGame" === rM;
        return (0, kM.c)("replayViewerRequested", (MM => {
          (0, ZM.i)("toggle" === MM ? !(0, ZM.f)() : "open" === MM)
        })), (0, SM.useEffect)((() => {
          iM && (0, kj.h)().then((MM => {
            if (null !== MM) return (0, ZM.i)(!0), (0, gj.e)().open(MM.bytes, MM.source)
          })).catch((MM => {
            (0, ZM.i)(!0), wa(MM)
          }))
        }), [iM]), MM ? (0, zM.jsx)(ga, {}) : null
      })),
      ga = (0, SM.memo)((function() {
        var MM, rM, iM, OM, jM, PM, nM, QM, LM, mM, HM, JM;
        const dM = SM.useRef(null),
          [yM, lM] = (0, SM.useState)(1),
          [EM, UM] = (0, SM.useState)(null),
          [CM, bM] = (0, SM.useState)(!1),
          {
            isTouchScreen: wM
          } = (0, DM.m)(["isTouchScreen"]),
          tM = (0, kM.j)("replay"),
          gM = (0, kM.j)("replayEdits"),
          uM = null !== tM,
          RM = null !== (MM = null === tM || void 0 === tM ? void 0 : tM.bL) && void 0 !== MM ? MM : 0,
          pM = null !== (rM = null === tM || void 0 === tM ? void 0 : tM.totalTicks) && void 0 !== rM ? rM : 0,
          WM = Math.max(0, pM - 1),
          sM = null !== (iM = null === tM || void 0 === tM ? void 0 : tM.playing) && void 0 !== iM && iM,
          oM = null !== (OM = null === tM || void 0 === tM ? void 0 : tM.speed) && void 0 !== OM ? OM : 1,
          fM = null !== (jM = null === tM || void 0 === tM ? void 0 : tM.zk) && void 0 !== jM ? jM : 20,
          YM = null !== EM && void 0 !== EM ? EM : RM,
          NM = null !== (PM = null === tM || void 0 === tM ? void 0 : tM.freecam) && void 0 !== PM && PM,
          AM = null !== (nM = null === tM || void 0 === tM ? void 0 : tM.cameraMode) && void 0 !== nM ? nM : "recording",
          xM = null !== (QM = null === gM || void 0 === gM ? void 0 : gM.cameraKeyframes) && void 0 !== QM ? QM : Ca,
          vM = null !== (LM = null === gM || void 0 === gM ? void 0 : gM.playbackMark) && void 0 !== LM ? LM : null,
          FM = null !== (mM = null === gM || void 0 === gM ? void 0 : gM.fileName) && void 0 !== mM ? mM : null,
          BM = null !== (HM = null === gM || void 0 === gM ? void 0 : gM.unsavedChanges) && void 0 !== HM && HM,
          XM = null !== (JM = null === gM || void 0 === gM ? void 0 : gM.suggestSaveAs) && void 0 !== JM && JM,
          IM = (0, kM.j)("replayVideoExporting"),
          KM = !IM && uM && ("freecam" === AM || ("recording" === AM || "keyframe" === AM) && !sM),
          qM = wM && uM && "freecam" === AM && !IM && !CM;
        (0, Zj.c)(!0, !0, "ReplayViewerOverlay"), (0, SM.useEffect)((() => {
          hM.gameBridge.send("syncReplayCameraMode", null)
        }), [NM]);
        const TM = (0, SM.useCallback)(((MM, rM) => {
            hM.gameBridge.send("seekReplay", {
              bL: MM,
              ignorePlaybackMark: null === rM || void 0 === rM ? void 0 : rM.ignorePlaybackMark
            })
          }), []),
          VM = (0, SM.useCallback)((() => {
            hM.gameBridge.send("setReplayPlaying", !1)
          }), []),
          cM = (0, SM.useCallback)(((MM, rM) => {
            hM.gameBridge.send("moveReplayCameraKeyframe", {
              from: MM,
              to: rM
            })
          }), []),
          Mr = (0, SM.useCallback)((MM => {
            hM.gameBridge.send("setReplayCameraKeyframe", MM)
          }), []),
          rr = (0, SM.useCallback)((MM => {
            hM.gameBridge.send("deleteReplayCameraKeyframes", {
              start: MM,
              end: MM
            })
          }), []),
          ir = (0, SM.useCallback)((MM => {
            hM.gameBridge.send("deleteReplayCameraKeyframes", {
              start: MM.startTick,
              end: MM.endTick
            })
          }), []),
          Or = (0, SM.useCallback)((() => hM.gameBridge.lookup("replayCamera", null)), []),
          Sr = (0, SM.useCallback)((MM => {
            UM(MM)
          }), []),
          jr = (0, SM.useCallback)((MM => {
            hM.gameBridge.send("setReplayPlaybackMark", {
              inTick: MM.startTick,
              outTick: MM.endTick
            })
          }), []),
          ar = (0, SM.useCallback)((() => {
            hM.gameBridge.send("setReplayPlaybackMark", null)
          }), []),
          Pr = (0, SM.useCallback)((MM => {
            const rM = hM.gameBridge.latest("replay");
            if (null === rM || MM.endTick <= MM.startTick) return;
            const iM = MM.startTick,
              OM = MM.endTick;
            ii.NotificationProvider.showPromptPopup({
              title: "Crop recording to the selected range? This cannot be undone.",
              confirmText: "Crop",
              destructive: !0,
              cancelText: "Cancel"
            }).getResult().then((MM => {
              var SM;
              if (!0 !== MM) return;
              if ((null === (SM = hM.gameBridge.latest("replay")) || void 0 === SM ? void 0 : SM.id) !== rM.id) return;
              hM.gameBridge.send("cropReplay", {
                start: iM,
                end: OM
              }) && (UM(null), lM(1))
            }))
          }), []),
          nr = (0, SM.useCallback)(((MM, rM) => {
            lM(1), UM(null), (0, gj.e)().open(MM, rM).catch(wa)
          }), []),
          Qr = (0, SM.useCallback)(((MM, rM) => {
            null !== hM.gameBridge.latest("connectedGame").websocketUrl ? ii.NotificationProvider.showPromptPopup({
              title: "Leave current game and play recording?",
              confirmText: "Yes",
              cancelText: "No"
            }).getResult().then((iM => {
              !0 === iM && nr(MM, rM)
            })) : nr(MM, rM)
          }), [nr]),
          zr = (0, SM.useCallback)((MM => {
            var rM;
            const iM = null === (rM = MM.target.files) || void 0 === rM ? void 0 : rM[0];
            if (MM.target.value = "", !iM) return;
            const OM = new FileReader;
            OM.onload = () => {
              Qr(new Uint8Array(OM.result), {
                fileName: iM.name
              })
            }, OM.onerror = () => {
              wa(OM.error)
            }, OM.readAsArrayBuffer(iM)
          }), [Qr]),
          Lr = (0, SM.useCallback)((() => {
            const MM = () => {
              null !== dM.current && (0, Ga.f)(dM.current)
            };
            (0, pj.j)() ? (0, pj.f)().then((MM => {
              MM && Qr(MM.bytes, {
                fileHandle: MM.handle
              })
            })).catch((rM => {
              console.error(rM), ii.NotificationProvider.showPromptPopup({
                title: ea,
                confirmText: "Choose file",
                cancelText: "Cancel"
              }).getResult().then((rM => {
                !0 === rM && MM()
              }))
            })): MM()
          }), [Qr]),
          mr = (0, SM.useCallback)((async function() {
            let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            let rM;
            try {
              rM = await Dj(MM, {
                files: (0, gj.e)(),
                pickerSupported: pj.j,
                chooseFile: pj.b,
                write: pj.l,
                download: Rj.j,
                onFallback: console.error
              })
            } catch (iM) {
              return void ba("Failed to save recording", iM)
            }
            "written" !== rM && "downloaded" !== rM || (() => {
              const MM = ii.NotificationProvider.showAlertPopup({
                title: "Recording saved",
                disableBackground: !0
              });
              setTimeout((() => {
                MM.tearDownNotification()
              }), 1e3)
            })()
          }), []),
          Hr = (0, SM.useCallback)((MM => {
            hM.gameBridge.send("replayAction", MM)
          }), []),
          hr = (0, SM.useCallback)((MM => {
            lM((rM => vj(rM, MM)))
          }), []),
          Jr = (0, SM.useCallback)((MM => {
            if (!hM.gameBridge.latest("replayVideoExporting")) switch (MM) {
              case "replayLoad":
                Lr();
                break;
              case "replaySave":
                mr(!1);
                break;
              case "replaySaveAs":
                mr(!0);
                break;
              case "replayTimelineZoomIn":
                hr("in");
                break;
              case "replayTimelineZoomOut":
                hr("out")
            }
          }), [Lr, mr, hr]);
        (0, kM.c)("replayUiActionRequested", Jr);
        const dr = (0, SM.useCallback)((MM => {
            hM.gameBridge.send("setReplayCameraMode", MM)
          }), []),
          yr = uM ? Ai.e : Ai.p,
          lr = BM && !XM ? Ai.p : Ai.e,
          Er = BM && XM ? Ai.p : Ai.e;
        return (0, zM.jsxs)("div", {
          className: "ReplayViewerOverlay",
          children: [(0, zM.jsx)(Ha, {
            enabled: KM
          }), qM && (0, zM.jsx)(Ua, {}), (0, zM.jsx)("input", {
            ref: dM,
            type: "file",
            accept: Rj.e,
            className: "ReplayViewerFileInput",
            onChange: zr
          }), (0, zM.jsxs)("div", {
            className: aM()("ReplayViewerBar", {
              Collapsed: CM
            }),
            children: [(0, zM.jsx)("button", {
              type: "button",
              className: "ReplayViewerCollapseTab",
              onClick: () => {
                CM ? bM(!1) : uM ? bM(!0) : (0, ZM.d)()
              },
              "aria-expanded": !CM,
              "aria-label": CM ? "Expand replay viewer" : "Collapse replay viewer",
              children: (0, zM.jsx)(eM.b, {
                name: CM ? "angle-up" : "angle-down"
              })
            }), !CM && (0, zM.jsxs)("div", {
              className: "ReplayViewerBarBody",
              children: [uM && pM > 0 && (0, zM.jsx)(ma, {
                maxTick: WM,
                displayTick: YM,
                zk: fM,
                cameraKeyframes: xM,
                playbackMark: vM,
                onSeek: TM,
                onPause: VM,
                onScrubTickChange: Sr,
                onMoveCameraKeyframe: cM,
                onUpdateCameraKeyframe: Mr,
                onDeleteCameraKeyframe: rr,
                onUseCurrentCamera: Or,
                onMarkRange: jr,
                onCropRange: Pr,
                onDeleteKeyframesInRange: ir,
                onClearMark: ar,
                zoomLevel: yM,
                onZoomLevelChange: lM
              }, WM), (0, zM.jsxs)("div", {
                className: "ReplayViewerControls",
                children: [(0, zM.jsxs)("div", {
                  className: "ReplayViewerControlsLeftSide",
                  children: [(0, zM.jsxs)("div", {
                    className: "ReplayViewerControlsGroup FileGroup",
                    children: [uM && (0, zM.jsxs)("div", {
                      className: "ReplayViewerFileName",
                      children: [null !== FM && void 0 !== FM ? FM : "Unsaved recording", BM ? " *" : ""]
                    }), (0, zM.jsxs)(yr, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Jr("replayLoad")
                      },
                      children: [(0, zM.jsx)(VS.d, {
                        noaAction: "replayLoad",
                        padHidesKey: !0
                      }), (0, zM.jsx)("span", {
                        children: " Load "
                      })]
                    }), (0, zM.jsxs)(Ai.e, {
                      className: "ReplayViewerActionButton",
                      onClick: ZM.d,
                      children: [(0, zM.jsx)(VS.d, {
                        noaAction: "replayViewerOpen",
                        padHidesKey: !0
                      }), (0, zM.jsx)("span", {
                        children: " Hide "
                      })]
                    }), (0, zM.jsxs)(lr, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Jr("replaySave")
                      },
                      disabled: !uM,
                      children: [(0, zM.jsx)(VS.d, {
                        noaAction: "replaySave",
                        padHidesKey: !0
                      }), (0, zM.jsx)("span", {
                        children: " Save "
                      })]
                    }), (0, zM.jsxs)(Ai.e, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        hM.gameBridge.send("leaveGame", {
                          reloadPath: "/"
                        })
                      },
                      disabled: !uM,
                      children: [(0, zM.jsx)(VS.d, {
                        noaAction: "replayExit",
                        padHidesKey: !0
                      }), (0, zM.jsx)("span", {
                        children: " Exit "
                      })]
                    }), (0, zM.jsxs)(Er, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Jr("replaySaveAs")
                      },
                      disabled: !uM,
                      children: [(0, zM.jsx)(VS.d, {
                        noaAction: "replaySaveAs",
                        padHidesKey: !0
                      }), (0, zM.jsx)("span", {
                        children: " Save As "
                      })]
                    }), (0, zM.jsxs)(Ai.e, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        hM.gameBridge.send("exportReplayVideo", null)
                      },
                      disabled: !uM || 0 === pM || IM,
                      children: [(0, zM.jsx)(VS.d, {
                        noaAction: "replayExportVideo",
                        padHidesKey: !0
                      }), (0, zM.jsx)("span", {
                        children: " Export "
                      })]
                    })]
                  }), (0, zM.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, zM.jsxs)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: [(0, zM.jsx)("span", {
                        children: " Camera Mode "
                      }), (0, zM.jsx)(VS.d, {
                        noaAction: "replayChangeCameraMode",
                        padHidesKey: !0
                      })]
                    }), (0, zM.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody CameraModes",
                      children: [(0, zM.jsx)(GM.i, {
                        tooltipInner: (0, zM.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Replicate how the camera was set when recorded."
                        }),
                        children: (0, zM.jsxs)(Ai.V, {
                          className: "ReplayViewerModeButton",
                          active: "recording" === AM,
                          onClick: () => {
                            dr("recording")
                          },
                          disabled: !uM,
                          children: ["Recorded ", (0, zM.jsx)(eM.b, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, zM.jsx)(GM.i, {
                        tooltipInner: (0, zM.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Move the camera freely around."
                        }),
                        children: (0, zM.jsxs)(Ai.V, {
                          className: "ReplayViewerModeButton",
                          active: "freecam" === AM,
                          onClick: () => {
                            dr("freecam")
                          },
                          disabled: !uM,
                          children: ["Free ", (0, zM.jsx)(eM.b, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, zM.jsx)(GM.i, {
                        tooltipInner: (0, zM.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Display the replay in real time using keyframes."
                        }),
                        children: (0, zM.jsxs)(Ai.V, {
                          className: "ReplayViewerModeButton",
                          active: "keyframe" === AM,
                          onClick: () => {
                            dr("keyframe")
                          },
                          disabled: !uM,
                          children: ["Preview ", (0, zM.jsx)(eM.b, {
                            name: "circle-info"
                          })]
                        })
                      })]
                    })]
                  })]
                }), (0, zM.jsxs)("div", {
                  className: "ReplayViewerControlsGroup TimeGroup",
                  children: [(0, zM.jsxs)("div", {
                    className: "ReplayViewerTimecodeContainer",
                    children: [(0, zM.jsxs)("span", {
                      className: "ReplayViewerTimecode",
                      children: [(0, zM.jsx)("span", {
                        className: "ReplayViewerTimecodeNow",
                        children: Aj(YM, fM)
                      }), (0, zM.jsx)("span", {
                        className: "ReplayViewerTimecodeDivider",
                        children: "/"
                      }), (0, zM.jsx)("span", {
                        className: "ReplayViewerTimecodeTotal",
                        children: Aj(WM, fM)
                      })]
                    }), (0, zM.jsxs)("span", {
                      className: "ReplayViewerTickLabel",
                      children: ["Tick ", YM, " / ", WM]
                    })]
                  }), (0, zM.jsxs)("div", {
                    className: "ReplayViewerTimecodeControls",
                    children: [(0, zM.jsxs)(Ai.e, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        Hr("replaySkipBack")
                      },
                      disabled: !uM,
                      children: [(0, zM.jsxs)("span", {
                        children: [" ", (0, zM.jsx)(eM.b, {
                          name: "clock-rotate-left"
                        }), " 1s"]
                      }), (0, zM.jsx)(VS.d, {
                        noaAction: "replaySkipBack",
                        padHidesKey: !0
                      })]
                    }), (0, zM.jsxs)(Ai.p, {
                      className: "ReplayViewerMediaButton PlayButton",
                      onClick: () => {
                        hM.gameBridge.send("setReplayPlaying", !sM)
                      },
                      disabled: !uM,
                      children: [(0, zM.jsxs)("span", {
                        children: [" ", sM ? (0, zM.jsx)(eM.b, {
                          name: "pause"
                        }) : (0, zM.jsx)(eM.b, {
                          name: "play"
                        }), " "]
                      }), (0, zM.jsx)(VS.d, {
                        noaAction: "replayPlayPause",
                        padHidesKey: !0
                      })]
                    }), (0, zM.jsxs)(Ai.e, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        Hr("replaySkipForward")
                      },
                      disabled: !uM,
                      children: [(0, zM.jsxs)("span", {
                        children: [" ", (0, zM.jsx)(eM.b, {
                          name: "rotate-forward"
                        }), " 1s"]
                      }), (0, zM.jsx)(VS.d, {
                        noaAction: "replaySkipForward",
                        padHidesKey: !0
                      })]
                    })]
                  })]
                }), (0, zM.jsxs)("div", {
                  className: "ReplayViewerControlsRightSide",
                  children: [(0, zM.jsxs)("div", {
                    className: "ReplayViewerControlsGroup RecordKeyframeGroup",
                    children: [(0, zM.jsxs)(Ai.p, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Hr("replayRecordKeyframe")
                      },
                      disabled: !uM,
                      children: [(0, zM.jsx)(VS.d, {
                        noaAction: "replayRecordKeyframe",
                        padHidesKey: !0
                      }), (0, zM.jsx)("span", {
                        children: " Record keyframe "
                      })]
                    }), (0, zM.jsx)(ya, {
                      disabled: !uM
                    }), vM && (0, zM.jsx)(Ai.V, {
                      className: "ReplayViewerActionButton",
                      onClick: ar,
                      disabled: !uM,
                      children: (0, zM.jsx)("span", {
                        children: " Clear range "
                      })
                    })]
                  }), (0, zM.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, zM.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Speed"
                    }), (0, zM.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, zM.jsx)(Ai.e, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          Hr("replaySpeedDown")
                        },
                        disabled: !uM || (0, uj.f)(oM),
                        children: (0, zM.jsx)("span", {
                          children: " \u2212 "
                        })
                      }), (0, zM.jsxs)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: [oM, "\xd7"]
                      }), (0, zM.jsx)(Ai.e, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          Hr("replaySpeedUp")
                        },
                        disabled: !uM || (0, uj.b)(oM),
                        children: (0, zM.jsx)("span", {
                          children: " + "
                        })
                      })]
                    })]
                  }), (0, zM.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, zM.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Timeline Zoom"
                    }), (0, zM.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, zM.jsxs)(Ai.e, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          Jr("replayTimelineZoomOut")
                        },
                        disabled: !uM || yM <= oj[0],
                        children: [(0, zM.jsx)("span", {
                          children: " \u2212 "
                        }), (0, zM.jsx)(VS.d, {
                          noaAction: "replayTimelineZoomOut",
                          padHidesKey: !0
                        })]
                      }), (0, zM.jsx)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: xj(yM)
                      }), (0, zM.jsxs)(Ai.e, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          Jr("replayTimelineZoomIn")
                        },
                        disabled: !uM || yM >= oj[oj.length - 1],
                        children: [(0, zM.jsx)("span", {
                          children: " + "
                        }), (0, zM.jsx)(VS.d, {
                          noaAction: "replayTimelineZoomIn",
                          padHidesKey: !0
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0, zM.jsx)("div", {
                className: "ReplayViewerEmptyState",
                children: !uM && "Load a recording to begin playback"
              })]
            })]
          })]
        })
      }));
    var ua = iM(1373);

    function Ra() {
      const [, MM] = (0, SM.useState)(0);
      return (0, nM.d)("replayViewer|uiVisibilityChanged", (() => {
          MM((MM => MM + 1))
        })), (0, nM.d)("replayViewer|replayLoaded", (() => {
          MM((MM => MM + 1))
        })),
        function() {
          if (!(0, ua.i)()) return {};
          const MM = {
              [ha.b]: "true"
            },
            rM = (0, Ja.c)();
          for (const {
              group: iM,
              dataAttr: OM
            }
            of ha.c) OM && !rM[iM] && (MM[OM] = "true");
          return MM
        }()
    }
    var pa = iM(35014),
      Wa = iM(2181),
      sa = iM(9349),
      Da = iM(9339),
      ka = iM(2198);
    const Za = (0, SM.memo)((function() {
      var MM, rM, iM;
      const OM = (0, UM.f)("customButtons");
      (0, SM.useEffect)((() => OM ? (hM.gameBridge.send("bindCustomButtonKeys", OM.filter(sa.d).map((MM => {
        let {
          id: rM,
          keycode: iM
        } = MM;
        return {
          id: rM,
          keycode: iM
        }
      }))), () => {
        hM.gameBridge.send("bindCustomButtonKeys", [])
      }) : () => {}), [OM]);
      const jM = null !== (MM = null === OM || void 0 === OM ? void 0 : OM.filter(sa.d)) && void 0 !== MM ? MM : [],
        aM = (0, Da.j)(),
        PM = null !== (rM = null === (iM = (0, ka.d)()) || void 0 === iM ? void 0 : iM.hideButtonHints) && void 0 !== rM && rM,
        nM = "customButton" !== (null === aM || void 0 === aM ? void 0 : aM.kind) || PM ? null : aM.id,
        QM = jM.length > 0,
        LM = (0, SM.useRef)(null);
      return (0, SM.useLayoutEffect)((() => {
        if (!QM) return () => {};
        const MM = LM.current,
          rM = MM.closest(".InGameUi"),
          iM = () => {
            rM.style.setProperty("--custom-buttons-top", `${MM.offsetTop}px`)
          };
        iM();
        const OM = new ResizeObserver(iM);
        return OM.observe(MM), OM.observe(MM.parentElement), () => {
          OM.disconnect(), rM.style.removeProperty("--custom-buttons-top")
        }
      }), [QM]), (0, zM.jsx)("div", {
        ref: LM,
        className: "" + ((0, ri.isMobile)() ? "CustomIconsMobile" : "CustomIcons"),
        children: jM.map((MM => {
          var rM, iM;
          return (0, zM.jsx)(oa, {
            button: MM,
            padGlyph: MM.id === nM && null !== (rM = null === (iM = (0, gM.d)()) || void 0 === iM ? void 0 : iM.getBoundButton("actionButton")) && void 0 !== rM ? rM : null
          }, MM.id)
        }))
      })
    }));

    function oa(MM) {
      let {
        button: rM,
        padGlyph: iM
      } = MM;
      const OM = (0, SM.useRef)(null),
        jM = () => {
          null !== OM.current && (OM.current = null, hM.gameBridge.send("pressCustomButton", {
            id: rM.id,
            down: !1
          }))
        };
      (0, SM.useEffect)((() => jM), []);
      const aM = or(jM, {
          pressesOnPointerDown: !0
        }),
        PM = MM => {
          OM.current === MM.pointerId && jM()
        };
      return (0, zM.jsxs)("div", {
        className: "CustomIcon",
        ...aM,
        onLostPointerCapture: PM,
        children: [(0, zM.jsx)(Wa.c, {
          icon: rM.icon,
          keyboardHint: (0, sa.c)(rM.keycode),
          padGlyph: iM,
          onPointerDown: MM => {
            try {
              MM.currentTarget.setPointerCapture(MM.pointerId)
            } catch {
              return
            }
            null === OM.current && hM.gameBridge.send("pressCustomButton", {
              id: rM.id,
              down: !0
            }), OM.current = MM.pointerId
          },
          onPointerUp: PM,
          onPointerCancel: PM,
          showTouchTutorialPubSubId: !1,
          showRedDotPubSubId: !1
        }), rM.description && (0, zM.jsx)("div", {
          className: "CustomIconDescription SmallTextBold",
          children: rM.description
        })]
      })
    }
    var fa = iM(2631),
      Ya = iM(222);
    const Na = {
      frame: MM => {
        const rM = requestAnimationFrame((() => {
          MM()
        }));
        return () => {
          cancelAnimationFrame(rM)
        }
      },
      afterFrame: MM => {
        const rM = setTimeout(MM, 0);
        return () => {
          clearTimeout(rM)
        }
      }
    };
    class Aa {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ya.d,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Na,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
        this.idle = MM, this.frames = rM, this.onHiddenMount = iM, this.waiting = [], this.cancelIdle = null, this.cancelFrame = null, this.cancelAfterFrame = null, this.starvedFrames = 0, this.shown = !1
      }
      request(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.shown ? (MM(), () => {}) : (rM ? this.waiting.unshift(MM) : this.waiting.push(MM), this.schedule(), () => {
          const rM = this.waiting.indexOf(MM);
          rM >= 0 && (this.waiting.splice(rM, 1), this.settle())
        })
      }
      show() {
        for (this.shown = !0; this.waiting.length > 0;) this.mountNext()
      }
      schedule() {
        0 !== this.waiting.length && (this.cancelIdle ??= this.idle((MM => {
          for (this.cancelIdle = null; this.waiting.length > 0 && MM.timeRemaining() >= 8;) this.mountNext();
          this.schedule()
        })), this.cancelFrame ??= this.frames.frame((() => {
          this.cancelFrame = null, this.starvedFrames++, this.starvedFrames >= 4 && (this.cancelAfterFrame ??= this.frames.afterFrame((() => {
            this.cancelAfterFrame = null, this.mountNext(), this.schedule()
          }))), this.schedule()
        })))
      }
      mountNext() {
        this.starvedFrames = 0;
        const MM = this.waiting.shift(),
          rM = !this.shown,
          iM = performance.now();
        try {
          MM()
        } finally {
          rM && this.onHiddenMount(performance.now() - iM), this.settle()
        }
      }
      settle() {
        0 === this.waiting.length && this.stop()
      }
      stop() {
        var MM, rM, iM;
        null === (MM = this.cancelIdle) || void 0 === MM || MM.call(this), this.cancelIdle = null, null === (rM = this.cancelFrame) || void 0 === rM || rM.call(this), this.cancelFrame = null, null === (iM = this.cancelAfterFrame) || void 0 === iM || iM.call(this), this.cancelAfterFrame = null
      }
    }
    const xa = (0, SM.createContext)(null);

    function va(MM) {
      let {
        children: rM,
        first: iM = !1
      } = MM;
      const OM = (0, SM.useContext)(xa),
        [jM, aM] = (0, SM.useState)(null === OM);
      return (0, SM.useEffect)((() => {
        if (!jM && null !== OM) return OM.request((() => {
          aM(!0)
        }), iM)
      }), [iM, jM, OM]), jM ? (0, SM.createElement)(SM.Fragment, null, rM) : null
    }
    const Fa = (0, SM.memo)((function(MM) {
        let {
          shown: rM
        } = MM;
        const [iM] = (0, SM.useState)((() => new dM.f(rM))), [jM] = (0, SM.useState)((() => rM ? null : new Aa(void 0, void 0, (MM => {
          OM.b.noteWorkDuringAdmissionWait(MM)
        }))));
        return (0, SM.useLayoutEffect)((() => {
          rM && (null === jM || void 0 === jM || jM.show(), iM.show())
        }), [rM, iM, jM]), (0, zM.jsx)(dM.b.Provider, {
          value: iM,
          children: (0, zM.jsx)(xa.Provider, {
            value: jM,
            children: (0, zM.jsx)(Ba, {})
          })
        })
      })),
      Ba = (0, SM.memo)((function() {
        const {
          isUiHidden: MM,
          isUiHiddenByCamera: rM,
          worldPanelHud: iM,
          isTouchScreen: OM
        } = (0, DM.m)(["isUiHidden", "isUiHiddenByCamera", "worldPanelHud", "isTouchScreen"]), jM = (0, lS.b)(), PM = Ra(), nM = (0, dM.h)(), QM = (0, SM.useRef)(null), LM = (0, UM.f)("showKillfeed");
        return function() {
            const MM = (0, dM.h)();
            (0, SM.useEffect)((() => MM.whenShown(yM)), [MM])
          }(),
          function() {
            const MM = (0, UM.f)("inventoryColourOverride");
            (0, SM.useEffect)((() => {
              if (!MM) return;
              const {
                panel: rM,
                slot: iM,
                slotSelected: OM,
                slotUnavailable: SM
              } = RM(MM), jM = document.documentElement.style;
              return jM.setProperty("--InventoryPanelColour", rM), jM.setProperty("--InventorySlotColour", iM), jM.setProperty("--InventorySlotSelectedColour", OM), jM.setProperty("--InventorySlotUnavailableColour", SM), () => {
                jM.removeProperty("--InventoryPanelColour"), jM.removeProperty("--InventorySlotColour"), jM.removeProperty("--InventorySlotSelectedColour"), jM.removeProperty("--InventorySlotUnavailableColour")
              }
            }), [MM])
          }(), (0, SM.useLayoutEffect)((() => nM.whenShown((() => {
            var MM;
            null === (MM = QM.current) || void 0 === MM || MM.classList.remove("PreMounted")
          }))), [nM]), (0, zM.jsxs)(zM.Fragment, {
            children: [(0, zM.jsxs)("div", {
              ref: QM,
              className: aM()("InGameUi", {
                PreMounted: !nM.shown,
                Hidden: MM,
                HiddenByCamera: rM,
                HiddenByWorldPanel: null !== iM,
                WorldPanelTouchControl: "touchControls" === iM
              }),
              ...PM,
              children: [(0, zM.jsxs)(va, {
                children: [(0, zM.jsx)(HO.b, {}), (0, zM.jsx)(lO, {})]
              }), (0, zM.jsx)(dM.g, {
                children: (0, zM.jsx)(EO, {})
              }), (0, zM.jsxs)(va, {
                children: [(0, zM.jsx)(FS, {}), (0, zM.jsx)(Mj, {}), OM && (0, zM.jsx)(ij, {})]
              }), (0, zM.jsxs)(va, {
                children: [(0, zM.jsx)(Wi, {}), (0, zM.jsx)(sO.b, {}), (0, zM.jsx)(AO, {})]
              }), (0, zM.jsx)(dM.g, {
                children: (0, zM.jsx)(mO, {})
              }), (0, zM.jsxs)(va, {
                children: [(0, zM.jsx)(KS.c, {}), (0, zM.jsx)(ta, {})]
              }), null, (0, zM.jsxs)(va, {
                children: [(0, zM.jsx)(hj.h, {}), (0, zM.jsx)(Jj.e, {})]
              }), (0, zM.jsx)(va, {
                children: (0, zM.jsx)(Di.p, {})
              }), (0, zM.jsx)(va, {
                children: (0, zM.jsx)(ca, {
                  showChat: jM
                })
              }), (0, zM.jsxs)(va, {
                children: [(0, zM.jsx)(yj, {}), (0, zM.jsx)(IS, {})]
              }), (0, zM.jsxs)("div", {
                className: aM()("RightElements", {
                  RightElementsTouchscreen: OM
                }),
                "data-camera-keeper-host": "",
                children: [(0, zM.jsxs)("div", {
                  className: KO.g,
                  "data-holds-camera-keeper": "",
                  children: [(0, zM.jsxs)("div", {
                    className: "TopRightElementsLeft",
                    "data-holds-camera-keeper": "",
                    children: [(0, zM.jsx)(va, {
                      children: (0, zM.jsx)(sS.d, {})
                    }), (0, zM.jsxs)(va, {
                      children: [(0, zM.jsx)(bM, {}), (0, zM.jsx)(MS.b, {})]
                    }), ri.featureFlags.useSocialFeatures && (0, zM.jsx)(dM.g, {
                      children: (0, zM.jsx)(rS.d, {
                        placement: "inGame"
                      })
                    }), ri.featureFlags.useSocialFeatures && (0, zM.jsx)(dM.g, {
                      children: (0, zM.jsx)(HS, {})
                    }), LM && (0, zM.jsx)(dM.g, {
                      children: (0, zM.jsx)(WO, {})
                    }), (0, zM.jsx)(va, {
                      children: (0, zM.jsx)(pa.e, {})
                    })]
                  }), ri.featureFlags.useSocialFeatures && (0, zM.jsx)("div", {
                    className: "TopRightElementsRight",
                    children: (0, zM.jsx)(va, {
                      children: (0, zM.jsx)(xS.e, {})
                    })
                  })]
                }), (0, zM.jsxs)(va, {
                  children: [(0, zM.jsx)(Di.e, {
                    placement: "topRight"
                  }), (0, zM.jsx)(MP, {})]
                })]
              }), (0, zM.jsx)("div", {
                className: "LeftCentre",
                children: (0, zM.jsx)(va, {
                  children: (0, zM.jsx)(Za, {})
                })
              }), (0, zM.jsxs)("div", {
                className: "BottomCentre",
                "data-holds-camera-keeper": OM ? "" : void 0,
                children: [(0, zM.jsx)(dM.g, {
                  children: (0, zM.jsx)(EM.e, {})
                }), (0, zM.jsx)(va, {
                  children: (0, zM.jsx)(Ia, {})
                }), (0, zM.jsxs)("div", {
                  className: "BottomElements",
                  "data-holds-camera-keeper": OM ? "" : void 0,
                  children: [(0, zM.jsx)("div", {
                    className: aM()("BottomLeftElements", {
                      Touch: OM
                    }),
                    children: (0, zM.jsxs)(va, {
                      children: [(0, zM.jsx)(dS, {}), !OM && (0, zM.jsx)(fa.d, {})]
                    })
                  }), (0, zM.jsx)(va, {
                    children: (0, zM.jsx)(Va, {})
                  }), (0, zM.jsx)(va, {
                    children: (0, zM.jsx)(vO, {
                      isTouchScreen: OM
                    })
                  })]
                })]
              }), (0, zM.jsx)("div", {
                className: "MiddleLeft"
              }), OM && (0, zM.jsx)(va, {
                children: (0, zM.jsx)(Li, {})
              }), (0, zM.jsx)("div", {
                className: "CameraFadeHost",
                ref: Hr.j
              })]
            }), (0, zM.jsx)(dM.g, {
              children: (0, zM.jsx)(tj.d, {})
            }), (0, zM.jsx)(dM.g, {
              children: (0, zM.jsx)(mj, {})
            }), (0, zM.jsx)(va, {
              first: !0,
              children: (0, zM.jsx)(yS.d, {})
            }), (0, zM.jsx)(dM.g, {
              children: (0, zM.jsx)(Xa, {})
            })]
          })
      }));

    function Xa() {
      return (0, SM.useEffect)((() => {
        const MM = setTimeout((() => {
          (0, HM.e)()
        }), 0);
        return () => {
          clearTimeout(MM), HM.i.Fy(!1)
        }
      }), []), null
    }
    const Ia = (0, SM.memo)((function() {
        const MM = (0, nM.e)("aimingOverlay", "none");
        (0, CM.d)();
        const rM = (0, UM.i)("middleTextUpper"),
          iM = (0, UM.i)("middleTextLower");
        return (0, zM.jsxs)("div", {
          className: "MiddleTextBottom",
          style: "sniper" === MM ? {
            visibility: "hidden"
          } : {},
          children: [(0, zM.jsx)(Ta, {
            text: rM,
            className: "MiddleText MiddleTextUpper SmallTextBold",
            maxHeightFraction: Ka
          }), (0, zM.jsx)(Ta, {
            text: iM,
            className: "MiddleText",
            maxHeightFraction: qa
          })]
        })
      })),
      Ka = .3,
      qa = .2;

    function Ta(MM) {
      let {
        text: rM,
        className: iM,
        maxHeightFraction: OM
      } = MM;
      const jM = (0, SM.useRef)(null),
        aM = (0, SM.useRef)(null);
      return function(MM, rM, iM, OM) {
        (0, SM.useLayoutEffect)((() => {
          const OM = MM.current,
            SM = rM.current;
          if (!OM || !SM) return;
          let jM = -1,
            aM = -1;
          const PM = MM => (SM.style.setProperty("zoom", String(MM)), OM.getBoundingClientRect().height),
            nM = () => {
              const MM = document.documentElement.clientHeight * iM;
              let rM = 1;
              if (PM(1) > MM) {
                let iM = .5,
                  OM = 1;
                for (let rM = 0; rM < 6; rM++) {
                  const rM = (iM + OM) / 2;
                  PM(rM) <= MM ? iM = rM : OM = rM
                }
                rM = iM
              }
              aM = PM(rM), jM = OM.getBoundingClientRect().width
            };
          nM();
          let QM = 0;
          const zM = () => {
              cancelAnimationFrame(QM), QM = requestAnimationFrame(nM)
            },
            LM = new ResizeObserver((() => {
              const {
                width: MM,
                height: rM
              } = OM.getBoundingClientRect();
              MM === jM && rM === aM || zM()
            }));
          return LM.observe(OM), window.addEventListener("resize", zM), () => {
            LM.disconnect(), window.removeEventListener("resize", zM), cancelAnimationFrame(QM), SM.style.removeProperty("zoom")
          }
        }), [MM, rM, iM, OM])
      }(jM, aM, OM, rM.content), (0, zM.jsx)("div", {
        ref: jM,
        className: "MiddleTextFit",
        children: (0, zM.jsx)(dj, {
          ref: aM,
          text: rM,
          className: iM
        })
      })
    }
    const Va = (0, SM.memo)((function() {
        const MM = (0, nM.e)("aimingOverlay", "none");
        (0, CM.d)();
        const rM = (0, UM.f)("useInventory");
        return (0, zM.jsxs)("div", {
          className: "BottomMiddleElements",
          style: "sniper" === MM ? {
            visibility: "hidden"
          } : {},
          children: [(0, zM.jsx)(LM, {}), (0, zM.jsx)(Di.e, {}), (0, zM.jsx)(ki, {}), (0, zM.jsx)(dM.g, {
            children: (0, zM.jsx)(NS, {})
          }), (0, zM.jsxs)("div", {
            className: "HotBarRow",
            children: [rM ? (0, zM.jsx)(tM.e, {}) : (0, zM.jsx)(tM.g, {}), (0, zM.jsx)(uM, {})]
          })]
        })
      })),
      ca = (0, SM.memo)((function(MM) {
        let {
          showChat: rM
        } = MM;
        const {
          t: iM
        } = (0, vM.A)(), {
          clientEscMenuOptions: OM,
          sessionReplayRecording: jM,
          isTouchScreen: PM
        } = (0, DM.m)(["clientEscMenuOptions", "sessionReplayRecording", "isTouchScreen"]);
        (0, CM.d)();
        const nM = (0, wj.k)(Pr.h),
          {
            userContext: QM,
            isUserContextUpdating: LM
          } = (0, lM.b)(),
          HM = (0, UM.f)("hideCoordinates"),
          hM = (0, UM.f)("customVariationTitle"),
          {
            requestedGameNameWithVariation: JM,
            gameNameWithVariation: dM,
            lobbyName: yM,
            shownLobbyName: EM
          } = (0, kM.j)("connectedGame"),
          eM = (0, mM.b)(JM, yM, !1),
          [bM, wM] = (0, SM.useState)(null),
          tM = (0, kS.o)(dM || JM || ""),
          gM = hM || tM || "";
        (0, SM.useEffect)((() => {
          LM || OS.c.getFavouriteLobbies(QM).then((MM => {
            console.log("Got favourite lobbies", MM), wM(MM)
          }))
        }), [LM, QM]);
        const uM = (0, SM.useRef)(null);
        return (0, SM.useLayoutEffect)((() => {
          const MM = uM.current,
            rM = document.documentElement,
            iM = new ResizeObserver((() => {
              rM.style.setProperty("--InGameHeaderRowsHeight", `${MM.offsetHeight}px`)
            }));
          return iM.observe(MM), () => {
            iM.disconnect(), rM.style.removeProperty("--InGameHeaderRowsHeight")
          }
        }), []), cO(uM), (0, zM.jsxs)(zM.Fragment, {
          children: [(0, zM.jsxs)("div", {
            className: aM()(KO.e, {
              Touchscreen: PM
            }),
            ref: uM,
            children: [(0, zM.jsxs)("div", {
              className: "InGameHeader",
              children: [(0, zM.jsxs)("div", {
                className: "InGameHeaderLogo",
                onMouseDown: MM => {
                  MM.stopPropagation(), MM.preventDefault()
                },
                onClick: () => {
                  DM.d.set({
                    openEverythingMenuName: ZO.m.SETTINGS
                  })
                },
                children: [(0, zM.jsx)(DS.d, {
                  showFace: !0,
                  loading: !1
                }), "bloxd.io"]
              }), (0, zM.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, zM.jsxs)("div", {
                className: "InGameHeaderGameName",
                children: [null === eM && (0, zM.jsx)(DS.d, {}), null !== eM && (0, zM.jsxs)(zM.Fragment, {
                  children: [eM, gM && ` ${gM}`]
                })]
              }), (0, zM.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, zM.jsx)("div", {
                className: "InGameHeaderLobbyName",
                children: EM
              }), (0, ZS.J)(yM) && (0, zM.jsx)(GM.i, {
                tooltipInner: (0, zM.jsx)("div", {
                  children: iM(null !== bM && bM.includes(yM) ? "customLobby:removeFromFavourites" : "customLobby:addToFavourites")
                }),
                children: (0, zM.jsx)("div", {
                  children: (0, zM.jsx)(Ai.y, {
                    isLiked: null !== bM && bM.includes(yM),
                    onClick: () => {
                      try {
                        if (!bM) return;
                        bM.includes(yM) ? (OS.c.unfavouriteLobby(QM, yM).catch((MM => {
                          console.error("Failed to favourite lobby", MM)
                        })), wM(bM.filter((MM => MM !== yM)))) : (OS.c.favouriteLobby(QM, yM).catch((MM => {
                          console.error("Failed to favourite lobby", MM)
                        })), wM([...bM, yM]))
                      } catch (MM) {
                        console.error("Failed to like lobby", MM)
                      }
                    },
                    isLoading: null === bM
                  })
                })
              }), (0, zM.jsx)(Gj, {}), (0, zM.jsx)(bj.b, {
                labelOnTouch: !nM
              })]
            }), (0, zM.jsx)(gS, {
              show: OM.showFPS,
              asText: jM
            }), !HM && OM.showCoordinates && (0, zM.jsx)(pS, {}), !HM && OM.showChunkCoordinates && (0, zM.jsx)(WS, {}), (0, zM.jsx)(lj, {})]
          }), (0, zM.jsx)("div", {
            className: "TopLeftElements",
            "data-holds-camera-keeper": "",
            children: (0, zM.jsx)("div", {
              className: "InGameHeaderAndChat",
              "data-holds-camera-keeper": "",
              children: rM && (0, zM.jsx)(sM.b, {})
            })
          })]
        })
      })),
      MP = (0, SM.memo)((function() {
        (0, CM.d)();
        const MM = (0, UM.i)("RightInfoText"),
          [rM, iM] = (0, SM.useState)(null);
        return (0, nr.j)(rM, ".RightElements"), MM.hasText ? (0, zM.jsx)("div", {
          className: "RightInfoDivContainer",
          children: (0, zM.jsx)(dj, {
            ref: iM,
            text: MM,
            className: "RightInfoDiv",
            children: (0, zM.jsx)("div", {
              className: "RightInfoDivInner",
              children: (0, zM.jsx)(QM.b, {
                text: MM.content
              })
            })
          })
        }) : null
      }))
  },
  5242: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => PM
    });
    var OM = iM(44),
      SM = iM(313),
      jM = iM(2026),
      aM = iM(1303);

    function PM(MM) {
      let {
        text: rM
      } = MM;
      const iM = [];
      let PM = "";
      return (0, SM.bc)(rM).forEach(((MM, rM) => {
        if ("string" === typeof MM || !(0, jM.d)(MM.icon)) return void(PM += "string" === typeof MM ? MM : MM.icon);
        const SM = Math.max(0, PM.trimEnd().search(/\S{1,12}$/));
        iM.push((0, aM.jsxs)(OM.Fragment, {
          children: [PM.slice(0, SM), (0, aM.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [PM.slice(SM), (0, aM.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": MM.icon,
              children: (0, aM.jsx)(jM.b, {
                itemName: MM.icon,
                amount: 0
              })
            })]
          })]
        }, rM)), PM = ""
      })), iM.push(PM), (0, aM.jsx)(aM.Fragment, {
        children: iM
      })
    }
  },
  37476: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => mM,
      f: () => zM,
      g: () => LM
    });
    var OM = iM(44),
      SM = iM(1116),
      jM = iM.n(SM),
      aM = iM(2026),
      PM = iM(1303);
    const nM = 350;
    let QM = 0;

    function zM() {
      return QM += 1, QM
    }

    function LM(MM, rM) {
      let iM = 0;
      for (const OM of MM) "ingredient" !== OM.kind && OM.Pz === rM && (iM += OM.amount);
      return iM > 0 ? {
        idx: rM,
        amount: iM
      } : null
    }

    function mM(MM) {
      var rM, iM;
      let {
        anim: SM,
        onComplete: QM
      } = MM;
      const zM = null !== (rM = SM.delayMs) && void 0 !== rM ? rM : 0,
        LM = null !== (iM = SM.durationMs) && void 0 !== iM ? iM : nM,
        [mM, HM] = (0, OM.useState)(SM.from),
        [hM, JM] = (0, OM.useState)(0 === zM),
        [dM, yM] = (0, OM.useState)(!1),
        lM = (0, OM.useRef)(!1);
      return (0, OM.useEffect)((() => {
        let MM, rM;
        const iM = () => {
            lM.current = !0, JM(!0), MM = requestAnimationFrame((() => {
              rM = requestAnimationFrame((() => {
                HM({
                  x: SM.to.x,
                  y: SM.to.y
                }), yM(!0)
              }))
            }))
          },
          OM = lM.current ? 0 : zM;
        let jM;
        OM > 0 ? jM = setTimeout(iM, OM) : iM();
        const aM = setTimeout((() => {
          QM(SM.id)
        }), OM + LM + 50);
        return () => {
          clearTimeout(jM), cancelAnimationFrame(MM), cancelAnimationFrame(rM), clearTimeout(aM)
        }
      }), [SM.id, SM.to.x, SM.to.y, QM, zM, LM]), (0, PM.jsx)("div", {
        className: jM()("CraftItemFlyAnimation", {
          Ingredient: "ingredient" === SM.kind,
          Waiting: !hM,
          Arrived: dM
        }),
        style: {
          left: mM.x,
          top: mM.y,
          "--fly-duration": `${LM}ms`
        },
        children: (0, PM.jsx)(aM.b, {
          itemName: SM.itemName,
          amount: SM.amount
        })
      })
    }
  },
  37460: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => ZM,
      g: () => YM
    });
    var OM = iM(44),
      SM = iM(2798),
      jM = iM(7077),
      aM = iM(2181),
      PM = iM(2640),
      nM = iM(9430),
      QM = iM(332),
      zM = iM(22),
      LM = iM(1516),
      mM = iM(30),
      HM = iM(1116),
      hM = iM.n(HM),
      JM = iM(313),
      dM = iM(37464),
      yM = iM(2006),
      lM = iM(2084),
      EM = iM(9301),
      UM = iM(1303);

    function GM(MM) {
      var rM, iM;
      let {
        slotIdx: jM
      } = MM;
      const aM = (0, lM.f)("hotbar", (MM => {
          var rM;
          return null !== (rM = MM.items[jM]) && void 0 !== rM ? rM : null
        })),
        nM = (0, lM.f)("hotbar", (MM => MM.ammo)),
        [zM, LM] = (0, OM.useState)(!1),
        mM = (0, OM.useRef)(null),
        [HM, JM] = (0, OM.useState)(null),
        [dM, GM] = (0, OM.useState)(null),
        CM = (0, PM.f)("maxAuraLevel"),
        eM = (0, SM.b)(),
        bM = (0, OM.useCallback)((() => {
          if (clearTimeout(mM.current), aM) {
            var MM, rM, iM, OM;
            const nM = aM.displayName,
              zM = [],
              LM = Array.isArray(nM) ? nM : [nM],
              mM = {
                fontStyle: null !== (MM = aM.attributes.customAttributes) && void 0 !== MM && MM.author ? "italic" : "normal"
              };
            for (const MM of LM) MM.str ? zM.push(MM) : zM.push({
              str: MM,
              style: mM
            });
            if (null !== (rM = aM.attributes.customAttributes) && void 0 !== rM && rM.enchantments) {
              zM.push(" ");
              const MM = Object.entries(aM.attributes.customAttributes.enchantments).sort(((MM, rM) => rM[1] - MM[1])),
                rM = aM.attributes.customAttributes.enchantmentData;
              for (const [iM, OM] of MM) {
                var SM, jM;
                const MM = null !== (SM = null === rM || void 0 === rM || null === (jM = rM[iM]) || void 0 === jM ? void 0 : jM.icon) && void 0 !== SM ? SM : `${iM} Enchantment`;
                var PM;
                if (OM < 4)
                  for (let rM = 0; rM < OM; rM++) zM.push({
                    icon: MM,
                    style: {
                      fontSize: "1.5em"
                    }
                  });
                else zM.push({
                  icon: MM,
                  style: {
                    fontSize: "1.5em"
                  }
                }), zM.push(null !== (PM = (0, QM.T)(OM)) && void 0 !== PM ? PM : OM.toString())
              }
            }
            JM(zM), GM(null !== (iM = null === (OM = aM.attributes.customAttributes) || void 0 === OM ? void 0 : OM.enchantmentTier) && void 0 !== iM ? iM : null)
          } else JM(null), GM(null);
          LM(!0), eM();
          const nM = null === aM || void 0 === aM ? void 0 : aM.attributes.customAttributes;
          void 0 === (null === nM || void 0 === nM ? void 0 : nM.shotsLeft) && (mM.current = setTimeout((() => {
            LM(!1)
          }), 2e3))
        }), [null === aM || void 0 === aM ? void 0 : aM.name, jM, null === aM || void 0 === aM ? void 0 : aM.instance, null === aM || void 0 === aM ? void 0 : aM.displayName]);
      (0, OM.useEffect)((() => (bM(), () => {
        clearTimeout(mM.current), LM(!1)
      })), [null === aM || void 0 === aM ? void 0 : aM.name, jM, null === aM || void 0 === aM ? void 0 : aM.instance, bM]);
      const wM = null === aM || void 0 === aM || null === (rM = aM.attributes.customAttributes) || void 0 === rM ? void 0 : rM.shotsLeft,
        tM = void 0 === wM ? null : (0, UM.jsx)("div", {
          className: "SelectedItemShotsLeft",
          children: `${wM}|${aM.requiresAmmo?`${nM}x${aM.clipSize}`:aM.clipSize}`
        }),
        gM = (0, EM.n)();
      return (0, UM.jsx)(UM.Fragment, {
        children: zM && aM && !gM.showing ? (0, UM.jsxs)("div", {
          className: hM()("SelectedItemName SmallTextBold", {
            NoAuraBar: 0 === CM,
            Enchanted: null !== dM
          }),
          style: {
            "--enchantmentColour": null !== (iM = QM.kb[dM]) && void 0 !== iM ? iM : QM.kb.None,
            "--duration": dM ? (0, QM.fb)(dM) + "s" : void 0
          },
          children: [dM && (0, UM.jsxs)("div", {
            className: "SelectedItemNameGradient",
            children: [(0, UM.jsx)(yM.b, {
              text: HM
            }), tM]
          }), (0, UM.jsxs)("div", {
            className: "SelectedItemNameNormal",
            children: [(0, UM.jsx)(yM.b, {
              text: HM
            }), tM]
          })]
        }) : null
      })
    }
    var CM = iM(37476),
      eM = iM(19),
      bM = iM(2039),
      wM = iM(625),
      tM = iM(2645),
      gM = iM(3809),
      uM = iM(3815);
    var RM = iM(1135),
      pM = iM(1130),
      WM = iM(2690);

    function sM() {
      return parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--touch-hotbar-ends-spare")) >= 0
    }
    var DM = iM(9498),
      kM = iM(1533);
    const ZM = (0, OM.memo)((function() {
      const [MM, rM] = (0, OM.useState)(0), iM = (0, PM.f)("useFullInventory"), aM = (0, PM.f)("highlightedHotbarSlots"), {
        isTouchScreen: nM,
        openInGameMenuName: QM
      } = (0, eM.m)(["isTouchScreen", "openInGameMenuName"]), mM = null !== QM && "inventory" !== QM, HM = (0, lM.j)("fullInventory") && "inventory" === QM, JM = function() {
        const MM = (0, RM.k)(((MM, rM) => `${MM}:${(0,pM.d)(MM,rM)?"portrait":"landscape"}`)),
          [rM, iM] = (0, OM.useState)(sM);
        return (0, OM.useLayoutEffect)((() => {
          iM(sM())
        }), [MM]), (0, LM.d)(WM.f, (() => {
          iM(sM())
        })), rM
      }(), yM = nM && !JM;
      ! function(MM, rM, iM) {
        (0, OM.useLayoutEffect)((() => {
          const OM = document.documentElement.classList;
          return MM && (OM.add("TouchHotbar"), OM.toggle("TouchHotbarKeysAbove", rM), OM.toggle("TouchHotbarHasBag", iM)), (0, gM.i)(), zM.i.Tz(uM.d), () => {
            OM.remove("TouchHotbar", "TouchHotbarKeysAbove", "TouchHotbarHasBag"), (0, gM.i)(), zM.i.Tz(uM.d)
          }
        }), [MM, rM, iM])
      }(nM, yM, iM);
      const [EM, tM] = (0, jM.e)("changedHotbarUsingNumkeys", !0), DM = (0, lM.f)("hotbar", (MM => MM.selectedSlot)), kM = null !== DM && void 0 !== DM ? DM : MM, ZM = (0, SM.b)(), NM = (0, OM.useRef)(null), AM = (0, LM.e)("pointerLockUpdate", Boolean(document.pointerLockElement));
      (0, LM.d)("inventoryDraggedItemUpdated", (MM => {
        NM.current = MM, ZM()
      })), (0, lM.c)("hotbarScrolled", (MM => {
        null === DM && FM(MM)
      })), (0, lM.c)("hotbarSlotRequested", (MM => {
        vM(MM), tM(!1)
      })), (0, lM.c)("numberKeyPressed", (() => {
        tM(!1)
      })), (0, lM.c)("hotbarDropRequested", (MM => {
        const rM = bM.gameBridge.latest("hotbar").items[kM];
        if (rM) {
          var iM;
          const OM = MM && null !== (iM = rM.amount) && void 0 !== iM ? iM : 1;
          bM.gameBridge.send("removeInventoryItem", {
            slot: kM,
            amount: OM,
            drop: !0
          })
        }
      }));
      const vM = MM => {
          bM.gameBridge.send("selectHotbarSlot", MM), rM(MM)
        },
        FM = MM => {
          vM((kM + MM + wM.q) % wM.q)
        };
      let BM, XM = null,
        IM = null,
        KM = MM => MM => {},
        qM = MM => rM => {
          vM(MM)
        },
        TM = MM => MM => {},
        VM = [];
      if (HM) {
        var cM;
        const MM = NM.current;
        if (null === MM || void 0 === MM || !MM.setHovered) return (0, UM.jsx)("div", {
          className: hM()("HotBarContainer", {
            Touch: nM,
            KeysAbove: yM
          }),
          children: (0, UM.jsx)("div", {
            className: "HotBar"
          })
        });
        XM = MM.draggedInfo, IM = MM.specialItemInfo, KM = MM.setHovered, qM = MM.pointerDown, TM = MM.pointerUp, BM = MM.variation, VM = null !== (cM = MM.craftFlyAnims) && void 0 !== cM ? cM : []
      }
      return (0, UM.jsxs)("div", {
        className: hM()("HotBarContainer", {
          Touch: nM,
          PopupOpen: nM && mM,
          KeysAbove: yM
        }),
        children: [(0, UM.jsxs)("div", {
          className: hM()("HotBar", {
            HoverDisabled: AM
          }),
          children: [nM && (0, UM.jsxs)(UM.Fragment, {
            children: [(0, UM.jsx)(fM, {
              useFullInventory: iM,
              inventoryOpen: HM
            }), (0, UM.jsx)(oM, {
              direction: "Previous",
              onPress: () => {
                FM(-1)
              }
            })]
          }), !nM && (0, UM.jsxs)(UM.Fragment, {
            children: [(0, UM.jsx)(YM, {}), (0, UM.jsx)("div", {
              className: "HotBarFiller"
            })]
          }), (0, UM.jsx)("div", {
            className: "HotBarGameItemsContainer",
            children: new Array(10).fill(0).map(((MM, rM) => (0, UM.jsx)(dM.d, {
              idx: rM,
              draggedInfo: XM,
              specialItemInfo: IM,
              craftFlyHoldbackInfo: (0, CM.g)(VM, rM),
              setHovered: KM(rM),
              pointerDown: qM(rM),
              pointerUp: TM(rM),
              variation: BM,
              isSelected: rM === kM,
              hotbarHighlighted: !0 === (null === aM || void 0 === aM ? void 0 : aM.includes(rM)),
              hoverDisabled: AM,
              showNumber: EM && !nM
            }, rM)))
          }), nM && (0, UM.jsx)(oM, {
            direction: "Next",
            onPress: () => {
              FM(1)
            }
          }), !nM && (0, UM.jsxs)(UM.Fragment, {
            children: [(0, UM.jsx)("div", {
              className: "HotBarFiller"
            }), (0, UM.jsx)("div", {
              className: hM()("HotBarItem ButtonHotBarItem", {
                HiddenButtonHotBarItem: !iM
              }),
              onPointerDown: () => {
                zM.i.Tz("toggleMenu", "inventory")
              },
              children: (0, UM.jsx)(xM, {})
            })]
          })]
        }), (0, UM.jsx)(GM, {
          slotIdx: kM
        })]
      })
    }));

    function oM(MM) {
      let {
        direction: rM,
        onPress: iM
      } = MM;
      return (0, UM.jsx)("div", {
        className: hM()("HotBarArrow", rM),
        ...kM.c,
        children: (0, UM.jsx)(aM.c, {
          icon: "Previous" === rM ? "caret-left" : "caret-right",
          touchPressOn: "pointerdown",
          onClick: iM
        })
      })
    }
    const fM = (0, OM.memo)((function(MM) {
        let {
          useFullInventory: rM,
          inventoryOpen: iM
        } = MM;
        const SM = (0, PM.f)("maxAuraLevel"),
          jM = (0, OM.useRef)(null),
          aM = (0, nM.c)();
        return function(MM, rM, iM) {
          (0, OM.useLayoutEffect)((() => (document.documentElement.classList.toggle("TouchHotbarHasShop", rM), zM.i.Tz(uM.d), () => {
            document.documentElement.classList.remove("TouchHotbarHasShop")
          })), [rM]), (0, OM.useLayoutEffect)((() => {
            const rM = MM.current.closest(".BottomMiddleElements");
            return rM.classList.toggle("TouchInventoryOpen", iM), () => {
              rM.classList.remove("TouchInventoryOpen")
            }
          }), [MM, iM])
        }(jM, aM, iM), (0, DM.f)(jM, aM, iM), (0, UM.jsxs)("div", {
          ref: jM,
          className: hM()("TouchInventoryKeys", {
            NoAuraBar: 0 === SM,
            InventoryOpen: iM
          }),
          children: [(0, UM.jsx)(YM, {
            touchKey: !0
          }), (0, UM.jsx)("div", {
            className: hM()("TouchInventoryKey BagKey", {
              Hidden: !rM
            }),
            ...kM.c,
            children: (0, UM.jsx)(xM, {
              touchKey: !0
            })
          })]
        })
      })),
      YM = (0, OM.memo)((function(MM) {
        let {
          touchKey: rM = !1
        } = MM;
        const iM = (0, nM.c)();
        return (0, UM.jsx)("div", {
          className: rM ? hM()("TouchInventoryKey ShopKey", {
            Hidden: !iM
          }) : hM()("HotBarItem ButtonHotBarItem", {
            HiddenButtonHotBarItem: !iM
          }),
          ...rM ? kM.c : {},
          children: (0, UM.jsx)(aM.c, {
            icon: (0, QM.ec)(),
            noaAction: "OpenShop",
            touchPressOn: "pointerdown",
            onClick: () => {
              iM && eM.d.set({
                openEverythingMenuName: JM.m.SHOP
              })
            },
            showTouchTutorialPubSubId: "showShopTouchTutorial",
            showRedDotPubSubId: "showShopIconRedDot",
            touchIconPosition: "topleft"
          })
        })
      }));

    function NM(MM) {
      let {
        player: rM
      } = MM;
      return rM.some((MM => null !== MM && QM.Rc.includes(MM.name)))
    }

    function AM(MM) {
      MM.creative || mM.g.getItem("LogInInventoryRedDotTutorialComplete") || (NM(MM) ? (zM.i.Tz("RedDotOpenInventoryIcon", !0), zM.i.Tz("TouchTutorialOpenInventoryIcon", !0)) : (zM.i.Tz("RedDotOpenInventoryIcon", !1), zM.i.Tz("TouchTutorialOpenInventoryIcon", !1)))
    }
    const xM = (0, OM.memo)((function(MM) {
      let {
        touchKey: rM = !1
      } = MM;
      (0, OM.useEffect)((() => {
        AM(bM.gameBridge.latest("inventory"))
      }), []), (0, lM.c)("inventory", AM);
      const iM = (0, tM.h)();
      return (0, LM.d)("toggleMenu", (MM => {
        iM.shown && (null !== MM && void 0 !== MM && MM.startsWith("inventory") && NM(bM.gameBridge.latest("inventory")) ? (mM.g.setItem("LogInInventoryRedDotTutorialComplete", !0), zM.i.Tz("RedDotOpenInventoryIcon", !1), zM.i.Tz("TouchTutorialOpenInventoryIcon", !1)) : "shop" === MM && zM.i.Tz("showShopTouchTutorial", !1))
      })), rM ? (0, UM.jsx)(aM.c, {
        icon: "backpack",
        noaAction: "OpenInventory",
        touchPressOn: "pointerdown",
        onClick: () => {
          zM.i.Tz("toggleMenu", "inventory")
        },
        showRedDotPubSubId: "RedDotOpenInventoryIcon",
        showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
        touchIconPosition: "topleft"
      }) : (0, UM.jsx)("div", {
        className: "HotBarButton",
        onPointerDown: () => {
          zM.i.Tz("toggleMenu", "inventory")
        },
        children: (0, UM.jsx)(aM.c, {
          icon: "backpack",
          noaAction: "OpenInventory",
          onPointerDown: MM => {
            zM.i.Tz("toggleMenu", "inventory"), MM.stopPropagation()
          },
          showRedDotPubSubId: "RedDotOpenInventoryIcon",
          showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
          touchIconPosition: "topleft"
        })
      })
    }))
  },
  37464: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => dM,
      g: () => hM
    });
    var OM = iM(44),
      SM = iM(1116),
      jM = iM.n(SM),
      aM = iM(2032),
      PM = iM(2026),
      nM = iM(2039),
      QM = iM(2084),
      zM = iM(37467),
      LM = iM(35035),
      mM = iM(1464),
      HM = iM(1303);
    const hM = (MM, rM, iM) => {
      let OM = rM,
        SM = !1;
      for (const jM of iM)(null === jM || void 0 === jM ? void 0 : jM.idx) === MM && (SM = !0, OM > 0 && (OM -= jM.amount));
      return {
        displayedAmt: OM,
        shown: !SM || OM > 0
      }
    };
    const JM = MM => {
        let {
          idx: rM
        } = MM;
        return (0, mM.y)() ? null : (0, HM.jsx)("div", {
          className: "HotbarItemNumber SmallTextBold",
          children: rM < 9 ? rM + 1 : 0
        })
      },
      dM = (0, OM.memo)((function(MM) {
        var rM, iM, OM;
        let {
          idx: SM,
          setHovered: mM,
          pointerDown: dM,
          pointerUp: yM,
          draggedInfo: lM,
          specialItemInfo: EM,
          craftFlyHoldbackInfo: UM,
          defaultIconB64: GM = null,
          variation: CM,
          isSelected: eM = !1,
          hotbarHighlighted: bM = !1,
          hoverDisabled: wM = !1,
          showNumber: tM = !1,
          showNewDot: gM = !1
        } = MM;
        const uM = (0, QM.f)("inventory", (MM => SM === zM.e ? null : (0, LM.j)(MM, SM)));
        let RM, pM, WM, sM;
        if (SM === zM.e) EM && (RM = EM.name, WM = EM.amount, sM = EM.attributes);
        else if (uM) {
          var DM;
          RM = uM.name, pM = uM.icon, WM = null !== (DM = uM.amount) && void 0 !== DM ? DM : 0, sM = uM.attributes
        }
        const kM = null === (rM = sM) || void 0 === rM || null === (iM = rM.customAttributes) || void 0 === iM ? void 0 : iM.enchantmentTier,
          ZM = (0, aM.f)(sM),
          {
            displayedAmt: oM,
            shown: fM
          } = hM(SM, WM, [lM, EM, UM]),
          YM = RM && fM,
          NM = void 0 !== CM && function(MM, rM) {
            const {
              enchantable: iM,
              salvageable: OM
            } = nM.gameBridge.latest("stationItems");
            return "Enchanting Table" === MM ? !0 === iM[rM] : "Salvaging Table" === MM && !0 === OM[rM]
          }(CM, RM);
        return (0, HM.jsxs)("div", {
          className: jM()("InvenItem", {
            Highlighted: YM && NM,
            Selected: eM,
            HotbarHighlighted: bM,
            HoverDisabled: wM
          }),
          onPointerEnter: () => {
            null === mM || void 0 === mM || mM(!0)
          },
          onPointerLeave: () => {
            null === mM || void 0 === mM || mM(!1)
          },
          onPointerDown: dM,
          onPointerUp: yM,
          "data-inven-idx": SM,
          children: [YM && (0, HM.jsx)(PM.b, {
            itemName: null !== (OM = pM) && void 0 !== OM ? OM : RM,
            amount: oM,
            enchantmentTier: kM,
            bar: ZM
          }), YM && gM && (0, HM.jsx)("div", {
            className: "InvenItemNewDot"
          }), tM && (0, HM.jsx)(JM, {
            idx: SM
          }), GM && !YM && (0, HM.jsx)("div", {
            className: "InvenItemUnfilled",
            style: {
              backgroundImage: `url(${GM})`
            }
          })]
        })
      }))
  },
  37467: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => OM,
      e: () => SM
    });
    const OM = -1,
      SM = -2
  },
  37944: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => wM
    });
    var OM = iM(44),
      SM = iM(37950),
      jM = iM(2006),
      aM = iM(605),
      PM = iM(22),
      nM = iM(1116),
      QM = iM.n(nM),
      zM = iM(37492),
      LM = iM(2823),
      mM = iM(3025),
      HM = iM(2856),
      hM = iM(2826),
      JM = iM(3989),
      dM = iM(37495),
      yM = iM(19),
      lM = iM(2141),
      EM = iM(2488),
      UM = iM(1229),
      GM = iM(5309),
      CM = iM(2084),
      eM = iM(83),
      bM = iM(1303);
    const wM = (0, OM.memo)((function() {
      const MM = (0, SM.b)(),
        rM = (0, CM.j)("players"),
        iM = (0, CM.j)("lobbyLeaderboardRows"),
        PM = (0, CM.j)("hiddenPlayerNames"),
        nM = (0, OM.useRef)(null),
        [QM, zM] = (0, OM.useReducer)((MM => MM + 1), 0);
      return (0, OM.useEffect)((() => (0, lM.d)((() => {
        zM()
      }))), []), (0, bM.jsx)("div", {
        className: "LobbyLeaderboardContainer Menu",
        children: (0, bM.jsx)("div", {
          className: "MenuBody",
          children: function() {
            if (!MM) return (0, bM.jsx)(bM.Fragment, {});
            const OM = [...rM.ids],
              SM = {},
              QM = {};
            for (const MM of OM) {
              var zM, LM;
              SM[MM] = null === (zM = iM[MM]) || void 0 === zM ? void 0 : zM.colour;
              const rM = null === (LM = iM[MM]) || void 0 === LM ? void 0 : LM.values;
              rM && (QM[MM] = {
                ...rM
              })
            }
            const HM = Object.keys(MM);
            HM.sort(((rM, iM) => MM[rM].sortPriority - MM[iM].sortPriority)), OM.sort(((rM, iM) => {
              if (!QM[rM] || !QM[iM]) return 0;
              for (const OM of HM) {
                const SM = QM[rM][OM],
                  jM = QM[iM][OM];
                let aM = 0;
                if ("string" == typeof SM && "string" == typeof jM ? aM = SM.localeCompare(jM) : "number" == typeof SM && "number" == typeof jM ? aM = SM - jM : "number" == typeof SM && "string" == typeof jM ? aM = 1 : "string" == typeof SM && "number" == typeof jM && (aM = -1), aM) return aM * ("ascending" === MM[OM].sortOrder ? 1 : -1)
              }
              return 0
            }));
            for (const MM of OM) {
              var hM, JM, dM;
              const {
                name: OM,
                ranks: SM,
                cosmetics: jM
              } = rM.byId[MM], PM = [], nM = null !== (hM = null === (JM = iM[MM]) || void 0 === JM || null === (dM = JM.tags) || void 0 === dM ? void 0 : dM.flatMap((MM => 0 === MM.length ? MM : [...MM, String.fromCharCode(8198)]))) && void 0 !== hM ? hM : [];
              PM.push(...nM), PM.push(...(0, UM.y)(SM, OM, (null === jM || void 0 === jM ? void 0 : jM.nameColour) === aM.d || null === jM || void 0 === jM ? void 0 : jM.nameColour)), QM[MM] ??= {}, QM[MM].name = PM
            }

            function yM(MM, iM) {
              if (QM[MM] && void 0 !== QM[MM][iM]) {
                if ("name" === iM) {
                  const {
                    name: OM,
                    cosmetics: SM
                  } = rM.byId[MM];
                  return (0, bM.jsxs)("div", {
                    className: "PlayerPfpAndName",
                    children: [SM && (0, bM.jsx)(EM.c, {
                      cosmetics: SM
                    }), " ", (0, bM.jsx)(jM.b, {
                      text: QM[MM][iM],
                      friendBadgeFor: (0, lM.f)(OM, PM) ? OM : void 0
                    })]
                  })
                }
                return (0, bM.jsx)(jM.b, {
                  text: QM[MM][iM]
                })
              }
              return ""
            }
            const CM = Object.keys(MM).filter((rM => !0 !== MM[rM].hidden)).map((rM => {
              var iM;
              return {
                key: rM,
                header: (0, bM.jsx)(jM.b, {
                  text: null !== (iM = MM[rM].displayName) && void 0 !== iM ? iM : ""
                })
              }
            }));
            return (0, bM.jsx)("div", {
              ref: nM,
              className: "LobbyLeaderboard",
              children: (0, bM.jsx)(GM.c, {
                columns: CM,
                rows: OM,
                getRowKey: MM => MM,
                renderRow: iM => {
                  const OM = iM !== rM.localId;
                  return (0, bM.jsx)(tM, {
                    playerId: iM,
                    playerName: rM.byId[iM].name,
                    isOtherPlayer: OM,
                    opensProfileCard: (0, mM.i)(OM, rM.byId[iM].name, PM),
                    lobbyLeaderboardInfo: MM,
                    getPlayerValue: yM,
                    playerColors: SM
                  })
                }
              })
            })
          }()
        })
      })
    }));

    function tM(MM) {
      let {
        playerId: rM,
        playerName: iM,
        isOtherPlayer: SM,
        opensProfileCard: jM,
        lobbyLeaderboardInfo: aM,
        getPlayerValue: nM,
        playerColors: lM
      } = MM;
      const EM = (0, OM.useRef)(null);
      (0, OM.useEffect)((() => () => {
        LM.e.closeIfOwner(EM)
      }), []);
      const UM = {
          icon: "flag",
          text: "Report",
          onClick: () => {
            PM.i.Tz("OpenReportMenu", {
              playerEId: rM,
              playerName: iM,
              Kz: null,
              serverChatMsgId: null
            })
          }
        },
        GM = () => ({
          ...(0, mM.g)(rM, iM),
          showLocation: !1,
          status: null,
          extraActions: [UM],
          moderationActions: null === iM ? [] : (0, dM.b)(iM),
          friendRequestSource: "leaderboard"
        });
      return (0, bM.jsxs)("tr", {
        ref: EM,
        "data-pad-focusable": jM || void 0,
        [LM.g]: jM || void 0,
        onClick: jM ? () => {
          var MM;
          LM.e.toggle(EM, {
            ...GM(),
            anchor: null !== (MM = EM.current.querySelector(".PlayerPfpAndName")) && void 0 !== MM ? MM : EM.current
          })
        } : void 0,
        onContextMenu: jM ? MM => {
          (0, HM.c)(EM, MM, GM(), yM.d.get("isTouchScreen"))
        } : void 0,
        onPointerDown: jM ? MM => {
          (0, hM.b)(MM, (() => (0, mM.g)(rM, iM).playerSocialPreview))
        } : void 0,
        children: [Object.keys(aM).map((MM => !0 === aM[MM].hidden ? null : (0, bM.jsxs)("td", {
          className: QM()("LobbyLeaderboardValue SmallTextBold", {
            LobbyLeaderboardValueHighlighted: !SM
          }),
          children: [(0, bM.jsx)("div", {
            className: "LobbyLeaderboardValueText",
            children: nM(rM, MM)
          }), (0, bM.jsx)("div", {
            className: "LobbyLeaderboardValueBg",
            style: {
              backgroundColor: lM[rM]
            }
          })]
        }, MM))), SM && !jM && (0, bM.jsx)(zM.d, {
          className: "LobbyLeaderboardRowFloatingActions",
          triggerElementRef: EM,
          options: [{
            icon: UM.icon,
            text: UM.text,
            onPointerDown: UM.onClick
          }, ...null === iM || eM.featureFlags.useSocialFeatures ? [] : (0, JM.c)(null, iM)]
        })]
      })
    }
  },
  37495: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => zM
    });
    var OM = iM(2067),
      SM = iM(2653),
      jM = iM(37498);
    const aM = {
      kick: "lobbyManageEntry:kicked",
      ban: "lobbyManageEntry:banned",
      unban: "lobbyManageEntry:unbanned"
    };

    function PM(MM, rM) {
      return async () => function(MM, rM, iM) {
        return null === rM ? {
          message: {
            key: "lobbyManageEntry:noAnswer"
          },
          next: null
        } : rM.ok ? {
          message: {
            key: aM[MM.type]
          },
          next: iM
        } : {
          message: {
            fromServer: rM.message
          },
          next: null
        }
      }(MM, await (0, jM.e)(MM), rM())
    }

    function nM(MM) {
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
        run: PM({
          type: "ban",
          name: MM
        }, (() => function(MM) {
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
            run: PM({
              type: "unban",
              name: MM
            }, (() => null))
          }
        }(MM)))
      }
    }

    function QM(MM, rM) {
      if (null === MM) return [];
      const iM = [],
        OM = function(MM, rM) {
          var iM, OM;
          return null !== (iM = null !== (OM = MM.here.find((MM => MM.name === rM))) && void 0 !== OM ? OM : MM.away.find((MM => MM.name === rM))) && void 0 !== iM ? iM : null
        }(MM, rM);
      var jM, aM;
      return null !== OM && void 0 !== OM && OM.can.kick && iM.push((jM = rM, aM = OM.can.ban, {
        kind: "act",
        icon: "person-falling-burst",
        text: "lobbyManageEntry:kick",
        destructive: !1,
        confirm: null,
        analyticsClick: {
          id: "lobby_manage.kick",
          value: "profile_card"
        },
        run: PM({
          type: "kick",
          name: jM
        }, (() => aM ? nM(jM) : null))
      })), null !== OM && void 0 !== OM && OM.can.ban && iM.push(nM(rM)), iM.push({
        kind: "leave",
        icon: "users-gear",
        text: "lobbyManageEntry:manageLobby",
        destructive: !1,
        onClick: () => {
          (0, SM.h)({
            page: "players",
            focusName: rM,
            source: "profile_card"
          })
        }
      }), iM
    }

    function zM(MM) {
      var rM;
      return QM(null !== (rM = OM.d.get("lobbyManage")) && void 0 !== rM ? rM : null, MM)
    }
  },
  37498: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => zM,
      e: () => nM
    });
    var OM = iM(1548),
      SM = iM(2067),
      jM = iM(2039);
    const aM = 1e4;
    let PM = 0;

    function nM(MM) {
      const rM = ++PM;
      return new Promise((iM => {
        const PM = rM => {
            nM(), clearTimeout(QM), !1 === (null === rM || void 0 === rM ? void 0 : rM.ok) && (0, OM.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: MM.type
            }), iM(rM)
          },
          nM = SM.d.subscribe("lobbyManage", (MM => {
            const iM = function(MM, rM) {
              var iM;
              return null !== (iM = null === MM || void 0 === MM ? void 0 : MM.results.find((MM => MM.requestId === rM))) && void 0 !== iM ? iM : null
            }(MM, rM);
            null !== iM && PM(iM)
          })),
          QM = setTimeout((() => {
            PM(null)
          }), aM);
        jM.gameBridge.send("lobbyManage", {
          ...MM,
          requestId: rM
        })
      }))
    }
    const QM = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class zM {
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nM;
        this.onChange = MM, this.sendAction = rM, this.pending = new Map, this.statuses = new Map
      }
      send(MM, rM, iM) {
        var OM;
        return this.statuses.delete(rM), this.pending.set(rM, (null !== (OM = this.pending.get(rM)) && void 0 !== OM ? OM : 0) + 1), this.sendAction(MM).then((MM => {
          var OM;
          const SM = null !== MM && void 0 !== MM ? MM : {
              requestId: -1,
              ok: !1,
              message: QM
            },
            jM = (null !== (OM = this.pending.get(rM)) && void 0 !== OM ? OM : 1) - 1;
          jM > 0 ? this.pending.set(rM, jM) : this.pending.delete(rM);
          const aM = !SM.ok || SM.message.length > 0 ? SM.message : null === iM ? null : [iM];
          return null !== aM && this.statuses.set(rM, {
            ok: SM.ok,
            text: aM,
            until: Date.now() + 4e3
          }), this.onChange(), SM
        }))
      }
      show(MM, rM) {
        this.statuses.set(MM, {
          ...rM,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(MM) {
        for (const [rM, iM] of this.statuses) iM.until <= MM && this.statuses.delete(rM)
      }
      nextDeadline() {
        let MM = null;
        for (const iM of this.statuses.values()) {
          var rM;
          MM = Math.min(null !== (rM = MM) && void 0 !== rM ? rM : 1 / 0, iM.until)
        }
        return MM
      }
      statusOf(MM, rM) {
        const iM = this.statuses.get(MM);
        return !iM || iM.until <= rM ? null : {
          ok: iM.ok,
          text: iM.text
        }
      }
      isPending(MM) {
        return this.pending.has(MM)
      }
    }
  },
  5173: (MM, rM, iM) => {
    iM.d(rM, {
      h: () => lM,
      e: () => yM
    });
    var OM = iM(44),
      SM = iM(1516),
      jM = iM(2006),
      aM = iM(5182),
      PM = iM(1303);
    const nM = (0, OM.memo)((function(MM) {
      let {
        initialParameters: rM
      } = MM;
      const iM = (0, OM.useRef)(null),
        SM = (0, OM.useRef)(null),
        nM = (0, OM.useRef)(0),
        QM = (0, OM.useRef)(null),
        zM = rM.description,
        LM = rM.sO,
        {
          scale: mM,
          rotation: HM
        } = null !== rM && void 0 !== rM ? rM : {},
        hM = (0, aM.g)();
      return (0, OM.useEffect)((() => {
        const MM = hM.onFrame((() => {
          const MM = hM.getState();
          if (!MM.isActive || !iM.current || !SM.current) return;
          const rM = MM.state;
          if (iM.current.value = rM.progress, rM.clickCount > nM.current) {
            nM.current = rM.clickCount;
            const MM = SM.current;
            MM.classList.add("pulse"), QM.current = setTimeout((() => {
              MM.classList.remove("pulse")
            }), 100)
          }
        }));
        return () => {
          clearTimeout(QM.current), MM()
        }
      }), [hM]), (0, PM.jsx)(PM.Fragment, {
        children: (0, PM.jsxs)("div", {
          className: "QTEProgressBarWrapper",
          style: {
            ...null !== mM && {
              "--scale": mM
            },
            ...null !== HM && {
              "--rotation": `${HM}deg`
            }
          },
          children: [(0, PM.jsx)("progress", {
            id: "catch",
            max: 100,
            className: "QTEProgressBar",
            ref: iM
          }), (0, PM.jsx)("span", {
            className: "QTEProgressBarInteractionIndicator",
            ref: SM,
            children: (0, PM.jsx)(jM.b, {
              text: [{
                icon: LM
              }]
            })
          }), (0, PM.jsx)("div", {
            className: "QTEProgressBarDescription",
            children: (0, PM.jsx)(jM.b, {
              text: zM
            })
          })]
        })
      })
    }));
    var QM = iM(1116),
      zM = iM.n(QM);
    const LM = 2 * Math.PI * 90,
      mM = (0, OM.memo)((function(MM) {
        let {
          initialParameters: rM
        } = MM;
        const iM = (0, OM.useRef)(null),
          SM = (0, OM.useRef)(null),
          nM = (0, OM.useRef)(null),
          QM = rM.label,
          mM = rM.icon,
          HM = rM.ZO,
          {
            scale: hM,
            rotation: JM,
            oO: dM
          } = null !== rM && void 0 !== rM ? rM : {},
          yM = (0, aM.g)();
        return (0, OM.useEffect)((() => {
          const MM = yM.onFrame((() => {
            var MM, rM;
            const OM = yM.getState();
            if (!OM.isActive || !SM.current) return;
            const jM = OM.state,
              aM = null !== (MM = jM.timeRemaining) && void 0 !== MM ? MM : 0,
              PM = null !== (rM = jM.kO) && void 0 !== rM ? rM : 1,
              QM = LM * (1 - aM / PM);
            SM.current.style.strokeDashoffset = `${QM}`, iM.current && (iM.current.style.opacity = aM > 0 ? "1" : "0"), nM.current && HM && (nM.current.textContent = `${(aM/1e3).toFixed(1)}s`)
          }));
          return () => {
            MM()
          }
        }), [yM, HM]), (0, PM.jsxs)("div", {
          className: "QTETimedClick",
          ref: iM,
          style: {
            ...null !== hM && {
              "--scale": hM
            },
            ...null !== JM && {
              "--rotation": `${JM}deg`
            }
          },
          children: [(0, PM.jsxs)("div", {
            className: "QTETimedClickCircleContainer",
            children: [(0, PM.jsxs)("svg", {
              className: "QTETimedClickCircularProgress",
              viewBox: "0 0 200 200",
              children: [(0, PM.jsx)("circle", {
                className: "QTETimedClickProgressTrack",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12"
              }), (0, PM.jsx)("circle", {
                className: "QTETimedClickProgressArc",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12",
                strokeLinecap: "square",
                strokeDasharray: LM,
                ref: SM
              })]
            }), (0, PM.jsx)("div", {
              className: "QTETimedClickCenterContent",
              children: (0, PM.jsx)(jM.b, {
                text: [{
                  icon: mM
                }],
                className: zM()("QTETimedClickInnerText", {
                  QTETimedClickBreathe: dM
                })
              })
            })]
          }), (0, PM.jsxs)("div", {
            className: "QTETimedClickRightTextContainer",
            children: [(0, PM.jsx)(jM.b, {
              text: QM,
              className: "QTETimedClickLabelText"
            }), HM && (0, PM.jsx)("span", {
              className: "QTETimedClickTimeText",
              ref: nM
            })]
          })]
        })
      })),
      HM = (0, OM.memo)((function(MM) {
        let {
          initialParameters: rM
        } = MM;
        const iM = (0, OM.useRef)(null),
          SM = (0, OM.useRef)(null),
          nM = (0, OM.useRef)(null),
          QM = (0, OM.useRef)(!1),
          zM = rM.description,
          LM = null === rM || void 0 === rM ? void 0 : rM.icon,
          mM = (0, aM.g)();
        return (0, OM.useEffect)((() => {
          const MM = mM.onFrame((() => {
            const MM = mM.getState();
            if (!MM.isActive) return;
            const rM = MM.state;
            if (iM.current) {
              const MM = 100 * (rM.catchZonePosition - rM.YO / 2);
              iM.current.style.left = `${MM}%`, iM.current.style.width = 100 * rM.YO + "%", rM.isCatching !== QM.current && (QM.current = rM.isCatching, rM.isCatching ? iM.current.classList.add("catching") : iM.current.classList.remove("catching"))
            }
            SM.current && (SM.current.style.left = 100 * rM.moverPosition + "%"), nM.current && (nM.current.value = rM.progress)
          }));
          return () => {
            MM()
          }
        }), [mM]), (0, PM.jsxs)("div", {
          className: "QTEGravityBar",
          children: [(0, PM.jsx)("div", {
            className: "QTEGravityBarDescription",
            children: (0, PM.jsx)(jM.b, {
              text: zM
            })
          }), (0, PM.jsx)("progress", {
            max: 100,
            className: "QTEGravityBarProgress",
            ref: nM
          }), (0, PM.jsxs)("div", {
            className: "QTEGravityBarTrack",
            children: [(0, PM.jsx)("div", {
              className: "QTEGravityBarCatchZone",
              ref: iM
            }), (0, PM.jsx)("div", {
              className: "QTEGravityBarMover",
              ref: SM,
              children: (0, PM.jsx)("span", {
                children: LM && (0, PM.jsx)(jM.b, {
                  text: [{
                    icon: LM,
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
    var hM = iM(625);
    const JM = (0, OM.memo)((function(MM) {
        let {
          initialParameters: rM
        } = MM;
        const iM = (0, OM.useRef)(null),
          SM = rM.label,
          nM = rM.IO,
          {
            icon: QM,
            scale: zM,
            rotation: LM
          } = null !== rM && void 0 !== rM ? rM : {},
          mM = 100 * (.5 - nM / 2),
          HM = 100 * nM,
          JM = (0, aM.g)();
        return (0, OM.useEffect)((() => {
          const MM = JM.onFrame((() => {
            const MM = JM.getState();
            if (!MM.isActive || !iM.current) return;
            const rM = MM.state;
            iM.current.style.left = 100 * rM.markerPosition + "%"
          }));
          return () => {
            MM()
          }
        }), [JM]), (0, PM.jsxs)("div", {
          className: "QTEPrecisionBarWrapper",
          style: {
            ...!(0, hM.J)(zM) && {
              "--scale": zM
            },
            ...!(0, hM.J)(LM) && {
              "--rotation": `${LM}deg`
            }
          },
          children: [QM && (0, PM.jsx)(jM.b, {
            text: [{
              icon: QM
            }],
            className: "QTEPrecisionBarIcon"
          }), (0, PM.jsxs)("div", {
            className: "QTEPrecisionBarTrack",
            children: [(0, PM.jsx)("div", {
              className: "QTEPrecisionBarSuccessZone",
              style: {
                left: `${mM}%`,
                width: `${HM}%`
              }
            }), (0, PM.jsx)("div", {
              className: "QTEPrecisionBarMarker",
              ref: iM
            })]
          }), (0, PM.jsx)("div", {
            className: "QTEPrecisionBarLabel",
            children: (0, PM.jsx)(jM.b, {
              text: SM
            })
          })]
        })
      })),
      dM = (0, OM.memo)((function(MM) {
        let {
          initialParameters: rM
        } = MM;
        const iM = (0, OM.useRef)(null),
          [SM, nM] = (0, OM.useState)((() => new Array(rM.qO).fill("pending"))),
          [QM, zM] = (0, OM.useState)((() => {
            const MM = rM.MS;
            return (0, hM.J)(MM) || MM <= 0 ? [] : new Array(MM).fill("pending")
          })),
          LM = rM.label,
          {
            icon: mM
          } = rM,
          HM = (0, OM.useRef)(0),
          JM = (0, OM.useRef)(0),
          dM = (0, OM.useRef)([]),
          yM = (0, aM.g)();
        return (0, OM.useEffect)((() => {
          const MM = yM.onFrame((() => {
            const MM = yM.getState();
            if (!MM.isActive || !iM.current) return;
            const rM = MM.state,
              OM = 30 + 60 * rM.outerCircleProgress;
            if (iM.current.setAttribute("r", String(OM)), !0 === rM.lastClickResult && rM.successes > HM.current) {
              iM.current.classList.remove("QTERhythmClickOuterCircle--miss"), iM.current.classList.add("QTERhythmClickOuterCircle--hit");
              const MM = setTimeout((() => {
                var MM;
                null === (MM = iM.current) || void 0 === MM || MM.classList.remove("QTERhythmClickOuterCircle--hit")
              }), 200);
              dM.current.push(MM)
            } else if (!1 === rM.lastClickResult && rM.misses > JM.current) {
              iM.current.classList.remove("QTERhythmClickOuterCircle--hit"), iM.current.classList.add("QTERhythmClickOuterCircle--miss");
              const MM = setTimeout((() => {
                var MM;
                null === (MM = iM.current) || void 0 === MM || MM.classList.remove("QTERhythmClickOuterCircle--miss")
              }), 200);
              dM.current.push(MM)
            }
            rM.successes === HM.current && rM.misses === JM.current || (HM.current = rM.successes, JM.current = rM.misses, nM((MM => {
              const iM = [...MM];
              for (let OM = 0; OM < rM.qO; OM++) iM[OM] = OM < rM.successes ? "success" : "pending";
              return iM
            })), zM((MM => {
              if (0 === MM.length) return MM;
              const iM = [...MM];
              for (let OM = 0; OM < iM.length; OM++) iM[OM] = OM < rM.misses ? "miss" : "pending";
              return iM
            })))
          }));
          return () => {
            MM();
            for (const MM of dM.current) clearTimeout(MM);
            dM.current = []
          }
        }), [yM]), (0, PM.jsxs)("div", {
          className: "QTERhythmClickWrapper",
          children: [(0, PM.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: SM.map(((MM, rM) => (0, PM.jsx)("div", {
              className: "QTERhythmClickDot" + ("success" === MM ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
            }, rM)))
          }), (0, PM.jsxs)("div", {
            className: "QTERhythmClickCircleContainer",
            children: [(0, PM.jsxs)("svg", {
              className: "QTERhythmClickSvg",
              viewBox: "0 0 200 200",
              children: [(0, PM.jsx)("circle", {
                className: "QTERhythmClickInnerCircle",
                cx: "100",
                cy: "100",
                r: 30
              }), (0, PM.jsx)("circle", {
                className: "QTERhythmClickOuterCircle",
                cx: "100",
                cy: "100",
                r: 90,
                ref: iM
              })]
            }), mM && (0, PM.jsx)("div", {
              className: "QTERhythmClickCenterContent",
              children: (0, PM.jsx)(jM.b, {
                text: [{
                  icon: mM
                }],
                className: "QTERhythmClickIcon"
              })
            })]
          }), QM.length > 0 && (0, PM.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: QM.map(((MM, rM) => (0, PM.jsx)("div", {
              className: "QTERhythmClickDot" + ("miss" === MM ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
            }, rM)))
          }), (0, PM.jsx)("div", {
            className: "QTERhythmClickLabel",
            children: (0, PM.jsx)(jM.b, {
              text: LM
            })
          })]
        })
      }));

    function yM(MM) {
      let {
        qte: rM
      } = MM;
      switch (rM.type) {
        case "progressBar":
          return (0, PM.jsx)(nM, {
            initialParameters: rM.parameters
          });
        case "timedClick":
          return (0, PM.jsx)(mM, {
            initialParameters: rM.parameters
          });
        case "gravityBar":
          return (0, PM.jsx)(HM, {
            initialParameters: rM.parameters
          });
        case "precisionBar":
          return (0, PM.jsx)(JM, {
            initialParameters: rM.parameters
          });
        case "rhythmClick":
          return (0, PM.jsx)(dM, {
            initialParameters: rM.parameters
          });
        default:
          return console.warn("Unknown QTE type"), null
      }
    }
    const lM = (0, OM.memo)((function() {
      const [MM, rM] = (0, OM.useState)({
        type: null,
        parameters: null,
        state: null,
        isActive: !1
      });
      return (0, SM.d)("qteStateUpdated", (MM => {
        rM(MM)
      })), MM.isActive && MM.type ? (0, PM.jsx)("div", {
        className: "QTE",
        "data-camera-keeper": "",
        children: (0, PM.jsx)(yM, {
          qte: MM
        })
      }) : null
    }))
  },
  5182: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => PM,
      g: () => nM
    });
    var OM = iM(44),
      SM = iM(1327),
      jM = iM(5184);
    const aM = {
        getState: () => jM.d.getCurrentState(),
        onFrame: SM.v
      },
      PM = (0, OM.createContext)(aM);

    function nM() {
      return (0, OM.useContext)(PM)
    }
  },
  37291: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => zM,
      g: () => mM
    });
    var OM = iM(44),
      SM = iM(1429),
      jM = iM(1188),
      aM = iM(1396),
      PM = iM(3875),
      nM = iM(5335),
      QM = iM(1303);

    function zM(MM) {
      let {
        loading: rM,
        schematics: iM,
        onSchematicPicked: OM,
        selectedSchematicIdList: SM = [],
        disableAutoExport: nM
      } = MM;
      const {
        t: zM
      } = (0, jM.A)();
      return (0, QM.jsxs)("div", {
        className: "SchematicList",
        children: [rM && (0, QM.jsx)(aM.d, {}), !rM && 0 === iM.length && (0, QM.jsx)("div", {
          className: "NoSchematicsText",
          children: zM("worldBuilder:noSavedSchematic")
        }), !rM && iM.map((MM => (0, QM.jsx)(PM.h, {
          source: {
            type: "schematic",
            schematic: MM
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            OM(MM)
          },
          isSelected: SM.includes(MM.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: MM.isAutoExported && nM,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, MM.schematicId)))]
      })
    }

    function LM(MM) {
      let {
        ownedSchematics: rM,
        currentWorldSchematicId: iM,
        onClose: SM
      } = MM;
      const {
        t: aM
      } = (0, jM.A)(), [PM, LM] = (0, OM.useState)(null);
      return (0, QM.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === PM && (0, QM.jsxs)(QM.Fragment, {
          children: [(0, QM.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: aM("worldBuilder:schematicList")
          }), (0, QM.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: aM("worldBuilder:clickSchematicForOptions")
          }), (0, QM.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, QM.jsx)(zM, {
              loading: !1,
              schematics: rM,
              onSchematicPicked: MM => {
                LM(MM)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== PM && (0, QM.jsx)(nM.g, {
          schematic: PM,
          inSourceWorld: PM.schematicId === iM,
          onSchematicUpdate: MM => {
            LM(MM)
          },
          onClose: () => {
            LM(null), SM()
          }
        })]
      })
    }

    function mM(MM) {
      let {
        ownedSchematics: rM,
        currentWorldSchematicId: iM,
        onClose: OM
      } = MM;
      SM.NotificationProvider.showCustomPopup({
        body: MM => (0, QM.jsx)(LM, {
          ownedSchematics: rM,
          currentWorldSchematicId: iM,
          onClose: MM
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: OM,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  37852: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => GM,
      d: () => UM
    });
    var OM = iM(4589),
      SM = iM(1516),
      jM = iM(44),
      aM = iM(6944),
      PM = iM(4581),
      nM = iM(1313),
      QM = iM(2039),
      zM = iM(2006),
      LM = iM(1520),
      mM = iM(1188),
      HM = iM(37855),
      hM = iM(1116),
      JM = iM.n(hM),
      dM = iM(1360),
      yM = iM(1398),
      lM = iM(1287),
      EM = iM(1303);
    const UM = "SleepingOverlay";

    function GM() {
      const {
        t: MM
      } = (0, mM.A)(), [rM, iM] = (0, jM.useState)(!1), [hM, GM] = (0, jM.useState)(null), [eM, bM] = (0, jM.useState)(1), [wM, tM] = (0, jM.useState)(!1), [gM, uM] = (0, jM.useState)(!1), RM = (0, jM.useRef)(0), pM = (0, jM.useRef)(!1), WM = (0, jM.useRef)(!1), sM = (0, jM.useRef)(), DM = (0, jM.useRef)(null);

      function kM() {
        const MM = null !== hM && void 0 !== hM ? hM : "Rested Speed";
        QM.gameBridge.send("wakeUp", gM ? MM : null), DM.current = null, iM(!1), GM(null), bM(1), tM(!1), uM(!1)
      }

      function ZM() {
        return !wM && (kM(), !0)
      }
      return (0, SM.d)("PlayerPhysicsTypeUpdate", (MM => {
        MM !== DM.current && (DM.current = MM, MM === aM.n.SLEEPING ? (WM.current || (RM.current = QM.gameBridge.lookup("cameraZoom", null), WM.current = !0), pM.current = !0, QM.gameBridge.send("setCameraZoom", 3), iM(!0), bM(function() {
          for (const MM of QM.gameBridge.lookup("blocksStandingOn", null)) {
            if (HM.c.leafBeds.includes(MM)) return console.log(`Found leaf bed: ${MM}`), 1;
            if (HM.c.woolBeds.includes(MM)) return console.log(`Found woold bed: ${MM}`), 2;
            if (HM.c.strongBeds.includes(MM)) return console.log(`Found strong bed ${MM}`), 3
          }
          return 1
        }())) : (WM.current = !1, iM(!1), GM(null), bM(1)))
      })), (0, jM.useEffect)((() => () => {
        (0, nM.v)(UM)
      }), []), (0, jM.useEffect)((() => {
        rM ? (0, nM.z)(UM) : ((0, nM.v)(UM), pM.current && (QM.gameBridge.send("setCameraZoom", RM.current), pM.current = !1))
      }), [rM]), (0, lM.v)("overlay", sM, ZM, rM), (0, EM.jsx)(OM.d, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: rM,
        timeout: 300,
        nodeRef: sM,
        unmountOnExit: !0,
        children: (0, EM.jsx)("div", {
          ref: sM,
          onClick: MM => {
            ZM() && MM.stopPropagation()
          },
          children: (0, EM.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, EM.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: PM.j.map((rM => (0, EM.jsxs)(CM, {
                restedEffect: rM,
                vQ: hM,
                setChosenRestedEffect: GM,
                children: [(0, EM.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, EM.jsx)(zM.b, {
                    text: [{
                      icon: rM
                    }]
                  }), PM.g[rM].shortName]
                }), (0, EM.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: MM(PM.g[rM].description, {
                    time: PM.g[rM].effectLevelDurations[eM] / 6e4
                  })
                })]
              }, rM)))
            }), (0, EM.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, EM.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, EM.jsxs)(LM.e, {
                className: "SleepingOverlayWakeUpButton",
                onClick: MM => {
                  gM ? kM() : (tM(!0), (0, dM.Z)((() => {
                    tM(!1), uM(!0)
                  }), !0)), MM.stopPropagation()
                },
                loading: wM,
                children: [!gM && (0, EM.jsxs)(EM.Fragment, {
                  children: [(0, EM.jsx)(yM.b, {
                    name: "film"
                  }), " ", MM("classicGame:watchAdToGetRestedPerk")]
                }), gM && MM("classicGame:wakeUp")]
              }), (0, EM.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, EM.jsx)("div", {
                  className: JM()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === eM
                  }),
                  children: (0, EM.jsx)(zM.b, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, EM.jsx)("div", {
                  className: JM()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === eM
                  }),
                  children: (0, EM.jsx)(zM.b, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, EM.jsx)("div", {
                  className: JM()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === eM
                  }),
                  children: (0, EM.jsx)(zM.b, {
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
    const CM = (0, jM.memo)((function(MM) {
      let {
        children: rM,
        restedEffect: iM,
        vQ: OM,
        setChosenRestedEffect: SM
      } = MM;
      return iM === OM ? (0, EM.jsx)(LM.p, {
        onClick: MM => {
          MM.stopPropagation()
        },
        children: rM
      }) : (0, EM.jsx)(LM.i, {
        onClick: MM => {
          SM(iM), MM.stopPropagation()
        },
        children: rM
      })
    }))
  },
  5309: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => PM
    });
    var OM = iM(44),
      SM = iM(1116),
      jM = iM.n(SM),
      aM = iM(1303);

    function PM(MM) {
      let {
        columns: rM,
        rows: iM,
        getRowKey: SM,
        renderRow: PM,
        className: nM
      } = MM;
      return (0, aM.jsxs)("table", {
        className: jM()("Table", nM),
        children: [(0, aM.jsx)("thead", {
          children: (0, aM.jsx)("tr", {
            children: rM.map((MM => (0, aM.jsx)("th", {
              children: MM.header
            }, MM.key)))
          })
        }), (0, aM.jsx)("tbody", {
          children: iM.map((MM => (0, aM.jsx)(OM.Fragment, {
            children: PM(MM)
          }, SM(MM))))
        })]
      })
    }
  },
  37629: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => jM,
      e: () => aM,
      g: () => PM,
      h: () => nM
    });
    var OM = iM(44),
      SM = iM(3508);
    const jM = 8,
      aM = "InGameHeaderContainer",
      PM = "TopRightElements";

    function nM(MM) {
      const [rM] = (0, SM.d)(), [iM, nM] = (0, OM.useState)(!1);
      return (0, OM.useLayoutEffect)((() => {
        if (!MM) return;
        const rM = document.querySelector(`.${aM}`),
          iM = document.querySelector(`.${PM}`),
          OM = () => {
            const OM = MM.getBoundingClientRect(),
              SM = rM ? rM.getBoundingClientRect().right : 0,
              aM = iM ? iM.getBoundingClientRect().left : window.innerWidth,
              PM = OM.left < SM + jM,
              QM = OM.right > aM - jM;
            nM(PM || QM)
          };
        OM();
        const SM = new ResizeObserver(OM);
        return SM.observe(MM), rM && SM.observe(rM), iM && SM.observe(iM), () => {
          SM.disconnect()
        }
      }), [MM, rM]), iM
    }
  },
  37678: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => LM
    });
    var OM = iM(44),
      SM = iM(1116),
      jM = iM.n(SM),
      aM = iM(1763),
      PM = iM(1520),
      nM = iM(1396),
      QM = iM(1398),
      zM = iM(1303);

    function LM(MM) {
      let {
        label: rM,
        icon: iM,
        placeholder: SM,
        onSubmit: LM
      } = MM;
      const mM = (0, OM.useRef)(null),
        [HM, hM] = (0, OM.useState)(""),
        [JM, dM] = (0, OM.useState)("Enter"),
        [yM, lM] = (0, OM.useState)(null);
      (0, OM.useEffect)((() => {
        if ("Success" !== JM && "Error" !== JM) return;
        const MM = setTimeout((() => {
          "Success" === JM && mM.current && (mM.current.value = "", hM("")), dM("Enter")
        }), "Success" === JM ? 1e3 : 4e3);
        return () => {
          clearTimeout(MM)
        }
      }), [JM]);
      const EM = () => {
        const MM = HM.trim();
        "" !== MM && "Enter" === JM && (dM("Loading"), LM(MM).then((MM => {
          mM.current && ("error" in MM ? null === MM.error ? dM("Enter") : (lM(MM.error), dM("Error")) : dM("Success"))
        })))
      };
      return (0, zM.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: MM => {
          MM.target === mM.current && "Escape" !== MM.key && MM.stopPropagation()
        },
        children: [(0, zM.jsxs)("div", {
          className: jM()("AddFriendBodyOverlay", `AddFriendBodyOverlay${JM}`),
          children: ["Loading" === JM && (0, zM.jsx)(nM.d, {}), "Success" === JM && (0, zM.jsx)(QM.b, {
            name: "check"
          }), "Error" === JM && yM]
        }), (0, zM.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, zM.jsx)(aM.b, {
            className: "PlayerSearchInput",
            domRef: mM,
            maxLength: 32,
            placeholderText: SM,
            ariaLabel: SM,
            stopPropagation: !1,
            onValueChange: MM => {
              hM(MM)
            },
            onEnter: EM
          }), (0, zM.jsxs)(PM.e, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== JM || "" === HM.trim(),
            onClick: EM,
            children: [(0, zM.jsx)(QM.b, {
              name: iM
            }), " ", rM]
          })]
        })]
      })
    }
  },
  37662: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => LM
    });
    var OM = iM(44),
      SM = iM(1116),
      jM = iM.n(SM),
      aM = iM(1188),
      PM = iM(1398),
      nM = iM(1303);
    const QM = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      zM = ["unlisted", "public", "whitelist", "private"];

    function LM(MM) {
      let {
        visibility: rM,
        onPick: iM
      } = MM;
      const {
        t: SM
      } = (0, aM.A)(), LM = (0, OM.useRef)([]);
      return (0, nM.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": SM("worldSocial:whoCanJoin"),
        children: zM.map(((MM, OM) => {
          const aM = MM === rM;
          return (0, nM.jsxs)("button", {
            ref: MM => {
              LM.current[OM] = MM
            },
            type: "button",
            className: jM()("WorldSocialTile", {
              WorldSocialTileSelected: aM
            }),
            "aria-pressed": aM,
            tabIndex: aM ? 0 : -1,
            onKeyDown: MM => {
              ((MM, rM) => {
                const iM = "ArrowRight" === MM.key || "ArrowDown" === MM.key ? 1 : "ArrowLeft" === MM.key || "ArrowUp" === MM.key ? -1 : 0;
                var OM;
                0 !== iM && (MM.preventDefault(), null === (OM = LM.current[(rM + iM + zM.length) % zM.length]) || void 0 === OM || OM.focus())
              })(MM, OM)
            },
            onClick: () => {
              iM(MM)
            },
            children: [(0, nM.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, nM.jsx)(PM.b, {
                name: QM[MM]
              })
            }), (0, nM.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, nM.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: SM(`worldSocial:${MM}`)
              }), (0, nM.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: SM(`worldSocial:${MM}Description`)
              })]
            })]
          }, MM)
        }))
      })
    }
  },
  37669: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => PM
    });
    var OM = iM(1188),
      SM = iM(2875),
      jM = iM(4720),
      aM = iM(1303);

    function PM(MM) {
      let {
        bL: rM,
        children: iM,
        ...PM
      } = MM;
      const {
        t: nM
      } = (0, OM.A)();
      return (0, aM.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          rM.onChange(!rM.on)
        },
        children: (0, aM.jsx)(SM.h, {
          ...PM,
          opensProfileCard: !1,
          children: (0, aM.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: MM => {
              MM.stopPropagation()
            },
            children: [iM, (0, aM.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, aM.jsx)(jM.c, {
                checked: rM.on,
                disabled: !1,
                ariaLabel: nM("worldSocial:letJoin", {
                  playerName: PM.playerSocialPreview.name
                }),
                onChange: MM => {
                  rM.onChange(MM.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  37658: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => hM
    });
    var OM = iM(44),
      SM = iM(1188),
      jM = iM(1963),
      aM = iM(83),
      PM = iM(19),
      nM = iM(1548),
      QM = iM(2901),
      zM = iM(34938),
      LM = iM(1520),
      mM = iM(1398),
      HM = iM(1303);

    function hM(MM) {
      let {
        worldCode: rM,
        message: iM
      } = MM;
      const {
        t: hM
      } = (0, SM.A)(), {
        isTouchScreen: JM
      } = (0, PM.m)(["isTouchScreen"]), dM = aM.featureFlags.canUseInviteLinks, yM = (0, zM.i)(dM && null === iM), [lM, EM] = (0, QM.g)(), UM = (0, OM.useRef)(null);
      if (null !== iM) return (0, HM.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, HM.jsx)(mM.b, {
          name: "lock"
        }), (0, HM.jsx)("span", {
          children: iM
        })]
      });
      const GM = dM ? yM : rM,
        CM = JM && dM && (0, QM.d)();
      return (0, HM.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!dM && (0, HM.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: hM("worldSocial:worldCode")
        }), (0, HM.jsx)("input", {
          ref: UM,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== GM && void 0 !== GM ? GM : "",
          "aria-label": hM(dM ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: MM => {
            MM.currentTarget.select()
          }
        }), (0, HM.jsxs)(LM.e, {
          className: "WorldSocialCopy",
          disabled: null === GM,
          onClick: () => {
            null !== GM && (0, QM.f)(GM, {
              useShareSheet: CM,
              onOutcome: MM => {
                if ((0, nM.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== MM || dM ? MM : "code"
                  }), "copied" === MM) EM();
                else if ("failed" === MM) {
                  var rM;
                  null === (rM = UM.current) || void 0 === rM || rM.focus(), jM.k.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, HM.jsx)(mM.b, {
            name: lM ? "check" : CM ? "up-from-bracket" : "copy"
          }), " ", hM(lM ? "general:copied" : CM ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  37667: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => HM,
      g: () => mM,
      h: () => LM
    });
    var OM = iM(605),
      SM = iM(1188),
      jM = iM(1722),
      aM = iM(2875),
      PM = iM(2818),
      nM = iM(1520),
      QM = iM(37669),
      zM = iM(1303);

    function LM(MM, rM) {
      var iM;
      return {
        isError: !1,
        name: MM,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== rM && void 0 !== rM ? rM : {},
        nameColour: null !== (iM = null === rM || void 0 === rM ? void 0 : rM.nameColour) && void 0 !== iM ? iM : OM.d,
        location: {
          status: "offline"
        }
      }
    }

    function mM(MM) {
      let {
        player: rM,
        isFriend: iM = !1,
        status: OM,
        showLocation: nM = void 0 === OM,
        bL: LM,
        onSendFriendRequest: mM,
        actions: HM,
        zIndex: hM
      } = MM;
      const {
        t: JM
      } = (0, SM.A)();
      let dM = OM;
      null !== LM && void 0 !== LM && LM.on && (dM = (0, zM.jsxs)(zM.Fragment, {
        children: [null !== OM && void 0 !== OM ? OM : (0, zM.jsx)(PM.d, {
          socialPreview: rM
        }), (0, zM.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", JM("worldSocial:canJoin")]
        })]
      }));
      const yM = {
        playerSocialPreview: rM,
        isFriend: iM,
        hideFriendBadge: !0,
        onFriendRemoved: iM ? MM => {
          jM.e.removeFriendFromState(MM)
        } : void 0,
        status: dM,
        showLocation: nM,
        onSendFriendRequest: mM,
        zIndex: hM
      };
      return LM ? (0, zM.jsx)(QM.e, {
        ...yM,
        bL: LM,
        children: HM
      }) : (0, zM.jsx)(aM.h, {
        ...yM,
        opensProfileCard: !1,
        children: HM || void 0
      })
    }

    function HM(MM) {
      let {
        row: rM,
        bL: iM,
        canInvite: OM,
        invited: jM,
        onInvite: aM,
        zIndex: PM
      } = MM;
      const {
        t: QM
      } = (0, SM.A)(), LM = "online" === rM.place ? nM.e : nM.i;
      return (0, zM.jsx)(mM, {
        player: rM.friend,
        isFriend: !0,
        status: "here" === rM.place ? QM("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        bL: iM,
        zIndex: PM,
        actions: OM && (0, zM.jsx)(LM, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: jM,
          onClick: aM,
          ariaLabel: `${QM("worldSocial:invite")} ${rM.friend.name}`,
          children: QM(jM ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  37647: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => nM,
      g: () => aM,
      j: () => QM
    });
    var OM = iM(44),
      SM = iM(4961),
      jM = iM(1963);

    function aM(MM) {
      const rM = {
        lobbyName: MM,
        answer: null,
        response: SM.b.getSocialSettings(MM)
      };
      return rM.response.then((MM => {
        rM.answer = MM
      })), rM
    }
    const PM = new Map;

    function nM(MM) {
      PM.set(MM.lobbyName, MM)
    }

    function QM(MM) {
      const [rM] = (0, OM.useState)((() => function(MM) {
        var rM;
        const iM = null !== (rM = PM.get(MM)) && void 0 !== rM ? rM : null;
        return null !== iM && void 0 !== iM && iM.answer && "error" in iM.answer ? null : iM
      }(MM))), [iM, aM] = (0, OM.useState)((() => null !== rM && void 0 !== rM && rM.answer && "settings" in rM.answer ? rM.answer.settings : null)), [nM, QM] = (0, OM.useState)(!0), [zM, LM] = (0, OM.useState)(null !== iM), mM = (0, OM.useRef)(iM);
      mM.current = iM;
      const HM = (0, OM.useRef)(0),
        hM = (0, OM.useRef)(0),
        JM = (0, OM.useRef)(!1),
        dM = (0, OM.useRef)(!0),
        yM = (0, OM.useCallback)((async rM => {
          const iM = ++HM.current,
            OM = await (null !== rM && void 0 !== rM ? rM : SM.b.getSocialSettings(MM));
          dM.current && iM === HM.current && (LM(!0), QM(!1), "error" in OM || aM(OM.settings))
        }), [MM]),
        lM = (0, OM.useCallback)((() => {
          QM(!0), yM()
        }), [yM]),
        EM = (0, OM.useCallback)((() => {
          hM.current > 0 ? JM.current = !0 : yM()
        }), [yM]);
      (0, OM.useEffect)((() => (dM.current = !0, PM.delete(MM), QM(!0), yM(null === rM || void 0 === rM ? void 0 : rM.response), () => {
        dM.current = !1
      })), [yM, MM, rM]);
      const UM = MM => {
        HM.current++, QM(!1), mM.current = MM, aM(MM)
      };
      return {
        settings: iM,
        loading: nM,
        answered: zM,
        retry: lM,
        refresh: EM,
        change: async function(rM, iM) {
          let {
            quiet: OM = !1,
            onAnswer: aM
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const PM = mM.current;
          if (null === PM) return !1;
          UM(iM(PM)), hM.current > 0 && (JM.current = !0), hM.current++;
          const nM = await SM.b.setSocialSettings(MM, rM);
          hM.current--;
          const QM = !("error" in nM);
          if (!dM.current) return QM;
          if (null === aM || void 0 === aM || aM(nM), OM);
          else if ("error" in nM) jM.k.showMessage({
            translationKey: nM.error
          });
          else
            for (const MM of nM.notFound) jM.k.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: MM
              }
            });
          if (hM.current > 0) return QM;
          const zM = JM.current;
          return JM.current = !1, !zM && "settings" in nM ? UM(nM.settings) : (zM || UM(PM), yM()), QM
        }
      }
    }
  },
  37687: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => aM,
      d: () => jM
    });
    var OM = iM(143);
    const SM = new Map;

    function jM(MM, rM) {
      var iM;
      const OM = null !== (iM = SM.get(MM)) && void 0 !== iM ? iM : new Map;
      OM.set(rM, Date.now()), SM.set(MM, OM)
    }

    function aM(MM) {
      const rM = SM.get(MM);
      if (!rM) return [];
      const iM = Date.now();
      for (const [SM, jM] of rM) iM - jM >= OM.t && rM.delete(SM);
      return [...rM.keys()]
    }
  },
  37654: (MM, rM, iM) => {
    function OM(MM, rM) {
      const iM = rM.toLowerCase();
      for (const OM of MM)
        if (OM.toLowerCase() === iM) return !0;
      return !1
    }

    function SM(MM, rM, iM) {
      const SM = [],
        jM = [],
        aM = [];
      for (const PM of MM) !PM.isError && PM.name && ("inGame" === PM.location.status && PM.location.inLobbyName === rM || OM(iM, PM.name) ? jM.push({
        friend: PM,
        place: "here"
      }) : "offline" === PM.location.status ? aM.push({
        friend: PM,
        place: "offline"
      }) : SM.push({
        friend: PM,
        place: "online"
      }));
      return [...SM, ...jM, ...aM]
    }

    function jM(MM, rM, iM) {
      const SM = [],
        jM = MM.flatMap((MM => "here" === MM.place ? [MM.friend.name] : []));
      for (const aM of [...jM, ...rM]) OM(SM, aM) || OM(iM, aM) || SM.push(aM);
      return SM
    }

    function aM(MM, rM) {
      return null === MM || void 0 === MM || !MM.canManage || OM(MM.whitelist, rM) ? "none" : "whitelist" === MM.visibility ? "required" : "quiet"
    }

    function PM(MM) {
      if (null === MM) return !0;
      const {
        visibility: rM
      } = MM;
      return "public" === rM || "unlisted" === rM || "whitelist" === rM && MM.canManage
    }

    function nM(MM, rM, iM) {
      if (iM) {
        const iM = rM.filter((rM => !OM(MM.whitelist, rM)));
        return {
          ...MM,
          whitelist: [...MM.whitelist, ...iM]
        }
      }
      return {
        ...MM,
        whitelist: MM.whitelist.filter((MM => !OM(rM, MM)))
      }
    }

    function QM(MM, rM) {
      const iM = [];
      for (let OM = 0; OM < MM.length; OM += rM) iM.push(MM.slice(OM, OM + rM));
      return iM
    }
    iM.d(rM, {
      c: () => PM,
      d: () => jM,
      g: () => SM,
      j: () => OM,
      l: () => QM,
      o: () => aM,
      r: () => nM
    })
  },
  9349: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => aM,
      d: () => jM
    });
    var OM = iM(2099);
    const SM = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      jM = MM => "string" === typeof MM.icon && "" !== MM.icon && "string" === typeof MM.keycode && SM.test(MM.keycode),
      aM = MM => "Space" === MM ? "_" : OM.k[MM]
  },
  9392: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => SM
    });
    var OM = iM(19);

    function SM() {
      return !OM.d.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  9400: (MM, rM, iM) => {
    iM.d(rM, {
      C: () => zM,
      E: () => mM,
      I: () => HM,
      e: () => jM,
      h: () => PM,
      j: () => QM,
      l: () => nM,
      n: () => aM,
      r: () => SM,
      u: () => OM,
      x: () => hM,
      z: () => LM
    });
    const OM = 14,
      SM = 6,
      jM = (OM + SM) / 2,
      aM = 200,
      PM = aM / 2,
      nM = aM / 2 - 1,
      QM = SM / OM * (aM / 2),
      zM = (MM, rM) => -Math.PI / 2 + 2 * MM * Math.PI / rM,
      LM = (MM, rM, iM) => {
        const OM = 2 * Math.PI / iM;
        return (Math.round((Math.atan2(rM, MM) + Math.PI / 2) / OM) % iM + iM) % iM
      },
      mM = .5,
      HM = (MM, rM, iM) => Math.hypot(MM.x, MM.y) < mM ? iM : LM(MM.x, MM.y, rM),
      hM = (MM, rM, iM, OM, SM) => {
        const jM = Math.PI / rM,
          aM = zM(MM, rM),
          PM = aM - jM,
          nM = aM + jM,
          QM = (MM, rM) => `${iM+MM*Math.cos(rM)} ${iM+MM*Math.sin(rM)}`;
        return [`M ${QM(OM,PM)}`, `L ${QM(SM,PM)}`, `A ${SM} ${SM} 0 0 1 ${QM(SM,nM)}`, `L ${QM(OM,nM)}`, `A ${OM} ${OM} 0 0 0 ${QM(OM,PM)}`, "Z"].join(" ")
      }
  },
  37837: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => jM
    });
    var OM = iM(19),
      SM = iM(1360);

    function jM() {
      const {
        clientEscMenuOptions: MM
      } = (0, OM.m)(["clientEscMenuOptions"]);
      return (0, SM.u)() && MM.showChat
    }
  },
  9430: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => aM
    });
    var OM = iM(44),
      SM = iM(9366),
      jM = iM(2640);

    function aM() {
      const MM = (0, jM.f)("shopInfo"),
        [, rM] = (0, OM.useReducer)((MM => MM + 1), 0);
      return (0, jM.c)("shopInfo", rM), !(0, SM.d)(MM)
    }
  },
  37950: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => jM
    });
    var OM = iM(44),
      SM = iM(2640);

    function jM() {
      const MM = (0, SM.f)("lobbyLeaderboardInfo");
      return (0, OM.useMemo)((() => function(MM) {
        if (null === MM) return null;
        const rM = Object.entries(MM),
          iM = rM.filter((MM => {
            let [, rM] = MM;
            return void 0 !== rM
          }));
        if (iM.length === rM.length) return MM;
        const OM = Object.fromEntries(iM),
          SM = Object.keys(MM).filter((MM => !Object.hasOwn(OM, MM)));
        return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${SM.join(", ")}`), OM
      }(MM)), [MM])
    }
  },
  37778: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => nM
    });
    var OM = iM(3063),
      SM = iM(4069),
      jM = iM(3241);
    const aM = ["Unable to create vertex buffer"];
    let PM = {};

    function nM(MM, rM) {
      const iM = new Date;
      console.error(`${iM.getUTCHours()}:${iM.getUTCMinutes()}:${iM.getUTCSeconds()}`, MM, rM, null === rM || void 0 === rM ? void 0 : rM.stack), aM.includes(null === rM || void 0 === rM ? void 0 : rM.message) && (console.error("Unrecoverable error occurred. Leaving game."), (0, OM.b)().client.leaveGameUnwanted({
        reason: `Unrecoverable error occurred.\nThis is a bug.\n\nError:\n${rM.message}\n\nPlease refresh the page.`,
        requiresRefresh: !0,
        canReconnect: !1,
        automaticallyReconnect: !1
      })), (0, jM.logError)("warning", `${MM}\n ${rM} "\n" ${null===rM||void 0===rM?void 0:rM.stack}`);
      const SM = MM + rM + (null === rM || void 0 === rM ? void 0 : rM.stack);
      SM in PM || ((0, jM.logError)("error", `${MM}\n ${rM} "\n" ${null===rM||void 0===rM?void 0:rM.stack}`), PM[SM] = !0)
    }(0, SM.onGameReset)((() => {
      PM = {}
    }))
  },
  5248: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => DM,
      i: () => sM
    });
    var OM = iM(5251),
      SM = iM(313);
    const jM = 120,
      aM = 260,
      PM = 1.15,
      nM = 1.2,
      QM = 2,
      zM = 1.08,
      LM = .8,
      mM = .95,
      HM = 8,
      hM = "[\"')\\]\u300d\u300f\uff09]*",
      JM = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${hM}$`),
      dM = new RegExp(`[?\uff1f]${hM}$`),
      yM = new RegExp(`[!\uff01]${hM}$`),
      lM = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      EM = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      UM = new RegExp(`[${EM}]`),
      GM = new RegExp(`[${EM}]|[^${EM}]+`, "g"),
      CM = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function eM(MM) {
      let rM = 2166136261;
      for (let iM = 0; iM < MM.length; iM++) rM ^= MM.charCodeAt(iM), rM = Math.imul(rM, 16777619);
      return (rM >>> 0) / 4294967295 * 2 - 1
    }

    function bM(MM) {
      var rM;
      if (UM.test(MM)) return 1;
      const iM = MM.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        OM = iM.replace(/[^0-9]/g, "");
      if (OM.length > 0 && !/\p{L}/u.test(iM)) return Math.min(OM.length, 4);
      const SM = null !== (rM = iM.match(CM)) && void 0 !== rM ? rM : [];
      if (0 === SM.length) {
        var jM, aM;
        const MM = null !== (jM = null === (aM = iM.match(/\p{L}/gu)) || void 0 === aM ? void 0 : aM.length) && void 0 !== jM ? jM : 0;
        return 0 === MM ? 0 : Math.min(Math.max(1, Math.round(MM / 2.5)), HM)
      }
      const PM = iM.replace(/[^\p{L}]/gu, ""),
        nM = SM.length > 1 && "e" === SM.at(-1) && PM.endsWith("e") && !PM.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(MM.replace(/[^\p{L}]/gu, ""));
      return Math.min(SM.length - (nM ? 1 : 0), HM)
    }

    function wM(MM) {
      return MM.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function tM(MM) {
      const rM = MM.replace(/[^\p{L}]/gu, "");
      return rM.length >= 2 && rM === rM.toUpperCase() && rM !== rM.toLowerCase()
    }

    function gM(MM, rM) {
      var iM;
      const HM = rM && (0, OM.p)(rM),
        hM = null !== (iM = null === HM || void 0 === HM ? void 0 : HM.syllableMs) && void 0 !== iM ? iM : OM.d,
        EM = function(MM) {
          const rM = [];
          for (const OM of (0, SM.bc)(MM))
            if ("string" === typeof OM)
              for (const MM of OM.split(/(\s+)/)) {
                if ("" === MM) continue;
                if (/^\s+$/.test(MM)) {
                  rM.push({
                    kind: "space",
                    text: MM
                  });
                  continue
                }
                if (!UM.test(MM)) {
                  rM.push({
                    kind: "word",
                    text: MM,
                    delayMs: 0
                  });
                  continue
                }
                let OM = !0;
                for (const SM of null !== (iM = MM.match(GM)) && void 0 !== iM ? iM : []) {
                  var iM;
                  const MM = rM.at(-1);
                  OM || "word" !== (null === MM || void 0 === MM ? void 0 : MM.kind) || UM.test(SM) || /[\p{L}\p{N}]/u.test(SM) ? (OM || rM.push({
                    kind: "space",
                    text: "\u200b"
                  }), rM.push({
                    kind: "word",
                    text: SM,
                    delayMs: 0
                  }), OM = !1) : MM.text += SM
                }
              } else rM.push({
                kind: "icon",
                text: OM.icon,
                delayMs: 0
              });
          return rM
        }(MM),
        CM = [];
      let gM = [];
      for (const OM of EM) "space" !== OM.kind && (gM.push(OM), JM.test(OM.text) && (CM.push(gM), gM = []));
      CM.push(gM);
      const uM = [];
      let RM = 0;
      for (const OM of CM) {
        var pM, WM;
        const MM = null !== (pM = null === (WM = OM.at(-1)) || void 0 === WM ? void 0 : WM.text) && void 0 !== pM ? pM : "",
          rM = dM.test(MM),
          iM = yM.test(MM),
          SM = OM.map((MM => "word" === MM.kind ? bM(MM.text) : 1)),
          EM = SM.findLastIndex((MM => MM > 0));
        for (const [dM, yM] of OM.entries()) {
          const MM = "word" === yM.kind,
            OM = SM[dM];
          yM.delayMs = RM;
          for (let SM = 0; HM && SM < OM; SM++) {
            const {
              intonation: jM
            } = HM;
            let aM = EM > 0 ? -jM.declineSemitones * (dM / EM) : 0;
            aM += eM(`${wM(yM.text)}|${SM}`) * jM.variationSemitones;
            const JM = Math.min(1, jM.variationSemitones);
            let lM = HM.glideSemitones,
              UM = 1;
            iM && (aM += jM.exclaimLiftSemitones, UM *= PM), rM && dM === EM && (aM += jM.questionRiseSemitones * (OM > 1 ? .5 + .5 * SM / (OM - 1) : 1), SM === OM - 1 && (lM = Math.abs(lM) + jM.questionRiseSemitones / 2)), MM && tM(yM.text) && (aM += QM * JM, UM *= nM), OM > 1 && 0 === SM && (aM += LM * JM, UM *= zM), uM.push({
              atMs: RM + SM * hM,
              semitones: aM,
              glideSemitones: lM,
              durationMs: SM < OM - 1 ? Math.min(HM.durationMs, hM * mM) : HM.durationMs,
              level: UM
            })
          }
          RM += OM * hM + (JM.test(yM.text) ? aM : lM.test(yM.text) ? jM : 0)
        }
      }
      return {
        pieces: EM.map((MM => "space" === MM.kind ? MM : "icon" === MM.kind ? {
          kind: "icon",
          icon: MM.text,
          delayMs: MM.delayMs
        } : {
          kind: "word",
          text: MM.text,
          delayMs: MM.delayMs
        })),
        blips: uM
      }
    }
    var uM = iM(1188),
      RM = iM(1258),
      pM = iM(2045);

    function WM(MM) {
      if ("string" === typeof MM) return MM;
      const rM = RM.e.get().getCurrentLanguageCode();
      return (0, uM.r)(rM, MM.translationKey, (0, uM.o)(MM.params, pM.c.shown))
    }

    function sM(MM) {
      const rM = void 0 === MM.voice ? null : (0, OM.r)(MM.voice),
        iM = rM && (0, OM.p)(rM);
      return {
        plan: gM(WM(MM.line), iM),
        synth: iM
      }
    }

    function DM(MM) {
      const rM = [];
      let iM = [];
      for (const [SM, jM] of MM.entries()) {
        var OM;
        "space" === jM.kind && (" " !== jM.text || "icon" !== (null === (OM = MM[SM + 1]) || void 0 === OM ? void 0 : OM.kind)) ? (iM.length > 0 && rM.push(iM), rM.push([jM]), iM = []) : iM.push(jM)
      }
      return iM.length > 0 && rM.push(iM), rM
    }
  },
  37624: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => SM
    });
    const OM = [{
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

    function SM(MM, rM, iM) {
      const SM = Math.abs(MM - rM),
        jM = Date.now() - iM;
      for (const aM of OM)
        if (MM < aM.maxDist) return SM >= aM.hardUpdateDist || jM > aM.timeBetweenSoftChecks && SM >= aM.softUpdateDist;
      return !1
    }
  },
  37913: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => LM,
      h: () => mM
    });
    var OM = iM(625),
      SM = iM(30),
      jM = iM(37872);
    const aM = "replayFileKeptForReload",
      PM = "replayFileKeptForReloadAt",
      nM = "replayFileKeptForReloadTab",
      QM = 3e5,
      zM = 5e3;
    async function LM(MM, rM) {
      const iM = Date.now(),
        jM = {
          at: iM,
          bytes: MM,
          source: rM
        },
        QM = await Promise.race([(async () => await SM.f.setItem(PM, iM) && SM.f.setItem(aM, jM))(), (0, OM.Q)(zM).then((() => !1))]);
      QM || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const LM = {
        at: iM,
        ML: QM
      };
      SM.k.setItem(nM, LM)
    }
    async function mM() {
      var MM;
      const rM = SM.k.getItem(nM);
      null !== rM && SM.k.removeItem(nM);
      const iM = Date.now(),
        OM = await SM.f.getItem(PM),
        zM = null !== rM && iM - rM.at <= QM,
        LM = null !== rM && OM === rM.at;
      let mM = null;
      if (null !== OM && (LM || ("number" !== typeof OM || iM - OM > QM)) && (mM = zM && LM && rM.ML ? await SM.f.getItem(aM) : null, await Promise.all([SM.f.removeItem(PM), SM.f.removeItem(aM)])), !zM) return null;
      if ((null === (MM = mM) || void 0 === MM ? void 0 : MM.at) !== rM.at) throw new Error(jM.c.replayNotKept.text);
      return {
        bytes: mM.bytes,
        source: mM.source
      }
    }
  },
  37905: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM,
      h: () => jM,
      i: () => SM
    });
    const OM = [9];

    function SM(MM) {
      return OM.includes(MM)
    }

    function jM(MM) {
      return null !== MM && MM >= 3 && MM < OM[0]
    }
  },
  37876: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => aM,
      f: () => jM,
      h: () => SM
    });
    const OM = [.25, .5, 1, 2, 4, 8, 16];

    function SM(MM, rM) {
      const iM = OM;
      let SM = iM.indexOf(MM);
      return -1 === SM && (SM = iM.findIndex((rM => rM >= MM)), -1 === SM && (SM = iM.length - 1)), "up" === rM ? iM[Math.min(SM + 1, iM.length - 1)] : iM[Math.max(SM - 1, 0)]
    }

    function jM(MM) {
      return MM <= OM[0]
    }

    function aM(MM) {
      return MM >= OM[OM.length - 1]
    }
  },
  37926: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => OM,
      c: () => SM
    });
    const OM = "data-replay-ui-active",
      SM = [{
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
  37935: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => QM,
      f: () => LM,
      g: () => zM
    });
    var OM = iM(19),
      SM = iM(22),
      jM = iM(37926);

    function aM() {
      const MM = {};
      for (const {
          group: rM
        }
        of jM.c) MM[rM] = !0;
      return MM
    }
    let PM = aM();

    function nM() {
      SM.i.Tz("replayViewer|uiVisibilityChanged")
    }

    function QM() {
      return PM
    }

    function zM(MM, rM) {
      PM[MM] !== rM && (PM = {
        ...PM,
        [MM]: rM
      }, "nametag" === MM && OM.d.set({
        areNametagsHidden: !rM
      }), nM())
    }

    function LM() {
      PM = aM(), OM.d.set({
        areNametagsHidden: !1
      }), nM()
    }
  },
  9347: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => jM,
      f: () => aM,
      g: () => PM,
      i: () => SM
    });
    var OM = iM(9349);
    const SM = MM => {
        const rM = [];
        MM.holdingGun && rM.push({
          kind: "reload"
        }), MM.touchscreenActionButton && rM.push({
          kind: "touchButton",
          label: MM.touchscreenActionButton
        });
        for (const jM of null !== (iM = null === (SM = MM.customButtons) || void 0 === SM ? void 0 : SM.filter(OM.d)) && void 0 !== iM ? iM : []) {
          var iM, SM;
          rM.push({
            kind: "customButton",
            id: jM.id,
            icon: jM.icon,
            description: jM.description
          })
        }
        return rM
      },
      jM = MM => MM.length >= 2,
      aM = MM => "specialAction" !== MM.kind,
      PM = (MM, rM) => {
        if (null === MM || null === rM) return MM === rM;
        if (MM.kind !== rM.kind) return !1;
        switch (MM.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return MM.action === rM.action;
          case "customButton":
            return MM.id === rM.id && MM.icon === rM.icon;
          case "touchButton":
            return MM.label === rM.label
        }
      }
  },
  9339: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => zM,
      g: () => HM,
      j: () => LM,
      l: () => hM
    });
    var OM = iM(44),
      SM = iM(22),
      jM = iM(1516),
      aM = iM(9347),
      PM = iM(9353);
    let nM = null;
    const QM = () => nM,
      zM = MM => {
        (0, aM.g)(nM, MM) || (nM = MM, SM.i.Tz(PM.g, nM))
      },
      LM = () => {
        const [MM, rM] = (0, OM.useState)(QM);
        return (0, jM.d)(PM.g, rM), MM
      };
    let mM = !1;
    const HM = MM => {
        MM !== mM && (mM = MM, SM.i.Tz(PM.i, MM))
      },
      hM = () => {
        const [MM, rM] = (0, OM.useState)(mM);
        return (0, jM.d)(PM.i, rM), MM
      }
  },
  9353: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => jM,
      g: () => OM,
      i: () => SM,
      k: () => PM,
      o: () => nM,
      q: () => QM,
      t: () => aM
    });
    const OM = "controllerActionHintChanged",
      SM = "controllerActionWheelHintChanged",
      jM = "controllerOpenChat",
      aM = "controllerSneakToggledChanged",
      PM = "controllerAttackLatchedChanged",
      nM = "controllerDropStackHoldChanged",
      QM = "controllerPickBlockHintChanged"
  },
  9301: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => aM,
      i: () => jM,
      j: () => nM,
      n: () => PM
    });
    var OM = iM(1516),
      SM = iM(1474);
    const jM = "controllerInventoryCursorChanged",
      aM = {
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
      PM = () => {
        var MM, rM;
        return (0, OM.e)(jM, null !== (MM = null === (rM = (0, SM.d)()) || void 0 === rM ? void 0 : rM.getInventoryCursorState()) && void 0 !== MM ? MM : aM)
      },
      nM = () => {
        var MM, rM;
        return null !== (MM = null === (rM = (0, SM.d)()) || void 0 === rM ? void 0 : rM.isPadSteppingSlots()) && void 0 !== MM && MM
      }
  },
  9293: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => mM,
      h: () => PM,
      i: () => nM,
      l: () => aM,
      p: () => jM,
      r: () => zM,
      t: () => LM
    });
    let OM = null;
    const SM = new Set,
      jM = MM => (OM = MM, () => {
        if (OM === MM) {
          OM = null;
          for (const MM of SM) MM()
        }
      }),
      aM = MM => (SM.add(MM), () => {
        SM.delete(MM)
      }),
      PM = () => OM,
      nM = () => null !== OM;
    let QM = null;
    const zM = MM => {
        QM = MM
      },
      LM = () => {
        const MM = QM;
        return QM = null, MM
      },
      mM = (MM, rM) => {
        var iM, OM;
        return null !== (iM = null !== (OM = MM.find((MM => MM.element === rM))) && void 0 !== OM ? OM : MM.find((MM => MM.element.contains(rM)))) && void 0 !== iM ? iM : null
      }
  },
  9310: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => jM,
      c: () => aM
    });
    var OM = iM(44);
    const SM = new WeakMap,
      jM = MM => {
        var rM, iM;
        return null !== (rM = null === (iM = SM.get(MM)) || void 0 === iM ? void 0 : iM.current) && void 0 !== rM ? rM : null
      },
      aM = (MM, rM) => {
        const iM = (0, OM.useRef)(rM);
        iM.current = rM;
        const jM = (0, OM.useRef)(null);
        (0, OM.useEffect)((() => {
          const rM = MM.current,
            OM = jM.current;
          rM !== OM && (OM && SM.get(OM) === iM && SM.delete(OM), jM.current = rM, rM && SM.set(rM, iM))
        })), (0, OM.useEffect)((() => () => {
          const MM = jM.current;
          MM && SM.get(MM) === iM && SM.delete(MM), jM.current = null
        }), [])
      }
  },
  9419: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => PM,
      h: () => QM,
      j: () => LM,
      m: () => zM,
      o: () => nM,
      r: () => HM
    });
    var OM = iM(22),
      SM = iM(2120),
      jM = iM(1474),
      aM = iM(1464);
    const PM = MM => {
        var rM, iM;
        return (0, aM.l)() && null !== (rM = null === (iM = (0, jM.d)()) || void 0 === iM ? void 0 : iM.getGlyphForNoaAction(MM)) && void 0 !== rM ? rM : null
      },
      nM = "controllerGlyph:",
      QM = MM => {
        var rM, iM;
        return null !== (rM = null === (iM = (0, jM.d)()) || void 0 === iM ? void 0 : iM.getPadGlyphIconName(MM)) && void 0 !== rM ? rM : `${nM}xbox/${MM}`
      },
      zM = MM => MM.startsWith(nM),
      LM = MM => {
        var rM, iM;
        return zM(MM) && null !== (rM = null === (iM = (0, jM.d)()) || void 0 === iM ? void 0 : iM.getPadGlyphIconUrl(MM)) && void 0 !== rM ? rM : null
      },
      mM = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", aM.c, SM.f, SM.d],
      HM = MM => {
        const rM = mM.map((rM => OM.i.subscribe(rM, MM)));
        return () => {
          for (const MM of rM) OM.i.unsubscribe(MM)
        }
      }
  },
  9408: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => SM,
      f: () => aM,
      j: () => jM,
      l: () => OM,
      p: () => PM,
      s: () => QM,
      w: () => zM
    });
    const OM = "controllerActionWheelOpen",
      SM = "controllerActionWheelAim",
      jM = "controllerActionWheelCommit",
      aM = "controllerActionWheelClose",
      PM = "controllerActionWheelPick";
    let nM = !1;
    const QM = () => nM,
      zM = MM => {
        nM = MM
      }
  },
  9403: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => jM,
      f: () => SM
    });
    let OM = 0;
    const SM = () => {
        OM++
      },
      jM = () => OM
  },
  9324: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => nM,
      e: () => SM,
      h: () => aM,
      j: () => jM,
      k: () => OM,
      m: () => QM
    });
    const OM = "controllerQuickChatWheelOpen",
      SM = "controllerQuickChatWheelAim",
      jM = "controllerQuickChatWheelCommit",
      aM = "controllerQuickChatWheelClose";
    let PM = !1;
    const nM = () => PM,
      QM = MM => {
        PM = MM
      }
  },
  37776: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM,
      e: () => jM
    });
    const OM = new Map;

    function SM(MM) {
      var rM;
      return null === MM ? null : null !== (rM = OM.get(MM)) && void 0 !== rM ? rM : null
    }

    function jM(MM, rM) {
      return OM.set(MM, rM), () => {
        OM.get(MM) === rM && OM.delete(MM)
      }
    }
  },
  37895: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => cr,
      c: () => Vr
    });
    var OM = iM(4577),
      SM = iM(625),
      jM = iM(4118),
      aM = iM(4136),
      PM = iM.n(aM);
    const nM = new Set(["nameTagInfo", "multilineTextBox", "animationScript", "content", "skyBox", "opts", "fromBlockData", "toBlockData", "sharedBlockData"]),
      QM = "EV_boolean",
      zM = "EV_double",
      LM = "EV_string",
      mM = "EV_doubleArr",
      HM = "EV_armour",
      hM = "EV_other",
      JM = "EV_cosmetics",
      dM = "OEV_boolean",
      yM = "OEV_int",
      lM = "OEV_double",
      EM = "OEV_string",
      UM = "OEV_stringArr",
      GM = "OEV_meshScaling",
      CM = "IV_int",
      eM = "IV_string",
      bM = "IV_doubleArr",
      wM = "IV_double",
      tM = "HV_int",
      gM = "HV_slots",
      uM = "EnvV_string",
      RM = "EnvV_double",
      pM = "EnvV_doubleArr",
      WM = "EnvV_boolean",
      sM = {
        type: LM,
        name: LM,
        position: mM,
        rotation: mM,
        scale: zM,
        speed: zM,
        jumping: QM,
        crouching: QM,
        cameraPitch: zM,
        armSwinging: QM,
        heldItemName: LM,
        heldItemEnchantmentTier: LM,
        pose: LM,
        followingEId: LM,
        ridingVehicleEId: LM,
        leaderboardTop: LM,
        meshKind: LM,
        meshOpts: LM,
        followingOffset: mM,
        shouldMatchFollowingEntityRotation: QM,
        meshOffset: mM,
        baseRenderHeading: zM,
        armour: HM,
        rY: hM,
        playerCustomisations: JM,
        variation: LM,
        metaInfo: LM,
        soundName: LM,
        volume: zM,
        refDistance: zM,
        maxHearDist: zM,
        rate: zM,
        aiState: LM
      },
      DM = {
        opacity: lM,
        zIndex: yM,
        overlayColour: EM,
        canSee: dM,
        meshScaling: GM,
        nameTagInfo: EM,
        multilineTextBox: EM,
        hasPriorityNametag: dM,
        ranks: UM,
        nameColour: EM,
        _isAlive: dM,
        _invisibleEffect: dM,
        _invincible: dM,
        killfeedColour: EM,
        hideNameSeed: yM,
        _glowingEffect: dM,
        lockHeadToBody: dM
      },
      kM = {
        itemName: eM,
        amount: CM,
        position: bM,
        size: wM,
        attributes: eM
      },
      ZM = {
        skyBox: uM,
        fogColourOverride: uM,
        fogChunkDistanceOverride: RM,
        cameraTint: pM,
        fogOnSkybox: WM,
        fogBlockDistanceOverride: RM
      },
      oM = {
        type: "array",
        items: "double"
      },
      fM = {
        type: "array",
        items: "int"
      },
      YM = {
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
      NM = {
        type: "map",
        values: oM
      };

    function AM(MM, rM) {
      return {
        type: "record",
        name: MM,
        fields: [{
          name: "x",
          type: rM
        }]
      }
    }
    const xM = {
        type: "array",
        items: {
          type: "record",
          name: "OtherEntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", AM(dM, "boolean"), AM(yM, "int"), AM(lM, "double"), AM(EM, "string"), AM(UM, {
              type: "array",
              items: "string"
            }), AM(GM, NM)]
          }]
        }
      },
      vM = {
        type: "array",
        items: {
          type: "record",
          name: "EntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", AM(QM, "boolean"), AM(zM, "double"), AM(LM, "string"), AM(mM, oM), AM(HM, YM), AM(hM, xM), AM(JM, {
              type: "map",
              values: "string"
            })]
          }]
        }
      },
      FM = {
        type: "array",
        items: {
          type: "record",
          name: "ItemDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", AM(CM, "int"), AM(eM, "string"), AM(wM, "double"), AM(bM, oM)]
          }]
        }
      },
      BM = {
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
      XM = {
        type: "record",
        name: "HotbarDeltaEntry",
        fields: [{
          name: "i",
          type: "int"
        }, {
          name: "v",
          type: ["null", AM(tM, "int"), AM(gM, BM)]
        }]
      },
      IM = {
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
      KM = {
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
      qM = {
        type: "array",
        items: {
          type: "record",
          name: "EnvironmentDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", AM(uM, "string"), AM(RM, "double"), AM(pM, oM), AM(WM, "boolean")]
          }]
        }
      },
      TM = [{
        name: "cW",
        type: "record",
        fields: [{
          name: "pos",
          type: fM
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
          type: fM
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
      VM = [{
        name: "playSound",
        type: "record",
        fields: [{
          name: "pS",
          type: "string"
        }, {
          name: "volume",
          type: "double"
        }, {
          name: "rate",
          type: "double"
        }, {
          name: "DS",
          type: ["null", {
            type: "record",
            name: "SoundPosSettings",
            fields: [{
              name: "kS",
              type: ["null", "string", oM],
              default: null
            }, {
              name: "ZS",
              type: ["null", "double"],
              default: null
            }, {
              name: "oS",
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
          name: "QS",
          type: "string"
        }, {
          name: "zS",
          type: "int"
        }, {
          name: "animationScript",
          type: ["null", "string"]
        }, {
          name: "LS",
          type: "double"
        }, {
          name: "mS",
          type: "double"
        }]
      }, {
        name: "bullet",
        type: "record",
        fields: [{
          name: "xj",
          type: "string"
        }, {
          name: "bulletDirections",
          type: {
            type: "array",
            items: oM
          }
        }]
      }, {
        name: "lifeformHealth",
        type: "record",
        fields: [{
          name: "Pi",
          type: "string"
        }, {
          name: "Mr",
          type: ["null", "double"],
          default: null
        }, {
          name: "rr",
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
          name: "oi",
          type: "double"
        }, {
          name: "angle",
          type: "double"
        }, {
          name: "Yi",
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
      cM = [{
        name: "position",
        type: oM
      }, {
        name: "direction",
        type: oM
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

    function Mr() {
      const MM = [{
        name: "entities",
        type: {
          type: "map",
          values: vM
        }
      }, {
        name: "items",
        type: {
          type: "map",
          values: FM
        }
      }, {
        name: "camera",
        type: {
          type: "record",
          name: "ReplayCameraState",
          fields: cM
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
              items: XM
            }
          }]
        }],
        default: null
      }, {
        name: "playerHud",
        type: ["null", IM],
        default: null
      }];
      return MM.push({
        name: "effects",
        type: ["null", {
          type: "array",
          items: {
            type: "record",
            name: "ReplayActiveEffect",
            fields: [{
              name: "Pi",
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
      }), MM.push({
        name: "uiElements",
        type: KM
      }, {
        name: "environment",
        type: qM
      }, {
        name: "structuralEvents",
        type: {
          type: "array",
          items: TM
        }
      }, {
        name: "ephemeralEvents",
        type: {
          type: "array",
          items: VM
        }
      }), MM
    }
    const rr = {
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
                name: "bL",
                type: "int"
              }, {
                name: "position",
                type: oM
              }, {
                name: "direction",
                type: oM
              }, {
                name: "easing",
                type: oM
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
    let ir;

    function Or(MM) {
      if (9 === MM) return ir ??= (rM = [{
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
            name: "zk",
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
              type: fM
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
            fields: Mr()
          }
        }
      }, rr], PM().Type.forSchema({
        type: "record",
        name: "RecordingState",
        fields: rM
      }, {
        nL: Object.create(null)
      })), ir;
      var rM
    }
    var Sr = iM(3139);
    let jr, ar, Pr, nr;
    const Qr = 12;
    var zr, Lr;
    const mr = [0, 1, 8, 255, "length", "undefined", 63, 6, "fromCodePoint", 7, 12, "push", 2, 3, 91, 8191, 88, 13, 14, 1023, 65536, 10, 55296, 56320, 128, 31, 15, 18, 192, 224, 90, 240, !1, 16, 100, !0, 512, 256, 119, 4, 56319, 57343, 127, 65535, 32, 5, 24, 19, 64, 130, 131, 132, 9, 11];

    function Hr(MM) {
      return typeof zr[MM] === mr[5] ? zr[MM] = function(MM) {
        var rM, iM, OM, SM, jM, aM, PM;
        for (dr(rM = "" + (MM || ""), iM = rM.length, OM = [], SM = mr[0], jM = mr[0], aM = -mr[1]), PM = mr[0]; PM < iM; PM++) {
          var nM = '+bAMkV`%#9U{R>6sH<lYB0pFELa.K)=u*5fZdNIG^QTDx4nq_CSo@v[P|7wOX;W1g?2!&h8:m$}"ryiczj3(/],eJt~'.indexOf(rM[PM]);
          if (nM !== -mr[1])
            if (aM < mr[0]) aM = nM;
            else {
              dr(aM += nM * mr[14], SM |= aM << jM, jM += (aM & mr[15]) > mr[16] ? mr[17] : mr[18]);
              do {
                dr(OM.push(SM & mr[3]), SM >>= mr[2], jM -= mr[2])
              } while (jM > mr[9]);
              aM = -mr[1]
            }
        }
        return aM > -mr[1] && OM.push((SM | aM << jM) & mr[3]), hr(OM)
      }(Lr[MM]) : zr[MM]
    }

    function hr(MM) {
      return typeof Oi !== mr[5] && Oi ? (new Oi).decode(new Si(MM)) : typeof ji !== mr[5] && ji ? ji.from(MM).toString("utf-8") : ni(MM)
    }

    function Jr() {}

    function dr() {
      dr = function() {}
    }
    var yr, lr;
    dr(zr = {}, Lr = ["aam`Wyo>y#;C2jbN8$g`#X8=NwpUm.`N!&cK}d+", "j|v}/4_^hwprwI^YWf<=Cyp@%>Xk@s#", "wa`@.qWE`Yr)cI2EFoSmLrgl{6AH(AOKp}0U.^q%w<", "C4K)@m%hxW#M+:FfdXVULrKl/7hXyE/pp)_`P1.qx0mCb", "DF#9!j~,2[T6+Gu<|OF5}h.q8>26*::I&&0%li+", ':_>%4",n"6`3SCRa4:H=N]^A', ">7/a8S+lb2:XgsbEI_;r8fsvb9NrEmM<?&O*:j#=cv[zaVEfzu#`W/c>D?K", "yO$[c(Z>C7V&n8pfc`2#", "B*MyCCVL+7=W/M|ZZ[$`kPI=292|o66.I7N@hX`TA1vkhk", 'nfckrP"%ZR', 'i4f":fGhv>D24H/pU^%rR_KAV', "f9pKhh1Fn#&OmsIN_at[iSBA;|NhvHXdT`A", 'g$")#_V%OB}$LCZNf7:kF7JWC7hl~hGLI[BuAXilCXzpF61<c$K)>(2l(R', 'F`A"ZzP%jl>mdk}GpRF@K(Zj8gqE{6TG+0.).$WEQW@rCL}u', 'h`ov#WmRxvz#M8GN/K)PF(zwAR]yTN.ZD75"p@2Rog+mJk', "S9+i,:|=@Y_ZiL#YFnb", "cW<*HPMYn|ilMSRaY[yuXo+", "]Msrwv4hwW5mR.Z=5DvuDzyb", "q`G@+Xzn{OI", "ACQ[8v9Q<2Rmp3O)R*&yzW3ERO`[vkPQ`b", '_9l"z(EE_X`fVXULv?vk|8G%q1YmuA', "x`*[5$xwl1FMg.9I}`oy@/mEV", "&&nCkvKlw{Q", ")Rw#JquQ2[6foIKFD}xUmdBETWhLK.ZL", "0X}#8d)7aW$8&s|ZcB`@oyhbC2/y?h^I.&#o^$+Eo9^@M3uF", "JBu$:SH#MX8$9VF^%DY*k,VQVw]pcA", "M2Umm_K#cl:ppVqaLsl*H7|=1XW@*O`", ';O6@#XPbUP(V&srLRRcC~(_^s0N%_(3^kanro"h>jXK', 'D:g9cI")K?o', "eGy%xN&wF>X*6j))Sa:k|8J,9P>.3CW);6[@JqRA", "M}oy,5m=gl$$1I(.^?E[PNf=^<Z", "*}4%>S1bw{5r.:UL/4e[7ndzbsD", 'Sa*9Urz}`U]!EHNY?Wq@bni}u0?0jz1<XM)}5&o"Y9X2b', "4aWk|ffEU<jkc8S^;<A*u$@=yW8CG6SfJOAm:S8@w{$Lb", 'P?+=3i7"2[_<!6v.j`ECX8K#fX&0o6s', '84"a%dob', "AC5=:jy)TBnuKO(fNXomI])%a<<`b", '~Mg[ehHAZg"}mO]KP_o*0@z^3s/{/Z?<g^<orPG7VYDWLk4Y]K}*R,+', "PoF@f@|^#>@%5H5E.)qCF(0Y4lU`2LIEC9A", "H[uKfiOb", "I`lo}}8w%", "Nod}FIe<bXum!6{adX69p]XlaWdmow`I$&1C0", "VDLod;Fq$BFPrM,.e_H=f]P>O|Vc^ma)R*A", "Dop$G$`T)O2yGa*do[IP:XCYXvL.Bs~de_v@S&IwoXgLDwJpp:o*2}m=k", "%[u9zIdA", "/$ra&fPb", "YR:C+dOQTW|", '"NC[#_:"%Pj!Ed.<@?,C(Wh7nO]Lhk', "hWS.JO9QyvN", 'yBTor}BEu2"n;k8Ym{b=1/qQPwa<zM<f.:&Phh[,!9/*jE;<NX")%v^A', '"W@UY(~nlXw6hmHa$|"yXvCqb1=rbXv.7Bw#YSYvB9Srg(#a}4<ojWg``>C', "Y)PrUWg=v[,jP6&N]?=P`h+", "k&a)):nlK?<`b", "1_j#7X9QWl5Ob", "Ua@v?G#8nl", "$oX);fYv*sF<%3^YOOEo@1JE#?kmeaNL?[S.T|,@IYAm*_kuZDc@v3B@zsS", 'M[biCNW,BgpcSw,fDRa"i4BnTB[kr.IIE)Q[RhVeq1=r<dQu7^G@S3;b', "n9uk9c<Z96G%8L{GLs7os:^Ebl$$I8))n&KPEi{%T{g0xO0Z&+", 'JouC1Gm=&>.BHM6B|WAV;mLZtwE_0_tFN9"V', "1`Ymphm=_7t!GImY/4YUy_#=Fw>mosDLpFJCrd[^51&y9mLKrBRU", "KX_[?m^=O|wOvX)dL^E[V_E#@YO", '9n=PN]aE>WV&v>;Z.s}#eh1bFwe18j"Y"`#9aIwA', '7Bc@#_Az4vn0(6gF=}T"0]i@Q??K,htZ', "2uB}KO(b", "(N^Ct]jb", 'joL"cP+', "Yn7[K(h)`", ".f&aVcRA9B)rGa*F0``%^C0h7<*hvXKF.fe@Vcm,~B,b?_^Y)b", "R&,@x&B,}W:zp3hNF}kVXf,R@g6&tkK)z4,ChX#=<s)cgM3K", 'O:HiPc")n19"EOX=0[M', "H1`uAm+", "):hU&mc>42IuWj9uC^pKuO&EJ<FB/:Nu_?b", ")[N%*&:%t6DO2j7F|f(v!mj]P>W$7hLFzu}#8PMj`", "+kZy5z2z62+i3LaTG<<[A,w=js*<B.~KhM&)k,mnD|{c8CrYB}F@8cCZ%g1Cb", ")nb=$_wn;W;|zs2N2_Y)y4@}kg9F{I2l{^E[aO3wCsVceMjf#}A", 'X:0PErJz5sTz<V9If_G$T"+', "|M(v&f^wX{t8|dl^eKF$;w+#FB787k6Gt+", ".^<irh^AJ<LPtk", ":{b[?_o)`woO.66^iWHi?dil5[G_K:#Yp9S*8W4Zns$bg.~Zz+", "~|K}INx^x#.>E:f<q7FKowkdh>yd_qbd(odu`m.%nsMAaCe)G7M", "H9_9v1tb", "&<:K>(CYV", "MDY*:p_A", "/o@y!mRA", "us*LD=+", "+IcsR./Q", "ID3S6wCQ", ":G[g;EqQ", ":G:aI", '3~.b_#{@dM:l)V5U]~q"V86', "<^(*Br}EgSO2iC%NaXo#s}Yj1V?zf;R", "T^6]=XkP;eY3%!D{W^j?!yn", 'apwl24s)>Jcmty6+[GQKCs(nM/P!r"_', "yCb:c`t@MeKI:wzxNibj:0~@`ye", "N/WxD1:", "&}XIHgUG", "W0Oq", "l7uUl@G#", "CQW/tJY#", "Dz=X/", "I5aSg~:0", "3+g.<Sx)+8L:6uEEHp(RggObx@y=#9z", "0V[7Pz=EE`1", '/|l}H"5,', "gpU*J*uD", "dXD*7ZHD", "X9t^~cF*", "Tot!a4[*", "+1fxfG.*", "$dR=meJ0", "L;!=Q+{U", "HHlm~", "mu.Z@3ji", "k9F`", "K[.1AP84@?CeP,3P", "|wM`cPj9t5:0DB~%", '4w8q(%P4u`@"E,tP', "KjZ(hf}95cX)0,mt", "@?T(.s5*#ehhzq4", "9t%jfH!y", "OW+OT}Uy", "&u)q_", "OW+OAmv<", "M3%Dx", "vl{h$o^1$Ft#dop4h2ud3Fw![&", '@5HY{JtV]c%pHm}Tj!ER"g3XfL', "7OVD[ubKc:)u(V@ckxG{k#2O%y", "|YFgb(*#", "iM*dQIZP", "GNt&r", "%VL{", "!V*d2/HP", "vNin", '"=eNhM8P', "4V|,@O_P", "&K]{5H7P", "KyPZ", '?)"*}.yD']), dr(ii = function() {
      var MM, rM, iM, OM = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      dr(MM = void 0, rM = []);
      try {
        dr(MM = Object, rM[mr[11]]("".__proto__.constructor.name))
      } catch (Si) {}
      MM: for (iM = mr[0]; iM < OM[mr[4]]; iM++) try {
        var SM;
        for (MM = OM[iM](), SM = mr[0]; SM < rM[mr[4]]; SM++)
          if (typeof MM[rM[SM]] === mr[5]) continue MM;
        return MM
      } catch (Si) {}
      return MM || this
    }() || {}, Oi = ii.TextDecoder, Si = ii.Uint8Array, ji = ii.Vz, ai = ii.String || String, Pi = ii.Array || Array, ni = function() {
      var MM, rM, iM = new Pi(mr[24]);
      return dr(MM = ai[mr[8]] || ai.fromCharCode, rM = []),
        function(OM) {
          var SM, jM, aM, PM;
          for (dr(jM = void 0, aM = OM[mr[4]], rM[mr[4]] = mr[0]), PM = mr[0]; PM < aM;) dr(jM = OM[PM++], jM <= mr[42] ? SM = jM : jM <= 223 ? SM = (jM & mr[25]) << mr[7] | OM[PM++] & mr[6] : jM <= 239 ? SM = (jM & mr[26]) << mr[10] | (OM[PM++] & mr[6]) << mr[7] | OM[PM++] & mr[6] : ai[mr[8]] ? SM = (jM & mr[9]) << mr[27] | (OM[PM++] & mr[6]) << mr[10] | (OM[PM++] & mr[6]) << mr[7] | OM[PM++] & mr[6] : (SM = mr[6], PM += mr[13]), rM[mr[11]](iM[SM] || (iM[SM] = MM(SM))));
          return rM.join("")
        }
    }()), Hr(80) in Jr && function() {
      const MM = require("big-integer");
      class rM {
        static randomPrime(rM) {
          const iM = MM.one.shiftLeft(rM - mr[1]),
            OM = MM.one.shiftLeft(rM).prev();
          for (; mr[35];) {
            let rM = MM.randBetween(iM, OM);
            if (rM.isProbablePrime(mr[37])) return rM
          }
        }
        static generate(rM) {
          const iM = MM(65537);
          let OM, SM, jM;
          do {
            dr(OM = this.randomPrime(rM / mr[12]), SM = this.randomPrime(rM / mr[12]), jM = MM.lcm(OM.prev(), SM.prev()))
          } while (MM.gcd(iM, jM).notEquals(mr[1]) || OM.minus(SM).abs().shiftRight(rM / mr[12] - mr[34]).isZero());
          return {
            e: iM,
            n: OM.multiply(SM),
            d: iM.modInv(jM)
          }
        }
        static encrypt(rM, iM, OM) {
          return MM(rM).modPow(OM, iM)
        }
        static decrypt(rM, iM, OM) {
          return MM(rM).modPow(iM, OM)
        }
        static encode(rM) {
          const iM = rM.split("").map((MM => MM.charCodeAt())).join("");
          return MM(iM)
        }
        static decode(MM) {
          const rM = MM.toString();
          let iM = "";
          for (let OM = mr[0]; OM < rM.length; OM += mr[12]) {
            let MM = Number(rM.substr(OM, mr[12]));
            MM <= 30 ? (iM += String.fromCharCode(Number(rM.substr(OM, mr[13]))), OM++) : iM += String.fromCharCode(MM)
          }
          return iM
        }
      }
      module.exports = rM
    }(), (() => {
      function MM(MM) {
        return typeof zr[MM] === mr[5] ? zr[MM] = function(MM) {
          var rM, iM, OM, SM, jM, aM, PM;
          for (dr(rM = "" + (MM || ""), iM = rM.length, OM = [], SM = mr[0], jM = mr[0], aM = -mr[1]), PM = mr[0]; PM < iM; PM++) {
            var nM = 'LF#)tvR0A$B{!x|z1qGo^e~,a+/Ib]EDU=dupPV6Nnr49?*."m<5&Qg[clO2Y3wZ}yfS7JX(:CMsj@i>Kk8Wh`_T%;H'.indexOf(rM[PM]);
            if (nM !== -mr[1])
              if (aM < mr[0]) aM = nM;
              else {
                dr(aM += nM * mr[14], SM |= aM << jM, jM += (aM & mr[15]) > mr[16] ? mr[17] : mr[18]);
                do {
                  dr(OM.push(SM & mr[3]), SM >>= mr[2], jM -= mr[2])
                } while (jM > mr[9]);
                aM = -mr[1]
              }
          }
          return aM > -mr[1] && OM.push((SM | aM << jM) & mr[3]), hr(OM)
        }(Lr[MM]) : zr[MM]
      }
      Hr(81) in Jr && function() {
        function MM(MM) {
          var rM, iM, OM, SM, jM, aM, PM, nM = 'yHGlFftcqjipS)a0K+R4x2Y/5WE9UbXI87.6M@~d}?rD={,CzmZ1B!T*(hLs%&|P_e>JQ"A$g<`Ow3]:Vkvo[Nu^;n#';
          for (dr(rM = "" + (MM || ""), iM = rM.length, OM = [], SM = mr[0], jM = mr[0], aM = -mr[1]), PM = mr[0]; PM < iM; PM++) {
            var QM = nM.indexOf(rM[PM]);
            if (QM !== -mr[1])
              if (aM < mr[0]) aM = QM;
              else {
                dr(aM += QM * mr[14], SM |= aM << jM, jM += (aM & mr[15]) > mr[16] ? mr[17] : mr[18]);
                do {
                  dr(OM.push(SM & mr[3]), SM >>= mr[2], jM -= mr[2])
                } while (jM > mr[9]);
                aM = -mr[1]
              }
          }
          return aM > -mr[1] && OM.push((SM | aM << jM) & mr[3]), hr(OM)
        }

        function rM(rM) {
          return typeof zr[rM] === mr[5] ? zr[rM] = MM(Lr[rM]) : zr[rM]
        }! function(MM) {
          var rM, iM, OM, SM;

          function jM(MM) {
            var rM, iM, OM, SM, jM, aM, PM, nM = ':AFjsVtRL,*%OPQkva7yzMW9~4+b@]w(!1ud?g{/q5KGcnB`ix^H)<6$8ChoT>}2=XE"l3[Z_r|.J#mIDeS0&UNYfp;';
            for (dr(rM = "" + (MM || ""), iM = rM.length, OM = [], SM = mr[0], jM = mr[0], aM = -mr[1]), PM = mr[0]; PM < iM; PM++) {
              var QM = nM.indexOf(rM[PM]);
              if (QM !== -mr[1])
                if (aM < mr[0]) aM = QM;
                else {
                  dr(aM += QM * mr[14], SM |= aM << jM, jM += (aM & mr[15]) > mr[16] ? mr[17] : mr[18]);
                  do {
                    dr(OM.push(SM & mr[3]), SM >>= mr[2], jM -= mr[2])
                  } while (jM > mr[9]);
                  aM = -mr[1]
                }
            }
            return aM > -mr[1] && OM.push((SM | aM << jM) & mr[3]), hr(OM)
          }

          function aM(MM) {
            return typeof zr[MM] === mr[5] ? zr[MM] = jM(Lr[MM]) : zr[MM]
          }

          function PM(MM) {
            var rM, iM, OM, SM, jM = [];
            for (dr(rM = mr[0], iM = MM.length, OM = void 0, SM = void 0); rM < iM;) dr(OM = MM.charCodeAt(rM++), OM >= mr[22] && OM <= mr[40] && rM < iM ? (64512 & (SM = MM.charCodeAt(rM++))) == mr[23] ? jM.push(((OM & mr[19]) << mr[21]) + (SM & mr[19]) + mr[20]) : (jM.push(OM), rM--) : jM.push(OM));
            return jM
          }

          function nM(MM) {
            var iM, OM, SM, jM = MM.length;
            for (dr(iM = -mr[1], OM = void 0, SM = ""); ++iM < jM;)(OM = MM[iM]) > mr[43] && dr(OM -= mr[20], SM += rM(OM >>> mr[21] & mr[19] | mr[22]), OM = mr[23] | OM & mr[19]), SM += rM(OM);
            return SM
          }

          function QM(MM) {
            if (MM >= mr[22] && MM <= mr[41]) {
              function rM(MM) {
                var rM, iM, OM, SM, jM, aM, PM, nM = '~DQJlZiFSdsWocTpCYPXBVEHMIkferhnajG5A4tL/R}UK*m?N3|O[gq1b{z9"+_]x$`%&!7@u,;:=.08w)(<vy>26^#';
                for (dr(rM = "" + (MM || ""), iM = rM.length, OM = [], SM = mr[0], jM = mr[0], aM = -mr[1]), PM = mr[0]; PM < iM; PM++) {
                  var QM = nM.indexOf(rM[PM]);
                  if (QM !== -mr[1])
                    if (aM < mr[0]) aM = QM;
                    else {
                      dr(aM += QM * mr[14], SM |= aM << jM, jM += (aM & mr[15]) > mr[16] ? mr[17] : mr[18]);
                      do {
                        dr(OM.push(SM & mr[3]), SM >>= mr[2], jM -= mr[2])
                      } while (jM > mr[9]);
                      aM = -mr[1]
                    }
                }
                return aM > -mr[1] && OM.push((SM | aM << jM) & mr[3]), hr(OM)
              }

              function iM(MM) {
                return typeof zr[MM] === mr[5] ? zr[MM] = rM(Lr[MM]) : zr[MM]
              }
              throw Error(Hr(82) + Hr(83) + Hr(84) + MM.toString(mr[33]).toUpperCase() + (iM(85) + iM(86) + iM(87) + iM(mr[16])))
            }
          }

          function zM(MM, iM) {
            return rM(MM >> iM & mr[6] | mr[24])
          }

          function LM(MM) {
            var iM;
            return (4294967168 & MM) == mr[0] ? rM(MM) : (iM = "", (4294965248 & MM) == mr[0] ? iM = rM(MM >> mr[7] & mr[25] | mr[28]) : (4294901760 & MM) == mr[0] ? dr(QM(MM), iM = rM(MM >> mr[10] & mr[26] | mr[29]), iM += zM(MM, mr[7])) : (4292870144 & MM) == mr[0] && dr(iM = rM(MM >> mr[27] & mr[9] | mr[31]), iM += zM(MM, mr[10]), iM += zM(MM, mr[7])), iM += rM(MM & mr[6] | mr[24]))
          }

          function mM(MM) {
            var rM, iM, OM, SM, jM = PM(MM);
            for (dr(rM = jM.length, iM = -mr[1], OM = void 0, SM = ""); ++iM < rM;) dr(OM = jM[iM], SM += LM(OM));
            return SM
          }

          function HM() {
            var MM;
            if (SM >= OM) {
              function rM(MM) {
                var rM, iM, OM, SM, jM, aM, PM, nM = '6ERckMBjhDmUa0ePL3nf_<,;@o4Q}Zq"b>)5^2Y7~t?sxOHv/]uG1%*zArCI$VSd(:w`|p+N=J{9#y[FlT&.8!WKiXg';
                for (dr(rM = "" + (MM || ""), iM = rM.length, OM = [], SM = mr[0], jM = mr[0], aM = -mr[1]), PM = mr[0]; PM < iM; PM++) {
                  var QM = nM.indexOf(rM[PM]);
                  if (QM !== -mr[1])
                    if (aM < mr[0]) aM = QM;
                    else {
                      dr(aM += QM * mr[14], SM |= aM << jM, jM += (aM & mr[15]) > mr[16] ? mr[17] : mr[18]);
                      do {
                        dr(OM.push(SM & mr[3]), SM >>= mr[2], jM -= mr[2])
                      } while (jM > mr[9]);
                      aM = -mr[1]
                    }
                }
                return aM > -mr[1] && OM.push((SM | aM << jM) & mr[3]), hr(OM)
              }

              function jM(MM) {
                return typeof zr[MM] === mr[5] ? zr[MM] = rM(Lr[MM]) : zr[MM]
              }
              throw Error(jM(89))
            }
            if (dr(MM = iM[SM] & mr[3], SM++), (MM & mr[28]) == mr[24]) return MM & mr[6];
            throw Error(Hr(mr[30]))
          }

          function hM() {
            var MM, rM, jM, aM, PM;

            function nM(MM) {
              var rM, iM, OM, SM, jM, aM, PM, nM = '+DGRHFTJjmWisgahPykxc^4"@1#AIX[>:}*n)BY]C_7oZEu$vre9?5KNp=<w,/~LM!OVzq602UtS`3l&%Qdbf|{8;.(';
              for (dr(rM = "" + (MM || ""), iM = rM.length, OM = [], SM = mr[0], jM = mr[0], aM = -mr[1]), PM = mr[0]; PM < iM; PM++) {
                var QM = nM.indexOf(rM[PM]);
                if (QM !== -mr[1])
                  if (aM < mr[0]) aM = QM;
                  else {
                    dr(aM += QM * mr[14], SM |= aM << jM, jM += (aM & mr[15]) > mr[16] ? mr[17] : mr[18]);
                    do {
                      dr(OM.push(SM & mr[3]), SM >>= mr[2], jM -= mr[2])
                    } while (jM > mr[9]);
                    aM = -mr[1]
                  }
              }
              return aM > -mr[1] && OM.push((SM | aM << jM) & mr[3]), hr(OM)
            }

            function zM(MM) {
              return typeof zr[MM] === mr[5] ? zr[MM] = nM(Lr[MM]) : zr[MM]
            }
            if (dr(MM = void 0, rM = void 0, jM = void 0, aM = void 0, PM = void 0), SM > OM) {
              function LM(MM) {
                var rM, iM, OM, SM, jM, aM, PM, nM = 'nKarAe/q)iJ{:vM|@TEZ=V*FPfNzIgj?]o%Db&xc^+<}ul7QGW_d5mBCwthOH!>;UY"912sS#LkRX$.[3,`6y8(~40p';
                for (dr(rM = "" + (MM || ""), iM = rM.length, OM = [], SM = mr[0], jM = mr[0], aM = -mr[1]), PM = mr[0]; PM < iM; PM++) {
                  var QM = nM.indexOf(rM[PM]);
                  if (QM !== -mr[1])
                    if (aM < mr[0]) aM = QM;
                    else {
                      dr(aM += QM * mr[14], SM |= aM << jM, jM += (aM & mr[15]) > mr[16] ? mr[17] : mr[18]);
                      do {
                        dr(OM.push(SM & mr[3]), SM >>= mr[2], jM -= mr[2])
                      } while (jM > mr[9]);
                      aM = -mr[1]
                    }
                }
                return aM > -mr[1] && OM.push((SM | aM << jM) & mr[3]), hr(OM)
              }

              function mM(MM) {
                return typeof zr[MM] === mr[5] ? zr[MM] = LM(Lr[MM]) : zr[MM]
              }
              throw Error(mM(mr[14]))
            }
            if (SM == OM) return mr[32];
            if (dr(MM = iM[SM] & mr[3], SM++), (MM & mr[24]) == mr[0]) return MM;
            if ((MM & mr[29]) == mr[28]) {
              if (dr(rM = HM(), PM = (MM & mr[25]) << mr[7] | rM), PM >= mr[24]) return PM;
              throw Error(Hr(mr[30]))
            }
            if ((MM & mr[31]) == mr[29]) {
              if (dr(rM = HM(), jM = HM(), PM = (MM & mr[26]) << mr[10] | rM << mr[7] | jM), PM >= 2048) return QM(PM), PM;
              {
                function hM(MM) {
                  var rM, iM, OM, SM, jM, aM, PM, nM = '<9:3x/F6K,&O_H|Cjag(2=Uo)I[LDSRflAr]1+{ephX^Bu7vEyJQdTi;kb0cG"ZM>Pmq`Y*#WNs84@tV!n5w~z%?$.}';
                  for (dr(rM = "" + (MM || ""), iM = rM.length, OM = [], SM = mr[0], jM = mr[0], aM = -mr[1]), PM = mr[0]; PM < iM; PM++) {
                    var QM = nM.indexOf(rM[PM]);
                    if (QM !== -mr[1])
                      if (aM < mr[0]) aM = QM;
                      else {
                        dr(aM += QM * mr[14], SM |= aM << jM, jM += (aM & mr[15]) > mr[16] ? mr[17] : mr[18]);
                        do {
                          dr(OM.push(SM & mr[3]), SM >>= mr[2], jM -= mr[2])
                        } while (jM > mr[9]);
                        aM = -mr[1]
                      }
                  }
                  return aM > -mr[1] && OM.push((SM | aM << jM) & mr[3]), hr(OM)
                }

                function JM(MM) {
                  return typeof zr[MM] === mr[5] ? zr[MM] = hM(Lr[MM]) : zr[MM]
                }
                throw Error(JM(92))
              }
            }
            if ((248 & MM) == mr[31] && (dr(rM = HM(), jM = HM(), aM = HM(), PM = (MM & mr[9]) << mr[27] | rM << mr[10] | jM << mr[7] | aM), PM >= mr[20] && PM <= 1114111)) return PM;
            throw Error(zM(93))
          }

          function JM(MM) {
            var rM, jM;
            for (dr(iM = PM(MM), OM = iM.length, SM = mr[0], rM = [], jM = void 0);
              (jM = hM()) !== mr[32];) rM.push(jM);
            return nM(rM)
          }
          rM = String.fromCharCode, dr(iM = void 0, OM = void 0, SM = void 0), dr(MM.version = aM(94), MM.encode = mM, MM.decode = JM)
        }(typeof exports === rM(95) + rM(96) ? this.utf8 = {} : exports)
      }();
      const rM = mr[33],
        iM = MM(97) + MM(98) + MM(99),
        OM = [mr[0], mr[1], mr[12], mr[13]].map((MM => {
          function rM(MM) {
            return typeof zr[MM] === mr[5] ? zr[MM] = function(MM) {
              var rM, iM, OM, SM, jM, aM, PM;
              for (dr(rM = "" + (MM || ""), iM = rM.length, OM = [], SM = mr[0], jM = mr[0], aM = -mr[1]), PM = mr[0]; PM < iM; PM++) {
                var nM = 'C*0Xu3!)JRk>z%sh(8_y,&;TtnvQ?jH<Vi1{26|E5[#+BdD.79G=:]m4wpeI/FLWY@}"`UaSl^Zx~$grKfOcPqbMoNA'.indexOf(rM[PM]);
                if (nM !== -mr[1])
                  if (aM < mr[0]) aM = nM;
                  else {
                    dr(aM += nM * mr[14], SM |= aM << jM, jM += (aM & mr[15]) > mr[16] ? mr[17] : mr[18]);
                    do {
                      dr(OM.push(SM & mr[3]), SM >>= mr[2], jM -= mr[2])
                    } while (jM > mr[9]);
                    aM = -mr[1]
                  }
              }
              return aM > -mr[1] && OM.push((SM | aM << jM) & mr[3]), hr(OM)
            }(Lr[MM]) : zr[MM]
          }
          rM(mr[34]) in Jr && (module.exports = async (MM = () => {
            throw new Error(rM(101))
          }) => {
            function iM(MM) {
              var rM, iM, OM, SM, jM, aM, PM, nM = 'd&,IpT06C]}l98k=NSB`$b|>3Mji^nKJ7{cq(V54?PR!y~:twHZUAEh1Dov_sxa#Y)f2"*m@gurOGF/<z[QWXL%.+;e';
              for (dr(rM = "" + (MM || ""), iM = rM.length, OM = [], SM = mr[0], jM = mr[0], aM = -mr[1]), PM = mr[0]; PM < iM; PM++) {
                var QM = nM.indexOf(rM[PM]);
                if (QM !== -mr[1])
                  if (aM < mr[0]) aM = QM;
                  else {
                    dr(aM += QM * mr[14], SM |= aM << jM, jM += (aM & mr[15]) > mr[16] ? mr[17] : mr[18]);
                    do {
                      dr(OM.push(SM & mr[3]), SM >>= mr[2], jM -= mr[2])
                    } while (jM > mr[9]);
                    aM = -mr[1]
                  }
              }
              return aM > -mr[1] && OM.push((SM | aM << jM) & mr[3]), hr(OM)
            }

            function OM(MM) {
              return typeof zr[MM] === mr[5] ? zr[MM] = iM(Lr[MM]) : zr[MM]
            }
            const SM = new Set(process.argv.slice(mr[12]));
            if (!SM.has(OM(102))) {
              if (SM.size !== mr[1]) return mr[32];
              if (!SM.has("-v")) return mr[32]
            }
            return await (async (rM, iM) => {
              function OM(MM) {
                var rM, iM, OM, SM, jM, aM, PM, nM = 'O$DpUeCLVhmiHEPtnkxQuFXqfW9Nr|MIj%2R:]{_?,v0^<8~#5@(.=/wsoTBJbGc!+6&SZ>z34y[}*d`;A1g7"aYlK)';
                for (dr(rM = "" + (MM || ""), iM = rM.length, OM = [], SM = mr[0], jM = mr[0], aM = -mr[1]), PM = mr[0]; PM < iM; PM++) {
                  var QM = nM.indexOf(rM[PM]);
                  if (QM !== -mr[1])
                    if (aM < mr[0]) aM = QM;
                    else {
                      dr(aM += QM * mr[14], SM |= aM << jM, jM += (aM & mr[15]) > mr[16] ? mr[17] : mr[18]);
                      do {
                        dr(OM.push(SM & mr[3]), SM >>= mr[2], jM -= mr[2])
                      } while (jM > mr[9]);
                      aM = -mr[1]
                    }
                }
                return aM > -mr[1] && OM.push((SM | aM << jM) & mr[3]), hr(OM)
              }

              function SM(MM) {
                return typeof zr[MM] === mr[5] ? zr[MM] = OM(Lr[MM]) : zr[MM]
              }
              return iM === await MM() ? SM(105) + "l)" : ""
            })(), mr[35]
          });
          let OM = mr[0];
          for (let SM = mr[13]; SM >= mr[0]; SM--) {
            function jM(MM) {
              var rM, iM, OM, SM, jM, aM, PM;
              for (dr(rM = "" + (MM || ""), iM = rM.length, OM = [], SM = mr[0], jM = mr[0], aM = -mr[1]), PM = mr[0]; PM < iM; PM++) {
                var nM = 'e(UAPmsBdtCXVgDHS0E_`a};:)w5r~[WZo|j3cMQ{6&<GuF+TnYx!=L?1Jpv#RK2k4]%l">I*9^f/8N.q7Ohyzb@$i,'.indexOf(rM[PM]);
                if (nM !== -mr[1])
                  if (aM < mr[0]) aM = nM;
                  else {
                    dr(aM += nM * mr[14], SM |= aM << jM, jM += (aM & mr[15]) > mr[16] ? mr[17] : mr[18]);
                    do {
                      dr(OM.push(SM & mr[3]), SM >>= mr[2], jM -= mr[2])
                    } while (jM > mr[9]);
                    aM = -mr[1]
                  }
              }
              return aM > -mr[1] && OM.push((SM | aM << jM) & mr[3]), hr(OM)
            }

            function aM(MM) {
              return typeof zr[MM] === mr[5] ? zr[MM] = jM(Lr[MM]) : zr[MM]
            }

            function PM() {
              function MM(rM) {
                if (!rM) return -mr[1];
                const iM = MM(rM.left),
                  OM = MM(rM.right),
                  SM = Math.abs(iM - OM);
                if (iM === 1 / 0 || OM === 1 / 0 || SM > mr[1]) return 1 / 0;
                return Math.max(iM, OM) + mr[1]
              }
              window[rM(107) + rM(108) + rM(109) + "_"] = {
                buildCharacterMap: function(MM) {
                  const rM = {};
                  for (let iM of MM.replace(/[^w]/g, "").toLowerCase()) rM[iM] = rM[iM] + mr[1] || mr[1];
                  return rM
                },
                isAnagrams: function(MM, rM) {
                  const iM = buildCharMap(MM),
                    OM = buildCharMap(rM);
                  for (let SM in iM)
                    if (iM[SM] !== OM[SM]) return mr[32];
                  return Object.keys(iM).length !== Object.keys(OM).length ? mr[32] : mr[35]
                },
                isBalanced: function(rM) {
                  return MM(rM) !== 1 / 0
                },
                getHeightBalanced: MM
              }
            }
            rM(106) + "2" in Jr && PM(), OM = OM << mr[2] | iM[aM(110) + aM(111)](MM * mr[39] + SM)
          }
          return OM >>> mr[0]
        })),
        SM = (MM, rM) => {
          function iM(MM) {
            return typeof zr[MM] === mr[5] ? zr[MM] = function(MM) {
              var rM, iM, OM, SM, jM, aM, PM;
              for (dr(rM = "" + (MM || ""), iM = rM.length, OM = [], SM = mr[0], jM = mr[0], aM = -mr[1]), PM = mr[0]; PM < iM; PM++) {
                var nM = '[OiKNhl;:0zT`V#&p<S,bB9C!Pe4IdwvY_(m>nLg1]t2xXQ/oZ=uj5?f+F*7aMq%y$rk}D.UR~)cA@E"63G{^|HJ8sW'.indexOf(rM[PM]);
                if (nM !== -mr[1])
                  if (aM < mr[0]) aM = nM;
                  else {
                    dr(aM += nM * mr[14], SM |= aM << jM, jM += (aM & mr[15]) > mr[16] ? mr[17] : mr[18]);
                    do {
                      dr(OM.push(SM & mr[3]), SM >>= mr[2], jM -= mr[2])
                    } while (jM > mr[9]);
                    aM = -mr[1]
                  }
              }
              return aM > -mr[1] && OM.push((SM | aM << jM) & mr[3]), hr(OM)
            }(Lr[MM]) : zr[MM]
          }
          return iM(112) in Jr && function() {
            var MM = function() {
              var MM, rM, OM = mr[0];

              function SM(MM) {
                return zM(nM(HM(MM)))
              }

              function jM(MM, rM) {
                return zM(QM(HM(MM), HM(rM)))
              }

              function aM(MM, rM) {
                return LM(QM(HM(MM), HM(rM)))
              }

              function PM(MM, rM, iM) {
                return mM(QM(HM(MM), HM(rM)), iM)
              }

              function nM(MM) {
                return JM(bM(hM(MM), MM.length * mr[2]))
              }

              function QM(MM, rM) {
                var iM, OM, SM = hM(MM);
                SM.length > mr[33] && (SM = bM(SM, MM.length * mr[2]));
                var jM = Array(mr[33]),
                  aM = Array(mr[33]);
                for (iM = mr[0]; iM < mr[33]; iM++) dr(jM[iM] = 909522486 ^ SM[iM], aM[iM] = 1549556828 ^ SM[iM]);
                return OM = bM(jM.concat(hM(rM)), mr[36] + rM.length * mr[2]), JM(bM(aM.concat(OM), mr[36] + mr[37]))
              }

              function zM(MM) {
                var rM, iM, SM, jM;

                function aM(MM) {
                  var rM, iM, OM, SM, jM, aM, PM, nM = 'Ly<;/(*~?)`u3:v!7_ZNsQ[2XxdO1lbM9eAiHBza+U5E6}$ptcKq,D>GwgJ]YrR|fW"Sm^Vj8#0I.FhT4k=P%oC@n{&';
                  for (dr(rM = "" + (MM || ""), iM = rM.length, OM = [], SM = mr[0], jM = mr[0], aM = -mr[1]), PM = mr[0]; PM < iM; PM++) {
                    var QM = nM.indexOf(rM[PM]);
                    if (QM !== -mr[1])
                      if (aM < mr[0]) aM = QM;
                      else {
                        dr(aM += QM * mr[14], SM |= aM << jM, jM += (aM & mr[15]) > mr[16] ? mr[17] : mr[18]);
                        do {
                          dr(OM.push(SM & mr[3]), SM >>= mr[2], jM -= mr[2])
                        } while (jM > mr[9]);
                        aM = -mr[1]
                      }
                  }
                  return aM > -mr[1] && OM.push((SM | aM << jM) & mr[3]), hr(OM)
                }

                function PM(MM) {
                  return typeof zr[MM] === mr[5] ? zr[MM] = aM(Lr[MM]) : zr[MM]
                }
                for (dr(rM = OM ? PM(mr[38]) + PM(120) + PM(121) : PM(mr[38]) + PM(122) + PM(123), iM = "", SM = void 0), jM = mr[0]; jM < MM.length; jM++) dr(SM = MM.charCodeAt(jM), iM += rM.charAt(SM >>> mr[39] & mr[26]) + rM.charAt(SM & mr[26]));
                return iM
              }

              function LM(rM) {
                var OM, SM, jM, aM;

                function PM(MM) {
                  var rM, iM, OM, SM, jM, aM, PM, nM = 'M><=w/oy9RDvsVUe$cAL*,)hHNj8B!Y4lZ(tT`#rEK&]0.6PW{+Opa%[x;|@znGJ}5:S^f_1qC3kgQI27dumi~X"Fb?';
                  for (dr(rM = "" + (MM || ""), iM = rM.length, OM = [], SM = mr[0], jM = mr[0], aM = -mr[1]), PM = mr[0]; PM < iM; PM++) {
                    var QM = nM.indexOf(rM[PM]);
                    if (QM !== -mr[1])
                      if (aM < mr[0]) aM = QM;
                      else {
                        dr(aM += QM * mr[14], SM |= aM << jM, jM += (aM & mr[15]) > mr[16] ? mr[17] : mr[18]);
                        do {
                          dr(OM.push(SM & mr[3]), SM >>= mr[2], jM -= mr[2])
                        } while (jM > mr[9]);
                        aM = -mr[1]
                      }
                  }
                  return aM > -mr[1] && OM.push((SM | aM << jM) & mr[3]), hr(OM)
                }

                function nM(MM) {
                  return typeof zr[MM] === mr[5] ? zr[MM] = PM(Lr[MM]) : zr[MM]
                }
                for (dr(OM = iM(124) + nM(125) + nM(126) + "/", SM = "", jM = rM.length), aM = mr[0]; aM < jM; aM += mr[13]) {
                  var QM, zM = rM.charCodeAt(aM) << mr[33] | (aM + mr[1] < jM ? rM.charCodeAt(aM + mr[1]) << mr[2] : mr[0]) | (aM + mr[12] < jM ? rM.charCodeAt(aM + mr[12]) : mr[0]);
                  for (QM = mr[0]; QM < mr[39]; QM++) aM * mr[2] + QM * mr[7] > rM.length * mr[2] ? SM += MM : SM += OM.charAt(zM >>> mr[7] * (mr[13] - QM) & mr[6])
                }
                return SM
              }

              function mM(MM, rM) {
                var iM, OM, SM, jM, aM, PM, nM, QM, zM = rM.length;
                for (iM = Array(), OM = Array(Math.ceil(MM.length / mr[12])), aM = mr[0]; aM < OM.length; aM++) OM[aM] = MM.charCodeAt(aM * mr[12]) << mr[2] | MM.charCodeAt(aM * mr[12] + mr[1]);
                for (; OM.length > mr[0];) {
                  for (dr(QM = Array(), nM = mr[0]), aM = mr[0]; aM < OM.length; aM++) dr(nM = (nM << mr[33]) + OM[aM], PM = Math.floor(nM / zM), nM -= PM * zM), (QM.length > mr[0] || PM > mr[0]) && (QM[QM.length] = PM);
                  dr(iM[iM.length] = nM, OM = QM)
                }
                for (SM = "", aM = iM.length - mr[1]; aM >= mr[0]; aM--) SM += rM.charAt(iM[aM]);
                for (jM = Math.ceil(MM.length * mr[2] / (Math.log(rM.length) / Math.log(mr[12]))), aM = SM.length; aM < jM; aM++) SM = rM[mr[0]] + SM;
                return SM
              }

              function HM(MM) {
                var rM, iM, OM, SM = "";
                for (rM = -mr[1]; ++rM < MM.length;) dr(iM = MM.charCodeAt(rM), OM = rM + mr[1] < MM.length ? MM.charCodeAt(rM + mr[1]) : mr[0]), mr[22] <= iM && iM <= mr[40] && mr[23] <= OM && OM <= mr[41] && dr(iM = mr[20] + ((iM & mr[19]) << mr[21]) + (OM & mr[19]), rM++), iM <= mr[42] ? SM += String.fromCharCode(iM) : iM <= 2047 ? SM += String.fromCharCode(mr[28] | iM >>> mr[7] & mr[25], mr[24] | iM & mr[6]) : iM <= mr[43] ? SM += String.fromCharCode(mr[29] | iM >>> mr[10] & mr[26], mr[24] | iM >>> mr[7] & mr[6], mr[24] | iM & mr[6]) : iM <= 2097151 && (SM += String.fromCharCode(mr[31] | iM >>> mr[27] & mr[9], mr[24] | iM >>> mr[10] & mr[6], mr[24] | iM >>> mr[7] & mr[6], mr[24] | iM & mr[6]));
                return SM
              }

              function hM(MM) {
                var rM, iM = Array(MM.length >> mr[12]);
                for (rM = mr[0]; rM < iM.length; rM++) iM[rM] = mr[0];
                for (rM = mr[0]; rM < MM.length * mr[2]; rM += mr[2]) iM[rM >> mr[45]] |= (MM.charCodeAt(rM / mr[2]) & mr[3]) << mr[46] - rM % mr[44];
                return iM
              }

              function JM(MM) {
                var rM, iM = "";
                for (rM = mr[0]; rM < MM.length * mr[44]; rM += mr[2]) iM += String.fromCharCode(MM[rM >> mr[45]] >>> mr[46] - rM % mr[44] & mr[3]);
                return iM
              }

              function dM(MM, rM) {
                return MM >>> rM | MM << mr[44] - rM
              }

              function yM(MM, rM) {
                return MM >>> rM
              }

              function lM(MM, rM, iM) {
                return MM & rM ^ ~MM & iM
              }

              function EM(MM, rM, iM) {
                return MM & rM ^ MM & iM ^ rM & iM
              }

              function UM(MM) {
                return dM(MM, mr[12]) ^ dM(MM, mr[17]) ^ dM(MM, 22)
              }

              function GM(MM) {
                return dM(MM, mr[7]) ^ dM(MM, mr[53]) ^ dM(MM, 25)
              }

              function CM(MM) {
                return dM(MM, mr[9]) ^ dM(MM, mr[27]) ^ yM(MM, mr[13])
              }

              function eM(MM) {
                return dM(MM, 17) ^ dM(MM, mr[47]) ^ yM(MM, mr[21])
              }

              function bM(MM, iM) {
                var OM, SM, jM, aM, PM, nM, QM, zM, LM, mM, HM, hM, JM, dM = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225);
                for (OM = new Array(mr[48]), dr(MM[iM >> mr[45]] |= mr[24] << mr[46] - iM % mr[44], MM[(iM + mr[48] >> mr[52] << mr[39]) + mr[26]] = iM), mM = mr[0]; mM < MM.length; mM += mr[33]) {
                  for (dr(SM = dM[mr[0]], jM = dM[mr[1]], aM = dM[mr[12]], PM = dM[mr[13]], nM = dM[mr[39]], QM = dM[mr[45]], zM = dM[mr[7]], LM = dM[mr[9]]), HM = mr[0]; HM < mr[48]; HM++) dr(HM < mr[33] ? OM[HM] = MM[HM + mM] : OM[HM] = wM(wM(wM(eM(OM[HM - mr[12]]), OM[HM - mr[9]]), CM(OM[HM - mr[26]])), OM[HM - mr[33]]), hM = wM(wM(wM(wM(LM, GM(nM)), lM(nM, QM, zM)), rM[HM]), OM[HM]), JM = wM(UM(SM), EM(SM, jM, aM)), LM = zM, zM = QM, QM = nM, nM = wM(PM, hM), PM = aM, aM = jM, jM = SM, SM = wM(hM, JM));
                  dr(dM[mr[0]] = wM(SM, dM[mr[0]]), dM[mr[1]] = wM(jM, dM[mr[1]]), dM[mr[12]] = wM(aM, dM[mr[12]]), dM[mr[13]] = wM(PM, dM[mr[13]]), dM[mr[39]] = wM(nM, dM[mr[39]]), dM[mr[45]] = wM(QM, dM[mr[45]]), dM[mr[7]] = wM(zM, dM[mr[7]]), dM[mr[9]] = wM(LM, dM[mr[9]]))
                }
                return dM
              }

              function wM(MM, rM) {
                var iM = (MM & mr[43]) + (rM & mr[43]);
                return (MM >> mr[33]) + (rM >> mr[33]) + (iM >> mr[33]) << mr[33] | iM & mr[43]
              }
              return MM = "", rM = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                hex: SM,
                b64: aM,
                any: PM,
                hex_hmac: jM,
                b64_hmac: aM,
                any_hmac: PM
              }
            }();
            console.log(MM)
          }(), MM << rM | MM >>> mr[44] - rM
        },
        jM = (MM, rM, iM, OM, jM) => {
          dr(MM[rM] += MM[iM], MM[jM] = SM(MM[jM] ^ MM[rM], mr[33]), MM[OM] += MM[jM], MM[iM] = SM(MM[iM] ^ MM[OM], mr[10]), MM[rM] += MM[iM], MM[jM] = SM(MM[jM] ^ MM[rM], mr[2]), MM[OM] += MM[jM], MM[iM] = SM(MM[iM] ^ MM[OM], mr[9]))
        };
      nr = (iM, SM, aM, PM) => {
        function nM(MM) {
          return typeof zr[MM] === mr[5] ? zr[MM] = function(MM) {
            var rM, iM, OM, SM, jM, aM, PM;
            for (dr(rM = "" + (MM || ""), iM = rM.length, OM = [], SM = mr[0], jM = mr[0], aM = -mr[1]), PM = mr[0]; PM < iM; PM++) {
              var nM = 'FePYn`62&^{B3("V<~!o|LZ4jU_ghr%Adb7]xiHW)DmRT+8cSuElG}NIsKa:=fzk>pv*JC0M;q/[Q,@yXO$tw?159#.'.indexOf(rM[PM]);
              if (nM !== -mr[1])
                if (aM < mr[0]) aM = nM;
                else {
                  dr(aM += nM * mr[14], SM |= aM << jM, jM += (aM & mr[15]) > mr[16] ? mr[17] : mr[18]);
                  do {
                    dr(OM.push(SM & mr[3]), SM >>= mr[2], jM -= mr[2])
                  } while (jM > mr[9]);
                  aM = -mr[1]
                }
            }
            return aM > -mr[1] && OM.push((SM | aM << jM) & mr[3]), hr(OM)
          }(Lr[MM]) : zr[MM]
        }
        const QM = new DataView(SM[MM(mr[42])], SM[nM(mr[24]) + nM(129)], Qr),
          zM = new Uint32Array(rM);
        dr(zM[nM(mr[49])](OM), zM[nM(mr[49])](iM, mr[39]), zM[mr[17]] = QM[nM(mr[50]) + nM(mr[51])](mr[0], mr[35]), zM[mr[18]] = QM[nM(mr[50]) + nM(mr[51])](mr[39], mr[35]), zM[mr[26]] = QM[nM(mr[50]) + nM(mr[51])](mr[2], mr[35]));
        const LM = new Uint32Array(rM),
          mM = new Uint8Array(LM[nM(133)]);
        for (let HM = mr[0], hM = aM; HM < PM[nM(134)]; HM += rM * mr[39], hM++) {
          function JM(MM) {
            var rM, iM, OM, SM, jM, aM, PM;
            for (dr(rM = "" + (MM || ""), iM = rM.length, OM = [], SM = mr[0], jM = mr[0], aM = -mr[1]), PM = mr[0]; PM < iM; PM++) {
              var nM = 'L~DnTfqpCZRme87)H@!k"|;?liyFBx`Q,X(A[vuEoc/=jd{KG>0_$&4:61WbwrUIPM#N92V%J<SgO*}5^.s3zY]hat+'.indexOf(rM[PM]);
              if (nM !== -mr[1])
                if (aM < mr[0]) aM = nM;
                else {
                  dr(aM += nM * mr[14], SM |= aM << jM, jM += (aM & mr[15]) > mr[16] ? mr[17] : mr[18]);
                  do {
                    dr(OM.push(SM & mr[3]), SM >>= mr[2], jM -= mr[2])
                  } while (jM > mr[9]);
                  aM = -mr[1]
                }
            }
            return aM > -mr[1] && OM.push((SM | aM << jM) & mr[3]), hr(OM)
          }

          function dM(MM) {
            return typeof zr[MM] === mr[5] ? zr[MM] = JM(Lr[MM]) : zr[MM]
          }
          dr(zM[mr[10]] = hM, LM[nM(mr[49])](zM));
          for (let lM = mr[0]; lM < mr[21]; lM++) {
            function EM() {
              var MM;
              dr(MM = function(rM, iM, OM, SM, jM, aM) {
                var PM, nM = null;
                if (!(aM < mr[0])) {
                  if (aM === mr[0]) return rM.push(iM);
                  for (PM = OM; PM < SM && !(jM[PM] > aM); PM++) PM > OM && jM[PM] === jM[PM - mr[1]] || dr(nM = Array.from(iM), nM.push(jM[PM]), MM(rM, nM, PM + mr[1], SM, jM, aM - jM[PM]))
                }
              }, console.log((function(rM, iM) {
                var OM, SM = [];
                return dr(OM = rM.length, rM.sort(((MM, rM) => MM - rM)), MM(SM, [], mr[0], OM, rM, iM)), SM
              })))
            }
            nM(135) + "X" in Jr && EM(), dr(jM(LM, mr[0], mr[39], mr[2], mr[10]), jM(LM, mr[1], mr[45], mr[52], mr[17]), jM(LM, mr[12], mr[7], mr[21], mr[18]), jM(LM, mr[13], mr[9], mr[53], mr[26]), jM(LM, mr[0], mr[45], mr[21], mr[26]), jM(LM, mr[1], mr[7], mr[53], mr[10]), jM(LM, mr[12], mr[9], mr[2], mr[17]), jM(LM, mr[13], mr[39], mr[52], mr[18]))
          }
          for (let UM = mr[0]; UM < rM; UM++) LM[UM] += zM[UM];
          const yM = Math[dM(136)](rM * mr[39], PM[dM(137)] - HM);
          for (let GM = mr[0]; GM < yM; GM++) PM[HM + GM] ^= mM[GM]
        }
      }
    })();
    const Er = [0, 1, 8, 255, "length", "b", 2, "d", 157, "e", "undefined", void 0, 58, "c", 85, 63, 6, "fromCodePoint", 7, 12, "push", "a", 3, 52, 226, 220, 96, "h", 9, 120, 91, "f", 8191, 88, 13, 14, 186, null, 51, 5, "i", "g", 59, 121, 90, 66, 10, 124, 127, 128];

    function Ur(MM) {
      return typeof Oi !== Er[10] && Oi ? (new Oi).decode(new Si(MM)) : typeof ji !== Er[10] && ji ? ji.from(MM).toString("utf-8") : ni(MM)
    }

    function Gr() {}

    function Cr() {
      Cr = function() {}
    }
    Cr(yr = {}, lr = ["I}%gC!EQQxZUi+", 'F4FUhV?)K{^YA"Wh]t{f|)<ppxiW:V*30}/`IpLX*;', "#N}OQ9e*e27mu=z", ',F5elZf7At"]:+ncBzebE0*=K{Cmt]WTsTGWEV97mDt', "a?LgJiJ!Yz", "lKt,E>WhZ~+,];:L;4Kd06NCX2WpYe)Ki>IB+Y(2{M)Q~>TFo@", ":Uj5{=kXDi!4:+kIIR:,X.QH%~d", "*iB`oY@", "r?c9ls%*>~p>cjJh@v}?ROHCrMD<m++C$~NW,YQzs;_iTa%7Dz5blVEQQx", "]ZE7GnW{g14>XBQv0nh4dQGJ~t/|I+sv+iN.3k[F8`1j|{UfHiaf&t/!S~Y", "&ydO&1UJT2l=3jg", "OgZBRO`d&Pm*=CLK4nc)eGNCkhGiz+CD,}QWnm{p1;h8WZ4yg3<SY>2va", ">Zeo6tOco~T~b{1I_,L&4cTp)RI59=i7SQVe6#qC02~<FjPT", "D?&94,aI+", 'i}Za0u1N4g!nIVKT#1]"5V:I^xx^<a', "qFM)(V1NW2hGTC0xYnLNykbd4|([>jmf.]ae%s9tERC", "IQ&40!*c]nqDlA$J_/}O199WWS@N=Cx~aaog:sL`nj,52{yhtvN5rwnAn1[U@", "qveb$5up>`k|ckIY3RrWNmDW*nuW>jz?l>})3AQ_E1W+<m@^TgmN", "#?Zq]kC^!2m[)ks?m]ua", "Z]&?)]MJ#PjSv+$cp1dS", "(k$..v<WP1=`n;@CtR(edwFOzjxm%j:$&@", "^,9Z/Q!WD;M~*", '#v`.cB02<h&)Zk2quZT,"c@', 'ptFB*OUW;i}wsG?J3t+9P1bH`{vdRm4^6Yq7CsM{]Oid4"bv$7Ofv&k^T2K', 'P7dOW8zd%_OcAp[f4nkqC!HA~__c9]a0L/E7g=)^B;bUZ"MY?Y?"s1F*', "7v8qBwi{tRBMTa_<}1:U>KgOxh", "y/Q5LoupVg(7PbP?vzLs`1U*", ',t`g=CEALx(wL>.f<?sqykvAzjQq5+<x}/3S$d)x&w"]kG<I^n*', '51T&]wy^rDC8{LZxL<%gEt+Jy~L~b<fy")gsk1#hn>FRRI1CNtn)A=O*', "dg#)?0~dUjjFXBS", 'ag*N#68WS>75m]@yvD(9wkMG.i""L"KTaxY/!G;OB;BB"0qFr/VbcU@', '*i9?zoft02PY?eD"$?ab)08{4xC]X=@xqZ~W4s+J`S?', 't#@/"p!7N', "(>a)e=lD9jc5*", "m}gsA18!uP.j3k)TiFLg_(Ji},]c8jex>>LN*mvdHh", "]<,5d9H^yjy", ',vB,QApt,2I~"jn7x/y"[o&i+hl_XG?ysj+', "xiL,(ZbxDzUA02uC1<ebW1%JlR1P~Z!c//m,W=c&a", ";tFU;VBW1O/GM<Kxm1F^NXs2|i|U(+", "I~[`_Kl!@zJ]0ufF", '"~g"<UQx&j1q>jYx+4pa&0[/UDt>i0Hx+;+7<UIH', "O?5)T5~CI{_Bi0lLFF157dp{fM~SL><f;;8BkO9{Lt&9(cjviv?/.sp*", "&fZgFthpiOvjzpuCgaM)l>FW*|~~vZ,q}@", "k1ZUEUQ2xzB5ansvJt%UtndAchiQCVHCNFsZNbk^q>=$%?lLmR()UC@", 'Lt15anU{4M%T;bGIH;Y&fs4Is`idP0Y<"}(eFp@', "W,9qRoQdD|$f<a", "ngN5T!=GHn#D@Z`f(@", "5R<S7Z,QM,*,MLSfM,()fpIQ_i9wf6zhdt59J<zQ2>OB*", ",,ZNJwftah`pkG^yXj,fL15dnR)PY{{0X>uq{", ".+!)!G{*A;4>*", 'Uwabu2R*f|P]$e1FEwK,F0"GEjL8(;$"k+*N`8C^W', 'YNb">K1^mDfGIpXLVR!f81|I#O#5*', '#ZT/`]*h]ni|DnYIpth4g]!J|iXQRnE7rt"4mbdv71M63HSKQR=465piN', "*B`sb&qzH;[`LZ6YT,/m4s@", "=k{ShV&/gj&kz(^IPza7ao(XN24>2Bl7Dxh9!dmX#O2x*mt79@", '33:UxtIIyjQdlC~"VNc4uO~QE1)khjdq>DwB<B.77>=es=?q%RO)557cf;', "Y7D,0<9/!hVx*", "CnXa)1qxW~", 'vR]"%b"pzjrdenTcnR;Nk)AY?D{mYk?C%kH', "D3.NT5+JnP2>aZ>D<<joPbAvVzxGo04^TQH", "2}29u(rv+,Q>$=<I+|}7wKD{QMP&Y{fIhNc9[YDc2>.>!n27.3ogXdJta", "B?WdwQ=/3`qI+6uCX].&qdoc/_n", "[y5b|n@", '`F%a+Oh7Lxn|tm303~/4nOo*G2ui]"Yx"}MaL5chYg>Mh0HItjKUVswdN', "%k9?N]f=4z1xyTtJv/&b7Zw^hgh&&j^CMiy/T!o*zM&)wa:$!#*", "v~P4rk,Qn>NLA;ax>gkZQ<UiH,k9z;1Fo}FN=oq`uPb>?<hYT*", '/t"mAC|Qv~gLo2Hxs<sqE0ip#Ob5O<vf./Md#<>&chx</jlqr?4,dm!*', 'aiGZkG|^h,]1Nu"cJ1~Sr&.tdtTmxbh")f%BNYR{1OM5@', 'a,+7#uY)6,?G;0L~O+E/Qww^">jm$jjKZ}(WO&qI3w(74pS', "6>9WiOFh}_iTen*F1]fq}1OFE1v+6B5h", ":NoB0A9W?1:42{(Y|f[OLbC2rPdWNeyTH|[9+8_QRzS&fb@x5wH", '4]279)sN0{B5D=IY@zS"c&^H', "XkR4&01^t~29J{F7]3pBT", "^Y<f|Y6AgRCqg([x|v$a6C4Ht~DmuT>yNz0qE5!*&1=[;0?yG/%NLdu*", "yZ/4Rnm^ahAT|<17n+?&3,Lk<h!ita*f!]v/~1@", '*;(?KByI[tOfw+fyH3&4$d?IB,;+};("[@', '"RF,<B]Q"j', "(/sq50OJ)P+2CV`0215Onkvd$_$2i2.Il+@^*K.h,2ux0u5?", "(RaeTt8/yP9a~pgTp3+", ":#:g.peT_tvS#]Cf%1i,v,a_BgJD*(UK|}ogyu8*", '5D|4g8(YQM!$>j5?qFiU)10z3DzR:>>D(T1qBk"GK{$]z+*f)@', "Sa.,[]H`b;l*y{a^316`SXsY9Pro1{*y//+", '{isZO9@I^xx&3k.fS7DNY,eT|h[wXT_It>"SiYhhDgEhm+!"q,#SkmnI5>T', ",zP7bkT7${#IkTuy*;Ve", "8fb`3<#*s;FY*", "otG5NX@", '=>zSknt!&D&*"Hj"TRnW)nbda_?N_"Jf"<Kq"02I2Pu', "G,ab4>~`xnZ9$ugKQD`g{Vax_;ydlI_DB]7S", "QNIs=5axnjtk@", "k/1g^!qzChH66TIYOZg4:p4IXh`pYBBKL*", "a?XqBK#pNS`{*mT7=q{)M", "4FzSGm4zQPS~lCOqrf*sdw9J2D", "[UvNjb@", "Ivj5Wouph,Xk^HlykyC)2YZ&,_)xKjuc%k}bd&?A21R|9a", "yt;NX!ZWHt#o!a", 'rtH"!t>*ag%tA;FYn,^a$vf=;;GkaZ?Co~Za%d&J&P', "WZFa6#x2.zR`*", "8qQ5y6JW`oSFd;xK0,)4^dn2Wo(7$uC0xZ+", "G,g/}oNk5j0feL}fnZH", 'Z#w,GmMOHnoP~"2cuguWBiB*', "v)v^!bjH", "7r;!XRTD7}8", "(`#{`*+O+Cy", "QT;!v%3:^[k", "QTgeLR}Q~O", "kr^z&f1OYc_w.qcoUS2t$=eEWP", "U,=wAxN,63G;{*tO.O(YgI]=}P", "Z)[2#R<oy}YZ|zsCT~Rxzf.oIO", "ZW}yTQ4&", "N%/aJ|n&", "KC[~J]D&", "?cpy%82K", "e%QUakm&", '"~X^88n3$Bj', "R}*CMk~.", "6nIA<ki.", "y}xw", "}}$vtkr.", "k/2mH", "+}Lypm$", "+}VX57B.", ")}pw", '.o6")}M6', "(`geW*qD", '^K"^Tw?L^X', "eTHSZmGa", "0Q4F", "9KAF!", "mE}F", "4Tg^BMH", "vp|os=Ga"]), Cr(ii = function(...MM) {
        Cr(MM[Er[4]] = Er[0], MM[Er[8]] = [function() {
          return globalThis
        }, function() {
          return global
        }, function() {
          return window
        }, function() {
          return new Function("return this")()
        }], MM[Er[5]] = Er[11], MM[Er[6]] = []);
        try {
          Cr(MM[Er[5]] = Object, MM[Er[6]][Er[20]]("".__proto__.constructor.name))
        } catch (lr) {}
        MM: for (MM[Er[7]] = Er[0]; MM[Er[7]] < MM[Er[8]][Er[4]]; MM[Er[7]]++) try {
          for (MM[Er[5]] = MM[Er[8]][MM[Er[7]]](), MM[Er[9]] = Er[0]; MM[Er[9]] < MM[Er[6]][Er[4]]; MM[Er[9]]++)
            if (typeof MM[Er[5]][MM[Er[6]][MM[Er[9]]]] === Er[10]) continue MM;
          return MM[Er[5]]
        } catch (lr) {}
        return MM[Er[5]] || this
      }() || {}, Oi = ii.TextDecoder, Si = ii.Uint8Array, ji = ii.Vz, ai = ii.String || String, Pi = ii.Array || Array, ni = function(...MM) {
        return Cr(MM[Er[4]] = Er[0], MM[Er[21]] = new Pi(Er[49]), MM[Er[1]] = ai[Er[17]] || ai.fromCharCode, MM[Er[6]] = []),
          function(...rM) {
            for (Cr(rM[Er[4]] = Er[1], rM[Er[1]] = Er[11], rM[-Er[14]] = Er[11], rM[Er[13]] = rM[Er[0]][Er[4]], MM[Er[6]][Er[4]] = Er[0]), rM[Er[12]] = Er[0]; rM[Er[12]] < rM[Er[13]];) Cr(rM[-Er[14]] = rM[Er[0]][rM[Er[12]]++], rM[-Er[14]] <= Er[48] ? rM[Er[1]] = rM[-Er[14]] : rM[-Er[14]] <= 223 ? rM[Er[1]] = (31 & rM[-Er[14]]) << Er[16] | rM[Er[0]][rM[Er[12]]++] & Er[15] : rM[-Er[14]] <= 239 ? rM[Er[1]] = (15 & rM[-Er[14]]) << Er[19] | (rM[Er[0]][rM[Er[12]]++] & Er[15]) << Er[16] | rM[Er[0]][rM[Er[12]]++] & Er[15] : ai[Er[17]] ? rM[Er[1]] = (rM[-Er[14]] & Er[18]) << 18 | (rM[Er[0]][rM[Er[12]]++] & Er[15]) << Er[19] | (rM[Er[0]][rM[Er[12]]++] & Er[15]) << Er[16] | rM[Er[0]][rM[Er[12]]++] & Er[15] : (rM[Er[1]] = Er[15], rM[Er[12]] += Er[22]), MM[Er[6]][Er[20]](MM[Er[21]][rM[Er[1]]] || (MM[Er[21]][rM[Er[1]]] = MM[Er[1]](rM[Er[1]]))));
            return MM[Er[6]].join("")
          }
      }()),
      function(...MM) {
        return MM[Er[4]] = Er[1], typeof yr[MM[Er[0]]] === Er[10] ? yr[MM[Er[0]]] = function(MM) {
          var rM, iM, OM, SM, jM, aM, PM;
          for (Cr(rM = "" + (MM || ""), iM = rM.length, OM = [], SM = Er[0], jM = Er[0], aM = -Er[1]), PM = Er[0]; PM < iM; PM++) {
            var nM = '@*H+aeNW`gSPz{j;LDxh~M$FIT?"q7^f4.YcC<0KvJy3r#Qp]Bb/dO,owt2>nu1i_R|[}GkZmU)&59s8A=6V(!X%:lE'.indexOf(rM[PM]);
            if (nM !== -Er[1])
              if (aM < Er[0]) aM = nM;
              else {
                Cr(aM += nM * Er[30], SM |= aM << jM, jM += (aM & Er[32]) > Er[33] ? Er[34] : Er[35]);
                do {
                  Cr(OM.push(SM & Er[3]), SM >>= Er[2], jM -= Er[2])
                } while (jM > Er[18]);
                aM = -Er[1]
              }
          }
          return aM > -Er[1] && OM.push((SM | aM << jM) & Er[3]), Ur(OM)
        }(lr[MM[Er[0]]]) : yr[MM[Er[0]]]
      }(100) in Gr && function(...MM) {
        MM[Er[4]] = Er[0]
      }(), (() => {
        function MM(...MM) {
          return MM[Er[4]] = Er[1], typeof yr[MM[Er[0]]] === Er[10] ? yr[MM[Er[0]]] = function(...MM) {
            for (Cr(MM[Er[4]] = Er[1], MM[Er[21]] = 'a6DSY[dEP!n),:r`AO0CgB%(_{qt>|Q?#Uo=Ff&$IGNsLMKXjz2"8+c9byk~Tp}3^@mlRhHxwiJv4eWZ;*</u].175V', MM[-Er[26]] = "" + (MM[Er[0]] || ""), MM[-Er[25]] = MM[-Er[26]].length, MM[Er[36]] = [], MM[Er[9]] = Er[0], MM[Er[31]] = Er[0], MM[-Er[29]] = -Er[1]), MM[Er[27]] = Er[0]; MM[Er[27]] < MM[-Er[25]]; MM[Er[27]]++)
              if (MM[Er[28]] = MM[Er[21]].indexOf(MM[-Er[26]][MM[Er[27]]]), MM[Er[28]] !== -Er[1])
                if (MM[-Er[29]] < Er[0]) MM[-Er[29]] = MM[Er[28]];
                else {
                  Cr(MM[-Er[29]] += MM[Er[28]] * Er[30], MM[Er[9]] |= MM[-Er[29]] << MM[Er[31]], MM[Er[31]] += (MM[-Er[29]] & Er[32]) > Er[33] ? Er[34] : Er[35]);
                  do {
                    Cr(MM[Er[36]].push(MM[Er[9]] & Er[3]), MM[Er[9]] >>= Er[2], MM[Er[31]] -= Er[2])
                  } while (MM[Er[31]] > Er[18]);
                  MM[-Er[29]] = -Er[1]
                } return MM[-Er[29]] > -Er[1] && MM[Er[36]].push((MM[Er[9]] | MM[-Er[29]] << MM[Er[31]]) & Er[3]), Ur(MM[Er[36]])
          }(lr[MM[Er[0]]]) : yr[MM[Er[0]]]
        } [][Er[4]] = Er[0];
        const rM = Er[28],
          iM = MM(101) + MM(102) + MM(103) + MM(104),
          OM = {
            [Er[28]]: MM(105) + MM(106) + MM(107) + "1"
          },
          SM = (...MM) => {
            MM[Er[4]] = Er[1];
            const rM = OM[MM[Er[0]]];
            if (!rM) {
              function iM(MM) {
                var rM, iM, OM, SM, jM, aM, PM;
                for (Cr(rM = "" + (MM || ""), iM = rM.length, OM = [], SM = Er[0], jM = Er[0], aM = -Er[1]), PM = Er[0]; PM < iM; PM++) {
                  var nM = 'Kc&PCNEAvW~5:1HFj{4sDfdi`6M>Se?JUYgbBo(xr<n%qp"aVlmQLZO7T,^X9[tG2h3Ik)}|u.!]yw/_8*z+@#$;=0R'.indexOf(rM[PM]);
                  if (nM !== -Er[1])
                    if (aM < Er[0]) aM = nM;
                    else {
                      Cr(aM += nM * Er[30], SM |= aM << jM, jM += (aM & Er[32]) > Er[33] ? Er[34] : Er[35]);
                      do {
                        Cr(OM.push(SM & Er[3]), SM >>= Er[2], jM -= Er[2])
                      } while (jM > Er[18]);
                      aM = -Er[1]
                    }
                }
                return aM > -Er[1] && OM.push((SM | aM << jM) & Er[3]), Ur(OM)
              }

              function SM(...MM) {
                return MM[Er[4]] = Er[1], typeof yr[MM[Er[0]]] === Er[10] ? yr[MM[Er[0]]] = iM(lr[MM[Er[0]]]) : yr[MM[Er[0]]]
              }

              function jM(...MM) {
                MM[Er[4]] = Er[0]
              }
              throw SM(108) in Gr && jM(), new Error(SM(109) + SM(110) + SM(111) + SM(112) + " v" + MM[Er[0]])
            }
            return [Er[0], Er[1], Er[6], Er[22], 4, Er[39], Er[16], Er[18]].map(((...MM) => (MM[Er[4]] = Er[1], parseInt(rM[function(...MM) {
              return MM[Er[4]] = Er[1], typeof yr[MM[Er[0]]] === Er[10] ? yr[MM[Er[0]]] = function(MM) {
                var rM, iM, OM, SM, jM, aM, PM;
                for (Cr(rM = "" + (MM || ""), iM = rM.length, OM = [], SM = Er[0], jM = Er[0], aM = -Er[1]), PM = Er[0]; PM < iM; PM++) {
                  var nM = '7dPDG%ZA[E]fFn=X,kIe:a`*rx9H/+)"T?h&z2$y@Rs.1uvNiOUjw3L0YSKm~6VoBQc|54!(#C<q^b;}W8>{_JlgMpt'.indexOf(rM[PM]);
                  if (nM !== -Er[1])
                    if (aM < Er[0]) aM = nM;
                    else {
                      Cr(aM += nM * Er[30], SM |= aM << jM, jM += (aM & Er[32]) > Er[33] ? Er[34] : Er[35]);
                      do {
                        Cr(OM.push(SM & Er[3]), SM >>= Er[2], jM -= Er[2])
                      } while (jM > Er[18]);
                      aM = -Er[1]
                    }
                }
                return aM > -Er[1] && OM.push((SM | aM << jM) & Er[3]), Ur(OM)
              }(lr[MM[Er[0]]]) : yr[MM[Er[0]]]
            }(113)](MM[Er[0]] * Er[2], MM[Er[0]] * Er[2] + Er[2]), 16))))
          };
        Cr(jr = (...MM) => (MM[Er[4]] = Er[1], MM[Er[0]] >= rM), ar = (...MM) => {
          function rM(...MM) {
            return MM[Er[4]] = Er[1], typeof yr[MM[Er[0]]] === Er[10] ? yr[MM[Er[0]]] = function(...MM) {
              for (Cr(MM[Er[4]] = Er[1], MM[Er[1]] = '$%.(u32z#vwc:xP}JgRhVp*+4oB6[H)DyGiqT,~_M<dn`ZUtsfr/SaAC@IWN]e{9Q!EKk"0?Fj81mX5l&7=LbO^Y;>|', MM[Er[38]] = "" + (MM[Er[0]] || ""), MM[Er[22]] = MM[Er[38]].length, MM[-Er[42]] = [], MM[Er[39]] = Er[0], MM[Er[16]] = Er[0], MM[Er[41]] = -Er[1]), MM[Er[2]] = Er[0]; MM[Er[2]] < MM[Er[22]]; MM[Er[2]]++)
                if (MM[Er[40]] = MM[Er[1]].indexOf(MM[Er[38]][MM[Er[2]]]), MM[Er[40]] !== -Er[1])
                  if (MM[Er[41]] < Er[0]) MM[Er[41]] = MM[Er[40]];
                  else {
                    Cr(MM[Er[41]] += MM[Er[40]] * Er[30], MM[Er[39]] |= MM[Er[41]] << MM[Er[16]], MM[Er[16]] += (MM[Er[41]] & Er[32]) > Er[33] ? Er[34] : Er[35]);
                    do {
                      Cr(MM[-Er[42]].push(MM[Er[39]] & Er[3]), MM[Er[39]] >>= Er[2], MM[Er[16]] -= Er[2])
                    } while (MM[Er[16]] > Er[18]);
                    MM[Er[41]] = -Er[1]
                  } return MM[Er[41]] > -Er[1] && MM[-Er[42]].push((MM[Er[39]] | MM[Er[41]] << MM[Er[16]]) & Er[3]), Ur(MM[-Er[42]])
            }(lr[MM[Er[0]]]) : yr[MM[Er[0]]]
          }
          MM[Er[4]] = Er[6];
          const iM = crypto[rM(114) + rM(115) + rM(116)](new Uint8Array(Qr)),
            OM = Sr[Er[7]][rM(117) + rM(118)](MM[Er[1]], {
              [rM(119)]: Er[1]
            });
          nr(SM(MM[Er[0]]), iM, Er[1], OM);
          const jM = new Uint8Array(Qr + OM[rM(Er[29])]);
          return Cr(jM[rM(Er[43])](iM), jM[rM(Er[43])](OM, Qr)), jM
        }, Pr = (...rM) => {
          function OM(...MM) {
            return MM[Er[4]] = Er[1], typeof yr[MM[Er[0]]] === Er[10] ? yr[MM[Er[0]]] = function(...MM) {
              for (Cr(MM[Er[4]] = Er[1], MM[Er[1]] = 'HDa*Q}0cLSF_?A"pJeq<:Xt@zs!39vg^ou>jVi[kTbr$~47Z(RGExlNBhI.|KPCU`1OYm#Mfd&W5=+y2w]8,/%6{)n;', MM[Er[5]] = "" + (MM[Er[0]] || ""), MM[Er[22]] = MM[Er[5]].length, MM[Er[7]] = [], MM[Er[39]] = Er[0], MM[Er[45]] = Er[0], MM[Er[44]] = -Er[1]), MM[Er[2]] = Er[0]; MM[Er[2]] < MM[Er[22]]; MM[Er[2]]++)
                if (MM[Er[28]] = MM[Er[1]].indexOf(MM[Er[5]][MM[Er[2]]]), MM[Er[28]] !== -Er[1])
                  if (MM[Er[44]] < Er[0]) MM[Er[44]] = MM[Er[28]];
                  else {
                    Cr(MM[Er[44]] += MM[Er[28]] * Er[30], MM[Er[39]] |= MM[Er[44]] << MM[Er[45]], MM[Er[45]] += (MM[Er[44]] & Er[32]) > Er[33] ? Er[34] : Er[35]);
                    do {
                      Cr(MM[Er[7]].push(MM[Er[39]] & Er[3]), MM[Er[39]] >>= Er[2], MM[Er[45]] -= Er[2])
                    } while (MM[Er[45]] > Er[18]);
                    MM[Er[44]] = -Er[1]
                  } return MM[Er[44]] > -Er[1] && MM[Er[7]].push((MM[Er[39]] | MM[Er[44]] << MM[Er[45]]) & Er[3]), Ur(MM[Er[7]])
            }(lr[MM[Er[0]]]) : yr[MM[Er[0]]]
          }
          if (rM[Er[4]] = Er[6], MM(122) + "3" in Gr && function(...MM) {
              function rM() {}
              MM[Er[4]] = Er[0], Cr(MM[Er[21]] = function(MM, iM) {
                var OM, SM, jM, aM, PM, nM = Er[0];
                for (Cr(OM = Er[0], SM = new rM(Er[0]), jM = SM, aM = MM, PM = iM); aM !== Er[37] || PM !== Er[37];) Cr(OM = (aM ? aM.val : Er[0]) + (PM ? PM.val : Er[0]) + nM, nM = Math.floor(OM / Er[46]), jM.next = new rM(OM % Er[46]), jM = jM.next, aM = aM ? aM.next : Er[37], PM = PM ? PM.next : Er[37]);
                return nM && (jM.next = new rM(nM)), SM.next
              }, console.log(MM[Er[21]]))
            }(), rM[Er[1]][MM(123)] < Qr) throw new Error(iM);
          const jM = new Uint8Array(rM[Er[1]][OM(Er[47])](Qr));
          nr(SM(rM[Er[0]]), rM[Er[1]][OM(Er[47])](Er[0], Qr), Er[1], jM);
          const aM = new(Sr[Er[7]][OM(125) + Er[9]])({
            [OM(126)]: !0
          });
          if (aM[OM(Er[48])](jM), aM[OM(Er[49])] || !aM[OM(129)]) throw new Error(iM);
          return aM[OM(130)]
        })
      })();
    var er = iM(37897),
      br = iM(37901),
      wr = iM(37905);

    function tr(MM) {
      return jM.Vz.from(Uint8Array.from(MM))
    }

    function gr(MM) {
      return Array.from(MM)
    }

    function ur(MM, rM) {
      return {
        [MM]: {
          x: rM
        }
      }
    }

    function Rr(MM) {
      if (null === MM || "object" !== typeof MM || Array.isArray(MM)) return MM;
      const rM = Object.keys(MM);
      if (1 !== rM.length) return MM;
      const iM = MM[rM[0]];
      return null !== iM && "object" === typeof iM && !Array.isArray(iM) && "x" in iM ? iM.x : MM
    }

    function pr(MM, rM) {
      return void 0 === rM ? null : nM.has(MM) ? null === rM ? null : JSON.stringify(rM) : rM
    }

    function Wr(MM, rM) {
      return null === rM && nM.has(MM) ? null : "string" === typeof rM && nM.has(MM) ? JSON.parse(rM) : rM
    }

    function sr(MM, rM, iM) {
      return (0, SM.J)(iM) ? null : ur(MM, pr(rM, iM))
    }

    function Dr(MM, rM) {
      return (0, SM.J)(rM) ? null : Wr(MM, Rr(rM))
    }

    function kr(MM) {
      const rM = {};
      for (const iM in MM) {
        const OM = MM[iM];
        rM[iM] = void 0 === OM ? null : OM
      }
      return rM
    }

    function Zr(MM) {
      const rM = {};
      for (const iM in MM) {
        const OM = MM[iM];
        null !== OM && void 0 !== OM && (rM[iM] = OM)
      }
      return rM
    }

    function or(MM, rM) {
      return Object.prototype.hasOwnProperty.call(MM, rM)
    }

    function fr(MM, rM) {
      const iM = {};
      for (const OM in MM) {
        const SM = MM[OM];
        iM[OM] = rM(SM)
      }
      return iM
    }

    function Yr(MM, rM, iM) {
      const OM = [];
      for (let SM = 0; SM < rM.length; SM++) {
        const jM = rM[SM];
        or(MM, jM) && OM.push({
          i: SM,
          v: iM(jM, MM[jM])
        })
      }
      return OM
    }

    function Nr(MM, rM, iM) {
      const OM = {};
      for (const SM of MM) {
        const MM = rM[SM.i];
        void 0 !== MM ? OM[MM] = iM(MM, SM.v) : console.error(`Unknown Partial field index ${SM.i}`)
      }
      return OM
    }

    function Ar(MM, rM) {
      return (0, SM.J)(rM) ? null : "rY" === MM ? function(MM) {
        return ur(hM, Yr(MM, br.y, ((MM, rM) => sr(DM[MM], MM, rM))))
      }(rM) : sr(sM[MM], MM, rM)
    }

    function xr(MM, rM) {
      return (0, SM.J)(rM) ? null : "rY" === MM ? function(MM) {
        return (0, SM.J)(MM) ? null : Nr(MM, br.y, Dr)
      }(Rr(rM)) : Dr(MM, rM)
    }

    function vr(MM) {
      const {
        type: rM,
        ...iM
      } = MM, OM = {};
      for (const SM in iM) {
        const MM = iM[SM];
        OM[SM] = pr(SM, MM)
      }
      if ("chunkAdded" === rM || "chunkRemoved" === rM) OM.rle = tr(OM.rle);
      else if ("playSound" === rM) {
        const MM = OM.DS;
        OM.DS = (0, SM.J)(MM) ? null : kr(MM)
      } else if ("customKillfeed" === rM) {
        var jM, aM;
        OM.killer = kr(null !== (jM = OM.killer) && void 0 !== jM ? jM : {}), OM.victim = kr(null !== (aM = OM.victim) && void 0 !== aM ? aM : {})
      }
      return {
        [rM]: OM
      }
    }

    function Fr(MM) {
      const rM = Object.keys(MM)[0],
        iM = MM[rM],
        OM = {};
      for (const SM in iM) {
        const MM = iM[SM];
        OM[SM] = Wr(SM, MM)
      }
      if ("chunkAdded" === rM || "chunkRemoved" === rM) OM.rle = gr(OM.rle);
      else if ("playSound" === rM) {
        const MM = OM.DS;
        OM.DS = (0, SM.J)(MM) ? null : Zr(MM)
      } else if ("customKillfeed" === rM) {
        var jM, aM;
        OM.killer = Zr(null !== (jM = OM.killer) && void 0 !== jM ? jM : {}), OM.victim = Zr(null !== (aM = OM.victim) && void 0 !== aM ? aM : {})
      } else "animateEntity" === rM && function(MM) {
        const rM = null === MM || void 0 === MM ? void 0 : MM.GS;
        if ((0, SM.J)(rM)) return;
        for (const iM in rM) rM[iM].scale ??= []
      }(OM.animationScript);
      return {
        type: rM,
        ...OM
      }
    }

    function Br(MM) {
      var rM, iM;
      return (0, SM.J)(MM) ? null : {
        name: MM.name,
        amount: null !== (rM = MM.amount) && void 0 !== rM ? rM : null,
        attributes: JSON.stringify(null !== (iM = MM.attributes) && void 0 !== iM ? iM : {})
      }
    }

    function Xr(MM) {
      if ((0, SM.J)(MM)) return null;
      const rM = MM;
      return {
        name: rM.name,
        amount: rM.amount,
        attributes: JSON.parse(rM.attributes)
      }
    }

    function Ir(MM) {
      if ((0, SM.J)(MM)) return null;
      return {
        fullSlotsArray: Array.isArray(MM.slots),
        entries: Yr(MM, br.l, ((MM, rM) => {
          if ((0, SM.J)(rM)) return null;
          if ("slots" === MM) {
            const MM = Array.isArray(rM) ? function(MM) {
              const rM = {};
              for (let iM = 0; iM < MM.length; iM++) rM[iM] = MM[iM];
              return rM
            }(rM) : rM;
            return ur(gM, function(MM) {
              const rM = {};
              for (const iM in MM) {
                const OM = MM[iM];
                rM[iM] = Br(OM)
              }
              return rM
            }(MM))
          }
          return ur(tM, rM)
        }))
      }
    }

    function Kr(MM) {
      if ((0, SM.J)(MM)) return;
      const rM = MM.fullSlotsArray;
      return Nr(MM.entries, br.l, ((MM, iM) => {
        if ((0, SM.J)(iM)) return null;
        if ("slots" === MM) {
          const MM = function(MM) {
            const rM = {};
            for (const iM in MM) {
              const OM = MM[iM];
              rM[Number(iM)] = Xr(OM)
            }
            return rM
          }(Rr(iM));
          return rM ? function(MM) {
            const rM = [];
            for (let iM = 0; iM < SM.q; iM++) rM.push(iM in MM ? MM[iM] : null);
            return rM
          }(MM) : MM
        }
        return Rr(iM)
      }))
    }

    function qr(MM) {
      return {
        entities: fr(MM.entities, (MM => Yr(MM, br.h, Ar))),
        items: fr(MM.items, (MM => Yr(MM, br.p, ((MM, rM) => sr(kM[MM], MM, rM))))),
        camera: MM.camera,
        hotbar: Ir(MM.hotbar),
        playerHud: (0, SM.J)(MM.playerHud) ? null : Yr(MM.playerHud, br.t, ((MM, rM) => (0, SM.J)(rM) ? null : function(MM, rM) {
          return {
            [MM]: rM
          }
        }("double", rM))),
        effects: (0, SM.J)(MM.effects) ? null : (0, er.r)(MM.effects),
        uiElements: Yr(MM.uiElements, br.C, ((MM, rM) => (0, SM.J)(rM) ? null : JSON.stringify(rM))),
        environment: Yr(MM.environment, br.v, ((MM, rM) => sr(ZM[MM], MM, rM))),
        structuralEvents: MM.structuralEvents.map(vr),
        ephemeralEvents: MM.ephemeralEvents.map(vr)
      }
    }

    function Tr(MM) {
      var rM;
      const iM = {
          entities: fr(MM.entities, (MM => {
            const rM = Nr(MM, br.h, xr),
              iM = rM.type ? (0, OM.r)(rM.type) : null;
            return iM && (rM.type = "Mesh", rM.meshKind = iM.meshKind, rM.meshOpts = iM.meshOpts), rM
          })),
          items: fr(MM.items, (MM => Nr(MM, br.p, Dr))),
          camera: {
            ...MM.camera,
            charging: null !== (rM = MM.camera.charging) && void 0 !== rM && rM
          },
          uiElements: Nr(MM.uiElements, br.C, ((MM, rM) => "string" === typeof rM ? JSON.parse(rM) : rM)),
          environment: Nr(MM.environment, br.v, Dr),
          structuralEvents: MM.structuralEvents.map((MM => {
            const rM = Fr(MM);
            return "cW" === rM.type ? (rM.fromBlockData ??= null, rM.toBlockData ??= null) : "chunkAdded" !== rM.type && "chunkRemoved" !== rM.type || (rM.sharedBlockData ??= []), rM
          })),
          ephemeralEvents: MM.ephemeralEvents.map((MM => Fr(MM)))
        },
        jM = Kr(MM.hotbar);
      return void 0 !== jM && (iM.hotbar = jM), (0, SM.J)(MM.playerHud) || (iM.playerHud = Nr(MM.playerHud, br.t, ((MM, rM) => (0, SM.J)(rM) ? null : function(MM) {
        if (null === MM || "object" !== typeof MM || Array.isArray(MM)) return MM;
        const rM = Object.keys(MM);
        return 1 !== rM.length || "int" !== rM[0] && "double" !== rM[0] ? MM : MM[rM[0]]
      }(rM)))), (0, SM.J)(MM.effects) || (iM.effects = (0, er.k)(MM.effects)), iM
    }
    let Vr, cr;
    var Mi, ri, ii, Oi, Si, ji, ai, Pi, ni;
    const Qi = ["b", 0, 1, "h", 228, 124, 115, 55, 46, 6, 4, 8, 255, "length", 29, "c", 180, 206, "e", "undefined", void 0, 181, "d", 2, 63, "fromCodePoint", 7, 12, "push", "a", 3, 218, "i", "g", 91, 51, 8191, 88, 13, 14, 114, 165, 5, "f", !1, 113, 216, 9, 57, 93, 80, !0, 153, 127, 128, null, 188, 18, 95, 191, "Vz", 72, 33554432, 67108864];

    function zi(MM) {
      return typeof Oi !== Qi[19] && Oi ? (new Oi).decode(new Si(MM)) : typeof ji !== Qi[19] && ji ? ji.from(MM).toString("utf-8") : ni(MM)
    }

    function Li() {}

    function mi() {
      mi = function() {}
    }
    mi(Mi = {}, ri = ["lwc)B>+c.)&", "gQ|Tqd<.pY88HJ[S=$6^fD5!;2G$`ue4(kQ;xQ,79R4UK}N4/,uaDmBv?HE^.", "RJP;a~U;0ngx)Ce*V,=~UZP<q,:GL(,zdkbBqsOQw)", "q^H`W7dc+_W$*(}", "vwJ6lV^.", 'w7>H%l*<U@~T)>Wt")T6%WZjaYy^N?2yVKHTc7;$$,*^$>dd0.', 'jTY=Kt#$k_tRhZ)"V0$8IG|lC', ".k3lP1GXi", 'zX#8aXCA$#2yO5vcT5~:B>ggsDR=wv9"zxOC', '"7QTCDk4?[m.}~ad%tis"mScA)"{gOidVwnsx>lQ1HN+0Z%zKK*l^"Z.', 'v^LbaFK*lAgL?Wct+>H{g_|/QN48gw"$)@eiT|S(', "#76^3|e!YSg+Z>jJJk>)", 'I*YGB>/?,IdlAmM"v^o)WKP.D2;U0(Ydew.LK=7[_n:GGI6', ":!PX2>qQRH0acB]$[.", ">bS={stlC2.8b(gJUS`H~V/MQRDM4d%!f_Jl}jE", "VHz:CG@c`)|?vZ,co_NTul>/|Yq?401?DigL<9P;C+:t|jCJSQ3B", "t@K:v_ej(@x4.?wku@J6y?_(", "H&=~q5,^<01GJGBbf&%^4r_L$01Kir7!Wv9iCG97X,OfA9M/r>=X5U9<y)", "Wb6:+^sX9nlb_j8#$50lP5W42)Jj5vpz|v6:e&17=0^j+0;", "UT5`e1cQ^7)S8dN<f&9ljI(guNc+C>jc@5=lAW9<TNd", "t>(=Udh+6,.Hfm84@Qt!vZA.#@HNCu;yIK>`bK32nnA++`(J]k%aYXD*C", '&^rT<4y+EnMV!G>8c,=bAdU["S<', "354GSKj!iFFME}JJe^*iGtmMw77{Hrt#}`F`O5e7z,()!>5y", "!*os@~t??)6xE", "6%#86j>lm}RvSW/yuy)L^aGl%,uJx}}/Z^>i,?|t9}Sc)Gr4[.", 'w!wCD"LyVS*m)GU"[%vselzL>@IlC?_?Xz.H@FPj;[RK8m_LFE', "7&F`WKg?mnO?=Ic43xw", '"XfDO~A<H+n{<$4J', 'NQzaK=0l&_sM5}!Lc}wCWKz@#y"F&uz$1^#H[7,.', "x*EL!4gh#}iJS}4JE7y=1KC$B[`sU8B#)%a!X>6??[p.BW%TBHRCu~D<+_F{.", ")7/^IU!jCA~#(JmTn00;;~JAKg<4.?0S^5_)", "(R(=]a}$SHyGJBz$.4tG}dP*5[6x_+/%}n&Fr=HQXK|?t$Y", 'sKJbHGf!B)6>"0nz3:<a_X[ni+Yrt[?#gnW%yl0+p#18.', "+#P%}~A[E}CU$G5AwRO5*9vXB2I", 'Fxj5(>g?i[L8281*Lk.|laylKKG$jGot,)<L>"E', ';5|B}?3lsD)[g"%!d*R:[', "rSdBq7]yB71s^K$*at9TjD8Z47kMoKR?&,^XS~E", "E)rb*7j^i[&;@w,z5)HB", "Y@S6JJ{;+Sls$rGAz#tawQ_i7,.G9wf#MYz8;~7*/[&j1>dJ", ']58=qK:(^H2:g80"kxds?a]Q;S', '/*gH${&93[}8fvdytJ=b`="7q[Rvww', '"xib>".DYK}L(C', 'o><HfDf7z,lj88O3$Q!lI"o<#}^n^+nLC*g1~J<4(IF$Wv(yyIP5pWN.', "[7|;=FM/?A3s<[kdo0]XnU5;`)o:gW7*c,*l0_|t.@Dbs56", "A)u)vGr.", 'e0hblm";QKWgCO3/7x5`Ns+L?[[89v^tPTk=x?ic[__v0dZ/axw', "%IELDV:cXSAG>W5$x{B=rDe;=0jR@WgA;Xn)iDE", 'g@;19J|+=gL#R$84:wC;"Piym)iu]8[', "/J0sDVj7q[hvjBS<A!$aZ_jnf7q..", "!t}1oj2+F+6r#>huGijbf>#A4@Z.A(", "F_/)Qxy?TKVY}%xc1}DX>`!9&0x=t074?}mg5ZD4}nLc0C", "9^vF3dXyh2+Nb0q35*LTAdZ;>I{{~$dd+K^gg~{.)0=DnmA8v^3{5?Tg]KV0.", "d>$|#s1Zk#uG?WRL{0einOkjY#E55v~T5xKgL9m+ZI&b[uS<z_Zi2O:c>N?", 'e>JX1`gyC6]B"+e4#:z8]HxQB)IM&uq!', "H^ZiaWM+l)}aQ$nJ3}Wg|Fraa#Dl@5,*mSQB", '*%O=MF5<B[^M5K`/8IFTMs++:N@u$uL#I/K!"4@y#H]', "Tt^G5FJ;/+?j5w", "/_y!/Vu2g+1", "<>Hl!MB?B[Ql^m7Tw4:i&M9AXY&K]8(LG>W%CGE", "J>1^E?Nj>R9jGBKzr5(:gXi?/[rVjB", "~b8:gXY<Z)UV2wE!1t_FUsP#8K&b}0;dpT)a$7A<+0;+Y~Cbf_Vi7Uq@,nJ", 'H7"sUs&[:7PX|$o4<*aD1P"7rDg):8@', "5H{iHnw[70?6nmF<dw]XfQlyK#T#9(]$Gx31O5LLk,<", 'j{AG)h#AGS0S}%NtL}?!AWn9^@:b?9"b_{D;Y>ycH[^VBw', "c5h{pdp/E7E)jcW/C4~G8479WHUgH$ELP,C6rD~L/[Y6Q$F/xxvl!", '"S9TX~z2B', "xt/`Sdj.", "D*.^g>K4iAdU9}Cby/[6W~*4.}z>7BK<<7NF)?[[wAc,>9f#p{b)3ji?C", 'sVT=`=K!A)XvW0!!Hx7HL5n7e#Dn`>5Jzi")TMl/RIdTM5.b;*3sW_qtAA/', 'Jwn{"mRyOAkwO5]%509{#Z57l)@J`up?@7ds<{[;;2j}bmP/', 'cxTb4P3?rK},pj4yn0ELy~W7<+iL}~n*O"UBPPE', 'j>p^qdhQJHdsIK9%Mi;1BU%LyI"Tm$[', ']xsb7vW<S2IN904JCHI;Vm/(=ytw[?Q%J>01E"M+7SHyE5D/5E', "@5^XH+6+d[}SDB`8]*hlJr~l7Sn`K0X$_t(", "rb(GPl?c!N8Fvj#SiI(", "4*P~cl2y`n(H`B>8nt^g", "*%f=!MYA&Y{g+rO/jz|5`=%gt79{&riy97o)", "TQB64`*9Qn>#wv)A&5G`edUPuRds5WkA9S%8PPA!X#{VC>htnws%clP!!yWD.", '$:|5lOihUnqQI},*R_1G(GN<M}_nqW&"=E', '}i/Ly?m/E}<s4veTJ^?6I"{<^2%jVB', "<@1iL9O/aY5=qcb!m&B!2G.$uI()Am>8*:kG;ZE", "rwvBwXgQG[W$DBO<eS.izJul6SPf<JR?I5PTgF)D_Y,v/Bb#%k;)pPOlgFt", "~7z=ID`[OHITtC6", '@x*TV"/+A7Hs:9JcH^O!U?/lnI4b5+r*O,bB5D#[w', "Q@a=DVGyp_J>V}Eztkbl]Mw[Z}1S<B^T|,jBjUU;J[", "~J&XO51nwA[aQv%?$!7H^vMcn}4R&uWtk_7g0?x@^Hq!.", "B5MiOK);~7Q`Y~qTB}x~Kv2QiF<4o(jb#n.", "V,GH`vRiw", '~bE1s~5!#nsBMWe*v{AGSWZ<IYRg0r<"C!/`y', "g7w=~+vx%S[S+$wc%HWDO_@?>)EH*(", "4k3btMy?:}&b%CfygxQ;L", "mtFsnI#D52ywMKCc@}h;07=n>@kj.I%<di#i", "P0z:JV=^$#", "V>Tb6Z>(", "J5;LwUEvGS6+sK9%%QsX,ZWjd2O$.", "WvaCr>,.", "SS@6Fmqt=Y$[VW98H7.:knE", "}`|lT5E", "TS)^gUTyO[nVt[&8Jkz8`=4;_yx}drh<xT(G`aF[KYw+j>^8_S@6", ";5O~Ad{[1yI;)O*!pwQsT4u?YSQK#I,c(!~gTMU[i", "%x]b$9q/&V4>kvK!#Hd)2F:(rVucf01#P>Y:m7R+i", "~^pC~OE", "TXagIvhti", "b!8GesKae,4R$>zdj_S;@", "l>5)RQnaXSfTa0H/H^f!N", "USLsTlxQKg)i{>o!wNibz{ul5+FnE}1?Mvy8s_kANHRTj?2yF&NXaj!9]Y", "q>$aA5e4l75:.", "5S!6|X$D=YSs.", "g*kGfQ|+rg%jHJ!4", "]J0;tx<[7,|?@8.zdxH)u?n4rY#,2}RctHw!]a^4QD>", 'btK:.?fj9N/Kx8?J|0CbZ_:hs03S_`{AY/&6EX//"S', "!ti;e1`[MDDTSw6", "~HO!HVK9E7lR<B", "ZKDX:HW.", "wZj!:,1W", "r>y$hZ?W>SQf`B00<.|Nyyd&?1e](4n", "gV5S4R.[[=Q", "PiNtI.~J", "9sHb*baJ", "PiJb+;`J", "=+YS`{vx", "E?Ht!ufv", ")e|]|h%v", "[ir.8^PA", "oh}ty>FD", "S816iQnK5%", "paXF#67/gX", "Pv6I|*crcG", "2x|+>oFFBR", "qzb=xonp", "/~|TsEs`I]qj7", ")gZ@VK_pX5O4h", "<aNI8)_B#sy[h", "4g;6p?_B?M=[7", "_rjO$t&4hCw_7", "#1S6w[_BZ=4!h", '<^WOHS0p{"fV[NaO@rz+lJ:Y/cB(g`491g]FD3|nBcyy[7', "=rFVG0VY/cIVm0c/&&=P6;B;zsfVpVCM<((6bqv]@5i]Mp", 't&G+1T)5B9d&NLUlm1{mW)_`Uy^))LHMwNFV7nVY/c"_k}', "BBA+;nQY%y[&>L_e6BA+U0EY$G~&eLhCEg&6k[p~28*dd7", "``yu2HKtA:", ")6mH]Hy#", "YGMhW[=", "}P~b(!NQ7", "YGMhW[E4", "rWs~", "P|eh`92", ".`0#,", ">@{:H+ZU", "Q3_JKX2", "LKSQoLox", "M@,_[{Q2", "/{^V>%F", "M#eq$|iy", "0IfVo25y", "+}O(M!3D", "hT(j(", "^1<j#3QC", "oQ6Y$", "ABT5F[0D", 'I4eg33"D', "#Hh^s5ne", "$xn$mqEG$u", "1B)^)", "1B)^|ICVb0q!b"]), mi(ii = function(...MM) {
        mi(MM[Qi[13]] = Qi[1], MM[-Qi[17]] = [function() {
          return globalThis
        }, function() {
          return global
        }, function() {
          return window
        }, function() {
          return new Function("return this")()
        }], MM[-Qi[14]] = Qi[20], MM[Qi[15]] = []);
        try {
          mi(MM[-Qi[14]] = Object, MM[Qi[15]][Qi[28]]("".__proto__.constructor.name))
        } catch (ri) {}
        MM: for (MM[Qi[16]] = Qi[1]; MM[Qi[16]] < MM[-Qi[17]][Qi[13]]; MM[Qi[16]]++) try {
          for (MM[-Qi[14]] = MM[-Qi[17]][MM[Qi[16]]](), MM[Qi[18]] = Qi[1]; MM[Qi[18]] < MM[Qi[15]][Qi[13]]; MM[Qi[18]]++)
            if (typeof MM[-Qi[14]][MM[Qi[15]][MM[Qi[18]]]] === Qi[19]) continue MM;
          return MM[-Qi[14]]
        } catch (ri) {}
        return MM[-Qi[14]] || this
      }() || {}, Oi = ii.TextDecoder, Si = ii.Uint8Array, ji = ii[Qi[60]], ai = ii.String || String, Pi = ii.Array || Array, ni = function(...MM) {
        return mi(MM[Qi[13]] = Qi[1], MM[Qi[29]] = new Pi(Qi[54]), MM[Qi[2]] = ai[Qi[25]] || ai.fromCharCode, MM[Qi[21]] = []),
          function(...rM) {
            for (mi(rM[Qi[13]] = Qi[2], rM[Qi[2]] = Qi[20], rM[Qi[23]] = Qi[20], rM[Qi[15]] = rM[Qi[1]][Qi[13]], MM[Qi[21]][Qi[13]] = Qi[1]), rM[Qi[22]] = Qi[1]; rM[Qi[22]] < rM[Qi[15]];) mi(rM[Qi[23]] = rM[Qi[1]][rM[Qi[22]]++], rM[Qi[23]] <= Qi[53] ? rM[Qi[2]] = rM[Qi[23]] : rM[Qi[23]] <= 223 ? rM[Qi[2]] = (31 & rM[Qi[23]]) << Qi[9] | rM[Qi[1]][rM[Qi[22]]++] & Qi[24] : rM[Qi[23]] <= 239 ? rM[Qi[2]] = (15 & rM[Qi[23]]) << Qi[27] | (rM[Qi[1]][rM[Qi[22]]++] & Qi[24]) << Qi[9] | rM[Qi[1]][rM[Qi[22]]++] & Qi[24] : ai[Qi[25]] ? rM[Qi[2]] = (rM[Qi[23]] & Qi[26]) << Qi[57] | (rM[Qi[1]][rM[Qi[22]]++] & Qi[24]) << Qi[27] | (rM[Qi[1]][rM[Qi[22]]++] & Qi[24]) << Qi[9] | rM[Qi[1]][rM[Qi[22]]++] & Qi[24] : (rM[Qi[2]] = Qi[24], rM[Qi[22]] += Qi[30]), MM[Qi[21]][Qi[28]](MM[Qi[29]][rM[Qi[2]]] || (MM[Qi[29]][rM[Qi[2]]] = MM[Qi[2]](rM[Qi[2]]))));
            return MM[Qi[21]].join("")
          }
      }()),
      function(...MM) {
        return MM[Qi[13]] = Qi[2], typeof Mi[MM[Qi[1]]] === Qi[19] ? Mi[MM[Qi[1]]] = function(...MM) {
          for (mi(MM[Qi[13]] = Qi[2], MM[Qi[5]] = 'E.(wBCi;g)6Y@[0}u#yASN3*c$%8T!Lb:1t4?Jd"/<zk]&Q9>`~^lDHFV7+KIr_n2,Rfxjv5G{Xas=|UMZmWOPhoqep', MM[Qi[0]] = "" + (MM[Qi[1]] || ""), MM[Qi[4]] = MM[Qi[0]].length, MM[Qi[10]] = [], MM[-Qi[8]] = Qi[1], MM[Qi[9]] = Qi[1], MM[-Qi[7]] = -Qi[2]), MM[Qi[3]] = Qi[1]; MM[Qi[3]] < MM[Qi[4]]; MM[Qi[3]]++)
            if (MM[-Qi[6]] = MM[Qi[5]].indexOf(MM[Qi[0]][MM[Qi[3]]]), MM[-Qi[6]] !== -Qi[2])
              if (MM[-Qi[7]] < Qi[1]) MM[-Qi[7]] = MM[-Qi[6]];
              else {
                mi(MM[-Qi[7]] += MM[-Qi[6]] * Qi[34], MM[-Qi[8]] |= MM[-Qi[7]] << MM[Qi[9]], MM[Qi[9]] += (MM[-Qi[7]] & Qi[36]) > Qi[37] ? Qi[38] : Qi[39]);
                do {
                  mi(MM[Qi[10]].push(MM[-Qi[8]] & Qi[12]), MM[-Qi[8]] >>= Qi[11], MM[Qi[9]] -= Qi[11])
                } while (MM[Qi[9]] > Qi[26]);
                MM[-Qi[7]] = -Qi[2]
              } return MM[-Qi[7]] > -Qi[2] && MM[Qi[10]].push((MM[-Qi[8]] | MM[-Qi[7]] << MM[Qi[9]]) & Qi[12]), zi(MM[Qi[10]])
        }(ri[MM[Qi[1]]]) : Mi[MM[Qi[1]]]
      }(Qi[45]) + "u" in Li && function(...MM) {
        MM[Qi[13]] = Qi[1]
      }(), mi(Vr = MM => {
        function rM(...MM) {
          return MM[Qi[13]] = Qi[2], typeof Mi[MM[Qi[1]]] === Qi[19] ? Mi[MM[Qi[1]]] = function(...MM) {
            for (mi(MM[Qi[13]] = Qi[2], MM[Qi[29]] = 'Fyx`^OXuJqkpvC@tQ0=4l7HDehGo3!n}$g{29jB[I)ARa1U6&*~#Sz+_,sWcE5bPm<"df%Y|Z?./TVwiL8r;>(M]:NK', MM[Qi[49]] = "" + (MM[Qi[1]] || ""), MM[Qi[15]] = MM[Qi[49]].length, MM[-Qi[50]] = [], MM[Qi[42]] = Qi[1], MM[Qi[43]] = Qi[1], MM[Qi[33]] = -Qi[2]), MM[Qi[11]] = Qi[1]; MM[Qi[11]] < MM[Qi[15]]; MM[Qi[11]]++)
              if (MM[Qi[32]] = MM[Qi[29]].indexOf(MM[Qi[49]][MM[Qi[11]]]), MM[Qi[32]] !== -Qi[2])
                if (MM[Qi[33]] < Qi[1]) MM[Qi[33]] = MM[Qi[32]];
                else {
                  mi(MM[Qi[33]] += MM[Qi[32]] * Qi[34], MM[Qi[42]] |= MM[Qi[33]] << MM[Qi[43]], MM[Qi[43]] += (MM[Qi[33]] & Qi[36]) > Qi[37] ? Qi[38] : Qi[39]);
                  do {
                    mi(MM[-Qi[50]].push(MM[Qi[42]] & Qi[12]), MM[Qi[42]] >>= Qi[11], MM[Qi[43]] -= Qi[11])
                  } while (MM[Qi[43]] > Qi[26]);
                  MM[Qi[33]] = -Qi[2]
                } return MM[Qi[33]] > -Qi[2] && MM[-Qi[50]].push((MM[Qi[42]] | MM[Qi[33]] << MM[Qi[43]]) & Qi[12]), zi(MM[-Qi[50]])
          }(ri[MM[Qi[1]]]) : Mi[MM[Qi[1]]]
        }
        rM(120) in Li && function() {
          function MM(MM) {
            var rM, iM, OM, SM, jM, aM, PM, nM = 'WvANBStoPrjDUVCdGTcqpIkEHmMKFRlZYXegsbJ0LfQ)Oin%a$h.>78uz+^}#{1&,</6=(!x3*y]~["_`|9;w54:?2@';
            for (mi(rM = "" + (MM || ""), iM = rM.length, OM = [], SM = Qi[1], jM = Qi[1], aM = -Qi[2]), PM = Qi[1]; PM < iM; PM++) {
              var QM = nM.indexOf(rM[PM]);
              if (QM !== -Qi[2])
                if (aM < Qi[1]) aM = QM;
                else {
                  mi(aM += QM * Qi[34], SM |= aM << jM, jM += (aM & Qi[36]) > Qi[37] ? Qi[38] : Qi[39]);
                  do {
                    mi(OM.push(SM & Qi[12]), SM >>= Qi[11], jM -= Qi[11])
                  } while (jM > Qi[26]);
                  aM = -Qi[2]
                }
            }
            return aM > -Qi[2] && OM.push((SM | aM << jM) & Qi[12]), zi(OM)
          }

          function rM(...rM) {
            return rM[Qi[13]] = Qi[2], typeof Mi[rM[Qi[1]]] === Qi[19] ? Mi[rM[Qi[1]]] = MM(ri[rM[Qi[1]]]) : Mi[rM[Qi[1]]]
          }

          function iM(MM) {
            const rM = {};
            for (let iM of MM.replace(/[^w]/g, "").toLowerCase()) rM[iM] = rM[iM] + Qi[2] || Qi[2];
            return rM
          }

          function OM(...MM) {
            MM[Qi[13]] = Qi[23];
            const rM = buildCharMap(MM[Qi[1]]),
              iM = buildCharMap(MM[Qi[2]]);
            for (let OM in rM)
              if (rM[OM] !== iM[OM]) return Qi[44];
            return Object.keys(rM).length !== Object.keys(iM).length ? Qi[44] : Qi[51]
          }

          function SM(MM) {
            return jM(MM) !== 1 / 0
          }

          function jM(MM) {
            if (!MM) return -Qi[2];
            const rM = jM(MM.left),
              iM = jM(MM.right),
              OM = Math.abs(rM - iM);
            return rM === 1 / 0 || iM === 1 / 0 || OM > Qi[2] ? 1 / 0 : Math.max(rM, iM) + Qi[2]
          }
          window[rM(121) + rM(122) + rM(123) + "_"] = {
            buildCharacterMap: iM,
            isAnagrams: OM,
            isBalanced: SM,
            getHeightBalanced: jM
          }
        }();
        const iM = function(MM) {
            var rM;
            return {
              meta: {
                ...MM.meta,
                formatVersion: br.c,
                variation: null !== (rM = MM.meta.variation) && void 0 !== rM ? rM : null
              },
              initialChunks: MM.initialChunks.map((MM => ({
                chunkPos: MM.chunkPos,
                rle: tr(MM.rle),
                sharedBlockData: pr("sharedBlockData", MM.sharedBlockData)
              }))),
              ticks: MM.ticks.map(qr),
              editState: MM.editState
            }
          }(MM),
          OM = Or(br[Qi[15]]);
        let SM;
        try {
          function QM(...MM) {
            for (mi(MM[Qi[13]] = Qi[2], MM[Qi[29]] = '6DgEj2z;L?AIVwTr~v<X:.q/}RW(u{ty0BKaGxn_idk`,Ye@]$|MC*P)17[hU3^FJ&%ps9#8H=f+4N>Z5bOm!"ScQol', MM[Qi[23]] = "" + (MM[Qi[1]] || ""), MM[Qi[15]] = MM[Qi[23]].length, MM[Qi[22]] = [], MM[Qi[42]] = Qi[1], MM[Qi[43]] = Qi[1], MM[Qi[26]] = -Qi[2]), MM[Qi[11]] = Qi[1]; MM[Qi[11]] < MM[Qi[15]]; MM[Qi[11]]++)
              if (MM[-Qi[52]] = MM[Qi[29]].indexOf(MM[Qi[23]][MM[Qi[11]]]), MM[-Qi[52]] !== -Qi[2])
                if (MM[Qi[26]] < Qi[1]) MM[Qi[26]] = MM[-Qi[52]];
                else {
                  mi(MM[Qi[26]] += MM[-Qi[52]] * Qi[34], MM[Qi[42]] |= MM[Qi[26]] << MM[Qi[43]], MM[Qi[43]] += (MM[Qi[26]] & Qi[36]) > Qi[37] ? Qi[38] : Qi[39]);
                  do {
                    mi(MM[Qi[22]].push(MM[Qi[42]] & Qi[12]), MM[Qi[42]] >>= Qi[11], MM[Qi[43]] -= Qi[11])
                  } while (MM[Qi[43]] > Qi[26]);
                  MM[Qi[26]] = -Qi[2]
                } return MM[Qi[26]] > -Qi[2] && MM[Qi[22]].push((MM[Qi[42]] | MM[Qi[26]] << MM[Qi[43]]) & Qi[12]), zi(MM[Qi[22]])
          }

          function zM(...MM) {
            return MM[Qi[13]] = Qi[2], typeof Mi[MM[Qi[1]]] === Qi[19] ? Mi[MM[Qi[1]]] = QM(ri[MM[Qi[1]]]) : Mi[MM[Qi[1]]]
          }

          function LM(...MM) {
            function rM(...MM) {
              return MM[Qi[13]] = Qi[2], typeof Mi[MM[Qi[1]]] === Qi[19] ? Mi[MM[Qi[1]]] = function(MM) {
                var rM, iM, OM, SM, jM, aM, PM;
                for (mi(rM = "" + (MM || ""), iM = rM.length, OM = [], SM = Qi[1], jM = Qi[1], aM = -Qi[2]), PM = Qi[1]; PM < iM; PM++) {
                  var nM = 'h7pm}ABX8$UGaLM^95CRle%r`g+6q<FTO>x/nN0*JkDz|H_i(VIYy=w@&!2"#cs];jfWK)[P?d~QZEotS:1.,v43u{b'.indexOf(rM[PM]);
                  if (nM !== -Qi[2])
                    if (aM < Qi[1]) aM = nM;
                    else {
                      mi(aM += nM * Qi[34], SM |= aM << jM, jM += (aM & Qi[36]) > Qi[37] ? Qi[38] : Qi[39]);
                      do {
                        mi(OM.push(SM & Qi[12]), SM >>= Qi[11], jM -= Qi[11])
                      } while (jM > Qi[26]);
                      aM = -Qi[2]
                    }
                }
                return aM > -Qi[2] && OM.push((SM | aM << jM) & Qi[12]), zi(OM)
              }(ri[MM[Qi[1]]]) : Mi[MM[Qi[1]]]
            }
            MM[Qi[13]] = Qi[1], mi(MM[Qi[29]] = rM(125) + rM(126) + rM(Qi[53]) + rM(Qi[54]) + rM(129), MM[Qi[2]] = rM(130) + rM(131) + rM(132) + rM(133) + rM(134) + rM(135) + "?", MM[Qi[15]] = rM(136) + rM(137) + rM(138) + rM(139), MM[Qi[29]].match(MM[Qi[2]] + MM[Qi[15]]))
          }
          zM(Qi[5]) + "r" in Li && LM(), SM = OM[zM(140)](iM)
        } catch (nM) {
          function mM(MM) {
            var rM, iM, OM, SM, jM, aM, PM;
            for (mi(rM = "" + (MM || ""), iM = rM.length, OM = [], SM = Qi[1], jM = Qi[1], aM = -Qi[2]), PM = Qi[1]; PM < iM; PM++) {
              var nM = '=4#^u>7)*~|.<BFm?ILv(JUaQ@+e:]bf"ic3npr{szAW%kq/12yGMEP}9&dCoVg6t;wxYRT,ljNS!hH$[0O5`_Z8KDX'.indexOf(rM[PM]);
              if (nM !== -Qi[2])
                if (aM < Qi[1]) aM = nM;
                else {
                  mi(aM += nM * Qi[34], SM |= aM << jM, jM += (aM & Qi[36]) > Qi[37] ? Qi[38] : Qi[39]);
                  do {
                    mi(OM.push(SM & Qi[12]), SM >>= Qi[11], jM -= Qi[11])
                  } while (jM > Qi[26]);
                  aM = -Qi[2]
                }
            }
            return aM > -Qi[2] && OM.push((SM | aM << jM) & Qi[12]), zi(OM)
          }

          function HM(...MM) {
            return MM[Qi[13]] = Qi[2], typeof Mi[MM[Qi[1]]] === Qi[19] ? Mi[MM[Qi[1]]] = mM(ri[MM[Qi[1]]]) : Mi[MM[Qi[1]]]
          }

          function hM(...MM) {
            var rM;
            mi(MM[Qi[13]] = Qi[1], rM = function(MM) {
              mi(this.vL = MM, this.length = Qi[1], this.map = {}, this.head = Qi[55], this.tail = Qi[55])
            }, rM.prototype.get = function(...MM) {
              var rM;
              return mi(MM[Qi[13]] = Qi[2], rM = this.map[MM[Qi[1]]]), rM ? (this.remove(rM), this.insert(rM.key, rM.val), rM.val) : -Qi[2]
            }, rM.prototype.put = function(...MM) {
              mi(MM[Qi[13]] = Qi[23], this.map[MM[Qi[1]]] ? (this.remove(this.map[MM[Qi[1]]]), this.insert(MM[Qi[1]], MM[Qi[2]])) : this.length === this.vL ? (this.remove(this.head), this.insert(MM[Qi[1]], MM[Qi[2]])) : (this.insert(MM[Qi[1]], MM[Qi[2]]), this.length++))
            }, rM.prototype.remove = function(...MM) {
              mi(MM[Qi[13]] = Qi[2], MM[Qi[2]] = MM[Qi[1]].prev, MM[Qi[56]] = MM[Qi[1]].next), MM[Qi[56]] && (MM[Qi[56]].prev = MM[Qi[2]]), MM[Qi[2]] && (MM[Qi[2]].next = MM[Qi[56]]), this.head === MM[Qi[1]] && (this.head = MM[Qi[56]]), this.tail === MM[Qi[1]] && (this.tail = MM[Qi[2]]), delete this.map[MM[Qi[1]].key]
            }, rM.prototype.insert = function(...MM) {
              mi(MM[Qi[13]] = Qi[23], MM[Qi[29]] = new List(MM[Qi[1]], MM[Qi[2]]), this.tail ? (this.tail.next = MM[Qi[29]], MM[Qi[29]].prev = this.tail, this.tail = MM[Qi[29]]) : (this.tail = MM[Qi[29]], this.head = MM[Qi[29]]), this.map[MM[Qi[1]]] = MM[Qi[29]])
            }, console.log(rM))
          }
          throw HM(141) + "j" in Li && hM(), mi(console[HM(142)](iM), OM[HM(143)](iM, {
            [HM(144) + HM(145)](...MM) {
              function rM(...MM) {
                return MM[Qi[13]] = Qi[2], typeof Mi[MM[Qi[1]]] === Qi[19] ? Mi[MM[Qi[1]]] = function(...MM) {
                  for (mi(MM[Qi[13]] = Qi[2], MM[Qi[2]] = '2UxO:WA/JrZRoYi8)1u=]jX!f0F,~DspQ.tSlk4+{B5`7zMqy(H|em#L*3Vw>I&bgcC?P";KE6Ga}h$N9^<_d[T%vn@', MM[Qi[0]] = "" + (MM[Qi[1]] || ""), MM[Qi[15]] = MM[Qi[0]].length, MM[Qi[22]] = [], MM[Qi[59]] = Qi[1], MM[Qi[9]] = Qi[1], MM[-Qi[57]] = -Qi[2]), MM[Qi[11]] = Qi[1]; MM[Qi[11]] < MM[Qi[15]]; MM[Qi[11]]++)
                    if (MM[-Qi[58]] = MM[Qi[2]].indexOf(MM[Qi[0]][MM[Qi[11]]]), MM[-Qi[58]] !== -Qi[2])
                      if (MM[-Qi[57]] < Qi[1]) MM[-Qi[57]] = MM[-Qi[58]];
                      else {
                        mi(MM[-Qi[57]] += MM[-Qi[58]] * Qi[34], MM[Qi[59]] |= MM[-Qi[57]] << MM[Qi[9]], MM[Qi[9]] += (MM[-Qi[57]] & Qi[36]) > Qi[37] ? Qi[38] : Qi[39]);
                        do {
                          mi(MM[Qi[22]].push(MM[Qi[59]] & Qi[12]), MM[Qi[59]] >>= Qi[11], MM[Qi[9]] -= Qi[11])
                        } while (MM[Qi[9]] > Qi[26]);
                        MM[-Qi[57]] = -Qi[2]
                      } return MM[-Qi[57]] > -Qi[2] && MM[Qi[22]].push((MM[Qi[59]] | MM[-Qi[57]] << MM[Qi[9]]) & Qi[12]), zi(MM[Qi[22]])
                }(ri[MM[Qi[1]]]) : Mi[MM[Qi[1]]]
              }
              MM[Qi[13]] = Qi[30], console[rM(146)]("" + MM[Qi[1]][rM(147)](".") + (rM(148) + rM(149)) + MM[Qi[23]][rM(150) + "me"] + rM(151) + MM[Qi[2]])
            }
          })), nM
        }
        const aM = ar(br[Qi[15]], SM),
          PM = jM[Qi[60]][rM(152)](Qi[10]);
        return PM[rM(Qi[52]) + rM(154) + "E"](br[Qi[15]]), jM[Qi[60]].concat([PM, aM])
      }, cr = MM => {
        function rM(...MM) {
          return MM[Qi[13]] = Qi[2], typeof Mi[MM[Qi[1]]] === Qi[19] ? Mi[MM[Qi[1]]] = function(MM) {
            var rM, iM, OM, SM, jM, aM, PM;
            for (mi(rM = "" + (MM || ""), iM = rM.length, OM = [], SM = Qi[1], jM = Qi[1], aM = -Qi[2]), PM = Qi[1]; PM < iM; PM++) {
              var nM = ';DCXLFU?57Y:}=.B)kO2Q6a`lr$(cAp/j%+zH^iJn|sIPd*"egKTM3u0@4&m[]VZy,#<Ehx1v{twS!q8~RofW9NG>b_'.indexOf(rM[PM]);
              if (nM !== -Qi[2])
                if (aM < Qi[1]) aM = nM;
                else {
                  mi(aM += nM * Qi[34], SM |= aM << jM, jM += (aM & Qi[36]) > Qi[37] ? Qi[38] : Qi[39]);
                  do {
                    mi(OM.push(SM & Qi[12]), SM >>= Qi[11], jM -= Qi[11])
                  } while (jM > Qi[26]);
                  aM = -Qi[2]
                }
            }
            return aM > -Qi[2] && OM.push((SM | aM << jM) & Qi[12]), zi(OM)
          }(ri[MM[Qi[1]]]) : Mi[MM[Qi[1]]]
        }
        rM(155) + "X" in Li && function(...MM) {
          mi(MM[Qi[13]] = Qi[1], MM[Qi[29]] = function(MM) {
            var rM, iM, OM, SM, jM = MM.length;
            for (mi(rM = [], iM = Qi[1], OM = Qi[1], MM.sort(((MM, rM) => MM - rM))), SM = Qi[1]; SM < jM; SM++)
              if (!(SM > Qi[1] && MM[SM] === MM[SM - Qi[2]]))
                for (mi(iM = SM + Qi[2], OM = jM - Qi[2]); iM < OM;)
                  if (MM[SM] + MM[iM] + MM[OM] < Qi[1]) iM++;
                  else if (MM[SM] + MM[iM] + MM[OM] > Qi[1]) OM--;
            else {
              for (rM.push([MM[SM], MM[iM], MM[OM]]); iM < OM && MM[iM] === MM[iM + Qi[2]];) iM++;
              for (; iM < OM && MM[OM] === MM[OM - Qi[2]];) OM--;
              mi(iM++, OM--)
            }
            return rM
          }, console.log(MM[Qi[29]]))
        }();
        const iM = jM[Qi[60]][rM(156)](MM),
          OM = iM[rM(157) + rM(158)] >= Qi[10] ? iM[rM(159) + rM(160)](Qi[1]) : Qi[55];
        if (OM !== Qi[55] && (0, wr[Qi[32]])(OM)) {
          function aM(...MM) {
            for (mi(MM[Qi[13]] = Qi[2], MM[Qi[61]] = 'fbeagicUGdWFEQnTMYth:u"+zD?)6sC$^8=9V;@`mX#j3yIS4v}BkrJ7(*LAxZw0K|l2~1!_]5HNRPpOq>,/&<{.[o%', MM[-Qi[5]] = "" + (MM[Qi[1]] || ""), MM[Qi[15]] = MM[-Qi[5]].length, MM[Qi[22]] = [], MM[Qi[18]] = Qi[1], MM[Qi[43]] = Qi[1], MM[Qi[26]] = -Qi[2]), MM[Qi[11]] = Qi[1]; MM[Qi[11]] < MM[Qi[15]]; MM[Qi[11]]++)
              if (MM[Qi[32]] = MM[Qi[61]].indexOf(MM[-Qi[5]][MM[Qi[11]]]), MM[Qi[32]] !== -Qi[2])
                if (MM[Qi[26]] < Qi[1]) MM[Qi[26]] = MM[Qi[32]];
                else {
                  mi(MM[Qi[26]] += MM[Qi[32]] * Qi[34], MM[Qi[18]] |= MM[Qi[26]] << MM[Qi[43]], MM[Qi[43]] += (MM[Qi[26]] & Qi[36]) > Qi[37] ? Qi[38] : Qi[39]);
                  do {
                    mi(MM[Qi[22]].push(MM[Qi[18]] & Qi[12]), MM[Qi[18]] >>= Qi[11], MM[Qi[43]] -= Qi[11])
                  } while (MM[Qi[43]] > Qi[26]);
                  MM[Qi[26]] = -Qi[2]
                } return MM[Qi[26]] > -Qi[2] && MM[Qi[22]].push((MM[Qi[18]] | MM[Qi[26]] << MM[Qi[43]]) & Qi[12]), zi(MM[Qi[22]])
          }

          function PM(...MM) {
            return MM[Qi[13]] = Qi[2], typeof Mi[MM[Qi[1]]] === Qi[19] ? Mi[MM[Qi[1]]] = aM(ri[MM[Qi[1]]]) : Mi[MM[Qi[1]]]
          }

          function nM() {
            function MM(...MM) {
              return MM[Qi[13]] = Qi[2], MM[Qi[1]][Qi[2]] * Qi[63] + (MM[Qi[1]][Qi[1]] < Qi[1] ? Qi[62] | MM[Qi[1]][Qi[1]] : MM[Qi[1]][Qi[1]])
            }

            function rM(...MM) {
              switch (MM[Qi[13]] = Qi[2], ((MM[Qi[1]] & Qi[62]) !== Qi[1]) * Qi[2] + (MM[Qi[1]] < Qi[1]) * Qi[23]) {
                case Qi[1]:
                  return [MM[Qi[1]] % Qi[62], Math.trunc(MM[Qi[1]] / Qi[63])];
                case Qi[2]:
                  return [MM[Qi[1]] % Qi[62] - Qi[62], Math.trunc(MM[Qi[1]] / Qi[63]) + Qi[2]];
                case Qi[23]:
                  return [((MM[Qi[1]] + Qi[62]) % Qi[62] + Qi[62]) % Qi[62], Math.round(MM[Qi[1]] / Qi[63])];
                case Qi[30]:
                  return [MM[Qi[1]] % Qi[62], Math.trunc(MM[Qi[1]] / Qi[63])]
              }
            }
            let iM = MM([Qi[23], Qi[10]]),
              OM = MM([Qi[2], Qi[23]]),
              SM = iM + OM,
              jM = SM - OM,
              aM = jM * Qi[23],
              PM = aM / Qi[23];
            mi(console.log(rM(SM)), console.log(rM(jM)), console.log(rM(aM)), console.log(rM(PM)))
          }
          PM(161) + "9" in Li && nM();
          const QM = iM[PM(162)](Qi[10]),
            zM = jr(OM) ? jM[Qi[60]][PM(163)](Pr(OM, QM)) : QM;
          return function(MM) {
            var rM, iM, OM, jM, aM;
            const PM = null === (rM = MM.meta) || void 0 === rM ? void 0 : rM.formatVersion;
            if (!(0, wr.i)(PM)) throw new Error(`Unsupported recording format version: ${PM}`);
            if (!Array.isArray(MM.initialChunks) || !Array.isArray(MM.ticks)) throw new Error("Recording is missing initialChunks or ticks");
            for (const SM of MM.ticks)
              if (!Array.isArray(SM.structuralEvents) || !Array.isArray(SM.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
            const nM = {
              ...MM.meta
            };
            return nM.formatVersion = br.c, (0, SM.J)(nM.variation) && delete nM.variation, {
              meta: nM,
              initialChunks: MM.initialChunks.map((MM => {
                var rM;
                return {
                  chunkPos: MM.chunkPos,
                  rle: gr(MM.rle),
                  sharedBlockData: null !== (rM = Wr("sharedBlockData", MM.sharedBlockData)) && void 0 !== rM ? rM : []
                }
              })),
              ticks: MM.ticks.map(Tr),
              editState: {
                cameraKeyframes: null !== (iM = null === (OM = MM.editState) || void 0 === OM ? void 0 : OM.cameraKeyframes) && void 0 !== iM ? iM : [],
                playbackMark: null !== (jM = null === (aM = MM.editState) || void 0 === aM ? void 0 : aM.playbackMark) && void 0 !== jM ? jM : null
              }
            }
          }(Or(OM)[PM(164)](zM))
        }
        throw new br[Qi[18]](OM)
      })
  },
  37901: (MM, rM, iM) => {
    iM.d(rM, {
      C: () => PM,
      b: () => aM,
      c: () => SM,
      e: () => jM,
      h: () => LM,
      l: () => mM,
      p: () => QM,
      t: () => HM,
      v: () => nM,
      y: () => zM
    });
    var OM = iM(37905);
    const SM = 9;
    class jM extends Error {
      constructor(MM) {
        super(`Unsupported recording format: header ${null!==MM&&void 0!==MM?MM:"missing"}, reading v${OM.e.join(", v")}`), this.older = void 0, this.older = (0, OM.h)(MM)
      }
    }
    const aM = 100,
      PM = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips"],
      nM = ["skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride"],
      QM = ["itemName", "amount", "position", "size", "attributes"],
      zM = ["opacity", "zIndex", "overlayColour", "canSee", "meshScaling", "nameTagInfo", "multilineTextBox", "hasPriorityNametag", "ranks", "nameColour", "_isAlive", "_invisibleEffect", "_invincible", "killfeedColour", "hideNameSeed", "_glowingEffect", "lockHeadToBody"],
      LM = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading", "armour", "rY", "playerCustomisations", "variation", "metaInfo", "soundName", "volume", "refDistance", "maxHearDist", "rate", "ridingVehicleEId", "leaderboardTop", "meshKind", "meshOpts", "aiState"],
      mM = ["selectedSlotIndex", "slots"],
      HM = ["_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"]
  },
  37897: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => LM,
      g: () => hM,
      k: () => nM,
      n: () => aM,
      r: () => PM,
      v: () => QM
    });
    var OM = iM(332),
      SM = iM(22);

    function jM(MM) {
      return null === MM || void 0 === MM ? null : "string" === typeof MM ? MM : null
    }

    function aM(MM, rM) {
      return JSON.stringify(MM) === JSON.stringify(rM)
    }

    function PM(MM) {
      const rM = [];
      for (const iM of Object.keys(MM)) {
        const OM = MM[iM];
        for (const MM of Object.keys(OM)) rM.push({
          Pi: iM,
          name: MM,
          ...OM[MM]
        })
      }
      return rM
    }

    function nM(MM) {
      const rM = {};
      for (const jM of MM) {
        var iM, OM, SM;
        rM[jM.Pi] || (rM[jM.Pi] = {}), rM[jM.Pi][jM.name] = {
          icon: jM.icon,
          level: jM.level,
          displayName: null !== (iM = jM.displayName) && void 0 !== iM ? iM : null,
          endTick: null !== (OM = jM.endTick) && void 0 !== OM ? OM : null,
          showInNametag: null === (SM = jM.showInNametag) || void 0 === SM || SM
        }
      }
      return rM
    }

    function QM(MM, rM) {
      const iM = {};
      for (const SM of Object.keys(MM)) {
        const jM = {};
        for (const iM of Object.keys(MM[SM])) {
          const OM = MM[SM][iM];
          null !== OM.endTick && OM.endTick < rM || (jM[iM] = {
            ...OM,
            endTick: null === OM.endTick ? null : OM.endTick - rM
          })
        }(0, OM.xc)(jM) || (iM[SM] = jM)
      }
      return iM
    }

    function zM(MM, rM, iM) {
      if (null !== MM) return Math.max(0, 1e3 * (MM - rM) / iM)
    }
    class LM {
      constructor() {
        this.tracked = {}
      }
      clear() {
        this.tracked = {}
      }
      seedFromClient(MM, rM) {
        this.clear();
        const iM = Date.now();
        for (const PM of MM.iterateEntityIds()) {
          const nM = MM.getEffects(PM);
          if ((0, OM.xc)(nM)) continue;
          const QM = rM(PM);
          for (const MM of Object.keys(nM)) {
            var SM, aM;
            const rM = nM[MM];
            this.upsert(QM, MM, {
              icon: rM.icon,
              level: rM.level,
              displayName: jM(rM.displayName),
              showInNametag: null === (SM = rM.showInNametag) || void 0 === SM || SM,
              endTime: void 0 !== rM.duration && null !== rM.duration ? (null !== (aM = rM.appliedAt) && void 0 !== aM ? aM : iM) + rM.duration : null
            })
          }
        }
      }
      upsert(MM, rM, iM) {
        this.tracked[MM] || (this.tracked[MM] = {}), this.tracked[MM][rM] = iM
      }
      remove(MM, rM) {
        const iM = this.tracked[MM];
        iM && (delete iM[rM], (0, OM.xc)(iM) && delete this.tracked[MM])
      }
      handleUpdate(MM) {
        var rM;
        0 !== MM.duration ? this.upsert(MM.Pi, MM.name, {
          icon: MM.icon,
          level: MM.level,
          displayName: jM(MM.displayName),
          showInNametag: null === (rM = MM.showInNametag) || void 0 === rM || rM,
          endTime: void 0 !== MM.duration && null !== MM.duration ? Date.now() + MM.duration : null
        }) : this.remove(MM.Pi, MM.name)
      }
      handleRemove(MM, rM) {
        this.remove(MM, rM)
      }
      sample(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        const SM = {},
          jM = 1e3 / rM;
        for (const aM of Object.keys(this.tracked)) {
          const rM = this.tracked[aM],
            PM = {};
          for (const OM of Object.keys(rM)) {
            const SM = rM[OM];
            let nM = null;
            if (null !== SM.endTime) {
              const rM = Math.max(0, SM.endTime - iM);
              if (0 === rM) {
                this.remove(aM, OM);
                continue
              }
              nM = MM + Math.ceil(rM / jM)
            }
            PM[OM] = {
              icon: SM.icon,
              level: SM.level,
              displayName: SM.displayName,
              endTick: nM,
              showInNametag: SM.showInNametag
            }
          }(0, OM.xc)(PM) || (SM[aM] = PM)
        }
        return SM
      }
    }

    function mM(MM, rM, iM, OM) {
      MM.hasEntity(rM) ? MM.updateEffect(rM, iM, OM) : function(MM, rM, iM) {
        SM.i.Tz("EffectUpdate", {
          Pi: MM,
          name: rM,
          ...iM
        }, !0)
      }(rM, iM, OM)
    }

    function HM(MM, rM, iM) {
      MM.hasEntity(rM) ? MM.removeEffect(rM, iM) : function(MM, rM) {
        SM.i.Tz("RemoveEffect", {
          Pi: MM,
          name: rM
        }, !0)
      }(rM, iM)
    }

    function hM(MM, rM, iM, OM, SM, jM, aM) {
      for (const zM of Object.keys(iM))
        for (const jM of Object.keys(iM[zM])) {
          var PM;
          null !== (PM = rM[zM]) && void 0 !== PM && PM[jM] || (HM(MM, zM, jM), OM && zM === OM && String(SM) !== String(zM) && HM(MM, SM, jM))
        }
      for (const JM of Object.keys(rM))
        for (const PM of Object.keys(rM[JM])) {
          var nM, QM;
          const dM = rM[JM][PM],
            yM = zM(dM.endTick, jM, aM);
          if (0 === yM) {
            HM(MM, JM, PM), OM && JM === OM && String(SM) !== String(JM) && HM(MM, SM, PM);
            continue
          }
          const lM = null === (nM = iM[JM]) || void 0 === nM ? void 0 : nM[PM],
            EM = lM && (hM = dM, (LM = lM).icon === hM.icon && LM.level === hM.level && LM.displayName === hM.displayName && LM.endTick === hM.endTick && LM.showInNametag === hM.showInNametag),
            UM = {
              icon: dM.icon,
              level: dM.level,
              displayName: null !== (QM = dM.displayName) && void 0 !== QM ? QM : void 0,
              duration: yM,
              showInNametag: dM.showInNametag
            };
          EM || mM(MM, JM, PM, UM), OM && JM === OM && mM(MM, SM, PM, {
            ...UM,
            showInNametag: !1
          })
        }
      var LM, hM
    }
  },
  37891: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => zM,
      f: () => QM,
      i: () => mM,
      j: () => PM,
      l: () => LM
    });
    var OM = iM(37885),
      SM = iM(37895),
      jM = iM(286);
    const aM = {
      description: "Bloxd Replay",
      accept: {
        [OM.h]: OM.e
      }
    };

    function PM() {
      return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker && !(0, jM.c)()
    }

    function nM(MM) {
      return MM instanceof DOMException && "AbortError" === MM.name
    }
    async function QM() {
      try {
        const [MM] = await window.showOpenFilePicker({
          multiple: !1,
          types: [aM]
        }), rM = await MM.getFile();
        return {
          handle: MM,
          bytes: new Uint8Array(await rM.arrayBuffer())
        }
      } catch (MM) {
        if (nM(MM)) return null;
        throw MM
      }
    }
    async function zM(MM) {
      if (MM && await async function(MM) {
          const rM = {
            mode: "readwrite"
          };
          return "granted" === await MM.queryPermission(rM) || "granted" === await MM.requestPermission(rM)
        }(MM)) return MM;
      try {
        return await window.showSaveFilePicker({
          suggestedName: (0, OM.l)(),
          types: [aM]
        })
      } catch (rM) {
        if (nM(rM)) return null;
        throw rM
      }
    }
    async function LM(MM, rM) {
      const iM = await MM.createWritable();
      await iM.write(new Blob([rM], {
        type: OM.h
      })), await iM.close()
    }

    function mM(MM) {
      return (0, OM.j)((0, SM.c)(MM))
    }
  },
  37402: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => LM
    });
    var OM = iM(19),
      SM = iM(83),
      jM = iM(30),
      aM = iM(2562),
      PM = iM(3855),
      nM = iM(7148);
    const QM = "shaderPackListingCheckedAt",
      zM = 36e5;

    function LM() {
      const {
        canUseShaderPacks: MM
      } = SM.featureFlags.settings;
      var rM, LM;
      (0, PM.i)(MM) && !(0, PM.f)(MM) && (rM = jM.g.getItem(QM), LM = Date.now(), "number" !== typeof rM || LM < rM || LM - rM >= zM) && (0, aM.f)((() => {
        (async function() {
          if ("landingPage" !== OM.d.get("gameState")) return;
          const MM = await (0, nM.d)();
          if (void 0 === (null === MM || void 0 === MM ? void 0 : MM.listing)) return;
          jM.g.setItem(QM, Date.now());
          const {
            followListingUpdates: rM
          } = await Promise.all([iM.e(89), iM.e(149), iM.e(145)]).then((() => iM(43960)));
          await rM(MM, MM.listing) || jM.g.removeItem(QM)
        })().catch((MM => {
          console.error("Failed to check the shader pack listing for an update", MM)
        }))
      }))
    }
  },
  9530: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => PM,
      g: () => SM,
      i: () => jM,
      l: () => aM
    });
    let OM = null;

    function SM(MM, rM) {
      return `${rM}\n${null!==MM&&void 0!==MM?MM:""}`
    }

    function jM(MM) {
      OM = MM
    }

    function aM(MM) {
      const rM = OM;
      return OM = null, null !== rM && rM.key === MM ? rM.settled : null
    }

    function PM(MM, rM, iM, OM) {
      let SM = !1;
      null !== rM && setTimeout((() => {
        OM() && !SM && rM()
      }), 0), MM.then((MM => {
        SM = !0, iM(MM)
      }))
    }
  },
  37440: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => nM
    });
    var OM = iM(313),
      SM = iM(19),
      jM = iM(34822),
      aM = iM(1717),
      PM = iM(2093);

    function nM(MM, rM) {
      var iM, nM, QM;
      if (!SM.d.get("isKeydownEnabled") || MM.repeat) return;
      const zM = MM.code;
      "Escape" === MM.key ? (0, aM.k)(MM) : null !== (iM = PM.v.OpenSettings) && void 0 !== iM && iM.includes(zM) ? (0, aM.B)(MM, OM.m.SETTINGS) : null !== (nM = PM.v.OpenCharacterCustomization) && void 0 !== nM && nM.includes(zM) ? (0, jM.b)() || (0, aM.B)(MM, OM.m.CUSTOMISATION, rM()) : null !== (QM = PM.v.ShowDebugOverlay) && void 0 !== QM && QM.includes(zM) && SM.d.set({
        showDebugOverlay: !SM.d.get("showDebugOverlay")
      })
    }
  },
  37407: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => DM,
      h: () => fM
    });
    var OM = iM(625),
      SM = iM(1232),
      jM = iM(143);
    const aM = "cf-";

    function PM(MM) {
      return `${aM}${MM}`
    }

    function nM(MM) {
      return MM.startsWith(PM("game-server-"))
    }

    function QM(MM) {
      return /^game-server-[a-z0-9-]+\.bloxd\.io$/i.test(MM)
    }
    var zM = iM(1251),
      LM = iM(1229),
      mM = iM(22),
      HM = iM(1215),
      hM = iM(1871),
      JM = iM(1911),
      dM = iM(3297),
      yM = iM(1360),
      lM = iM(1373),
      EM = iM(1573),
      UM = iM(1202),
      GM = iM(37414),
      CM = iM(30),
      eM = iM(119),
      bM = iM(1919),
      wM = iM(37437);
    const tM = Date.UTC(2026, 11, 8),
      gM = new Set(["seat_lost", "socket_unopened", "socket_timeout_unopened"]),
      uM = "gameServerRoute";
    async function RM(MM) {
      if (!MM.ok) {
        const rM = await MM.text().catch((() => ""));
        return 403 === MM.status && "ipv6_unsupported" === rM ? "ipv6Refused" : "other"
      }
      const rM = await MM.json().catch((() => null));
      return "object" === typeof rM && null !== rM && Number.isFinite(rM.version) ? "ours" : "other"
    }
    const pM = new class {
      constructor(MM) {
        this.deps = MM, this.autoRetriesLeft = 1, this.armReported = !1, this.pageArm = null, this.aliasFailedAt = null
      }
      hostFor(MM) {
        return this.deps.enabled && QM(MM) && "cloudflare" === this.heldRoute() ? PM(MM) : MM
      }
      async afterJoinFailed(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if (!this.deps.enabled) return null;
        const OM = new URL(MM).hostname;
        return nM(OM) ? await this.afterAliasJoinFailed(OM, rM, iM) : void 0 !== rM.gameServerUnreachable && this.checksJoinsTo(OM) && this.settle(await this.check(OM)) ? "reroute" : null
      }
      takeAutoRetry() {
        return !(this.autoRetriesLeft <= 0) && (this.autoRetriesLeft--, !0)
      }
      async waitToRetry(MM) {
        const rM = 1e3 + 2e3 * this.deps.random();
        return await this.deps.sleep(rM, MM).then((() => !0), (() => !1))
      }
      afterAutoRetryJoined(MM) {
        this.deps.enabled && this.deps.aL("game_server_route", "cf_retry_joined", MM)
      }
      afterAutoRetryFailed(MM) {
        if (!this.deps.enabled) return;
        if (null === MM) return void this.deps.aL("game_server_route", "cf_retry_failed:matchmake", 0);
        const {
          joinFailure: rM
        } = MM;
        void 0 === rM ? this.deps.aL("game_server_route", "cf_retry_failed:other", 0) : "refused" === rM.at ? this.deps.aL("game_server_route", "cf_retry_failed:refused", rM.code) : this.deps.aL("game_server_route", `cf_retry_failed:${rM.at}`, rM.code)
      }
      afterMatchmade(MM) {
        var rM;
        if (!this.deps.enabled) return;
        const iM = null === (rM = this.stored()) || void 0 === rM ? void 0 : rM.recoveryArm;
        if (void 0 !== iM && null !== this.heldRoute() && this.reportArm(iM), null === this.aliasFailedAt) return;
        const OM = nM(new URL(MM).hostname);
        this.deps.aL("game_server_route", OM ? "manual_retry_cf" : "manual_retry_direct", this.deps.now() - this.aliasFailedAt), this.aliasFailedAt = null
      }
      async checkStalledJoin(MM, rM, iM) {
        const OM = new URL(MM).hostname;
        if (!this.deps.enabled || !this.checksJoinsTo(OM) || !await this.deps.seatLegs.whenSlow(rM)) return null;
        const SM = this.deps.seatLegs.answered,
          jM = await this.check(OM);
        return iM() ? this.settle(jM) ? "blocked" : "reported" : "blocked" !== jM.outcome || rM.aborted || this.deps.seatLegs.answered !== SM ? null : (this.settle(jM), "blocked")
      }
      afterAliasJoinLeft(MM) {
        this.deps.enabled && (this.reportArm(), this.deps.aL("game_server_route", "cf_join_left", MM))
      }
      afterJoined(MM) {
        if (!this.deps.enabled) return;
        this.aliasFailedAt = null;
        const rM = new URL(MM).hostname,
          iM = nM(rM);
        if (iM) this.reportArm(), this.deps.aL("game_server_route", "cf_join", 0);
        else if (!QM(rM) || this.deps.random() >= .01) return;
        const OM = iM ? rM.slice(aM.length) : rM;
        this.deps.delay(2e4).then((async () => {
          await this.reportRtt(OM, "direct", "direct_failed"), await this.reportRtt(PM(OM), "cf", "cf_failed")
        }))
      }
      async afterAliasJoinFailed(MM, rM, iM) {
        let {
          gameServerUnreachable: OM,
          joinFailure: SM
        } = rM;
        if (void 0 === SM) return null;
        if ("refused" === SM.at) return this.reportArm(), this.deps.aL("game_server_route", "cf_join_refused", SM.code), null;
        const jM = this.recoveryArm();
        if (this.reportArm(jM), this.deps.aL("game_server_route", `cf_join_failed:${SM.at}`, SM.code), null !== iM && this.deps.aL("game_server_route", "cf_failed_since_route", iM), this.aliasFailedAt = this.deps.now(), void 0 === OM) return null;
        const aM = this.stored();
        return "cloudflare" !== (null === aM || void 0 === aM ? void 0 : aM.route) || "on" !== jM && aM.aliasFailedOnce || "ours" !== (await this.probeHost(MM)).answer ? (this.store({
          route: "direct",
          until: this.deps.now() + 36e5
        }), null) : "holdout" === jM ? (this.store({
          ...aM,
          aliasFailedOnce: !0
        }), null) : "cloudflare" === this.heldRoute() && gM.has(SM.at) ? "retry" : null
      }
      recoveryArm() {
        if (this.deps.now() >= tM) return "on";
        const MM = this.stored();
        return void 0 !== (null === MM || void 0 === MM ? void 0 : MM.recoveryArm) ? MM.recoveryArm : (this.pageArm ??= 100 * this.deps.random() < 20 ? "holdout" : "on", null !== MM && this.store(MM), this.pageArm)
      }
      reportArm(MM) {
        this.armReported || this.deps.now() >= tM || (this.armReported = !0, this.deps.aL("game_server_route", "holdout" === (null !== MM && void 0 !== MM ? MM : this.recoveryArm()) ? "alias_recovery_holdout" : "alias_recovery_on", 0))
      }
      checksJoinsTo(MM) {
        return QM(MM) && "direct" !== this.heldRoute()
      }
      settle(MM) {
        let {
          outcome: rM,
          cfMs: iM
        } = MM;
        return this.deps.aL("game_server_route", rM, iM), "blocked" === rM && (this.store({
          route: "cloudflare",
          until: this.deps.now() + 1728e5
        }), !0)
      }
      async check(MM) {
        const rM = this.probeHost(PM(MM));
        if ("none" !== (await this.probeHost(MM)).answer) return {
          outcome: "direct_reachable",
          cfMs: 0
        };
        const {
          answer: iM,
          ms: OM
        } = await rM;
        return "ours" !== iM && "ipv6Refused" !== iM ? {
          outcome: "cf_unreachable",
          cfMs: 0
        } : "none" !== (await this.probeHost(MM)).answer ? {
          outcome: "direct_reachable",
          cfMs: OM
        } : {
          outcome: "ipv6Refused" === iM ? "blocked_ipv6" : "blocked",
          cfMs: OM
        }
      }
      async reportRtt(MM, rM, iM) {
        const OM = "ours" === (await this.probeHost(MM)).answer ? await this.probeHost(MM) : null;
        "ours" === (null === OM || void 0 === OM ? void 0 : OM.answer) ? this.deps.aL("game_server_rtt", rM, OM.ms): this.deps.aL("game_server_rtt", iM, 0)
      }
      probeHost(MM) {
        return this.deps.probe(`https://${MM}/version`, 8e3)
      }
      stored() {
        return function(MM) {
          if ("object" !== typeof MM || null === MM) return null;
          const {
            route: rM,
            until: iM,
            aliasFailedOnce: OM,
            recoveryArm: SM
          } = MM;
          return "cloudflare" !== rM && "direct" !== rM || "number" !== typeof iM ? null : {
            route: rM,
            until: iM,
            ...!0 === OM ? {
              aliasFailedOnce: OM
            } : {},
            ..."on" === SM || "holdout" === SM ? {
              recoveryArm: SM
            } : {}
          }
        }(this.deps.storage.getItem(uM))
      }
      heldRoute() {
        const MM = this.stored();
        return null !== MM && MM.until > this.deps.now() ? MM.route : null
      }
      store(MM) {
        var rM, iM, OM, SM;
        const jM = null !== (rM = null !== (iM = null !== (OM = MM.recoveryArm) && void 0 !== OM ? OM : null === (SM = this.stored()) || void 0 === SM ? void 0 : SM.recoveryArm) && void 0 !== iM ? iM : this.pageArm) && void 0 !== rM ? rM : void 0;
        this.deps.storage.setItem(uM, void 0 === jM ? MM : {
          ...MM,
          recoveryArm: jM
        })
      }
    }({
      storage: CM.g,
      probe: async function(MM, rM) {
        const iM = performance.now(),
          OM = await (0, HM.o)(MM, {
            cache: "no-store"
          }, rM, (async MM => {
            const rM = Math.round(performance.now() - iM);
            return {
              answer: await RM(MM),
              ms: rM
            }
          }));
        return null !== OM && void 0 !== OM ? OM : {
          answer: "none",
          ms: 0
        }
      },
      aL: hM.B,
      enabled: !(0, eM.isDiscordClient)(),
      now: Date.now,
      random: Math.random,
      delay: MM => new Promise((rM => {
        setTimeout(rM, MM)
      })),
      sleep: bM.c,
      seatLegs: wM.k
    });
    var WM = iM(1818),
      sM = iM(9530);

    function DM(MM) {
      return async (rM, iM, aM, PM, QM) => {
        let LM, EM = performance.now();
        if ((0, OM.J)(aM)) {
          if (QM.aborted) return ZM();
          const MM = rM instanceof SM.e ? null : (0, sM.l)((0, sM.g)(rM, iM));
          let OM = await (null !== MM && void 0 !== MM ? MM : fM(rM, iM, PM));
          if (null !== MM && performance.now() - OM.at > oM && !QM.aborted) {
            const MM = await fM(rM, iM, PM);
            MM.result.isError() && !OM.result.isError() || (OM = MM)
          }
          const jM = OM.result;
          if (EM = OM.at, QM.aborted || dM.c.matchmakingEnded(jM.isError() ? null : OM.at), jM.isError()) {
            const MM = jM.asError();
            return console.log("Join room did not succeed, reason:", MM.message), MM.forward()
          }
          LM = jM.getValue(), pM.afterMatchmade(LM.endpoint)
        } else {
          dM.c.skipPlayWait();
          const MM = NM(aM.replace("https://", "").replace("http://", ""));
          if (MM.isError()) return MM.asError().forward();
          LM = {
            endpoint: MM.getValue(),
            gameNameWithVariation: iM,
            lobbyName: rM instanceof SM.e ? rM.getLobbyName() : rM
          }
        }
        if (QM.aborted) return ZM();
        console.log(`Connecting to ${LM.gameNameWithVariation} in lobby ${LM.lobbyName} on game server ${LM.endpoint}`), mM.i.Tz("matchmakeAndPlayStepCompleted", {
          step: jM.n.REQUEST_TO_MATCHMAKING,
          totalSubSteps: 1
        }), (0, hM.j)(), JM.b.markGameLoadStart((0, WM.e)()), (0, lM.p)({
          websocketUrl: LM.endpoint,
          gameNameWithVariation: LM.gameNameWithVariation,
          lobbyName: LM.lobbyName
        }), mM.i.Tz("loadingScreenState", "loadingPage:loadingGame");
        const UM = async () => {
          const MM = await async function(MM, rM, iM, OM) {
            const SM = await YM(MM, rM, iM);
            if (!SM.isError() && !OM.aborted) {
              const {
                endpoint: MM,
                gameNameWithVariation: rM,
                lobbyName: iM
              } = SM.getValue();
              (0, lM.p)({
                websocketUrl: MM,
                gameNameWithVariation: rM,
                lobbyName: iM
              })
            }
            return SM
          }(rM, iM, PM, QM);
          return MM.isError() || (LM = MM.getValue(), EM = performance.now()), MM
        }, GM = !(0, OM.J)(aM), CM = rM => MM({
          place: LM,
          userContext: PM,
          direct: GM,
          matchedAt: EM,
          rematch: UM
        }, rM), eM = () => nM(new URL(LM.endpoint).hostname), bM = eM() ? performance.now() : null, wM = GM ? {
          result: await CM(QM),
          blockedAt: null,
          failureChecked: !1
        } : await async function(MM, rM, iM) {
          const OM = new HM.e(iM),
            SM = new AbortController;
          let jM = null,
            aM = !1,
            PM = null;
          const nM = pM.checkStalledJoin(MM, SM.signal, (() => aM)).then((MM => {
            PM = MM, "blocked" === MM && (jM = performance.now(), OM.controller.abort())
          }));
          try {
            const MM = await rM(OM.signal);
            return aM = MM.isError() && void 0 !== MM.asError().debugResult.gameServerUnreachable, SM.abort(), aM && await nM, {
              result: MM,
              blockedAt: jM,
              failureChecked: "reported" === PM
            }
          } finally {
            SM.abort(), OM.unfollow()
          }
        }(LM.endpoint, CM, QM);
        let tM = null !== bM && void 0 !== bM ? bM : wM.blockedAt,
          gM = wM.result;
        const uM = () => null === tM ? null : performance.now() - tM,
          RM = gM.isError() && !0 === gM.asError().debugResult.rematch;
        let DM = null;
        if (!gM.isError() || GM || QM.aborted || RM || null !== wM.blockedAt || wM.failureChecked || (DM = await pM.afterJoinFailed(LM.endpoint, gM.asError().debugResult, uM())), gM.isError() && !GM && ("reroute" === DM || !QM.aborted && (RM || null !== wM.blockedAt))) {
          if (RM || (tM ??= performance.now(), mM.i.Tz("gameServerRouteSwitched")), QM.aborted) return kM(tM), ZM();
          console.log("Matchmaking again");
          const MM = await UM();
          if (MM.isError()) return MM.asError().forward();
          if (QM.aborted) return kM(tM), ZM();
          gM = await CM(QM), DM = null, !gM.isError() || QM.aborted || RM && !eM() || (DM = await pM.afterJoinFailed(LM.endpoint, gM.asError().debugResult, uM()))
        }
        if (gM.isError() && "retry" === DM && !QM.aborted && pM.takeAutoRetry()) {
          if (!await pM.waitToRetry(QM)) return ZM();
          console.log("Joining through Cloudflare again");
          const MM = await UM();
          if (QM.aborted) return ZM();
          if (MM.isError()) return pM.afterAutoRetryFailed(null), gM.asError().forward();
          if (gM = await CM(QM), gM.isError() && !QM.aborted) {
            const MM = gM.asError().debugResult;
            await pM.afterJoinFailed(LM.endpoint, MM, null), pM.afterAutoRetryFailed(MM)
          } else if (!gM.isError()) {
            var AM;
            pM.afterAutoRetryJoined(null !== (AM = uM()) && void 0 !== AM ? AM : 0)
          }
        }
        return gM.isError() ? (!0 === gM.asError().debugResult.Ti && QM.aborted && kM(tM), gM.asError().forward()) : (pM.afterJoined(LM.endpoint), mM.i.Tz("joinedGame", {
          gameNameWithVariation: LM.gameNameWithVariation,
          lobbyName: LM.lobbyName
        }), (0, yM.O)(), window.gtag ? window.gtag("event", "conversion", {
          send_to: "AW-16469618203/ipUBCJKWoJUZEJvcqa09"
        }) : console.error("window.gtag not defined"), zM.b.value({
          gameNameWithVariation: LM.gameNameWithVariation,
          lobbyName: LM.lobbyName
        }))
      }
    }

    function kM(MM) {
      null !== MM && pM.afterAliasJoinLeft(performance.now() - MM)
    }

    function ZM() {
      return zM.b.errorWithCode("Left the game while it loaded", jM.n.REQUEST_TO_MATCHMAKING, {
        severity: "low",
        Ti: !0
      })
    }
    setTimeout((() => {
      window.initialD ? Date.now = window.initialD : console.error("window.initialD not defined")
    }), 3e3);
    const oM = 1e4;

    function fM(MM, rM, iM) {
      return YM(MM, rM, iM).then((MM => ({
        result: MM,
        at: performance.now()
      })))
    }
    async function YM(MM, rM, iM) {
      return (0, OM.J)(MM) || MM instanceof SM.e || !(MM.length > LM.Q) ? await EM.c.matchmakePlayer(iM, MM, rM, (0, GM.c)()).then((MM => {
        if (!1 === MM.succeeded) return zM.b.errorWithCode(MM.failReason, jM.n.REQUEST_TO_MATCHMAKING, {
          severity: "low"
        });
        const {
          gameServerHost: rM,
          lobbyName: iM,
          gameNameWithVariation: OM
        } = MM, SM = NM(pM.hostFor(rM));
        return SM.isError() ? SM.asError().forward() : zM.b.value({
          endpoint: SM.getValue(),
          gameNameWithVariation: OM,
          lobbyName: iM
        })
      })).catch((MM => (console.error("Bad response from the matchmaking server:", MM), zM.b.errorWithCode(MM.toString(), jM.n.REQUEST_TO_MATCHMAKING, {
        error: MM,
        severity: "medium"
      })))) : (console.error("Invalid lobby ID:", MM), zM.b.errorWithCode("This lobby link's name is too long. Ask for a new link.", jM.n.REQUEST_TO_MATCHMAKING, {
        severity: "low"
      }))
    }

    function NM(MM) {
      const rM = UM.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(MM);
      return rM.isError() ? zM.b.errorWithCode(rM.asError().message, jM.n.CONNECT_TO_GAME_SERVER, {
        severity: "medium"
      }) : zM.b.value(rM.getValue())
    }
    window.leaveGame = () => {
      (0, lM.n)("/")
    }
  },
  9366: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => aM
    });
    var OM = iM(9374),
      SM = iM(625),
      jM = iM(119);

    function aM(MM) {
      var rM, iM;
      if ((0, SM.J)(MM)) return !0;
      const aM = null !== (rM = null === (iM = jM.siteUsedData[jM.siteUsed]) || void 0 === iM ? void 0 : iM.adConfig.showRewardedAds) && void 0 !== rM && rM;
      for (const SM in MM) {
        const rM = MM[SM];
        if (null !== rM && void 0 !== rM && rM.items)
          for (const MM in rM.items)
            if ((0, OM.i)(rM.items[MM], aM)) return !1
      }
      return !0
    }
  },
  37515: (MM, rM, iM) => {
    function OM(MM, rM) {
      for (let iM = 0; iM < MM.length; iM++)
        if (MM[iM].identifier === rM) return MM[iM];
      return null
    }

    function SM(MM, rM) {
      return null !== OM(MM, rM)
    }
    iM.d(rM, {
      e: () => OM,
      i: () => SM
    })
  },
  37524: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => zM,
      g: () => mM,
      k: () => yM,
      m: () => QM
    });
    var OM = iM(19),
      SM = iM(2619),
      jM = iM(2622),
      aM = iM(2624),
      PM = iM(2690),
      nM = iM(22);

    function QM(MM, rM) {
      return (!(0, aM.c)() || 0 === MM && 0 === rM) && (0, jM.z)(SM.l.Joystick, 0, MM, rM, 0)
    }
    const zM = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function LM(MM) {
      return MM.classList.contains("TouchKeyHit") && HM() ? null : MM.firstElementChild
    }

    function mM(MM) {
      return MM.classList.contains("TouchKeyHit") && !MM.classList.contains("CanvasZone") ? {
        whole: !HM(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: hM(LM(MM))
      }
    }

    function HM() {
      return document.documentElement.classList.contains(PM.k)
    }

    function hM(MM) {
      return !(MM instanceof HTMLElement) || MM.offsetWidth <= 0 || MM.offsetHeight <= 0 ? null : {
        width: MM.offsetWidth,
        height: MM.offsetHeight
      }
    }

    function JM(MM, rM) {
      const iM = MM => Math.min(65535, Math.round(4 * MM));
      return (iM(MM) | iM(rM) << 16) >>> 0
    }

    function dM(MM) {
      return {
        x: MM.left + MM.width / 2,
        y: MM.top + MM.height / 2,
        radius: Math.min(MM.width, MM.height) / 2
      }
    }
    const yM = new class {
      constructor(MM) {
        this.write = MM, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        rM ? this.elements.set(MM, {
          element: rM,
          hidden: iM
        }) : this.elements.delete(MM), this.measureOne(MM)
      }
      measure() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = MM.left, this.canvasTop = MM.top;
        for (const rM of this.elements.keys()) this.measureOne(rM)
      }
      hitZone(MM, rM) {
        let iM = null,
          OM = 1;
        for (const SM of this.elements.keys()) {
          const jM = this.shown(SM);
          if (!jM) continue;
          const {
            rect: aM,
            element: PM
          } = jM, nM = dM(aM), QM = Math.max(0, aM.width / 2 - nM.radius), zM = Math.max(0, aM.height / 2 - nM.radius), mM = Math.max(0, Math.abs(MM - nM.x) - QM), HM = Math.max(0, Math.abs(rM - nM.y) - zM), JM = PM.firstElementChild;
          let yM = Math.hypot(mM, HM) / nM.radius;
          const lM = hM(LM(PM));
          lM && (yM = Math.min(yM, Math.max(2 * Math.abs(MM - nM.x) / lM.width, 2 * Math.abs(rM - nM.y) / lM.height))), yM < OM && (iM = {
            code: SM,
            element: PM,
            key: JM,
            ...nM
          }, OM = yM)
        }
        return iM
      }
      measureOne(MM) {
        const rM = this.shown(MM);
        if (!rM) return void this.write(SM.l.TouchZone, MM, 0, 0, 0);
        const {
          rect: iM,
          element: OM
        } = rM, jM = dM(iM);
        this.write(SM.l.TouchZone, MM, jM.x - this.canvasLeft, jM.y - this.canvasTop, JM(iM.width, iM.height));
        const aM = hM(LM(OM));
        this.write(SM.l.TouchZone, 256 | MM, 0, 0, aM ? JM(aM.width, aM.height) : 0)
      }
      shown(MM) {
        const rM = this.elements.get(MM),
          iM = OM.d.get("worldPanelHud");
        if (!rM || rM.hidden || "none" === iM) return null;
        const SM = rM.element.getBoundingClientRect();
        return SM.width <= 0 || SM.height <= 0 ? null : {
          rect: SM,
          element: rM.element
        }
      }
    }(jM.z);
    (0, nM.j)(PM.f, (() => {
      yM.measure()
    }))
  },
  37790: (MM, rM, iM) => {
    function OM(MM) {
      return "fetch" === MM || "timeout" === MM || "integrity" === MM ? "download" : "browser"
    }
    iM.d(rM, {
      d: () => SM,
      f: () => aM,
      g: () => nM,
      j: () => PM,
      n: () => OM,
      p: () => jM
    });
    const SM = "https://discord.gg/playbloxd";

    function jM(MM) {
      return "download" === MM ? {
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

    function aM(MM, rM) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: rM ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: MM.code
        },
        discordLink: rM,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function PM() {
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

    function nM(MM, rM, iM) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: iM ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: MM.reason
        },
        discordLink: null === MM.name,
        confirm: rM ? "general:reconnect" : MM.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  37833: (MM, rM, iM) => {
    function OM(MM, rM) {
      return null === MM || null === rM ? MM === rM : MM[0] === rM[0] && MM[1] === rM[1] && MM[2] === rM[2]
    }

    function SM(MM) {
      return [MM[0] + .5, MM[1] + .5, MM[2] + .5]
    }
    iM.d(rM, {
      c: () => SM,
      d: () => OM
    })
  },
  37799: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => nM,
      i: () => PM
    });
    const OM = {
        files: {
          "debugLog.ts": "export function debugLog(message: string): void {\n\tconsole.log(`[debug] ${message}`)\n}\n",
          "index.ts": 'import type { PlayerId } from "@bloxd"\nimport { debugLog } from "./debugLog"\n\nonPlayerJoin = (player: PlayerId) => {\n\tapi.log(`Player ${player} joined - Love from Debug Plugin!`)\n}\n\nexport { debugLog }\n'
        },
        dependencies: [],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  debugLog: () => debugLog\n});\nmodule.exports = __toCommonJS(index_exports);\n\n// world-code-plugin:debugLog.ts\nfunction debugLog(message) {\n  console.log(`[debug] ${message}`);\n}\n\n// world-code-plugin:index.ts\nonPlayerJoin = (player) => {\n  api.log(`Player ${player} joined - Love from Debug Plugin!`);\n};\n',
        types: "declare function debugLog(message: string): void;\n\nexport { debugLog };\n"
      },
      SM = {
        files: {
          "index.ts": 'import type { CustomTextStyling, DialogueText, PlayerId, SpeechVoice } from "@bloxd"\nimport { clearTimeout, setTimeout, TimeoutId } from "@plugins/helpers"\n\n/** Long enough to read most lines once they have appeared. */\nconst DEFAULT_DURATION_MS = 6000\n\nexport type DialogueOpts = {\n\t/** Shown above the line, such as a name. */\n\tspeakerName?: string | CustomTextStyling\n\t/** A preset such as "regular" or "gruff", or every synth parameter. Omit for a silent line. */\n\tvoice?: SpeechVoice\n\t/** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n\tdurationMs?: number\n}\n\nconst hideTimeouts: Record<PlayerId, TimeoutId> = {}\n\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item\'s icon inline\n * @param opts - The speaker\'s name, the voice that reads it out, and how long it stays up\n */\nexport function sayDialogue(playerId: PlayerId, text: DialogueText, opts: DialogueOpts = {}) {\n\tif (hideTimeouts[playerId] !== undefined) {\n\t\tclearTimeout(hideTimeouts[playerId])\n\t\t// Cleared first, so a line said again replays rather than matching the value already set\n\t\tapi.setClientOption(playerId, "dialogue", null)\n\t}\n\tapi.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice })\n\thideTimeouts[playerId] = setTimeout(\n\t\t() => {\n\t\t\tclearDialogue(playerId)\n\t\t},\n\t\topts.durationMs ?? DEFAULT_DURATION_MS,\n\t\tplayerId,\n\t)\n}\n\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\nexport function clearDialogue(playerId: PlayerId) {\n\tif (hideTimeouts[playerId] === undefined) {\n\t\treturn\n\t}\n\tclearTimeout(hideTimeouts[playerId])\n\tdelete hideTimeouts[playerId]\n\tapi.setClientOption(playerId, "dialogue", null)\n}\n\nonPlayerLeave = (playerId: PlayerId) => {\n\tdelete hideTimeouts[playerId]\n}\n'
        },
        dependencies: ["helpers"],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  clearDialogue: () => clearDialogue,\n  sayDialogue: () => sayDialogue\n});\nmodule.exports = __toCommonJS(index_exports);\nvar import_helpers = require("@plugins/helpers");\nvar DEFAULT_DURATION_MS = 6e3;\nvar hideTimeouts = {};\nfunction sayDialogue(playerId, text, opts = {}) {\n  if (hideTimeouts[playerId] !== void 0) {\n    (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n    api.setClientOption(playerId, "dialogue", null);\n  }\n  api.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice });\n  hideTimeouts[playerId] = (0, import_helpers.setTimeout)(\n    () => {\n      clearDialogue(playerId);\n    },\n    opts.durationMs ?? DEFAULT_DURATION_MS,\n    playerId\n  );\n}\nfunction clearDialogue(playerId) {\n  if (hideTimeouts[playerId] === void 0) {\n    return;\n  }\n  (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n  delete hideTimeouts[playerId];\n  api.setClientOption(playerId, "dialogue", null);\n}\nonPlayerLeave = (playerId) => {\n  delete hideTimeouts[playerId];\n};\n',
        types: "import { CustomTextStyling, SpeechVoice, PlayerId, DialogueText } from '@bloxd';\n\ntype DialogueOpts = {\n    /** Shown above the line, such as a name. */\n    speakerName?: string | CustomTextStyling;\n    /** A preset such as \"regular\" or \"gruff\", or every synth parameter. Omit for a silent line. */\n    voice?: SpeechVoice;\n    /** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n    durationMs?: number;\n};\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item's icon inline\n * @param opts - The speaker's name, the voice that reads it out, and how long it stays up\n */\ndeclare function sayDialogue(playerId: PlayerId, text: DialogueText, opts?: DialogueOpts): void;\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\ndeclare function clearDialogue(playerId: PlayerId): void;\n\nexport { clearDialogue, sayDialogue };\nexport type { DialogueOpts };\n"
      },
      jM = {
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
      aM = {
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
      PM = {
        debug: {
          name: "debug",
          specifier: "@plugins/debug",
          sourceVfsPath: "/node_modules/@plugins/debug/index.ts",
          typesVfsPath: "/node_modules/@plugins/debug/index.d.ts",
          files: OM.files,
          dependencies: OM.dependencies,
          bundledSource: OM.bundledSource,
          types: OM.types
        },
        dialogue: {
          name: "dialogue",
          specifier: "@plugins/dialogue",
          sourceVfsPath: "/node_modules/@plugins/dialogue/index.ts",
          typesVfsPath: "/node_modules/@plugins/dialogue/index.d.ts",
          files: SM.files,
          dependencies: SM.dependencies,
          bundledSource: SM.bundledSource,
          types: SM.types
        },
        helpers: {
          name: "helpers",
          specifier: "@plugins/helpers",
          sourceVfsPath: "/node_modules/@plugins/helpers/index.ts",
          typesVfsPath: "/node_modules/@plugins/helpers/index.d.ts",
          files: jM.files,
          dependencies: jM.dependencies,
          bundledSource: jM.bundledSource,
          types: jM.types
        },
        sessionBasedGame: {
          name: "sessionBasedGame",
          specifier: "@plugins/sessionBasedGame",
          sourceVfsPath: "/node_modules/@plugins/sessionBasedGame/index.ts",
          typesVfsPath: "/node_modules/@plugins/sessionBasedGame/index.d.ts",
          files: aM.files,
          dependencies: aM.dependencies,
          bundledSource: aM.bundledSource,
          types: aM.types
        }
      };

    function nM(MM) {
      const rM = [],
        iM = new Set,
        OM = MM => {
          if (iM.has(MM)) return;
          const SM = PM[MM];
          if (SM) {
            iM.add(MM);
            for (const MM of SM.dependencies) OM(MM);
            rM.push(MM)
          }
        };
      for (const SM of MM) OM(SM);
      return rM
    }
  },
  37802: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => nM,
      h: () => PM,
      i: () => aM,
      m: () => jM,
      o: () => QM,
      s: () => zM,
      u: () => hM,
      v: () => HM,
      y: () => mM
    });
    var OM = iM(1242);
    const SM = ["quickjs", "ses"];

    function jM(MM) {
      return SM.includes(MM)
    }

    function aM(MM) {
      return MM === OM.i || MM === OM.m
    }

    function PM(MM, rM) {
      return MM === OM.i && rM === OM.m || MM === OM.m && rM === OM.i
    }

    function nM(MM) {
      const rM = OM.m in MM,
        iM = OM.i in MM;
      return rM && iM ? null : rM ? OM.m : iM ? OM.i : null
    }

    function QM(MM, rM, iM) {
      const OM = `${rM}/`;
      return MM.filter((MM => MM.startsWith(OM))).map((MM => [MM, `${iM}/${MM.slice(OM.length)}`]))
    }

    function zM(MM, rM) {
      let iM = 0;
      for (const [OM, SM] of Object.entries(MM)) OM !== rM && (iM += SM.length);
      return iM
    }
    const LM = "@plugins/";

    function mM(MM) {
      return `${LM}${MM}`
    }

    function HM(MM, rM) {
      return `/node_modules/@plugins/${MM}/${rM}`
    }

    function hM(MM) {
      if (!MM.startsWith(LM)) return null;
      const rM = MM.slice(LM.length);
      return function(MM) {
        return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(MM)
      }(rM) ? rM : null
    }
  },
  37807: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => PM,
      f: () => SM,
      j: () => aM,
      n: () => nM,
      p: () => jM
    });
    var OM = iM(2638);
    const SM = 5,
      jM = "[SCHEMATIC]",
      aM = 1024e4;

    function PM(MM) {
      return MM.endsWith(".bloxdschem") && (0, OM.r)(MM.slice(0, -11) + ".ts") && MM.length <= 64
    }

    function nM(MM) {
      return Object.fromEntries(Object.keys(MM).map((MM => [MM, jM])))
    }
  },
  5251: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM,
      h: () => OM,
      l: () => jM,
      p: () => nM,
      r: () => aM
    });
    const OM = ["sine", "triangle", "square", "sawtooth"],
      SM = 55,
      jM = {
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

    function aM(MM) {
      return "string" !== typeof MM ? MM : Object.hasOwn(jM, MM) ? jM[MM] : null
    }

    function PM(MM, rM, iM) {
      return Math.min(iM, Math.max(rM, MM))
    }

    function nM(MM) {
      const rM = PM(MM.durationMs, 10, 500),
        iM = PM(MM.attackMs, 0, rM),
        {
          intonation: SM
        } = MM;
      return {
        waveform: OM.includes(MM.waveform) ? MM.waveform : "sine",
        pitchHz: PM(MM.pitchHz, 20, 4e3),
        glideSemitones: PM(MM.glideSemitones, -24, 24),
        durationMs: rM,
        attackMs: iM,
        releaseMs: PM(MM.releaseMs, 0, rM - iM),
        lowpassHz: null === MM.lowpassHz ? null : PM(MM.lowpassHz, 20, 2e4),
        volume: PM(MM.volume, 0, 2),
        intonation: {
          variationSemitones: PM(SM.variationSemitones, 0, 6),
          declineSemitones: PM(SM.declineSemitones, 0, 12),
          questionRiseSemitones: PM(SM.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: PM(SM.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: PM(MM.syllableMs, 25, 200)
      }
    }
  },
  9410: () => {},
  10557: MM => {
    MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAHklEQVR4nGNY3x/6nxjMQH2Fcyq8/hODaWA11d0IAPvLyX36T0UzAAAAAElFTkSuQmCC"
  },
  18684: MM => {
    MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAC4CAYAAADqkK6nAAAAAXNSR0IArs4c6QAAAuxJREFUeJzt1jFOFHEchuEfxpqeaGusuYDhCpbewMbEwmNYmNBwA0quYLgAtaGF2HuBtVpEWHBNXnBXnqeanUzxT+bNtzMDsOl21nhm8eCnYBvd2c6zxzwFT8N9S7WYmfn0am9mZl6+2H2M87DhLi5/zMzM5/Pvy1u3GrJU5FYt1WJm5svB60c+Ctvo49dvy8urliwVuetL5RuKv7bqG8tSkXt+88afFurN+3czM7P/9sPDnIiNcHZy+Nvv06Pjlc9d9fJrqXxT0bu1VHexUE/Tzfd912JdZ6nIrb1UFop1WSpyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIit3ZUZyeHc3Zy+JBn4T9hqcg9X/fB06Pj337vv/2QH4bNs/x3uvn+72OpyO1cu17MzHx6tTczMy9f7P6L87BlLi5/zMzM5/Pvy1s7lorczop7i5mZLwevH/kobKOPX78tL69aslTkVi3Vkm8sbln1DXXzGUtF7r6lWlo8+CnYRne2Y6mAzfcTBsFAqM32XQcAAAAASUVORK5CYII="
  },
  20639: MM => {
    MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJUlEQVR4nGMwsIpkIAYz0FThfyjGymcgVSFMEJtCsBjJCgcgeABOGmAZtndiFgAAAABJRU5ErkJggg=="
  },
  20642: MM => {
    MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJ0lEQVR4nGMwsIpkIAYzQBn/kTBWMQYsgtgwA+0UMuBTNIgU4g1wAE6xgffL0CuLAAAAAElFTkSuQmCC"
  },
  20649: MM => {
    MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJElEQVR4nGMwsIpkIAYzkKrwPxLGKsZAc4UMaJh8hdQPHoIKAboeZhN3YNlSAAAAAElFTkSuQmCC"
  },
  20657: MM => {
    MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMUlEQVR4nGMwsIpkIAYzoAn8R8MM2BSiK/qPrJiQov8wxWQrxMkm2USiPUNS8OANcADc3H37DfNNQQAAAABJRU5ErkJggg=="
  },
  20663: MM => {
    MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAKElEQVR4nGMwsIpkIAYzIHH+48AMyApxKfoPU0yRQgZsYkNJIcEABwCQU3/5LLo7QwAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);