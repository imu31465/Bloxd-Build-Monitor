export const id = 99;
export const ids = [99];
export const modules = {
  37677: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => LV,
      c: () => hV
    });
    var JV = xV(62),
      YV = xV(2051),
      UV = xV(37685),
      yV = xV.n(UV),
      pV = xV(5020),
      QV = xV(2021),
      nV = xV(1542),
      wV = xV(99),
      ZV = xV(115),
      vV = xV(375),
      rV = xV(1146),
      kV = xV.n(rV),
      bV = xV(27),
      EV = xV(1414),
      BV = xV(1725),
      jV = xV(1838),
      qV = xV(1775),
      tV = xV(2138),
      FV = xV(1493),
      TV = xV(2206),
      PV = xV(1473),
      AV = xV(3054),
      NV = xV(37687),
      XV = xV(37720),
      MV = xV(1578),
      zV = xV(2695),
      GV = xV(1220),
      WV = xV(37731);
    var RV = xV(35251),
      gV = xV(1315);
    const DV = ["touchstart", "touchend", "touchcancel"];
    const iV = new class {
      constructor() {
        this.saved = null, this.touchesDown = 0, this.due = !1, this.settled = !1, this.countTouches = VV => {
          this.touchesDown = VV.touches.length, this.due && 0 === this.touchesDown && this.putBack()
        }
      }
      keyboardUp() {
        if (!this.saved) {
          this.saved = {
            x: window.scrollX,
            y: window.scrollY,
            viewportTop: window.visualViewport.offsetTop,
            viewportLeft: window.visualViewport.offsetLeft
          };
          for (const VV of DV) window.addEventListener(VV, this.countTouches, {
            capture: !0,
            passive: !0
          })
        }
        this.due = !1, this.settled = !1
      }
      keyboardDown() {
        this.putBack()
      }
      keyboardSettled() {
        this.saved && (this.settled = !0, this.putBack())
      }
      putBack() {
        if (!this.saved) return;
        if (this.touchesDown > 0) return void(this.due = !0);
        this.due = !1;
        const {
          x: VV,
          y: eV,
          viewportTop: xV,
          viewportLeft: JV
        } = this.saved, YV = window.visualViewport;
        if (window.scrollX === VV && window.scrollY === eV && YV.offsetTop === xV && YV.offsetLeft === JV || window.scrollTo(VV, eV), this.settled) {
          this.saved = null, this.settled = !1;
          for (const VV of DV) window.removeEventListener(VV, this.countTouches, {
            capture: !0
          })
        }
      }
    };
    RV.e.onRelease((() => {
      iV.keyboardSettled()
    }));
    var CV = xV(1321);
    const aV = xV(37737),
      oV = ["enter", "t", "/"];
    let cV = !1;

    function hV() {
      return cV || (0, jV.isTextEntry)(document.activeElement)
    }

    function lV() {
      var VV, eV;
      (0, TV.c)();
      const xV = null !== (VV = null === (eV = (0, FV.e)()) || void 0 === eV ? void 0 : eV.getBoundButton("keyboardChannel")) && void 0 !== VV ? VV : null;
      return xV ? (0, CV.jsx)(tV.c, {
        className: "ChatInputChannelGlyph",
        glyph: xV
      }) : null
    }

    function LV() {
      const {
        t: VV
      } = (0, GV.A)(), {
        isTouchScreen: eV
      } = (0, bV.l)(["isTouchScreen"]), xV = (0, PV.E)(), [UV, rV] = (0, JV.useState)(!1), tV = (0, JV.useRef)(UV), FV = (0, JV.useRef)(null), {
        messages: TV,
        reportedPlayers: DV,
        channel: hV
      } = (0, AV.s)(), LV = (0, JV.useRef)(0), mV = (0, JV.useRef)(""), KV = (0, JV.useRef)(null);
      var HV;
      HV = KV, (0, JV.useEffect)((() => {
        if (!(0, wV.isIOS)()) return;
        const VV = HV.current;
        let eV = null;
        const xV = xV => {
            const JV = xV.changedTouches[0];
            eV = "none" === getComputedStyle(VV).pointerEvents ? {
              id: JV.identifier,
              y: JV.clientY
            } : null
          },
          JV = xV => {
            const JV = eV,
              YV = JV && (0, WV.d)(xV.changedTouches, JV.id);
            YV && (xV.preventDefault(), VV.scrollBy({
              top: JV.y - YV.clientY,
              behavior: "instant"
            }), JV.y = YV.clientY)
          };
        return VV.addEventListener("touchstart", xV, {
          passive: !0
        }), VV.addEventListener("touchmove", JV, {
          passive: !1
        }), () => {
          VV.removeEventListener("touchstart", xV), VV.removeEventListener("touchmove", JV)
        }
      }), [HV]);
      const [uV, sV] = (0, JV.useState)(!1), [SV, IV] = (0, JV.useState)(!1), dV = (0, JV.useRef)(uV), OV = (0, JV.useRef)(null), Ve = (0, JV.useRef)(!1), ee = (0, JV.useRef)(null), xe = (0, JV.useRef)(null), Je = (0, JV.useRef)(null), Ye = (0, JV.useRef)(Qe);
      Ye.current = Qe;
      const Ue = (0, zV.h)();

      function ye() {
        tV.current = !1, rV(!1), xe.current.blur()
      }

      function pe(VV) {
        dV.current = VV, sV(VV)
      }

      function Qe() {
        const VV = xe.current.value;
        xe.current.value = "", ne(VV)
      }

      function ne(VV) {
        (0, AV.q)(VV), LV.current = 0, pe(!1)
      }

      function we(VV, eV) {
        0 === LV.current && (mV.current = xe.current.value);
        const xV = (0, AV.m)(LV.current + VV, eV);
        LV.current = xV.stepsBack, xe.current.value = 0 === xV.stepsBack ? mV.current : xV.text, setTimeout((() => {
          xe.current && xe.current.setSelectionRange(-1, -1)
        }), 0)
      }

      function Ze() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        KV.current && (!VV && dV.current || (KV.current.scrollTop = 1e5))
      }
      return (0, pV.b)(!0, UV, "ChatComponent"), (0, JV.useEffect)((() => (cV = UV, () => {
          cV = !1
        })), [UV]), (0, nV.g)("appManagerUpdated|openEverythingMenuName", (() => {
          (0, BV.q)() && rV(!1)
        })), (0, JV.useEffect)((() => {
          xe.current.addEventListener("blur", (VV => {
            if (null === xe.current) return;
            Array.from(document.querySelectorAll(":hover")).some((VV => VV.classList.contains("ChatInputChannel") || VV.classList.contains("ChatMsgSelectWrapper"))) || ((0, wV.isMobile)() && tV.current && "" !== xe.current.value && Ye.current(), rV(!1))
          }));
          const VV = VV => {
            FV.current.contains(VV.target) || (0, qV.p)(VV.target) || rV(!1)
          };
          document.addEventListener("touchstart", VV, {
            capture: !0
          });
          const eV = VV => {
            (0, XV.j)(VV.target) && (tV.current = !1, rV(!1))
          };
          document.addEventListener("mousedown", eV, {
            capture: !0
          });
          const xV = () => {
              clearTimeout(OV.current), pe(!0)
            },
            JV = () => {
              clearTimeout(OV.current), OV.current = setTimeout((() => {
                pe(!1), Ze()
              }), 4e3)
            },
            UV = () => {
              document.pointerLockElement ? (rV(!1), IV(!0), Ve.current = !1, pe(!1), Ze()) : IV(!1)
            };
          KV.current.addEventListener("pointermove", (VV => {
            "touch" === VV.pointerType || Ve.current || document.pointerLockElement || (Ve.current = !0, clearTimeout(OV.current))
          })), KV.current.addEventListener("pointerleave", (VV => {
            "touch" !== VV.pointerType && (Ve.current = !1, dV.current && JV())
          })), KV.current.addEventListener("pointerdown", (VV => {
            "touch" === VV.pointerType || document.pointerLockElement || (Ve.current = !0, xV())
          })), KV.current.addEventListener("wheel", (VV => {
            document.pointerLockElement || VV.deltaY >= 0 && Math.abs(KV.current.scrollTop) < 1 || (xV(), Ve.current || (OV.current = setTimeout((() => {
              pe(!1)
            }), 4e3)))
          }), {
            passive: !0
          }), KV.current.addEventListener("touchstart", xV), KV.current.addEventListener("touchend", JV), KV.current.addEventListener("touchcancel", JV), document.addEventListener("pointerlockchange", UV);
          const pV = VV => {
            if (Ue.shown && (tV.current || ! function(VV) {
                if ((0, jV.isTypingInInput)()) return !0;
                const eV = document.activeElement;
                return (eV instanceof HTMLButtonElement || "button" === (null === eV || void 0 === eV ? void 0 : eV.getAttribute("role"))) && ["Enter", " "].includes(VV.key)
              }(VV)) && "codeEditor" !== bV.b.get("openInGameMenuName") && "lobbyCodeEditor" !== bV.b.get("openInGameMenuName") && !YV.gameBridge.latest("connectedGame").replay)
              if (tV.current || !(0, BV.q)()) {
                if (tV.current) {
                  if ("ArrowUp" === VV.code || "ArrowDown" === VV.code) return we("ArrowUp" === VV.code ? 1 : -1, !1), void VV.stopPropagation();
                  if ("Tab" === VV.code) return AV.e.selectNextChannel(), VV.stopPropagation(), void VV.preventDefault();
                  if (VV.ctrlKey && fV.includes(aV[VV.keyCode])) return VV.preventDefault(), void VV.stopPropagation()
                }
                if ([...oV, "esc"].includes(yV()(VV)))
                  if ("esc" !== yV()(VV)) {
                    if (!tV.current || "/" !== yV()(VV)) {
                      if ("t" === yV()(VV)) {
                        if (tV.current) return void VV.stopPropagation();
                        VV.preventDefault()
                      }
                      tV.current && "" !== xe.current.value && Ye.current(), VV.repeat || (tV.current || "/" === yV()(VV) && (xe.current.value = "/", VV.preventDefault()), rV(!tV.current))
                    }
                  } else tV.current && (rV(!1), VV.stopPropagation());
                else tV.current && VV.stopPropagation()
              } else oV.includes(yV()(VV)) && (VV.preventDefault(), VV.stopPropagation(), (0, BV.e)(VV))
          };
          document.addEventListener("keydown", pV, {
            capture: !0
          });
          const QV = KV.current;
          let nV = !1;
          const ZV = new ResizeObserver((() => {
              nV && (nV = !1, Ze())
            })),
            vV = () => {
              nV = !0, ZV.unobserve(QV), ZV.observe(QV)
            };
          ee.current = vV;
          const kV = new MutationObserver(vV);
          return kV.observe(QV, {
            childList: !0,
            subtree: !0
          }), () => {
            document.removeEventListener("keydown", pV, {
              capture: !0
            }), document.removeEventListener("touchstart", VV, {
              capture: !0
            }), document.removeEventListener("mousedown", eV, {
              capture: !0
            }), document.removeEventListener("pointerlockchange", UV), ee.current = null, kV.disconnect(), ZV.disconnect(), clearTimeout(OV.current)
          }
        }), []), (0, qV.s)(xe, {
          open: () => {
            rV(!0)
          },
          close: () => {
            ye()
          },
          submit: () => {
            "" !== xe.current.value && Qe(), ye()
          },
          stepHistory: () => {
            we(1, !0)
          },
          sendLine: VV => {
            ne(VV), ye()
          },
          selectNextChannel: () => {
            AV.e.selectNextChannel()
          }
        }), (0, JV.useEffect)((() => {
          var VV;
          (tV.current = UV, xe.current) && (UV ? (LV.current = 0, xe.current.focus()) : (xe.current.blur(), null === (VV = ee.current) || void 0 === VV || VV.call(ee)))
        }), [UV]),
        function(VV, eV) {
          (0, JV.useLayoutEffect)((() => {
            if (!eV) return;
            RV.e.hold(), iV.keyboardUp();
            const xV = VV.current.closest(".InGameHeaderAndChat"),
              JV = (0, gV.d)((VV => {
                let {
                  top: eV,
                  height: JV
                } = VV;
                xV.style.setProperty("--keyboard-top", `${eV+JV}px`)
              }));
            return () => {
              JV(), xV.style.removeProperty("--keyboard-top"), RV.e.release(), iV.keyboardDown()
            }
          }), [VV, eV])
        }(FV, UV && eV), (0, CV.jsx)(CV.Fragment, {
          children: (0, CV.jsxs)("div", {
            ref: FV,
            className: kV()("Chat", {
              Chatting: UV
            }),
            "data-camera-keeper": UV ? "" : void 0,
            children: [(0, CV.jsx)("div", {
              ref: KV,
              className: kV()("ChatMessages", {
                HideScrollbar: !uV && !UV,
                NoScrolling: !(0, wV.isMobile)() && SV
              }),
              children: (0, CV.jsx)(NV.d, {
                messages: TV,
                reportedPlayers: DV
              })
            }), eV && !UV && (0, CV.jsx)("button", {
              type: "button",
              className: "ChatIconWrapper SmallTextLight",
              "aria-label": VV("general:chat"),
              ...(0, MV.e)((() => {
                rV(!0), Je.current.style.display = "flex", (0, wV.isIOS)() && xe.current.focus()
              }), "pointerup"),
              children: (0, CV.jsx)(EV.b, {
                name: "comment-dots",
                className: "ChatIcon"
              })
            }), (0, CV.jsxs)("div", {
              ref: Je,
              className: "ChatInputWrapper",
              style: {
                display: "" + (UV ? "flex" : "none")
              },
              children: [hV && (0, CV.jsx)("button", {
                type: "button",
                className: "ChatInputChannel",
                style: {
                  backgroundColor: hV.elementBgColor
                },
                onClick: VV => {
                  AV.e.selectNextChannel(), xe.current.focus()
                },
                children: (0, CV.jsx)("span", {
                  className: "SmallTextBold",
                  children: (0, CV.jsx)(QV.b, {
                    text: hV.elementContent
                  })
                })
              }), hV && xV && (0, CV.jsx)(lV, {}), (0, CV.jsx)("input", {
                className: "ChatInput",
                maxLength: vV.$c,
                ref: xe,
                spellCheck: "false",
                autoComplete: "off",
                autoCorrect: "off",
                "aria-label": VV("general:chat"),
                placeholder: hV ? `${hV.channelName} Chat${"touchOnly"===(0,ZV.c)()||xV?"":" [Tab]"}` : ""
              })]
            })]
          })
        })
    }
    const fV = ["W", "S", "D", "N", "T", "<tab>", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "<page-up>", "<page-down>", "B", "O", "H", "J", "F", "G", "J", "M", "<enter>", "L", "K", "E", "P", "R", "O", "U"]
  },
  37687: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => NV
    });
    var JV = xV(62),
      YV = xV(1146),
      UV = xV.n(YV),
      yV = xV(3062),
      pV = xV(32),
      QV = xV(2530),
      nV = xV(4004),
      wV = xV(2158),
      ZV = xV(27),
      vV = xV(2021),
      rV = xV(37695),
      kV = xV(2298),
      bV = xV(3069),
      EV = xV(2925),
      BV = xV(2913),
      jV = xV(2908),
      qV = xV(4020),
      tV = xV(37704),
      FV = xV(3535),
      TV = xV(2100),
      PV = xV(1321);

    function AV(VV) {
      for (let xV = VV.length - 1; xV >= 0; xV--) {
        const JV = "string" === typeof(eV = VV[xV]) ? eV : "str" in eV && "string" === typeof eV.str ? eV.str : "";
        if ("" !== JV.trim()) return JV
      }
      var eV;
      return ""
    }

    function NV(VV) {
      let {
        messages: eV,
        reportedPlayers: xV
      } = VV;
      return (0, PV.jsx)(PV.Fragment, {
        children: eV.map((VV => (0, PV.jsx)(XV, {
          message: VV,
          reportedPlayers: xV
        }, VV.clientChatMsgId)))
      })
    }
    const XV = (0, JV.memo)((function(VV) {
      var eV;
      let {
        message: xV,
        reportedPlayers: YV
      } = VV;
      const NV = (0, JV.useRef)(null),
        [XV] = (0, JV.useState)(FV.l),
        {
          author: MV
        } = xV,
        zV = null === MV || void 0 === MV ? void 0 : MV.id,
        GV = null !== (eV = null === MV || void 0 === MV ? void 0 : MV.name) && void 0 !== eV ? eV : void 0,
        WV = (0, wV.b)(GV),
        RV = null !== MV && void 0 !== MV && MV.profileEffect ? kV.f[MV.profileEffect] : void 0,
        gV = null !== MV && !MV.local,
        {
          worldCodeLineId: DV
        } = xV,
        iV = (0, TV.e)("hiddenPlayerNames", (VV => (0, bV.g)(gV, GV, VV))),
        CV = null === xV.serverChatMsgId || null === MV ? null : {
          text: AV(xV.content),
          hiddenFromReplay: xV.hiddenFromReplay,
          serverChatMsgId: xV.serverChatMsgId,
          authorId: MV.id
        },
        aV = (0, nV.l)(gV && null !== GV && void 0 !== GV ? GV : null),
        oV = (0, jV.g)(NV);
      (0, JV.useEffect)((() => () => {
        jV.c.closeIfOwner(NV)
      }), []);
      const cV = null !== MV && null !== DV,
        hV = [];
      gV && null !== CV && !YV.includes(zV) && hV.push({
        icon: "flag",
        text: cV ? "general:reportPlayer" : "general:report",
        onClick: () => {
          pV.h.QZ("OpenReportMenu", {
            playerEId: zV,
            playerName: GV,
            yZ: CV,
            serverChatMsgId: CV.serverChatMsgId
          })
        }
      }), null !== DV && hV.push({
        icon: "flag",
        text: cV ? "general:reportGameMessage" : "general:report",
        onClick: () => {
          pV.h.QZ("OpenReportMenu", {
            playerEId: null,
            playerName: void 0,
            yZ: {
              text: (0, yV.b)(xV.content),
              hiddenFromReplay: xV.hiddenFromReplay
            },
            serverChatMsgId: DV
          })
        }
      });
      const lV = gV && void 0 !== GV ? (0, qV.b)(aV, GV, CV) : [];
      return (0, PV.jsxs)("div", {
        ref: NV,
        className: UV()("MessageWrapper", {
          ChatMsgSelectWrapper: zV,
          Still: XV
        }),
        "data-replay-hidden": xV.hiddenFromReplay ? "" : void 0,
        onContextMenu: iV ? VV => {
          (0, EV.g)(NV, VV, {
            ...(0, bV.f)(zV, GV),
            showLocation: !1,
            status: null,
            extraActions: hV,
            moderationActions: (0, tV.b)(GV),
            friendRequestSource: "chat"
          }, ZV.b.get("isTouchScreen"))
        } : void 0,
        onPointerDown: iV ? VV => {
          (0, BV.e)(VV, (() => (0, bV.f)(zV, GV).playerSocialPreview))
        } : void 0,
        children: [RV && (0, PV.jsx)(RV, {
          className: "ChatMessageBackground",
          simple: !0
        }), (gV || null !== DV) && !oV && (0, PV.jsx)(rV.e, {
          className: "ChatFloatingActions",
          triggerElementRef: NV,
          options: [...hV.map((VV => {
            let {
              icon: eV,
              text: xV,
              onClick: JV
            } = VV;
            return {
              icon: eV,
              text: xV,
              onPointerDown: JV
            }
          })), ...lV, {
            icon: "user-plus",
            text: "socialBar:sendFriendRequest",
            onPointerDown: VV => {
              (0, QV.g)(GV, "chat")
            },
            analyticsClick: {
              id: "social.add_friend",
              value: "chat"
            },
            show: iV && "blocked" !== aV
          }]
        }), (0, PV.jsx)(vV.b, {
          text: xV.content,
          friendBadgeFor: WV ? GV : void 0
        }, xV.clientChatMsgId)]
      }, xV.clientChatMsgId)
    }))
  },
  38076: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => ZV,
      f: () => wV
    });
    var JV = xV(62),
      YV = xV(1146),
      UV = xV.n(YV),
      yV = xV(1551),
      pV = xV(1321);
    const QV = 200,
      nV = 160;

    function wV() {
      return window.matchMedia("(max-width: 900px)").matches
    }

    function ZV(VV) {
      let {
        side: eV,
        defaultSize: xV,
        covers: YV,
        onClose: wV,
        children: ZV
      } = VV;
      const vV = (0, JV.useRef)(null),
        [rV, kV] = (0, JV.useState)(null),
        [bV, EV] = (0, JV.useState)(xV);
      bV !== xV && (EV(xV), kV(null));
      const BV = (0, JV.useRef)(null),
        jV = "top" === eV,
        qV = VV => jV ? VV.clientY : VV.clientX,
        tV = () => {
          BV.current = null
        };
      return (0, pV.jsxs)("div", {
        ref: vV,
        className: UV()("ResizableSidePanel", eV && `ResizableSidePanel-${eV}`, {
          Covers: "always" === YV,
          CoversWhenNarrow: "narrow" === YV,
          Dragged: null !== rV
        }),
        style: {
          [jV ? "height" : "width"]: null !== rV && void 0 !== rV ? rV : xV
        },
        children: [ZV, eV && (0, pV.jsx)("div", {
          className: "ResizableSidePanelHandle",
          role: "separator",
          "aria-orientation": jV ? "horizontal" : "vertical",
          onPointerDown: VV => {
            if (0 !== VV.button) return;
            VV.preventDefault();
            const eV = vV.current,
              xV = Array.from(eV.parentElement.children).reduce(((VV, xV) => xV !== eV && "0" !== getComputedStyle(xV).flexGrow ? VV + (VV => jV ? VV.clientHeight : VV.clientWidth)(xV) : VV), 0),
              JV = jV ? eV.offsetHeight : eV.offsetWidth,
              YV = Math.min(QV, JV),
              UV = Math.max(YV, JV + Math.max(0, xV - nV));
            BV.current = {
              start: qV(VV),
              startSize: JV,
              minSize: YV,
              maxSize: UV
            }, VV.currentTarget.setPointerCapture(VV.pointerId)
          },
          onPointerMove: VV => {
            const xV = BV.current;
            if (!xV) return;
            const JV = "right" === eV ? xV.start - VV.clientX : qV(VV) - xV.start;
            kV(Math.min(xV.maxSize, Math.max(xV.minSize, xV.startSize + JV)))
          },
          onPointerUp: tV,
          onPointerCancel: tV,
          onLostPointerCapture: tV
        }), wV && (0, pV.jsx)(yV.k, {
          className: "ResizableSidePanelClose",
          onClick: wV
        })]
      })
    }
  },
  38098: (VV, eV, xV) => {
    xV.d(eV, {
      A: () => YV,
      E: () => PV,
      b: () => qV,
      f: () => EV,
      g: () => kV,
      h: () => rV,
      k: () => jV,
      o: () => NV,
      r: () => tV,
      u: () => TV,
      v: () => FV,
      y: () => AV
    });
    var JV = xV(62);
    const YV = 5e3,
      UV = 500,
      yV = 3e3;
    let pV = null,
      QV = null,
      nV = null;
    const wV = new Set;

    function ZV(VV) {
      pV = VV;
      for (const eV of wV) eV()
    }

    function vV() {
      if (!pV || void 0 !== pV.endedAt) return;
      null !== QV && (clearTimeout(QV), QV = null), ZV({
        ...pV,
        endedAt: Date.now()
      });
      const VV = nV;
      nV = null, null === VV || void 0 === VV || VV()
    }

    function rV(VV, eV) {
      let {
        submit: xV,
        reopen: JV
      } = eV;
      null !== QV && clearTimeout(QV), nV = JV, ZV({
        ...VV,
        startedAt: Date.now(),
        errors: []
      }), QV = setTimeout(vV, yV), xV()
    }

    function kV() {
      pV && void 0 === pV.endedAt && void 0 === pV.ranAt && (null !== QV && clearTimeout(QV), ZV({
        ...pV,
        ranAt: Date.now()
      }), QV = setTimeout(vV, YV))
    }
    const bV = 3;

    function EV(VV) {
      if (!pV || void 0 === pV.ranAt || void 0 !== pV.endedAt || pV.errors.includes(VV) || pV.errors.length >= bV) return;
      const eV = 0 === pV.errors.length;
      ZV({
        ...pV,
        errors: [...pV.errors, VV]
      }), eV && (null !== QV && clearTimeout(QV), QV = setTimeout(vV, UV))
    }

    function BV(VV) {
      var eV;
      return (null === (eV = pV) || void 0 === eV ? void 0 : eV.chatKey) === VV ? pV : null
    }

    function jV(VV) {
      const eV = BV(VV);
      return eV && void 0 !== eV.endedAt ? (ZV(null), eV) : null
    }

    function qV(VV) {
      var eV;
      (null === (eV = pV) || void 0 === eV ? void 0 : eV.chatKey) === VV && (null !== QV && (clearTimeout(QV), QV = null), nV = null, ZV(null))
    }
    const tV = "These changes from your last answer didn't go in. Make them again.";

    function FV(VV) {
      const eV = [...new Set(VV)].slice(0, bV);
      return `Fix this in your change: when it ran, the world showed ${1===eV.length?"this error":"these errors"}: ${eV.join(" ")}`
    }

    function TV(VV) {
      return `Your change didn't go in, because the code wouldn't run at all: ${VV.join(" ")} Send the whole change again with that fixed.`
    }

    function PV(VV) {
      return `Fix this in your change: ${VV.join(" ")}`
    }

    function AV(VV) {
      var eV;
      if (void 0 === VV.ranAt) return {
        title: "Couldn't test it",
        text: "Your change didn't go into your world, so it couldn't be tested. Press Submit to try it."
      };
      const xV = Math.max(1, Math.round(((null !== (eV = VV.endedAt) && void 0 !== eV ? eV : VV.ranAt) - VV.ranAt) / 1e3)),
        JV = `Your change ran in your world for ${xV} ${1===xV?"second":"seconds"}`;
      return 0 === VV.errors.length ? {
        title: "Tested: no errors",
        text: `${JV} without an error.`
      } : {
        title: 1 === VV.errors.length ? "Tested: it showed an error" : `Tested: it showed ${VV.errors.length} errors`,
        text: `${JV} and showed: ${VV.errors.join(" ")}`
      }
    }

    function NV(VV) {
      const [eV, xV] = (0, JV.useState)((() => BV(VV)));
      return (0, JV.useEffect)((() => {
        const eV = () => {
          xV(BV(VV))
        };
        return eV(), wV.add(eV), () => {
          wV.delete(eV)
        }
      }), [VV]), eV
    }
  },
  38104: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => YV,
      f: () => JV
    });
    const JV = {
      key: "worldCode",
      label: "World Code",
      codeBlock: !1
    };

    function YV(VV, eV, xV) {
      return {
        key: VV,
        label: `Code block at ${eV.join(", ")}`,
        codeBlock: !0,
        pos: eV,
        canChangePos: xV
      }
    }
  },
  38093: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => JV,
      c: () => UV,
      f: () => yV,
      g: () => YV
    });
    const JV = "code block",
      YV = "World Code/";

    function UV(VV) {
      return VV.trim().toLowerCase().startsWith(YV.toLowerCase())
    }

    function yV(VV) {
      return VV.trim().slice(YV.length).replace(/^\.?\//, "")
    }
  },
  38063: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => QV,
      e: () => nV,
      g: () => pV,
      k: () => wV
    });
    var JV = xV(62),
      YV = xV(40),
      UV = xV(99);
    class yV {
      constructor(VV, eV) {
        let xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.storageKey = VV, this.defaultValue = eV, this.canChange = xV, this.value = null, this.listeners = new Set, this.get = () => {
          if (!this.canChange) return this.defaultValue;
          if (null === this.value) {
            const VV = YV.m.getItem(this.storageKey);
            this.value = "boolean" === typeof VV ? VV : this.defaultValue
          }
          return this.value
        }, this.set = VV => {
          this.value = VV, YV.m.setItem(this.storageKey, VV);
          for (const eV of this.listeners) eV(VV)
        }
      }
      subscribe(VV) {
        return this.listeners.add(VV), () => {
          this.listeners.delete(VV)
        }
      }
    }
    const pV = new yV("codeEditorLightMode", !1),
      QV = new yV("codeEditorAiHints", !0),
      nV = new yV("codeEditorAiKeySafetyCheck", !0, UV.featureFlags.isOwnTopLevelSite);

    function wV(VV) {
      const [eV, xV] = (0, JV.useState)(VV.get);
      return (0, JV.useEffect)((() => {
        const eV = VV.subscribe(xV);
        return xV(VV.get()), eV
      }), [VV]), [eV, VV.set]
    }
  },
  38054: (VV, eV, xV) => {
    xV.d(eV, {
      B: () => zV,
      E: () => XV,
      F: () => vV,
      H: () => gV,
      I: () => AV,
      L: () => NV,
      M: () => RV,
      b: () => kV,
      e: () => QV,
      h: () => bV,
      j: () => MV,
      n: () => pV,
      q: () => wV,
      r: () => rV,
      v: () => EV,
      y: () => tV
    });
    var JV = xV(2688),
      YV = xV(38051);
    const UV = "bloxd-world-code-directory-sync",
      yV = "handles",
      pV = "[INVALID SCHEMATIC PLACEHOLDER]";

    function QV(VV, eV) {
      return `${VV}::${eV}`
    }
    const nV = new Set(["node_modules", ".git"]);

    function wV() {
      return "undefined" !== typeof window && "function" === typeof window.showDirectoryPicker
    }

    function ZV() {
      return new Promise(((VV, eV) => {
        const xV = indexedDB.open(UV, 1);
        xV.onupgradeneeded = () => {
          const VV = xV.result;
          VV.objectStoreNames.contains(yV) || VV.createObjectStore(yV)
        }, xV.onsuccess = () => {
          VV(xV.result)
        }, xV.onerror = () => {
          var VV;
          eV(null !== (VV = xV.error) && void 0 !== VV ? VV : new Error("Failed to open directory sync IndexedDB"))
        }
      }))
    }
    async function vV(VV, eV) {
      const xV = await ZV();
      try {
        await new Promise(((JV, YV) => {
          const UV = xV.transaction(yV, "readwrite");
          UV.objectStore(yV).put(eV, VV), UV.oncomplete = () => {
            JV()
          }, UV.onerror = () => {
            var VV;
            YV(null !== (VV = UV.error) && void 0 !== VV ? VV : new Error("Failed to store directory handle"))
          }
        }))
      } finally {
        xV.close()
      }
    }
    async function rV(VV) {
      const eV = await ZV();
      try {
        return await new Promise(((xV, JV) => {
          const YV = eV.transaction(yV, "readonly").objectStore(yV).get(VV);
          YV.onsuccess = () => {
            var VV;
            xV(null !== (VV = YV.result) && void 0 !== VV ? VV : null)
          }, YV.onerror = () => {
            var VV;
            JV(null !== (VV = YV.error) && void 0 !== VV ? VV : new Error("Failed to load directory handle"))
          }
        }))
      } finally {
        eV.close()
      }
    }
    async function kV(VV) {
      const eV = await ZV();
      try {
        await new Promise(((xV, JV) => {
          const YV = eV.transaction(yV, "readwrite");
          YV.objectStore(yV).delete(VV), YV.oncomplete = () => {
            xV()
          }, YV.onerror = () => {
            var VV;
            JV(null !== (VV = YV.error) && void 0 !== VV ? VV : new Error("Failed to clear directory handle"))
          }
        }))
      } finally {
        eV.close()
      }
    }
    async function bV(VV) {
      const eV = {
        mode: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readwrite"
      };
      return "granted" === await VV.queryPermission(eV) || "granted" === await VV.requestPermission(eV)
    }
    async function EV(VV) {
      if (!wV()) return null;
      try {
        const eV = await window.showDirectoryPicker({
          mode: "readwrite"
        });
        return await vV(VV, eV), eV
      } catch (eV) {
        if (function(VV) {
            return VV instanceof DOMException && "AbortError" === VV.name
          }(eV)) return null;
        throw eV
      }
    }

    function BV(VV) {
      return VV.startsWith(".") || nV.has(VV)
    }

    function jV(VV) {
      if (!VV) return !0;
      const eV = VV.split("/");
      for (const xV of eV)
        if ("" === xV || "." === xV || ".." === xV) return !1;
      return !0
    }
    async function qV(VV, eV, xV) {
      for await (const [UV, yV] of VV.entries()) {
        if ("directory" === yV.kind) {
          if (BV(UV)) continue;
          const VV = eV ? `${eV}/${UV}` : UV;
          if (!jV(VV)) continue;
          await qV(yV, VV, xV);
          continue
        }
        const VV = eV ? `${eV}/${UV}` : UV;
        if (!(0, JV.p)(VV) && !(0, YV.d)(VV)) continue;
        const pV = await yV.getFile();
        xV[VV] = (0, YV.d)(VV) ? await GV(pV) : await pV.text()
      }
    }
    async function tV(VV) {
      const eV = {};
      return await qV(VV, "", eV), eV
    }

    function FV(VV) {
      return !(!VV || VV !== VV.trim() || VV.startsWith("/") || VV.includes("\\") || VV.includes("\0")) && jV(VV)
    }
    async function TV(VV, eV, xV) {
      const JV = eV.split("/"),
        YV = JV[JV.length - 1];
      let UV = VV;
      for (let yV = 0; yV < JV.length - 1; yV++) UV = await UV.getDirectoryHandle(JV[yV], {
        create: xV
      });
      return {
        dir: UV,
        fileName: YV
      }
    }
    async function PV(VV, eV, xV) {
      if (!FV(eV)) throw new Error(`Refusing to write unsafe path: ${eV}`);
      const {
        dir: JV,
        fileName: YV
      } = await TV(VV, eV, !0), UV = await JV.getFileHandle(YV, {
        create: !0
      }), yV = await UV.createWritable();
      await yV.write(xV), await yV.close()
    }
    async function AV(VV, eV, xV) {
      const JV = await async function(VV, eV) {
        if (!FV(eV)) return null;
        try {
          const {
            dir: xV,
            fileName: JV
          } = await TV(VV, eV, !1), YV = await xV.getFileHandle(JV), UV = await YV.getFile();
          return await UV.text()
        } catch (xV) {
          if (xV instanceof DOMException && ("NotFoundError" === xV.name || "NotAllowedError" === xV.name)) return null;
          throw xV
        }
      }(VV, eV);
      JV !== xV && await PV(VV, eV, xV)
    }
    async function NV(VV, eV, xV) {
      if (!(0, JV.p)(eV) && !(0, YV.d)(eV)) throw new Error(`Refusing to write non-allowlisted path: ${eV}`);
      if ((0, YV.d)(eV)) {
        if (await WV(VV, eV) === pV) throw new Error(`Move the binary schematic ${eV} outside the linked folder before syncing its placeholder`)
      }
      await PV(VV, eV, xV)
    }
    async function XV(VV, eV) {
      if (!FV(eV)) throw new Error(`Refusing to remove unsafe path: ${eV}`);
      try {
        const {
          dir: xV,
          fileName: JV
        } = await TV(VV, eV, !1);
        await xV.removeEntry(JV)
      } catch (xV) {
        if (xV instanceof DOMException && ("NotFoundError" === xV.name || "NotAllowedError" === xV.name)) return;
        throw xV
      }
    }
    async function MV(VV, eV) {
      if (!FV(eV)) return null;
      try {
        const xV = eV.split("/");
        let JV = VV;
        for (const VV of xV) JV = await JV.getDirectoryHandle(VV);
        return JV
      } catch (xV) {
        if (xV instanceof DOMException && ("NotFoundError" === xV.name || "NotAllowedError" === xV.name)) return null;
        throw xV
      }
    }
    async function zV(VV, eV) {
      if ((0, JV.p)(eV) || (0, YV.d)(eV)) {
        if ((0, YV.d)(eV)) {
          if (await WV(VV, eV) === pV) throw new Error(`Refusing to remove a binary schematic: ${eV}`)
        }
        await XV(VV, eV)
      }
    }
    async function GV(VV) {
      if (VV.size > 64) return pV;
      const eV = await VV.text();
      return Array.from(eV).some((VV => {
        const eV = VV.charCodeAt(0);
        return eV < 9 || eV > 13 && eV < 32 || 65533 === eV
      })) ? pV : eV
    }
    async function WV(VV, eV) {
      try {
        const {
          dir: xV,
          fileName: JV
        } = await TV(VV, eV, !1);
        return await GV(await (await xV.getFileHandle(JV)).getFile())
      } catch (xV) {
        if (xV instanceof DOMException && "NotFoundError" === xV.name) return null;
        throw xV
      }
    }
    async function RV(VV, eV) {
      const xV = await tV(VV);
      for (const JV of Object.keys(xV)) JV in eV || (0, YV.d)(JV) || await zV(VV, JV);
      for (const [UV, yV] of Object.entries(eV))((0, JV.p)(UV) || (0, YV.d)(UV)) && await NV(VV, UV, yV)
    }

    function gV(VV, eV) {
      var xV, JV;
      let YV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const UV = null !== (xV = YV.debounceMs) && void 0 !== xV ? xV : 300,
        yV = null !== (JV = YV.pollMs) && void 0 !== JV ? JV : 1e3;
      let pV = !1,
        QV = null,
        nV = null,
        wV = null;
      const ZV = () => {
          pV || (QV && clearTimeout(QV), QV = setTimeout((() => {
            QV = null, vV()
          }), UV))
        },
        vV = async () => {
          if (!pV) try {
            if (!await bV(VV, "readwrite")) return;
            const xV = await tV(VV);
            pV || eV(xV)
          } catch (xV) {
            console.error("[WorldCodeDirectorySync] Failed to read watched directory", xV)
          }
        };
      vV();
      const rV = window.FileSystemObserver;
      if (rV) try {
        wV = new rV((() => {
          ZV()
        })), wV.observe(VV, {
          recursive: !0
        })
      } catch (kV) {
        console.warn("[WorldCodeDirectorySync] FileSystemObserver unavailable, falling back to polling", kV), wV = null
      }
      return wV || (nV = setInterval((() => {
        ZV()
      }), yV)), () => {
        pV = !0, QV && clearTimeout(QV), nV && clearInterval(nV), wV && wV.disconnect()
      }
    }
  },
  37651: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => XV,
      e: () => PV,
      f: () => AV,
      g: () => FV,
      i: () => TV
    });
    var JV = xV(62),
      YV = xV(1146),
      UV = xV.n(YV),
      yV = xV(3528),
      pV = xV(364),
      QV = xV(2693),
      nV = xV(32),
      wV = xV(2080),
      ZV = xV(40),
      vV = xV(2100),
      rV = xV(27),
      kV = xV(2109),
      bV = xV(1473),
      EV = xV(9428),
      BV = xV(2141),
      jV = xV(1220),
      qV = xV(1321);
    const tV = 7e3;

    function FV() {
      const {
        loadingOverlayVisible: VV,
        openInGameMenuName: eV,
        openEverythingMenuName: xV
      } = (0, rV.l)(["loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]);
      return VV || null !== eV || null !== xV
    }

    function TV(VV, eV, xV) {
      const YV = (0, JV.useRef)(xV);
      YV.current = xV;
      const UV = (0, JV.useRef)({
        card: VV,
        ms: 0
      });
      (0, JV.useEffect)((() => {
        if (eV || null === VV) return;
        UV.current.card !== VV && (UV.current = {
          card: VV,
          ms: 0
        });
        const xV = UV.current,
          JV = performance.now(),
          yV = setTimeout((() => {
            YV.current()
          }), tV - xV.ms);
        return () => {
          clearTimeout(yV), xV.ms += performance.now() - JV
        }
      }), [eV, VV])
    }
    const PV = (0, JV.memo)((function() {
      const {
        isTouchScreen: VV
      } = (0, rV.l)(["isTouchScreen"]), eV = (0, bV.E)();
      (0, yV.e)();
      const xV = (0, QV.j)("showBasicMovementControls"),
        [YV, nV] = (0, JV.useState)("movement"),
        wV = "movement" === YV,
        vV = eV && !1 !== xV;
      (0, JV.useEffect)((() => {
        "padActions" !== YV || vV || nV("done")
      }), [YV, vV]);
      const kV = FV();
      return TV("done" === YV ? null : YV, kV, (() => {
        nV("movement" === YV && (0, bV.m)() ? "padActions" : "done")
      })), ZV.m.getItem(pV.Ib) > 2 ? (0, qV.jsx)(MV, {
        showingMovementControls: !1
      }) : (0, qV.jsxs)(qV.Fragment, {
        children: [VV && !eV || !wV || !1 === xV ? null : (0, qV.jsxs)("div", {
          className: UV()("ControlsTutorialDiv", {
            Covered: kV
          }),
          children: [(0, qV.jsx)(AV, {}), (0, qV.jsx)(XV, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, qV.jsx)(XV, {
            header: "Jump",
            noaAction: "jump"
          })]
        }), "padActions" === YV && vV && (0, qV.jsx)(NV, {
          covered: kV
        }), (0, qV.jsx)(MV, {
          showingMovementControls: "done" !== YV
        })]
      })
    }));

    function AV() {
      const VV = (0, bV.E)();
      return (0, qV.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, qV.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), VV && (0, qV.jsx)(kV.d, {
          noaAction: "forward"
        }), !VV && (0, qV.jsxs)(qV.Fragment, {
          children: [(0, qV.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, qV.jsx)(kV.d, {
              noaAction: "forward"
            })
          }), (0, qV.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, qV.jsx)(kV.d, {
              noaAction: "left"
            }), (0, qV.jsx)(kV.d, {
              noaAction: "backward"
            }), (0, qV.jsx)(kV.d, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function NV(VV) {
      let {
        covered: eV
      } = VV;
      const {
        t: xV
      } = (0, jV.A)(), JV = (0, QV.j)("useInventory");
      return (0, qV.jsxs)("div", {
        className: UV()("ControlsTutorialDiv", {
          Covered: eV
        }),
        children: [(0, qV.jsx)(XV, {
          header: xV("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, qV.jsx)(XV, {
          header: xV("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== JV && (0, qV.jsx)(XV, {
          header: xV("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, qV.jsx)(XV, {
          header: xV("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function XV(VV) {
      let {
        header: eV,
        noaAction: xV
      } = VV;
      return (0, qV.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, qV.jsx)("div", {
          className: "KeyHeader",
          children: eV
        }), (0, qV.jsx)(kV.d, {
          noaAction: xV
        })]
      })
    }

    function MV(VV) {
      let {
        showingMovementControls: eV
      } = VV;
      const {
        isTouchScreen: xV
      } = (0, rV.l)(["isTouchScreen"]), YV = (0, bV.E)(), UV = (0, BV.e)("OpenShop"), [yV, pV] = (0, JV.useState)(!1), kV = `SeenShopControls|${(0,vV.e)("connectedGame",(VV=>VV.gameNameWithVariation))}`, jV = () => (!(0, bV.m)() || null !== (0, EV.c)("OpenShop")) && !ZV.m.getItem(kV) && wV.c.get("shopInfo") && !eV, tV = () => (pV(!0), ZV.m.setItem(kV, !0), (0, bV.m)() || nV.h.QZ("showShopTouchTutorial"), setTimeout((() => {
        pV(!1)
      }), 7e3));
      (0, JV.useEffect)((() => {
        let VV;
        const eV = nV.h.subscribe("showShopTutorial", (() => {
          jV() && (VV = tV())
        }));
        return () => {
          clearTimeout(VV), nV.h.unsubscribe(eV)
        }
      }), [eV]);
      const FV = (0, JV.useRef)();
      return (0, QV.g)("currencyAmounts", (VV => {
        if (jV()) {
          let xV = !1;
          const JV = wV.c.get("shopInfo");
          for (const YV in JV) {
            for (const UV in JV[YV].items) {
              var eV;
              const yV = JV[YV].items[UV];
              if (void 0 !== yV.currency && VV[yV.currency] && yV.cost <= VV[yV.currency].amount && (null === (eV = yV.hidden) || void 0 === eV || !eV)) {
                xV = !0;
                break
              }
            }
            if (xV) break
          }
          xV && (FV.current = tV())
        }
      })), (0, JV.useEffect)((() => () => {
        clearTimeout(FV.current)
      }), [eV]), !yV || YV && !UV ? null : (0, qV.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: xV && !YV ? null : (0, qV.jsx)(XV, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
  },
  5333: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => EV,
      i: () => BV
    });
    var JV = xV(1146),
      YV = xV.n(JV),
      UV = xV(62),
      yV = xV(1220),
      pV = xV(5335),
      QV = xV(2021),
      nV = xV(2693),
      wV = xV(5339),
      ZV = xV(1321);
    const vV = new WeakMap;
    let rV = 0;

    function kV(VV) {
      let eV = vV.get(VV);
      return void 0 === eV && (eV = rV++, vV.set(VV, eV)), eV
    }

    function bV(VV) {
      let {
        piece: eV
      } = VV;
      return "space" === eV.kind ? (0, ZV.jsx)(ZV.Fragment, {
        children: eV.text
      }) : (0, ZV.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${eV.delayMs}ms`
        },
        children: (0, ZV.jsx)(pV.e, {
          text: "icon" === eV.kind ? `[[${eV.icon}]]` : eV.text
        })
      })
    }

    function EV(VV) {
      let {
        display: eV
      } = VV;
      const {
        selectedLanguage: xV
      } = (0, yV.A)(), JV = (0, UV.useMemo)((() => (0, wV.c)((0, wV.g)(eV).plan.pieces)), [eV, xV.code]);
      return (0, ZV.jsxs)("div", {
        className: YV()("Dialogue", {
          DialogueAnimateIn: !1 !== eV.animateIn
        }),
        children: [eV.speakerName && (0, ZV.jsx)(QV.b, {
          text: eV.speakerName,
          className: "DialogueSpeaker"
        }), (0, ZV.jsx)("p", {
          className: "DialogueLine",
          children: JV.map(((VV, eV) => 1 === VV.length && "space" === VV[0].kind ? VV[0].text : (0, ZV.jsx)("span", {
            className: "DialogueGlue",
            children: VV.map(((VV, eV) => (0, ZV.jsx)(bV, {
              piece: VV
            }, eV)))
          }, eV)))
        })]
      })
    }
    const BV = (0, UV.memo)((function() {
      const VV = (0, nV.j)("dialogue");
      return (0, ZV.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: VV && (0, ZV.jsx)(EV, {
          display: VV
        }, kV(VV))
      })
    }))
  },
  37840: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => bV,
      f: () => EV
    });
    var JV = xV(62),
      YV = xV(1542),
      UV = xV(2100),
      yV = xV(37790),
      pV = xV(657),
      QV = xV(1146),
      nV = xV.n(QV),
      wV = xV(1321);
    const ZV = [vV()];

    function vV() {
      return {
        source: null,
        direction: null,
        bK: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function rV(VV) {
      return ZV.find((eV => null !== eV.source && eV.source === VV))
    }

    function kV(VV) {
      clearTimeout(VV.timeout), VV.source = null, VV.direction = null, VV.writtenAngle = null, VV.bK && (VV.bK.style.rotate = "")
    }
    const bV = (0, JV.memo)((function() {
      const [, VV] = (0, JV.useReducer)((VV => VV + 1), 0);
      return (0, YV.g)("damagedByOtherPlayer", (eV => {
        let {
          fU: xV,
          direction: JV
        } = eV;
        const YV = xV || "nonDirectional",
          UV = function(VV) {
            var eV;
            const xV = null !== (eV = rV(VV)) && void 0 !== eV ? eV : ZV.find((VV => null === VV.source));
            if (xV) return xV;
            const JV = {
              source: null,
              direction: null,
              bK: null,
              timeout: void 0,
              writtenAngle: null
            };
            return ZV.push(JV), JV
          }(YV);
        clearTimeout(UV.timeout), UV.source = YV, UV.direction = JV, UV.timeout = setTimeout((() => {
          kV(UV), VV()
        }), 800), VV()
      })), (0, UV.c)("kill", (eV => {
        let {
          killer: xV,
          victim: JV
        } = eV;
        const YV = xV.local && rV(JV.id);
        YV && (kV(YV), VV())
      })), (0, JV.useEffect)((() => {
        const VV = (0, yV.g)("turnDamageIndicators", EV);
        return () => {
          VV(), ZV.forEach(kV)
        }
      }), []), (0, wV.jsx)("div", {
        className: "DirectionalDamage",
        children: ZV.map(((VV, eV) => (0, wV.jsx)("div", {
          ref: eV => {
            VV.bK = eV
          },
          className: nV()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, pV.J)(VV.direction),
            DamageIndicatorIdle: null === VV.source
          })
        }, eV)))
      })
    }));

    function EV(VV) {
      for (const eV of ZV) {
        if (null === eV.source || (0, pV.J)(eV.direction)) continue;
        const xV = eV.direction - VV;
        xV !== eV.writtenAngle && (eV.writtenAngle = xV, eV.bK.style.rotate = `${xV}rad`)
      }
    }
  },
  9408: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => RV,
      e: () => MV,
      i: () => zV
    });
    var JV = xV(62),
      YV = xV(5020),
      UV = xV(1168),
      yV = xV(1542),
      pV = xV(32),
      QV = xV(3866),
      nV = xV(2388),
      wV = xV(1269),
      ZV = xV(2822),
      vV = xV(2051),
      rV = xV(2100),
      kV = xV(1220),
      bV = xV(27),
      EV = xV(1725),
      BV = xV(1146),
      jV = xV.n(BV),
      qV = xV(9413),
      tV = xV(9416),
      FV = xV(9420),
      TV = xV(9333),
      PV = xV(9422),
      AV = xV(3515),
      NV = (xV(9424), xV(1321));
    let XV = null;

    function MV() {
      return null !== XV
    }

    function zV() {
      return "pad" === XV
    }

    function GV() {
      return "inGame" === bV.b.get("gameState") && !(0, EV.n)()
    }

    function WV(VV) {
      return (0, tV.s)(VV, wV.k, tV.e, tV.g, tV.h)
    }
    const RV = (0, JV.memo)((function() {
      const {
        t: VV
      } = (0, kV.A)(), {
        userContext: eV
      } = (0, UV.d)(), [xV, bV] = (0, JV.useState)(null), [BV, MV] = (0, JV.useState)(null), zV = (0, JV.useRef)(null), RV = (0, JV.useCallback)((VV => {
        zV.current = VV, MV(VV)
      }), []), gV = (0, JV.useRef)(0), DV = (0, JV.useRef)(null), iV = (0, JV.useRef)({
        x: 0,
        y: 0
      }), [CV, aV] = (0, JV.useState)(0), oV = (0, JV.useMemo)((() => function(VV) {
        const eV = [];
        for (let JV = 0; JV < wV.k; JV++) {
          var xV;
          eV.push(null !== (xV = VV[JV]) && void 0 !== xV ? xV : null)
        }
        return eV
      }((0, ZV.f)(eV.getPlayerCosmetics().emote))), [eV, CV]);
      (0, rV.c)("cosmeticsUpdated", (VV => {
        VV.some((VV => VV.local && "emote" === VV.YJ)) && aV((VV => VV + 1))
      }));
      const cV = (0, JV.useRef)(!1),
        hV = (0, JV.useCallback)((function(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === VV && (0, FV.g)(), cV.current = eV, iV.current = {
            x: 0,
            y: 0
          }, RV(null), bV(VV)
        }), [RV]),
        lV = (0, JV.useCallback)((() => {
          bV(null), RV(null), iV.current = {
            x: 0,
            y: 0
          }
        }), [RV]),
        LV = (0, JV.useCallback)((VV => {
          if (Date.now() < gV.current) return;
          const eV = (0, nV.j)(VV),
            xV = !!eV.holdUntilMove,
            JV = xV ? 600 : Math.ceil(1e3 * eV.animation.animation_length / nV.d) + 200;
          gV.current = Date.now() + JV, DV.current = VV, vV.gameBridge.send("playEmote", VV), vV.gameBridge.send("applyTemporaryThirdPerson", xV ? {} : {
            durationMs: JV
          })
        }), []);
      (0, yV.g)("requestToggleEmoteWheel", (() => {
        null === xV ? GV() && hV("click") : lV()
      })), (0, yV.g)("requestEmoteWheelHoldOpen", (() => {
        null === xV && GV() && hV((0, qV.d)() ? "hold" : "click")
      })), (0, yV.g)("requestEmoteWheelPadOpen", (VV => {
        null !== xV || !GV() || (0, TV.c)() || (0, PV.r)() || hV("pad", VV)
      })), (0, yV.g)("requestEmoteRepeatLast", (() => {
        if (null !== xV || !GV() || (0, TV.c)() || (0, PV.r)()) return;
        const VV = DV.current;
        null !== VV && oV.includes(VV) ? LV(VV) : hV("pad", !0)
      }));
      const fV = () => {
        const VV = zV.current,
          eV = null !== VV ? oV[VV] : null;
        null !== eV && "pad" === xV && Date.now() < gV.current || (lV(), null !== eV && LV(eV))
      };
      (0, yV.g)("emoteWheelPadAim", (VV => {
        if ("pad" !== xV) return;
        const eV = (0, tV.D)(VV, wV.k, zV.current);
        RV(null !== eV && null !== oV[eV] ? eV : null)
      })), (0, yV.g)("requestEmoteWheelPadCommit", (VV => {
        "pad" !== xV || VV && cV.current || fV()
      })), (0, yV.g)("appManagerUpdated|activeInputDevice", (VV => {
        null !== xV && "pad" === xV !== ("gamepad" === VV) && lV()
      })), (0, JV.useLayoutEffect)((() => (XV = xV, (0, QV.v)("emoteWheel", "pad" === xV), pV.h.QZ(QV.n), () => {
        XV = null, (0, QV.v)("emoteWheel", !1), pV.h.QZ(QV.n)
      })), [xV]), (0, yV.g)("requestEmoteWheelHoldRelease", (() => {
        "hold" === xV && fV()
      })), (0, yV.g)("requestEmoteWheelClose", (() => {
        null !== xV && lV()
      })), (0, yV.g)("appManagerUpdated|gameState", (VV => {
        "inGame" !== VV && lV()
      }));
      const mV = () => {
        (0, EV.n)() && lV()
      };
      if ((0, yV.g)("appManagerUpdated|openEverythingMenuName", mV), (0, yV.g)("appManagerUpdated|openInGameMenuName", mV), (0, yV.g)("pointerLockUpdate", (VV => {
          VV || "hold" !== xV || lV()
        })), (0, JV.useEffect)((() => {
          if (null === xV) return;
          const VV = VV => {
            "Escape" === VV.key && (VV.stopImmediatePropagation(), VV.preventDefault(), lV())
          };
          return document.addEventListener("keydown", VV, !0), () => {
            document.removeEventListener("keydown", VV, !0)
          }
        }), [xV, lV]), (0, YV.b)(!0, "click" === xV, "EmoteWheelOverlay"), (0, JV.useEffect)((() => {
          if ("hold" === xV) return vV.gameBridge.send("holdEmoteWheel", !0), () => {
            vV.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [xV]), (0, JV.useEffect)((() => {
          if ("hold" !== xV) return;
          const VV = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            eV = tV.q * VV,
            JV = tV.p * VV,
            YV = VV => {
              let xV = iV.current.x + VV.movementX,
                YV = iV.current.y + VV.movementY;
              const UV = Math.hypot(xV, YV);
              if (UV > eV) {
                const VV = eV / UV;
                xV *= VV, YV *= VV
              }
              iV.current = {
                x: xV,
                y: YV
              }, RV(function(VV, eV, xV, JV) {
                if (Math.hypot(VV, eV) < xV) return null;
                const YV = (0, tV.w)(VV, eV, wV.k);
                return null === JV[YV] ? null : YV
              }(xV, YV, JV, oV))
            };
          return document.addEventListener("mousemove", YV), () => {
            document.removeEventListener("mousemove", YV)
          }
        }), [xV, oV, RV]), null === xV) return null;
      const KV = "hold" === xV || "pad" === xV,
        HV = null !== BV ? oV[BV] : null,
        uV = null !== HV ? (0, nV.j)(HV).displayName : VV("emotes:pickEmote");
      return (0, NV.jsx)("div", {
        className: jV()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === xV
        }),
        onMouseDown: VV => {
          VV.target === VV.currentTarget && lV()
        },
        children: (0, NV.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * tV.q + "rem",
            height: 2 * tV.q + "rem"
          },
          children: [(0, NV.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${tV.l} ${tV.l}`,
            children: [oV.map(((eV, xV) => {
              const JV = null !== eV,
                YV = KV && xV === BV;
              return (0, NV.jsx)("path", {
                d: WV(xV),
                className: jV()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: YV,
                  EmoteWheelWedgeDisabled: !JV
                }),
                onClick: VV => {
                  VV.stopPropagation(), null !== eV && (VV => {
                    lV(), LV(VV)
                  })(eV)
                },
                "aria-label": null !== eV ? (0, nV.j)(eV).displayName : VV("emotes:emptySlot")
              }, xV)
            })), (0, NV.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: tV.e,
              cy: tV.e,
              r: tV.h
            }), (0, NV.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: tV.e,
              cy: tV.e,
              r: tV.g
            }), KV && null !== BV && (0, NV.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: WV(BV)
            })]
          }), oV.map(((VV, eV) => {
            const xV = null !== VV,
              JV = KV && eV === BV,
              YV = (0, tV.A)(eV, wV.k),
              UV = tV.d * Math.cos(YV),
              yV = tV.d * Math.sin(YV);
            return (0, NV.jsx)("div", {
              className: jV()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: JV,
                EmoteWheelSlotIconDisabled: !xV
              }),
              style: {
                left: `calc(50% + ${UV}rem)`,
                top: `calc(50% + ${yV}rem)`,
                backgroundImage: xV ? `url(${(0,AV.g)("emote",VV)})` : void 0
              },
              "aria-hidden": !0
            }, eV)
          })), (0, NV.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: uV
          })]
        })
      })
    }))
  },
  37695: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => EV
    });
    var JV = xV(62),
      YV = xV(78),
      UV = xV(1220),
      yV = xV(1146),
      pV = xV.n(yV),
      QV = xV(1838),
      nV = xV(1414),
      wV = xV(1309),
      ZV = xV(1586),
      vV = xV(1764),
      rV = xV(1578),
      kV = xV(1321);
    const bV = 14;

    function EV(VV) {
      let {
        className: eV,
        triggerElementRef: xV,
        options: yV
      } = VV;
      const {
        t: EV
      } = (0, UV.A)(), [BV, jV] = (0, JV.useState)(!1), [qV, tV] = (0, JV.useState)({
        x: 0,
        y: 0
      }), FV = (0, JV.useRef)(null);
      (0, JV.useEffect)((() => {
        let VV = null;
        const eV = eV => {
            VV = {
              x: eV.clientX,
              y: eV.clientY
            }
          },
          JV = eV => {
            if (null === VV || !(0, rV.d)(VV, eV)) return;
            VV = null;
            const xV = bV * (0, QV.getRemInPx)();
            tV({
              x: Math.min(eV.clientX, window.innerWidth - xV - 5),
              y: eV.clientY
            }), jV((VV => !VV))
          },
          YV = VV => {
            var eV;
            null !== (eV = FV.current) && void 0 !== eV && eV.contains(VV.relatedTarget) || jV(!1)
          },
          UV = xV.current;
        return UV.addEventListener("pointerdown", eV), UV.addEventListener("pointerup", JV), UV.addEventListener("mouseleave", YV), () => {
          UV.removeEventListener("pointerdown", eV), UV.removeEventListener("pointerup", JV), UV.removeEventListener("mouseleave", YV)
        }
      }), [xV]), (0, JV.useEffect)((() => {
        if (BV) return (0, vV.d)("pointerdown", (VV => {
          !FV.current || FV.current.contains(VV.target) || xV.current.contains(VV.target) || jV(!1)
        }))
      }), [BV, xV]), (0, JV.useLayoutEffect)((() => {
        if (!BV || !FV.current) return;
        const VV = FV.current.getBoundingClientRect().height,
          eV = Math.max(5, window.innerHeight - VV - 5);
        qV.y > eV && tV({
          x: qV.x,
          y: eV
        })
      }), [BV, qV]), (0, wV.s)("popup", FV, (() => {
        jV(!1)
      }), BV);
      const TV = yV.filter((VV => !1 !== VV.show));
      return BV && 0 !== TV.length ? (0, YV.createPortal)((0, kV.jsx)("div", {
        ref: FV,
        className: pV()("FloatingActions", {
          [eV]: eV
        }),
        style: {
          width: `${bV}rem`,
          top: qV.y,
          left: qV.x
        },
        children: TV.map((VV => {
          let {
            icon: eV,
            text: xV,
            onPointerDown: JV,
            analyticsClick: YV
          } = VV;
          return (0, kV.jsxs)("div", {
            className: "FloatingAction",
            "data-pad-focusable": !0,
            onPointerUp: VV => {
              void 0 !== YV && (0, ZV.reportAnalyticsClick)(YV), JV(VV), jV(!1), VV.stopPropagation()
            },
            children: [(0, kV.jsx)(nV.b, {
              name: eV
            }), (0, kV.jsx)("div", {
              children: EV(xV)
            })]
          }, xV)
        }))
      }), function() {
        var VV;
        return null !== (VV = document.querySelector(".WholeAppWrapperInner")) && void 0 !== VV ? VV : document.body
      }()) : null
    }
  },
  37855: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => vy
    });
    var JV = xV(37756),
      YV = xV(62),
      UV = xV(2202),
      yV = xV(5011),
      pV = xV(5015),
      QV = xV(2693),
      nV = xV(2051),
      wV = xV(1321);

    function ZV(VV) {
      let {
        className: eV,
        style: xV,
        vw: JV,
        maxPx: YV,
        children: UV
      } = VV;
      console.assert("number" === typeof JV && "number" === typeof YV, "vw and maxPx passed to Text must be numbers");
      const yV = window.innerWidth * (JV / 100) > YV ? `${YV}px` : `${JV}vw`;
      return (0, wV.jsx)("div", {
        className: eV,
        style: {
          ...xV,
          fontSize: yV
        },
        children: UV
      })
    }
    var vV = xV(37860),
      rV = xV(1551),
      kV = xV(32),
      bV = xV(2080),
      EV = xV(1414);

    function BV(VV) {
      let {
        tasks: eV,
        lastDisplayedTasks: xV
      } = VV;
      return (0, wV.jsx)(wV.Fragment, {
        children: Object.keys(eV).map((VV => (0, wV.jsx)(jV, {
          task: eV[VV],
          lastDisplayedAs: xV[VV]
        }, eV[VV].text)))
      })
    }

    function jV(VV) {
      let {
        task: eV,
        lastDisplayedAs: xV
      } = VV;
      const [JV, UV] = (0, YV.useState)(null !== xV && void 0 !== xV && xV.progress ? xV.progress / eV.goal : 0), [yV, pV] = (0, YV.useState)(!1), [QV, nV] = (0, YV.useState)(eV.claimed || !1);
      return (0, YV.useEffect)((() => {
        UV(eV.progress / eV.goal)
      }), [eV.progress, eV.goal]), QV ? null : (0, wV.jsxs)("div", {
        className: "Task",
        children: [(0, wV.jsx)("div", {
          className: "TaskDescDiv",
          children: (0, wV.jsx)(ZV, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: eV.text
          })
        }), eV.progress < eV.goal ? (0, wV.jsxs)("div", {
          className: "TaskProgress",
          children: [0 !== JV ? (0, wV.jsx)("div", {
            className: "TaskProgressForeground",
            style: {
              width: 100 * JV + "%"
            }
          }) : null, (0, wV.jsx)("div", {
            className: "TaskProgressText",
            children: `${eV.progress}/${eV.goal}`
          })]
        }) : (0, wV.jsx)(rV.m, {
          className: "ClaimRewardButton",
          onClick: () => {
            pV(!0)
          },
          children: (0, wV.jsx)(ZV, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: "Claim Reward"
          })
        }), yV ? (0, wV.jsx)(qV, {
          task: eV,
          close: () => {
            eV.claimed = !0, nV(!0), pV(!1)
          }
        }) : null]
      })
    }

    function qV(VV) {
      let {
        task: eV,
        close: xV
      } = VV;
      const [JV, UV] = (0, YV.useState)({}), [yV, pV] = (0, YV.useState)("closed");
      (0, YV.useEffect)((() => {
        let VV;
        return "animStart" === yV && (VV = setTimeout((() => {
          pV("animEnd")
        }), 700)), () => {
          clearTimeout(VV)
        }
      }), [yV]), (0, vV.d)((() => {
        nV.gameBridge.send("completeTask", eV.text)
      }));
      const ZV = (0, QV.j)("currencyAmounts");
      return (0, wV.jsxs)("div", {
        className: "RewardBackground",
        onClick: () => {
          if ("animEnd" === yV)
            if (0 === eV.rewards.length) xV(), nV.gameBridge.send("completeTask", eV.text);
            else {
              const VV = {
                ...bV.c.get("currencyAmounts")
              };
              for (const eV in JV) VV[eV] = {
                ...VV[eV],
                amount: VV[eV].amount + JV[eV]
              };
              bV.c.apply({
                currencyAmounts: VV
              }), pV("closed")
            }
          else "closed" === yV && (UV(eV.rewards.pop()), pV("animStart"))
        },
        children: [(0, wV.jsx)("img", {
          className: "Chest",
          alt: "closed" !== yV ? "open chest" : "closed chest",
          src: `/textures/miscImages/Treasure Chest ${"closed"!==yV?"open":"closed"}.png`
        }), (0, wV.jsx)("div", {
          className: "Rewards",
          children: "closed" !== yV ? Object.keys(JV).map((VV => {
            const eV = null === ZV || void 0 === ZV ? void 0 : ZV[VV];
            return !eV || eV.hidden ? null : (0, wV.jsxs)("div", {
              className: "Reward",
              children: [(0, wV.jsx)(EV.b, {
                name: eV.icon,
                className: "3x UiCurrencyIcon RewardIcon",
                style: {
                  color: eV.iconColour
                }
              }), (0, wV.jsx)("div", {
                className: "RewardAmountText",
                children: "animStart" === yV ? 0 : JV[VV]
              })]
            }, VV)
          })) : null
        }), "animStart" === yV ? (0, wV.jsx)(tV, {}) : null, (0, wV.jsx)("div", {
          className: "ChestsLeft",
          children: eV.rewards.length
        })]
      })
    }

    function tV() {
      const [VV, eV] = (0, YV.useState)(0);
      (0, YV.useEffect)((() => {
        eV(1)
      }), []);
      return (0, wV.jsx)(wV.Fragment, {
        children: Array.from({
          length: 40
        }).map(((eV, xV) => (0, wV.jsx)(EV.b, {
          name: "star",
          className: "3x UiCurrencyIcon OpenStar",
          style: {
            bottom: 50 * VV * Math.cos(xV / 40 * (2 * Math.PI)) + 50 + "vh",
            left: 50 * VV * Math.sin(xV / 40 * (2 * Math.PI)) + "vh",
            opacity: 0 === VV ? 1 : 0
          }
        }, xV)))
      })
    }
    kV.h.subscribe("requiredLibrariesLoaded", (() => {
      setTimeout((() => {
        const VV = new Image,
          eV = new Image;
        VV.src = "/textures/miscImages/Treasure Chest open.png", eV.src = "/textures/miscImages/Treasure Chest closed.png"
      }), 1e4)
    }));
    var FV = xV(3551),
      TV = xV(1168),
      PV = xV(2021),
      AV = xV(1542),
      NV = xV(375),
      XV = xV(2100),
      MV = xV(1408);

    function zV(VV) {
      var eV, xV;
      let {
        byId: JV,
        localId: YV
      } = VV;
      return null === YV ? null : null !== (eV = null === (xV = JV[YV]) || void 0 === xV ? void 0 : xV.name) && void 0 !== eV ? eV : null
    }

    function GV(VV) {
      let {
        lbStats: eV,
        storedState: xV = {}
      } = VV;
      const {
        userContext: JV
      } = (0, TV.d)(), UV = (0, XV.e)("players", zV), [yV, pV] = (0, YV.useState)(xV.selectedCat || (null === eV || void 0 === eV ? void 0 : eV[0]) || null), [QV, ZV] = (0, YV.useState)(xV.selectedTimeframe || "Today"), [vV, rV] = (0, YV.useState)(null);
      (0, YV.useEffect)((() => {
        null === yV && null !== eV && eV.length > 0 && pV(eV[0])
      }), [eV, yV]);
      const [kV, bV] = (0, YV.useState)(xV.seeingTop || !1), [EV, BV] = (0, YV.useState)(!1), jV = (0, YV.useCallback)((() => {
        null !== yV && null !== QV && (nV.gameBridge.send("requestLeaderboard", {
          category: yV.value,
          timeframe: QV,
          seeTop: kV
        }), tV(!0), gV && DV(null))
      }), [yV, QV, xV, kV]);
      (0, YV.useEffect)((() => {
        jV(), xV.selectedCat = yV, xV.selectedTimeframe = QV, xV.seeingTop = kV
      }), [yV, QV, xV, kV, jV]), (0, YV.useEffect)((() => {
        if ((null === vV || void 0 === vV ? void 0 : vV.length) > 0)
          if (kV) kV && BV(null === GV(vV));
          else {
            for (const VV of vV)
              if (1 === VV.place) return void BV(!1);
            BV(!0)
          }
      }), [vV, kV]), (0, AV.g)("leaderboardResponse", (VV => {
        let {
          category: xV,
          timeframe: JV,
          data: YV
        } = VV;
        for (let UV = 0; UV < eV; UV++)
          if (eV[UV].value === xV) {
            pV(eV[UV]);
            break
          } ZV(JV), rV(YV), tV(!1)
      }));
      const [qV, tV] = (0, YV.useState)(!0);

      function GV(VV) {
        const eV = zV(nV.gameBridge.latest("players"));
        for (let xV = 0; xV < VV.length; xV++)
          if (VV[xV].name === eV) return VV[xV].place;
        return null
      }
      const [WV, RV] = (0, YV.useState)(!1), [gV, DV] = (0, YV.useState)(null);
      (0, YV.useEffect)((() => {
        if (vV && !WV) {
          const VV = GV(vV);
          VV < (xV.lastSeenPlayerPlace || 0) && DV(xV.lastSeenPlayerPlace - VV), RV(!0)
        }
      }), [vV, xV, WV]), (0, YV.useEffect)((() => () => {
        vV && (xV.lastSeenPlayerPlace = GV(vV))
      }), [vV, xV]);
      const iV = (0, YV.useRef)(null),
        [CV, aV] = (0, YV.useState)(void 0);
      return (0, YV.useEffect)((() => {
        var VV, eV;
        CV !== (null === (VV = iV.current) || void 0 === VV ? void 0 : VV.offsetHeight) && aV(null === (eV = iV.current) || void 0 === eV ? void 0 : eV.offsetHeight)
      })), JV.isLoggedIn() ? (0, wV.jsxs)(wV.Fragment, {
        children: [(0, wV.jsxs)("div", {
          className: "LeaderboardSelectors",
          children: [(0, wV.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, wV.jsx)(FV.c, {
              options: eV.map((VV => ({
                label: VV.label,
                value: VV.value
              }))),
              value: yV,
              onChange: VV => {
                pV(VV)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), (0, wV.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, wV.jsx)(FV.c, {
              options: NV.Pc.map((VV => ({
                value: VV,
                label: VV,
                className: "LBDropdownMenuItem"
              }))),
              value: QV,
              onChange: VV => {
                ZV(VV.label)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), EV ? (0, wV.jsx)("div", {
            className: "SeeTopText",
            onClick: () => {
              bV(!kV)
            },
            children: kV ? "See Yourself" : "See Top"
          }) : null]
        }), (0, wV.jsx)("div", {
          className: "LBTableWrapper",
          children: qV ? (0, wV.jsx)("div", {
            className: "LoaderContainer",
            children: (0, wV.jsx)(MV.d, {})
          }) : null === gV ? (0, wV.jsx)(wV.Fragment, {
            children: (0, wV.jsxs)("table", {
              className: "LBTable",
              children: [(0, wV.jsx)("thead", {
                className: "LBTableTHead",
                ref: iV,
                children: (0, wV.jsxs)("tr", {
                  children: [(0, wV.jsx)("th", {
                    className: "LBTablePlaceTH LBTableTH",
                    children: "PLACE"
                  }), (0, wV.jsx)("th", {
                    className: "LBTablePlayerTH LBTableTH",
                    children: "PLAYER"
                  }), (0, wV.jsx)("th", {
                    className: "LBTableValueTH LBTableTH",
                    children: yV.label.toUpperCase()
                  })]
                })
              }), (0, wV.jsx)("tbody", {
                children: vV.map((VV => (0, wV.jsxs)("tr", {
                  className: "LBTableTR " + (VV.name === UV ? "LBTableTRYou" : ""),
                  children: [(0, wV.jsx)("td", {
                    className: "LBTableTD",
                    children: `#${VV.place}`
                  }), (0, wV.jsx)("td", {
                    className: "LBTableTD",
                    children: (0, wV.jsx)(PV.b, {
                      text: [{
                        entityName: VV.name
                      }]
                    })
                  }), (0, wV.jsx)("td", {
                    className: "LBTableTD",
                    children: VV.stat
                  })]
                }, VV.name)))
              })]
            })
          }) : (0, wV.jsx)("div", {
            className: "LBIncreaseWrapper",
            onClick: () => {
              DV(null)
            },
            children: (0, wV.jsxs)("div", {
              className: "LBIncreaseDiv",
              children: [(0, wV.jsx)("div", {
                className: "TriangleUp"
              }), (0, wV.jsx)("div", {
                className: "LBIncreaseText",
                children: `${gV} Place${gV>1?"s":""}`
              })]
            })
          })
        })]
      }) : (0, wV.jsxs)("div", {
        className: "LBLoginDiv",
        children: [(0, wV.jsx)("div", {
          className: "LBLoginInfo",
          children: "Login to see the leaderboard"
        }), (0, wV.jsx)("div", {
          className: "LBLoginInfo",
          children: "You can login from the top left homescreen"
        })]
      })
    }
    var WV = xV(3528),
      RV = xV(99),
      gV = xV(40),
      DV = xV(3862);
    const iV = (0, YV.memo)((function(VV) {
      let {
        show: eV,
        onClose: xV
      } = VV;
      (0, WV.e)();
      const JV = (0, QV.j)("_tasks"),
        UV = (0, QV.j)("_availableLeaderboards"),
        [nV, ZV] = (0, YV.useState)({});
      JV && Object.keys(JV).length > 0 && 0 === Object.keys(nV).length && ZV(JV);
      const [vV] = (0, YV.useState)({
        tasks: {},
        leaderboard: {}
      }), rV = {
        tasks: {
          Title: "Tasks",
          getIsDefined: () => !!JV && Object.keys(JV).length > 0,
          content: (0, wV.jsx)(BV, {
            tasks: JV,
            lastDisplayedTasks: nV
          })
        },
        leaderboard: {
          Title: "Leaderboard",
          getIsDefined: () => (null === UV || void 0 === UV ? void 0 : UV.length) > 0,
          content: (0, wV.jsx)(GV, {
            lbStats: UV,
            storedState: vV.leaderboard
          })
        }
      };

      function kV() {
        for (const VV in rV)
          if (rV[VV].getIsDefined()) return VV;
        return null
      }
      const [bV, EV] = (0, YV.useState)(kV());

      function jV() {
        ZV({
          ...JV
        }), xV()
      }(0, YV.useEffect)((() => {
        bV || EV(kV())
      }), [kV()]), (0, pV.c)(!0, bV && eV), (0, YV.useEffect)((() => {
        eV && !bV && (console.log("CLOSE"), jV())
      }), [eV, bV]);
      const [qV, tV] = (0, YV.useState)(!1);
      return (0, YV.useEffect)((() => {
        eV && bV && !qV && tV(!0)
      }), [eV, qV, bV]), (0, YV.useEffect)((() => {
        !qV && JV && "tasks" !== bV && EV("tasks")
      }), [qV, JV, bV]), (0, wV.jsx)(wV.Fragment, {
        children: bV ? (0, wV.jsx)(DV.d, {
          className: "RetentionFeaturesWrapper",
          show: eV,
          children: (0, wV.jsxs)(yV.e, {
            close: jV,
            escDoesExit: !1,
            closeClassnameList: ["VerticalMenuScreenDiv"],
            togglePointerLock: !1,
            globallyUniqueKey: "RetentionFeaturesComponent",
            children: [(0, wV.jsxs)("div", {
              className: "VerticalMenuScreenDiv",
              children: [(0, wV.jsx)(aV, {}), (0, wV.jsxs)("div", {
                className: "MenuDiv",
                children: [(0, wV.jsx)(CV, {
                  setCategory: EV,
                  menuCategories: rV,
                  selectedCat: bV
                }), (0, wV.jsx)("div", {
                  className: "MenuCategoryContainer",
                  children: rV[bV].content
                })]
              })]
            }), (0, wV.jsx)("div", {
              className: "BottomScreenMenuWrapper",
              children: RV.featureFlags.useDiscord && (0, wV.jsx)("div", {
                className: "DiscordMenuDivDiv",
                children: (0, wV.jsx)("div", {
                  className: "DiscordMenuDiv",
                  children: (0, wV.jsx)(oV, {
                    tasks: JV
                  })
                })
              })
            })]
          })
        }) : null
      })
    }));

    function CV(VV) {
      let {
        selectedCat: eV,
        setCategory: xV,
        menuCategories: JV
      } = VV;
      return (0, wV.jsx)("div", {
        className: "MenuHeader",
        children: Object.keys(JV).map((VV => JV[VV].getIsDefined() ? (0, wV.jsx)("div", {
          className: "MenuHeaderCategory " + (VV === eV ? "SelectedHeaderCat" : "UnselectedHeaderCat"),
          onClick: () => {
            xV(VV)
          },
          children: JV[VV].Title
        }, VV) : null))
      })
    }

    function aV() {
      const VV = (0, QV.j)("currencyAmounts");
      return (0, wV.jsx)("div", {
        className: "TopScreenCurrencies",
        children: Object.keys(null !== VV && void 0 !== VV ? VV : {}).map((eV => {
          const xV = VV[eV];
          return xV.hidden ? null : (0, wV.jsxs)("div", {
            className: "TopScreenCurrencyDiv",
            children: [(0, wV.jsx)(EV.b, {
              name: xV.icon,
              className: "3x UiCurrencyIcon",
              style: {
                color: xV.iconColour
              }
            }), (0, wV.jsx)("div", {
              className: "UiCurrencyAmount",
              children: xV.amount
            })]
          }, eV)
        }))
      })
    }

    function oV(VV) {
      let {
        tasks: eV
      } = VV;
      return (0, wV.jsxs)("a", {
        className: "MenuDiscordButtonWrapper",
        href: "https://discord.gg/playbloxd",
        target: "_blank",
        rel: "noreferrer",
        children: [(0, wV.jsx)(EV.b, {
          name: "discord",
          kit: "brands",
          className: "DiscordButton",
          onClick: () => {
            gV.m.setItem("DiscordPressed", !0), nV.gameBridge.send("setServerCookie", {
              key: "joinDiscord",
              value: "true"
            }), "joinDiscord" in eV && kV.h.QZ("clientTaskProgress", {
              taskId: "joinDiscord",
              progress: 1
            })
          }
        }), (0, wV.jsx)(UV.c, {})]
      })
    }
    var cV = xV(27),
      hV = xV(1725),
      lV = xV(37677),
      LV = xV(35213),
      fV = xV(5103),
      mV = xV(165),
      KV = xV(1245),
      HV = xV(1446),
      uV = xV(2945),
      sV = xV(1220),
      SV = xV(1734),
      IV = xV(2573),
      dV = xV(2530),
      OV = xV(1976),
      Ve = xV(2171),
      ee = xV(1290),
      xe = xV(1586),
      Je = xV(37869),
      Ye = xV(37871),
      Ue = xV(37875),
      ye = xV(37882),
      pe = xV(37891),
      Qe = xV(2997);

    function ne(VV) {
      let {
        playersHere: eV,
        exclude: xV,
        uF: JV
      } = VV;
      const {
        t: UV
      } = (0, sV.A)(), yV = (0, Qe.k)(Qe.g), [pV, QV] = (0, YV.useState)([]), nV = [], ZV = (VV, eV) => {
        const JV = [...xV, ...nV.map((VV => VV.player.name))];
        nV.length < 3 && !(0, Ye.k)(JV, VV.name) && nV.push({
          player: VV,
          status: eV
        })
      };
      for (const YV of eV) ZV((0, pe.k)(YV.name, YV.cosmetics, YV.ranks), UV("worldSocial:inThisWorld"));
      if ("loaded" === yV.state.status)
        for (const YV of yV.state.recentPlayers) YV.preview.name && !YV.preview.isError && ZV({
          ...YV.preview,
          location: {
            status: "offline"
          }
        }, UV("worldSocial:playedWithYou"));
      const vV = VV => {
        QV((eV => [...eV, VV])), JV(VV).finally((() => {
          QV((eV => eV.filter((eV => eV !== VV))))
        }))
      };
      return (0, wV.jsx)(wV.Fragment, {
        children: nV.map(((VV, eV) => {
          let {
            player: xV,
            status: JV
          } = VV;
          return (0, wV.jsx)(pe.h, {
            zIndex: nV.length - eV,
            player: xV,
            status: JV,
            onSendFriendRequest: () => {
              vV(xV.name)
            },
            actions: (0, wV.jsx)(HV.d, {
              tooltipInner: (0, wV.jsx)(wV.Fragment, {
                children: UV("recentPlayers:addFriend")
              }),
              delayShow: 0,
              hoverOnly: !0,
              children: (0, wV.jsx)(rV.f, {
                className: "FriendRequestButton",
                disabled: pV.includes(xV.name),
                ariaLabel: `${UV("recentPlayers:addFriend")} ${xV.name}`,
                onClick: () => {
                  vV(xV.name)
                },
                children: (0, wV.jsx)(EV.b, {
                  name: "user-plus"
                })
              })
            })
          }, `suggestion:${xV.name}`)
        }))
      })
    }
    var we = xV(37902),
      Ze = xV(37911),
      ve = xV(1252),
      re = xV(1601),
      ke = xV(4742),
      be = xV(313),
      Ee = xV(5081);
    const Be = ["auto", "auto_existing"];

    function je(VV) {
      return Be.includes(VV)
    }

    function qe(VV, eV) {
      const xV = (0, ve.qb)(VV);
      return null !== eV && (0, ve.qb)(eV) === xV || (0, Ee.d)().some((VV => (0, ve.qb)(VV.name) === xV))
    }
    const te = new Set;

    function Fe(VV) {
      return `worldSocialSeen:${VV}`
    }

    function Te(VV) {
      return !VV || te.has(VV) || !0 === gV.m.getItem(Fe(VV))
    }

    function Pe(VV) {
      VV && !te.has(VV) && (te.add(VV), gV.m.setItem(Fe(VV), !0))
    }
    var Ae = xV(2703),
      Ne = xV(2712);

    function Xe(VV) {
      let {
        show: eV,
        onClose: xV,
        opener: JV
      } = VV;
      const {
        lobbyName: UV,
        shownLobbyName: pV
      } = (0, XV.h)("connectedGame");
      return (0, YV.useEffect)((() => {
        eV && (0, xe.reportAnalyticsClick)({
          id: "world_social.open",
          value: JV
        })
      }), [eV]), (0, wV.jsx)(yV.e, {
        show: eV && null !== UV,
        close: xV,
        togglePointerLock: !1,
        className: "WorldSocialBackgroundScreen",
        globallyUniqueKey: "WorldSocialPopup",
        doGameplayStartStopOnShow: !0,
        ignorePressesAsShown: "icon" !== JV,
        children: eV && null !== UV && (0, wV.jsx)(Me, {
          lobbyName: UV,
          worldCode: null !== pV && void 0 !== pV ? pV : UV,
          onClose: xV
        }, UV)
      })
    }

    function Me(VV) {
      var eV;
      let {
        lobbyName: xV,
        worldCode: JV,
        onClose: UV
      } = VV;
      const {
        t: yV
      } = (0, sV.A)(), pV = (0, YV.useRef)(null), {
        settings: QV,
        loading: nV,
        answered: ZV,
        change: vV,
        retry: kV
      } = (0, Je.g)(xV), bV = (0, SV.m)(), BV = (0, XV.h)("players"), jV = (0, XV.h)("hiddenPlayerNames"), [qV, tV] = (0, YV.useState)([]), [FV, PV] = (0, YV.useState)([]), [AV, NV] = (0, YV.useState)(!1), zV = (0, Ae.c)(), GV = (0, YV.useMemo)((() => {
        var VV, eV;
        const xV = null === BV.localId ? null : null !== (VV = null === (eV = BV.byId[BV.localId]) || void 0 === eV ? void 0 : eV.name) && void 0 !== VV ? VV : null;
        return BV.ids.flatMap((VV => {
          const eV = BV.byId[VV];
          return null !== eV && void 0 !== eV && eV.name && eV.name !== xV ? [{
            name: eV.name,
            cosmetics: eV.cosmetics,
            ranks: eV.ranks
          }] : []
        }))
      }), [BV]), WV = (0, YV.useMemo)((() => (0, Ye.g)(bV.friends, xV, GV.map((VV => VV.name)))), [bV.friends, xV, GV]), gV = RV.featureFlags.canSeeRealPlayerNames ? GV.filter((VV => null === (0, ee.d)(VV.name, jV))) : [], DV = null !== QV && void 0 !== QV && QV.canManage ? QV : null, iV = null !== DV, CV = null !== (eV = null === QV || void 0 === QV ? void 0 : QV.visibility) && void 0 !== eV ? eV : null, aV = "whitelist" === (null === DV || void 0 === DV ? void 0 : DV.visibility), oV = "private" === CV || "whitelist" === CV && !iV, {
        userContext: cV
      } = (0, TV.d)();
      (0, YV.useEffect)((() => {
        iV && qe(xV, cV.getPersonalWorldLobbyName()) && Pe(cV.whamm)
      }), [iV, xV, cV]);
      const hV = oV ? yV("whitelist" === CV ? "socialBar:inviteWorldManagersOnly" : iV ? "worldSocial:privateLinkRow" : "socialBar:inviteWorldPrivate") : null,
        LV = null === hV;
      (0, YV.useEffect)((() => oV ? void 0 : OV.e.quietFriendAdded()), [oV]), (0, YV.useEffect)((() => OV.e.quietFriendRequests()), []);
      const Qe = (0, YV.useRef)(!1);
      (0, YV.useEffect)((() => {
        const VV = pV.current,
          eV = !Qe.current;
        Qe.current = !0;
        const xV = null === document.activeElement || document.activeElement === document.body;
        null !== VV && void 0 !== VV && VV.contains(document.activeElement) || !eV && !xV || (0, lV.c)() || null === VV || void 0 === VV || VV.focus({
          preventScroll: !0
        })
      }), [LV]), (0, YV.useEffect)((() => {
        const VV = VV => {
          "Escape" !== VV.key || null !== document.activeElement && document.activeElement !== document.body || UV()
        };
        return document.addEventListener("keydown", VV), () => {
          document.removeEventListener("keydown", VV)
        }
      }), [UV]);
      const ve = null === QV && !ZV,
        re = (nV || bV.loading) && 0 === bV.friends.length,
        ke = bV.friends.flatMap((VV => VV.name ? [VV.name] : [])),
        be = qV.filter((VV => !(0, Ye.k)(ke, VV))),
        Ee = WV.length + 3,
        Be = be.length + Ee,
        je = AV ? bV.requests : bV.requests.slice(0, 1),
        te = async function(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (const xV of (0, Ye.o)(VV, fV.z)) {
            if (!await vV({
                whitelistAdd: xV
              }, (VV => (0, Ye.u)(VV, xV, !0)), {
                quiet: eV
              })) return !1
          }
          return !0
        }, Fe = VV => {
          if (aV && DV) return {
            on: (0, Ye.k)(DV.whitelist, VV),
            onChange: eV => {
              (0, xe.reportAnalyticsClick)({
                id: "world_social.whitelist_toggle",
                value: eV ? "on" : "off"
              }), vV(eV ? {
                whitelistAdd: [VV]
              } : {
                whitelistRemove: VV
              }, (xV => (0, Ye.u)(xV, [VV], eV)))
            }
          }
        }, Te = async (VV, eV) => {
          (0, xe.reportAnalyticsClick)({
            id: "world_social.add_friend",
            value: eV
          });
          const xV = await (0, dV.d)(VV, "world_social");
          return (0, dV.b)(xV, VV, {
            announceSent: !1
          }), "failed" !== xV.kind && ("sent" === xV.kind && tV((eV => (0, Ye.k)(eV, VV) ? eV : [...eV, VV])), aV && await te([VV]), !0)
        };
      return (0, wV.jsxs)("div", {
        ref: pV,
        className: "WorldSocialPopup AnimFadeInScaleUp",
        tabIndex: -1,
        onKeyDown: VV => {
          VV.target === VV.currentTarget && " " === VV.key && VV.preventDefault()
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "WorldSocialTitle",
        children: [(0, wV.jsxs)("div", {
          className: "WorldSocialHeader",
          children: [(0, wV.jsx)("h2", {
            id: "WorldSocialTitle",
            className: "WorldSocialTitle SmallTextBold",
            children: yV("worldSocial:title")
          }), (0, wV.jsx)(rV.k, {
            className: "WorldSocialClose",
            onClick: UV
          })]
        }), ve && (0, wV.jsx)("div", {
          className: "WorldSocialLoading",
          children: (0, wV.jsx)(MV.d, {})
        }), !ve && (0, wV.jsxs)(wV.Fragment, {
          children: [(0, wV.jsx)(Ue.c, {
            worldCode: JV,
            message: hV
          }), null === QV && !nV && (0, wV.jsx)("button", {
            type: "button",
            className: "WorldSocialLoadFailed",
            onClick: kV,
            children: yV("worldSocial:loadFailed")
          }), iV && null !== CV && (0, wV.jsx)(ye.d, {
            visibility: CV,
            onPick: VV => {
              (async VV => {
                if (VV === CV) return;
                (0, xe.reportAnalyticsClick)({
                  id: "world_social.set_mode",
                  value: VV
                });
                const eV = [...(0, Ze.c)(xV), ...FV],
                  JV = "whitelist" === VV && QV ? (0, Ye.e)(WV, eV, QV.whitelist) : [];
                await vV({
                  setVisibility: VV
                }, (eV => ({
                  ...eV,
                  visibility: VV
                }))) && await te(JV)
              })(VV)
            }
          }), bV.requests.length > 0 && (0, wV.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, wV.jsx)(uV.b, {
              label: (0, wV.jsxs)(wV.Fragment, {
                children: [(0, wV.jsx)(EV.b, {
                  name: Ve.e
                }), " ", yV("socialBar:requests")]
              }),
              meta: (0, wV.jsxs)(wV.Fragment, {
                children: [bV.requests.length, bV.requests.length === KV.n && (0, wV.jsx)("span", {
                  className: "SocialSectionTitleLimit",
                  children: yV("socialBar:limitReached")
                }), !AV && bV.requests.length > 1 && (0, wV.jsx)("button", {
                  type: "button",
                  className: "WorldSocialMoreRequests",
                  onClick: () => {
                    NV(!0)
                  },
                  children: yV("worldSocial:moreRequests", {
                    count: bV.requests.length - 1
                  })
                })]
              })
            }), (0, wV.jsx)("div", {
              className: "PlayerRows",
              children: je.map(((VV, eV) => (0, wV.jsx)(pe.h, {
                zIndex: je.length - eV,
                player: VV,
                actions: (0, wV.jsxs)(wV.Fragment, {
                  children: [(0, wV.jsx)(HV.d, {
                    tooltipInner: (0, wV.jsx)(wV.Fragment, {
                      children: yV("general:accept")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, wV.jsx)(rV.f, {
                      className: "FriendRequestButton",
                      ariaLabel: `${yV("general:accept")} ${VV.name}`,
                      analyticsClick: {
                        id: "social.accept_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, dV.c)(VV.name, !0, {
                          source: "world_social"
                        })
                      },
                      children: (0, wV.jsx)(EV.b, {
                        name: "check"
                      })
                    })
                  }), (0, wV.jsx)(HV.d, {
                    tooltipInner: (0, wV.jsx)(wV.Fragment, {
                      children: yV("general:decline")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, wV.jsx)(rV.j, {
                      className: "FriendRequestButton",
                      ariaLabel: `${yV("general:decline")} ${VV.name}`,
                      analyticsClick: {
                        id: "social.decline_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, dV.c)(VV.name, !1, {
                          source: "world_social"
                        })
                      },
                      children: (0, wV.jsx)(EV.b, {
                        name: "xmark"
                      })
                    })
                  })]
                })
              }, `incoming:${VV.name}`)))
            })]
          }), (0, wV.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, wV.jsx)(uV.b, {
              label: (0, wV.jsxs)(wV.Fragment, {
                children: [(0, wV.jsx)(EV.b, {
                  name: Ve.c
                }), " ", yV("socialBar:friends")]
              }),
              meta: bV.loaded && !oV ? bV.friends.length : void 0
            }), (0, wV.jsx)(we.b, {
              label: yV("socialBar:sendRequest"),
              icon: "user-plus",
              placeholder: yV("worldSocial:addFriendPlaceholder"),
              onSubmit: async VV => await Te(VV, "field") ? {
                ok: !0
              } : {
                ok: !1,
                error: null
              }
            }), re && (0, wV.jsx)("div", {
              className: "WorldSocialLoading",
              children: (0, wV.jsx)(MV.d, {})
            }), !re && (0, wV.jsxs)(wV.Fragment, {
              children: [(0, wV.jsxs)("div", {
                className: "PlayerRows",
                children: [be.map(((VV, eV) => (0, wV.jsx)(pe.h, {
                  zIndex: Be - eV,
                  player: (0, pe.k)(VV, null),
                  status: yV("worldSocial:requestSent"),
                  iZ: Fe(VV)
                }, `request:${VV}`))), !oV && WV.map(((VV, eV) => (0, wV.jsx)(pe.d, {
                  zIndex: Ee - eV,
                  row: VV,
                  iZ: Fe(VV.friend.name),
                  canInvite: (0, Ye.c)(QV) && "here" !== VV.place,
                  invited: FV.includes(VV.friend.name),
                  onInvite: () => {
                    (async VV => {
                      (0, xe.reportAnalyticsClick)({
                        id: "world_social.invite",
                        value: "friend"
                      });
                      const eV = () => {
                        PV((eV => eV.filter((eV => eV !== VV))))
                      };
                      PV((eV => [...eV, VV]));
                      const JV = (0, Ye.r)(QV, VV);
                      if ("none" !== JV) {
                        const xV = te([VV], "quiet" === JV);
                        if ("required" === JV && !await xV) return void eV()
                      }
                      await (0, IV.m)(VV, "game", {
                        announceSent: !1,
                        source: "world_social"
                      }) ? ((0, Ze.d)(xV, VV), setTimeout(eV, mV.n)) : eV()
                    })(VV.friend.name)
                  }
                }, VV.friend.name))), bV.loaded && 0 === bV.friends.length && (0, wV.jsx)(ne, {
                  playersHere: gV,
                  exclude: qV,
                  uF: VV => Te(VV, "suggestion")
                })]
              }), aV && bV.loaded && 0 === bV.friends.length && 0 === be.length && (0, wV.jsx)("div", {
                className: "WorldSocialEmpty",
                children: yV("worldSocial:whitelistNoFriends")
              })]
            })]
          })]
        }), zV && (0, wV.jsxs)(rV.M, {
          className: "WorldSocialManageLobby SmallTextLight",
          onClick: () => {
            (0, Ne.e)({
              page: "players",
              source: "invite_popup"
            }), UV()
          },
          children: [(0, wV.jsx)(EV.b, {
            name: "users-gear"
          }), " ", yV("lobbyManageEntry:manageLobby")]
        })]
      })
    }
    var ze = xV(2741),
      Ge = xV(2695);

    function We(VV) {
      let {
        show: eV,
        onClose: xV,
        option: JV
      } = VV;
      const UV = (0, XV.e)("connectedGame", (VV => (0, ze.c)(VV) ? VV.lobbyName : null));
      return function(VV) {
        const {
          gameEntrySource: eV,
          loadingOverlayVisible: xV
        } = (0, cV.l)(["gameEntrySource", "loadingOverlayVisible"]), {
          userContext: JV
        } = (0, TV.d)(), UV = (0, XV.h)("localPlayerAlive"), yV = (0, XV.e)("players", (VV => null !== VV.localId && void 0 !== VV.byId[VV.localId])), pV = (0, Ge.h)(), QV = (0, YV.useRef)(null), nV = (0, YV.useRef)(null), wV = "worldCreation" === eV, ZV = JV.whamm, vV = JV.getPersonalWorldLobbyName();
        (0, YV.useEffect)((() => {
          var eV;
          null !== VV && (null === (eV = nV.current) || void 0 === eV ? void 0 : eV.lobbyName) !== VV && null !== ie(VV, wV, ZV, vV) && (nV.current = (0, Je.e)(VV))
        }), [wV, VV, ZV, vV]), (0, YV.useEffect)((() => {
          if (null !== VV && (!xV && UV && yV)) return pV.whenShown((() => {
            var eV;
            const xV = QV.current === VV ? null : ie(VV, wV, ZV, vV);
            if (null === xV) return;
            const JV = (null === (eV = nV.current) || void 0 === eV ? void 0 : eV.lobbyName) === VV ? nV.current : (0, Je.e)(VV);
            nV.current = null, QV.current = VV,
              function(VV, eV, xV, JV) {
                const {
                  lobbyName: YV
                } = VV, UV = () => {
                  ! function(VV, eV) {
                    if (!he()) return void eV(!0);
                    const xV = performance.now() + oe;
                    let JV = 0;
                    const YV = () => {
                      JV = he() ? 0 : JV + 1, JV >= 2 ? eV(!0) : !ce(VV) || performance.now() > xV ? eV(!1) : setTimeout(YV, ae)
                    };
                    setTimeout(YV, ae)
                  }(YV, (UV => {
                    JV();
                    const yV = "auto_existing" === eV && Te(xV);
                    UV && ce(YV) && !ge(YV) && !yV && (Ce(VV) ? De(YV) : (De(YV), Pe(xV), function(VV) {
                      const eV = be.b.world_social_popup_v1;
                      return (0, be.h)("world_social_popup_v1"), (0, xe.reportAnalyticsClick)({
                        id: "world_social.auto_open",
                        value: `${eV}:${(0,ke.c)()}:${VV}`
                      }), (0, re.flushClientAnalyticsEvents)(), "auto_open" === eV
                    }(eV) && ((0, Je.d)(VV), kV.h.QZ("toggleMenu", `inviteLink|${eV}`), "inviteLink" !== cV.b.get("openInGameMenuName") && console.warn("World social popup: the auto-open asked for it, but it didn't open"))))
                  }))
                };
                if ("auto" === eV && !Ce(VV)) return void UV();
                VV.response.then((VV => {
                  if (!("error" in VV)) return VV.settings.canManage ? void UV() : (De(YV), void JV());
                  JV()
                }))
              }(JV, xV, ZV, (() => {
                QV.current === VV && (QV.current = null)
              }))
          }))
        }), [pV, wV, xV, VV, UV, yV, ZV, vV])
      }(UV), (0, YV.useEffect)((() => {
        eV && null !== UV && De(UV)
      }), [eV, UV]), null !== UV ? (0, wV.jsx)(Xe, {
        show: eV,
        onClose: xV,
        opener: je(JV) ? JV : "icon"
      }) : (0, wV.jsx)(LV.c, {
        show: eV,
        onClose: xV
      })
    }
    const Re = new Set;

    function ge(VV) {
      return Re.has(VV) || !!gV.q.getItem(`worldSocialShown:${VV}`)
    }

    function De(VV) {
      Re.add(VV), gV.q.setItem(`worldSocialShown:${VV}`, !0)
    }

    function ie(VV, eV, xV, JV) {
      return ge(VV) ? null : function(VV) {
        let {
          justMade: eV,
          playerId: xV,
          lobbyName: JV,
          personalWorld: YV
        } = VV;
        return eV ? "auto" : !Te(xV) && qe(JV, YV) ? "auto_existing" : null
      }({
        justMade: eV,
        playerId: xV,
        lobbyName: VV,
        personalWorld: JV
      })
    }

    function Ce(VV) {
      let {
        answer: eV
      } = VV;
      return null !== eV && "settings" in eV && !eV.settings.canManage
    }
    const ae = 500,
      oe = 3e4;

    function ce(VV) {
      return "inGame" === cV.b.get("gameState") && nV.gameBridge.latest("connectedGame").lobbyName === VV
    }

    function he() {
      return (0, lV.c)() || cV.b.get("loadingOverlayVisible") || (0, hV.n)()
    }
    var le = xV(37916),
      Le = xV(3586),
      fe = xV(2116),
      me = xV(3584);

    function Ke(VV, eV, xV) {
      return me.b.overridesTexture(VV) ? me.b.getTexture(VV, eV).url : xV
    }
    var He = xV(10598);
    const ue = (VV, eV) => {
        (0, YV.useEffect)((() => {
          setTimeout((() => {
            VV && VV.current && VV.current.focus()
          }), 1)
        }), [eV])
      },
      se = (0, YV.memo)((function(VV) {
        let {
          isInputActive: eV,
          onClose: xV,
          onChange: JV,
          textAreaRef: YV,
          fontSize: UV,
          lineHeight: yV,
          currText: pV
        } = VV;
        return (0, wV.jsxs)("div", {
          className: "WriteOnBoardWrapper",
          children: [(0, wV.jsx)("img", {
            src: Ke("board_full", Le.f.BLOCK, He),
            alt: "Board",
            className: "WriteOnBoardImg"
          }), (0, wV.jsx)("textarea", {
            className: "WriteOnBoardTextArea",
            value: pV,
            ref: YV,
            style: {
              fontSize: `${UV}rem`,
              lineHeight: `${yV}rem`
            },
            onKeyDown: VV => {
              var eV;
              "Escape" !== VV.key && (VV.stopPropagation(), "Tab" === VV.key && function(VV) {
                VV.preventDefault();
                const eV = VV.target,
                  {
                    value: xV
                  } = eV;
                let JV = eV.selectionStart,
                  YV = eV.selectionEnd,
                  UV = xV.slice(JV, YV);
                if (!UV.includes("\n") && !VV.shiftKey) return void document.execCommand("insertText", !1, "\t");
                for (; JV > 0 && "\n" !== xV[JV - 1];) JV--;
                const yV = "\n" === xV[YV - 1];
                yV && YV--;
                UV = xV.slice(JV, YV);
                const pV = UV.split("\n").map((eV => VV.shiftKey ? eV.replace(/^\t/, "") : "\t" + eV)).join("\n");
                if (VV.shiftKey && xV.slice(JV, YV) === pV) return;
                let {
                  selectionStart: QV
                } = eV;
                eV.setSelectionRange(JV, YV), QV > JV && (!VV.shiftKey || "\t" === UV[0]) && (QV += VV.shiftKey ? -1 : 1);
                YV = JV + pV.length + (yV ? 1 : 0), document.execCommand("insertText", !1, pV), eV.setSelectionRange(QV, YV)
              }(VV), /^F\d+$/i.test(VV.code) && null !== (eV = fe.t.OpenCodeEditor) && void 0 !== eV && eV.includes(VV.code) && xV())
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: JV
          })]
        })
      }));

    function Se(VV) {
      return 1.3 * VV
    }
    var Ie = xV(1775);
    const de = (0, YV.memo)((function(VV) {
        let {
          show: eV,
          onOpen: xV,
          onClose: JV
        } = VV;
        const [UV, pV] = (0, YV.useState)(null), [QV, ZV] = (0, YV.useState)(""), [vV, kV] = (0, YV.useState)(0), [bV, EV] = (0, YV.useState)(null), [BV, jV] = (0, YV.useState)({
          text: "",
          textSize: 0
        }), qV = (VV, eV) => bV ? (0, le.k)(VV, eV, bV.width, bV.height) : (0, le.e)(VV, eV), tV = VV => {
          ZV(qV(QV, VV)), kV(VV), gV.m.setItem("lastBoardTextSize", VV)
        }, FV = () => {
          JV(), bV && QV === BV.text && vV === BV.textSize || nV.gameBridge.send("writeOnBoard", {
            pos: UV,
            text: QV,
            textSize: vV
          })
        };
        (0, XV.c)("boardEditRequested", (VV => {
          var YV, UV;
          if (!RV.featureFlags.canSeePlayerWrittenText) return;
          if (null === VV) return pV(null), void(eV && JV());
          const {
            pos: yV,
            noticeboardSpan: QV,
            text: nV
          } = VV;
          pV(yV), EV(QV), ZV(nV);
          const wV = null !== (YV = null !== (UV = VV.textSize) && void 0 !== UV ? UV : gV.m.getItem("lastBoardTextSize")) && void 0 !== YV ? YV : 0;
          kV(wV), jV({
            text: nV,
            textSize: wV
          }), gV.m.setItem("lastBoardTextSize", wV), xV()
        }));
        const TV = (0, YV.useRef)(null);
        ue(TV, eV), (0, Ie.w)(TV, {
          kind: "sign",
          submit: FV
        });
        const PV = function(VV, eV) {
            const xV = le.d[VV];
            if (!eV) return xV.uiFontSize;
            const {
              numLines: JV,
              charsPerLine: YV
            } = (0, le.t)(eV.width, eV.height, VV);
            return xV.uiFontSize * Math.min(xV.charsPerLine / YV, xV.numLines / JV)
          }(vV, bV),
          AV = Se(PV);
        return (0, wV.jsxs)(yV.e, {
          className: "WriteOnBoardBg",
          close: FV,
          escDoesExit: !0,
          show: eV,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, wV.jsx)(se, {
            isInputActive: () => eV,
            onClose: FV,
            onChange: VV => {
              ZV(qV(VV.target.value, vV))
            },
            textAreaRef: TV,
            fontSize: PV,
            lineHeight: AV,
            currText: QV
          }), (0, wV.jsx)("div", {
            className: "WriteOnBoardTextSizeHeader SmallTextBold",
            children: "Text Size"
          }), (0, wV.jsxs)("div", {
            className: "WriteOnBoardTextSizeButtons",
            children: [(0, wV.jsx)(rV.f, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                tV(0)
              },
              disabled: 0 === vV,
              children: "Small"
            }), (0, wV.jsx)(rV.f, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                tV(1)
              },
              disabled: 1 === vV,
              children: "Medium"
            }), (0, wV.jsx)(rV.f, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                tV(2)
              },
              disabled: 2 === vV,
              children: "Large"
            })]
          })]
        })
      })),
      Oe = (0, YV.memo)((function(VV) {
        let {
          show: eV,
          onOpen: xV,
          onClose: JV
        } = VV;
        const [UV, pV] = (0, YV.useState)(""), QV = () => {
          JV(), nV.gameBridge.send("writeNameTag", UV)
        };
        (0, AV.g)("EditNameTag", (VV => {
          RV.featureFlags.canSeePlayerWrittenText && null !== VV && (pV(VV), xV())
        }));
        const ZV = (0, YV.useRef)(null);
        ue(ZV, eV), (0, Ie.w)(ZV, {
          kind: "nameTag",
          submit: QV
        });
        const vV = le.C.nameTag.uiFontSize,
          kV = Se(vV);
        return (0, wV.jsxs)(yV.e, {
          className: "WriteOnBoardBg",
          close: QV,
          escDoesExit: !0,
          show: eV,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, wV.jsx)("div", {
            className: "NameTagTrim",
            children: (0, wV.jsx)(se, {
              isInputActive: () => eV,
              onClose: QV,
              onChange: VV => {
                const eV = VV.target.value.replaceAll("\n", "");
                pV((0, le.m)(eV, "nameTag"))
              },
              textAreaRef: ZV,
              fontSize: vV,
              lineHeight: kV,
              currText: UV
            })
          }), (0, wV.jsx)(rV.f, {
            onClick: QV,
            className: "WriteOnNameTagCloseButton",
            children: "Finish"
          })]
        })
      }));
    var Vx = xV(18847);
    const ex = (0, YV.memo)((function(VV) {
      let {
        show: eV,
        onOpen: xV,
        onClose: JV
      } = VV;
      const [UV, pV] = (0, YV.useState)(""), [QV, ZV] = (0, YV.useState)(0), [vV, kV] = (0, YV.useState)(!1), [bV, EV] = (0, YV.useState)(["", "", "", "", "", "", "", "", "", ""]), [BV, jV] = (0, YV.useState)("Title"), [qV, tV] = (0, YV.useState)(!0), [FV, TV] = (0, YV.useState)(!1);
      (0, AV.g)("EditBook", (VV => {
        let {
          pages: eV,
          title: JV,
          isPublished: YV
        } = VV;
        var UV;
        RV.featureFlags.canSeePlayerWrittenText && (null !== eV ? (EV(eV), pV(null !== (UV = eV[0]) && void 0 !== UV ? UV : ""), jV(JV), ZV(0), kV(!1), tV(!YV), TV(!1), xV()) : EV(["", "", "", "", "", "", "", "", "", ""]))
      }));
      const PV = (0, YV.useRef)(null),
        NV = (0, YV.useRef)(null);
      ue(PV, eV), (0, Ie.w)(PV, {
        kind: "book"
      }), (0, Ie.w)(NV, {
        kind: "vn"
      });
      const XV = le.C.book.uiFontSize,
        MV = Se(XV),
        zV = () => {
          (qV || FV) && nV.gameBridge.send("writeBook", {
            pages: [...bV],
            title: BV,
            published: !qV && FV
          })
        },
        GV = VV => {
          vV && (bV[QV] = UV, kV(!1)), pV(bV[VV]), ZV(VV)
        };
      return (0, wV.jsxs)(yV.e, {
        className: "WriteOnBoardBg",
        close: () => {
          JV(), bV[QV] = UV, zV()
        },
        escDoesExit: !0,
        show: eV,
        togglePointerLock: !1,
        globallyUniqueKey: "WriteOnBookComp",
        children: [(0, wV.jsxs)("div", {
          className: "WriteOnBookWrapper",
          children: [(0, wV.jsx)("textarea", {
            className: "BookTitleTextArea SmallTextLight",
            value: BV,
            ref: NV,
            style: {
              fontSize: "2.5rem",
              lineHeight: `${MV}rem`
            },
            onKeyDown: VV => {
              qV && VV.stopPropagation()
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: VV => {
              let eV = VV.target.value;
              eV = (0, le.m)(eV, "vn"), jV(eV)
            },
            readOnly: !qV
          }), (0, wV.jsx)("img", {
            src: Ke("book_page", Le.f.ITEM, Vx),
            alt: "book_page",
            className: "WriteOnBookPageImg"
          }), (0, wV.jsx)("div", {
            className: "BookTextAreaPadding",
            children: (0, wV.jsx)("textarea", {
              className: "WriteOnBookPageTextArea",
              value: UV,
              ref: PV,
              style: {
                fontSize: `${XV}rem`,
                lineHeight: `${MV}rem`
              },
              onKeyDown: VV => {
                qV && VV.stopPropagation()
              },
              spellCheck: "false",
              autoComplete: "off",
              onChange: VV => {
                const eV = VV.target.value;
                pV((0, le.m)(eV, "book")), kV(!0)
              },
              readOnly: !qV
            })
          })]
        }), (0, wV.jsxs)("div", {
          className: "BookNavigationWrapper",
          children: [(0, wV.jsx)(rV.f, {
            disabled: 0 === QV,
            onClick: () => {
              GV(QV - 1)
            },
            className: "BookNavButton",
            children: "<"
          }), (0, wV.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, wV.jsx)(rV.f, {
            disabled: 9 === QV,
            onClick: () => {
              GV(QV + 1)
            },
            className: "BookNavButton",
            children: ">"
          }), (0, wV.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, wV.jsx)(rV.f, {
            onClick: () => {
              tV(!qV), TV(!0)
            },
            className: "BookNavButton",
            children: qV ? "Publish" : "Edit"
          })]
        })]
      })
    }));
    var xx = xV(37771),
      Jx = xV(9306),
      Yx = xV(1473),
      Ux = xV(2039);

    function yx(VV) {
      let {
        show: eV,
        buttons: xV
      } = VV;
      const {
        t: JV
      } = (0, sV.A)(), UV = (0, YV.useRef)(null);
      return (0, YV.useEffect)((() => {
        var VV, xV;
        const JV = eV ? (0, xx.u)() : null;
        if (!JV || !(0, Yx.m)()) return;
        const YV = (0, xx.m)().findIndex((VV => VV.id === JV));
        (0, Jx.l)(null !== (VV = null === (xV = UV.current) || void 0 === xV ? void 0 : xV.children[YV]) && void 0 !== VV ? VV : null)
      }), [eV]), 0 === xV.length ? null : (0, wV.jsx)("div", {
        ref: UV,
        className: "ClientGameInventoryButtons",
        onPointerDown: VV => {
          VV.stopPropagation()
        },
        onPointerUp: VV => {
          VV.stopPropagation()
        },
        children: xV.map((VV => {
          const eV = JV(VV.labelKey);
          return (0, wV.jsxs)(rV.m, {
            className: VV.className,
            disabled: VV.disabled,
            onClick: () => {
              (0, xx.r)(VV)
            },
            ariaLabel: VV.iconOnly ? eV : void 0,
            title: VV.iconOnly ? eV : void 0,
            children: [VV.icon && (0, wV.jsxs)("div", {
              className: "ClientGameInventoryButtonIcon",
              children: ["item" === VV.icon.kind && (0, wV.jsx)(Ux.e, {
                itemName: VV.icon.name,
                amount: 0
              }), "image" === VV.icon.kind && (0, wV.jsx)("img", {
                src: VV.icon.src,
                alt: "",
                draggable: !1
              }), "icon" === VV.icon.kind && (0, wV.jsx)(EV.b, {
                name: VV.icon.name
              })]
            }), !VV.iconOnly && eV]
          }, VV.id)
        }))
      })
    }
    var px = xV(37925),
      Qx = xV(3073),
      nx = xV(35317),
      wx = xV(37672),
      Zx = xV(37669);
    let vx = null;
    window.setShowInventoryAdsOverride = VV => {
      vx = VV
    };
    const rx = 24e4;
    var kx = xV(2042);

    function bx(VV) {
      var eV;
      let {
        draggedInfo: {
          name: xV,
          attributes: JV,
          amount: YV
        },
        toAddRef: UV
      } = VV;
      return (0, wV.jsx)("div", {
        className: "DraggedInvenItem",
        ref: UV,
        children: (0, wV.jsx)(Ux.e, {
          itemName: xV,
          amount: YV,
          enchantmentTier: null === JV || void 0 === JV || null === (eV = JV.customAttributes) || void 0 === eV ? void 0 : eV.enchantmentTier,
          bar: (0, kx.k)(JV)
        })
      })
    }

    function Ex(VV) {
      let {
        className: eV = "",
        displayInfo: xV,
        domRef: JV
      } = VV;
      return (0, wV.jsxs)("div", {
        className: `InvenHoveredItemInfo SmallTextBold ${eV}`,
        ref: JV,
        children: [(0, wV.jsx)(PV.b, {
          text: (0, NV.qb)(xV.name, {
            fontStyle: xV.fontStyle
          })
        }), (0, wV.jsx)("div", {
          className: "InvenHoveredItemInfoDescription",
          children: (0, wV.jsx)(PV.b, {
            text: xV.desc
          })
        })]
      })
    }

    function Bx(VV) {
      let {
        info: eV,
        draggedInfo: xV
      } = VV;
      const JV = (0, YV.useRef)(null);
      return (0, YV.useLayoutEffect)((() => {
        const VV = JV.current,
          {
            left: xV,
            top: YV
          } = function(VV, eV, xV, JV) {
            const YV = JV.left * xV.width / 100 + 4,
              UV = xV.width - JV.right * xV.width / 100 - 4 - eV.width,
              yV = JV.top * xV.height / 100 + 4,
              pV = xV.height - 4 - eV.height;
            return {
              left: Math.max(YV, Math.min(VV.x - eV.width / 2, UV)),
              top: Math.max(yV, Math.min(VV.y - 48 - eV.height, pV))
            }
          }({
            x: eV.initTouchX,
            y: eV.initTouchY
          }, {
            width: VV.offsetWidth,
            height: VV.offsetHeight
          }, {
            width: window.innerWidth,
            height: window.innerHeight
          }, cV.b.get("notchSize"));
        VV.style.left = `${xV}px`, VV.style.top = `${YV}px`
      }), [eV]), (0, wV.jsxs)("div", {
        className: "LongHoldSplitInfoUI SmallTextBold",
        ref: JV,
        children: [(0, wV.jsx)("div", {
          className: "LongHoldSplitInfoUIInner",
          style: {
            width: xV.amount / eV.maxAmount * 100 + "%"
          }
        }), (0, wV.jsxs)("div", {
          className: "LongHoldSplitInfoUIText",
          children: [xV.amount, "/", eV.maxAmount]
        })]
      })
    }
    var jx = xV(1146),
      qx = xV.n(jx),
      tx = xV(206);
    const Fx = (0, YV.memo)((function(VV) {
      let {
        show: eV,
        onOpen: xV,
        onClose: JV
      } = VV;
      const UV = (0, YV.useRef)({
          pos: null
        }),
        [pV, QV] = (0, YV.useState)([0, 0, 0, 0]),
        {
          userContext: ZV
        } = (0, TV.d)();
      (0, XV.c)("ironChestOpenRequested", (VV => {
        let {
          pos: eV,
          ownerDbId: JV,
          cachedPasskey: YV
        } = VV;
        if (UV.current.pos = eV, JV !== ZV.whamm) return null !== YV ? (QV(YV), void vV(YV)) : void xV();
        vV(pV)
      })), (0, XV.c)("localEffectUpdated", (VV => {
        "Thief" === VV && JV()
      }));
      const vV = VV => {
        const {
          pos: eV
        } = UV.current;
        nV.gameBridge.send("openIronChest", {
          pos: eV,
          ly: VV
        })
      };
      return (0, wV.jsx)(yV.e, {
        className: "IronChestPasskeyInputScreenOuter",
        close: JV,
        escDoesExit: !0,
        show: eV,
        togglePointerLock: !1,
        globallyUniqueKey: "IronChestPasskeyInputScreen",
        children: (0, wV.jsx)("div", {
          className: "IronChestPasskeyInputScreen",
          children: (0, wV.jsx)(Tx, {
            ly: pV,
            onPasskeyUpdated: QV,
            confirmText: "ironChest:tryUnlock",
            onConfirm: () => {
              vV(pV)
            }
          })
        })
      })
    }));

    function Tx(VV) {
      let {
        className: eV = "",
        ly: xV,
        onPasskeyUpdated: JV,
        confirmText: YV,
        onConfirm: UV
      } = VV;
      const {
        t: yV
      } = (0, sV.A)();
      return (0, wV.jsxs)("div", {
        className: `${eV} IronChestPasskeyInput`,
        children: [(0, wV.jsx)("div", {
          className: "SmallTextBold IronChestPasskeyInputTitle",
          children: yV("ironChest:passkeyInputTitle")
        }), (0, wV.jsx)("div", {
          className: "IronChestPasskeyInputRow",
          children: new Array(tx.f.ironChestPasskeyLength).fill(0).map(((VV, eV) => (0, wV.jsx)(Px, {
            digit: xV[eV],
            onPasskeyDigitUpdated: VV => {
              const YV = [...xV];
              YV[eV] = VV, JV(YV)
            }
          }, eV)))
        }), (0, wV.jsx)(rV.m, {
          className: "IronChestPasskeyInputConfirmButton",
          onClick: UV,
          children: yV(YV)
        })]
      })
    }

    function Px(VV) {
      let {
        digit: eV,
        onPasskeyDigitUpdated: xV
      } = VV;
      return (0, wV.jsx)("div", {
        className: "IronChestPasskeyDigitInputWrapper",
        children: (0, wV.jsxs)("div", {
          className: "IronChestPasskeyDigitInput",
          children: [(0, wV.jsx)(rV.m, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              xV(NV.b.mod(eV + 1, 10))
            },
            children: (0, wV.jsx)(EV.b, {
              name: "angle-up"
            })
          }), (0, wV.jsx)("div", {
            className: "SmallTextBold IronChestPasskeyDigit",
            children: eV
          }), (0, wV.jsx)(rV.m, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              xV(NV.b.mod(eV - 1, 10))
            },
            children: (0, wV.jsx)(EV.b, {
              name: "angle-down"
            })
          })]
        })
      })
    }
    var Ax = xV(35311),
      Nx = xV(37994),
      Xx = xV(37663);

    function Mx(VV) {
      let {
        specialItemInfo: eV,
        setHovered: xV,
        pointerDown: JV,
        pointerUp: UV,
        enchantingTablePosition: yV,
        enchantingTableBlockName: pV
      } = VV;
      const {
        t: ZV
      } = (0, sV.A)(), [vV, kV] = (0, YV.useState)(null), [bV, EV] = (0, YV.useState)(null), BV = (0, QV.j)("auraPerLevel"), jV = Math.floor((0, XV.h)("aura") / BV);
      (0, YV.useEffect)((() => {
        if (!eV) return void kV(null);
        let VV = !0;
        return nV.gameBridge.query("enchantingOffer", {
          slot: eV.idx,
          name: eV.name,
          blockName: pV
        }).then((xV => {
          var JV, YV;
          let {
            perks: UV,
            options: yV
          } = xV;
          if (!VV) return;
          const pV = {
            isEnchantable: UV.length > 0,
            possibleEnchantments: UV,
            options: yV.map((VV => {
              let {
                level: eV,
                odds: xV
              } = VV;
              return {
                level: eV,
                possibilities: Object.fromEntries(xV.map(((VV, eV) => [`Tier ${eV+1}`, VV])))
              }
            })),
            isAlreadyEnchanted: UV.length > 0 && void 0 !== (null === (JV = eV.attributes) || void 0 === JV || null === (YV = JV.customAttributes) || void 0 === YV ? void 0 : YV.enchantmentTier)
          };
          kV(pV), (VV => {
            const eV = VV.options.map((VV => Object.entries(VV.possibilities).map((VV => {
              let [eV, xV] = VV;
              return {
                str: `${eV}: ${xV>0?xV<.01?xV.toPrecision(1):xV.toFixed(2):0}%\n`,
                style: {
                  color: NV.kb[eV]
                }
              }
            }))));
            EV(eV)
          })(pV)
        })), () => {
          VV = !1
        }
      }), [eV, yV, pV]);
      const qV = [];
      for (let YV = 0; YV < Nx.b; YV++) {
        const VV = null === vV || void 0 === vV ? void 0 : vV.options[YV],
          JV = !VV || VV.level > jV;
        qV.push((0, wV.jsx)(rV.f, {
          className: "EnchantmentButton",
          onPointerEnter: VV ? VV => null === xV || void 0 === xV ? void 0 : xV()(!0, {
            name: "",
            desc: bV[YV]
          }, VV) : void 0,
          onPointerLeave: VV ? () => null === xV || void 0 === xV ? void 0 : xV()(!1) : void 0,
          onClick: JV ? void 0 : () => {
            nV.gameBridge.send("enchantItem", {
              slot: eV.idx,
              level: VV.level,
              tablePos: yV
            }), kV(null)
          },
          disabled: JV,
          children: VV ? (0, wV.jsxs)(wV.Fragment, {
            children: [(0, wV.jsxs)("h1", {
              className: "EnchantmentLevels",
              children: [(0, wV.jsxs)("span", {
                className: "EnchantmentLevelsCost",
                children: [ZV("enchantments:cost"), ": "]
              }), " ", ZV("enchantments:levels", {
                level: VV.level
              })]
            }), (0, wV.jsxs)("div", {
              className: "EnchantmentPossibilities",
              children: [(0, wV.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, wV.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: ZV("enchantments:tier")
                }), Object.entries(VV.possibilities).map((VV => {
                  let [eV, xV] = VV;
                  return 0 === xV ? null : (0, wV.jsx)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: NV.kb[eV]
                    },
                    children: eV
                  }, eV)
                }))]
              }), (0, wV.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, wV.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: ZV("enchantments:odds")
                }), Object.entries(VV.possibilities).map((VV => {
                  let [eV, xV] = VV;
                  return 0 === xV ? null : (0, wV.jsxs)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: NV.kb[eV]
                    },
                    children: [xV > 0 && xV < .1 ? "<0.1" : xV.toFixed(0 < xV && xV < .95 ? 1 : 0), "%"]
                  }, eV)
                }))]
              })]
            })]
          }) : !1 === (null === vV || void 0 === vV ? void 0 : vV.isEnchantable) ? (0, wV.jsx)("h1", {
            className: "EnchantmentLevels",
            children: ZV("enchantments:notEnchantable")
          }) : (0, wV.jsx)("h1", {
            className: "EnchantmentLevels",
            children: ZV("enchantments:enterItem")
          })
        }, YV))
      }
      return (0, wV.jsxs)("div", {
        className: "EnchantingTable",
        children: [(0, wV.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: pV
        }), (0, wV.jsxs)("div", {
          className: "EnchantingTableBody",
          children: [(0, wV.jsxs)("div", {
            className: "EnchantingTableLeft",
            children: [(0, wV.jsx)(Xx.c, {
              idx: Zx.f,
              setHovered: VV => {
                null === xV || void 0 === xV || xV(Zx.f)(VV)
              },
              pointerDown: JV,
              pointerUp: UV,
              draggedInfo: null,
              specialItemInfo: eV,
              variation: "Enchanting Table"
            }), vV && vV.possibleEnchantments.length > 0 && (0, wV.jsxs)("div", {
              className: "PossibleEnchantments",
              children: [(0, wV.jsx)("h2", {
                children: "Possible Perks:"
              }), vV.possibleEnchantments.map((VV => (0, wV.jsxs)(YV.Fragment, {
                children: [(0, wV.jsxs)("div", {
                  className: "PossibleEnchantmentName",
                  children: [(0, wV.jsx)("div", {
                    className: "PossibleEnchantmentIcon",
                    children: (0, wV.jsx)(Ux.e, {
                      itemName: `${VV} Enchantment`,
                      amount: 1
                    })
                  }), (0, wV.jsx)("div", {
                    className: "PossibleEnchantmentNameText",
                    children: VV
                  })]
                }), (0, wV.jsx)("div", {
                  className: "PossibleEnchantmentDescription",
                  children: ZV((0, Ax.k)(VV).translationKey)
                })]
              }, VV)))]
            })]
          }), (0, wV.jsxs)("div", {
            className: "EnchantmentOptions",
            children: [vV && vV.isAlreadyEnchanted && (0, wV.jsx)("div", {
              className: "AlreadyEnchantedWarning",
              children: ZV("enchantments:alreadyEnchanted")
            }), qV]
          })]
        })]
      })
    }
    var zx = xV(38003);

    function Gx(VV) {
      var eV;
      let {
        specialItemInfo: xV,
        setSpecialItemInfo: JV,
        setHovered: UV,
        pointerDown: yV,
        pointerUp: pV
      } = VV;
      const {
        t: QV
      } = (0, sV.A)(), ZV = (0, XV.e)("inventory", (VV => VV.freeSlots)), [vV, kV] = (0, YV.useState)(null);
      (0, YV.useEffect)((() => {
        if (xV) {
          const VV = (0, zx.e)(xV.name, xV.amount);
          kV({
            salvageable: !!VV,
            produces: VV
          })
        } else kV(null)
      }), [xV, null === xV || void 0 === xV ? void 0 : xV.name, null === xV || void 0 === xV ? void 0 : xV.amount]);
      const bV = !!xV && !(null === vV || void 0 === vV || !vV.salvageable) && !(null !== (eV = vV.produces) && void 0 !== eV && eV.some((VV => {
        let {
          amt: eV
        } = VV;
        return eV < 1
      })));
      return (0, wV.jsxs)("div", {
        className: "SalvagingTable",
        children: [(0, wV.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: QV("item:salvagingTable")
        }), (0, wV.jsxs)("div", {
          className: "SalvagingTableBody",
          children: [(0, wV.jsx)("div", {
            className: "SalvagingTableLeft",
            children: (0, wV.jsx)(Xx.c, {
              idx: Zx.f,
              setHovered: VV => {
                null === UV || void 0 === UV || UV(Zx.f)(VV)
              },
              pointerDown: yV,
              pointerUp: pV,
              draggedInfo: null,
              specialItemInfo: xV,
              variation: "Salvaging Table"
            })
          }), (0, wV.jsx)("div", {
            className: "SalvagingTableRight",
            children: (0, wV.jsx)(rV.f, {
              className: "SalvageButton",
              onClick: bV ? () => {
                const {
                  idx: VV,
                  name: eV,
                  amount: YV
                } = xV;
                nV.gameBridge.send("salvageItem", {
                  slot: VV,
                  name: eV,
                  amount: YV
                }) && (kV(null), JV(null))
              } : void 0,
              disabled: !bV,
              children: vV ? vV.salvageable ? vV.produces.some((VV => {
                let {
                  amt: eV
                } = VV;
                return eV < 1
              })) ? (0, wV.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, wV.jsx)("div", {
                  className: "SalvageText Error",
                  children: QV("salvagingTable:notEnoughResources")
                })
              }) : ZV < vV.produces.length ? (0, wV.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, wV.jsx)("div", {
                  className: "SalvageText Error",
                  children: QV("salvagingTable:notEnoughInventorySpace")
                })
              }) : (0, wV.jsxs)("div", {
                className: "SalvageButtonText",
                children: [(0, wV.jsx)("div", {
                  className: "SalvageText",
                  children: QV("salvagingTable:salvage")
                }), (0, wV.jsx)("div", {
                  className: "SalvageIcons",
                  children: vV.produces.map(((VV, eV) => {
                    let {
                      item: xV,
                      amt: JV
                    } = VV;
                    return (0, wV.jsx)("div", {
                      className: "SalvageIcon",
                      children: (0, wV.jsx)(Ux.e, {
                        itemName: xV,
                        amount: Math.floor(JV)
                      })
                    }, eV)
                  }))
                })]
              }) : (0, wV.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, wV.jsx)("div", {
                  className: "SalvageText Error",
                  children: QV("salvagingTable:unsalvageable")
                })
              }) : (0, wV.jsx)(wV.Fragment, {})
            })
          })]
        })]
      })
    }
    var Wx = xV(220),
      Rx = xV(9820),
      gx = xV(2985),
      Dx = xV(1772),
      ix = xV(9318),
      Cx = xV(9315),
      ax = xV(1764),
      ox = xV(2138),
      cx = xV(1493),
      hx = xV(2206);

    function lx(VV, eV, xV) {
      const JV = VV.trim().toLowerCase();
      if ("" === JV) return 0;
      let YV = null;
      for (const UV of eV) {
        const VV = UV.toLowerCase().indexOf(JV);
        if (0 === VV) return 0;
        VV > 0 && (YV = 1)
      }
      if (null !== YV) return YV;
      for (const UV of xV)
        if (UV.toLowerCase().includes(JV)) return 2;
      return null
    }

    function Lx(VV) {
      return VV.map((VV => {
        var eV;
        return VV ? {
          name: VV.name,
          amount: null !== (eV = VV.amount) && void 0 !== eV ? eV : 1
        } : null
      }))
    }

    function fx(VV) {
      return VV < 1e3 ? `${VV}` : VV < 1e4 ? Math.floor(VV / 100) / 10 + "k" : `${Math.floor(VV/1e3)}k`
    }
    var mx = xV(38012);
    const Kx = rV.f,
      Hx = {
        initialDelayMs: 400,
        intervalMs: 100
      },
      ux = () => {
        const VV = (0, cx.e)();
        return VV ? VV.getPadRepeatTiming(Hx) : Hx
      };

    function sx(VV, eV, xV) {
      var JV, YV;
      const UV = (0, nx.w)(eV, VV);
      let yV = null === (JV = eV[VV]) || void 0 === JV ? void 0 : JV.description;
      if (xV && (null === (YV = (0, mx.f)().get(VV)) || void 0 === YV || !YV.hideIngredients)) {
        yV ? (yV = (0, NV.qb)(yV), yV.push({
          str: "\n"
        })) : yV = [], yV.push({
          str: "\n"
        }), yV.push({
          str: "Can be crafted from:\n"
        });
        for (const VV of xV) "string" === typeof VV && (yV.push({
          icon: VV,
          style: {
            fontSize: "1.5em"
          }
        }), yV.push({
          str: " "
        }), yV.push(...(0, NV.qb)((0, nx.w)(eV, VV))), yV.push({
          str: "\n"
        }))
      }
      return {
        name: UV,
        desc: yV
      }
    }

    function Sx(VV) {
      let {
        name: eV,
        ky: xV
      } = VV;
      return `${eV}_${xV}`
    }

    function Ix(VV) {
      var eV;
      let {
        onClick: xV,
        itemName: JV,
        recipeId: UV,
        isSelected: yV,
        haveIngredients: pV,
        craftable: QV,
        setHovered: nV,
        padActions: ZV,
        marked: vV,
        lock: rV,
        itemInfo: kV
      } = VV;
      const bV = (0, YV.useRef)(null);
      return (0, ix.f)(bV, {
        press: VV => !pV || "secondary" === VV && !QV ? (ZV.refuse(), !1) : "primary" === VV ? (ZV.choose(), !0) : ZV.craft(),
        release: ZV.stopCraft,
        hints: {
          primary: "inventoryChooseRecipe",
          secondary: "inventoryCraft"
        }
      }), (0, wV.jsxs)("div", {
        ref: bV,
        className: qx()("InvenItem", {
          CraftableItemNotEnoughIngredients: !pV && !rV,
          CraftableItemMarked: vV,
          CraftableItemLocked: void 0 !== rV,
          CraftableItemLockedFar: (null !== (eV = null === rV || void 0 === rV ? void 0 : rV.stepsAway) && void 0 !== eV ? eV : 1) > 1
        }),
        "data-recipe-key": UV,
        "data-pad-inventory-default": yV ? "" : void 0,
        onClick: xV,
        style: {
          cursor: yV ? null : "pointer"
        },
        onPointerEnter: VV => {
          null === nV || void 0 === nV || nV(!0, sx(JV, kV)), !yV && (0, ax.u)(VV.nativeEvent) && (0, Cx.k)() && xV()
        },
        onPointerLeave: () => {
          null === nV || void 0 === nV || nV(!1)
        },
        children: [(0, wV.jsx)(Ux.e, {
          itemName: JV,
          amount: 1
        }), vV && (0, wV.jsx)("span", {
          className: "CraftableItemMarkBadge",
          "aria-hidden": "true",
          children: "!"
        }), rV && (0, wV.jsxs)("span", {
          className: "CraftableItemLockTag",
          children: [(0, wV.jsx)(EV.b, {
            name: "lock"
          }), (0, wV.jsx)(PV.b, {
            text: rV.tag
          })]
        })]
      })
    }

    function dx(VV) {
      let {
        idx: eV,
        status: xV,
        shownItem: JV,
        dim: UV,
        onHoverStart: yV,
        onHoverEnd: pV,
        onPadBack: QV
      } = VV;
      const nV = (0, YV.useRef)(null);
      (0, ix.f)(nV, {
        press: () => !1,
        back: QV,
        hints: {
          back: "inventoryBackToRecipes"
        }
      });
      const ZV = xV.need > 0 ? Math.min(xV.have / xV.need, 1) : 1;
      return (0, wV.jsxs)("div", {
        ref: nV,
        className: qx()("CupTile", {
          Short: xV.missing > 0
        }),
        style: {
          width: UV,
          height: UV
        },
        "data-craft-ingredient": eV,
        onPointerEnter: yV,
        onPointerLeave: pV,
        children: [(0, wV.jsx)("div", {
          className: "CupFill",
          style: {
            transform: `scaleY(${ZV})`
          }
        }), (0, wV.jsx)(Ux.e, {
          itemName: JV,
          amount: 0
        }), (0, wV.jsxs)("div", {
          className: "CupCount SmallTextBold",
          children: [fx(xV.have), "/", fx(xV.need)]
        })]
      })
    }

    function Ox(VV) {
      var eV, xV, JV, UV, yV;
      let {
        show: pV,
        recipeItem: {
          name: QV,
          ky: ZV,
          requires: vV,
          produces: rV,
          haveIngredients: kV
        },
        detail: bV,
        onCraft: EV,
        setHovered: BV,
        craftButtonRef: jV,
        onPadBack: qV,
        showPadShortcut: tV,
        refusedCount: FV,
        lock: TV,
        itemInfo: AV
      } = VV;
      const {
        t: NV
      } = (0, sV.A)(), XV = null !== bV && !bV.roomForOne, MV = null !== (eV = null === bV || void 0 === bV ? void 0 : bV.craftAllTimes) && void 0 !== eV ? eV : 0, zV = function(VV, eV) {
        return VV.map((VV => {
          let {
            items: xV,
            amt: JV
          } = VV, YV = 0;
          const UV = [];
          for (const yV of xV) {
            const VV = eV(yV);
            YV += VV, VV > 0 && UV.push(yV)
          }
          return 0 === UV.length && UV.push(xV[0]), {
            shownItems: UV,
            need: JV,
            have: YV,
            missing: Math.max(JV - YV, 0)
          }
        }))
      }(vV, (VV => {
        var eV;
        return null !== (eV = null === bV || void 0 === bV ? void 0 : bV.amounts[VV]) && void 0 !== eV ? eV : 0
      }));
      let GV = "4rem",
        WV = 4;
      3 === vV.length || 4 === vV.length ? GV = "3.75rem" : vV.length >= 5 && (GV = "3rem"), 4 === vV.length ? WV = 2 : vV.length <= 6 && (WV = 3);
      const RV = `calc(${WV} * ${GV} + ${WV-1} * 0.4rem + 1px)`,
        gV = (0, YV.useRef)(null),
        DV = (0, YV.useRef)(null);
      (0, YV.useLayoutEffect)((() => {
        gV.current.scrollTop = 0
      }), [QV, ZV]);
      const iV = (0, YV.useRef)(FV);
      (0, YV.useEffect)((() => {
        if (FV === iV.current) return;
        iV.current = FV;
        const VV = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? [{
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
        for (const JV of null !== (eV = null === (xV = gV.current) || void 0 === xV ? void 0 : xV.querySelectorAll(".CupTile.Short, .CantCraftInfo")) && void 0 !== eV ? eV : []) {
          var eV, xV;
          JV.animate(VV, {
            duration: 280,
            easing: "ease-out"
          })
        }
      }), [FV]);
      const CV = (VV, eV, xV) => {
          var JV;
          if ((0, mx.f)().has(QV)) return void(xV && clearInterval(aV.current));
          const YV = null !== (JV = null === bV || void 0 === bV ? void 0 : bV.resultStackable) && void 0 !== JV && JV,
            UV = Lx(nV.gameBridge.latest("inventory").player),
            {
              Ey: yV,
              Bw: pV,
              amountAddedToSlot: wV
            } = nV.gameBridge.send("craftRecipe", {
              name: QV,
              ky: ZV,
              times: eV || VV && YV ? null : 1
            });
          if (yV > 0) {
            const eV = [],
              JV = new Set(vV.flatMap((VV => {
                let {
                  items: eV
                } = VV;
                return eV
              }))),
              yV = function(VV, eV, xV) {
                const JV = [];
                for (let YV = 0; YV < VV.length; YV++) {
                  const UV = VV[YV];
                  if (!UV || !xV.has(UV.name)) continue;
                  const yV = eV[YV],
                    pV = (null === yV || void 0 === yV ? void 0 : yV.name) === UV.name ? yV.amount : 0;
                  pV < UV.amount && JV.push({
                    idx: YV,
                    itemName: UV.name,
                    amount: UV.amount - pV
                  })
                }
                return JV
              }(UV, Lx(nV.gameBridge.latest("inventory").player), JV).slice(0, 12),
              ZV = xV ? 0 : Math.min(50, 400 / yV.length),
              kV = xV ? 220 : 320;
            for (const VV of yV) {
              var rV;
              const xV = vV.findIndex((eV => {
                  let {
                    items: xV
                  } = eV;
                  return xV.includes(VV.itemName)
                })),
                JV = null === (rV = gV.current) || void 0 === rV ? void 0 : rV.querySelector(`[data-craft-ingredient="${xV}"]`),
                YV = (0, nx.f)(VV.idx);
              JV && YV && eV.push({
                kind: "ingredient",
                itemName: VV.itemName,
                amount: VV.amount,
                Bw: VV.idx,
                from: YV,
                to: (0, nx.f)(JV),
                delayMs: Math.round(eV.length * ZV),
                durationMs: kV
              })
            }
            let bV;
            if (null !== pV && wV > 0 && DV.current) {
              const VV = eV.length > 0 ? eV[eV.length - 1].delayMs + .6 * kV : 0;
              bV = {
                itemName: QV,
                amount: wV,
                Bw: pV,
                from: (0, nx.f)(DV.current),
                delayMs: Math.round(VV)
              }
            }
            EV(bV, VV && !YV ? pV : null, eV), px.d.play("wood1", .5).rate(1.75)
          }
        },
        aV = (0, YV.useRef)(null);
      (0, YV.useEffect)((() => () => {
        clearInterval(aV.current)
      }), []);
      const oV = (VV, eV) => {
          CV(VV, !1, !1), clearInterval(aV.current), eV && (aV.current = setTimeout((() => {
            aV.current = setInterval((() => {
              CV(VV, !1, !0)
            }), eV.intervalMs)
          }), eV.initialDelayMs))
        },
        cV = () => {
          clearInterval(aV.current)
        },
        hV = !kV || XV || Boolean(TV),
        lV = (0, YV.useRef)(null),
        LV = null !== (xV = null === (JV = (0, hx.c)()) || void 0 === JV ? void 0 : JV.hideButtonHints) && void 0 !== xV && xV,
        fV = null !== (UV = null === (yV = (0, cx.e)()) || void 0 === yV ? void 0 : yV.getBoundButton("inventorySecondary")) && void 0 !== UV ? UV : null,
        mV = () => !hV && (CV(!1, !0, !1), !0);
      (0, ix.f)(jV, {
        press: VV => "secondary" === VV ? mV() : !hV && (oV(!1, ux()), !0),
        release: cV,
        back: qV,
        hints: {
          primary: "inventoryCraft",
          secondary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      }), (0, ix.f)(lV, {
        press: mV,
        back: qV,
        hints: {
          primary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      });
      const [KV, HV] = (0, YV.useState)(0), [uV, SV] = (0, YV.useState)(null);
      (0, YV.useEffect)((() => {
        if (!0 === pV) {
          HV(0);
          const VV = setInterval((() => {
            HV((VV => VV + 1))
          }), 1e3);
          return () => {
            clearInterval(VV)
          }
        }
        return () => {}
      }), [pV]);
      const IV = null === bV || void 0 === bV ? void 0 : bV.ingredientsCraftedFrom,
        dV = (0, YV.useRef)(BV);
      (0, YV.useEffect)((() => {
        dV.current = BV
      }), [BV]);
      const OV = !(null === TV || void 0 === TV || !TV.hideIngredients);
      (0, YV.useEffect)((() => {
        var VV, eV;
        if (!uV) return;
        if (OV) return SV(null), void(null === (eV = dV.current) || void 0 === eV || eV.call(dV, !1));
        const xV = uV[KV % uV.length];
        null === (VV = dV.current) || void 0 === VV || VV.call(dV, !0, sx(xV, AV, null === IV || void 0 === IV ? void 0 : IV[xV]))
      }), [uV, KV, AV, IV, OV]);
      const Ve = !!TV,
        ee = (0, YV.useRef)(!1);
      (0, YV.useEffect)((() => {
        var VV;
        Ve && (clearInterval(aV.current), OV && ee.current && (ee.current = !1, null === (VV = dV.current) || void 0 === VV || VV.call(dV, !1)))
      }), [Ve, OV]);
      const xe = (0, nx.w)(AV, QV);
      return (0, wV.jsxs)("div", {
        ref: gV,
        className: "CraftableInfo SmallTextBold",
        children: [(0, wV.jsx)("div", {
          className: "CraftableHeader",
          children: (0, wV.jsx)(PV.b, {
            text: xe
          })
        }), !OV && (0, wV.jsx)("div", {
          className: qx()("CraftableIngredients", {
            Compact: vV.length >= 5
          }),
          style: {
            maxWidth: RV
          },
          children: zV.map(((VV, eV) => {
            const xV = VV.shownItems[KV % VV.shownItems.length];
            return (0, wV.jsx)(dx, {
              idx: eV,
              status: VV,
              shownItem: xV,
              dim: GV,
              onHoverStart: () => {
                SV(VV.shownItems)
              },
              onHoverEnd: () => {
                SV(null), null === BV || void 0 === BV || BV(!1)
              },
              onPadBack: qV
            }, eV)
          }))
        }), TV && (0, wV.jsx)("div", {
          className: "CantCraftInfo CraftableLockReason",
          children: (0, wV.jsx)(PV.b, {
            text: TV.reason
          })
        }), !TV && (!kV || XV) && (0, wV.jsxs)("div", {
          className: "CantCraftInfo",
          children: [!kV && "Missing ingredients", (0, wV.jsx)("br", {}), XV && "Inventory is full"]
        }), !OV && (0, wV.jsxs)(wV.Fragment, {
          children: [(0, wV.jsxs)(Kx, {
            ref: jV,
            className: "DoCraftButton",
            onPointerDown: VV => {
              oV((0, nx.z)(VV), (0, ax.u)(VV.nativeEvent) ? ux() : Hx)
            },
            onPointerUp: cV,
            onPointerLeave: cV,
            disabled: hV,
            children: [tV && fV && !hV && !LV && (0, wV.jsx)(ox.c, {
              className: "CraftShortcutGlyph",
              glyph: fV
            }), (0, wV.jsx)("div", {
              ref: DV,
              className: "DoCraftItem",
              onPointerEnter: () => {
                ee.current = !0, null === BV || void 0 === BV || BV(!0, sx(QV, AV))
              },
              onPointerLeave: () => {
                ee.current = !1, null === BV || void 0 === BV || BV(!1)
              },
              children: (0, wV.jsx)(Ux.e, {
                itemName: QV,
                amount: rV
              })
            })]
          }), (0, wV.jsxs)(Kx, {
            ref: lV,
            className: "DoCraftAllButton",
            onPointerDown: VV => {
              CV((0, nx.z)(VV), !0, !1)
            },
            disabled: hV,
            children: [(0, wV.jsx)("span", {
              className: "CraftAllLabel",
              children: NV("general:craftAll")
            }), MV > 0 && (0, wV.jsxs)("span", {
              className: "CraftAllCount",
              children: ["x", fx(MV)]
            })]
          })]
        })]
      })
    }

    function VJ(VV) {
      let {
        selectedIdx: eV,
        hidden: xV
      } = VV;
      const JV = (0, Yx.E)(),
        UV = (0, YV.useRef)(null);
      return (0, YV.useLayoutEffect)((() => {
        const VV = UV.current,
          JV = null === VV || void 0 === VV ? void 0 : VV.parentElement;
        if (!JV || !VV) return;
        const YV = JV.querySelector(".CraftableItems"),
          yV = () => {
            var UV, yV;
            if (xV) return void(VV.style.opacity = "0");
            const pV = null === YV || void 0 === YV ? void 0 : YV.children[eV],
              QV = null === (UV = null !== (yV = null === pV || void 0 === pV ? void 0 : pV.querySelector(".InvenItem")) && void 0 !== yV ? yV : pV) || void 0 === UV ? void 0 : UV.getBoundingClientRect();
            if (!QV || 0 === QV.width) return void(VV.style.opacity = "0");
            const nV = JV.getBoundingClientRect();
            VV.style.opacity = "1", VV.style.width = `${QV.width}px`, VV.style.height = `${QV.height}px`, VV.style.transform = `translate(${QV.left-nV.left+JV.scrollLeft}px, ${QV.top-nV.top+JV.scrollTop}px)`
          };
        yV();
        const pV = new MutationObserver(yV),
          QV = new ResizeObserver(yV);
        return QV.observe(JV), YV && (pV.observe(YV, {
          childList: !0,
          subtree: !0
        }), QV.observe(YV)), () => {
          pV.disconnect(), QV.disconnect()
        }
      }), [eV, xV]), (0, wV.jsx)("div", {
        ref: UV,
        className: qx()("SelectionReticle", {
          Secondary: JV
        })
      })
    }

    function eJ(VV, eV, xV) {
      return VV ? (0, Wx.b)(Rx.k, VV) ? xJ(VV, eV, xV) : VV : xV("classicGame:handCrafting")
    }

    function xJ(VV, eV, xV) {
      var JV;
      const YV = null === (JV = eV[VV]) || void 0 === JV ? void 0 : JV.displayName;
      if ("string" === typeof YV) return xV(YV);
      const UV = nV.gameBridge.latest("hiddenPlayerNames");
      return Array.isArray(YV) ? YV.map((VV => {
        if ("string" === typeof VV) return VV;
        if ("translationKey" in VV) return xV(VV.translationKey, (0, sV.p)(VV.params, UV));
        if ("str" in VV) {
          if ("string" === typeof VV.str) return VV.str;
          if ("translationKey" in VV.str) return xV(VV.str.translationKey, (0, sV.p)(VV.str.params, UV))
        }
        return ""
      })).join("") : YV && "translationKey" in YV ? xV(YV.translationKey, (0, sV.p)(YV.params, UV)) : VV
    }

    function JJ(VV, eV) {
      return VV === eV || null !== VV && null !== eV && VV.name === eV.name && VV.ky === eV.ky
    }

    function YJ(VV) {
      var eV, xV, JV;
      let {
        show: UV,
        onCraft: yV,
        dispatchSelectedCraftable: pV,
        selectedCraftable: QV,
        craftingStation: ZV,
        setHovered: vV
      } = VV;
      const {
        t: rV
      } = (0, sV.A)(), [kV, bV] = (0, YV.useState)(""), [EV, BV] = (0, YV.useState)(0);
      (0, YV.useEffect)((() => {
        UV || (bV(""), BV((VV => VV + 1)))
      }), [UV]);
      const [jV, qV] = (0, YV.useState)(ZV);
      jV !== ZV && (qV(ZV), "" !== kV && (bV(""), BV((VV => VV + 1))));
      const tV = (0, YV.useRef)(null),
        FV = (0, YV.useRef)(null),
        TV = (0, Cx.o)(),
        PV = TV.showing && "recipe" === TV.kind,
        [AV, NV] = (0, YV.useState)(0),
        MV = null !== ZV && void 0 !== ZV ? ZV : null,
        zV = (0, YV.useRef)(null),
        GV = VV => {
          return !((eV = zV.current) === (xV = VV) || null !== eV && null !== xV && eV.station === xV.station && JJ(eV.recipe, xV.recipe)) && (zV.current = VV, nV.gameBridge.send("focusCrafting", VV), !0);
          var eV, xV
        };
      GV(UV ? {
        station: MV,
        recipe: (null === (eV = zV.current) || void 0 === eV ? void 0 : eV.station) === MV ? zV.current.recipe : null
      } : null);
      let WV = nV.gameBridge.latest("crafting");
      const RV = (0, XV.h)("itemInfo"),
        gV = "" !== kV.trim(),
        DV = (0, mx.F)(),
        iV = (0, mx.B)(),
        CV = (0, mx.I)(),
        aV = function(VV, eV) {
          const [xV, JV] = (0, YV.useState)(!1);
          (0, YV.useEffect)((() => {
            if (!VV) return void JV(!1);
            const eV = setTimeout((() => {
              JV(!0)
            }), 0);
            return () => {
              clearTimeout(eV)
            }
          }), [VV]);
          const UV = VV && xV,
            yV = (0, YV.useRef)({
              station: eV,
              at: new Map
            });
          return (yV.current.station !== eV || !UV && yV.current.at.size > 0) && (yV.current = {
            station: eV,
            at: new Map
          }), UV ? yV.current.at : null
        }(UV, ZV);
      let oV = WV.recipes.filter((VV => {
        let {
          listed: eV
        } = VV;
        return eV
      }));
      if (gV) {
        const VV = [];
        for (const eV of WV.recipes) {
          var cV;
          const xV = null !== (cV = iV.get(eV.name)) && void 0 !== cV && cV.hideIngredients ? [] : eV.requires.flatMap((VV => {
              let {
                items: eV
              } = VV;
              return eV.flatMap((VV => [VV, xJ(VV, RV, rV)]))
            })),
            JV = lx(kV, [eV.name, xJ(eV.name, RV, rV)], xV);
          null !== JV && VV.push({
            item: eV,
            rank: JV
          })
        }
        VV.sort(((VV, eV) => VV.rank - eV.rank)), oV = VV.map((VV => {
          let {
            item: eV
          } = VV;
          return eV
        }))
      } else {
        if (aV && aV.size > 0) {
          const VV = WV.recipes.filter((VV => !VV.listed && aV.has(Sx(VV))));
          oV = oV.concat(VV)
        }
        oV = (0, mx.k)(oV, DV, iV, CV), aV && (oV = (0, mx.i)(oV, aV, Sx))
      }
      const hV = VV => oV.find((eV => Sx(eV) === VV)),
        lV = `${ZV}|${kV}`,
        [LV, fV] = (0, YV.useState)(null),
        mV = (null === LV || void 0 === LV ? void 0 : LV.context) === lV ? LV.key : null,
        KV = QV ? Sx(QV) : null,
        HV = null !== (xV = null !== (JV = hV(KV)) && void 0 !== JV ? JV : hV(mV)) && void 0 !== xV ? xV : oV[0],
        uV = HV ? Sx(HV) : null,
        SV = HV ? {
          name: HV.name,
          ky: HV.ky
        } : null;
      UV && GV({
        station: MV,
        recipe: SV
      }) && (WV = nV.gameBridge.latest("crafting")), uV !== KV && uV !== mV && fV(uV ? {
        context: lV,
        key: uV
      } : null), (0, YV.useEffect)((() => () => {
        zV.current = null, nV.gameBridge.send("focusCrafting", null)
      }), []);
      const IV = JJ(WV.detail, SV) ? WV.detail : null,
        dV = null !== IV && !IV.roomForOne,
        OV = oV.findIndex((VV => Sx(VV) === Sx(HV))),
        Ve = () => FV.current ? (0, ix.d)(FV.current) : null,
        ee = (0, YV.useRef)(null),
        xe = (0, YV.useRef)(0);
      xe.current++;
      const Je = xe.current;
      (0, YV.useEffect)((() => {
        const VV = ee.current;
        if (!VV || Je <= VV.afterRender) return;
        if (ee.current = null, VV.key !== uV) return;
        const eV = Ve();
        var xV;
        null !== eV && void 0 !== eV && eV.press("primary") && !VV.hn && (null === (xV = eV.release) || void 0 === xV || xV.call(eV))
      }));
      const Ye = VV => {
          const eV = {
            name: VV.name,
            ky: VV.ky
          };
          return {
            choose: () => {
              pV(eV), (0, Jx.l)(FV.current)
            },
            craft: () => {
              var VV, xV;
              return pV(eV), Sx(eV) !== Sx(HV) ? (ee.current = {
                key: Sx(eV),
                hn: !0,
                afterRender: xe.current
              }, !0) : null !== (VV = null === (xV = Ve()) || void 0 === xV ? void 0 : xV.press("primary")) && void 0 !== VV && VV
            },
            stopCraft: () => {
              var VV, eV;
              ee.current ? ee.current.hn = !1 : null === (VV = Ve()) || void 0 === VV || null === (eV = VV.release) || void 0 === eV || eV.call(VV)
            },
            refuse: () => {
              Sx(eV) !== Sx(HV) && pV(eV), NV((VV => VV + 1))
            }
          }
        },
        Ue = () => {
          var VV, eV, xV;
          (0, Jx.l)(null !== (VV = null === (eV = tV.current) || void 0 === eV || null === (xV = eV.querySelector(".CraftableItems")) || void 0 === xV ? void 0 : xV.children[OV]) && void 0 !== VV ? VV : null)
        },
        ye = oV.map(Sx).join("|"),
        pe = (0, YV.useRef)(ye);
      return (0, YV.useEffect)((() => {
        pe.current !== ye && (pe.current = ye, PV && OV >= 0 && (0, Cx.k)() && Ue())
      })), (0, wV.jsxs)("div", {
        className: "Craftables",
        children: [(0, wV.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: eJ(ZV, RV, rV)
        }), (0, wV.jsxs)("div", {
          className: "CraftablesBody",
          children: [(0, wV.jsx)(Dx.d, {
            className: "CraftingSearch",
            placeholderText: rV("general:searchRecipes"),
            defaultValue: kV,
            maxLength: 100,
            onValueChange: VV => {
              bV(VV)
            },
            blurOnEnter: !0
          }, EV), 0 === oV.length && gV && (0, wV.jsx)("div", {
            className: "CraftingNoMatches SmallTextBold",
            children: rV("general:noRecipesMatchSearch")
          }), oV.length > 0 && (0, wV.jsxs)(wV.Fragment, {
            children: [(0, wV.jsxs)("div", {
              ref: tV,
              className: "CraftablesLeftSide",
              children: [(0, wV.jsx)(gx.d, {
                lazyLoadedClassName: "CraftableItems",
                observerUpdateDeps: [JSON.stringify(oV.map((VV => {
                  let {
                    name: eV,
                    ky: xV,
                    haveIngredients: JV
                  } = VV;
                  return {
                    name: eV,
                    ky: xV,
                    haveIngredients: JV
                  }
                })))],
                observing: UV,
                children: oV.map((VV => {
                  const {
                    name: eV,
                    ky: xV,
                    haveIngredients: JV
                  } = VV, YV = Sx(VV);
                  return (0, wV.jsx)(Ix, {
                    recipeId: YV,
                    itemName: eV,
                    onClick: () => {
                      pV({
                        name: eV,
                        ky: xV
                      })
                    },
                    isSelected: Sx(HV) === YV,
                    haveIngredients: JV,
                    craftable: JV && !iV.has(eV) && !(Sx(HV) === YV && dV),
                    setHovered: vV,
                    padActions: Ye(VV),
                    marked: DV.has(eV),
                    lock: iV.get(eV),
                    itemInfo: RV
                  }, YV)
                }))
              }), (0, wV.jsx)(VJ, {
                selectedIdx: OV,
                hidden: PV && TV.steppingSlots
              })]
            }), (0, wV.jsx)(Ox, {
              show: UV,
              recipeItem: HV,
              detail: IV,
              onCraft: yV,
              setHovered: vV,
              craftButtonRef: FV,
              onPadBack: Ue,
              showPadShortcut: PV,
              refusedCount: AV,
              lock: iV.get(HV.name),
              itemInfo: RV
            })]
          })]
        })]
      })
    }
    var UJ = xV(35319),
      yJ = xV(3719),
      pJ = xV(2239),
      QJ = xV(9293);
    class nJ {
      constructor(VV, eV, xV) {
        this.commit = VV, this.delayMs = eV, this.defers = xV, this.pending = null, this.timer = void 0, this.hn = !1, this.flush = () => {
          clearTimeout(this.timer);
          const VV = this.pending;
          null !== VV && (this.pending = null, this.commit(VV))
        }
      }
      type(VV) {
        this.pending = VV, clearTimeout(this.timer), this.hn || this.defers() ? this.hn || (this.timer = setTimeout(this.flush, this.delayMs)) : this.flush()
      }
      getTyped(VV) {
        var eV;
        return null !== (eV = this.pending) && void 0 !== eV ? eV : VV
      }
      isHeld() {
        return this.hn
      }
      setHeld(VV) {
        this.hn = VV, VV || this.flush()
      }
    }

    function wJ(VV) {
      return null === VV ? "creativeInventory:all" : `creativeInventory:${VV}`
    }

    function ZJ(VV) {
      let {
        category: eV
      } = VV;
      return null === eV ? (0, wV.jsx)(EV.b, {
        name: "layer-group"
      }) : (0, wV.jsx)(Ux.e, {
        itemName: UJ.creativeItemCategoryIcons[eV],
        amount: 0
      })
    }

    function vJ(VV) {
      let {
        labelKey: eV,
        isSelected: xV,
        onSelect: JV,
        setHovered: YV,
        children: UV
      } = VV;
      return (0, wV.jsx)("div", {
        className: qx()("CreativeCategoryTab", {
          Selected: xV
        }),
        onClick: JV,
        onPointerEnter: VV => {
          (0, nx.u)(VV) || YV(!0, {
            name: {
              translationKey: eV
            },
            desc: ""
          })
        },
        onPointerLeave: () => {
          YV(!1)
        },
        children: UV
      })
    }

    function rJ(VV) {
      let {
        categories: eV,
        selectedCategory: xV,
        onSelect: JV
      } = VV;
      const {
        t: UV
      } = (0, sV.A)(), [yV, pV] = (0, YV.useState)(!1), QV = (0, YV.useRef)(null), nV = (0, YV.useCallback)((() => {
        pV(!1)
      }), []);
      return (0, pJ.c)(QV, nV), (0, wV.jsxs)("div", {
        className: "CreativeCategoryDropdown",
        ref: QV,
        children: [(0, wV.jsxs)("div", {
          className: "CreativeCategoryDropdownButton",
          onClick: () => {
            pV(!yV)
          },
          children: [(0, wV.jsx)("div", {
            className: "CreativeCategoryIcon",
            children: (0, wV.jsx)(ZJ, {
              category: xV
            })
          }), (0, wV.jsx)("span", {
            children: UV(wJ(xV))
          }), (0, wV.jsx)(EV.b, {
            name: yV ? "caret-up" : "caret-down"
          })]
        }), yV && (0, wV.jsx)("div", {
          className: "CreativeCategoryDropdownMenu",
          children: eV.map((VV => (0, wV.jsxs)("div", {
            className: qx()("CreativeCategoryDropdownOption", {
              Selected: xV === VV
            }),
            onClick: () => {
              JV(VV), pV(!1)
            },
            children: [(0, wV.jsx)("div", {
              className: "CreativeCategoryIcon",
              children: (0, wV.jsx)(ZJ, {
                category: VV
              })
            }), (0, wV.jsx)("span", {
              children: UV(wJ(VV))
            })]
          }, null !== VV && void 0 !== VV ? VV : "all")))
        })]
      })
    }
    const kJ = (0, YV.memo)((function(VV) {
      let {
        creativeScrollDiv: eV,
        playerInvenNumSlots: xV,
        getSetHoveringForIdx: JV,
        getPointerDownForIdx: UV,
        getPointerUpForIdx: yV,
        creativeSearchVal: pV,
        setCreativeSearchVal: nV,
        creativeCategory: ZV,
        setCreativeCategory: vV,
        show: rV
      } = VV;
      const {
        t: kV
      } = (0, sV.A)(), bV = (0, XV.h)("creativeVisibility"), {
        userContext: BV
      } = (0, TV.d)(), jV = (0, QV.j)("canUseDevCreativeItems"), qV = BV.playerHasRank("developer") || !!jV, tV = (0, YV.useMemo)((() => EJ("", bV, qV)), [bV, qV]), FV = (0, YV.useMemo)((() => {
        const VV = (0, UJ.creativeItemIds)(),
          eV = new Set(tV.map((eV => (0, UJ.creativeCategoryOf)(VV[eV]))));
        return UJ.creativeItemCategories.filter((VV => eV.has(VV)))
      }), [tV]), PV = null !== ZV && FV.includes(ZV) ? ZV : null, NV = (0, YV.useMemo)((() => "" === pV ? tV : EJ(pV, bV, qV)), [tV, pV, bV, qV]), MV = (0, YV.useMemo)((() => {
        const VV = (0, UJ.creativeItemIds)();
        return null !== PV ? NV.filter((eV => (0, UJ.creativeCategoryOf)(VV[eV]) === PV)) : "" === pV ? NV.filter((eV => !(0, UJ.showOnlyInCreativeCategory)(VV[eV]))) : NV
      }), [NV, PV, pV]), zV = JV();

      function GV(VV) {
        vV(VV), eV.current.scrollTop = 0
      }
      const WV = [null, ...FV],
        {
          isTouchScreen: RV
        } = (0, cV.l)(["isTouchScreen"]),
        gV = !RV,
        DV = (0, YV.useRef)(null),
        [iV, CV] = (0, YV.useState)(0);
      (0, YV.useEffect)((() => {
        const VV = DV.current;
        if (!VV) return;
        const eV = new ResizeObserver((VV => {
          CV(VV[0].contentRect.height)
        }));
        return eV.observe(VV), () => {
          eV.disconnect()
        }
      }), [gV]);
      const aV = (0, YV.useRef)(null),
        oV = (0, YV.useCallback)((function VV() {
          "up" === aV.current ? eV.current.scrollTop -= 10 : "down" === aV.current && (eV.current.scrollTop += 10), aV.current && requestAnimationFrame(VV)
        }), [eV]),
        hV = (0, YV.useCallback)((function(VV) {
          aV.current || (aV.current = VV, oV())
        }), [oV]);

      function lV() {
        aV.current = null
      }
      const LV = (0, YV.useRef)({
        creativeSearchVal: pV,
        setCreativeSearchVal: nV
      });
      LV.current = {
        creativeSearchVal: pV,
        setCreativeSearchVal: nV
      };
      const [fV] = (0, YV.useState)((() => new nJ((VV => {
        LV.current.setCreativeSearchVal(VV)
      }), 250, Yx.m))), mV = VV => {
        var xV;
        null === (xV = eV.current) || void 0 === xV || xV.classList.toggle("CreativeItemSlotsStale", VV)
      };
      (0, AV.g)(QJ.e, (VV => {
        fV.setHeld(VV), VV || mV(!1)
      })), (0, YV.useEffect)((() => fV.flush), [fV]);
      const KV = (0, wV.jsx)(Dx.d, {
          className: "CreativeItemSlotsSearch",
          placeholderText: "Search",
          defaultValue: pV,
          maxLength: 1e4,
          onValueChange: (VV, eV) => {
            "" === fV.getTyped(LV.current.creativeSearchVal) && "" !== VV && vV(null), fV.type(VV), mV(fV.isHeld())
          },
          onEnter: fV.flush,
          blurOnEnter: !0
        }),
        HV = (0, wV.jsxs)("div", {
          className: "CreateItemSlotsScrollable",
          children: [RV && (0, wV.jsxs)("div", {
            className: "CreativeScrollButtons",
            children: [(0, wV.jsx)("div", {
              className: "CreativeScrollButton Up",
              onPointerDown: () => {
                hV("up")
              },
              onPointerLeave: lV,
              onPointerUp: lV,
              children: (0, wV.jsx)(EV.b, {
                name: "arrow-up"
              })
            }), (0, wV.jsx)("div", {
              className: "CreativeScrollButton Down",
              onPointerDown: () => {
                hV("down")
              },
              onPointerLeave: lV,
              onPointerUp: lV,
              children: (0, wV.jsx)(EV.b, {
                name: "arrow-up"
              })
            })]
          }), (0, wV.jsxs)("div", {
            className: "CreativeItemSlots",
            ref: eV,
            children: [0 === MV.length && "" !== pV && (0, wV.jsx)("div", {
              className: "CreativeItemSlotsEmpty",
              children: kV("general:noResults")
            }), (0, wV.jsx)(gx.d, {
              lazyLoadedClassName: "CreativeItemSlotsInner",
              observerUpdateDeps: [pV, PV],
              observerRoot: "CreativeItemSlots",
              observing: rV,
              children: MV.map((VV => {
                const eV = xV + VV;
                return (0, wV.jsx)(Xx.c, {
                  idx: eV,
                  draggedInfo: null,
                  specialItemInfo: null,
                  setHovered: JV(eV),
                  pointerDown: UV(eV),
                  pointerUp: yV(eV)
                }, eV)
              }))
            })]
          })]
        });
      return (0, wV.jsxs)("div", {
        className: qx()("CreativeItemSlotsWrapper", gV ? "WithRail" : "WithDropdown"),
        children: [gV && (0, wV.jsx)("div", {
          className: "CreativeCategoryRail",
          ref: DV,
          style: {
            "--rail-height": iV > 0 ? `${iV}px` : void 0,
            "--tab-rows": Math.ceil(WV.length / 2)
          },
          children: WV.map((VV => (0, wV.jsx)(vJ, {
            labelKey: wJ(VV),
            isSelected: PV === VV,
            onSelect: () => {
              GV(VV)
            },
            setHovered: zV,
            children: (0, wV.jsx)(ZJ, {
              category: VV
            })
          }, null !== VV && void 0 !== VV ? VV : "all")))
        }), (0, wV.jsxs)("div", {
          className: "CreativeItemSlotsMain",
          children: [(0, wV.jsxs)("div", {
            className: "CreativeItemSlotsSearchRow",
            children: [KV, !gV && (0, wV.jsx)(rJ, {
              categories: WV,
              selectedCategory: PV,
              onSelect: GV
            })]
          }), HV]
        })]
      })
    }));

    function bJ(VV) {
      var eV;
      return null !== (eV = (0, yJ.g)(VV)) && void 0 !== eV ? eV : ""
    }

    function EJ(VV, eV, xV) {
      let {
        publicLobby: JV,
        shownInGame: YV
      } = eV;
      const UV = VV.toLowerCase(),
        yV = (0, UJ.creativeItemIds)(),
        pV = VV => {
          var eV;
          const UV = yV[VV];
          return !(0, UJ.itemIsDisabled)(UV, JV, null === (eV = YV[bJ(UV)]) || void 0 === eV || eV, xV)
        };
      if ("" === UV) return yV.map(((VV, eV) => eV)).filter((VV => !(0, UJ.showOnlyInCreativeSearch)(yV[VV]))).filter(pV);
      const QV = [];
      for (let nV = 0; nV < yV.length; nV++) bJ(yV[nV]).toLowerCase().includes(UV) && QV.push(nV);
      QV.sort(((VV, eV) => {
        const xV = bJ(yV[VV]).toLowerCase(),
          JV = bJ(yV[eV]).toLowerCase();
        return xV.indexOf(UV) - JV.indexOf(UV)
      }));
      for (const [nV, wV] of(0, UJ.creativeAltNames)())
        for (const VV of wV)
          if (VV.toLowerCase().includes(UV)) {
            const VV = yV.indexOf(nV);
            QV.includes(VV) || QV.push(VV)
          } return QV.filter(pV)
    }
    var BJ = xV(38021),
      jJ = xV(657);

    function qJ(VV) {
      return VV > jJ.k
    }

    function tJ(VV) {
      const eV = VV / 2,
        xV = [];
      for (let JV = 0; JV < eV / 6; JV++)
        for (let VV = 0; VV < 12; VV++) {
          const YV = VV < 6 ? 0 : eV;
          xV.push(YV + 6 * JV + VV % 6)
        }
      return xV
    }

    function FJ(VV) {
      let {
        numSlots: eV,
        renderSlot: xV
      } = VV;
      const {
        t: JV
      } = (0, sV.A)(), UV = (0, YV.useRef)(null);
      var yV;
      return yV = UV, (0, YV.useLayoutEffect)((() => {
        var VV;
        const eV = null === (VV = yV.current) || void 0 === VV ? void 0 : VV.closest(".InvenBody");
        if (!eV) return;
        const xV = () => {
          eV.style.zoom = "";
          const VV = parseFloat(getComputedStyle(document.documentElement).fontSize),
            xV = window.innerWidth - 2 * VV,
            JV = eV.getBoundingClientRect().width;
          JV > xV && (eV.style.zoom = "" + xV / JV)
        };
        return xV(), window.addEventListener("resize", xV), () => {
          window.removeEventListener("resize", xV), eV.style.zoom = ""
        }
      }), [yV]), (0, wV.jsxs)("div", {
        ref: UV,
        className: "ChestItemSlots DoubleChestSlots",
        children: [(0, wV.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: JV("doubleChest:title")
        }), (0, wV.jsx)("div", {
          className: "GridItemSlots",
          children: tJ(eV).map((VV => xV(VV)))
        })]
      })
    }

    function TJ(VV) {
      let {
        ix: eV,
        initialPasskey: xV
      } = VV;
      const {
        t: JV
      } = (0, sV.A)(), [UV, yV] = (0, YV.useState)(xV), [pV, QV] = (0, YV.useState)(xV);
      (0, YV.useEffect)((() => {
        yV(xV), QV(xV)
      }), [...eV]);
      return (0, wV.jsxs)("div", {
        className: "IronChestPasskeyEditorWrapper",
        children: [(0, wV.jsx)("div", {
          className: "SmallTextBold",
          children: JV("ironChest:currentPasskey", {
            currentPasskey: UV.join("")
          })
        }), (0, wV.jsx)(Tx, {
          className: "IronChestPasskeyEditor",
          ly: pV,
          onPasskeyUpdated: QV,
          confirmText: "ironChest:changePasskey",
          onConfirm: () => {
            nV.gameBridge.send("changeIronChestPasskey", {
              pos: [...eV],
              ly: [...pV]
            }), yV([...pV])
          }
        })]
      })
    }

    function PJ(VV, eV) {
      return "Iron" === VV.type && VV.ironChest.ownerDbId === eV
    }

    function AJ(VV) {
      let {
        variation: eV,
        canCraft: xV,
        show: JV,
        creativeMounted: YV,
        specialItemRef: UV,
        draggedInfo: yV,
        getSetHovering: pV,
        getPointerDownForIdx: QV,
        getPointerUpForIdx: nV,
        enchantingTablePosition: ZV,
        enchantingTableBlockName: vV,
        selectedCraftable: rV,
        dispatchSelectedCraftable: kV,
        creativeScrollDiv: bV,
        creativeSearchVal: EV,
        setCreativeSearchVal: BV,
        creativeCategory: jV,
        setCreativeCategory: qV,
        onCraft: tV
      } = VV;
      const {
        userContext: FV
      } = (0, TV.d)(), {
        t: PV
      } = (0, sV.A)(), AV = (0, XV.e)("inventory", (VV => VV.chest)), NV = (0, XV.e)("inventory", (VV => VV.player.length)), MV = (0, XV.e)("inventory", (VV => VV.creative));
      if (0 === NV) return null;
      let zV, GV;
      const WV = VV => {
          const eV = NV + VV;
          return (0, wV.jsx)(Xx.c, {
            idx: eV,
            draggedInfo: yV,
            specialItemInfo: UV.current,
            setHovered: pV(eV),
            pointerDown: QV(eV),
            pointerUp: nV(eV)
          }, eV)
        },
        RV = AV ? (0, BJ.d)(AV.type) : null;
      if (RV) zV = qx()("InvenLeftSideChestCustom", RV.className), GV = (0, wV.jsx)("div", {
        className: "ChestItemSlotsWrapper",
        children: RV.render({
          ix: AV.pos,
          renderSlot: WV
        })
      });
      else if (AV) {
        const VV = AV.pos,
          eV = "Iron" === AV.type || "Moonstone" === AV.type ? AV.type : "Standard";
        zV = `InvenLeftSideChest${eV}`;
        const xV = qJ(AV.numSlots);
        GV = (0, wV.jsxs)("div", {
          className: "ChestItemSlotsWrapper",
          children: [PJ(AV, FV.whamm) && (0, wV.jsx)(TJ, {
            ix: VV,
            initialPasskey: AV.ironChest.ly
          }), xV && (0, wV.jsx)(FJ, {
            numSlots: AV.numSlots,
            renderSlot: WV
          }), !xV && (0, wV.jsxs)("div", {
            className: "ChestItemSlots",
            children: [(0, wV.jsx)("div", {
              className: "InvenLeftSideHeader SmallTextBold",
              children: PV("Moonstone" === eV ? "item:moonstoneChest" : "Iron" === eV ? "item:ironChest" : "item:chest")
            }), (0, wV.jsx)("div", {
              className: "GridItemSlots",
              children: new Array(AV.numSlots).fill(0).map(((VV, eV) => WV(eV)))
            })]
          })]
        })
      } else if (!MV || eV && xV)
        if (xV && "Enchanting Table" === eV) zV = `InvenLeftSide${(null!==vV&&void 0!==vV?vV:"").replace(/ /gi,"")}`, GV = (0, wV.jsx)(Mx, {
          specialItemInfo: UV.current,
          setHovered: pV,
          pointerDown: QV(Zx.f),
          pointerUp: nV(Zx.f),
          enchantingTablePosition: ZV,
          enchantingTableBlockName: vV
        });
        else if (xV && "Salvaging Table" === eV) zV = "InvenLeftSideSalvagingTable", GV = (0, wV.jsx)(Gx, {
        specialItemInfo: UV.current,
        setSpecialItemInfo: VV => {
          UV.current = VV
        },
        setHovered: pV,
        pointerDown: QV(Zx.f),
        pointerUp: nV(Zx.f)
      });
      else {
        if (!xV) return null;
        zV = `InvenLeftSide${(null!==eV&&void 0!==eV?eV:"HandCrafting").replace(/ /gi,"")}`, GV = (0, wV.jsx)(YJ, {
          show: JV,
          onCraft: tV,
          craftingStation: eV,
          selectedCraftable: rV,
          dispatchSelectedCraftable: kV,
          setHovered: pV()
        })
      } else zV = "InvenLeftSideCreative", GV = YV ? (0, wV.jsx)(kJ, {
        creativeScrollDiv: bV,
        playerInvenNumSlots: NV,
        getSetHoveringForIdx: pV,
        getPointerDownForIdx: QV,
        getPointerUpForIdx: nV,
        creativeSearchVal: EV,
        setCreativeSearchVal: BV,
        creativeCategory: jV,
        setCreativeCategory: qV,
        show: JV
      }) : null;
      const gV = !!AV || xV && !!eV;
      return (0, wV.jsx)("div", {
        className: `InvenLeftSide ${zV}`,
        "data-pad-inventory-start": gV ? "" : void 0,
        children: GV
      })
    }
    var NJ = xV(648),
      XJ = xV(20839),
      MJ = xV(20846),
      zJ = xV(20852);
    const GJ = {
      Helmet: {
        sprite: "empty_armor_slot_helmet",
        image: xV(20860)
      },
      Chestplate: {
        sprite: "empty_armor_slot_chestplate",
        image: MJ
      },
      Gauntlets: {
        sprite: "empty_armor_slot_gauntlets",
        image: zJ
      },
      Leggings: {
        sprite: "empty_armor_slot_leggings",
        image: xV(20862)
      },
      Boots: {
        sprite: "empty_armor_slot_boots",
        image: XJ
      }
    };

    function WJ(VV) {
      const {
        sprite: eV,
        image: xV
      } = GJ[VV];
      return Ke(eV, Le.f.ITEM, xV)
    }

    function RJ(VV) {
      let {
        draggedInfo: eV,
        specialItemInfo: xV,
        craftFlyAnims: JV,
        getSetHovering: YV,
        getPointerDownForIdx: UV,
        getPointerUpForIdx: yV,
        variation: pV,
        canCraft: QV,
        isNewSlot: nV
      } = VV;
      const ZV = (0, XV.e)("inventory", (VV => VV.player.length));
      return 0 === ZV ? null : (0, wV.jsxs)("div", {
        className: "InvenBodyRight",
        children: [(0, wV.jsx)("div", {
          className: "ArmourItemSlots",
          children: new Array(NJ.b.length).fill(0).map(((VV, vV) => {
            const rV = ZV - NJ.b.length + vV;
            return (0, wV.jsx)(Xx.c, {
              idx: rV,
              draggedInfo: eV,
              specialItemInfo: xV,
              craftFlyHoldbackInfo: (0, wx.l)(JV, rV),
              setHovered: YV(rV),
              pointerDown: UV(rV),
              pointerUp: yV(rV),
              defaultIconB64: WJ(NJ.b[vV]),
              variation: QV ? pV : void 0,
              showNewDot: nV(rV)
            }, rV)
          }))
        }), (0, wV.jsx)("div", {
          className: "GridItemSlots",
          children: new Array(ZV - 10 - NJ.b.length).fill(0).map(((VV, vV) => {
            const rV = ZV - NJ.b.length - vV - 1;
            return (0, wV.jsx)(Xx.c, {
              idx: rV,
              draggedInfo: eV,
              specialItemInfo: xV,
              craftFlyHoldbackInfo: (0, wx.l)(JV, rV),
              setHovered: YV(rV),
              pointerDown: UV(rV),
              pointerUp: yV(rV),
              variation: QV ? pV : void 0,
              showNewDot: nV(rV)
            }, rV)
          }))
        })]
      })
    }
    var gJ = xV(38023),
      DJ = xV(38028);

    function iJ(VV) {
      const {
        e: eV,
        idx: xV
      } = VV, JV = (0, nx.n)(VV.readInventory(), xV), YV = (0, nx.s)(eV);
      xV === Zx.d ? function(VV, eV) {
        const {
          draggedInfoRef: xV,
          removeItem: JV,
          removeDraggedInfoRef: YV,
          close: UV
        } = VV;
        if (xV.current) {
          const VV = eV && xV.current.amount || 1;
          JV(xV.current.idx, VV, !0) && (xV.current.amount -= VV, xV.current.amount <= 0 && YV())
        } else eV && UV()
      }(VV, YV) : xV === Zx.f ? function(VV, eV) {
        const {
          e: xV,
          draggedInfoRef: JV,
          specialItemRef: YV,
          moveAmtIntoSlot: UV,
          removeDraggedInfoRef: yV
        } = VV;
        if ((0, nx.z)(xV) && YV.current) YV.current = null;
        else if (JV.current && YV.current && (JV.current.idx === YV.current.idx || (0, DJ.c)(JV.current, YV.current)) && JV.current.amount > 0 && YV.current.amount > 0 && YV.current.amount < tx.f.maxItemStackSize)
          if (JV.current.idx === YV.current.idx) {
            if (eV) {
              const VV = Math.min(JV.current.amount, tx.f.maxItemStackSize - YV.current.amount);
              YV.current.amount += VV, JV.current.amount -= VV
            } else JV.current.amount--, YV.current.amount++;
            JV.current.amount <= 0 && yV()
          } else if (eV) {
          const VV = Math.min(JV.current.amount, tx.f.maxItemStackSize - YV.current.amount);
          UV(YV.current.idx, VV) && (YV.current.amount += VV)
        } else {
          UV(YV.current.idx, 1) && YV.current.amount++
        } else if (JV.current && !YV.current && !eV && JV.current.amount > 0) JV.current.amount--, YV.current = {
          idx: JV.current.idx,
          name: JV.current.name,
          attributes: JV.current.attributes,
          amount: 1
        }, JV.current.amount <= 0 && yV();
        else {
          const VV = JV.current;
          JV.current = YV.current, YV.current = VV
        }
      }(VV, YV) : (0, nx.z)(eV) ? function(VV, eV) {
        var xV, JV;
        const {
          idx: YV,
          draggedInfoRef: UV,
          specialItemRef: yV,
          canCraft: pV,
          variation: QV,
          swapSlots: nV,
          moveIntoSlots: wV
        } = VV;
        if (!eV) return;
        let ZV = eV.amount;
        YV === (null === (xV = UV.current) || void 0 === xV ? void 0 : xV.idx) && (ZV = UV.current.amount <= 0 ? 0 : eV.amount - UV.current.amount);
        YV === (null === (JV = yV.current) || void 0 === JV ? void 0 : JV.idx) && (ZV = yV.current.amount <= 0 ? 0 : eV.amount - yV.current.amount);
        if (0 === ZV) return;
        const vV = VV.readInventory(),
          rV = vV.player.length,
          kV = vV.chest,
          bV = rV - NJ.b.length,
          EV = () => {
            if (!(0, Yx.m)()) return void wV(10, bV, YV, ZV);
            const VV = VV => {
              const xV = (0, nx.n)(vV, VV);
              return xV ? {
                amount: xV.amount,
                stacksWithMoved: (0, DJ.c)(xV, eV)
              } : null
            };
            for (const eV of ((VV, eV, xV, JV, YV) => {
                const UV = [];
                let yV = JV;
                if (null !== JV) {
                  let pV = 0;
                  for (let JV = eV; JV < xV; JV++) {
                    const eV = VV(JV);
                    null !== eV && void 0 !== eV && eV.stacksWithMoved && null !== eV.amount && eV.amount > 0 && (pV += Math.max(0, YV - eV.amount))
                  }
                  const QV = Math.min(JV, pV);
                  if (QV > 0 && (UV.push({
                      start: eV,
                      end: xV,
                      amount: QV
                    }), yV = JV - QV), yV <= 0) return UV
                }
                for (let pV = xV - 1; pV >= eV; pV--)
                  if (null === VV(pV)) {
                    UV.push({
                      start: pV,
                      end: pV + 1,
                      amount: yV
                    });
                    break
                  } return UV
              })(VV, 10, bV, ZV, tx.f.maxItemStackSize)) wV(eV.start, eV.end, YV, eV.amount)
          };
        if (!pV || "Enchanting Table" !== QV && "Salvaging Table" !== QV) {
          const xV = (0, NV.zb)(eV.name),
            JV = xV ? (0, NV.vb)(xV) : null;
          if (!NJ.b.includes(xV) || YV !== JV && (0, nx.q)(vV, VV.itemInfo, JV, YV))
            if (kV)
              if (YV < rV) {
                var BV, jV;
                const [VV, eV] = null !== (BV = null === (jV = (0, BJ.d)(kV.type)) || void 0 === jV ? void 0 : jV.quickMoveRange) && void 0 !== BV ? BV : [0, kV.numSlots];
                wV(rV + VV, rV + eV, YV, ZV)
              } else wV(0, rV - NJ.b.length, YV, ZV);
          else vV.creative ? YV < 10 ? EV() : YV < rV ? wV(0, 10, YV, ZV) : wV(0, rV - NJ.b.length, YV, null !== eV.amount ? tx.f.maxItemStackSize : null) : YV < 10 ? EV() : wV(0, 10, YV, ZV);
          else YV < rV - NJ.b.length || YV >= rV ? nV(JV, YV) : (wV(0, rV - NJ.b.length, JV, ZV), px.d.play("equip_leather1", 1).rate(.9 + .3 * Math.random()))
        } else yV.current = {
          idx: YV,
          name: eV.name,
          attributes: eV.attributes,
          amount: null !== eV.amount ? ZV : 0
        }
      }(VV, JV) : VV.draggedInfoRef.current ? function(VV, eV, xV, JV) {
        const {
          draggedInfoRef: YV,
          specialItemRef: UV,
          moveAmtIntoSlot: yV,
          swapSlots: pV,
          removeItem: QV,
          removeDraggedInfoRef: nV
        } = VV, wV = VV.readInventory(), ZV = YV.current.idx;
        if (xV && (eV === ZV || (0, DJ.c)(YV.current, xV)) && YV.current.amount > 0 && (0, nx.b)(xV) > 0 && (xV.amount < tx.f.maxItemStackSize || eV === ZV)) JV ? xV.amount + YV.current.amount <= tx.f.maxItemStackSize || eV === ZV ? yV(eV, YV.current.amount) : yV(eV, tx.f.maxItemStackSize - xV.amount) : yV(eV, 1);
        else if (YV.current.amount > 0 && !xV) yV(eV, JV ? YV.current.amount : 1);
        else if (JV || xV || 0 === YV.current.amount)
          if (wV.creative && !wV.chest && eV >= wV.player.length) {
            const VV = 0 === YV.current.amount ? 1 : YV.current.amount;
            QV(YV.current.idx, VV, !1) && nV()
          } else {
            var vV;
            const xV = (null === (vV = UV.current) || void 0 === vV ? void 0 : vV.idx) === eV;
            if (pV(eV, YV.current.idx)) {
              const JV = VV.readInventory(),
                yV = (0, nx.n)(JV, ZV),
                pV = !JV.chest && JV.creative && YV.current.idx >= JV.player.length;
              if (yV && YV.current.idx !== eV && !pV) {
                let VV = (0, nx.b)(yV);
                xV && (VV -= UV.current.amount), YV.current = xV && 0 === VV ? null : {
                  idx: YV.current.idx,
                  name: yV.name,
                  attributes: yV.attributes,
                  amount: VV
                }
              } else nV()
            }
          }
        else yV(eV, 1)
      }(VV, xV, JV, YV) : function(VV, eV, xV, JV) {
        var YV;
        const {
          draggedInfoRef: UV,
          specialItemRef: yV
        } = VV;
        if (!xV) return;
        let pV = (0, nx.b)(xV);
        const QV = (null === (YV = yV.current) || void 0 === YV ? void 0 : YV.idx) === eV;
        QV && (pV -= yV.current.amount);
        JV || (pV = Math.ceil(pV / 2));
        UV.current = QV && 0 === pV ? null : {
          idx: eV,
          name: xV.name,
          attributes: xV.attributes,
          amount: pV
        }
      }(VV, xV, JV, YV)
    }
    var CJ = xV(2752);

    function aJ(VV, eV, xV) {
      return Math.round((eV + VV) * xV) / xV - eV
    }
    const oJ = new WeakMap;

    function cJ(VV) {
      const eV = window.devicePixelRatio || 1,
        xV = oJ.get(VV);
      if (xV && xV.pixelRatio === eV && xV.width === window.innerWidth && xV.height === window.innerHeight) return xV;
      let JV = 0,
        YV = 0;
      const UV = VV.offsetParent;
      if (UV) {
        const VV = UV.getBoundingClientRect();
        JV = VV.left + UV.clientLeft, YV = VV.top + UV.clientTop
      }
      const yV = {
        left: JV,
        top: YV,
        pixelRatio: eV,
        width: window.innerWidth,
        height: window.innerHeight,
        halfRem: .5 * (0, CJ.U)(document)
      };
      return oJ.set(VV, yV), yV
    }

    function hJ(VV, eV, xV) {
      const {
        left: JV,
        top: YV,
        pixelRatio: UV
      } = cJ(VV);
      return `translate(${aJ(eV,JV,UV)}px, ${aJ(xV,YV,UV)}px)`
    }

    function lJ(VV) {
      const {
        halfRem: eV
      } = cJ(VV);
      return hJ(VV, eV, eV)
    }

    function LJ(VV, eV) {
      return !!eV && eV.name === VV.name
    }

    function fJ() {
      return nV.gameBridge.latest("inventory")
    }

    function mJ(VV, eV, xV) {
      return nV.gameBridge.send("removeInventoryItem", {
        slot: VV,
        amount: eV,
        drop: xV
      })
    }

    function KJ(VV) {
      return (0, nx.j)(VV, nV.gameBridge.latest("itemInfo"), nV.gameBridge.latest("stationItems").enchantable)
    }

    function HJ(VV) {
      let {
        show: eV,
        close: xV,
        canCraft: JV,
        variation: UV,
        inventoryItemsMoveable: yV,
        setCraftFlyAnims: pV
      } = VV;
      (0, XV.h)("itemInfo");
      const [QV, wV] = (0, YV.useState)(null), [ZV, vV] = (0, YV.useState)(null), [rV, kV] = (0, YV.useState)(!1), bV = (0, YV.useRef)(null), EV = (0, YV.useRef)(null), BV = (0, YV.useRef)(null), jV = (0, YV.useRef)(null), [qV, tV] = (0, YV.useReducer)((VV => VV + 1), 0), FV = (0, YV.useCallback)((() => {
        eV && tV()
      }), [eV, tV]), TV = (0, YV.useCallback)((() => {
        EV.current = null, iV.current = null, FV()
      }), [FV]), PV = (0, YV.useCallback)(((VV, eV) => {
        pV((xV => xV.map((xV => "ingredient" === xV.kind ? xV : xV.Bw === VV ? {
          ...xV,
          Bw: eV,
          to: (0, nx.f)(eV)
        } : xV.Bw === eV ? {
          ...xV,
          Bw: VV,
          to: (0, nx.f)(VV)
        } : xV))))
      }), [pV]), AV = (0, YV.useCallback)(((VV, eV) => {
        const xV = oV.current;
        if (xV.x = VV, xV.y = eV, bV.current) !cV.current.isTouch || cV.current.itemBeingDragged && !iV.current ? (bV.current.style.transform = hJ(bV.current, xV.x, xV.y), kV(cV.current.isTouch && !iV.current)) : (bV.current.style.transform = lJ(bV.current), kV(!0));
        else if (jV.current) {
          const xV = jV.current;
          let JV = VV + 10,
            YV = eV + 10;
          const UV = xV.offsetWidth,
            yV = xV.offsetHeight;
          JV + UV > window.innerWidth && (JV = VV - UV - 10), YV + yV > window.innerHeight && (YV = eV - yV - 10), JV < 0 && (JV = 0), YV < 0 && (YV = 0), jV.current.style.transform = `translate(${JV}px, ${YV}px)`
        }
      }), []), MV = (0, YV.useCallback)((VV => (eV, xV, JV) => {
        if (wV(eV && void 0 !== VV ? VV : null), eV) {
          if (void 0 === VV && !xV) return void(0, gJ.c)("Error in invenComp", new Error("isHovering true but no idx or text"));
          if (void 0 !== VV) {
            var YV;
            const eV = fJ();
            let xV;
            if (xV = VV === Zx.f ? BV.current ? (0, nx.n)(eV, BV.current.idx) : null : (0, nx.n)(eV, VV), !xV) return void vV(null);
            if ((null === (YV = BV.current) || void 0 === YV ? void 0 : YV.idx) === VV) {
              if (0 === (0, nx.b)(xV) - BV.current.amount) return void vV(null)
            }
            vV(KJ(xV))
          } else vV({
            name: xV.name,
            desc: xV.desc,
            fontStyle: "normal"
          })
        } else vV(null);
        JV && setTimeout((() => {
          AV(JV.pageX, JV.pageY)
        }), 0)
      }), [AV]), zV = (0, YV.useCallback)(((VV, eV) => {
        const xV = nV.gameBridge.send("moveInventoryItem", {
          from: EV.current.idx,
          to: VV,
          amount: eV
        });
        return xV ? (EV.current.amount -= eV, EV.current.amount <= 0 && TV()) : console.error("moveInventoryItem failed"), xV
      }), [TV]), GV = (0, YV.useCallback)(((VV, eV) => {
        const xV = BV.current,
          JV = null === xV || void 0 === xV ? void 0 : xV.idx;
        xV && (xV.idx = function(VV, eV, xV) {
          return VV === eV ? xV : VV === xV ? eV : VV
        }(JV, VV, eV));
        const YV = nV.gameBridge.send("swapInventorySlots", {
          a: VV,
          b: eV
        });
        return YV ? PV(VV, eV) : xV && (xV.idx = JV), YV
      }), [PV]), WV = (0, YV.useCallback)(((VV, eV, xV, JV) => {
        const YV = nV.gameBridge.send("quickMoveInventoryItem", {
          slot: xV,
          start: VV,
          end: eV,
          amount: JV
        });
        null !== YV && PV(xV, YV)
      }), [PV]), RV = (0, YV.useCallback)(((VV, eV) => {
        var YV;
        ((VV, eV, xV) => {
          const JV = VV - (xV - NJ.b.length);
          return !(!eV || JV < 0 || JV >= NJ.b.length) && (0, NV.zb)(eV) !== NJ.b[JV]
        })(eV, null === (YV = EV.current) || void 0 === YV ? void 0 : YV.name, fJ().player.length) || (iJ({
          e: VV,
          idx: eV,
          readInventory: fJ,
          itemInfo: nV.gameBridge.latest("itemInfo"),
          draggedInfoRef: EV,
          specialItemRef: BV,
          moveAmtIntoSlot: zV,
          swapSlots: GV,
          moveIntoSlots: WV,
          removeItem: mJ,
          removeDraggedInfoRef: TV,
          close: xV,
          canCraft: JV,
          variation: UV
        }), FV())
      }), [JV, xV, zV, WV, TV, GV, UV, FV]), gV = (0, YV.useRef)(0), DV = (0, YV.useRef)(null), iV = (0, YV.useRef)(null), CV = (0, YV.useRef)(null), aV = (0, YV.useRef)(new Set), oV = (0, YV.useRef)({
        x: 0,
        y: 0
      }), cV = (0, YV.useRef)({
        isTouch: !1,
        itemBeingDragged: !1
      }), hV = (0, YV.useCallback)((() => (CV.current = null, cV.current.itemBeingDragged = !1, clearTimeout(DV.current), !!iV.current && (iV.current = null, FV(), !0))), [FV]);
      (0, YV.useEffect)((() => {
        hV(), aV.current.clear()
      }), [eV]);
      const lV = VV => void 0 !== VV && (aV.current.has(VV) || null !== CV.current && VV !== CV.current),
        LV = VV => {
          cV.current.isTouch = (0, nx.u)(VV)
        },
        fV = (0, YV.useCallback)((VV => eV => {
          const JV = (0, nx.u)(eV);
          if (JV || AV(eV.pageX, eV.pageY), yV)
            if (lV(eV.pointerId)) void 0 !== eV.pointerId && aV.current.add(eV.pointerId);
            else {
              if (LV(eV), JV) {
                gV.current = eV.timeStamp, cV.current.itemBeingDragged = !0, CV.current = eV.pointerId;
                const xV = (0, nx.n)(fJ(), VV);
                if (xV && xV.amount && xV.amount > 0) {
                  const xV = eV.pageX,
                    JV = eV.pageY,
                    YV = oV.current.x,
                    UV = oV.current.y;
                  clearTimeout(DV.current), DV.current = setTimeout((() => {
                    if (EV.current && EV.current.idx === VV && (Math.abs(xV - oV.current.x) < 20 && Math.abs(JV - oV.current.y) < 20 || YV === oV.current.x && UV === oV.current.y) && cV.current.itemBeingDragged) {
                      const VV = fJ(),
                        xV = VV.creative && !VV.chest && EV.current.idx >= tx.f.numInvenSlots && null !== (0, nx.n)(VV, EV.current.idx).amount ? tx.f.maxItemStackSize : EV.current.amount;
                      iV.current = {
                        initTouchX: eV.pageX,
                        initTouchY: eV.pageY,
                        maxAmount: xV
                      }, EV.current.amount = Math.ceil(EV.current.amount / 2), bV.current.style.transform = lJ(bV.current), kV(!0), FV()
                    }
                  }), 500)
                }
              }
              RV(eV, VV)
            }
          else VV === Zx.d && (0, nx.s)(eV) && xV()
        }), [AV, RV, yV, xV, FV]),
        mV = (0, YV.useCallback)((VV => VV => {
          if (lV(VV.pointerId)) return;
          const eV = (0, nx.u)(VV);
          if (LV(VV), !hV()) {
            if (eV && EV.current && VV.timeStamp - gV.current > 150) {
              const eV = document.elementFromPoint(VV.clientX, VV.clientY);
              if (null !== eV) {
                const xV = eV.getAttribute("data-inven-idx");
                null !== xV ? RV(VV, parseInt(xV)) : eV.classList.contains("InventoryBackgroundScreen") && RV(VV, -1)
              }
            }
            AV(VV.pageX, VV.pageY)
          }
        }), [AV, RV, hV]);
      (0, YV.useEffect)((() => {
        let VV;
        const xV = ["pointerup", "pointercancel"],
          JV = VV => {
            aV.current.has(VV.pointerId) ? setTimeout((() => {
              aV.current.delete(VV.pointerId)
            }), 0) : VV.pointerId === CV.current && setTimeout((() => {
              CV.current === VV.pointerId && hV()
            }), 0)
          };
        if (eV) {
          for (const VV of xV) document.addEventListener(VV, JV, !0);
          if (!cV.current.isTouch) {
            const VV = oV.current;
            AV(VV.x, VV.y)
          }
          VV = VV => {
            VV.preventDefault(), lV(VV.pointerId) || (LV(VV), AV(VV.pageX, VV.pageY), iV.current && VV.pointerId === CV.current && (VV => {
              if (!EV.current) return iV.current = null, void FV();
              const {
                initTouchX: eV,
                maxAmount: xV
              } = iV.current, JV = (VV.pageX - eV) * iV.current.maxAmount / 160, YV = Math.ceil(xV / 2) + Math.ceil(JV);
              EV.current.amount = Math.min(xV, Math.max(1, YV)), FV()
            })(VV))
          }, document.addEventListener("pointermove", VV, !0)
        }
        return () => {
          document.removeEventListener("pointermove", VV, !0);
          for (const VV of xV) document.removeEventListener(VV, JV, !0)
        }
      }));
      const KV = (0, YV.useCallback)((() => {
          if (EV.current) {
            const VV = (0, nx.n)(fJ(), EV.current.idx);
            (!LJ(EV.current, VV) || VV.amount < EV.current.amount) && TV()
          }
        }), [TV]),
        HV = (0, YV.useCallback)((() => {
          const VV = EV.current;
          if (VV) {
            const eV = (0, nx.n)(fJ(), VV.idx);
            LJ(VV, eV) && (VV.attributes = eV.attributes)
          }
        }), []);
      return {
        draggedDomRef: bV,
        draggedInfoRef: EV,
        specialItemRef: BV,
        hoverInfoDomRef: jV,
        longHoldSplitInfoRef: iV,
        currHoveredIdx: QV,
        currHoveredDisplayInfo: ZV,
        displayDraggedItemName: rV,
        forceRerenderIfVisible: FV,
        removeDraggedInfoRef: TV,
        checkDraggedItemConsistencyWithInven: KV,
        refreshDraggedAttributes: HV,
        swapSlots: GV,
        getPointerDownForIdx: fV,
        getPointerUpForIdx: mV,
        getSetHovering: MV,
        setCurrHoveredDisplayInfo: vV,
        moveFollowerTo: AV
      }
    }
    class uJ {
      constructor(VV) {
        this.snapshot = [], this.newSlots = new Set, this.update(VV, !1)
      }
      update(VV, eV) {
        const xV = VV.map((VV => {
          var eV;
          return VV ? {
            name: VV.name,
            amount: null !== (eV = VV.amount) && void 0 !== eV ? eV : 1
          } : null
        }));
        xV.forEach(((VV, xV) => {
          const JV = this.snapshot[xV],
            YV = (null === VV || void 0 === VV ? void 0 : VV.name) !== (null === JV || void 0 === JV ? void 0 : JV.name);
          (!VV || YV || VV.amount < JV.amount) && this.newSlots.delete(xV), eV && VV && (YV || VV.amount > JV.amount) && this.newSlots.add(xV)
        })), this.snapshot = xV
      }
      clearMarks() {
        this.newSlots.clear()
      }
      isNew(VV) {
        return this.newSlots.has(VV)
      }
    }
    const sJ = (VV, eV, xV) => ({
      button: eV,
      shiftKey: xV,
      pageX: VV.clientX,
      pageY: VV.clientY,
      clientX: VV.clientX,
      clientY: VV.clientY,
      pointerType: "mouse"
    });

    function SJ(VV) {
      const [eV, xV] = (0, YV.useState)(VV);
      return VV && !eV && xV(!0), (0, YV.useEffect)((() => {
        if (eV) return;
        let VV = !0;
        const JV = () => {
            VV && (VV = !1, xV(!0))
          },
          YV = "function" === typeof window.requestIdleCallback,
          UV = YV ? window.requestIdleCallback(JV, {
            timeout: 2e3
          }) : void 0,
          yV = setTimeout(JV, YV ? 2e3 : 1e3);
        return () => {
          VV = !1, clearTimeout(yV), void 0 !== UV && window.cancelIdleCallback(UV)
        }
      }), [eV]), eV
    }
    const IJ = (0, YV.memo)((function(VV) {
      var eV;
      let {
        show: xV,
        onOpen: JV,
        onClose: UV,
        variation: pV
      } = VV;
      const ZV = (0, YV.useRef)(null),
        vV = (0, YV.useRef)(null),
        rV = function(VV) {
          const [eV, xV] = (0, YV.useState)(!0), [JV, UV] = (0, YV.useState)(!1), yV = (0, YV.useRef)(null), pV = (0, YV.useRef)(null), nV = (0, QV.j)("_shield"), wV = (0, YV.useRef)(null), ZV = (0, QV.j)("_health"), vV = (0, YV.useRef)(null);

          function rV(VV) {
            const eV = Date.now() + VV;
            eV < pV.current || (xV(!1), clearTimeout(yV.current), pV.current = eV, yV.current = setTimeout((() => {
              xV(!0)
            }), VV))
          }
          return (0, YV.useEffect)((() => {
            rV(rx);
            const VV = kV.h.subscribe("requestingPlayVideoAd", (() => {
              rV(rx)
            }));
            return () => {
              clearTimeout(yV.current), kV.h.unsubscribe(VV)
            }
          }), []), (0, YV.useEffect)((() => {
            (wV.current > nV || vV.current > ZV) && rV(6e4), wV.current = nV, vV.current = ZV
          }), [nV, ZV]), (0, YV.useEffect)((() => {
            let eV = null;
            return VV ? eV = setTimeout((() => {
              UV(!0)
            }), 250) : UV(!1), () => {
              clearTimeout(eV)
            }
          }), [VV]), eV && JV
        }(xV);
      (0, AV.j)(xx.c, null);
      const bV = (0, xx.m)(),
        EV = bV.some((VV => VV.panel)),
        {
          userContext: BV
        } = (0, TV.d)(),
        jV = (0, XV.e)("inventory", (VV => {
          const eV = VV.chest;
          return null !== eV && (qJ(eV.numSlots) || PJ(eV, BV.whamm))
        })),
        qV = SJ(xV),
        tV = SJ(xV),
        [FV, PV] = (0, YV.useState)([]),
        MV = (0, YV.useCallback)((VV => {
          PV((eV => eV.filter((eV => eV.id !== VV))))
        }), []),
        zV = (0, YV.useRef)(null),
        GV = (0, YV.useRef)(0),
        WV = (0, YV.useCallback)((() => {
          zV.current && (GV.current = zV.current.scrollTop), UV()
        }), [UV]),
        RV = (0, QV.j)("inventoryItemsMoveable"),
        gV = (0, QV.j)("canCraft"),
        {
          clientEscMenuOptions: iV
        } = (0, cV.l)(["clientEscMenuOptions"]),
        CV = (0, YV.useRef)(null);
      CV.current || (CV.current = new uJ(nV.gameBridge.latest("inventory").player));
      const aV = CV.current,
        {
          draggedDomRef: oV,
          draggedInfoRef: hV,
          specialItemRef: lV,
          hoverInfoDomRef: LV,
          longHoldSplitInfoRef: fV,
          currHoveredIdx: mV,
          currHoveredDisplayInfo: KV,
          displayDraggedItemName: HV,
          forceRerenderIfVisible: uV,
          removeDraggedInfoRef: sV,
          checkDraggedItemConsistencyWithInven: SV,
          refreshDraggedAttributes: IV,
          swapSlots: dV,
          getPointerDownForIdx: OV,
          getPointerUpForIdx: Ve,
          getSetHovering: ee,
          setCurrHoveredDisplayInfo: xe,
          moveFollowerTo: Je
        } = HJ({
          show: xV,
          close: WV,
          canCraft: gV,
          variation: pV,
          inventoryItemsMoveable: RV,
          setCraftFlyAnims: PV
        });
      (0, YV.useEffect)((() => {
        const VV = !xV && null !== nV.gameBridge.latest("inventory").chest;
        if (VV && nV.gameBridge.send("closeChest", null), xV || (aV.clearMarks(), ee(null)(!1)), VV) {
          px.d.play("chestClose", 1).rate(.8 + .4 * Math.random())
        }
      }), [xV]), (0, XV.c)("chestToggled", (VV => {
        if (VV ? JV() : xV && WV(), VV) {
          px.d.play("chestOpen", 1).rate(.8 + .4 * Math.random())
        }
      }));
      const Ye = (0, Ge.h)();
      (0, XV.c)("inventory", (VV => {
        let {
          player: eV
        } = VV;
        var JV, YV, UV;
        (aV.update(eV, !xV && Ye.shown), lV.current) && (lV.current = (YV = lV.current, UV = null !== (JV = eV[lV.current.idx]) && void 0 !== JV ? JV : null, LJ(YV, UV) ? (YV.attributes = UV.attributes, null !== UV.amount && YV.amount > UV.amount && (YV.amount = UV.amount), YV) : null));
        IV(), null !== mV && ee(mV)(!0), uV()
      })), (0, YV.useEffect)((() => (nV.gameBridge.send("setInventoryOpen", xV), () => {
        nV.gameBridge.send("setInventoryOpen", !1)
      })), [xV]);
      const Ue = (VV, eV) => {
        if (VV === Zx.f) return void(VV => {
          const eV = lV.current;
          if (!eV || null === (0, nx.n)(nV.gameBridge.latest("inventory"), eV.idx)) return;
          const xV = VV ? Math.max(eV.amount, 1) : 1,
            JV = eV.amount - xV;
          if (!nV.gameBridge.send("removeInventoryItem", {
              slot: eV.idx,
              amount: xV,
              drop: !0
            })) return;
          const YV = lV.current;
          YV && (YV.amount = Math.min(YV.amount, JV), YV.amount <= 0 && (lV.current = null)), uV()
        })(eV);
        const xV = null === VV ? null : (0, nx.n)(nV.gameBridge.latest("inventory"), VV);
        if (null !== xV) {
          var JV, YV, UV;
          const yV = eV && null !== (JV = xV.amount) && void 0 !== JV ? JV : 1;
          nV.gameBridge.send("removeInventoryItem", {
            slot: VV,
            amount: yV,
            drop: !0
          }), VV === (null === (YV = hV.current) || void 0 === YV ? void 0 : YV.idx) && (hV.current.amount -= yV, hV.current.amount <= 0 && sV(), uV()), VV === (null === (UV = lV.current) || void 0 === UV ? void 0 : UV.idx) && (lV.current = null, uV())
        }
      };
      (0, XV.c)("inventoryDropRequested", (VV => {
        xV && mV !== Zx.f && Ue(mV, VV)
      }));
      const ye = (VV, eV) => {
        let xV = eV;
        if (eV === Zx.f) {
          if (!lV.current) return;
          xV = lV.current.idx
        }
        const JV = dV(VV, xV);
        if (JV && hV.current && (hV.current.idx === xV ? hV.current.idx = VV : hV.current.idx === VV && (hV.current.idx = xV)), JV && eV === Zx.f) {
          const VV = (0, nx.n)(nV.gameBridge.latest("inventory"), xV);
          lV.current = VV ? {
            idx: xV,
            name: VV.name,
            attributes: VV.attributes,
            amount: (0, nx.b)(VV)
          } : null
        }
        uV()
      };
      (0, XV.c)("numberKeyPressed", (VV => {
        null !== mV && xV && ye(VV - 1, mV)
      })), (0, YV.useEffect)((() => {
        xV || (lV.current = null, sV(), xe(null))
      }), [xV, sV, xe, lV]);
      const pe = lV.current;
      (0, YV.useEffect)((() => {
        mV === Zx.f && ee(Zx.f)(!0)
      }), [pe, mV, ee]);
      const Qe = () => {
        SV(), IV(), uV()
      };
      (0, XV.c)("chestRefreshed", Qe), (0, XV.c)("inventorySynced", Qe);
      const [ne, we] = (0, YV.useState)(new Map), Ze = null !== (eV = ne.get(pV)) && void 0 !== eV ? eV : null, ve = (VV, eV) => {
        we((xV => {
          const JV = xV.get(VV);
          return JV && JV.name === eV.name && JV.ky === eV.ky ? xV : new Map(xV).set(VV, eV)
        }))
      };
      (0, AV.g)("craftingRecipesEdited", (() => {
        uV()
      })), (0, AV.g)(mx.d, (VV => {
        let {
          variation: eV,
          itemName: xV
        } = VV;
        ve(eV, {
          name: xV,
          ky: 0
        })
      }));
      const [re, ke] = (0, YV.useState)(null), [be, Ee] = (0, YV.useState)(null);
      (0, XV.c)("enchantingTableOpened", (VV => {
        let {
          position: eV,
          blockName: xV
        } = VV;
        ke(eV), Ee(xV)
      }));
      const [Be, je] = (0, YV.useState)(""), [qe, te] = (0, YV.useState)(null);
      (0, YV.useEffect)((() => {
        xV && zV.current && (zV.current.scrollTop = GV.current)
      }), [xV]);
      return (VV => {
        const eV = (0, YV.useRef)(VV);
        eV.current = VV, (0, YV.useEffect)((() => {
          if (!VV.show) return;
          const xV = (VV, xV, JV, YV) => {
              const {
                getPointerDownForIdx: UV,
                getPointerUpForIdx: yV
              } = eV.current;
              UV(VV)(sJ(xV, JV, YV)), yV(VV)(sJ(xV, JV, YV))
            },
            JV = {
              primary: (VV, eV) => {
                xV(VV, eV, 0, !1)
              },
              secondary: (VV, eV) => {
                xV(VV, eV, 2, !1)
              },
              quickMove: (VV, eV) => {
                xV(VV, eV, 0, !0)
              },
              dropHeld: (VV, xV) => {
                eV.current.getPointerDownForIdx(Zx.d)(sJ(xV, VV ? 0 : 2, !1))
              },
              dropSlot: (VV, xV) => {
                eV.current.dropFromIdx(VV, xV)
              },
              swapWithHotbar: (VV, xV) => {
                eV.current.swapWithHotbar(VV, xV)
              },
              cancel: () => {
                eV.current.removeDraggedInfoRef()
              },
              isHolding: () => !!eV.current.draggedInfoRef.current,
              hasItemAt: VV => {
                const {
                  draggedInfoRef: xV,
                  specialItemRef: JV
                } = eV.current;
                if (VV === Zx.f) return !!JV.current;
                const YV = (0, nx.n)(nV.gameBridge.latest("inventory"), VV);
                return !!YV && (0, Xx.d)(VV, (0, nx.b)(YV), [xV.current, JV.current]).shown
              },
              hover: (VV, xV) => {
                const {
                  moveFollowerTo: JV,
                  getSetHovering: YV
                } = eV.current;
                JV(xV.clientX, xV.clientY), YV(null !== VV && void 0 !== VV ? VV : void 0)(null !== VV, void 0, {
                  pageX: xV.clientX,
                  pageY: xV.clientY
                })
              },
              moveTo: VV => {
                eV.current.moveFollowerTo(VV.clientX, VV.clientY)
              },
              close: () => {
                eV.current.close()
              }
            };
          return (0, Jx.i)(JV)
        }), [VV.show])
      })({
        show: xV,
        close: WV,
        draggedInfoRef: hV,
        specialItemRef: lV,
        getPointerDownForIdx: OV,
        getPointerUpForIdx: Ve,
        getSetHovering: ee,
        moveFollowerTo: Je,
        removeDraggedInfoRef: sV,
        dropFromIdx: Ue,
        swapWithHotbar: ye
      }), (0, YV.useEffect)((() => {
        kV.h.QZ("inventoryDraggedItemUpdated", {
          draggedInfo: hV.current,
          specialItemInfo: lV.current,
          setHovered: ee,
          pointerDown: OV,
          pointerUp: Ve,
          variation: gV ? pV : void 0,
          craftFlyAnims: FV
        })
      })), (0, wV.jsxs)(DV.d, {
        show: xV,
        style: {
          touchAction: xV ? "none" : void 0
        },
        children: [hV.current && (0, wV.jsx)(bx, {
          draggedInfo: hV.current,
          toAddRef: oV
        }), hV.current && HV && (0, wV.jsx)(Ex, {
          className: "DraggedInvenItemName",
          displayInfo: KJ(hV.current),
          domRef: null
        }), !hV.current && KV && (0, wV.jsx)(Ex, {
          displayInfo: KV,
          domRef: LV
        }), fV.current && hV.current && (0, wV.jsx)(Bx, {
          info: fV.current,
          draggedInfo: hV.current
        }), FV.map((VV => (0, wV.jsx)(wx.e, {
          anim: VV,
          onComplete: MV
        }, VV.id))), (0, wV.jsx)(yV.e, {
          show: xV,
          className: "InventoryBackgroundScreen",
          globallyUniqueKey: "Inventory",
          close: WV,
          togglePointerLock: !1,
          closeOnPressBackground: !1,
          preventContextMenu: !0,
          pointerDown: OV(Zx.d),
          pointerUp: Ve(Zx.d),
          doGameplayStartStopOnShow: !0
        }), qV && (0, wV.jsxs)("div", {
          className: "EntireInventoryWrapper",
          children: [(0, wV.jsx)("div", {
            ref: ZV,
            className: "InventoryAdOuter",
            children: (0, wV.jsx)(Qx.e, {
              info: {
                adType: "leaderboard",
                adId: 6,
                adAlias: "inventory"
              },
              sizeInfo: {
                parentRef: ZV
              },
              verticalAlign: "start",
              showing: xV && rV,
              extraContrastBackgroundBox: "top",
              noFillShowBloxdAdProbability: 0,
              autoRefreshMode: "none"
            })
          }), (0, wV.jsxs)("div", {
            className: "InventoryWrapper",
            children: [(0, wV.jsxs)("div", {
              className: qx()("Inventory", {
                WithGameButtons: bV.length > 0,
                WithPanelButtons: EV,
                WideChestOpen: jV
              }),
              children: [(0, wV.jsx)("div", {
                className: "InventoryFiller"
              }), (0, wV.jsx)(yx, {
                show: xV,
                buttons: bV
              }), (0, wV.jsxs)("div", {
                className: "InvenBody",
                children: [(0, wV.jsx)(AJ, {
                  variation: pV,
                  canCraft: gV,
                  show: xV,
                  creativeMounted: tV,
                  specialItemRef: lV,
                  draggedInfo: hV.current,
                  getSetHovering: ee,
                  getPointerDownForIdx: OV,
                  getPointerUpForIdx: Ve,
                  enchantingTablePosition: re,
                  enchantingTableBlockName: be,
                  selectedCraftable: Ze,
                  dispatchSelectedCraftable: VV => {
                    ve(pV, VV)
                  },
                  creativeScrollDiv: zV,
                  creativeSearchVal: Be,
                  setCreativeSearchVal: je,
                  creativeCategory: qe,
                  setCreativeCategory: te,
                  onCraft: function(VV, eV) {
                    let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    if (SV(), (VV || xV.length > 0) && PV((eV => {
                        const JV = [...eV],
                          YV = eV.filter((VV => "ingredient" === VV.kind)).length;
                        for (const VV of xV.slice(0, Math.max(0, 24 - YV))) JV.push({
                          id: (0, wx.i)(),
                          ...VV,
                          to: VV.to
                        });
                        return VV && JV.push({
                          id: (0, wx.i)(),
                          ...VV,
                          to: (0, nx.f)(VV.Bw)
                        }), JV
                      })), null !== eV) {
                      var JV;
                      const VV = nV.gameBridge.latest("inventory");
                      (0, NV.zb)(null === (JV = (0, nx.n)(VV, eV)) || void 0 === JV ? void 0 : JV.name) ? OV(eV)({
                        button: 0,
                        shiftKey: !0
                      }): dV(eV, VV.selectedSlot)
                    }
                  }
                }), (0, wV.jsx)(RJ, {
                  draggedInfo: hV.current,
                  specialItemInfo: lV.current,
                  craftFlyAnims: FV,
                  getSetHovering: ee,
                  getPointerDownForIdx: OV,
                  getPointerUpForIdx: Ve,
                  variation: pV,
                  canCraft: gV,
                  isNewSlot: VV => iV.showNewItemIndicator && aV.isNew(VV)
                })]
              })]
            }), (0, wV.jsx)("div", {
              className: "InventoryAdOuter",
              children: (0, wV.jsx)("div", {
                ref: vV,
                className: "InventoryAd",
                children: (0, wV.jsx)("div", {
                  className: "InventoryAdInner"
                })
              })
            })]
          })]
        })]
      })
    }));
    var dJ = xV(1530),
      OJ = xV(138);
    const VY = (0, YV.memo)((function(VV) {
      let {
        show: eV,
        onOpen: xV,
        onClose: JV
      } = VV;
      const UV = (0, YV.useRef)(0),
        pV = () => (0, dJ.k)() && !(0, dJ.s)() && UV.current <= 2;
      eV = pV() && eV;
      const QV = () => {
        UV.current++, JV()
      };
      (0, AV.g)("ctrlCrouchWithoutFullscreen", (() => {
        pV() && xV()
      })), (0, AV.g)("displaymodeFullscreenChange", (VV => {
        eV && VV && QV()
      }));
      const nV = "crazygames" === OJ.siteUsed;
      return (0, wV.jsx)(yV.e, {
        close: QV,
        escDoesExit: !0,
        show: eV,
        togglePointerLock: !1,
        globallyUniqueKey: "CantCtrlCrouchIfNotFullscreenComp",
        children: (0, wV.jsxs)("div", {
          className: "CantCtrlCrouchIfNotFullscreenComp SmallTextBold",
          children: [(0, wV.jsx)("div", {
            className: "CantCtrlCrouchHeader",
            children: "Go fullscreen to crouch with ctrl"
          }), nV && (0, wV.jsx)("div", {
            className: "CantCtrlCrouchInstructions SmallTextLight",
            children: "Press the crazygames full screen button"
          }), (0, wV.jsx)("div", {
            className: "CantCtrlCrouchSubtext SmallTextLight",
            children: "(Otherwise I can't stop CTRL+W closing the window!)"
          }), (0, wV.jsxs)("div", {
            className: "CantCtrlCrouchButtonsContainer",
            children: [!nV && (0, wV.jsx)(rV.m, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                (0, dJ.v)(), QV()
              },
              children: (0, wV.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Go Fullscreen"
              })
            }), (0, wV.jsx)(rV.E, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                QV()
              },
              children: (0, wV.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Nevermind"
              })
            })]
          })]
        })
      })
    }));
    var eY = xV(3023),
      xY = xV(3048),
      JY = xV(1439),
      YY = xV(4004),
      UY = xV(1442),
      yY = xV(3069),
      pY = xV(4011),
      QY = xV(4020);

    function nY(VV, eV) {
      return (0, yY.g)(!0, VV, eV) ? () => {
        !async function(VV) {
          await YY.d.refresh();
          const {
            data: eV,
            failed: xV
          } = YY.d.getState();
          if (null === eV || xV) return;
          const JV = YY.d.getExclusion(VV);
          if ("blocked" === JV) return;
          const YV = null === JV;
          JY.NotificationProvider.showCustomPopup({
            body: eV => {
              const xV = xV => ({
                text: pY.l[xV].text,
                onClick: () => {
                  eV(), (0, QY.d)(xV, VV, null)
                }
              });
              return (0, wV.jsx)(UY.e, {
                title: YV ? "socialBar:ignoreOrBlockAfterReport" : "socialBar:blockAfterReport",
                textOpts: {
                  title: {
                    playerName: VV
                  }
                },
                secondary: YV ? xV("ignore") : void 0,
                confirm: xV("block"),
                cancel: {
                  text: "socialBar:notNow",
                  onClick: eV
                },
                destructive: !0
              })
            },
            disableExitButton: !0,
            unlockPointerKey: "exclusionAfterReport"
          })
        }(VV)
      } : null
    }
    xV(3038);
    const wY = (0, YV.memo)((function(VV) {
      let {
        show: eV,
        onOpen: xV,
        onClose: JV
      } = VV;
      const [UV, pV] = (0, YV.useState)(""), [QV, ZV] = (0, YV.useState)(""), [vV, rV] = (0, YV.useState)(null), [kV, bV] = (0, YV.useState)(null), EV = (0, XV.h)("hiddenPlayerNames"), BV = {
        kind: "worldCodeLine",
        onSubmit: (VV, eV) => {
          JV(), nV.gameBridge.send("reportWorldCodeChat", {
            chatMsgId: kV,
            Fn: VV,
            details: eV
          })
        }
      }, jV = {
        kind: "player",
        shownPlayerName: (0, ee.g)(UV, EV),
        onSubmit: (VV, eV) => {
          JV(), (0, xY.e)({
            playerId: QV,
            playerName: UV,
            chatMsgId: kV,
            policyId: VV,
            details: eV,
            onAccepted: nY(UV, EV)
          })
        }
      };
      return (0, AV.g)("OpenReportMenu", (VV => {
        let {
          playerEId: eV,
          playerName: JV,
          yZ: YV,
          serverChatMsgId: UV
        } = VV;
        ZV(eV), pV(JV), rV(YV), bV(UV), xV()
      })), (0, wV.jsx)(yV.e, {
        show: eV,
        close: JV,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeReportComponent",
        children: (0, wV.jsx)("div", {
          className: "ReportPanel",
          children: eV && (0, wV.jsx)(eY.e, {
            reported: null === QV ? BV : jV,
            chatMessage: vV,
            inGame: !0,
            onCancel: JV
          })
        })
      })
    }));
    var ZY = xV(38036),
      vY = xV(3030);
    const rY = {
        playerGone: "report:reportKeyPlayerGone",
        rateLimited: "report:reportKeyRateLimited",
        timedOut: "report:reportKeyTimedOut"
      },
      kY = (0, YV.memo)((function(VV) {
        var eV, xV;
        let {
          show: JV,
          onOpen: UV,
          onClose: pV
        } = VV;
        const {
          t: QV
        } = (0, sV.A)(), [ZV, vV] = (0, YV.useState)(null), [kV, bV] = (0, YV.useState)(0);
        (0, AV.g)("OpenDiscordReportBox", (VV => {
          nV.gameBridge.send("requestDiscordReportKey", VV), vV(null), bV(0), UV()
        })), (0, AV.g)("setDiscordReportKey", vV);
        const EV = JV && null === ZV;
        (0, YV.useEffect)((() => {
          if (!EV) return;
          const VV = setTimeout((() => {
            console.warn("No answer to a Discord report key request within 10000 ms"), vV({
              vV: null,
              rV: "timedOut"
            })
          }), 1e4);
          return () => {
            clearTimeout(VV)
          }
        }), [EV]);
        const BV = null !== (eV = null === ZV || void 0 === ZV ? void 0 : ZV.vV) && void 0 !== eV ? eV : null,
          jV = null !== (xV = null === ZV || void 0 === ZV ? void 0 : ZV.rV) && void 0 !== xV ? xV : null;
        return (0, wV.jsx)(yV.e, {
          show: JV,
          close: pV,
          padShowsHud: !0,
          togglePointerLock: !1,
          escDoesExit: !0,
          className: "ReportBackgroundScreen",
          globallyUniqueKey: "MakeDiscordReportComponent",
          children: (0, wV.jsx)("div", {
            className: "ReportPanel",
            children: (0, wV.jsxs)(UY.e, {
              className: "ReportKeyBox",
              title: "report:discordReportTitle",
              subtitle: null === jV ? "report:discordReportDescription" : void 0,
              confirm: null === jV ? {
                text: "report:openDiscord",
                onClick: () => {
                  window.open(ZY.d, "_blank", "noreferrer")
                },
                padMouseOnly: !0
              } : void 0,
              cancel: {
                text: null === jV ? "general:cancel" : "general:ok",
                onClick: pV
              },
              padStartsOn: "cancel",
              children: [null !== jV && (0, wV.jsx)(vY.d, {
                children: QV(rY[jV])
              }), null === jV && (0, wV.jsxs)("div", {
                className: "ReportKeyRow",
                children: [(0, wV.jsx)("div", {
                  className: "ReportKeyInner",
                  children: null !== BV && void 0 !== BV ? BV : QV("report:loadingReportKey")
                }), (0, wV.jsx)(rV.f, {
                  className: "ReportKeyCopyButton",
                  onClick: () => {
                    navigator.clipboard.writeText(BV).catch((VV => {
                      console.error("Failed to copy report key:", VV)
                    })), bV(Date.now())
                  },
                  disabled: Date.now() - kV < 1e3 || !BV,
                  children: Date.now() - kV < 1e3 ? QV("general:copied") : QV("general:copy")
                })]
              })]
            })
          })
        })
      }));
    var bY = xV(1332);
    const EY = {
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
      BY = (0, YV.memo)((function(VV) {
        let {
          show: eV,
          onOpen: xV,
          onClose: JV
        } = VV;
        const [UV, pV] = (0, YV.useState)(null), QV = (0, YV.useRef)(0), ZV = (0, YV.useRef)(null), {
          t: vV
        } = (0, sV.A)();
        (0, AV.g)("EditCustomLobbyBlock", (VV => {
          let {
            pos: eV
          } = VV;
          pV(eV), null !== eV && xV(), ZV.current.scrollTo(0, QV.current)
        }));
        const rV = VV => {
          nV.gameBridge.send("setCustomLobbyBlock", {
            pos: UV,
            blockName: VV
          }), JV()
        };
        return (0, wV.jsx)(yV.e, {
          className: "CustomLobbyBlockEditorOuter",
          close: JV,
          escDoesExit: !0,
          show: eV,
          togglePointerLock: !1,
          globallyUniqueKey: "CustomLobbyBlockEditor",
          children: (0, wV.jsx)("div", {
            className: "CustomLobbyBlockEditor",
            ref: ZV,
            onScroll: () => {
              QV.current = ZV.current.scrollTop
            },
            children: (0, wV.jsx)("div", {
              className: "CustomLobbyBlockGameContainer",
              children: Object.entries(EY).map((VV => {
                let [eV, xV] = VV;
                return (0, wV.jsxs)("div", {
                  className: "CustomLobbyBlockGame",
                  children: [(0, wV.jsx)("h2", {
                    className: "CustomLobbyBlockGameTitle",
                    children: vV(eV)
                  }), (0, wV.jsx)("div", {
                    className: "CustomLobbyBlockCategoryContainer",
                    children: Object.entries(xV).map((VV => {
                      let [eV, {
                        tooltip: xV,
                        blocks: JV
                      }] = VV;
                      return (0, wV.jsxs)("div", {
                        className: "CustomLobbyBlockCategory",
                        children: [(0, wV.jsxs)("h3", {
                          className: "CustomLobbyBlockCategoryTitle",
                          children: [vV(eV), (0, wV.jsx)(HV.c, {
                            hoverInfo: vV(xV),
                            className: "CustomLobbyBlockTooltip"
                          })]
                        }), (0, wV.jsx)("div", {
                          className: "CustonLobbyBlockContainer",
                          children: JV.map((VV => (0, wV.jsx)(jY, {
                            blockName: VV,
                            selectBlock: rV
                          }, VV)))
                        })]
                      }, eV)
                    }))
                  })]
                }, eV)
              }))
            })
          })
        })
      })),
      jY = (0, YV.memo)((function(VV) {
        var eV;
        let {
          blockName: xV,
          selectBlock: JV
        } = VV;
        const YV = (0, yJ.d)(xV),
          UV = null !== (eV = void 0 === YV ? void 0 : (0, UJ.displayNameOf)(YV)) && void 0 !== eV ? eV : xV,
          yV = void 0 === YV ? void 0 : (0, UJ.descriptionOf)(YV);
        return (0, wV.jsx)(HV.d, {
          tooltipInner: (0, wV.jsxs)("div", {
            className: "CustomLobbyBlockNameTooltip",
            children: [(0, wV.jsx)("div", {
              className: "CustomLobbyBlockName",
              children: (0, wV.jsx)(PV.b, {
                text: UV
              })
            }), yV && (0, wV.jsx)("div", {
              className: "CustomLobbyBlockDescription",
              children: (0, wV.jsx)(PV.b, {
                text: yV
              })
            })]
          }),
          children: (0, wV.jsx)("div", {
            className: "CustomLobbyBlockButton",
            onClick: () => JV(xV),
            children: (0, wV.jsx)(Ux.e, {
              itemName: xV,
              amount: 1
            })
          })
        }, xV)
      }));
    var qY = xV(2871),
      tY = xV(4632),
      FY = xV(35337);

    function TY() {
      const VV = (0, XV.h)("itemInfo");
      return (0, YV.useMemo)((() => function(VV) {
        return {
          getDefaultItemStat(eV, xV) {
            var JV;
            const YV = VV[eV];
            return "description" === xV ? null === YV || void 0 === YV ? void 0 : YV.description : null !== (JV = null === YV || void 0 === YV ? void 0 : YV.displayName) && void 0 !== JV ? JV : eV
          }
        }
      }(VV)), [VV])
    }
    const PY = (0, YV.memo)((function(VV) {
        var eV, xV, JV, UV, pV, QV, nV, ZV, vV, rV, kV, bV, BV, jV, qV, tV, FV, TV, PV, NV, XV, MV, zV;
        let {
          togglePointerLock: GV,
          show: WV,
          onOpen: RV,
          onClose: gV
        } = VV;
        const {
          t: DV
        } = (0, sV.A)(), iV = TY(), CV = (0, YV.useRef)(null), aV = (0, YV.useRef)(tY.b.MobHungerLevel.Hungry), oV = (0, YV.useRef)(null), cV = (0, qY.c)(), hV = (0, YV.useRef)(null), lV = (0, YV.useRef)(null), LV = CV.current;
        (0, YV.useEffect)((() => {
          if (!WV) return;
          const VV = FY.h.openPet(hV.current);
          return lV.current = VV, () => {
            VV.close(), lV.current = null
          }
        }), [WV]), (0, YV.useEffect)((() => {
          WV && LV && lV.current.show(function(VV) {
            var eV;
            let {
              mobType: xV,
              mobSettings: JV
            } = VV;
            return {
              mobType: xV,
              variation: null !== (eV = JV.variation) && void 0 !== eV ? eV : "default",
              metaInfo: JV.metaInfo,
              tamed: !(0, jJ.J)(JV.ownerDbId)
            }
          }(LV))
        }), [WV, LV]), (0, YV.useEffect)((() => {
          const VV = () => {
            var VV;
            const eV = tY.b.getMobHungerLevel(null === (VV = CV.current) || void 0 === VV ? void 0 : VV.mobSettings.petInfo.lastFedAt);
            if (eV !== aV.current && (aV.current = eV, cV()), oV.current) {
              var xV;
              const VV = Date.now(),
                eV = tY.b.getNextStateAt(null === (xV = CV.current) || void 0 === xV ? void 0 : xV.mobSettings.petInfo.lastFedAt);
              let JV = Math.floor((eV - VV) / 1e3),
                YV = "";
              if (JV > 3600) {
                YV += Math.floor(JV / 60 / 60).toString().padStart(2, "0"), YV += ":", JV %= 3600
              }
              const UV = JV % 60;
              YV += Math.floor(JV / 60).toString().padStart(2, "0"), YV += ":", YV += UV.toString().padStart(2, "0"), oV.current.textContent = YV
            }
          };
          VV();
          const eV = setInterval(VV, 250);
          return () => {
            clearInterval(eV)
          }
        }), [LV, cV]), (0, AV.g)("showPetUi", (VV => {
          let {
            mobType: eV,
            mobSettings: xV
          } = VV;
          CV.current = {
            mobType: eV,
            mobSettings: xV
          }, WV || RV()
        }));
        const fV = null === (eV = CV.current) || void 0 === eV ? void 0 : eV.mobSettings.health,
          mV = null === (xV = CV.current) || void 0 === xV ? void 0 : xV.mobSettings.maxHealth,
          KV = tY.b.getFriendshipLevelInfo(null !== (JV = null === (UV = CV.current) || void 0 === UV ? void 0 : UV.mobSettings.petInfo.friendshipPoints) && void 0 !== JV ? JV : 0);
        return (0, wV.jsx)(yV.e, {
          className: "PetUIOuter",
          close: gV,
          escDoesExit: !0,
          show: WV,
          togglePointerLock: GV,
          forcePointerUnlock: WV,
          globallyUniqueKey: "PetUI",
          children: (0, wV.jsx)("div", {
            className: "PetUI",
            children: (0, wV.jsxs)("div", {
              className: "PetUIContainer",
              children: [(0, wV.jsxs)("div", {
                className: "PetUILeftSideContainer",
                children: [(0, wV.jsx)("div", {
                  className: "PetUITitle",
                  children: null !== (pV = null === (QV = CV.current) || void 0 === QV ? void 0 : QV.mobSettings.name) && void 0 !== pV ? pV : "Your Pet"
                }), (0, wV.jsx)("div", {
                  className: "PetUICanvasContainer",
                  ref: hV
                })]
              }), (0, wV.jsxs)("div", {
                className: "PetUIInformation",
                children: [!(0, jJ.J)(null === (nV = CV.current) || void 0 === nV ? void 0 : nV.mobSettings.petInfo.friendshipPoints) && (0, wV.jsxs)("div", {
                  className: "PetUIFriendshipPoints",
                  children: [(0, wV.jsx)("div", {
                    className: "PetUIFriendshipPointsTitle",
                    children: DV("mobAiPlugin:friendshipTitle")
                  }), (0, wV.jsx)("div", {
                    className: "PetUIFriendshipHearts",
                    children: tY.b.getIconsFromFriendshipPoints(null !== (ZV = CV.current.mobSettings.petInfo.friendshipPoints) && void 0 !== ZV ? ZV : 0).map(((VV, eV) => (0, wV.jsx)("div", {
                      className: "PetUIFriendshipHeart",
                      children: (0, wV.jsx)(Ux.e, {
                        itemName: VV,
                        amount: 1
                      })
                    }, eV)))
                  }), (0, wV.jsx)("div", {
                    className: "PetUIFriendshipBar",
                    children: (0, wV.jsxs)("div", {
                      className: "PetUIFriendshipBarBackground",
                      children: [(0, wV.jsx)("div", {
                        className: "PetUIFriendshipBarForeground",
                        style: {
                          transform: `scaleX(${KV.totalPointsForNextLevel>0?Math.max(KV.pointsIntoCurrentLevel/KV.totalPointsForNextLevel,0):1})`,
                          transformOrigin: "left center"
                        }
                      }), (0, wV.jsx)("div", {
                        className: "PetUIFriendshipBarText",
                        children: tY.b.getFriendshipBarText(KV)
                      })]
                    })
                  })]
                }), (0, wV.jsxs)("div", {
                  className: "PetUIHungry",
                  children: [(0, wV.jsx)("div", {
                    className: "PetUIHungryTitle",
                    children: DV("mobAiPlugin:hungerTitle")
                  }), (0, wV.jsx)("div", {
                    className: "PetUIHungryCurrent",
                    children: tY.b.hungerLevelIcons[aV.current].map(((VV, eV) => (0, wV.jsx)("div", {
                      className: "PetUIHungryIcon",
                      children: (0, wV.jsx)(Ux.e, {
                        itemName: VV,
                        amount: 1
                      })
                    }, eV)))
                  }), (0, wV.jsxs)("div", {
                    className: "PetUIHungryLevel",
                    children: [DV(tY.b.hungerLevelTranslations[aV.current].translationKey), aV.current !== tY.b.MobHungerLevel.Starving && !(0, jJ.J)(null === (vV = CV.current) || void 0 === vV ? void 0 : vV.mobSettings.petInfo.lastFedAt) && (0, wV.jsxs)("div", {
                      className: "PetUIHungryNext",
                      children: [DV("mobAiPlugin:nextFeedIn", {
                        state: DV(tY.b.hungerLevelTranslations[aV.current + 1].translationKey)
                      }), ":", " ", (0, wV.jsx)("span", {
                        ref: oV
                      })]
                    })]
                  })]
                }), (0, wV.jsx)(HV.d, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, wV.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: DV("mobAiPlugin:healthTooltip")
                  }),
                  children: (0, wV.jsxs)("div", {
                    className: qx()("PetUIQuickStatsItem", {
                      Disabled: (0, jJ.J)(fV) || (0, jJ.J)(mV)
                    }),
                    children: [(0, wV.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, wV.jsx)(Ux.e, {
                        itemName: "Health",
                        amount: 1
                      })
                    }), (0, wV.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (0, jJ.J)(fV) || (0, jJ.J)(mV) ? "" : (0, wV.jsxs)(wV.Fragment, {
                        children: [Math.ceil(fV), (0, wV.jsxs)("span", {
                          className: "PetUIQuickStatsValueMax",
                          children: ["/", Math.ceil(mV)]
                        })]
                      })
                    })]
                  })
                }), (0, wV.jsx)(HV.d, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, wV.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: DV("mobAiPlugin:attackDamageTooltip")
                  }),
                  children: (0, wV.jsxs)("div", {
                    className: qx()("PetUIQuickStatsItem", {
                      Disabled: (0, jJ.J)(null === (rV = CV.current) || void 0 === rV ? void 0 : rV.mobSettings.attackDamage) || CV.current.mobSettings.attackDamage <= 0
                    }),
                    children: [(0, wV.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, wV.jsx)(Ux.e, {
                        itemName: "Iron Sword",
                        amount: 1
                      })
                    }), (0, wV.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (kV = CV.current) || void 0 === kV ? void 0 : kV.mobSettings.attackDamage) || ""
                    })]
                  })
                }), (0, wV.jsx)(HV.d, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, wV.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: DV("mobAiPlugin:secondaryAttackDamageTooltip")
                  }),
                  children: (0, wV.jsxs)("div", {
                    className: qx()("PetUIQuickStatsItem", {
                      Disabled: (0, jJ.J)(null === (bV = CV.current) || void 0 === bV ? void 0 : bV.mobSettings.secondaryAttackDamage) || CV.current.mobSettings.secondaryAttackDamage <= 0
                    }),
                    children: [(0, wV.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, wV.jsx)(Ux.e, {
                        itemName: "Stone Crossbow",
                        amount: 1
                      })
                    }), (0, wV.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (BV = CV.current) || void 0 === BV ? void 0 : BV.mobSettings.secondaryAttackDamage) || ""
                    })]
                  })
                }), (0, wV.jsx)(HV.d, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, wV.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: DV("mobAiPlugin:speedTooltip")
                  }),
                  children: (0, wV.jsxs)("div", {
                    className: qx()("PetUIQuickStatsItem", {
                      Disabled: (0, jJ.J)(null === (jV = CV.current) || void 0 === jV ? void 0 : jV.mobSettings.baseRunningSpeed)
                    }),
                    children: [(0, wV.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, wV.jsx)(Ux.e, {
                        itemName: "Speed",
                        amount: 1
                      })
                    }), (0, wV.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: null !== (qV = null === (tV = CV.current) || void 0 === tV || null === (FV = tV.mobSettings.baseRunningSpeed) || void 0 === FV ? void 0 : FV.toFixed(2)) && void 0 !== qV ? qV : ""
                    })]
                  })
                }), (0, wV.jsx)(HV.d, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, wV.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: DV("mobAiPlugin:saddledTooltip")
                  }),
                  children: (0, wV.jsxs)("div", {
                    className: qx()("PetUIQuickStatsItem", {
                      Disabled: "Saddled" !== (null === (TV = CV.current) || void 0 === TV ? void 0 : TV.mobSettings.metaInfo)
                    }),
                    children: [(0, wV.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, wV.jsx)(Ux.e, {
                        itemName: "Saddle",
                        amount: 1
                      })
                    }), (0, wV.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: "Saddled" === (null === (PV = CV.current) || void 0 === PV ? void 0 : PV.mobSettings.metaInfo) ? (0, wV.jsx)(EV.b, {
                        name: "check"
                      }) : ""
                    })]
                  })
                }), !(0, jJ.J)(null === (NV = CV.current) || void 0 === NV ? void 0 : NV.mobSettings.tameInfo) && (0, wV.jsxs)(wV.Fragment, {
                  children: [(0, wV.jsxs)("div", {
                    className: "PetUIFood",
                    children: [(0, wV.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, wV.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, wV.jsx)(NY, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:superlikedFoodTitle"
                          },
                          description: null,
                          tintColor: tY.b.feedTextColours[tY.b.MobFoodType.Superliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, wV.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: (0, wV.jsx)("div", {
                          className: "PetUIFoodItem",
                          children: CV.current.mobSettings.petInfo.superlikedFoodKnown ? (0, wV.jsx)(AY, {
                            food: CV.current.mobSettings.petInfo.superlikedFood
                          }) : (0, wV.jsx)(NY, {
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
                    }), (0, wV.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, wV.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, wV.jsx)(NY, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:likedFoodTitle"
                          },
                          description: null,
                          tintColor: tY.b.feedTextColours[tY.b.MobFoodType.Liked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, wV.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (XV = CV.current.mobSettings.tameInfo.likedFoods) || void 0 === XV ? void 0 : XV.filter((VV => !CV.current.mobSettings.petInfo.superlikedFoodKnown || VV !== CV.current.mobSettings.petInfo.superlikedFood)).map((VV => (0, wV.jsx)(AY, {
                          food: VV
                        }, VV)))
                      })]
                    }), (0, wV.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, wV.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, wV.jsx)(NY, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:neutralFoodTitle"
                          },
                          description: null,
                          tintColor: tY.b.feedTextColours[tY.b.MobFoodType.Neutral],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, wV.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (MV = CV.current.mobSettings.tameInfo.neutralFoods) || void 0 === MV ? void 0 : MV.map((VV => (0, wV.jsx)(AY, {
                          food: VV
                        }, VV)))
                      })]
                    }), (0, wV.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, wV.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, wV.jsx)(NY, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:dislikedFoodTitle"
                          },
                          description: null,
                          tintColor: tY.b.feedTextColours[tY.b.MobFoodType.Disliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, wV.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (zV = CV.current.mobSettings.tameInfo.dislikedFoods) || void 0 === zV ? void 0 : zV.map((VV => (0, wV.jsx)(AY, {
                          food: VV
                        }, VV)))
                      })]
                    })]
                  }), CV.current.mobSettings.tameInfo.levelUpBonuses && (0, wV.jsx)("div", {
                    className: "PetUIFeedDrops",
                    children: Array.from({
                      length: tY.b.MAX_LEVEL + 1
                    }).map(((VV, eV) => {
                      const xV = eV;
                      if (0 === xV) return null;
                      const JV = CV.current.mobSettings.tameInfo.levelUpBonuses[xV],
                        YV = tY.b.getBonusDisplayInfo(iV, CV.current.mobSettings, CV.current.mobType, JV);
                      return (0, wV.jsxs)("div", {
                        className: qx()("PetUIFeedDropContainer", {
                          Selected: xV === tY.b.getFriendshipLevelInfo(CV.current.mobSettings.petInfo.friendshipPoints).level
                        }),
                        children: [(0, wV.jsx)("div", {
                          className: "PetUIFeedDropHearts",
                          children: Array.from({
                            length: xV
                          }).map(((VV, eV) => (0, wV.jsx)("div", {
                            className: "PetUIFeedDropHeart",
                            children: (0, wV.jsx)(Ux.e, {
                              itemName: "Friendship",
                              amount: 1
                            })
                          }, `${xV}-${eV}`)))
                        }), (0, wV.jsx)("div", {
                          className: "PetUIFeedDropItems",
                          children: YV && (0, wV.jsx)(NY, {
                            icon: YV.icon,
                            displayName: YV.displayName,
                            description: YV.description
                          })
                        })]
                      }, xV)
                    }))
                  })]
                })]
              })]
            })
          })
        })
      })),
      AY = (0, YV.memo)((function(VV) {
        let {
          food: eV,
          includeDescription: xV = !1
        } = VV;
        const JV = TY(),
          YV = JV.getDefaultItemStat(eV, "displayName"),
          UV = JV.getDefaultItemStat(eV, "description");
        return (0, wV.jsx)(NY, {
          icon: eV,
          displayName: YV,
          description: xV ? UV : null
        })
      })),
      NY = (0, YV.memo)((function(VV) {
        let {
          icon: eV,
          displayName: xV,
          description: JV,
          tintColor: YV,
          className: UV = "PetUIFoodItem"
        } = VV;
        return (0, wV.jsx)(HV.d, {
          delayHide: 0,
          delayShow: 0,
          tooltipInner: (0, wV.jsxs)("div", {
            className: "PetUIFoodItemTooltip",
            children: [(0, wV.jsx)("div", {
              className: "PetUIFoodItemName",
              children: (0, wV.jsx)(PV.b, {
                text: xV
              })
            }), JV && (0, wV.jsx)("div", {
              className: "PetUIFoodItemDescription",
              children: (0, wV.jsx)(PV.b, {
                text: JV
              })
            })]
          }),
          children: (0, wV.jsx)("div", {
            className: UV,
            children: (0, wV.jsx)(Ux.e, {
              itemName: eV,
              amount: 1,
              tintColor: YV
            })
          })
        })
      }));
    var XY = xV(4163),
      MY = xV(1173),
      zY = xV(1269),
      GY = xV(2688),
      WY = xV(38047),
      RY = xV(1099),
      gY = xV(2524);

    function DY(VV) {
      let {
        peers: eV
      } = VV;
      const [xV, JV] = (0, YV.useState)(null), UV = (0, XV.h)("players");
      return (0, wV.jsx)("div", {
        className: "CodeEditorPresence",
        children: eV.map((VV => {
          var eV, YV;
          const yV = null !== (eV = null === (YV = UV.byId[VV.playerId]) || void 0 === YV ? void 0 : YV.cosmetics) && void 0 !== eV ? eV : {};
          return (0, wV.jsxs)("div", {
            className: qx()("PresenceIcon", {
              Viewer: !VV.isEditor
            }),
            style: {
              backgroundColor: VV.colour
            },
            onMouseEnter: () => {
              JV(VV.playerId)
            },
            onMouseLeave: () => {
              JV(null)
            },
            children: [(0, wV.jsx)(gY.e, {
              cosmetics: yV
            }), xV === VV.playerId && (0, wV.jsx)("div", {
              className: "PresenceTooltip",
              style: {
                backgroundColor: VV.colour
              },
              children: VV.playerName
            })]
          }, VV.playerId)
        }))
      })
    }
    var iY = xV(698),
      CY = xV(38041),
      aY = xV(37695),
      oY = xV(38051);

    function cY(VV) {
      const eV = VV.split("/"),
        xV = [];
      for (let JV = 1; JV < eV.length; JV++) xV.push(eV.slice(0, JV).join("/"));
      return xV
    }

    function hY(VV) {
      return VV.slice(VV.lastIndexOf("/") + 1)
    }
    const lY = (0, YV.memo)((function(VV) {
      var eV;
      let {
        files: xV,
        activePath: JV,
        canEdit: UV,
        directoryLinked: yV,
        pluginNames: pV,
        activePluginName: QV,
        activePluginFile: nV,
        onSelect: ZV,
        onSelectPlugin: vV,
        onCreate: kV,
        onRename: bV,
        onRenameFolder: BV,
        onDelete: jV,
        onToggleDirectorySync: qV,
        schematics: tV,
        onManageSchematic: FV
      } = VV;
      const {
        t: TV
      } = (0, sV.A)(), PV = null !== (eV = (0, WY.d)(xV)) && void 0 !== eV ? eV : zY.h, AV = Object.keys(xV), [NV, XV] = (0, YV.useState)((() => new Set)), MV = function(VV, eV, xV) {
        const JV = {
          folders: new Map,
          files: []
        };
        for (const yV of VV) {
          if (yV === eV) continue;
          let VV = JV;
          for (const eV of cY(yV)) {
            let xV = VV.folders.get(eV);
            xV || (xV = {
              folders: new Map,
              files: []
            }, VV.folders.set(eV, xV)), VV = xV
          }
          VV.files.push(yV)
        }
        const YV = [];
        VV.includes(eV) && YV.push({
          kind: "file",
          path: eV,
          name: hY(eV),
          depth: 0
        });
        const UV = (VV, eV) => {
          const JV = [...VV.folders.entries()].sort(((VV, eV) => {
            let [xV] = VV, [JV] = eV;
            return xV.localeCompare(JV)
          }));
          for (const [yV, pV] of JV) {
            const VV = xV.has(yV);
            YV.push({
              kind: "folder",
              path: yV,
              name: hY(yV),
              depth: eV,
              collapsed: VV
            }), VV || UV(pV, eV + 1)
          }
          VV.files.sort(((VV, eV) => VV.localeCompare(eV)));
          for (const xV of VV.files) YV.push({
            kind: "file",
            path: xV,
            name: hY(xV),
            depth: eV
          })
        };
        return UV(JV, 0), YV
      }(AV, PV, NV);
      (0, YV.useEffect)((() => {
        XV((VV => {
          const eV = new Set(VV);
          let xV = !1;
          for (const YV of cY(JV)) xV = eV.delete(YV) || xV;
          return xV ? eV : VV
        }))
      }), [JV]);
      const zV = AV.length >= le.z,
        GV = (VV, eV) => {
          if (VV.length > GY.r) return `Path must be at most ${GY.r} characters`;
          if (!(0, GY.p)(VV)) return "Use a relative .js, .ts, or .d.ts path, e.g. lib/util.js";
          if ("index.d.ts" === VV) return "index.d.ts cannot be the world-code entry";
          const JV = !!eV && (0, WY.e)(eV, VV);
          if (eV && (0, WY.i)(eV) && !JV) return `Cannot rename ${eV} (only swapping ${zY.h} and ${zY.j} is allowed)`;
          if (VV in xV) return "A file with that path already exists";
          if ((0, WY.i)(VV) && !JV) {
            if ((VV === zY.h ? zY.j : zY.h) in xV) return `World code cannot have both ${zY.h} and ${zY.j}`
          }
          return null
        },
        WV = VV => {
          JY.NotificationProvider.showInputPopup({
            title: "codeEditor:newFile",
            subtitle: "codeEditor:newFilePathHint",
            placeholderText: "lib/util.js",
            initialValue: void 0 === VV ? void 0 : `${VV}/`,
            submitText: "general:create",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: VV => GV(VV)
          }).getResult().then((VV => {
            "notificationTornDown" !== VV && null !== VV && "submit" === VV.type && kV(VV.value)
          }))
        },
        RV = VV => {
          JY.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFile",
            subtitle: "codeEditor:newFilePathHint",
            initialValue: VV,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: eV => eV === VV ? "That is already the file's path" : GV(eV, VV)
          }).getResult().then((eV => {
            "notificationTornDown" !== eV && null !== eV && "submit" === eV.type && bV(VV, eV.value)
          }))
        },
        gV = VV => {
          const eV = VV => VV.replace(/\/+$/, "");
          JY.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFolder",
            subtitle: "codeEditor:renameFolderHint",
            initialValue: VV,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: xV => {
              const JV = eV(xV);
              if (JV === VV) return "That is already the folder's path";
              for (const [eV, YV] of(0, WY.n)(AV, VV, JV)) {
                const VV = GV(YV, eV);
                if (null !== VV) return VV
              }
              return null
            }
          }).getResult().then((xV => {
            "notificationTornDown" !== xV && null !== xV && "submit" === xV.type && BV(VV, eV(xV.value))
          }))
        },
        DV = VV => {
          JY.NotificationProvider.showPromptPopup({
            title: "codeEditor:deleteFile",
            subtitle: "codeEditor:deleteFileConfirm",
            textOpts: {
              subtitle: {
                path: VV
              }
            },
            confirmText: "general:delete",
            destructive: !0,
            cancelText: "general:cancel"
          }).getResult().then((eV => {
            !0 === eV && jV(VV)
          }))
        };
      return (0, wV.jsxs)("div", {
        className: "CodeEditorFileTree",
        children: [(0, wV.jsxs)("div", {
          className: "FileTreeHeader",
          children: [(0, wV.jsx)("span", {
            children: "Files"
          }), UV && !zV && (0, wV.jsx)(rV.q, {
            className: "FileTreeHeaderButton",
            onClick: () => {
              WV()
            },
            children: (0, wV.jsx)(EV.b, {
              name: "plus"
            })
          })]
        }), (0, wV.jsxs)("div", {
          className: "FileTreeList",
          children: [MV.map((VV => {
            const eV = VV.path;
            if ("folder" === VV.kind) return (0, wV.jsx)(mY, {
              path: eV,
              name: VV.name,
              depth: VV.depth,
              collapsed: VV.collapsed,
              onToggle: () => {
                var VV;
                VV = eV, XV((eV => {
                  const xV = new Set(eV);
                  return xV.delete(VV) || xV.add(VV), xV
                }))
              },
              canCreate: UV && !zV,
              canRename: UV,
              onCreate: WV,
              onRename: gV
            }, `folder:${eV}`);
            const YV = (0, WY.i)(eV),
              yV = zY.h in xV && zY.j in xV,
              pV = !YV || yV,
              nV = null === QV && eV === JV;
            return (0, wV.jsx)(HY, {
              path: eV,
              label: VV.name,
              depth: VV.depth,
              isActive: nV,
              canRename: UV,
              onSelect: ZV,
              onRename: RV,
              onDelete: DV,
              canDelete: pV && UV
            }, eV)
          })), (0, wV.jsxs)("div", {
            className: "FileTreeHeader Secondary",
            children: [(0, wV.jsxs)("span", {
              children: ["Schematics (", Object.keys(tV).length, "/", oY.h, ")"]
            }), UV && (0, wV.jsx)(rV.q, {
              className: "FileTreeHeaderButton",
              disabled: Object.keys(tV).length >= oY.h,
              onClick: () => {
                FV("")
              },
              children: (0, wV.jsx)(EV.b, {
                name: "plus"
              })
            })]
          }), Object.keys(tV).sort().map((VV => (0, wV.jsx)(HY, {
            path: VV,
            isActive: !1,
            canRename: !1,
            canDelete: !1,
            onSelect: FV
          }, VV))), pV.length > 0 && (0, wV.jsxs)(wV.Fragment, {
            children: [(0, wV.jsx)("div", {
              className: "FileTreeHeader Secondary",
              children: (0, wV.jsx)("span", {
                children: "Plugins"
              })
            }), pV.map((VV => {
              var eV;
              const xV = CY.e[VV],
                JV = Object.keys(null !== (eV = null === xV || void 0 === xV ? void 0 : xV.files) && void 0 !== eV ? eV : {
                  "index.ts": ""
                }).sort(((VV, eV) => "index.ts" === VV ? -1 : "index.ts" === eV ? 1 : VV.localeCompare(eV)));
              return (0, wV.jsxs)("div", {
                children: [(0, wV.jsx)("div", {
                  className: "FileTreePluginName",
                  children: (0, WY.y)(VV)
                }), JV.map((eV => (0, wV.jsx)(HY, {
                  path: eV,
                  nested: !0,
                  isActive: QV === VV && nV === eV,
                  canRename: !1,
                  onSelect: () => {
                    vV(VV, eV)
                  },
                  canDelete: !1
                }, eV)))]
              }, VV)
            }))]
          })]
        }), (0, wV.jsx)("div", {
          className: "FileTreeFooter",
          children: (0, wV.jsx)(rV.f, {
            className: "FileTreeFooterButton",
            onClick: qV,
            children: TV(yV ? "codeEditor:directorySyncUnlink" : "codeEditor:directorySyncLink")
          })
        })]
      })
    }));

    function LY(VV) {
      return VV > 0 ? {
        className: "Indented",
        style: {
          "--tree-depth": VV
        }
      } : {
        className: void 0,
        style: void 0
      }
    }

    function fY(VV) {
      let {
        depth: eV
      } = VV;
      return (0, wV.jsx)(wV.Fragment, {
        children: Array.from({
          length: eV
        }, ((VV, eV) => (0, wV.jsx)("span", {
          className: "FileTreeIndentGuide",
          style: {
            "--guide-level": eV
          }
        }, eV)))
      })
    }

    function mY(VV) {
      let {
        path: eV,
        name: xV,
        depth: JV,
        collapsed: YV,
        onToggle: UV,
        canCreate: yV,
        canRename: pV,
        onCreate: QV,
        onRename: nV
      } = VV;
      const ZV = [];
      yV && ZV.push({
        icon: "plus",
        text: "codeEditor:newFile",
        onPointerDown: () => {
          QV(eV)
        }
      }), pV && ZV.push({
        icon: "pen",
        text: "codeEditor:renameFolder",
        onPointerDown: () => {
          nV(eV)
        }
      });
      const vV = LY(JV);
      return (0, wV.jsxs)("div", {
        className: qx()("FileTreeItem FileTreeFolder", vV.className),
        style: vV.style,
        children: [(0, wV.jsx)(fY, {
          depth: JV
        }), (0, wV.jsxs)("button", {
          type: "button",
          className: "FileTreeItemName",
          "aria-expanded": !YV,
          onClick: UV,
          children: [(0, wV.jsx)(EV.b, {
            className: "FileTreeFolderCaret",
            name: YV ? "caret-right" : "caret-down"
          }), (0, wV.jsx)(EV.b, {
            className: "FileTreeFolderIcon",
            name: YV ? "folder" : "folder-open"
          }), xV]
        }), (0, wV.jsx)(KY, {
          path: eV,
          actions: ZV
        })]
      })
    }

    function KY(VV) {
      let {
        path: eV,
        actions: xV
      } = VV;
      const JV = (0, YV.useRef)(null);
      return 0 === xV.length ? null : (0, wV.jsxs)("div", {
        ref: JV,
        className: "FileTreeItemActions",
        children: [(0, wV.jsx)("button", {
          type: "button",
          className: "FileTreeActionMenuButton",
          "aria-label": `Actions for ${eV}`,
          children: (0, wV.jsx)(EV.b, {
            name: "ellipsis"
          })
        }), (0, wV.jsx)(aY.e, {
          triggerElementRef: JV,
          options: xV
        })]
      })
    }

    function HY(VV) {
      let {
        path: eV,
        label: xV = eV,
        depth: JV = 0,
        isActive: YV,
        canRename: UV,
        onSelect: yV,
        onRename: pV,
        onDelete: QV,
        canDelete: nV,
        nested: ZV
      } = VV;
      const vV = [];
      UV && pV && vV.push({
        icon: "pen",
        text: "codeEditor:rename",
        onPointerDown: () => {
          pV(eV)
        }
      }), nV && QV && vV.push({
        icon: "xmark",
        text: "general:delete",
        onPointerDown: () => {
          QV(eV)
        }
      });
      const rV = LY(JV);
      return (0, wV.jsxs)("div", {
        className: qx()("FileTreeItem", rV.className, {
          Active: YV,
          Nested: ZV
        }),
        style: rV.style,
        children: [(0, wV.jsx)(fY, {
          depth: JV
        }), (0, wV.jsx)("button", {
          type: "button",
          className: "FileTreeItemName",
          title: xV === eV ? void 0 : eV,
          onClick: () => {
            yV(eV)
          },
          children: xV
        }), (0, wV.jsx)(KY, {
          path: eV,
          actions: vV
        })]
      })
    }
    async function uY(VV) {
      const eV = (0, WY.d)(VV);
      if (!eV || "" === VV[eV].trim()) return [];
      const {
        collectImportedWorldCodePluginNames: JV
      } = await Promise.all([xV.e(608), xV.e(609)]).then((() => xV(44375)));
      return (0, CY.b)(JV(VV))
    }
    var sY = xV(38054);

    function SY(VV, eV) {
      const xV = Object.keys(VV),
        JV = Object.keys(eV);
      if (xV.length !== JV.length) return !1;
      for (const YV of xV)
        if (!(YV in eV) || VV[YV] !== eV[YV]) return !1;
      return !0
    }

    function IY(VV, eV) {
      const xV = [],
        JV = [],
        YV = [];
      for (const UV of Object.keys(eV)) UV in VV ? VV[UV] !== eV[UV] && YV.push(UV) : xV.push(UV);
      for (const UV of Object.keys(VV)) UV in eV || JV.push(UV);
      return xV.sort(), JV.sort(), YV.sort(), {
        creates: xV,
        deletes: JV,
        updates: YV
      }
    }

    function dY(VV, eV) {
      var xV;
      const JV = {
          ...VV
        },
        YV = (0, WY.d)(eV),
        UV = (0, WY.d)(JV);
      if (zY.h in JV && zY.j in JV) {
        const VV = null !== YV && void 0 !== YV ? YV : zY.j,
          xV = VV === zY.h ? zY.j : zY.h;
        var yV;
        if (!(VV in JV)) JV[VV] = null !== (yV = eV[VV]) && void 0 !== yV ? yV : "";
        return delete JV[xV], JV
      }
      var pV;
      return YV && !(YV in JV) ? (UV || (JV[YV] = null !== (pV = eV[YV]) && void 0 !== pV ? pV : ""), JV) : (UV || YV || (JV[zY.h] = null !== (xV = JV[zY.h]) && void 0 !== xV ? xV : "", delete JV[zY.j]), JV)
    }

    function OY(VV, eV) {
      const xV = (0, WY.d)(eV),
        JV = zY.h in eV && zY.j in eV;
      return VV.filter((VV => !(0, WY.i)(VV) || (!!JV || xV !== VV)))
    }
    async function VU(VV, eV, JV) {
      const YV = VV.getLobbyFiles(),
        UV = (0, le.i)(JV, (0, WY.r)(YV, eV)),
        yV = await VV.ensureJoined(eV),
        pV = (0, GY.s)(yV.docKey);
      if (yV.doc === UV) return;
      for (let xV = 0; xV < 100; xV++) {
        const xV = VV.getCollabSnapshot();
        if (xV && (0, GY.s)(xV.docKey) === pV && VV.getActivePath() === eV) {
          if (VV.replaceActiveDoc(pV, UV)) return;
          await (0, jJ.R)(40)
        } else await (0, jJ.R)(40)
      }
      const {
        ChangeSet: QV
      } = await xV.e(604).then((() => xV(44232))), wV = VV.getCollabSnapshot(), ZV = wV && (0, GY.s)(wV.docKey) === pV ? wV : yV;
      await async function(VV, eV, xV, JV) {
        const YV = VV.of({
            from: 0,
            to: xV.length,
            insert: JV
          }, xV.length),
          UV = JSON.stringify([{
            clientID: eV.clientID,
            changes: YV.toJSON()
          }]),
          yV = (0, GY.s)(eV.docKey);
        UV.length <= GY.e ? nV.gameBridge.send("sendCodeCollab", {
          bV: GY.c.Push,
          EV: yV,
          BV: eV.version,
          tV: UV
        }) : await (0, MY.postJsonWithMetricsCookiesAndJsonResponse)(`${eV.httpConfig.gsUrl}/code/collab-push`, XY.o["collab-push"].toBuffer({
          gameNameWithVariation: eV.httpConfig.gameNameWithVariation,
          lobbyName: eV.httpConfig.lobbyName,
          docKey: yV,
          version: eV.version,
          updates: UV
        }), {
          retries: 0
        })
      }(QV, ZV, ZV.doc, UV)
    }
    class eU {
      constructor(VV) {
        this.handle = null, this.lastSynced = {}, this.lastLobbySeen = null, this.pendingDocText = new Map, this.flushingDocText = !1, this.recheckingDisk = !1, this.stopWatch = null, this.lobbyPollTimer = null, this.running = !1, this.applying = !1, this.reconcileSettled = !1, this.reconcileInFlight = !1, this.linked = !1, this.scaffoldedPluginNamesKey = null, this.scaffoldingLocalTypes = Promise.resolve(), this.bridge = void 0, this.bridge = VV
      }
      async writeLobbyFiles(VV) {
        const eV = {
            ...this.bridge.getLobbyFiles()
          },
          xV = {
            ...eV
          };
        for (const {
            path: UV,
            text: yV
          }
          of VV) xV[UV] = yV;
        if (!VV.every((VV => {
            let {
              path: eV,
              text: JV
            } = VV;
            return (0, le.i)(JV, (0, WY.r)(xV, eV)) === JV
          }))) return !1;
        const JV = [];
        try {
          for (const {
              path: eV,
              text: xV
            }
            of VV) JV.push(eV), eV in this.bridge.getLobbyFiles() || (this.bridge.createFile(eV, {
            focus: !1
          }), await this.bridge.waitForLobbyPath(eV, !0)), await VU(this.bridge, eV, xV)
        } catch (YV) {
          for (const VV of JV) VV in eV ? await VU(this.bridge, VV, eV[VV]).catch((eV => {
            console.error("World Code AI: couldn't put back", VV, eV)
          })) : this.bridge.deleteFile(VV);
          throw YV
        }
        return !0
      }
      isLinked() {
        return this.linked
      }
      async linkFolder() {
        if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), !1;
        const VV = await (0, sY.v)(this.bridge.getStorageKey());
        return !!VV && (this.handle = VV, this.linked = !0, this.reconcileSettled = !1, await this.scaffoldLocalTypes(VV), !0)
      }
      async unlinkFolder() {
        const VV = this.bridge.getStorageKey();
        this.pendingDocText.clear(), this.stopContinuousSync(), this.handle = null, this.linked = !1, this.reconcileSettled = !1, this.lastSynced = {}, this.lastLobbySeen = null, this.scaffoldedPluginNamesKey = null, await (0, sY.b)(VV), this.bridge.onUnlinked()
      }
      async tryRestoreHandle() {
        const VV = this.bridge.getStorageKey(),
          eV = await (0, sY.r)(VV);
        return !!eV && (!!await (0, sY.h)(eV, "readwrite") && (this.handle = eV, this.linked = !0, await (0, sY.F)(VV, eV), await this.scaffoldLocalTypes(eV), !0))
      }
      scaffoldLocalTypes(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bridge.getLobbyFiles();
        return this.scaffoldingLocalTypes = this.scaffoldingLocalTypes.then((async () => {
          try {
            const JV = (await uY(eV)).map((VV => CY.e[VV])),
              YV = JV.map((VV => {
                var eV;
                return `${VV.name}:${Object.keys(null!==(eV=null===VV||void 0===VV?void 0:VV.files)&&void 0!==eV?eV:{}).sort().join(",")}`
              })).join("\0");
            if (this.scaffoldedPluginNamesKey === YV) return;
            const {
              ensureLocalBloxdTypes: UV
            } = await Promise.all([xV.e(98), xV.e(606), xV.e(611)]).then((() => xV(44381)));
            await UV(VV, JV), this.scaffoldedPluginNamesKey = YV
          } catch (JV) {
            console.error("[WorldCodeDirectorySync] Failed to scaffold local @bloxd types", JV)
          }
        })), this.scaffoldingLocalTypes
      }
      async startWhenReady() {
        this.linked && this.handle && !this.running && !this.reconcileInFlight && this.bridge.getCollabSnapshot() && (this.reconcileSettled ? this.beginWatch() : await this.runInitialReconcileAndSync())
      }
      stopContinuousSync() {
        this.flushDocTextToDisk(), this.running = !1, this.stopWatch && (this.stopWatch(), this.stopWatch = null), this.lobbyPollTimer && (clearInterval(this.lobbyPollTimer), this.lobbyPollTimer = null)
      }
      async onLobbyFilesChanged(VV) {
        this.handle && await this.scaffoldLocalTypes(this.handle, VV), this.running && this.handle && !this.applying && await this.applyRemoteTreeToDisk(VV)
      }
      async onDocTextChanged(VV, eV) {
        if (!this.handle) return;
        const xV = [this.scaffoldLocalTypes(this.handle, {
          ...this.bridge.getLobbyFiles(),
          [VV]: eV
        })];
        this.running && (this.pendingDocText.set(VV, eV), xV.push(this.flushDocTextToDisk())), await Promise.all(xV)
      }
      async flushDocTextToDisk() {
        if (this.flushingDocText || this.applying || !this.handle || 0 === this.pendingDocText.size) return;
        const VV = this.handle;
        this.flushingDocText = !0, this.applying = !0;
        try {
          for (; this.pendingDocText.size > 0;) {
            const eV = [...this.pendingDocText];
            this.pendingDocText.clear();
            for (const [xV, JV] of eV) this.lastSynced[xV] !== JV && (await (0, sY.L)(VV, xV, JV), this.lastSynced = {
              ...this.lastSynced,
              [xV]: JV
            })
          }
        } catch (eV) {
          console.error("[WorldCodeDirectorySync] Failed to write remote doc to disk", eV), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
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
            await this.onDiskFilesChanged(await (0, sY.y)(this.handle))
          } catch (VV) {
            console.error("[WorldCodeDirectorySync] Failed to re-check disk after sync", VV)
          } finally {
            this.recheckingDisk = !1
          }
        }
      }
      async runInitialReconcileAndSync() {
        if (this.handle && !this.reconcileInFlight) {
          this.reconcileInFlight = !0;
          try {
            if (!await (0, sY.h)(this.handle, "readwrite")) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncPermissionDenied"), "warning"), void(this.reconcileSettled = !0);
            await this.bridge.pullLobbyFiles();
            const eV = this.bridge.getLobbyFiles(),
              xV = await (0, sY.y)(this.handle);
            for (const VV of Object.keys(eV).filter(oY.d)) {
              if (xV[VV] === sY.n) return void this.bridge.setMessage(`Move ${VV} outside the linked folder before syncing its placeholder.`, "warning");
              xV[VV] = oY.r
            }
            if (SY(xV, eV)) {
              for (const VV of Object.keys(eV).filter(oY.d)) await (0, sY.L)(this.handle, VV, oY.r);
              return this.lastSynced = {
                ...xV
              }, void this.beginWatch()
            }
            const JV = await this.promptReconcile(function(VV) {
              return null !== (0, WY.d)(VV)
            }(xV));
            if ("unlink" === JV) return void await this.unlinkFolder();
            if ("dismissed" === JV) return void(this.reconcileSettled = !0);
            this.applying = !0;
            try {
              if ("local" === JV) {
                if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), void(this.reconcileSettled = !0);
                await this.applyLocalTreeToLobby(xV);
                for (const VV of Object.keys(eV).filter(oY.d)) await (0, sY.L)(this.handle, VV, oY.r);
                this.lastSynced = {
                  ...await (0, sY.y)(this.handle)
                }
              } else await (0, sY.M)(this.handle, eV), this.lastSynced = {
                ...eV
              }
            } catch (VV) {
              return console.error("[WorldCodeDirectorySync] Reconcile failed", VV), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning"), void(this.reconcileSettled = !0)
            } finally {
              this.applying = !1, this.settleAfterApplying()
            }
            this.beginWatch()
          } finally {
            this.reconcileInFlight = !1
          }
        }
      }
      async promptReconcile(VV) {
        return await new Promise((eV => {
          const xV = [{
              choice: "local",
              Button: rV.f,
              labelKey: "directorySyncUseLocal",
              descriptionKey: "directorySyncUseLocalDescription"
            }, {
              choice: "live",
              Button: rV.f,
              labelKey: "directorySyncUseLive",
              descriptionKey: "directorySyncUseLiveDescription"
            }, {
              choice: "unlink",
              Button: rV.f,
              labelKey: "directorySyncUseUnlink",
              descriptionKey: "directorySyncUseUnlinkDescription"
            }],
            JV = (0, wV.jsxs)("div", {
              className: "CodeEditorDirectorySyncPrompt",
              children: [(0, wV.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptTitle",
                children: this.bridge.t("codeEditor:directorySyncDifferTitle")
              }), (0, wV.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptBody",
                children: VV ? this.bridge.t("codeEditor:directorySyncDifferBody") : this.bridge.t("codeEditor:directorySyncLocalInvalidEntry")
              }), (0, wV.jsx)("div", {
                className: "CodeEditorDirectorySyncOptions",
                children: xV.filter((eV => "local" !== eV.choice || VV)).map((VV => {
                  let {
                    choice: xV,
                    Button: JV,
                    labelKey: UV,
                    descriptionKey: yV
                  } = VV;
                  return (0, wV.jsxs)("div", {
                    className: "CodeEditorDirectorySyncOption",
                    children: [(0, wV.jsx)(JV, {
                      className: "CodeEditorButton",
                      onClick: () => {
                        (VV => {
                          YV.tearDownNotification(), eV(VV)
                        })(xV)
                      },
                      children: this.bridge.t(`codeEditor:${UV}`)
                    }), (0, wV.jsx)("div", {
                      className: "CodeEditorDirectorySyncOptionDescription",
                      children: this.bridge.t(`codeEditor:${yV}`)
                    })]
                  }, xV)
                }))
              })]
            }),
            YV = JY.NotificationProvider.showCustomPopup({
              body: JV,
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "worldCodeDirectorySync"
            });
          YV.getResult().then((VV => {
            "notificationTornDown" === VV && eV("dismissed")
          }))
        }))
      }
      beginWatch() {
        this.handle && (this.stopContinuousSync(), this.reconcileSettled = !0, this.running = !0, this.stopWatch = (0, sY.H)(this.handle, (VV => {
          this.onDiskFilesChanged(VV)
        })), this.lobbyPollTimer = setInterval((() => {
          this.pollRemoteLobbyFiles()
        }), 2e3))
      }
      async pollRemoteLobbyFiles() {
        if (this.running && !this.applying) try {
          await this.bridge.pullLobbyFiles()
        } catch (VV) {
          console.error("[WorldCodeDirectorySync] Lobby poll failed", VV)
        }
      }
      async onDiskFilesChanged(VV) {
        if (!this.running || !this.handle || this.applying) return;
        if (!this.bridge.canEditCode()) return;
        const eV = this.bridge.getLobbyFiles();
        let xV = dY(VV, this.lastSynced);
        for (const UV in eV)
          if ((0, oY.d)(UV) && xV[UV] === sY.n) return void this.bridge.setMessage("Move binary schematic files outside the linked folder. Add them through the Code Editor.", "warning");
        const JV = Object.keys(xV).filter((VV => (0, oY.d)(VV) && !(VV in eV)));
        JV.length > 0 && this.bridge.setMessage("Add or rename schematics in the Code Editor. Unknown local schematic files are not uploaded.", "warning");
        for (const UV of Object.keys(eV).filter(oY.d))(UV in xV || JV.length > 0 || !(UV in this.lastSynced)) && (xV[UV] = oY.r);
        if (!SY(xV, VV)) {
          this.applying = !0;
          try {
            await this.persistEntryRepair(VV, xV), xV = dY(await (0, sY.y)(this.handle), this.lastSynced)
          } finally {
            this.applying = !1
          }
        }
        if (!SY(xV, this.lastSynced)) {
          this.applying = !0;
          try {
            const VV = IY(this.lastSynced, xV);
            if (await this.pushDiskDeltaToLobby(xV, eV), null !== this.lastLobbySeen)
              for (const xV of [...VV.creates, ...VV.updates, ...VV.deletes])(0, oY.d)(xV) || (xV in eV ? this.lastLobbySeen[xV] = eV[xV] : delete this.lastLobbySeen[xV]);
            this.lastSynced = {
              ...xV
            }
          } catch (YV) {
            console.error("[WorldCodeDirectorySync] Disk\u2192lobby sync failed", YV), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async persistEntryRepair(VV, eV) {
        if (this.handle) {
          for (const xV of Object.keys(VV)) xV in eV || await (0, sY.B)(this.handle, xV);
          for (const [xV, JV] of Object.entries(eV)) VV[xV] !== JV && await (0, sY.L)(this.handle, xV, JV)
        }
      }
      async applyRemoteTreeToDisk(VV) {
        if (!this.handle) return;
        const eV = this.lastLobbySeen;
        if (null === eV) return void(this.lastLobbySeen = {
          ...VV
        });
        const xV = Object.keys(VV).filter((xV => eV[xV] !== VV[xV])),
          JV = Object.keys(eV).filter((eV => !(eV in VV)));
        if (0 !== xV.length || 0 !== JV.length) {
          this.applying = !0;
          try {
            for (const eV of [...JV, ...xV]) try {
              if (eV in VV) await (0, sY.L)(this.handle, eV, VV[eV]), this.lastSynced = {
                ...this.lastSynced,
                [eV]: VV[eV]
              }, this.lastLobbySeen = {
                ...this.lastLobbySeen,
                [eV]: VV[eV]
              };
              else {
                await (0, sY.B)(this.handle, eV);
                const VV = {
                  ...this.lastSynced
                };
                delete VV[eV], this.lastSynced = VV;
                const xV = {
                  ...this.lastLobbySeen
                };
                delete xV[eV], this.lastLobbySeen = xV
              }
            } catch (YV) {
              console.error("[WorldCodeDirectorySync] Lobby\u2192disk sync failed", YV), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
            }
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async renameLobbyEntryIfSwitched(VV, eV) {
        const xV = function(VV, eV) {
          const xV = (0, WY.d)(VV),
            JV = (0, WY.d)(eV);
          return xV && JV && xV !== JV ? {
            from: xV,
            to: JV
          } : null
        }(VV, eV);
        return !!xV && (this.bridge.renameFile(xV.from, xV.to), await this.bridge.waitForLobbyPath(xV.to, !0), !0)
      }
      async applyLocalTreeToLobby(VV) {
        var eV;
        const xV = this.bridge.getActivePath();
        await this.renameLobbyEntryIfSwitched(this.bridge.getLobbyFiles(), VV);
        const JV = this.bridge.getLobbyFiles(),
          YV = IY(JV, VV),
          UV = OY(YV.deletes, JV);
        for (const nV of YV.creates)(0, oY.d)(nV) || (this.bridge.createFile(nV, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(nV, !0));
        for (const nV of UV)(0, oY.d)(nV) || (this.bridge.deleteFile(nV), await this.bridge.waitForLobbyPath(nV, !1));
        if (!(0, WY.d)(this.bridge.getLobbyFiles()) && !(0, WY.d)(VV)) {
          if (this.bridge.createFile(zY.h, {
              focus: !1
            }), await this.bridge.waitForLobbyPath(zY.h, !0), !this.handle) return;
          await (0, sY.L)(this.handle, zY.h, ""), VV = {
            ...VV,
            [zY.h]: ""
          }
        }
        const yV = this.bridge.getLobbyFiles();
        for (const nV of Object.keys(VV))(0, oY.d)(nV) || yV[nV] !== VV[nV] && await VU(this.bridge, nV, VV[nV]);
        const pV = this.bridge.getLobbyFiles(),
          QV = xV in pV ? xV : null !== (eV = (0, WY.d)(pV)) && void 0 !== eV ? eV : zY.h;
        await this.bridge.ensureJoined(QV)
      }
      async pushDiskDeltaToLobby(VV, eV) {
        const xV = this.bridge.getActivePath(),
          JV = await this.renameLobbyEntryIfSwitched(eV, VV) ? this.bridge.getLobbyFiles() : eV,
          YV = IY(this.lastSynced, VV),
          UV = OY(YV.deletes, JV).filter((VV => VV in JV));
        for (const yV of YV.creates)(0, oY.d)(yV) || (yV in this.bridge.getLobbyFiles() || (this.bridge.createFile(yV, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(yV, !0)), await VU(this.bridge, yV, VV[yV]));
        for (const yV of UV)(0, oY.d)(yV) ? await this.bridge.deleteSchematic(yV) : (this.bridge.deleteFile(yV), await this.bridge.waitForLobbyPath(yV, !1));
        for (const yV of YV.updates)(0, oY.d)(yV) || await VU(this.bridge, yV, VV[yV]);
        xV in this.bridge.getLobbyFiles() && this.bridge.getActivePath() !== xV && await this.bridge.ensureJoined(xV)
      }
    }
    var xU = xV(1230);

    function JU() {
      const {
        websocketUrl: VV,
        gameNameWithVariation: eV,
        lobbyName: xV
      } = nV.gameBridge.latest("connectedGame");
      return {
        gsUrl: xU.clientSideServerUrls.getHttpUrlFromWebSocketUrl(VV),
        gameNameWithVariation: eV,
        lobbyName: xV
      }
    }
    async function YU(VV) {
      const {
        gsUrl: eV,
        gameNameWithVariation: xV,
        lobbyName: JV
      } = JU();
      return await (0, MY.postBinaryWithMetricsCookiesAndCustomResponse)(`${eV}/code/schematics`, XY.Qj.schematics.toBuffer({
        gameNameWithVariation: xV,
        lobbyName: JV,
        request: JSON.stringify(VV)
      }), {
        retries: 0
      }, MY.HttpPayloadType.json)
    }
    var UU = xV(37493);

    function yU(VV) {
      let {
        path: eV,
        revision: xV
      } = VV;
      const [JV, UV] = (0, YV.useState)(""), [yV, pV] = (0, YV.useState)(!1), [QV, nV] = (0, YV.useState)(0);
      return (0, YV.useEffect)((() => {
        let VV = !1;
        return UV(""), pV(!1), YU({
          action: "preview",
          path: eV
        }).then((eV => {
          VV || UV(`data:image/webp;base64,${eV.previewBase64}`)
        })).catch((eV => {
          console.error("Could not load schematic preview", eV), VV || pV(!0)
        })), () => {
          VV = !0
        }
      }), [eV, xV, QV]), (0, wV.jsxs)("div", {
        className: "SchematicPreview",
        children: [JV && (0, wV.jsx)("img", {
          src: JV,
          alt: `Preview of ${eV}`
        }), !JV && !yV && (0, wV.jsx)(MV.d, {
          loaderType: "Secondary"
        }), yV && (0, wV.jsxs)(wV.Fragment, {
          children: [(0, wV.jsx)("div", {
            className: "SmallTextLight",
            role: "status",
            children: "Preview unavailable."
          }), (0, wV.jsx)(rV.f, {
            onClick: () => {
              nV(QV + 1)
            },
            children: "Retry preview"
          })]
        })]
      })
    }
    var pU = xV(3561);

    function QU(VV) {
      var eV;
      let {
        initialPath: xV,
        onChanged: JV,
        onClose: UV
      } = VV;
      const yV = "" === xV,
        [pV, QV] = (0, YV.useState)(null),
        [nV, ZV] = (0, YV.useState)(xV),
        [vV, kV] = (0, YV.useState)(!1),
        [bV, EV] = (0, YV.useState)(!1),
        [BV, jV] = (0, YV.useState)(null),
        [qV, tV] = (0, YV.useState)(!1),
        [FV, TV] = (0, YV.useState)(""),
        PV = (0, YV.useRef)(null),
        AV = (0, YV.useRef)(!1),
        NV = (0, YV.useRef)(!0);
      (0, YV.useEffect)((() => (NV.current = !0, YU({
        action: "state"
      }).then((VV => {
        NV.current && QV(VV)
      })).catch((VV => {
        console.error("Could not load schematic assets", VV), NV.current && TV("Could not load schematics. Reopen this panel to retry.")
      })), () => {
        NV.current = !1
      })), []);
      const XV = null === pV || void 0 === pV ? void 0 : pV.assets[xV],
        MV = Object.keys(null !== (eV = null === pV || void 0 === pV ? void 0 : pV.assets) && void 0 !== eV ? eV : {}).length,
        zV = nV.trim(),
        GV = zV ? (0, oY.d)(zV) ? null !== pV && void 0 !== pV && pV.assets[zV] && (yV || zV !== xV) ? "A schematic already uses that path." : "" : "Use a relative path ending in .bloxdschem." : "",
        WV = !!zV && !GV && (yV ? MV < oY.h : zV !== xV),
        RV = qV || !pV;
      async function gV(VV) {
        if (!AV.current && NV.current) {
          AV.current = !0, tV(!0), TV("");
          try {
            const eV = await YU({
              ...VV,
              expectedRevision: pV.revision
            });
            JV(eV), NV.current && UV()
          } catch (xV) {
            var eV;
            if (console.error("Schematic asset operation failed", xV), NV.current) TV(xV instanceof mV.b ? null !== (eV = xV.errorMessageForUser) && void 0 !== eV ? eV : xV.message : String(xV));
            try {
              const VV = await YU({
                action: "state"
              });
              JV(VV), NV.current && QV(VV)
            } catch (YV) {
              console.error("Could not refresh schematic assets", YV)
            }
          } finally {
            AV.current = !1, NV.current && tV(!1)
          }
        }
      }
      return (0, wV.jsxs)("div", {
        className: "WorldCodeSchematicPanel InputGenericPopup PromptGenericPopup FileTreePathPopup",
        children: [(0, wV.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: yV ? "New schematic" : vV ? "Rename schematic" : "Schematic"
        }), FV && (0, wV.jsx)("div", {
          className: "InputGenericPopupError SmallTextLight",
          role: "alert",
          children: FV
        }), !pV && !FV && (0, wV.jsx)("div", {
          className: "SmallTextLight",
          children: "Loading schematic\u2026"
        }), (0, wV.jsxs)("fieldset", {
          disabled: RV,
          children: [yV || vV ? (0, wV.jsxs)("label", {
            className: "SchematicField",
            children: [(0, wV.jsx)("span", {
              className: "SmallTextBold",
              children: "Project path"
            }), (0, wV.jsx)("div", {
              className: "InputGenericPopupInputRow",
              children: (0, wV.jsx)(Dx.d, {
                className: "InputGenericPopupInput",
                defaultValue: xV,
                placeholderText: "maps/arena.bloxdschem",
                maxLength: 64,
                onValueChange: ZV
              }, vV ? "rename" : "create")
            })]
          }) : (0, wV.jsx)("div", {
            className: "SchematicPath SmallTextBold",
            children: xV
          }), (yV || vV) && GV && (0, wV.jsx)("div", {
            className: "InputGenericPopupError SmallTextLight",
            role: "alert",
            children: GV
          }), yV ? (0, wV.jsxs)(wV.Fragment, {
            children: [MV >= oY.h && (0, wV.jsxs)("div", {
              className: "SmallTextLight",
              children: ["Delete a schematic before adding another (", oY.h, " maximum)."]
            }), bV ? (0, wV.jsxs)(wV.Fragment, {
              children: [(0, wV.jsx)("div", {
                className: "SmallTextBold",
                children: "Choose from profile"
              }), (0, wV.jsx)("div", {
                className: "SchematicProfilePicker",
                "aria-disabled": RV || !WV,
                children: (0, wV.jsx)(UU.c, {
                  loading: null === BV,
                  schematics: null !== BV && void 0 !== BV ? BV : [],
                  disableAutoExport: !0,
                  onSchematicPicked: VV => {
                    !RV && WV && gV({
                      action: "profile",
                      path: zV,
                      schematicId: VV.schematicId
                    })
                  }
                })
              }), (0, wV.jsx)("div", {
                className: "InputGenericPopupButtons",
                children: (0, wV.jsx)(rV.f, {
                  className: "InputGenericPopupButton",
                  disabled: RV,
                  onClick: () => {
                    EV(!1)
                  },
                  children: "Back"
                })
              })]
            }) : (0, wV.jsxs)("div", {
              className: "InputGenericPopupButtons",
              children: [(0, wV.jsx)(rV.f, {
                className: "InputGenericPopupButton",
                disabled: RV || !WV,
                onClick: () => {
                  (0, pU.g)(PV.current)
                },
                children: "Upload Schematic"
              }), (0, wV.jsx)(rV.f, {
                className: "InputGenericPopupButton",
                disabled: RV || !WV,
                onClick: () => {
                  !async function() {
                    if (EV(!0), TV(""), !BV) try {
                      const VV = await (0, MY.postJsonWithMetricsCookiesAndJsonResponse)(`${xU.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
                        retries: 0,
                        minTimeout: 3e3
                      });
                      NV.current && jV(VV)
                    } catch (VV) {
                      console.error("Could not load profile schematics", VV), NV.current && (EV(!1), TV("Could not load your schematics. Try again."))
                    }
                  }()
                },
                children: "Choose from profile"
              })]
            }), (0, wV.jsx)("input", {
              ref: PV,
              type: "file",
              accept: ".bloxdschem",
              hidden: !0,
              onChange: VV => {
                var eV;
                const xV = null === (eV = VV.target.files) || void 0 === eV ? void 0 : eV[0];
                if (VV.target.value = "", !xV) return;
                if (xV.size > oY.l) return void TV("The schematic file is too large.");
                const JV = zV;
                tV(!0);
                const YV = new FileReader;
                YV.onload = () => {
                  gV({
                    action: "upload",
                    path: JV,
                    base64: String(YV.result).split(",")[1]
                  })
                }, YV.onerror = () => {
                  console.error("Could not read schematic file", YV.error), NV.current && (tV(!1), TV("Could not read the selected file."))
                }, YV.readAsDataURL(xV)
              }
            })]
          }) : XV ? (0, wV.jsxs)(wV.Fragment, {
            children: [!vV && (0, wV.jsx)(yU, {
              path: xV,
              revision: pV.revision
            }), !vV && (0, wV.jsxs)("p", {
              className: "SchematicDetails SmallTextLight",
              children: [Math.ceil(XV.byteSize / 1024), " KB \xb7 ", XV.dimensions.join(" \xd7 "), " blocks"]
            }), (0, wV.jsx)("div", {
              className: "InputGenericPopupButtons",
              children: vV ? (0, wV.jsxs)(wV.Fragment, {
                children: [(0, wV.jsx)(rV.f, {
                  className: "InputGenericPopupButton",
                  disabled: RV || !WV,
                  onClick: () => {
                    gV({
                      action: "rename",
                      path: xV,
                      newPath: zV
                    })
                  },
                  children: "Rename"
                }), (0, wV.jsx)(rV.f, {
                  className: "InputGenericPopupButton",
                  disabled: RV,
                  onClick: () => {
                    kV(!1), ZV(xV)
                  },
                  children: "Cancel"
                })]
              }) : (0, wV.jsxs)(wV.Fragment, {
                children: [(0, wV.jsx)(rV.f, {
                  className: "InputGenericPopupButton",
                  disabled: RV,
                  onClick: () => {
                    kV(!0)
                  },
                  children: "Rename"
                }), (0, wV.jsx)(rV.E, {
                  className: "InputGenericPopupButton",
                  disabled: RV,
                  onClick: () => {
                    gV({
                      action: "remove",
                      path: xV
                    })
                  },
                  children: "Delete"
                })]
              })
            })]
          }) : pV && (0, wV.jsx)("div", {
            className: "SmallTextLight",
            children: "This schematic is no longer in the project."
          })]
        })]
      })
    }

    function nU(VV) {
      if ("string" !== typeof VV) return null;
      try {
        const eV = JSON.parse(VV);
        return (0, WY.j)(null === eV || void 0 === eV ? void 0 : eV.worldCodeEngine) && "boolean" === typeof eV.engineLocked && function(VV) {
          if (null === VV) return !0;
          const eV = null === VV || void 0 === VV ? void 0 : VV.location;
          return "string" === typeof(null === VV || void 0 === VV ? void 0 : VV.reason) && (null === eV || "string" === typeof(null === eV || void 0 === eV ? void 0 : eV.path) && Number.isInteger(eV.line))
        }(eV.fallback) ? eV : (console.error("[CodeCollab] Malformed engine settings", VV), null)
      } catch (eV) {
        return console.error("[CodeCollab] Failed to parse engine settings", eV), null
      }
    }

    function wU(VV) {
      let {
        fallback: eV,
        onGoToLine: xV
      } = VV;
      const {
        t: JV
      } = (0, sV.A)(), {
        location: YV
      } = eV;
      return (0, wV.jsxs)("div", {
        className: "CodeEditorEngineNotice",
        children: [JV("codeEditorEngine:notice", {
          reason: eV.reason
        }), YV && (0, wV.jsxs)(wV.Fragment, {
          children: [" ", (0, wV.jsx)("button", {
            type: "button",
            className: "CodeEditorEngineNoticeLink",
            onClick: () => {
              xV(YV.path, YV.line)
            },
            children: JV("codeEditorEngine:goToLine", {
              line: String(YV.line)
            })
          })]
        })]
      })
    }
    var ZU = xV(5428),
      vU = xV(4795),
      rU = xV(38063);

    function kU(VV) {
      let {
        label: eV,
        hint: xV,
        checked: JV,
        onChange: YV
      } = VV;
      return (0, wV.jsxs)("label", {
        className: "CodeEditorMoreOptionsRow CodeEditorOptionSwitch",
        children: [(0, wV.jsxs)("span", {
          className: "CodeEditorOptionSwitchText",
          children: [(0, wV.jsx)("span", {
            children: eV
          }), (0, wV.jsx)("span", {
            className: "CodeEditorOptionSwitchHint",
            children: xV
          })]
        }), (0, wV.jsx)("span", {
          className: "SwitchContainer",
          children: (0, wV.jsx)(vU.b, {
            className: "SwitchCheckbox",
            checked: JV,
            onChange: VV => {
              YV(VV.target.checked)
            },
            disabled: !1
          })
        })]
      })
    }

    function bU(VV) {
      let {
        engine: eV,
        onSetEngine: xV,
        aiHints: JV,
        variation: YV
      } = VV;
      const {
        t: UV
      } = (0, sV.A)(), [yV, pV] = (0, rU.k)(rU.e);
      return (0, wV.jsxs)("div", {
        className: "CodeEditorMoreOptions",
        children: [(0, wV.jsx)("div", {
          className: "CodeEditorMoreOptionsTitle",
          children: UV("codeEditor:moreOptions")
        }), eV && (0, wV.jsx)(kU, {
          label: UV("codeEditorEngine:toggle"),
          hint: UV("codeEditorEngine:toggleHint"),
          checked: "ses" === eV,
          onChange: VV => {
            xV(VV ? "ses" : "quickjs")
          }
        }), JV && (0, wV.jsx)(kU, {
          label: UV("codeEditorAiHints:toggle"),
          hint: UV("codeEditorAiHints:toggleHint"),
          checked: JV.shown,
          onChange: JV.setShown
        }), JV && rU.e.canChange && (0, wV.jsx)(kU, {
          label: UV("codeEditorAiKeySafetyCheck:toggle"),
          hint: UV("codeEditorAiKeySafetyCheck:toggleHint"),
          checked: yV,
          onChange: VV => {
            VV ? pV(!0) : JY.NotificationProvider.showPromptPopup({
              title: "codeEditorAiKeySafetyCheck:offWarning",
              confirmText: "general:yes",
              destructive: !0,
              cancelText: "general:no"
            }).getResult().then((VV => {
              !0 === VV && pV(!1)
            }))
          }
        }), YV && (0, wV.jsxs)("div", {
          className: "CodeEditorMoreOptionsRow",
          children: [(0, wV.jsx)(ZU.i, {
            label: "codeEditor:variationLabel",
            children: (0, wV.jsx)(Dx.d, {
              className: "CodeEditorVariationInput",
              maxLength: 32,
              defaultValue: YV.name,
              onValueChange: YV.setName,
              onEnter: YV.reload
            })
          }), (0, wV.jsx)(rV.w, {
            className: "CodeEditorButton",
            onClick: YV.reload,
            children: UV("codeEditor:reloadAsVariation")
          })]
        })]
      })
    }
    var EU = xV(38067),
      BU = xV(38073);

    function jU(VV) {
      let {
        close: eV
      } = VV;
      const {
        t: xV
      } = (0, sV.A)(), JV = [{
        name: xV("codeEditor:welcomeTutorial"),
        tutorial: "welcome"
      }, {
        name: xV("codeEditor:docsOverviewTutorial"),
        tutorial: "docsOverview"
      }, {
        name: xV("codeEditorAiTutorial:tutorialName"),
        tutorial: "aiHelperOverview"
      }];
      return (0, wV.jsxs)("div", {
        className: "PromptGenericPopup CodeEditorTutorialsPopup",
        children: [(0, wV.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: xV("codeEditor:tutorialsTitle")
        }), (0, wV.jsx)("div", {
          className: "CodeEditorTutorialsList",
          children: JV.map((VV => (0, wV.jsx)(rV.f, {
            className: "CodeEditorTutorialsListButton",
            onClick: () => {
              eV(), (0, BU.I)(VV.tutorial)
            },
            children: VV.name
          }, VV.tutorial)))
        })]
      })
    }
    var qU = xV(115),
      tU = xV(37687),
      FU = xV(3054);
    const TU = (0, YV.forwardRef)((function(VV, eV) {
      let {
        value: xV,
        onChange: JV,
        onSubmit: YV,
        placeholder: UV,
        maxLength: yV,
        rows: pV = 2,
        allowNewLines: QV = !1,
        onKeyDown: nV,
        before: ZV
      } = VV;
      const {
        t: vV
      } = (0, sV.A)(), kV = "" !== xV.trim(), bV = () => {
        kV && YV()
      };
      return (0, wV.jsxs)("div", {
        className: "PanelPromptInputRow",
        children: [ZV, (0, wV.jsx)("textarea", {
          ref: eV,
          className: "PanelPromptInput",
          value: xV,
          maxLength: yV,
          rows: pV,
          placeholder: UV,
          spellCheck: !1,
          autoComplete: "off",
          onChange: VV => {
            JV(QV ? VV.target.value : VV.target.value.replace(/\r?\n/g, " "))
          },
          onKeyDown: VV => {
            VV.nativeEvent.isComposing || 229 === VV.nativeEvent.keyCode ? VV.stopPropagation() : "Escape" !== VV.key && (VV.stopPropagation(), null === nV || void 0 === nV || nV(VV), VV.defaultPrevented || "Enter" !== VV.key || QV && VV.shiftKey || (VV.preventDefault(), bV()))
          }
        }), (0, wV.jsx)(rV.f, {
          className: "PanelPromptSend",
          disabled: !kV,
          onClick: bV,
          ariaLabel: vV("codeEditorPanels:send"),
          children: (0, wV.jsx)(EV.b, {
            name: "arrow-up"
          })
        })]
      })
    }));

    function PU(VV) {
      let {
        inputRef: eV
      } = VV;
      const {
        t: xV
      } = (0, sV.A)(), {
        messages: JV,
        reportedPlayers: UV,
        channel: yV
      } = (0, FU.s)(), [pV, QV] = (0, YV.useState)(""), nV = (0, YV.useRef)({
        stepsBack: 0,
        text: ""
      });
      return (0, wV.jsxs)("div", {
        className: "CodeEditorChatPanel",
        "data-replay-redact": !0,
        children: [(0, wV.jsx)("div", {
          className: "CodeEditorChatHeader",
          children: (0, wV.jsx)("span", {
            className: "CodeEditorChatTitle",
            children: xV("codeEditorChat:title")
          })
        }), 0 === JV.length ? (0, wV.jsx)("div", {
          className: "CodeEditorChatEmpty",
          children: xV("codeEditorChat:empty")
        }) : (0, wV.jsx)("div", {
          className: "ChatMessages CodeEditorChatMessages",
          children: (0, wV.jsx)(tU.d, {
            messages: JV,
            reportedPlayers: UV
          })
        }), (0, wV.jsx)(TU, {
          ref: eV,
          value: pV,
          onChange: QV,
          onSubmit: () => {
            (0, FU.q)(pV), QV(""), nV.current = {
              stepsBack: 0,
              text: ""
            }
          },
          maxLength: NV.$c,
          rows: 1,
          placeholder: yV ? xV("touchOnly" === (0, qU.c)() ? "codeEditorChat:channelPlaceholderTouch" : "codeEditorChat:channelPlaceholder", {
            channel: yV.channelName
          }) : xV("codeEditorChat:placeholder"),
          before: yV && (0, wV.jsx)("button", {
            type: "button",
            className: "CodeEditorChatChannel",
            style: {
              backgroundColor: yV.elementBgColor
            },
            onClick: () => {
              FU.e.selectNextChannel(), eV.current.focus()
            },
            children: (0, wV.jsx)(PV.b, {
              text: yV.elementContent
            })
          }),
          onKeyDown: VV => {
            const eV = pV === nV.current.text;
            if ("ArrowUp" !== VV.key && "ArrowDown" !== VV.key || !eV && "" !== pV) "Tab" === VV.key && !VV.shiftKey && yV && (VV.preventDefault(), FU.e.selectNextChannel());
            else {
              VV.preventDefault();
              const xV = eV ? nV.current.stepsBack : 0;
              nV.current = (0, FU.m)(xV + ("ArrowUp" === VV.key ? 1 : -1)), QV(nV.current.text)
            }
          }
        })]
      })
    }
    var AU = xV(38076);

    function NU(VV) {
      return "expanded" === VV ? "always" : "shown" === VV ? "narrow" : void 0
    }

    function XU(VV) {
      var eV;
      let {
        cZ: xV,
        worldPanel: JV,
        closeWorld: YV,
        aiShown: UV,
        defaultWidth: yV,
        children: pV
      } = VV;
      const QV = "hidden" !== xV;
      return (0, wV.jsx)(AU.d, {
        side: "right",
        defaultSize: QV ? "max(18rem, 40%)" : yV,
        covers: null !== (eV = NU(xV)) && void 0 !== eV ? eV : UV ? "narrow" : void 0,
        children: (0, wV.jsxs)("div", {
          className: qx()("CodeEditorRightColumn", {
            WorldShown: QV,
            WorldExpanded: "expanded" === xV
          }),
          children: [QV && (0, wV.jsx)(AU.d, {
            side: "top",
            onClose: YV,
            children: JV
          }), pV]
        })
      })
    }
    var MU = xV(2109),
      zU = xV(1159),
      GU = xV(1348);
    class WU {
      constructor(VV, eV, xV) {
        this.measure = VV, this.apply = eV, this.now = xV, this.last = null, this.resizedAt = -1 / 0, this.resizing = !1, this.stretchedAt = null
      }
      get rect() {
        var VV, eV;
        return null !== (VV = null === (eV = this.last) || void 0 === eV ? void 0 : eV.rect) && void 0 !== VV ? VV : null
      }
      sync() {
        const VV = function(VV) {
          const eV = Math.round(VV.left),
            xV = Math.round(VV.top);
          return {
            left: eV,
            top: xV,
            width: Math.round(VV.right) - eV,
            height: Math.round(VV.bottom) - xV
          }
        }(this.measure());
        if (VV.width <= 0 || VV.height <= 0) return;
        const eV = this.now(),
          xV = this.last;
        let JV = {
          width: VV.width,
          height: VV.height
        };
        null === xV || VV.width === xV.rect.width && VV.height === xV.rect.height || (this.resizing = eV - this.resizedAt < 100, this.resizedAt = eV);
        const YV = null !== xV && this.resizing && eV - this.resizedAt < 100 && (VV.width !== xV.bufferSize.width || VV.height !== xV.bufferSize.height);
        YV && (this.stretchedAt ??= eV), YV && eV - this.stretchedAt < 250 ? JV = xV.bufferSize : this.stretchedAt = null;
        const UV = {
          rect: VV,
          bufferSize: JV
        };
        var yV, pV;
        null !== xV && (pV = UV, (yV = xV).rect.left === pV.rect.left && yV.rect.top === pV.rect.top && yV.rect.width === pV.rect.width && yV.rect.height === pV.rect.height && yV.bufferSize.width === pV.bufferSize.width && yV.bufferSize.height === pV.bufferSize.height) || (this.last = UV, this.apply(UV))
      }
      stop() {
        null !== this.last && (this.last = null, this.apply(null))
      }
    }

    function RU(VV) {
      const {
        style: eV
      } = document.documentElement;
      for (const [xV, JV] of [
          ["--worldViewLeft", null === VV || void 0 === VV ? void 0 : VV.left],
          ["--worldViewTop", null === VV || void 0 === VV ? void 0 : VV.top],
          ["--worldViewWidth", null === VV || void 0 === VV ? void 0 : VV.width],
          ["--worldViewHeight", null === VV || void 0 === VV ? void 0 : VV.height]
        ]) void 0 === JV ? eV.removeProperty(xV) : eV.setProperty(xV, `${JV}px`)
    }
    var gU = xV(1838),
      DU = xV(2124);

    function iU(VV, eV) {
      (0, YV.useEffect)((() => {
        if (!VV) return;
        const xV = VV => {
          var xV;
          "Escape" === VV.key ? (VV.stopPropagation(), VV.preventDefault(), eV()) : (xV = VV.code, Object.entries(fe.t).some((VV => {
            let [eV, JV] = VV;
            const YV = DU.d[eV];
            return YV.includes("ui") && !YV.includes("core") && JV.includes(xV)
          })) && !(0, gU.isTextEntry)(VV.target) && VV.preventDefault())
        };
        window.addEventListener("keydown", xV, !0);
        const JV = (0, hV.m)(eV);
        return () => {
          window.removeEventListener("keydown", xV, !0), JV()
        }
      }), [VV, eV])
    }

    function CU() {
      return (0, bY.k)().some((VV => VV !== bY.d))
    }

    function aU(VV, eV) {
      return VV.map((VV => eV ? String(VV) : VV.toFixed(1))).join(", ")
    }

    function oU(VV) {
      let {
        freeCamera: eV,
        picking: xV,
        hovered: JV
      } = VV;
      const {
        t: UV
      } = (0, sV.A)(), yV = (0, YV.useRef)(null), pV = (0, YV.useRef)(null);
      return (0, YV.useEffect)((() => {
        const VV = (VV, eV) => {
            VV.textContent !== eV && (VV.textContent = eV)
          },
          xV = () => {
            const xV = eV ? nV.gameBridge.lookup("freeCameraPos", null) : null;
            VV(yV.current, aU(null !== xV && void 0 !== xV ? xV : nV.gameBridge.lookup("localPos", null), !1));
            const JV = nV.gameBridge.lookup("targetedBlockPos", null);
            VV(pV.current, JV ? aU(JV, !0) : "-")
          };
        return xV(), (0, GU.F)(xV)
      }), [eV]), (0, wV.jsxs)("div", {
        className: "WorldPanelCoordinates",
        children: [(0, wV.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: UV(eV ? "codeEditorWorld:camera" : "codeEditorWorld:position")
        }), (0, wV.jsx)("span", {
          ref: yV
        }), (0, wV.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: UV("codeEditorWorld:lookingAt")
        }), (0, wV.jsx)("span", {
          ref: pV,
          hidden: xV
        }), xV && (0, wV.jsxs)(wV.Fragment, {
          children: [(0, wV.jsx)("span", {
            children: JV ? aU(JV.pos, !0) : "-"
          }), JV && (0, wV.jsx)("span", {
            className: "WorldPanelCoordsName",
            children: JV.name
          })]
        })]
      })
    }
    var cU = xV(38080),
      hU = xV(1578);

    function lU(VV) {
      const eV = VV.currentTarget.getBoundingClientRect();
      return {
        x: (VV.clientX - eV.left) / eV.width,
        y: (VV.clientY - eV.top) / eV.height
      }
    }

    function LU(VV) {
      const [eV, xV] = (0, YV.useState)(!1), [JV, UV] = (0, YV.useState)(null), yV = (0, YV.useRef)(null);
      (0, YV.useEffect)((() => {
        if (!eV) return;
        let VV = null,
          xV = null,
          JV = 1 / 0;
        const YV = (0, GU.y)((eV => {
          JV += eV;
          const YV = yV.current;
          if (YV === xV && JV < 100) return;
          xV = YV, JV = 0;
          const pV = YV && nV.gameBridge.lookup("blockAtViewPoint", YV);
          var QV, wV;
          (QV = pV) === (wV = VV) || null !== QV && null !== wV && QV.name === wV.name && (0, cU.h)(QV.pos, wV.pos) && (0, cU.h)(QV.normal, wV.normal) || (VV = pV, UV(pV), nV.gameBridge.send("setBlockHighlight", pV))
        }));
        return () => {
          YV(), null !== VV && nV.gameBridge.send("setBlockHighlight", null), UV(null)
        }
      }), [eV]);
      const pV = (0, YV.useCallback)((() => {
        xV(!1)
      }), []);
      iU(eV, pV);
      const QV = JV => {
          if (!eV) return;
          const YV = nV.gameBridge.lookup("blockAtViewPoint", lU(JV));
          null !== YV && (xV(!1), VV(YV.pos))
        },
        wV = eV ? (0, hU.e)(QV, "pointerup") : null,
        ZV = {
          onPointerDown: VV => {
            null === wV || void 0 === wV || wV.onPointerDown(VV)
          },
          onPointerMove: VV => {
            yV.current = lU(VV)
          },
          onPointerLeave: () => {
            yV.current = null
          },
          onPointerUp: null === wV || void 0 === wV ? void 0 : wV.onPointerUp,
          onClick: VV => {
            "pointerType" in VV.nativeEvent && "touch" === VV.nativeEvent.pointerType || QV(VV)
          }
        };
      return {
        picking: eV,
        setPicking: xV,
        hovered: JV,
        slotHandlers: ZV
      }
    }

    function fU(VV) {
      nV.gameBridge.send("setFreeCameraMovesFly", VV)
    }

    function mU(VV) {
      let {
        shown: eV,
        setShown: xV,
        canInsertCode: JV
      } = VV;
      const {
        t: UV
      } = (0, sV.A)(), {
        isTouchScreen: yV
      } = (0, cV.l)(["isTouchScreen"]), pV = (0, YV.useRef)(null), nV = (0, YV.useCallback)((() => {
        var VV;
        null === (VV = pV.current.closest(".CodeEditorBg").querySelector(".cm-content")) || void 0 === VV || VV.focus()
      }), []), {
        control: ZV,
        take: vV,
        release: bV,
        blocked: BV
      } = function(VV) {
        const [eV, xV] = (0, YV.useState)("none"), JV = (0, YV.useRef)("none"), [UV, yV] = (0, YV.useState)(!1), pV = VV => {
          JV.current = VV, xV(VV)
        }, QV = (0, YV.useCallback)((() => {
          const eV = JV.current;
          "none" !== eV && (pV("none"), (0, bY.p)(bY.d), "mouse" === eV && VV())
        }), [VV]), nV = (0, YV.useCallback)((VV => {
          CU() ? yV(!0) : (pV("mouse" === VV && "touchOnly" !== (0, qU.c)() ? "mouse" : "touch"), (0, bY.m)(bY.d))
        }), []);
        return (0, AV.g)("pointerLockUpdate", (VV => {
          VV && "touch" === JV.current && "touchOnly" !== (0, qU.c)() ? pV("mouse") : VV || "mouse" !== JV.current || QV()
        })), (0, YV.useEffect)((() => {
          if (!UV) return;
          const VV = () => {
            CU() || yV(!1)
          };
          return VV(), (0, bY.h)(VV)
        }), [UV]), iU("none" !== eV, QV), (0, YV.useEffect)((() => {
          if ("none" === eV) return;
          const VV = VV => {
            (0, gU.isTextEntry)(VV.target) && QV()
          };
          return document.addEventListener("focusin", VV), () => {
            document.removeEventListener("focusin", VV)
          }
        }), [eV, QV]), (0, YV.useEffect)((() => (document.addEventListener("pointerlockerror", QV), () => {
          document.removeEventListener("pointerlockerror", QV)
        })), [QV]), (0, YV.useEffect)((() => () => {
          "none" !== JV.current && null !== cV.b.get("openInGameMenuName") && (0, bY.p)(bY.d)
        }), []), {
          control: eV,
          take: nV,
          release: QV,
          blocked: UV
        }
      }(nV), jV = (0, zU.n)(AU.f);
      (0, YV.useEffect)((() => {
        "touch" !== ZV || "shown" !== eV || jV ? "none" === ZV && "expanded" === eV && xV("shown") : xV("expanded")
      }), [ZV, jV]),
      function(VV, eV) {
        const xV = (0, YV.useRef)(eV);
        xV.current = eV;
        const JV = (0, YV.useRef)(null);
        (0, YV.useLayoutEffect)((() => {
          const eV = new WU((() => VV.current.getBoundingClientRect()), (VV => {
            var eV;
            "none" !== xV.current && RU(null !== (eV = null === VV || void 0 === VV ? void 0 : VV.rect) && void 0 !== eV ? eV : null), (0, GU.K)().setGameView(VV)
          }), (() => performance.now()));
          JV.current = eV, eV.sync();
          const YV = (0, GU.v)((() => {
            eV.sync()
          }));
          return () => {
            YV(), cV.b.set({
              worldPanelHud: null
            }), eV.stop()
          }
        }), [VV]), (0, YV.useLayoutEffect)((() => {
          JV.current.sync(), RU("none" === eV ? null : JV.current.rect), cV.b.set({
            worldPanelHud: eV
          })
        }), [eV])
      }(pV, "touch" === ZV ? "touchControls" : "none");
      const {
        picking: qV,
        setPicking: tV,
        hovered: FV,
        slotHandlers: {
          onPointerDown: TV,
          ...PV
        }
      } = LU((VV => {
        kV.h.QZ("CodeEditorInsertText", {
          text: `[${VV.join(", ")}]`,
          focus: !yV
        }), (0, AU.f)() && xV("hidden")
      })), NV = function() {
        const {
          allowed: VV,
          movesFly: eV
        } = (0, XV.h)("freeCamera"), xV = (0, YV.useRef)(eV), JV = (0, YV.useRef)(eV);
        return JV.current !== eV && (JV.current = eV, xV.current = eV), (0, YV.useEffect)((() => () => {
          xV.current && fU(!1)
        }), []), {
          allowed: VV,
          on: eV,
          toggle: () => {
            xV.current = !eV, fU(!eV)
          }
        }
      }(), MV = (0, QV.j)("hideCoordinates"), zV = (0, XV.h)("localPlayerAlive"), GV = !zV || BV;
      (0, YV.useEffect)((() => {
        zV || bV()
      }), [zV, bV]), (0, YV.useEffect)((() => {
        !GV && JV || tV(!1)
      }), [GV, JV, tV]);
      const WV = NV.on ? rV.m : rV.f,
        RV = qV ? rV.m : rV.f;
      return (0, wV.jsxs)("div", {
        className: "WorldPanel",
        children: [(0, wV.jsxs)("div", {
          className: "WorldPanelHeader",
          children: [(0, wV.jsx)("span", {
            className: "WorldPanelTitle",
            children: UV("codeEditorWorld:title")
          }), "touch" === ZV && !jV && (0, wV.jsx)(rV.f, {
            className: "WorldPanelButton",
            onClick: bV,
            children: UV("codeEditorWorld:backToCode")
          }), !GV && NV.allowed && !yV && (0, wV.jsx)(HV.d, {
            tooltipInner: UV("codeEditorWorld:freeCameraTooltip"),
            hoverOnly: !0,
            children: (0, wV.jsx)(WV, {
              className: "WorldPanelButton",
              ariaPressed: NV.on,
              ariaLabel: UV("codeEditorWorld:freeCamera"),
              onClick: NV.toggle,
              children: (0, wV.jsx)(EV.b, {
                name: "video"
              })
            })
          }), !GV && JV && (0, wV.jsx)(HV.d, {
            tooltipInner: UV("codeEditorWorld:pickTooltip"),
            hoverOnly: !0,
            children: (0, wV.jsxs)(RV, {
              className: "WorldPanelButton",
              ariaPressed: qV,
              onClick: () => {
                bV(), tV(!qV)
              },
              children: [(0, wV.jsx)(EV.b, {
                name: "crosshairs"
              }), UV("codeEditorWorld:pick")]
            })
          })]
        }), !MV && (0, wV.jsx)(oU, {
          freeCamera: NV.on,
          picking: qV,
          hovered: FV
        }), (0, wV.jsxs)("div", {
          ref: pV,
          className: qx()("WorldPanelSlot", {
            TouchControl: "touch" === ZV,
            Picking: qV
          }),
          onPointerDown: VV => {
            0 !== VV.button || GV || qV || vV(VV.pointerType), TV(VV)
          },
          ...PV,
          children: [!GV && !qV && (0, wV.jsx)("div", {
            className: "WorldPanelCrosshair",
            children: "+"
          }), !GV && "touch" !== ZV && (0, wV.jsxs)("div", {
            className: "WorldPanelHint",
            children: [qV && UV(yV ? "codeEditorWorld:tapToPick" : "codeEditorWorld:clickToPick"), !qV && "none" === ZV && !NV.on && UV(yV ? "codeEditorWorld:tapToPlay" : "codeEditorWorld:clickToPlay"), !qV && "none" === ZV && NV.on && UV("codeEditorWorld:clickToFly"), "mouse" === ZV && (0, wV.jsxs)(wV.Fragment, {
              children: [(0, wV.jsx)(MU.d, {
                noaAction: "OpenLobbyLeaderboard"
              }), UV("codeEditorWorld:backToCode")]
            })]
          }), GV && (0, wV.jsxs)("div", {
            className: "WorldPanelWaiting",
            children: [(0, wV.jsx)("span", {
              children: UV(zV ? "codeEditorWorld:gameWaiting" : "codeEditorWorld:died")
            }), (0, wV.jsx)(rV.f, {
              onClick: hV.h,
              children: UV("codeEditorWorld:toGame")
            })]
          })]
        })]
      })
    }
    var KU = xV(5529);

    function HU(VV) {
      let {
        cZ: eV,
        setWorld: xV,
        toggleWorld: JV,
        aiShown: YV,
        closeAi: UV
      } = VV;
      const {
        t: yV
      } = (0, sV.A)(), pV = YV ? "ai" : "hidden" !== eV ? "world" : "code", QV = [{
        value: "code",
        label: yV("codeEditorWorld:codePane")
      }, {
        value: "world",
        label: yV("codeEditorWorld:title")
      }];
      YV && QV.push({
        value: "ai",
        label: yV("codeEditorWorld:aiPane")
      });
      return (0, wV.jsx)("div", {
        className: "CodeEditorPaneSwitch",
        children: (0, wV.jsx)(KU.b, {
          options: QV,
          value: pV,
          onChange: VV => {
            "world" !== VV ? (YV && UV(), xV("hidden")) : "hidden" === eV ? JV() : UV()
          },
          ariaLabel: yV("codeEditorWorld:panes"),
          keepsFocus: !0
        })
      })
    }
    var uU = xV(38085),
      sU = xV(38093),
      SU = xV(38098),
      IU = xV(38104);
    const dU = (0, YV.lazy)((() => Promise.all([xV.e(608), xV.e(604), xV.e(607), xV.e(603), xV.e(98), xV.e(606), xV.e(605), xV.e(602)]).then((() => xV(44220))))),
      OU = (0, YV.lazy)((() => Promise.all([xV.e(93), xV.e(96), xV.e(97), xV.e(95), xV.e(610)]).then((() => xV(44363))))),
      Vy = (0, YV.lazy)((() => Promise.all([xV.e(608), xV.e(607), xV.e(98), xV.e(96), xV.e(97), xV.e(95), xV.e(606), xV.e(605), xV.e(94), xV.e(105)]).then((() => xV(44370)))));

    function ey(VV) {
      return nV.gameBridge.query("worldCodeAiChunk", VV)
    }

    function xy() {
      return nV.gameBridge.query("worldCodeAiGameState", null)
    }

    function Jy(VV) {
      const {
        gsUrl: eV,
        gameNameWithVariation: xV,
        lobbyName: JV
      } = JU();
      return (0, MY.postJsonWithMetricsCookiesAndJsonResponse)(`${eV}/code/get-lobby-code`, XY.Qj["get-lobby-code"].toBuffer({
        gameNameWithVariation: xV,
        lobbyName: JV,
        path: VV
      }), {
        retries: 1
      })
    }
    let Yy = !1;
    const Uy = [],
      yy = {
        message: "You do not have permission to view the code.",
        type: "warning"
      },
      py = (0, YV.memo)((function(VV) {
        var eV, xV;
        let {
          show: JV,
          onOpen: UV,
          onClose: pV,
          isLobbyCode: ZV
        } = VV;
        const vV = (0, YV.useRef)(""),
          [bV, BV] = (0, YV.useState)(null),
          jV = (0, YV.useRef)(ZV),
          [qV, tV] = (0, YV.useState)({
            message: null,
            type: null
          }),
          [FV, TV] = (0, YV.useState)(""),
          PV = qV.message ? qV : {
            message: FV,
            type: "warning"
          },
          [zV, GV] = (0, YV.useState)(!0),
          [WV, gV] = (0, rU.k)(rU.g),
          [DV, iV] = (0, rU.k)(rU.c),
          [CV, aV] = (0, YV.useState)(!1),
          [oV, lV] = (0, YV.useState)(!1),
          LV = (0, YV.useRef)(null),
          fV = (0, YV.useRef)(!1);
        (0, YV.useEffect)((() => {
          var VV;
          oV && fV.current && (fV.current = !1, null === (VV = LV.current) || void 0 === VV || VV.focus())
        }), [oV]);
        const mV = (0, uU.c)(),
          KV = (0, YV.useRef)(null),
          uV = (0, YV.useRef)(null),
          {
            openInGameMenuName: SV,
            openEverythingMenuName: IV,
            worldPanelHud: dV
          } = (0, cV.l)(["openInGameMenuName", "openEverythingMenuName", "worldPanelHud"]),
          OV = VV => {
            JV && (KV.current = VV, Xe.current = !0)
          };
        (0, AV.g)("OpenReportMenu", (() => {
          OV("EZ")
        })), (0, AV.g)("OpenStoreFromCodeEditor", (() => {
          OV("store")
        })), (0, YV.useEffect)((() => {
          const VV = KV.current;
          null === VV || "EZ" === VV && ("makeReport" === SV || "makeDiscordReport" === SV) || "store" === VV && null !== IV || (KV.current = null, null === SV && null === IV ? ZV ? (uV.current = Jx.current, kV.h.QZ("EditLobbyCode", bV)) : kV.h.QZ("EditCodeBlock", {
            pos: bV,
            canChangePos: jV.current
          }) : (0, BU.y)())
        }), [SV, IV, ZV, bV]), (0, YV.useEffect)((() => {
          if (JV) return () => {
            uV.current = null
          }
        }), [JV]);
        const [Ve, ee] = function() {
          const [VV, eV] = (0, YV.useState)(Yy);
          return (0, AV.g)("CodeEditorAiHelperShown", (VV => {
            eV(VV)
          })), [VV, (0, YV.useCallback)((VV => {
            Yy = VV, kV.h.QZ("CodeEditorAiHelperShown", VV)
          }), [])]
        }(), [xe, Je] = (0, YV.useState)(null), [Ye, Ue] = (0, YV.useState)([]), [ye, pe] = (0, YV.useState)(0), [Qe, ne] = (0, YV.useState)(0), [we, Ze] = (0, YV.useState)(""), re = (0, YV.useRef)(null), [ke, be] = (0, YV.useState)(ZV ? IU.f : null), Ee = ZV || null !== bV, Be = (0, QV.j)("canEditCode"), je = (0, QV.j)("canUseDevCreativeItems"), qe = (0, EU.p)("welcome"), te = (0, EU.p)("docsOverview"), Fe = te ? "docsOverview" : "welcome", Te = null !== te && void 0 !== te ? te : qe, Pe = (0, EU.p)("aiHelperOverview"), Ae = Pe ? "aiHelperOverview" : "welcome", Ne = null !== Pe && void 0 !== Pe ? Pe : qe, Xe = (0, YV.useRef)(!1), Me = (0, YV.useRef)(!1), ze = (0, YV.useRef)(null), [Ge, We] = (0, YV.useState)(""), [Re, ge] = (0, YV.useState)(!1), [De, ie] = (0, YV.useState)(null), Ce = (0, XV.h)("connectedGame"), ae = ZV && Be && "classic" === Ce.gameNameWithVariation && !(0, ve.I)(Ce.lobbyName), [oe, ce] = (0, YV.useState)(null), [he, Le] = (0, YV.useState)({
          [zY.h]: ""
        }), [me, Ke] = (0, YV.useState)({
          assets: {},
          revision: 0
        }), He = (0, YV.useRef)(me), ue = (0, YV.useCallback)((VV => {
          var eV;
          VV.revision < He.current.revision || (He.current = VV, Ke(VV), TV(VV.startupError ? `Schematics could not load: ${VV.startupError}` : ""), null === (eV = bx.current) || void 0 === eV || eV.onLobbyFilesChanged({
            ...Qx.current,
            ...(0, oY.o)(VV.assets)
          }))
        }), []), [se, Se] = (0, YV.useState)(zY.h), [Ie, de] = (0, YV.useState)(null), [Oe, Vx] = (0, YV.useState)(null), ex = (0, YV.useRef)(!1), xx = (0, YV.useRef)(null), Jx = (0, YV.useRef)(se);
        Jx.current = se;
        const Yx = (0, YV.useRef)(Ie);
        Yx.current = Ie;
        const Ux = Ie ? null : De,
          yx = Ux && !Ux.engineLocked ? Ux.worldCodeEngine : null,
          px = (0, YV.useRef)(Oe);
        px.current = Oe;
        const Qx = (0, YV.useRef)(he);
        Qx.current = he;
        const nx = (0, YV.useRef)(null),
          wx = (0, YV.useRef)(null),
          [Zx, vx] = (0, YV.useState)(!1),
          rx = (0, sY.q)(),
          kx = (0, YV.useRef)([]),
          bx = (0, YV.useRef)(null),
          Ex = (0, YV.useRef)(null),
          Bx = (0, YV.useRef)(null);

        function jx(VV) {
          tV(VV), clearTimeout(ze.current), ze.current = setTimeout((() => {
            tV({
              message: null,
              type: null
            })
          }), 3e3)
        }
        const tx = (0, YV.useCallback)((function() {
            let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            ex.current && xx.current && (nV.gameBridge.send("sendCodeCollab", {
              bV: GY.c.Leave,
              EV: (0, GY.s)(xx.current),
              Yn: !!VV || null
            }), ex.current = !1, xx.current = null), ce(null)
          }), []),
          Fx = (0, YV.useCallback)((VV => {
            const eV = {
              kind: "lobby",
              path: VV
            };
            xx.current = eV, Se(VV), vV.current = "", nV.gameBridge.send("sendCodeCollab", {
              bV: GY.c.Join,
              EV: (0, GY.s)(eV)
            }), ex.current = !0
          }), []),
          Tx = (0, YV.useCallback)((VV => {
            var eV;
            const xV = null === (eV = Ex.current) || void 0 === eV ? void 0 : eV.collabState;
            return xV && "lobby" === xV.docKey.kind && xV.docKey.path === VV && Jx.current === VV ? Promise.resolve({
              doc: xV.doc,
              version: xV.version,
              clientID: xV.clientID,
              docKey: xV.docKey,
              httpConfig: xV.httpConfig
            }) : new Promise(((eV, xV) => {
              const JV = setTimeout((() => {
                  kx.current = kx.current.filter((VV => VV !== YV)), xV(new Error(`Timed out joining ${VV}`))
                }), 15e3),
                YV = xV => {
                  "lobby" === xV.docKey.kind && xV.docKey.path === VV && (clearTimeout(JV), kx.current = kx.current.filter((VV => VV !== YV)), eV(xV))
                };
              kx.current.push(YV), Jx.current !== VV ? (tx(!0), Fx(VV)) : ex.current || Fx(VV)
            }))
          }), [Fx, tx]),
          Px = (0, YV.useCallback)((async function(VV, eV) {
            let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
            const JV = Date.now();
            let YV = VV in Qx.current;
            for (; YV !== eV;) {
              if (Date.now() - JV > xV) throw new Error(`Timed out waiting for lobby path ${VV} present=${eV}`);
              await (0, jJ.R)(50), YV = VV in Qx.current
            }
          }), []),
          Ax = (0, YV.useCallback)((VV => {
            const eV = Qx.current,
              xV = zY.h in eV && zY.j in eV;
            if (!(0, WY.i)(VV) || xV) {
              if (Jx.current === VV) {
                var JV;
                const YV = xV && (0, WY.i)(VV) ? VV === zY.h ? zY.j : zY.h : null !== (JV = (0, WY.d)(eV)) && void 0 !== JV ? JV : zY.h;
                wx.current = {
                  fromPath: VV,
                  toPath: YV
                }, Se(YV)
              }
              nV.gameBridge.send("sendCodeCollab", {
                bV: GY.c.DeleteFile,
                EV: (0, GY.s)({
                  kind: "lobby",
                  path: Jx.current
                }),
                Un: VV
              })
            }
          }), []),
          Nx = (0, YV.useCallback)((VV => {
            uV.current = null, de(null), Vx(null), !ZV || VV === Jx.current && ex.current || (tx(!0), Fx(VV))
          }), [ZV, tx, Fx]),
          Xx = (0, YV.useCallback)(((VV, eV) => {
            const xV = CY.e[VV],
              JV = xV && eV in xV.files ? eV : "index.ts";
            if (VV !== Yx.current || JV !== px.current) {
              var YV;
              if (VV !== Yx.current) null === (YV = bx.current) || void 0 === YV || YV.stopContinuousSync(), tx(!0);
              de(VV), Vx(JV)
            }
          }), [tx]),
          Mx = (0, YV.useCallback)((VV => {
            var eV;
            const xV = Jx.current,
              JV = Qx.current[xV],
              YV = ex.current && !Yx.current && xV in VV && void 0 !== JV ? {
                ...VV,
                [xV]: JV
              } : VV;
            Le(YV);
            const UV = nx.current;
            if (UV && UV in VV) nx.current = null, UV !== Jx.current && Nx(UV);
            else if (!(Jx.current in VV) && ex.current && !Yx.current) {
              var yV;
              Nx(null !== (yV = (0, WY.d)(VV)) && void 0 !== yV ? yV : zY.h)
            }
            null === (eV = bx.current) || void 0 === eV || eV.onLobbyFilesChanged({
              ...YV,
              ...(0, oY.o)(He.current.assets)
            })
          }), [Nx]),
          zx = (0, YV.useCallback)((() => Jy(Jx.current).then((async VV => {
            if (!ex.current || !VV.files) return null;
            Mx(VV.files);
            const eV = await YU({
              action: "state"
            });
            return ue(eV), {
              ...VV.files,
              ...(0, oY.o)(eV.assets)
            }
          })).catch((VV => (console.error("[CodeCollab] Failed to fetch lobby files via HTTP", VV), jx({
            message: "Could not refresh the file list",
            type: "warning"
          }), null)))), [Mx, ue]),
          Gx = () => {
            pV()
          };
        (0, YV.useEffect)((() => {
          if (TV(""), !JV || !ZV) return;
          let VV = !1;
          return He.current = {
            assets: {},
            revision: 0
          }, Ke(He.current), YU({
            action: "state"
          }).then((eV => {
            VV || ue(eV)
          })).catch((eV => {
            console.error("Could not load project schematics", eV), VV || TV("Could not load schematics. Reopen the Code Editor to retry.")
          })), () => {
            VV = !0
          }
        }), [JV, ZV, ue]);
        const Wx = (0, YV.useCallback)((function() {
            let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            xx.current && nV.gameBridge.send("sendCodeCollab", {
              bV: GY.c.Submit,
              EV: (0, GY.s)(xx.current),
              ...VV ? {
                tV: "keepOpen"
              } : {}
            })
          }), []),
          Rx = (0, YV.useCallback)((() => {
            if (!xx.current || "lobby" !== xx.current.kind) return;
            const VV = Ge.trim();
            (0, RY.q)(VV) ? (nV.gameBridge.send("sendCodeCollab", {
              bV: GY.c.ReloadAsVariation,
              EV: (0, GY.s)(xx.current),
              tV: VV
            }), ge(!1)) : jx({
              message: "Variation must be 1-32 characters: A-Z, a-z, 0-9, _, -",
              type: "warning"
            })
          }), [Ge]),
          gx = (0, YV.useCallback)((VV => {
            nV.gameBridge.send("sendCodeCollab", {
              bV: GY.c.SetEngine,
              EV: (0, GY.s)({
                kind: "lobby",
                path: Jx.current
              }),
              tV: VV
            })
          }), []),
          Dx = (0, YV.useCallback)((VV => {
            if (!Yx.current && Be && (jV.current || ZV)) {
              if (ZV) {
                var eV;
                const xV = (0, WY.r)(Qx.current, Jx.current),
                  JV = Math.min(le.v, Math.max(0, le.B - xV)),
                  YV = VV.slice(0, JV);
                return vV.current = YV, Le((VV => ({
                  ...VV,
                  [Jx.current]: YV
                }))), void(null === (eV = bx.current) || void 0 === eV || eV.onDocTextChanged(Jx.current, YV))
              }
              vV.current = VV, Ze(VV)
            }
          }), [Be, ZV]);
        (0, AV.g)("EditLobbyCode", (VV => {
          var eV;
          RV.featureFlags.canSeePlayerWrittenText && ZV && (tx(), BV(VV), vV.current = "", Le({
            [zY.h]: ""
          }), ie(null), Se(zY.h), de(null), Vx(null), nx.current = null, wx.current = null, null === (eV = bx.current) || void 0 === eV || eV.stopContinuousSync(), UV(), Fx(zY.h))
        })), (0, AV.g)("EditCodeBlock", (VV => {
          let {
            pos: eV,
            canChangePos: xV
          } = VV;
          if (RV.featureFlags.canSeePlayerWrittenText && !ZV)
            if (tx(), null !== eV && (eV = [...eV]), BV(eV), jV.current = xV, null !== eV) {
              vV.current = "", Ze(""), UV();
              const VV = {
                  kind: "codeBlock",
                  pos: eV
                },
                JV = (0, GY.s)(VV);
              re.current !== JV && (re.current = JV, Ue([]), ne(ye)), be((0, IU.b)(JV, [eV[0], eV[1], eV[2]], !!xV)), xx.current = VV, nV.gameBridge.send("sendCodeCollab", {
                bV: GY.c.Join,
                EV: (0, GY.s)(VV)
              }), ex.current = !0
            } else JV && pV()
        })), (0, AV.g)("codeCollabRejoin", (VV => {
          const eV = xx.current ? (0, GY.s)(xx.current) : null;
          eV && VV.docKey === eV && (vV.current = VV.doc, ZV || Ze(VV.doc), ce((eV => eV ? {
            ...eV,
            doc: VV.doc,
            version: VV.version,
            clientID: (0, iY.c)()
          } : eV)))
        })), (0, AV.g)("codeCollab", (VV => {
          var eV;
          const xV = xx.current ? (0, GY.s)(xx.current) : null;
          if (VV.type === GY.d.LobbyFilesChanged && ZV) {
            if ("string" !== typeof VV.files) return void zx();
            try {
              Mx(JSON.parse(VV.files))
            } catch (nV) {
              console.error("[CodeCollab] Failed to parse lobby files", nV), zx()
            }
            return
          }
          if (VV.type === GY.d.EngineSettings && ZV) return void ie(nU(VV.engineSettings));
          const YV = VV.type === GY.d.Joined ? (0, GY.g)(VV.docKey) : null,
            UV = ZV && "lobby" === (null === (eV = xx.current) || void 0 === eV ? void 0 : eV.kind) && (0, WY.i)(xx.current.path) && "lobby" === (null === YV || void 0 === YV ? void 0 : YV.kind) && (0, WY.i)(YV.path);
          if (!xV || VV.docKey === xV || UV)
            if (VV.type !== GY.d.ForceClose) {
              if (JV)
                if (VV.type === GY.d.Joined) {
                  var yV;
                  const wV = JSON.parse(VV.peers),
                    rV = VV.existingCursors ? JSON.parse(VV.existingCursors) : [],
                    EV = (0, iY.c)(),
                    BV = JU(),
                    {
                      gsUrl: jV,
                      gameNameWithVariation: qV,
                      lobbyName: FV
                    } = BV,
                    TV = null !== (yV = (0, GY.g)(VV.docKey)) && void 0 !== yV ? yV : xx.current;
                  TV && (xx.current = TV, "lobby" === TV.kind && (Se(TV.path), Jx.current = TV.path));
                  const PV = TV || (ZV ? {
                    kind: "lobby",
                    path: Jx.current
                  } : {
                    kind: "codeBlock",
                    pos: bV
                  });

                  function AV(eV) {
                    var xV, JV;
                    if (!ex.current) return;
                    const YV = null !== (xV = eV.code) && void 0 !== xV ? xV : "",
                      UV = null !== (JV = eV.collabVersion) && void 0 !== JV ? JV : 0;
                    vV.current = YV, ZV || Ze(YV), ZV && eV.files ? Le(eV.files) : ZV && Le((VV => ({
                      ...VV,
                      [Jx.current]: YV
                    })));
                    const yV = {
                      doc: YV,
                      version: UV,
                      clientID: EV,
                      docKey: PV,
                      peers: wV,
                      editorCount: VV.editorCount,
                      existingCursors: rV,
                      httpConfig: BV
                    };
                    if (ce(yV), "lobby" === PV.kind) {
                      var pV;
                      const VV = {
                        doc: YV,
                        version: UV,
                        clientID: EV,
                        docKey: PV,
                        httpConfig: BV
                      };
                      for (const eV of [...kx.current]) eV(VV);
                      null === (pV = bx.current) || void 0 === pV || pV.startWhenReady()
                    }
                    eV.canSeeCode ? (clearTimeout(ze.current), tV({
                      message: null,
                      type: null
                    })) : function(VV) {
                      clearTimeout(ze.current), tV(VV)
                    }(yy);
                    const QV = uV.current;
                    uV.current = null, ZV && QV && eV.files && QV in eV.files && QV !== Jx.current && Nx(QV)
                  }
                  ZV ? Jy(Jx.current).then(AV).catch((VV => {
                    console.error("[CodeCollab] Failed to fetch lobby code via HTTP", VV), tx()
                  })) : (0, MY.postJsonWithMetricsCookiesAndJsonResponse)(`${jV}/code/get-code-block`, XY.Qj["get-code-block"].toBuffer({
                    gameNameWithVariation: qV,
                    lobbyName: FV,
                    pos: bV
                  }), {
                    retries: 1
                  }).then(AV).catch((VV => {
                    console.error("[CodeCollab] Failed to fetch code block via HTTP", VV), tx()
                  }))
                } else if (VV.type === GY.d.Presence) {
                if (!xV) return;
                const NV = JSON.parse(VV.peers);
                ce((eV => eV ? {
                  ...eV,
                  peers: NV,
                  editorCount: VV.editorCount
                } : eV))
              }
            } else {
              var QV;
              if (!xV) return;
              JV && ZV && "keptOpen" === VV.updates && kV.h.QZ("CodeEditorKeepEdits");
              const XV = xx.current;
              ex.current = !1, xx.current = null, ce(null);
              if (!ZV || "close" === VV.updates) return (0, SU.g)(), void(JV && pV());
              if (!JV) return;
              const MV = Qx.current,
                zV = wx.current;
              wx.current = null;
              const GV = "lobby" === (null === XV || void 0 === XV ? void 0 : XV.kind) && XV.path === (null === zV || void 0 === zV ? void 0 : zV.fromPath),
                WV = zV && (GV || zV.toPath in MV || (0, WY.i)(zV.toPath)) ? zV.toPath : Jx.current in MV ? Jx.current : null !== (QV = (0, WY.d)(MV)) && void 0 !== QV ? QV : zY.h;
              Fx(WV)
            }
        })), (0, AV.g)("refetchCode", (() => {
          RV.featureFlags.canSeePlayerWrittenText && JV && ex.current && (Be || (tx(), ZV ? kV.h.QZ("EditLobbyCode", bV) : kV.h.QZ("EditCodeBlock", {
            pos: bV,
            canChangePos: jV.current
          })))
        }));
        const ix = (0, YV.useCallback)((() => {
            JV && (aV(!1), window.open("/docs", "_blank", "popup=yes,width=1200,height=800"))
          }), [JV]),
          Cx = (0, YV.useCallback)((() => {
            aV(!1)
          }), []);
        (0, YV.useEffect)((() => {
          JV && Be && ("docsButton" === Te && CV ? (0, BU.f)("docsButton") : Te && BU.g.includes(Te) && !CV && (aV(!0), ee(!1)))
        }), [JV, Be, Te, CV, ee]);
        const ax = (0, YV.useCallback)((() => {
          ee(!1)
        }), [ee]);
        (0, YV.useEffect)((() => {
          JV && Be && Ee && ("aiHelperButton" === Ne && Ve ? (0, BU.f)("aiHelperButton") : Ne && BU.e.includes(Ne) && !Ve && (ee(!0), aV(!1)))
        }), [JV, Be, Ee, Ne, Ve, ee]), (0, YV.useEffect)((() => {
          if (!JV || !Be) return;
          const VV = ZV ? "worldCode" : "codeBlock";
          return (0, BU.C)(VV, !0), () => {
            (0, BU.C)(VV, !1)
          }
        }), [JV, Be, ZV]), (0, YV.useEffect)((() => {
          if (JV) return () => {
            Xe.current ? Xe.current = !1 : (0, BU.y)()
          }
        }), [JV]), (0, YV.useEffect)((() => {
          (0, BU.E)("exportButton", !!je)
        }), [je]);
        const {
          t: ox
        } = (0, sV.A)(), cx = !Ve && ye > Qe, hx = cx ? rV.E : rV.w, lx = (0, YV.useCallback)(((VV, eV) => {
          kV.h.QZ("CodeEditorGoToLine", {
            path: VV,
            line: eV
          }), Nx(VV)
        }), [Nx]), Lx = (0, YV.useCallback)((VV => {
          Bx.current = VV
        }), []), fx = function(VV, eV) {
          const [xV, JV] = (0, YV.useState)(null);
          return (0, YV.useEffect)((() => {
            if (!eV) return void JV(null);
            let xV = !1;
            return uY(VV).then((VV => {
              xV || JV(VV)
            }), (VV => {
              console.error("[CodeEditor] could not collect the imported plugins", VV), xV || JV(null)
            })), () => {
              xV = !0
            }
          }), [VV, eV]), xV
        }(he, JV);
        (0, YV.useEffect)((() => {
          fx && Ie && !fx.includes(Ie) && (de(null), Vx(null), ZV && !ex.current && Fx(Jx.current))
        }), [Ie, fx, ZV, Fx]), Ex.current = {
          collabState: oe,
          ensureJoinedPath: Tx,
          waitForLobbyPath: Px,
          pullLobbyFiles: zx,
          t: ox,
          canEditCode: !!Be
        }, bx.current || (bx.current = new eU({
          getLobbyFiles: () => ({
            ...Qx.current,
            ...(0, oY.o)(He.current.assets)
          }),
          deleteSchematic: async VV => {
            const eV = await YU({
              action: "remove",
              path: VV,
              expectedRevision: He.current.revision
            });
            ue(eV)
          },
          getActivePath: () => Jx.current,
          getCollabSnapshot: () => {
            var VV;
            if (Yx.current) return null;
            const eV = null === (VV = Ex.current) || void 0 === VV ? void 0 : VV.collabState;
            return eV ? {
              doc: eV.doc,
              version: eV.version,
              clientID: eV.clientID,
              docKey: eV.docKey,
              httpConfig: eV.httpConfig
            } : null
          },
          replaceActiveDoc: (VV, eV) => {
            var xV, JV;
            return null !== (xV = null === (JV = Bx.current) || void 0 === JV ? void 0 : JV.call(Bx, VV, eV)) && void 0 !== xV && xV
          },
          ensureJoined: VV => Ex.current.ensureJoinedPath(VV),
          createFile: (VV, eV) => {
            !1 !== (null === eV || void 0 === eV ? void 0 : eV.focus) && (nx.current = VV), nV.gameBridge.send("sendCodeCollab", {
              bV: GY.c.CreateFile,
              EV: (0, GY.s)({
                kind: "lobby",
                path: Jx.current
              }),
              Un: VV
            })
          },
          renameFile: (VV, eV) => {
            const xV = (0, GY.s)({
              kind: "lobby",
              path: Jx.current
            });
            Jx.current === VV && (wx.current = {
              fromPath: VV,
              toPath: eV
            }, Se(eV)), nV.gameBridge.send("sendCodeCollab", {
              bV: GY.c.RenameFile,
              EV: xV,
              Un: VV,
              yn: eV
            })
          },
          deleteFile: VV => {
            Ax(VV)
          },
          waitForLobbyPath: (VV, eV, xV) => Ex.current.waitForLobbyPath(VV, eV, xV),
          pullLobbyFiles: () => Ex.current.pullLobbyFiles(),
          setMessage: (VV, eV) => {
            jx({
              message: VV,
              type: eV
            })
          },
          onUnlinked: () => {
            vx(!1)
          },
          t: VV => Ex.current.t(VV),
          canEditCode: () => Ex.current.canEditCode,
          getStorageKey: () => {
            const {
              gameNameWithVariation: VV,
              lobbyName: eV
            } = nV.gameBridge.latest("connectedGame");
            return (0, sY.e)(VV, eV)
          }
        }));
        const mx = (0, YV.useCallback)((async VV => {
            const eV = bx.current;
            if (!eV) return !1;
            try {
              return await eV.writeLobbyFiles(VV)
            } catch (xV) {
              return console.error("World Code AI: couldn't write the change", xV), !1
            }
          }), []),
          Kx = (0, YV.useCallback)((async VV => {
            var eV, xV;
            const JV = null === (eV = VV.find((VV => VV.path === sU.b))) || void 0 === eV ? void 0 : eV.text,
              YV = xx.current;
            return void 0 !== JV && "codeBlock" === (null === YV || void 0 === YV ? void 0 : YV.kind) && (!(null === (xV = Bx.current) || void 0 === xV || !xV.call(Bx, (0, GY.s)(YV), JV)) && (vV.current = JV, Ze(JV), !0))
          }), []),
          Hx = (0, YV.useCallback)((async () => {
            try {
              var VV, eV;
              const xV = await Jy(zY.h);
              return !1 === xV.canSeeCode ? null : null !== (VV = xV.files) && void 0 !== VV ? VV : {
                [zY.h]: null !== (eV = xV.code) && void 0 !== eV ? eV : ""
              }
            } catch (xV) {
              return console.error("World Code AI: couldn't read World Code for a code block", xV), null
            }
          }), []),
          ux = (0, YV.useMemo)((() => ({
            [sU.b]: we
          })), [we]),
          sx = (0, YV.useCallback)(((VV, eV) => {
            kV.h.QZ("CodeEditorGoToLine", {
              path: sU.b,
              line: eV
            })
          }), []);
        (0, YV.useEffect)((() => {
          Ve && JV && ne(ye)
        }), [Ve, JV, ye]);
        const Sx = (0, YV.useCallback)((() => {
            var VV, eV;
            Wx();
            const xV = (0, RV.isTouchscreen)() ? "open World Code again" : `press ${null!==(VV=null===(eV=fe.t.OpenCodeEditor)||void 0===eV?void 0:eV[0])&&void 0!==VV?VV:"F8"}`,
              JV = ZV ? `\ud83e\udd16 Try out your change, then ${xV} to tell the AI Helper how it went.` : "\ud83e\udd16 Click the code block to try your change, then open it again to tell the AI Helper how it went.";
            kV.h.QZ("chat", {
              content: [{
                str: JV,
                style: {
                  color: NV.E.cyanUiText
                }
              }]
            })
          }), [Wx, ZV]),
          Ix = (0, YV.useCallback)((VV => {
            const eV = bV,
              xV = jV.current;
            ZV || !eV || nV.gameBridge.lookup("codeBlockClickable", eV) ? (0, SU.h)(VV, {
              submit: () => {
                Wx(), kV.h.QZ("chat", {
                  content: [{
                    str: "\ud83e\udd16 Testing your change. The AI Helper comes back in a moment.",
                    style: {
                      color: NV.E.cyanUiText
                    }
                  }]
                }), !ZV && eV && setTimeout((() => {
                  nV.gameBridge.send("clickCodeBlock", eV)
                }), 1e3)
              },
              reopen: () => {
                (0, hV.n)() || (ZV ? kV.h.QZ("EditLobbyCode", eV) : kV.h.QZ("EditCodeBlock", {
                  pos: eV,
                  canChangePos: xV
                }))
              }
            }) : Sx()
          }), [Wx, ZV, bV, Sx]),
          dx = (0, YV.useCallback)((() => {
            ee(!1)
          }), [ee]),
          Ox = (0, YV.useRef)(Gx);
        Ox.current = Gx;
        const VJ = (0, YV.useCallback)((function(VV) {
            let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            kV.h.QZ("WorldCodeAiDraft", {
              text: VV,
              send: eV
            }), Ox.current(), kV.h.QZ("EditLobbyCode", bV)
          }), [bV]),
          eJ = (0, YV.useCallback)((VV => {
            Ox.current(), VV.codeBlock ? kV.h.QZ("EditCodeBlock", {
              pos: [...VV.pos],
              canChangePos: VV.canChangePos
            }) : kV.h.QZ("EditLobbyCode", bV)
          }), [bV]);
        (0, AV.g)("WorldCodeAiDraft", (VV => {
          ZV && (Je(VV), ee(!0))
        }));
        const xJ = !!Be && !!Te && BU.g.includes(Te),
          JJ = !!Be && !!Ne && BU.e.includes(Ne);
        (0, YV.useEffect)((() => {
          JV && Ve && Ee && !xJ && aV(!1)
        }), [JV, Ve, Ee, xJ]);
        const YJ = (0, YV.useCallback)((() => {
            ee(!1), aV(!1)
          }), [ee]),
          {
            cZ: UJ,
            setWorld: yJ,
            toggleWorld: pJ
          } = function(VV) {
            let {
              showAi: eV,
              showDocs: xV,
              showChat: JV,
              hideOtherRightPanels: UV
            } = VV;
            const [yV, pV] = (0, YV.useState)("hidden"), QV = (0, YV.useRef)(null), nV = (0, YV.useCallback)((() => {
              QV.current = null, pV((VV => "hidden" === VV ? VV : (0, AU.f)() ? "hidden" : "shown"))
            }), []);
            (0, YV.useEffect)((() => {
              (eV || xV) && nV()
            }), [eV, xV, nV]), (0, YV.useEffect)((() => {
              JV && nV()
            }), [JV, nV]);
            const wV = "hidden" !== yV && (0, AU.f)();
            (0, YV.useLayoutEffect)((() => {
              if (wV) {
                const VV = document.activeElement;
                VV instanceof HTMLElement && VV.closest(".cm-content") && (QV.current = VV, VV.blur())
              } else {
                var VV;
                null === (VV = QV.current) || void 0 === VV || VV.focus(), QV.current = null
              }
            }), [wV]);
            const ZV = (0, YV.useCallback)((() => {
              "hidden" === yV ? (pV("shown"), (0, AU.f)() && UV()) : pV("hidden")
            }), [yV, UV]);
            return {
              cZ: yV,
              setWorld: pV,
              toggleWorld: ZV
            }
          }({
            showAi: Ve,
            showDocs: CV,
            showChat: oV,
            hideOtherRightPanels: YJ
          }),
          QJ = Ve && null !== ke && Ee,
          nJ = (0, YV.useCallback)((() => {
            Je(null)
          }), []),
          [wJ, ZJ] = (0, YV.useState)(null);
        (0, AV.g)("WorldCodeAiSelection", (VV => {
          JV && (ZJ(VV), ee(!0), aV(!1))
        }));
        const vJ = (0, YV.useCallback)((() => {
          ZJ(null)
        }), []);
        (0, AV.g)("chat", (VV => {
          let {
            content: eV
          } = VV;
          if (!ZV && null === re.current) return;
          const xV = Array.isArray(eV) ? eV : [eV],
            JV = xV.some((VV => {
              var eV;
              return (null === VV || void 0 === VV || null === (eV = VV.style) || void 0 === eV ? void 0 : eV.color) === NV.E.redUiText
            })),
            YV = xV.map((VV => {
              var eV;
              const xV = null !== (eV = null === VV || void 0 === VV ? void 0 : VV.str) && void 0 !== eV ? eV : VV;
              return "string" === typeof xV ? xV : ""
            })).join("");
          JV && /world code|error/i.test(YV) && (Ue((VV => [...VV, YV].slice(-10))), pe((VV => VV + 1)), (0, SU.f)(YV))
        })), (0, YV.useEffect)((() => {
          if (!JV || !ZV || !rx) return;
          let VV = !1;
          return (async (eV, xV) => {
            const JV = await (null === (eV = bx.current) || void 0 === eV ? void 0 : eV.tryRestoreHandle());
            !VV && JV && (vx(!0), null === (xV = bx.current) || void 0 === xV || xV.startWhenReady())
          })(), () => {
            VV = !0
          }
        }), [JV, ZV, rx]), (0, YV.useEffect)((() => {
          var VV;
          JV || (null === (VV = bx.current) || void 0 === VV || VV.stopContinuousSync(), tx(!1), Me.current && (Me.current = !1, nV.gameBridge.send("sendChatMessage", {
            yZ: "//export",
            channelName: null
          })))
        }), [JV, tx]);
        const rJ = (0, YV.useCallback)((async () => {
            if (rx && bx.current) try {
              if (!await bx.current.linkFolder()) return;
              vx(!0), await bx.current.startWhenReady()
            } catch (VV) {
              console.error("[WorldCodeDirectorySync] Link failed", VV), jx({
                message: ox("codeEditor:directorySyncError"),
                type: "warning"
              })
            }
          }), [rx, ox]),
          kJ = (0, YV.useCallback)((async () => {
            bx.current && await bx.current.unlinkFolder()
          }), []),
          bJ = (0, YV.useCallback)((() => {
            rx ? Zx ? kJ() : rJ() : JY.NotificationProvider.showAlertPopup({
              title: "codeEditor:directorySyncUnsupported",
              subtitle: "codeEditor:directorySyncUnsupportedBody",
              confirmText: "general:ok"
            })
          }), [rx, Zx, rJ, kJ]),
          EJ = ZV && "hidden" !== UJ;
        return (0, wV.jsxs)(yV.e, {
          className: qx()("CodeEditorBg", {
            CodeEditorLight: WV,
            WorldShown: "hidden" !== UJ,
            WorldTouchControl: "touchControls" === dV
          }),
          close: Gx,
          escDoesExit: !0,
          show: JV,
          togglePointerLock: !1,
          globallyUniqueKey: ZV ? "LobbyCodeEditor" : "CodeBlockEditor",
          children: [(0, wV.jsx)(EU.e, {
            tutorial: "welcome",
            step: "codeBlockIntro",
            text: ox("codeEditor:tutorialCodeBlockIntro"),
            enabled: !!Be && !ZV
          }), (0, wV.jsx)(EU.e, {
            tutorial: "welcome",
            step: "worldCodeIntro",
            text: (0, wV.jsxs)(wV.Fragment, {
              children: [(0, wV.jsx)("p", {
                children: ox("codeEditor:tutorialWorldCodeWelcome")
              }), (0, wV.jsxs)("ul", {
                className: "TutorialStepList",
                children: [(0, wV.jsx)("li", {
                  children: ox("codeEditor:tutorialWorldCodeUseSetUp")
                }), (0, wV.jsx)("li", {
                  children: ox("codeEditor:tutorialWorldCodeUseReact")
                }), (0, wV.jsx)("li", {
                  children: ox("codeEditor:tutorialWorldCodeUseRun")
                })]
              })]
            }),
            enabled: !!Be && ZV
          }), (0, wV.jsx)("div", {
            className: "CodeEditorTitle",
            children: ZV ? "World Code" : "Code Block"
          }), (0, wV.jsxs)("div", {
            className: "CodeEditorTopBar",
            children: [(0, wV.jsxs)("div", {
              className: "CodeEditorTopLeft",
              children: [(0, wV.jsx)(HV.d, {
                tooltipInner: ox(je ? "codeEditor:exportTooltip" : "codeEditor:exportOwnerOnly"),
                delayShow: je ? void 0 : 0,
                hideTooltip: "exportButton" === qe,
                children: (0, wV.jsx)(EU.l, {
                  tutorial: "welcome",
                  step: "exportButton",
                  text: ox("codeEditor:tutorialExport"),
                  enabled: !!Be,
                  children: (0, wV.jsx)(rV.m, {
                    className: "CodeEditorButton",
                    disabled: !je,
                    onClick: () => {
                      "exportButton" === qe && ((0, BU.f)("exportButton"), Xe.current = !0), Me.current = !0, Gx()
                    },
                    padDestructive: !0,
                    children: ox("codeEditor:exportWorld")
                  })
                })
              }), (0, wV.jsx)(HU, {
                cZ: UJ,
                setWorld: yJ,
                toggleWorld: pJ,
                aiShown: QJ,
                closeAi: dx
              })]
            }), (0, wV.jsxs)("div", {
              className: "CodeEditorTopRight",
              children: [Be && (0, wV.jsx)(HV.d, {
                tooltipInner: ox("codeEditor:helpTooltip"),
                hideTooltip: "helpButton" === qe,
                children: (0, wV.jsx)(EU.l, {
                  tutorial: "welcome",
                  step: "helpButton",
                  text: ox("codeEditor:tutorialHelpButton"),
                  placement: "bottom",
                  children: (0, wV.jsx)(rV.f, {
                    className: "CodeEditorHelpButton",
                    ariaLabel: ox("codeEditor:helpTooltip"),
                    onClick: () => {
                      (0, BU.f)("helpButton"), JY.NotificationProvider.showCustomPopup({
                        body: VV => (0, wV.jsx)(jU, {
                          close: VV
                        }),
                        unlockPointerKey: "codeEditorTutorials"
                      })
                    },
                    children: (0, wV.jsx)("div", {
                      className: "CodeEditorHelpButtonInner",
                      children: (0, wV.jsx)(EV.b, {
                        name: "circle-question"
                      })
                    })
                  })
                })
              }), (0, wV.jsx)(HV.d, {
                tooltipInner: ox("codeEditor:closeTooltip"),
                children: (0, wV.jsx)("div", {
                  className: "CodeEditorCloseButtonClickZone",
                  onClick: () => {
                    Gx()
                  },
                  children: (0, wV.jsx)(rV.k, {
                    className: "CodeEditorCloseButton"
                  })
                })
              })]
            })]
          }), (0, wV.jsx)(DY, {
            peers: null !== (eV = null === oe || void 0 === oe ? void 0 : oe.peers) && void 0 !== eV ? eV : []
          }), (0, wV.jsxs)("div", {
            className: qx()("CodeEditorMainArea", {
              WorldCovers: "always" === NU(UJ),
              WorldCoversWhenNarrow: "narrow" === NU(UJ)
            }),
            children: [oV && mV && (0, wV.jsx)(AU.d, {
              side: "left",
              defaultSize: "max(16rem, 24%)",
              onClose: () => {
                lV(!1)
              },
              children: (0, wV.jsx)(PU, {
                inputRef: LV
              })
            }), ZV && (0, wV.jsx)(lY, {
              schematics: me.assets,
              onManageSchematic: VV => {
                Be && JY.NotificationProvider.showCustomPopup({
                  body: eV => (0, wV.jsx)(QU, {
                    initialPath: VV,
                    onChanged: ue,
                    onClose: eV
                  }),
                  unlockPointerKey: "worldCodeSchematics"
                })
              },
              files: he,
              activePath: se,
              canEdit: !!Be,
              directoryLinked: Zx,
              pluginNames: null !== fx && void 0 !== fx ? fx : Uy,
              activePluginName: Ie,
              activePluginFile: Oe,
              onSelect: Nx,
              onSelectPlugin: Xx,
              onToggleDirectorySync: bJ,
              onCreate: VV => {
                nx.current = VV, nV.gameBridge.send("sendCodeCollab", {
                  bV: GY.c.CreateFile,
                  EV: (0, GY.s)({
                    kind: "lobby",
                    path: Jx.current
                  }),
                  Un: VV
                })
              },
              onRename: (VV, eV) => {
                Jx.current === VV && (wx.current = {
                  fromPath: VV,
                  toPath: eV
                }, Se(eV)), nV.gameBridge.send("sendCodeCollab", {
                  bV: GY.c.RenameFile,
                  EV: (0, GY.s)({
                    kind: "lobby",
                    path: Jx.current
                  }),
                  Un: VV,
                  yn: eV
                })
              },
              onRenameFolder: (VV, eV) => {
                const [xV] = (0, WY.n)([Jx.current], VV, eV);
                xV && (wx.current = {
                  fromPath: xV[0],
                  toPath: xV[1]
                }, Se(xV[1])), nV.gameBridge.send("sendCodeCollab", {
                  bV: GY.c.RenameFolder,
                  EV: (0, GY.s)({
                    kind: "lobby",
                    path: Jx.current
                  }),
                  Un: VV,
                  yn: eV
                })
              },
              onDelete: Ax
            }), (0, wV.jsx)("div", {
              className: qx()("CodeEditorMessage", {
                CodeEditorMessageHidden: !PV.message,
                CodeEditorMessageSuccess: "success" === PV.type
              }),
              children: PV.message && (0, wV.jsx)("div", {
                className: "CodeEditorMessageText",
                children: PV.message
              })
            }), (0, wV.jsx)(YV.Suspense, {
              fallback: (0, wV.jsx)("div", {
                className: "CodeEditorContent",
                children: (0, wV.jsx)(MV.d, {})
              }),
              children: (0, wV.jsx)(dU, {
                isLobbyCode: ZV,
                code: oe ? oe.doc : vV.current,
                files: ZV ? he : void 0,
                activePath: ZV ? se : void 0,
                pluginName: Ie,
                pluginFile: Oe,
                pluginSource: Ie && Oe ? null === (xV = CY.e[Ie]) || void 0 === xV ? void 0 : xV.files[Oe] : void 0,
                onChange: Dx,
                canEditCode: Be,
                setTemporaryMessage: jx,
                close: Gx,
                showTooltips: zV,
                lightMode: WV,
                collabState: oe,
                setActiveDocReplacer: Lx,
                showAiHints: Ee && DV,
                canAiChangeCode: !!Be && (ZV || !!jV.current),
                onRemoteDocChange: VV => {
                  var eV;
                  (vV.current = VV, ZV) ? (Le((eV => ({
                    ...eV,
                    [Jx.current]: VV
                  }))), null === (eV = bx.current) || void 0 === eV || eV.onDocTextChanged(Jx.current, VV)) : Ze(VV)
                }
              })
            }), (CV || QJ || "hidden" !== UJ) && (0, wV.jsxs)(XU, {
              cZ: UJ,
              worldPanel: (0, wV.jsx)(mU, {
                shown: UJ,
                setShown: yJ,
                canInsertCode: !!Be && !Ie
              }),
              closeWorld: () => {
                yJ("hidden")
              },
              aiShown: QJ,
              defaultWidth: CV ? "40%" : "max(18rem, 36%)",
              children: [CV && (0, wV.jsx)(AU.d, {
                onClose: xJ ? void 0 : Cx,
                children: (0, wV.jsx)(YV.Suspense, {
                  fallback: (0, wV.jsx)("div", {
                    className: "DocsPanel",
                    children: (0, wV.jsx)(MV.d, {})
                  }),
                  children: (0, wV.jsx)(OU, {
                    popOutDocs: ix,
                    hideDocs: Cx,
                    tutorialEnabled: !!Be
                  })
                })
              }), QJ && (0, wV.jsx)(AU.d, {
                onClose: JJ ? void 0 : dx,
                children: (0, wV.jsx)(YV.Suspense, {
                  fallback: (0, wV.jsx)("div", {
                    className: "CodeEditorPanelLoading",
                    children: (0, wV.jsx)(MV.d, {})
                  }),
                  children: (0, wV.jsx)(Vy, {
                    target: ke,
                    chatKey: `${Ce.gameNameWithVariation}/${Ce.lobbyName}/aiHelper`,
                    historyKey: `${Ce.gameNameWithVariation}/${Ce.lobbyName}/${ke.key}`,
                    files: ke.codeBlock ? ux : he,
                    activePath: ke.codeBlock ? sU.b : se,
                    canEdit: !!Be && (ke.codeBlock ? !!jV.current : !Ie),
                    isLoaded: null !== oe,
                    errors: Ye,
                    errorCount: ye,
                    applyFiles: ke.codeBlock ? Kx : mx,
                    submit: Sx,
                    testRun: Ix,
                    close: dx,
                    goToLine: ke.codeBlock ? sx : lx,
                    openWorldCode: ke.codeBlock ? VJ : void 0,
                    readWorldCode: ke.codeBlock ? Hx : void 0,
                    viewChunk: ey,
                    viewGameState: xy,
                    openTarget: Be ? eJ : void 0,
                    draft: xe,
                    onDraftUsed: nJ,
                    selection: wJ,
                    onSelectionUsed: vJ
                  }, ke.key)
                })
              })]
            })]
          }), (null === Ux || void 0 === Ux ? void 0 : Ux.fallback) && (0, wV.jsx)(wU, {
            fallback: Ux.fallback,
            onGoToLine: lx
          }), (0, wV.jsxs)("div", {
            className: "CodeEditorButtons",
            "data-pad-hint-bar-avoid": !0,
            children: [(0, wV.jsx)(HV.d, {
              tooltipInner: ox(WV ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
              placement: "top",
              children: (0, wV.jsx)(rV.f, {
                className: "CodeEditorButton CodeEditorThemeButton",
                ariaLabel: ox(WV ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
                onClick: () => {
                  gV(!WV)
                },
                children: (0, wV.jsx)(EV.b, {
                  name: WV ? "moon" : "sun-bright"
                })
              })
            }), (0, wV.jsx)(HV.d, {
              tooltipInner: ox(EJ ? "codeEditorWorld:submitCodeTooltip" : "codeEditor:submitCodeTooltip"),
              placement: "top",
              children: (0, wV.jsx)(rV.m, {
                className: "CodeEditorButton",
                onClick: () => {
                  Wx(EJ)
                },
                padDefaultFocus: !0,
                children: ox("codeEditor:submitCode")
              })
            }), (0, wV.jsx)(HV.d, {
              tooltipInner: ox(CV ? "codeEditor:hideDocsTooltip" : "codeEditor:showDocsTooltip"),
              placement: "top",
              hideTooltip: "docsButton" === Te || "hideDocsButton" === Te,
              children: (0, wV.jsx)(EU.l, {
                tutorial: Fe,
                step: CV ? "hideDocsButton" : "docsButton",
                text: ox(CV ? "codeEditor:tutorialHideDocs" : "codeEditor:tutorialDocs"),
                enabled: !!Be,
                placement: "top",
                waitForClick: !0,
                onPrevious: CV && "welcome" === Fe ? Cx : void 0,
                children: (0, wV.jsx)(rV.w, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    (0, BU.f)(CV ? "hideDocsButton" : "docsButton"), aV(!CV), ee(!1)
                  },
                  children: ox(CV ? "codeEditor:hideDocs" : "codeEditor:showDocs")
                })
              })
            }), Ee && (0, wV.jsx)(EU.l, {
              tutorial: Ae,
              step: Ve ? "hideAiHelperButton" : "aiHelperButton",
              text: ox(Ve ? "codeEditorAiTutorial:hideAiHelperButton" : "welcome" === Ae ? "codeEditorAiTutorial:welcomeAiHelperButton" : "codeEditorAiTutorial:aiHelperButton"),
              enabled: !!Be,
              placement: "top",
              waitForClick: !0,
              onPrevious: Ve && "welcome" === Ae ? ax : void 0,
              children: (0, wV.jsx)(hx, {
                className: "CodeEditorButton",
                onClick: () => {
                  (0, BU.f)(Ve ? "hideAiHelperButton" : "aiHelperButton"), ee(!Ve), aV(!1)
                },
                children: Ve ? "Hide AI Helper" : cx ? "Fix error with AI" : "AI Helper"
              })
            }), mV && (0, wV.jsx)(HV.d, {
              tooltipInner: ox(oV ? "codeEditorChat:hideChatTooltip" : "codeEditorChat:showChatTooltip"),
              placement: "top",
              children: (0, wV.jsx)(rV.w, {
                className: "CodeEditorButton",
                onClick: () => {
                  fV.current = !oV, lV(!oV)
                },
                children: ox(oV ? "codeEditorChat:hideChat" : "codeEditorChat:showChat")
              })
            }), (0, wV.jsx)(HV.d, {
              tooltipInner: ox("hidden" === UJ ? "codeEditorWorld:showWorldTooltip" : "codeEditorWorld:hideWorldTooltip"),
              placement: "top",
              children: (0, wV.jsx)(rV.w, {
                className: "CodeEditorButton CodeEditorWorldButton",
                onClick: pJ,
                children: ox("hidden" === UJ ? "codeEditorWorld:showWorld" : "codeEditorWorld:hideWorld")
              })
            }), (0, wV.jsx)(HV.d, {
              tooltipInner: ox("codeEditor:formatCodeTooltip"),
              placement: "top",
              children: (0, wV.jsx)(rV.f, {
                className: "CodeEditorButton",
                onClick: () => {
                  kV.h.QZ("FormatCode")
                },
                children: ox("codeEditor:formatCode")
              })
            }), (0, wV.jsx)(HV.d, {
              tooltipInner: ox("codeEditor:copyCodeTooltip"),
              placement: "top",
              children: (0, wV.jsx)(rV.f, {
                className: "CodeEditorButton",
                onClick: () => {
                  navigator.clipboard.writeText(vV.current).then((() => {
                    jx({
                      message: "Successfully copied code to clipboard",
                      type: "success"
                    })
                  })).catch((() => {
                    jx({
                      message: "Failed to copy code to clipboard",
                      type: "warning"
                    })
                  }))
                },
                children: ox("codeEditor:copyCode")
              })
            }), (0, wV.jsx)(HV.d, {
              tooltipInner: ox(zV ? "codeEditor:hideTooltipsTooltip" : "codeEditor:showTooltipsTooltip"),
              placement: "top",
              children: (0, wV.jsx)(rV.f, {
                className: "CodeEditorButton",
                onClick: () => {
                  GV(!zV)
                },
                children: ox(zV ? "codeEditor:hideTooltips" : "codeEditor:showTooltips")
              })
            }), !ZV && (0, wV.jsx)(HV.d, {
              tooltipInner: ox("codeEditor:worldCodeTooltip"),
              placement: "top",
              hideTooltip: "worldCodeButton" === qe,
              children: (0, wV.jsx)(EU.l, {
                tutorial: "welcome",
                step: "worldCodeButton",
                text: ox("codeEditor:tutorialWorldCodeButton"),
                enabled: !!Be,
                placement: "top",
                waitForClick: !0,
                children: (0, wV.jsx)(rV.w, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    "worldCodeButton" === qe && ((0, BU.f)("worldCodeButton"), Xe.current = !0), Gx(), kV.h.QZ("EditLobbyCode", bV)
                  },
                  children: ox("codeEditor:worldCode")
                })
              })
            }), (ae || yx || Ee) && (0, wV.jsx)(HV.d, {
              tooltipInner: ox("codeEditor:moreOptionsTooltip"),
              placement: "top",
              children: (0, wV.jsx)(rV.f, {
                className: "CodeEditorButton CodeEditorMoreButton",
                onClick: () => {
                  ge(!0)
                },
                children: (0, wV.jsx)(EV.b, {
                  name: "ellipsis"
                })
              })
            })]
          }), Re && (0, wV.jsx)(UY.b, {
            middleScreenPopupContainerClassName: "CodeEditorMoreOptionsPopup",
            close: () => {
              ge(!1)
            },
            body: (0, wV.jsx)(bU, {
              engine: yx,
              onSetEngine: gx,
              aiHints: Ee ? {
                shown: DV,
                setShown: iV
              } : null,
              variation: ae ? {
                name: Ge,
                setName: We,
                reload: Rx
              } : null
            })
          })]
        })
      }));
    var Qy = xV(37762);
    const ny = new Set(["inventory", "ironChestPasskeyInput"]);
    const wy = new Set(["makeReport", "makeDiscordReport", "inviteLink"]);

    function Zy(VV) {
      return "inventory" === VV
    }
    const vy = (0, YV.memo)((function() {
      const {
        openEverythingMenuName: VV,
        openInGameMenuName: eV
      } = (0, cV.l)(["openEverythingMenuName", "openInGameMenuName"]), xV = (0, XV.h)("fullInventory"), UV = (0, YV.useRef)(null), yV = (0, Ge.h)();
      (0, AV.g)("toggleMenu", (VV => {
        var eV;
        if (!yV.shown) return;
        const xV = cV.b.get("openInGameMenuName");
        let JV = VV.split("|")[0];
        const YV = null !== (eV = VV.split("|")[1]) && void 0 !== eV ? eV : null;
        if (("closeCurrentMenu" === YV && xV || JV === xV) && (UV.current = null, JV = null), null !== JV && (pV = !nV.gameBridge.latest("localPlayerAlive"), QV = JV, pV && ny.has(QV))) return void(null !== nV.gameBridge.latest("inventory").chest && nV.gameBridge.send("closeChest", null));
        var pV, QV;
        const wV = "closeCurrentMenu" === YV ? null : YV;
        UV.current !== wV && (UV.current = wV), null !== JV && (0, bY.p)(bY.d, {
          keepsMovement: Zy(JV)
        }), cV.b.set({
          openInGameMenuName: JV
        })
      })), (0, XV.c)("localPlayerAliveSet", (VV => {
        VV || function() {
          (0, Qy.h)();
          const VV = cV.b.get("openInGameMenuName");
          null !== VV && ny.has(VV) && cV.b.set({
            openInGameMenuName: null
          })
        }()
      }));
      const pV = (0, YV.useCallback)((VV => () => {
          kV.h.QZ("toggleMenu", VV)
        }), []),
        QV = (0, YV.useRef)({
          cantCrouchIfNotFullscreen: pV("cantCrouchIfNotFullscreen"),
          makeReport: pV("makeReport"),
          makeDiscordReport: pV("makeDiscordReport"),
          editBook: pV("editBook"),
          editNameTag: pV("editNameTag"),
          inventory: pV("inventory"),
          inviteLink: pV("inviteLink"),
          writeOnBoard: pV("writeOnBoard"),
          codeEditor: pV("codeEditor"),
          lobbyCodeEditor: pV("lobbyCodeEditor"),
          customLobbyBlockEditor: pV("customLobbyBlockEditor"),
          ironChestPasskeyInput: pV("ironChestPasskeyInput"),
          petUi: pV("petUi")
        }),
        ZV = (0, YV.useCallback)((() => {
          cV.b.set({
            openInGameMenuName: null
          })
        }), []),
        vV = (0, YV.useRef)(null);
      return (0, YV.useEffect)((() => {
        if (eV) {
          var VV;
          (0, bY.p)(bY.d, {
            keepsMovement: Zy(eV)
          }), vV.current = wy.has(eV) ? null !== (VV = cV.b.get("openEverythingMenuName")) && void 0 !== VV ? VV : vV.current : null, cV.b.set({
            openEverythingMenuName: null
          })
        } else {
          const VV = vV.current;
          vV.current = null, null !== VV && null === cV.b.get("openEverythingMenuName") && cV.b.set({
            openEverythingMenuName: VV
          }), UV.current = null, (0, bY.m)(bY.d)
        }
      }), [eV]), (0, YV.useEffect)((() => {
        null !== VV && ZV()
      }), [VV, ZV]), (0, wV.jsxs)(wV.Fragment, {
        children: [(0, wV.jsx)(JV.f, {
          show: "clientGame" === eV
        }), (0, wV.jsx)(VY, {
          show: "cantCrouchIfNotFullscreen" === eV,
          onOpen: QV.current.cantCrouchIfNotFullscreen,
          onClose: ZV
        }), (0, wV.jsx)(wY, {
          show: "makeReport" === eV,
          onOpen: QV.current.makeReport,
          onClose: ZV
        }), (0, wV.jsx)(kY, {
          show: "makeDiscordReport" === eV,
          onOpen: QV.current.makeDiscordReport,
          onClose: ZV
        }), (0, wV.jsx)(ex, {
          show: "editBook" === eV,
          onOpen: QV.current.editBook,
          onClose: ZV
        }), (0, wV.jsx)(Oe, {
          show: "editNameTag" === eV,
          onOpen: QV.current.editNameTag,
          onClose: ZV
        }), xV && (0, wV.jsx)(IJ, {
          show: "inventory" === eV,
          onOpen: QV.current.inventory,
          onClose: ZV,
          variation: UV.current
        }), (0, wV.jsx)(We, {
          show: "inviteLink" === eV,
          onClose: ZV,
          option: UV.current
        }), (0, wV.jsx)(iV, {
          show: "retentionFeatures" === eV,
          onClose: ZV
        }), (0, wV.jsx)(de, {
          show: "writeOnBoard" === eV,
          onOpen: QV.current.writeOnBoard,
          onClose: ZV
        }), (0, wV.jsx)(py, {
          show: "lobbyCodeEditor" === eV,
          onOpen: QV.current.lobbyCodeEditor,
          onClose: ZV,
          isLobbyCode: !0
        }), (0, wV.jsx)(py, {
          show: "codeEditor" === eV,
          onOpen: QV.current.codeEditor,
          onClose: ZV,
          isLobbyCode: !1
        }), (0, wV.jsx)(BY, {
          show: "customLobbyBlockEditor" === eV,
          onOpen: QV.current.customLobbyBlockEditor,
          onClose: ZV
        }), (0, wV.jsx)(Fx, {
          show: "ironChestPasskeyInput" === eV,
          onOpen: QV.current.ironChestPasskeyInput,
          onClose: ZV
        }), (0, wV.jsx)(PY, {
          togglePointerLock: !0,
          show: "petUi" === eV,
          onOpen: QV.current.petUi,
          onClose: ZV
        })]
      })
    }))
  },
  37644: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => Ly
    });
    xV(37649);
    var JV = xV(1913),
      YV = xV(62),
      UV = xV(1146),
      yV = xV.n(UV),
      pV = xV(4139),
      QV = xV(1542),
      nV = xV(2021),
      wV = xV(1321);

    function ZV() {
      const VV = 2e3,
        [eV, xV] = (0, YV.useState)(null),
        [JV, UV] = (0, YV.useState)(null),
        ZV = (0, YV.useRef)(null);
      (0, QV.g)("showBottomMessage", (eV => {
        let {
          message: xV,
          timeoutLength: JV = VV,
          type: YV
        } = eV;
        UV({
          message: xV,
          type: YV
        }), clearTimeout(ZV.current), ZV.current = setTimeout((() => {
          UV(null)
        }), JV)
      })), (0, QV.g)("showPermanentBottomMessage", (VV => {
        xV(VV)
      })), (0, YV.useEffect)((() => ((0, pV.c)((() => {
        xV(null)
      })), () => {
        clearTimeout(ZV.current)
      })), []);
      const vV = JV || eV;
      return vV ? (0, wV.jsx)("div", {
        className: yV()("BottomScreenMessage", vV.type),
        children: (0, wV.jsx)(nV.b, {
          text: vV.message
        })
      }) : null
    }
    var vV = xV(2514),
      rV = xV(32),
      kV = xV(2051),
      bV = xV(1612),
      EV = xV(2695);

    function BV() {
      let VV;
      const eV = () => {
          clearTimeout(VV), VV = setTimeout((() => {
            kV.gameBridge.latest("connectedGame").replay || (rV.h.QZ("kickedForAfk"), kV.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, bV.navigatePreserveSearch)("/"))
          }), 3e5)
        },
        xV = () => {
          clearTimeout(VV)
        };
      return window.addEventListener("focus", xV), window.addEventListener("blur", eV), () => {
        window.removeEventListener("blur", eV), window.removeEventListener("focus", xV), clearTimeout(VV)
      }
    }
    var jV = xV(1168),
      qV = xV(37651),
      tV = xV(2693),
      FV = xV(1446),
      TV = xV(3528),
      PV = xV(1414);
    const AV = (0, YV.memo)((function() {
      return (0, TV.e)(), (0, wV.jsx)(NV, {})
    }));
    class NV extends YV.Component {
      constructor(VV) {
        super(VV), this.showQueue = [], this.slideDuration = 1, this.state = {
          showQueue: [],
          currState: null
        }, this.currMessage = null, this.justShowed = !1
      }
      componentDidMount() {
        this.sub = rV.h.subscribe("TopRightHelper", (VV => {
          this.showQueue.push(VV), this.setState({
            showQueue: this.showQueue
          })
        }))
      }
      componentWillUnmount() {
        rV.h.unsubscribe(this.sub), clearTimeout(this.slideOutTimeout), clearTimeout(this.hidingMessageTimeout)
      }
      componentDidUpdate(VV, eV) {
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
        let VV, eV, xV, JV, YV, UV = !0;
        if (this.state.showQueue.length > 0 && null === this.state.currState ? (this.currMessage = this.state.showQueue[0], this.justShowed = !0, VV = "slideIn") : "slideOut" === this.state.currState ? VV = "slideOut" : null === this.currMessage && (UV = !1), this.currMessage) {
          const UV = this.currMessage.color || "rgb(102, 102, 102)";
          eV = {
            width: this.currMessage.width || "250px",
            height: this.currMessage.height || "70px",
            animation: "1s " + ("slideOut" === VV ? "HelperSlideKeyFrameReverse" : "HelperSlideKeyFrame")
          }, xV = {
            backgroundColor: UV
          }, JV = {
            animation: "2s " + ("slideOut" === VV ? "CloseNotification" : "ExpandNotification")
          }, YV = {
            fontSize: this.currMessage.fontSize || "16px",
            animation: "2s " + ("slideOut" === VV ? "textDisappear" : "textAppear")
          }
        }
        return UV ? (0, wV.jsxs)("div", {
          className: "TopRightHelperBox",
          style: {
            ...eV
          },
          children: [(0, wV.jsx)("div", {
            className: "LeftSide",
            style: xV,
            children: (0, wV.jsx)(PV.b, {
              name: this.currMessage.icon,
              className: `fa-${this.currMessage.iconSizeMult||3}x HelperIcon`
            })
          }), (0, wV.jsx)("div", {
            className: "RightSide",
            style: JV,
            children: (0, wV.jsx)("div", {
              className: "HelperText",
              style: YV,
              children: this.currMessage.text
            })
          })]
        }) : null
      }
    }
    var XV = xV(37657),
      MV = xV(1493);
    const zV = (0, MV.i)((VV => VV.PadSneakChip));

    function GV(VV) {
      const [eV, xV, JV] = function(VV) {
        const eV = parseInt(VV.substring(1), 16),
          xV = (eV >> 16) / 255,
          JV = (eV >> 8 & 255) / 255,
          YV = (255 & eV) / 255,
          UV = Math.max(xV, JV, YV),
          yV = Math.min(xV, JV, YV),
          pV = (UV + yV) / 2,
          QV = UV - yV;
        if (0 === QV) return [0, 0, pV];
        const nV = QV / (1 - Math.abs(2 * pV - 1));
        let wV;
        wV = UV === xV ? (JV - YV) / QV % 6 : UV === JV ? (YV - xV) / QV + 2 : (xV - JV) / QV + 4;
        return [(60 * wV + 360) % 360, nV, pV]
      }(VV), YV = 0 === xV ? 0 : Math.min(.6, xV + .03), UV = JV > .5 ? -1 : 1, yV = WV(JV + .09 * UV);
      return {
        panel: VV,
        slot: RV(eV, YV, yV),
        slotSelected: RV(eV, YV, WV(yV + .2 * UV)),
        slotUnavailable: RV(eV, YV, WV(JV + -.1 * UV))
      }
    }

    function WV(VV) {
      return Math.min(1, Math.max(0, VV))
    }

    function RV(VV, eV, xV) {
      const JV = (1 - Math.abs(2 * xV - 1)) * eV,
        YV = JV * (1 - Math.abs(VV / 60 % 2 - 1)),
        UV = xV - JV / 2;
      let yV;
      return yV = VV < 60 ? [JV, YV, 0] : VV < 120 ? [YV, JV, 0] : VV < 180 ? [0, JV, YV] : VV < 240 ? [0, YV, JV] : VV < 300 ? [YV, 0, JV] : [JV, 0, YV], "#" + yV.map((VV => function(VV) {
        return Math.round(255 * VV).toString(16).padStart(2, "0")
      }(VV + UV))).join("")
    }
    var gV = xV(37677),
      DV = xV(27),
      iV = xV(2100),
      CV = xV(4674),
      aV = xV(1473),
      oV = xV(2660),
      cV = xV(2663),
      hV = xV(37740),
      lV = xV(5319),
      LV = xV(1569),
      fV = xV(1220),
      mV = xV(657);

    function KV(VV, eV, xV, JV) {
      VV.style.display = "";
      const YV = VV.offsetWidth,
        UV = VV.offsetHeight,
        yV = Math.min(Math.max((eV.left + eV.right) / 2 - YV / 2, 8), window.innerWidth - 8 - YV);
      let pV = eV.top - xV - UV;
      const QV = [...JV].sort(((VV, eV) => eV.top - VV.top));
      for (const nV of QV) yV < nV.right && yV + YV > nV.left && pV < nV.bottom && pV + UV > nV.top && (pV = nV.top - 8 - UV);
      return pV < 8 ? (VV.style.display = "none", null) : (VV.style.transform = `translate(${yV-eV.left}px, ${pV-eV.top}px)`, {
        left: yV,
        top: pV,
        right: yV + YV,
        bottom: pV + UV
      })
    }

    function HV(VV) {
      const eV = [];
      for (const xV of document.querySelectorAll(VV)) {
        const VV = xV.getBoundingClientRect();
        VV.width > 0 && "visible" === getComputedStyle(xV).visibility && eV.push(VV)
      }
      return eV
    }

    function uV(VV, eV) {
      return VV.clientX >= eV.left - 8 && VV.clientX <= eV.right + 8 && VV.clientY >= eV.top - 8 && VV.clientY <= eV.bottom + 8
    }
    var sV = xV(9477);
    class SV {
      constructor(VV) {
        this.deps = VV, this.phase = "idle", this.armTimer = null, this.suspended = !1
      }
      get locked() {
        return "locked" === this.phase
      }
      get offered() {
        return "armed" === this.phase || "ready" === this.phase
      }
      target(VV) {
        VV && "armed" === this.phase ? this.setPhase("ready") : VV || "ready" !== this.phase || this.setPhase("armed")
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
      hold(VV, eV) {
        this.suspended || (this.offered ? eV || this.setPhase("idle") : VV && "idle" === this.phase ? (this.setPhase("charging"), this.armTimer = setTimeout((() => {
          this.armTimer = null, this.onArm(), this.setPhase("armed")
        }), 1e3)) : VV || "charging" !== this.phase || this.setPhase("idle"))
      }
      onArm() {}
      setPhase(VV) {
        null !== this.armTimer && (clearTimeout(this.armTimer), this.armTimer = null);
        const eV = this.phase;
        this.phase = VV, this.deps.onPhase(VV, eV)
      }
    }
    const IV = 25 * Math.PI / 180,
      dV = 45 * Math.PI / 180;
    class OV extends SV {
      constructor() {
        super(...arguments), this.speed = 0, this.armedSpeed = 0
      }
      get lockedSpeed() {
        return this.armedSpeed
      }
      move(VV, eV, xV) {
        this.speed = xV;
        const JV = Math.hypot(VV, eV),
          YV = JV > 0 ? Math.acos(Math.min(1, -eV / JV)) : Math.PI;
        this.hold(JV >= .8 && YV <= IV, JV >= .5 && YV <= dV)
      }
      onArm() {
        this.armedSpeed = this.speed
      }
    }
    var Ve = xV(1332);

    function ee(VV, eV) {
      const xV = (0, YV.useRef)(null),
        JV = (0, YV.useRef)(eV);
      return JV.current = eV, (0, YV.useEffect)((() => {
        if (!VV) return;
        const {
          create: eV,
          elementRef: YV,
          ringRef: UV,
          classPrefix: yV,
          keptBehindMovementPanels: pV,
          resizeEnds: QV
        } = JV.current, nV = {
          charging: `${yV}Charging`,
          armed: `${yV}Armed`,
          ready: `${yV}Ready`,
          locked: `${yV}Locked`
        };
        let wV = null;
        const ZV = eV({
          onPhase: (VV, eV) => {
            const xV = YV.current;
            if (null !== xV) {
              for (const [eV, JV] of Object.entries(nV)) xV.classList.toggle(JV, eV === VV);
              if ("charging" === VV) wV = UV.current.animate([{
                strokeDashoffset: 1
              }, {
                strokeDashoffset: 0
              }], {
                delay: 400,
                duration: 600,
                fill: "forwards"
              });
              else if ("idle" === VV) {
                var yV;
                null === (yV = wV) || void 0 === yV || yV.cancel(), wV = null
              }
              var pV, QV;
              if ("armed" === VV && "charging" === eV && JV.current.onArmed(), "ready" === VV && sV.g.play("lockReady"), "locked" === VV) sV.g.play("lockLocked"), null === (pV = (QV = JV.current).onLocked) || void 0 === pV || pV.call(QV);
              "locked" === eV && JV.current.onUnlocked()
            }
          }
        });
        xV.current = ZV;
        const vV = () => {
            ZV.suspend()
          },
          rV = () => {
            "hidden" === document.visibilityState && vV()
          },
          kV = () => {
            QV ? ZV.suspend() : ZV.suspendArming()
          },
          bV = (0, Ve.i)((VV => {
            let {
              keepsMovement: eV
            } = VV;
            eV && pV ? ZV.suspendArming() : vV()
          }));
        return document.addEventListener("visibilitychange", rV), window.addEventListener("blur", vV), window.addEventListener("resize", kV), () => {
          bV(), document.removeEventListener("visibilitychange", rV), window.removeEventListener("blur", vV), window.removeEventListener("resize", kV), ZV.cancel(), xV.current = null
        }
      }), [VV]), (0, iV.c)("localPlayerAliveSet", (() => {
        var VV;
        null === (VV = xV.current) || void 0 === VV || VV.suspend()
      })), xV
    }
    const xe = "data-joystick-tap";

    function Je(VV) {
      var eV, xV;
      const JV = null === (eV = (xV = VV).closest) || void 0 === eV ? void 0 : eV.call(xV, `[${xe}]`);
      return JV instanceof HTMLElement ? JV : null
    }
    class Ye {
      constructor() {
        this.tap = null
      }
      get touchId() {
        var VV, eV;
        return null !== (VV = null === (eV = this.tap) || void 0 === eV ? void 0 : eV.id) && void 0 !== VV ? VV : null
      }
      land(VV, eV) {
        null === this.tap && (this.tap = {
          key: VV,
          id: eV.identifier,
          x: eV.clientX,
          y: eV.clientY
        }, (0, LV.j)(VV, !0))
      }
      slidFrom(VV) {
        const eV = this.tap,
          xV = eV ? VV.find((VV => VV.identifier === eV.id)) : void 0;
        return !xV || Math.hypot(xV.clientX - eV.x, xV.clientY - eV.y) <= 12 ? null : (this.end(!1), {
          identifier: eV.id,
          clientX: eV.x,
          clientY: eV.y
        })
      }
      end(VV) {
        const eV = this.tap;
        eV && (this.tap = null, (0, LV.j)(eV.key, !1), VV && eV.key.click())
      }
    }
    var Ue = xV(2729),
      ye = xV(2744),
      pe = xV(1157),
      Qe = xV(3848),
      ne = xV(2752);

    function we(VV, eV, xV) {
      const JV = function(VV, eV, xV) {
        const JV = xV.map((xV => ({
            left: Math.max(0, xV.left),
            top: Math.max(0, xV.top),
            right: Math.min(VV, xV.right),
            bottom: Math.min(eV, xV.bottom)
          }))).filter((VV => VV.right > VV.left && VV.bottom > VV.top)),
          YV = [...new Set([0, eV, ...JV.flatMap((VV => [VV.top, VV.bottom]))])].sort(((VV, eV) => VV - eV)),
          UV = [];
        for (let yV = 0; yV < YV.length - 1; yV++) {
          const eV = YV[yV],
            xV = YV[yV + 1],
            pV = JV.filter((VV => VV.top <= eV && VV.bottom >= xV)).map((VV => [VV.left, VV.right])).sort(((VV, eV) => VV[0] - eV[0]));
          let QV = 0;
          for (const [VV, JV] of pV) VV > QV && UV.push({
            left: QV,
            top: eV,
            right: VV,
            bottom: xV
          }), QV = Math.max(QV, JV);
          QV < VV && UV.push({
            left: QV,
            top: eV,
            right: VV,
            bottom: xV
          })
        }
        return UV
      }(VV, eV, xV);
      if (0 === JV.length) return 'path("M0 0Z")';
      if (1 === JV.length && 0 === JV[0].left && 0 === JV[0].top && JV[0].right === VV && JV[0].bottom === eV) return "";
      const YV = VV => Math.round(10 * VV) / 10;
      return `path("${JV.map((VV=>`M${YV(VV.left)} ${YV(VV.top)}H${YV(VV.right)}V${YV(VV.bottom)}H${YV(VV.left)}Z`)).join("")}")`
    }

    function Ze(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16;
      const YV = [],
        UV = 2 * xV / JV;
      for (let yV = 0; yV < JV; yV++) {
        const JV = eV - xV + yV * UV,
          pV = JV + UV,
          QV = Math.min(Math.max(eV, JV), pV) - eV,
          nV = Math.sqrt(Math.max(0, xV * xV - QV * QV));
        YV.push({
          left: VV - nV,
          top: JV,
          right: VV + nV,
          bottom: pV
        })
      }
      return YV
    }
    var ve = xV(9500),
      re = xV(37720);

    function ke(VV) {
      const eV = VV.getBoundingClientRect(),
        xV = {
          left: eV.left,
          top: eV.top,
          right: eV.right,
          bottom: eV.bottom
        },
        JV = (0, hV.f)(VV);
      if (JV.whole) return [xV];
      const YV = function(VV) {
          const eV = VV.right - VV.left,
            xV = VV.bottom - VV.top,
            JV = Math.min(eV, xV) / 2,
            YV = (VV.left + VV.right) / 2,
            UV = (VV.top + VV.bottom) / 2;
          return eV >= xV ? [{
            left: VV.left + JV,
            top: VV.top,
            right: VV.right - JV,
            bottom: VV.bottom
          }, ...Ze(VV.left + JV, UV, JV), ...Ze(VV.right - JV, UV, JV)] : [{
            left: VV.left,
            top: VV.top + JV,
            right: VV.right,
            bottom: VV.bottom - JV
          }, ...Ze(YV, VV.top + JV, JV), ...Ze(YV, VV.bottom - JV, JV)]
        }(xV),
        UV = JV.keyBox;
      if (UV) {
        const VV = (xV.left + xV.right) / 2,
          eV = (xV.top + xV.bottom) / 2;
        YV.push({
          left: VV - UV.width / 2,
          top: eV - UV.height / 2,
          right: VV + UV.width / 2,
          bottom: eV + UV.height / 2
        })
      }
      return YV
    }

    function be(VV) {
      const eV = VV.getBoundingClientRect();
      return 0 === eV.width && 0 === eV.height || "visible" !== getComputedStyle(VV).visibility ? [] : [(0, ve.t)(eV, 44)]
    }

    function Ee(VV, eV) {
      (0, YV.useEffect)((() => {
        const xV = VV.current;
        if (!eV || !xV) return;
        const JV = () => {
          const VV = Array.from(document.querySelectorAll(".TouchComponentsButtons .TouchKeyHit, .TouchInteractHit")),
            eV = VV.find((VV => VV.classList.contains("TouchInteractHit")));
          eV !== YV && (YV && UV.unobserve(YV), YV = eV, eV && UV.observe(eV));
          const JV = Array.from(document.querySelectorAll(ne.d)),
            yV = [...VV.flatMap((VV => ke(VV))), ...JV.flatMap(be)],
            pV = function(VV, eV) {
              const xV = eV.map((eV => ({
                left: eV.left - VV.left,
                top: eV.top - VV.top,
                right: eV.right - VV.left,
                bottom: eV.bottom - VV.top
              })));
              return we(Math.ceil(VV.width), Math.ceil(VV.height), xV)
            }(xV.getBoundingClientRect(), yV);
          xV.style.clipPath !== pV && (xV.style.clipPath = pV)
        };
        let YV;
        const UV = new ResizeObserver((() => {
          JV()
        }));
        JV(), UV.observe(xV);
        const yV = xV.closest(".InGameUi"),
          pV = new MutationObserver(JV);
        yV && pV.observe(yV, {
          attributes: !0,
          attributeFilter: ["class", re.h]
        });
        const QV = [(0, rV.i)(Qe.b, JV), (0, rV.i)(ne.p, JV), (0, rV.i)(ne.e, JV)];
        return () => {
          UV.disconnect(), pV.disconnect();
          for (const VV of QV) VV();
          xV.style.clipPath = ""
        }
      }), [VV, eV])
    }
    var Be = xV(4874);

    function je(VV) {
      var eV;
      let {
        onMove: xV,
        mode: JV,
        speedCurve: UV,
        autorun: yV = !1,
        keys: pV
      } = VV;
      const QV = (0, YV.useRef)(null),
        nV = (0, YV.useRef)(null),
        ZV = (0, YV.useRef)(null),
        vV = (0, YV.useRef)(null),
        rV = (0, YV.useRef)(null),
        bV = (0, YV.useRef)(null),
        EV = (0, YV.useRef)(new Ye).current,
        BV = (0, YV.useRef)(null),
        jV = (0, YV.useRef)(null),
        qV = (0, YV.useRef)(null),
        tV = (0, YV.useRef)(!1),
        FV = (0, YV.useRef)({
          clientX: 0,
          clientY: 0
        }),
        {
          t: TV
        } = (0, fV.A)(),
        AV = (0, Be.n)(JV),
        NV = (0, DV.l)(["notchSize"]).notchSize,
        XV = NV.left,
        MV = (0, YV.useRef)(16),
        zV = (0, ye.e)(),
        [GV, WV, RV] = "pinned" === JV ? Ue.q : null !== (eV = zV.hudElements.joystick) && void 0 !== eV ? eV : Ue.q,
        gV = "pinned" === JV ? null : zV.hudSafe,
        iV = Math.max(Be.k, Be.l * RV);
      Ee(nV, "pinned" !== JV);
      const CV = function(VV, eV, xV, JV, UV) {
        const yV = (0, YV.useRef)(null),
          pV = () => {
            clearInterval(yV.current), yV.current = null
          },
          QV = ee(VV, {
            create: VV => new OV(VV),
            elementRef: eV,
            ringRef: xV,
            classPrefix: "Autorun",
            keptBehindMovementPanels: !0,
            resizeEnds: !0,
            onArmed: UV,
            onLocked: () => {
              yV.current = setInterval((() => {
                kV.gameBridge.lookup("dropAhead", null) && (sV.g.play("autorunLedgeStop"), QV.current.cancel())
              }), 100)
            },
            onUnlocked: () => {
              pV(), JV()
            }
          });
        return (0, YV.useEffect)((() => pV), []), QV
      }(yV, ZV, BV, (() => {
        SV(), LV()
      }), (() => {
        aV(), null === qV.current && CV.current.suspend()
      }));

      function aV() {
        const VV = ZV.current.getBoundingClientRect();
        qV.current = KV(jV.current, VV, 80, HV(`.TouchInventoryKey, .TouchSprintKey, ${ne.d}`)), tV.current = null !== qV.current && uV(FV.current, qV.current)
      }

      function oV() {
        const {
          innerWidth: VV,
          innerHeight: eV
        } = window, xV = (0, ne.F)(gV, VV, eV, (0, ne.M)(NV, VV, eV), MV.current);
        return {
          left: xV[3],
          bottom: xV[2]
        }
      }

      function cV(VV) {
        ZV.current.style.transform = `translate(${VV.x-iV}px, ${VV.y-iV}px)`
      }

      function hV(VV) {
        const eV = ZV.current;
        eV.classList.add("Resting"), eV.classList.toggle("Returning", VV), eV.style.display = "fixed_hidden" === JV ? "none" : "block", cV(function() {
          const {
            innerWidth: VV,
            innerHeight: eV
          } = window, xV = oV(), JV = XV * VV / 100 + xV.left, YV = QV.current.offsetHeight || eV, UV = ((0, pe.d)(VV, eV) ? Be.f : Be.e) + xV.bottom;
          return {
            x: Math.min(VV - iV, Math.max(iV, JV + Be.j + GV * VV)),
            y: Math.min(YV - iV, Math.max(iV, YV - UV + WV * YV))
          }
        }())
      }
      const lV = (0, YV.useRef)({
        restFixed: hV,
        release: IV
      });

      function LV() {
        AV ? hV("fixed_shown" === JV) : "floating" === JV && (ZV.current.style.display = "none"), xV({
          x: 0,
          y: 0
        })
      }

      function SV() {
        bV.current = null, rV.current = null, vV.current.style.transform = "translate(-50%, -50%)"
      }

      function IV(VV) {
        SV();
        const eV = CV.current;
        VV && null !== eV && void 0 !== eV && eV.lift() ? xV({
          x: 0,
          y: -eV.lockedSpeed
        }) : (null === eV || void 0 === eV || eV.cancel(), LV())
      }

      function dV(VV) {
        var eV;
        if (null === (eV = CV.current) || void 0 === eV || eV.startTouch(), "pinned" === JV) {
          const VV = ZV.current.getBoundingClientRect();
          rV.current = {
            x: VV.left + VV.width / 2,
            y: VV.top + VV.height / 2
          }
        } else {
          rV.current = {
            x: VV.clientX,
            y: VV.clientY
          }, ZV.current.classList.remove("Resting", "Returning"), ZV.current.style.display = "block";
          const eV = QV.current.getBoundingClientRect();
          cV({
            x: VV.clientX - eV.left,
            y: VV.clientY - eV.top
          }), yV && (FV.current = {
            clientX: VV.clientX,
            clientY: VV.clientY
          }, aV())
        }
      }

      function xe(VV) {
        const eV = EV.slidFrom(Array.from(VV.touches));
        eV && null === bV.current && (bV.current = eV.identifier, dV(eV));
        const JV = Array.from(VV.touches).find((VV => VV.identifier === bV.current));
        if (null === rV.current || null === bV.current || (0, mV.J)(JV)) return;
        const YV = CV.current,
          yV = JV.clientX - rV.current.x,
          pV = JV.clientY - rV.current.y,
          QV = Math.hypot(yV, pV),
          nV = QV > 0 ? Math.min(1, iV / QV) : 0,
          wV = yV * nV,
          ZV = pV * nV,
          kV = Math.hypot(wV, ZV) / iV,
          BV = UV && kV > 0 ? UV(kV) / kV : 1;
        vV.current.style.transform = `translate(calc(-50% + ${wV}px), calc(-50% + ${ZV}px))`;
        const jV = wV / iV,
          TV = ZV / iV;
        if (xV({
            x: jV * BV,
            y: TV * BV
          }), null !== YV && null !== qV.current) {
          YV.move(jV, TV, kV * BV), FV.current = {
            clientX: JV.clientX,
            clientY: JV.clientY
          };
          const VV = tV.current;
          tV.current = uV(JV, qV.current), tV.current !== VV && YV.target(tV.current)
        }
      }
      return lV.current = {
        restFixed: hV,
        release: IV
      }, (0, YV.useLayoutEffect)((() => {
        if (!AV) return;
        const VV = () => {
          MV.current = (0, ne.U)(document)
        };
        VV(), null === bV.current && lV.current.restFixed(!1);
        const eV = new ResizeObserver((() => {
          VV(), null === bV.current && lV.current.restFixed(!1)
        }));
        eV.observe(QV.current);
        const xV = ZV.current;
        return () => {
          eV.disconnect(), xV.classList.remove("Resting", "Returning"), null === bV.current && (xV.style.display = "", xV.style.transform = "")
        }
      }), [AV, JV, NV, GV, WV, iV, gV]), (0, YV.useEffect)((() => {
        const VV = (VV, eV) => void 0 === eV || null === eV || Array.from(VV.touches).some((VV => VV.identifier === eV)) ? null : {
            lifted: "touchend" === VV.type && Array.from(VV.changedTouches).some((VV => VV.identifier === eV))
          },
          eV = eV => {
            const xV = VV(eV, bV.current);
            xV && lV.current.release(xV.lifted);
            const JV = VV(eV, EV.touchId);
            JV && EV.end(JV.lifted)
          },
          xV = () => {
            null !== bV.current && lV.current.release(!1), EV.end(!1)
          },
          JV = () => {
            "hidden" === document.visibilityState && xV()
          };
        document.addEventListener("touchstart", eV, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchmove", eV, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchend", eV, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchcancel", eV, {
          capture: !0,
          passive: !0
        }), window.addEventListener("blur", xV), document.addEventListener("visibilitychange", JV);
        const YV = (0, Ve.i)((VV => {
          let {
            keepsMovement: eV
          } = VV;
          eV || xV()
        }));
        return () => {
          YV(), document.removeEventListener("touchstart", eV, {
            capture: !0
          }), document.removeEventListener("touchmove", eV, {
            capture: !0
          }), document.removeEventListener("touchend", eV, {
            capture: !0
          }), document.removeEventListener("touchcancel", eV, {
            capture: !0
          }), window.removeEventListener("blur", xV), document.removeEventListener("visibilitychange", JV)
        }
      }), []), (0, YV.useEffect)((() => {
        const VV = QV.current,
          eV = VV => {
            VV.preventDefault()
          };
        return VV.addEventListener("touchstart", eV, {
          passive: !1
        }), () => {
          VV.removeEventListener("touchstart", eV)
        }
      }), []), (0, wV.jsxs)("div", {
        ref: QV,
        className: "JoystickZone",
        style: AV && (GV > 0 || RV > 1 || oV().left > 0) ? {
          width: `max(35vw, calc(${XV+100*GV}vw + ${oV().left+Be.j+iV+24}px))`
        } : void 0,
        onTouchStart: function(VV) {
          const eV = Array.from(VV.changedTouches).filter((VV => {
            var eV;
            return null === (eV = QV.current) || void 0 === eV ? void 0 : eV.contains(VV.target)
          }));
          for (const JV of eV) {
            const VV = Je(JV.target);
            VV && EV.land(VV, JV)
          }
          const xV = eV.find((VV => null === Je(VV.target)));
          xV && null === bV.current && (bV.current = xV.identifier, dV(xV), xe(VV))
        },
        onTouchMove: xe,
        children: [(0, wV.jsx)("div", {
          ref: nV,
          className: "JoystickTouchLayer"
        }), (0, wV.jsxs)("div", {
          ref: ZV,
          className: "Joystick",
          style: {
            width: 2 * iV + "px",
            height: 2 * iV + "px",
            transform: "pinned" === JV ? "translate(4vw, calc(50vh - 50%))" : void 0
          },
          children: [(0, wV.jsx)("div", {
            className: "JoystickBase",
            style: {
              width: 2 * iV + "px",
              height: 2 * iV + "px"
            }
          }), yV && (0, wV.jsxs)(wV.Fragment, {
            children: [(0, wV.jsx)("svg", {
              className: "AutorunRing",
              viewBox: "0 0 100 100",
              children: (0, wV.jsx)("circle", {
                ref: BV,
                cx: "50",
                cy: "50",
                r: "48",
                pathLength: 1
              })
            }), (0, wV.jsxs)("div", {
              ref: jV,
              className: "AutorunTarget",
              children: [(0, wV.jsx)(PV.b, {
                name: "lock"
              }), TV("settingsMenu:autoRun")]
            })]
          }), (0, wV.jsx)("div", {
            ref: vV,
            className: "JoystickKnob",
            style: {
              width: `${iV}px`,
              height: `${iV}px`
            }
          })]
        }), pV]
      })
    }
    var qe = xV(313);
    const te = {
        deadZone: .1,
        creepEnd: .35,
        fullSpeedAt: .85,
        creepMin: .06,
        creepMax: .22
      },
      Fe = {
        short_creep: {
          ...te,
          creepEnd: .25,
          fullSpeedAt: .75
        },
        long_creep: {
          ...te,
          creepEnd: .45,
          fullSpeedAt: .95
        },
        small_dead_zone: {
          ...te,
          deadZone: .05
        },
        control: te
      };

    function Te(VV) {
      return function(VV, eV) {
        const {
          deadZone: xV,
          creepEnd: JV,
          fullSpeedAt: YV,
          creepMin: UV,
          creepMax: yV
        } = VV;
        if (eV < xV) return 0;
        if (eV < JV) {
          const VV = (eV - xV) / (JV - xV);
          return UV + (yV - UV) * VV * VV
        }
        return eV < YV ? yV + (1 - yV) * (eV - JV) / (YV - JV) : 1
      }(Fe[qe.b.mobile_walk_curve_v1], VV)
    }

    function Pe(VV, eV) {
      const xV = (0, YV.useRef)(null);
      return (0, YV.useLayoutEffect)((() => (hV.j.set(VV, xV.current, eV), () => {
        hV.j.set(VV, null)
      })), [VV, eV]), xV
    }
    const Ae = "C",
      Ne = "J",
      Xe = "U",
      Me = "A",
      ze = "G",
      Ge = "X",
      We = (0, YV.forwardRef)((function(VV, eV) {
        let {
          slot: xV,
          canvasZone: JV = !1,
          lit: UV = !1,
          label: pV,
          className: QV,
          children: nV,
          ...ZV
        } = VV;
        return (0, YV.useEffect)((() => (rV.h.QZ(Qe.b), () => {
          rV.h.QZ(Qe.b)
        })), []), (0, wV.jsx)("div", {
          ref: eV,
          className: yV()("TouchKeyHit", `TouchSlot${xV}`, QV, {
            CanvasZone: JV
          }),
          ...ZV,
          children: (0, wV.jsxs)("div", {
            className: yV()("TouchKey", {
              Lit: UV,
              Labelled: void 0 !== pV
            }),
            children: [nV, void 0 !== pV && (0, wV.jsx)("span", {
              className: "TouchKeyLabel",
              children: pV
            })]
          })
        })
      }));

    function Re(VV, eV) {
      (0, YV.useEffect)((() => () => {
        eV.current && (eV.current = !1, (0, cV.B)(VV, !1, {
          isTrusted: !0,
          timeStamp: performance.now()
        }))
      }), [])
    }
    var ge = xV(37731);
    class De extends SV {
      constructor() {
        super(...arguments), this.start = {
          x: 0,
          y: 0
        }, this.moved = !1
      }
      press(VV, eV) {
        this.start = {
          x: VV,
          y: eV
        }, this.moved = !1, this.startTouch(), this.hold(!0, !1)
      }
      move(VV, eV, xV) {
        const JV = Math.hypot(VV - this.start.x, eV - this.start.y) <= 12;
        this.moved ||= !JV;
        const YV = null !== xV && eV < this.start.y - 12 && uV({
          clientX: VV,
          clientY: eV
        }, xV);
        this.hold(!this.moved, JV || YV)
      }
    }
    const ie = new Set;

    function Ce(VV) {
      const eV = new Set(Array.from(VV.touches, (VV => VV.identifier)));
      for (const xV of ie) {
        for (const VV of xV.ids) eV.has(VV) || xV.ids.delete(VV);
        if (0 === xV.ids.size) {
          ie.delete(xV);
          xV.pressesOnPointerDown && "touchstart" === VV.type && Array.from(VV.changedTouches).some((VV => VV.target instanceof Node && xV.element.contains(VV.target))) || xV.release()
        }
      }
    }
    if ("undefined" !== typeof window)
      for (const Oy of ["touchstart", "touchmove"]) window.addEventListener(Oy, Ce, {
        capture: !0,
        passive: !0
      });

    function ae(VV) {
      let {
        pressesOnPointerDown: eV = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const xV = (0, YV.useRef)(VV);
      xV.current = VV;
      const JV = (0, YV.useRef)({
        ids: new Set,
        element: null,
        pressesOnPointerDown: eV,
        release: () => {
          xV.current()
        }
      });
      (0, YV.useEffect)((() => {
        const VV = JV.current;
        return () => {
          ie.delete(VV), VV.ids.clear()
        }
      }), []);
      const UV = VV => {
        const eV = JV.current;
        for (const xV of Array.from(VV.changedTouches)) eV.ids.delete(xV.identifier);
        0 === eV.ids.size && ie.delete(eV)
      };
      return {
        onTouchStart: VV => {
          const eV = JV.current;
          eV.element = VV.currentTarget;
          for (const xV of Array.from(VV.changedTouches)) xV.target instanceof Node && VV.currentTarget.contains(xV.target) && eV.ids.add(xV.identifier);
          eV.ids.size > 0 && ie.add(eV)
        },
        onTouchEnd: UV,
        onTouchCancel: UV
      }
    }

    function oe(VV, eV) {
      return null === eV ? null : (0, ge.d)(VV.nativeEvent.changedTouches, eV.id)
    }

    function ce(VV) {
      let {
        lockable: eV
      } = VV;
      const {
        t: xV
      } = (0, fV.A)(), JV = "round" === (0, Ue.ib)().hudShape, UV = (0, YV.useRef)(!1);
      Re(oV.u.Jump, UV);
      const yV = (0, YV.useRef)(null),
        pV = (0, YV.useRef)(null),
        QV = (0, YV.useRef)(null),
        nV = (0, YV.useRef)(null),
        ZV = (0, YV.useRef)(null),
        vV = (0, YV.useRef)(null),
        rV = (0, YV.useRef)(!1),
        kV = (VV, eV) => {
          UV.current = VV, (0, cV.B)(oV.u.Jump, VV, eV)
        },
        bV = function() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            isTrusted: !0,
            timeStamp: performance.now()
          };
          UV.current && (yV.current && (0, LV.j)(yV.current, !1), kV(!1, VV))
        },
        EV = ee(eV, {
          create: VV => new De(VV),
          elementRef: yV,
          ringRef: pV,
          classPrefix: "JumpLock",
          keptBehindMovementPanels: !1,
          resizeEnds: !1,
          onArmed: () => {
            const VV = yV.current.getBoundingClientRect(),
              eV = QV.current.parentElement,
              xV = eV.getBoundingClientRect(),
              JV = {
                left: xV.left + eV.clientLeft,
                top: xV.top + eV.clientTop,
                right: xV.right - eV.clientLeft,
                bottom: xV.bottom - eV.clientTop
              };
            if (ZV.current = KV(QV.current, JV, 16, HV(`.TouchKeyHit:not(.JumpKey) > .TouchKey, .TouchInventoryKey, .TouchSprintKey, ${ne.d}`)), null === ZV.current) return void EV.current.suspend();
            const YV = ZV.current;
            vV.current = {
              left: Math.min(VV.left, YV.left),
              top: YV.top,
              right: Math.max(VV.right, YV.right),
              bottom: VV.bottom
            }, rV.current = null !== nV.current && uV({
              clientX: nV.current.x,
              clientY: nV.current.y
            }, YV)
          },
          onUnlocked: () => {
            null === nV.current && bV()
          }
        }),
        BV = VV => {
          var eV;
          nV.current = null, null === (eV = EV.current) || void 0 === eV || eV.cancel(), bV(VV)
        },
        jV = ae((() => {
          BV()
        })),
        qV = VV => {
          const eV = nV.current;
          var xV;
          return null === eV ? null !== (xV = EV.current) && void 0 !== xV && xV.locked ? null : "lifted" : oe(VV, eV) ? "lifted" : (0, ge.f)(VV.nativeEvent.touches, eV.id) ? null : "dropped"
        };
      return (0, wV.jsxs)(We, {
        ref: yV,
        slot: Ne,
        className: "JumpKey",
        onTouchStart: VV => {
          jV.onTouchStart(VV), (0, LV.j)(VV.currentTarget, !0), null === nV.current || (0, ge.f)(VV.nativeEvent.touches, nV.current.id) || BV();
          const eV = VV.changedTouches[0];
          var xV;
          null === nV.current && eV && (nV.current = {
            id: eV.identifier,
            x: eV.clientX,
            y: eV.clientY
          }, null === (xV = EV.current) || void 0 === xV || xV.press(eV.clientX, eV.clientY));
          UV.current || kV(!0, VV.nativeEvent)
        },
        onTouchMove: VV => {
          const eV = nV.current,
            xV = oe(VV, eV);
          if (!xV) return;
          const JV = EV.current;
          if (null === JV || void 0 === JV || JV.move(xV.clientX, xV.clientY, vV.current), null !== JV && void 0 !== JV && JV.offered) {
            const VV = uV(xV, ZV.current);
            VV !== rV.current && (rV.current = VV, JV.target(VV))
          }
          eV.x = xV.clientX, eV.y = xV.clientY
        },
        onTouchEnd: VV => {
          var eV;
          jV.onTouchEnd(VV);
          const xV = qV(VV);
          null !== xV && ("dropped" !== xV ? (nV.current = null, null !== (eV = EV.current) && void 0 !== eV && eV.lift() ? (0, LV.j)(VV.currentTarget, !1) : bV(VV.nativeEvent)) : BV(VV.nativeEvent))
        },
        onTouchCancel: VV => {
          jV.onTouchCancel(VV), null !== qV(VV) && BV(VV.nativeEvent)
        },
        children: [(0, wV.jsx)(PV.b, {
          name: "arrow-up-from-line"
        }), eV && (0, wV.jsxs)(wV.Fragment, {
          children: [(0, wV.jsx)("span", {
            className: "JumpLockBadge",
            children: (0, wV.jsx)(PV.b, {
              name: "lock"
            })
          }), (0, wV.jsx)("svg", {
            className: "JumpLockRing",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            children: (0, wV.jsx)("rect", {
              ref: pV,
              x: "2",
              y: "2",
              width: "96",
              height: "96",
              rx: JV ? 48 : 0,
              pathLength: 1
            })
          }), (0, wV.jsxs)("div", {
            ref: QV,
            className: "JumpLockTarget",
            children: [(0, wV.jsx)(PV.b, {
              name: "lock"
            }), xV("settingsMenu:jumpLock")]
          })]
        })]
      })
    }
    var he = xV(37749);

    function le(VV) {
      let {
        atHome: eV
      } = VV;
      const {
        t: xV
      } = (0, fV.A)(), JV = (UV = (0, tV.j)("runningSpeed"), pV = (0, tV.j)("walkingSpeed"), null !== UV && null !== pV && UV > pV);
      var UV, pV;
      const nV = (0, Ue.v)((0, ye.e)().hudElements, "sprint"),
        ZV = (0, QV.j)(he.d, (0, he.g)());
      return (0, YV.useEffect)((() => {
        JV && !nV || (0, he.k)(!0)
      }), [JV, nV]), (0, YV.useEffect)((() => () => {
        (0, he.k)(!0)
      }), []), JV ? (0, wV.jsx)("div", {
        className: yV()("TouchSprintHit", {
          AtHome: eV
        }),
        role: "switch",
        "aria-checked": ZV,
        "aria-label": xV("touchKeys:sprint"),
        [xe]: "",
        onClick: () => {
          (0, he.k)(!(0, he.g)())
        },
        children: (0, wV.jsx)("div", {
          className: yV()("TouchKey TouchSprintKey", {
            Lit: ZV
          }),
          children: (0, wV.jsx)(PV.b, {
            name: ZV ? "person-running" : "person-walking"
          })
        })
      }) : null
    }
    var Le = xV(9506),
      fe = xV(9503);

    function me(VV) {
      const eV = VV.getBoundingClientRect();
      return eV.width > 0 && eV.height > 0 ? (0, ve.h)(eV) : null
    }

    function Ke(VV) {
      const eV = VV.ownerDocument.documentElement.classList,
        xV = VV.classList.contains("ShopKey") ? "HudHide-shop" : VV.classList.contains("BagKey") ? "HudHide-bag" : null;
      return null !== xV && (eV.contains(xV) || eV.contains("HudHide-inventory")) ? null : me(VV)
    }

    function He(VV) {
      const eV = me(VV),
        xV = VV.firstElementChild;
      if (null === eV) return null;
      const {
        x: JV,
        y: YV
      } = (0, ve.d)(eV), UV = xV.offsetWidth / 2, yV = xV.offsetHeight / 2;
      return {
        left: JV - UV,
        top: YV - yV,
        right: JV + UV,
        bottom: YV + yV
      }
    }

    function ue(VV, eV) {
      const xV = VV.ownerDocument.createElement("div");
      xV.className = `TouchSlotProbe TouchSlot${eV}`, VV.append(xV);
      const JV = me(xV);
      return xV.remove(), JV
    }
    const se = `.TouchInventoryKey, .TouchSprintKey, ${ne.d}`;

    function Se(VV, eV) {
      const xV = eV.map((eV => ({
        slot: eV,
        face: ue(VV, eV)
      })));
      if (xV.every((VV => {
          let {
            face: eV
          } = VV;
          return null === eV
        }))) return null;
      return function(VV, eV) {
        const xV = [...eV],
          JV = [],
          YV = [];
        for (const {
            face: yV,
            slot: pV
          }
          of VV) null !== yV && (xV.some((VV => (0, ve.p)(yV, VV, fe.b))) ? YV.push(pV) : (JV.push(pV), xV.push(yV)));
        const UV = [...JV, ...YV];
        return VV.map((VV => {
          let {
            slot: eV,
            face: xV
          } = VV;
          return null === xV ? eV : UV.shift()
        }))
      }(xV, [...[...VV.querySelectorAll(":scope > .TouchKeyHit")].filter((VV => VV.classList.contains("BoostKey") || !eV.some((eV => VV.classList.contains(`TouchSlot${eV}`))))).map(He), ...[...VV.ownerDocument.querySelectorAll(se)].map(Ke)].filter((VV => null !== VV)))
    }
    const Ie = new WeakMap;
    class de {
      constructor(VV) {
        this.zones = VV, this.followed = new Map, this.onStart = VV => {
          if (this.releaseMissing(VV.touches), VV.target instanceof HTMLCanvasElement)
            for (let xV = 0; xV < VV.changedTouches.length; xV++) {
              var eV;
              const {
                identifier: JV,
                clientX: YV,
                clientY: UV
              } = VV.changedTouches[xV];
              this.release(JV);
              const yV = this.zones.hitZone(YV, UV);
              if (!yV) continue;
              const {
                key: pV
              } = yV;
              null === (eV = Ie.get(pV)) || void 0 === eV || eV.cancel();
              const QV = {
                hit: yV.element,
                key: pV,
                x: yV.x,
                y: yV.y,
                reach: .6 * yV.radius
              };
              this.followed.set(JV, QV), (0, LV.j)(yV.element, !0), Oe(QV, YV, UV)
            }
        }, this.onMove = VV => {
          this.releaseMissing(VV.touches);
          for (let eV = 0; eV < VV.changedTouches.length; eV++) {
            const {
              identifier: xV,
              clientX: JV,
              clientY: YV
            } = VV.changedTouches[eV], UV = this.followed.get(xV);
            UV && Oe(UV, JV, YV)
          }
        }, this.onEnd = VV => {
          for (let eV = 0; eV < VV.changedTouches.length; eV++) this.release(VV.changedTouches[eV].identifier)
        }, this.onVisibilityChange = () => {
          document.hidden && this.releaseAll()
        }
      }
      start() {
        const VV = {
          passive: !0
        };
        return document.addEventListener("touchstart", this.onStart, VV), document.addEventListener("touchmove", this.onMove, VV), document.addEventListener("touchend", this.onEnd, VV), document.addEventListener("touchcancel", this.onEnd, VV), document.addEventListener("visibilitychange", this.onVisibilityChange), () => {
          document.removeEventListener("touchstart", this.onStart), document.removeEventListener("touchmove", this.onMove), document.removeEventListener("touchend", this.onEnd), document.removeEventListener("touchcancel", this.onEnd), document.removeEventListener("visibilitychange", this.onVisibilityChange), this.releaseAll()
        }
      }
      releaseMissing(VV) {
        for (const eV of [...this.followed.keys()])(0, ge.f)(VV, eV) || this.release(eV)
      }
      releaseAll() {
        for (const VV of [...this.followed.keys()]) this.release(VV)
      }
      release(VV) {
        const eV = this.followed.get(VV);
        if (!eV) return;
        this.followed.delete(VV);
        for (const YV of this.followed.values())
          if (YV.key === eV.key) return;
        (0, LV.j)(eV.hit, !1);
        const {
          key: xV
        } = eV, JV = xV.style.translate;
        xV.style.translate = "", JV && Ie.set(xV, xV.animate({
          translate: [JV, "0 0"]
        }, {
          duration: 150,
          easing: "ease-out"
        }))
      }
    }

    function Oe(VV, eV, xV) {
      let {
        key: JV,
        x: YV,
        y: UV,
        reach: yV
      } = VV;
      const pV = eV - YV,
        QV = xV - UV,
        nV = Math.min(1, yV / (Math.hypot(pV, QV) || 1));
      JV.style.translate = `${pV*nV}px ${QV*nV}px`
    }
    var Vx = xV(1586),
      ex = xV(99),
      xx = xV(1439),
      Jx = xV(40);
    const Yx = "threeFingerHintShown",
      Ux = {
        android: "touchHint:threeFingerAndroid",
        ios: "touchHint:threeFingerIos"
      };
    let yx = 0,
      px = !1;

    function Qx() {
      const VV = new Set;
      let eV = -1 / 0,
        xV = -1 / 0,
        JV = null,
        YV = 0;
      const UV = () => {
          VV.clear()
        },
        yV = UV => {
          if (UV.touches.length > 0) return;
          for (let eV = 0; eV < UV.changedTouches.length; eV++) VV.add(UV.changedTouches[eV].identifier);
          const yV = VV.size;
          if (yV < 3 || !(0, Ve.r)()) return;
          if (YV = yV, null !== JV) return;
          const pV = performance.now(),
            QV = eV >= pV - 200;
          JV = setTimeout((() => {
            if (JV = null, !(0, Ve.r)()) return;
            const VV = xV >= pV - 200 || document.hidden;
            ! function(VV, eV) {
              var xV;
              const JV = (0, ex.getOperatingSystem)();
              yx < 5 && (yx++, (0, Vx.reportAnalyticsClick)({
                id: "touch.os_cancel",
                value: null === eV ? `${JV}:${VV}` : `${JV}:${VV}:${eV}`
              })), null === eV && (px || !0 === Jx.m.getItem(Yx) || (px = !0, Jx.m.setItem(Yx, !0), xx.NotificationProvider.showAlertPopup({
                title: "touchHint:threeFingerTitle",
                subtitle: null !== (xV = Ux[JV]) && void 0 !== xV ? xV : "touchHint:threeFingerOther",
                confirmText: "general:ok",
                disablePressBackgroundToClose: !0,
                unlockPointerKey: "threeFingerHint"
              })))
            }(YV, VV ? "hide" : QV ? "blur" : null)
          }), 500)
        },
        pV = () => {
          xV = performance.now()
        },
        QV = () => {
          eV = performance.now()
        },
        nV = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("touchstart", UV, nV), document.addEventListener("touchcancel", yV, nV), document.addEventListener("visibilitychange", pV), window.addEventListener("blur", QV), window.addEventListener("resize", pV), window.addEventListener("orientationchange", pV), () => {
        document.removeEventListener("touchstart", UV, nV), document.removeEventListener("touchcancel", yV, nV), document.removeEventListener("visibilitychange", pV), window.removeEventListener("blur", QV), window.removeEventListener("resize", pV), window.removeEventListener("orientationchange", pV), null !== JV && clearTimeout(JV)
      }
    }
    const nx = () => {
      const VV = (0, CV.n)(),
        eV = (0, aV.H)();
      return VV || eV
    };

    function wx(VV) {
      (0, hV.l)(VV.x, VV.y)
    }
    const Zx = (0, YV.memo)((function() {
        const VV = nx(),
          {
            joystickMode: eV,
            touchSpeedCurve: xV,
            autorun: JV
          } = (0, DV.l)(["clientEscMenuOptions"]).clientEscMenuOptions;
        return (0, YV.useEffect)((() => ((0, lV.h)(oV.y.TouchControls, oV.y.TouchControls), () => {
          (0, lV.h)(oV.y.TouchControls, 0), (0, hV.l)(0, 0)
        })), []), (0, YV.useEffect)(Qx, []), (0, wV.jsx)("div", {
          className: yV()("TouchMovementWrapper", {
            Hidden: VV
          }),
          "data-camera-keeper": "",
          children: (0, wV.jsx)(je, {
            onMove: wx,
            mode: eV,
            speedCurve: xV ? Te : void 0,
            autorun: JV,
            keys: (0, wV.jsx)(le, {
              atHome: !(0, Be.n)(eV)
            })
          })
        })
      })),
      vx = (0, YV.memo)((function() {
        const VV = nx(),
          {
            clientEscMenuOptions: eV
          } = (0, DV.l)(["clientEscMenuOptions"]),
          xV = eV.touchActionButtons;
        (0, YV.useEffect)((() => new de(hV.j).start()), []), (0, YV.useEffect)((() => {
          rV.h.QZ(Qe.b)
        }), [VV]);
        const JV = (0, YV.useRef)(null),
          UV = function(VV, eV) {
            const [xV, JV] = (0, YV.useState)((() => (0, Le.l)(VV)));
            return (0, YV.useLayoutEffect)((() => {
              var xV;
              const YV = eV.current;
              if (!YV) return;
              const UV = (0, Le.l)(VV),
                yV = () => {
                  const VV = Se(YV, UV);
                  JV((eV => {
                    const xV = null !== VV && void 0 !== VV ? VV : eV.length === UV.length ? eV : UV;
                    return xV.join() === eV.join() ? eV : xV
                  }))
                };
              yV(), window.addEventListener("resize", yV);
              const pV = "undefined" === typeof ResizeObserver ? null : new ResizeObserver(yV);
              null === pV || void 0 === pV || pV.observe(null !== (xV = YV.closest(".BottomRightElements")) && void 0 !== xV ? xV : YV);
              const QV = [(0, rV.i)(ne.e, yV), (0, rV.i)(Qe.b, yV), (0, rV.i)(ne.p, yV)];
              return () => {
                window.removeEventListener("resize", yV), null === pV || void 0 === pV || pV.disconnect();
                for (const VV of QV) VV()
              }
            }), [VV, eV]), xV.length === (0, Le.l)(VV).length ? xV : (0, Le.l)(VV)
          }(xV, JV);
        return (0, wV.jsxs)("div", {
          ref: JV,
          className: yV()("TouchComponentsButtons", {
            Hidden: VV
          }),
          "data-camera-keeper": "",
          children: [(0, wV.jsx)(ce, {
            lockable: eV.jumpLock && !VV
          }), (0, wV.jsx)(Ax, {
            hidden: VV,
            actionButtons: xV,
            contextSlots: UV
          }), (0, wV.jsx)(kx, {})]
        })
      }));

    function rx(VV) {
      const eV = eV => xV => {
        (0, LV.j)(xV.currentTarget, eV), VV(eV, xV.nativeEvent)
      };
      return {
        onPointerDown: eV(!0),
        onPointerUp: eV(!1),
        onPointerCancel: eV(!1)
      }
    }

    function kx() {
      const VV = (0, tV.j)("canCrouch"),
        eV = (0, iV.h)("crouching"),
        xV = (0, YV.useRef)(!1);
      Re(oV.u.Crouch, xV);
      const JV = (VV, eV) => {
          xV.current = VV, (0, cV.B)(oV.u.Crouch, VV, eV)
        },
        UV = (0, YV.useRef)(null),
        yV = () => {
          xV.current && (UV.current && (0, LV.j)(UV.current, !1), JV(!1, {
            isTrusted: !0,
            timeStamp: performance.now()
          }))
        },
        pV = ae(yV);
      return (0, YV.useEffect)((() => {
        !1 === VV && yV()
      }), [VV]), !1 === VV ? null : (0, wV.jsx)(We, {
        ref: UV,
        slot: Ae,
        className: "CrouchKey",
        lit: eV,
        ...pV,
        ...rx(JV),
        children: (0, wV.jsx)(PV.b, {
          name: "arrow-down-to-line"
        })
      })
    }
    const bx = [{
        icon: "arrows-rotate"
      }],
      Ex = [{
        icon: "Arrow"
      }],
      Bx = [{
        icon: "crosshairs"
      }],
      jx = [{
        icon: "swords"
      }],
      qx = [{
        icon: "hand-back-point-up"
      }],
      tx = [{
        icon: "Firecracker"
      }];

    function Fx(VV, eV, xV, JV) {
      return {
        id: JSON.stringify(eV),
        render: YV => (0, wV.jsx)(Nx, {
          code: VV,
          slot: YV,
          icon: eV,
          label: JV,
          hidden: xV
        })
      }
    }

    function Tx(VV, eV) {
      return {
        id: "fly",
        render: xV => (0, wV.jsx)(Px, {
          slot: xV,
          flying: VV,
          label: eV
        })
      }
    }

    function Px(VV) {
      let {
        slot: eV,
        flying: xV,
        label: JV
      } = VV;
      return (0, wV.jsx)(We, {
        slot: eV,
        className: "FlyKey",
        lit: xV,
        label: JV,
        ...rx(((VV, eV) => {
          (0, cV.B)(oV.u.Fly, VV, eV)
        })),
        children: (0, wV.jsx)(PV.b, {
          name: "feather-pointed"
        })
      })
    }

    function Ax(VV) {
      var eV, xV;
      let {
        hidden: JV,
        actionButtons: UV,
        contextSlots: yV
      } = VV;
      const {
        t: pV
      } = (0, fV.A)(), {
        gun: QV,
        aimable: nV,
        chargeName: ZV
      } = (0, iV.h)("heldItemAim"), vV = (0, iV.h)("gliderBoostFuel"), {
        canFly: rV,
        flying: kV
      } = (0, iV.h)("flight"), bV = (0, tV.j)("touchscreenActionButton"), EV = QV ? bx : bV, BV = nV ? {
        icon: Ex,
        label: pV("touchKeys:aim")
      } : null, jV = null !== ZV ? {
        icon: [{
          icon: ZV
        }]
      } : null, qV = null !== BV && void 0 !== BV ? BV : jV, FV = null !== (eV = null === (xV = QV ? BV : null !== jV && void 0 !== jV ? jV : BV) || void 0 === xV ? void 0 : xV.icon) && void 0 !== eV ? eV : qx, TV = [!UV && qV ? Fx(hV.d.Action2, qV.icon, JV, qV.label) : null, QV ? Fx(hV.d.Action3, Bx, JV, pV("touchKeys:scope")) : null, rV ? Tx(kV, pV("touchKeys:fly")) : null];
      return (0, wV.jsxs)(wV.Fragment, {
        children: [EV && (0, wV.jsx)(Nx, {
          code: hV.d.Action1,
          slot: ze,
          icon: EV,
          label: QV ? pV("touchKeys:reload") : void 0,
          hidden: JV
        }, JSON.stringify(EV)), UV && (0, wV.jsxs)(wV.Fragment, {
          children: [(0, wV.jsx)(Nx, {
            code: hV.d.Attack,
            slot: Me,
            icon: jx,
            name: pV("touchKeys:attack"),
            hidden: JV
          }), (0, wV.jsx)(Nx, {
            code: hV.d.Use,
            slot: Xe,
            icon: FV,
            name: pV("touchKeys:use"),
            hidden: JV
          })]
        }), (PV = TV, AV = yV, PV.filter((VV => null !== VV)).slice(0, AV.length).map(((VV, eV) => {
          const xV = AV[eV];
          return (0, wV.jsx)(YV.Fragment, {
            children: VV.render(xV)
          }, `${VV.id}:${xV}`)
        }))), vV > 0 && (0, wV.jsx)(Nx, {
          code: hV.d.Boost,
          slot: Ge,
          className: "BoostKey",
          icon: tx,
          label: pV("touchKeys:boost", {
            fuel: vV > 99 ? "99+" : vV
          }),
          hidden: JV
        })]
      });
      var PV, AV
    }

    function Nx(VV) {
      let {
        code: eV,
        slot: xV,
        icon: JV,
        label: YV,
        name: UV,
        hidden: pV,
        className: QV
      } = VV;
      const ZV = Pe(eV, pV);
      return (0, wV.jsx)(We, {
        ref: ZV,
        slot: xV,
        className: yV()("TouchActionKey", QV),
        canvasZone: !0,
        label: YV,
        role: void 0 !== UV ? "img" : void 0,
        "aria-label": UV,
        children: (0, wV.jsx)(nV.b, {
          text: JV
        })
      })
    }
    var Xx = xV(4650),
      Mx = xV(2871),
      zx = xV(698);
    const Gx = (0, YV.memo)((function() {
      (0, TV.e)();
      const VV = (0, YV.useRef)([]),
        eV = (0, Mx.c)(),
        xV = (0, YV.useRef)(0),
        JV = (0, YV.useRef)(0),
        UV = (0, YV.useRef)([]),
        yV = (0, YV.useRef)(null);

      function pV(xV, JV, YV, UV) {
        const yV = (0, zx.c)(),
          pV = setTimeout((() => {
            VV.current = VV.current.filter((VV => VV.id !== yV)), eV()
          }), UV);
        kV.gameBridge.send("recordFlyingMiddleText", {
          content: xV,
          ux: JV,
          angle: YV,
          Sx: UV
        }), VV.current.push({
          id: yV,
          content: xV,
          ux: JV,
          Sx: UV,
          removeTimeout: pV,
          angle: YV
        }), eV()
      }
      return (0, iV.c)("shotDamageToShow", (VV => {
        let {
          damage: eV,
          wasCrit: xV,
          distance: JV
        } = VV;
        const YV = -Math.PI / 4 + Math.random() * Math.PI / 2;
        pV(xV ? [{
          str: eV.toString(),
          style: {
            color: "#ff8a80",
            fontSize: "1.6em"
          }
        }] : [eV.toString()], JV, YV, 1e3)
      })), (0, QV.g)("flyingMiddleMessage", (VV => {
        let {
          content: eV,
          ux: YV,
          Sx: QV
        } = VV;
        UV.current.push({
          content: eV,
          ux: YV,
          Sx: QV
        });
        const nV = () => {
          const {
            content: VV,
            ux: eV,
            Sx: YV
          } = UV.current.shift(), yV = function(VV) {
            const eV = -Math.PI / 4,
              xV = Math.PI / 4,
              JV = xV - eV,
              YV = (1 + Math.sqrt(5)) / 2,
              UV = 2 * Math.PI / (YV * YV);
            let yV = VV + UV;
            for (; yV > xV;) yV -= JV;
            for (; yV < eV;) yV += JV;
            const pV = Math.PI / 6;
            if (Math.abs(yV - VV) < pV) {
              yV = VV + (Math.sign(yV - VV) || 1) * pV, yV > xV && (yV = VV - pV), yV < eV && (yV = VV + pV)
            }
            return yV
          }(JV.current);
          JV.current = yV, xV.current = Date.now(), pV(VV, eV, yV, YV)
        };
        if (!yV.current) {
          const VV = () => {
            UV.current.length > 0 && nV(), 0 === UV.current.length && (clearInterval(yV.current), yV.current = null)
          };
          yV.current = setInterval(VV, 200), xV.current + 200 < Date.now() && VV()
        }
        for (; UV.current.length > 4;) nV()
      })), (0, QV.g)("forceFlyingMiddleMessage", (VV => {
        let {
          content: eV,
          ux: xV,
          angle: JV,
          Sx: YV
        } = VV;
        pV(eV, xV, JV, YV)
      })), (0, YV.useEffect)((() => () => {
        clearInterval(yV.current), yV.current = null;
        for (const eV of VV.current) clearTimeout(eV.removeTimeout)
      }), []), (0, wV.jsx)("div", {
        className: "FlyingMiddleTextWrapper",
        children: VV.current.map((VV => {
          const {
            id: eV,
            content: xV,
            ux: JV,
            Sx: YV,
            angle: UV
          } = VV;
          return VV.pos || (VV.pos = function(VV, eV) {
            const xV = 50 / (VV ** .7 * .35);
            return {
              x: xV * Math.sin(eV),
              y: -xV * Math.cos(eV)
            }
          }(JV, UV)), (0, wV.jsx)(Wx, {
            className: "FlyingMiddleText",
            classNames: "FlyingMiddleText",
            timeout: YV,
            enterActiveStyle: {
              transform: `translate(${VV.pos.x}vw, ${VV.pos.y}vh)`,
              transition: `transform ${YV}ms ease-out`
            },
            children: (0, wV.jsx)("div", {
              children: (0, wV.jsx)(nV.b, {
                text: xV
              })
            })
          }, eV)
        }))
      })
    }));

    function Wx(VV) {
      let {
        children: eV,
        className: xV,
        classNames: JV,
        timeout: UV,
        enterActiveStyle: yV
      } = VV;
      const [pV, QV] = (0, YV.useState)(!1), [nV, ZV] = (0, YV.useState)(!1), vV = (0, YV.useRef)(null);
      return (0, YV.useEffect)((() => {
        QV(!0)
      }), []), (0, wV.jsx)(Xx.e, {
        className: xV,
        classNames: JV || xV,
        in: pV,
        timeout: UV,
        nodeRef: vV,
        onEntering: () => {
          ZV(!0)
        },
        children: (0, YV.cloneElement)(eV, {
          ref: vV,
          style: nV && yV || void 0
        })
      })
    }
    var Rx = xV(37756);

    function gx() {
      const VV = (0, iV.h)("health");
      return (0, wV.jsxs)("div", {
        className: "BottomScreenStatBarList",
        children: [(0, wV.jsx)(Rx.b, {
          placement: "statBars"
        }), (0, wV.jsx)(Dx, {
          actualValue: VV.shield,
          maxValue: VV.maxShield,
          hideAtValue: 0,
          icon: "shield",
          className: "ShieldBar"
        }), (0, wV.jsx)(Dx, {
          actualValue: VV.health,
          maxValue: VV.maxHealth,
          icon: "heart",
          className: "HealthBar"
        })]
      })
    }

    function Dx(VV) {
      let {
        actualValue: eV,
        maxValue: xV,
        hideAtValue: JV,
        icon: YV,
        className: UV
      } = VV;
      return (0, TV.g)(), null === eV || null === xV || eV === JV || xV === JV ? null : (0, wV.jsx)("div", {
        className: "BottomScreenStatBarWrapper",
        children: (0, wV.jsxs)("div", {
          className: "BottomScreenStatBarBackground",
          children: [(0, wV.jsx)("div", {
            className: `BottomScreenStatBar ${UV}`,
            style: {
              transform: `scaleX(${Math.max(eV/xV,0)})`,
              transformOrigin: "left center"
            }
          }), (0, wV.jsxs)("div", {
            className: "BottomScreenStatBarText SmallTextBold",
            children: [(0, wV.jsx)(PV.b, {
              name: YV
            }), ` ${Math.ceil(eV)}/${xV}`]
          })]
        })
      })
    }
    var ix = xV(35300),
      Cx = xV(5011),
      ax = xV(1397),
      ox = xV(3073),
      cx = xV(1551),
      hx = xV(1382),
      lx = xV(3862),
      Lx = xV(3328),
      fx = xV(2080),
      mx = xV(2259),
      Kx = xV(812),
      Hx = xV(3922),
      ux = xV(138),
      sx = xV(375);

    function Sx(VV, eV) {
      let {
        shownName: xV,
        lifeformType: JV
      } = VV;
      return null !== xV ? xV : null !== JV ? eV(`lifeform:${(0,sx.ue)(JV)}`) : null
    }
    var Ix = xV(4058),
      dx = xV(4035),
      Ox = xV(4032),
      VJ = xV(4066),
      eJ = xV(4050),
      xJ = xV(4686),
      JJ = xV(35378);

    function YJ(VV) {
      let {
        config: eV,
        track: xV,
        xp: JV,
        tileState: YV
      } = VV;
      const {
        t: UV
      } = (0, fV.A)(), pV = (0, eJ.g)(eV, JV), QV = (0, eJ.h)(eV, JV), nV = pV < eV.tierCount ? pV + 1 : null, ZV = Math.min(4, eV.tierCount), vV = Math.max(1, Math.min(pV - 1, eV.tierCount - ZV + 1)), rV = null !== nV ? nV - vV : pV - vV, kV = null !== nV && nV > vV ? nV - vV : rV + 1, bV = QV.xpForNextTier - QV.xpIntoTier, EV = QV.xpForNextTier > 0 ? QV.xpIntoTier / QV.xpForNextTier : 1, BV = {
        "--road-cols": ZV,
        "--road-fill": rV,
        "--road-chip": kV
      }, jV = [];
      for (let yV = 0; yV < ZV; yV++) jV.push(vV + yV);
      return (0, wV.jsxs)("div", {
        className: "SeasonPassRoad",
        style: BV,
        children: [(0, wV.jsxs)("div", {
          className: "SeasonPassRoadColumns",
          children: [(0, wV.jsx)("div", {
            className: "SeasonPassRoadLine"
          }), (0, wV.jsx)("div", {
            className: "SeasonPassRoadLine SeasonPassRoadLineFill"
          }), jV.map((VV => (0, wV.jsxs)("div", {
            className: yV()("SeasonPassRoadColumn", {
              SeasonPassRoadColumnEarning: VV === nV,
              SeasonPassRoadColumnAhead: null !== nV && VV > nV
            }),
            children: [(0, wV.jsx)(xJ.f, {
              reward: (0, eJ.e)(eV, {
                tier: VV,
                track: xV
              }),
              tileState: YV(VV),
              track: xV,
              size: "small"
            }), (0, wV.jsx)(JJ.c, {
              tier: VV,
              state: VV === nV ? "earning" : VV <= pV ? "reached" : "locked",
              progress: EV,
              size: "small"
            })]
          }, VV))), null !== nV && (0, wV.jsx)("span", {
            className: "SeasonPassRoadChip SmallTextBold",
            children: UV("seasonPass:xpToGo", {
              xp: bV
            })
          })]
        }), vV + ZV - 1 < eV.tierCount && (0, wV.jsxs)("span", {
          className: "SeasonPassRoadEnd SmallTextBold",
          children: ["\u2026 ", eV.tierCount]
        })]
      })
    }
    const UJ = (0, YV.memo)((function() {
      const {
        t: VV
      } = (0, fV.A)(), eV = (0, VJ.e)(), xV = (0, Ox.h)("listen");
      if (null === eV || eV.seasonPassRoomXp <= 0) return null;
      const JV = "loaded" === xV.status ? xV.view : null,
        YV = JV ? JV.config : (0, Ix.h)(Date.now()),
        UV = Ox.g.getProvisionalXp(eV),
        yV = eV.seasonPassLifeXp > 0 ? VV("seasonPass:xpThisLife", {
          xp: eV.seasonPassLifeXp
        }) : VV("seasonPass:xpThisGame", {
          xp: eV.seasonPassRoomXp
        });
      return (0, wV.jsxs)("div", {
        className: "SeasonPassRespawnBanner",
        children: [(0, wV.jsx)("div", {
          className: "SeasonPassRespawnBannerGained FullyFancyText",
          children: yV
        }), YV && null !== UV && (0, wV.jsx)(yJ, {
          config: YV,
          view: JV,
          xp: UV
        }), eV.seasonPassXpCapped && (0, wV.jsx)("div", {
          className: "SeasonPassRespawnBannerCapped SmallTextBold",
          children: VV("seasonPass:dailyCapReached")
        })]
      })
    }));

    function yJ(VV) {
      var eV;
      let {
        config: xV,
        view: JV,
        xp: YV
      } = VV;
      const UV = null !== JV && void 0 !== JV && JV.state.hasSuperRank ? "super" : "free",
        yV = JV ? {
          ...JV.state,
          xp: Math.max(YV, JV.state.xp)
        } : null;
      return (0, wV.jsx)(YJ, {
        config: xV,
        track: UV,
        xp: null !== (eV = null === yV || void 0 === yV ? void 0 : yV.xp) && void 0 !== eV ? eV : YV,
        tileState: VV => yV ? (0, dx.g)(xV, yV, {
          tier: VV,
          track: UV
        }) : "locked"
      })
    }
    var pJ = xV(3872),
      QJ = xV(3880);
    const nJ = {
        FallDamage: "respawnPage:diedFallDamage",
        VoidJump: "respawnPage:diedVoid",
        Lava: "respawnPage:diedLava",
        "Toxic Waste": "respawnPage:diedToxicWaste",
        "Poison Potion": "respawnPage:diedPoisoned",
        "Rotten Brain": "respawnPage:diedPoisoned"
      },
      wJ = (0, YV.memo)((function() {
        var VV, eV;
        const xV = (0, TV.e)(),
          JV = (0, bV.useNavigatePreserveSearch)(),
          {
            t: UV
          } = (0, fV.A)(),
          {
            loadingOverlayVisible: pV
          } = (0, DV.l)(["loadingOverlayVisible"]),
          nV = (0, aV.E)(),
          [ZV, vV] = (0, YV.useState)(!1),
          [rV, EV] = (0, YV.useState)(!0),
          [BV, jV] = (0, YV.useState)(null),
          qV = (0, Mx.c)(),
          FV = (0, tV.j)("respawnButtonText"),
          AV = (0, tV.j)("usePlayAgainButton"),
          NV = (0, tV.j)("useRespawnButton"),
          {
            gameNameWithVariation: XV
          } = (0, iV.h)("connectedGame"),
          zV = (0, YV.useRef)(fx.c.get("secsToRespawn")),
          GV = (0, YV.useRef)(kV.gameBridge.latest("localPlayerAlive")),
          WV = (0, YV.useRef)(fx.c.get("secsToRespawn")),
          RV = (0, YV.useRef)(fx.c.get("autoRespawn")),
          gV = (0, YV.useRef)(null),
          CV = (0, YV.useRef)(0),
          oV = (0, YV.useRef)(0),
          [cV, hV] = (0, YV.useState)(!1),
          lV = (0, YV.useRef)(null),
          LV = (0, YV.useRef)(null),
          mV = (0, YV.useRef)(null);
        (0, tV.g)("secsToRespawn", (VV => {
          console.log("Received new secsToRespawn with", VV, "and current canRespawn value of ", RV.current), WV.current = VV, sV()
        })), (0, tV.g)("autoRespawn", (VV => {
          console.log("Received autorespawn", VV, "current canRespawn value of ", zV.current), RV.current = VV, sV()
        }));
        const KV = VV => {
          console.log("Updating respawn component from localPlayerAliveSet. isAlive:", VV), VV || CV.current++, GV.current = VV, sV()
        };
        (0, iV.c)("localPlayerAliveSet", KV), (0, QV.g)(Lx.m, (VV => {
          "connected" === VV && !GV.current && RV.current && zV.current <= 0 && (oV.current = 0, SV())
        })), (0, YV.useEffect)((() => {
          const VV = kV.gameBridge.latest("localPlayerAlive");
          VV === GV.current ? (console.log("Updating respawn component from initial mount"), sV()) : KV(VV)
        }), []), (0, YV.useEffect)((() => {
          if (ZV) {
            hV(!1);
            const VV = setTimeout((() => {
              hV(!0)
            }), 600);
            return () => {
              clearTimeout(VV)
            }
          }
          return () => {}
        }), [ZV]);
        (0, iV.c)("kill", (VV => {
          let {
            killer: eV,
            victim: xV,
            withItem: JV
          } = VV;
          if (!xV.local) return;
          const YV = ((VV, eV) => {
            if (VV.local) {
              const VV = nJ[eV];
              return VV ? UV(VV) : null
            }
            const xV = Sx(VV, UV);
            return xV ? UV("respawnPage:killedBy", {
              name: xV
            }) : null
          })(eV, JV);
          YV && jV({
            text: YV,
            deathCount: GV.current ? CV.current + 1 : CV.current
          })
        }));
        const HV = () => {
            ZV && RV.current && GV.current && cV && vV(!1)
          },
          uV = ZV && RV.current && GV.current && cV && !pV;
        (0, QV.g)("usedKeyboard", (() => {
          HV()
        })), (0, QJ.d)("respawn", uV, HV);
        const sV = () => {
            EV(WV.current >= 3 || !RV.current), GV.current ? (clearInterval(gV.current), gV.current = null, RV.current ? qV() : vV(!1)) : (vV(!0), zV.current = WV.current, qV(), console.log("Running respawn stats updated", RV.current, zV.current), RV.current && zV.current <= 0 && SV(), clearInterval(gV.current), zV.current > 0 && (gV.current = setInterval((() => {
              zV.current = Math.max(zV.current - 1, 0), qV(), zV.current <= 0 && (clearInterval(gV.current), gV.current = null, fx.c.get("autoRespawn") && SV())
            }), 1e3)))
          },
          SV = () => {
            if (Date.now() - oV.current > 1e3) {
              const VV = () => {
                kV.gameBridge.send("respawn", null), oV.current = Date.now()
              };
              fx.c.get("autoRespawn") ? VV() : (0, hx.db)((() => {
                VV()
              }), "video_respawn")
            }
          },
          IV = (0, YV.useMemo)((() => {
            var VV;
            return null === (VV = (0, Kx.l)(XV)) || void 0 === VV ? void 0 : VV.otherGameLinksOnRespawnPage
          }), [XV]),
          dV = 0 === zV.current,
          OV = (null === BV || void 0 === BV ? void 0 : BV.deathCount) === CV.current ? BV.text : null,
          Ve = ZV && rV && !pV,
          ee = nV && uV && null !== (VV = null === (eV = (0, MV.e)()) || void 0 === eV ? void 0 : eV.getBoundButton("menuConfirm")) && void 0 !== VV ? VV : null,
          xe = VV => dV ? VV : UV("respawnPage:actionInSeconds", {
            action: VV,
            seconds: zV.current
          });
        return (0, wV.jsx)(ix.c, {
          showing: ZV,
          globallyUniqueKey: "RespawnComponent",
          alwaysMountChildren: !0,
          children: (0, wV.jsx)(lx.d, {
            show: ZV,
            "data-holds-camera-keeper": "",
            children: (0, wV.jsxs)(Cx.e, {
              close: () => {
                vV(!1)
              },
              togglePointerLock: !1,
              closeOnPressBackground: !1,
              className: "RespawnBackgroundScreen",
              padLayerKind: RV.current || pV ? null : "death",
              padBackCloses: !1,
              cameraKeeper: !0,
              children: [(0, ux.is99NightsCrazyGamesBundle)() && (0, wV.jsx)(cx.b, {
                onClick: mx.f,
                children: UV("homePage:backToGames")
              }), (0, wV.jsxs)("div", {
                className: "RespawnContainer",
                onClick: HV,
                children: [(0, wV.jsxs)("div", {
                  className: "RespawnTop",
                  children: [(0, wV.jsx)("div", {
                    ref: LV,
                    className: "RespawnSideSquareBannerDiv",
                    children: xV[0] > 925 && (0, wV.jsx)(ox.e, {
                      info: {
                        adType: "square",
                        adId: 1,
                        adAlias: "banner_respawn_1"
                      },
                      sizeInfo: {
                        parentRef: LV
                      },
                      showing: Ve,
                      horizontalAlign: "start",
                      extraContrastBackgroundBox: "left",
                      noFillShowBloxdAdProbability: 0
                    })
                  }), (0, wV.jsx)("div", {
                    className: "RespawnMainContent",
                    children: (0, wV.jsxs)("div", {
                      className: yV()("RespawnMainContentInner", {
                        RespawnMainContentInnerPad: nV
                      }),
                      children: [RV.current && (0, wV.jsxs)("div", {
                        className: "AutoRespawnDeathInfo",
                        children: [(0, wV.jsxs)("div", {
                          className: "AutoRespawnDeathTitle FullyFancyText",
                          children: [(0, wV.jsx)(PV.b, {
                            name: "skull",
                            className: "AutoRespawnDeathIcon"
                          }), UV("respawnPage:youDied")]
                        }), (0, wV.jsxs)("div", {
                          className: "AutoRespawnDeathCause FullyFancyText",
                          children: [null === ee && (GV.current ? UV("respawnPage:pressAnywhereToContinue") : dV ? UV("respawnPage:respawning") : xe(UV("general:respawn"))), null !== ee && (0, wV.jsx)(pJ.e, {
                            text: UV("controller:screensPressToContinue", {
                              button: pJ.g
                            }),
                            glyph: ee,
                            className: "AutoRespawnContinueGlyph"
                          })]
                        }), OV && (0, wV.jsx)("div", {
                          className: "AutoRespawnStatus",
                          children: OV
                        })]
                      }), !RV.current && (0, wV.jsxs)(wV.Fragment, {
                        children: [(0, wV.jsxs)("div", {
                          className: yV()("RespawnPageButtons", {
                            RespawnPageButtonsVertical: !IV
                          }),
                          children: [AV && (0, wV.jsx)(cx.m, {
                            className: "RespawnPageButton",
                            padDefaultFocus: !0,
                            onClick: () => {
                              (0, hx.db)((() => {
                                (0, DV.h)("inGameReplay");
                                const VV = (0, ax.c)(XV);
                                JV(VV)
                              }), "video_start")
                            },
                            disabled: !dV || !cV,
                            touchPressOn: "pointerup",
                            children: xe(UV("respawnPage:playAgain"))
                          }), NV && (0, wV.jsx)(cx.f, {
                            className: "RespawnPageButton",
                            onClick: SV,
                            padDefaultFocus: !AV,
                            padBack: "sessionBasedGame:stayInLobby" === FV,
                            disabled: !dV || !cV,
                            touchPressOn: "pointerup",
                            children: xe(UV(FV))
                          }), !(0, ux.is99NightsCrazyGamesBundle)() && (0, wV.jsx)(cx.E, {
                            className: "RespawnPageButton",
                            onClick: mx.f,
                            disabled: !dV || !cV,
                            touchPressOn: "pointerup",
                            children: xe(UV("respawnPage:exitGame"))
                          })]
                        }), IV && (0, wV.jsxs)("div", {
                          className: "RespawnPageOtherGames",
                          children: [(0, wV.jsx)("div", {
                            className: "RespawnPanelSectionTitle",
                            children: UV("respawnPage:orTry")
                          }), (0, wV.jsx)("div", {
                            className: "RespawnPageOtherGameThumbnails",
                            children: IV.map((VV => (0, wV.jsx)(Hx.g, {
                              source: {
                                type: "game",
                                gameNameWithVariation: VV
                              },
                              disabled: !dV || !cV,
                              gameWidth: "13rem",
                              hideDescription: !0,
                              hideFavourites: !0,
                              hideCcu: !0,
                              onClick: () => {
                                (0, DV.h)("inGameReplay");
                                const eV = (0, ax.c)(VV);
                                JV(eV)
                              }
                            }, VV)))
                          })]
                        })]
                      }), ZV && (0, wV.jsx)(UJ, {})]
                    })
                  }), (0, wV.jsx)("div", {
                    ref: mV,
                    className: "RespawnSideSquareBannerDiv"
                  })]
                }), (0, wV.jsx)("div", {
                  ref: lV,
                  className: "RespawnBottom",
                  children: (0, wV.jsx)(ox.e, {
                    info: {
                      adType: "leaderboard",
                      adId: 1,
                      adAlias: "banner_respawn_2"
                    },
                    sizeInfo: {
                      parentRef: lV
                    },
                    showing: Ve,
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
    var ZJ = xV(37777);
    const vJ = [{
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
      rJ = [{
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
      kJ = {
        duration: 300,
        easing: "ease-out",
        fill: "forwards"
      },
      bJ = {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
      },
      EJ = (0, YV.memo)((function() {
        const VV = (0, YV.useRef)(null),
          eV = (0, YV.useRef)(null);

        function xV(xV) {
          var JV;
          let {
            TJ: YV,
            screenPos: UV
          } = xV;
          const yV = VV.current;
          null === (JV = eV.current) || void 0 === JV || JV.cancel(), yV.classList.remove("HitmarkerCrit"), UV ? (yV.style.left = `${UV.x}%`, yV.style.top = `${UV.y}%`) : (yV.style.left = "50%", yV.style.top = "50%"), yV.style.rotate = 16 * (Math.random() - .5) + "deg", YV && yV.classList.add("HitmarkerCrit");
          const pV = yV.animate(YV ? rJ : vJ, YV ? bJ : kJ);
          eV.current = pV, pV.onfinish = () => {
            yV.classList.remove("HitmarkerCrit")
          }
        }
        return (0, QV.g)("localGunHitmarker", (VV => {
          let {
            TJ: eV
          } = VV;
          xV({
            TJ: eV
          })
        })), (0, QV.g)("yourAttackHit", (VV => {
          let {
            TJ: eV,
            screenPos: JV
          } = VV;
          xV({
            TJ: eV,
            screenPos: DV.b.get("isTouchScreen") ? JV : void 0
          })
        })), (0, QV.g)("sendHitmarker", (VV => {
          let {
            TJ: eV,
            screenPos: JV
          } = VV;
          xV({
            TJ: eV,
            screenPos: JV
          })
        })), (0, wV.jsxs)("div", {
          ref: VV,
          className: "Hitmarker",
          children: [(0, wV.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, wV.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, wV.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, wV.jsx)("div", {
            className: "HitmarkerBar"
          })]
        })
      }));

    function BJ() {
      const VV = (0, YV.useRef)(!0);
      return (0, QV.g)("localBlockMined", (() => {
        sV.g.play("blockMined")
      })), (0, QV.g)("yourAttackHit", (() => {
        sV.g.play("hitLanded")
      })), (0, QV.g)("localGunHitmarker", (() => {
        sV.g.play("hitLanded")
      })), (0, QV.g)("damagedByOtherPlayer", (() => {
        sV.g.play("damageTaken")
      })), (0, iV.c)("localPlayerAliveSet", (eV => {
        !eV && VV.current && sV.g.play("death"), VV.current = eV
      })), null
    }
    var jJ = xV(2039),
      qJ = xV(37793),
      tJ = xV.n(qJ),
      FJ = xV(2163),
      TJ = xV(2156),
      PJ = xV(3719),
      AJ = xV(35319);
    const NJ = sx.ee ? 7e7 : 7e3,
      XJ = tJ()("#ffffff").alpha(.5).string();

    function MJ(VV) {
      const eV = (0, PJ.d)(VV);
      return void 0 !== eV && "Gun" === (0, AJ.itemTypeOf)(eV)
    }

    function zJ(VV) {
      if (!VV) return console.error(`Killfeed colour was ${VV}`), XJ;
      try {
        return tJ()(VV).alpha(.5).string()
      } catch {
        return console.warn(`Killfeed colour ${VV} is not a colour`), XJ
      }
    }
    const GJ = (0, YV.memo)((function() {
      const {
        t: VV
      } = (0, fV.A)(), eV = (0, YV.useRef)([]), xV = (0, Mx.c)();
      return (0, iV.c)("kill", (function(JV) {
        var YV, UV;
        let {
          killer: yV,
          victim: pV,
          withItem: QV,
          killstreak: nV
        } = JV;
        const wV = eV.current;
        if (wV.length >= 3) {
          const VV = wV.shift();
          clearTimeout(VV.timeout)
        }
        const ZV = kV.gameBridge.latest("hiddenPlayerNames"),
          vV = {
            deadName: Sx(pV, VV),
            killerName: Sx(yV, VV),
            isFriend: {
              killer: (0, FJ.e)(yV.realName, ZV),
              dead: (0, FJ.e)(pV.realName, ZV)
            },
            withItem: QV,
            wasHeadshot: !1,
            killstreak: nV,
            timeout: setTimeout((() => {
              wV.shift(), xV()
            }), NJ),
            reactId: `${null!==(YV=yV.id)&&void 0!==YV?YV:yV.shownName}|${null!==(UV=pV.id)&&void 0!==UV?UV:pV.shownName}|${Date.now()}`,
            killerBackground: zJ(yV.colour),
            deadBackground: zJ(pV.colour)
          };
        wV.push(vV), xV()
      })), (0, YV.useEffect)((() => {
        const VV = eV.current;
        return () => {
          for (; VV.length > 0;) {
            const {
              timeout: eV
            } = VV.pop();
            clearTimeout(eV)
          }
        }
      }), []), (0, wV.jsx)("div", {
        className: "Killfeed",
        children: eV.current.map((VV => {
          let {
            deadName: eV,
            killerName: xV,
            withItem: JV,
            wasHeadshot: YV,
            killstreak: UV,
            killerBackground: yV,
            deadBackground: pV,
            reactId: QV,
            isFriend: nV
          } = VV;
          return (0, wV.jsxs)("div", {
            className: "IndividualKillWrapper SmallTextLight",
            style: {
              background: `linear-gradient(90deg, ${yV} calc(100% - 10rem), ${pV} 100%)`
            },
            children: [UV >= 2 ? (0, wV.jsx)("div", {
              className: "KillfeedKillstreak",
              children: (0, sx.O)(UV)
            }) : null, (0, wV.jsx)("div", {
              className: "KillfeedKillerName",
              children: xV
            }), nV.killer && (0, wV.jsx)(TJ.d, {}), (0, wV.jsx)("div", {
              className: "KillfeedItem",
              style: {
                height: "5vmin",
                width: MJ(JV) ? "7.5vmin" : "5vmin"
              },
              children: (0, wV.jsx)(jJ.e, {
                itemName: JV,
                amount: 0,
                gunTransform: "scaleX(-1)",
                itemMarginTop: 0
              })
            }), YV ? (0, wV.jsx)(PV.b, {
              name: "crosshairs",
              className: "3x KillfeedHeadshotIcon"
            }) : null, (0, wV.jsx)("div", {
              className: "KillfeedDeadName",
              children: eV
            }), nV.dead && (0, wV.jsx)(TJ.d, {})]
          }, QV)
        }))
      })
    }));
    var WJ = xV(37840),
      RJ = xV(1182),
      gJ = xV.n(RJ),
      DJ = xV(364),
      iJ = xV(3842),
      CJ = xV(37849),
      aJ = xV(1348);
    const oJ = {},
      cJ = (0, YV.memo)((function() {
        const VV = (0, YV.useRef)({}),
          [, eV] = (0, YV.useReducer)((VV => VV + 1), 0);
        (0, QV.g)("setDirectionArrow", (xV => {
          let {
            id: JV,
            position: YV,
            style: UV,
            text: yV,
            XJ: pV
          } = xV;
          const QV = VV.current,
            nV = UV || oJ,
            wV = yV,
            ZV = QV[JV];
          if (!ZV) return QV[JV] = {
            position: YV,
            style: nV,
            text: wV,
            shouldShowDistance: pV,
            bK: null,
            chevronElement: null,
            distanceElement: null,
            lastRenderedDist: -1,
            lastDistUpdateTime: 0,
            lastScreenX: NaN,
            lastScreenY: NaN,
            onScreen: void 0
          }, void eV();
          const vV = !gJ()(ZV.style, nV) || !gJ()(ZV.text, wV) || ZV.shouldShowDistance !== pV;
          ZV.position = YV, ZV.style = nV, ZV.text = wV, ZV.shouldShowDistance = pV, vV && eV()
        })), (0, QV.g)("clearDirectionArrow", (xV => {
          let {
            id: JV
          } = xV;
          const YV = VV.current;
          if (null === JV)
            for (const VV in YV) delete YV[VV];
          else delete YV[JV];
          eV()
        })), (0, YV.useEffect)((() => {
          const eV = VV.current,
            xV = (0, aJ.y)((() => {
              ! function(VV) {
                const eV = kV.gameBridge.lookup("localPos", null),
                  xV = iJ.d - hJ,
                  JV = (0, iJ.m)() - hJ;
                for (const YV in VV) {
                  const UV = VV[YV];
                  if (!UV.bK) continue;
                  const yV = kV.gameBridge.lookup("screenPos", UV.position),
                    pV = yV.x - 50,
                    QV = yV.y - 50;
                  yV.x === UV.lastScreenX && yV.y === UV.lastScreenY || (UV.lastScreenX = yV.x, UV.lastScreenY = yV.y, UV.bK.style.translate = `${yV.x}vw ${yV.y}vh`, UV.chevronElement && (UV.chevronElement.style.rotate = `${sx.b.fastATan2(QV,pV)}rad`));
                  const nV = Math.abs(pV) < xV && Math.abs(QV) < JV;
                  if (nV !== UV.onScreen && (UV.onScreen = nV, UV.bK.classList.toggle("DirectionArrowOnScreen", nV)), UV.shouldShowDistance && UV.distanceElement) {
                    const VV = UV.position[0] - eV[0],
                      xV = UV.position[1] - eV[1],
                      JV = UV.position[2] - eV[2],
                      YV = Math.round(Math.sqrt(VV * VV + xV * xV + JV * JV));
                    (-1 === UV.lastRenderedDist || (0, CJ.e)(YV, UV.lastRenderedDist, UV.lastDistUpdateTime)) && (UV.distanceElement.textContent = `${YV}m`, UV.lastRenderedDist = YV, UV.lastDistUpdateTime = Date.now() + Math.floor(100 * Math.random()))
                  }
                }
              }(eV)
            }));
          return () => {
            xV();
            for (const VV in eV) delete eV[VV]
          }
        }), []);
        const xV = VV.current;
        return (0, wV.jsx)("div", {
          className: "DirectionArrows",
          children: Object.entries(xV).map((VV => {
            var eV;
            let [JV, YV] = VV;
            const UV = null !== (eV = (0, DJ.Yb)(YV.style)) && void 0 !== eV ? eV : "#ffffff";
            return (0, wV.jsxs)("div", {
              ref: VV => {
                xV[JV] && (xV[JV].bK = VV)
              },
              className: "DirectionArrow",
              style: {
                fontSize: YV.style.fontSize,
                opacity: YV.style.opacity
              },
              children: [(0, wV.jsxs)("div", {
                className: "DirectionArrowChevron",
                ref: VV => {
                  xV[JV] && (xV[JV].chevronElement = VV)
                },
                children: [(0, wV.jsxs)("div", {
                  className: "DirectionArrowShadowLayer",
                  children: [(0, wV.jsx)("div", {
                    className: "DirectionArrowBar"
                  }), (0, wV.jsx)("div", {
                    className: "DirectionArrowBar"
                  })]
                }), (0, wV.jsxs)("div", {
                  className: "DirectionArrowBarLayer",
                  children: [(0, wV.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: UV
                    }
                  }), (0, wV.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: UV
                    }
                  })]
                })]
              }), (0, wV.jsx)("div", {
                className: "DirectionArrowMarker",
                style: {
                  background: UV,
                  boxShadow: `0 0 3px rgba(0, 0, 0, 0.8), 0 0 8px ${UV}`
                }
              }), YV.text && (0, wV.jsx)("div", {
                className: "DirectionArrowLabel SmallTextLight",
                style: {
                  color: UV,
                  fontWeight: YV.style.fontWeight,
                  fontStyle: YV.style.fontStyle
                },
                children: (0, wV.jsx)(nV.b, {
                  text: YV.text
                })
              }), YV.shouldShowDistance && (0, wV.jsx)("div", {
                className: "DirectionArrowDistance SmallTextLight",
                ref: VV => {
                  xV[JV] && (xV[JV].distanceElement = VV)
                },
                style: {
                  color: UV,
                  fontWeight: YV.style.fontWeight,
                  fontStyle: YV.style.fontStyle
                }
              })]
            }, JV)
          }))
        })
      })),
      hJ = .5;
    const lJ = (0, YV.memo)((function(VV) {
        let {
          isTouchScreen: eV
        } = VV;
        return (0, wV.jsxs)("div", {
          className: "BottomRightElements",
          "data-camera-keeper-host": "",
          children: [(0, wV.jsx)(KJ, {}), eV && (0, wV.jsx)(vx, {})]
        })
      })),
      LJ = {
        readyForNext: 0,
        running: 1
      },
      fJ = 50;

    function mJ(VV) {
      console.assert(VV.state.current === LJ.readyForNext);
      const eV = VV.queue.current,
        xV = VV.foreground.current;
      if (eV.length > 0 && xV) {
        const {
          toFraction: JV,
          toDuration: YV
        } = eV.shift();
        VV.state.current = LJ.running, xV.style.transition = `transform ${Math.max(YV-fJ,0)}ms linear`, xV.classList.remove("Complete"), VV.timeout.current = setTimeout((() => {
          xV.style.transform = `scaleX(${JV})`, VV.timeout.current = setTimeout((() => {
            1 === JV && xV.classList.add("Complete"), VV.state.current = LJ.readyForNext, mJ(VV)
          }), Math.max(YV - fJ, 0))
        }), fJ)
      }
    }

    function KJ() {
      const VV = (0, YV.useRef)([]),
        eV = (0, YV.useRef)(LJ.readyForNext),
        xV = (0, YV.useRef)(void 0),
        JV = (0, YV.useRef)(null),
        UV = (0, YV.useRef)({
          queue: VV,
          state: eV,
          timeout: xV,
          foreground: JV
        }),
        yV = (0, tV.j)("showProgressBar");
      if ((0, YV.useLayoutEffect)((() => (yV && eV.current === LJ.readyForNext && mJ(UV.current), () => {
          eV.current = LJ.readyForNext, clearTimeout(xV.current), yV && (VV.current.length = 0)
        })), [yV]), (0, QV.g)("progressBarUpdate", (xV => {
          let {
            toFraction: JV,
            toDuration: YV
          } = xV;
          VV.current.push({
            toFraction: JV,
            toDuration: YV
          }), eV.current === LJ.readyForNext && mJ(UV.current)
        })), !yV) return null;
      return (0, wV.jsx)("div", {
        className: "ProgressBarBackground",
        children: (0, wV.jsx)("div", {
          className: "ProgressBarForeground",
          ref: JV,
          style: {
            width: "15vw",
            transformOrigin: "left center",
            transform: "scaleX(0)"
          }
        })
      })
    }
    var HJ = xV(37852),
      uJ = xV(2736);
    const sJ = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function SJ(VV) {
      let {
        classes: eV,
        gone: xV
      } = VV;
      const JV = document.documentElement;
      JV.classList.remove(...eV);
      for (const YV of xV) YV.style.display = "block";
      return () => {
        JV.classList.add(...eV);
        for (const VV of xV) VV.style.display = ""
      }
    }

    function IJ(VV) {
      const {
        isTouchScreen: eV
      } = (0, DV.l)(["isTouchScreen"]);
      (0, YV.useLayoutEffect)((() => {
        if (!eV) return;
        const xV = VV.current,
          JV = document.querySelector(`.${HJ.h}`),
          YV = VV => {
            const eV = () => {
              const eV = VV.querySelector(uJ.f),
                JV = function(VV) {
                  const eV = document.documentElement;
                  return {
                    classes: Ue.G.map(ne.w).filter((VV => eV.classList.contains(VV))),
                    gone: [...VV.querySelectorAll(`.TopRightTrayToggle.${uJ.i}`)]
                  }
                }(VV);
              eV && function(VV, eV) {
                (0, uJ.B)(VV, eV.classes.length > 0 || eV.gone.length > 0, (() => SJ(eV)))
              }(eV, JV);
              const YV = `${Math.floor(function(VV,eV,xV){const JV=document.documentElement,YV=JV.classList.contains((0,ne.B)("menu")),UV=JV.style.getPropertyValue((0,ne.I)("menu"));if(!YV&&""===UV)return VV.getBoundingClientRect().left;const yV=eV?(0,uJ.o)(eV):()=>{},pV=SJ(xV);JV.classList.remove((0,ne.B)("menu")),JV.style.removeProperty((0,ne.I)("menu"));const QV=VV.getBoundingClientRect().left;return pV(),yV(),YV&&JV.classList.add((0,ne.B)("menu")),""!==UV&&JV.style.setProperty((0,ne.I)("menu"),UV),QV}(VV,eV,JV)-xV.getBoundingClientRect().left-4)}px`;
              xV.style.getPropertyValue("--InGameHeaderMaxWidth") !== YV && xV.style.setProperty("--InGameHeaderMaxWidth", YV)
            };
            eV();
            const YV = new ResizeObserver(eV);
            YV.observe(VV), YV.observe(JV), window.addEventListener("resize", eV);
            const UV = () => sJ.map((VV => document.documentElement.style.getPropertyValue(VV))).join();
            let yV = UV();
            const pV = new MutationObserver((() => {
              const VV = UV();
              VV !== yV && (yV = VV, eV())
            }));
            pV.observe(document.documentElement, {
              attributes: !0,
              attributeFilter: ["style"]
            });
            const QV = (0, rV.i)(ne.e, eV),
              nV = new MutationObserver(eV);
            return nV.observe(VV, {
              childList: !0,
              subtree: !0
            }), () => {
              YV.disconnect(), pV.disconnect(), nV.disconnect(), QV(), window.removeEventListener("resize", eV);
              const xV = VV.querySelector(uJ.f);
              xV && (0, uJ.o)(xV)
            }
          },
          UV = () => JV.querySelector(".TopRightIconsContainer"),
          yV = UV();
        let pV;
        if (yV) pV = YV(yV);
        else {
          const VV = new MutationObserver((() => {
            const eV = UV();
            eV && (VV.disconnect(), pV = YV(eV))
          }));
          VV.observe(JV, {
            childList: !0,
            subtree: !0
          }), pV = () => {
            VV.disconnect()
          }
        }
        return () => {
          pV(), xV.style.removeProperty("--InGameHeaderMaxWidth")
        }
      }), [eV, VV])
    }
    var dJ = xV(4089),
      OJ = xV(4083),
      VY = xV(1725),
      eY = xV(1603),
      xY = xV(1734),
      JY = xV(1838),
      YY = xV(1976),
      UY = xV(1173),
      yY = xV(4678),
      pY = xV(1442);
    const QY = 2e4,
      nY = 6e5,
      wY = new Set;

    function ZY() {
      const {
        gameEntrySource: VV,
        loadingOverlayVisible: eV
      } = (0, DV.l)(["gameEntrySource", "loadingOverlayVisible"]), xV = (0, iV.e)("connectedGame", (VV => (0, yY.i)(VV) ? VV.lobbyName : null)), JV = (0, iV.h)("localPlayerAlive"), UV = (0, iV.e)("players", (VV => null !== VV.localId && void 0 !== VV.byId[VV.localId])), [yV, pV] = (0, YV.useState)(null);
      return !eV && JV && UV && null !== xV && yV !== xV && pV(xV), (0, YV.useEffect)((() => {
        if (!(0, yY.l)(VV) || null === yV || yV !== xV || wY.has(yV)) return;
        const eV = setTimeout((() => {
          wY.add(yV), async function(VV) {
            const eV = await UY.userContextManager.getCurrentUserContext();
            let xV;
            try {
              xV = (await eY.b.getWorldOwnerFriendOffer(eV)).owner
            } catch (YV) {
              return void console.warn("Couldn't ask who owns this world", YV)
            }
            if (!xV || (0, yY.r)(xV.name, Date.now())) return;
            const JV = xV;
            ! function(VV, eV) {
              const xV = Date.now() + nY;
              let JV = Date.now(),
                YV = 0;
              const UV = () => {
                const yV = Date.now(),
                  pV = kV.gameBridge.latest("connectedGame");
                pV.lobbyName !== VV || yV > xV || (null === pV.websocketUrl ? JV = 1 / 0 : JV === 1 / 0 && !DV.b.get("loadingOverlayVisible") && kV.gameBridge.latest("localPlayerAlive") && (JV = yV + QY), YV = yV < JV || !kV.gameBridge.latest("localPlayerAlive") || DV.b.get("isUiHidden") || DV.b.get("isUiHiddenByCamera") || (0, JY.isTypingInInput)() || DV.b.get("loadingOverlayVisible") || (0, VY.n)() || (0, dJ.g)() || (0, pY.f)() ? 0 : YV + 1, YV >= 2 ? eV() : setTimeout(UV, 500))
              };
              UV()
            }(VV, (() => {
              (0, yY.h)(xY.c.getSocialState().friends, JV.name) || ((0, yY.n)(JV.name, Date.now()), YY.e.showWorldOwnerOffer(JV), (0, Vx.reportAnalyticsClick)({
                id: "social.world_owner_offer",
                value: "shown"
              }))
            }))
          }(yV).catch((VV => {
            console.error("Failed to offer the world's owner as a friend", VV)
          }))
        }), QY);
        return () => {
          clearTimeout(eV)
        }
      }), [VV, yV, xV]), null
    }
    var vY = xV(2025);
    const rY = (0, YV.memo)((function(VV) {
        let {
          durationMs: eV,
          endsAtMs: xV
        } = VV;
        const [, JV] = (0, YV.useReducer)((VV => VV + 1), 0), UV = null === xV ? eV : Math.max(xV - Date.now(), 0);
        return (0, YV.useEffect)((() => {
          if (null === xV || UV <= 0) return;
          const VV = setTimeout(JV, UV - 1e3 * (Math.ceil(UV / 1e3) - 1));
          return () => {
            clearTimeout(VV)
          }
        })), (0, wV.jsx)("div", {
          className: "EffectInfoDuration SmallTextLight",
          children: (0, sx.db)(UV)
        })
      })),
      kY = (0, YV.memo)((function() {
        const VV = (0, iV.h)("localEffects");
        return (0, wV.jsxs)("div", {
          className: "EffectInfosWrapper",
          children: [Object.entries(VV).map((VV => {
            let [eV, {
              icon: xV,
              displayName: JV,
              durationMs: YV,
              endsAtMs: UV,
              level: yV
            }] = VV;
            return (0, wV.jsxs)("div", {
              className: "EffectInfo",
              children: [(0, wV.jsx)(vY.d, {
                icon: xV,
                className: "EffectInfoIcon"
              }), (0, wV.jsxs)("div", {
                className: "EffectInfoRightSide",
                style: {
                  marginTop: null !== YV ? "0" : "1rem"
                },
                children: [(0, wV.jsxs)("div", {
                  className: "EffectInfoNameWrapper",
                  children: [(0, wV.jsx)(nV.b, {
                    text: null !== JV && void 0 !== JV ? JV : eV,
                    className: "EffectInfoName SmallTextBold"
                  }), yV > 1 && (0, wV.jsx)("div", {
                    className: "EffectInfoName SmallTextBold",
                    children: (0, sx.O)(yV)
                  })]
                }), null !== YV && (0, wV.jsx)(rY, {
                  durationMs: YV,
                  endsAtMs: UV
                })]
              })]
            }, eV)
          })), (0, wV.jsx)(Rx.b, {
            placement: "bottomLeft"
          })]
        })
      }));
    var bY = xV(37855),
      EY = xV(38085),
      BY = xV(206),
      jY = xV(3091);
    var qY = xV(3264);

    function tY(VV, eV) {
      (0, YV.useLayoutEffect)((() => {
        let eV, xV;
        const JV = requestAnimationFrame((() => {
          xV = setTimeout((() => {
            xV = void 0;
            const JV = VV();
            eV = "function" === typeof JV ? JV : void 0
          }), 0)
        }));
        return () => {
          var VV;
          cancelAnimationFrame(JV), clearTimeout(xV), null === (VV = eV) || void 0 === VV || VV()
        }
      }), eV)
    }
    const FY = [5, 5, 5],
      TY = [7, 4, 4, 4];

    function PY(VV) {
      return VV.reduce(((VV, eV) => VV + eV), 0)
    }

    function AY(VV, eV, xV, JV, YV) {
      const UV = VV.getContext("2d");
      if (!UV) return null;
      const yV = eV.color,
        pV = `${eV.fontWeight} ${YV}px ${eV.fontFamily}`,
        QV = () => {
          VV.width = xV, VV.height = JV, UV.fillStyle = yV, UV.textAlign = "center", UV.textBaseline = "middle", UV.font = pV
        };
      return QV(), {
        ctx: UV,
        reset: QV
      }
    }
    const NY = (0, YV.memo)((function(VV) {
      let {
        show: eV,
        asText: xV
      } = VV;
      const JV = (0, YV.useRef)(null),
        UV = (0, YV.useRef)(null),
        yV = (0, YV.useRef)(null),
        pV = (0, YV.useRef)(null),
        QV = (0, EV.h)();
      return (0, YV.useEffect)((() => QV.whenShown((() => {
        let VV = 0,
          eV = 0,
          xV = performance.now(),
          JV = 0;
        const YV = (0, aJ.y)((() => {
          var YV, UV, QV;
          VV++, eV++;
          const nV = performance.now();
          if (nV - xV < 1e3) return;
          const wV = Math.round(VV / (nV - xV) * 1e3);
          if (yV.current = wV, null === (YV = pV.current) || void 0 === YV || YV.call(pV, wV), VV = 0, xV = nV, wV >= 55) return void(JV = 0);
          if (JV += 1, JV < 15) return;
          const ZV = null !== (UV = Jx.m.getItem("decreaseLoadDistPromptDeniedCount")) && void 0 !== UV ? UV : 0,
            [vV, bV] = fx.c.get("minChunkAddDist");
          if (function(VV, eV) {
              const xV = kV.gameBridge.lookup("lF", null);
              return null !== xV && (xV.horizontal > VV || xV.vertical > eV)
            }(vV, bV) && (null !== (QV = Jx.m.getItem("lastDecreaseLoadDistPromptTime")) && void 0 !== QV ? QV : 0) + 432e5 < Date.now() && ZV < 3) {
            Jx.m.setItem("lastDecreaseLoadDistPromptTime", Date.now());
            xx.NotificationProvider.showPromptPopup({
              title: "Lag (low FPS) caused by high chunk load distance. Decrease it?",
              confirmText: "general:yes",
              cancelText: "general:no",
              unlockPointerKey: "chunkLoadDistanceLagPopup"
            }).getResult().then((VV => {
              "notificationTornDown" !== VV && (VV ? (kV.gameBridge.send("setChunkAddDistance", {
                horizontal: vV,
                vertical: bV
              }), Jx.m.setItem("chunkHorizAddDist", vV), Jx.m.setItem("chunkVertAddDist", bV), rV.h.QZ("updatedChunkLoadDist"), Jx.m.setItem("decreaseLoadDistPromptDeniedCount", 0)) : Jx.m.setItem("decreaseLoadDistPromptDeniedCount", ZV + 1))
            }))
          }
        }));
        let UV = performance.now();
        eV = 0;
        let QV = null,
          nV = !document.hidden,
          wV = !1;

        function ZV() {
          const VV = performance.now() - UV,
            xV = 1e3 * eV / VV;
          nV && !wV && (null === QV && (QV = xV), jY.e.setFps(xV, QV)), eV = 0, UV = performance.now()
        }
        let vV = setInterval(ZV, qY.e);

        function bV() {
          eV = 0, UV = performance.now(), clearInterval(vV), vV = setInterval(ZV, qY.e)
        }

        function EV() {
          const VV = nV;
          nV = !document.hidden, !VV && nV && bV()
        }
        document.addEventListener("visibilitychange", EV);
        const BV = (0, rV.i)(Lx.m, (VV => {
          const eV = wV;
          wV = (0, Lx.o)(VV), eV && !wV && bV()
        }));
        return () => {
          YV(), document.removeEventListener("visibilitychange", EV), BV(), clearInterval(vV)
        }
      }))), [QV]), tY((() => {
        var VV;
        if (xV) {
          const VV = document.createTextNode("");
          UV.current.appendChild(VV);
          const eV = function(VV) {
            return eV => {
              const xV = eV.toString();
              VV.data !== xV && (VV.data = xV)
            }
          }(VV);
          return pV.current = eV, null !== yV.current && eV(yV.current), () => {
            VV.remove(), pV.current = null
          }
        }
        if (!eV || pV.current) return;
        const YV = JV.current,
          QV = window.getComputedStyle(YV.parentElement),
          nV = null !== (VV = window.devicePixelRatio) && void 0 !== VV ? VV : 1,
          wV = parseFloat(QV.fontSize) * nV,
          ZV = Math.round(3 * wV),
          vV = Math.round(wV),
          rV = AY(YV, QV, ZV, vV, wV);
        if (!rV) return;
        const {
          ctx: kV,
          reset: bV
        } = rV, EV = VV => {
          bV(), kV.fillText(VV.toString(), YV.width / 2, YV.height / 2)
        };
        pV.current = EV, null !== yV.current && EV(yV.current)
      }), [eV, xV]), (0, wV.jsxs)("div", {
        className: "FpsWrapperDiv",
        style: {
          display: eV ? "flex" : "none"
        },
        children: [(0, wV.jsx)("div", {
          className: "FpsLabel",
          children: "FPS"
        }), xV && (0, wV.jsx)("span", {
          className: "FpsText",
          ref: UV
        }), !xV && (0, wV.jsx)("canvas", {
          className: "FpsCanvas",
          ref: JV,
          width: 48,
          height: 16
        })]
      })
    }));

    function XY(VV) {
      return Math.sign(VV) * Math.round(100 * Math.abs(VV))
    }

    function MY(VV) {
      let {
        getCoordinates: eV,
        showChunkCoords: xV,
        columns: JV
      } = VV;
      const UV = (0, YV.useRef)(null);
      return tY((() => {
        var VV;
        const YV = UV.current,
          yV = window.getComputedStyle(YV.parentElement),
          pV = null !== (VV = window.devicePixelRatio) && void 0 !== VV ? VV : 1,
          QV = parseFloat(yV.fontSize) * pV,
          nV = Math.round(QV * PY(JV)),
          wV = Math.round(QV),
          ZV = AY(YV, yV, nV, wV, QV);
        if (!ZV) return;
        const {
          ctx: vV,
          reset: rV
        } = ZV;
        let bV = !0,
          EV = 0,
          BV = 0,
          jV = 0,
          qV = 0,
          tV = 0,
          FV = 0;
        const TV = () => {
          bV = !0
        };
        document.fonts.load(vV.font).then(TV, TV);
        const PV = () => {
          rV(), TV()
        };
        YV.addEventListener("contextrestored", PV);
        let AV = performance.now();
        const NV = (0, aJ.F)((() => {
          var VV, UV, yV, pV, nV, wV;
          const ZV = performance.now();
          ZV - AV >= 1e3 && (AV = ZV, rV(), TV());
          const [PV, NV, XV] = eV(), MV = XY(PV), zV = XY(NV), GV = XY(XV);
          let WV = null;
          if (xV) {
            const VV = kV.gameBridge.lookup("localPos", null);
            WV = (0, mV.$)(VV[0], VV[1], VV[2])
          }
          const RV = null !== (VV = null === (UV = WV) || void 0 === UV ? void 0 : UV[0]) && void 0 !== VV ? VV : 0,
            gV = null !== (yV = null === (pV = WV) || void 0 === pV ? void 0 : pV[1]) && void 0 !== yV ? yV : 0,
            DV = null !== (nV = null === (wV = WV) || void 0 === wV ? void 0 : wV[2]) && void 0 !== nV ? nV : 0;
          if (!bV && MV === EV && zV === BV && GV === jV && RV === qV && gV === tV && DV === FV) return;
          bV = !1, EV = MV, BV = zV, jV = GV, qV = RV, tV = gV, FV = DV;
          const iV = [(MV / 100).toFixed(2), (zV / 100).toFixed(2), (GV / 100).toFixed(2)];
          WV && iV.unshift(`${RV} ${gV} ${DV}`), vV.clearRect(0, 0, YV.width, YV.height);
          const CV = YV.height / 2;
          let aV = 0;
          for (let eV = 0; eV < iV.length; eV++) {
            const VV = QV * JV[eV];
            vV.fillText(iV[eV], aV + VV / 2, CV, VV), aV += VV
          }
        }));
        return () => {
          NV(), YV.removeEventListener("contextrestored", PV)
        }
      }), [eV, xV, JV]), (0, wV.jsx)("div", {
        className: "CoordinateUI",
        children: (0, wV.jsx)("canvas", {
          ref: UV,
          className: "CoordinateCanvas",
          width: 16 * PY(JV),
          height: 16
        })
      })
    }
    const zY = (0, YV.memo)((function() {
        const VV = (0, YV.useCallback)((() => {
          const VV = kV.gameBridge.lookup("localPos", null);
          return [VV[0], VV[1], VV[2]]
        }), []);
        return (0, wV.jsx)(MY, {
          getCoordinates: VV,
          showChunkCoords: !1,
          columns: FY
        })
      })),
      GY = (0, YV.memo)((function() {
        const VV = (0, YV.useCallback)((() => {
          const VV = kV.gameBridge.lookup("localPos", null),
            eV = BY.f.PZ;
          let xV = VV[0] % eV,
            JV = VV[1] % eV,
            YV = VV[2] % eV;
          return xV < 0 && (xV += eV), JV < 0 && (JV += eV), YV < 0 && (YV += eV), [xV, JV, YV]
        }), []);
        return (0, wV.jsx)(MY, {
          getCoordinates: VV,
          showChunkCoords: !0,
          columns: TY
        })
      }));
    var WY = xV(2191),
      RY = xV(1408),
      gY = xV(1099),
      DY = xV(1252),
      iY = xV(37925),
      CY = xV(1557),
      aY = xV(3584);
    const oY = (0, YV.memo)((function() {
      const VV = (0, tV.j)("maxAuraLevel");
      return 0 === VV ? null : (0, wV.jsx)(cY, {
        maxLevel: VV
      })
    }));

    function cY(VV) {
      let {
        maxLevel: eV
      } = VV;
      const xV = (0, tV.j)("auraPerLevel"),
        [JV, UV] = (0, YV.useState)((() => {
          var VV;
          return null !== (VV = kV.gameBridge.latest("aura")) && void 0 !== VV ? VV : void 0
        })),
        [yV, pV] = (0, YV.useState)((() => jV(JV))),
        [QV, nV] = (0, YV.useReducer)((VV => VV + 1), 0),
        ZV = (0, YV.useRef)(null),
        vV = (0, YV.useRef)([]),
        rV = (0, YV.useRef)({
          width: 0,
          level: 0
        }),
        bV = (0, YV.useRef)(null),
        EV = (0, YV.useRef)(null);

      function BV() {
        if (null !== bV.current) return;
        if (0 === vV.current.length) return;
        const {
          width: VV,
          level: eV
        } = vV.current.shift();
        let xV;
        if (eV !== rV.current.level && eV > rV.current.level !== VV > rV.current.width) {
          const JV = eV > rV.current.level;
          xV = JV ? VV : 100 - VV, ZV.current.style.transition = "none", ZV.current.style.width = JV ? "0%" : "100%", ZV.current.offsetWidth
        } else xV = Math.abs(VV - rV.current.width);
        const JV = 100 * xV / 20;
        ZV.current.style.transition = `width ${JV}ms linear`, pV(VV), rV.current = {
          width: VV,
          level: eV
        }, vV.current.length > 0 && (bV.current = setTimeout((() => {
          bV.current = null, BV()
        }), JV))
      }

      function jV(VV) {
        return Math.floor(VV / xV) === eV ? 100 : VV % xV / xV * 100
      }
      return (0, YV.useEffect)((() => () => {
        clearTimeout(bV.current), clearTimeout(EV.current), bV.current = null, EV.current = null
      }), []), (0, iV.c)("aura", (VV => {
        if (EV.current && clearTimeout(EV.current), null === VV) return clearTimeout(bV.current), EV.current = null, bV.current = null, vV.current = [], rV.current = {
          width: 0,
          level: 0
        }, UV(void 0), void pV(0);
        EV.current = setTimeout((() => {
          const eV = Math.floor(JV / xV),
            YV = Math.floor(VV / xV),
            yV = jV(VV);
          VV > JV && iY.d.play("exp_collect", .1).rate(1.6 + .5 * Math.random()), YV > eV ? (YV % 5 === 0 && iY.d.play("exp_levelup", .45).rate(.95 + .1 * Math.random()), nV(), vV.current.push({
            width: 100,
            level: eV
          })) : YV < eV && vV.current.push({
            width: 0,
            level: eV
          }), VV === JV && YV === eV || vV.current.push({
            width: yV,
            level: YV
          }), UV(VV), BV()
        }), 50)
      })), (0, TV.g)(), (0, wV.jsxs)("div", {
        className: "AuraBarWrapper",
        children: [(0, wV.jsxs)("div", {
          className: "AuraBarLabel SmallTextBold",
          children: [(0, wV.jsx)(CY.b, {
            showSignal: QV,
            particleElement: (0, wV.jsx)("img", {
              src: (0, aY.e)("glint"),
              alt: ""
            })
          }), (0, wV.jsx)("img", {
            className: "AuraBarLabelImage",
            src: (0, aY.e)("glint"),
            alt: "aura"
          }), (0, wV.jsx)("div", {
            className: "AuraBarLabelText",
            children: Math.floor((null !== JV && void 0 !== JV ? JV : 0) / xV)
          })]
        }), (0, wV.jsx)("div", {
          className: "AuraBar",
          children: (0, wV.jsx)("div", {
            ref: ZV,
            className: "AuraBarBackground",
            style: {
              width: `${yV}%`
            }
          })
        })]
      })
    }
    var hY = xV(2875);

    function lY(VV) {
      VV.timed && (VV.endedAnimation = VV.timed.animation, VV.timed = null)
    }
    const LY = (0, YV.memo)((function() {
      const VV = (0, YV.useRef)(null),
        eV = (0, YV.useRef)(null),
        xV = (0, YV.useRef)({
          timed: null,
          endedAnimation: null
        });
      return (0, QV.g)("middleScreenBarInitiate", (VV => {
        var JV;
        let {
          duration: YV,
          tJ: UV,
          horizBarRemOffset: yV
        } = VV;
        const pV = xV.current;
        lY(pV);
        const QV = eV.current;
        if (!(YV >= 0) || !QV) return;
        null === (JV = pV.endedAnimation) || void 0 === JV || JV.cancel(), pV.endedAnimation = null;
        const nV = QV.animate([{
          transform: "scaleX(0)"
        }, {
          transform: "scaleX(1)"
        }], {
          duration: YV,
          fill: "forwards"
        });
        pV.timed = {
          tJ: UV,
          horizBarRemOffset: yV,
          animation: nV
        }
      })), (0, QV.g)("middleScreenBarRemove", (() => {
        lY(xV.current)
      })), (0, YV.useEffect)((() => {
        const JV = xV.current;
        let YV = Number.NaN,
          UV = Number.NaN,
          yV = Number.NaN;
        return (0, aJ.v)((() => {
          var xV, pV, QV, nV;
          const wV = VV.current,
            ZV = eV.current;
          if (!wV || !ZV) return;
          null !== (xV = JV.timed) && void 0 !== xV && xV.tJ && "finished" === JV.timed.animation.playState && lY(JV), null === (pV = JV.endedAnimation) || void 0 === pV || pV.cancel(), JV.endedAnimation = null;
          let vV = JV.timed ? 1 : 0;
          if (!JV.timed) {
            const VV = kV.gameBridge.lookup("momentumFrac", null);
            vV = VV > 0 ? 1 : 0, VV !== yV && (yV = VV, ZV.style.transform = `scaleX(${VV})`)
          }
          const rV = null !== (QV = null === (nV = JV.timed) || void 0 === nV ? void 0 : nV.horizBarRemOffset) && void 0 !== QV ? QV : 0;
          rV === YV && vV === UV || (YV = rV, UV = vV, wV.style.transform = `translateX(calc(-50% + ${rV}rem)) scaleX(${vV})`)
        }))
      }), []), (0, wV.jsx)("div", {
        className: "MiddleScreenBar",
        ref: VV,
        children: (0, wV.jsx)("div", {
          className: "MiddleScreenBarFill",
          ref: eV
        })
      })
    }));
    var fY = xV(5164),
      mY = xV(3071);

    function KY() {
      const {
        t: VV
      } = (0, fV.A)(), eV = (0, QV.j)("serverUpdating", null), xV = (0, mY.b)(250, null !== eV);
      return null === eV || xV - eV > 3e4 ? null : (0, wV.jsxs)("div", {
        className: "UpdateCountdownBanner",
        children: [(0, wV.jsx)("div", {
          className: "UpdateCountdownBannerTitle",
          children: VV("updateWaiting:updatingIn", {
            countdown: (0, fY.p)(eV - xV)
          })
        }), (0, wV.jsx)("div", {
          children: VV("updateWaiting:bringYouBack")
        })]
      })
    }
    var HY = xV(38106),
      uY = xV(2116),
      sY = xV(2141),
      SY = xV(2109);
    const IY = [{
        translationKey: "general:interact"
      }],
      dY = (0, YV.memo)((function() {
        const VV = (0, tV.j)("crosshairText"),
          {
            interactPrompt: eV,
            blockText: xV,
            neededTool: JV
          } = (0, iV.h)("crosshairTarget"),
          {
            isTouchScreen: UV
          } = (0, DV.l)(["isTouchScreen"]),
          yV = (0, aV.E)(),
          pV = (0, sY.e)("alt-fire");
        (0, YV.useEffect)((() => {
          kV.gameBridge.send("setCrosshairInteractPrompt", !UV || yV ? "key" : "touch")
        }), [UV, yV]);
        const [ZV, vV] = (0, YV.useReducer)((VV => VV + 1), 0);
        (0, QV.g)("customBindingsChanged", vV);
        var rV;
        if (null !== eV && (yV && null !== pV || !UV && null !== (0, uY.p)("alt-fire"))) return (0, wV.jsxs)("div", {
          className: "CrosshairText SmallTextBold InteractPrompt",
          children: [(0, wV.jsx)(SY.d, {
            noaAction: "alt-fire"
          }), (0, wV.jsx)(nV.b, {
            text: null !== (rV = eV.label) && void 0 !== rV ? rV : IY
          })]
        });
        let bV = null;
        return null !== xV ? bV = xV : null !== VV && "" !== VV ? bV = VV : null !== JV && (bV = [{
          icon: JV,
          style: {
            opacity: .8
          }
        }, {
          str: " needed",
          style: {
            opacity: .8
          }
        }]), bV ? (0, wV.jsx)("div", {
          className: "CrosshairText SmallTextBold",
          children: (0, wV.jsx)(nV.b, {
            text: bV
          })
        }) : null
      }));
    var OY = xV(2880);
    const VU = (0, YV.memo)((function() {
      var VV;
      const {
        interactPrompt: eV
      } = (0, iV.h)("crosshairTarget"), {
        openInGameMenuName: xV,
        openEverythingMenuName: JV
      } = (0, DV.l)(["openInGameMenuName", "openEverythingMenuName"]), YV = (0, QV.j)("aimingOverlay", "none"), UV = (0, CV.n)(), yV = (0, OY.b)();
      return null === eV || null !== xV || null !== JV || "sniper" === YV || UV || yV ? null : (0, wV.jsx)(eU, {
        label: null !== (VV = eV.label) && void 0 !== VV ? VV : IY
      })
    }));

    function eU(VV) {
      let {
        label: eV
      } = VV;
      const xV = Pe(hV.d.Interact, !1);
      return (0, YV.useEffect)((() => (rV.h.QZ(ne.p), () => {
        rV.h.QZ(ne.p)
      })), []), (0, wV.jsx)("div", {
        ref: xV,
        className: "TouchInteractHit",
        children: (0, wV.jsxs)("div", {
          className: "TouchInteractKey",
          children: [(0, wV.jsx)("span", {
            className: "TouchInteractIcon",
            children: (0, wV.jsx)(PV.b, {
              name: "hand-back-point-up"
            })
          }), (0, wV.jsx)(nV.b, {
            text: eV
          })]
        })
      })
    }
    var xU = xV(78),
      JU = xV(35218),
      YU = xV(1846),
      UU = xV(35232);
    const yU = "ScreenshotMode";
    let pU = [];
    const QU = new Set;

    function nU(VV) {
      pU = VV;
      for (const eV of QU) eV(VV)
    }
    const wU = (0, YV.memo)((function() {
      const {
        screenshotMode: VV,
        isTouchScreen: eV,
        openEverythingMenuName: xV,
        openInGameMenuName: JV
      } = (0, DV.l)(["screenshotMode", "isTouchScreen", "openEverythingMenuName", "openInGameMenuName"]), UV = null !== xV || null !== JV, yV = (0, iV.h)("localPlayerAlive");
      return (0, YV.useEffect)((() => {
        !VV || !UV && eV && yV || (0, JU.e)()
      }), [VV, UV, eV, yV]), (0, YV.useEffect)((() => JU.e), []), (0, YV.useEffect)((() => {
        if (VV) return document.documentElement.classList.add(yU), (0, lV.h)(oV.y.ScreenshotMode, oV.y.ScreenshotMode, "screenshotMode"), () => {
          document.documentElement.classList.remove(yU), (0, lV.h)(oV.y.ScreenshotMode, 0, "screenshotMode")
        }
      }), [VV]), VV ? (0, xU.createPortal)((0, wV.jsx)(ZU, {}), document.body) : null
    }));

    function ZU() {
      const {
        t: VV
      } = (0, fV.A)(), [eV, xV] = (0, YV.useState)(!1), [JV, UV] = (0, YV.useState)(0), [yV, pV] = (0, YV.useState)(null), QV = function() {
        const [VV, eV] = (0, YV.useState)(pU);
        return (0, YV.useEffect)((() => (QU.add(eV), eV(pU), () => {
          QU.delete(eV)
        })), []), VV
      }(), nV = (0, YV.useRef)(), ZV = (0, YV.useRef)(!1);
      (0, YV.useEffect)((() => () => {
        clearTimeout(nV.current)
      }), []);
      const vV = VV => {
          clearTimeout(nV.current), pV(VV), VV && (nV.current = setTimeout((() => {
            pV(null)
          }), 2e3))
        },
        rV = (eV, xV) => {
          switch (eV) {
            case "saved":
              vV(VV("screenshotMode:saved"));
              break;
            case "denied":
              vV(VV("screenshotMode:denied"));
              break;
            case "needsTap":
              pU.length >= 8 ? (console.error("Screenshot mode: 8 photos already wait on Save photo"), vV(VV("screenshotMode:saveWaitingFirst"))) : nU([...pU, xV])
          }
        },
        kV = eV => {
          console.error("Screenshot mode: the photo wasn't saved", eV), vV(VV("screenshotMode:failed"))
        };
      return (0, wV.jsxs)("div", {
        className: "ScreenshotModeOverlay",
        children: [(0, wV.jsx)("div", {
          className: "ScreenshotModeViewfinder",
          "aria-hidden": !0
        }), (0, wV.jsx)("div", {
          className: "ScreenshotModeCentre",
          "aria-hidden": !0
        }), JV > 0 && (0, wV.jsx)("div", {
          className: "ScreenshotModeFlash"
        }, JV), (0, wV.jsx)("button", {
          type: "button",
          className: "ScreenshotModeButton ScreenshotModeBack",
          "aria-label": VV("screenshotMode:back"),
          onClick: JU.e,
          children: (0, wV.jsx)(PV.b, {
            name: "arrow-left"
          })
        }), (0, wV.jsx)("button", {
          type: "button",
          className: "ScreenshotModeButton ScreenshotModeShutter",
          "aria-label": VV("screenshotMode:takePhoto"),
          "aria-busy": eV,
          onClick: () => {
            (async () => {
              if (!eV) {
                xV(!0), vV(null);
                try {
                  const VV = await (0, JU.h)();
                  UV((VV => VV + 1)), rV(await (0, UU.f)(VV), VV)
                } catch (VV) {
                  kV(VV)
                } finally {
                  xV(!1)
                }
              }
            })()
          },
          children: (0, wV.jsx)(PV.b, {
            name: "camera-alt"
          })
        }), null !== yV ? (0, wV.jsx)("div", {
          className: "ScreenshotModeNote",
          role: "status",
          children: yV
        }) : QV.length > 0 && (0, wV.jsxs)("button", {
          type: "button",
          className: "ScreenshotModeNote ScreenshotModeSaveNote",
          onClick: () => {
            if (ZV.current) return;
            ZV.current = !0;
            const [VV] = pU;
            nU(pU.slice(1));
            const eV = eV => {
              console.warn("Screenshot mode: downloading a photo the share sheet didn't take", eV), (0, YU.c)(VV, VV.name), rV("saved", VV)
            };
            (0, UU.h)(VV).then((xV => {
              "needsTap" === xV ? eV(xV) : rV(xV, VV)
            }), eV).catch(kV).finally((() => {
              ZV.current = !1
            }))
          },
          children: [(0, wV.jsx)(PV.b, {
            name: "image"
          }), VV("screenshotMode:savePhoto"), QV.length > 1 && ` (${QV.length})`]
        })]
      })
    }
    var vU = xV(5261),
      rU = xV(5333);
    const kU = (0, YV.forwardRef)((function(VV, eV) {
        let {
          text: xV,
          className: JV,
          children: YV
        } = VV;
        return xV.hasText ? (0, wV.jsx)("div", {
          ref: eV,
          className: yV()("HudTextPanel", JV, {
            NoBackground: !xV.showBackground
          }),
          children: null !== YV && void 0 !== YV ? YV : (0, wV.jsx)(nV.b, {
            text: xV.content
          })
        }) : null
      })),
      bU = (0, YV.memo)((function() {
        const VV = (0, tV.m)("middleTextTop"),
          [eV, xV] = (0, YV.useState)(null),
          JV = (0, HJ.i)(eV);
        return VV.hasText ? (0, wV.jsx)("div", {
          className: yV()("MiddleTextTopContainer", {
            MiddleTextTopBelow: JV
          }),
          children: (0, wV.jsx)(kU, {
            ref: xV,
            className: "MiddleTextTop",
            text: VV
          })
        }) : null
      })),
      EU = (0, YV.memo)((function() {
        const VV = (0, tV.c)();
        return (0, wV.jsx)(wV.Fragment, {
          children: VV.map(((VV, eV) => (0, wV.jsx)(kU, {
            className: "HeaderChip",
            text: VV
          }, eV)))
        })
      }));
    var BU = xV(3046),
      jU = xV(5074);
    const qU = (0, YV.memo)((function() {
      const {
        t: VV
      } = (0, fV.A)(), [eV, xV] = (0, YV.useState)(!1), JV = (0, YV.useRef)(!1), UV = function(VV) {
        let {
          gameNameWithVariation: eV,
          lobbyName: xV
        } = VV;
        if ((0, gY.l)(eV)) return tU;
        if ((0, DY.F)(xV)) return FU;
        return null
      }((0, iV.h)("connectedGame"));
      if (!UV || eV) return null;
      const yV = jU.e[UV.target];
      return (0, wV.jsx)(FV.d, {
        tooltipInner: (0, wV.jsx)("div", {
          children: VV(yV.reportButtonTooltip)
        }),
        children: (0, wV.jsx)("div", {
          children: (0, wV.jsx)(cx.I, {
            onClick: () => {
              JV.current || (JV.current = !0, (0, jU.f)(UV.reportPolicyIds, yV).then((VV => {
                null !== VV && void 0 !== VV && VV.selectedPolicyId && (kV.gameBridge.send("reportLobbyOrGame", {
                  target: UV.target,
                  Fn: VV.selectedPolicyId,
                  details: VV.Tn
                }), xV(!0))
              })).finally((() => {
                JV.current = !1
              })))
            }
          })
        })
      })
    }));
    const tU = {
        target: "customGame",
        reportPolicyIds: BU.i
      },
      FU = {
        target: "lobby",
        reportPolicyIds: BU.k
      };
    var TU = xV(2588),
      PU = xV(1159),
      AU = xV(9408),
      NU = xV(38119),
      XU = xV(38127),
      MU = xV(38134),
      zU = xV(38140),
      GU = xV(38125);
    let WU = !1;
    async function RU(VV, eV) {
      var xV, JV;
      const {
        files: YV
      } = eV, UV = YV.replayKey();
      if (null === UV) return "none";
      if (WU) throw new Error(GU.b.saveBusy.text);
      const yV = null !== (xV = null === (JV = YV.saveRefusal) || void 0 === JV ? void 0 : JV.call(YV)) && void 0 !== xV ? xV : null;
      if (null !== yV) throw new Error(yV);
      WU = !0;
      try {
        return await async function(VV, eV, xV) {
          const {
            files: JV
          } = eV, YV = () => JV.replayKey() === xV, UV = (VV, eV) => {
            YV() && JV.markSaved(VV, eV)
          };
          let yV = null;
          if (eV.pickerSupported()) {
            try {
              if (yV = await eV.chooseFile(VV ? null : JV.fileHandle()), null === yV) return "pJ"
            } catch (QV) {
              eV.onFallback(QV)
            }
            if (!YV()) throw new Error(GU.b.saveClosed.text)
          }
          const pV = await JV.encode();
          if (null === pV) {
            if (null !== yV) throw new Error(GU.b.saveClosed.text);
            return "none"
          }
          if (null !== yV) try {
            return await eV.write(yV, pV), UV(yV), "written"
          } catch (QV) {
            eV.onFallback(QV)
          }
          return UV(null, eV.download(pV)), "downloaded"
        }(VV, eV, UV)
      } finally {
        WU = !1
      }
    }
    var gU = xV(38165),
      DU = xV(5020);
    const iU = [1, 2, 4, 8, 16, 32, 64];

    function CU(VV, eV) {
      return Math.max(0, Math.min(VV, eV))
    }

    function aU(VV, eV, xV) {
      return xV <= eV ? 0 : (VV - eV) / (xV - eV) * 100
    }

    function oU(VV, eV, xV) {
      const JV = xV - eV;
      return Math.round(eV + VV / 100 * JV)
    }

    function cU(VV, eV) {
      const xV = Math.floor(VV / eV / 60),
        JV = Math.floor(VV / eV % 60),
        YV = VV % eV;
      return `${xV.toString().padStart(2,"0")}:${JV.toString().padStart(2,"0")}:${YV.toString().padStart(2,"0")}`
    }

    function hU(VV) {
      return Number.isInteger(VV) || iU.includes(VV) ? `${Math.round(VV)}\xd7` : `${VV.toFixed(1)}\xd7`
    }

    function lU(VV, eV) {
      const xV = iU.indexOf(VV);
      if (-1 !== xV) return "in" === eV ? iU[Math.min(xV + 1, iU.length - 1)] : iU[Math.max(xV - 1, 0)];
      if ("in" === eV) {
        for (const eV of iU)
          if (eV >= VV) return eV;
        return VV
      }
      for (let JV = iU.length - 1; JV >= 0; JV--)
        if (iU[JV] <= VV) return iU[JV];
      return iU[0]
    }

    function LU(VV, eV) {
      const xV = eV.getBoundingClientRect();
      if (xV.width <= 0) return 0;
      const JV = (VV - xV.left) / xV.width * 100;
      return Math.max(0, Math.min(100, JV))
    }

    function fU(VV, eV) {
      return eV <= 0 ? 0 : VV / eV * 100
    }

    function mU(VV, eV, xV) {
      const JV = [];
      let YV = Math.ceil(VV / xV) * xV;
      for (; YV <= eV;) JV.push(YV), YV += xV;
      return JV
    }
    var KU = xV(38167);
    const HU = [{
        label: "Linear",
        easing: KU.j
      }, {
        label: "Ease",
        easing: [.25, .1, .25, 1]
      }, {
        label: "Ease In",
        easing: KU.d
      }, {
        label: "Ease Out",
        easing: KU.h
      }, {
        label: "Ease In Out",
        easing: KU.c
      }],
      uU = 200,
      sU = 150;

    function SU(VV) {
      const eV = VV => Number(VV.toFixed(3)).toString();
      return `cubic-bezier(${eV(VV[0])}, ${eV(VV[1])}, ${eV(VV[2])}, ${eV(VV[3])})`
    }

    function IU(VV, eV) {
      return {
        cx: 25 + VV * sU,
        cy: 25 + (1 - eV) * sU
      }
    }

    function dU(VV, eV, xV) {
      const JV = VV - xV.left,
        YV = eV - xV.top;
      return {
        x: sx.b.clamp((JV - 25) / sU, 0, 1),
        y: sx.b.clamp(1 - (YV - 25) / sU, -1, 2)
      }
    }

    function OU(VV, eV, xV, JV, YV) {
      return {
        x: (0, KU.n)(VV, xV, YV),
        y: (0, KU.n)(eV, JV, YV)
      }
    }
    const Vy = (0, YV.memo)((function(VV) {
      let {
        value: eV,
        onChange: xV
      } = VV;
      const JV = (0, YV.useRef)(null),
        UV = (0, YV.useRef)(null),
        [yV, pV] = (0, YV.useState)(null),
        QV = (0, YV.useCallback)((() => {
          const VV = JV.current;
          if (!VV) return;
          const xV = VV.getContext("2d");
          if (!xV) return;
          const YV = window.devicePixelRatio || 1;
          VV.width = uU * YV, VV.height = uU * YV, xV.setTransform(YV, 0, 0, YV, 0, 0), xV.clearRect(0, 0, uU, uU), xV.fillStyle = "rgba(38, 52, 93, 0.85)", xV.fillRect(0, 0, uU, uU), xV.beginPath();
          const UV = IU(0, 0),
            pV = IU(1, 1);
          xV.moveTo(UV.cx, UV.cy), xV.lineTo(pV.cx, pV.cy), xV.strokeStyle = "rgba(164, 164, 164, 0.35)", xV.setLineDash([3, 3]), xV.stroke(), xV.setLineDash([]);
          const [QV, nV, wV, ZV] = eV, vV = IU(QV, nV), rV = IU(wV, ZV);
          xV.strokeStyle = "rgba(252, 211, 115, 0.55)", xV.lineWidth = 1.5, xV.beginPath(), xV.moveTo(UV.cx, UV.cy), xV.lineTo(vV.cx, vV.cy), xV.moveTo(pV.cx, pV.cy), xV.lineTo(rV.cx, rV.cy), xV.stroke(), xV.strokeStyle = "#fcd373", xV.lineWidth = 2, xV.beginPath();
          for (let eV = 0; eV <= 50; eV++) {
            const VV = OU(QV, nV, wV, ZV, eV / 50),
              JV = IU(VV.x, VV.y);
            0 === eV ? xV.moveTo(JV.cx, JV.cy) : xV.lineTo(JV.cx, JV.cy)
          }
          xV.stroke();
          const kV = (VV, eV, JV) => {
            xV.beginPath(), xV.arc(VV, eV, JV ? 6 : 5, 0, 2 * Math.PI), xV.fillStyle = JV ? "#ffb914" : "#fcd373", xV.fill(), xV.strokeStyle = "#1a1f2e", xV.lineWidth = 1.5, xV.stroke()
          };
          kV(vV.cx, vV.cy, "p1" === yV), kV(rV.cx, rV.cy, "p2" === yV)
        }), [yV, eV]);
      (0, YV.useEffect)((() => {
        QV()
      }), [QV]);
      const nV = (0, YV.useCallback)(((VV, YV) => {
          const yV = JV.current,
            pV = UV.current;
          if (!yV || !pV) return;
          const QV = yV.getBoundingClientRect(),
            {
              x: nV,
              y: wV
            } = dU(VV, YV, QV);
          xV("p1" === pV ? [nV, wV, eV[2], eV[3]] : [eV[0], eV[1], nV, wV])
        }), [xV, eV]),
        ZV = (0, YV.useCallback)((VV => {
          const xV = JV.current;
          if (!xV) return;
          const YV = xV.getBoundingClientRect();
          let {
            x: yV,
            y: QV
          } = dU(VV.clientX, VV.clientY, YV);
          yV = sx.b.clamp(yV, 0, 1), QV = sx.b.clamp(QV, 0, 1);
          const [wV, ZV, vV, rV] = eV.map((VV => sx.b.clamp(VV, 0, 1))), kV = Math.hypot(yV - wV, QV - ZV), bV = Math.hypot(yV - vV, QV - rV), EV = kV <= bV ? "p1" : "p2";
          ("p1" === EV ? kV : bV) > .12 || (UV.current = EV, pV(EV), xV.setPointerCapture(VV.pointerId), nV(VV.clientX, VV.clientY))
        }), [nV, eV]),
        vV = (0, YV.useCallback)((VV => {
          UV.current && nV(VV.clientX, VV.clientY)
        }), [nV]),
        rV = (0, YV.useCallback)((VV => {
          UV.current = null, pV(null), VV.currentTarget.hasPointerCapture(VV.pointerId) && VV.currentTarget.releasePointerCapture(VV.pointerId)
        }), []);
      return (0, wV.jsxs)("div", {
        className: "CubicBezierEasingEditor",
        children: [(0, wV.jsx)("canvas", {
          ref: JV,
          className: "CubicBezierEasingEditorCanvas",
          style: {
            width: uU,
            height: uU
          },
          onPointerDown: ZV,
          onPointerMove: vV,
          onPointerUp: rV,
          onPointerCancel: rV
        }), (0, wV.jsx)("span", {
          className: "CubicBezierEasingEditorReadout",
          children: SU(eV)
        })]
      })
    }));
    var ey = xV(1775),
      xy = xV(1764);
    const Jy = 12;

    function Yy(VV) {
      return {
        left: VV.left + VV.width / 2,
        top: VV.top - 8
      }
    }

    function Uy(VV, eV) {
      const [xV, JV] = (0, YV.useState)(null);
      return (0, YV.useLayoutEffect)((() => {
        const xV = VV.current;
        if (!xV) return;
        const {
          width: YV,
          height: UV
        } = xV.getBoundingClientRect();
        JV(function(VV, eV, xV) {
          const JV = window.innerWidth,
            YV = window.innerHeight,
            UV = eV / 2;
          let yV = VV.left + VV.width / 2;
          yV = Math.max(Jy + UV, Math.min(yV, JV - Jy - UV));
          const pV = VV.top - 8 - Jy,
            QV = YV - VV.bottom - 8 - Jy,
            nV = pV < xV && QV >= pV;
          let wV;
          nV ? (wV = VV.bottom + 8, wV + xV > YV - Jy && (wV = YV - Jy - xV), wV = Math.max(Jy, wV)) : (wV = VV.top - 8, wV - xV < Jy && (wV = Jy + xV));
          return {
            left: yV,
            top: wV,
            placeBelow: nV
          }
        }(eV, YV, UV))
      }), [eV, VV]), xV
    }

    function yy(VV, eV, xV) {
      (0, YV.useEffect)((() => (0, xy.d)("pointerdown", (JV => {
        var YV, UV;
        const yV = JV.target;
        yV instanceof Node && (null !== (YV = VV.current) && void 0 !== YV && YV.contains(yV) || null !== xV && void 0 !== xV && null !== (UV = xV.current) && void 0 !== UV && UV.contains(yV) || (0, ey.p)(yV) || eV())
      }))), [xV, eV, VV])
    }

    function py(VV) {
      let {
        label: eV,
        value: xV,
        onChange: JV
      } = VV;
      return (0, wV.jsxs)("div", {
        className: "ReplayKeyframePopoverVec3",
        children: [(0, wV.jsx)("span", {
          className: "ReplayKeyframePopoverVec3Label",
          children: eV
        }), (0, wV.jsx)("div", {
          className: "ReplayKeyframePopoverVec3Inputs",
          children: ["X", "Y", "Z"].map(((VV, eV) => (0, wV.jsxs)("label", {
            className: "ReplayKeyframePopoverAxis",
            children: [(0, wV.jsx)("span", {
              children: VV
            }), (0, wV.jsx)("input", {
              type: "number",
              step: "any",
              value: xV[eV],
              onChange: VV => {
                const YV = Number.parseFloat(VV.target.value);
                if (Number.isNaN(YV)) return;
                const UV = [xV[0], xV[1], xV[2]];
                UV[eV] = YV, JV(UV)
              }
            })]
          }, VV)))
        })]
      })
    }
    const Qy = (0, YV.memo)((function(VV) {
        var eV, xV, JV;
        let {
          keyframe: UV,
          anchor: pV,
          hasOutgoingSegment: QV,
          onClose: nV,
          onApply: ZV,
          onDelete: vV,
          onUseCurrentCamera: rV
        } = VV;
        const kV = (0, YV.useRef)(null),
          bV = Uy(kV, pV.rect),
          [EV, BV] = (0, YV.useState)((() => [UV.position[0], UV.position[1], UV.position[2]])),
          [jV, qV] = (0, YV.useState)((() => [UV.direction[0], UV.direction[1], UV.direction[2]])),
          [tV, FV] = (0, YV.useState)((() => UV.easing));
        (0, YV.useEffect)((() => {
          BV([UV.position[0], UV.position[1], UV.position[2]]), qV([UV.direction[0], UV.direction[1], UV.direction[2]]), FV(UV.easing)
        }), [UV]), yy(kV, nV);
        const TV = (0, YV.useCallback)((() => {
            ZV({
              iZ: UV.iZ,
              position: EV,
              direction: jV,
              easing: tV
            }), nV()
          }), [jV, tV, UV.iZ, ZV, nV, EV]),
          PV = (0, YV.useCallback)((() => {
            vV(UV.iZ), nV()
          }), [UV.iZ, vV, nV]),
          AV = (0, YV.useCallback)((() => {
            const VV = rV();
            VV && (BV([VV.position[0], VV.position[1], VV.position[2]]), qV([VV.direction[0], VV.direction[1], VV.direction[2]]))
          }), [rV]),
          NV = Yy(pV.rect);
        return (0, wV.jsxs)("div", {
          ref: kV,
          className: yV()("ReplayViewerPopover ReplayKeyframePopover", {
            Below: null !== (eV = null === bV || void 0 === bV ? void 0 : bV.placeBelow) && void 0 !== eV && eV,
            Positioned: null !== bV
          }),
          style: {
            left: `${null!==(xV=null===bV||void 0===bV?void 0:bV.left)&&void 0!==xV?xV:NV.left}px`,
            top: `${null!==(JV=null===bV||void 0===bV?void 0:bV.top)&&void 0!==JV?JV:NV.top}px`
          },
          onPointerDown: VV => {
            VV.stopPropagation()
          },
          children: [(0, wV.jsxs)("div", {
            className: "ReplayKeyframePopoverHeader",
            children: [(0, wV.jsx)("span", {
              className: "ReplayKeyframePopoverTitle",
              children: "Camera keyframe"
            }), (0, wV.jsxs)("span", {
              className: "ReplayKeyframePopoverTick",
              children: ["Tick ", pV.iZ]
            })]
          }), (0, wV.jsx)(py, {
            label: "Position",
            value: EV,
            onChange: BV
          }), (0, wV.jsx)(py, {
            label: "Direction",
            value: jV,
            onChange: qV
          }), QV && (0, wV.jsxs)("div", {
            className: "ReplayKeyframePopoverEasing",
            children: [(0, wV.jsx)("span", {
              className: "ReplayKeyframePopoverEasingLabel",
              children: "Easing to next"
            }), (0, wV.jsx)("div", {
              className: "ReplayKeyframePopoverEasingPresets",
              children: HU.map((VV => {
                const eV = (xV = tV, JV = VV.easing, xV[0] === JV[0] && xV[1] === JV[1] && xV[2] === JV[2] && xV[3] === JV[3]);
                var xV, JV;
                return (0, wV.jsx)(cx.M, {
                  className: yV()("ReplayKeyframePopoverPreset", {
                    Active: eV
                  }),
                  onClick: () => {
                    FV(VV.easing)
                  },
                  children: VV.label
                }, VV.label)
              }))
            }), (0, wV.jsx)(Vy, {
              value: tV,
              onChange: FV
            })]
          }), (0, wV.jsxs)("div", {
            className: "ReplayKeyframePopoverActions",
            children: [(0, wV.jsx)(cx.f, {
              className: "ReplayViewerCompactButton",
              onClick: AV,
              children: "Use current view"
            }), (0, wV.jsx)(cx.m, {
              className: "ReplayViewerCompactButton",
              onClick: TV,
              children: "Apply"
            }), (0, wV.jsx)(cx.E, {
              className: "ReplayViewerCompactButton",
              onClick: PV,
              children: "Delete"
            })]
          })]
        })
      })),
      ny = (0, YV.memo)((function(VV) {
        var eV, xV, JV;
        let {
          anchor: UV,
          hasPlaybackMark: pV,
          onClose: QV,
          onMark: nV,
          onZoom: ZV,
          onCrop: vV,
          onDeleteKeyframes: rV,
          onClearMark: kV
        } = VV;
        const bV = (0, YV.useRef)(null),
          EV = Uy(bV, UV.rect),
          BV = Yy(UV.rect),
          jV = {
            startTick: UV.startTick,
            endTick: UV.endTick
          },
          qV = UV.endTick > UV.startTick;
        return yy(bV, QV), (0, wV.jsx)("div", {
          ref: bV,
          className: yV()("ReplayViewerPopover ReplayTimelineSelectionPopover", {
            Below: null !== (eV = null === EV || void 0 === EV ? void 0 : EV.placeBelow) && void 0 !== eV && eV,
            Positioned: null !== EV
          }),
          style: {
            left: `${null!==(xV=null===EV||void 0===EV?void 0:EV.left)&&void 0!==xV?xV:BV.left}px`,
            top: `${null!==(JV=null===EV||void 0===EV?void 0:EV.top)&&void 0!==JV?JV:BV.top}px`
          },
          onPointerDown: VV => {
            VV.stopPropagation()
          },
          children: (0, wV.jsxs)("div", {
            className: "ReplayTimelineSelectionPopoverActions",
            children: [(0, wV.jsx)(cx.m, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                nV(jV)
              },
              disabled: !qV,
              children: (0, wV.jsx)("span", {
                children: " Play range "
              })
            }), (0, wV.jsx)(cx.f, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                ZV(jV)
              },
              children: (0, wV.jsx)("span", {
                children: " Zoom "
              })
            }), (0, wV.jsx)(cx.M, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                vV(jV)
              },
              disabled: !qV,
              children: (0, wV.jsx)("span", {
                children: " Crop "
              })
            }), (0, wV.jsx)(cx.M, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                rV(jV)
              },
              children: (0, wV.jsx)("span", {
                children: " Delete all keyframes "
              })
            }), pV && (0, wV.jsx)(cx.M, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                kV()
              },
              children: (0, wV.jsx)("span", {
                children: " Clear range "
              })
            })]
          })
        })
      })),
      wy = (0, YV.memo)((function(VV) {
        var eV, xV;
        let {
          maxTick: JV,
          displayTick: UV,
          KD: pV,
          cameraKeyframes: QV,
          playbackMark: nV,
          onSeek: ZV,
          onPause: vV,
          onScrubTickChange: rV,
          onMoveCameraKeyframe: kV,
          onUpdateCameraKeyframe: bV,
          onDeleteCameraKeyframe: EV,
          onUseCurrentCamera: BV,
          onMarkRange: jV,
          onCropRange: qV,
          onDeleteKeyframesInRange: tV,
          onClearMark: FV,
          zoomLevel: TV,
          onZoomLevelChange: PV
        } = VV;
        const AV = (0, YV.useRef)(null),
          NV = (0, YV.useRef)(null),
          XV = (0, YV.useRef)(!1),
          MV = (0, YV.useRef)(!1),
          zV = (0, YV.useRef)(TV),
          GV = (0, YV.useRef)(null),
          WV = (0, YV.useRef)(null),
          RV = (0, YV.useRef)(null),
          gV = (0, YV.useRef)(null),
          [DV, iV] = (0, YV.useState)(null),
          [CV, aV] = (0, YV.useState)(UV),
          [oV, cV] = (0, YV.useState)(null),
          [hV, lV] = (0, YV.useState)(null),
          [LV, fV] = (0, YV.useState)(null),
          [mV, KV] = (0, YV.useState)(null),
          HV = (0, YV.useMemo)((() => QV.map((VV => VV.iZ))), [QV]),
          uV = null !== DV && void 0 !== DV ? DV : UV,
          {
            viewStart: sV,
            viewEnd: SV
          } = (0, YV.useMemo)((() => function(VV) {
            const eV = VV.maxTick + 1,
              xV = Math.max(1, Math.ceil(eV / VV.zoomLevel)),
              JV = Math.floor(xV / 2);
            let YV = VV.centerTick - JV;
            return YV = Math.max(0, Math.min(YV, VV.maxTick - xV + 1)), {
              viewStart: YV,
              viewEnd: Math.min(VV.maxTick, YV + xV - 1)
            }
          }({
            maxTick: JV,
            zoomLevel: TV,
            centerTick: CV
          })), [JV, TV, CV]);
        (0, YV.useEffect)((() => {
          if (null !== DV || null !== WV.current || null !== RV.current || null !== gV.current) return;
          if (XV.current) return void(XV.current = !1);
          if (MV.current) return void(MV.current = !1);
          const VV = zV.current !== TV;
          zV.current = TV, VV && aV(UV)
        }), [TV, UV, DV]);
        const IV = (0, YV.useCallback)((VV => {
            let eV = CU(VV, JV);
            return nV && (eV = Math.max(nV.inTick, Math.min(eV, nV.outTick))), eV
          }), [JV, nV]),
          dV = (0, YV.useCallback)(((VV, eV) => {
            const xV = IV(VV);
            ZV(xV), eV && aV(xV)
          }), [IV, ZV]),
          OV = (0, YV.useCallback)(((VV, eV) => {
            const xV = IV(VV);
            iV(xV), rV(xV), dV(xV, eV)
          }), [IV, dV, rV]),
          Ve = (0, YV.useCallback)((() => {
            iV((VV => (null !== VV && aV(VV), null))), rV(null)
          }), [rV]),
          ee = (0, YV.useCallback)((() => {
            fV(null), KV(null)
          }), []),
          xe = (0, YV.useCallback)((VV => {
            const eV = AV.current;
            if (!eV) return 0;
            return CU(oU(LU(VV, eV), sV, SV), JV)
          }), [JV, SV, sV]),
          Je = (0, YV.useCallback)((VV => {
            const eV = NV.current;
            if (!eV) return 0;
            return CU(oU(LU(VV, eV), 0, JV), JV)
          }), [JV]),
          Ye = (0, YV.useMemo)((() => {
            if (!oV) return [...HV];
            const VV = HV.filter((VV => VV !== oV.fromTick));
            return VV.push(oV.previewTick), VV.sort(((VV, eV) => VV - eV)), VV
          }), [HV, oV]),
          Ue = (0, YV.useMemo)((() => {
            var VV;
            return hV && null !== (VV = QV.find((VV => VV.iZ === hV.iZ))) && void 0 !== VV ? VV : null
          }), [QV, hV]),
          ye = (0, YV.useMemo)((() => !!Ue && QV.some((VV => VV.iZ > Ue.iZ))), [QV, Ue]);
        (0, YV.useEffect)((() => {
          hV && !Ue && lV(null)
        }), [hV, Ue]), (0, YV.useEffect)((() => {
          if (!mV) return () => {};
          const VV = VV => {
            "Escape" === VV.key && ee()
          };
          return window.addEventListener("keydown", VV), () => {
            window.removeEventListener("keydown", VV)
          }
        }), [ee, mV]);
        const pe = (0, YV.useCallback)(((VV, eV) => {
            ee(), vV(), ZV(VV, {
              ignorePlaybackMark: !0
            }), lV({
              iZ: VV,
              rect: eV.getBoundingClientRect()
            })
          }), [ee, vV, ZV]),
          Qe = (0, YV.useCallback)(((VV, eV) => xV => {
            0 === xV.button && (xV.stopPropagation(), lV(null), ee(), vV(), GV.current = {
              fromTick: VV,
              startX: xV.clientX,
              startY: xV.clientY,
              didDrag: !1,
              track: eV
            }, cV({
              fromTick: VV,
              previewTick: VV,
              track: eV
            }), xV.currentTarget.setPointerCapture(xV.pointerId))
          }), [ee, vV]),
          ne = (0, YV.useCallback)((VV => {
            if (!oV) return;
            VV.stopPropagation();
            const eV = GV.current;
            if (eV && !eV.didDrag) {
              const xV = VV.clientX - eV.startX,
                JV = VV.clientY - eV.startY;
              Math.hypot(xV, JV) > 5 && (eV.didDrag = !0)
            }
            const xV = "detail" === oV.track ? xe(VV.clientX) : Je(VV.clientX);
            xV !== oV.previewTick && cV({
              ...oV,
              previewTick: xV
            })
          }), [oV, xe, Je]),
          we = (0, YV.useCallback)((VV => {
            if (!oV) return;
            VV.stopPropagation();
            const eV = GV.current,
              xV = "detail" === oV.track ? xe(VV.clientX) : Je(VV.clientX);
            eV && !eV.didDrag ? pe(eV.fromTick, VV.currentTarget) : xV !== oV.fromTick && kV(oV.fromTick, xV), cV(null), GV.current = null, VV.currentTarget.releasePointerCapture(VV.pointerId)
          }), [oV, kV, pe, xe, Je]),
          Ze = (0, YV.useCallback)((VV => {
            if (0 !== VV.button) return;
            lV(null), vV();
            const eV = xe(VV.clientX);
            WV.current = {
              pointerId: VV.pointerId,
              startX: VV.clientX,
              startY: VV.clientY,
              startTick: eV,
              currentTick: eV,
              didSelect: !1
            }, fV(null), KV(null), VV.currentTarget.setPointerCapture(VV.pointerId)
          }), [vV, xe]),
          ve = (0, YV.useCallback)((VV => {
            const eV = WV.current;
            if (!eV || eV.pointerId !== VV.pointerId) return;
            const xV = xe(VV.clientX);
            if (eV.currentTick = xV, !eV.didSelect) {
              const xV = VV.clientX - eV.startX,
                JV = VV.clientY - eV.startY;
              if (Math.hypot(xV, JV) <= 5) return;
              eV.didSelect = !0
            }
            const JV = Math.min(eV.startTick, xV),
              YV = Math.max(eV.startTick, xV);
            fV({
              startTick: JV,
              endTick: YV
            })
          }), [xe]),
          re = (0, YV.useCallback)((VV => {
            const eV = WV.current;
            if (!eV || eV.pointerId !== VV.pointerId) return;
            if (WV.current = null, VV.currentTarget.releasePointerCapture(VV.pointerId), !eV.didSelect) return ee(), void dV(eV.startTick, !0);
            const xV = xe(VV.clientX),
              JV = Math.min(eV.startTick, xV),
              YV = Math.max(eV.startTick, xV),
              UV = {
                startTick: JV,
                endTick: YV
              };
            fV(UV);
            const yV = AV.current;
            if (!yV) return;
            const pV = yV.getBoundingClientRect(),
              QV = aU(JV, sV, SV) / 100,
              nV = aU(YV, sV, SV) / 100,
              wV = pV.left + QV * pV.width,
              ZV = pV.left + nV * pV.width;
            KV({
              ...UV,
              rect: new DOMRect(wV, pV.top, Math.max(ZV - wV, 1), pV.height)
            })
          }), [ee, dV, xe, SV, sV]),
          ke = (0, YV.useCallback)((VV => eV => {
            if (0 !== eV.button) return;
            eV.stopPropagation(), lV(null), ee(), vV(), RV.current = {
              pointerId: eV.pointerId,
              track: VV
            }, eV.currentTarget.setPointerCapture(eV.pointerId);
            const xV = "detail" === VV ? xe(eV.clientX) : Je(eV.clientX);
            OV(xV, !1)
          }), [ee, vV, OV, xe, Je]),
          be = (0, YV.useCallback)((VV => {
            const eV = RV.current;
            if (!eV || eV.pointerId !== VV.pointerId) return;
            VV.stopPropagation();
            const xV = "detail" === eV.track ? xe(VV.clientX) : Je(VV.clientX);
            OV(xV, !1)
          }), [OV, xe, Je]),
          Ee = (0, YV.useCallback)((VV => {
            const eV = RV.current;
            eV && eV.pointerId === VV.pointerId && (VV.stopPropagation(), RV.current = null, VV.currentTarget.releasePointerCapture(VV.pointerId), Ve())
          }), [Ve]),
          Be = (0, YV.useCallback)((VV => {
            0 === VV.button && (ee(), vV(), gV.current = {
              pointerId: VV.pointerId
            }, VV.currentTarget.setPointerCapture(VV.pointerId), OV(Je(VV.clientX), !0))
          }), [ee, vV, OV, Je]),
          je = (0, YV.useCallback)((VV => {
            const eV = gV.current;
            eV && eV.pointerId === VV.pointerId && OV(Je(VV.clientX), !0)
          }), [OV, Je]),
          qe = (0, YV.useCallback)((VV => {
            const eV = gV.current;
            eV && eV.pointerId === VV.pointerId && (gV.current = null, VV.currentTarget.releasePointerCapture(VV.pointerId), Ve())
          }), [Ve]),
          te = (0, YV.useCallback)((VV => {
            const eV = Math.max(1, VV.endTick - VV.startTick + 1),
              xV = JV + 1,
              YV = xV / eV,
              UV = Math.max(1, Math.ceil(xV / YV)),
              yV = VV.startTick + Math.floor((UV - 1) / 2);
            MV.current = !0, zV.current = YV, aV(CU(yV, JV)), PV(YV), ee()
          }), [ee, JV, PV]),
          Fe = (0, YV.useCallback)((VV => {
            jV(VV), ee()
          }), [ee, jV]),
          Te = (0, YV.useCallback)((VV => {
            qV(VV), ee()
          }), [ee, qV]),
          Pe = (0, YV.useCallback)((VV => {
            tV(VV), ee()
          }), [ee, tV]),
          Ae = (0, YV.useCallback)((() => {
            FV(), ee()
          }), [ee, FV]);
        (0, YV.useEffect)((() => {
          const VV = AV.current;
          if (!VV) return () => {};
          const eV = eV => {
            eV.preventDefault();
            const xV = CU(oU(LU(eV.clientX, VV), sV, SV), JV),
              YV = eV.deltaY < 0 ? "in" : "out",
              UV = lU(TV, YV);
            UV !== TV && (XV.current = !0, aV(xV), PV(UV))
          };
          return VV.addEventListener("wheel", eV, {
            passive: !1
          }), () => {
            VV.removeEventListener("wheel", eV)
          }
        }), [JV, PV, SV, sV, TV]);
        const Ne = aU(uV, sV, SV),
          Xe = fU(uV, JV),
          Me = fU(sV, JV),
          ze = JV > 0 ? fU(SV, JV) : 100,
          Ge = null !== nV,
          We = null !== (eV = null === nV || void 0 === nV ? void 0 : nV.inTick) && void 0 !== eV ? eV : 0,
          Re = null !== (xV = null === nV || void 0 === nV ? void 0 : nV.outTick) && void 0 !== xV ? xV : JV,
          ge = fU(We, JV),
          De = Math.max(fU(Re, JV) - ge, 0),
          ie = aU(Math.max(We, sV), sV, SV),
          Ce = aU(Math.min(Re, SV), sV, SV),
          ae = Math.max(Ce - ie, 0),
          oe = Ge && Re >= sV && We <= SV,
          ce = aU(We, sV, SV),
          he = aU(Re, sV, SV),
          le = Ge && We >= sV && We <= SV,
          Le = Ge && Re >= sV && Re <= SV,
          fe = fU(We, JV),
          me = fU(Re, JV),
          Ke = null !== LV && void 0 !== LV ? LV : mV ? {
            startTick: mV.startTick,
            endTick: mV.endTick
          } : null,
          He = Ke ? aU(Math.max(Ke.startTick, sV), sV, SV) : 0,
          ue = Ke ? aU(Math.min(Ke.endTick, SV), sV, SV) : 0,
          se = Math.max(ue - He, 0),
          Se = null !== Ke && Ke.endTick >= sV && Ke.startTick <= SV,
          Ie = (0, YV.useMemo)((() => mU(0, JV, pV)), [JV, pV]),
          de = (0, YV.useMemo)((() => mU(sV, SV, pV)), [sV, SV, pV]),
          Oe = (0, YV.useMemo)((() => Ye.filter((VV => VV >= sV && VV <= SV))), [Ye, SV, sV]),
          Vx = (0, YV.useCallback)(((VV, eV, xV) => {
            const YV = "detail" === eV ? aU(VV, sV, SV) : fU(VV, JV),
              UV = null !== oV && xV === oV.fromTick,
              pV = null !== hV && hV.iZ === xV;
            return (0, wV.jsx)("button", {
              type: "button",
              className: yV()("ReplayTimelineCameraKeyframeMarker", "detail" === eV ? "Detail" : "Overview", {
                Dragging: UV,
                Selected: pV
              }),
              style: {
                left: `${YV}%`
              },
              onPointerDown: Qe(xV, eV),
              onPointerMove: ne,
              onPointerUp: we,
              onPointerCancel: we,
              "aria-label": `Camera keyframe at tick ${xV}`
            }, `cam-${eV}-${xV}`)
          }), [Qe, hV, we, oV, JV, ne, SV, sV]),
          ex = (0, YV.useCallback)((VV => oV && VV === oV.previewTick ? oV.fromTick : VV), [oV]);
        return JV <= 0 ? null : (0, wV.jsxs)("div", {
          className: "ReplayTimeline",
          children: [hV && Ue && (0, xU.createPortal)((0, wV.jsx)(Qy, {
            keyframe: Ue,
            anchor: hV,
            hasOutgoingSegment: ye,
            onClose: () => {
              lV(null)
            },
            onApply: bV,
            onDelete: EV,
            onUseCurrentCamera: BV
          }), document.body), mV && (0, xU.createPortal)((0, wV.jsx)(ny, {
            anchor: mV,
            hasPlaybackMark: Ge,
            onClose: ee,
            onMark: Fe,
            onZoom: te,
            onCrop: Te,
            onDeleteKeyframes: Pe,
            onClearMark: Ae
          }), document.body), (0, wV.jsxs)("div", {
            className: yV()("ReplayTimelineOverviewSection", {
              Hidden: TV <= 1
            }),
            children: [(0, wV.jsx)("div", {
              className: "ReplayTimelineSectionLabel",
              children: "Overview"
            }), (0, wV.jsxs)("div", {
              ref: NV,
              className: "ReplayTimelineOverviewTrack",
              onPointerDown: Be,
              onPointerMove: je,
              onPointerUp: qe,
              onPointerCancel: qe,
              role: "slider",
              "aria-label": "Recording overview",
              "aria-valuemin": 0,
              "aria-valuemax": JV,
              "aria-valuenow": uV,
              tabIndex: 0,
              children: [Ie.map((VV => {
                const eV = fU(VV, JV);
                return (0, wV.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Overview",
                  style: {
                    left: `${eV}%`
                  }
                }, VV)
              })), Ge && (0, wV.jsxs)(wV.Fragment, {
                children: [(0, wV.jsx)("div", {
                  className: "ReplayTimelineMarkRegion Overview",
                  style: {
                    left: `${ge}%`,
                    width: `${De}%`
                  }
                }), (0, wV.jsx)("div", {
                  className: "ReplayTimelineMarkMarker In Overview",
                  style: {
                    left: `${fe}%`
                  },
                  "aria-hidden": !0
                }), (0, wV.jsx)("div", {
                  className: "ReplayTimelineMarkMarker Out Overview",
                  style: {
                    left: `${me}%`
                  },
                  "aria-hidden": !0
                })]
              }), Ye.map((VV => Vx(VV, "overview", ex(VV)))), (0, wV.jsx)("div", {
                className: "ReplayTimelineViewport",
                style: {
                  left: `${Me}%`,
                  width: `${Math.max(ze-Me,.5)}%`
                }
              }), (0, wV.jsx)("button", {
                type: "button",
                className: yV()("ReplayTimelinePlayhead Overview", {
                  Scrubbing: null !== DV
                }),
                style: {
                  left: `${Xe}%`
                },
                onPointerDown: ke("overview"),
                onPointerMove: be,
                onPointerUp: Ee,
                onPointerCancel: Ee,
                "aria-label": "Scrub playhead"
              })]
            })]
          }), (0, wV.jsxs)("div", {
            className: "ReplayTimelineDetailSection",
            children: [(0, wV.jsxs)("div", {
              className: "ReplayTimelineDetailHeader",
              children: [(0, wV.jsx)("span", {
                className: "ReplayTimelineSectionLabel",
                children: "Timeline"
              }), (0, wV.jsxs)("span", {
                className: "ReplayTimelineDetailRange",
                children: [cU(sV, pV), " \u2013 ", cU(SV, pV), TV > 1 && (0, wV.jsx)("span", {
                  className: "ReplayTimelineZoomBadge",
                  children: hU(TV)
                })]
              })]
            }), (0, wV.jsxs)("div", {
              ref: AV,
              className: "ReplayTimelineDetailTrack",
              onPointerDown: Ze,
              onPointerMove: ve,
              onPointerUp: re,
              onPointerCancel: re,
              role: "slider",
              "aria-label": "Recording timeline",
              "aria-valuemin": sV,
              "aria-valuemax": SV,
              "aria-valuenow": uV,
              tabIndex: 0,
              children: [de.map((VV => {
                const eV = aU(VV, sV, SV);
                return (0, wV.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Detail",
                  style: {
                    left: `${eV}%`
                  }
                }, VV)
              })), oe && (0, wV.jsx)("div", {
                className: "ReplayTimelineMarkRegion Detail",
                style: {
                  left: `${ie}%`,
                  width: `${ae}%`
                }
              }), le && (0, wV.jsx)("div", {
                className: "ReplayTimelineMarkMarker In Detail",
                style: {
                  left: `${ce}%`
                },
                "aria-label": `Play range start at tick ${We}`
              }), Le && (0, wV.jsx)("div", {
                className: "ReplayTimelineMarkMarker Out Detail",
                style: {
                  left: `${he}%`
                },
                "aria-label": `Play range end at tick ${Re}`
              }), Se && Ke && (0, wV.jsx)("div", {
                className: "ReplayTimelineSelectionRegion Detail",
                style: {
                  left: `${He}%`,
                  width: `${se}%`
                }
              }), Oe.map((VV => Vx(VV, "detail", ex(VV)))), (0, wV.jsx)("button", {
                type: "button",
                className: yV()("ReplayTimelinePlayhead Detail", {
                  Scrubbing: null !== DV
                }),
                style: {
                  left: `${Ne}%`
                },
                onPointerDown: ke("detail"),
                onPointerMove: be,
                onPointerUp: Ee,
                onPointerCancel: Ee,
                "aria-label": "Scrub playhead"
              })]
            }), (0, wV.jsxs)("div", {
              className: "ReplayTimelineWheelHint",
              children: [(0, wV.jsx)("span", {
                className: "Select",
                children: "Drag timeline to select"
              }), " \xb7 Scroll to zoom \xb7 Drag playhead to scrub"]
            })]
          })]
        })
      })),
      Zy = (0, YV.memo)((function(VV) {
        let {
          enabled: eV
        } = VV;
        const xV = (0, YV.useRef)(!1),
          JV = (0, YV.useRef)(null),
          [UV, pV] = (0, YV.useState)(!1),
          QV = (0, YV.useCallback)((VV => {
            eV && 0 === VV.button && (xV.current = !0, pV(!0), JV.current = {
              x: VV.clientX,
              y: VV.clientY
            }, VV.currentTarget.setPointerCapture(VV.pointerId))
          }), [eV]),
          nV = (0, YV.useCallback)((VV => {
            if (!eV || !xV.current || !JV.current) return;
            const YV = VV.clientX - JV.current.x,
              UV = VV.clientY - JV.current.y;
            JV.current = {
              x: VV.clientX,
              y: VV.clientY
            }, kV.gameBridge.send("dragReplayCamera", {
              dx: YV,
              dy: UV
            })
          }), [eV]),
          ZV = (0, YV.useCallback)((VV => {
            xV.current && (xV.current = !1, pV(!1), JV.current = null, VV.currentTarget.releasePointerCapture(VV.pointerId))
          }), []);
        return eV ? (0, wV.jsx)("div", {
          className: yV()("ReplayViewerCameraDragSurface", {
            Dragging: UV
          }),
          onPointerDown: QV,
          onPointerMove: nV,
          onPointerUp: ZV,
          onPointerCancel: ZV,
          "aria-hidden": !0
        }) : null
      }));
    var vy = xV(38172),
      ry = xV(38174);
    const ky = (0, YV.memo)((function(VV) {
        var eV, xV, JV;
        let {
          anchorRect: UV,
          anchorRef: pV,
          onClose: nV
        } = VV;
        const ZV = (0, YV.useRef)(null),
          vV = Uy(ZV, UV),
          [rV, kV] = (0, YV.useState)(ry.d),
          bV = (0, YV.useMemo)((() => Object.values(rV).every((VV => VV))), [rV]);
        (0, QV.g)("replayViewer|uiVisibilityChanged", (() => {
          kV((0, ry.d)())
        })), yy(ZV, nV, pV);
        const EV = (0, YV.useCallback)(((VV, eV) => {
            (0, ry.k)(VV, eV), kV((0, ry.d)())
          }), []),
          BV = (0, YV.useCallback)((VV => {
            for (const {
                group: eV
              }
              of vy.c)(0, ry.k)(eV, VV);
            kV((0, ry.d)())
          }), []),
          jV = Yy(UV);
        return (0, xU.createPortal)((0, wV.jsxs)("div", {
          ref: ZV,
          className: yV()("ReplayViewerPopover ReplayUiVisibilityPopover", {
            Below: null !== (eV = null === vV || void 0 === vV ? void 0 : vV.placeBelow) && void 0 !== eV && eV,
            Positioned: null !== vV
          }),
          style: {
            left: `${null!==(xV=null===vV||void 0===vV?void 0:vV.left)&&void 0!==xV?xV:jV.left}px`,
            top: `${null!==(JV=null===vV||void 0===vV?void 0:vV.top)&&void 0!==JV?JV:jV.top}px`
          },
          onPointerDown: VV => {
            VV.stopPropagation()
          },
          children: [(0, wV.jsx)("div", {
            className: "ReplayUiVisibilityPopoverHeader",
            children: (0, wV.jsx)("span", {
              className: "ReplayUiVisibilityPopoverTitle",
              children: "UI visibility"
            })
          }), (0, wV.jsxs)("div", {
            className: "ReplayUiVisibilityPopoverChecks",
            children: [(0, wV.jsxs)("div", {
              className: "ReplayUiVisibilityPopoverCheck",
              children: [(0, wV.jsx)("input", {
                type: "checkbox",
                checked: bV,
                onChange: VV => {
                  BV(VV.target.checked)
                }
              }), (0, wV.jsx)("span", {
                children: "SELECT ALL"
              })]
            }), vy.c.map((VV => {
              let {
                group: eV,
                label: xV
              } = VV;
              return (0, wV.jsxs)("label", {
                className: "ReplayUiVisibilityPopoverCheck",
                children: [(0, wV.jsx)("input", {
                  type: "checkbox",
                  checked: rV[eV],
                  onChange: VV => {
                    EV(eV, VV.target.checked)
                  }
                }), (0, wV.jsx)("span", {
                  children: xV
                })]
              }, eV)
            }))]
          })]
        }), document.body)
      })),
      by = (0, YV.memo)((function(VV) {
        let {
          disabled: eV
        } = VV;
        const xV = (0, YV.useRef)(null),
          [JV, UV] = (0, YV.useState)(!1),
          [yV, pV] = (0, YV.useState)(null),
          QV = (0, YV.useCallback)((() => {
            xV.current && (pV(xV.current.getBoundingClientRect()), UV((VV => !VV)))
          }), []),
          nV = (0, YV.useCallback)((() => {
            UV(!1)
          }), []);
        return (0, wV.jsxs)(wV.Fragment, {
          children: [(0, wV.jsx)("div", {
            ref: xV,
            children: (0, wV.jsx)(cx.f, {
              className: "ReplayViewerActionButton",
              onClick: QV,
              disabled: eV,
              children: (0, wV.jsx)("span", {
                children: "Hide UI elements"
              })
            })
          }), JV && yV && (0, wV.jsx)(ky, {
            anchorRect: yV,
            anchorRef: xV,
            onClose: nV
          })]
        })
      })),
      Ey = ["freeCamUp", "freeCamDown"];

    function By(VV, eV) {
      kV.gameBridge.send("holdReplayFreecamVertical", {
        action: VV,
        hn: eV
      })
    }
    const jy = (0, YV.memo)((function() {
      (0, YV.useEffect)((() => () => {
        ! function() {
          kV.gameBridge.send("moveReplayFreecam", null);
          for (const VV of Ey) By(VV, !1)
        }()
      }), []);
      const VV = (0, YV.useCallback)((VV => {
          kV.gameBridge.send("moveReplayFreecam", VV)
        }), []),
        eV = (0, YV.useCallback)((VV => ({
          onTouchStart: eV => {
            eV.preventDefault(), eV.stopPropagation(), By(VV, !0)
          },
          onTouchEnd: eV => {
            eV.preventDefault(), eV.stopPropagation(), By(VV, !1)
          },
          onTouchCancel: eV => {
            eV.preventDefault(), eV.stopPropagation(), By(VV, !1)
          }
        })), []);
      return (0, wV.jsxs)("div", {
        className: "ReplayFreecamTouchControls",
        children: [(0, wV.jsx)("div", {
          className: "ReplayFreecamJoystickWrap",
          children: (0, wV.jsx)(je, {
            onMove: VV,
            mode: "pinned"
          })
        }), (0, wV.jsxs)("div", {
          className: "ReplayFreecamVerticalButtons",
          children: [(0, wV.jsx)("button", {
            type: "button",
            className: "ReplayFreecamVerticalButton",
            "aria-label": "Freecam up",
            ...eV("freeCamUp"),
            children: (0, wV.jsx)(PV.b, {
              name: "angle-up",
              className: "ReplayFreecamVerticalIcon"
            })
          }), (0, wV.jsx)("button", {
            type: "button",
            className: "ReplayFreecamVerticalButton",
            "aria-label": "Freecam down",
            ...eV("freeCamDown"),
            children: (0, wV.jsx)(PV.b, {
              name: "angle-down",
              className: "ReplayFreecamVerticalIcon"
            })
          })]
        })]
      })
    }));
    var qy = xV(3561);
    const ty = [],
      Fy = "Failed to load recording";

    function Ty(VV, eV, xV) {
      var JV;
      console.error(eV), xx.NotificationProvider.showAlertPopup({
        title: VV,
        subtitle: null !== (JV = (0, GU.j)(eV)) && void 0 !== JV ? JV : xV,
        confirmText: "OK"
      })
    }

    function Py(VV) {
      Ty(Fy, VV, GU.b.cantOpen.text)
    }
    const Ay = (0, YV.memo)((function() {
        const VV = (0, CV.n)(),
          {
            gameState: eV
          } = (0, DV.l)(["gameState"]),
          xV = "inGame" === eV;
        return (0, iV.c)("replayViewerRequested", (VV => {
          (0, CV.k)("toggle" === VV ? !(0, CV.g)() : "open" === VV)
        })), (0, YV.useEffect)((() => {
          xV && (0, gU.e)().then((VV => {
            if (null !== VV) return (0, CV.k)(!0), (0, NU.e)().open(VV.bytes, VV.source)
          })).catch((VV => {
            (0, CV.k)(!0), Py(VV)
          }))
        }), [xV]), VV ? (0, wV.jsx)(Ny, {}) : null
      })),
      Ny = (0, YV.memo)((function() {
        var VV, eV, xV, JV, UV, pV, QV, nV, ZV, vV, rV, bV;
        const EV = YV.useRef(null),
          [BV, jV] = (0, YV.useState)(1),
          [qV, tV] = (0, YV.useState)(null),
          [TV, AV] = (0, YV.useState)(!1),
          {
            isTouchScreen: NV
          } = (0, DV.l)(["isTouchScreen"]),
          XV = (0, iV.h)("replay"),
          MV = (0, iV.h)("replayEdits"),
          zV = null !== XV,
          GV = null !== (VV = null === XV || void 0 === XV ? void 0 : XV.iZ) && void 0 !== VV ? VV : 0,
          WV = null !== (eV = null === XV || void 0 === XV ? void 0 : XV.totalTicks) && void 0 !== eV ? eV : 0,
          RV = Math.max(0, WV - 1),
          gV = null !== (xV = null === XV || void 0 === XV ? void 0 : XV.playing) && void 0 !== xV && xV,
          aV = null !== (JV = null === XV || void 0 === XV ? void 0 : XV.speed) && void 0 !== JV ? JV : 1,
          oV = null !== (UV = null === XV || void 0 === XV ? void 0 : XV.KD) && void 0 !== UV ? UV : 20,
          cV = null !== qV && void 0 !== qV ? qV : GV,
          hV = null !== (pV = null === XV || void 0 === XV ? void 0 : XV.freecam) && void 0 !== pV && pV,
          lV = null !== (QV = null === XV || void 0 === XV ? void 0 : XV.cameraMode) && void 0 !== QV ? QV : "recording",
          LV = null !== (nV = null === MV || void 0 === MV ? void 0 : MV.cameraKeyframes) && void 0 !== nV ? nV : ty,
          fV = null !== (ZV = null === MV || void 0 === MV ? void 0 : MV.playbackMark) && void 0 !== ZV ? ZV : null,
          mV = null !== (vV = null === MV || void 0 === MV ? void 0 : MV.fileName) && void 0 !== vV ? vV : null,
          KV = null !== (rV = null === MV || void 0 === MV ? void 0 : MV.unsavedChanges) && void 0 !== rV && rV,
          HV = null !== (bV = null === MV || void 0 === MV ? void 0 : MV.suggestSaveAs) && void 0 !== bV && bV,
          uV = (0, iV.h)("replayVideoExporting"),
          sV = !uV && zV && ("freecam" === lV || ("recording" === lV || "keyframe" === lV) && !gV),
          SV = NV && zV && "freecam" === lV && !uV && !TV;
        (0, DU.b)(!0, !0, "ReplayViewerOverlay"), (0, YV.useEffect)((() => {
          kV.gameBridge.send("syncReplayCameraMode", null)
        }), [hV]);
        const IV = (0, YV.useCallback)(((VV, eV) => {
            kV.gameBridge.send("seekReplay", {
              iZ: VV,
              ignorePlaybackMark: null === eV || void 0 === eV ? void 0 : eV.ignorePlaybackMark
            })
          }), []),
          dV = (0, YV.useCallback)((() => {
            kV.gameBridge.send("setReplayPlaying", !1)
          }), []),
          OV = (0, YV.useCallback)(((VV, eV) => {
            kV.gameBridge.send("moveReplayCameraKeyframe", {
              from: VV,
              to: eV
            })
          }), []),
          Ve = (0, YV.useCallback)((VV => {
            kV.gameBridge.send("setReplayCameraKeyframe", VV)
          }), []),
          ee = (0, YV.useCallback)((VV => {
            kV.gameBridge.send("deleteReplayCameraKeyframes", {
              start: VV,
              end: VV
            })
          }), []),
          xe = (0, YV.useCallback)((VV => {
            kV.gameBridge.send("deleteReplayCameraKeyframes", {
              start: VV.startTick,
              end: VV.endTick
            })
          }), []),
          Je = (0, YV.useCallback)((() => kV.gameBridge.lookup("replayCamera", null)), []),
          Ye = (0, YV.useCallback)((VV => {
            tV(VV)
          }), []),
          Ue = (0, YV.useCallback)((VV => {
            kV.gameBridge.send("setReplayPlaybackMark", {
              inTick: VV.startTick,
              outTick: VV.endTick
            })
          }), []),
          ye = (0, YV.useCallback)((() => {
            kV.gameBridge.send("setReplayPlaybackMark", null)
          }), []),
          pe = (0, YV.useCallback)((VV => {
            const eV = kV.gameBridge.latest("replay");
            if (null === eV || VV.endTick <= VV.startTick) return;
            const xV = VV.startTick,
              JV = VV.endTick;
            xx.NotificationProvider.showPromptPopup({
              title: "Crop recording to the selected range? This cannot be undone.",
              confirmText: "Crop",
              destructive: !0,
              cancelText: "Cancel"
            }).getResult().then((VV => {
              var YV;
              if (!0 !== VV) return;
              if ((null === (YV = kV.gameBridge.latest("replay")) || void 0 === YV ? void 0 : YV.id) !== eV.id) return;
              kV.gameBridge.send("cropReplay", {
                start: xV,
                end: JV
              }) && (tV(null), jV(1))
            }))
          }), []),
          Qe = (0, YV.useCallback)(((VV, eV) => {
            jV(1), tV(null), (0, NU.e)().open(VV, eV).catch(Py)
          }), []),
          ne = (0, YV.useCallback)(((VV, eV) => {
            null !== kV.gameBridge.latest("connectedGame").websocketUrl ? xx.NotificationProvider.showPromptPopup({
              title: "Leave current game and play recording?",
              confirmText: "Yes",
              cancelText: "No"
            }).getResult().then((xV => {
              !0 === xV && Qe(VV, eV)
            })) : Qe(VV, eV)
          }), [Qe]),
          we = (0, YV.useCallback)((VV => {
            var eV;
            const xV = null === (eV = VV.target.files) || void 0 === eV ? void 0 : eV[0];
            if (VV.target.value = "", !xV) return;
            const JV = new FileReader;
            JV.onload = () => {
              ne(new Uint8Array(JV.result), {
                fileName: xV.name
              })
            }, JV.onerror = () => {
              Py(JV.error)
            }, JV.readAsArrayBuffer(xV)
          }), [ne]),
          Ze = (0, YV.useCallback)((() => {
            const VV = () => {
              null !== EV.current && (0, qy.g)(EV.current)
            };
            (0, zU.l)() ? (0, zU.g)().then((VV => {
              VV && ne(VV.bytes, {
                fileHandle: VV.handle
              })
            })).catch((eV => {
              console.error(eV), xx.NotificationProvider.showPromptPopup({
                title: Fy,
                confirmText: "Choose file",
                cancelText: "Cancel"
              }).getResult().then((eV => {
                !0 === eV && VV()
              }))
            })): VV()
          }), [ne]),
          ve = (0, YV.useCallback)((async function() {
            let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            let eV;
            try {
              eV = await RU(VV, {
                files: (0, NU.e)(),
                pickerSupported: zU.l,
                chooseFile: zU.c,
                write: zU.o,
                download: MU.g,
                onFallback: console.error
              })
            } catch (xV) {
              return void Ty("Failed to save recording", xV)
            }
            "written" !== eV && "downloaded" !== eV || (() => {
              const VV = xx.NotificationProvider.showAlertPopup({
                title: "Recording saved",
                disableBackground: !0
              });
              setTimeout((() => {
                VV.tearDownNotification()
              }), 1e3)
            })()
          }), []),
          re = (0, YV.useCallback)((VV => {
            kV.gameBridge.send("replayAction", VV)
          }), []),
          ke = (0, YV.useCallback)((VV => {
            jV((eV => lU(eV, VV)))
          }), []),
          be = (0, YV.useCallback)((VV => {
            if (!kV.gameBridge.latest("replayVideoExporting")) switch (VV) {
              case "replayLoad":
                Ze();
                break;
              case "replaySave":
                ve(!1);
                break;
              case "replaySaveAs":
                ve(!0);
                break;
              case "replayTimelineZoomIn":
                ke("in");
                break;
              case "replayTimelineZoomOut":
                ke("out")
            }
          }), [Ze, ve, ke]);
        (0, iV.c)("replayUiActionRequested", be);
        const Ee = (0, YV.useCallback)((VV => {
            kV.gameBridge.send("setReplayCameraMode", VV)
          }), []),
          Be = zV ? cx.f : cx.m,
          je = KV && !HV ? cx.m : cx.f,
          qe = KV && HV ? cx.m : cx.f;
        return (0, wV.jsxs)("div", {
          className: "ReplayViewerOverlay",
          children: [(0, wV.jsx)(Zy, {
            enabled: sV
          }), SV && (0, wV.jsx)(jy, {}), (0, wV.jsx)("input", {
            ref: EV,
            type: "file",
            accept: MU.e,
            className: "ReplayViewerFileInput",
            onChange: we
          }), (0, wV.jsxs)("div", {
            className: yV()("ReplayViewerBar", {
              Collapsed: TV
            }),
            children: [(0, wV.jsx)("button", {
              type: "button",
              className: "ReplayViewerCollapseTab",
              onClick: () => {
                TV ? AV(!1) : zV ? AV(!0) : (0, CV.d)()
              },
              "aria-expanded": !TV,
              "aria-label": TV ? "Expand replay viewer" : "Collapse replay viewer",
              children: (0, wV.jsx)(PV.b, {
                name: TV ? "angle-up" : "angle-down"
              })
            }), !TV && (0, wV.jsxs)("div", {
              className: "ReplayViewerBarBody",
              children: [zV && WV > 0 && (0, wV.jsx)(wy, {
                maxTick: RV,
                displayTick: cV,
                KD: oV,
                cameraKeyframes: LV,
                playbackMark: fV,
                onSeek: IV,
                onPause: dV,
                onScrubTickChange: Ye,
                onMoveCameraKeyframe: OV,
                onUpdateCameraKeyframe: Ve,
                onDeleteCameraKeyframe: ee,
                onUseCurrentCamera: Je,
                onMarkRange: Ue,
                onCropRange: pe,
                onDeleteKeyframesInRange: xe,
                onClearMark: ye,
                zoomLevel: BV,
                onZoomLevelChange: jV
              }, RV), (0, wV.jsxs)("div", {
                className: "ReplayViewerControls",
                children: [(0, wV.jsxs)("div", {
                  className: "ReplayViewerControlsLeftSide",
                  children: [(0, wV.jsxs)("div", {
                    className: "ReplayViewerControlsGroup FileGroup",
                    children: [zV && (0, wV.jsxs)("div", {
                      className: "ReplayViewerFileName",
                      children: [null !== mV && void 0 !== mV ? mV : "Unsaved recording", KV ? " *" : ""]
                    }), (0, wV.jsxs)(Be, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        be("replayLoad")
                      },
                      children: [(0, wV.jsx)(SY.d, {
                        noaAction: "replayLoad",
                        padHidesKey: !0
                      }), (0, wV.jsx)("span", {
                        children: " Load "
                      })]
                    }), (0, wV.jsxs)(cx.f, {
                      className: "ReplayViewerActionButton",
                      onClick: CV.d,
                      children: [(0, wV.jsx)(SY.d, {
                        noaAction: "replayViewerOpen",
                        padHidesKey: !0
                      }), (0, wV.jsx)("span", {
                        children: " Hide "
                      })]
                    }), (0, wV.jsxs)(je, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        be("replaySave")
                      },
                      disabled: !zV,
                      children: [(0, wV.jsx)(SY.d, {
                        noaAction: "replaySave",
                        padHidesKey: !0
                      }), (0, wV.jsx)("span", {
                        children: " Save "
                      })]
                    }), (0, wV.jsxs)(cx.f, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        kV.gameBridge.send("leaveGame", {
                          reloadPath: "/"
                        })
                      },
                      disabled: !zV,
                      children: [(0, wV.jsx)(SY.d, {
                        noaAction: "replayExit",
                        padHidesKey: !0
                      }), (0, wV.jsx)("span", {
                        children: " Exit "
                      })]
                    }), (0, wV.jsxs)(qe, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        be("replaySaveAs")
                      },
                      disabled: !zV,
                      children: [(0, wV.jsx)(SY.d, {
                        noaAction: "replaySaveAs",
                        padHidesKey: !0
                      }), (0, wV.jsx)("span", {
                        children: " Save As "
                      })]
                    }), (0, wV.jsxs)(cx.f, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        kV.gameBridge.send("exportReplayVideo", null)
                      },
                      disabled: !zV || 0 === WV || uV,
                      children: [(0, wV.jsx)(SY.d, {
                        noaAction: "replayExportVideo",
                        padHidesKey: !0
                      }), (0, wV.jsx)("span", {
                        children: " Export "
                      })]
                    })]
                  }), (0, wV.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, wV.jsxs)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: [(0, wV.jsx)("span", {
                        children: " Camera Mode "
                      }), (0, wV.jsx)(SY.d, {
                        noaAction: "replayChangeCameraMode",
                        padHidesKey: !0
                      })]
                    }), (0, wV.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody CameraModes",
                      children: [(0, wV.jsx)(FV.d, {
                        tooltipInner: (0, wV.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Replicate how the camera was set when recorded."
                        }),
                        children: (0, wV.jsxs)(cx.M, {
                          className: "ReplayViewerModeButton",
                          active: "recording" === lV,
                          onClick: () => {
                            Ee("recording")
                          },
                          disabled: !zV,
                          children: ["Recorded ", (0, wV.jsx)(PV.b, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, wV.jsx)(FV.d, {
                        tooltipInner: (0, wV.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Move the camera freely around."
                        }),
                        children: (0, wV.jsxs)(cx.M, {
                          className: "ReplayViewerModeButton",
                          active: "freecam" === lV,
                          onClick: () => {
                            Ee("freecam")
                          },
                          disabled: !zV,
                          children: ["Free ", (0, wV.jsx)(PV.b, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, wV.jsx)(FV.d, {
                        tooltipInner: (0, wV.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Display the replay in real time using keyframes."
                        }),
                        children: (0, wV.jsxs)(cx.M, {
                          className: "ReplayViewerModeButton",
                          active: "keyframe" === lV,
                          onClick: () => {
                            Ee("keyframe")
                          },
                          disabled: !zV,
                          children: ["Preview ", (0, wV.jsx)(PV.b, {
                            name: "circle-info"
                          })]
                        })
                      })]
                    })]
                  })]
                }), (0, wV.jsxs)("div", {
                  className: "ReplayViewerControlsGroup TimeGroup",
                  children: [(0, wV.jsxs)("div", {
                    className: "ReplayViewerTimecodeContainer",
                    children: [(0, wV.jsxs)("span", {
                      className: "ReplayViewerTimecode",
                      children: [(0, wV.jsx)("span", {
                        className: "ReplayViewerTimecodeNow",
                        children: cU(cV, oV)
                      }), (0, wV.jsx)("span", {
                        className: "ReplayViewerTimecodeDivider",
                        children: "/"
                      }), (0, wV.jsx)("span", {
                        className: "ReplayViewerTimecodeTotal",
                        children: cU(RV, oV)
                      })]
                    }), (0, wV.jsxs)("span", {
                      className: "ReplayViewerTickLabel",
                      children: ["Tick ", cV, " / ", RV]
                    })]
                  }), (0, wV.jsxs)("div", {
                    className: "ReplayViewerTimecodeControls",
                    children: [(0, wV.jsxs)(cx.f, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        re("replaySkipBack")
                      },
                      disabled: !zV,
                      children: [(0, wV.jsxs)("span", {
                        children: [" ", (0, wV.jsx)(PV.b, {
                          name: "clock-rotate-left"
                        }), " 1s"]
                      }), (0, wV.jsx)(SY.d, {
                        noaAction: "replaySkipBack",
                        padHidesKey: !0
                      })]
                    }), (0, wV.jsxs)(cx.m, {
                      className: "ReplayViewerMediaButton PlayButton",
                      onClick: () => {
                        kV.gameBridge.send("setReplayPlaying", !gV)
                      },
                      disabled: !zV,
                      children: [(0, wV.jsxs)("span", {
                        children: [" ", gV ? (0, wV.jsx)(PV.b, {
                          name: "pause"
                        }) : (0, wV.jsx)(PV.b, {
                          name: "play"
                        }), " "]
                      }), (0, wV.jsx)(SY.d, {
                        noaAction: "replayPlayPause",
                        padHidesKey: !0
                      })]
                    }), (0, wV.jsxs)(cx.f, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        re("replaySkipForward")
                      },
                      disabled: !zV,
                      children: [(0, wV.jsxs)("span", {
                        children: [" ", (0, wV.jsx)(PV.b, {
                          name: "rotate-forward"
                        }), " 1s"]
                      }), (0, wV.jsx)(SY.d, {
                        noaAction: "replaySkipForward",
                        padHidesKey: !0
                      })]
                    })]
                  })]
                }), (0, wV.jsxs)("div", {
                  className: "ReplayViewerControlsRightSide",
                  children: [(0, wV.jsxs)("div", {
                    className: "ReplayViewerControlsGroup RecordKeyframeGroup",
                    children: [(0, wV.jsxs)(cx.m, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        re("replayRecordKeyframe")
                      },
                      disabled: !zV,
                      children: [(0, wV.jsx)(SY.d, {
                        noaAction: "replayRecordKeyframe",
                        padHidesKey: !0
                      }), (0, wV.jsx)("span", {
                        children: " Record keyframe "
                      })]
                    }), (0, wV.jsx)(by, {
                      disabled: !zV
                    }), fV && (0, wV.jsx)(cx.M, {
                      className: "ReplayViewerActionButton",
                      onClick: ye,
                      disabled: !zV,
                      children: (0, wV.jsx)("span", {
                        children: " Clear range "
                      })
                    })]
                  }), (0, wV.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, wV.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Speed"
                    }), (0, wV.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, wV.jsx)(cx.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          re("replaySpeedDown")
                        },
                        disabled: !zV || (0, XU.d)(aV),
                        children: (0, wV.jsx)("span", {
                          children: " \u2212 "
                        })
                      }), (0, wV.jsxs)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: [aV, "\xd7"]
                      }), (0, wV.jsx)(cx.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          re("replaySpeedUp")
                        },
                        disabled: !zV || (0, XU.b)(aV),
                        children: (0, wV.jsx)("span", {
                          children: " + "
                        })
                      })]
                    })]
                  }), (0, wV.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, wV.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Timeline Zoom"
                    }), (0, wV.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, wV.jsxs)(cx.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          be("replayTimelineZoomOut")
                        },
                        disabled: !zV || BV <= iU[0],
                        children: [(0, wV.jsx)("span", {
                          children: " \u2212 "
                        }), (0, wV.jsx)(SY.d, {
                          noaAction: "replayTimelineZoomOut",
                          padHidesKey: !0
                        })]
                      }), (0, wV.jsx)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: hU(BV)
                      }), (0, wV.jsxs)(cx.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          be("replayTimelineZoomIn")
                        },
                        disabled: !zV || BV >= iU[iU.length - 1],
                        children: [(0, wV.jsx)("span", {
                          children: " + "
                        }), (0, wV.jsx)(SY.d, {
                          noaAction: "replayTimelineZoomIn",
                          padHidesKey: !0
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0, wV.jsx)("div", {
                className: "ReplayViewerEmptyState",
                children: !zV && "Load a recording to begin playback"
              })]
            })]
          })]
        })
      }));
    var Xy = xV(1391);

    function My() {
      const [, VV] = (0, YV.useState)(0);
      return (0, QV.g)("replayViewer|uiVisibilityChanged", (() => {
          VV((VV => VV + 1))
        })), (0, QV.g)("replayViewer|replayLoaded", (() => {
          VV((VV => VV + 1))
        })),
        function() {
          if (!(0, Xy.f)()) return {};
          const VV = {
              [vy.b]: "true"
            },
            eV = (0, ry.d)();
          for (const {
              group: xV,
              dataAttr: JV
            }
            of vy.c) JV && !eV[xV] && (VV[JV] = "true");
          return VV
        }()
    }
    var zy = xV(35296),
      Gy = xV(2193),
      Wy = xV(9363),
      Ry = xV(9346),
      gy = xV(2206);
    const Dy = (0, YV.memo)((function() {
      var VV, eV, xV;
      const JV = (0, tV.j)("customButtons");
      (0, YV.useEffect)((() => JV ? (kV.gameBridge.send("bindCustomButtonKeys", JV.filter(Wy.d).map((VV => {
        let {
          id: eV,
          keycode: xV
        } = VV;
        return {
          id: eV,
          keycode: xV
        }
      }))), () => {
        kV.gameBridge.send("bindCustomButtonKeys", [])
      }) : () => {}), [JV]);
      const UV = null !== (VV = null === JV || void 0 === JV ? void 0 : JV.filter(Wy.d)) && void 0 !== VV ? VV : [],
        yV = (0, Ry.e)(),
        pV = null !== (eV = null === (xV = (0, gy.c)()) || void 0 === xV ? void 0 : xV.hideButtonHints) && void 0 !== eV && eV,
        QV = "customButton" !== (null === yV || void 0 === yV ? void 0 : yV.kind) || pV ? null : yV.id,
        nV = UV.length > 0,
        ZV = (0, YV.useRef)(null);
      return (0, YV.useLayoutEffect)((() => {
        if (!nV) return () => {};
        const VV = ZV.current,
          eV = VV.closest(".InGameUi"),
          xV = () => {
            eV.style.setProperty("--custom-buttons-top", `${VV.offsetTop}px`)
          };
        xV();
        const JV = new ResizeObserver(xV);
        return JV.observe(VV), JV.observe(VV.parentElement), () => {
          JV.disconnect(), eV.style.removeProperty("--custom-buttons-top")
        }
      }), [nV]), (0, wV.jsx)("div", {
        ref: ZV,
        className: "" + ((0, ex.isMobile)() ? "CustomIconsMobile" : "CustomIcons"),
        children: UV.map((VV => {
          var eV, xV;
          return (0, wV.jsx)(iy, {
            button: VV,
            padGlyph: VV.id === QV && null !== (eV = null === (xV = (0, MV.e)()) || void 0 === xV ? void 0 : xV.getBoundButton("actionButton")) && void 0 !== eV ? eV : null
          }, VV.id)
        }))
      })
    }));

    function iy(VV) {
      let {
        button: eV,
        padGlyph: xV
      } = VV;
      const JV = (0, YV.useRef)(null),
        UV = () => {
          null !== JV.current && (JV.current = null, kV.gameBridge.send("pressCustomButton", {
            id: eV.id,
            down: !1
          }))
        };
      (0, YV.useEffect)((() => UV), []);
      const yV = ae(UV, {
          pressesOnPointerDown: !0
        }),
        pV = VV => {
          JV.current === VV.pointerId && UV()
        };
      return (0, wV.jsxs)("div", {
        className: "CustomIcon",
        ...yV,
        onLostPointerCapture: pV,
        children: [(0, wV.jsx)(Gy.b, {
          icon: eV.icon,
          keyboardHint: (0, Wy.c)(eV.keycode),
          padGlyph: xV,
          onPointerDown: VV => {
            try {
              VV.currentTarget.setPointerCapture(VV.pointerId)
            } catch {
              return
            }
            null === JV.current && kV.gameBridge.send("pressCustomButton", {
              id: eV.id,
              down: !0
            }), JV.current = VV.pointerId
          },
          onPointerUp: pV,
          onPointerCancel: pV,
          showTouchTutorialPubSubId: !1,
          showRedDotPubSubId: !1
        }), eV.description && (0, wV.jsx)("div", {
          className: "CustomIconDescription SmallTextBold",
          children: eV.description
        })]
      })
    }
    var Cy = xV(2672),
      ay = xV(275);
    const oy = {
      frame: VV => {
        const eV = requestAnimationFrame((() => {
          VV()
        }));
        return () => {
          cancelAnimationFrame(eV)
        }
      },
      afterFrame: VV => {
        const eV = setTimeout(VV, 0);
        return () => {
          clearTimeout(eV)
        }
      }
    };
    class cy {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ay.e,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oy,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
        this.idle = VV, this.frames = eV, this.onHiddenMount = xV, this.waiting = [], this.cancelIdle = null, this.cancelFrame = null, this.cancelAfterFrame = null, this.starvedFrames = 0, this.shown = !1
      }
      request(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.shown ? (VV(), () => {}) : (eV ? this.waiting.unshift(VV) : this.waiting.push(VV), this.schedule(), () => {
          const eV = this.waiting.indexOf(VV);
          eV >= 0 && (this.waiting.splice(eV, 1), this.settle())
        })
      }
      show() {
        for (this.shown = !0; this.waiting.length > 0;) this.mountNext()
      }
      schedule() {
        0 !== this.waiting.length && (this.cancelIdle ??= this.idle((VV => {
          for (this.cancelIdle = null; this.waiting.length > 0 && VV.timeRemaining() >= 8;) this.mountNext();
          this.schedule()
        })), this.cancelFrame ??= this.frames.frame((() => {
          this.cancelFrame = null, this.starvedFrames++, this.starvedFrames >= 4 && (this.cancelAfterFrame ??= this.frames.afterFrame((() => {
            this.cancelAfterFrame = null, this.mountNext(), this.schedule()
          }))), this.schedule()
        })))
      }
      mountNext() {
        this.starvedFrames = 0;
        const VV = this.waiting.shift(),
          eV = !this.shown,
          xV = performance.now();
        try {
          VV()
        } finally {
          eV && this.onHiddenMount(performance.now() - xV), this.settle()
        }
      }
      settle() {
        0 === this.waiting.length && this.stop()
      }
      stop() {
        var VV, eV, xV;
        null === (VV = this.cancelIdle) || void 0 === VV || VV.call(this), this.cancelIdle = null, null === (eV = this.cancelFrame) || void 0 === eV || eV.call(this), this.cancelFrame = null, null === (xV = this.cancelAfterFrame) || void 0 === xV || xV.call(this), this.cancelAfterFrame = null
      }
    }
    const hy = (0, YV.createContext)(null);

    function ly(VV) {
      let {
        children: eV,
        first: xV = !1
      } = VV;
      const JV = (0, YV.useContext)(hy),
        [UV, yV] = (0, YV.useState)(null === JV);
      return (0, YV.useEffect)((() => {
        if (!UV && null !== JV) return JV.request((() => {
          yV(!0)
        }), xV)
      }), [xV, UV, JV]), UV ? (0, YV.createElement)(YV.Fragment, null, eV) : null
    }
    const Ly = (0, YV.memo)((function(VV) {
        let {
          shown: eV
        } = VV;
        const [xV] = (0, YV.useState)((() => new EV.d(eV))), [UV] = (0, YV.useState)((() => eV ? null : new cy(void 0, void 0, (VV => {
          JV.b.noteWorkDuringAdmissionWait(VV)
        }))));
        return (0, YV.useLayoutEffect)((() => {
          eV && (null === UV || void 0 === UV || UV.show(), xV.show())
        }), [eV, xV, UV]), (0, wV.jsx)(EV.c.Provider, {
          value: xV,
          children: (0, wV.jsx)(hy.Provider, {
            value: UV,
            children: (0, wV.jsx)(fy, {})
          })
        })
      })),
      fy = (0, YV.memo)((function() {
        const {
          isUiHidden: VV,
          isUiHiddenByCamera: eV,
          worldPanelHud: xV,
          isTouchScreen: JV
        } = (0, DV.l)(["isUiHidden", "isUiHiddenByCamera", "worldPanelHud", "isTouchScreen"]), UV = (0, EY.c)(), pV = My(), QV = (0, EV.h)(), nV = (0, YV.useRef)(null), ZV = (0, tV.j)("showKillfeed");
        return function() {
            const VV = (0, EV.h)();
            (0, YV.useEffect)((() => VV.whenShown(BV)), [VV])
          }(),
          function() {
            const VV = (0, tV.j)("inventoryColourOverride");
            (0, YV.useEffect)((() => {
              if (!VV) return;
              const {
                panel: eV,
                slot: xV,
                slotSelected: JV,
                slotUnavailable: YV
              } = GV(VV), UV = document.documentElement.style;
              return UV.setProperty("--InventoryPanelColour", eV), UV.setProperty("--InventorySlotColour", xV), UV.setProperty("--InventorySlotSelectedColour", JV), UV.setProperty("--InventorySlotUnavailableColour", YV), () => {
                UV.removeProperty("--InventoryPanelColour"), UV.removeProperty("--InventorySlotColour"), UV.removeProperty("--InventorySlotSelectedColour"), UV.removeProperty("--InventorySlotUnavailableColour")
              }
            }), [VV])
          }(), (0, YV.useLayoutEffect)((() => QV.whenShown((() => {
            var VV;
            null === (VV = nV.current) || void 0 === VV || VV.classList.remove("PreMounted")
          }))), [QV]), (0, wV.jsxs)(wV.Fragment, {
            children: [(0, wV.jsxs)("div", {
              ref: nV,
              className: yV()("InGameUi", {
                PreMounted: !QV.shown,
                Hidden: VV,
                HiddenByCamera: eV,
                HiddenByWorldPanel: null !== xV,
                WorldPanelTouchControl: "touchControls" === xV
              }),
              ...pV,
              children: [(0, wV.jsxs)(ly, {
                children: [(0, wV.jsx)(ZJ.e, {}), (0, wV.jsx)(EJ, {})]
              }), (0, wV.jsx)(EV.f, {
                children: (0, wV.jsx)(BJ, {})
              }), (0, wV.jsxs)(ly, {
                children: [(0, wV.jsx)(LY, {}), (0, wV.jsx)(dY, {}), JV && (0, wV.jsx)(VU, {})]
              }), (0, wV.jsxs)(ly, {
                children: [(0, wV.jsx)(Gx, {}), (0, wV.jsx)(WJ.e, {}), (0, wV.jsx)(cJ, {})]
              }), (0, wV.jsx)(EV.f, {
                children: (0, wV.jsx)(wJ, {})
              }), (0, wV.jsxs)(ly, {
                children: [(0, wV.jsx)(HY.d, {}), (0, wV.jsx)(Ay, {})]
              }), null, (0, wV.jsxs)(ly, {
                children: [(0, wV.jsx)(vU.e, {}), (0, wV.jsx)(rU.i, {})]
              }), (0, wV.jsx)(ly, {
                children: (0, wV.jsx)(Rx.h, {})
              }), (0, wV.jsx)(ly, {
                children: (0, wV.jsx)(Iy, {
                  showChat: UV
                })
              }), (0, wV.jsxs)(ly, {
                children: [(0, wV.jsx)(bU, {}), (0, wV.jsx)(KY, {})]
              }), (0, wV.jsxs)("div", {
                className: yV()("RightElements", {
                  RightElementsTouchscreen: JV
                }),
                "data-camera-keeper-host": "",
                children: [(0, wV.jsxs)("div", {
                  className: HJ.h,
                  "data-holds-camera-keeper": "",
                  children: [(0, wV.jsxs)("div", {
                    className: "TopRightElementsLeft",
                    "data-holds-camera-keeper": "",
                    children: [(0, wV.jsx)(ly, {
                      children: (0, wV.jsx)(WY.e, {})
                    }), (0, wV.jsxs)(ly, {
                      children: [(0, wV.jsx)(AV, {}), (0, wV.jsx)(dJ.c, {})]
                    }), ex.featureFlags.useSocialFeatures && (0, wV.jsx)(EV.f, {
                      children: (0, wV.jsx)(OJ.b, {
                        placement: "inGame"
                      })
                    }), ex.featureFlags.useSocialFeatures && (0, wV.jsx)(EV.f, {
                      children: (0, wV.jsx)(ZY, {})
                    }), ZV && (0, wV.jsx)(EV.f, {
                      children: (0, wV.jsx)(GJ, {})
                    }), (0, wV.jsx)(ly, {
                      children: (0, wV.jsx)(zy.c, {})
                    })]
                  }), ex.featureFlags.useSocialFeatures && (0, wV.jsx)("div", {
                    className: "TopRightElementsRight",
                    children: (0, wV.jsx)(ly, {
                      children: (0, wV.jsx)(hY.d, {})
                    })
                  })]
                }), (0, wV.jsxs)(ly, {
                  children: [(0, wV.jsx)(Rx.b, {
                    placement: "topRight"
                  }), (0, wV.jsx)(dy, {})]
                })]
              }), (0, wV.jsx)("div", {
                className: "LeftCentre",
                children: (0, wV.jsx)(ly, {
                  children: (0, wV.jsx)(Dy, {})
                })
              }), (0, wV.jsxs)("div", {
                className: "BottomCentre",
                "data-holds-camera-keeper": JV ? "" : void 0,
                children: [(0, wV.jsx)(EV.f, {
                  children: (0, wV.jsx)(qV.e, {})
                }), (0, wV.jsx)(ly, {
                  children: (0, wV.jsx)(Ky, {})
                }), (0, wV.jsxs)("div", {
                  className: "BottomElements",
                  "data-holds-camera-keeper": JV ? "" : void 0,
                  children: [(0, wV.jsx)("div", {
                    className: yV()("BottomLeftElements", {
                      Touch: JV
                    }),
                    children: (0, wV.jsxs)(ly, {
                      children: [(0, wV.jsx)(kY, {}), !JV && (0, wV.jsx)(Cy.d, {})]
                    })
                  }), (0, wV.jsx)(ly, {
                    children: (0, wV.jsx)(Sy, {})
                  }), (0, wV.jsx)(ly, {
                    children: (0, wV.jsx)(lJ, {
                      isTouchScreen: JV
                    })
                  })]
                })]
              }), (0, wV.jsx)("div", {
                className: "MiddleLeft"
              }), JV && (0, wV.jsx)(ly, {
                children: (0, wV.jsx)(Zx, {})
              }), (0, wV.jsx)("div", {
                className: "CameraFadeHost",
                ref: re.k
              })]
            }), (0, wV.jsx)(EV.f, {
              children: (0, wV.jsx)(AU.b, {})
            }), (0, wV.jsx)(EV.f, {
              children: (0, wV.jsx)(wU, {})
            }), (0, wV.jsx)(ly, {
              first: !0,
              children: (0, wV.jsx)(bY.c, {})
            }), (0, wV.jsx)(EV.f, {
              children: (0, wV.jsx)(my, {})
            })]
          })
      }));

    function my() {
      return (0, YV.useEffect)((() => {
        const VV = setTimeout((() => {
          (0, rV.g)()
        }), 0);
        return () => {
          clearTimeout(VV), rV.h.uB(!1)
        }
      }), []), null
    }
    const Ky = (0, YV.memo)((function() {
        const VV = (0, QV.j)("aimingOverlay", "none");
        (0, TV.e)();
        const eV = (0, tV.m)("middleTextUpper"),
          xV = (0, tV.m)("middleTextLower");
        return (0, wV.jsxs)("div", {
          className: "MiddleTextBottom",
          style: "sniper" === VV ? {
            visibility: "hidden"
          } : {},
          children: [(0, wV.jsx)(sy, {
            text: eV,
            className: "MiddleText MiddleTextUpper SmallTextBold",
            maxHeightFraction: Hy
          }), (0, wV.jsx)(sy, {
            text: xV,
            className: "MiddleText",
            maxHeightFraction: uy
          })]
        })
      })),
      Hy = .3,
      uy = .2;

    function sy(VV) {
      let {
        text: eV,
        className: xV,
        maxHeightFraction: JV
      } = VV;
      const UV = (0, YV.useRef)(null),
        yV = (0, YV.useRef)(null);
      return function(VV, eV, xV, JV) {
        (0, YV.useLayoutEffect)((() => {
          const JV = VV.current,
            YV = eV.current;
          if (!JV || !YV) return;
          let UV = -1,
            yV = -1;
          const pV = VV => (YV.style.setProperty("zoom", String(VV)), JV.getBoundingClientRect().height),
            QV = () => {
              const VV = document.documentElement.clientHeight * xV;
              let eV = 1;
              if (pV(1) > VV) {
                let xV = .5,
                  JV = 1;
                for (let eV = 0; eV < 6; eV++) {
                  const eV = (xV + JV) / 2;
                  pV(eV) <= VV ? xV = eV : JV = eV
                }
                eV = xV
              }
              yV = pV(eV), UV = JV.getBoundingClientRect().width
            };
          QV();
          let nV = 0;
          const wV = () => {
              cancelAnimationFrame(nV), nV = requestAnimationFrame(QV)
            },
            ZV = new ResizeObserver((() => {
              const {
                width: VV,
                height: eV
              } = JV.getBoundingClientRect();
              VV === UV && eV === yV || wV()
            }));
          return ZV.observe(JV), window.addEventListener("resize", wV), () => {
            ZV.disconnect(), window.removeEventListener("resize", wV), cancelAnimationFrame(nV), YV.style.removeProperty("zoom")
          }
        }), [VV, eV, xV, JV])
      }(UV, yV, JV, eV.content), (0, wV.jsx)("div", {
        ref: UV,
        className: "MiddleTextFit",
        children: (0, wV.jsx)(kU, {
          ref: yV,
          text: eV,
          className: xV
        })
      })
    }
    const Sy = (0, YV.memo)((function() {
        const VV = (0, QV.j)("aimingOverlay", "none");
        (0, TV.e)();
        const eV = (0, tV.j)("useInventory");
        return (0, wV.jsxs)("div", {
          className: "BottomMiddleElements",
          style: "sniper" === VV ? {
            visibility: "hidden"
          } : {},
          children: [(0, wV.jsx)(ZV, {}), (0, wV.jsx)(Rx.b, {}), (0, wV.jsx)(gx, {}), (0, wV.jsx)(EV.f, {
            children: (0, wV.jsx)(oY, {})
          }), (0, wV.jsxs)("div", {
            className: "HotBarRow",
            children: [eV ? (0, wV.jsx)(XV.e, {}) : (0, wV.jsx)(XV.g, {}), (0, wV.jsx)(zV, {})]
          })]
        })
      })),
      Iy = (0, YV.memo)((function(VV) {
        let {
          showChat: eV
        } = VV;
        const {
          t: xV
        } = (0, fV.A)(), {
          clientEscMenuOptions: JV,
          sessionReplayRecording: UV,
          isTouchScreen: pV
        } = (0, DV.l)(["clientEscMenuOptions", "sessionReplayRecording", "isTouchScreen"]);
        (0, TV.e)();
        const QV = (0, PU.n)(pe.f),
          {
            userContext: nV,
            isUserContextUpdating: ZV
          } = (0, jV.d)(),
          rV = (0, tV.j)("hideCoordinates"),
          kV = (0, tV.j)("customVariationTitle"),
          {
            requestedGameNameWithVariation: bV,
            gameNameWithVariation: EV,
            lobbyName: BV,
            shownLobbyName: qV
          } = (0, iV.h)("connectedGame"),
          PV = (0, vV.b)(bV, BV, !1),
          [AV, NV] = (0, YV.useState)(null),
          XV = (0, gY.n)(EV || bV || ""),
          MV = kV || XV || "";
        (0, YV.useEffect)((() => {
          ZV || eY.b.getFavouriteLobbies(nV).then((VV => {
            console.log("Got favourite lobbies", VV), NV(VV)
          }))
        }), [ZV, nV]);
        const zV = (0, YV.useRef)(null);
        return (0, YV.useLayoutEffect)((() => {
          const VV = zV.current,
            eV = document.documentElement,
            xV = new ResizeObserver((() => {
              eV.style.setProperty("--InGameHeaderRowsHeight", `${VV.offsetHeight}px`)
            }));
          return xV.observe(VV), () => {
            xV.disconnect(), eV.style.removeProperty("--InGameHeaderRowsHeight")
          }
        }), []), IJ(zV), (0, wV.jsxs)(wV.Fragment, {
          children: [(0, wV.jsxs)("div", {
            className: yV()(HJ.f, {
              Touchscreen: pV
            }),
            ref: zV,
            children: [(0, wV.jsxs)("div", {
              className: "InGameHeader",
              children: [(0, wV.jsxs)("div", {
                className: "InGameHeaderLogo",
                onMouseDown: VV => {
                  VV.stopPropagation(), VV.preventDefault()
                },
                onClick: () => {
                  DV.b.set({
                    openEverythingMenuName: DJ.q.SETTINGS
                  })
                },
                children: [(0, wV.jsx)(RY.d, {
                  showFace: !0,
                  loading: !1
                }), "bloxd.io"]
              }), (0, wV.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, wV.jsxs)("div", {
                className: "InGameHeaderGameName",
                children: [null === PV && (0, wV.jsx)(RY.d, {}), null !== PV && (0, wV.jsxs)(wV.Fragment, {
                  children: [PV, MV && ` ${MV}`]
                })]
              }), (0, wV.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, wV.jsx)("div", {
                className: "InGameHeaderLobbyName",
                children: qV
              }), (0, DY.F)(BV) && (0, wV.jsx)(FV.d, {
                tooltipInner: (0, wV.jsx)("div", {
                  children: xV(null !== AV && AV.includes(BV) ? "customLobby:removeFromFavourites" : "customLobby:addToFavourites")
                }),
                children: (0, wV.jsx)("div", {
                  children: (0, wV.jsx)(cx.s, {
                    isLiked: null !== AV && AV.includes(BV),
                    onClick: () => {
                      try {
                        if (!AV) return;
                        AV.includes(BV) ? (eY.b.unfavouriteLobby(nV, BV).catch((VV => {
                          console.error("Failed to favourite lobby", VV)
                        })), NV(AV.filter((VV => VV !== BV)))) : (eY.b.favouriteLobby(nV, BV).catch((VV => {
                          console.error("Failed to favourite lobby", VV)
                        })), NV([...AV, BV]))
                      } catch (VV) {
                        console.error("Failed to like lobby", VV)
                      }
                    },
                    isLoading: null === AV
                  })
                })
              }), (0, wV.jsx)(qU, {}), (0, wV.jsx)(TU.b, {
                labelOnTouch: !QV
              })]
            }), (0, wV.jsx)(NY, {
              show: JV.showFPS,
              asText: UV
            }), !rV && JV.showCoordinates && (0, wV.jsx)(zY, {}), !rV && JV.showChunkCoordinates && (0, wV.jsx)(GY, {}), (0, wV.jsx)(EU, {})]
          }), (0, wV.jsx)("div", {
            className: "TopLeftElements",
            "data-holds-camera-keeper": "",
            children: (0, wV.jsx)("div", {
              className: "InGameHeaderAndChat",
              "data-holds-camera-keeper": "",
              children: eV && (0, wV.jsx)(gV.b, {})
            })
          })]
        })
      })),
      dy = (0, YV.memo)((function() {
        (0, TV.e)();
        const VV = (0, tV.m)("RightInfoText"),
          [eV, xV] = (0, YV.useState)(null);
        return (0, Qe.j)(eV, ".RightElements"), VV.hasText ? (0, wV.jsx)("div", {
          className: "RightInfoDivContainer",
          children: (0, wV.jsx)(kU, {
            ref: xV,
            text: VV,
            className: "RightInfoDiv",
            children: (0, wV.jsx)("div", {
              className: "RightInfoDivInner",
              children: (0, wV.jsx)(nV.b, {
                text: VV.content
              })
            })
          })
        }) : null
      }))
  },
  5335: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => pV
    });
    var JV = xV(62),
      YV = xV(364),
      UV = xV(2039),
      yV = xV(1321);

    function pV(VV) {
      let {
        text: eV
      } = VV;
      const xV = [];
      let pV = "";
      return (0, YV.dc)(eV).forEach(((VV, eV) => {
        if ("string" === typeof VV || !(0, UV.h)(VV.icon)) return void(pV += "string" === typeof VV ? VV : VV.icon);
        const YV = Math.max(0, pV.trimEnd().search(/\S{1,12}$/));
        xV.push((0, yV.jsxs)(JV.Fragment, {
          children: [pV.slice(0, YV), (0, yV.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [pV.slice(YV), (0, yV.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": VV.icon,
              children: (0, yV.jsx)(UV.e, {
                itemName: VV.icon,
                amount: 0
              })
            })]
          })]
        }, eV)), pV = ""
      })), xV.push(pV), (0, yV.jsx)(yV.Fragment, {
        children: xV
      })
    }
  },
  37672: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => vV,
      i: () => wV,
      l: () => ZV
    });
    var JV = xV(62),
      YV = xV(1146),
      UV = xV.n(YV),
      yV = xV(2039),
      pV = xV(1321);
    const QV = 350;
    let nV = 0;

    function wV() {
      return nV += 1, nV
    }

    function ZV(VV, eV) {
      let xV = 0;
      for (const JV of VV) "ingredient" !== JV.kind && JV.Bw === eV && (xV += JV.amount);
      return xV > 0 ? {
        idx: eV,
        amount: xV
      } : null
    }

    function vV(VV) {
      var eV, xV;
      let {
        anim: YV,
        onComplete: nV
      } = VV;
      const wV = null !== (eV = YV.delayMs) && void 0 !== eV ? eV : 0,
        ZV = null !== (xV = YV.durationMs) && void 0 !== xV ? xV : QV,
        [vV, rV] = (0, JV.useState)(YV.from),
        [kV, bV] = (0, JV.useState)(0 === wV),
        [EV, BV] = (0, JV.useState)(!1),
        jV = (0, JV.useRef)(!1);
      return (0, JV.useEffect)((() => {
        let VV, eV;
        const xV = () => {
            jV.current = !0, bV(!0), VV = requestAnimationFrame((() => {
              eV = requestAnimationFrame((() => {
                rV({
                  x: YV.to.x,
                  y: YV.to.y
                }), BV(!0)
              }))
            }))
          },
          JV = jV.current ? 0 : wV;
        let UV;
        JV > 0 ? UV = setTimeout(xV, JV) : xV();
        const yV = setTimeout((() => {
          nV(YV.id)
        }), JV + ZV + 50);
        return () => {
          clearTimeout(UV), cancelAnimationFrame(VV), cancelAnimationFrame(eV), clearTimeout(yV)
        }
      }), [YV.id, YV.to.x, YV.to.y, nV, wV, ZV]), (0, pV.jsx)("div", {
        className: UV()("CraftItemFlyAnimation", {
          Ingredient: "ingredient" === YV.kind,
          Waiting: !kV,
          Arrived: EV
        }),
        style: {
          left: vV.x,
          top: vV.y,
          "--fly-duration": `${ZV}ms`
        },
        children: (0, pV.jsx)(yV.e, {
          itemName: YV.itemName,
          amount: YV.amount
        })
      })
    }
  },
  37657: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => CV,
      g: () => cV
    });
    var JV = xV(62),
      YV = xV(2871),
      UV = xV(7147),
      yV = xV(2193),
      pV = xV(2693),
      QV = xV(9438),
      nV = xV(375),
      wV = xV(32),
      ZV = xV(1542),
      vV = xV(40),
      rV = xV(1146),
      kV = xV.n(rV),
      bV = xV(364),
      EV = xV(37663),
      BV = xV(2021),
      jV = xV(2100),
      qV = xV(9315),
      tV = xV(1321);

    function FV(VV) {
      var eV, xV;
      let {
        slotIdx: UV
      } = VV;
      const yV = (0, jV.e)("hotbar", (VV => {
          var eV;
          return null !== (eV = VV.items[UV]) && void 0 !== eV ? eV : null
        })),
        QV = (0, jV.e)("hotbar", (VV => VV.ammo)),
        [wV, ZV] = (0, JV.useState)(!1),
        vV = (0, JV.useRef)(null),
        [rV, bV] = (0, JV.useState)(null),
        [EV, FV] = (0, JV.useState)(null),
        TV = (0, pV.j)("maxAuraLevel"),
        PV = (0, YV.c)(),
        AV = (0, JV.useCallback)((() => {
          if (clearTimeout(vV.current), yV) {
            var VV, eV, xV, JV;
            const QV = yV.displayName,
              wV = [],
              ZV = Array.isArray(QV) ? QV : [QV],
              vV = {
                fontStyle: null !== (VV = yV.attributes.customAttributes) && void 0 !== VV && VV.author ? "italic" : "normal"
              };
            for (const VV of ZV) VV.str ? wV.push(VV) : wV.push({
              str: VV,
              style: vV
            });
            if (null !== (eV = yV.attributes.customAttributes) && void 0 !== eV && eV.enchantments) {
              wV.push(" ");
              const VV = Object.entries(yV.attributes.customAttributes.enchantments).sort(((VV, eV) => eV[1] - VV[1])),
                eV = yV.attributes.customAttributes.enchantmentData;
              for (const [xV, JV] of VV) {
                var YV, UV;
                const VV = null !== (YV = null === eV || void 0 === eV || null === (UV = eV[xV]) || void 0 === UV ? void 0 : UV.icon) && void 0 !== YV ? YV : `${xV} Enchantment`;
                var pV;
                if (JV < 4)
                  for (let eV = 0; eV < JV; eV++) wV.push({
                    icon: VV,
                    style: {
                      fontSize: "1.5em"
                    }
                  });
                else wV.push({
                  icon: VV,
                  style: {
                    fontSize: "1.5em"
                  }
                }), wV.push(null !== (pV = (0, nV.O)(JV)) && void 0 !== pV ? pV : JV.toString())
              }
            }
            bV(wV), FV(null !== (xV = null === (JV = yV.attributes.customAttributes) || void 0 === JV ? void 0 : JV.enchantmentTier) && void 0 !== xV ? xV : null)
          } else bV(null), FV(null);
          ZV(!0), PV();
          const QV = null === yV || void 0 === yV ? void 0 : yV.attributes.customAttributes;
          void 0 === (null === QV || void 0 === QV ? void 0 : QV.shotsLeft) && (vV.current = setTimeout((() => {
            ZV(!1)
          }), 2e3))
        }), [null === yV || void 0 === yV ? void 0 : yV.name, UV, null === yV || void 0 === yV ? void 0 : yV.instance, null === yV || void 0 === yV ? void 0 : yV.displayName]);
      (0, JV.useEffect)((() => (AV(), () => {
        clearTimeout(vV.current), ZV(!1)
      })), [null === yV || void 0 === yV ? void 0 : yV.name, UV, null === yV || void 0 === yV ? void 0 : yV.instance, AV]);
      const NV = null === yV || void 0 === yV || null === (eV = yV.attributes.customAttributes) || void 0 === eV ? void 0 : eV.shotsLeft,
        XV = void 0 === NV ? null : (0, tV.jsx)("div", {
          className: "SelectedItemShotsLeft",
          children: `${NV}|${yV.requiresAmmo?`${QV}x${yV.clipSize}`:yV.clipSize}`
        }),
        MV = (0, qV.o)();
      return (0, tV.jsx)(tV.Fragment, {
        children: wV && yV && !MV.showing ? (0, tV.jsxs)("div", {
          className: kV()("SelectedItemName SmallTextBold", {
            NoAuraBar: 0 === TV,
            Enchanted: null !== EV
          }),
          style: {
            "--enchantmentColour": null !== (xV = nV.kb[EV]) && void 0 !== xV ? xV : nV.kb.None,
            "--duration": EV ? (0, nV.gb)(EV) + "s" : void 0
          },
          children: [EV && (0, tV.jsxs)("div", {
            className: "SelectedItemNameGradient",
            children: [(0, tV.jsx)(BV.b, {
              text: rV
            }), XV]
          }), (0, tV.jsxs)("div", {
            className: "SelectedItemNameNormal",
            children: [(0, tV.jsx)(BV.b, {
              text: rV
            }), XV]
          })]
        }) : null
      })
    }
    var TV = xV(37672),
      PV = xV(27),
      AV = xV(2051),
      NV = xV(657),
      XV = xV(2695),
      MV = xV(3842),
      zV = xV(3848);
    var GV = xV(1159),
      WV = xV(1157),
      RV = xV(2752);

    function gV() {
      return parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--touch-hotbar-ends-spare")) >= 0
    }
    var DV = xV(9513),
      iV = xV(1569);
    const CV = (0, JV.memo)((function() {
      const [VV, eV] = (0, JV.useState)(0), xV = (0, pV.j)("useFullInventory"), yV = (0, pV.j)("highlightedHotbarSlots"), {
        isTouchScreen: QV,
        openInGameMenuName: nV
      } = (0, PV.l)(["isTouchScreen", "openInGameMenuName"]), vV = null !== nV && "inventory" !== nV, rV = (0, jV.h)("fullInventory") && "inventory" === nV, bV = function() {
        const VV = (0, GV.n)(((VV, eV) => `${VV}:${(0,WV.d)(VV,eV)?"portrait":"landscape"}`)),
          [eV, xV] = (0, JV.useState)(gV);
        return (0, JV.useLayoutEffect)((() => {
          xV(gV())
        }), [VV]), (0, ZV.g)(RV.e, (() => {
          xV(gV())
        })), eV
      }(), BV = QV && !bV;
      ! function(VV, eV, xV) {
        (0, JV.useLayoutEffect)((() => {
          const JV = document.documentElement.classList;
          return VV && (JV.add("TouchHotbar"), JV.toggle("TouchHotbarKeysAbove", eV), JV.toggle("TouchHotbarHasBag", xV)), (0, MV.j)(), wV.h.QZ(zV.b), () => {
            JV.remove("TouchHotbar", "TouchHotbarKeysAbove", "TouchHotbarHasBag"), (0, MV.j)(), wV.h.QZ(zV.b)
          }
        }), [VV, eV, xV])
      }(QV, BV, xV);
      const [qV, XV] = (0, UV.c)("changedHotbarUsingNumkeys", !0), DV = (0, jV.e)("hotbar", (VV => VV.selectedSlot)), iV = null !== DV && void 0 !== DV ? DV : VV, CV = (0, YV.c)(), hV = (0, JV.useRef)(null), lV = (0, ZV.j)("pointerLockUpdate", Boolean(document.pointerLockElement));
      (0, ZV.g)("inventoryDraggedItemUpdated", (VV => {
        hV.current = VV, CV()
      })), (0, jV.c)("hotbarScrolled", (VV => {
        null === DV && mV(VV)
      })), (0, jV.c)("hotbarSlotRequested", (VV => {
        fV(VV), XV(!1)
      })), (0, jV.c)("numberKeyPressed", (() => {
        XV(!1)
      })), (0, jV.c)("hotbarDropRequested", (VV => {
        const eV = AV.gameBridge.latest("hotbar").items[iV];
        if (eV) {
          var xV;
          const JV = VV && null !== (xV = eV.amount) && void 0 !== xV ? xV : 1;
          AV.gameBridge.send("removeInventoryItem", {
            slot: iV,
            amount: JV,
            drop: !0
          })
        }
      }));
      const fV = VV => {
          AV.gameBridge.send("selectHotbarSlot", VV), eV(VV)
        },
        mV = VV => {
          fV((iV + VV + NV.n) % NV.n)
        };
      let KV, HV = null,
        uV = null,
        sV = VV => VV => {},
        SV = VV => eV => {
          fV(VV)
        },
        IV = VV => VV => {},
        dV = [];
      if (rV) {
        var OV;
        const VV = hV.current;
        if (null === VV || void 0 === VV || !VV.setHovered) return (0, tV.jsx)("div", {
          className: kV()("HotBarContainer", {
            Touch: QV,
            KeysAbove: BV
          }),
          children: (0, tV.jsx)("div", {
            className: "HotBar"
          })
        });
        HV = VV.draggedInfo, uV = VV.specialItemInfo, sV = VV.setHovered, SV = VV.pointerDown, IV = VV.pointerUp, KV = VV.variation, dV = null !== (OV = VV.craftFlyAnims) && void 0 !== OV ? OV : []
      }
      return (0, tV.jsxs)("div", {
        className: kV()("HotBarContainer", {
          Touch: QV,
          PopupOpen: QV && vV,
          KeysAbove: BV
        }),
        children: [(0, tV.jsxs)("div", {
          className: kV()("HotBar", {
            HoverDisabled: lV
          }),
          children: [QV && (0, tV.jsxs)(tV.Fragment, {
            children: [(0, tV.jsx)(oV, {
              useFullInventory: xV,
              inventoryOpen: rV
            }), (0, tV.jsx)(aV, {
              direction: "Previous",
              onPress: () => {
                mV(-1)
              }
            })]
          }), !QV && (0, tV.jsxs)(tV.Fragment, {
            children: [(0, tV.jsx)(cV, {}), (0, tV.jsx)("div", {
              className: "HotBarFiller"
            })]
          }), (0, tV.jsx)("div", {
            className: "HotBarGameItemsContainer",
            children: new Array(10).fill(0).map(((VV, eV) => (0, tV.jsx)(EV.c, {
              idx: eV,
              draggedInfo: HV,
              specialItemInfo: uV,
              craftFlyHoldbackInfo: (0, TV.l)(dV, eV),
              setHovered: sV(eV),
              pointerDown: SV(eV),
              pointerUp: IV(eV),
              variation: KV,
              isSelected: eV === iV,
              hotbarHighlighted: !0 === (null === yV || void 0 === yV ? void 0 : yV.includes(eV)),
              hoverDisabled: lV,
              showNumber: qV && !QV
            }, eV)))
          }), QV && (0, tV.jsx)(aV, {
            direction: "Next",
            onPress: () => {
              mV(1)
            }
          }), !QV && (0, tV.jsxs)(tV.Fragment, {
            children: [(0, tV.jsx)("div", {
              className: "HotBarFiller"
            }), (0, tV.jsx)("div", {
              className: kV()("HotBarItem ButtonHotBarItem", {
                HiddenButtonHotBarItem: !xV
              }),
              onPointerDown: () => {
                wV.h.QZ("toggleMenu", "inventory")
              },
              children: (0, tV.jsx)(LV, {})
            })]
          })]
        }), (0, tV.jsx)(FV, {
          slotIdx: iV
        })]
      })
    }));

    function aV(VV) {
      let {
        direction: eV,
        onPress: xV
      } = VV;
      return (0, tV.jsx)("div", {
        className: kV()("HotBarArrow", eV),
        ...iV.f,
        children: (0, tV.jsx)(yV.b, {
          icon: "Previous" === eV ? "caret-left" : "caret-right",
          touchPressOn: "pointerdown",
          onClick: xV
        })
      })
    }
    const oV = (0, JV.memo)((function(VV) {
        let {
          useFullInventory: eV,
          inventoryOpen: xV
        } = VV;
        const YV = (0, pV.j)("maxAuraLevel"),
          UV = (0, JV.useRef)(null),
          yV = (0, QV.c)();
        return function(VV, eV, xV) {
          (0, JV.useLayoutEffect)((() => (document.documentElement.classList.toggle("TouchHotbarHasShop", eV), wV.h.QZ(zV.b), () => {
            document.documentElement.classList.remove("TouchHotbarHasShop")
          })), [eV]), (0, JV.useLayoutEffect)((() => {
            const eV = VV.current.closest(".BottomMiddleElements");
            return eV.classList.toggle("TouchInventoryOpen", xV), () => {
              eV.classList.remove("TouchInventoryOpen")
            }
          }), [VV, xV])
        }(UV, yV, xV), (0, DV.e)(UV, yV, xV), (0, tV.jsxs)("div", {
          ref: UV,
          className: kV()("TouchInventoryKeys", {
            NoAuraBar: 0 === YV,
            InventoryOpen: xV
          }),
          children: [(0, tV.jsx)(cV, {
            touchKey: !0
          }), (0, tV.jsx)("div", {
            className: kV()("TouchInventoryKey BagKey", {
              Hidden: !eV
            }),
            ...iV.f,
            children: (0, tV.jsx)(LV, {
              touchKey: !0
            })
          })]
        })
      })),
      cV = (0, JV.memo)((function(VV) {
        let {
          touchKey: eV = !1
        } = VV;
        const xV = (0, QV.c)();
        return (0, tV.jsx)("div", {
          className: eV ? kV()("TouchInventoryKey ShopKey", {
            Hidden: !xV
          }) : kV()("HotBarItem ButtonHotBarItem", {
            HiddenButtonHotBarItem: !xV
          }),
          ...eV ? iV.f : {},
          children: (0, tV.jsx)(yV.b, {
            icon: (0, nV.cc)(),
            noaAction: "OpenShop",
            touchPressOn: "pointerdown",
            onClick: () => {
              xV && PV.b.set({
                openEverythingMenuName: bV.q.SHOP
              })
            },
            showTouchTutorialPubSubId: "showShopTouchTutorial",
            showRedDotPubSubId: "showShopIconRedDot",
            touchIconPosition: "topleft"
          })
        })
      }));

    function hV(VV) {
      let {
        player: eV
      } = VV;
      return eV.some((VV => null !== VV && nV.Uc.includes(VV.name)))
    }

    function lV(VV) {
      VV.creative || vV.m.getItem("LogInInventoryRedDotTutorialComplete") || (hV(VV) ? (wV.h.QZ("RedDotOpenInventoryIcon", !0), wV.h.QZ("TouchTutorialOpenInventoryIcon", !0)) : (wV.h.QZ("RedDotOpenInventoryIcon", !1), wV.h.QZ("TouchTutorialOpenInventoryIcon", !1)))
    }
    const LV = (0, JV.memo)((function(VV) {
      let {
        touchKey: eV = !1
      } = VV;
      (0, JV.useEffect)((() => {
        lV(AV.gameBridge.latest("inventory"))
      }), []), (0, jV.c)("inventory", lV);
      const xV = (0, XV.h)();
      return (0, ZV.g)("toggleMenu", (VV => {
        xV.shown && (null !== VV && void 0 !== VV && VV.startsWith("inventory") && hV(AV.gameBridge.latest("inventory")) ? (vV.m.setItem("LogInInventoryRedDotTutorialComplete", !0), wV.h.QZ("RedDotOpenInventoryIcon", !1), wV.h.QZ("TouchTutorialOpenInventoryIcon", !1)) : "shop" === VV && wV.h.QZ("showShopTouchTutorial", !1))
      })), eV ? (0, tV.jsx)(yV.b, {
        icon: "backpack",
        noaAction: "OpenInventory",
        touchPressOn: "pointerdown",
        onClick: () => {
          wV.h.QZ("toggleMenu", "inventory")
        },
        showRedDotPubSubId: "RedDotOpenInventoryIcon",
        showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
        touchIconPosition: "topleft"
      }) : (0, tV.jsx)("div", {
        className: "HotBarButton",
        onPointerDown: () => {
          wV.h.QZ("toggleMenu", "inventory")
        },
        children: (0, tV.jsx)(yV.b, {
          icon: "backpack",
          noaAction: "OpenInventory",
          onPointerDown: VV => {
            wV.h.QZ("toggleMenu", "inventory"), VV.stopPropagation()
          },
          showRedDotPubSubId: "RedDotOpenInventoryIcon",
          showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
          touchIconPosition: "topleft"
        })
      })
    }))
  },
  37663: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => EV,
      d: () => kV
    });
    var JV = xV(62),
      YV = xV(1146),
      UV = xV.n(YV),
      yV = xV(2042),
      pV = xV(2039),
      QV = xV(2051),
      nV = xV(2100),
      wV = xV(37669),
      ZV = xV(35317),
      vV = xV(1473),
      rV = xV(1321);
    const kV = (VV, eV, xV) => {
      let JV = eV,
        YV = !1;
      for (const UV of xV)(null === UV || void 0 === UV ? void 0 : UV.idx) === VV && (YV = !0, JV > 0 && (JV -= UV.amount));
      return {
        displayedAmt: JV,
        shown: !YV || JV > 0
      }
    };
    const bV = VV => {
        let {
          idx: eV
        } = VV;
        return (0, vV.E)() ? null : (0, rV.jsx)("div", {
          className: "HotbarItemNumber SmallTextBold",
          children: eV < 9 ? eV + 1 : 0
        })
      },
      EV = (0, JV.memo)((function(VV) {
        var eV, xV, JV;
        let {
          idx: YV,
          setHovered: vV,
          pointerDown: EV,
          pointerUp: BV,
          draggedInfo: jV,
          specialItemInfo: qV,
          craftFlyHoldbackInfo: tV,
          defaultIconB64: FV = null,
          variation: TV,
          isSelected: PV = !1,
          hotbarHighlighted: AV = !1,
          hoverDisabled: NV = !1,
          showNumber: XV = !1,
          showNewDot: MV = !1
        } = VV;
        const zV = (0, nV.e)("inventory", (VV => YV === wV.f ? null : (0, ZV.n)(VV, YV)));
        let GV, WV, RV, gV;
        if (YV === wV.f) qV && (GV = qV.name, RV = qV.amount, gV = qV.attributes);
        else if (zV) {
          var DV;
          GV = zV.name, WV = zV.icon, RV = null !== (DV = zV.amount) && void 0 !== DV ? DV : 0, gV = zV.attributes
        }
        const iV = null === (eV = gV) || void 0 === eV || null === (xV = eV.customAttributes) || void 0 === xV ? void 0 : xV.enchantmentTier,
          CV = (0, yV.k)(gV),
          {
            displayedAmt: aV,
            shown: oV
          } = kV(YV, RV, [jV, qV, tV]),
          cV = GV && oV,
          hV = void 0 !== TV && function(VV, eV) {
            const {
              enchantable: xV,
              salvageable: JV
            } = QV.gameBridge.latest("stationItems");
            return "Enchanting Table" === VV ? !0 === xV[eV] : "Salvaging Table" === VV && !0 === JV[eV]
          }(TV, GV);
        return (0, rV.jsxs)("div", {
          className: UV()("InvenItem", {
            Highlighted: cV && hV,
            Selected: PV,
            HotbarHighlighted: AV,
            HoverDisabled: NV
          }),
          onPointerEnter: () => {
            null === vV || void 0 === vV || vV(!0)
          },
          onPointerLeave: () => {
            null === vV || void 0 === vV || vV(!1)
          },
          onPointerDown: EV,
          onPointerUp: BV,
          "data-inven-idx": YV,
          children: [cV && (0, rV.jsx)(pV.e, {
            itemName: null !== (JV = WV) && void 0 !== JV ? JV : GV,
            amount: aV,
            enchantmentTier: iV,
            bar: CV
          }), cV && MV && (0, rV.jsx)("div", {
            className: "InvenItemNewDot"
          }), XV && (0, rV.jsx)(bV, {
            idx: YV
          }), FV && !cV && (0, rV.jsx)("div", {
            className: "InvenItemUnfilled",
            style: {
              backgroundImage: `url(${FV})`
            }
          })]
        })
      }))
  },
  37669: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => JV,
      f: () => YV
    });
    const JV = -1,
      YV = -2
  },
  38183: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => NV
    });
    var JV = xV(62),
      YV = xV(38185),
      UV = xV(2021),
      yV = xV(642),
      pV = xV(32),
      QV = xV(1146),
      nV = xV.n(QV),
      wV = xV(37695),
      ZV = xV(2908),
      vV = xV(3069),
      rV = xV(2925),
      kV = xV(2913),
      bV = xV(4020),
      EV = xV(37704),
      BV = xV(27),
      jV = xV(2163),
      qV = xV(2524),
      tV = xV(1252),
      FV = xV(5410),
      TV = xV(2100),
      PV = xV(99),
      AV = xV(1321);
    const NV = (0, JV.memo)((function() {
      const VV = (0, YV.b)(),
        eV = (0, TV.h)("players"),
        xV = (0, TV.h)("lobbyLeaderboardRows"),
        pV = (0, TV.h)("hiddenPlayerNames"),
        QV = (0, JV.useRef)(null),
        [nV, wV] = (0, JV.useReducer)((VV => VV + 1), 0);
      return (0, JV.useEffect)((() => (0, jV.b)((() => {
        wV()
      }))), []), (0, AV.jsx)("div", {
        className: "LobbyLeaderboardContainer Menu",
        children: (0, AV.jsx)("div", {
          className: "MenuBody",
          children: function() {
            if (!VV) return (0, AV.jsx)(AV.Fragment, {});
            const JV = [...eV.ids],
              YV = {},
              nV = {};
            for (const VV of JV) {
              var wV, ZV;
              YV[VV] = null === (wV = xV[VV]) || void 0 === wV ? void 0 : wV.colour;
              const eV = null === (ZV = xV[VV]) || void 0 === ZV ? void 0 : ZV.values;
              eV && (nV[VV] = {
                ...eV
              })
            }
            const rV = Object.keys(VV);
            rV.sort(((eV, xV) => VV[eV].sortPriority - VV[xV].sortPriority)), JV.sort(((eV, xV) => {
              if (!nV[eV] || !nV[xV]) return 0;
              for (const JV of rV) {
                const YV = nV[eV][JV],
                  UV = nV[xV][JV];
                let yV = 0;
                if ("string" == typeof YV && "string" == typeof UV ? yV = YV.localeCompare(UV) : "number" == typeof YV && "number" == typeof UV ? yV = YV - UV : "number" == typeof YV && "string" == typeof UV ? yV = 1 : "string" == typeof YV && "number" == typeof UV && (yV = -1), yV) return yV * ("ascending" === VV[JV].sortOrder ? 1 : -1)
              }
              return 0
            }));
            for (const VV of JV) {
              var kV, bV, EV;
              const {
                name: JV,
                ranks: YV,
                cosmetics: UV
              } = eV.byId[VV], pV = [], QV = null !== (kV = null === (bV = xV[VV]) || void 0 === bV || null === (EV = bV.tags) || void 0 === EV ? void 0 : EV.flatMap((VV => 0 === VV.length ? VV : [...VV, String.fromCharCode(8198)]))) && void 0 !== kV ? kV : [];
              pV.push(...QV), pV.push(...(0, tV.t)(YV, JV, (null === UV || void 0 === UV ? void 0 : UV.nameColour) === yV.e || null === UV || void 0 === UV ? void 0 : UV.nameColour)), nV[VV] ??= {}, nV[VV].name = pV
            }

            function BV(VV, xV) {
              if (nV[VV] && void 0 !== nV[VV][xV]) {
                if ("name" === xV) {
                  const {
                    name: JV,
                    cosmetics: YV
                  } = eV.byId[VV];
                  return (0, AV.jsxs)("div", {
                    className: "PlayerPfpAndName",
                    children: [YV && (0, AV.jsx)(qV.e, {
                      cosmetics: YV
                    }), " ", (0, AV.jsx)(UV.b, {
                      text: nV[VV][xV],
                      friendBadgeFor: (0, jV.e)(JV, pV) ? JV : void 0
                    })]
                  })
                }
                return (0, AV.jsx)(UV.b, {
                  text: nV[VV][xV]
                })
              }
              return ""
            }
            const TV = Object.keys(VV).filter((eV => !0 !== VV[eV].hidden)).map((eV => {
              var xV;
              return {
                key: eV,
                header: (0, AV.jsx)(UV.b, {
                  text: null !== (xV = VV[eV].displayName) && void 0 !== xV ? xV : ""
                })
              }
            }));
            return (0, AV.jsx)("div", {
              ref: QV,
              className: "LobbyLeaderboard",
              children: (0, AV.jsx)(FV.c, {
                columns: TV,
                rows: JV,
                getRowKey: VV => VV,
                renderRow: xV => {
                  const JV = xV !== eV.localId;
                  return (0, AV.jsx)(XV, {
                    playerId: xV,
                    playerName: eV.byId[xV].name,
                    isOtherPlayer: JV,
                    opensProfileCard: (0, vV.g)(JV, eV.byId[xV].name, pV),
                    lobbyLeaderboardInfo: VV,
                    getPlayerValue: BV,
                    playerColors: YV
                  })
                }
              })
            })
          }()
        })
      })
    }));

    function XV(VV) {
      let {
        playerId: eV,
        playerName: xV,
        isOtherPlayer: YV,
        opensProfileCard: UV,
        lobbyLeaderboardInfo: yV,
        getPlayerValue: QV,
        playerColors: jV
      } = VV;
      const qV = (0, JV.useRef)(null);
      (0, JV.useEffect)((() => () => {
        ZV.c.closeIfOwner(qV)
      }), []);
      const tV = {
          icon: "flag",
          text: "Report",
          onClick: () => {
            pV.h.QZ("OpenReportMenu", {
              playerEId: eV,
              playerName: xV,
              yZ: null,
              serverChatMsgId: null
            })
          }
        },
        FV = () => ({
          ...(0, vV.f)(eV, xV),
          showLocation: !1,
          status: null,
          extraActions: [tV],
          moderationActions: null === xV ? [] : (0, EV.b)(xV),
          friendRequestSource: "leaderboard"
        });
      return (0, AV.jsxs)("tr", {
        ref: qV,
        "data-pad-focusable": UV || void 0,
        [ZV.f]: UV || void 0,
        onClick: UV ? () => {
          var VV;
          ZV.c.toggle(qV, {
            ...FV(),
            anchor: null !== (VV = qV.current.querySelector(".PlayerPfpAndName")) && void 0 !== VV ? VV : qV.current
          })
        } : void 0,
        onContextMenu: UV ? VV => {
          (0, rV.g)(qV, VV, FV(), BV.b.get("isTouchScreen"))
        } : void 0,
        onPointerDown: UV ? VV => {
          (0, kV.e)(VV, (() => (0, vV.f)(eV, xV).playerSocialPreview))
        } : void 0,
        children: [Object.keys(yV).map((VV => !0 === yV[VV].hidden ? null : (0, AV.jsxs)("td", {
          className: nV()("LobbyLeaderboardValue SmallTextBold", {
            LobbyLeaderboardValueHighlighted: !YV
          }),
          children: [(0, AV.jsx)("div", {
            className: "LobbyLeaderboardValueText",
            children: QV(eV, VV)
          }), (0, AV.jsx)("div", {
            className: "LobbyLeaderboardValueBg",
            style: {
              backgroundColor: jV[eV]
            }
          })]
        }, VV))), YV && !UV && (0, AV.jsx)(wV.e, {
          className: "LobbyLeaderboardRowFloatingActions",
          triggerElementRef: qV,
          options: [{
            icon: tV.icon,
            text: tV.text,
            onPointerDown: tV.onClick
          }, ...null === xV || PV.featureFlags.useSocialFeatures ? [] : (0, bV.b)(null, xV)]
        })]
      })
    }
  },
  37704: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => wV
    });
    var JV = xV(2080),
      YV = xV(2712),
      UV = xV(37712);
    const yV = {
      kick: "lobbyManageEntry:kicked",
      ban: "lobbyManageEntry:banned",
      unban: "lobbyManageEntry:unbanned"
    };

    function pV(VV, eV) {
      return async () => function(VV, eV, xV) {
        return null === eV ? {
          message: {
            key: "lobbyManageEntry:noAnswer"
          },
          next: null
        } : eV.ok ? {
          message: {
            key: yV[VV.type]
          },
          next: xV
        } : {
          message: {
            fromServer: eV.message
          },
          next: null
        }
      }(VV, await (0, UV.f)(VV), eV())
    }

    function QV(VV) {
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
        run: pV({
          type: "ban",
          name: VV
        }, (() => function(VV) {
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
            run: pV({
              type: "unban",
              name: VV
            }, (() => null))
          }
        }(VV)))
      }
    }

    function nV(VV, eV) {
      if (null === VV) return [];
      const xV = [],
        JV = function(VV, eV) {
          var xV, JV;
          return null !== (xV = null !== (JV = VV.here.find((VV => VV.name === eV))) && void 0 !== JV ? JV : VV.away.find((VV => VV.name === eV))) && void 0 !== xV ? xV : null
        }(VV, eV);
      var UV, yV;
      return null !== JV && void 0 !== JV && JV.can.kick && xV.push((UV = eV, yV = JV.can.ban, {
        kind: "act",
        icon: "person-falling-burst",
        text: "lobbyManageEntry:kick",
        destructive: !1,
        confirm: null,
        analyticsClick: {
          id: "lobby_manage.kick",
          value: "profile_card"
        },
        run: pV({
          type: "kick",
          name: UV
        }, (() => yV ? QV(UV) : null))
      })), null !== JV && void 0 !== JV && JV.can.ban && xV.push(QV(eV)), xV.push({
        kind: "leave",
        icon: "users-gear",
        text: "lobbyManageEntry:manageLobby",
        destructive: !1,
        onClick: () => {
          (0, YV.e)({
            page: "players",
            focusName: eV,
            source: "profile_card"
          })
        }
      }), xV
    }

    function wV(VV) {
      var eV;
      return nV(null !== (eV = JV.c.get("lobbyManage")) && void 0 !== eV ? eV : null, VV)
    }
  },
  37712: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => wV,
      f: () => QV
    });
    var JV = xV(1586),
      YV = xV(2080),
      UV = xV(2051);
    const yV = 1e4;
    let pV = 0;

    function QV(VV) {
      const eV = ++pV;
      return new Promise((xV => {
        const pV = eV => {
            QV(), clearTimeout(nV), !1 === (null === eV || void 0 === eV ? void 0 : eV.ok) && (0, JV.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: VV.type
            }), xV(eV)
          },
          QV = YV.c.subscribe("lobbyManage", (VV => {
            const xV = function(VV, eV) {
              var xV;
              return null !== (xV = null === VV || void 0 === VV ? void 0 : VV.results.find((VV => VV.requestId === eV))) && void 0 !== xV ? xV : null
            }(VV, eV);
            null !== xV && pV(xV)
          })),
          nV = setTimeout((() => {
            pV(null)
          }), yV);
        UV.gameBridge.send("lobbyManage", {
          ...VV,
          requestId: eV
        })
      }))
    }
    const nV = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class wV {
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QV;
        this.onChange = VV, this.sendAction = eV, this.pending = new Map, this.statuses = new Map
      }
      send(VV, eV, xV) {
        var JV;
        return this.statuses.delete(eV), this.pending.set(eV, (null !== (JV = this.pending.get(eV)) && void 0 !== JV ? JV : 0) + 1), this.sendAction(VV).then((VV => {
          var JV;
          const YV = null !== VV && void 0 !== VV ? VV : {
              requestId: -1,
              ok: !1,
              message: nV
            },
            UV = (null !== (JV = this.pending.get(eV)) && void 0 !== JV ? JV : 1) - 1;
          UV > 0 ? this.pending.set(eV, UV) : this.pending.delete(eV);
          const yV = !YV.ok || YV.message.length > 0 ? YV.message : null === xV ? null : [xV];
          return null !== yV && this.statuses.set(eV, {
            ok: YV.ok,
            text: yV,
            until: Date.now() + 4e3
          }), this.onChange(), YV
        }))
      }
      show(VV, eV) {
        this.statuses.set(VV, {
          ...eV,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(VV) {
        for (const [eV, xV] of this.statuses) xV.until <= VV && this.statuses.delete(eV)
      }
      nextDeadline() {
        let VV = null;
        for (const xV of this.statuses.values()) {
          var eV;
          VV = Math.min(null !== (eV = VV) && void 0 !== eV ? eV : 1 / 0, xV.until)
        }
        return VV
      }
      statusOf(VV, eV) {
        const xV = this.statuses.get(VV);
        return !xV || xV.until <= eV ? null : {
          ok: xV.ok,
          text: xV.text
        }
      }
      isPending(VV) {
        return this.pending.has(VV)
      }
    }
  },
  5261: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => jV,
      b: () => BV
    });
    var JV = xV(62),
      YV = xV(1542),
      UV = xV(2021),
      yV = xV(5264),
      pV = xV(1321);
    const QV = (0, JV.memo)((function(VV) {
      let {
        initialParameters: eV
      } = VV;
      const xV = (0, JV.useRef)(null),
        YV = (0, JV.useRef)(null),
        QV = (0, JV.useRef)(0),
        nV = (0, JV.useRef)(null),
        wV = eV.description,
        ZV = eV.fJ,
        {
          scale: vV,
          rotation: rV
        } = null !== eV && void 0 !== eV ? eV : {},
        kV = (0, yV.f)();
      return (0, JV.useEffect)((() => {
        const VV = kV.onFrame((() => {
          const VV = kV.getState();
          if (!VV.isActive || !xV.current || !YV.current) return;
          const eV = VV.state;
          if (xV.current.value = eV.progress, eV.clickCount > QV.current) {
            QV.current = eV.clickCount;
            const VV = YV.current;
            VV.classList.add("pulse"), nV.current = setTimeout((() => {
              VV.classList.remove("pulse")
            }), 100)
          }
        }));
        return () => {
          clearTimeout(nV.current), VV()
        }
      }), [kV]), (0, pV.jsx)(pV.Fragment, {
        children: (0, pV.jsxs)("div", {
          className: "QTEProgressBarWrapper",
          style: {
            ...null !== vV && {
              "--scale": vV
            },
            ...null !== rV && {
              "--rotation": `${rV}deg`
            }
          },
          children: [(0, pV.jsx)("progress", {
            id: "catch",
            max: 100,
            className: "QTEProgressBar",
            ref: xV
          }), (0, pV.jsx)("span", {
            className: "QTEProgressBarInteractionIndicator",
            ref: YV,
            children: (0, pV.jsx)(UV.b, {
              text: [{
                icon: ZV
              }]
            })
          }), (0, pV.jsx)("div", {
            className: "QTEProgressBarDescription",
            children: (0, pV.jsx)(UV.b, {
              text: wV
            })
          })]
        })
      })
    }));
    var nV = xV(1146),
      wV = xV.n(nV);
    const ZV = 2 * Math.PI * 90,
      vV = (0, JV.memo)((function(VV) {
        let {
          initialParameters: eV
        } = VV;
        const xV = (0, JV.useRef)(null),
          YV = (0, JV.useRef)(null),
          QV = (0, JV.useRef)(null),
          nV = eV.label,
          vV = eV.icon,
          rV = eV.HJ,
          {
            scale: kV,
            rotation: bV,
            uJ: EV
          } = null !== eV && void 0 !== eV ? eV : {},
          BV = (0, yV.f)();
        return (0, JV.useEffect)((() => {
          const VV = BV.onFrame((() => {
            var VV, eV;
            const JV = BV.getState();
            if (!JV.isActive || !YV.current) return;
            const UV = JV.state,
              yV = null !== (VV = UV.timeRemaining) && void 0 !== VV ? VV : 0,
              pV = null !== (eV = UV.KJ) && void 0 !== eV ? eV : 1,
              nV = ZV * (1 - yV / pV);
            YV.current.style.strokeDashoffset = `${nV}`, xV.current && (xV.current.style.opacity = yV > 0 ? "1" : "0"), QV.current && rV && (QV.current.textContent = `${(yV/1e3).toFixed(1)}s`)
          }));
          return () => {
            VV()
          }
        }), [BV, rV]), (0, pV.jsxs)("div", {
          className: "QTETimedClick",
          ref: xV,
          style: {
            ...null !== kV && {
              "--scale": kV
            },
            ...null !== bV && {
              "--rotation": `${bV}deg`
            }
          },
          children: [(0, pV.jsxs)("div", {
            className: "QTETimedClickCircleContainer",
            children: [(0, pV.jsxs)("svg", {
              className: "QTETimedClickCircularProgress",
              viewBox: "0 0 200 200",
              children: [(0, pV.jsx)("circle", {
                className: "QTETimedClickProgressTrack",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12"
              }), (0, pV.jsx)("circle", {
                className: "QTETimedClickProgressArc",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12",
                strokeLinecap: "square",
                strokeDasharray: ZV,
                ref: YV
              })]
            }), (0, pV.jsx)("div", {
              className: "QTETimedClickCenterContent",
              children: (0, pV.jsx)(UV.b, {
                text: [{
                  icon: vV
                }],
                className: wV()("QTETimedClickInnerText", {
                  QTETimedClickBreathe: EV
                })
              })
            })]
          }), (0, pV.jsxs)("div", {
            className: "QTETimedClickRightTextContainer",
            children: [(0, pV.jsx)(UV.b, {
              text: nV,
              className: "QTETimedClickLabelText"
            }), rV && (0, pV.jsx)("span", {
              className: "QTETimedClickTimeText",
              ref: QV
            })]
          })]
        })
      })),
      rV = (0, JV.memo)((function(VV) {
        let {
          initialParameters: eV
        } = VV;
        const xV = (0, JV.useRef)(null),
          YV = (0, JV.useRef)(null),
          QV = (0, JV.useRef)(null),
          nV = (0, JV.useRef)(!1),
          wV = eV.description,
          ZV = null === eV || void 0 === eV ? void 0 : eV.icon,
          vV = (0, yV.f)();
        return (0, JV.useEffect)((() => {
          const VV = vV.onFrame((() => {
            const VV = vV.getState();
            if (!VV.isActive) return;
            const eV = VV.state;
            if (xV.current) {
              const VV = 100 * (eV.catchZonePosition - eV.SJ / 2);
              xV.current.style.left = `${VV}%`, xV.current.style.width = 100 * eV.SJ + "%", eV.isCatching !== nV.current && (nV.current = eV.isCatching, eV.isCatching ? xV.current.classList.add("catching") : xV.current.classList.remove("catching"))
            }
            YV.current && (YV.current.style.left = 100 * eV.moverPosition + "%"), QV.current && (QV.current.value = eV.progress)
          }));
          return () => {
            VV()
          }
        }), [vV]), (0, pV.jsxs)("div", {
          className: "QTEGravityBar",
          children: [(0, pV.jsx)("div", {
            className: "QTEGravityBarDescription",
            children: (0, pV.jsx)(UV.b, {
              text: wV
            })
          }), (0, pV.jsx)("progress", {
            max: 100,
            className: "QTEGravityBarProgress",
            ref: QV
          }), (0, pV.jsxs)("div", {
            className: "QTEGravityBarTrack",
            children: [(0, pV.jsx)("div", {
              className: "QTEGravityBarCatchZone",
              ref: xV
            }), (0, pV.jsx)("div", {
              className: "QTEGravityBarMover",
              ref: YV,
              children: (0, pV.jsx)("span", {
                children: ZV && (0, pV.jsx)(UV.b, {
                  text: [{
                    icon: ZV,
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
    var kV = xV(657);
    const bV = (0, JV.memo)((function(VV) {
        let {
          initialParameters: eV
        } = VV;
        const xV = (0, JV.useRef)(null),
          YV = eV.label,
          QV = eV.JY,
          {
            icon: nV,
            scale: wV,
            rotation: ZV
          } = null !== eV && void 0 !== eV ? eV : {},
          vV = 100 * (.5 - QV / 2),
          rV = 100 * QV,
          bV = (0, yV.f)();
        return (0, JV.useEffect)((() => {
          const VV = bV.onFrame((() => {
            const VV = bV.getState();
            if (!VV.isActive || !xV.current) return;
            const eV = VV.state;
            xV.current.style.left = 100 * eV.markerPosition + "%"
          }));
          return () => {
            VV()
          }
        }), [bV]), (0, pV.jsxs)("div", {
          className: "QTEPrecisionBarWrapper",
          style: {
            ...!(0, kV.J)(wV) && {
              "--scale": wV
            },
            ...!(0, kV.J)(ZV) && {
              "--rotation": `${ZV}deg`
            }
          },
          children: [nV && (0, pV.jsx)(UV.b, {
            text: [{
              icon: nV
            }],
            className: "QTEPrecisionBarIcon"
          }), (0, pV.jsxs)("div", {
            className: "QTEPrecisionBarTrack",
            children: [(0, pV.jsx)("div", {
              className: "QTEPrecisionBarSuccessZone",
              style: {
                left: `${vV}%`,
                width: `${rV}%`
              }
            }), (0, pV.jsx)("div", {
              className: "QTEPrecisionBarMarker",
              ref: xV
            })]
          }), (0, pV.jsx)("div", {
            className: "QTEPrecisionBarLabel",
            children: (0, pV.jsx)(UV.b, {
              text: YV
            })
          })]
        })
      })),
      EV = (0, JV.memo)((function(VV) {
        let {
          initialParameters: eV
        } = VV;
        const xV = (0, JV.useRef)(null),
          [YV, QV] = (0, JV.useState)((() => new Array(eV.UY).fill("pending"))),
          [nV, wV] = (0, JV.useState)((() => {
            const VV = eV.QY;
            return (0, kV.J)(VV) || VV <= 0 ? [] : new Array(VV).fill("pending")
          })),
          ZV = eV.label,
          {
            icon: vV
          } = eV,
          rV = (0, JV.useRef)(0),
          bV = (0, JV.useRef)(0),
          EV = (0, JV.useRef)([]),
          BV = (0, yV.f)();
        return (0, JV.useEffect)((() => {
          const VV = BV.onFrame((() => {
            const VV = BV.getState();
            if (!VV.isActive || !xV.current) return;
            const eV = VV.state,
              JV = 30 + 60 * eV.outerCircleProgress;
            if (xV.current.setAttribute("r", String(JV)), !0 === eV.lastClickResult && eV.successes > rV.current) {
              xV.current.classList.remove("QTERhythmClickOuterCircle--miss"), xV.current.classList.add("QTERhythmClickOuterCircle--hit");
              const VV = setTimeout((() => {
                var VV;
                null === (VV = xV.current) || void 0 === VV || VV.classList.remove("QTERhythmClickOuterCircle--hit")
              }), 200);
              EV.current.push(VV)
            } else if (!1 === eV.lastClickResult && eV.misses > bV.current) {
              xV.current.classList.remove("QTERhythmClickOuterCircle--hit"), xV.current.classList.add("QTERhythmClickOuterCircle--miss");
              const VV = setTimeout((() => {
                var VV;
                null === (VV = xV.current) || void 0 === VV || VV.classList.remove("QTERhythmClickOuterCircle--miss")
              }), 200);
              EV.current.push(VV)
            }
            eV.successes === rV.current && eV.misses === bV.current || (rV.current = eV.successes, bV.current = eV.misses, QV((VV => {
              const xV = [...VV];
              for (let JV = 0; JV < eV.UY; JV++) xV[JV] = JV < eV.successes ? "success" : "pending";
              return xV
            })), wV((VV => {
              if (0 === VV.length) return VV;
              const xV = [...VV];
              for (let JV = 0; JV < xV.length; JV++) xV[JV] = JV < eV.misses ? "miss" : "pending";
              return xV
            })))
          }));
          return () => {
            VV();
            for (const VV of EV.current) clearTimeout(VV);
            EV.current = []
          }
        }), [BV]), (0, pV.jsxs)("div", {
          className: "QTERhythmClickWrapper",
          children: [(0, pV.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: YV.map(((VV, eV) => (0, pV.jsx)("div", {
              className: "QTERhythmClickDot" + ("success" === VV ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
            }, eV)))
          }), (0, pV.jsxs)("div", {
            className: "QTERhythmClickCircleContainer",
            children: [(0, pV.jsxs)("svg", {
              className: "QTERhythmClickSvg",
              viewBox: "0 0 200 200",
              children: [(0, pV.jsx)("circle", {
                className: "QTERhythmClickInnerCircle",
                cx: "100",
                cy: "100",
                r: 30
              }), (0, pV.jsx)("circle", {
                className: "QTERhythmClickOuterCircle",
                cx: "100",
                cy: "100",
                r: 90,
                ref: xV
              })]
            }), vV && (0, pV.jsx)("div", {
              className: "QTERhythmClickCenterContent",
              children: (0, pV.jsx)(UV.b, {
                text: [{
                  icon: vV
                }],
                className: "QTERhythmClickIcon"
              })
            })]
          }), nV.length > 0 && (0, pV.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: nV.map(((VV, eV) => (0, pV.jsx)("div", {
              className: "QTERhythmClickDot" + ("miss" === VV ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
            }, eV)))
          }), (0, pV.jsx)("div", {
            className: "QTERhythmClickLabel",
            children: (0, pV.jsx)(UV.b, {
              text: ZV
            })
          })]
        })
      }));

    function BV(VV) {
      let {
        qte: eV
      } = VV;
      switch (eV.type) {
        case "progressBar":
          return (0, pV.jsx)(QV, {
            initialParameters: eV.parameters
          });
        case "timedClick":
          return (0, pV.jsx)(vV, {
            initialParameters: eV.parameters
          });
        case "gravityBar":
          return (0, pV.jsx)(rV, {
            initialParameters: eV.parameters
          });
        case "precisionBar":
          return (0, pV.jsx)(bV, {
            initialParameters: eV.parameters
          });
        case "rhythmClick":
          return (0, pV.jsx)(EV, {
            initialParameters: eV.parameters
          });
        default:
          return console.warn("Unknown QTE type"), null
      }
    }
    const jV = (0, JV.memo)((function() {
      const [VV, eV] = (0, JV.useState)({
        type: null,
        parameters: null,
        state: null,
        isActive: !1
      });
      return (0, YV.g)("qteStateUpdated", (VV => {
        eV(VV)
      })), VV.isActive && VV.type ? (0, pV.jsx)("div", {
        className: "QTE",
        "data-camera-keeper": "",
        children: (0, pV.jsx)(BV, {
          qte: VV
        })
      }) : null
    }))
  },
  5264: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => pV,
      f: () => QV
    });
    var JV = xV(62),
      YV = xV(1348),
      UV = xV(5273);
    const yV = {
        getState: () => UV.d.getCurrentState(),
        onFrame: YV.v
      },
      pV = (0, JV.createContext)(yV);

    function QV() {
      return (0, JV.useContext)(pV)
    }
  },
  37493: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => wV,
      d: () => vV
    });
    var JV = xV(62),
      YV = xV(1439),
      UV = xV(1220),
      yV = xV(1408),
      pV = xV(3922),
      QV = xV(5425),
      nV = xV(1321);

    function wV(VV) {
      let {
        loading: eV,
        schematics: xV,
        onSchematicPicked: JV,
        selectedSchematicIdList: YV = [],
        disableAutoExport: QV
      } = VV;
      const {
        t: wV
      } = (0, UV.A)();
      return (0, nV.jsxs)("div", {
        className: "SchematicList",
        children: [eV && (0, nV.jsx)(yV.d, {}), !eV && 0 === xV.length && (0, nV.jsx)("div", {
          className: "NoSchematicsText",
          children: wV("worldBuilder:noSavedSchematic")
        }), !eV && xV.map((VV => (0, nV.jsx)(pV.g, {
          source: {
            type: "schematic",
            schematic: VV
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            JV(VV)
          },
          isSelected: YV.includes(VV.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: VV.isAutoExported && QV,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, VV.schematicId)))]
      })
    }

    function ZV(VV) {
      let {
        ownedSchematics: eV,
        currentWorldSchematicId: xV,
        onClose: YV
      } = VV;
      const {
        t: yV
      } = (0, UV.A)(), [pV, ZV] = (0, JV.useState)(null);
      return (0, nV.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === pV && (0, nV.jsxs)(nV.Fragment, {
          children: [(0, nV.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: yV("worldBuilder:schematicList")
          }), (0, nV.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: yV("worldBuilder:clickSchematicForOptions")
          }), (0, nV.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, nV.jsx)(wV, {
              loading: !1,
              schematics: eV,
              onSchematicPicked: VV => {
                ZV(VV)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== pV && (0, nV.jsx)(QV.i, {
          schematic: pV,
          inSourceWorld: pV.schematicId === xV,
          onSchematicUpdate: VV => {
            ZV(VV)
          },
          onClose: () => {
            ZV(null), YV()
          }
        })]
      })
    }

    function vV(VV) {
      let {
        ownedSchematics: eV,
        currentWorldSchematicId: xV,
        onClose: JV
      } = VV;
      YV.NotificationProvider.showCustomPopup({
        body: VV => (0, nV.jsx)(ZV, {
          ownedSchematics: eV,
          currentWorldSchematicId: xV,
          onClose: VV
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: JV,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  38106: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => FV,
      e: () => tV
    });
    var JV = xV(4650),
      YV = xV(1542),
      UV = xV(62),
      yV = xV(7024),
      pV = xV(4646),
      QV = xV(1332),
      nV = xV(2051),
      wV = xV(2021),
      ZV = xV(1551),
      vV = xV(1220),
      rV = xV(38112),
      kV = xV(1146),
      bV = xV.n(kV),
      EV = xV(1382),
      BV = xV(1414),
      jV = xV(1309),
      qV = xV(1321);
    const tV = "SleepingOverlay";

    function FV() {
      const {
        t: VV
      } = (0, vV.A)(), [eV, xV] = (0, UV.useState)(!1), [kV, FV] = (0, UV.useState)(null), [PV, AV] = (0, UV.useState)(1), [NV, XV] = (0, UV.useState)(!1), [MV, zV] = (0, UV.useState)(!1), GV = (0, UV.useRef)(0), WV = (0, UV.useRef)(!1), RV = (0, UV.useRef)(!1), gV = (0, UV.useRef)(), DV = (0, UV.useRef)(null);

      function iV() {
        const VV = null !== kV && void 0 !== kV ? kV : "Rested Speed";
        nV.gameBridge.send("wakeUp", MV ? VV : null), DV.current = null, xV(!1), FV(null), AV(1), XV(!1), zV(!1)
      }

      function CV() {
        return !NV && (iV(), !0)
      }
      return (0, YV.g)("PlayerPhysicsTypeUpdate", (VV => {
        VV !== DV.current && (DV.current = VV, VV === yV.q.SLEEPING ? (RV.current || (GV.current = nV.gameBridge.lookup("cameraZoom", null), RV.current = !0), WV.current = !0, nV.gameBridge.send("setCameraZoom", 3), xV(!0), AV(function() {
          for (const VV of nV.gameBridge.lookup("blocksStandingOn", null)) {
            if (rV.b.leafBeds.includes(VV)) return console.log(`Found leaf bed: ${VV}`), 1;
            if (rV.b.woolBeds.includes(VV)) return console.log(`Found woold bed: ${VV}`), 2;
            if (rV.b.strongBeds.includes(VV)) return console.log(`Found strong bed ${VV}`), 3
          }
          return 1
        }())) : (RV.current = !1, xV(!1), FV(null), AV(1)))
      })), (0, UV.useEffect)((() => () => {
        (0, QV.m)(tV)
      }), []), (0, UV.useEffect)((() => {
        eV ? (0, QV.p)(tV) : ((0, QV.m)(tV), WV.current && (nV.gameBridge.send("setCameraZoom", GV.current), WV.current = !1))
      }), [eV]), (0, jV.s)("overlay", gV, CV, eV), (0, qV.jsx)(JV.e, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: eV,
        timeout: 300,
        nodeRef: gV,
        unmountOnExit: !0,
        children: (0, qV.jsx)("div", {
          ref: gV,
          onClick: VV => {
            CV() && VV.stopPropagation()
          },
          children: (0, qV.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, qV.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: pV.g.map((eV => (0, qV.jsxs)(TV, {
                restedEffect: eV,
                Vw: kV,
                setChosenRestedEffect: FV,
                children: [(0, qV.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, qV.jsx)(wV.b, {
                    text: [{
                      icon: eV
                    }]
                  }), pV.f[eV].shortName]
                }), (0, qV.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: VV(pV.f[eV].description, {
                    time: pV.f[eV].effectLevelDurations[PV] / 6e4
                  })
                })]
              }, eV)))
            }), (0, qV.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, qV.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, qV.jsxs)(ZV.f, {
                className: "SleepingOverlayWakeUpButton",
                onClick: VV => {
                  MV ? iV() : (XV(!0), (0, EV.$)((() => {
                    XV(!1), zV(!0)
                  }), !0)), VV.stopPropagation()
                },
                loading: NV,
                children: [!MV && (0, qV.jsxs)(qV.Fragment, {
                  children: [(0, qV.jsx)(BV.b, {
                    name: "film"
                  }), " ", VV("classicGame:watchAdToGetRestedPerk")]
                }), MV && VV("classicGame:wakeUp")]
              }), (0, qV.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, qV.jsx)("div", {
                  className: bV()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === PV
                  }),
                  children: (0, qV.jsx)(wV.b, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, qV.jsx)("div", {
                  className: bV()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === PV
                  }),
                  children: (0, qV.jsx)(wV.b, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, qV.jsx)("div", {
                  className: bV()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === PV
                  }),
                  children: (0, qV.jsx)(wV.b, {
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
    const TV = (0, UV.memo)((function(VV) {
      let {
        children: eV,
        restedEffect: xV,
        Vw: JV,
        setChosenRestedEffect: YV
      } = VV;
      return xV === JV ? (0, qV.jsx)(ZV.m, {
        onClick: VV => {
          VV.stopPropagation()
        },
        children: eV
      }) : (0, qV.jsx)(ZV.j, {
        onClick: VV => {
          YV(xV), VV.stopPropagation()
        },
        children: eV
      })
    }))
  },
  5410: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => pV
    });
    var JV = xV(62),
      YV = xV(1146),
      UV = xV.n(YV),
      yV = xV(1321);

    function pV(VV) {
      let {
        columns: eV,
        rows: xV,
        getRowKey: YV,
        renderRow: pV,
        className: QV
      } = VV;
      return (0, yV.jsxs)("table", {
        className: UV()("Table", QV),
        children: [(0, yV.jsx)("thead", {
          children: (0, yV.jsx)("tr", {
            children: eV.map((VV => (0, yV.jsx)("th", {
              children: VV.header
            }, VV.key)))
          })
        }), (0, yV.jsx)("tbody", {
          children: xV.map((VV => (0, yV.jsx)(JV.Fragment, {
            children: pV(VV)
          }, YV(VV))))
        })]
      })
    }
  },
  37852: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => UV,
      f: () => yV,
      h: () => pV,
      i: () => QV
    });
    var JV = xV(62),
      YV = xV(3528);
    const UV = 8,
      yV = "InGameHeaderContainer",
      pV = "TopRightElements";

    function QV(VV) {
      const [eV] = (0, YV.e)(), [xV, QV] = (0, JV.useState)(!1);
      return (0, JV.useLayoutEffect)((() => {
        if (!VV) return;
        const eV = document.querySelector(`.${yV}`),
          xV = document.querySelector(`.${pV}`),
          JV = () => {
            const JV = VV.getBoundingClientRect(),
              YV = eV ? eV.getBoundingClientRect().right : 0,
              yV = xV ? xV.getBoundingClientRect().left : window.innerWidth,
              pV = JV.left < YV + UV,
              nV = JV.right > yV - UV;
            QV(pV || nV)
          };
        JV();
        const YV = new ResizeObserver(JV);
        return YV.observe(VV), eV && YV.observe(eV), xV && YV.observe(xV), () => {
          YV.disconnect()
        }
      }), [VV, eV]), xV
    }
  },
  37902: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => ZV
    });
    var JV = xV(62),
      YV = xV(1146),
      UV = xV.n(YV),
      yV = xV(1772),
      pV = xV(1551),
      QV = xV(1408),
      nV = xV(1414),
      wV = xV(1321);

    function ZV(VV) {
      let {
        label: eV,
        icon: xV,
        placeholder: YV,
        onSubmit: ZV
      } = VV;
      const vV = (0, JV.useRef)(null),
        [rV, kV] = (0, JV.useState)(""),
        [bV, EV] = (0, JV.useState)("Enter"),
        [BV, jV] = (0, JV.useState)(null);
      (0, JV.useEffect)((() => {
        if ("Success" !== bV && "Error" !== bV) return;
        const VV = setTimeout((() => {
          "Success" === bV && vV.current && (vV.current.value = "", kV("")), EV("Enter")
        }), "Success" === bV ? 1e3 : 4e3);
        return () => {
          clearTimeout(VV)
        }
      }), [bV]);
      const qV = () => {
        const VV = rV.trim();
        "" !== VV && "Enter" === bV && (EV("Loading"), ZV(VV).then((VV => {
          vV.current && ("error" in VV ? null === VV.error ? EV("Enter") : (jV(VV.error), EV("Error")) : EV("Success"))
        })))
      };
      return (0, wV.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: VV => {
          VV.target === vV.current && "Escape" !== VV.key && VV.stopPropagation()
        },
        children: [(0, wV.jsxs)("div", {
          className: UV()("AddFriendBodyOverlay", `AddFriendBodyOverlay${bV}`),
          children: ["Loading" === bV && (0, wV.jsx)(QV.d, {}), "Success" === bV && (0, wV.jsx)(nV.b, {
            name: "check"
          }), "Error" === bV && BV]
        }), (0, wV.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, wV.jsx)(yV.d, {
            className: "PlayerSearchInput",
            domRef: vV,
            maxLength: 32,
            placeholderText: YV,
            ariaLabel: YV,
            stopPropagation: !1,
            onValueChange: VV => {
              kV(VV)
            },
            onEnter: qV
          }), (0, wV.jsxs)(pV.f, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== bV || "" === rV.trim(),
            onClick: qV,
            children: [(0, wV.jsx)(nV.b, {
              name: xV
            }), " ", eV]
          })]
        })]
      })
    }
  },
  37882: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => ZV
    });
    var JV = xV(62),
      YV = xV(1146),
      UV = xV.n(YV),
      yV = xV(1220),
      pV = xV(1414),
      QV = xV(1321);
    const nV = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      wV = ["unlisted", "public", "whitelist", "private"];

    function ZV(VV) {
      let {
        visibility: eV,
        onPick: xV
      } = VV;
      const {
        t: YV
      } = (0, yV.A)(), ZV = (0, JV.useRef)([]);
      return (0, QV.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": YV("worldSocial:whoCanJoin"),
        children: wV.map(((VV, JV) => {
          const yV = VV === eV;
          return (0, QV.jsxs)("button", {
            ref: VV => {
              ZV.current[JV] = VV
            },
            type: "button",
            className: UV()("WorldSocialTile", {
              WorldSocialTileSelected: yV
            }),
            "aria-pressed": yV,
            tabIndex: yV ? 0 : -1,
            onKeyDown: VV => {
              ((VV, eV) => {
                const xV = "ArrowRight" === VV.key || "ArrowDown" === VV.key ? 1 : "ArrowLeft" === VV.key || "ArrowUp" === VV.key ? -1 : 0;
                var JV;
                0 !== xV && (VV.preventDefault(), null === (JV = ZV.current[(eV + xV + wV.length) % wV.length]) || void 0 === JV || JV.focus())
              })(VV, JV)
            },
            onClick: () => {
              xV(VV)
            },
            children: [(0, QV.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, QV.jsx)(pV.b, {
                name: nV[VV]
              })
            }), (0, QV.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, QV.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: YV(`worldSocial:${VV}`)
              }), (0, QV.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: YV(`worldSocial:${VV}Description`)
              })]
            })]
          }, VV)
        }))
      })
    }
  },
  37898: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => pV
    });
    var JV = xV(1220),
      YV = xV(2942),
      UV = xV(4795),
      yV = xV(1321);

    function pV(VV) {
      let {
        iZ: eV,
        children: xV,
        ...pV
      } = VV;
      const {
        t: QV
      } = (0, JV.A)();
      return (0, yV.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          eV.onChange(!eV.on)
        },
        children: (0, yV.jsx)(YV.e, {
          ...pV,
          opensProfileCard: !1,
          children: (0, yV.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: VV => {
              VV.stopPropagation()
            },
            children: [xV, (0, yV.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, yV.jsx)(UV.b, {
                checked: eV.on,
                disabled: !1,
                ariaLabel: QV("worldSocial:letJoin", {
                  playerName: pV.playerSocialPreview.name
                }),
                onChange: VV => {
                  eV.onChange(VV.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  37875: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => kV
    });
    var JV = xV(62),
      YV = xV(1220),
      UV = xV(1976),
      yV = xV(99),
      pV = xV(27),
      QV = xV(1586),
      nV = xV(2966),
      wV = xV(35213),
      ZV = xV(1551),
      vV = xV(1414),
      rV = xV(1321);

    function kV(VV) {
      let {
        worldCode: eV,
        message: xV
      } = VV;
      const {
        t: kV
      } = (0, YV.A)(), {
        isTouchScreen: bV
      } = (0, pV.l)(["isTouchScreen"]), EV = yV.featureFlags.canUseInviteLinks, BV = (0, wV.i)(EV && null === xV), [jV, qV] = (0, nV.d)(), tV = (0, JV.useRef)(null);
      if (null !== xV) return (0, rV.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, rV.jsx)(vV.b, {
          name: "lock"
        }), (0, rV.jsx)("span", {
          children: xV
        })]
      });
      const FV = EV ? BV : eV,
        TV = bV && EV && (0, nV.b)();
      return (0, rV.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!EV && (0, rV.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: kV("worldSocial:worldCode")
        }), (0, rV.jsx)("input", {
          ref: tV,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== FV && void 0 !== FV ? FV : "",
          "aria-label": kV(EV ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: VV => {
            VV.currentTarget.select()
          }
        }), (0, rV.jsxs)(ZV.f, {
          className: "WorldSocialCopy",
          disabled: null === FV,
          onClick: () => {
            null !== FV && (0, nV.c)(FV, {
              useShareSheet: TV,
              onOutcome: VV => {
                if ((0, QV.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== VV || EV ? VV : "code"
                  }), "copied" === VV) qV();
                else if ("failed" === VV) {
                  var eV;
                  null === (eV = tV.current) || void 0 === eV || eV.focus(), UV.e.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, rV.jsx)(vV.b, {
            name: jV ? "check" : TV ? "up-from-bracket" : "copy"
          }), " ", kV(jV ? "general:copied" : TV ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  37891: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => rV,
      h: () => vV,
      k: () => ZV
    });
    var JV = xV(642),
      YV = xV(1220),
      UV = xV(1734),
      yV = xV(2942),
      pV = xV(2903),
      QV = xV(1551),
      nV = xV(37898),
      wV = xV(1321);

    function ZV(VV, eV) {
      var xV;
      return {
        isError: !1,
        name: VV,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== eV && void 0 !== eV ? eV : {},
        nameColour: null !== (xV = null === eV || void 0 === eV ? void 0 : eV.nameColour) && void 0 !== xV ? xV : JV.e,
        location: {
          status: "offline"
        }
      }
    }

    function vV(VV) {
      let {
        player: eV,
        isFriend: xV = !1,
        status: JV,
        showLocation: QV = void 0 === JV,
        iZ: ZV,
        onSendFriendRequest: vV,
        actions: rV,
        zIndex: kV
      } = VV;
      const {
        t: bV
      } = (0, YV.A)();
      let EV = JV;
      null !== ZV && void 0 !== ZV && ZV.on && (EV = (0, wV.jsxs)(wV.Fragment, {
        children: [null !== JV && void 0 !== JV ? JV : (0, wV.jsx)(pV.e, {
          socialPreview: eV
        }), (0, wV.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", bV("worldSocial:canJoin")]
        })]
      }));
      const BV = {
        playerSocialPreview: eV,
        isFriend: xV,
        hideFriendBadge: !0,
        onFriendRemoved: xV ? VV => {
          UV.c.removeFriendFromState(VV)
        } : void 0,
        status: EV,
        showLocation: QV,
        onSendFriendRequest: vV,
        zIndex: kV
      };
      return ZV ? (0, wV.jsx)(nV.d, {
        ...BV,
        iZ: ZV,
        children: rV
      }) : (0, wV.jsx)(yV.e, {
        ...BV,
        opensProfileCard: !1,
        children: rV || void 0
      })
    }

    function rV(VV) {
      let {
        row: eV,
        iZ: xV,
        canInvite: JV,
        invited: UV,
        onInvite: yV,
        zIndex: pV
      } = VV;
      const {
        t: nV
      } = (0, YV.A)(), ZV = "online" === eV.place ? QV.f : QV.j;
      return (0, wV.jsx)(vV, {
        player: eV.friend,
        isFriend: !0,
        status: "here" === eV.place ? nV("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        iZ: xV,
        zIndex: pV,
        actions: JV && (0, wV.jsx)(ZV, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: UV,
          onClick: yV,
          ariaLabel: `${nV("worldSocial:invite")} ${eV.friend.name}`,
          children: nV(UV ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  37869: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => QV,
      e: () => yV,
      g: () => nV
    });
    var JV = xV(62),
      YV = xV(5056),
      UV = xV(1976);

    function yV(VV) {
      const eV = {
        lobbyName: VV,
        answer: null,
        response: YV.e.getSocialSettings(VV)
      };
      return eV.response.then((VV => {
        eV.answer = VV
      })), eV
    }
    const pV = new Map;

    function QV(VV) {
      pV.set(VV.lobbyName, VV)
    }

    function nV(VV) {
      const [eV] = (0, JV.useState)((() => function(VV) {
        var eV;
        const xV = null !== (eV = pV.get(VV)) && void 0 !== eV ? eV : null;
        return null !== xV && void 0 !== xV && xV.answer && "error" in xV.answer ? null : xV
      }(VV))), [xV, yV] = (0, JV.useState)((() => null !== eV && void 0 !== eV && eV.answer && "settings" in eV.answer ? eV.answer.settings : null)), [QV, nV] = (0, JV.useState)(!0), [wV, ZV] = (0, JV.useState)(null !== xV), vV = (0, JV.useRef)(xV);
      vV.current = xV;
      const rV = (0, JV.useRef)(0),
        kV = (0, JV.useRef)(0),
        bV = (0, JV.useRef)(!1),
        EV = (0, JV.useRef)(!0),
        BV = (0, JV.useCallback)((async eV => {
          const xV = ++rV.current,
            JV = await (null !== eV && void 0 !== eV ? eV : YV.e.getSocialSettings(VV));
          EV.current && xV === rV.current && (ZV(!0), nV(!1), "error" in JV || yV(JV.settings))
        }), [VV]),
        jV = (0, JV.useCallback)((() => {
          nV(!0), BV()
        }), [BV]),
        qV = (0, JV.useCallback)((() => {
          kV.current > 0 ? bV.current = !0 : BV()
        }), [BV]);
      (0, JV.useEffect)((() => (EV.current = !0, pV.delete(VV), nV(!0), BV(null === eV || void 0 === eV ? void 0 : eV.response), () => {
        EV.current = !1
      })), [BV, VV, eV]);
      const tV = VV => {
        rV.current++, nV(!1), vV.current = VV, yV(VV)
      };
      return {
        settings: xV,
        loading: QV,
        answered: wV,
        retry: jV,
        refresh: qV,
        change: async function(eV, xV) {
          let {
            quiet: JV = !1,
            onAnswer: yV
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const pV = vV.current;
          if (null === pV) return !1;
          tV(xV(pV)), kV.current > 0 && (bV.current = !0), kV.current++;
          const QV = await YV.e.setSocialSettings(VV, eV);
          kV.current--;
          const nV = !("error" in QV);
          if (!EV.current) return nV;
          if (null === yV || void 0 === yV || yV(QV), JV);
          else if ("error" in QV) UV.e.showMessage({
            translationKey: QV.error
          });
          else
            for (const VV of QV.notFound) UV.e.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: VV
              }
            });
          if (kV.current > 0) return nV;
          const wV = bV.current;
          return bV.current = !1, !wV && "settings" in QV ? tV(QV.settings) : (wV || tV(pV), BV()), nV
        }
      }
    }
  },
  37911: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => yV,
      d: () => UV
    });
    var JV = xV(165);
    const YV = new Map;

    function UV(VV, eV) {
      var xV;
      const JV = null !== (xV = YV.get(VV)) && void 0 !== xV ? xV : new Map;
      JV.set(eV, Date.now()), YV.set(VV, JV)
    }

    function yV(VV) {
      const eV = YV.get(VV);
      if (!eV) return [];
      const xV = Date.now();
      for (const [YV, UV] of eV) xV - UV >= JV.l && eV.delete(YV);
      return [...eV.keys()]
    }
  },
  37871: (VV, eV, xV) => {
    function JV(VV, eV) {
      const xV = eV.toLowerCase();
      for (const JV of VV)
        if (JV.toLowerCase() === xV) return !0;
      return !1
    }

    function YV(VV, eV, xV) {
      const YV = [],
        UV = [],
        yV = [];
      for (const pV of VV) !pV.isError && pV.name && ("inGame" === pV.location.status && pV.location.inLobbyName === eV || JV(xV, pV.name) ? UV.push({
        friend: pV,
        place: "here"
      }) : "offline" === pV.location.status ? yV.push({
        friend: pV,
        place: "offline"
      }) : YV.push({
        friend: pV,
        place: "online"
      }));
      return [...YV, ...UV, ...yV]
    }

    function UV(VV, eV, xV) {
      const YV = [],
        UV = VV.flatMap((VV => "here" === VV.place ? [VV.friend.name] : []));
      for (const yV of [...UV, ...eV]) JV(YV, yV) || JV(xV, yV) || YV.push(yV);
      return YV
    }

    function yV(VV, eV) {
      return null === VV || void 0 === VV || !VV.canManage || JV(VV.whitelist, eV) ? "none" : "whitelist" === VV.visibility ? "required" : "quiet"
    }

    function pV(VV) {
      if (null === VV) return !0;
      const {
        visibility: eV
      } = VV;
      return "public" === eV || "unlisted" === eV || "whitelist" === eV && VV.canManage
    }

    function QV(VV, eV, xV) {
      if (xV) {
        const xV = eV.filter((eV => !JV(VV.whitelist, eV)));
        return {
          ...VV,
          whitelist: [...VV.whitelist, ...xV]
        }
      }
      return {
        ...VV,
        whitelist: VV.whitelist.filter((VV => !JV(eV, VV)))
      }
    }

    function nV(VV, eV) {
      const xV = [];
      for (let JV = 0; JV < VV.length; JV += eV) xV.push(VV.slice(JV, JV + eV));
      return xV
    }
    xV.d(eV, {
      c: () => pV,
      e: () => UV,
      g: () => YV,
      k: () => JV,
      o: () => nV,
      r: () => yV,
      u: () => QV
    })
  },
  9363: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => yV,
      d: () => UV
    });
    var JV = xV(2130);
    const YV = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      UV = VV => "string" === typeof VV.icon && "" !== VV.icon && "string" === typeof VV.keycode && YV.test(VV.keycode),
      yV = VV => "Space" === VV ? "_" : JV.g[VV]
  },
  9413: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => YV
    });
    var JV = xV(27);

    function YV() {
      return !JV.b.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  9416: (VV, eV, xV) => {
    xV.d(eV, {
      A: () => wV,
      C: () => vV,
      D: () => rV,
      d: () => UV,
      e: () => pV,
      g: () => nV,
      h: () => QV,
      l: () => yV,
      p: () => YV,
      q: () => JV,
      s: () => kV,
      w: () => ZV
    });
    const JV = 14,
      YV = 6,
      UV = (JV + YV) / 2,
      yV = 200,
      pV = yV / 2,
      QV = yV / 2 - 1,
      nV = YV / JV * (yV / 2),
      wV = (VV, eV) => -Math.PI / 2 + 2 * VV * Math.PI / eV,
      ZV = (VV, eV, xV) => {
        const JV = 2 * Math.PI / xV;
        return (Math.round((Math.atan2(eV, VV) + Math.PI / 2) / JV) % xV + xV) % xV
      },
      vV = .5,
      rV = (VV, eV, xV) => Math.hypot(VV.x, VV.y) < vV ? xV : ZV(VV.x, VV.y, eV),
      kV = (VV, eV, xV, JV, YV) => {
        const UV = Math.PI / eV,
          yV = wV(VV, eV),
          pV = yV - UV,
          QV = yV + UV,
          nV = (VV, eV) => `${xV+VV*Math.cos(eV)} ${xV+VV*Math.sin(eV)}`;
        return [`M ${nV(JV,pV)}`, `L ${nV(YV,pV)}`, `A ${YV} ${YV} 0 0 1 ${nV(YV,QV)}`, `L ${nV(JV,QV)}`, `A ${JV} ${JV} 0 0 0 ${nV(JV,pV)}`, "Z"].join(" ")
      }
  },
  38085: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV
    });
    var JV = xV(27),
      YV = xV(1382);

    function UV() {
      const {
        clientEscMenuOptions: VV
      } = (0, JV.l)(["clientEscMenuOptions"]);
      return (0, YV.s)() && VV.showChat
    }
  },
  9438: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => yV
    });
    var JV = xV(62),
      YV = xV(9396),
      UV = xV(2693);

    function yV() {
      const VV = (0, UV.j)("shopInfo"),
        [, eV] = (0, JV.useReducer)((VV => VV + 1), 0);
      return (0, UV.g)("shopInfo", eV), !(0, YV.c)(VV)
    }
  },
  38185: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => UV
    });
    var JV = xV(62),
      YV = xV(2693);

    function UV() {
      const VV = (0, YV.j)("lobbyLeaderboardInfo");
      return (0, JV.useMemo)((() => function(VV) {
        if (null === VV) return null;
        const eV = Object.entries(VV),
          xV = eV.filter((VV => {
            let [, eV] = VV;
            return void 0 !== eV
          }));
        if (xV.length === eV.length) return VV;
        const JV = Object.fromEntries(xV),
          YV = Object.keys(VV).filter((VV => !Object.hasOwn(JV, VV)));
        return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${YV.join(", ")}`), JV
      }(VV)), [VV])
    }
  },
  38023: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => QV
    });
    var JV = xV(3093),
      YV = xV(4098),
      UV = xV(3245);
    const yV = ["Unable to create vertex buffer"];
    let pV = {};

    function QV(VV, eV) {
      const xV = new Date;
      console.error(`${xV.getUTCHours()}:${xV.getUTCMinutes()}:${xV.getUTCSeconds()}`, VV, eV, null === eV || void 0 === eV ? void 0 : eV.stack), yV.includes(null === eV || void 0 === eV ? void 0 : eV.message) && (console.error("Unrecoverable error occurred. Leaving game."), (0, JV.b)().client.leaveGameUnwanted({
        reason: `Unrecoverable error occurred.\nThis is a bug.\n\nError:\n${eV.message}\n\nPlease refresh the page.`,
        requiresRefresh: !0,
        canReconnect: !1,
        automaticallyReconnect: !1
      })), (0, UV.logError)("warning", `${VV}\n ${eV} "\n" ${null===eV||void 0===eV?void 0:eV.stack}`);
      const YV = VV + eV + (null === eV || void 0 === eV ? void 0 : eV.stack);
      YV in pV || ((0, UV.logError)("error", `${VV}\n ${eV} "\n" ${null===eV||void 0===eV?void 0:eV.stack}`), pV[YV] = !0)
    }(0, YV.onGameReset)((() => {
      pV = {}
    }))
  },
  5339: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => DV,
      g: () => gV
    });
    var JV = xV(5342),
      YV = xV(364);
    const UV = 120,
      yV = 260,
      pV = 1.15,
      QV = 1.2,
      nV = 2,
      wV = 1.08,
      ZV = .8,
      vV = .95,
      rV = 8,
      kV = "[\"')\\]\u300d\u300f\uff09]*",
      bV = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${kV}$`),
      EV = new RegExp(`[?\uff1f]${kV}$`),
      BV = new RegExp(`[!\uff01]${kV}$`),
      jV = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      qV = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      tV = new RegExp(`[${qV}]`),
      FV = new RegExp(`[${qV}]|[^${qV}]+`, "g"),
      TV = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function PV(VV) {
      let eV = 2166136261;
      for (let xV = 0; xV < VV.length; xV++) eV ^= VV.charCodeAt(xV), eV = Math.imul(eV, 16777619);
      return (eV >>> 0) / 4294967295 * 2 - 1
    }

    function AV(VV) {
      var eV;
      if (tV.test(VV)) return 1;
      const xV = VV.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        JV = xV.replace(/[^0-9]/g, "");
      if (JV.length > 0 && !/\p{L}/u.test(xV)) return Math.min(JV.length, 4);
      const YV = null !== (eV = xV.match(TV)) && void 0 !== eV ? eV : [];
      if (0 === YV.length) {
        var UV, yV;
        const VV = null !== (UV = null === (yV = xV.match(/\p{L}/gu)) || void 0 === yV ? void 0 : yV.length) && void 0 !== UV ? UV : 0;
        return 0 === VV ? 0 : Math.min(Math.max(1, Math.round(VV / 2.5)), rV)
      }
      const pV = xV.replace(/[^\p{L}]/gu, ""),
        QV = YV.length > 1 && "e" === YV.at(-1) && pV.endsWith("e") && !pV.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(VV.replace(/[^\p{L}]/gu, ""));
      return Math.min(YV.length - (QV ? 1 : 0), rV)
    }

    function NV(VV) {
      return VV.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function XV(VV) {
      const eV = VV.replace(/[^\p{L}]/gu, "");
      return eV.length >= 2 && eV === eV.toUpperCase() && eV !== eV.toLowerCase()
    }

    function MV(VV, eV) {
      var xV;
      const rV = eV && (0, JV.j)(eV),
        kV = null !== (xV = null === rV || void 0 === rV ? void 0 : rV.syllableMs) && void 0 !== xV ? xV : JV.e,
        qV = function(VV) {
          const eV = [];
          for (const JV of (0, YV.dc)(VV))
            if ("string" === typeof JV)
              for (const VV of JV.split(/(\s+)/)) {
                if ("" === VV) continue;
                if (/^\s+$/.test(VV)) {
                  eV.push({
                    kind: "space",
                    text: VV
                  });
                  continue
                }
                if (!tV.test(VV)) {
                  eV.push({
                    kind: "word",
                    text: VV,
                    delayMs: 0
                  });
                  continue
                }
                let JV = !0;
                for (const YV of null !== (xV = VV.match(FV)) && void 0 !== xV ? xV : []) {
                  var xV;
                  const VV = eV.at(-1);
                  JV || "word" !== (null === VV || void 0 === VV ? void 0 : VV.kind) || tV.test(YV) || /[\p{L}\p{N}]/u.test(YV) ? (JV || eV.push({
                    kind: "space",
                    text: "\u200b"
                  }), eV.push({
                    kind: "word",
                    text: YV,
                    delayMs: 0
                  }), JV = !1) : VV.text += YV
                }
              } else eV.push({
                kind: "icon",
                text: JV.icon,
                delayMs: 0
              });
          return eV
        }(VV),
        TV = [];
      let MV = [];
      for (const JV of qV) "space" !== JV.kind && (MV.push(JV), bV.test(JV.text) && (TV.push(MV), MV = []));
      TV.push(MV);
      const zV = [];
      let GV = 0;
      for (const JV of TV) {
        var WV, RV;
        const VV = null !== (WV = null === (RV = JV.at(-1)) || void 0 === RV ? void 0 : RV.text) && void 0 !== WV ? WV : "",
          eV = EV.test(VV),
          xV = BV.test(VV),
          YV = JV.map((VV => "word" === VV.kind ? AV(VV.text) : 1)),
          qV = YV.findLastIndex((VV => VV > 0));
        for (const [EV, BV] of JV.entries()) {
          const VV = "word" === BV.kind,
            JV = YV[EV];
          BV.delayMs = GV;
          for (let YV = 0; rV && YV < JV; YV++) {
            const {
              intonation: UV
            } = rV;
            let yV = qV > 0 ? -UV.declineSemitones * (EV / qV) : 0;
            yV += PV(`${NV(BV.text)}|${YV}`) * UV.variationSemitones;
            const bV = Math.min(1, UV.variationSemitones);
            let jV = rV.glideSemitones,
              tV = 1;
            xV && (yV += UV.exclaimLiftSemitones, tV *= pV), eV && EV === qV && (yV += UV.questionRiseSemitones * (JV > 1 ? .5 + .5 * YV / (JV - 1) : 1), YV === JV - 1 && (jV = Math.abs(jV) + UV.questionRiseSemitones / 2)), VV && XV(BV.text) && (yV += nV * bV, tV *= QV), JV > 1 && 0 === YV && (yV += ZV * bV, tV *= wV), zV.push({
              atMs: GV + YV * kV,
              semitones: yV,
              glideSemitones: jV,
              durationMs: YV < JV - 1 ? Math.min(rV.durationMs, kV * vV) : rV.durationMs,
              level: tV
            })
          }
          GV += JV * kV + (bV.test(BV.text) ? yV : jV.test(BV.text) ? UV : 0)
        }
      }
      return {
        pieces: qV.map((VV => "space" === VV.kind ? VV : "icon" === VV.kind ? {
          kind: "icon",
          icon: VV.text,
          delayMs: VV.delayMs
        } : {
          kind: "word",
          text: VV.text,
          delayMs: VV.delayMs
        })),
        blips: zV
      }
    }
    var zV = xV(1220),
      GV = xV(1279),
      WV = xV(2059);

    function RV(VV) {
      if ("string" === typeof VV) return VV;
      const eV = GV.c.get().getCurrentLanguageCode();
      return (0, zV.r)(eV, VV.translationKey, (0, zV.p)(VV.params, WV.e.shown))
    }

    function gV(VV) {
      const eV = void 0 === VV.voice ? null : (0, JV.n)(VV.voice),
        xV = eV && (0, JV.j)(eV);
      return {
        plan: MV(RV(VV.line), xV),
        synth: xV
      }
    }

    function DV(VV) {
      const eV = [];
      let xV = [];
      for (const [YV, UV] of VV.entries()) {
        var JV;
        "space" === UV.kind && (" " !== UV.text || "icon" !== (null === (JV = VV[YV + 1]) || void 0 === JV ? void 0 : JV.kind)) ? (xV.length > 0 && eV.push(xV), eV.push([UV]), xV = []) : xV.push(UV)
      }
      return xV.length > 0 && eV.push(xV), eV
    }
  },
  37849: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => YV
    });
    const JV = [{
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

    function YV(VV, eV, xV) {
      const YV = Math.abs(VV - eV),
        UV = Date.now() - xV;
      for (const yV of JV)
        if (VV < yV.maxDist) return YV >= yV.hardUpdateDist || UV > yV.timeBetweenSoftChecks && YV >= yV.softUpdateDist;
      return !1
    }
  },
  38165: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => ZV,
      e: () => vV
    });
    var JV = xV(657),
      YV = xV(40),
      UV = xV(38125);
    const yV = "replayFileKeptForReload",
      pV = "replayFileKeptForReloadAt",
      QV = "replayFileKeptForReloadTab",
      nV = 3e5,
      wV = 5e3;
    async function ZV(VV, eV) {
      const xV = Date.now(),
        UV = {
          at: xV,
          bytes: VV,
          source: eV
        },
        nV = await Promise.race([(async () => await YV.i.setItem(pV, xV) && YV.i.setItem(yV, UV))(), (0, JV.R)(wV).then((() => !1))]);
      nV || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const ZV = {
        at: xV,
        ZZ: nV
      };
      YV.q.setItem(QV, ZV)
    }
    async function vV() {
      var VV;
      const eV = YV.q.getItem(QV);
      null !== eV && YV.q.removeItem(QV);
      const xV = Date.now(),
        JV = await YV.i.getItem(pV),
        wV = null !== eV && xV - eV.at <= nV,
        ZV = null !== eV && JV === eV.at;
      let vV = null;
      if (null !== JV && (ZV || ("number" !== typeof JV || xV - JV > nV)) && (vV = wV && ZV && eV.ZZ ? await YV.i.getItem(yV) : null, await Promise.all([YV.i.removeItem(pV), YV.i.removeItem(yV)])), !wV) return null;
      if ((null === (VV = vV) || void 0 === VV ? void 0 : VV.at) !== eV.at) throw new Error(UV.b.replayNotKept.text);
      return {
        bytes: vV.bytes,
        source: vV.source
      }
    }
  },
  38161: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV,
      e: () => UV,
      i: () => YV
    });
    const JV = [9];

    function YV(VV) {
      return JV.includes(VV)
    }

    function UV(VV) {
      return null !== VV && VV >= 3 && VV < JV[0]
    }
  },
  38127: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => yV,
      d: () => UV,
      e: () => YV
    });
    const JV = [.25, .5, 1, 2, 4, 8, 16];

    function YV(VV, eV) {
      const xV = JV;
      let YV = xV.indexOf(VV);
      return -1 === YV && (YV = xV.findIndex((eV => eV >= VV)), -1 === YV && (YV = xV.length - 1)), "up" === eV ? xV[Math.min(YV + 1, xV.length - 1)] : xV[Math.max(YV - 1, 0)]
    }

    function UV(VV) {
      return VV <= JV[0]
    }

    function yV(VV) {
      return VV >= JV[JV.length - 1]
    }
  },
  38172: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => JV,
      c: () => YV
    });
    const JV = "data-replay-ui-active",
      YV = [{
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
  38174: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => nV,
      g: () => ZV,
      k: () => wV
    });
    var JV = xV(27),
      YV = xV(32),
      UV = xV(38172);

    function yV() {
      const VV = {};
      for (const {
          group: eV
        }
        of UV.c) VV[eV] = !0;
      return VV
    }
    let pV = yV();

    function QV() {
      YV.h.QZ("replayViewer|uiVisibilityChanged")
    }

    function nV() {
      return pV
    }

    function wV(VV, eV) {
      pV[VV] !== eV && (pV = {
        ...pV,
        [VV]: eV
      }, "nametag" === VV && JV.b.set({
        areNametagsHidden: !eV
      }), QV())
    }

    function ZV() {
      pV = yV(), JV.b.set({
        areNametagsHidden: !1
      }), QV()
    }
  },
  9355: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => UV,
      c: () => yV,
      e: () => pV,
      h: () => YV
    });
    var JV = xV(9363);
    const YV = VV => {
        const eV = [];
        VV.holdingGun && eV.push({
          kind: "reload"
        }), VV.touchscreenActionButton && eV.push({
          kind: "touchButton",
          label: VV.touchscreenActionButton
        });
        for (const UV of null !== (xV = null === (YV = VV.customButtons) || void 0 === YV ? void 0 : YV.filter(JV.d)) && void 0 !== xV ? xV : []) {
          var xV, YV;
          eV.push({
            kind: "customButton",
            id: UV.id,
            icon: UV.icon,
            description: UV.description
          })
        }
        return eV
      },
      UV = VV => VV.length >= 2,
      yV = VV => "specialAction" !== VV.kind,
      pV = (VV, eV) => {
        if (null === VV || null === eV) return VV === eV;
        if (VV.kind !== eV.kind) return !1;
        switch (VV.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return VV.action === eV.action;
          case "customButton":
            return VV.id === eV.id && VV.icon === eV.icon;
          case "touchButton":
            return VV.label === eV.label
        }
      }
  },
  9346: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => wV,
      d: () => rV,
      e: () => ZV,
      f: () => kV
    });
    var JV = xV(62),
      YV = xV(32),
      UV = xV(1542),
      yV = xV(9355),
      pV = xV(9372);
    let QV = null;
    const nV = () => QV,
      wV = VV => {
        (0, yV.e)(QV, VV) || (QV = VV, YV.h.QZ(pV.e, QV))
      },
      ZV = () => {
        const [VV, eV] = (0, JV.useState)(nV);
        return (0, UV.g)(pV.e, eV), VV
      };
    let vV = !1;
    const rV = VV => {
        VV !== vV && (vV = VV, YV.h.QZ(pV.h, VV))
      },
      kV = () => {
        const [VV, eV] = (0, JV.useState)(vV);
        return (0, UV.g)(pV.h, eV), VV
      }
  },
  9372: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => UV,
      e: () => JV,
      h: () => YV,
      j: () => pV,
      l: () => QV,
      n: () => nV,
      o: () => yV
    });
    const JV = "controllerActionHintChanged",
      YV = "controllerActionWheelHintChanged",
      UV = "controllerOpenChat",
      yV = "controllerSneakToggledChanged",
      pV = "controllerAttackLatchedChanged",
      QV = "controllerDropStackHoldChanged",
      nV = "controllerPickBlockHintChanged"
  },
  9315: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => yV,
      g: () => UV,
      k: () => QV,
      o: () => pV
    });
    var JV = xV(1542),
      YV = xV(1493);
    const UV = "controllerInventoryCursorChanged",
      yV = {
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
      pV = () => {
        var VV, eV;
        return (0, JV.j)(UV, null !== (VV = null === (eV = (0, YV.e)()) || void 0 === eV ? void 0 : eV.getInventoryCursorState()) && void 0 !== VV ? VV : yV)
      },
      QV = () => {
        var VV, eV;
        return null !== (VV = null === (eV = (0, YV.e)()) || void 0 === eV ? void 0 : eV.isPadSteppingSlots()) && void 0 !== VV && VV
      }
  },
  9306: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => vV,
      d: () => pV,
      e: () => QV,
      h: () => yV,
      i: () => UV,
      l: () => wV,
      o: () => ZV
    });
    let JV = null;
    const YV = new Set,
      UV = VV => (JV = VV, () => {
        if (JV === VV) {
          JV = null;
          for (const VV of YV) VV()
        }
      }),
      yV = VV => (YV.add(VV), () => {
        YV.delete(VV)
      }),
      pV = () => JV,
      QV = () => null !== JV;
    let nV = null;
    const wV = VV => {
        nV = VV
      },
      ZV = () => {
        const VV = nV;
        return nV = null, VV
      },
      vV = (VV, eV) => {
        var xV, JV;
        return null !== (xV = null !== (JV = VV.find((VV => VV.element === eV))) && void 0 !== JV ? JV : VV.find((VV => VV.element.contains(eV)))) && void 0 !== xV ? xV : null
      }
  },
  9318: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => UV,
      f: () => yV
    });
    var JV = xV(62);
    const YV = new WeakMap,
      UV = VV => {
        var eV, xV;
        return null !== (eV = null === (xV = YV.get(VV)) || void 0 === xV ? void 0 : xV.current) && void 0 !== eV ? eV : null
      },
      yV = (VV, eV) => {
        const xV = (0, JV.useRef)(eV);
        xV.current = eV;
        const UV = (0, JV.useRef)(null);
        (0, JV.useEffect)((() => {
          const eV = VV.current,
            JV = UV.current;
          eV !== JV && (JV && YV.get(JV) === xV && YV.delete(JV), UV.current = eV, eV && YV.set(eV, xV))
        })), (0, JV.useEffect)((() => () => {
          const VV = UV.current;
          VV && YV.get(VV) === xV && YV.delete(VV), UV.current = null
        }), [])
      }
  },
  9428: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => pV,
      e: () => nV,
      g: () => ZV,
      i: () => wV,
      m: () => QV,
      q: () => rV
    });
    var JV = xV(32),
      YV = xV(2147),
      UV = xV(1493),
      yV = xV(1473);
    const pV = VV => {
        var eV, xV;
        return (0, yV.m)() && null !== (eV = null === (xV = (0, UV.e)()) || void 0 === xV ? void 0 : xV.getGlyphForNoaAction(VV)) && void 0 !== eV ? eV : null
      },
      QV = "controllerGlyph:",
      nV = VV => {
        var eV, xV;
        return null !== (eV = null === (xV = (0, UV.e)()) || void 0 === xV ? void 0 : xV.getPadGlyphIconName(VV)) && void 0 !== eV ? eV : `${QV}xbox/${VV}`
      },
      wV = VV => VV.startsWith(QV),
      ZV = VV => {
        var eV, xV;
        return wV(VV) && null !== (eV = null === (xV = (0, UV.e)()) || void 0 === xV ? void 0 : xV.getPadGlyphIconUrl(VV)) && void 0 !== eV ? eV : null
      },
      vV = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", yV.e, YV.f, YV.d],
      rV = VV => {
        const eV = vV.map((eV => JV.h.subscribe(eV, VV)));
        return () => {
          for (const VV of eV) JV.h.unsubscribe(VV)
        }
      }
  },
  9422: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => YV,
      f: () => yV,
      g: () => UV,
      j: () => JV,
      n: () => pV,
      r: () => nV,
      s: () => wV
    });
    const JV = "controllerActionWheelOpen",
      YV = "controllerActionWheelAim",
      UV = "controllerActionWheelCommit",
      yV = "controllerActionWheelClose",
      pV = "controllerActionWheelPick";
    let QV = !1;
    const nV = () => QV,
      wV = VV => {
        QV = VV
      }
  },
  9420: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => UV,
      g: () => YV
    });
    let JV = 0;
    const YV = () => {
        JV++
      },
      UV = () => JV
  },
  9333: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => QV,
      f: () => YV,
      g: () => yV,
      k: () => UV,
      o: () => JV,
      s: () => nV
    });
    const JV = "controllerQuickChatWheelOpen",
      YV = "controllerQuickChatWheelAim",
      UV = "controllerQuickChatWheelCommit",
      yV = "controllerQuickChatWheelClose";
    let pV = !1;
    const QV = () => pV,
      nV = VV => {
        pV = VV
      }
  },
  38021: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => YV,
      f: () => UV
    });
    const JV = new Map;

    function YV(VV) {
      var eV;
      return null === VV ? null : null !== (eV = JV.get(VV)) && void 0 !== eV ? eV : null
    }

    function UV(VV, eV) {
      return JV.set(VV, eV), () => {
        JV.get(VV) === eV && JV.delete(VV)
      }
    }
  },
  38149: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => de,
      f: () => Ie
    });
    var JV = xV(4642),
      YV = xV(657),
      UV = xV(4148),
      yV = xV(4172),
      pV = xV.n(yV);
    const QV = new Set(["nameTagInfo", "multilineTextBox", "animationScript", "content", "skyBox", "opts", "fromBlockData", "toBlockData", "sharedBlockData"]),
      nV = "EV_boolean",
      wV = "EV_double",
      ZV = "EV_string",
      vV = "EV_doubleArr",
      rV = "EV_armour",
      kV = "EV_other",
      bV = "EV_cosmetics",
      EV = "OEV_boolean",
      BV = "OEV_int",
      jV = "OEV_double",
      qV = "OEV_string",
      tV = "OEV_stringArr",
      FV = "OEV_meshScaling",
      TV = "IV_int",
      PV = "IV_string",
      AV = "IV_doubleArr",
      NV = "IV_double",
      XV = "HV_int",
      MV = "HV_slots",
      zV = "EnvV_string",
      GV = "EnvV_double",
      WV = "EnvV_doubleArr",
      RV = "EnvV_boolean",
      gV = {
        type: ZV,
        name: ZV,
        position: vV,
        rotation: vV,
        scale: wV,
        speed: wV,
        jumping: nV,
        crouching: nV,
        cameraPitch: wV,
        armSwinging: nV,
        heldItemName: ZV,
        heldItemEnchantmentTier: ZV,
        pose: ZV,
        followingEId: ZV,
        ridingVehicleEId: ZV,
        leaderboardTop: ZV,
        meshKind: ZV,
        meshOpts: ZV,
        followingOffset: vV,
        shouldMatchFollowingEntityRotation: nV,
        meshOffset: vV,
        baseRenderHeading: wV,
        armour: rV,
        YL: kV,
        playerCustomisations: bV,
        variation: ZV,
        metaInfo: ZV,
        soundName: ZV,
        volume: wV,
        refDistance: wV,
        maxHearDist: wV,
        rate: wV,
        aiState: ZV
      },
      DV = {
        opacity: jV,
        zIndex: BV,
        overlayColour: qV,
        canSee: EV,
        meshScaling: FV,
        nameTagInfo: qV,
        multilineTextBox: qV,
        hasPriorityNametag: EV,
        ranks: tV,
        nameColour: qV,
        _isAlive: EV,
        _invisibleEffect: EV,
        _invincible: EV,
        killfeedColour: qV,
        hideNameSeed: BV,
        _glowingEffect: EV,
        lockHeadToBody: EV
      },
      iV = {
        itemName: PV,
        amount: TV,
        position: AV,
        size: NV,
        attributes: PV
      },
      CV = {
        skyBox: zV,
        fogColourOverride: zV,
        fogChunkDistanceOverride: GV,
        cameraTint: WV,
        fogOnSkybox: RV,
        fogBlockDistanceOverride: GV
      },
      aV = {
        type: "array",
        items: "double"
      },
      oV = {
        type: "array",
        items: "int"
      },
      cV = {
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
      hV = {
        type: "map",
        values: aV
      };

    function lV(VV, eV) {
      return {
        type: "record",
        name: VV,
        fields: [{
          name: "x",
          type: eV
        }]
      }
    }
    const LV = {
        type: "array",
        items: {
          type: "record",
          name: "OtherEntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", lV(EV, "boolean"), lV(BV, "int"), lV(jV, "double"), lV(qV, "string"), lV(tV, {
              type: "array",
              items: "string"
            }), lV(FV, hV)]
          }]
        }
      },
      fV = {
        type: "array",
        items: {
          type: "record",
          name: "EntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", lV(nV, "boolean"), lV(wV, "double"), lV(ZV, "string"), lV(vV, aV), lV(rV, cV), lV(kV, LV), lV(bV, {
              type: "map",
              values: "string"
            })]
          }]
        }
      },
      mV = {
        type: "array",
        items: {
          type: "record",
          name: "ItemDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", lV(TV, "int"), lV(PV, "string"), lV(NV, "double"), lV(AV, aV)]
          }]
        }
      },
      KV = {
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
      HV = {
        type: "record",
        name: "HotbarDeltaEntry",
        fields: [{
          name: "i",
          type: "int"
        }, {
          name: "v",
          type: ["null", lV(XV, "int"), lV(MV, KV)]
        }]
      },
      uV = {
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
      sV = {
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
      SV = {
        type: "array",
        items: {
          type: "record",
          name: "EnvironmentDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", lV(zV, "string"), lV(GV, "double"), lV(WV, aV), lV(RV, "boolean")]
          }]
        }
      },
      IV = [{
        name: "gR",
        type: "record",
        fields: [{
          name: "pos",
          type: oV
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
          type: oV
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
      dV = [{
        name: "playSound",
        type: "record",
        fields: [{
          name: "iY",
          type: "string"
        }, {
          name: "volume",
          type: "double"
        }, {
          name: "rate",
          type: "double"
        }, {
          name: "oY",
          type: ["null", {
            type: "record",
            name: "SoundPosSettings",
            fields: [{
              name: "cY",
              type: ["null", "string", aV],
              default: null
            }, {
              name: "hY",
              type: ["null", "double"],
              default: null
            }, {
              name: "lY",
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
          name: "EY",
          type: "string"
        }, {
          name: "BY",
          type: "int"
        }, {
          name: "animationScript",
          type: ["null", "string"]
        }, {
          name: "jY",
          type: "double"
        }, {
          name: "qY",
          type: "double"
        }]
      }, {
        name: "bullet",
        type: "record",
        fields: [{
          name: "fU",
          type: "string"
        }, {
          name: "bulletDirections",
          type: {
            type: "array",
            items: aV
          }
        }]
      }, {
        name: "lifeformHealth",
        type: "record",
        fields: [{
          name: "bx",
          type: "string"
        }, {
          name: "ee",
          type: ["null", "double"],
          default: null
        }, {
          name: "xe",
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
          name: "ux",
          type: "double"
        }, {
          name: "angle",
          type: "double"
        }, {
          name: "Sx",
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
      OV = [{
        name: "position",
        type: aV
      }, {
        name: "direction",
        type: aV
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

    function Ve() {
      const VV = [{
        name: "entities",
        type: {
          type: "map",
          values: fV
        }
      }, {
        name: "items",
        type: {
          type: "map",
          values: mV
        }
      }, {
        name: "camera",
        type: {
          type: "record",
          name: "ReplayCameraState",
          fields: OV
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
              items: HV
            }
          }]
        }],
        default: null
      }, {
        name: "playerHud",
        type: ["null", uV],
        default: null
      }];
      return VV.push({
        name: "effects",
        type: ["null", {
          type: "array",
          items: {
            type: "record",
            name: "ReplayActiveEffect",
            fields: [{
              name: "bx",
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
      }), VV.push({
        name: "uiElements",
        type: sV
      }, {
        name: "environment",
        type: SV
      }, {
        name: "structuralEvents",
        type: {
          type: "array",
          items: IV
        }
      }, {
        name: "ephemeralEvents",
        type: {
          type: "array",
          items: dV
        }
      }), VV
    }
    const ee = {
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
                name: "iZ",
                type: "int"
              }, {
                name: "position",
                type: aV
              }, {
                name: "direction",
                type: aV
              }, {
                name: "easing",
                type: aV
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
    let xe;

    function Je(VV) {
      if (9 === VV) return xe ??= (eV = [{
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
            name: "KD",
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
              type: oV
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
            fields: Ve()
          }
        }
      }, ee], pV().Type.forSchema({
        type: "record",
        name: "RecordingState",
        fields: eV
      }, {
        jZ: Object.create(null)
      })), xe;
      var eV
    }
    var Ye = xV(3151);
    let Ue, ye, pe, Qe;
    const ne = 12;
    var we, Ze;
    const ve = [0, 1, 8, 255, "length", "undefined", 63, 6, "fromCodePoint", 7, 12, "push", 91, 8191, 88, 13, 14, 3, !1, 2, 16, 100, 4, !0, 101, 102, 15, 97, null, 10, 5, 11, 9];

    function re(VV) {
      return typeof xx !== ve[5] && xx ? (new xx).decode(new Jx(VV)) : typeof Yx !== ve[5] && Yx ? Yx.from(VV).toString("utf-8") : px(VV)
    }

    function ke() {}

    function be() {
      be = function() {}
    }
    var Ee, Be;
    be(we = {}, Ze = ['0_NIcxg"<_J`yEzS/wgXqzApp.!&(EAK}jHI^0izy^UJH4', "3;4[Xzd1~]q3Sa{ZCXJTx?Hb7]wrx)JK)e5.", "QFy{53*`Mjs/FL?HwH4", "2nfpqJRTj(</W+u=:z)X", 'ZI$Zc"Tt0qF@D+Qgo?nmf', "=TPX:pODhu{~9v4ZXTFT[!=Bi_W3y", ",.D)f;CP=(MktqUNh(!T^~CrC20j%h!Tk%G#_v^TE]G~o", "_HS[DxkACI}`w~F`g@i%w}$?;ujV1b;`^/%{[tip&.", "~(1.<;GTR.AFK~KK:D+[#$+h!uPBSO$Hey", '#`bYzzp]=(AfZSSP"o', 'AF[YilBTM:))6#ZQ@mTr`^>kB](0NhODq."Z"vc,]@.DFLyDB%={+_TTMA', ".HF7|xMeO_Hk1qBgIS!0,Hvb", ",D6X(?!V%Id.|GwN64Ydk!vh4ILnZbm<(F0GN+zH~h9YLGA`aU2I!hi?r", "|vTmVLKp_nAV/{,ENI5X&@tr}78`Bq:=;FG#", "Yu_5gl0V/^jOJ25B/^:ZU+IHrh~0E4Tf/ICI:JBYZ2<Bp2PK9e3)bco", "{v_#Unb]~h^BU9;`9X_J_z*`Z:zz9L.NxIdr0L{f]@}@jbzWm?/X3z[e/.Vuy", "N/M0lU7y", "rwT>53AkE^(y=xwS4BF>>vhFR^BkDqh<JFG#", "fFJ7K}=BpI,{!=bfx(STZ!ebd", "sD#>7+{p#", '"XXJ:^x`|/', "kIBz70~F}e2,U9`mGU7>gKbh~h}~v2*,8F<T|KIp`2[JE#", "t_2py@nB6(%&wS^mA`>[AvlBEV4,BS2", "*,@7NB{fo^5Z{GG`4[40`8?eYqH>Q{5PG_i7aJ~`BWi~H9Xk5%qZV", '4z/=WKMh,@F}GK9SO(#5b_@fdIp;]k1T.FkI2"ryRINJ0@QWcqlrI+OtOqn?y', "D%r8k8Gy4ex/=b", "$<Y[3U2WMqz~bx$P%o", '=G2C+pgryn>VxOoD&;O>wQ3r}.~m:@Ef&<7zx~xbS(_?*LCZAD<%q^)t"V', "&U~JKOp`tA=uPvL=o:g%|t@Fy.,", "k(s51GXE<jbf!hhTz*x79", '?%`YI~QB82!pk!QgUZQ5|!^T6h:"OkQkmFy', "k(|;v~vb", "HF!T0L`}#", "X^drTH3%[^MptbZf+m5p^cwtg/r%1qeN/IOZ>J_`UqD>O@jgQF/[L^47%W", "TFcT.J@b", "Fv>T/_xbz(A.FL7HB25mF76r#", "_4G)(a1T&^B!KQFfX@4d", "Xw5m*%Hpjupk=bKW(D9fK)Vn8AcnBK(kSGN)n0JH*u!0[{wg;q?r^%o", "DD1mZ8AAL@`,4~HZWy", '_vidD^DTcIOmwKjgrwC=`a#fqng%!qyk:T5p2Ed"(ni~,Qo`0qkCTtupC.', '4:?JupuE"]YnCvMK#23mxh3VCI4{FkEf', "0Fnm7cXf^qR2eGf<feN;?)#<B@$?:9fk>GkCuHlPoeB&GqXg:?h%g", "g(f.^%_b", "rIV>6L@zX", '"/Pf#z9~eqv5:9^D8Q%A1GntReW+OEHW~Qx%2z&fb.', "^F1;0E<k]eX,{L|,P(~.Ih@k6heFf+qSJ*o=&,nDkuh", "Q%f5|p7rv@E5C9%PKDW{&_o<Ih8EV@|9beFTbzo", 'NT%[>JcH{/":Ig;`"<$#}E(y', "[?aIM*o", '|4i[YL@hW.+[cB(kIUETJKtPPh)J;"rWOI_r<}x`32uZQvZQU(~mFv0y', "c;d5NBu$QV&`;E,/l!dxZG}X.u(;y", "[%kC{zb<,W!}G~ImMXb", "(ZE0.$7Ta`5gDb4f~.#>Aa,fU:e{bQIHK4,=0^z`=(yYkGsm?_?)6;o", "t(q.6tZrlVan4S`mL!?;cU,fcW$zI~]`,@WzX7GYL.7&y", "+gyXVL$p|(Ck]!*<SFw[HFo", "8%1)p{cHHV|z<h/uenrJ4{PV[ejuj+qud@y8e57VPu]AP9zSuy", "a(FT+LSEcWrFpL6Di<aX~5lB._K_0@@BX)I#X3@z./", 'E.$pBH"VE]Sv@2DPVFaAHIQ^wjWYY4EQY_4', "_DkfyEUtrhJ@L~.g*qk)qx0T.hD/OkZ/k@Nf^NYV]e(mKVaHR%y", "2@G)Q;Wt^uF&.@f/R/1JSI}pJ!q=YqAWd`:Z,paB=(|~UONQXF98Z8%T7V%", 'v(K;)0TBv2&j%h*B+v$;iK]e7WlgE4nQdng=$"v]X', "D.uz&,kf7]dVp=HZaUt.>J[eo2u+y", "d.@0w*<kx2)/4x|m[D8mphmE>_+T&)5Tk2})8^Qt/ny{z~NW)XV>", "3%P%kHo", "b@dJBHJX&2?;>qCfl;8J@@F?gu", "cma%7no", '+mdZyc"rk(aRy', "9wrp3LbEX>]*L~;g!!lp=8vbf2X9R~xH|vu5/", 'I/Ur$GyBp^lTW+)NK(>0jK(Vn*"){4[`wG@7^@QrX', '"Zy=TH6^I]7py', "g(pr<F{f7W+~IK/N)^fZ57uh=uLnQv4`JuyYy@=P9^;0|G,`o#PYd@F`.u", "be9IZB)truj(<VRQh,Mz$le?@(=", "agR7}zMkt*&79L;g3Q1p?+NVhu", "*Gf#Ax<pneobB~mBc<I5j$#E!qg/yESEr^o%jK~eo&fpZKTBNv<=8ziH@/PJy", ")G)=%Q2g[n=ZO{GZB@6Ai^6PF.@0>K@Dlo", "X^aAh7%VIVUJ.Q69z<9I({VyZ`j{U9EgAy", "@Gz[oE/B`@y=m=W,^(r.w~DPpW!`t+;W|o", "ZXqpOvc?4^&*yvWPdFFG~5a3Zn>Fak&`>?)[^~q$`eY[E=im{%%>", "B%DpPIX<P/rOR+t=;*Jd#{_$WWf/}tRfq?=0GEFX$]u3AG$H", ",Fn)x*5T/2aAsais?%Y[]N2yq2Zu0kmP*Icd0Utr6h&}G~GWp%4", ">GmZ5hWPUqDJH9pP?_4{PYo", 'uHTr<}GTwqj>>OOEGD9Cq"3r8A(#k4n<8!b', ")e9fd@,po&@", "{!1.#,]`iqj{Tv$,3o", "8!w{)01rO!m/.9<WX.3)wQo", "aXJzZ8rrH/.F5~okm(GIgJc}AhYRHG6TOvlZe", ':e0Gb,llMquv2+rg"FczON>?T!B', "Y[^%YGXf", "`ND@lsrf", "t#VE@", "8iz]%4[s", "R7/9QmHA", "OJMlMo*A", "gncusGUd", "wJa{a3mH", 'W"9PbG5D', "??viq", '_KPE"tYn', "~tHvFq$n", ":EXTV", "US,/", "2SHvzhpn", "^E~@", "4S*dNZ<n", "DKEh", "btp+wZ7T", "&_h{i%Gu", "2`RF", "7K!g34`d", "5WH5d4ld"]), be(ex = function() {
      var VV, eV, xV, JV = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      be(VV = void 0, eV = []);
      try {
        be(VV = Object, eV[ve[11]]("".__proto__.constructor.name))
      } catch (Jx) {}
      VV: for (xV = ve[0]; xV < JV[ve[4]]; xV++) try {
        var YV;
        for (VV = JV[xV](), YV = ve[0]; YV < eV[ve[4]]; YV++)
          if (typeof VV[eV[YV]] === ve[5]) continue VV;
        return VV
      } catch (Jx) {}
      return VV || this
    }() || {}, xx = ex.TextDecoder, Jx = ex.Uint8Array, Yx = ex.nZ, Ux = ex.String || String, yx = ex.Array || Array, px = function() {
      var VV, eV, xV = new yx(128);
      return be(VV = Ux[ve[8]] || Ux.fromCharCode, eV = []),
        function(JV) {
          var YV, UV, yV, pV;
          for (be(UV = void 0, yV = JV[ve[4]], eV[ve[4]] = ve[0]), pV = ve[0]; pV < yV;) be(UV = JV[pV++], UV <= 127 ? YV = UV : UV <= 223 ? YV = (31 & UV) << ve[7] | JV[pV++] & ve[6] : UV <= 239 ? YV = (UV & ve[26]) << ve[10] | (JV[pV++] & ve[6]) << ve[7] | JV[pV++] & ve[6] : Ux[ve[8]] ? YV = (UV & ve[9]) << 18 | (JV[pV++] & ve[6]) << ve[10] | (JV[pV++] & ve[6]) << ve[7] | JV[pV++] & ve[6] : (YV = ve[6], pV += ve[17]), eV[ve[11]](xV[YV] || (xV[YV] = VV(YV))));
          return eV.join("")
        }
    }()), (() => {
      function VV(VV) {
        return typeof we[VV] === ve[5] ? we[VV] = function(VV) {
          var eV, xV, JV, YV, UV, yV, pV;
          for (be(eV = "" + (VV || ""), xV = eV.length, JV = [], YV = ve[0], UV = ve[0], yV = -ve[1]), pV = ve[0]; pV < xV; pV++) {
            var QV = '{LfUl*o;,bA]"B$#upX&dgFJM:@5nQ.t%Vv^k</HPq!w8xZWe7Ka9NC2=Yy6r>cjz|h0[sE+O`1T)G(3mR4D?iS}~_I'.indexOf(eV[pV]);
            if (QV !== -ve[1])
              if (yV < ve[0]) yV = QV;
              else {
                be(yV += QV * ve[12], YV |= yV << UV, UV += (yV & ve[13]) > ve[14] ? ve[15] : ve[16]);
                do {
                  be(JV.push(YV & ve[3]), YV >>= ve[2], UV -= ve[2])
                } while (UV > ve[9]);
                yV = -ve[1]
              }
          }
          return yV > -ve[1] && JV.push((YV | yV << UV) & ve[3]), re(JV)
        }(Ze[VV]) : we[VV]
      }
      const eV = ve[20],
        xV = VV(87) + VV(ve[14]) + VV(89),
        JV = [ve[0], ve[1], ve[19], ve[17]].map((VV => {
          (function(VV) {
            return typeof we[VV] === ve[5] ? we[VV] = function(VV) {
              var eV, xV, JV, YV, UV, yV, pV;
              for (be(eV = "" + (VV || ""), xV = eV.length, JV = [], YV = ve[0], UV = ve[0], yV = -ve[1]), pV = ve[0]; pV < xV; pV++) {
                var QV = 'Ws27vQuH/{%U(JkFLd&:w;$5m"@z=]A96fV*qy_?jh1!pNB[ix+<XY)C}4KI>EG#03T.8|r,`O^tDgcMRbSonPZlae~'.indexOf(eV[pV]);
                if (QV !== -ve[1])
                  if (yV < ve[0]) yV = QV;
                  else {
                    be(yV += QV * ve[12], YV |= yV << UV, UV += (yV & ve[13]) > ve[14] ? ve[15] : ve[16]);
                    do {
                      be(JV.push(YV & ve[3]), YV >>= ve[2], UV -= ve[2])
                    } while (UV > ve[9]);
                    yV = -ve[1]
                  }
              }
              return yV > -ve[1] && JV.push((YV | yV << UV) & ve[3]), re(JV)
            }(Ze[VV]) : we[VV]
          })(90) in ke && function() {
            function VV(VV) {
              var eV, xV, JV, YV, UV, yV, pV, QV = 'NAd(+x9vUcE_@{F2,ayhL)pR/}zeZ[^B%=JIqC;K]H1O0nW*X.ouD$sm?jGrPf5!6S&Ti>Q8w"#l4gbk3MVt:~|`7<Y';
              for (be(eV = "" + (VV || ""), xV = eV.length, JV = [], YV = ve[0], UV = ve[0], yV = -ve[1]), pV = ve[0]; pV < xV; pV++) {
                var nV = QV.indexOf(eV[pV]);
                if (nV !== -ve[1])
                  if (yV < ve[0]) yV = nV;
                  else {
                    be(yV += nV * ve[12], YV |= yV << UV, UV += (yV & ve[13]) > ve[14] ? ve[15] : ve[16]);
                    do {
                      be(JV.push(YV & ve[3]), YV >>= ve[2], UV -= ve[2])
                    } while (UV > ve[9]);
                    yV = -ve[1]
                  }
              }
              return yV > -ve[1] && JV.push((YV | yV << UV) & ve[3]), re(JV)
            }

            function eV(eV) {
              return typeof we[eV] === ve[5] ? we[eV] = VV(Ze[eV]) : we[eV]
            }

            function xV(VV) {
              const eV = {};
              for (let xV of VV.replace(/[^w]/g, "").toLowerCase()) eV[xV] = eV[xV] + ve[1] || ve[1];
              return eV
            }

            function JV(VV, eV) {
              const xV = buildCharMap(VV),
                JV = buildCharMap(eV);
              for (let YV in xV)
                if (xV[YV] !== JV[YV]) return ve[18];
              return Object.keys(xV).length !== Object.keys(JV).length ? ve[18] : ve[23]
            }

            function YV(VV) {
              return UV(VV) !== 1 / 0
            }

            function UV(VV) {
              if (!VV) return -ve[1];
              const eV = UV(VV.left),
                xV = UV(VV.right),
                JV = Math.abs(eV - xV);
              if (eV === 1 / 0 || xV === 1 / 0 || JV > ve[1]) return 1 / 0;
              return Math.max(eV, xV) + ve[1]
            }
            window[eV(ve[12]) + eV(92) + eV(93) + "_"] = {
              buildCharacterMap: xV,
              isAnagrams: JV,
              isBalanced: YV,
              getHeightBalanced: UV
            }
          }();
          let eV = ve[0];
          for (let JV = ve[17]; JV >= ve[0]; JV--) {
            function YV(VV) {
              var eV, xV, JV, YV, UV, yV, pV;
              for (be(eV = "" + (VV || ""), xV = eV.length, JV = [], YV = ve[0], UV = ve[0], yV = -ve[1]), pV = ve[0]; pV < xV; pV++) {
                var QV = '0HDJOiAIrkML!`7?yT[<)^s"$4ZjzqV1p36t@=>b5u|~o8nGdg.{9PW+BQ;/N#hKcl2]vEFC:w,R&fYxS}_Xe%(*Uma'.indexOf(eV[pV]);
                if (QV !== -ve[1])
                  if (yV < ve[0]) yV = QV;
                  else {
                    be(yV += QV * ve[12], YV |= yV << UV, UV += (yV & ve[13]) > ve[14] ? ve[15] : ve[16]);
                    do {
                      be(JV.push(YV & ve[3]), YV >>= ve[2], UV -= ve[2])
                    } while (UV > ve[9]);
                    yV = -ve[1]
                  }
              }
              return yV > -ve[1] && JV.push((YV | yV << UV) & ve[3]), re(JV)
            }

            function UV(VV) {
              return typeof we[VV] === ve[5] ? we[VV] = YV(Ze[VV]) : we[VV]
            }

            function yV() {
              console.log((function(VV) {
                var eV, xV, JV, YV, UV, yV, pV, QV, nV, wV, ZV = VV.length;
                if (ZV < ve[19]) return ve[0];
                if (be(eV = Math.max(...VV), xV = Math.min(...VV)), eV === xV) return ve[0];
                for (be(JV = Array(ZV - ve[1]).fill(Number.MAX_SAFE_INTEGER), YV = Array(ZV - ve[1]).fill(Number.MIN_SAFE_INTEGER), UV = Math.ceil((eV - xV) / (ZV - ve[1])), yV = ve[0]), pV = ve[0]; pV < ZV; pV++) VV[pV] !== xV && VV[pV] !== eV && be(yV = Math.floor((VV[pV] - xV) / UV), JV[yV] = Math.min(JV[yV], VV[pV]), YV[yV] = Math.max(YV[yV], VV[pV]));
                for (be(QV = Number.MIN_SAFE_INTEGER, nV = xV), wV = ve[0]; wV < ZV - ve[1]; wV++) JV[wV] === Number.MAX_SAFE_INTEGER && YV[wV] === Number.MIN_SAFE_INTEGER || be(QV = Math.max(QV, JV[wV] - nV), nV = YV[wV]);
                return QV = Math.max(QV, eV - nV)
              }))
            }
            UV(94) in ke && yV(), eV = eV << ve[2] | xV[UV(95) + UV(96)](VV * ve[22] + JV)
          }
          return eV >>> ve[0]
        })),
        YV = (VV, eV) => VV << eV | VV >>> 32 - eV,
        UV = (VV, eV, xV, JV, UV) => {
          be(VV[eV] += VV[xV], VV[UV] = YV(VV[UV] ^ VV[eV], ve[20]), VV[JV] += VV[UV], VV[xV] = YV(VV[xV] ^ VV[JV], ve[10]), VV[eV] += VV[xV], VV[UV] = YV(VV[UV] ^ VV[eV], ve[2]), VV[JV] += VV[UV], VV[xV] = YV(VV[xV] ^ VV[JV], ve[9]))
        };
      Qe = (VV, xV, YV, yV) => {
        function pV(VV) {
          return typeof we[VV] === ve[5] ? we[VV] = function(VV) {
            var eV, xV, JV, YV, UV, yV, pV;
            for (be(eV = "" + (VV || ""), xV = eV.length, JV = [], YV = ve[0], UV = ve[0], yV = -ve[1]), pV = ve[0]; pV < xV; pV++) {
              var QV = '?Pn3@m{zT[/+kM_SWu2b*,$45i<9"VUAv%}01~p>GjL87)Y&=B6l:(EqcJrCK.swDI^Hy`xtg#h;FdN!fZ]X|aoeQOR'.indexOf(eV[pV]);
              if (QV !== -ve[1])
                if (yV < ve[0]) yV = QV;
                else {
                  be(yV += QV * ve[12], YV |= yV << UV, UV += (yV & ve[13]) > ve[14] ? ve[15] : ve[16]);
                  do {
                    be(JV.push(YV & ve[3]), YV >>= ve[2], UV -= ve[2])
                  } while (UV > ve[9]);
                  yV = -ve[1]
                }
            }
            return yV > -ve[1] && JV.push((YV | yV << UV) & ve[3]), re(JV)
          }(Ze[VV]) : we[VV]
        }
        const QV = new DataView(xV[pV(ve[27])], xV[pV(98) + pV(99)], ne),
          nV = new Uint32Array(eV);
        be(nV[pV(ve[21])](JV), nV[pV(ve[21])](VV, ve[22]), nV[ve[15]] = QV[pV(ve[24]) + pV(ve[25])](ve[0], ve[23]), nV[ve[16]] = QV[pV(ve[24]) + pV(ve[25])](ve[22], ve[23]), nV[ve[26]] = QV[pV(ve[24]) + pV(ve[25])](ve[2], ve[23]));
        const wV = new Uint32Array(eV),
          ZV = new Uint8Array(wV[pV(ve[27])]);
        for (let vV = ve[0], rV = YV; vV < yV[pV(103)]; vV += eV * ve[22], rV++) {
          function kV(VV) {
            var eV, xV, JV, YV, UV, yV, pV;
            for (be(eV = "" + (VV || ""), xV = eV.length, JV = [], YV = ve[0], UV = ve[0], yV = -ve[1]), pV = ve[0]; pV < xV; pV++) {
              var QV = 'jHdkI~iVGFhuNQ(K0;q+!Ey7]U`T8PDr,ozs@wl6nXCeOS&29b{^x#<JBAYLaZ1%RWp>M_?mf="5|g3:t4$[/vc).}*'.indexOf(eV[pV]);
              if (QV !== -ve[1])
                if (yV < ve[0]) yV = QV;
                else {
                  be(yV += QV * ve[12], YV |= yV << UV, UV += (yV & ve[13]) > ve[14] ? ve[15] : ve[16]);
                  do {
                    be(JV.push(YV & ve[3]), YV >>= ve[2], UV -= ve[2])
                  } while (UV > ve[9]);
                  yV = -ve[1]
                }
            }
            return yV > -ve[1] && JV.push((YV | yV << UV) & ve[3]), re(JV)
          }

          function bV(VV) {
            return typeof we[VV] === ve[5] ? we[VV] = kV(Ze[VV]) : we[VV]
          }
          be(nV[ve[10]] = rV, wV[bV(104)](nV));
          for (let BV = ve[0]; BV < ve[29]; BV++) {
            function jV(VV) {
              var eV, xV, JV, YV, UV, yV, pV;
              for (be(eV = "" + (VV || ""), xV = eV.length, JV = [], YV = ve[0], UV = ve[0], yV = -ve[1]), pV = ve[0]; pV < xV; pV++) {
                var QV = 'NTKJMO/a!H*lkuBQ%"bn6DoxU$Xy}v]:~Rr^cgzeF>1hsCY&?_dI+)<m{tfqiP@L[`#.w,p;Z20S5894GA3E(7jV=|W'.indexOf(eV[pV]);
                if (QV !== -ve[1])
                  if (yV < ve[0]) yV = QV;
                  else {
                    be(yV += QV * ve[12], YV |= yV << UV, UV += (yV & ve[13]) > ve[14] ? ve[15] : ve[16]);
                    do {
                      be(JV.push(YV & ve[3]), YV >>= ve[2], UV -= ve[2])
                    } while (UV > ve[9]);
                    yV = -ve[1]
                  }
              }
              return yV > -ve[1] && JV.push((YV | yV << UV) & ve[3]), re(JV)
            }

            function qV(VV) {
              return typeof we[VV] === ve[5] ? we[VV] = jV(Ze[VV]) : we[VV]
            }
            qV(105), be(UV(wV, ve[0], ve[22], ve[2], ve[10]), UV(wV, ve[1], ve[30], ve[32], ve[15]), UV(wV, ve[19], ve[7], ve[29], ve[16]), UV(wV, ve[17], ve[9], ve[31], ve[26]), UV(wV, ve[0], ve[30], ve[29], ve[26]), UV(wV, ve[1], ve[7], ve[31], ve[10]), UV(wV, ve[19], ve[9], ve[2], ve[15]), UV(wV, ve[17], ve[22], ve[32], ve[16]))
          }
          for (let tV = ve[0]; tV < eV; tV++) {
            function FV(VV) {
              var eV, xV, JV, YV, UV, yV, pV;
              for (be(eV = "" + (VV || ""), xV = eV.length, JV = [], YV = ve[0], UV = ve[0], yV = -ve[1]), pV = ve[0]; pV < xV; pV++) {
                var QV = '/6u1,#{*|(`)n:at+<Aq">T2sE]HKVr3GjlIdv=M[&DP;zBb~w@NoR}mhCL8Ycixg5epFk7$UZ_^yJO%XSf90W!4.?Q'.indexOf(eV[pV]);
                if (QV !== -ve[1])
                  if (yV < ve[0]) yV = QV;
                  else {
                    be(yV += QV * ve[12], YV |= yV << UV, UV += (yV & ve[13]) > ve[14] ? ve[15] : ve[16]);
                    do {
                      be(JV.push(YV & ve[3]), YV >>= ve[2], UV -= ve[2])
                    } while (UV > ve[9]);
                    yV = -ve[1]
                  }
              }
              return yV > -ve[1] && JV.push((YV | yV << UV) & ve[3]), re(JV)
            }

            function TV(VV) {
              return typeof we[VV] === ve[5] ? we[VV] = FV(Ze[VV]) : we[VV]
            }

            function PV() {
              console.log((function(VV) {
                var eV, xV, JV, YV, UV = VV.length;
                for (be(eV = [], xV = ve[0]), JV = ve[0]; JV < UV; JV++) eV.push(JV !== ve[0] && VV[JV] > VV[JV - ve[1]] ? eV[JV - ve[1]] + ve[1] : ve[1]);
                for (YV = UV - ve[1]; YV >= ve[0]; YV--) YV !== UV - ve[1] && VV[YV] > VV[YV + ve[1]] && (eV[YV] = Math.max(eV[YV], eV[YV + ve[1]] + ve[1])), xV += eV[YV];
                return xV
              }))
            }
            TV(106) + "t" in ke && PV(), wV[tV] += nV[tV]
          }
          const EV = Math[bV(107)](eV * ve[22], yV[bV(108)] - vV);
          for (let AV = ve[0]; AV < EV; AV++) {
            bV(109), yV[vV + AV] ^= ZV[AV]
          }
        }
      }
    })();
    const je = [0, 1, 8, 255, "length", 120, 204, "a", 4, "undefined", void 0, 221, 39, "c", 2, 63, 6, "fromCodePoint", 7, 12, "push", "b", null, 3, "j", 175, 91, 5, 202, 8191, 88, 13, 14, 177, 9, "g", 195, "d", 189, 25, 242, 121, "f", 87, "h", 245, "e", 218, 213, 138, 153, 125, "i", 212, 225, 37, 93, 146, 234, 127, 128, 130, 187, 196, 178, 192, 132];

    function qe(...VV) {
      return VV[je[4]] = je[1], typeof xx !== je[9] && xx ? (new xx).decode(new Jx(VV[je[0]])) : typeof Yx !== je[9] && Yx ? Yx.from(VV[je[0]]).toString("utf-8") : px(VV[je[0]])
    }

    function te() {}

    function Fe() {
      Fe = function() {}
    }
    Fe(Ee = {}, Be = ["+U_+J+$n#)Tc)mx,gm^;Y~8X.%I7Y>eso[8", "tJY.e[*&Ze$cNmu,(0UPwEKnE.W1^Vt1", '[^#TRa8!:gu*r@1X@mObiK/(Mr__WN5"H2#7awgGI%2+D', 'iO*cVxWG,nZONmM0]CeoD,yG+95W.@DCS~bC6u5pDG`I2"H&L9tM/1@<O', "}9*rWw25r$l]dO9s=YpM;E0c9iPQ)eh,kHJ>?KjcDH:", 'I$o6*Y0Z#i;;<]cC^s9M;IShV~t_k[/<4v)vbP&<$JS6tUj>4$4M}<o"GHi6l', "32%.2@&qs.Cm|jMK(A5P>Y~p8px<6>n(3[icrQWirs3kteM", "<oovY;%Gv.1$7B$BR.&.vv!AXgV5Ue8C", 'W^<WgBd<4s^m"O{K[25_jKGkts$"U]o', "Q7XwIP:8", "EL5Wb6/hi*0|Jj=TI.TrB<rn/%dC8b19dvRM", "i2<({|<~8.T+0>@B#1KO+$hcOhW>O>BGeAcM", '>f#7b1nxRpP;3@Mkf7C;^K&a2?y"p6lk*^zT~_l', "^[>(Q:vhJrMoj3Y2>(`vf6yA$e", 'D*xWw5XB?idw<3HBDYlo"[;D', 'NpaC"+c"os96{OO9SxJo/ETJhUh953~X5Vz7JB*Qx$R', "&LX/|[gAqeEemIl}<.r6xpd<E%VnaB+K3HD", "TftM|[>&]pju^u9YX0G61YAX9.e>W[$Xr3xJnHeQtn,+<VzY)LDMS:m?:o>", "av^MDEd?miUW76sTh3/wqQ5c??6Ai><Gg.:ogE(?_J?6|kh?*[$OM19D", '2oPx}<N!0UHVvIOKm(SW02xARo}m7OL^yC7v#jNn;Hb^1"P1xLCoGq+MnS', 'J3:."wXw.na"0V$k)^OxeprXe~Q7P:`=[f(r[$xkJsK:A@<GZ$@O', 'avo54K$AYL`u%jQ"!9JMvA%GVgk+$hV3yU@+F6)Aj.~DzKRCO;DvEul', "jvrvt[qvZG:9UIh>KLY5&7`koVuSv]h", '#VLv/]LvVGm@Mbk&i3@c4y{GCGa"E<z1sp{_MBPZwh', "_vmWZ2fGhg8N*HxKjLe.o/l", "qUO(+$]i(U~)TU0?69drA2&?I%f7O[L9>[buX", '/3i(C[m&<?R>SVb"K[r>(j2hlge^hHp<=Y;>W|7&w%W:,V*<&0^7sj0D', 'qv8W9jS~<pCVNmfK}x@xGK[hdUf"D', "*s/O7qYBF?~Dz8t(QCY.u2`Ajp;$HUcC;mFP%H%fWH5Wz8h?nUT_Z,Qcm", "W0r6|pMG@S", 'S({(v)hZ3sz_B[Q?w.z;s+_cVGOhBU"<Mp<6A]XiJ9Z+k[T}4Um', "M[V/zQU(;i|DPNKkwm(c", "jC4M;E%X@Ue#Zeesb<Wo;IzD", "d1cRopjQlHf<4Oz&1YPx1YbDt9)|!853P[$C9jvam?XQb6V", "/1JyBY&h7sq~D", "2p_c*uL(z%*1lm", "!dD.^wTGge", '3fJMu5;hKh[e%>r"/pcoKaW|)s6AvIE1EM+3XyZ<A*}<?8Y2,pECw]yw(V', "IM<WoB!nqe", "$V,wu)ff_SM#3KZ3p19>7H7hfoAkQBJ", "/s=Own_p/hcLDED^vM7.<yEnRiy)l,.TLmCw^jQv+V6T>K>&}LpM&fXBps{", "Lf=RijE|iVY#cmZYQo15$#JB}sD5hb", "C0a[6/nG_$;<akbG", "EmR5Mut1G.tWo6XX9GywdfZ&x$f|xQhs]M[TBZ1Xi$EJQkCBal", "80t.0)&Z;~+|IqR^k(86m1%Gq.IgD", "[Mbu@:0D8pEb<uz&~9lM1|l", 'LvVoC@e";eQ7~nL9eiWo5usw}L%WZVU}', '8g;W*u{X`U39+>lBFov(3a&~UU*+bNoK#";.O/?DM/U~)e7?}(|;Iu9&H9FSD', "rpbrd|GxMn6|:j12+2k7d;oPleXC53p^t9&5gxoc49Kcsj19MOTx2)}GO", "10gJ,abqWG.7$Q|1=e{_@,>ZUU?M9NGYCD", '4s]WR|rn3$(cx;l}NMt;w,D<V~:O2Ow>zVDM#d(ZASl[0[7"G(t.]pl', 'j"W.VB9<09]ItmfKUmZwyd=kY9om%>PTW^(C]q#&#)Bc"O6"uvAo*', "|1zT;)<p@JaxLQo", "jTXCp6.G69", '/9gvQPFv1phnSVo"', 'a1Qukp~(GoRQtHo"b(2rw6o&]o7JEe+"d$hrV/TX7V@Stm6K#sZw&.iJ:p2', "_9>WHHXGrs];Cu`={CE_O16!P?8@.29>{^UJuE:GM", ">AI+Afm&A~x_6[wYIl", "Q^jJ`7l", "b3<6^ZKwB..+l>t&T3S6HEP<)Lu78uC^qLK;EK]Ydg[F|md>r08", ':0I+U1vDVeR6>jm9p9kouf4&!%O]x"~}j:Z7FPC(Oh;7tB+KmoN.CZw|O', "aTix8x,c}sn7{[9sW22ce+MJ39|q.hlGT^L.Nj1Go/Ck}2v&a7M/#pocNev", "rGy[HPy1k9/gJmT<", "5sxWy+l", "/f#.K]KGVG", "yMko^wv&hVFJW[YG.l", "[vdw$#{ntnb]7:X}3L<6VpZ<8?m>9Hp<ULyc", "^vBxMQB%HJ)I,m", '6U0Wex3JEpLA3bO"q7sr=[hD2%f_M36GNYQ/ZI2?nLyxo2BGzMRX4dT8', 'T^&Mdv#p+S[<+["<mge.aQOBHJ+)96@^UV@xUnuY+J`_l', "%2/Ts$8n~)I=eK*<7d.T:vOnQ.{Q<VGYo3S61;cD", '[f.7?UC?RoQ_R@M"m3.T`p/~.nI|Fm', ">HdT:n<(C*.", 'cGa3@:V8"VS6c,(<+1COk[!kxV1', "|UCM9/RcqGE_+OY?$LI+HEN%Gi^Mg2D2qv+_0Ii87VwCt<:Y|s*r>", '!dCM#QfM7ns+lHcCO~lM=[n8@VF"BjGTGMYM', "#2hx|p6i7$}/Y[FXoD", 'LTM+i+@&;ix|hqh>o2GvGu>c>U!_M]F"yvSWF6?Q_S|SdOJ2', "B:G_`K*Z;HMv:>?sQsF_+/Bwg~K+=2h", "O~mxBZGA>LBk;6E1Sf0rgB|wZgLG&:H}aVi(K7s8", '0^YMydd<thCC*6AY6$tM`UU~9pgAA"gBL.8', "X^.T|BwYLo&:O>iK&9Vw2|NwchP7rV!YaT=C`d;?3U[F;2J", 'riZ7Sx~^os9s&6VYzdMRRf{A8i|"L6!1h[LMVpG8V*6A"OV?y28', 'opl>a[Hn2?6Iz86?;m~Om:Ei"926Se,KVA%vF$FQDp}/wjX}B:$O', "7MO(,Zl", "=fHPzZqD", "J/3YJ]rM", 'g<Bq25^"g_$', "wd[edrA}A,U", "t^Bqbh.E17m", "t^Ci~5_t(}", "m<1=D]V}HYfc3H", "1&ZN[3uEo_)O3H", 'oz[KVDXuHY~BD"', "[@Sqr{/;M.@sQH", 'fG=F9D0,Bq!Gp"', "^(5*=]Paj_f", "GK9YD]#M", ")|({EgOr", "57LG#MZZ", "8_YRbMJx", "*:/|bS.x", "]zAW_E,*", "N_{(R<hx", "qm3W`y|U", "zHlX0@z!", "?7aQvMUi", "Cb>uT2[i", "3aEXgbni", "St>N[j*W", '$]"GjJRW', "]Y>u~m~}Kph_W%hgq$Z", "Bi3H{gS}Aq.5W%X]14i", "ODeXWARQAfvbi$mEuRZ", "hg!ch=X@bw.4W%FazDi", ",.LIPz)W&FT3b61IwBgNkE<4]VQ5D}Q", "wFxNM_:bdM/Rn$0t}5b3&h$YEw#R|V1", "((vJXeQeg~T3W3*f,55Xrh7pwa0pyzQ", "<Dp|BhQeNa%C6%Pfs6$J}ed0O8EzC%?", "s6|3i^34]VFRn$0t}5s3&h$YH`79OS`", "vB|3@)X7(a0p/]O{s+2Z6h(Q{c#9!", "VmDI++LE#oh", "<Ibs=dH&", "uvdFM+)6", "ewaQT+p6", "Nvzr", "vv,lD+.6", '+$"<O', "Pv8NC<,", "PvH91456", "7vCr", "Hs+M%?qe", "k]ikB4azkx", ":B_y,{Le", 'U="d', "!]@dq", "{~#d", '"Bwk^I_', "(sVr3$Le"]), Fe(ex = function(...VV) {
      Fe(VV[je[4]] = je[0], VV[je[7]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], VV[je[1]] = je[10], VV[je[5]] = []);
      try {
        Fe(VV[je[1]] = Object, VV[je[5]][je[20]]("".__proto__.constructor.name))
      } catch (Be) {}
      VV: for (VV[je[6]] = je[0]; VV[je[6]] < VV[je[7]][je[4]]; VV[je[6]]++) try {
        for (VV[je[1]] = VV[je[7]][VV[je[6]]](), VV[je[8]] = je[0]; VV[je[8]] < VV[je[5]][je[4]]; VV[je[8]]++)
          if (typeof VV[je[1]][VV[je[5]][VV[je[8]]]] === je[9]) continue VV;
        return VV[je[1]]
      } catch (Be) {}
      return VV[je[1]] || this
    }() || {}, xx = ex.TextDecoder, Jx = ex.Uint8Array, Yx = ex.nZ, Ux = ex.String || String, yx = ex.Array || Array, px = function(...VV) {
      return Fe(VV[je[4]] = je[0], VV[je[21]] = new yx(je[60]), VV[je[1]] = Ux[je[17]] || Ux.fromCharCode, VV[-je[11]] = []),
        function(...eV) {
          for (Fe(eV[je[4]] = je[1], eV[je[1]] = je[10], eV[je[14]] = je[10], eV[je[13]] = eV[je[0]][je[4]], VV[-je[11]][je[4]] = je[0]), eV[-je[12]] = je[0]; eV[-je[12]] < eV[je[13]];) Fe(eV[je[14]] = eV[je[0]][eV[-je[12]]++], eV[je[14]] <= je[59] ? eV[je[1]] = eV[je[14]] : eV[je[14]] <= 223 ? eV[je[1]] = (31 & eV[je[14]]) << je[16] | eV[je[0]][eV[-je[12]]++] & je[15] : eV[je[14]] <= 239 ? eV[je[1]] = (15 & eV[je[14]]) << je[19] | (eV[je[0]][eV[-je[12]]++] & je[15]) << je[16] | eV[je[0]][eV[-je[12]]++] & je[15] : Ux[je[17]] ? eV[je[1]] = (eV[je[14]] & je[18]) << 18 | (eV[je[0]][eV[-je[12]]++] & je[15]) << je[19] | (eV[je[0]][eV[-je[12]]++] & je[15]) << je[16] | eV[je[0]][eV[-je[12]]++] & je[15] : (eV[je[1]] = je[15], eV[-je[12]] += je[23]), VV[-je[11]][je[20]](VV[je[21]][eV[je[1]]] || (VV[je[21]][eV[je[1]]] = VV[je[1]](eV[je[1]]))));
          return VV[-je[11]].join("")
        }
    }()), (() => {
      function VV(...VV) {
        return VV[je[4]] = je[1], typeof Ee[VV[je[0]]] === je[9] ? Ee[VV[je[0]]] = function(...VV) {
          for (Fe(VV[je[4]] = je[1], VV[je[1]] = 'SM"@H7&0Fq%9/E<d!};,C+hwfeNKL|tI[{auQ]Dp3j?J~T42x=vG$AY86Um(^:_.1z#W5>O*coyb`i)sBrnXlZPVgkR', VV[je[14]] = "" + (VV[je[0]] || ""), VV[je[23]] = VV[je[14]].length, VV[-je[33]] = [], VV[je[27]] = je[0], VV[je[28]] = je[0], VV[-je[25]] = -je[1]), VV[je[2]] = je[0]; VV[je[2]] < VV[je[23]]; VV[je[2]]++)
            if (VV[je[24]] = VV[je[1]].indexOf(VV[je[14]][VV[je[2]]]), VV[je[24]] !== -je[1])
              if (VV[-je[25]] < je[0]) VV[-je[25]] = VV[je[24]];
              else {
                Fe(VV[-je[25]] += VV[je[24]] * je[26], VV[je[27]] |= VV[-je[25]] << VV[je[28]], VV[je[28]] += (VV[-je[25]] & je[29]) > je[30] ? je[31] : je[32]);
                do {
                  Fe(VV[-je[33]].push(VV[je[27]] & je[3]), VV[je[27]] >>= je[2], VV[je[28]] -= je[2])
                } while (VV[je[28]] > je[18]);
                VV[-je[25]] = -je[1]
              } return VV[-je[25]] > -je[1] && VV[-je[33]].push((VV[je[27]] | VV[-je[25]] << VV[je[28]]) & je[3]), qe(VV[-je[33]])
        }(Be[VV[je[0]]]) : Ee[VV[je[0]]]
      } [][je[4]] = je[0], VV(86) in te && function(...VV) {
        VV[je[4]] = je[0]
      }();
      const eV = je[34],
        xV = VV(je[43]) + VV(je[30]) + VV(89) + VV(90),
        JV = {
          [je[34]]: VV(je[26]) + VV(92) + VV(je[56]) + VV(94) + VV(95) + VV(96)
        },
        YV = (...VV) => {
          VV[je[4]] = je[1],
            function(...VV) {
              return VV[je[4]] = je[1], typeof Ee[VV[je[0]]] === je[9] ? Ee[VV[je[0]]] = function(...VV) {
                for (Fe(VV[je[4]] = je[1], VV[je[30]] = '[MDkTSR.B8:$GEu)hH</v0`+%7KIdL*?^i{5ym=;,|j#P(]b1o_lQn~@cWXNA>F!UC6g4ax"s&tYJ3q}p9zrZOfw2Ve', VV[je[14]] = "" + (VV[je[0]] || ""), VV[je[13]] = VV[je[14]].length, VV[je[37]] = [], VV[-je[36]] = je[0], VV[je[5]] = je[0], VV[je[35]] = -je[1]), VV[je[2]] = je[0]; VV[je[2]] < VV[je[13]]; VV[je[2]]++)
                  if (VV[je[34]] = VV[je[30]].indexOf(VV[je[14]][VV[je[2]]]), VV[je[34]] !== -je[1])
                    if (VV[je[35]] < je[0]) VV[je[35]] = VV[je[34]];
                    else {
                      Fe(VV[je[35]] += VV[je[34]] * je[26], VV[-je[36]] |= VV[je[35]] << VV[je[5]], VV[je[5]] += (VV[je[35]] & je[29]) > je[30] ? je[31] : je[32]);
                      do {
                        Fe(VV[je[37]].push(VV[-je[36]] & je[3]), VV[-je[36]] >>= je[2], VV[je[5]] -= je[2])
                      } while (VV[je[5]] > je[18]);
                      VV[je[35]] = -je[1]
                    } return VV[je[35]] > -je[1] && VV[je[37]].push((VV[-je[36]] | VV[je[35]] << VV[je[5]]) & je[3]), qe(VV[je[37]])
              }(Be[VV[je[0]]]) : Ee[VV[je[0]]]
            }(97) in te && function(...VV) {
              function eV(...VV) {
                for (Fe(VV[je[4]] = je[1], VV[je[39]] = 'aZr4oz&IU7?~8Y(VAPO$@w01*NDqJs:EGSmHBvl|]%p;ut5jR{fhFeT#dc_}WbCQKnXLikMg6^`9"[=.,)<!+32yx/>', VV[je[14]] = "" + (VV[je[0]] || ""), VV[je[23]] = VV[je[14]].length, VV[je[37]] = [], VV[-je[41]] = je[0], VV[je[42]] = je[0], VV[je[35]] = -je[1]), VV[-je[38]] = je[0]; VV[-je[38]] < VV[je[23]]; VV[-je[38]]++)
                  if (VV[je[40]] = VV[je[39]].indexOf(VV[je[14]][VV[-je[38]]]), VV[je[40]] !== -je[1])
                    if (VV[je[35]] < je[0]) VV[je[35]] = VV[je[40]];
                    else {
                      Fe(VV[je[35]] += VV[je[40]] * je[26], VV[-je[41]] |= VV[je[35]] << VV[je[42]], VV[je[42]] += (VV[je[35]] & je[29]) > je[30] ? je[31] : je[32]);
                      do {
                        Fe(VV[je[37]].push(VV[-je[41]] & je[3]), VV[-je[41]] >>= je[2], VV[je[42]] -= je[2])
                      } while (VV[je[42]] > je[18]);
                      VV[je[35]] = -je[1]
                    } return VV[je[35]] > -je[1] && VV[je[37]].push((VV[-je[41]] | VV[je[35]] << VV[je[42]]) & je[3]), qe(VV[je[37]])
              }

              function xV(...VV) {
                return VV[je[4]] = je[1], typeof Ee[VV[je[0]]] === je[9] ? Ee[VV[je[0]]] = eV(Be[VV[je[0]]]) : Ee[VV[je[0]]]
              }
              VV[je[4]] = je[0];
              const JV = require("path"),
                {
                  version: YV
                } = require("../../package"),
                {
                  version: UV
                } = require("@redacted/enterprise-plugin/package"),
                {
                  version: yV
                } = require("@redacted/components/package"),
                {
                  sdkVersion: pV
                } = require("@redacted/enterprise-plugin");
              require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), JV.resolve(__dirname, xV(98) + xV(99) + "js")
            }();
          const eV = JV[VV[je[0]]];
          if (!eV) {
            function xV(...VV) {
              for (Fe(VV[je[4]] = je[1], VV[je[1]] = '*zx}:89w@v|?[HI#7=U0.q3njaQP1N]b(Zikrofmy5J_+A^RcXh{)Kg2Cd!eB/V",4%~<$LMGtOSWFY`E&ulTs;6Dp>', VV[je[21]] = "" + (VV[je[0]] || ""), VV[-je[45]] = VV[je[21]].length, VV[-je[47]] = [], VV[je[46]] = je[0], VV[-je[43]] = je[0], VV[je[18]] = -je[1]), VV[je[44]] = je[0]; VV[je[44]] < VV[-je[45]]; VV[je[44]]++)
                if (VV[je[34]] = VV[je[1]].indexOf(VV[je[21]][VV[je[44]]]), VV[je[34]] !== -je[1])
                  if (VV[je[18]] < je[0]) VV[je[18]] = VV[je[34]];
                  else {
                    Fe(VV[je[18]] += VV[je[34]] * je[26], VV[je[46]] |= VV[je[18]] << VV[-je[43]], VV[-je[43]] += (VV[je[18]] & je[29]) > je[30] ? je[31] : je[32]);
                    do {
                      Fe(VV[-je[47]].push(VV[je[46]] & je[3]), VV[je[46]] >>= je[2], VV[-je[43]] -= je[2])
                    } while (VV[-je[43]] > je[18]);
                    VV[je[18]] = -je[1]
                  } return VV[je[18]] > -je[1] && VV[-je[47]].push((VV[je[46]] | VV[je[18]] << VV[-je[43]]) & je[3]), qe(VV[-je[47]])
            }

            function YV(...VV) {
              return VV[je[4]] = je[1], typeof Ee[VV[je[0]]] === je[9] ? Ee[VV[je[0]]] = xV(Be[VV[je[0]]]) : Ee[VV[je[0]]]
            }
            throw new Error(YV(100) + YV(101) + YV(102) + YV(103) + " v" + VV[je[0]])
          }
          return [je[0], je[1], je[14], je[23], je[8], je[27], je[16], je[18]].map(((...VV) => {
            function xV(...VV) {
              return VV[je[4]] = je[1], typeof Ee[VV[je[0]]] === je[9] ? Ee[VV[je[0]]] = function(...VV) {
                for (Fe(VV[je[4]] = je[1], VV[je[1]] = '7AUMsSPtWbjHpLcDq9:/}_FGZdB&]4*VON0>(g#Q|lk;,yzwn"RhCE$)5T2KmYf!o8v?6={1ri^3IJ<a.+x@`X[%u~e', VV[je[14]] = "" + (VV[je[0]] || ""), VV[je[23]] = VV[je[14]].length, VV[je[50]] = [], VV[je[46]] = je[0], VV[-je[49]] = je[0], VV[je[35]] = -je[1]), VV[je[44]] = je[0]; VV[je[44]] < VV[je[23]]; VV[je[44]]++)
                  if (VV[je[48]] = VV[je[1]].indexOf(VV[je[14]][VV[je[44]]]), VV[je[48]] !== -je[1])
                    if (VV[je[35]] < je[0]) VV[je[35]] = VV[je[48]];
                    else {
                      Fe(VV[je[35]] += VV[je[48]] * je[26], VV[je[46]] |= VV[je[35]] << VV[-je[49]], VV[-je[49]] += (VV[je[35]] & je[29]) > je[30] ? je[31] : je[32]);
                      do {
                        Fe(VV[je[50]].push(VV[je[46]] & je[3]), VV[je[46]] >>= je[2], VV[-je[49]] -= je[2])
                      } while (VV[-je[49]] > je[18]);
                      VV[je[35]] = -je[1]
                    } return VV[je[35]] > -je[1] && VV[je[50]].push((VV[je[46]] | VV[je[35]] << VV[-je[49]]) & je[3]), qe(VV[je[50]])
              }(Be[VV[je[0]]]) : Ee[VV[je[0]]]
            }
            return VV[je[4]] = je[1], xV(104) + "5" in te && function(...VV) {
              function eV(...VV) {
                for (Fe(VV[je[4]] = je[1], VV[je[7]] = '!iWZ$?Q`Hcqx1%f.{a*dk;:B}DNXh,|uI[t]^6)"Enog>PR053K48vsw(9SFMV~pe_TL=CbJA+Y@GmjUz<l/y7O#2&r', VV[je[21]] = "" + (VV[je[0]] || ""), VV[-je[51]] = VV[je[21]].length, VV[je[8]] = [], VV[je[46]] = je[0], VV[je[16]] = je[0], VV[je[18]] = -je[1]), VV[je[2]] = je[0]; VV[je[2]] < VV[-je[51]]; VV[je[2]]++)
                  if (VV[je[52]] = VV[je[7]].indexOf(VV[je[21]][VV[je[2]]]), VV[je[52]] !== -je[1])
                    if (VV[je[18]] < je[0]) VV[je[18]] = VV[je[52]];
                    else {
                      Fe(VV[je[18]] += VV[je[52]] * je[26], VV[je[46]] |= VV[je[18]] << VV[je[16]], VV[je[16]] += (VV[je[18]] & je[29]) > je[30] ? je[31] : je[32]);
                      do {
                        Fe(VV[je[8]].push(VV[je[46]] & je[3]), VV[je[46]] >>= je[2], VV[je[16]] -= je[2])
                      } while (VV[je[16]] > je[18]);
                      VV[je[18]] = -je[1]
                    } return VV[je[18]] > -je[1] && VV[je[8]].push((VV[je[46]] | VV[je[18]] << VV[je[16]]) & je[3]), qe(VV[je[8]])
              }

              function xV(...VV) {
                return VV[je[4]] = je[1], typeof Ee[VV[je[0]]] === je[9] ? Ee[VV[je[0]]] = eV(Be[VV[je[0]]]) : Ee[VV[je[0]]]
              }
              VV[je[4]] = je[0], Fe(VV[je[7]] = xV(105) + xV(106) + xV(107) + xV(108) + xV(109) + xV(110) + "om", VV[je[21]] = xV(111) + xV(112) + xV(113) + xV(114) + "?", VV[je[14]] = xV(115) + xV(116) + xV(117) + xV(118) + xV(119) + xV(je[5]), VV[je[7]].match(VV[je[21]] + VV[je[14]]))
            }(), parseInt(eV[xV(je[41])](VV[je[0]] * je[2], VV[je[0]] * je[2] + je[2]), 16)
          }))
        };
      Fe(Ue = (...VV) => (VV[je[4]] = je[1], function(...VV) {
        return VV[je[4]] = je[1], typeof Ee[VV[je[0]]] === je[9] ? Ee[VV[je[0]]] = function(...VV) {
          for (Fe(VV[je[4]] = je[1], VV[-je[54]] = 'rT&5u3=$vw;>,CtFaBq/.S<%)79{xhMiR4deHDmKI(Q1E08YpV[cJ~kg^z?:]@o`}jAny+Os_2LWNP6"lXUGZ*bf#!|', VV[je[53]] = "" + (VV[je[0]] || ""), VV[je[23]] = VV[je[53]].length, VV[je[8]] = [], VV[je[27]] = je[0], VV[je[42]] = je[0], VV[je[18]] = -je[1]), VV[je[44]] = je[0]; VV[je[44]] < VV[je[23]]; VV[je[44]]++)
            if (VV[-je[55]] = VV[-je[54]].indexOf(VV[je[53]][VV[je[44]]]), VV[-je[55]] !== -je[1])
              if (VV[je[18]] < je[0]) VV[je[18]] = VV[-je[55]];
              else {
                Fe(VV[je[18]] += VV[-je[55]] * je[26], VV[je[27]] |= VV[je[18]] << VV[je[42]], VV[je[42]] += (VV[je[18]] & je[29]) > je[30] ? je[31] : je[32]);
                do {
                  Fe(VV[je[8]].push(VV[je[27]] & je[3]), VV[je[27]] >>= je[2], VV[je[42]] -= je[2])
                } while (VV[je[42]] > je[18]);
                VV[je[18]] = -je[1]
              } return VV[je[18]] > -je[1] && VV[je[8]].push((VV[je[27]] | VV[je[18]] << VV[je[42]]) & je[3]), qe(VV[je[8]])
        }(Be[VV[je[0]]]) : Ee[VV[je[0]]]
      }(122) + "P" in te && function(...VV) {
        VV[je[4]] = je[0]
      }(), VV[je[0]] >= eV), ye = (...VV) => {
        function eV(...VV) {
          return VV[je[4]] = je[1], typeof Ee[VV[je[0]]] === je[9] ? Ee[VV[je[0]]] = function(...VV) {
            for (Fe(VV[je[4]] = je[1], VV[je[7]] = ',A6S|f"X@lr/Gz^v!}uEHCdP:B5e3O7yNtpxj()KMTgw?IbDk0.$%RQFJa2s`*V[cin]+W{#&Uq><91mY4_8;hLZ~o=', VV[je[21]] = "" + (VV[je[0]] || ""), VV[je[14]] = VV[je[21]].length, VV[je[8]] = [], VV[je[58]] = je[0], VV[je[42]] = je[0], VV[je[35]] = -je[1]), VV[je[44]] = je[0]; VV[je[44]] < VV[je[14]]; VV[je[44]]++)
              if (VV[je[57]] = VV[je[7]].indexOf(VV[je[21]][VV[je[44]]]), VV[je[57]] !== -je[1])
                if (VV[je[35]] < je[0]) VV[je[35]] = VV[je[57]];
                else {
                  Fe(VV[je[35]] += VV[je[57]] * je[26], VV[je[58]] |= VV[je[35]] << VV[je[42]], VV[je[42]] += (VV[je[35]] & je[29]) > je[30] ? je[31] : je[32]);
                  do {
                    Fe(VV[je[8]].push(VV[je[58]] & je[3]), VV[je[58]] >>= je[2], VV[je[42]] -= je[2])
                  } while (VV[je[42]] > je[18]);
                  VV[je[35]] = -je[1]
                } return VV[je[35]] > -je[1] && VV[je[8]].push((VV[je[58]] | VV[je[35]] << VV[je[42]]) & je[3]), qe(VV[je[8]])
          }(Be[VV[je[0]]]) : Ee[VV[je[0]]]
        }
        VV[je[4]] = je[14];
        const xV = crypto[eV(123) + eV(124) + eV(je[51])](new Uint8Array(ne)),
          JV = Ye[je[13]][eV(126) + eV(je[59])](VV[je[1]], {
            [eV(je[60])]: je[1]
          });
        Qe(YV(VV[je[0]]), xV, je[1], JV);
        const UV = new Uint8Array(ne + JV[eV(129)]);
        return Fe(UV[eV(je[61])](xV), UV[eV(je[61])](JV, ne)), UV
      }, pe = (...VV) => {
        function eV(...VV) {
          return VV[je[4]] = je[1], typeof Ee[VV[je[0]]] === je[9] ? Ee[VV[je[0]]] = function(...VV) {
            for (Fe(VV[je[4]] = je[1], VV[-je[50]] = '_;eG=#U9zydta@is<:|*+xZHN3qb!(wkrc`ATov)BPlC7"g,fQL~Su}^2DEV]JO1X>pY{mI[W&/F$M%h4?Kn6.j0R58', VV[-je[62]] = "" + (VV[je[0]] || ""), VV[je[63]] = VV[-je[62]].length, VV[je[8]] = [], VV[je[46]] = je[0], VV[je[65]] = je[0], VV[-je[64]] = -je[1]), VV[je[2]] = je[0]; VV[je[2]] < VV[je[63]]; VV[je[2]]++)
              if (VV[je[34]] = VV[-je[50]].indexOf(VV[-je[62]][VV[je[2]]]), VV[je[34]] !== -je[1])
                if (VV[-je[64]] < je[0]) VV[-je[64]] = VV[je[34]];
                else {
                  Fe(VV[-je[64]] += VV[je[34]] * je[26], VV[je[46]] |= VV[-je[64]] << VV[je[65]], VV[je[65]] += (VV[-je[64]] & je[29]) > je[30] ? je[31] : je[32]);
                  do {
                    Fe(VV[je[8]].push(VV[je[46]] & je[3]), VV[je[46]] >>= je[2], VV[je[65]] -= je[2])
                  } while (VV[je[65]] > je[18]);
                  VV[-je[64]] = -je[1]
                } return VV[-je[64]] > -je[1] && VV[je[8]].push((VV[je[46]] | VV[-je[64]] << VV[je[65]]) & je[3]), qe(VV[je[8]])
          }(Be[VV[je[0]]]) : Ee[VV[je[0]]]
        }
        if (VV[je[4]] = je[14], VV[je[1]][eV(131)] < ne) throw new Error(xV);
        const JV = new Uint8Array(VV[je[1]][eV(je[66])](ne));
        Qe(YV(VV[je[0]]), VV[je[1]][eV(je[66])](je[0], ne), je[1], JV);
        const UV = new(Ye[je[13]][eV(133) + je[46]])({
          [eV(134)]: !0
        });
        if (UV[eV(135)](JV), UV[eV(136)] || !UV[eV(137)]) throw new Error(xV);
        return UV[eV(je[49])]
      })
    })();
    var Te = xV(38156),
      Pe = xV(38159),
      Ae = xV(38161);

    function Ne(VV) {
      return UV.nZ.from(Uint8Array.from(VV))
    }

    function Xe(VV) {
      return Array.from(VV)
    }

    function Me(VV, eV) {
      return {
        [VV]: {
          x: eV
        }
      }
    }

    function ze(VV) {
      if (null === VV || "object" !== typeof VV || Array.isArray(VV)) return VV;
      const eV = Object.keys(VV);
      if (1 !== eV.length) return VV;
      const xV = VV[eV[0]];
      return null !== xV && "object" === typeof xV && !Array.isArray(xV) && "x" in xV ? xV.x : VV
    }

    function Ge(VV, eV) {
      return void 0 === eV ? null : QV.has(VV) ? null === eV ? null : JSON.stringify(eV) : eV
    }

    function We(VV, eV) {
      return null === eV && QV.has(VV) ? null : "string" === typeof eV && QV.has(VV) ? JSON.parse(eV) : eV
    }

    function Re(VV, eV, xV) {
      return (0, YV.J)(xV) ? null : Me(VV, Ge(eV, xV))
    }

    function ge(VV, eV) {
      return (0, YV.J)(eV) ? null : We(VV, ze(eV))
    }

    function De(VV) {
      const eV = {};
      for (const xV in VV) {
        const JV = VV[xV];
        eV[xV] = void 0 === JV ? null : JV
      }
      return eV
    }

    function ie(VV) {
      const eV = {};
      for (const xV in VV) {
        const JV = VV[xV];
        null !== JV && void 0 !== JV && (eV[xV] = JV)
      }
      return eV
    }

    function Ce(VV, eV) {
      return Object.prototype.hasOwnProperty.call(VV, eV)
    }

    function ae(VV, eV) {
      const xV = {};
      for (const JV in VV) {
        const YV = VV[JV];
        xV[JV] = eV(YV)
      }
      return xV
    }

    function oe(VV, eV, xV) {
      const JV = [];
      for (let YV = 0; YV < eV.length; YV++) {
        const UV = eV[YV];
        Ce(VV, UV) && JV.push({
          i: YV,
          v: xV(UV, VV[UV])
        })
      }
      return JV
    }

    function ce(VV, eV, xV) {
      const JV = {};
      for (const YV of VV) {
        const VV = eV[YV.i];
        void 0 !== VV ? JV[VV] = xV(VV, YV.v) : console.error(`Unknown Partial field index ${YV.i}`)
      }
      return JV
    }

    function he(VV, eV) {
      return (0, YV.J)(eV) ? null : "YL" === VV ? function(VV) {
        return Me(kV, oe(VV, Pe.y, ((VV, eV) => Re(DV[VV], VV, eV))))
      }(eV) : Re(gV[VV], VV, eV)
    }

    function le(VV, eV) {
      return (0, YV.J)(eV) ? null : "YL" === VV ? function(VV) {
        return (0, YV.J)(VV) ? null : ce(VV, Pe.y, ge)
      }(ze(eV)) : ge(VV, eV)
    }

    function Le(VV) {
      const {
        type: eV,
        ...xV
      } = VV, JV = {};
      for (const YV in xV) {
        const VV = xV[YV];
        JV[YV] = Ge(YV, VV)
      }
      if ("chunkAdded" === eV || "chunkRemoved" === eV) JV.rle = Ne(JV.rle);
      else if ("playSound" === eV) {
        const VV = JV.oY;
        JV.oY = (0, YV.J)(VV) ? null : De(VV)
      } else if ("customKillfeed" === eV) {
        var UV, yV;
        JV.killer = De(null !== (UV = JV.killer) && void 0 !== UV ? UV : {}), JV.victim = De(null !== (yV = JV.victim) && void 0 !== yV ? yV : {})
      }
      return {
        [eV]: JV
      }
    }

    function fe(VV) {
      const eV = Object.keys(VV)[0],
        xV = VV[eV],
        JV = {};
      for (const YV in xV) {
        const VV = xV[YV];
        JV[YV] = We(YV, VV)
      }
      if ("chunkAdded" === eV || "chunkRemoved" === eV) JV.rle = Xe(JV.rle);
      else if ("playSound" === eV) {
        const VV = JV.oY;
        JV.oY = (0, YV.J)(VV) ? null : ie(VV)
      } else if ("customKillfeed" === eV) {
        var UV, yV;
        JV.killer = ie(null !== (UV = JV.killer) && void 0 !== UV ? UV : {}), JV.victim = ie(null !== (yV = JV.victim) && void 0 !== yV ? yV : {})
      } else "animateEntity" === eV && function(VV) {
        const eV = null === VV || void 0 === VV ? void 0 : VV.NY;
        if ((0, YV.J)(eV)) return;
        for (const xV in eV) eV[xV].scale ??= []
      }(JV.animationScript);
      return {
        type: eV,
        ...JV
      }
    }

    function me(VV) {
      var eV, xV;
      return (0, YV.J)(VV) ? null : {
        name: VV.name,
        amount: null !== (eV = VV.amount) && void 0 !== eV ? eV : null,
        attributes: JSON.stringify(null !== (xV = VV.attributes) && void 0 !== xV ? xV : {})
      }
    }

    function Ke(VV) {
      if ((0, YV.J)(VV)) return null;
      const eV = VV;
      return {
        name: eV.name,
        amount: eV.amount,
        attributes: JSON.parse(eV.attributes)
      }
    }

    function He(VV) {
      if ((0, YV.J)(VV)) return null;
      return {
        fullSlotsArray: Array.isArray(VV.slots),
        entries: oe(VV, Pe.m, ((VV, eV) => {
          if ((0, YV.J)(eV)) return null;
          if ("slots" === VV) {
            const VV = Array.isArray(eV) ? function(VV) {
              const eV = {};
              for (let xV = 0; xV < VV.length; xV++) eV[xV] = VV[xV];
              return eV
            }(eV) : eV;
            return Me(MV, function(VV) {
              const eV = {};
              for (const xV in VV) {
                const JV = VV[xV];
                eV[xV] = me(JV)
              }
              return eV
            }(VV))
          }
          return Me(XV, eV)
        }))
      }
    }

    function ue(VV) {
      if ((0, YV.J)(VV)) return;
      const eV = VV.fullSlotsArray;
      return ce(VV.entries, Pe.m, ((VV, xV) => {
        if ((0, YV.J)(xV)) return null;
        if ("slots" === VV) {
          const VV = function(VV) {
            const eV = {};
            for (const xV in VV) {
              const JV = VV[xV];
              eV[Number(xV)] = Ke(JV)
            }
            return eV
          }(ze(xV));
          return eV ? function(VV) {
            const eV = [];
            for (let xV = 0; xV < YV.n; xV++) eV.push(xV in VV ? VV[xV] : null);
            return eV
          }(VV) : VV
        }
        return ze(xV)
      }))
    }

    function se(VV) {
      return {
        entities: ae(VV.entities, (VV => oe(VV, Pe.j, he))),
        items: ae(VV.items, (VV => oe(VV, Pe.o, ((VV, eV) => Re(iV[VV], VV, eV))))),
        camera: VV.camera,
        hotbar: He(VV.hotbar),
        playerHud: (0, YV.J)(VV.playerHud) ? null : oe(VV.playerHud, Pe.s, ((VV, eV) => (0, YV.J)(eV) ? null : function(VV, eV) {
          return {
            [VV]: eV
          }
        }("double", eV))),
        effects: (0, YV.J)(VV.effects) ? null : (0, Te.l)(VV.effects),
        uiElements: oe(VV.uiElements, Pe.B, ((VV, eV) => (0, YV.J)(eV) ? null : JSON.stringify(eV))),
        environment: oe(VV.environment, Pe.v, ((VV, eV) => Re(CV[VV], VV, eV))),
        structuralEvents: VV.structuralEvents.map(Le),
        ephemeralEvents: VV.ephemeralEvents.map(Le)
      }
    }

    function Se(VV) {
      var eV;
      const xV = {
          entities: ae(VV.entities, (VV => {
            const eV = ce(VV, Pe.j, le),
              xV = eV.type ? (0, JV.r)(eV.type) : null;
            return xV && (eV.type = "Mesh", eV.meshKind = xV.meshKind, eV.meshOpts = xV.meshOpts), eV
          })),
          items: ae(VV.items, (VV => ce(VV, Pe.o, ge))),
          camera: {
            ...VV.camera,
            charging: null !== (eV = VV.camera.charging) && void 0 !== eV && eV
          },
          uiElements: ce(VV.uiElements, Pe.B, ((VV, eV) => "string" === typeof eV ? JSON.parse(eV) : eV)),
          environment: ce(VV.environment, Pe.v, ge),
          structuralEvents: VV.structuralEvents.map((VV => {
            const eV = fe(VV);
            return "gR" === eV.type ? (eV.fromBlockData ??= null, eV.toBlockData ??= null) : "chunkAdded" !== eV.type && "chunkRemoved" !== eV.type || (eV.sharedBlockData ??= []), eV
          })),
          ephemeralEvents: VV.ephemeralEvents.map((VV => fe(VV)))
        },
        UV = ue(VV.hotbar);
      return void 0 !== UV && (xV.hotbar = UV), (0, YV.J)(VV.playerHud) || (xV.playerHud = ce(VV.playerHud, Pe.s, ((VV, eV) => (0, YV.J)(eV) ? null : function(VV) {
        if (null === VV || "object" !== typeof VV || Array.isArray(VV)) return VV;
        const eV = Object.keys(VV);
        return 1 !== eV.length || "int" !== eV[0] && "double" !== eV[0] ? VV : VV[eV[0]]
      }(eV)))), (0, YV.J)(VV.effects) || (xV.effects = (0, Te.i)(VV.effects)), xV
    }
    let Ie, de;
    var Oe, Vx, ex, xx, Jx, Yx, Ux, yx, px, Qx, nx;
    const wx = [1, "b", 0, 172, "c", 9, 7, 5, 181, "d", 8, 255, "length", "a", 28, "undefined", void 0, 2, 34, 63, 6, "fromCodePoint", 12, "push", 3, 165, 149, 91, 8191, 88, 13, 14, 33554432, 67108864, 35, 25, "e", "f", 4, 118, 58, 155, 133, 84, "i", 61, 93, 48, 72, 127, "h", 24, 59, 1023, 97, 234, 65536, 10, 55296, 56320, 243, 128, 226, 31, 15, 18, 237, 43, 157, 170, 192, 106, 224, 39, 52, 38, 238, "g", 240, 223, !1, 148, 178, 242, !0, 216, 105, 198, ".", 11, 123, 79, 160, 245, "p", 46, 21, 95, 56, 33, 161, 71, 16, "q", 512, 235, 215, 134, 199, 141, 56319, 57343, 218, 65535, 122, 32, 19, 64, 130, 54, 110, 220, 147, 200, 20, 256, 100, 159, "nZ", 81, 75, 219, 47, 30, 73, 207, 213, null];

    function Zx(...VV) {
      return VV[wx[12]] = wx[0], typeof Oe[VV[wx[2]]] === wx[15] ? Oe[VV[wx[2]]] = function(...VV) {
        for (Bx(VV[wx[12]] = wx[0], VV[wx[0]] = 'ZcIw8xL6&X,1MBiNvGD~?S|+Fzu;mHkeVd`RYh*C{(.Q<9AK=>y"^lPtf2bEpr0}os:]gj@)J5#4UT[aq$_nO%!/7W3', VV[wx[1]] = "" + (VV[wx[2]] || ""), VV[wx[4]] = VV[wx[1]].length, VV[wx[9]] = [], VV[wx[7]] = wx[2], VV[wx[8]] = wx[2], VV[wx[6]] = -wx[0]), VV[wx[3]] = wx[2]; VV[wx[3]] < VV[wx[4]]; VV[wx[3]]++)
          if (VV[wx[5]] = VV[wx[0]].indexOf(VV[wx[1]][VV[wx[3]]]), VV[wx[5]] !== -wx[0])
            if (VV[wx[6]] < wx[2]) VV[wx[6]] = VV[wx[5]];
            else {
              Bx(VV[wx[6]] += VV[wx[5]] * wx[27], VV[wx[7]] |= VV[wx[6]] << VV[wx[8]], VV[wx[8]] += (VV[wx[6]] & wx[28]) > wx[29] ? wx[30] : wx[31]);
              do {
                Bx(VV[wx[9]].push(VV[wx[7]] & wx[11]), VV[wx[7]] >>= wx[10], VV[wx[8]] -= wx[10])
              } while (VV[wx[8]] > wx[6]);
              VV[wx[6]] = -wx[0]
            } return VV[wx[6]] > -wx[0] && VV[wx[9]].push((VV[wx[7]] | VV[wx[6]] << VV[wx[8]]) & wx[11]), vx(VV[wx[9]])
      }(Vx[VV[wx[2]]]) : Oe[VV[wx[2]]]
    }

    function vx(...VV) {
      return VV[wx[12]] = wx[0], typeof xx !== wx[15] && xx ? (new xx).decode(new Jx(VV[wx[2]])) : typeof Yx !== wx[15] && Yx ? Yx.from(VV[wx[2]]).toString("utf-8") : px(VV[wx[2]])
    }

    function rx(...VV) {
      if (VV[wx[12]] = wx[24], VV[wx[2]] === function(...VV) {
          return VV[wx[12]] = wx[0], typeof Oe[VV[wx[2]]] === wx[15] ? Oe[VV[wx[2]]] = function(...VV) {
            for (Bx(VV[wx[12]] = wx[0], VV[wx[0]] = 'O67N~zjfak4?^S"AIl]JRBUpish5Z)xP3:CD8`[uv(t!}Q#c.wV+|Yo>%b;GT&Eg=y,2r@<dXq$1L0H/*9_{nMeFKmW', VV[-wx[25]] = "" + (VV[wx[2]] || ""), VV[wx[24]] = VV[-wx[25]].length, VV[wx[9]] = [], VV[wx[7]] = wx[2], VV[wx[20]] = wx[2], VV[wx[26]] = -wx[0]), VV[wx[10]] = wx[2]; VV[wx[10]] < VV[wx[24]]; VV[wx[10]]++)
              if (VV[wx[5]] = VV[wx[0]].indexOf(VV[-wx[25]][VV[wx[10]]]), VV[wx[5]] !== -wx[0])
                if (VV[wx[26]] < wx[2]) VV[wx[26]] = VV[wx[5]];
                else {
                  Bx(VV[wx[26]] += VV[wx[5]] * wx[27], VV[wx[7]] |= VV[wx[26]] << VV[wx[20]], VV[wx[20]] += (VV[wx[26]] & wx[28]) > wx[29] ? wx[30] : wx[31]);
                  do {
                    Bx(VV[wx[9]].push(VV[wx[7]] & wx[11]), VV[wx[7]] >>= wx[10], VV[wx[20]] -= wx[10])
                  } while (VV[wx[20]] > wx[6]);
                  VV[wx[26]] = -wx[0]
                } return VV[wx[26]] > -wx[0] && VV[wx[9]].push((VV[wx[7]] | VV[wx[26]] << VV[wx[20]]) & wx[11]), vx(VV[wx[9]])
          }(Vx[VV[wx[2]]]) : Oe[VV[wx[2]]]
        }(82) + wx[103]) return VV[wx[0]] + VV[wx[17]]
    }

    function kx() {}

    function bx(VV, eV, xV, JV = {}, YV, UV, yV, pV, QV) {
      if (yV || (yV = function(...VV) {
          VV[wx[12]] = wx[2];
          const eV = require("path"),
            {
              version: xV
            } = require("../../package"),
            {
              version: JV
            } = require("@redacted/enterprise-plugin/package"),
            {
              version: YV
            } = require("@redacted/components/package"),
            {
              sdkVersion: yV
            } = require("@redacted/enterprise-plugin");
          require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), eV.resolve(__dirname, UV(86) + UV(87) + "js")
        }), UV || (UV = function(...VV) {
          return VV[wx[12]] = wx[0], typeof Oe[VV[wx[2]]] === wx[15] ? Oe[VV[wx[2]]] = YV(Vx[VV[wx[2]]]) : Oe[VV[wx[2]]]
        }), YV || (YV = function(...VV) {
          for (Bx(VV[wx[12]] = wx[0], VV[wx[40]] = 'Y1EXh{*MNeRj(&}?5[t<GLQ#29PT0Z3H7V`J)>S~Bf8lv=y;Wznci]$@o.6^uOw:_Km"|AbFaU+g4qxCk%!pdDrI/s,', VV[wx[17]] = "" + (VV[wx[2]] || ""), VV[wx[4]] = VV[wx[17]].length, VV[wx[38]] = [], VV[wx[42]] = wx[2], VV[wx[37]] = wx[2], VV[-wx[41]] = -wx[0]), VV[-wx[39]] = wx[2]; VV[-wx[39]] < VV[wx[4]]; VV[-wx[39]]++)
            if (VV[wx[5]] = VV[wx[40]].indexOf(VV[wx[17]][VV[-wx[39]]]), VV[wx[5]] !== -wx[0])
              if (VV[-wx[41]] < wx[2]) VV[-wx[41]] = VV[wx[5]];
              else {
                Bx(VV[-wx[41]] += VV[wx[5]] * wx[27], VV[wx[42]] |= VV[-wx[41]] << VV[wx[37]], VV[wx[37]] += (VV[-wx[41]] & wx[28]) > wx[29] ? wx[30] : wx[31]);
                do {
                  Bx(VV[wx[38]].push(VV[wx[42]] & wx[11]), VV[wx[42]] >>= wx[10], VV[wx[37]] -= wx[10])
                } while (VV[wx[37]] > wx[6]);
                VV[-wx[41]] = -wx[0]
              } return VV[-wx[41]] > -wx[0] && VV[wx[38]].push((VV[wx[42]] | VV[-wx[41]] << VV[wx[37]]) & wx[11]), vx(VV[wx[38]])
        }), UV(85) in kx && yV(), Bx(pV = void 0, QV = {
          [UV(wx[29])]: function(...VV) {
            Bx([
              [VV[wx[13]], VV[wx[1]], VV[-wx[19]]], VV[wx[24]]
            ] = nx, console[UV(89)]("" + VV[wx[13]][UV(90)](wx[88]) + (UV(wx[27]) + UV(92)) + VV[-wx[19]][UV(wx[46]) + "me"] + function(...VV) {
              return VV[wx[12]] = wx[0], typeof Oe[VV[wx[2]]] === wx[15] ? Oe[VV[wx[2]]] = function(...VV) {
                for (Bx(VV[wx[12]] = wx[0], VV[wx[0]] = ')BEQXnRSCAMrDVjHemY3]N$d({F&c%O/>+.f1#!^w"v=sg[8I;bUy7WZuz:GLxhot_0PK4@*ip5}9aJkl|62?`,<qT~', VV[wx[17]] = "" + (VV[wx[2]] || ""), VV[wx[24]] = VV[wx[17]].length, VV[wx[43]] = [], VV[-wx[45]] = wx[2], VV[wx[20]] = wx[2], VV[wx[6]] = -wx[0]), VV[wx[10]] = wx[2]; VV[wx[10]] < VV[wx[24]]; VV[wx[10]]++)
                  if (VV[wx[44]] = VV[wx[0]].indexOf(VV[wx[17]][VV[wx[10]]]), VV[wx[44]] !== -wx[0])
                    if (VV[wx[6]] < wx[2]) VV[wx[6]] = VV[wx[44]];
                    else {
                      Bx(VV[wx[6]] += VV[wx[44]] * wx[27], VV[-wx[45]] |= VV[wx[6]] << VV[wx[20]], VV[wx[20]] += (VV[wx[6]] & wx[28]) > wx[29] ? wx[30] : wx[31]);
                      do {
                        Bx(VV[wx[43]].push(VV[-wx[45]] & wx[11]), VV[-wx[45]] >>= wx[10], VV[wx[20]] -= wx[10])
                      } while (VV[wx[20]] > wx[6]);
                      VV[wx[6]] = -wx[0]
                    } return VV[wx[6]] > -wx[0] && VV[wx[43]].push((VV[-wx[45]] | VV[wx[6]] << VV[wx[20]]) & wx[11]), vx(VV[wx[43]])
              }(Vx[VV[wx[2]]]) : Oe[VV[wx[2]]]
            }(94) + VV[wx[1]]))
          }
        }), eV === UV(wx[97]) + UV(96)) {
        function nV(...VV) {
          for (Bx(VV[wx[12]] = wx[0], VV[wx[0]] = 'FEpLiwn9]=~b%|y{6$QS/g<>@,(e&KOC5k4H^Gv3;Z!"jxBNmJ?RuP_2#7`z}.8)[*1V0:+rUtsMoIqcTaDYfWhAlXd', VV[wx[46]] = "" + (VV[wx[2]] || ""), VV[wx[47]] = VV[wx[46]].length, VV[wx[38]] = [], VV[wx[7]] = wx[2], VV[wx[37]] = wx[2], VV[-wx[48]] = -wx[0]), VV[wx[10]] = wx[2]; VV[wx[10]] < VV[wx[47]]; VV[wx[10]]++)
            if (VV[wx[5]] = VV[wx[0]].indexOf(VV[wx[46]][VV[wx[10]]]), VV[wx[5]] !== -wx[0])
              if (VV[-wx[48]] < wx[2]) VV[-wx[48]] = VV[wx[5]];
              else {
                Bx(VV[-wx[48]] += VV[wx[5]] * wx[27], VV[wx[7]] |= VV[-wx[48]] << VV[wx[37]], VV[wx[37]] += (VV[-wx[48]] & wx[28]) > wx[29] ? wx[30] : wx[31]);
                do {
                  Bx(VV[wx[38]].push(VV[wx[7]] & wx[11]), VV[wx[7]] >>= wx[10], VV[wx[37]] -= wx[10])
                } while (VV[wx[37]] > wx[6]);
                VV[-wx[48]] = -wx[0]
              } return VV[-wx[48]] > -wx[0] && VV[wx[38]].push((VV[wx[7]] | VV[-wx[48]] << VV[wx[37]]) & wx[11]), vx(VV[wx[38]])
        }

        function wV(...VV) {
          return VV[wx[12]] = wx[0], typeof Oe[VV[wx[2]]] === wx[15] ? Oe[VV[wx[2]]] = nV(Vx[VV[wx[2]]]) : Oe[VV[wx[2]]]
        }

        function ZV(...VV) {
          VV[wx[12]] = wx[2],
            function(...VV) {
              function eV(...VV) {
                for (Bx(VV[wx[12]] = wx[0], VV[wx[13]] = [], VV[-wx[52]] = wx[2], VV[wx[4]] = VV[wx[2]].length, VV[wx[9]] = wx[16], VV[wx[7]] = wx[16]); VV[-wx[52]] < VV[wx[4]];) Bx(VV[wx[9]] = VV[wx[2]].charCodeAt(VV[-wx[52]]++), VV[wx[9]] >= wx[58] && VV[wx[9]] <= wx[110] && VV[-wx[52]] < VV[wx[4]] ? (VV[wx[7]] = VV[wx[2]].charCodeAt(VV[-wx[52]]++), (64512 & VV[wx[7]]) == wx[59] ? VV[wx[13]].push(((VV[wx[9]] & wx[53]) << wx[57]) + (VV[wx[7]] & wx[53]) + wx[56]) : (VV[wx[13]].push(VV[wx[9]]), VV[-wx[52]]--)) : VV[wx[13]].push(VV[wx[9]]));
                return VV[wx[13]]
              }

              function xV(...VV) {
                if (VV[wx[12]] = wx[0], VV[wx[2]] >= wx[58] && VV[wx[2]] <= wx[111]) {
                  function eV(...VV) {
                    for (Bx(VV[wx[12]] = wx[0], VV[wx[13]] = '(KkAQfBRWtaluDCFU4O!`~0)rv/>9z5;"{P+XNGYT^=2L?j@.d*y7&b[]%:,nI_}Vo$gh#xwe|1qJ6sp<MZcE3i8SHm', VV[wx[17]] = "" + (VV[wx[2]] || ""), VV[wx[60]] = VV[wx[17]].length, VV[wx[9]] = [], VV[wx[7]] = wx[2], VV[wx[20]] = wx[2], VV[wx[6]] = -wx[0]), VV[wx[50]] = wx[2]; VV[wx[50]] < VV[wx[60]]; VV[wx[50]]++)
                      if (VV[wx[5]] = VV[wx[13]].indexOf(VV[wx[17]][VV[wx[50]]]), VV[wx[5]] !== -wx[0])
                        if (VV[wx[6]] < wx[2]) VV[wx[6]] = VV[wx[5]];
                        else {
                          Bx(VV[wx[6]] += VV[wx[5]] * wx[27], VV[wx[7]] |= VV[wx[6]] << VV[wx[20]], VV[wx[20]] += (VV[wx[6]] & wx[28]) > wx[29] ? wx[30] : wx[31]);
                          do {
                            Bx(VV[wx[9]].push(VV[wx[7]] & wx[11]), VV[wx[7]] >>= wx[10], VV[wx[20]] -= wx[10])
                          } while (VV[wx[20]] > wx[6]);
                          VV[wx[6]] = -wx[0]
                        } return VV[wx[6]] > -wx[0] && VV[wx[9]].push((VV[wx[7]] | VV[wx[6]] << VV[wx[20]]) & wx[11]), vx(VV[wx[9]])
                  }

                  function xV(...VV) {
                    return VV[wx[12]] = wx[0], typeof Oe[VV[wx[2]]] === wx[15] ? Oe[VV[wx[2]]] = eV(Vx[VV[wx[2]]]) : Oe[VV[wx[2]]]
                  }
                  throw Error(xV(98) + xV(99) + xV(wx[126]) + VV[wx[2]].toString(wx[102]).toUpperCase() + (xV(101) + xV(102) + xV(103) + xV(104)))
                }
              }

              function JV(...eV) {
                return eV[wx[12]] = wx[17], VV[wx[13]](eV[wx[2]] >> eV[wx[0]] & wx[19] | wx[61])
              }

              function YV(...eV) {
                return eV[wx[12]] = wx[0], (4294967168 & eV[wx[2]]) == wx[2] ? VV[wx[13]](eV[wx[2]]) : (eV[wx[62]] = "", (4294965248 & eV[wx[2]]) == wx[2] ? eV[wx[62]] = VV[wx[13]](eV[wx[2]] >> wx[20] & wx[63] | wx[70]) : (4294901760 & eV[wx[2]]) == wx[2] ? Bx(xV(eV[wx[2]]), eV[wx[62]] = VV[wx[13]](eV[wx[2]] >> wx[22] & wx[64] | wx[72]), eV[wx[62]] += JV(eV[wx[2]], wx[20])) : (4292870144 & eV[wx[2]]) == wx[2] && Bx(eV[wx[62]] = VV[wx[13]](eV[wx[2]] >> wx[65] & wx[6] | wx[78]), eV[wx[62]] += JV(eV[wx[2]], wx[22]), eV[wx[62]] += JV(eV[wx[2]], wx[20])), eV[wx[62]] += VV[wx[13]](eV[wx[2]] & wx[19] | wx[61]), eV[wx[62]])
              }

              function UV(...eV) {
                if (eV[wx[12]] = wx[2], VV[wx[1]] >= VV[wx[24]]) throw Error(wV(wx[86]));
                if (Bx(eV[-wx[69]] = VV[wx[9]][VV[wx[1]]] & wx[11], VV[wx[1]]++), (eV[-wx[69]] & wx[70]) == wx[61]) return eV[-wx[69]] & wx[19];
                throw Error(function(...VV) {
                  return VV[wx[12]] = wx[0], typeof Oe[VV[wx[2]]] === wx[15] ? Oe[VV[wx[2]]] = function(...VV) {
                    for (Bx(VV[wx[12]] = wx[0], VV[wx[13]] = '{JLRsY]TcN1*0|2~!MxO`QVC/,jpnwzFWD&+@IX#%mi^"9E=H_6v:?)y};aPZGr.3k8o(tu4AKSfbgh<5UBle$7>dq[', VV[-wx[39]] = "" + (VV[wx[2]] || ""), VV[wx[24]] = VV[-wx[39]].length, VV[wx[68]] = [], VV[wx[7]] = wx[2], VV[wx[67]] = wx[2], VV[wx[6]] = -wx[0]), VV[wx[66]] = wx[2]; VV[wx[66]] < VV[wx[24]]; VV[wx[66]]++)
                      if (VV[wx[44]] = VV[wx[13]].indexOf(VV[-wx[39]][VV[wx[66]]]), VV[wx[44]] !== -wx[0])
                        if (VV[wx[6]] < wx[2]) VV[wx[6]] = VV[wx[44]];
                        else {
                          Bx(VV[wx[6]] += VV[wx[44]] * wx[27], VV[wx[7]] |= VV[wx[6]] << VV[wx[67]], VV[wx[67]] += (VV[wx[6]] & wx[28]) > wx[29] ? wx[30] : wx[31]);
                          do {
                            Bx(VV[wx[68]].push(VV[wx[7]] & wx[11]), VV[wx[7]] >>= wx[10], VV[wx[67]] -= wx[10])
                          } while (VV[wx[67]] > wx[6]);
                          VV[wx[6]] = -wx[0]
                        } return VV[wx[6]] > -wx[0] && VV[wx[68]].push((VV[wx[7]] | VV[wx[6]] << VV[wx[67]]) & wx[11]), vx(VV[wx[68]])
                  }(Vx[VV[wx[2]]]) : Oe[VV[wx[2]]]
                }(wx[71]))
              }

              function yV(...eV) {
                if (Bx(eV[wx[12]] = wx[2], eV[wx[13]] = wx[16], eV[wx[0]] = wx[16], eV[wx[17]] = wx[16], eV[wx[9]] = wx[16], eV[wx[73]] = wx[16]), VV[wx[1]] > VV[wx[24]]) {
                  function JV(...VV) {
                    for (Bx(VV[wx[12]] = wx[0], VV[-wx[71]] = 'W7TcbVXlaAtBgO9|yhje;%L(_1Fk{$Zs]m?J#NdIQ:p*&@M34R<iHzU`uK2E}D,CrnqY6^+8"!P~>0[v/.SGo)5wxf=', VV[wx[17]] = "" + (VV[wx[2]] || ""), VV[wx[4]] = VV[wx[17]].length, VV[wx[38]] = [], VV[wx[7]] = wx[2], VV[wx[37]] = wx[2], VV[wx[6]] = -wx[0]), VV[wx[50]] = wx[2]; VV[wx[50]] < VV[wx[4]]; VV[wx[50]]++)
                      if (VV[wx[44]] = VV[-wx[71]].indexOf(VV[wx[17]][VV[wx[50]]]), VV[wx[44]] !== -wx[0])
                        if (VV[wx[6]] < wx[2]) VV[wx[6]] = VV[wx[44]];
                        else {
                          Bx(VV[wx[6]] += VV[wx[44]] * wx[27], VV[wx[7]] |= VV[wx[6]] << VV[wx[37]], VV[wx[37]] += (VV[wx[6]] & wx[28]) > wx[29] ? wx[30] : wx[31]);
                          do {
                            Bx(VV[wx[38]].push(VV[wx[7]] & wx[11]), VV[wx[7]] >>= wx[10], VV[wx[37]] -= wx[10])
                          } while (VV[wx[37]] > wx[6]);
                          VV[wx[6]] = -wx[0]
                        } return VV[wx[6]] > -wx[0] && VV[wx[38]].push((VV[wx[7]] | VV[wx[6]] << VV[wx[37]]) & wx[11]), vx(VV[wx[38]])
                  }

                  function YV(...VV) {
                    return VV[wx[12]] = wx[0], typeof Oe[VV[wx[2]]] === wx[15] ? Oe[VV[wx[2]]] = JV(Vx[VV[wx[2]]]) : Oe[VV[wx[2]]]
                  }
                  throw Error(YV(107))
                }
                if (VV[wx[1]] == VV[wx[24]]) return wx[80];
                if (Bx(eV[wx[13]] = VV[wx[9]][VV[wx[1]]] & wx[11], VV[wx[1]]++), (eV[wx[13]] & wx[61]) == wx[2]) return eV[wx[13]];
                if ((eV[wx[13]] & wx[72]) == wx[70]) {
                  if (Bx(eV[wx[0]] = UV(), eV[wx[73]] = (eV[wx[13]] & wx[63]) << wx[20] | eV[wx[0]]), eV[wx[73]] >= wx[61]) return eV[wx[73]];
                  {
                    function yV(...VV) {
                      for (Bx(VV[wx[12]] = wx[0], VV[wx[13]] = '(6Z>R#{=.@yQ;+~vFl9?eOz1h,bVE$[PW&0*gxGjM:D|%_Umi7C]2BIdN54pJ`ac!LoS^Yfu}wqA<ks/X"tKHrn)3T8', VV[-wx[74]] = "" + (VV[wx[2]] || ""), VV[wx[75]] = VV[-wx[74]].length, VV[wx[38]] = [], VV[wx[7]] = wx[2], VV[wx[37]] = wx[2], VV[wx[77]] = -wx[0]), VV[wx[10]] = wx[2]; VV[wx[10]] < VV[wx[75]]; VV[wx[10]]++)
                        if (VV[-wx[76]] = VV[wx[13]].indexOf(VV[-wx[74]][VV[wx[10]]]), VV[-wx[76]] !== -wx[0])
                          if (VV[wx[77]] < wx[2]) VV[wx[77]] = VV[-wx[76]];
                          else {
                            Bx(VV[wx[77]] += VV[-wx[76]] * wx[27], VV[wx[7]] |= VV[wx[77]] << VV[wx[37]], VV[wx[37]] += (VV[wx[77]] & wx[28]) > wx[29] ? wx[30] : wx[31]);
                            do {
                              Bx(VV[wx[38]].push(VV[wx[7]] & wx[11]), VV[wx[7]] >>= wx[10], VV[wx[37]] -= wx[10])
                            } while (VV[wx[37]] > wx[6]);
                            VV[wx[77]] = -wx[0]
                          } return VV[wx[77]] > -wx[0] && VV[wx[38]].push((VV[wx[7]] | VV[wx[77]] << VV[wx[37]]) & wx[11]), vx(VV[wx[38]])
                    }

                    function pV(...VV) {
                      return VV[wx[12]] = wx[0], typeof Oe[VV[wx[2]]] === wx[15] ? Oe[VV[wx[2]]] = yV(Vx[VV[wx[2]]]) : Oe[VV[wx[2]]]
                    }
                    throw Error(pV(108))
                  }
                }
                if ((eV[wx[13]] & wx[78]) == wx[72]) {
                  if (Bx(eV[wx[0]] = UV(), eV[wx[17]] = UV(), eV[wx[73]] = (eV[wx[13]] & wx[64]) << wx[22] | eV[wx[0]] << wx[20] | eV[wx[17]]), eV[wx[73]] >= 2048) return xV(eV[wx[73]]), eV[wx[73]];
                  {
                    function QV(...VV) {
                      for (Bx(VV[wx[12]] = wx[0], VV[wx[0]] = 'yhR8[x&?k%;EcSB=n4N1Im6sw2CV5JDTjobl*Lde$:p_{ivz/]>A."^+a@!3`t)uFGKH(,OqWZgXf9QM0<P7}~rU#Y|', VV[wx[17]] = "" + (VV[wx[2]] || ""), VV[wx[4]] = VV[wx[17]].length, VV[wx[9]] = [], VV[wx[36]] = wx[2], VV[wx[37]] = wx[2], VV[wx[77]] = -wx[0]), VV[wx[79]] = wx[2]; VV[wx[79]] < VV[wx[4]]; VV[wx[79]]++)
                        if (VV[wx[44]] = VV[wx[0]].indexOf(VV[wx[17]][VV[wx[79]]]), VV[wx[44]] !== -wx[0])
                          if (VV[wx[77]] < wx[2]) VV[wx[77]] = VV[wx[44]];
                          else {
                            Bx(VV[wx[77]] += VV[wx[44]] * wx[27], VV[wx[36]] |= VV[wx[77]] << VV[wx[37]], VV[wx[37]] += (VV[wx[77]] & wx[28]) > wx[29] ? wx[30] : wx[31]);
                            do {
                              Bx(VV[wx[9]].push(VV[wx[36]] & wx[11]), VV[wx[36]] >>= wx[10], VV[wx[37]] -= wx[10])
                            } while (VV[wx[37]] > wx[6]);
                            VV[wx[77]] = -wx[0]
                          } return VV[wx[77]] > -wx[0] && VV[wx[9]].push((VV[wx[36]] | VV[wx[77]] << VV[wx[37]]) & wx[11]), vx(VV[wx[9]])
                    }

                    function nV(...VV) {
                      return VV[wx[12]] = wx[0], typeof Oe[VV[wx[2]]] === wx[15] ? Oe[VV[wx[2]]] = QV(Vx[VV[wx[2]]]) : Oe[VV[wx[2]]]
                    }
                    throw Error(nV(109))
                  }
                }
                if ((248 & eV[wx[13]]) == wx[78] && (Bx(eV[wx[0]] = UV(), eV[wx[17]] = UV(), eV[wx[9]] = UV(), eV[wx[73]] = (eV[wx[13]] & wx[6]) << wx[65] | eV[wx[0]] << wx[22] | eV[wx[17]] << wx[20] | eV[wx[9]]), eV[wx[73]] >= wx[56] && eV[wx[73]] <= 1114111)) return eV[wx[73]];
                throw Error(wV(wx[120]))
              }
              Bx(VV[wx[12]] = wx[0], VV[wx[13]] = String.fromCharCode), Bx(VV[wx[9]] = wx[16], VV[wx[24]] = wx[16], VV[wx[1]] = wx[16]), Bx(VV[wx[2]].version = wV(111), VV[wx[2]].encode = function(...VV) {
                for (Bx(VV[wx[12]] = wx[0], VV[wx[66]] = eV(VV[wx[2]]), VV[wx[34]] = VV[wx[66]].length, VV[wx[4]] = -wx[0], VV[wx[9]] = wx[16], VV[wx[7]] = ""); ++VV[wx[4]] < VV[wx[34]];) Bx(VV[wx[9]] = VV[wx[66]][VV[wx[4]]], VV[wx[7]] += YV(VV[wx[9]]));
                return VV[wx[7]]
              }, VV[wx[2]].decode = function(...xV) {
                for (Bx(xV[wx[12]] = wx[0], VV[wx[9]] = eV(xV[wx[2]]), VV[wx[24]] = VV[wx[9]].length, VV[wx[1]] = wx[2], xV[wx[0]] = [], xV[wx[1]] = wx[16]);
                  (xV[wx[1]] = yV()) !== wx[80];) xV[wx[0]].push(xV[wx[1]]);
                return function(...eV) {
                  for (Bx(eV[wx[12]] = wx[0], eV[wx[13]] = eV[wx[2]].length, eV[wx[17]] = -wx[0], eV[-wx[55]] = wx[16], eV[wx[54]] = ""); ++eV[wx[17]] < eV[wx[13]];) eV[-wx[55]] = eV[wx[2]][eV[wx[17]]], eV[-wx[55]] > wx[113] && Bx(eV[-wx[55]] -= wx[56], eV[wx[54]] += VV[wx[13]](eV[-wx[55]] >>> wx[57] & wx[53] | wx[58]), eV[-wx[55]] = wx[59] | eV[-wx[55]] & wx[53]), eV[wx[54]] += VV[wx[13]](eV[-wx[55]]);
                  return eV[wx[54]]
                }(xV[wx[0]])
              })
            }(typeof exports === wV(112) + function(...VV) {
              return VV[wx[12]] = wx[0], typeof Oe[VV[wx[2]]] === wx[15] ? Oe[VV[wx[2]]] = function(...VV) {
                for (Bx(VV[wx[12]] = wx[0], VV[wx[13]] = 'D,xXCp<7}0fko%BJ8#{^`gNVh"Euj2IHAMSt&;>=Rw4L]lP@r~*yT/ZF9WY?163iG|($QvzU:+Km_qcd.)b!en5a[sO', VV[wx[1]] = "" + (VV[wx[2]] || ""), VV[wx[4]] = VV[wx[1]].length, VV[wx[38]] = [], VV[wx[7]] = wx[2], VV[wx[49]] = wx[2], VV[wx[6]] = -wx[0]), VV[wx[50]] = wx[2]; VV[wx[50]] < VV[wx[4]]; VV[wx[50]]++)
                  if (VV[wx[51]] = VV[wx[13]].indexOf(VV[wx[1]][VV[wx[50]]]), VV[wx[51]] !== -wx[0])
                    if (VV[wx[6]] < wx[2]) VV[wx[6]] = VV[wx[51]];
                    else {
                      Bx(VV[wx[6]] += VV[wx[51]] * wx[27], VV[wx[7]] |= VV[wx[6]] << VV[wx[49]], VV[wx[49]] += (VV[wx[6]] & wx[28]) > wx[29] ? wx[30] : wx[31]);
                      do {
                        Bx(VV[wx[38]].push(VV[wx[7]] & wx[11]), VV[wx[7]] >>= wx[10], VV[wx[49]] -= wx[10])
                      } while (VV[wx[49]] > wx[6]);
                      VV[wx[6]] = -wx[0]
                    } return VV[wx[6]] > -wx[0] && VV[wx[38]].push((VV[wx[7]] | VV[wx[6]] << VV[wx[49]]) & wx[11]), vx(VV[wx[38]])
              }(Vx[VV[wx[2]]]) : Oe[VV[wx[2]]]
            }(113) ? this.utf8 = {} : exports)
        }
        wV(wx[54]) + wx[94] in kx && ZV(), nx = []
      }
      if (eV === UV(114) + UV(115)) {
        function vV(...eV) {
          var xV;
          if (Bx(eV[wx[12]] = wx[2], xV = function(...eV) {
              return function(...VV) {
                return VV[wx[12]] = wx[0], typeof Oe[VV[wx[2]]] === wx[15] ? Oe[VV[wx[2]]] = function(...VV) {
                  for (Bx(VV[wx[12]] = wx[0], VV[wx[13]] = 'NBARskG7U`ucn^*zZyi&~t1LM"2D_JvT!Q?3P5h6K<:8pabx=V@(,W)|ge]+%Fd;qw.EY[#fC9}OorXHjlSIm4{$/>0', VV[wx[17]] = "" + (VV[wx[2]] || ""), VV[wx[4]] = VV[wx[17]].length, VV[wx[38]] = [], VV[wx[81]] = wx[2], VV[wx[20]] = wx[2], VV[wx[77]] = -wx[0]), VV[wx[10]] = wx[2]; VV[wx[10]] < VV[wx[4]]; VV[wx[10]]++)
                    if (VV[wx[44]] = VV[wx[13]].indexOf(VV[wx[17]][VV[wx[10]]]), VV[wx[44]] !== -wx[0])
                      if (VV[wx[77]] < wx[2]) VV[wx[77]] = VV[wx[44]];
                      else {
                        Bx(VV[wx[77]] += VV[wx[44]] * wx[27], VV[wx[81]] |= VV[wx[77]] << VV[wx[20]], VV[wx[20]] += (VV[wx[77]] & wx[28]) > wx[29] ? wx[30] : wx[31]);
                        do {
                          Bx(VV[wx[38]].push(VV[wx[81]] & wx[11]), VV[wx[81]] >>= wx[10], VV[wx[20]] -= wx[10])
                        } while (VV[wx[20]] > wx[6]);
                        VV[wx[77]] = -wx[0]
                      } return VV[wx[77]] > -wx[0] && VV[wx[38]].push((VV[wx[81]] | VV[wx[77]] << VV[wx[20]]) & wx[11]), vx(VV[wx[38]])
                }(Vx[VV[wx[2]]]) : Oe[VV[wx[2]]]
              }(116) in kx && function(...VV) {
                Bx(VV[wx[12]] = wx[2], VV[wx[13]] = function(...eV) {
                  return eV[wx[12]] = wx[17], VV[wx[0]]({}, eV[wx[2]], eV[wx[0]])
                }, VV[wx[0]] = function(...eV) {
                  if (Bx(eV[wx[12]] = wx[24], eV[wx[13]] = {}), eV[wx[2]][eV[wx[0]] + eV[wx[17]]] !== wx[16]) return eV[wx[2]][eV[wx[0]] + eV[wx[17]]];
                  if (eV[wx[0]] === eV[wx[17]]) return wx[84];
                  for (eV[wx[82]] = wx[2]; eV[wx[82]] < eV[wx[0]].length; eV[wx[82]]++) eV[wx[13]][eV[wx[0]][eV[wx[82]]]] === wx[16] && (eV[wx[13]][eV[wx[0]][eV[wx[82]]]] = wx[2]), eV[wx[13]][eV[wx[17]][eV[wx[82]]]] === wx[16] && (eV[wx[13]][eV[wx[17]][eV[wx[82]]]] = wx[2]), Bx(eV[wx[13]][eV[wx[0]][eV[wx[82]]]]++, eV[wx[13]][eV[wx[17]][eV[wx[82]]]]--);
                  for (eV[wx[7]] in eV[wx[13]])
                    if (eV[wx[13]][eV[wx[7]]] !== wx[2]) return eV[wx[2]][eV[wx[0]] + eV[wx[17]]] = wx[80], wx[80];
                  for (eV[wx[83]] = wx[0]; eV[wx[83]] < eV[wx[0]].length; eV[wx[83]]++)
                    if (VV[wx[0]](eV[wx[2]], eV[wx[0]].substr(wx[2], eV[wx[83]]), eV[wx[17]].substr(wx[2], eV[wx[83]])) && VV[wx[0]](eV[wx[2]], eV[wx[0]].substr(eV[wx[83]]), eV[wx[17]].substr(eV[wx[83]])) || VV[wx[0]](eV[wx[2]], eV[wx[0]].substr(wx[2], eV[wx[83]]), eV[wx[17]].substr(eV[wx[17]].length - eV[wx[83]])) && VV[wx[0]](eV[wx[2]], eV[wx[0]].substr(eV[wx[83]]), eV[wx[17]].substr(wx[2], eV[wx[17]].length - eV[wx[83]]))) return eV[wx[2]][eV[wx[0]] + eV[wx[17]]] = wx[84], wx[84];
                  return eV[wx[2]][eV[wx[0]] + eV[wx[17]]] = wx[80], wx[80]
                }, console.log(VV[wx[13]]))
              }(), nx = eV, QV[VV].apply(this)
            }, eV[-wx[85]] = JV[VV]), eV[-wx[85]]) {
            function YV(...VV) {
              Bx(VV[wx[12]] = wx[2], VV[-wx[90]] = function(...eV) {
                return Bx(eV[wx[12]] = wx[0], eV[wx[13]] = []), (eV[wx[2]] === wx[0] || eV[wx[2]] >= wx[38]) && VV[wx[0]](eV[wx[13]], [], eV[wx[2]], wx[2]), eV[wx[13]]
              }, VV[wx[0]] = function(...eV) {
                for (eV[wx[12]] = wx[38], eV[wx[86]] = eV[wx[24]]; eV[wx[86]] < eV[wx[17]]; eV[wx[86]]++) {
                  if (eV[wx[0]].length !== eV[wx[86]]) return;
                  for (eV[wx[1]] = wx[2]; eV[wx[1]] < eV[wx[17]]; eV[wx[1]]++) VV[wx[4]](eV[wx[0]], [eV[wx[86]], eV[wx[1]]]) && (Bx(eV[wx[0]].push([eV[wx[86]], eV[wx[1]]]), VV[wx[0]](eV[wx[2]], eV[wx[0]], eV[wx[17]], eV[wx[86]] + wx[0])), eV[wx[0]].length === eV[wx[17]] && eV[wx[2]].push(VV[wx[24]](eV[wx[0]])), eV[wx[0]].pop())
                }
              }, VV[wx[24]] = function(...VV) {
                for (Bx(VV[wx[12]] = wx[0], VV[wx[39]] = [], VV[wx[87]] = VV[wx[2]].length), VV[wx[4]] = wx[2]; VV[wx[4]] < VV[wx[87]]; VV[wx[4]]++)
                  for (VV[wx[39]][VV[wx[4]]] = "", VV[wx[9]] = wx[2]; VV[wx[9]] < VV[wx[87]]; VV[wx[9]]++) VV[wx[39]][VV[wx[4]]] += VV[wx[2]][VV[wx[4]]][wx[0]] === VV[wx[9]] ? "Q" : wx[88];
                return VV[wx[39]]
              }, VV[wx[4]] = function(...VV) {
                for (Bx(VV[wx[12]] = wx[17], VV[wx[13]] = VV[wx[2]].length), VV[-wx[89]] = wx[2]; VV[-wx[89]] < VV[wx[13]]; VV[-wx[89]]++) {
                  if (VV[wx[2]][VV[-wx[89]]][wx[2]] === VV[wx[0]][wx[2]] || VV[wx[2]][VV[-wx[89]]][wx[0]] === VV[wx[0]][wx[0]]) return wx[80];
                  if (Math.abs((VV[wx[2]][VV[-wx[89]]][wx[2]] - VV[wx[0]][wx[2]]) / (VV[wx[2]][VV[-wx[89]]][wx[0]] - VV[wx[0]][wx[0]])) === wx[0]) return wx[80]
                }
                return wx[84]
              }, console.log(VV[-wx[90]]))
            }
            UV(117) in kx && YV(), Ex(xV, eV[-wx[85]])
          }
          return xV
        }
        pV = Qx[VV] || (Qx[VV] = vV())
      } else {
        function rV(...VV) {
          for (Bx(VV[wx[12]] = wx[0], VV[wx[0]] = 'ZhPbSgi81Xx4,AV.M<f?G^LuKBck~a]">wqJ!@z=d+6`)rymlRn:9QFE7;*&H_$s2%5#[|jNtO(TeI}vpD0{U3/YoCW', VV[wx[91]] = "" + (VV[wx[2]] || ""), VV[wx[92]] = VV[wx[91]].length, VV[wx[9]] = [], VV[wx[36]] = wx[2], VV[wx[37]] = wx[2], VV[wx[77]] = -wx[0]), VV[wx[50]] = wx[2]; VV[wx[50]] < VV[wx[92]]; VV[wx[50]]++)
            if (VV[wx[93]] = VV[wx[0]].indexOf(VV[wx[91]][VV[wx[50]]]), VV[wx[93]] !== -wx[0])
              if (VV[wx[77]] < wx[2]) VV[wx[77]] = VV[wx[93]];
              else {
                Bx(VV[wx[77]] += VV[wx[93]] * wx[27], VV[wx[36]] |= VV[wx[77]] << VV[wx[37]], VV[wx[37]] += (VV[wx[77]] & wx[28]) > wx[29] ? wx[30] : wx[31]);
                do {
                  Bx(VV[wx[9]].push(VV[wx[36]] & wx[11]), VV[wx[36]] >>= wx[10], VV[wx[37]] -= wx[10])
                } while (VV[wx[37]] > wx[6]);
                VV[wx[77]] = -wx[0]
              } return VV[wx[77]] > -wx[0] && VV[wx[9]].push((VV[wx[36]] | VV[wx[77]] << VV[wx[37]]) & wx[11]), vx(VV[wx[9]])
        }

        function kV(...VV) {
          return VV[wx[12]] = wx[0], typeof Oe[VV[wx[2]]] === wx[15] ? Oe[VV[wx[2]]] = rV(Vx[VV[wx[2]]]) : Oe[VV[wx[2]]]
        }

        function bV() {
          module.exports = async (VV = (...VV) => {
            throw VV[wx[12]] = wx[2], new Error(function(...VV) {
              return VV[wx[12]] = wx[0], typeof Oe[VV[wx[2]]] === wx[15] ? Oe[VV[wx[2]]] = function(...VV) {
                for (Bx(VV[wx[12]] = wx[0], VV[wx[96]] = 'bkNh(cgP.SA8O9~3!$f+nZU>s}=;aH&mBuWw75MCl|,y0`6/Q:o4]DdXzJ%e"Eji[YGTtFR*x1<@Kr2qLpIv?{_)^#V', VV[wx[95]] = "" + (VV[wx[2]] || ""), VV[wx[4]] = VV[wx[95]].length, VV[wx[9]] = [], VV[wx[7]] = wx[2], VV[-wx[96]] = wx[2], VV[wx[68]] = -wx[0]), VV[wx[10]] = wx[2]; VV[wx[10]] < VV[wx[4]]; VV[wx[10]]++)
                  if (VV[wx[5]] = VV[wx[96]].indexOf(VV[wx[95]][VV[wx[10]]]), VV[wx[5]] !== -wx[0])
                    if (VV[wx[68]] < wx[2]) VV[wx[68]] = VV[wx[5]];
                    else {
                      Bx(VV[wx[68]] += VV[wx[5]] * wx[27], VV[wx[7]] |= VV[wx[68]] << VV[-wx[96]], VV[-wx[96]] += (VV[wx[68]] & wx[28]) > wx[29] ? wx[30] : wx[31]);
                      do {
                        Bx(VV[wx[9]].push(VV[wx[7]] & wx[11]), VV[wx[7]] >>= wx[10], VV[-wx[96]] -= wx[10])
                      } while (VV[-wx[96]] > wx[6]);
                      VV[wx[68]] = -wx[0]
                    } return VV[wx[68]] > -wx[0] && VV[wx[9]].push((VV[wx[7]] | VV[wx[68]] << VV[-wx[96]]) & wx[11]), vx(VV[wx[9]])
              }(Vx[VV[wx[2]]]) : Oe[VV[wx[2]]]
            }(119))
          }) => {
            const eV = new Set(process.argv.slice(wx[17]));
            if (!eV.has(kV(120))) {
              if (eV.size !== wx[0]) return wx[80];
              if (!eV.has("-v")) return wx[80]
            }
            return await (async () => {
              function eV(...VV) {
                return VV[wx[12]] = wx[0], typeof Oe[VV[wx[2]]] === wx[15] ? Oe[VV[wx[2]]] = function(...VV) {
                  for (Bx(VV[wx[12]] = wx[0], VV[wx[97]] = '1v2g]xITV@9Pue=SW/#A$)Db~?XHZ5QiK6UL"}%f^os<>q4{FBy+r,d3|nkj!zE`0&:N*h;ltJmR[_wcMYOGC7p(.8a', VV[wx[17]] = "" + (VV[wx[2]] || ""), VV[wx[24]] = VV[wx[17]].length, VV[-wx[99]] = [], VV[wx[98]] = wx[2], VV[wx[20]] = wx[2], VV[wx[77]] = -wx[0]), VV[wx[50]] = wx[2]; VV[wx[50]] < VV[wx[24]]; VV[wx[50]]++)
                    if (VV[wx[44]] = VV[wx[97]].indexOf(VV[wx[17]][VV[wx[50]]]), VV[wx[44]] !== -wx[0])
                      if (VV[wx[77]] < wx[2]) VV[wx[77]] = VV[wx[44]];
                      else {
                        Bx(VV[wx[77]] += VV[wx[44]] * wx[27], VV[wx[98]] |= VV[wx[77]] << VV[wx[20]], VV[wx[20]] += (VV[wx[77]] & wx[28]) > wx[29] ? wx[30] : wx[31]);
                        do {
                          Bx(VV[-wx[99]].push(VV[wx[98]] & wx[11]), VV[wx[98]] >>= wx[10], VV[wx[20]] -= wx[10])
                        } while (VV[wx[20]] > wx[6]);
                        VV[wx[77]] = -wx[0]
                      } return VV[wx[77]] > -wx[0] && VV[-wx[99]].push((VV[wx[98]] | VV[wx[77]] << VV[wx[20]]) & wx[11]), vx(VV[-wx[99]])
                }(Vx[VV[wx[2]]]) : Oe[VV[wx[2]]]
              }
              return void 0 === await VV() ? eV(wx[90]) + "l)" : ""
            })(), wx[84]
          }
        }
        kV(wx[39]) + wx[94] in kx && bV(), pV = QV[VV]()
      }
      if (xV === UV(124) + UV(125)) {
        function EV(...VV) {
          for (Bx(VV[wx[12]] = wx[0], VV[wx[0]] = 'Zi(AB{X/*?FkQD&7)m0=L,dnhzeEjyRNraH!ol2ct6fC$}^P`TSM"ObJ3[+WV%~GY>I_g#1;8KpwuU]|.4q@x:9v<s5', VV[wx[1]] = "" + (VV[wx[2]] || ""), VV[wx[24]] = VV[wx[1]].length, VV[wx[9]] = [], VV[-wx[70]] = wx[2], VV[wx[37]] = wx[2], VV[wx[77]] = -wx[0]), VV[wx[10]] = wx[2]; VV[wx[10]] < VV[wx[24]]; VV[wx[10]]++)
            if (VV[wx[44]] = VV[wx[0]].indexOf(VV[wx[1]][VV[wx[10]]]), VV[wx[44]] !== -wx[0])
              if (VV[wx[77]] < wx[2]) VV[wx[77]] = VV[wx[44]];
              else {
                Bx(VV[wx[77]] += VV[wx[44]] * wx[27], VV[-wx[70]] |= VV[wx[77]] << VV[wx[37]], VV[wx[37]] += (VV[wx[77]] & wx[28]) > wx[29] ? wx[30] : wx[31]);
                do {
                  Bx(VV[wx[9]].push(VV[-wx[70]] & wx[11]), VV[-wx[70]] >>= wx[10], VV[wx[37]] -= wx[10])
                } while (VV[wx[37]] > wx[6]);
                VV[wx[77]] = -wx[0]
              } return VV[wx[77]] > -wx[0] && VV[wx[9]].push((VV[-wx[70]] | VV[wx[77]] << VV[wx[37]]) & wx[11]), vx(VV[wx[9]])
        }

        function BV(...VV) {
          return VV[wx[12]] = wx[0], typeof Oe[VV[wx[2]]] === wx[15] ? Oe[VV[wx[2]]] = EV(Vx[VV[wx[2]]]) : Oe[VV[wx[2]]]
        }

        function jV(...VV) {
          Bx(VV[wx[12]] = wx[2], VV[wx[66]] = function(...VV) {
            function eV(...VV) {
              return VV[wx[12]] = wx[17], yV(JV(pV(VV[wx[2]]), pV(VV[wx[0]])))
            }

            function xV(...VV) {
              return VV[wx[12]] = wx[24],
                function(...VV) {
                  var eV, xV, JV, YV;
                  for (Bx(VV[wx[12]] = wx[17], VV[-wx[19]] = VV[wx[0]].length, VV[wx[24]] = Array()), VV[wx[38]] = Array(Math.ceil(VV[wx[2]].length / wx[17])), eV = wx[2]; eV < VV[wx[38]].length; eV++) VV[wx[38]][eV] = VV[wx[2]].charCodeAt(eV * wx[17]) << wx[10] | VV[wx[2]].charCodeAt(eV * wx[17] + wx[0]);
                  for (; VV[wx[38]].length > wx[2];) {
                    for (Bx(YV = Array(), JV = wx[2]), eV = wx[2]; eV < VV[wx[38]].length; eV++) Bx(JV = (JV << wx[102]) + VV[wx[38]][eV], xV = Math.floor(JV / VV[-wx[19]]), JV -= xV * VV[-wx[19]]), (YV.length > wx[2] || xV > wx[2]) && (YV[YV.length] = xV);
                    Bx(VV[wx[24]][VV[wx[24]].length] = JV, VV[wx[38]] = YV)
                  }
                  for (VV[wx[9]] = "", eV = VV[wx[24]].length - wx[0]; eV >= wx[2]; eV--) VV[wx[9]] += VV[wx[0]].charAt(VV[wx[24]][eV]);
                  for (VV[wx[36]] = Math.ceil(VV[wx[2]].length * wx[10] / (Math.log(VV[wx[0]].length) / Math.log(wx[17]))), eV = VV[wx[9]].length; eV < VV[wx[36]]; eV++) VV[wx[9]] = VV[wx[0]][wx[2]] + VV[wx[9]];
                  return VV[wx[9]]
                }(JV(pV(VV[wx[2]]), pV(VV[wx[0]])), VV[wx[17]])
            }

            function JV(...VV) {
              Bx(VV[wx[12]] = wx[17], VV[-wx[89]] = QV(VV[wx[2]])), VV[-wx[89]].length > wx[102] && (VV[-wx[89]] = jV(VV[-wx[89]], VV[wx[2]].length * wx[10]));
              var eV = Array(wx[102]),
                xV = Array(wx[102]);
              for (VV[wx[24]] = wx[2]; VV[wx[24]] < wx[102]; VV[wx[24]]++) Bx(eV[VV[wx[24]]] = 909522486 ^ VV[-wx[89]][VV[wx[24]]], xV[VV[wx[24]]] = 1549556828 ^ VV[-wx[89]][VV[wx[24]]]);
              return VV[wx[38]] = jV(eV.concat(QV(VV[wx[0]])), wx[104] + VV[wx[0]].length * wx[10]), nV(jV(xV.concat(VV[wx[38]]), rx(UV(wx[42]) + wx[103], wx[104], wx[125])))
            }

            function YV(...eV) {
              function JV(...VV) {
                return VV[wx[12]] = wx[0], typeof Oe[VV[wx[2]]] === wx[15] ? Oe[VV[wx[2]]] = function(...VV) {
                  for (Bx(VV[wx[12]] = wx[0], VV[wx[13]] = 'Xfno4EGgZj6<7D/k05,*{Fl}"VaI)cqiP|yRt&bs?Y83Nx%zLCTpKWr:(B#>d!_w9J1`m;]UHM+AO[e~SQ$@h2.v=u^', VV[wx[17]] = "" + (VV[wx[2]] || ""), VV[wx[4]] = VV[wx[17]].length, VV[wx[106]] = [], VV[wx[105]] = wx[2], VV[wx[20]] = wx[2], VV[wx[77]] = -wx[0]), VV[wx[50]] = wx[2]; VV[wx[50]] < VV[wx[4]]; VV[wx[50]]++)
                    if (VV[wx[44]] = VV[wx[13]].indexOf(VV[wx[17]][VV[wx[50]]]), VV[wx[44]] !== -wx[0])
                      if (VV[wx[77]] < wx[2]) VV[wx[77]] = VV[wx[44]];
                      else {
                        Bx(VV[wx[77]] += VV[wx[44]] * wx[27], VV[wx[105]] |= VV[wx[77]] << VV[wx[20]], VV[wx[20]] += (VV[wx[77]] & wx[28]) > wx[29] ? wx[30] : wx[31]);
                        do {
                          Bx(VV[wx[106]].push(VV[wx[105]] & wx[11]), VV[wx[105]] >>= wx[10], VV[wx[20]] -= wx[10])
                        } while (VV[wx[20]] > wx[6]);
                        VV[wx[77]] = -wx[0]
                      } return VV[wx[77]] > -wx[0] && VV[wx[106]].push((VV[wx[105]] | VV[wx[77]] << VV[wx[20]]) & wx[11]), vx(VV[wx[106]])
                }(Vx[VV[wx[2]]]) : Oe[VV[wx[2]]]
              }
              eV[wx[12]] = wx[0];
              try {
                VV[wx[13]]
              } catch (xV) {
                VV[wx[13]] = wx[2]
              }
              for (Bx(eV[wx[13]] = VV[wx[13]] ? JV(wx[107]) + JV(135) + JV(136) : JV(wx[107]) + JV(137) + JV(138), eV[wx[17]] = "", eV[wx[4]] = wx[16]), eV[wx[38]] = wx[2]; eV[wx[38]] < eV[wx[2]].length; eV[wx[38]]++) Bx(eV[wx[4]] = eV[wx[2]].charCodeAt(eV[wx[38]]), eV[wx[17]] += eV[wx[13]].charAt(eV[wx[4]] >>> wx[38] & wx[64]) + eV[wx[13]].charAt(eV[wx[4]] & wx[64]));
              return eV[wx[17]]
            }

            function yV(...eV) {
              function JV(...VV) {
                return VV[wx[12]] = wx[0], typeof Oe[VV[wx[2]]] === wx[15] ? Oe[VV[wx[2]]] = function(...VV) {
                  for (Bx(VV[wx[12]] = wx[0], VV[wx[0]] = '.|%3$*/:`>21807z"<^y_&Y}pUL45V!~a{[e?gr=xn)WljdGoQAbtSMsqPXJNDBmCHKfhTIERw9](,@6OvukFiZ;c#+', VV[wx[1]] = "" + (VV[wx[2]] || ""), VV[wx[109]] = VV[wx[1]].length, VV[-wx[27]] = [], VV[wx[7]] = wx[2], VV[wx[37]] = wx[2], VV[wx[6]] = -wx[0]), VV[-wx[108]] = wx[2]; VV[-wx[108]] < VV[wx[109]]; VV[-wx[108]]++)
                    if (VV[wx[5]] = VV[wx[0]].indexOf(VV[wx[1]][VV[-wx[108]]]), VV[wx[5]] !== -wx[0])
                      if (VV[wx[6]] < wx[2]) VV[wx[6]] = VV[wx[5]];
                      else {
                        Bx(VV[wx[6]] += VV[wx[5]] * wx[27], VV[wx[7]] |= VV[wx[6]] << VV[wx[37]], VV[wx[37]] += (VV[wx[6]] & wx[28]) > wx[29] ? wx[30] : wx[31]);
                        do {
                          Bx(VV[-wx[27]].push(VV[wx[7]] & wx[11]), VV[wx[7]] >>= wx[10], VV[wx[37]] -= wx[10])
                        } while (VV[wx[37]] > wx[6]);
                        VV[wx[6]] = -wx[0]
                      } return VV[wx[6]] > -wx[0] && VV[-wx[27]].push((VV[wx[7]] | VV[wx[6]] << VV[wx[37]]) & wx[11]), vx(VV[-wx[27]])
                }(Vx[VV[wx[2]]]) : Oe[VV[wx[2]]]
              }
              eV[wx[12]] = wx[0];
              try {
                VV[wx[1]]
              } catch (xV) {
                VV[wx[1]] = ""
              }
              for (Bx(eV[wx[13]] = UV(139) + JV(140) + JV(wx[109]) + "/", eV[wx[76]] = "", eV[-wx[107]] = eV[wx[2]].length), eV[wx[66]] = wx[2]; eV[wx[66]] < eV[-wx[107]]; eV[wx[66]] += wx[24])
                for (eV[wx[36]] = eV[wx[2]].charCodeAt(eV[wx[66]]) << wx[102] | (eV[wx[66]] + wx[0] < eV[-wx[107]] ? eV[wx[2]].charCodeAt(eV[wx[66]] + wx[0]) << wx[10] : wx[2]) | (eV[wx[66]] + wx[17] < eV[-wx[107]] ? eV[wx[2]].charCodeAt(eV[wx[66]] + wx[17]) : wx[2]), eV[wx[37]] = wx[2]; eV[wx[37]] < wx[38]; eV[wx[37]]++) eV[wx[66]] * wx[10] + eV[wx[37]] * wx[20] > eV[wx[2]].length * wx[10] ? eV[wx[76]] += VV[wx[1]] : eV[wx[76]] += eV[wx[13]].charAt(eV[wx[36]] >>> wx[20] * (wx[24] - eV[wx[37]]) & wx[19]);
              return eV[wx[76]]
            }

            function pV(...VV) {
              var eV, xV;
              for (Bx(VV[wx[12]] = wx[0], VV[-wx[112]] = "", VV[-wx[65]] = -wx[0]); ++VV[-wx[65]] < VV[wx[2]].length;) Bx(eV = VV[wx[2]].charCodeAt(VV[-wx[65]]), xV = VV[-wx[65]] + wx[0] < VV[wx[2]].length ? VV[wx[2]].charCodeAt(VV[-wx[65]] + wx[0]) : wx[2]), wx[58] <= eV && eV <= wx[110] && wx[59] <= xV && xV <= wx[111] && Bx(eV = wx[56] + ((eV & wx[53]) << wx[57]) + (xV & wx[53]), VV[-wx[65]]++), eV <= wx[49] ? VV[-wx[112]] += String.fromCharCode(eV) : eV <= 2047 ? VV[-wx[112]] += String.fromCharCode(wx[70] | eV >>> wx[20] & wx[63], wx[61] | eV & wx[19]) : eV <= wx[113] ? VV[-wx[112]] += String.fromCharCode(wx[72] | eV >>> wx[22] & wx[64], wx[61] | eV >>> wx[20] & wx[19], wx[61] | eV & wx[19]) : eV <= 2097151 && (VV[-wx[112]] += String.fromCharCode(wx[78] | eV >>> wx[65] & wx[6], wx[61] | eV >>> wx[22] & wx[19], wx[61] | eV >>> wx[20] & wx[19], wx[61] | eV & wx[19]));
              return VV[-wx[112]]
            }

            function QV(...VV) {
              for (Bx(VV[wx[12]] = wx[0], VV[wx[13]] = Array(VV[wx[2]].length >> wx[17])), VV[wx[43]] = wx[2]; VV[wx[43]] < VV[wx[13]].length; VV[wx[43]]++) VV[wx[13]][VV[wx[43]]] = wx[2];
              for (VV[wx[43]] = wx[2]; VV[wx[43]] < VV[wx[2]].length * wx[10]; VV[wx[43]] += wx[10]) VV[wx[13]][VV[wx[43]] >> wx[7]] |= (VV[wx[2]].charCodeAt(VV[wx[43]] / wx[10]) & wx[11]) << wx[51] - VV[wx[43]] % wx[115];
              return VV[wx[13]]
            }

            function nV(...VV) {
              for (Bx(VV[wx[12]] = wx[0], VV[wx[0]] = ""), VV[wx[1]] = wx[2]; VV[wx[1]] < VV[wx[2]].length * wx[115]; VV[wx[1]] += wx[10]) VV[wx[0]] += String.fromCharCode(VV[wx[2]][VV[wx[1]] >> wx[7]] >>> wx[51] - VV[wx[1]] % wx[115] & wx[11]);
              return VV[wx[0]]
            }

            function wV(...VV) {
              return VV[wx[12]] = wx[17], VV[wx[2]] >>> VV[wx[0]] | VV[wx[2]] << wx[115] - VV[wx[0]]
            }

            function ZV(...VV) {
              return VV[wx[12]] = wx[17], VV[wx[2]] >>> VV[wx[0]]
            }

            function vV(...VV) {
              return VV[wx[12]] = wx[24], VV[wx[2]] & VV[wx[0]] ^ ~VV[wx[2]] & VV[wx[17]]
            }

            function rV(...VV) {
              return VV[wx[12]] = wx[24], VV[wx[2]] & VV[wx[0]] ^ VV[wx[2]] & VV[wx[17]] ^ VV[wx[0]] & VV[wx[17]]
            }

            function kV(...VV) {
              return VV[wx[12]] = wx[0], wV(VV[wx[2]], wx[17]) ^ wV(VV[wx[2]], wx[30]) ^ wV(VV[wx[2]], 22)
            }

            function bV(...VV) {
              return VV[wx[12]] = wx[0], wV(VV[wx[2]], wx[20]) ^ wV(VV[wx[2]], wx[89]) ^ wV(VV[wx[2]], wx[35])
            }

            function EV(...VV) {
              return VV[wx[12]] = wx[0], wV(VV[wx[2]], wx[6]) ^ wV(VV[wx[2]], wx[65]) ^ ZV(VV[wx[2]], wx[24])
            }

            function BV(...VV) {
              return VV[wx[12]] = wx[0], wV(VV[wx[2]], 17) ^ wV(VV[wx[2]], wx[116]) ^ ZV(VV[wx[2]], wx[57])
            }

            function jV(...eV) {
              var xV, JV, YV, UV, yV, pV, QV, nV, wV, ZV, jV, tV;
              for (Bx(eV[wx[12]] = wx[17], eV[wx[45]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), eV[wx[24]] = new Array(wx[117])), Bx(eV[wx[2]][eV[wx[0]] >> wx[7]] |= wx[61] << wx[51] - eV[wx[0]] % wx[115], eV[wx[2]][(eV[wx[0]] + wx[117] >> wx[5] << wx[38]) + wx[64]] = eV[wx[0]]), wV = wx[2]; wV < eV[wx[2]].length; wV += wx[102]) {
                for (Bx(xV = eV[wx[45]][wx[2]], JV = eV[wx[45]][wx[0]], YV = eV[wx[45]][wx[17]], UV = eV[wx[45]][wx[24]], yV = eV[wx[45]][wx[38]], pV = eV[wx[45]][wx[7]], QV = eV[wx[45]][wx[20]], nV = eV[wx[45]][wx[6]]), ZV = wx[2]; ZV < wx[117]; ZV++) Bx(ZV < wx[102] ? eV[wx[24]][ZV] = eV[wx[2]][ZV + wV] : eV[wx[24]][ZV] = qV(qV(qV(BV(eV[wx[24]][ZV - wx[17]]), eV[wx[24]][ZV - wx[6]]), EV(eV[wx[24]][ZV - wx[64]])), eV[wx[24]][ZV - wx[102]]), jV = qV(qV(qV(qV(nV, bV(yV)), vV(yV, pV, QV)), VV[wx[17]][ZV]), eV[wx[24]][ZV]), tV = qV(kV(xV), rV(xV, JV, YV)), nV = QV, QV = pV, pV = yV, yV = qV(UV, jV), UV = YV, YV = JV, JV = xV, xV = qV(jV, tV));
                Bx(eV[wx[45]][wx[2]] = qV(xV, eV[wx[45]][wx[2]]), eV[wx[45]][wx[0]] = qV(JV, eV[wx[45]][wx[0]]), eV[wx[45]][wx[17]] = qV(YV, eV[wx[45]][wx[17]]), eV[wx[45]][wx[24]] = qV(UV, eV[wx[45]][wx[24]]), eV[wx[45]][wx[38]] = qV(yV, eV[wx[45]][wx[38]]), eV[wx[45]][wx[7]] = qV(pV, eV[wx[45]][wx[7]]), eV[wx[45]][wx[20]] = qV(QV, eV[wx[45]][wx[20]]), eV[wx[45]][wx[6]] = qV(nV, eV[wx[45]][wx[6]]))
              }
              return eV[wx[45]]
            }

            function qV(...VV) {
              return Bx(VV[wx[12]] = wx[17], VV[wx[17]] = (VV[wx[2]] & wx[113]) + (VV[wx[0]] & wx[113]), VV[wx[102]] = (VV[wx[2]] >> wx[102]) + (VV[wx[0]] >> wx[102]) + (VV[wx[17]] >> wx[102])), VV[wx[102]] << wx[102] | VV[wx[17]] & wx[113]
            }
            return Bx(VV[wx[12]] = wx[2], VV[wx[13]] = wx[2], VV[wx[1]] = ""), VV[wx[17]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
              hex: function(...VV) {
                return VV[wx[12]] = wx[0], YV(function(...VV) {
                  return VV[wx[12]] = wx[0], nV(jV(QV(VV[wx[2]]), VV[wx[2]].length * wx[10]))
                }(pV(VV[wx[2]])))
              },
              b64: eV,
              any: xV,
              hex_hmac: function(...VV) {
                return VV[wx[12]] = wx[17], YV(JV(pV(VV[wx[2]]), pV(VV[wx[0]])))
              },
              b64_hmac: eV,
              any_hmac: xV
            }
          }(), console.log(VV[wx[66]]))
        }
        return UV(126) + "5" in kx && jV(), {
          [BV(142) + BV(143)]: pV
        }
      }
      return pV
    }

    function Ex(...VV) {
      VV[wx[12]] = wx[2], Zx(144) + "k" in kx && function(...VV) {
        VV[wx[12]] = wx[2]
      }()
    }

    function Bx() {
      Bx = function() {}
    }
    Bx(Oe = {}, Vx = ['/C7XT#AD^~"qc', '}e/>taW6CbG4NIr.&+}^BURHGM$D2JD??"NPZ=>6yP}RKi)*d+8xGY&A]pwXc', "dPgTn[H~jPGkbj:h}{k8", "E`Ht[=`D)obRO)IG@Z", 'c:p,|^ZF"~EEEiB~Tf|>MyuF>PLgqp`YEGAe;R^b^2>SmK.u@PP^DnZ', "Z88HGnAI", '+):xKr"(Js&4,_@*L+r6`RLo4EmaZ', "^+Zk|[pA>}F?@$W(GAJ>+K/c=X", 'VQjyC%0Fe}RjOY,*cNPe_UWHpl7#pYWRSM6U>"a6ui', 'KP|5HqO`.sus>=]DJe<H.q[Lp0a>K*LFV"O#[$$"zb$]>8bY^=b"5YZ', "2)AXNY,!A:rS4u[{5Gt8rJ#{8", 'x>tmr"H2^2Ae1y>CkQX"<qUA9DgRtb6D$"&dRrZ', "V+o>G^|Y?~]5HvHk7wFP@0vAOBGJ$>mRD22&k%}j%~+t8N]h4sF;S%L!8", ')"[5##_^3sqco;O`fwcP>Ta"AN+Lgn=;', '(=,4""^bb0XslJJu@.%ehg2c', "o+*UzE;6>:ZLqnsY,hKX%%2%PbSU];!(sPr6u2AksM>Rau!{&>Le.@h4Es2", "@0getT;(qp>S`B*~i8vLW^:kZDa$c", "mg!e*K0qkD)@tnLzYPL^)YZ", 's`jtDyZ!cXGFz=%{F)KXP`pkUGscgNq;("x#y4fDpGb', "O.!UV^r(8o*5.>VF92/mu[xz1G`", '4.kmUn"~ZpsSt*|{Cwa5k5*M#?z=pw5Dtw/8*_Vq>XLg[uT;~u[8', "Q)[)6`dRKfKU)Nhet?0tG", "J?zkyh<b{?2U)*fm!?tUdg{Y$M_>1I/|}GMHeKKc", '/0amA>L@4E2^HJ$;("amIJnBwX:A~IL', '1}u4Jt5H1ie?B=;(ts4HC5Vk3sHe^n[u:.`Vn9{Y"Mz', "h?P6DUQ4aNBB;_`Y5e!mdg24CBRU7qAu[g(Jv*mkSoRU!i|R;NYTS", "G)aLJyZ", '>L`"6p.D[D{waijDUg%6a$i&UfN_Nii~wX/5F)BKFsx?C_~`{2y"h5kkv2"5c', "{MOl{>/c>P:VDxv;2)]&}aO^w", "Gu)8)Y96&bubPrQ*ZQ[6N$;jHSU&XpbmR=ZLnEVo_MA6c", '?"uV&t3^yNikrpLhgep,u{GzvXg@nI', '[9}50#(K)?eUW>3Hs"bHK"}}ui`;WFheY=BeOU!g{?2@anB', "#0@842MA!~}@Oq8*jwHt:``D!o#T.@xhRpw#5=czi}$&MwSmaZ", "D}JPWd96eMO&&N!mD)|UlfZ@^P6sG=M", '&Ac;"b{ISPvaNIf`X#wV,yPATi6+cvIDHMm#P}n(!bbV#jy`wXy;z2{I', "d2@6,$7!^o`U|$S{M2nyA>ac", 'U0t5<r?FeNuBQihkcPKmKgTHvpG"<)QC', "MAe5fJa(UGi+~yse5sZkN2!{YX`axv<*qwi6zKa%opMa3@&uZ2}X", "`#bVTn(K_~>j@u3(n.0UZJOFql|BkhJ~T`wx", 'Q`e5mR^{!onTPr@*v2gl1*^^kN~ejJl(L)@UCRT""~d=3$HYSu(L355"lbtzc', "hN(4w!QR~X*enu+{_@.;FKO{*oRj0@[uB>gl9f9K)oV", 'QG0e6##kfbkJqE|`d##">>W21?]@ZY,', '*"KLopaaDpy', '8gA6]Ax$ZM?j4i`eEi#VGt"+NDirh=G;', "eha^2}/H>}#1[zH+s0ht~ybFdDQF[z#~Rg`;3UH~L", "v2vP9_fb)b!HNyRkFHh,", "iLCm@#&!@oB?R*Rh%9|>0OcB.EKSqRRD+H)Xqy42;0I4:_t(hXg,7nuY^~2", "U?}>RRZ", "90|dTn}K(?~`[$;G5EI", "ZPY,X!<Mmi", "|stmx`X~Lo4NZCT;}wfX", "nw.V]lB~l~O]w*|(nC|6", "Ueh#*%{kx", "7E5PC4`k,EAm`x^(;pbHH", 'E?IJ>TVkUs{6E*UCOs=>KrmM+?%NGp!m")%eD$e6fsK6S=b.', 'dQA6q$*b;E>5:BZHcMxtq*@k]2eJrJ{D"hP^vt6c', 'J=sPXtR$Ip,":jL', "#1+UB$cBKMal7R}+L8WLx#,DBS^};ykF!s8H4nSc6", '7C"T/[6BWs&;wudeKs@)k[OqE15c6uXz_@tPb`2R^296XJt(kAtL', "RMKUdEj6LtUYc", "w2yV)Y;RvXT>6ycY5h[e}aTc", "@XC>Y{YqQEP@I$gkUe^,?", "d++dsOXl>}5fQi;+", 'T9_l*5CB>:+e$FT~}eeXst"+H:f5(r.zwpc', "QuxeAg;H#i!#]@**]`Sei*z$i:Y", "#hL69f3#gP[@HrrH?Dk8", 'HPvdX!}2QEXP%p0FK"@XaU*F<0WA`zO{oww', "d#)8v)XBaDX4b@&uwu8,a*,Y0Dkiqn5~hL7P]JGKAS,s;u&", "+s+m7K)H90dJ4)&eXc", '$iAm_YP{`X)5;uWv$"M#2pHj<f8Bc', "hNBts$]R`}Q=bzCF.McL^}^kQ?>inuPmO`}m{>O{L~0m{;=CYPPUxp8.{B", 'F+t>#jykS~+"ux;(2`He^JHHdpnfw*HR>2B,cA!bBEH,|x', ':"7>L0]R$MlUA_>{,HeU[#[M=lc[ME:DcX"TS2lH[1bi`rh~8g_&;nC68', 'Hp+8P_]H@biL_>bH1giXFyh2VMo>mnV.#93&L=gb>2"', "ThHe`E^klB]Rc", 'eLUl)a7MI}/c"bMuA2{;e[[MIpXXpNdhyZ', '^eZkeKL&.sv4,I$`Uh)UI`~HiD]DRI8kh?mT;{MAz0083zS;W",Jv', '@9O6ZYd2riv"E*iu/wtUn)H(0f1b,$?;={8T&0JMX?>^yBVHZHzkn[AII}.', "dgvk>f:b>2>>4uRYj5,4m", "{sH^yA+(#sIPArz+!ze5hf3MEs;", "$wvdM!>RB0:l.zM", '4?Tykr2R,sYSSYo.0+3"KbBz}D7cbB(uiDYTsO{I', "Awlj?287", '>)="(qBc', ':"*eT$?I', "7$#0hw]1", "%~}zHFtE", 'ye"7@b11', "|*Q@u]8E", "|ciqlkY", "Vl9$T", "u,Bhn~R1", "7.pNFQY", "@FJ7(@(E", "[~&2`w>)", "NyQU]q`E", "hJ0Z0", 'Xm>oAo"E', 'A2!"w0.k', "Ey76geuk", ';F"v25(', "IvDa^6Tk", "vKdWS<Uk", "qP7&10bk", 'qPq"v', "$;Y5/os@)w*T4.HbJ;OC.fF", "M%lW`bS/36P8h_TIjZvc~SOU.Yk5&G0", "hQG];>P_CVn/?DJBRQZsDoW", 'lMKWe<qh!Cpos7=xbJ].vq?"c#LX0`;', "4$7jIfgwF>3KQ]?LC`Ak=g1<uxG0btc", "$;Y5/os@[?_&5z0S2bY]5r8@o$?", "h3<JTkF", ".;OCEU&p", '"Jm}', "$K<+l!vE", "(FmZ[", "i2)7{aHB", "oc@*9Us1", ";lXkSQ]P", "cy2/m*@Py$j]5(CC&J!S22I_@Y+4,:O", "i@D>+p.QQ?E", "wDP9B*%2", "Gg]_!_$2", "wD2_Chu2", "g[P7j%U1", "FKwi&", "nFxH[i8E", "HYf2", 'QS%Ag/~=vsU;/"8/', "[cp2M/IYZK5mjGCD", '=c~a!D/=y2vLR"Z/', 'QI4!*(PYKMV#m"3Z', "vsk!%@K+<;**$a=", '?z[*j")E', "PLhU9tkf", "IJ?I~xYf", "^<jp5", "IJ?Iym/n", "i7hWV", "H*p{KWdBK.8}ZW5T{lcZ%.32Y?", "JHp!Qme0W<MtpkC?LVx>;(9ZTy", "Ob02su#n<KYu[0J<]qBQ]r6bM:", "nnvKy:Ui", "tmiwy", "0GJ5oY1c", ",K70juOl", "zz|`.nhfYI", 'g"^TQqZ', "rpsbuJ21P", "q)wRh;EW", "Gh(s", '/To"8_<F', "9iO)KSVF", ":hSY.X~", "*y0O)`!d", "V|@Y+?ed", "Z8Cmv*?I", 'j";V;', 'c@"HGw&A', "q&lB,", "L8SO0KIZ", "=k$/wwtZ", ":3U:r@Ml:t", "S6+Q+", "S6+QD5(?G9@>G"]), Bx(ex = function(...VV) {
      Bx(VV[wx[12]] = wx[2], VV[wx[13]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], VV[wx[0]] = wx[16], VV[wx[4]] = []);
      try {
        Bx(VV[wx[0]] = Object, VV[wx[4]][wx[23]]("".__proto__.constructor.name))
      } catch (Vx) {}
      VV: for (VV[wx[9]] = wx[2]; VV[wx[9]] < VV[wx[13]][wx[12]]; VV[wx[9]]++) try {
        for (VV[wx[0]] = VV[wx[13]][VV[wx[9]]](), VV[wx[14]] = wx[2]; VV[wx[14]] < VV[wx[4]][wx[12]]; VV[wx[14]]++)
          if (typeof VV[wx[0]][VV[wx[4]][VV[wx[14]]]] === wx[15]) continue VV;
        return VV[wx[0]]
      } catch (Vx) {}
      return VV[wx[0]] || this
    }() || {}, xx = ex.TextDecoder, Jx = ex.Uint8Array, Yx = ex[wx[128]], Ux = ex.String || String, yx = ex.Array || Array, px = function(...VV) {
      return Bx(VV[wx[12]] = wx[2], VV[wx[9]] = new yx(wx[61]), VV[wx[0]] = Ux[wx[21]] || Ux.fromCharCode, VV[wx[17]] = []),
        function(...eV) {
          for (Bx(eV[wx[12]] = wx[0], eV[wx[13]] = wx[16], eV[wx[1]] = wx[16], eV[wx[4]] = eV[wx[2]][wx[12]], VV[wx[17]][wx[12]] = wx[2]), eV[-wx[18]] = wx[2]; eV[-wx[18]] < eV[wx[4]];) Bx(eV[wx[1]] = eV[wx[2]][eV[-wx[18]]++], eV[wx[1]] <= wx[49] ? eV[wx[13]] = eV[wx[1]] : eV[wx[1]] <= wx[79] ? eV[wx[13]] = (eV[wx[1]] & wx[63]) << wx[20] | eV[wx[2]][eV[-wx[18]]++] & wx[19] : eV[wx[1]] <= 239 ? eV[wx[13]] = (eV[wx[1]] & wx[64]) << wx[22] | (eV[wx[2]][eV[-wx[18]]++] & wx[19]) << wx[20] | eV[wx[2]][eV[-wx[18]]++] & wx[19] : Ux[wx[21]] ? eV[wx[13]] = (eV[wx[1]] & wx[6]) << wx[65] | (eV[wx[2]][eV[-wx[18]]++] & wx[19]) << wx[22] | (eV[wx[2]][eV[-wx[18]]++] & wx[19]) << wx[20] | eV[wx[2]][eV[-wx[18]]++] & wx[19] : (eV[wx[13]] = wx[19], eV[-wx[18]] += wx[24]), VV[wx[17]][wx[23]](VV[wx[9]][eV[wx[13]]] || (VV[wx[9]][eV[wx[13]]] = VV[wx[0]](eV[wx[13]]))));
          return VV[wx[17]].join("")
        }
    }()), Zx(83) in kx && function(...VV) {
      function eV(...VV) {
        return VV[wx[12]] = wx[0], VV[wx[2]][wx[0]] * wx[33] + (VV[wx[2]][wx[2]] < wx[2] ? wx[32] | VV[wx[2]][wx[2]] : VV[wx[2]][wx[2]])
      }

      function xV(...VV) {
        switch (VV[wx[12]] = wx[0], ((VV[wx[2]] & wx[32]) !== wx[2]) * wx[0] + (VV[wx[2]] < wx[2]) * wx[17]) {
          case wx[2]:
            return [VV[wx[2]] % wx[32], Math.trunc(VV[wx[2]] / wx[33])];
          case wx[0]:
            return [VV[wx[2]] % wx[32] - wx[32], Math.trunc(VV[wx[2]] / wx[33]) + wx[0]];
          case wx[17]:
            return [((VV[wx[2]] + wx[32]) % wx[32] + wx[32]) % wx[32], Math.round(VV[wx[2]] / wx[33])];
          case wx[24]:
            return [VV[wx[2]] % wx[32], Math.trunc(VV[wx[2]] / wx[33])]
        }
      }
      VV[wx[12]] = wx[2], Bx(VV[wx[13]] = eV([wx[17], wx[38]]), VV[-wx[34]] = eV([wx[0], wx[17]]), VV[wx[35]] = VV[wx[13]] + VV[-wx[34]], VV[wx[9]] = VV[wx[35]] - VV[-wx[34]], VV[wx[36]] = VV[wx[9]] * wx[17], VV[wx[37]] = VV[wx[36]] / wx[17], console.log(xV(VV[wx[35]])), console.log(xV(VV[wx[9]])), console.log(xV(VV[wx[36]])), console.log(xV(VV[wx[37]])))
    }(), Bx(Qx = Object[Zx(wx[43])](wx[137]), nx = void 0), Bx(Ie = (...VV) => {
      function eV(...VV) {
        return VV[wx[12]] = wx[0], typeof Oe[VV[wx[2]]] === wx[15] ? Oe[VV[wx[2]]] = function(...VV) {
          for (Bx(VV[wx[12]] = wx[0], VV[wx[13]] = '~dIBSAZcoOgCsGtjrVTKJQk70nN+mfU")#h?/^,6|Eb;vu<[_q&yDRWxa9>8Le]%=l5w@Xi`21P:3Y4!FMHp.}*(${z', VV[wx[17]] = "" + (VV[wx[2]] || ""), VV[wx[24]] = VV[wx[17]].length, VV[wx[9]] = [], VV[wx[36]] = wx[2], VV[-wx[119]] = wx[2], VV[-wx[112]] = -wx[0]), VV[wx[10]] = wx[2]; VV[wx[10]] < VV[wx[24]]; VV[wx[10]]++)
            if (VV[wx[5]] = VV[wx[13]].indexOf(VV[wx[17]][VV[wx[10]]]), VV[wx[5]] !== -wx[0])
              if (VV[-wx[112]] < wx[2]) VV[-wx[112]] = VV[wx[5]];
              else {
                Bx(VV[-wx[112]] += VV[wx[5]] * wx[27], VV[wx[36]] |= VV[-wx[112]] << VV[-wx[119]], VV[-wx[119]] += (VV[-wx[112]] & wx[28]) > wx[29] ? wx[30] : wx[31]);
                do {
                  Bx(VV[wx[9]].push(VV[wx[36]] & wx[11]), VV[wx[36]] >>= wx[10], VV[-wx[119]] -= wx[10])
                } while (VV[-wx[119]] > wx[6]);
                VV[-wx[112]] = -wx[0]
              } return VV[-wx[112]] > -wx[0] && VV[wx[9]].push((VV[wx[36]] | VV[-wx[112]] << VV[-wx[119]]) & wx[11]), vx(VV[wx[9]])
        }(Vx[VV[wx[2]]]) : Oe[VV[wx[2]]]
      }
      VV[wx[12]] = wx[0];
      const xV = function(VV) {
          var eV;
          return {
            meta: {
              ...VV.meta,
              formatVersion: Pe.e,
              variation: null !== (eV = VV.meta.variation) && void 0 !== eV ? eV : null
            },
            initialChunks: VV.initialChunks.map((VV => ({
              chunkPos: VV.chunkPos,
              rle: Ne(VV.rle),
              sharedBlockData: Ge("sharedBlockData", VV.sharedBlockData)
            }))),
            ticks: VV.ticks.map(se),
            editState: VV.editState
          }
        }(VV[wx[2]]),
        JV = Je(Pe[wx[36]]);
      VV[wx[13]] = wx[16];
      try {
        function QV(...VV) {
          for (Bx(VV[wx[12]] = wx[0], VV[wx[13]] = '$ltGB.o~p%Y;#8}!PHyxI2=^em,a`{f|"/h1&9)Zi3Xz*4kO6E5sLjS[N:wvKCAMb?<]@RuDn0U>Qr(7WJq+F_TcVdg', VV[wx[17]] = "" + (VV[wx[2]] || ""), VV[wx[24]] = VV[wx[17]].length, VV[wx[122]] = [], VV[wx[121]] = wx[2], VV[wx[20]] = wx[2], VV[wx[120]] = -wx[0]), VV[wx[50]] = wx[2]; VV[wx[50]] < VV[wx[24]]; VV[wx[50]]++)
            if (VV[wx[44]] = VV[wx[13]].indexOf(VV[wx[17]][VV[wx[50]]]), VV[wx[44]] !== -wx[0])
              if (VV[wx[120]] < wx[2]) VV[wx[120]] = VV[wx[44]];
              else {
                Bx(VV[wx[120]] += VV[wx[44]] * wx[27], VV[wx[121]] |= VV[wx[120]] << VV[wx[20]], VV[wx[20]] += (VV[wx[120]] & wx[28]) > wx[29] ? wx[30] : wx[31]);
                do {
                  Bx(VV[wx[122]].push(VV[wx[121]] & wx[11]), VV[wx[121]] >>= wx[10], VV[wx[20]] -= wx[10])
                } while (VV[wx[20]] > wx[6]);
                VV[wx[120]] = -wx[0]
              } return VV[wx[120]] > -wx[0] && VV[wx[122]].push((VV[wx[121]] | VV[wx[120]] << VV[wx[20]]) & wx[11]), vx(VV[wx[122]])
        }

        function nV(...VV) {
          return VV[wx[12]] = wx[0], typeof Oe[VV[wx[2]]] === wx[15] ? Oe[VV[wx[2]]] = QV(Vx[VV[wx[2]]]) : Oe[VV[wx[2]]]
        }

        function wV(...VV) {
          VV[wx[12]] = wx[2]
        }
        nV(145) in kx && wV(), VV[wx[13]] = JV[nV(146)](xV)
      } catch (pV) {
        function ZV(...VV) {
          for (Bx(VV[wx[12]] = wx[0], VV[wx[13]] = 'dWLUjgP<BsiTHQ4%OmDCu9Se1Ak$="b:^5!vo`Ga(F6hI#0Vn8&)wEprY7yZc,Nt.l]~q[Kzf@2XJRM?;3*|x}_/+{>', VV[wx[1]] = "" + (VV[wx[2]] || ""), VV[-wx[93]] = VV[wx[1]].length, VV[wx[38]] = [], VV[wx[36]] = wx[2], VV[-wx[123]] = wx[2], VV[wx[6]] = -wx[0]), VV[-wx[85]] = wx[2]; VV[-wx[85]] < VV[-wx[93]]; VV[-wx[85]]++)
            if (VV[wx[85]] = VV[wx[13]].indexOf(VV[wx[1]][VV[-wx[85]]]), VV[wx[85]] !== -wx[0])
              if (VV[wx[6]] < wx[2]) VV[wx[6]] = VV[wx[85]];
              else {
                Bx(VV[wx[6]] += VV[wx[85]] * wx[27], VV[wx[36]] |= VV[wx[6]] << VV[-wx[123]], VV[-wx[123]] += (VV[wx[6]] & wx[28]) > wx[29] ? wx[30] : wx[31]);
                do {
                  Bx(VV[wx[38]].push(VV[wx[36]] & wx[11]), VV[wx[36]] >>= wx[10], VV[-wx[123]] -= wx[10])
                } while (VV[-wx[123]] > wx[6]);
                VV[wx[6]] = -wx[0]
              } return VV[wx[6]] > -wx[0] && VV[wx[38]].push((VV[wx[36]] | VV[wx[6]] << VV[-wx[123]]) & wx[11]), vx(VV[wx[38]])
        }

        function vV(...VV) {
          return VV[wx[12]] = wx[0], typeof Oe[VV[wx[2]]] === wx[15] ? Oe[VV[wx[2]]] = ZV(Vx[VV[wx[2]]]) : Oe[VV[wx[2]]]
        }
        throw Bx(console[Zx(wx[122])](xV), JV[vV(wx[81])](xV, {
          [vV(wx[26]) + vV(150)](...VV) {
            function eV(...VV) {
              return VV[wx[12]] = wx[0], typeof Oe[VV[wx[2]]] === wx[15] ? Oe[VV[wx[2]]] = function(...VV) {
                for (Bx(VV[wx[12]] = wx[0], VV[wx[13]] = 'a5FtsEiej|GYTf.u/~r1<2O`qJkh]{pcv_#A06=lX?VWyHbmwUBCnSd)L7(3K4oIQ,%D9PZgM:>&"^$*R+@![x8;z}N', VV[wx[1]] = "" + (VV[wx[2]] || ""), VV[wx[24]] = VV[wx[1]].length, VV[wx[38]] = [], VV[-wx[108]] = wx[2], VV[wx[30]] = wx[2], VV[wx[117]] = -wx[0]), VV[wx[10]] = wx[2]; VV[wx[10]] < VV[wx[24]]; VV[wx[10]]++)
                  if (VV[-wx[124]] = VV[wx[13]].indexOf(VV[wx[1]][VV[wx[10]]]), VV[-wx[124]] !== -wx[0])
                    if (VV[wx[117]] < wx[2]) VV[wx[117]] = VV[-wx[124]];
                    else {
                      Bx(VV[wx[117]] += VV[-wx[124]] * wx[27], VV[-wx[108]] |= VV[wx[117]] << VV[wx[30]], VV[wx[30]] += (VV[wx[117]] & wx[28]) > wx[29] ? wx[30] : wx[31]);
                      do {
                        Bx(VV[wx[38]].push(VV[-wx[108]] & wx[11]), VV[-wx[108]] >>= wx[10], VV[wx[30]] -= wx[10])
                      } while (VV[wx[30]] > wx[6]);
                      VV[wx[117]] = -wx[0]
                    } return VV[wx[117]] > -wx[0] && VV[wx[38]].push((VV[-wx[108]] | VV[wx[117]] << VV[wx[30]]) & wx[11]), vx(VV[wx[38]])
              }(Vx[VV[wx[2]]]) : Oe[VV[wx[2]]]
            }
            return eV(151) + "B" in kx && function(...VV) {
              VV[wx[12]] = wx[2];
              const eV = require("big-integer");
              Bx(VV[wx[13]] = class {
                static randomPrime(...VV) {
                  VV[wx[12]] = wx[0];
                  const xV = eV.one.shiftLeft(VV[wx[2]] - wx[0]),
                    JV = eV.one.shiftLeft(VV[wx[2]]).prev();
                  for (; wx[84];) {
                    let VV = eV.randBetween(xV, JV);
                    if (VV.isProbablePrime(wx[125])) return VV
                  }
                }
                static generate(...VV) {
                  VV[wx[12]] = wx[0];
                  const xV = eV(65537);
                  let JV, YV;
                  VV[wx[91]] = wx[16];
                  do {
                    Bx(JV = this.randomPrime(VV[wx[2]] / wx[17]), YV = this.randomPrime(VV[wx[2]] / wx[17]), VV[wx[91]] = eV.lcm(JV.prev(), YV.prev()))
                  } while (eV.gcd(xV, VV[wx[91]]).notEquals(wx[0]) || JV.minus(YV).abs().shiftRight(VV[wx[2]] / wx[17] - wx[126]).isZero());
                  return {
                    e: xV,
                    n: JV.multiply(YV),
                    d: xV.modInv(VV[wx[91]])
                  }
                }
                static encrypt(...VV) {
                  return VV[wx[12]] = wx[24], eV(VV[wx[2]]).modPow(VV[wx[17]], VV[wx[0]])
                }
                static decrypt(...VV) {
                  return VV[wx[12]] = wx[24], eV(VV[wx[2]]).modPow(VV[wx[0]], VV[wx[17]])
                }
                static encode(...VV) {
                  VV[wx[12]] = wx[0];
                  const xV = VV[wx[2]].split("").map((VV => VV.charCodeAt())).join("");
                  return eV(xV)
                }
                static decode(...VV) {
                  VV[wx[12]] = wx[0];
                  const eV = VV[wx[2]].toString();
                  VV[-wx[127]] = "";
                  for (let xV = wx[2]; xV < eV.length; xV += wx[17]) {
                    let JV = Number(eV.substr(xV, wx[17]));
                    JV <= wx[133] ? (VV[-wx[127]] += String.fromCharCode(Number(eV.substr(xV, wx[24]))), xV++) : VV[-wx[127]] += String.fromCharCode(JV)
                  }
                  return VV[-wx[127]]
                }
              }, module.exports = VV[wx[13]])
            }(), nx = [VV, {}], bx(eV(152))
          }
        })), pV
      }
      const YV = ye(Pe[wx[36]], VV[wx[13]]),
        yV = UV[wx[128]][eV(153)](wx[38]);
      return yV[eV(154) + eV(wx[41]) + "E"](Pe[wx[36]]), UV[wx[128]].concat([yV, YV])
    }, de = (...VV) => {
      function eV(...VV) {
        return VV[wx[12]] = wx[0], typeof Oe[VV[wx[2]]] === wx[15] ? Oe[VV[wx[2]]] = function(...VV) {
          for (Bx(VV[wx[12]] = wx[0], VV[wx[86]] = 'yZAh|0RfO?BVu<i8)C*#&lb:gj,z+LQ{Hs9DMcdvU>E=41Ft$/.S_woI6k(nK7TaJPG"~NW@![x;]}`X32q%Y5me^rp', VV[wx[129]] = "" + (VV[wx[2]] || ""), VV[wx[130]] = VV[wx[129]].length, VV[wx[38]] = [], VV[-wx[132]] = wx[2], VV[wx[37]] = wx[2], VV[wx[131]] = -wx[0]), VV[wx[10]] = wx[2]; VV[wx[10]] < VV[wx[130]]; VV[wx[10]]++)
            if (VV[wx[44]] = VV[wx[86]].indexOf(VV[wx[129]][VV[wx[10]]]), VV[wx[44]] !== -wx[0])
              if (VV[wx[131]] < wx[2]) VV[wx[131]] = VV[wx[44]];
              else {
                Bx(VV[wx[131]] += VV[wx[44]] * wx[27], VV[-wx[132]] |= VV[wx[131]] << VV[wx[37]], VV[wx[37]] += (VV[wx[131]] & wx[28]) > wx[29] ? wx[30] : wx[31]);
                do {
                  Bx(VV[wx[38]].push(VV[-wx[132]] & wx[11]), VV[-wx[132]] >>= wx[10], VV[wx[37]] -= wx[10])
                } while (VV[wx[37]] > wx[6]);
                VV[wx[131]] = -wx[0]
              } return VV[wx[131]] > -wx[0] && VV[wx[38]].push((VV[-wx[132]] | VV[wx[131]] << VV[wx[37]]) & wx[11]), vx(VV[wx[38]])
        }(Vx[VV[wx[2]]]) : Oe[VV[wx[2]]]
      }
      VV[wx[12]] = wx[0], Zx(156) in kx && function(...VV) {
        Bx(VV[wx[12]] = wx[2], VV[wx[136]] = function(...VV) {
          if (Bx(VV[wx[12]] = wx[0], VV[-wx[69]] = VV[wx[2]].length), VV[-wx[69]] < wx[17]) return wx[2];
          if (Bx(VV[wx[3]] = Math.max(...VV[wx[2]]), VV[wx[24]] = Math.min(...VV[wx[2]])), VV[wx[3]] === VV[wx[24]]) return wx[2];
          for (Bx(VV[wx[38]] = Array(VV[-wx[69]] - wx[0]).fill(Number.MAX_SAFE_INTEGER), VV[wx[36]] = Array(VV[-wx[69]] - wx[0]).fill(Number.MIN_SAFE_INTEGER), VV[wx[20]] = Math.ceil((VV[wx[3]] - VV[wx[24]]) / (VV[-wx[69]] - wx[0])), VV[wx[77]] = wx[2]), VV[wx[10]] = wx[2]; VV[wx[10]] < VV[-wx[69]]; VV[wx[10]]++) VV[wx[2]][VV[wx[10]]] !== VV[wx[24]] && VV[wx[2]][VV[wx[10]]] !== VV[wx[3]] && Bx(VV[wx[77]] = Math.floor((VV[wx[2]][VV[wx[10]]] - VV[wx[24]]) / VV[wx[20]]), VV[wx[38]][VV[wx[77]]] = Math.min(VV[wx[38]][VV[wx[77]]], VV[wx[2]][VV[wx[10]]]), VV[wx[36]][VV[wx[77]]] = Math.max(VV[wx[36]][VV[wx[77]]], VV[wx[2]][VV[wx[10]]]));
          for (Bx(VV[-wx[134]] = Number.MIN_SAFE_INTEGER, VV[-wx[135]] = VV[wx[24]]), VV[wx[133]] = wx[2]; VV[wx[133]] < VV[-wx[69]] - wx[0]; VV[wx[133]]++) VV[wx[38]][VV[wx[133]]] === Number.MAX_SAFE_INTEGER && VV[wx[36]][VV[wx[133]]] === Number.MIN_SAFE_INTEGER || Bx(VV[-wx[134]] = Math.max(VV[-wx[134]], VV[wx[38]][VV[wx[133]]] - VV[-wx[135]]), VV[-wx[135]] = VV[wx[36]][VV[wx[133]]]);
          return VV[-wx[134]] = Math.max(VV[-wx[134]], VV[wx[3]] - VV[-wx[135]]), VV[-wx[134]]
        }, console.log(VV[wx[136]]))
      }();
      const xV = UV[wx[128]][Zx(wx[68])](VV[wx[2]]),
        JV = xV[eV(158) + eV(wx[127])] >= wx[38] ? xV[eV(wx[92]) + eV(wx[100])](wx[2]) : wx[137];
      if (JV !== wx[137] && (wx[2], Ae[wx[44]])(JV)) {
        function yV(...VV) {
          for (Bx(VV[wx[12]] = wx[0], VV[wx[0]] = 'vGKfhVpHlRaPMAUFBE1b;t)sN^"+ng(:Q!kw?_m`rz=Jq~5x,%c64COYeWi}3X|9ZDojuS>/I*#&dy2<@0TL8{[.7$]', VV[-wx[27]] = "" + (VV[wx[2]] || ""), VV[wx[24]] = VV[-wx[27]].length, VV[wx[38]] = [], VV[wx[36]] = wx[2], VV[wx[37]] = wx[2], VV[wx[77]] = -wx[0]), VV[wx[50]] = wx[2]; VV[wx[50]] < VV[wx[24]]; VV[wx[50]]++)
            if (VV[wx[44]] = VV[wx[0]].indexOf(VV[-wx[27]][VV[wx[50]]]), VV[wx[44]] !== -wx[0])
              if (VV[wx[77]] < wx[2]) VV[wx[77]] = VV[wx[44]];
              else {
                Bx(VV[wx[77]] += VV[wx[44]] * wx[27], VV[wx[36]] |= VV[wx[77]] << VV[wx[37]], VV[wx[37]] += (VV[wx[77]] & wx[28]) > wx[29] ? wx[30] : wx[31]);
                do {
                  Bx(VV[wx[38]].push(VV[wx[36]] & wx[11]), VV[wx[36]] >>= wx[10], VV[wx[37]] -= wx[10])
                } while (VV[wx[37]] > wx[6]);
                VV[wx[77]] = -wx[0]
              } return VV[wx[77]] > -wx[0] && VV[wx[38]].push((VV[wx[36]] | VV[wx[77]] << VV[wx[37]]) & wx[11]), vx(VV[wx[38]])
        }

        function pV(VV) {
          return typeof Oe[VV] === wx[15] ? Oe[VV] = yV(Vx[VV]) : Oe[VV]
        }
        const QV = xV[pV(162)](wx[38]),
          nV = Ue(JV) ? UV[wx[128]][pV(163)](pe(JV, QV)) : QV;
        return function(VV) {
          var eV, xV, JV, UV, yV;
          const pV = null === (eV = VV.meta) || void 0 === eV ? void 0 : eV.formatVersion;
          if (!(0, Ae.i)(pV)) throw new Error(`Unsupported recording format version: ${pV}`);
          if (!Array.isArray(VV.initialChunks) || !Array.isArray(VV.ticks)) throw new Error("Recording is missing initialChunks or ticks");
          for (const YV of VV.ticks)
            if (!Array.isArray(YV.structuralEvents) || !Array.isArray(YV.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
          const QV = {
            ...VV.meta
          };
          return QV.formatVersion = Pe.e, (0, YV.J)(QV.variation) && delete QV.variation, {
            meta: QV,
            initialChunks: VV.initialChunks.map((VV => {
              var eV;
              return {
                chunkPos: VV.chunkPos,
                rle: Xe(VV.rle),
                sharedBlockData: null !== (eV = We("sharedBlockData", VV.sharedBlockData)) && void 0 !== eV ? eV : []
              }
            })),
            ticks: VV.ticks.map(Se),
            editState: {
              cameraKeyframes: null !== (xV = null === (JV = VV.editState) || void 0 === JV ? void 0 : JV.cameraKeyframes) && void 0 !== xV ? xV : [],
              playbackMark: null !== (UV = null === (yV = VV.editState) || void 0 === yV ? void 0 : yV.playbackMark) && void 0 !== UV ? UV : null
            }
          }
        }(Je(JV)[pV(164)](nV))
      }
      throw new Pe[wx[44]](JV)
    })
  },
  38159: (VV, eV, xV) => {
    xV.d(eV, {
      B: () => pV,
      c: () => yV,
      e: () => YV,
      i: () => UV,
      j: () => ZV,
      m: () => vV,
      o: () => nV,
      s: () => rV,
      v: () => QV,
      y: () => wV
    });
    var JV = xV(38161);
    const YV = 9;
    class UV extends Error {
      constructor(VV) {
        super(`Unsupported recording format: header ${null!==VV&&void 0!==VV?VV:"missing"}, reading v${JV.c.join(", v")}`), this.older = void 0, this.older = (0, JV.e)(VV)
      }
    }
    const yV = 100,
      pV = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips"],
      QV = ["skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride"],
      nV = ["itemName", "amount", "position", "size", "attributes"],
      wV = ["opacity", "zIndex", "overlayColour", "canSee", "meshScaling", "nameTagInfo", "multilineTextBox", "hasPriorityNametag", "ranks", "nameColour", "_isAlive", "_invisibleEffect", "_invincible", "killfeedColour", "hideNameSeed", "_glowingEffect", "lockHeadToBody"],
      ZV = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading", "armour", "YL", "playerCustomisations", "variation", "metaInfo", "soundName", "volume", "refDistance", "maxHearDist", "rate", "ridingVehicleEId", "leaderboardTop", "meshKind", "meshOpts", "aiState"],
      vV = ["selectedSlotIndex", "slots"],
      rV = ["_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"]
  },
  38156: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => ZV,
      g: () => kV,
      i: () => QV,
      k: () => yV,
      l: () => pV,
      p: () => nV
    });
    var JV = xV(375),
      YV = xV(32);

    function UV(VV) {
      return null === VV || void 0 === VV ? null : "string" === typeof VV ? VV : null
    }

    function yV(VV, eV) {
      return JSON.stringify(VV) === JSON.stringify(eV)
    }

    function pV(VV) {
      const eV = [];
      for (const xV of Object.keys(VV)) {
        const JV = VV[xV];
        for (const VV of Object.keys(JV)) eV.push({
          bx: xV,
          name: VV,
          ...JV[VV]
        })
      }
      return eV
    }

    function QV(VV) {
      const eV = {};
      for (const UV of VV) {
        var xV, JV, YV;
        eV[UV.bx] || (eV[UV.bx] = {}), eV[UV.bx][UV.name] = {
          icon: UV.icon,
          level: UV.level,
          displayName: null !== (xV = UV.displayName) && void 0 !== xV ? xV : null,
          endTick: null !== (JV = UV.endTick) && void 0 !== JV ? JV : null,
          showInNametag: null === (YV = UV.showInNametag) || void 0 === YV || YV
        }
      }
      return eV
    }

    function nV(VV, eV) {
      const xV = {};
      for (const YV of Object.keys(VV)) {
        const UV = {};
        for (const xV of Object.keys(VV[YV])) {
          const JV = VV[YV][xV];
          null !== JV.endTick && JV.endTick < eV || (UV[xV] = {
            ...JV,
            endTick: null === JV.endTick ? null : JV.endTick - eV
          })
        }(0, JV.xc)(UV) || (xV[YV] = UV)
      }
      return xV
    }

    function wV(VV, eV, xV) {
      if (null !== VV) return Math.max(0, 1e3 * (VV - eV) / xV)
    }
    class ZV {
      constructor() {
        this.tracked = {}
      }
      clear() {
        this.tracked = {}
      }
      seedFromClient(VV, eV) {
        this.clear();
        const xV = Date.now();
        for (const pV of VV.iterateEntityIds()) {
          const QV = VV.getEffects(pV);
          if ((0, JV.xc)(QV)) continue;
          const nV = eV(pV);
          for (const VV of Object.keys(QV)) {
            var YV, yV;
            const eV = QV[VV];
            this.upsert(nV, VV, {
              icon: eV.icon,
              level: eV.level,
              displayName: UV(eV.displayName),
              showInNametag: null === (YV = eV.showInNametag) || void 0 === YV || YV,
              endTime: void 0 !== eV.duration && null !== eV.duration ? (null !== (yV = eV.appliedAt) && void 0 !== yV ? yV : xV) + eV.duration : null
            })
          }
        }
      }
      upsert(VV, eV, xV) {
        this.tracked[VV] || (this.tracked[VV] = {}), this.tracked[VV][eV] = xV
      }
      remove(VV, eV) {
        const xV = this.tracked[VV];
        xV && (delete xV[eV], (0, JV.xc)(xV) && delete this.tracked[VV])
      }
      handleUpdate(VV) {
        var eV;
        0 !== VV.duration ? this.upsert(VV.bx, VV.name, {
          icon: VV.icon,
          level: VV.level,
          displayName: UV(VV.displayName),
          showInNametag: null === (eV = VV.showInNametag) || void 0 === eV || eV,
          endTime: void 0 !== VV.duration && null !== VV.duration ? Date.now() + VV.duration : null
        }) : this.remove(VV.bx, VV.name)
      }
      handleRemove(VV, eV) {
        this.remove(VV, eV)
      }
      sample(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        const YV = {},
          UV = 1e3 / eV;
        for (const yV of Object.keys(this.tracked)) {
          const eV = this.tracked[yV],
            pV = {};
          for (const JV of Object.keys(eV)) {
            const YV = eV[JV];
            let QV = null;
            if (null !== YV.endTime) {
              const eV = Math.max(0, YV.endTime - xV);
              if (0 === eV) {
                this.remove(yV, JV);
                continue
              }
              QV = VV + Math.ceil(eV / UV)
            }
            pV[JV] = {
              icon: YV.icon,
              level: YV.level,
              displayName: YV.displayName,
              endTick: QV,
              showInNametag: YV.showInNametag
            }
          }(0, JV.xc)(pV) || (YV[yV] = pV)
        }
        return YV
      }
    }

    function vV(VV, eV, xV, JV) {
      VV.hasEntity(eV) ? VV.updateEffect(eV, xV, JV) : function(VV, eV, xV) {
        YV.h.QZ("EffectUpdate", {
          bx: VV,
          name: eV,
          ...xV
        }, !0)
      }(eV, xV, JV)
    }

    function rV(VV, eV, xV) {
      VV.hasEntity(eV) ? VV.removeEffect(eV, xV) : function(VV, eV) {
        YV.h.QZ("RemoveEffect", {
          bx: VV,
          name: eV
        }, !0)
      }(eV, xV)
    }

    function kV(VV, eV, xV, JV, YV, UV, yV) {
      for (const wV of Object.keys(xV))
        for (const UV of Object.keys(xV[wV])) {
          var pV;
          null !== (pV = eV[wV]) && void 0 !== pV && pV[UV] || (rV(VV, wV, UV), JV && wV === JV && String(YV) !== String(wV) && rV(VV, YV, UV))
        }
      for (const bV of Object.keys(eV))
        for (const pV of Object.keys(eV[bV])) {
          var QV, nV;
          const EV = eV[bV][pV],
            BV = wV(EV.endTick, UV, yV);
          if (0 === BV) {
            rV(VV, bV, pV), JV && bV === JV && String(YV) !== String(bV) && rV(VV, YV, pV);
            continue
          }
          const jV = null === (QV = xV[bV]) || void 0 === QV ? void 0 : QV[pV],
            qV = jV && (kV = EV, (ZV = jV).icon === kV.icon && ZV.level === kV.level && ZV.displayName === kV.displayName && ZV.endTick === kV.endTick && ZV.showInNametag === kV.showInNametag),
            tV = {
              icon: EV.icon,
              level: EV.level,
              displayName: null !== (nV = EV.displayName) && void 0 !== nV ? nV : void 0,
              duration: BV,
              showInNametag: EV.showInNametag
            };
          qV || vV(VV, bV, pV, tV), JV && bV === JV && vV(VV, YV, pV, {
            ...tV,
            showInNametag: !1
          })
        }
      var ZV, kV
    }
  },
  38140: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => wV,
      g: () => nV,
      j: () => vV,
      l: () => pV,
      o: () => ZV
    });
    var JV = xV(38134),
      YV = xV(38149),
      UV = xV(335);
    const yV = {
      description: "Bloxd Replay",
      accept: {
        [JV.f]: JV.e
      }
    };

    function pV() {
      return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker && !(0, UV.b)()
    }

    function QV(VV) {
      return VV instanceof DOMException && "AbortError" === VV.name
    }
    async function nV() {
      try {
        const [VV] = await window.showOpenFilePicker({
          multiple: !1,
          types: [yV]
        }), eV = await VV.getFile();
        return {
          handle: VV,
          bytes: new Uint8Array(await eV.arrayBuffer())
        }
      } catch (VV) {
        if (QV(VV)) return null;
        throw VV
      }
    }
    async function wV(VV) {
      if (VV && await async function(VV) {
          const eV = {
            mode: "readwrite"
          };
          return "granted" === await VV.queryPermission(eV) || "granted" === await VV.requestPermission(eV)
        }(VV)) return VV;
      try {
        return await window.showSaveFilePicker({
          suggestedName: (0, JV.h)(),
          types: [yV]
        })
      } catch (eV) {
        if (QV(eV)) return null;
        throw eV
      }
    }
    async function ZV(VV, eV) {
      const xV = await VV.createWritable();
      await xV.write(new Blob([eV], {
        type: JV.f
      })), await xV.close()
    }

    function vV(VV) {
      return (0, JV.g)((0, YV.f)(VV))
    }
  },
  37607: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => ZV
    });
    var JV = xV(27),
      YV = xV(99),
      UV = xV(40),
      yV = xV(2617),
      pV = xV(3907),
      QV = xV(7216);
    const nV = "shaderPackListingCheckedAt",
      wV = 36e5;

    function ZV() {
      const {
        canUseShaderPacks: VV
      } = YV.featureFlags.settings;
      var eV, ZV;
      (0, pV.h)(VV) && !(0, pV.f)(VV) && (eV = UV.m.getItem(nV), ZV = Date.now(), "number" !== typeof eV || ZV < eV || ZV - eV >= wV) && (0, yV.d)((() => {
        (async function() {
          if ("landingPage" !== JV.b.get("gameState")) return;
          const VV = await (0, QV.f)();
          if (void 0 === (null === VV || void 0 === VV ? void 0 : VV.listing)) return;
          UV.m.setItem(nV, Date.now());
          const {
            followListingUpdates: eV
          } = await Promise.all([xV.e(89), xV.e(149), xV.e(145)]).then((() => xV(44212)));
          await eV(VV, VV.listing) || UV.m.removeItem(nV)
        })().catch((VV => {
          console.error("Failed to check the shader pack listing for an update", VV)
        }))
      }))
    }
  },
  9545: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => pV,
      e: () => YV,
      i: () => UV,
      j: () => yV
    });
    let JV = null;

    function YV(VV, eV) {
      return `${eV}\n${null!==VV&&void 0!==VV?VV:""}`
    }

    function UV(VV) {
      JV = VV
    }

    function yV(VV) {
      const eV = JV;
      return JV = null, null !== eV && eV.key === VV ? eV.settled : null
    }

    function pV(VV, eV, xV, JV) {
      let YV = !1;
      null !== eV && setTimeout((() => {
        JV() && !YV && eV()
      }), 0), VV.then((VV => {
        YV = !0, xV(VV)
      }))
    }
  },
  37636: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => QV
    });
    var JV = xV(364),
      YV = xV(27),
      UV = xV(35093),
      yV = xV(1725),
      pV = xV(2116);

    function QV(VV, eV) {
      var xV, QV, nV;
      if (!YV.b.get("isKeydownEnabled") || VV.repeat) return;
      const wV = VV.code;
      "Escape" === VV.key ? (0, yV.i)(VV) : null !== (xV = pV.t.OpenSettings) && void 0 !== xV && xV.includes(wV) ? (0, yV.t)(VV, JV.q.SETTINGS) : null !== (QV = pV.t.OpenCharacterCustomization) && void 0 !== QV && QV.includes(wV) ? (0, UV.e)() || (0, yV.t)(VV, JV.q.CUSTOMISATION, eV()) : null !== (nV = pV.t.ShowDebugOverlay) && void 0 !== nV && nV.includes(wV) && YV.b.set({
        showDebugOverlay: !YV.b.get("showDebugOverlay")
      })
    }
  },
  37610: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => DV,
      c: () => oV
    });
    var JV = xV(657),
      YV = xV(1260),
      UV = xV(165);
    const yV = "cf-";

    function pV(VV) {
      return `${yV}${VV}`
    }

    function QV(VV) {
      return VV.startsWith(pV("game-server-"))
    }

    function nV(VV) {
      return /^game-server-[a-z0-9-]+\.bloxd\.io$/i.test(VV)
    }
    var wV = xV(1276),
      ZV = xV(1252),
      vV = xV(32),
      rV = xV(1241),
      kV = xV(1868),
      bV = xV(1913),
      EV = xV(3305),
      BV = xV(1382),
      jV = xV(1391),
      qV = xV(1603),
      tV = xV(1230),
      FV = xV(37612),
      TV = xV(40),
      PV = xV(138),
      AV = xV(1922),
      NV = xV(37633);
    const XV = Date.UTC(2026, 11, 8),
      MV = new Set(["seat_lost", "socket_unopened", "socket_timeout_unopened"]),
      zV = "gameServerRoute";
    async function GV(VV) {
      if (!VV.ok) {
        const eV = await VV.text().catch((() => ""));
        return 403 === VV.status && "ipv6_unsupported" === eV ? "ipv6Refused" : "other"
      }
      const eV = await VV.json().catch((() => null));
      return "object" === typeof eV && null !== eV && Number.isFinite(eV.version) ? "ours" : "other"
    }
    const WV = new class {
      constructor(VV) {
        this.deps = VV, this.autoRetriesLeft = 1, this.armReported = !1, this.pageArm = null, this.aliasFailedAt = null
      }
      hostFor(VV) {
        return this.deps.enabled && nV(VV) && "cloudflare" === this.heldRoute() ? pV(VV) : VV
      }
      async afterJoinFailed(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if (!this.deps.enabled) return null;
        const JV = new URL(VV).hostname;
        return QV(JV) ? await this.afterAliasJoinFailed(JV, eV, xV) : void 0 !== eV.gameServerUnreachable && this.checksJoinsTo(JV) && this.settle(await this.check(JV)) ? "reroute" : null
      }
      takeAutoRetry() {
        return !(this.autoRetriesLeft <= 0) && (this.autoRetriesLeft--, !0)
      }
      async waitToRetry(VV) {
        const eV = 1e3 + 2e3 * this.deps.random();
        return await this.deps.sleep(eV, VV).then((() => !0), (() => !1))
      }
      afterAutoRetryJoined(VV) {
        this.deps.enabled && this.deps.EZ("game_server_route", "cf_retry_joined", VV)
      }
      afterAutoRetryFailed(VV) {
        if (!this.deps.enabled) return;
        if (null === VV) return void this.deps.EZ("game_server_route", "cf_retry_failed:matchmake", 0);
        const {
          joinFailure: eV
        } = VV;
        void 0 === eV ? this.deps.EZ("game_server_route", "cf_retry_failed:other", 0) : "refused" === eV.at ? this.deps.EZ("game_server_route", "cf_retry_failed:refused", eV.code) : this.deps.EZ("game_server_route", `cf_retry_failed:${eV.at}`, eV.code)
      }
      afterMatchmade(VV) {
        var eV;
        if (!this.deps.enabled) return;
        const xV = null === (eV = this.stored()) || void 0 === eV ? void 0 : eV.recoveryArm;
        if (void 0 !== xV && null !== this.heldRoute() && this.reportArm(xV), null === this.aliasFailedAt) return;
        const JV = QV(new URL(VV).hostname);
        this.deps.EZ("game_server_route", JV ? "manual_retry_cf" : "manual_retry_direct", this.deps.now() - this.aliasFailedAt), this.aliasFailedAt = null
      }
      async checkStalledJoin(VV, eV, xV) {
        const JV = new URL(VV).hostname;
        if (!this.deps.enabled || !this.checksJoinsTo(JV) || !await this.deps.seatLegs.whenSlow(eV)) return null;
        const YV = this.deps.seatLegs.answered,
          UV = await this.check(JV);
        return xV() ? this.settle(UV) ? "blocked" : "reported" : "blocked" !== UV.outcome || eV.aborted || this.deps.seatLegs.answered !== YV ? null : (this.settle(UV), "blocked")
      }
      afterAliasJoinLeft(VV) {
        this.deps.enabled && (this.reportArm(), this.deps.EZ("game_server_route", "cf_join_left", VV))
      }
      afterJoined(VV) {
        if (!this.deps.enabled) return;
        this.aliasFailedAt = null;
        const eV = new URL(VV).hostname,
          xV = QV(eV);
        if (xV) this.reportArm(), this.deps.EZ("game_server_route", "cf_join", 0);
        else if (!nV(eV) || this.deps.random() >= .01) return;
        const JV = xV ? eV.slice(yV.length) : eV;
        this.deps.delay(2e4).then((async () => {
          await this.reportRtt(JV, "direct", "direct_failed"), await this.reportRtt(pV(JV), "cf", "cf_failed")
        }))
      }
      async afterAliasJoinFailed(VV, eV, xV) {
        let {
          gameServerUnreachable: JV,
          joinFailure: YV
        } = eV;
        if (void 0 === YV) return null;
        if ("refused" === YV.at) return this.reportArm(), this.deps.EZ("game_server_route", "cf_join_refused", YV.code), null;
        const UV = this.recoveryArm();
        if (this.reportArm(UV), this.deps.EZ("game_server_route", `cf_join_failed:${YV.at}`, YV.code), null !== xV && this.deps.EZ("game_server_route", "cf_failed_since_route", xV), this.aliasFailedAt = this.deps.now(), void 0 === JV) return null;
        const yV = this.stored();
        return "cloudflare" !== (null === yV || void 0 === yV ? void 0 : yV.route) || "on" !== UV && yV.aliasFailedOnce || "ours" !== (await this.probeHost(VV)).answer ? (this.store({
          route: "direct",
          until: this.deps.now() + 36e5
        }), null) : "holdout" === UV ? (this.store({
          ...yV,
          aliasFailedOnce: !0
        }), null) : "cloudflare" === this.heldRoute() && MV.has(YV.at) ? "retry" : null
      }
      recoveryArm() {
        if (this.deps.now() >= XV) return "on";
        const VV = this.stored();
        return void 0 !== (null === VV || void 0 === VV ? void 0 : VV.recoveryArm) ? VV.recoveryArm : (this.pageArm ??= 100 * this.deps.random() < 20 ? "holdout" : "on", null !== VV && this.store(VV), this.pageArm)
      }
      reportArm(VV) {
        this.armReported || this.deps.now() >= XV || (this.armReported = !0, this.deps.EZ("game_server_route", "holdout" === (null !== VV && void 0 !== VV ? VV : this.recoveryArm()) ? "alias_recovery_holdout" : "alias_recovery_on", 0))
      }
      checksJoinsTo(VV) {
        return nV(VV) && "direct" !== this.heldRoute()
      }
      settle(VV) {
        let {
          outcome: eV,
          cfMs: xV
        } = VV;
        return this.deps.EZ("game_server_route", eV, xV), "blocked" === eV && (this.store({
          route: "cloudflare",
          until: this.deps.now() + 1728e5
        }), !0)
      }
      async check(VV) {
        const eV = this.probeHost(pV(VV));
        if ("none" !== (await this.probeHost(VV)).answer) return {
          outcome: "direct_reachable",
          cfMs: 0
        };
        const {
          answer: xV,
          ms: JV
        } = await eV;
        return "ours" !== xV && "ipv6Refused" !== xV ? {
          outcome: "cf_unreachable",
          cfMs: 0
        } : "none" !== (await this.probeHost(VV)).answer ? {
          outcome: "direct_reachable",
          cfMs: JV
        } : {
          outcome: "ipv6Refused" === xV ? "blocked_ipv6" : "blocked",
          cfMs: JV
        }
      }
      async reportRtt(VV, eV, xV) {
        const JV = "ours" === (await this.probeHost(VV)).answer ? await this.probeHost(VV) : null;
        "ours" === (null === JV || void 0 === JV ? void 0 : JV.answer) ? this.deps.EZ("game_server_rtt", eV, JV.ms): this.deps.EZ("game_server_rtt", xV, 0)
      }
      probeHost(VV) {
        return this.deps.probe(`https://${VV}/version`, 8e3)
      }
      stored() {
        return function(VV) {
          if ("object" !== typeof VV || null === VV) return null;
          const {
            route: eV,
            until: xV,
            aliasFailedOnce: JV,
            recoveryArm: YV
          } = VV;
          return "cloudflare" !== eV && "direct" !== eV || "number" !== typeof xV ? null : {
            route: eV,
            until: xV,
            ...!0 === JV ? {
              aliasFailedOnce: JV
            } : {},
            ..."on" === YV || "holdout" === YV ? {
              recoveryArm: YV
            } : {}
          }
        }(this.deps.storage.getItem(zV))
      }
      heldRoute() {
        const VV = this.stored();
        return null !== VV && VV.until > this.deps.now() ? VV.route : null
      }
      store(VV) {
        var eV, xV, JV, YV;
        const UV = null !== (eV = null !== (xV = null !== (JV = VV.recoveryArm) && void 0 !== JV ? JV : null === (YV = this.stored()) || void 0 === YV ? void 0 : YV.recoveryArm) && void 0 !== xV ? xV : this.pageArm) && void 0 !== eV ? eV : void 0;
        this.deps.storage.setItem(zV, void 0 === UV ? VV : {
          ...VV,
          recoveryArm: UV
        })
      }
    }({
      storage: TV.m,
      probe: async function(VV, eV) {
        const xV = performance.now(),
          JV = await (0, rV.p)(VV, {
            cache: "no-store"
          }, eV, (async VV => {
            const eV = Math.round(performance.now() - xV);
            return {
              answer: await GV(VV),
              ms: eV
            }
          }));
        return null !== JV && void 0 !== JV ? JV : {
          answer: "none",
          ms: 0
        }
      },
      EZ: kV.w,
      enabled: !(0, PV.isDiscordClient)(),
      now: Date.now,
      random: Math.random,
      delay: VV => new Promise((eV => {
        setTimeout(eV, VV)
      })),
      sleep: AV.d,
      seatLegs: NV.f
    });
    var RV = xV(1817),
      gV = xV(9545);

    function DV(VV) {
      return async (eV, xV, yV, pV, nV) => {
        let ZV, qV = performance.now();
        if ((0, JV.J)(yV)) {
          if (nV.aborted) return CV();
          const VV = eV instanceof YV.i ? null : (0, gV.j)((0, gV.e)(eV, xV));
          let JV = await (null !== VV && void 0 !== VV ? VV : oV(eV, xV, pV));
          if (null !== VV && performance.now() - JV.at > aV && !nV.aborted) {
            const VV = await oV(eV, xV, pV);
            VV.result.isError() && !JV.result.isError() || (JV = VV)
          }
          const UV = JV.result;
          if (qV = JV.at, nV.aborted || EV.d.matchmakingEnded(UV.isError() ? null : JV.at), UV.isError()) {
            const VV = UV.asError();
            return console.log("Join room did not succeed, reason:", VV.message), VV.forward()
          }
          ZV = UV.getValue(), WV.afterMatchmade(ZV.endpoint)
        } else {
          EV.d.skipPlayWait();
          const VV = hV(yV.replace("https://", "").replace("http://", ""));
          if (VV.isError()) return VV.asError().forward();
          ZV = {
            endpoint: VV.getValue(),
            gameNameWithVariation: xV,
            lobbyName: eV instanceof YV.i ? eV.getLobbyName() : eV
          }
        }
        if (nV.aborted) return CV();
        console.log(`Connecting to ${ZV.gameNameWithVariation} in lobby ${ZV.lobbyName} on game server ${ZV.endpoint}`), vV.h.QZ("matchmakeAndPlayStepCompleted", {
          step: UV.i.REQUEST_TO_MATCHMAKING,
          totalSubSteps: 1
        }), (0, kV.i)(), bV.b.markGameLoadStart((0, RV.e)()), (0, jV.q)({
          websocketUrl: ZV.endpoint,
          gameNameWithVariation: ZV.gameNameWithVariation,
          lobbyName: ZV.lobbyName
        }), vV.h.QZ("loadingScreenState", "loadingPage:loadingGame");
        const tV = async () => {
          const VV = await async function(VV, eV, xV, JV) {
            const YV = await cV(VV, eV, xV);
            if (!YV.isError() && !JV.aborted) {
              const {
                endpoint: VV,
                gameNameWithVariation: eV,
                lobbyName: xV
              } = YV.getValue();
              (0, jV.q)({
                websocketUrl: VV,
                gameNameWithVariation: eV,
                lobbyName: xV
              })
            }
            return YV
          }(eV, xV, pV, nV);
          return VV.isError() || (ZV = VV.getValue(), qV = performance.now()), VV
        }, FV = !(0, JV.J)(yV), TV = eV => VV({
          place: ZV,
          userContext: pV,
          direct: FV,
          matchedAt: qV,
          rematch: tV
        }, eV), PV = () => QV(new URL(ZV.endpoint).hostname), AV = PV() ? performance.now() : null, NV = FV ? {
          result: await TV(nV),
          blockedAt: null,
          failureChecked: !1
        } : await async function(VV, eV, xV) {
          const JV = new rV.c(xV),
            YV = new AbortController;
          let UV = null,
            yV = !1,
            pV = null;
          const QV = WV.checkStalledJoin(VV, YV.signal, (() => yV)).then((VV => {
            pV = VV, "blocked" === VV && (UV = performance.now(), JV.controller.abort())
          }));
          try {
            const VV = await eV(JV.signal);
            return yV = VV.isError() && void 0 !== VV.asError().debugResult.gameServerUnreachable, YV.abort(), yV && await QV, {
              result: VV,
              blockedAt: UV,
              failureChecked: "reported" === pV
            }
          } finally {
            YV.abort(), JV.unfollow()
          }
        }(ZV.endpoint, TV, nV);
        let XV = null !== AV && void 0 !== AV ? AV : NV.blockedAt,
          MV = NV.result;
        const zV = () => null === XV ? null : performance.now() - XV,
          GV = MV.isError() && !0 === MV.asError().debugResult.rematch;
        let DV = null;
        if (!MV.isError() || FV || nV.aborted || GV || null !== NV.blockedAt || NV.failureChecked || (DV = await WV.afterJoinFailed(ZV.endpoint, MV.asError().debugResult, zV())), MV.isError() && !FV && ("reroute" === DV || !nV.aborted && (GV || null !== NV.blockedAt))) {
          if (GV || (XV ??= performance.now(), vV.h.QZ("gameServerRouteSwitched")), nV.aborted) return iV(XV), CV();
          console.log("Matchmaking again");
          const VV = await tV();
          if (VV.isError()) return VV.asError().forward();
          if (nV.aborted) return iV(XV), CV();
          MV = await TV(nV), DV = null, !MV.isError() || nV.aborted || GV && !PV() || (DV = await WV.afterJoinFailed(ZV.endpoint, MV.asError().debugResult, zV()))
        }
        if (MV.isError() && "retry" === DV && !nV.aborted && WV.takeAutoRetry()) {
          if (!await WV.waitToRetry(nV)) return CV();
          console.log("Joining through Cloudflare again");
          const VV = await tV();
          if (nV.aborted) return CV();
          if (VV.isError()) return WV.afterAutoRetryFailed(null), MV.asError().forward();
          if (MV = await TV(nV), MV.isError() && !nV.aborted) {
            const VV = MV.asError().debugResult;
            await WV.afterJoinFailed(ZV.endpoint, VV, null), WV.afterAutoRetryFailed(VV)
          } else if (!MV.isError()) {
            var lV;
            WV.afterAutoRetryJoined(null !== (lV = zV()) && void 0 !== lV ? lV : 0)
          }
        }
        return MV.isError() ? (!0 === MV.asError().debugResult.pJ && nV.aborted && iV(XV), MV.asError().forward()) : (WV.afterJoined(ZV.endpoint), vV.h.QZ("joinedGame", {
          gameNameWithVariation: ZV.gameNameWithVariation,
          lobbyName: ZV.lobbyName
        }), (0, BV.S)(), window.gtag ? window.gtag("event", "conversion", {
          send_to: "AW-16469618203/ipUBCJKWoJUZEJvcqa09"
        }) : console.error("window.gtag not defined"), wV.e.value({
          gameNameWithVariation: ZV.gameNameWithVariation,
          lobbyName: ZV.lobbyName
        }))
      }
    }

    function iV(VV) {
      null !== VV && WV.afterAliasJoinLeft(performance.now() - VV)
    }

    function CV() {
      return wV.e.errorWithCode("Left the game while it loaded", UV.i.REQUEST_TO_MATCHMAKING, {
        severity: "low",
        pJ: !0
      })
    }
    setTimeout((() => {
      window.initialD ? Date.now = window.initialD : console.error("window.initialD not defined")
    }), 3e3);
    const aV = 1e4;

    function oV(VV, eV, xV) {
      return cV(VV, eV, xV).then((VV => ({
        result: VV,
        at: performance.now()
      })))
    }
    async function cV(VV, eV, xV) {
      return (0, JV.J)(VV) || VV instanceof YV.i || !(VV.length > ZV.L) ? await qV.b.matchmakePlayer(xV, VV, eV, (0, FV.b)()).then((VV => {
        if (!1 === VV.succeeded) return wV.e.errorWithCode(VV.failReason, UV.i.REQUEST_TO_MATCHMAKING, {
          severity: "low"
        });
        const {
          gameServerHost: eV,
          lobbyName: xV,
          gameNameWithVariation: JV
        } = VV, YV = hV(WV.hostFor(eV));
        return YV.isError() ? YV.asError().forward() : wV.e.value({
          endpoint: YV.getValue(),
          gameNameWithVariation: JV,
          lobbyName: xV
        })
      })).catch((VV => (console.error("Bad response from the matchmaking server:", VV), wV.e.errorWithCode(VV.toString(), UV.i.REQUEST_TO_MATCHMAKING, {
        error: VV,
        severity: "medium"
      })))) : (console.error("Invalid lobby ID:", VV), wV.e.errorWithCode("This lobby link's name is too long. Ask for a new link.", UV.i.REQUEST_TO_MATCHMAKING, {
        severity: "low"
      }))
    }

    function hV(VV) {
      const eV = tV.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(VV);
      return eV.isError() ? wV.e.errorWithCode(eV.asError().message, UV.i.CONNECT_TO_GAME_SERVER, {
        severity: "medium"
      }) : wV.e.value(eV.getValue())
    }
    window.leaveGame = () => {
      (0, jV.k)("/")
    }
  },
  9396: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => yV
    });
    var JV = xV(9403),
      YV = xV(657),
      UV = xV(138);

    function yV(VV) {
      var eV, xV;
      if ((0, YV.J)(VV)) return !0;
      const yV = null !== (eV = null === (xV = UV.siteUsedData[UV.siteUsed]) || void 0 === xV ? void 0 : xV.adConfig.showRewardedAds) && void 0 !== eV && eV;
      for (const YV in VV) {
        const eV = VV[YV];
        if (null !== eV && void 0 !== eV && eV.items)
          for (const VV in eV.items)
            if ((0, JV.p)(eV.items[VV], yV)) return !1
      }
      return !0
    }
  },
  37731: (VV, eV, xV) => {
    function JV(VV, eV) {
      for (let xV = 0; xV < VV.length; xV++)
        if (VV[xV].identifier === eV) return VV[xV];
      return null
    }

    function YV(VV, eV) {
      return null !== JV(VV, eV)
    }
    xV.d(eV, {
      d: () => JV,
      f: () => YV
    })
  },
  37740: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => wV,
      f: () => vV,
      j: () => BV,
      l: () => nV
    });
    var JV = xV(27),
      YV = xV(2660),
      UV = xV(2663),
      yV = xV(2665),
      pV = xV(2752),
      QV = xV(32);

    function nV(VV, eV) {
      return (!(0, yV.b)() || 0 === VV && 0 === eV) && (0, UV.x)(YV.i.Joystick, 0, VV, eV, 0)
    }
    const wV = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function ZV(VV) {
      return VV.classList.contains("TouchKeyHit") && rV() ? null : VV.firstElementChild
    }

    function vV(VV) {
      return VV.classList.contains("TouchKeyHit") && !VV.classList.contains("CanvasZone") ? {
        whole: !rV(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: kV(ZV(VV))
      }
    }

    function rV() {
      return document.documentElement.classList.contains(pV.h)
    }

    function kV(VV) {
      return !(VV instanceof HTMLElement) || VV.offsetWidth <= 0 || VV.offsetHeight <= 0 ? null : {
        width: VV.offsetWidth,
        height: VV.offsetHeight
      }
    }

    function bV(VV, eV) {
      const xV = VV => Math.min(65535, Math.round(4 * VV));
      return (xV(VV) | xV(eV) << 16) >>> 0
    }

    function EV(VV) {
      return {
        x: VV.left + VV.width / 2,
        y: VV.top + VV.height / 2,
        radius: Math.min(VV.width, VV.height) / 2
      }
    }
    const BV = new class {
      constructor(VV) {
        this.write = VV, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        eV ? this.elements.set(VV, {
          element: eV,
          hidden: xV
        }) : this.elements.delete(VV), this.measureOne(VV)
      }
      measure() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = VV.left, this.canvasTop = VV.top;
        for (const eV of this.elements.keys()) this.measureOne(eV)
      }
      hitZone(VV, eV) {
        let xV = null,
          JV = 1;
        for (const YV of this.elements.keys()) {
          const UV = this.shown(YV);
          if (!UV) continue;
          const {
            rect: yV,
            element: pV
          } = UV, QV = EV(yV), nV = Math.max(0, yV.width / 2 - QV.radius), wV = Math.max(0, yV.height / 2 - QV.radius), vV = Math.max(0, Math.abs(VV - QV.x) - nV), rV = Math.max(0, Math.abs(eV - QV.y) - wV), bV = pV.firstElementChild;
          let BV = Math.hypot(vV, rV) / QV.radius;
          const jV = kV(ZV(pV));
          jV && (BV = Math.min(BV, Math.max(2 * Math.abs(VV - QV.x) / jV.width, 2 * Math.abs(eV - QV.y) / jV.height))), BV < JV && (xV = {
            code: YV,
            element: pV,
            key: bV,
            ...QV
          }, JV = BV)
        }
        return xV
      }
      measureOne(VV) {
        const eV = this.shown(VV);
        if (!eV) return void this.write(YV.i.TouchZone, VV, 0, 0, 0);
        const {
          rect: xV,
          element: JV
        } = eV, UV = EV(xV);
        this.write(YV.i.TouchZone, VV, UV.x - this.canvasLeft, UV.y - this.canvasTop, bV(xV.width, xV.height));
        const yV = kV(ZV(JV));
        this.write(YV.i.TouchZone, 256 | VV, 0, 0, yV ? bV(yV.width, yV.height) : 0)
      }
      shown(VV) {
        const eV = this.elements.get(VV),
          xV = JV.b.get("worldPanelHud");
        if (!eV || eV.hidden || "none" === xV) return null;
        const YV = eV.element.getBoundingClientRect();
        return YV.width <= 0 || YV.height <= 0 ? null : {
          rect: YV,
          element: eV.element
        }
      }
    }(UV.x);
    (0, QV.i)(pV.e, (() => {
      BV.measure()
    }))
  },
  38036: (VV, eV, xV) => {
    function JV(VV) {
      return "fetch" === VV || "timeout" === VV || "integrity" === VV ? "download" : "browser"
    }
    xV.d(eV, {
      d: () => YV,
      e: () => yV,
      g: () => QV,
      i: () => pV,
      j: () => JV,
      k: () => UV
    });
    const YV = "https://discord.gg/playbloxd";

    function UV(VV) {
      return "download" === VV ? {
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

    function yV(VV, eV) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: eV ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: VV.code
        },
        discordLink: eV,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function pV() {
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

    function QV(VV, eV, xV) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: xV ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: VV.reason
        },
        discordLink: null === VV.name,
        confirm: eV ? "general:reconnect" : VV.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  38080: (VV, eV, xV) => {
    function JV(VV, eV) {
      return null === VV || null === eV ? VV === eV : VV[0] === eV[0] && VV[1] === eV[1] && VV[2] === eV[2]
    }

    function YV(VV) {
      return [VV[0] + .5, VV[1] + .5, VV[2] + .5]
    }
    xV.d(eV, {
      d: () => YV,
      h: () => JV
    })
  },
  38041: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => QV,
      e: () => pV
    });
    const JV = {
        files: {
          "debugLog.ts": "export function debugLog(message: string): void {\n\tconsole.log(`[debug] ${message}`)\n}\n",
          "index.ts": 'import type { PlayerId } from "@bloxd"\nimport { debugLog } from "./debugLog"\n\nonPlayerJoin = (player: PlayerId) => {\n\tapi.log(`Player ${player} joined - Love from Debug Plugin!`)\n}\n\nexport { debugLog }\n'
        },
        dependencies: [],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  debugLog: () => debugLog\n});\nmodule.exports = __toCommonJS(index_exports);\n\n// world-code-plugin:debugLog.ts\nfunction debugLog(message) {\n  console.log(`[debug] ${message}`);\n}\n\n// world-code-plugin:index.ts\nonPlayerJoin = (player) => {\n  api.log(`Player ${player} joined - Love from Debug Plugin!`);\n};\n',
        types: "declare function debugLog(message: string): void;\n\nexport { debugLog };\n"
      },
      YV = {
        files: {
          "index.ts": 'import type { CustomTextStyling, DialogueText, PlayerId, SpeechVoice } from "@bloxd"\nimport { clearTimeout, setTimeout, TimeoutId } from "@plugins/helpers"\n\n/** Long enough to read most lines once they have appeared. */\nconst DEFAULT_DURATION_MS = 6000\n\nexport type DialogueOpts = {\n\t/** Shown above the line, such as a name. */\n\tspeakerName?: string | CustomTextStyling\n\t/** A preset such as "regular" or "gruff", or every synth parameter. Omit for a silent line. */\n\tvoice?: SpeechVoice\n\t/** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n\tdurationMs?: number\n}\n\nconst hideTimeouts: Record<PlayerId, TimeoutId> = {}\n\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item\'s icon inline\n * @param opts - The speaker\'s name, the voice that reads it out, and how long it stays up\n */\nexport function sayDialogue(playerId: PlayerId, text: DialogueText, opts: DialogueOpts = {}) {\n\tif (hideTimeouts[playerId] !== undefined) {\n\t\tclearTimeout(hideTimeouts[playerId])\n\t\t// Cleared first, so a line said again replays rather than matching the value already set\n\t\tapi.setClientOption(playerId, "dialogue", null)\n\t}\n\tapi.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice })\n\thideTimeouts[playerId] = setTimeout(\n\t\t() => {\n\t\t\tclearDialogue(playerId)\n\t\t},\n\t\topts.durationMs ?? DEFAULT_DURATION_MS,\n\t\tplayerId,\n\t)\n}\n\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\nexport function clearDialogue(playerId: PlayerId) {\n\tif (hideTimeouts[playerId] === undefined) {\n\t\treturn\n\t}\n\tclearTimeout(hideTimeouts[playerId])\n\tdelete hideTimeouts[playerId]\n\tapi.setClientOption(playerId, "dialogue", null)\n}\n\nonPlayerLeave = (playerId: PlayerId) => {\n\tdelete hideTimeouts[playerId]\n}\n'
        },
        dependencies: ["helpers"],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  clearDialogue: () => clearDialogue,\n  sayDialogue: () => sayDialogue\n});\nmodule.exports = __toCommonJS(index_exports);\nvar import_helpers = require("@plugins/helpers");\nvar DEFAULT_DURATION_MS = 6e3;\nvar hideTimeouts = {};\nfunction sayDialogue(playerId, text, opts = {}) {\n  if (hideTimeouts[playerId] !== void 0) {\n    (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n    api.setClientOption(playerId, "dialogue", null);\n  }\n  api.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice });\n  hideTimeouts[playerId] = (0, import_helpers.setTimeout)(\n    () => {\n      clearDialogue(playerId);\n    },\n    opts.durationMs ?? DEFAULT_DURATION_MS,\n    playerId\n  );\n}\nfunction clearDialogue(playerId) {\n  if (hideTimeouts[playerId] === void 0) {\n    return;\n  }\n  (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n  delete hideTimeouts[playerId];\n  api.setClientOption(playerId, "dialogue", null);\n}\nonPlayerLeave = (playerId) => {\n  delete hideTimeouts[playerId];\n};\n',
        types: "import { CustomTextStyling, SpeechVoice, PlayerId, DialogueText } from '@bloxd';\n\ntype DialogueOpts = {\n    /** Shown above the line, such as a name. */\n    speakerName?: string | CustomTextStyling;\n    /** A preset such as \"regular\" or \"gruff\", or every synth parameter. Omit for a silent line. */\n    voice?: SpeechVoice;\n    /** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n    durationMs?: number;\n};\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item's icon inline\n * @param opts - The speaker's name, the voice that reads it out, and how long it stays up\n */\ndeclare function sayDialogue(playerId: PlayerId, text: DialogueText, opts?: DialogueOpts): void;\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\ndeclare function clearDialogue(playerId: PlayerId): void;\n\nexport { clearDialogue, sayDialogue };\nexport type { DialogueOpts };\n"
      },
      UV = {
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
      yV = {
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
      pV = {
        debug: {
          name: "debug",
          specifier: "@plugins/debug",
          sourceVfsPath: "/node_modules/@plugins/debug/index.ts",
          typesVfsPath: "/node_modules/@plugins/debug/index.d.ts",
          files: JV.files,
          dependencies: JV.dependencies,
          bundledSource: JV.bundledSource,
          types: JV.types
        },
        dialogue: {
          name: "dialogue",
          specifier: "@plugins/dialogue",
          sourceVfsPath: "/node_modules/@plugins/dialogue/index.ts",
          typesVfsPath: "/node_modules/@plugins/dialogue/index.d.ts",
          files: YV.files,
          dependencies: YV.dependencies,
          bundledSource: YV.bundledSource,
          types: YV.types
        },
        helpers: {
          name: "helpers",
          specifier: "@plugins/helpers",
          sourceVfsPath: "/node_modules/@plugins/helpers/index.ts",
          typesVfsPath: "/node_modules/@plugins/helpers/index.d.ts",
          files: UV.files,
          dependencies: UV.dependencies,
          bundledSource: UV.bundledSource,
          types: UV.types
        },
        sessionBasedGame: {
          name: "sessionBasedGame",
          specifier: "@plugins/sessionBasedGame",
          sourceVfsPath: "/node_modules/@plugins/sessionBasedGame/index.ts",
          typesVfsPath: "/node_modules/@plugins/sessionBasedGame/index.d.ts",
          files: yV.files,
          dependencies: yV.dependencies,
          bundledSource: yV.bundledSource,
          types: yV.types
        }
      };

    function QV(VV) {
      const eV = [],
        xV = new Set,
        JV = VV => {
          if (xV.has(VV)) return;
          const YV = pV[VV];
          if (YV) {
            xV.add(VV);
            for (const VV of YV.dependencies) JV(VV);
            eV.push(VV)
          }
        };
      for (const YV of VV) JV(YV);
      return eV
    }
  },
  38047: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => QV,
      e: () => pV,
      i: () => yV,
      j: () => UV,
      n: () => nV,
      r: () => wV,
      u: () => kV,
      v: () => rV,
      y: () => vV
    });
    var JV = xV(1269);
    const YV = ["quickjs", "ses"];

    function UV(VV) {
      return YV.includes(VV)
    }

    function yV(VV) {
      return VV === JV.h || VV === JV.j
    }

    function pV(VV, eV) {
      return VV === JV.h && eV === JV.j || VV === JV.j && eV === JV.h
    }

    function QV(VV) {
      const eV = JV.j in VV,
        xV = JV.h in VV;
      return eV && xV ? null : eV ? JV.j : xV ? JV.h : null
    }

    function nV(VV, eV, xV) {
      const JV = `${eV}/`;
      return VV.filter((VV => VV.startsWith(JV))).map((VV => [VV, `${xV}/${VV.slice(JV.length)}`]))
    }

    function wV(VV, eV) {
      let xV = 0;
      for (const [JV, YV] of Object.entries(VV)) JV !== eV && (xV += YV.length);
      return xV
    }
    const ZV = "@plugins/";

    function vV(VV) {
      return `${ZV}${VV}`
    }

    function rV(VV, eV) {
      return `/node_modules/@plugins/${VV}/${eV}`
    }

    function kV(VV) {
      if (!VV.startsWith(ZV)) return null;
      const eV = VV.slice(ZV.length);
      return function(VV) {
        return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(VV)
      }(eV) ? eV : null
    }
  },
  38051: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => pV,
      h: () => YV,
      l: () => yV,
      o: () => QV,
      r: () => UV
    });
    var JV = xV(2688);
    const YV = 5,
      UV = "[SCHEMATIC]",
      yV = 1024e4;

    function pV(VV) {
      return VV.endsWith(".bloxdschem") && (0, JV.p)(VV.slice(0, -11) + ".ts") && VV.length <= 64
    }

    function QV(VV) {
      return Object.fromEntries(Object.keys(VV).map((VV => [VV, UV])))
    }
  },
  5342: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => YV,
      g: () => JV,
      i: () => UV,
      j: () => QV,
      n: () => yV
    });
    const JV = ["sine", "triangle", "square", "sawtooth"],
      YV = 55,
      UV = {
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

    function yV(VV) {
      return "string" !== typeof VV ? VV : Object.hasOwn(UV, VV) ? UV[VV] : null
    }

    function pV(VV, eV, xV) {
      return Math.min(xV, Math.max(eV, VV))
    }

    function QV(VV) {
      const eV = pV(VV.durationMs, 10, 500),
        xV = pV(VV.attackMs, 0, eV),
        {
          intonation: YV
        } = VV;
      return {
        waveform: JV.includes(VV.waveform) ? VV.waveform : "sine",
        pitchHz: pV(VV.pitchHz, 20, 4e3),
        glideSemitones: pV(VV.glideSemitones, -24, 24),
        durationMs: eV,
        attackMs: xV,
        releaseMs: pV(VV.releaseMs, 0, eV - xV),
        lowpassHz: null === VV.lowpassHz ? null : pV(VV.lowpassHz, 20, 2e4),
        volume: pV(VV.volume, 0, 2),
        intonation: {
          variationSemitones: pV(YV.variationSemitones, 0, 6),
          declineSemitones: pV(YV.declineSemitones, 0, 12),
          questionRiseSemitones: pV(YV.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: pV(YV.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: pV(VV.syllableMs, 25, 200)
      }
    }
  },
  9424: () => {},
  10598: VV => {
    VV.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAHklEQVR4nGNY3x/6nxjMQH2Fcyq8/hODaWA11d0IAPvLyX36T0UzAAAAAElFTkSuQmCC"
  },
  18847: VV => {
    VV.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAC4CAYAAADqkK6nAAAAAXNSR0IArs4c6QAAAuxJREFUeJzt1jFOFHEchuEfxpqeaGusuYDhCpbewMbEwmNYmNBwA0quYLgAtaGF2HuBtVpEWHBNXnBXnqeanUzxT+bNtzMDsOl21nhm8eCnYBvd2c6zxzwFT8N9S7WYmfn0am9mZl6+2H2M87DhLi5/zMzM5/Pvy1u3GrJU5FYt1WJm5svB60c+Ctvo49dvy8urliwVuetL5RuKv7bqG8tSkXt+88afFurN+3czM7P/9sPDnIiNcHZy+Nvv06Pjlc9d9fJrqXxT0bu1VHexUE/Tzfd912JdZ6nIrb1UFop1WSpyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIit3ZUZyeHc3Zy+JBn4T9hqcg9X/fB06Pj337vv/2QH4bNs/x3uvn+72OpyO1cu17MzHx6tTczMy9f7P6L87BlLi5/zMzM5/Pvy1s7lorczop7i5mZLwevH/kobKOPX78tL69aslTkVi3Vkm8sbln1DXXzGUtF7r6lWlo8+CnYRne2Y6mAzfcTBsFAqM32XQcAAAAASUVORK5CYII="
  },
  20839: VV => {
    VV.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJUlEQVR4nGMwsIpkIAYz0FThfyjGymcgVSFMEJtCsBjJCgcgeABOGmAZtndiFgAAAABJRU5ErkJggg=="
  },
  20846: VV => {
    VV.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJ0lEQVR4nGMwsIpkIAYzQBn/kTBWMQYsgtgwA+0UMuBTNIgU4g1wAE6xgffL0CuLAAAAAElFTkSuQmCC"
  },
  20852: VV => {
    VV.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJElEQVR4nGMwsIpkIAYzkKrwPxLGKsZAc4UMaJh8hdQPHoIKAboeZhN3YNlSAAAAAElFTkSuQmCC"
  },
  20860: VV => {
    VV.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMUlEQVR4nGMwsIpkIAYzoAn8R8MM2BSiK/qPrJiQov8wxWQrxMkm2USiPUNS8OANcADc3H37DfNNQQAAAABJRU5ErkJggg=="
  },
  20862: VV => {
    VV.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAKElEQVR4nGMwsIpkIAYzIHH+48AMyApxKfoPU0yRQgZsYkNJIcEABwCQU3/5LLo7QwAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);