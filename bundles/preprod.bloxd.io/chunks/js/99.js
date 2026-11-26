export const id = 99;
export const ids = [99];
export const modules = {
  37415: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => FH,
      c: () => jH
    });
    var AH = LH(45),
      rH = LH(1998),
      SH = LH(37424),
      hH = LH.n(SH),
      tH = LH(4951),
      zH = LH(1967),
      CH = LH(1450),
      EH = LH(81),
      XH = LH(101),
      GH = LH(317),
      YH = LH(1038),
      uH = LH.n(YH),
      QH = LH(15),
      WH = LH(1315),
      MH = LH(1659),
      xH = LH(1789),
      vH = LH(1711),
      PH = LH(2075),
      TH = LH(1405),
      UH = LH(2149),
      VH = LH(1390),
      OH = LH(2991),
      bH = LH(37427),
      kH = LH(37442),
      mH = LH(1471),
      oH = LH(2630),
      IH = LH(1123),
      fH = LH(37457);
    var lH = LH(34929),
      KH = LH(1220);
    const cH = ["touchstart", "touchend", "touchcancel"];
    const eH = new class {
      constructor() {
        this.saved = null, this.touchesDown = 0, this.due = !1, this.settled = !1, this.countTouches = HH => {
          this.touchesDown = HH.touches.length, this.due && 0 === this.touchesDown && this.putBack()
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
          for (const HH of cH) window.addEventListener(HH, this.countTouches, {
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
          x: HH,
          y: BH,
          viewportTop: LH,
          viewportLeft: AH
        } = this.saved, rH = window.visualViewport;
        if (window.scrollX === HH && window.scrollY === BH && rH.offsetTop === LH && rH.offsetLeft === AH || window.scrollTo(HH, BH), this.settled) {
          this.saved = null, this.settled = !1;
          for (const HH of cH) window.removeEventListener(HH, this.countTouches, {
            capture: !0
          })
        }
      }
    };
    lH.e.onRelease((() => {
      eH.keyboardSettled()
    }));
    var qH = LH(1225);
    const gH = LH(37461),
      NH = ["enter", "t", "/"];
    let RH = !1;

    function jH() {
      return RH || (0, xH.isTextEntry)(document.activeElement)
    }

    function nH() {
      var HH, BH;
      (0, UH.d)();
      const LH = null !== (HH = null === (BH = (0, TH.c)()) || void 0 === BH ? void 0 : BH.getBoundButton("keyboardChannel")) && void 0 !== HH ? HH : null;
      return LH ? (0, qH.jsx)(PH.d, {
        className: "ChatInputChannelGlyph",
        glyph: LH
      }) : null
    }

    function FH() {
      const {
        t: HH
      } = (0, IH.B)(), {
        isTouchScreen: BH
      } = (0, QH.m)(["isTouchScreen"]), LH = (0, VH.y)(), [SH, YH] = (0, AH.useState)(!1), PH = (0, AH.useRef)(SH), TH = (0, AH.useRef)(null), {
        messages: UH,
        reportedPlayers: cH,
        channel: jH
      } = (0, OH.l)(), FH = (0, AH.useRef)(0), wH = (0, AH.useRef)(""), ZH = (0, AH.useRef)(null);
      var dH;
      dH = ZH, (0, AH.useEffect)((() => {
        if (!(0, EH.isIOS)()) return;
        const HH = dH.current;
        let BH = null;
        const LH = LH => {
            const AH = LH.changedTouches[0];
            BH = "none" === getComputedStyle(HH).pointerEvents ? {
              id: AH.identifier,
              y: AH.clientY
            } : null
          },
          AH = LH => {
            const AH = BH,
              rH = AH && (0, fH.b)(LH.changedTouches, AH.id);
            rH && (LH.preventDefault(), HH.scrollBy({
              top: AH.y - rH.clientY,
              behavior: "instant"
            }), AH.y = rH.clientY)
          };
        return HH.addEventListener("touchstart", LH, {
          passive: !0
        }), HH.addEventListener("touchmove", AH, {
          passive: !1
        }), () => {
          HH.removeEventListener("touchstart", LH), HH.removeEventListener("touchmove", AH)
        }
      }), [dH]);
      const [aH, sH] = (0, AH.useState)(!1), [JH, iH] = (0, AH.useState)(!1), pH = (0, AH.useRef)(aH), yH = (0, AH.useRef)(null), HB = (0, AH.useRef)(!1), BB = (0, AH.useRef)(null), LB = (0, AH.useRef)(null), AB = (0, AH.useRef)(null), rB = (0, AH.useRef)(zB);
      rB.current = zB;
      const SB = (0, oH.g)();

      function hB() {
        PH.current = !1, YH(!1), LB.current.blur()
      }

      function tB(HH) {
        pH.current = HH, sH(HH)
      }

      function zB() {
        const HH = LB.current.value;
        LB.current.value = "", CB(HH)
      }

      function CB(HH) {
        (0, OH.j)(HH), FH.current = 0, tB(!1)
      }

      function EB(HH, BH) {
        0 === FH.current && (wH.current = LB.current.value);
        const LH = (0, OH.f)(FH.current + HH, BH);
        FH.current = LH.stepsBack, LB.current.value = 0 === LH.stepsBack ? wH.current : LH.text, setTimeout((() => {
          LB.current && LB.current.setSelectionRange(-1, -1)
        }), 0)
      }

      function XB() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        ZH.current && (!HH && pH.current || (ZH.current.scrollTop = 1e5))
      }
      return (0, tH.c)(!0, SH, "ChatComponent"), (0, AH.useEffect)((() => (RH = SH, () => {
          RH = !1
        })), [SH]), (0, CH.d)("appManagerUpdated|openEverythingMenuName", (() => {
          (0, MH.x)() && YH(!1)
        })), (0, AH.useEffect)((() => {
          LB.current.addEventListener("blur", (HH => {
            if (null === LB.current) return;
            Array.from(document.querySelectorAll(":hover")).some((HH => HH.classList.contains("ChatInputChannel") || HH.classList.contains("ChatMsgSelectWrapper"))) || ((0, EH.isMobile)() && PH.current && "" !== LB.current.value && rB.current(), YH(!1))
          }));
          const HH = HH => {
            TH.current.contains(HH.target) || (0, vH.m)(HH.target) || YH(!1)
          };
          document.addEventListener("touchstart", HH, {
            capture: !0
          });
          const BH = HH => {
            (0, kH.k)(HH.target) && (PH.current = !1, YH(!1))
          };
          document.addEventListener("mousedown", BH, {
            capture: !0
          });
          const LH = () => {
              clearTimeout(yH.current), tB(!0)
            },
            AH = () => {
              clearTimeout(yH.current), yH.current = setTimeout((() => {
                tB(!1), XB()
              }), 4e3)
            },
            SH = () => {
              document.pointerLockElement ? (YH(!1), iH(!0), HB.current = !1, tB(!1), XB()) : iH(!1)
            };
          ZH.current.addEventListener("pointermove", (HH => {
            "touch" === HH.pointerType || HB.current || document.pointerLockElement || (HB.current = !0, clearTimeout(yH.current))
          })), ZH.current.addEventListener("pointerleave", (HH => {
            "touch" !== HH.pointerType && (HB.current = !1, pH.current && AH())
          })), ZH.current.addEventListener("pointerdown", (HH => {
            "touch" === HH.pointerType || document.pointerLockElement || (HB.current = !0, LH())
          })), ZH.current.addEventListener("wheel", (HH => {
            document.pointerLockElement || HH.deltaY >= 0 && Math.abs(ZH.current.scrollTop) < 1 || (LH(), HB.current || (yH.current = setTimeout((() => {
              tB(!1)
            }), 4e3)))
          }), {
            passive: !0
          }), ZH.current.addEventListener("touchstart", LH), ZH.current.addEventListener("touchend", AH), ZH.current.addEventListener("touchcancel", AH), document.addEventListener("pointerlockchange", SH);
          const tH = HH => {
            if (SB.shown && (PH.current || ! function(HH) {
                if ((0, xH.isTypingInInput)()) return !0;
                const BH = document.activeElement;
                return (BH instanceof HTMLButtonElement || "button" === (null === BH || void 0 === BH ? void 0 : BH.getAttribute("role"))) && ["Enter", " "].includes(HH.key)
              }(HH)) && "codeEditor" !== QH.c.get("openInGameMenuName") && "lobbyCodeEditor" !== QH.c.get("openInGameMenuName") && !rH.gameBridge.latest("connectedGame").replay)
              if (PH.current || !(0, MH.x)()) {
                if (PH.current) {
                  if ("ArrowUp" === HH.code || "ArrowDown" === HH.code) return EB("ArrowUp" === HH.code ? 1 : -1, !1), void HH.stopPropagation();
                  if ("Tab" === HH.code) return OH.b.selectNextChannel(), HH.stopPropagation(), void HH.preventDefault();
                  if (HH.ctrlKey && DH.includes(gH[HH.keyCode])) return HH.preventDefault(), void HH.stopPropagation()
                }
                if ([...NH, "esc"].includes(hH()(HH)))
                  if ("esc" !== hH()(HH)) {
                    if (!PH.current || "/" !== hH()(HH)) {
                      if ("t" === hH()(HH)) {
                        if (PH.current) return void HH.stopPropagation();
                        HH.preventDefault()
                      }
                      PH.current && "" !== LB.current.value && rB.current(), HH.repeat || (PH.current || "/" === hH()(HH) && (LB.current.value = "/", HH.preventDefault()), YH(!PH.current))
                    }
                  } else PH.current && (YH(!1), HH.stopPropagation());
                else PH.current && HH.stopPropagation()
              } else NH.includes(hH()(HH)) && (HH.preventDefault(), HH.stopPropagation(), (0, MH.c)(HH))
          };
          document.addEventListener("keydown", tH, {
            capture: !0
          });
          const zH = ZH.current;
          let CH = !1;
          const XH = new ResizeObserver((() => {
              CH && (CH = !1, XB())
            })),
            GH = () => {
              CH = !0, XH.unobserve(zH), XH.observe(zH)
            };
          BB.current = GH;
          const uH = new MutationObserver(GH);
          return uH.observe(zH, {
            childList: !0,
            subtree: !0
          }), () => {
            document.removeEventListener("keydown", tH, {
              capture: !0
            }), document.removeEventListener("touchstart", HH, {
              capture: !0
            }), document.removeEventListener("mousedown", BH, {
              capture: !0
            }), document.removeEventListener("pointerlockchange", SH), BB.current = null, uH.disconnect(), XH.disconnect(), clearTimeout(yH.current)
          }
        }), []), (0, vH.r)(LB, {
          open: () => {
            YH(!0)
          },
          close: () => {
            hB()
          },
          submit: () => {
            "" !== LB.current.value && zB(), hB()
          },
          stepHistory: () => {
            EB(1, !0)
          },
          sendLine: HH => {
            CB(HH), hB()
          },
          selectNextChannel: () => {
            OH.b.selectNextChannel()
          }
        }), (0, AH.useEffect)((() => {
          var HH;
          (PH.current = SH, LB.current) && (SH ? (FH.current = 0, LB.current.focus()) : (LB.current.blur(), null === (HH = BB.current) || void 0 === HH || HH.call(BB)))
        }), [SH]),
        function(HH, BH) {
          (0, AH.useLayoutEffect)((() => {
            if (!BH) return;
            lH.e.hold(), eH.keyboardUp();
            const LH = HH.current.closest(".InGameHeaderAndChat"),
              AH = (0, KH.c)((HH => {
                let {
                  top: BH,
                  height: AH
                } = HH;
                LH.style.setProperty("--keyboard-top", `${BH+AH}px`)
              }));
            return () => {
              AH(), LH.style.removeProperty("--keyboard-top"), lH.e.release(), eH.keyboardDown()
            }
          }), [HH, BH])
        }(TH, SH && BH), (0, qH.jsx)(qH.Fragment, {
          children: (0, qH.jsxs)("div", {
            ref: TH,
            className: uH()("Chat", {
              Chatting: SH
            }),
            "data-camera-keeper": SH ? "" : void 0,
            children: [(0, qH.jsx)("div", {
              ref: ZH,
              className: uH()("ChatMessages", {
                HideScrollbar: !aH && !SH,
                NoScrolling: !(0, EH.isMobile)() && JH
              }),
              children: (0, qH.jsx)(bH.e, {
                messages: UH,
                reportedPlayers: cH
              })
            }), BH && !SH && (0, qH.jsx)("button", {
              type: "button",
              className: "ChatIconWrapper SmallTextLight",
              "aria-label": HH("general:chat"),
              ...(0, mH.c)((() => {
                YH(!0), AB.current.style.display = "flex", (0, EH.isIOS)() && LB.current.focus()
              }), "pointerup"),
              children: (0, qH.jsx)(WH.c, {
                name: "comment-dots",
                className: "ChatIcon"
              })
            }), (0, qH.jsxs)("div", {
              ref: AB,
              className: "ChatInputWrapper",
              style: {
                display: "" + (SH ? "flex" : "none")
              },
              children: [jH && (0, qH.jsx)("button", {
                type: "button",
                className: "ChatInputChannel",
                style: {
                  backgroundColor: jH.elementBgColor
                },
                onClick: HH => {
                  OH.b.selectNextChannel(), LB.current.focus()
                },
                children: (0, qH.jsx)("span", {
                  className: "SmallTextBold",
                  children: (0, qH.jsx)(zH.b, {
                    text: jH.elementContent
                  })
                })
              }), jH && LH && (0, qH.jsx)(nH, {}), (0, qH.jsx)("input", {
                className: "ChatInput",
                maxLength: GH.kd,
                ref: LB,
                spellCheck: "false",
                autoComplete: "off",
                autoCorrect: "off",
                "aria-label": HH("general:chat"),
                placeholder: jH ? `${jH.channelName} Chat${"touchOnly"===(0,XH.d)()||LH?"":" [Tab]"}` : ""
              })]
            })]
          })
        })
    }
    const DH = ["W", "S", "D", "N", "T", "<tab>", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "<page-up>", "<page-down>", "B", "O", "H", "J", "F", "G", "J", "M", "<enter>", "L", "K", "E", "P", "R", "O", "U"]
  },
  37427: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => bH
    });
    var AH = LH(45),
      rH = LH(1038),
      SH = LH.n(rH),
      hH = LH(2996),
      tH = LH(18),
      zH = LH(2536),
      CH = LH(3970),
      EH = LH(2098),
      XH = LH(15),
      GH = LH(1967),
      YH = LH(37431),
      uH = LH(2257),
      QH = LH(2999),
      WH = LH(2875),
      MH = LH(2849),
      xH = LH(2840),
      vH = LH(3988),
      PH = LH(37435),
      TH = LH(3206),
      UH = LH(2051),
      VH = LH(1225);

    function OH(HH) {
      for (let LH = HH.length - 1; LH >= 0; LH--) {
        const AH = "string" === typeof(BH = HH[LH]) ? BH : "str" in BH && "string" === typeof BH.str ? BH.str : "";
        if ("" !== AH.trim()) return AH
      }
      var BH;
      return ""
    }

    function bH(HH) {
      let {
        messages: BH,
        reportedPlayers: LH
      } = HH;
      return (0, VH.jsx)(VH.Fragment, {
        children: BH.map((HH => (0, VH.jsx)(kH, {
          message: HH,
          reportedPlayers: LH
        }, HH.clientChatMsgId)))
      })
    }
    const kH = (0, AH.memo)((function(HH) {
      var BH;
      let {
        message: LH,
        reportedPlayers: rH
      } = HH;
      const bH = (0, AH.useRef)(null),
        [kH] = (0, AH.useState)(TH.l),
        {
          author: mH
        } = LH,
        oH = null === mH || void 0 === mH ? void 0 : mH.id,
        IH = null !== (BH = null === mH || void 0 === mH ? void 0 : mH.name) && void 0 !== BH ? BH : void 0,
        fH = (0, EH.b)(IH),
        lH = null !== mH && void 0 !== mH && mH.profileEffect ? uH.f[mH.profileEffect] : void 0,
        KH = null !== mH && !mH.local,
        {
          worldCodeLineId: cH
        } = LH,
        eH = (0, UH.c)("hiddenPlayerNames", (HH => (0, QH.h)(KH, IH, HH))),
        qH = null === LH.serverChatMsgId || null === mH ? null : {
          text: OH(LH.content),
          hiddenFromReplay: LH.hiddenFromReplay,
          serverChatMsgId: LH.serverChatMsgId,
          authorId: mH.id
        },
        gH = (0, CH.g)(KH && null !== IH && void 0 !== IH ? IH : null),
        NH = (0, xH.j)(bH);
      (0, AH.useEffect)((() => () => {
        xH.e.closeIfOwner(bH)
      }), []);
      const RH = null !== mH && null !== cH,
        jH = [];
      KH && null !== qH && !rH.includes(oH) && jH.push({
        icon: "flag",
        text: RH ? "general:reportPlayer" : "general:report",
        onClick: () => {
          tH.k.AX("OpenReportMenu", {
            playerEId: oH,
            playerName: IH,
            kt: qH,
            serverChatMsgId: qH.serverChatMsgId
          })
        }
      }), null !== cH && jH.push({
        icon: "flag",
        text: RH ? "general:reportGameMessage" : "general:report",
        onClick: () => {
          tH.k.AX("OpenReportMenu", {
            playerEId: null,
            playerName: void 0,
            kt: {
              text: (0, hH.d)(LH.content),
              hiddenFromReplay: LH.hiddenFromReplay
            },
            serverChatMsgId: cH
          })
        }
      });
      const nH = KH && void 0 !== IH ? (0, vH.b)(gH, IH, qH) : [];
      return (0, VH.jsxs)("div", {
        ref: bH,
        className: SH()("MessageWrapper", {
          ChatMsgSelectWrapper: oH,
          Still: kH
        }),
        "data-replay-hidden": LH.hiddenFromReplay ? "" : void 0,
        onContextMenu: eH ? HH => {
          (0, WH.g)(bH, HH, {
            ...(0, QH.g)(oH, IH),
            showLocation: !1,
            status: null,
            extraActions: jH,
            moderationActions: (0, PH.c)(IH),
            friendRequestSource: "chat"
          }, XH.c.get("isTouchScreen"))
        } : void 0,
        onPointerDown: eH ? HH => {
          (0, MH.d)(HH, (() => (0, QH.g)(oH, IH).playerSocialPreview))
        } : void 0,
        children: [lH && (0, VH.jsx)(lH, {
          className: "ChatMessageBackground",
          simple: !0
        }), (KH || null !== cH) && !NH && (0, VH.jsx)(YH.b, {
          className: "ChatFloatingActions",
          triggerElementRef: bH,
          options: [...jH.map((HH => {
            let {
              icon: BH,
              text: LH,
              onClick: AH
            } = HH;
            return {
              icon: BH,
              text: LH,
              onPointerDown: AH
            }
          })), ...nH, {
            icon: "user-plus",
            text: "socialBar:sendFriendRequest",
            onPointerDown: HH => {
              (0, zH.m)(IH, "chat")
            },
            analyticsClick: {
              id: "social.add_friend",
              value: "chat"
            },
            show: eH && "blocked" !== gH
          }]
        }), (0, VH.jsx)(GH.b, {
          text: LH.content,
          friendBadgeFor: fH ? IH : void 0
        }, LH.clientChatMsgId)]
      }, LH.clientChatMsgId)
    }))
  },
  37756: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => XH,
      g: () => EH
    });
    var AH = LH(45),
      rH = LH(1038),
      SH = LH.n(rH),
      hH = LH(1455),
      tH = LH(1225);
    const zH = 200,
      CH = 160;

    function EH() {
      return window.matchMedia("(max-width: 900px)").matches
    }

    function XH(HH) {
      let {
        side: BH,
        defaultSize: LH,
        covers: rH,
        onClose: EH,
        children: XH
      } = HH;
      const GH = (0, AH.useRef)(null),
        [YH, uH] = (0, AH.useState)(null),
        [QH, WH] = (0, AH.useState)(LH);
      QH !== LH && (WH(LH), uH(null));
      const MH = (0, AH.useRef)(null),
        xH = "top" === BH,
        vH = HH => xH ? HH.clientY : HH.clientX,
        PH = () => {
          MH.current = null
        };
      return (0, tH.jsxs)("div", {
        ref: GH,
        className: SH()("ResizableSidePanel", BH && `ResizableSidePanel-${BH}`, {
          Covers: "always" === rH,
          CoversWhenNarrow: "narrow" === rH,
          Dragged: null !== YH
        }),
        style: {
          [xH ? "height" : "width"]: null !== YH && void 0 !== YH ? YH : LH
        },
        children: [XH, BH && (0, tH.jsx)("div", {
          className: "ResizableSidePanelHandle",
          role: "separator",
          "aria-orientation": xH ? "horizontal" : "vertical",
          onPointerDown: HH => {
            if (0 !== HH.button) return;
            HH.preventDefault();
            const BH = GH.current,
              LH = Array.from(BH.parentElement.children).reduce(((HH, LH) => LH !== BH && "0" !== getComputedStyle(LH).flexGrow ? HH + (HH => xH ? HH.clientHeight : HH.clientWidth)(LH) : HH), 0),
              AH = xH ? BH.offsetHeight : BH.offsetWidth,
              rH = Math.min(zH, AH),
              SH = Math.max(rH, AH + Math.max(0, LH - CH));
            MH.current = {
              start: vH(HH),
              startSize: AH,
              minSize: rH,
              maxSize: SH
            }, HH.currentTarget.setPointerCapture(HH.pointerId)
          },
          onPointerMove: HH => {
            const LH = MH.current;
            if (!LH) return;
            const AH = "right" === BH ? LH.start - HH.clientX : vH(HH) - LH.start;
            uH(Math.min(LH.maxSize, Math.max(LH.minSize, LH.startSize + AH)))
          },
          onPointerUp: PH,
          onPointerCancel: PH,
          onLostPointerCapture: PH
        }), EH && (0, tH.jsx)(hH.q, {
          className: "ResizableSidePanelClose",
          onClick: EH
        })]
      })
    }
  },
  37779: (HH, BH, LH) => {
    LH.d(BH, {
      B: () => TH,
      D: () => OH,
      G: () => rH,
      J: () => VH,
      b: () => vH,
      d: () => WH,
      h: () => uH,
      i: () => YH,
      m: () => xH,
      q: () => bH,
      u: () => PH,
      x: () => UH
    });
    var AH = LH(45);
    const rH = 5e3,
      SH = 500,
      hH = 3e3;
    let tH = null,
      zH = null,
      CH = null;
    const EH = new Set;

    function XH(HH) {
      tH = HH;
      for (const BH of EH) BH()
    }

    function GH() {
      if (!tH || void 0 !== tH.endedAt) return;
      null !== zH && (clearTimeout(zH), zH = null), XH({
        ...tH,
        endedAt: Date.now()
      });
      const HH = CH;
      CH = null, null === HH || void 0 === HH || HH()
    }

    function YH(HH, BH) {
      let {
        submit: LH,
        reopen: AH
      } = BH;
      null !== zH && clearTimeout(zH), CH = AH, XH({
        ...HH,
        startedAt: Date.now(),
        errors: []
      }), zH = setTimeout(GH, hH), LH()
    }

    function uH() {
      tH && void 0 === tH.endedAt && void 0 === tH.ranAt && (null !== zH && clearTimeout(zH), XH({
        ...tH,
        ranAt: Date.now()
      }), zH = setTimeout(GH, rH))
    }
    const QH = 3;

    function WH(HH) {
      if (!tH || void 0 === tH.ranAt || void 0 !== tH.endedAt || tH.errors.includes(HH) || tH.errors.length >= QH) return;
      const BH = 0 === tH.errors.length;
      XH({
        ...tH,
        errors: [...tH.errors, HH]
      }), BH && (null !== zH && clearTimeout(zH), zH = setTimeout(GH, SH))
    }

    function MH(HH) {
      var BH;
      return (null === (BH = tH) || void 0 === BH ? void 0 : BH.chatKey) === HH ? tH : null
    }

    function xH(HH) {
      const BH = MH(HH);
      return BH && void 0 !== BH.endedAt ? (XH(null), BH) : null
    }

    function vH(HH) {
      var BH;
      (null === (BH = tH) || void 0 === BH ? void 0 : BH.chatKey) === HH && (null !== zH && (clearTimeout(zH), zH = null), CH = null, XH(null))
    }
    const PH = "These changes from your last answer didn't go in. Make them again.";

    function TH(HH) {
      const BH = [...new Set(HH)].slice(0, QH);
      return `Fix this in your change: when it ran, the world showed ${1===BH.length?"this error":"these errors"}: ${BH.join(" ")}`
    }

    function UH(HH) {
      return `Your change didn't go in, because the code wouldn't run at all: ${HH.join(" ")} Send the whole change again with that fixed.`
    }

    function VH(HH) {
      return `Fix this in your change: ${HH.join(" ")}`
    }

    function OH(HH) {
      var BH;
      if (void 0 === HH.ranAt) return {
        title: "Couldn't test it",
        text: "Your change didn't go into your world, so it couldn't be tested. Press Submit to try it."
      };
      const LH = Math.max(1, Math.round(((null !== (BH = HH.endedAt) && void 0 !== BH ? BH : HH.ranAt) - HH.ranAt) / 1e3)),
        AH = `Your change ran in your world for ${LH} ${1===LH?"second":"seconds"}`;
      return 0 === HH.errors.length ? {
        title: "Tested: no errors",
        text: `${AH} without an error.`
      } : {
        title: 1 === HH.errors.length ? "Tested: it showed an error" : `Tested: it showed ${HH.errors.length} errors`,
        text: `${AH} and showed: ${HH.errors.join(" ")}`
      }
    }

    function bH(HH) {
      const [BH, LH] = (0, AH.useState)((() => MH(HH)));
      return (0, AH.useEffect)((() => {
        const BH = () => {
          LH(MH(HH))
        };
        return BH(), EH.add(BH), () => {
          EH.delete(BH)
        }
      }), [HH]), BH
    }
  },
  37786: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => rH,
      f: () => AH
    });
    const AH = {
      key: "worldCode",
      label: "World Code",
      codeBlock: !1
    };

    function rH(HH, BH, LH) {
      return {
        key: HH,
        label: `Code block at ${BH.join(", ")}`,
        codeBlock: !0,
        pos: BH,
        canChangePos: LH
      }
    }
  },
  37774: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH,
      f: () => SH,
      g: () => hH,
      i: () => rH
    });
    const AH = "code block",
      rH = "World Code/";

    function SH(HH) {
      return HH.trim().toLowerCase().startsWith(rH.toLowerCase())
    }

    function hH(HH) {
      return HH.trim().slice(rH.length).replace(/^\.?\//, "")
    }
  },
  37741: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => zH,
      c: () => CH,
      f: () => tH,
      j: () => EH
    });
    var AH = LH(45),
      rH = LH(30),
      SH = LH(81);
    class hH {
      constructor(HH, BH) {
        let LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.storageKey = HH, this.defaultValue = BH, this.canChange = LH, this.value = null, this.listeners = new Set, this.get = () => {
          if (!this.canChange) return this.defaultValue;
          if (null === this.value) {
            const HH = rH.e.getItem(this.storageKey);
            this.value = "boolean" === typeof HH ? HH : this.defaultValue
          }
          return this.value
        }, this.set = HH => {
          this.value = HH, rH.e.setItem(this.storageKey, HH);
          for (const BH of this.listeners) BH(HH)
        }
      }
      subscribe(HH) {
        return this.listeners.add(HH), () => {
          this.listeners.delete(HH)
        }
      }
    }
    const tH = new hH("codeEditorLightMode", !1),
      zH = new hH("codeEditorAiHints", !0),
      CH = new hH("codeEditorAiKeySafetyCheck", !0, SH.featureFlags.isOwnTopLevelSite);

    function EH(HH) {
      const [BH, LH] = (0, AH.useState)(HH.get);
      return (0, AH.useEffect)((() => {
        const BH = HH.subscribe(LH);
        return LH(HH.get()), BH
      }), [HH]), [BH, HH.set]
    }
  },
  37716: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => AH
    });
    const AH = "CodeEditorPopup"
  },
  37734: (HH, BH, LH) => {
    LH.d(BH, {
      B: () => GH,
      C: () => KH,
      D: () => OH,
      G: () => bH,
      K: () => lH,
      d: () => uH,
      h: () => zH,
      j: () => QH,
      l: () => mH,
      m: () => tH,
      o: () => EH,
      q: () => YH,
      r: () => WH,
      s: () => PH,
      t: () => oH,
      x: () => kH
    });
    var AH = LH(2624),
      rH = LH(37732);
    const SH = "bloxd-world-code-directory-sync",
      hH = "handles",
      tH = "[INVALID SCHEMATIC PLACEHOLDER]";

    function zH(HH, BH) {
      return `${HH}::${BH}`
    }
    const CH = new Set(["node_modules", ".git"]);

    function EH() {
      return "undefined" !== typeof window && "function" === typeof window.showDirectoryPicker
    }

    function XH() {
      return new Promise(((HH, BH) => {
        const LH = indexedDB.open(SH, 1);
        LH.onupgradeneeded = () => {
          const HH = LH.result;
          HH.objectStoreNames.contains(hH) || HH.createObjectStore(hH)
        }, LH.onsuccess = () => {
          HH(LH.result)
        }, LH.onerror = () => {
          var HH;
          BH(null !== (HH = LH.error) && void 0 !== HH ? HH : new Error("Failed to open directory sync IndexedDB"))
        }
      }))
    }
    async function GH(HH, BH) {
      const LH = await XH();
      try {
        await new Promise(((AH, rH) => {
          const SH = LH.transaction(hH, "readwrite");
          SH.objectStore(hH).put(BH, HH), SH.oncomplete = () => {
            AH()
          }, SH.onerror = () => {
            var HH;
            rH(null !== (HH = SH.error) && void 0 !== HH ? HH : new Error("Failed to store directory handle"))
          }
        }))
      } finally {
        LH.close()
      }
    }
    async function YH(HH) {
      const BH = await XH();
      try {
        return await new Promise(((LH, AH) => {
          const rH = BH.transaction(hH, "readonly").objectStore(hH).get(HH);
          rH.onsuccess = () => {
            var HH;
            LH(null !== (HH = rH.result) && void 0 !== HH ? HH : null)
          }, rH.onerror = () => {
            var HH;
            AH(null !== (HH = rH.error) && void 0 !== HH ? HH : new Error("Failed to load directory handle"))
          }
        }))
      } finally {
        BH.close()
      }
    }
    async function uH(HH) {
      const BH = await XH();
      try {
        await new Promise(((LH, AH) => {
          const rH = BH.transaction(hH, "readwrite");
          rH.objectStore(hH).delete(HH), rH.oncomplete = () => {
            LH()
          }, rH.onerror = () => {
            var HH;
            AH(null !== (HH = rH.error) && void 0 !== HH ? HH : new Error("Failed to clear directory handle"))
          }
        }))
      } finally {
        BH.close()
      }
    }
    async function QH(HH) {
      const BH = {
        mode: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readwrite"
      };
      return "granted" === await HH.queryPermission(BH) || "granted" === await HH.requestPermission(BH)
    }
    async function WH(HH) {
      if (!EH()) return null;
      try {
        const BH = await window.showDirectoryPicker({
          mode: "readwrite"
        });
        return await GH(HH, BH), BH
      } catch (BH) {
        if (function(HH) {
            return HH instanceof DOMException && "AbortError" === HH.name
          }(BH)) return null;
        throw BH
      }
    }

    function MH(HH) {
      return HH.startsWith(".") || CH.has(HH)
    }

    function xH(HH) {
      if (!HH) return !0;
      const BH = HH.split("/");
      for (const LH of BH)
        if ("" === LH || "." === LH || ".." === LH) return !1;
      return !0
    }
    async function vH(HH, BH, LH) {
      for await (const [SH, hH] of HH.entries()) {
        if ("directory" === hH.kind) {
          if (MH(SH)) continue;
          const HH = BH ? `${BH}/${SH}` : SH;
          if (!xH(HH)) continue;
          await vH(hH, HH, LH);
          continue
        }
        const HH = BH ? `${BH}/${SH}` : SH;
        if (!(0, AH.s)(HH) && !(0, rH.c)(HH)) continue;
        const tH = await hH.getFile();
        LH[HH] = (0, rH.c)(HH) ? await IH(tH) : await tH.text()
      }
    }
    async function PH(HH) {
      const BH = {};
      return await vH(HH, "", BH), BH
    }

    function TH(HH) {
      return !(!HH || HH !== HH.trim() || HH.startsWith("/") || HH.includes("\\") || HH.includes("\0")) && xH(HH)
    }
    async function UH(HH, BH, LH) {
      const AH = BH.split("/"),
        rH = AH[AH.length - 1];
      let SH = HH;
      for (let hH = 0; hH < AH.length - 1; hH++) SH = await SH.getDirectoryHandle(AH[hH], {
        create: LH
      });
      return {
        dir: SH,
        fileName: rH
      }
    }
    async function VH(HH, BH, LH) {
      if (!TH(BH)) throw new Error(`Refusing to write unsafe path: ${BH}`);
      const {
        dir: AH,
        fileName: rH
      } = await UH(HH, BH, !0), SH = await AH.getFileHandle(rH, {
        create: !0
      }), hH = await SH.createWritable();
      await hH.write(LH), await hH.close()
    }
    async function OH(HH, BH, LH) {
      const AH = await async function(HH, BH) {
        if (!TH(BH)) return null;
        try {
          const {
            dir: LH,
            fileName: AH
          } = await UH(HH, BH, !1), rH = await LH.getFileHandle(AH), SH = await rH.getFile();
          return await SH.text()
        } catch (LH) {
          if (LH instanceof DOMException && ("NotFoundError" === LH.name || "NotAllowedError" === LH.name)) return null;
          throw LH
        }
      }(HH, BH);
      AH !== LH && await VH(HH, BH, LH)
    }
    async function bH(HH, BH, LH) {
      if (!(0, AH.s)(BH) && !(0, rH.c)(BH)) throw new Error(`Refusing to write non-allowlisted path: ${BH}`);
      if ((0, rH.c)(BH)) {
        if (await fH(HH, BH) === tH) throw new Error(`Move the binary schematic ${BH} outside the linked folder before syncing its placeholder`)
      }
      await VH(HH, BH, LH)
    }
    async function kH(HH, BH) {
      if (!TH(BH)) throw new Error(`Refusing to remove unsafe path: ${BH}`);
      try {
        const {
          dir: LH,
          fileName: AH
        } = await UH(HH, BH, !1);
        await LH.removeEntry(AH)
      } catch (LH) {
        if (LH instanceof DOMException && ("NotFoundError" === LH.name || "NotAllowedError" === LH.name)) return;
        throw LH
      }
    }
    async function mH(HH, BH) {
      if (!TH(BH)) return null;
      try {
        const LH = BH.split("/");
        let AH = HH;
        for (const HH of LH) AH = await AH.getDirectoryHandle(HH);
        return AH
      } catch (LH) {
        if (LH instanceof DOMException && ("NotFoundError" === LH.name || "NotAllowedError" === LH.name)) return null;
        throw LH
      }
    }
    async function oH(HH, BH) {
      if ((0, AH.s)(BH) || (0, rH.c)(BH)) {
        if ((0, rH.c)(BH)) {
          if (await fH(HH, BH) === tH) throw new Error(`Refusing to remove a binary schematic: ${BH}`)
        }
        await kH(HH, BH)
      }
    }
    async function IH(HH) {
      if (HH.size > 64) return tH;
      const BH = await HH.text();
      return Array.from(BH).some((HH => {
        const BH = HH.charCodeAt(0);
        return BH < 9 || BH > 13 && BH < 32 || 65533 === BH
      })) ? tH : BH
    }
    async function fH(HH, BH) {
      try {
        const {
          dir: LH,
          fileName: AH
        } = await UH(HH, BH, !1);
        return await IH(await (await LH.getFileHandle(AH)).getFile())
      } catch (LH) {
        if (LH instanceof DOMException && "NotFoundError" === LH.name) return null;
        throw LH
      }
    }
    async function lH(HH, BH) {
      const LH = await PH(HH);
      for (const AH of Object.keys(LH)) AH in BH || (0, rH.c)(AH) || await oH(HH, AH);
      for (const [SH, hH] of Object.entries(BH))((0, AH.s)(SH) || (0, rH.c)(SH)) && await bH(HH, SH, hH)
    }

    function KH(HH, BH) {
      var LH, AH;
      let rH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const SH = null !== (LH = rH.debounceMs) && void 0 !== LH ? LH : 300,
        hH = null !== (AH = rH.pollMs) && void 0 !== AH ? AH : 1e3;
      let tH = !1,
        zH = null,
        CH = null,
        EH = null;
      const XH = () => {
          tH || (zH && clearTimeout(zH), zH = setTimeout((() => {
            zH = null, GH()
          }), SH))
        },
        GH = async () => {
          if (!tH) try {
            if (!await QH(HH, "readwrite")) return;
            const LH = await PH(HH);
            tH || BH(LH)
          } catch (LH) {
            console.error("[WorldCodeDirectorySync] Failed to read watched directory", LH)
          }
        };
      GH();
      const YH = window.FileSystemObserver;
      if (YH) try {
        EH = new YH((() => {
          XH()
        })), EH.observe(HH, {
          recursive: !0
        })
      } catch (uH) {
        console.warn("[WorldCodeDirectorySync] FileSystemObserver unavailable, falling back to polling", uH), EH = null
      }
      return EH || (CH = setInterval((() => {
        XH()
      }), hH)), () => {
        tH = !0, zH && clearTimeout(zH), CH && clearInterval(CH), EH && EH.disconnect()
      }
    }
  },
  37390: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => kH,
      g: () => VH,
      j: () => OH,
      m: () => TH,
      n: () => UH
    });
    var AH = LH(45),
      rH = LH(1038),
      SH = LH.n(rH),
      hH = LH(3465),
      tH = LH(304),
      zH = LH(2628),
      CH = LH(18),
      EH = LH(2036),
      XH = LH(30),
      GH = LH(2051),
      YH = LH(15),
      uH = LH(2059),
      QH = LH(1390),
      WH = LH(9520),
      MH = LH(2081),
      xH = LH(1123),
      vH = LH(1225);
    const PH = 7e3;

    function TH() {
      const {
        loadingOverlayVisible: HH,
        openInGameMenuName: BH,
        openEverythingMenuName: LH
      } = (0, YH.m)(["loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]);
      return HH || null !== BH || null !== LH
    }

    function UH(HH, BH, LH) {
      const rH = (0, AH.useRef)(LH);
      rH.current = LH;
      const SH = (0, AH.useRef)({
        card: HH,
        ms: 0
      });
      (0, AH.useEffect)((() => {
        if (BH || null === HH) return;
        SH.current.card !== HH && (SH.current = {
          card: HH,
          ms: 0
        });
        const LH = SH.current,
          AH = performance.now(),
          hH = setTimeout((() => {
            rH.current()
          }), PH - LH.ms);
        return () => {
          clearTimeout(hH), LH.ms += performance.now() - AH
        }
      }), [BH, HH])
    }
    const VH = (0, AH.memo)((function() {
      const {
        isTouchScreen: HH
      } = (0, YH.m)(["isTouchScreen"]), BH = (0, QH.y)();
      (0, hH.b)();
      const LH = (0, zH.j)("showBasicMovementControls"),
        [rH, EH] = (0, AH.useState)("movement"),
        GH = "movement" === rH,
        uH = BH && !1 !== LH;
      (0, AH.useEffect)((() => {
        "padActions" !== rH || uH || EH("done")
      }), [rH, uH]);
      const WH = TH();
      UH("done" === rH ? null : rH, WH, (() => {
        EH("movement" === rH && (0, QH.m)() ? "padActions" : "done")
      }));
      const MH = XH.e.getItem(tH.Qb) > 2,
        xH = !MH && (!HH || BH) && GH && !1 !== LH;
      return (0, AH.useEffect)((() => {
        xH && !WH && CH.k.AX("controlsTutorialShown", "movement")
      }), [xH, WH]), MH ? (0, vH.jsx)(mH, {
        showingMovementControls: !1
      }) : (0, vH.jsxs)(vH.Fragment, {
        children: [xH ? (0, vH.jsxs)("div", {
          className: SH()("ControlsTutorialDiv", {
            Covered: WH
          }),
          children: [(0, vH.jsx)(OH, {}), (0, vH.jsx)(kH, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, vH.jsx)(kH, {
            header: "Jump",
            noaAction: "jump"
          })]
        }) : null, "padActions" === rH && uH && (0, vH.jsx)(bH, {
          covered: WH
        }), (0, vH.jsx)(mH, {
          showingMovementControls: "done" !== rH
        })]
      })
    }));

    function OH() {
      const HH = (0, QH.y)();
      return (0, vH.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, vH.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), HH && (0, vH.jsx)(uH.b, {
          noaAction: "forward"
        }), !HH && (0, vH.jsxs)(vH.Fragment, {
          children: [(0, vH.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, vH.jsx)(uH.b, {
              noaAction: "forward"
            })
          }), (0, vH.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, vH.jsx)(uH.b, {
              noaAction: "left"
            }), (0, vH.jsx)(uH.b, {
              noaAction: "backward"
            }), (0, vH.jsx)(uH.b, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function bH(HH) {
      let {
        covered: BH
      } = HH;
      const {
        t: LH
      } = (0, xH.B)(), AH = (0, zH.j)("useInventory");
      return (0, vH.jsxs)("div", {
        className: SH()("ControlsTutorialDiv", {
          Covered: BH
        }),
        children: [(0, vH.jsx)(kH, {
          header: LH("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, vH.jsx)(kH, {
          header: LH("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== AH && (0, vH.jsx)(kH, {
          header: LH("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, vH.jsx)(kH, {
          header: LH("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function kH(HH) {
      let {
        header: BH,
        noaAction: LH
      } = HH;
      return (0, vH.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, vH.jsx)("div", {
          className: "KeyHeader",
          children: BH
        }), (0, vH.jsx)(uH.b, {
          noaAction: LH
        })]
      })
    }

    function mH(HH) {
      let {
        showingMovementControls: BH
      } = HH;
      const {
        isTouchScreen: LH
      } = (0, YH.m)(["isTouchScreen"]), rH = (0, QH.y)(), SH = (0, MH.d)("OpenShop"), [hH, tH] = (0, AH.useState)(!1), uH = `SeenShopControls|${(0,GH.c)("connectedGame",(HH=>HH.gameNameWithVariation))}`, xH = () => (!(0, QH.m)() || null !== (0, WH.c)("OpenShop")) && !XH.e.getItem(uH) && EH.e.get("shopInfo") && !BH, PH = () => (tH(!0), XH.e.setItem(uH, !0), (0, QH.m)() || CH.k.AX("showShopTouchTutorial"), setTimeout((() => {
        tH(!1)
      }), 7e3));
      (0, AH.useEffect)((() => {
        let HH;
        const BH = CH.k.subscribe("showShopTutorial", (() => {
          xH() && (HH = PH())
        }));
        return () => {
          clearTimeout(HH), CH.k.unsubscribe(BH)
        }
      }), [BH]);
      const TH = (0, AH.useRef)();
      return (0, zH.f)("currencyAmounts", (HH => {
        if (xH()) {
          let LH = !1;
          const AH = EH.e.get("shopInfo");
          for (const rH in AH) {
            for (const SH in AH[rH].items) {
              var BH;
              const hH = AH[rH].items[SH];
              if (void 0 !== hH.currency && HH[hH.currency] && hH.cost <= HH[hH.currency].amount && (null === (BH = hH.hidden) || void 0 === BH || !BH)) {
                LH = !0;
                break
              }
            }
            if (LH) break
          }
          LH && (TH.current = PH())
        }
      })), (0, AH.useEffect)((() => () => {
        clearTimeout(TH.current)
      }), [BH]), !hH || rH && !SH ? null : (0, vH.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: LH && !rH ? null : (0, vH.jsx)(kH, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
  },
  5308: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => WH,
      h: () => MH
    });
    var AH = LH(1038),
      rH = LH.n(AH),
      SH = LH(45),
      hH = LH(1123),
      tH = LH(5314),
      zH = LH(1967),
      CH = LH(2628),
      EH = LH(5319),
      XH = LH(1225);
    const GH = new WeakMap;
    let YH = 0;

    function uH(HH) {
      let BH = GH.get(HH);
      return void 0 === BH && (BH = YH++, GH.set(HH, BH)), BH
    }

    function QH(HH) {
      let {
        piece: BH
      } = HH;
      return "space" === BH.kind ? (0, XH.jsx)(XH.Fragment, {
        children: BH.text
      }) : (0, XH.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${BH.delayMs}ms`
        },
        children: (0, XH.jsx)(tH.b, {
          text: "icon" === BH.kind ? `[[${BH.icon}]]` : BH.text
        })
      })
    }

    function WH(HH) {
      let {
        display: BH
      } = HH;
      const {
        selectedLanguage: LH
      } = (0, hH.B)(), AH = (0, SH.useMemo)((() => (0, EH.b)((0, EH.d)(BH).plan.pieces)), [BH, LH.code]);
      return (0, XH.jsxs)("div", {
        className: rH()("Dialogue", {
          DialogueAnimateIn: !1 !== BH.animateIn
        }),
        children: [BH.speakerName && (0, XH.jsx)(zH.b, {
          text: BH.speakerName,
          className: "DialogueSpeaker"
        }), (0, XH.jsx)("p", {
          className: "DialogueLine",
          children: AH.map(((HH, BH) => 1 === HH.length && "space" === HH[0].kind ? HH[0].text : (0, XH.jsx)("span", {
            className: "DialogueGlue",
            children: HH.map(((HH, BH) => (0, XH.jsx)(QH, {
              piece: HH
            }, BH)))
          }, BH)))
        })]
      })
    }
    const MH = (0, SH.memo)((function() {
      const HH = (0, CH.j)("dialogue");
      return (0, XH.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: HH && (0, XH.jsx)(WH, {
          display: HH
        }, uH(HH))
      })
    }))
  },
  37560: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => QH,
      d: () => WH
    });
    var AH = LH(45),
      rH = LH(1450),
      SH = LH(2051),
      hH = LH(37504),
      tH = LH(619),
      zH = LH(1038),
      CH = LH.n(zH),
      EH = LH(1225);
    const XH = [GH()];

    function GH() {
      return {
        source: null,
        direction: null,
        Cw: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function YH(HH) {
      return XH.find((BH => null !== BH.source && BH.source === HH))
    }

    function uH(HH) {
      clearTimeout(HH.timeout), HH.source = null, HH.direction = null, HH.writtenAngle = null, HH.Cw && (HH.Cw.style.rotate = "")
    }
    const QH = (0, AH.memo)((function() {
      const [, HH] = (0, AH.useReducer)((HH => HH + 1), 0);
      return (0, rH.d)("damagedByOtherPlayer", (BH => {
        let {
          DS: LH,
          direction: AH
        } = BH;
        const rH = LH || "nonDirectional",
          SH = function(HH) {
            var BH;
            const LH = null !== (BH = YH(HH)) && void 0 !== BH ? BH : XH.find((HH => null === HH.source));
            if (LH) return LH;
            const AH = {
              source: null,
              direction: null,
              Cw: null,
              timeout: void 0,
              writtenAngle: null
            };
            return XH.push(AH), AH
          }(rH);
        clearTimeout(SH.timeout), SH.source = rH, SH.direction = AH, SH.timeout = setTimeout((() => {
          uH(SH), HH()
        }), 800), HH()
      })), (0, SH.b)("kill", (BH => {
        let {
          killer: LH,
          victim: AH
        } = BH;
        const rH = LH.local && YH(AH.id);
        rH && (uH(rH), HH())
      })), (0, AH.useEffect)((() => {
        const HH = (0, hH.i)("turnDamageIndicators", WH);
        return () => {
          HH(), XH.forEach(uH)
        }
      }), []), (0, EH.jsx)("div", {
        className: "DirectionalDamage",
        children: XH.map(((HH, BH) => (0, EH.jsx)("div", {
          ref: BH => {
            HH.Cw = BH
          },
          className: CH()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, tH.M)(HH.direction),
            DamageIndicatorIdle: null === HH.source
          })
        }, BH)))
      })
    }));

    function WH(HH) {
      for (const BH of XH) {
        if (null === BH.source || (0, tH.M)(BH.direction)) continue;
        const LH = BH.direction - HH;
        LH !== BH.writtenAngle && (BH.writtenAngle = LH, BH.Cw.style.rotate = `${LH}rad`)
      }
    }
  },
  9484: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => lH,
      g: () => mH,
      i: () => oH
    });
    var AH = LH(45),
      rH = LH(4951),
      SH = LH(1061),
      hH = LH(1450),
      tH = LH(18),
      zH = LH(3795),
      CH = LH(2347),
      EH = LH(1182),
      XH = LH(2760),
      GH = LH(1998),
      YH = LH(2051),
      uH = LH(1123),
      QH = LH(15),
      WH = LH(1659),
      MH = LH(1038),
      xH = LH.n(MH),
      vH = LH(9491),
      PH = LH(9499),
      TH = LH(9505),
      UH = LH(9407),
      VH = LH(9509),
      OH = LH(3454),
      bH = (LH(9511), LH(1225));
    let kH = null;

    function mH() {
      return null !== kH
    }

    function oH() {
      return "pad" === kH
    }

    function IH() {
      return "inGame" === QH.c.get("gameState") && !(0, WH.t)()
    }

    function fH(HH) {
      return (0, PH.w)(HH, EH.l, PH.i, PH.m, PH.n)
    }
    const lH = (0, AH.memo)((function() {
      const {
        t: HH
      } = (0, uH.B)(), {
        userContext: BH
      } = (0, SH.e)(), [LH, QH] = (0, AH.useState)(null), [MH, mH] = (0, AH.useState)(null), oH = (0, AH.useRef)(null), lH = (0, AH.useCallback)((HH => {
        oH.current = HH, mH(HH)
      }), []), KH = (0, AH.useRef)(0), cH = (0, AH.useRef)(null), eH = (0, AH.useRef)({
        x: 0,
        y: 0
      }), [qH, gH] = (0, AH.useState)(0), NH = (0, AH.useMemo)((() => function(HH) {
        const BH = [];
        for (let AH = 0; AH < EH.l; AH++) {
          var LH;
          BH.push(null !== (LH = HH[AH]) && void 0 !== LH ? LH : null)
        }
        return BH
      }((0, XH.g)(BH.getPlayerCosmetics().emote))), [BH, qH]);
      (0, YH.b)("cosmeticsUpdated", (HH => {
        HH.some((HH => HH.local && "emote" === HH.rh)) && gH((HH => HH + 1))
      }));
      const RH = (0, AH.useRef)(!1),
        jH = (0, AH.useCallback)((function(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === HH && (0, TH.f)(), RH.current = BH, eH.current = {
            x: 0,
            y: 0
          }, lH(null), QH(HH)
        }), [lH]),
        nH = (0, AH.useCallback)((() => {
          QH(null), lH(null), eH.current = {
            x: 0,
            y: 0
          }
        }), [lH]),
        FH = (0, AH.useCallback)((HH => {
          if (Date.now() < KH.current) return;
          const BH = (0, CH.i)(HH),
            LH = !!BH.holdUntilMove,
            AH = LH ? 600 : Math.ceil(1e3 * BH.animation.animation_length / CH.e) + 200;
          KH.current = Date.now() + AH, cH.current = HH, GH.gameBridge.send("playEmote", HH), GH.gameBridge.send("applyTemporaryThirdPerson", LH ? {} : {
            durationMs: AH
          })
        }), []);
      (0, hH.d)("requestToggleEmoteWheel", (() => {
        null === LH ? IH() && jH("click") : nH()
      })), (0, hH.d)("requestEmoteWheelHoldOpen", (() => {
        null === LH && IH() && jH((0, vH.d)() ? "hold" : "click")
      })), (0, hH.d)("requestEmoteWheelPadOpen", (HH => {
        null !== LH || !IH() || (0, UH.e)() || (0, VH.r)() || jH("pad", HH)
      })), (0, hH.d)("requestEmoteRepeatLast", (() => {
        if (null !== LH || !IH() || (0, UH.e)() || (0, VH.r)()) return;
        const HH = cH.current;
        null !== HH && NH.includes(HH) ? FH(HH) : jH("pad", !0)
      }));
      const DH = () => {
        const HH = oH.current,
          BH = null !== HH ? NH[HH] : null;
        null !== BH && "pad" === LH && Date.now() < KH.current || (nH(), null !== BH && FH(BH))
      };
      (0, hH.d)("emoteWheelPadAim", (HH => {
        if ("pad" !== LH) return;
        const BH = (0, PH.F)(HH, EH.l, oH.current);
        lH(null !== BH && null !== NH[BH] ? BH : null)
      })), (0, hH.d)("requestEmoteWheelPadCommit", (HH => {
        "pad" !== LH || HH && RH.current || DH()
      })), (0, hH.d)("appManagerUpdated|activeInputDevice", (HH => {
        null !== LH && "pad" === LH !== ("gamepad" === HH) && nH()
      })), (0, AH.useLayoutEffect)((() => (kH = LH, (0, zH.o)("emoteWheel", "pad" === LH), tH.k.AX(zH.i), () => {
        kH = null, (0, zH.o)("emoteWheel", !1), tH.k.AX(zH.i)
      })), [LH]), (0, hH.d)("requestEmoteWheelHoldRelease", (() => {
        "hold" === LH && DH()
      })), (0, hH.d)("requestEmoteWheelClose", (() => {
        null !== LH && nH()
      })), (0, hH.d)("appManagerUpdated|gameState", (HH => {
        "inGame" !== HH && nH()
      }));
      const wH = () => {
        (0, WH.t)() && nH()
      };
      if ((0, hH.d)("appManagerUpdated|openEverythingMenuName", wH), (0, hH.d)("appManagerUpdated|openInGameMenuName", wH), (0, hH.d)("pointerLockUpdate", (HH => {
          HH || "hold" !== LH || nH()
        })), (0, AH.useEffect)((() => {
          if (null === LH) return;
          const HH = HH => {
            "Escape" === HH.key && (HH.stopImmediatePropagation(), HH.preventDefault(), nH())
          };
          return document.addEventListener("keydown", HH, !0), () => {
            document.removeEventListener("keydown", HH, !0)
          }
        }), [LH, nH]), (0, rH.c)(!0, "click" === LH, "EmoteWheelOverlay"), (0, AH.useEffect)((() => {
          if ("hold" === LH) return GH.gameBridge.send("holdEmoteWheel", !0), () => {
            GH.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [LH]), (0, AH.useEffect)((() => {
          if ("hold" !== LH) return;
          const HH = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            BH = PH.u * HH,
            AH = PH.s * HH,
            rH = HH => {
              let LH = eH.current.x + HH.movementX,
                rH = eH.current.y + HH.movementY;
              const SH = Math.hypot(LH, rH);
              if (SH > BH) {
                const HH = BH / SH;
                LH *= HH, rH *= HH
              }
              eH.current = {
                x: LH,
                y: rH
              }, lH(function(HH, BH, LH, AH) {
                if (Math.hypot(HH, BH) < LH) return null;
                const rH = (0, PH.z)(HH, BH, EH.l);
                return null === AH[rH] ? null : rH
              }(LH, rH, AH, NH))
            };
          return document.addEventListener("mousemove", rH), () => {
            document.removeEventListener("mousemove", rH)
          }
        }), [LH, NH, lH]), null === LH) return null;
      const ZH = "hold" === LH || "pad" === LH,
        dH = null !== MH ? NH[MH] : null,
        aH = null !== dH ? (0, CH.i)(dH).displayName : HH("emotes:pickEmote");
      return (0, bH.jsx)("div", {
        className: xH()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === LH
        }),
        onMouseDown: HH => {
          HH.target === HH.currentTarget && nH()
        },
        children: (0, bH.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * PH.u + "rem",
            height: 2 * PH.u + "rem"
          },
          children: [(0, bH.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${PH.p} ${PH.p}`,
            children: [NH.map(((BH, LH) => {
              const AH = null !== BH,
                rH = ZH && LH === MH;
              return (0, bH.jsx)("path", {
                d: fH(LH),
                className: xH()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: rH,
                  EmoteWheelWedgeDisabled: !AH
                }),
                onClick: HH => {
                  HH.stopPropagation(), null !== BH && (HH => {
                    nH(), FH(HH)
                  })(BH)
                },
                "aria-label": null !== BH ? (0, CH.i)(BH).displayName : HH("emotes:emptySlot")
              }, LH)
            })), (0, bH.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: PH.i,
              cy: PH.i,
              r: PH.n
            }), (0, bH.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: PH.i,
              cy: PH.i,
              r: PH.m
            }), ZH && null !== MH && (0, bH.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: fH(MH)
            })]
          }), NH.map(((HH, BH) => {
            const LH = null !== HH,
              AH = ZH && BH === MH,
              rH = (0, PH.C)(BH, EH.l),
              SH = PH.e * Math.cos(rH),
              hH = PH.e * Math.sin(rH);
            return (0, bH.jsx)("div", {
              className: xH()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: AH,
                EmoteWheelSlotIconDisabled: !LH
              }),
              style: {
                left: `calc(50% + ${SH}rem)`,
                top: `calc(50% + ${hH}rem)`,
                backgroundImage: LH ? `url(${(0,OH.d)("emote",HH)})` : void 0
              },
              "aria-hidden": !0
            }, BH)
          })), (0, bH.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: aH
          })]
        })
      })
    }))
  },
  37431: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => WH
    });
    var AH = LH(45),
      rH = LH(69),
      SH = LH(1123),
      hH = LH(1038),
      tH = LH.n(hH),
      zH = LH(1789),
      CH = LH(1315),
      EH = LH(1214),
      XH = LH(1475),
      GH = LH(1696),
      YH = LH(1471),
      uH = LH(1225);
    const QH = 14;

    function WH(HH) {
      let {
        className: BH,
        triggerElementRef: LH,
        options: hH
      } = HH;
      const {
        t: WH
      } = (0, SH.B)(), [MH, xH] = (0, AH.useState)(!1), [vH, PH] = (0, AH.useState)({
        x: 0,
        y: 0
      }), TH = (0, AH.useRef)(null);
      (0, AH.useEffect)((() => {
        let HH = null;
        const BH = BH => {
            HH = {
              x: BH.clientX,
              y: BH.clientY
            }
          },
          AH = BH => {
            if (null === HH || !(0, YH.b)(HH, BH)) return;
            HH = null;
            const LH = QH * (0, zH.getRemInPx)();
            PH({
              x: Math.min(BH.clientX, window.innerWidth - LH - 5),
              y: BH.clientY
            }), xH((HH => !HH))
          },
          rH = HH => {
            var BH;
            null !== (BH = TH.current) && void 0 !== BH && BH.contains(HH.relatedTarget) || xH(!1)
          },
          SH = LH.current;
        return SH.addEventListener("pointerdown", BH), SH.addEventListener("pointerup", AH), SH.addEventListener("mouseleave", rH), () => {
          SH.removeEventListener("pointerdown", BH), SH.removeEventListener("pointerup", AH), SH.removeEventListener("mouseleave", rH)
        }
      }), [LH]), (0, AH.useEffect)((() => {
        if (MH) return (0, GH.e)("pointerdown", (HH => {
          !TH.current || TH.current.contains(HH.target) || LH.current.contains(HH.target) || xH(!1)
        }))
      }), [MH, LH]), (0, AH.useLayoutEffect)((() => {
        if (!MH || !TH.current) return;
        const HH = TH.current.getBoundingClientRect().height,
          BH = Math.max(5, window.innerHeight - HH - 5);
        vH.y > BH && PH({
          x: vH.x,
          y: BH
        })
      }), [MH, vH]), (0, EH.r)("popup", TH, (() => {
        xH(!1)
      }), MH);
      const UH = hH.filter((HH => !1 !== HH.show));
      return MH && 0 !== UH.length ? (0, rH.createPortal)((0, uH.jsx)("div", {
        ref: TH,
        className: tH()("FloatingActions", {
          [BH]: BH
        }),
        style: {
          width: `${QH}rem`,
          top: vH.y,
          left: vH.x
        },
        children: UH.map((HH => {
          let {
            icon: BH,
            text: LH,
            onPointerDown: AH,
            analyticsClick: rH
          } = HH;
          return (0, uH.jsxs)("div", {
            className: "FloatingAction",
            "data-pad-focusable": !0,
            onPointerUp: HH => {
              void 0 !== rH && (0, XH.reportAnalyticsClick)(rH), AH(HH), xH(!1), HH.stopPropagation()
            },
            children: [(0, uH.jsx)(CH.c, {
              name: BH
            }), (0, uH.jsx)("div", {
              children: WH(LH)
            })]
          }, LH)
        }))
      }), function() {
        var HH;
        return null !== (HH = document.querySelector(".WholeAppWrapperInner")) && void 0 !== HH ? HH : document.body
      }()) : null
    }
  },
  37573: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => Wh
    });
    var AH = LH(37472),
      rH = LH(45),
      SH = LH(2143),
      hH = LH(4941),
      tH = LH(4947),
      zH = LH(2628),
      CH = LH(1998),
      EH = LH(1225);

    function XH(HH) {
      let {
        className: BH,
        style: LH,
        vw: AH,
        maxPx: rH,
        children: SH
      } = HH;
      console.assert("number" === typeof AH && "number" === typeof rH, "vw and maxPx passed to Text must be numbers");
      const hH = window.innerWidth * (AH / 100) > rH ? `${rH}px` : `${AH}vw`;
      return (0, EH.jsx)("div", {
        className: BH,
        style: {
          ...LH,
          fontSize: hH
        },
        children: SH
      })
    }
    var GH = LH(37578),
      YH = LH(1455),
      uH = LH(18),
      QH = LH(2036),
      WH = LH(1315);

    function MH(HH) {
      let {
        tasks: BH,
        lastDisplayedTasks: LH
      } = HH;
      return (0, EH.jsx)(EH.Fragment, {
        children: Object.keys(BH).map((HH => (0, EH.jsx)(xH, {
          task: BH[HH],
          lastDisplayedAs: LH[HH]
        }, BH[HH].text)))
      })
    }

    function xH(HH) {
      let {
        task: BH,
        lastDisplayedAs: LH
      } = HH;
      const [AH, SH] = (0, rH.useState)(null !== LH && void 0 !== LH && LH.progress ? LH.progress / BH.goal : 0), [hH, tH] = (0, rH.useState)(!1), [zH, CH] = (0, rH.useState)(BH.claimed || !1);
      return (0, rH.useEffect)((() => {
        SH(BH.progress / BH.goal)
      }), [BH.progress, BH.goal]), zH ? null : (0, EH.jsxs)("div", {
        className: "Task",
        children: [(0, EH.jsx)("div", {
          className: "TaskDescDiv",
          children: (0, EH.jsx)(XH, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: BH.text
          })
        }), BH.progress < BH.goal ? (0, EH.jsxs)("div", {
          className: "TaskProgress",
          children: [0 !== AH ? (0, EH.jsx)("div", {
            className: "TaskProgressForeground",
            style: {
              width: 100 * AH + "%"
            }
          }) : null, (0, EH.jsx)("div", {
            className: "TaskProgressText",
            children: `${BH.progress}/${BH.goal}`
          })]
        }) : (0, EH.jsx)(YH.u, {
          className: "ClaimRewardButton",
          onClick: () => {
            tH(!0)
          },
          children: (0, EH.jsx)(XH, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: "Claim Reward"
          })
        }), hH ? (0, EH.jsx)(vH, {
          task: BH,
          close: () => {
            BH.claimed = !0, CH(!0), tH(!1)
          }
        }) : null]
      })
    }

    function vH(HH) {
      let {
        task: BH,
        close: LH
      } = HH;
      const [AH, SH] = (0, rH.useState)({}), [hH, tH] = (0, rH.useState)("closed");
      (0, rH.useEffect)((() => {
        let HH;
        return "animStart" === hH && (HH = setTimeout((() => {
          tH("animEnd")
        }), 700)), () => {
          clearTimeout(HH)
        }
      }), [hH]), (0, GH.e)((() => {
        CH.gameBridge.send("completeTask", BH.text)
      }));
      const XH = (0, zH.j)("currencyAmounts");
      return (0, EH.jsxs)("div", {
        className: "RewardBackground",
        onClick: () => {
          if ("animEnd" === hH)
            if (0 === BH.rewards.length) LH(), CH.gameBridge.send("completeTask", BH.text);
            else {
              const HH = {
                ...QH.e.get("currencyAmounts")
              };
              for (const BH in AH) HH[BH] = {
                ...HH[BH],
                amount: HH[BH].amount + AH[BH]
              };
              QH.e.apply({
                currencyAmounts: HH
              }), tH("closed")
            }
          else "closed" === hH && (SH(BH.rewards.pop()), tH("animStart"))
        },
        children: [(0, EH.jsx)("img", {
          className: "Chest",
          alt: "closed" !== hH ? "open chest" : "closed chest",
          src: `/textures/miscImages/Treasure Chest ${"closed"!==hH?"open":"closed"}.png`
        }), (0, EH.jsx)("div", {
          className: "Rewards",
          children: "closed" !== hH ? Object.keys(AH).map((HH => {
            const BH = null === XH || void 0 === XH ? void 0 : XH[HH];
            return !BH || BH.hidden ? null : (0, EH.jsxs)("div", {
              className: "Reward",
              children: [(0, EH.jsx)(WH.c, {
                name: BH.icon,
                className: "3x UiCurrencyIcon RewardIcon",
                style: {
                  color: BH.iconColour
                }
              }), (0, EH.jsx)("div", {
                className: "RewardAmountText",
                children: "animStart" === hH ? 0 : AH[HH]
              })]
            }, HH)
          })) : null
        }), "animStart" === hH ? (0, EH.jsx)(PH, {}) : null, (0, EH.jsx)("div", {
          className: "ChestsLeft",
          children: BH.rewards.length
        })]
      })
    }

    function PH() {
      const [HH, BH] = (0, rH.useState)(0);
      (0, rH.useEffect)((() => {
        BH(1)
      }), []);
      return (0, EH.jsx)(EH.Fragment, {
        children: Array.from({
          length: 40
        }).map(((BH, LH) => (0, EH.jsx)(WH.c, {
          name: "star",
          className: "3x UiCurrencyIcon OpenStar",
          style: {
            bottom: 50 * HH * Math.cos(LH / 40 * (2 * Math.PI)) + 50 + "vh",
            left: 50 * HH * Math.sin(LH / 40 * (2 * Math.PI)) + "vh",
            opacity: 0 === HH ? 1 : 0
          }
        }, LH)))
      })
    }
    uH.k.subscribe("requiredLibrariesLoaded", (() => {
      setTimeout((() => {
        const HH = new Image,
          BH = new Image;
        HH.src = "/textures/miscImages/Treasure Chest open.png", BH.src = "/textures/miscImages/Treasure Chest closed.png"
      }), 1e4)
    }));
    var TH = LH(3473),
      UH = LH(1061),
      VH = LH(1967),
      OH = LH(1450),
      bH = LH(317),
      kH = LH(2051),
      mH = LH(1313);

    function oH(HH) {
      var BH, LH;
      let {
        byId: AH,
        localId: rH
      } = HH;
      return null === rH ? null : null !== (BH = null === (LH = AH[rH]) || void 0 === LH ? void 0 : LH.name) && void 0 !== BH ? BH : null
    }

    function IH(HH) {
      let {
        lbStats: BH,
        storedState: LH = {}
      } = HH;
      const {
        userContext: AH
      } = (0, UH.e)(), SH = (0, kH.c)("players", oH), [hH, tH] = (0, rH.useState)(LH.selectedCat || (null === BH || void 0 === BH ? void 0 : BH[0]) || null), [zH, XH] = (0, rH.useState)(LH.selectedTimeframe || "Today"), [GH, YH] = (0, rH.useState)(null);
      (0, rH.useEffect)((() => {
        null === hH && null !== BH && BH.length > 0 && tH(BH[0])
      }), [BH, hH]);
      const [uH, QH] = (0, rH.useState)(LH.seeingTop || !1), [WH, MH] = (0, rH.useState)(!1), xH = (0, rH.useCallback)((() => {
        null !== hH && null !== zH && (CH.gameBridge.send("requestLeaderboard", {
          category: hH.value,
          timeframe: zH,
          seeTop: uH
        }), PH(!0), KH && cH(null))
      }), [hH, zH, LH, uH]);
      (0, rH.useEffect)((() => {
        xH(), LH.selectedCat = hH, LH.selectedTimeframe = zH, LH.seeingTop = uH
      }), [hH, zH, LH, uH, xH]), (0, rH.useEffect)((() => {
        if ((null === GH || void 0 === GH ? void 0 : GH.length) > 0)
          if (uH) uH && MH(null === IH(GH));
          else {
            for (const HH of GH)
              if (1 === HH.place) return void MH(!1);
            MH(!0)
          }
      }), [GH, uH]), (0, OH.d)("leaderboardResponse", (HH => {
        let {
          category: LH,
          timeframe: AH,
          data: rH
        } = HH;
        for (let SH = 0; SH < BH; SH++)
          if (BH[SH].value === LH) {
            tH(BH[SH]);
            break
          } XH(AH), YH(rH), PH(!1)
      }));
      const [vH, PH] = (0, rH.useState)(!0);

      function IH(HH) {
        const BH = oH(CH.gameBridge.latest("players"));
        for (let LH = 0; LH < HH.length; LH++)
          if (HH[LH].name === BH) return HH[LH].place;
        return null
      }
      const [fH, lH] = (0, rH.useState)(!1), [KH, cH] = (0, rH.useState)(null);
      (0, rH.useEffect)((() => {
        if (GH && !fH) {
          const HH = IH(GH);
          HH < (LH.lastSeenPlayerPlace || 0) && cH(LH.lastSeenPlayerPlace - HH), lH(!0)
        }
      }), [GH, LH, fH]), (0, rH.useEffect)((() => () => {
        GH && (LH.lastSeenPlayerPlace = IH(GH))
      }), [GH, LH]);
      const eH = (0, rH.useRef)(null),
        [qH, gH] = (0, rH.useState)(void 0);
      return (0, rH.useEffect)((() => {
        var HH, BH;
        qH !== (null === (HH = eH.current) || void 0 === HH ? void 0 : HH.offsetHeight) && gH(null === (BH = eH.current) || void 0 === BH ? void 0 : BH.offsetHeight)
      })), AH.isLoggedIn() ? (0, EH.jsxs)(EH.Fragment, {
        children: [(0, EH.jsxs)("div", {
          className: "LeaderboardSelectors",
          children: [(0, EH.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, EH.jsx)(TH.b, {
              options: BH.map((HH => ({
                label: HH.label,
                value: HH.value
              }))),
              value: hH,
              onChange: HH => {
                tH(HH)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), (0, EH.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, EH.jsx)(TH.b, {
              options: bH.Wc.map((HH => ({
                value: HH,
                label: HH,
                className: "LBDropdownMenuItem"
              }))),
              value: zH,
              onChange: HH => {
                XH(HH.label)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), WH ? (0, EH.jsx)("div", {
            className: "SeeTopText",
            onClick: () => {
              QH(!uH)
            },
            children: uH ? "See Yourself" : "See Top"
          }) : null]
        }), (0, EH.jsx)("div", {
          className: "LBTableWrapper",
          children: vH ? (0, EH.jsx)("div", {
            className: "LoaderContainer",
            children: (0, EH.jsx)(mH.d, {})
          }) : null === KH ? (0, EH.jsx)(EH.Fragment, {
            children: (0, EH.jsxs)("table", {
              className: "LBTable",
              children: [(0, EH.jsx)("thead", {
                className: "LBTableTHead",
                ref: eH,
                children: (0, EH.jsxs)("tr", {
                  children: [(0, EH.jsx)("th", {
                    className: "LBTablePlaceTH LBTableTH",
                    children: "PLACE"
                  }), (0, EH.jsx)("th", {
                    className: "LBTablePlayerTH LBTableTH",
                    children: "PLAYER"
                  }), (0, EH.jsx)("th", {
                    className: "LBTableValueTH LBTableTH",
                    children: hH.label.toUpperCase()
                  })]
                })
              }), (0, EH.jsx)("tbody", {
                children: GH.map((HH => (0, EH.jsxs)("tr", {
                  className: "LBTableTR " + (HH.name === SH ? "LBTableTRYou" : ""),
                  children: [(0, EH.jsx)("td", {
                    className: "LBTableTD",
                    children: `#${HH.place}`
                  }), (0, EH.jsx)("td", {
                    className: "LBTableTD",
                    children: (0, EH.jsx)(VH.b, {
                      text: [{
                        entityName: HH.name
                      }]
                    })
                  }), (0, EH.jsx)("td", {
                    className: "LBTableTD",
                    children: HH.stat
                  })]
                }, HH.name)))
              })]
            })
          }) : (0, EH.jsx)("div", {
            className: "LBIncreaseWrapper",
            onClick: () => {
              cH(null)
            },
            children: (0, EH.jsxs)("div", {
              className: "LBIncreaseDiv",
              children: [(0, EH.jsx)("div", {
                className: "TriangleUp"
              }), (0, EH.jsx)("div", {
                className: "LBIncreaseText",
                children: `${KH} Place${KH>1?"s":""}`
              })]
            })
          })
        })]
      }) : (0, EH.jsxs)("div", {
        className: "LBLoginDiv",
        children: [(0, EH.jsx)("div", {
          className: "LBLoginInfo",
          children: "Login to see the leaderboard"
        }), (0, EH.jsx)("div", {
          className: "LBLoginInfo",
          children: "You can login from the top left homescreen"
        })]
      })
    }
    var fH = LH(3465),
      lH = LH(81),
      KH = LH(30),
      cH = LH(3788);
    const eH = (0, rH.memo)((function(HH) {
      let {
        show: BH,
        onClose: LH
      } = HH;
      (0, fH.b)();
      const AH = (0, zH.j)("_tasks"),
        SH = (0, zH.j)("_availableLeaderboards"),
        [CH, XH] = (0, rH.useState)({});
      AH && Object.keys(AH).length > 0 && 0 === Object.keys(CH).length && XH(AH);
      const [GH] = (0, rH.useState)({
        tasks: {},
        leaderboard: {}
      }), YH = {
        tasks: {
          Title: "Tasks",
          getIsDefined: () => !!AH && Object.keys(AH).length > 0,
          content: (0, EH.jsx)(MH, {
            tasks: AH,
            lastDisplayedTasks: CH
          })
        },
        leaderboard: {
          Title: "Leaderboard",
          getIsDefined: () => (null === SH || void 0 === SH ? void 0 : SH.length) > 0,
          content: (0, EH.jsx)(IH, {
            lbStats: SH,
            storedState: GH.leaderboard
          })
        }
      };

      function uH() {
        for (const HH in YH)
          if (YH[HH].getIsDefined()) return HH;
        return null
      }
      const [QH, WH] = (0, rH.useState)(uH());

      function xH() {
        XH({
          ...AH
        }), LH()
      }(0, rH.useEffect)((() => {
        QH || WH(uH())
      }), [uH()]), (0, tH.e)(!0, QH && BH), (0, rH.useEffect)((() => {
        BH && !QH && (console.log("CLOSE"), xH())
      }), [BH, QH]);
      const [vH, PH] = (0, rH.useState)(!1);
      return (0, rH.useEffect)((() => {
        BH && QH && !vH && PH(!0)
      }), [BH, vH, QH]), (0, rH.useEffect)((() => {
        !vH && AH && "tasks" !== QH && WH("tasks")
      }), [vH, AH, QH]), (0, EH.jsx)(EH.Fragment, {
        children: QH ? (0, EH.jsx)(cH.d, {
          className: "RetentionFeaturesWrapper",
          show: BH,
          children: (0, EH.jsxs)(hH.b, {
            close: xH,
            escDoesExit: !1,
            closeClassnameList: ["VerticalMenuScreenDiv"],
            togglePointerLock: !1,
            globallyUniqueKey: "RetentionFeaturesComponent",
            children: [(0, EH.jsxs)("div", {
              className: "VerticalMenuScreenDiv",
              children: [(0, EH.jsx)(gH, {}), (0, EH.jsxs)("div", {
                className: "MenuDiv",
                children: [(0, EH.jsx)(qH, {
                  setCategory: WH,
                  menuCategories: YH,
                  selectedCat: QH
                }), (0, EH.jsx)("div", {
                  className: "MenuCategoryContainer",
                  children: YH[QH].content
                })]
              })]
            }), (0, EH.jsx)("div", {
              className: "BottomScreenMenuWrapper",
              children: lH.featureFlags.useDiscord && (0, EH.jsx)("div", {
                className: "DiscordMenuDivDiv",
                children: (0, EH.jsx)("div", {
                  className: "DiscordMenuDiv",
                  children: (0, EH.jsx)(NH, {
                    tasks: AH
                  })
                })
              })
            })]
          })
        }) : null
      })
    }));

    function qH(HH) {
      let {
        selectedCat: BH,
        setCategory: LH,
        menuCategories: AH
      } = HH;
      return (0, EH.jsx)("div", {
        className: "MenuHeader",
        children: Object.keys(AH).map((HH => AH[HH].getIsDefined() ? (0, EH.jsx)("div", {
          className: "MenuHeaderCategory " + (HH === BH ? "SelectedHeaderCat" : "UnselectedHeaderCat"),
          onClick: () => {
            LH(HH)
          },
          children: AH[HH].Title
        }, HH) : null))
      })
    }

    function gH() {
      const HH = (0, zH.j)("currencyAmounts");
      return (0, EH.jsx)("div", {
        className: "TopScreenCurrencies",
        children: Object.keys(null !== HH && void 0 !== HH ? HH : {}).map((BH => {
          const LH = HH[BH];
          return LH.hidden ? null : (0, EH.jsxs)("div", {
            className: "TopScreenCurrencyDiv",
            children: [(0, EH.jsx)(WH.c, {
              name: LH.icon,
              className: "3x UiCurrencyIcon",
              style: {
                color: LH.iconColour
              }
            }), (0, EH.jsx)("div", {
              className: "UiCurrencyAmount",
              children: LH.amount
            })]
          }, BH)
        }))
      })
    }

    function NH(HH) {
      let {
        tasks: BH
      } = HH;
      return (0, EH.jsxs)("a", {
        className: "MenuDiscordButtonWrapper",
        href: "https://discord.gg/playbloxd",
        target: "_blank",
        rel: "noreferrer",
        children: [(0, EH.jsx)(WH.c, {
          name: "discord",
          kit: "brands",
          className: "DiscordButton",
          onClick: () => {
            KH.e.setItem("DiscordPressed", !0), CH.gameBridge.send("setServerCookie", {
              key: "joinDiscord",
              value: "true"
            }), "joinDiscord" in BH && uH.k.AX("clientTaskProgress", {
              taskId: "joinDiscord",
              progress: 1
            })
          }
        }), (0, EH.jsx)(SH.b, {})]
      })
    }
    var RH = LH(15),
      jH = LH(1659),
      nH = LH(37415),
      FH = LH(34877),
      DH = LH(5037),
      wH = LH(152),
      ZH = LH(1152),
      dH = LH(1365),
      aH = LH(2895),
      sH = LH(1123),
      JH = LH(1664),
      iH = LH(2587),
      pH = LH(2536),
      yH = LH(1922),
      HB = LH(2108),
      BB = LH(1204),
      LB = LH(1475),
      AB = LH(37582),
      rB = LH(37589),
      SB = LH(37591),
      hB = LH(37593),
      tB = LH(37597),
      zB = LH(2954);

    function CB(HH) {
      let {
        playersHere: BH,
        exclude: LH,
        aT: AH
      } = HH;
      const {
        t: SH
      } = (0, sH.B)(), hH = (0, zB.n)(zB.j), [tH, zH] = (0, rH.useState)([]), CH = [], XH = (HH, BH) => {
        const AH = [...LH, ...CH.map((HH => HH.player.name))];
        CH.length < 3 && !(0, rB.l)(AH, HH.name) && CH.push({
          player: HH,
          status: BH
        })
      };
      for (const rH of BH) XH((0, tB.k)(rH.name, rH.cosmetics, rH.ranks), SH("worldSocial:inThisWorld"));
      if ("loaded" === hH.state.status)
        for (const rH of hH.state.recentPlayers) rH.preview.name && !rH.preview.isError && XH({
          ...rH.preview,
          location: {
            status: "offline"
          }
        }, SH("worldSocial:playedWithYou"));
      const GH = HH => {
        zH((BH => [...BH, HH])), AH(HH).finally((() => {
          zH((BH => BH.filter((BH => BH !== HH))))
        }))
      };
      return (0, EH.jsx)(EH.Fragment, {
        children: CH.map(((HH, BH) => {
          let {
            player: LH,
            status: AH
          } = HH;
          return (0, EH.jsx)(tB.g, {
            zIndex: CH.length - BH,
            player: LH,
            status: AH,
            onSendFriendRequest: () => {
              GH(LH.name)
            },
            actions: (0, EH.jsx)(dH.g, {
              tooltipInner: (0, EH.jsx)(EH.Fragment, {
                children: SH("recentPlayers:addFriend")
              }),
              delayShow: 0,
              hoverOnly: !0,
              children: (0, EH.jsx)(YH.i, {
                className: "FriendRequestButton",
                disabled: tH.includes(LH.name),
                ariaLabel: `${SH("recentPlayers:addFriend")} ${LH.name}`,
                onClick: () => {
                  GH(LH.name)
                },
                children: (0, EH.jsx)(WH.c, {
                  name: "user-plus"
                })
              })
            })
          }, `suggestion:${LH.name}`)
        }))
      })
    }
    var EB = LH(37601),
      XB = LH(37604),
      GB = LH(1168),
      YB = LH(1497),
      uB = LH(4721),
      QB = LH(257),
      WB = LH(5018);
    const MB = ["auto", "auto_existing"];

    function xB(HH) {
      return MB.includes(HH)
    }

    function vB(HH, BH) {
      const LH = (0, GB.tb)(HH);
      return null !== BH && (0, GB.tb)(BH) === LH || (0, WB.e)().some((HH => (0, GB.tb)(HH.name) === LH))
    }
    const PB = new Set;

    function TB(HH) {
      return `worldSocialSeen:${HH}`
    }

    function UB(HH) {
      return !HH || PB.has(HH) || !0 === KH.e.getItem(TB(HH))
    }

    function VB(HH) {
      HH && !PB.has(HH) && (PB.add(HH), KH.e.setItem(TB(HH), !0))
    }
    var OB = LH(2638),
      bB = LH(2642);

    function kB(HH) {
      let {
        show: BH,
        onClose: LH,
        opener: AH
      } = HH;
      const {
        lobbyName: SH,
        shownLobbyName: tH
      } = (0, kH.e)("connectedGame");
      return (0, rH.useEffect)((() => {
        BH && (0, LB.reportAnalyticsClick)({
          id: "world_social.open",
          value: AH
        })
      }), [BH]), (0, EH.jsx)(hH.b, {
        show: BH && null !== SH,
        close: LH,
        togglePointerLock: !1,
        className: "WorldSocialBackgroundScreen",
        globallyUniqueKey: "WorldSocialPopup",
        doGameplayStartStopOnShow: !0,
        ignorePressesAsShown: "icon" !== AH,
        children: BH && null !== SH && (0, EH.jsx)(mB, {
          lobbyName: SH,
          worldCode: null !== tH && void 0 !== tH ? tH : SH,
          onClose: LH
        }, SH)
      })
    }

    function mB(HH) {
      var BH;
      let {
        lobbyName: LH,
        worldCode: AH,
        onClose: SH
      } = HH;
      const {
        t: hH
      } = (0, sH.B)(), tH = (0, rH.useRef)(null), {
        settings: zH,
        loading: CH,
        answered: XH,
        change: GH,
        retry: uH
      } = (0, AB.h)(LH), QH = (0, JH.l)(), MH = (0, kH.e)("players"), xH = (0, kH.e)("hiddenPlayerNames"), [vH, PH] = (0, rH.useState)([]), [TH, VH] = (0, rH.useState)([]), [OH, bH] = (0, rH.useState)(!1), oH = (0, OB.e)(), IH = (0, rH.useMemo)((() => {
        var HH, BH;
        const LH = null === MH.localId ? null : null !== (HH = null === (BH = MH.byId[MH.localId]) || void 0 === BH ? void 0 : BH.name) && void 0 !== HH ? HH : null;
        return MH.ids.flatMap((HH => {
          const BH = MH.byId[HH];
          return null !== BH && void 0 !== BH && BH.name && BH.name !== LH ? [{
            name: BH.name,
            cosmetics: BH.cosmetics,
            ranks: BH.ranks
          }] : []
        }))
      }), [MH]), fH = (0, rH.useMemo)((() => (0, rB.k)(QH.friends, LH, IH.map((HH => HH.name)))), [QH.friends, LH, IH]), KH = lH.featureFlags.canSeeRealPlayerNames ? IH.filter((HH => null === (0, BB.d)(HH.name, xH))) : [], cH = null !== zH && void 0 !== zH && zH.canManage ? zH : null, eH = null !== cH, qH = null !== (BH = null === zH || void 0 === zH ? void 0 : zH.visibility) && void 0 !== BH ? BH : null, gH = "whitelist" === (null === cH || void 0 === cH ? void 0 : cH.visibility), NH = "private" === qH || "whitelist" === qH && !eH, {
        userContext: RH
      } = (0, UH.e)();
      (0, rH.useEffect)((() => {
        eH && vB(LH, RH.getPersonalWorldLobbyName()) && VB(RH.whamm)
      }), [eH, LH, RH]);
      const jH = NH ? hH("whitelist" === qH ? "socialBar:inviteWorldManagersOnly" : eH ? "worldSocial:privateLinkRow" : "socialBar:inviteWorldPrivate") : null,
        FH = null === jH;
      (0, rH.useEffect)((() => NH ? void 0 : yH.h.quietFriendAdded()), [NH]), (0, rH.useEffect)((() => yH.h.quietFriendRequests()), []);
      const zB = (0, rH.useRef)(!1);
      (0, rH.useEffect)((() => {
        const HH = tH.current,
          BH = !zB.current;
        zB.current = !0;
        const LH = null === document.activeElement || document.activeElement === document.body;
        null !== HH && void 0 !== HH && HH.contains(document.activeElement) || !BH && !LH || (0, nH.c)() || null === HH || void 0 === HH || HH.focus({
          preventScroll: !0
        })
      }), [FH]), (0, rH.useEffect)((() => {
        const HH = HH => {
          "Escape" !== HH.key || null !== document.activeElement && document.activeElement !== document.body || SH()
        };
        return document.addEventListener("keydown", HH), () => {
          document.removeEventListener("keydown", HH)
        }
      }), [SH]);
      const GB = null === zH && !XH,
        YB = (CH || QH.loading) && 0 === QH.friends.length,
        uB = QH.friends.flatMap((HH => HH.name ? [HH.name] : [])),
        QB = vH.filter((HH => !(0, rB.l)(uB, HH))),
        WB = fH.length + 3,
        MB = QB.length + WB,
        xB = OH ? QH.requests : QH.requests.slice(0, 1),
        PB = async function(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (const LH of (0, rB.o)(HH, DH.D)) {
            if (!await GH({
                whitelistAdd: LH
              }, (HH => (0, rB.q)(HH, LH, !0)), {
                quiet: BH
              })) return !1
          }
          return !0
        }, TB = HH => {
          if (gH && cH) return {
            on: (0, rB.l)(cH.whitelist, HH),
            onChange: BH => {
              (0, LB.reportAnalyticsClick)({
                id: "world_social.whitelist_toggle",
                value: BH ? "on" : "off"
              }), GH(BH ? {
                whitelistAdd: [HH]
              } : {
                whitelistRemove: HH
              }, (LH => (0, rB.q)(LH, [HH], BH)))
            }
          }
        }, UB = async (HH, BH) => {
          (0, LB.reportAnalyticsClick)({
            id: "world_social.add_friend",
            value: BH
          });
          const LH = await (0, pH.j)(HH, "world_social");
          return (0, pH.c)(LH, HH, {
            announceSent: !1
          }), "failed" !== LH.kind && ("sent" === LH.kind && PH((BH => (0, rB.l)(BH, HH) ? BH : [...BH, HH])), gH && await PB([HH]), !0)
        };
      return (0, EH.jsxs)("div", {
        ref: tH,
        className: "WorldSocialPopup AnimFadeInScaleUp",
        tabIndex: -1,
        onKeyDown: HH => {
          HH.target === HH.currentTarget && " " === HH.key && HH.preventDefault()
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "WorldSocialTitle",
        children: [(0, EH.jsxs)("div", {
          className: "WorldSocialHeader",
          children: [(0, EH.jsx)("h2", {
            id: "WorldSocialTitle",
            className: "WorldSocialTitle SmallTextBold",
            children: hH("worldSocial:title")
          }), (0, EH.jsx)(YH.q, {
            className: "WorldSocialClose",
            onClick: SH
          })]
        }), GB && (0, EH.jsx)("div", {
          className: "WorldSocialLoading",
          children: (0, EH.jsx)(mH.d, {})
        }), !GB && (0, EH.jsxs)(EH.Fragment, {
          children: [(0, EH.jsx)(SB.b, {
            worldCode: AH,
            message: jH
          }), null === zH && !CH && (0, EH.jsx)("button", {
            type: "button",
            className: "WorldSocialLoadFailed",
            onClick: uH,
            children: hH("worldSocial:loadFailed")
          }), eH && null !== qH && (0, EH.jsx)(hB.d, {
            visibility: qH,
            onPick: HH => {
              (async HH => {
                if (HH === qH) return;
                (0, LB.reportAnalyticsClick)({
                  id: "world_social.set_mode",
                  value: HH
                });
                const BH = [...(0, XB.e)(LH), ...TH],
                  AH = "whitelist" === HH && zH ? (0, rB.g)(fH, BH, zH.whitelist) : [];
                await GH({
                  setVisibility: HH
                }, (BH => ({
                  ...BH,
                  visibility: HH
                }))) && await PB(AH)
              })(HH)
            }
          }), QH.requests.length > 0 && (0, EH.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, EH.jsx)(aH.b, {
              label: (0, EH.jsxs)(EH.Fragment, {
                children: [(0, EH.jsx)(WH.c, {
                  name: HB.g
                }), " ", hH("socialBar:requests")]
              }),
              meta: (0, EH.jsxs)(EH.Fragment, {
                children: [QH.requests.length, QH.requests.length === ZH.l && (0, EH.jsx)("span", {
                  className: "SocialSectionTitleLimit",
                  children: hH("socialBar:limitReached")
                }), !OH && QH.requests.length > 1 && (0, EH.jsx)("button", {
                  type: "button",
                  className: "WorldSocialMoreRequests",
                  onClick: () => {
                    bH(!0)
                  },
                  children: hH("worldSocial:moreRequests", {
                    count: QH.requests.length - 1
                  })
                })]
              })
            }), (0, EH.jsx)("div", {
              className: "PlayerRows",
              children: xB.map(((HH, BH) => (0, EH.jsx)(tB.g, {
                zIndex: xB.length - BH,
                player: HH,
                actions: (0, EH.jsxs)(EH.Fragment, {
                  children: [(0, EH.jsx)(dH.g, {
                    tooltipInner: (0, EH.jsx)(EH.Fragment, {
                      children: hH("general:accept")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, EH.jsx)(YH.i, {
                      className: "FriendRequestButton",
                      ariaLabel: `${hH("general:accept")} ${HH.name}`,
                      analyticsClick: {
                        id: "social.accept_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, pH.f)(HH.name, !0, {
                          source: "world_social"
                        })
                      },
                      children: (0, EH.jsx)(WH.c, {
                        name: "check"
                      })
                    })
                  }), (0, EH.jsx)(dH.g, {
                    tooltipInner: (0, EH.jsx)(EH.Fragment, {
                      children: hH("general:decline")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, EH.jsx)(YH.m, {
                      className: "FriendRequestButton",
                      ariaLabel: `${hH("general:decline")} ${HH.name}`,
                      analyticsClick: {
                        id: "social.decline_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, pH.f)(HH.name, !1, {
                          source: "world_social"
                        })
                      },
                      children: (0, EH.jsx)(WH.c, {
                        name: "xmark"
                      })
                    })
                  })]
                })
              }, `incoming:${HH.name}`)))
            })]
          }), (0, EH.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, EH.jsx)(aH.b, {
              label: (0, EH.jsxs)(EH.Fragment, {
                children: [(0, EH.jsx)(WH.c, {
                  name: HB.e
                }), " ", hH("socialBar:friends")]
              }),
              meta: QH.loaded && !NH ? QH.friends.length : void 0
            }), (0, EH.jsx)(EB.e, {
              label: hH("socialBar:sendRequest"),
              icon: "user-plus",
              placeholder: hH("worldSocial:addFriendPlaceholder"),
              onSubmit: async HH => await UB(HH, "field") ? {
                ok: !0
              } : {
                ok: !1,
                error: null
              }
            }), YB && (0, EH.jsx)("div", {
              className: "WorldSocialLoading",
              children: (0, EH.jsx)(mH.d, {})
            }), !YB && (0, EH.jsxs)(EH.Fragment, {
              children: [(0, EH.jsxs)("div", {
                className: "PlayerRows",
                children: [QB.map(((HH, BH) => (0, EH.jsx)(tB.g, {
                  zIndex: MB - BH,
                  player: (0, tB.k)(HH, null),
                  status: hH("worldSocial:requestSent"),
                  IX: TB(HH)
                }, `request:${HH}`))), !NH && fH.map(((HH, BH) => (0, EH.jsx)(tB.e, {
                  zIndex: WB - BH,
                  row: HH,
                  IX: TB(HH.friend.name),
                  canInvite: (0, rB.d)(zH) && "here" !== HH.place,
                  invited: TH.includes(HH.friend.name),
                  onInvite: () => {
                    (async HH => {
                      (0, LB.reportAnalyticsClick)({
                        id: "world_social.invite",
                        value: "friend"
                      });
                      const BH = () => {
                        VH((BH => BH.filter((BH => BH !== HH))))
                      };
                      VH((BH => [...BH, HH]));
                      const AH = (0, rB.p)(zH, HH);
                      if ("none" !== AH) {
                        const LH = PB([HH], "quiet" === AH);
                        if ("required" === AH && !await LH) return void BH()
                      }
                      await (0, iH.m)(HH, "game", {
                        announceSent: !1,
                        source: "world_social"
                      }) ? ((0, XB.f)(LH, HH), setTimeout(BH, wH.p)) : BH()
                    })(HH.friend.name)
                  }
                }, HH.friend.name))), QH.loaded && 0 === QH.friends.length && (0, EH.jsx)(CB, {
                  playersHere: KH,
                  exclude: vH,
                  aT: HH => UB(HH, "suggestion")
                })]
              }), gH && QH.loaded && 0 === QH.friends.length && 0 === QB.length && (0, EH.jsx)("div", {
                className: "WorldSocialEmpty",
                children: hH("worldSocial:whitelistNoFriends")
              })]
            })]
          })]
        }), oH && (0, EH.jsxs)(YH.W, {
          className: "WorldSocialManageLobby SmallTextLight",
          onClick: () => {
            (0, bB.f)({
              page: "players",
              source: "invite_popup"
            }), SH()
          },
          children: [(0, EH.jsx)(WH.c, {
            name: "users-gear"
          }), " ", hH("lobbyManageEntry:manageLobby")]
        })]
      })
    }
    var oB = LH(2667),
      IB = LH(2630);

    function fB(HH) {
      let {
        show: BH,
        onClose: LH,
        option: AH
      } = HH;
      const SH = (0, kH.c)("connectedGame", (HH => (0, oB.e)(HH) ? HH.lobbyName : null));
      return function(HH) {
        const {
          gameEntrySource: BH,
          loadingOverlayVisible: LH
        } = (0, RH.m)(["gameEntrySource", "loadingOverlayVisible"]), {
          userContext: AH
        } = (0, UH.e)(), SH = (0, kH.e)("localPlayerAlive"), hH = (0, kH.c)("players", (HH => null !== HH.localId && void 0 !== HH.byId[HH.localId])), tH = (0, IB.g)(), zH = (0, rH.useRef)(null), CH = (0, rH.useRef)(null), EH = "worldCreation" === BH, XH = AH.whamm, GH = AH.getPersonalWorldLobbyName();
        (0, rH.useEffect)((() => {
          var BH;
          null !== HH && (null === (BH = CH.current) || void 0 === BH ? void 0 : BH.lobbyName) !== HH && null !== eB(HH, EH, XH, GH) && (CH.current = (0, AB.g)(HH))
        }), [EH, HH, XH, GH]), (0, rH.useEffect)((() => {
          if (null !== HH && (!LH && SH && hH)) return tH.whenShown((() => {
            var BH;
            const LH = zH.current === HH ? null : eB(HH, EH, XH, GH);
            if (null === LH) return;
            const AH = (null === (BH = CH.current) || void 0 === BH ? void 0 : BH.lobbyName) === HH ? CH.current : (0, AB.g)(HH);
            CH.current = null, zH.current = HH,
              function(HH, BH, LH, AH) {
                const {
                  lobbyName: rH
                } = HH, SH = () => {
                  ! function(HH, BH) {
                    if (!jB()) return void BH(!0);
                    const LH = performance.now() + NB;
                    let AH = 0;
                    const rH = () => {
                      AH = jB() ? 0 : AH + 1, AH >= 2 ? BH(!0) : !RB(HH) || performance.now() > LH ? BH(!1) : setTimeout(rH, gB)
                    };
                    setTimeout(rH, gB)
                  }(rH, (SH => {
                    AH();
                    const hH = "auto_existing" === BH && UB(LH);
                    SH && RB(rH) && !KB(rH) && !hH && (qB(HH) ? cB(rH) : (cB(rH), VB(LH), function(HH) {
                      const BH = QB.e.world_social_popup_v1;
                      return (0, QB.n)("world_social_popup_v1"), (0, LB.reportAnalyticsClick)({
                        id: "world_social.auto_open",
                        value: `${BH}:${(0,uB.b)()}:${HH}`
                      }), (0, YB.flushClientAnalyticsEvents)(), "auto_open" === BH
                    }(BH) && ((0, AB.c)(HH), uH.k.AX("toggleMenu", `inviteLink|${BH}`), "inviteLink" !== RH.c.get("openInGameMenuName") && console.warn("World social popup: the auto-open asked for it, but it didn't open"))))
                  }))
                };
                if ("auto" === BH && !qB(HH)) return void SH();
                HH.response.then((HH => {
                  if (!("error" in HH)) return HH.settings.canManage ? void SH() : (cB(rH), void AH());
                  AH()
                }))
              }(AH, LH, XH, (() => {
                zH.current === HH && (zH.current = null)
              }))
          }))
        }), [tH, EH, LH, HH, SH, hH, XH, GH])
      }(SH), (0, rH.useEffect)((() => {
        BH && null !== SH && cB(SH)
      }), [BH, SH]), null !== SH ? (0, EH.jsx)(kB, {
        show: BH,
        onClose: LH,
        opener: xB(AH) ? AH : "icon"
      }) : (0, EH.jsx)(FH.c, {
        show: BH,
        onClose: LH
      })
    }
    const lB = new Set;

    function KB(HH) {
      return lB.has(HH) || !!KH.f.getItem(`worldSocialShown:${HH}`)
    }

    function cB(HH) {
      lB.add(HH), KH.f.setItem(`worldSocialShown:${HH}`, !0)
    }

    function eB(HH, BH, LH, AH) {
      return KB(HH) ? null : function(HH) {
        let {
          justMade: BH,
          playerId: LH,
          lobbyName: AH,
          personalWorld: rH
        } = HH;
        return BH ? "auto" : !UB(LH) && vB(AH, rH) ? "auto_existing" : null
      }({
        justMade: BH,
        playerId: LH,
        lobbyName: HH,
        personalWorld: AH
      })
    }

    function qB(HH) {
      let {
        answer: BH
      } = HH;
      return null !== BH && "settings" in BH && !BH.settings.canManage
    }
    const gB = 500,
      NB = 3e4;

    function RB(HH) {
      return "inGame" === RH.c.get("gameState") && CH.gameBridge.latest("connectedGame").lobbyName === HH
    }

    function jB() {
      return (0, nH.c)() || RH.c.get("loadingOverlayVisible") || (0, jH.t)()
    }
    var nB = LH(37146),
      FB = LH(3508),
      DB = LH(2064),
      wB = LH(3503);

    function ZB(HH, BH, LH) {
      return wB.b.overridesTexture(HH) ? wB.b.getTexture(HH, BH).url : LH
    }
    var dB = LH(10703);
    const aB = (HH, BH) => {
        (0, rH.useEffect)((() => {
          setTimeout((() => {
            HH && HH.current && HH.current.focus()
          }), 1)
        }), [BH])
      },
      sB = (0, rH.memo)((function(HH) {
        let {
          isInputActive: BH,
          onClose: LH,
          onChange: AH,
          textAreaRef: rH,
          fontSize: SH,
          lineHeight: hH,
          currText: tH
        } = HH;
        return (0, EH.jsxs)("div", {
          className: "WriteOnBoardWrapper",
          children: [(0, EH.jsx)("img", {
            src: ZB("board_full", FB.k.BLOCK, dB),
            alt: "Board",
            className: "WriteOnBoardImg"
          }), (0, EH.jsx)("textarea", {
            className: "WriteOnBoardTextArea",
            value: tH,
            ref: rH,
            style: {
              fontSize: `${SH}rem`,
              lineHeight: `${hH}rem`
            },
            onKeyDown: HH => {
              var BH;
              "Escape" !== HH.key && (HH.stopPropagation(), "Tab" === HH.key && function(HH) {
                HH.preventDefault();
                const BH = HH.target,
                  {
                    value: LH
                  } = BH;
                let AH = BH.selectionStart,
                  rH = BH.selectionEnd,
                  SH = LH.slice(AH, rH);
                if (!SH.includes("\n") && !HH.shiftKey) return void document.execCommand("insertText", !1, "\t");
                for (; AH > 0 && "\n" !== LH[AH - 1];) AH--;
                const hH = "\n" === LH[rH - 1];
                hH && rH--;
                SH = LH.slice(AH, rH);
                const tH = SH.split("\n").map((BH => HH.shiftKey ? BH.replace(/^\t/, "") : "\t" + BH)).join("\n");
                if (HH.shiftKey && LH.slice(AH, rH) === tH) return;
                let {
                  selectionStart: zH
                } = BH;
                BH.setSelectionRange(AH, rH), zH > AH && (!HH.shiftKey || "\t" === SH[0]) && (zH += HH.shiftKey ? -1 : 1);
                rH = AH + tH.length + (hH ? 1 : 0), document.execCommand("insertText", !1, tH), BH.setSelectionRange(zH, rH)
              }(HH), /^F\d+$/i.test(HH.code) && null !== (BH = DB.w.OpenCodeEditor) && void 0 !== BH && BH.includes(HH.code) && LH())
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: AH
          })]
        })
      }));

    function JB(HH) {
      return 1.3 * HH
    }
    var iB = LH(1711);
    const pB = (0, rH.memo)((function(HH) {
        let {
          show: BH,
          onOpen: LH,
          onClose: AH
        } = HH;
        const [SH, tH] = (0, rH.useState)(null), [zH, XH] = (0, rH.useState)(""), [GH, uH] = (0, rH.useState)(0), [QH, WH] = (0, rH.useState)(null), [MH, xH] = (0, rH.useState)({
          text: "",
          textSize: 0
        }), vH = (HH, BH) => QH ? (0, nB.n)(HH, BH, QH.width, QH.height) : (0, nB.g)(HH, BH), PH = HH => {
          XH(vH(zH, HH)), uH(HH), KH.e.setItem("lastBoardTextSize", HH)
        }, TH = () => {
          AH(), QH && zH === MH.text && GH === MH.textSize || CH.gameBridge.send("writeOnBoard", {
            pos: SH,
            text: zH,
            textSize: GH
          })
        };
        (0, kH.b)("boardEditRequested", (HH => {
          var rH, SH;
          if (!lH.featureFlags.canSeePlayerWrittenText) return;
          if (null === HH) return tH(null), void(BH && AH());
          const {
            pos: hH,
            noticeboardSpan: zH,
            text: CH
          } = HH;
          tH(hH), WH(zH), XH(CH);
          const EH = null !== (rH = null !== (SH = HH.textSize) && void 0 !== SH ? SH : KH.e.getItem("lastBoardTextSize")) && void 0 !== rH ? rH : 0;
          uH(EH), xH({
            text: CH,
            textSize: EH
          }), KH.e.setItem("lastBoardTextSize", EH), LH()
        }));
        const UH = (0, rH.useRef)(null);
        aB(UH, BH), (0, iB.v)(UH, {
          kind: "sign",
          submit: TH
        });
        const VH = function(HH, BH) {
            const LH = nB.c[HH];
            if (!BH) return LH.uiFontSize;
            const {
              numLines: AH,
              charsPerLine: rH
            } = (0, nB.y)(BH.width, BH.height, HH);
            return LH.uiFontSize * Math.min(LH.charsPerLine / rH, LH.numLines / AH)
          }(GH, QH),
          OH = JB(VH);
        return (0, EH.jsxs)(hH.b, {
          className: "WriteOnBoardBg",
          close: TH,
          escDoesExit: !0,
          show: BH,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, EH.jsx)(sB, {
            isInputActive: () => BH,
            onClose: TH,
            onChange: HH => {
              XH(vH(HH.target.value, GH))
            },
            textAreaRef: UH,
            fontSize: VH,
            lineHeight: OH,
            currText: zH
          }), (0, EH.jsx)("div", {
            className: "WriteOnBoardTextSizeHeader SmallTextBold",
            children: "Text Size"
          }), (0, EH.jsxs)("div", {
            className: "WriteOnBoardTextSizeButtons",
            children: [(0, EH.jsx)(YH.i, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                PH(0)
              },
              disabled: 0 === GH,
              children: "Small"
            }), (0, EH.jsx)(YH.i, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                PH(1)
              },
              disabled: 1 === GH,
              children: "Medium"
            }), (0, EH.jsx)(YH.i, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                PH(2)
              },
              disabled: 2 === GH,
              children: "Large"
            })]
          })]
        })
      })),
      yB = (0, rH.memo)((function(HH) {
        let {
          show: BH,
          onOpen: LH,
          onClose: AH
        } = HH;
        const [SH, tH] = (0, rH.useState)(""), zH = () => {
          AH(), CH.gameBridge.send("writeNameTag", SH)
        };
        (0, OH.d)("EditNameTag", (HH => {
          lH.featureFlags.canSeePlayerWrittenText && null !== HH && (tH(HH), LH())
        }));
        const XH = (0, rH.useRef)(null);
        aB(XH, BH), (0, iB.v)(XH, {
          kind: "nameTag",
          submit: zH
        });
        const GH = nB.F.nameTag.uiFontSize,
          uH = JB(GH);
        return (0, EH.jsxs)(hH.b, {
          className: "WriteOnBoardBg",
          close: zH,
          escDoesExit: !0,
          show: BH,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, EH.jsx)("div", {
            className: "NameTagTrim",
            children: (0, EH.jsx)(sB, {
              isInputActive: () => BH,
              onClose: zH,
              onChange: HH => {
                const BH = HH.target.value.replaceAll("\n", "");
                tH((0, nB.r)(BH, "nameTag"))
              },
              textAreaRef: XH,
              fontSize: GH,
              lineHeight: uH,
              currText: SH
            })
          }), (0, EH.jsx)(YH.i, {
            onClick: zH,
            className: "WriteOnNameTagCloseButton",
            children: "Finish"
          })]
        })
      }));
    var HL = LH(18898);
    const BL = (0, rH.memo)((function(HH) {
      let {
        show: BH,
        onOpen: LH,
        onClose: AH
      } = HH;
      const [SH, tH] = (0, rH.useState)(""), [zH, XH] = (0, rH.useState)(0), [GH, uH] = (0, rH.useState)(!1), [QH, WH] = (0, rH.useState)(["", "", "", "", "", "", "", "", "", ""]), [MH, xH] = (0, rH.useState)("Title"), [vH, PH] = (0, rH.useState)(!0), [TH, UH] = (0, rH.useState)(!1);
      (0, OH.d)("EditBook", (HH => {
        let {
          pages: BH,
          title: AH,
          isPublished: rH
        } = HH;
        var SH;
        lH.featureFlags.canSeePlayerWrittenText && (null !== BH ? (WH(BH), tH(null !== (SH = BH[0]) && void 0 !== SH ? SH : ""), xH(AH), XH(0), uH(!1), PH(!rH), UH(!1), LH()) : WH(["", "", "", "", "", "", "", "", "", ""]))
      }));
      const VH = (0, rH.useRef)(null),
        bH = (0, rH.useRef)(null);
      aB(VH, BH), (0, iB.v)(VH, {
        kind: "book"
      }), (0, iB.v)(bH, {
        kind: "qh"
      });
      const kH = nB.F.book.uiFontSize,
        mH = JB(kH),
        oH = () => {
          (vH || TH) && CH.gameBridge.send("writeBook", {
            pages: [...QH],
            title: MH,
            published: !vH && TH
          })
        },
        IH = HH => {
          GH && (QH[zH] = SH, uH(!1)), tH(QH[HH]), XH(HH)
        };
      return (0, EH.jsxs)(hH.b, {
        className: "WriteOnBoardBg",
        close: () => {
          AH(), QH[zH] = SH, oH()
        },
        escDoesExit: !0,
        show: BH,
        togglePointerLock: !1,
        globallyUniqueKey: "WriteOnBookComp",
        children: [(0, EH.jsxs)("div", {
          className: "WriteOnBookWrapper",
          children: [(0, EH.jsx)("textarea", {
            className: "BookTitleTextArea SmallTextLight",
            value: MH,
            ref: bH,
            style: {
              fontSize: "2.5rem",
              lineHeight: `${mH}rem`
            },
            onKeyDown: HH => {
              vH && HH.stopPropagation()
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: HH => {
              let BH = HH.target.value;
              BH = (0, nB.r)(BH, "qh"), xH(BH)
            },
            readOnly: !vH
          }), (0, EH.jsx)("img", {
            src: ZB("book_page", FB.k.ITEM, HL),
            alt: "book_page",
            className: "WriteOnBookPageImg"
          }), (0, EH.jsx)("div", {
            className: "BookTextAreaPadding",
            children: (0, EH.jsx)("textarea", {
              className: "WriteOnBookPageTextArea",
              value: SH,
              ref: VH,
              style: {
                fontSize: `${kH}rem`,
                lineHeight: `${mH}rem`
              },
              onKeyDown: HH => {
                vH && HH.stopPropagation()
              },
              spellCheck: "false",
              autoComplete: "off",
              onChange: HH => {
                const BH = HH.target.value;
                tH((0, nB.r)(BH, "book")), uH(!0)
              },
              readOnly: !vH
            })
          })]
        }), (0, EH.jsxs)("div", {
          className: "BookNavigationWrapper",
          children: [(0, EH.jsx)(YH.i, {
            disabled: 0 === zH,
            onClick: () => {
              IH(zH - 1)
            },
            className: "BookNavButton",
            children: "<"
          }), (0, EH.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, EH.jsx)(YH.i, {
            disabled: 9 === zH,
            onClick: () => {
              IH(zH + 1)
            },
            className: "BookNavButton",
            children: ">"
          }), (0, EH.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, EH.jsx)(YH.i, {
            onClick: () => {
              PH(!vH), UH(!0)
            },
            className: "BookNavButton",
            children: vH ? "Publish" : "Edit"
          })]
        })]
      })
    }));
    var LL = LH(37479),
      AL = LH(9370),
      rL = LH(1390),
      SL = LH(1986);

    function hL(HH) {
      let {
        show: BH,
        buttons: LH
      } = HH;
      const {
        t: AH
      } = (0, sH.B)(), SH = (0, rH.useRef)(null);
      return (0, rH.useEffect)((() => {
        var HH, LH;
        const AH = BH ? (0, LL.C)() : null;
        if (!AH || !(0, rL.m)()) return;
        const rH = (0, LL.k)().findIndex((HH => HH.id === AH));
        (0, AL.n)(null !== (HH = null === (LH = SH.current) || void 0 === LH ? void 0 : LH.children[rH]) && void 0 !== HH ? HH : null)
      }), [BH]), 0 === LH.length ? null : (0, EH.jsx)("div", {
        ref: SH,
        className: "ClientGameInventoryButtons",
        onPointerDown: HH => {
          HH.stopPropagation()
        },
        onPointerUp: HH => {
          HH.stopPropagation()
        },
        children: LH.map((HH => {
          const BH = AH(HH.labelKey);
          return (0, EH.jsxs)(YH.u, {
            className: HH.className,
            disabled: HH.disabled,
            onClick: () => {
              (0, LL.t)(HH)
            },
            ariaLabel: HH.iconOnly ? BH : void 0,
            title: HH.iconOnly ? BH : void 0,
            children: [HH.icon && (0, EH.jsxs)("div", {
              className: "ClientGameInventoryButtonIcon",
              children: ["item" === HH.icon.kind && (0, EH.jsx)(SL.e, {
                itemName: HH.icon.name,
                amount: 0
              }), "image" === HH.icon.kind && (0, EH.jsx)("img", {
                src: HH.icon.src,
                alt: "",
                draggable: !1
              }), "icon" === HH.icon.kind && (0, EH.jsx)(WH.c, {
                name: HH.icon.name
              })]
            }), !HH.iconOnly && BH]
          }, HH.id)
        }))
      })
    }
    var tL = LH(37608),
      zL = LH(3015),
      CL = LH(34999),
      EL = LH(37412),
      XL = LH(37410),
      GL = LH(1302);
    let YL = null;
    window.setShowInventoryAdsOverride = HH => {
      YL = HH
    };
    const uL = 24e4;
    var QL = LH(1991);

    function WL(HH) {
      var BH;
      let {
        draggedInfo: {
          name: LH,
          attributes: AH,
          amount: rH
        },
        toAddRef: SH
      } = HH;
      return (0, EH.jsx)("div", {
        className: "DraggedInvenItem",
        ref: SH,
        children: (0, EH.jsx)(SL.e, {
          itemName: LH,
          amount: rH,
          enchantmentTier: null === AH || void 0 === AH || null === (BH = AH.customAttributes) || void 0 === BH ? void 0 : BH.enchantmentTier,
          bar: (0, QL.h)(AH)
        })
      })
    }

    function ML(HH) {
      let {
        className: BH = "",
        displayInfo: LH,
        domRef: AH
      } = HH;
      return (0, EH.jsxs)("div", {
        className: `InvenHoveredItemInfo SmallTextBold ${BH}`,
        ref: AH,
        children: [(0, EH.jsx)(VH.b, {
          text: (0, bH.pb)(LH.name, {
            fontStyle: LH.fontStyle
          })
        }), (0, EH.jsx)("div", {
          className: "InvenHoveredItemInfoDescription",
          children: (0, EH.jsx)(VH.b, {
            text: LH.desc
          })
        })]
      })
    }

    function xL(HH) {
      let {
        info: BH,
        draggedInfo: LH
      } = HH;
      const AH = (0, rH.useRef)(null);
      return (0, rH.useLayoutEffect)((() => {
        const HH = AH.current,
          {
            left: LH,
            top: rH
          } = function(HH, BH, LH, AH) {
            const rH = AH.left * LH.width / 100 + 4,
              SH = LH.width - AH.right * LH.width / 100 - 4 - BH.width,
              hH = AH.top * LH.height / 100 + 4,
              tH = LH.height - 4 - BH.height;
            return {
              left: Math.max(rH, Math.min(HH.x - BH.width / 2, SH)),
              top: Math.max(hH, Math.min(HH.y - 48 - BH.height, tH))
            }
          }({
            x: BH.initTouchX,
            y: BH.initTouchY
          }, {
            width: HH.offsetWidth,
            height: HH.offsetHeight
          }, {
            width: window.innerWidth,
            height: window.innerHeight
          }, RH.c.get("notchSize"));
        HH.style.left = `${LH}px`, HH.style.top = `${rH}px`
      }), [BH]), (0, EH.jsxs)("div", {
        className: "LongHoldSplitInfoUI SmallTextBold",
        ref: AH,
        children: [(0, EH.jsx)("div", {
          className: "LongHoldSplitInfoUIInner",
          style: {
            width: LH.amount / BH.maxAmount * 100 + "%"
          }
        }), (0, EH.jsxs)("div", {
          className: "LongHoldSplitInfoUIText",
          children: [LH.amount, "/", BH.maxAmount]
        })]
      })
    }
    var vL = LH(1038),
      PL = LH.n(vL),
      TL = LH(176);
    const UL = (0, rH.memo)((function(HH) {
      let {
        show: BH,
        onOpen: LH,
        onClose: AH
      } = HH;
      const SH = (0, rH.useRef)({
          pos: null
        }),
        [tH, zH] = (0, rH.useState)([0, 0, 0, 0]),
        {
          userContext: XH
        } = (0, UH.e)();
      (0, kH.b)("ironChestOpenRequested", (HH => {
        let {
          pos: BH,
          ownerDbId: AH,
          cachedPasskey: rH
        } = HH;
        if (SH.current.pos = BH, AH !== XH.whamm) return null !== rH ? (zH(rH), void GH(rH)) : void LH();
        GH(tH)
      })), (0, kH.b)("localEffectUpdated", (HH => {
        "Thief" === HH && AH()
      }));
      const GH = HH => {
        const {
          pos: BH
        } = SH.current;
        CH.gameBridge.send("openIronChest", {
          pos: BH,
          mh: HH
        })
      };
      return (0, EH.jsx)(hH.b, {
        className: "IronChestPasskeyInputScreenOuter",
        close: AH,
        escDoesExit: !0,
        show: BH,
        togglePointerLock: !1,
        globallyUniqueKey: "IronChestPasskeyInputScreen",
        children: (0, EH.jsx)("div", {
          className: "IronChestPasskeyInputScreen",
          children: (0, EH.jsx)(VL, {
            mh: tH,
            onPasskeyUpdated: zH,
            confirmText: "ironChest:tryUnlock",
            onConfirm: () => {
              GH(tH)
            }
          })
        })
      })
    }));

    function VL(HH) {
      let {
        className: BH = "",
        mh: LH,
        onPasskeyUpdated: AH,
        confirmText: rH,
        onConfirm: SH
      } = HH;
      const {
        t: hH
      } = (0, sH.B)();
      return (0, EH.jsxs)("div", {
        className: `${BH} IronChestPasskeyInput`,
        children: [(0, EH.jsx)("div", {
          className: "SmallTextBold IronChestPasskeyInputTitle",
          children: hH("ironChest:passkeyInputTitle")
        }), (0, EH.jsx)("div", {
          className: "IronChestPasskeyInputRow",
          children: new Array(TL.g.ironChestPasskeyLength).fill(0).map(((HH, BH) => (0, EH.jsx)(OL, {
            digit: LH[BH],
            onPasskeyDigitUpdated: HH => {
              const rH = [...LH];
              rH[BH] = HH, AH(rH)
            }
          }, BH)))
        }), (0, EH.jsx)(YH.u, {
          className: "IronChestPasskeyInputConfirmButton",
          onClick: SH,
          children: hH(rH)
        })]
      })
    }

    function OL(HH) {
      let {
        digit: BH,
        onPasskeyDigitUpdated: LH
      } = HH;
      return (0, EH.jsx)("div", {
        className: "IronChestPasskeyDigitInputWrapper",
        children: (0, EH.jsxs)("div", {
          className: "IronChestPasskeyDigitInput",
          children: [(0, EH.jsx)(YH.u, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              LH(bH.d.mod(BH + 1, 10))
            },
            children: (0, EH.jsx)(WH.c, {
              name: "angle-up"
            })
          }), (0, EH.jsx)("div", {
            className: "SmallTextBold IronChestPasskeyDigit",
            children: BH
          }), (0, EH.jsx)(YH.u, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              LH(bH.d.mod(BH - 1, 10))
            },
            children: (0, EH.jsx)(WH.c, {
              name: "angle-down"
            })
          })]
        })
      })
    }
    var bL = LH(34996),
      kL = LH(37659),
      mL = LH(37403);

    function oL(HH) {
      let {
        specialItemInfo: BH,
        setHovered: LH,
        pointerDown: AH,
        pointerUp: SH,
        enchantingTablePosition: hH,
        enchantingTableBlockName: tH
      } = HH;
      const {
        t: XH
      } = (0, sH.B)(), [GH, uH] = (0, rH.useState)(null), [QH, WH] = (0, rH.useState)(null), MH = (0, zH.j)("auraPerLevel"), xH = Math.floor((0, kH.e)("aura") / MH);
      (0, rH.useEffect)((() => {
        if (!BH) return void uH(null);
        let HH = !0;
        return CH.gameBridge.query("enchantingOffer", {
          slot: BH.idx,
          name: BH.name,
          blockName: tH
        }).then((LH => {
          var AH, rH;
          let {
            perks: SH,
            options: hH
          } = LH;
          if (!HH) return;
          const tH = {
            isEnchantable: SH.length > 0,
            possibleEnchantments: SH,
            options: hH.map((HH => {
              let {
                level: BH,
                odds: LH
              } = HH;
              return {
                level: BH,
                possibilities: Object.fromEntries(LH.map(((HH, BH) => [`Tier ${BH+1}`, HH])))
              }
            })),
            isAlreadyEnchanted: SH.length > 0 && void 0 !== (null === (AH = BH.attributes) || void 0 === AH || null === (rH = AH.customAttributes) || void 0 === rH ? void 0 : rH.enchantmentTier)
          };
          uH(tH), (HH => {
            const BH = HH.options.map((HH => Object.entries(HH.possibilities).map((HH => {
              let [BH, LH] = HH;
              return {
                str: `${BH}: ${LH>0?LH<.01?LH.toPrecision(1):LH.toFixed(2):0}%\n`,
                style: {
                  color: bH.lb[BH]
                }
              }
            }))));
            WH(BH)
          })(tH)
        })), () => {
          HH = !1
        }
      }), [BH, hH, tH]);
      const vH = [];
      for (let rH = 0; rH < kL.d; rH++) {
        const HH = null === GH || void 0 === GH ? void 0 : GH.options[rH],
          AH = !HH || HH.level > xH;
        vH.push((0, EH.jsx)(YH.i, {
          className: "EnchantmentButton",
          onPointerEnter: HH ? HH => null === LH || void 0 === LH ? void 0 : LH()(!0, {
            name: "",
            desc: QH[rH]
          }, HH) : void 0,
          onPointerLeave: HH ? () => null === LH || void 0 === LH ? void 0 : LH()(!1) : void 0,
          onClick: AH ? void 0 : () => {
            CH.gameBridge.send("enchantItem", {
              slot: BH.idx,
              level: HH.level,
              tablePos: hH
            }), uH(null)
          },
          disabled: AH,
          children: HH ? (0, EH.jsxs)(EH.Fragment, {
            children: [(0, EH.jsxs)("h1", {
              className: "EnchantmentLevels",
              children: [(0, EH.jsxs)("span", {
                className: "EnchantmentLevelsCost",
                children: [XH("enchantments:cost"), ": "]
              }), " ", XH("enchantments:levels", {
                level: HH.level
              })]
            }), (0, EH.jsxs)("div", {
              className: "EnchantmentPossibilities",
              children: [(0, EH.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, EH.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: XH("enchantments:tier")
                }), Object.entries(HH.possibilities).map((HH => {
                  let [BH, LH] = HH;
                  return 0 === LH ? null : (0, EH.jsx)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: bH.lb[BH]
                    },
                    children: BH
                  }, BH)
                }))]
              }), (0, EH.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, EH.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: XH("enchantments:odds")
                }), Object.entries(HH.possibilities).map((HH => {
                  let [BH, LH] = HH;
                  return 0 === LH ? null : (0, EH.jsxs)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: bH.lb[BH]
                    },
                    children: [LH > 0 && LH < .1 ? "<0.1" : LH.toFixed(0 < LH && LH < .95 ? 1 : 0), "%"]
                  }, BH)
                }))]
              })]
            })]
          }) : !1 === (null === GH || void 0 === GH ? void 0 : GH.isEnchantable) ? (0, EH.jsx)("h1", {
            className: "EnchantmentLevels",
            children: XH("enchantments:notEnchantable")
          }) : (0, EH.jsx)("h1", {
            className: "EnchantmentLevels",
            children: XH("enchantments:enterItem")
          })
        }, rH))
      }
      return (0, EH.jsxs)("div", {
        className: "EnchantingTable",
        children: [(0, EH.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: tH
        }), (0, EH.jsxs)("div", {
          className: "EnchantingTableBody",
          children: [(0, EH.jsxs)("div", {
            className: "EnchantingTableLeft",
            children: [(0, EH.jsx)(mL.b, {
              idx: XL.g,
              setHovered: HH => {
                null === LH || void 0 === LH || LH(XL.g)(HH)
              },
              pointerDown: AH,
              pointerUp: SH,
              draggedInfo: null,
              specialItemInfo: BH,
              variation: "Enchanting Table"
            }), GH && GH.possibleEnchantments.length > 0 && (0, EH.jsxs)("div", {
              className: "PossibleEnchantments",
              children: [(0, EH.jsx)("h2", {
                children: "Possible Perks:"
              }), GH.possibleEnchantments.map((HH => (0, EH.jsxs)(rH.Fragment, {
                children: [(0, EH.jsxs)("div", {
                  className: "PossibleEnchantmentName",
                  children: [(0, EH.jsx)("div", {
                    className: "PossibleEnchantmentIcon",
                    children: (0, EH.jsx)(SL.e, {
                      itemName: `${HH} Enchantment`,
                      amount: 1
                    })
                  }), (0, EH.jsx)("div", {
                    className: "PossibleEnchantmentNameText",
                    children: HH
                  })]
                }), (0, EH.jsx)("div", {
                  className: "PossibleEnchantmentDescription",
                  children: XH((0, bL.k)(HH).translationKey)
                })]
              }, HH)))]
            })]
          }), (0, EH.jsxs)("div", {
            className: "EnchantmentOptions",
            children: [GH && GH.isAlreadyEnchanted && (0, EH.jsx)("div", {
              className: "AlreadyEnchantedWarning",
              children: XH("enchantments:alreadyEnchanted")
            }), vH]
          })]
        })]
      })
    }
    var IL = LH(37667);

    function fL(HH) {
      var BH;
      let {
        specialItemInfo: LH,
        setSpecialItemInfo: AH,
        setHovered: SH,
        pointerDown: hH,
        pointerUp: tH
      } = HH;
      const {
        t: zH
      } = (0, sH.B)(), XH = (0, kH.c)("inventory", (HH => HH.freeSlots)), [GH, uH] = (0, rH.useState)(null);
      (0, rH.useEffect)((() => {
        if (LH) {
          const HH = (0, IL.d)(LH.name, LH.amount);
          uH({
            salvageable: !!HH,
            produces: HH
          })
        } else uH(null)
      }), [LH, null === LH || void 0 === LH ? void 0 : LH.name, null === LH || void 0 === LH ? void 0 : LH.amount]);
      const QH = !!LH && !(null === GH || void 0 === GH || !GH.salvageable) && !(null !== (BH = GH.produces) && void 0 !== BH && BH.some((HH => {
        let {
          amt: BH
        } = HH;
        return BH < 1
      })));
      return (0, EH.jsxs)("div", {
        className: "SalvagingTable",
        children: [(0, EH.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: zH("item:salvagingTable")
        }), (0, EH.jsxs)("div", {
          className: "SalvagingTableBody",
          children: [(0, EH.jsx)("div", {
            className: "SalvagingTableLeft",
            children: (0, EH.jsx)(mL.b, {
              idx: XL.g,
              setHovered: HH => {
                null === SH || void 0 === SH || SH(XL.g)(HH)
              },
              pointerDown: hH,
              pointerUp: tH,
              draggedInfo: null,
              specialItemInfo: LH,
              variation: "Salvaging Table"
            })
          }), (0, EH.jsx)("div", {
            className: "SalvagingTableRight",
            children: (0, EH.jsx)(YH.i, {
              className: "SalvageButton",
              onClick: QH ? () => {
                const {
                  idx: HH,
                  name: BH,
                  amount: rH
                } = LH;
                CH.gameBridge.send("salvageItem", {
                  slot: HH,
                  name: BH,
                  amount: rH
                }) && (uH(null), AH(null))
              } : void 0,
              disabled: !QH,
              children: GH ? GH.salvageable ? GH.produces.some((HH => {
                let {
                  amt: BH
                } = HH;
                return BH < 1
              })) ? (0, EH.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, EH.jsx)("div", {
                  className: "SalvageText Error",
                  children: zH("salvagingTable:notEnoughResources")
                })
              }) : XH < GH.produces.length ? (0, EH.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, EH.jsx)("div", {
                  className: "SalvageText Error",
                  children: zH("salvagingTable:notEnoughInventorySpace")
                })
              }) : (0, EH.jsxs)("div", {
                className: "SalvageButtonText",
                children: [(0, EH.jsx)("div", {
                  className: "SalvageText",
                  children: zH("salvagingTable:salvage")
                }), (0, EH.jsx)("div", {
                  className: "SalvageIcons",
                  children: GH.produces.map(((HH, BH) => {
                    let {
                      item: LH,
                      amt: AH
                    } = HH;
                    return (0, EH.jsx)("div", {
                      className: "SalvageIcon",
                      children: (0, EH.jsx)(SL.e, {
                        itemName: LH,
                        amount: Math.floor(AH)
                      })
                    }, BH)
                  }))
                })]
              }) : (0, EH.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, EH.jsx)("div", {
                  className: "SalvageText Error",
                  children: zH("salvagingTable:unsalvageable")
                })
              }) : (0, EH.jsx)(EH.Fragment, {})
            })
          })]
        })]
      })
    }
    var lL = LH(186),
      KL = LH(9940),
      cL = LH(2946),
      eL = LH(1706),
      qL = LH(9385),
      gL = LH(9377),
      NL = LH(1696),
      RL = LH(2075),
      jL = LH(1405),
      nL = LH(2149);

    function FL(HH, BH, LH) {
      const AH = HH.trim().toLowerCase();
      if ("" === AH) return 0;
      let rH = null;
      for (const SH of BH) {
        const HH = SH.toLowerCase().indexOf(AH);
        if (0 === HH) return 0;
        HH > 0 && (rH = 1)
      }
      if (null !== rH) return rH;
      for (const SH of LH)
        if (SH.toLowerCase().includes(AH)) return 2;
      return null
    }

    function DL(HH) {
      return HH.map((HH => {
        var BH;
        return HH ? {
          name: HH.name,
          amount: null !== (BH = HH.amount) && void 0 !== BH ? BH : 1
        } : null
      }))
    }

    function wL(HH) {
      return HH < 1e3 ? `${HH}` : HH < 1e4 ? Math.floor(HH / 100) / 10 + "k" : `${Math.floor(HH/1e3)}k`
    }
    var ZL = LH(37672);
    const dL = YH.i,
      aL = {
        initialDelayMs: 400,
        intervalMs: 100
      },
      sL = () => {
        const HH = (0, jL.c)();
        return HH ? HH.getPadRepeatTiming(aL) : aL
      };

    function JL(HH, BH, LH) {
      var AH, rH;
      const SH = (0, CL.s)(BH, HH);
      let hH = null === (AH = BH[HH]) || void 0 === AH ? void 0 : AH.description;
      if (LH && (null === (rH = (0, ZL.d)().get(HH)) || void 0 === rH || !rH.hideIngredients)) {
        hH ? (hH = (0, bH.pb)(hH), hH.push({
          str: "\n"
        })) : hH = [], hH.push({
          str: "\n"
        }), hH.push({
          str: "Can be crafted from:\n"
        });
        for (const HH of LH) "string" === typeof HH && (hH.push({
          icon: HH,
          style: {
            fontSize: "1.5em"
          }
        }), hH.push({
          str: " "
        }), hH.push(...(0, bH.pb)((0, CL.s)(BH, HH))), hH.push({
          str: "\n"
        }))
      }
      return {
        name: SH,
        desc: hH
      }
    }

    function iL(HH) {
      let {
        name: BH,
        wC: LH
      } = HH;
      return `${BH}_${LH}`
    }

    function pL(HH) {
      var BH;
      let {
        onClick: LH,
        itemName: AH,
        recipeId: SH,
        isSelected: hH,
        haveIngredients: tH,
        craftable: zH,
        setHovered: CH,
        padActions: XH,
        marked: GH,
        lock: YH,
        itemInfo: uH
      } = HH;
      const QH = (0, rH.useRef)(null);
      return (0, qL.f)(QH, {
        press: HH => !tH || "secondary" === HH && !zH ? (XH.refuse(), !1) : "primary" === HH ? (XH.choose(), !0) : XH.craft(),
        release: XH.stopCraft,
        hints: {
          primary: "inventoryChooseRecipe",
          secondary: "inventoryCraft"
        }
      }), (0, EH.jsxs)("div", {
        ref: QH,
        className: PL()("InvenItem", {
          CraftableItemNotEnoughIngredients: !tH && !YH,
          CraftableItemMarked: GH,
          CraftableItemLocked: void 0 !== YH,
          CraftableItemLockedFar: (null !== (BH = null === YH || void 0 === YH ? void 0 : YH.stepsAway) && void 0 !== BH ? BH : 1) > 1
        }),
        "data-recipe-key": SH,
        "data-pad-inventory-default": hH ? "" : void 0,
        onClick: LH,
        style: {
          cursor: hH ? null : "pointer"
        },
        onPointerEnter: HH => {
          null === CH || void 0 === CH || CH(!0, JL(AH, uH)), !hH && (0, NL.t)(HH.nativeEvent) && (0, gL.i)() && LH()
        },
        onPointerLeave: () => {
          null === CH || void 0 === CH || CH(!1)
        },
        children: [(0, EH.jsx)(SL.e, {
          itemName: AH,
          amount: 1
        }), GH && (0, EH.jsx)("span", {
          className: "CraftableItemMarkBadge",
          "aria-hidden": "true",
          children: "!"
        }), YH && (0, EH.jsxs)("span", {
          className: "CraftableItemLockTag",
          children: [(0, EH.jsx)(WH.c, {
            name: "lock"
          }), (0, EH.jsx)(VH.b, {
            text: YH.tag
          })]
        })]
      })
    }

    function yL(HH) {
      let {
        idx: BH,
        status: LH,
        shownItem: AH,
        dim: SH,
        onHoverStart: hH,
        onHoverEnd: tH,
        onPadBack: zH
      } = HH;
      const CH = (0, rH.useRef)(null);
      (0, qL.f)(CH, {
        press: () => !1,
        back: zH,
        hints: {
          back: "inventoryBackToRecipes"
        }
      });
      const XH = LH.need > 0 ? Math.min(LH.have / LH.need, 1) : 1;
      return (0, EH.jsxs)("div", {
        ref: CH,
        className: PL()("CupTile", {
          Short: LH.missing > 0
        }),
        style: {
          width: SH,
          height: SH
        },
        "data-craft-ingredient": BH,
        onPointerEnter: hH,
        onPointerLeave: tH,
        children: [(0, EH.jsx)("div", {
          className: "CupFill",
          style: {
            transform: `scaleY(${XH})`
          }
        }), (0, EH.jsx)(SL.e, {
          itemName: AH,
          amount: 0
        }), (0, EH.jsxs)("div", {
          className: "CupCount SmallTextBold",
          children: [wL(LH.have), "/", wL(LH.need)]
        })]
      })
    }

    function HA(HH) {
      var BH, LH, AH, SH, hH;
      let {
        show: tH,
        recipeItem: {
          name: zH,
          wC: XH,
          requires: GH,
          produces: YH,
          haveIngredients: uH
        },
        detail: QH,
        onCraft: WH,
        setHovered: MH,
        craftButtonRef: xH,
        onPadBack: vH,
        showPadShortcut: PH,
        refusedCount: TH,
        lock: UH,
        itemInfo: OH
      } = HH;
      const {
        t: bH
      } = (0, sH.B)(), kH = null !== QH && !QH.roomForOne, mH = null !== (BH = null === QH || void 0 === QH ? void 0 : QH.craftAllTimes) && void 0 !== BH ? BH : 0, oH = function(HH, BH) {
        return HH.map((HH => {
          let {
            items: LH,
            amt: AH
          } = HH, rH = 0;
          const SH = [];
          for (const hH of LH) {
            const HH = BH(hH);
            rH += HH, HH > 0 && SH.push(hH)
          }
          return 0 === SH.length && SH.push(LH[0]), {
            shownItems: SH,
            need: AH,
            have: rH,
            missing: Math.max(AH - rH, 0)
          }
        }))
      }(GH, (HH => {
        var BH;
        return null !== (BH = null === QH || void 0 === QH ? void 0 : QH.amounts[HH]) && void 0 !== BH ? BH : 0
      }));
      let IH = "4rem",
        fH = 4;
      3 === GH.length || 4 === GH.length ? IH = "3.75rem" : GH.length >= 5 && (IH = "3rem"), 4 === GH.length ? fH = 2 : GH.length <= 6 && (fH = 3);
      const lH = `calc(${fH} * ${IH} + ${fH-1} * 0.4rem + 1px)`,
        KH = (0, rH.useRef)(null),
        cH = (0, rH.useRef)(null);
      (0, rH.useLayoutEffect)((() => {
        KH.current.scrollTop = 0
      }), [zH, XH]);
      const eH = (0, rH.useRef)(TH);
      (0, rH.useEffect)((() => {
        if (TH === eH.current) return;
        eH.current = TH;
        const HH = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? [{
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
        for (const AH of null !== (BH = null === (LH = KH.current) || void 0 === LH ? void 0 : LH.querySelectorAll(".CupTile.Short, .CantCraftInfo")) && void 0 !== BH ? BH : []) {
          var BH, LH;
          AH.animate(HH, {
            duration: 280,
            easing: "ease-out"
          })
        }
      }), [TH]);
      const qH = (HH, BH, LH) => {
          var AH;
          if ((0, ZL.d)().has(zH)) return void(LH && clearInterval(gH.current));
          const rH = null !== (AH = null === QH || void 0 === QH ? void 0 : QH.resultStackable) && void 0 !== AH && AH,
            SH = DL(CH.gameBridge.latest("inventory").player),
            {
              ZC: hH,
              fE: tH,
              amountAddedToSlot: EH
            } = CH.gameBridge.send("craftRecipe", {
              name: zH,
              wC: XH,
              times: BH || HH && rH ? null : 1
            });
          if (hH > 0) {
            const BH = [],
              AH = new Set(GH.flatMap((HH => {
                let {
                  items: BH
                } = HH;
                return BH
              }))),
              hH = function(HH, BH, LH) {
                const AH = [];
                for (let rH = 0; rH < HH.length; rH++) {
                  const SH = HH[rH];
                  if (!SH || !LH.has(SH.name)) continue;
                  const hH = BH[rH],
                    tH = (null === hH || void 0 === hH ? void 0 : hH.name) === SH.name ? hH.amount : 0;
                  tH < SH.amount && AH.push({
                    idx: rH,
                    itemName: SH.name,
                    amount: SH.amount - tH
                  })
                }
                return AH
              }(SH, DL(CH.gameBridge.latest("inventory").player), AH).slice(0, 12),
              XH = LH ? 0 : Math.min(50, 400 / hH.length),
              uH = LH ? 220 : 320;
            for (const HH of hH) {
              var YH;
              const LH = GH.findIndex((BH => {
                  let {
                    items: LH
                  } = BH;
                  return LH.includes(HH.itemName)
                })),
                AH = null === (YH = KH.current) || void 0 === YH ? void 0 : YH.querySelector(`[data-craft-ingredient="${LH}"]`),
                rH = (0, CL.c)(HH.idx);
              AH && rH && BH.push({
                kind: "ingredient",
                itemName: HH.itemName,
                amount: HH.amount,
                fE: HH.idx,
                from: rH,
                to: (0, CL.c)(AH),
                delayMs: Math.round(BH.length * XH),
                durationMs: uH
              })
            }
            let QH;
            if (null !== tH && EH > 0 && cH.current) {
              const HH = BH.length > 0 ? BH[BH.length - 1].delayMs + .6 * uH : 0;
              QH = {
                itemName: zH,
                amount: EH,
                fE: tH,
                from: (0, CL.c)(cH.current),
                delayMs: Math.round(HH)
              }
            }
            WH(QH, HH && !rH ? tH : null, BH), tL.c.play("wood1", .5).rate(1.75)
          }
        },
        gH = (0, rH.useRef)(null);
      (0, rH.useEffect)((() => () => {
        clearInterval(gH.current)
      }), []);
      const NH = (HH, BH) => {
          qH(HH, !1, !1), clearInterval(gH.current), BH && (gH.current = setTimeout((() => {
            gH.current = setInterval((() => {
              qH(HH, !1, !0)
            }), BH.intervalMs)
          }), BH.initialDelayMs))
        },
        RH = () => {
          clearInterval(gH.current)
        },
        jH = !uH || kH || Boolean(UH),
        nH = (0, rH.useRef)(null),
        FH = null !== (LH = null === (AH = (0, nL.d)()) || void 0 === AH ? void 0 : AH.hideButtonHints) && void 0 !== LH && LH,
        DH = null !== (SH = null === (hH = (0, jL.c)()) || void 0 === hH ? void 0 : hH.getBoundButton("inventorySecondary")) && void 0 !== SH ? SH : null,
        wH = () => !jH && (qH(!1, !0, !1), !0);
      (0, qL.f)(xH, {
        press: HH => "secondary" === HH ? wH() : !jH && (NH(!1, sL()), !0),
        release: RH,
        back: vH,
        hints: {
          primary: "inventoryCraft",
          secondary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      }), (0, qL.f)(nH, {
        press: wH,
        back: vH,
        hints: {
          primary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      });
      const [ZH, dH] = (0, rH.useState)(0), [aH, JH] = (0, rH.useState)(null);
      (0, rH.useEffect)((() => {
        if (!0 === tH) {
          dH(0);
          const HH = setInterval((() => {
            dH((HH => HH + 1))
          }), 1e3);
          return () => {
            clearInterval(HH)
          }
        }
        return () => {}
      }), [tH]);
      const iH = null === QH || void 0 === QH ? void 0 : QH.ingredientsCraftedFrom,
        pH = (0, rH.useRef)(MH);
      (0, rH.useEffect)((() => {
        pH.current = MH
      }), [MH]);
      const yH = !(null === UH || void 0 === UH || !UH.hideIngredients);
      (0, rH.useEffect)((() => {
        var HH, BH;
        if (!aH) return;
        if (yH) return JH(null), void(null === (BH = pH.current) || void 0 === BH || BH.call(pH, !1));
        const LH = aH[ZH % aH.length];
        null === (HH = pH.current) || void 0 === HH || HH.call(pH, !0, JL(LH, OH, null === iH || void 0 === iH ? void 0 : iH[LH]))
      }), [aH, ZH, OH, iH, yH]);
      const HB = !!UH,
        BB = (0, rH.useRef)(!1);
      (0, rH.useEffect)((() => {
        var HH;
        HB && (clearInterval(gH.current), yH && BB.current && (BB.current = !1, null === (HH = pH.current) || void 0 === HH || HH.call(pH, !1)))
      }), [HB, yH]);
      const LB = (0, CL.s)(OH, zH);
      return (0, EH.jsxs)("div", {
        ref: KH,
        className: "CraftableInfo SmallTextBold",
        children: [(0, EH.jsx)("div", {
          className: "CraftableHeader",
          children: (0, EH.jsx)(VH.b, {
            text: LB
          })
        }), !yH && (0, EH.jsx)("div", {
          className: PL()("CraftableIngredients", {
            Compact: GH.length >= 5
          }),
          style: {
            maxWidth: lH
          },
          children: oH.map(((HH, BH) => {
            const LH = HH.shownItems[ZH % HH.shownItems.length];
            return (0, EH.jsx)(yL, {
              idx: BH,
              status: HH,
              shownItem: LH,
              dim: IH,
              onHoverStart: () => {
                JH(HH.shownItems)
              },
              onHoverEnd: () => {
                JH(null), null === MH || void 0 === MH || MH(!1)
              },
              onPadBack: vH
            }, BH)
          }))
        }), UH && (0, EH.jsx)("div", {
          className: "CantCraftInfo CraftableLockReason",
          children: (0, EH.jsx)(VH.b, {
            text: UH.reason
          })
        }), !UH && (!uH || kH) && (0, EH.jsxs)("div", {
          className: "CantCraftInfo",
          children: [!uH && "Missing ingredients", (0, EH.jsx)("br", {}), kH && "Inventory is full"]
        }), !yH && (0, EH.jsxs)(EH.Fragment, {
          children: [(0, EH.jsxs)(dL, {
            ref: xH,
            className: "DoCraftButton",
            onPointerDown: HH => {
              NH((0, CL.t)(HH), (0, NL.t)(HH.nativeEvent) ? sL() : aL)
            },
            onPointerUp: RH,
            onPointerLeave: RH,
            disabled: jH,
            children: [PH && DH && !jH && !FH && (0, EH.jsx)(RL.d, {
              className: "CraftShortcutGlyph",
              glyph: DH
            }), (0, EH.jsx)("div", {
              ref: cH,
              className: "DoCraftItem",
              onPointerEnter: () => {
                BB.current = !0, null === MH || void 0 === MH || MH(!0, JL(zH, OH))
              },
              onPointerLeave: () => {
                BB.current = !1, null === MH || void 0 === MH || MH(!1)
              },
              children: (0, EH.jsx)(SL.e, {
                itemName: zH,
                amount: YH
              })
            })]
          }), (0, EH.jsxs)(dL, {
            ref: nH,
            className: "DoCraftAllButton",
            onPointerDown: HH => {
              qH((0, CL.t)(HH), !0, !1)
            },
            disabled: jH,
            children: [(0, EH.jsx)("span", {
              className: "CraftAllLabel",
              children: bH("general:craftAll")
            }), mH > 0 && (0, EH.jsxs)("span", {
              className: "CraftAllCount",
              children: ["x", wL(mH)]
            })]
          })]
        })]
      })
    }

    function BA(HH) {
      let {
        selectedIdx: BH,
        hidden: LH
      } = HH;
      const AH = (0, rL.y)(),
        SH = (0, rH.useRef)(null);
      return (0, rH.useLayoutEffect)((() => {
        const HH = SH.current,
          AH = null === HH || void 0 === HH ? void 0 : HH.parentElement;
        if (!AH || !HH) return;
        const rH = AH.querySelector(".CraftableItems"),
          hH = () => {
            var SH, hH;
            if (LH) return void(HH.style.opacity = "0");
            const tH = null === rH || void 0 === rH ? void 0 : rH.children[BH],
              zH = null === (SH = null !== (hH = null === tH || void 0 === tH ? void 0 : tH.querySelector(".InvenItem")) && void 0 !== hH ? hH : tH) || void 0 === SH ? void 0 : SH.getBoundingClientRect();
            if (!zH || 0 === zH.width) return void(HH.style.opacity = "0");
            const CH = AH.getBoundingClientRect();
            HH.style.opacity = "1", HH.style.width = `${zH.width}px`, HH.style.height = `${zH.height}px`, HH.style.transform = `translate(${zH.left-CH.left+AH.scrollLeft}px, ${zH.top-CH.top+AH.scrollTop}px)`
          };
        hH();
        const tH = new MutationObserver(hH),
          zH = new ResizeObserver(hH);
        return zH.observe(AH), rH && (tH.observe(rH, {
          childList: !0,
          subtree: !0
        }), zH.observe(rH)), () => {
          tH.disconnect(), zH.disconnect()
        }
      }), [BH, LH]), (0, EH.jsx)("div", {
        ref: SH,
        className: PL()("SelectionReticle", {
          Secondary: AH
        })
      })
    }

    function LA(HH, BH, LH) {
      return HH ? (0, lL.d)(KL.g, HH) ? AA(HH, BH, LH) : HH : LH("classicGame:handCrafting")
    }

    function AA(HH, BH, LH) {
      var AH;
      const rH = null === (AH = BH[HH]) || void 0 === AH ? void 0 : AH.displayName;
      if ("string" === typeof rH) return LH(rH);
      const SH = CH.gameBridge.latest("hiddenPlayerNames");
      return Array.isArray(rH) ? rH.map((HH => {
        if ("string" === typeof HH) return HH;
        if ("translationKey" in HH) return LH(HH.translationKey, (0, sH.q)(HH.params, SH));
        if ("str" in HH) {
          if ("string" === typeof HH.str) return HH.str;
          if ("translationKey" in HH.str) return LH(HH.str.translationKey, (0, sH.q)(HH.str.params, SH))
        }
        return ""
      })).join("") : rH && "translationKey" in rH ? LH(rH.translationKey, (0, sH.q)(rH.params, SH)) : HH
    }

    function rA(HH, BH) {
      return HH === BH || null !== HH && null !== BH && HH.name === BH.name && HH.wC === BH.wC
    }

    function SA(HH) {
      var BH, LH, AH;
      let {
        show: SH,
        onCraft: hH,
        dispatchSelectedCraftable: tH,
        selectedCraftable: zH,
        craftingStation: XH,
        setHovered: GH
      } = HH;
      const {
        t: YH
      } = (0, sH.B)(), [uH, QH] = (0, rH.useState)(""), [WH, MH] = (0, rH.useState)(0);
      (0, rH.useEffect)((() => {
        SH || (QH(""), MH((HH => HH + 1)))
      }), [SH]);
      const [xH, vH] = (0, rH.useState)(XH);
      xH !== XH && (vH(XH), "" !== uH && (QH(""), MH((HH => HH + 1))));
      const PH = (0, rH.useRef)(null),
        TH = (0, rH.useRef)(null),
        UH = (0, gL.m)(),
        VH = UH.showing && "recipe" === UH.kind,
        [OH, bH] = (0, rH.useState)(0),
        mH = null !== XH && void 0 !== XH ? XH : null,
        oH = (0, rH.useRef)(null),
        IH = HH => {
          return !((BH = oH.current) === (LH = HH) || null !== BH && null !== LH && BH.station === LH.station && rA(BH.recipe, LH.recipe)) && (oH.current = HH, CH.gameBridge.send("focusCrafting", HH), !0);
          var BH, LH
        };
      IH(SH ? {
        station: mH,
        recipe: (null === (BH = oH.current) || void 0 === BH ? void 0 : BH.station) === mH ? oH.current.recipe : null
      } : null);
      let fH = CH.gameBridge.latest("crafting");
      const lH = (0, kH.e)("itemInfo"),
        KH = "" !== uH.trim(),
        cH = (0, ZL.y)(),
        eH = (0, ZL.v)(),
        qH = (0, ZL.z)(),
        gH = function(HH, BH) {
          const [LH, AH] = (0, rH.useState)(!1);
          (0, rH.useEffect)((() => {
            if (!HH) return void AH(!1);
            const BH = setTimeout((() => {
              AH(!0)
            }), 0);
            return () => {
              clearTimeout(BH)
            }
          }), [HH]);
          const SH = HH && LH,
            hH = (0, rH.useRef)({
              station: BH,
              at: new Map
            });
          return (hH.current.station !== BH || !SH && hH.current.at.size > 0) && (hH.current = {
            station: BH,
            at: new Map
          }), SH ? hH.current.at : null
        }(SH, XH);
      let NH = fH.recipes.filter((HH => {
        let {
          listed: BH
        } = HH;
        return BH
      }));
      if (KH) {
        const HH = [];
        for (const BH of fH.recipes) {
          var RH;
          const LH = null !== (RH = eH.get(BH.name)) && void 0 !== RH && RH.hideIngredients ? [] : BH.requires.flatMap((HH => {
              let {
                items: BH
              } = HH;
              return BH.flatMap((HH => [HH, AA(HH, lH, YH)]))
            })),
            AH = FL(uH, [BH.name, AA(BH.name, lH, YH)], LH);
          null !== AH && HH.push({
            item: BH,
            rank: AH
          })
        }
        HH.sort(((HH, BH) => HH.rank - BH.rank)), NH = HH.map((HH => {
          let {
            item: BH
          } = HH;
          return BH
        }))
      } else {
        if (gH && gH.size > 0) {
          const HH = fH.recipes.filter((HH => !HH.listed && gH.has(iL(HH))));
          NH = NH.concat(HH)
        }
        NH = (0, ZL.g)(NH, cH, eH, qH), gH && (NH = (0, ZL.e)(NH, gH, iL))
      }
      const jH = HH => NH.find((BH => iL(BH) === HH)),
        nH = `${XH}|${uH}`,
        [FH, DH] = (0, rH.useState)(null),
        wH = (null === FH || void 0 === FH ? void 0 : FH.context) === nH ? FH.key : null,
        ZH = zH ? iL(zH) : null,
        dH = null !== (LH = null !== (AH = jH(ZH)) && void 0 !== AH ? AH : jH(wH)) && void 0 !== LH ? LH : NH[0],
        aH = dH ? iL(dH) : null,
        JH = dH ? {
          name: dH.name,
          wC: dH.wC
        } : null;
      SH && IH({
        station: mH,
        recipe: JH
      }) && (fH = CH.gameBridge.latest("crafting")), aH !== ZH && aH !== wH && DH(aH ? {
        context: nH,
        key: aH
      } : null), (0, rH.useEffect)((() => () => {
        oH.current = null, CH.gameBridge.send("focusCrafting", null)
      }), []);
      const iH = rA(fH.detail, JH) ? fH.detail : null,
        pH = null !== iH && !iH.roomForOne,
        yH = NH.findIndex((HH => iL(HH) === iL(dH))),
        HB = () => TH.current ? (0, qL.e)(TH.current) : null,
        BB = (0, rH.useRef)(null),
        LB = (0, rH.useRef)(0);
      LB.current++;
      const AB = LB.current;
      (0, rH.useEffect)((() => {
        const HH = BB.current;
        if (!HH || AB <= HH.afterRender) return;
        if (BB.current = null, HH.key !== aH) return;
        const BH = HB();
        var LH;
        null !== BH && void 0 !== BH && BH.press("primary") && !HH.LX && (null === (LH = BH.release) || void 0 === LH || LH.call(BH))
      }));
      const rB = HH => {
          const BH = {
            name: HH.name,
            wC: HH.wC
          };
          return {
            choose: () => {
              tH(BH), (0, AL.n)(TH.current)
            },
            craft: () => {
              var HH, LH;
              return tH(BH), iL(BH) !== iL(dH) ? (BB.current = {
                key: iL(BH),
                LX: !0,
                afterRender: LB.current
              }, !0) : null !== (HH = null === (LH = HB()) || void 0 === LH ? void 0 : LH.press("primary")) && void 0 !== HH && HH
            },
            stopCraft: () => {
              var HH, BH;
              BB.current ? BB.current.LX = !1 : null === (HH = HB()) || void 0 === HH || null === (BH = HH.release) || void 0 === BH || BH.call(HH)
            },
            refuse: () => {
              iL(BH) !== iL(dH) && tH(BH), bH((HH => HH + 1))
            }
          }
        },
        SB = () => {
          var HH, BH, LH;
          (0, AL.n)(null !== (HH = null === (BH = PH.current) || void 0 === BH || null === (LH = BH.querySelector(".CraftableItems")) || void 0 === LH ? void 0 : LH.children[yH]) && void 0 !== HH ? HH : null)
        },
        hB = NH.map(iL).join("|"),
        tB = (0, rH.useRef)(hB);
      return (0, rH.useEffect)((() => {
        tB.current !== hB && (tB.current = hB, VH && yH >= 0 && (0, gL.i)() && SB())
      })), (0, EH.jsxs)("div", {
        className: "Craftables",
        children: [(0, EH.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: LA(XH, lH, YH)
        }), (0, EH.jsxs)("div", {
          className: "CraftablesBody",
          children: [(0, EH.jsx)(eL.e, {
            className: "CraftingSearch",
            placeholderText: YH("general:searchRecipes"),
            defaultValue: uH,
            maxLength: 100,
            onValueChange: HH => {
              QH(HH)
            },
            blurOnEnter: !0
          }, WH), 0 === NH.length && KH && (0, EH.jsx)("div", {
            className: "CraftingNoMatches SmallTextBold",
            children: YH("general:noRecipesMatchSearch")
          }), NH.length > 0 && (0, EH.jsxs)(EH.Fragment, {
            children: [(0, EH.jsxs)("div", {
              ref: PH,
              className: "CraftablesLeftSide",
              children: [(0, EH.jsx)(cL.e, {
                lazyLoadedClassName: "CraftableItems",
                observerUpdateDeps: [JSON.stringify(NH.map((HH => {
                  let {
                    name: BH,
                    wC: LH,
                    haveIngredients: AH
                  } = HH;
                  return {
                    name: BH,
                    wC: LH,
                    haveIngredients: AH
                  }
                })))],
                observing: SH,
                children: NH.map((HH => {
                  const {
                    name: BH,
                    wC: LH,
                    haveIngredients: AH
                  } = HH, rH = iL(HH);
                  return (0, EH.jsx)(pL, {
                    recipeId: rH,
                    itemName: BH,
                    onClick: () => {
                      tH({
                        name: BH,
                        wC: LH
                      })
                    },
                    isSelected: iL(dH) === rH,
                    haveIngredients: AH,
                    craftable: AH && !eH.has(BH) && !(iL(dH) === rH && pH),
                    setHovered: GH,
                    padActions: rB(HH),
                    marked: cH.has(BH),
                    lock: eH.get(BH),
                    itemInfo: lH
                  }, rH)
                }))
              }), (0, EH.jsx)(BA, {
                selectedIdx: yH,
                hidden: VH && UH.steppingSlots
              })]
            }), (0, EH.jsx)(HA, {
              show: SH,
              recipeItem: dH,
              detail: iH,
              onCraft: hH,
              setHovered: GH,
              craftButtonRef: TH,
              onPadBack: SB,
              showPadShortcut: VH,
              refusedCount: OH,
              lock: eH.get(dH.name),
              itemInfo: lH
            })]
          })]
        })]
      })
    }
    var hA = LH(35006),
      tA = LH(3639),
      zA = LH(2188),
      CA = LH(9361);
    class EA {
      constructor(HH, BH, LH) {
        this.commit = HH, this.delayMs = BH, this.defers = LH, this.pending = null, this.timer = void 0, this.LX = !1, this.flush = () => {
          clearTimeout(this.timer);
          const HH = this.pending;
          null !== HH && (this.pending = null, this.commit(HH))
        }
      }
      type(HH) {
        this.pending = HH, clearTimeout(this.timer), this.LX || this.defers() ? this.LX || (this.timer = setTimeout(this.flush, this.delayMs)) : this.flush()
      }
      getTyped(HH) {
        var BH;
        return null !== (BH = this.pending) && void 0 !== BH ? BH : HH
      }
      isHeld() {
        return this.LX
      }
      setHeld(HH) {
        this.LX = HH, HH || this.flush()
      }
    }

    function XA(HH) {
      return null === HH ? "creativeInventory:all" : `creativeInventory:${HH}`
    }

    function GA(HH) {
      let {
        category: BH
      } = HH;
      return null === BH ? (0, EH.jsx)(WH.c, {
        name: "layer-group"
      }) : (0, EH.jsx)(SL.e, {
        itemName: hA.creativeItemCategoryIcons[BH],
        amount: 0
      })
    }

    function YA(HH) {
      let {
        labelKey: BH,
        isSelected: LH,
        onSelect: AH,
        setHovered: rH,
        children: SH
      } = HH;
      return (0, EH.jsx)("div", {
        className: PL()("CreativeCategoryTab", {
          Selected: LH
        }),
        onClick: AH,
        onPointerEnter: HH => {
          (0, CL.p)(HH) || rH(!0, {
            name: {
              translationKey: BH
            },
            desc: ""
          })
        },
        onPointerLeave: () => {
          rH(!1)
        },
        children: SH
      })
    }

    function uA(HH) {
      let {
        categories: BH,
        selectedCategory: LH,
        onSelect: AH
      } = HH;
      const {
        t: SH
      } = (0, sH.B)(), [hH, tH] = (0, rH.useState)(!1), zH = (0, rH.useRef)(null), CH = (0, rH.useCallback)((() => {
        tH(!1)
      }), []);
      return (0, zA.e)(zH, CH), (0, EH.jsxs)("div", {
        className: "CreativeCategoryDropdown",
        ref: zH,
        children: [(0, EH.jsxs)("div", {
          className: "CreativeCategoryDropdownButton",
          onClick: () => {
            tH(!hH)
          },
          children: [(0, EH.jsx)("div", {
            className: "CreativeCategoryIcon",
            children: (0, EH.jsx)(GA, {
              category: LH
            })
          }), (0, EH.jsx)("span", {
            children: SH(XA(LH))
          }), (0, EH.jsx)(WH.c, {
            name: hH ? "caret-up" : "caret-down"
          })]
        }), hH && (0, EH.jsx)("div", {
          className: "CreativeCategoryDropdownMenu",
          children: BH.map((HH => (0, EH.jsxs)("div", {
            className: PL()("CreativeCategoryDropdownOption", {
              Selected: LH === HH
            }),
            onClick: () => {
              AH(HH), tH(!1)
            },
            children: [(0, EH.jsx)("div", {
              className: "CreativeCategoryIcon",
              children: (0, EH.jsx)(GA, {
                category: HH
              })
            }), (0, EH.jsx)("span", {
              children: SH(XA(HH))
            })]
          }, null !== HH && void 0 !== HH ? HH : "all")))
        })]
      })
    }
    const QA = (0, rH.memo)((function(HH) {
      let {
        creativeScrollDiv: BH,
        playerInvenNumSlots: LH,
        getSetHoveringForIdx: AH,
        getPointerDownForIdx: SH,
        getPointerUpForIdx: hH,
        creativeSearchVal: tH,
        setCreativeSearchVal: XH,
        creativeCategory: GH,
        setCreativeCategory: YH,
        show: uH
      } = HH;
      const {
        t: QH
      } = (0, sH.B)(), MH = (0, kH.e)("creativeVisibility"), {
        userContext: xH
      } = (0, UH.e)(), vH = (0, zH.j)("canUseDevCreativeItems"), PH = xH.playerHasRank("developer") || !!vH, TH = (0, rH.useMemo)((() => MA("", MH, PH)), [MH, PH]);
      (0, rH.useEffect)((() => {
        const HH = (0, hA.creativeItemIds)();
        CH.gameBridge.send("prewarmCreativeIcons", TH.filter((BH => !(0, hA.showOnlyInCreativeCategory)(HH[BH]))).slice(0, 63).map((BH => String(HH[BH]))))
      }), [TH]);
      const VH = (0, rH.useMemo)((() => {
          const HH = (0, hA.creativeItemIds)(),
            BH = new Set(TH.map((BH => (0, hA.creativeCategoryOf)(HH[BH]))));
          return hA.creativeItemCategories.filter((HH => BH.has(HH)))
        }), [TH]),
        bH = null !== GH && VH.includes(GH) ? GH : null,
        mH = (0, rH.useMemo)((() => "" === tH ? TH : MA(tH, MH, PH)), [TH, tH, MH, PH]),
        oH = (0, rH.useMemo)((() => {
          const HH = (0, hA.creativeItemIds)();
          return null !== bH ? mH.filter((BH => (0, hA.creativeCategoryOf)(HH[BH]) === bH)) : "" === tH ? mH.filter((BH => !(0, hA.showOnlyInCreativeCategory)(HH[BH]))) : mH
        }), [mH, bH, tH]),
        IH = AH();

      function fH(HH) {
        YH(HH), BH.current.scrollTop = 0
      }
      const lH = [null, ...VH],
        {
          isTouchScreen: KH
        } = (0, RH.m)(["isTouchScreen"]),
        cH = !KH,
        eH = (0, rH.useRef)(null),
        [qH, gH] = (0, rH.useState)(0);
      (0, rH.useEffect)((() => {
        const HH = eH.current;
        if (!HH) return;
        const BH = new ResizeObserver((HH => {
          gH(HH[0].contentRect.height)
        }));
        return BH.observe(HH), () => {
          BH.disconnect()
        }
      }), [cH]);
      const NH = (0, rH.useRef)(null),
        jH = (0, rH.useCallback)((function HH() {
          "up" === NH.current ? BH.current.scrollTop -= 10 : "down" === NH.current && (BH.current.scrollTop += 10), NH.current && requestAnimationFrame(HH)
        }), [BH]),
        nH = (0, rH.useCallback)((function(HH) {
          NH.current || (NH.current = HH, jH())
        }), [jH]);

      function FH() {
        NH.current = null
      }
      const DH = (0, rH.useRef)({
        creativeSearchVal: tH,
        setCreativeSearchVal: XH
      });
      DH.current = {
        creativeSearchVal: tH,
        setCreativeSearchVal: XH
      };
      const [wH] = (0, rH.useState)((() => new EA((HH => {
        DH.current.setCreativeSearchVal(HH)
      }), 250, rL.m))), ZH = HH => {
        var LH;
        null === (LH = BH.current) || void 0 === LH || LH.classList.toggle("CreativeItemSlotsStale", HH)
      };
      (0, OH.d)(CA.c, (HH => {
        wH.setHeld(HH), HH || ZH(!1)
      })), (0, rH.useEffect)((() => wH.flush), [wH]);
      const dH = (0, EH.jsx)(eL.e, {
          className: "CreativeItemSlotsSearch",
          placeholderText: "Search",
          defaultValue: tH,
          maxLength: 1e4,
          onValueChange: (HH, BH) => {
            "" === wH.getTyped(DH.current.creativeSearchVal) && "" !== HH && YH(null), wH.type(HH), ZH(wH.isHeld())
          },
          onEnter: wH.flush,
          blurOnEnter: !0
        }),
        aH = (0, EH.jsxs)("div", {
          className: "CreateItemSlotsScrollable",
          children: [KH && (0, EH.jsxs)("div", {
            className: "CreativeScrollButtons",
            children: [(0, EH.jsx)("div", {
              className: "CreativeScrollButton Up",
              onPointerDown: () => {
                nH("up")
              },
              onPointerLeave: FH,
              onPointerUp: FH,
              children: (0, EH.jsx)(WH.c, {
                name: "arrow-up"
              })
            }), (0, EH.jsx)("div", {
              className: "CreativeScrollButton Down",
              onPointerDown: () => {
                nH("down")
              },
              onPointerLeave: FH,
              onPointerUp: FH,
              children: (0, EH.jsx)(WH.c, {
                name: "arrow-up"
              })
            })]
          }), (0, EH.jsxs)("div", {
            className: "CreativeItemSlots",
            ref: BH,
            children: [0 === oH.length && "" !== tH && (0, EH.jsx)("div", {
              className: "CreativeItemSlotsEmpty",
              children: QH("general:noResults")
            }), (0, EH.jsx)(cL.e, {
              lazyLoadedClassName: "CreativeItemSlotsInner",
              observerUpdateDeps: [tH, bH],
              observerRoot: "CreativeItemSlots",
              observing: uH,
              children: oH.map((HH => {
                const BH = LH + HH;
                return (0, EH.jsx)(mL.b, {
                  idx: BH,
                  draggedInfo: null,
                  specialItemInfo: null,
                  setHovered: AH(BH),
                  pointerDown: SH(BH),
                  pointerUp: hH(BH)
                }, BH)
              }))
            })]
          })]
        });
      return (0, EH.jsxs)("div", {
        className: PL()("CreativeItemSlotsWrapper", cH ? "WithRail" : "WithDropdown"),
        children: [cH && (0, EH.jsx)("div", {
          className: "CreativeCategoryRail",
          ref: eH,
          style: {
            "--rail-height": qH > 0 ? `${qH}px` : void 0,
            "--tab-rows": Math.ceil(lH.length / 2)
          },
          children: lH.map((HH => (0, EH.jsx)(YA, {
            labelKey: XA(HH),
            isSelected: bH === HH,
            onSelect: () => {
              fH(HH)
            },
            setHovered: IH,
            children: (0, EH.jsx)(GA, {
              category: HH
            })
          }, null !== HH && void 0 !== HH ? HH : "all")))
        }), (0, EH.jsxs)("div", {
          className: "CreativeItemSlotsMain",
          children: [(0, EH.jsxs)("div", {
            className: "CreativeItemSlotsSearchRow",
            children: [dH, !cH && (0, EH.jsx)(uA, {
              categories: lH,
              selectedCategory: bH,
              onSelect: fH
            })]
          }), aH]
        })]
      })
    }));

    function WA(HH) {
      var BH;
      return null !== (BH = (0, tA.h)(HH)) && void 0 !== BH ? BH : ""
    }

    function MA(HH, BH, LH) {
      let {
        publicLobby: AH,
        shownInGame: rH
      } = BH;
      const SH = HH.toLowerCase(),
        hH = (0, hA.creativeItemIds)(),
        tH = HH => {
          var BH;
          const SH = hH[HH];
          return !(0, hA.itemIsDisabled)(SH, AH, null === (BH = rH[WA(SH)]) || void 0 === BH || BH, LH)
        };
      if ("" === SH) return hH.map(((HH, BH) => BH)).filter((HH => !(0, hA.showOnlyInCreativeSearch)(hH[HH]))).filter(tH);
      const zH = [];
      for (let CH = 0; CH < hH.length; CH++) WA(hH[CH]).toLowerCase().includes(SH) && zH.push(CH);
      zH.sort(((HH, BH) => {
        const LH = WA(hH[HH]).toLowerCase(),
          AH = WA(hH[BH]).toLowerCase();
        return LH.indexOf(SH) - AH.indexOf(SH)
      }));
      for (const [CH, EH] of(0, hA.creativeAltNames)())
        for (const HH of EH)
          if (HH.toLowerCase().includes(SH)) {
            const HH = hH.indexOf(CH);
            zH.includes(HH) || zH.push(HH)
          } return zH.filter(tH)
    }
    var xA = LH(37685),
      vA = LH(619);

    function PA(HH) {
      return HH > vA.j
    }

    function TA(HH) {
      const BH = HH / 2,
        LH = [];
      for (let AH = 0; AH < BH / 6; AH++)
        for (let HH = 0; HH < 12; HH++) {
          const rH = HH < 6 ? 0 : BH;
          LH.push(rH + 6 * AH + HH % 6)
        }
      return LH
    }

    function UA(HH) {
      let {
        numSlots: BH,
        renderSlot: LH
      } = HH;
      const {
        t: AH
      } = (0, sH.B)(), SH = (0, rH.useRef)(null);
      var hH;
      return hH = SH, (0, rH.useLayoutEffect)((() => {
        var HH;
        const BH = null === (HH = hH.current) || void 0 === HH ? void 0 : HH.closest(".InvenBody");
        if (!BH) return;
        const LH = () => {
          BH.style.zoom = "";
          const HH = parseFloat(getComputedStyle(document.documentElement).fontSize),
            LH = window.innerWidth - 2 * HH,
            AH = BH.getBoundingClientRect().width;
          AH > LH && (BH.style.zoom = "" + LH / AH)
        };
        return LH(), window.addEventListener("resize", LH), () => {
          window.removeEventListener("resize", LH), BH.style.zoom = ""
        }
      }), [hH]), (0, EH.jsxs)("div", {
        ref: SH,
        className: "ChestItemSlots DoubleChestSlots",
        children: [(0, EH.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: AH("doubleChest:title")
        }), (0, EH.jsx)("div", {
          className: "GridItemSlots",
          children: TA(BH).map((HH => LH(HH)))
        })]
      })
    }

    function VA(HH) {
      let {
        OL: BH,
        initialPasskey: LH
      } = HH;
      const {
        t: AH
      } = (0, sH.B)(), [SH, hH] = (0, rH.useState)(LH), [tH, zH] = (0, rH.useState)(LH);
      (0, rH.useEffect)((() => {
        hH(LH), zH(LH)
      }), [...BH]);
      return (0, EH.jsxs)("div", {
        className: "IronChestPasskeyEditorWrapper",
        children: [(0, EH.jsx)("div", {
          className: "SmallTextBold",
          children: AH("ironChest:currentPasskey", {
            currentPasskey: SH.join("")
          })
        }), (0, EH.jsx)(VL, {
          className: "IronChestPasskeyEditor",
          mh: tH,
          onPasskeyUpdated: zH,
          confirmText: "ironChest:changePasskey",
          onConfirm: () => {
            CH.gameBridge.send("changeIronChestPasskey", {
              pos: [...BH],
              mh: [...tH]
            }), hH([...tH])
          }
        })]
      })
    }

    function OA(HH, BH) {
      return "Iron" === HH.type && HH.ironChest.ownerDbId === BH
    }

    function bA(HH) {
      let {
        variation: BH,
        canCraft: LH,
        show: AH,
        creativeMounted: rH,
        specialItemRef: SH,
        draggedInfo: hH,
        getSetHovering: tH,
        getPointerDownForIdx: zH,
        getPointerUpForIdx: CH,
        enchantingTablePosition: XH,
        enchantingTableBlockName: GH,
        selectedCraftable: YH,
        dispatchSelectedCraftable: uH,
        creativeScrollDiv: QH,
        creativeSearchVal: WH,
        setCreativeSearchVal: MH,
        creativeCategory: xH,
        setCreativeCategory: vH,
        onCraft: PH
      } = HH;
      const {
        userContext: TH
      } = (0, UH.e)(), {
        t: VH
      } = (0, sH.B)(), OH = (0, kH.c)("inventory", (HH => HH.chest)), bH = (0, kH.c)("inventory", (HH => HH.player.length)), mH = (0, kH.c)("inventory", (HH => HH.creative));
      if (0 === bH) return null;
      let oH, IH;
      const fH = HH => {
          const BH = bH + HH;
          return (0, EH.jsx)(mL.b, {
            idx: BH,
            draggedInfo: hH,
            specialItemInfo: SH.current,
            setHovered: tH(BH),
            pointerDown: zH(BH),
            pointerUp: CH(BH)
          }, BH)
        },
        lH = OH ? (0, xA.d)(OH.type) : null;
      if (lH) oH = PL()("InvenLeftSideChestCustom", lH.className), IH = (0, EH.jsx)("div", {
        className: "ChestItemSlotsWrapper",
        children: lH.render({
          OL: OH.pos,
          renderSlot: fH
        })
      });
      else if (OH) {
        const HH = OH.pos,
          BH = "Iron" === OH.type || "Moonstone" === OH.type ? OH.type : "Standard";
        oH = `InvenLeftSideChest${BH}`;
        const LH = PA(OH.numSlots);
        IH = (0, EH.jsxs)("div", {
          className: "ChestItemSlotsWrapper",
          children: [OA(OH, TH.whamm) && (0, EH.jsx)(VA, {
            OL: HH,
            initialPasskey: OH.ironChest.mh
          }), LH && (0, EH.jsx)(UA, {
            numSlots: OH.numSlots,
            renderSlot: fH
          }), !LH && (0, EH.jsxs)("div", {
            className: "ChestItemSlots",
            children: [(0, EH.jsx)("div", {
              className: "InvenLeftSideHeader SmallTextBold",
              children: VH("Moonstone" === BH ? "item:moonstoneChest" : "Iron" === BH ? "item:ironChest" : "item:chest")
            }), (0, EH.jsx)("div", {
              className: "GridItemSlots",
              children: new Array(OH.numSlots).fill(0).map(((HH, BH) => fH(BH)))
            })]
          })]
        })
      } else if (!mH || BH && LH)
        if (LH && "Enchanting Table" === BH) oH = `InvenLeftSide${(null!==GH&&void 0!==GH?GH:"").replace(/ /gi,"")}`, IH = (0, EH.jsx)(oL, {
          specialItemInfo: SH.current,
          setHovered: tH,
          pointerDown: zH(XL.g),
          pointerUp: CH(XL.g),
          enchantingTablePosition: XH,
          enchantingTableBlockName: GH
        });
        else if (LH && "Salvaging Table" === BH) oH = "InvenLeftSideSalvagingTable", IH = (0, EH.jsx)(fL, {
        specialItemInfo: SH.current,
        setSpecialItemInfo: HH => {
          SH.current = HH
        },
        setHovered: tH,
        pointerDown: zH(XL.g),
        pointerUp: CH(XL.g)
      });
      else {
        if (!LH) return null;
        oH = `InvenLeftSide${(null!==BH&&void 0!==BH?BH:"HandCrafting").replace(/ /gi,"")}`, IH = (0, EH.jsx)(SA, {
          show: AH,
          onCraft: PH,
          craftingStation: BH,
          selectedCraftable: YH,
          dispatchSelectedCraftable: uH,
          setHovered: tH()
        })
      } else oH = "InvenLeftSideCreative", IH = rH ? (0, EH.jsx)(QA, {
        creativeScrollDiv: QH,
        playerInvenNumSlots: bH,
        getSetHoveringForIdx: tH,
        getPointerDownForIdx: zH,
        getPointerUpForIdx: CH,
        creativeSearchVal: WH,
        setCreativeSearchVal: MH,
        creativeCategory: xH,
        setCreativeCategory: vH,
        show: AH
      }) : null;
      const KH = !!OH || LH && !!BH;
      return (0, EH.jsx)("div", {
        className: `InvenLeftSide ${oH}`,
        "data-pad-inventory-start": KH ? "" : void 0,
        children: IH
      })
    }
    var kA = LH(609),
      mA = LH(20796),
      oA = LH(20800),
      IA = LH(20803);
    const fA = {
      Helmet: {
        sprite: "empty_armor_slot_helmet",
        image: LH(20810)
      },
      Chestplate: {
        sprite: "empty_armor_slot_chestplate",
        image: oA
      },
      Gauntlets: {
        sprite: "empty_armor_slot_gauntlets",
        image: IA
      },
      Leggings: {
        sprite: "empty_armor_slot_leggings",
        image: LH(20813)
      },
      Boots: {
        sprite: "empty_armor_slot_boots",
        image: mA
      }
    };

    function lA(HH) {
      const {
        sprite: BH,
        image: LH
      } = fA[HH];
      return ZB(BH, FB.k.ITEM, LH)
    }

    function KA(HH) {
      let {
        draggedInfo: BH,
        specialItemInfo: LH,
        craftFlyAnims: AH,
        getSetHovering: rH,
        getPointerDownForIdx: SH,
        getPointerUpForIdx: hH,
        variation: tH,
        canCraft: zH,
        isNewSlot: CH
      } = HH;
      const XH = (0, kH.c)("inventory", (HH => HH.player.length));
      return 0 === XH ? null : (0, EH.jsxs)("div", {
        className: "InvenBodyRight",
        children: [(0, EH.jsx)("div", {
          className: "ArmourItemSlots",
          children: new Array(kA.c.length).fill(0).map(((HH, GH) => {
            const YH = XH - kA.c.length + GH;
            return (0, EH.jsx)(mL.b, {
              idx: YH,
              draggedInfo: BH,
              specialItemInfo: LH,
              craftFlyHoldbackInfo: (0, EL.f)(AH, YH),
              setHovered: rH(YH),
              pointerDown: SH(YH),
              pointerUp: hH(YH),
              defaultIconB64: lA(kA.c[GH]),
              variation: zH ? tH : void 0,
              showNewDot: CH(YH)
            }, YH)
          }))
        }), (0, EH.jsx)("div", {
          className: "GridItemSlots",
          children: new Array(XH - 10 - kA.c.length).fill(0).map(((HH, GH) => {
            const YH = XH - kA.c.length - GH - 1;
            return (0, EH.jsx)(mL.b, {
              idx: YH,
              draggedInfo: BH,
              specialItemInfo: LH,
              craftFlyHoldbackInfo: (0, EL.f)(AH, YH),
              setHovered: rH(YH),
              pointerDown: SH(YH),
              pointerUp: hH(YH),
              variation: zH ? tH : void 0,
              showNewDot: CH(YH)
            }, YH)
          }))
        })]
      })
    }
    var cA = LH(37692),
      eA = LH(37694);

    function qA(HH) {
      const {
        e: BH,
        idx: LH
      } = HH, AH = (0, CL.j)(HH.readInventory(), LH), rH = (0, CL.n)(BH);
      LH === XL.e ? function(HH, BH) {
        const {
          draggedInfoRef: LH,
          removeItem: AH,
          removeDraggedInfoRef: rH,
          close: SH
        } = HH;
        if (LH.current) {
          const HH = BH && LH.current.amount || 1;
          AH(LH.current.idx, HH, !0) && (LH.current.amount -= HH, LH.current.amount <= 0 && rH())
        } else BH && SH()
      }(HH, rH) : LH === XL.g ? function(HH, BH) {
        const {
          e: LH,
          draggedInfoRef: AH,
          specialItemRef: rH,
          moveAmtIntoSlot: SH,
          removeDraggedInfoRef: hH
        } = HH;
        if ((0, CL.t)(LH) && rH.current) rH.current = null;
        else if (AH.current && rH.current && (AH.current.idx === rH.current.idx || (0, eA.d)(AH.current, rH.current)) && AH.current.amount > 0 && rH.current.amount > 0 && rH.current.amount < TL.g.maxItemStackSize)
          if (AH.current.idx === rH.current.idx) {
            if (BH) {
              const HH = Math.min(AH.current.amount, TL.g.maxItemStackSize - rH.current.amount);
              rH.current.amount += HH, AH.current.amount -= HH
            } else AH.current.amount--, rH.current.amount++;
            AH.current.amount <= 0 && hH()
          } else if (BH) {
          const HH = Math.min(AH.current.amount, TL.g.maxItemStackSize - rH.current.amount);
          SH(rH.current.idx, HH) && (rH.current.amount += HH)
        } else {
          SH(rH.current.idx, 1) && rH.current.amount++
        } else if (AH.current && !rH.current && !BH && AH.current.amount > 0) AH.current.amount--, rH.current = {
          idx: AH.current.idx,
          name: AH.current.name,
          attributes: AH.current.attributes,
          amount: 1
        }, AH.current.amount <= 0 && hH();
        else {
          const HH = AH.current;
          AH.current = rH.current, rH.current = HH
        }
      }(HH, rH) : (0, CL.t)(BH) ? function(HH, BH) {
        var LH, AH;
        const {
          idx: rH,
          draggedInfoRef: SH,
          specialItemRef: hH,
          canCraft: tH,
          variation: zH,
          swapSlots: CH,
          moveIntoSlots: EH
        } = HH;
        if (!BH) return;
        let XH = BH.amount;
        rH === (null === (LH = SH.current) || void 0 === LH ? void 0 : LH.idx) && (XH = SH.current.amount <= 0 ? 0 : BH.amount - SH.current.amount);
        rH === (null === (AH = hH.current) || void 0 === AH ? void 0 : AH.idx) && (XH = hH.current.amount <= 0 ? 0 : BH.amount - hH.current.amount);
        if (0 === XH) return;
        const GH = HH.readInventory(),
          YH = GH.player.length,
          uH = GH.chest,
          QH = YH - kA.c.length,
          WH = () => {
            if (!(0, rL.m)()) return void EH(10, QH, rH, XH);
            const HH = HH => {
              const LH = (0, CL.j)(GH, HH);
              return LH ? {
                amount: LH.amount,
                stacksWithMoved: (0, eA.d)(LH, BH)
              } : null
            };
            for (const BH of ((HH, BH, LH, AH, rH) => {
                const SH = [];
                let hH = AH;
                if (null !== AH) {
                  let tH = 0;
                  for (let AH = BH; AH < LH; AH++) {
                    const BH = HH(AH);
                    null !== BH && void 0 !== BH && BH.stacksWithMoved && null !== BH.amount && BH.amount > 0 && (tH += Math.max(0, rH - BH.amount))
                  }
                  const zH = Math.min(AH, tH);
                  if (zH > 0 && (SH.push({
                      start: BH,
                      end: LH,
                      amount: zH
                    }), hH = AH - zH), hH <= 0) return SH
                }
                for (let tH = LH - 1; tH >= BH; tH--)
                  if (null === HH(tH)) {
                    SH.push({
                      start: tH,
                      end: tH + 1,
                      amount: hH
                    });
                    break
                  } return SH
              })(HH, 10, QH, XH, TL.g.maxItemStackSize)) EH(BH.start, BH.end, rH, BH.amount)
          };
        if (!tH || "Enchanting Table" !== zH && "Salvaging Table" !== zH) {
          const LH = (0, bH.wb)(BH.name),
            AH = LH ? (0, bH.vb)(LH) : null;
          if (!kA.c.includes(LH) || rH !== AH && (0, CL.l)(GH, HH.itemInfo, AH, rH))
            if (uH)
              if (rH < YH) {
                var MH, xH;
                const [HH, BH] = null !== (MH = null === (xH = (0, xA.d)(uH.type)) || void 0 === xH ? void 0 : xH.quickMoveRange) && void 0 !== MH ? MH : [0, uH.numSlots];
                EH(YH + HH, YH + BH, rH, XH)
              } else EH(0, YH - kA.c.length, rH, XH);
          else GH.creative ? rH < 10 ? WH() : rH < YH ? EH(0, 10, rH, XH) : EH(0, YH - kA.c.length, rH, null !== BH.amount ? TL.g.maxItemStackSize : null) : rH < 10 ? WH() : EH(0, 10, rH, XH);
          else rH < YH - kA.c.length || rH >= YH ? CH(AH, rH) : (EH(0, YH - kA.c.length, AH, XH), tL.c.play("equip_leather1", 1).rate(.9 + .3 * Math.random()))
        } else hH.current = {
          idx: rH,
          name: BH.name,
          attributes: BH.attributes,
          amount: null !== BH.amount ? XH : 0
        }
      }(HH, AH) : HH.draggedInfoRef.current ? function(HH, BH, LH, AH) {
        const {
          draggedInfoRef: rH,
          specialItemRef: SH,
          moveAmtIntoSlot: hH,
          swapSlots: tH,
          removeItem: zH,
          removeDraggedInfoRef: CH
        } = HH, EH = HH.readInventory(), XH = rH.current.idx;
        if (LH && (BH === XH || (0, eA.d)(rH.current, LH)) && rH.current.amount > 0 && (0, CL.b)(LH) > 0 && (LH.amount < TL.g.maxItemStackSize || BH === XH)) AH ? LH.amount + rH.current.amount <= TL.g.maxItemStackSize || BH === XH ? hH(BH, rH.current.amount) : hH(BH, TL.g.maxItemStackSize - LH.amount) : hH(BH, 1);
        else if (rH.current.amount > 0 && !LH) hH(BH, AH ? rH.current.amount : 1);
        else if (AH || LH || 0 === rH.current.amount)
          if (EH.creative && !EH.chest && BH >= EH.player.length) {
            const HH = 0 === rH.current.amount ? 1 : rH.current.amount;
            zH(rH.current.idx, HH, !1) && CH()
          } else {
            var GH;
            const LH = (null === (GH = SH.current) || void 0 === GH ? void 0 : GH.idx) === BH;
            if (tH(BH, rH.current.idx)) {
              const AH = HH.readInventory(),
                hH = (0, CL.j)(AH, XH),
                tH = !AH.chest && AH.creative && rH.current.idx >= AH.player.length;
              if (hH && rH.current.idx !== BH && !tH) {
                let HH = (0, CL.b)(hH);
                LH && (HH -= SH.current.amount), rH.current = LH && 0 === HH ? null : {
                  idx: rH.current.idx,
                  name: hH.name,
                  attributes: hH.attributes,
                  amount: HH
                }
              } else CH()
            }
          }
        else hH(BH, 1)
      }(HH, LH, AH, rH) : function(HH, BH, LH, AH) {
        var rH;
        const {
          draggedInfoRef: SH,
          specialItemRef: hH
        } = HH;
        if (!LH) return;
        let tH = (0, CL.b)(LH);
        const zH = (null === (rH = hH.current) || void 0 === rH ? void 0 : rH.idx) === BH;
        zH && (tH -= hH.current.amount);
        AH || (tH = Math.ceil(tH / 2));
        SH.current = zH && 0 === tH ? null : {
          idx: BH,
          name: LH.name,
          attributes: LH.attributes,
          amount: tH
        }
      }(HH, LH, AH, rH)
    }
    var gA = LH(2680);

    function NA(HH, BH, LH) {
      return Math.round((BH + HH) * LH) / LH - BH
    }
    const RA = new WeakMap;

    function jA(HH) {
      const BH = window.devicePixelRatio || 1,
        LH = RA.get(HH);
      if (LH && LH.pixelRatio === BH && LH.width === window.innerWidth && LH.height === window.innerHeight) return LH;
      let AH = 0,
        rH = 0;
      const SH = HH.offsetParent;
      if (SH) {
        const HH = SH.getBoundingClientRect();
        AH = HH.left + SH.clientLeft, rH = HH.top + SH.clientTop
      }
      const hH = {
        left: AH,
        top: rH,
        pixelRatio: BH,
        width: window.innerWidth,
        height: window.innerHeight,
        halfRem: .5 * (0, gA.K)(document)
      };
      return RA.set(HH, hH), hH
    }

    function nA(HH, BH, LH) {
      const {
        left: AH,
        top: rH,
        pixelRatio: SH
      } = jA(HH);
      return `translate(${NA(BH,AH,SH)}px, ${NA(LH,rH,SH)}px)`
    }

    function FA(HH) {
      const {
        halfRem: BH
      } = jA(HH);
      return nA(HH, BH, BH)
    }

    function DA(HH, BH) {
      return !!BH && BH.name === HH.name
    }

    function wA() {
      return CH.gameBridge.latest("inventory")
    }

    function ZA(HH, BH, LH) {
      return CH.gameBridge.send("removeInventoryItem", {
        slot: HH,
        amount: BH,
        drop: LH
      })
    }

    function dA(HH) {
      return (0, CL.f)(HH, CH.gameBridge.latest("itemInfo"), CH.gameBridge.latest("stationItems").enchantable)
    }

    function aA(HH) {
      let {
        show: BH,
        close: LH,
        canCraft: AH,
        variation: SH,
        inventoryItemsMoveable: hH,
        setCraftFlyAnims: tH
      } = HH;
      (0, kH.e)("itemInfo");
      const [zH, EH] = (0, rH.useState)(null), [XH, GH] = (0, rH.useState)(null), [YH, uH] = (0, rH.useState)(!1), QH = (0, rH.useRef)(null), WH = (0, rH.useRef)(null), MH = (0, rH.useRef)(null), xH = (0, rH.useRef)(null), [vH, PH] = (0, rH.useReducer)((HH => HH + 1), 0), TH = (0, rH.useCallback)((() => {
        BH && PH()
      }), [BH, PH]), UH = (0, rH.useCallback)((() => {
        WH.current = null, eH.current = null, TH()
      }), [TH]), VH = (0, rH.useCallback)(((HH, BH) => {
        tH((LH => LH.map((LH => "ingredient" === LH.kind ? LH : LH.fE === HH ? {
          ...LH,
          fE: BH,
          to: (0, CL.c)(BH)
        } : LH.fE === BH ? {
          ...LH,
          fE: HH,
          to: (0, CL.c)(HH)
        } : LH))))
      }), [tH]), OH = (0, rH.useCallback)(((HH, BH) => {
        const LH = NH.current;
        if (LH.x = HH, LH.y = BH, QH.current) !RH.current.isTouch || RH.current.itemBeingDragged && !eH.current ? (QH.current.style.transform = nA(QH.current, LH.x, LH.y), uH(RH.current.isTouch && !eH.current)) : (QH.current.style.transform = FA(QH.current), uH(!0));
        else if (xH.current) {
          const LH = xH.current;
          let AH = HH + 10,
            rH = BH + 10;
          const SH = LH.offsetWidth,
            hH = LH.offsetHeight;
          AH + SH > window.innerWidth && (AH = HH - SH - 10), rH + hH > window.innerHeight && (rH = BH - hH - 10), AH < 0 && (AH = 0), rH < 0 && (rH = 0), xH.current.style.transform = `translate(${AH}px, ${rH}px)`
        }
      }), []), mH = (0, rH.useCallback)((HH => (BH, LH, AH) => {
        if (EH(BH && void 0 !== HH ? HH : null), BH) {
          if (void 0 === HH && !LH) return void(0, cA.d)("Error in invenComp", new Error("isHovering true but no idx or text"));
          if (void 0 !== HH) {
            var rH;
            const BH = wA();
            let LH;
            if (LH = HH === XL.g ? MH.current ? (0, CL.j)(BH, MH.current.idx) : null : (0, CL.j)(BH, HH), !LH) return void GH(null);
            if ((null === (rH = MH.current) || void 0 === rH ? void 0 : rH.idx) === HH) {
              if (0 === (0, CL.b)(LH) - MH.current.amount) return void GH(null)
            }
            GH(dA(LH))
          } else GH({
            name: LH.name,
            desc: LH.desc,
            fontStyle: "normal"
          })
        } else GH(null);
        AH && setTimeout((() => {
          OH(AH.pageX, AH.pageY)
        }), 0)
      }), [OH]), oH = (0, rH.useCallback)(((HH, BH) => {
        const LH = CH.gameBridge.send("moveInventoryItem", {
          from: WH.current.idx,
          to: HH,
          amount: BH
        });
        return LH ? (WH.current.amount -= BH, WH.current.amount <= 0 && UH()) : console.error("moveInventoryItem failed"), LH
      }), [UH]), IH = (0, rH.useCallback)(((HH, BH) => {
        const LH = MH.current,
          AH = null === LH || void 0 === LH ? void 0 : LH.idx;
        LH && (LH.idx = function(HH, BH, LH) {
          return HH === BH ? LH : HH === LH ? BH : HH
        }(AH, HH, BH));
        const rH = CH.gameBridge.send("swapInventorySlots", {
          a: HH,
          b: BH
        });
        return rH ? VH(HH, BH) : LH && (LH.idx = AH), rH
      }), [VH]), fH = (0, rH.useCallback)(((HH, BH, LH, AH) => {
        const rH = CH.gameBridge.send("quickMoveInventoryItem", {
          slot: LH,
          start: HH,
          end: BH,
          amount: AH
        });
        null !== rH && VH(LH, rH)
      }), [VH]), lH = (0, rH.useCallback)(((HH, BH) => {
        var rH;
        ((HH, BH, LH) => {
          const AH = HH - (LH - kA.c.length);
          return !(!BH || AH < 0 || AH >= kA.c.length) && (0, bH.wb)(BH) !== kA.c[AH]
        })(BH, null === (rH = WH.current) || void 0 === rH ? void 0 : rH.name, wA().player.length) || (qA({
          e: HH,
          idx: BH,
          readInventory: wA,
          itemInfo: CH.gameBridge.latest("itemInfo"),
          draggedInfoRef: WH,
          specialItemRef: MH,
          moveAmtIntoSlot: oH,
          swapSlots: IH,
          moveIntoSlots: fH,
          removeItem: ZA,
          removeDraggedInfoRef: UH,
          close: LH,
          canCraft: AH,
          variation: SH
        }), TH())
      }), [AH, LH, oH, fH, UH, IH, SH, TH]), KH = (0, rH.useRef)(0), cH = (0, rH.useRef)(null), eH = (0, rH.useRef)(null), qH = (0, rH.useRef)(null), gH = (0, rH.useRef)(new Set), NH = (0, rH.useRef)({
        x: 0,
        y: 0
      }), RH = (0, rH.useRef)({
        isTouch: !1,
        itemBeingDragged: !1
      }), jH = (0, rH.useCallback)((() => (qH.current = null, RH.current.itemBeingDragged = !1, clearTimeout(cH.current), !!eH.current && (eH.current = null, TH(), !0))), [TH]);
      (0, rH.useEffect)((() => {
        jH(), gH.current.clear()
      }), [BH]);
      const nH = HH => void 0 !== HH && (gH.current.has(HH) || null !== qH.current && HH !== qH.current),
        FH = HH => {
          RH.current.isTouch = (0, CL.p)(HH)
        },
        DH = (0, rH.useCallback)((HH => BH => {
          const AH = (0, CL.p)(BH);
          if (AH || OH(BH.pageX, BH.pageY), hH)
            if (nH(BH.pointerId)) void 0 !== BH.pointerId && gH.current.add(BH.pointerId);
            else {
              if (FH(BH), AH) {
                KH.current = BH.timeStamp, RH.current.itemBeingDragged = !0, qH.current = BH.pointerId;
                const LH = (0, CL.j)(wA(), HH);
                if (LH && LH.amount && LH.amount > 0) {
                  const LH = BH.pageX,
                    AH = BH.pageY,
                    rH = NH.current.x,
                    SH = NH.current.y;
                  clearTimeout(cH.current), cH.current = setTimeout((() => {
                    if (WH.current && WH.current.idx === HH && (Math.abs(LH - NH.current.x) < 20 && Math.abs(AH - NH.current.y) < 20 || rH === NH.current.x && SH === NH.current.y) && RH.current.itemBeingDragged) {
                      const HH = wA(),
                        LH = HH.creative && !HH.chest && WH.current.idx >= TL.g.numInvenSlots && null !== (0, CL.j)(HH, WH.current.idx).amount ? TL.g.maxItemStackSize : WH.current.amount;
                      eH.current = {
                        initTouchX: BH.pageX,
                        initTouchY: BH.pageY,
                        maxAmount: LH
                      }, WH.current.amount = Math.ceil(WH.current.amount / 2), QH.current.style.transform = FA(QH.current), uH(!0), TH()
                    }
                  }), 500)
                }
              }
              lH(BH, HH)
            }
          else HH === XL.e && (0, CL.n)(BH) && LH()
        }), [OH, lH, hH, LH, TH]),
        wH = (0, rH.useCallback)((HH => HH => {
          if (nH(HH.pointerId)) return;
          const BH = (0, CL.p)(HH);
          if (FH(HH), !jH()) {
            if (BH && WH.current && HH.timeStamp - KH.current > 150) {
              const BH = document.elementFromPoint(HH.clientX, HH.clientY);
              if (null !== BH) {
                const LH = BH.getAttribute("data-inven-idx");
                null !== LH ? lH(HH, parseInt(LH)) : BH.classList.contains("InventoryBackgroundScreen") && lH(HH, -1)
              }
            }
            OH(HH.pageX, HH.pageY)
          }
        }), [OH, lH, jH]);
      (0, rH.useEffect)((() => {
        let HH;
        const LH = ["pointerup", "pointercancel"],
          AH = HH => {
            gH.current.has(HH.pointerId) ? setTimeout((() => {
              gH.current.delete(HH.pointerId)
            }), 0) : HH.pointerId === qH.current && setTimeout((() => {
              qH.current === HH.pointerId && jH()
            }), 0)
          };
        if (BH) {
          for (const HH of LH) document.addEventListener(HH, AH, !0);
          if (!RH.current.isTouch) {
            const HH = NH.current;
            OH(HH.x, HH.y)
          }
          HH = HH => {
            HH.preventDefault(), nH(HH.pointerId) || (FH(HH), OH(HH.pageX, HH.pageY), eH.current && HH.pointerId === qH.current && (HH => {
              if (!WH.current) return eH.current = null, void TH();
              const {
                initTouchX: BH,
                maxAmount: LH
              } = eH.current, AH = (HH.pageX - BH) * eH.current.maxAmount / 160, rH = Math.ceil(LH / 2) + Math.ceil(AH);
              WH.current.amount = Math.min(LH, Math.max(1, rH)), TH()
            })(HH))
          }, document.addEventListener("pointermove", HH, !0)
        }
        return () => {
          document.removeEventListener("pointermove", HH, !0);
          for (const HH of LH) document.removeEventListener(HH, AH, !0)
        }
      }));
      const ZH = (0, rH.useCallback)((() => {
          if (WH.current) {
            const HH = (0, CL.j)(wA(), WH.current.idx);
            (!DA(WH.current, HH) || HH.amount < WH.current.amount) && UH()
          }
        }), [UH]),
        dH = (0, rH.useCallback)((() => {
          const HH = WH.current;
          if (HH) {
            const BH = (0, CL.j)(wA(), HH.idx);
            DA(HH, BH) && (HH.attributes = BH.attributes)
          }
        }), []);
      return {
        draggedDomRef: QH,
        draggedInfoRef: WH,
        specialItemRef: MH,
        hoverInfoDomRef: xH,
        longHoldSplitInfoRef: eH,
        currHoveredIdx: zH,
        currHoveredDisplayInfo: XH,
        displayDraggedItemName: YH,
        forceRerenderIfVisible: TH,
        removeDraggedInfoRef: UH,
        checkDraggedItemConsistencyWithInven: ZH,
        refreshDraggedAttributes: dH,
        swapSlots: IH,
        getPointerDownForIdx: DH,
        getPointerUpForIdx: wH,
        getSetHovering: mH,
        setCurrHoveredDisplayInfo: GH,
        moveFollowerTo: OH
      }
    }
    class sA {
      constructor(HH) {
        this.snapshot = [], this.newSlots = new Set, this.update(HH, !1)
      }
      update(HH, BH) {
        const LH = HH.map((HH => {
          var BH;
          return HH ? {
            name: HH.name,
            amount: null !== (BH = HH.amount) && void 0 !== BH ? BH : 1
          } : null
        }));
        LH.forEach(((HH, LH) => {
          const AH = this.snapshot[LH],
            rH = (null === HH || void 0 === HH ? void 0 : HH.name) !== (null === AH || void 0 === AH ? void 0 : AH.name);
          (!HH || rH || HH.amount < AH.amount) && this.newSlots.delete(LH), BH && HH && (rH || HH.amount > AH.amount) && this.newSlots.add(LH)
        })), this.snapshot = LH
      }
      clearMarks() {
        this.newSlots.clear()
      }
      isNew(HH) {
        return this.newSlots.has(HH)
      }
    }
    const JA = (HH, BH, LH) => ({
      button: BH,
      shiftKey: LH,
      pageX: HH.clientX,
      pageY: HH.clientY,
      clientX: HH.clientX,
      clientY: HH.clientY,
      pointerType: "mouse"
    });

    function iA(HH) {
      const [BH, LH] = (0, rH.useState)(HH);
      return HH && !BH && LH(!0), (0, rH.useEffect)((() => {
        if (BH) return;
        let HH = !0;
        const AH = () => {
            HH && (HH = !1, LH(!0))
          },
          rH = "function" === typeof window.requestIdleCallback,
          SH = rH ? window.requestIdleCallback(AH, {
            timeout: 2e3
          }) : void 0,
          hH = setTimeout(AH, rH ? 2e3 : 1e3);
        return () => {
          HH = !1, clearTimeout(hH), void 0 !== SH && window.cancelIdleCallback(SH)
        }
      }), [BH]), BH
    }
    var pA = LH(3251);
    const yA = (0, rH.memo)((function(HH) {
      var BH;
      let {
        show: LH,
        onOpen: AH,
        onClose: SH,
        variation: tH
      } = HH;
      const XH = (0, rH.useRef)(null),
        GH = (0, rH.useRef)(null),
        YH = function(HH) {
          const [BH, LH] = (0, rH.useState)(!0), [AH, SH] = (0, rH.useState)(!1), hH = (0, rH.useRef)(null), tH = (0, rH.useRef)(null), CH = (0, zH.j)("_shield"), EH = (0, rH.useRef)(null), XH = (0, zH.j)("_health"), GH = (0, rH.useRef)(null);

          function YH(HH) {
            const BH = Date.now() + HH;
            BH < tH.current || (LH(!1), clearTimeout(hH.current), tH.current = BH, hH.current = setTimeout((() => {
              LH(!0)
            }), HH))
          }
          return (0, rH.useEffect)((() => {
            YH(uL);
            const HH = GL.c.subscribe("requestingPlayVideoAd", (() => {
              YH(uL)
            }));
            return () => {
              clearTimeout(hH.current), GL.c.unsubscribe(HH)
            }
          }), []), (0, rH.useEffect)((() => {
            (EH.current > CH || GH.current > XH) && YH(6e4), EH.current = CH, GH.current = XH
          }), [CH, XH]), (0, rH.useEffect)((() => {
            let BH = null;
            return HH ? BH = setTimeout((() => {
              SH(!0)
            }), 250) : SH(!1), () => {
              clearTimeout(BH)
            }
          }), [HH]), BH && AH
        }(LH);
      (0, OH.e)(LL.c, null);
      const QH = (0, LL.k)(),
        WH = QH.some((HH => HH.panel)),
        {
          userContext: MH
        } = (0, UH.e)(),
        xH = (0, kH.c)("inventory", (HH => {
          const BH = HH.chest;
          return null !== BH && (PA(BH.numSlots) || OA(BH, MH.whamm))
        })),
        vH = iA(LH),
        PH = iA(LH),
        [TH, VH] = (0, rH.useState)([]),
        mH = (0, rH.useCallback)((HH => {
          VH((BH => BH.filter((BH => BH.id !== HH))))
        }), []),
        oH = (0, rH.useRef)(null),
        IH = (0, rH.useRef)(0),
        fH = (0, rH.useCallback)((() => {
          oH.current && (IH.current = oH.current.scrollTop), SH()
        }), [SH]),
        lH = (0, zH.j)("inventoryItemsMoveable"),
        KH = (0, zH.j)("canCraft"),
        {
          clientEscMenuOptions: eH
        } = (0, RH.m)(["clientEscMenuOptions"]),
        qH = (0, rH.useRef)(null);
      qH.current || (qH.current = new sA(CH.gameBridge.latest("inventory").player));
      const gH = qH.current,
        {
          draggedDomRef: NH,
          draggedInfoRef: jH,
          specialItemRef: nH,
          hoverInfoDomRef: FH,
          longHoldSplitInfoRef: DH,
          currHoveredIdx: wH,
          currHoveredDisplayInfo: ZH,
          displayDraggedItemName: dH,
          forceRerenderIfVisible: aH,
          removeDraggedInfoRef: sH,
          checkDraggedItemConsistencyWithInven: JH,
          refreshDraggedAttributes: iH,
          swapSlots: pH,
          getPointerDownForIdx: yH,
          getPointerUpForIdx: HB,
          getSetHovering: BB,
          setCurrHoveredDisplayInfo: LB,
          moveFollowerTo: AB
        } = aA({
          show: LH,
          close: fH,
          canCraft: KH,
          variation: tH,
          inventoryItemsMoveable: lH,
          setCraftFlyAnims: VH
        });
      (0, rH.useEffect)((() => {
        const HH = !LH && null !== CH.gameBridge.latest("inventory").chest;
        if (HH && CH.gameBridge.send("closeChest", null), LH || (gH.clearMarks(), BB(null)(!1)), HH) {
          tL.c.play("chestClose", 1).rate(.8 + .4 * Math.random())
        }
      }), [LH]), (0, kH.b)("chestToggled", (HH => {
        if (HH ? AH() : LH && fH(), HH) {
          tL.c.play("chestOpen", 1).rate(.8 + .4 * Math.random())
        }
      }));
      const rB = (0, IB.g)();
      (0, kH.b)("inventory", (HH => {
        let {
          player: BH
        } = HH;
        var AH, rH, SH;
        (gH.update(BH, !LH && rB.shown), nH.current) && (nH.current = (rH = nH.current, SH = null !== (AH = BH[nH.current.idx]) && void 0 !== AH ? AH : null, DA(rH, SH) ? (rH.attributes = SH.attributes, null !== SH.amount && rH.amount > SH.amount && (rH.amount = SH.amount), rH) : null));
        iH(), null !== wH && BB(wH)(!0), aH()
      })), (0, rH.useEffect)((() => (CH.gameBridge.send("setInventoryOpen", LH), () => {
        CH.gameBridge.send("setInventoryOpen", !1)
      })), [LH]);
      const SB = (HH, BH) => {
        if (HH === XL.g) return void(HH => {
          const BH = nH.current;
          if (!BH || null === (0, CL.j)(CH.gameBridge.latest("inventory"), BH.idx)) return;
          const LH = HH ? Math.max(BH.amount, 1) : 1,
            AH = BH.amount - LH;
          if (!CH.gameBridge.send("removeInventoryItem", {
              slot: BH.idx,
              amount: LH,
              drop: !0
            })) return;
          const rH = nH.current;
          rH && (rH.amount = Math.min(rH.amount, AH), rH.amount <= 0 && (nH.current = null)), aH()
        })(BH);
        const LH = null === HH ? null : (0, CL.j)(CH.gameBridge.latest("inventory"), HH);
        if (null !== LH) {
          var AH, rH, SH;
          const hH = BH && null !== (AH = LH.amount) && void 0 !== AH ? AH : 1;
          CH.gameBridge.send("removeInventoryItem", {
            slot: HH,
            amount: hH,
            drop: !0
          }), HH === (null === (rH = jH.current) || void 0 === rH ? void 0 : rH.idx) && (jH.current.amount -= hH, jH.current.amount <= 0 && sH(), aH()), HH === (null === (SH = nH.current) || void 0 === SH ? void 0 : SH.idx) && (nH.current = null, aH())
        }
      };
      (0, kH.b)("inventoryDropRequested", (HH => {
        LH && wH !== XL.g && SB(wH, HH)
      }));
      const hB = (HH, BH) => {
        let LH = BH;
        if (BH === XL.g) {
          if (!nH.current) return;
          LH = nH.current.idx
        }
        const AH = pH(HH, LH);
        if (AH && jH.current && (jH.current.idx === LH ? jH.current.idx = HH : jH.current.idx === HH && (jH.current.idx = LH)), AH && BH === XL.g) {
          const HH = (0, CL.j)(CH.gameBridge.latest("inventory"), LH);
          nH.current = HH ? {
            idx: LH,
            name: HH.name,
            attributes: HH.attributes,
            amount: (0, CL.b)(HH)
          } : null
        }
        aH()
      };
      (0, kH.b)("numberKeyPressed", (HH => {
        null !== wH && LH && hB(HH - 1, wH)
      })), (0, rH.useEffect)((() => {
        LH || (nH.current = null, sH(), LB(null))
      }), [LH, sH, LB, nH]);
      const tB = nH.current;
      (0, rH.useEffect)((() => {
        wH === XL.g && BB(XL.g)(!0)
      }), [tB, wH, BB]);
      const zB = () => {
        JH(), iH(), aH()
      };
      (0, kH.b)("chestRefreshed", zB), (0, kH.b)("inventorySynced", zB);
      const [CB, EB] = (0, rH.useState)(new Map), XB = null !== (BH = CB.get(tH)) && void 0 !== BH ? BH : null, GB = (HH, BH) => {
        EB((LH => {
          const AH = LH.get(HH);
          return AH && AH.name === BH.name && AH.wC === BH.wC ? LH : new Map(LH).set(HH, BH)
        }))
      };
      (0, OH.d)("craftingRecipesEdited", (() => {
        aH()
      })), (0, OH.d)(ZL.b, (HH => {
        let {
          variation: BH,
          itemName: LH
        } = HH;
        GB(BH, {
          name: LH,
          wC: 0
        })
      }));
      const [YB, uB] = (0, rH.useState)(null), [QB, WB] = (0, rH.useState)(null);
      (0, kH.b)("enchantingTableOpened", (HH => {
        let {
          position: BH,
          blockName: LH
        } = HH;
        uB(BH), WB(LH)
      }));
      const [MB, xB] = (0, rH.useState)(""), [vB, PB] = (0, rH.useState)(null);
      (0, rH.useEffect)((() => {
        LH && oH.current && (oH.current.scrollTop = IH.current)
      }), [LH]);
      return (HH => {
        const BH = (0, rH.useRef)(HH);
        BH.current = HH, (0, rH.useEffect)((() => {
          if (!HH.show) return;
          const LH = (HH, LH, AH, rH) => {
              const {
                getPointerDownForIdx: SH,
                getPointerUpForIdx: hH
              } = BH.current;
              SH(HH)(JA(LH, AH, rH)), hH(HH)(JA(LH, AH, rH))
            },
            AH = {
              primary: (HH, BH) => {
                LH(HH, BH, 0, !1)
              },
              secondary: (HH, BH) => {
                LH(HH, BH, 2, !1)
              },
              quickMove: (HH, BH) => {
                LH(HH, BH, 0, !0)
              },
              dropHeld: (HH, LH) => {
                BH.current.getPointerDownForIdx(XL.e)(JA(LH, HH ? 0 : 2, !1))
              },
              dropSlot: (HH, LH) => {
                BH.current.dropFromIdx(HH, LH)
              },
              swapWithHotbar: (HH, LH) => {
                BH.current.swapWithHotbar(HH, LH)
              },
              cancel: () => {
                BH.current.removeDraggedInfoRef()
              },
              isHolding: () => !!BH.current.draggedInfoRef.current,
              hasItemAt: HH => {
                const {
                  draggedInfoRef: LH,
                  specialItemRef: AH
                } = BH.current;
                if (HH === XL.g) return !!AH.current;
                const rH = (0, CL.j)(CH.gameBridge.latest("inventory"), HH);
                return !!rH && (0, mL.d)(HH, (0, CL.b)(rH), [LH.current, AH.current]).shown
              },
              hover: (HH, LH) => {
                const {
                  moveFollowerTo: AH,
                  getSetHovering: rH
                } = BH.current;
                AH(LH.clientX, LH.clientY), rH(null !== HH && void 0 !== HH ? HH : void 0)(null !== HH, void 0, {
                  pageX: LH.clientX,
                  pageY: LH.clientY
                })
              },
              moveTo: HH => {
                BH.current.moveFollowerTo(HH.clientX, HH.clientY)
              },
              close: () => {
                BH.current.close()
              }
            };
          return (0, AL.m)(AH)
        }), [HH.show])
      })({
        show: LH,
        close: fH,
        draggedInfoRef: jH,
        specialItemRef: nH,
        getPointerDownForIdx: yH,
        getPointerUpForIdx: HB,
        getSetHovering: BB,
        moveFollowerTo: AB,
        removeDraggedInfoRef: sH,
        dropFromIdx: SB,
        swapWithHotbar: hB
      }), (0, rH.useEffect)((() => {
        uH.k.AX("inventoryDraggedItemUpdated", {
          draggedInfo: jH.current,
          specialItemInfo: nH.current,
          setHovered: BB,
          pointerDown: yH,
          pointerUp: HB,
          variation: KH ? tH : void 0,
          craftFlyAnims: TH
        })
      })), (0, EH.jsxs)(cH.d, {
        show: LH,
        style: {
          touchAction: LH ? "none" : void 0
        },
        children: [jH.current && (0, EH.jsx)(WL, {
          draggedInfo: jH.current,
          toAddRef: NH
        }), jH.current && dH && (0, EH.jsx)(ML, {
          className: "DraggedInvenItemName",
          displayInfo: dA(jH.current),
          domRef: null
        }), !jH.current && ZH && (0, EH.jsx)(ML, {
          displayInfo: ZH,
          domRef: FH
        }), DH.current && jH.current && (0, EH.jsx)(xL, {
          info: DH.current,
          draggedInfo: jH.current
        }), TH.map((HH => (0, EH.jsx)(EL.c, {
          anim: HH,
          onComplete: mH
        }, HH.id))), (0, EH.jsx)(hH.b, {
          show: LH,
          className: "InventoryBackgroundScreen",
          globallyUniqueKey: "Inventory",
          close: fH,
          togglePointerLock: !1,
          closeOnPressBackground: !1,
          preventContextMenu: !0,
          pointerDown: yH(XL.e),
          pointerUp: HB(XL.e),
          doGameplayStartStopOnShow: !0
        }), vH && (0, EH.jsxs)("div", {
          className: "EntireInventoryWrapper",
          children: [(0, EH.jsx)("div", {
            ref: XH,
            className: "InventoryAdOuter",
            children: (0, pA.k)() && (0, EH.jsx)(zL.b, {
              info: {
                adType: "leaderboard",
                adId: 6,
                adAlias: "inventory"
              },
              sizeInfo: {
                parentRef: XH
              },
              verticalAlign: "start",
              showing: LH && YH,
              extraContrastBackgroundBox: "top",
              noFillShowBloxdAdProbability: 0,
              autoRefreshMode: "none"
            })
          }), (0, EH.jsxs)("div", {
            className: "InventoryWrapper",
            children: [(0, EH.jsxs)("div", {
              className: PL()("Inventory", {
                WithGameButtons: QH.length > 0,
                WithPanelButtons: WH,
                WideChestOpen: xH
              }),
              children: [(0, EH.jsx)("div", {
                className: "InventoryFiller"
              }), (0, EH.jsx)(hL, {
                show: LH,
                buttons: QH
              }), (0, EH.jsxs)("div", {
                className: "InvenBody",
                children: [(0, EH.jsx)(bA, {
                  variation: tH,
                  canCraft: KH,
                  show: LH,
                  creativeMounted: PH,
                  specialItemRef: nH,
                  draggedInfo: jH.current,
                  getSetHovering: BB,
                  getPointerDownForIdx: yH,
                  getPointerUpForIdx: HB,
                  enchantingTablePosition: YB,
                  enchantingTableBlockName: QB,
                  selectedCraftable: XB,
                  dispatchSelectedCraftable: HH => {
                    GB(tH, HH)
                  },
                  creativeScrollDiv: oH,
                  creativeSearchVal: MB,
                  setCreativeSearchVal: xB,
                  creativeCategory: vB,
                  setCreativeCategory: PB,
                  onCraft: function(HH, BH) {
                    let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    if (JH(), (HH || LH.length > 0) && VH((BH => {
                        const AH = [...BH],
                          rH = BH.filter((HH => "ingredient" === HH.kind)).length;
                        for (const HH of LH.slice(0, Math.max(0, 24 - rH))) AH.push({
                          id: (0, EL.d)(),
                          ...HH,
                          to: HH.to
                        });
                        return HH && AH.push({
                          id: (0, EL.d)(),
                          ...HH,
                          to: (0, CL.c)(HH.fE)
                        }), AH
                      })), null !== BH) {
                      var AH;
                      const HH = CH.gameBridge.latest("inventory");
                      (0, bH.wb)(null === (AH = (0, CL.j)(HH, BH)) || void 0 === AH ? void 0 : AH.name) ? yH(BH)({
                        button: 0,
                        shiftKey: !0
                      }): pH(BH, HH.selectedSlot)
                    }
                  }
                }), (0, EH.jsx)(KA, {
                  draggedInfo: jH.current,
                  specialItemInfo: nH.current,
                  craftFlyAnims: TH,
                  getSetHovering: BB,
                  getPointerDownForIdx: yH,
                  getPointerUpForIdx: HB,
                  variation: tH,
                  canCraft: KH,
                  isNewSlot: HH => eH.showNewItemIndicator && gH.isNew(HH)
                })]
              })]
            }), (0, EH.jsx)("div", {
              className: "InventoryAdOuter",
              children: (0, EH.jsx)("div", {
                ref: GH,
                className: "InventoryAd",
                children: (0, EH.jsx)("div", {
                  className: "InventoryAdInner"
                })
              })
            })]
          })]
        })]
      })
    }));
    var Hr = LH(1440),
      Br = LH(120);
    const Lr = (0, rH.memo)((function(HH) {
      let {
        show: BH,
        onOpen: LH,
        onClose: AH
      } = HH;
      const SH = (0, rH.useRef)(0),
        tH = () => (0, Hr.k)() && !(0, Hr.p)() && SH.current <= 2;
      BH = tH() && BH;
      const zH = () => {
        SH.current++, AH()
      };
      (0, OH.d)("ctrlCrouchWithoutFullscreen", (() => {
        tH() && LH()
      })), (0, OH.d)("displaymodeFullscreenChange", (HH => {
        BH && HH && zH()
      }));
      const CH = "crazygames" === Br.siteUsed;
      return (0, EH.jsx)(hH.b, {
        close: zH,
        escDoesExit: !0,
        show: BH,
        togglePointerLock: !1,
        globallyUniqueKey: "CantCtrlCrouchIfNotFullscreenComp",
        children: (0, EH.jsxs)("div", {
          className: "CantCtrlCrouchIfNotFullscreenComp SmallTextBold",
          children: [(0, EH.jsx)("div", {
            className: "CantCtrlCrouchHeader",
            children: "Go fullscreen to crouch with ctrl"
          }), CH && (0, EH.jsx)("div", {
            className: "CantCtrlCrouchInstructions SmallTextLight",
            children: "Press the crazygames full screen button"
          }), (0, EH.jsx)("div", {
            className: "CantCtrlCrouchSubtext SmallTextLight",
            children: "(Otherwise I can't stop CTRL+W closing the window!)"
          }), (0, EH.jsxs)("div", {
            className: "CantCtrlCrouchButtonsContainer",
            children: [!CH && (0, EH.jsx)(YH.u, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                (0, Hr.v)(), zH()
              },
              children: (0, EH.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Go Fullscreen"
              })
            }), (0, EH.jsx)(YH.O, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                zH()
              },
              children: (0, EH.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Nevermind"
              })
            })]
          })]
        })
      })
    }));
    var Ar = LH(2978),
      rr = LH(2985),
      Sr = LH(1352),
      hr = LH(3970),
      tr = LH(1361),
      zr = LH(2999),
      Cr = LH(3985),
      Er = LH(3988);

    function Xr(HH, BH) {
      return (0, zr.h)(!0, HH, BH) ? () => {
        !async function(HH) {
          await hr.d.refresh();
          const {
            data: BH,
            failed: LH
          } = hr.d.getState();
          if (null === BH || LH) return;
          const AH = hr.d.getExclusion(HH);
          if ("blocked" === AH) return;
          const rH = null === AH;
          Sr.NotificationProvider.showCustomPopup({
            body: BH => {
              const LH = LH => ({
                text: Cr.j[LH].text,
                onClick: () => {
                  BH(), (0, Er.c)(LH, HH, null)
                }
              });
              return (0, EH.jsx)(tr.m, {
                title: rH ? "socialBar:ignoreOrBlockAfterReport" : "socialBar:blockAfterReport",
                textOpts: {
                  title: {
                    playerName: HH
                  }
                },
                secondary: rH ? LH("ignore") : void 0,
                confirm: LH("block"),
                cancel: {
                  text: "socialBar:notNow",
                  onClick: BH
                },
                destructive: !0
              })
            },
            disableExitButton: !0,
            unlockPointerKey: "exclusionAfterReport"
          })
        }(HH)
      } : null
    }
    LH(2983);
    const Gr = (0, rH.memo)((function(HH) {
      let {
        show: BH,
        onOpen: LH,
        onClose: AH
      } = HH;
      const [SH, tH] = (0, rH.useState)(""), [zH, XH] = (0, rH.useState)(""), [GH, YH] = (0, rH.useState)(null), [uH, QH] = (0, rH.useState)(null), WH = (0, kH.e)("hiddenPlayerNames"), MH = {
        kind: "worldCodeLine",
        onSubmit: (HH, BH) => {
          AH(), CH.gameBridge.send("reportWorldCodeChat", {
            chatMsgId: uH,
            policy: HH,
            details: BH
          })
        }
      }, xH = {
        kind: "player",
        shownPlayerName: (0, BB.f)(SH, WH),
        onSubmit: (HH, BH) => {
          AH(), (0, rr.d)({
            playerId: zH,
            playerName: SH,
            chatMsgId: uH,
            policyId: HH,
            details: BH,
            onAccepted: Xr(SH, WH)
          })
        }
      };
      return (0, OH.d)("OpenReportMenu", (HH => {
        let {
          playerEId: BH,
          playerName: AH,
          kt: rH,
          serverChatMsgId: SH
        } = HH;
        XH(BH), tH(AH), YH(rH), QH(SH), LH()
      })), (0, EH.jsx)(hH.b, {
        show: BH,
        close: AH,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeReportComponent",
        children: (0, EH.jsx)("div", {
          className: "ReportPanel",
          children: BH && (0, EH.jsx)(Ar.b, {
            reported: null === zH ? MH : xH,
            chatMessage: GH,
            inGame: !0,
            onCancel: AH
          })
        })
      })
    }));
    var Yr = LH(37702),
      ur = LH(2980);
    const Qr = {
        playerGone: "report:reportKeyPlayerGone",
        rateLimited: "report:reportKeyRateLimited",
        timedOut: "report:reportKeyTimedOut"
      },
      Wr = (0, rH.memo)((function(HH) {
        var BH, LH;
        let {
          show: AH,
          onOpen: SH,
          onClose: tH
        } = HH;
        const {
          t: zH
        } = (0, sH.B)(), [XH, GH] = (0, rH.useState)(null), [uH, QH] = (0, rH.useState)(0);
        (0, OH.d)("OpenDiscordReportBox", (HH => {
          CH.gameBridge.send("requestDiscordReportKey", HH), GH(null), QH(0), SH()
        })), (0, OH.d)("setDiscordReportKey", GH);
        const WH = AH && null === XH;
        (0, rH.useEffect)((() => {
          if (!WH) return;
          const HH = setTimeout((() => {
            console.warn("No answer to a Discord report key request within 10000 ms"), GH({
              Hh: null,
              Bh: "timedOut"
            })
          }), 1e4);
          return () => {
            clearTimeout(HH)
          }
        }), [WH]);
        const MH = null !== (BH = null === XH || void 0 === XH ? void 0 : XH.Hh) && void 0 !== BH ? BH : null,
          xH = null !== (LH = null === XH || void 0 === XH ? void 0 : XH.Bh) && void 0 !== LH ? LH : null;
        return (0, EH.jsx)(hH.b, {
          show: AH,
          close: tH,
          padShowsHud: !0,
          togglePointerLock: !1,
          escDoesExit: !0,
          className: "ReportBackgroundScreen",
          globallyUniqueKey: "MakeDiscordReportComponent",
          children: (0, EH.jsx)("div", {
            className: "ReportPanel",
            children: (0, EH.jsxs)(tr.m, {
              className: "ReportKeyBox",
              title: "report:discordReportTitle",
              subtitle: null === xH ? "report:discordReportDescription" : void 0,
              confirm: null === xH ? {
                text: "report:openDiscord",
                onClick: () => {
                  window.open(Yr.d, "_blank", "noreferrer")
                },
                padMouseOnly: !0
              } : void 0,
              cancel: {
                text: null === xH ? "general:cancel" : "general:ok",
                onClick: tH
              },
              padStartsOn: "cancel",
              children: [null !== xH && (0, EH.jsx)(ur.e, {
                children: zH(Qr[xH])
              }), null === xH && (0, EH.jsxs)("div", {
                className: "ReportKeyRow",
                children: [(0, EH.jsx)("div", {
                  className: "ReportKeyInner",
                  children: null !== MH && void 0 !== MH ? MH : zH("report:loadingReportKey")
                }), (0, EH.jsx)(YH.i, {
                  className: "ReportKeyCopyButton",
                  onClick: () => {
                    navigator.clipboard.writeText(MH).catch((HH => {
                      console.error("Failed to copy report key:", HH)
                    })), QH(Date.now())
                  },
                  disabled: Date.now() - uH < 1e3 || !MH,
                  children: Date.now() - uH < 1e3 ? zH("general:copied") : zH("general:copy")
                })]
              })]
            })
          })
        })
      }));
    var Mr = LH(1241);
    const xr = {
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
      vr = (0, rH.memo)((function(HH) {
        let {
          show: BH,
          onOpen: LH,
          onClose: AH
        } = HH;
        const [SH, tH] = (0, rH.useState)(null), zH = (0, rH.useRef)(0), XH = (0, rH.useRef)(null), {
          t: GH
        } = (0, sH.B)();
        (0, OH.d)("EditCustomLobbyBlock", (HH => {
          let {
            pos: BH
          } = HH;
          tH(BH), null !== BH && LH(), XH.current.scrollTo(0, zH.current)
        }));
        const YH = HH => {
          CH.gameBridge.send("setCustomLobbyBlock", {
            pos: SH,
            blockName: HH
          }), AH()
        };
        return (0, EH.jsx)(hH.b, {
          className: "CustomLobbyBlockEditorOuter",
          close: AH,
          escDoesExit: !0,
          show: BH,
          togglePointerLock: !1,
          globallyUniqueKey: "CustomLobbyBlockEditor",
          children: (0, EH.jsx)("div", {
            className: "CustomLobbyBlockEditor",
            ref: XH,
            onScroll: () => {
              zH.current = XH.current.scrollTop
            },
            children: (0, EH.jsx)("div", {
              className: "CustomLobbyBlockGameContainer",
              children: Object.entries(xr).map((HH => {
                let [BH, LH] = HH;
                return (0, EH.jsxs)("div", {
                  className: "CustomLobbyBlockGame",
                  children: [(0, EH.jsx)("h2", {
                    className: "CustomLobbyBlockGameTitle",
                    children: GH(BH)
                  }), (0, EH.jsx)("div", {
                    className: "CustomLobbyBlockCategoryContainer",
                    children: Object.entries(LH).map((HH => {
                      let [BH, {
                        tooltip: LH,
                        blocks: AH
                      }] = HH;
                      return (0, EH.jsxs)("div", {
                        className: "CustomLobbyBlockCategory",
                        children: [(0, EH.jsxs)("h3", {
                          className: "CustomLobbyBlockCategoryTitle",
                          children: [GH(BH), (0, EH.jsx)(dH.e, {
                            hoverInfo: GH(LH),
                            className: "CustomLobbyBlockTooltip"
                          })]
                        }), (0, EH.jsx)("div", {
                          className: "CustonLobbyBlockContainer",
                          children: AH.map((HH => (0, EH.jsx)(Pr, {
                            blockName: HH,
                            selectBlock: YH
                          }, HH)))
                        })]
                      }, BH)
                    }))
                  })]
                }, BH)
              }))
            })
          })
        })
      })),
      Pr = (0, rH.memo)((function(HH) {
        var BH;
        let {
          blockName: LH,
          selectBlock: AH
        } = HH;
        const rH = (0, tA.e)(LH),
          SH = null !== (BH = void 0 === rH ? void 0 : (0, hA.displayNameOf)(rH)) && void 0 !== BH ? BH : LH,
          hH = void 0 === rH ? void 0 : (0, hA.descriptionOf)(rH);
        return (0, EH.jsx)(dH.g, {
          tooltipInner: (0, EH.jsxs)("div", {
            className: "CustomLobbyBlockNameTooltip",
            children: [(0, EH.jsx)("div", {
              className: "CustomLobbyBlockName",
              children: (0, EH.jsx)(VH.b, {
                text: SH
              })
            }), hH && (0, EH.jsx)("div", {
              className: "CustomLobbyBlockDescription",
              children: (0, EH.jsx)(VH.b, {
                text: hH
              })
            })]
          }),
          children: (0, EH.jsx)("div", {
            className: "CustomLobbyBlockButton",
            onClick: () => AH(LH),
            children: (0, EH.jsx)(SL.e, {
              itemName: LH,
              amount: 1
            })
          })
        }, LH)
      }));
    var Tr = LH(2800),
      Ur = LH(4608),
      Vr = LH(35016);

    function Or() {
      const HH = (0, kH.e)("itemInfo");
      return (0, rH.useMemo)((() => function(HH) {
        return {
          getDefaultItemStat(BH, LH) {
            var AH;
            const rH = HH[BH];
            return "description" === LH ? null === rH || void 0 === rH ? void 0 : rH.description : null !== (AH = null === rH || void 0 === rH ? void 0 : rH.displayName) && void 0 !== AH ? AH : BH
          }
        }
      }(HH)), [HH])
    }
    const br = (0, rH.memo)((function(HH) {
        var BH, LH, AH, SH, tH, zH, CH, XH, GH, YH, uH, QH, MH, xH, vH, PH, TH, UH, VH, bH, kH, mH, oH;
        let {
          togglePointerLock: IH,
          show: fH,
          onOpen: lH,
          onClose: KH
        } = HH;
        const {
          t: cH
        } = (0, sH.B)(), eH = Or(), qH = (0, rH.useRef)(null), gH = (0, rH.useRef)(Ur.e.MobHungerLevel.Hungry), NH = (0, rH.useRef)(null), RH = (0, Tr.e)(), jH = (0, rH.useRef)(null), nH = (0, rH.useRef)(null), FH = qH.current;
        (0, rH.useEffect)((() => {
          if (!fH) return;
          const HH = Vr.h.openPet(jH.current);
          return nH.current = HH, () => {
            HH.close(), nH.current = null
          }
        }), [fH]), (0, rH.useEffect)((() => {
          fH && FH && nH.current.show(function(HH) {
            var BH;
            let {
              mobType: LH,
              mobSettings: AH
            } = HH;
            return {
              mobType: LH,
              variation: null !== (BH = AH.variation) && void 0 !== BH ? BH : "default",
              metaInfo: AH.metaInfo,
              tamed: !(0, vA.M)(AH.ownerDbId)
            }
          }(FH))
        }), [fH, FH]), (0, rH.useEffect)((() => {
          const HH = () => {
            var HH;
            const BH = Ur.e.getMobHungerLevel(null === (HH = qH.current) || void 0 === HH ? void 0 : HH.mobSettings.petInfo.lastFedAt);
            if (BH !== gH.current && (gH.current = BH, RH()), NH.current) {
              var LH;
              const HH = Date.now(),
                BH = Ur.e.getNextStateAt(null === (LH = qH.current) || void 0 === LH ? void 0 : LH.mobSettings.petInfo.lastFedAt);
              let AH = Math.floor((BH - HH) / 1e3),
                rH = "";
              if (AH > 3600) {
                rH += Math.floor(AH / 60 / 60).toString().padStart(2, "0"), rH += ":", AH %= 3600
              }
              const SH = AH % 60;
              rH += Math.floor(AH / 60).toString().padStart(2, "0"), rH += ":", rH += SH.toString().padStart(2, "0"), NH.current.textContent = rH
            }
          };
          HH();
          const BH = setInterval(HH, 250);
          return () => {
            clearInterval(BH)
          }
        }), [FH, RH]), (0, OH.d)("showPetUi", (HH => {
          let {
            mobType: BH,
            mobSettings: LH
          } = HH;
          qH.current = {
            mobType: BH,
            mobSettings: LH
          }, fH || lH()
        }));
        const DH = null === (BH = qH.current) || void 0 === BH ? void 0 : BH.mobSettings.health,
          wH = null === (LH = qH.current) || void 0 === LH ? void 0 : LH.mobSettings.maxHealth,
          ZH = Ur.e.getFriendshipLevelInfo(null !== (AH = null === (SH = qH.current) || void 0 === SH ? void 0 : SH.mobSettings.petInfo.friendshipPoints) && void 0 !== AH ? AH : 0);
        return (0, EH.jsx)(hH.b, {
          className: "PetUIOuter",
          close: KH,
          escDoesExit: !0,
          show: fH,
          togglePointerLock: IH,
          forcePointerUnlock: fH,
          globallyUniqueKey: "PetUI",
          children: (0, EH.jsx)("div", {
            className: "PetUI",
            children: (0, EH.jsxs)("div", {
              className: "PetUIContainer",
              children: [(0, EH.jsxs)("div", {
                className: "PetUILeftSideContainer",
                children: [(0, EH.jsx)("div", {
                  className: "PetUITitle",
                  children: null !== (tH = null === (zH = qH.current) || void 0 === zH ? void 0 : zH.mobSettings.name) && void 0 !== tH ? tH : "Your Pet"
                }), (0, EH.jsx)("div", {
                  className: "PetUICanvasContainer",
                  ref: jH
                })]
              }), (0, EH.jsxs)("div", {
                className: "PetUIInformation",
                children: [!(0, vA.M)(null === (CH = qH.current) || void 0 === CH ? void 0 : CH.mobSettings.petInfo.friendshipPoints) && (0, EH.jsxs)("div", {
                  className: "PetUIFriendshipPoints",
                  children: [(0, EH.jsx)("div", {
                    className: "PetUIFriendshipPointsTitle",
                    children: cH("mobAiPlugin:friendshipTitle")
                  }), (0, EH.jsx)("div", {
                    className: "PetUIFriendshipHearts",
                    children: Ur.e.getIconsFromFriendshipPoints(null !== (XH = qH.current.mobSettings.petInfo.friendshipPoints) && void 0 !== XH ? XH : 0).map(((HH, BH) => (0, EH.jsx)("div", {
                      className: "PetUIFriendshipHeart",
                      children: (0, EH.jsx)(SL.e, {
                        itemName: HH,
                        amount: 1
                      })
                    }, BH)))
                  }), (0, EH.jsx)("div", {
                    className: "PetUIFriendshipBar",
                    children: (0, EH.jsxs)("div", {
                      className: "PetUIFriendshipBarBackground",
                      children: [(0, EH.jsx)("div", {
                        className: "PetUIFriendshipBarForeground",
                        style: {
                          transform: `scaleX(${ZH.totalPointsForNextLevel>0?Math.max(ZH.pointsIntoCurrentLevel/ZH.totalPointsForNextLevel,0):1})`,
                          transformOrigin: "left center"
                        }
                      }), (0, EH.jsx)("div", {
                        className: "PetUIFriendshipBarText",
                        children: Ur.e.getFriendshipBarText(ZH)
                      })]
                    })
                  })]
                }), (0, EH.jsxs)("div", {
                  className: "PetUIHungry",
                  children: [(0, EH.jsx)("div", {
                    className: "PetUIHungryTitle",
                    children: cH("mobAiPlugin:hungerTitle")
                  }), (0, EH.jsx)("div", {
                    className: "PetUIHungryCurrent",
                    children: Ur.e.hungerLevelIcons[gH.current].map(((HH, BH) => (0, EH.jsx)("div", {
                      className: "PetUIHungryIcon",
                      children: (0, EH.jsx)(SL.e, {
                        itemName: HH,
                        amount: 1
                      })
                    }, BH)))
                  }), (0, EH.jsxs)("div", {
                    className: "PetUIHungryLevel",
                    children: [cH(Ur.e.hungerLevelTranslations[gH.current].translationKey), gH.current !== Ur.e.MobHungerLevel.Starving && !(0, vA.M)(null === (GH = qH.current) || void 0 === GH ? void 0 : GH.mobSettings.petInfo.lastFedAt) && (0, EH.jsxs)("div", {
                      className: "PetUIHungryNext",
                      children: [cH("mobAiPlugin:nextFeedIn", {
                        state: cH(Ur.e.hungerLevelTranslations[gH.current + 1].translationKey)
                      }), ":", " ", (0, EH.jsx)("span", {
                        ref: NH
                      })]
                    })]
                  })]
                }), (0, EH.jsx)(dH.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, EH.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: cH("mobAiPlugin:healthTooltip")
                  }),
                  children: (0, EH.jsxs)("div", {
                    className: PL()("PetUIQuickStatsItem", {
                      Disabled: (0, vA.M)(DH) || (0, vA.M)(wH)
                    }),
                    children: [(0, EH.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, EH.jsx)(SL.e, {
                        itemName: "Health",
                        amount: 1
                      })
                    }), (0, EH.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (0, vA.M)(DH) || (0, vA.M)(wH) ? "" : (0, EH.jsxs)(EH.Fragment, {
                        children: [Math.ceil(DH), (0, EH.jsxs)("span", {
                          className: "PetUIQuickStatsValueMax",
                          children: ["/", Math.ceil(wH)]
                        })]
                      })
                    })]
                  })
                }), (0, EH.jsx)(dH.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, EH.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: cH("mobAiPlugin:attackDamageTooltip")
                  }),
                  children: (0, EH.jsxs)("div", {
                    className: PL()("PetUIQuickStatsItem", {
                      Disabled: (0, vA.M)(null === (YH = qH.current) || void 0 === YH ? void 0 : YH.mobSettings.attackDamage) || qH.current.mobSettings.attackDamage <= 0
                    }),
                    children: [(0, EH.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, EH.jsx)(SL.e, {
                        itemName: "Iron Sword",
                        amount: 1
                      })
                    }), (0, EH.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (uH = qH.current) || void 0 === uH ? void 0 : uH.mobSettings.attackDamage) || ""
                    })]
                  })
                }), (0, EH.jsx)(dH.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, EH.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: cH("mobAiPlugin:secondaryAttackDamageTooltip")
                  }),
                  children: (0, EH.jsxs)("div", {
                    className: PL()("PetUIQuickStatsItem", {
                      Disabled: (0, vA.M)(null === (QH = qH.current) || void 0 === QH ? void 0 : QH.mobSettings.secondaryAttackDamage) || qH.current.mobSettings.secondaryAttackDamage <= 0
                    }),
                    children: [(0, EH.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, EH.jsx)(SL.e, {
                        itemName: "Stone Crossbow",
                        amount: 1
                      })
                    }), (0, EH.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (MH = qH.current) || void 0 === MH ? void 0 : MH.mobSettings.secondaryAttackDamage) || ""
                    })]
                  })
                }), (0, EH.jsx)(dH.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, EH.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: cH("mobAiPlugin:speedTooltip")
                  }),
                  children: (0, EH.jsxs)("div", {
                    className: PL()("PetUIQuickStatsItem", {
                      Disabled: (0, vA.M)(null === (xH = qH.current) || void 0 === xH ? void 0 : xH.mobSettings.baseRunningSpeed)
                    }),
                    children: [(0, EH.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, EH.jsx)(SL.e, {
                        itemName: "Speed",
                        amount: 1
                      })
                    }), (0, EH.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: null !== (vH = null === (PH = qH.current) || void 0 === PH || null === (TH = PH.mobSettings.baseRunningSpeed) || void 0 === TH ? void 0 : TH.toFixed(2)) && void 0 !== vH ? vH : ""
                    })]
                  })
                }), (0, EH.jsx)(dH.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, EH.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: cH("mobAiPlugin:saddledTooltip")
                  }),
                  children: (0, EH.jsxs)("div", {
                    className: PL()("PetUIQuickStatsItem", {
                      Disabled: "Saddled" !== (null === (UH = qH.current) || void 0 === UH ? void 0 : UH.mobSettings.metaInfo)
                    }),
                    children: [(0, EH.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, EH.jsx)(SL.e, {
                        itemName: "Saddle",
                        amount: 1
                      })
                    }), (0, EH.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: "Saddled" === (null === (VH = qH.current) || void 0 === VH ? void 0 : VH.mobSettings.metaInfo) ? (0, EH.jsx)(WH.c, {
                        name: "check"
                      }) : ""
                    })]
                  })
                }), !(0, vA.M)(null === (bH = qH.current) || void 0 === bH ? void 0 : bH.mobSettings.tameInfo) && (0, EH.jsxs)(EH.Fragment, {
                  children: [(0, EH.jsxs)("div", {
                    className: "PetUIFood",
                    children: [(0, EH.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, EH.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, EH.jsx)(mr, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:superlikedFoodTitle"
                          },
                          description: null,
                          tintColor: Ur.e.feedTextColours[Ur.e.MobFoodType.Superliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, EH.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: (0, EH.jsx)("div", {
                          className: "PetUIFoodItem",
                          children: qH.current.mobSettings.petInfo.superlikedFoodKnown ? (0, EH.jsx)(kr, {
                            food: qH.current.mobSettings.petInfo.superlikedFood
                          }) : (0, EH.jsx)(mr, {
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
                    }), (0, EH.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, EH.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, EH.jsx)(mr, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:likedFoodTitle"
                          },
                          description: null,
                          tintColor: Ur.e.feedTextColours[Ur.e.MobFoodType.Liked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, EH.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (kH = qH.current.mobSettings.tameInfo.likedFoods) || void 0 === kH ? void 0 : kH.filter((HH => !qH.current.mobSettings.petInfo.superlikedFoodKnown || HH !== qH.current.mobSettings.petInfo.superlikedFood)).map((HH => (0, EH.jsx)(kr, {
                          food: HH
                        }, HH)))
                      })]
                    }), (0, EH.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, EH.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, EH.jsx)(mr, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:neutralFoodTitle"
                          },
                          description: null,
                          tintColor: Ur.e.feedTextColours[Ur.e.MobFoodType.Neutral],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, EH.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (mH = qH.current.mobSettings.tameInfo.neutralFoods) || void 0 === mH ? void 0 : mH.map((HH => (0, EH.jsx)(kr, {
                          food: HH
                        }, HH)))
                      })]
                    }), (0, EH.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, EH.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, EH.jsx)(mr, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:dislikedFoodTitle"
                          },
                          description: null,
                          tintColor: Ur.e.feedTextColours[Ur.e.MobFoodType.Disliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, EH.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (oH = qH.current.mobSettings.tameInfo.dislikedFoods) || void 0 === oH ? void 0 : oH.map((HH => (0, EH.jsx)(kr, {
                          food: HH
                        }, HH)))
                      })]
                    })]
                  }), qH.current.mobSettings.tameInfo.levelUpBonuses && (0, EH.jsx)("div", {
                    className: "PetUIFeedDrops",
                    children: Array.from({
                      length: Ur.e.MAX_LEVEL + 1
                    }).map(((HH, BH) => {
                      const LH = BH;
                      if (0 === LH) return null;
                      const AH = qH.current.mobSettings.tameInfo.levelUpBonuses[LH],
                        rH = Ur.e.getBonusDisplayInfo(eH, qH.current.mobSettings, qH.current.mobType, AH);
                      return (0, EH.jsxs)("div", {
                        className: PL()("PetUIFeedDropContainer", {
                          Selected: LH === Ur.e.getFriendshipLevelInfo(qH.current.mobSettings.petInfo.friendshipPoints).level
                        }),
                        children: [(0, EH.jsx)("div", {
                          className: "PetUIFeedDropHearts",
                          children: Array.from({
                            length: LH
                          }).map(((HH, BH) => (0, EH.jsx)("div", {
                            className: "PetUIFeedDropHeart",
                            children: (0, EH.jsx)(SL.e, {
                              itemName: "Friendship",
                              amount: 1
                            })
                          }, `${LH}-${BH}`)))
                        }), (0, EH.jsx)("div", {
                          className: "PetUIFeedDropItems",
                          children: rH && (0, EH.jsx)(mr, {
                            icon: rH.icon,
                            displayName: rH.displayName,
                            description: rH.description
                          })
                        })]
                      }, LH)
                    }))
                  })]
                })]
              })]
            })
          })
        })
      })),
      kr = (0, rH.memo)((function(HH) {
        let {
          food: BH,
          includeDescription: LH = !1
        } = HH;
        const AH = Or(),
          rH = AH.getDefaultItemStat(BH, "displayName"),
          SH = AH.getDefaultItemStat(BH, "description");
        return (0, EH.jsx)(mr, {
          icon: BH,
          displayName: rH,
          description: LH ? SH : null
        })
      })),
      mr = (0, rH.memo)((function(HH) {
        let {
          icon: BH,
          displayName: LH,
          description: AH,
          tintColor: rH,
          className: SH = "PetUIFoodItem"
        } = HH;
        return (0, EH.jsx)(dH.g, {
          delayHide: 0,
          delayShow: 0,
          tooltipInner: (0, EH.jsxs)("div", {
            className: "PetUIFoodItemTooltip",
            children: [(0, EH.jsx)("div", {
              className: "PetUIFoodItemName",
              children: (0, EH.jsx)(VH.b, {
                text: LH
              })
            }), AH && (0, EH.jsx)("div", {
              className: "PetUIFoodItemDescription",
              children: (0, EH.jsx)(VH.b, {
                text: AH
              })
            })]
          }),
          children: (0, EH.jsx)("div", {
            className: SH,
            children: (0, EH.jsx)(SL.e, {
              itemName: BH,
              amount: 1,
              tintColor: rH
            })
          })
        })
      }));
    var or = LH(4113),
      Ir = LH(1070),
      fr = LH(1182),
      lr = LH(2624),
      Kr = LH(37724),
      cr = LH(1005),
      er = LH(2530);

    function qr(HH) {
      let {
        peers: BH
      } = HH;
      const [LH, AH] = (0, rH.useState)(null), SH = (0, kH.e)("players");
      return (0, EH.jsx)("div", {
        className: "CodeEditorPresence",
        children: BH.map((HH => {
          var BH, rH;
          const hH = null !== (BH = null === (rH = SH.byId[HH.playerId]) || void 0 === rH ? void 0 : rH.cosmetics) && void 0 !== BH ? BH : {};
          return (0, EH.jsxs)("div", {
            className: PL()("PresenceIcon", {
              Viewer: !HH.isEditor
            }),
            style: {
              backgroundColor: HH.colour
            },
            onMouseEnter: () => {
              AH(HH.playerId)
            },
            onMouseLeave: () => {
              AH(null)
            },
            children: [(0, EH.jsx)(er.c, {
              cosmetics: hH
            }), LH === HH.playerId && (0, EH.jsx)("div", {
              className: "PresenceTooltip",
              style: {
                backgroundColor: HH.colour
              },
              children: HH.playerName
            })]
          }, HH.playerId)
        }))
      })
    }
    var gr = LH(648),
      Nr = LH(37708),
      Rr = LH(37431),
      jr = LH(37732);

    function nr(HH) {
      const BH = HH.split("/"),
        LH = [];
      for (let AH = 1; AH < BH.length; AH++) LH.push(BH.slice(0, AH).join("/"));
      return LH
    }

    function Fr(HH) {
      return HH.slice(HH.lastIndexOf("/") + 1)
    }
    var Dr = LH(37716);
    const wr = (0, rH.memo)((function(HH) {
      var BH;
      let {
        files: LH,
        activePath: AH,
        canEdit: SH,
        directoryLinked: hH,
        pluginNames: tH,
        activePluginName: zH,
        activePluginFile: CH,
        onSelect: XH,
        onSelectPlugin: GH,
        onCreate: uH,
        onRename: QH,
        onRenameFolder: MH,
        onDelete: xH,
        onToggleDirectorySync: vH,
        schematics: PH,
        onManageSchematic: TH
      } = HH;
      const {
        t: UH
      } = (0, sH.B)(), VH = null !== (BH = (0, Kr.d)(LH)) && void 0 !== BH ? BH : fr.g, OH = Object.keys(LH), [bH, kH] = (0, rH.useState)((() => new Set)), mH = function(HH, BH, LH) {
        const AH = {
          folders: new Map,
          files: []
        };
        for (const hH of HH) {
          if (hH === BH) continue;
          let HH = AH;
          for (const BH of nr(hH)) {
            let LH = HH.folders.get(BH);
            LH || (LH = {
              folders: new Map,
              files: []
            }, HH.folders.set(BH, LH)), HH = LH
          }
          HH.files.push(hH)
        }
        const rH = [];
        HH.includes(BH) && rH.push({
          kind: "file",
          path: BH,
          name: Fr(BH),
          depth: 0
        });
        const SH = (HH, BH) => {
          const AH = [...HH.folders.entries()].sort(((HH, BH) => {
            let [LH] = HH, [AH] = BH;
            return LH.localeCompare(AH)
          }));
          for (const [hH, tH] of AH) {
            const HH = LH.has(hH);
            rH.push({
              kind: "folder",
              path: hH,
              name: Fr(hH),
              depth: BH,
              collapsed: HH
            }), HH || SH(tH, BH + 1)
          }
          HH.files.sort(((HH, BH) => HH.localeCompare(BH)));
          for (const LH of HH.files) rH.push({
            kind: "file",
            path: LH,
            name: Fr(LH),
            depth: BH
          })
        };
        return SH(AH, 0), rH
      }(OH, VH, bH);
      (0, rH.useEffect)((() => {
        kH((HH => {
          const BH = new Set(HH);
          let LH = !1;
          for (const rH of nr(AH)) LH = BH.delete(rH) || LH;
          return LH ? BH : HH
        }))
      }), [AH]);
      const oH = OH.length >= nB.C,
        IH = (HH, BH) => {
          if (HH.length > lr.t) return `Path must be at most ${lr.t} characters`;
          if (!(0, lr.s)(HH)) return "Use a relative .js, .ts, or .d.ts path, e.g. lib/util.js";
          if ("index.d.ts" === HH) return "index.d.ts cannot be the world-code entry";
          const AH = !!BH && (0, Kr.f)(BH, HH);
          if (BH && (0, Kr.g)(BH) && !AH) return `Cannot rename ${BH} (only swapping ${fr.g} and ${fr.h} is allowed)`;
          if (HH in LH) return "A file with that path already exists";
          if ((0, Kr.g)(HH) && !AH) {
            if ((HH === fr.g ? fr.h : fr.g) in LH) return `World code cannot have both ${fr.g} and ${fr.h}`
          }
          return null
        },
        fH = HH => {
          Sr.NotificationProvider.showInputPopup({
            title: "codeEditor:newFile",
            subtitle: "codeEditor:newFilePathHint",
            placeholderText: "lib/util.js",
            initialValue: void 0 === HH ? void 0 : `${HH}/`,
            submitText: "general:create",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: `FileTreePathPopup ${Dr.c}`,
            validate: HH => IH(HH)
          }).getResult().then((HH => {
            "notificationTornDown" !== HH && null !== HH && "submit" === HH.type && uH(HH.value)
          }))
        },
        lH = HH => {
          Sr.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFile",
            subtitle: "codeEditor:newFilePathHint",
            initialValue: HH,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: `FileTreePathPopup ${Dr.c}`,
            validate: BH => BH === HH ? "That is already the file's path" : IH(BH, HH)
          }).getResult().then((BH => {
            "notificationTornDown" !== BH && null !== BH && "submit" === BH.type && QH(HH, BH.value)
          }))
        },
        KH = HH => {
          const BH = HH => HH.replace(/\/+$/, "");
          Sr.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFolder",
            subtitle: "codeEditor:renameFolderHint",
            initialValue: HH,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: `FileTreePathPopup ${Dr.c}`,
            validate: LH => {
              const AH = BH(LH);
              if (AH === HH) return "That is already the folder's path";
              for (const [BH, rH] of(0, Kr.i)(OH, HH, AH)) {
                const HH = IH(rH, BH);
                if (null !== HH) return HH
              }
              return null
            }
          }).getResult().then((LH => {
            "notificationTornDown" !== LH && null !== LH && "submit" === LH.type && MH(HH, BH(LH.value))
          }))
        },
        cH = HH => {
          Sr.NotificationProvider.showPromptPopup({
            title: "codeEditor:deleteFile",
            subtitle: "codeEditor:deleteFileConfirm",
            textOpts: {
              subtitle: {
                path: HH
              }
            },
            confirmText: "general:delete",
            destructive: !0,
            cancelText: "general:cancel",
            middleScreenPopupContainerClassName: Dr.c
          }).getResult().then((BH => {
            !0 === BH && xH(HH)
          }))
        };
      return (0, EH.jsxs)("div", {
        className: "CodeEditorFileTree",
        children: [(0, EH.jsxs)("div", {
          className: "FileTreeHeader",
          children: [(0, EH.jsx)("span", {
            children: "Files"
          }), SH && !oH && (0, EH.jsx)(YH.x, {
            className: "FileTreeHeaderButton",
            onClick: () => {
              fH()
            },
            children: (0, EH.jsx)(WH.c, {
              name: "plus"
            })
          })]
        }), (0, EH.jsxs)("div", {
          className: "FileTreeList",
          children: [mH.map((HH => {
            const BH = HH.path;
            if ("folder" === HH.kind) return (0, EH.jsx)(ar, {
              path: BH,
              name: HH.name,
              depth: HH.depth,
              collapsed: HH.collapsed,
              onToggle: () => {
                var HH;
                HH = BH, kH((BH => {
                  const LH = new Set(BH);
                  return LH.delete(HH) || LH.add(HH), LH
                }))
              },
              canCreate: SH && !oH,
              canRename: SH,
              onCreate: fH,
              onRename: KH
            }, `folder:${BH}`);
            const rH = (0, Kr.g)(BH),
              hH = fr.g in LH && fr.h in LH,
              tH = !rH || hH,
              CH = null === zH && BH === AH;
            return (0, EH.jsx)(Jr, {
              path: BH,
              label: HH.name,
              depth: HH.depth,
              isActive: CH,
              canRename: SH,
              onSelect: XH,
              onRename: lH,
              onDelete: cH,
              canDelete: tH && SH
            }, BH)
          })), (0, EH.jsxs)("div", {
            className: "FileTreeHeader Secondary",
            children: [(0, EH.jsxs)("span", {
              children: ["Schematics (", Object.keys(PH).length, "/", jr.d, ")"]
            }), SH && (0, EH.jsx)(YH.x, {
              className: "FileTreeHeaderButton",
              disabled: Object.keys(PH).length >= jr.d,
              onClick: () => {
                TH("")
              },
              children: (0, EH.jsx)(WH.c, {
                name: "plus"
              })
            })]
          }), Object.keys(PH).sort().map((HH => (0, EH.jsx)(Jr, {
            path: HH,
            isActive: !1,
            canRename: !1,
            canDelete: !1,
            onSelect: TH
          }, HH))), tH.length > 0 && (0, EH.jsxs)(EH.Fragment, {
            children: [(0, EH.jsx)("div", {
              className: "FileTreeHeader Secondary",
              children: (0, EH.jsx)("span", {
                children: "Plugins"
              })
            }), tH.map((HH => {
              var BH;
              const LH = Nr.g[HH],
                AH = Object.keys(null !== (BH = null === LH || void 0 === LH ? void 0 : LH.files) && void 0 !== BH ? BH : {
                  "index.ts": ""
                }).sort(((HH, BH) => "index.ts" === HH ? -1 : "index.ts" === BH ? 1 : HH.localeCompare(BH)));
              return (0, EH.jsxs)("div", {
                children: [(0, EH.jsx)("div", {
                  className: "FileTreePluginName",
                  children: (0, Kr.s)(HH)
                }), AH.map((BH => (0, EH.jsx)(Jr, {
                  path: BH,
                  nested: !0,
                  isActive: zH === HH && CH === BH,
                  canRename: !1,
                  onSelect: () => {
                    GH(HH, BH)
                  },
                  canDelete: !1
                }, BH)))]
              }, HH)
            }))]
          })]
        }), (0, EH.jsx)("div", {
          className: "FileTreeFooter",
          children: (0, EH.jsx)(YH.i, {
            className: "FileTreeFooterButton",
            onClick: vH,
            children: UH(hH ? "codeEditor:directorySyncUnlink" : "codeEditor:directorySyncLink")
          })
        })]
      })
    }));

    function Zr(HH) {
      return HH > 0 ? {
        className: "Indented",
        style: {
          "--tree-depth": HH
        }
      } : {
        className: void 0,
        style: void 0
      }
    }

    function dr(HH) {
      let {
        depth: BH
      } = HH;
      return (0, EH.jsx)(EH.Fragment, {
        children: Array.from({
          length: BH
        }, ((HH, BH) => (0, EH.jsx)("span", {
          className: "FileTreeIndentGuide",
          style: {
            "--guide-level": BH
          }
        }, BH)))
      })
    }

    function ar(HH) {
      let {
        path: BH,
        name: LH,
        depth: AH,
        collapsed: rH,
        onToggle: SH,
        canCreate: hH,
        canRename: tH,
        onCreate: zH,
        onRename: CH
      } = HH;
      const XH = [];
      hH && XH.push({
        icon: "plus",
        text: "codeEditor:newFile",
        onPointerDown: () => {
          zH(BH)
        }
      }), tH && XH.push({
        icon: "pen",
        text: "codeEditor:renameFolder",
        onPointerDown: () => {
          CH(BH)
        }
      });
      const GH = Zr(AH);
      return (0, EH.jsxs)("div", {
        className: PL()("FileTreeItem FileTreeFolder", GH.className),
        style: GH.style,
        children: [(0, EH.jsx)(dr, {
          depth: AH
        }), (0, EH.jsxs)("button", {
          type: "button",
          className: "FileTreeItemName",
          "aria-expanded": !rH,
          onClick: SH,
          children: [(0, EH.jsx)(WH.c, {
            className: "FileTreeFolderCaret",
            name: rH ? "caret-right" : "caret-down"
          }), (0, EH.jsx)(WH.c, {
            className: "FileTreeFolderIcon",
            name: rH ? "folder" : "folder-open"
          }), LH]
        }), (0, EH.jsx)(sr, {
          path: BH,
          actions: XH
        })]
      })
    }

    function sr(HH) {
      let {
        path: BH,
        actions: LH
      } = HH;
      const AH = (0, rH.useRef)(null);
      return 0 === LH.length ? null : (0, EH.jsxs)("div", {
        ref: AH,
        className: "FileTreeItemActions",
        children: [(0, EH.jsx)("button", {
          type: "button",
          className: "FileTreeActionMenuButton",
          "aria-label": `Actions for ${BH}`,
          children: (0, EH.jsx)(WH.c, {
            name: "ellipsis"
          })
        }), (0, EH.jsx)(Rr.b, {
          triggerElementRef: AH,
          options: LH
        })]
      })
    }

    function Jr(HH) {
      let {
        path: BH,
        label: LH = BH,
        depth: AH = 0,
        isActive: rH,
        canRename: SH,
        onSelect: hH,
        onRename: tH,
        onDelete: zH,
        canDelete: CH,
        nested: XH
      } = HH;
      const GH = [];
      SH && tH && GH.push({
        icon: "pen",
        text: "codeEditor:rename",
        onPointerDown: () => {
          tH(BH)
        }
      }), CH && zH && GH.push({
        icon: "xmark",
        text: "general:delete",
        onPointerDown: () => {
          zH(BH)
        }
      });
      const YH = Zr(AH);
      return (0, EH.jsxs)("div", {
        className: PL()("FileTreeItem", YH.className, {
          Active: rH,
          Nested: XH
        }),
        style: YH.style,
        children: [(0, EH.jsx)(dr, {
          depth: AH
        }), (0, EH.jsx)("button", {
          type: "button",
          className: "FileTreeItemName",
          title: LH === BH ? void 0 : BH,
          onClick: () => {
            hH(BH)
          },
          children: LH
        }), (0, EH.jsx)(sr, {
          path: BH,
          actions: GH
        })]
      })
    }
    async function ir(HH) {
      const BH = (0, Kr.d)(HH);
      if (!BH || "" === HH[BH].trim()) return [];
      const {
        collectImportedWorldCodePluginNames: AH
      } = await Promise.all([LH.e(608), LH.e(609)]).then((() => LH(44974)));
      return (0, Nr.e)(AH(HH))
    }
    var pr = LH(37734);

    function yr(HH, BH) {
      const LH = Object.keys(HH),
        AH = Object.keys(BH);
      if (LH.length !== AH.length) return !1;
      for (const rH of LH)
        if (!(rH in BH) || HH[rH] !== BH[rH]) return !1;
      return !0
    }

    function HS(HH, BH) {
      const LH = [],
        AH = [],
        rH = [];
      for (const SH of Object.keys(BH)) SH in HH ? HH[SH] !== BH[SH] && rH.push(SH) : LH.push(SH);
      for (const SH of Object.keys(HH)) SH in BH || AH.push(SH);
      return LH.sort(), AH.sort(), rH.sort(), {
        creates: LH,
        deletes: AH,
        updates: rH
      }
    }

    function BS(HH, BH) {
      var LH;
      const AH = {
          ...HH
        },
        rH = (0, Kr.d)(BH),
        SH = (0, Kr.d)(AH);
      if (fr.g in AH && fr.h in AH) {
        const HH = null !== rH && void 0 !== rH ? rH : fr.h,
          LH = HH === fr.g ? fr.h : fr.g;
        var hH;
        if (!(HH in AH)) AH[HH] = null !== (hH = BH[HH]) && void 0 !== hH ? hH : "";
        return delete AH[LH], AH
      }
      var tH;
      return rH && !(rH in AH) ? (SH || (AH[rH] = null !== (tH = BH[rH]) && void 0 !== tH ? tH : ""), AH) : (SH || rH || (AH[fr.g] = null !== (LH = AH[fr.g]) && void 0 !== LH ? LH : "", delete AH[fr.h]), AH)
    }

    function LS(HH, BH) {
      const LH = (0, Kr.d)(BH),
        AH = fr.g in BH && fr.h in BH;
      return HH.filter((HH => !(0, Kr.g)(HH) || (!!AH || LH !== HH)))
    }
    async function AS(HH, BH, AH) {
      const rH = HH.getLobbyFiles(),
        SH = (0, nB.l)(AH, (0, Kr.k)(rH, BH)),
        hH = await HH.ensureJoined(BH),
        tH = (0, lr.u)(hH.docKey);
      if (hH.doc === SH) return;
      for (let LH = 0; LH < 100; LH++) {
        const LH = HH.getCollabSnapshot();
        if (LH && (0, lr.u)(LH.docKey) === tH && HH.getActivePath() === BH) {
          if (HH.replaceActiveDoc(tH, SH)) return;
          await (0, vA.Q)(40)
        } else await (0, vA.Q)(40)
      }
      const {
        ChangeSet: zH
      } = await LH.e(604).then((() => LH(44818))), EH = HH.getCollabSnapshot(), XH = EH && (0, lr.u)(EH.docKey) === tH ? EH : hH;
      await async function(HH, BH, LH, AH) {
        const rH = HH.of({
            from: 0,
            to: LH.length,
            insert: AH
          }, LH.length),
          SH = JSON.stringify([{
            clientID: BH.clientID,
            changes: rH.toJSON()
          }]),
          hH = (0, lr.u)(BH.docKey);
        SH.length <= lr.k ? CH.gameBridge.send("sendCodeCollab", {
          dB: lr.e.Push,
          aB: hH,
          sB: BH.version,
          pB: SH
        }) : await (0, Ir.postJsonWithMetricsCookiesAndJsonResponse)(`${BH.httpConfig.gsUrl}/code/collab-push`, or.s["collab-push"].toBuffer({
          gameNameWithVariation: BH.httpConfig.gameNameWithVariation,
          lobbyName: BH.httpConfig.lobbyName,
          docKey: hH,
          version: BH.version,
          updates: SH
        }), {
          retries: 0
        })
      }(zH, XH, XH.doc, SH)
    }
    class rS {
      constructor(HH) {
        this.handle = null, this.lastSynced = {}, this.lastLobbySeen = null, this.pendingDocText = new Map, this.flushingDocText = !1, this.recheckingDisk = !1, this.stopWatch = null, this.lobbyPollTimer = null, this.running = !1, this.applying = !1, this.reconcileSettled = !1, this.reconcileInFlight = !1, this.linked = !1, this.scaffoldedPluginNamesKey = null, this.scaffoldingLocalTypes = Promise.resolve(), this.bridge = void 0, this.bridge = HH
      }
      async writeLobbyFiles(HH) {
        const BH = {
            ...this.bridge.getLobbyFiles()
          },
          LH = {
            ...BH
          };
        for (const {
            path: SH,
            text: hH
          }
          of HH) LH[SH] = hH;
        if (!HH.every((HH => {
            let {
              path: BH,
              text: AH
            } = HH;
            return (0, nB.l)(AH, (0, Kr.k)(LH, BH)) === AH
          }))) return !1;
        const AH = [];
        try {
          for (const {
              path: BH,
              text: LH
            }
            of HH) AH.push(BH), BH in this.bridge.getLobbyFiles() || (this.bridge.createFile(BH, {
            focus: !1
          }), await this.bridge.waitForLobbyPath(BH, !0)), await AS(this.bridge, BH, LH)
        } catch (rH) {
          for (const HH of AH) HH in BH ? await AS(this.bridge, HH, BH[HH]).catch((BH => {
            console.error("World Code AI: couldn't put back", HH, BH)
          })) : this.bridge.deleteFile(HH);
          throw rH
        }
        return !0
      }
      isLinked() {
        return this.linked
      }
      async linkFolder() {
        if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), !1;
        const HH = await (0, pr.r)(this.bridge.getStorageKey());
        return !!HH && (this.handle = HH, this.linked = !0, this.reconcileSettled = !1, await this.scaffoldLocalTypes(HH), !0)
      }
      async unlinkFolder() {
        const HH = this.bridge.getStorageKey();
        this.pendingDocText.clear(), this.stopContinuousSync(), this.handle = null, this.linked = !1, this.reconcileSettled = !1, this.lastSynced = {}, this.lastLobbySeen = null, this.scaffoldedPluginNamesKey = null, await (0, pr.d)(HH), this.bridge.onUnlinked()
      }
      async tryRestoreHandle() {
        const HH = this.bridge.getStorageKey(),
          BH = await (0, pr.q)(HH);
        return !!BH && (!!await (0, pr.j)(BH, "readwrite") && (this.handle = BH, this.linked = !0, await (0, pr.B)(HH, BH), await this.scaffoldLocalTypes(BH), !0))
      }
      scaffoldLocalTypes(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bridge.getLobbyFiles();
        return this.scaffoldingLocalTypes = this.scaffoldingLocalTypes.then((async () => {
          try {
            const AH = (await ir(BH)).map((HH => Nr.g[HH])),
              rH = AH.map((HH => {
                var BH;
                return `${HH.name}:${Object.keys(null!==(BH=null===HH||void 0===HH?void 0:HH.files)&&void 0!==BH?BH:{}).sort().join(",")}`
              })).join("\0");
            if (this.scaffoldedPluginNamesKey === rH) return;
            const {
              ensureLocalBloxdTypes: SH
            } = await Promise.all([LH.e(98), LH.e(606), LH.e(611)]).then((() => LH(44977)));
            await SH(HH, AH), this.scaffoldedPluginNamesKey = rH
          } catch (AH) {
            console.error("[WorldCodeDirectorySync] Failed to scaffold local @bloxd types", AH)
          }
        })), this.scaffoldingLocalTypes
      }
      async startWhenReady() {
        this.linked && this.handle && !this.running && !this.reconcileInFlight && this.bridge.getCollabSnapshot() && (this.reconcileSettled ? this.beginWatch() : await this.runInitialReconcileAndSync())
      }
      stopContinuousSync() {
        this.flushDocTextToDisk(), this.running = !1, this.stopWatch && (this.stopWatch(), this.stopWatch = null), this.lobbyPollTimer && (clearInterval(this.lobbyPollTimer), this.lobbyPollTimer = null)
      }
      async onLobbyFilesChanged(HH) {
        this.handle && await this.scaffoldLocalTypes(this.handle, HH), this.running && this.handle && !this.applying && await this.applyRemoteTreeToDisk(HH)
      }
      async onDocTextChanged(HH, BH) {
        if (!this.handle) return;
        const LH = [this.scaffoldLocalTypes(this.handle, {
          ...this.bridge.getLobbyFiles(),
          [HH]: BH
        })];
        this.running && (this.pendingDocText.set(HH, BH), LH.push(this.flushDocTextToDisk())), await Promise.all(LH)
      }
      async flushDocTextToDisk() {
        if (this.flushingDocText || this.applying || !this.handle || 0 === this.pendingDocText.size) return;
        const HH = this.handle;
        this.flushingDocText = !0, this.applying = !0;
        try {
          for (; this.pendingDocText.size > 0;) {
            const BH = [...this.pendingDocText];
            this.pendingDocText.clear();
            for (const [LH, AH] of BH) this.lastSynced[LH] !== AH && (await (0, pr.G)(HH, LH, AH), this.lastSynced = {
              ...this.lastSynced,
              [LH]: AH
            })
          }
        } catch (BH) {
          console.error("[WorldCodeDirectorySync] Failed to write remote doc to disk", BH), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
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
            await this.onDiskFilesChanged(await (0, pr.s)(this.handle))
          } catch (HH) {
            console.error("[WorldCodeDirectorySync] Failed to re-check disk after sync", HH)
          } finally {
            this.recheckingDisk = !1
          }
        }
      }
      async runInitialReconcileAndSync() {
        if (this.handle && !this.reconcileInFlight) {
          this.reconcileInFlight = !0;
          try {
            if (!await (0, pr.j)(this.handle, "readwrite")) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncPermissionDenied"), "warning"), void(this.reconcileSettled = !0);
            await this.bridge.pullLobbyFiles();
            const BH = this.bridge.getLobbyFiles(),
              LH = await (0, pr.s)(this.handle);
            for (const HH of Object.keys(BH).filter(jr.c)) {
              if (LH[HH] === pr.m) return void this.bridge.setMessage(`Move ${HH} outside the linked folder before syncing its placeholder.`, "warning");
              LH[HH] = jr.m
            }
            if (yr(LH, BH)) {
              for (const HH of Object.keys(BH).filter(jr.c)) await (0, pr.G)(this.handle, HH, jr.m);
              return this.lastSynced = {
                ...LH
              }, void this.beginWatch()
            }
            const AH = await this.promptReconcile(function(HH) {
              return null !== (0, Kr.d)(HH)
            }(LH));
            if ("unlink" === AH) return void await this.unlinkFolder();
            if ("dismissed" === AH) return void(this.reconcileSettled = !0);
            this.applying = !0;
            try {
              if ("local" === AH) {
                if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), void(this.reconcileSettled = !0);
                await this.applyLocalTreeToLobby(LH);
                for (const HH of Object.keys(BH).filter(jr.c)) await (0, pr.G)(this.handle, HH, jr.m);
                this.lastSynced = {
                  ...await (0, pr.s)(this.handle)
                }
              } else await (0, pr.K)(this.handle, BH), this.lastSynced = {
                ...BH
              }
            } catch (HH) {
              return console.error("[WorldCodeDirectorySync] Reconcile failed", HH), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning"), void(this.reconcileSettled = !0)
            } finally {
              this.applying = !1, this.settleAfterApplying()
            }
            this.beginWatch()
          } finally {
            this.reconcileInFlight = !1
          }
        }
      }
      async promptReconcile(HH) {
        return await new Promise((BH => {
          const LH = [{
              choice: "local",
              Button: YH.i,
              labelKey: "directorySyncUseLocal",
              descriptionKey: "directorySyncUseLocalDescription"
            }, {
              choice: "live",
              Button: YH.i,
              labelKey: "directorySyncUseLive",
              descriptionKey: "directorySyncUseLiveDescription"
            }, {
              choice: "unlink",
              Button: YH.i,
              labelKey: "directorySyncUseUnlink",
              descriptionKey: "directorySyncUseUnlinkDescription"
            }],
            AH = (0, EH.jsxs)("div", {
              className: "CodeEditorDirectorySyncPrompt",
              children: [(0, EH.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptTitle",
                children: this.bridge.t("codeEditor:directorySyncDifferTitle")
              }), (0, EH.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptBody",
                children: HH ? this.bridge.t("codeEditor:directorySyncDifferBody") : this.bridge.t("codeEditor:directorySyncLocalInvalidEntry")
              }), (0, EH.jsx)("div", {
                className: "CodeEditorDirectorySyncOptions",
                children: LH.filter((BH => "local" !== BH.choice || HH)).map((HH => {
                  let {
                    choice: LH,
                    Button: AH,
                    labelKey: SH,
                    descriptionKey: hH
                  } = HH;
                  return (0, EH.jsxs)("div", {
                    className: "CodeEditorDirectorySyncOption",
                    children: [(0, EH.jsx)(AH, {
                      className: "CodeEditorButton",
                      onClick: () => {
                        (HH => {
                          rH.tearDownNotification(), BH(HH)
                        })(LH)
                      },
                      children: this.bridge.t(`codeEditor:${SH}`)
                    }), (0, EH.jsx)("div", {
                      className: "CodeEditorDirectorySyncOptionDescription",
                      children: this.bridge.t(`codeEditor:${hH}`)
                    })]
                  }, LH)
                }))
              })]
            }),
            rH = Sr.NotificationProvider.showCustomPopup({
              body: AH,
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "worldCodeDirectorySync",
              middleScreenPopupContainerClassName: Dr.c
            });
          rH.getResult().then((HH => {
            "notificationTornDown" === HH && BH("dismissed")
          }))
        }))
      }
      beginWatch() {
        this.handle && (this.stopContinuousSync(), this.reconcileSettled = !0, this.running = !0, this.stopWatch = (0, pr.C)(this.handle, (HH => {
          this.onDiskFilesChanged(HH)
        })), this.lobbyPollTimer = setInterval((() => {
          this.pollRemoteLobbyFiles()
        }), 2e3))
      }
      async pollRemoteLobbyFiles() {
        if (this.running && !this.applying) try {
          await this.bridge.pullLobbyFiles()
        } catch (HH) {
          console.error("[WorldCodeDirectorySync] Lobby poll failed", HH)
        }
      }
      async onDiskFilesChanged(HH) {
        if (!this.running || !this.handle || this.applying) return;
        if (!this.bridge.canEditCode()) return;
        const BH = this.bridge.getLobbyFiles();
        let LH = BS(HH, this.lastSynced);
        for (const SH in BH)
          if ((0, jr.c)(SH) && LH[SH] === pr.m) return void this.bridge.setMessage("Move binary schematic files outside the linked folder. Add them through the Code Editor.", "warning");
        const AH = Object.keys(LH).filter((HH => (0, jr.c)(HH) && !(HH in BH)));
        AH.length > 0 && this.bridge.setMessage("Add or rename schematics in the Code Editor. Unknown local schematic files are not uploaded.", "warning");
        for (const SH of Object.keys(BH).filter(jr.c))(SH in LH || AH.length > 0 || !(SH in this.lastSynced)) && (LH[SH] = jr.m);
        if (!yr(LH, HH)) {
          this.applying = !0;
          try {
            await this.persistEntryRepair(HH, LH), LH = BS(await (0, pr.s)(this.handle), this.lastSynced)
          } finally {
            this.applying = !1
          }
        }
        if (!yr(LH, this.lastSynced)) {
          this.applying = !0;
          try {
            const HH = HS(this.lastSynced, LH);
            if (await this.pushDiskDeltaToLobby(LH, BH), null !== this.lastLobbySeen)
              for (const LH of [...HH.creates, ...HH.updates, ...HH.deletes])(0, jr.c)(LH) || (LH in BH ? this.lastLobbySeen[LH] = BH[LH] : delete this.lastLobbySeen[LH]);
            this.lastSynced = {
              ...LH
            }
          } catch (rH) {
            console.error("[WorldCodeDirectorySync] Disk\u2192lobby sync failed", rH), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async persistEntryRepair(HH, BH) {
        if (this.handle) {
          for (const LH of Object.keys(HH)) LH in BH || await (0, pr.t)(this.handle, LH);
          for (const [LH, AH] of Object.entries(BH)) HH[LH] !== AH && await (0, pr.G)(this.handle, LH, AH)
        }
      }
      async applyRemoteTreeToDisk(HH) {
        if (!this.handle) return;
        const BH = this.lastLobbySeen;
        if (null === BH) return void(this.lastLobbySeen = {
          ...HH
        });
        const LH = Object.keys(HH).filter((LH => BH[LH] !== HH[LH])),
          AH = Object.keys(BH).filter((BH => !(BH in HH)));
        if (0 !== LH.length || 0 !== AH.length) {
          this.applying = !0;
          try {
            for (const BH of [...AH, ...LH]) try {
              if (BH in HH) await (0, pr.G)(this.handle, BH, HH[BH]), this.lastSynced = {
                ...this.lastSynced,
                [BH]: HH[BH]
              }, this.lastLobbySeen = {
                ...this.lastLobbySeen,
                [BH]: HH[BH]
              };
              else {
                await (0, pr.t)(this.handle, BH);
                const HH = {
                  ...this.lastSynced
                };
                delete HH[BH], this.lastSynced = HH;
                const LH = {
                  ...this.lastLobbySeen
                };
                delete LH[BH], this.lastLobbySeen = LH
              }
            } catch (rH) {
              console.error("[WorldCodeDirectorySync] Lobby\u2192disk sync failed", rH), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
            }
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async renameLobbyEntryIfSwitched(HH, BH) {
        const LH = function(HH, BH) {
          const LH = (0, Kr.d)(HH),
            AH = (0, Kr.d)(BH);
          return LH && AH && LH !== AH ? {
            from: LH,
            to: AH
          } : null
        }(HH, BH);
        return !!LH && (this.bridge.renameFile(LH.from, LH.to), await this.bridge.waitForLobbyPath(LH.to, !0), !0)
      }
      async applyLocalTreeToLobby(HH) {
        var BH;
        const LH = this.bridge.getActivePath();
        await this.renameLobbyEntryIfSwitched(this.bridge.getLobbyFiles(), HH);
        const AH = this.bridge.getLobbyFiles(),
          rH = HS(AH, HH),
          SH = LS(rH.deletes, AH);
        for (const CH of rH.creates)(0, jr.c)(CH) || (this.bridge.createFile(CH, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(CH, !0));
        for (const CH of SH)(0, jr.c)(CH) || (this.bridge.deleteFile(CH), await this.bridge.waitForLobbyPath(CH, !1));
        if (!(0, Kr.d)(this.bridge.getLobbyFiles()) && !(0, Kr.d)(HH)) {
          if (this.bridge.createFile(fr.g, {
              focus: !1
            }), await this.bridge.waitForLobbyPath(fr.g, !0), !this.handle) return;
          await (0, pr.G)(this.handle, fr.g, ""), HH = {
            ...HH,
            [fr.g]: ""
          }
        }
        const hH = this.bridge.getLobbyFiles();
        for (const CH of Object.keys(HH))(0, jr.c)(CH) || hH[CH] !== HH[CH] && await AS(this.bridge, CH, HH[CH]);
        const tH = this.bridge.getLobbyFiles(),
          zH = LH in tH ? LH : null !== (BH = (0, Kr.d)(tH)) && void 0 !== BH ? BH : fr.g;
        await this.bridge.ensureJoined(zH)
      }
      async pushDiskDeltaToLobby(HH, BH) {
        const LH = this.bridge.getActivePath(),
          AH = await this.renameLobbyEntryIfSwitched(BH, HH) ? this.bridge.getLobbyFiles() : BH,
          rH = HS(this.lastSynced, HH),
          SH = LS(rH.deletes, AH).filter((HH => HH in AH));
        for (const hH of rH.creates)(0, jr.c)(hH) || (hH in this.bridge.getLobbyFiles() || (this.bridge.createFile(hH, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(hH, !0)), await AS(this.bridge, hH, HH[hH]));
        for (const hH of SH)(0, jr.c)(hH) ? await this.bridge.deleteSchematic(hH) : (this.bridge.deleteFile(hH), await this.bridge.waitForLobbyPath(hH, !1));
        for (const hH of rH.updates)(0, jr.c)(hH) || await AS(this.bridge, hH, HH[hH]);
        LH in this.bridge.getLobbyFiles() && this.bridge.getActivePath() !== LH && await this.bridge.ensureJoined(LH)
      }
    }
    var SS = LH(1131);

    function hS() {
      const {
        websocketUrl: HH,
        gameNameWithVariation: BH,
        lobbyName: LH
      } = CH.gameBridge.latest("connectedGame");
      return {
        gsUrl: SS.clientSideServerUrls.getHttpUrlFromWebSocketUrl(HH),
        gameNameWithVariation: BH,
        lobbyName: LH
      }
    }
    async function tS(HH) {
      const {
        gsUrl: BH,
        gameNameWithVariation: LH,
        lobbyName: AH
      } = hS();
      return await (0, Ir.postBinaryWithMetricsCookiesAndCustomResponse)(`${BH}/code/schematics`, or.ak.schematics.toBuffer({
        gameNameWithVariation: LH,
        lobbyName: AH,
        request: JSON.stringify(HH)
      }), {
        retries: 0
      }, Ir.HttpPayloadType.json)
    }
    var zS = LH(37215);

    function CS(HH) {
      let {
        path: BH,
        revision: LH
      } = HH;
      const [AH, SH] = (0, rH.useState)(""), [hH, tH] = (0, rH.useState)(!1), [zH, CH] = (0, rH.useState)(0);
      return (0, rH.useEffect)((() => {
        let HH = !1;
        return SH(""), tH(!1), tS({
          action: "preview",
          path: BH
        }).then((BH => {
          HH || SH(`data:image/webp;base64,${BH.previewBase64}`)
        })).catch((BH => {
          console.error("Could not load schematic preview", BH), HH || tH(!0)
        })), () => {
          HH = !0
        }
      }), [BH, LH, zH]), (0, EH.jsxs)("div", {
        className: "SchematicPreview",
        children: [AH && (0, EH.jsx)("img", {
          src: AH,
          alt: `Preview of ${BH}`
        }), !AH && !hH && (0, EH.jsx)(mH.d, {
          loaderType: "Secondary"
        }), hH && (0, EH.jsxs)(EH.Fragment, {
          children: [(0, EH.jsx)("div", {
            className: "SmallTextLight",
            role: "status",
            children: "Preview unavailable."
          }), (0, EH.jsx)(YH.i, {
            onClick: () => {
              CH(zH + 1)
            },
            children: "Retry preview"
          })]
        })]
      })
    }
    var ES = LH(3484);

    function XS(HH) {
      var BH;
      let {
        initialPath: LH,
        onChanged: AH,
        onClose: SH
      } = HH;
      const hH = "" === LH,
        [tH, zH] = (0, rH.useState)(null),
        [CH, XH] = (0, rH.useState)(LH),
        [GH, uH] = (0, rH.useState)(!1),
        [QH, WH] = (0, rH.useState)(!1),
        [MH, xH] = (0, rH.useState)(null),
        [vH, PH] = (0, rH.useState)(!1),
        [TH, UH] = (0, rH.useState)(""),
        VH = (0, rH.useRef)(null),
        OH = (0, rH.useRef)(!1),
        bH = (0, rH.useRef)(!0);
      (0, rH.useEffect)((() => (bH.current = !0, tS({
        action: "state"
      }).then((HH => {
        bH.current && zH(HH)
      })).catch((HH => {
        console.error("Could not load schematic assets", HH), bH.current && UH("Could not load schematics. Reopen this panel to retry.")
      })), () => {
        bH.current = !1
      })), []);
      const kH = null === tH || void 0 === tH ? void 0 : tH.assets[LH],
        mH = Object.keys(null !== (BH = null === tH || void 0 === tH ? void 0 : tH.assets) && void 0 !== BH ? BH : {}).length,
        oH = CH.trim(),
        IH = oH ? (0, jr.c)(oH) ? null !== tH && void 0 !== tH && tH.assets[oH] && (hH || oH !== LH) ? "A schematic already uses that path." : "" : "Use a relative path ending in .bloxdschem." : "",
        fH = !!oH && !IH && (hH ? mH < jr.d : oH !== LH),
        lH = vH || !tH;
      async function KH(HH) {
        if (!OH.current && bH.current) {
          OH.current = !0, PH(!0), UH("");
          try {
            const BH = await tS({
              ...HH,
              expectedRevision: tH.revision
            });
            AH(BH), bH.current && SH()
          } catch (LH) {
            var BH;
            if (console.error("Schematic asset operation failed", LH), bH.current) UH(LH instanceof wH.e ? null !== (BH = LH.errorMessageForUser) && void 0 !== BH ? BH : LH.message : String(LH));
            try {
              const HH = await tS({
                action: "state"
              });
              AH(HH), bH.current && zH(HH)
            } catch (rH) {
              console.error("Could not refresh schematic assets", rH)
            }
          } finally {
            OH.current = !1, bH.current && PH(!1)
          }
        }
      }
      return (0, EH.jsxs)("div", {
        className: "WorldCodeSchematicPanel InputGenericPopup PromptGenericPopup FileTreePathPopup",
        children: [(0, EH.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: hH ? "New schematic" : GH ? "Rename schematic" : "Schematic"
        }), TH && (0, EH.jsx)("div", {
          className: "InputGenericPopupError SmallTextLight",
          role: "alert",
          children: TH
        }), !tH && !TH && (0, EH.jsx)("div", {
          className: "SmallTextLight",
          children: "Loading schematic\u2026"
        }), (0, EH.jsxs)("fieldset", {
          disabled: lH,
          children: [hH || GH ? (0, EH.jsxs)("label", {
            className: "SchematicField",
            children: [(0, EH.jsx)("span", {
              className: "SmallTextBold",
              children: "Project path"
            }), (0, EH.jsx)("div", {
              className: "InputGenericPopupInputRow",
              children: (0, EH.jsx)(eL.e, {
                className: "InputGenericPopupInput",
                defaultValue: LH,
                placeholderText: "maps/arena.bloxdschem",
                maxLength: 64,
                onValueChange: XH
              }, GH ? "rename" : "create")
            })]
          }) : (0, EH.jsx)("div", {
            className: "SchematicPath SmallTextBold",
            children: LH
          }), (hH || GH) && IH && (0, EH.jsx)("div", {
            className: "InputGenericPopupError SmallTextLight",
            role: "alert",
            children: IH
          }), hH ? (0, EH.jsxs)(EH.Fragment, {
            children: [mH >= jr.d && (0, EH.jsxs)("div", {
              className: "SmallTextLight",
              children: ["Delete a schematic before adding another (", jr.d, " maximum)."]
            }), QH ? (0, EH.jsxs)(EH.Fragment, {
              children: [(0, EH.jsx)("div", {
                className: "SmallTextBold",
                children: "Choose from profile"
              }), (0, EH.jsx)("div", {
                className: "SchematicProfilePicker",
                "aria-disabled": lH || !fH,
                children: (0, EH.jsx)(zS.b, {
                  loading: null === MH,
                  schematics: null !== MH && void 0 !== MH ? MH : [],
                  disableAutoExport: !0,
                  onSchematicPicked: HH => {
                    !lH && fH && KH({
                      action: "profile",
                      path: oH,
                      schematicId: HH.schematicId
                    })
                  }
                })
              }), (0, EH.jsx)("div", {
                className: "InputGenericPopupButtons",
                children: (0, EH.jsx)(YH.i, {
                  className: "InputGenericPopupButton",
                  disabled: lH,
                  onClick: () => {
                    WH(!1)
                  },
                  children: "Back"
                })
              })]
            }) : (0, EH.jsxs)("div", {
              className: "InputGenericPopupButtons",
              children: [(0, EH.jsx)(YH.i, {
                className: "InputGenericPopupButton",
                disabled: lH || !fH,
                onClick: () => {
                  (0, ES.g)(VH.current)
                },
                children: "Upload Schematic"
              }), (0, EH.jsx)(YH.i, {
                className: "InputGenericPopupButton",
                disabled: lH || !fH,
                onClick: () => {
                  !async function() {
                    if (WH(!0), UH(""), !MH) try {
                      const HH = await (0, Ir.postJsonWithMetricsCookiesAndJsonResponse)(`${SS.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
                        retries: 0,
                        minTimeout: 3e3
                      });
                      bH.current && xH(HH)
                    } catch (HH) {
                      console.error("Could not load profile schematics", HH), bH.current && (WH(!1), UH("Could not load your schematics. Try again."))
                    }
                  }()
                },
                children: "Choose from profile"
              })]
            }), (0, EH.jsx)("input", {
              ref: VH,
              type: "file",
              accept: ".bloxdschem",
              hidden: !0,
              onChange: HH => {
                var BH;
                const LH = null === (BH = HH.target.files) || void 0 === BH ? void 0 : BH[0];
                if (HH.target.value = "", !LH) return;
                if (LH.size > jr.h) return void UH("The schematic file is too large.");
                const AH = oH;
                PH(!0);
                const rH = new FileReader;
                rH.onload = () => {
                  KH({
                    action: "upload",
                    path: AH,
                    base64: String(rH.result).split(",")[1]
                  })
                }, rH.onerror = () => {
                  console.error("Could not read schematic file", rH.error), bH.current && (PH(!1), UH("Could not read the selected file."))
                }, rH.readAsDataURL(LH)
              }
            })]
          }) : kH ? (0, EH.jsxs)(EH.Fragment, {
            children: [!GH && (0, EH.jsx)(CS, {
              path: LH,
              revision: tH.revision
            }), !GH && (0, EH.jsxs)("p", {
              className: "SchematicDetails SmallTextLight",
              children: [Math.ceil(kH.byteSize / 1024), " KB \xb7 ", kH.dimensions.join(" \xd7 "), " blocks"]
            }), (0, EH.jsx)("div", {
              className: "InputGenericPopupButtons",
              children: GH ? (0, EH.jsxs)(EH.Fragment, {
                children: [(0, EH.jsx)(YH.i, {
                  className: "InputGenericPopupButton",
                  disabled: lH || !fH,
                  onClick: () => {
                    KH({
                      action: "rename",
                      path: LH,
                      newPath: oH
                    })
                  },
                  children: "Rename"
                }), (0, EH.jsx)(YH.i, {
                  className: "InputGenericPopupButton",
                  disabled: lH,
                  onClick: () => {
                    uH(!1), XH(LH)
                  },
                  children: "Cancel"
                })]
              }) : (0, EH.jsxs)(EH.Fragment, {
                children: [(0, EH.jsx)(YH.i, {
                  className: "InputGenericPopupButton",
                  disabled: lH,
                  onClick: () => {
                    uH(!0)
                  },
                  children: "Rename"
                }), (0, EH.jsx)(YH.O, {
                  className: "InputGenericPopupButton",
                  disabled: lH,
                  onClick: () => {
                    KH({
                      action: "remove",
                      path: LH
                    })
                  },
                  children: "Delete"
                })]
              })
            })]
          }) : tH && (0, EH.jsx)("div", {
            className: "SmallTextLight",
            children: "This schematic is no longer in the project."
          })]
        })]
      })
    }

    function GS(HH) {
      if ("string" !== typeof HH) return null;
      try {
        const BH = JSON.parse(HH);
        return (0, Kr.h)(null === BH || void 0 === BH ? void 0 : BH.worldCodeEngine) && "boolean" === typeof BH.engineLocked && function(HH) {
          if (null === HH) return !0;
          const BH = null === HH || void 0 === HH ? void 0 : HH.location;
          return "string" === typeof(null === HH || void 0 === HH ? void 0 : HH.reason) && (null === BH || "string" === typeof(null === BH || void 0 === BH ? void 0 : BH.path) && Number.isInteger(BH.line))
        }(BH.fallback) ? BH : (console.error("[CodeCollab] Malformed engine settings", HH), null)
      } catch (BH) {
        return console.error("[CodeCollab] Failed to parse engine settings", BH), null
      }
    }

    function YS(HH) {
      let {
        length: BH
      } = HH;
      const {
        t: LH,
        selectedLanguage: AH
      } = (0, sH.B)(), rH = function(HH) {
        return HH >= nB.e ? "full" : HH >= 3e4 ? "counter" : "none"
      }(BH), SH = "full" === rH ? "codeEditor:codeBlockFull" : "codeEditor:codeBlockLength", hH = (0, sH.n)(AH.code, SH), tH = nB.e.toLocaleString(hH);
      return (0, EH.jsxs)(EH.Fragment, {
        children: ["counter" === rH && (0, EH.jsx)("div", {
          className: "CodeEditorLengthNotice CodeEditorLengthCounter",
          children: LH(SH, {
            length: BH.toLocaleString(hH),
            max: tH
          })
        }), (0, EH.jsx)("div", {
          className: "full" === rH ? "CodeEditorLengthNotice" : void 0,
          role: "status",
          children: "full" === rH && LH(SH, {
            max: tH
          })
        })]
      })
    }

    function uS(HH) {
      let {
        fallback: BH,
        onGoToLine: LH
      } = HH;
      const {
        t: AH
      } = (0, sH.B)(), {
        location: rH
      } = BH;
      return (0, EH.jsxs)("div", {
        className: "CodeEditorEngineNotice",
        children: [AH("codeEditorEngine:notice", {
          reason: BH.reason
        }), rH && (0, EH.jsxs)(EH.Fragment, {
          children: [" ", (0, EH.jsx)("button", {
            type: "button",
            className: "CodeEditorEngineNoticeLink",
            onClick: () => {
              LH(rH.path, rH.line)
            },
            children: AH("codeEditorEngine:goToLine", {
              line: String(rH.line)
            })
          })]
        })]
      })
    }
    var QS = LH(5405),
      WS = LH(4745),
      MS = LH(37741);

    function xS(HH) {
      let {
        label: BH,
        hint: LH,
        checked: AH,
        onChange: rH
      } = HH;
      return (0, EH.jsxs)("label", {
        className: "CodeEditorMoreOptionsRow CodeEditorOptionSwitch",
        children: [(0, EH.jsxs)("span", {
          className: "CodeEditorOptionSwitchText",
          children: [(0, EH.jsx)("span", {
            children: BH
          }), (0, EH.jsx)("span", {
            className: "CodeEditorOptionSwitchHint",
            children: LH
          })]
        }), (0, EH.jsx)("span", {
          className: "SwitchContainer",
          children: (0, EH.jsx)(WS.d, {
            className: "SwitchCheckbox",
            checked: AH,
            onChange: HH => {
              rH(HH.target.checked)
            },
            disabled: !1
          })
        })]
      })
    }

    function vS(HH) {
      let {
        engine: BH,
        onSetEngine: LH,
        aiHints: AH,
        variation: rH
      } = HH;
      const {
        t: SH
      } = (0, sH.B)(), [hH, tH] = (0, MS.j)(MS.c);
      return (0, EH.jsxs)("div", {
        className: "CodeEditorMoreOptions",
        children: [(0, EH.jsx)("div", {
          className: "CodeEditorMoreOptionsTitle",
          children: SH("codeEditor:moreOptions")
        }), BH && (0, EH.jsx)(xS, {
          label: SH("codeEditorEngine:toggle"),
          hint: SH("codeEditorEngine:toggleHint"),
          checked: "ses" === BH,
          onChange: HH => {
            LH(HH ? "ses" : "quickjs")
          }
        }), AH && (0, EH.jsx)(xS, {
          label: SH("codeEditorAiHints:toggle"),
          hint: SH("codeEditorAiHints:toggleHint"),
          checked: AH.shown,
          onChange: AH.setShown
        }), AH && MS.c.canChange && (0, EH.jsx)(xS, {
          label: SH("codeEditorAiKeySafetyCheck:toggle"),
          hint: SH("codeEditorAiKeySafetyCheck:toggleHint"),
          checked: hH,
          onChange: HH => {
            HH ? tH(!0) : Sr.NotificationProvider.showPromptPopup({
              title: "codeEditorAiKeySafetyCheck:offWarning",
              confirmText: "general:yes",
              destructive: !0,
              cancelText: "general:no",
              middleScreenPopupContainerClassName: Dr.c
            }).getResult().then((HH => {
              !0 === HH && tH(!1)
            }))
          }
        }), rH && (0, EH.jsxs)("div", {
          className: "CodeEditorMoreOptionsRow",
          children: [(0, EH.jsx)(QS.g, {
            label: "codeEditor:variationLabel",
            children: (0, EH.jsx)(eL.e, {
              className: "CodeEditorVariationInput",
              maxLength: 32,
              defaultValue: rH.name,
              onValueChange: rH.setName,
              onEnter: rH.reload
            })
          }), (0, EH.jsx)(YH.D, {
            className: "CodeEditorButton",
            onClick: rH.reload,
            children: SH("codeEditor:reloadAsVariation")
          })]
        })]
      })
    }
    var PS = LH(37747),
      TS = LH(37754);

    function US(HH) {
      let {
        close: BH
      } = HH;
      const {
        t: LH
      } = (0, sH.B)(), AH = [{
        name: LH("codeEditor:welcomeTutorial"),
        tutorial: "welcome"
      }, {
        name: LH("codeEditor:docsOverviewTutorial"),
        tutorial: "docsOverview"
      }, {
        name: LH("codeEditorAiTutorial:tutorialName"),
        tutorial: "aiHelperOverview"
      }];
      return (0, EH.jsxs)("div", {
        className: "PromptGenericPopup CodeEditorTutorialsPopup",
        children: [(0, EH.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: LH("codeEditor:tutorialsTitle")
        }), (0, EH.jsx)("div", {
          className: "CodeEditorTutorialsList",
          children: AH.map((HH => (0, EH.jsx)(YH.i, {
            className: "CodeEditorTutorialsListButton",
            onClick: () => {
              BH(), (0, TS.E)(HH.tutorial)
            },
            children: HH.name
          }, HH.tutorial)))
        })]
      })
    }
    var VS = LH(101),
      OS = LH(37427),
      bS = LH(2991);
    const kS = (0, rH.forwardRef)((function(HH, BH) {
      let {
        value: LH,
        onChange: AH,
        onSubmit: rH,
        placeholder: SH,
        maxLength: hH,
        rows: tH = 2,
        allowNewLines: zH = !1,
        onKeyDown: CH,
        before: XH
      } = HH;
      const {
        t: GH
      } = (0, sH.B)(), uH = "" !== LH.trim(), QH = () => {
        uH && rH()
      };
      return (0, EH.jsxs)("div", {
        className: "PanelPromptInputRow",
        children: [XH, (0, EH.jsx)("textarea", {
          ref: BH,
          className: "PanelPromptInput",
          value: LH,
          maxLength: hH,
          rows: tH,
          placeholder: SH,
          spellCheck: !1,
          autoComplete: "off",
          onChange: HH => {
            AH(zH ? HH.target.value : HH.target.value.replace(/\r?\n/g, " "))
          },
          onKeyDown: HH => {
            HH.nativeEvent.isComposing || 229 === HH.nativeEvent.keyCode ? HH.stopPropagation() : "Escape" !== HH.key && (HH.stopPropagation(), null === CH || void 0 === CH || CH(HH), HH.defaultPrevented || "Enter" !== HH.key || zH && HH.shiftKey || (HH.preventDefault(), QH()))
          }
        }), (0, EH.jsx)(YH.i, {
          className: "PanelPromptSend",
          disabled: !uH,
          onClick: QH,
          ariaLabel: GH("codeEditorPanels:send"),
          children: (0, EH.jsx)(WH.c, {
            name: "arrow-up"
          })
        })]
      })
    }));

    function mS(HH) {
      let {
        inputRef: BH
      } = HH;
      const {
        t: LH
      } = (0, sH.B)(), {
        messages: AH,
        reportedPlayers: SH,
        channel: hH
      } = (0, bS.l)(), [tH, zH] = (0, rH.useState)(""), CH = (0, rH.useRef)({
        stepsBack: 0,
        text: ""
      });
      return (0, EH.jsxs)("div", {
        className: "CodeEditorChatPanel",
        "data-replay-redact": !0,
        children: [(0, EH.jsx)("div", {
          className: "CodeEditorChatHeader",
          children: (0, EH.jsx)("span", {
            className: "CodeEditorChatTitle",
            children: LH("codeEditorChat:title")
          })
        }), 0 === AH.length ? (0, EH.jsx)("div", {
          className: "CodeEditorChatEmpty",
          children: LH("codeEditorChat:empty")
        }) : (0, EH.jsx)("div", {
          className: "ChatMessages CodeEditorChatMessages",
          children: (0, EH.jsx)(OS.e, {
            messages: AH,
            reportedPlayers: SH
          })
        }), (0, EH.jsx)(kS, {
          ref: BH,
          value: tH,
          onChange: zH,
          onSubmit: () => {
            (0, bS.j)(tH), zH(""), CH.current = {
              stepsBack: 0,
              text: ""
            }
          },
          maxLength: bH.kd,
          rows: 1,
          placeholder: hH ? LH("touchOnly" === (0, VS.d)() ? "codeEditorChat:channelPlaceholderTouch" : "codeEditorChat:channelPlaceholder", {
            channel: hH.channelName
          }) : LH("codeEditorChat:placeholder"),
          before: hH && (0, EH.jsx)("button", {
            type: "button",
            className: "CodeEditorChatChannel",
            style: {
              backgroundColor: hH.elementBgColor
            },
            onClick: () => {
              bS.b.selectNextChannel(), BH.current.focus()
            },
            children: (0, EH.jsx)(VH.b, {
              text: hH.elementContent
            })
          }),
          onKeyDown: HH => {
            const BH = tH === CH.current.text;
            if ("ArrowUp" !== HH.key && "ArrowDown" !== HH.key || !BH && "" !== tH) "Tab" === HH.key && !HH.shiftKey && hH && (HH.preventDefault(), bS.b.selectNextChannel());
            else {
              HH.preventDefault();
              const LH = BH ? CH.current.stepsBack : 0;
              CH.current = (0, bS.f)(LH + ("ArrowUp" === HH.key ? 1 : -1)), zH(CH.current.text)
            }
          }
        })]
      })
    }
    var oS = LH(37756);

    function IS(HH) {
      return "expanded" === HH ? "always" : "shown" === HH ? "narrow" : void 0
    }

    function fS(HH) {
      var BH;
      let {
        cX: LH,
        worldPanel: AH,
        closeWorld: rH,
        aiShown: SH,
        defaultWidth: hH,
        children: tH
      } = HH;
      const zH = "hidden" !== LH;
      return (0, EH.jsx)(oS.e, {
        side: "right",
        defaultSize: zH ? "max(18rem, 40%)" : hH,
        covers: null !== (BH = IS(LH)) && void 0 !== BH ? BH : SH ? "narrow" : void 0,
        children: (0, EH.jsxs)("div", {
          className: PL()("CodeEditorRightColumn", {
            WorldShown: zH,
            WorldExpanded: "expanded" === LH
          }),
          children: [zH && (0, EH.jsx)(oS.e, {
            side: "top",
            onClose: rH,
            children: AH
          }), tH]
        })
      })
    }
    var lS = LH(2059),
      KS = LH(1056),
      cS = LH(1253);
    class eS {
      constructor(HH, BH, LH) {
        this.measure = HH, this.apply = BH, this.now = LH, this.last = null, this.resizedAt = -1 / 0, this.resizing = !1, this.stretchedAt = null
      }
      get rect() {
        var HH, BH;
        return null !== (HH = null === (BH = this.last) || void 0 === BH ? void 0 : BH.rect) && void 0 !== HH ? HH : null
      }
      sync() {
        const HH = function(HH) {
          const BH = Math.round(HH.left),
            LH = Math.round(HH.top);
          return {
            left: BH,
            top: LH,
            width: Math.round(HH.right) - BH,
            height: Math.round(HH.bottom) - LH
          }
        }(this.measure());
        if (HH.width <= 0 || HH.height <= 0) return;
        const BH = this.now(),
          LH = this.last;
        let AH = {
          width: HH.width,
          height: HH.height
        };
        null === LH || HH.width === LH.rect.width && HH.height === LH.rect.height || (this.resizing = BH - this.resizedAt < 100, this.resizedAt = BH);
        const rH = null !== LH && this.resizing && BH - this.resizedAt < 100 && (HH.width !== LH.bufferSize.width || HH.height !== LH.bufferSize.height);
        rH && (this.stretchedAt ??= BH), rH && BH - this.stretchedAt < 250 ? AH = LH.bufferSize : this.stretchedAt = null;
        const SH = {
          rect: HH,
          bufferSize: AH
        };
        var hH, tH;
        null !== LH && (tH = SH, (hH = LH).rect.left === tH.rect.left && hH.rect.top === tH.rect.top && hH.rect.width === tH.rect.width && hH.rect.height === tH.rect.height && hH.bufferSize.width === tH.bufferSize.width && hH.bufferSize.height === tH.bufferSize.height) || (this.last = SH, this.apply(SH))
      }
      stop() {
        null !== this.last && (this.last = null, this.apply(null))
      }
    }

    function qS(HH) {
      const {
        style: BH
      } = document.documentElement;
      for (const [LH, AH] of [
          ["--worldViewLeft", null === HH || void 0 === HH ? void 0 : HH.left],
          ["--worldViewTop", null === HH || void 0 === HH ? void 0 : HH.top],
          ["--worldViewWidth", null === HH || void 0 === HH ? void 0 : HH.width],
          ["--worldViewHeight", null === HH || void 0 === HH ? void 0 : HH.height]
        ]) void 0 === AH ? BH.removeProperty(LH) : BH.setProperty(LH, `${AH}px`)
    }
    var gS = LH(1789),
      NS = LH(2066);

    function RS(HH, BH) {
      (0, rH.useEffect)((() => {
        if (!HH) return;
        const LH = HH => {
          var LH;
          "Escape" === HH.key ? (HH.stopPropagation(), HH.preventDefault(), BH()) : (LH = HH.code, Object.entries(DB.w).some((HH => {
            let [BH, AH] = HH;
            const rH = NS.f[BH];
            return rH.includes("ui") && !rH.includes("core") && AH.includes(LH)
          })) && !(0, gS.isTextEntry)(HH.target) && HH.preventDefault())
        };
        window.addEventListener("keydown", LH, !0);
        const AH = (0, jH.r)(BH);
        return () => {
          window.removeEventListener("keydown", LH, !0), AH()
        }
      }), [HH, BH])
    }

    function jS() {
      return (0, Mr.p)().some((HH => HH !== Mr.d))
    }

    function nS(HH, BH) {
      return HH.map((HH => BH ? String(HH) : HH.toFixed(1))).join(", ")
    }

    function FS(HH) {
      let {
        freeCamera: BH,
        picking: LH,
        hovered: AH
      } = HH;
      const {
        t: SH
      } = (0, sH.B)(), hH = (0, rH.useRef)(null), tH = (0, rH.useRef)(null);
      return (0, rH.useEffect)((() => {
        const HH = (HH, BH) => {
            HH.textContent !== BH && (HH.textContent = BH)
          },
          LH = () => {
            const LH = BH ? CH.gameBridge.lookup("freeCameraPos", null) : null;
            HH(hH.current, nS(null !== LH && void 0 !== LH ? LH : CH.gameBridge.lookup("localPos", null), !1));
            const AH = CH.gameBridge.lookup("targetedBlockPos", null);
            HH(tH.current, AH ? nS(AH, !0) : "-")
          };
        return LH(), (0, cS.F)(LH)
      }), [BH]), (0, EH.jsxs)("div", {
        className: "WorldPanelCoordinates",
        children: [(0, EH.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: SH(BH ? "codeEditorWorld:camera" : "codeEditorWorld:position")
        }), (0, EH.jsx)("span", {
          ref: hH
        }), (0, EH.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: SH("codeEditorWorld:lookingAt")
        }), (0, EH.jsx)("span", {
          ref: tH,
          hidden: LH
        }), LH && (0, EH.jsxs)(EH.Fragment, {
          children: [(0, EH.jsx)("span", {
            children: AH ? nS(AH.pos, !0) : "-"
          }), AH && (0, EH.jsx)("span", {
            className: "WorldPanelCoordsName",
            children: AH.name
          })]
        })]
      })
    }
    var DS = LH(37761),
      wS = LH(1471);

    function ZS(HH) {
      const BH = HH.currentTarget.getBoundingClientRect();
      return {
        x: (HH.clientX - BH.left) / BH.width,
        y: (HH.clientY - BH.top) / BH.height
      }
    }

    function dS(HH) {
      const [BH, LH] = (0, rH.useState)(!1), [AH, SH] = (0, rH.useState)(null), hH = (0, rH.useRef)(null);
      (0, rH.useEffect)((() => {
        if (!BH) return;
        let HH = null,
          LH = null,
          AH = 1 / 0;
        const rH = (0, cS.B)((BH => {
          AH += BH;
          const rH = hH.current;
          if (rH === LH && AH < 100) return;
          LH = rH, AH = 0;
          const tH = rH && CH.gameBridge.lookup("blockAtViewPoint", rH);
          var zH, EH;
          (zH = tH) === (EH = HH) || null !== zH && null !== EH && zH.name === EH.name && (0, DS.g)(zH.pos, EH.pos) && (0, DS.g)(zH.normal, EH.normal) || (HH = tH, SH(tH), CH.gameBridge.send("setBlockHighlight", tH))
        }));
        return () => {
          rH(), null !== HH && CH.gameBridge.send("setBlockHighlight", null), SH(null)
        }
      }), [BH]);
      const tH = (0, rH.useCallback)((() => {
        LH(!1)
      }), []);
      RS(BH, tH);
      const zH = AH => {
          if (!BH) return;
          const rH = CH.gameBridge.lookup("blockAtViewPoint", ZS(AH));
          null !== rH && (LH(!1), HH(rH.pos))
        },
        EH = BH ? (0, wS.c)(zH, "pointerup") : null,
        XH = {
          onPointerDown: HH => {
            null === EH || void 0 === EH || EH.onPointerDown(HH)
          },
          onPointerMove: HH => {
            hH.current = ZS(HH)
          },
          onPointerLeave: () => {
            hH.current = null
          },
          onPointerUp: null === EH || void 0 === EH ? void 0 : EH.onPointerUp,
          onClick: HH => {
            "pointerType" in HH.nativeEvent && "touch" === HH.nativeEvent.pointerType || zH(HH)
          }
        };
      return {
        picking: BH,
        setPicking: LH,
        hovered: AH,
        slotHandlers: XH
      }
    }

    function aS(HH) {
      CH.gameBridge.send("setFreeCameraMovesFly", HH)
    }

    function sS(HH) {
      let {
        shown: BH,
        setShown: LH,
        canInsertCode: AH
      } = HH;
      const {
        t: SH
      } = (0, sH.B)(), {
        isTouchScreen: hH
      } = (0, RH.m)(["isTouchScreen"]), tH = (0, rH.useRef)(null), CH = (0, rH.useCallback)((() => {
        var HH;
        null === (HH = tH.current.closest(".CodeEditorBg").querySelector(".cm-content")) || void 0 === HH || HH.focus()
      }), []), {
        control: XH,
        take: GH,
        release: QH,
        blocked: MH
      } = function(HH) {
        const [BH, LH] = (0, rH.useState)("none"), AH = (0, rH.useRef)("none"), [SH, hH] = (0, rH.useState)(!1), tH = HH => {
          AH.current = HH, LH(HH)
        }, zH = (0, rH.useCallback)((() => {
          const BH = AH.current;
          "none" !== BH && (tH("none"), (0, Mr.x)(Mr.d), "mouse" === BH && HH())
        }), [HH]), CH = (0, rH.useCallback)((HH => {
          jS() ? hH(!0) : (tH("mouse" === HH && "touchOnly" !== (0, VS.d)() ? "mouse" : "touch"), (0, Mr.t)(Mr.d))
        }), []);
        return (0, OH.d)("pointerLockUpdate", (HH => {
          HH && "touch" === AH.current && "touchOnly" !== (0, VS.d)() ? tH("mouse") : HH || "mouse" !== AH.current || zH()
        })), (0, rH.useEffect)((() => {
          if (!SH) return;
          const HH = () => {
            jS() || hH(!1)
          };
          return HH(), (0, Mr.j)(HH)
        }), [SH]), RS("none" !== BH, zH), (0, rH.useEffect)((() => {
          if ("none" === BH) return;
          const HH = HH => {
            (0, gS.isTextEntry)(HH.target) && zH()
          };
          return document.addEventListener("focusin", HH), () => {
            document.removeEventListener("focusin", HH)
          }
        }), [BH, zH]), (0, rH.useEffect)((() => (document.addEventListener("pointerlockerror", zH), () => {
          document.removeEventListener("pointerlockerror", zH)
        })), [zH]), (0, rH.useEffect)((() => () => {
          "none" !== AH.current && null !== RH.c.get("openInGameMenuName") && (0, Mr.x)(Mr.d)
        }), []), {
          control: BH,
          take: CH,
          release: zH,
          blocked: SH
        }
      }(CH), xH = (0, KS.n)(oS.g);
      (0, rH.useEffect)((() => {
        "touch" !== XH || "shown" !== BH || xH ? "none" === XH && "expanded" === BH && LH("shown") : LH("expanded")
      }), [XH, xH]),
      function(HH, BH) {
        const LH = (0, rH.useRef)(BH);
        LH.current = BH;
        const AH = (0, rH.useRef)(null);
        (0, rH.useLayoutEffect)((() => {
          const BH = new eS((() => HH.current.getBoundingClientRect()), (HH => {
            var BH;
            "none" !== LH.current && qS(null !== (BH = null === HH || void 0 === HH ? void 0 : HH.rect) && void 0 !== BH ? BH : null), (0, cS.K)().setGameView(HH)
          }), (() => performance.now()));
          AH.current = BH, BH.sync();
          const rH = (0, cS.x)((() => {
            BH.sync()
          }));
          return () => {
            rH(), RH.c.set({
              worldPanelHud: null
            }), BH.stop()
          }
        }), [HH]), (0, rH.useLayoutEffect)((() => {
          AH.current.sync(), qS("none" === BH ? null : AH.current.rect), RH.c.set({
            worldPanelHud: BH
          })
        }), [BH])
      }(tH, "touch" === XH ? "touchControls" : "none");
      const {
        picking: vH,
        setPicking: PH,
        hovered: TH,
        slotHandlers: {
          onPointerDown: UH,
          ...VH
        }
      } = dS((HH => {
        uH.k.AX("CodeEditorInsertText", {
          text: `[${HH.join(", ")}]`,
          focus: !hH
        }), (0, oS.g)() && LH("hidden")
      })), bH = function() {
        const {
          allowed: HH,
          movesFly: BH
        } = (0, kH.e)("freeCamera"), LH = (0, rH.useRef)(BH), AH = (0, rH.useRef)(BH);
        return AH.current !== BH && (AH.current = BH, LH.current = BH), (0, rH.useEffect)((() => () => {
          LH.current && aS(!1)
        }), []), {
          allowed: HH,
          on: BH,
          toggle: () => {
            LH.current = !BH, aS(!BH)
          }
        }
      }(), mH = (0, zH.j)("hideCoordinates"), oH = (0, kH.e)("localPlayerAlive"), IH = !oH || MH;
      (0, rH.useEffect)((() => {
        oH || QH()
      }), [oH, QH]), (0, rH.useEffect)((() => {
        !IH && AH || PH(!1)
      }), [IH, AH, PH]);
      const fH = bH.on ? YH.u : YH.i,
        lH = vH ? YH.u : YH.i;
      return (0, EH.jsxs)("div", {
        className: "WorldPanel",
        children: [(0, EH.jsxs)("div", {
          className: "WorldPanelHeader",
          children: [(0, EH.jsx)("span", {
            className: "WorldPanelTitle",
            children: SH("codeEditorWorld:title")
          }), "touch" === XH && !xH && (0, EH.jsx)(YH.i, {
            className: "WorldPanelButton",
            onClick: QH,
            children: SH("codeEditorWorld:backToCode")
          }), !IH && bH.allowed && !hH && (0, EH.jsx)(dH.g, {
            tooltipInner: SH("codeEditorWorld:freeCameraTooltip"),
            hoverOnly: !0,
            children: (0, EH.jsx)(fH, {
              className: "WorldPanelButton",
              ariaPressed: bH.on,
              ariaLabel: SH("codeEditorWorld:freeCamera"),
              onClick: bH.toggle,
              children: (0, EH.jsx)(WH.c, {
                name: "video"
              })
            })
          }), !IH && AH && (0, EH.jsx)(dH.g, {
            tooltipInner: SH("codeEditorWorld:pickTooltip"),
            hoverOnly: !0,
            children: (0, EH.jsxs)(lH, {
              className: "WorldPanelButton",
              ariaPressed: vH,
              onClick: () => {
                QH(), PH(!vH)
              },
              children: [(0, EH.jsx)(WH.c, {
                name: "crosshairs"
              }), SH("codeEditorWorld:pick")]
            })
          })]
        }), !mH && (0, EH.jsx)(FS, {
          freeCamera: bH.on,
          picking: vH,
          hovered: TH
        }), (0, EH.jsxs)("div", {
          ref: tH,
          className: PL()("WorldPanelSlot", {
            TouchControl: "touch" === XH,
            Picking: vH
          }),
          onPointerDown: HH => {
            0 !== HH.button || IH || vH || GH(HH.pointerType), UH(HH)
          },
          ...VH,
          children: [!IH && !vH && (0, EH.jsx)("div", {
            className: "WorldPanelCrosshair",
            children: "+"
          }), !IH && "touch" !== XH && (0, EH.jsxs)("div", {
            className: "WorldPanelHint",
            children: [vH && SH(hH ? "codeEditorWorld:tapToPick" : "codeEditorWorld:clickToPick"), !vH && "none" === XH && !bH.on && SH(hH ? "codeEditorWorld:tapToPlay" : "codeEditorWorld:clickToPlay"), !vH && "none" === XH && bH.on && SH("codeEditorWorld:clickToFly"), "mouse" === XH && (0, EH.jsxs)(EH.Fragment, {
              children: [(0, EH.jsx)(lS.b, {
                noaAction: "OpenLobbyLeaderboard"
              }), SH("codeEditorWorld:backToCode")]
            })]
          }), IH && (0, EH.jsxs)("div", {
            className: "WorldPanelWaiting",
            children: [(0, EH.jsx)("span", {
              children: SH(oH ? "codeEditorWorld:gameWaiting" : "codeEditorWorld:died")
            }), (0, EH.jsx)(YH.i, {
              onClick: jH.g,
              children: SH("codeEditorWorld:toGame")
            })]
          })]
        })]
      })
    }
    var JS = LH(5506);

    function iS(HH) {
      let {
        cX: BH,
        setWorld: LH,
        toggleWorld: AH,
        aiShown: rH,
        closeAi: SH
      } = HH;
      const {
        t: hH
      } = (0, sH.B)(), tH = rH ? "ai" : "hidden" !== BH ? "world" : "code", zH = [{
        value: "code",
        label: hH("codeEditorWorld:codePane")
      }, {
        value: "world",
        label: hH("codeEditorWorld:title")
      }];
      rH && zH.push({
        value: "ai",
        label: hH("codeEditorWorld:aiPane")
      });
      return (0, EH.jsx)("div", {
        className: "CodeEditorPaneSwitch",
        children: (0, EH.jsx)(JS.b, {
          options: zH,
          value: tH,
          onChange: HH => {
            "world" !== HH ? (rH && SH(), LH("hidden")) : "hidden" === BH ? AH() : SH()
          },
          ariaLabel: hH("codeEditorWorld:panes"),
          keepsFocus: !0
        })
      })
    }
    var pS = LH(37770),
      yS = LH(37774),
      Hh = LH(37779),
      Bh = LH(37786);
    const Lh = (0, rH.lazy)((() => Promise.all([LH.e(608), LH.e(604), LH.e(607), LH.e(603), LH.e(98), LH.e(606), LH.e(605), LH.e(602)]).then((() => LH(44806))))),
      Ah = (0, rH.lazy)((() => Promise.all([LH.e(93), LH.e(96), LH.e(97), LH.e(95), LH.e(610)]).then((() => LH(44956))))),
      rh = (0, rH.lazy)((() => Promise.all([LH.e(608), LH.e(607), LH.e(98), LH.e(96), LH.e(97), LH.e(95), LH.e(606), LH.e(605), LH.e(94), LH.e(105)]).then((() => LH(44965)))));

    function Sh(HH) {
      return CH.gameBridge.query("worldCodeAiChunk", HH)
    }

    function hh() {
      return CH.gameBridge.query("worldCodeAiGameState", null)
    }

    function th(HH) {
      const {
        gsUrl: BH,
        gameNameWithVariation: LH,
        lobbyName: AH
      } = hS();
      return (0, Ir.postJsonWithMetricsCookiesAndJsonResponse)(`${BH}/code/get-lobby-code`, or.ak["get-lobby-code"].toBuffer({
        gameNameWithVariation: LH,
        lobbyName: AH,
        path: HH
      }), {
        retries: 1
      })
    }
    let zh = !1;
    const Ch = [],
      Eh = {
        message: "You do not have permission to view the code.",
        type: "warning"
      },
      Xh = (0, rH.memo)((function(HH) {
        var BH, LH;
        let {
          show: AH,
          onOpen: SH,
          onClose: tH,
          isLobbyCode: XH
        } = HH;
        const GH = (0, rH.useRef)(""),
          [QH, MH] = (0, rH.useState)(null),
          xH = (0, rH.useRef)(XH),
          [vH, PH] = (0, rH.useState)({
            message: null,
            type: null
          }),
          [TH, UH] = (0, rH.useState)(""),
          VH = vH.message ? vH : {
            message: TH,
            type: "warning"
          },
          [oH, IH] = (0, rH.useState)(!0),
          [fH, KH] = (0, MS.j)(MS.f),
          [cH, eH] = (0, MS.j)(MS.b),
          [qH, gH] = (0, rH.useState)(!1),
          [NH, nH] = (0, rH.useState)(!1),
          FH = (0, rH.useRef)(null),
          DH = (0, rH.useRef)(!1);
        (0, rH.useEffect)((() => {
          var HH;
          NH && DH.current && (DH.current = !1, null === (HH = FH.current) || void 0 === HH || HH.focus())
        }), [NH]);
        const wH = (0, pS.e)(),
          ZH = (0, rH.useRef)(null),
          aH = (0, rH.useRef)(null),
          {
            openInGameMenuName: JH,
            openEverythingMenuName: iH,
            worldPanelHud: pH
          } = (0, RH.m)(["openInGameMenuName", "openEverythingMenuName", "worldPanelHud"]),
          yH = HH => {
            AH && (ZH.current = HH, kB.current = !0)
          };
        (0, OH.d)("OpenReportMenu", (() => {
          yH("XX")
        })), (0, OH.d)("OpenStoreFromCodeEditor", (() => {
          yH("store")
        })), (0, rH.useEffect)((() => {
          const HH = ZH.current;
          null === HH || "XX" === HH && ("makeReport" === JH || "makeDiscordReport" === JH) || "store" === HH && null !== iH || (ZH.current = null, null === JH && null === iH ? XH ? (aH.current = AL.current, uH.k.AX("EditLobbyCode", QH)) : uH.k.AX("EditCodeBlock", {
            pos: QH,
            canChangePos: xH.current
          }) : (0, TS.w)())
        }), [JH, iH, XH, QH]), (0, rH.useEffect)((() => {
          if (AH) return () => {
            aH.current = null
          }
        }), [AH]);
        const [HB, BB] = function() {
          const [HH, BH] = (0, rH.useState)(zh);
          return (0, OH.d)("CodeEditorAiHelperShown", (HH => {
            BH(HH)
          })), [HH, (0, rH.useCallback)((HH => {
            zh = HH, uH.k.AX("CodeEditorAiHelperShown", HH)
          }), [])]
        }(), [LB, AB] = (0, rH.useState)(null), [rB, SB] = (0, rH.useState)([]), [hB, tB] = (0, rH.useState)(0), [zB, CB] = (0, rH.useState)(0), [EB, XB] = (0, rH.useState)(""), YB = (0, rH.useRef)(null), [uB, QB] = (0, rH.useState)(XH ? Bh.f : null), WB = XH || null !== QH, MB = (0, zH.j)("canEditCode"), xB = (0, zH.j)("canUseDevCreativeItems"), vB = (0, PS.j)("welcome"), PB = (0, PS.j)("docsOverview"), TB = PB ? "docsOverview" : "welcome", UB = null !== PB && void 0 !== PB ? PB : vB, VB = (0, PS.j)("aiHelperOverview"), OB = VB ? "aiHelperOverview" : "welcome", bB = null !== VB && void 0 !== VB ? VB : vB, kB = (0, rH.useRef)(!1), mB = (0, rH.useRef)(!1), oB = (0, rH.useRef)(null), [IB, fB] = (0, rH.useState)(""), [lB, KB] = (0, rH.useState)(!1), [cB, eB] = (0, rH.useState)(null), qB = (0, kH.e)("connectedGame"), gB = XH && MB && "classic" === qB.gameNameWithVariation && !(0, GB.N)(qB.lobbyName), [NB, RB] = (0, rH.useState)(null), [jB, FB] = (0, rH.useState)({
          [fr.g]: ""
        }), [wB, ZB] = (0, rH.useState)({
          assets: {},
          revision: 0
        }), dB = (0, rH.useRef)(wB), aB = (0, rH.useCallback)((HH => {
          var BH;
          HH.revision < dB.current.revision || (dB.current = HH, ZB(HH), UH(HH.startupError ? `Schematics could not load: ${HH.startupError}` : ""), null === (BH = QL.current) || void 0 === BH || BH.onLobbyFilesChanged({
            ...zL.current,
            ...(0, jr.i)(HH.assets)
          }))
        }), []), [sB, JB] = (0, rH.useState)(fr.g), [iB, pB] = (0, rH.useState)(null), [yB, HL] = (0, rH.useState)(null), BL = (0, rH.useRef)(!1), LL = (0, rH.useRef)(null), AL = (0, rH.useRef)(sB);
        AL.current = sB;
        const rL = (0, rH.useRef)(iB);
        rL.current = iB;
        const SL = iB ? null : cB,
          hL = SL && !SL.engineLocked ? SL.worldCodeEngine : null,
          tL = (0, rH.useRef)(yB);
        tL.current = yB;
        const zL = (0, rH.useRef)(jB);
        zL.current = jB;
        const CL = (0, rH.useRef)(null),
          EL = (0, rH.useRef)(null),
          [XL, GL] = (0, rH.useState)(!1),
          YL = (0, pr.o)(),
          uL = (0, rH.useRef)([]),
          QL = (0, rH.useRef)(null),
          WL = (0, rH.useRef)(null),
          ML = (0, rH.useRef)(null);

        function xL(HH) {
          PH(HH), clearTimeout(oB.current), oB.current = setTimeout((() => {
            PH({
              message: null,
              type: null
            })
          }), 3e3)
        }
        const vL = (0, rH.useCallback)((function() {
            let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            BL.current && LL.current && (CH.gameBridge.send("sendCodeCollab", {
              dB: lr.e.Leave,
              aB: (0, lr.u)(LL.current),
              wt: !!HH || null
            }), BL.current = !1, LL.current = null), RB(null)
          }), []),
          TL = (0, rH.useCallback)((HH => {
            const BH = {
              kind: "lobby",
              path: HH
            };
            LL.current = BH, JB(HH), GH.current = "", CH.gameBridge.send("sendCodeCollab", {
              dB: lr.e.Join,
              aB: (0, lr.u)(BH)
            }), BL.current = !0
          }), []),
          UL = (0, rH.useCallback)((HH => {
            var BH;
            const LH = null === (BH = WL.current) || void 0 === BH ? void 0 : BH.collabState;
            return LH && "lobby" === LH.docKey.kind && LH.docKey.path === HH && AL.current === HH ? Promise.resolve({
              doc: LH.doc,
              version: LH.version,
              clientID: LH.clientID,
              docKey: LH.docKey,
              httpConfig: LH.httpConfig
            }) : new Promise(((BH, LH) => {
              const AH = setTimeout((() => {
                  uL.current = uL.current.filter((HH => HH !== rH)), LH(new Error(`Timed out joining ${HH}`))
                }), 15e3),
                rH = LH => {
                  "lobby" === LH.docKey.kind && LH.docKey.path === HH && (clearTimeout(AH), uL.current = uL.current.filter((HH => HH !== rH)), BH(LH))
                };
              uL.current.push(rH), AL.current !== HH ? (vL(!0), TL(HH)) : BL.current || TL(HH)
            }))
          }), [TL, vL]),
          VL = (0, rH.useCallback)((async function(HH, BH) {
            let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
            const AH = Date.now();
            let rH = HH in zL.current;
            for (; rH !== BH;) {
              if (Date.now() - AH > LH) throw new Error(`Timed out waiting for lobby path ${HH} present=${BH}`);
              await (0, vA.Q)(50), rH = HH in zL.current
            }
          }), []),
          OL = (0, rH.useCallback)((HH => {
            const BH = zL.current,
              LH = fr.g in BH && fr.h in BH;
            if (!(0, Kr.g)(HH) || LH) {
              if (AL.current === HH) {
                var AH;
                const rH = LH && (0, Kr.g)(HH) ? HH === fr.g ? fr.h : fr.g : null !== (AH = (0, Kr.d)(BH)) && void 0 !== AH ? AH : fr.g;
                EL.current = {
                  fromPath: HH,
                  toPath: rH
                }, JB(rH)
              }
              CH.gameBridge.send("sendCodeCollab", {
                dB: lr.e.DeleteFile,
                aB: (0, lr.u)({
                  kind: "lobby",
                  path: AL.current
                }),
                Zt: HH
              })
            }
          }), []),
          bL = (0, rH.useCallback)((HH => {
            aH.current = null, pB(null), HL(null), !XH || HH === AL.current && BL.current || (vL(!0), TL(HH))
          }), [XH, vL, TL]),
          kL = (0, rH.useCallback)(((HH, BH) => {
            const LH = Nr.g[HH],
              AH = LH && BH in LH.files ? BH : "index.ts";
            if (HH !== rL.current || AH !== tL.current) {
              var rH;
              if (HH !== rL.current) null === (rH = QL.current) || void 0 === rH || rH.stopContinuousSync(), vL(!0);
              pB(HH), HL(AH)
            }
          }), [vL]),
          mL = (0, rH.useCallback)((HH => {
            var BH;
            const LH = AL.current,
              AH = zL.current[LH],
              rH = BL.current && !rL.current && LH in HH && void 0 !== AH ? {
                ...HH,
                [LH]: AH
              } : HH;
            FB(rH);
            const SH = CL.current;
            if (SH && SH in HH) CL.current = null, SH !== AL.current && bL(SH);
            else if (!(AL.current in HH) && BL.current && !rL.current) {
              var hH;
              bL(null !== (hH = (0, Kr.d)(HH)) && void 0 !== hH ? hH : fr.g)
            }
            null === (BH = QL.current) || void 0 === BH || BH.onLobbyFilesChanged({
              ...rH,
              ...(0, jr.i)(dB.current.assets)
            })
          }), [bL]),
          oL = (0, rH.useCallback)((() => th(AL.current).then((async HH => {
            if (!BL.current || !HH.files) return null;
            mL(HH.files);
            const BH = await tS({
              action: "state"
            });
            return aB(BH), {
              ...HH.files,
              ...(0, jr.i)(BH.assets)
            }
          })).catch((HH => (console.error("[CodeCollab] Failed to fetch lobby files via HTTP", HH), xL({
            message: "Could not refresh the file list",
            type: "warning"
          }), null)))), [mL, aB]),
          IL = () => {
            tH()
          };
        (0, rH.useEffect)((() => {
          if (UH(""), !AH || !XH) return;
          let HH = !1;
          return dB.current = {
            assets: {},
            revision: 0
          }, ZB(dB.current), tS({
            action: "state"
          }).then((BH => {
            HH || aB(BH)
          })).catch((BH => {
            console.error("Could not load project schematics", BH), HH || UH("Could not load schematics. Reopen the Code Editor to retry.")
          })), () => {
            HH = !0
          }
        }), [AH, XH, aB]);
        const fL = (0, rH.useCallback)((function() {
            let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            LL.current && CH.gameBridge.send("sendCodeCollab", {
              dB: lr.e.Submit,
              aB: (0, lr.u)(LL.current),
              ...HH ? {
                pB: "keepOpen"
              } : {}
            })
          }), []),
          lL = (0, rH.useCallback)((() => {
            if (!LL.current || "lobby" !== LL.current.kind) return;
            const HH = IB.trim();
            (0, cr.r)(HH) ? (CH.gameBridge.send("sendCodeCollab", {
              dB: lr.e.ReloadAsVariation,
              aB: (0, lr.u)(LL.current),
              pB: HH
            }), KB(!1)) : xL({
              message: "Variation must be 1-32 characters: A-Z, a-z, 0-9, _, -",
              type: "warning"
            })
          }), [IB]),
          KL = (0, rH.useCallback)((HH => {
            CH.gameBridge.send("sendCodeCollab", {
              dB: lr.e.SetEngine,
              aB: (0, lr.u)({
                kind: "lobby",
                path: AL.current
              }),
              pB: HH
            })
          }), []),
          cL = (0, rH.useCallback)((HH => {
            if (!rL.current && MB && (xH.current || XH)) {
              if (XH) {
                var BH;
                const LH = (0, Kr.k)(zL.current, AL.current),
                  AH = Math.min(nB.z, Math.max(0, nB.E - LH)),
                  rH = HH.slice(0, AH);
                return GH.current = rH, FB((HH => ({
                  ...HH,
                  [AL.current]: rH
                }))), void(null === (BH = QL.current) || void 0 === BH || BH.onDocTextChanged(AL.current, rH))
              }
              GH.current = HH, XB(HH)
            }
          }), [MB, XH]);
        (0, OH.d)("EditLobbyCode", (HH => {
          var BH;
          lH.featureFlags.canSeePlayerWrittenText && XH && (vL(), MH(HH), GH.current = "", FB({
            [fr.g]: ""
          }), eB(null), JB(fr.g), pB(null), HL(null), CL.current = null, EL.current = null, null === (BH = QL.current) || void 0 === BH || BH.stopContinuousSync(), SH(), TL(fr.g))
        })), (0, OH.d)("EditCodeBlock", (HH => {
          let {
            pos: BH,
            canChangePos: LH
          } = HH;
          if (lH.featureFlags.canSeePlayerWrittenText && !XH)
            if (vL(), null !== BH && (BH = [...BH]), MH(BH), xH.current = LH, null !== BH) {
              GH.current = "", XB(""), SH();
              const HH = {
                  kind: "codeBlock",
                  pos: BH
                },
                AH = (0, lr.u)(HH);
              YB.current !== AH && (YB.current = AH, SB([]), CB(hB)), QB((0, Bh.e)(AH, [BH[0], BH[1], BH[2]], !!LH)), LL.current = HH, CH.gameBridge.send("sendCodeCollab", {
                dB: lr.e.Join,
                aB: (0, lr.u)(HH)
              }), BL.current = !0
            } else AH && tH()
        })), (0, OH.d)("codeCollabRejoin", (HH => {
          const BH = LL.current ? (0, lr.u)(LL.current) : null;
          BH && HH.docKey === BH && (GH.current = HH.doc, XH || XB(HH.doc), RB((BH => BH ? {
            ...BH,
            doc: HH.doc,
            version: HH.version,
            clientID: (0, gr.b)()
          } : BH)))
        })), (0, OH.d)("codeCollab", (HH => {
          var BH;
          const LH = LL.current ? (0, lr.u)(LL.current) : null;
          if (HH.type === lr.i.LobbyFilesChanged && XH) {
            if ("string" !== typeof HH.files) return void oL();
            try {
              mL(JSON.parse(HH.files))
            } catch (CH) {
              console.error("[CodeCollab] Failed to parse lobby files", CH), oL()
            }
            return
          }
          if (HH.type === lr.i.EngineSettings && XH) return void eB(GS(HH.engineSettings));
          const rH = HH.type === lr.i.Joined ? (0, lr.m)(HH.docKey) : null,
            SH = XH && "lobby" === (null === (BH = LL.current) || void 0 === BH ? void 0 : BH.kind) && (0, Kr.g)(LL.current.path) && "lobby" === (null === rH || void 0 === rH ? void 0 : rH.kind) && (0, Kr.g)(rH.path);
          if (!LH || HH.docKey === LH || SH)
            if (HH.type !== lr.i.ForceClose) {
              if (AH)
                if (HH.type === lr.i.Joined) {
                  var hH;
                  const EH = JSON.parse(HH.peers),
                    YH = HH.existingCursors ? JSON.parse(HH.existingCursors) : [],
                    WH = (0, gr.b)(),
                    MH = hS(),
                    {
                      gsUrl: xH,
                      gameNameWithVariation: vH,
                      lobbyName: TH
                    } = MH,
                    UH = null !== (hH = (0, lr.m)(HH.docKey)) && void 0 !== hH ? hH : LL.current;
                  UH && (LL.current = UH, "lobby" === UH.kind && (JB(UH.path), AL.current = UH.path));
                  const VH = UH || (XH ? {
                    kind: "lobby",
                    path: AL.current
                  } : {
                    kind: "codeBlock",
                    pos: QH
                  });

                  function OH(BH) {
                    var LH, AH;
                    if (!BL.current) return;
                    const rH = null !== (LH = BH.code) && void 0 !== LH ? LH : "",
                      SH = null !== (AH = BH.collabVersion) && void 0 !== AH ? AH : 0;
                    GH.current = rH, XH || XB(rH), XH && BH.files ? FB(BH.files) : XH && FB((HH => ({
                      ...HH,
                      [AL.current]: rH
                    })));
                    const hH = {
                      doc: rH,
                      version: SH,
                      clientID: WH,
                      docKey: VH,
                      peers: EH,
                      editorCount: HH.editorCount,
                      existingCursors: YH,
                      httpConfig: MH
                    };
                    if (RB(hH), "lobby" === VH.kind) {
                      var tH;
                      const HH = {
                        doc: rH,
                        version: SH,
                        clientID: WH,
                        docKey: VH,
                        httpConfig: MH
                      };
                      for (const BH of [...uL.current]) BH(HH);
                      null === (tH = QL.current) || void 0 === tH || tH.startWhenReady()
                    }
                    BH.canSeeCode ? (clearTimeout(oB.current), PH({
                      message: null,
                      type: null
                    })) : function(HH) {
                      clearTimeout(oB.current), PH(HH)
                    }(Eh);
                    const zH = aH.current;
                    aH.current = null, XH && zH && BH.files && zH in BH.files && zH !== AL.current && bL(zH)
                  }
                  XH ? th(AL.current).then(OH).catch((HH => {
                    console.error("[CodeCollab] Failed to fetch lobby code via HTTP", HH), vL()
                  })) : (0, Ir.postJsonWithMetricsCookiesAndJsonResponse)(`${xH}/code/get-code-block`, or.ak["get-code-block"].toBuffer({
                    gameNameWithVariation: vH,
                    lobbyName: TH,
                    pos: QH
                  }), {
                    retries: 1
                  }).then(OH).catch((HH => {
                    console.error("[CodeCollab] Failed to fetch code block via HTTP", HH), vL()
                  }))
                } else if (HH.type === lr.i.Presence) {
                if (!LH) return;
                const bH = JSON.parse(HH.peers);
                RB((BH => BH ? {
                  ...BH,
                  peers: bH,
                  editorCount: HH.editorCount
                } : BH))
              }
            } else {
              var zH;
              if (!LH) return;
              AH && XH && "keptOpen" === HH.updates && uH.k.AX("CodeEditorKeepEdits");
              const kH = LL.current;
              BL.current = !1, LL.current = null, RB(null);
              if (!XH || "close" === HH.updates) return (0, Hh.h)(), void(AH && tH());
              if (!AH) return;
              const mH = zL.current,
                oH = EL.current;
              EL.current = null;
              const IH = "lobby" === (null === kH || void 0 === kH ? void 0 : kH.kind) && kH.path === (null === oH || void 0 === oH ? void 0 : oH.fromPath),
                fH = oH && (IH || oH.toPath in mH || (0, Kr.g)(oH.toPath)) ? oH.toPath : AL.current in mH ? AL.current : null !== (zH = (0, Kr.d)(mH)) && void 0 !== zH ? zH : fr.g;
              TL(fH)
            }
        })), (0, OH.d)("refetchCode", (() => {
          lH.featureFlags.canSeePlayerWrittenText && AH && BL.current && (MB || (vL(), XH ? uH.k.AX("EditLobbyCode", QH) : uH.k.AX("EditCodeBlock", {
            pos: QH,
            canChangePos: xH.current
          })))
        }));
        const eL = (0, rH.useCallback)((() => {
            AH && (gH(!1), window.open("/docs", "_blank", "popup=yes,width=1200,height=800"))
          }), [AH]),
          qL = (0, rH.useCallback)((() => {
            gH(!1)
          }), []);
        (0, rH.useEffect)((() => {
          AH && MB && ("docsButton" === UB && qH ? (0, TS.e)("docsButton") : UB && TS.i.includes(UB) && !qH && (gH(!0), BB(!1)))
        }), [AH, MB, UB, qH, BB]);
        const gL = (0, rH.useCallback)((() => {
          BB(!1)
        }), [BB]);
        (0, rH.useEffect)((() => {
          AH && MB && WB && ("aiHelperButton" === bB && HB ? (0, TS.e)("aiHelperButton") : bB && TS.d.includes(bB) && !HB && (BB(!0), gH(!1)))
        }), [AH, MB, WB, bB, HB, BB]), (0, rH.useEffect)((() => {
          if (!AH || !MB) return;
          const HH = XH ? "worldCode" : "codeBlock";
          return (0, TS.z)(HH, !0), () => {
            (0, TS.z)(HH, !1)
          }
        }), [AH, MB, XH]), (0, rH.useEffect)((() => {
          if (AH) return () => {
            kB.current ? kB.current = !1 : (0, TS.w)()
          }
        }), [AH]), (0, rH.useEffect)((() => {
          (0, TS.A)("exportButton", !!xB)
        }), [xB]);
        const {
          t: NL
        } = (0, sH.B)(), RL = !HB && hB > zB, jL = RL ? YH.O : YH.D, nL = (0, rH.useCallback)(((HH, BH) => {
          uH.k.AX("CodeEditorGoToLine", {
            path: HH,
            line: BH
          }), bL(HH)
        }), [bL]), FL = (0, rH.useCallback)((HH => {
          ML.current = HH
        }), []), DL = function(HH, BH) {
          const [LH, AH] = (0, rH.useState)(null);
          return (0, rH.useEffect)((() => {
            if (!BH) return void AH(null);
            let LH = !1;
            return ir(HH).then((HH => {
              LH || AH(HH)
            }), (HH => {
              console.error("[CodeEditor] could not collect the imported plugins", HH), LH || AH(null)
            })), () => {
              LH = !0
            }
          }), [HH, BH]), LH
        }(jB, AH);
        (0, rH.useEffect)((() => {
          DL && iB && !DL.includes(iB) && (pB(null), HL(null), XH && !BL.current && TL(AL.current))
        }), [iB, DL, XH, TL]), WL.current = {
          collabState: NB,
          ensureJoinedPath: UL,
          waitForLobbyPath: VL,
          pullLobbyFiles: oL,
          t: NL,
          canEditCode: !!MB
        }, QL.current || (QL.current = new rS({
          getLobbyFiles: () => ({
            ...zL.current,
            ...(0, jr.i)(dB.current.assets)
          }),
          deleteSchematic: async HH => {
            const BH = await tS({
              action: "remove",
              path: HH,
              expectedRevision: dB.current.revision
            });
            aB(BH)
          },
          getActivePath: () => AL.current,
          getCollabSnapshot: () => {
            var HH;
            if (rL.current) return null;
            const BH = null === (HH = WL.current) || void 0 === HH ? void 0 : HH.collabState;
            return BH ? {
              doc: BH.doc,
              version: BH.version,
              clientID: BH.clientID,
              docKey: BH.docKey,
              httpConfig: BH.httpConfig
            } : null
          },
          replaceActiveDoc: (HH, BH) => {
            var LH, AH;
            return null !== (LH = null === (AH = ML.current) || void 0 === AH ? void 0 : AH.call(ML, HH, BH)) && void 0 !== LH && LH
          },
          ensureJoined: HH => WL.current.ensureJoinedPath(HH),
          createFile: (HH, BH) => {
            !1 !== (null === BH || void 0 === BH ? void 0 : BH.focus) && (CL.current = HH), CH.gameBridge.send("sendCodeCollab", {
              dB: lr.e.CreateFile,
              aB: (0, lr.u)({
                kind: "lobby",
                path: AL.current
              }),
              Zt: HH
            })
          },
          renameFile: (HH, BH) => {
            const LH = (0, lr.u)({
              kind: "lobby",
              path: AL.current
            });
            AL.current === HH && (EL.current = {
              fromPath: HH,
              toPath: BH
            }, JB(BH)), CH.gameBridge.send("sendCodeCollab", {
              dB: lr.e.RenameFile,
              aB: LH,
              Zt: HH,
              dt: BH
            })
          },
          deleteFile: HH => {
            OL(HH)
          },
          waitForLobbyPath: (HH, BH, LH) => WL.current.waitForLobbyPath(HH, BH, LH),
          pullLobbyFiles: () => WL.current.pullLobbyFiles(),
          setMessage: (HH, BH) => {
            xL({
              message: HH,
              type: BH
            })
          },
          onUnlinked: () => {
            GL(!1)
          },
          t: HH => WL.current.t(HH),
          canEditCode: () => WL.current.canEditCode,
          getStorageKey: () => {
            const {
              gameNameWithVariation: HH,
              lobbyName: BH
            } = CH.gameBridge.latest("connectedGame");
            return (0, pr.h)(HH, BH)
          }
        }));
        const wL = (0, rH.useCallback)((async HH => {
            const BH = QL.current;
            if (!BH) return !1;
            try {
              return await BH.writeLobbyFiles(HH)
            } catch (LH) {
              return console.error("World Code AI: couldn't write the change", LH), !1
            }
          }), []),
          ZL = (0, rH.useCallback)((async HH => {
            var BH, LH;
            const AH = null === (BH = HH.find((HH => HH.path === yS.b))) || void 0 === BH ? void 0 : BH.text,
              rH = LL.current;
            return void 0 !== AH && "codeBlock" === (null === rH || void 0 === rH ? void 0 : rH.kind) && (!(null === (LH = ML.current) || void 0 === LH || !LH.call(ML, (0, lr.u)(rH), AH)) && (GH.current = AH, XB(AH), !0))
          }), []),
          dL = (0, rH.useCallback)((async () => {
            try {
              var HH, BH;
              const LH = await th(fr.g);
              return !1 === LH.canSeeCode ? null : null !== (HH = LH.files) && void 0 !== HH ? HH : {
                [fr.g]: null !== (BH = LH.code) && void 0 !== BH ? BH : ""
              }
            } catch (LH) {
              return console.error("World Code AI: couldn't read World Code for a code block", LH), null
            }
          }), []),
          aL = (0, rH.useMemo)((() => ({
            [yS.b]: EB
          })), [EB]),
          sL = (0, rH.useCallback)(((HH, BH) => {
            uH.k.AX("CodeEditorGoToLine", {
              path: yS.b,
              line: BH
            })
          }), []);
        (0, rH.useEffect)((() => {
          HB && AH && CB(hB)
        }), [HB, AH, hB]);
        const JL = (0, rH.useCallback)((() => {
            var HH, BH;
            fL();
            const LH = (0, lH.isTouchscreen)() ? "open World Code again" : `press ${null!==(HH=null===(BH=DB.w.OpenCodeEditor)||void 0===BH?void 0:BH[0])&&void 0!==HH?HH:"F8"}`,
              AH = XH ? `\ud83e\udd16 Try out your change, then ${LH} to tell the AI Helper how it went.` : "\ud83e\udd16 Click the code block to try your change, then open it again to tell the AI Helper how it went.";
            uH.k.AX("chat", {
              content: [{
                str: AH,
                style: {
                  color: bH.K.cyanUiText
                }
              }]
            })
          }), [fL, XH]),
          iL = (0, rH.useCallback)((HH => {
            const BH = QH,
              LH = xH.current;
            XH || !BH || CH.gameBridge.lookup("codeBlockClickable", BH) ? (0, Hh.i)(HH, {
              submit: () => {
                fL(), uH.k.AX("chat", {
                  content: [{
                    str: "\ud83e\udd16 Testing your change. The AI Helper comes back in a moment.",
                    style: {
                      color: bH.K.cyanUiText
                    }
                  }]
                }), !XH && BH && setTimeout((() => {
                  CH.gameBridge.send("clickCodeBlock", BH)
                }), 1e3)
              },
              reopen: () => {
                (0, jH.t)() || (XH ? uH.k.AX("EditLobbyCode", BH) : uH.k.AX("EditCodeBlock", {
                  pos: BH,
                  canChangePos: LH
                }))
              }
            }) : JL()
          }), [fL, XH, QH, JL]),
          pL = (0, rH.useCallback)((() => {
            BB(!1)
          }), [BB]),
          yL = (0, rH.useRef)(IL);
        yL.current = IL;
        const HA = (0, rH.useCallback)((function(HH) {
            let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            uH.k.AX("WorldCodeAiDraft", {
              text: HH,
              send: BH
            }), yL.current(), uH.k.AX("EditLobbyCode", QH)
          }), [QH]),
          BA = (0, rH.useCallback)((HH => {
            yL.current(), HH.codeBlock ? uH.k.AX("EditCodeBlock", {
              pos: [...HH.pos],
              canChangePos: HH.canChangePos
            }) : uH.k.AX("EditLobbyCode", QH)
          }), [QH]);
        (0, OH.d)("WorldCodeAiDraft", (HH => {
          XH && (AB(HH), BB(!0))
        }));
        const LA = !!MB && !!UB && TS.i.includes(UB),
          AA = !!MB && !!bB && TS.d.includes(bB);
        (0, rH.useEffect)((() => {
          AH && HB && WB && !LA && gH(!1)
        }), [AH, HB, WB, LA]);
        const rA = (0, rH.useCallback)((() => {
            BB(!1), gH(!1)
          }), [BB]),
          {
            cX: SA,
            setWorld: hA,
            toggleWorld: tA
          } = function(HH) {
            let {
              showAi: BH,
              showDocs: LH,
              showChat: AH,
              hideOtherRightPanels: SH
            } = HH;
            const [hH, tH] = (0, rH.useState)("hidden"), zH = (0, rH.useRef)(null), CH = (0, rH.useCallback)((() => {
              zH.current = null, tH((HH => "hidden" === HH ? HH : (0, oS.g)() ? "hidden" : "shown"))
            }), []);
            (0, rH.useEffect)((() => {
              (BH || LH) && CH()
            }), [BH, LH, CH]), (0, rH.useEffect)((() => {
              AH && CH()
            }), [AH, CH]);
            const EH = "hidden" !== hH && (0, oS.g)();
            (0, rH.useLayoutEffect)((() => {
              if (EH) {
                const HH = document.activeElement;
                HH instanceof HTMLElement && HH.closest(".cm-content") && (zH.current = HH, HH.blur())
              } else {
                var HH;
                null === (HH = zH.current) || void 0 === HH || HH.focus(), zH.current = null
              }
            }), [EH]);
            const XH = (0, rH.useCallback)((() => {
              "hidden" === hH ? (tH("shown"), (0, oS.g)() && SH()) : tH("hidden")
            }), [hH, SH]);
            return {
              cX: hH,
              setWorld: tH,
              toggleWorld: XH
            }
          }({
            showAi: HB,
            showDocs: qH,
            showChat: NH,
            hideOtherRightPanels: rA
          }),
          zA = HB && null !== uB && WB,
          CA = (0, rH.useCallback)((() => {
            AB(null)
          }), []),
          [EA, XA] = (0, rH.useState)(null);
        (0, OH.d)("WorldCodeAiSelection", (HH => {
          AH && (XA(HH), BB(!0), gH(!1))
        }));
        const GA = (0, rH.useCallback)((() => {
          XA(null)
        }), []);
        (0, OH.d)("chat", (HH => {
          let {
            content: BH
          } = HH;
          if (!XH && null === YB.current) return;
          const LH = Array.isArray(BH) ? BH : [BH],
            AH = LH.some((HH => {
              var BH;
              return (null === HH || void 0 === HH || null === (BH = HH.style) || void 0 === BH ? void 0 : BH.color) === bH.K.redUiText
            })),
            rH = LH.map((HH => {
              var BH;
              const LH = null !== (BH = null === HH || void 0 === HH ? void 0 : HH.str) && void 0 !== BH ? BH : HH;
              return "string" === typeof LH ? LH : ""
            })).join("");
          AH && /world code|error/i.test(rH) && (SB((HH => [...HH, rH].slice(-10))), tB((HH => HH + 1)), (0, Hh.d)(rH))
        })), (0, rH.useEffect)((() => {
          if (!AH || !XH || !YL) return;
          let HH = !1;
          return (async (BH, LH) => {
            const AH = await (null === (BH = QL.current) || void 0 === BH ? void 0 : BH.tryRestoreHandle());
            !HH && AH && (GL(!0), null === (LH = QL.current) || void 0 === LH || LH.startWhenReady())
          })(), () => {
            HH = !0
          }
        }), [AH, XH, YL]), (0, rH.useEffect)((() => {
          var HH;
          AH || (null === (HH = QL.current) || void 0 === HH || HH.stopContinuousSync(), vL(!1), mB.current && (mB.current = !1, CH.gameBridge.send("sendChatMessage", {
            kt: "//export",
            channelName: null
          })))
        }), [AH, vL]);
        const YA = (0, rH.useCallback)((async () => {
            if (YL && QL.current) try {
              if (!await QL.current.linkFolder()) return;
              GL(!0), await QL.current.startWhenReady()
            } catch (HH) {
              console.error("[WorldCodeDirectorySync] Link failed", HH), xL({
                message: NL("codeEditor:directorySyncError"),
                type: "warning"
              })
            }
          }), [YL, NL]),
          uA = (0, rH.useCallback)((async () => {
            QL.current && await QL.current.unlinkFolder()
          }), []),
          QA = (0, rH.useCallback)((() => {
            YL ? XL ? uA() : YA() : Sr.NotificationProvider.showAlertPopup({
              title: "codeEditor:directorySyncUnsupported",
              subtitle: "codeEditor:directorySyncUnsupportedBody",
              confirmText: "general:ok",
              middleScreenPopupContainerClassName: Dr.c
            })
          }), [YL, XL, YA, uA]),
          WA = XH && "hidden" !== SA;
        return (0, EH.jsxs)(hH.b, {
          className: PL()("CodeEditorBg", {
            CodeEditorLight: fH,
            WorldShown: "hidden" !== SA,
            WorldTouchControl: "touchControls" === pH
          }),
          close: IL,
          escDoesExit: !0,
          show: AH,
          togglePointerLock: !1,
          globallyUniqueKey: XH ? "LobbyCodeEditor" : "CodeBlockEditor",
          children: [(0, EH.jsx)(PS.c, {
            tutorial: "welcome",
            step: "codeBlockIntro",
            text: NL("codeEditor:tutorialCodeBlockIntro"),
            enabled: !!MB && !XH
          }), (0, EH.jsx)(PS.c, {
            tutorial: "welcome",
            step: "worldCodeIntro",
            text: (0, EH.jsxs)(EH.Fragment, {
              children: [(0, EH.jsx)("p", {
                children: NL("codeEditor:tutorialWorldCodeWelcome")
              }), (0, EH.jsxs)("ul", {
                className: "TutorialStepList",
                children: [(0, EH.jsx)("li", {
                  children: NL("codeEditor:tutorialWorldCodeUseSetUp")
                }), (0, EH.jsx)("li", {
                  children: NL("codeEditor:tutorialWorldCodeUseReact")
                }), (0, EH.jsx)("li", {
                  children: NL("codeEditor:tutorialWorldCodeUseRun")
                })]
              })]
            }),
            enabled: !!MB && XH
          }), (0, EH.jsx)("div", {
            className: "CodeEditorTitle",
            children: XH ? "World Code" : "Code Block"
          }), (0, EH.jsxs)("div", {
            className: "CodeEditorTopBar",
            children: [(0, EH.jsxs)("div", {
              className: "CodeEditorTopLeft",
              children: [(0, EH.jsx)(dH.g, {
                tooltipInner: NL(xB ? "codeEditor:exportTooltip" : "codeEditor:exportOwnerOnly"),
                delayShow: xB ? void 0 : 0,
                hideTooltip: "exportButton" === vB,
                children: (0, EH.jsx)(PS.h, {
                  tutorial: "welcome",
                  step: "exportButton",
                  text: NL("codeEditor:tutorialExport"),
                  enabled: !!MB,
                  children: (0, EH.jsx)(YH.u, {
                    className: "CodeEditorButton",
                    disabled: !xB,
                    onClick: () => {
                      "exportButton" === vB && ((0, TS.e)("exportButton"), kB.current = !0), mB.current = !0, IL()
                    },
                    padDestructive: !0,
                    children: NL("codeEditor:exportWorld")
                  })
                })
              }), (0, EH.jsx)(iS, {
                cX: SA,
                setWorld: hA,
                toggleWorld: tA,
                aiShown: zA,
                closeAi: pL
              })]
            }), (0, EH.jsxs)("div", {
              className: "CodeEditorTopRight",
              children: [MB && (0, EH.jsx)(dH.g, {
                tooltipInner: NL("codeEditor:helpTooltip"),
                hideTooltip: "helpButton" === vB,
                children: (0, EH.jsx)(PS.h, {
                  tutorial: "welcome",
                  step: "helpButton",
                  text: NL("codeEditor:tutorialHelpButton"),
                  placement: "bottom",
                  children: (0, EH.jsx)(YH.i, {
                    className: "CodeEditorHelpButton",
                    ariaLabel: NL("codeEditor:helpTooltip"),
                    onClick: () => {
                      (0, TS.e)("helpButton"), Sr.NotificationProvider.showCustomPopup({
                        body: HH => (0, EH.jsx)(US, {
                          close: HH
                        }),
                        unlockPointerKey: "codeEditorTutorials",
                        middleScreenPopupContainerClassName: Dr.c
                      })
                    },
                    children: (0, EH.jsx)("div", {
                      className: "CodeEditorHelpButtonInner",
                      children: (0, EH.jsx)(WH.c, {
                        name: "circle-question"
                      })
                    })
                  })
                })
              }), (0, EH.jsx)(dH.g, {
                tooltipInner: NL("codeEditor:closeTooltip"),
                children: (0, EH.jsx)("div", {
                  className: "CodeEditorCloseButtonClickZone",
                  onClick: () => {
                    IL()
                  },
                  children: (0, EH.jsx)(YH.q, {
                    className: "CodeEditorCloseButton"
                  })
                })
              })]
            })]
          }), (0, EH.jsx)(qr, {
            peers: null !== (BH = null === NB || void 0 === NB ? void 0 : NB.peers) && void 0 !== BH ? BH : []
          }), (0, EH.jsxs)("div", {
            className: PL()("CodeEditorMainArea", {
              WorldCovers: "always" === IS(SA),
              WorldCoversWhenNarrow: "narrow" === IS(SA)
            }),
            children: [NH && wH && (0, EH.jsx)(oS.e, {
              side: "left",
              defaultSize: "max(16rem, 24%)",
              onClose: () => {
                nH(!1)
              },
              children: (0, EH.jsx)(mS, {
                inputRef: FH
              })
            }), XH && (0, EH.jsx)(wr, {
              schematics: wB.assets,
              onManageSchematic: HH => {
                MB && Sr.NotificationProvider.showCustomPopup({
                  body: BH => (0, EH.jsx)(XS, {
                    initialPath: HH,
                    onChanged: aB,
                    onClose: BH
                  }),
                  unlockPointerKey: "worldCodeSchematics",
                  middleScreenPopupContainerClassName: Dr.c
                })
              },
              files: jB,
              activePath: sB,
              canEdit: !!MB,
              directoryLinked: XL,
              pluginNames: null !== DL && void 0 !== DL ? DL : Ch,
              activePluginName: iB,
              activePluginFile: yB,
              onSelect: bL,
              onSelectPlugin: kL,
              onToggleDirectorySync: QA,
              onCreate: HH => {
                CL.current = HH, CH.gameBridge.send("sendCodeCollab", {
                  dB: lr.e.CreateFile,
                  aB: (0, lr.u)({
                    kind: "lobby",
                    path: AL.current
                  }),
                  Zt: HH
                })
              },
              onRename: (HH, BH) => {
                AL.current === HH && (EL.current = {
                  fromPath: HH,
                  toPath: BH
                }, JB(BH)), CH.gameBridge.send("sendCodeCollab", {
                  dB: lr.e.RenameFile,
                  aB: (0, lr.u)({
                    kind: "lobby",
                    path: AL.current
                  }),
                  Zt: HH,
                  dt: BH
                })
              },
              onRenameFolder: (HH, BH) => {
                const [LH] = (0, Kr.i)([AL.current], HH, BH);
                LH && (EL.current = {
                  fromPath: LH[0],
                  toPath: LH[1]
                }, JB(LH[1])), CH.gameBridge.send("sendCodeCollab", {
                  dB: lr.e.RenameFolder,
                  aB: (0, lr.u)({
                    kind: "lobby",
                    path: AL.current
                  }),
                  Zt: HH,
                  dt: BH
                })
              },
              onDelete: OL
            }), (0, EH.jsx)("div", {
              className: PL()("CodeEditorMessage", {
                CodeEditorMessageHidden: !VH.message,
                CodeEditorMessageSuccess: "success" === VH.type
              }),
              children: VH.message && (0, EH.jsx)("div", {
                className: "CodeEditorMessageText",
                children: VH.message
              })
            }), (0, EH.jsx)(rH.Suspense, {
              fallback: (0, EH.jsx)("div", {
                className: "CodeEditorContent",
                children: (0, EH.jsx)(mH.d, {})
              }),
              children: (0, EH.jsx)(Lh, {
                isLobbyCode: XH,
                code: NB ? NB.doc : GH.current,
                files: XH ? jB : void 0,
                activePath: XH ? sB : void 0,
                pluginName: iB,
                pluginFile: yB,
                pluginSource: iB && yB ? null === (LH = Nr.g[iB]) || void 0 === LH ? void 0 : LH.files[yB] : void 0,
                onChange: cL,
                canEditCode: MB,
                setTemporaryMessage: xL,
                close: IL,
                showTooltips: oH,
                lightMode: fH,
                collabState: NB,
                setActiveDocReplacer: FL,
                showAiHints: WB && cH,
                canAiChangeCode: !!MB && (XH || !!xH.current),
                onRemoteDocChange: HH => {
                  var BH;
                  (GH.current = HH, XH) ? (FB((BH => ({
                    ...BH,
                    [AL.current]: HH
                  }))), null === (BH = QL.current) || void 0 === BH || BH.onDocTextChanged(AL.current, HH)) : XB(HH)
                }
              })
            }), (qH || zA || "hidden" !== SA) && (0, EH.jsxs)(fS, {
              cX: SA,
              worldPanel: (0, EH.jsx)(sS, {
                shown: SA,
                setShown: hA,
                canInsertCode: !!MB && !iB
              }),
              closeWorld: () => {
                hA("hidden")
              },
              aiShown: zA,
              defaultWidth: qH ? "40%" : "max(18rem, 36%)",
              children: [qH && (0, EH.jsx)(oS.e, {
                onClose: LA ? void 0 : qL,
                children: (0, EH.jsx)(rH.Suspense, {
                  fallback: (0, EH.jsx)("div", {
                    className: "DocsPanel",
                    children: (0, EH.jsx)(mH.d, {})
                  }),
                  children: (0, EH.jsx)(Ah, {
                    popOutDocs: eL,
                    hideDocs: qL,
                    tutorialEnabled: !!MB
                  })
                })
              }), zA && (0, EH.jsx)(oS.e, {
                onClose: AA ? void 0 : pL,
                children: (0, EH.jsx)(rH.Suspense, {
                  fallback: (0, EH.jsx)("div", {
                    className: "CodeEditorPanelLoading",
                    children: (0, EH.jsx)(mH.d, {})
                  }),
                  children: (0, EH.jsx)(rh, {
                    target: uB,
                    chatKey: `${qB.gameNameWithVariation}/${qB.lobbyName}/aiHelper`,
                    historyKey: `${qB.gameNameWithVariation}/${qB.lobbyName}/${uB.key}`,
                    files: uB.codeBlock ? aL : jB,
                    activePath: uB.codeBlock ? yS.b : sB,
                    canEdit: !!MB && (uB.codeBlock ? !!xH.current : !iB),
                    isLoaded: null !== NB,
                    errors: rB,
                    errorCount: hB,
                    applyFiles: uB.codeBlock ? ZL : wL,
                    submit: JL,
                    testRun: iL,
                    close: pL,
                    goToLine: uB.codeBlock ? sL : nL,
                    openWorldCode: uB.codeBlock ? HA : void 0,
                    readWorldCode: uB.codeBlock ? dL : void 0,
                    viewChunk: Sh,
                    viewGameState: hh,
                    openTarget: MB ? BA : void 0,
                    draft: LB,
                    onDraftUsed: CA,
                    selection: EA,
                    onSelectionUsed: GA
                  }, uB.key)
                })
              })]
            })]
          }), !XH && MB && xH.current && (0, EH.jsx)(YS, {
            length: EB.length
          }), (null === SL || void 0 === SL ? void 0 : SL.fallback) && (0, EH.jsx)(uS, {
            fallback: SL.fallback,
            onGoToLine: nL
          }), (0, EH.jsxs)("div", {
            className: "CodeEditorButtons",
            "data-pad-hint-bar-avoid": !0,
            children: [(0, EH.jsx)(dH.g, {
              tooltipInner: NL(fH ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
              placement: "top",
              children: (0, EH.jsx)(YH.i, {
                className: "CodeEditorButton CodeEditorThemeButton",
                ariaLabel: NL(fH ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
                onClick: () => {
                  KH(!fH)
                },
                children: (0, EH.jsx)(WH.c, {
                  name: fH ? "moon" : "sun-bright"
                })
              })
            }), (0, EH.jsx)(dH.g, {
              tooltipInner: NL(WA ? "codeEditorWorld:submitCodeTooltip" : "codeEditor:submitCodeTooltip"),
              placement: "top",
              children: (0, EH.jsx)(YH.u, {
                className: "CodeEditorButton",
                onClick: () => {
                  fL(WA)
                },
                padDefaultFocus: !0,
                children: NL("codeEditor:submitCode")
              })
            }), (0, EH.jsx)(dH.g, {
              tooltipInner: NL(qH ? "codeEditor:hideDocsTooltip" : "codeEditor:showDocsTooltip"),
              placement: "top",
              hideTooltip: "docsButton" === UB || "hideDocsButton" === UB,
              children: (0, EH.jsx)(PS.h, {
                tutorial: TB,
                step: qH ? "hideDocsButton" : "docsButton",
                text: NL(qH ? "codeEditor:tutorialHideDocs" : "codeEditor:tutorialDocs"),
                enabled: !!MB,
                placement: "top",
                waitForClick: !0,
                onPrevious: qH && "welcome" === TB ? qL : void 0,
                children: (0, EH.jsx)(YH.D, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    (0, TS.e)(qH ? "hideDocsButton" : "docsButton"), gH(!qH), BB(!1)
                  },
                  children: NL(qH ? "codeEditor:hideDocs" : "codeEditor:showDocs")
                })
              })
            }), WB && (0, EH.jsx)(PS.h, {
              tutorial: OB,
              step: HB ? "hideAiHelperButton" : "aiHelperButton",
              text: NL(HB ? "codeEditorAiTutorial:hideAiHelperButton" : "welcome" === OB ? "codeEditorAiTutorial:welcomeAiHelperButton" : "codeEditorAiTutorial:aiHelperButton"),
              enabled: !!MB,
              placement: "top",
              waitForClick: !0,
              onPrevious: HB && "welcome" === OB ? gL : void 0,
              children: (0, EH.jsx)(jL, {
                className: "CodeEditorButton",
                onClick: () => {
                  (0, TS.e)(HB ? "hideAiHelperButton" : "aiHelperButton"), BB(!HB), gH(!1)
                },
                children: HB ? "Hide AI Helper" : RL ? "Fix error with AI" : "AI Helper"
              })
            }), wH && (0, EH.jsx)(dH.g, {
              tooltipInner: NL(NH ? "codeEditorChat:hideChatTooltip" : "codeEditorChat:showChatTooltip"),
              placement: "top",
              children: (0, EH.jsx)(YH.D, {
                className: "CodeEditorButton",
                onClick: () => {
                  DH.current = !NH, nH(!NH)
                },
                children: NL(NH ? "codeEditorChat:hideChat" : "codeEditorChat:showChat")
              })
            }), (0, EH.jsx)(dH.g, {
              tooltipInner: NL("hidden" === SA ? "codeEditorWorld:showWorldTooltip" : "codeEditorWorld:hideWorldTooltip"),
              placement: "top",
              children: (0, EH.jsx)(YH.D, {
                className: "CodeEditorButton CodeEditorWorldButton",
                onClick: tA,
                children: NL("hidden" === SA ? "codeEditorWorld:showWorld" : "codeEditorWorld:hideWorld")
              })
            }), (0, EH.jsx)(dH.g, {
              tooltipInner: NL("codeEditor:formatCodeTooltip"),
              placement: "top",
              children: (0, EH.jsx)(YH.i, {
                className: "CodeEditorButton",
                onClick: () => {
                  uH.k.AX("FormatCode")
                },
                children: NL("codeEditor:formatCode")
              })
            }), (0, EH.jsx)(dH.g, {
              tooltipInner: NL("codeEditor:copyCodeTooltip"),
              placement: "top",
              children: (0, EH.jsx)(YH.i, {
                className: "CodeEditorButton",
                onClick: () => {
                  navigator.clipboard.writeText(GH.current).then((() => {
                    xL({
                      message: "Successfully copied code to clipboard",
                      type: "success"
                    })
                  })).catch((() => {
                    xL({
                      message: "Failed to copy code to clipboard",
                      type: "warning"
                    })
                  }))
                },
                children: NL("codeEditor:copyCode")
              })
            }), (0, EH.jsx)(dH.g, {
              tooltipInner: NL(oH ? "codeEditor:hideTooltipsTooltip" : "codeEditor:showTooltipsTooltip"),
              placement: "top",
              children: (0, EH.jsx)(YH.i, {
                className: "CodeEditorButton",
                onClick: () => {
                  IH(!oH)
                },
                children: NL(oH ? "codeEditor:hideTooltips" : "codeEditor:showTooltips")
              })
            }), !XH && (0, EH.jsx)(dH.g, {
              tooltipInner: NL("codeEditor:worldCodeTooltip"),
              placement: "top",
              hideTooltip: "worldCodeButton" === vB,
              children: (0, EH.jsx)(PS.h, {
                tutorial: "welcome",
                step: "worldCodeButton",
                text: NL("codeEditor:tutorialWorldCodeButton"),
                enabled: !!MB,
                placement: "top",
                waitForClick: !0,
                children: (0, EH.jsx)(YH.D, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    "worldCodeButton" === vB && ((0, TS.e)("worldCodeButton"), kB.current = !0), IL(), uH.k.AX("EditLobbyCode", QH)
                  },
                  children: NL("codeEditor:worldCode")
                })
              })
            }), (gB || hL || WB) && (0, EH.jsx)(dH.g, {
              tooltipInner: NL("codeEditor:moreOptionsTooltip"),
              placement: "top",
              children: (0, EH.jsx)(YH.i, {
                className: "CodeEditorButton CodeEditorMoreButton",
                onClick: () => {
                  KB(!0)
                },
                children: (0, EH.jsx)(WH.c, {
                  name: "ellipsis"
                })
              })
            })]
          }), lB && (0, EH.jsx)(tr.e, {
            middleScreenPopupContainerClassName: "CodeEditorMoreOptionsPopup",
            close: () => {
              KB(!1)
            },
            body: (0, EH.jsx)(vS, {
              engine: hL,
              onSetEngine: KL,
              aiHints: WB ? {
                shown: cH,
                setShown: eH
              } : null,
              variation: gB ? {
                name: IB,
                setName: fB,
                reload: lL
              } : null
            })
          })]
        })
      }));
    var Gh = LH(37474);
    const Yh = new Set(["inventory", "ironChestPasskeyInput"]);
    const uh = new Set(["makeReport", "makeDiscordReport", "inviteLink"]);

    function Qh(HH) {
      return "inventory" === HH
    }
    const Wh = (0, rH.memo)((function() {
      const {
        openEverythingMenuName: HH,
        openInGameMenuName: BH
      } = (0, RH.m)(["openEverythingMenuName", "openInGameMenuName"]), LH = (0, kH.e)("fullInventory"), SH = (0, rH.useRef)(null), hH = (0, IB.g)();
      (0, OH.d)("toggleMenu", (HH => {
        var BH;
        if (!hH.shown) return;
        const LH = RH.c.get("openInGameMenuName");
        let AH = HH.split("|")[0];
        const rH = null !== (BH = HH.split("|")[1]) && void 0 !== BH ? BH : null;
        if (("closeCurrentMenu" === rH && LH || AH === LH) && (SH.current = null, AH = null), null !== AH && (tH = !CH.gameBridge.latest("localPlayerAlive"), zH = AH, tH && Yh.has(zH))) return void(null !== CH.gameBridge.latest("inventory").chest && CH.gameBridge.send("closeChest", null));
        var tH, zH;
        const EH = "closeCurrentMenu" === rH ? null : rH;
        SH.current !== EH && (SH.current = EH), null !== AH && (0, Mr.x)(Mr.d, {
          keepsMovement: Qh(AH)
        }), RH.c.set({
          openInGameMenuName: AH
        })
      })), (0, kH.b)("localPlayerAliveSet", (HH => {
        HH || function() {
          (0, Gh.c)();
          const HH = RH.c.get("openInGameMenuName");
          null !== HH && Yh.has(HH) && RH.c.set({
            openInGameMenuName: null
          })
        }()
      }));
      const tH = (0, rH.useCallback)((HH => () => {
          uH.k.AX("toggleMenu", HH)
        }), []),
        zH = (0, rH.useRef)({
          cantCrouchIfNotFullscreen: tH("cantCrouchIfNotFullscreen"),
          makeReport: tH("makeReport"),
          makeDiscordReport: tH("makeDiscordReport"),
          editBook: tH("editBook"),
          editNameTag: tH("editNameTag"),
          inventory: tH("inventory"),
          inviteLink: tH("inviteLink"),
          writeOnBoard: tH("writeOnBoard"),
          codeEditor: tH("codeEditor"),
          lobbyCodeEditor: tH("lobbyCodeEditor"),
          customLobbyBlockEditor: tH("customLobbyBlockEditor"),
          ironChestPasskeyInput: tH("ironChestPasskeyInput"),
          petUi: tH("petUi")
        }),
        XH = (0, rH.useCallback)((() => {
          RH.c.set({
            openInGameMenuName: null
          })
        }), []),
        GH = (0, rH.useRef)(null);
      return (0, rH.useEffect)((() => {
        if (BH) {
          var HH;
          (0, Mr.x)(Mr.d, {
            keepsMovement: Qh(BH)
          }), GH.current = uh.has(BH) ? null !== (HH = RH.c.get("openEverythingMenuName")) && void 0 !== HH ? HH : GH.current : null, RH.c.set({
            openEverythingMenuName: null
          })
        } else {
          const HH = GH.current;
          GH.current = null, null !== HH && null === RH.c.get("openEverythingMenuName") && RH.c.set({
            openEverythingMenuName: HH
          }), SH.current = null, (0, Mr.t)(Mr.d)
        }
      }), [BH]), (0, rH.useEffect)((() => {
        null !== HH && XH()
      }), [HH, XH]), (0, EH.jsxs)(EH.Fragment, {
        children: [(0, EH.jsx)(AH.i, {
          show: "clientGame" === BH
        }), (0, EH.jsx)(Lr, {
          show: "cantCrouchIfNotFullscreen" === BH,
          onOpen: zH.current.cantCrouchIfNotFullscreen,
          onClose: XH
        }), (0, EH.jsx)(Gr, {
          show: "makeReport" === BH,
          onOpen: zH.current.makeReport,
          onClose: XH
        }), (0, EH.jsx)(Wr, {
          show: "makeDiscordReport" === BH,
          onOpen: zH.current.makeDiscordReport,
          onClose: XH
        }), (0, EH.jsx)(BL, {
          show: "editBook" === BH,
          onOpen: zH.current.editBook,
          onClose: XH
        }), (0, EH.jsx)(yB, {
          show: "editNameTag" === BH,
          onOpen: zH.current.editNameTag,
          onClose: XH
        }), LH && (0, EH.jsx)(yA, {
          show: "inventory" === BH,
          onOpen: zH.current.inventory,
          onClose: XH,
          variation: SH.current
        }), (0, EH.jsx)(fB, {
          show: "inviteLink" === BH,
          onClose: XH,
          option: SH.current
        }), (0, EH.jsx)(eH, {
          show: "retentionFeatures" === BH,
          onClose: XH
        }), (0, EH.jsx)(pB, {
          show: "writeOnBoard" === BH,
          onOpen: zH.current.writeOnBoard,
          onClose: XH
        }), (0, EH.jsx)(Xh, {
          show: "lobbyCodeEditor" === BH,
          onOpen: zH.current.lobbyCodeEditor,
          onClose: XH,
          isLobbyCode: !0
        }), (0, EH.jsx)(Xh, {
          show: "codeEditor" === BH,
          onOpen: zH.current.codeEditor,
          onClose: XH,
          isLobbyCode: !1
        }), (0, EH.jsx)(vr, {
          show: "customLobbyBlockEditor" === BH,
          onOpen: zH.current.customLobbyBlockEditor,
          onClose: XH
        }), (0, EH.jsx)(UL, {
          show: "ironChestPasskeyInput" === BH,
          onOpen: zH.current.ironChestPasskeyInput,
          onClose: XH
        }), (0, EH.jsx)(br, {
          togglePointerLock: !0,
          show: "petUi" === BH,
          onOpen: zH.current.petUi,
          onClose: XH
        })]
      })
    }))
  },
  37375: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => Nh
    });
    LH(37384);
    var AH = LH(1871),
      rH = LH(45),
      SH = LH(1038),
      hH = LH.n(SH),
      tH = LH(4097),
      zH = LH(1450),
      CH = LH(1967),
      EH = LH(1225);

    function XH() {
      const HH = 2e3,
        [BH, LH] = (0, rH.useState)(null),
        [AH, SH] = (0, rH.useState)(null),
        XH = (0, rH.useRef)(null);
      (0, zH.d)("showBottomMessage", (BH => {
        let {
          message: LH,
          timeoutLength: AH = HH,
          type: rH
        } = BH;
        SH({
          message: LH,
          type: rH
        }), clearTimeout(XH.current), XH.current = setTimeout((() => {
          SH(null)
        }), AH)
      })), (0, zH.d)("showPermanentBottomMessage", (HH => {
        LH(HH)
      })), (0, rH.useEffect)((() => ((0, tH.b)((() => {
        LH(null)
      })), () => {
        clearTimeout(XH.current)
      })), []);
      const GH = AH || BH;
      return GH ? (0, EH.jsx)("div", {
        className: hH()("BottomScreenMessage", GH.type),
        children: (0, EH.jsx)(CH.b, {
          text: GH.message
        })
      }) : null
    }
    var GH = LH(2515),
      YH = LH(18),
      uH = LH(1998),
      QH = LH(1509),
      WH = LH(2630);

    function MH() {
      let HH;
      const BH = () => {
          clearTimeout(HH), HH = setTimeout((() => {
            uH.gameBridge.latest("connectedGame").replay || (YH.k.AX("kickedForAfk"), uH.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, QH.navigatePreserveSearch)("/"))
          }), 3e5)
        },
        LH = () => {
          clearTimeout(HH)
        };
      return window.addEventListener("focus", LH), window.addEventListener("blur", BH), () => {
        window.removeEventListener("blur", BH), window.removeEventListener("focus", LH), clearTimeout(HH)
      }
    }
    var xH = LH(1061),
      vH = LH(37390),
      PH = LH(2628),
      TH = LH(1365),
      UH = LH(3465),
      VH = LH(1315);
    const OH = (0, rH.memo)((function() {
      return (0, UH.b)(), (0, EH.jsx)(bH, {})
    }));
    class bH extends rH.Component {
      constructor(HH) {
        super(HH), this.showQueue = [], this.slideDuration = 1, this.state = {
          showQueue: [],
          currState: null
        }, this.currMessage = null, this.justShowed = !1
      }
      componentDidMount() {
        this.sub = YH.k.subscribe("TopRightHelper", (HH => {
          this.showQueue.push(HH), this.setState({
            showQueue: this.showQueue
          })
        }))
      }
      componentWillUnmount() {
        YH.k.unsubscribe(this.sub), clearTimeout(this.slideOutTimeout), clearTimeout(this.hidingMessageTimeout)
      }
      componentDidUpdate(HH, BH) {
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
        let HH, BH, LH, AH, rH, SH = !0;
        if (this.state.showQueue.length > 0 && null === this.state.currState ? (this.currMessage = this.state.showQueue[0], this.justShowed = !0, HH = "slideIn") : "slideOut" === this.state.currState ? HH = "slideOut" : null === this.currMessage && (SH = !1), this.currMessage) {
          const SH = this.currMessage.color || "rgb(102, 102, 102)";
          BH = {
            width: this.currMessage.width || "250px",
            height: this.currMessage.height || "70px",
            animation: "1s " + ("slideOut" === HH ? "HelperSlideKeyFrameReverse" : "HelperSlideKeyFrame")
          }, LH = {
            backgroundColor: SH
          }, AH = {
            animation: "2s " + ("slideOut" === HH ? "CloseNotification" : "ExpandNotification")
          }, rH = {
            fontSize: this.currMessage.fontSize || "16px",
            animation: "2s " + ("slideOut" === HH ? "textDisappear" : "textAppear")
          }
        }
        return SH ? (0, EH.jsxs)("div", {
          className: "TopRightHelperBox",
          style: {
            ...BH
          },
          children: [(0, EH.jsx)("div", {
            className: "LeftSide",
            style: LH,
            children: (0, EH.jsx)(VH.c, {
              name: this.currMessage.icon,
              className: `fa-${this.currMessage.iconSizeMult||3}x HelperIcon`
            })
          }), (0, EH.jsx)("div", {
            className: "RightSide",
            style: AH,
            children: (0, EH.jsx)("div", {
              className: "HelperText",
              style: rH,
              children: this.currMessage.text
            })
          })]
        }) : null
      }
    }
    var kH = LH(37396),
      mH = LH(1405);
    const oH = (0, mH.e)((HH => HH.PadSneakChip));

    function IH(HH) {
      const [BH, LH, AH] = function(HH) {
        const BH = parseInt(HH.substring(1), 16),
          LH = (BH >> 16) / 255,
          AH = (BH >> 8 & 255) / 255,
          rH = (255 & BH) / 255,
          SH = Math.max(LH, AH, rH),
          hH = Math.min(LH, AH, rH),
          tH = (SH + hH) / 2,
          zH = SH - hH;
        if (0 === zH) return [0, 0, tH];
        const CH = zH / (1 - Math.abs(2 * tH - 1));
        let EH;
        EH = SH === LH ? (AH - rH) / zH % 6 : SH === AH ? (rH - LH) / zH + 2 : (LH - AH) / zH + 4;
        return [(60 * EH + 360) % 360, CH, tH]
      }(HH), rH = 0 === LH ? 0 : Math.min(.6, LH + .03), SH = AH > .5 ? -1 : 1, hH = fH(AH + .09 * SH);
      return {
        panel: HH,
        slot: lH(BH, rH, hH),
        slotSelected: lH(BH, rH, fH(hH + .2 * SH)),
        slotUnavailable: lH(BH, rH, fH(AH + -.1 * SH))
      }
    }

    function fH(HH) {
      return Math.min(1, Math.max(0, HH))
    }

    function lH(HH, BH, LH) {
      const AH = (1 - Math.abs(2 * LH - 1)) * BH,
        rH = AH * (1 - Math.abs(HH / 60 % 2 - 1)),
        SH = LH - AH / 2;
      let hH;
      return hH = HH < 60 ? [AH, rH, 0] : HH < 120 ? [rH, AH, 0] : HH < 180 ? [0, AH, rH] : HH < 240 ? [0, rH, AH] : HH < 300 ? [rH, 0, AH] : [AH, 0, rH], "#" + hH.map((HH => function(HH) {
        return Math.round(255 * HH).toString(16).padStart(2, "0")
      }(HH + SH))).join("")
    }
    var KH = LH(37415),
      cH = LH(15),
      eH = LH(2051),
      qH = LH(4657),
      gH = LH(1390),
      NH = LH(2600),
      RH = LH(2605),
      jH = LH(37465),
      nH = LH(5288),
      FH = LH(1464),
      DH = LH(1123),
      wH = LH(619);

    function ZH(HH, BH, LH, AH) {
      HH.style.display = "";
      const rH = HH.offsetWidth,
        SH = HH.offsetHeight,
        hH = Math.min(Math.max((BH.left + BH.right) / 2 - rH / 2, 8), window.innerWidth - 8 - rH);
      let tH = BH.top - LH - SH;
      const zH = [...AH].sort(((HH, BH) => BH.top - HH.top));
      for (const CH of zH) hH < CH.right && hH + rH > CH.left && tH < CH.bottom && tH + SH > CH.top && (tH = CH.top - 8 - SH);
      return tH < 8 ? (HH.style.display = "none", null) : (HH.style.transform = `translate(${hH-BH.left}px, ${tH-BH.top}px)`, {
        left: hH,
        top: tH,
        right: hH + rH,
        bottom: tH + SH
      })
    }

    function dH(HH) {
      const BH = [];
      for (const LH of document.querySelectorAll(HH)) {
        const HH = LH.getBoundingClientRect();
        HH.width > 0 && "visible" === getComputedStyle(LH).visibility && BH.push(HH)
      }
      return BH
    }

    function aH(HH, BH) {
      return HH.clientX >= BH.left - 8 && HH.clientX <= BH.right + 8 && HH.clientY >= BH.top - 8 && HH.clientY <= BH.bottom + 8
    }
    var sH = LH(9577);
    class JH {
      constructor(HH) {
        this.deps = HH, this.phase = "idle", this.armTimer = null, this.suspended = !1
      }
      get locked() {
        return "locked" === this.phase
      }
      get offered() {
        return "armed" === this.phase || "ready" === this.phase
      }
      target(HH) {
        HH && "armed" === this.phase ? this.setPhase("ready") : HH || "ready" !== this.phase || this.setPhase("armed")
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
      hold(HH, BH) {
        this.suspended || (this.offered ? BH || this.setPhase("idle") : HH && "idle" === this.phase ? (this.setPhase("charging"), this.armTimer = setTimeout((() => {
          this.armTimer = null, this.onArm(), this.setPhase("armed")
        }), 1e3)) : HH || "charging" !== this.phase || this.setPhase("idle"))
      }
      onArm() {}
      setPhase(HH) {
        null !== this.armTimer && (clearTimeout(this.armTimer), this.armTimer = null);
        const BH = this.phase;
        this.phase = HH, this.deps.onPhase(HH, BH)
      }
    }
    const iH = 25 * Math.PI / 180,
      pH = 45 * Math.PI / 180;
    class yH extends JH {
      constructor() {
        super(...arguments), this.speed = 0, this.armedSpeed = 0
      }
      get lockedSpeed() {
        return this.armedSpeed
      }
      move(HH, BH, LH) {
        this.speed = LH;
        const AH = Math.hypot(HH, BH),
          rH = AH > 0 ? Math.acos(Math.min(1, -BH / AH)) : Math.PI;
        this.hold(AH >= .8 && rH <= iH, AH >= .5 && rH <= pH)
      }
      onArm() {
        this.armedSpeed = this.speed
      }
    }
    var HB = LH(1241);

    function BB(HH, BH) {
      const LH = (0, rH.useRef)(null),
        AH = (0, rH.useRef)(BH);
      return AH.current = BH, (0, rH.useEffect)((() => {
        if (!HH) return;
        const {
          create: BH,
          elementRef: rH,
          ringRef: SH,
          classPrefix: hH,
          keptBehindMovementPanels: tH,
          resizeEnds: zH
        } = AH.current, CH = {
          charging: `${hH}Charging`,
          armed: `${hH}Armed`,
          ready: `${hH}Ready`,
          locked: `${hH}Locked`
        };
        let EH = null;
        const XH = BH({
          onPhase: (HH, BH) => {
            const LH = rH.current;
            if (null !== LH) {
              for (const [BH, AH] of Object.entries(CH)) LH.classList.toggle(AH, BH === HH);
              if ("charging" === HH) EH = SH.current.animate([{
                strokeDashoffset: 1
              }, {
                strokeDashoffset: 0
              }], {
                delay: 400,
                duration: 600,
                fill: "forwards"
              });
              else if ("idle" === HH) {
                var hH;
                null === (hH = EH) || void 0 === hH || hH.cancel(), EH = null
              }
              var tH, zH;
              if ("armed" === HH && "charging" === BH && AH.current.onArmed(), "ready" === HH && sH.g.play("lockReady"), "locked" === HH) sH.g.play("lockLocked"), null === (tH = (zH = AH.current).onLocked) || void 0 === tH || tH.call(zH);
              "locked" === BH && AH.current.onUnlocked()
            }
          }
        });
        LH.current = XH;
        const GH = () => {
            XH.suspend()
          },
          YH = () => {
            "hidden" === document.visibilityState && GH()
          },
          uH = () => {
            zH ? XH.suspend() : XH.suspendArming()
          },
          QH = (0, HB.l)((HH => {
            let {
              keepsMovement: BH
            } = HH;
            BH && tH ? XH.suspendArming() : GH()
          }));
        return document.addEventListener("visibilitychange", YH), window.addEventListener("blur", GH), window.addEventListener("resize", uH), () => {
          QH(), document.removeEventListener("visibilitychange", YH), window.removeEventListener("blur", GH), window.removeEventListener("resize", uH), XH.cancel(), LH.current = null
        }
      }), [HH]), (0, eH.b)("localPlayerAliveSet", (() => {
        var HH;
        null === (HH = LH.current) || void 0 === HH || HH.suspend()
      })), LH
    }
    const LB = "data-joystick-tap";

    function AB(HH) {
      var BH, LH;
      const AH = null === (BH = (LH = HH).closest) || void 0 === BH ? void 0 : BH.call(LH, `[${LB}]`);
      return AH instanceof HTMLElement ? AH : null
    }
    class rB {
      constructor() {
        this.tap = null
      }
      get touchId() {
        var HH, BH;
        return null !== (HH = null === (BH = this.tap) || void 0 === BH ? void 0 : BH.id) && void 0 !== HH ? HH : null
      }
      land(HH, BH) {
        null === this.tap && (this.tap = {
          key: HH,
          id: BH.identifier,
          x: BH.clientX,
          y: BH.clientY
        }, (0, FH.e)(HH, !0))
      }
      slidFrom(HH) {
        const BH = this.tap,
          LH = BH ? HH.find((HH => HH.identifier === BH.id)) : void 0;
        return !LH || Math.hypot(LH.clientX - BH.x, LH.clientY - BH.y) <= 12 ? null : (this.end(!1), {
          identifier: BH.id,
          clientX: BH.x,
          clientY: BH.y
        })
      }
      end(HH) {
        const BH = this.tap;
        BH && (this.tap = null, (0, FH.e)(BH.key, !1), HH && BH.key.click())
      }
    }
    var SB = LH(2659),
      hB = LH(2673),
      tB = LH(1049),
      zB = LH(3770),
      CB = LH(2680);

    function EB(HH, BH, LH) {
      const AH = function(HH, BH, LH) {
        const AH = LH.map((LH => ({
            left: Math.max(0, LH.left),
            top: Math.max(0, LH.top),
            right: Math.min(HH, LH.right),
            bottom: Math.min(BH, LH.bottom)
          }))).filter((HH => HH.right > HH.left && HH.bottom > HH.top)),
          rH = [...new Set([0, BH, ...AH.flatMap((HH => [HH.top, HH.bottom]))])].sort(((HH, BH) => HH - BH)),
          SH = [];
        for (let hH = 0; hH < rH.length - 1; hH++) {
          const BH = rH[hH],
            LH = rH[hH + 1],
            tH = AH.filter((HH => HH.top <= BH && HH.bottom >= LH)).map((HH => [HH.left, HH.right])).sort(((HH, BH) => HH[0] - BH[0]));
          let zH = 0;
          for (const [HH, AH] of tH) HH > zH && SH.push({
            left: zH,
            top: BH,
            right: HH,
            bottom: LH
          }), zH = Math.max(zH, AH);
          zH < HH && SH.push({
            left: zH,
            top: BH,
            right: HH,
            bottom: LH
          })
        }
        return SH
      }(HH, BH, LH);
      if (0 === AH.length) return 'path("M0 0Z")';
      if (1 === AH.length && 0 === AH[0].left && 0 === AH[0].top && AH[0].right === HH && AH[0].bottom === BH) return "";
      const rH = HH => Math.round(10 * HH) / 10;
      return `path("${AH.map((HH=>`M${rH(HH.left)} ${rH(HH.top)}H${rH(HH.right)}V${rH(HH.bottom)}H${rH(HH.left)}Z`)).join("")}")`
    }

    function XB(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16;
      const rH = [],
        SH = 2 * LH / AH;
      for (let hH = 0; hH < AH; hH++) {
        const AH = BH - LH + hH * SH,
          tH = AH + SH,
          zH = Math.min(Math.max(BH, AH), tH) - BH,
          CH = Math.sqrt(Math.max(0, LH * LH - zH * zH));
        rH.push({
          left: HH - CH,
          top: AH,
          right: HH + CH,
          bottom: tH
        })
      }
      return rH
    }
    var GB = LH(9590),
      YB = LH(37442);

    function uB(HH) {
      const BH = HH.getBoundingClientRect(),
        LH = {
          left: BH.left,
          top: BH.top,
          right: BH.right,
          bottom: BH.bottom
        },
        AH = (0, jH.e)(HH);
      if (AH.whole) return [LH];
      const rH = function(HH) {
          const BH = HH.right - HH.left,
            LH = HH.bottom - HH.top,
            AH = Math.min(BH, LH) / 2,
            rH = (HH.left + HH.right) / 2,
            SH = (HH.top + HH.bottom) / 2;
          return BH >= LH ? [{
            left: HH.left + AH,
            top: HH.top,
            right: HH.right - AH,
            bottom: HH.bottom
          }, ...XB(HH.left + AH, SH, AH), ...XB(HH.right - AH, SH, AH)] : [{
            left: HH.left,
            top: HH.top + AH,
            right: HH.right,
            bottom: HH.bottom - AH
          }, ...XB(rH, HH.top + AH, AH), ...XB(rH, HH.bottom - AH, AH)]
        }(LH),
        SH = AH.keyBox;
      if (SH) {
        const HH = (LH.left + LH.right) / 2,
          BH = (LH.top + LH.bottom) / 2;
        rH.push({
          left: HH - SH.width / 2,
          top: BH - SH.height / 2,
          right: HH + SH.width / 2,
          bottom: BH + SH.height / 2
        })
      }
      return rH
    }

    function QB(HH) {
      const BH = HH.getBoundingClientRect();
      return 0 === BH.width && 0 === BH.height || "visible" !== getComputedStyle(HH).visibility ? [] : [(0, GB.r)(BH, 44)]
    }

    function WB(HH, BH) {
      (0, rH.useEffect)((() => {
        const LH = HH.current;
        if (!BH || !LH) return;
        const AH = () => {
          const HH = Array.from(document.querySelectorAll(".TouchComponentsButtons .TouchKeyHit, .TouchInteractHit")),
            BH = HH.find((HH => HH.classList.contains("TouchInteractHit")));
          BH !== rH && (rH && SH.unobserve(rH), rH = BH, BH && SH.observe(BH));
          const AH = Array.from(document.querySelectorAll(CB.c)),
            hH = [...HH.flatMap((HH => uB(HH))), ...AH.flatMap(QB)],
            tH = function(HH, BH) {
              const LH = BH.map((BH => ({
                left: BH.left - HH.left,
                top: BH.top - HH.top,
                right: BH.right - HH.left,
                bottom: BH.bottom - HH.top
              })));
              return EB(Math.ceil(HH.width), Math.ceil(HH.height), LH)
            }(LH.getBoundingClientRect(), hH);
          LH.style.clipPath !== tH && (LH.style.clipPath = tH)
        };
        let rH;
        const SH = new ResizeObserver((() => {
          AH()
        }));
        AH(), SH.observe(LH);
        const hH = LH.closest(".InGameUi"),
          tH = new MutationObserver(AH);
        hH && tH.observe(hH, {
          attributes: !0,
          attributeFilter: ["class", YB.i]
        });
        const zH = [(0, YH.m)(zB.b, AH), (0, YH.m)(CB.r, AH), (0, YH.m)(CB.e, AH)];
        return () => {
          SH.disconnect(), tH.disconnect();
          for (const HH of zH) HH();
          LH.style.clipPath = ""
        }
      }), [HH, BH])
    }
    var MB = LH(4818);

    function xB(HH) {
      var BH;
      let {
        onMove: LH,
        mode: AH,
        speedCurve: SH,
        autorun: hH = !1,
        keys: tH
      } = HH;
      const zH = (0, rH.useRef)(null),
        CH = (0, rH.useRef)(null),
        XH = (0, rH.useRef)(null),
        GH = (0, rH.useRef)(null),
        YH = (0, rH.useRef)(null),
        QH = (0, rH.useRef)(null),
        WH = (0, rH.useRef)(new rB).current,
        MH = (0, rH.useRef)(null),
        xH = (0, rH.useRef)(null),
        vH = (0, rH.useRef)(null),
        PH = (0, rH.useRef)(!1),
        TH = (0, rH.useRef)({
          clientX: 0,
          clientY: 0
        }),
        {
          t: UH
        } = (0, DH.B)(),
        OH = (0, MB.s)(AH),
        bH = (0, cH.m)(["notchSize"]).notchSize,
        kH = bH.left,
        mH = (0, rH.useRef)(16),
        oH = (0, hB.d)(),
        [IH, fH, lH] = "pinned" === AH ? SB.o : null !== (BH = oH.hudElements.joystick) && void 0 !== BH ? BH : SB.o,
        KH = "pinned" === AH ? null : oH.hudSafe,
        eH = Math.max(MB.o, MB.p * lH);
      WB(CH, "pinned" !== AH);
      const qH = function(HH, BH, LH, AH, SH) {
        const hH = (0, rH.useRef)(null),
          tH = () => {
            clearInterval(hH.current), hH.current = null
          },
          zH = BB(HH, {
            create: HH => new yH(HH),
            elementRef: BH,
            ringRef: LH,
            classPrefix: "Autorun",
            keptBehindMovementPanels: !0,
            resizeEnds: !0,
            onArmed: SH,
            onLocked: () => {
              hH.current = setInterval((() => {
                uH.gameBridge.lookup("dropAhead", null) && (sH.g.play("autorunLedgeStop"), zH.current.cancel())
              }), 100)
            },
            onUnlocked: () => {
              tH(), AH()
            }
          });
        return (0, rH.useEffect)((() => tH), []), zH
      }(hH, XH, MH, (() => {
        JH(), FH()
      }), (() => {
        gH(), null === vH.current && qH.current.suspend()
      }));

      function gH() {
        const HH = XH.current.getBoundingClientRect();
        vH.current = ZH(xH.current, HH, 80, dH(`.TouchInventoryKey, .TouchSprintKey, ${CB.c}`)), PH.current = null !== vH.current && aH(TH.current, vH.current)
      }

      function NH() {
        const {
          innerWidth: HH,
          innerHeight: BH
        } = window, LH = (0, CB.B)(KH, HH, BH, (0, CB.F)(bH, HH, BH), mH.current);
        return {
          left: LH[3],
          bottom: LH[2]
        }
      }

      function RH(HH) {
        XH.current.style.transform = `translate(${HH.x-eH}px, ${HH.y-eH}px)`
      }

      function jH(HH) {
        const BH = XH.current;
        BH.classList.add("Resting"), BH.classList.toggle("Returning", HH), BH.style.display = "fixed_hidden" === AH ? "none" : "block", RH(function() {
          const {
            innerWidth: HH,
            innerHeight: BH
          } = window, LH = NH(), AH = kH * HH / 100 + LH.left, rH = zH.current.offsetHeight || BH, SH = ((0, tB.e)(HH, BH) ? MB.i : MB.e) + LH.bottom;
          return {
            x: Math.min(HH - eH, Math.max(eH, AH + MB.l + IH * HH)),
            y: Math.min(rH - eH, Math.max(eH, rH - SH + fH * rH))
          }
        }())
      }
      const nH = (0, rH.useRef)({
        restFixed: jH,
        release: iH
      });

      function FH() {
        OH ? jH("fixed_shown" === AH) : "floating" === AH && (XH.current.style.display = "none"), LH({
          x: 0,
          y: 0
        })
      }

      function JH() {
        QH.current = null, YH.current = null, GH.current.style.transform = "translate(-50%, -50%)"
      }

      function iH(HH) {
        JH();
        const BH = qH.current;
        HH && null !== BH && void 0 !== BH && BH.lift() ? LH({
          x: 0,
          y: -BH.lockedSpeed
        }) : (null === BH || void 0 === BH || BH.cancel(), FH())
      }

      function pH(HH) {
        var BH;
        if (null === (BH = qH.current) || void 0 === BH || BH.startTouch(), "pinned" === AH) {
          const HH = XH.current.getBoundingClientRect();
          YH.current = {
            x: HH.left + HH.width / 2,
            y: HH.top + HH.height / 2
          }
        } else {
          YH.current = {
            x: HH.clientX,
            y: HH.clientY
          }, XH.current.classList.remove("Resting", "Returning"), XH.current.style.display = "block";
          const BH = zH.current.getBoundingClientRect();
          RH({
            x: HH.clientX - BH.left,
            y: HH.clientY - BH.top
          }), hH && (TH.current = {
            clientX: HH.clientX,
            clientY: HH.clientY
          }, gH())
        }
      }

      function LB(HH) {
        const BH = WH.slidFrom(Array.from(HH.touches));
        BH && null === QH.current && (QH.current = BH.identifier, pH(BH));
        const AH = Array.from(HH.touches).find((HH => HH.identifier === QH.current));
        if (null === YH.current || null === QH.current || (0, wH.M)(AH)) return;
        const rH = qH.current,
          hH = AH.clientX - YH.current.x,
          tH = AH.clientY - YH.current.y,
          zH = Math.hypot(hH, tH),
          CH = zH > 0 ? Math.min(1, eH / zH) : 0,
          EH = hH * CH,
          XH = tH * CH,
          uH = Math.hypot(EH, XH) / eH,
          MH = SH && uH > 0 ? SH(uH) / uH : 1;
        GH.current.style.transform = `translate(calc(-50% + ${EH}px), calc(-50% + ${XH}px))`;
        const xH = EH / eH,
          UH = XH / eH;
        if (LH({
            x: xH * MH,
            y: UH * MH
          }), null !== rH && null !== vH.current) {
          rH.move(xH, UH, uH * MH), TH.current = {
            clientX: AH.clientX,
            clientY: AH.clientY
          };
          const HH = PH.current;
          PH.current = aH(AH, vH.current), PH.current !== HH && rH.target(PH.current)
        }
      }
      return nH.current = {
        restFixed: jH,
        release: iH
      }, (0, rH.useLayoutEffect)((() => {
        if (!OH) return;
        const HH = () => {
          mH.current = (0, CB.K)(document)
        };
        HH(), null === QH.current && nH.current.restFixed(!1);
        const BH = new ResizeObserver((() => {
          HH(), null === QH.current && nH.current.restFixed(!1)
        }));
        BH.observe(zH.current);
        const LH = XH.current;
        return () => {
          BH.disconnect(), LH.classList.remove("Resting", "Returning"), null === QH.current && (LH.style.display = "", LH.style.transform = "")
        }
      }), [OH, AH, bH, IH, fH, eH, KH]), (0, rH.useEffect)((() => {
        const HH = (HH, BH) => void 0 === BH || null === BH || Array.from(HH.touches).some((HH => HH.identifier === BH)) ? null : {
            lifted: "touchend" === HH.type && Array.from(HH.changedTouches).some((HH => HH.identifier === BH))
          },
          BH = BH => {
            const LH = HH(BH, QH.current);
            LH && nH.current.release(LH.lifted);
            const AH = HH(BH, WH.touchId);
            AH && WH.end(AH.lifted)
          },
          LH = () => {
            null !== QH.current && nH.current.release(!1), WH.end(!1)
          },
          AH = () => {
            "hidden" === document.visibilityState && LH()
          };
        document.addEventListener("touchstart", BH, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchmove", BH, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchend", BH, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchcancel", BH, {
          capture: !0,
          passive: !0
        }), window.addEventListener("blur", LH), document.addEventListener("visibilitychange", AH);
        const rH = (0, HB.l)((HH => {
          let {
            keepsMovement: BH
          } = HH;
          BH || LH()
        }));
        return () => {
          rH(), document.removeEventListener("touchstart", BH, {
            capture: !0
          }), document.removeEventListener("touchmove", BH, {
            capture: !0
          }), document.removeEventListener("touchend", BH, {
            capture: !0
          }), document.removeEventListener("touchcancel", BH, {
            capture: !0
          }), window.removeEventListener("blur", LH), document.removeEventListener("visibilitychange", AH)
        }
      }), []), (0, rH.useEffect)((() => {
        const HH = zH.current,
          BH = HH => {
            HH.preventDefault()
          };
        return HH.addEventListener("touchstart", BH, {
          passive: !1
        }), () => {
          HH.removeEventListener("touchstart", BH)
        }
      }), []), (0, EH.jsxs)("div", {
        ref: zH,
        className: "JoystickZone",
        style: OH && (IH > 0 || lH > 1 || NH().left > 0) ? {
          width: `max(35vw, calc(${kH+100*IH}vw + ${NH().left+MB.l+eH+24}px))`
        } : void 0,
        onTouchStart: function(HH) {
          const BH = Array.from(HH.changedTouches).filter((HH => {
            var BH;
            return null === (BH = zH.current) || void 0 === BH ? void 0 : BH.contains(HH.target)
          }));
          for (const AH of BH) {
            const HH = AB(AH.target);
            HH && WH.land(HH, AH)
          }
          const LH = BH.find((HH => null === AB(HH.target)));
          LH && null === QH.current && (QH.current = LH.identifier, pH(LH), LB(HH))
        },
        onTouchMove: LB,
        children: [(0, EH.jsx)("div", {
          ref: CH,
          className: "JoystickTouchLayer"
        }), (0, EH.jsxs)("div", {
          ref: XH,
          className: "Joystick",
          style: {
            width: 2 * eH + "px",
            height: 2 * eH + "px",
            transform: "pinned" === AH ? "translate(4vw, calc(50vh - 50%))" : void 0
          },
          children: [(0, EH.jsx)("div", {
            className: "JoystickBase",
            style: {
              width: 2 * eH + "px",
              height: 2 * eH + "px"
            }
          }), hH && (0, EH.jsxs)(EH.Fragment, {
            children: [(0, EH.jsx)("svg", {
              className: "AutorunRing",
              viewBox: "0 0 100 100",
              children: (0, EH.jsx)("circle", {
                ref: MH,
                cx: "50",
                cy: "50",
                r: "48",
                pathLength: 1
              })
            }), (0, EH.jsxs)("div", {
              ref: xH,
              className: "AutorunTarget",
              children: [(0, EH.jsx)(VH.c, {
                name: "lock"
              }), UH("settingsMenu:autoRun")]
            })]
          }), (0, EH.jsx)("div", {
            ref: GH,
            className: "JoystickKnob",
            style: {
              width: `${eH}px`,
              height: `${eH}px`
            }
          })]
        }), tH]
      })
    }
    var vB = LH(257);
    const PB = {
        deadZone: .1,
        creepEnd: .35,
        fullSpeedAt: .85,
        creepMin: .06,
        creepMax: .22
      },
      TB = {
        short_creep: {
          ...PB,
          creepEnd: .25,
          fullSpeedAt: .75
        },
        long_creep: {
          ...PB,
          creepEnd: .45,
          fullSpeedAt: .95
        },
        small_dead_zone: {
          ...PB,
          deadZone: .05
        },
        control: PB
      };

    function UB(HH) {
      return function(HH, BH) {
        const {
          deadZone: LH,
          creepEnd: AH,
          fullSpeedAt: rH,
          creepMin: SH,
          creepMax: hH
        } = HH;
        if (BH < LH) return 0;
        if (BH < AH) {
          const HH = (BH - LH) / (AH - LH);
          return SH + (hH - SH) * HH * HH
        }
        return BH < rH ? hH + (1 - hH) * (BH - AH) / (rH - AH) : 1
      }(TB[vB.e.mobile_walk_curve_v1], HH)
    }

    function VB(HH, BH) {
      const LH = (0, rH.useRef)(null);
      return (0, rH.useLayoutEffect)((() => (jH.h.set(HH, LH.current, BH), () => {
        jH.h.set(HH, null)
      })), [HH, BH]), LH
    }
    const OB = "C",
      bB = "J",
      kB = "U",
      mB = "A",
      oB = "G",
      IB = "X",
      fB = (0, rH.forwardRef)((function(HH, BH) {
        let {
          slot: LH,
          canvasZone: AH = !1,
          lit: SH = !1,
          label: tH,
          className: zH,
          children: CH,
          ...XH
        } = HH;
        return (0, rH.useEffect)((() => (YH.k.AX(zB.b), () => {
          YH.k.AX(zB.b)
        })), []), (0, EH.jsx)("div", {
          ref: BH,
          className: hH()("TouchKeyHit", `TouchSlot${LH}`, zH, {
            CanvasZone: AH
          }),
          ...XH,
          children: (0, EH.jsxs)("div", {
            className: hH()("TouchKey", {
              Lit: SH,
              Labelled: void 0 !== tH
            }),
            children: [CH, void 0 !== tH && (0, EH.jsx)("span", {
              className: "TouchKeyLabel",
              children: tH
            })]
          })
        })
      }));

    function lB(HH, BH) {
      (0, rH.useEffect)((() => () => {
        BH.current && (BH.current = !1, (0, RH.B)(HH, !1, {
          isTrusted: !0,
          timeStamp: performance.now()
        }))
      }), [])
    }
    var KB = LH(37457);
    class cB extends JH {
      constructor() {
        super(...arguments), this.start = {
          x: 0,
          y: 0
        }, this.moved = !1
      }
      press(HH, BH) {
        this.start = {
          x: HH,
          y: BH
        }, this.moved = !1, this.startTouch(), this.hold(!0, !1)
      }
      move(HH, BH, LH) {
        const AH = Math.hypot(HH - this.start.x, BH - this.start.y) <= 12;
        this.moved ||= !AH;
        const rH = null !== LH && BH < this.start.y - 12 && aH({
          clientX: HH,
          clientY: BH
        }, LH);
        this.hold(!this.moved, AH || rH)
      }
    }
    const eB = new Set;

    function qB(HH) {
      const BH = new Set(Array.from(HH.touches, (HH => HH.identifier)));
      for (const LH of eB) {
        for (const HH of LH.ids) BH.has(HH) || LH.ids.delete(HH);
        if (0 === LH.ids.size) {
          eB.delete(LH);
          LH.pressesOnPointerDown && "touchstart" === HH.type && Array.from(HH.changedTouches).some((HH => HH.target instanceof Node && LH.element.contains(HH.target))) || LH.release()
        }
      }
    }
    if ("undefined" !== typeof window)
      for (const sh of ["touchstart", "touchmove"]) window.addEventListener(sh, qB, {
        capture: !0,
        passive: !0
      });

    function gB(HH) {
      let {
        pressesOnPointerDown: BH = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const LH = (0, rH.useRef)(HH);
      LH.current = HH;
      const AH = (0, rH.useRef)({
        ids: new Set,
        element: null,
        pressesOnPointerDown: BH,
        release: () => {
          LH.current()
        }
      });
      (0, rH.useEffect)((() => {
        const HH = AH.current;
        return () => {
          eB.delete(HH), HH.ids.clear()
        }
      }), []);
      const SH = HH => {
        const BH = AH.current;
        for (const LH of Array.from(HH.changedTouches)) BH.ids.delete(LH.identifier);
        0 === BH.ids.size && eB.delete(BH)
      };
      return {
        onTouchStart: HH => {
          const BH = AH.current;
          BH.element = HH.currentTarget;
          for (const LH of Array.from(HH.changedTouches)) LH.target instanceof Node && HH.currentTarget.contains(LH.target) && BH.ids.add(LH.identifier);
          BH.ids.size > 0 && eB.add(BH)
        },
        onTouchEnd: SH,
        onTouchCancel: SH
      }
    }

    function NB(HH, BH) {
      return null === BH ? null : (0, KB.b)(HH.nativeEvent.changedTouches, BH.id)
    }

    function RB(HH) {
      let {
        lockable: BH
      } = HH;
      const {
        t: LH
      } = (0, DH.B)(), AH = "round" === (0, SB.X)().hudShape, SH = (0, rH.useRef)(!1);
      lB(NH.s.Jump, SH);
      const hH = (0, rH.useRef)(null),
        tH = (0, rH.useRef)(null),
        zH = (0, rH.useRef)(null),
        CH = (0, rH.useRef)(null),
        XH = (0, rH.useRef)(null),
        GH = (0, rH.useRef)(null),
        YH = (0, rH.useRef)(!1),
        uH = (HH, BH) => {
          SH.current = HH, (0, RH.B)(NH.s.Jump, HH, BH)
        },
        QH = function() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            isTrusted: !0,
            timeStamp: performance.now()
          };
          SH.current && (hH.current && (0, FH.e)(hH.current, !1), uH(!1, HH))
        },
        WH = BB(BH, {
          create: HH => new cB(HH),
          elementRef: hH,
          ringRef: tH,
          classPrefix: "JumpLock",
          keptBehindMovementPanels: !1,
          resizeEnds: !1,
          onArmed: () => {
            const HH = hH.current.getBoundingClientRect(),
              BH = zH.current.parentElement,
              LH = BH.getBoundingClientRect(),
              AH = {
                left: LH.left + BH.clientLeft,
                top: LH.top + BH.clientTop,
                right: LH.right - BH.clientLeft,
                bottom: LH.bottom - BH.clientTop
              };
            if (XH.current = ZH(zH.current, AH, 16, dH(`.TouchKeyHit:not(.JumpKey) > .TouchKey, .TouchInventoryKey, .TouchSprintKey, ${CB.c}`)), null === XH.current) return void WH.current.suspend();
            const rH = XH.current;
            GH.current = {
              left: Math.min(HH.left, rH.left),
              top: rH.top,
              right: Math.max(HH.right, rH.right),
              bottom: HH.bottom
            }, YH.current = null !== CH.current && aH({
              clientX: CH.current.x,
              clientY: CH.current.y
            }, rH)
          },
          onUnlocked: () => {
            null === CH.current && QH()
          }
        }),
        MH = HH => {
          var BH;
          CH.current = null, null === (BH = WH.current) || void 0 === BH || BH.cancel(), QH(HH)
        },
        xH = gB((() => {
          MH()
        })),
        vH = HH => {
          const BH = CH.current;
          var LH;
          return null === BH ? null !== (LH = WH.current) && void 0 !== LH && LH.locked ? null : "lifted" : NB(HH, BH) ? "lifted" : (0, KB.f)(HH.nativeEvent.touches, BH.id) ? null : "dropped"
        };
      return (0, EH.jsxs)(fB, {
        ref: hH,
        slot: bB,
        className: "JumpKey",
        onTouchStart: HH => {
          xH.onTouchStart(HH), (0, FH.e)(HH.currentTarget, !0), null === CH.current || (0, KB.f)(HH.nativeEvent.touches, CH.current.id) || MH();
          const BH = HH.changedTouches[0];
          var LH;
          null === CH.current && BH && (CH.current = {
            id: BH.identifier,
            x: BH.clientX,
            y: BH.clientY
          }, null === (LH = WH.current) || void 0 === LH || LH.press(BH.clientX, BH.clientY));
          SH.current || uH(!0, HH.nativeEvent)
        },
        onTouchMove: HH => {
          const BH = CH.current,
            LH = NB(HH, BH);
          if (!LH) return;
          const AH = WH.current;
          if (null === AH || void 0 === AH || AH.move(LH.clientX, LH.clientY, GH.current), null !== AH && void 0 !== AH && AH.offered) {
            const HH = aH(LH, XH.current);
            HH !== YH.current && (YH.current = HH, AH.target(HH))
          }
          BH.x = LH.clientX, BH.y = LH.clientY
        },
        onTouchEnd: HH => {
          var BH;
          xH.onTouchEnd(HH);
          const LH = vH(HH);
          null !== LH && ("dropped" !== LH ? (CH.current = null, null !== (BH = WH.current) && void 0 !== BH && BH.lift() ? (0, FH.e)(HH.currentTarget, !1) : QH(HH.nativeEvent)) : MH(HH.nativeEvent))
        },
        onTouchCancel: HH => {
          xH.onTouchCancel(HH), null !== vH(HH) && MH(HH.nativeEvent)
        },
        children: [(0, EH.jsx)(VH.c, {
          name: "arrow-up-from-line"
        }), BH && (0, EH.jsxs)(EH.Fragment, {
          children: [(0, EH.jsx)("span", {
            className: "JumpLockBadge",
            children: (0, EH.jsx)(VH.c, {
              name: "lock"
            })
          }), (0, EH.jsx)("svg", {
            className: "JumpLockRing",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            children: (0, EH.jsx)("rect", {
              ref: tH,
              x: "2",
              y: "2",
              width: "96",
              height: "96",
              rx: AH ? 48 : 0,
              pathLength: 1
            })
          }), (0, EH.jsxs)("div", {
            ref: zH,
            className: "JumpLockTarget",
            children: [(0, EH.jsx)(VH.c, {
              name: "lock"
            }), LH("settingsMenu:jumpLock")]
          })]
        })]
      })
    }
    var jB = LH(37467);

    function nB(HH) {
      let {
        atHome: BH
      } = HH;
      const {
        t: LH
      } = (0, DH.B)(), AH = (SH = (0, PH.j)("runningSpeed"), tH = (0, PH.j)("walkingSpeed"), null !== SH && null !== tH && SH > tH);
      var SH, tH;
      const CH = (0, SB.s)((0, hB.d)().hudElements, "sprint"),
        XH = (0, zH.e)(jB.d, (0, jB.g)());
      return (0, rH.useEffect)((() => {
        AH && !CH || (0, jB.i)(!0)
      }), [AH, CH]), (0, rH.useEffect)((() => () => {
        (0, jB.i)(!0)
      }), []), AH ? (0, EH.jsx)("div", {
        className: hH()("TouchSprintHit", {
          AtHome: BH
        }),
        role: "switch",
        "aria-checked": XH,
        "aria-label": LH("touchKeys:sprint"),
        [LB]: "",
        onClick: () => {
          (0, jB.i)(!(0, jB.g)())
        },
        children: (0, EH.jsx)("div", {
          className: hH()("TouchKey TouchSprintKey", {
            Lit: XH
          }),
          children: (0, EH.jsx)(VH.c, {
            name: XH ? "person-running" : "person-walking"
          })
        })
      }) : null
    }
    var FB = LH(9598),
      DB = LH(9592);

    function wB(HH) {
      const BH = HH.getBoundingClientRect();
      return BH.width > 0 && BH.height > 0 ? (0, GB.h)(BH) : null
    }

    function ZB(HH) {
      const BH = HH.ownerDocument.documentElement.classList,
        LH = HH.classList.contains("ShopKey") ? "HudHide-shop" : HH.classList.contains("BagKey") ? "HudHide-bag" : null;
      return null !== LH && (BH.contains(LH) || BH.contains("HudHide-inventory")) ? null : wB(HH)
    }

    function dB(HH) {
      const BH = wB(HH),
        LH = HH.firstElementChild;
      if (null === BH) return null;
      const {
        x: AH,
        y: rH
      } = (0, GB.d)(BH), SH = LH.offsetWidth / 2, hH = LH.offsetHeight / 2;
      return {
        left: AH - SH,
        top: rH - hH,
        right: AH + SH,
        bottom: rH + hH
      }
    }

    function aB(HH, BH) {
      const LH = HH.ownerDocument.createElement("div");
      LH.className = `TouchSlotProbe TouchSlot${BH}`, HH.append(LH);
      const AH = wB(LH);
      return LH.remove(), AH
    }
    const sB = `.TouchInventoryKey, .TouchSprintKey, ${CB.c}`;

    function JB(HH, BH) {
      const LH = BH.map((BH => ({
        slot: BH,
        face: aB(HH, BH)
      })));
      if (LH.every((HH => {
          let {
            face: BH
          } = HH;
          return null === BH
        }))) return null;
      return function(HH, BH) {
        const LH = [...BH],
          AH = [],
          rH = [];
        for (const {
            face: hH,
            slot: tH
          }
          of HH) null !== hH && (LH.some((HH => (0, GB.n)(hH, HH, DB.c))) ? rH.push(tH) : (AH.push(tH), LH.push(hH)));
        const SH = [...AH, ...rH];
        return HH.map((HH => {
          let {
            slot: BH,
            face: LH
          } = HH;
          return null === LH ? BH : SH.shift()
        }))
      }(LH, [...[...HH.querySelectorAll(":scope > .TouchKeyHit")].filter((HH => HH.classList.contains("BoostKey") || !BH.some((BH => HH.classList.contains(`TouchSlot${BH}`))))).map(dB), ...[...HH.ownerDocument.querySelectorAll(sB)].map(ZB)].filter((HH => null !== HH)))
    }
    const iB = new WeakMap;
    class pB {
      constructor(HH) {
        this.zones = HH, this.followed = new Map, this.onStart = HH => {
          if (this.releaseMissing(HH.touches), HH.target instanceof HTMLCanvasElement)
            for (let LH = 0; LH < HH.changedTouches.length; LH++) {
              var BH;
              const {
                identifier: AH,
                clientX: rH,
                clientY: SH
              } = HH.changedTouches[LH];
              this.release(AH);
              const hH = this.zones.hitZone(rH, SH);
              if (!hH) continue;
              const {
                key: tH
              } = hH;
              null === (BH = iB.get(tH)) || void 0 === BH || BH.cancel();
              const zH = {
                hit: hH.element,
                key: tH,
                x: hH.x,
                y: hH.y,
                reach: .6 * hH.radius
              };
              this.followed.set(AH, zH), (0, FH.e)(hH.element, !0), yB(zH, rH, SH)
            }
        }, this.onMove = HH => {
          this.releaseMissing(HH.touches);
          for (let BH = 0; BH < HH.changedTouches.length; BH++) {
            const {
              identifier: LH,
              clientX: AH,
              clientY: rH
            } = HH.changedTouches[BH], SH = this.followed.get(LH);
            SH && yB(SH, AH, rH)
          }
        }, this.onEnd = HH => {
          for (let BH = 0; BH < HH.changedTouches.length; BH++) this.release(HH.changedTouches[BH].identifier)
        }, this.onVisibilityChange = () => {
          document.hidden && this.releaseAll()
        }
      }
      start() {
        const HH = {
          passive: !0
        };
        return document.addEventListener("touchstart", this.onStart, HH), document.addEventListener("touchmove", this.onMove, HH), document.addEventListener("touchend", this.onEnd, HH), document.addEventListener("touchcancel", this.onEnd, HH), document.addEventListener("visibilitychange", this.onVisibilityChange), () => {
          document.removeEventListener("touchstart", this.onStart), document.removeEventListener("touchmove", this.onMove), document.removeEventListener("touchend", this.onEnd), document.removeEventListener("touchcancel", this.onEnd), document.removeEventListener("visibilitychange", this.onVisibilityChange), this.releaseAll()
        }
      }
      releaseMissing(HH) {
        for (const BH of [...this.followed.keys()])(0, KB.f)(HH, BH) || this.release(BH)
      }
      releaseAll() {
        for (const HH of [...this.followed.keys()]) this.release(HH)
      }
      release(HH) {
        const BH = this.followed.get(HH);
        if (!BH) return;
        this.followed.delete(HH);
        for (const rH of this.followed.values())
          if (rH.key === BH.key) return;
        (0, FH.e)(BH.hit, !1);
        const {
          key: LH
        } = BH, AH = LH.style.translate;
        LH.style.translate = "", AH && iB.set(LH, LH.animate({
          translate: [AH, "0 0"]
        }, {
          duration: 150,
          easing: "ease-out"
        }))
      }
    }

    function yB(HH, BH, LH) {
      let {
        key: AH,
        x: rH,
        y: SH,
        reach: hH
      } = HH;
      const tH = BH - rH,
        zH = LH - SH,
        CH = Math.min(1, hH / (Math.hypot(tH, zH) || 1));
      AH.style.translate = `${tH*CH}px ${zH*CH}px`
    }
    var HL = LH(1475),
      BL = LH(81),
      LL = LH(1352),
      AL = LH(30);
    const rL = "threeFingerHintShown",
      SL = {
        android: "touchHint:threeFingerAndroid",
        ios: "touchHint:threeFingerIos"
      };
    let hL = 0,
      tL = !1;

    function zL() {
      const HH = new Set;
      let BH = -1 / 0,
        LH = -1 / 0,
        AH = null,
        rH = 0;
      const SH = () => {
          HH.clear()
        },
        hH = SH => {
          if (SH.touches.length > 0) return;
          for (let BH = 0; BH < SH.changedTouches.length; BH++) HH.add(SH.changedTouches[BH].identifier);
          const hH = HH.size;
          if (hH < 3 || !(0, HB.A)()) return;
          if (rH = hH, null !== AH) return;
          const tH = performance.now(),
            zH = BH >= tH - 200;
          AH = setTimeout((() => {
            if (AH = null, !(0, HB.A)()) return;
            const HH = LH >= tH - 200 || document.hidden;
            ! function(HH, BH) {
              var LH;
              const AH = (0, BL.getOperatingSystem)();
              hL < 5 && (hL++, (0, HL.reportAnalyticsClick)({
                id: "touch.os_cancel",
                value: null === BH ? `${AH}:${HH}` : `${AH}:${HH}:${BH}`
              })), null === BH && (tL || !0 === AL.e.getItem(rL) || (tL = !0, AL.e.setItem(rL, !0), LL.NotificationProvider.showAlertPopup({
                title: "touchHint:threeFingerTitle",
                subtitle: null !== (LH = SL[AH]) && void 0 !== LH ? LH : "touchHint:threeFingerOther",
                confirmText: "general:ok",
                disablePressBackgroundToClose: !0,
                unlockPointerKey: "threeFingerHint"
              })))
            }(rH, HH ? "hide" : zH ? "blur" : null)
          }), 500)
        },
        tH = () => {
          LH = performance.now()
        },
        zH = () => {
          BH = performance.now()
        },
        CH = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("touchstart", SH, CH), document.addEventListener("touchcancel", hH, CH), document.addEventListener("visibilitychange", tH), window.addEventListener("blur", zH), window.addEventListener("resize", tH), window.addEventListener("orientationchange", tH), () => {
        document.removeEventListener("touchstart", SH, CH), document.removeEventListener("touchcancel", hH, CH), document.removeEventListener("visibilitychange", tH), window.removeEventListener("blur", zH), window.removeEventListener("resize", tH), window.removeEventListener("orientationchange", tH), null !== AH && clearTimeout(AH)
      }
    }
    const CL = () => {
      const HH = (0, qH.k)(),
        BH = (0, gH.C)();
      return HH || BH
    };

    function EL(HH) {
      (0, jH.l)(HH.x, HH.y), 0 === HH.x && 0 === HH.y || YH.k.AX("stickMoved")
    }
    const XL = (0, rH.memo)((function() {
        const HH = CL(),
          {
            joystickMode: BH,
            touchSpeedCurve: LH,
            autorun: AH
          } = (0, cH.m)(["clientEscMenuOptions"]).clientEscMenuOptions;
        return (0, rH.useEffect)((() => ((0, nH.k)(NH.w.TouchControls, NH.w.TouchControls), () => {
          (0, nH.k)(NH.w.TouchControls, 0), (0, jH.l)(0, 0)
        })), []), (0, rH.useEffect)(zL, []), (0, EH.jsx)("div", {
          className: hH()("TouchMovementWrapper", {
            Hidden: HH
          }),
          "data-camera-keeper": "",
          children: (0, EH.jsx)(xB, {
            onMove: EL,
            mode: BH,
            speedCurve: LH ? UB : void 0,
            autorun: AH,
            keys: (0, EH.jsx)(nB, {
              atHome: !(0, MB.s)(BH)
            })
          })
        })
      })),
      GL = (0, rH.memo)((function() {
        const HH = CL(),
          {
            clientEscMenuOptions: BH
          } = (0, cH.m)(["clientEscMenuOptions"]),
          LH = BH.touchActionButtons;
        (0, rH.useEffect)((() => new pB(jH.h).start()), []), (0, rH.useEffect)((() => {
          YH.k.AX(zB.b)
        }), [HH]);
        const AH = (0, rH.useRef)(null),
          SH = function(HH, BH) {
            const [LH, AH] = (0, rH.useState)((() => (0, FB.i)(HH)));
            return (0, rH.useLayoutEffect)((() => {
              var LH;
              const rH = BH.current;
              if (!rH) return;
              const SH = (0, FB.i)(HH),
                hH = () => {
                  const HH = JB(rH, SH);
                  AH((BH => {
                    const LH = null !== HH && void 0 !== HH ? HH : BH.length === SH.length ? BH : SH;
                    return LH.join() === BH.join() ? BH : LH
                  }))
                };
              hH(), window.addEventListener("resize", hH);
              const tH = "undefined" === typeof ResizeObserver ? null : new ResizeObserver(hH);
              null === tH || void 0 === tH || tH.observe(null !== (LH = rH.closest(".BottomRightElements")) && void 0 !== LH ? LH : rH);
              const zH = [(0, YH.m)(CB.e, hH), (0, YH.m)(zB.b, hH), (0, YH.m)(CB.r, hH)];
              return () => {
                window.removeEventListener("resize", hH), null === tH || void 0 === tH || tH.disconnect();
                for (const HH of zH) HH()
              }
            }), [HH, BH]), LH.length === (0, FB.i)(HH).length ? LH : (0, FB.i)(HH)
          }(LH, AH);
        return (0, EH.jsxs)("div", {
          ref: AH,
          className: hH()("TouchComponentsButtons", {
            Hidden: HH
          }),
          "data-camera-keeper": "",
          children: [(0, EH.jsx)(RB, {
            lockable: BH.jumpLock && !HH
          }), (0, EH.jsx)(OL, {
            hidden: HH,
            actionButtons: LH,
            contextSlots: SH
          }), (0, EH.jsx)(uL, {})]
        })
      }));

    function YL(HH) {
      const BH = BH => LH => {
        (0, FH.e)(LH.currentTarget, BH), HH(BH, LH.nativeEvent)
      };
      return {
        onPointerDown: BH(!0),
        onPointerUp: BH(!1),
        onPointerCancel: BH(!1)
      }
    }

    function uL() {
      const HH = (0, PH.j)("canCrouch"),
        BH = (0, eH.e)("crouching"),
        LH = (0, rH.useRef)(!1);
      lB(NH.s.Crouch, LH);
      const AH = (HH, BH) => {
          LH.current = HH, (0, RH.B)(NH.s.Crouch, HH, BH)
        },
        SH = (0, rH.useRef)(null),
        hH = () => {
          LH.current && (SH.current && (0, FH.e)(SH.current, !1), AH(!1, {
            isTrusted: !0,
            timeStamp: performance.now()
          }))
        },
        tH = gB(hH);
      return (0, rH.useEffect)((() => {
        !1 === HH && hH()
      }), [HH]), !1 === HH ? null : (0, EH.jsx)(fB, {
        ref: SH,
        slot: OB,
        className: "CrouchKey",
        lit: BH,
        ...tH,
        ...YL(AH),
        children: (0, EH.jsx)(VH.c, {
          name: "arrow-down-to-line"
        })
      })
    }
    const QL = [{
        icon: "arrows-rotate"
      }],
      WL = [{
        icon: "Arrow"
      }],
      ML = [{
        icon: "crosshairs"
      }],
      xL = [{
        icon: "swords"
      }],
      vL = [{
        icon: "hand-back-point-up"
      }],
      PL = [{
        icon: "Firecracker"
      }];

    function TL(HH, BH, LH, AH) {
      return {
        id: JSON.stringify(BH),
        render: rH => (0, EH.jsx)(bL, {
          code: HH,
          slot: rH,
          icon: BH,
          label: AH,
          hidden: LH
        })
      }
    }

    function UL(HH, BH) {
      return {
        id: "fly",
        render: LH => (0, EH.jsx)(VL, {
          slot: LH,
          flying: HH,
          label: BH
        })
      }
    }

    function VL(HH) {
      let {
        slot: BH,
        flying: LH,
        label: AH
      } = HH;
      return (0, EH.jsx)(fB, {
        slot: BH,
        className: "FlyKey",
        lit: LH,
        label: AH,
        ...YL(((HH, BH) => {
          (0, RH.B)(NH.s.Fly, HH, BH)
        })),
        children: (0, EH.jsx)(VH.c, {
          name: "feather-pointed"
        })
      })
    }

    function OL(HH) {
      var BH, LH;
      let {
        hidden: AH,
        actionButtons: SH,
        contextSlots: hH
      } = HH;
      const {
        t: tH
      } = (0, DH.B)(), {
        gun: zH,
        aimable: CH,
        chargeName: XH
      } = (0, eH.e)("heldItemAim"), GH = (0, eH.e)("gliderBoostFuel"), {
        canFly: YH,
        flying: uH
      } = (0, eH.e)("flight"), QH = (0, PH.j)("touchscreenActionButton"), WH = zH ? QL : QH, MH = CH ? {
        icon: WL,
        label: tH("touchKeys:aim")
      } : null, xH = null !== XH ? {
        icon: [{
          icon: XH
        }]
      } : null, vH = null !== MH && void 0 !== MH ? MH : xH, TH = null !== (BH = null === (LH = zH ? MH : null !== xH && void 0 !== xH ? xH : MH) || void 0 === LH ? void 0 : LH.icon) && void 0 !== BH ? BH : vL, UH = [!SH && vH ? TL(jH.d.Action2, vH.icon, AH, vH.label) : null, zH ? TL(jH.d.Action3, ML, AH, tH("touchKeys:scope")) : null, YH ? UL(uH, tH("touchKeys:fly")) : null];
      return (0, EH.jsxs)(EH.Fragment, {
        children: [WH && (0, EH.jsx)(bL, {
          code: jH.d.Action1,
          slot: oB,
          icon: WH,
          label: zH ? tH("touchKeys:reload") : void 0,
          hidden: AH
        }, JSON.stringify(WH)), SH && (0, EH.jsxs)(EH.Fragment, {
          children: [(0, EH.jsx)(bL, {
            code: jH.d.Attack,
            slot: mB,
            icon: xL,
            name: tH("touchKeys:attack"),
            hidden: AH
          }), (0, EH.jsx)(bL, {
            code: jH.d.Use,
            slot: kB,
            icon: TH,
            name: tH("touchKeys:use"),
            hidden: AH
          })]
        }), (VH = UH, OH = hH, VH.filter((HH => null !== HH)).slice(0, OH.length).map(((HH, BH) => {
          const LH = OH[BH];
          return (0, EH.jsx)(rH.Fragment, {
            children: HH.render(LH)
          }, `${HH.id}:${LH}`)
        }))), GH > 0 && (0, EH.jsx)(bL, {
          code: jH.d.Boost,
          slot: IB,
          className: "BoostKey",
          icon: PL,
          label: tH("touchKeys:boost", {
            fuel: GH > 99 ? "99+" : GH
          }),
          hidden: AH
        })]
      });
      var VH, OH
    }

    function bL(HH) {
      let {
        code: BH,
        slot: LH,
        icon: AH,
        label: rH,
        name: SH,
        hidden: tH,
        className: zH
      } = HH;
      const XH = VB(BH, tH);
      return (0, EH.jsx)(fB, {
        ref: XH,
        slot: LH,
        className: hH()("TouchActionKey", zH),
        canvasZone: !0,
        label: rH,
        role: void 0 !== SH ? "img" : void 0,
        "aria-label": SH,
        children: (0, EH.jsx)(CH.b, {
          text: AH
        })
      })
    }
    var kL = LH(4631),
      mL = LH(2800),
      oL = LH(648);
    const IL = (0, rH.memo)((function() {
      (0, UH.b)();
      const HH = (0, rH.useRef)([]),
        BH = (0, mL.e)(),
        LH = (0, rH.useRef)(0),
        AH = (0, rH.useRef)(0),
        SH = (0, rH.useRef)([]),
        hH = (0, rH.useRef)(null);

      function tH(LH, AH, rH, SH) {
        const hH = (0, oL.b)(),
          tH = setTimeout((() => {
            HH.current = HH.current.filter((HH => HH.id !== hH)), BH()
          }), SH);
        uH.gameBridge.send("recordFlyingMiddleText", {
          content: LH,
          dr: AH,
          angle: rH,
          ar: SH
        }), HH.current.push({
          id: hH,
          content: LH,
          dr: AH,
          ar: SH,
          removeTimeout: tH,
          angle: rH
        }), BH()
      }
      return (0, eH.b)("shotDamageToShow", (HH => {
        let {
          damage: BH,
          wasCrit: LH,
          distance: AH
        } = HH;
        const rH = -Math.PI / 4 + Math.random() * Math.PI / 2;
        tH(LH ? [{
          str: BH.toString(),
          style: {
            color: "#ff8a80",
            fontSize: "1.6em"
          }
        }] : [BH.toString()], AH, rH, 1e3)
      })), (0, zH.d)("flyingMiddleMessage", (HH => {
        let {
          content: BH,
          dr: rH,
          ar: zH
        } = HH;
        SH.current.push({
          content: BH,
          dr: rH,
          ar: zH
        });
        const CH = () => {
          const {
            content: HH,
            dr: BH,
            ar: rH
          } = SH.current.shift(), hH = function(HH) {
            const BH = -Math.PI / 4,
              LH = Math.PI / 4,
              AH = LH - BH,
              rH = (1 + Math.sqrt(5)) / 2,
              SH = 2 * Math.PI / (rH * rH);
            let hH = HH + SH;
            for (; hH > LH;) hH -= AH;
            for (; hH < BH;) hH += AH;
            const tH = Math.PI / 6;
            if (Math.abs(hH - HH) < tH) {
              hH = HH + (Math.sign(hH - HH) || 1) * tH, hH > LH && (hH = HH - tH), hH < BH && (hH = HH + tH)
            }
            return hH
          }(AH.current);
          AH.current = hH, LH.current = Date.now(), tH(HH, BH, hH, rH)
        };
        if (!hH.current) {
          const HH = () => {
            SH.current.length > 0 && CH(), 0 === SH.current.length && (clearInterval(hH.current), hH.current = null)
          };
          hH.current = setInterval(HH, 200), LH.current + 200 < Date.now() && HH()
        }
        for (; SH.current.length > 4;) CH()
      })), (0, zH.d)("forceFlyingMiddleMessage", (HH => {
        let {
          content: BH,
          dr: LH,
          angle: AH,
          ar: rH
        } = HH;
        tH(BH, LH, AH, rH)
      })), (0, rH.useEffect)((() => () => {
        clearInterval(hH.current), hH.current = null;
        for (const BH of HH.current) clearTimeout(BH.removeTimeout)
      }), []), (0, EH.jsx)("div", {
        className: "FlyingMiddleTextWrapper",
        children: HH.current.map((HH => {
          const {
            id: BH,
            content: LH,
            dr: AH,
            ar: rH,
            angle: SH
          } = HH;
          return HH.pos || (HH.pos = function(HH, BH) {
            const LH = 50 / (HH ** .7 * .35);
            return {
              x: LH * Math.sin(BH),
              y: -LH * Math.cos(BH)
            }
          }(AH, SH)), (0, EH.jsx)(fL, {
            className: "FlyingMiddleText",
            classNames: "FlyingMiddleText",
            timeout: rH,
            enterActiveStyle: {
              transform: `translate(${HH.pos.x}vw, ${HH.pos.y}vh)`,
              transition: `transform ${rH}ms ease-out`
            },
            children: (0, EH.jsx)("div", {
              children: (0, EH.jsx)(CH.b, {
                text: LH
              })
            })
          }, BH)
        }))
      })
    }));

    function fL(HH) {
      let {
        children: BH,
        className: LH,
        classNames: AH,
        timeout: SH,
        enterActiveStyle: hH
      } = HH;
      const [tH, zH] = (0, rH.useState)(!1), [CH, XH] = (0, rH.useState)(!1), GH = (0, rH.useRef)(null);
      return (0, rH.useEffect)((() => {
        zH(!0)
      }), []), (0, EH.jsx)(kL.e, {
        className: LH,
        classNames: AH || LH,
        in: tH,
        timeout: SH,
        nodeRef: GH,
        onEntering: () => {
          XH(!0)
        },
        children: (0, rH.cloneElement)(BH, {
          ref: GH,
          style: CH && hH || void 0
        })
      })
    }
    var lL = LH(37472);

    function KL() {
      const HH = (0, eH.e)("health");
      return (0, EH.jsxs)("div", {
        className: "BottomScreenStatBarList",
        children: [(0, EH.jsx)(lL.d, {
          placement: "statBars"
        }), (0, EH.jsx)(cL, {
          actualValue: HH.shield,
          maxValue: HH.maxShield,
          hideAtValue: 0,
          icon: "shield",
          className: "ShieldBar"
        }), (0, EH.jsx)(cL, {
          actualValue: HH.health,
          maxValue: HH.maxHealth,
          icon: "heart",
          className: "HealthBar"
        })]
      })
    }

    function cL(HH) {
      let {
        actualValue: BH,
        maxValue: LH,
        hideAtValue: AH,
        icon: rH,
        className: SH
      } = HH;
      return (0, UH.d)(), null === BH || null === LH || BH === AH || LH === AH ? null : (0, EH.jsx)("div", {
        className: "BottomScreenStatBarWrapper",
        children: (0, EH.jsxs)("div", {
          className: "BottomScreenStatBarBackground",
          children: [(0, EH.jsx)("div", {
            className: `BottomScreenStatBar ${SH}`,
            style: {
              transform: `scaleX(${Math.max(BH/LH,0)})`,
              transformOrigin: "left center"
            }
          }), (0, EH.jsxs)("div", {
            className: "BottomScreenStatBarText SmallTextBold",
            children: [(0, EH.jsx)(VH.c, {
              name: rH
            }), ` ${Math.ceil(BH)}/${LH}`]
          })]
        })
      })
    }
    var eL = LH(34986),
      qL = LH(4941),
      gL = LH(1306),
      NL = LH(3015),
      RL = LH(1455),
      jL = LH(1287),
      nL = LH(3788),
      FL = LH(3296),
      DL = LH(2036),
      wL = LH(2213),
      ZL = LH(761),
      dL = LH(3872),
      aL = LH(120),
      sL = LH(317);

    function JL(HH, BH) {
      let {
        shownName: LH,
        lifeformType: AH
      } = HH;
      return null !== LH ? LH : null !== AH ? BH(`lifeform:${(0,sL.Fe)(AH)}`) : null
    }
    var iL = LH(1580),
      pL = LH(4011),
      yL = LH(4002),
      HA = LH(4038),
      BA = LH(4036),
      LA = LH(4683),
      AA = LH(35040);

    function rA(HH) {
      let {
        config: BH,
        track: LH,
        xp: AH,
        tileState: rH
      } = HH;
      const {
        t: SH
      } = (0, DH.B)(), tH = (0, BA.g)(BH, AH), zH = (0, BA.i)(BH, AH), CH = tH < BH.tierCount ? tH + 1 : null, XH = Math.min(4, BH.tierCount), GH = Math.max(1, Math.min(tH - 1, BH.tierCount - XH + 1)), YH = null !== CH ? CH - GH : tH - GH, uH = null !== CH && CH > GH ? CH - GH : YH + 1, QH = zH.xpForNextTier - zH.xpIntoTier, WH = zH.xpForNextTier > 0 ? zH.xpIntoTier / zH.xpForNextTier : 1, MH = {
        "--road-cols": XH,
        "--road-fill": YH,
        "--road-chip": uH
      }, xH = [];
      for (let hH = 0; hH < XH; hH++) xH.push(GH + hH);
      return (0, EH.jsxs)("div", {
        className: "SeasonPassRoad",
        style: MH,
        children: [(0, EH.jsxs)("div", {
          className: "SeasonPassRoadColumns",
          children: [(0, EH.jsx)("div", {
            className: "SeasonPassRoadLine"
          }), (0, EH.jsx)("div", {
            className: "SeasonPassRoadLine SeasonPassRoadLineFill"
          }), xH.map((HH => (0, EH.jsxs)("div", {
            className: hH()("SeasonPassRoadColumn", {
              SeasonPassRoadColumnEarning: HH === CH,
              SeasonPassRoadColumnAhead: null !== CH && HH > CH
            }),
            children: [(0, EH.jsx)(LA.d, {
              reward: (0, BA.f)(BH, {
                tier: HH,
                track: LH
              }),
              tileState: rH(HH),
              track: LH,
              size: "small"
            }), (0, EH.jsx)(AA.c, {
              tier: HH,
              state: HH === CH ? "earning" : HH <= tH ? "reached" : "locked",
              progress: WH,
              size: "small"
            })]
          }, HH))), null !== CH && (0, EH.jsx)("span", {
            className: "SeasonPassRoadChip SmallTextBold",
            children: SH("seasonPass:xpToGo", {
              xp: QH
            })
          })]
        }), GH + XH - 1 < BH.tierCount && (0, EH.jsxs)("span", {
          className: "SeasonPassRoadEnd SmallTextBold",
          children: ["\u2026 ", BH.tierCount]
        })]
      })
    }
    const SA = (0, rH.memo)((function() {
      const {
        t: HH
      } = (0, DH.B)(), BH = (0, HA.b)(), LH = (0, yL.g)("listen");
      if (null === BH || BH.seasonPassRoomXp <= 0) return null;
      const AH = "loaded" === LH.status ? LH.view : null,
        rH = AH ? AH.config : (0, iL.g)(Date.now()),
        SH = yL.d.getProvisionalXp(BH),
        hH = BH.seasonPassLifeXp > 0 ? HH("seasonPass:xpThisLife", {
          xp: BH.seasonPassLifeXp
        }) : HH("seasonPass:xpThisGame", {
          xp: BH.seasonPassRoomXp
        });
      return (0, EH.jsxs)("div", {
        className: "SeasonPassRespawnBanner",
        children: [(0, EH.jsx)("div", {
          className: "SeasonPassRespawnBannerGained FullyFancyText",
          children: hH
        }), rH && null !== SH && (0, EH.jsx)(hA, {
          config: rH,
          view: AH,
          xp: SH
        }), BH.seasonPassXpCapped && (0, EH.jsx)("div", {
          className: "SeasonPassRespawnBannerCapped SmallTextBold",
          children: HH("seasonPass:dailyCapReached")
        })]
      })
    }));

    function hA(HH) {
      var BH;
      let {
        config: LH,
        view: AH,
        xp: rH
      } = HH;
      const SH = null !== AH && void 0 !== AH && AH.state.hasHyperRank ? "hyper" : "free",
        hH = AH ? {
          ...AH.state,
          xp: Math.max(rH, AH.state.xp)
        } : null;
      return (0, EH.jsx)(rA, {
        config: LH,
        track: SH,
        xp: null !== (BH = null === hH || void 0 === hH ? void 0 : hH.xp) && void 0 !== BH ? BH : rH,
        tileState: HH => hH ? (0, pL.k)(LH, hH, {
          tier: HH,
          track: SH
        }) : "locked"
      })
    }
    var tA = LH(3799),
      zA = LH(3803),
      CA = LH(3251);
    const EA = {
        FallDamage: "respawnPage:diedFallDamage",
        VoidJump: "respawnPage:diedVoid",
        Lava: "respawnPage:diedLava",
        "Toxic Waste": "respawnPage:diedToxicWaste",
        "Poison Potion": "respawnPage:diedPoisoned",
        "Rotten Brain": "respawnPage:diedPoisoned"
      },
      XA = (0, rH.memo)((function() {
        var HH, BH;
        const LH = (0, UH.b)(),
          AH = (0, QH.useNavigatePreserveSearch)(),
          {
            t: SH
          } = (0, DH.B)(),
          {
            loadingOverlayVisible: tH
          } = (0, cH.m)(["loadingOverlayVisible"]),
          CH = (0, gH.y)(),
          [XH, GH] = (0, rH.useState)(!1),
          [YH, WH] = (0, rH.useState)(!0),
          [MH, xH] = (0, rH.useState)(null),
          vH = (0, mL.e)(),
          TH = (0, PH.j)("respawnButtonText"),
          OH = (0, PH.j)("usePlayAgainButton"),
          bH = (0, PH.j)("useRespawnButton"),
          {
            gameNameWithVariation: kH
          } = (0, eH.e)("connectedGame"),
          oH = (0, rH.useRef)(DL.e.get("secsToRespawn")),
          IH = (0, rH.useRef)(uH.gameBridge.latest("localPlayerAlive")),
          fH = (0, rH.useRef)(DL.e.get("secsToRespawn")),
          lH = (0, rH.useRef)(DL.e.get("autoRespawn")),
          KH = (0, rH.useRef)(null),
          qH = (0, rH.useRef)(0),
          NH = (0, rH.useRef)(0),
          [RH, jH] = (0, rH.useState)(!1),
          nH = (0, rH.useRef)(null),
          FH = (0, rH.useRef)(null),
          wH = (0, rH.useRef)(null);
        (0, PH.f)("secsToRespawn", (HH => {
          console.log("Received new secsToRespawn with", HH, "and current canRespawn value of ", lH.current), fH.current = HH, sH()
        })), (0, PH.f)("autoRespawn", (HH => {
          console.log("Received autorespawn", HH, "current canRespawn value of ", oH.current), lH.current = HH, sH()
        }));
        const ZH = HH => {
          console.log("Updating respawn component from localPlayerAliveSet. isAlive:", HH), HH || qH.current++, IH.current = HH, sH()
        };
        (0, eH.b)("localPlayerAliveSet", ZH), (0, zH.d)(FL.i, (HH => {
          "connected" === HH && !IH.current && lH.current && oH.current <= 0 && (NH.current = 0, JH())
        })), (0, rH.useEffect)((() => {
          const HH = uH.gameBridge.latest("localPlayerAlive");
          HH === IH.current ? (console.log("Updating respawn component from initial mount"), sH()) : ZH(HH)
        }), []), (0, rH.useEffect)((() => {
          if (XH) {
            jH(!1);
            const HH = setTimeout((() => {
              jH(!0)
            }), 600);
            return () => {
              clearTimeout(HH)
            }
          }
          return () => {}
        }), [XH]);
        (0, eH.b)("kill", (HH => {
          let {
            killer: BH,
            victim: LH,
            withItem: AH
          } = HH;
          if (!LH.local) return;
          const rH = ((HH, BH) => {
            if (HH.local) {
              const HH = EA[BH];
              return HH ? SH(HH) : null
            }
            const LH = JL(HH, SH);
            return LH ? SH("respawnPage:killedBy", {
              name: LH
            }) : null
          })(BH, AH);
          rH && xH({
            text: rH,
            deathCount: IH.current ? qH.current + 1 : qH.current
          })
        }));
        const dH = () => {
            XH && lH.current && IH.current && RH && GH(!1)
          },
          aH = XH && lH.current && IH.current && RH && !tH;
        (0, zH.d)("usedKeyboard", (() => {
          dH()
        })), (0, zA.b)("respawn", aH, dH);
        const sH = () => {
            WH(fH.current >= 3 || !lH.current), IH.current ? (clearInterval(KH.current), KH.current = null, lH.current ? vH() : GH(!1)) : (GH(!0), oH.current = fH.current, vH(), console.log("Running respawn stats updated", lH.current, oH.current), lH.current && oH.current <= 0 && JH(), clearInterval(KH.current), oH.current > 0 && (KH.current = setInterval((() => {
              oH.current = Math.max(oH.current - 1, 0), vH(), oH.current <= 0 && (clearInterval(KH.current), KH.current = null, DL.e.get("autoRespawn") && JH())
            }), 1e3)))
          },
          JH = () => {
            if (Date.now() - NH.current > 1e3) {
              const HH = () => {
                uH.gameBridge.send("respawn", null), NH.current = Date.now()
              };
              DL.e.get("autoRespawn") ? HH() : (0, jL.ab)((() => {
                HH()
              }), "video_respawn")
            }
          },
          iH = (0, rH.useMemo)((() => {
            var HH;
            return null === (HH = (0, ZL.h)(kH)) || void 0 === HH ? void 0 : HH.otherGameLinksOnRespawnPage
          }), [kH]),
          pH = 0 === oH.current,
          yH = (null === MH || void 0 === MH ? void 0 : MH.deathCount) === qH.current ? MH.text : null,
          HB = XH && YH && !tH,
          BB = CH && aH && null !== (HH = null === (BH = (0, mH.c)()) || void 0 === BH ? void 0 : BH.getBoundButton("menuConfirm")) && void 0 !== HH ? HH : null,
          LB = HH => pH ? HH : SH("respawnPage:actionInSeconds", {
            action: HH,
            seconds: oH.current
          });
        return (0, EH.jsx)(eL.e, {
          showing: XH,
          globallyUniqueKey: "RespawnComponent",
          alwaysMountChildren: !0,
          children: (0, EH.jsx)(nL.d, {
            show: XH,
            "data-holds-camera-keeper": "",
            children: (0, EH.jsxs)(qL.b, {
              close: () => {
                GH(!1)
              },
              togglePointerLock: !1,
              closeOnPressBackground: !1,
              className: "RespawnBackgroundScreen",
              padLayerKind: lH.current || tH ? null : "death",
              padBackCloses: !1,
              cameraKeeper: !0,
              children: [(0, aL.is99NightsCrazyGamesBundle)() && (0, EH.jsx)(RL.e, {
                onClick: wL.d,
                children: SH("homePage:backToGames")
              }), (0, EH.jsxs)("div", {
                className: "RespawnContainer",
                onClick: dH,
                children: [(0, EH.jsxs)("div", {
                  className: "RespawnTop",
                  children: [(0, EH.jsx)("div", {
                    ref: FH,
                    className: "RespawnSideSquareBannerDiv",
                    children: LH[0] > 925 && (0, CA.k)() && (0, EH.jsx)(NL.b, {
                      info: {
                        adType: "square",
                        adId: 1,
                        adAlias: "banner_respawn_1"
                      },
                      sizeInfo: {
                        parentRef: FH
                      },
                      showing: HB,
                      horizontalAlign: "start",
                      extraContrastBackgroundBox: "left",
                      noFillShowBloxdAdProbability: 0
                    })
                  }), (0, EH.jsx)("div", {
                    className: "RespawnMainContent",
                    children: (0, EH.jsxs)("div", {
                      className: hH()("RespawnMainContentInner", {
                        RespawnMainContentInnerPad: CH
                      }),
                      children: [lH.current && (0, EH.jsxs)("div", {
                        className: "AutoRespawnDeathInfo",
                        children: [(0, EH.jsxs)("div", {
                          className: "AutoRespawnDeathTitle FullyFancyText",
                          children: [(0, EH.jsx)(VH.c, {
                            name: "skull",
                            className: "AutoRespawnDeathIcon"
                          }), SH("respawnPage:youDied")]
                        }), (0, EH.jsxs)("div", {
                          className: "AutoRespawnDeathCause FullyFancyText",
                          children: [null === BB && (IH.current ? SH("respawnPage:pressAnywhereToContinue") : pH ? SH("respawnPage:respawning") : LB(SH("general:respawn"))), null !== BB && (0, EH.jsx)(tA.c, {
                            text: SH("controller:screensPressToContinue", {
                              button: tA.e
                            }),
                            glyph: BB,
                            className: "AutoRespawnContinueGlyph"
                          })]
                        }), yH && (0, EH.jsx)("div", {
                          className: "AutoRespawnStatus",
                          children: yH
                        })]
                      }), !lH.current && (0, EH.jsxs)(EH.Fragment, {
                        children: [(0, EH.jsxs)("div", {
                          className: hH()("RespawnPageButtons", {
                            RespawnPageButtonsVertical: !iH
                          }),
                          children: [OH && (0, EH.jsx)(RL.u, {
                            className: "RespawnPageButton",
                            padDefaultFocus: !0,
                            onClick: () => {
                              (0, jL.ab)((() => {
                                (0, cH.l)("inGameReplay");
                                const HH = (0, gL.b)(kH);
                                AH(HH)
                              }), "video_start")
                            },
                            disabled: !pH || !RH,
                            touchPressOn: "pointerup",
                            children: LB(SH("respawnPage:playAgain"))
                          }), bH && (0, EH.jsx)(RL.i, {
                            className: "RespawnPageButton",
                            onClick: JH,
                            padDefaultFocus: !OH,
                            padBack: "sessionBasedGame:stayInLobby" === TH,
                            disabled: !pH || !RH,
                            touchPressOn: "pointerup",
                            children: LB(SH(TH))
                          }), !(0, aL.is99NightsCrazyGamesBundle)() && (0, EH.jsx)(RL.O, {
                            className: "RespawnPageButton",
                            onClick: wL.d,
                            disabled: !pH || !RH,
                            touchPressOn: "pointerup",
                            children: LB(SH("respawnPage:exitGame"))
                          })]
                        }), iH && (0, EH.jsxs)("div", {
                          className: "RespawnPageOtherGames",
                          children: [(0, EH.jsx)("div", {
                            className: "RespawnPanelSectionTitle",
                            children: SH("respawnPage:orTry")
                          }), (0, EH.jsx)("div", {
                            className: "RespawnPageOtherGameThumbnails",
                            children: iH.map((HH => (0, EH.jsx)(dL.d, {
                              source: {
                                type: "game",
                                gameNameWithVariation: HH
                              },
                              disabled: !pH || !RH,
                              gameWidth: "13rem",
                              hideDescription: !0,
                              hideFavourites: !0,
                              hideCcu: !0,
                              onClick: () => {
                                (0, cH.l)("inGameReplay");
                                const BH = (0, gL.b)(HH);
                                AH(BH)
                              }
                            }, HH)))
                          })]
                        })]
                      }), XH && (0, EH.jsx)(SA, {})]
                    })
                  }), (0, EH.jsx)("div", {
                    ref: wH,
                    className: "RespawnSideSquareBannerDiv"
                  })]
                }), (0, EH.jsx)("div", {
                  ref: nH,
                  className: "RespawnBottom",
                  children: (0, CA.k)() && (0, EH.jsx)(NL.b, {
                    info: {
                      adType: "leaderboard",
                      adId: 1,
                      adAlias: "banner_respawn_2"
                    },
                    sizeInfo: {
                      parentRef: nH
                    },
                    showing: HB,
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
    var GA = LH(37487);
    const YA = [{
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
      uA = [{
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
      QA = {
        duration: 300,
        easing: "ease-out",
        fill: "forwards"
      },
      WA = {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
      },
      MA = (0, rH.memo)((function() {
        const HH = (0, rH.useRef)(null),
          BH = (0, rH.useRef)(null);

        function LH(LH) {
          var AH;
          let {
            aA: rH,
            screenPos: SH
          } = LH;
          const hH = HH.current;
          null === (AH = BH.current) || void 0 === AH || AH.cancel(), hH.classList.remove("HitmarkerCrit"), SH ? (hH.style.left = `${SH.x}%`, hH.style.top = `${SH.y}%`) : (hH.style.left = "50%", hH.style.top = "50%"), hH.style.rotate = 16 * (Math.random() - .5) + "deg", rH && hH.classList.add("HitmarkerCrit");
          const tH = hH.animate(rH ? uA : YA, rH ? WA : QA);
          BH.current = tH, tH.onfinish = () => {
            hH.classList.remove("HitmarkerCrit")
          }
        }
        return (0, zH.d)("localGunHitmarker", (HH => {
          let {
            aA: BH
          } = HH;
          LH({
            aA: BH
          })
        })), (0, zH.d)("yourAttackHit", (HH => {
          let {
            aA: BH,
            screenPos: AH
          } = HH;
          LH({
            aA: BH,
            screenPos: cH.c.get("isTouchScreen") ? AH : void 0
          })
        })), (0, zH.d)("sendHitmarker", (HH => {
          let {
            aA: BH,
            screenPos: AH
          } = HH;
          LH({
            aA: BH,
            screenPos: AH
          })
        })), (0, EH.jsxs)("div", {
          ref: HH,
          className: "Hitmarker",
          children: [(0, EH.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, EH.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, EH.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, EH.jsx)("div", {
            className: "HitmarkerBar"
          })]
        })
      }));

    function xA() {
      const HH = (0, rH.useRef)(!0);
      return (0, zH.d)("localBlockMined", (() => {
        sH.g.play("blockMined")
      })), (0, zH.d)("yourAttackHit", (() => {
        sH.g.play("hitLanded")
      })), (0, zH.d)("localGunHitmarker", (() => {
        sH.g.play("hitLanded")
      })), (0, zH.d)("damagedByOtherPlayer", (() => {
        sH.g.play("damageTaken")
      })), (0, eH.b)("localPlayerAliveSet", (BH => {
        !BH && HH.current && sH.g.play("death"), HH.current = BH
      })), null
    }
    var vA = LH(1986),
      PA = LH(37509),
      TA = LH.n(PA),
      UA = LH(2104),
      VA = LH(2091),
      OA = LH(3639),
      bA = LH(35006);
    const kA = sL.ve ? 7e7 : 7e3,
      mA = TA()("#ffffff").alpha(.5).string();

    function oA(HH) {
      const BH = (0, OA.e)(HH);
      return void 0 !== BH && "Gun" === (0, bA.itemTypeOf)(BH)
    }

    function IA(HH) {
      if (!HH) return console.error(`Killfeed colour was ${HH}`), mA;
      try {
        return TA()(HH).alpha(.5).string()
      } catch {
        return console.warn(`Killfeed colour ${HH} is not a colour`), mA
      }
    }
    const fA = (0, rH.memo)((function() {
      const {
        t: HH
      } = (0, DH.B)(), BH = (0, rH.useRef)([]), LH = (0, mL.e)();
      return (0, eH.b)("kill", (function(AH) {
        var rH, SH;
        let {
          killer: hH,
          victim: tH,
          withItem: zH,
          killstreak: CH
        } = AH;
        const EH = BH.current;
        if (EH.length >= 3) {
          const HH = EH.shift();
          clearTimeout(HH.timeout)
        }
        const XH = uH.gameBridge.latest("hiddenPlayerNames"),
          GH = {
            deadName: JL(tH, HH),
            killerName: JL(hH, HH),
            isFriend: {
              killer: (0, UA.d)(hH.realName, XH),
              dead: (0, UA.d)(tH.realName, XH)
            },
            withItem: zH,
            wasHeadshot: !1,
            killstreak: CH,
            timeout: setTimeout((() => {
              EH.shift(), LH()
            }), kA),
            reactId: `${null!==(rH=hH.id)&&void 0!==rH?rH:hH.shownName}|${null!==(SH=tH.id)&&void 0!==SH?SH:tH.shownName}|${Date.now()}`,
            killerBackground: IA(hH.colour),
            deadBackground: IA(tH.colour)
          };
        EH.push(GH), LH()
      })), (0, rH.useEffect)((() => {
        const HH = BH.current;
        return () => {
          for (; HH.length > 0;) {
            const {
              timeout: BH
            } = HH.pop();
            clearTimeout(BH)
          }
        }
      }), []), (0, EH.jsx)("div", {
        className: "Killfeed",
        children: BH.current.map((HH => {
          let {
            deadName: BH,
            killerName: LH,
            withItem: AH,
            wasHeadshot: rH,
            killstreak: SH,
            killerBackground: hH,
            deadBackground: tH,
            reactId: zH,
            isFriend: CH
          } = HH;
          return (0, EH.jsxs)("div", {
            className: "IndividualKillWrapper SmallTextLight",
            style: {
              background: `linear-gradient(90deg, ${hH} calc(100% - 10rem), ${tH} 100%)`
            },
            children: [SH >= 2 ? (0, EH.jsx)("div", {
              className: "KillfeedKillstreak",
              children: (0, sL.T)(SH)
            }) : null, (0, EH.jsx)("div", {
              className: "KillfeedKillerName",
              children: LH
            }), CH.killer && (0, EH.jsx)(VA.b, {}), (0, EH.jsx)("div", {
              className: "KillfeedItem",
              style: {
                height: "5vmin",
                width: oA(AH) ? "7.5vmin" : "5vmin"
              },
              children: (0, EH.jsx)(vA.e, {
                itemName: AH,
                amount: 0,
                gunTransform: "scaleX(-1)",
                itemMarginTop: 0
              })
            }), rH ? (0, EH.jsx)(VH.c, {
              name: "crosshairs",
              className: "3x KillfeedHeadshotIcon"
            }) : null, (0, EH.jsx)("div", {
              className: "KillfeedDeadName",
              children: BH
            }), CH.dead && (0, EH.jsx)(VA.b, {})]
          }, zH)
        }))
      })
    }));
    var lA = LH(37560),
      KA = LH(1072),
      cA = LH.n(KA),
      eA = LH(304),
      qA = LH(3768),
      gA = LH(37565),
      NA = LH(1253);
    const RA = {},
      jA = (0, rH.memo)((function() {
        const HH = (0, rH.useRef)({}),
          [, BH] = (0, rH.useReducer)((HH => HH + 1), 0);
        (0, zH.d)("setDirectionArrow", (LH => {
          let {
            id: AH,
            position: rH,
            style: SH,
            text: hH,
            eA: tH
          } = LH;
          const zH = HH.current,
            CH = SH || RA,
            EH = hH,
            XH = zH[AH];
          if (!XH) return zH[AH] = {
            position: rH,
            style: CH,
            text: EH,
            shouldShowDistance: tH,
            Cw: null,
            chevronElement: null,
            distanceElement: null,
            lastRenderedDist: -1,
            lastDistUpdateTime: 0,
            lastScreenX: NaN,
            lastScreenY: NaN,
            onScreen: void 0
          }, void BH();
          const GH = !cA()(XH.style, CH) || !cA()(XH.text, EH) || XH.shouldShowDistance !== tH;
          XH.position = rH, XH.style = CH, XH.text = EH, XH.shouldShowDistance = tH, GH && BH()
        })), (0, zH.d)("clearDirectionArrow", (LH => {
          let {
            id: AH
          } = LH;
          const rH = HH.current;
          if (null === AH)
            for (const HH in rH) delete rH[HH];
          else delete rH[AH];
          BH()
        })), (0, rH.useEffect)((() => {
          const BH = HH.current,
            LH = (0, NA.B)((() => {
              ! function(HH) {
                const BH = uH.gameBridge.lookup("localPos", null),
                  LH = qA.b - nA,
                  AH = (0, qA.k)() - nA;
                for (const rH in HH) {
                  const SH = HH[rH];
                  if (!SH.Cw) continue;
                  const hH = uH.gameBridge.lookup("screenPos", SH.position),
                    tH = hH.x - 50,
                    zH = hH.y - 50;
                  hH.x === SH.lastScreenX && hH.y === SH.lastScreenY || (SH.lastScreenX = hH.x, SH.lastScreenY = hH.y, SH.Cw.style.translate = `${hH.x}vw ${hH.y}vh`, SH.chevronElement && (SH.chevronElement.style.rotate = `${sL.d.fastATan2(zH,tH)}rad`));
                  const CH = Math.abs(tH) < LH && Math.abs(zH) < AH;
                  if (CH !== SH.onScreen && (SH.onScreen = CH, SH.Cw.classList.toggle("DirectionArrowOnScreen", CH)), SH.shouldShowDistance && SH.distanceElement) {
                    const HH = SH.position[0] - BH[0],
                      LH = SH.position[1] - BH[1],
                      AH = SH.position[2] - BH[2],
                      rH = Math.round(Math.sqrt(HH * HH + LH * LH + AH * AH));
                    (-1 === SH.lastRenderedDist || (0, gA.e)(rH, SH.lastRenderedDist, SH.lastDistUpdateTime)) && (SH.distanceElement.textContent = `${rH}m`, SH.lastRenderedDist = rH, SH.lastDistUpdateTime = Date.now() + Math.floor(100 * Math.random()))
                  }
                }
              }(BH)
            }));
          return () => {
            LH();
            for (const HH in BH) delete BH[HH]
          }
        }), []);
        const LH = HH.current;
        return (0, EH.jsx)("div", {
          className: "DirectionArrows",
          children: Object.entries(LH).map((HH => {
            var BH;
            let [AH, rH] = HH;
            const SH = null !== (BH = (0, eA.kc)(rH.style)) && void 0 !== BH ? BH : "#ffffff";
            return (0, EH.jsxs)("div", {
              ref: HH => {
                LH[AH] && (LH[AH].Cw = HH)
              },
              className: "DirectionArrow",
              style: {
                fontSize: rH.style.fontSize,
                opacity: rH.style.opacity
              },
              children: [(0, EH.jsxs)("div", {
                className: "DirectionArrowChevron",
                ref: HH => {
                  LH[AH] && (LH[AH].chevronElement = HH)
                },
                children: [(0, EH.jsxs)("div", {
                  className: "DirectionArrowShadowLayer",
                  children: [(0, EH.jsx)("div", {
                    className: "DirectionArrowBar"
                  }), (0, EH.jsx)("div", {
                    className: "DirectionArrowBar"
                  })]
                }), (0, EH.jsxs)("div", {
                  className: "DirectionArrowBarLayer",
                  children: [(0, EH.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: SH
                    }
                  }), (0, EH.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: SH
                    }
                  })]
                })]
              }), (0, EH.jsx)("div", {
                className: "DirectionArrowMarker",
                style: {
                  background: SH,
                  boxShadow: `0 0 3px rgba(0, 0, 0, 0.8), 0 0 8px ${SH}`
                }
              }), rH.text && (0, EH.jsx)("div", {
                className: "DirectionArrowLabel SmallTextLight",
                style: {
                  color: SH,
                  fontWeight: rH.style.fontWeight,
                  fontStyle: rH.style.fontStyle
                },
                children: (0, EH.jsx)(CH.b, {
                  text: rH.text
                })
              }), rH.shouldShowDistance && (0, EH.jsx)("div", {
                className: "DirectionArrowDistance SmallTextLight",
                ref: HH => {
                  LH[AH] && (LH[AH].distanceElement = HH)
                },
                style: {
                  color: SH,
                  fontWeight: rH.style.fontWeight,
                  fontStyle: rH.style.fontStyle
                }
              })]
            }, AH)
          }))
        })
      })),
      nA = .5;
    const FA = (0, rH.memo)((function(HH) {
        let {
          isTouchScreen: BH
        } = HH;
        return (0, EH.jsxs)("div", {
          className: "BottomRightElements",
          "data-camera-keeper-host": "",
          children: [(0, EH.jsx)(dA, {}), BH && (0, EH.jsx)(GL, {})]
        })
      })),
      DA = {
        readyForNext: 0,
        running: 1
      },
      wA = 50;

    function ZA(HH) {
      console.assert(HH.state.current === DA.readyForNext);
      const BH = HH.queue.current,
        LH = HH.foreground.current;
      if (BH.length > 0 && LH) {
        const {
          toFraction: AH,
          toDuration: rH
        } = BH.shift();
        HH.state.current = DA.running, LH.style.transition = `transform ${Math.max(rH-wA,0)}ms linear`, LH.classList.remove("Complete"), HH.timeout.current = setTimeout((() => {
          LH.style.transform = `scaleX(${AH})`, HH.timeout.current = setTimeout((() => {
            1 === AH && LH.classList.add("Complete"), HH.state.current = DA.readyForNext, ZA(HH)
          }), Math.max(rH - wA, 0))
        }), wA)
      }
    }

    function dA() {
      const HH = (0, rH.useRef)([]),
        BH = (0, rH.useRef)(DA.readyForNext),
        LH = (0, rH.useRef)(void 0),
        AH = (0, rH.useRef)(null),
        SH = (0, rH.useRef)({
          queue: HH,
          state: BH,
          timeout: LH,
          foreground: AH
        }),
        hH = (0, PH.j)("showProgressBar");
      if ((0, rH.useLayoutEffect)((() => (hH && BH.current === DA.readyForNext && ZA(SH.current), () => {
          BH.current = DA.readyForNext, clearTimeout(LH.current), hH && (HH.current.length = 0)
        })), [hH]), (0, zH.d)("progressBarUpdate", (LH => {
          let {
            toFraction: AH,
            toDuration: rH
          } = LH;
          HH.current.push({
            toFraction: AH,
            toDuration: rH
          }), BH.current === DA.readyForNext && ZA(SH.current)
        })), !hH) return null;
      return (0, EH.jsx)("div", {
        className: "ProgressBarBackground",
        children: (0, EH.jsx)("div", {
          className: "ProgressBarForeground",
          ref: AH,
          style: {
            width: "15vw",
            transformOrigin: "left center",
            transform: "scaleX(0)"
          }
        })
      })
    }
    var aA = LH(37569),
      sA = LH(2661);
    const JA = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function iA(HH) {
      let {
        classes: BH,
        gone: LH
      } = HH;
      const AH = document.documentElement;
      AH.classList.remove(...BH);
      for (const rH of LH) rH.style.display = "block";
      return () => {
        AH.classList.add(...BH);
        for (const HH of LH) HH.style.display = ""
      }
    }

    function pA(HH) {
      const {
        isTouchScreen: BH
      } = (0, cH.m)(["isTouchScreen"]);
      (0, rH.useLayoutEffect)((() => {
        if (!BH) return;
        const LH = HH.current,
          AH = document.querySelector(`.${aA.i}`),
          rH = HH => {
            const BH = () => {
              const BH = HH.querySelector(sA.j),
                AH = function(HH) {
                  const BH = document.documentElement;
                  return {
                    classes: SB.A.map(CB.y).filter((HH => BH.classList.contains(HH))),
                    gone: [...HH.querySelectorAll(`.TopRightTrayToggle.${sA.m}`)]
                  }
                }(HH);
              BH && function(HH, BH) {
                (0, sA.y)(HH, BH.classes.length > 0 || BH.gone.length > 0, (() => iA(BH)))
              }(BH, AH);
              const rH = `${Math.floor(function(HH,BH,LH){const AH=document.documentElement,rH=AH.classList.contains((0,CB.A)("menu")),SH=AH.style.getPropertyValue((0,CB.D)("menu"));if(!rH&&""===SH)return HH.getBoundingClientRect().left;const hH=BH?(0,sA.o)(BH):()=>{},tH=iA(LH);AH.classList.remove((0,CB.A)("menu")),AH.style.removeProperty((0,CB.D)("menu"));const zH=HH.getBoundingClientRect().left;return tH(),hH(),rH&&AH.classList.add((0,CB.A)("menu")),""!==SH&&AH.style.setProperty((0,CB.D)("menu"),SH),zH}(HH,BH,AH)-LH.getBoundingClientRect().left-4)}px`;
              LH.style.getPropertyValue("--InGameHeaderMaxWidth") !== rH && LH.style.setProperty("--InGameHeaderMaxWidth", rH)
            };
            BH();
            const rH = new ResizeObserver(BH);
            rH.observe(HH), rH.observe(AH), window.addEventListener("resize", BH);
            const SH = () => JA.map((HH => document.documentElement.style.getPropertyValue(HH))).join();
            let hH = SH();
            const tH = new MutationObserver((() => {
              const HH = SH();
              HH !== hH && (hH = HH, BH())
            }));
            tH.observe(document.documentElement, {
              attributes: !0,
              attributeFilter: ["style"]
            });
            const zH = (0, YH.m)(CB.e, BH),
              CH = new MutationObserver(BH);
            return CH.observe(HH, {
              childList: !0,
              subtree: !0
            }), () => {
              rH.disconnect(), tH.disconnect(), CH.disconnect(), zH(), window.removeEventListener("resize", BH);
              const LH = HH.querySelector(sA.j);
              LH && (0, sA.o)(LH)
            }
          },
          SH = () => AH.querySelector(".TopRightIconsContainer"),
          hH = SH();
        let tH;
        if (hH) tH = rH(hH);
        else {
          const HH = new MutationObserver((() => {
            const BH = SH();
            BH && (HH.disconnect(), tH = rH(BH))
          }));
          HH.observe(AH, {
            childList: !0,
            subtree: !0
          }), tH = () => {
            HH.disconnect()
          }
        }
        return () => {
          tH(), LH.style.removeProperty("--InGameHeaderMaxWidth")
        }
      }), [BH, HH])
    }
    var yA = LH(4052),
      Hr = LH(4049),
      Br = LH(1659),
      Lr = LH(1502),
      Ar = LH(1664),
      rr = LH(1789),
      Sr = LH(1922),
      hr = LH(1070),
      tr = LH(4665),
      zr = LH(1361);
    const Cr = 2e4,
      Er = 6e5,
      Xr = new Set;

    function Gr() {
      const {
        gameEntrySource: HH,
        loadingOverlayVisible: BH
      } = (0, cH.m)(["gameEntrySource", "loadingOverlayVisible"]), LH = (0, eH.c)("connectedGame", (HH => (0, tr.e)(HH) ? HH.lobbyName : null)), AH = (0, eH.e)("localPlayerAlive"), SH = (0, eH.c)("players", (HH => null !== HH.localId && void 0 !== HH.byId[HH.localId])), [hH, tH] = (0, rH.useState)(null);
      return !BH && AH && SH && null !== LH && hH !== LH && tH(LH), (0, rH.useEffect)((() => {
        if (!(0, tr.h)(HH) || null === hH || hH !== LH || Xr.has(hH)) return;
        const BH = setTimeout((() => {
          Xr.add(hH), async function(HH) {
            const BH = await hr.userContextManager.getCurrentUserContext();
            let LH;
            try {
              LH = (await Lr.d.getWorldOwnerFriendOffer(BH)).owner
            } catch (rH) {
              return void console.warn("Couldn't ask who owns this world", rH)
            }
            if (!LH || (0, tr.n)(LH.name, Date.now())) return;
            const AH = LH;
            ! function(HH, BH) {
              const LH = Date.now() + Er;
              let AH = Date.now(),
                rH = 0;
              const SH = () => {
                const hH = Date.now(),
                  tH = uH.gameBridge.latest("connectedGame");
                tH.lobbyName !== HH || hH > LH || (null === tH.websocketUrl ? AH = 1 / 0 : AH === 1 / 0 && !cH.c.get("loadingOverlayVisible") && uH.gameBridge.latest("localPlayerAlive") && (AH = hH + Cr), rH = hH < AH || !uH.gameBridge.latest("localPlayerAlive") || cH.c.get("isUiHidden") || cH.c.get("isUiHiddenByCamera") || (0, rr.isTypingInInput)() || cH.c.get("loadingOverlayVisible") || (0, Br.t)() || (0, yA.i)() || (0, zr.n)() ? 0 : rH + 1, rH >= 2 ? BH() : setTimeout(SH, 500))
              };
              SH()
            }(HH, (() => {
              (0, tr.d)(Ar.d.getSocialState().friends, AH.name) || ((0, tr.l)(AH.name, Date.now()), Sr.h.showWorldOwnerOffer(AH), (0, HL.reportAnalyticsClick)({
                id: "social.world_owner_offer",
                value: "shown"
              }))
            }))
          }(hH).catch((HH => {
            console.error("Failed to offer the world's owner as a friend", HH)
          }))
        }), Cr);
        return () => {
          clearTimeout(BH)
        }
      }), [HH, hH, LH]), null
    }
    var Yr = LH(1973);
    const ur = (0, rH.memo)((function(HH) {
        let {
          durationMs: BH,
          endsAtMs: LH
        } = HH;
        const [, AH] = (0, rH.useReducer)((HH => HH + 1), 0), SH = null === LH ? BH : Math.max(LH - Date.now(), 0);
        return (0, rH.useEffect)((() => {
          if (null === LH || SH <= 0) return;
          const HH = setTimeout(AH, SH - 1e3 * (Math.ceil(SH / 1e3) - 1));
          return () => {
            clearTimeout(HH)
          }
        })), (0, EH.jsx)("div", {
          className: "EffectInfoDuration SmallTextLight",
          children: (0, sL.$)(SH)
        })
      })),
      Qr = (0, rH.memo)((function() {
        const HH = (0, eH.e)("localEffects");
        return (0, EH.jsxs)("div", {
          className: "EffectInfosWrapper",
          children: [Object.entries(HH).map((HH => {
            let [BH, {
              icon: LH,
              displayName: AH,
              durationMs: rH,
              endsAtMs: SH,
              level: hH
            }] = HH;
            return (0, EH.jsxs)("div", {
              className: "EffectInfo",
              children: [(0, EH.jsx)(Yr.c, {
                icon: LH,
                className: "EffectInfoIcon"
              }), (0, EH.jsxs)("div", {
                className: "EffectInfoRightSide",
                style: {
                  marginTop: null !== rH ? "0" : "1rem"
                },
                children: [(0, EH.jsxs)("div", {
                  className: "EffectInfoNameWrapper",
                  children: [(0, EH.jsx)(CH.b, {
                    text: null !== AH && void 0 !== AH ? AH : BH,
                    className: "EffectInfoName SmallTextBold"
                  }), hH > 1 && (0, EH.jsx)("div", {
                    className: "EffectInfoName SmallTextBold",
                    children: (0, sL.T)(hH)
                  })]
                }), null !== rH && (0, EH.jsx)(ur, {
                  durationMs: rH,
                  endsAtMs: SH
                })]
              })]
            }, BH)
          })), (0, EH.jsx)(lL.d, {
            placement: "bottomLeft"
          })]
        })
      }));
    var Wr = LH(37573),
      Mr = LH(37770),
      xr = LH(176),
      vr = LH(3030);
    var Pr = LH(3235);

    function Tr(HH, BH) {
      (0, rH.useLayoutEffect)((() => {
        let BH, LH;
        const AH = requestAnimationFrame((() => {
          LH = setTimeout((() => {
            LH = void 0;
            const AH = HH();
            BH = "function" === typeof AH ? AH : void 0
          }), 0)
        }));
        return () => {
          var HH;
          cancelAnimationFrame(AH), clearTimeout(LH), null === (HH = BH) || void 0 === HH || HH()
        }
      }), BH)
    }
    const Ur = [5, 5, 5],
      Vr = [7, 4, 4, 4];

    function Or(HH) {
      return HH.reduce(((HH, BH) => HH + BH), 0)
    }

    function br(HH, BH, LH, AH, rH) {
      const SH = HH.getContext("2d");
      if (!SH) return null;
      const hH = BH.color,
        tH = `${BH.fontWeight} ${rH}px ${BH.fontFamily}`,
        zH = () => {
          HH.width = LH, HH.height = AH, SH.fillStyle = hH, SH.textAlign = "center", SH.textBaseline = "middle", SH.font = tH
        };
      return zH(), {
        ctx: SH,
        reset: zH
      }
    }
    const kr = (0, rH.memo)((function(HH) {
      let {
        show: BH,
        asText: LH
      } = HH;
      const AH = (0, rH.useRef)(null),
        SH = (0, rH.useRef)(null),
        hH = (0, rH.useRef)(null),
        tH = (0, rH.useRef)(null),
        zH = (0, WH.g)();
      return (0, rH.useEffect)((() => zH.whenShown((() => {
        let HH = 0,
          BH = 0,
          LH = performance.now(),
          AH = 0;
        const rH = (0, NA.B)((() => {
          var rH, SH, zH;
          HH++, BH++;
          const CH = performance.now();
          if (CH - LH < 1e3) return;
          const EH = Math.round(HH / (CH - LH) * 1e3);
          if (hH.current = EH, null === (rH = tH.current) || void 0 === rH || rH.call(tH, EH), HH = 0, LH = CH, EH >= 55) return void(AH = 0);
          if (AH += 1, AH < 15) return;
          const XH = null !== (SH = AL.e.getItem("decreaseLoadDistPromptDeniedCount")) && void 0 !== SH ? SH : 0,
            [GH, QH] = DL.e.get("minChunkAddDist");
          if (function(HH, BH) {
              const LH = uH.gameBridge.lookup("jT", null);
              return null !== LH && (LH.horizontal > HH || LH.vertical > BH)
            }(GH, QH) && (null !== (zH = AL.e.getItem("lastDecreaseLoadDistPromptTime")) && void 0 !== zH ? zH : 0) + 432e5 < Date.now() && XH < 3) {
            AL.e.setItem("lastDecreaseLoadDistPromptTime", Date.now());
            LL.NotificationProvider.showPromptPopup({
              title: "Lag (low FPS) caused by high chunk load distance. Decrease it?",
              confirmText: "general:yes",
              cancelText: "general:no",
              unlockPointerKey: "chunkLoadDistanceLagPopup"
            }).getResult().then((HH => {
              "notificationTornDown" !== HH && (HH ? (uH.gameBridge.send("setChunkAddDistance", {
                horizontal: GH,
                vertical: QH
              }), AL.e.setItem("chunkHorizAddDist", GH), AL.e.setItem("chunkVertAddDist", QH), YH.k.AX("updatedChunkLoadDist"), AL.e.setItem("decreaseLoadDistPromptDeniedCount", 0)) : AL.e.setItem("decreaseLoadDistPromptDeniedCount", XH + 1))
            }))
          }
        }));
        let SH = performance.now();
        BH = 0;
        let zH = null,
          CH = !document.hidden,
          EH = !1;

        function XH() {
          const HH = performance.now() - SH,
            LH = 1e3 * BH / HH;
          CH && !EH && (null === zH && (zH = LH), vr.c.setFps(LH, zH)), BH = 0, SH = performance.now()
        }
        let GH = setInterval(XH, Pr.c);

        function QH() {
          BH = 0, SH = performance.now(), clearInterval(GH), GH = setInterval(XH, Pr.c)
        }

        function WH() {
          const HH = CH;
          CH = !document.hidden, !HH && CH && QH()
        }
        document.addEventListener("visibilitychange", WH);
        const MH = (0, YH.m)(FL.i, (HH => {
          const BH = EH;
          EH = (0, FL.m)(HH), BH && !EH && QH()
        }));
        return () => {
          rH(), document.removeEventListener("visibilitychange", WH), MH(), clearInterval(GH)
        }
      }))), [zH]), Tr((() => {
        var HH;
        if (LH) {
          const HH = document.createTextNode("");
          SH.current.appendChild(HH);
          const BH = function(HH) {
            return BH => {
              const LH = BH.toString();
              HH.data !== LH && (HH.data = LH)
            }
          }(HH);
          return tH.current = BH, null !== hH.current && BH(hH.current), () => {
            HH.remove(), tH.current = null
          }
        }
        if (!BH || tH.current) return;
        const rH = AH.current,
          zH = window.getComputedStyle(rH.parentElement),
          CH = null !== (HH = window.devicePixelRatio) && void 0 !== HH ? HH : 1,
          EH = parseFloat(zH.fontSize) * CH,
          XH = Math.round(3 * EH),
          GH = Math.round(EH),
          YH = br(rH, zH, XH, GH, EH);
        if (!YH) return;
        const {
          ctx: uH,
          reset: QH
        } = YH, WH = HH => {
          QH(), uH.fillText(HH.toString(), rH.width / 2, rH.height / 2)
        };
        tH.current = WH, null !== hH.current && WH(hH.current)
      }), [BH, LH]), (0, EH.jsxs)("div", {
        className: "FpsWrapperDiv",
        style: {
          display: BH ? "flex" : "none"
        },
        children: [(0, EH.jsx)("div", {
          className: "FpsLabel",
          children: "FPS"
        }), LH && (0, EH.jsx)("span", {
          className: "FpsText",
          ref: SH
        }), !LH && (0, EH.jsx)("canvas", {
          className: "FpsCanvas",
          ref: AH,
          width: 48,
          height: 16
        })]
      })
    }));

    function mr(HH) {
      return Math.sign(HH) * Math.round(100 * Math.abs(HH))
    }

    function or(HH) {
      let {
        getCoordinates: BH,
        showChunkCoords: LH,
        columns: AH
      } = HH;
      const SH = (0, rH.useRef)(null);
      return Tr((() => {
        var HH;
        const rH = SH.current,
          hH = window.getComputedStyle(rH.parentElement),
          tH = null !== (HH = window.devicePixelRatio) && void 0 !== HH ? HH : 1,
          zH = parseFloat(hH.fontSize) * tH,
          CH = Math.round(zH * Or(AH)),
          EH = Math.round(zH),
          XH = br(rH, hH, CH, EH, zH);
        if (!XH) return;
        const {
          ctx: GH,
          reset: YH
        } = XH;
        let QH = !0,
          WH = 0,
          MH = 0,
          xH = 0,
          vH = 0,
          PH = 0,
          TH = 0;
        const UH = () => {
          QH = !0
        };
        document.fonts.load(GH.font).then(UH, UH);
        const VH = () => {
          YH(), UH()
        };
        rH.addEventListener("contextrestored", VH);
        let OH = performance.now();
        const bH = (0, NA.F)((() => {
          var HH, SH, hH, tH, CH, EH;
          const XH = performance.now();
          XH - OH >= 1e3 && (OH = XH, YH(), UH());
          const [VH, bH, kH] = BH(), mH = mr(VH), oH = mr(bH), IH = mr(kH);
          let fH = null;
          if (LH) {
            const HH = uH.gameBridge.lookup("localPos", null);
            fH = (0, wH.fb)(HH[0], HH[1], HH[2])
          }
          const lH = null !== (HH = null === (SH = fH) || void 0 === SH ? void 0 : SH[0]) && void 0 !== HH ? HH : 0,
            KH = null !== (hH = null === (tH = fH) || void 0 === tH ? void 0 : tH[1]) && void 0 !== hH ? hH : 0,
            cH = null !== (CH = null === (EH = fH) || void 0 === EH ? void 0 : EH[2]) && void 0 !== CH ? CH : 0;
          if (!QH && mH === WH && oH === MH && IH === xH && lH === vH && KH === PH && cH === TH) return;
          QH = !1, WH = mH, MH = oH, xH = IH, vH = lH, PH = KH, TH = cH;
          const eH = [(mH / 100).toFixed(2), (oH / 100).toFixed(2), (IH / 100).toFixed(2)];
          fH && eH.unshift(`${lH} ${KH} ${cH}`), GH.clearRect(0, 0, rH.width, rH.height);
          const qH = rH.height / 2;
          let gH = 0;
          for (let BH = 0; BH < eH.length; BH++) {
            const HH = zH * AH[BH];
            GH.fillText(eH[BH], gH + HH / 2, qH, HH), gH += HH
          }
        }));
        return () => {
          bH(), rH.removeEventListener("contextrestored", VH)
        }
      }), [BH, LH, AH]), (0, EH.jsx)("div", {
        className: "CoordinateUI",
        children: (0, EH.jsx)("canvas", {
          ref: SH,
          className: "CoordinateCanvas",
          width: 16 * Or(AH),
          height: 16
        })
      })
    }
    const Ir = (0, rH.memo)((function() {
        const HH = (0, rH.useCallback)((() => {
          const HH = uH.gameBridge.lookup("localPos", null);
          return [HH[0], HH[1], HH[2]]
        }), []);
        return (0, EH.jsx)(or, {
          getCoordinates: HH,
          showChunkCoords: !1,
          columns: Ur
        })
      })),
      fr = (0, rH.memo)((function() {
        const HH = (0, rH.useCallback)((() => {
          const HH = uH.gameBridge.lookup("localPos", null),
            BH = xr.g.xX;
          let LH = HH[0] % BH,
            AH = HH[1] % BH,
            rH = HH[2] % BH;
          return LH < 0 && (LH += BH), AH < 0 && (AH += BH), rH < 0 && (rH += BH), [LH, AH, rH]
        }), []);
        return (0, EH.jsx)(or, {
          getCoordinates: HH,
          showChunkCoords: !0,
          columns: Vr
        })
      }));
    var lr = LH(2131),
      Kr = LH(1313),
      cr = LH(1005),
      er = LH(1168),
      qr = LH(37608),
      gr = LH(1457),
      Nr = LH(3503);
    const Rr = (0, rH.memo)((function() {
      const HH = (0, PH.j)("maxAuraLevel");
      return 0 === HH ? null : (0, EH.jsx)(jr, {
        maxLevel: HH
      })
    }));

    function jr(HH) {
      let {
        maxLevel: BH
      } = HH;
      const LH = (0, PH.j)("auraPerLevel"),
        [AH, SH] = (0, rH.useState)((() => {
          var HH;
          return null !== (HH = uH.gameBridge.latest("aura")) && void 0 !== HH ? HH : void 0
        })),
        [hH, tH] = (0, rH.useState)((() => xH(AH))),
        [zH, CH] = (0, rH.useReducer)((HH => HH + 1), 0),
        XH = (0, rH.useRef)(null),
        GH = (0, rH.useRef)([]),
        YH = (0, rH.useRef)({
          width: 0,
          level: 0
        }),
        QH = (0, rH.useRef)(null),
        WH = (0, rH.useRef)(null);

      function MH() {
        if (null !== QH.current) return;
        if (0 === GH.current.length) return;
        const {
          width: HH,
          level: BH
        } = GH.current.shift();
        let LH;
        if (BH !== YH.current.level && BH > YH.current.level !== HH > YH.current.width) {
          const AH = BH > YH.current.level;
          LH = AH ? HH : 100 - HH, XH.current.style.transition = "none", XH.current.style.width = AH ? "0%" : "100%", XH.current.offsetWidth
        } else LH = Math.abs(HH - YH.current.width);
        const AH = 100 * LH / 20;
        XH.current.style.transition = `width ${AH}ms linear`, tH(HH), YH.current = {
          width: HH,
          level: BH
        }, GH.current.length > 0 && (QH.current = setTimeout((() => {
          QH.current = null, MH()
        }), AH))
      }

      function xH(HH) {
        return Math.floor(HH / LH) === BH ? 100 : HH % LH / LH * 100
      }
      return (0, rH.useEffect)((() => () => {
        clearTimeout(QH.current), clearTimeout(WH.current), QH.current = null, WH.current = null
      }), []), (0, eH.b)("aura", (HH => {
        if (WH.current && clearTimeout(WH.current), null === HH) return clearTimeout(QH.current), WH.current = null, QH.current = null, GH.current = [], YH.current = {
          width: 0,
          level: 0
        }, SH(void 0), void tH(0);
        WH.current = setTimeout((() => {
          const BH = Math.floor(AH / LH),
            rH = Math.floor(HH / LH),
            hH = xH(HH);
          HH > AH && qr.c.play("exp_collect", .1).rate(1.6 + .5 * Math.random()), rH > BH ? (rH % 5 === 0 && qr.c.play("exp_levelup", .45).rate(.95 + .1 * Math.random()), CH(), GH.current.push({
            width: 100,
            level: BH
          })) : rH < BH && GH.current.push({
            width: 0,
            level: BH
          }), HH === AH && rH === BH || GH.current.push({
            width: hH,
            level: rH
          }), SH(HH), MH()
        }), 50)
      })), (0, UH.d)(), (0, EH.jsxs)("div", {
        className: "AuraBarWrapper",
        children: [(0, EH.jsxs)("div", {
          className: "AuraBarLabel SmallTextBold",
          children: [(0, EH.jsx)(gr.e, {
            showSignal: zH,
            particleElement: (0, EH.jsx)("img", {
              src: (0, Nr.f)("glint"),
              alt: ""
            })
          }), (0, EH.jsx)("img", {
            className: "AuraBarLabelImage",
            src: (0, Nr.f)("glint"),
            alt: "aura"
          }), (0, EH.jsx)("div", {
            className: "AuraBarLabelText",
            children: Math.floor((null !== AH && void 0 !== AH ? AH : 0) / LH)
          })]
        }), (0, EH.jsx)("div", {
          className: "AuraBar",
          children: (0, EH.jsx)("div", {
            ref: XH,
            className: "AuraBarBackground",
            style: {
              width: `${hH}%`
            }
          })
        })]
      })
    }
    var nr = LH(2809);

    function Fr(HH) {
      HH.timed && (HH.endedAnimation = HH.timed.animation, HH.timed = null)
    }
    const Dr = (0, rH.memo)((function() {
      const HH = (0, rH.useRef)(null),
        BH = (0, rH.useRef)(null),
        LH = (0, rH.useRef)({
          timed: null,
          endedAnimation: null
        });
      return (0, zH.d)("middleScreenBarInitiate", (HH => {
        var AH;
        let {
          duration: rH,
          NS: SH,
          horizBarRemOffset: hH
        } = HH;
        const tH = LH.current;
        Fr(tH);
        const zH = BH.current;
        if (!(rH >= 0) || !zH) return;
        null === (AH = tH.endedAnimation) || void 0 === AH || AH.cancel(), tH.endedAnimation = null;
        const CH = zH.animate([{
          transform: "scaleX(0)"
        }, {
          transform: "scaleX(1)"
        }], {
          duration: rH,
          fill: "forwards"
        });
        tH.timed = {
          NS: SH,
          horizBarRemOffset: hH,
          animation: CH
        }
      })), (0, zH.d)("middleScreenBarRemove", (() => {
        Fr(LH.current)
      })), (0, rH.useEffect)((() => {
        const AH = LH.current;
        let rH = Number.NaN,
          SH = Number.NaN,
          hH = Number.NaN;
        return (0, NA.x)((() => {
          var LH, tH, zH, CH;
          const EH = HH.current,
            XH = BH.current;
          if (!EH || !XH) return;
          null !== (LH = AH.timed) && void 0 !== LH && LH.NS && "finished" === AH.timed.animation.playState && Fr(AH), null === (tH = AH.endedAnimation) || void 0 === tH || tH.cancel(), AH.endedAnimation = null;
          let GH = AH.timed ? 1 : 0;
          if (!AH.timed) {
            const HH = uH.gameBridge.lookup("momentumFrac", null);
            GH = HH > 0 ? 1 : 0, HH !== hH && (hH = HH, XH.style.transform = `scaleX(${HH})`)
          }
          const YH = null !== (zH = null === (CH = AH.timed) || void 0 === CH ? void 0 : CH.horizBarRemOffset) && void 0 !== zH ? zH : 0;
          YH === rH && GH === SH || (rH = YH, SH = GH, EH.style.transform = `translateX(calc(-50% + ${YH}rem)) scaleX(${GH})`)
        }))
      }), []), (0, EH.jsx)("div", {
        className: "MiddleScreenBar",
        ref: HH,
        children: (0, EH.jsx)("div", {
          className: "MiddleScreenBarFill",
          ref: BH
        })
      })
    }));
    var wr = LH(5131),
      Zr = LH(3006);

    function dr() {
      const {
        t: HH
      } = (0, DH.B)(), BH = (0, zH.e)("serverUpdating", null), LH = (0, Zr.c)(250, null !== BH);
      return null === BH || LH - BH > 3e4 ? null : (0, EH.jsxs)("div", {
        className: "UpdateCountdownBanner",
        children: [(0, EH.jsx)("div", {
          className: "UpdateCountdownBannerTitle",
          children: HH("updateWaiting:updatingIn", {
            countdown: (0, wr.p)(BH - LH)
          })
        }), (0, EH.jsx)("div", {
          children: HH("updateWaiting:bringYouBack")
        })]
      })
    }
    var ar = LH(37791),
      sr = LH(2064),
      Jr = LH(2081),
      ir = LH(2059);
    const pr = [{
        translationKey: "general:interact"
      }],
      yr = (0, rH.memo)((function() {
        const HH = (0, PH.j)("crosshairText"),
          {
            interactPrompt: BH,
            blockText: LH,
            neededTool: AH
          } = (0, eH.e)("crosshairTarget"),
          {
            isTouchScreen: SH
          } = (0, cH.m)(["isTouchScreen"]),
          hH = (0, gH.y)(),
          tH = (0, Jr.d)("alt-fire");
        (0, rH.useEffect)((() => {
          uH.gameBridge.send("setCrosshairInteractPrompt", !SH || hH ? "key" : "touch")
        }), [SH, hH]);
        const [XH, GH] = (0, rH.useReducer)((HH => HH + 1), 0);
        (0, zH.d)("customBindingsChanged", GH);
        var YH;
        if (null !== BH && (hH && null !== tH || !SH && null !== (0, sr.r)("alt-fire"))) return (0, EH.jsxs)("div", {
          className: "CrosshairText SmallTextBold InteractPrompt",
          children: [(0, EH.jsx)(ir.b, {
            noaAction: "alt-fire"
          }), (0, EH.jsx)(CH.b, {
            text: null !== (YH = BH.label) && void 0 !== YH ? YH : pr
          })]
        });
        let QH = null;
        return null !== LH ? QH = LH : null !== HH && "" !== HH ? QH = HH : null !== AH && (QH = [{
          icon: AH,
          style: {
            opacity: .8
          }
        }, {
          str: " needed",
          style: {
            opacity: .8
          }
        }]), QH ? (0, EH.jsx)("div", {
          className: "CrosshairText SmallTextBold",
          children: (0, EH.jsx)(CH.b, {
            text: QH
          })
        }) : null
      }));
    var HS = LH(2817);
    const BS = (0, rH.memo)((function() {
      var HH;
      const {
        interactPrompt: BH
      } = (0, eH.e)("crosshairTarget"), {
        openInGameMenuName: LH,
        openEverythingMenuName: AH
      } = (0, cH.m)(["openInGameMenuName", "openEverythingMenuName"]), rH = (0, zH.e)("aimingOverlay", "none"), SH = (0, qH.k)(), hH = (0, HS.b)();
      return null === BH || null !== LH || null !== AH || "sniper" === rH || SH || hH ? null : (0, EH.jsx)(LS, {
        label: null !== (HH = BH.label) && void 0 !== HH ? HH : pr
      })
    }));

    function LS(HH) {
      let {
        label: BH
      } = HH;
      const LH = VB(jH.d.Interact, !1);
      return (0, rH.useEffect)((() => (YH.k.AX(CB.r), () => {
        YH.k.AX(CB.r)
      })), []), (0, EH.jsx)("div", {
        ref: LH,
        className: "TouchInteractHit",
        children: (0, EH.jsxs)("div", {
          className: "TouchInteractKey",
          children: [(0, EH.jsx)("span", {
            className: "TouchInteractIcon",
            children: (0, EH.jsx)(VH.c, {
              name: "hand-back-point-up"
            })
          }), (0, EH.jsx)(CH.b, {
            text: BH
          })]
        })
      })
    }
    var AS = LH(69),
      rS = LH(34883),
      SS = LH(1807),
      hS = LH(34898);
    const tS = "ScreenshotMode";
    let zS = [];
    const CS = new Set;

    function ES(HH) {
      zS = HH;
      for (const BH of CS) BH(HH)
    }
    const XS = (0, rH.memo)((function() {
      const {
        screenshotMode: HH,
        isTouchScreen: BH,
        openEverythingMenuName: LH,
        openInGameMenuName: AH
      } = (0, cH.m)(["screenshotMode", "isTouchScreen", "openEverythingMenuName", "openInGameMenuName"]), SH = null !== LH || null !== AH, hH = (0, eH.e)("localPlayerAlive");
      return (0, rH.useEffect)((() => {
        !HH || !SH && BH && hH || (0, rS.g)()
      }), [HH, SH, BH, hH]), (0, rH.useEffect)((() => rS.g), []), (0, rH.useEffect)((() => {
        if (HH) return document.documentElement.classList.add(tS), (0, nH.k)(NH.w.ScreenshotMode, NH.w.ScreenshotMode, "screenshotMode"), () => {
          document.documentElement.classList.remove(tS), (0, nH.k)(NH.w.ScreenshotMode, 0, "screenshotMode")
        }
      }), [HH]), HH ? (0, AS.createPortal)((0, EH.jsx)(GS, {}), document.body) : null
    }));

    function GS() {
      const {
        t: HH
      } = (0, DH.B)(), [BH, LH] = (0, rH.useState)(!1), [AH, SH] = (0, rH.useState)(0), [hH, tH] = (0, rH.useState)(null), zH = function() {
        const [HH, BH] = (0, rH.useState)(zS);
        return (0, rH.useEffect)((() => (CS.add(BH), BH(zS), () => {
          CS.delete(BH)
        })), []), HH
      }(), CH = (0, rH.useRef)(), XH = (0, rH.useRef)(!1);
      (0, rH.useEffect)((() => () => {
        clearTimeout(CH.current)
      }), []);
      const GH = HH => {
          clearTimeout(CH.current), tH(HH), HH && (CH.current = setTimeout((() => {
            tH(null)
          }), 2e3))
        },
        YH = (BH, LH) => {
          switch (BH) {
            case "saved":
              GH(HH("screenshotMode:saved"));
              break;
            case "denied":
              GH(HH("screenshotMode:denied"));
              break;
            case "needsTap":
              zS.length >= 8 ? (console.error("Screenshot mode: 8 photos already wait on Save photo"), GH(HH("screenshotMode:saveWaitingFirst"))) : ES([...zS, LH])
          }
        },
        uH = BH => {
          console.error("Screenshot mode: the photo wasn't saved", BH), GH(HH("screenshotMode:failed"))
        };
      return (0, EH.jsxs)("div", {
        className: "ScreenshotModeOverlay",
        children: [(0, EH.jsx)("div", {
          className: "ScreenshotModeViewfinder",
          "aria-hidden": !0
        }), (0, EH.jsx)("div", {
          className: "ScreenshotModeCentre",
          "aria-hidden": !0
        }), AH > 0 && (0, EH.jsx)("div", {
          className: "ScreenshotModeFlash"
        }, AH), (0, EH.jsx)("button", {
          type: "button",
          className: "ScreenshotModeButton ScreenshotModeBack",
          "aria-label": HH("screenshotMode:back"),
          onClick: rS.g,
          children: (0, EH.jsx)(VH.c, {
            name: "arrow-left"
          })
        }), (0, EH.jsx)("button", {
          type: "button",
          className: "ScreenshotModeButton ScreenshotModeShutter",
          "aria-label": HH("screenshotMode:takePhoto"),
          "aria-busy": BH,
          onClick: () => {
            (async () => {
              if (!BH) {
                LH(!0), GH(null);
                try {
                  const HH = await (0, rS.k)();
                  SH((HH => HH + 1)), YH(await (0, hS.f)(HH), HH)
                } catch (HH) {
                  uH(HH)
                } finally {
                  LH(!1)
                }
              }
            })()
          },
          children: (0, EH.jsx)(VH.c, {
            name: "camera-alt"
          })
        }), null !== hH ? (0, EH.jsx)("div", {
          className: "ScreenshotModeNote",
          role: "status",
          children: hH
        }) : zH.length > 0 && (0, EH.jsxs)("button", {
          type: "button",
          className: "ScreenshotModeNote ScreenshotModeSaveNote",
          onClick: () => {
            if (XH.current) return;
            XH.current = !0;
            const [HH] = zS;
            ES(zS.slice(1));
            const BH = BH => {
              console.warn("Screenshot mode: downloading a photo the share sheet didn't take", BH), (0, SS.e)(HH, HH.name), YH("saved", HH)
            };
            (0, hS.h)(HH).then((LH => {
              "needsTap" === LH ? BH(LH) : YH(LH, HH)
            }), BH).catch(uH).finally((() => {
              XH.current = !1
            }))
          },
          children: [(0, EH.jsx)(VH.c, {
            name: "image"
          }), HH("screenshotMode:savePhoto"), zH.length > 1 && ` (${zH.length})`]
        })]
      })
    }
    var YS = LH(5248),
      uS = LH(5308);
    const QS = (0, rH.forwardRef)((function(HH, BH) {
        let {
          text: LH,
          className: AH,
          children: rH
        } = HH;
        return LH.hasText ? (0, EH.jsx)("div", {
          ref: BH,
          className: hH()("HudTextPanel", AH, {
            NoBackground: !LH.showBackground
          }),
          children: null !== rH && void 0 !== rH ? rH : (0, EH.jsx)(CH.b, {
            text: LH.content
          })
        }) : null
      })),
      WS = (0, rH.memo)((function() {
        const HH = (0, PH.n)("middleTextTop"),
          [BH, LH] = (0, rH.useState)(null),
          AH = (0, aA.k)(BH);
        return HH.hasText ? (0, EH.jsx)("div", {
          className: hH()("MiddleTextTopContainer", {
            MiddleTextTopBelow: AH
          }),
          children: (0, EH.jsx)(QS, {
            ref: LH,
            className: "MiddleTextTop",
            text: HH
          })
        }) : null
      })),
      MS = (0, rH.memo)((function() {
        const HH = (0, PH.e)();
        return (0, EH.jsx)(EH.Fragment, {
          children: HH.map(((HH, BH) => (0, EH.jsx)(QS, {
            className: "HeaderChip",
            text: HH
          }, BH)))
        })
      }));
    var xS = LH(5009);
    const vS = (0, rH.memo)((function() {
      const {
        t: HH
      } = (0, DH.B)(), [BH, LH] = (0, rH.useState)(!1), AH = (0, rH.useRef)(!1), SH = function(HH) {
        let {
          gameNameWithVariation: BH,
          lobbyName: LH
        } = HH;
        if ((0, cr.l)(BH)) return "customGame";
        if ((0, er.G)(LH)) return "lobby";
        return null
      }((0, eH.e)("connectedGame"));
      if (!SH || BH) return null;
      const hH = xS.e[SH];
      return (0, EH.jsx)(TH.g, {
        tooltipInner: (0, EH.jsx)("div", {
          children: HH(hH.reportButtonTooltip)
        }),
        children: (0, EH.jsx)("div", {
          children: (0, EH.jsx)(RL.V, {
            onClick: () => {
              AH.current || (AH.current = !0, (0, xS.f)(hH).then((HH => {
                null !== HH && void 0 !== HH && HH.selectedPolicyId && (uH.gameBridge.send("reportLobbyOrGame", {
                  target: SH,
                  policy: HH.selectedPolicyId,
                  details: HH.Jh
                }), LH(!0))
              })).finally((() => {
                AH.current = !1
              })))
            }
          })
        })
      })
    }));
    var PS = LH(9484),
      TS = LH(37807),
      US = LH(37812),
      VS = LH(37821),
      OS = LH(37826),
      bS = LH(37809);
    let kS = !1;
    async function mS(HH, BH) {
      var LH, AH;
      const {
        files: rH
      } = BH, SH = rH.replayKey();
      if (null === SH) return "none";
      if (kS) throw new Error(bS.e.saveBusy.text);
      const hH = null !== (LH = null === (AH = rH.saveRefusal) || void 0 === AH ? void 0 : AH.call(rH)) && void 0 !== LH ? LH : null;
      if (null !== hH) throw new Error(hH);
      kS = !0;
      try {
        return await async function(HH, BH, LH) {
          const {
            files: AH
          } = BH, rH = () => AH.replayKey() === LH, SH = (HH, BH) => {
            rH() && AH.markSaved(HH, BH)
          };
          let hH = null;
          if (BH.pickerSupported()) {
            try {
              if (hH = await BH.chooseFile(HH ? null : AH.fileHandle()), null === hH) return "xB"
            } catch (zH) {
              BH.onFallback(zH)
            }
            if (!rH()) throw new Error(bS.e.saveClosed.text)
          }
          const tH = await AH.encode();
          if (null === tH) {
            if (null !== hH) throw new Error(bS.e.saveClosed.text);
            return "none"
          }
          if (null !== hH) try {
            return await BH.write(hH, tH), SH(hH), "written"
          } catch (zH) {
            BH.onFallback(zH)
          }
          return SH(null, BH.download(tH)), "downloaded"
        }(HH, BH, SH)
      } finally {
        kS = !1
      }
    }
    var oS = LH(37853),
      IS = LH(4951);
    const fS = [1, 2, 4, 8, 16, 32, 64];

    function lS(HH, BH) {
      return Math.max(0, Math.min(HH, BH))
    }

    function KS(HH, BH, LH) {
      return LH <= BH ? 0 : (HH - BH) / (LH - BH) * 100
    }

    function cS(HH, BH, LH) {
      const AH = LH - BH;
      return Math.round(BH + HH / 100 * AH)
    }

    function eS(HH, BH) {
      const LH = Math.floor(HH / BH / 60),
        AH = Math.floor(HH / BH % 60),
        rH = HH % BH;
      return `${LH.toString().padStart(2,"0")}:${AH.toString().padStart(2,"0")}:${rH.toString().padStart(2,"0")}`
    }

    function qS(HH) {
      return Number.isInteger(HH) || fS.includes(HH) ? `${Math.round(HH)}\xd7` : `${HH.toFixed(1)}\xd7`
    }

    function gS(HH, BH) {
      const LH = fS.indexOf(HH);
      if (-1 !== LH) return "in" === BH ? fS[Math.min(LH + 1, fS.length - 1)] : fS[Math.max(LH - 1, 0)];
      if ("in" === BH) {
        for (const BH of fS)
          if (BH >= HH) return BH;
        return HH
      }
      for (let AH = fS.length - 1; AH >= 0; AH--)
        if (fS[AH] <= HH) return fS[AH];
      return fS[0]
    }

    function NS(HH, BH) {
      const LH = BH.getBoundingClientRect();
      if (LH.width <= 0) return 0;
      const AH = (HH - LH.left) / LH.width * 100;
      return Math.max(0, Math.min(100, AH))
    }

    function RS(HH, BH) {
      return BH <= 0 ? 0 : HH / BH * 100
    }

    function jS(HH, BH, LH) {
      const AH = [];
      let rH = Math.ceil(HH / LH) * LH;
      for (; rH <= BH;) AH.push(rH), rH += LH;
      return AH
    }
    var nS = LH(37860);
    const FS = [{
        label: "Linear",
        easing: nS.l
      }, {
        label: "Ease",
        easing: [.25, .1, .25, 1]
      }, {
        label: "Ease In",
        easing: nS.i
      }, {
        label: "Ease Out",
        easing: nS.k
      }, {
        label: "Ease In Out",
        easing: nS.e
      }],
      DS = 200,
      wS = 150;

    function ZS(HH) {
      const BH = HH => Number(HH.toFixed(3)).toString();
      return `cubic-bezier(${BH(HH[0])}, ${BH(HH[1])}, ${BH(HH[2])}, ${BH(HH[3])})`
    }

    function dS(HH, BH) {
      return {
        cx: 25 + HH * wS,
        cy: 25 + (1 - BH) * wS
      }
    }

    function aS(HH, BH, LH) {
      const AH = HH - LH.left,
        rH = BH - LH.top;
      return {
        x: sL.d.clamp((AH - 25) / wS, 0, 1),
        y: sL.d.clamp(1 - (rH - 25) / wS, -1, 2)
      }
    }

    function sS(HH, BH, LH, AH, rH) {
      return {
        x: (0, nS.t)(HH, LH, rH),
        y: (0, nS.t)(BH, AH, rH)
      }
    }
    const JS = (0, rH.memo)((function(HH) {
      let {
        value: BH,
        onChange: LH
      } = HH;
      const AH = (0, rH.useRef)(null),
        SH = (0, rH.useRef)(null),
        [hH, tH] = (0, rH.useState)(null),
        zH = (0, rH.useCallback)((() => {
          const HH = AH.current;
          if (!HH) return;
          const LH = HH.getContext("2d");
          if (!LH) return;
          const rH = window.devicePixelRatio || 1;
          HH.width = DS * rH, HH.height = DS * rH, LH.setTransform(rH, 0, 0, rH, 0, 0), LH.clearRect(0, 0, DS, DS), LH.fillStyle = "rgba(38, 52, 93, 0.85)", LH.fillRect(0, 0, DS, DS), LH.beginPath();
          const SH = dS(0, 0),
            tH = dS(1, 1);
          LH.moveTo(SH.cx, SH.cy), LH.lineTo(tH.cx, tH.cy), LH.strokeStyle = "rgba(164, 164, 164, 0.35)", LH.setLineDash([3, 3]), LH.stroke(), LH.setLineDash([]);
          const [zH, CH, EH, XH] = BH, GH = dS(zH, CH), YH = dS(EH, XH);
          LH.strokeStyle = "rgba(252, 211, 115, 0.55)", LH.lineWidth = 1.5, LH.beginPath(), LH.moveTo(SH.cx, SH.cy), LH.lineTo(GH.cx, GH.cy), LH.moveTo(tH.cx, tH.cy), LH.lineTo(YH.cx, YH.cy), LH.stroke(), LH.strokeStyle = "#fcd373", LH.lineWidth = 2, LH.beginPath();
          for (let BH = 0; BH <= 50; BH++) {
            const HH = sS(zH, CH, EH, XH, BH / 50),
              AH = dS(HH.x, HH.y);
            0 === BH ? LH.moveTo(AH.cx, AH.cy) : LH.lineTo(AH.cx, AH.cy)
          }
          LH.stroke();
          const uH = (HH, BH, AH) => {
            LH.beginPath(), LH.arc(HH, BH, AH ? 6 : 5, 0, 2 * Math.PI), LH.fillStyle = AH ? "#ffb914" : "#fcd373", LH.fill(), LH.strokeStyle = "#1a1f2e", LH.lineWidth = 1.5, LH.stroke()
          };
          uH(GH.cx, GH.cy, "p1" === hH), uH(YH.cx, YH.cy, "p2" === hH)
        }), [hH, BH]);
      (0, rH.useEffect)((() => {
        zH()
      }), [zH]);
      const CH = (0, rH.useCallback)(((HH, rH) => {
          const hH = AH.current,
            tH = SH.current;
          if (!hH || !tH) return;
          const zH = hH.getBoundingClientRect(),
            {
              x: CH,
              y: EH
            } = aS(HH, rH, zH);
          LH("p1" === tH ? [CH, EH, BH[2], BH[3]] : [BH[0], BH[1], CH, EH])
        }), [LH, BH]),
        XH = (0, rH.useCallback)((HH => {
          const LH = AH.current;
          if (!LH) return;
          const rH = LH.getBoundingClientRect();
          let {
            x: hH,
            y: zH
          } = aS(HH.clientX, HH.clientY, rH);
          hH = sL.d.clamp(hH, 0, 1), zH = sL.d.clamp(zH, 0, 1);
          const [EH, XH, GH, YH] = BH.map((HH => sL.d.clamp(HH, 0, 1))), uH = Math.hypot(hH - EH, zH - XH), QH = Math.hypot(hH - GH, zH - YH), WH = uH <= QH ? "p1" : "p2";
          ("p1" === WH ? uH : QH) > .12 || (SH.current = WH, tH(WH), LH.setPointerCapture(HH.pointerId), CH(HH.clientX, HH.clientY))
        }), [CH, BH]),
        GH = (0, rH.useCallback)((HH => {
          SH.current && CH(HH.clientX, HH.clientY)
        }), [CH]),
        YH = (0, rH.useCallback)((HH => {
          SH.current = null, tH(null), HH.currentTarget.hasPointerCapture(HH.pointerId) && HH.currentTarget.releasePointerCapture(HH.pointerId)
        }), []);
      return (0, EH.jsxs)("div", {
        className: "CubicBezierEasingEditor",
        children: [(0, EH.jsx)("canvas", {
          ref: AH,
          className: "CubicBezierEasingEditorCanvas",
          style: {
            width: DS,
            height: DS
          },
          onPointerDown: XH,
          onPointerMove: GH,
          onPointerUp: YH,
          onPointerCancel: YH
        }), (0, EH.jsx)("span", {
          className: "CubicBezierEasingEditorReadout",
          children: ZS(BH)
        })]
      })
    }));
    var iS = LH(1711),
      pS = LH(1696);
    const yS = 12;

    function Hh(HH) {
      return {
        left: HH.left + HH.width / 2,
        top: HH.top - 8
      }
    }

    function Bh(HH, BH) {
      const [LH, AH] = (0, rH.useState)(null);
      return (0, rH.useLayoutEffect)((() => {
        const LH = HH.current;
        if (!LH) return;
        const {
          width: rH,
          height: SH
        } = LH.getBoundingClientRect();
        AH(function(HH, BH, LH) {
          const AH = window.innerWidth,
            rH = window.innerHeight,
            SH = BH / 2;
          let hH = HH.left + HH.width / 2;
          hH = Math.max(yS + SH, Math.min(hH, AH - yS - SH));
          const tH = HH.top - 8 - yS,
            zH = rH - HH.bottom - 8 - yS,
            CH = tH < LH && zH >= tH;
          let EH;
          CH ? (EH = HH.bottom + 8, EH + LH > rH - yS && (EH = rH - yS - LH), EH = Math.max(yS, EH)) : (EH = HH.top - 8, EH - LH < yS && (EH = yS + LH));
          return {
            left: hH,
            top: EH,
            placeBelow: CH
          }
        }(BH, rH, SH))
      }), [BH, HH]), LH
    }

    function Lh(HH, BH, LH) {
      (0, rH.useEffect)((() => (0, pS.e)("pointerdown", (AH => {
        var rH, SH;
        const hH = AH.target;
        hH instanceof Node && (null !== (rH = HH.current) && void 0 !== rH && rH.contains(hH) || null !== LH && void 0 !== LH && null !== (SH = LH.current) && void 0 !== SH && SH.contains(hH) || (0, iS.m)(hH) || BH())
      }))), [LH, BH, HH])
    }

    function Ah(HH) {
      let {
        label: BH,
        value: LH,
        onChange: AH
      } = HH;
      return (0, EH.jsxs)("div", {
        className: "ReplayKeyframePopoverVec3",
        children: [(0, EH.jsx)("span", {
          className: "ReplayKeyframePopoverVec3Label",
          children: BH
        }), (0, EH.jsx)("div", {
          className: "ReplayKeyframePopoverVec3Inputs",
          children: ["X", "Y", "Z"].map(((HH, BH) => (0, EH.jsxs)("label", {
            className: "ReplayKeyframePopoverAxis",
            children: [(0, EH.jsx)("span", {
              children: HH
            }), (0, EH.jsx)("input", {
              type: "number",
              step: "any",
              value: LH[BH],
              onChange: HH => {
                const rH = Number.parseFloat(HH.target.value);
                if (Number.isNaN(rH)) return;
                const SH = [LH[0], LH[1], LH[2]];
                SH[BH] = rH, AH(SH)
              }
            })]
          }, HH)))
        })]
      })
    }
    const rh = (0, rH.memo)((function(HH) {
        var BH, LH, AH;
        let {
          keyframe: SH,
          anchor: tH,
          hasOutgoingSegment: zH,
          onClose: CH,
          onApply: XH,
          onDelete: GH,
          onUseCurrentCamera: YH
        } = HH;
        const uH = (0, rH.useRef)(null),
          QH = Bh(uH, tH.rect),
          [WH, MH] = (0, rH.useState)((() => [SH.position[0], SH.position[1], SH.position[2]])),
          [xH, vH] = (0, rH.useState)((() => [SH.direction[0], SH.direction[1], SH.direction[2]])),
          [PH, TH] = (0, rH.useState)((() => SH.easing));
        (0, rH.useEffect)((() => {
          MH([SH.position[0], SH.position[1], SH.position[2]]), vH([SH.direction[0], SH.direction[1], SH.direction[2]]), TH(SH.easing)
        }), [SH]), Lh(uH, CH);
        const UH = (0, rH.useCallback)((() => {
            XH({
              IX: SH.IX,
              position: WH,
              direction: xH,
              easing: PH
            }), CH()
          }), [xH, PH, SH.IX, XH, CH, WH]),
          VH = (0, rH.useCallback)((() => {
            GH(SH.IX), CH()
          }), [SH.IX, GH, CH]),
          OH = (0, rH.useCallback)((() => {
            const HH = YH();
            HH && (MH([HH.position[0], HH.position[1], HH.position[2]]), vH([HH.direction[0], HH.direction[1], HH.direction[2]]))
          }), [YH]),
          bH = Hh(tH.rect);
        return (0, EH.jsxs)("div", {
          ref: uH,
          className: hH()("ReplayViewerPopover ReplayKeyframePopover", {
            Below: null !== (BH = null === QH || void 0 === QH ? void 0 : QH.placeBelow) && void 0 !== BH && BH,
            Positioned: null !== QH
          }),
          style: {
            left: `${null!==(LH=null===QH||void 0===QH?void 0:QH.left)&&void 0!==LH?LH:bH.left}px`,
            top: `${null!==(AH=null===QH||void 0===QH?void 0:QH.top)&&void 0!==AH?AH:bH.top}px`
          },
          onPointerDown: HH => {
            HH.stopPropagation()
          },
          children: [(0, EH.jsxs)("div", {
            className: "ReplayKeyframePopoverHeader",
            children: [(0, EH.jsx)("span", {
              className: "ReplayKeyframePopoverTitle",
              children: "Camera keyframe"
            }), (0, EH.jsxs)("span", {
              className: "ReplayKeyframePopoverTick",
              children: ["Tick ", tH.IX]
            })]
          }), (0, EH.jsx)(Ah, {
            label: "Position",
            value: WH,
            onChange: MH
          }), (0, EH.jsx)(Ah, {
            label: "Direction",
            value: xH,
            onChange: vH
          }), zH && (0, EH.jsxs)("div", {
            className: "ReplayKeyframePopoverEasing",
            children: [(0, EH.jsx)("span", {
              className: "ReplayKeyframePopoverEasingLabel",
              children: "Easing to next"
            }), (0, EH.jsx)("div", {
              className: "ReplayKeyframePopoverEasingPresets",
              children: FS.map((HH => {
                const BH = (LH = PH, AH = HH.easing, LH[0] === AH[0] && LH[1] === AH[1] && LH[2] === AH[2] && LH[3] === AH[3]);
                var LH, AH;
                return (0, EH.jsx)(RL.W, {
                  className: hH()("ReplayKeyframePopoverPreset", {
                    Active: BH
                  }),
                  onClick: () => {
                    TH(HH.easing)
                  },
                  children: HH.label
                }, HH.label)
              }))
            }), (0, EH.jsx)(JS, {
              value: PH,
              onChange: TH
            })]
          }), (0, EH.jsxs)("div", {
            className: "ReplayKeyframePopoverActions",
            children: [(0, EH.jsx)(RL.i, {
              className: "ReplayViewerCompactButton",
              onClick: OH,
              children: "Use current view"
            }), (0, EH.jsx)(RL.u, {
              className: "ReplayViewerCompactButton",
              onClick: UH,
              children: "Apply"
            }), (0, EH.jsx)(RL.O, {
              className: "ReplayViewerCompactButton",
              onClick: VH,
              children: "Delete"
            })]
          })]
        })
      })),
      Sh = (0, rH.memo)((function(HH) {
        var BH, LH, AH;
        let {
          anchor: SH,
          hasPlaybackMark: tH,
          onClose: zH,
          onMark: CH,
          onZoom: XH,
          onCrop: GH,
          onDeleteKeyframes: YH,
          onClearMark: uH
        } = HH;
        const QH = (0, rH.useRef)(null),
          WH = Bh(QH, SH.rect),
          MH = Hh(SH.rect),
          xH = {
            startTick: SH.startTick,
            endTick: SH.endTick
          },
          vH = SH.endTick > SH.startTick;
        return Lh(QH, zH), (0, EH.jsx)("div", {
          ref: QH,
          className: hH()("ReplayViewerPopover ReplayTimelineSelectionPopover", {
            Below: null !== (BH = null === WH || void 0 === WH ? void 0 : WH.placeBelow) && void 0 !== BH && BH,
            Positioned: null !== WH
          }),
          style: {
            left: `${null!==(LH=null===WH||void 0===WH?void 0:WH.left)&&void 0!==LH?LH:MH.left}px`,
            top: `${null!==(AH=null===WH||void 0===WH?void 0:WH.top)&&void 0!==AH?AH:MH.top}px`
          },
          onPointerDown: HH => {
            HH.stopPropagation()
          },
          children: (0, EH.jsxs)("div", {
            className: "ReplayTimelineSelectionPopoverActions",
            children: [(0, EH.jsx)(RL.u, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                CH(xH)
              },
              disabled: !vH,
              children: (0, EH.jsx)("span", {
                children: " Play range "
              })
            }), (0, EH.jsx)(RL.i, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                XH(xH)
              },
              children: (0, EH.jsx)("span", {
                children: " Zoom "
              })
            }), (0, EH.jsx)(RL.W, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                GH(xH)
              },
              disabled: !vH,
              children: (0, EH.jsx)("span", {
                children: " Crop "
              })
            }), (0, EH.jsx)(RL.W, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                YH(xH)
              },
              children: (0, EH.jsx)("span", {
                children: " Delete all keyframes "
              })
            }), tH && (0, EH.jsx)(RL.W, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                uH()
              },
              children: (0, EH.jsx)("span", {
                children: " Clear range "
              })
            })]
          })
        })
      })),
      hh = (0, rH.memo)((function(HH) {
        var BH, LH;
        let {
          maxTick: AH,
          displayTick: SH,
          oN: tH,
          cameraKeyframes: zH,
          playbackMark: CH,
          onSeek: XH,
          onPause: GH,
          onScrubTickChange: YH,
          onMoveCameraKeyframe: uH,
          onUpdateCameraKeyframe: QH,
          onDeleteCameraKeyframe: WH,
          onUseCurrentCamera: MH,
          onMarkRange: xH,
          onCropRange: vH,
          onDeleteKeyframesInRange: PH,
          onClearMark: TH,
          zoomLevel: UH,
          onZoomLevelChange: VH
        } = HH;
        const OH = (0, rH.useRef)(null),
          bH = (0, rH.useRef)(null),
          kH = (0, rH.useRef)(!1),
          mH = (0, rH.useRef)(!1),
          oH = (0, rH.useRef)(UH),
          IH = (0, rH.useRef)(null),
          fH = (0, rH.useRef)(null),
          lH = (0, rH.useRef)(null),
          KH = (0, rH.useRef)(null),
          [cH, eH] = (0, rH.useState)(null),
          [qH, gH] = (0, rH.useState)(SH),
          [NH, RH] = (0, rH.useState)(null),
          [jH, nH] = (0, rH.useState)(null),
          [FH, DH] = (0, rH.useState)(null),
          [wH, ZH] = (0, rH.useState)(null),
          dH = (0, rH.useMemo)((() => zH.map((HH => HH.IX))), [zH]),
          aH = null !== cH && void 0 !== cH ? cH : SH,
          {
            viewStart: sH,
            viewEnd: JH
          } = (0, rH.useMemo)((() => function(HH) {
            const BH = HH.maxTick + 1,
              LH = Math.max(1, Math.ceil(BH / HH.zoomLevel)),
              AH = Math.floor(LH / 2);
            let rH = HH.centerTick - AH;
            return rH = Math.max(0, Math.min(rH, HH.maxTick - LH + 1)), {
              viewStart: rH,
              viewEnd: Math.min(HH.maxTick, rH + LH - 1)
            }
          }({
            maxTick: AH,
            zoomLevel: UH,
            centerTick: qH
          })), [AH, UH, qH]);
        (0, rH.useEffect)((() => {
          if (null !== cH || null !== fH.current || null !== lH.current || null !== KH.current) return;
          if (kH.current) return void(kH.current = !1);
          if (mH.current) return void(mH.current = !1);
          const HH = oH.current !== UH;
          oH.current = UH, HH && gH(SH)
        }), [UH, SH, cH]);
        const iH = (0, rH.useCallback)((HH => {
            let BH = lS(HH, AH);
            return CH && (BH = Math.max(CH.inTick, Math.min(BH, CH.outTick))), BH
          }), [AH, CH]),
          pH = (0, rH.useCallback)(((HH, BH) => {
            const LH = iH(HH);
            XH(LH), BH && gH(LH)
          }), [iH, XH]),
          yH = (0, rH.useCallback)(((HH, BH) => {
            const LH = iH(HH);
            eH(LH), YH(LH), pH(LH, BH)
          }), [iH, pH, YH]),
          HB = (0, rH.useCallback)((() => {
            eH((HH => (null !== HH && gH(HH), null))), YH(null)
          }), [YH]),
          BB = (0, rH.useCallback)((() => {
            DH(null), ZH(null)
          }), []),
          LB = (0, rH.useCallback)((HH => {
            const BH = OH.current;
            if (!BH) return 0;
            return lS(cS(NS(HH, BH), sH, JH), AH)
          }), [AH, JH, sH]),
          AB = (0, rH.useCallback)((HH => {
            const BH = bH.current;
            if (!BH) return 0;
            return lS(cS(NS(HH, BH), 0, AH), AH)
          }), [AH]),
          rB = (0, rH.useMemo)((() => {
            if (!NH) return [...dH];
            const HH = dH.filter((HH => HH !== NH.fromTick));
            return HH.push(NH.previewTick), HH.sort(((HH, BH) => HH - BH)), HH
          }), [dH, NH]),
          SB = (0, rH.useMemo)((() => {
            var HH;
            return jH && null !== (HH = zH.find((HH => HH.IX === jH.IX))) && void 0 !== HH ? HH : null
          }), [zH, jH]),
          hB = (0, rH.useMemo)((() => !!SB && zH.some((HH => HH.IX > SB.IX))), [zH, SB]);
        (0, rH.useEffect)((() => {
          jH && !SB && nH(null)
        }), [jH, SB]), (0, rH.useEffect)((() => {
          if (!wH) return () => {};
          const HH = HH => {
            "Escape" === HH.key && BB()
          };
          return window.addEventListener("keydown", HH), () => {
            window.removeEventListener("keydown", HH)
          }
        }), [BB, wH]);
        const tB = (0, rH.useCallback)(((HH, BH) => {
            BB(), GH(), XH(HH, {
              ignorePlaybackMark: !0
            }), nH({
              IX: HH,
              rect: BH.getBoundingClientRect()
            })
          }), [BB, GH, XH]),
          zB = (0, rH.useCallback)(((HH, BH) => LH => {
            0 === LH.button && (LH.stopPropagation(), nH(null), BB(), GH(), IH.current = {
              fromTick: HH,
              startX: LH.clientX,
              startY: LH.clientY,
              didDrag: !1,
              track: BH
            }, RH({
              fromTick: HH,
              previewTick: HH,
              track: BH
            }), LH.currentTarget.setPointerCapture(LH.pointerId))
          }), [BB, GH]),
          CB = (0, rH.useCallback)((HH => {
            if (!NH) return;
            HH.stopPropagation();
            const BH = IH.current;
            if (BH && !BH.didDrag) {
              const LH = HH.clientX - BH.startX,
                AH = HH.clientY - BH.startY;
              Math.hypot(LH, AH) > 5 && (BH.didDrag = !0)
            }
            const LH = "detail" === NH.track ? LB(HH.clientX) : AB(HH.clientX);
            LH !== NH.previewTick && RH({
              ...NH,
              previewTick: LH
            })
          }), [NH, LB, AB]),
          EB = (0, rH.useCallback)((HH => {
            if (!NH) return;
            HH.stopPropagation();
            const BH = IH.current,
              LH = "detail" === NH.track ? LB(HH.clientX) : AB(HH.clientX);
            BH && !BH.didDrag ? tB(BH.fromTick, HH.currentTarget) : LH !== NH.fromTick && uH(NH.fromTick, LH), RH(null), IH.current = null, HH.currentTarget.releasePointerCapture(HH.pointerId)
          }), [NH, uH, tB, LB, AB]),
          XB = (0, rH.useCallback)((HH => {
            if (0 !== HH.button) return;
            nH(null), GH();
            const BH = LB(HH.clientX);
            fH.current = {
              pointerId: HH.pointerId,
              startX: HH.clientX,
              startY: HH.clientY,
              startTick: BH,
              currentTick: BH,
              didSelect: !1
            }, DH(null), ZH(null), HH.currentTarget.setPointerCapture(HH.pointerId)
          }), [GH, LB]),
          GB = (0, rH.useCallback)((HH => {
            const BH = fH.current;
            if (!BH || BH.pointerId !== HH.pointerId) return;
            const LH = LB(HH.clientX);
            if (BH.currentTick = LH, !BH.didSelect) {
              const LH = HH.clientX - BH.startX,
                AH = HH.clientY - BH.startY;
              if (Math.hypot(LH, AH) <= 5) return;
              BH.didSelect = !0
            }
            const AH = Math.min(BH.startTick, LH),
              rH = Math.max(BH.startTick, LH);
            DH({
              startTick: AH,
              endTick: rH
            })
          }), [LB]),
          YB = (0, rH.useCallback)((HH => {
            const BH = fH.current;
            if (!BH || BH.pointerId !== HH.pointerId) return;
            if (fH.current = null, HH.currentTarget.releasePointerCapture(HH.pointerId), !BH.didSelect) return BB(), void pH(BH.startTick, !0);
            const LH = LB(HH.clientX),
              AH = Math.min(BH.startTick, LH),
              rH = Math.max(BH.startTick, LH),
              SH = {
                startTick: AH,
                endTick: rH
              };
            DH(SH);
            const hH = OH.current;
            if (!hH) return;
            const tH = hH.getBoundingClientRect(),
              zH = KS(AH, sH, JH) / 100,
              CH = KS(rH, sH, JH) / 100,
              EH = tH.left + zH * tH.width,
              XH = tH.left + CH * tH.width;
            ZH({
              ...SH,
              rect: new DOMRect(EH, tH.top, Math.max(XH - EH, 1), tH.height)
            })
          }), [BB, pH, LB, JH, sH]),
          uB = (0, rH.useCallback)((HH => BH => {
            if (0 !== BH.button) return;
            BH.stopPropagation(), nH(null), BB(), GH(), lH.current = {
              pointerId: BH.pointerId,
              track: HH
            }, BH.currentTarget.setPointerCapture(BH.pointerId);
            const LH = "detail" === HH ? LB(BH.clientX) : AB(BH.clientX);
            yH(LH, !1)
          }), [BB, GH, yH, LB, AB]),
          QB = (0, rH.useCallback)((HH => {
            const BH = lH.current;
            if (!BH || BH.pointerId !== HH.pointerId) return;
            HH.stopPropagation();
            const LH = "detail" === BH.track ? LB(HH.clientX) : AB(HH.clientX);
            yH(LH, !1)
          }), [yH, LB, AB]),
          WB = (0, rH.useCallback)((HH => {
            const BH = lH.current;
            BH && BH.pointerId === HH.pointerId && (HH.stopPropagation(), lH.current = null, HH.currentTarget.releasePointerCapture(HH.pointerId), HB())
          }), [HB]),
          MB = (0, rH.useCallback)((HH => {
            0 === HH.button && (BB(), GH(), KH.current = {
              pointerId: HH.pointerId
            }, HH.currentTarget.setPointerCapture(HH.pointerId), yH(AB(HH.clientX), !0))
          }), [BB, GH, yH, AB]),
          xB = (0, rH.useCallback)((HH => {
            const BH = KH.current;
            BH && BH.pointerId === HH.pointerId && yH(AB(HH.clientX), !0)
          }), [yH, AB]),
          vB = (0, rH.useCallback)((HH => {
            const BH = KH.current;
            BH && BH.pointerId === HH.pointerId && (KH.current = null, HH.currentTarget.releasePointerCapture(HH.pointerId), HB())
          }), [HB]),
          PB = (0, rH.useCallback)((HH => {
            const BH = Math.max(1, HH.endTick - HH.startTick + 1),
              LH = AH + 1,
              rH = LH / BH,
              SH = Math.max(1, Math.ceil(LH / rH)),
              hH = HH.startTick + Math.floor((SH - 1) / 2);
            mH.current = !0, oH.current = rH, gH(lS(hH, AH)), VH(rH), BB()
          }), [BB, AH, VH]),
          TB = (0, rH.useCallback)((HH => {
            xH(HH), BB()
          }), [BB, xH]),
          UB = (0, rH.useCallback)((HH => {
            vH(HH), BB()
          }), [BB, vH]),
          VB = (0, rH.useCallback)((HH => {
            PH(HH), BB()
          }), [BB, PH]),
          OB = (0, rH.useCallback)((() => {
            TH(), BB()
          }), [BB, TH]);
        (0, rH.useEffect)((() => {
          const HH = OH.current;
          if (!HH) return () => {};
          const BH = BH => {
            BH.preventDefault();
            const LH = lS(cS(NS(BH.clientX, HH), sH, JH), AH),
              rH = BH.deltaY < 0 ? "in" : "out",
              SH = gS(UH, rH);
            SH !== UH && (kH.current = !0, gH(LH), VH(SH))
          };
          return HH.addEventListener("wheel", BH, {
            passive: !1
          }), () => {
            HH.removeEventListener("wheel", BH)
          }
        }), [AH, VH, JH, sH, UH]);
        const bB = KS(aH, sH, JH),
          kB = RS(aH, AH),
          mB = RS(sH, AH),
          oB = AH > 0 ? RS(JH, AH) : 100,
          IB = null !== CH,
          fB = null !== (BH = null === CH || void 0 === CH ? void 0 : CH.inTick) && void 0 !== BH ? BH : 0,
          lB = null !== (LH = null === CH || void 0 === CH ? void 0 : CH.outTick) && void 0 !== LH ? LH : AH,
          KB = RS(fB, AH),
          cB = Math.max(RS(lB, AH) - KB, 0),
          eB = KS(Math.max(fB, sH), sH, JH),
          qB = KS(Math.min(lB, JH), sH, JH),
          gB = Math.max(qB - eB, 0),
          NB = IB && lB >= sH && fB <= JH,
          RB = KS(fB, sH, JH),
          jB = KS(lB, sH, JH),
          nB = IB && fB >= sH && fB <= JH,
          FB = IB && lB >= sH && lB <= JH,
          DB = RS(fB, AH),
          wB = RS(lB, AH),
          ZB = null !== FH && void 0 !== FH ? FH : wH ? {
            startTick: wH.startTick,
            endTick: wH.endTick
          } : null,
          dB = ZB ? KS(Math.max(ZB.startTick, sH), sH, JH) : 0,
          aB = ZB ? KS(Math.min(ZB.endTick, JH), sH, JH) : 0,
          sB = Math.max(aB - dB, 0),
          JB = null !== ZB && ZB.endTick >= sH && ZB.startTick <= JH,
          iB = (0, rH.useMemo)((() => jS(0, AH, tH)), [AH, tH]),
          pB = (0, rH.useMemo)((() => jS(sH, JH, tH)), [sH, JH, tH]),
          yB = (0, rH.useMemo)((() => rB.filter((HH => HH >= sH && HH <= JH))), [rB, JH, sH]),
          HL = (0, rH.useCallback)(((HH, BH, LH) => {
            const rH = "detail" === BH ? KS(HH, sH, JH) : RS(HH, AH),
              SH = null !== NH && LH === NH.fromTick,
              tH = null !== jH && jH.IX === LH;
            return (0, EH.jsx)("button", {
              type: "button",
              className: hH()("ReplayTimelineCameraKeyframeMarker", "detail" === BH ? "Detail" : "Overview", {
                Dragging: SH,
                Selected: tH
              }),
              style: {
                left: `${rH}%`
              },
              onPointerDown: zB(LH, BH),
              onPointerMove: CB,
              onPointerUp: EB,
              onPointerCancel: EB,
              "aria-label": `Camera keyframe at tick ${LH}`
            }, `cam-${BH}-${LH}`)
          }), [zB, jH, EB, NH, AH, CB, JH, sH]),
          BL = (0, rH.useCallback)((HH => NH && HH === NH.previewTick ? NH.fromTick : HH), [NH]);
        return AH <= 0 ? null : (0, EH.jsxs)("div", {
          className: "ReplayTimeline",
          children: [jH && SB && (0, AS.createPortal)((0, EH.jsx)(rh, {
            keyframe: SB,
            anchor: jH,
            hasOutgoingSegment: hB,
            onClose: () => {
              nH(null)
            },
            onApply: QH,
            onDelete: WH,
            onUseCurrentCamera: MH
          }), document.body), wH && (0, AS.createPortal)((0, EH.jsx)(Sh, {
            anchor: wH,
            hasPlaybackMark: IB,
            onClose: BB,
            onMark: TB,
            onZoom: PB,
            onCrop: UB,
            onDeleteKeyframes: VB,
            onClearMark: OB
          }), document.body), (0, EH.jsxs)("div", {
            className: hH()("ReplayTimelineOverviewSection", {
              Hidden: UH <= 1
            }),
            children: [(0, EH.jsx)("div", {
              className: "ReplayTimelineSectionLabel",
              children: "Overview"
            }), (0, EH.jsxs)("div", {
              ref: bH,
              className: "ReplayTimelineOverviewTrack",
              onPointerDown: MB,
              onPointerMove: xB,
              onPointerUp: vB,
              onPointerCancel: vB,
              role: "slider",
              "aria-label": "Recording overview",
              "aria-valuemin": 0,
              "aria-valuemax": AH,
              "aria-valuenow": aH,
              tabIndex: 0,
              children: [iB.map((HH => {
                const BH = RS(HH, AH);
                return (0, EH.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Overview",
                  style: {
                    left: `${BH}%`
                  }
                }, HH)
              })), IB && (0, EH.jsxs)(EH.Fragment, {
                children: [(0, EH.jsx)("div", {
                  className: "ReplayTimelineMarkRegion Overview",
                  style: {
                    left: `${KB}%`,
                    width: `${cB}%`
                  }
                }), (0, EH.jsx)("div", {
                  className: "ReplayTimelineMarkMarker In Overview",
                  style: {
                    left: `${DB}%`
                  },
                  "aria-hidden": !0
                }), (0, EH.jsx)("div", {
                  className: "ReplayTimelineMarkMarker Out Overview",
                  style: {
                    left: `${wB}%`
                  },
                  "aria-hidden": !0
                })]
              }), rB.map((HH => HL(HH, "overview", BL(HH)))), (0, EH.jsx)("div", {
                className: "ReplayTimelineViewport",
                style: {
                  left: `${mB}%`,
                  width: `${Math.max(oB-mB,.5)}%`
                }
              }), (0, EH.jsx)("button", {
                type: "button",
                className: hH()("ReplayTimelinePlayhead Overview", {
                  Scrubbing: null !== cH
                }),
                style: {
                  left: `${kB}%`
                },
                onPointerDown: uB("overview"),
                onPointerMove: QB,
                onPointerUp: WB,
                onPointerCancel: WB,
                "aria-label": "Scrub playhead"
              })]
            })]
          }), (0, EH.jsxs)("div", {
            className: "ReplayTimelineDetailSection",
            children: [(0, EH.jsxs)("div", {
              className: "ReplayTimelineDetailHeader",
              children: [(0, EH.jsx)("span", {
                className: "ReplayTimelineSectionLabel",
                children: "Timeline"
              }), (0, EH.jsxs)("span", {
                className: "ReplayTimelineDetailRange",
                children: [eS(sH, tH), " \u2013 ", eS(JH, tH), UH > 1 && (0, EH.jsx)("span", {
                  className: "ReplayTimelineZoomBadge",
                  children: qS(UH)
                })]
              })]
            }), (0, EH.jsxs)("div", {
              ref: OH,
              className: "ReplayTimelineDetailTrack",
              onPointerDown: XB,
              onPointerMove: GB,
              onPointerUp: YB,
              onPointerCancel: YB,
              role: "slider",
              "aria-label": "Recording timeline",
              "aria-valuemin": sH,
              "aria-valuemax": JH,
              "aria-valuenow": aH,
              tabIndex: 0,
              children: [pB.map((HH => {
                const BH = KS(HH, sH, JH);
                return (0, EH.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Detail",
                  style: {
                    left: `${BH}%`
                  }
                }, HH)
              })), NB && (0, EH.jsx)("div", {
                className: "ReplayTimelineMarkRegion Detail",
                style: {
                  left: `${eB}%`,
                  width: `${gB}%`
                }
              }), nB && (0, EH.jsx)("div", {
                className: "ReplayTimelineMarkMarker In Detail",
                style: {
                  left: `${RB}%`
                },
                "aria-label": `Play range start at tick ${fB}`
              }), FB && (0, EH.jsx)("div", {
                className: "ReplayTimelineMarkMarker Out Detail",
                style: {
                  left: `${jB}%`
                },
                "aria-label": `Play range end at tick ${lB}`
              }), JB && ZB && (0, EH.jsx)("div", {
                className: "ReplayTimelineSelectionRegion Detail",
                style: {
                  left: `${dB}%`,
                  width: `${sB}%`
                }
              }), yB.map((HH => HL(HH, "detail", BL(HH)))), (0, EH.jsx)("button", {
                type: "button",
                className: hH()("ReplayTimelinePlayhead Detail", {
                  Scrubbing: null !== cH
                }),
                style: {
                  left: `${bB}%`
                },
                onPointerDown: uB("detail"),
                onPointerMove: QB,
                onPointerUp: WB,
                onPointerCancel: WB,
                "aria-label": "Scrub playhead"
              })]
            }), (0, EH.jsxs)("div", {
              className: "ReplayTimelineWheelHint",
              children: [(0, EH.jsx)("span", {
                className: "Select",
                children: "Drag timeline to select"
              }), " \xb7 Scroll to zoom \xb7 Drag playhead to scrub"]
            })]
          })]
        })
      })),
      th = (0, rH.memo)((function(HH) {
        let {
          enabled: BH
        } = HH;
        const LH = (0, rH.useRef)(!1),
          AH = (0, rH.useRef)(null),
          [SH, tH] = (0, rH.useState)(!1),
          zH = (0, rH.useCallback)((HH => {
            BH && 0 === HH.button && (LH.current = !0, tH(!0), AH.current = {
              x: HH.clientX,
              y: HH.clientY
            }, HH.currentTarget.setPointerCapture(HH.pointerId))
          }), [BH]),
          CH = (0, rH.useCallback)((HH => {
            if (!BH || !LH.current || !AH.current) return;
            const rH = HH.clientX - AH.current.x,
              SH = HH.clientY - AH.current.y;
            AH.current = {
              x: HH.clientX,
              y: HH.clientY
            }, uH.gameBridge.send("dragReplayCamera", {
              dx: rH,
              dy: SH
            })
          }), [BH]),
          XH = (0, rH.useCallback)((HH => {
            LH.current && (LH.current = !1, tH(!1), AH.current = null, HH.currentTarget.releasePointerCapture(HH.pointerId))
          }), []);
        return BH ? (0, EH.jsx)("div", {
          className: hH()("ReplayViewerCameraDragSurface", {
            Dragging: SH
          }),
          onPointerDown: zH,
          onPointerMove: CH,
          onPointerUp: XH,
          onPointerCancel: XH,
          "aria-hidden": !0
        }) : null
      }));
    var zh = LH(37864),
      Ch = LH(37869);
    const Eh = (0, rH.memo)((function(HH) {
        var BH, LH, AH;
        let {
          anchorRect: SH,
          anchorRef: tH,
          onClose: CH
        } = HH;
        const XH = (0, rH.useRef)(null),
          GH = Bh(XH, SH),
          [YH, uH] = (0, rH.useState)(Ch.d),
          QH = (0, rH.useMemo)((() => Object.values(YH).every((HH => HH))), [YH]);
        (0, zH.d)("replayViewer|uiVisibilityChanged", (() => {
          uH((0, Ch.d)())
        })), Lh(XH, CH, tH);
        const WH = (0, rH.useCallback)(((HH, BH) => {
            (0, Ch.i)(HH, BH), uH((0, Ch.d)())
          }), []),
          MH = (0, rH.useCallback)((HH => {
            for (const {
                group: BH
              }
              of zh.f)(0, Ch.i)(BH, HH);
            uH((0, Ch.d)())
          }), []),
          xH = Hh(SH);
        return (0, AS.createPortal)((0, EH.jsxs)("div", {
          ref: XH,
          className: hH()("ReplayViewerPopover ReplayUiVisibilityPopover", {
            Below: null !== (BH = null === GH || void 0 === GH ? void 0 : GH.placeBelow) && void 0 !== BH && BH,
            Positioned: null !== GH
          }),
          style: {
            left: `${null!==(LH=null===GH||void 0===GH?void 0:GH.left)&&void 0!==LH?LH:xH.left}px`,
            top: `${null!==(AH=null===GH||void 0===GH?void 0:GH.top)&&void 0!==AH?AH:xH.top}px`
          },
          onPointerDown: HH => {
            HH.stopPropagation()
          },
          children: [(0, EH.jsx)("div", {
            className: "ReplayUiVisibilityPopoverHeader",
            children: (0, EH.jsx)("span", {
              className: "ReplayUiVisibilityPopoverTitle",
              children: "UI visibility"
            })
          }), (0, EH.jsxs)("div", {
            className: "ReplayUiVisibilityPopoverChecks",
            children: [(0, EH.jsxs)("div", {
              className: "ReplayUiVisibilityPopoverCheck",
              children: [(0, EH.jsx)("input", {
                type: "checkbox",
                checked: QH,
                onChange: HH => {
                  MH(HH.target.checked)
                }
              }), (0, EH.jsx)("span", {
                children: "SELECT ALL"
              })]
            }), zh.f.map((HH => {
              let {
                group: BH,
                label: LH
              } = HH;
              return (0, EH.jsxs)("label", {
                className: "ReplayUiVisibilityPopoverCheck",
                children: [(0, EH.jsx)("input", {
                  type: "checkbox",
                  checked: YH[BH],
                  onChange: HH => {
                    WH(BH, HH.target.checked)
                  }
                }), (0, EH.jsx)("span", {
                  children: LH
                })]
              }, BH)
            }))]
          })]
        }), document.body)
      })),
      Xh = (0, rH.memo)((function(HH) {
        let {
          disabled: BH
        } = HH;
        const LH = (0, rH.useRef)(null),
          [AH, SH] = (0, rH.useState)(!1),
          [hH, tH] = (0, rH.useState)(null),
          zH = (0, rH.useCallback)((() => {
            LH.current && (tH(LH.current.getBoundingClientRect()), SH((HH => !HH)))
          }), []),
          CH = (0, rH.useCallback)((() => {
            SH(!1)
          }), []);
        return (0, EH.jsxs)(EH.Fragment, {
          children: [(0, EH.jsx)("div", {
            ref: LH,
            children: (0, EH.jsx)(RL.i, {
              className: "ReplayViewerActionButton",
              onClick: zH,
              disabled: BH,
              children: (0, EH.jsx)("span", {
                children: "Hide UI elements"
              })
            })
          }), AH && hH && (0, EH.jsx)(Eh, {
            anchorRect: hH,
            anchorRef: LH,
            onClose: CH
          })]
        })
      })),
      Gh = ["freeCamUp", "freeCamDown"];

    function Yh(HH, BH) {
      uH.gameBridge.send("holdReplayFreecamVertical", {
        action: HH,
        LX: BH
      })
    }
    const uh = (0, rH.memo)((function() {
      (0, rH.useEffect)((() => () => {
        ! function() {
          uH.gameBridge.send("moveReplayFreecam", null);
          for (const HH of Gh) Yh(HH, !1)
        }()
      }), []);
      const HH = (0, rH.useCallback)((HH => {
          uH.gameBridge.send("moveReplayFreecam", HH)
        }), []),
        BH = (0, rH.useCallback)((HH => ({
          onTouchStart: BH => {
            BH.preventDefault(), BH.stopPropagation(), Yh(HH, !0)
          },
          onTouchEnd: BH => {
            BH.preventDefault(), BH.stopPropagation(), Yh(HH, !1)
          },
          onTouchCancel: BH => {
            BH.preventDefault(), BH.stopPropagation(), Yh(HH, !1)
          }
        })), []);
      return (0, EH.jsxs)("div", {
        className: "ReplayFreecamTouchControls",
        children: [(0, EH.jsx)("div", {
          className: "ReplayFreecamJoystickWrap",
          children: (0, EH.jsx)(xB, {
            onMove: HH,
            mode: "pinned"
          })
        }), (0, EH.jsxs)("div", {
          className: "ReplayFreecamVerticalButtons",
          children: [(0, EH.jsx)("button", {
            type: "button",
            className: "ReplayFreecamVerticalButton",
            "aria-label": "Freecam up",
            ...BH("freeCamUp"),
            children: (0, EH.jsx)(VH.c, {
              name: "angle-up",
              className: "ReplayFreecamVerticalIcon"
            })
          }), (0, EH.jsx)("button", {
            type: "button",
            className: "ReplayFreecamVerticalButton",
            "aria-label": "Freecam down",
            ...BH("freeCamDown"),
            children: (0, EH.jsx)(VH.c, {
              name: "angle-down",
              className: "ReplayFreecamVerticalIcon"
            })
          })]
        })]
      })
    }));
    var Qh = LH(3484);
    const Wh = [],
      Mh = "Failed to load recording";

    function xh(HH, BH, LH) {
      var AH;
      console.error(BH), LL.NotificationProvider.showAlertPopup({
        title: HH,
        subtitle: null !== (AH = (0, bS.j)(BH)) && void 0 !== AH ? AH : LH,
        confirmText: "OK"
      })
    }

    function vh(HH) {
      xh(Mh, HH, bS.e.cantOpen.text)
    }
    const Ph = (0, rH.memo)((function() {
        const HH = (0, qH.k)(),
          {
            gameState: BH
          } = (0, cH.m)(["gameState"]),
          LH = "inGame" === BH;
        return (0, eH.b)("replayViewerRequested", (HH => {
          (0, qH.g)("toggle" === HH ? !(0, qH.f)() : "open" === HH)
        })), (0, rH.useEffect)((() => {
          LH && (0, oS.g)().then((HH => {
            if (null !== HH) return (0, qH.g)(!0), (0, TS.e)().open(HH.bytes, HH.source)
          })).catch((HH => {
            (0, qH.g)(!0), vh(HH)
          }))
        }), [LH]), HH ? (0, EH.jsx)(Th, {}) : null
      })),
      Th = (0, rH.memo)((function() {
        var HH, BH, LH, AH, SH, tH, zH, CH, XH, GH, YH, QH;
        const WH = rH.useRef(null),
          [MH, xH] = (0, rH.useState)(1),
          [vH, PH] = (0, rH.useState)(null),
          [UH, OH] = (0, rH.useState)(!1),
          {
            isTouchScreen: bH
          } = (0, cH.m)(["isTouchScreen"]),
          kH = (0, eH.e)("replay"),
          mH = (0, eH.e)("replayEdits"),
          oH = null !== kH,
          IH = null !== (HH = null === kH || void 0 === kH ? void 0 : kH.IX) && void 0 !== HH ? HH : 0,
          fH = null !== (BH = null === kH || void 0 === kH ? void 0 : kH.totalTicks) && void 0 !== BH ? BH : 0,
          lH = Math.max(0, fH - 1),
          KH = null !== (LH = null === kH || void 0 === kH ? void 0 : kH.playing) && void 0 !== LH && LH,
          gH = null !== (AH = null === kH || void 0 === kH ? void 0 : kH.speed) && void 0 !== AH ? AH : 1,
          NH = null !== (SH = null === kH || void 0 === kH ? void 0 : kH.oN) && void 0 !== SH ? SH : 20,
          RH = null !== vH && void 0 !== vH ? vH : IH,
          jH = null !== (tH = null === kH || void 0 === kH ? void 0 : kH.freecam) && void 0 !== tH && tH,
          nH = null !== (zH = null === kH || void 0 === kH ? void 0 : kH.cameraMode) && void 0 !== zH ? zH : "recording",
          FH = null !== (CH = null === mH || void 0 === mH ? void 0 : mH.cameraKeyframes) && void 0 !== CH ? CH : Wh,
          DH = null !== (XH = null === mH || void 0 === mH ? void 0 : mH.playbackMark) && void 0 !== XH ? XH : null,
          wH = null !== (GH = null === mH || void 0 === mH ? void 0 : mH.fileName) && void 0 !== GH ? GH : null,
          ZH = null !== (YH = null === mH || void 0 === mH ? void 0 : mH.unsavedChanges) && void 0 !== YH && YH,
          dH = null !== (QH = null === mH || void 0 === mH ? void 0 : mH.suggestSaveAs) && void 0 !== QH && QH,
          aH = (0, eH.e)("replayVideoExporting"),
          sH = !aH && oH && ("freecam" === nH || ("recording" === nH || "keyframe" === nH) && !KH),
          JH = bH && oH && "freecam" === nH && !aH && !UH;
        (0, IS.c)(!0, !0, "ReplayViewerOverlay"), (0, rH.useEffect)((() => {
          uH.gameBridge.send("syncReplayCameraMode", null)
        }), [jH]);
        const iH = (0, rH.useCallback)(((HH, BH) => {
            uH.gameBridge.send("seekReplay", {
              IX: HH,
              ignorePlaybackMark: null === BH || void 0 === BH ? void 0 : BH.ignorePlaybackMark
            })
          }), []),
          pH = (0, rH.useCallback)((() => {
            uH.gameBridge.send("setReplayPlaying", !1)
          }), []),
          yH = (0, rH.useCallback)(((HH, BH) => {
            uH.gameBridge.send("moveReplayCameraKeyframe", {
              from: HH,
              to: BH
            })
          }), []),
          HB = (0, rH.useCallback)((HH => {
            uH.gameBridge.send("setReplayCameraKeyframe", HH)
          }), []),
          BB = (0, rH.useCallback)((HH => {
            uH.gameBridge.send("deleteReplayCameraKeyframes", {
              start: HH,
              end: HH
            })
          }), []),
          LB = (0, rH.useCallback)((HH => {
            uH.gameBridge.send("deleteReplayCameraKeyframes", {
              start: HH.startTick,
              end: HH.endTick
            })
          }), []),
          AB = (0, rH.useCallback)((() => uH.gameBridge.lookup("replayCamera", null)), []),
          rB = (0, rH.useCallback)((HH => {
            PH(HH)
          }), []),
          SB = (0, rH.useCallback)((HH => {
            uH.gameBridge.send("setReplayPlaybackMark", {
              inTick: HH.startTick,
              outTick: HH.endTick
            })
          }), []),
          hB = (0, rH.useCallback)((() => {
            uH.gameBridge.send("setReplayPlaybackMark", null)
          }), []),
          tB = (0, rH.useCallback)((HH => {
            const BH = uH.gameBridge.latest("replay");
            if (null === BH || HH.endTick <= HH.startTick) return;
            const LH = HH.startTick,
              AH = HH.endTick;
            LL.NotificationProvider.showPromptPopup({
              title: "Crop recording to the selected range? This cannot be undone.",
              confirmText: "Crop",
              destructive: !0,
              cancelText: "Cancel"
            }).getResult().then((HH => {
              var rH;
              if (!0 !== HH) return;
              if ((null === (rH = uH.gameBridge.latest("replay")) || void 0 === rH ? void 0 : rH.id) !== BH.id) return;
              uH.gameBridge.send("cropReplay", {
                start: LH,
                end: AH
              }) && (PH(null), xH(1))
            }))
          }), []),
          zB = (0, rH.useCallback)(((HH, BH) => {
            xH(1), PH(null), (0, TS.e)().open(HH, BH).catch(vh)
          }), []),
          CB = (0, rH.useCallback)(((HH, BH) => {
            null !== uH.gameBridge.latest("connectedGame").websocketUrl ? LL.NotificationProvider.showPromptPopup({
              title: "Leave current game and play recording?",
              confirmText: "Yes",
              cancelText: "No"
            }).getResult().then((LH => {
              !0 === LH && zB(HH, BH)
            })) : zB(HH, BH)
          }), [zB]),
          EB = (0, rH.useCallback)((HH => {
            var BH;
            const LH = null === (BH = HH.target.files) || void 0 === BH ? void 0 : BH[0];
            if (HH.target.value = "", !LH) return;
            const AH = new FileReader;
            AH.onload = () => {
              CB(new Uint8Array(AH.result), {
                fileName: LH.name
              })
            }, AH.onerror = () => {
              vh(AH.error)
            }, AH.readAsArrayBuffer(LH)
          }), [CB]),
          XB = (0, rH.useCallback)((() => {
            const HH = () => {
              null !== WH.current && (0, Qh.g)(WH.current)
            };
            (0, OS.f)() ? (0, OS.c)().then((HH => {
              HH && CB(HH.bytes, {
                fileHandle: HH.handle
              })
            })).catch((BH => {
              console.error(BH), LL.NotificationProvider.showPromptPopup({
                title: Mh,
                confirmText: "Choose file",
                cancelText: "Cancel"
              }).getResult().then((BH => {
                !0 === BH && HH()
              }))
            })): HH()
          }), [CB]),
          GB = (0, rH.useCallback)((async function() {
            let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            let BH;
            try {
              BH = await mS(HH, {
                files: (0, TS.e)(),
                pickerSupported: OS.f,
                chooseFile: OS.b,
                write: OS.h,
                download: VS.k,
                onFallback: console.error
              })
            } catch (LH) {
              return void xh("Failed to save recording", LH)
            }
            "written" !== BH && "downloaded" !== BH || (() => {
              const HH = LL.NotificationProvider.showAlertPopup({
                title: "Recording saved",
                disableBackground: !0
              });
              setTimeout((() => {
                HH.tearDownNotification()
              }), 1e3)
            })()
          }), []),
          YB = (0, rH.useCallback)((HH => {
            uH.gameBridge.send("replayAction", HH)
          }), []),
          uB = (0, rH.useCallback)((HH => {
            xH((BH => gS(BH, HH)))
          }), []),
          QB = (0, rH.useCallback)((HH => {
            if (!uH.gameBridge.latest("replayVideoExporting")) switch (HH) {
              case "replayLoad":
                XB();
                break;
              case "replaySave":
                GB(!1);
                break;
              case "replaySaveAs":
                GB(!0);
                break;
              case "replayTimelineZoomIn":
                uB("in");
                break;
              case "replayTimelineZoomOut":
                uB("out")
            }
          }), [XB, GB, uB]);
        (0, eH.b)("replayUiActionRequested", QB);
        const WB = (0, rH.useCallback)((HH => {
            uH.gameBridge.send("setReplayCameraMode", HH)
          }), []),
          MB = oH ? RL.i : RL.u,
          xB = ZH && !dH ? RL.u : RL.i,
          vB = ZH && dH ? RL.u : RL.i;
        return (0, EH.jsxs)("div", {
          className: "ReplayViewerOverlay",
          children: [(0, EH.jsx)(th, {
            enabled: sH
          }), JH && (0, EH.jsx)(uh, {}), (0, EH.jsx)("input", {
            ref: WH,
            type: "file",
            accept: VS.e,
            className: "ReplayViewerFileInput",
            onChange: EB
          }), (0, EH.jsxs)("div", {
            className: hH()("ReplayViewerBar", {
              Collapsed: UH
            }),
            children: [(0, EH.jsx)("button", {
              type: "button",
              className: "ReplayViewerCollapseTab",
              onClick: () => {
                UH ? OH(!1) : oH ? OH(!0) : (0, qH.e)()
              },
              "aria-expanded": !UH,
              "aria-label": UH ? "Expand replay viewer" : "Collapse replay viewer",
              children: (0, EH.jsx)(VH.c, {
                name: UH ? "angle-up" : "angle-down"
              })
            }), !UH && (0, EH.jsxs)("div", {
              className: "ReplayViewerBarBody",
              children: [oH && fH > 0 && (0, EH.jsx)(hh, {
                maxTick: lH,
                displayTick: RH,
                oN: NH,
                cameraKeyframes: FH,
                playbackMark: DH,
                onSeek: iH,
                onPause: pH,
                onScrubTickChange: rB,
                onMoveCameraKeyframe: yH,
                onUpdateCameraKeyframe: HB,
                onDeleteCameraKeyframe: BB,
                onUseCurrentCamera: AB,
                onMarkRange: SB,
                onCropRange: tB,
                onDeleteKeyframesInRange: LB,
                onClearMark: hB,
                zoomLevel: MH,
                onZoomLevelChange: xH
              }, lH), (0, EH.jsxs)("div", {
                className: "ReplayViewerControls",
                children: [(0, EH.jsxs)("div", {
                  className: "ReplayViewerControlsLeftSide",
                  children: [(0, EH.jsxs)("div", {
                    className: "ReplayViewerControlsGroup FileGroup",
                    children: [oH && (0, EH.jsxs)("div", {
                      className: "ReplayViewerFileName",
                      children: [null !== wH && void 0 !== wH ? wH : "Unsaved recording", ZH ? " *" : ""]
                    }), (0, EH.jsxs)(MB, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        QB("replayLoad")
                      },
                      children: [(0, EH.jsx)(ir.b, {
                        noaAction: "replayLoad",
                        padHidesKey: !0
                      }), (0, EH.jsx)("span", {
                        children: " Load "
                      })]
                    }), (0, EH.jsxs)(RL.i, {
                      className: "ReplayViewerActionButton",
                      onClick: qH.e,
                      children: [(0, EH.jsx)(ir.b, {
                        noaAction: "replayViewerOpen",
                        padHidesKey: !0
                      }), (0, EH.jsx)("span", {
                        children: " Hide "
                      })]
                    }), (0, EH.jsxs)(xB, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        QB("replaySave")
                      },
                      disabled: !oH,
                      children: [(0, EH.jsx)(ir.b, {
                        noaAction: "replaySave",
                        padHidesKey: !0
                      }), (0, EH.jsx)("span", {
                        children: " Save "
                      })]
                    }), (0, EH.jsxs)(RL.i, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        uH.gameBridge.send("leaveGame", {
                          reloadPath: "/"
                        })
                      },
                      disabled: !oH,
                      children: [(0, EH.jsx)(ir.b, {
                        noaAction: "replayExit",
                        padHidesKey: !0
                      }), (0, EH.jsx)("span", {
                        children: " Exit "
                      })]
                    }), (0, EH.jsxs)(vB, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        QB("replaySaveAs")
                      },
                      disabled: !oH,
                      children: [(0, EH.jsx)(ir.b, {
                        noaAction: "replaySaveAs",
                        padHidesKey: !0
                      }), (0, EH.jsx)("span", {
                        children: " Save As "
                      })]
                    }), (0, EH.jsxs)(RL.i, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        uH.gameBridge.send("exportReplayVideo", null)
                      },
                      disabled: !oH || 0 === fH || aH,
                      children: [(0, EH.jsx)(ir.b, {
                        noaAction: "replayExportVideo",
                        padHidesKey: !0
                      }), (0, EH.jsx)("span", {
                        children: " Export "
                      })]
                    })]
                  }), (0, EH.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, EH.jsxs)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: [(0, EH.jsx)("span", {
                        children: " Camera Mode "
                      }), (0, EH.jsx)(ir.b, {
                        noaAction: "replayChangeCameraMode",
                        padHidesKey: !0
                      })]
                    }), (0, EH.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody CameraModes",
                      children: [(0, EH.jsx)(TH.g, {
                        tooltipInner: (0, EH.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Replicate how the camera was set when recorded."
                        }),
                        children: (0, EH.jsxs)(RL.W, {
                          className: "ReplayViewerModeButton",
                          active: "recording" === nH,
                          onClick: () => {
                            WB("recording")
                          },
                          disabled: !oH,
                          children: ["Recorded ", (0, EH.jsx)(VH.c, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, EH.jsx)(TH.g, {
                        tooltipInner: (0, EH.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Move the camera freely around."
                        }),
                        children: (0, EH.jsxs)(RL.W, {
                          className: "ReplayViewerModeButton",
                          active: "freecam" === nH,
                          onClick: () => {
                            WB("freecam")
                          },
                          disabled: !oH,
                          children: ["Free ", (0, EH.jsx)(VH.c, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, EH.jsx)(TH.g, {
                        tooltipInner: (0, EH.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Display the replay in real time using keyframes."
                        }),
                        children: (0, EH.jsxs)(RL.W, {
                          className: "ReplayViewerModeButton",
                          active: "keyframe" === nH,
                          onClick: () => {
                            WB("keyframe")
                          },
                          disabled: !oH,
                          children: ["Preview ", (0, EH.jsx)(VH.c, {
                            name: "circle-info"
                          })]
                        })
                      })]
                    })]
                  })]
                }), (0, EH.jsxs)("div", {
                  className: "ReplayViewerControlsGroup TimeGroup",
                  children: [(0, EH.jsxs)("div", {
                    className: "ReplayViewerTimecodeContainer",
                    children: [(0, EH.jsxs)("span", {
                      className: "ReplayViewerTimecode",
                      children: [(0, EH.jsx)("span", {
                        className: "ReplayViewerTimecodeNow",
                        children: eS(RH, NH)
                      }), (0, EH.jsx)("span", {
                        className: "ReplayViewerTimecodeDivider",
                        children: "/"
                      }), (0, EH.jsx)("span", {
                        className: "ReplayViewerTimecodeTotal",
                        children: eS(lH, NH)
                      })]
                    }), (0, EH.jsxs)("span", {
                      className: "ReplayViewerTickLabel",
                      children: ["Tick ", RH, " / ", lH]
                    })]
                  }), (0, EH.jsxs)("div", {
                    className: "ReplayViewerTimecodeControls",
                    children: [(0, EH.jsxs)(RL.i, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        YB("replaySkipBack")
                      },
                      disabled: !oH,
                      children: [(0, EH.jsxs)("span", {
                        children: [" ", (0, EH.jsx)(VH.c, {
                          name: "clock-rotate-left"
                        }), " 1s"]
                      }), (0, EH.jsx)(ir.b, {
                        noaAction: "replaySkipBack",
                        padHidesKey: !0
                      })]
                    }), (0, EH.jsxs)(RL.u, {
                      className: "ReplayViewerMediaButton PlayButton",
                      onClick: () => {
                        uH.gameBridge.send("setReplayPlaying", !KH)
                      },
                      disabled: !oH,
                      children: [(0, EH.jsxs)("span", {
                        children: [" ", KH ? (0, EH.jsx)(VH.c, {
                          name: "pause"
                        }) : (0, EH.jsx)(VH.c, {
                          name: "play"
                        }), " "]
                      }), (0, EH.jsx)(ir.b, {
                        noaAction: "replayPlayPause",
                        padHidesKey: !0
                      })]
                    }), (0, EH.jsxs)(RL.i, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        YB("replaySkipForward")
                      },
                      disabled: !oH,
                      children: [(0, EH.jsxs)("span", {
                        children: [" ", (0, EH.jsx)(VH.c, {
                          name: "rotate-forward"
                        }), " 1s"]
                      }), (0, EH.jsx)(ir.b, {
                        noaAction: "replaySkipForward",
                        padHidesKey: !0
                      })]
                    })]
                  })]
                }), (0, EH.jsxs)("div", {
                  className: "ReplayViewerControlsRightSide",
                  children: [(0, EH.jsxs)("div", {
                    className: "ReplayViewerControlsGroup RecordKeyframeGroup",
                    children: [(0, EH.jsxs)(RL.u, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        YB("replayRecordKeyframe")
                      },
                      disabled: !oH,
                      children: [(0, EH.jsx)(ir.b, {
                        noaAction: "replayRecordKeyframe",
                        padHidesKey: !0
                      }), (0, EH.jsx)("span", {
                        children: " Record keyframe "
                      })]
                    }), (0, EH.jsx)(Xh, {
                      disabled: !oH
                    }), DH && (0, EH.jsx)(RL.W, {
                      className: "ReplayViewerActionButton",
                      onClick: hB,
                      disabled: !oH,
                      children: (0, EH.jsx)("span", {
                        children: " Clear range "
                      })
                    })]
                  }), (0, EH.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, EH.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Speed"
                    }), (0, EH.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, EH.jsx)(RL.i, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          YB("replaySpeedDown")
                        },
                        disabled: !oH || (0, US.d)(gH),
                        children: (0, EH.jsx)("span", {
                          children: " \u2212 "
                        })
                      }), (0, EH.jsxs)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: [gH, "\xd7"]
                      }), (0, EH.jsx)(RL.i, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          YB("replaySpeedUp")
                        },
                        disabled: !oH || (0, US.c)(gH),
                        children: (0, EH.jsx)("span", {
                          children: " + "
                        })
                      })]
                    })]
                  }), (0, EH.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, EH.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Timeline Zoom"
                    }), (0, EH.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, EH.jsxs)(RL.i, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          QB("replayTimelineZoomOut")
                        },
                        disabled: !oH || MH <= fS[0],
                        children: [(0, EH.jsx)("span", {
                          children: " \u2212 "
                        }), (0, EH.jsx)(ir.b, {
                          noaAction: "replayTimelineZoomOut",
                          padHidesKey: !0
                        })]
                      }), (0, EH.jsx)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: qS(MH)
                      }), (0, EH.jsxs)(RL.i, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          QB("replayTimelineZoomIn")
                        },
                        disabled: !oH || MH >= fS[fS.length - 1],
                        children: [(0, EH.jsx)("span", {
                          children: " + "
                        }), (0, EH.jsx)(ir.b, {
                          noaAction: "replayTimelineZoomIn",
                          padHidesKey: !0
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0, EH.jsx)("div", {
                className: "ReplayViewerEmptyState",
                children: !oH && "Load a recording to begin playback"
              })]
            })]
          })]
        })
      }));
    var Uh = LH(1297);

    function Vh() {
      const [, HH] = (0, rH.useState)(0);
      return (0, zH.d)("replayViewer|uiVisibilityChanged", (() => {
          HH((HH => HH + 1))
        })), (0, zH.d)("replayViewer|replayLoaded", (() => {
          HH((HH => HH + 1))
        })),
        function() {
          if (!(0, Uh.d)()) return {};
          const HH = {
              [zh.b]: "true"
            },
            BH = (0, Ch.d)();
          for (const {
              group: LH,
              dataAttr: AH
            }
            of zh.f) AH && !BH[LH] && (HH[AH] = "true");
          return HH
        }()
    }
    var Oh = LH(34977),
      bh = LH(2134),
      kh = LH(9444),
      mh = LH(9433),
      oh = LH(2149);
    const Ih = (0, rH.memo)((function() {
      var HH, BH, LH;
      const AH = (0, PH.j)("customButtons");
      (0, rH.useEffect)((() => AH ? (uH.gameBridge.send("bindCustomButtonKeys", AH.filter(kh.d).map((HH => {
        let {
          id: BH,
          keycode: LH
        } = HH;
        return {
          id: BH,
          keycode: LH
        }
      }))), () => {
        uH.gameBridge.send("bindCustomButtonKeys", [])
      }) : () => {}), [AH]);
      const SH = null !== (HH = null === AH || void 0 === AH ? void 0 : AH.filter(kh.d)) && void 0 !== HH ? HH : [],
        hH = (0, mh.m)(),
        tH = null !== (BH = null === (LH = (0, oh.d)()) || void 0 === LH ? void 0 : LH.hideButtonHints) && void 0 !== BH && BH,
        zH = "customButton" !== (null === hH || void 0 === hH ? void 0 : hH.kind) || tH ? null : hH.id,
        CH = SH.length > 0,
        XH = (0, rH.useRef)(null);
      return (0, rH.useLayoutEffect)((() => {
        if (!CH) return () => {};
        const HH = XH.current,
          BH = HH.closest(".InGameUi"),
          LH = () => {
            BH.style.setProperty("--custom-buttons-top", `${HH.offsetTop}px`)
          };
        LH();
        const AH = new ResizeObserver(LH);
        return AH.observe(HH), AH.observe(HH.parentElement), () => {
          AH.disconnect(), BH.style.removeProperty("--custom-buttons-top")
        }
      }), [CH]), (0, EH.jsx)("div", {
        ref: XH,
        className: "" + ((0, BL.isMobile)() ? "CustomIconsMobile" : "CustomIcons"),
        children: SH.map((HH => {
          var BH, LH;
          return (0, EH.jsx)(fh, {
            button: HH,
            padGlyph: HH.id === zH && null !== (BH = null === (LH = (0, mH.c)()) || void 0 === LH ? void 0 : LH.getBoundButton("actionButton")) && void 0 !== BH ? BH : null
          }, HH.id)
        }))
      })
    }));

    function fh(HH) {
      let {
        button: BH,
        padGlyph: LH
      } = HH;
      const AH = (0, rH.useRef)(null),
        SH = () => {
          null !== AH.current && (AH.current = null, uH.gameBridge.send("pressCustomButton", {
            id: BH.id,
            down: !1
          }))
        };
      (0, rH.useEffect)((() => SH), []);
      const hH = gB(SH, {
          pressesOnPointerDown: !0
        }),
        tH = HH => {
          AH.current === HH.pointerId && SH()
        };
      return (0, EH.jsxs)("div", {
        className: "CustomIcon",
        ...hH,
        onLostPointerCapture: tH,
        children: [(0, EH.jsx)(bh.c, {
          icon: BH.icon,
          keyboardHint: (0, kh.b)(BH.keycode),
          padGlyph: LH,
          onPointerDown: HH => {
            try {
              HH.currentTarget.setPointerCapture(HH.pointerId)
            } catch {
              return
            }
            null === AH.current && uH.gameBridge.send("pressCustomButton", {
              id: BH.id,
              down: !0
            }), AH.current = HH.pointerId
          },
          onPointerUp: tH,
          onPointerCancel: tH,
          showTouchTutorialPubSubId: !1,
          showRedDotPubSubId: !1
        }), BH.description && (0, EH.jsx)("div", {
          className: "CustomIconDescription SmallTextBold",
          children: BH.description
        })]
      })
    }
    var lh = LH(2613),
      Kh = LH(225);
    const ch = {
      frame: HH => {
        const BH = requestAnimationFrame((() => {
          HH()
        }));
        return () => {
          cancelAnimationFrame(BH)
        }
      },
      afterFrame: HH => {
        const BH = setTimeout(HH, 0);
        return () => {
          clearTimeout(BH)
        }
      }
    };
    class eh {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kh.d,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ch,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
        this.idle = HH, this.frames = BH, this.onHiddenMount = LH, this.waiting = [], this.cancelIdle = null, this.cancelFrame = null, this.cancelAfterFrame = null, this.starvedFrames = 0, this.shown = !1
      }
      request(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.shown ? (HH(), () => {}) : (BH ? this.waiting.unshift(HH) : this.waiting.push(HH), this.schedule(), () => {
          const BH = this.waiting.indexOf(HH);
          BH >= 0 && (this.waiting.splice(BH, 1), this.settle())
        })
      }
      show() {
        for (this.shown = !0; this.waiting.length > 0;) this.mountNext()
      }
      schedule() {
        0 !== this.waiting.length && (this.cancelIdle ??= this.idle((HH => {
          for (this.cancelIdle = null; this.waiting.length > 0 && HH.timeRemaining() >= 8;) this.mountNext();
          this.schedule()
        })), this.cancelFrame ??= this.frames.frame((() => {
          this.cancelFrame = null, this.starvedFrames++, this.starvedFrames >= 4 && (this.cancelAfterFrame ??= this.frames.afterFrame((() => {
            this.cancelAfterFrame = null, this.mountNext(), this.schedule()
          }))), this.schedule()
        })))
      }
      mountNext() {
        this.starvedFrames = 0;
        const HH = this.waiting.shift(),
          BH = !this.shown,
          LH = performance.now();
        try {
          HH()
        } finally {
          BH && this.onHiddenMount(performance.now() - LH), this.settle()
        }
      }
      settle() {
        0 === this.waiting.length && this.stop()
      }
      stop() {
        var HH, BH, LH;
        null === (HH = this.cancelIdle) || void 0 === HH || HH.call(this), this.cancelIdle = null, null === (BH = this.cancelFrame) || void 0 === BH || BH.call(this), this.cancelFrame = null, null === (LH = this.cancelAfterFrame) || void 0 === LH || LH.call(this), this.cancelAfterFrame = null
      }
    }
    const qh = (0, rH.createContext)(null);

    function gh(HH) {
      let {
        children: BH,
        first: LH = !1
      } = HH;
      const AH = (0, rH.useContext)(qh),
        [SH, hH] = (0, rH.useState)(null === AH);
      return (0, rH.useEffect)((() => {
        if (!SH && null !== AH) return AH.request((() => {
          hH(!0)
        }), LH)
      }), [LH, SH, AH]), SH ? (0, rH.createElement)(rH.Fragment, null, BH) : null
    }
    const Nh = (0, rH.memo)((function(HH) {
        let {
          shown: BH
        } = HH;
        const [LH] = (0, rH.useState)((() => new WH.e(BH))), [SH] = (0, rH.useState)((() => BH ? null : new eh(void 0, void 0, (HH => {
          AH.e.noteWorkDuringAdmissionWait(HH)
        }))));
        return (0, rH.useLayoutEffect)((() => {
          BH && (null === SH || void 0 === SH || SH.show(), LH.show())
        }), [BH, LH, SH]), (0, EH.jsx)(WH.d.Provider, {
          value: LH,
          children: (0, EH.jsx)(qh.Provider, {
            value: SH,
            children: (0, EH.jsx)(Rh, {})
          })
        })
      })),
      Rh = (0, rH.memo)((function() {
        const {
          isUiHidden: HH,
          isUiHiddenByCamera: BH,
          worldPanelHud: LH,
          isTouchScreen: AH
        } = (0, cH.m)(["isUiHidden", "isUiHiddenByCamera", "worldPanelHud", "isTouchScreen"]), SH = (0, Mr.e)(), tH = Vh(), zH = (0, WH.g)(), CH = (0, rH.useRef)(null), XH = (0, PH.j)("showKillfeed");
        return function() {
            const HH = (0, WH.g)();
            (0, rH.useEffect)((() => HH.whenShown(MH)), [HH])
          }(),
          function() {
            const HH = (0, PH.j)("inventoryColourOverride");
            (0, rH.useEffect)((() => {
              if (!HH) return;
              const {
                panel: BH,
                slot: LH,
                slotSelected: AH,
                slotUnavailable: rH
              } = IH(HH), SH = document.documentElement.style;
              return SH.setProperty("--InventoryPanelColour", BH), SH.setProperty("--InventorySlotColour", LH), SH.setProperty("--InventorySlotSelectedColour", AH), SH.setProperty("--InventorySlotUnavailableColour", rH), () => {
                SH.removeProperty("--InventoryPanelColour"), SH.removeProperty("--InventorySlotColour"), SH.removeProperty("--InventorySlotSelectedColour"), SH.removeProperty("--InventorySlotUnavailableColour")
              }
            }), [HH])
          }(), (0, rH.useLayoutEffect)((() => zH.whenShown((() => {
            var HH;
            null === (HH = CH.current) || void 0 === HH || HH.classList.remove("PreMounted")
          }))), [zH]), (0, EH.jsxs)(EH.Fragment, {
            children: [(0, EH.jsxs)("div", {
              ref: CH,
              className: hH()("InGameUi", {
                PreMounted: !zH.shown,
                Hidden: HH,
                HiddenByCamera: BH,
                HiddenByWorldPanel: null !== LH,
                WorldPanelTouchControl: "touchControls" === LH
              }),
              ...tH,
              children: [(0, EH.jsxs)(gh, {
                children: [(0, EH.jsx)(GA.c, {}), (0, EH.jsx)(MA, {})]
              }), (0, EH.jsx)(WH.f, {
                children: (0, EH.jsx)(xA, {})
              }), (0, EH.jsxs)(gh, {
                children: [(0, EH.jsx)(Dr, {}), (0, EH.jsx)(yr, {}), AH && (0, EH.jsx)(BS, {})]
              }), (0, EH.jsxs)(gh, {
                children: [(0, EH.jsx)(IL, {}), (0, EH.jsx)(lA.b, {}), (0, EH.jsx)(jA, {})]
              }), (0, EH.jsx)(WH.f, {
                children: (0, EH.jsx)(XA, {})
              }), (0, EH.jsxs)(gh, {
                children: [(0, EH.jsx)(ar.e, {}), (0, EH.jsx)(Ph, {})]
              }), null, (0, EH.jsxs)(gh, {
                children: [(0, EH.jsx)(YS.f, {}), (0, EH.jsx)(uS.h, {})]
              }), (0, EH.jsx)(gh, {
                children: (0, EH.jsx)(lL.k, {})
              }), (0, EH.jsx)(gh, {
                children: (0, EH.jsx)(dh, {
                  showChat: SH
                })
              }), (0, EH.jsxs)(gh, {
                children: [(0, EH.jsx)(WS, {}), (0, EH.jsx)(dr, {})]
              }), (0, EH.jsxs)("div", {
                className: hH()("RightElements", {
                  RightElementsTouchscreen: AH
                }),
                "data-camera-keeper-host": "",
                children: [(0, EH.jsxs)("div", {
                  className: aA.i,
                  "data-holds-camera-keeper": "",
                  children: [(0, EH.jsxs)("div", {
                    className: "TopRightElementsLeft",
                    "data-holds-camera-keeper": "",
                    children: [(0, EH.jsx)(gh, {
                      children: (0, EH.jsx)(lr.c, {})
                    }), (0, EH.jsxs)(gh, {
                      children: [(0, EH.jsx)(OH, {}), (0, EH.jsx)(yA.e, {})]
                    }), BL.featureFlags.useSocialFeatures && (0, EH.jsx)(WH.f, {
                      children: (0, EH.jsx)(Hr.b, {
                        placement: "inGame"
                      })
                    }), BL.featureFlags.useSocialFeatures && (0, EH.jsx)(WH.f, {
                      children: (0, EH.jsx)(Gr, {})
                    }), XH && (0, EH.jsx)(WH.f, {
                      children: (0, EH.jsx)(fA, {})
                    }), (0, EH.jsx)(gh, {
                      children: (0, EH.jsx)(Oh.e, {})
                    })]
                  }), BL.featureFlags.useSocialFeatures && (0, EH.jsx)("div", {
                    className: "TopRightElementsRight",
                    children: (0, EH.jsx)(gh, {
                      children: (0, EH.jsx)(nr.d, {})
                    })
                  })]
                }), (0, EH.jsxs)(gh, {
                  children: [(0, EH.jsx)(lL.d, {
                    placement: "topRight"
                  }), (0, EH.jsx)(ah, {})]
                })]
              }), (0, EH.jsx)("div", {
                className: "LeftCentre",
                children: (0, EH.jsx)(gh, {
                  children: (0, EH.jsx)(Ih, {})
                })
              }), (0, EH.jsxs)("div", {
                className: "BottomCentre",
                "data-holds-camera-keeper": AH ? "" : void 0,
                children: [(0, EH.jsx)(WH.f, {
                  children: (0, EH.jsx)(vH.g, {})
                }), (0, EH.jsx)(gh, {
                  children: (0, EH.jsx)(nh, {})
                }), (0, EH.jsxs)("div", {
                  className: "BottomElements",
                  "data-holds-camera-keeper": AH ? "" : void 0,
                  children: [(0, EH.jsx)("div", {
                    className: hH()("BottomLeftElements", {
                      Touch: AH
                    }),
                    children: (0, EH.jsxs)(gh, {
                      children: [(0, EH.jsx)(Qr, {}), !AH && (0, EH.jsx)(lh.e, {})]
                    })
                  }), (0, EH.jsx)(gh, {
                    children: (0, EH.jsx)(Zh, {})
                  }), (0, EH.jsx)(gh, {
                    children: (0, EH.jsx)(FA, {
                      isTouchScreen: AH
                    })
                  })]
                })]
              }), (0, EH.jsx)("div", {
                className: "MiddleLeft"
              }), AH && (0, EH.jsx)(gh, {
                children: (0, EH.jsx)(XL, {})
              }), (0, EH.jsx)("div", {
                className: "CameraFadeHost",
                ref: YB.m
              })]
            }), (0, EH.jsx)(WH.f, {
              children: (0, EH.jsx)(PS.c, {})
            }), (0, EH.jsx)(WH.f, {
              children: (0, EH.jsx)(XS, {})
            }), (0, EH.jsx)(gh, {
              first: !0,
              children: (0, EH.jsx)(Wr.e, {})
            }), (0, EH.jsx)(WH.f, {
              children: (0, EH.jsx)(jh, {})
            })]
          })
      }));

    function jh() {
      return (0, rH.useEffect)((() => {
        const HH = setTimeout((() => {
          (0, YH.j)()
        }), 0);
        return () => {
          clearTimeout(HH), YH.k.pM(!1)
        }
      }), []), null
    }
    const nh = (0, rH.memo)((function() {
        const HH = (0, zH.e)("aimingOverlay", "none");
        (0, UH.b)();
        const BH = (0, PH.n)("middleTextUpper"),
          LH = (0, PH.n)("middleTextLower");
        return (0, EH.jsxs)("div", {
          className: "MiddleTextBottom",
          style: "sniper" === HH ? {
            visibility: "hidden"
          } : {},
          children: [(0, EH.jsx)(wh, {
            text: BH,
            className: "MiddleText MiddleTextUpper SmallTextBold",
            maxHeightFraction: Fh
          }), (0, EH.jsx)(wh, {
            text: LH,
            className: "MiddleText",
            maxHeightFraction: Dh
          })]
        })
      })),
      Fh = .3,
      Dh = .2;

    function wh(HH) {
      let {
        text: BH,
        className: LH,
        maxHeightFraction: AH
      } = HH;
      const SH = (0, rH.useRef)(null),
        hH = (0, rH.useRef)(null);
      return function(HH, BH, LH, AH) {
        (0, rH.useLayoutEffect)((() => {
          const AH = HH.current,
            rH = BH.current;
          if (!AH || !rH) return;
          let SH = -1,
            hH = -1;
          const tH = HH => (rH.style.setProperty("zoom", String(HH)), AH.getBoundingClientRect().height),
            zH = () => {
              const HH = document.documentElement.clientHeight * LH;
              let BH = 1;
              if (tH(1) > HH) {
                let LH = .5,
                  AH = 1;
                for (let BH = 0; BH < 6; BH++) {
                  const BH = (LH + AH) / 2;
                  tH(BH) <= HH ? LH = BH : AH = BH
                }
                BH = LH
              }
              hH = tH(BH), SH = AH.getBoundingClientRect().width
            };
          zH();
          let CH = 0;
          const EH = () => {
              cancelAnimationFrame(CH), CH = requestAnimationFrame(zH)
            },
            XH = new ResizeObserver((() => {
              const {
                width: HH,
                height: BH
              } = AH.getBoundingClientRect();
              HH === SH && BH === hH || EH()
            }));
          return XH.observe(AH), window.addEventListener("resize", EH), () => {
            XH.disconnect(), window.removeEventListener("resize", EH), cancelAnimationFrame(CH), rH.style.removeProperty("zoom")
          }
        }), [HH, BH, LH, AH])
      }(SH, hH, AH, BH.content), (0, EH.jsx)("div", {
        ref: SH,
        className: "MiddleTextFit",
        children: (0, EH.jsx)(QS, {
          ref: hH,
          text: BH,
          className: LH
        })
      })
    }
    const Zh = (0, rH.memo)((function() {
        const HH = (0, zH.e)("aimingOverlay", "none");
        (0, UH.b)();
        const BH = (0, PH.j)("useInventory");
        return (0, EH.jsxs)("div", {
          className: "BottomMiddleElements",
          style: "sniper" === HH ? {
            visibility: "hidden"
          } : {},
          children: [(0, EH.jsx)(XH, {}), (0, EH.jsx)(lL.d, {}), (0, EH.jsx)(KL, {}), (0, EH.jsx)(WH.f, {
            children: (0, EH.jsx)(Rr, {})
          }), (0, EH.jsxs)("div", {
            className: "HotBarRow",
            children: [BH ? (0, EH.jsx)(kH.c, {}) : (0, EH.jsx)(kH.d, {}), (0, EH.jsx)(oH, {})]
          })]
        })
      })),
      dh = (0, rH.memo)((function(HH) {
        let {
          showChat: BH
        } = HH;
        const {
          t: LH
        } = (0, DH.B)(), {
          clientEscMenuOptions: AH,
          sessionReplayRecording: SH,
          isTouchScreen: tH
        } = (0, cH.m)(["clientEscMenuOptions", "sessionReplayRecording", "isTouchScreen"]);
        (0, UH.b)();
        const {
          userContext: zH,
          isUserContextUpdating: CH
        } = (0, xH.e)(), XH = (0, PH.j)("hideCoordinates"), YH = (0, PH.j)("customVariationTitle"), {
          requestedGameNameWithVariation: uH,
          gameNameWithVariation: QH,
          lobbyName: WH,
          shownLobbyName: MH
        } = (0, eH.e)("connectedGame"), vH = (0, GH.b)(uH, WH, !1), [VH, OH] = (0, rH.useState)(null), bH = (0, cr.m)(QH || uH || ""), kH = YH || bH || "";
        (0, rH.useEffect)((() => {
          CH || Lr.d.getFavouriteLobbies(zH).then((HH => {
            console.log("Got favourite lobbies", HH), OH(HH)
          }))
        }), [CH, zH]);
        const mH = (0, rH.useRef)(null);
        return (0, rH.useLayoutEffect)((() => {
          const HH = mH.current,
            BH = document.documentElement,
            LH = new ResizeObserver((() => {
              BH.style.setProperty("--InGameHeaderRowsHeight", `${HH.offsetHeight}px`)
            }));
          return LH.observe(HH), () => {
            LH.disconnect(), BH.style.removeProperty("--InGameHeaderRowsHeight")
          }
        }), []), pA(mH), (0, EH.jsxs)(EH.Fragment, {
          children: [(0, EH.jsxs)("div", {
            className: hH()(aA.f, {
              Touchscreen: tH
            }),
            ref: mH,
            children: [(0, EH.jsxs)("div", {
              className: "InGameHeader",
              children: [(0, EH.jsxs)("div", {
                className: "InGameHeaderLogo",
                onMouseDown: HH => {
                  HH.stopPropagation(), HH.preventDefault()
                },
                onClick: () => {
                  cH.c.set({
                    openEverythingMenuName: eA.o.SETTINGS
                  })
                },
                children: [(0, EH.jsx)(Kr.d, {
                  showFace: !0,
                  loading: !1
                }), "bloxd.io"]
              }), (0, EH.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, EH.jsxs)("div", {
                className: "InGameHeaderGameName",
                children: [null === vH && (0, EH.jsx)(Kr.d, {}), null !== vH && (0, EH.jsxs)(EH.Fragment, {
                  children: [vH, kH && ` ${kH}`]
                })]
              }), (0, EH.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, EH.jsx)("div", {
                className: "InGameHeaderLobbyName",
                children: MH
              }), (0, er.G)(WH) && (0, EH.jsx)(TH.g, {
                tooltipInner: (0, EH.jsx)("div", {
                  children: LH(null !== VH && VH.includes(WH) ? "customLobby:removeFromFavourites" : "customLobby:addToFavourites")
                }),
                children: (0, EH.jsx)("div", {
                  children: (0, EH.jsx)(RL.C, {
                    isLiked: null !== VH && VH.includes(WH),
                    onClick: () => {
                      try {
                        if (!VH) return;
                        VH.includes(WH) ? (Lr.d.unfavouriteLobby(zH, WH).catch((HH => {
                          console.error("Failed to favourite lobby", HH)
                        })), OH(VH.filter((HH => HH !== WH)))) : (Lr.d.favouriteLobby(zH, WH).catch((HH => {
                          console.error("Failed to favourite lobby", HH)
                        })), OH([...VH, WH]))
                      } catch (HH) {
                        console.error("Failed to like lobby", HH)
                      }
                    },
                    isLoading: null === VH
                  })
                })
              }), (0, EH.jsx)(vS, {})]
            }), (0, EH.jsx)(kr, {
              show: AH.showFPS,
              asText: SH
            }), !XH && AH.showCoordinates && (0, EH.jsx)(Ir, {}), !XH && AH.showChunkCoordinates && (0, EH.jsx)(fr, {}), (0, EH.jsx)(MS, {})]
          }), (0, EH.jsx)("div", {
            className: "TopLeftElements",
            "data-holds-camera-keeper": "",
            children: (0, EH.jsx)("div", {
              className: "InGameHeaderAndChat",
              "data-holds-camera-keeper": "",
              children: BH && (0, EH.jsx)(KH.b, {})
            })
          })]
        })
      })),
      ah = (0, rH.memo)((function() {
        (0, UH.b)();
        const HH = (0, PH.n)("RightInfoText"),
          [BH, LH] = (0, rH.useState)(null);
        return (0, zB.h)(BH, ".RightElements"), HH.hasText ? (0, EH.jsx)("div", {
          className: "RightInfoDivContainer",
          children: (0, EH.jsx)(QS, {
            ref: LH,
            text: HH,
            className: "RightInfoDiv",
            children: (0, EH.jsx)("div", {
              className: "RightInfoDivInner",
              children: (0, EH.jsx)(CH.b, {
                text: HH.content
              })
            })
          })
        }) : null
      }))
  },
  5314: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => tH
    });
    var AH = LH(45),
      rH = LH(304),
      SH = LH(1986),
      hH = LH(1225);

    function tH(HH) {
      let {
        text: BH
      } = HH;
      const LH = [];
      let tH = "";
      return (0, rH.tc)(BH).forEach(((HH, BH) => {
        if ("string" === typeof HH || !(0, SH.f)(HH.icon)) return void(tH += "string" === typeof HH ? HH : HH.icon);
        const rH = Math.max(0, tH.trimEnd().search(/\S{1,12}$/));
        LH.push((0, hH.jsxs)(AH.Fragment, {
          children: [tH.slice(0, rH), (0, hH.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [tH.slice(rH), (0, hH.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": HH.icon,
              children: (0, hH.jsx)(SH.e, {
                itemName: HH.icon,
                amount: 0
              })
            })]
          })]
        }, BH)), tH = ""
      })), LH.push(tH), (0, hH.jsx)(hH.Fragment, {
        children: LH
      })
    }
  },
  37412: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => GH,
      d: () => EH,
      f: () => XH
    });
    var AH = LH(45),
      rH = LH(1038),
      SH = LH.n(rH),
      hH = LH(1986),
      tH = LH(1225);
    const zH = 350;
    let CH = 0;

    function EH() {
      return CH += 1, CH
    }

    function XH(HH, BH) {
      let LH = 0;
      for (const AH of HH) "ingredient" !== AH.kind && AH.fE === BH && (LH += AH.amount);
      return LH > 0 ? {
        idx: BH,
        amount: LH
      } : null
    }

    function GH(HH) {
      var BH, LH;
      let {
        anim: rH,
        onComplete: CH
      } = HH;
      const EH = null !== (BH = rH.delayMs) && void 0 !== BH ? BH : 0,
        XH = null !== (LH = rH.durationMs) && void 0 !== LH ? LH : zH,
        [GH, YH] = (0, AH.useState)(rH.from),
        [uH, QH] = (0, AH.useState)(0 === EH),
        [WH, MH] = (0, AH.useState)(!1),
        xH = (0, AH.useRef)(!1);
      return (0, AH.useEffect)((() => {
        let HH, BH;
        const LH = () => {
            xH.current = !0, QH(!0), HH = requestAnimationFrame((() => {
              BH = requestAnimationFrame((() => {
                YH({
                  x: rH.to.x,
                  y: rH.to.y
                }), MH(!0)
              }))
            }))
          },
          AH = xH.current ? 0 : EH;
        let SH;
        AH > 0 ? SH = setTimeout(LH, AH) : LH();
        const hH = setTimeout((() => {
          CH(rH.id)
        }), AH + XH + 50);
        return () => {
          clearTimeout(SH), cancelAnimationFrame(HH), cancelAnimationFrame(BH), clearTimeout(hH)
        }
      }), [rH.id, rH.to.x, rH.to.y, CH, EH, XH]), (0, tH.jsx)("div", {
        className: SH()("CraftItemFlyAnimation", {
          Ingredient: "ingredient" === rH.kind,
          Waiting: !uH,
          Arrived: WH
        }),
        style: {
          left: GH.x,
          top: GH.y,
          "--fly-duration": `${XH}ms`
        },
        children: (0, tH.jsx)(hH.e, {
          itemName: rH.itemName,
          amount: rH.amount
        })
      })
    }
  },
  37396: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => qH,
      d: () => RH
    });
    var AH = LH(45),
      rH = LH(2800),
      SH = LH(7138),
      hH = LH(2134),
      tH = LH(2628),
      zH = LH(9528),
      CH = LH(317),
      EH = LH(18),
      XH = LH(1450),
      GH = LH(30),
      YH = LH(1038),
      uH = LH.n(YH),
      QH = LH(304),
      WH = LH(37403),
      MH = LH(1967),
      xH = LH(2051),
      vH = LH(9377),
      PH = LH(1225);

    function TH(HH) {
      var BH, LH;
      let {
        slotIdx: SH
      } = HH;
      const hH = (0, xH.c)("hotbar", (HH => {
          var BH;
          return null !== (BH = HH.items[SH]) && void 0 !== BH ? BH : null
        })),
        zH = (0, xH.c)("hotbar", (HH => HH.ammo)),
        [EH, XH] = (0, AH.useState)(!1),
        GH = (0, AH.useRef)(null),
        [YH, QH] = (0, AH.useState)(null),
        [WH, TH] = (0, AH.useState)(null),
        UH = (0, tH.j)("maxAuraLevel"),
        VH = (0, rH.e)(),
        OH = (0, AH.useCallback)((() => {
          if (clearTimeout(GH.current), hH) {
            var HH, BH, LH, AH;
            const zH = hH.displayName,
              EH = [],
              XH = Array.isArray(zH) ? zH : [zH],
              GH = {
                fontStyle: null !== (HH = hH.attributes.customAttributes) && void 0 !== HH && HH.author ? "italic" : "normal"
              };
            for (const HH of XH) HH.str ? EH.push(HH) : EH.push({
              str: HH,
              style: GH
            });
            if (null !== (BH = hH.attributes.customAttributes) && void 0 !== BH && BH.enchantments) {
              EH.push(" ");
              const HH = Object.entries(hH.attributes.customAttributes.enchantments).sort(((HH, BH) => BH[1] - HH[1])),
                BH = hH.attributes.customAttributes.enchantmentData;
              for (const [LH, AH] of HH) {
                var rH, SH;
                const HH = null !== (rH = null === BH || void 0 === BH || null === (SH = BH[LH]) || void 0 === SH ? void 0 : SH.icon) && void 0 !== rH ? rH : `${LH} Enchantment`;
                var tH;
                if (AH < 4)
                  for (let BH = 0; BH < AH; BH++) EH.push({
                    icon: HH,
                    style: {
                      fontSize: "1.5em"
                    }
                  });
                else EH.push({
                  icon: HH,
                  style: {
                    fontSize: "1.5em"
                  }
                }), EH.push(null !== (tH = (0, CH.T)(AH)) && void 0 !== tH ? tH : AH.toString())
              }
            }
            QH(EH), TH(null !== (LH = null === (AH = hH.attributes.customAttributes) || void 0 === AH ? void 0 : AH.enchantmentTier) && void 0 !== LH ? LH : null)
          } else QH(null), TH(null);
          XH(!0), VH();
          const zH = null === hH || void 0 === hH ? void 0 : hH.attributes.customAttributes;
          void 0 === (null === zH || void 0 === zH ? void 0 : zH.shotsLeft) && (GH.current = setTimeout((() => {
            XH(!1)
          }), 2e3))
        }), [null === hH || void 0 === hH ? void 0 : hH.name, SH, null === hH || void 0 === hH ? void 0 : hH.instance, null === hH || void 0 === hH ? void 0 : hH.displayName]);
      (0, AH.useEffect)((() => (OH(), () => {
        clearTimeout(GH.current), XH(!1)
      })), [null === hH || void 0 === hH ? void 0 : hH.name, SH, null === hH || void 0 === hH ? void 0 : hH.instance, OH]);
      const bH = null === hH || void 0 === hH || null === (BH = hH.attributes.customAttributes) || void 0 === BH ? void 0 : BH.shotsLeft,
        kH = void 0 === bH ? null : (0, PH.jsx)("div", {
          className: "SelectedItemShotsLeft",
          children: `${bH}|${hH.requiresAmmo?`${zH}x${hH.clipSize}`:hH.clipSize}`
        }),
        mH = (0, vH.m)();
      return (0, PH.jsx)(PH.Fragment, {
        children: EH && hH && !mH.showing ? (0, PH.jsxs)("div", {
          className: uH()("SelectedItemName SmallTextBold", {
            NoAuraBar: 0 === UH,
            Enchanted: null !== WH
          }),
          style: {
            "--enchantmentColour": null !== (LH = CH.lb[WH]) && void 0 !== LH ? LH : CH.lb.None,
            "--duration": WH ? (0, CH.fb)(WH) + "s" : void 0
          },
          children: [WH && (0, PH.jsxs)("div", {
            className: "SelectedItemNameGradient",
            children: [(0, PH.jsx)(MH.b, {
              text: YH
            }), kH]
          }), (0, PH.jsxs)("div", {
            className: "SelectedItemNameNormal",
            children: [(0, PH.jsx)(MH.b, {
              text: YH
            }), kH]
          })]
        }) : null
      })
    }
    var UH = LH(37412),
      VH = LH(15),
      OH = LH(1998),
      bH = LH(619),
      kH = LH(2630),
      mH = LH(3768),
      oH = LH(3770);
    var IH = LH(1056),
      fH = LH(1049),
      lH = LH(2680);

    function KH() {
      return parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--touch-hotbar-ends-spare")) >= 0
    }
    var cH = LH(9603),
      eH = LH(1464);
    const qH = (0, AH.memo)((function() {
      const [HH, BH] = (0, AH.useState)(0), LH = (0, tH.j)("useFullInventory"), hH = (0, tH.j)("highlightedHotbarSlots"), {
        isTouchScreen: zH,
        openInGameMenuName: CH
      } = (0, VH.m)(["isTouchScreen", "openInGameMenuName"]), GH = null !== CH && "inventory" !== CH, YH = (0, xH.e)("fullInventory") && "inventory" === CH, QH = function() {
        const HH = (0, IH.n)(((HH, BH) => `${HH}:${(0,fH.e)(HH,BH)?"portrait":"landscape"}`)),
          [BH, LH] = (0, AH.useState)(KH);
        return (0, AH.useLayoutEffect)((() => {
          LH(KH())
        }), [HH]), (0, XH.d)(lH.e, (() => {
          LH(KH())
        })), BH
      }(), MH = zH && !QH;
      ! function(HH, BH, LH) {
        (0, AH.useLayoutEffect)((() => {
          const AH = document.documentElement.classList;
          return HH && (AH.add("TouchHotbar"), AH.toggle("TouchHotbarKeysAbove", BH), AH.toggle("TouchHotbarHasBag", LH)), (0, mH.i)(), EH.k.AX(oH.b), () => {
            AH.remove("TouchHotbar", "TouchHotbarKeysAbove", "TouchHotbarHasBag"), (0, mH.i)(), EH.k.AX(oH.b)
          }
        }), [HH, BH, LH])
      }(zH, MH, LH);
      const [vH, kH] = (0, SH.b)("changedHotbarUsingNumkeys", !0), cH = (0, xH.c)("hotbar", (HH => HH.selectedSlot)), eH = null !== cH && void 0 !== cH ? cH : HH, qH = (0, rH.e)(), jH = (0, AH.useRef)(null), nH = (0, XH.e)("pointerLockUpdate", Boolean(document.pointerLockElement));
      (0, XH.d)("inventoryDraggedItemUpdated", (HH => {
        jH.current = HH, qH()
      })), (0, xH.b)("hotbarScrolled", (HH => {
        null === cH && wH(HH)
      })), (0, xH.b)("hotbarSlotRequested", (HH => {
        DH(HH), kH(!1)
      })), (0, xH.b)("numberKeyPressed", (() => {
        kH(!1)
      })), (0, xH.b)("hotbarDropRequested", (HH => {
        const BH = OH.gameBridge.latest("hotbar").items[eH];
        if (BH) {
          var LH;
          const AH = HH && null !== (LH = BH.amount) && void 0 !== LH ? LH : 1;
          OH.gameBridge.send("removeInventoryItem", {
            slot: eH,
            amount: AH,
            drop: !0
          })
        }
      }));
      const DH = HH => {
          OH.gameBridge.send("selectHotbarSlot", HH), BH(HH)
        },
        wH = HH => {
          DH((eH + HH + bH.m) % bH.m)
        };
      let ZH, dH = null,
        aH = null,
        sH = HH => HH => {},
        JH = HH => BH => {
          DH(HH)
        },
        iH = HH => HH => {},
        pH = [];
      if (YH) {
        var yH;
        const HH = jH.current;
        if (null === HH || void 0 === HH || !HH.setHovered) return (0, PH.jsx)("div", {
          className: uH()("HotBarContainer", {
            Touch: zH,
            KeysAbove: MH
          }),
          children: (0, PH.jsx)("div", {
            className: "HotBar"
          })
        });
        dH = HH.draggedInfo, aH = HH.specialItemInfo, sH = HH.setHovered, JH = HH.pointerDown, iH = HH.pointerUp, ZH = HH.variation, pH = null !== (yH = HH.craftFlyAnims) && void 0 !== yH ? yH : []
      }
      return (0, PH.jsxs)("div", {
        className: uH()("HotBarContainer", {
          Touch: zH,
          PopupOpen: zH && GH,
          KeysAbove: MH
        }),
        children: [(0, PH.jsxs)("div", {
          className: uH()("HotBar", {
            HoverDisabled: nH
          }),
          children: [zH && (0, PH.jsxs)(PH.Fragment, {
            children: [(0, PH.jsx)(NH, {
              useFullInventory: LH,
              inventoryOpen: YH
            }), (0, PH.jsx)(gH, {
              direction: "Previous",
              onPress: () => {
                wH(-1)
              }
            })]
          }), !zH && (0, PH.jsxs)(PH.Fragment, {
            children: [(0, PH.jsx)(RH, {}), (0, PH.jsx)("div", {
              className: "HotBarFiller"
            })]
          }), (0, PH.jsx)("div", {
            className: "HotBarGameItemsContainer",
            children: new Array(10).fill(0).map(((HH, BH) => (0, PH.jsx)(WH.b, {
              idx: BH,
              draggedInfo: dH,
              specialItemInfo: aH,
              craftFlyHoldbackInfo: (0, UH.f)(pH, BH),
              setHovered: sH(BH),
              pointerDown: JH(BH),
              pointerUp: iH(BH),
              variation: ZH,
              isSelected: BH === eH,
              hotbarHighlighted: !0 === (null === hH || void 0 === hH ? void 0 : hH.includes(BH)),
              hoverDisabled: nH,
              showNumber: vH && !zH
            }, BH)))
          }), zH && (0, PH.jsx)(gH, {
            direction: "Next",
            onPress: () => {
              wH(1)
            }
          }), !zH && (0, PH.jsxs)(PH.Fragment, {
            children: [(0, PH.jsx)("div", {
              className: "HotBarFiller"
            }), (0, PH.jsx)("div", {
              className: uH()("HotBarItem ButtonHotBarItem", {
                HiddenButtonHotBarItem: !LH
              }),
              onPointerDown: () => {
                EH.k.AX("toggleMenu", "inventory")
              },
              children: (0, PH.jsx)(FH, {})
            })]
          })]
        }), (0, PH.jsx)(TH, {
          slotIdx: eH
        })]
      })
    }));

    function gH(HH) {
      let {
        direction: BH,
        onPress: LH
      } = HH;
      return (0, PH.jsx)("div", {
        className: uH()("HotBarArrow", BH),
        ...eH.c,
        children: (0, PH.jsx)(hH.c, {
          icon: "Previous" === BH ? "caret-left" : "caret-right",
          touchPressOn: "pointerdown",
          onClick: LH
        })
      })
    }
    const NH = (0, AH.memo)((function(HH) {
        let {
          useFullInventory: BH,
          inventoryOpen: LH
        } = HH;
        const rH = (0, tH.j)("maxAuraLevel"),
          SH = (0, AH.useRef)(null),
          hH = (0, zH.b)();
        return function(HH, BH, LH) {
          (0, AH.useLayoutEffect)((() => (document.documentElement.classList.toggle("TouchHotbarHasShop", BH), EH.k.AX(oH.b), () => {
            document.documentElement.classList.remove("TouchHotbarHasShop")
          })), [BH]), (0, AH.useLayoutEffect)((() => {
            const BH = HH.current.closest(".BottomMiddleElements");
            return BH.classList.toggle("TouchInventoryOpen", LH), () => {
              BH.classList.remove("TouchInventoryOpen")
            }
          }), [HH, LH])
        }(SH, hH, LH), (0, cH.h)(SH, hH, LH), (0, PH.jsxs)("div", {
          ref: SH,
          className: uH()("TouchInventoryKeys", {
            NoAuraBar: 0 === rH,
            InventoryOpen: LH
          }),
          children: [(0, PH.jsx)(RH, {
            touchKey: !0
          }), (0, PH.jsx)("div", {
            className: uH()("TouchInventoryKey BagKey", {
              Hidden: !BH
            }),
            ...eH.c,
            children: (0, PH.jsx)(FH, {
              touchKey: !0
            })
          })]
        })
      })),
      RH = (0, AH.memo)((function(HH) {
        let {
          touchKey: BH = !1
        } = HH;
        const LH = (0, zH.b)();
        return (0, PH.jsx)("div", {
          className: BH ? uH()("TouchInventoryKey ShopKey", {
            Hidden: !LH
          }) : uH()("HotBarItem ButtonHotBarItem", {
            HiddenButtonHotBarItem: !LH
          }),
          ...BH ? eH.c : {},
          children: (0, PH.jsx)(hH.c, {
            icon: (0, CH.jc)(),
            noaAction: "OpenShop",
            touchPressOn: "pointerdown",
            onClick: () => {
              LH && VH.c.set({
                openEverythingMenuName: QH.o.SHOP
              })
            },
            showTouchTutorialPubSubId: "showShopTouchTutorial",
            showRedDotPubSubId: "showShopIconRedDot",
            touchIconPosition: "topleft"
          })
        })
      }));

    function jH(HH) {
      let {
        player: BH
      } = HH;
      return BH.some((HH => null !== HH && CH.bd.includes(HH.name)))
    }

    function nH(HH) {
      HH.creative || GH.e.getItem("LogInInventoryRedDotTutorialComplete") || (jH(HH) ? (EH.k.AX("RedDotOpenInventoryIcon", !0), EH.k.AX("TouchTutorialOpenInventoryIcon", !0)) : (EH.k.AX("RedDotOpenInventoryIcon", !1), EH.k.AX("TouchTutorialOpenInventoryIcon", !1)))
    }
    const FH = (0, AH.memo)((function(HH) {
      let {
        touchKey: BH = !1
      } = HH;
      (0, AH.useEffect)((() => {
        nH(OH.gameBridge.latest("inventory"))
      }), []), (0, xH.b)("inventory", nH);
      const LH = (0, kH.g)();
      return (0, XH.d)("toggleMenu", (HH => {
        LH.shown && (null !== HH && void 0 !== HH && HH.startsWith("inventory") && jH(OH.gameBridge.latest("inventory")) ? (GH.e.setItem("LogInInventoryRedDotTutorialComplete", !0), EH.k.AX("RedDotOpenInventoryIcon", !1), EH.k.AX("TouchTutorialOpenInventoryIcon", !1)) : "shop" === HH && EH.k.AX("showShopTouchTutorial", !1))
      })), BH ? (0, PH.jsx)(hH.c, {
        icon: "backpack",
        noaAction: "OpenInventory",
        touchPressOn: "pointerdown",
        onClick: () => {
          EH.k.AX("toggleMenu", "inventory")
        },
        showRedDotPubSubId: "RedDotOpenInventoryIcon",
        showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
        touchIconPosition: "topleft"
      }) : (0, PH.jsx)("div", {
        className: "HotBarButton",
        onPointerDown: () => {
          EH.k.AX("toggleMenu", "inventory")
        },
        children: (0, PH.jsx)(hH.c, {
          icon: "backpack",
          noaAction: "OpenInventory",
          onPointerDown: HH => {
            EH.k.AX("toggleMenu", "inventory"), HH.stopPropagation()
          },
          showRedDotPubSubId: "RedDotOpenInventoryIcon",
          showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
          touchIconPosition: "topleft"
        })
      })
    }))
  },
  37403: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => WH,
      d: () => uH
    });
    var AH = LH(45),
      rH = LH(1038),
      SH = LH.n(rH),
      hH = LH(1991),
      tH = LH(1986),
      zH = LH(1998),
      CH = LH(2051),
      EH = LH(37410),
      XH = LH(34999),
      GH = LH(1390),
      YH = LH(1225);
    const uH = (HH, BH, LH) => {
      let AH = BH,
        rH = !1;
      for (const SH of LH)(null === SH || void 0 === SH ? void 0 : SH.idx) === HH && (rH = !0, AH > 0 && (AH -= SH.amount));
      return {
        displayedAmt: AH,
        shown: !rH || AH > 0
      }
    };
    const QH = HH => {
        let {
          idx: BH
        } = HH;
        return (0, GH.y)() ? null : (0, YH.jsx)("div", {
          className: "HotbarItemNumber SmallTextBold",
          children: BH < 9 ? BH + 1 : 0
        })
      },
      WH = (0, AH.memo)((function(HH) {
        var BH, LH, AH;
        let {
          idx: rH,
          setHovered: GH,
          pointerDown: WH,
          pointerUp: MH,
          draggedInfo: xH,
          specialItemInfo: vH,
          craftFlyHoldbackInfo: PH,
          defaultIconB64: TH = null,
          variation: UH,
          isSelected: VH = !1,
          hotbarHighlighted: OH = !1,
          hoverDisabled: bH = !1,
          showNumber: kH = !1,
          showNewDot: mH = !1
        } = HH;
        const oH = (0, CH.c)("inventory", (HH => rH === EH.g ? null : (0, XH.j)(HH, rH)));
        let IH, fH, lH, KH;
        if (rH === EH.g) vH && (IH = vH.name, lH = vH.amount, KH = vH.attributes);
        else if (oH) {
          var cH;
          IH = oH.name, fH = oH.icon, lH = null !== (cH = oH.amount) && void 0 !== cH ? cH : 0, KH = oH.attributes
        }
        const eH = null === (BH = KH) || void 0 === BH || null === (LH = BH.customAttributes) || void 0 === LH ? void 0 : LH.enchantmentTier,
          qH = (0, hH.h)(KH),
          {
            displayedAmt: gH,
            shown: NH
          } = uH(rH, lH, [xH, vH, PH]),
          RH = IH && NH,
          jH = void 0 !== UH && function(HH, BH) {
            const {
              enchantable: LH,
              salvageable: AH
            } = zH.gameBridge.latest("stationItems");
            return "Enchanting Table" === HH ? !0 === LH[BH] : "Salvaging Table" === HH && !0 === AH[BH]
          }(UH, IH);
        return (0, YH.jsxs)("div", {
          className: SH()("InvenItem", {
            Highlighted: RH && jH,
            Selected: VH,
            HotbarHighlighted: OH,
            HoverDisabled: bH
          }),
          onPointerEnter: () => {
            null === GH || void 0 === GH || GH(!0)
          },
          onPointerLeave: () => {
            null === GH || void 0 === GH || GH(!1)
          },
          onPointerDown: WH,
          onPointerUp: MH,
          "data-inven-idx": rH,
          children: [RH && (0, YH.jsx)(tH.e, {
            itemName: null !== (AH = fH) && void 0 !== AH ? AH : IH,
            amount: gH,
            enchantmentTier: eH,
            bar: qH
          }), RH && mH && (0, YH.jsx)("div", {
            className: "InvenItemNewDot"
          }), kH && (0, YH.jsx)(QH, {
            idx: rH
          }), TH && !RH && (0, YH.jsx)("div", {
            className: "InvenItemUnfilled",
            style: {
              backgroundImage: `url(${TH})`
            }
          })]
        })
      }))
  },
  37410: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => AH,
      g: () => rH
    });
    const AH = -1,
      rH = -2
  },
  37874: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => bH
    });
    var AH = LH(45),
      rH = LH(37881),
      SH = LH(1967),
      hH = LH(602),
      tH = LH(18),
      zH = LH(1038),
      CH = LH.n(zH),
      EH = LH(37431),
      XH = LH(2840),
      GH = LH(2999),
      YH = LH(2875),
      uH = LH(2849),
      QH = LH(3988),
      WH = LH(37435),
      MH = LH(15),
      xH = LH(2104),
      vH = LH(2530),
      PH = LH(1168),
      TH = LH(5386),
      UH = LH(2051),
      VH = LH(81),
      OH = LH(1225);
    const bH = (0, AH.memo)((function() {
      const HH = (0, rH.c)(),
        BH = (0, UH.e)("players"),
        LH = (0, UH.e)("lobbyLeaderboardRows"),
        tH = (0, UH.e)("hiddenPlayerNames"),
        zH = (0, AH.useRef)(null),
        [CH, EH] = (0, AH.useReducer)((HH => HH + 1), 0);
      return (0, AH.useEffect)((() => (0, xH.b)((() => {
        EH()
      }))), []), (0, OH.jsx)("div", {
        className: "LobbyLeaderboardContainer Menu",
        children: (0, OH.jsx)("div", {
          className: "MenuBody",
          children: function() {
            if (!HH) return (0, OH.jsx)(OH.Fragment, {});
            const AH = [...BH.ids],
              rH = {},
              CH = {};
            for (const HH of AH) {
              var EH, XH;
              rH[HH] = null === (EH = LH[HH]) || void 0 === EH ? void 0 : EH.colour;
              const BH = null === (XH = LH[HH]) || void 0 === XH ? void 0 : XH.values;
              BH && (CH[HH] = {
                ...BH
              })
            }
            const YH = Object.keys(HH);
            YH.sort(((BH, LH) => HH[BH].sortPriority - HH[LH].sortPriority)), AH.sort(((BH, LH) => {
              if (!CH[BH] || !CH[LH]) return 0;
              for (const AH of YH) {
                const rH = CH[BH][AH],
                  SH = CH[LH][AH];
                let hH = 0;
                if ("string" == typeof rH && "string" == typeof SH ? hH = rH.localeCompare(SH) : "number" == typeof rH && "number" == typeof SH ? hH = rH - SH : "number" == typeof rH && "string" == typeof SH ? hH = 1 : "string" == typeof rH && "number" == typeof SH && (hH = -1), hH) return hH * ("ascending" === HH[AH].sortOrder ? 1 : -1)
              }
              return 0
            }));
            for (const HH of AH) {
              var uH, QH, WH;
              const {
                name: AH,
                ranks: rH,
                cosmetics: SH
              } = BH.byId[HH], tH = [], zH = null !== (uH = null === (QH = LH[HH]) || void 0 === QH || null === (WH = QH.tags) || void 0 === WH ? void 0 : WH.flatMap((HH => 0 === HH.length ? HH : [...HH, String.fromCharCode(8198)]))) && void 0 !== uH ? uH : [];
              tH.push(...zH), tH.push(...(0, PH.x)(rH, AH, (null === SH || void 0 === SH ? void 0 : SH.nameColour) === hH.c || null === SH || void 0 === SH ? void 0 : SH.nameColour)), CH[HH] ??= {}, CH[HH].name = tH
            }

            function MH(HH, LH) {
              if (CH[HH] && void 0 !== CH[HH][LH]) {
                if ("name" === LH) {
                  const {
                    name: AH,
                    cosmetics: rH
                  } = BH.byId[HH];
                  return (0, OH.jsxs)("div", {
                    className: "PlayerPfpAndName",
                    children: [rH && (0, OH.jsx)(vH.c, {
                      cosmetics: rH
                    }), " ", (0, OH.jsx)(SH.b, {
                      text: CH[HH][LH],
                      friendBadgeFor: (0, xH.d)(AH, tH) ? AH : void 0
                    })]
                  })
                }
                return (0, OH.jsx)(SH.b, {
                  text: CH[HH][LH]
                })
              }
              return ""
            }
            const UH = Object.keys(HH).filter((BH => !0 !== HH[BH].hidden)).map((BH => {
              var LH;
              return {
                key: BH,
                header: (0, OH.jsx)(SH.b, {
                  text: null !== (LH = HH[BH].displayName) && void 0 !== LH ? LH : ""
                })
              }
            }));
            return (0, OH.jsx)("div", {
              ref: zH,
              className: "LobbyLeaderboard",
              children: (0, OH.jsx)(TH.c, {
                columns: UH,
                rows: AH,
                getRowKey: HH => HH,
                renderRow: LH => {
                  const AH = LH !== BH.localId;
                  return (0, OH.jsx)(kH, {
                    playerId: LH,
                    playerName: BH.byId[LH].name,
                    isOtherPlayer: AH,
                    opensProfileCard: (0, GH.h)(AH, BH.byId[LH].name, tH),
                    lobbyLeaderboardInfo: HH,
                    getPlayerValue: MH,
                    playerColors: rH
                  })
                }
              })
            })
          }()
        })
      })
    }));

    function kH(HH) {
      let {
        playerId: BH,
        playerName: LH,
        isOtherPlayer: rH,
        opensProfileCard: SH,
        lobbyLeaderboardInfo: hH,
        getPlayerValue: zH,
        playerColors: xH
      } = HH;
      const vH = (0, AH.useRef)(null);
      (0, AH.useEffect)((() => () => {
        XH.e.closeIfOwner(vH)
      }), []);
      const PH = {
          icon: "flag",
          text: "Report",
          onClick: () => {
            tH.k.AX("OpenReportMenu", {
              playerEId: BH,
              playerName: LH,
              kt: null,
              serverChatMsgId: null
            })
          }
        },
        TH = () => ({
          ...(0, GH.g)(BH, LH),
          showLocation: !1,
          status: null,
          extraActions: [PH],
          moderationActions: null === LH ? [] : (0, WH.c)(LH),
          friendRequestSource: "leaderboard"
        });
      return (0, OH.jsxs)("tr", {
        ref: vH,
        "data-pad-focusable": SH || void 0,
        [XH.f]: SH || void 0,
        onClick: SH ? () => {
          var HH;
          XH.e.toggle(vH, {
            ...TH(),
            anchor: null !== (HH = vH.current.querySelector(".PlayerPfpAndName")) && void 0 !== HH ? HH : vH.current
          })
        } : void 0,
        onContextMenu: SH ? HH => {
          (0, YH.g)(vH, HH, TH(), MH.c.get("isTouchScreen"))
        } : void 0,
        onPointerDown: SH ? HH => {
          (0, uH.d)(HH, (() => (0, GH.g)(BH, LH).playerSocialPreview))
        } : void 0,
        children: [Object.keys(hH).map((HH => !0 === hH[HH].hidden ? null : (0, OH.jsxs)("td", {
          className: CH()("LobbyLeaderboardValue SmallTextBold", {
            LobbyLeaderboardValueHighlighted: !rH
          }),
          children: [(0, OH.jsx)("div", {
            className: "LobbyLeaderboardValueText",
            children: zH(BH, HH)
          }), (0, OH.jsx)("div", {
            className: "LobbyLeaderboardValueBg",
            style: {
              backgroundColor: xH[BH]
            }
          })]
        }, HH))), rH && !SH && (0, OH.jsx)(EH.b, {
          className: "LobbyLeaderboardRowFloatingActions",
          triggerElementRef: vH,
          options: [{
            icon: PH.icon,
            text: PH.text,
            onPointerDown: PH.onClick
          }, ...null === LH || VH.featureFlags.useSocialFeatures ? [] : (0, QH.b)(null, LH)]
        })]
      })
    }
  },
  37435: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => EH
    });
    var AH = LH(2036),
      rH = LH(2642),
      SH = LH(37439);
    const hH = {
      kick: "lobbyManageEntry:kicked",
      ban: "lobbyManageEntry:banned",
      unban: "lobbyManageEntry:unbanned"
    };

    function tH(HH, BH) {
      return async () => function(HH, BH, LH) {
        return null === BH ? {
          message: {
            key: "lobbyManageEntry:noAnswer"
          },
          next: null
        } : BH.ok ? {
          message: {
            key: hH[HH.type]
          },
          next: LH
        } : {
          message: {
            fromServer: BH.message
          },
          next: null
        }
      }(HH, await (0, SH.i)(HH), BH())
    }

    function zH(HH) {
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
        run: tH({
          type: "ban",
          name: HH
        }, (() => function(HH) {
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
            run: tH({
              type: "unban",
              name: HH
            }, (() => null))
          }
        }(HH)))
      }
    }

    function CH(HH, BH) {
      if (null === HH) return [];
      const LH = [],
        AH = function(HH, BH) {
          var LH, AH;
          return null !== (LH = null !== (AH = HH.here.find((HH => HH.name === BH))) && void 0 !== AH ? AH : HH.away.find((HH => HH.name === BH))) && void 0 !== LH ? LH : null
        }(HH, BH);
      var SH, hH;
      return null !== AH && void 0 !== AH && AH.can.kick && LH.push((SH = BH, hH = AH.can.ban, {
        kind: "act",
        icon: "person-falling-burst",
        text: "lobbyManageEntry:kick",
        destructive: !1,
        confirm: null,
        analyticsClick: {
          id: "lobby_manage.kick",
          value: "profile_card"
        },
        run: tH({
          type: "kick",
          name: SH
        }, (() => hH ? zH(SH) : null))
      })), null !== AH && void 0 !== AH && AH.can.ban && LH.push(zH(BH)), LH.push({
        kind: "leave",
        icon: "users-gear",
        text: "lobbyManageEntry:manageLobby",
        destructive: !1,
        onClick: () => {
          (0, rH.f)({
            page: "players",
            focusName: BH,
            source: "profile_card"
          })
        }
      }), LH
    }

    function EH(HH) {
      var BH;
      return CH(null !== (BH = AH.e.get("lobbyManage")) && void 0 !== BH ? BH : null, HH)
    }
  },
  37439: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => EH,
      i: () => zH
    });
    var AH = LH(1475),
      rH = LH(2036),
      SH = LH(1998);
    const hH = 1e4;
    let tH = 0;

    function zH(HH) {
      const BH = ++tH;
      return new Promise((LH => {
        const tH = BH => {
            zH(), clearTimeout(CH), !1 === (null === BH || void 0 === BH ? void 0 : BH.ok) && (0, AH.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: HH.type
            }), LH(BH)
          },
          zH = rH.e.subscribe("lobbyManage", (HH => {
            const LH = function(HH, BH) {
              var LH;
              return null !== (LH = null === HH || void 0 === HH ? void 0 : HH.results.find((HH => HH.requestId === BH))) && void 0 !== LH ? LH : null
            }(HH, BH);
            null !== LH && tH(LH)
          })),
          CH = setTimeout((() => {
            tH(null)
          }), hH);
        SH.gameBridge.send("lobbyManage", {
          ...HH,
          requestId: BH
        })
      }))
    }
    const CH = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class EH {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zH;
        this.onChange = HH, this.sendAction = BH, this.pending = new Map, this.statuses = new Map
      }
      send(HH, BH, LH) {
        var AH;
        return this.statuses.delete(BH), this.pending.set(BH, (null !== (AH = this.pending.get(BH)) && void 0 !== AH ? AH : 0) + 1), this.sendAction(HH).then((HH => {
          var AH;
          const rH = null !== HH && void 0 !== HH ? HH : {
              requestId: -1,
              ok: !1,
              message: CH
            },
            SH = (null !== (AH = this.pending.get(BH)) && void 0 !== AH ? AH : 1) - 1;
          SH > 0 ? this.pending.set(BH, SH) : this.pending.delete(BH);
          const hH = !rH.ok || rH.message.length > 0 ? rH.message : null === LH ? null : [LH];
          return null !== hH && this.statuses.set(BH, {
            ok: rH.ok,
            text: hH,
            until: Date.now() + 4e3
          }), this.onChange(), rH
        }))
      }
      show(HH, BH) {
        this.statuses.set(HH, {
          ...BH,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(HH) {
        for (const [BH, LH] of this.statuses) LH.until <= HH && this.statuses.delete(BH)
      }
      nextDeadline() {
        let HH = null;
        for (const LH of this.statuses.values()) {
          var BH;
          HH = Math.min(null !== (BH = HH) && void 0 !== BH ? BH : 1 / 0, LH.until)
        }
        return HH
      }
      statusOf(HH, BH) {
        const LH = this.statuses.get(HH);
        return !LH || LH.until <= BH ? null : {
          ok: LH.ok,
          text: LH.text
        }
      }
      isPending(HH) {
        return this.pending.has(HH)
      }
    }
  },
  5248: (HH, BH, LH) => {
    LH.d(BH, {
      f: () => xH,
      b: () => MH
    });
    var AH = LH(45),
      rH = LH(1450),
      SH = LH(1967),
      hH = LH(5250),
      tH = LH(1225);
    const zH = (0, AH.memo)((function(HH) {
      let {
        initialParameters: BH
      } = HH;
      const LH = (0, AH.useRef)(null),
        rH = (0, AH.useRef)(null),
        zH = (0, AH.useRef)(0),
        CH = (0, AH.useRef)(null),
        EH = BH.description,
        XH = BH.dH,
        {
          scale: GH,
          rotation: YH
        } = null !== BH && void 0 !== BH ? BH : {},
        uH = (0, hH.f)();
      return (0, AH.useEffect)((() => {
        const HH = uH.onFrame((() => {
          const HH = uH.getState();
          if (!HH.isActive || !LH.current || !rH.current) return;
          const BH = HH.state;
          if (LH.current.value = BH.progress, BH.clickCount > zH.current) {
            zH.current = BH.clickCount;
            const HH = rH.current;
            HH.classList.add("pulse"), CH.current = setTimeout((() => {
              HH.classList.remove("pulse")
            }), 100)
          }
        }));
        return () => {
          clearTimeout(CH.current), HH()
        }
      }), [uH]), (0, tH.jsx)(tH.Fragment, {
        children: (0, tH.jsxs)("div", {
          className: "QTEProgressBarWrapper",
          style: {
            ...null !== GH && {
              "--scale": GH
            },
            ...null !== YH && {
              "--rotation": `${YH}deg`
            }
          },
          children: [(0, tH.jsx)("progress", {
            id: "catch",
            max: 100,
            className: "QTEProgressBar",
            ref: LH
          }), (0, tH.jsx)("span", {
            className: "QTEProgressBarInteractionIndicator",
            ref: rH,
            children: (0, tH.jsx)(SH.b, {
              text: [{
                icon: XH
              }]
            })
          }), (0, tH.jsx)("div", {
            className: "QTEProgressBarDescription",
            children: (0, tH.jsx)(SH.b, {
              text: EH
            })
          })]
        })
      })
    }));
    var CH = LH(1038),
      EH = LH.n(CH);
    const XH = 2 * Math.PI * 90,
      GH = (0, AH.memo)((function(HH) {
        let {
          initialParameters: BH
        } = HH;
        const LH = (0, AH.useRef)(null),
          rH = (0, AH.useRef)(null),
          zH = (0, AH.useRef)(null),
          CH = BH.label,
          GH = BH.icon,
          YH = BH.JH,
          {
            scale: uH,
            rotation: QH,
            iH: WH
          } = null !== BH && void 0 !== BH ? BH : {},
          MH = (0, hH.f)();
        return (0, AH.useEffect)((() => {
          const HH = MH.onFrame((() => {
            var HH, BH;
            const AH = MH.getState();
            if (!AH.isActive || !rH.current) return;
            const SH = AH.state,
              hH = null !== (HH = SH.timeRemaining) && void 0 !== HH ? HH : 0,
              tH = null !== (BH = SH.sH) && void 0 !== BH ? BH : 1,
              CH = XH * (1 - hH / tH);
            rH.current.style.strokeDashoffset = `${CH}`, LH.current && (LH.current.style.opacity = hH > 0 ? "1" : "0"), zH.current && YH && (zH.current.textContent = `${(hH/1e3).toFixed(1)}s`)
          }));
          return () => {
            HH()
          }
        }), [MH, YH]), (0, tH.jsxs)("div", {
          className: "QTETimedClick",
          ref: LH,
          style: {
            ...null !== uH && {
              "--scale": uH
            },
            ...null !== QH && {
              "--rotation": `${QH}deg`
            }
          },
          children: [(0, tH.jsxs)("div", {
            className: "QTETimedClickCircleContainer",
            children: [(0, tH.jsxs)("svg", {
              className: "QTETimedClickCircularProgress",
              viewBox: "0 0 200 200",
              children: [(0, tH.jsx)("circle", {
                className: "QTETimedClickProgressTrack",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12"
              }), (0, tH.jsx)("circle", {
                className: "QTETimedClickProgressArc",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12",
                strokeLinecap: "square",
                strokeDasharray: XH,
                ref: rH
              })]
            }), (0, tH.jsx)("div", {
              className: "QTETimedClickCenterContent",
              children: (0, tH.jsx)(SH.b, {
                text: [{
                  icon: GH
                }],
                className: EH()("QTETimedClickInnerText", {
                  QTETimedClickBreathe: WH
                })
              })
            })]
          }), (0, tH.jsxs)("div", {
            className: "QTETimedClickRightTextContainer",
            children: [(0, tH.jsx)(SH.b, {
              text: CH,
              className: "QTETimedClickLabelText"
            }), YH && (0, tH.jsx)("span", {
              className: "QTETimedClickTimeText",
              ref: zH
            })]
          })]
        })
      })),
      YH = (0, AH.memo)((function(HH) {
        let {
          initialParameters: BH
        } = HH;
        const LH = (0, AH.useRef)(null),
          rH = (0, AH.useRef)(null),
          zH = (0, AH.useRef)(null),
          CH = (0, AH.useRef)(!1),
          EH = BH.description,
          XH = null === BH || void 0 === BH ? void 0 : BH.icon,
          GH = (0, hH.f)();
        return (0, AH.useEffect)((() => {
          const HH = GH.onFrame((() => {
            const HH = GH.getState();
            if (!HH.isActive) return;
            const BH = HH.state;
            if (LH.current) {
              const HH = 100 * (BH.catchZonePosition - BH.yH / 2);
              LH.current.style.left = `${HH}%`, LH.current.style.width = 100 * BH.yH + "%", BH.isCatching !== CH.current && (CH.current = BH.isCatching, BH.isCatching ? LH.current.classList.add("catching") : LH.current.classList.remove("catching"))
            }
            rH.current && (rH.current.style.left = 100 * BH.moverPosition + "%"), zH.current && (zH.current.value = BH.progress)
          }));
          return () => {
            HH()
          }
        }), [GH]), (0, tH.jsxs)("div", {
          className: "QTEGravityBar",
          children: [(0, tH.jsx)("div", {
            className: "QTEGravityBarDescription",
            children: (0, tH.jsx)(SH.b, {
              text: EH
            })
          }), (0, tH.jsx)("progress", {
            max: 100,
            className: "QTEGravityBarProgress",
            ref: zH
          }), (0, tH.jsxs)("div", {
            className: "QTEGravityBarTrack",
            children: [(0, tH.jsx)("div", {
              className: "QTEGravityBarCatchZone",
              ref: LH
            }), (0, tH.jsx)("div", {
              className: "QTEGravityBarMover",
              ref: rH,
              children: (0, tH.jsx)("span", {
                children: XH && (0, tH.jsx)(SH.b, {
                  text: [{
                    icon: XH,
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
    var uH = LH(619);
    const QH = (0, AH.memo)((function(HH) {
        let {
          initialParameters: BH
        } = HH;
        const LH = (0, AH.useRef)(null),
          rH = BH.label,
          zH = BH.hB,
          {
            icon: CH,
            scale: EH,
            rotation: XH
          } = null !== BH && void 0 !== BH ? BH : {},
          GH = 100 * (.5 - zH / 2),
          YH = 100 * zH,
          QH = (0, hH.f)();
        return (0, AH.useEffect)((() => {
          const HH = QH.onFrame((() => {
            const HH = QH.getState();
            if (!HH.isActive || !LH.current) return;
            const BH = HH.state;
            LH.current.style.left = 100 * BH.markerPosition + "%"
          }));
          return () => {
            HH()
          }
        }), [QH]), (0, tH.jsxs)("div", {
          className: "QTEPrecisionBarWrapper",
          style: {
            ...!(0, uH.M)(EH) && {
              "--scale": EH
            },
            ...!(0, uH.M)(XH) && {
              "--rotation": `${XH}deg`
            }
          },
          children: [CH && (0, tH.jsx)(SH.b, {
            text: [{
              icon: CH
            }],
            className: "QTEPrecisionBarIcon"
          }), (0, tH.jsxs)("div", {
            className: "QTEPrecisionBarTrack",
            children: [(0, tH.jsx)("div", {
              className: "QTEPrecisionBarSuccessZone",
              style: {
                left: `${GH}%`,
                width: `${YH}%`
              }
            }), (0, tH.jsx)("div", {
              className: "QTEPrecisionBarMarker",
              ref: LH
            })]
          }), (0, tH.jsx)("div", {
            className: "QTEPrecisionBarLabel",
            children: (0, tH.jsx)(SH.b, {
              text: rH
            })
          })]
        })
      })),
      WH = (0, AH.memo)((function(HH) {
        let {
          initialParameters: BH
        } = HH;
        const LH = (0, AH.useRef)(null),
          [rH, zH] = (0, AH.useState)((() => new Array(BH.zB).fill("pending"))),
          [CH, EH] = (0, AH.useState)((() => {
            const HH = BH.XB;
            return (0, uH.M)(HH) || HH <= 0 ? [] : new Array(HH).fill("pending")
          })),
          XH = BH.label,
          {
            icon: GH
          } = BH,
          YH = (0, AH.useRef)(0),
          QH = (0, AH.useRef)(0),
          WH = (0, AH.useRef)([]),
          MH = (0, hH.f)();
        return (0, AH.useEffect)((() => {
          const HH = MH.onFrame((() => {
            const HH = MH.getState();
            if (!HH.isActive || !LH.current) return;
            const BH = HH.state,
              AH = 30 + 60 * BH.outerCircleProgress;
            if (LH.current.setAttribute("r", String(AH)), !0 === BH.lastClickResult && BH.successes > YH.current) {
              LH.current.classList.remove("QTERhythmClickOuterCircle--miss"), LH.current.classList.add("QTERhythmClickOuterCircle--hit");
              const HH = setTimeout((() => {
                var HH;
                null === (HH = LH.current) || void 0 === HH || HH.classList.remove("QTERhythmClickOuterCircle--hit")
              }), 200);
              WH.current.push(HH)
            } else if (!1 === BH.lastClickResult && BH.misses > QH.current) {
              LH.current.classList.remove("QTERhythmClickOuterCircle--hit"), LH.current.classList.add("QTERhythmClickOuterCircle--miss");
              const HH = setTimeout((() => {
                var HH;
                null === (HH = LH.current) || void 0 === HH || HH.classList.remove("QTERhythmClickOuterCircle--miss")
              }), 200);
              WH.current.push(HH)
            }
            BH.successes === YH.current && BH.misses === QH.current || (YH.current = BH.successes, QH.current = BH.misses, zH((HH => {
              const LH = [...HH];
              for (let AH = 0; AH < BH.zB; AH++) LH[AH] = AH < BH.successes ? "success" : "pending";
              return LH
            })), EH((HH => {
              if (0 === HH.length) return HH;
              const LH = [...HH];
              for (let AH = 0; AH < LH.length; AH++) LH[AH] = AH < BH.misses ? "miss" : "pending";
              return LH
            })))
          }));
          return () => {
            HH();
            for (const HH of WH.current) clearTimeout(HH);
            WH.current = []
          }
        }), [MH]), (0, tH.jsxs)("div", {
          className: "QTERhythmClickWrapper",
          children: [(0, tH.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: rH.map(((HH, BH) => (0, tH.jsx)("div", {
              className: "QTERhythmClickDot" + ("success" === HH ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
            }, BH)))
          }), (0, tH.jsxs)("div", {
            className: "QTERhythmClickCircleContainer",
            children: [(0, tH.jsxs)("svg", {
              className: "QTERhythmClickSvg",
              viewBox: "0 0 200 200",
              children: [(0, tH.jsx)("circle", {
                className: "QTERhythmClickInnerCircle",
                cx: "100",
                cy: "100",
                r: 30
              }), (0, tH.jsx)("circle", {
                className: "QTERhythmClickOuterCircle",
                cx: "100",
                cy: "100",
                r: 90,
                ref: LH
              })]
            }), GH && (0, tH.jsx)("div", {
              className: "QTERhythmClickCenterContent",
              children: (0, tH.jsx)(SH.b, {
                text: [{
                  icon: GH
                }],
                className: "QTERhythmClickIcon"
              })
            })]
          }), CH.length > 0 && (0, tH.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: CH.map(((HH, BH) => (0, tH.jsx)("div", {
              className: "QTERhythmClickDot" + ("miss" === HH ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
            }, BH)))
          }), (0, tH.jsx)("div", {
            className: "QTERhythmClickLabel",
            children: (0, tH.jsx)(SH.b, {
              text: XH
            })
          })]
        })
      }));

    function MH(HH) {
      let {
        qte: BH
      } = HH;
      switch (BH.type) {
        case "progressBar":
          return (0, tH.jsx)(zH, {
            initialParameters: BH.parameters
          });
        case "timedClick":
          return (0, tH.jsx)(GH, {
            initialParameters: BH.parameters
          });
        case "gravityBar":
          return (0, tH.jsx)(YH, {
            initialParameters: BH.parameters
          });
        case "precisionBar":
          return (0, tH.jsx)(QH, {
            initialParameters: BH.parameters
          });
        case "rhythmClick":
          return (0, tH.jsx)(WH, {
            initialParameters: BH.parameters
          });
        default:
          return console.warn("Unknown QTE type"), null
      }
    }
    const xH = (0, AH.memo)((function() {
      const [HH, BH] = (0, AH.useState)({
        type: null,
        parameters: null,
        state: null,
        isActive: !1
      });
      return (0, rH.d)("qteStateUpdated", (HH => {
        BH(HH)
      })), HH.isActive && HH.type ? (0, tH.jsx)("div", {
        className: "QTE",
        "data-camera-keeper": "",
        children: (0, tH.jsx)(MH, {
          qte: HH
        })
      }) : null
    }))
  },
  5250: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => tH,
      f: () => zH
    });
    var AH = LH(45),
      rH = LH(1253),
      SH = LH(5253);
    const hH = {
        getState: () => SH.d.getCurrentState(),
        onFrame: rH.x
      },
      tH = (0, AH.createContext)(hH);

    function zH() {
      return (0, AH.useContext)(tH)
    }
  },
  37215: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => EH,
      d: () => GH
    });
    var AH = LH(45),
      rH = LH(1352),
      SH = LH(1123),
      hH = LH(1313),
      tH = LH(3872),
      zH = LH(5399),
      CH = LH(1225);

    function EH(HH) {
      let {
        loading: BH,
        schematics: LH,
        onSchematicPicked: AH,
        selectedSchematicIdList: rH = [],
        disableAutoExport: zH
      } = HH;
      const {
        t: EH
      } = (0, SH.B)();
      return (0, CH.jsxs)("div", {
        className: "SchematicList",
        children: [BH && (0, CH.jsx)(hH.d, {}), !BH && 0 === LH.length && (0, CH.jsx)("div", {
          className: "NoSchematicsText",
          children: EH("worldBuilder:noSavedSchematic")
        }), !BH && LH.map((HH => (0, CH.jsx)(tH.d, {
          source: {
            type: "schematic",
            schematic: HH
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            AH(HH)
          },
          isSelected: rH.includes(HH.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: HH.isAutoExported && zH,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, HH.schematicId)))]
      })
    }

    function XH(HH) {
      let {
        ownedSchematics: BH,
        currentWorldSchematicId: LH,
        onClose: rH
      } = HH;
      const {
        t: hH
      } = (0, SH.B)(), [tH, XH] = (0, AH.useState)(null);
      return (0, CH.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === tH && (0, CH.jsxs)(CH.Fragment, {
          children: [(0, CH.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: hH("worldBuilder:schematicList")
          }), (0, CH.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: hH("worldBuilder:clickSchematicForOptions")
          }), (0, CH.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, CH.jsx)(EH, {
              loading: !1,
              schematics: BH,
              onSchematicPicked: HH => {
                XH(HH)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== tH && (0, CH.jsx)(zH.h, {
          schematic: tH,
          inSourceWorld: tH.schematicId === LH,
          onSchematicUpdate: HH => {
            XH(HH)
          },
          onClose: () => {
            XH(null), rH()
          }
        })]
      })
    }

    function GH(HH) {
      let {
        ownedSchematics: BH,
        currentWorldSchematicId: LH,
        onClose: AH
      } = HH;
      rH.NotificationProvider.showCustomPopup({
        body: HH => (0, CH.jsx)(XH, {
          ownedSchematics: BH,
          currentWorldSchematicId: LH,
          onClose: HH
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: AH,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  37791: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => TH,
      f: () => PH
    });
    var AH = LH(4631),
      rH = LH(1450),
      SH = LH(45),
      hH = LH(7007),
      tH = LH(4624),
      zH = LH(1241),
      CH = LH(1998),
      EH = LH(1967),
      XH = LH(1455),
      GH = LH(1123),
      YH = LH(37793),
      uH = LH(1038),
      QH = LH.n(uH),
      WH = LH(1287),
      MH = LH(1315),
      xH = LH(1214),
      vH = LH(1225);
    const PH = "SleepingOverlay";

    function TH() {
      const {
        t: HH
      } = (0, GH.B)(), [BH, LH] = (0, SH.useState)(!1), [uH, TH] = (0, SH.useState)(null), [VH, OH] = (0, SH.useState)(1), [bH, kH] = (0, SH.useState)(!1), [mH, oH] = (0, SH.useState)(!1), IH = (0, SH.useRef)(0), fH = (0, SH.useRef)(!1), lH = (0, SH.useRef)(!1), KH = (0, SH.useRef)(), cH = (0, SH.useRef)(null);

      function eH() {
        const HH = null !== uH && void 0 !== uH ? uH : "Rested Speed";
        CH.gameBridge.send("wakeUp", mH ? HH : null), cH.current = null, LH(!1), TH(null), OH(1), kH(!1), oH(!1)
      }

      function qH() {
        return !bH && (eH(), !0)
      }
      return (0, rH.d)("PlayerPhysicsTypeUpdate", (HH => {
        HH !== cH.current && (cH.current = HH, HH === hH.o.SLEEPING ? (lH.current || (IH.current = CH.gameBridge.lookup("cameraZoom", null), lH.current = !0), fH.current = !0, CH.gameBridge.send("setCameraZoom", 3), LH(!0), OH(function() {
          for (const HH of CH.gameBridge.lookup("blocksStandingOn", null)) {
            if (YH.d.leafBeds.includes(HH)) return console.log(`Found leaf bed: ${HH}`), 1;
            if (YH.d.woolBeds.includes(HH)) return console.log(`Found woold bed: ${HH}`), 2;
            if (YH.d.strongBeds.includes(HH)) return console.log(`Found strong bed ${HH}`), 3
          }
          return 1
        }())) : (lH.current = !1, LH(!1), TH(null), OH(1)))
      })), (0, SH.useEffect)((() => () => {
        (0, zH.t)(PH)
      }), []), (0, SH.useEffect)((() => {
        BH ? (0, zH.x)(PH) : ((0, zH.t)(PH), fH.current && (CH.gameBridge.send("setCameraZoom", IH.current), fH.current = !1))
      }), [BH]), (0, xH.r)("overlay", KH, qH, BH), (0, vH.jsx)(AH.e, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: BH,
        timeout: 300,
        nodeRef: KH,
        unmountOnExit: !0,
        children: (0, vH.jsx)("div", {
          ref: KH,
          onClick: HH => {
            qH() && HH.stopPropagation()
          },
          children: (0, vH.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, vH.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: tH.h.map((BH => (0, vH.jsxs)(UH, {
                restedEffect: BH,
                dh: uH,
                setChosenRestedEffect: TH,
                children: [(0, vH.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, vH.jsx)(EH.b, {
                    text: [{
                      icon: BH
                    }]
                  }), tH.e[BH].shortName]
                }), (0, vH.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: HH(tH.e[BH].description, {
                    time: tH.e[BH].effectLevelDurations[VH] / 6e4
                  })
                })]
              }, BH)))
            }), (0, vH.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, vH.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, vH.jsxs)(XH.i, {
                className: "SleepingOverlayWakeUpButton",
                onClick: HH => {
                  mH ? eH() : (kH(!0), (0, WH.$)((() => {
                    kH(!1), oH(!0)
                  }), !0)), HH.stopPropagation()
                },
                loading: bH,
                children: [!mH && (0, vH.jsxs)(vH.Fragment, {
                  children: [(0, vH.jsx)(MH.c, {
                    name: "film"
                  }), " ", HH("classicGame:watchAdToGetRestedPerk")]
                }), mH && HH("classicGame:wakeUp")]
              }), (0, vH.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, vH.jsx)("div", {
                  className: QH()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === VH
                  }),
                  children: (0, vH.jsx)(EH.b, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, vH.jsx)("div", {
                  className: QH()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === VH
                  }),
                  children: (0, vH.jsx)(EH.b, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, vH.jsx)("div", {
                  className: QH()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === VH
                  }),
                  children: (0, vH.jsx)(EH.b, {
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
    const UH = (0, SH.memo)((function(HH) {
      let {
        children: BH,
        restedEffect: LH,
        dh: AH,
        setChosenRestedEffect: rH
      } = HH;
      return LH === AH ? (0, vH.jsx)(XH.u, {
        onClick: HH => {
          HH.stopPropagation()
        },
        children: BH
      }) : (0, vH.jsx)(XH.m, {
        onClick: HH => {
          rH(LH), HH.stopPropagation()
        },
        children: BH
      })
    }))
  },
  5386: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => tH
    });
    var AH = LH(45),
      rH = LH(1038),
      SH = LH.n(rH),
      hH = LH(1225);

    function tH(HH) {
      let {
        columns: BH,
        rows: LH,
        getRowKey: rH,
        renderRow: tH,
        className: zH
      } = HH;
      return (0, hH.jsxs)("table", {
        className: SH()("Table", zH),
        children: [(0, hH.jsx)("thead", {
          children: (0, hH.jsx)("tr", {
            children: BH.map((HH => (0, hH.jsx)("th", {
              children: HH.header
            }, HH.key)))
          })
        }), (0, hH.jsx)("tbody", {
          children: LH.map((HH => (0, hH.jsx)(AH.Fragment, {
            children: tH(HH)
          }, rH(HH))))
        })]
      })
    }
  },
  37569: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => SH,
      f: () => hH,
      i: () => tH,
      k: () => zH
    });
    var AH = LH(45),
      rH = LH(3465);
    const SH = 8,
      hH = "InGameHeaderContainer",
      tH = "TopRightElements";

    function zH(HH) {
      const [BH] = (0, rH.b)(), [LH, zH] = (0, AH.useState)(!1);
      return (0, AH.useLayoutEffect)((() => {
        if (!HH) return;
        const BH = document.querySelector(`.${hH}`),
          LH = document.querySelector(`.${tH}`),
          AH = () => {
            const AH = HH.getBoundingClientRect(),
              rH = BH ? BH.getBoundingClientRect().right : 0,
              hH = LH ? LH.getBoundingClientRect().left : window.innerWidth,
              tH = AH.left < rH + SH,
              CH = AH.right > hH - SH;
            zH(tH || CH)
          };
        AH();
        const rH = new ResizeObserver(AH);
        return rH.observe(HH), BH && rH.observe(BH), LH && rH.observe(LH), () => {
          rH.disconnect()
        }
      }), [HH, BH]), LH
    }
  },
  37601: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => XH
    });
    var AH = LH(45),
      rH = LH(1038),
      SH = LH.n(rH),
      hH = LH(1706),
      tH = LH(1455),
      zH = LH(1313),
      CH = LH(1315),
      EH = LH(1225);

    function XH(HH) {
      let {
        label: BH,
        icon: LH,
        placeholder: rH,
        onSubmit: XH
      } = HH;
      const GH = (0, AH.useRef)(null),
        [YH, uH] = (0, AH.useState)(""),
        [QH, WH] = (0, AH.useState)("Enter"),
        [MH, xH] = (0, AH.useState)(null);
      (0, AH.useEffect)((() => {
        if ("Success" !== QH && "Error" !== QH) return;
        const HH = setTimeout((() => {
          "Success" === QH && GH.current && (GH.current.value = "", uH("")), WH("Enter")
        }), "Success" === QH ? 1e3 : 4e3);
        return () => {
          clearTimeout(HH)
        }
      }), [QH]);
      const vH = () => {
        const HH = YH.trim();
        "" !== HH && "Enter" === QH && (WH("Loading"), XH(HH).then((HH => {
          GH.current && ("error" in HH ? null === HH.error ? WH("Enter") : (xH(HH.error), WH("Error")) : WH("Success"))
        })))
      };
      return (0, EH.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: HH => {
          HH.target === GH.current && "Escape" !== HH.key && HH.stopPropagation()
        },
        children: [(0, EH.jsxs)("div", {
          className: SH()("AddFriendBodyOverlay", `AddFriendBodyOverlay${QH}`),
          children: ["Loading" === QH && (0, EH.jsx)(zH.d, {}), "Success" === QH && (0, EH.jsx)(CH.c, {
            name: "check"
          }), "Error" === QH && MH]
        }), (0, EH.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, EH.jsx)(hH.e, {
            className: "PlayerSearchInput",
            domRef: GH,
            maxLength: 32,
            placeholderText: rH,
            ariaLabel: rH,
            stopPropagation: !1,
            onValueChange: HH => {
              uH(HH)
            },
            onEnter: vH
          }), (0, EH.jsxs)(tH.i, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== QH || "" === YH.trim(),
            onClick: vH,
            children: [(0, EH.jsx)(CH.c, {
              name: LH
            }), " ", BH]
          })]
        })]
      })
    }
  },
  37593: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => XH
    });
    var AH = LH(45),
      rH = LH(1038),
      SH = LH.n(rH),
      hH = LH(1123),
      tH = LH(1315),
      zH = LH(1225);
    const CH = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      EH = ["unlisted", "public", "whitelist", "private"];

    function XH(HH) {
      let {
        visibility: BH,
        onPick: LH
      } = HH;
      const {
        t: rH
      } = (0, hH.B)(), XH = (0, AH.useRef)([]);
      return (0, zH.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": rH("worldSocial:whoCanJoin"),
        children: EH.map(((HH, AH) => {
          const hH = HH === BH;
          return (0, zH.jsxs)("button", {
            ref: HH => {
              XH.current[AH] = HH
            },
            type: "button",
            className: SH()("WorldSocialTile", {
              WorldSocialTileSelected: hH
            }),
            "aria-pressed": hH,
            tabIndex: hH ? 0 : -1,
            onKeyDown: HH => {
              ((HH, BH) => {
                const LH = "ArrowRight" === HH.key || "ArrowDown" === HH.key ? 1 : "ArrowLeft" === HH.key || "ArrowUp" === HH.key ? -1 : 0;
                var AH;
                0 !== LH && (HH.preventDefault(), null === (AH = XH.current[(BH + LH + EH.length) % EH.length]) || void 0 === AH || AH.focus())
              })(HH, AH)
            },
            onClick: () => {
              LH(HH)
            },
            children: [(0, zH.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, zH.jsx)(tH.c, {
                name: CH[HH]
              })
            }), (0, zH.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, zH.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: rH(`worldSocial:${HH}`)
              }), (0, zH.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: rH(`worldSocial:${HH}Description`)
              })]
            })]
          }, HH)
        }))
      })
    }
  },
  37599: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => tH
    });
    var AH = LH(1123),
      rH = LH(2893),
      SH = LH(4745),
      hH = LH(1225);

    function tH(HH) {
      let {
        IX: BH,
        children: LH,
        ...tH
      } = HH;
      const {
        t: zH
      } = (0, AH.B)();
      return (0, hH.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          BH.onChange(!BH.on)
        },
        children: (0, hH.jsx)(rH.d, {
          ...tH,
          opensProfileCard: !1,
          children: (0, hH.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: HH => {
              HH.stopPropagation()
            },
            children: [LH, (0, hH.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, hH.jsx)(SH.d, {
                checked: BH.on,
                disabled: !1,
                ariaLabel: zH("worldSocial:letJoin", {
                  playerName: tH.playerSocialPreview.name
                }),
                onChange: HH => {
                  BH.onChange(HH.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  37591: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => uH
    });
    var AH = LH(45),
      rH = LH(1123),
      SH = LH(1922),
      hH = LH(81),
      tH = LH(15),
      zH = LH(1475),
      CH = LH(2924),
      EH = LH(34877),
      XH = LH(1455),
      GH = LH(1315),
      YH = LH(1225);

    function uH(HH) {
      let {
        worldCode: BH,
        message: LH
      } = HH;
      const {
        t: uH
      } = (0, rH.B)(), {
        isTouchScreen: QH
      } = (0, tH.m)(["isTouchScreen"]), WH = hH.featureFlags.canUseInviteLinks, MH = (0, EH.i)(WH && null === LH), [xH, vH] = (0, CH.j)(), PH = (0, AH.useRef)(null);
      if (null !== LH) return (0, YH.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, YH.jsx)(GH.c, {
          name: "lock"
        }), (0, YH.jsx)("span", {
          children: LH
        })]
      });
      const TH = WH ? MH : BH,
        UH = QH && WH && (0, CH.b)();
      return (0, YH.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!WH && (0, YH.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: uH("worldSocial:worldCode")
        }), (0, YH.jsx)("input", {
          ref: PH,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== TH && void 0 !== TH ? TH : "",
          "aria-label": uH(WH ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: HH => {
            HH.currentTarget.select()
          }
        }), (0, YH.jsxs)(XH.i, {
          className: "WorldSocialCopy",
          disabled: null === TH,
          onClick: () => {
            null !== TH && (0, CH.f)(TH, {
              useShareSheet: UH,
              onOutcome: HH => {
                if ((0, zH.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== HH || WH ? HH : "code"
                  }), "copied" === HH) vH();
                else if ("failed" === HH) {
                  var BH;
                  null === (BH = PH.current) || void 0 === BH || BH.focus(), SH.h.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, YH.jsx)(GH.c, {
            name: xH ? "check" : UH ? "up-from-bracket" : "copy"
          }), " ", uH(xH ? "general:copied" : UH ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  37597: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => YH,
      g: () => GH,
      k: () => XH
    });
    var AH = LH(602),
      rH = LH(1123),
      SH = LH(1664),
      hH = LH(2893),
      tH = LH(2833),
      zH = LH(1455),
      CH = LH(37599),
      EH = LH(1225);

    function XH(HH, BH) {
      var LH;
      return {
        isError: !1,
        name: HH,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== BH && void 0 !== BH ? BH : {},
        nameColour: null !== (LH = null === BH || void 0 === BH ? void 0 : BH.nameColour) && void 0 !== LH ? LH : AH.c,
        location: {
          status: "offline"
        }
      }
    }

    function GH(HH) {
      let {
        player: BH,
        isFriend: LH = !1,
        status: AH,
        showLocation: zH = void 0 === AH,
        IX: XH,
        onSendFriendRequest: GH,
        actions: YH,
        zIndex: uH
      } = HH;
      const {
        t: QH
      } = (0, rH.B)();
      let WH = AH;
      null !== XH && void 0 !== XH && XH.on && (WH = (0, EH.jsxs)(EH.Fragment, {
        children: [null !== AH && void 0 !== AH ? AH : (0, EH.jsx)(tH.c, {
          socialPreview: BH
        }), (0, EH.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", QH("worldSocial:canJoin")]
        })]
      }));
      const MH = {
        playerSocialPreview: BH,
        isFriend: LH,
        hideFriendBadge: !0,
        onFriendRemoved: LH ? HH => {
          SH.d.removeFriendFromState(HH)
        } : void 0,
        status: WH,
        showLocation: zH,
        onSendFriendRequest: GH,
        zIndex: uH
      };
      return XH ? (0, EH.jsx)(CH.d, {
        ...MH,
        IX: XH,
        children: YH
      }) : (0, EH.jsx)(hH.d, {
        ...MH,
        opensProfileCard: !1,
        children: YH || void 0
      })
    }

    function YH(HH) {
      let {
        row: BH,
        IX: LH,
        canInvite: AH,
        invited: SH,
        onInvite: hH,
        zIndex: tH
      } = HH;
      const {
        t: CH
      } = (0, rH.B)(), XH = "online" === BH.place ? zH.i : zH.m;
      return (0, EH.jsx)(GH, {
        player: BH.friend,
        isFriend: !0,
        status: "here" === BH.place ? CH("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        IX: LH,
        zIndex: tH,
        actions: AH && (0, EH.jsx)(XH, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: SH,
          onClick: hH,
          ariaLabel: `${CH("worldSocial:invite")} ${BH.friend.name}`,
          children: CH(SH ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  37582: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => zH,
      g: () => hH,
      h: () => CH
    });
    var AH = LH(45),
      rH = LH(4991),
      SH = LH(1922);

    function hH(HH) {
      const BH = {
        lobbyName: HH,
        answer: null,
        response: rH.e.getSocialSettings(HH)
      };
      return BH.response.then((HH => {
        BH.answer = HH
      })), BH
    }
    const tH = new Map;

    function zH(HH) {
      tH.set(HH.lobbyName, HH)
    }

    function CH(HH) {
      const [BH] = (0, AH.useState)((() => function(HH) {
        var BH;
        const LH = null !== (BH = tH.get(HH)) && void 0 !== BH ? BH : null;
        return null !== LH && void 0 !== LH && LH.answer && "error" in LH.answer ? null : LH
      }(HH))), [LH, hH] = (0, AH.useState)((() => null !== BH && void 0 !== BH && BH.answer && "settings" in BH.answer ? BH.answer.settings : null)), [zH, CH] = (0, AH.useState)(!0), [EH, XH] = (0, AH.useState)(null !== LH), GH = (0, AH.useRef)(LH);
      GH.current = LH;
      const YH = (0, AH.useRef)(0),
        uH = (0, AH.useRef)(0),
        QH = (0, AH.useRef)(!1),
        WH = (0, AH.useRef)(!0),
        MH = (0, AH.useCallback)((async BH => {
          const LH = ++YH.current,
            AH = await (null !== BH && void 0 !== BH ? BH : rH.e.getSocialSettings(HH));
          WH.current && LH === YH.current && (XH(!0), CH(!1), "error" in AH || hH(AH.settings))
        }), [HH]),
        xH = (0, AH.useCallback)((() => {
          CH(!0), MH()
        }), [MH]),
        vH = (0, AH.useCallback)((() => {
          uH.current > 0 ? QH.current = !0 : MH()
        }), [MH]);
      (0, AH.useEffect)((() => (WH.current = !0, tH.delete(HH), CH(!0), MH(null === BH || void 0 === BH ? void 0 : BH.response), () => {
        WH.current = !1
      })), [MH, HH, BH]);
      const PH = HH => {
        YH.current++, CH(!1), GH.current = HH, hH(HH)
      };
      return {
        settings: LH,
        loading: zH,
        answered: EH,
        retry: xH,
        refresh: vH,
        change: async function(BH, LH) {
          let {
            quiet: AH = !1,
            onAnswer: hH
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const tH = GH.current;
          if (null === tH) return !1;
          PH(LH(tH)), uH.current > 0 && (QH.current = !0), uH.current++;
          const zH = await rH.e.setSocialSettings(HH, BH);
          uH.current--;
          const CH = !("error" in zH);
          if (!WH.current) return CH;
          if (null === hH || void 0 === hH || hH(zH), AH);
          else if ("error" in zH) SH.h.showMessage({
            translationKey: zH.error
          });
          else
            for (const HH of zH.notFound) SH.h.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: HH
              }
            });
          if (uH.current > 0) return CH;
          const EH = QH.current;
          return QH.current = !1, !EH && "settings" in zH ? PH(zH.settings) : (EH || PH(tH), MH()), CH
        }
      }
    }
  },
  37604: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => hH,
      f: () => SH
    });
    var AH = LH(152);
    const rH = new Map;

    function SH(HH, BH) {
      var LH;
      const AH = null !== (LH = rH.get(HH)) && void 0 !== LH ? LH : new Map;
      AH.set(BH, Date.now()), rH.set(HH, AH)
    }

    function hH(HH) {
      const BH = rH.get(HH);
      if (!BH) return [];
      const LH = Date.now();
      for (const [rH, SH] of BH) LH - SH >= AH.o && BH.delete(rH);
      return [...BH.keys()]
    }
  },
  37589: (HH, BH, LH) => {
    function AH(HH, BH) {
      const LH = BH.toLowerCase();
      for (const AH of HH)
        if (AH.toLowerCase() === LH) return !0;
      return !1
    }

    function rH(HH, BH, LH) {
      const rH = [],
        SH = [],
        hH = [];
      for (const tH of HH) !tH.isError && tH.name && ("inGame" === tH.location.status && tH.location.inLobbyName === BH || AH(LH, tH.name) ? SH.push({
        friend: tH,
        place: "here"
      }) : "offline" === tH.location.status ? hH.push({
        friend: tH,
        place: "offline"
      }) : rH.push({
        friend: tH,
        place: "online"
      }));
      return [...rH, ...SH, ...hH]
    }

    function SH(HH, BH, LH) {
      const rH = [],
        SH = HH.flatMap((HH => "here" === HH.place ? [HH.friend.name] : []));
      for (const hH of [...SH, ...BH]) AH(rH, hH) || AH(LH, hH) || rH.push(hH);
      return rH
    }

    function hH(HH, BH) {
      return null === HH || void 0 === HH || !HH.canManage || AH(HH.whitelist, BH) ? "none" : "whitelist" === HH.visibility ? "required" : "quiet"
    }

    function tH(HH) {
      if (null === HH) return !0;
      const {
        visibility: BH
      } = HH;
      return "public" === BH || "unlisted" === BH || "whitelist" === BH && HH.canManage
    }

    function zH(HH, BH, LH) {
      if (LH) {
        const LH = BH.filter((BH => !AH(HH.whitelist, BH)));
        return {
          ...HH,
          whitelist: [...HH.whitelist, ...LH]
        }
      }
      return {
        ...HH,
        whitelist: HH.whitelist.filter((HH => !AH(BH, HH)))
      }
    }

    function CH(HH, BH) {
      const LH = [];
      for (let AH = 0; AH < HH.length; AH += BH) LH.push(HH.slice(AH, AH + BH));
      return LH
    }
    LH.d(BH, {
      d: () => tH,
      g: () => SH,
      k: () => rH,
      l: () => AH,
      o: () => CH,
      p: () => hH,
      q: () => zH
    })
  },
  9444: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => hH,
      d: () => SH
    });
    var AH = LH(2073);
    const rH = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      SH = HH => "string" === typeof HH.icon && "" !== HH.icon && "string" === typeof HH.keycode && rH.test(HH.keycode),
      hH = HH => "Space" === HH ? "_" : AH.i[HH]
  },
  9491: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => rH
    });
    var AH = LH(15);

    function rH() {
      return !AH.c.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  9499: (HH, BH, LH) => {
    LH.d(BH, {
      C: () => EH,
      D: () => GH,
      F: () => YH,
      e: () => SH,
      i: () => tH,
      m: () => CH,
      n: () => zH,
      p: () => hH,
      s: () => rH,
      u: () => AH,
      w: () => uH,
      z: () => XH
    });
    const AH = 14,
      rH = 6,
      SH = (AH + rH) / 2,
      hH = 200,
      tH = hH / 2,
      zH = hH / 2 - 1,
      CH = rH / AH * (hH / 2),
      EH = (HH, BH) => -Math.PI / 2 + 2 * HH * Math.PI / BH,
      XH = (HH, BH, LH) => {
        const AH = 2 * Math.PI / LH;
        return (Math.round((Math.atan2(BH, HH) + Math.PI / 2) / AH) % LH + LH) % LH
      },
      GH = .5,
      YH = (HH, BH, LH) => Math.hypot(HH.x, HH.y) < GH ? LH : XH(HH.x, HH.y, BH),
      uH = (HH, BH, LH, AH, rH) => {
        const SH = Math.PI / BH,
          hH = EH(HH, BH),
          tH = hH - SH,
          zH = hH + SH,
          CH = (HH, BH) => `${LH+HH*Math.cos(BH)} ${LH+HH*Math.sin(BH)}`;
        return [`M ${CH(AH,tH)}`, `L ${CH(rH,tH)}`, `A ${rH} ${rH} 0 0 1 ${CH(rH,zH)}`, `L ${CH(AH,zH)}`, `A ${AH} ${AH} 0 0 0 ${CH(AH,tH)}`, "Z"].join(" ")
      }
  },
  37770: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => SH
    });
    var AH = LH(15),
      rH = LH(1287);

    function SH() {
      const {
        clientEscMenuOptions: HH
      } = (0, AH.m)(["clientEscMenuOptions"]);
      return (0, rH.t)() && HH.showChat
    }
  },
  9528: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => hH
    });
    var AH = LH(45),
      rH = LH(9467),
      SH = LH(2628);

    function hH() {
      const HH = (0, SH.j)("shopInfo"),
        [, BH] = (0, AH.useReducer)((HH => HH + 1), 0);
      return (0, SH.f)("shopInfo", BH), !(0, rH.d)(HH)
    }
  },
  37881: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH
    });
    var AH = LH(45),
      rH = LH(2628);

    function SH() {
      const HH = (0, rH.j)("lobbyLeaderboardInfo");
      return (0, AH.useMemo)((() => function(HH) {
        if (null === HH) return null;
        const BH = Object.entries(HH),
          LH = BH.filter((HH => {
            let [, BH] = HH;
            return void 0 !== BH
          }));
        if (LH.length === BH.length) return HH;
        const AH = Object.fromEntries(LH),
          rH = Object.keys(HH).filter((HH => !Object.hasOwn(AH, HH)));
        return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${rH.join(", ")}`), AH
      }(HH)), [HH])
    }
  },
  37692: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => zH
    });
    var AH = LH(3038),
      rH = LH(4061),
      SH = LH(3209);
    const hH = ["Unable to create vertex buffer"];
    let tH = {};

    function zH(HH, BH) {
      const LH = new Date;
      console.error(`${LH.getUTCHours()}:${LH.getUTCMinutes()}:${LH.getUTCSeconds()}`, HH, BH, null === BH || void 0 === BH ? void 0 : BH.stack), hH.includes(null === BH || void 0 === BH ? void 0 : BH.message) && (console.error("Unrecoverable error occurred. Leaving game."), (0, AH.b)().client.leaveGameUnwanted({
        reason: `Unrecoverable error occurred.\nThis is a bug.\n\nError:\n${BH.message}\n\nPlease refresh the page.`,
        requiresRefresh: !0,
        canReconnect: !1,
        automaticallyReconnect: !1
      })), (0, SH.logError)("warning", `${HH}\n ${BH} "\n" ${null===BH||void 0===BH?void 0:BH.stack}`);
      const rH = HH + BH + (null === BH || void 0 === BH ? void 0 : BH.stack);
      rH in tH || ((0, SH.logError)("error", `${HH}\n ${BH} "\n" ${null===BH||void 0===BH?void 0:BH.stack}`), tH[rH] = !0)
    }(0, rH.onGameReset)((() => {
      tH = {}
    }))
  },
  5319: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => cH,
      d: () => KH
    });
    var AH = LH(5325),
      rH = LH(304);
    const SH = 120,
      hH = 260,
      tH = 1.15,
      zH = 1.2,
      CH = 2,
      EH = 1.08,
      XH = .8,
      GH = .95,
      YH = 8,
      uH = "[\"')\\]\u300d\u300f\uff09]*",
      QH = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${uH}$`),
      WH = new RegExp(`[?\uff1f]${uH}$`),
      MH = new RegExp(`[!\uff01]${uH}$`),
      xH = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      vH = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      PH = new RegExp(`[${vH}]`),
      TH = new RegExp(`[${vH}]|[^${vH}]+`, "g"),
      UH = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function VH(HH) {
      let BH = 2166136261;
      for (let LH = 0; LH < HH.length; LH++) BH ^= HH.charCodeAt(LH), BH = Math.imul(BH, 16777619);
      return (BH >>> 0) / 4294967295 * 2 - 1
    }

    function OH(HH) {
      var BH;
      if (PH.test(HH)) return 1;
      const LH = HH.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        AH = LH.replace(/[^0-9]/g, "");
      if (AH.length > 0 && !/\p{L}/u.test(LH)) return Math.min(AH.length, 4);
      const rH = null !== (BH = LH.match(UH)) && void 0 !== BH ? BH : [];
      if (0 === rH.length) {
        var SH, hH;
        const HH = null !== (SH = null === (hH = LH.match(/\p{L}/gu)) || void 0 === hH ? void 0 : hH.length) && void 0 !== SH ? SH : 0;
        return 0 === HH ? 0 : Math.min(Math.max(1, Math.round(HH / 2.5)), YH)
      }
      const tH = LH.replace(/[^\p{L}]/gu, ""),
        zH = rH.length > 1 && "e" === rH.at(-1) && tH.endsWith("e") && !tH.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(HH.replace(/[^\p{L}]/gu, ""));
      return Math.min(rH.length - (zH ? 1 : 0), YH)
    }

    function bH(HH) {
      return HH.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function kH(HH) {
      const BH = HH.replace(/[^\p{L}]/gu, "");
      return BH.length >= 2 && BH === BH.toUpperCase() && BH !== BH.toLowerCase()
    }

    function mH(HH, BH) {
      var LH;
      const YH = BH && (0, AH.k)(BH),
        uH = null !== (LH = null === YH || void 0 === YH ? void 0 : YH.syllableMs) && void 0 !== LH ? LH : AH.e,
        vH = function(HH) {
          const BH = [];
          for (const AH of (0, rH.tc)(HH))
            if ("string" === typeof AH)
              for (const HH of AH.split(/(\s+)/)) {
                if ("" === HH) continue;
                if (/^\s+$/.test(HH)) {
                  BH.push({
                    kind: "space",
                    text: HH
                  });
                  continue
                }
                if (!PH.test(HH)) {
                  BH.push({
                    kind: "word",
                    text: HH,
                    delayMs: 0
                  });
                  continue
                }
                let AH = !0;
                for (const rH of null !== (LH = HH.match(TH)) && void 0 !== LH ? LH : []) {
                  var LH;
                  const HH = BH.at(-1);
                  AH || "word" !== (null === HH || void 0 === HH ? void 0 : HH.kind) || PH.test(rH) || /[\p{L}\p{N}]/u.test(rH) ? (AH || BH.push({
                    kind: "space",
                    text: "\u200b"
                  }), BH.push({
                    kind: "word",
                    text: rH,
                    delayMs: 0
                  }), AH = !1) : HH.text += rH
                }
              } else BH.push({
                kind: "icon",
                text: AH.icon,
                delayMs: 0
              });
          return BH
        }(HH),
        UH = [];
      let mH = [];
      for (const AH of vH) "space" !== AH.kind && (mH.push(AH), QH.test(AH.text) && (UH.push(mH), mH = []));
      UH.push(mH);
      const oH = [];
      let IH = 0;
      for (const AH of UH) {
        var fH, lH;
        const HH = null !== (fH = null === (lH = AH.at(-1)) || void 0 === lH ? void 0 : lH.text) && void 0 !== fH ? fH : "",
          BH = WH.test(HH),
          LH = MH.test(HH),
          rH = AH.map((HH => "word" === HH.kind ? OH(HH.text) : 1)),
          vH = rH.findLastIndex((HH => HH > 0));
        for (const [WH, MH] of AH.entries()) {
          const HH = "word" === MH.kind,
            AH = rH[WH];
          MH.delayMs = IH;
          for (let rH = 0; YH && rH < AH; rH++) {
            const {
              intonation: SH
            } = YH;
            let hH = vH > 0 ? -SH.declineSemitones * (WH / vH) : 0;
            hH += VH(`${bH(MH.text)}|${rH}`) * SH.variationSemitones;
            const QH = Math.min(1, SH.variationSemitones);
            let xH = YH.glideSemitones,
              PH = 1;
            LH && (hH += SH.exclaimLiftSemitones, PH *= tH), BH && WH === vH && (hH += SH.questionRiseSemitones * (AH > 1 ? .5 + .5 * rH / (AH - 1) : 1), rH === AH - 1 && (xH = Math.abs(xH) + SH.questionRiseSemitones / 2)), HH && kH(MH.text) && (hH += CH * QH, PH *= zH), AH > 1 && 0 === rH && (hH += XH * QH, PH *= EH), oH.push({
              atMs: IH + rH * uH,
              semitones: hH,
              glideSemitones: xH,
              durationMs: rH < AH - 1 ? Math.min(YH.durationMs, uH * GH) : YH.durationMs,
              level: PH
            })
          }
          IH += AH * uH + (QH.test(MH.text) ? hH : xH.test(MH.text) ? SH : 0)
        }
      }
      return {
        pieces: vH.map((HH => "space" === HH.kind ? HH : "icon" === HH.kind ? {
          kind: "icon",
          icon: HH.text,
          delayMs: HH.delayMs
        } : {
          kind: "word",
          text: HH.text,
          delayMs: HH.delayMs
        })),
        blips: oH
      }
    }
    var oH = LH(1123),
      IH = LH(1194),
      fH = LH(2003);

    function lH(HH) {
      if ("string" === typeof HH) return HH;
      const BH = IH.g.get().getCurrentLanguageCode();
      return (0, oH.r)(BH, HH.translationKey, (0, oH.q)(HH.params, fH.c.shown))
    }

    function KH(HH) {
      const BH = void 0 === HH.voice ? null : (0, AH.l)(HH.voice),
        LH = BH && (0, AH.k)(BH);
      return {
        plan: mH(lH(HH.line), LH),
        synth: LH
      }
    }

    function cH(HH) {
      const BH = [];
      let LH = [];
      for (const [rH, SH] of HH.entries()) {
        var AH;
        "space" === SH.kind && (" " !== SH.text || "icon" !== (null === (AH = HH[rH + 1]) || void 0 === AH ? void 0 : AH.kind)) ? (LH.length > 0 && BH.push(LH), BH.push([SH]), LH = []) : LH.push(SH)
      }
      return LH.length > 0 && BH.push(LH), BH
    }
  },
  37565: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => rH
    });
    const AH = [{
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

    function rH(HH, BH, LH) {
      const rH = Math.abs(HH - BH),
        SH = Date.now() - LH;
      for (const hH of AH)
        if (HH < hH.maxDist) return rH >= hH.hardUpdateDist || SH > hH.timeBetweenSoftChecks && rH >= hH.softUpdateDist;
      return !1
    }
  },
  37853: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => XH,
      g: () => GH
    });
    var AH = LH(619),
      rH = LH(30),
      SH = LH(37809);
    const hH = "replayFileKeptForReload",
      tH = "replayFileKeptForReloadAt",
      zH = "replayFileKeptForReloadTab",
      CH = 3e5,
      EH = 5e3;
    async function XH(HH, BH) {
      const LH = Date.now(),
        SH = {
          at: LH,
          bytes: HH,
          source: BH
        },
        CH = await Promise.race([(async () => await rH.c.setItem(tH, LH) && rH.c.setItem(hH, SH))(), (0, AH.Q)(EH).then((() => !1))]);
      CH || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const XH = {
        at: LH,
        hX: CH
      };
      rH.f.setItem(zH, XH)
    }
    async function GH() {
      var HH;
      const BH = rH.f.getItem(zH);
      null !== BH && rH.f.removeItem(zH);
      const LH = Date.now(),
        AH = await rH.c.getItem(tH),
        EH = null !== BH && LH - BH.at <= CH,
        XH = null !== BH && AH === BH.at;
      let GH = null;
      if (null !== AH && (XH || ("number" !== typeof AH || LH - AH > CH)) && (GH = EH && XH && BH.hX ? await rH.c.getItem(hH) : null, await Promise.all([rH.c.removeItem(tH), rH.c.removeItem(hH)])), !EH) return null;
      if ((null === (HH = GH) || void 0 === HH ? void 0 : HH.at) !== BH.at) throw new Error(SH.e.replayNotKept.text);
      return {
        bytes: GH.bytes,
        source: GH.source
      }
    }
  },
  37844: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => AH,
      i: () => SH,
      m: () => rH
    });
    const AH = [9];

    function rH(HH) {
      return AH.includes(HH)
    }

    function SH(HH) {
      return null !== HH && HH >= 3 && HH < AH[0]
    }
  },
  37812: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => hH,
      d: () => SH,
      g: () => rH
    });
    const AH = [.25, .5, 1, 2, 4, 8, 16];

    function rH(HH, BH) {
      const LH = AH;
      let rH = LH.indexOf(HH);
      return -1 === rH && (rH = LH.findIndex((BH => BH >= HH)), -1 === rH && (rH = LH.length - 1)), "up" === BH ? LH[Math.min(rH + 1, LH.length - 1)] : LH[Math.max(rH - 1, 0)]
    }

    function SH(HH) {
      return HH <= AH[0]
    }

    function hH(HH) {
      return HH >= AH[AH.length - 1]
    }
  },
  37864: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH,
      f: () => rH
    });
    const AH = "data-replay-ui-active",
      rH = [{
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
  37869: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => CH,
      f: () => XH,
      i: () => EH
    });
    var AH = LH(15),
      rH = LH(18),
      SH = LH(37864);

    function hH() {
      const HH = {};
      for (const {
          group: BH
        }
        of SH.f) HH[BH] = !0;
      return HH
    }
    let tH = hH();

    function zH() {
      rH.k.AX("replayViewer|uiVisibilityChanged")
    }

    function CH() {
      return tH
    }

    function EH(HH, BH) {
      tH[HH] !== BH && (tH = {
        ...tH,
        [HH]: BH
      }, "nametag" === HH && AH.c.set({
        areNametagsHidden: !BH
      }), zH())
    }

    function XH() {
      tH = hH(), AH.c.set({
        areNametagsHidden: !1
      }), zH()
    }
  },
  9442: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => SH,
      e: () => hH,
      h: () => tH,
      k: () => rH
    });
    var AH = LH(9444);
    const rH = HH => {
        const BH = [];
        HH.holdingGun && BH.push({
          kind: "reload"
        }), HH.touchscreenActionButton && BH.push({
          kind: "touchButton",
          label: HH.touchscreenActionButton
        });
        for (const SH of null !== (LH = null === (rH = HH.customButtons) || void 0 === rH ? void 0 : rH.filter(AH.d)) && void 0 !== LH ? LH : []) {
          var LH, rH;
          BH.push({
            kind: "customButton",
            id: SH.id,
            icon: SH.icon,
            description: SH.description
          })
        }
        return BH
      },
      SH = HH => HH.length >= 2,
      hH = HH => "specialAction" !== HH.kind,
      tH = (HH, BH) => {
        if (null === HH || null === BH) return HH === BH;
        if (HH.kind !== BH.kind) return !1;
        switch (HH.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return HH.action === BH.action;
          case "customButton":
            return HH.id === BH.id && HH.icon === BH.icon;
          case "touchButton":
            return HH.label === BH.label
        }
      }
  },
  9433: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => EH,
      i: () => YH,
      m: () => XH,
      q: () => uH
    });
    var AH = LH(45),
      rH = LH(18),
      SH = LH(1450),
      hH = LH(9442),
      tH = LH(9450);
    let zH = null;
    const CH = () => zH,
      EH = HH => {
        (0, hH.h)(zH, HH) || (zH = HH, rH.k.AX(tH.d, zH))
      },
      XH = () => {
        const [HH, BH] = (0, AH.useState)(CH);
        return (0, SH.d)(tH.d, BH), HH
      };
    let GH = !1;
    const YH = HH => {
        HH !== GH && (GH = HH, rH.k.AX(tH.e, HH))
      },
      uH = () => {
        const [HH, BH] = (0, AH.useState)(GH);
        return (0, SH.d)(tH.e, BH), HH
      }
  },
  9450: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH,
      d: () => AH,
      e: () => rH,
      i: () => tH,
      j: () => zH,
      n: () => CH,
      o: () => hH
    });
    const AH = "controllerActionHintChanged",
      rH = "controllerActionWheelHintChanged",
      SH = "controllerOpenChat",
      hH = "controllerSneakToggledChanged",
      tH = "controllerAttackLatchedChanged",
      zH = "controllerDropStackHoldChanged",
      CH = "controllerPickBlockHintChanged"
  },
  9377: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => hH,
      g: () => SH,
      i: () => zH,
      m: () => tH
    });
    var AH = LH(1450),
      rH = LH(1405);
    const SH = "controllerInventoryCursorChanged",
      hH = {
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
      tH = () => {
        var HH, BH;
        return (0, AH.e)(SH, null !== (HH = null === (BH = (0, rH.c)()) || void 0 === BH ? void 0 : BH.getInventoryCursorState()) && void 0 !== HH ? HH : hH)
      },
      zH = () => {
        var HH, BH;
        return null !== (HH = null === (BH = (0, rH.c)()) || void 0 === BH ? void 0 : BH.isPadSteppingSlots()) && void 0 !== HH && HH
      }
  },
  9370: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => GH,
      f: () => tH,
      h: () => zH,
      i: () => hH,
      m: () => SH,
      n: () => EH,
      q: () => XH
    });
    let AH = null;
    const rH = new Set,
      SH = HH => (AH = HH, () => {
        if (AH === HH) {
          AH = null;
          for (const HH of rH) HH()
        }
      }),
      hH = HH => (rH.add(HH), () => {
        rH.delete(HH)
      }),
      tH = () => AH,
      zH = () => null !== AH;
    let CH = null;
    const EH = HH => {
        CH = HH
      },
      XH = () => {
        const HH = CH;
        return CH = null, HH
      },
      GH = (HH, BH) => {
        var LH, AH;
        return null !== (LH = null !== (AH = HH.find((HH => HH.element === BH))) && void 0 !== AH ? AH : HH.find((HH => HH.element.contains(BH)))) && void 0 !== LH ? LH : null
      }
  },
  9385: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => SH,
      f: () => hH
    });
    var AH = LH(45);
    const rH = new WeakMap,
      SH = HH => {
        var BH, LH;
        return null !== (BH = null === (LH = rH.get(HH)) || void 0 === LH ? void 0 : LH.current) && void 0 !== BH ? BH : null
      },
      hH = (HH, BH) => {
        const LH = (0, AH.useRef)(BH);
        LH.current = BH;
        const SH = (0, AH.useRef)(null);
        (0, AH.useEffect)((() => {
          const BH = HH.current,
            AH = SH.current;
          BH !== AH && (AH && rH.get(AH) === LH && rH.delete(AH), SH.current = BH, BH && rH.set(BH, LH))
        })), (0, AH.useEffect)((() => () => {
          const HH = SH.current;
          HH && rH.get(HH) === LH && rH.delete(HH), SH.current = null
        }), [])
      }
  },
  9520: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => tH,
      f: () => CH,
      g: () => XH,
      h: () => EH,
      j: () => zH,
      m: () => YH
    });
    var AH = LH(18),
      rH = LH(2085),
      SH = LH(1405),
      hH = LH(1390);
    const tH = HH => {
        var BH, LH;
        return (0, hH.m)() && null !== (BH = null === (LH = (0, SH.c)()) || void 0 === LH ? void 0 : LH.getGlyphForNoaAction(HH)) && void 0 !== BH ? BH : null
      },
      zH = "controllerGlyph:",
      CH = HH => {
        var BH, LH;
        return null !== (BH = null === (LH = (0, SH.c)()) || void 0 === LH ? void 0 : LH.getPadGlyphIconName(HH)) && void 0 !== BH ? BH : `${zH}xbox/${HH}`
      },
      EH = HH => HH.startsWith(zH),
      XH = HH => {
        var BH, LH;
        return EH(HH) && null !== (BH = null === (LH = (0, SH.c)()) || void 0 === LH ? void 0 : LH.getPadGlyphIconUrl(HH)) && void 0 !== BH ? BH : null
      },
      GH = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", hH.e, rH.d, rH.c],
      YH = HH => {
        const BH = GH.map((BH => AH.k.subscribe(BH, HH)));
        return () => {
          for (const HH of BH) AH.k.unsubscribe(HH)
        }
      }
  },
  9509: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => rH,
      f: () => hH,
      i: () => SH,
      l: () => AH,
      p: () => tH,
      r: () => CH,
      t: () => EH
    });
    const AH = "controllerActionWheelOpen",
      rH = "controllerActionWheelAim",
      SH = "controllerActionWheelCommit",
      hH = "controllerActionWheelClose",
      tH = "controllerActionWheelPick";
    let zH = !1;
    const CH = () => zH,
      EH = HH => {
        zH = HH
      }
  },
  9505: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH,
      f: () => rH
    });
    let AH = 0;
    const rH = () => {
        AH++
      },
      SH = () => AH
  },
  9407: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => zH,
      i: () => rH,
      k: () => hH,
      o: () => SH,
      p: () => AH,
      q: () => CH
    });
    const AH = "controllerQuickChatWheelOpen",
      rH = "controllerQuickChatWheelAim",
      SH = "controllerQuickChatWheelCommit",
      hH = "controllerQuickChatWheelClose";
    let tH = !1;
    const zH = () => tH,
      CH = HH => {
        tH = HH
      }
  },
  37685: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => rH,
      f: () => SH
    });
    const AH = new Map;

    function rH(HH) {
      var BH;
      return null === HH ? null : null !== (BH = AH.get(HH)) && void 0 !== BH ? BH : null
    }

    function SH(HH, BH) {
      return AH.set(HH, BH), () => {
        AH.get(HH) === BH && AH.delete(HH)
      }
    }
  },
  37835: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => yB,
      c: () => pB
    });
    var AH = LH(4617),
      rH = LH(619),
      SH = LH(4099),
      hH = LH(4121),
      tH = LH.n(hH);
    const zH = new Set(["nameTagInfo", "multilineTextBox", "animationScript", "content", "skyBox", "opts", "fromBlockData", "toBlockData", "sharedBlockData"]),
      CH = "EV_boolean",
      EH = "EV_double",
      XH = "EV_string",
      GH = "EV_doubleArr",
      YH = "EV_armour",
      uH = "EV_other",
      QH = "EV_cosmetics",
      WH = "OEV_boolean",
      MH = "OEV_int",
      xH = "OEV_double",
      vH = "OEV_string",
      PH = "OEV_stringArr",
      TH = "OEV_meshScaling",
      UH = "IV_int",
      VH = "IV_string",
      OH = "IV_doubleArr",
      bH = "IV_double",
      kH = "HV_int",
      mH = "HV_slots",
      oH = "EnvV_string",
      IH = "EnvV_double",
      fH = "EnvV_doubleArr",
      lH = "EnvV_boolean",
      KH = {
        type: XH,
        name: XH,
        position: GH,
        rotation: GH,
        scale: EH,
        speed: EH,
        jumping: CH,
        crouching: CH,
        cameraPitch: EH,
        armSwinging: CH,
        heldItemName: XH,
        heldItemEnchantmentTier: XH,
        pose: XH,
        followingEId: XH,
        ridingVehicleEId: XH,
        leaderboardTop: XH,
        meshKind: XH,
        meshOpts: XH,
        followingOffset: GH,
        shouldMatchFollowingEntityRotation: CH,
        meshOffset: GH,
        baseRenderHeading: EH,
        armour: YH,
        mF: uH,
        playerCustomisations: QH,
        variation: XH,
        metaInfo: XH,
        soundName: XH,
        volume: EH,
        refDistance: EH,
        maxHearDist: EH,
        rate: EH,
        aiState: XH
      },
      cH = {
        opacity: xH,
        zIndex: MH,
        overlayColour: vH,
        canSee: WH,
        meshScaling: TH,
        nameTagInfo: vH,
        multilineTextBox: vH,
        hasPriorityNametag: WH,
        ranks: PH,
        nameColour: vH,
        _isAlive: WH,
        _invisibleEffect: WH,
        _invincible: WH,
        killfeedColour: vH,
        hideNameSeed: MH,
        _glowingEffect: WH,
        lockHeadToBody: WH
      },
      eH = {
        itemName: VH,
        amount: UH,
        position: OH,
        size: bH,
        attributes: VH
      },
      qH = {
        skyBox: oH,
        fogColourOverride: oH,
        fogChunkDistanceOverride: IH,
        cameraTint: fH,
        fogOnSkybox: lH,
        fogBlockDistanceOverride: IH
      },
      gH = {
        type: "array",
        items: "double"
      },
      NH = {
        type: "array",
        items: "int"
      },
      RH = {
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
      jH = {
        type: "map",
        values: gH
      };

    function nH(HH, BH) {
      return {
        type: "record",
        name: HH,
        fields: [{
          name: "x",
          type: BH
        }]
      }
    }
    const FH = {
        type: "array",
        items: {
          type: "record",
          name: "OtherEntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", nH(WH, "boolean"), nH(MH, "int"), nH(xH, "double"), nH(vH, "string"), nH(PH, {
              type: "array",
              items: "string"
            }), nH(TH, jH)]
          }]
        }
      },
      DH = {
        type: "array",
        items: {
          type: "record",
          name: "EntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", nH(CH, "boolean"), nH(EH, "double"), nH(XH, "string"), nH(GH, gH), nH(YH, RH), nH(uH, FH), nH(QH, {
              type: "map",
              values: "string"
            })]
          }]
        }
      },
      wH = {
        type: "array",
        items: {
          type: "record",
          name: "ItemDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", nH(UH, "int"), nH(VH, "string"), nH(bH, "double"), nH(OH, gH)]
          }]
        }
      },
      ZH = {
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
      dH = {
        type: "record",
        name: "HotbarDeltaEntry",
        fields: [{
          name: "i",
          type: "int"
        }, {
          name: "v",
          type: ["null", nH(kH, "int"), nH(mH, ZH)]
        }]
      },
      aH = {
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
      sH = {
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
      JH = {
        type: "array",
        items: {
          type: "record",
          name: "EnvironmentDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", nH(oH, "string"), nH(IH, "double"), nH(fH, gH), nH(lH, "boolean")]
          }]
        }
      },
      iH = [{
        name: "oq",
        type: "record",
        fields: [{
          name: "pos",
          type: NH
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
          type: NH
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
      pH = [{
        name: "playSound",
        type: "record",
        fields: [{
          name: "HH",
          type: "string"
        }, {
          name: "volume",
          type: "double"
        }, {
          name: "rate",
          type: "double"
        }, {
          name: "rH",
          type: ["null", {
            type: "record",
            name: "SoundPosSettings",
            fields: [{
              name: "SH",
              type: ["null", "string", gH],
              default: null
            }, {
              name: "hH",
              type: ["null", "double"],
              default: null
            }, {
              name: "tH",
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
          name: "vB",
          type: "string"
        }, {
          name: "PB",
          type: "int"
        }, {
          name: "animationScript",
          type: ["null", "string"]
        }, {
          name: "TB",
          type: "double"
        }, {
          name: "UB",
          type: "double"
        }]
      }, {
        name: "bullet",
        type: "record",
        fields: [{
          name: "DS",
          type: "string"
        }, {
          name: "bulletDirections",
          type: {
            type: "array",
            items: gH
          }
        }]
      }, {
        name: "lifeformHealth",
        type: "record",
        fields: [{
          name: "fH",
          type: "string"
        }, {
          name: "VH",
          type: ["null", "double"],
          default: null
        }, {
          name: "OH",
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
          name: "dr",
          type: "double"
        }, {
          name: "angle",
          type: "double"
        }, {
          name: "ar",
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
      yH = [{
        name: "position",
        type: gH
      }, {
        name: "direction",
        type: gH
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

    function HB() {
      const HH = [{
        name: "entities",
        type: {
          type: "map",
          values: DH
        }
      }, {
        name: "items",
        type: {
          type: "map",
          values: wH
        }
      }, {
        name: "camera",
        type: {
          type: "record",
          name: "ReplayCameraState",
          fields: yH
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
              items: dH
            }
          }]
        }],
        default: null
      }, {
        name: "playerHud",
        type: ["null", aH],
        default: null
      }];
      return HH.push({
        name: "effects",
        type: ["null", {
          type: "array",
          items: {
            type: "record",
            name: "ReplayActiveEffect",
            fields: [{
              name: "fH",
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
      }), HH.push({
        name: "uiElements",
        type: sH
      }, {
        name: "environment",
        type: JH
      }, {
        name: "structuralEvents",
        type: {
          type: "array",
          items: iH
        }
      }, {
        name: "ephemeralEvents",
        type: {
          type: "array",
          items: pH
        }
      }), HH
    }
    const BB = {
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
                name: "IX",
                type: "int"
              }, {
                name: "position",
                type: gH
              }, {
                name: "direction",
                type: gH
              }, {
                name: "easing",
                type: gH
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
    let LB;

    function AB(HH) {
      if (9 === HH) return LB ??= (BH = [{
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
            name: "oN",
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
              type: NH
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
            fields: HB()
          }
        }
      }, BB], tH().Type.forSchema({
        type: "record",
        name: "RecordingState",
        fields: BH
      }, {
        YX: Object.create(null)
      })), LB;
      var BH
    }
    var rB = LH(3112);
    let SB, hB, tB, zB;
    const CB = 12;
    var EB, XB;
    const GB = [0, 1, 8, 255, "length", "undefined", 63, 6, "fromCodePoint", 7, 12, "push", void 0, !1, !0, 91, 8191, 88, 13, 14, 2, 3, 16, 124, 4, 125, 126, 15, 121, 127, 128, 10, 5, 11, 9, 512, 1023, 31, 18, 32, 24, 19, 64, 65535];

    function YB(HH) {
      return typeof AL !== GB[5] && AL ? (new AL).decode(new rL(HH)) : typeof SL !== GB[5] && SL ? SL.from(HH).toString("utf-8") : zL(HH)
    }

    function uB() {}

    function QB() {
      QB = function() {}
    }
    var WB, MB;
    QB(EB = {}, XB = ["Rqm)VTizp+8K^$?,?)#e`Lst3_20~9=;lEyrk:Q", "*rgz`D]M[Ga|w=4;Q+norK??VG(", "D_p+E#a0{Ysi&68_nI~kZTg{fm,Vcin~~]HW`P(Z", "3rb]9jlKq_+(3=!0E=Iz*H#Vy#]LJcZ!uoJ9%n~!Qmv?D,}3kSdVQ,V}=", 'op1km]|zZm"e"At>Y0B9KmC{*gLiQ', "d3a+eI..E", "KEJrjr1x01z", "`]B9{PfFuS^{M,41", "Op|VP$91=", "l5i=VKTLE", "o+c)F.H%$gu0r^^4+n=:(", ":>%^a<rGct~6F!s!vnRo_zY?Sl?z}=q(iw>@WKK]mp?:Z;H%*x", "`+vEM$FM;GucU=@C0n|zTz%Z", "8F)Va8sT~m^Sy&4~tl_H{LXZ.q;$YA.%/pn:mm+?fv#L(2*CEmg=Lzl&7M", '"]l8^JL.LmY3x', ".I5k0+]CYl=Gl<O)+w,rB:PKg#P(,oE;Z^Ke$iC1{+RdJo``55Cv7W8F=", "Ow2E(R$Gnv,skc", "Q+;W^]}R_gBll<u1!r#*x4GZx+5z6>m/%nue", "uo&zKKWGxv9Z5Z", 'hp,:uTo}oM[BC&0?TSnrcjUKk"Rde<7}v=cd;%2!"YI7x', "i/OD~`v3V", "7]^ki0bz*tv6AZM6@rJ<!%2G|1B@x", '_]RW5{nr0mp3OSv>(>):5+%GBqWmB>/3"@VzMK{&dqFzfGG)9oLE,%it!_', "Xo*DL,%~sv%c$&9!=vC(,{4FCYNf%&#}k+O^?", "0En#4gg]6_}{,oE", "BEQ8g00t~mD@x", 'vtg(VUJ0j~OU]bo*_F"*Yjz~/I+', "u=TV}+#)RG<KP3439oA)2FkE7GhU:iz6UwW){%InWX)jL$^%z%`=)RX~x+EGx", "Z^I(5{*K*7(K$$n`apK(vT~[[G(G/39!~.H^HW.L_v_jQc", 'ic;e:08{b1$u&Z]0LIv@`XN!yI1;y6[`M^N#i$1{6I@W3$_4y"i(MAq{AYmdQ', "U3&(OFrT&7unmc.%M=Z", 'csK>_Ff)Ll8KQ4,!5F*+9U".pgv+kAO0YcI*AoPx', "jEy)<XxM`M^S,A_67.G){H}{;1n@^$j4(;C(]4Dx", "X]j=U`&}5[dgx", "vgIvIG1#i1|j|UQ,bQ", "kur@2FCK=+pLTit1r;_B9kH~%Mh)r3B4*n_k<dC}/qV](qK3NQ", 'mvpE(+1{qXeB=AB`aqq)_`NI+YZ]$qI?!+7e"KRK5_g35`V*kS^]+i%!E', ":qV8xTZLduIqr^O)2FgE`L51wSj._,<0$EHz!Ak.=Fk.Qo9!DXH=U8cU]1w", "n+Rr5{5g=", "s(W<vT8B5u2p#=V`==9<%+&MeqXz(cn`*mQHmj:)Y~;0qbp*", "x^V?:jMVsvl?0^b(h_RV?zY~Q7sL0M0,.Eqds$wVuS%LQ", '8+j+>Fo]!p=b09~"Fw#VV0b.$tZk)2l>Po.*PGH~c', 'D]o+)zr?a"|EYl6{+C|({R!ZkM', 'f]s#i$]}B".!6Z4;!r%DA<GG0FRd<`]}#n#Wj:Q', "V=;*X]pFyXjfCqk`RQ", "Q~:v+;93FS", '.Fj+6&0zn+.Szl{3^"CvM', '|"1)mGR}FGV"YlQ).pueQ4~z{mIz(&@~0cc', "qSi(aqP{A+bmK=o~=lp]@LD)FIhYSUQ?PSZ]UIy~RMev6<G)v%A9ErQ", '>;8+y+i!|M]Wy=_6"C6d4nqMm#AdR=*,', "rEcdiK1MBptj0`Z,[F9:SW+T[GG@F!e*=t+VbWDMqXy=1>E5|mhE%g,?dXz~x", "Xo3@OR?zI#)z&``3Q%A)iI|YNS,(&Gv*GSS*QryzL#q", '8t>kXJBF5_;eq`9!&o"*vI(z.~7K@c<6[=;rcjE?jl9]oGY~dQ', "4+q[V0oMup5s1Z#0>)c", '7"T*`Pm~.g,kBi=!Sl)*t:C#(qDfAq"(', "1~zdeF0ZbvMG}=V;1g6kckwRmXfuOZ", "45}].Gt[fvK=D$h)]Q", "U$x+hAZ!2mQH.;r`zv28?D?teIfLQ", ".5jW+bF{&ma1*bE~X>2EM", 'Hpy*QJ[zc1E&&ZQ~ZmjvGmrt"+{', "UXW*m0..vG5ct4FC|Fbd2z.~(S,", "9FF+UKmnvpj#|UT(D/n#U8UxsgCW(6:}#%fdlAIZB[", 'biJ<]g:g[GAri3"6V.v@~AP}=Fii<PP)O_=<tIB]~v6eQox,z0Q?7', 'T0&=?Rq&u"ubd!y1+wVv&gI.3Gy_6SQ?KwPeL`Z,hG?Ww;4~^+n9', "JD=e*+bt*ty!:bt", '3Ch])L2z&m6:lb(,Zg5)/+6}Ve?InA{3W"A@E$R}N"?*U!M', "%p4z5^zrYtnqx2S4Xc86HIL.;G:*oiv*#$_?vFyGx~XDH`Z~DI6e", "Z^e6`D1x", ";]$]<n~LB_b[GUx,LEDEs.YG=", "X+&E^i;M9", "Ww.WloV#yuf3s;*_nIaEOWf{WS;K(&B`7nmV", ".;ze~K)1z1^D8MT6s(g(6A1}]1<qcb;3auC(:jaT%G@6Qll>PIx6n.Q", "OI[v[I#RJY):TKZ;5CS:`^^}5q{e_2q{^o|=eFV}nMeex2#{#C0@[To)/pC]x", "GStdpU1&]t@W0^d6vF8]gGG~jm)jQ", "c@%+NA*{L~y!J&:}", "<c5d0qf{+1Y{OSc3kQ", "Q+g^C<dVV", "7.?^BA^1jlC_I^+}aQ", "&*W9q#y~cF*!7,S>s+|*)", "R4,d[$wRb+unj{Y?{$Z@cU7KE", "|o%^~A(?bmqq%cS", '%"7eXmDM%Ggit6;;.%@??zE.[GYLo6(}^oR<M', 'p$.WdWx1IXW#K$a(q+m)n#r~U~FWlc10zwC(G04{f1bf_m.>Bn7eskarN"hmx', "Du4(2,VM@t%eE;l>nnLE", "d_i=uUstDI1eC>+}ErjvpmOjR1", "<wm#Ij;MOM$z1Z`;mCJd3F`!U+~jjlV", '|"/@CFI.@g4jfle4wo4^OFL0P~ogsMT(J4gzW<*}wX^Ii^t>/I*^n:/Z', 'O4vHDI,L"+`D$A$>V)c@fIw1~vVc!6p*X++(u`&MjtGq*Z>}KD=dK#8U=', "Kn#=5L{MHuzW9J6/Xv~Bvm)B$sa[(qB>StMVv,g]rq|]Yl@,~+8k|FQ", "W*kEc.p]qpRd(oS", "Q%<@LA[Y,+#=R$mC.*Ad=jH!&7$VW6s,yEN@NzaTKM}W~b%1PoZ", ':$zdm#gCQ7epA>R6&t}E9KwV"FG=$6N2a/%EF].~*7c+@qYCdE?*,+.Z', "&%e@E:7V9", "yC<6ure[,v0KAo8;hDv?tIF}AFVB$qi!Dq5eORe~j#X(B>$03>T*>", "(m;Wt$Xzlt]Ktk4`GqZ", "Mn)=A<%Gu_8WsKB>nw@E2owM(7zW5cS", "v5YEZk&}AtE+*<p,kp<k];U}MqvB`i7}A]S8v,qCyI@jQky1yE,d6", "P+?^fjOVlshYDm]}Xc_E", 'VnCv2o#&m#Y@B`f_eo^E?P"GXM}$9$:{kq3].i+.GIz(>9', "f]r]?HG~/IWr+Sx*pI$+0HQ", "b$>dw;5BcF.*?^}1,FgWn,8Ve_", ">lCW%gN.w~^Waln;uF<]SUSG,+Z6WoZ;>),)p#XZ", "&5>BbFZ~Nq>:ko0,#>J<]dP}$~Nr!q0~1x", "vt8B>Fs.n+=C=6:),;W#aFc}V", ";ttr3H_&FGup!6=`VgTV>Wn.bF`SrKF{U]G]IkJrEYxPp=k*mpD@X]dx", '/p4(vj5MWXmz>UI)b]<]XiYrwuYq<Mr3`_G]fjAjy[M;?;FCh"ckyXhx', "I+5@B$(Z", "Js:{[{5L", "g$hSpQrq$zxmNL66@b/Hhh,ErW(_I82", "5j?Kp08||H.", "<@Ws5JRm", "kw9IxIvm", "<@mIoPKm", "TDsPTp!L", "y*%(247L", ",I}N(", "4(g+vQoL", '}2d(>"^L', "]Wj)N0&u", "<<FU#", "MF:.MmaA", 'e+NnD@"A', "c@~;OS`A", "4npYq", "mXPl", "yX~;RM}A", "Znci", "8XkH!56A", ",J9,tyn}", "am[|", "<KlSW)+3", "z&0I@DiB", "|fpX", "/W;G3jMJ61q", "4,&78asnr9L", "$HBKwZEjqYH", '"clI8$uPNB;', "lHW&r^:0F96", "$7fB&$nX?Sc", "lHeBJkY0k9H", "Ya7d~soB", '"{M";A0B', "/R`o)", "^>(*W:,;", "Y%eYUVt~", "#d(JQ", "}l7QMPGwM26j`Pr#", "Q[V`/29C,xW?+xO}", "^l*8Yi2sX^hhf![k", "Z[(?v%{ThqSI!rl[", "?PGi&eGg&5v%U%Q", "Rjsc", "#miy.xj}"]), QB(LL = function() {
        var HH, BH, LH, AH = [function() {
          return globalThis
        }, function() {
          return global
        }, function() {
          return window
        }, function() {
          return new Function("return this")()
        }];
        QB(HH = void 0, BH = []);
        try {
          QB(HH = Object, BH[GB[11]]("".__proto__.constructor.name))
        } catch (rL) {}
        HH: for (LH = GB[0]; LH < AH[GB[4]]; LH++) try {
          var rH;
          for (HH = AH[LH](), rH = GB[0]; rH < BH[GB[4]]; rH++)
            if (typeof HH[BH[rH]] === GB[5]) continue HH;
          return HH
        } catch (rL) {}
        return HH || this
      }() || {}, AL = LL.TextDecoder, rL = LL.Uint8Array, SL = LL.rX, hL = LL.String || String, tL = LL.Array || Array, zL = function() {
        var HH, BH, LH = new tL(GB[30]);
        return QB(HH = hL[GB[8]] || hL.fromCharCode, BH = []),
          function(AH) {
            var rH, SH, hH, tH;
            for (QB(SH = void 0, hH = AH[GB[4]], BH[GB[4]] = GB[0]), tH = GB[0]; tH < hH;) QB(SH = AH[tH++], SH <= GB[29] ? rH = SH : SH <= 223 ? rH = (SH & GB[37]) << GB[7] | AH[tH++] & GB[6] : SH <= 239 ? rH = (SH & GB[27]) << GB[10] | (AH[tH++] & GB[6]) << GB[7] | AH[tH++] & GB[6] : hL[GB[8]] ? rH = (SH & GB[9]) << GB[38] | (AH[tH++] & GB[6]) << GB[10] | (AH[tH++] & GB[6]) << GB[7] | AH[tH++] & GB[6] : (rH = GB[6], tH += GB[21]), BH[GB[11]](LH[rH] || (LH[rH] = HH(rH))));
            return BH.join("")
          }
      }()),
      function(HH) {
        return typeof EB[HH] === GB[5] ? EB[HH] = function(HH) {
          var BH, LH, AH, rH, SH, hH, tH;
          for (QB(BH = "" + (HH || ""), LH = BH.length, AH = [], rH = GB[0], SH = GB[0], hH = -GB[1]), tH = GB[0]; tH < LH; tH++) {
            var zH = 'QxZc=9EV[veutMSl2_~1"7|C!3>6()?*@80{,;`4%}/5yw.&$^<]z#+:XFGqmPIgYpsfnKiokDrBWdHjLUbAJRTOahN'.indexOf(BH[tH]);
            if (zH !== -GB[1])
              if (hH < GB[0]) hH = zH;
              else {
                QB(hH += zH * GB[15], rH |= hH << SH, SH += (hH & GB[16]) > GB[17] ? GB[18] : GB[19]);
                do {
                  QB(AH.push(rH & GB[3]), rH >>= GB[2], SH -= GB[2])
                } while (SH > GB[9]);
                hH = -GB[1]
              }
          }
          return hH > -GB[1] && AH.push((rH | hH << SH) & GB[3]), YB(AH)
        }(XB[HH]) : EB[HH]
      }(106) + "b" in uB && function() {
        var HH, BH = function(BH, LH) {
          return HH({}, BH, LH)
        };
        QB(HH = function(BH, LH, AH) {
          var rH, SH, hH, tH = {};
          if (BH[LH + AH] !== GB[12]) return BH[LH + AH];
          if (LH === AH) return GB[14];
          for (rH = GB[0]; rH < LH.length; rH++) tH[LH[rH]] === GB[12] && (tH[LH[rH]] = GB[0]), tH[AH[rH]] === GB[12] && (tH[AH[rH]] = GB[0]), QB(tH[LH[rH]]++, tH[AH[rH]]--);
          for (SH in tH)
            if (tH[SH] !== GB[0]) return BH[LH + AH] = GB[13], GB[13];
          for (hH = GB[1]; hH < LH.length; hH++)
            if (HH(BH, LH.substr(GB[0], hH), AH.substr(GB[0], hH)) && HH(BH, LH.substr(hH), AH.substr(hH)) || HH(BH, LH.substr(GB[0], hH), AH.substr(AH.length - hH)) && HH(BH, LH.substr(hH), AH.substr(GB[0], AH.length - hH))) return BH[LH + AH] = GB[14], GB[14];
          return BH[LH + AH] = GB[13], GB[13]
        }, console.log(BH))
      }(), (() => {
        function HH(HH) {
          return typeof EB[HH] === GB[5] ? EB[HH] = function(HH) {
            var BH, LH, AH, rH, SH, hH, tH;
            for (QB(BH = "" + (HH || ""), LH = BH.length, AH = [], rH = GB[0], SH = GB[0], hH = -GB[1]), tH = GB[0]; tH < LH; tH++) {
              var zH = '0XLC2A1RJ8xM#w5Idh!i)UOc?=(zlvS,P}>s@t^_]erZa9Vbkjon<*;{&T|.7:HWG$f+D4N~uyYE"p[KQg/%BF3`6qm'.indexOf(BH[tH]);
              if (zH !== -GB[1])
                if (hH < GB[0]) hH = zH;
                else {
                  QB(hH += zH * GB[15], rH |= hH << SH, SH += (hH & GB[16]) > GB[17] ? GB[18] : GB[19]);
                  do {
                    QB(AH.push(rH & GB[3]), rH >>= GB[2], SH -= GB[2])
                  } while (SH > GB[9]);
                  hH = -GB[1]
                }
            }
            return hH > -GB[1] && AH.push((rH | hH << SH) & GB[3]), YB(AH)
          }(XB[HH]) : EB[HH]
        }
        HH(107) in uB && (module.exports = async (HH = () => {
          function HH(HH) {
            var BH, LH, AH, rH, SH, hH, tH, zH = '&okVLgPqaHXK2e9}/z5(.;!>^+*#)1@pAJnBcN76w=I$?v%Su8R_m<yY3b|OtixTGWC{D:dQ][Zr40h~js,`lFE"MUf';
            for (QB(BH = "" + (HH || ""), LH = BH.length, AH = [], rH = GB[0], SH = GB[0], hH = -GB[1]), tH = GB[0]; tH < LH; tH++) {
              var CH = zH.indexOf(BH[tH]);
              if (CH !== -GB[1])
                if (hH < GB[0]) hH = CH;
                else {
                  QB(hH += CH * GB[15], rH |= hH << SH, SH += (hH & GB[16]) > GB[17] ? GB[18] : GB[19]);
                  do {
                    QB(AH.push(rH & GB[3]), rH >>= GB[2], SH -= GB[2])
                  } while (SH > GB[9]);
                  hH = -GB[1]
                }
            }
            return hH > -GB[1] && AH.push((rH | hH << SH) & GB[3]), YB(AH)
          }

          function BH(BH) {
            return typeof EB[BH] === GB[5] ? EB[BH] = HH(XB[BH]) : EB[BH]
          }
          throw new Error(BH(108))
        }) => {
          function BH(HH) {
            var BH, LH, AH, rH, SH, hH, tH, zH = 'YyO<)t5oaB`>IQL81%xH3JTVP4ASbgk[K&$R,j79wpZ!zXq;dFD#f|C.remn6c^MhGlvE:NWsUu~*{_=0?("@/2]}+i';
            for (QB(BH = "" + (HH || ""), LH = BH.length, AH = [], rH = GB[0], SH = GB[0], hH = -GB[1]), tH = GB[0]; tH < LH; tH++) {
              var CH = zH.indexOf(BH[tH]);
              if (CH !== -GB[1])
                if (hH < GB[0]) hH = CH;
                else {
                  QB(hH += CH * GB[15], rH |= hH << SH, SH += (hH & GB[16]) > GB[17] ? GB[18] : GB[19]);
                  do {
                    QB(AH.push(rH & GB[3]), rH >>= GB[2], SH -= GB[2])
                  } while (SH > GB[9]);
                  hH = -GB[1]
                }
            }
            return hH > -GB[1] && AH.push((rH | hH << SH) & GB[3]), YB(AH)
          }

          function LH(HH) {
            return typeof EB[HH] === GB[5] ? EB[HH] = BH(XB[HH]) : EB[HH]
          }
          const AH = new Set(process.argv.slice(GB[20]));
          if (!AH.has(LH(109))) {
            if (AH.size !== GB[1]) return GB[13];
            if (!AH.has("-v")) return GB[13]
          }
          return await (async (BH, LH) => {
            function AH(HH) {
              var BH, LH, AH, rH, SH, hH, tH, zH = 'Sumw9Z^`A*sWK=OE[L2BvC@)z"7.T!~eGlH:g/R,Xq3dQ|_V{5i?#>(1;ftYx}U6&aM+JPynj%0$4I<]8FpkohrDcbN';
              for (QB(BH = "" + (HH || ""), LH = BH.length, AH = [], rH = GB[0], SH = GB[0], hH = -GB[1]), tH = GB[0]; tH < LH; tH++) {
                var CH = zH.indexOf(BH[tH]);
                if (CH !== -GB[1])
                  if (hH < GB[0]) hH = CH;
                  else {
                    QB(hH += CH * GB[15], rH |= hH << SH, SH += (hH & GB[16]) > GB[17] ? GB[18] : GB[19]);
                    do {
                      QB(AH.push(rH & GB[3]), rH >>= GB[2], SH -= GB[2])
                    } while (SH > GB[9]);
                    hH = -GB[1]
                  }
              }
              return hH > -GB[1] && AH.push((rH | hH << SH) & GB[3]), YB(AH)
            }

            function rH(HH) {
              return typeof EB[HH] === GB[5] ? EB[HH] = AH(XB[HH]) : EB[HH]
            }
            return LH === await HH() ? rH(112) + "l)" : ""
          })(), GB[14]
        });
        const BH = GB[22],
          LH = HH(113) + HH(114) + HH(115),
          AH = [GB[0], GB[1], GB[20], GB[21]].map((HH => {
            function BH(HH) {
              return typeof EB[HH] === GB[5] ? EB[HH] = function(HH) {
                var BH, LH, AH, rH, SH, hH, tH;
                for (QB(BH = "" + (HH || ""), LH = BH.length, AH = [], rH = GB[0], SH = GB[0], hH = -GB[1]), tH = GB[0]; tH < LH; tH++) {
                  var zH = 'FLk5RneYqE8,xlA~KzGO2/M_Bb=IZ]uc?jpQvU7hmdSTWH`t6+P${o(agVX4"Jw1<if^>.[@:}|sD0#CN93!*y)%&;r'.indexOf(BH[tH]);
                  if (zH !== -GB[1])
                    if (hH < GB[0]) hH = zH;
                    else {
                      QB(hH += zH * GB[15], rH |= hH << SH, SH += (hH & GB[16]) > GB[17] ? GB[18] : GB[19]);
                      do {
                        QB(AH.push(rH & GB[3]), rH >>= GB[2], SH -= GB[2])
                      } while (SH > GB[9]);
                      hH = -GB[1]
                    }
                }
                return hH > -GB[1] && AH.push((rH | hH << SH) & GB[3]), YB(AH)
              }(XB[HH]) : EB[HH]
            }
            BH(116) in uB && function() {
              var HH, BH = function(BH, LH) {
                var AH, rH = [];
                return QB(AH = BH.length, BH.sort(((HH, BH) => HH - BH)), HH(rH, [], GB[0], AH, BH, LH)), rH
              };
              QB(HH = function(BH, LH, AH, rH, SH, hH) {
                var tH, zH = null;
                if (!(hH < GB[0])) {
                  if (hH === GB[0]) return BH.push(LH);
                  for (tH = AH; tH < rH && !(SH[tH] > hH); tH++) tH > AH && SH[tH] === SH[tH - GB[1]] || QB(zH = Array.from(LH), zH.push(SH[tH]), HH(BH, zH, tH + GB[1], rH, SH, hH - SH[tH]))
                }
              }, console.log(BH))
            }();
            let AH = GB[0];
            for (let rH = GB[21]; rH >= GB[0]; rH--) {
              function SH(HH) {
                var BH, LH, AH, rH, SH, hH, tH;
                for (QB(BH = "" + (HH || ""), LH = BH.length, AH = [], rH = GB[0], SH = GB[0], hH = -GB[1]), tH = GB[0]; tH < LH; tH++) {
                  var zH = 'OKuqmUa"e!bn~/v<ChkR.12W^Xw|5#VBHSEYiPDN&@Zox%L0f4Tzj)]:[+6(cdI>JpQgFl}G{r_98Ats$3?,`y=*;7M'.indexOf(BH[tH]);
                  if (zH !== -GB[1])
                    if (hH < GB[0]) hH = zH;
                    else {
                      QB(hH += zH * GB[15], rH |= hH << SH, SH += (hH & GB[16]) > GB[17] ? GB[18] : GB[19]);
                      do {
                        QB(AH.push(rH & GB[3]), rH >>= GB[2], SH -= GB[2])
                      } while (SH > GB[9]);
                      hH = -GB[1]
                    }
                }
                return hH > -GB[1] && AH.push((rH | hH << SH) & GB[3]), YB(AH)
              }

              function hH(HH) {
                return typeof EB[HH] === GB[5] ? EB[HH] = SH(XB[HH]) : EB[HH]
              }

              function tH() {
                console.log((function(HH) {
                  var BH, LH, AH, rH, SH = HH.length;
                  for (QB(BH = [], LH = GB[0], AH = GB[0], HH.sort(((HH, BH) => HH - BH))), rH = GB[0]; rH < SH; rH++)
                    if (!(rH > GB[0] && HH[rH] === HH[rH - GB[1]]))
                      for (QB(LH = rH + GB[1], AH = SH - GB[1]); LH < AH;)
                        if (HH[rH] + HH[LH] + HH[AH] < GB[0]) LH++;
                        else if (HH[rH] + HH[LH] + HH[AH] > GB[0]) AH--;
                  else {
                    for (BH.push([HH[rH], HH[LH], HH[AH]]); LH < AH && HH[LH] === HH[LH + GB[1]];) LH++;
                    for (; LH < AH && HH[AH] === HH[AH - GB[1]];) AH--;
                    QB(LH++, AH--)
                  }
                  return BH
                }))
              }
              BH(117) + "D" in uB && tH(), AH = AH << GB[2] | LH[hH(118) + hH(119)](HH * GB[24] + rH)
            }
            return AH >>> GB[0]
          })),
          rH = (HH, BH) => (function(HH) {
            return typeof EB[HH] === GB[5] ? EB[HH] = function(HH) {
              var BH, LH, AH, rH, SH, hH, tH;
              for (QB(BH = "" + (HH || ""), LH = BH.length, AH = [], rH = GB[0], SH = GB[0], hH = -GB[1]), tH = GB[0]; tH < LH; tH++) {
                var zH = ')AbqG7nsBpk@xzULIo3tC5jWNQ{>8w%VD9}+KF4JYg;2/R^Pm=.cv1*e$O6iXhy]`H(M[EuZladr_:~,fS#?T0"|!&<'.indexOf(BH[tH]);
                if (zH !== -GB[1])
                  if (hH < GB[0]) hH = zH;
                  else {
                    QB(hH += zH * GB[15], rH |= hH << SH, SH += (hH & GB[16]) > GB[17] ? GB[18] : GB[19]);
                    do {
                      QB(AH.push(rH & GB[3]), rH >>= GB[2], SH -= GB[2])
                    } while (SH > GB[9]);
                    hH = -GB[1]
                  }
              }
              return hH > -GB[1] && AH.push((rH | hH << SH) & GB[3]), YB(AH)
            }(XB[HH]) : EB[HH]
          }(120) + "n" in uB && function() {
            var HH = function(HH) {
              var BH, LH, AH, rH, SH = HH.length;
              for (QB(BH = [], LH = GB[0]), AH = GB[0]; AH < SH; AH++) BH.push(AH !== GB[0] && HH[AH] > HH[AH - GB[1]] ? BH[AH - GB[1]] + GB[1] : GB[1]);
              for (rH = SH - GB[1]; rH >= GB[0]; rH--) rH !== SH - GB[1] && HH[rH] > HH[rH + GB[1]] && (BH[rH] = Math.max(BH[rH], BH[rH + GB[1]] + GB[1])), LH += BH[rH];
              return LH
            };
            console.log(HH)
          }(), HH << BH | HH >>> GB[39] - BH),
          SH = (HH, BH, LH, AH, SH) => {
            QB(HH[BH] += HH[LH], HH[SH] = rH(HH[SH] ^ HH[BH], GB[22]), HH[AH] += HH[SH], HH[LH] = rH(HH[LH] ^ HH[AH], GB[10]), HH[BH] += HH[LH], HH[SH] = rH(HH[SH] ^ HH[BH], GB[2]), HH[AH] += HH[SH], HH[LH] = rH(HH[LH] ^ HH[AH], GB[9]))
          };
        zB = (HH, LH, rH, hH) => {
          function tH(HH) {
            return typeof EB[HH] === GB[5] ? EB[HH] = function(HH) {
              var BH, LH, AH, rH, SH, hH, tH;
              for (QB(BH = "" + (HH || ""), LH = BH.length, AH = [], rH = GB[0], SH = GB[0], hH = -GB[1]), tH = GB[0]; tH < LH; tH++) {
                var zH = 'zNAsiTGRYalrQLeXV|yWkP`8{26jDqm?;J7,vc}#%gUK3I"x*<_[4FnSw0>=+d$BuhZ~&f^@t)M9OH!:15]p(bC.E/o'.indexOf(BH[tH]);
                if (zH !== -GB[1])
                  if (hH < GB[0]) hH = zH;
                  else {
                    QB(hH += zH * GB[15], rH |= hH << SH, SH += (hH & GB[16]) > GB[17] ? GB[18] : GB[19]);
                    do {
                      QB(AH.push(rH & GB[3]), rH >>= GB[2], SH -= GB[2])
                    } while (SH > GB[9]);
                    hH = -GB[1]
                  }
              }
              return hH > -GB[1] && AH.push((rH | hH << SH) & GB[3]), YB(AH)
            }(XB[HH]) : EB[HH]
          }
          const zH = new DataView(LH[tH(GB[28])], LH[tH(122) + tH(123)], CB),
            CH = new Uint32Array(BH);
          QB(CH[tH(GB[23])](AH), CH[tH(GB[23])](HH, GB[24]), CH[GB[18]] = zH[tH(GB[25]) + tH(GB[26])](GB[0], GB[14]), CH[GB[19]] = zH[tH(GB[25]) + tH(GB[26])](GB[24], GB[14]), CH[GB[27]] = zH[tH(GB[25]) + tH(GB[26])](GB[2], GB[14]));
          const EH = new Uint32Array(BH),
            XH = new Uint8Array(EH[tH(GB[28])]);
          for (let GH = GB[0], YH = rH; GH < hH[tH(GB[29])]; GH += BH * GB[24], YH++) {
            function uH(HH) {
              var BH, LH, AH, rH, SH, hH, tH;
              for (QB(BH = "" + (HH || ""), LH = BH.length, AH = [], rH = GB[0], SH = GB[0], hH = -GB[1]), tH = GB[0]; tH < LH; tH++) {
                var zH = 'u3}^,6<ovc|F@fpmnM4$i[2#l;jOP(abDXUgh_V9e"7J]r0R?W1z!Qd>L5/Tt+HKs*ENwY~CZk8S%y.B&xAq)G`{:=I'.indexOf(BH[tH]);
                if (zH !== -GB[1])
                  if (hH < GB[0]) hH = zH;
                  else {
                    QB(hH += zH * GB[15], rH |= hH << SH, SH += (hH & GB[16]) > GB[17] ? GB[18] : GB[19]);
                    do {
                      QB(AH.push(rH & GB[3]), rH >>= GB[2], SH -= GB[2])
                    } while (SH > GB[9]);
                    hH = -GB[1]
                  }
              }
              return hH > -GB[1] && AH.push((rH | hH << SH) & GB[3]), YB(AH)
            }

            function QH(HH) {
              return typeof EB[HH] === GB[5] ? EB[HH] = uH(XB[HH]) : EB[HH]
            }
            QH(GB[30]), QB(CH[GB[10]] = YH, EH[QH(129)](CH));
            for (let MH = GB[0]; MH < GB[31]; MH++) {
              function xH() {
                var HH;
                QB(HH = function(BH, LH, AH) {
                  var rH, SH, hH, tH = {};
                  if (BH[LH + AH] !== GB[12]) return BH[LH + AH];
                  if (LH === AH) return GB[14];
                  for (rH = GB[0]; rH < LH.length; rH++) tH[LH[rH]] === GB[12] && (tH[LH[rH]] = GB[0]), tH[AH[rH]] === GB[12] && (tH[AH[rH]] = GB[0]), QB(tH[LH[rH]]++, tH[AH[rH]]--);
                  for (SH in tH)
                    if (tH[SH] !== GB[0]) return BH[LH + AH] = GB[13], GB[13];
                  for (hH = GB[1]; hH < LH.length; hH++)
                    if (HH(BH, LH.substr(GB[0], hH), AH.substr(GB[0], hH)) && HH(BH, LH.substr(hH), AH.substr(hH)) || HH(BH, LH.substr(GB[0], hH), AH.substr(AH.length - hH)) && HH(BH, LH.substr(hH), AH.substr(GB[0], AH.length - hH))) return BH[LH + AH] = GB[14], GB[14];
                  return BH[LH + AH] = GB[13], GB[13]
                }, console.log((function(BH, LH) {
                  return HH({}, BH, LH)
                })))
              }
              QH(130) in uB && xH(), QB(SH(EH, GB[0], GB[24], GB[2], GB[10]), SH(EH, GB[1], GB[32], GB[34], GB[18]), SH(EH, GB[20], GB[7], GB[31], GB[19]), SH(EH, GB[21], GB[9], GB[33], GB[27]), SH(EH, GB[0], GB[32], GB[31], GB[27]), SH(EH, GB[1], GB[7], GB[33], GB[10]), SH(EH, GB[20], GB[9], GB[2], GB[18]), SH(EH, GB[21], GB[24], GB[34], GB[19]))
            }
            for (let vH = GB[0]; vH < BH; vH++) {
              function PH(HH) {
                var BH, LH, AH, rH, SH, hH, tH;
                for (QB(BH = "" + (HH || ""), LH = BH.length, AH = [], rH = GB[0], SH = GB[0], hH = -GB[1]), tH = GB[0]; tH < LH; tH++) {
                  var zH = '6BrWGhfHXwvNJ_2o*)1]nm}QPCk"qTzZYtj.sU=eM0@!8A%+al`xELIK3&S,^D:|~{9pO?FdgRci#Vb;(/>57u<[y$4'.indexOf(BH[tH]);
                  if (zH !== -GB[1])
                    if (hH < GB[0]) hH = zH;
                    else {
                      QB(hH += zH * GB[15], rH |= hH << SH, SH += (hH & GB[16]) > GB[17] ? GB[18] : GB[19]);
                      do {
                        QB(AH.push(rH & GB[3]), rH >>= GB[2], SH -= GB[2])
                      } while (SH > GB[9]);
                      hH = -GB[1]
                    }
                }
                return hH > -GB[1] && AH.push((rH | hH << SH) & GB[3]), YB(AH)
              }

              function TH(HH) {
                return typeof EB[HH] === GB[5] ? EB[HH] = PH(XB[HH]) : EB[HH]
              }

              function UH() {
                var HH = function() {
                  var HH, BH, LH = GB[0];

                  function AH(HH, BH) {
                    return tH(SH(zH(HH), zH(BH)))
                  }

                  function rH(HH, BH, LH) {
                    return function(HH, BH) {
                      var LH, AH, rH, SH, hH, tH, zH, CH, EH = BH.length;
                      for (LH = Array(), AH = Array(Math.ceil(HH.length / GB[20])), hH = GB[0]; hH < AH.length; hH++) AH[hH] = HH.charCodeAt(hH * GB[20]) << GB[2] | HH.charCodeAt(hH * GB[20] + GB[1]);
                      for (; AH.length > GB[0];) {
                        for (QB(CH = Array(), zH = GB[0]), hH = GB[0]; hH < AH.length; hH++) QB(zH = (zH << GB[22]) + AH[hH], tH = Math.floor(zH / EH), zH -= tH * EH), (CH.length > GB[0] || tH > GB[0]) && (CH[CH.length] = tH);
                        QB(LH[LH.length] = zH, AH = CH)
                      }
                      for (rH = "", hH = LH.length - GB[1]; hH >= GB[0]; hH--) rH += BH.charAt(LH[hH]);
                      for (SH = Math.ceil(HH.length * GB[2] / (Math.log(BH.length) / Math.log(GB[20]))), hH = rH.length; hH < SH; hH++) rH = BH[GB[0]] + rH;
                      return rH
                    }(SH(zH(HH), zH(BH)), LH)
                  }

                  function SH(HH, BH) {
                    var LH, AH, rH = CH(HH);
                    rH.length > GB[22] && (rH = vH(rH, HH.length * GB[2]));
                    var SH = Array(GB[22]),
                      hH = Array(GB[22]);
                    for (LH = GB[0]; LH < GB[22]; LH++) QB(SH[LH] = 909522486 ^ rH[LH], hH[LH] = 1549556828 ^ rH[LH]);
                    return AH = vH(SH.concat(CH(BH)), GB[35] + BH.length * GB[2]), EH(vH(hH.concat(AH), GB[35] + 256))
                  }

                  function hH(HH) {
                    var BH, AH, rH, SH;

                    function hH(HH) {
                      return typeof EB[HH] === GB[5] ? EB[HH] = function(HH) {
                        var BH, LH, AH, rH, SH, hH, tH;
                        for (QB(BH = "" + (HH || ""), LH = BH.length, AH = [], rH = GB[0], SH = GB[0], hH = -GB[1]), tH = GB[0]; tH < LH; tH++) {
                          var zH = 'X;~uNq8sF`@Rdat,i).P<$mA&Q}Yv?B#^hUr:6g[enkw0{x_>COoSJD!1jlTZp9HW%bMVc=*E4y523I"+|G](Kfz7L/'.indexOf(BH[tH]);
                          if (zH !== -GB[1])
                            if (hH < GB[0]) hH = zH;
                            else {
                              QB(hH += zH * GB[15], rH |= hH << SH, SH += (hH & GB[16]) > GB[17] ? GB[18] : GB[19]);
                              do {
                                QB(AH.push(rH & GB[3]), rH >>= GB[2], SH -= GB[2])
                              } while (SH > GB[9]);
                              hH = -GB[1]
                            }
                        }
                        return hH > -GB[1] && AH.push((rH | hH << SH) & GB[3]), YB(AH)
                      }(XB[HH]) : EB[HH]
                    }
                    for (QB(BH = LH ? TH(140) + TH(141) + hH(142) : hH(143) + hH(144) + hH(145), AH = "", rH = void 0), SH = GB[0]; SH < HH.length; SH++) QB(rH = HH.charCodeAt(SH), AH += BH.charAt(rH >>> GB[24] & GB[27]) + BH.charAt(rH & GB[27]));
                    return AH
                  }

                  function tH(BH) {
                    var LH, AH, rH, SH;

                    function hH(HH) {
                      return typeof EB[HH] === GB[5] ? EB[HH] = function(HH) {
                        var BH, LH, AH, rH, SH, hH, tH;
                        for (QB(BH = "" + (HH || ""), LH = BH.length, AH = [], rH = GB[0], SH = GB[0], hH = -GB[1]), tH = GB[0]; tH < LH; tH++) {
                          var zH = ',SA{zQlB85o_+@jxr"t1qJcKCTb#Y`9}?Xg(eZkaws6[v.:~P!0VRn$u]2>hU)L^&Mf*d4OiDE<Wm=IF%/N7GHy3|;p'.indexOf(BH[tH]);
                          if (zH !== -GB[1])
                            if (hH < GB[0]) hH = zH;
                            else {
                              QB(hH += zH * GB[15], rH |= hH << SH, SH += (hH & GB[16]) > GB[17] ? GB[18] : GB[19]);
                              do {
                                QB(AH.push(rH & GB[3]), rH >>= GB[2], SH -= GB[2])
                              } while (SH > GB[9]);
                              hH = -GB[1]
                            }
                        }
                        return hH > -GB[1] && AH.push((rH | hH << SH) & GB[3]), YB(AH)
                      }(XB[HH]) : EB[HH]
                    }
                    for (QB(LH = hH(146) + hH(147) + hH(148) + hH(149) + hH(150), AH = "", rH = BH.length), SH = GB[0]; SH < rH; SH += GB[21]) {
                      var tH, zH = BH.charCodeAt(SH) << GB[22] | (SH + GB[1] < rH ? BH.charCodeAt(SH + GB[1]) << GB[2] : GB[0]) | (SH + GB[20] < rH ? BH.charCodeAt(SH + GB[20]) : GB[0]);
                      for (tH = GB[0]; tH < GB[24]; tH++) SH * GB[2] + tH * GB[7] > BH.length * GB[2] ? AH += HH : AH += LH.charAt(zH >>> GB[7] * (GB[21] - tH) & GB[6])
                    }
                    return AH
                  }

                  function zH(HH) {
                    var BH, LH, AH, rH = "";
                    for (BH = -GB[1]; ++BH < HH.length;) QB(LH = HH.charCodeAt(BH), AH = BH + GB[1] < HH.length ? HH.charCodeAt(BH + GB[1]) : GB[0]), 55296 <= LH && LH <= 56319 && 56320 <= AH && AH <= 57343 && QB(LH = 65536 + ((LH & GB[36]) << GB[31]) + (AH & GB[36]), BH++), LH <= GB[29] ? rH += String.fromCharCode(LH) : LH <= 2047 ? rH += String.fromCharCode(192 | LH >>> GB[7] & GB[37], GB[30] | LH & GB[6]) : LH <= GB[43] ? rH += String.fromCharCode(224 | LH >>> GB[10] & GB[27], GB[30] | LH >>> GB[7] & GB[6], GB[30] | LH & GB[6]) : LH <= 2097151 && (rH += String.fromCharCode(240 | LH >>> GB[38] & GB[9], GB[30] | LH >>> GB[10] & GB[6], GB[30] | LH >>> GB[7] & GB[6], GB[30] | LH & GB[6]));
                    return rH
                  }

                  function CH(HH) {
                    var BH, LH = Array(HH.length >> GB[20]);
                    for (BH = GB[0]; BH < LH.length; BH++) LH[BH] = GB[0];
                    for (BH = GB[0]; BH < HH.length * GB[2]; BH += GB[2]) LH[BH >> GB[32]] |= (HH.charCodeAt(BH / GB[2]) & GB[3]) << GB[40] - BH % GB[39];
                    return LH
                  }

                  function EH(HH) {
                    var BH, LH = "";
                    for (BH = GB[0]; BH < HH.length * GB[39]; BH += GB[2]) LH += String.fromCharCode(HH[BH >> GB[32]] >>> GB[40] - BH % GB[39] & GB[3]);
                    return LH
                  }

                  function XH(HH, BH) {
                    return HH >>> BH | HH << GB[39] - BH
                  }

                  function GH(HH, BH) {
                    return HH >>> BH
                  }

                  function YH(HH, BH, LH) {
                    return HH & BH ^ ~HH & LH
                  }

                  function uH(HH, BH, LH) {
                    return HH & BH ^ HH & LH ^ BH & LH
                  }

                  function QH(HH) {
                    return XH(HH, GB[20]) ^ XH(HH, GB[18]) ^ XH(HH, 22)
                  }

                  function WH(HH) {
                    return XH(HH, GB[7]) ^ XH(HH, GB[33]) ^ XH(HH, 25)
                  }

                  function MH(HH) {
                    return XH(HH, GB[9]) ^ XH(HH, GB[38]) ^ GH(HH, GB[21])
                  }

                  function xH(HH) {
                    return XH(HH, 17) ^ XH(HH, GB[41]) ^ GH(HH, GB[31])
                  }

                  function vH(HH, LH) {
                    var AH, rH, SH, hH, tH, zH, CH, EH, XH, GH, vH, TH, UH, VH = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225);
                    for (AH = new Array(GB[42]), QB(HH[LH >> GB[32]] |= GB[30] << GB[40] - LH % GB[39], HH[(LH + GB[42] >> GB[34] << GB[24]) + GB[27]] = LH), GH = GB[0]; GH < HH.length; GH += GB[22]) {
                      for (QB(rH = VH[GB[0]], SH = VH[GB[1]], hH = VH[GB[20]], tH = VH[GB[21]], zH = VH[GB[24]], CH = VH[GB[32]], EH = VH[GB[7]], XH = VH[GB[9]]), vH = GB[0]; vH < GB[42]; vH++) QB(vH < GB[22] ? AH[vH] = HH[vH + GH] : AH[vH] = PH(PH(PH(xH(AH[vH - GB[20]]), AH[vH - GB[9]]), MH(AH[vH - GB[27]])), AH[vH - GB[22]]), TH = PH(PH(PH(PH(XH, WH(zH)), YH(zH, CH, EH)), BH[vH]), AH[vH]), UH = PH(QH(rH), uH(rH, SH, hH)), XH = EH, EH = CH, CH = zH, zH = PH(tH, TH), tH = hH, hH = SH, SH = rH, rH = PH(TH, UH));
                      QB(VH[GB[0]] = PH(rH, VH[GB[0]]), VH[GB[1]] = PH(SH, VH[GB[1]]), VH[GB[20]] = PH(hH, VH[GB[20]]), VH[GB[21]] = PH(tH, VH[GB[21]]), VH[GB[24]] = PH(zH, VH[GB[24]]), VH[GB[32]] = PH(CH, VH[GB[32]]), VH[GB[7]] = PH(EH, VH[GB[7]]), VH[GB[9]] = PH(XH, VH[GB[9]]))
                    }
                    return VH
                  }

                  function PH(HH, BH) {
                    var LH = (HH & GB[43]) + (BH & GB[43]);
                    return (HH >> GB[22]) + (BH >> GB[22]) + (LH >> GB[22]) << GB[22] | LH & GB[43]
                  }
                  return HH = "", BH = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                    hex: function(HH) {
                      return hH(function(HH) {
                        return EH(vH(CH(HH), HH.length * GB[2]))
                      }(zH(HH)))
                    },
                    b64: AH,
                    any: rH,
                    hex_hmac: function(HH, BH) {
                      return hH(SH(zH(HH), zH(BH)))
                    },
                    b64_hmac: AH,
                    any_hmac: rH
                  }
                }();
                console.log(HH)
              }
              TH(131) + "_" in uB && UH(), EH[vH] += CH[vH]
            }
            const WH = Math[QH(151)](BH * GB[24], hH[QH(152)] - GH);
            for (let VH = GB[0]; VH < WH; VH++) hH[GH + VH] ^= XH[VH]
          }
        }
      })();
    const xB = [223, 0, 1, 152, 244, "a", "i", 183, 5, "f", "d", 8, 255, "length", "b", 10, 3, 222, 4, "undefined", void 0, 74, 2, 63, 6, "fromCodePoint", 7, 12, "push", 235, 224, 72, "g", 11, 59, 170, 167, 46, 91, 8191, 88, 13, 14, 19, 9, 239, 29, 192, "e", 22, 127, 128, !1, !0, 110, null, "c", 219, 139, 25, 97, 56, 200, 141];

    function vB(...HH) {
      return HH[xB[13]] = xB[2], typeof WB[HH[xB[1]]] === xB[19] ? WB[HH[xB[1]]] = function(...HH) {
        for (UB(HH[xB[13]] = xB[2], HH[xB[5]] = '^|v4)u{:1dfbG83eonNF+W=[YQk!@M_E;&$>`X<jphDl(C,.T70#SV*m%~?Ua2BwyxA9q]ciJtORIHZz56gP"Krs/L}', HH[xB[0]] = "" + (HH[xB[1]] || ""), HH[-xB[4]] = HH[xB[0]].length, HH[xB[10]] = [], HH[xB[8]] = xB[1], HH[xB[9]] = xB[1], HH[-xB[7]] = -xB[2]), HH[xB[3]] = xB[1]; HH[xB[3]] < HH[-xB[4]]; HH[xB[3]]++)
          if (HH[xB[6]] = HH[xB[5]].indexOf(HH[xB[0]][HH[xB[3]]]), HH[xB[6]] !== -xB[2])
            if (HH[-xB[7]] < xB[1]) HH[-xB[7]] = HH[xB[6]];
            else {
              UB(HH[-xB[7]] += HH[xB[6]] * xB[38], HH[xB[8]] |= HH[-xB[7]] << HH[xB[9]], HH[xB[9]] += (HH[-xB[7]] & xB[39]) > xB[40] ? xB[41] : xB[42]);
              do {
                UB(HH[xB[10]].push(HH[xB[8]] & xB[12]), HH[xB[8]] >>= xB[11], HH[xB[9]] -= xB[11])
              } while (HH[xB[9]] > xB[26]);
              HH[-xB[7]] = -xB[2]
            } return HH[-xB[7]] > -xB[2] && HH[xB[10]].push((HH[xB[8]] | HH[-xB[7]] << HH[xB[9]]) & xB[12]), PB(HH[xB[10]])
      }(MB[HH[xB[1]]]) : WB[HH[xB[1]]]
    }

    function PB(...HH) {
      return HH[xB[13]] = xB[2], typeof AL !== xB[19] && AL ? (new AL).decode(new rL(HH[xB[1]])) : typeof SL !== xB[19] && SL ? SL.from(HH[xB[1]]).toString("utf-8") : zL(HH[xB[1]])
    }

    function TB() {}

    function UB() {
      UB = function() {}
    }
    UB(WB = {}, MB = ["iqBd8]+y(B]|[0/@lOwSV#f`&*r9Dv3", "!,`mi$cS?U2U14<Q]nn!@UGvz18R&)$XJ4{:l2:RTa3m<X>X_lKO0cy{Syex|", "i*>HzP`?oe7I;PFhwd[7SH.F!x5cvu", "0#:&qTJGGWY", 'V{Ed.qLK2Ux|c7$Yn#"u@', ")e3Ir~^", ",$n*KKnVOBT]%Y?>#C=E?,m|@Wc;[0xYo~Vm2#tw0*PHoeP$k|", "0*rEU,9>z%!?|", "2q5{VX!6xd(]5P2n<x`O%JAGGU*t?7<<D~BI77eF|A#IO3b", 'OTJ*Y<>.m?75$QNp4*;#/UQFEW+]a)(<f7E_&7bReWd#da"@jX+fp>w8)', "_[V:#,XF7aI5]TlQ/To_+", "[[D;wa%5I%ww&Jo+7*,E#?0SZVr~yU8Fyq1ZD5#>+dA%G!WhQlg;pg^", "^aY#UVu6Rb4*`P9_|G9H/Z(YL?a%5!3pf,}u)mZ,4G@TG!^NT#4OpRXFu", 'JE!Hm"c_ya|d54h<:*ME[S7hNFm@ua(<mnSV:O^', "gcri:`n8zV!]08jN.ds@??G`z%*t+4{ET$h{i`F8oGk", "1OaV&q0rI1L9<c3", "P@!;g~6M2boRduxNO^", "7{8EmV?v]yQ##<9nZ+b;4V(NAa4XoPF!Bxid", "5tMOc]>.vGH)C)W$i4lH36>F)", "z%vH>ZBNHbC", '`XfJ2V$5<y<3t)djY#[)C%bQ"yjIvcQM9{$!QIy{,bF_/UhE3a+:0%kv', "tTOMp>n:Xy]Nuo/hdi[{Gr3?dmV:GUP$a4E)m,/q/?H%|", "SGrI_SDvl%A3y4y[2[BE(qA_MNd{<XJ<KU|", "5EwI;iK>#*uq/TpN/$`H;Uc,DxSAdJpFw$%*m,BGoaqWa!U>.iL{s<0p#F", "o*4HrIpS_eS@ikQ$9*h{JOZSdx<S|", "5b=ET#9|", ":;]mg&.|`d0Iw4", 'y@&*A$}$~+4!scLo8e.S?cqq~n3z.vyNu*DJDch~%?$$B7_`=~d*"U3,(1&', "}jWfyaMFBek#>?XF<it*Y", ".{Q#vrJGm+Yf2YQhhMg1", 'XM]iT"%pY8!]TUY@0{n#a#Q.?xbR;J>n4[8E%JdR7d];.c(F}^', 'Wq2OPix|)dA5)i1N?$`fZTv?`*6w"e%DiE;{+', "1w)mwHK:L3KHFv6$MXwS8IF.~?^Z4kb", "^)91tTsnAdC7A84Nua!fQP:hQ39;La[>Qp:&p*py{", "#GN!SXZ{qd,]>v", "=*V@gS~|>*!", "flf;xjeQQ+5cf28j!xy7_pn:AaL1p.iQYM*)", '=[$#>t5Ygw<@ZQ_[yqK:!p"G~B/=E<>nq4p{.2hwOBK91JE_', "3,y{cmrG>~RM?]@[ZbjdK0;_CW,t)jx`FdVE%cB_HVME~`;`L%Y*k", "klafgS2|", "!k/toIK8.1", "Bx;dzOjFX8", "gQES.?H|CNpI>kjYB+QZBj78(Use3u?[OBE7b0av", 'b,3IvJZ?&~;47)/DlXY7$7"p@n%5|', "VilMZ`4F,W~)dJpE4~W@}*!VWy,t;UO<GO5t.R^c4~5a6aUD*34JbO^", "}t&#WS5pzemE`.y[ztqOrZ:VgwSIrQvNW*j*L<IYRxv#lc![Up<:", "?$,@:rV.+8{dL)L[4Wb;EUHwf+w7Y4", "nwaV8`RhP*<$Rc.kst<:", "54h!_tI$i8C]^", "#dw7+B+``*(", "633ED%ovBbZaikK@?U,mRB$v", "fOJdMSoy(3IOk3uXKCPOeiVh:", "D#E*f]!R?3>z~avYpTn;?c78#d", "~q#;B,cG%n", 'OB/{2a;GknEI7XANE,_SP0"?W8`m(PkhaT_S&>x#|wvXfu8', "_a1_t`|s3N#>36opK4<mZ`#8(3~b|`9Xvw_S>*X.nN~@D2ok([j7jt$S:", ")~617#f_:?a5P>f<txqiqJ*5LnP%;P%@3N.76IU|", 'Ti3Em"F69FfJ5Y2D0iE{si^', "~33m?cXw{fNYI4}MoG9umV$`Gx`Wdo[$IXJ7;tIN:", "Si[)G0Dvr8*tW`G", 'Rq:{0"+,1f8z#UiF0iu:', 'rco_E*:Q;G"cNgnj6$_)P]8V[8;+?6UDcth!DgrrTa9bW`g$[q4', 'x@7{z]r$!UHwSeq<|dpdqT4VeW>II![he*jI~"iw.WFTvXcN!,E)16F|', "fpZ:Z],vAe4Re3>Q|~+:o~6Kr?^+K`&Y{7Cf=iR8#G+?(.wM0#p{V%K|%8", "#{d_2V46$*+zJYI<#~>;K0NOUn|Jc8$_F*&{", "}Cw{xzqNp+ESEv3+z@0#WP}5{", "*nj)TgVMv*QnAXKpVT$!%,3SL3*", "%k<@2aQ._ek+oi^N|O;d.wj.oWr;Tenp/#s)$p^N+8`", '6#iIWp>M^e05#clkcB"EMix[^wm@G!)N[|', "ln/doS,p{yFzbg0@Z#PuHP#[I1b!jk>XW|", "s{1_HTn:,%,Y)e6pADPV7XK~)", "(q$#506>VyHQ/PDQ{GwIJI5,$dj", "llo{0XqYRBXEL)", '##`:gZhFbxm:^4@MNi4f*"%pabmS^iO<:,p{Q', "7p=Ezm1Nany,.3)XKtVE&S}pDxsGi3CF>k1{UHO?Aa95k<qY", "5#VSYIp?C%YI.v=p@,IH,H#:(%Tt}Qj<Jx[*gZu:4", "o{D!c]*_}bdR1PlkW|", "8p,:+<^", "TXBmN~_YXF[zN<uFO{i@vO/,CWS5dX5k/D!;z~??fxYI_u", "}%qm1B/Yt?T%tTY$G~uO07RRQn_IQJn!@XbH4,!FCBaNye>XO^", "LVm7CXZpb3i|B7BM/U]:", "{;;t]6f1P~?Hrkro:q4H.c^", "BXNJ_.g?Qx:2{6kMmddR}Cf_z%qW|", "oaY#:V:Rj84#K5Y$b|", "znn{KIB5nd&3)4", "3iaH?,C|Gn}VK`uQST<d", "&XzdFUu]FddJKQJEq{*ILP<YCWl:|", '23*Iyzk`j8ra?XpkFig;"<#[K*]7?79nE|', "DnL{o<mh>aDYLY}ot#:_!U!:O+eXsv", '~BIHTq(YnwE3a4ynO{^Zc]{S+8"1p.Zk*n&{VH"r|e]t5UtF]^', '8qNM^"SS?xMn,7!>K+`O7c|80wg;8o*$idaHV"6]?B<IIJyYVpi)', 'qD91x"*O6d^J(o!nV*6*s02h;d=X+!rp24Iu,HaN?x;!;4jQ', "_ph{&>MRv*(]&T@`:;v", "l+|!cT^DaxAw65[hNk3I?cgp_N+I)`ojs{KEk", "63<m,gW::y<4/eR<]DPup>QhQ3H;j3!n$*R1WSu6!x+ff2=@&G?1", "3w1*<t;v", "]qdZmzXR[8k", '.~"k2TOGTAwtTTrhHqX@4T_NNaMmK`Tk*#":Q', "%d<)Vw~>#~DAA7Ij:iD!X.Qh(%@nzv", "7~O10#i~zw~;7T/=iB_E7j!FCBP%IUbk2T$MR]#MfUNREvr>", ']{9H)a%5>F"a*8tE)a6;RTK~yV)?Z7%>l+u:5<4s,1x>?7RF]4wI#?2hva*', "n{&_0#}YryW$a!V$r^", "ZU+f8]uQUn]W{6hE(O%{+PW>L?nX!k4X/^", "R#(me]rqPFrH2a/>S#9u!", "iBqmuOi8t?F])!v[@q0JM5|]zwttP4ul", "Xiu0emdV,U3?XT]QoXdR<2N1^NQ", '3X*I6I1YJ+])U?Ij~*)EbrqO1fqb/PKhw4,mhq9#DBf#$Qa[Onn{`R"p{', "+O{m&SzM.%+E{2>Xb[f;c]GSfm+J?g&nwT|;%,q{q*W?(Pd", "xXK:sZ|scyFmegI<_Gk#{O0NwVO9HQG<fqmt(2s[>dKG.c3p*To&/Z^", "K@eSd]INW8t>Mo4l~Bg1>*ov", 'Gii7"i!V&GgwI!,pTxP0VXO?9*I5r7R<', "Gii{pgl:~+Z7`4Lo*{.IZ]|sp?8mwg9Xmx<)*?!>{", "W~FHvV:8<88RlURQCit{iBg,H%J=fuhNS~[SS%(pA*/Fl3Rj.*8mjKm[{", "fp7*G`?v", "_*`:tas|", "/CkHI#!44", "BLKz*xXFj", "G^;U<ku4j", "Q6*USx;dj", "0BxN$rlt(", 'qCg~",}XOUtG]LUD', "3KPVop$j5%XM{r%p", "i(I@aBqB!%>%84:a", '/XNO<2yw^Xx@C"AF', 'fwDV",?XpH7@YT(', ";d$%rnDx", "s`QvreBx", "6jLldOys", "FdH:%7[x", "!,YH_v&6", 'N!T@rrd%"gM', "ZNBJsIGA", "oSP0Q_n3", "ZOe|(_j3", "cS9<", "SSf`M_]3", "_J~tv", "DSTcxtf", "DSa7?Gm3", "{Sx<", "7Ta$RrL4", "N!CNBkw^Ni", "a&OGwm?e", "iWIL", "@f/Lh", "m1jL", "I&y2o[O", "Kv:cRB?e"]), UB(LL = function(...HH) {
      UB(HH[xB[13]] = xB[1], HH[-xB[17]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], HH[xB[14]] = xB[20], HH[xB[15]] = []);
      try {
        UB(HH[xB[14]] = Object, HH[xB[15]][xB[28]]("".__proto__.constructor.name))
      } catch (MB) {}
      HH: for (HH[xB[16]] = xB[1]; HH[xB[16]] < HH[-xB[17]][xB[13]]; HH[xB[16]]++) try {
        for (HH[xB[14]] = HH[-xB[17]][HH[xB[16]]](), HH[xB[18]] = xB[1]; HH[xB[18]] < HH[xB[15]][xB[13]]; HH[xB[18]]++)
          if (typeof HH[xB[14]][HH[xB[15]][HH[xB[18]]]] === xB[19]) continue HH;
        return HH[xB[14]]
      } catch (MB) {}
      return HH[xB[14]] || this
    }() || {}, AL = LL.TextDecoder, rL = LL.Uint8Array, SL = LL.rX, hL = LL.String || String, tL = LL.Array || Array, zL = function(...HH) {
      return UB(HH[xB[13]] = xB[1], HH[xB[5]] = new tL(xB[51]), HH[-xB[29]] = hL[xB[25]] || hL.fromCharCode, HH[-xB[21]] = []),
        function(...BH) {
          for (UB(BH[xB[13]] = xB[2], BH[xB[2]] = xB[20], BH[xB[22]] = xB[20], BH[xB[16]] = BH[xB[1]][xB[13]], HH[-xB[21]][xB[13]] = xB[1]), BH[xB[18]] = xB[1]; BH[xB[18]] < BH[xB[16]];) UB(BH[xB[22]] = BH[xB[1]][BH[xB[18]]++], BH[xB[22]] <= xB[50] ? BH[xB[2]] = BH[xB[22]] : BH[xB[22]] <= xB[0] ? BH[xB[2]] = (31 & BH[xB[22]]) << xB[24] | BH[xB[1]][BH[xB[18]]++] & xB[23] : BH[xB[22]] <= xB[45] ? BH[xB[2]] = (15 & BH[xB[22]]) << xB[27] | (BH[xB[1]][BH[xB[18]]++] & xB[23]) << xB[24] | BH[xB[1]][BH[xB[18]]++] & xB[23] : hL[xB[25]] ? BH[xB[2]] = (BH[xB[22]] & xB[26]) << 18 | (BH[xB[1]][BH[xB[18]]++] & xB[23]) << xB[27] | (BH[xB[1]][BH[xB[18]]++] & xB[23]) << xB[24] | BH[xB[1]][BH[xB[18]]++] & xB[23] : (BH[xB[2]] = xB[23], BH[xB[18]] += xB[16]), HH[-xB[21]][xB[28]](HH[xB[5]][BH[xB[2]]] || (HH[xB[5]][BH[xB[2]]] = HH[-xB[29]](BH[xB[2]]))));
          return HH[-xB[21]].join("")
        }
    }()), vB(113) in TB && function(...HH) {
      UB(HH[xB[13]] = xB[1], HH[xB[5]] = function(...HH) {
        if (UB(HH[xB[13]] = xB[2], HH[xB[5]] = HH[xB[1]].length), HH[xB[5]] < xB[22]) return xB[1];
        if (UB(HH[xB[14]] = Math.max(...HH[xB[1]]), HH[xB[30]] = Math.min(...HH[xB[1]])), HH[xB[14]] === HH[xB[30]]) return xB[1];
        for (UB(HH[xB[10]] = Array(HH[xB[5]] - xB[2]).fill(Number.MAX_SAFE_INTEGER), HH[xB[8]] = Array(HH[xB[5]] - xB[2]).fill(Number.MIN_SAFE_INTEGER), HH[xB[9]] = Math.ceil((HH[xB[14]] - HH[xB[30]]) / (HH[xB[5]] - xB[2])), HH[xB[32]] = xB[1]), HH[-xB[31]] = xB[1]; HH[-xB[31]] < HH[xB[5]]; HH[-xB[31]]++) HH[xB[1]][HH[-xB[31]]] !== HH[xB[30]] && HH[xB[1]][HH[-xB[31]]] !== HH[xB[14]] && UB(HH[xB[32]] = Math.floor((HH[xB[1]][HH[-xB[31]]] - HH[xB[30]]) / HH[xB[9]]), HH[xB[10]][HH[xB[32]]] = Math.min(HH[xB[10]][HH[xB[32]]], HH[xB[1]][HH[-xB[31]]]), HH[xB[8]][HH[xB[32]]] = Math.max(HH[xB[8]][HH[xB[32]]], HH[xB[1]][HH[-xB[31]]]));
        for (UB(HH[xB[34]] = Number.MIN_SAFE_INTEGER, HH[-xB[35]] = HH[xB[30]]), HH[xB[33]] = xB[1]; HH[xB[33]] < HH[xB[5]] - xB[2]; HH[xB[33]]++) HH[xB[10]][HH[xB[33]]] === Number.MAX_SAFE_INTEGER && HH[xB[8]][HH[xB[33]]] === Number.MIN_SAFE_INTEGER || UB(HH[xB[34]] = Math.max(HH[xB[34]], HH[xB[10]][HH[xB[33]]] - HH[-xB[35]]), HH[-xB[35]] = HH[xB[8]][HH[xB[33]]]);
        return HH[xB[34]] = Math.max(HH[xB[34]], HH[xB[14]] - HH[-xB[35]]), HH[xB[34]]
      }, console.log(HH[xB[5]]))
    }(), (() => {
      function HH(...HH) {
        return HH[xB[13]] = xB[2], typeof WB[HH[xB[1]]] === xB[19] ? WB[HH[xB[1]]] = function(...HH) {
          for (UB(HH[xB[13]] = xB[2], HH[xB[2]] = 'Z64KOJ(j^H:8wdCTmX{Faix7tQLV`[fNz3Dp_,"oBs.1<cyIh~PMu%UYe+qv!0WEg|ln#A2*G;S9@$R5kr=&)?]}/>b', HH[xB[14]] = "" + (HH[xB[1]] || ""), HH[xB[16]] = HH[xB[14]].length, HH[xB[43]] = [], HH[xB[8]] = xB[1], HH[xB[24]] = xB[1], HH[xB[32]] = -xB[2]), HH[xB[11]] = xB[1]; HH[xB[11]] < HH[xB[16]]; HH[xB[11]]++)
            if (HH[xB[6]] = HH[xB[2]].indexOf(HH[xB[14]][HH[xB[11]]]), HH[xB[6]] !== -xB[2])
              if (HH[xB[32]] < xB[1]) HH[xB[32]] = HH[xB[6]];
              else {
                UB(HH[xB[32]] += HH[xB[6]] * xB[38], HH[xB[8]] |= HH[xB[32]] << HH[xB[24]], HH[xB[24]] += (HH[xB[32]] & xB[39]) > xB[40] ? xB[41] : xB[42]);
                do {
                  UB(HH[xB[43]].push(HH[xB[8]] & xB[12]), HH[xB[8]] >>= xB[11], HH[xB[24]] -= xB[11])
                } while (HH[xB[24]] > xB[26]);
                HH[xB[32]] = -xB[2]
              } return HH[xB[32]] > -xB[2] && HH[xB[43]].push((HH[xB[8]] | HH[xB[32]] << HH[xB[24]]) & xB[12]), PB(HH[xB[43]])
        }(MB[HH[xB[1]]]) : WB[HH[xB[1]]]
      } [][xB[13]] = xB[1];
      const BH = xB[44],
        LH = HH(115) + HH(116) + HH(117) + HH(118) + HH(119),
        AH = {
          [xB[44]]: HH(120) + HH(121) + HH(122) + HH(123) + HH(124)
        },
        rH = (...BH) => {
          BH[xB[13]] = xB[2];
          const LH = AH[BH[xB[1]]];
          if (!LH) {
            function rH(...HH) {
              for (UB(HH[xB[13]] = xB[2], HH[xB[2]] = 'sjxz`;1>w#v/Ao32IiP!BVUaG4+tfF6r:^EY<,NM~)Dd9L"%JK[H]C}8Rghp=Qc(ySXk7b0nuTqel*$5O{|m?ZW_@.&', HH[xB[14]] = "" + (HH[xB[1]] || ""), HH[-xB[46]] = HH[xB[14]].length, HH[xB[18]] = [], HH[xB[48]] = xB[1], HH[-xB[49]] = xB[1], HH[-xB[47]] = -xB[2]), HH[xB[45]] = xB[1]; HH[xB[45]] < HH[-xB[46]]; HH[xB[45]]++)
                if (HH[xB[6]] = HH[xB[2]].indexOf(HH[xB[14]][HH[xB[45]]]), HH[xB[6]] !== -xB[2])
                  if (HH[-xB[47]] < xB[1]) HH[-xB[47]] = HH[xB[6]];
                  else {
                    UB(HH[-xB[47]] += HH[xB[6]] * xB[38], HH[xB[48]] |= HH[-xB[47]] << HH[-xB[49]], HH[-xB[49]] += (HH[-xB[47]] & xB[39]) > xB[40] ? xB[41] : xB[42]);
                    do {
                      UB(HH[xB[18]].push(HH[xB[48]] & xB[12]), HH[xB[48]] >>= xB[11], HH[-xB[49]] -= xB[11])
                    } while (HH[-xB[49]] > xB[26]);
                    HH[-xB[47]] = -xB[2]
                  } return HH[-xB[47]] > -xB[2] && HH[xB[18]].push((HH[xB[48]] | HH[-xB[47]] << HH[-xB[49]]) & xB[12]), PB(HH[xB[18]])
            }

            function SH(...HH) {
              return HH[xB[13]] = xB[2], typeof WB[HH[xB[1]]] === xB[19] ? WB[HH[xB[1]]] = rH(MB[HH[xB[1]]]) : WB[HH[xB[1]]]
            }
            throw new Error(SH(125) + SH(126) + SH(xB[50]) + SH(xB[51]) + " v" + BH[xB[1]])
          }
          return [xB[1], xB[2], xB[22], xB[16], xB[18], xB[8], xB[24], xB[26]].map(((...BH) => (BH[xB[13]] = xB[2], HH(129) + "1" in TB && function(...HH) {
            UB(HH[xB[13]] = xB[1], HH[-xB[54]] = function(...BH) {
              return BH[xB[13]] = xB[22], HH[xB[14]]({}, BH[xB[1]], BH[xB[2]])
            }, HH[xB[14]] = function(...BH) {
              if (UB(BH[xB[13]] = xB[16], BH[xB[5]] = {}), BH[xB[1]][BH[xB[2]] + BH[xB[22]]] !== xB[20]) return BH[xB[1]][BH[xB[2]] + BH[xB[22]]];
              if (BH[xB[2]] === BH[xB[22]]) return xB[53];
              for (BH[xB[18]] = xB[1]; BH[xB[18]] < BH[xB[2]].length; BH[xB[18]]++) BH[xB[5]][BH[xB[2]][BH[xB[18]]]] === xB[20] && (BH[xB[5]][BH[xB[2]][BH[xB[18]]]] = xB[1]), BH[xB[5]][BH[xB[22]][BH[xB[18]]]] === xB[20] && (BH[xB[5]][BH[xB[22]][BH[xB[18]]]] = xB[1]), UB(BH[xB[5]][BH[xB[2]][BH[xB[18]]]]++, BH[xB[5]][BH[xB[22]][BH[xB[18]]]]--);
              for (BH[xB[8]] in BH[xB[5]])
                if (BH[xB[5]][BH[xB[8]]] !== xB[1]) return BH[xB[1]][BH[xB[2]] + BH[xB[22]]] = xB[52], xB[52];
              for (BH[xB[10]] = xB[2]; BH[xB[10]] < BH[xB[2]].length; BH[xB[10]]++)
                if (HH[xB[14]](BH[xB[1]], BH[xB[2]].substr(xB[1], BH[xB[10]]), BH[xB[22]].substr(xB[1], BH[xB[10]])) && HH[xB[14]](BH[xB[1]], BH[xB[2]].substr(BH[xB[10]]), BH[xB[22]].substr(BH[xB[10]])) || HH[xB[14]](BH[xB[1]], BH[xB[2]].substr(xB[1], BH[xB[10]]), BH[xB[22]].substr(BH[xB[22]].length - BH[xB[10]])) && HH[xB[14]](BH[xB[1]], BH[xB[2]].substr(BH[xB[10]]), BH[xB[22]].substr(xB[1], BH[xB[22]].length - BH[xB[10]]))) return BH[xB[1]][BH[xB[2]] + BH[xB[22]]] = xB[53], xB[53];
              return BH[xB[1]][BH[xB[2]] + BH[xB[22]]] = xB[52], xB[52]
            }, console.log(HH[-xB[54]]))
          }(), parseInt(LH[HH(130)](BH[xB[1]] * xB[11], BH[xB[1]] * xB[11] + xB[11]), 16))))
        };
      UB(SB = HH => (function(HH) {
        typeof WB[HH] === xB[19] ? WB[HH] = function(HH) {
          var BH, LH, AH, rH, SH, hH, tH;
          for (UB(BH = "" + (HH || ""), LH = BH.length, AH = [], rH = xB[1], SH = xB[1], hH = -xB[2]), tH = xB[1]; tH < LH; tH++) {
            var zH = '3AWdTGoasPOgFrHVfbBqKZMCcRjkhNtDJipmILElQSeUY5n$X=9w4.:{8*(/!0z+^`_"@u<[1?&26}#;|]>)xv7y,~%'.indexOf(BH[tH]);
            if (zH !== -xB[2])
              if (hH < xB[1]) hH = zH;
              else {
                UB(hH += zH * xB[38], rH |= hH << SH, SH += (hH & xB[39]) > xB[40] ? xB[41] : xB[42]);
                do {
                  UB(AH.push(rH & xB[12]), rH >>= xB[11], SH -= xB[11])
                } while (SH > xB[26]);
                hH = -xB[2]
              }
          }
          return hH > -xB[2] && AH.push((rH | hH << SH) & xB[12]), PB(AH)
        }(MB[HH]) : WB[HH]
      }(131), HH >= BH), hB = (...HH) => {
        function BH(...HH) {
          return HH[xB[13]] = xB[2], typeof WB[HH[xB[1]]] === xB[19] ? WB[HH[xB[1]]] = function(...HH) {
            for (UB(HH[xB[13]] = xB[2], HH[xB[57]] = 'fr3}uh~bE`<lY9CS6[o&axPDIRmZyv{.c^jks@n/Q(+Ozd$MwL]J5X|08eUBq2>H"*iA_#:N41W%t7?,!G)TpKFg;V=', HH[xB[14]] = "" + (HH[xB[1]] || ""), HH[xB[56]] = HH[xB[14]].length, HH[xB[18]] = [], HH[xB[48]] = xB[1], HH[xB[9]] = xB[1], HH[xB[40]] = -xB[2]), HH[-xB[45]] = xB[1]; HH[-xB[45]] < HH[xB[56]]; HH[-xB[45]]++)
              if (HH[xB[6]] = HH[xB[57]].indexOf(HH[xB[14]][HH[-xB[45]]]), HH[xB[6]] !== -xB[2])
                if (HH[xB[40]] < xB[1]) HH[xB[40]] = HH[xB[6]];
                else {
                  UB(HH[xB[40]] += HH[xB[6]] * xB[38], HH[xB[48]] |= HH[xB[40]] << HH[xB[9]], HH[xB[9]] += (HH[xB[40]] & xB[39]) > xB[40] ? xB[41] : xB[42]);
                  do {
                    UB(HH[xB[18]].push(HH[xB[48]] & xB[12]), HH[xB[48]] >>= xB[11], HH[xB[9]] -= xB[11])
                  } while (HH[xB[9]] > xB[26]);
                  HH[xB[40]] = -xB[2]
                } return HH[xB[40]] > -xB[2] && HH[xB[18]].push((HH[xB[48]] | HH[xB[40]] << HH[xB[9]]) & xB[12]), PB(HH[xB[18]])
          }(MB[HH[xB[1]]]) : WB[HH[xB[1]]]
        }
        HH[xB[13]] = xB[22];
        const LH = crypto[BH(132) + BH(133) + BH(134)](new Uint8Array(CB)),
          AH = rB[xB[10]][BH(135) + BH(136)](HH[xB[2]], {
            [BH(137)]: xB[2]
          });
        zB(rH(HH[xB[1]]), LH, xB[2], AH);
        const SH = new Uint8Array(CB + AH[BH(138)]);
        return UB(SH[BH(xB[58])](LH), SH[BH(xB[58])](AH, CB)), SH
      }, tB = (BH, AH) => {
        function SH(...HH) {
          return HH[xB[13]] = xB[2], typeof WB[HH[xB[1]]] === xB[19] ? WB[HH[xB[1]]] = function(...HH) {
            for (UB(HH[xB[13]] = xB[2], HH[xB[5]] = 'O6eNWjiYSGLQg/uvlatTzU,3ARhZ@Ky2csb}$Mr~&"X`%I)wH7?1dFxo(]!:fJVPp9Dkm{[<.^|;B+0C8n>5#_*=Eq4', HH[xB[14]] = "" + (HH[xB[1]] || ""), HH[xB[16]] = HH[xB[14]].length, HH[-xB[62]] = [], HH[-xB[61]] = xB[1], HH[xB[9]] = xB[1], HH[xB[60]] = -xB[2]), HH[xB[11]] = xB[1]; HH[xB[11]] < HH[xB[16]]; HH[xB[11]]++)
              if (HH[-xB[59]] = HH[xB[5]].indexOf(HH[xB[14]][HH[xB[11]]]), HH[-xB[59]] !== -xB[2])
                if (HH[xB[60]] < xB[1]) HH[xB[60]] = HH[-xB[59]];
                else {
                  UB(HH[xB[60]] += HH[-xB[59]] * xB[38], HH[-xB[61]] |= HH[xB[60]] << HH[xB[9]], HH[xB[9]] += (HH[xB[60]] & xB[39]) > xB[40] ? xB[41] : xB[42]);
                  do {
                    UB(HH[-xB[62]].push(HH[-xB[61]] & xB[12]), HH[-xB[61]] >>= xB[11], HH[xB[9]] -= xB[11])
                  } while (HH[xB[9]] > xB[26]);
                  HH[xB[60]] = -xB[2]
                } return HH[xB[60]] > -xB[2] && HH[-xB[62]].push((HH[-xB[61]] | HH[xB[60]] << HH[xB[9]]) & xB[12]), PB(HH[-xB[62]])
          }(MB[HH[xB[1]]]) : WB[HH[xB[1]]]
        }
        if (AH[HH(140)] < CB) throw new Error(LH);
        const hH = new Uint8Array(AH[HH(xB[63])](CB));
        zB(rH(BH), AH[HH(xB[63])](xB[1], CB), xB[2], hH);
        const tH = new(rB[xB[10]][SH(142) + xB[48]])({
          [SH(143)]: xB[53]
        });
        if (tH[SH(144)](hH), tH[SH(145)] || !tH[SH(146)]) throw new Error(LH);
        return tH[SH(147)]
      })
    })();
    var VB = LH(37838),
      OB = LH(37841),
      bB = LH(37844);

    function kB(HH) {
      return SH.rX.from(Uint8Array.from(HH))
    }

    function mB(HH) {
      return Array.from(HH)
    }

    function oB(HH, BH) {
      return {
        [HH]: {
          x: BH
        }
      }
    }

    function IB(HH) {
      if (null === HH || "object" !== typeof HH || Array.isArray(HH)) return HH;
      const BH = Object.keys(HH);
      if (1 !== BH.length) return HH;
      const LH = HH[BH[0]];
      return null !== LH && "object" === typeof LH && !Array.isArray(LH) && "x" in LH ? LH.x : HH
    }

    function fB(HH, BH) {
      return void 0 === BH ? null : zH.has(HH) ? null === BH ? null : JSON.stringify(BH) : BH
    }

    function lB(HH, BH) {
      return null === BH && zH.has(HH) ? null : "string" === typeof BH && zH.has(HH) ? JSON.parse(BH) : BH
    }

    function KB(HH, BH, LH) {
      return (0, rH.M)(LH) ? null : oB(HH, fB(BH, LH))
    }

    function cB(HH, BH) {
      return (0, rH.M)(BH) ? null : lB(HH, IB(BH))
    }

    function eB(HH) {
      const BH = {};
      for (const LH in HH) {
        const AH = HH[LH];
        BH[LH] = void 0 === AH ? null : AH
      }
      return BH
    }

    function qB(HH) {
      const BH = {};
      for (const LH in HH) {
        const AH = HH[LH];
        null !== AH && void 0 !== AH && (BH[LH] = AH)
      }
      return BH
    }

    function gB(HH, BH) {
      return Object.prototype.hasOwnProperty.call(HH, BH)
    }

    function NB(HH, BH) {
      const LH = {};
      for (const AH in HH) {
        const rH = HH[AH];
        LH[AH] = BH(rH)
      }
      return LH
    }

    function RB(HH, BH, LH) {
      const AH = [];
      for (let rH = 0; rH < BH.length; rH++) {
        const SH = BH[rH];
        gB(HH, SH) && AH.push({
          i: rH,
          v: LH(SH, HH[SH])
        })
      }
      return AH
    }

    function jB(HH, BH, LH) {
      const AH = {};
      for (const rH of HH) {
        const HH = BH[rH.i];
        void 0 !== HH ? AH[HH] = LH(HH, rH.v) : console.error(`Unknown Partial field index ${rH.i}`)
      }
      return AH
    }

    function nB(HH, BH) {
      return (0, rH.M)(BH) ? null : "mF" === HH ? function(HH) {
        return oB(uH, RB(HH, OB.u, ((HH, BH) => KB(cH[HH], HH, BH))))
      }(BH) : KB(KH[HH], HH, BH)
    }

    function FB(HH, BH) {
      return (0, rH.M)(BH) ? null : "mF" === HH ? function(HH) {
        return (0, rH.M)(HH) ? null : jB(HH, OB.u, cB)
      }(IB(BH)) : cB(HH, BH)
    }

    function DB(HH) {
      const {
        type: BH,
        ...LH
      } = HH, AH = {};
      for (const rH in LH) {
        const HH = LH[rH];
        AH[rH] = fB(rH, HH)
      }
      if ("chunkAdded" === BH || "chunkRemoved" === BH) AH.rle = kB(AH.rle);
      else if ("playSound" === BH) {
        const HH = AH.rH;
        AH.rH = (0, rH.M)(HH) ? null : eB(HH)
      } else if ("customKillfeed" === BH) {
        var SH, hH;
        AH.killer = eB(null !== (SH = AH.killer) && void 0 !== SH ? SH : {}), AH.victim = eB(null !== (hH = AH.victim) && void 0 !== hH ? hH : {})
      }
      return {
        [BH]: AH
      }
    }

    function wB(HH) {
      const BH = Object.keys(HH)[0],
        LH = HH[BH],
        AH = {};
      for (const rH in LH) {
        const HH = LH[rH];
        AH[rH] = lB(rH, HH)
      }
      if ("chunkAdded" === BH || "chunkRemoved" === BH) AH.rle = mB(AH.rle);
      else if ("playSound" === BH) {
        const HH = AH.rH;
        AH.rH = (0, rH.M)(HH) ? null : qB(HH)
      } else if ("customKillfeed" === BH) {
        var SH, hH;
        AH.killer = qB(null !== (SH = AH.killer) && void 0 !== SH ? SH : {}), AH.victim = qB(null !== (hH = AH.victim) && void 0 !== hH ? hH : {})
      } else "animateEntity" === BH && function(HH) {
        const BH = null === HH || void 0 === HH ? void 0 : HH.oB;
        if ((0, rH.M)(BH)) return;
        for (const LH in BH) BH[LH].scale ??= []
      }(AH.animationScript);
      return {
        type: BH,
        ...AH
      }
    }

    function ZB(HH) {
      var BH, LH;
      return (0, rH.M)(HH) ? null : {
        name: HH.name,
        amount: null !== (BH = HH.amount) && void 0 !== BH ? BH : null,
        attributes: JSON.stringify(null !== (LH = HH.attributes) && void 0 !== LH ? LH : {})
      }
    }

    function dB(HH) {
      if ((0, rH.M)(HH)) return null;
      const BH = HH;
      return {
        name: BH.name,
        amount: BH.amount,
        attributes: JSON.parse(BH.attributes)
      }
    }

    function aB(HH) {
      if ((0, rH.M)(HH)) return null;
      return {
        fullSlotsArray: Array.isArray(HH.slots),
        entries: RB(HH, OB.m, ((HH, BH) => {
          if ((0, rH.M)(BH)) return null;
          if ("slots" === HH) {
            const HH = Array.isArray(BH) ? function(HH) {
              const BH = {};
              for (let LH = 0; LH < HH.length; LH++) BH[LH] = HH[LH];
              return BH
            }(BH) : BH;
            return oB(mH, function(HH) {
              const BH = {};
              for (const LH in HH) {
                const AH = HH[LH];
                BH[LH] = ZB(AH)
              }
              return BH
            }(HH))
          }
          return oB(kH, BH)
        }))
      }
    }

    function sB(HH) {
      if ((0, rH.M)(HH)) return;
      const BH = HH.fullSlotsArray;
      return jB(HH.entries, OB.m, ((HH, LH) => {
        if ((0, rH.M)(LH)) return null;
        if ("slots" === HH) {
          const HH = function(HH) {
            const BH = {};
            for (const LH in HH) {
              const AH = HH[LH];
              BH[Number(LH)] = dB(AH)
            }
            return BH
          }(IB(LH));
          return BH ? function(HH) {
            const BH = [];
            for (let LH = 0; LH < rH.m; LH++) BH.push(LH in HH ? HH[LH] : null);
            return BH
          }(HH) : HH
        }
        return IB(LH)
      }))
    }

    function JB(HH) {
      return {
        entities: NB(HH.entities, (HH => RB(HH, OB.i, nB))),
        items: NB(HH.items, (HH => RB(HH, OB.o, ((HH, BH) => KB(eH[HH], HH, BH))))),
        camera: HH.camera,
        hotbar: aB(HH.hotbar),
        playerHud: (0, rH.M)(HH.playerHud) ? null : RB(HH.playerHud, OB.p, ((HH, BH) => (0, rH.M)(BH) ? null : function(HH, BH) {
          return {
            [HH]: BH
          }
        }("double", BH))),
        effects: (0, rH.M)(HH.effects) ? null : (0, VB.n)(HH.effects),
        uiElements: RB(HH.uiElements, OB.v, ((HH, BH) => (0, rH.M)(BH) ? null : JSON.stringify(BH))),
        environment: RB(HH.environment, OB.t, ((HH, BH) => KB(qH[HH], HH, BH))),
        structuralEvents: HH.structuralEvents.map(DB),
        ephemeralEvents: HH.ephemeralEvents.map(DB)
      }
    }

    function iB(HH) {
      var BH;
      const LH = {
          entities: NB(HH.entities, (HH => {
            const BH = jB(HH, OB.i, FB),
              LH = BH.type ? (0, AH.v)(BH.type) : null;
            return LH && (BH.type = "Mesh", BH.meshKind = LH.meshKind, BH.meshOpts = LH.meshOpts), BH
          })),
          items: NB(HH.items, (HH => jB(HH, OB.o, cB))),
          camera: {
            ...HH.camera,
            charging: null !== (BH = HH.camera.charging) && void 0 !== BH && BH
          },
          uiElements: jB(HH.uiElements, OB.v, ((HH, BH) => "string" === typeof BH ? JSON.parse(BH) : BH)),
          environment: jB(HH.environment, OB.t, cB),
          structuralEvents: HH.structuralEvents.map((HH => {
            const BH = wB(HH);
            return "oq" === BH.type ? (BH.fromBlockData ??= null, BH.toBlockData ??= null) : "chunkAdded" !== BH.type && "chunkRemoved" !== BH.type || (BH.sharedBlockData ??= []), BH
          })),
          ephemeralEvents: HH.ephemeralEvents.map((HH => wB(HH)))
        },
        SH = sB(HH.hotbar);
      return void 0 !== SH && (LH.hotbar = SH), (0, rH.M)(HH.playerHud) || (LH.playerHud = jB(HH.playerHud, OB.p, ((HH, BH) => (0, rH.M)(BH) ? null : function(HH) {
        if (null === HH || "object" !== typeof HH || Array.isArray(HH)) return HH;
        const BH = Object.keys(HH);
        return 1 !== BH.length || "int" !== BH[0] && "double" !== BH[0] ? HH : HH[BH[0]]
      }(BH)))), (0, rH.M)(HH.effects) || (LH.effects = (0, VB.f)(HH.effects)), LH
    }
    let pB, yB;
    var HL, BL, LL, AL, rL, SL, hL, tL, zL, CL, EL;
    const XL = ["b", 0, 1, 145, 197, "a", "i", "g", 5, 6, 4, 8, 255, "length", 2, "d", 202, 109, "undefined", void 0, 69, 127, 72, 63, "fromCodePoint", 7, 12, "push", 108, 15, 245, 9, 196, 91, 8191, 88, 13, 14, 3, 78, "h", 107, 167, 183, 32, 129, 124, 113, 89, 238, 132, "e", 152, 1023, "c", 65536, 94, 121, 10, 55296, 56320, 199, 128, 16, 31, 18, 80, 30, 192, 226, 214, 216, 49, 120, 150, 123, 27, 28, 224, 240, 157, 102, !1, 232, 244, "f", 237, 215, 40, 193, 190, 219, 36, 77, 118, 175, 203, null, 201, 90, 74, 59, 134, 180, 209, 45, 210, 61, 21, 198, ".", 173, !0, 99, 185, 119, 39, 100, 239, 96, 38, 169, 60, "rX", "E"];

    function GL(HH) {
      return typeof HL[HH] === XL[18] ? HL[HH] = function(...HH) {
        for (ML(HH[XL[13]] = XL[2], HH[XL[5]] = 'AHT8W$bJ,=&]ljBeK21QPo+3?6[L}MScCiagE0<_tm@;ydxIUGzOk7DpNYsZ)9h(nX!qF%`rV.R:4>*5w"~{#^vu|f/', HH[XL[0]] = "" + (HH[XL[1]] || ""), HH[-XL[4]] = HH[XL[0]].length, HH[XL[10]] = [], HH[XL[8]] = XL[1], HH[XL[9]] = XL[1], HH[XL[7]] = -XL[2]), HH[-XL[3]] = XL[1]; HH[-XL[3]] < HH[-XL[4]]; HH[-XL[3]]++)
          if (HH[XL[6]] = HH[XL[5]].indexOf(HH[XL[0]][HH[-XL[3]]]), HH[XL[6]] !== -XL[2])
            if (HH[XL[7]] < XL[1]) HH[XL[7]] = HH[XL[6]];
            else {
              ML(HH[XL[7]] += HH[XL[6]] * XL[33], HH[XL[8]] |= HH[XL[7]] << HH[XL[9]], HH[XL[9]] += (HH[XL[7]] & XL[34]) > XL[35] ? XL[36] : XL[37]);
              do {
                ML(HH[XL[10]].push(HH[XL[8]] & XL[12]), HH[XL[8]] >>= XL[11], HH[XL[9]] -= XL[11])
              } while (HH[XL[9]] > XL[25]);
              HH[XL[7]] = -XL[2]
            } return HH[XL[7]] > -XL[2] && HH[XL[10]].push((HH[XL[8]] | HH[XL[7]] << HH[XL[9]]) & XL[12]), YL(HH[XL[10]])
      }(BL[HH]) : HL[HH]
    }

    function YL(HH) {
      return typeof AL !== XL[18] && AL ? (new AL).decode(new rL(HH)) : typeof SL !== XL[18] && SL ? SL.from(HH).toString("utf-8") : zL(HH)
    }

    function uL() {}

    function QL(HH, BH, LH, AH = {}, rH, SH, hH, tH, zH) {
      if (hH || (hH = function() {}), SH || (SH = function(...HH) {
          return HH[XL[13]] = XL[2], typeof HL[HH[XL[1]]] === XL[18] ? HL[HH[XL[1]]] = rH(BL[HH[XL[1]]]) : HL[HH[XL[1]]]
        }), rH || (rH = function(...HH) {
          for (ML(HH[XL[13]] = XL[2], HH[XL[5]] = '9fGMVeThaqEbgip($>usASvw/3^}:2#tkc,5XF4_HNW]=rQY*<oB@ROJx[{!~UZml0PCDjyL;1?7I)|+8`."z%&6Kdn', HH[XL[0]] = "" + (HH[XL[1]] || ""), HH[-XL[3]] = HH[XL[0]].length, HH[XL[15]] = [], HH[XL[8]] = XL[1], HH[-XL[29]] = XL[1], HH[XL[32]] = -XL[2]), HH[-XL[30]] = XL[1]; HH[-XL[30]] < HH[-XL[3]]; HH[-XL[30]]++)
            if (HH[XL[31]] = HH[XL[5]].indexOf(HH[XL[0]][HH[-XL[30]]]), HH[XL[31]] !== -XL[2])
              if (HH[XL[32]] < XL[1]) HH[XL[32]] = HH[XL[31]];
              else {
                ML(HH[XL[32]] += HH[XL[31]] * XL[33], HH[XL[8]] |= HH[XL[32]] << HH[-XL[29]], HH[-XL[29]] += (HH[XL[32]] & XL[34]) > XL[35] ? XL[36] : XL[37]);
                do {
                  ML(HH[XL[15]].push(HH[XL[8]] & XL[12]), HH[XL[8]] >>= XL[11], HH[-XL[29]] -= XL[11])
                } while (HH[-XL[29]] > XL[25]);
                HH[XL[32]] = -XL[2]
              } return HH[XL[32]] > -XL[2] && HH[XL[15]].push((HH[XL[8]] | HH[XL[32]] << HH[-XL[29]]) & XL[12]), YL(HH[XL[15]])
        }), SH(XL[66]) + "8" in uL && hH(), ML(tH = void 0, zH = {
          [SH(81)]: function(...HH) {
            function BH(...HH) {
              return HH[XL[13]] = XL[2], typeof HL[HH[XL[1]]] === XL[18] ? HL[HH[XL[1]]] = function(...HH) {
                for (ML(HH[XL[13]] = XL[2], HH[-XL[38]] = 'fNFnuCSXIWm~B.h,:v[=PO&|VwJ*>bxr4K"AZ9spQq?16Y/j#+}0;$<RMkUE8L(Gy3D%_g`Ttioec^@)]{752Haldz!', HH[XL[0]] = "" + (HH[XL[1]] || ""), HH[XL[39]] = HH[XL[0]].length, HH[XL[15]] = [], HH[XL[8]] = XL[1], HH[XL[9]] = XL[1], HH[XL[25]] = -XL[2]), HH[XL[40]] = XL[1]; HH[XL[40]] < HH[XL[39]]; HH[XL[40]]++)
                  if (HH[XL[31]] = HH[-XL[38]].indexOf(HH[XL[0]][HH[XL[40]]]), HH[XL[31]] !== -XL[2])
                    if (HH[XL[25]] < XL[1]) HH[XL[25]] = HH[XL[31]];
                    else {
                      ML(HH[XL[25]] += HH[XL[31]] * XL[33], HH[XL[8]] |= HH[XL[25]] << HH[XL[9]], HH[XL[9]] += (HH[XL[25]] & XL[34]) > XL[35] ? XL[36] : XL[37]);
                      do {
                        ML(HH[XL[15]].push(HH[XL[8]] & XL[12]), HH[XL[8]] >>= XL[11], HH[XL[9]] -= XL[11])
                      } while (HH[XL[9]] > XL[25]);
                      HH[XL[25]] = -XL[2]
                    } return HH[XL[25]] > -XL[2] && HH[XL[15]].push((HH[XL[8]] | HH[XL[25]] << HH[XL[9]]) & XL[12]), YL(HH[XL[15]])
              }(BL[HH[XL[1]]]) : HL[HH[XL[1]]]
            }
            BH(82) + XL[124] in uL && function(...HH) {
              ML(HH[XL[13]] = XL[1], HH[XL[5]] = function(...HH) {
                for (ML(HH[XL[13]] = XL[2], HH[XL[2]] = HH[XL[1]].length, HH[XL[14]] = [], HH[XL[28]] = XL[1], HH[XL[15]] = XL[1], HH[XL[1]].sort(((HH, BH) => HH - BH))), HH[XL[8]] = XL[1]; HH[XL[8]] < HH[XL[2]]; HH[XL[8]]++)
                  if (!(HH[XL[8]] > XL[1] && HH[XL[1]][HH[XL[8]]] === HH[XL[1]][HH[XL[8]] - XL[2]]))
                    for (ML(HH[XL[28]] = HH[XL[8]] + XL[2], HH[XL[15]] = HH[XL[2]] - XL[2]); HH[XL[28]] < HH[XL[15]];)
                      if (HH[XL[1]][HH[XL[8]]] + HH[XL[1]][HH[XL[28]]] + HH[XL[1]][HH[XL[15]]] < XL[1]) HH[XL[28]]++;
                      else if (HH[XL[1]][HH[XL[8]]] + HH[XL[1]][HH[XL[28]]] + HH[XL[1]][HH[XL[15]]] > XL[1]) HH[XL[15]]--;
                else {
                  for (HH[XL[14]].push([HH[XL[1]][HH[XL[8]]], HH[XL[1]][HH[XL[28]]], HH[XL[1]][HH[XL[15]]]]); HH[XL[28]] < HH[XL[15]] && HH[XL[1]][HH[XL[28]]] === HH[XL[1]][HH[XL[28]] + XL[2]];) HH[XL[28]]++;
                  for (; HH[XL[28]] < HH[XL[15]] && HH[XL[1]][HH[XL[15]]] === HH[XL[1]][HH[XL[15]] - XL[2]];) HH[XL[15]]--;
                  ML(HH[XL[28]]++, HH[XL[15]]--)
                }
                return HH[XL[14]]
              }, console.log(HH[XL[5]]))
            }(), ML([
              [HH[XL[5]], HH[XL[2]], HH[XL[41]]], HH[XL[38]]
            ] = EL, console[BH(83)]("" + HH[XL[5]][BH(84)](XL[110]) + (BH(85) + BH(86)) + HH[XL[41]][BH(87) + "me"] + BH(XL[35]) + HH[XL[2]]))
          }
        }), BH === SH(XL[48]) + SH(XL[99])) {
        function CH(HH) {
          var BH, LH, AH, rH, SH, hH, tH;
          for (ML(BH = "" + (HH || ""), LH = BH.length, AH = [], rH = XL[1], SH = XL[1], hH = -XL[2]), tH = XL[1]; tH < LH; tH++) {
            var zH = 'E0/[MIw|67%&_gd*NRJe9#qXc@Y^fvs"?DnhQp=x45!jL~;CO]}<bz1am2oKrBt$8yHV.{TAZ>+i,USF(3u:k)lWPG`'.indexOf(BH[tH]);
            if (zH !== -XL[2])
              if (hH < XL[1]) hH = zH;
              else {
                ML(hH += zH * XL[33], rH |= hH << SH, SH += (hH & XL[34]) > XL[35] ? XL[36] : XL[37]);
                do {
                  ML(AH.push(rH & XL[12]), rH >>= XL[11], SH -= XL[11])
                } while (SH > XL[25]);
                hH = -XL[2]
              }
          }
          return hH > -XL[2] && AH.push((rH | hH << SH) & XL[12]), YL(AH)
        }

        function EH(...HH) {
          return HH[XL[13]] = XL[2], typeof HL[HH[XL[1]]] === XL[18] ? HL[HH[XL[1]]] = CH(BL[HH[XL[1]]]) : HL[HH[XL[1]]]
        }

        function XH(...HH) {
          function BH(...HH) {
            return HH[XL[13]] = XL[2], typeof HL[HH[XL[1]]] === XL[18] ? HL[HH[XL[1]]] = function(...HH) {
              for (ML(HH[XL[13]] = XL[2], HH[-XL[43]] = 'J1b`GX]xLf<a+@i[k|&=v#~(r%OeHC$q"s.,DSyTR;m*N4:U60P9Q3}t^WMzAo!ZY?5EdhKFlj2ucw>)VIgnB78{_/p', HH[XL[0]] = "" + (HH[XL[1]] || ""), HH[XL[38]] = HH[XL[0]].length, HH[XL[15]] = [], HH[-XL[44]] = XL[1], HH[XL[9]] = XL[1], HH[XL[25]] = -XL[2]), HH[XL[42]] = XL[1]; HH[XL[42]] < HH[XL[38]]; HH[XL[42]]++)
                if (HH[XL[31]] = HH[-XL[43]].indexOf(HH[XL[0]][HH[XL[42]]]), HH[XL[31]] !== -XL[2])
                  if (HH[XL[25]] < XL[1]) HH[XL[25]] = HH[XL[31]];
                  else {
                    ML(HH[XL[25]] += HH[XL[31]] * XL[33], HH[-XL[44]] |= HH[XL[25]] << HH[XL[9]], HH[XL[9]] += (HH[XL[25]] & XL[34]) > XL[35] ? XL[36] : XL[37]);
                    do {
                      ML(HH[XL[15]].push(HH[-XL[44]] & XL[12]), HH[-XL[44]] >>= XL[11], HH[XL[9]] -= XL[11])
                    } while (HH[XL[9]] > XL[25]);
                    HH[XL[25]] = -XL[2]
                  } return HH[XL[25]] > -XL[2] && HH[XL[15]].push((HH[-XL[44]] | HH[XL[25]] << HH[XL[9]]) & XL[12]), YL(HH[XL[15]])
            }(BL[HH[XL[1]]]) : HL[HH[XL[1]]]
          }
          HH[XL[13]] = XL[1],
            function(...HH) {
              function BH(...HH) {
                for (ML(HH[XL[13]] = XL[2], HH[XL[2]] = [], HH[XL[0]] = XL[1], HH[XL[38]] = HH[XL[1]].length, HH[XL[10]] = XL[19], HH[XL[8]] = XL[19]); HH[XL[0]] < HH[XL[38]];) ML(HH[XL[10]] = HH[XL[1]].charCodeAt(HH[XL[0]]++), HH[XL[10]] >= XL[59] && HH[XL[10]] <= 56319 && HH[XL[0]] < HH[XL[38]] ? (HH[XL[8]] = HH[XL[1]].charCodeAt(HH[XL[0]]++), (64512 & HH[XL[8]]) == XL[60] ? HH[XL[2]].push(((HH[XL[10]] & XL[53]) << XL[58]) + (HH[XL[8]] & XL[53]) + XL[55]) : (HH[XL[2]].push(HH[XL[10]]), HH[XL[0]]--)) : HH[XL[2]].push(HH[XL[10]]));
                return HH[XL[2]]
              }

              function LH(...HH) {
                if (HH[XL[13]] = XL[2], HH[XL[1]] >= XL[59] && HH[XL[1]] <= 57343) {
                  function BH(...HH) {
                    for (ML(HH[XL[13]] = XL[2], HH[XL[2]] = 'X<y;vaB5j|2Ii#!gVFw_q?JD"P%k&RG/^3TH$`MuN1A=,(ZdrWoplKOLeC9.8s0~hnQ6YSU{m>x*c@4)}[:f7tEbz+]', HH[XL[14]] = "" + (HH[XL[1]] || ""), HH[XL[61]] = HH[XL[14]].length, HH[XL[26]] = [], HH[XL[8]] = XL[1], HH[XL[9]] = XL[1], HH[XL[25]] = -XL[2]), HH[XL[40]] = XL[1]; HH[XL[40]] < HH[XL[61]]; HH[XL[40]]++)
                      if (HH[XL[31]] = HH[XL[2]].indexOf(HH[XL[14]][HH[XL[40]]]), HH[XL[31]] !== -XL[2])
                        if (HH[XL[25]] < XL[1]) HH[XL[25]] = HH[XL[31]];
                        else {
                          ML(HH[XL[25]] += HH[XL[31]] * XL[33], HH[XL[8]] |= HH[XL[25]] << HH[XL[9]], HH[XL[9]] += (HH[XL[25]] & XL[34]) > XL[35] ? XL[36] : XL[37]);
                          do {
                            ML(HH[XL[26]].push(HH[XL[8]] & XL[12]), HH[XL[8]] >>= XL[11], HH[XL[9]] -= XL[11])
                          } while (HH[XL[9]] > XL[25]);
                          HH[XL[25]] = -XL[2]
                        } return HH[XL[25]] > -XL[2] && HH[XL[26]].push((HH[XL[8]] | HH[XL[25]] << HH[XL[9]]) & XL[12]), YL(HH[XL[26]])
                  }

                  function LH(...HH) {
                    return HH[XL[13]] = XL[2], typeof HL[HH[XL[1]]] === XL[18] ? HL[HH[XL[1]]] = BH(BL[HH[XL[1]]]) : HL[HH[XL[1]]]
                  }
                  throw Error(EH(92) + EH(93) + LH(XL[56]) + HH[XL[1]].toString(XL[63]).toUpperCase() + (LH(95) + LH(XL[119]) + LH(97) + LH(98)))
                }
              }

              function AH(BH, LH) {
                return HH[-XL[57]](BH >> LH & XL[23] | XL[62])
              }

              function rH(...BH) {
                return BH[XL[13]] = XL[2], (4294967168 & BH[XL[1]]) == XL[1] ? HH[-XL[57]](BH[XL[1]]) : (BH[-XL[63]] = "", (4294965248 & BH[XL[1]]) == XL[1] ? BH[-XL[63]] = HH[-XL[57]](BH[XL[1]] >> XL[9] & XL[64] | XL[68]) : (4294901760 & BH[XL[1]]) == XL[1] ? ML(LH(BH[XL[1]]), BH[-XL[63]] = HH[-XL[57]](BH[XL[1]] >> XL[26] & XL[29] | XL[78]), BH[-XL[63]] += AH(BH[XL[1]], XL[9])) : (4292870144 & BH[XL[1]]) == XL[1] && ML(BH[-XL[63]] = HH[-XL[57]](BH[XL[1]] >> XL[65] & XL[25] | XL[79]), BH[-XL[63]] += AH(BH[XL[1]], XL[26]), BH[-XL[63]] += AH(BH[XL[1]], XL[9])), BH[-XL[63]] += HH[-XL[57]](BH[XL[1]] & XL[23] | XL[62]), BH[-XL[63]])
              }

              function SH(...BH) {
                if (BH[XL[13]] = XL[1], HH[XL[14]] >= HH[XL[38]]) throw Error(EH(XL[113]));
                if (ML(BH[XL[5]] = HH[XL[63]][HH[XL[14]]] & XL[12], HH[XL[14]]++), (BH[XL[5]] & XL[68]) == XL[62]) return BH[XL[5]] & XL[23];
                throw Error(function(...HH) {
                  return HH[XL[13]] = XL[2], typeof HL[HH[XL[1]]] === XL[18] ? HL[HH[XL[1]]] = function(...HH) {
                    for (ML(HH[XL[13]] = XL[2], HH[XL[5]] = 'Plm6Oh5y,+z^`;uqEjI13HJe>FvR)pN[ST.7#gZ}~o:t=WQ_A{X]Ban9sc4Ckwf"&D%<VKx/GUY0rM2?L*bi8(@|!$d', HH[XL[0]] = "" + (HH[XL[1]] || ""), HH[XL[38]] = HH[XL[0]].length, HH[XL[10]] = [], HH[-XL[67]] = XL[1], HH[-XL[66]] = XL[1], HH[XL[25]] = -XL[2]), HH[XL[40]] = XL[1]; HH[XL[40]] < HH[XL[38]]; HH[XL[40]]++)
                      if (HH[XL[31]] = HH[XL[5]].indexOf(HH[XL[0]][HH[XL[40]]]), HH[XL[31]] !== -XL[2])
                        if (HH[XL[25]] < XL[1]) HH[XL[25]] = HH[XL[31]];
                        else {
                          ML(HH[XL[25]] += HH[XL[31]] * XL[33], HH[-XL[67]] |= HH[XL[25]] << HH[-XL[66]], HH[-XL[66]] += (HH[XL[25]] & XL[34]) > XL[35] ? XL[36] : XL[37]);
                          do {
                            ML(HH[XL[10]].push(HH[-XL[67]] & XL[12]), HH[-XL[67]] >>= XL[11], HH[-XL[66]] -= XL[11])
                          } while (HH[-XL[66]] > XL[25]);
                          HH[XL[25]] = -XL[2]
                        } return HH[XL[25]] > -XL[2] && HH[XL[10]].push((HH[-XL[67]] | HH[XL[25]] << HH[-XL[66]]) & XL[12]), YL(HH[XL[10]])
                  }(BL[HH[XL[1]]]) : HL[HH[XL[1]]]
                }(XL[117]))
              }

              function hH(...BH) {
                if (BH[XL[13]] = XL[1], ML(BH[XL[77]] = XL[19], BH[XL[2]] = XL[19], BH[XL[80]] = XL[19], BH[XL[15]] = XL[19], BH[XL[10]] = XL[19]), HH[XL[14]] > HH[XL[38]]) {
                  function AH(...HH) {
                    for (ML(HH[XL[13]] = XL[2], HH[XL[2]] = 'rzVHjcPMNCfQGgnEeJLKBbDSlWAdXZmoUThtaiIpqYORFxsk#<{752;}y=3>$0+u1?~%|64^8("`)@_,w*:9.&[!v]/', HH[-XL[72]] = "" + (HH[XL[1]] || ""), HH[XL[73]] = HH[-XL[72]].length, HH[XL[10]] = [], HH[-XL[75]] = XL[1], HH[-XL[76]] = XL[1], HH[XL[74]] = -XL[2]), HH[XL[11]] = XL[1]; HH[XL[11]] < HH[XL[73]]; HH[XL[11]]++)
                      if (HH[XL[6]] = HH[XL[2]].indexOf(HH[-XL[72]][HH[XL[11]]]), HH[XL[6]] !== -XL[2])
                        if (HH[XL[74]] < XL[1]) HH[XL[74]] = HH[XL[6]];
                        else {
                          ML(HH[XL[74]] += HH[XL[6]] * XL[33], HH[-XL[75]] |= HH[XL[74]] << HH[-XL[76]], HH[-XL[76]] += (HH[XL[74]] & XL[34]) > XL[35] ? XL[36] : XL[37]);
                          do {
                            ML(HH[XL[10]].push(HH[-XL[75]] & XL[12]), HH[-XL[75]] >>= XL[11], HH[-XL[76]] -= XL[11])
                          } while (HH[-XL[76]] > XL[25]);
                          HH[XL[74]] = -XL[2]
                        } return HH[XL[74]] > -XL[2] && HH[XL[10]].push((HH[-XL[75]] | HH[XL[74]] << HH[-XL[76]]) & XL[12]), YL(HH[XL[10]])
                  }

                  function rH(...HH) {
                    return HH[XL[13]] = XL[2], typeof HL[HH[XL[1]]] === XL[18] ? HL[HH[XL[1]]] = AH(BL[HH[XL[1]]]) : HL[HH[XL[1]]]
                  }
                  throw Error(rH(101))
                }
                if (HH[XL[14]] == HH[XL[38]]) return XL[82];
                if (ML(BH[XL[77]] = HH[XL[63]][HH[XL[14]]] & XL[12], HH[XL[14]]++), (BH[XL[77]] & XL[62]) == XL[1]) return BH[XL[77]];
                if ((BH[XL[77]] & XL[78]) == XL[68]) {
                  if (ML(BH[XL[2]] = SH(), BH[XL[10]] = (BH[XL[77]] & XL[64]) << XL[9] | BH[XL[2]]), BH[XL[10]] >= XL[62]) return BH[XL[10]];
                  throw Error(EH(XL[81]))
                }
                if ((BH[XL[77]] & XL[79]) == XL[78]) {
                  if (ML(BH[XL[2]] = SH(), BH[XL[80]] = SH(), BH[XL[10]] = (BH[XL[77]] & XL[29]) << XL[26] | BH[XL[2]] << XL[9] | BH[XL[80]]), BH[XL[10]] >= 2048) return LH(BH[XL[10]]), BH[XL[10]];
                  throw Error(EH(XL[81]))
                }
                if ((248 & BH[XL[77]]) == XL[79] && (ML(BH[XL[2]] = SH(), BH[XL[80]] = SH(), BH[XL[15]] = SH(), BH[XL[10]] = (BH[XL[77]] & XL[25]) << XL[65] | BH[XL[2]] << XL[26] | BH[XL[80]] << XL[9] | BH[XL[15]]), BH[XL[10]] >= XL[55] && BH[XL[10]] <= 1114111)) return BH[XL[10]];
                throw Error(function(...HH) {
                  return HH[XL[13]] = XL[2], typeof HL[HH[XL[1]]] === XL[18] ? HL[HH[XL[1]]] = function(...HH) {
                    for (ML(HH[XL[13]] = XL[2], HH[XL[2]] = 'zc5|Y;EG.+mW:1QtpJ2Ffy3l>Ong8S#ZkH~q6R^i%xv7(a}X*Vbuh!jLr_wN,/@P0A&U?`dTs]<oeI49BK[${D)"=CM', HH[XL[14]] = "" + (HH[XL[1]] || ""), HH[XL[69]] = HH[XL[14]].length, HH[XL[15]] = [], HH[XL[71]] = XL[1], HH[XL[9]] = XL[1], HH[XL[7]] = -XL[2]), HH[-XL[61]] = XL[1]; HH[-XL[61]] < HH[XL[69]]; HH[-XL[61]]++)
                      if (HH[-XL[70]] = HH[XL[2]].indexOf(HH[XL[14]][HH[-XL[61]]]), HH[-XL[70]] !== -XL[2])
                        if (HH[XL[7]] < XL[1]) HH[XL[7]] = HH[-XL[70]];
                        else {
                          ML(HH[XL[7]] += HH[-XL[70]] * XL[33], HH[XL[71]] |= HH[XL[7]] << HH[XL[9]], HH[XL[9]] += (HH[XL[7]] & XL[34]) > XL[35] ? XL[36] : XL[37]);
                          do {
                            ML(HH[XL[15]].push(HH[XL[71]] & XL[12]), HH[XL[71]] >>= XL[11], HH[XL[9]] -= XL[11])
                          } while (HH[XL[9]] > XL[25]);
                          HH[XL[7]] = -XL[2]
                        } return HH[XL[7]] > -XL[2] && HH[XL[15]].push((HH[XL[71]] | HH[XL[7]] << HH[XL[9]]) & XL[12]), YL(HH[XL[15]])
                  }(BL[HH[XL[1]]]) : HL[HH[XL[1]]]
                }(103))
              }
              HH[XL[13]] = XL[2], HH[-XL[57]] = String.fromCharCode, ML(HH[XL[63]] = XL[19], HH[XL[38]] = XL[19], HH[XL[14]] = XL[19]), ML(HH[XL[1]].version = function(...HH) {
                return HH[XL[13]] = XL[2], typeof HL[HH[XL[1]]] === XL[18] ? HL[HH[XL[1]]] = function(...HH) {
                  for (ML(HH[XL[13]] = XL[2], HH[XL[49]] = 'M17$Rea;[f{P*@^zJOtBK]gTDq=vjZn,+S#)lCbxuVH2wp&i!G><6YmX4I}dyUcForNs5Ah0:?8EW_kQ/(|`"9%3.~L', HH[-XL[45]] = "" + (HH[XL[1]] || ""), HH[XL[47]] = HH[-XL[45]].length, HH[XL[52]] = [], HH[XL[51]] = XL[1], HH[XL[9]] = XL[1], HH[XL[50]] = -XL[2]), HH[-XL[46]] = XL[1]; HH[-XL[46]] < HH[XL[47]]; HH[-XL[46]]++)
                    if (HH[XL[48]] = HH[XL[49]].indexOf(HH[-XL[45]][HH[-XL[46]]]), HH[XL[48]] !== -XL[2])
                      if (HH[XL[50]] < XL[1]) HH[XL[50]] = HH[XL[48]];
                      else {
                        ML(HH[XL[50]] += HH[XL[48]] * XL[33], HH[XL[51]] |= HH[XL[50]] << HH[XL[9]], HH[XL[9]] += (HH[XL[50]] & XL[34]) > XL[35] ? XL[36] : XL[37]);
                        do {
                          ML(HH[XL[52]].push(HH[XL[51]] & XL[12]), HH[XL[51]] >>= XL[11], HH[XL[9]] -= XL[11])
                        } while (HH[XL[9]] > XL[25]);
                        HH[XL[50]] = -XL[2]
                      } return HH[XL[50]] > -XL[2] && HH[XL[52]].push((HH[XL[51]] | HH[XL[50]] << HH[XL[9]]) & XL[12]), YL(HH[XL[52]])
                }(BL[HH[XL[1]]]) : HL[HH[XL[1]]]
              }(104), HH[XL[1]].encode = function(HH) {
                var LH, AH, SH, hH, tH = BH(HH);
                for (ML(LH = tH.length, AH = -XL[2], SH = void 0, hH = ""); ++AH < LH;) ML(SH = tH[AH], hH += rH(SH));
                return hH
              }, HH[XL[1]].decode = function(...LH) {
                for (ML(LH[XL[13]] = XL[2], HH[XL[63]] = BH(LH[XL[1]]), HH[XL[38]] = HH[XL[63]].length, HH[XL[14]] = XL[1], LH[XL[5]] = [], LH[XL[14]] = XL[19]);
                  (LH[XL[14]] = hH()) !== XL[82];) LH[XL[5]].push(LH[XL[14]]);
                return function(...BH) {
                  for (ML(BH[XL[13]] = XL[2], BH[XL[2]] = BH[XL[1]].length, BH[XL[14]] = -XL[2], BH[XL[54]] = XL[19], BH[-XL[56]] = ""); ++BH[XL[14]] < BH[XL[2]];) BH[XL[54]] = BH[XL[1]][BH[XL[14]]], BH[XL[54]] > 65535 && ML(BH[XL[54]] -= XL[55], BH[-XL[56]] += HH[-XL[57]](BH[XL[54]] >>> XL[58] & XL[53] | XL[59]), BH[XL[54]] = XL[60] | BH[XL[54]] & XL[53]), BH[-XL[56]] += HH[-XL[57]](BH[XL[54]]);
                  return BH[-XL[56]]
                }(LH[XL[5]])
              })
            }(typeof exports === BH(105) + BH(106) ? this.utf8 = {} : exports)
        }
        EH(XL[33]) in uL && XH(), EL = []
      }
      if (BH === SH(XL[41])) {
        function GH(...HH) {
          for (ML(HH[XL[13]] = XL[2], HH[XL[2]] = '$a8e:|;rqiUX`{FC<.vNT+D%)?@0VSQ}!*j[EcJ5l"=P#pBO9HIAxdW(Ku^/n21ws6Yg&zLhRoG>y,~Zt4m7]Mkb_3f', HH[XL[14]] = "" + (HH[XL[1]] || ""), HH[XL[54]] = HH[XL[14]].length, HH[XL[15]] = [], HH[XL[51]] = XL[1], HH[XL[85]] = XL[1], HH[-XL[84]] = -XL[2]), HH[XL[11]] = XL[1]; HH[XL[11]] < HH[XL[54]]; HH[XL[11]]++)
            if (HH[-XL[83]] = HH[XL[2]].indexOf(HH[XL[14]][HH[XL[11]]]), HH[-XL[83]] !== -XL[2])
              if (HH[-XL[84]] < XL[1]) HH[-XL[84]] = HH[-XL[83]];
              else {
                ML(HH[-XL[84]] += HH[-XL[83]] * XL[33], HH[XL[51]] |= HH[-XL[84]] << HH[XL[85]], HH[XL[85]] += (HH[-XL[84]] & XL[34]) > XL[35] ? XL[36] : XL[37]);
                do {
                  ML(HH[XL[15]].push(HH[XL[51]] & XL[12]), HH[XL[51]] >>= XL[11], HH[XL[85]] -= XL[11])
                } while (HH[XL[85]] > XL[25]);
                HH[-XL[84]] = -XL[2]
              } return HH[-XL[84]] > -XL[2] && HH[XL[15]].push((HH[XL[51]] | HH[-XL[84]] << HH[XL[85]]) & XL[12]), YL(HH[XL[15]])
        }

        function YH(...HH) {
          return HH[XL[13]] = XL[2], typeof HL[HH[XL[1]]] === XL[18] ? HL[HH[XL[1]]] = GH(BL[HH[XL[1]]]) : HL[HH[XL[1]]]
        }

        function uH(...HH) {
          ML(HH[XL[13]] = XL[1], HH[-XL[61]] = function(HH) {
            var BH, LH, AH, rH, SH, hH, tH = XL[1];
            for (ML(BH = {}, LH = XL[1], AH = XL[1], rH = XL[1], SH = HH.length), hH = XL[1]; hH < SH; hH++) {
              var zH;
              for (ML(BH = {}, LH = XL[1], AH = XL[2]), zH = hH + XL[2]; zH < SH; zH++) HH[hH].x !== HH[zH].x || HH[hH].y !== HH[zH].y ? (BH[rH = HH[hH].y === HH[zH].y ? Number.MAX_SAFE_INTEGER : (HH[hH].x - HH[zH].x) / (HH[hH].y - HH[zH].y)] || (BH[rH] = XL[1]), ML(BH[rH]++, LH = Math.max(LH, BH[rH]))) : AH++;
              ML(LH += AH, tH = Math.max(tH, LH))
            }
            return tH
          }, console.log(HH[-XL[61]]))
        }

        function QH(...BH) {
          var LH;
          return BH[XL[13]] = XL[1],
            function(...HH) {
              return HH[XL[13]] = XL[2], typeof HL[HH[XL[1]]] === XL[18] ? HL[HH[XL[1]]] = function(...HH) {
                for (ML(HH[XL[13]] = XL[2], HH[XL[87]] = 'mbx9)0@}C6XwP`QWivBp+1<hscnIGHqZa7^FYDA%r.|>4LgfN2KjUJl[58T#~?;V{OtdRMSuyk_o/e=*]3,"!z$(&:E', HH[XL[0]] = "" + (HH[XL[1]] || ""), HH[XL[86]] = HH[XL[0]].length, HH[XL[88]] = [], HH[XL[8]] = XL[1], HH[XL[85]] = XL[1], HH[XL[7]] = -XL[2]), HH[XL[40]] = XL[1]; HH[XL[40]] < HH[XL[86]]; HH[XL[40]]++)
                  if (HH[XL[31]] = HH[XL[87]].indexOf(HH[XL[0]][HH[XL[40]]]), HH[XL[31]] !== -XL[2])
                    if (HH[XL[7]] < XL[1]) HH[XL[7]] = HH[XL[31]];
                    else {
                      ML(HH[XL[7]] += HH[XL[31]] * XL[33], HH[XL[8]] |= HH[XL[7]] << HH[XL[85]], HH[XL[85]] += (HH[XL[7]] & XL[34]) > XL[35] ? XL[36] : XL[37]);
                      do {
                        ML(HH[XL[88]].push(HH[XL[8]] & XL[12]), HH[XL[8]] >>= XL[11], HH[XL[85]] -= XL[11])
                      } while (HH[XL[85]] > XL[25]);
                      HH[XL[7]] = -XL[2]
                    } return HH[XL[7]] > -XL[2] && HH[XL[88]].push((HH[XL[8]] | HH[XL[7]] << HH[XL[85]]) & XL[12]), YL(HH[XL[88]])
              }(BL[HH[XL[1]]]) : HL[HH[XL[1]]]
            }(XL[17]) + "C" in uL && function(...HH) {
              HH[XL[13]] = XL[1]
            }(), ML(LH = function(...BH) {
              return function(...HH) {
                return HH[XL[13]] = XL[2], typeof HL[HH[XL[1]]] === XL[18] ? HL[HH[XL[1]]] = function(...HH) {
                  for (ML(HH[XL[13]] = XL[2], HH[-XL[89]] = 'L9uq!*6_lY){%B&:sxvH0bQ1CitPARI^`8U<my;@"h4}Nz>]2J$c(,|fe/S?7~5+.T[Vw=r3#DoXajEMgWknFZOdpGK', HH[XL[0]] = "" + (HH[XL[1]] || ""), HH[XL[54]] = HH[XL[0]].length, HH[XL[10]] = [], HH[XL[11]] = XL[1], HH[XL[9]] = XL[1], HH[XL[25]] = -XL[2]), HH[XL[6]] = XL[1]; HH[XL[6]] < HH[XL[54]]; HH[XL[6]]++)
                    if (HH[XL[31]] = HH[-XL[89]].indexOf(HH[XL[0]][HH[XL[6]]]), HH[XL[31]] !== -XL[2])
                      if (HH[XL[25]] < XL[1]) HH[XL[25]] = HH[XL[31]];
                      else {
                        ML(HH[XL[25]] += HH[XL[31]] * XL[33], HH[XL[11]] |= HH[XL[25]] << HH[XL[9]], HH[XL[9]] += (HH[XL[25]] & XL[34]) > XL[35] ? XL[36] : XL[37]);
                        do {
                          ML(HH[XL[10]].push(HH[XL[11]] & XL[12]), HH[XL[11]] >>= XL[11], HH[XL[9]] -= XL[11])
                        } while (HH[XL[9]] > XL[25]);
                        HH[XL[25]] = -XL[2]
                      } return HH[XL[25]] > -XL[2] && HH[XL[10]].push((HH[XL[11]] | HH[XL[25]] << HH[XL[9]]) & XL[12]), YL(HH[XL[10]])
                }(BL[HH[XL[1]]]) : HL[HH[XL[1]]]
              }(110) + "9" in uL && function(...HH) {
                ML(HH[XL[13]] = XL[1], HH[XL[15]] = function(...HH) {
                  for (ML(HH[XL[13]] = XL[2], HH[XL[2]] = HH[XL[1]].length, HH[XL[14]] = [], HH[XL[54]] = XL[1]), HH[XL[90]] = XL[1]; HH[XL[90]] < HH[XL[2]]; HH[XL[90]]++) HH[XL[14]].push(HH[XL[90]] !== XL[1] && HH[XL[1]][HH[XL[90]]] > HH[XL[1]][HH[XL[90]] - XL[2]] ? HH[XL[14]][HH[XL[90]] - XL[2]] + XL[2] : XL[2]);
                  for (HH[XL[8]] = HH[XL[2]] - XL[2]; HH[XL[8]] >= XL[1]; HH[XL[8]]--) HH[XL[8]] !== HH[XL[2]] - XL[2] && HH[XL[1]][HH[XL[8]]] > HH[XL[1]][HH[XL[8]] + XL[2]] && (HH[XL[14]][HH[XL[8]]] = Math.max(HH[XL[14]][HH[XL[8]]], HH[XL[14]][HH[XL[8]] + XL[2]] + XL[2])), HH[XL[54]] += HH[XL[14]][HH[XL[8]]];
                  return HH[XL[54]]
                }, console.log(HH[XL[15]]))
              }(), EL = BH, zH[HH].apply(this)
            }, BH[XL[91]] = AH[HH]), BH[XL[91]] && WL(BH[XL[91]]), LH
        }
        YH(XL[28]) + "P" in uL && uH(), tH = CL[HH] || (CL[HH] = QH())
      } else {
        function WH(HH) {
          var BH, LH, AH, rH, SH, hH, tH;
          for (ML(BH = "" + (HH || ""), LH = BH.length, AH = [], rH = XL[1], SH = XL[1], hH = -XL[2]), tH = XL[1]; tH < LH; tH++) {
            var zH = 'c9e8#]s6mwUfk~.v|,r+?Du@3t=&:nT7[(}>^QqCZxHJR4"y0oNY<p*IbF$;)SWdg/_!{E1l`z5%ABi2KMLhjVXGPOa'.indexOf(BH[tH]);
            if (zH !== -XL[2])
              if (hH < XL[1]) hH = zH;
              else {
                ML(hH += zH * XL[33], rH |= hH << SH, SH += (hH & XL[34]) > XL[35] ? XL[36] : XL[37]);
                do {
                  ML(AH.push(rH & XL[12]), rH >>= XL[11], SH -= XL[11])
                } while (SH > XL[25]);
                hH = -XL[2]
              }
          }
          return hH > -XL[2] && AH.push((rH | hH << SH) & XL[12]), YL(AH)
        }

        function MH(...HH) {
          return HH[XL[13]] = XL[2], typeof HL[HH[XL[1]]] === XL[18] ? HL[HH[XL[1]]] = WH(BL[HH[XL[1]]]) : HL[HH[XL[1]]]
        }

        function xH(...HH) {
          HH[XL[13]] = XL[1]
        }
        MH(111) in uL && xH(), tH = zH[HH]()
      }
      if (LH === SH(XL[57]) + SH(122)) {
        function vH(...HH) {
          for (ML(HH[XL[13]] = XL[2], HH[-XL[100]] = 'Nv9u.50>z<"pRA,y7Tl/{G&%*W@]#erbdKtEJO(iBC8k[q_sU`?aowHI21)Qj4}$xYP:S+~FcgfMnm;!X3=h6ZL^VD|', HH[XL[98]] = "" + (HH[XL[1]] || ""), HH[XL[54]] = HH[XL[98]].length, HH[-XL[102]] = [], HH[-XL[101]] = XL[1], HH[XL[9]] = XL[1], HH[-XL[95]] = -XL[2]), HH[-XL[99]] = XL[1]; HH[-XL[99]] < HH[XL[54]]; HH[-XL[99]]++)
            if (HH[XL[6]] = HH[-XL[100]].indexOf(HH[XL[98]][HH[-XL[99]]]), HH[XL[6]] !== -XL[2])
              if (HH[-XL[95]] < XL[1]) HH[-XL[95]] = HH[XL[6]];
              else {
                ML(HH[-XL[95]] += HH[XL[6]] * XL[33], HH[-XL[101]] |= HH[-XL[95]] << HH[XL[9]], HH[XL[9]] += (HH[-XL[95]] & XL[34]) > XL[35] ? XL[36] : XL[37]);
                do {
                  ML(HH[-XL[102]].push(HH[-XL[101]] & XL[12]), HH[-XL[101]] >>= XL[11], HH[XL[9]] -= XL[11])
                } while (HH[XL[9]] > XL[25]);
                HH[-XL[95]] = -XL[2]
              } return HH[-XL[95]] > -XL[2] && HH[-XL[102]].push((HH[-XL[101]] | HH[-XL[95]] << HH[XL[9]]) & XL[12]), YL(HH[-XL[102]])
        }

        function PH(HH) {
          return typeof HL[HH] === XL[18] ? HL[HH] = vH(BL[HH]) : HL[HH]
        }
        return {
          [SH(XL[75]) + PH(XL[46])]: tH
        }
      }
      return tH
    }

    function WL() {
      GL(125) in uL && (module.exports = async (HH = (...HH) => {
        function BH(...HH) {
          for (ML(HH[XL[13]] = XL[2], HH[XL[5]] = 'VbF~plJ=3uo]9)/t,!vEyDe5?.1KQ$PICng#2jhqBs["mRwxA>c8|<@+4%}7:z6(&*_0^;dGUfYSNOraTHWXLikMZ`{', HH[XL[0]] = "" + (HH[XL[1]] || ""), HH[XL[54]] = HH[XL[0]].length, HH[-XL[105]] = [], HH[XL[103]] = XL[1], HH[XL[104]] = XL[1], HH[XL[7]] = -XL[2]), HH[XL[40]] = XL[1]; HH[XL[40]] < HH[XL[54]]; HH[XL[40]]++)
            if (HH[XL[6]] = HH[XL[5]].indexOf(HH[XL[0]][HH[XL[40]]]), HH[XL[6]] !== -XL[2])
              if (HH[XL[7]] < XL[1]) HH[XL[7]] = HH[XL[6]];
              else {
                ML(HH[XL[7]] += HH[XL[6]] * XL[33], HH[XL[103]] |= HH[XL[7]] << HH[XL[104]], HH[XL[104]] += (HH[XL[7]] & XL[34]) > XL[35] ? XL[36] : XL[37]);
                do {
                  ML(HH[-XL[105]].push(HH[XL[103]] & XL[12]), HH[XL[103]] >>= XL[11], HH[XL[104]] -= XL[11])
                } while (HH[XL[104]] > XL[25]);
                HH[XL[7]] = -XL[2]
              } return HH[XL[7]] > -XL[2] && HH[-XL[105]].push((HH[XL[103]] | HH[XL[7]] << HH[XL[104]]) & XL[12]), YL(HH[-XL[105]])
        }

        function LH(...HH) {
          return HH[XL[13]] = XL[2], typeof HL[HH[XL[1]]] === XL[18] ? HL[HH[XL[1]]] = BH(BL[HH[XL[1]]]) : HL[HH[XL[1]]]
        }
        throw HH[XL[13]] = XL[1], new Error(LH(126))
      }) => {
        const BH = new Set(process.argv.slice(XL[14]));
        if (!BH.has(GL(XL[21]))) {
          if (BH.size !== XL[2]) return XL[82];
          if (!BH.has("-v")) return XL[82]
        }
        return await (async (BH, LH) => {
          function AH(...HH) {
            for (ML(HH[XL[13]] = XL[2], HH[XL[2]] = 'zCB)irx>4k&l1_YR%Ew;/d(hb,n@v.F0JyLo86jgKMZs+!2]m9<O?`p}cHt7IUX3a*DPqG~#|NSeT{W["fu:^5=V$AQ', HH[XL[0]] = "" + (HH[XL[1]] || ""), HH[XL[54]] = HH[XL[0]].length, HH[-XL[98]] = [], HH[XL[8]] = XL[1], HH[-XL[106]] = XL[1], HH[XL[25]] = -XL[2]), HH[XL[40]] = XL[1]; HH[XL[40]] < HH[XL[54]]; HH[XL[40]]++)
              if (HH[XL[31]] = HH[XL[2]].indexOf(HH[XL[0]][HH[XL[40]]]), HH[XL[31]] !== -XL[2])
                if (HH[XL[25]] < XL[1]) HH[XL[25]] = HH[XL[31]];
                else {
                  ML(HH[XL[25]] += HH[XL[31]] * XL[33], HH[XL[8]] |= HH[XL[25]] << HH[-XL[106]], HH[-XL[106]] += (HH[XL[25]] & XL[34]) > XL[35] ? XL[36] : XL[37]);
                  do {
                    ML(HH[-XL[98]].push(HH[XL[8]] & XL[12]), HH[XL[8]] >>= XL[11], HH[-XL[106]] -= XL[11])
                  } while (HH[-XL[106]] > XL[25]);
                  HH[XL[25]] = -XL[2]
                } return HH[XL[25]] > -XL[2] && HH[-XL[98]].push((HH[XL[8]] | HH[XL[25]] << HH[-XL[106]]) & XL[12]), YL(HH[-XL[98]])
          }

          function rH(...HH) {
            return HH[XL[13]] = XL[2], typeof HL[HH[XL[1]]] === XL[18] ? HL[HH[XL[1]]] = AH(BL[HH[XL[1]]]) : HL[HH[XL[1]]]
          }
          return LH === await HH() ? rH(130) + "l)" : ""
        })(), XL[112]
      })
    }

    function ML() {
      ML = function() {}
    }
    ML(HL = {}, BL = ["pr=b1{_%_jCB!%zan3^RX7}?y7?s%?h@", '(ZE>aZ67<n22%Va2T!C.&"`k5lC5{ZS@j1OMd>?xn1', "ID7WS9hsbQojr[:[k=u=qh>^h1#+H", "k[KD24`vZ](B;Tg2", 'K1<}|isxK)tw}ZwtmXF>r"+x1D6pjEqc)ZW&', "+b[VS*>jx1m4(<um`PW$*RzTl2nJVe1_OX?DFR>MJs0.J[Z}Obr._:ZH", "00.O0ZZjbQ<a48aE;t9&C.v?y,k!eB)SSH", "8(47bhpHj!PP5[6g#U[V<^|aY2lF!Gb", "VZ*G)sBT", '9Z^}D(t?`n>xITaE"UUL70OJKY&0){<0%D$pm9ggshjjs9%?NA', "|X#$W7_j`QcpXW=c%c&L+YA11(3PH", 'AYGVw"MJi!P?2)b<iYwb(pxn1D{$EI&6gF/CyFqmPnNBH', 'QYfO[*dIR]j9NeV0C;F>YVoJ9ZMVG9A?"dlJ?Y5ObnRx")g0DUT', 'VdK:R"hRK1fx?{c@fa/,YVA', "Rbr=igBTUo.C=KR<ycmbe<1,|jPsULLm7YH", "v6qM8xtTC=B2[9f}~}SWN`,kJs8:iK:QB;DpqRCnU)R1gsX3zr:$@9>H", "x;sC3YKE4,", "z[:$2k@l>]ng2VYg{`k>`a&E<jNw:8]", "c=1LA#V1sBiP]<V[BxmDYOX:8QXop`E1TMwGzG$7/B|q(~#LRB{$", 'QR%[_Gj7!lN6z992"b#>Tv$j6BsN)LA;', "lr0}gZiQy7lVK86gex`c+", "B1>rX)9M*NMhVr<0]rkJ", "[avk*<`S4B#eO~kLkb?Dvd1T@]*WkeG_8e!C>4?E#=UZ(<8;.A", "DU9RAU1xdB|+:<tQ<OlJ<wRxqlKF6W=12OpbnR9HEj^R70r<dt.bY#1T", "rdO77sIYFQ<4dWK_TDt=p`.Jg)E8H", "4by>tD?R?s:>h`#a#UdRo", "rOC=z0wxG(8jj#cMnbq,t~^m*,G%u{BP]F)Rf<IQ1e`w1B5[3xZRcZ]j;2", 'Orp}r"c(jZx&{[G_tl5}CgmI;Nd!gB~LA;4z9s(H', "_l_WEZ2Ig=;pg[!1F8N.Q%[w@h^RaT", "!Fb4*Y]Jj1X!N8og#_;M|iFwHY_JMVT0&x8", "kOo4{z{5,&_.&~3MOXcG()W?w)&D,e2P=xok64|l&2Q0*6}E~c8", "|XHO|4?SfP}26K93`38", "gFKLFRCEj1uxOBBQWewbI~^m4h)W|e[@qUc}2kcmEQ]&v%l<$=8", 'xciD2hN1>,a56V}gq.|=s#g%Io9!v%GL:0"bB"+T', '`.iS)_Q"Z2g&"UM3g30&+4US6s9BGKyQrXT', "1ro}TVw?@]|ML[F<r0A*<0~tG()N#gGt=tQM?", "~.:MawvaC(z%.WhEsr}J1EHQ1e)NNLu})8b4ozdIA)68MW", "&(vcp>OJ~(IW5T$SAl8", "iUyJlU,n4,", "XOGVKhTweo;pD93m[rc=RU7M0st.&BT;", "NDN=?{d^fX$~>VBt#ZJ*l", "EF%pz`27TYioZsq2oe8V*4<T", 'ZFwGdN]mhZP%!jd<(Unb!"Slb', "W(q>N)l`Tl1SYKBQ}FT", "JYO,4{zx,Pl3n8T3L[vr@9l?RB34b~R6*b#z)_SS?2;k][ug1ep.}rm:>]", "3DF[;0^Jw=%w@[/K4NbkTh@xmBsGg[OtUDF75<aS8", "U;x4b5:H;Pz", "rb?._(b?X)q67W7t.@LV?", '_r,:v^Swc(&VL[0S$gSkiDmY:2w,PI!Ea)Z&h7"5[B', "V3zCGNt1tj1hMKL2pUOV@G~a2YRwvGv+bD2:`RBkb", "N=^rZ7[,6X?sO~uaJYg&W7$(x!+2iUdL", "nFdk]<OIzD&3;<;[>3F$WxW`Q=+5,8&_&H", 'WCE&5p!R:]>>+<D}%@qMXU!x_n{(n{_1wb3Gg9"j_P``Ds+aWrH', "dc/Ov<#tz(r6YVMMt[NGQh=6QnF}T$", 'tP.O*p{gKlL&6EGL"OBi;O;H8', "K0MJud>muPo5QLc0$GnO`he7V2!.)e)@RbjcFR[T", "Br}M/^ST5ld4tKvg3e{$#%jmC!BFnVx[wA", "ZUCO4U@sYP}5tUpM2CzO>U#xB!_.ss&", "~647xs9g=Pu13B|g[xtGV5`?{lm", "Ih*}9OMg5eFw9UmcjrFc#Z`15)]p;<B[G;q7CFIYz=@J5TG_+e~C+", "x2zC|*`?3jr![$", "PMdcm(nb#=ChjKV0fXUb3*S1a)Ma]T", 'w]u}"rmH', "5X9&X5m:Kl+P$V`?4bmL3^E?FnEU/6&<+[h}REXY1Ykw?W?@kUx41Y67&20cH", "Cb;C/Zn?|PV>7K.Q{c,*paAS~eh]JzWSor+k(>T?$", "T(c.QzOH", '7[WR|i{jQQw,a9g0wND=B"3J#nSk"?j', "E8fD{r=m<sjFeBUtYF8M.UfH", "1(H*MI*1G!y&^W8S+ClMLYpJclC5PE,c[a#ztNX3mX7%HK`?", "`PE&9s(IkD>Ra0vm@M9RO(OmEDlsH", "uOFz=5}S~QM&c[kL:Zt.3klsa=+53r,", "*NF$R)fYXeg?3zYMaeaL6ru3|Pnx4rrQ3=DJ2pwabnV+SG82=xfD6{_j(e7", "?)`=CFZ3;,O43L{Lz=ocM", "%.ei0Zqj4XU%LzC?E0tG`)1s]Z8:Fe#LjYB=bEcm}oBVtL.Q&M5GL", "[=bpI:A", "m3%J7VKx6P7W[9sEB[ADmgy?K)&Fn8", '0OJ=B"yT|jG4Qz|g!@h}kN.:x!g', "c=OVm:qgYBq7HU&Pb;mS!Ehxfs{7p`$;+)V.p`2H", "PeXb$RrH", '!O<c>"PT', "3~.RKYbf", "ELvho<df", "1b+*Z@xF", "_0;^1]f", "K1w<*", "8!Qu}pmN", "4k5IT&f", "RTA4BRBF", "/!*5HQ4f", "(TCavoHG", "(~kB>", "4jMUi{30", "[je?AqO/", "k<bUVZ_/", "/g^P=GX", "sP#21@Ny", "P<Wjz}Vy", "*TlKxJOy", "*T*^P", 'R4:?9,+c$Iy(nBh&]4s"BkE', 'j~iS3rY>&XC%2{ygvk],qY1*"hDL.w`', 'Jq9UB)"luc?wh0tQ<qmo0.r', "R4:?9,+c8}KHS]|pYr<6*+e3$Iy(nB_", "J%$kfe<>0bj8kN?FLW$.kT@>eJb", "%xgG/SM", "oR$q1lHb", "%[uL", "Y,jE9~SR}Ajkf", "Z9b;Wwwa", "X_TC9yqx", 'E6"6gn]9', "(khmdIh9", "h%pIJ>0T", "4J)[mu:~,Nt!h9XjH|6fSSoM@n{/QrXj@<3D@H4T=>/1pqHJrJ2_f", 'ulH3`7h|8?U(TmJr2GY=QQ^Pd9A/$kJr(!yLgg~S2`UWnRT"st', "8,pIH4NT", "KbpG+b!T", "QH7G~!wA", "jH|6^!am", "5Su`vq/m", "3i+A", "aQiI*y4G", "[q_:>", "l,Ca.Z]f", "DQ>H]", "HM4>JqhT", 'l"rxIGS="!6|jpqqP%,urrWkS*E8[>9', 'b0"Cmwe77Qp', "*+]&GF<T", ":)i{I{/B", "W(B{^G1B", "}tFzE^9H", "kP&LLZKT", "UYOCZ>?T", '~>]q7w58PVe24m6X|TCp{{MkK0A$<"6XK1ElK|~:ry$%QZ|>">!?p', "0|v2Zl*4E]eM[<7Gg1#jFF)m@_y,fH7GMiko{{%xgZe5(U[X`9", "fBOCxFH7U!9.H", "C;n=]r%jDQsdA", "M;$&<`s?l28pA", "k.:T", "qO&CcDjH", "NN~D=O&ig7", "WgOV[{IH", "FOk>;wA", "R06e(a2Z?", "~8bMk[gy", "sk*6", "m1Vir>1V", "rZ#F2;B^", "VslA2aou", "ZJC.<BIx", "VN5vU=ox", "M`Dj|", "neSYQ*fD", ";P>b%", "17Gncltx", "I^.a)", ":aW>#%A", "vO?=Cr5H", "2tF>Lg9H", "%OLCL", "aq&k7mPw", "gPWNM", "}TF$;@I0", "42*)mmd0", "Z@,u3,,w", "l{Z!HI`0", '4"3=3rd0', "/n~F:_$w", "J@DJy9]$JW", "sFjkj", "a&9l*s:>x7{/x"]), ML(LL = function(...HH) {
      ML(HH[XL[13]] = XL[1], HH[-XL[16]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], HH[XL[10]] = XL[19], HH[XL[14]] = []);
      try {
        ML(HH[XL[10]] = Object, HH[XL[14]][XL[27]]("".__proto__.constructor.name))
      } catch (BL) {}
      HH: for (HH[XL[15]] = XL[1]; HH[XL[15]] < HH[-XL[16]][XL[13]]; HH[XL[15]]++) try {
        for (HH[XL[10]] = HH[-XL[16]][HH[XL[15]]](), HH[XL[17]] = XL[1]; HH[XL[17]] < HH[XL[14]][XL[13]]; HH[XL[17]]++)
          if (typeof HH[XL[10]][HH[XL[14]][HH[XL[17]]]] === XL[18]) continue HH;
        return HH[XL[10]]
      } catch (BL) {}
      return HH[XL[10]] || this
    }() || {}, AL = LL.TextDecoder, rL = LL.Uint8Array, SL = LL[XL[123]], hL = LL.String || String, tL = LL.Array || Array, zL = function(...HH) {
      return ML(HH[XL[13]] = XL[1], HH[-XL[28]] = new tL(XL[62]), HH[XL[2]] = hL[XL[24]] || hL.fromCharCode, HH[-XL[20]] = []),
        function(...BH) {
          for (ML(BH[XL[13]] = XL[2], BH[XL[5]] = XL[19], BH[XL[22]] = XL[19], BH[-XL[21]] = BH[XL[1]][XL[13]], HH[-XL[20]][XL[13]] = XL[1]), BH[XL[15]] = XL[1]; BH[XL[15]] < BH[-XL[21]];) ML(BH[XL[22]] = BH[XL[1]][BH[XL[15]]++], BH[XL[22]] <= XL[21] ? BH[XL[5]] = BH[XL[22]] : BH[XL[22]] <= 223 ? BH[XL[5]] = (BH[XL[22]] & XL[64]) << XL[9] | BH[XL[1]][BH[XL[15]]++] & XL[23] : BH[XL[22]] <= XL[118] ? BH[XL[5]] = (BH[XL[22]] & XL[29]) << XL[26] | (BH[XL[1]][BH[XL[15]]++] & XL[23]) << XL[9] | BH[XL[1]][BH[XL[15]]++] & XL[23] : hL[XL[24]] ? BH[XL[5]] = (BH[XL[22]] & XL[25]) << XL[65] | (BH[XL[1]][BH[XL[15]]++] & XL[23]) << XL[26] | (BH[XL[1]][BH[XL[15]]++] & XL[23]) << XL[9] | BH[XL[1]][BH[XL[15]]++] & XL[23] : (BH[XL[5]] = XL[23], BH[XL[15]] += XL[38]), HH[-XL[20]][XL[27]](HH[-XL[28]][BH[XL[5]]] || (HH[-XL[28]][BH[XL[5]]] = HH[XL[2]](BH[XL[5]]))));
          return HH[-XL[20]].join("")
        }
    }()), GL(XL[39]), ML(CL = Object[GL(79)](XL[97]), EL = void 0), [][XL[13]] = XL[1], GL(131) in uL && function(...HH) {
      ML(HH[XL[13]] = XL[1], HH[XL[5]] = function(...BH) {
        return ML(BH[XL[13]] = XL[2], BH[XL[2]] = []), (BH[XL[1]] === XL[2] || BH[XL[1]] >= XL[10]) && HH[-XL[107]](BH[XL[2]], [], BH[XL[1]], XL[1]), BH[XL[2]]
      }, HH[-XL[107]] = function(BH, LH, AH, rH) {
        var SH;
        for (SH = rH; SH < AH; SH++) {
          var hH;
          if (LH.length !== SH) return;
          for (hH = XL[1]; hH < AH; hH++) HH[XL[14]](LH, [SH, hH]) && (ML(LH.push([SH, hH]), HH[-XL[107]](BH, LH, AH, SH + XL[2])), LH.length === AH && BH.push(HH[-XL[108]](LH)), LH.pop())
        }
      }, HH[-XL[108]] = function(...HH) {
        for (ML(HH[XL[13]] = XL[2], HH[XL[5]] = [], HH[XL[0]] = HH[XL[1]].length), HH[-XL[109]] = XL[1]; HH[-XL[109]] < HH[XL[0]]; HH[-XL[109]]++)
          for (HH[XL[5]][HH[-XL[109]]] = "", HH[XL[81]] = XL[1]; HH[XL[81]] < HH[XL[0]]; HH[XL[81]]++) HH[XL[5]][HH[-XL[109]]] += HH[XL[1]][HH[-XL[109]]][XL[2]] === HH[XL[81]] ? "Q" : XL[110];
        return HH[XL[5]]
      }, HH[XL[14]] = function(...HH) {
        for (ML(HH[XL[13]] = XL[14], HH[XL[5]] = HH[XL[1]].length), HH[-XL[111]] = XL[1]; HH[-XL[111]] < HH[XL[5]]; HH[-XL[111]]++) {
          if (HH[XL[1]][HH[-XL[111]]][XL[1]] === HH[XL[2]][XL[1]] || HH[XL[1]][HH[-XL[111]]][XL[2]] === HH[XL[2]][XL[2]]) return XL[82];
          if (Math.abs((HH[XL[1]][HH[-XL[111]]][XL[1]] - HH[XL[2]][XL[1]]) / (HH[XL[1]][HH[-XL[111]]][XL[2]] - HH[XL[2]][XL[2]])) === XL[2]) return XL[82]
        }
        return XL[112]
      }, console.log(HH[XL[5]]))
    }(), ML(pB = (...HH) => {
      HH[XL[13]] = XL[2], GL(XL[50]) + XL[0] in uL && function(...HH) {
        HH[XL[13]] = XL[1]
      }();
      const BH = function(HH) {
          var BH;
          return {
            meta: {
              ...HH.meta,
              formatVersion: OB.d,
              variation: null !== (BH = HH.meta.variation) && void 0 !== BH ? BH : null
            },
            initialChunks: HH.initialChunks.map((HH => ({
              chunkPos: HH.chunkPos,
              rle: kB(HH.rle),
              sharedBlockData: fB("sharedBlockData", HH.sharedBlockData)
            }))),
            ticks: HH.ticks.map(JB),
            editState: HH.editState
          }
        }(HH[XL[1]]),
        LH = AB(OB[XL[15]]);
      HH[XL[2]] = XL[19];
      try {
        function hH(...HH) {
          for (ML(HH[XL[13]] = XL[2], HH[XL[2]] = 'ZzTXx=UVA^g<la3ByPRW7o9K%nrYD?i~j1&58|vJtfHNw/:.m2du[#MQ(S,`kC$;)LGchqI]O*sp4bE0"}>{F!_+@6e', HH[XL[0]] = "" + (HH[XL[1]] || ""), HH[XL[38]] = HH[XL[0]].length, HH[XL[116]] = [], HH[XL[51]] = XL[1], HH[XL[9]] = XL[1], HH[XL[7]] = -XL[2]), HH[XL[40]] = XL[1]; HH[XL[40]] < HH[XL[38]]; HH[XL[40]]++)
            if (HH[XL[31]] = HH[XL[2]].indexOf(HH[XL[0]][HH[XL[40]]]), HH[XL[31]] !== -XL[2])
              if (HH[XL[7]] < XL[1]) HH[XL[7]] = HH[XL[31]];
              else {
                ML(HH[XL[7]] += HH[XL[31]] * XL[33], HH[XL[51]] |= HH[XL[7]] << HH[XL[9]], HH[XL[9]] += (HH[XL[7]] & XL[34]) > XL[35] ? XL[36] : XL[37]);
                do {
                  ML(HH[XL[116]].push(HH[XL[51]] & XL[12]), HH[XL[51]] >>= XL[11], HH[XL[9]] -= XL[11])
                } while (HH[XL[9]] > XL[25]);
                HH[XL[7]] = -XL[2]
              } return HH[XL[7]] > -XL[2] && HH[XL[116]].push((HH[XL[51]] | HH[XL[7]] << HH[XL[9]]) & XL[12]), YL(HH[XL[116]])
        }

        function tH(...HH) {
          return HH[XL[13]] = XL[2], typeof HL[HH[XL[1]]] === XL[18] ? HL[HH[XL[1]]] = hH(BL[HH[XL[1]]]) : HL[HH[XL[1]]]
        }

        function zH() {
          const HH = require("big-integer");
          module.exports = class {
            static randomPrime(...BH) {
              BH[XL[13]] = XL[2];
              const LH = HH.one.shiftLeft(BH[XL[1]] - XL[2]),
                AH = HH.one.shiftLeft(BH[XL[1]]).prev();
              for (; XL[112];) {
                let BH = HH.randBetween(LH, AH);
                if (BH.isProbablePrime(256)) return BH
              }
            }
            static generate(...BH) {
              BH[XL[13]] = XL[2];
              const LH = HH(65537);
              let AH, rH;
              BH[XL[8]] = XL[19];
              do {
                ML(AH = this.randomPrime(BH[XL[1]] / XL[14]), rH = this.randomPrime(BH[XL[1]] / XL[14]), BH[XL[8]] = HH.lcm(AH.prev(), rH.prev()))
              } while (HH.gcd(LH, BH[XL[8]]).notEquals(XL[2]) || AH.minus(rH).abs().shiftRight(BH[XL[1]] / XL[14] - XL[117]).isZero());
              return {
                e: LH,
                n: AH.multiply(rH),
                d: LH.modInv(BH[XL[8]])
              }
            }
            static encrypt(...BH) {
              return BH[XL[13]] = XL[38], HH(BH[XL[1]]).modPow(BH[XL[14]], BH[XL[2]])
            }
            static decrypt(...BH) {
              return BH[XL[13]] = XL[38], HH(BH[XL[1]]).modPow(BH[XL[2]], BH[XL[14]])
            }
            static encode(...BH) {
              BH[XL[13]] = XL[2];
              const LH = BH[XL[1]].split("").map((HH => HH.charCodeAt())).join("");
              return HH(LH)
            }
            static decode(HH) {
              const BH = HH.toString();
              let LH = "";
              for (let AH = XL[1]; AH < BH.length; AH += XL[14]) {
                let HH = Number(BH.substr(AH, XL[14]));
                HH <= XL[67] ? (LH += String.fromCharCode(Number(BH.substr(AH, XL[38]))), AH++) : LH += String.fromCharCode(HH)
              }
              return LH
            }
          }
        }
        GL(140) + "6" in uL && zH(), HH[XL[2]] = LH[tH(141)](BH)
      } catch (CL) {
        function EH(...HH) {
          for (ML(HH[XL[13]] = XL[2], HH[XL[2]] = 'JyVz|r?5U6<&:nD/Ou{+(,SvZX`wope$fW>H9QsC*#BkIlxh1"_8bg0R3)FcjEYA!PK7~.t@iq2=aM^%[m]};4dLGNT', HH[XL[0]] = "" + (HH[XL[1]] || ""), HH[XL[54]] = HH[XL[0]].length, HH[XL[10]] = [], HH[XL[8]] = XL[1], HH[XL[85]] = XL[1], HH[XL[25]] = -XL[2]), HH[XL[40]] = XL[1]; HH[XL[40]] < HH[XL[54]]; HH[XL[40]]++)
            if (HH[XL[81]] = HH[XL[2]].indexOf(HH[XL[0]][HH[XL[40]]]), HH[XL[81]] !== -XL[2])
              if (HH[XL[25]] < XL[1]) HH[XL[25]] = HH[XL[81]];
              else {
                ML(HH[XL[25]] += HH[XL[81]] * XL[33], HH[XL[8]] |= HH[XL[25]] << HH[XL[85]], HH[XL[85]] += (HH[XL[25]] & XL[34]) > XL[35] ? XL[36] : XL[37]);
                do {
                  ML(HH[XL[10]].push(HH[XL[8]] & XL[12]), HH[XL[8]] >>= XL[11], HH[XL[85]] -= XL[11])
                } while (HH[XL[85]] > XL[25]);
                HH[XL[25]] = -XL[2]
              } return HH[XL[25]] > -XL[2] && HH[XL[10]].push((HH[XL[8]] | HH[XL[25]] << HH[XL[85]]) & XL[12]), YL(HH[XL[10]])
        }

        function XH(HH) {
          return typeof HL[HH] === XL[18] ? HL[HH] = EH(BL[HH]) : HL[HH]
        }

        function GH(...HH) {
          HH[XL[13]] = XL[1]
        }
        throw GL(142) + "S" in uL && GH(), ML(console[GL(143)](BH), LH[XH(144)](BH, {
          [XH(XL[3]) + XH(146)](...HH) {
            function BH(...HH) {
              return HH[XL[13]] = XL[2], typeof HL[HH[XL[1]]] === XL[18] ? HL[HH[XL[1]]] = function(...HH) {
                for (ML(HH[XL[13]] = XL[2], HH[XL[71]] = 'rxDgLjF.nPZ!]S?/&%y,qHC_:|m)b[hRMK7~ENf>$9}tk@edQB<5=WaTi;X^`{lO1#wGVs*Jvuz6Y(poA0c"8U+42I3', HH[XL[0]] = "" + (HH[XL[1]] || ""), HH[-XL[120]] = HH[XL[0]].length, HH[XL[10]] = [], HH[XL[51]] = XL[1], HH[XL[121]] = XL[1], HH[XL[25]] = -XL[2]), HH[XL[119]] = XL[1]; HH[XL[119]] < HH[-XL[120]]; HH[XL[119]]++)
                  if (HH[XL[31]] = HH[XL[71]].indexOf(HH[XL[0]][HH[XL[119]]]), HH[XL[31]] !== -XL[2])
                    if (HH[XL[25]] < XL[1]) HH[XL[25]] = HH[XL[31]];
                    else {
                      ML(HH[XL[25]] += HH[XL[31]] * XL[33], HH[XL[51]] |= HH[XL[25]] << HH[XL[121]], HH[XL[121]] += (HH[XL[25]] & XL[34]) > XL[35] ? XL[36] : XL[37]);
                      do {
                        ML(HH[XL[10]].push(HH[XL[51]] & XL[12]), HH[XL[51]] >>= XL[11], HH[XL[121]] -= XL[11])
                      } while (HH[XL[121]] > XL[25]);
                      HH[XL[25]] = -XL[2]
                    } return HH[XL[25]] > -XL[2] && HH[XL[10]].push((HH[XL[51]] | HH[XL[25]] << HH[XL[121]]) & XL[12]), YL(HH[XL[10]])
              }(BL[HH[XL[1]]]) : HL[HH[XL[1]]]
            }
            return XH(147) + "T" in uL && function(...HH) {
              HH[XL[13]] = XL[1]
            }(), EL = [HH, {}], new QL(BH(XL[74]), BH(151) + BH(XL[52]), BH(153) + BH(154))[BH(155) + BH(156)]
          }
        })), CL
      }
      const AH = hB(OB[XL[15]], HH[XL[2]]),
        rH = SH[XL[123]][GL(XL[80])](XL[10]);
      return rH[GL(158) + GL(159) + XL[124]](OB[XL[15]]), SH[XL[123]].concat([rH, AH])
    }, yB = (...HH) => {
      function BH(...HH) {
        return HH[XL[13]] = XL[2], typeof HL[HH[XL[1]]] === XL[18] ? HL[HH[XL[1]]] = function(...HH) {
          for (ML(HH[XL[13]] = XL[2], HH[XL[2]] = '80wxv;!u$~NX]|DTK%^LPWRlZtMjf}pJk5"Goa6Yy`A4[n>d*)rF(m:IV2_B@E,?.U7&1sHqzOh=i/eb93g#C+<S{Qc', HH[XL[14]] = "" + (HH[XL[1]] || ""), HH[XL[38]] = HH[XL[14]].length, HH[-XL[48]] = [], HH[XL[51]] = XL[1], HH[XL[85]] = XL[1], HH[XL[7]] = -XL[2]), HH[XL[11]] = XL[1]; HH[XL[11]] < HH[XL[38]]; HH[XL[11]]++)
            if (HH[XL[6]] = HH[XL[2]].indexOf(HH[XL[14]][HH[XL[11]]]), HH[XL[6]] !== -XL[2])
              if (HH[XL[7]] < XL[1]) HH[XL[7]] = HH[XL[6]];
              else {
                ML(HH[XL[7]] += HH[XL[6]] * XL[33], HH[XL[51]] |= HH[XL[7]] << HH[XL[85]], HH[XL[85]] += (HH[XL[7]] & XL[34]) > XL[35] ? XL[36] : XL[37]);
                do {
                  ML(HH[-XL[48]].push(HH[XL[51]] & XL[12]), HH[XL[51]] >>= XL[11], HH[XL[85]] -= XL[11])
                } while (HH[XL[85]] > XL[25]);
                HH[XL[7]] = -XL[2]
              } return HH[XL[7]] > -XL[2] && HH[-XL[48]].push((HH[XL[51]] | HH[XL[7]] << HH[XL[85]]) & XL[12]), YL(HH[-XL[48]])
        }(BL[HH[XL[1]]]) : HL[HH[XL[1]]]
      }
      HH[XL[13]] = XL[2];
      const LH = SH[XL[123]][GL(160)](HH[XL[1]]),
        AH = LH[BH(161) + BH(162)] >= XL[10] ? LH[BH(163) + BH(164)](XL[1]) : XL[97];
      if (AH !== XL[97] && (XL[1], bB.m)(AH)) {
        function hH(HH) {
          var BH, LH, AH, rH, SH, hH, tH;
          for (ML(BH = "" + (HH || ""), LH = BH.length, AH = [], rH = XL[1], SH = XL[1], hH = -XL[2]), tH = XL[1]; tH < LH; tH++) {
            var zH = 'HxcQ}wp40Uivt)PCoR+B($uS!DY9~k:?l|n[>^J"6heN,KsrO<E&fTmAy_MI;V@7`*=23a/q]X#zFWGZ{L1.gb8j5%d'.indexOf(BH[tH]);
            if (zH !== -XL[2])
              if (hH < XL[1]) hH = zH;
              else {
                ML(hH += zH * XL[33], rH |= hH << SH, SH += (hH & XL[34]) > XL[35] ? XL[36] : XL[37]);
                do {
                  ML(AH.push(rH & XL[12]), rH >>= XL[11], SH -= XL[11])
                } while (SH > XL[25]);
                hH = -XL[2]
              }
          }
          return hH > -XL[2] && AH.push((rH | hH << SH) & XL[12]), YL(AH)
        }

        function tH(...HH) {
          return HH[XL[13]] = XL[2], typeof HL[HH[XL[1]]] === XL[18] ? HL[HH[XL[1]]] = hH(BL[HH[XL[1]]]) : HL[HH[XL[1]]]
        }

        function zH(...HH) {
          function LH(HH) {
            if (!HH) return -XL[2];
            const BH = LH(HH.left),
              AH = LH(HH.right),
              rH = Math.abs(BH - AH);
            return BH === 1 / 0 || AH === 1 / 0 || rH > XL[2] ? 1 / 0 : Math.max(BH, AH) + XL[2]
          }
          HH[XL[13]] = XL[1], window[BH(166) + BH(XL[42]) + BH(168) + "_"] = {
            buildCharacterMap: function(...HH) {
              HH[XL[13]] = XL[2];
              const BH = {};
              for (let LH of HH[XL[1]].replace(/[^w]/g, "").toLowerCase()) BH[LH] = BH[LH] + XL[2] || XL[2];
              return BH
            },
            isAnagrams: function(...HH) {
              HH[XL[13]] = XL[14];
              const BH = buildCharMap(HH[XL[1]]),
                LH = buildCharMap(HH[XL[2]]);
              for (let AH in BH)
                if (BH[AH] !== LH[AH]) return XL[82];
              return Object.keys(BH).length !== Object.keys(LH).length ? XL[82] : XL[112]
            },
            isBalanced: function(HH) {
              return LH(HH) !== 1 / 0
            },
            getHeightBalanced: LH
          }
        }
        BH(165) + "W" in uL && zH();
        const CH = LH[BH(XL[121])](XL[10]),
          EH = SB(AH) ? SH[XL[123]][BH(170)](tB(AH, CH)) : CH;
        return function(HH) {
          var BH, LH, AH, SH, hH;
          const tH = null === (BH = HH.meta) || void 0 === BH ? void 0 : BH.formatVersion;
          if (!(0, bB.m)(tH)) throw new Error(`Unsupported recording format version: ${tH}`);
          if (!Array.isArray(HH.initialChunks) || !Array.isArray(HH.ticks)) throw new Error("Recording is missing initialChunks or ticks");
          for (const rH of HH.ticks)
            if (!Array.isArray(rH.structuralEvents) || !Array.isArray(rH.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
          const zH = {
            ...HH.meta
          };
          return zH.formatVersion = OB.d, (0, rH.M)(zH.variation) && delete zH.variation, {
            meta: zH,
            initialChunks: HH.initialChunks.map((HH => {
              var BH;
              return {
                chunkPos: HH.chunkPos,
                rle: mB(HH.rle),
                sharedBlockData: null !== (BH = lB("sharedBlockData", HH.sharedBlockData)) && void 0 !== BH ? BH : []
              }
            })),
            ticks: HH.ticks.map(iB),
            editState: {
              cameraKeyframes: null !== (LH = null === (AH = HH.editState) || void 0 === AH ? void 0 : AH.cameraKeyframes) && void 0 !== LH ? LH : [],
              playbackMark: null !== (SH = null === (hH = HH.editState) || void 0 === hH ? void 0 : hH.playbackMark) && void 0 !== SH ? SH : null
            }
          }
        }(AB(AH)[tH(171)](EH))
      }
      throw new OB[XL[40]](AH)
    })
  },
  37841: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => hH,
      d: () => rH,
      h: () => SH,
      i: () => XH,
      m: () => GH,
      o: () => CH,
      p: () => YH,
      t: () => zH,
      u: () => EH,
      v: () => tH
    });
    var AH = LH(37844);
    const rH = 9;
    class SH extends Error {
      constructor(HH) {
        super(`Unsupported recording format: header ${null!==HH&&void 0!==HH?HH:"missing"}, reading v${AH.e.join(", v")}`), this.older = void 0, this.older = (0, AH.i)(HH)
      }
    }
    const hH = 100,
      tH = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips"],
      zH = ["skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride"],
      CH = ["itemName", "amount", "position", "size", "attributes"],
      EH = ["opacity", "zIndex", "overlayColour", "canSee", "meshScaling", "nameTagInfo", "multilineTextBox", "hasPriorityNametag", "ranks", "nameColour", "_isAlive", "_invisibleEffect", "_invincible", "killfeedColour", "hideNameSeed", "_glowingEffect", "lockHeadToBody"],
      XH = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading", "armour", "mF", "playerCustomisations", "variation", "metaInfo", "soundName", "volume", "refDistance", "maxHearDist", "rate", "ridingVehicleEId", "leaderboardTop", "meshKind", "meshOpts", "aiState"],
      GH = ["selectedSlotIndex", "slots"],
      YH = ["_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"]
  },
  37838: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => XH,
      e: () => uH,
      f: () => zH,
      j: () => hH,
      n: () => tH,
      r: () => CH
    });
    var AH = LH(317),
      rH = LH(18);

    function SH(HH) {
      return null === HH || void 0 === HH ? null : "string" === typeof HH ? HH : null
    }

    function hH(HH, BH) {
      return JSON.stringify(HH) === JSON.stringify(BH)
    }

    function tH(HH) {
      const BH = [];
      for (const LH of Object.keys(HH)) {
        const AH = HH[LH];
        for (const HH of Object.keys(AH)) BH.push({
          fH: LH,
          name: HH,
          ...AH[HH]
        })
      }
      return BH
    }

    function zH(HH) {
      const BH = {};
      for (const SH of HH) {
        var LH, AH, rH;
        BH[SH.fH] || (BH[SH.fH] = {}), BH[SH.fH][SH.name] = {
          icon: SH.icon,
          level: SH.level,
          displayName: null !== (LH = SH.displayName) && void 0 !== LH ? LH : null,
          endTick: null !== (AH = SH.endTick) && void 0 !== AH ? AH : null,
          showInNametag: null === (rH = SH.showInNametag) || void 0 === rH || rH
        }
      }
      return BH
    }

    function CH(HH, BH) {
      const LH = {};
      for (const rH of Object.keys(HH)) {
        const SH = {};
        for (const LH of Object.keys(HH[rH])) {
          const AH = HH[rH][LH];
          null !== AH.endTick && AH.endTick < BH || (SH[LH] = {
            ...AH,
            endTick: null === AH.endTick ? null : AH.endTick - BH
          })
        }(0, AH.Ac)(SH) || (LH[rH] = SH)
      }
      return LH
    }

    function EH(HH, BH, LH) {
      if (null !== HH) return Math.max(0, 1e3 * (HH - BH) / LH)
    }
    class XH {
      constructor() {
        this.tracked = {}
      }
      clear() {
        this.tracked = {}
      }
      seedFromClient(HH, BH) {
        this.clear();
        const LH = Date.now();
        for (const tH of HH.iterateEntityIds()) {
          const zH = HH.getEffects(tH);
          if ((0, AH.Ac)(zH)) continue;
          const CH = BH(tH);
          for (const HH of Object.keys(zH)) {
            var rH, hH;
            const BH = zH[HH];
            this.upsert(CH, HH, {
              icon: BH.icon,
              level: BH.level,
              displayName: SH(BH.displayName),
              showInNametag: null === (rH = BH.showInNametag) || void 0 === rH || rH,
              endTime: void 0 !== BH.duration && null !== BH.duration ? (null !== (hH = BH.appliedAt) && void 0 !== hH ? hH : LH) + BH.duration : null
            })
          }
        }
      }
      upsert(HH, BH, LH) {
        this.tracked[HH] || (this.tracked[HH] = {}), this.tracked[HH][BH] = LH
      }
      remove(HH, BH) {
        const LH = this.tracked[HH];
        LH && (delete LH[BH], (0, AH.Ac)(LH) && delete this.tracked[HH])
      }
      handleUpdate(HH) {
        var BH;
        0 !== HH.duration ? this.upsert(HH.fH, HH.name, {
          icon: HH.icon,
          level: HH.level,
          displayName: SH(HH.displayName),
          showInNametag: null === (BH = HH.showInNametag) || void 0 === BH || BH,
          endTime: void 0 !== HH.duration && null !== HH.duration ? Date.now() + HH.duration : null
        }) : this.remove(HH.fH, HH.name)
      }
      handleRemove(HH, BH) {
        this.remove(HH, BH)
      }
      sample(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        const rH = {},
          SH = 1e3 / BH;
        for (const hH of Object.keys(this.tracked)) {
          const BH = this.tracked[hH],
            tH = {};
          for (const AH of Object.keys(BH)) {
            const rH = BH[AH];
            let zH = null;
            if (null !== rH.endTime) {
              const BH = Math.max(0, rH.endTime - LH);
              if (0 === BH) {
                this.remove(hH, AH);
                continue
              }
              zH = HH + Math.ceil(BH / SH)
            }
            tH[AH] = {
              icon: rH.icon,
              level: rH.level,
              displayName: rH.displayName,
              endTick: zH,
              showInNametag: rH.showInNametag
            }
          }(0, AH.Ac)(tH) || (rH[hH] = tH)
        }
        return rH
      }
    }

    function GH(HH, BH, LH, AH) {
      HH.hasEntity(BH) ? HH.updateEffect(BH, LH, AH) : function(HH, BH, LH) {
        rH.k.AX("EffectUpdate", {
          fH: HH,
          name: BH,
          ...LH
        }, !0)
      }(BH, LH, AH)
    }

    function YH(HH, BH, LH) {
      HH.hasEntity(BH) ? HH.removeEffect(BH, LH) : function(HH, BH) {
        rH.k.AX("RemoveEffect", {
          fH: HH,
          name: BH
        }, !0)
      }(BH, LH)
    }

    function uH(HH, BH, LH, AH, rH, SH, hH) {
      for (const EH of Object.keys(LH))
        for (const SH of Object.keys(LH[EH])) {
          var tH;
          null !== (tH = BH[EH]) && void 0 !== tH && tH[SH] || (YH(HH, EH, SH), AH && EH === AH && String(rH) !== String(EH) && YH(HH, rH, SH))
        }
      for (const QH of Object.keys(BH))
        for (const tH of Object.keys(BH[QH])) {
          var zH, CH;
          const WH = BH[QH][tH],
            MH = EH(WH.endTick, SH, hH);
          if (0 === MH) {
            YH(HH, QH, tH), AH && QH === AH && String(rH) !== String(QH) && YH(HH, rH, tH);
            continue
          }
          const xH = null === (zH = LH[QH]) || void 0 === zH ? void 0 : zH[tH],
            vH = xH && (uH = WH, (XH = xH).icon === uH.icon && XH.level === uH.level && XH.displayName === uH.displayName && XH.endTick === uH.endTick && XH.showInNametag === uH.showInNametag),
            PH = {
              icon: WH.icon,
              level: WH.level,
              displayName: null !== (CH = WH.displayName) && void 0 !== CH ? CH : void 0,
              duration: MH,
              showInNametag: WH.showInNametag
            };
          vH || GH(HH, QH, tH, PH), AH && QH === AH && GH(HH, rH, tH, {
            ...PH,
            showInNametag: !1
          })
        }
      var XH, uH
    }
  },
  37826: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => EH,
      c: () => CH,
      d: () => GH,
      f: () => tH,
      h: () => XH
    });
    var AH = LH(37821),
      rH = LH(37835),
      SH = LH(283);
    const hH = {
      description: "Bloxd Replay",
      accept: {
        [AH.i]: AH.e
      }
    };

    function tH() {
      return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker && !(0, SH.b)()
    }

    function zH(HH) {
      return HH instanceof DOMException && "AbortError" === HH.name
    }
    async function CH() {
      try {
        const [HH] = await window.showOpenFilePicker({
          multiple: !1,
          types: [hH]
        }), BH = await HH.getFile();
        return {
          handle: HH,
          bytes: new Uint8Array(await BH.arrayBuffer())
        }
      } catch (HH) {
        if (zH(HH)) return null;
        throw HH
      }
    }
    async function EH(HH) {
      if (HH && await async function(HH) {
          const BH = {
            mode: "readwrite"
          };
          return "granted" === await HH.queryPermission(BH) || "granted" === await HH.requestPermission(BH)
        }(HH)) return HH;
      try {
        return await window.showSaveFilePicker({
          suggestedName: (0, AH.o)(),
          types: [hH]
        })
      } catch (BH) {
        if (zH(BH)) return null;
        throw BH
      }
    }
    async function XH(HH, BH) {
      const LH = await HH.createWritable();
      await LH.write(new Blob([BH], {
        type: AH.i
      })), await LH.close()
    }

    function GH(HH) {
      return (0, AH.k)((0, rH.c)(HH))
    }
  },
  37336: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => XH
    });
    var AH = LH(15),
      rH = LH(81),
      SH = LH(30),
      hH = LH(3961),
      tH = LH(3831),
      zH = LH(7209);
    const CH = "shaderPackListingCheckedAt",
      EH = 36e5;

    function XH() {
      const {
        canUseShaderPacks: HH
      } = rH.featureFlags.settings;
      var BH, XH;
      (0, tH.m)(HH) && !(0, tH.k)(HH) && (BH = SH.e.getItem(CH), XH = Date.now(), "number" !== typeof BH || XH < BH || XH - BH >= EH) && (0, hH.d)((() => {
        (async function() {
          if ("landingPage" !== AH.c.get("gameState")) return;
          const HH = await (0, zH.e)();
          if (void 0 === (null === HH || void 0 === HH ? void 0 : HH.listing)) return;
          SH.e.setItem(CH, Date.now());
          const {
            followListingUpdates: BH
          } = await Promise.all([LH.e(89), LH.e(149), LH.e(145)]).then((() => LH(44803)));
          await BH(HH, HH.listing) || SH.e.removeItem(CH)
        })().catch((HH => {
          console.error("Failed to check the shader pack listing for an update", HH)
        }))
      }))
    }
  },
  9644: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => tH,
      f: () => rH,
      j: () => SH,
      l: () => hH
    });
    let AH = null;

    function rH(HH, BH) {
      return `${BH}\n${null!==HH&&void 0!==HH?HH:""}`
    }

    function SH(HH) {
      AH = HH
    }

    function hH(HH) {
      const BH = AH;
      return AH = null, null !== BH && BH.key === HH ? BH.settled : null
    }

    function tH(HH, BH, LH, AH) {
      let rH = !1;
      null !== BH && setTimeout((() => {
        AH() && !rH && BH()
      }), 0), HH.then((HH => {
        rH = !0, LH(HH)
      }))
    }
  },
  37368: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => zH
    });
    var AH = LH(304),
      rH = LH(15),
      SH = LH(37373),
      hH = LH(1659),
      tH = LH(2064);

    function zH(HH, BH) {
      var LH, zH, CH;
      if (!rH.c.get("isKeydownEnabled") || HH.repeat) return;
      const EH = HH.code;
      "Escape" === HH.key ? (0, hH.j)(HH) : null !== (LH = tH.w.OpenSettings) && void 0 !== LH && LH.includes(EH) ? (0, hH.B)(HH, AH.o.SETTINGS) : null !== (zH = tH.w.OpenCharacterCustomization) && void 0 !== zH && zH.includes(EH) ? (0, SH.c)() || (0, hH.B)(HH, AH.o.CUSTOMISATION, BH()) : null !== (CH = tH.w.ShowDebugOverlay) && void 0 !== CH && CH.includes(EH) && rH.c.set({
        showDebugOverlay: !rH.c.get("showDebugOverlay")
      })
    }
  },
  37339: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => cH,
      d: () => NH
    });
    var AH = LH(619),
      rH = LH(1177),
      SH = LH(152);
    const hH = "cf-";

    function tH(HH) {
      return `${hH}${HH}`
    }

    function zH(HH) {
      return HH.startsWith(tH("game-server-"))
    }

    function CH(HH) {
      return /^game-server-[a-z0-9-]+\.bloxd\.io$/i.test(HH)
    }
    var EH = LH(1188),
      XH = LH(1168),
      GH = LH(18),
      YH = LH(1148),
      uH = LH(1839),
      QH = LH(1871),
      WH = LH(3271),
      MH = LH(1287),
      xH = LH(1297),
      vH = LH(1502),
      PH = LH(1131),
      TH = LH(37341),
      UH = LH(30),
      VH = LH(120),
      OH = LH(1885),
      bH = LH(37366);
    const kH = Date.UTC(2026, 11, 8),
      mH = new Set(["seat_lost", "socket_unopened", "socket_timeout_unopened"]),
      oH = "gameServerRoute";
    async function IH(HH) {
      if (!HH.ok) {
        const BH = await HH.text().catch((() => ""));
        return 403 === HH.status && "ipv6_unsupported" === BH ? "ipv6Refused" : "other"
      }
      const BH = await HH.json().catch((() => null));
      return "object" === typeof BH && null !== BH && Number.isFinite(BH.version) ? "ours" : "other"
    }
    const fH = new class {
      constructor(HH) {
        this.deps = HH, this.autoRetriesLeft = 1, this.armReported = !1, this.pageArm = null, this.aliasFailedAt = null
      }
      hostFor(HH) {
        return this.deps.enabled && CH(HH) && "cloudflare" === this.heldRoute() ? tH(HH) : HH
      }
      async afterJoinFailed(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if (!this.deps.enabled) return null;
        const AH = new URL(HH).hostname;
        return zH(AH) ? await this.afterAliasJoinFailed(AH, BH, LH) : void 0 !== BH.gameServerUnreachable && this.checksJoinsTo(AH) && this.settle(await this.check(AH)) ? "reroute" : null
      }
      takeAutoRetry() {
        return !(this.autoRetriesLeft <= 0) && (this.autoRetriesLeft--, !0)
      }
      async waitToRetry(HH) {
        const BH = 1e3 + 2e3 * this.deps.random();
        return await this.deps.sleep(BH, HH).then((() => !0), (() => !1))
      }
      afterAutoRetryJoined(HH) {
        this.deps.enabled && this.deps.XX("game_server_route", "cf_retry_joined", HH)
      }
      afterAutoRetryFailed(HH) {
        if (!this.deps.enabled) return;
        if (null === HH) return void this.deps.XX("game_server_route", "cf_retry_failed:matchmake", 0);
        const {
          joinFailure: BH
        } = HH;
        void 0 === BH ? this.deps.XX("game_server_route", "cf_retry_failed:other", 0) : "refused" === BH.at ? this.deps.XX("game_server_route", "cf_retry_failed:refused", BH.code) : this.deps.XX("game_server_route", `cf_retry_failed:${BH.at}`, BH.code)
      }
      afterMatchmade(HH) {
        var BH;
        if (!this.deps.enabled) return;
        const LH = null === (BH = this.stored()) || void 0 === BH ? void 0 : BH.recoveryArm;
        if (void 0 !== LH && null !== this.heldRoute() && this.reportArm(LH), null === this.aliasFailedAt) return;
        const AH = zH(new URL(HH).hostname);
        this.deps.XX("game_server_route", AH ? "manual_retry_cf" : "manual_retry_direct", this.deps.now() - this.aliasFailedAt), this.aliasFailedAt = null
      }
      async checkStalledJoin(HH, BH, LH) {
        const AH = new URL(HH).hostname;
        if (!this.deps.enabled || !this.checksJoinsTo(AH) || !await this.deps.seatLegs.whenSlow(BH)) return null;
        const rH = this.deps.seatLegs.answered,
          SH = await this.check(AH);
        return LH() ? this.settle(SH) ? "blocked" : "reported" : "blocked" !== SH.outcome || BH.aborted || this.deps.seatLegs.answered !== rH ? null : (this.settle(SH), "blocked")
      }
      afterAliasJoinLeft(HH) {
        this.deps.enabled && (this.reportArm(), this.deps.XX("game_server_route", "cf_join_left", HH))
      }
      afterJoined(HH) {
        if (!this.deps.enabled) return;
        this.aliasFailedAt = null;
        const BH = new URL(HH).hostname,
          LH = zH(BH);
        if (LH) this.reportArm(), this.deps.XX("game_server_route", "cf_join", 0);
        else if (!CH(BH) || this.deps.random() >= .01) return;
        const AH = LH ? BH.slice(hH.length) : BH;
        this.deps.delay(2e4).then((async () => {
          await this.reportRtt(AH, "direct", "direct_failed"), await this.reportRtt(tH(AH), "cf", "cf_failed")
        }))
      }
      async afterAliasJoinFailed(HH, BH, LH) {
        let {
          gameServerUnreachable: AH,
          joinFailure: rH
        } = BH;
        if (void 0 === rH) return null;
        if ("refused" === rH.at) return this.reportArm(), this.deps.XX("game_server_route", "cf_join_refused", rH.code), null;
        const SH = this.recoveryArm();
        if (this.reportArm(SH), this.deps.XX("game_server_route", `cf_join_failed:${rH.at}`, rH.code), null !== LH && this.deps.XX("game_server_route", "cf_failed_since_route", LH), this.aliasFailedAt = this.deps.now(), void 0 === AH) return null;
        const hH = this.stored();
        return "cloudflare" !== (null === hH || void 0 === hH ? void 0 : hH.route) || "on" !== SH && hH.aliasFailedOnce || "ours" !== (await this.probeHost(HH)).answer ? (this.store({
          route: "direct",
          until: this.deps.now() + 36e5
        }), null) : "holdout" === SH ? (this.store({
          ...hH,
          aliasFailedOnce: !0
        }), null) : "cloudflare" === this.heldRoute() && mH.has(rH.at) ? "retry" : null
      }
      recoveryArm() {
        if (this.deps.now() >= kH) return "on";
        const HH = this.stored();
        return void 0 !== (null === HH || void 0 === HH ? void 0 : HH.recoveryArm) ? HH.recoveryArm : (this.pageArm ??= 100 * this.deps.random() < 20 ? "holdout" : "on", null !== HH && this.store(HH), this.pageArm)
      }
      reportArm(HH) {
        this.armReported || this.deps.now() >= kH || (this.armReported = !0, this.deps.XX("game_server_route", "holdout" === (null !== HH && void 0 !== HH ? HH : this.recoveryArm()) ? "alias_recovery_holdout" : "alias_recovery_on", 0))
      }
      checksJoinsTo(HH) {
        return CH(HH) && "direct" !== this.heldRoute()
      }
      settle(HH) {
        let {
          outcome: BH,
          cfMs: LH
        } = HH;
        return this.deps.XX("game_server_route", BH, LH), "blocked" === BH && (this.store({
          route: "cloudflare",
          until: this.deps.now() + 1728e5
        }), !0)
      }
      async check(HH) {
        const BH = this.probeHost(tH(HH));
        if ("none" !== (await this.probeHost(HH)).answer) return {
          outcome: "direct_reachable",
          cfMs: 0
        };
        const {
          answer: LH,
          ms: AH
        } = await BH;
        return "ours" !== LH && "ipv6Refused" !== LH ? {
          outcome: "cf_unreachable",
          cfMs: 0
        } : "none" !== (await this.probeHost(HH)).answer ? {
          outcome: "direct_reachable",
          cfMs: AH
        } : {
          outcome: "ipv6Refused" === LH ? "blocked_ipv6" : "blocked",
          cfMs: AH
        }
      }
      async reportRtt(HH, BH, LH) {
        const AH = "ours" === (await this.probeHost(HH)).answer ? await this.probeHost(HH) : null;
        "ours" === (null === AH || void 0 === AH ? void 0 : AH.answer) ? this.deps.XX("game_server_rtt", BH, AH.ms): this.deps.XX("game_server_rtt", LH, 0)
      }
      probeHost(HH) {
        return this.deps.probe(`https://${HH}/version`, 8e3)
      }
      stored() {
        return function(HH) {
          if ("object" !== typeof HH || null === HH) return null;
          const {
            route: BH,
            until: LH,
            aliasFailedOnce: AH,
            recoveryArm: rH
          } = HH;
          return "cloudflare" !== BH && "direct" !== BH || "number" !== typeof LH ? null : {
            route: BH,
            until: LH,
            ...!0 === AH ? {
              aliasFailedOnce: AH
            } : {},
            ..."on" === rH || "holdout" === rH ? {
              recoveryArm: rH
            } : {}
          }
        }(this.deps.storage.getItem(oH))
      }
      heldRoute() {
        const HH = this.stored();
        return null !== HH && HH.until > this.deps.now() ? HH.route : null
      }
      store(HH) {
        var BH, LH, AH, rH;
        const SH = null !== (BH = null !== (LH = null !== (AH = HH.recoveryArm) && void 0 !== AH ? AH : null === (rH = this.stored()) || void 0 === rH ? void 0 : rH.recoveryArm) && void 0 !== LH ? LH : this.pageArm) && void 0 !== BH ? BH : void 0;
        this.deps.storage.setItem(oH, void 0 === SH ? HH : {
          ...HH,
          recoveryArm: SH
        })
      }
    }({
      storage: UH.e,
      probe: async function(HH, BH) {
        const LH = performance.now(),
          AH = await (0, YH.r)(HH, {
            cache: "no-store"
          }, BH, (async HH => {
            const BH = Math.round(performance.now() - LH);
            return {
              answer: await IH(HH),
              ms: BH
            }
          }));
        return null !== AH && void 0 !== AH ? AH : {
          answer: "none",
          ms: 0
        }
      },
      XX: uH.C,
      enabled: !(0, VH.isDiscordClient)(),
      now: Date.now,
      random: Math.random,
      delay: HH => new Promise((BH => {
        setTimeout(BH, HH)
      })),
      sleep: OH.d,
      seatLegs: bH.f
    });
    var lH = LH(1757),
      KH = LH(9644);

    function cH(HH) {
      return async (BH, LH, hH, tH, CH) => {
        let XH, vH = performance.now();
        if ((0, AH.M)(hH)) {
          if (CH.aborted) return qH();
          const HH = BH instanceof rH.f ? null : (0, KH.l)((0, KH.f)(BH, LH));
          let AH = await (null !== HH && void 0 !== HH ? HH : NH(BH, LH, tH));
          if (null !== HH && performance.now() - AH.at > gH && !CH.aborted) {
            const HH = await NH(BH, LH, tH);
            HH.result.isError() && !AH.result.isError() || (AH = HH)
          }
          const SH = AH.result;
          if (vH = AH.at, CH.aborted || WH.d.matchmakingEnded(SH.isError() ? null : AH.at), SH.isError()) {
            const HH = SH.asError();
            return console.log("Join room did not succeed, reason:", HH.message), HH.forward()
          }
          XH = SH.getValue(), fH.afterMatchmade(XH.endpoint)
        } else {
          WH.d.skipPlayWait();
          const HH = jH(hH.replace("https://", "").replace("http://", ""));
          if (HH.isError()) return HH.asError().forward();
          XH = {
            endpoint: HH.getValue(),
            gameNameWithVariation: LH,
            lobbyName: BH instanceof rH.f ? BH.getLobbyName() : BH
          }
        }
        if (CH.aborted) return qH();
        console.log(`Connecting to ${XH.gameNameWithVariation} in lobby ${XH.lobbyName} on game server ${XH.endpoint}`), GH.k.AX("matchmakeAndPlayStepCompleted", {
          step: SH.h.REQUEST_TO_MATCHMAKING,
          totalSubSteps: 1
        }), (0, uH.m)(), QH.e.markGameLoadStart((0, lH.e)()), (0, xH.p)({
          websocketUrl: XH.endpoint,
          gameNameWithVariation: XH.gameNameWithVariation,
          lobbyName: XH.lobbyName
        }), GH.k.AX("loadingScreenState", "loadingPage:loadingGame");
        const PH = async () => {
          const HH = await async function(HH, BH, LH, AH) {
            const rH = await RH(HH, BH, LH);
            if (!rH.isError() && !AH.aborted) {
              const {
                endpoint: HH,
                gameNameWithVariation: BH,
                lobbyName: LH
              } = rH.getValue();
              (0, xH.p)({
                websocketUrl: HH,
                gameNameWithVariation: BH,
                lobbyName: LH
              })
            }
            return rH
          }(BH, LH, tH, CH);
          return HH.isError() || (XH = HH.getValue(), vH = performance.now()), HH
        }, TH = !(0, AH.M)(hH), UH = BH => HH({
          place: XH,
          userContext: tH,
          direct: TH,
          matchedAt: vH,
          rematch: PH
        }, BH), VH = () => zH(new URL(XH.endpoint).hostname), OH = VH() ? performance.now() : null, bH = TH ? {
          result: await UH(CH),
          blockedAt: null,
          failureChecked: !1
        } : await async function(HH, BH, LH) {
          const AH = new YH.d(LH),
            rH = new AbortController;
          let SH = null,
            hH = !1,
            tH = null;
          const zH = fH.checkStalledJoin(HH, rH.signal, (() => hH)).then((HH => {
            tH = HH, "blocked" === HH && (SH = performance.now(), AH.controller.abort())
          }));
          try {
            const HH = await BH(AH.signal);
            return hH = HH.isError() && void 0 !== HH.asError().debugResult.gameServerUnreachable, rH.abort(), hH && await zH, {
              result: HH,
              blockedAt: SH,
              failureChecked: "reported" === tH
            }
          } finally {
            rH.abort(), AH.unfollow()
          }
        }(XH.endpoint, UH, CH);
        let kH = null !== OH && void 0 !== OH ? OH : bH.blockedAt,
          mH = bH.result;
        const oH = () => null === kH ? null : performance.now() - kH,
          IH = mH.isError() && !0 === mH.asError().debugResult.rematch;
        let cH = null;
        if (!mH.isError() || TH || CH.aborted || IH || null !== bH.blockedAt || bH.failureChecked || (cH = await fH.afterJoinFailed(XH.endpoint, mH.asError().debugResult, oH())), mH.isError() && !TH && ("reroute" === cH || !CH.aborted && (IH || null !== bH.blockedAt))) {
          if (IH || (kH ??= performance.now(), GH.k.AX("gameServerRouteSwitched")), CH.aborted) return eH(kH), qH();
          console.log("Matchmaking again");
          const HH = await PH();
          if (HH.isError()) return HH.asError().forward();
          if (CH.aborted) return eH(kH), qH();
          mH = await UH(CH), cH = null, !mH.isError() || CH.aborted || IH && !VH() || (cH = await fH.afterJoinFailed(XH.endpoint, mH.asError().debugResult, oH()))
        }
        if (mH.isError() && "retry" === cH && !CH.aborted && fH.takeAutoRetry()) {
          if (!await fH.waitToRetry(CH)) return qH();
          console.log("Joining through Cloudflare again");
          const HH = await PH();
          if (CH.aborted) return qH();
          if (HH.isError()) return fH.afterAutoRetryFailed(null), mH.asError().forward();
          if (mH = await UH(CH), mH.isError() && !CH.aborted) {
            const HH = mH.asError().debugResult;
            await fH.afterJoinFailed(XH.endpoint, HH, null), fH.afterAutoRetryFailed(HH)
          } else if (!mH.isError()) {
            var nH;
            fH.afterAutoRetryJoined(null !== (nH = oH()) && void 0 !== nH ? nH : 0)
          }
        }
        return mH.isError() ? (!0 === mH.asError().debugResult.xB && CH.aborted && eH(kH), mH.asError().forward()) : (fH.afterJoined(XH.endpoint), GH.k.AX("joinedGame", {
          gameNameWithVariation: XH.gameNameWithVariation,
          lobbyName: XH.lobbyName
        }), (0, MH.S)(), window.gtag ? window.gtag("event", "conversion", {
          send_to: "AW-16469618203/ipUBCJKWoJUZEJvcqa09"
        }) : console.error("window.gtag not defined"), EH.e.value({
          gameNameWithVariation: XH.gameNameWithVariation,
          lobbyName: XH.lobbyName
        }))
      }
    }

    function eH(HH) {
      null !== HH && fH.afterAliasJoinLeft(performance.now() - HH)
    }

    function qH() {
      return EH.e.errorWithCode("Left the game while it loaded", SH.h.REQUEST_TO_MATCHMAKING, {
        severity: "low",
        xB: !0
      })
    }
    setTimeout((() => {
      window.initialD ? Date.now = window.initialD : console.error("window.initialD not defined")
    }), 3e3);
    const gH = 1e4;

    function NH(HH, BH, LH) {
      return RH(HH, BH, LH).then((HH => ({
        result: HH,
        at: performance.now()
      })))
    }
    async function RH(HH, BH, LH) {
      return (0, AH.M)(HH) || HH instanceof rH.f || !(HH.length > XH.R) ? await vH.d.matchmakePlayer(LH, HH, BH, (0, TH.e)()).then((HH => {
        if (!1 === HH.succeeded) return EH.e.errorWithCode(HH.failReason, SH.h.REQUEST_TO_MATCHMAKING, {
          severity: "low"
        });
        const {
          gameServerHost: BH,
          lobbyName: LH,
          gameNameWithVariation: AH
        } = HH, rH = jH(fH.hostFor(BH));
        return rH.isError() ? rH.asError().forward() : EH.e.value({
          endpoint: rH.getValue(),
          gameNameWithVariation: AH,
          lobbyName: LH
        })
      })).catch((HH => (console.error("Bad response from the matchmaking server:", HH), EH.e.errorWithCode(HH.toString(), SH.h.REQUEST_TO_MATCHMAKING, {
        error: HH,
        severity: "medium"
      })))) : (console.error("Invalid lobby ID:", HH), EH.e.errorWithCode("This lobby link's name is too long. Ask for a new link.", SH.h.REQUEST_TO_MATCHMAKING, {
        severity: "low"
      }))
    }

    function jH(HH) {
      const BH = PH.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(HH);
      return BH.isError() ? EH.e.errorWithCode(BH.asError().message, SH.h.CONNECT_TO_GAME_SERVER, {
        severity: "medium"
      }) : EH.e.value(BH.getValue())
    }
    window.leaveGame = () => {
      (0, xH.j)("/")
    }
  },
  37345: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => GH,
      g: () => EH,
      i: () => YH,
      j: () => XH
    });
    var AH = LH(317),
      rH = LH(648),
      SH = LH(659),
      hH = LH(30);
    const tH = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      zH = "playSessionGameNameWithVariation",
      CH = "wasMatchmakePlayer";

    function EH() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hH.f;
      (0, SH.k)(HH, tH)
    }

    function XH() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hH.f).setItem(CH, !0)
    }

    function GH() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hH.f;
      return (0, SH.e)(HH, tH)
    }

    function YH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hH.f;
      const LH = (0, SH.e)(BH, tH),
        EH = function(HH) {
          const BH = HH.getItem(zH);
          return "string" !== typeof BH ? null : BH
        }(BH),
        XH = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hH.f).getItem(CH)
        }(BH);
      let GH;
      return GH = null !== LH && null !== EH && (0, SH.i)(BH, tH) && function(HH, BH, LH) {
          const rH = (0, AH.Wb)(HH),
            SH = (0, AH.Wb)(BH),
            hH = (0, AH.Ob)(HH),
            tH = (0, AH.Ob)(BH);
          return !(rH !== SH || !LH) || rH === SH && hH === tH
        }(EH, HH, XH) ? LH : (0, rH.b)(), (0, SH.o)(BH, tH, GH), BH.setItem(zH, HH),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hH.f).removeItem(CH)
        }(BH), GH
    }
  },
  37341: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => TH,
      i: () => UH
    });
    var AH = LH(1005),
      rH = LH(186),
      SH = LH(314),
      hH = LH(625),
      tH = LH(317),
      zH = LH(1011),
      CH = LH(642),
      EH = LH(673),
      XH = LH(4928),
      GH = LH(81),
      YH = LH(120),
      uH = LH(1789),
      QH = LH(101),
      WH = LH(37345),
      MH = LH(30),
      xH = LH(656),
      vH = LH(628),
      PH = LH(37347);

    function TH() {
      var HH, BH;
      return [...null !== (HH = navigator.languages) && void 0 !== HH ? HH : [null !== (BH = navigator.language) && void 0 !== BH ? BH : "none"], "en-Gb"]
    }

    function UH(HH, BH, LH, UH, VH) {
      const OH = (0, AH.l)(BH) ? (0, AH.q)(BH) : null,
        bH = HH.isLoggedIn() && void 0 !== (0, rH.d)(SH.o, YH.siteUsed) ? (0, vH.e)() : null,
        kH = {
          cookies: (0, uH.getAllCookiesForGameNameWithVariation)(BH),
          isMobile: (0, GH.isMobile)(),
          isUsingCustomGameTexturePack: null !== OH && VH(OH),
          generalCookies: {
            joinDiscord: !!MH.e.getItem("DiscordPressed"),
            newGo: XH.c,
            ...HH.getMetricsCookies(),
            trafficCode: UH,
            compliance: GH.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, GH.getBrowserName)(),
            version: (0, GH.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, GH.getPlatformType)(),
            deviceType: (0, QH.d)()
          },
          isLoggedIn: HH.isLoggedIn(),
          lobbyName: LH,
          languages: TH(),
          version: hH.d,
          siteUsed: YH.siteUsed,
          subsiteUsed: YH.subsiteUsed,
          playSessionId: (0, WH.i)(BH),
          visitSessionId: (0, xH.c)(),
          clientReason: CH.A.reason,
          budgetBasis: (0, PH.f)(),
          ...null !== EH.r && {
            diagClaim: EH.r.claimId
          },
          ...null !== bH && {
            webGpuLoss: bH
          }
        };
      return null !== OH && (0, tH.Ic)(OH) ? (kH.lobbyName = (0, AH.h)(OH, (0, AH.m)(BH), LH), {
        roomName: `classic_${zH.i}`,
        joinOptions: kH
      }) : {
        roomName: BH,
        joinOptions: kH
      }
    }
  },
  9467: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH
    });
    var AH = LH(9475),
      rH = LH(619),
      SH = LH(120);

    function hH(HH) {
      var BH, LH;
      if ((0, rH.M)(HH)) return !0;
      const hH = null !== (BH = null === (LH = SH.siteUsedData[SH.siteUsed]) || void 0 === LH ? void 0 : LH.adConfig.showRewardedAds) && void 0 !== BH && BH;
      for (const rH in HH) {
        const BH = HH[rH];
        if (null !== BH && void 0 !== BH && BH.items)
          for (const HH in BH.items)
            if ((0, AH.i)(BH.items[HH], hH)) return !1
      }
      return !0
    }
  },
  37457: (HH, BH, LH) => {
    function AH(HH, BH) {
      for (let LH = 0; LH < HH.length; LH++)
        if (HH[LH].identifier === BH) return HH[LH];
      return null
    }

    function rH(HH, BH) {
      return null !== AH(HH, BH)
    }
    LH.d(BH, {
      b: () => AH,
      f: () => rH
    })
  },
  37465: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => EH,
      e: () => GH,
      h: () => MH,
      l: () => CH
    });
    var AH = LH(15),
      rH = LH(2600),
      SH = LH(2605),
      hH = LH(2611),
      tH = LH(2680),
      zH = LH(18);

    function CH(HH, BH) {
      return (!(0, hH.e)() || 0 === HH && 0 === BH) && (0, SH.A)(rH.g.Joystick, 0, HH, BH, 0)
    }
    const EH = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function XH(HH) {
      return HH.classList.contains("TouchKeyHit") && YH() ? null : HH.firstElementChild
    }

    function GH(HH) {
      return HH.classList.contains("TouchKeyHit") && !HH.classList.contains("CanvasZone") ? {
        whole: !YH(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: uH(XH(HH))
      }
    }

    function YH() {
      return document.documentElement.classList.contains(tH.m)
    }

    function uH(HH) {
      return !(HH instanceof HTMLElement) || HH.offsetWidth <= 0 || HH.offsetHeight <= 0 ? null : {
        width: HH.offsetWidth,
        height: HH.offsetHeight
      }
    }

    function QH(HH, BH) {
      const LH = HH => Math.min(65535, Math.round(4 * HH));
      return (LH(HH) | LH(BH) << 16) >>> 0
    }

    function WH(HH) {
      return {
        x: HH.left + HH.width / 2,
        y: HH.top + HH.height / 2,
        radius: Math.min(HH.width, HH.height) / 2
      }
    }
    const MH = new class {
      constructor(HH) {
        this.write = HH, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        BH ? this.elements.set(HH, {
          element: BH,
          hidden: LH
        }) : this.elements.delete(HH), this.measureOne(HH)
      }
      measure() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = HH.left, this.canvasTop = HH.top;
        for (const BH of this.elements.keys()) this.measureOne(BH)
      }
      hitZone(HH, BH) {
        let LH = null,
          AH = 1;
        for (const rH of this.elements.keys()) {
          const SH = this.shown(rH);
          if (!SH) continue;
          const {
            rect: hH,
            element: tH
          } = SH, zH = WH(hH), CH = Math.max(0, hH.width / 2 - zH.radius), EH = Math.max(0, hH.height / 2 - zH.radius), GH = Math.max(0, Math.abs(HH - zH.x) - CH), YH = Math.max(0, Math.abs(BH - zH.y) - EH), QH = tH.firstElementChild;
          let MH = Math.hypot(GH, YH) / zH.radius;
          const xH = uH(XH(tH));
          xH && (MH = Math.min(MH, Math.max(2 * Math.abs(HH - zH.x) / xH.width, 2 * Math.abs(BH - zH.y) / xH.height))), MH < AH && (LH = {
            code: rH,
            element: tH,
            key: QH,
            ...zH
          }, AH = MH)
        }
        return LH
      }
      measureOne(HH) {
        const BH = this.shown(HH);
        if (!BH) return void this.write(rH.g.TouchZone, HH, 0, 0, 0);
        const {
          rect: LH,
          element: AH
        } = BH, SH = WH(LH);
        this.write(rH.g.TouchZone, HH, SH.x - this.canvasLeft, SH.y - this.canvasTop, QH(LH.width, LH.height));
        const hH = uH(XH(AH));
        this.write(rH.g.TouchZone, 256 | HH, 0, 0, hH ? QH(hH.width, hH.height) : 0)
      }
      shown(HH) {
        const BH = this.elements.get(HH),
          LH = AH.c.get("worldPanelHud");
        if (!BH || BH.hidden || "none" === LH) return null;
        const rH = BH.element.getBoundingClientRect();
        return rH.width <= 0 || rH.height <= 0 ? null : {
          rect: rH,
          element: BH.element
        }
      }
    }(SH.A);
    (0, zH.m)(tH.e, (() => {
      MH.measure()
    }))
  },
  37761: (HH, BH, LH) => {
    function AH(HH, BH) {
      return null === HH || null === BH ? HH === BH : HH[0] === BH[0] && HH[1] === BH[1] && HH[2] === BH[2]
    }

    function rH(HH) {
      return [HH[0] + .5, HH[1] + .5, HH[2] + .5]
    }
    LH.d(BH, {
      e: () => rH,
      g: () => AH
    })
  },
  37708: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => zH,
      g: () => tH
    });
    const AH = {
        files: {
          "debugLog.ts": "export function debugLog(message: string): void {\n\tconsole.log(`[debug] ${message}`)\n}\n",
          "index.ts": 'import type { PlayerId } from "@bloxd"\nimport { debugLog } from "./debugLog"\n\nonPlayerJoin = (player: PlayerId) => {\n\tapi.log(`Player ${player} joined - Love from Debug Plugin!`)\n}\n\nexport { debugLog }\n'
        },
        dependencies: [],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  debugLog: () => debugLog\n});\nmodule.exports = __toCommonJS(index_exports);\n\n// world-code-plugin:debugLog.ts\nfunction debugLog(message) {\n  console.log(`[debug] ${message}`);\n}\n\n// world-code-plugin:index.ts\nonPlayerJoin = (player) => {\n  api.log(`Player ${player} joined - Love from Debug Plugin!`);\n};\n',
        types: "declare function debugLog(message: string): void;\n\nexport { debugLog };\n"
      },
      rH = {
        files: {
          "index.ts": 'import type { CustomTextStyling, DialogueText, PlayerId, SpeechVoice } from "@bloxd"\nimport { clearTimeout, setTimeout, TimeoutId } from "@plugins/helpers"\n\n/** Long enough to read most lines once they have appeared. */\nconst DEFAULT_DURATION_MS = 6000\n\nexport type DialogueOpts = {\n\t/** Shown above the line, such as a name. */\n\tspeakerName?: string | CustomTextStyling\n\t/** A preset such as "regular" or "gruff", or every synth parameter. Omit for a silent line. */\n\tvoice?: SpeechVoice\n\t/** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n\tdurationMs?: number\n}\n\nconst hideTimeouts: Record<PlayerId, TimeoutId> = {}\n\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item\'s icon inline\n * @param opts - The speaker\'s name, the voice that reads it out, and how long it stays up\n */\nexport function sayDialogue(playerId: PlayerId, text: DialogueText, opts: DialogueOpts = {}) {\n\tif (hideTimeouts[playerId] !== undefined) {\n\t\tclearTimeout(hideTimeouts[playerId])\n\t\t// Cleared first, so a line said again replays rather than matching the value already set\n\t\tapi.setClientOption(playerId, "dialogue", null)\n\t}\n\tapi.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice })\n\thideTimeouts[playerId] = setTimeout(\n\t\t() => {\n\t\t\tclearDialogue(playerId)\n\t\t},\n\t\topts.durationMs ?? DEFAULT_DURATION_MS,\n\t\tplayerId,\n\t)\n}\n\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\nexport function clearDialogue(playerId: PlayerId) {\n\tif (hideTimeouts[playerId] === undefined) {\n\t\treturn\n\t}\n\tclearTimeout(hideTimeouts[playerId])\n\tdelete hideTimeouts[playerId]\n\tapi.setClientOption(playerId, "dialogue", null)\n}\n\nonPlayerLeave = (playerId: PlayerId) => {\n\tdelete hideTimeouts[playerId]\n}\n'
        },
        dependencies: ["helpers"],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  clearDialogue: () => clearDialogue,\n  sayDialogue: () => sayDialogue\n});\nmodule.exports = __toCommonJS(index_exports);\nvar import_helpers = require("@plugins/helpers");\nvar DEFAULT_DURATION_MS = 6e3;\nvar hideTimeouts = {};\nfunction sayDialogue(playerId, text, opts = {}) {\n  if (hideTimeouts[playerId] !== void 0) {\n    (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n    api.setClientOption(playerId, "dialogue", null);\n  }\n  api.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice });\n  hideTimeouts[playerId] = (0, import_helpers.setTimeout)(\n    () => {\n      clearDialogue(playerId);\n    },\n    opts.durationMs ?? DEFAULT_DURATION_MS,\n    playerId\n  );\n}\nfunction clearDialogue(playerId) {\n  if (hideTimeouts[playerId] === void 0) {\n    return;\n  }\n  (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n  delete hideTimeouts[playerId];\n  api.setClientOption(playerId, "dialogue", null);\n}\nonPlayerLeave = (playerId) => {\n  delete hideTimeouts[playerId];\n};\n',
        types: "import { CustomTextStyling, SpeechVoice, PlayerId, DialogueText } from '@bloxd';\n\ntype DialogueOpts = {\n    /** Shown above the line, such as a name. */\n    speakerName?: string | CustomTextStyling;\n    /** A preset such as \"regular\" or \"gruff\", or every synth parameter. Omit for a silent line. */\n    voice?: SpeechVoice;\n    /** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n    durationMs?: number;\n};\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item's icon inline\n * @param opts - The speaker's name, the voice that reads it out, and how long it stays up\n */\ndeclare function sayDialogue(playerId: PlayerId, text: DialogueText, opts?: DialogueOpts): void;\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\ndeclare function clearDialogue(playerId: PlayerId): void;\n\nexport { clearDialogue, sayDialogue };\nexport type { DialogueOpts };\n"
      },
      SH = {
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
      hH = {
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
      tH = {
        debug: {
          name: "debug",
          specifier: "@plugins/debug",
          sourceVfsPath: "/node_modules/@plugins/debug/index.ts",
          typesVfsPath: "/node_modules/@plugins/debug/index.d.ts",
          files: AH.files,
          dependencies: AH.dependencies,
          bundledSource: AH.bundledSource,
          types: AH.types
        },
        dialogue: {
          name: "dialogue",
          specifier: "@plugins/dialogue",
          sourceVfsPath: "/node_modules/@plugins/dialogue/index.ts",
          typesVfsPath: "/node_modules/@plugins/dialogue/index.d.ts",
          files: rH.files,
          dependencies: rH.dependencies,
          bundledSource: rH.bundledSource,
          types: rH.types
        },
        helpers: {
          name: "helpers",
          specifier: "@plugins/helpers",
          sourceVfsPath: "/node_modules/@plugins/helpers/index.ts",
          typesVfsPath: "/node_modules/@plugins/helpers/index.d.ts",
          files: SH.files,
          dependencies: SH.dependencies,
          bundledSource: SH.bundledSource,
          types: SH.types
        },
        sessionBasedGame: {
          name: "sessionBasedGame",
          specifier: "@plugins/sessionBasedGame",
          sourceVfsPath: "/node_modules/@plugins/sessionBasedGame/index.ts",
          typesVfsPath: "/node_modules/@plugins/sessionBasedGame/index.d.ts",
          files: hH.files,
          dependencies: hH.dependencies,
          bundledSource: hH.bundledSource,
          types: hH.types
        }
      };

    function zH(HH) {
      const BH = [],
        LH = new Set,
        AH = HH => {
          if (LH.has(HH)) return;
          const rH = tH[HH];
          if (rH) {
            LH.add(HH);
            for (const HH of rH.dependencies) AH(HH);
            BH.push(HH)
          }
        };
      for (const rH of HH) AH(rH);
      return BH
    }
  },
  37724: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => zH,
      f: () => tH,
      g: () => hH,
      h: () => SH,
      i: () => CH,
      k: () => EH,
      m: () => uH,
      q: () => YH,
      s: () => GH
    });
    var AH = LH(1182);
    const rH = ["quickjs", "ses"];

    function SH(HH) {
      return rH.includes(HH)
    }

    function hH(HH) {
      return HH === AH.g || HH === AH.h
    }

    function tH(HH, BH) {
      return HH === AH.g && BH === AH.h || HH === AH.h && BH === AH.g
    }

    function zH(HH) {
      const BH = AH.h in HH,
        LH = AH.g in HH;
      return BH && LH ? null : BH ? AH.h : LH ? AH.g : null
    }

    function CH(HH, BH, LH) {
      const AH = `${BH}/`;
      return HH.filter((HH => HH.startsWith(AH))).map((HH => [HH, `${LH}/${HH.slice(AH.length)}`]))
    }

    function EH(HH, BH) {
      let LH = 0;
      for (const [AH, rH] of Object.entries(HH)) AH !== BH && (LH += rH.length);
      return LH
    }
    const XH = "@plugins/";

    function GH(HH) {
      return `${XH}${HH}`
    }

    function YH(HH, BH) {
      return `/node_modules/@plugins/${HH}/${BH}`
    }

    function uH(HH) {
      if (!HH.startsWith(XH)) return null;
      const BH = HH.slice(XH.length);
      return function(HH) {
        return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(HH)
      }(BH) ? BH : null
    }
  },
  37732: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => tH,
      d: () => rH,
      h: () => hH,
      i: () => zH,
      m: () => SH
    });
    var AH = LH(2624);
    const rH = 5,
      SH = "[SCHEMATIC]",
      hH = 1024e4;

    function tH(HH) {
      return HH.endsWith(".bloxdschem") && (0, AH.s)(HH.slice(0, -11) + ".ts") && HH.length <= 64
    }

    function zH(HH) {
      return Object.fromEntries(Object.keys(HH).map((HH => [HH, SH])))
    }
  },
  5325: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => rH,
      g: () => AH,
      i: () => SH,
      k: () => zH,
      l: () => hH
    });
    const AH = ["sine", "triangle", "square", "sawtooth"],
      rH = 55,
      SH = {
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

    function hH(HH) {
      return "string" !== typeof HH ? HH : Object.hasOwn(SH, HH) ? SH[HH] : null
    }

    function tH(HH, BH, LH) {
      return Math.min(LH, Math.max(BH, HH))
    }

    function zH(HH) {
      const BH = tH(HH.durationMs, 10, 500),
        LH = tH(HH.attackMs, 0, BH),
        {
          intonation: rH
        } = HH;
      return {
        waveform: AH.includes(HH.waveform) ? HH.waveform : "sine",
        pitchHz: tH(HH.pitchHz, 20, 4e3),
        glideSemitones: tH(HH.glideSemitones, -24, 24),
        durationMs: BH,
        attackMs: LH,
        releaseMs: tH(HH.releaseMs, 0, BH - LH),
        lowpassHz: null === HH.lowpassHz ? null : tH(HH.lowpassHz, 20, 2e4),
        volume: tH(HH.volume, 0, 2),
        intonation: {
          variationSemitones: tH(rH.variationSemitones, 0, 6),
          declineSemitones: tH(rH.declineSemitones, 0, 12),
          questionRiseSemitones: tH(rH.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: tH(rH.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: tH(HH.syllableMs, 25, 200)
      }
    }
  },
  9511: () => {},
  10703: HH => {
    HH.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAHklEQVR4nGNY3x/6nxjMQH2Fcyq8/hODaWA11d0IAPvLyX36T0UzAAAAAElFTkSuQmCC"
  },
  18898: HH => {
    HH.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAC4CAYAAADqkK6nAAAAAXNSR0IArs4c6QAAAuxJREFUeJzt1jFOFHEchuEfxpqeaGusuYDhCpbewMbEwmNYmNBwA0quYLgAtaGF2HuBtVpEWHBNXnBXnqeanUzxT+bNtzMDsOl21nhm8eCnYBvd2c6zxzwFT8N9S7WYmfn0am9mZl6+2H2M87DhLi5/zMzM5/Pvy1u3GrJU5FYt1WJm5svB60c+Ctvo49dvy8urliwVuetL5RuKv7bqG8tSkXt+88afFurN+3czM7P/9sPDnIiNcHZy+Nvv06Pjlc9d9fJrqXxT0bu1VHexUE/Tzfd912JdZ6nIrb1UFop1WSpyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIit3ZUZyeHc3Zy+JBn4T9hqcg9X/fB06Pj337vv/2QH4bNs/x3uvn+72OpyO1cu17MzHx6tTczMy9f7P6L87BlLi5/zMzM5/Pvy1s7lorczop7i5mZLwevH/kobKOPX78tL69aslTkVi3Vkm8sbln1DXXzGUtF7r6lWlo8+CnYRne2Y6mAzfcTBsFAqM32XQcAAAAASUVORK5CYII="
  },
  20796: HH => {
    HH.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJUlEQVR4nGMwsIpkIAYz0FThfyjGymcgVSFMEJtCsBjJCgcgeABOGmAZtndiFgAAAABJRU5ErkJggg=="
  },
  20800: HH => {
    HH.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJ0lEQVR4nGMwsIpkIAYzQBn/kTBWMQYsgtgwA+0UMuBTNIgU4g1wAE6xgffL0CuLAAAAAElFTkSuQmCC"
  },
  20803: HH => {
    HH.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJElEQVR4nGMwsIpkIAYzkKrwPxLGKsZAc4UMaJh8hdQPHoIKAboeZhN3YNlSAAAAAElFTkSuQmCC"
  },
  20810: HH => {
    HH.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMUlEQVR4nGMwsIpkIAYzoAn8R8MM2BSiK/qPrJiQov8wxWQrxMkm2USiPUNS8OANcADc3H37DfNNQQAAAABJRU5ErkJggg=="
  },
  20813: HH => {
    HH.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAKElEQVR4nGMwsIpkIAYzIHH+48AMyApxKfoPU0yRQgZsYkNJIcEABwCQU3/5LLo7QwAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);